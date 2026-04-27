---
title: NBI_R_FACTS
type: db-table
table: NBI_R_FACTS
columns: 7
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_R_FACTS

> [!info] Description
> This table stores daily resource information. It stores one row for each resource for each day.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `RESOURCE_ID` | NUMERIC | NOT NULL | The resource ID. This refers to [[SRM_RESOURCES]].ID. |
| `FACT_DATE` | DATE | NOT NULL | The fact date. |
| `AVAILABLE_HOURS` | NUMERIC | NULL | The available hours. |
| `ETC_HOURS` | NUMERIC | NULL | The estimate-to-complete (ETC) hours. |
| `ACTUAL_HOURS` | NUMERIC | NULL | The actual hours in this period. |
| `BASE_HOURS` | NUMERIC | NULL | The baseline hours. |
| `ALLOCATED_HOURS` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RESOURCE_ID` | [[SRM_RESOURCES]].`ID` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
