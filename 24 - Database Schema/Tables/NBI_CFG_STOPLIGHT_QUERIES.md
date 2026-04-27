---
title: NBI_CFG_STOPLIGHT_QUERIES
type: db-table
table: NBI_CFG_STOPLIGHT_QUERIES
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Datamart
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_CFG_STOPLIGHT_QUERIES

> [!info] Description
> This table stores the stoplight definitions whose values are stored in NBI_PROJECT_CURRENT_FACTS.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `NBI_TABLE_NAME` | NVARCHAR | NOT NULL | The table name that this stoplight is tracked on. For example, NBI_PROJECT_CURRENT_FACTS. |
| `NBI_COLUMN_NAME` | NVARCHAR | NOT NULL | The column name in the table referenced by the NBI_TABLE_NAME column that this stoplight is tracked in. |
| `REDSQL` | NVARCHAR | NULL | The SQL statement used to calculate the red stoplight. |
| `YELLOWSQL` | NVARCHAR | NULL | The SQL statement used to calculate the yellow stoplight. |
| `DESCRIPTION` | NVARCHAR | NULL | The stoplight description. |
| `STOPLIGHT_NAME` | NVARCHAR | NULL | This column refers to the name of the stoplight. |
| `IS_SYSTEM` | NUMERIC | NULL |  |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
