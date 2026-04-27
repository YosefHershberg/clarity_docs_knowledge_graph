---
title: NMC_CANVAS_AVAILABLE_ELEMENTS
type: db-table
table: NMC_CANVAS_AVAILABLE_ELEMENTS
columns: 14
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_CANVAS_AVAILABLE_ELEMENTS

> [!info] Description
> This table contain rows that describe view.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the view. |
| `NAME` | NVARCHAR | NULL | Name of the canvas available element. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the view. |
| `CANVAS_MODULE_ID` | NUMERIC | NOT NULL | This column refers to the canvas module id. |
| `ASSOCIATED_INSTANCE_ID` | NUMERIC | NULL | This column refers to the internal ID of the object that was used to create this view instance. |
| `ASSOCIATED_TYPE` | NVARCHAR | NULL | The associated object in which this view is created. |
| `OBJECT_ALIAS` | NVARCHAR | NULL | The alias of the object which widget will display. |
| `UI_VIEW_ID` | NUMERIC | NULL | This column refers to the view id of the associated instance |
| `IS_SELECTED` | NUMERIC | NOT NULL | This column refers to selection of instance |
| `POSITION` | NUMERIC | NOT NULL | This column refers to the position of the instance in the list. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the view was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the view. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the view was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the view. |
