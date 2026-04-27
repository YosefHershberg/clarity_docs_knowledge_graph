---
title: PRTODO
type: db-table
table: PRTODO
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

# PRTODO

> [!info] Description
> This table is used to generate lists of To Dos and to record and present information on To Dos in various views. This table also includes summary items that may contain To Dos, but those items will not show on a list of To Dos.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This primary key of To Do. |
| `NAME` | NVARCHAR | NOT NULL | The name of the To Do. |
| `PRTASKID` | NUMERIC | NOT NULL | The taskid to which this To Do belongs to. |
| `POSITION` | NUMERIC | NOT NULL | The position of To Do. |
| `COMPLETED` | NUMERIC | NOT NULL | The status of the To Do. Completed or Not Completed. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this row. |
| `DUE_DATE` | DATE | NULL | The due date of the To Do. |
| `OWNER` | NUMERIC | NULL | Resource ID of the To Do owner. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
