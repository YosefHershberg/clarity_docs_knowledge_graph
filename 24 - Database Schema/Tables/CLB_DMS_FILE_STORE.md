---
title: CLB_DMS_FILE_STORE
type: db-table
table: CLB_DMS_FILE_STORE
columns: 2
audience: dev
domain: development
canonical: true
erds:
  - Document Manager
tags:
  - dev
  - schema
  - table
  - erd/document-manager
---

# CLB_DMS_FILE_STORE

> [!info] Description
> This table stores documents as blobs in the database.

## Subject areas (ERDs)
- [[_MOC - Document Manager ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `FILE_CONTENTS` | BINARY | NULL | The document content in a BLOB. |
| `FILE_VERSION_ID` | NUMERIC | NOT NULL |  |

## Related tables (same subject area)

[[CLB_DMS_FILES]], [[CLB_DMS_FLAT_HIERARCHY]], [[CLB_DMS_FOLDERS]], [[CLB_DMS_HISTORIES]], [[CLB_DMS_VERSIONS]], [[CMN_SEC_GROUPS]], [[CMN_SEC_USERS]], [[PRTASK]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[XDM_TSK_ITEM_ASSOCIATION]]
