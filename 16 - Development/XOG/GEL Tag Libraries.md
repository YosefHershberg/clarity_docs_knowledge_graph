---
title: GEL Tag Libraries
tags:
  - dev
  - reference
aliases:
  - GEL Tags
  - XOG Tag Library
  - Core Tag Library
canonical: true
audience: dev
domain: development
parent: "[[_MOC Development]]"
---

# GEL Tag Libraries Reference

## GEL Tag Library Reference

### Overview

Every GEL tag is associated with a tag library. To use the GEL tag library, include the following namespace declaration in your script:

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
```

**Available GEL tags:**

| Tag | Purpose |
|-----|---------|
| `gel:script` | Root element for all GEL scripts |
| `gel:parse` | Parse XML from a file or inline content |
| `gel:set` | Set or retrieve XML document values |
| `gel:expr` | Evaluate an XPath expression as text |
| `gel:parameter` | Define parameters |
| `gel:getDocument` | Request XML documents |
| `gel:setDocument` | Pass XML documents between process steps |
| `gel:persist` | Persist variables beyond the current script |
| `gel:notify` | Send notifications |
| `gel:email` | Send email messages |
| `gel:formatDate` | Format time strings |
| `gel:parseDate` | Parse time strings |
| `gel:setDataSource` | Specify data sources |
| `gel:nsqlQuery` | Execute NSQL queries |
| `gel:log` | Log messages |
| `gel:out` | Print to the console |

---

### `gel:script` — Defining GEL Scripts

`gel:script` is the root element for all GEL scripts.

| Attribute | Description | Default | Type |
|-----------|-------------|---------|------|
| `escapeText` | `true` = body escaped (text); `false` = interpreted as XML | `true` | Boolean |
| `trim` | `true` = whitespace inside this tag is trimmed | `true` | Boolean |

---

### `gel:parse` — Parsing XML

Generates an XML document in memory from a file, InputStream, or GEL script content.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `file` | No | File to read; if not set, tag content is used. | File or InputStream |
| `var` | Yes | Variable name to contain the generated XML document. | String |

**Example 1** — Parse from a file:

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:parse var="xmldoc" file="e:\temp\BB1.xml"/>
</gel:script>
```

**Example 2** — Parse from inline content:

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:parse var="xmldoc">
    <groups>
      <group code="CTU">CTU Team</group>
      <group code="DS23">SWAT Team</group>
    </groups>
  </gel:parse>
</gel:script>
```

---

### `gel:set` — Setting XML Document Values

Use after `gel:parse` or `soap:invoke` to retrieve element content or attributes from an XML node, or to change content/add elements.

> [!WARNING]
> Clarity 15.9.2 and higher include the JAXEN 1.2.0 library. The following syntax is no longer supported:
> ```xml
> <gel:set select="$groupNode/@code/text()" var="code" asString="true"/>
> ```
> Use this syntax instead:
> ```xml
> <gel:set select="$groupNode/@code" var="code" asString="true"/>
> ```

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:parse var="groups">
    <groups>
      <group code="DS23">SWAT Team</group>
    </groups>
  </gel:parse>
  <gel:set select="$groups/groups/group" var="groupNode"/>
  <gel:set select="$groupNode/@code" var="code" asString="true"/>
  <gel:set value="${groupNode}" select="$groups/groups" insert="true"/>
  <gel:set value="CTU Team" select="$groupNode/text()"/>
  <gel:set value="CTU" select="$groupNode/@code"/>
  <gel:set select="$groups/groups" var="x" asString="true"/>
  <gel:out>${x}</gel:out>
</gel:script>
```

**`gel:set` attributes:**

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `var` | Either var or value required | Variable to export. | String |
| `value` | Either var or value required | If a node, inserts into `select` position; otherwise sets as text/attribute. | Object |
| `select` | Yes | XPath expression to retrieve a value. | XPath |
| `asString` | No | If `true`, converts `select` value to string and saves to `var`. Default: `false`. | Boolean |
| `insert` | No | If `true`, inserts `value` as a child node; if `false`, replaces the node at `select`. Default: `false`. | Boolean |

