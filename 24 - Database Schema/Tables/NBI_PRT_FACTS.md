---
title: NBI_PRT_FACTS
type: db-table
table: NBI_PRT_FACTS
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - NBI_PROJECT_CURRENT_FACTS
  - PRASSIGNMENT
  - PRTASK
  - PRTEAM
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_PRT_FACTS

> [!info] Description
> This table stores project, resource and task information for each project on a daily basis. Questions like "What is the estimated time to completion per day for resource 'Scott' on project 'Help Desk 123 Rollout'?" can be answered by querying this table.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to the project ID. This refers to [[NBI_PROJECT_CURRENT_FACTS]].PROJECT_ID. |
| `RESOURCE_ID` | NUMERIC | NOT NULL | The resource ID. This refers to [[SRM_RESOURCES]].ID. |
| `TEAM_ID` | NUMERIC | NOT NULL |  |
| `TASK_ID` | NUMERIC | NOT NULL | The task ID. This refers to [[PRTASK]].PRID. |
| `PRJ_OBJECT_ID` | NUMERIC | NOT NULL | The team ID or assignment ID. This refers either to [[PRTEAM]].PRID and [[PRASSIGNMENT]].PRID respectively. |
| `FACT_DATE` | DATE | NOT NULL | The fact date. |
| `ALLOCATED_QTY` | NUMERIC | NULL | The allocated quantity. |
| `ETC_QTY` | NUMERIC | NULL | The Estimate-to-complete (ETC) quantity. |
| `ACTUAL_QTY` | NUMERIC | NULL | The actual quantity. |
| `BASE_QTY` | NUMERIC | NULL | The base quantity. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PROJECT_ID` | [[NBI_PROJECT_CURRENT_FACTS]].`PROJECT_ID` | |
| `RESOURCE_ID` | [[SRM_RESOURCES]].`ID` | |
| `TASK_ID` | [[PRTASK]].`PRID` | |
| `PRJ_OBJECT_ID` | [[PRTEAM]].`PRID` | |
| `PRJ_OBJECT_ID` | [[PRASSIGNMENT]].`PRID` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]
