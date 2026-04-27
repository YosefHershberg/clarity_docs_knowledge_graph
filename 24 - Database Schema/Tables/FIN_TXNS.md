---
title: FIN_TXNS
type: db-table
table: FIN_TXNS
columns: 17
audience: dev
domain: development
canonical: true
erds:
  - ITIL
  - Transactions
fk_targets:
  - CMN_SEC_USERS
  - PAC_MNT_RESOURCES
fk_sources:
  - FIN_ERRORS
tags:
  - dev
  - schema
  - table
  - erd/itil
  - erd/transactions
---

# FIN_TXNS

> [!info] Description
> This table stores incident related effort entries from both XOG and timesheets. Processed entries populate the FIN_POSTED_TXNS table.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 09 - Finance]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - ITIL ERD]]
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `PK_ID` | NUMERIC | NOT NULL | The ID in the source table for the financial transaction. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | The table name of the source for the transaction. |
| `OBJECT_TYPE` | NVARCHAR | NULL | The type of investment object. Currently, values are: - 0 = ASSET - 1 = APPLICATION - 2 = PRODUCT - 3 = OTHER INVESTMENT |
| `OBJECT_ID` | NUMERIC | NULL | The investment object ID for the transaction that has occurred. |
| `QUANTITY` | NUMERIC | NULL | The quantity. |
| `QUANTITY_UNIT` | NVARCHAR | NULL | The unit of measure for the quantity. Currently, the value 0 means HOURS. |
| `RESOURCE_ID` | NUMERIC | NULL | The resource performing the transaction. This refers to [[PAC_MNT_RESOURCES]].ID. |
| `TRANSACTION_TYPE` | NVARCHAR | NOT NULL | The transaction type. Values are: - 0 = LABOR - 1 = MATERIAL - 2 = EXPENSE - 3 = EQUIPMENT |
| `TIMEENTRY_ID` | NUMERIC | NULL | This refers to the PRTIMEENTRY table if the transaction is a result of a timesheet entry. |
| `IS_PROCESSED` | INTEGER | NOT NULL | This column specifies if this row has been processed by the financial job. Values are: - 0 = Unposted - 1 = Posted |
| `TRANSACTION_DATE` | DATE | NOT NULL | The date of the transaction. |
| `SOURCE_MODULE` | INTEGER | NOT NULL | The source module as specified in the XOG. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RESOURCE_ID` | [[PAC_MNT_RESOURCES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[FIN_ERRORS]] | `PK_ID` | `TRANSNO` |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTASK]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]
