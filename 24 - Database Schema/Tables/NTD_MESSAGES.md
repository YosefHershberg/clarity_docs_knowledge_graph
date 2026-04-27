---
title: NTD_MESSAGES
type: db-table
table: NTD_MESSAGES
columns: 17
audience: dev
domain: development
canonical: true
erds:
  - Discussions
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/discussions
---

# NTD_MESSAGES

> [!info] Description
> This table stores the discussion message.

## Subject areas (ERDs)
- [[_MOC - Discussions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BODY` | NVARCHAR | NOT NULL | The body of the message. |
| `MESSAGE_ID` | NUMERIC | NOT NULL | The ID of the message. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `AUTHOR_ID` | NUMERIC | NOT NULL | The ID of the author of the message. This refers to [[CMN_SEC_USERS]].ID. |
| `TITLE` | NVARCHAR | NOT NULL | The title of the message. |
| `DATE_POSTED` | DATE | NOT NULL | The posted date of the message. |
| `REPLY_COUNT` | NUMERIC | NOT NULL | The count of replies to this message. |
| `LAST_POST_DATE` | DATE | NULL | The posting date of the latest reply. |
| `MESSAGE_LEVEL` | NUMERIC | NOT NULL | The level of this message. |
| `ATTACHMENT_ID` | NUMERIC | NULL | The ID of the file that contains associated attachments. This refers to the CLB_DMS_FILES table. |
| `GROUP_ID_OWNERS` | NUMERIC | NULL | The ID of the group that contains the owners for this message. This refers to the CMN_SEC_GROUPS table. |
| `TOPIC_ID` | NUMERIC | NULL | The topic. This refers to the NTD_TOPICS table. |
| `PARENT_MESSAGE_ID` | NUMERIC | NULL | The parent message ID. |
| `ALL_PARENT_PARTICIPANTS` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `AUTHOR_ID` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CLB_DMS_FILES]], [[CMN_SEC_GROUPS]], [[CMN_SEC_OBJECTS]], [[CMN_SEC_USERS]], [[NTD_CATEGORIES]], [[NTD_TOPICS]], [[RSM_REQ_REQUESTS]]
