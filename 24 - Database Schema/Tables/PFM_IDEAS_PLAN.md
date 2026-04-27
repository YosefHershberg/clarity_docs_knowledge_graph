---
title: PFM_IDEAS_PLAN
type: db-table
table: PFM_IDEAS_PLAN
columns: 22
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

# PFM_IDEAS_PLAN

> [!info] Description
> This table contains plan data for idea attributes in the context of a plan.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Specifies the ID of investment in the context of a plan. |
| `PLAN_ID` | NUMERIC | NOT NULL | Specifies the Key of the plan context (PFM_PLAN). |
| `PRIORITY` | NUMERIC | NULL | This column contains changes made to PRIORITY in the context of a plan. |
| `EST_TYPE` | NUMERIC | NULL | This column contains changes made to EST_TYPE in the context of a plan. |
| `EST_COST` | NUMERIC | NULL | This column contains changes made to EST_COST in the context of a plan. |
| `EST_BENEFIT` | NUMERIC | NULL | This column contains changes made to EST_BENEFIT in the context of a plan. |
| `EST_START_DATE` | DATE | NULL | This column contains changes made to EST_START_DATE in the context of a plan. |
| `EST_FINISH_DATE` | DATE | NULL | This column contains changes made to EST_FINISH_DATE in the context of a plan. |
| `BENEFIT_DESC` | NVARCHAR | NULL | This column contains changes made to BENEFIT_DESC in the context of a plan. |
| `GENERAL_NOTES` | NVARCHAR | NULL | This column contains changes made to GENERAL_NOTES in the context of a plan. |
| `BUS_UNIT` | NVARCHAR | NULL | This column contains changes made to BUS_UNIT in the context of a plan. |
| `BREAKEVEN_DATE` | DATE | NULL | This column contains changes made to BREAKEVEN_DATE in the context of a plan. |
| `IMPACT` | NVARCHAR | NULL | This column contains changes made to IMPACT in the context of a plan. |
| `RISKS` | NVARCHAR | NULL | This column contains changes made to RISKS in the context of a plan. |
| `DEPENDENCIES` | NVARCHAR | NULL | This column contains changes made to DEPENDENCIES in the context of a plan. |
| `CONVERSION_DATE` | DATE | NULL | This column contains changes made to CONVERSION_DATE in the context of a plan. |
| `TARGET_MANAGER_ID` | NUMERIC | NULL | This column contains changes made to TARGET_MANAGER_ID in the context of a plan. |
| `INITIATOR_ID` | NUMERIC | NULL | This column contains changes made to INITIATOR_ID in the context of a plan. |
| `CREATED_DATE` | DATE | NULL | This column contains the date the row was created. |
| `CREATED_BY` | NUMERIC | NULL | This column contains the resource that created the row. |
| `LAST_UPDATED_DATE` | DATE | NULL | This column contains the date that the row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NULL | This column contains the resource that last updated the row. |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
