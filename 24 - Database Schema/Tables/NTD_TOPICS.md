---
title: NTD_TOPICS
type: db-table
table: NTD_TOPICS
columns: 13
audience: dev
domain: development
canonical: true
erds:
  - Discussions
fk_targets:
  - CMN_SEC_USERS
  - NTD_CATEGORIES
tags:
  - dev
  - schema
  - table
  - erd/discussions
---

# NTD_TOPICS

> [!info] Description
> This table stores the discussion topic.

## Subject areas (ERDs)
- [[_MOC - Discussions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TOPIC_ID` | NUMERIC | NOT NULL | The ID of the topic. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `LABEL` | NVARCHAR | NOT NULL | The label of the topic. |
| `DESCRIPTION` | NVARCHAR | NULL | The description of the topic. |
| `GROUP_ID_OWNERS` | NUMERIC | NULL | The ID of the group that contains the owners of the topic. This refers to the CMN_SEC_GROUPS able. |
| `OBJECT_TYPE_ID` | NUMERIC | NULL | The ID of the object type to which this topic is attached. |
| `OBJECT_ID` | NUMERIC | NULL | The ID of the object to which this topic is attached. |
| `CATEGORY_ID` | NUMERIC | NULL | The category ID. This refers to [[NTD_CATEGORIES]].ID. |
| `AUTHOR_ID` | NUMERIC | NULL | The ID of the author of the topic. This refers to [[CMN_SEC_USERS]].ID. |
| `ALL_PARENT_PARTICIPANTS` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `CATEGORY_ID` | [[NTD_CATEGORIES]].`ID` | |
| `AUTHOR_ID` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CLB_DMS_FILES]], [[CMN_SEC_GROUPS]], [[CMN_SEC_OBJECTS]], [[CMN_SEC_USERS]], [[NTD_CATEGORIES]], [[NTD_MESSAGES]], [[RSM_REQ_REQUESTS]]
