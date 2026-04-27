---
title: INT_DATATYPECONFIG
type: db-table
table: INT_DATATYPECONFIG
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_DATATYPECONFIG

> [!info] Description
> This table stores data type configuration for source and target atrribute mappings

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Unique code of the record. |
| `DIRECTION` | NVARCHAR | NOT NULL | Name of the Clarity Attribute. |
| `CLARITY_DATA_TYPE` | NVARCHAR | NOT NULL | Data type of Source Attribute. |
| `EXTERNAL_DATA_TYPE` | NVARCHAR | NOT NULL | Data type of Target Attribute. |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `CLARITY_EXT_DATATYPE` | NVARCHAR | NULL | Extended data type of Source Attribute. |
| `REAL_ATTRIBUTE_TYPE` | NVARCHAR | NULL | The Rally Real attribute type |
