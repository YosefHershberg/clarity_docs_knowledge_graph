---
title: ESC_DEF_RULES
type: db-table
table: ESC_DEF_RULES
columns: 18
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ESC_DEF_RULES

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `OBJECT_TYPE_CODE` | NVARCHAR | NOT NULL |  |
| `PARENT_OBJECT_TYPE_CODE` | NVARCHAR | NULL |  |
| `PARENT_OBJECT_ID` | NUMERIC | NULL |  |
| `PATH_TYPE_CODE` | NVARCHAR | NOT NULL |  |
| `PATH_ID` | NUMERIC | NULL |  |
| `INITIAL_PERIOD_INTERVAL` | NUMERIC | NOT NULL |  |
| `INITIAL_PERIOD_TYPE_CODE` | NVARCHAR | NOT NULL |  |
| `SUBSEQUENT_PERIOD_INTERVAL` | NUMERIC | NOT NULL |  |
| `SUBSEQUENT_PERIOD_TYPE_CODE` | NVARCHAR | NOT NULL |  |
| `AI_W_DUE_DATE_ACTION_CODE` | NVARCHAR | NOT NULL |  |
| `AI_WO_DUE_DATE_ACTION_CODE` | NVARCHAR | NOT NULL |  |
| `MAX_NO_OF_LEVELS` | NUMERIC | NOT NULL |  |
| `IS_ACTIVE` | INTEGER | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
