---
title: PRJ_TENTATIVE_PROJECTS
type: db-table
table: PRJ_TENTATIVE_PROJECTS
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRJ_TENTATIVE_PROJECTS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `PROJECT_ID` | NUMERIC | NOT NULL |  |
| `TENTATIVE_SCHEDULE_ID` | NUMERIC | NOT NULL |  |
| `START_DATE` | DATE | NULL |  |
| `FINISH_DATE` | DATE | NULL |  |
| `IS_PUBLISHABLE` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
