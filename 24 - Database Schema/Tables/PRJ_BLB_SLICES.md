---
title: PRJ_BLB_SLICES
type: db-table
table: PRJ_BLB_SLICES
columns: 5
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - PRJ_BLB_SLICEREQUESTS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# PRJ_BLB_SLICES

> [!info] Description
> This table stores resource timeslice/value pairs that correspond to a slice request and to a specified row of the appropriate object type. For example, if there is a slice request to slice resource assignment estimates into weeks, there will be a row in PRJ_BLB_SLICEREQUESTS whose FIELD is 1 and, for every week sliced, there will be rows in PRJ_BLB_SLICES referencing the row in PRJ_BLB_SLICEREQUESTS (the join is between PRJ_BLB_SLICEREQUESTS.ID and PRJ_BLB_SLICES.SLICE_REQUEST_ID) that correspond to rows in PRAssignment (the join is between PRJ_BLB_SLICES.PRJ_OBJECT_ID and PRAssignment.prID).

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 04 - Time Timesheets and Slicing]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `SLICE_REQUEST_ID` | NUMERIC | NULL | Used to join to [[PRJ_BLB_SLICEREQUESTS]].ID. |
| `PRJ_OBJECT_ID` | NUMERIC | NULL | Used to join to PRJ_RESOURCES, PRTeam, PRTimeEntry, PRAssignment or PRJ_BASELINE_DETAILS tables as determined by the PRJ_SLICEREQUESTS.FIELD. |
| `SLICE_DATE` | DATE | NULL | The starting date represented by this slice. |
| `SLICE` | NUMERIC | NULL | The total for this slice. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `SLICE_REQUEST_ID` | [[PRJ_BLB_SLICEREQUESTS]].`ID` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
