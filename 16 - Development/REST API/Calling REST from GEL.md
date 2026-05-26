---
title: Calling the REST API from a GEL Script
aliases:
  - REST API from GEL
  - REST API in GEL
  - REST API in GEL script
  - REST API in a GEL custom action
  - REST API in a Clarity process
  - REST API in process
  - GEL REST API
  - GEL REST API authentication
  - GEL HTTP call
  - GEL HttpURLConnection
  - Internal session minting
  - UserSessionControllerFactory
  - DefaultSecurityIdentifier
  - authToken from GEL
  - Calling REST from a custom action
  - x-api-association-key
canonical: true
audience: dev
domain: development
tags:
  - dev
  - howto
  - concept
---
# Calling the REST API from a GEL Script

> [!IMPORTANT] Default pattern — always use this when calling REST from GEL
> When a GEL custom action or integration process needs to call any `/ppm/rest/v1/...` endpoint, authenticate by **minting a session inside the JVM** via Clarity's internal Java security classes (`UserSessionControllerFactory` + `DefaultSecurityIdentifier`). **Do not** call `/auth/login`, **do not** embed Basic auth, and **do not** store API keys in the script. That's the standing rule for all on-prem GEL → REST work in this knowledge graph.

## When to use this note

Use this note when:

- A GEL script in a **custom action** or **integration process** needs to call a Clarity REST endpoint.
- You're writing a process step that creates / reads / updates Clarity records via REST instead of XOG SOAP.
- You're looking at an existing GEL script that uses `java.net.URL` + `HttpURLConnection` against `/ppm/rest/v1` and need the canonical headers / auth.

Use [[Authentication]] (not this note) when:

- The caller is **external** to Clarity (a Boomi flow, a Python ETL, a Postman session, a browser app).
- The integration runs on Clarity **SaaS** — the internal-session trick requires JVM access and is on-prem only.
- SSO is involved and the caller is outside Clarity — that's the key-auth + `/tokens/rest/v1` story.

## Why this is the default

GEL runs **inside the trusted Clarity JVM**. The security stack will mint a real, valid session for any named user without a password — because the caller is already inside the trust boundary. This delivers four wins compared to login/key auth:

1. **No credentials in the script.** Nothing to leak, nothing to rotate.
2. **No hardcoded URL.** You can derive the host from `properties.xml` and the auth call is independent of it.
3. **One session, both APIs.** The minted session ID works for REST (`Authorization: authToken <sid>`) **and** XOG SOAP (`xog:SessionID`).
4. **Survives SSO.** The internal call bypasses the SSO front door entirely.

Trade-offs to be honest about:

