---
title: CLB_DMS_VERSIONS
type: db-table
table: CLB_DMS_VERSIONS
columns: 13
audience: dev
domain: development
canonical: true
erds:
  - Document Manager
fk_targets:
  - CLB_DMS_FILES
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/document-manager
---

# CLB_DMS_VERSIONS

> [!info] Description
> This table stores a version of a particular file.

## Subject areas (ERDs)
- [[_MOC - Document Manager ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `IS_LATEST` | INTEGER | NOT NULL | This flag denotes whether this version is the latest version. |
| `VERSION_NUMBER` | NUMERIC | NOT NULL | This is the version number of the file. |
| `BYTE_SIZE` | NUMERIC | NOT NULL | The size of the current version. |
| `CHECK_IN_COMMENT` | NVARCHAR | NULL | The check in comment of the file version. |
| `HAS_WORKFLOW` | INTEGER | NOT NULL | This flag denotes whether a process has been attached to this file. |
| `FILE_ID` | NUMERIC | NULL | Refers to [[CLB_DMS_FILES]].ID. |
| `STATUS` | NVARCHAR | NULL | Stores one of the lookup values for lookup category DOC_STATUS. This column can be used to drive processes. |
| `PURGE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `FILE_ID` | [[CLB_DMS_FILES]].`ID` | |

## Related tables (same subject area)

[[CLB_DMS_FILES]], [[CLB_DMS_FILE_STORE]], [[CLB_DMS_FLAT_HIERARCHY]], [[CLB_DMS_FOLDERS]], [[CLB_DMS_HISTORIES]], [[CMN_SEC_GROUPS]], [[CMN_SEC_USERS]], [[PRTASK]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[XDM_TSK_ITEM_ASSOCIATION]]
