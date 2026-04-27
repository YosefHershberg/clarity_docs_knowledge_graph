---
title: SRM_RESOURCES
type: db-table
table: SRM_RESOURCES
columns: 31
audience: dev
domain: development
canonical: true
erds:
  - Action Items
  - Datamart
  - Financial Planning
  - Links and Notes
  - Portfolios
  - Resources
fk_sources:
  - CAL_ACTION_ITEM_ASSIGNEES
  - CAP_SCENARIO_ROLES
  - CBK_INVOICE
  - CBK_SCALED_GL_TXNS
  - DWH_TMP_FIN_TRANSACTION
  - FIN_ERRORS
  - NBI_PRJ_MATRIX_DATES
  - NBI_PRT_FACTS
  - NBI_RESOURCE_CURRENT_FACTS
  - NBI_RT_FACTS
  - NBI_R_FACTS
  - PPA_TRANSCONTROL
  - PPA_TRANSWIPADJUST
  - PPA_WIP
  - PRASSIGNMENT
  - PRCALENDAR
  - PRJ_REQ_AUDIT
  - PRJ_ROLES_FLAT
  - PRTEAM
  - RIM_RISK_MITIGATIONS
  - RSM_BOOK_MANAGER_OBS_MAP
  - RSM_REQ_ITEM_RESOURCES
  - RSM_REQ_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/action-items
  - erd/datamart
  - erd/financial-planning
  - erd/links-and-notes
  - erd/portfolios
  - erd/resources
---

# SRM_RESOURCES

> [!info] Description
> This table stores the master resources table. A row is created in this table when a new resource is added.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 03 - Resources Roles and Calendars]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Action Items ERD]]
- [[_MOC - Datamart ERD]]
- [[_MOC - Financial Planning ERD]]
- [[_MOC - Links and Notes ERD]]
- [[_MOC - Portfolios ERD]]
- [[_MOC - Resources ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `LAST_NAME` | NVARCHAR | NULL |  |
| `FIRST_NAME` | NVARCHAR | NULL |  |
| `MIDDLE_NAME` | NVARCHAR | NULL |  |
| `UNIQUE_NAME` | NVARCHAR | NULL |  |
| `EMAIL` | NVARCHAR | NULL |  |
| `SMS_EMAIL` | NVARCHAR | NULL |  |
| `PERSON_TYPE` | NUMERIC | NOT NULL |  |
| `USER_ID` | NUMERIC | NULL |  |
| `DATE_OF_HIRE` | DATE | NULL |  |
| `DATE_OF_TERMINATION` | DATE | NULL |  |
| `MANAGER_ID` | NUMERIC | NULL |  |
| `IS_ACTIVE` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `FULL_NAME` | NVARCHAR | NULL |  |
| `IS_EXTERNAL` | INTEGER | NOT NULL |  |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL |  |
| `EXTERNAL_ID` | NVARCHAR | NULL |  |
| `RESOURCE_TYPE` | NUMERIC | NOT NULL |  |
| `USE_IN_FRC_BUDGET` | INTEGER | NOT NULL |  |
| `SLICE_STATUS` | NUMERIC | NULL |  |
| `INCLUDE_FLAG` | INTEGER | NOT NULL |  |
| `BOOK_MANAGER_ID` | NUMERIC | NULL |  |
| `ENTITY_CODE` | NVARCHAR | NULL |  |
| `FORECAST_RATE` | NUMERIC | NULL |  |
| `DEFINED_TEAM_ID` | NUMERIC | NULL | This column contains the foreign key for the TEAM_DEFINITIONS record, if one exists. |
| `IS_HIDDEN` | NUMERIC | NOT NULL | Private column indicating this resource record should not be visible to the end user. |
| `ODF_BLUEPRINT_ID` | NUMERIC | NULL | This column contains the Blueprint ID associated with this resource. Populated when a resource is created for the first time. |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CAL_ACTION_ITEM_ASSIGNEES]] | `PROXY_SOURCE_ID` | `USER_ID` |
| [[CAP_SCENARIO_ROLES]] | `ROLE_ID` | `ID` |
| [[CBK_INVOICE]] | `GENERATED_BY` | `ID` |
| [[CBK_SCALED_GL_TXNS]] | `RESOURCE_CODE` | `UNIQUE_NAME` |
| [[DWH_TMP_FIN_TRANSACTION]] | `ROLE_CODE` | `UNIQUE_NAME` |
| [[FIN_ERRORS]] | `RESOURCE_ID` | `ID` |
| [[NBI_PRJ_MATRIX_DATES]] | `RESOURCE_ID` | `ID` |
| [[NBI_PRT_FACTS]] | `RESOURCE_ID` | `ID` |
| [[NBI_RESOURCE_CURRENT_FACTS]] | `RESOURCE_ID` | `ID` |
| [[NBI_RESOURCE_CURRENT_FACTS]] | `MANAGER_ID` | `ID` |
| [[NBI_RESOURCE_CURRENT_FACTS]] | `RESOURCE_CODE` | `UNIQUE_NAME` |
| [[NBI_RT_FACTS]] | `RESOURCE_ID` | `ID` |
| [[NBI_RT_FACTS]] | `RESOURCE_CODE` | `UNIQUE_NAME` |
| [[NBI_RT_FACTS]] | `ROLE_ID` | `ID` |
| [[NBI_RT_FACTS]] | `MANAGER_ID` | `ID` |
| [[NBI_R_FACTS]] | `RESOURCE_ID` | `ID` |
| [[PPA_TRANSCONTROL]] | `ROLE_CODE` | `UNIQUE_NAME` |
| [[PPA_TRANSWIPADJUST]] | `ROLE_CODE` | `UNIQUE_NAME` |
| [[PPA_WIP]] | `ROLE_CODE` | `UNIQUE_NAME` |
| [[PRASSIGNMENT]] | `ROLE_ID` | `ID` |
| [[PRCALENDAR]] | `PRRESOURCEID` | `ID` |
| [[PRJ_REQ_AUDIT]] | `REQ_RESOURCE_ID` | `ID` |
| [[PRJ_REQ_AUDIT]] | `REQ_ROLE_ID` | `ID` |
| [[PRJ_ROLES_FLAT]] | `ROLE_ID` | `ID` |
| [[PRJ_ROLES_FLAT]] | `BRANCH_ROLE_ID` | `ID` |
| [[PRTEAM]] | `PRRESOURCEID` | `ID` |
| [[PRTEAM]] | `PRROLEID` | `ID` |
| [[PRTEAM]] | `REQUIREMENT_NAME` | `FULL_NAME` |
| [[RIM_RISK_MITIGATIONS]] | `ASSIGNED_TO` | `ID` |
| [[RSM_BOOK_MANAGER_OBS_MAP]] | `ROLE_ID` | `ID` |
| [[RSM_BOOK_MANAGER_OBS_MAP]] | `BOOK_MANAGER_ID` | `ID` |
| [[RSM_REQ_ITEM_RESOURCES]] | `RESOURCE_ID` | `ID` |
| [[RSM_REQ_RESOURCES]] | `RESOURCE_ID` | `ID` |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CAL_ACTION_ITEMS]], [[CAL_ACTION_ITEM_ASSIGNEES]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[INV_PROJECTS]], [[LOCATIONS]], [[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRCHARGECODE]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRLINK]], [[PRNOTE]], [[PRTASK]], [[PRTEAM]], [[PRTIMEENTRY]], [[PRTIMESHEET]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[TRANSCLASS]]
