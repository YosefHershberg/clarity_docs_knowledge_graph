---
title: DWH_ATTR_METADATA
type: db-table
table: DWH_ATTR_METADATA
columns: 17
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_ATTR_METADATA

> [!info] Description
> This table contains rows of all DWH meta columns data

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the attribute. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of object for which the attribute belongs to. |
| `LINKED_OBJECT_CODE` | NVARCHAR | NULL | This column refers to the linked object code. If the object and child object has same DWMD definition then we keep master object for child object. Also for dw_investment parent is investment. |
| `ATTRIBUTE_CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the DWH attribute. |
| `LINKED_ATTR_CODE` | NVARCHAR | NULL | This column refers to the linked attribute code. This is a reference to reference attribute in the DWMD files. |
| `ATTRIBUTE_API_ALIAS` | NVARCHAR | NULL | This column refers to the api alias of the DWH attribute. |
| `INHERITED_FROM` | NVARCHAR | NULL | This column refers to the unique code of object from which the attribute is inherited. |
| `DATA_TYPE` | NVARCHAR | NULL | This column contains data type of the attribute. |
| `EXTENDED_DATA_TYPE` | NVARCHAR | NULL | This column contains extended data type of the attribute. |
| `IS_CUSTOM` | NUMERIC | NOT NULL | This column is set to true if the attribute is custom. |
| `IS_SECURE` | NUMERIC | NOT NULL | This column is set to true if the attribute is secured. |
| `FLS_MODE` | NVARCHAR | NULL | This column stores the mode of Field Level Security like edit_only |
| `IS_DWH_SPECIFIC` | NUMERIC | NULL | This column is set to track whether the attribute only precise to DWH and not in OMD. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the attribute was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the attribute was last updated. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the attribute. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the attribute. |
