---
title: GEL Scripting Basics
tags:
  - dev
  - howto
aliases:
  - GEL Basics
  - GEL Setup
  - GEL Examples
canonical: true
audience: dev
domain: development
parent: "[[_MOC Development]]"
---

# XOG GEL Scripting

Generic Execution Language (GEL) is a tool that turns XML into executable code. GEL has been extended and embedded into Classic PPM to enable custom logic for complex business problems not addressed by out-of-the-box functionality.

As an enterprise application integration framework, GEL provides connectors to enterprise applications including Finance, HR, and General Ledger. Popular integrations have included BMC Remedy Help Desk, CA Service Desk, ServiceNow, SAP, Oracle, and Workday.

**With GEL, you can invoke and process these data sources:**
- **Web services** — Read or write to any SOAP-based web service, including the XOG web services.
- **File system** — Read or write to any delimited file, including those on local disks, network disks, or disk arrays.
- **FTP** — Upload or download to FTP servers.
- **JDBC** — Leverage JDBC to access relational database systems to read or write data.

> [!TIP]
> GEL is based on Jelly, a jakarta.apache.org Commons project.

> [!TIP]
> Until you upgrade to 15.5.1, avoid creating GEL scripts that attempt to read, run, or append records in very large CSV files. Out-of-memory errors and application outages can occur.

> [!WARNING]
> Before you use GEL, read the Customization, Modification, and Configuration Policy available in this documentation. Also, contact your CA account representative.

---

## GEL Setup

The GEL runtime is packaged with XOG in the XOG client. Once the client is installed, use the `gel` command in the `bin` directory of the XOG client to validate and execute GEL scripts. Make sure the JRE is installed on your computer.

### Script Validation and Execution

The GEL validator reads scripts, confirms they are well-formed XML, and verifies that all referenced tags and tag libraries are valid and available in the runtime environment. The validator does not execute scripts.

**Example — validate then execute `hello.xml`:**

```
E:\XOG>bin\gel -script hello.xml -validate
File geltest.xml validated.

E:\XOG>bin\gel -script hello.xml
Hello World 1!
Hello World 2!
Hello World 3!
```

---

## GEL Basics

### GEL Script Structure

You can add a comment anywhere in a GEL script using `<!-- comment -->`.

### GEL Script Tags

A GEL script is an executable XML file built from qualified elements that are bound to Java code named tags. Using namespace declarations, tags are organized into tag libraries made available in the script.

In a Hello World example, two tag libraries are defined: `Core` and `GELTagLibrary` — seen in tag pairs such as `<core:...>` and `<gel:...>`.

> [!NOTE]
> A script always resides within the `gel:script` tag.

**Hello World Example:**

```xml
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <core:forEach indexVar='i' begin='1' end='3'>
    <gel:out>Hello World ${i}!</gel:out>
  </core:forEach>
</gel:script>
```

`Core` is a built-in Jelly library containing general-purpose tags (such as `forEach`). `GELTagLibrary` is the primary GEL library containing general-purpose tags and Classic PPM-specific tags.

### GEL Conditionals and Loops

GEL contains the following tags for conditional processing:

**`<core:if>`:**
```xml
<core:if test="${hasDocs}">
  ...
</core:if>
```

**`<core:choose>`:**
```xml
<core:choose>
  <core:when test="${row[6].equals(&#34;&#34;)}">
    ...
  </core:when>
  <core:otherwise>
    ...
  </core:otherwise>
</core:choose>
```

**`<core:switch>`:**
```xml
<core:switch on="${caseType}">
  <core:case fallThru="true" value="Incident"/>
  <core:case value="Problem">
    ...
  </core:case>
  <core:case fallThru="true" value="Question"/>
  <core:default>
    ...
  </core:default>
</core:switch>
```

**`<core:forEach>`:**
```xml
<core:forEach trim="true" items="${queryResult.rowsByIndex}" var="row">
  ...
</core:forEach>
```

### GEL Variables

Variables in GEL scripts are declared at the time of use. There are no declaration blocks. GEL provides the following ways to store a variable value:

**`<gel:parameter>`** — Passes values into a GEL script from a Classic PPM process. Use `${variablename}` syntax to reference the parameter. The optional `secure="true"` attribute hides the value in the UI with asterisks.

