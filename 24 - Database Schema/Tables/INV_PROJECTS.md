---
title: INV_PROJECTS
type: db-table
table: INV_PROJECTS
columns: 57
audience: dev
domain: development
canonical: true
erds:
  - Projects
  - Resources
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/projects
  - erd/resources
---

# INV_PROJECTS

> [!info] Description
> This table stores CA Clarity PPM-defined project or program-specific data.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 01 - Investments and Projects]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Projects ERD]]
- [[_MOC - Resources ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID values can be distinguished from a resource in Repository B who has the same prName, prExternalID, and prID values. Note: This value is no longer universally unique, but may be required by client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | This column refers to the primary key ID used to join this investment to the master table INV_INVESTMENTS. It is unique for each row in the table. The system enters the corresponding value when you create a new row. |
| `PRGUIDELINES` | NVARCHAR | NULL | This column refers to the reference by URL or file name and extension to a guideline file. |
| `PRDEPARTMENT` | NVARCHAR | NULL | This column refers to the name of a group or body of people in an organization but can be used to save any text data. |
| `PRVERSION` | NUMERIC | NULL | This column references the last exported version of a project row (with a lock). The system uses this column to verify and prevent overwriting of current data with out-of-date data. |
| `PRUSERTEXT6` | NVARCHAR | NULL | This column refers to the unrestricted, user-entered text to be used as needed. |
| `PRUSERTEXT7` | NVARCHAR | NULL | This column refers to the unrestricted, user-entered text to be used as needed. |
| `PRBUDGET` | FLOAT | NULL | This column holds an amount equal to the projected cost of a project. This may be used by your project scheduling software. |
| `PRASOF` | DATE | NULL | This column refers to the user-editable date used to determine the earned value (that is, the "as-of date" the actual work is completed on the project). |
| `PRCPMTYPE` | NUMERIC | NULL | The unit in this column relates to a Critical Path Method, which is important to an Open Workbench project. Values are: - 0 = Current - 1 = Baseline |
| `PRSPONSOREDBY` | NVARCHAR | NULL | This column refers to the name used by some project management programs indicating the sponsoring individual. |
| `PRREQUESTEDBY` | NVARCHAR | NULL | This column is intended to hold a name used by some project management programs. |
| `PRREQUESTEDTIME` | DATE | NULL | This column refers to the date and time used by some project scheduling programs. |
| `PRUSERTEXT1` | NVARCHAR | NULL | This column refers to the unrestricted, user-entered text to be used as needed. |
| `PRUSERTEXT2` | NVARCHAR | NULL | This column refers to the unrestricted, user-entered text to be used as needed. |
| `PRUSERTEXT3` | NVARCHAR | NULL | This column refers to the unrestricted, user-entered text to be used as needed. |
| `PRUSERTEXT4` | NVARCHAR | NULL | This column refers to the unrestricted, user-entered text to be used as needed. |
| `PRFORMAT` | NUMERIC | NULL | This column refers to the number associated with a file format. The system uses this number to determine the file format to use when exporting a project. Values are: - 0 = Open Workbench - 11 = Microsoft Project |
| `PRFISCALSTART` | DATE | NULL | This column refers to the date intended to be the fiscal start date for your organization. This date is used by some project management programs and, if needed, is exported by the system. |
| `PRUSERTEXT5` | NVARCHAR | NULL | This column refers to the unrestricted, user-entered text to be used as needed. |
| `PRPCTCOMPLETE` | FLOAT | NULL | This column refers to the default value that every new task inherits so that the project manager can define the task as being partially complete upon starting. |
| `PRCLOSEDTIME` | DATE | NULL | This column refers to the current system date and time when the user sets the virtual column PRProject.prIsClosed to True. |
| `PRSIZEADJUST` | FLOAT | NULL | This column refers to the amount to increase an estimate if PRSIZEADJUSTON is set to true. |
| `PRSIZEADJUSTON` | NUMERIC | NOT NULL | This column indicates whether the size adjustment is turned on. - 0 = False - Any other value = True |
| `PRSTARTIMPOSED` | NUMERIC | NOT NULL | This column indicates whether or not the start of a project is determined by something other than its own task durations and dependencies. With the prStartImposed column set to true, Open Workbench schedules the start of the first task on or after the value of the prStart column. Values are: - 0 = False - 1 = True |
| `PRFINISHIMPOSED` | NUMERIC | NOT NULL | This column indicates whether the finish of a project is forced so that the Open Workbench scheduling tool will not move the finish date when recalculating task durations. Values are: - 0 = False - 1 = True |
| `PRMODBY` | NVARCHAR | NULL | This column refers to the name of the user who modified the row. |
| `PRMODTIME` | DATE | NULL | This column refers to the system-generated date and time when a user modified a row. |
| `PROCESS_SCALE_BDGT` | NUMERIC | NULL | If the project is built using the template process, this column represents the percentage that the financial values increased or decreased by as they are copied into the project. |
| `PROCESS_SCALE_WORK` | NUMERIC | NULL | If the project is being built using a template process, this column represents the percentage that the estimates on assignments are increased or decreased by as they are copied into the project. |
| `STAGE_IDENTIFIER` | NVARCHAR | NULL | The Six Sigma Stage identifier. |
| `IS_PROGRAM` | NUMERIC | NOT NULL | This column indicates if this project is a program. |
| `IS_TEMPLATE` | NUMERIC | NOT NULL | This column indicates if the project is marked as a template or not. Templates are used to create new projects and are restricted from some project functionality. |
| `IS_REVENUE_PLAN` | NUMERIC | NOT NULL | A flag that determines if the plan actuals are in revenue or benefits. It is used in the financial plan. |
| `TYPE` | NVARCHAR | NOT NULL | This column represents the type of project. |
| `RCF_OBJECTIVES` | NUMERIC | NULL | The level of risk with respect to the objectives. A contributing factor for the risk score. |
| `RCF_SPONSORSHIP` | NUMERIC | NULL | The level of sponsorship risk. A contributing factor for the risk score. |
| `RCF_FUNDING` | NUMERIC | NULL | The level of funding risk. A contributing factor for the risk score. |
| `RCF_RESOURCE_AVAIL` | NUMERIC | NULL | The level of resource availability risk. A contributing factor for the risk score. |
| `RCF_INTERDEPENDENCY` | NUMERIC | NULL | The level of risk due to interdependencies. A contributing factor for the risk score. |
| `RCF_TECHNICAL` | NUMERIC | NULL | The level of technical risk. A contributing factor for the risk score. |
| `RCF_HUMAN_INTERFACE` | NUMERIC | NULL | The level of human interface risk. A contributing factor for the risk score. |
| `RCF_ORG_CULTURE` | NUMERIC | NULL | The level of organizational culture risk. One of the contributing factors for the risk score. |
| `RCF_SUPPORTABILITY` | NUMERIC | NULL | The level of supportability risk. A contributing factor for the risk score. |
| `RCF_IMPLEMENTATION` | NUMERIC | NULL | The level of implementation risk. It is a contributing factor for the risk score. |
| `RCF_FLEXIBILITY` | NUMERIC | NULL | The level of flexibility risk. A contributing factor for the risk score. |
| `LAST_CALC_RUN` | DATE | NULL | The timestamp of when the Task Estimates tool was last run at the project level. |
| `REQ_APPROVAL_REQD` | NUMERIC | NOT NULL | A flag indicating that for booking requisitions, project manager approval is required for this project. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this record. |
| `EV_PERIOD_ID` | NUMERIC | NULL | This column references an Earned Value Reporting Period definition. |
| `EV_CALC_METHOD` | NUMERIC | NULL | This column defines which earned value calculation method is in effect for this project. |
| `EV_BCWP_OVR` | FLOAT | NULL |  |
| `PERCENT_COMPLETE` | NUMERIC | NOT NULL | This column defines the percent complete of all work in the plan. |
| `PERCENT_CALC_MODE` | NUMERIC | NOT NULL | This column defines which calculation method is used to calculate the Percent Complete of this project and all of the tasks assigned to this project. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_RESOURCES]]
