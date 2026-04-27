---
title: CLB_PROJECT_GROUP_KEYS
type: db-table
table: CLB_PROJECT_GROUP_KEYS
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Notifications
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/notifications
---

# CLB_PROJECT_GROUP_KEYS

> [!info] Description
> This table stores information related to the collaboration groups (i.e., participant, system, and project) related to a project.

## Subject areas (ERDs)
- [[_MOC - Notifications ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to the project ID from the SRM_PROJECTS table. |
| `PROJECT_MEMBERS_GROUP_ID` | NUMERIC | NOT NULL | This column refers to ID of the group to which the collaboration participants of a project have been added. |
| `PROJECT_MANAGERS_GROUP_ID` | NUMERIC | NOT NULL | This column refers to the ID of the group to which the collaboration managers of a project have been added |
| `PROJECT_GROUPS_GROUP_ID` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CLB_NOTIFICATIONS]], [[CLB_NOTIFICATION_ASSOCS]], [[CLB_NOTIFICATION_DEFS]], [[CLB_NOTIFICATION_PREFS]], [[INV_INVESTMENTS]]
