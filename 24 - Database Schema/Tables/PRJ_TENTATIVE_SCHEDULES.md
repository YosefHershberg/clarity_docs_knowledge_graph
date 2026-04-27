---
title: PRJ_TENTATIVE_SCHEDULES
type: db-table
table: PRJ_TENTATIVE_SCHEDULES
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRJ_TENTATIVE_SCHEDULES

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `CODE` | NVARCHAR | NOT NULL |  |
| `PROJECT_ID` | NUMERIC | NOT NULL |  |
| `PUBLISHED_DATE` | DATE | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `AUTOSCHEDULE_JOB_ID` | NUMERIC | NULL |  |
| `AUTO_SHIFT_SUCCESSORS` | NUMERIC | NOT NULL | This flag indicates whether the tentative schedule should automatically shift successor task dates when the dates for a predecessor task are changed. |
