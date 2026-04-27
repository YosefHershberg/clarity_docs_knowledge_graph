---
title: PRTEAM
type: db-table
table: PRTEAM
columns: 68
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
  - PRJ_OBS_UNITS
  - SRM_PROJECTS
  - SRM_RESOURCES
fk_sources:
  - NBI_PRT_FACTS
  - PRASSIGNMENT
  - PRJ_REQ_AUDIT
  - RSM_REQ_RESOURCES
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

# PRTEAM

> [!info] Description
> This table is used to determine the resources allocated to which projects.

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
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another database. |
| `PRID` | NUMERIC | NULL | System-entered when you create a new row. It is the persistent, unique identifier for each row in a table. It is referenced by other tables using columns to refer to a specific row. |
| `PRPROJECTID` | NUMERIC | NULL | This refers to [[SRM_PROJECTS]].ID. |
| `PRRESOURCEID` | NUMERIC | NULL | This refers to the [[SRM_RESOURCES]].ID. |
| `PRISOPEN` | NUMERIC | NOT NULL | Used to effectively remove a resource from a project. When set to true, the resource can see the project in its Clarity timesheet project browser. When set to false, the resource cannot see the project in its project browser and cannot enter actuals on the project. |
| `PRAVAILSTART` | DATE | NULL | The start of the resource allocation for the project. If this column is Null, then the start is inherited from the project's start. |
| `PRAVAILFINISH` | DATE | NULL | The end of the resource allocation for the project. If this column is Null, the finish is inherited from the project finish. |
| `PRBOOKING` | NUMERIC | NULL | Indicates the booking status of the team member. Values are: - 5 = Soft - 15 = Hard - 10 = Mixed |
| `PRSTATUS` | NUMERIC | NULL | The request status used for adding a resource to the project team. Possible values are: - Open - Closed |
| `PRALLOCSUM` | FLOAT | NULL | The total allocation of the resource to the project, in units of seconds for labor and equipment resources. This column is set by the time slicing background process. |
| `PRALLOCCURVE` | BINARY | NULL | This column refers to the system-generated rate curve. The rate curve is the value by multiplying the PRALLOCDEFAULT rate by the resource calendar hours per week. Users can create exceptions in CA Clarity PPM, Open Workbench, or Microsoft Project. |
| `PRROLEID` | NUMERIC | NULL | The project specific role for this resource. This refers to [[SRM_RESOURCES]].ID. |
| `COPIED_FROM_TEMPLATE_ROLE` | NUMERIC | NULL |  |
| `SLICE_STATUS` | NUMERIC | NULL | Indicates the current state of the slices for this row. Values are: - Null = Slices are current - 1 = Slices may need to be updated because the row has changed since the slices were last created - 2 = Slices are in the process of being updated for this row - 3 = Slices are in the process of being rolled over |
| `REQUIREMENT_NAME` | NVARCHAR | NULL | The user-entered name for the staffing requirement of role or resources. If null, the resource name ([[SRM_RESOURCES]].FULL_NAME) is displayed. |
| `TEAM_UID` | NVARCHAR | NULL | This column identifies the unique team member across the project. This is needed because the projectID or resourceID has become ambiguous now that a role can be assigned to a project multiple times. The team_uid is normally set to the SRM_RESOURCES.unique_name unless already on the project. In this case, a modifier is added to make the value unique (e.g. xxxx:1, xxxx:2, and so on). |
| `INCIDENT_ACT_SUM` | FLOAT | NULL | The sum of all actuals posted against incidents. This is mapped to the investment by the team member represented by this record in the PRTEAM table. |
| `INCIDENT_ACT_CURVE` | BINARY | NULL | This value is a time-varying "curve." It represents the actuals posted against incidents mapped to the investment and worked on by the team member associated with this record in the PRTEAM table. |
| `INCIDENT_SLICE_STATUS` | NUMERIC | NULL | This column is the slice status used by the Time Slicing job to determine whether the INCIDENT_ACT_CURVE BLOB needs to be sliced in accordance with the time slicing parameters for that field. |
| `RSF_OBSUNIT_ID` | NUMERIC | NULL | The OBS unit associated ([[PRJ_OBS_UNITS]].ID) with this staffing requirement or team member. |
| `RSF_PERSON_TYPE` | NUMERIC | NULL | The column indicates the person type for the staffing requirement used for resource search (replace or requisitioning). |
| `RSF_RESUME_KEYWORDS` | NVARCHAR | NULL | This column indicates the resume keywords for the staffing requirement used for resource search (replace or requisitioning). |
| `HARD_SLICE_STATUS` | NUMERIC | NULL | Indicates the current state of the hard curve slices for this row. Values are: - Null = Slices are current - 1 = Slices may need to be updated because the row has changed since the slices were last created - 2 = Slices are in the process of being updated for this row - 3 = Slices are in the process of being rolled over. |
| `HARD_CURVE` | BINARY | NULL | Indicates the hard allocation amount. This is time-varying data stored as a curve (binary). The hard allocation curve is a rate (%) with a default value of 0.0%. It is defined explicitly by its segments. Like allocation, the hard allocation curve is multiplied by the resource availability to calculate hard hours. |
| `HARD_SUM` | FLOAT | NULL | The effective amount of the hard allocation (curve) of the resource to the project. This is measured in units of seconds for labor and equipment resources. This column is set by the time slicing background process. |
| `HARD_START` | DATE | NULL | The start of the resource hard allocation to the project. It is the minimum start of the hard curve. If the hard curve is null, then the hard start is null. |
| `HARD_FINISH` | DATE | NULL | The finish of the resource's hard allocation to the project. It is the maximum finish of the hard curve. If the hard curve is null, then the hard finish is null. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this row. |
| `CAPITAL_PERCENTAGE` | NUMERIC | NOT NULL | This column refers to the capitalization percent of planned cost of investment team. When applies on total cost it gives the Capital cost. |
| `ALLOCCOST_CURVE` | BINARY | NULL |  |
| `ALLOCCOST_SUM` | NUMERIC | NULL |  |
| `HARDALLCCOST_CURVE` | BINARY | NULL |  |
| `HARDALLCCOST_SUM` | NUMERIC | NULL |  |
| `ODF_SS_ALLOCCOST_CURVE` | NUMERIC | NULL |  |
| `ODF_SS_HARDALLCCOST_CURVE` | NUMERIC | NULL |  |
| `ODF_PRALLOCCURVE` | BINARY | NULL | This column contains a precompute allocation curve. |
| `ODF_HARD_CURVE` | BINARY | NULL | This column contains a precompute hard allocation curve. |
| `FORECAST_RATE` | NUMERIC | NULL | Forecast rate of the resource on team record. Used in the Resource Management module. Not available in CA PPM Studio. |
| `REQUESTED_MANAGER_ID` | NUMERIC | NULL | This column stores the resource id of the requested resource manager. Used in the Resource Management module. Not available in CA PPM Studio. |
| `ODF_SS_ALLOCATION_CURVE` | NUMERIC | NULL |  |
| `ODF_SS_HARD_ALLOC_CURVE` | NUMERIC | NULL |  |
| `ODF_NK_ALLOCCOST_CURVE` | NVARCHARMAX | NULL | SqlCurve information for ALLOCCOST_CURVE |
| `ODF_NK_HARDALLCCOST_CURVE` | NVARCHARMAX | NULL | SqlCurve information for HARDALLCCOST_CURVE |
| `ODF_NK_ODF_PRALLOCCURVE` | NVARCHARMAX | NULL | SqlCurve information for ALLOCATION_CURVE |
| `ODF_NK_ODF_HARD_CURVE` | NVARCHARMAX | NULL | SqlCurve information for HARD_CURVE |
| `ESTIMATES_CURVE` | BINARY | NULL | This column is an aggregation of estimates from all assignments. |
| `ODF_NK_ESTIMATES_CURVE` | NVARCHARMAX | NULL | This column is an aggregation of estimates from all assignments. |
| `ACTUALS_CURVE` | BINARY | NULL | This column is an aggregation of actuals from all assignments. |
| `ODF_NK_ACTUALS_CURVE` | NVARCHARMAX | NULL | This column is an aggregation of actuals from all assignments. |
| `ODF_SS_ASSGNS_CURVE` | INTEGER | NULL | This column is a slice status. |
| `ODF_SS_ESTIMATES_CURVE` | NUMERIC | NULL |  |
| `ODF_SS_ACTUALS_CURVE` | NUMERIC | NULL |  |
| `ODF_FTE_ODF_PRALLOCCURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for allocation curve. |
| `ODF_FTE_ODF_HARD_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for hard allocation curve. |
| `ODF_FTE_ESTIMATES_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for estimates curve. |
| `ODF_FTE_ACTUALS_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for actuals curve. |
| `TOTAL_USAGE_CURVE` | BINARY | NULL | ODF representation of the total usage curve. |
| `ODF_NK_TOTAL_USAGE_CURVE` | NVARCHARMAX | NULL | Sqlcurve representation of the total usage curve. |
| `ODF_FTE_TOTAL_USAGE_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for total usage curve. |
| `REMAIN_ALLOC_CURVE` | BINARY | NULL | ODF representation of the remaining allocation curve. |
| `ODF_NK_REMAIN_ALLOC_CURVE` | NVARCHARMAX | NULL | Sqlcurve representation of the remaining allocation curve. |
| `ODF_SS_REMAIN_ALLOC_CURVE` | INTEGER | NULL | This column indicates that remaining allocation needs to be recomputed. |
| `ODF_FTE_REMAIN_ALLOC_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for remaining allocation curve. |
| `ODF_SS_TOTAL_USAGE_CURVE` | INTEGER | NULL | This column indicates that total usage curve needs to be recomputed. |
| `ODF_SS_SQLCURVE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRPROJECTID` | [[SRM_PROJECTS]].`ID` | |
| `PRRESOURCEID` | [[SRM_RESOURCES]].`ID` | |
| `PRROLEID` | [[SRM_RESOURCES]].`ID` | |
| `REQUIREMENT_NAME` | [[SRM_RESOURCES]].`FULL_NAME` | |
| `RSF_OBSUNIT_ID` | [[PRJ_OBS_UNITS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[NBI_PRT_FACTS]] | `PRJ_OBJECT_ID` | `PRID` |
| [[PRASSIGNMENT]] | `TEAM_ID` | `PRID` |
| [[PRJ_REQ_AUDIT]] | `TEAM_ID` | `PRID` |
| [[PRJ_REQ_AUDIT]] | `ISOPEN` | `PRISOPEN` |
| [[PRJ_REQ_AUDIT]] | `BOOKING` | `PRBOOKINGSTATUS` |
| [[PRJ_REQ_AUDIT]] | `AVAILSTART` | `PRAVAILSTART` |
| [[PRJ_REQ_AUDIT]] | `AVAILFINISH` | `PRAVAILFINISH` |
| [[RSM_REQ_RESOURCES]] | `REQUIREMENT_ID` | `PRID` |
| [[RSM_REQ_RESOURCES]] | `TEAM_ID` | `PRID` |

## Related tables (same subject area)

[[CAP_SCENARIOS]], [[CAP_SCENARIO_ASSIGNMENTS]], [[CAP_SCENARIO_MEMBERS]], [[CAP_SCENARIO_ROLES]], [[CAP_SCENARIO_TASKS]], [[CAP_SCENARIO_TEAM]], [[CMN_SEC_USERS]], [[FIN_FINANCIALS]], [[INV_APPLICATIONS]], [[INV_ASSETS]], [[INV_HIERARCHIES]], [[INV_IDEAS]], [[INV_INVESTMENTS]], [[INV_OTHERS]], [[INV_PRODUCTS]], [[INV_PROJECTS]], [[INV_SERVICES]], [[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
