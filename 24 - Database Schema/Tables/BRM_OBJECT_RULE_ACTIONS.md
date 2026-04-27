---
title: BRM_OBJECT_RULE_ACTIONS
type: db-table
table: BRM_OBJECT_RULE_ACTIONS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BRM_OBJECT_RULE_ACTIONS

> [!info] Description
> This table contains rule action types for various objects.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the rule action type which is available for a specific object. |
| `RULE_ACTION_TYPE_ID` | NUMERIC | NOT NULL | This is a foreign key column to the ID of the rule aciton types table. |
| `OBJECT_LEVEL` | NUMERIC | NOT NULL | This coulmn tells what type of object this rule action type is for, i.e., master, sub object, or sub-sub object. The valid values are 1, 2, and 3 respectively. |
| `OBJECT_CODE` | NVARCHAR | NULL | The object to which this rule action type belongs to. If empty, action belongs to objects denoted by object level. |
| `CREATED_DATE` | DATE | NOT NULL | The created date. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The last updated date. |
| `CREATED_BY` | NUMERIC | NOT NULL | The user who created the record. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The user who last updated the record. |
| `IS_EXCLUDE` | INTEGER | NOT NULL | This column refers the boolean value to exclude specific action from default actions. |
