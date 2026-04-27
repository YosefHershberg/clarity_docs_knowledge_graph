---
title: PRJ_TENTATIVE_TASKS
type: db-table
table: PRJ_TENTATIVE_TASKS
columns: 19
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRJ_TENTATIVE_TASKS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `TASK_ID` | NUMERIC | NOT NULL |  |
| `TENTATIVE_SCHEDULE_ID` | NUMERIC | NOT NULL |  |
| `PROJECT_ID` | NUMERIC | NOT NULL |  |
| `START_DATE` | DATE | NULL |  |
| `FINISH_DATE` | DATE | NULL |  |
| `DURATION` | FLOAT | NULL |  |
| `IS_EXTERNAL` | NUMERIC | NOT NULL |  |
| `TOTAL_FLOAT` | FLOAT | NULL |  |
| `EARLY_START_DATE` | DATE | NULL |  |
| `EARLY_FINISH_DATE` | DATE | NULL |  |
| `LATE_START_DATE` | DATE | NULL |  |
| `LATE_FINISH_DATE` | DATE | NULL |  |
| `WBS_SORT` | NUMERIC | NOT NULL |  |
| `PARTITION_CODE` | NVARCHAR | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
