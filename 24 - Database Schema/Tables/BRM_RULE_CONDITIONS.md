---
title: BRM_RULE_CONDITIONS
type: db-table
table: BRM_RULE_CONDITIONS
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BRM_RULE_CONDITIONS

> [!info] Description
> This table contains rows that describe Rule Conditions.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the Rule condition. |
| `CODE` | NVARCHAR | NOT NULL | Rule Condition ID |
| `RULE_ID` | NUMERIC | NOT NULL | ID of the rule this condition belongs to |
| `OBJECT_CODE` | NVARCHAR | NULL | Object which the rule condition is based on |
| `CONDITION_TYPE` | NVARCHAR | NOT NULL | Condition Type. For example, Access Group, Attribute Based etc |
| `DATA_TYPE` | NVARCHAR | NULL | Data Type of the LHS of the condition. |
| `LHS_CODE` | NVARCHAR | NULL | Left Hand Side of the condition |
| `OPERATOR` | NVARCHAR | NULL | Operator of the condition |
| `RHS_VALUE` | NVARCHAR | NULL | Right Hand Side or Value of the Condition. Can have delimited multiple values. |
| `RHS_VALUE_FROM` | NVARCHAR | NULL | Range start value of the condition. |
| `RHS_VALUE_TO` | NVARCHAR | NULL | Range end value of the condition. |
| `CREATED_DATE` | DATE | NOT NULL | Created Date |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Last Updated Date |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that created the Rule Condition. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the Rule Condition. |
| `CON_ACT_GROUP_ID` | NUMERIC | NOT NULL | The group ID to which this condition belongs to. |
