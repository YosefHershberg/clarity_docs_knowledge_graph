---
title: CBK_ERROR_ARGUMENTS
type: db-table
table: CBK_ERROR_ARGUMENTS
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
fk_targets:
  - CBK_ERRORS
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
---

# CBK_ERROR_ARGUMENTS

> [!info] Description
> This table stores the arguments of an error, such as the context required for the error message.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `ERROR_ID` | NUMERIC | NOT NULL | This refers to [[CBK_ERRORS]].ID and pertains to the error. |
| `ARG_INDEX` | NUMERIC | NOT NULL | The index of the argument value in the error message. |
| `ARG_VALUE` | NVARCHAR | NOT NULL | The value of the argument in the error message. |
| `FORMAT_TYPE_CODE` | NVARCHAR | NULL | The type used for formatting the argument value. Values are: - NUMBER - DATE - STRING |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date/time this record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ERROR_ID` | [[CBK_ERRORS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[DEPARTMENTS]], [[ENTITY]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRTYPECODE]], [[TRANSCLASS]]
