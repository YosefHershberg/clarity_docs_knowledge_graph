---
title: INT_OBJECTMAPPINGS
type: db-table
table: INT_OBJECTMAPPINGS
columns: 14
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_OBJECTMAPPINGS

> [!info] Description
> This table stores Object Mapping details between two systems.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the Object Mapping. |
| `IM_ID` | NUMERIC | NOT NULL | This Id belogs to Inetegration Mapping table |
| `NAME` | NVARCHAR | NOT NULL | Name of the Object Mapping. |
| `DIRECTION` | NVARCHAR | NOT NULL | Direction of Field Mapping. |
| `CLARITY_OBJECT` | NVARCHAR | NOT NULL | The Clarity System. |
| `EXTERNAL_OBJECT` | NVARCHAR | NOT NULL | The External Object |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CLARITY_OBJECT_ID` | NVARCHAR | NULL | The Clarity Object Id |
| `EXTERNAL_OBJECT_ID` | NVARCHAR | NULL | The External Object Id |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
