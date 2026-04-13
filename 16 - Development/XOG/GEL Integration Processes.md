---
title: GEL Integration Processes
tags:
  - dev
  - howto
---
# GEL Integration Processes

Source: Clarity 16.4.1 PDF, p4492–4494

Related: [[_MOC Development]] | [[GEL Basics]] | [[GEL Scripting]] | [[GEL Tag Library]] | [[InvokeAction API]]

## What is a GEL Integration Process?

A GEL integration process automates repetitive steps that would otherwise be performed manually in Classic PPM. A process can act on any object type and includes:
- A **start step** (required)
- One or more **intermediate steps**
- An **end step** (required)

Each step performs one or more **actions** that move the process toward completion.

## Available Process Action Types

| Action Type | Description |
|-------------|-------------|
| **Manual** | Performed by a user in the UI |
| **System** | Completed by a Classic PPM system action |
| **Job** | Completed by a job (scheduled or started manually) |
| **Custom Action** | GEL code snippets using tag libraries to interact with various data sources |

## Disconnected Integration Processes

You can disconnect integration processes from any specific object. This allows you to:
- Schedule integration processes in Classic PPM
- Initiate integration processes in real time:
  - Manually from the user interface
  - Using a XOG web service request (external applications can send data proactively)

> **Note:** For performance reasons, the XOG web service request only initiates integration processes for **projects** and **incidents** objects.

## Integration Process Checklist

1. Create the process
2. (Optional) Create groups to represent larger segments of the process
3. Create start, intermediate, and finish steps
4. Include actions on steps — GEL can be used through Custom Actions
5. Connect steps with splits and joins
6. Validate the process (see Administration documentation)
7. Use the web service API to start the process and register the web service request to invoke the process

## Web Service Integration Details

**Key points:**
- Web service requests do NOT need to conform to any product API — they only need to be valid SOAP requests
- The external application maps the incoming SOAP message to a process
- The **SOAP listener servlet** responds to incoming web service requests
- The **Catalog Listener** and **Ad-Hoc Query listener** are built-in listeners
- Additional listeners can be registered in the database using an XPath expression, a target namespace, or both

## Real-Time vs. Scheduled Integration

**Real-time integration flow:**
1. External application sends SOAP request to Classic PPM SOAP listener
2. SOAP listener identifies the correct process via listener registration
3. Process is initiated and GEL custom actions execute

**Scheduled/manual process flow:**
1. Process is scheduled (via Classic PPM scheduler) or started manually
2. Process engine executes each step in sequence
3. GEL custom actions run at each custom step
4. XOG web services can be invoked to read/write Classic PPM data

## GEL in Custom Action Steps

GEL snippets in custom action steps can use tag libraries to interact with:
- Classic PPM data (via XOG SOAP calls using `soap:invoke`)
- External databases (via `sql:setDataSource` and `sql:query`)
- External web services (via `soap:invoke`)
- File system and FTP (via `file:readFile` / `ftp:open`)

### Built-in Parameters Available in Process GEL Scripts

| Parameter | Description |
|-----------|-------------|
| `${gel_objectInstanceId}` | Object instance ID (-1 if no object associated) |
| `${gel_processId}` | Process identifier |
| `${gel_processInstanceId}` | Process instance identifier (unique per execution) |

### Passing Data Between Process Steps

- Use `gel:setDocument` to pass an XML document from one step to the next
- Use `gel:getDocument` in the subsequent step to retrieve it
- Use `gel:persist` for values that need to survive across multiple steps or process executions

**Example:**
```xml
<!-- Step 1: Set the document -->
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <gel:persist var="myObjectId" value="${gel_objectInstanceId}" scope="INSTANCE"/>
  <gel:persist var="myProcessId" value="${gel_processInstanceId}" scope="INSTANCE"/>
</gel:script>
```

```xml
<!-- Step 2: Retrieve it -->
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
  <!-- ${myObjectId} and ${myProcessId} are available here via INSTANCE scope -->
  <gel:out>Processing object: ${myObjectId}</gel:out>
</gel:script>
```

### Invoking the InvokeAction API from a GEL Process

You can invoke the InvokeAction API to schedule or start processes:

```xml
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary"
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xog="http://www.niku.com/xog">

  <gel:parameter var="XOGURL" default="http://localhost:80"/>
  <gel:parameter var="XOGUsername" default="admin"/>
  <gel:parameter var="XOGPassword" default="admin" secure="true"/>

  <gel:parse var="processRequest">
    <Process xmlns="http://www.niku.com/xog/InvokeAction">
      <code>my_integration_process</code>
      <request>
        <!-- optional request body here -->
      </request>
    </Process>
  </gel:parse>

  <soap:invoke endpoint="${XOGURL}/niku/xog" var="result">
    <soap:message>
      <soapenv:Envelope>
        <soapenv:Header>
          <xog:Auth>
            <xog:Username>${XOGUsername}</xog:Username>
            <xog:Password>${XOGPassword}</xog:Password>
          </xog:Auth>
        </soapenv:Header>
        <soapenv:Body>
          <gel:include select="$processRequest"/>
        </soapenv:Body>
      </soapenv:Envelope>
    </soap:message>
  </soap:invoke>
</gel:script>
```

## Related Notes

- [[InvokeAction API]] — XOG InvokeAction API (schedules/starts processes via XOG)
- [[GEL Basics]] — GEL fundamentals, variables, and structure
- [[GEL Database Operations]] — JDBC database operations
- [[GEL File Operations]] — File and FTP operations
- [[GEL Tag Library]] — Full GEL tag library reference
- [[GEL Scripting]] — Overview of GEL scripting
