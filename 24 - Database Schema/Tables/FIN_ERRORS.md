---
title: FIN_ERRORS
type: db-table
table: FIN_ERRORS
columns: 14
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - FIN_TXNS
  - PPA_WIP
  - SRM_PROJECTS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
---

# FIN_ERRORS

> [!info] Description
> This table stores the errors that occur during the processing of incident financials. This table also stores details of the job, error code, object and resource for which the error has occurred.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `ERROR_CODE` | NVARCHAR | NOT NULL | The internal error code of the error. |
| `JOB_RUN_ID` | NUMERIC | NULL | Reserved for internal use only. |
| `JOB_CODE` | NVARCHAR | NULL | The internal job code. |
| `PK_ID` | NUMERIC | NOT NULL | This refers to either [[FIN_TXNS]].TRANSNO or [[PPA_WIP]].TRANSNO. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | This refers to either the FIN_TXNS or the PPA_WIP table. |
| `RESOURCE_ID` | NUMERIC | NULL | This refers to the [[SRM_RESOURCES]].ID. |
| `OBJECT_ID` | NUMERIC | NULL | This refers to [[SRM_PROJECTS]].ID. |
| `IS_MARKED_RESOLVED` | INTEGER | NOT NULL | Indicates if the error is resolved or not. Values are: - 0 = No - 1 = Yes |
| `IS_SYSTEM` | INTEGER | NOT NULL | Indicates whether the error is a system error or an application error. Values are: - 0 = No - 1 = Yes |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | The resource that created this row. This refers to [[CMN_SEC_USERS]].ID. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PK_ID` | [[FIN_TXNS]].`TRANSNO` | |
| `PK_ID` | [[PPA_WIP]].`TRANSNO` | |
| `RESOURCE_ID` | [[SRM_RESOURCES]].`ID` | |
| `OBJECT_ID` | [[SRM_PROJECTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
