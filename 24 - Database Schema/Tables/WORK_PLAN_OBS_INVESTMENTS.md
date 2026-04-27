---
title: WORK_PLAN_OBS_INVESTMENTS
type: db-table
table: WORK_PLAN_OBS_INVESTMENTS
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# WORK_PLAN_OBS_INVESTMENTS

> [!info] Description
> This table contains information about workforce plan and its investment mapping

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `PLAN_OBS_UNIT_ID` | NUMERIC | NOT NULL | Plan OBS Unit mapping identifier |
| `INV_ID` | NUMERIC | NOT NULL | Investment object synced to plan |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
