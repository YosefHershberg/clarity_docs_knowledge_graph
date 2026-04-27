---
title: DWH_TRD_META_ODF_COLUMNS
type: db-table
table: DWH_TRD_META_ODF_COLUMNS
columns: 22
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_TRD_META_ODF_COLUMNS

> [!info] Description
> Trending meta data table that stores column information for the columns being trended that are customer specific.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `DWH_TABLE_NAME` | NVARCHAR | NOT NULL | Name of the new table to be trended in the data warehouse. |
| `DWH_COLUMN_NAME` | NVARCHAR | NOT NULL | Name of the data warehouse column created for trending. |
| `SRC_TABLE_NAME` | NVARCHAR | NULL | Name of the source table that contains the column to be trended. |
| `SRC_COLUMN_NAME` | NVARCHAR | NULL | Name of the source column that contains the data to be trended. |
| `SRC_ALIAS` | NVARCHAR | NULL | Database query alias for the source table. |
| `JOIN_CONDITION` | NVARCHAR | NULL | If the DWH_TABLE_NAME and SRC_TABLE_NAME are different, the join condition that connects them. |
| `JOIN_TYPE` | NVARCHAR | NULL | Type of join: INNER, LEFT OUTER, etc. |
| `AGGREGATION_TYPE` | NVARCHAR | NULL | Type of aggregation if a group by is required. Ex: MAX, MIN, SUM, COUNT, etc. |
| `FORMULA` | NVARCHAR | NULL | Formula for getting the data. Could be a calculation or an inner select. |
| `GROUP_BY` | NUMERIC | NOT NULL | Is this column used in a group by (1=Yes, 0=No). |
| `INDEX_SEQUENCE` | NUMERIC | NOT NULL | Comes from a database system table to determine the column order. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | Is this trending column out of the box (1=Yes, 0=No)? |
| `FIELD_TYPE` | NVARCHAR | NOT NULL | Field type: STRING, NUMBER, DATE, etc. |
| `FIELD_LENGTH` | NUMERIC | NOT NULL | Length of the column. |
| `FIELD_PRECISION` | NUMERIC | NOT NULL | Decimal precision if the column is numeric. |
| `ALLOW_NULLS` | NUMERIC | NOT NULL | Does this column allow nulls (1=Yes, 0=No)? |
| `COLUMN_COMMENTS` | NVARCHAR | NULL | Description of the column data. |
| `IS_YEAR` | NUMERIC | NOT NULL | Does this field hold the year key? |
| `PROCESSED` | NUMERIC | NOT NULL | Has this column been created in the system (1=Yes, 0=No)? |
| `DB_TYPE` | NVARCHAR | NULL | Values are Oracle, MSSQL, or All |
| `IS_CORE_FIELD` | NUMERIC | NOT NULL | Is this a core field? |
| `IS_DELETED` | NUMERIC | NOT NULL | If set to 1 then this field should not be trended. |
