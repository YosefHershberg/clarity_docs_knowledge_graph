---
title: OBA_ASSOCIATIONS
type: db-table
table: OBA_ASSOCIATIONS
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# OBA_ASSOCIATIONS

> [!info] Description
> This table contain rows that describe object associations.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column is the primary key of the table. |
| `SRC_OBJECT_ALIAS` | NVARCHAR | NOT NULL | This column refers to the object alias of the source object |
| `ASSOC_OBJECT_ALIAS` | NVARCHAR | NOT NULL | This column refers to the object alias with which the context is associated |
| `SRC_INSTANCE_ID` | NUMERIC | NOT NULL | This column refers to the instance of the source object |
| `ASSOC_INSTANCE_ID` | NUMERIC | NOT NULL | This column refers to the instance of an object with which the context is associated. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the association was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the association. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the association was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the association. |
| `ASSOC_PARENT_ALIAS` | NVARCHAR | NULL | This column refers to the API alias of the parent of an object with which the context is associated. |
| `ASSOC_PARENT_ID` | NUMERIC | NULL | This column refers to the instance ID of the parent of an object with which the context is associated. |
