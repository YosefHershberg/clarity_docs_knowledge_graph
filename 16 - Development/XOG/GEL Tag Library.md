---
title: XOG GEL Tag Library
tags:
  - dev
  - reference
aliases:
  - GEL Tag Library
canonical: true
audience: dev
domain: development
---
# XOG GEL Tag Library

## Overview

Every GEL tag is associated with a tag library. This note covers all GEL tag libraries available in XOG GEL scripting.

## GEL Tag Library (gel:)

Include this namespace declaration:
```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
```

---

### gel:script — Defining GEL Scripts

Root element for all GEL scripts. Equivalent to `core:jelly`.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| escapeText | true/false | true | true = tag body escaped as text; false = interpreted as XML |
| trim | true/false | true | true = whitespace inside trimmed |

---

### gel:parse — Parsing XML

Generates an XML document in memory from a file, InputStream, or inline GEL content.

| Attribute | Required | Description |
|-----------|----------|-------------|
| file | No | File path or InputStream from `ftp:get`. If not set, tag content is used |
| var | Yes | Variable name to hold the generated XML document |

**Example 1 — From file:**
```xml
<gel:parse var="xmldoc" file="e:\temp\BB1.xml"/>
```

**Example 2 — Inline XML:**
```xml
<gel:parse var="xmldoc">
  <groups>
    <group code="CTU">CTU Team</group>
    <group code="DS23">SWAT Team</group>
  </groups>
</gel:parse>
```

---

### gel:set — Setting XML Document Values

Retrieves element content or attributes and sets to a variable. Can also change content or add elements to an existing XML document.

> **Warning (Clarity 15.9.2+):** No longer supported:
> ```xml
> <gel:set select="$groupNode/@code/text()" var="code" asString="true"/>
> ```
> Use instead:
> ```xml
> <gel:set select="$groupNode/@code" var="code" asString="true">
> ```

| Attribute | Required | Description |
|-----------|----------|-------------|
| var | No* | Variable to export. Either `var` or `value` is required |
| value | No* | If a node: inserted at `select` position. If string: set as text/attribute |
| select | Yes | XPath expression to use |
| asString | No | If `true`: converts `select` value to string into `var`. Default: false |
| insert | No | If `true`: insert `value` node as child of `select` node. Default: false |

**XPath patterns:**
```xml
<!-- Retrieve text content -->
<gel:set var="..." select="$doc/.../node_name/text()" asString="true"/>

<!-- Retrieve attribute -->
<gel:set var="..." select="$doc/.../node_name/@attribute_name" asString="true"/>

<!-- Retrieve a node (including sub-nodes) -->
<gel:set var="..." select="$doc/.../node_name"/>

<!-- Set text content of a node -->
<gel:set value="..." select="$doc/.../node_name"/>

<!-- Set attribute value -->
<gel:set value="..." select="$doc/.../node_name/@attribute_name"/>

<!-- Insert a child node -->
<gel:set value="${node_var}" select="$doc/.../node_name" insert="true"/>
```

**Full example:**
```xml
<gel:parse var="groups">
  <groups>
    <group code="DS23">SWAT Team</group>
  </groups>
</gel:parse>

<!-- Get the group node -->
<gel:set select="$groups/groups/group" var="groupNode"/>

<!-- Get the code attribute as a string -->
<gel:set select="$groupNode/@code" var="code" asString="true"/>

<!-- Insert a duplicate of groupNode as a child of groups -->
<gel:set value="${groupNode}" select="$groups/groups" insert="true"/>

<!-- Change the text of groupNode -->
<gel:set value="CTU Team" select="$groupNode/text()"/>

<!-- Change the code attribute -->
<gel:set value="CTU" select="$groupNode/@code"/>

<!-- Get entire groups XML as text -->
<gel:set select="$groups/groups" var="x" asString="true"/>
<gel:out>${x}</gel:out>
```

---

### gel:expr — Evaluating Expressions

Evaluates an XPath expression as text. Most often used to resolve XML elements.

| Attribute | Required | Description |
|-----------|----------|-------------|
| select | Yes | XPath expression to retrieve the value |

```xml
<gel:parse var="group">
  <group code="CTU">CTU Team</group>
</gel:parse>
<core:comment>The code is <gel:expr select="$group//@code"/></core:comment>
```

---

### gel:parameter — Defining Parameters

Defines parameters that can be passed into a GEL script from a Classic PPM process. Appears as input boxes on the action definition page when run as a process.

| Attribute | Required | Description |
|-----------|----------|-------------|
| var | Yes | Parameter name |
| default | No | Default value (needed to run from console) |
| secure | Yes | Set `true` to mask value with `*` in the UI. Default: false |

