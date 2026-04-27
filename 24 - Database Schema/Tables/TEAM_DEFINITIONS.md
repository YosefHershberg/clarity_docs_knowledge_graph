---
title: TEAM_DEFINITIONS
type: db-table
table: TEAM_DEFINITIONS
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# TEAM_DEFINITIONS

> [!info] Description
> This table contain rows that describe roadmaps.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the team definition. |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name of the team defintion. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the team definition. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | This column indicates if the team is active. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the team definition was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the team definition. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the team definition was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the team defintion. |
