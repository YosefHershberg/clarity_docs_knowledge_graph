---
title: FIN_ERROR_ARGUMENTS
type: db-table
table: FIN_ERROR_ARGUMENTS
columns: 9
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
---

# FIN_ERROR_ARGUMENTS

> [!info] Description
> This table stores the replaceable arguments for errors that occur during the processing of incident financials. The parent table is the FIN_ERRORS table which holds the actual error code and details.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `ERROR_ID` | NUMERIC | NOT NULL | This ID points to the FIN_ERRORS table. |
| `ARG_INDEX` | NUMERIC | NOT NULL | The position of the argument (e.g., the n the argument to be replaced). |
| `ARG_VALUE` | NVARCHAR | NOT NULL | The actual value of the argument to replace. |
| `FORMAT_TYPE_CODE` | NVARCHAR | NULL | The formatting code indicates whether the argument is of type string, date, number, and so on. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | The resource that created this row. This refers to [[CMN_SEC_USERS]].ID. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
