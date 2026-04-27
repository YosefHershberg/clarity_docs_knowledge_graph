---
title: NBI_RESOURCE_TIME_SUMMARY
type: db-table
table: NBI_RESOURCE_TIME_SUMMARY
columns: 13
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - NBI_DIM_CALENDAR_TIME
  - NBI_DIM_OBS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_RESOURCE_TIME_SUMMARY

> [!info] Description
> This table stores summarized time-bucket resource management information. No resource detail is available in this table. The purpose of this table is to allow reporting on summarized data by calendar period and OBS units. Queries such as "How many hours were available in the US/West/California region in Q2 of 2010?" can be answered easily by querying this table.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `CALENDAR_TIME_KEY` | NVARCHAR | NOT NULL | The calendar time key. This refers to [[NBI_DIM_CALENDAR_TIME]].TIME_KEY. |
| `OBS1_UNIT_ID` | NUMERIC | NULL | The OBS 1 Unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS2_UNIT_ID` | NUMERIC | NULL | The OBS 2 Unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS3_UNIT_ID` | NUMERIC | NULL | The OBS 3 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS4_UNIT_ID` | NUMERIC | NULL | The OBS 4 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS5_UNIT_ID` | NUMERIC | NULL | The OBS 5 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `EXTERNAL_RESOURCES` | NUMERIC | NULL | The umber of external resources. |
| `INTERNAL_RESOURCES` | NUMERIC | NULL | The number of internal resources. |
| `AVAILABLE_HOURS` | NUMERIC | NULL | The available hours. |
| `ETC_HOURS` | NUMERIC | NULL | The estimate-to-complete (ETC) hours. |
| `ACTUAL_HOURS` | NUMERIC | NULL | The actual hours. |
| `BASE_HOURS` | NUMERIC | NULL | The baseline hours. |
| `ALLOCATED_HOURS` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CALENDAR_TIME_KEY` | [[NBI_DIM_CALENDAR_TIME]].`TIME_KEY` | |
| `OBS1_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS2_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS3_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS4_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS5_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
