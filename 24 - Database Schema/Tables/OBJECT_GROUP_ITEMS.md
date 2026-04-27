---
title: OBJECT_GROUP_ITEMS
type: db-table
table: OBJECT_GROUP_ITEMS
columns: 10
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

# OBJECT_GROUP_ITEMS

> [!info] Description
> This table stores the attributes for a Object Groups Items.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | This primary key of Object Group Item. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | Object code for the type of objects CMO/CIT/Teams. |
| `GROUP_ID` | NUMERIC | NOT NULL | This refers to ID in OBJECT_GROUP table. |
| `POSITION` | NUMERIC | NOT NULL | The position of the group Item in group |
| `GROUP_TYPE` | NVARCHAR | NULL | The type of the Object CMO/CIT/Teams. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
