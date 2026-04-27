---
title: DWH_TRD_META_TABLES
type: db-table
table: DWH_TRD_META_TABLES
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_TRD_META_TABLES

> [!info] Description
> Trending meta data table that stores header information for the tables being trended out of the box.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `DWH_TABLE_NAME` | NVARCHAR | NOT NULL | Name of the new table to be trended in the data warehouse. |
| `SRC_VIEW_NAME` | NVARCHAR | NOT NULL | Name of the view created to populate the data warehouse table. |
| `TABLE_TYPE` | NVARCHAR | NOT NULL | A lookup used for grouping tables together. For future use. |
| `TREND_TYPE` | NVARCHAR | NULL | A lookup value that groups the trending tables for processing |
| `CONDITION` | NVARCHAR | NULL | Used in the WHERE clause if needed. Example: is_active = 1. |
| `MASTER_TABLE` | NVARCHAR | NOT NULL | The core table that is being trending. The first table in the FROM clause. |
| `NEED_GROUP_BY` | NUMERIC | NOT NULL | Does this data require a group by while being generated (1=Yes, 0=No)? |
| `IS_SYSTEM` | NUMERIC | NOT NULL | Is this trending table out of the box (1=Yes, 0=No)? |
| `TABLE_COMMENTS` | NVARCHAR | NULL | Comments about the trending table. |
| `PROCESSED` | NUMERIC | NOT NULL | Has this table been created in the system (1=Yes, 0=No)? |
