---
title: RDM_ROADMAP_ITEM_VALUES
type: db-table
table: RDM_ROADMAP_ITEM_VALUES
columns: 7
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RDM_ROADMAP_ITEM_VALUES

> [!info] Description
> This table contain rows that associate a roadmap item to a picklist value.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ROADMAP_ITEM_ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the roadmap item. |
| `PICKLIST_DEF_ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the roadmap picklist. |
| `LOOKUP_CODE` | NVARCHAR | NULL | This column refers to the name of the roadmap item value. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the roadmap item value was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the roadmap item value. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the roadmap item value was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the roadmap item value. |
