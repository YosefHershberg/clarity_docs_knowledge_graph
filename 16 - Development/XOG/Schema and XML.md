---
title: XOG Schema Sample XML and Special Characters
tags:
  - dev
aliases:
  - Schema and XML
canonical: true
audience: dev
domain: development
---
# XOG Schema, Sample XML Files, and Special Characters

This reference covers XOG schema files, XML read and write files, special characters, date and time formats, and filter criteria. For the SOAP login/logout structure, see [[Client and SOAP]].

---

## Schema Files

Schemas are templates containing rules for creating valid XOG XML files. Schema definitions apply to all read and write requests and responses.

**Schema file locations:**
- **Classic PPM server:** `$installDir/webroot/WEB-INF/xog/xsd/`
- **XOG client directory:** `xsd/`

> [!NOTE]
> The `xsd` folder contains schema definitions to help create valid XML files. Verify that attributes are documented in the [[Object Reference]] before using them. Some attributes in the XSD files may be deprecated or unsupported.

### Schema Definitions

| File | Purpose |
|------|---------|
| `nikuxog_read.xsd` | Read request schema. Includes `nikuxog_readTypes.xsd` and `nikuxog_readQueryTypes.xsd`. |
| `nikuxog_<object>.xsd` | Read response and write request schema for each specific object. |
| `status.xsd` | Write response schema (applies to all write object responses). |

### NikuDataBus Header Element

All read and write objects require the `<Header>` element.

| Attribute | Required | Description |
|-----------|----------|-------------|
| `version` | Yes | Version of the XOG service. Type: String. |
| `externalSource` | Write only | Source system. Supported values: `NIKU` (default when reading), `ORACLE-FINANCIAL`, `PEOPLESOFT`, `SAP`, `OTHER`, `OTHER-EXPENSE`, `OTHER-TIME`, `REMEDY`. |

The schema also includes:
- **Sequence** — Attribute processing order
- **Attribute name**
- **Maximum field length**
- **Required field indicator**

---

## XML Read and Write Files

Sample XML read and write files for Classic PPM objects are stored in the `xml` directory created during XOG client installation.

### XML Read Files

Edit an example XML read file to create a new read file or export the information you want for an object. Each example read file contains the necessary header information, arguments, and query filters.

**Example XML read file for the Project object (`prj_projects_read.xml`):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd">
  <Header version="6.0.11" action="read" objectType="project" externalSource="NIKU">
    <!-- Swap 1 and 2 in the name attribute to change sort order -->
    <args name="order_by_1" value="name"/>
    <args name="order_by_2" value="projectID"/>
    <args name="include_tasks" value="true"/>
    <args name="include_dependencies" value="true"/>
    <args name="include_subprojects" value="true"/>
    <args name="include_resources" value="true"/>
    <args name="include_baselines" value="true"/>
    <args name="include_allocations" value="true"/>
    <args name="include_estimates" value="true"/>
    <args name="include_actuals" value="true"/>
    <args name="include_custom" value="true"/>
    <args name="include_burdening" value="false"/>
  </Header>
  <Query>
    <Filter name="projectID" criteria="EQUALS">project1</Filter>
  </Query>
</NikuDataBus>
```

**Structure notes:**
- `action="read"` and `objectType="project"` in the header indicate this is a project read file.
- Arguments control what data is included. Default value for data arguments is `true`.
- The `<Query>` section limits which records are returned.

### XML Write Files

You can create XML write files in two ways:
- **Manually** — Modify the template files in the `xml` folder.
- **From a read file output** — The output of an XML read file is returned in valid write file format. Edit the output to create a write file.

**Workflow:**
1. Create an example object in Classic PPM with the desired data.
2. Create an XML read file and run it to generate output.
3. Examine and edit the output XML file.
4. Save as your XML write file.

---

## Special Characters

Escape special characters in XOG requests to ensure successful reads and writes.

| Character | Escape Rule |
|-----------|-------------|
| `&` (Ampersand) | `&amp;` |
| `'` (Apostrophe) | `&apos;` |
| `>` (Greater-than) | `&gt;` |
| `<` (Less-than) | `&lt;` |
| `"` (Quotes) | `&quot;` |

**Escape example:**
```xml
<ColumnValue name="abn_vendor_names">E1&amp;P2</ColumnValue>
```

**CDATA example** (alternative to escaping):
```xml
<ColumnValue name="abn_vendor_names"><![CDATA[E1&P2]]></ColumnValue>
```

CDATA marks content as character data only — not markup. Start: `<![CDATA[` / End: `]]>`.

---

## Date and Time Format

Use the following standard formats:
- **Date:** `YYYY-MM-DD`
- **Time:** `HH24MMSS`

**Important considerations:**

- **Custom object date/time values** are stored in GMT. Offset your locale's date and time to GMT. Example: November 20, 2008 at 3:15 PM Tokyo time (UTC+9) becomes `2008-11-21T00:15:00`.
- **Task finish date timestamps** — Always include a timestamp in `prj_projects_write.xml`. Without one, the time defaults to `00:00:00`, which causes Portfolio portlets to display the finish date one day later. Use `17:00:00` as the timestamp when none is provided.

---

## Filter Criteria

Filtering in a XOG read request requires criteria values. Supported values:

| Criteria | Usage |
|----------|-------|
| `EQUALS` | Exact match |
| `OR` | Comma-separated list of values |
| `BETWEEN` | Comma-separated range (start,end) |
| `AFTER` | Values after the specified value |
| `BEFORE` | Values before the specified value |

> [!WARNING]
> Do not use spaces around comma-separated entries for `OR` and `BETWEEN` filters.

---

## Values to Pass

| Field Type | Value Format |
|------------|-------------|
| Lookup | `lookup_code`, `lookup_enum`, or lookup ID — depends on the lookup configuration. |
| Custom Boolean field | `1` or `0` |

---

## Related
- [[_MOC Development]]

%%Source: p4250-4259%%
