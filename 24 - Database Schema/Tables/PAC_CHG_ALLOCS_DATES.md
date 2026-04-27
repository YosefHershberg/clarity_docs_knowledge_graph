---
title: PAC_CHG_ALLOCS_DATES
type: db-table
table: PAC_CHG_ALLOCS_DATES
columns: 8
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - PAC_CHG_ALLOCATIONS
fk_sources:
  - PAC_CHG_ALLOCS_DETAILS
  - PAC_CHG_TRANSACTIONS
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_ALLOCS_DATES

> [!info] Description
> This table is deprecated and should no longer be used.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `ALLOCATION_ID` | NUMERIC | NOT NULL | This refers to [[PAC_CHG_ALLOCATIONS]].ID. |
| `FROM_DATE` | DATE | NOT NULL | The start date in the range. |
| `TO_DATE` | DATE | NULL | The end date in the range. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ALLOCATION_ID` | [[PAC_CHG_ALLOCATIONS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PAC_CHG_ALLOCS_DETAILS]] | `ALLOCATION_DATES_ID` | `ID` |
| [[PAC_CHG_TRANSACTIONS]] | `DATES_ID` | `ID` |
