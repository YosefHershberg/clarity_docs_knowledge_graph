---
title: BRM_RULE_ACTIONS
type: db-table
table: BRM_RULE_ACTIONS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BRM_RULE_ACTIONS

> [!info] Description
> This table contains rows that describe Rule Actions.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the Rule Action. |
| `CODE` | NVARCHAR | NOT NULL | Rule Action ID |
| `RULE_ID` | NUMERIC | NOT NULL | Rule this action belongs to |
| `TYPE` | NVARCHAR | NULL | Type of the action |
| `CREATED_DATE` | DATE | NOT NULL | Created Date |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Last Updated Date |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that created the Rule Action. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the Rule Action. |
| `CON_ACT_GROUP_ID` | NUMERIC | NOT NULL | The group ID to which this action belongs to. |
