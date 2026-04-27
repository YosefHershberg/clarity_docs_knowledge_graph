---
title: NBI_CFG_OBS_ASSIGNMENTS
type: db-table
table: NBI_CFG_OBS_ASSIGNMENTS
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - CMN_SEC_USERS
  - PRJ_OBS_TYPES
  - PRJ_OBS_UNITS
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_CFG_OBS_ASSIGNMENTS

> [!info] Description
> This table stores the mappings of organizational breakdown structure (OBS) types to specific columns in the datamart project and resource tables.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `OBJECT_TYPE` | NVARCHAR | NOT NULL | The object type. Values are: - PROJECT - RESOURCE |
| `OBS_COLUMN_NAME` | NVARCHAR | NOT NULL | The name of the project or resource datamart column that this OBS type is mapped to. |
| `OBS_TYPE_ID` | NUMERIC | NULL | Identifies the OBS type. This refers [[PRJ_OBS_TYPES]].ID. |
| `OBS_UNIT_DEFAULT` | NUMERIC | NULL | Identifies the OBS unit used if a project or resource has no OBS unit assigned to it. This refers to [[PRJ_OBS_UNITS]].ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `OBS_TYPE_ID` | [[PRJ_OBS_TYPES]].`ID` | |
| `OBS_UNIT_DEFAULT` | [[PRJ_OBS_UNITS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
