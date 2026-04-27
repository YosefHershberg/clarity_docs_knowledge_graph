---
title: PRASSIGNMENT
type: db-table
table: PRASSIGNMENT
columns: 41
audience: dev
domain: development
canonical: true
erds:
  - Applications
  - Assets
  - Capacity
  - Datamart
  - Ideas
  - Other Work
  - Products
  - Projects
  - Resources
  - Services
fk_targets:
  - CMN_SEC_USERS
  - PRTASK
  - PRTEAM
  - SRM_RESOURCES
fk_sources:
  - NBI_PRT_FACTS
  - PRTIMEENTRY
tags:
  - dev
  - schema
  - table
  - erd/applications
  - erd/assets
  - erd/capacity
  - erd/datamart
  - erd/ideas
  - erd/other-work
  - erd/products
  - erd/projects
  - erd/resources
  - erd/services
---

# PRASSIGNMENT

> [!info] Description
> This table stores data on tasks and resources who are assigned to fulfill those tasks.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 02 - Tasks Assignments and Team]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Applications ERD]]
- [[_MOC - Assets ERD]]
- [[_MOC - Capacity ERD]]
- [[_MOC - Datamart ERD]]
- [[_MOC - Ideas ERD]]
- [[_MOC - Other Work ERD]]
- [[_MOC - Products ERD]]
- [[_MOC - Projects ERD]]
- [[_MOC - Resources ERD]]
- [[_MOC - Services ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID values can be distinguished from a resource in Repository B who has the same prName, prExternalID, and prID values. Note: This value is no longer universally unique, but may be required by client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | A persistent, unique identifier for each row in a table. The system enters the value when you create a new row. It is referenced by other tables using columns to refer to a specific row. For example, the prTypeCodeID column in the PRRESOURCE table refers to a type code prID column. |
| `PRTASKID` | NUMERIC | NULL | This refers to [[PRTASK]].PRID |
| `PRRESOURCEID` | NUMERIC | NULL | This refers to PRRESOURCE.PRID. |
| `PRISUNPLANNED` | NUMERIC | NOT NULL | This column indicates whether the assignment was planned in the project or added by a user. In CA PPM, if a user has the Edit Project Plans access right, then the user can create an unplanned task from their timesheet . If the task is not added, then this column's value is set to true. |
| `PRESTPATTERN` | NUMERIC | NULL | The loading pattern type to use when estimating the duration of an assignment. This information is used by Open Workbench to schedule the estimated time to complete (ETC). Values are: 0=Uniform \| 1=Fixed \| 2=Contour \| 3=Front \| 4=Back |
| `PRESTMAX` | FLOAT | NULL | The maximum percentage of resource availability that can be assigned to the task by autoscheduling. |
| `PRPENDESTSUM` | FLOAT | NULL | The sum or the proposed or "pending" estimate-to-complete. When in a timesheet , a resource can change this amount from its calculated default to communicate a difference between what the project manager planned for the task and how long the resource expects to work on the assignment. |
| `PRPENDACTSUM` | FLOAT | NULL | The sum of an assignment's actuals not yet posted. |
| `PRPENDSTART` | DATE | NULL | System generated. The anticipated start date of an assignment considering its start date and the estimate to complete of its predecessor assignments. |
| `PRPENDFINISH` | DATE | NULL | The anticipated finish date of an assignment considering its start date and estimate-to-complete (ETC) date. |
| `PRSTART` | DATE | NULL | The actual start date for an assignment. The assignment's actual start date if the prActCurve column is not Null. Otherwise, it is an estimated start date. |
| `PRFINISH` | DATE | NULL | An assignment's actual finish date if the prActCurve column is not Null. Otherwise, it is an estimated finish date. |
| `PRSTATUS` | NUMERIC | NOT NULL | The current status of the assignment. Values are: 0=Not started \| 1=Started \| 2=Completed |
| `PRACTSUM` | FLOAT | NULL | The value in this column is equal to the sum of the prActCurve column. |
| `PRACTTHRU` | DATE | NULL | The "as of" date for assignment actuals. Estimates cannot be scheduled before this date. |
| `PRESTSUM` | FLOAT | NULL | The total amount of estimate-to-complete (ETC). This is equal to the total of the prEstCurve column. |
| `PRWDM` | FLOAT | NULL | The distribution of work effort on an assignment or task. For a phase among other phases in a project, it is the portion 100% of the phase represents to the entire project. For a task among other tasks in a phase, it is the portion of 100% the task represents to the entire phase. For an assignment among other assignments for a task, it is the portion of 100% the assignment represents to the entire task. If a task is not used from a phase when creating a project from a Clarity Planner model, the system assigns the used tasks as a proportionately equal percent of the phase's WDM. The system utilizes the same normalization process for phases used and not used in a project. |
| `PREXTENSION` | BINARY | NULL | This column combines the PRACTCURVE, PRESTCURVE, and PRBASECURVE columns. |
| `SLICE_STATUS` | NUMERIC | NULL | Indicates the current state of the slices for this assignment. Values are: Null = Slices are current \| 1 = Slices may need to be updated because the row has changed since the slices were last created - 2 = Slices are in the process of being updated for this row - 3 = The slices are in the process of being rolled over |
| `CURVE_STATUS` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `ROLE_ID` | NUMERIC | NULL | Indicates if the resource on this assignment has a task specific role. The refers to the [[SRM_RESOURCES]].ID for the role. |
| `TEAM_ID` | NUMERIC | NULL | This refers to [[PRTEAM]].PRID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this row. |
| `ACTCOST_CURVE` | BINARY | NULL |  |
| `ACTCOST_SUM` | NUMERIC | NULL |  |
| `ODF_SS_ACTCOST_CURVE` | NUMERIC | NULL |  |
| `ETCCOST_CURVE` | BINARY | NULL |  |
| `ETCCOST_SUM` | NUMERIC | NULL |  |
| `ODF_SS_ETCCOST_CURVE` | NUMERIC | NULL |  |
| `ODF_NK_PRESTCURVE` | NVARCHARMAX | NULL | SqlCurve information for PRESTCURVE |
| `ODF_NK_PRACTCURVE` | NVARCHARMAX | NULL | SqlCurve information for PRACTCURVE |
| `ODF_NK_ETCCOST_CURVE` | NVARCHARMAX | NULL | SqlCurve information for ETCCOST_CURVE |
| `ODF_NK_ACTCOST_CURVE` | NVARCHARMAX | NULL | SqlCurve information for ACTCOST_CURVE |
| `IS_OPEN_TE` | NUMERIC | NOT NULL | Indicates whether the assignment should be considered open for time entry (i.e., if they can they appear as time entries and track time on timesheets). |
| `ODF_FTE_PRESTCURVE` | NUMERIC | NOT NULL | This column contains fte conversion factor for estimates curve. |
| `ODF_FTE_PRACTCURVE` | NUMERIC | NOT NULL | This column contains fte conversion factor for actuals curve. |
| `ODF_SS_SQLCURVE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRTASKID` | [[PRTASK]].`PRID` | |
| `ROLE_ID` | [[SRM_RESOURCES]].`ID` | |
| `TEAM_ID` | [[PRTEAM]].`PRID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[NBI_PRT_FACTS]] | `PRJ_OBJECT_ID` | `PRID` |
| [[PRTIMEENTRY]] | `PRASSIGNMENTID` | `PRID` |

## Related tables (same subject area)

[[CAP_SCENARIOS]], [[CAP_SCENARIO_ASSIGNMENTS]], [[CAP_SCENARIO_MEMBERS]], [[CAP_SCENARIO_ROLES]], [[CAP_SCENARIO_TASKS]], [[CAP_SCENARIO_TEAM]], [[CMN_SEC_USERS]], [[FIN_FINANCIALS]], [[INV_APPLICATIONS]], [[INV_ASSETS]], [[INV_HIERARCHIES]], [[INV_IDEAS]], [[INV_INVESTMENTS]], [[INV_OTHERS]], [[INV_PRODUCTS]], [[INV_PROJECTS]], [[INV_SERVICES]], [[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRCALENDAR]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
