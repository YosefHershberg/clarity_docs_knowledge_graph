---
title: CAL_SCHEDULED_EVENTS
type: db-table
table: CAL_SCHEDULED_EVENTS
columns: 22
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# CAL_SCHEDULED_EVENTS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `REPEAT_TYPE` | NUMERIC | NULL |  |
| `REPEAT_INTERVAL` | NUMERIC | NULL |  |
| `START_DATE` | DATE | NOT NULL |  |
| `END_DATE` | DATE | NULL |  |
| `RUN_MINUTE` | NUMERIC | NULL |  |
| `CLASS_NAME` | NVARCHAR | NOT NULL |  |
| `METHOD_NAME` | NVARCHAR | NULL |  |
| `STATUS_ID` | NUMERIC | NULL |  |
| `WHICH_DAYS_OF_WEEK` | NUMERIC | NULL |  |
| `FIRST_OR_ALL_DAYS` | INTEGER | NULL |  |
| `WHICH_WEEKS` | NUMERIC | NULL |  |
| `WHICH_MONTHS` | NUMERIC | NULL |  |
| `WHICH_DAYS` | NUMERIC | NULL |  |
| `RUN_HOUR` | NUMERIC | NULL |  |
| `ARGUMENT` | NVARCHAR | NULL |  |
| `RESPECT_DAYLIGHT_TIME` | INTEGER | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `OBJECT_TYPE` | NUMERIC | NULL |  |
