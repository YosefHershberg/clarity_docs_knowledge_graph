---
title: NBI_PROJECT_CURRENT_FACTS
type: db-table
table: NBI_PROJECT_CURRENT_FACTS
columns: 136
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - SRM_PROJECTS
fk_sources:
  - NBI_FM_PT_FACTS
  - NBI_PM_PT_FACTS
  - NBI_PRT_FACTS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_PROJECT_CURRENT_FACTS

> [!info] Description
> This table stores both financial and project management information in as-of-today form. There is one row for each active project in the system.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to the Project ID ([[SRM_PROJECTS]].ID). |
| `OBS1_UNIT_ID` | NUMERIC | NULL | The OBS [1] unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `OBS2_UNIT_ID` | NUMERIC | NULL | The OBS [2] unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `OBS3_UNIT_ID` | NUMERIC | NULL | The OBS [3] Unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `OBS4_UNIT_ID` | NUMERIC | NULL | The OBS [4] unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `OBS5_UNIT_ID` | NUMERIC | NULL | The OBS [5] unit ID. This is a foreign key to the NBI_DIM_OBS table. |
| `LAST_UPDATED` | DATE | NULL | The date of the last update. |
| `PROJECT_CODE` | NVARCHAR | NULL | This column refers to the project code. |
| `PROJECT_NAME` | NVARCHAR | NULL | This column refers to the project name. |
| `IS_ACTIVE` | NUMERIC | NULL | Indicates if the project is current. Values are: - 0 = Inactive - 1 = Active |
| `BILLING_PROJECT_ID` | NUMERIC | NULL | This is a foreign key to [[NBI_PROJECT_CURRENT_FACTS]].PROJECT_ID. |
| `CONTRACTAMOUNT` | NUMERIC | NULL | The contract amount. |
| `CONTRACT_NUMBER` | NVARCHAR | NULL | The contract number. |
| `CONTRACT_DATE` | DATE | NULL | The contract date. |
| `SPONSOR` | NVARCHAR | NULL | The sponsor's name. |
| `CUSTOMER_ID` | NUMERIC | NULL | The customer ID. |
| `CUSTOMER` | NVARCHAR | NULL | The customer Name. |
| `CUSTOMER_CODE` | NVARCHAR | NULL | The customer code. |
| `CUSTOMER_CLASS` | NVARCHAR | NULL | The customer class. |
| `CUSTOMER_CLASS_NAME` | NVARCHAR | NULL | The customer class name. |
| `OPP_REVENUE` | NUMERIC | NULL | The opportunity revenue. |
| `OPP_STAGE` | NUMERIC | NULL | The opportunity stage. |
| `OPP_PROBABILITY` | NUMERIC | NULL | The opportunity probability. |
| `OPP_EXPECTED_CLOSE_DATE` | DATE | NULL | The opportunity expected close date. |
| `OPP_STATUS` | NUMERIC | NULL | The opportunity status. |
| `OPP_TRACK_ON_PIPELINE` | NUMERIC | NULL | Indicates if the opportunity is tracked in the pipeline. Values are: - 0 = No - 1 = Yes |
| `ACCOUNT_EXECUTIVE_ID` | NUMERIC | NULL | The account executive ID. |
| `AE_LAST_NAME` | NVARCHAR | NULL | The last name of the account executive. |
| `AE_FIRST_NAME` | NVARCHAR | NULL | The first name of the account executive. |
| `MANAGER_ID` | NUMERIC | NULL | The manager's ID. |
| `MANAGER_LAST_NAME` | NVARCHAR | NULL | The last name of the manager. |
| `MANAGER_FIRST_NAME` | NVARCHAR | NULL | The first name of the manager. |
| `ENTITY` | NVARCHAR | NULL | The entity. |
| `ENTITY_NAME` | NVARCHAR | NULL | The name of the entity. |
| `LOCATION` | NVARCHAR | NULL | The location. |
| `LOCATION_NAME` | NVARCHAR | NULL | The location name. |
| `DEPARTMENT` | NVARCHAR | NULL | The department. |
| `DEPARTMENT_NAME` | NVARCHAR | NULL | The department name. |
| `FM_STATUS` | NVARCHAR | NULL | The financial management status. |
| `PROJECT_CLASS` | NVARCHAR | NULL | This column refers to the project class. |
| `WIP_CLASS` | NVARCHAR | NULL | The Work-in-progress (WIP) class. |
| `PROJECT_TYPE` | NVARCHAR | NULL | This column refers to the project type. |
| `IS_APPROVED` | NUMERIC | NULL | Indicates if the project is approved. Value are: - 0 = Not Approved. - 1 = Approved. |
| `GOAL_SCORE` | NUMERIC | NULL | The goal score. |
| `PRIORITY` | NUMERIC | NULL | The project priority. |
| `START_DATE` | DATE | NULL | The project start date. |
| `BASE_START_DATE` | DATE | NULL | The baseline start date. |
| `FINISH_DATE` | DATE | NULL | The finish date. |
| `BASE_FINISH_DATE` | DATE | NULL | The baseline finish date. |
| `START_VARIANCE` | NUMERIC | NULL | The start variance. |
| `FINISH_VARIANCE` | NUMERIC | NULL | The finish variance. |
| `BUDGET_HOURS` | NUMERIC | NULL | The budgeted hours. |
| `ACTUAL_HOURS` | NUMERIC | NULL | The actual hours in this period. |
| `ACTUAL_WIP_HOURS` | NUMERIC | NULL | The actual work-in-progress (WIP) hours. |
| `BASELINE_HOURS` | NUMERIC | NULL | The baseline hours. |
| `ETC_HOURS` | NUMERIC | NULL | The estimated-to-complete (ETC) hours. |
| `ALLOCATED_HOURS` | NUMERIC | NULL | The allocated hours. |
| `REV_BUDGET_LABOR` | NUMERIC | NULL | The labor budgeted revenue. |
| `REV_BUDGET_EQUIP` | NUMERIC | NULL | The budgeted equipment revenue. |
| `REV_BUDGET_EXPENSE` | NUMERIC | NULL | The budgeted expense revenue. |
| `REV_BUDGET_MATL` | NUMERIC | NULL | The budgeted material revenue. |
| `REV_BUDGET_TOTAL` | NUMERIC | NULL | The total budgeted revenue. |
| `COST_BUDGET_LABOR` | NUMERIC | NULL | The budgeted labor cost. |
| `COST_BUDGET_EQUIP` | NUMERIC | NULL | The budgeted equipment cost. |
| `COST_BUDGET_EXPENSE` | NUMERIC | NULL | The budgeted expense cost. |
| `COST_BUDGET_MATL` | NUMERIC | NULL | The budgeted material cost. |
| `COST_BUDGET_TOTAL` | NUMERIC | NULL | The total budgeted cost. |
| `ACT_BILLING` | NUMERIC | NULL | The actual billings. |
| `ACT_WIP_QTY` | NUMERIC | NULL | The actual WIP quantity. |
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
| `COST_ETC_LABOR` | NUMERIC | NULL | The labor ETC cost. |
| `COST_ETC_EQUIP` | NUMERIC | NULL | The equipment ETC cost. |
| `COST_ETC_EXPENSE` | NUMERIC | NULL | The expense ETC cost. |
| `COST_ETC_MATL` | NUMERIC | NULL | The material ETC cost. |
| `COST_ETC_TOTAL` | NUMERIC | NULL | The total ETC cost. |
| `COST_BASE_LABOR` | NUMERIC | NULL | The labor base cost. |
| `COST_BASE_EQUIP` | NUMERIC | NULL | The base equipment cost. |
| `COST_BASE_EXPENSE` | NUMERIC | NULL | The base expense cost. |
| `COST_BASE_MATL` | NUMERIC | NULL | The base material cost. |
| `COST_BASE_TOTAL` | NUMERIC | NULL | The base total cost. |
| `REV_BASE_LABOR` | NUMERIC | NULL | The base labor revenue. |
| `REV_BASE_EQUIP` | NUMERIC | NULL | The base equipment revenue. |
| `REV_BASE_EXPENSE` | NUMERIC | NULL | The base expense revenue. |
| `REV_BASE_MATL` | NUMERIC | NULL | The base material revenue. |
| `REV_BASE_TOTAL` | NUMERIC | NULL | The base total revenue. |
| `PCT_PLAN_EXPANDED` | NUMERIC | NULL | The percent plan expanded. |
| `PCT_BUDGET_EXPANDED` | NUMERIC | NULL | The percent budget expanded. |
| `PCT_COMPLETE` | NUMERIC | NULL | The percent complete. |
| `EARNED_VALUE` | NUMERIC | NULL | The earned Value. |
| `PLANNED_VALUE` | NUMERIC | NULL | The planned value. |
| `SCHEDULE_VARIANCE` | NUMERIC | NULL | The schedule variance. |
| `COST_VARIANCE` | NUMERIC | NULL | The cost variance. |
| `CPI_NUMBER` | NUMERIC | NULL | The CPI number. |
| `SPI_NUMBER` | NUMERIC | NULL | The SPI number. |
| `BUDGET_MARGIN` | NUMERIC | NULL | The budgeted margin. |
| `BUDGET_REV_NUMBER` | NUMERIC | NULL | The budgeted revenue number. |
| `ROI_DATE` | DATE | NULL | The return on investment (ROI) date. |
| `OPEN_TASKS` | NUMERIC | NULL | The number of open tasks. |
| `CLOSED_TASKS` | NUMERIC | NULL | The number of closed tasks. |
| `OPEN_ISSUES` | NUMERIC | NULL | The number of open issues. |
| `CLOSED_ISSUES` | NUMERIC | NULL | The number of closed issues. |
| `OPEN_RISKS` | NUMERIC | NULL | The number of open risks. |
| `CLOSED_RISKS` | NUMERIC | NULL | The number of closed risks. |
| `CURRENCY_CODE` | NVARCHAR | NULL | The ISO 3-letter currency code. |
| `STOPLIGHT_1` | NUMERIC | NULL | This column refers to stoplight [1]. |
| `STOPLIGHT_2` | NUMERIC | NULL | This column refers to stoplight [2]. |
| `STOPLIGHT_3` | NUMERIC | NULL | This column refers to stoplight [3]. |
| `STOPLIGHT_4` | NUMERIC | NULL | This column refers to stoplight [4]. |
| `STOPLIGHT_5` | NUMERIC | NULL | This column refers to stoplight [5]. |
| `STOPLIGHT_6` | NUMERIC | NULL | This column refers to stoplight [6]. |
| `STOPLIGHT_7` | NUMERIC | NULL | This column refers to stoplight [7]. |
| `STOPLIGHT_8` | NUMERIC | NULL | This column refers to stoplight [8]. |
| `STOPLIGHT_9` | NUMERIC | NULL | This column refers to stoplight [9]. |
| `STOPLIGHT_10` | NUMERIC | NULL | This column refers to stoplight [10]. |
| `STOPLIGHT_11` | NUMERIC | NULL | This column refers to stoplight [11]. |
| `STOPLIGHT_12` | NUMERIC | NULL | This column refers to stoplight [12]. |
| `STOPLIGHT_13` | NUMERIC | NULL | This column refers to stoplight [13]. |
| `STOPLIGHT_14` | NUMERIC | NULL | This column refers to stoplight [14]. |
| `STOPLIGHT_15` | NUMERIC | NULL | This column refers to stoplight [15]. |
| `IS_OPP_ENABLED` | NUMERIC | NULL | Indicates if opportunity management for the project is enabled. Value are one of the following: - 0 = Not enabled - 1 = Enabled |
| `IS_FM_ENABLED` | NUMERIC | NULL | Indicates if accounting and financial management is enabled for the project. Values are one of the following: - 0 = Not enabled. - 1 = Enabled. |
| `IS_MGMT_ENABLED` | NUMERIC | NULL | Indicates if project management is enabled for the project. Values are one of the following: - 0 = Not enabled. - 1 = Enabled |
| `REV_ETC_LABOR` | NUMERIC | NULL | The labor estimated-to-complete (ETC) revenue. |
| `REV_ETC_EQUIP` | NUMERIC | NULL | The equipment ETC revenue. |
| `REV_ETC_EXPENSE` | NUMERIC | NULL | The expense ETC revenue. |
| `REV_ETC_MATL` | NUMERIC | NULL | The material ETC revenue. |
| `REV_ETC_TOTAL` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PROJECT_ID` | [[SRM_PROJECTS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[NBI_FM_PT_FACTS]] | `PROJECT_ID` | `PROJECT_ID` |
| [[NBI_PM_PT_FACTS]] | `PROJECT_ID` | `PROJECT_ID` |
| [[NBI_PRT_FACTS]] | `PROJECT_ID` | `PROJECT_ID` |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