```xml
<gel:parameter var="XOGUsername" default="admin"/>
<gel:parameter var="XOGPassword" default="password" secure="true"/>
```

**`<core:set>`** — Sets basic variables (not extracted from XML documents).

```xml
<core:set value="1" var="yes"/>
<gel:out>${yes}</gel:out>
<gel:out>${yes+2}</gel:out>
```

**`<gel:set>`** — Extracts values from an XML document using an XPath `select` attribute.

```xml
<gel:set asString="false"
  select="$XOGresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/Statistics"
  var="stats"/>
```

**`<gel:persist>`** — Sets variables with a scope that extends beyond the current script.

**`<gel:parse>`** — Creates an XML document in memory; how you build XOG requests.

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

### GEL Built-in Parameters

Custom Action GEL scripts associated with processes have these built-in parameters:

| Parameter | Description |
|-----------|-------------|
| `${gel_objectInstanceId}` | Object instance ID. `-1` if no object is associated with the process. |
| `${gel_processId}` | Process identifier; shared by all instances of this process. |
| `${gel_processInstanceId}` | Process instance identifier; unique per instance. |

All built-in parameters have a `gel_` prefix and are of type numeric.

### GEL Considerations

- GEL is case-sensitive. This includes variable names.
- All GEL scripts are XML. All XML rules apply to structure, tags, and special characters.
- In the Jelly `<sql:query>` tag, you cannot use the less than (`<`) and greater than (`>`) operators. Use `BETWEEN` instead, or escape using `&lt;` or `&gt;`.

### Using SSL with GEL

When interacting with SOAP services in GEL using SSL, additional steps may be required if:
- The SSL certificate is self-signed.
- A certificate issued by a well-known certificate authority has expired.

**Follow these steps to set up a self-signed SSL certificate:**

1. Locate the Java SDK installation directory. Example: `C:\jdk1.5.0_17`.
2. Export the SSL certificate or updated certificate-authority certificate to a file. Example: `mycert.cer`.
3. Change to the Java SDK JRE security directory:

```
cd c:\jdk1.5.0_17\jre\lib\security
```

4. Import your certificate into the `cacerts` keystore using the Java `keytool` command:

```
keytool -keystore cacerts -storepass changeit -import -file c:\temp\mycert.cer -trustcacerts -alias mycert
```

5. If setting up the self-signed certificate for the BG service (for GEL scripts that run in processes), restart the BG service.

### GEL Tag Restrictions

Control GEL tag restrictions using these admin commands:
- `admin general restrict-gel-tags` — Sets `gelTagRestriction` to `on`.
- `admin general allow-gel-tags` — Sets `gelTagRestriction` to `off`.

GEL tag restrictions are off by default.

> [!NOTE]
> Altering GEL tag restrictions requires restarting the app and bg services.

**`properties.xml` with no GEL tag restriction:**

```xml
<system online="true" multiCurrency="false" licenseTypes="old" singleTenantMode="true"/>
```

**`properties.xml` with GEL tags restricted:**

```xml
<system online="true" multiCurrency="false" licenseTypes="old"
  singleTenantMode="false" gelTagRestriction="on"/>
```

---

## GEL Examples: Running the XOG

To allow GEL to communicate with the XOG web service, include the SOAP and XOG namespaces in your scripts and package each invocation in a proper SOAP envelope.

### Example: Log in and Run the XOG to Read Resources (Individual Calls)

This example logs in to Classic PPM and runs the XOG to read the list of resources. Each action is performed as an individual call to the XOG server.

