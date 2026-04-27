---
title: RPT_WBSINDEX
type: db-table
table: RPT_WBSINDEX
columns: 6
audience: dev
domain: development
canonical: true
fk_targets:
  - PRTASK
tags:
  - dev
  - schema
  - table
---

# RPT_WBSINDEX

> [!info] Description
> This table stores the flattened project work breakdown structure (WBS) for three WBS levels.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to the project identifier. |
| `PHASE_ID` | NUMERIC | NOT NULL | This column refers to the foreign key for Phase ID equal to [[PRTASK]].PRID. Phases are at the top level of the WBS. |
| `ACTIVITY_ID` | NUMERIC | NOT NULL | This column refers to the foreign key for Activity ID equal to [[PRTASK]].PRID. Activities are at the second level of the WBS. |
| `TASK_ID` | NUMERIC | NOT NULL | This column refers to the foreign key for Task ID equal to [[PRTASK]].PRID. |
| `WBS_LEVEL` | NUMERIC | NOT NULL | This column indicates the WBS level of the phase, activity, or task. |
| `IS_TASK` | NUMERIC | NOT NULL | This column indicates if the WBS item is a task. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PHASE_ID` | [[PRTASK]].`PRID` | |
| `ACTIVITY_ID` | [[PRTASK]].`PRID` | |
| `TASK_ID` | [[PRTASK]].`PRID` | |
