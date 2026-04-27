---
title: OBA_TODOS
type: db-table
table: OBA_TODOS
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# OBA_TODOS

> [!info] Description
> This column refers to attachments associated with a to do.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the To Do. |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name of the To Do. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the To Do. |
| `OWNER` | NUMERIC | NULL | This column refers to the resource id of the currently assigned owner of the To Do. |
| `COMPLETED` | INTEGER | NOT NULL | The status of the To Do. Completed or Not Completed. |
| `DUE_DATE` | DATE | NULL | The due date of the To Do. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the To Do was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that created the To Do. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the To Do was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the To Do. |
| `BLOCKED` | NUMERIC | NOT NULL | Signifies whether a TODO is Blocked or Not. Default is Not Blocked |
| `BLOCKED_REASON` | NVARCHAR | NULL | Reason mentioning why a TODO is Blocked. |
| `LINK_URL` | NVARCHAR | NULL | URL holding the link url value for a TODO. |
| `NOTE` | NVARCHAR | NULL | This column stores any note added to a TODO. |
| `ASSOC_SECTION_ID` | NUMERIC | NULL | This column refers to the associated section id of the To Do. |
| `TODO_ATTACHMENT` | NUMERIC | NULL | This column refers to attachments associated with a to do. |
