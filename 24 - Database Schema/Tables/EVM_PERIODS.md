---
title: EVM_PERIODS
type: db-table
table: EVM_PERIODS
columns: 8
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

# EVM_PERIODS

> [!info] Description
> This table stores the periods (start/finish) for earned value historical snapshots. Periods are associated with a period definition (period_def_id).

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column defines the primary key. |
| `START_DATE` | DATE | NOT NULL | Defines the starting date of this reporting period. |
| `END_DATE` | DATE | NOT NULL | This column defines the ending date of this reporting period. |
| `PERIOD_DEF_ID` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | Defines the name of the resource ([[CMN_SEC_USERS]].ID) that created this column. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column indicates the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) who last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