**Retrieve XML values:**
- Text content: `<set var="..." select="$doc/.../node_name/text()" asString="true"/>`
- Attribute: `<set var="..." select="$doc/.../node_name/@attribute_name" asString="true"/>`
- Node with sub-nodes: `<set var="..." select="$doc/.../node_name"/>`

---

### `gel:expr` — Evaluating Expressions

Evaluates an XPath expression as text. Most often resolves to an XML element.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `select` | Yes | XPath expression to retrieve the value. | XPath |

**Example 1:**

```xml
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:parse var="group">
    <group code="CTU">CTU Team</group>
  </gel:parse>
  <core:comment>The code is <gel:expr select="$group//@code"/></core:comment>
</gel:script>
```

---

### `gel:parameter` — Defining Parameters

Defines parameters that can be used in a GEL script.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `var` | Yes | Parameter name. | String |
| `default` | No | Default value; provide this value if you want the script to be executable from the console. | Object |
| `secure` | Yes | Set `true` to hide the value in the UI with asterisks. Default: `false`. | Boolean |

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:parameter var="hostname" default="http://localhost/niku/xog"/>
  <gel:parameter var="username" default="admin"/>
  <gel:parameter var="password" default="niku2000" secure="true"/>
  <gel:out>Host = ${hostname}</gel:out>
  <gel:out>User = ${username}</gel:out>
</gel:script>
```

> [!NOTE]
> Use `gel:parameter` for values that process administrators may need to change (URL, hostname, username) and for sensitive values like passwords. When a script runs as a process, `gel:parameter` values appear with input boxes on the action definition page.

---

### `gel:getDocument` — Requesting XML Documents

Gets the XML document passed to a process (either from a web service invocation or from a previous step using `gel:setDocument`).

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `var` | Yes | Name of an XML document variable set in the previous process step. | String |

---

### `gel:setDocument` — Passing XML Documents

Passes an XML document from one process step to the next.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `var` | Yes | Name of an XML document variable to pass to the next step. | String |

---

### `gel:persist` — Persisting Variables

Shares variable values across scopes. Once persisted, use `${hostname}` directly without additional tags.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `var` | Yes | Variable to be persisted. | String |
| `value` | No | Value to persist. If not set, tag content is used. Max: 4000 characters. | String |
| `scope` | Yes | `GLOBAL` = use anywhere; `PROCESS` = use anywhere in same process; `INSTANCE` = use anywhere in same process execution. | String |

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:persist var="myObjectId" value="${gel_objectInstanceId}" scope="INSTANCE"/>
  <gel:persist var="myProcessId" value="${gel_processInstanceId}" scope="INSTANCE"/>
</gel:script>
```

---

### `gel:notify` — Sending Notifications

Sends email. Content is the tag body text plus any process messages logged so far. Email server information comes from `properties.xml`.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `from` | Yes | Sender email address. | String |
| `fromName` | No | Sender name. | String |
| `to` | Yes | Recipient email addresses (comma, semicolon, or space delimited). | String |
| `subject` | No | Email subject. | String |
| `level` | No | `WARNING` = send only on warning or error messages; `ERROR` = send only on error messages. If not set, always sends. | String |

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:notify from="username@mailserver.com" fromName="Clarity Admin"
    to="user@somedomain" subject="There was a process error" level="ERROR">
    A process error was received.
  </gel:notify>
</gel:script>
```

---

### `gel:email` — Sending Email Messages

Sends an email. Content is the tag body text. Email server information comes from `properties.xml`.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `from` | Yes | Sender email address. | String |
| `fromName` | No | Sender name. | String |
| `to` | Yes | Recipient email addresses (comma, semicolon, or space delimited). | String |
| `subject` | Yes | Email subject. | String |

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:email from="username@mailserver.com" fromName="Clarity Admin"
    to="user@somedomain" subject="Simple email">
    Hello World.
  </gel:email>
</gel:script>
```

---

### `gel:formatDate` — Formatting Time Strings

Produces a formatted time string for use in file names, comment lines, or database inserts.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `format` | No | `java.text.SimpleDateFormat` format string. Default: `yyyy-MM-dd HH:mm:ss`. | String |
| `stringVar` | No | Variable to receive the formatted string. If not set, the string is used inline. | String |
| `dateVar` | No | Variable of type `java.util.Date` to format. If not set, current time is used. | String |