```xml
<gel:parameter var="hostname" default="http://localhost/niku/xog"/>
<gel:parameter var="username" default="admin"/>
<gel:parameter var="password" default="niku2000" secure="true"/>
```

> Use `gel:parameter` (not `core:set`) for values that process administrators may need to change, such as URLs, hostnames, and usernames.

---

### gel:getDocument — Requesting XML Documents

Retrieves an XML document that was set in a previous process step (via `gel:setDocument`), or the body of the SOAP request that invoked the current process step.

| Attribute | Required | Description |
|-----------|----------|-------------|
| var | Yes | Variable name holding the XML document from a previous step or SOAP request body |

---

### gel:setDocument — Passing XML Documents

Passes an XML document generated in one process step to the next step.

| Attribute | Required | Description |
|-----------|----------|-------------|
| var | Yes | Variable name of the XML document to pass to the next step |

---

### gel:persist — Persisting Variables

Shares variable values across script boundaries. Once persisted, the variable is accessible directly in other scripts via `${hostname}` without special tags.

| Attribute | Required | Description |
|-----------|----------|-------------|
| var | Yes | Variable name to persist |
| value | No | String value to persist. Max 4000 characters (longer strings are truncated) |
| scope | Yes | GLOBAL, PROCESS, or INSTANCE |

**Scope behavior:**
| Scope | Availability |
|-------|-------------|
| GLOBAL | Anywhere in Classic PPM |
| PROCESS | Anywhere in the same process (across all executions) |
| INSTANCE | Anywhere in the same process during the current execution only |

```xml
<gel:persist var="myObjectId" value="${gel_objectInstanceId}" scope="INSTANCE"/>
<gel:persist var="myProcessId" value="${gel_processInstanceId}" scope="INSTANCE"/>
```

---

### gel:notify — Sending Notifications

Sends email with process messages logged so far. Uses email server from `properties.xml`.

| Attribute | Required | Description |
|-----------|----------|-------------|
| from | Yes | Sender email address |
| fromName | No | Sender name |
| to | Yes | Recipient emails (comma, semicolon, or space-delimited) |
| subject | No | Email subject |
| level | No | WARNING (send if warnings/errors exist) or ERROR (send only if errors exist) |

```xml
<gel:notify from="username@mailserver.com"
  fromName="Clarity Admin"
  to="user@somedomain"
  subject="There was a process error"
  level="ERROR">
  A process error was received.
</gel:notify>
```

---

### gel:email — Sending Email Messages

Sends an email. Content is ONLY the tag body (no process messages appended). Uses `properties.xml`.

| Attribute | Required | Description |
|-----------|----------|-------------|
| from | Yes | Sender email address |
| fromName | No | Sender name |
| to | Yes | Recipient emails |
| subject | Yes | Email subject |

```xml
<gel:email from="username@mailserver.com"
  fromName="Clarity Admin"
  to="user@somedomain"
  subject="Simple email">
  Hello World.
</gel:email>
```

---

### gel:formatDate — Formatting Time Strings

Formats a date/time value as a string using `java.text.SimpleDateFormat` format.

| Attribute | Required | Description |
|-----------|----------|-------------|
| format | No | Date format pattern. Default: `yyyy-MM-dd HH:mm:ss` |
| stringVar | No | Variable to store the formatted string (vs. inline output) |
| dateVar | No | Variable of type `java.util.Date` to format. Default: current time |

**XOG date format:**
```xml
<gel:formatDate format="yyyy-MM-dd'T'HH:mm:ss"/>
```
Generates: `2005-03-24T16:00:00`

**Human-readable format:**
```xml
<gel:out>Now: <gel:formatDate format=" h 'o''clock' a, zzzz, d MMM yyyy"/></gel:out>
```
Generates: `Now: 4 o'clock PM, Pacific Standard Time, 24 Mar 2005`

---

### gel:parseDate — Parsing Time Strings

Parses a formatted string and generates a `java.util.Date` instance.

| Attribute | Required | Description |
|-----------|----------|-------------|
| format | No | Date format pattern. Default: `yyyy-MM-dd HH:mm:ss` |
| stringVar | No | Variable holding the string to parse |
| dateVar | Yes | Variable to store the parsed `java.util.Date` |

```xml
<gel:parseDate dateVar="date" format="yyyy-MM-dd">2009-03-27</gel:parseDate>
<gel:out>My date was: <gel:formatDate format="yyyy-MM-dd'T'HH:mm:ss" dateVar="date"/></gel:out>
```

---

### gel:setDataSource — Specifying Data Sources

