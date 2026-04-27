---
title: NBI_DIM_CALENDAR_TIME
type: db-table
table: NBI_DIM_CALENDAR_TIME
columns: 18
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - NBI_PM_PT_FACTS
  - NBI_RESOURCE_TIME_SUMMARY
  - NBI_RT_FACTS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_DIM_CALENDAR_TIME

> [!info] Description
> This dimension table stores calendar days, weeks, months, quarters and years. It is automatically populated when the datamart extraction program is run.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TIME_KEY` | NVARCHAR | NOT NULL | The primary key. |
| `DAY_KEY` | NVARCHAR | NULL | The day key, only defined for rows where HIERARCHY_LEVEL is set to DAYS. The format is -[assign the value for mm in your book]-. For example: 2011-03-25. |
| `DAY` | DATE | NULL | The day (i.e., the database date with no time stamp). This column is only defined for rows where HIERARCHY_LEVEL is set to DAYS. |
| `WEEK_KEY` | NVARCHAR | NULL | The week key in the format -WEEK. For example: 2011-WEEK12. This column is defined only for rows where HIERARCHY_LEVEL is set to DAYS or WEEKS. |
| `WEEK` | NUMERIC | NULL | The numeric value of the week in the year. This column is defined only for rows where HIERARCHY_LEVEL is set to DAYS or WEEKS. |
| `MONTH_KEY` | NVARCHAR | NULL | The month key in the format -[assign the value for mm in your book]. For example, 2011-03. This column is defined only for rows where HIERARCHY_LEVEL is set to DAYS, WEEKS or MONTHS. |
| `MONTH` | NUMERIC | NULL | The numeric value of the month in year. This column is defined only for rows where HIERARCHY_LEVEL is set to DAYS, WEEKS or MONTHS. |
| `QUARTER_KEY` | NVARCHAR | NULL | The quarter key in format -Q. For example, 2011-Q1. This column is defined only for rows where HIERARCHY_LEVEL is set to DAYS, WEEKS, MONTHS or QUARTERS. |
| `QUARTER` | NUMERIC | NULL | The numeric value of quarter in year. This column is defined only for rows where HIERARCHY_LEVEL is set to DAYS, WEEKS, MONTHS or QUARTERS. |
| `YEAR_KEY` | NVARCHAR | NULL | The year key in format . For example: 2010 or 2011. |
| `YEAR` | NUMERIC | NULL | The numeric value of the year. |
| `PERIOD_START_DATE` | DATE | NULL | This column refers to the start date of the time period. |
| `PERIOD_END_DATE` | DATE | NULL | This column refers to the end date of the time period. |
| `HIERARCHY_LEVEL` | NVARCHAR | NULL | The hierarchy level. Values are one of the following: - DAY - WEEK - MONTH - QUARTER - YEAR |
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
| [[NBI_PM_PT_FACTS]] | `CALENDAR_TIME_KEY` | `TIME_KEY` |
| [[NBI_RESOURCE_TIME_SUMMARY]] | `CALENDAR_TIME_KEY` | `TIME_KEY` |
| [[NBI_RT_FACTS]] | `CALENDAR_TIME_KEY` | `TIME_KEY` |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
