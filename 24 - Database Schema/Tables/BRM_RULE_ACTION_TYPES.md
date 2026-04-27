---
title: BRM_RULE_ACTION_TYPES
type: db-table
table: BRM_RULE_ACTION_TYPES
columns: 14
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BRM_RULE_ACTION_TYPES

> [!info] Description
> This table contains metadata of rule action types.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the rule aciton type. |
| `CODE` | NVARCHAR | NOT NULL | The code of the rule action type. |
| `PARENT_ACTION_TYPE_CODE` | NVARCHAR | NULL | This column refers to the ID of the action type category to which other action types, i.e., sub actions belong to. |
| `HAS_SUB_ACTIONS` | NUMERIC | NOT NULL | This column tells if the current rule action type has sub action types. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | This column tells if the rule action type is active. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | This column tells if the rule action type is a system action. |
| `CREATED_DATE` | DATE | NOT NULL | The created date. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The last updated date. |
| `CREATED_BY` | NUMERIC | NOT NULL | The user who created this record. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The user who last updated this record. |
| `CATEGORY` | NVARCHAR | NOT NULL | The category or type of the rule, i.e., UI, DATA, etc. |
| `BUCKET_ID` | NUMERIC | NOT NULL | The ID of the action bucket. |
| `ACTION_EXEC_CLAZZ` | NVARCHAR | NULL | The fully qualified name of the class that implements com.ca.ppm.rule.ActionExecutor interface. |
| `SORT_ORDER` | NUMERIC | NOT NULL | This column refers the number value to display action types by order. |
