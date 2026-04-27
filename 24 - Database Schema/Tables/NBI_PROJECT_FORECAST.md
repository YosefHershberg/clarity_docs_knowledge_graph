---
title: NBI_PROJECT_FORECAST
type: db-table
table: NBI_PROJECT_FORECAST
columns: 19
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - SRM_PROJECTS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_PROJECT_FORECAST

> [!info] Description
> This table stores budgeted cost and benefit financial planning information for each project.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to [[SRM_PROJECTS]].ID. |
| `PLAN_TYPE` | NUMERIC | NOT NULL | The plan type. |
| `BUDGET_LABOR_UNITS` | NUMERIC | NULL | The labor budget units. |
| `BUDGET_EQUIP_UNITS` | NUMERIC | NULL | The equipment budget units. |
| `BUDGET_EXPENSE_UNITS` | NUMERIC | NULL | The expense budget units. |
| `BUDGET_MATL_UNITS` | NUMERIC | NULL | The material budget units. |
| `REV_BUDGET_LABOR` | NUMERIC | NULL | The budgeted labor revenue. |
| `REV_BUDGET_EQUIP` | NUMERIC | NULL | The budgeted equipment revenue. |
| `REV_BUDGET_EXPENSE` | NUMERIC | NULL | The budgeted expense revenue. |
| `REV_BUDGET_MATL` | NUMERIC | NULL | The budgeted material revenue. |
| `REV_BUDGET_TOTAL` | NUMERIC | NULL | The total budgeted revenue. |
| `COST_BUDGET_LABOR` | NUMERIC | NULL | The budgeted labor cost. |
| `COST_BUDGET_EQUIP` | NUMERIC | NULL | The budgeted equipment cost. |
| `COST_BUDGET_EXPENSE` | NUMERIC | NULL | The budgeted expense cost. |
| `COST_BUDGET_MATL` | NUMERIC | NULL | The budgeted material cost. |
| `COST_BUDGET_TOTAL` | NUMERIC | NULL | The total budgeted cost. |
| `BUDGET_REV_NUMBER` | NUMERIC | NULL | The revenue budget number. |
| `DETAIL_TYPE` | NUMERIC | NULL | This indicates the plan by 1/group by value of a plan. This refers to the lookup id of the lookup type 'FIN_PLAN_BY_TYPE'. |
| `PLAN_BY_2` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PROJECT_ID` | [[SRM_PROJECTS]].`ID` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
