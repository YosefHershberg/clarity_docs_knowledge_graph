---
title: NBI_DIM_FISCAL_TIME
type: db-table
table: NBI_DIM_FISCAL_TIME
columns: 14
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - NBI_FM_PROJECT_TIME_SUMMARY
  - NBI_FM_PT_FACTS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_DIM_FISCAL_TIME

> [!info] Description
> This dimension table stores fiscal periods, quarters and years. It is populated by extracting MONTHLY periods from BIZ_COM_PERIODS during the datamart extraction.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TIME_KEY` | NVARCHAR | NOT NULL | This is the primary time key. This column refers to the time key in format - where the number refers to the BIZ_COM_PERIOD.ID value. For example: 2012-5000000. |
| `PERIOD_KEY` | NVARCHAR | NULL | This column refers to the period key in format - where the number refers to the BIZ_COM_PERIOD.ID value. For example: 2012-5000000. |
| `PERIOD` | NUMERIC | NULL | The numeric value of the period. |
| `PERIOD_START_DATE` | DATE | NULL | This column refers to the start date of this period. |
| `PERIOD_END_DATE` | DATE | NULL | This column refers to the end date of this period. |
| `QUARTER_KEY` | NVARCHAR | NULL | This column refers to the quarter key in format -Q where the number refers to the BIZ_COM_PERIOD.ID value. For example: 2012-Q5000000. |
| `QUARTER` | NUMERIC | NULL | The numeric value of the quarter in the year. |
| `YEAR_KEY` | NVARCHAR | NULL | The year key in format: . For example: 2010 or 2011. |
| `YEAR` | NUMERIC | NULL | The numeric value of the year. |
| `HIERARCHY_LEVEL` | NVARCHAR | NULL | The hierarchy level. Values are one of the following: - PERIOD - QUARTER - YEAR |
| `CREATED_DATE` | DATE | NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[NBI_FM_PROJECT_TIME_SUMMARY]] | `FISCAL_TIME_KEY` | `TIME_KEY` |
| [[NBI_FM_PT_FACTS]] | `FISCAL_TIME_KEY` | `TIME_KEY` |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
