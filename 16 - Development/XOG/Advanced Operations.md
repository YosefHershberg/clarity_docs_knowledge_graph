---
title: XOG Advanced Operations
aliases: [XOG Bulk Import, XOG Performance, XOG Error Handling]
tags: [dev, howto, reference]
canonical: true
audience: dev
domain: development
---
# XOG Advanced Operations

This note covers advanced XOG usage patterns: bulk imports and exports, session management, error handling strategies, performance tuning, and XML data formatting requirements. For basic read/write syntax see [[Object API]]; for pagination and governor limits see [[Governor Node Limit]].

---

## Session Management

### SOAP Session Lifecycle

XOG SOAP operations require an authenticated session. The session lifecycle has three steps:

1. **Login** — Send a Login request to obtain a `SessionID`
2. **Execute** — Include the `SessionID` in each subsequent request header
3. **Logout** — Explicitly invalidate the session when done

**Login request:**

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    <Login xmlns="http://www.niku.com/xog">
      <Username>admin</Username>
      <Password>admin</Password>
    </Login>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

**Authenticated request (passing SessionID):**

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
                   xmlns:xog="http://www.niku.com/xog">
  <SOAP-ENV:Header>
    <xog:Auth>
      <xog:SessionID>[session id]</xog:SessionID>
    </xog:Auth>
  </SOAP-ENV:Header>
  <SOAP-ENV:Body>
    <!-- your XOG request here -->
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

**Logout request:**

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:obj="http://www.niku.com/xog/Object">
  <soapenv:Header/>
  <soapenv:Body>
    <obj:Logout>
      <obj:SessionID>[SessionID]</obj:SessionID>
    </obj:Logout>
  </soapenv:Body>
</soapenv:Envelope>
```

### Session Timeout

> [!WARNING]
> When making multiple requests with the same `SessionID` — for example when an external process wakes up at defined intervals — the session may time out. This is equivalent to a Logout. Log in again to establish a new `SessionID`.

- The **default session timeout is one hour**
- The timeout duration matches the **Global Session Timeout** configured in **System Options** in the Administrator Tool
- If a long-running XOG read exceeds the session timeout, you will see:
  ```
  XOG-9062: The requested data failed to export because the processing time
  exceeded the session timeout interval. Contact your administrator to update
  the XML Node Limit.
  ```
- Remedy: reduce the **Maximum XML Nodes** limit in CSA so each paginated chunk completes within the session timeout window

### Shell Session (XOG Client)

The XOG client shell lets you log in once and execute multiple requests before logging out — useful for development and testing:

```
xog                          # open shell
> login admin/password@myserver:80
> call xml/prj_projects_read.xml
> output c:\xog\xml\out.xml
> call xml/prj_projects_write.xml
> logout
```

See [[Client and SOAP]] for the full shell command reference.

---

## Bulk Import Strategies

### How Writes Are Batched Internally

When you send a write request containing many records, the XOG server processes **20 instances per iteration**:

- If the [[Governor Node Limit]] is reached before 20 instances are loaded, the server processes only the instances already loaded in that iteration
- The remaining instances roll automatically into the next iteration
- If the server goes down mid-iteration, the current batch may not be saved, but **all previously completed iterations are preserved**

> [!NOTE]
> The XOG client progress bar does **not** display during write operations.

### Properties Files for Repeatable Bulk Loads

Organize recurring bulk imports into separate `.properties` files, one per object type. This saves re-entering command-line parameters each time.

**Example `projects.properties`:**

```properties
servername=clarity-prod.example.com
portnumber=443
sslenabled=true
fipsenabled=false
username=admin
password=admin
input=xml/prj_projects_write.xml
output=xml/prj_projects_write_out.xml
```

**Run with:**

```
xog -propertyfile projects.properties
```

Suggested file set for a full system migration:

| File | Purpose |
|------|---------|
| `users.properties` | User accounts |
| `resources.properties` | Resource records |
| `companies.properties` | Company/vendor records |
| `projects.properties` | Project data |
| `content.properties` | Studio content packs |

### Incremental Content Pack Updates

Use `singleContentType` and `no_dependencies` for small, targeted Studio configuration pushes — avoiding the overhead of exporting the full content graph:

```xml
<Header version="12.0.0.5028" action="read" objectType="contentPack" externalSource="NIKU">
  <args name="singleContentType" value="portlet"/>
  <args name="no_dependencies" value="true"/>
</Header>
<PortletQuery>
  <Filter name="code" criteria="EQUALS">my_custom_portlet</Filter>
