---
title: BRM_RULE_CON_ACT_GROUPS
type: db-table
table: BRM_RULE_CON_ACT_GROUPS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BRM_RULE_CON_ACT_GROUPS

> [!info] Description
> This table contains information of a group of conditions and actions of a rule.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique ID of the group. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the code of the group |
| `RULE_ID` | NUMERIC | NOT NULL | This column refers to the ID of the rule to which this group belongs to. |
| `CONDITION_EXPRESSION_TYPE` | NVARCHAR | NOT NULL | This column holds the expression type, for example, Match Any or Match All. Default is Match All. |
| `CONDITION_EXPRESSION` | NVARCHAR | NULL | This column holds the conditions expression that was formed outside but evaluted rule engine. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose. |
