---
title: NMC_CALC_FUNCTIONS
type: db-table
table: NMC_CALC_FUNCTIONS
columns: 12
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_CALC_FUNCTIONS

> [!info] Description
> This table contains metadata about supported calculated functions including their syntax, return types, and descriptions.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column is the primary key of the calculated function. |
| `CODE` | NVARCHAR | NOT NULL | Unique code for the calculated function (auto-generated). |
| `NAME` | NVARCHAR | NOT NULL | Display name of the calculated function. |
| `RETURN_DATA_TYPE` | NVARCHAR | NOT NULL | Data type returned by the function (STRING, NUMBER, DATE). |
| `SYNTAX` | NVARCHAR | NOT NULL | Function signature showing parameters and usage syntax. |
| `DESCRIPTION` | NVARCHAR | NULL | Detailed description of what the function does and how to use it. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | Flag indicating if the function is active (1=active, 0=inactive). |
| `ARGUMENTS_JSON_OBJ` | NVARCHARMAX | NULL | Represents the function arguments as json object format |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that first created the calculated function. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the calculated function. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date when the calculated function was first created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date when the calculated function was last updated. |