Identifies the Classic PPM database by its database ID. No username/password needed.

| Attribute | Required | Description |
|-----------|----------|-------------|
| dbId | Yes | Database ID. Use `niku` for Classic PPM |

```xml
<gel:setDataSource dbId="niku"/>
```

---

### gel:nsqlQuery — Executing NSQL Queries

Executes an existing Studio NSQL query by ID, or defines an ad-hoc inline NSQL query.

```xml
<!-- Execute existing query by ID -->
<gel:nsqlQuery queryId="usercountbylicensetype" var="resultSet">
  <gel:nsqlParameter name="license_wildcard" value="*"/>
</gel:nsqlQuery>

<!-- Ad-hoc inline query -->
<gel:nsqlQuery var="resultSet">
  <![CDATA[
    SELECT @SELECT:U.USER_NAME:USER_NAME@,
           @SELECT:U.ID:USER_ID@
    FROM CMN_SEC_USERS U
    WHERE @FILTER@
  ]]>
  <gel:nsqlParameter name="user_name_wildcard" value="admin*"/>
</gel:nsqlQuery>

<core:forEach items="${resultSet}" var="row">
  <gel:out>Row: '${row}'.</gel:out>
</core:forEach>
```

---

### gel:log — Logging Messages

Inserts status messages into the process engine log table (`BPM_ERRORS`) when running as a process. When run from console, inserts into the standard log file.

| Attribute | Required | Description |
|-----------|----------|-------------|
| message | No | Message text (can also be tag content) |
| category | No | Log category (business data type, file name, developer ID, etc.) |
| level | No | DEBUG, ERROR, FATAL, INFO, WARN. Default: INFO. Not case-sensitive |
| var | No | Variable to store the log message (for later use e.g., in emails) |

**Level mapping to process messages:**
- DEBUG + INFO → INFO process message
- WARN → WARNING process message
- ERROR + FATAL → ERROR process message

```xml
<gel:log level="warn" category="Employee Data" message="No record returned."/>
```

---

### gel:out — Printing to the Console

Prints tag content to the system console. Use only for debugging when NOT running as a process.

```xml
<core:set var="x" value="file.rows[2][3]"/>
<gel:out>${x}</gel:out>

<!-- Print an XML node -->
<gel:parse var="doc"><groups>...</groups></gel:parse>
<gel:out><gel:expr select="$doc/groups"/></gel:out>
```

---

## Core Tag Library (core:)

These are a useful subset of the `jelly:core` tag library. Include:
```xml
<gel:script xmlns:core="jelly:core">
```

### core:catch — Catching Exceptions

```xml
<core:catch var="exception">
  <gel:set select="$bad/text()" var="mynode"/>
</core:catch>
<core:if test="${exception != null}">
  <gel:out>Caught Exception: ${exception}</gel:out>
</core:if>
```

### core:set — Setting Variables

| Key Attribute | Description |
|---------------|-------------|
| var | Variable name |
| value | Expression to evaluate |
| defaultValue | Default if expression is null/blank |
| trim | Trim whitespace. Default: `1` (true) |
| scope | Variable scope (e.g., `parent`, `request`, `session`) |

```xml
<core:set var="color" value="blue"/>
<core:set var="age" value="39"/>
<gel:out>My age is ${age - 18}</gel:out>
```

### core:forEach — Iterating over Elements

| Key Attribute | Description |
|---------------|-------------|
| items | Collection/array/map/comma-delimited string to iterate |
| var | Variable for current item |
| indexVar | Variable for current index |
| varStatus | Variable for loop status (first, last, index, begin, step, end) |
| begin | Starting index |
| end | Ending index |
| step | Index increment |

```xml
<core:forEach items="A, B, C, 1, 2, 3" var="value">
  <gel:out>Value = ${value}</gel:out>
</core:forEach>
```

### core:if — Evaluating Conditionally

```xml
<core:if test="${color == 'blue'}">
  <gel:out>Color matched blue!</gel:out>
</core:if>

<!-- Escape > for XML: use &#62; -->
<core:if test="${age &#62; 5}">
  <gel:out>Age is greater than 5</gel:out>
</core:if>
```

### Additional Control Flow Tags

```xml
<core:choose>
  <core:when test="${condition}">...</core:when>
  <core:otherwise>...</core:otherwise>
</core:choose>

<core:switch on="${value}">
  <core:case value="A">...</core:case>
  <core:default>...</core:default>
</core:switch>

<core:while test="${condition}">...</core:while>
<core:break/>
```

### Java Invocation Tags

