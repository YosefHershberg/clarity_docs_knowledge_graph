---
title: PFM_FINANCIALS
type: db-table
table: PFM_FINANCIALS
columns: 12
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

# PFM_FINANCIALS

> [!info] Description
> This table contains copy of Financial data from FIN_FINANCIALS (Selected fields only).

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Specifies the ID of investment in the context of a portfolio. |
| `ODF_OBJECT_CODE` | NVARCHAR | NOT NULL | The ODF object code that identifies the specific type of investment (project, application, asset, etc.) |
| `IS_CALC_PV_INFO` | NUMERIC | NOT NULL | This column indicates if the financial metrics viz. NPV, ROI, Breakeven Date, IRR, MIRR and Payback Period values are calculated or entered manually. |
| `IS_FCST_EQ_BDGT` | NUMERIC | NOT NULL | Indicates if the forecasted costs, benefits, and other financial values are equal to and driven by the corresponding budgeted values. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `IS_SYS_VAL_FOR_TCC` | INTEGER | NOT NULL | This column indicates whether or not this investment will use the system-defined total cost of capital % for financial metrics calculations. Values are: - 0 = False - 1 = True, Default = 1 |
| `TOTAL_COST_OF_CAPITAL` | FLOAT | NULL | This column defines the investment-specific total cost of capital % that will be used for financial metrics calculations based on value of IS_SYS_VAL_FOR_TCC. |
| `IS_SYS_VAL_FOR_RR` | INTEGER | NOT NULL | This column indicates whether or not this investment will use the system-defined reinvestment rate % for financial metrics calculations. Values are: - 0 = False - 1 = TrueDefault = 1 |
| `REINVESTMENT_RATE` | FLOAT | NULL | This column defines the investment-specific reinvestment rate % that will be used for financial metrics calculations based on value of IS_SYS_VAL_FOR_RR. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
