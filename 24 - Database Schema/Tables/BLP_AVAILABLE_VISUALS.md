---
title: BLP_AVAILABLE_VISUALS
type: db-table
table: BLP_AVAILABLE_VISUALS
columns: 20
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BLP_AVAILABLE_VISUALS

> [!info] Description
> This table contain visual enabled attributes for different types of blueprints. This data is mainly used in modern UI.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the visual of a specific type of blueprint. |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name of a visual that will displayed in the available visual section of the visual configuration page in modern UI. |
| `VISUAL_ENABLED_ATTR_ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the visual enabled attribute that will be availble for blueprint type. |
| `VISUAL_TYPE` | NVARCHAR | NOT NULL | This column refers to the viusal type of an attribute, for example, donut-chart, metric, etc. |
| `COLOR_CODE` | NVARCHAR | NULL | This column refers to the color of a visual. |
| `BLUEPRINT_TYPE` | NVARCHAR | NOT NULL | This column refers to the type of the blueprint. Current option is limited to "PROJECT" |
| `VISUAL_CATEGORY` | NVARCHAR | NOT NULL | This column refers to the category of the visual or widget. Current valid values are VISUAL and MODULE. |
| `RELATIVE_PATH` | NVARCHAR | NULL | This column refers to relative path for this visual or module, for example, it can be route name, relative url, etc. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date this record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created this record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated this record. |
| `BLUEPRINT_CLASSIFIER` | NVARCHAR | NULL | This column refers to the classifier of the blueprint. Current option is limited to "PROJECT" |
| `ENABLED_FOR_FLYOUT` | NUMERIC | NOT NULL | This module is eligible for displaying in flyout |
| `DEF_ASSOC_BLUEPRINT_ID` | NUMERIC | NULL | This column refers to the internal ID of the default blueprint which is associated to this visual. |
| `SHOW_CREATE_OPTIONS` | NUMERIC | NOT NULL | This module is enabled to show create options |
| `SHOW_NAV_OPTIONS` | INTEGER | NOT NULL | This module is enabled to show properties navigation options |
| `SHOW_CREATE_RISKS` | NUMERIC | NOT NULL | This module is enabled to show create risks |
| `SHOW_CREATE_ISSUES` | NUMERIC | NOT NULL | This module is enabled to show create issues |
| `SHOW_CREATE_CHANGES` | NUMERIC | NOT NULL | This module is enabled to show create changes |
