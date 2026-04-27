---
title: PFM_ROLE_CAPACITY
type: db-table
table: PFM_ROLE_CAPACITY
columns: 11
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

# PFM_ROLE_CAPACITY

> [!info] Description
> This table contains role capacity target curves.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column specifies the primary key for the row in the table. |
| `CREATED_DATE` | DATE | NOT NULL | This column contains the date the row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column contains the resource that created the row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column contains the date that the row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column contains the resource that last updated the row. |
| `PARTITION_CODE` | NVARCHAR | NOT NULL |  |
| `PORTFOLIO_ID` | NUMERIC | NOT NULL | This column refers to the ID of the portfolio context. |
| `PLAN_ID` | NUMERIC | NULL | This column refers to the ID of the plan context. |
| `ROLE_ID` | NUMERIC | NULL | This column refers to the Id of the role for which the target is defined. |
| `CAPACITY_TARGET` | FLOAT | NULL | This column refers to the scalar target value. |
| `CAPACITY_CURVE` | BINARY | NULL | This column refers to the time varying capacity target. |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
