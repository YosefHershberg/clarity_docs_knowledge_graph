---
title: PAC_CHG_ALLOCS_DETAILS
type: db-table
table: PAC_CHG_ALLOCS_DETAILS
columns: 8
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - PAC_CHG_ALLOCS_DATES
  - PAC_CHG_GL_ACCOUNTS
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_ALLOCS_DETAILS

> [!info] Description
> This table is deprecated and should no longer be used.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `ALLOCATION_DATES_ID` | NUMERIC | NULL | This refers to [[PAC_CHG_ALLOCS_DATES]].ID. |
| `ACCOUNT_CODE_ID` | NUMERIC | NOT NULL | This refers to [[PAC_CHG_GL_ACCOUNTS]].ID. |
| `ALLOCATION_PERCENT` | NUMERIC | NOT NULL | The percentage allocation. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ALLOCATION_DATES_ID` | [[PAC_CHG_ALLOCS_DATES]].`ID` | |
| `ACCOUNT_CODE_ID` | [[PAC_CHG_GL_ACCOUNTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
