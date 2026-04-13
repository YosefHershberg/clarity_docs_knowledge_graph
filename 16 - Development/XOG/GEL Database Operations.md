---
title: GEL Database Operations
tags:
  - dev
  - howto
---
# GEL Database Operations

Source: Clarity 16.4.1 PDF, p4487–4488

Related: [[_MOC Development]] | [[GEL Basics]] | [[GEL Scripting]] | [[GEL Tag Library]]

## Overview

GEL can connect to one or more databases — it is not limited to Classic PPM databases. Both **Oracle** and **SQL Server** are supported.

## Common JDBC Error

Most connection issues result from login errors or JDBC driver problems:

```
E:\Clarity\XOG\bin>gel -script gelsqlexample.xml
ERROR 2005-08-31 16:45:40,549 [main] sql.SetDataSourceTag
Could not load driver class: java.lang.ClassNotFoundException: oracle.jdbc.driver.OracleDriver
```

**Solution:** Find the necessary JDBC driver JAR and copy it to the GEL `lib` folder (GEL only searches its own `lib` folder and the Classic PPM server classpath):
- **Oracle:** Copy `ojdbc14.jar` to the `lib` folder
- **SQL Server:** Copy `msbase.jar`, `mssqlserver.jar`, `msutil.jar` to the `lib` folder

## Connect to a Database and Print Query Results

```xml
<gel:script xmlns:core="jelly:core"
  xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:sql="jelly:sql">

  <gel:parameter default="svong" var="ClarityUser"/>
  <gel:parameter default="svong" secure="true" var="ClarityPassword"/>

  <sql:setDataSource
    url="jdbc:oracle:thin:@localhost:1521:NIKU"
    driver="oracle.jdbc.driver.OracleDriver"
    user="${ClarityUser}"
    password="${ClarityPassword}"/>

  <sql:query var="result">
    select name, unique_name from srm_projects
  </sql:query>

  <core:forEach trim="true" items="${result.rowsByIndex}" var="row">
    <core:forEach var="field" items="${row}">
      <gel:out>${field}</gel:out>
    </core:forEach>
  </core:forEach>
</gel:script>
```

**Key patterns:**
- `sql:setDataSource` — establishes the DB connection (supports parameters for credentials)
- `sql:query` — executes the SQL query
- First `core:forEach` — iterates over rows; inner `core:forEach` — reads columns per row
- `secure="true"` on `gel:parameter` masks the password in Classic PPM process UI

**Sample output:**
```
Project ABC
P001
Consumer Confidence Project
P002
John's Super Special Project
P003
```

## Process Rows with Multiple Columns (Alternative Pattern)

For queries returning a fixed number of columns per row, use `step` to process logical rows:

```xml
<core:forEach trim="true" items="${queryResult.rowsByIndex}" var="row">
  <!-- 3 fields per row, jump by 3 to build the next row -->
  <core:forEach var="field" items="${queryResult.columnNames}" indexVar="i" step="3">
    <file:line>
      <file:column value="${row[i]}"/>
      <file:column value="${row[i+1]}"/>
      <file:column value="${row[i+2]}"/>
    </file:line>
  </core:forEach>
</core:forEach>
```

## Access the Classic PPM Database Directly

Use `gel:setDataSource` to connect to Classic PPM's own database without providing credentials:

```xml
<gel:setDataSource dbId="niku"/>
```

You only need to know the database ID (`niku` for the Classic PPM database).

## Execute an NSQL Query (gel:nsqlQuery)

Execute an existing Studio NSQL query by ID:

```xml
<gel:setDataSource dbId="niku" var="dataSource"/>

<gel:nsqlQuery queryId="usercountbylicensetype" var="resultSet">
  <gel:nsqlParameter name="license_wildcard" value="*"/>
</gel:nsqlQuery>

<core:forEach items="${resultSet}" var="row">
  <gel:out>Row Contents: '${row}'.</gel:out>
</core:forEach>
```

Or define an ad-hoc inline NSQL query:

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

## SQL Tag Library (sql:)

> **Note:** SQL Tag is deprecated but still functional.

Include the namespace declaration:
```xml
<gel:script xmlns:sql="jelly:sql">
```

Key tags:
- `sql:setDataSource` — Set the JDBC data source
- `sql:query` — Query a table (results in `rowsByIndex`, `columnNames`)
- `sql:update` — Insert/update/delete records (supports `<sql:param>` bind variables)

**Executing a stored procedure (MS SQL Server):**
```xml
<sql:update>
  EXEC Z_MY_CUSTOM_SP ?
  <sql:param value="prior"/>
</sql:update>
```

**Executing a stored procedure (Oracle):**
```xml
<sql:update>
  CALL Z_MY_CUSTOM_SP(?)
  <sql:param value="prior"/>
</sql:update>
```

## Related Notes

- [[GEL Basics]] — GEL fundamentals, variables, and structure
- [[GEL File Operations]] — File and FTP operations
- [[GEL Tag Library]] — Full GEL tag library reference
- [[GEL Integration Processes]] — Process automation
