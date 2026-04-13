---
title: XOG Services - Query API
tags:
  - dev
  - reference
---
# XOG Services: Query API

Source: Clarity 16.4.1 PDF, p4275–4278

Related: [[_MOC Development]] | [[Object API]] | [[GEL Scripting]] | [[WSDL]]

## Overview

The Query API allows execution of Studio NSQL-based queries from the XOG. The Studio Query is referenced by its code, and the response is formatted as record elements.

Use when:
- Full object instance data with dependencies is too much detail
- You need data from multiple objects or database tables that have no defined objects

> **Note:** The Query API requires a valid license for Studio.

## Query API Root Elements

| Element | Required | Description |
|---------|----------|-------------|
| `Code` | Required | The NSQL unique identifier defined in Studio. Type: String |
| `Filter` | Optional | NSQL filter columns defined in Studio. Type: User-defined |

## Basic Example

**Studio Query code:** `sample.getresources`

**XML Query:**
```xml
<Query xmlns="http://www.niku.com/xog/Query">
  <Code>sample.getresources</Code>
</Query>
```

**Result:**
```xml
<QueryResult xmlns="http://www.niku.com/xog/Query">
  <Code>sample.getresources</Code>
  <Records>
    <Record>
      <rsrc>Administrator, Niku</rsrc>
      <project_count>178</project_count>
      <manager>Administrator, Niku</manager>
    </Record>
  </Records>
</QueryResult>
```

## The Query Filter

The WSDL for queries defines filter parameters in addition to the code identifier, allowing ad-hoc queries based on a Studio Query.

### Exact Match Filter

Returns only records matching the exact value:
```xml
<Query xmlns="http://www.niku.com/xog/Query">
  <Code>sample.getresources</Code>
  <Filter>
    <rsrc>Administrator, CorpApp</rsrc>
  </Filter>
</Query>
```

### Wildcard Filter

The wildcard filter automatically appends `*` to the end of a value. You can also insert your own `*` anywhere in the filter string. Only available on String columns.

```xml
<Query xmlns="http://www.niku.com/xog/Query">
  <Code>sample.getresources</Code>
  <Filter>
    <rsrc_wildcard>Admin</rsrc_wildcard>
  </Filter>
</Query>
```

Pattern with embedded wildcard:
```xml
<rsrc_wildcard>Admin*CorpApp</rsrc_wildcard>
```

> **Warning:** Wildcard filtering on large data sets severely degrades performance.

### Range Filters (From / To)

Use `_from` and `_to` suffixes for bounded or unbounded range queries (greater-than-or-equal / less-than-or-equal):

**Unbounded (from only):**
```xml
<Filter>
  <project_count_from>1</project_count_from>
</Filter>
```

**Bounded range:**
```xml
<Filter>
  <rsrc_from>A</rsrc_from>
  <rsrc_to>E</rsrc_to>
</Filter>
```

## Example: Export Query Results to Tab-Delimited File

Using GEL to execute NSQL query `xog_query_test` and export results to a tab-delimited text file:

```xml
<gel:script xmlns:core="jelly:core"
  xmlns:xog="http://www.niku.com/xog"
  xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
  xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary"
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:f="jelly:com.niku.union.gel.FileTagLibrary"
  xmlns:nikuq="http://www.niku.com/xog/Query"
  xmlns:util="jelly:util">

  <!-- Build the Query API request -->
  <gel:parse var="xoginput">
    <Query xmlns="http://www.niku.com/xog/Query">
      <Code>xog_query_test</Code>
    </Query>
  </gel:parse>

  <!-- Invoke XOG via SOAP -->
  <soap:invoke endpoint="http://localhost/niku/xog" var="xogresponse">
    <soap:message>
      <soapenv:Envelope>
        <soapenv:Header>
          <Auth>
            <Username>admin</Username>
            <Password>niku2000</Password>
          </Auth>
        </soapenv:Header>
        <soapenv:Body>
          <gel:include select="$xoginput"/>
        </soapenv:Body>
      </soapenv:Envelope>
    </soap:message>
  </soap:invoke>

  <!-- Extract records and write tab-delimited file -->
  <gel:set select="$xogresponse/soapenv:Envelope/soapenv:Body/nikuq:QueryResult/nikuq:Records"
           var="records"/>
  <f:writeFile fileName="projectData.txt" delimiter="&#x9;" embedded="true">
    <gel:forEach select="$records//nikuq:Record" var="xog_record">
      <f:line>
        <gel:forEach select="$xog_record/*" var="xog_data">
          <gel:set var="xog_data" select="$xog_data/text()" asString="true"/>
          <f:column value="${xog_data}"/>
        </gel:forEach>
      </f:line>
    </gel:forEach>
  </f:writeFile>
</gel:script>
```

## WSDL for Queries

The WSDL for queries is **not** prepackaged. A WSDL for a query only exists if you created an NSQL query in Studio. Access query WSDLs at:
```
http://<servername:port>/niku/wsdl
```
Click the **Query** category link.

## Related Notes

- [[InvokeAction API]] — Administrative process invocation
- [[Object API]] — Standard object read/write
- [[WSDL]] — Full WSDL reference
- [[GEL Scripting]] — GEL integration with Query API
- [[Governor Node Limit]] — Node limits apply differently to queries
