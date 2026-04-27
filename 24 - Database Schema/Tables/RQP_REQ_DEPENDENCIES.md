---
title: RQP_REQ_DEPENDENCIES
type: db-table
table: RQP_REQ_DEPENDENCIES
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

# RQP_REQ_DEPENDENCIES

> [!info] Description
> This table stores the mapping between the dependency relationships and requirements.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `REQUIREMENT_ID` | NUMERIC | NOT NULL | This column refers to the ID of the requirement that the requirement identified in dependent _req_id is dependent upon. |
| `DEPENDENT_REQ_ID` | NUMERIC | NOT NULL | This column refers to the ID of the requirement that is dependent on the requirement identified in requirement ID. |
| `IS_MUTUAL` | NUMERIC | NULL | This column indicates if the dependency is mutual: - 1 = true - 0 = false |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The timestamp of when the record was last modified. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the ID of the resource who last modified this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