</PortletQuery>
```

> [!WARNING]
> Use `no_dependencies=true` only for small incremental updates. The user performing the export must have a thorough understanding of content dependencies on both source and target systems.

Supported `singleContentType` values: `job_definition`, `lookup`, `menu`, `object`, `page`, `portlet`, `process`, `query`.

### Using Read Output as a Write Template

The cleanest way to build a write file is to read an existing record and use its output directly:

1. Create a representative record in Classic PPM with the desired structure
2. Run an XOG read for that record with all `include_*` arguments set to `true`
3. Use the output XML — it is already in valid write format
4. Edit field values, save, and use as the write template

**Example project read with all sections:**

```xml
<Header version="6.0.11" action="read" objectType="project" externalSource="NIKU">
  <args name="include_tasks"         value="true"/>
  <args name="include_dependencies"  value="true"/>
  <args name="include_subprojects"   value="true"/>
  <args name="include_resources"     value="true"/>
  <args name="include_baselines"     value="true"/>
  <args name="include_allocations"   value="true"/>
  <args name="include_estimates"     value="true"/>
  <args name="include_actuals"       value="true"/>
  <args name="include_custom"        value="true"/>
  <args name="include_burdening"     value="false"/>
</Header>
<Query>
  <Filter name="projectID" criteria="EQUALS">template_project</Filter>
</Query>
```

---

## Error Handling

### XOGOutput Structure

Every write response contains an `<XOGOutput>` block. Always inspect this block to determine the outcome:

```xml
<XOGOutput>
  <Object type="user"/>
  <Status state="SUCCESS"/>                <!-- SUCCESS or FAILURE -->
  <Statistics
    failureRecords="0"
    insertedRecords="0"
    totalNumberOfRecords="1"
    updatedRecords="1"/>
  <Records>
    <Record>
      <KeyInformation>
        <column name="ALL">ALL RECORDS</column>
      </KeyInformation>
      <ErrorInformation>
        <Severity>WARNING</Severity>
        <Description>New Users Password will be Defaulted to Value ca2000</Description>
      </ErrorInformation>
    </Record>
  </Records>
</XOGOutput>
```

| Field | Meaning |
|-------|---------|
| `Status/@state` | `SUCCESS` or `FAILURE` |
| `Statistics/@totalNumberOfRecords` | Total records in the request |
| `Statistics/@insertedRecords` | New records created |
| `Statistics/@updatedRecords` | Existing records updated |
| `Statistics/@failureRecords` | Records that could not be processed |
| `ErrorInformation/Severity` | `WARNING`, `ERROR`, or `FATAL` |
| `ErrorInformation/Description` | Human-readable explanation |

### Severity Levels

| Severity | Effect |
|----------|--------|
| `WARNING` | Record is posted but non-required fields may be defaulted due to data inconsistencies |
| `ERROR` | The record is not imported; fix the error and re-run |
| `FATAL` | The entire file is rejected (e.g., invalid XML schema) |

**FATAL example — bad attribute value:**

```xml
<ErrorInformation>
  <Severity>FATAL</Severity>
  <Description>[Error] :1:1: attribute "disableTSVUpdate" has a bad value:
  "yes" does not satisfy the constraint</Description>
  <Exception type="java.lang.Exception">Invalid xml data</Exception>
</ErrorInformation>
```

### Common Validation Rules

XOG validates all reference fields before writing. The general patterns across objects:

- If a **required lookup code** does not exist → record is not imported, error posted
- If an **optional lookup code** does not exist → record is imported with field defaulted, warning posted
- If a **referenced user/resource** does not exist → record is imported without that association, warning posted
- If the **unique identifier** is not unique → record is not imported, error posted

### GL Transaction Error Handling

GL transactions have stricter all-or-nothing semantics:

> [!WARNING]
> If a single record in a GL transaction batch is in error, the **entire batch is rejected**. Debits and credits must always be kept in sync.

Recovery steps:
1. Fix the error batch in Classic PPM
2. Re-post to GLControl
3. Rerun the XOG to re-extract the GL transaction records

If an output file was successfully created but errors are found later, roll back the entire batch — do not partially re-submit.

### OBS Import Error Prevention

When restructuring OBS units, always include the **complete hierarchy** in your XML. If child units are omitted, their depth can change in unexpected ways. Create and move OBS units together in a single file.

### Checking for Errors in Automation

When using GEL or SOAP automation, always branch on `Status/@state`:

```xml
<core:switch on="${XOGoutcome}">
  <core:case value="SUCCESS">
    <!-- process results -->
  </core:case>
  <core:case value="FAILURE">
    <gel:out>XOG failed. Out of <gel:expr select="$stats/@totalNumberOfRecords"/>
    records, <gel:expr select="$stats/@failureRecords"/> failed.</gel:out>
  </core:case>
</core:switch>
```

---

## Performance Tuning

### Node Limit and Pagination

Large exports are paginated automatically when they exceed the **Maximum XML Node Limit** (default: 150,000). See [[Governor Node Limit]] for the complete tuning guide, benchmarks, and the `xog -analyze` tool.

Key operating principle: **lower the node limit → more pages → each page processes faster and is less likely to exceed the session timeout**.

### Filtering to Reduce Data Volume

Narrow requests with precise filters to reduce memory pressure and processing time:

```xml
<!-- Prefer specific IDs over wildcards -->
<Filter name="projectID" criteria="EQUALS">project1</Filter>

