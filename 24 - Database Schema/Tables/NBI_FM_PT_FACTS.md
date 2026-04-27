---
title: NBI_FM_PT_FACTS
type: db-table
table: NBI_FM_PT_FACTS
columns: 41
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - NBI_DIM_FISCAL_TIME
  - NBI_PROJECT_CURRENT_FACTS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_FM_PT_FACTS

> [!info] Description
> This table stores time-buckets for financial project management (FM) information. This table stores one row for each project per fiscal period.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to [[NBI_PROJECT_CURRENT_FACTS]].PROJECT_ID. |
| `FISCAL_TIME_KEY` | NVARCHAR | NOT NULL | This refers to [[NBI_DIM_FISCAL_TIME]].TIME_KEY. |
| `IS_ACTIVE` | NUMERIC | NULL | Determines if the row is active. Values are one of the following: - 0 = Inactive - 1 = Active |
| `ENTITY` | NVARCHAR | NULL | The financial entity. |
| `ENTITY_NAME` | NVARCHAR | NULL | The financial entity name. |
| `LOCATION` | NVARCHAR | NULL | The financial location. |
| `LOCATION_NAME` | NVARCHAR | NULL | The name of the financial location. |
| `DEPARTMENT` | NVARCHAR | NULL | The financial department. |
| `DEPARTMENT_NAME` | NVARCHAR | NULL | The name of the financial department. |
| `BUDGET_HOURS` | NUMERIC | NULL | The budgeted hours. |
| `ACTUAL_HOURS` | NUMERIC | NULL | The actual total hours. |
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
| `ACT_BILLING` | NUMERIC | NULL | The actual total billing. |
| `REV_ACT_LABOR` | NUMERIC | NULL | The actual labor revenue. |
| `REV_ACT_EQUIP` | NUMERIC | NULL | The actual equipment revenue. |
| `REV_ACT_EXPENSE` | NUMERIC | NULL | The actual expense revenue. |
| `REV_ACT_MATL` | NUMERIC | NULL | The actual material revenue. |
| `REV_ACT_TOTAL` | NUMERIC | NULL | The actual total revenue. |
| `COST_ACT_LABOR` | NUMERIC | NULL | The actual labor cost. |
| `COST_ACT_EQUIP` | NUMERIC | NULL | The actual equipment cost. |
| `COST_ACT_EXPENSE` | NUMERIC | NULL | The actual expense cost. |
| `COST_ACT_MATL` | NUMERIC | NULL | The actual material cost. |
| `COST_ACT_TOTAL` | NUMERIC | NULL | The actual total cost. |
| `COST_TO_COMPLETE` | NUMERIC | NULL | The cost to complete. |
| `BUDGET_MARGIN` | NUMERIC | NULL | The budgeted margin. |
| `BUDGET_REV_NUMBER` | NUMERIC | NULL | The budgeted revenue number. |
| `ROI_DATE` | DATE | NULL | The return on investment (ROI) date. |
| `CURRENCY_CODE` | NVARCHAR | NULL | The ISO 3-letter currency code. |
| `PCT_BUDGET_EXPENDED` | NUMERIC | NULL | The percent of the budget that is expended. |
| `IS_OPP_ENABLED` | NUMERIC | NULL | Determines if project opportunity management is enabled. Values are: - 0 = Not enabled - 1 = Enabled |
| `IS_FM_ENABLED` | NUMERIC | NULL | Determines if project accounting or financial management is enabled. Values are: - 0 = Not enabled - 1 = Enabled |
| `IS_MGMT_ENABLED` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PROJECT_ID` | [[NBI_PROJECT_CURRENT_FACTS]].`PROJECT_ID` | |
| `FISCAL_TIME_KEY` | [[NBI_DIM_FISCAL_TIME]].`TIME_KEY` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
