---
title: PRJ_TASK_DEPENDENCY
type: db-table
table: PRJ_TASK_DEPENDENCY
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRJ_TASK_DEPENDENCY

> [!info] Description
> Association table between tasks and dependencies

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NULL | Primary key for the record. |
| `PARENT_TASK_ID` | NUMERIC | NULL | Reference to the parent task this dependency record is for. |
| `DEP_TYPE` | NUMERIC | NULL | Dependency relationship between the parent task and the dependant task in the dependency table. |
| `PR_DEPENDENCY_ID` | NUMERIC | NULL | Reference to the dependency information. |
| `CREATED_DATE` | DATE | NULL | Date the dependency was created. |
| `LAST_UPDATED_DATE` | DATE | NULL | Date the dependency was last updated |
| `CREATED_BY` | NUMERIC | NULL | User who created the dependency |
| `LAST_UPDATED_BY` | NUMERIC | NULL | User who last updated the dependency |
