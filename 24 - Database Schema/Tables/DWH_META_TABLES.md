---
title: DWH_META_TABLES
type: db-table
table: DWH_META_TABLES
columns: 29
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_META_TABLES

> [!info] Description
> This table stores the meta data for the Data Warehouse tables.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column is the ID/Unique column for this table. |
| `SRC_TABLE_NAME` | NVARCHAR | NOT NULL | This column refers the source table name which is used to populate the Data Warehouse Table. |
| `SRC_KEY_COLUMN` | NVARCHAR | NULL | This column refers to the unique/key column in the specified SRC_TABLE_NAME. |
| `SRC_DISPLAY_COLUMN` | NVARCHAR | NULL | This column refers to the display column in the specified SRC_TABLE_NAME. |
| `SRC_DATE_COLUMN` | NVARCHAR | NOT NULL | This column refers to the date column in the specified SRC_TABLE_NAME, used to determine when the record last changed. |
| `DWH_TABLE_NAME` | NVARCHAR | NOT NULL | This column refers to the Data Warehouse Table which should be populated. |
| `DWH_KEY_COLUMN` | NVARCHAR | NULL | This column refers to the unique/key column in the specified DWH_TABLE_NAME. |
| `DWH_DISPLAY_COLUMN` | NVARCHAR | NULL | This column refers to the display column in the specified DWH_TABLE_NAME. |
| `DWH_DATE_COLUMN` | NVARCHAR | NULL | This column refers to the date column in the specified DWH_TABLE_NAME, used to determine when the record last changed. |
| `IS_LOOKUP` | NUMERIC | NOT NULL | This column signifies if the Data Warehouse Table is a lookup based table. |
| `IS_FACT` | NUMERIC | NOT NULL | This column signifies if the Data Warehouse Table is a Fact Table. |
| `DWH_DIM_TABLE_NAME` | NVARCHAR | NULL | This column if specified refers to the Dimension table name for the corresponding Fact Table. |
| `MULTI_LANG` | NUMERIC | NOT NULL | This column signifies if the Data Warehouse Table stores data for different languages. This is also set to true for tables which doesn't stores language based data but has a language based extension table storing captions for different languages. |
| `LOOKUP_SRC_TYPE` | NVARCHAR | NULL | This column if specified refers to the Lookup Source Type - Static, Dynamic for a lookup based table. |
| `DWH_AUDIT_DATE_REF` | NVARCHAR | NULL | This column refers to the audit column in the specified DWH_TABLE_NAME. |
| `IS_DELETED` | NUMERIC | NOT NULL | This column specifies if the Data Warehouse table should be deleted on the next ETL Load. |
| `CREATED_DATE` | DATE | NOT NULL | Audit Column - Date when this record is created. |
| `CREATED_BY` | NUMERIC | NOT NULL | Audit Column - User Id used to create this record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Audit Column - Date when this record is was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Audit Column - User Id used for the last update of this record. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | This column signifies if the Data Warehouse table is system defined. |
| `HAS_EXTENSION_TABLE` | NUMERIC | NOT NULL | This column signifies if the Data Warehouse table has an language based extension table. |
| `PROCESS_ORDER` | INTEGER | NULL |  |
| `SRC_DATE_CREATED_COLUMN` | VARCHAR | NULL |  |
| `DWH_DATE_CREATED_COLUMN` | VARCHAR | NULL |  |
| `USE_CREATED_DATE` | INTEGER | NOT NULL |  |
| `HAS_TSV_DATA` | NUMERIC | NOT NULL | This column indicates whether this table has tsv data fields or not. |
| `SOURCE_TYPE` | NVARCHAR | NULL | This column shows the source of the Table, if it was object based or manually added just for Data warehouse. |
| `RELOAD_TABLE` | NUMERIC | NOT NULL | Flag to indicate whether the curve table should be truncated and reloaded during incremental runs. 0 = false (no truncation), 1 = true (truncate on incremental runs) |
