---
title: CLB_DMS_FILES
type: db-table
table: CLB_DMS_FILES
columns: 24
audience: dev
domain: development
canonical: true
erds:
  - Discussions
  - Document Manager
fk_targets:
  - CLB_DMS_FOLDERS
  - CMN_SEC_GROUPS
  - CMN_SEC_USERS
fk_sources:
  - CLB_DMS_VERSIONS
tags:
  - dev
  - schema
  - table
  - erd/discussions
  - erd/document-manager
---

# CLB_DMS_FILES

> [!info] Description
> This table stores all attributes of a document stored in Document Manager.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 10 - Audit Documents Processes]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Discussions ERD]]
- [[_MOC - Document Manager ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to resource that last updated this row ([[CMN_SEC_USERS]].ID). |
| `NAME` | NVARCHAR | NOT NULL | This column refers to display name of the file. |
| `DESCRIPTION` | NVARCHAR | NULL | This column refers to the description of the file. |
| `MIME_TYPE` | NVARCHAR | NULL | This column refers to the MIME type of the file. |
| `FILE_TYPE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `LOCK_OWNER_ID` | NUMERIC | NULL | This column refers to the foreign key to the lock owner of the file. This refers to [[CMN_SEC_USERS]].ID. |
| `LOCK_TIME_STAMP` | DATE | NULL | This column refers to the time stamp indicating when the file was last locked. |
| `VERSIONING_ENABLED` | INTEGER | NOT NULL | This column refers to the flag is used to denote whether versioning is on. |
| `OWNER_ID` | NUMERIC | NOT NULL | This column refers to the foreign key to the owner of the file. This key maps to the CMN_SEC_USER table. |
| `NUM_CHECKOUT_DAYS` | NUMERIC | NOT NULL | This column refers to the number of days this file has been checked out of CA Clarity PPM. |
| `PARENT_FOLDER_ID` | NUMERIC | NULL | This column refers to the parent folder ID of this file. Refers to [[CLB_DMS_FOLDERS]].ID. |
| `AREA_ID` | NUMERIC | NULL | This column refers to the represents the CA Clarity PPM modules where document manager is supported. |
| `HAS_ALL_PARTICIPANTS` | INTEGER | NOT NULL | This column indicates whether this file has all participants of the parent folder. |
| `OWNER_GROUP_ID` | NUMERIC | NOT NULL | This column refers to the [[CMN_SEC_GROUPS]].ID. |
| `LANGUAGE` | NVARCHAR | NULL | This column refers to the language code of the file. For example, en for English. |
| `FILE_CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time that the file was created. For files that are imported into Clarity, this column can be used to set the original creation date and time. |
| `ALLOW_NON_PARTICIPANTS` | INTEGER | NULL | This column indicates whether users are allowed to view file if they have OBS instance and global rights. |
| `STATUS` | NVARCHAR | NULL | This column refers to the stores one of the lookup values for lookup category DOC_STATUS. This column can be used to drive workflows. |
| `PURGE` | NUMERIC | NULL | This column is used internally by the Document Purge Background job. |
| `CATEGORY` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LOCK_OWNER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `PARENT_FOLDER_ID` | [[CLB_DMS_FOLDERS]].`ID` | |
| `OWNER_GROUP_ID` | [[CMN_SEC_GROUPS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CLB_DMS_VERSIONS]] | `FILE_ID` | `ID` |

## Related tables (same subject area)

[[CLB_DMS_FILE_STORE]], [[CLB_DMS_FLAT_HIERARCHY]], [[CLB_DMS_FOLDERS]], [[CLB_DMS_HISTORIES]], [[CLB_DMS_VERSIONS]], [[CMN_SEC_GROUPS]], [[CMN_SEC_OBJECTS]], [[CMN_SEC_USERS]], [[NTD_CATEGORIES]], [[NTD_MESSAGES]], [[NTD_TOPICS]], [[PRTASK]], [[RSM_REQ_REQUESTS]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[XDM_TSK_ITEM_ASSOCIATION]]
