---
title: GEN_AI_TEMPLATES
type: db-table
table: GEN_AI_TEMPLATES
columns: 5
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# GEN_AI_TEMPLATES

> [!info] Description
> This table contains information about action code and prompt templates related to various gen ai actions.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column stores the code for the prompt template |
| `PROMPT_TEMPLATE` | NVARCHARMAX | NOT NULL | This column stores the prompt template |
| `IS_SYSTEM` | NUMERIC | NOT NULL | This column indicates whether the code is system defined |
| `OUTPUT_LOCATION` | VARCHAR | NOT NULL | This column stores the output location of the AI Template |
