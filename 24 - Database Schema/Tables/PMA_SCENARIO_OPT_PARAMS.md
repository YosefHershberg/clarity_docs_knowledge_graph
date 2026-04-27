---
title: PMA_SCENARIO_OPT_PARAMS
type: db-table
table: PMA_SCENARIO_OPT_PARAMS
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Portfolios
fk_targets:
  - CAP_SCENARIOS
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/portfolios
---

# PMA_SCENARIO_OPT_PARAMS

> [!info] Description
> This table stores all the optimization parameters defined for this scenario. These parameters are used to assign a score to an investment when generating the scenario.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `SCENARIO_ID` | NUMERIC | NULL | The scenario ID. This refers to [[CAP_SCENARIOS]].ID. |
| `PARENT_ID` | NUMERIC | NULL | The ID when [[PMA_SCENARIO_OPT_PARAMS]].ATTRIBUTE has a value of lookup_code. This refers to [[PMA_SCENARIO_OPT_PARAMS]].ID. |
| `ATTRIBUTE` | NVARCHAR | NOT NULL | The name of the attribute added as optimization parameter. It also stores the attribute's look_up code if it is a lookup type. |
| `CRITERIA` | NVARCHAR | NULL | The optimization criteria for this optimization parameter. This criterion affects the score of investment when generating a scenario. |
| `WEIGHT` | FLOAT | NULL | The weight of the optimization parameter that is considered when generating the scenario to calculate the score of an investment. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `SCENARIO_ID` | [[CAP_SCENARIOS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[SRM_RESOURCES]]
