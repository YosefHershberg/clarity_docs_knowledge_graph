---
title: RDM_ROADMAPS
type: db-table
table: RDM_ROADMAPS
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RDM_ROADMAPS

> [!info] Description
> This table contain rows that describe roadmaps.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the roadmap. |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name of the roadmap. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the roadmap. |
| `DESCRIPTION` | NVARCHAR | NULL | This column refers to the description of the roadmap. |
| `AUTHOR` | NUMERIC | NULL | This column refers to the unique id of the currently assigned author of the roadmap. |
| `START_PERIOD` | NUMERIC | NULL | This column references the starting fiscal time period of the roadmap. |
| `DURATION` | INTEGER | NULL | This column refers to the duration of the roadmap. |
| `STATUS` | NVARCHAR | NULL | This column refers to the code of the current status of the roadmap. |
| `TYPE` | NVARCHAR | NULL | This column refers to the code of the type of roadmap. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the roadmap was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the roadmap. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the roadmap was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the roadmap. |
| `ODF_BLUEPRINT_ID` | NUMERIC | NULL | Used in the modern UI. The Blueprint ID that this Roadmap is associated with. Populated when an Roadmap of specific type is created for the first time |
| `GENRE` | NVARCHAR | NOT NULL | indicates the genre whether this is a roadmap or a roadmap group. |
| `CURRENCY_CODE` | NVARCHAR | NULL | This column refers to the ISO currency code of the roadmap. |
