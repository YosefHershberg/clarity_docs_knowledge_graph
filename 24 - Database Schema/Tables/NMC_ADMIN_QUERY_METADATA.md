---
title: NMC_ADMIN_QUERY_METADATA
type: db-table
table: NMC_ADMIN_QUERY_METADATA
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_ADMIN_QUERY_METADATA

> [!info] Description
> This table stores SQL query metadata

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column is the primary key of the SQL Query Metadata. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `ATTR_NAME` | NVARCHAR | NOT NULL | This column refers to the Name of the SQL Query Attribute metadata |
| `DATA_TYPE` | NVARCHAR | NOT NULL | This column refers to the Data Type of the SQL Query Attribute metadata |
| `EXTENDED_DATA_TYPE` | NVARCHAR | NULL | This column refers to the Extended Data Type of the SQL Query Attribute |
| `SCALE` | NUMERIC | NULL | This column refers to the Scale of SQL Query Attribute metadata |
| `QUERY_ID` | NUMERIC | NOT NULL | This columns refers to the primary admin query row this attribute belongs to. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date when the SQL Query Metadata was first created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that first created the SQL Query Metadata. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date when the SQL Query Metadata was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the SQL Query Metadata. |
