---
title: RPT_RES_SKILLS_INDEX
type: db-table
table: RPT_RES_SKILLS_INDEX
columns: 4
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RPT_RES_SKILLS_INDEX

> [!info] Description
> This table stores skill level data.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `SKILL_ID` | NUMERIC | NOT NULL | This column specifies the skill ID. |
| `PARENT_SKILL_ID` | NUMERIC | NOT NULL | This column specifies the parent of the skill. |
| `SKILL_LEVEL` | NUMERIC | NOT NULL | This column specifies the level of the skill. For example, you have a parent database skill and two skills for Oracle or SQL. Database is at skill level 1. Oracle and SQL are at skill level 2. |
| `PARENT_LEVEL` | NUMERIC | NOT NULL | This column specifies the parent level. |
