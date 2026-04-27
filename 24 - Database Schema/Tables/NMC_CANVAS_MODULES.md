---
title: NMC_CANVAS_MODULES
type: db-table
table: NMC_CANVAS_MODULES
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_CANVAS_MODULES

> [!info] Description
> This table stores External app data.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the canvas module. |
| `NAME` | NVARCHAR | NULL | Name of the canvas module. |
| `BLUEPRINT_ID` | NUMERIC | NULL | Associated blueprint to the canvas module. |
| `TYPE` | NVARCHAR | NOT NULL | Type of the instance. |
| `IS_SYSTEM` | NUMERIC | NULL | Canvas module is system seeded or not |
| `SOURCE_CANVAS_MODULE` | NUMERIC | NULL | source from which instance is copied |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
