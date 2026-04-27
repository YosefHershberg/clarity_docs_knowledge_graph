---
title: CMN_LOOKUPS
type: db-table-stub
table: CMN_LOOKUPS
audience: dev
domain: development
canonical: false
erds:
  - Financial Planning
tags:
  - dev
  - schema
  - table
  - stub
  - erd/financial-planning
---

# CMN_LOOKUPS

> [!warning] Off-screen / Referenced-only table
> This table is referenced by ERDs or the curated KB but is not present in the 16.4.1 schema dump. Column-level details should be looked up in the live database (`information_schema.columns`).

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 07 - Lookups and NLS]] for the architectural narrative, gotchas, and idiomatic SQL involving this table.

## Subject areas (ERDs)
- [[_MOC - Financial Planning ERD]]

## Referenced by (from this dump)

| From table | From column | Target column |
| --- | --- | --- |
| [[PAC_CHG_EXCEPTIONS]] | `ERROR_ID` | `ID` |
