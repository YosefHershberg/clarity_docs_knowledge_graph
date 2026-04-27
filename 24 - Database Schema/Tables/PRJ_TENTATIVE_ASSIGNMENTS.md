---
title: PRJ_TENTATIVE_ASSIGNMENTS
type: db-table
table: PRJ_TENTATIVE_ASSIGNMENTS
columns: 14
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRJ_TENTATIVE_ASSIGNMENTS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `ASSIGNMENT_ID` | NUMERIC | NOT NULL |  |
| `TENTATIVE_SCHEDULE_ID` | NUMERIC | NOT NULL |  |
| `TENTATIVE_TASK_ID` | NUMERIC | NOT NULL |  |
| `START_DATE` | DATE | NULL |  |
| `FINISH_DATE` | DATE | NULL |  |
| `ESTIMATE_SUM` | FLOAT | NULL |  |
| `ACTUAL_SUM` | FLOAT | NULL |  |
| `PREXTENSION` | BINARY | NULL |  |
| `SLICE_STATUS` | NUMERIC | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
