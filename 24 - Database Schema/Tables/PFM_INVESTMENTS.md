---
title: PFM_INVESTMENTS
type: db-table
table: PFM_INVESTMENTS
columns: 149
audience: dev
domain: development
canonical: true
erds:
  - Portfolios
fk_targets:
  - CMN_SEC_USERS
  - ENTITY
  - PRCHARGECODE
  - PRJ_BASELINES
  - PRJ_OBS_UNITS
tags:
  - dev
  - schema
  - table
  - erd/portfolios
---

# PFM_INVESTMENTS

> [!info] Description
> This table contains copy of investment attributes in the context of a portfolio.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Specifies the ID of investment in the context of a portfolio. |
| `PORTFOLIO_ID` | NUMERIC | NOT NULL | Specifies the Key of the portfolio context. |
| `INVESTMENT_ID` | NUMERIC | NOT NULL | This column refers to the ID of the actual investment. |
| `PLAN_ID` | NUMERIC | NULL | Not used. |
| `SYNC_DATE` | DATE | NOT NULL | This column refers to the time stamp of the last sync or copy for this investment. |
| `PORT_INV_STATUS` | NUMERIC | NOT NULL | This column contains the investment status in the context of the portfolio (Approved/Unapproved). |
| `RESOURCE_DEMAND_CURVE` | BINARY | NULL | This column refers to the aggregate demand for resources on the investment |
| `RESOURCE_ACTUALS_CURVE` | BINARY | NULL | This column refers to the aggregate actuals for resources on the investment |
| `PLAN_CST_START` | DATE | NULL | The planned cost start date. |
| `PLAN_CST_FINISH` | DATE | NULL | The Planned finish date. |
| `PLAN_TTL_COST` | BINARY | NULL | This column contains a time varying curve representing total plan cost. |
| `PLAN_CAP_COST` | BINARY | NULL | This column contains a time varying curve representing planned capital cost. |
| `PLAN_OP_COST` | BINARY | NULL | This column contains a time varying curve representing planned operational cost |
| `PLANNED_NPV` | NUMERIC | NULL | Net present value (NPV) currently calculated based on IS_CALC_BUDGET_NPV. In the future, this will be based on Planned Cost and Planned Benefit |
| `PLANNED_ROI` | NUMERIC | NULL | The return on investment as calculated from the planned costs and planned benefits. |
| `PLANNED_BREAKEVEN` | DATE | NULL | The planned break even date. |
| `PLANNED_IRR` | NUMERIC | NULL | This column defines the Internal Rate of Return on investment as calculated from the planned costs and planned benefits. |
| `PLANNED_MIRR` | NUMERIC | NULL | This column defines the modified Internal Rate of Return on investment as calculated from the planned costs and planned benefits. |
| `PLANNED_PAYBACK_PERIOD` | NUMERIC | NULL | This column defines the Payback Period of investment as calculated from the planned costs and planned benefits. |
| `BUDGET_CST_START` | DATE | NULL | This column indicates when the budgeted costs should begin. |
| `BUDGET_CST_FINISH` | DATE | NULL | This column indicates when the budgeted costs should end. |
| `BUDGET_TTL_COST` | BINARY | NULL | This column contains a time varying curve representing budgeted total cost. |
| `BUDGET_CAP_COST` | BINARY | NULL | This column contains a time varying curve representing budgeted capital cost. |
| `BUDGET_OP_COST` | BINARY | NULL | This column contains a time varying curve representing budgeted operating cost. |
| `BUDGET_NPV` | NUMERIC | NULL | The net present value (NPV) as calculated from the budgeted costs and budgeted benefits. |
| `BUDGET_ROI` | NUMERIC | NULL | The return on investment as calculated from the budgeted costs and budgeted benefits. |
| `BUDGET_BREAKEVEN` | DATE | NULL | The budgeted break even date. |
| `BUDGET_IRR` | NUMERIC | NULL | This column defines the Internal Rate of Return on investment as calculated from the budgeted costs and budgeted benefits. |
| `BUDGET_MIRR` | NUMERIC | NULL | This column defines the modified Internal Rate of Return on investment as calculated from the budgeted costs and budgeted benefits. |
| `BUDGET_PAYBACK_PERIOD` | NUMERIC | NULL | This column defines the Payback Period of investment as calculated from the budgeted costs and budgeted benefits. |
| `PLAN_BENEFIT_START` | DATE | NULL | This column contains the start date of the planned benefit. |
| `PLAN_BENEFIT_FINISH` | DATE | NULL |  |
| `PLAN_BENEFIT` | BINARY | NULL | This column contains a time varying curve representing the planned benefit. |
| `REAL_PLAN_BENEFIT` | BINARY | NULL | This column contains a time varying curve representing the real planned benefit. |
| `BUDGET_BENEFIT_START` | DATE | NULL | This column contains the start date of the budgeted benefit plan. |
| `BUDGET_BENEFIT_FINISH` | DATE | NULL | The column contains the finish date of the budgeted benefit plan. |
| `BUDGET_BENEFIT` | BINARY | NULL | This column contains a time varying curve for the budgeted benefit. |
| `REAL_BUDGET_BENEFIT` | BINARY | NULL | This column contains a time varying curve for the real budgeted benefit. |
| `ACTUAL_TTL_COST` | BINARY | NULL | This column contains a time varying curve representing actual total cost. |
| `ACTUAL_CAP_COST` | BINARY | NULL | This column contains a time varying curve representing actual capital cost. |
| `ACTUAL_OP_COST` | BINARY | NULL | This column contains a time varying curve representing actual operating cost. |
| `INITIAL_INVESTMENT` | NUMERIC | NULL | This column contains a money amount representing an initial investment in the investment. |
| `TOTAL_COST_OF_CAPITAL` | NUMERIC | NULL | This column defines the investment-specific total cost of capital % that will be used for financial metrics calculations based on value of IS_SYS_VAL_FOR_TCC. |
| `REINVESTMENT_RATE` | NUMERIC | NULL | This column defines the investment-specific reinvestment rate % that will be used for financial metrics calculations based on value of IS_SYS_VAL_FOR_RR. |
| `ODF_OBJECT_CODE` | NVARCHAR | NULL | The ODF object code that identifies the specific investment type (for example, project, application, asset.) |
| `NAME` | NVARCHAR | NULL | The name of the object or entity for which data is being entered. While a project, resource, charge code, and type code is user-entered, a list name is generated by the system. For the PRServer and PRAgent columns, it is an alias for the server or agent. |
| `CODE` | NVARCHAR | NULL | The unique identifier for an investment that can be displayed. This can be either user-entered or generated by the Autonumber feature. |
| `DESCRIPTION` | NVARCHAR | NULL | The description for the investment. |
| `IDEA_ID` | NUMERIC | NULL | This column refers to the ID of the idea, if any, that was converted into this investment. This column refers to PMA_IDEAS.ID. |
| `PROCESS_CODE` | NVARCHAR | NULL | This column refers to STAGE_CODE. This is the process that contains the selected stage. |
| `STAGE_CODE` | NVARCHAR | NULL | The current stage of this investment in the process that it is following, if any. This is driven by the "Investment Type" lookup at the investment stage level. |
| `GOAL_CODE` | NVARCHAR | NULL | This column represents the goal that this investment is most aligned with.The value is driven by the "Investment Goal" lookup, which can be configured. |
| `ALIGNMENT` | NUMERIC | NULL | The alignment score for this investment. |
| `RISK` | NUMERIC | NULL | This column refers to the aggregate risk score based on the average of contributing risk factors. |
| `STATUS_INDICATOR` | NUMERIC | NULL | A "Green," "Yellow," or "Red" value that indicates the overall status of the project (or some other investment). This refers to the INVESTMENT_STATUS_INDICATOR lookup. |
| `STATUS_COMMENT` | NVARCHAR | NULL | A comment that describes the overall status of the investment. |
| `PROGRESS` | NUMERIC | NULL | This column indicates the progress status of this investment (not started, started, or completed). This column is driven by the investment's object progress lookup. |
| `STATUS` | NUMERIC | NULL | The approval status of the project (or some other investment). It is driven by the investment's object state lookup. |
| `MANAGER_ID` | NUMERIC | NULL | The user who is the manager of the project. This refers to [[CMN_SEC_USERS]].ID. |
| `CURRENCY_CODE` | NVARCHAR | NULL | The ISO 3-letter currency code. |
| `APPROVEDBY_ID` | NUMERIC | NULL | The user who approved this investment. If the investment is not approved, this column is left blank. The column refers to [[CMN_SEC_USERS]].ID. |
| `APPROVEDTIME` | DATE | NULL | The date and time your organization approved the implementation of the investment. |
| `IS_REQUIRED` | NUMERIC | NULL | Indicates if the investment is required for portfolio management scenarios. |
| `PRIORITY` | NUMERIC | NULL | This column applies to Niku 6 only. This value is used when searching for resources to allocate to higher priority investments. The value can range from 0 - 36, where 0 is the highest priority. The default priority is 10. |
| `IS_ACTIVE` | NUMERIC | NULL | This column indicates if the investment is active. Values are: - 0 = Inactive - 1 = Active |
| `PURGE_FLAG` | NUMERIC | NULL | This column indicates whether the investment has been marked for deletion. If marked for deletion, the investment's background process will delete it. |
| `SLICE_STATUS` | NUMERIC | NULL | This column indicates if the information in this table is out-of-date, currently updating, or up-to-date. Values are: - Null = Up-to-date - 1 = Out-of-date with the PRJ_BLB_SLICES table - 2 = Time slicing background process is currently updating the PRJ_BLB_SLICES table |
| `TRACK_MODE` | NUMERIC | NULL | This column indicates the type of timesheet used for tracking time to this investment. Values are: - None - Clarity - Other |
| `CHARGECODEID` | NUMERIC | NULL | This refers to [[PRCHARGECODE]].PRID. It is used to associate an object with a charge code. |
| `IS_OPEN_FOR_TE` | NUMERIC | NULL | This column indicates whether actuals can be entered against an investment. Values are: - 0 = Actuals cannot be entered - 1 = Actuals can be entered |
| `BASELINE_ID` | NUMERIC | NULL | This column refers to [[PRJ_BASELINES]].ID. It represents the current project baseline. |
| `RSF_OBS_UNIT` | NUMERIC | NULL | This column refers to the default staffing OBS Unit for this project. This refers to [[PRJ_OBS_UNITS]].ID. |
| `AGGR_BUDGET_COST` | FLOAT | NULL | Unused, Obsolete |
| `AGGR_BUDGET_COST_TSV` | BINARY | NULL | Unused, Obsolete |
| `AGGR_FORECAST_COST` | FLOAT | NULL | Unused, Obsolete |
| `AGGR_FORECAST_COST_TSV` | BINARY | NULL | Unused, Obsolete |
| `AGGR_ACTUAL_COST` | FLOAT | NULL | Unused, Obsolete |
| `AGGR_ACTUAL_COST_TSV` | BINARY | NULL | Unused, Obsolete |
| `AGGR_ETC` | FLOAT | NULL | Unused, Obsolete |
| `AGGR_ETC_TSV` | BINARY | NULL | Unused, Obsolete |
| `AGGR_EAC` | FLOAT | NULL | Unused, Obsolete |
| `AGGR_EAC_TSV` | BINARY | NULL | Unused, Obsolete |
| `AGGR_BASELINE_WORK` | FLOAT | NULL | Unused, Obsolete |
| `AGGR_BASELINE_WORK_TSV` | BINARY | NULL | Unused, Obsolete |
| `AGGR_ACTUAL_WORK` | FLOAT | NULL | Unused, Obsolete |
| `AGGR_ACTUAL_WORK_TSV` | BINARY | NULL | Unused, Obsolete |
| `AGGR_BDGT_BENEFIT` | FLOAT | NULL | Unused, Obsolete |
| `AGGR_BDGT_BENEFIT_TSV` | BINARY | NULL | Unused, Obsolete |
| `SLA_COMPLIANCE` | NUMERIC | NULL | The stoplight used to indicate the level of SLA compliance. Values are: - 0-33 = green - 34-67 = yellow - 68-100 = red |
| `LAST_AGGREGATED_DATE` | DATE | NULL | Unused. Obsolete. |
| `CBK_TYPE` | NVARCHAR | NULL | This column refers to the chargeback type. Values include: - STANDARD = Standard - INVESTMENT = Investment |
| `BILL_EXPENSE_TYPE` | NVARCHAR | NULL | The expense type. Values are: - CAPEXP = Capital Expense - DEPRECIATION = Depreciation |
| `CREATED_DATE` | DATE | NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NULL | This column refers to the resource that created this row. This refers to [[CMN_SEC_USERS]].ID.Red X (Checked): 1 |
| `LAST_UPDATED_DATE` | DATE | NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `SCHEDULE_START` | DATE | NULL | The investment start date. This date spans the earliest task start date and the earliest team allocation start date. |
| `SCHEDULE_FINISH` | DATE | NULL | The investment finish date. This date spans the latest task finish date and the latest team allocation finish date. |
| `SYNC_INV_N_BDG_DATES` | NUMERIC | NULL | Indicates if the planned cost (start/finish) dates should be kept in sync with the investment (start/finish) dates. Values are: - 0 = False - 1 = True |
| `LABOR_ETC_CURVE` | BINARY | NULL | This value is a time-varying "curve" representing the total ETC for all labor resources assigned to the investment team. The "curve" is stored as a BLOB and consists of 0 to n segments of ETC, representing the amount of ETC left for all labor resources assigned to the investment team. |
| `LABOR_ETCSUM` | FLOAT | NULL | This column is the sum of all ETC for labor resources assigned to the investment team. The value is stored in seconds. |
| `LABOR_ACT_CURVE` | BINARY | NULL | This value is a time-varying "curve" representing the total actuals posted for all labor resources assigned to the investment team. The "curve" is stored as a BLOB and consists of 0 to n segments of actuals, representing the amount of time posted for all labor resources assigned to the investment team. |
| `LABOR_ACTSUM` | FLOAT | NULL | The sum of all actuals posted by labor resources assigned to the investment team. The value is stored in seconds. |
| `LABOR_EAC_CURVE` | BINARY | NULL | This value is a time-varying "curve" representing the total EAC for all labor resources assigned to the investment team. The "curve" is stored as a BLOB and consists of 0 to n segments of EAC representing the amount of EAC left for all labor resources assigned to the investment team. |
| `LABOR_EACSUM` | FLOAT | NULL | This sum of all EAC for labor resources assigned to the investment team. The value is stored in seconds. |
| `LABOR_BASELINE_CURVE` | BINARY | NULL | This value is a time-varying "curve" representing the total baseline usage for all labor resources assigned to the investment team. The "curve" is stored as a BLOB and consists of 0 to n segments of baseline for all labor resources assigned to the investment team. |
| `LABOR_BASESUM` | FLOAT | NULL | This value is the sum of all baseline usages for labor resources assigned to the investment team. The value is stored in seconds. |
| `LABOR_VARIANCE_CURVE` | BINARY | NULL | This value is a time-varying "curve" representing the total baseline variance for all labor resources assigned to the investment team. The "curve" is stored as a BLOB and consists of 0 to n segments of variance for all labor resources assigned to the investment team. The variance is the EAC minus the baseline. |
| `LABOR_VARIANCESUM` | FLOAT | NULL | The sum of the baseline variance for all labor resources assigned to the investment team. The variance is the EAC minus the baseline. The value is stored in seconds. |
| `ENTITY_CODE` | NVARCHAR | NULL | This column refers to the investment's entity ([[ENTITY]].ENTITY) |
| `ODF_SS_LABOR_BASE` | NUMERIC | NULL | Not used. |
| `ODF_SS_LABOR_ACT` | NUMERIC | NULL | Not used. |
| `ODF_SS_LABOR_EAC` | NUMERIC | NULL | Not used. |
| `ODF_SS_LABOR_ETC` | NUMERIC | NULL | Not used. |
| `ODF_SS_LABOR_VARIANCE` | NUMERIC | NULL | Not used. |
| `TARGET_MANAGER_ID` | NUMERIC | NULL | Internal user only. |
| `ASSGN_POOL` | NUMERIC | NULL | The resources available when creating new assignments on an investment. The attribute has two possible values: Team Only and Resource Pool. Default is Team Only. When set to Team Only, the user will be limited to resources allocated to the investment. When set to Resource Pool, all resources in the system will be available (limited by security settings). |
| `TRACK_ASSGN_ONLY` | NUMERIC | NULL | This column controls the addition of unassigned tasks to a timesheet at the investment level. The value prevents implicit task assignment through the timesheet Add Task button. |
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

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `MANAGER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `APPROVEDBY_ID` | [[CMN_SEC_USERS]].`ID` | |
| `CHARGECODEID` | [[PRCHARGECODE]].`PRID` | |
| `BASELINE_ID` | [[PRJ_BASELINES]].`ID` | |
| `RSF_OBS_UNIT` | [[PRJ_OBS_UNITS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `ENTITY_CODE` | [[ENTITY]].`ENTITY` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