```xml
<gel:script xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:core="jelly:core"
  xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary"
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:sql="jelly:sql"
  xmlns:xog="http://www.niku.com/xog"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <gel:parameter default="http://nikuvm:80" var="XOGURL"/>
  <gel:parameter default="svong" var="XOGUsername"/>
  <gel:parameter default="svong" secure="true" var="XOGPassword"/>

  <!-- Log into XOG and get a session ID -->
  <soap:invoke endpoint="${XOGURL}/niku/xog" var="auth">
    <soap:message>
      <soapenv:Envelope
        xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:xog="http://www.niku.com/xog">
        <soapenv:Header/>
        <soapenv:Body>
          <xog:Login>
            <xog:Username>${XOGUsername}</xog:Username>
            <xog:Password>${XOGPassword}</xog:Password>
          </xog:Login>
        </soapenv:Body>
      </soapenv:Envelope>
    </soap:message>
  </soap:invoke>

  <!-- Check if sessionID was returned; if not, Login failed -->
  <gel:set asString="true" select="$auth/SOAP-ENV:Envelope/SOAP-ENV:Body/xog:SessionID/text()" var="sessionID"/>
  <core:choose>
    <core:when test="${sessionID == null}">
      <gel:out>Couldn't Log in. Check the username/password.</gel:out>
    </core:when>
    <core:otherwise/>
  </core:choose>

  <!-- Run XOG with an input file -->
  <soap:invoke endpoint="${XOGURL}/niku/xog" var="runresult">
    <soap:message>
      <soapenv:Envelope
        xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:xog="http://www.niku.com/xog">
        <soapenv:Header>
          <xog:Auth>
            <xog:SessionID>${sessionID}</xog:SessionID>
          </xog:Auth>
        </soapenv:Header>
        <soapenv:Body>
          <gel:parse var="xmlindoc" file="C:\Clarity\XOG\xml\rsm_resources_read.xml"/>
          <gel:include select="$xmlindoc"/>
        </soapenv:Body>
      </soapenv:Envelope>
    </soap:message>
  </soap:invoke>

  <!-- Read the output and extract information -->
  <gel:set asString="true"
    select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/Status/@state"
    var="XOGoutcome"/>
  <core:switch on="${XOGoutcome}">
    <core:case value="SUCCESS">
      <gel:forEach select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/Resources/Resource" var="outputnode">
        <gel:out><gel:expr select="$outputnode/PersonalInformation/@displayName"/></gel:out>
      </gel:forEach>
      <gel:set asString="false"
        select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/Statistics"
        var="stats"/>
      <gel:out>Success! Total number of records: <gel:expr select="$stats/@totalNumberOfRecords"/></gel:out>
    </core:case>
    <core:case value="FAILURE">
      <gel:set asString="false"
        select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/Statistics"
        var="stats"/>
      <gel:out>XOG failed. Out of <gel:expr select="$stats/@totalNumberOfRecords"/> records, <gel:expr select="$stats/@failureRecords"/> failed.</gel:out>
    </core:case>
    <core:default>
      <gel:out>Couldn't find XOG output summary. Please check the output file manually.</gel:out>
    </core:default>
  </core:switch>

  <!-- Log out of the XOG -->
  <soap:invoke endpoint="${XOGURL}/niku/xog" var="logoutresult">
    <soap:message>
      <soapenv:Envelope
        xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:xog="http://www.niku.com/xog">
        <soapenv:Header>
          <xog:Auth>
            <xog:SessionID>${sessionID}</xog:SessionID>
          </xog:Auth>
        </soapenv:Header>
        <soapenv:Body>
          <xog:Logout/>
        </soapenv:Body>
      </soapenv:Envelope>
    </soap:message>
  </soap:invoke>

</gel:script>
```

### Example: Log in and Make a XOG Request (Single Invocation)

This example logs in and makes a XOG request in a single invocation. The XOG request is included inline.

```xml
<gel:script xmlns:x="jelly:xml"
  xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary"
  xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xog="http://pmo.sec.samsung.net/niku/xog">

  <gel:parameter var="XOGusername" default="admin"/>
  <gel:parameter var="XOGpassword" default="admin"/>

  <soap:invoke endpoint="http://pmo.sec.samsung.net/niku/xog" var="result">
    <soap:message>
      <soap-env:Envelope
        xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:xog="http://www.niku.com/xog">
        <soap-env:Body>
          <xog:Login xmlns="http://www.niku.com/xog">
            <xog:Username>${XOGusername}</xog:Username>
            <xog:Password>${XOGpassword}</xog:Password>
          </xog:Login>
          <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd">
            <Header version="12.0.0.5028" action="read" objectType="resource" externalSource="NIKU">
              <args name="include_contact" value="false"/>
              <args name="include_management" value="false"/>
              <args name="include_custom" value="false"/>
              <args name="include_financial" value="false"/>
            </Header>
            <Query>
              <Filter name="isActive" criteria="EQUALS">true</Filter>
            </Query>
          </NikuDataBus>
        </soap-env:Body>
      </soap-env:Envelope>
    </soap:message>
  </soap:invoke>

  <gel:out><gel:expr select="$result"/></gel:out>

</gel:script>
```

