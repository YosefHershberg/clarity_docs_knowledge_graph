---
title: CAP_SCENARIO_MEMBERS
type: db-table
table: CAP_SCENARIO_MEMBERS
columns: 46
audience: dev
domain: development
canonical: true
erds:
  - Capacity
fk_targets:
  - CAP_SCENARIOS
  - CMN_SEC_USERS
  - SRM_PROJECTS
tags:
  - dev
  - schema
  - table
  - erd/capacity
---

# CAP_SCENARIO_MEMBERS

> [!info] Description
> This table stores information on the individual members of a scenario.

## Subject areas (ERDs)
- [[_MOC - Capacity ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to a system-generated, unique identifier for a row in this table. |
| `SCENARIO_ID` | NUMERIC | NOT NULL | This column refers to the scenario of which this investment is a member. This refers to [[CAP_SCENARIOS]].ID. |
| `MEMBER_TYPE` | NVARCHAR | NOT NULL | This column refers to the type of investment to which the scenario member is referring (either PROJECT or EXPRESSION). |
| `OBJECT_ID` | NUMERIC | NOT NULL | This column refers to the object to which this member is referring. This column refers to [[SRM_PROJECTS]].ID. |
| `STAFF_PERCENT` | NUMERIC | NULL | This column refers to the modified staff percentage of the project(s) identified by this scenario member. |
| `START_DATE` | DATE | NULL | This column refers to the modified start date of the project(s) identified by this scenario member. |
| `FINISH_DATE` | DATE | NULL | This column refers to the modified finish date of the project(s) identified by this scenario member. |
| `IS_EXCLUDED` | INTEGER | NOT NULL | This column indicates whether the project(s) identified by this scenario member should be excluded from all capacity calculations. Values are: - 1 = True - 2 = False |
| `PRIORITY` | NUMERIC | NULL | This column refers to the modified priority of the project(s) identified by this scenario member. |
| `IS_APPROVED` | INTEGER | NOT NULL | Indicates the modified approval status of the project(s) identified by this scenario member. Values are: - 0 = Not Approved - 1 = Approved |
| `IS_ACTIVE` | INTEGER | NOT NULL | Indicates whether this member is active in the scenario. Values are: - 1 = True - 2 = False |
| `PLANNED_COST` | NUMERIC | NULL | The planned cost of this investment. |
| `PLANNED_COST_START` | DATE | NULL | The planned cost start date. |
| `PLANNED_COST_FINISH` | DATE | NULL | The planned cost finish date. |
| `PLANNED_BENEFIT` | NUMERIC | NULL | The planned benefit from this investment. |
| `PLANNED_BENEFIT_START` | DATE | NULL | The planned benefit start date. |
| `PLANNED_BENEFIT_FINISH` | DATE | NULL | The planned benefit finish date. |
| `BDGT_CST_TOTAL` | NUMERIC | NULL | This column refers to the budgeted costs used in this investment for this scenario. |
| `BDGT_CST_START` | DATE | NULL | This column refers to the investment budgeted costs start date for use in this scenario. |
| `BDGT_CST_FINISH` | DATE | NULL | This column indicates when the budgeted costs should end. |
| `BDGT_REV_TOTAL` | NUMERIC | NULL | This column refers to the budgeted monetary benefits for this investment in this scenario; set only if different than the current plan. |
| `BDGT_REV_START` | DATE | NULL | This column indicates when the budgeted monetary benefits should begin. |
| `BDGT_REV_FINISH` | DATE | NULL |  |
| `FCST_CST_TOTAL` | NUMERIC | NULL | This column refers to the forecasted costs for this investment in this scenario; set only if different than the current plan. |
| `FCST_CST_START` | DATE | NULL | This column indicates when the forecasted costs are expected to start. |
| `FCST_CST_FINISH` | DATE | NULL | This column indicates when the forecasted costs are expected to end. |
| `FCST_REV_TOTAL` | NUMERIC | NULL | The forecast monetary benefits for this project (or some other investment) in this scenario; set only if different than the current plan. |
| `FCST_REV_START` | DATE | NULL | This column indicates when the forecasted costs are expected to start. |
| `FCST_REV_FINISH` | DATE | NULL | This column indicates when the forecasted monetary benefits are expected to end. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `IS_EXPRESSION` | INTEGER | NOT NULL | Indicates whether this row represents an expression in the scenario or a project (or other investment). Values are: - 1 = True - 2 = False |
| `SELECTED_BY_EXPRESSION_ID` | NUMERIC | NULL | Indicates if the row was added implicitly by an expression. Values are: - 0 = False - 1 = True |
| `LAST_SYNC_DATE` | DATE | NULL | The date and time the row was last synchronized. It is used only for expression rows. |
| `LABOR_ALLOC_CURVE` | BINARY | NULL | This column contains a copy of the instantiated labor allocation curve for an investment in the context of a scenario |
| `ODF_NK_LABOR_ALLOC_CURVE` | NVARCHARMAX | NULL | This column contains a sqlcurve copy of the instantiated allocation curve for an investment in the context of a scenario |
| `LABOR_HARD_ALLOC_CURVE` | BINARY | NULL | This column contains a copy of the instantiated labor hard allocation curve for an investment in the context of a scenario |
| `ODF_NK_LABOR_HARD_ALLOC_CURVE` | NVARCHARMAX | NULL | This column contains a sqlcurve copy of the instantiated labor hard allocation curve for an investment the context of a scenario |
| `ODF_SS_LABOR_ALLOC` | INTEGER | NULL | Slice status for aggregated labor allocation curve for the investment |
| `ODF_SS_LABOR_HARD_ALLOC` | INTEGER | NULL | Slice status for aggregated labor hard allocation curve for the investment |
| `ODF_FTE_LABOR_ALLOC_CURVE` | NUMERIC | NOT NULL | FTE conversion factor for curve for the investment |
| `ODF_FTE_LABOR_HARD_ALLOC_CURVE` | NUMERIC | NOT NULL | FTE conversion factor for hard allocation curve for the investment |
| `MODIFIED_STATUS` | NVARCHAR | NULL | This column indicates if an investment has been modified. |
| `PUBLISH_STATUS` | NVARCHAR | NULL | This column contains the publish status of an investment. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `SCENARIO_ID` | [[CAP_SCENARIOS]].`ID` | |
| `OBJECT_ID` | [[SRM_PROJECTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CAP_SCENARIOS]], [[CAP_SCENARIO_ASSIGNMENTS]], [[CAP_SCENARIO_ROLES]], [[CAP_SCENARIO_TASKS]], [[CAP_SCENARIO_TEAM]], [[INV_INVESTMENTS]], [[PRASSIGNMENT]], [[PRTASK]], [[PRTEAM]]
