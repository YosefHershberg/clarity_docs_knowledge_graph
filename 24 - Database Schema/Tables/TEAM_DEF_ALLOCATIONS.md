---
title: TEAM_DEF_ALLOCATIONS
type: db-table
table: TEAM_DEF_ALLOCATIONS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# TEAM_DEF_ALLOCATIONS

> [!info] Description
> This table contain rows that describe roadmaps.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the team allocation. |
| `TEAM_DEF_ID` | NUMERIC | NOT NULL | This column refers to the Team Def ID of the team allocation. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the team allocation. |
| `ALLOCATION` | NUMERIC | NULL | This column refers to the allocation the team definition. |
| `RESOURCE_ID` | NUMERIC | NULL | This column refers to the resource ids of the team definition. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the team allocation was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the team definition. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the team definition was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the team defintion. |
