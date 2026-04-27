---
title: ROADMAP_ATTR_ASSOCIATIONS
type: db-table
table: ROADMAP_ATTR_ASSOCIATIONS
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ROADMAP_ATTR_ASSOCIATIONS

> [!info] Description
> This table contain rows that describe roadmap item attribute associations.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the Roadmap attribute associations. |
| `ROADMAP_ATTR_CODE` | NVARCHAR | NOT NULL | This column refers to the Roadmap item attribute code. |
| `SRC_TABLE` | NVARCHAR | NOT NULL | This column refers to the source table to which the roadmap attribute is mapped to. |
| `SRC_COL` | NVARCHAR | NOT NULL | This column refers to the source column to which the roadmap item attribute referring to. |
| `IS_CLIP_REQUIRED` | INTEGER | NOT NULL | This column refers to the clip information like clip or not. |
| `SRC_TABLE_ALIAS` | NVARCHAR | NULL | This column refers to the alias name for the source table. |
| `CATEGORY` | NVARCHAR | NULL | This column refers to the category of the attributes. |
| `SRC_TSV_COL` | NVARCHAR | NULL | This column refers to the TSV column to needs to be associated in case of clip. |
