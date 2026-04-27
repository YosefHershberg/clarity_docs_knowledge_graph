---
title: INT_EXTERNAL_ATTRIBUTES
type: db-table
table: INT_EXTERNAL_ATTRIBUTES
columns: 15
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_EXTERNAL_ATTRIBUTES

> [!info] Description
> This table stores External Attributes of the External Objects.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `EXTERNAL_OBJECT_ID` | NUMERIC | NOT NULL | Parent id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the Integration Mapping. |
| `NAME` | NVARCHAR | NOT NULL | Name of the Integration Mapping. |
| `EXTERNAL_API_ALIAS` | NVARCHAR | NOT NULL | API alias or Element Name of the Attribute. |
| `EXTERNAL_DATA_TYPE` | NVARCHAR | NOT NULL | Data type of the Attribute. |
| `OBJ_UUID` | NVARCHAR | NULL | The Object UUID. |
| `OBJ_ID` | NVARCHAR | NULL | The Object Id. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `REAL_ATTR_TYPE` | NVARCHAR | NULL | Real Attribute Type of the Attribute. |
| `IS_CUSTOM` | INTEGER | NULL | A flag to show is it a custom attribute or not |
