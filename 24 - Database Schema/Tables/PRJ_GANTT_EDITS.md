---
title: PRJ_GANTT_EDITS
type: db-table
table: PRJ_GANTT_EDITS
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRJ_GANTT_EDITS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECT_ID` | NUMERIC | NOT NULL |  |
| `TENTATIVE_ID` | NUMERIC | NOT NULL |  |
| `USER_ID` | NUMERIC | NOT NULL |  |
| `EDITS` | NVARCHARMAX | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
