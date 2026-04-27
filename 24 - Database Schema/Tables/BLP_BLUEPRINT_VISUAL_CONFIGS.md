---
title: BLP_BLUEPRINT_VISUAL_CONFIGS
type: db-table
table: BLP_BLUEPRINT_VISUAL_CONFIGS
columns: 14
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BLP_BLUEPRINT_VISUAL_CONFIGS

> [!info] Description
> This table contains rows that describe Blueprint Visual Configurations

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the Blueprint Visual Configuration |
| `CODE` | NVARCHAR | NOT NULL | Blueprint Visual ID |
| `VISUAL_ID` | NUMERIC | NOT NULL | ID of the Visual this configuration belongs to. If the value is -1 it is a template configuration |
| `AVAILABLE_VISUAL_ID` | NUMERIC | NULL | Available Visual ID |
| `SEQUENCE` | NUMERIC | NULL | The order in which the condition should appear |
| `CONDITION_TYPE` | NVARCHAR | NULL | Condition Type. For example, Access Group, Attribute Based, etc. |
| `DATA_TYPE` | NVARCHAR | NULL | Data Type of the Left Hand Side of the filter condition |
| `LHS_CODE` | NVARCHAR | NULL | Left Hand Side of a filter condition. |
| `OPERATOR` | NVARCHAR | NULL | Operator of the filter condition |
| `RHS_VALUE` | NVARCHAR | NULL | Right Hand Side or Value of the filter condition. |
| `CREATED_DATE` | DATE | NOT NULL | Created Date of the configuration |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Last Updated Date of the configuration |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that created the configuration |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the configuration |
