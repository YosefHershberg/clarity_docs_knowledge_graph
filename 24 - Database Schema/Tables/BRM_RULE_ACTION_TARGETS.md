---
title: BRM_RULE_ACTION_TARGETS
type: db-table
table: BRM_RULE_ACTION_TARGETS
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BRM_RULE_ACTION_TARGETS

> [!info] Description
> This table contains rows that have Rule Action Targets.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the Rule Action Target. |
| `CODE` | NVARCHAR | NOT NULL | Rule Action Target ID |
| `RULE_ACTION_ID` | NUMERIC | NOT NULL | Action this target belongs to |
| `TARGET` | NVARCHAR | NOT NULL | Action Target |
| `CREATED_DATE` | DATE | NOT NULL | Created Date |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Last Updated Date |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that created the Rule Action. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the Rule Action. |
| `OBJECT_CODE` | NVARCHAR | NULL | The code of an odf object. |
| `VALUE` | NVARCHAR | NULL | The value of the action target which is an attribute of an object, for example, in case of set attribute action, this will be the value of the attribute that needs to be set. |
| `ALL_EXCEPT_SELECTED` | INTEGER | NOT NULL | This column tells if the action is for all other child objects except the selected child object(s) set in the object_code column. |
