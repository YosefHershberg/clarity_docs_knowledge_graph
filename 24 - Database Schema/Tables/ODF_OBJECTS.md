---
title: ODF_OBJECTS
type: db-table-stub
table: ODF_OBJECTS
audience: dev
domain: development
canonical: false
tags:
  - dev
  - schema
  - table
  - stub
---

# ODF_OBJECTS

> [!warning] Off-screen / Referenced-only table
> This table is referenced by ERDs or the curated KB but is not present in the 16.4.1 schema dump. Column-level details should be looked up in the live database (`information_schema.columns`).

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 08 - Custom Objects and ODF]] for the architectural narrative, gotchas, and idiomatic SQL involving this table.

## Referenced by (from this dump)

| From table | From column | Target column |
| --- | --- | --- |
| [[PRJ_OBS_OBJECT_TYPES]] | `TABLE_NAME` | `OBS_CODE` |
