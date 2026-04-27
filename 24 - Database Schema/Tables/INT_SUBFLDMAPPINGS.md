---
title: INT_SUBFLDMAPPINGS
type: db-table
table: INT_SUBFLDMAPPINGS
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_SUBFLDMAPPINGS

> [!info] Description
> This table stores Object Mapping details between two systems.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the Sub Field Mapping. |
| `SO_ID` | NUMERIC | NOT NULL | This Id belongs to Sub Field Mapping table |
| `NAME` | NVARCHAR | NULL | Name of the Sub Field Mapping. |
| `DIRECTION` | NVARCHAR | NOT NULL | Direction of Sub Field Mapping. |
| `EXTERNAL_FIELD` | NVARCHAR | NOT NULL | The External field. |
| `EXTERNAL_DATA_TYPE` | NVARCHAR | NULL | The External data type. |
| `CLARITY_FIELD` | NVARCHAR | NOT NULL | The Clarity field. |
| `CLARITY_DATA_TYPE` | NVARCHAR | NULL | The Clarity data type |
| `EXTENDED_DATA_TYPE` | NVARCHAR | NULL | Data Type of Extended Attribute. |
| `SYNC_OPTION` | NVARCHAR | NOT NULL | Type of Sync Operation |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
