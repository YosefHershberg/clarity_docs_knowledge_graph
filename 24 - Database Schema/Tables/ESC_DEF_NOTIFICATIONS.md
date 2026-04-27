---
title: ESC_DEF_NOTIFICATIONS
type: db-table
table: ESC_DEF_NOTIFICATIONS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ESC_DEF_NOTIFICATIONS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `DEF_RULE_ID` | NUMERIC | NOT NULL |  |
| `OBJECT_ID` | NUMERIC | NOT NULL |  |
| `OBJECT_TYPE_CODE` | NVARCHAR | NOT NULL |  |
| `NOTIFY_WHEN_CODE` | NVARCHAR | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
