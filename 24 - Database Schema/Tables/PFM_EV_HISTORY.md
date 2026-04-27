---
title: PFM_EV_HISTORY
type: db-table
table: PFM_EV_HISTORY
columns: 32
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

# PFM_EV_HISTORY

> [!info] Description
> This table contains copy of EV data from PRJ_EV_HISTORY.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Specifies the ID of investment in the context of a portfolio. |
| `PERIOD_NUMBER` | NUMERIC | NULL | This column refers to the position in a group of historical rows for a given project. Periods start with 1 and increment as new periods are added. Note that the period number is per project so each project will have a period 1, 2, 3, and so on. |
| `PERIOD_INTERVAL` | NVARCHAR | NULL | This column refers to a row in EVM_PERIOD_DEFS by code. Defines which period definition was used to generate this snapshot. |
| `PERIOD_INTERVAL_ID` | NUMERIC | NULL |  |
| `IS_PROJECTED` | NUMERIC | NOT NULL | Indicates whether EVA columns (i.e., BCWP, BCWS and ACWP) represent a projected value after the date when the row was written or an actual value calculated from the plan. |
| `PERIOD_START_DATE` | DATE | NULL | This column refers to the starting date for this period. Typically periods are set up on a monthly interval so this date will typically be the first day of a given month. |
| `PERIOD_END_DATE` | DATE | NULL | This column refers to the ending date for this period. Typically periods are set up on a monthly interval so this date will typically be the last day of a given month. |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to the project for which this period is associated. |
| `OBJECT_ID` | NUMERIC | NULL | This refers to a row in either the project or task table depending on the type of object this row represents. |
| `OBJECT_TYPE` | NVARCHAR | NULL | Determines which object this row represents. Values are: - PROJECT - TASK |
| `START_DATE` | DATE | NULL | The date the object was scheduled to start when this row was written. |
| `FINISH_DATE` | DATE | NULL | This column refers to the date the object was scheduled to finish when this row was written. |
| `BASE_START_DATE` | DATE | NULL | The baseline starting date for the object that this row represents. The object can be a project or task. |
| `BASE_FINISH_DATE` | DATE | NULL | The baseline finish date for the object that this row represents. The object can be a project or task. |
| `EXP_FINISH_DATE` | DATE | NULL | A calculated finish date for the object based on Earned Value Analysis (EVA) columns. |
| `PCTCOMPLETE` | FLOAT | NULL | The percentage complete for the object at the time this row was saved. |
| `BAC` | NUMERIC | NULL |  |
| `ETC` | NUMERIC | NULL | The Estimate To Complete (ETC) for the object at the time the row was created. |
| `ITD_ACWP` | NUMERIC | NULL | The total cost of actual work performed to date for the object at the time the row was added. |
| `ITD_BCWP` | NUMERIC | NULL | The total budgeted cost of work performed to date for the object at the time the row was added. |
| `ITD_BCWS` | NUMERIC | NULL | The total budgeted cost of work scheduled to date for the object at the time the row was added. |
| `ITD_ACTSUM` | NUMERIC | NULL | The total actual work (in seconds) to date on the object when the row was added. |
| `ITD_ESTSUM` | NUMERIC | NULL | The total remaining work (in seconds) to date for the object when the row was written. |
| `PTD_ACWP` | NUMERIC | NULL | The change in ACWP for the object since the last period row was written. |
| `PTD_BCWP` | NUMERIC | NULL | The change in BCWP for the object since the last period row was written. |
| `PTD_BCWS` | NUMERIC | NULL | The change in BCWS for the object since the last period row was written. |
| `PTD_ACTSUM` | NUMERIC | NULL | The change in total actual work (in seconds) for the object since the last period row was written. |
| `PTD_ESTSUM` | NUMERIC | NULL | The change in total remaining work (in seconds) for the object since the last period row was written. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
