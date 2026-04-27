---
title: EVM_TASK_COMPLETION
type: db-table
table: EVM_TASK_COMPLETION
columns: 4
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# EVM_TASK_COMPLETION

> [!info] Description
> This table stores information about changes to task percentage complete.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_ID` | NUMERIC | NULL |  |
| `TASK_ID` | NUMERIC | NULL | This column indicates the ID for the task for which this record belongs. |
| `EFFECTIVE_DATE` | DATE | NOT NULL | This column indicates the date for which the new percent complete became effective. |
| `PRPCTCOMPLETE` | FLOAT | NULL | This column indicates the new task percent complete value. |
