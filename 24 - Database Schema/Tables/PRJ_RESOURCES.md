---
title: PRJ_RESOURCES
type: db-table
table: PRJ_RESOURCES
columns: 54
audience: dev
domain: development
canonical: true
erds:
  - Datamart
  - Resources
fk_targets:
  - CMN_SEC_USERS
  - PRCALENDAR
  - PRTYPECODE
fk_sources:
  - RSM_REQ_ITEM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/datamart
  - erd/resources
---

# PRJ_RESOURCES

> [!info] Description
> This table is used to generate lists of resources and to present information on assignments in various views, such as timesheets.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 03 - Resources Roles and Calendars]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]
- [[_MOC - Resources ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID cannot be confused with a resource in Repository B that has the same prName, prExternalID, and prID. Note: This value is no longer universally unique, but may be required by client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | The primary key for the table. It is the persistent, unique identifier for each row in the table. The system enters the value when you create a new row. It is referenced by other tables using columns to refer to a specific row. For example, prTypeCodeID column in the prResource table refers to a type code's PRID column). |
| `PRCATEGORY` | NVARCHAR | NULL | User-entered. This column is intended to hold a category name for the resource. |
| `PRTYPECODEID` | NUMERIC | NULL | The type code associated with this resource, possibly null. It is primarily used to default to a time entry's type code. This refers to [[PRTYPECODE]].PRID. |
| `PRISOPEN` | NUMERIC | NOT NULL | Indicates whether actuals can be allocated to a resource row's object via timesheets. Values are: - 0 = Cannot be allocated - 1 = Can be allocated |
| `PRTRACKMODE` | NUMERIC | NULL | Indicates whether or not a resource uses timesheets and the type of timesheet that is used. |
| `PRAVAILCURVE` | BINARY | NULL | Indicates when the resource is available to work and not work for the organization. |
| `PRCALENDARID` | NUMERIC | NULL | Indicates the calendar used for this resource. This column cannot be Null. This refers to [[PRCALENDAR]].PRID. |
| `PRISROLE` | NUMERIC | NOT NULL | Indicates whether or not a resource row is a role. |
| `PRUSERTEXT1` | NVARCHAR | NULL | Unrestricted, user-entered text to be used as needed. |
| `PRUSERTEXT2` | NVARCHAR | NULL | Unrestricted, user-entered text to use as needed. |
| `PRUSERTEXT3` | NVARCHAR | NULL | Unrestricted, user-entered text to use as needed. |
| `PRUSERTEXT4` | NVARCHAR | NULL | Unrestricted, user-entered text to use as needed. |
| `PRUSERFLAG1` | NUMERIC | NOT NULL | An unrestricted Boolean column. It can be used as needed. |
| `PRUSERFLAG2` | NUMERIC | NOT NULL | An unrestricted Boolean column. It can be used as needed. |
| `PRUSERNUMBER1` | FLOAT | NULL | Unrestricted, user-entered numeric column. It can be used as needed. |
| `PRUSERNUMBER2` | FLOAT | NULL | An Unrestricted, user-entered numeric column. It can be used as needed. |
| `PRPARENTID` | NUMERIC | NULL | The parent role ID. This column refers to [[PRJ_RESOURCES]].PRID. This column is Null for any non-role rows and will only indicate rows that are themselves roles. |
| `PRPRIMARYROLEID` | NUMERIC | NULL | The primary role of a non-role resource. It is Null for any role rows and will only indicate rows that are themselves roles. This refers to [[PRJ_RESOURCES]].PRID. |
| `SLICE_STATUS` | NUMERIC | NULL | Indicates whether the information in this table is out-of-date, currently updating, or up-to-date with information in the PRJ_BLB_SLICES table. Values are: - Null = Up-to-date - 1 = Out-of-date - 2 = Time slicing background process is currently updating the PRJ_BLB_SLICES table with this information |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this row. |
| `ODF_PRAVAILCURVE` | BINARY | NULL | Contains the precomputed availability curve. |
| `ODF_NK_ODF_PRAVAILCURVE` | NVARCHARMAX | NULL | Sql Curve representation of the availcurve. |
| `ODF_SS_AVAIL_CURVE` | NUMERIC | NULL |  |
| `ODF_NK_TOTAL_ALLOC` | NVARCHARMAX | NULL | Sql Curve representation of the total allocation. |
| `ODF_TOTAL_ALLOC` | BINARY | NULL | ODF representation of the total allocation. |
| `ODF_TOTAL_HARD_ALLOC` | BINARY | NULL | ODF representation of the total hard allocation. |
| `ODF_NK_TOTAL_HARD_ALLOC` | NVARCHARMAX | NULL | Sql Curve representation of the total hard allocation. |
| `ODF_SS_TOTAL_ALLOC_CURVE` | INTEGER | NULL | Slice status for the total allocation column |
| `ODF_SS_TOTAL_HARD_ALC_CURVE` | INTEGER | NULL | Slice status for the total hard allocation column |
| `ODF_TOTAL_ETC` | BINARY | NULL | ODF representation of the total assignment etc. |
| `ODF_TOTAL_ACTUALS` | BINARY | NULL | ODF representation of the total assignment actuals. |
| `ODF_TOTAL_USAGE` | BINARY | NULL | ODF representation of the total assignment usage. |
| `ODF_NK_TOTAL_ETC` | NVARCHARMAX | NULL | Sql Curve representation of the total assignment etc. |
| `ODF_NK_TOTAL_ACTUALS` | NVARCHARMAX | NULL | Sql Curve representation of the total assignment actuals. |
| `ODF_NK_TOTAL_USAGE` | NVARCHARMAX | NULL | Sql Curve representation of the total assignment usage. |
| `ODF_SS_TOTAL_ETC_CURVE` | INTEGER | NULL | Slice status for the total assignment etc. |
| `ODF_SS_TOTAL_ACTUALS_CURVE` | INTEGER | NULL | Slice status for the total assignment actuals. |
| `ODF_SS_TOTAL_USAGE_CURVE` | INTEGER | NULL | Slice status for the total assignment usage. |
| `ODF_SS_TEAM_AVAIL_CURVE` | INTEGER | NULL | Indicator to recompute team resource availability curve. |
| `ODF_REMAIN_AVAIL` | BINARY | NULL | Sql Curve representation of the remaining availability curve. |
| `ODF_NK_REMAIN_AVAIL` | NVARCHARMAX | NULL | ODF representation of the remaining availability curve. |
| `ODF_SS_REMAIN_AVAIL_CURVE` | INTEGER | NULL | Slice status indicator for the remaining availability curve. |
| `ODF_FTE_REMAIN_AVAIL` | NUMERIC | NOT NULL | FTE Conversion factor for the remaining availability curve. |
| `ODF_FTE_TOTAL_ALLOC` | NUMERIC | NOT NULL | FTE Conversion factor for the total allocation curve. |
| `ODF_FTE_TOTAL_HARD_ALLOC` | NUMERIC | NOT NULL | FTE Conversion factor for the total hard allocation curve. |
| `ODF_FTE_TOTAL_ETC` | NUMERIC | NOT NULL | FTE Conversion factor for the total estimates curve. |
| `ODF_FTE_TOTAL_ACTUALS` | NUMERIC | NOT NULL | FTE Conversion factor for the total actuals curve. |
| `ODF_FTE_TOTAL_USAGE` | NUMERIC | NOT NULL | FTE Conversion factor for the total usage curve. |
| `ODF_FTE_ODF_PRAVAILCURVE` | NUMERIC | NOT NULL | FTE Conversion factor for the availability curve. |
| `ODF_SS_SQLCURVE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRTYPECODEID` | [[PRTYPECODE]].`PRID` | |
| `PRCALENDARID` | [[PRCALENDAR]].`PRID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[RSM_REQ_ITEM_RESOURCES]] | `RESOURCE_ID` | `ID` |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[INV_PROJECTS]], [[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_ROLES_FLAT]], [[PRTASK]], [[PRTEAM]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
