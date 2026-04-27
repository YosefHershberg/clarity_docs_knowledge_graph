---
title: WORK_PLAN_OBS_STAFFS
type: db-table
table: WORK_PLAN_OBS_STAFFS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# WORK_PLAN_OBS_STAFFS

> [!info] Description
> This table contains information about workforce plan and its staff mapping

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `PLAN_OBS_UNIT_ID` | NUMERIC | NOT NULL | Plan OBS Unit mapping id required for cascade deletion |
| `PLAN_OBS_INV_ID` | NUMERIC | NOT NULL | Plan OBS Investment mapping id |
| `STAFF_ID` | NUMERIC | NOT NULL | Staff or Resource synced to plan by obs investment |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
