---
title: NMC_CHECKLISTS
type: db-table
table: NMC_CHECKLISTS
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_CHECKLISTS

> [!info] Description
> This table contain rows that describe checklists.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the checklist. |
| `PARENT_PK` | NUMERIC | NULL | This column refers to the parent internal ID of the checklist. |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name of the checklist. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the checklist. |
| `PARENT_CODE` | NVARCHAR | NULL | This column refers to the parent code of the checklist. |
| `DUE_DATE` | DATE | NULL | The due date of this Checklist. |
| `COMPLETED` | NUMERIC | NOT NULL | Checklist is completed or not completed. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the checklist was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the checklist. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the checklist was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the checklist. |
