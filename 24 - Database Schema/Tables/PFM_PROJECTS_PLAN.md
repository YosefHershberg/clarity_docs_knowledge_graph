---
title: PFM_PROJECTS_PLAN
type: db-table
table: PFM_PROJECTS_PLAN
columns: 59
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

# PFM_PROJECTS_PLAN

> [!info] Description
> This table contains the changes to the projects in the context of a plan.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the ID of the project in the portfolio. |
| `PLAN_ID` | NUMERIC | NOT NULL | This column refers to the ID of the plan context. |
| `PRUID` | NVARCHAR | NULL | This column contains any changes for an PRUID in the context of a plan. |
| `PRID` | NUMERIC | NULL | This column contains any changes for an PRID in the context of a plan. |
| `PRGUIDELINES` | NVARCHAR | NULL | This column contains any changes for an PRGUIDELINES in the context of a plan. |
| `PRDEPARTMENT` | NVARCHAR | NULL | This column contains any changes for an PRDEPARTMENT in the context of a plan. |
| `PRVERSION` | NUMERIC | NULL | This column contains any changes for an PRVERSION in the context of a plan. |
| `PRUSERTEXT6` | NVARCHAR | NULL | This column contains any changes for an PRUSERTEXT6 in the context of a plan. |
| `PRUSERTEXT7` | NVARCHAR | NULL | This column contains any changes for an PRUSERTEXT7in the context of a plan. |
| `PRBUDGET` | FLOAT | NULL | This column contains any changes for an PRBUDGET in the context of a plan. |
| `PRASOF` | DATE | NULL | This column contains any changes for an PRASOF in the context of a plan. |
| `PRCPMTYPE` | NUMERIC | NULL | This column contains any changes for an PRCPMTYPE in the context of a plan. |
| `PRSPONSOREDBY` | NVARCHAR | NULL | This column contains any changes for an PRSPONSOREDBY in the context of a plan. |
| `PRREQUESTEDBY` | NVARCHAR | NULL | This column contains any changes for an PRREQUESTEDBY in the context of a plan. |
| `PRREQUESTEDTIME` | DATE | NULL | This column contains any changes for an PRREQUESTEDTIME in the context of a plan. |
| `PRUSERTEXT1` | NVARCHAR | NULL | This column contains any changes for an PRUSERTEXT1in the context of a plan. |
| `PRUSERTEXT2` | NVARCHAR | NULL | This column contains any changes for an PRUSERTEXT2 in the context of a plan. |
| `PRUSERTEXT3` | NVARCHAR | NULL | This column contains any changes for an PRUSERTEXT3 in the context of a plan. |
| `PRUSERTEXT4` | NVARCHAR | NULL | This column contains any changes for an PRUSERTEXT4 in the context of a plan. |
| `PRFORMAT` | NUMERIC | NULL | This column contains any changes for an PRFORMAT in the context of a plan. |
| `PRFISCALSTART` | DATE | NULL | This column contains any changes for an PRFISCALSTART in the context of a plan. |
| `PRUSERTEXT5` | NVARCHAR | NULL | This column contains any changes for an PRUSERTEXT5 in the context of a plan. |
| `PRPCTCOMPLETE` | FLOAT | NULL | This column contains any changes for an PRPCTCOMPLETE in the context of a plan. |
| `PRCLOSEDTIME` | DATE | NULL | This column contains any changes for an PRCLOSEDTIME in the context of a plan. |
| `PRSIZEADJUST` | FLOAT | NULL | This column contains any changes for an PRSIZEADJUST in the context of a plan. |
| `PRSIZEADJUSTON` | NUMERIC | NULL | This column contains any changes for an PRSIZEADJUSTON in the context of a plan. |
| `PRSTARTIMPOSED` | NUMERIC | NULL | This column contains any changes for an PRSTARTIMPOSED in the context of a plan. |
| `PRFINISHIMPOSED` | NUMERIC | NULL | This column contains any changes for an PRFINISHIMPOSED in the context of a plan. |
| `PRMODBY` | NVARCHAR | NULL | This column contains any changes for an PRMODBY in the context of a plan. |
| `PRMODTIME` | DATE | NULL | This column contains any changes for an PRMODTIME in the context of a plan. |
| `PROCESS_SCALE_BDGT` | NUMERIC | NULL | This column contains any changes for an PROCESS_SCALE_BDGT in the context of a plan. |
| `PROCESS_SCALE_WORK` | NUMERIC | NULL | This column contains any changes for an PROCESS_SCALE_WORK in the context of a plan. |
| `STAGE_IDENTIFIER` | NVARCHAR | NULL | This column contains any changes for an STAGE_IDENTIFIER in the context of a plan. |
| `IS_PROGRAM` | NUMERIC | NULL | This column contains any changes for an IS_PROGRAM in the context of a plan. |
| `IS_TEMPLATE` | NUMERIC | NULL | This column contains any changes for an IS_TEMPLATE in the context of a plan. |
| `IS_REVENUE_PLAN` | NUMERIC | NULL |  |
| `TYPE` | NVARCHAR | NULL | This column contains any changes for an TYPE in the context of a plan. |
| `RCF_OBJECTIVES` | NUMERIC | NULL | This column contains any changes for an RCF_OBJECTIVES in the context of a plan. |
| `RCF_SPONSORSHIP` | NUMERIC | NULL | This column contains any changes for an RCF_SPONSORSHIP in the context of a plan. |
| `RCF_FUNDING` | NUMERIC | NULL | This column contains any changes for an RCF_FUNDING in the context of a plan. |
| `RCF_RESOURCE_AVAIL` | NUMERIC | NULL | This column contains any changes for an RCF_RESOURCE_AVAIL in the context of a plan. |
| `RCF_INTERDEPENDENCY` | NUMERIC | NULL | This column contains any changes for an RCF_INTERDEPENDENCY in the context of a plan. |
| `RCF_TECHNICAL` | NUMERIC | NULL | This column contains any changes for an RCF_TECHNICAL in the context of a plan. |
| `RCF_HUMAN_INTERFACE` | NUMERIC | NULL | This column contains any changes for an RCF_HUMAN_INTERFACEin the context of a plan. |
| `RCF_ORG_CULTURE` | NUMERIC | NULL | This column contains any changes for an RCF_ORG_CULTURE in the context of a plan. |
| `RCF_SUPPORTABILITY` | NUMERIC | NULL | This column contains any changes for an RCF_SUPPORTABILITY in the context of a plan. |
| `RCF_IMPLEMENTATION` | NUMERIC | NULL | This column contains any changes for an RCF_IMPLEMENTATION in the context of a plan. |
| `RCF_FLEXIBILITY` | NUMERIC | NULL | This column contains any changes for an RCF_FLEXIBILITY in the context of a plan. |
| `LAST_CALC_RUN` | DATE | NULL | This column contains any changes for an LAST_CALC_RUN in the context of a plan. |
| `REQ_APPROVAL_REQD` | NUMERIC | NULL | This column contains any changes for an REQ_APPROVAL_REQD in the context of a plan. |
| `CREATED_DATE` | DATE | NULL | This column refers to the date record that was inserted. |
| `CREATED_BY` | NUMERIC | NULL | This column contains the resource that created the row. |
| `LAST_UPDATED_DATE` | DATE | NULL | This column refers to the date record that was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NULL | This column contains the resource that last updated the row. |
| `EV_PERIOD_ID` | NUMERIC | NULL | This column contains any changes for an EV_PERIOD_ID in the context of a plan. |
| `EV_CALC_METHOD` | NUMERIC | NULL | This column contains any changes for an EV_CALC_METHOD in the context of a plan. |
| `EV_BCWP_OVR` | FLOAT | NULL | This column contains any changes for an EV_BCWP_OVR in the context of a plan. |
| `PERCENT_COMPLETE` | NUMERIC | NULL | This column contains any changes for an PERCENT_COMPLETE in the context of a plan. |
| `PERCENT_CALC_MODE` | NUMERIC | NULL | This column contains any changes for an PERCENT_CALC_MODE in the context of a plan. |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_MNT_PROJECTS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
