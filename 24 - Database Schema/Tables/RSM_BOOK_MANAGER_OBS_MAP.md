---
title: RSM_BOOK_MANAGER_OBS_MAP
type: db-table
table: RSM_BOOK_MANAGER_OBS_MAP
columns: 8
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
---

# RSM_BOOK_MANAGER_OBS_MAP

> [!info] Description
> This table stores the override information of the default booking manager assigned to roles based on an OBS location. An override row in this table defines an OBS location, a role to override, and the booking manager value to use.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `ROLE_ID` | NUMERIC | NULL | The reference to a role or resource in [[SRM_RESOURCES]].ID |
| `OBSUNIT_ID` | NUMERIC | NULL | The reference to a specific OBS. |
| `BOOK_MANAGER_ID` | NUMERIC | NULL | The reference to a resource by [[SRM_RESOURCES]].ID. This resource is the booking manager override for the given role and OBS. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ROLE_ID` | [[SRM_RESOURCES]].`ID` | |
| `BOOK_MANAGER_ID` | [[SRM_RESOURCES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
