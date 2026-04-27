---
title: PRCATEGORY
type: db-table
table: PRCATEGORY
columns: 8
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
---

# PRCATEGORY

> [!info] Description
> This table stores the attributes for a category.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This primary key of Category. |
| `NAME` | NVARCHAR | NOT NULL | The display name of the category. Limit of 80 characters. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | The code for the object to which the category is attached. |
| `INSTANCE_ID` | NUMERIC | NULL | A reference to the object to which the category is attached. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
