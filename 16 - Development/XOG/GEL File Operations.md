---
title: GEL File Operations
tags:
  - dev
  - howto
canonical: true
audience: dev
domain: development
---
# GEL File Operations

Source: Clarity 16.4.1 PDF, p4489–4491

Related: [[_MOC Development]] | [[GEL Basics]] | [[GEL Scripting]] | [[GEL Tag Library]]

## Overview

GEL can:
- Open and parse XML files and comma-delimited files
- Read and write files

GEL **cannot**:
- Create directories
- Move files
- Delete files

> **Note:** File Tag and FTP Tag are deprecated but still functional (on-premise only).

## File Tag Library (file:)

Include the namespace declaration:
```xml
<gel:script xmlns:file="jelly:com.niku.union.gel.FileTagLibrary">
```

## Example: Create a Rate Matrix XOG File

This example reads a tab-delimited file and creates a valid rate matrix XOG import file:

```xml
<gel:script xmlns:core="jelly:core"
  xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:file="jelly:com.niku.union.gel.FileTagLibrary">

  <gel:parameter default="niku" var="clarityUser"/>
  <gel:parameter default="nikuadmin" secure="true" var="clarityPassword"/>
  <gel:parameter default="E:\Clarity\XOG\bin" var="infolder"/>
  <gel:parameter default="E:\clarity\xog\bin\rateMatrixLoadFile.xml" var="XOGloadfile"/>
  <gel:parameter default="${infolder}\rateMatrix.tab" var="infile"/>
  <gel:formatDate format="yyyyMMdd" stringVar="today"/>

  <!-- Open the tab-delimited input file -->
  <file:readFile fileName="${infile}" delimiter="\t" var="infileParsed" embedded="false"/>

  <!-- Build the XML shell in memory -->
  <gel:parse var="loadContent">
    <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="../xsd/nikuxog_matrix.xsd">
      <Header action="write" externalSource="NIKU" objectType="matrix" version="12.0.0.5028"/>
      <matrices>
        <matrix defaultCurrencyCode="USD" name="D&amp;B COST/RATE MATRIX" type="Cost/Rate">
          <columns>
            <column name="entity"/>
            <column name="department"/>
            <column name="resourceClass"/>
            <column name="transactionClass"/>
            <column name="resourceRole"/>
            <column name="resource"/>
            <column name="inputTypeCode"/>
          </columns>
          <matrixRows>
          </matrixRows>
        </matrix>
      </matrices>
    </NikuDataBus>
  </gel:parse>

  <!-- Build rows (skip header on row 0) -->
  <core:forEach items="${infileParsed.rows}" var="row" indexVar="i" begin="1" step="1">
    <gel:parse var="matrixRowNode">
      <matrixRow
        actualCost="${row[11]}"
        currencyCode="${row[12]}"
        entity="${row[2]}"
        department="${row[3]}"
        fromDate="${row[0]}"
        rate="${row[9]}"
        transactionClass="${row[5]}"
        resourceClass="${row[4]}"
        resourceRole="${row[6]}"
        inputTypeCode="${row[8]}"
        resource="${row[7]}"
        standardCost="${row[10]}"
        toDate="${row[1]}"/>
    </gel:parse>

    <!-- Append row node to the XML document -->
    <gel:set value="${matrixRowNode}"
      select="$loadContent/NikuDataBus/matrices/matrix/matrixRows"
      insert="true"/>
  </core:forEach>

  <!-- Write the completed XOG file -->
  <gel:serialize fileName="${XOGloadfile}" var="${loadContent}"/>
</gel:script>
```

## Example: Output Delimited Files

```xml
<!-- Open output file with comma delimiter -->
<file:writeFile fileName="${doclistfile}" delimiter=",">
  ...
</file:writeFile>
```

## File Tag Reference

### file:readFile — Read Delimited Files

| Attribute | Required | Description |
|-----------|----------|-------------|
| fileName | No* | Source file path and name |
| inputVar | No* | InputStream from `ftp:get` |
| delimiter | No | Regular expression delimiter. Default: `,` |
| commentIndicator | No | Lines starting with this are ignored. Default: `#` |
| var | Yes | Variable to hold file contents (has `.rows` attribute) |
| embedded | Yes | Whether values are embedded in double quotes |

*One of `fileName` or `inputVar` is required.

Access cells: `${data.rows[0][2]}` = third column of first row.

