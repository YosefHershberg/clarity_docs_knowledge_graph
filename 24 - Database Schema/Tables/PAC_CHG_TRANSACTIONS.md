---
title: PAC_CHG_TRANSACTIONS
type: db-table
table: PAC_CHG_TRANSACTIONS
columns: 21
audience: dev
domain: development
canonical: true
erds:
  - Financial Administration
fk_targets:
  - BIZ_COM_PERIODS
  - CMN_SEC_USERS
  - ENTITY
  - PAC_CHG_ALLOCATIONS
  - PAC_CHG_ALLOCS_DATES
  - PAC_CHG_GL_ACCOUNTS
  - PAC_CHG_RESOURCE_CREDITS
  - PPA_POSTINGBATCH
  - PPA_WIP
fk_sources:
  - PAC_CHG_EXCEPTIONS
  - PAC_CHG_TRANS_VALUES
tags:
  - dev
  - schema
  - table
  - erd/financial-administration
---

# PAC_CHG_TRANSACTIONS

> [!info] Description
> This table is deprecated and should no longer be used.

## Subject areas (ERDs)
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `BATCH_ID` | NUMERIC | NOT NULL | This refers to [[PPA_POSTINGBATCH]].BATCHNO. |
| `CHARGEBACK_TYPE` | CHAR | NOT NULL | The chargeback type. Values are: - C = Resource credit - D = Debit (a charge to the funding entity) - R = Explicit Reversal - W = Work in progress (WIP) adjustment reversal |
| `SOURCE_ID` | NUMERIC | NULL | This refers to [[PAC_CHG_ALLOCATIONS]].ID if the transaction is a debit, or to [[PAC_CHG_RESOURCE_CREDITS]].ID if the transaction is a credit. |
| `DATES_ID` | NUMERIC | NULL | The dates ID. This refers to PAC_CHG_RESCREDIT_DATE. ID if the transaction is a credit or to [[PAC_CHG_ALLOCS_DATES]].ID if the transaction is a debit. |
| `TRANS_SOURCE` | CHAR | NOT NULL | The transaction source. Values are: - W = WIP - A = WIP Adjustment - R = Reversal |
| `TRANSNO` | NUMERIC | NOT NULL | The transaction number. This refers to [[PPA_WIP]].TRANSNO. |
| `GL_PERIOD` | DATE | NOT NULL | The ID for the general ledger (GL) period this transaction is posted to. This refers to [[BIZ_COM_PERIODS]].ID. |
| `ENTITY_ID` | NUMERIC | NOT NULL | This refers to [[ENTITY]].ID. |
| `ACCOUNT_CODE_ID` | NUMERIC | NOT NULL | This refers to [[PAC_CHG_GL_ACCOUNTS]].ID. |
| `QUANTITY` | NUMERIC | NOT NULL | The original quantity of the transaction. |
| `STATUS` | INTEGER | NOT NULL | The status of the transaction. Values are: - 0 = Approved - 1 = Awaiting Approval - 2 = Reversed |
| `GL_BATCH_ID` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `GL_POSTED_DATE` | DATE | NULL | This column is deprecated and should no longer be used. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `XOG_EXPORTED` | NUMERIC | NOT NULL | Indicates if the transaction was exported via XOG. Values are: - 0 = Not exported - 1 = Exported |
| `XOG_EXPORTED_DATE` | DATE | NULL | The date row was exported by XOG. |
| `SYSTEM_POSTED` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `BATCH_ID` | [[PPA_POSTINGBATCH]].`BATCHNO` | |
| `SOURCE_ID` | [[PAC_CHG_ALLOCATIONS]].`ID` | |
| `SOURCE_ID` | [[PAC_CHG_RESOURCE_CREDITS]].`ID` | |
| `DATES_ID` | [[PAC_CHG_ALLOCS_DATES]].`ID` | |
| `TRANSNO` | [[PPA_WIP]].`TRANSNO` | |
| `GL_PERIOD` | [[BIZ_COM_PERIODS]].`ID` | |
| `ENTITY_ID` | [[ENTITY]].`ID` | |
| `ACCOUNT_CODE_ID` | [[PAC_CHG_GL_ACCOUNTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PAC_CHG_EXCEPTIONS]] | `TRANSNO` | `TRANSACTION_NO` |
| [[PAC_CHG_TRANS_VALUES]] | `TRANSACTION_ID` | `ID` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PROJCLASS]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]
