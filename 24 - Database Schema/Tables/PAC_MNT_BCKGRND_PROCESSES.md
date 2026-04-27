---
title: PAC_MNT_BCKGRND_PROCESSES
type: db-table
table: PAC_MNT_BCKGRND_PROCESSES
columns: 10
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

# PAC_MNT_BCKGRND_PROCESSES

> [!info] Description
> This table stores background processes of scheduled batch billing.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NULL | This column refers to the unique identifier for a row in this table. |
| `METHOD_NAME` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `STORED_PROCEDURE_NAME` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `FIELD_NAMES` | NVARCHAR | NULL | The string of the column names. |
| `FIELD_VALUES` | NVARCHAR | NULL | The string of column values separated by the delimiter. |
| `DELIMITER` | NVARCHAR | NULL | The delimiter used to separate column values. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
