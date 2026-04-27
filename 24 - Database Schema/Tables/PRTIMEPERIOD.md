---
title: PRTIMEPERIOD
type: db-table
table: PRTIMEPERIOD
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Transactions
fk_sources:
  - PRTIMESHEET
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# PRTIMEPERIOD

> [!info] Description
> This table stores data on time periods.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 04 - Time Timesheets and Slicing]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID cannot be confused with a resource in Repository B that has the same prName, prExternalID, and prID. Note: This value is no longer universally unique, but may be required by client applications, such as Open Workbench. Avoid using inCA Clarity PPM. |
| `PRID` | NUMERIC | NULL | A persistent, unique identifier for each row in a table. System-entered when a new row is created. It is referenced by other tables using columns to refer to a specific row. For example, the prTypeCodeID column in the PRRESOURCE table refers to a type code's prID column. |
| `PRSTART` | DATE | NULL | The actual start date for a time period. |
| `PRFINISH` | DATE | NULL | The actual finish date for a time period. |
| `PRISOPEN` | NUMERIC | NOT NULL | Indicates whether actuals can be entered for a time period. Values are: - 0 = Actuals can be entered - 1 = Actuals cannot be entered |
| `PURGE_FLAG` | NUMERIC | NULL | Indicates whether the time period has been marked for deletion. If marked for deletion, the delete projects background process will delete the time period. |
| `PRMODBY` | NVARCHAR | NULL | System-entered. The name of the logged-in user when that user modifies a row, such as when a user modifies a timesheet or note. |
| `PRMODTIME` | DATE | NULL | System-entered when a user modifies a row. It is the date and time the last modification occurred. |
| `PRPOSTEDBY` | NVARCHAR | NULL | System-entered. The name of the logged in user, when that user posts a time period. |
| `PRPOSTEDTIME` | DATE | NULL |  |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PRTIMESHEET]] | `PRTIMEPERIODID` | `PRID` |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMESHEET]], [[PRTYPECODE]]
