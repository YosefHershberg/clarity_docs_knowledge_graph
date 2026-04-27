---
title: WORK_PLAN_CONFIG_LIST_ELEMENTS
type: db-table
table: WORK_PLAN_CONFIG_LIST_ELEMENTS
columns: 12
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# WORK_PLAN_CONFIG_LIST_ELEMENTS

> [!info] Description
> This table contains the list elements of the work plan configuration.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique ID of the work plan configuration section. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the code of the work plan configuration section. |
| `PLAN_CONFIG_ID` | NUMERIC | NOT NULL | This column refers to the ID of the work plan configuration to which this section belongs. |
| `LIST_CODE` | NVARCHAR | NOT NULL | This column refers to the code that defines the config list. |
| `LKP_ATTR_CODE` | NVARCHAR | NOT NULL | This column refers to the code of an attribute of type lookup. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the code of an object of the lookup type attribute. |
| `POSITION` | NUMERIC | NOT NULL | This column indicates the position of the element in the list. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | This column indicates if the work plan configuration element is active or not. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose. |
