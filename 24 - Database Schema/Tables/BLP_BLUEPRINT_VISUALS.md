---
title: BLP_BLUEPRINT_VISUALS
type: db-table
table: BLP_BLUEPRINT_VISUALS
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BLP_BLUEPRINT_VISUALS

> [!info] Description
> This table contain specific visual enabled attributes configured for a blueprint. This data is mainly used in modern UI.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the visual that is configured to a blueprint. |
| `AVAILABLE_VISUAL_ID` | NUMERIC | NOT NULL | This column refers to the internal ID of a visual that is available to the blueprint. |
| `BLUEPRINT_ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the blueprint whose tile or page will contain this visual. |
| `VISUAL_SEQUENCE` | NUMERIC | NOT NULL | This column refers to the display order or sequence in which morden UI will render visuals. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date this record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created this record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated this record. |
| `INCLUDED_IN_FLYOUT` | NUMERIC | NOT NULL | This module is included in flyout |
| `ASSOC_BLUEPRINT_ID` | NUMERIC | NULL | This column refers to the internal ID of the blueprint which is associated to this visual. |
| `ENABLE_QUICK_CREATE` | NUMERIC | NOT NULL | This module is enabled for quick create |
| `ENABLE_MODAL_CREATE` | NUMERIC | NOT NULL | This module is enabled for modal create |
| `ENABLE_PROP_NAV` | INTEGER | NOT NULL | This module is enabled for navigation to properties |
| `ENABLE_CREATE_RISKS` | NUMERIC | NOT NULL | This module is enabled for create risks |
| `ENABLE_CREATE_ISSUES` | NUMERIC | NOT NULL | This module is enabled for create issues |
| `ENABLE_CREATE_CHGS` | NUMERIC | NOT NULL | This module is enabled for create changes |
