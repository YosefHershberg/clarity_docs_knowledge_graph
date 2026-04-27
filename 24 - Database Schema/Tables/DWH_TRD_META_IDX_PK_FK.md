---
title: DWH_TRD_META_IDX_PK_FK
type: db-table
table: DWH_TRD_META_IDX_PK_FK
columns: 14
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_TRD_META_IDX_PK_FK

> [!info] Description
> Trending meta data table that stores header information for the tables being trended out of the box.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `DWH_TABLE_NAME` | NVARCHAR | NOT NULL | Name of the table that this index, primary key or foreign key constraint belongs to. |
| `IDX_PK_FK_NAME` | NVARCHAR | NOT NULL | Name of the index, primary key or foreign key constraint. |
| `RECORD_TYPE` | NVARCHAR | NULL | Record type: I=index, P=primary key, F=foreign key. |
| `PRIMARY_KEY_TABLE` | NVARCHAR | NULL | Name of the table that contains the primary key. |
| `PRIMARY_KEY_COLUMN` | NVARCHAR | NULL | Name of the primary key column. |
| `FOREIGN_KEY_COLUMN` | NVARCHAR | NULL | Name of the foreign key column. |
| `INDEX_COLUMN1` | NVARCHAR | NULL | The first column in the index. |
| `INDEX_COLUMN2` | NVARCHAR | NULL | The second column in the index. |
| `INDEX_COLUMN3` | NVARCHAR | NULL | The third column in the index. |
| `INDEX_COLUMN4` | NVARCHAR | NULL | The fourth column in the index. |
| `INDEX_COLUMN5` | NVARCHAR | NULL | The fifth column in the index. |
| `IS_UNIQUE` | NUMERIC | NOT NULL | Is the index unique (1=Yes, 0=No)? |
| `IS_SYSTEM` | NUMERIC | NOT NULL | Is this an out of the box index, PK or FK (1=Yes, 0=No)? |
| `PROCESSED` | NUMERIC | NOT NULL | Has this table been created in the system (1=Yes, 0=No)? |
