---
title: CBK_ERRORS
type: db-table
table: CBK_ERRORS
columns: 12
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
fk_targets:
  - CBK_GL_ALLOCATION
  - CMN_SCH_JOB_RUNS
  - CMN_SEC_USERS
  - PAC_CHG_BATCH_HEADERS
  - PPA_WIP
fk_sources:
  - CBK_ERROR_ARGUMENTS
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
---

# CBK_ERRORS

> [!info] Description
> This table stores the errors from a single chargeback run.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `BATCH_ID` | NUMERIC | NULL | This refers to [[PAC_CHG_BATCH_HEADERS]].ID and indicates which batch run produced this message. |
| `JOB_RUN_ID` | NUMERIC | NULL | This refers to [[CMN_SCH_JOB_RUNS]].ID and indicates which job run produced this message. |
| `TRANSNO` | NUMERIC | NULL | This refers to [[PPA_WIP]].TRANSNO and indicates which transaction in PPA_WIP resulted in this message. |
| `TYPE_CODE` | NVARCHAR | NOT NULL | This column indicates the specific rule-type to which the message is related. Values are: - STANDARD - INVESTMENT |
| `MESSAGE_CODE` | NVARCHAR | NOT NULL | The message code as in resource bundles. |
| `MESSAGE_TYPE` | NUMERIC | NULL | This column indicates the message type. Values are: - ERROR - MESSAGE |
| `GL_ALLOCATION_ID` | NUMERIC | NULL | This refers to CBK_GL_ALLOCATION.id. The message is specific to the allocation rule referenced here. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `BATCH_ID` | [[PAC_CHG_BATCH_HEADERS]].`ID` | |
| `JOB_RUN_ID` | [[CMN_SCH_JOB_RUNS]].`ID` | |
| `TRANSNO` | [[PPA_WIP]].`TRANSNO` | |
| `GL_ALLOCATION_ID` | [[CBK_GL_ALLOCATION]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_ERROR_ARGUMENTS]] | `ERROR_ID` | `ID` |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[DEPARTMENTS]], [[ENTITY]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRTYPECODE]], [[TRANSCLASS]]
