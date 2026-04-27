---
title: INT_EXTERNAL_DATA
type: db-table
table: INT_EXTERNAL_DATA
columns: 18
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_EXTERNAL_DATA

> [!info] Description
> This table stores External Lookup Data of the Integration.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the External Object. |
| `IM_ID` | NUMERIC | NOT NULL | Parent id of the record. |
| `NAME` | NVARCHAR | NULL | Name of the External Lookup Option. |
| `EXTERNAL_OPT_ID` | NVARCHAR | NOT NULL | Unique id of the External Lookup |
| `EXTERNAL_ATTR_NAME` | NVARCHAR | NOT NULL | Name of the External Attribute. |
| `EXTERNAL_ATTR_ID` | NVARCHAR | NOT NULL | Unique id of the External Attribute. |
| `EXTERNAL_OBJ_NAME` | NVARCHAR | NULL | Name of the External Object. |
| `EXTERNAL_OBJ_ID` | NVARCHAR | NULL | Unique id of the External Object. |
| `EXTERNAL_API_ALIAS` | NVARCHAR | NOT NULL | API alias of the External Object. |
| `EXTERNAL_DATA_TYPE` | NVARCHAR | NOT NULL | Data Type of External Attribute. |
| `EXTENDED_DATA_TYPE` | NVARCHAR | NULL | Data Type of Extended Attribute. |
| `EXTERNAL_OBJ_UUID` | NVARCHAR | NULL | UUID of External Object. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
