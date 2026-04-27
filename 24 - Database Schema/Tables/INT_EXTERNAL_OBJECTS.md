---
title: INT_EXTERNAL_OBJECTS
type: db-table
table: INT_EXTERNAL_OBJECTS
columns: 14
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_EXTERNAL_OBJECTS

> [!info] Description
> This table stores External Objects of the Integration.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `IM_ID` | NUMERIC | NOT NULL | Parent id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the External Object. |
| `NAME` | NVARCHAR | NOT NULL | Name of the External Object. |
| `EXTERNAL_API_ALIAS` | NVARCHAR | NOT NULL | API alias or Element Name of the External Object. |
| `TYPE_PATH` | NVARCHAR | NULL | TypePath of the External Object. |
| `OBJ_UUID` | NVARCHAR | NULL | The Object UUID. |
| `OBJ_ID` | NVARCHAR | NULL | The Object ID. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `EXT_ORDINAL` | NUMERIC | NULL | The Ordinal number of a portofilo item. This helps to determine the order of parent and child |
