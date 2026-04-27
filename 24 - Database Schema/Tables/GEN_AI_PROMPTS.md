---
title: GEN_AI_PROMPTS
type: db-table
table: GEN_AI_PROMPTS
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# GEN_AI_PROMPTS

> [!info] Description
> This table contains custom followup prompts for gen_attr_config.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal identifier for the row |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name of the prompt |
| `PROMPT` | NVARCHARMAX | NOT NULL | This column contains the custom followup prompt text |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `GEN_ATTR_CONFIG_ID` | NUMERIC | NOT NULL | This column references the gen_attr_config table |
