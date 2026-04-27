---
title: PFM_IDEAS
type: db-table
table: PFM_IDEAS
columns: 21
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

# PFM_IDEAS

> [!info] Description
> This table contains copy of idea attributes in the context of a portfolio.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Specifies the ID of investment in the context of a portfolio. |
| `PRIORITY` | NUMERIC | NULL | This column refers to the proposed priority of the idea, taken from the IDEAS_PRIORITY lookup. Values are: - 1 = LOW - 2 = MEDIUM - 3 = HIGH |
| `EST_TYPE` | NUMERIC | NULL | The type of estimate taken from the IDEAS_EST_TYPE lookup. Values are: - 1 = HIGH_LEVEL - 2 = ANALYTICAL - 3 = COMMITMENT - 4 = HISTORICAL |
| `EST_COST` | NUMERIC | NULL | The estimated cost for implementing this idea. |
| `EST_BENEFIT` | NUMERIC | NULL | The estimated monetary benefit for implementing this idea. |
| `EST_START_DATE` | DATE | NULL | The proposed beginning of the period during which the costs and benefits will be realized. |
| `EST_FINISH_DATE` | DATE | NULL | The proposed end of the period during which the costs and benefits will be realized. |
| `BENEFIT_DESC` | NVARCHAR | NULL | A textual description of the benefits of implementing this idea. |
| `GENERAL_NOTES` | NVARCHAR | NULL | General notes about this idea, which may include instructions to the idea owner if the idea was marked incomplete. |
| `BUS_UNIT` | NVARCHAR | NULL | A brief textual description of the business unit relevant to this idea. |
| `BREAKEVEN_DATE` | DATE | NULL | The anticipated date on which the cumulative benefits surpass the cumulative costs. |
| `IMPACT` | NVARCHAR | NULL | A textual description of the impact to the organization for implementing this idea. |
| `RISKS` | NVARCHAR | NULL | A textual description of the dependencies associated with implementing this idea. |
| `DEPENDENCIES` | NVARCHAR | NULL | A textual description of the dependencies associated with implementing this idea. |
| `CONVERSION_DATE` | DATE | NULL | The date when this idea was converted into another type of investment object, or blank if it was never converted. |
| `TARGET_MANAGER_ID` | NUMERIC | NULL | The resource ([[CMN_SEC_USERS]].ID) that is intended to become the manager of the investment when the idea is converted to a project or other investment type. |
| `INITIATOR_ID` | NUMERIC | NULL | This column specifies the id of the resource (SRM_RESOURCES) that initiated the idea. |
| `CREATED_DATE` | DATE | NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NULL | The resource ([[CMN_SEC_USERS]].ID) that last modified this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TARGET_MANAGER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
