---
title: NMC_ADMIN_QUERIES
type: db-table
table: NMC_ADMIN_QUERIES
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_ADMIN_QUERIES

> [!info] Description
> This table contains details of queries

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column is the primary key of the query. |
| `CODE` | NVARCHAR | NOT NULL | Code of the query. |
| `NAME` | NVARCHAR | NOT NULL | Name of the query. |
| `DESCRIPTION` | NVARCHAR | NULL | Description of the query. |
| `SQL_TEXT` | NVARCHARMAX | NULL | The raw text of the query |
| `IS_VALID` | INTEGER | NOT NULL | This column indicates whether the SQL is valid or not. |
| `IS_SYSTEM` | INTEGER | NOT NULL | This column indicates whether the SQL is a system query or not. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that first created the query. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the query. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date when the query was first created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date when the query was last updated. |
