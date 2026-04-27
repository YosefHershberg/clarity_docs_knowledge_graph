---
title: FIN_FINANCIALS
type: db-table
table: FIN_FINANCIALS
columns: 145
audience: dev
domain: development
canonical: true
erds:
  - Applications
  - Assets
  - Departments
  - Ideas
  - Other Work
  - Products
  - Projects
  - Services
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/applications
  - erd/assets
  - erd/departments
  - erd/ideas
  - erd/other-work
  - erd/products
  - erd/projects
  - erd/services
---

# FIN_FINANCIALS

> [!info] Description
> This table stores simple budget information for the investments.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 09 - Finance]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Applications ERD]]
- [[_MOC - Assets ERD]]
- [[_MOC - Departments ERD]]
- [[_MOC - Ideas ERD]]
- [[_MOC - Other Work ERD]]
- [[_MOC - Products ERD]]
- [[_MOC - Projects ERD]]
- [[_MOC - Services ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `ODF_OBJECT_CODE` | NVARCHAR | NOT NULL | The ODF object code that identifies the specific type of investment (project, application, asset, etc.) |
| `CURRENCY_CODE` | NVARCHAR | NULL | The home currency derived from the entity associated with the investment. |
| `IS_CALC_PV_INFO` | NUMERIC | NOT NULL | This column indicates if the financial metrics viz. NPV, ROI, Breakeven Date, IRR, MIRR and Payback Period values are calculated or entered manually. |
| `IS_FCST_EQ_BDGT` | NUMERIC | NOT NULL | Indicates if the forecasted costs, benefits, and other financial values are equal to and driven by the corresponding budgeted values. |
| `BUDGET_CST_TOTAL` | NUMERIC | NULL | The budgeted costs for this project (or any other investment). |
| `BUDGET_CST_START` | DATE | NULL | This column indicates when the budgeted costs should begin. |
| `BUDGET_CST_FINISH` | DATE | NULL | This column indicates when the budgeted costs should end. |
| `BUDGET_CST_ONHOLD` | DATE | NULL | If an "on-hold" status occurs, this column indicates when the budgeted costs went on hold. |
| `BUDGET_CST_RESUME` | DATE | NULL | If an "on-hold" status occurs, this column indicates when the interrupted budgeted costs will resume. |
| `BUDGET_REV_TOTAL` | NUMERIC | NULL | The budgeted monetary benefits for this project (or some other investment). |
| `BUDGET_REV_START` | DATE | NULL | This column indicates when the budgeted monetary benefits should begin. |
| `BUDGET_REV_FINISH` | DATE | NULL | Indicates when the budgeted monetary benefits should end. |
| `BUDGET_REV_ONHOLD` | DATE | NULL | If an "on-hold" status occurs, this column indicates when the budgeted monetary benefits were stopped. |
| `BUDGET_REV_RESUME` | DATE | NULL | If an "on-hold" status occurs, this column indicates when the budgeted monetary benefits should resume. |
| `BUDGET_NPV` | NUMERIC | NULL | The net present value (NPV) as calculated from the budgeted costs and budgeted benefits. |
| `BUDGET_ROI` | NUMERIC | NULL | The return on investment as calculated from the budgeted costs and budgeted benefits. |
| `BUDGET_BREAKEVEN` | DATE | NULL | The budgeted break even date. |
| `FORECAST_CST_TOTAL` | NUMERIC | NULL | This column defines the forecast cost for this project or total cost from latest forecast revision. |
| `FORECAST_CST_START` | DATE | NULL | This column defines the value that is the start date of the latest Forecast revision when financial plans exist. When no financial plans exist, this column indicates when the forecast costs are expected to start. |
| `FORECAST_CST_FINISH` | DATE | NULL | This column defines the finish date of the latest Forecast revision when financial plans exist or when no financial plans exist. The column indicates when the forecast costs are expected to finish. |
| `FORECAST_CST_ONHOLD` | DATE | NULL | If an "on-hold" status occurs, this column indicates when the forecast costs where interrupted. |
| `FORECAST_CST_RESUME` | DATE | NULL | If an "on-hold" status occurs, this column indicates when the forecast costs are expected to resume. |
| `FORECAST_REV_TOTAL` | NUMERIC | NULL | This column defines the total cost from latest forecast revision when financial plans exist otherwise indicates the forecasted monetary benefits for this project (or some other investment). |
| `FORECAST_REV_START` | DATE | NULL | This column defines the start date of benefit plan associated to latest forecast revision when financial plans exist. Otherwise indicates when the forecasted monetary benefits are expected to begin. |
| `FORECAST_REV_FINISH` | DATE | NULL | This column defines the finish date of benefit plan associated to latest forecast revision when financial plans exist. Otherwise indicates when the forecasted monetary benefits are expected to end. |
| `FORECAST_REV_ONHOLD` | DATE | NULL | If an "on-hold" status occurs, this column indicates when the forecasted monetary benefits were stopped. |
| `FORECAST_REV_RESUME` | DATE | NULL | If an "on-hold" status occurs, this column indicates when the forecast monetary benefits are expected to resume. |
| `FORECAST_NPV` | NUMERIC | NULL | The net present value as calculated from the forecasted costs and forecasted benefits. |
| `FORECAST_ROI` | NUMERIC | NULL | The return on investment as calculated from the forecasted costs and forecasted benefits. |
| `FORECAST_BREAKEVEN` | DATE | NULL | The date on which the cumulative forecasted benefits surpass the cumulative forecasted costs. |
| `PLANNED_CST_TOTAL` | NUMERIC | NULL | The planned cost for simple budgeting – user entered |
| `PLANNED_CST_START` | DATE | NULL | The planned cost start date. |
| `PLANNED_CST_FINISH` | DATE | NULL | The Planned finish date. |
| `PLANNED_BEN_TOTAL` | NUMERIC | NULL | The planned benefit for simple budgeting. |
| `PLANNED_BEN_START` | DATE | NULL | The planned benefit start date. |
| `PLANNED_BEN_FINISH` | DATE | NULL | The planned benefit finish date. |
| `PLANNED_NPV` | NUMERIC | NULL | NPV – Net present Value – currently calculated based on IS_CALC_BUDGET_NPV. In future, this will be based on Planned Cost and Planned Benefit |
| `PLANNED_ROI` | NUMERIC | NULL | The return on investment as calculated from the planned costs and planned benefits. |
| `PLANNED_BREAKEVEN` | DATE | NULL | The planned break even date. |
| `PLANNED_COST` | BINARY | NULL | This column defines the time varying cost from Plan Of Record Cost Plan. |
| `PLANNED_BENEFIT` | BINARY | NULL | This column defines the time-varying planned revenue from benefit plan associated with cost plan. |
| `BUDGET_COST` | BINARY | NULL | This column defines the time-varying cost from approved budget plan. |
| `BUDGET_BENEFIT` | BINARY | NULL | This column defines the time-varying planned revenue from benefit plan associated with approved budget plan. |
| `FORECAST_COST` | BINARY | NULL | This column defines the time-varying forecast cost from latest forecast revision. |
| `FORECAST_BENEFIT` | BINARY | NULL | This column defines the time-varying planned revenue from benefit plan associated with latest forecast revision. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `ODF_SS_FORECAST_BENEFIT` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_BENEFIT` | NUMERIC | NULL |  |
| `ODF_SS_PLAN_BENEFIT` | NUMERIC | NULL |  |
| `ODF_SS_FORECAST_COST` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_COST` | NUMERIC | NULL |  |
| `ODF_SS_PLAN_COST` | NUMERIC | NULL |  |
| `IS_SYS_VAL_FOR_TCC` | INTEGER | NOT NULL | This column indicates whether or not this investment will use the system-defined total cost of capital % for financial metrics calculations. Values are: 0 = False 1 = True, Default = 1 |
| `TOTAL_COST_OF_CAPITAL` | FLOAT | NULL | This column defines the investment-specific total cost of capital % that will be used for financial metrics calculations based on value of IS_SYS_VAL_FOR_TCC. |
| `IS_SYS_VAL_FOR_RR` | INTEGER | NOT NULL | This column indicates whether or not this investment will use the system-defined reinvestment rate % for financial metrics calculations. Values are: 0 = False 1 = TrueDefault = 1 |
| `REINVESTMENT_RATE` | FLOAT | NULL | This column defines the investment-specific reinvestment rate % that will be used for financial metrics calculations based on value of IS_SYS_VAL_FOR_RR. |
| `INITIAL_INVESTMENT` | NUMERIC | NULL | This column refers to the initial lumpsum cost associated with an investment |
| `BUDGET_IRR` | NUMERIC | NULL | This column defines the Internal Rate of Return on investment as calculated from the budgeted costs and budgeted benefits. |
| `BUDGET_MIRR` | NUMERIC | NULL | This column defines the modified Internal Rate of Return on investment as calculated from the budgeted costs and budgeted benefits. |
| `BUDGET_PAYBACK_PERIOD` | NUMERIC | NULL | This column defines the Payback Period of investment as calculated from the budgeted costs and budgeted benefits. |
| `FORECAST_IRR` | NUMERIC | NULL | This column defines the Internal Rate of Return on investment as calculated from the forecasted costs and forecasted benefits. |
| `FORECAST_MIRR` | NUMERIC | NULL | This column defines the modified Internal Rate of Return on investment as calculated from the forecasted costs and forecasted benefits. |
| `FORECAST_PAYBACK_PERIOD` | NUMERIC | NULL | This column defines the Payback Period of investment as calculated from the forecasted costs and forecasted benefits. |
| `PLANNED_IRR` | NUMERIC | NULL | This column defines the Internal Rate of Return on investment as calculated from the planned costs and planned benefits. |
| `PLANNED_MIRR` | NUMERIC | NULL | This column defines the modified Internal Rate of Return on investment as calculated from the planned costs and planned benefits. |
| `PLANNED_PAYBACK_PERIOD` | NUMERIC | NULL | This column defines the Payback Period of investment as calculated from the planned costs and planned benefits. |
| `PLANNED_CST_CAPITAL_TOTAL` | NUMERIC | NULL | This column refers to the planned capital cost of an investment. |
| `PLANNED_CST_OPERATING_TOTAL` | NUMERIC | NULL | This column refers to the planned operating cost of an investment. |
| `PLANNED_COST_CAPITAL` | BINARY | NULL | This column refers to the time varying capital cost from Plan Of Record Cost Plan. |
| `PLANNED_COST_OPERATING` | BINARY | NULL | This column refers to the time varying operating cost from Plan Of Record Cost Plan. |
| `BUDGET_CST_CAPITAL_TOTAL` | NUMERIC | NULL | This column refers to the budgeted capital cost of an investment. |
| `BUDGET_CST_OPERATING_TOTAL` | NUMERIC | NULL | This column refers to the budgeted operating cost of an investment. |
| `BUDGET_COST_CAPITAL` | BINARY | NULL | This column refers to the time-varying capital cost from approved budget plan. |
| `BUDGET_COST_OPERATING` | BINARY | NULL | This column refers to the time-varying operating cost from approved budget plan. |
| `PLANNED_ACTUAL_BENEFIT` | BINARY | NULL | This column refers to the time-varying actual revenue from benefit plan associated with cost plan. |
| `BUDGET_ACTUAL_BENEFIT` | BINARY | NULL | This column refers to the time-varying actual revenue from benefit plan associated with approved budget plan. |
| `PLANNED_ACTUAL_BENEFIT_TOTAL` | NUMERIC | NULL | This column specifies to the planned actual benefit of an investment. |
| `BUDGET_ACTUAL_BENEFIT_TOTAL` | NUMERIC | NULL | This column refers to the budgeted actual benefit of an investment. |
| `ODF_SS_PLAN_COST_OP` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_COST_OP` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_ACTUAL_BENEFIT` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_COST_CAP` | NUMERIC | NULL |  |
| `ODF_SS_PLAN_COST_CAP` | NUMERIC | NULL |  |
| `ODF_SS_PLAN_ACTUAL_BENEFIT` | NUMERIC | NULL |  |
| `ACTUAL_CST` | BINARY | NULL | The time-sliced value of the investment's actual cost value. |
| `ACTUAL_CST_CAPITAL` | BINARY | NULL | The time-sliced value of the investment's actual capital cost value. |
| `ACTUAL_CST_OPERATING` | BINARY | NULL | The time-sliced value of the investment's actual operating cost value. |
| `FORECAST_CST` | BINARY | NULL | The time-sliced value of the investment's forecast cost value. |
| `FORECAST_CST_CAPITAL` | BINARY | NULL | The time-sliced value of the investment's forecast capital cost value. |
| `FORECAST_CST_OPERATING` | BINARY | NULL | The time-sliced value of the investment's forecast operating cost value. |
| `ODF_NK_PLANNED_COST` | NVARCHARMAX | NULL | SqlCurve version of the investment's planned cost value. |
| `ODF_NK_PLANNED_COST_CAPITAL` | NVARCHARMAX | NULL | SqlCurve version of the investment's planned capital cost value. |
| `ODF_NK_PLANNED_COST_OPERATING` | NVARCHARMAX | NULL | SqlCurve version of the investment's planned operating cost value. |
| `ODF_NK_ACTUAL_CST` | NVARCHARMAX | NULL | SqlCurve version of the investment's actual cost value. |
| `ODF_NK_ACTUAL_CST_CAPITAL` | NVARCHARMAX | NULL | SqlCurve version of the investment's actual capital cost value. |
| `ODF_NK_ACTUAL_CST_OPERATING` | NVARCHARMAX | NULL | SqlCurve version of the investment's actual operating cost value. |
| `ODF_NK_FORECAST_CST` | NVARCHARMAX | NULL | SqlCurve version of the investment's forecast cost value. |
| `ODF_NK_FORECAST_CST_CAPITAL` | NVARCHARMAX | NULL | SqlCurve version of the investment's forecast capital cost value. |
| `ODF_NK_FORECAST_CST_OPERATING` | NVARCHARMAX | NULL | SqlCurve version of the investment's forecast operating cost value. |
| `ODF_NK_BUDGET_COST` | NVARCHARMAX | NULL | SqlCurve version of the investment's budget cost value. |
| `ODF_NK_BUDGET_COST_CAPITAL` | NVARCHARMAX | NULL | SqlCurve version of the investment's budget capital cost value. |
| `ODF_NK_BUDGET_COST_OPERATING` | NVARCHARMAX | NULL | SqlCurve version of the investment's budget operating cost value. |
| `ACTUALS_OUT_OF_DATE` | INTEGER | NOT NULL | This column indicates that the actuals are out-of-date and need to be re-populated. |
| `CURRENT_PERIOD_START_DATE` | DATE | NULL | Start date of the current period based on the plan's period type |
| `ODF_SS_FCST_CST_CAP` | NUMERIC | NULL |  |
| `ODF_SS_FCST_CST_OP` | NUMERIC | NULL |  |
| `ODF_SS_ACTUAL_CST_CAP` | NUMERIC | NULL |  |
| `ODF_SS_ACTUAL_CST` | NUMERIC | NULL |  |
| `ODF_SS_ACTUAL_CST_OP` | NUMERIC | NULL |  |
| `ODF_SS_FCST_CST` | NUMERIC | NULL |  |
| `ODF_NK_PLANNED_BENEFIT` | NVARCHARMAX | NULL | SqlCurve version of the investment's planned benefit value. |
| `ODF_NK_PLANNED_ACTUAL_BENEFIT` | NVARCHARMAX | NULL | SqlCurve version of the investment's planned actual benefit value. |
| `ODF_NK_BUDGET_BENEFIT` | NVARCHARMAX | NULL | SqlCurve version of the investment's budgeted benefit value. |
| `ODF_NK_BUDGET_ACTUAL_BENEFIT` | NVARCHARMAX | NULL | SqlCurve version of the investment's budgeted actual benefit value. |
| `PLANNED_REVENUE` | BINARY | NULL | The time-sliced value of the investment's planned revenue value. |
| `ACTUAL_REVENUE` | BINARY | NULL | The time-sliced value of the investment's actual revenue value. |
| `BUDGET_REVENUE` | BINARY | NULL | The time-sliced value of the investment's budget revenue value. |
| `BUDGET_ACTUAL_REVENUE` | BINARY | NULL | The time-sliced value of the investment's budget actual revenue value. |
| `ODF_NK_PLANNED_REVENUE` | NVARCHARMAX | NULL | SqlCurve version of the investment's planned revenue value. |
| `ODF_NK_ACTUAL_REVENUE` | NVARCHARMAX | NULL | SqlCurve version of the investment's actual revenue value. |
| `ODF_NK_BUDGET_REVENUE` | NVARCHARMAX | NULL | SqlCurve version of the investment's budget revenue value. |
| `ODF_NK_BUDGET_ACTUAL_REVENUE` | NVARCHARMAX | NULL | SqlCurve version of the investment's budget actual revenue value. |
| `ODF_SS_PLANNED_REVENUE` | INTEGER | NULL | Slice status for the planned revenue. |
| `ODF_SS_ACTUAL_REVENUE` | INTEGER | NULL | Slice status for the actual revenue. |
| `ODF_SS_BUDGET_REVENUE` | INTEGER | NULL | Slice status for the budget revenue. |
| `ODF_SS_BUDGET_ACTUAL_REVENUE` | INTEGER | NULL | Slice status for the budget actual revenue. |
| `ODF_SS_ACTUAL_REV` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_ACTUAL_REV` | NUMERIC | NULL |  |
| `ODF_SS_PLAN_REV` | NUMERIC | NULL |  |
| `ODF_SS_INV_BUDGET_REVENUE` | NUMERIC | NULL |  |
| `PLANNED_UNITS` | BINARY | NULL | The time-sliced value of the investment's planned units value. |
| `ACTUAL_UNITS` | BINARY | NULL | The time-sliced value of the investment's actual units value. |
| `BUDGET_UNITS` | BINARY | NULL | The time-sliced value of the investment's budget units value. |
| `ODF_NK_PLANNED_UNITS` | NVARCHARMAX | NULL | SqlCurve version of the investment's planned units value. |
| `ODF_NK_ACTUAL_UNITS` | NVARCHARMAX | NULL | SqlCurve version of the investment's actual units value. |
| `ODF_NK_BUDGET_UNITS` | NVARCHARMAX | NULL | SqlCurve version of the investment's budget units value. |
| `ODF_SS_PLANNED_UNITS` | INTEGER | NULL | Slice status for the planned units. |
| `ODF_SS_ACTUAL_UNITS` | INTEGER | NULL | Slice status for the actual units. |
| `ODF_SS_BUDGET_UNITS` | INTEGER | NULL | Slice status for the budget units. |
| `ODF_SS_PLAN_UNITS` | NUMERIC | NULL |  |
| `ODF_SS_SQLCURVE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CLNTSUPP]], [[CMN_SEC_USERS]], [[DEPARTMENTS]], [[DPT_KEYMETRICS]], [[DPT_SUBSCRIPTIONS]], [[ENTITY]], [[INV_APPLICATIONS]], [[INV_ASSETS]], [[INV_HIERARCHIES]], [[INV_IDEAS]], [[INV_INVESTMENTS]], [[INV_OTHERS]], [[INV_PRODUCTS]], [[INV_PROJECTS]], [[INV_SERVICES]], [[LOCATIONDEPT]], [[LOCATIONS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]]