**Example 1 — format current date/time for XOG:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:out>
    <gel:formatDate format="yyyy-MM-dd'T'HH:mm:ss"/>
  </gel:out>
</gel:script>
```

**Example 2 — format a specific date:**

```xml
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <core:new className="java.util.Date" var="date"/>
  <core:invoke on="${date}" method="parse">
    <core:arg value="2009/03/27"/>
  </core:invoke>
  <gel:out>
    <gel:formatDate format="yyyy-MM-dd'T'HH:mm:ss" dateVar="date"/>
  </gel:out>
</gel:script>
```

---

### `gel:parseDate` — Parsing Time Strings

Parses a formatted string and generates a `java.util.Date` instance.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `format` | No | `java.text.SimpleDateFormat` format string. Default: `yyyy-MM-dd HH:mm:ss`. | String |
| `stringVar` | No | Variable holding the string to parse. If not set, the tag text content is used. | String |
| `dateVar` | Yes | Variable to receive the parsed `java.util.Date`. | String |

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:parseDate dateVar="date" format="yyyy-MM-dd">2009-03-27</gel:parseDate>
  <gel:out>
    My date was: <gel:formatDate format="yyyy-MM-dd'T'HH:mm:ss" dateVar="date"/>
  </gel:out>
</gel:script>
```

---

### `gel:setDataSource` — Specifying Data Sources

Identifies the Classic PPM database by its database ID. No username or password needed.

```xml
<gel:setDataSource dbId="niku"/>
```

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `dbId` | Yes | The database ID. | String |

---

### `gel:nsqlQuery` — Executing NSQL Queries

Executes an existing NSQL query or defines a new ad-hoc query to retrieve data, storing results to a variable.

**Example 1 — execute an existing query:**

```xml
<gel:setDataSource dbId="niku" var="dataSource"/>
<gel:nsqlQuery queryId="usercountbylicensetype" var="resultSet">
  <gel:nsqlParameter name="license_wildcard" value="*"/>
</gel:nsqlQuery>
<core:forEach items="${resultSet}" var="row">
  <gel:out>Row Contents: '${row}'.</gel:out>
</core:forEach>
```

**Example 2 — inline ad-hoc query:**

```xml
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
  <gel:out>Row Contents: '${row}'.</gel:out>
</core:forEach>
```

---

### `gel:log` — Logging Messages

Inserts status messages into the process engine log table. When running in a process, logs to `BPM_ERRORS`. When running from the console, logs to the standard log file.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `message` | No | The message to log. Can be set as a `value` attribute or as tag content. | String |
| `category` | No | Distinguishes log entries; can include business data type, file name, developer ID, etc. | String |
| `level` | No | `DEBUG`, `ERROR`, `FATAL`, `INFO`, `WARN`. Not case-sensitive. Default: `INFO`. In process messages: DEBUG/INFO → INFO; WARN → WARNING; ERROR/FATAL → ERROR. | Level |
| `var` | No | Variable to store the log message for later use (e.g., sending emails). | String |

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:log level="warn" category="Employee Data" message="No record returned."/>
</gel:script>
```

---

### `gel:out` — Printing to the Console

Prints the tag content to the system console. Use for debugging from the console (not for production process scripts).

```xml
<core:set var="x" value="file.rows[2][3]"/>
<gel:out>${x}</gel:out>
```

To print a variable containing an XML node, combine `gel:out` with `gel:expr`:

```xml
<gel:parse var="doc">
  <groups>...</groups>
</gel:parse>
<gel:out><gel:expr select="$doc/groups"/></gel:out>
```

---

## XOG Core Tag Library

These tags are a useful subset of the `jelly:core` tag library. For the full Jakarta Jelly tag documentation, see http://jakarta.apache.org/commons/jelly/tags.html.

Include the following namespace declaration to use this library:

```xml
<gel:script xmlns:core="jelly:core"...>
```

**Tags for controlling flow:**

| Tag | Purpose |
|-----|---------|
| `core:catch` | Catch exceptions |
| `core:set` | Set variables |
| `core:forEach` | Iterate over elements |
| `core:if` | Conditional evaluation |
| `core:switch`, `core:case`, `core:default` | Switch/case logic |
| `core:choose`, `core:when`, `core:otherwise` | Choose/when logic |
| `core:while` | While loop |
| `core:break` | Break out of loop |
| `core:new` | Invoke Java class constructor |
| `core:invoke` | Invoke Java class method |
| `core:invokeStatic` | Invoke static Java class method |

### `core:catch` — Catching Exceptions

```xml
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <core:catch var="exception">
    <gel:set select="$bad/text()" var="mynode"/>
  </core:catch>
  <core:if test="${exception != null}">
    <gel:out>Caught Exception was: ${exception}</gel:out>
  </core:if>
