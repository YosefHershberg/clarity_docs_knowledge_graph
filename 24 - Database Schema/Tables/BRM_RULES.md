---
title: BRM_RULES
type: db-table
table: BRM_RULES
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BRM_RULES

> [!info] Description
> This table contains rows that describe Rules.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the rule. |
| `CODE` | NVARCHAR | NOT NULL | Rule ID |
| `NAME` | NVARCHAR | NOT NULL | Rule Name |
| `OBJECT_CODE` | NVARCHAR | NULL | Object which the rule is based on |
| `DESCRIPTION` | NVARCHAR | NULL | Description |
| `EXPRESSION_TYPE` | NVARCHAR | NULL | Rule Type |
| `RULE_EXPRESSION` | NVARCHAR | NULL | Conditions of the rule |
| `IS_ACTIVE` | NUMERIC | NOT NULL | Indicates if the rule is enabled of not. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | Indicates if the rule is System rule or not. |
| `CREATED_DATE` | DATE | NOT NULL | Created Date |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Last Updated Date |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that created the Rule. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the Rule. |
| `CATEGORY` | NVARCHAR | NOT NULL | The cateory or type of the rule, i.e., UI View, Data Update, etc. |
| `ASSOCIATED_INSTANCE_ID` | NUMERIC | NULL | Id of the instance that the rule is associated |
| `ASSOCIATED_OBJECT_CODE` | NVARCHAR | NULL | Code of the object that the rule is associated |
