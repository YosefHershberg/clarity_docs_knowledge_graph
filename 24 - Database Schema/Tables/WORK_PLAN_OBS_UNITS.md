---
title: WORK_PLAN_OBS_UNITS
type: db-table
table: WORK_PLAN_OBS_UNITS
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# WORK_PLAN_OBS_UNITS

> [!info] Description
> This table contains information about workforce plan and obs unit mapping

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `OBS_UNIT_ID` | NUMERIC | NOT NULL | OBS Unit linked to plan |
| `PLAN_ID` | NUMERIC | NOT NULL | Foreign key to relate with plan |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `IS_LEAF` | NUMERIC | NOT NULL | This column defines if the unit for the plan is primary or not. |
| `UNIT_NAME` | NVARCHAR | NULL | This column refers to the Name of the OBS Unit |
