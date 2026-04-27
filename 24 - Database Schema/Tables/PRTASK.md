---
title: PRTASK
type: db-table
table: PRTASK
columns: 66
audience: dev
domain: development
canonical: true
erds:
  - Applications
  - Assets
  - Capacity
  - Document Manager
  - Ideas
  - ITIL
  - Links and Notes
  - Other Work
  - Products
  - Projects
  - Resources
  - Services
fk_targets:
  - CMN_SEC_USERS
  - PRCHARGECODE
  - SRM_PROJECTS
fk_sources:
  - DWH_TMP_FIN_TRANSACTION
  - IMP_TRANSACTIONIMPORT
  - NBI_PROJ_RES_RATES_AND_COSTS
  - NBI_PRT_FACTS
  - PPA_TRANSCONTROL
  - PPA_TRANSWIPADJUST
  - PPA_WIP
  - PRASSIGNMENT
  - PRCONSTRAINT
  - PRJ_TASK_FORMULAS
  - PRSUBPROJECT
  - RPT_WBSINDEX
tags:
  - dev
  - schema
  - table
  - erd/applications
  - erd/assets
  - erd/capacity
  - erd/document-manager
  - erd/ideas
  - erd/itil
  - erd/links-and-notes
  - erd/other-work
  - erd/products
  - erd/projects
  - erd/resources
  - erd/services
---

# PRTASK

