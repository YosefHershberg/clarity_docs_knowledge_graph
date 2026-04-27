---
title: CMN_SEC_GROUPS
type: db-table-stub
table: CMN_SEC_GROUPS
audience: dev
domain: development
canonical: false
erds:
  - Discussions
  - Document Manager
tags:
  - dev
  - schema
  - table
  - stub
  - erd/discussions
  - erd/document-manager
---

# CMN_SEC_GROUPS

> [!warning] Off-screen / Referenced-only table
> This table is referenced by ERDs or the curated KB but is not present in the 16.4.1 schema dump. Column-level details should be looked up in the live database (`information_schema.columns`).

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 06 - Security]] for the architectural narrative, gotchas, and idiomatic SQL involving this table.

## Subject areas (ERDs)
- [[_MOC - Discussions ERD]]
- [[_MOC - Document Manager ERD]]

## Referenced by (from this dump)

| From table | From column | Target column |
| --- | --- | --- |
| [[CLB_DMS_FILES]] | `OWNER_GROUP_ID` | `ID` |
| [[CLB_DMS_FOLDERS]] | `OWNER_GROUP_ID` | `ID` |
| [[CLB_NOTIFICATION_ASSOCS]] | `PRINCIPAL_ID` | `ID` |
