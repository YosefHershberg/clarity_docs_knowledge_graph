---
title: NBI_DIM_OBS_FLAT
type: db-table
table: NBI_DIM_OBS_FLAT
columns: 7
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - CMN_SEC_USERS
  - PRJ_OBS_TYPES
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_DIM_OBS_FLAT

> [!info] Description
> This table stores parent-child pairs for organizational breakdown structure (OBS) units. There are as many entries for a child as it has parent OBS units.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `OBS_TYPE_ID` | NUMERIC | NOT NULL | This refers to PRJ_OBS_TYPES. ID. |
| `PARENT_OBS_UNIT_ID` | NUMERIC | NULL | This refers to [[PRJ_OBS_TYPES]].ID for the parent OBS unit of this OBS unit. |
| `CHILD_OBS_UNIT_ID` | NUMERIC | NULL | This refers to [[PRJ_OBS_TYPES]].ID for the child OBS unit of this OBS unit. |
| `CREATED_DATE` | DATE | NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PARENT_OBS_UNIT_ID` | [[PRJ_OBS_TYPES]].`ID` | |
| `CHILD_OBS_UNIT_ID` | [[PRJ_OBS_TYPES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
