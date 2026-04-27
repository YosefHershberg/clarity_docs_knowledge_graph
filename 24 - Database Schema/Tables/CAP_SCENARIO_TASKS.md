---
title: CAP_SCENARIO_TASKS
type: db-table
table: CAP_SCENARIO_TASKS
columns: 27
audience: dev
domain: development
canonical: true
erds:
  - Capacity
tags:
  - dev
  - schema
  - table
  - erd/capacity
---

# CAP_SCENARIO_TASKS

> [!info] Description
> This table stores information in rows copied from the PRTASK table when investments are added to a scenario. Any changes made to tasks while in scenario mode are made to rows in this table.

## Subject areas (ERDs)
- [[_MOC - Capacity ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the primary key for the task when in scenario mode. |
| `TASK_ID` | NUMERIC | NOT NULL | This field refers to the row in PRTASK that was added to the scenario. |
| `SCENARIO_ID` | NUMERIC | NOT NULL | This field contains the ID of the scenario to which this row belongs. |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to the investment to which this task belongs and is used when in scenario mode. |
| `START_DATE` | DATE | NULL | This field contains the task start date when in scenario mode. |
| `FINISH_DATE` | DATE | NULL | This field contains the task finish date and is used when in scenario mode. |
| `EXTERNAL_ID` | NVARCHAR | NULL | This field contains a copy of the value from the PRTASK table. |
| `PRIORITY` | NUMERIC | NULL | This column refers to the task priority. |
| `DURATION` | FLOAT | NULL | This field contains a copy of the value from PRTASK table. |
| `IS_MILESTONE` | NUMERIC | NOT NULL | This field contains a copy of the value from PRTASK table. |
| `IS_TASK` | NUMERIC | NOT NULL | This field contains a copy of the value from PRTASK table. |
| `IS_FIXED` | NUMERIC | NOT NULL | This field contains a copy of the value from PRTASK table. |
| `IS_LOCKED` | NUMERIC | NOT NULL | This field contains a copy of the value from the PRTASK table. |
| `IS_EXTERNAL` | NUMERIC | NOT NULL | This field contains a copy of the value from PRTASK table. |
| `TOTAL_FLOAT` | FLOAT | NULL | This field contains a copy of the value from PRTASK table. |
| `EARLY_START_DATE` | DATE | NULL | This field contains a copy of the value from PRTASK table. |
| `EARLY_FINISH_DATE` | DATE | NULL |  |
| `LATE_START_DATE` | DATE | NULL | This field contains a copy of the data from the PRTASK table. |
| `LATE_FINISH_DATE` | DATE | NULL | This field contains a copy of the data from the PRTASK table. |
| `WBS_LEVEL` | NUMERIC | NULL | This field contains a copy of the value from PRTASK table. |
| `WBS_SEQUENCE` | NUMERIC | NULL | This field contains a copy of the value from PRTASK table. |
| `WBS_PARSEQ` | NUMERIC | NULL | This field contains a copy of the value from PRTASK table. |
| `WBS_NNBSEQ` | NUMERIC | NULL | This field contains a copy of the value from PRTASK table. |
| `WBS_SORT` | NUMERIC | NOT NULL | This field contains a copy of the value from PRTASK table. |
| `PARTITION_CODE` | NVARCHAR | NULL | This field contains a copy of the partition code from PRTASK. |
| `SLICE_STATUS` | NUMERIC | NULL | This field indicates that the task row needs to be sliced when in scenario mode. |
| `MODIFIED_STATUS` | NVARCHAR | NULL | This column indicates if a task has been modified. |

## Related tables (same subject area)

[[CAP_SCENARIOS]], [[CAP_SCENARIO_ASSIGNMENTS]], [[CAP_SCENARIO_MEMBERS]], [[CAP_SCENARIO_ROLES]], [[CAP_SCENARIO_TEAM]], [[INV_INVESTMENTS]], [[PRASSIGNMENT]], [[PRTASK]], [[PRTEAM]]
