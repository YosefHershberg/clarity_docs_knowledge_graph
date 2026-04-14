---
title: XOG Services - InvokeAction API
tags:
  - dev
  - reference
canonical: true
audience: dev
domain: development
---
# XOG Services: InvokeAction API

Source: Clarity 16.4.1 PDF, p4274

Related: [[_MOC Development]] | [[Object API]] | [[GEL Scripting]] | [[WSDL]]

## Overview

The InvokeAction API is a general-purpose XOG service for administrative actions that fall outside the categories of data import and export. Unlike the Object API, no corresponding schema (XSD) exists for this API, so there is no XSD validation.

## InvokeAction API Root Element

**Process** — This action schedules integration processes or initiates them in real time.

The `Process` element includes the following root elements:

| Element | Required | Description |
|---------|----------|-------------|
| `code` | Required | Identifies the process ID. Type: String |
| `request` | Optional | Identifies the root element of the process input document. Type: Any |

## How It Works

An action can be invoked by specifying the process ID. A process may or may not include a `request` block.

## Example: Process Request

In this example, `remedy_writeIncident` is the process ID used to invoke the process action:

```xml
<Process xmlns="http://www.niku.com/xog/InvokeAction">
  <code>remedy_writeIncident</code>
  <request>
    <incidents>
      <incident
        assignedTo="jstewart"
        categoryCode="telcom"
        estimatedEffort="240"
        estimatedEffortUnit="MINUTES"
        externalId="tc421"
        impactCode="High"
        incidentCode="RMD-TC421"
        priorityCode="Medium"
        reportedBy="rcordry"
        resolutionDate="2005-03-03T12:30:00"
        sourceCode="REMEDY"
        startDate="2005-03-01T08:00:00"
        statusCode="Closed"
        subject="Phone system down"
        typeCode="incident"
        urgencyCode="High">
        <description>Tried making call, no dial tone.</description>
        <notes/>
        <efforts enterOnce="true">
          <effort
            quantity="3.5"
            quantityUnit="HOURS"
            resourceCode="jstewart"
            transactionDate="2005-03-03"/>
        </efforts>
        <contacts/>
      </incident>
    </incidents>
  </request>
</Process>
```

## Access the WSDL

The InvokeAction WSDL is available at:
```
http://<servername:port>/niku/wsdl
```
Click the **InvokeAction** category link to see the Process service.

## Related Notes

- [[Object API]] — Standard data import/export objects
- [[Query API]] — NSQL-based query execution
- [[WSDL]] — Full WSDL reference
- [[GEL Scripting]] — GEL scripts can invoke the InvokeAction API via SOAP
