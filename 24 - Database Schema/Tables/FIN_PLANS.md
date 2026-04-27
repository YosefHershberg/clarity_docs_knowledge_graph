---
title: FIN_PLANS
type: db-table
table: FIN_PLANS
columns: 52
audience: dev
domain: development
canonical: true
erds:
  - Financial Planning
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/financial-planning
---

# FIN_PLANS

> [!info] Description
> This table stores the properties of the plans in the system.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 09 - Finance]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the plan. |
| `NAME` | NVARCHAR | NOT NULL | The name of the financial plan. |
| `CODE` | NVARCHAR | NOT NULL | The ID of the financial plan. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | The object ID for which the plan was created. |
| `OBJECT_ID` | NUMERIC | NOT NULL | The object for which the plan was created. This value refers to the internal ID of the object instance. |
| `REVISION` | NUMERIC | NOT NULL | The plan revision. |
| `DESCRIPTION` | NVARCHAR | NULL | The description of the financial plan. |
| `PLAN_TYPE_CODE` | NVARCHAR | NULL | This column indicates the plan type. Values can be either budget or forecast. These values correspond with the lookup values from lookup type FIN_PLAN_TYPE. |
| `SUB_PLAN_TYPE` | NUMERIC | NULL | The sub type of the plan. This indicates if the plan is a cost plan or a benefit plan. |
| `PERIOD_TYPE_CODE` | NVARCHAR | NULL | This column indicates the plan period type. The value correspond with the lookup type values from lookup type "PERIOD_TYPE." |
| `START_PERIOD_ID` | NUMERIC | NOT NULL | The starting time period of the plan. This refers to the internal ID column of the BIZ_COM_PERIODS table. |
| `END_PERIOD_ID` | NUMERIC | NOT NULL | The end time period of the plan. This value refers to the internal ID column of the BIZ_COM_PERIODS table. |
| `BENEFIT_PLAN_ID` | NUMERIC | NULL | The benefit plan ID with which this plan is associated. This value refers to the internal ID of the table FIN_PLANS. |
| `PLAN_BY_1_CODE` | NVARCHAR | NULL |  |
| `PLAN_BY_2_CODE` | NVARCHAR | NULL |  |
| `STATUS_CODE` | NVARCHAR | NULL | The status of the plan. Values are: - 0 = Not submitted - 1 = Submitted - 2 = Approved |
| `IS_PLAN_OF_RECORD` | INTEGER | NULL | This column indicates if the plan is the plan of record. |
| `UNITS` | BINARY | NULL | The time-scaled value of the plan units. |
| `COST` | BINARY | NULL | The time-scaled value of the planned cost amount. |
| `REVENUE` | BINARY | NULL | The time-scaled value of the planned revenue amount. |
| `BENEFIT` | BINARY | NULL | The time-sliced value of planned benefit amount. |
| `ACTUAL_BENEFIT` | BINARY | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This value refers to [[CMN_SEC_USERS]].ID. |
| `TOTAL_COST` | NUMERIC | NULL | The total planned cost amount. |
| `TOTAL_UNITS` | NUMERIC | NULL | The total planed units. |
| `TOTAL_REVENUE` | NUMERIC | NULL | The total planned revenue amount. |
| `TOTAL_BENEFIT` | NUMERIC | NULL | The total planned benefit amount. |
| `TOTAL_ACTUAL_BENEFIT` | NUMERIC | NULL | This numeric column represents the total actual benefit for a line item of a benefit plan. |
| `TOTAL_BILLING_BENEFIT` | NUMERIC | NULL | The total benefit amount in billing currency. |
| `AGG_START_PERIOD_ID` | NUMERIC | NULL |  |
| `AGG_END_PERIOD_ID` | NUMERIC | NULL |  |
| `AGG_UNITS` | BINARY | NULL |  |
| `AGG_COST` | BINARY | NULL |  |
| `AGG_REVENUE` | BINARY | NULL |  |
| `AGG_BENEFIT` | BINARY | NULL |  |
| `AGG_TOTAL_COST` | NUMERIC | NULL |  |
| `AGG_TOTAL_UNITS` | NUMERIC | NULL |  |
| `AGG_TOTAL_REVENUE` | NUMERIC | NULL |  |
| `AGG_TOTAL_BENEFIT` | NUMERIC | NULL |  |
| `AGG_NPV` | NUMERIC | NULL |  |
| `AGG_ROI` | NUMERIC | NULL |  |
| `AGG_BREAKEVEN` | DATE | NULL |  |
| `SOURCE_COST_PLAN_ID` | NUMERIC | NULL | The internal reference to the most recent cost plan that was submitted for budget approval. |
| `BUDGET_SUBMIT_OPTION` | NVARCHAR | NULL | This column identifies how a budget revision has been created, from merged changes or by replacing the budget plan. |
| `ACTUALS_OUT_OF_DATE` | INTEGER | NOT NULL | This column indicates that the actuals are out-of-date and need to be re-populated. |
| `CURRENT_PERIOD_START_DATE` | DATE | NULL | Start date of the current period based on the plan's period type |
| `FORECAST_CUTOVER` | DATE | NULL | The cutover date that should used for forecast calculation |
| `ACTUAL_FROM_CHILDREN` | INTEGER | NOT NULL | This column indicates the current plan to consider the actuals from all its children determined by the Parent attribute on investment. |
| `ROLLUP_ACTUALS_BY_TEAM` | INTEGER | NOT NULL | This column value is used for displaying current plans actuals rolled up by team if the team assigned transactions posted by staff resource are available. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[LOCATIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[PRCHARGECODE]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]]