---

## GEL Database Operations

GEL can connect to one or more databases and is not limited to Classic PPM databases. Both Oracle and SQL Server are supported.

### JDBC Error Example

Most connection issues are a result of login errors or JDBC issues:

```
E:\Clarity\XOG\bin>gel -script gelsqlexample.xml
ERROR 2005-08-31 16:45:40,549 [main] sql.SetDataSourceTag
Could not load driver class: java.lang.ClassNotFoundException: oracle.jdbc.driver.OracleDriver
```

If you see a similar error, find the necessary JDBC classes and copy them to the GEL classpath. The GEL engine only looks in the `lib` folder. For Oracle, copy `ojdbc14.jar` to the `lib` folder. For SQL Server, copy `msbase.jar`, `mssqlserver.jar`, and `msutil.jar` to the `lib` directory.

### Example: Connect to a Database and Print Query Results

```xml
<gel:script xmlns:core="jelly:core"
  xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:sql="jelly:sql">

  <gel:parameter default="svong" var="ClarityUser"/>
  <gel:parameter default="svong" secure="true" var="ClarityPassword"/>

  <sql:setDataSource url="jdbc:oracle:thin:@localhost:1521:NIKU"
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

The `sql:setDataSource` statement makes the database connection. Using `gel:parameter` for credentials allows them to be set from Classic PPM. The `secure="true"` declaration masks the password in the UI.

---

## GEL File Operations

GEL can open, read, and write files (XML or comma-delimited). GEL can also perform FTP operations. GEL cannot create directories, move files, or delete files.

### Example: Create a Rate Matrix XOG File

This example opens a tab-delimited text file as input and creates a `matrixRow` node for each row.

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

  <!-- Open the input file -->
  <file:readFile fileName="${infile}" delimiter="\t" var="infileParsed" embedded="false"/>

  <!-- Create the main XML shell -->
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
          <matrixRows/>
        </matrix>
      </matrices>
    </NikuDataBus>
  </gel:parse>

  <!-- Build rows, skipping the header on the first line -->
  <core:forEach items="${infileParsed.rows}" var="row" indexVar="i" begin="1" step="1">
    <gel:parse var="matrixRowNode">
      <matrixRow actualCost="${row[11]}" currencyCode="${row[12]}" entity="${row[2]}"
        department="${row[3]}" fromDate="${row[0]}" rate="${row[9]}"
        transactionClass="${row[5]}" resourceClass="${row[4]}"
        resourceRole="${row[6]}" inputTypeCode="${row[8]}"
        resource="${row[7]}" standardCost="${row[10]}" toDate="${row[1]}"/>
    </gel:parse>
    <gel:set value="${matrixRowNode}"
      select="$loadContent/NikuDataBus/matrices/matrix/matrixRows"
      insert="true"/>
  </core:forEach>

  <!-- Write the completed file -->
  <gel:serialize fileName="${XOGloadfile}" var="${loadContent}"/>

</gel:script>
```

### Example: Output Delimited Files

```xml
<!-- Open up the output file -->
<file:writeFile fileName="${doclistfile}" delimiter=",">
```

### Example: Create a File to Write Documents for Multiple Projects

This example extracts each project ID from a XOG file, and creates a parent node for the Documents XOG.

Key considerations:
- The Document XOG requires the internal database ID of the project, not the `UNIQUE_NAME`. Use a GEL JDBC connection to retrieve the corresponding DBID.
- The Document XOG only loads data at the folder level. Documents for each project must be placed into individual temporary folders (which GEL cannot create itself).