</gel:script>
```

### `core:set` — Setting Variables

| Attribute | Description | Type |
|-----------|-------------|------|
| `defaultValue` | Default value if expression returns null or blank string. | Expression |
| `encode` | `1` = encode `<` and `>` as XML entities; `0` = no encoding. | Boolean |
| `escapeText` | `1` = body escaped as text; `0` = interpreted as XML. Default: `1`. | Boolean |
| `trim` | `1` = trim whitespace; `0` = no trim. Default: `1`. | Boolean |
| `value` | Expression to evaluate. | Expression |
| `var` | Variable name to define. | String |

**Example:**

```xml
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <core:set var="color" value="blue"/>
  <gel:out>Color is ${color}</gel:out>
  <core:set var="age" value="39"/>
  <gel:out>My age is ${age - 18}</gel:out>
</gel:script>
```

### `core:forEach` — Iterating over Elements

| Attribute | Description | Type |
|-----------|-------------|------|
| `begin` | Starting index value. | int |
| `end` | Last index value. | int |
| `items` | Expression to iterate over (iteration, collection, map, array, enumeration, or comma-delimited string). | Expression |
| `step` | Index increment. | int |
| `indexVar` | Variable for the current index counter. | String |
| `var` | Variable for the item being iterated. | String |
| `varStatus` | Variable for loop status (current, index, first, last, begin, step, end). | String |

**Example:**

```xml
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <core:forEach items="A, B, C, 1, 2, 3" var="value">
    <gel:out>Value = ${value}</gel:out>
  </core:forEach>
</gel:script>
```

### `core:if` — Evaluating Conditionally

| Attribute | Description | Type |
|-----------|-------------|------|
| `test` | Jelly expression to evaluate. If `true`, the body is evaluated. | Expression |

**Example 1:**

```xml
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <core:set var="color" value="blue"/>
  <core:if test="${color == 'blue'}">
    <gel:out>Color matched blue!</gel:out>
  </core:if>
</gel:script>
```

**Example 2 — escaped greater-than:**

```xml
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <core:set var="age" value="10"/>
  <core:if test="${age &#62; 5}">
    <gel:out>Age is greater than 5</gel:out>
  </core:if>
</gel:script>
```

---

## XOG File Tag Library (On-Premise Only)

Use delimited file tags to read from and write to delimited files such as CSV files. Useful for mapping columns to XML elements or parameters in JDBC statements.

> [!NOTE]
> File Tag is deprecated.

Include the following namespace declaration:

```xml
<gel:script xmlns:file="jelly:com.niku.union.gel.FileTagLibrary">
```

### `file:readFile` — Reading Delimited Files

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `fileName` | No (if `inputVar` set) | Source file name. | String |
| `inputVar` | No (if `fileName` set) | Variable from `ftp:get` (InputStream). | InputStream |
| `delimiter` | No | Regular expression representing the delimiter. | String |
| `commentIndicator` | No | Lines starting with this value are ignored. Default: `#`. | String |
| `var` | Yes | Variable to hold file contents (has `rows` attribute). | StringMatrix |
| `embedded` | Yes | Whether values are embedded in double quotes. Default: `true`. | Boolean |

> [!TIP]
> Clarity 15.5.1 introduced `processFileLines` to read one record at a time without loading the full file. Use `<f:processFileLines>` instead of `<f:readFile>` followed by `<core:forEach>` for large files.

**Example — comma-delimited file:**

