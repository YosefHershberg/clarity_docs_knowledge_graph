---
title: RPT_RES_SKILLS_FLAT
type: db-table
table: RPT_RES_SKILLS_FLAT
columns: 23
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RPT_RES_SKILLS_FLAT

> [!info] Description
> This rollup table is used to group program content.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `SKILL_ID` | NUMERIC | NOT NULL | This column specifies the skill ID. |
| `LEVEL1_SKILL_ID` | NUMERIC | NULL | This column specifies the level 1 ID. |
| `LEVEL2_SKILL_ID` | NUMERIC | NULL | This column specifies the level 2 ID. |
| `LEVEL3_SKILL_ID` | NUMERIC | NULL | This column specifies the level 3 ID. |
| `LEVEL4_SKILL_ID` | NUMERIC | NULL | This column specifies the level 4 ID. |
| `LEVEL5_SKILL_ID` | NUMERIC | NULL | This column specifies the level 5 ID. |
| `LEVEL6_SKILL_ID` | NUMERIC | NULL | This column specifies the level 6 ID. |
| `LEVEL7_SKILL_ID` | NUMERIC | NULL | This column specifies the level 7 ID. |
| `LEVEL8_SKILL_ID` | NUMERIC | NULL | This column specifies the level 8 ID. |
| `LEVEL9_SKILL_ID` | NUMERIC | NULL | This column specifies the level 9 ID. |
| `LEVEL10_SKILL_ID` | NUMERIC | NULL | This column specifies the level 10 ID. |
| `LEVEL1_NAME` | NVARCHAR | NULL | This column specifies the level 1 name. |
| `LEVEL2_NAME` | NVARCHAR | NULL | This column specifies the level 2name. |
| `LEVEL3_NAME` | NVARCHAR | NULL | This column specifies the level 3 name |
| `LEVEL4_NAME` | NVARCHAR | NULL | This column specifies the level 4 name. |
| `LEVEL5_NAME` | NVARCHAR | NULL | This column specifies the level 5 name. |
| `LEVEL6_NAME` | NVARCHAR | NULL | This column specifies the level 6 name. |
| `LEVEL7_NAME` | NVARCHAR | NULL | This column specifies the level 7 name. |
| `LEVEL8_NAME` | NVARCHAR | NULL | This column specifies the level 8 name. |
| `LEVEL9_NAME` | NVARCHAR | NULL | This column specifies the level 9 name. |
| `LEVEL10_NAME` | NVARCHAR | NULL | This column specifies the level 10 name. |
| `HIERARCHY_LEVEL` | NUMERIC | NOT NULL | The level of the skill. |
| `LAST_UPDATED_DATE` | DATE | NULL | Last updated date in Clarity. |
