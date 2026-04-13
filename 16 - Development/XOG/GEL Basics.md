---
title: GEL Basics
tags:
  - dev
  - howto
---
# GEL Basics

Source: Clarity 16.4.1 PDF, p4479–4484

Related: [[_MOC Development]] | [[GEL Scripting]] | [[GEL Database Operations]] | [[GEL File Operations]] | [[GEL Integration Processes]] | [[GEL Tag Library]]

## What is GEL?

Generic Execution Language (GEL) is an enterprise application integration framework embedded in Classic PPM. It turns XML into executable code to solve complex business problems.

GEL is based on **Jelly** (jakarta.apache.org Commons project).

**Popular integrations:** BMC Remedy Help Desk, CA Service Desk, ServiceNow, SAP, Oracle, Workday.

**GEL can invoke and process:**
- Web services — Read/write to any SOAP-based web service, including XOG
- File system — Read/write to any delimited file (local, network, disk arrays)
- FTP — Upload/download to FTP servers
- JDBC — Access relational databases to read or write data

> **Warning:** Before using GEL, read the Customization, Modification, and Configuration Policy. Contact your CA account representative.

> **Tip:** Until Clarity 15.5.1, avoid GEL scripts that read, run, or append records in very large CSV files — out-of-memory errors can occur.

## GEL Setup

The GEL runtime is packaged with XOG in the XOG client. After installing the client, use the `gel` command in the `bin` directory to validate and execute GEL scripts.

Prerequisite: JRE must be installed on your computer.

### GEL Script Validation and Execution

```
E:\XOG>bin\gel -script hello.xml -validate
File geltest.xml validated.

E:\XOG>bin\gel -script hello.xml
Hello World 1!
Hello World 2!
Hello World 3!
```

## GEL Script Structure

A GEL script is an executable XML file built from qualified elements bound to Java code (tags). Namespace declarations organize tags into tag libraries.

### Hello World Example

```xml
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <core:forEach indexVar='i' begin='1' end='3'>
    <gel:out>Hello World ${i}!</gel:out>
  </core:forEach>
</gel:script>
```

**Tag libraries in this example:**
- `core:` — Built-in Jelly library with general-purpose tags (forEach, set, etc.)
- `gel:` — Primary GEL library; general-purpose + Classic PPM-specific tags

> A comment can appear anywhere: `<!-- comment -->`

## GEL Script Tags

A GEL script is an executable XML file. Tags are organized into tag libraries using namespace declarations. Every script must reside within the `<gel:script>` root element.

## GEL Conditionals and Loops

```xml
<!-- IF -->
<core:if test="${hasDocs}">
  ...
</core:if>

<!-- CHOOSE / WHEN / OTHERWISE -->
<core:choose>
  <core:when test="${row[6].equals(&#34;&#34;)}">
    ...
  </core:when>
  <core:otherwise>
    ...
  </core:otherwise>
</core:choose>

<!-- SWITCH -->
<core:switch on="${caseType}">
  <core:case fallThru="true" value="Incident"/>
  <core:case value="Problem">
    ...
  </core:case>
  <core:default>
    ...
  </core:default>
</core:switch>

<!-- FOR EACH -->
<core:forEach trim="true" items="${queryResult.rowsByIndex}" var="row">
  ...
</core:forEach>
```

## GEL Variables

Variables in GEL are declared at the time of use — no declaration blocks.

### `<gel:parameter>` — Script Parameters

Parameters appear as input boxes when a GEL script runs as a process, allowing administrators to override defaults. Use `secure="true"` to mask passwords.

```xml
<gel:parameter var="XOGUsername" default="admin"/>
<gel:parameter var="XOGPassword" default="password" secure="true"/>
```

### `<core:set>` — Basic Variables

For simple values not extracted from XML:
```xml
<core:set value="1" var="yes"/>
<gel:out>${yes}</gel:out>
<gel:out>${yes+2}</gel:out>
```

### `<gel:set>` — Extract from XML

