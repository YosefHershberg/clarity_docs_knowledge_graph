---
title: NBI_PM_PROJECT_TIME_SUMMARY
type: db-table
table: NBI_PM_PROJECT_TIME_SUMMARY
columns: 53
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

# NBI_PM_PROJECT_TIME_SUMMARY

> [!info] Description
> This table stores summarized time-bucket for project management (PM) information. No project detail is available from this table. The purpose of this table is to allow reporting on summarized data by calendar period and OBS units. Queries such as "How many actual hours were accumulated in the US/West/California region in Q2 of 2010?" can be answered easily by querying this table.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `CALENDAR_TIME_KEY` | NVARCHAR | NOT NULL | The foreign key to NBI_DIM_CALENDAR_TIME. |
| `OBS1_UNIT_ID` | NUMERIC | NULL | The OBS [1] Unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `OBS2_UNIT_ID` | NUMERIC | NULL | The OBS [2] Unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `OBS3_UNIT_ID` | NUMERIC | NULL | The OBS [3] unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `OBS4_UNIT_ID` | NUMERIC | NULL | The OBS [4] unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `OBS5_UNIT_ID` | NUMERIC | NULL | The OBS [5] unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `APPROVED_PROJECTS` | NUMERIC | NULL | The number of approved projects. |
| `NOT_APPROVED_PROJECTS` | NUMERIC | NULL | The number of projects not yet approved. |
| `AVERAGE_GOAL_SCORE` | NUMERIC | NULL | The average goal score. |
| `AVERAGE_PRIORITY` | NUMERIC | NULL | The average priority. |
| `AVERAGE_START_VARIANCE` | NUMERIC | NULL | The average start variance. |
| `AVERAGE_FINISH_VARIANCE` | NUMERIC | NULL | The average finish variance. |
| `BUDGET_HOURS` | NUMERIC | NULL | The budgeted hours. |
| `ACTUAL_HOURS` | NUMERIC | NULL | The actual hours in this period. |
| `BASELINE_HOURS` | NUMERIC | NULL | The baseline hours. |
| `ETC_HOURS` | NUMERIC | NULL | The Estimated to Complete (ETC) hours. |
| `ALLOCATED_HOURS` | NUMERIC | NULL | The allocated hours. |
| `COST_BASE_LABOR` | NUMERIC | NULL | The labor base cost. |
| `COST_BASE_EQUIP` | NUMERIC | NULL | The equipment base cost. |
| `COST_BASE_EXPENSE` | NUMERIC | NULL | The expense base cost. |
| `COST_BASE_MATL` | NUMERIC | NULL | The material base cost. |
| `COST_BASE_TOTAL` | NUMERIC | NULL | The total base cost. |
| `COST_ACT_LABOR` | NUMERIC | NULL | The actual labor cost. |
| `COST_ACT_EQUIP` | NUMERIC | NULL | The actual equipment cost. |
| `COST_ACT_EXPENSE` | NUMERIC | NULL | The actual expense cost. |
| `COST_ACT_MATL` | NUMERIC | NULL | The actual material cost. |
| `COST_ACT_TOTAL` | NUMERIC | NULL | The total actual cost. |
| `COST_ETC_LABOR` | NUMERIC | NULL | The Labor ETC cost. |
| `COST_ETC_EQUIP` | NUMERIC | NULL | The equipment ETC cost. |
| `COST_ETC_EXPENSE` | NUMERIC | NULL | The expense ETC cost. |
| `COST_ETC_MATL` | NUMERIC | NULL | The material ETC cost. |
| `COST_ETC_TOTAL` | NUMERIC | NULL | The total ETC cost. |
| `CURRENCY_CODE` | NVARCHAR | NULL | The ISO 3-letter currency code. |
| `EARNED_VALUE` | NUMERIC | NULL | The earned value. |
| `PLANNED_VALUE` | NUMERIC | NULL | The planned value. |
| `AVERAGE_SCHEDULE_VARIANCE` | NUMERIC | NULL | The average schedule variance. |
| `AVERAGE_COST_VARIANCE` | NUMERIC | NULL | The average cost variance. |
| `AVERAGE_CPI_NUMBER` | NUMERIC | NULL | The average Cost Performance Index (CPI) number. |
| `AVERAGE_SPI_NUMBER` | NUMERIC | NULL | The average Schedule Performance Index (SPI) number. |
| `OPEN_TASKS` | NUMERIC | NULL | The number of open tasks. |
| `CLOSED_TASKS` | NUMERIC | NULL | The number of closed tasks. |
| `OPEN_ISSUES` | NUMERIC | NULL | The number of open issues. |
| `CLOSED_ISSUES` | NUMERIC | NULL | The number of closed issues. |
| `OPEN_RISKS` | NUMERIC | NULL | The number of open risks. |
| `CLOSED_RISKS` | NUMERIC | NULL | The number of closed risks. |
| `NUMBER_OF_RESOURCES` | NUMERIC | NULL | The number of resources. |
| `ACTUAL_HOURS_THIS_PERIOD` | NUMERIC | NULL | The actual hours in this period. |
| `TASKS_OPENED_THIS_PERIOD` | NUMERIC | NULL | The tasks opened during this period. |
| `TASKS_CLOSED_THIS_PERIOD` | NUMERIC | NULL | The tasks closed during this period. |
| `ISSUES_OPENED_THIS_PERIOD` | NUMERIC | NULL | The issues opened during this period. |
| `ISSUES_CLOSED_THIS_PERIOD` | NUMERIC | NULL | The issues closed during this period. |
| `RISKS_OPENED_THIS_PERIOD` | NUMERIC | NULL | The risks opened during this period. |
| `RISKS_CLOSED_THIS_PERIOD` | NUMERIC | NULL |  |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
