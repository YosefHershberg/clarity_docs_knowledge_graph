---
title: ESC_RUN_OBJECTS
type: db-table
table: ESC_RUN_OBJECTS
columns: 13
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ESC_RUN_OBJECTS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `DEF_RULE_ID` | NUMERIC | NOT NULL |  |
| `OBJECT_ID` | NUMERIC | NOT NULL |  |
| `CURRENT_START_DATE` | DATE | NOT NULL |  |
| `CURRENT_ESCALATION_DATE` | DATE | NOT NULL |  |
| `CURRENT_LEVEL` | NUMERIC | NOT NULL |  |
| `IS_ACTIVE` | INTEGER | NOT NULL |  |
| `END_DATE` | DATE | NULL |  |
| `END_REASON_CODE` | NVARCHAR | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
