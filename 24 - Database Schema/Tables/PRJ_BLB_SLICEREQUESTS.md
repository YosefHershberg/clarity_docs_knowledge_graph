---
title: PRJ_BLB_SLICEREQUESTS
type: db-table
table: PRJ_BLB_SLICEREQUESTS
columns: 27
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - PRJ_BLB_SLICES
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# PRJ_BLB_SLICEREQUESTS

> [!info] Description
> This table stores resource time slice requests. Those requests are used to extract information from database columns that store resource time information in binary format.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 04 - Time Timesheets and Slicing]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `REQUEST_NAME` | NVARCHAR | NOT NULL | User entered or seeded name for this slice request. |
| `FIELD` | NUMERIC | NULL | Data column being sliced. Values are: - 0 = PRAssignment.prActCurve - 1 = PRAssignment.prEstCurve - 2 = Current assignment usage - 3 = PRJ_RESOURCES.prAvailCurve - 4 = PRTeam.prAllocCurve - 5 = PRTimeEntry.prActCurve - 6 = Current team usage - 7 = Current task usage - 8 = Current project usage - 9 = Current assignment cost - 10 = Current team cost - 11 = Current task cost - 12 = Current project cost - 13 = Non-current assignment usage - 14 = Non-current team usage - 15 = Non-current task usage - 16 = Non-current project usage - 17 = Non-current assignment cost - 18 = Non-current team cost - 19 = Non-current task cost - 20 = Non-current project cost - 21 = Tentative estimates |
| `FREQUENCY` | NUMERIC | NULL | Indicates how often the data for this request will be rolled over to the next period. Values are: - 0 = Daily - 1 = Weekly - 2 = Bi-weekly - 3 = Monthly - 4 = Bi-monthly - 5 = Semi-monthly - 6 = Quarterly - 7 = Semi-annually - 8 = Yearly - 9 = Once |
| `FROM_DATE` | DATE | NULL | The start date for slices for this request. |
| `PERIOD` | NUMERIC | NULL | Duration (i.e., size) of the slices. Values are: - 0 = Daily - 1 = Weekly - 2 = Bi-weekly - 3 = Monthly - 4 = Bi-monthly - 5 = Semi-monthly - 6 = Quarterly - 7 = Semi-annually - 8 = Yearly |
| `NUM_PERIODS` | NUMERIC | NULL | The number of period slices to generate. |
| `EXPIRATION_DATE` | DATE | NULL | The date when the data for this request will be rolled over to the next period. |
| `REQUEST_COMPLETED_DATE` | DATE | NULL | The date this request was last run. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `DATE_FLAGS` | NUMERIC | NULL | The value of 1 (end of month) should be used when recalculating rollovers and from dates. |
| `IS_SYSTEM` | INTEGER | NOT NULL | Indicates if it is a system (seeded) row. Values are: - 1 = System (seeded) - 2 = Non-system row. This can be edited. |
| `TO_DATE` | DATE | NULL | The last date that will be included in the slices created. |
| `IS_SYNCHRONOUS` | INTEGER | NOT NULL | Indicates whether this request is involved with Instaslicing. This column cannot be modified by users. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | Indicates the destination table of the slice for this request. |
| `FROM_DATE_OFFSET` | NUMERIC | NOT NULL | The number of periods to offset the "from date" from the current date. If the row has a PERIOD value of 0 (where 0 = days) and a FROM_DATE_OFFSET of -7, the FROM_DATE column is set to 7 days in the past. |
| `REQUEST_STATUS` | NUMERIC | NULL |  |
| `IS_TEMPLATE` | NUMERIC | NOT NULL | If set, then this request is a template (that is, it will never be processed but is used for creating new slice requests). This is for internal use only and is not visible in the user interface. |
| `IS_ACTIVE` | INTEGER | NOT NULL | This column is for internal use only. |
| `IS_VISIBLE` | INTEGER | NOT NULL | If set up, this request is visible in the Timeslice admin user interface. |
| `USE_SQL_CURVE` | INTEGER | NOT NULL | This column is for internal use only. |
| `IS_DWH_REQUEST` | INTEGER | NOT NULL | This column indicates the request is used for Data warehouse purposes |
| `FISCAL_ENTITY_ID` | NUMERIC | NULL | This column is a foreign key into BIZ_COM_PERIODS indicating the entity to use for fiscal slicing |
| `FISCAL_PERIOD_TYPE` | NVARCHAR | NULL | This column is a foreign key into BIZ_COM_PERIODS indicating the period type to use for fiscal slicing |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PRJ_BLB_SLICES]] | `SLICE_REQUEST_ID` | `ID` |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
