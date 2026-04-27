---
title: DWH_CFG_OBJECT_TYPE
type: db-table
table: DWH_CFG_OBJECT_TYPE
columns: 4
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_CFG_OBJECT_TYPE

> [!info] Description
> Table carries the custom and OOTB investment/resource types that get populated in the data warehouse

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `OBJECT_KEY` | NUMERIC | NOT NULL | Unique numeric identifier for the investment/resource type object. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | Unique code identifier for the investment/resource type object. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | Table name associated with the object. |
| `IS_INVESTMENT` | NUMERIC | NOT NULL | Is this record an investment? |
