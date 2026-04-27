---
title: FIN_WORKTYPE_TASK_MAP
type: db-table
table: FIN_WORKTYPE_TASK_MAP
columns: 12
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# FIN_WORKTYPE_TASK_MAP

> [!info] Description
> This table stores financial work type and task mappings.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Auto generated code of the financial work type and task mapping. |
| `FRCTLESS_ACCT_MAP_ID` | NUMERIC | NOT NULL | The Frictional Account Mapping this financial work type task mapping belongs to. |
| `FIN_WORK_TYPE` | NUMERIC | NOT NULL | Financial Work Type code present in the FIN_WORK_TYPE lookup. |
| `EXTERNAL_OPT_ID` | NVARCHAR | NULL | Rally lookup value object Id for Financial Work Type value. |
| `TASK_ID` | NVARCHAR | NOT NULL | The Task Id. |
| `COST_TYPE` | NVARCHAR | NOT NULL | The Cost Type. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
