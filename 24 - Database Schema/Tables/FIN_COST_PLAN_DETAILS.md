---
title: FIN_COST_PLAN_DETAILS
type: db-table
table: FIN_COST_PLAN_DETAILS
columns: 95
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

# FIN_COST_PLAN_DETAILS

> [!info] Description
> This table stores the time-sliced and monetary details of the cost plans or budget plans.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 09 - Finance]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `PLAN_ID` | NUMERIC | NOT NULL | The plan with which this detail is associated. This refers to the internal ID of the table FIN_PLANS. |
| `GL_ACCOUNT_ID` | NUMERIC | NULL | The internal ID of the table CBK_GL_ACCOUNT. |
| `UNITS` | BINARY | NULL | The time-sliced value of the plan detail line item units stored as a blob. |
| `COST` | BINARY | NULL | The time-sliced value of the plan detail line item cost amount. |
| `REVENUE` | BINARY | NULL | The time-sliced value of the plan detail's line item revenue. |
| `UNITS_ACTUAL` | BINARY | NULL | This column defines the actual units posted from transactions identified by plan by 1 and, if it exists, by 2. |
| `COST_ACTUAL` | BINARY | NULL | This column defines the cost of actuals posted from transactions identified by plan by 1, and if it exists, plan by 2. |
| `REVENUE_ACTUAL` | BINARY | NULL | This column defines the revenue of actual posted from transactions identified by plan by 1 and, if it exists, by 2. |
| `UNITS_VARIANCE` | BINARY | NULL | This column is not used. |
| `COST_VARIANCE` | BINARY | NULL | This column is not used. |
| `REVENUE_VARIANCE` | BINARY | NULL | This column is not used. |
| `PERCENTAGE` | NUMERIC | NULL | The percentage of the cost for the detail line item to the total plan cost. |
| `BILLING_COST` | BINARY | NULL | The time-sliced value of the plan detail line item cost in billing currency. |
| `BILLING_REVENUE` | BINARY | NULL | The time-sliced value of the plan detail line item revenue in billing currency. |
| `BILLING_COST_ACTUAL` | BINARY | NULL |  |
| `BILLING_REVENUE_ACTUAL` | BINARY | NULL |  |
| `BILLING_COST_VARIANCE` | BINARY | NULL |  |
| `BILLING_REVENUE_VARIANCE` | BINARY | NULL |  |
| `TOTAL_COST` | NUMERIC | NULL | The total plan detail line item cost. |
| `TOTAL_UNITS` | NUMERIC | NULL | The total plan detail line item units. |
| `TOTAL_REVENUE` | NUMERIC | NULL | The total plan detail line item revenue. |
| `TOTAL_COST_VARIANCE` | NUMERIC | NULL |  |
| `TOTAL_UNITS_VARIANCE` | NUMERIC | NULL |  |
| `TOTAL_REVENUE_VARIANCE` | NUMERIC | NULL |  |
| `TOTAL_BILLING_COST` | NUMERIC | NULL | The total cost amount for the plan detail's line item in billing currency. |
| `TOTAL_BILLING_REVENUE` | NUMERIC | NULL | The total revenue amount for the plan detail's line item in billing currency. |
| `TOTAL_COST_ACTUAL` | NUMERIC | NULL | This column defines the sum of cost of actual posted from transactions identified by plan by 1 and, if it exists, by 2. |
| `TOTAL_UNITS_ACTUAL` | NUMERIC | NULL | This column defines the sum of units of actual posted from transactions identified by plan by 1 and, if it exists, by 2. |
| `TOTAL_REVENUE_ACTUAL` | NUMERIC | NULL | This column defines the sum of revenue of actual posted from transactions identified by plan by 1 and, if it exists, by 2. |
| `TRANSACTION_CLASS_ID` | NUMERIC | NULL | The internal ID of the table TRANSCLASS. This is modified name for the column TRANSCLASS_ID in V12. |
| `ROLE_ID` | NUMERIC | NULL | This column refers to the internal ID of the table SRM_RESOURCES. This is modified name for the column PRROLE_ID in V12. |
| `CHARGE_CODE_ID` | NUMERIC | NULL | This column refers to the internal ID of the table PRCHARGECODE. This is modified name for the column PRCHARGECODE_ID in V12. |
| `LOV1_ID` | NUMERIC | NULL | The internal ID of the utility code 1. |
| `LOV2_ID` | NUMERIC | NULL | The internal ID of the utility code 2. |
| `SOURCE` | NVARCHAR | NOT NULL | This column identifies whether the cost plan detail row is created from resource plan or a regular cost plan. The possible values are COSTPLAN (default) and RESOURCEPLAN.XOG-in of a cost plan will populate this column as COSTPLAN. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | The resource that created this row. This refers to [[CMN_SEC_USERS]].ID. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `AGG_UNITS` | BINARY | NULL |  |
| `AGG_COST` | BINARY | NULL |  |
| `AGG_REVENUE` | BINARY | NULL |  |
| `AGG_UNITS_ACTUAL` | BINARY | NULL |  |
| `AGG_COST_ACTUAL` | BINARY | NULL |  |
| `AGG_REVENUE_ACTUAL` | BINARY | NULL |  |
| `AGG_UNITS_VARIANCE` | BINARY | NULL |  |
| `AGG_COST_VARIANCE` | BINARY | NULL |  |
| `AGG_REVENUE_VARIANCE` | BINARY | NULL |  |
| `AGG_TOTAL_COST` | NUMERIC | NULL |  |
| `AGG_TOTAL_UNITS` | NUMERIC | NULL |  |
| `AGG_TOTAL_REVENUE` | NUMERIC | NULL |  |
| `AGG_TOTAL_COST_ACTUAL` | NUMERIC | NULL |  |
| `AGG_TOTAL_UNITS_ACTUAL` | NUMERIC | NULL |  |
| `AGG_TOTAL_REVENUE_ACTUAL` | NUMERIC | NULL |  |
| `ODF_SS_BILL_COST` | NUMERIC | NULL |  |
| `ODF_SS_BILL_REVENUE` | NUMERIC | NULL |  |
| `ODF_SS_COST` | NUMERIC | NULL |  |
| `ODF_SS_REVENUE` | NUMERIC | NULL |  |
| `ODF_SS_UNITS` | NUMERIC | NULL |  |
| `INPUT_TYPE_CODE_ID` | NUMERIC | NULL | This column refers to the internal ID of the table PRTYPECODE. One of the additional grouping attributes for V13. |
| `LOCATION_ID` | NUMERIC | NULL | This column refers to the internal ID of the table LOCATIONS. One of the additional grouping attributes for V13. |
| `RESOURCE_ID` | NUMERIC | NULL | This column refers to the internal ID of the table SRM_RESOURCES. One of the additional grouping attributes for V13. |
| `RESOURCE_CLASS_ID` | NUMERIC | NULL | This column refers to the internal ID of the table PAC_FOS_RESOURCE_CLASS. One of the additional grouping attributes for V13. |
| `DEPARTMENT_ID` | NUMERIC | NULL | This column refers to the internal ID of the table DEPARTMENTS. One of the additional grouping attributes for V13. |
| `ODF_SS_COST_VARIANCE` | NUMERIC | NULL |  |
| `ODF_SS_REVENUE_ACTUAL` | NUMERIC | NULL |  |
| `ODF_SS_UNITS_VARIANCE` | NUMERIC | NULL |  |
| `ODF_SS_COST_ACTUAL` | NUMERIC | NULL |  |
| `ODF_SS_UNITS_ACTUAL` | NUMERIC | NULL |  |
| `ODF_SS_REVENUE_VARIANCE` | NUMERIC | NULL |  |
| `COST_TYPE_ID` | NUMERIC | NULL | This column refers to the cost type of every financial plan detail. |
| `ODF_NK_BILLING_COST` | NVARCHARMAX | NULL | SqlCurve version of bill_cost. |
| `ODF_NK_BILLING_REVENUE` | NVARCHARMAX | NULL | SqlCurve version of bill_revenue. |
| `ODF_NK_COST` | NVARCHARMAX | NULL | SqlCurve version of cost. |
| `ODF_NK_REVENUE` | NVARCHARMAX | NULL | SqlCurve version of revenue. |
| `ODF_NK_UNITS` | NVARCHARMAX | NULL | SqlCurve version of units. |
| `ODF_NK_COST_VARIANCE` | NVARCHARMAX | NULL | SqlCurve version of cost variance. |
| `ODF_NK_REVENUE_ACTUAL` | NVARCHARMAX | NULL | SqlCurve version of revenue actual. |
| `ODF_NK_UNITS_VARIANCE` | NVARCHARMAX | NULL | SqlCurve version of units variance. |
| `ODF_NK_COST_ACTUAL` | NVARCHARMAX | NULL | SqlCurve version of cost actual. |
| `ODF_NK_UNITS_ACTUAL` | NVARCHARMAX | NULL | SqlCurve version of units actual. |
| `ODF_NK_REVENUE_VARIANCE` | NVARCHARMAX | NULL | SqlCurve version of revenue variance. |
| `ODF_NK_FORECAST` | NVARCHARMAX | NULL | SqlCurve version of forecast. |
| `ODF_NK_FORECAST_VARIANCE` | NVARCHARMAX | NULL | SqlCurve version of forecast variance. |
| `FORECAST` | BINARY | NULL | The time-sliced value of the plan detail line item forecast amount. |
| `FORECAST_VARIANCE` | BINARY | NULL | The time-sliced value of the plan detail line item forecast variance amount. |
| `ODF_SS_FORECAST` | NUMERIC | NULL |  |
| `ODF_SS_FORECAST_VARIANCE` | NUMERIC | NULL |  |
| `DESCRIPTION` | NVARCHAR | NULL | The description of the financial plan detail. |
| `PARENT_DETAIL_ID` | NUMERIC | NULL | This column refers to the internal ID of the parent plan detail. |
| `BUDGET_DETAIL_ID` | NUMERIC | NULL | This column refers to the internal ID of the approved budget detail ID where the grouping attributes are matching with costplan detail ID. |
| `HASH` | NVARCHAR | NULL | Stores the hash of string that got generated from grouping attributes values. |
| `FIN_WORK_TYPE` | NUMERIC | NULL | This column refers to the internal ID of lookup value of lookup type Financial Work Type. |
| `ODF_SS_SQLCURVE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[LOCATIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[PRCHARGECODE]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]]
