---
title: WORK_PLAN_RESOURCE_GROUPS
type: db-table
table: WORK_PLAN_RESOURCE_GROUPS
columns: 20
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# WORK_PLAN_RESOURCE_GROUPS

> [!info] Description
> This table contains information about workforce plan and categories mapping

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `PLAN_ID` | NUMERIC | NOT NULL | Foreign key to relate with plan |
| `CATEGORY_ID` | NVARCHAR | NOT NULL | ID or Code for the given lookup type |
| `CATEGORY_TYPE` | VARCHAR | NULL | Type of Resource Grouping for the given plan |
| `ADDITIONS` | NUMERIC | NULL | Number of resources to be added |
| `REDUCTIONS` | NUMERIC | NULL | Number of resources to be removed |
| `SOURCE` | NVARCHAR | NOT NULL | This column refer to the source of record |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `PREV_PLAN_TOTAL` | NUMERIC | NULL | Previous Plan Totals |
| `VERSION_ID` | NUMERIC | NOT NULL | Plan Version ID |
| `CATEGORY_TYPE_ID` | NUMERIC | NULL | This column refers to the configuration element id it mapped to |
| `RESOURCE_ACTUAL` | NUMERIC | NOT NULL | Actual for Plan Type Resource |
| `ALLOCATIONS_ACTUAL` | NUMERIC | NOT NULL | Allocations Actual for Plan Type Investment |
| `ASSIGNMENTS_ACTUAL` | NUMERIC | NOT NULL | Assignments Actual for Plan Type Investment |
| `PREV_ADDITIONS` | NUMERIC | NOT NULL | Columns refers to count of resources added before the current selected year's plan |
| `PREV_REDUCTIONS` | NUMERIC | NOT NULL | Columns refers to count of resources removed before the current selected year's plan |
