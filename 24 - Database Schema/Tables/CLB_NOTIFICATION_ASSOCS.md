---
title: CLB_NOTIFICATION_ASSOCS
type: db-table
table: CLB_NOTIFICATION_ASSOCS
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Notifications
fk_targets:
  - CLB_NOTIFICATIONS
  - CLB_NOTIFICATION_DEFS
  - CMN_SEC_GROUPS
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/notifications
---

# CLB_NOTIFICATION_ASSOCS

> [!info] Description
> This table stores notifications associations with various principals.

## Subject areas (ERDs)
- [[_MOC - Notifications ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `PRINCIPAL_TYPE` | NVARCHAR | NOT NULL | This column refers to the notification participant principal type. Values are Group or User. |
| `PRINCIPAL_ID` | NUMERIC | NOT NULL | Depending on the principal type, this column refers to the ID ([[CMN_SEC_USERS]].ID), or the group ID ([[CMN_SEC_GROUPS]].ID). |
| `NOTIFICATION_DEF_ID` | NVARCHAR | NOT NULL | This ID refers to a row in the [[CLB_NOTIFICATION_DEFS]].ID. |
| `INSTANCE_ID` | NUMERIC | NULL | This ID refers to a row in the [[CLB_NOTIFICATIONS]].ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRINCIPAL_ID` | [[CMN_SEC_GROUPS]].`ID` | |
| `PRINCIPAL_ID` | [[CMN_SEC_USERS]].`ID` | |
| `NOTIFICATION_DEF_ID` | [[CLB_NOTIFICATION_DEFS]].`ID` | |
| `INSTANCE_ID` | [[CLB_NOTIFICATIONS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CLB_NOTIFICATIONS]], [[CLB_NOTIFICATION_DEFS]], [[CLB_NOTIFICATION_PREFS]], [[CLB_PROJECT_GROUP_KEYS]], [[INV_INVESTMENTS]]
