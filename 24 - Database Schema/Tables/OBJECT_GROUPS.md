---
title: OBJECT_GROUPS
type: db-table
table: OBJECT_GROUPS
columns: 11
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

# OBJECT_GROUPS

> [!info] Description
> This table stores the attributes for a Object Groups.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | This primary key of Object Group. |
| `NAME` | NVARCHAR | NOT NULL | The display name of the group. Limit of 256 characters. |
| `TYPE` | NVARCHAR | NOT NULL | A reference to the object type to which the group is attached. |
| `COLOR` | NVARCHAR | NULL | The color associated to the group. |
| `POSITION` | NUMERIC | NOT NULL | The position of the group. |
| `IS_DEFAULT` | INTEGER | NULL | A flag to make the group as default. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
