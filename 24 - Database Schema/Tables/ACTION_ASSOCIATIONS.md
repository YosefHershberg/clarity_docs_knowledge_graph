---
title: ACTION_ASSOCIATIONS
type: db-table
table: ACTION_ASSOCIATIONS
columns: 17
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ACTION_ASSOCIATIONS

> [!info] Description
> This table contains rows the have process action associations.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the action association. |
| `CODE` | NVARCHAR | NOT NULL | Action Association ID |
| `NAME` | NVARCHAR | NULL | Action Name |
| `SEQUENCE` | NUMERIC | NOT NULL | Action Sequence Order. |
| `PROCESS_VERSION_ID` | NUMERIC | NULL | Process on which this action association is based on. |
| `BLUEPRINT_ID` | NUMERIC | NULL | Blueprint this action association belongs to |
| `DESCRIPTION` | NVARCHAR | NULL | Description |
| `ACTION_TYPE` | NVARCHAR | NULL | Action Type. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | Indicates if the action association is enabled or not. |
| `MODULE_ID` | NUMERIC | NULL | Location of this action association. |
| `CREATED_DATE` | DATE | NOT NULL | Created Date |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Last updated date of the action association. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that created the action association. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the action association. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | Indicates if the action association is system or not. |
| `PLACEMENT_TYPE` | NVARCHAR | NULL | Placement Type. |
| `ACTION_CODE` | NVARCHAR | NULL | Action Code. |
