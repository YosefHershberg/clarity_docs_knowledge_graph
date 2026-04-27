---
title: PAC_PURGE_FINANCIAL_LIST
type: db-table
table: PAC_PURGE_FINANCIAL_LIST
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Financial Configuration
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/financial-configuration
---

# PAC_PURGE_FINANCIAL_LIST

> [!info] Description
> This table stores purged financial information.

## Subject areas (ERDs)
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the unique project name that needs to be purged. |
| `STATUS_CODE` | NVARCHAR | NULL | The purged status code. Values are: - F = Failed - S = Success |
| `NUMBER_OF_TRANS_PURGED` | NUMERIC | NULL | The number of transactions purged for this project. |
| `STATUS` | NVARCHAR | NULL | The placeholder for any fatal database error. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CLNTCLASS]], [[CLNTRESPONS]], [[CLNTSUPP]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PROJCNTRTS]], [[PROJREVISION]], [[PROJSTAFF]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]