> [!info] Description
> This table stores tasks for projects.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 02 - Tasks Assignments and Team]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Applications ERD]]
- [[_MOC - Assets ERD]]
- [[_MOC - Capacity ERD]]
- [[_MOC - Document Manager ERD]]
- [[_MOC - Ideas ERD]]
- [[_MOC - ITIL ERD]]
- [[_MOC - Links and Notes ERD]]
- [[_MOC - Other Work ERD]]
- [[_MOC - Products ERD]]
- [[_MOC - Projects ERD]]
- [[_MOC - Resources ERD]]
- [[_MOC - Services ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID cannot be confused with a resource in Repository B that has the same prName, prExternalID, and prID. Note: This value is no longer universally unique, but may be required by client applications (e.g., Open Workbench). Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | System-generated primary key when you create a new row. This column holds a persistent, unique identifier for each row in a table. It is referenced by other tables using columns to refer to a specific row. |
| `PRPROJECTID` | NUMERIC | NULL | This refers to [[SRM_PROJECTS]].ID. |
| `PRISUNPLANNED` | NUMERIC | NOT NULL | This column indicates whether the task was planned in the project or added by a user. In a timesheet, if a user has the Edit Project Plans access right, then the user can add a task. If the task is not added by a user, then this column's value is set to true. |
| `PRSHORTNAME` | NVARCHAR | NULL | This could may be used by some project management programs. It is intended to hold an abbreviated version of a task's name. |
| `PRNAME` | NVARCHAR | NULL | The name of the task. |
| `PREXTERNALID` | NVARCHAR | NULL | User-entered, descriptive column internally forced to be unique and used to identify the object or entity for which the row's data is entered. It is used to reference the data in this table and provide a shorthand but meaningful way to refer to the object. It must be unique only for each project. |
| `PRISMILESTONE` | NUMERIC | NOT NULL | Indicates whether a task represents a milestone for its project. |
| `PRCATEGORY` | NVARCHAR | NULL | User-entered. A category name for the object to which the row refers. |
| `PRUSERTEXT1` | NVARCHAR | NULL | Unrestricted, user-entered text to use as needed. |
| `PRGUIDELINES` | NVARCHAR | NULL | A complete or partial reference, by URL or file name with extension to a guideline file. If the value does not define a complete reference or link, then the value is added to the link as defined by the hierarchy - first by work breakdown structure (WBS) (PRTASK) , then by project (PRJ_PROJECTS), and then by global (PRSITE) - until a complete link is defined. This guideline is the specific topic pertaining to a task. For example, for a WinHelp source file, this column holds a context number ID to a topic within the help file. Likewise, this column could reference a specific subpage on a URL. |
| `PRPRIORITY` | NUMERIC | NULL | For the PRTASK table, this value may be used by some project management programs to determine the order tasks should occur in a project. It may be used to control the order that tasks are scheduled, for example, when autoscheduled in Open Workbench. For the PRPROJECT table, this value serves Resource Management users when attempting to allocate resources to higher priority projects over other projects. |
| `PRSTART` | DATE | NULL | The actual start date for a task. |
| `PRFINISH` | DATE | NULL | The finish date for the task. |
| `PRDURATION` | FLOAT | NULL | The total working days determined by the values in the PRFINISH and PRSTART columns. |
| `PRISFIXED` | NUMERIC | NOT NULL | Indicates whether a task's duration is fixed or not fixed. |
| `PRISLOCKED` | NUMERIC | NOT NULL | When set to true, Open Workbench cannot alter the task's start and end dates when the project manager exports a project. |
| `PRSTATUS` | NUMERIC | NULL | Indicates if a task has started, not started, or completed. |
| `PRPCTCOMPLETE` | FLOAT | NULL | In the PRTask table, a value entered by a user representing the portion of the task that has actually been completed. In the PRJ_Projects table, a default value that every new task inherits so that the project manager may define every new task as being partially complete upon starting. |
| `PREARLYSTART` | DATE | NULL | The earliest date a resource can start on a task based on the critical path. Some examples: - If the earliest finish date occurs at midnight, it is the date of the next day - not the current day's date. - If the earliest finish date occurs on Sunday, it is Monday's date. |
| `PREARLYFINISH` | DATE | NULL | The earliest date the task can be finished given the critical path. For example, if the early finish is midnight, the value in this column is the date of the current day, not of the next day. If the early finish is midnight on Sunday, the value in this column is Sunday's date, not Monday's. |
| `PRLATESTART` | DATE | NULL | The latest date the task can start given the critical path. If the task starts later than this date, the project's ending date could be adversely affected. |
| `PRLATEFINISH` | DATE | NULL | The latest date the task can finish given the critical path. If the task finishes later than this time, project's ending date could be adversely affected. |
| `PRISCRITICAL` | NUMERIC | NOT NULL | Indicates whether the task is on the critical path. If set to yes, then this task must be completed before other work can be completed. |
| `PRTOTALFLOAT` | FLOAT | NULL | The number of days a task's start can be delayed beyond its early start date (the PREARLYSTART column) before adversely affecting the project's finish date. |
| `PRWBSLEVEL` | NUMERIC | NULL | The task's depth in the work breakdown structure. A top-level task has a PRWBSLevel of 1. If a top level task has a child task, the child task would have a PRWBSLevel of 2. |
| `PRWBSSEQUENCE` | NUMERIC | NULL | Indicates the order in which the task appears, unsorted, in the work breakdown structure (WBS). |
| `PRISTASK` | NUMERIC | NOT NULL | Indicates whether this row is a task rather than a summary item that may head a list of tasks. The system uses this column to determine whether to put a PRTASK row onto a view of tasks. - 0 = Task is a summary and cannot contain assignments - 1 = Detail task and cannot have descendant tasks |
| `PRWDM` | FLOAT | NULL | The distribution of work effort on an assignment or task. - For a phase among other phases in a project, the portion of 100% the phase represents to the entire project. - For a task among other tasks in a phase, the portion of 100% the task represents to the entire phase. - For an assignment among other assignments for a task, the portion of 100% the assignment represents to the entire task. |
| `PRMETHODEXTID` | NVARCHAR | NULL | Reserved for internal use only. A reference to the prExternalID column in the MRMethod table. This identifies the method from which a task is derived. |
| `PRISKEY` | NUMERIC | NOT NULL | Indicates if the task is considered a "key" task or milestone. This column is used for filtering or highlighting. |
| `PRCHARGECODEID` | NUMERIC | NULL | The default charge code indicated by the task, overriding the project-level charge code. This is a foreign key to [[PRCHARGECODE]].PRID. It is used to default time entries and/or vouchers. |
| `IS_OPEN_TE` | NUMERIC | NOT NULL | Indicates whether the task or its descendants should be considered open for time entry (i.e., if they can they appear as time entries and track time on timesheets). |
| `PRCALCESTIMATE` | FLOAT | NULL | The calculated estimate for this task based on the task's estimating rules. The column holds the last calculated value from the last run of the estimating model. |
| `LAST_CALC_RUN` | DATE | NULL | The date and time when the estimating model was last run to calculate the estimate for this task. |
| `LAST_RULE_RUN_ID` | NUMERIC | NULL | A reference to the estimating rule that was used to calculate the task's estimate from the estimating model. This refers to a row in the PRJ_TASK_FORMULAS table, which holds the estimating rules. Multiple rules may be attached to a task and executed based on the execution conditions applied at the time the model was last run. This column points to the rule that was used to calculate the estimate. |
| `WBS_PARSEQ` | NUMERIC | NULL | System-maintained. The work breakdown structure (WBS) sequence [[PRTASK]].PRWBSSEQUENCE of the effective parent task in the same project. |
| `WBS_NNBSEQ` | NUMERIC | NULL | System-maintained. The WBS sequence [[PRTASK]].PRWBSSEQUENCE of the effective next-non-branch (i.e., the next task which is not a descendant). |
| `EV_CALC_METHOD` | NUMERIC | NULL | This column defines which earned value calculation method is in effect for this task. |
| `EV_BCWP_OVR` | FLOAT | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this row. |
| `IS_PCT_DIRTY` | NUMERIC | NULL |  |
| `COST_TYPE` | NVARCHAR | NULL | This column specifies the cost type of the task. |
| `PRMSPWBSLEVEL` | NUMERIC | NULL | The task work breakdown structure level in the .MPP file stored in the CA Clarity PPM database. |
| `PRMSPWBSSEQUENCE` | NUMERIC | NULL | The task work breakdown structure sequence in the .MPP file stored in the CA Clarity PPM database. |
| `TASK_OWNER` | NUMERIC | NULL | Resource ID of the task owner. |
| `MSP_TASK_TYPE` | NUMERIC | NULL | Enumeration for type of Microsoft Project Task (if applicable). |
| `IS_MSP_ONEWAY` | NUMERIC | NOT NULL | Whether the task is part of the one-way integration with Microsoft Project |
| `FIN_WORK_TYPE` | NUMERIC | NULL | This column refers to the internal ID of lookup value of lookup type Financial Work Type. |
| `ESTIMATES_CURVE` | BINARY | NULL | This column contains aggregate of assignment etc for the task and children. |
| `ODF_NK_ESTIMATES_CURVE` | NVARCHARMAX | NULL | This column contains the sqlcurve version of estimates_curve. |
| `ODF_FTE_ESTIMATES_CURVE` | NUMERIC | NOT NULL | This column contains the fte conversion factor for estimates curve. |
| `ACTUALS_CURVE` | BINARY | NULL | This column contains aggregate of assignment actuals for the task and children. |
| `ODF_NK_ACTUALS_CURVE` | NVARCHARMAX | NULL | This column contains the sqlcurve version of actuals_curve. |
| `ODF_FTE_ACTUALS_CURVE` | NUMERIC | NOT NULL | This column contains the fte conversion factor for actuals curve. |
| `USAGE_CURVE` | BINARY | NULL | This column contains aggregate of assignment etc plus actuals for the task and children. |
| `ODF_NK_USAGE_CURVE` | NVARCHARMAX | NULL | This column contains the sqlcurve version of usage_curve. |
| `ODF_FTE_USAGE_CURVE` | NUMERIC | NOT NULL | This column contains the fte conversion factor for usage curve. |
| `ODF_SS_SQLCURVE` | INTEGER | NULL | This column indicates that sqlcurves need to be processed. |
| `ODF_SS_ASSGNS_CURVE` | INTEGER | NULL | This column indicates that aggregate etc and actuals curves need to be updated. |
| `ODF_SS_ESTIMATES_CURVE` | INTEGER | NULL | This column indicates that estimates curve has changed. |
| `ODF_SS_ACTUALS_CURVE` | INTEGER | NULL | This column indicates that estimates curve has changed. |
| `ODF_SS_TOTAL_USAGE_CURVE` | INTEGER | NULL | This column indicates that estimates curve has changed. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRPROJECTID` | [[SRM_PROJECTS]].`ID` | |
| `PRCHARGECODEID` | [[PRCHARGECODE]].`PRID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[DWH_TMP_FIN_TRANSACTION]] | `TASK_ID` | `PRID` |
| [[IMP_TRANSACTIONIMPORT]] | `TASKID` | `PRID` |
| [[NBI_PROJ_RES_RATES_AND_COSTS]] | `TASK_ID` | `PRID` |
| [[NBI_PRT_FACTS]] | `TASK_ID` | `PRID` |
| [[PPA_TRANSCONTROL]] | `TASK_ID` | `PRID` |
| [[PPA_TRANSWIPADJUST]] | `TASK_ID` | `PRID` |
| [[PPA_WIP]] | `TASK_ID` | `PRID` |
| [[PRASSIGNMENT]] | `PRTASKID` | `PRID` |
| [[PRCONSTRAINT]] | `PRTASKID` | `PRID` |
| [[PRJ_TASK_FORMULAS]] | `TASK_ID` | `PRID` |
| [[PRSUBPROJECT]] | `PRTASKID` | `PRID` |
| [[PRSUBPROJECT]] | `PRREFTASKID` | `PRID` |
| [[RPT_WBSINDEX]] | `PHASE_ID` | `PRID` |
| [[RPT_WBSINDEX]] | `ACTIVITY_ID` | `PRID` |
| [[RPT_WBSINDEX]] | `TASK_ID` | `PRID` |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[CAP_SCENARIOS]], [[CAP_SCENARIO_ASSIGNMENTS]], [[CAP_SCENARIO_MEMBERS]], [[CAP_SCENARIO_ROLES]], [[CAP_SCENARIO_TASKS]], [[CAP_SCENARIO_TEAM]], [[CLB_DMS_FILES]], [[CLB_DMS_FILE_STORE]], [[CLB_DMS_FLAT_HIERARCHY]], [[CLB_DMS_FOLDERS]], [[CLB_DMS_HISTORIES]], [[CLB_DMS_VERSIONS]], [[CMN_SEC_GROUPS]], [[CMN_SEC_USERS]], [[FIN_FINANCIALS]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[INV_APPLICATIONS]], [[INV_ASSETS]], [[INV_HIERARCHIES]], [[INV_IDEAS]], [[INV_INVESTMENTS]], [[INV_OTHERS]], [[INV_PRODUCTS]], [[INV_PROJECTS]], [[INV_SERVICES]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRJ_TASK_FORMULAS]], [[PRLINK]], [[PRNOTE]], [[PRSUBPROJECT]], [[PRTEAM]], [[PRTIMEENTRY]], [[PRTIMESHEET]], [[PRTYPECODE]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]], [[SRM_RESOURCES]], [[XDM_TSK_ITEM_ASSOCIATION]]
