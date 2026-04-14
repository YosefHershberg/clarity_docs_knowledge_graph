---
title: XOG Governor Node Limit
tags:
  - dev
  - admin
  - reference
canonical: true
audience: dev
domain: development
---
# XOG Governor Node Limit

Source: Clarity 16.4.1 PDF, p4279–4285

Related: [[_MOC Development]] | [[Object API]] | [[Client and SOAP]]

## Overview

When importing or exporting many instances using the XOG, you can encounter out-of-memory or timeout exceptions. The **Maximum XML Node Limit** setting helps handle these issues.

- **Default node limit:** 150,000 nodes
- A "node" = the sum of all XML elements plus all their attributes

> **Tip:** Do not confuse this node limit with the 50,000-row NSQL limit in list/grid portlets.

## What Is a Node?

Example: this single `<Project>` element with 21 attributes = **22 nodes** (1 element + 21 attributes):

```xml
<Project active="true" allowAssignedTasksOnly="0" approved="true"
  approvedForBilling="1" assgnPool="0" billingCurrencyCode="USD"
  billingType="S" calculateFinancialMetrics="true" costType="OPERATING"
  investmentDefinedReinvestmentRate="0" investmentDefinedTotalCostOfCapital="0"
  laborExchageRateType="AVERAGE" lastUpdatedBy="admin"
  projectID="pitcProject001" setBudgetValuesEqualToPlannedValues="true"
  start="2013-08-01T08:00:00" status="1"
  syncInvestmentAndBudgetDates="true" template="false"
  trackMode="2" useSystemDefinedReinvestmentRate="true"
  useSystemDefinedTotalCostOfCapital="true">
```

## XOG Read (Pagination)

For a XOG read request, the server processes instances until the node limit is reached, then sends back the response in chunks using **pagination**.

### Pagination Flow

1. Server processes instances until limit is hit
2. Response includes `<Skip value="N"/>` indicating how many were processed
3. Also includes `<XOGTotalFilteredRecords value="N"/>` for total count
4. Send next read request with `<args name="skip" value="N"/>` in the header

**Example output showing pagination:**
```xml
<XOGOutput>
  <Object type="project" />
  <Status state="SUCCESS" />
  <Skip value="24"/>
  <XOGTotalFilteredRecords value="267"/>
  <Statistics failureRecords="0" insertedRecords="0"
              totalNumberOfRecords="24" updatedRecords="0"/>
</XOGOutput>
```

**Next read request with skip:**
```xml
<Header version="6.0.11" action="read" objectType="project" externalSource="NIKU">
  <args name="skip" value="24"/>
</Header>
```

> **Note:** If `<XOGOutput>` does NOT contain the skip argument, the server has processed all requested instances.

### Pagination by Client Type

| Client | Pagination Handling |
|--------|-------------------|
| **XOG Client** | Automatic — client handles pagination internally; output contains all instances |
| **WSDL / GEL** | Manual — add `<args name="skip" value="n"/>` to each subsequent request |

### Error: Node Limit Exceeded on Read

```
XOG-9059: The system cannot export this instance with the current configuration.
Increase the 'Maximum XML Nodes' value in CSA and try again.
```

All other instances in the request are still processed successfully.

### Options When Limit is Exceeded

- Change the Maximum XML Nodes limit in CSA
- Use filters to reduce the amount of data requested

## XOG Write (Batching)

When importing instances, the server processes **20 instances per iteration**.

- If the node limit is reached before 20 instances are loaded, only the loaded instances are processed in the current iteration
- Remaining instances are automatically processed in the next iteration
- SOAP and GEL: no change in XOG write process
- If server goes down during processing, instances in the current iteration may not be saved; all earlier iterations are preserved

### Error: Node Limit Exceeded on Write

```
XOG-9060: The system cannot import this instance with the current configuration.
Increase the 'Maximum XML Nodes' value in the CSA and try again.
```

For XOG categories without the Governor Limit (see below), if the entire file exceeds the limit:
```
XOG-9061: The system cannot import the contents of the file with the current
configuration. Either increase the 'Maximum XML Nodes' value in the CSA or
reduce the file size and try again.
```

## XOG Governor Limit Benchmarks

Recommended node limits based on JVM heap space allocation for XOG processing:

| JVM Heap (MB) | Custom Objects | Cost Plans | Users | Projects | Recommended Limit |
|---------------|---------------|------------|-------|----------|-------------------|
| 192 | 4,800 | 0 | 36,000 | 22,000 | 4,800 |
| 256 | 42,000 | 56,000 | 190,000 | 128,000 | 42,000 |
| 512 | 160,000 | 247,000 | 700,000 | 780,000 | 160,000 |
| 1024 | 375,000 | 609,600 | 1,360,000 | 2,000,000 | 375,000 |
| 1536 | 620,000 | 960,000 | 0 | 0 | 620,000 |
| 2048 | 860,000 | 1,300,000 | 0 | 0 | 860,000 |

**Example:** 2 GB JVM, allocating 10% for XOG = 204 MB → use nearest value (192) → recommended limit = **4,800**.

## Objects NOT Subject to Governor Limit

The node limit is NOT enabled for these XOG categories (out-of-memory risk on large exports):

- Company Class
- Content Pack
- Documents
- Forms
- Notifications
- Portfolios
- Process Notifications
- Resource Class
- Timesheets
- Transaction Class
- UI Theme
- Vendor
- WIP Class

## Calculate the Node Limit

Use the `xog -analyze` command to count nodes in an existing XML file:

```
xog -analyze C:\TestFiles\Test_status.xml
```

Output:
```
=======File Analysis=========
File : C:\TestFiles\Test_status.xml
Node Count: 1491934
```

## Configure Logging for XOG Memory Monitoring

Add to `logger.xml`:
```xml
<category additivity="false" name="xog.usage.memory">
  <priority value="debug"/>
  <appender-ref ref="XOGMEMORY"/>
</category>
<appender class="org.apache.log4j.RollingFileAppender" name="XOGMEMORY">
  <param name="File" value="../logs/xog-usage-memory.xml"/>
  <param name="Append" value="true"/>
  <param name="MaxFileSize" value="5MB"/>
  <param name="MaxBackupIndex" value="3"/>
</appender>
```

The log will show XML node counts and memory usage at each pagination step.

## Additional Notes

- Output files from pagination are not indented — use a third-party XML formatter
- Default session timeout is 1 hour; if XOG processing exceeds this:
  ```
  XOG-9062: The requested data failed to export because the processing time
  exceeded the session timeout interval.
  ```

## Related Notes

- [[Object API]] — Object read/write
- [[Client and SOAP]] — XOG client and SOAP interface
- [[Query API]] — Query API (node limits work differently)
- [[GEL Scripting]] — GEL pagination example in this note
