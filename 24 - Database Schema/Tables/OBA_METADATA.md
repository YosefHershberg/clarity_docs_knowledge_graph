---
title: OBA_METADATA
type: db-table
table: OBA_METADATA
columns: 3
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# OBA_METADATA

> [!info] Description
> This table contains meta-data for object associations for those objects that do not have a physical definition file

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `CODE` | NVARCHAR | NOT NULL | The code of the base object |
| `ASSOCIATION_KEY` | NVARCHAR | NOT NULL | The association key |
| `PARENT_TYPE_QUERY` | NVARCHARMAX | NOT NULL | The query used to determine the parent type of the association |
