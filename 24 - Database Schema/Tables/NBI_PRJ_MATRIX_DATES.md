---
title: NBI_PRJ_MATRIX_DATES
type: db-table
table: NBI_PRJ_MATRIX_DATES
columns: 6
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - SRM_PROJECTS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_PRJ_MATRIX_DATES

> [!info] Description
> This table stores the project, resources working on the project, and contiguous date ranges covering the resource's involvement with the project. This data is used to populate NBI_PROJ_RES_RATES_AND_COSTS table with the rate and cost information for all resources and all projects they are assigned to.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to [[SRM_PROJECTS]].ID. |
| `RESOURCE_ID` | NUMERIC | NULL | This refers to [[SRM_RESOURCES]].ID. |
| `RESOURCE_TYPE` | INTEGER | NULL | The resource type. Values are one of the following: - 0 = Labor - 1 = Equipment - 2 = Material - 3 = Expense |
| `FROM_DATE` | DATE | NULL | The start date of the range. |
| `TO_DATE` | DATE | NULL | The end date of the range. |
| `EXCHANGE_RATE_TYPE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PROJECT_ID` | [[SRM_PROJECTS]].`ID` | |
| `RESOURCE_ID` | [[SRM_RESOURCES]].`ID` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
