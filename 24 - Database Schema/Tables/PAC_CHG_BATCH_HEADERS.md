---
title: PAC_CHG_BATCH_HEADERS
type: db-table
table: PAC_CHG_BATCH_HEADERS
columns: 14
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
  - Financial Administration
fk_targets:
  - BIZ_COM_PERIODS
  - CMN_SEC_USERS
fk_sources:
  - CBK_ERRORS
  - PAC_CHG_EXCEPTIONS
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
  - erd/financial-administration
---

# PAC_CHG_BATCH_HEADERS

> [!info] Description
> This table stores batch posting information.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `GL_PERIOD` | DATE | NOT NULL | This refers to [[BIZ_COM_PERIODS]].ID. |
| `TRANSACTIONS` | NUMERIC | NULL | The number of transactions processed for posting to the general ledger (GL) system. |
| `TOTAL_AMOUNT` | NUMERIC | NULL | The total amount processed for posting to the GL system. |
| `STATUS` | INTEGER | NOT NULL | The status is always set to 1. |
| `XOG_EXPORTED` | NUMERIC | NOT NULL | Indicates if the row was exported to XOG. Values are: - 0 = Not exported - 1 = Exported |
| `XOG_EXPORTED_DATE` | DATE | NULL | The date when it was exported to XOG. |
| `SYSTEM_POSTED` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `GL_BATCH_ID` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `GL_POSTED_DATE` | DATE | NULL | This column is deprecated and should no longer be used. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `GL_PERIOD` | [[BIZ_COM_PERIODS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_ERRORS]] | `BATCH_ID` | `ID` |
| [[PAC_CHG_EXCEPTIONS]] | `BATCH_ID` | `ID` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PROJCLASS]], [[PRTYPECODE]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]
