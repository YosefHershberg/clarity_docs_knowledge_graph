---
title: PAC_CHG_ALLOCATIONS
type: db-table
table: PAC_CHG_ALLOCATIONS
columns: 7
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - PAC_CHG_ALLOCS_DATES
  - PAC_CHG_TRANSACTIONS
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_ALLOCATIONS

> [!info] Description
> This table is deprecated and should no longer be used.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `ALLOCATION_TYPE` | NVARCHAR | NOT NULL | The allocation type. Value are: - PROJECT_LEVEL = Project level allocation - TASK_LEVEL = Task level allocation |
| `OBJECT_ID` | NUMERIC | NOT NULL | Indicates if the object ID is the project ID or the charge code ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PAC_CHG_ALLOCS_DATES]] | `ALLOCATION_ID` | `ID` |
| [[PAC_CHG_TRANSACTIONS]] | `SOURCE_ID` | `ID` |