<!-- Use date ranges to limit historical data -->
<Filter name="start" criteria="BETWEEN">2024-01-01,2024-12-31</Filter>

<!-- Use OR to batch a known set -->
<Filter name="projectID" criteria="OR">proj1,proj2,proj3</Filter>
```

> [!WARNING]
> Do **not** use spaces around comma-separated entries for `OR` and `BETWEEN` filters.

Exclude sections you do not need by setting read arguments to `false`:

```xml
<args name="include_baselines"   value="false"/>
<args name="include_allocations" value="false"/>
<args name="include_actuals"     value="false"/>
```

### Incremental Reads with Skip

When paginating programmatically via WSDL or GEL, track the `<Skip value="N"/>` token in each response and pass it forward:

```xml
<!-- Response indicates 24 records processed, 267 total -->
<Skip value="24"/>
<XOGTotalFilteredRecords value="267"/>

<!-- Next request: start from record 24 -->
<Header version="6.0.11" action="read" objectType="project" externalSource="NIKU">
  <args name="skip" value="24"/>
</Header>
```

The absence of a `<Skip>` element in the response means all records have been processed.

> [!NOTE]
> The **XOG client** handles pagination automatically. Use WSDL/GEL pagination only when scripting outside the client.

### Reducing Content Pack Overhead

- Use `singleContentType` to export one content type at a time
- Use `no_dependencies=true` for incremental portlet/query pushes
- Export portlets directly from **Studio** (via the **Export** button on the Portlets list page) for basic exports with no dependencies, packaged as individual XML files in a zip

### Rate Matrix — Incremental Row Updates

In large deployments, avoid sending the entire rate matrix on every update. XOG supports updating individual rate matrix rows without replacing the full list. This prevents out-of-memory errors from large rate matrix XML payloads.

---

## XML Data Formatting

### Special Characters

Escape special characters in all XOG attribute values and element content:

| Character | Escaped Form |
|-----------|-------------|
| `&` | `&amp;` |
| `'` | `&apos;` |
| `>` | `&gt;` |
| `<` | `&lt;` |
| `"` | `&quot;` |

**Escape example:**

```xml
<ColumnValue name="abn_vendor_names">E1&amp;P2</ColumnValue>
```

**CDATA alternative** (preferred for complex strings):

```xml
<ColumnValue name="abn_vendor_names"><![CDATA[E1&P2]]></ColumnValue>
```

### Date and Time Format

| Type | Format | Example |
|------|--------|---------|
| Date | `YYYY-MM-DD` | `2024-06-15` |
| DateTime | `YYYY-MM-DDTHH:MM:SS` | `2024-06-15T08:00:00` |

> [!WARNING]
> **Custom object date fields** are stored in **GMT**. Offset your local time to GMT before writing. Example: 3:15 PM Tokyo time (UTC+9) = `2008-11-21T00:15:00` in the XOG file.

> [!WARNING]
> **Task finish dates** require an explicit timestamp. If omitted, the time defaults to `00:00:00`, which causes Portfolio portlets to display the finish date one day late. Use `17:00:00` when no specific time is available.

### Namespace Requirement

The `obj` namespace prefix is mandatory on all `<ActionObject>` elements (e.g., `<obj:WriteProject>`). Without it, a processing error occurs:

```xml
<obj:WriteProject xmlns:obj="http://www.niku.com/xog/Object">
  ...
</obj:WriteProject>
```

### Multi-Value Lookup (MVL) Clearing

To remove all values from a multi-value lookup field, use `complete="true"` with no child values:

```xml
<!-- Replaces existing MVL values with the values passed (empty = clears all) -->
<MultiValueLookupField complete="true"/>
```

This capability was added in Clarity 16.0.0.

---

## Schema Validation Notes

> [!NOTE]
> Some attributes present in the XSD schema files may be **deprecated or unsupported**. Always verify that attributes are documented in the [[Object Reference]] before using them. The XSD files are templates — they do not guarantee that every attribute is active.

Schema file locations:
- **On the server:** `$installDir/webroot/WEB-INF/xog/xsd/`
- **In the XOG client:** `<xog-client-dir>/xsd/`

Key schemas:

| Schema | Purpose |
|--------|---------|
| `nikuxog_read.xsd` | All read requests |
| `nikuxog_<object>.xsd` | Per-object read responses and write requests |
| `status.xsd` | All write responses |

---

## Related

- [[Getting Started]] — XOG overview and access rights
- [[Client and SOAP]] — XOG client installation and shell reference
- [[Object API]] — Read/write syntax, filters, partitioning
- [[Object Reference]] — Full object list with schemas and read filters
- [[Governor Node Limit]] — Pagination, node limits, benchmarks
- [[GEL Scripting]] — GEL-based XOG automation
- [[Query API]] — NSQL-based exports
- [[_MOC Development]]

%%Source: p4241-4285%%
