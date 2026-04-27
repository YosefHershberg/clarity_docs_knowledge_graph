---
title: Database Schema
type: moc
audience: dev
domain: development
canonical: true
aliases:
  - DB Schema
  - Schema MOC
tags:
  - moc
  - dev
  - schema
---

# Database Schema

Knowledge graph of the Clarity PPM relational schema. Built from:

- The 33-diagram **Entity Relationship Diagrams (ERD)** set published by Broadcom for ccppmod156 / Clarity 15.6 (the diagrams are stable across the 16.x line).
- A **MSSQL Niku 16.4.1 schema dump** (569 tables) that supplies column-level metadata.

> [!important] Single source of truth
> The **[[_MOC - Curated SQL Knowledge|Curated SQL Knowledge]]** set under `24 - Database Schema/Curated/` is the canonical knowledge base for Clarity SQL. It supersedes the auto-generated per-table notes wherever they differ on architecture, gotchas, or idiomatic queries. Auto-generated notes carry **column-level truth** for every table in the 16.4.1 dump — use them in tandem.

> [!tip] AI agent retrieval
> Start at [[_MOC - Curated SQL Knowledge]]. For each table you will find: an architectural narrative, gotchas, and idiomatic SQL — with wikilinks to the per-table notes for full column lists with types/nullability/comments and FK extraction.

## Start here

- **[[_MOC - Curated SQL Knowledge]]** — single source of truth: 10 domain notes, universal conventions, common joins, where-is-the-truth map
- [[_MOC - Subject Areas]] — all 33 ERD subject areas (Projects, Resources, Financials, Portfolios, …)
- [[Conventions and FK Patterns]] — auto-generated; `prID` vs `ID`, polymorphic FKs, naming prefixes (broader prefix coverage than the curated set)
- [[Joining Recipes]] — auto-generated SQL templates (older; prefer [[Common Joins Cheat-Sheet]])
- [[Tables Index]] — flat alphabetical list of all tables
- [[Version Notes]] — sources (15.6 ERDs + 16.4.1 dump), 16.1.1→16.4.1 delta, stale-rename map

## Subject areas at a glance

- [[_MOC - Action Items ERD]] — 4 tables documented
- [[_MOC - Applications ERD]] — 12 tables documented
- [[_MOC - Assets ERD]] — 12 tables documented
- [[_MOC - Audit Trail ERD]] — 0 tables documented
- [[_MOC - Capacity ERD]] — 10 tables documented
- [[_MOC - Chargebacks ERD]] — 20 tables documented
- [[_MOC - Content Add-ins ERD]] — 2 tables documented
- [[_MOC - Content Packages ERD]] — 2 tables documented
- [[_MOC - Datamart ERD]] — 26 tables documented
- [[_MOC - Departments ERD]] — 12 tables documented
- [[_MOC - Discussions ERD]] — 4 tables documented
- [[_MOC - Document Manager ERD]] — 9 tables documented
- [[_MOC - Financial Administration ERD]] — 21 tables documented
- [[_MOC - Financial Configuration ERD]] — 13 tables documented
- [[_MOC - Financial Planning ERD]] — 14 tables documented
- [[_MOC - General ERD]] — 2 tables documented
- [[_MOC - ITIL ERD]] — 13 tables documented
- [[_MOC - Ideas ERD]] — 9 tables documented
- [[_MOC - Investments ERD]] — 4 tables documented
- [[_MOC - Links and Notes ERD]] — 7 tables documented
- [[_MOC - Matrix Management ERD]] — 11 tables documented
- [[_MOC - Notifications ERD]] — 6 tables documented
- [[_MOC - Organizational Breakdown Structure ERD]] — 9 tables documented
- [[_MOC - Other Work ERD]] — 12 tables documented
- [[_MOC - Partitions ERD]] — 0 tables documented
- [[_MOC - Portfolios ERD]] — 57 tables documented
- [[_MOC - Products ERD]] — 12 tables documented
- [[_MOC - Projects ERD]] — 17 tables documented
- [[_MOC - Resources ERD]] — 14 tables documented
- [[_MOC - Security ERD]] — 0 tables documented
- [[_MOC - Services ERD]] — 12 tables documented
- [[_MOC - Studio ERD]] — 0 tables documented
- [[_MOC - Transactions ERD]] — 20 tables documented

## Coverage notes

- Per-table notes generated: **569** (every table in the 16.4.1 dump).
- Stub notes for off-screen / referenced-only tables: **34** (CMN_*, ODF_*, BPM_*, GEN_PRODUCTION_LINES, etc. that show up in ERDs but are not in the 16.4.1 dump).
- ERD diagrams: 33 subject areas, hosted at `techdocs.broadcom.com/.../ccppmod156/ppm_erd_*.png`.

## How to use for SQL generation

1. **Identify the business object** the user is asking about (project, idea, resource, timesheet, portfolio, charge transaction, etc.).
2. **Open the matching subject-area MOC** (e.g. [[_MOC - Projects ERD]]) — every table you need will be linked from there.
3. **Open the table note** to read columns, FKs, and find adjacent tables under "Related tables (same subject area)".
4. **Walk FK chains** by clicking outbound/inbound FK wikilinks. The `Joins on local column` row tells you exactly how to write the `ON` clause.
5. **Cross-check with [[Conventions and FK Patterns]]** for polymorphic patterns (`Object_Type = 'PROJECT'`, `Table_Name = 'PRTask'`, `Object_Code='financials'`, etc.).