```xml
<!-- Create a new Java object -->
<core:new className="java.util.Date" var="date"/>

<!-- Invoke a method on an object -->
<core:invoke on="${date}" method="parse">
  <core:arg value="2009/03/27"/>
</core:invoke>

<!-- Invoke a static method -->
<core:invokeStatic className="..." method="..."/>
```

---

## SOAP Tag Library (soap:)

Use to invoke SOAP-based web services (including XOG API). Include:
```xml
<gel:script xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary">
```

### soap:invoke — Invoking SOAP Web Services

| Attribute | Required | Description |
|-----------|----------|-------------|
| endpoint | Yes | `'internal'` (uses Classic PPM URL) or a fully qualified URL |
| var | No | Variable for the response XML document |

```xml
<!-- Internal XOG endpoint -->
<soap:invoke endpoint="internal" var="result">
  <soap:message>...</soap:message>
</soap:invoke>

<!-- External URL -->
<soap:invoke endpoint="${serviceUrl}" var="result">
  <soap:message>...</soap:message>
</soap:invoke>
```

### soap:message — Specifying SOAP XML Messages

Contains the SOAP XML message (envelope, header, and body).

### soap:envelope, soap:header, soap:body

- `soap:envelope` — Generates a SOAP envelope
- `soap:header` — Contains the SOAP header
- `soap:body` — Controls the SOAP body. Optional `xml` attribute: sets an XML document variable as the body content

### soap:attachment — Attaching Files

| Attribute | Required | Description |
|-----------|----------|-------------|
| dir | Yes | Local directory of the attachment file |
| fileName | Yes | File to attach |

```xml
<soap:attachment dir="${dir}" fileName="${file}"/>
```

### Example: XOG Login and Read Objects

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary"
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xog="http://www.niku.com/xog">

  <!-- Login -->
  <soap:invoke endpoint="internal" var="auth">
    <soap:message>
      <soapenv:Envelope>
        <soapenv:Header>
          <Auth xmlns="http://www.niku.com/xog">
            <Username>admin</Username>
            <Password>clarity</Password>
          </Auth>
        </soapenv:Header>
        <soapenv:Body/>
      </soapenv:Envelope>
    </soap:message>
  </soap:invoke>

  <!-- Read Groups using the session ID -->
  <soap:invoke endpoint="internal" var="result">
    <soap:message>
      <soapenv:Envelope>
        <soapenv:Header>
          <Auth>
            <xog:SessionID>
              <gel:expr select="$auth//xog:SessionID/text()"/>
            </xog:SessionID>
          </Auth>
        </soapenv:Header>
        <soapenv:Body>
          <obj:ReadGroup xmlns:obj="http://www.niku.com/xog/Object">
            <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:noNamespaceSchemaLocation="../xsd/xog_read.xsd">
              <Header version="7.5" externalSource="NIKU"/>
              <Query>
                <Filter name="code" criteria="OR">ProjectManager,PortfolioManager</Filter>
              </Query>
            </NikuDataBus>
          </obj:ReadGroup>
        </soapenv:Body>
      </soapenv:Envelope>
    </soap:message>
  </soap:invoke>

  <!-- Logout -->
  <soap:invoke endpoint="internal" var="auth">
    <soap:message>
      <soapenv:Envelope>
        <soapenv:Header>
          <Auth>
            <xog:SessionID>
              <gel:expr select="$auth//xog:SessionID/text()"/>
            </xog:SessionID>
          </Auth>
        </soapenv:Header>
        <soapenv:Body>
          <xog:Logout/>
        </soapenv:Body>
      </soapenv:Envelope>
    </soap:message>
  </soap:invoke>
</gel:script>
```

---

## Summary: All Tag Libraries

| Library | Namespace Declaration | Deprecated? | On-Premise Only? |
|---------|----------------------|-------------|-----------------|
| GEL Tag Library | `xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"` | No | No |
| Core Tag Library | `xmlns:core="jelly:core"` | No | No |
| SOAP Tag Library | `xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary"` | No | No |
| File Tag Library | `xmlns:file="jelly:com.niku.union.gel.FileTagLibrary"` | Yes | Yes |
| FTP Tag Library | `xmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary"` | Yes | Yes |
| SQL Tag Library | `xmlns:sql="jelly:sql"` | Yes | Yes |
| Utility Tag Library | `xmlns:util="jelly:util"` | Yes | Yes |

## Related
- [[_MOC Development]]
- [[GEL Basics]]
- [[GEL Scripting]]
- [[GEL Database Operations]]
- [[GEL File Operations]]
- [[GEL Integration Processes]]
- [[Query API]]
- [[Object API]]

%%Source: p4495-4531%%
