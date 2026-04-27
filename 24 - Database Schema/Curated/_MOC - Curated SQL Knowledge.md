---
title: Curated SQL Knowledge
type: moc
audience: dev
domain: development
canonical: true
sot: true
aliases:
  - Curated KB
  - SQL Knowledge Base
  - Curated SQL
tags:
  - moc
  - dev
  - schema
  - sot
  - curated
---

# Curated SQL Knowledge

> [!important] Single Source of Truth
> **This is the canonical knowledge base for Clarity SQL generation.** It supersedes the auto-generated per-table notes wherever they differ. Auto-generated notes (under [[Tables Index]]) carry full column lists and FK extraction for every table in the 16.4.1 dump — use them for column-level reference. **For architecture, gotchas, and idiomatic queries, start here.**

Built from the manually curated **"Clarity PPM — Complete SQL Schema Knowledge Base"** document. Covers the ~80 tables that drive ~95% of real-world reporting / GEL / XOG / REST queries. The other ~490 tables in the [[Tables Index]] still have notes, but they're rarely needed for everyday SQL.

## Start here

- [[Universal Conventions]] — naming prefixes, universal columns, soft-delete pattern, time-phased BLOB pattern, custom attributes, NLS, partitions
- [[Where Is The Truth]] — cross-domain "which table holds the authoritative value" map
- [[Common Joins Cheat-Sheet]] — 8 canonical SQL fragments for the most common join paths

## Domains

The Clarity transactional schema breaks into 10 sub-domains. Each domain note groups its tables with **purpose / columns / FKs / typical queries / gotchas** in a uniform structure.

| # | Domain | Core tables |
| --- | --- | --- |
| 01 | [[Domain 01 - Investments and Projects]] | [[INV_INVESTMENTS]], [[INV_PROJECTS]], sub-types, [[SRM_PROJECTS]] view, [[INV_FLAT_HIERARCHIES]] |
| 02 | [[Domain 02 - Tasks Assignments and Team]] | [[PRTASK]], [[PRTEAM]], [[PRASSIGNMENT]], baselines, dependencies |
| 03 | [[Domain 03 - Resources Roles and Calendars]] | [[SRM_RESOURCES]], [[PRJ_RESOURCES]], [[CMN_SEC_USERS]], [[PRCALENDAR]], [[PRTYPECODE]] |
| 04 | [[Domain 04 - Time Timesheets and Slicing]] | [[PRTIMESHEET]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRJ_BLB_SLICES]], [[PRJ_BLB_SLICEREQUESTS]], [[PRCHARGECODE]] |
| 05 | [[Domain 05 - OBS]] | [[PRJ_OBS_TYPES]], [[PRJ_OBS_LEVELS]], [[PRJ_OBS_UNITS]], [[PRJ_OBS_UNITS_FLAT]], [[PRJ_OBS_ASSOCIATIONS]], [[OBS_UNITS_FLAT_BY_MODE]] |
| 06 | [[Domain 06 - Security]] | [[CMN_SEC_USERS]], [[CMN_SEC_GROUPS]], rights, partitions |
| 07 | [[Domain 07 - Lookups and NLS]] | [[CMN_LOOKUP_TYPES]], [[CMN_LOOKUPS]], [[CMN_CAPTIONS_NLS]], [[CMN_LOOKUPS_V]] view |
| 08 | [[Domain 08 - Custom Objects and ODF]] | [[ODF_OBJECTS]], [[ODF_ATTRIBUTES]], `ODF_CA_<object_code>` |
| 09 | [[Domain 09 - Finance]] | [[FIN_ENTITIES]], [[FIN_FISCAL_TIME_PERIODS]], [[FIN_TXNS]], [[FIN_CURRENCIES]], [[PAC_MNT_PROJECTS]] |
| 10 | [[Domain 10 - Audit Documents Processes]] | [[CMN_AUDITS]], [[CLB_DMS_FILES]], [[CAL_ACTION_ITEMS]], [[BPM_DEF_PROCESSES]], [[CMN_SCH_JOBS]] |

## How to use this for SQL generation

1. **Identify the business object** — project? resource? timesheet? OBS? lookup translation?
2. **Open the matching domain note** above. It explains the entity model, gives the typical query, and lists the gotchas.
3. **Click through to the in-vault table notes** for full column lists. Wikilinks here resolve to [[Tables Index]] entries.
4. **For polymorphic patterns and naming gotchas**, [[Universal Conventions]] is your safety net.
5. **For "where is the authoritative value"** when two tables seem to hold the same thing, consult [[Where Is The Truth]] first.

## Vault-specific notes

- The auto-generated per-table notes are built from the Clarity 16.4.1 MSSQL Niku schema dump. See [[Version Notes]] for the 16.1.1→16.4.1 delta and the stale-rename map.
- Some tables referenced in this curated KB are **off-screen in the 16.4.1 dump** (CMN_AUDITS, CMN_LOOKUPS_V, ODF_OBJECTS, FIN_ENTITIES, …) — they exist in production but column-level metadata must be confirmed via `INFORMATION_SCHEMA.COLUMNS`. They appear here as `db-table-stub` notes.
- Where the curated KB uses a name that doesn't match the dump (e.g. `INV_OTHER_WORK` vs the actual [[INV_OTHERS]], `PRJ_DEPENDENCIES` vs [[PRJ_PROJECT_DEPENDS]] / [[PRDEPENDENCY]], `FIN_TRANSACTIONS` vs [[FIN_TXNS]]), the wikilink points to the dump-correct name.

## See also
- [[_MOC - Database Schema]] — the auto-generated schema MOC (column-level reference for all 569 tables)
- [[Tables Index]] — flat alphabetical list
- [[Conventions and FK Patterns]] — the auto-generated conventions note (still useful for prefix coverage beyond what this curated KB lists)
- [[Joining Recipes]] — the auto-generated joining recipes (older; use [[Common Joins Cheat-Sheet]] first)
- [[Version Notes]] — schema-version delta and stale-rename map