```xml
<gel:script xmlns:core="jelly:core"
  xmlns:file="jelly:com.niku.union.gel.FileTagLibrary"
  xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <file:readFile fileName="sampledata.csv" embedded="false" var="input"/>
  <gel:out>Input has ${input.size()} rows.</gel:out>
  <core:forEach items="${input.getRows()}" var="row">
    <gel:out>Username = ${row[0]}</gel:out>
    <gel:out>First = ${row[1]}</gel:out>
    <gel:out>Last = ${row[2]}</gel:out>
    <gel:out>ResourceID = ${row[3]}</gel:out>
  </core:forEach>
</gel:script>
```

### `file:writeFile` — Writing Delimited Files

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `fileName` | Yes | Target file name. | String |
| `delimiter` | No | Column separator character. Default: `,`. | String |
| `commentIndicator` | No | Lines starting with this value are ignored. Default: `#`. | String |
| `var` | No | Variable from `file:readFile` to populate the file. | StringMatrix |
| `embedded` | No | Whether values are embedded in double quotes. Default: `true`. | Boolean |

Sub tags: `file:comment`, `file:line`.

### `file:comment` — Commenting Files

Writes content to the output file without modification.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `value` | No | Comment text. Can also be set as tag content. | String |

### `file:set` — Changing Files in Memory

Changes data in memory in a variable set by `file:readFile`.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `var` | Yes | Variable set by `file:readFile` or a row in the file. | StringMatrix or String[] |
| `rowIndex` | Yes (when var is a file) | Row to change. | int |
| `colIndex` | Yes | Column to change. | int |
| `value` | Yes | Value to set in the specified cell. | Expression |

### `file:line` — Specifying Lines in Files

Specifies a line in the generated file. Use with `file:column` to specify column contents.

### `file:column` — Specifying Column Contents

Corresponds to a value field in the generated file.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `value` | Yes | Value to set in the selected cell. | Expression |

### Example: Write Line-by-Line from SQL Query

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary"
  xmlns:file="jelly:com.niku.union.gel.FileTagLibrary"
  xmlns:core="jelly:core"
  xmlns:sql="jelly:sql">
  <sql:setDataSource url="jdbc:clarity:oracle://dbserver:1521;SID=clarity"
    driver="com.ca.clarity.jdbc.oracle.OracleDriver"
    user="niku" password="niku"/>
  <sql:query var="results">
    SELECT first_name, last_name, unique_name FROM SRM_RESOURCES WHERE is_active=?
    <sql:param value="1"/>
  </sql:query>
  <file:writeFile fileName="c:/temp/resourceData.csv" delimiter="," embedded="false">
    <file:comment value="FIRST_NAME, LAST_NAME, UNIQUE_NAME"/>
    <core:forEach items="${results.rowsByIndex}" var="row">
      <file:line>
        <file:column value="${row[0]}"/>
        <file:column value="${row[1]}"/>
        <file:column value="${row[2]}"/>
      </file:line>
    </core:forEach>
  </file:writeFile>
