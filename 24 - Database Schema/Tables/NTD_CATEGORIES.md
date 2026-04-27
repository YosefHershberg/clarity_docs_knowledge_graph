---
title: NTD_CATEGORIES
type: db-table
table: NTD_CATEGORIES
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Discussions
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - NTD_TOPICS
tags:
  - dev
  - schema
  - table
  - erd/discussions
---

# NTD_CATEGORIES

> [!info] Description
> This table stores discussion categories.

## Subject areas (ERDs)
- [[_MOC - Discussions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `CATEGORY_ID` | NUMERIC | NOT NULL | The ID of the category. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `LABEL` | NVARCHAR | NOT NULL | The label of the category. |
| `DESCRIPTION` | NVARCHAR | NULL | The description of the category. |
| `GROUP_ID_OWNERS` | NUMERIC | NULL | The ID of the group containing the owners of the category. This refers to the CMN_SEC_GROUPS table. |
| `OBJECT_TYPE_ID` | NUMERIC | NULL | The ID of the object type to which this category is attached. This refers to the CMN_SEC_OBJECTS table. |
| `OBJECT_ID` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[NTD_TOPICS]] | `CATEGORY_ID` | `ID` |

## Related tables (same subject area)

[[CLB_DMS_FILES]], [[CMN_SEC_GROUPS]], [[CMN_SEC_OBJECTS]], [[CMN_SEC_USERS]], [[NTD_MESSAGES]], [[NTD_TOPICS]], [[RSM_REQ_REQUESTS]]
