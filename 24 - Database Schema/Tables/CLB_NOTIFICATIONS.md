---
title: CLB_NOTIFICATIONS
type: db-table
table: CLB_NOTIFICATIONS
columns: 15
audience: dev
domain: development
canonical: true
erds:
  - Notifications
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - CLB_NOTIFICATION_ASSOCS
tags:
  - dev
  - schema
  - table
  - erd/notifications
---

# CLB_NOTIFICATIONS

> [!info] Description
> This table stores notifications from all system components for all the users. This column is used to show the list of notifications of each user on the notification list page.

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
| `LOCALIZED_MESSAGE` | NVARCHAR | NULL | The alert message localized to recipient's locale. This alert message cannot be translated to different languages if the recipient changes his or her locale and language code once message is stored. |
| `EVENT_TYPE` | NVARCHAR | NULL | Identifies the type of notification, such as a project participation type, a requisition type, and so on. This column stores the keys for these types from which equivalent values are picked up at runtime from resource bundles depending on user's language code. |
| `EVENT_LINK` | NVARCHAR | NULL | The hyperlink with all the required parameters that takes the user to a specific page. |
| `SENDER_ID` | NUMERIC | NULL | This is the ID of the sender user object. This refers to the [[CMN_SEC_USERS]].ID. No foreign key constraint is explicitly specified. |
| `RECEIVER_ID` | NUMERIC | NULL |  |
| `IS_READ` | NUMERIC | NOT NULL | The status whether or not notification is read |
| `ORIGINATING_OBJECT_INSTANCE_ID` | NUMERIC | NULL | The ID of the originating object instance |
| `LOCALIZED_SUBJECT` | NVARCHAR | NULL | The localized subject of the notification |
| `IS_VISITED` | NUMERIC | NOT NULL | The status whether or not notification is clicked by user in Notification Flyout |
| `ORIGINATING_OBJECT_CODE` | NVARCHAR | NULL | This column stores the object code of the object which triggered the notification. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `SENDER_ID` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CLB_NOTIFICATION_ASSOCS]] | `INSTANCE_ID` | `ID` |

## Related tables (same subject area)

[[CLB_NOTIFICATION_ASSOCS]], [[CLB_NOTIFICATION_DEFS]], [[CLB_NOTIFICATION_PREFS]], [[CLB_PROJECT_GROUP_KEYS]], [[INV_INVESTMENTS]]
