---
title: RDM_ROADMAP_PICKLIST_DEFS
type: db-table
table: RDM_ROADMAP_PICKLIST_DEFS
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RDM_ROADMAP_PICKLIST_DEFS

> [!info] Description
> This table contain rows that describe picklists used by the roadmap feature.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the picklist. |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name of the picklist. |
| `ATTRIBUTE_CODE` | NVARCHAR | NOT NULL | This column refers to the Clarity studio attribute code this picklist references. |
| `API_ALIAS` | NVARCHAR | NOT NULL | This column refers to the roadmap item attribute api alias represented by the picklist. |
| `ROADMAP_ID` | NUMERIC | NOT NULL | This column defines the optional link to a specific roadmap making this picklist private. If zero picklist is public. |
| `LOOKUP_TYPE` | NVARCHAR | NOT NULL | This column defines the studio lookup this picklist wraps. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the picklist was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the picklist. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the picklist was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the picklist. |