```xml
<gel:script
  xmlns:core="jelly:core"
  xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:file="jelly:com.niku.union.gel.FileTagLibrary"
  xmlns:sql="jelly:sql">

  <gel:parameter default="jdbc:microsoft:sqlserver://myserver:1433;DatabaseName=pmodev;SelectMethod=cursor" var="clarityURL"/>
  <gel:parameter default="niku" var="clarityUser"/>
  <gel:parameter default="niku" secure="true" var="clarityPassword"/>
  <gel:parameter default="D:\App\pmo\xog\xml" var="infolder"/>
  <gel:parameter default="${infolder}\prj_projectswrite.xml" var="infile"/>
  <gel:parameter default="${infolder}\DocumentsXOGLoad.xml" var="docXOGloadfile"/>
  <gel:parameter default="${infolder}\docslist.gel" var="doclistfile"/>
  <gel:formatDate format="yyyyMMdd" stringVar="today"/>

  <sql:setDataSource url="${clarityURL}"
    driver="com.microsoft.jdbc.sqlserver.SQLServerDriver"
    user="${clarityUser}" password="${clarityPassword}" var="clarityDS"/>

  <gel:parse var="projectsParsed" file="${infile}"/>

  <file:writeFile fileName="${doclistfile}" delimiter=",">

    <gel:parse var="docsParsed">
      <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../xsd/nikuxog_document.xsd">
        <Header action="write" externalSource="OS" objectType="document" version="12.0.0.5028"/>
        <Documents/>
      </NikuDataBus>
    </gel:parse>

    <gel:set select="$docsParsed/NikuDataBus/Documents" var="docnode"/>
    <gel:parse var="parentNode">
      <Parent documentLocation="" parentObjectId="" parentObjectType="Projects"/>
    </gel:parse>

    <gel:forEach select="$projectsParsed/NikuDataBus/Projects/Project" var="currentPrj">
      <gel:set asString="true" select="$currentPrj/@projectID" var="currentPrjID"/>
      <core:set value="false" var="hasDocs"/>
      <core:if test="${hasDocs}">
        <sql:query var="prjIDquery" dataSource="${clarityDS}">
          SELECT ID FROM niku.SRM_PROJECTS WHERE UNIQUE_NAME = ?
          <sql:param value="${row[i]}"/>
        </sql:query>
        <core:forEach trim="true" items="${prjIDquery.rowsByIndex}" var="idrow">
          <core:forEach var="idfield" items="${prjIDquery.columnNames}" indexVar="j">
            <gel:set value="${parentNode}" select="$docsParsed/NikuDataBus/Documents" insert="true"/>
            <gel:set value="${infolder}\docimporttemp\${currentPrjID}" select="$docnode/Parent/@documentLocation"/>
            <gel:set value="${idrow[i]}" select="$docnode/Parent/@parentObjectId"/>
            <gel:set var="parentNode" select="$docnode/Parent"/>
          </core:forEach>
        </core:forEach>
      </core:if>
    </gel:forEach>

    <gel:serialize fileName="${docXOGloadfile}" var="${docsParsed}"/>

  </file:writeFile>

</gel:script>
```

---

## GEL Integration Processes

A GEL integration process automates repetitive steps that would otherwise be performed manually in Classic PPM. A process can act on any object type and includes a start step (required), end step (required), and one or more intermediate steps.

**Available process action types:**

| Type | Description |
|------|-------------|
| Manual | Performed by a user in the UI. |
| System | Completed by a Classic PPM system action. |
| Job | Completed by running a job (scheduled or manually started). |
| Custom action | Normal process steps with custom GEL code using tag libraries. |

You can disconnect integration processes from any specific object. This allows you to:
- Schedule integration processes in Classic PPM.
- Initiate integration processes manually from the UI, using a XOG web service request, or from a background job.

> [!NOTE]
> For performance reasons, the XOG web service request does not initiate integration processes for all objects. Only projects and incidents support XOG web service-initiated integration processes.

### Integration Process Checklist

1. Create the process.
2. (Optional) Create groups to represent larger segments of the process.
3. Create start, intermediate, and finish steps.
4. Include actions on steps (GEL is used through Custom Actions).
5. Connect the steps with splits and joins.
6. Validate the process.
7. Use the web service API to start the process and register the web service request.

> [!NOTE]
> - Web service requests do not need to conform to any product API — they need only be valid SOAP requests.
> - The external application maps incoming SOAP messages with a process.
> - The SOAP listener servlet responds to incoming web service requests.
> - The Catalog Listener and the Ad-Hoc Query listener are built-in listeners. Register additional listeners in the database using an XPath expression, a target namespace, or both.

---


---
**See also:** [[GEL Tag Libraries]]
**Parent:** [[_MOC Development|Development]]
