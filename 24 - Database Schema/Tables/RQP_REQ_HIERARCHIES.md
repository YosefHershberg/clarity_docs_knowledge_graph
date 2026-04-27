---
title: RQP_REQ_HIERARCHIES
type: db-table
table: RQP_REQ_HIERARCHIES
columns: 7
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

# RQP_REQ_HIERARCHIES

> [!info] Description
> This table stores the mapping between the hierarchical relationships and requirements.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `PARENT_ID` | NUMERIC | NULL | This column refers to the ID of the requirement that is the parent in a hierarchical relationship. |
| `CHILD_ID` | NUMERIC | NOT NULL | This column refers to the ID of the requirement that is the child in a hierarchical relationship. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The timestamp of when the record was last modified. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the ID of the resource who last modified this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
