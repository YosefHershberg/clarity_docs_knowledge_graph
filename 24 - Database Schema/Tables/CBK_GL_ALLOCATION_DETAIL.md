---
title: CBK_GL_ALLOCATION_DETAIL
type: db-table
table: CBK_GL_ALLOCATION_DETAIL
columns: 13
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
fk_targets:
  - CBK_GL_ACCOUNT
  - CBK_GL_ALLOCATION
  - CMN_SEC_USERS
  - DEPARTMENTS
fk_sources:
  - CBK_GL_TXNS
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
---

# CBK_GL_ALLOCATION_DETAIL

> [!info] Description
> This table stores the time-varying distribution percentages to various GL accounts and departments.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `GL_ACCOUNT_ID` | NUMERIC | NULL | This refers to [[CBK_GL_ACCOUNT]].ID and indicates which natural account to charge or credit. |
| `DEPARTMENT_ID` | NUMERIC | NOT NULL | This refers to [[DEPARTMENTS]].ID and indicates which department to charge or credit. |
| `PERCENTAGE` | BINARY | NULL | The percentage of cost that needs to be charged or credited to a department. |
| `FLAT_AMOUNT` | NUMERIC | NULL | This column allows future functionality related to flat-amount chargebacks to be developed. |
| `WEIGHTAGE` | NUMERIC | NULL | This column is used for developing future functionality related to basis of allocation. |
| `GL_ALLOCATION_ID` | NUMERIC | NOT NULL | This refers to [[CBK_GL_ALLOCATION]].ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time that this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this record. |
| `ODF_SS_PERCENTAGE` | NUMERIC | NULL |  |
| `OVERHEAD_ENTITY_ID` | NUMERIC | NULL | This column refers to the internal id of 'ENTITY' being used in overhead rule detail |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `GL_ACCOUNT_ID` | [[CBK_GL_ACCOUNT]].`ID` | |
| `DEPARTMENT_ID` | [[DEPARTMENTS]].`ID` | |
| `GL_ALLOCATION_ID` | [[CBK_GL_ALLOCATION]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_TXNS]] | `ALLOCATION_DTL_ID` | `ID` |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[DEPARTMENTS]], [[ENTITY]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRTYPECODE]], [[TRANSCLASS]]
