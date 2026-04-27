---
title: PMA_SCENARIO_CONSTRAINTS
type: db-table
table: PMA_SCENARIO_CONSTRAINTS
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Portfolios
fk_targets:
  - CAP_SCENARIOS
  - CMN_SEC_USERS
  - SRM_PROJECTS
tags:
  - dev
  - schema
  - table
  - erd/portfolios
---

# PMA_SCENARIO_CONSTRAINTS

> [!info] Description
> This table stores the investment's information which is added as a constraint for that scenario.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `SCENARIO_ID` | NUMERIC | NOT NULL | The scenario ID. This refers to [[CAP_SCENARIOS]].ID. |
| `OBJECT_ID` | NUMERIC | NOT NULL | The ID to the investment. This refers to [[SRM_PROJECTS]].ID. |
| `MEMBER_TYPE` | NVARCHAR | NOT NULL | The type of investment object. Possible values: - PROJECT - ASSET - APPLICATION - PRODUCT - OTHER |
| `IS_EXCLUDED` | INTEGER | NOT NULL | A Boolean value of true or false indicating whether this investment is excluded or included as constraint for this scenario. |
| `IS_EXPRESSION` | INTEGER | NOT NULL | A Boolean value of true or false indicating whether this investment is added by expression. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `SCENARIO_ID` | [[CAP_SCENARIOS]].`ID` | |
| `OBJECT_ID` | [[SRM_PROJECTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
