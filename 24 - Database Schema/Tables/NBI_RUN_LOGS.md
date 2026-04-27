---
title: NBI_RUN_LOGS
type: db-table
table: NBI_RUN_LOGS
columns: 5
audience: dev
domain: development
canonical: true
erds:
  - Datamart
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_RUN_LOGS

> [!info] Description
> This table stores messages logged during the datamart extraction. It can be used to determine where a job failed.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `RUN_DATE` | DATE | NULL | The date the job was run. |
| `INFO` | NVARCHAR | NULL | The log message. |
| `JOB_ID` | NUMERIC | NULL | The background job ID. |
| `START_DATE` | DATE | NULL | The start date. |
| `END_DATE` | DATE | NULL |  |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