</gel:script>
```

---

## XOG FTP Tag Library (On-Premise Only)

Use FTP tags to read and write files on an FTP server.

> [!NOTE]
> FTP Tag is deprecated.

Include the following namespace declaration:

```xml
<gel:script xmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary">
```

### `ftp:open` — Opening FTP Connections

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `hostName` | Yes | Name or IP of the host server. | String |
| `port` | No | FTP server port. Default: `21`. | int |
| `user` | Yes | Username for accessing the remote server. | String |
| `password` | Yes | Password for accessing the remote server. | String |

Sub tags: `ftp:put`, `ftp:get`.

### `ftp:put` — Putting Files on Remote Servers

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `fileName` | Yes | Name of file to send. | String |
| `remoteDir` | Yes | Directory on the FTP server to place the file. | String |
| `localDir` | No | Local directory where the file is located. | String |
| `var` | No | Variable from `file:readFile` or an XML document to send. | StringMatrix or Node |
| `delimiter` | No | Delimiter for the file on the FTP server (when `var` is a file variable). Default: `,`. | String |
| `embedded` | No | Whether values are embedded in double quotes. | Boolean |

### `ftp:get` — Getting Files from Remote Servers

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `fileName` | Yes | Name of file to get. | String |
| `remoteDir` | Yes | Directory on the FTP server where the file is located. | String |
| `localDir` | No | Local directory where the file is to be saved. | String |
| `var` | No | InputStream variable; must be used before `ftp:open` tag is closed. | InputStream |

### Example: FTP

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary"
  xmlns:file="jelly:com.niku.union.gel.FileTagLibrary"
  xmlns:core="jelly:core"
  xmlns:sql="jelly:sql">
  <sql:setDataSource url="jdbc:clarity:oracle://dbserver:1521;SID=clarity"
    driver="com.ca.clarity.jdbc.oracle.OracleDriver"
    user="niku" password="niku"/>
  <sql:query var="results">
    SELECT first_name, last_name, unique_name FROM SRM_RESOURCES WHERE is_active=?
    <sql:param value="1"/>
  </sql:query>
  <file:writeFile fileName="c:/temp/resourceData.csv" delimiter="," embedded="false">
    <file:comment value="FIRST_NAME, LAST_NAME, UNIQUE_NAME"/>
    <core:forEach items="${results.rowsByIndex}" var="row">
      <file:line>
        <file:column value="${row[0]}"/>
        <file:column value="${row[1]}"/>
        <file:column value="${row[2]}"/>
      </file:line>
    </core:forEach>
  </file:writeFile>
  <ftp:open hostName="ftpserver" port="21" user="niku" password="clarity">
    <ftp:put fileName="resourceData.csv" localDir="c:/temp" remoteDir="/tmp"/>
  </ftp:open>
</gel:script>
```

---

## XOG SOAP Tag Library

Use XML SOAP tags to invoke SOAP-based web services (external or internal, including the XOG API). Results are stored in GEL variables for subsequent processing.

Include the following namespace declaration:

```xml
<gel:script xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary">
```

### `soap:invoke` — Invoking SOAP Web Services

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `endpoint` | Yes | `'internal'` (uses Classic PPM endpoint automatically) or a fully qualified URL. | String |
| `var` | No | Variable to contain the response (`org.w3c.dom.Document`). | String |

Sub tags: `soap:message`, `soap:attachment`.

### `soap:envelope` — Generating a SOAP Envelope

Generates a SOAP envelope for use by `soap:invoke`. Sub tags: `soap:header`, `soap:body`.

### `soap:header` — Specifying the SOAP Header

Contains the SOAP header for inclusion in a SOAP envelope.

### `soap:body` — Specifying the SOAP Body

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `xml` | No | Source of the SOAP body; uses a `gel:parse` or `ftp:get` document variable as body content. | Document |

### `soap:attachment` — Attaching Files to SOAP Requests

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `dir` | Yes | Directory on the local disk where the attachment file is located. | String |
| `fileName` | Yes | File to be attached with the SOAP request. | String |

### `soap:message` — Specifying SOAP XML Messages

Contains the SOAP XML message, including the SOAP envelope, header, and body.

### Example: XOG Login and Read Objects

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary"
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xog="http://www.niku.com/xog">

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
                <Filter name="code" criteria="OR">
                  ProjectManager,PortfolioManager,XOGTestGroup
                </Filter>
              </Query>
            </NikuDataBus>
          </obj:ReadGroup>
        </soapenv:Body>
      </soapenv:Envelope>
    </soap:message>
  </soap:invoke>

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

## XOG SQL Tag Library (On-Premise Only)

The Jakarta Jelly project provides SQL tags for querying or updating databases using JDBC datasources. Drivers are included for Oracle and MSSQL.

> [!NOTE]
> SQL Tag is deprecated.

Include the following namespace declaration:

```xml
<gel:script xmlns:sql="jelly:sql">
```

### `sql:setDataSource` — Setting Data Sources

Use `gel:setDataSource` to access the Classic PPM database (only need the database ID). Use `sql:setDataSource` to connect to other databases.

**Example:**

```xml
<gel:script xmlns:core="jelly:core" xmlns:sql="jelly:sql" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <sql:setDataSource url="jdbc:clarity:oracle://localhost:1521;SID=niku"
    driver="com.ca.clarity.jdbc.oracle.OracleDriver"
    user="niku" password="niku"/>
  <sql:query var="test">
    SELECT 1 FROM DUAL
  </sql:query>
</gel:script>
```

### `sql:update` — Updating Tables