- **On-prem only.** SaaS denies the internal call.
- **Always runs as the named user.** If you pass `'admin'`, every audit record points at admin — use a real username when attribution matters (see [Impersonation variant](#impersonation-variant) below).

## The four-line auth core

```xml
<core:new className="com.niku.union.security.DefaultSecurityIdentifier" var="secId"/>
<core:invokeStatic className="com.niku.union.security.UserSessionControllerFactory"
                   method="getInstance" var="userSessionCtrl"/>
<core:set value="${userSessionCtrl.init('admin', secId)}" var="secId"/>
<core:set value="${secId.getSessionId()}" var="sessionID"/>
```

After these four lines, `${sessionID}` is a real Clarity session token. Use it in headers — that's all.

## Full working template

A clean, idiomatic version of the pattern — DB probe, dynamic URL discovery, internal session, POST with sub-object association, UTF-8 safe response read, modern Gson parse.

```xml
<gel:script
  xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:core="jelly:core"
  xmlns:util="jelly:util">

  <gel:parameter var="debug_flag" default="1"/>

  <!-- ============ 1. DB probe (fail fast if Clarity is sick) ============ -->
  <core:catch var="dbErr">
    <gel:setDataSource dbId="Niku" var="connect"/>
  </core:catch>
  <core:if test="${dbErr != null}">
    <gel:log level="ERROR">Database connection failed: ${dbErr}</gel:log>
    <core:break/>
  </core:if>

  <!-- ============ 2. Discover the app URL from properties.xml ============ -->
  <gel:parse file="../config/properties.xml" var="properties"/>
  <util:tokenize delim="/" var="entryUrl">
    <gel:expr select="$properties//webServerInstance[@id='app']/@entryUrl"/>
  </util:tokenize>
  <core:set value="http://${entryUrl[1]}" var="appUrl"/>
  <core:if test="${debug_flag != 0}">
    <gel:log>appUrl resolved to ${appUrl}</gel:log>
  </core:if>

  <!-- ============ 3. Mint a Clarity session inside the JVM ============ -->
  <core:new className="com.niku.union.security.DefaultSecurityIdentifier" var="secId"/>
  <core:invokeStatic className="com.niku.union.security.UserSessionControllerFactory"
                     method="getInstance" var="userSessionCtrl"/>
  <core:set value="${userSessionCtrl.init('admin', secId)}" var="secId"/>
  <core:set value="${secId.getSessionId()}" var="sessionID"/>
  <core:if test="${debug_flag != 0}">
    <gel:log category="REST" level="INFO"
             message="Minted session ${sessionID} for user ${secId.getUserName()}"/>
  </core:if>

  <!-- ============ 4. Build the request ============ -->
  <core:set var="endpoint" value="${appUrl}/ppm/rest/v1/obaTodos"/>
  <core:new var="restUrl" className="java.net.URL">
    <core:arg type="java.lang.String" value="${endpoint}"/>
  </core:new>
  <core:invoke var="conn" on="${restUrl}" method="openConnection"/>

  <core:expr value="${conn.setRequestMethod('POST')}"/>
  <core:expr value="${conn.setRequestProperty('Authorization', 'authToken ' + sessionID)}"/>
  <core:expr value="${conn.setRequestProperty('Cookie',        'sessionId='   + sessionID)}"/>
  <core:expr value="${conn.setRequestProperty('Content-Type',  'application/json')}"/>
  <core:expr value="${conn.setRequestProperty('Accept',        'application/json')}"/>
  <!-- Required for POST to an associated sub-object: <sub>~<parent>~<association> -->
  <core:expr value="${conn.setRequestProperty('x-api-association-key',
                       'obaTodos~ideas~include_descendants')}"/>
  <core:expr value="${conn.setDoOutput(true)}"/>

  <core:set var="body" encode="false"><![CDATA[{
    "name": "testfromclarity",
    "obaAssociation": 5023011
  }]]></core:set>

  <core:invoke var="os" on="${conn}" method="getOutputStream"/>
  <core:invoke var="bytes" on="${body}" method="getBytes">
    <core:arg type="java.lang.String" value="UTF-8"/>
  </core:invoke>
  <core:expr value="${os.write(bytes, 0, size(bytes))}"/>
  <core:invoke on="${os}" method="close"/>

  <!-- ============ 5. Read response (treat any 2xx as success) ============ -->
  <core:set var="rc" value="${conn.getResponseCode()}"/>
  <core:choose>
    <core:when test="${rc &gt;= 200 and rc &lt; 300}">
      <core:invoke var="is" on="${conn}" method="getInputStream"/>
    </core:when>
    <core:otherwise>
      <core:invoke var="is" on="${conn}" method="getErrorStream"/>
    </core:otherwise>
  </core:choose>

  <core:new var="isr" className="java.io.InputStreamReader">
    <core:arg type="java.io.InputStream" value="${is}"/>
    <core:arg type="java.lang.String"    value="UTF-8"/>
  </core:new>
  <core:new var="br" className="java.io.BufferedReader">
    <core:arg type="java.io.Reader" value="${isr}"/>
  </core:new>
  <core:new var="buf" className="java.lang.StringBuffer"/>
  <core:set var="line" value="${br.readLine()}"/>
  <core:while test="${line != null}">
    <core:expr value="${buf.append(line)}"/>
    <core:set var="line" value="${br.readLine()}"/>
  </core:while>
  <core:invoke on="${br}" method="close"/>

  <!-- ============ 6. Parse JSON (modern Gson static form) ============ -->
  <core:invokeStatic className="com.google.gson.JsonParser"
                     method="parseString" var="jsonElement">
    <core:arg type="java.lang.String" value="${buf.toString()}"/>
  </core:invokeStatic>
  <core:set var="json" value="${jsonElement.getAsJsonObject()}"/>

  <core:choose>
    <core:when test="${rc &gt;= 200 and rc &lt; 300}">
      <gel:log level="INFO">Created ${endpoint} (HTTP ${rc}) → ${json}</gel:log>
    </core:when>
    <core:otherwise>
      <gel:log level="ERROR">REST call failed HTTP ${rc} → ${json}</gel:log>
    </core:otherwise>
  </core:choose>
</gel:script>
```

## Header reference

| Header | When to set |
|--------|-------------|
| `Authorization: authToken <sid>` | **Always** — primary auth, using the minted session ID. |
| `Cookie: sessionId=<sid>` | **Always** — belt-and-suspenders; some Clarity dispatchers read the session from the cookie rather than the header. |
| `Content-Type: application/json` | Always on POST / PUT / PATCH. |
| `Accept: application/json` | Optional, recommended. |
| `x-api-association-key: <sub>~<parent>~<association>` | Required when POSTing to an **associated sub-object** (e.g. `obaTodos~ideas~include_descendants`). |
| `x-api-impersonate-user: <username>` | Act on behalf of another user (16.2.2+). Audit records show the named user with an "Impersonated By" column. Requires the `ADMIN_IMPERSONATE_USER_F31686` feature toggle. |
| `x-api-full-response: true` | Get the full object back from POST / PUT / PATCH. Omit on bulk imports to cut serialization overhead. |
| `x-api-force-patch: true` | Workaround when network infrastructure blocks PATCH — send PUT with this header. |

## Impersonation variant

If audit attribution matters, mint the session as the **actual** user rather than `admin`. For a process step that knows which user triggered it, resolve their username (from a query on `${gel_objectInstanceId}` or from process parameters) and pass it in:

```xml
<core:set value="${userSessionCtrl.init('jdoe02', secId)}" var="secId"/>
```

Audit records will then attribute the writes to `jdoe02`, not `admin`. The user still needs **API-Access** and the relevant functional rights on whatever the script touches.

## Pitfalls

Real-world traps that show up in scripts copied around between teams:

1. **`responseCode == 200` mis-route.** POST to a Clarity REST resource returns **`201 Created`**, not `200`. A strict `== 200` check sends every success through `getErrorStream()` — which returns `null` when there's no error → NPE. Always use `>= 200 and < 300`.
2. **Hardcoded host.** Defeats the point of reading `properties.xml`. Use the resolved `appUrl`.
3. **Output stream not closed.** `HttpURLConnection` usually flushes on `getResponseCode()`, but explicit `close()` is the contract.
4. **`InputStreamReader` with no charset.** Defaults to platform encoding — fine on Linux servers, fragile on Windows. Pass `"UTF-8"` to the constructor.
5. **`new JsonParser()` is deprecated.** Modern Gson uses the static `JsonParser.parseString(...)` (`core:invokeStatic`).
6. **Always-admin context.** The default `init('admin', secId)` makes the audit log lie. Pass a real username when the process represents one.
7. **Sub-object POST without `x-api-association-key`.** Returns a confusing error. The format is `<sub_object>~<parent_object>~<association_name>` — find the right association in the object's `describe` response or in Studio.
8. **Stale session.** A session minted at process start can in theory expire mid-step on very long-running scripts. Re-mint if you're crossing significant wall-clock time.

## When NOT to use this pattern

| Caller | Use instead |
|--------|-------------|
| External REST client (Boomi, Python, Postman) | [[Authentication]] — Basic / Token / Key |
| Clarity SaaS environment | [[Authentication]] — Key-based via `/tokens/rest/v1` (no JVM access in SaaS) |
| Process step that calls XOG (not REST) | [[GEL Integration Processes]] — `soap:invoke` with `endpoint="internal"` |
| Browser-based integration | [[Authentication]] + [[CORS]] for the origin allowlist |

## Related
- [[Authentication]] — external-client REST auth (Basic / Token / Key) and access rights
- [[Using REST APIs]] — filters, fields, pagination, expand, OBS, TSV, financials
- [[GEL Integration Processes]] — process structure, built-in parameters, XOG via `soap:invoke`
- [[GEL Basics]] — GEL fundamentals, parameters, variables, conditionals
- [[GEL Tag Library]] — full tag reference (core, gel, soap, util)
- [[Performance and Load Testing]] — headers like `x-api-full-response`, batch limits
- [[Enhancements]] — `x-api-impersonate-user`, association keys, sub-object updates
- [[_MOC Development]]
