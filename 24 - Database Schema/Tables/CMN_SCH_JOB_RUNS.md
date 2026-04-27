---
title: CMN_SCH_JOB_RUNS
type: db-table-stub
table: CMN_SCH_JOB_RUNS
audience: dev
domain: development
canonical: false
tags:
  - dev
  - schema
  - table
  - stub
---

# CMN_SCH_JOB_RUNS

> [!warning] Off-screen / Referenced-only table
> This table is referenced by ERDs or the curated KB but is not present in the 16.4.1 schema dump. Column-level details should be looked up in the live database (`information_schema.columns`).

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 10 - Audit Documents Processes]] for the architectural narrative, gotchas, and idiomatic SQL involving this table.

## Referenced by (from this dump)

| From table | From column | Target column |
| --- | --- | --- |
| [[CBK_ERRORS]] | `JOB_RUN_ID` | `ID` |
| [[CBK_INVOICE]] | `SCHED_JOB_ID` | `ID` |
