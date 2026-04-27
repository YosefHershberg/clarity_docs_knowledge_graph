---
title: RDM_ROADMAP_ITEM_POSITIONS
type: db-table
table: RDM_ROADMAP_ITEM_POSITIONS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RDM_ROADMAP_ITEM_POSITIONS

> [!info] Description
> This table contain rows that associate a roadmap item to a position within a picklist.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ROADMAP_ITEM_ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the roadmap item. |
| `PICKLIST_DEF_ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the roadmap picklist. |
| `TYPE` | NVARCHAR | NOT NULL | This column refers to the context position. |
| `POSITION` | NUMERIC | NOT NULL | This column refers to the position of a roadmap item in the context of the type. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the roadmap item position was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the roadmap item position. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the roadmap item position was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the roadmap item position. |
| `GROUP_ID` | NUMERIC | NOT NULL | This column refers to a grouping of the values for roadmap items. |
