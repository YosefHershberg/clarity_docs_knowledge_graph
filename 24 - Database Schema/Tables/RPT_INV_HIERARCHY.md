---
title: RPT_INV_HIERARCHY
type: db-table
table: RPT_INV_HIERARCHY
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RPT_INV_HIERARCHY

> [!info] Description
> This table expands the INV_HIERARCHIES table to include all direct or indirect children. The INV_HIERARCHIES table includes only direct children.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PARENT_ID` | NUMERIC | NOT NULL | This column specifies the program ID. |
| `CHILD_ID` | NUMERIC | NOT NULL | This column specifies the child program ID or project ID of the parent. |
| `IS_PARENT` | NUMERIC | NOT NULL | Is this a parent |
| `ALLOC_PCT` | NUMERIC | NOT NULL | This column refers to the percentage of the project or program allocated to the program. |
| `THE_LEVEL` | NUMERIC | NOT NULL | This column specifies the hierarchy level. Example: If a project belongs to a program that belongs to another program, the_level = 3 |
| `SEQUENCE_STR` | NVARCHAR | NULL | This column is strictly used for ordering down the hierarchy. |
| `INV_HIERARCHIES_ID` | NUMERIC | NOT NULL | This column stores the inv_hierarchies.id, if applicable. |
| `CREATED_DATE` | DATE | NULL | This column refers to the date the record was created. |
