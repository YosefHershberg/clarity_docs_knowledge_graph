---
title: PFM_INVESTMENTS_PLAN
type: db-table
table: PFM_INVESTMENTS_PLAN
columns: 142
audience: dev
domain: development
canonical: true
erds:
  - Portfolios
tags:
  - dev
  - schema
  - table
  - erd/portfolios
---

# PFM_INVESTMENTS_PLAN

> [!info] Description
> This table contains plan data for idea attributes in the context of a plan.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Specifies the ID of investment in the context of a plan |
| `PLAN_ID` | NUMERIC | NOT NULL | Specifies the Key of the plan context (PFM_PLAN) |
| `PORT_INV_STATUS` | NUMERIC | NULL | This column contains changes made to PORT_INV_STATUS in the context of a plan. |
| `RESOURCE_DEMAND_CURVE` | BINARY | NULL | This column contains changes made to RESOURCE_DEMAND_CURVE in the context of a plan. |
| `PLAN_CST_START` | DATE | NULL | This column contains changes made to PLAN_CST_START in the context of a plan. |
| `PLAN_CST_FINISH` | DATE | NULL | This column contains changes made to PLAN_CST_FINISH in the context of a plan. |
| `PLAN_TTL_COST` | BINARY | NULL | This column contains changes made to PLAN_TTL_COST in the context of a plan. |
| `PLAN_CAP_COST` | BINARY | NULL | This column contains changes made to PLAN_CAP_COST in the context of a plan. |
| `PLAN_OP_COST` | BINARY | NULL | This column contains changes made to PLAN_OP_COST in the context of a plan. |
| `PLANNED_NPV` | NUMERIC | NULL | This column contains changes made to PLANNED_NPV in the context of a plan. |
| `PLANNED_ROI` | NUMERIC | NULL | This column contains changes made to PLANNED_ROI in the context of a plan. |
| `PLANNED_BREAKEVEN` | DATE | NULL | This column contains changes made to PLANNED_BREAKEVEN in the context of a plan. |
| `PLANNED_IRR` | NUMERIC | NULL | This column contains changes made to PLANNED_IRR in the context of a plan. |
| `PLANNED_MIRR` | NUMERIC | NULL | This column contains changes made to PLANNED_MIRR in the context of a plan. |
| `PLANNED_PAYBACK_PERIOD` | NUMERIC | NULL | This column contains changes made to PLANNED_PAYBACK_PERIOD in the context of a plan. |
| `BUDGET_CST_START` | DATE | NULL | This column contains changes made to BUDGET_CST_START in the context of a plan. |
| `BUDGET_CST_FINISH` | DATE | NULL | This column contains changes made to BUDGET_CST_FINISH in the context of a plan. |
| `BUDGET_TTL_COST` | BINARY | NULL | This column contains changes made to BUDGET_TTL_COST in the context of a plan. |
| `BUDGET_CAP_COST` | BINARY | NULL | This column contains changes made to BUDGET_CAP_COST in the context of a plan. |
| `BUDGET_OP_COST` | BINARY | NULL | This column contains changes made to BUDGET_OP_COST in the context of a plan. |
| `BUDGET_NPV` | NUMERIC | NULL | This column contains changes made to BUDGET_NPV in the context of a plan. |
| `BUDGET_ROI` | NUMERIC | NULL | This column contains changes made to BUDGET_ROI in the context of a plan. |
| `BUDGET_BREAKEVEN` | DATE | NULL | This column contains changes made to BUDGET_BREAKEVEN in the context of a plan. |
| `BUDGET_IRR` | NUMERIC | NULL | This column contains changes made to BUDGET_IRR in the context of a plan. |
| `BUDGET_MIRR` | NUMERIC | NULL | This column contains changes made to BUDGET_MIRR in the context of a plan. |
| `BUDGET_PAYBACK_PERIOD` | NUMERIC | NULL | This column contains changes made to BUDGET_PAYBACK_PERIOD in the context of a plan. |
| `PLAN_BENEFIT_START` | DATE | NULL | This column contains changes made toPLAN_BENEFIT_START in the context of a plan. |
| `PLAN_BENEFIT_FINISH` | DATE | NULL | This column contains changes made to PLAN_BENEFIT_FINISH in the context of a plan. |
| `PLAN_BENEFIT` | BINARY | NULL | This column contains changes made to PLAN_BENEFIT in the context of a plan. |
| `REAL_PLAN_BENEFIT` | BINARY | NULL | This column contains changes made to REAL_PLAN_BENEFIT in the context of a plan. |
| `BUDGET_BENEFIT_START` | DATE | NULL | This column contains changes made to BUDGET_BENEFIT_START in the context of a plan. |
| `BUDGET_BENEFIT_FINISH` | DATE | NULL | This column contains changes made to BUDGET_BENEFIT_FINISH in the context of a plan. |
| `BUDGET_BENEFIT` | BINARY | NULL | This column contains changes made to BUDGET_BENEFIT in the context of a plan. |
| `REAL_BUDGET_BENEFIT` | BINARY | NULL | This column contains changes made to REAL_BUDGET_BENEFIT in the context of a plan. |
| `INITIAL_INVESTMENT` | NUMERIC | NULL | This column contains changes made to INITIAL_INVESTMENT in the context of a plan. |
| `TOTAL_COST_OF_CAPITAL` | NUMERIC | NULL | This column contains changes made to TOTAL_COST_OF_CAPITAL in the context of a plan. |
| `REINVESTMENT_RATE` | NUMERIC | NULL | This column contains changes made to REINVESTMENT_RATE in the context of a plan. |
| `ODF_OBJECT_CODE` | NVARCHAR | NULL | Object code of the investment (project, asset). |
| `NAME` | NVARCHAR | NULL | This column contains changes made to NAME in the context of a plan. |
| `CODE` | NVARCHAR | NULL | This column contains changes made to STAGE_CODE in the context of a plan. |
| `DESCRIPTION` | NVARCHAR | NULL | This column contains changes made to DESCRIPTION in the context of a plan. |
| `IDEA_ID` | NUMERIC | NULL | This column contains changes made to IDEA_ID in the context of a plan. |
| `PROCESS_CODE` | NVARCHAR | NULL | This column contains changes made to PROCESS_CODE in the context of a plan. |
| `STAGE_CODE` | NVARCHAR | NULL | This column contains changes made to STAGE_CODE in the context of a plan. |
| `GOAL_CODE` | NVARCHAR | NULL | This column contains changes made to GOAL_CODE in the context of a plan. |
| `ALIGNMENT` | NUMERIC | NULL | This column contains changes made to ALIGNMENT in the context of a plan. |
| `RISK` | NUMERIC | NULL | This column contains changes made to RISK in the context of a plan. |
| `STATUS_INDICATOR` | NUMERIC | NULL | This column contains changes made to STATUS_INDICATOR in the context of a plan. |
| `STATUS_COMMENT` | NVARCHAR | NULL | This column contains changes made to STATUS_COMMENT in the context of a plan. |
| `PROGRESS` | NUMERIC | NULL | This column contains changes made to PROGRESS in the context of a plan. |
| `STATUS` | NUMERIC | NULL | This column contains changes made to STATUS in the context of a plan. |
| `MANAGER_ID` | NUMERIC | NULL | This column contains changes made to MANAGER_ID in the context of a plan. |
| `CURRENCY_CODE` | NVARCHAR | NULL | This column contains changes made to CURRENCY_CODE in the context of a plan. |
| `APPROVEDBY_ID` | NUMERIC | NULL | This column contains changes made to APPROVEDBY_ID in the context of a plan. |
| `APPROVEDTIME` | DATE | NULL | This column contains changes made to APPROVEDTIME in the context of a plan. |
| `IS_REQUIRED` | NUMERIC | NULL | This column contains changes made to IS_REQUIRED in the context of a plan. |
| `PRIORITY` | NUMERIC | NULL | This column contains changes made to PRIORITY in the context of a plan. |
| `IS_ACTIVE` | NUMERIC | NULL | This column contains changes made to IS_ACTIVE in the context of a plan. |
| `PURGE_FLAG` | NUMERIC | NULL | This column contains changes made to PURGE_FLAG in the context of a plan. |
| `SLICE_STATUS` | NUMERIC | NULL | Not used. |
| `TRACK_MODE` | NUMERIC | NULL | This column contains changes made to TRACK_MODE in the context of a plan. |
| `CHARGECODEID` | NUMERIC | NULL | This column contains changes made to CHARGECODEID in the context of a plan. |
| `IS_OPEN_FOR_TE` | NUMERIC | NULL | This column contains changes made to IS_OPEN_FOR_TE in the context of a plan. |
| `BASELINE_ID` | NUMERIC | NULL | This column contains changes made to BASELINE_ID in the context of a plan. |
| `RSF_OBS_UNIT` | NUMERIC | NULL |  |
| `AGGR_BUDGET_COST` | FLOAT | NULL | Not used. |
| `AGGR_BUDGET_COST_TSV` | BINARY | NULL | Not used. |
| `AGGR_FORECAST_COST` | FLOAT | NULL | Not used. |
| `AGGR_FORECAST_COST_TSV` | BINARY | NULL | Not used. |
| `AGGR_ACTUAL_COST` | FLOAT | NULL | Not used. |
| `AGGR_ACTUAL_COST_TSV` | BINARY | NULL | Not used. |
| `AGGR_ETC` | FLOAT | NULL |  |
| `AGGR_ETC_TSV` | BINARY | NULL | Not used. |
| `AGGR_EAC` | FLOAT | NULL | Not used. |
| `AGGR_EAC_TSV` | BINARY | NULL | Not used. |
| `AGGR_BASELINE_WORK` | FLOAT | NULL | Not used. |
| `AGGR_BASELINE_WORK_TSV` | BINARY | NULL | Not used. |
| `AGGR_ACTUAL_WORK` | FLOAT | NULL | Not used. |
| `AGGR_ACTUAL_WORK_TSV` | BINARY | NULL | Not used. |
| `AGGR_BDGT_BENEFIT` | FLOAT | NULL | This column contains changes made to AGGR_BDGT_BENEFIT in the context of a plan. |
| `AGGR_BDGT_BENEFIT_TSV` | BINARY | NULL | Not used. |
| `SLA_COMPLIANCE` | NUMERIC | NULL | This column contains changes made to SLA_COMPLIANCE in the context of a plan. |
| `LAST_AGGREGATED_DATE` | DATE | NULL | Not used. |
| `CBK_TYPE` | NVARCHAR | NULL | This column contains changes made to CBK_TYPE in the context of a plan. |
| `BILL_EXPENSE_TYPE` | NVARCHAR | NULL | This column contains changes made to BILL_EXPENSE_TYPE in the context of a plan. |
| `CREATED_DATE` | DATE | NULL | This column contains changes made to investments in the context of a plan. |
| `CREATED_BY` | NUMERIC | NULL | This column contains changes made to investments in the context of a plan. |
| `LAST_UPDATED_DATE` | DATE | NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NULL |  |
| `SCHEDULE_START` | DATE | NULL | This column contains changes made to SCHEDULE_START in the context of a plan. |
| `SCHEDULE_FINISH` | DATE | NULL | This column contains changes made to SCHEDULE_FINISH in the context of a plan. |
| `SYNC_INV_N_BDG_DATES` | NUMERIC | NULL | This column contains changes made to SYNC_INV_N_BDG_DATES in the context of a plan. |
| `LABOR_ETC_CURVE` | BINARY | NULL | This column contains changes made to LABOR_ETC_CURVE in the context of a plan. |
| `LABOR_ETCSUM` | FLOAT | NULL | This column contains changes made to LABOR_ETCSUM in the context of a plan. |
| `LABOR_ACT_CURVE` | BINARY | NULL | This column contains changes made to LABOR_ACT_CURVE in the context of a plan. |
| `LABOR_ACTSUM` | FLOAT | NULL | This column contains changes made to LABOR_ACTSUM in the context of a plan. |
| `LABOR_EAC_CURVE` | BINARY | NULL | This column contains changes made to LABOR_EAC_CURVE in the context of a plan. |
| `LABOR_EACSUM` | FLOAT | NULL | This column contains changes made to LABOR_EACSUM in the context of a plan. |
| `LABOR_BASELINE_CURVE` | BINARY | NULL | This column contains changes made to LABOR_BASELINE_CURVE in the context of a plan. |
| `LABOR_BASESUM` | FLOAT | NULL | This column contains changes made to LABOR_BASESUM in the context of a plan. |
| `LABOR_VARIANCE_CURVE` | BINARY | NULL | This column contains changes made to LABOR_VARIANCE_CURVE in the context of a plan. |
| `LABOR_VARIANCESUM` | FLOAT | NULL | This column contains changes made to LABOR_VARIANCESUM in the context of a plan. |
| `ENTITY_CODE` | NVARCHAR | NULL | This column contains changes made to ENTITY_CODE in the context of a plan. |
| `ODF_SS_LABOR_BASE` | NUMERIC | NULL | This column contains changes made to ODF_SS_LABOR_BASE in the context of a plan. |
| `ODF_SS_LABOR_ACT` | NUMERIC | NULL | Not used. |
| `ODF_SS_LABOR_EAC` | NUMERIC | NULL | Not used. |
| `ODF_SS_LABOR_ETC` | NUMERIC | NULL | Not used. |
| `ODF_SS_LABOR_VARIANCE` | NUMERIC | NULL | Not used. |
| `TARGET_MANAGER_ID` | NUMERIC | NULL | This column contains changes made to TARGET_MANAGER_ID in the context of a plan. |
| `ASSGN_POOL` | NUMERIC | NULL | This column contains changes made to ASSGN_POOL in the context of a plan. |
| `TRACK_ASSGN_ONLY` | NUMERIC | NULL | This column contains changes made to TRACK_ASSGN_ONLY in the context of a plan. |
| `ODF_TEMPLATE_ID` | NUMERIC | NULL |  |
| `ODF_BLUEPRINT_ID` | NUMERIC | NULL |  |
| `IS_CUSTOM` | NUMERIC | NULL |  |
| `CI_PROGRESS` | NUMERIC | NULL |  |
| `CI_STAGE` | NVARCHAR | NULL |  |
| `RCF_OBJECTIVES` | NUMERIC | NULL |  |
| `RCF_SPONSORSHIP` | NUMERIC | NULL |  |
| `RCF_FUNDING` | NUMERIC | NULL |  |
| `RCF_RESOURCE_AVAIL` | NUMERIC | NULL |  |
| `RCF_INTERDEPENDENCY` | NUMERIC | NULL |  |
| `RCF_TECHNICAL` | NUMERIC | NULL |  |
| `RCF_HUMAN_INTERFACE` | NUMERIC | NULL |  |
| `RCF_ORG_CULTURE` | NUMERIC | NULL |  |
| `RCF_SUPPORTABILITY` | NUMERIC | NULL |  |
| `RCF_IMPLEMENTATION` | NUMERIC | NULL |  |
| `RCF_FLEXIBILITY` | NUMERIC | NULL |  |
| `PARENT_ID` | NUMERIC | NULL |  |
| `ODF_TEMPLATE` | NUMERIC | NULL |  |
| `LABOR_ALLOC_CURVE` | BINARY | NULL |  |
| `LABOR_HARD_ALLOC_CURVE` | BINARY | NULL |  |
| `PLAN_INV_CATEGORY` | NVARCHAR | NULL |  |
| `BANNER_COLOR` | NVARCHAR | NULL |  |
| `ODF_FTE_LABOR_ALLOC_CURVE` | NUMERIC | NULL |  |
| `ODF_FTE_LABOR_HARD_ALLOC_CURVE` | NUMERIC | NULL |  |
| `ODF_FTE_LABOR_ETC_CURVE` | NUMERIC | NULL |  |
| `ODF_FTE_LABOR_ACT_CURVE` | NUMERIC | NULL |  |
| `ODF_FTE_LABOR_EAC_CURVE` | NUMERIC | NULL |  |
| `INV_PERCENT_COMPLETE` | NUMERIC | NULL |  |
| `INV_PCNT_CALC_MODE` | NUMERIC | NULL |  |
| `ALLOW_UNSTAFFED_TIME_ENTRY` | NUMERIC | NULL |  |
| `INV_DESCRIPTION` | NVARCHARMAX | NULL |  |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
