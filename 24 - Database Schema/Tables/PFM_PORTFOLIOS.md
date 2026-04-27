---
title: PFM_PORTFOLIOS
type: db-table
table: PFM_PORTFOLIOS
columns: 35
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

# PFM_PORTFOLIOS

> [!info] Description
> This table contain rows that describe portfolios.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the ID. |
| `NAME` | NVARCHAR | NULL | This column refers to the name. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the portfolio. |
| `DESCRIPTION` | NVARCHAR | NULL | This column refers to the description. |
| `START_DATE` | DATE | NOT NULL | This column refers to the start date of the planning horizon. |
| `FINISH_DATE` | DATE | NOT NULL | This column refers to the finish date of the planning horizon. |
| `CURRENCY_CODE` | NVARCHAR | NULL | This column refers to the currency code. |
| `CAPACITY_UNIT_TYPE` | NVARCHAR | NOT NULL | This column refers to the hours vs FTE. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | This column refers to the active flag. |
| `SYNCSCHEDULE` | NVARCHAR | NULL | This column refers to the text description of synchronization schedule. |
| `SYNCSCHEDULE_CRON` | NVARCHAR | NULL | This column refers to the cron string if provided. |
| `SYNC_ERROR` | NVARCHAR | NULL | The column contains error code if the sync job has failed. |
| `SYNC_DATE` | DATE | NULL | This column refers to the date of the last sync job execution. |
| `PLAN_OF_RECORD` | NUMERIC | NULL | This column refers to the ID of the plan that is considered the plan of record. |
| `TOTAL_COST_CURVE` | BINARY | NULL | This column refers to the time varying data for total cost target. |
| `CAPITAL_COST_TARGET` | FLOAT | NULL | This column refers to the scalar value for total cost target. |
| `CAPITAL_COST_CURVE` | BINARY | NULL | This column refers to the time varying data for capital cost target. |
| `OPERATING_COST_TARGET` | FLOAT | NULL | This column refers to the scalar value for operating cost target. |
| `OPERATING_COST_CURVE` | BINARY | NULL | This column refers to the time varying data for operating cost target. |
| `BENEFITS_TARGET` | FLOAT | NULL | Scalar value for benefits target. |
| `BENEFITS_CURVE` | BINARY | NULL | This column refers to the time varying data for benefits target. |
| `RESOURCES_TARGET` | FLOAT | NULL | This column refers to the scalar value for resources target. |
| `RESOURCES_CURVE` | BINARY | NULL | This column refers to the time varying data for resources target. |
| `COST_HEALTH` | NUMERIC | NULL | This column refers to the risk metric for portfolio. |
| `GOAL_ALIGNMENT` | NUMERIC | NULL | This column refers to the risk metric for portfolio. |
| `INNOVATION_LEVEL` | NUMERIC | NULL | This column refers to the risk metric for portfolio. |
| `PROBABILITY_SUCCESS` | NUMERIC | NULL | This column refers to the risk metric for portfolio. |
| `RESOURCE_HEALTH` | NUMERIC | NULL | This column refers to the risk metric for portfolio. |
| `RISK` | NUMERIC | NULL | This column refers to the risk metric for portfolio. |
| `SCHEDULE_HEALTH` | NUMERIC | NULL | This column refers to the risk metric for portfolio. |
| `DEPARTMENT_ID` | NUMERIC | NULL | This column refers to the reference to a specific department. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the portfolio was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the portfolio. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the resource that last updated the portfolio |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