Required when extracting values from XML documents. Uses XPath `select` attribute:
```xml
<gel:set asString="false"
  select="$XOGresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/Statistics"
  var="stats"/>
```

> **Warning (Clarity 15.9.2+):** The following syntax is no longer supported:
> ```xml
> <!-- NOT SUPPORTED in 15.9.2+ -->
> <gel:set select="$groupNode/@code/text()" var="code" asString="true"/>
>
> <!-- SUPPORTED in 15.9.2+ -->
> <gel:set select="$groupNode/@code" var="code" asString="true">
> ```

### `<gel:persist>` — Cross-Script Variable Sharing

Shares variable values beyond the current script. Available scopes: `GLOBAL`, `PROCESS`, `INSTANCE`.

```xml
<gel:persist var="myObjectId" value="${gel_objectInstanceId}" scope="INSTANCE"/>
```

### `<gel:parse>` — Build XML in Memory

Creates an XML document in memory; used to build XOG requests:
```xml
<gel:parse var="loadContent">
  <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="../xsd/nikuxog_resource.xsd">
    <Header version="12.0.0.5028" action="write" objectType="resource" externalSource="ORACLE-FINANCIAL"/>
    <Resources>
      <Resource resourceId="abc" isActive="true">
        <PersonalInformation lastName="doe" firstName="john" emailAddress="jdoe@ca.com"/>
      </Resource>
    </Resources>
  </NikuDataBus>
</gel:parse>
```

## GEL Built-in Parameters

When GEL scripts are associated with processes, these parameters are automatically available:

| Parameter | Description |
|-----------|-------------|
| `${gel_objectInstanceId}` | Object instance ID (-1 if no object associated) |
| `${gel_processId}` | Process identifier (shared across all instances) |
| `${gel_processInstanceId}` | Process instance identifier (unique per execution) |

All built-in parameters have the `gel_` prefix and are of numeric data type.

## GEL Considerations

- GEL is **case-sensitive**, including variable names
- All GEL scripts are XML — all XML rules apply (structure, tags, special characters)
- In `<sql:query>` tags, you CANNOT use `<` or `>` operators — use `BETWEEN` or escape as `&lt;` / `&gt;`

## Using SSL with GEL

When interacting with SOAP services over SSL:
- If the SSL certificate is from a well-known CA (Verisign, Thawte) and exists in `cacerts`, no extra steps needed
- If using a **self-signed certificate**, you must import it into the Java cacerts keystore

**Setup steps for self-signed SSL:**
1. Locate Java SDK installation directory (e.g., `C:\jdk1.5.0_17`)
2. Export the SSL certificate to a file (e.g., `mycert.cer`)
3. Change to the JRE security directory: `cd c:\jdk1.5.0_17\jre\lib\security`
4. Import the certificate:
   ```
   keytool -keystore cacerts -storepass changeit -import -file c:\temp\mycert.cer -trustcacerts -alias mycert
   ```
5. Restart the BG service if scripts run in processes

## GEL Tag Restrictions

Control tag restrictions with CSA commands:
- `admin general restrict-gel-tags` — Sets `gelTagRestriction` to `on`
- `admin general allow-gel-tags` — Sets `gelTagRestriction` to `off`

GEL tag restrictions are **off** by default. Requires restart of app and bg services when changed.

`properties.xml` examples:
```xml
<!-- Unrestricted -->
<system online="true" multiCurrency="false" licenseTypes="old" singleTenantMode="true"/>

<!-- Restricted -->
<system online="true" multiCurrency="false" licenseTypes="old"
  singleTenantMode="false" gelTagRestriction="on"/>
```

## Related Notes

- [[GEL Scripting]] — Overview and getting started
- [[GEL Database Operations]] — JDBC database operations
- [[GEL File Operations]] — File and FTP operations
- [[GEL Integration Processes]] — Process automation
- [[GEL Tag Library]] — Full tag library reference
- [[Query API]] — Executing NSQL queries via XOG
