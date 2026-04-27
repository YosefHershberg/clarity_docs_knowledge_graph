---
title: PFM_BASELINE_DETAILS
type: db-table
table: PFM_BASELINE_DETAILS
columns: 23
audience: dev
domain: development
canonical: true
erds:
  - Portfolios
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/portfolios
---

# PFM_BASELINE_DETAILS

> [!info] Description
> This table contains copy of baseline details for the investment in the context of a portfolio.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Specifies the ID of investment in context of portfolio. |
| `BASELINE_ID` | NUMERIC | NULL | This refers to a baseline revision row in the PRJ_BASELINES table of which this detail row is a member. |
| `OBJECT_ID` | NUMERIC | NULL | This refers to a row in the project, task, assignment or team table to which this baseline detail is related. |
| `OBJECT_TYPE` | NVARCHAR | NULL | The constant for the object this baseline detail is for. Values are: - ASSIGNMENT - PROJECT - TASK - TEAM |
| `USAGE_SUM` | FLOAT | NULL | Total baselined effort (i.e., actual plus the remaining work) in seconds. |
| `COST_SUM` | NUMERIC | NULL | The total baselined cost for the effort (i.e., the cost of the actual work plus the cost of remaining work). |
| `START_DATE` | DATE | NULL | The baselined start date of the object. |
| `FINISH_DATE` | DATE | NULL | The baselined finish date of the object. |
| `DURATION` | FLOAT | NULL | The baselined duration of the object. |
| `PREXTENSION` | BINARY | NULL | The curves for the baselined effort and the cost of the object. |
| `MSP_DIRTY` | NUMERIC | NOT NULL | Used for integration with Microsoft Project. When this column is non-zero, it indicates a change has been made to the row since the project was last opened in Microsoft Project. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `IS_CURRENT` | NUMERIC | NULL | Indicates if this row is part of a baseline revision currently marked as the current or active revision. |
| `EVM_MR_SUM` | NUMERIC | NULL | This column defines the total management reserve for this object at the time the baseline was taken. |
| `EVM_UB_SUM` | NUMERIC | NULL | This column defines the total undistributed budget for this object at the time the baseline was taken. |
| `EVM_BURDEN_FEE` | NUMERIC | NULL | This column defines the total burdening value for burden type Fee at the time this baseline was taken. |
| `EVM_BURDEN_COM` | NUMERIC | NULL | This column defines the total burdening value for burden type Cost of Money at the time this baseline was taken. |
| `EVM_BURDEN_GA` | NUMERIC | NULL | This column defines the total burdening value for burden type GA at the time this baseline was taken. |
| `EVM_BURDEN_OVHD` | NUMERIC | NULL |  |
| `SLICE_STATUS` | NUMERIC | NULL | This column is used by the time slicing job. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