**Example:**
```xml
<file:readFile fileName="sampledata.csv" embedded="false" var="input"/>
<core:forEach items="${input.getRows()}" var="row">
  <gel:out>Username = ${row[0]}</gel:out>
  <gel:out>First = ${row[1]}</gel:out>
</core:forEach>
```

> **Tip (Clarity 15.5.1+):** Use `f:processFileLines` to read one record at a time instead of loading the whole file:
> ```xml
> <f:processFileLines fileName="${logdir}${thislogfile}" delimiter=" "
>   indexVar="d" embedded="false" var="logfilerow">
>   <!-- process each row here -->
> </f:processFileLines>
> ```

### file:writeFile — Write Delimited Files

| Attribute | Required | Description |
|-----------|----------|-------------|
| fileName | Yes | Target file name |
| delimiter | No | Column separator. Default: `,` |
| commentIndicator | No | Default: `#` |
| var | No | Variable from `file:readFile` to populate the file |
| embedded | No | Embed values in double quotes. Default: `true` |

**Write from SQL query (line by line):**
```xml
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
```

### Other File Tags

| Tag | Description |
|-----|-------------|
| `file:comment` | Write a comment line to the output file (not part of CSV standard) |
| `file:set` | Change data in memory (`var`, `rowIndex`, `colIndex`, `value` required) |
| `file:line` | Specify a line in the output file |
| `file:column` | Specify column contents within a `file:line` |

## FTP Tag Library (ftp:) — On-Premise Only

> **Note:** FTP Tag is deprecated.

Include the namespace declaration:
```xml
<gel:script xmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary">
```

### ftp:open — Open FTP Connection

| Attribute | Required | Description |
|-----------|----------|-------------|
| hostName | Yes | Server hostname/IP |
| port | No | FTP port. Default: 21 |
| user | Yes | Username |
| password | Yes | Password |

### ftp:put — Upload File to FTP Server

| Attribute | Required | Description |
|-----------|----------|-------------|
| fileName | Yes | Name of file to send |
| remoteDir | Yes | FTP server target directory |
| localDir | No | Local directory of the file |
| var | No | Variable from `file:readFile` or XML document |

### ftp:get — Download File from FTP Server

| Attribute | Required | Description |
|-----------|----------|-------------|
| fileName | Yes | Name of file to get |
| remoteDir | Yes | FTP server source directory |
| localDir | No | Local directory to save to |
| var | No | InputStream variable (must be used before `ftp:open` closes) |

### Example: Build from DB, Write Local, FTP Upload

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary"
  xmlns:file="jelly:com.niku.union.gel.FileTagLibrary"
  xmlns:core="jelly:core"
  xmlns:sql="jelly:sql">

  <sql:setDataSource url="jdbc:clarity:oracle://dbserver:1521;SID=clarity"
    driver="com.ca.clarity.jdbc.oracle.OracleDriver" user="niku" password="niku"/>

  <sql:query var="results">
    SELECT first_name, last_name, unique_name FROM SRM_RESOURCES WHERE is_active=?
    <sql:param value="1"/>
  </sql:query>

  <!-- Write the file locally -->
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

  <!-- FTP the file to a remote server -->
  <ftp:open hostName="ftpserver" port="21" user="niku" password="clarity">
    <ftp:put fileName="resourceData.csv" localDir="c:/temp" remoteDir="/tmp"/>
  </ftp:open>
</gel:script>
```

## Utility Tag Library (util:) — On-Premise Only

> **Note:** Utility Tag is deprecated.

Include namespace: `xmlns:util="jelly:util"`

| Tag | Description |
|-----|-------------|
| `util:available` | Test for existence of a file/URI |
| `util:file` | Create a `java.io.File` from a given name |
| `util:unloadText` / `util:loadText` | Load file contents into a variable (without parsing) |
| `util:properties` | Load a properties file into a Java Properties object |
| `util:replace` | Replace instances of a character or string |
| `util:sleep` | Sleep for a given number of milliseconds |

**Example — Test file existence:**
```xml
<util:available uri="file:///temp/resourceData.csv">
  <gel:out>File exists!</gel:out>
</util:available>
```

## Related Notes

- [[GEL Basics]] — GEL fundamentals and variables
- [[GEL Database Operations]] — JDBC database operations
- [[GEL Integration Processes]] — Process automation
- [[GEL Tag Library]] — Full GEL tag library reference
