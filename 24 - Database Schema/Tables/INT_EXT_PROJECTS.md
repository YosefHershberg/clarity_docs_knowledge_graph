---
title: INT_EXT_PROJECTS
type: db-table
table: INT_EXT_PROJECTS
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_EXT_PROJECTS

> [!info] Description
> This table stores External Project of the Integration.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the External Project. |
| `NAME` | NVARCHAR | NOT NULL | Name of the External Project. |
| `INTEGRATION_CODE` | NVARCHAR | NOT NULL | Integration Code |
| `OBJECT_ID` | NVARCHAR | NOT NULL | The External Project Id |
| `OBJECT_UUID` | NVARCHAR | NOT NULL | The Project Object UUID. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