Use `<sql:param>` tags as placeholders (`?`) for bind variables to protect against special characters.

**Example:**

```xml
<gel:script xmlns:core="jelly:core" xmlns:sql="jelly:sql" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <sql:setDataSource url="jdbc:clarity:oracle://localhost:1521;SID=niku"
    driver="com.ca.clarity.jdbc.oracle.OracleDriver" user="niku" password="niku"/>
  <sql:update>
    UPDATE ODF_CA_MYOBJ SET my_custom_attribute=? WHERE CODE=?
    <sql:param value="red"/>
    <sql:param value="MYOBJ001"/>
  </sql:update>
</gel:script>
```

### `sql:query` — Querying Tables

Queries a table and stores results to a variable.

```xml
<sql:query var="result">
  select id, name from my_table
</sql:query>
```

### Example: Execute Stored Procedures

**MS SQL Server:**

```xml
<sql:update>
  EXEC Z_MY_CUSTOM_SP ?
  <sql:param value="prior"/>
</sql:update>
```

**Oracle:**

```xml
<sql:update>
  CALL Z_MY_CUSTOM_SP(?)
  <sql:param value="prior"/>
</sql:update>
```

---

## XOG Utility Tag Library (On-Premise Only)

Utility tags provide miscellaneous functionality.

> [!NOTE]
> Utility Tag is deprecated.

Include the following namespace declaration:

```xml
<gel:script xmlns:util="jelly:util">
```

| Tag | Purpose |
|-----|---------|
| `util:available` | Test for the existence of a file |
| `util:file` | Create a `java.io.File` from a given name |
| `util:unloadText` | Load the contents of a file into a variable |
| `util:properties` | Load a properties file into a Properties object |
| `util:replace` | Replace instances of a character or string |
| `util:sleep` | Sleep for a given number of milliseconds |

### `util:available` — Testing for File Existence

Evaluates the body if the given file is available.

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `file` | No | `java.io.File` to test. | File |
| `uri` | No | URI to test for availability (full URL, relative, or absolute). | String |

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:util="jelly:util">
  <util:available uri="file:///temp/resourceData.csv">
    <gel:out>File exists!</gel:out>
  </util:available>
</gel:script>
```

### `util:file` — Create a File Object

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `name` | Yes | Name of the file to create. | String |
| `var` | No | Variable to contain the file. | File |

### `util:unloadText` — Load File Contents into a Variable

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `file` | No | `java.io.File` to load text from. | File |
| `uri` | No | URI to parse as text. | String |
| `encoding` | No | Encoding scheme. | String |
| `var` | No | Variable to contain the loaded text. | String |

**Example — load from URI:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:util="jelly:util">
  <util:loadText uri="file:///temp/resourceData.csv" var="mytext"/>
  <gel:out>${mytext}</gel:out>
</gel:script>
```

### `util:properties` — Load a Properties File

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `file` | No | `java.io.File` to load properties from. | File |
| `uri` | No | URI to parse as text. | String |
| `var` | No | Variable to contain the Properties object. | String |

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:util="jelly:util">
  <util:properties uri="file:///xog/bin/test.properties" var="xogproperties"/>
  <gel:out>${xogproperties.getProperty("servername")}</gel:out>
</gel:script>
```

### `util:replace` — Replace Characters or Strings

| Attribute | Required | Description | Type |
|-----------|----------|-------------|------|
| `new` | No | New string. | String |
| `newChar` | No | New character. | String |
| `old` | No | Old string. | String |
| `oldChar` | No | Old character. | String |
| `value` | No | Value to operate on. | Expression |
| `var` | No | Variable to store the result. | String |

**Example:**

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:util="jelly:util">
  <util:loadText uri="file:///temp/resourceData.csv" var="mytext"/>
  <util:replace new=",newadmin" old=",admin" value="${mytext}" var="newtext"/>
  <gel:out>${mytext}</gel:out>
  <gel:out>${newtext}</gel:out>
</gel:script>
```

### `util:sleep` — Sleep for Milliseconds

Causes the script to sleep for a given amount of time. Useful when polling a remote site for the presence of an FTP file.

---


---
**See also:** [[GEL Scripting Basics]]
**Parent:** [[_MOC Development|Development]]
