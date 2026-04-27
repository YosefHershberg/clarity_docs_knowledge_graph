---
title: WORK_PLAN_RESOURCES
type: db-table
table: WORK_PLAN_RESOURCES
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# WORK_PLAN_RESOURCES

> [!info] Description
> This table contains information about workforce resource mapping

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `RESOURCE_ID` | NUMERIC | NOT NULL | Resource linked to the plan |
| `PLAN_ID` | NUMERIC | NOT NULL | Foreign key to relate with plan |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `VERSION_ID` | NUMERIC | NOT NULL | This column refers to the version id of the plan |
