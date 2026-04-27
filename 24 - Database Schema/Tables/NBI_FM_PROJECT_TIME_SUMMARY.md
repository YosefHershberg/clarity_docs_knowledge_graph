---
title: NBI_FM_PROJECT_TIME_SUMMARY
type: db-table
table: NBI_FM_PROJECT_TIME_SUMMARY
columns: 33
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - NBI_DIM_FISCAL_TIME
  - NBI_DIM_OBS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_FM_PROJECT_TIME_SUMMARY

> [!info] Description
> This table stores summarized time-bucket financial project management (FM) information. No project detail is available from this table. The purpose of this table is to allow reporting on summarized data by fiscal period and OBS units. Queries such as "What was the actual labor cost in the US/West/California region in Q2 of 2010?" can be answered easily by querying this table.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `FISCAL_TIME_KEY` | NVARCHAR | NOT NULL | This refers to [[NBI_DIM_FISCAL_TIME]].TIME_KEY. |
| `OBS1_UNIT_ID` | NUMERIC | NULL | The OBS 1 unit ID. This refers to the [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS2_UNIT_ID` | NUMERIC | NULL | The OBS 2 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS3_UNIT_ID` | NUMERIC | NULL | The OBS 3 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS4_UNIT_ID` | NUMERIC | NULL | The OBS 4 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS5_UNIT_ID` | NUMERIC | NULL | The OBS 5 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `BUDGET_HOURS` | NUMERIC | NULL | The budgeted hours. |
| `ACTUAL_HOURS` | NUMERIC | NULL | The total actual hours. |
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
| `ACT_BILLING` | NUMERIC | NULL | The total actual billings. |
| `REV_ACT_LABOR` | NUMERIC | NULL | The labor actual revenue. |
| `REV_ACT_EQUIP` | NUMERIC | NULL | The actual equipment revenue. |
| `REV_ACT_EXPENSE` | NUMERIC | NULL | The actual expense revenue. |
| `REV_ACT_MATL` | NUMERIC | NULL | The actual material revenue. |
| `REV_ACT_TOTAL` | NUMERIC | NULL | The total actual revenue. |
| `COST_ACT_LABOR` | NUMERIC | NULL | The actual labor cost. |
| `COST_ACT_EQUIP` | NUMERIC | NULL | The actual equipment cost. |
| `COST_ACT_EXPENSE` | NUMERIC | NULL | The actual expense cost. |
| `COST_ACT_MATL` | NUMERIC | NULL | The actual material cost. |
| `COST_ACT_TOTAL` | NUMERIC | NULL | The total actual cost. |
| `COST_TO_COMPLETE` | NUMERIC | NULL | The cost to complete. |
| `AVERAGE_PCT_BUDGET_EXPENDED` | NUMERIC | NULL | The average percent of the budget that has been expended. |
| `AVERAGE_BUDGET_MARGIN` | NUMERIC | NULL | The budgeted average margin. |
| `CURRENCY_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `FISCAL_TIME_KEY` | [[NBI_DIM_FISCAL_TIME]].`TIME_KEY` | |
| `OBS1_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS2_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS3_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS4_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS5_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
