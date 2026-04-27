---
title: INT_EXT_LOOKUP_MAP
type: db-table
table: INT_EXT_LOOKUP_MAP
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_EXT_LOOKUP_MAP

> [!info] Description
> This table stores External Lookup Data of the Integration.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the External Object. |
| `NAME` | NVARCHAR | NOT NULL | Name of the External Lookup Option. |
| `IM_ID` | NUMERIC | NOT NULL | Parent id of the record. |
| `CLARITY_OBJECT` | NVARCHAR | NOT NULL | The Clarity field. |
| `CLARITY_FIELD` | NVARCHAR | NOT NULL | The Clarity field. |
| `CLARITY_DATA_TYPE` | NVARCHAR | NULL | The Clarity data type |
| `EXTERNAL_FIELD` | NVARCHAR | NOT NULL | The External field. |
| `EXTERNAL_DATA_TYPE` | NVARCHAR | NULL | The External data type. |
| `EXTERNAL_OBJECT` | NVARCHAR | NOT NULL | The External data type. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CLARITY_LOOKUP_TYPE` | NVARCHAR | NULL | The Clarity lookup type |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
