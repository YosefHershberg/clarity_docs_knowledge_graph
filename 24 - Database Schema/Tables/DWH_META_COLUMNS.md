---
title: DWH_META_COLUMNS
type: db-table
table: DWH_META_COLUMNS
columns: 29
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_META_COLUMNS

> [!info] Description
> This table stores the meta data for the Data Warehouse table columns.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column is the ID/Unique column for this table. |
| `OBJECT_CODE` | NVARCHAR | NULL | This column signifies the Clarity Object code. |
| `ATTRIBUTE_CODE` | NVARCHAR | NULL | This column signifies the Clarity Object Attribute code for which the Data Warehouse column is defined. |
| `SRC_TABLE_NAME` | NVARCHAR | NOT NULL | This column refers to the Source table/view used to populated the Data Warehouse column. |
| `SRC_COLUMN_NAME` | NVARCHAR | NOT NULL | This column refers to the Source Column in SRC_TABLE_NAME used to populated the Data Warehouse column. |
| `DWH_TABLE_NAME` | NVARCHAR | NOT NULL | This column refers to the Data Warehouse table. |
| `DWH_COLUMN_NAME` | NVARCHAR | NOT NULL | This column refers to the column name in DWH_TABLE_NAME which is populated during ETL Load. |
| `ATTR_TYPE` | NVARCHAR | NULL | This column refers to the Clarity attribute type. |
| `EXTENDED_TYPE` | NVARCHAR | NULL | This column refers to the Clarity attribute extended type. |
| `ATTR_DATA_TYPE` | NVARCHAR | NULL | This column refers to the SQL data type for the Data Warehouse column. |
| `ATTR_DATA_SIZE` | NVARCHAR | NULL | This column refers to the SQL data size for the Data Warehouse column. |
| `IS_LOOKUP_ATTR` | NUMERIC | NOT NULL | This column signifies if the meta data is for lookup attribute. |
| `IS_MULTIVALUED` | NUMERIC | NOT NULL | This column signifies if the meta data is for a multi-valued attribute. |
| `LOOKUP_TYPE` | NVARCHAR | NULL | This column signifies the Lookup Type of the attribute. |
| `LKP_DIM_TABLE_NAME` | NVARCHAR | NULL | This column signifies the Lookup/Dimension table name whose key column matches the SRC_COLUMN_NAME value, when DIM_KEY column is null. |
| `DWH_LOOKUP_KEY` | NVARCHAR | NULL | This column refers to another entry in meta columns table where DWH_TABLE_NAME.DWH_COLUMN_NAME = DWH_LOOKUP_KEY. This column value is the key used to update value of the column for which meta data is defined. |
| `DIM_KEY` | NVARCHAR | NULL | This column signifies the column name in LKP_DIM_TABLE_NAME whose value is used to update value of the column for which meta data is defined. |
| `DIM_DISPLAY` | NVARCHAR | NULL | This column signifies the column name in LKP_DIM_TABLE_NAME with which the column for which meta data is defined is updated with. |
| `IS_CUSTOM` | NUMERIC | NOT NULL | This column signifies if the meta data is for custom attribute. |
| `IS_KEY` | NUMERIC | NOT NULL | This column signifies if it is part of key columns for the fact table. |
| `IS_DELETED` | NUMERIC | NOT NULL | This column specifies if the Data Warehouse column should be deleted on the next ETL Load. |
| `CREATED_DATE` | DATE | NOT NULL | Audit Column - Date when this record is created. |
| `CREATED_BY` | NUMERIC | NOT NULL | Audit Column - User Id used to create this record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Audit Column - Date when this record is was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Audit Column - User Id used for the last update of this record. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | This column signifies if the Data Warehouse column is system defined. |
| `JS_PROCESSED` | NUMERIC | NOT NULL | This column signifies if the record is processed for Jaspersoft domain updates. |
| `IS_FISCAL_TSV` | NUMERIC | NOT NULL | This column signifies if this is a fiscal TSV type attribute. |
| `SOURCE_TYPE` | NVARCHAR | NULL | This column shows the source of the Table, if it was object based or manually added just for Data warehouse. |
