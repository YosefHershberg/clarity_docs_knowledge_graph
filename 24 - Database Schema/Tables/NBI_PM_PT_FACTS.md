---
title: NBI_PM_PT_FACTS
type: db-table
table: NBI_PM_PT_FACTS
columns: 60
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - NBI_DIM_CALENDAR_TIME
  - NBI_PROJECT_CURRENT_FACTS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_PM_PT_FACTS

> [!info] Description
> This table stores time-bucket information for project management (PM). This table stores one row for each project per week and month.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to [[NBI_PROJECT_CURRENT_FACTS]].PROJECT_ID. |
| `CALENDAR_TIME_KEY` | NVARCHAR | NOT NULL | This refers to [[NBI_DIM_CALENDAR_TIME]].TIME_KEY. |
| `IS_ACTIVE` | NUMERIC | NULL | Determines if this row is active. Values are: - 0 = Inactive - 1 = Active |
| `IS_APPROVED` | NUMERIC | NULL | Determines if the project is approved. Value are: - 1 = Approved - 0 = Not approved |
| `GOAL_SCORE` | NUMERIC | NULL | The goal score. |
| `PRIORITY` | NUMERIC | NULL | The priority. |
| `START_DATE` | DATE | NULL | The project start date. |
| `BASE_START_DATE` | DATE | NULL | The baseline start date. |
| `FINISH_DATE` | DATE | NULL | The finish date. |
| `BASE_FINISH_DATE` | DATE | NULL | The baseline finish date. |
| `START_VARIANCE` | NUMERIC | NULL | The start variance. |
| `FINISH_VARIANCE` | NUMERIC | NULL | The finish variance. |
| `BUDGET_HOURS` | NUMERIC | NULL | The budgeted hours. |
| `ACTUAL_HOURS` | NUMERIC | NULL | The total actual hours. |
| `BASELINE_HOURS` | NUMERIC | NULL | The total baseline hours. |
| `ETC_HOURS` | NUMERIC | NULL | The estimate-to-complete (ETC) hours. |
| `ALLOCATED_HOURS` | NUMERIC | NULL | The total allocated hours. |
| `COST_BASE_LABOR` | NUMERIC | NULL | The base labor cost. |
| `COST_BASE_EQUIP` | NUMERIC | NULL | The base equipment cost. |
| `COST_BASE_EXPENSE` | NUMERIC | NULL | The base expense cost. |
| `COST_BASE_MATL` | NUMERIC | NULL | The base material cost. |
| `COST_BASE_TOTAL` | NUMERIC | NULL | The base total cost. |
| `COST_ACT_LABOR` | NUMERIC | NULL | The actual labor cost. |
| `COST_ACT_EQUIP` | NUMERIC | NULL | The actual equipment cost. |
| `COST_ACT_EXPENSE` | NUMERIC | NULL | The actual expense cost. |
| `COST_ACT_MATL` | NUMERIC | NULL | The actual material cost. |
| `COST_ACT_TOTAL` | NUMERIC | NULL | The actual total cost. |
| `COST_ETC_LABOR` | NUMERIC | NULL | The labor ETC cost. |
| `COST_ETC_EQUIP` | NUMERIC | NULL | The equipment ETC cost. |
| `COST_ETC_EXPENSE` | NUMERIC | NULL | The expense ETC cost. |
| `COST_ETC_MATL` | NUMERIC | NULL | The material ETC cost. |
| `COST_ETC_TOTAL` | NUMERIC | NULL | The total ETC cost. |
| `CURRENCY_CODE` | NVARCHAR | NULL | The ISO 3-letter currency code. |
| `PCT_PLAN_EXPANDED` | NUMERIC | NULL | The percent plan expanded. |
| `PCT_COMPLETE` | NUMERIC | NULL | The percent complete. |
| `EARNED_VALUE` | NUMERIC | NULL | The earned value. |
| `PLANNED_VALUE` | NUMERIC | NULL | The planned value. |
| `SCHEDULE_VARIANCE` | NUMERIC | NULL | The schedule variance. |
| `COST_VARIANCE` | NUMERIC | NULL | The cost variance. |
| `CPI_NUMBER` | NUMERIC | NULL | The CPI number. |
| `SPI_NUMBER` | NUMERIC | NULL | The SPI number. |
| `OPEN_TASKS` | NUMERIC | NULL | The number of open tasks. |
| `CLOSED_TASKS` | NUMERIC | NULL | The number of closed tasks. |
| `OPEN_ISSUES` | NUMERIC | NULL | The number of open issues. |
| `CLOSED_ISSUES` | NUMERIC | NULL | The number of closed issues. |
| `OPEN_RISKS` | NUMERIC | NULL | The number of open risks. |
| `CLOSED_RISKS` | NUMERIC | NULL | The number of closed risks. |
| `NUMBER_OF_RESOURCES` | NUMERIC | NULL | The number of resources. |
| `ACTUAL_HOURS_THIS_PERIOD` | NUMERIC | NULL | The actual hours in this period. |
| `BASELINE_HOURS_THIS_PERIOD` | NUMERIC | NULL | The baseline hours in this period. |
| `ETC_HOURS_THIS_PERIOD` | NUMERIC | NULL | The ETC hours for this period. |
| `TASKS_OPENED_THIS_PERIOD` | NUMERIC | NULL | the number of tasks opened for this period. |
| `TASKS_CLOSED_THIS_PERIOD` | NUMERIC | NULL | The number of tasks closed in this period. |
| `ISSUES_OPENED_THIS_PERIOD` | NUMERIC | NULL | The number of issues opened during this period. |
| `ISSUES_CLOSED_THIS_PERIOD` | NUMERIC | NULL | The number of issues closed in this period. |
| `RISKS_OPENED_THIS_PERIOD` | NUMERIC | NULL | The number of risks opened in this period. |
| `RISKS_CLOSED_THIS_PERIOD` | NUMERIC | NULL | The number of risks closed during this period. |
| `IS_OPP_ENABLED` | NUMERIC | NULL | Determines if opportunity management is enabled. Values are: - 0 = Not enabled - 1 = Enabled |
| `IS_FM_ENABLED` | NUMERIC | NULL | Determines if project accounting and financial management are enabled. Values are: - 0 = Not enabled - 1 = Enabled |
| `IS_MGMT_ENABLED` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PROJECT_ID` | [[NBI_PROJECT_CURRENT_FACTS]].`PROJECT_ID` | |
| `CALENDAR_TIME_KEY` | [[NBI_DIM_CALENDAR_TIME]].`TIME_KEY` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
