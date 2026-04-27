---
title: CAL_EVENT_DELETION_LOGS
type: db-table
table: CAL_EVENT_DELETION_LOGS
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# CAL_EVENT_DELETION_LOGS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `CAL_EVENT_ID` | NUMERIC | NOT NULL |  |
| `USERID` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `EVENT_TYPE` | NUMERIC | NOT NULL |  |
