---
title: WORK_PLAN_CONFIGURATIONS
type: db-table
table: WORK_PLAN_CONFIGURATIONS
columns: 20
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# WORK_PLAN_CONFIGURATIONS

> [!info] Description
> This table contains the Plan configurations.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique ID of the work plan configuration. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the code of the work plan configuration. |
| `CURR_PLAN_CAL_METHOD` | NVARCHAR | NOT NULL | This column refers to the current plan calculation method. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | This column indicates if the work plan configuration is system seeded. Such configuration can't be changed. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose. |
| `OBS_TYPE_CODE` | NVARCHAR | NULL | This column refers to obs name ( unique_name from prj_obs_types table ) from which the plan hierarchy is created |
| `ACTUALS_COLUMN_USE` | NVARCHAR | NOT NULL | This column refers to the column which is used for current plan actuals |
| `UNIT_OF_MEASURE` | NVARCHAR | NOT NULL | Specifies the unit type to measure |
| `NUMBER_DECIMAL_DISPLAY` | NUMERIC | NOT NULL | Specifies the allowed decimal places for displaying plan numbers |
| `TYPE` | NVARCHAR | NOT NULL | This column denotes if the conifguration is for the resource or investment type plan. |
| `OBS_SYNC_FROM_UNIT_ID` | NUMERIC | NULL | This column refers to the selected from node code of an OBS. |
| `OBS_SYNC_TO_LEVEL` | NUMERIC | NULL | This column refers to the selected lowest level of an OBS. |
| `INCLUDE_DESCENDANTS` | INTEGER | NOT NULL | This column refers the flag that tells whether to include investments from descendants of the selected lowest level of an OBS. |
| `OBS_SYNC_FROM_LEVEL` | NUMERIC | NULL | This column refers to the selected from node level of an OBS. |
| `SHOW_PREV_COLUMNS` | INTEGER | NOT NULL | This column refers the flag that tells whether to show previous year add remove columns in header and tables. |
| `ENABLE_TARGETS` | INTEGER | NOT NULL | This column refers the flag that tells whether to show the targets or not. |
| `DEST_CONFIG_ID` | NUMERIC | NULL | This column refers the newly created round configuration id if new round was started. |
