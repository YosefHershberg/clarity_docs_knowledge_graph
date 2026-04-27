---
title: Domain 07 - Lookups and NLS
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 7
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/lookups
---

# Domain 07 — Lookups, Captions, NLS

Clarity has two lookup mechanisms: **static** (values stored in [[CMN_LOOKUPS]]) and **dynamic** (NSQL queries returning rows at runtime).

> [!warning] Most lookup tables are off-screen in 16.4.1
> [[CMN_LOOKUPS]] has a stub note in this vault; [[CMN_LOOKUP_TYPES]], [[CMN_CAPTIONS_NLS]], and the [[CMN_LOOKUPS_V]] view are not in the 16.4.1 dump at all. **Verify columns via `INFORMATION_SCHEMA.COLUMNS`** before relying on the legacy KB column lists below.

## Tables in this domain

- [[CMN_LOOKUP_TYPES]] — definition of one lookup type (off-screen)
- [[CMN_LOOKUPS]] — static lookup values (stub)
- [[CMN_CAPTIONS_NLS]] — translations table (off-screen)
- [[CMN_LOOKUPS_V]] — pre-joined view of lookups + captions (off-screen)

## CMN_LOOKUP_TYPES

> [!info] Purpose
> A single lookup definition — name, description, whether it's static or dynamic.

- **Primary key.** `ID`.
- **Key columns (legacy KB — verify).** `LOOKUP_TYPE` (string code, e.g. `'SEC_USER_STATUS'`), `NAME`, `DESCRIPTION`, `IS_ACTIVE`, `IS_DYNAMIC`, `IS_HIERARCHICAL`.

## CMN_LOOKUPS

> [!info] Purpose
> Static lookup values. One row per option.

- **Primary key.** `ID`.
- **Key columns (legacy KB — verify on [[CMN_LOOKUPS]]).** `LOOKUP_TYPE` → [[CMN_LOOKUP_TYPES]].`LOOKUP_TYPE`, `LOOKUP_CODE` (the stored value), `LOOKUP_ORDER`, `IS_ACTIVE`, `PARENT_LOOKUP_ID` (for hierarchical).

## CMN_CAPTIONS_NLS

> [!info] Purpose
> Translations for almost everything UI-displayable in Clarity. NLS-keyed.

- **Primary key (logical).** `(TABLE_NAME, PK_ID, LANGUAGE_CODE, CAPTION_TYPE)`.
- **Key columns (legacy KB — verify).**
  - `TABLE_NAME` — `'CMN_LOOKUPS'`, `'INV_INVESTMENTS'`, etc.
  - `PK_ID` — the row's PK in that table
  - `LANGUAGE_CODE` — `en`, `de`, `he`, …
  - `CAPTION_TYPE` — e.g. `NAME`, `DESCRIPTION`
  - `NAME` / `DESCRIPTION` — the translated strings

## CMN_LOOKUPS_V (view)

> [!info] Purpose
> Pre-joined view of [[CMN_LOOKUPS]] with [[CMN_CAPTIONS_NLS]] — gives you the translated value of a lookup directly.

> [!tip] Use this view in 95% of lookup queries

## Canonical lookup query

```sql
SELECT U.USER_NAME, L.NAME AS user_status
FROM   CMN_SEC_USERS  U
JOIN   CMN_LOOKUPS_V  L ON U.USER_STATUS_ID = L.ID
WHERE  L.LOOKUP_TYPE   = 'SEC_USER_STATUS'
  AND  L.LANGUAGE_CODE = 'en';
```

```sql
-- Project status lookup translated
SELECT I.CODE, I.NAME, L.NAME AS status_label
FROM   INV_INVESTMENTS I
JOIN   CMN_LOOKUPS_V   L ON L.ID = I.STATUS_INDICATOR
WHERE  I.ODF_OBJECT_CODE = 'project'
  AND  L.LOOKUP_TYPE     = 'INVESTMENT_STATUS_INDICATOR'
  AND  L.LANGUAGE_CODE   = 'en';
```

## Gotchas

> [!warning] `LOOKUP_TYPE` codes are case-sensitive strings
> Typos return zero rows silently. Common types: `SEC_USER_STATUS`, `INVESTMENT_STATUS_INDICATOR`, `PRJ_STATUS`, `PRJ_GOAL`, `RES_RESOURCE_TYPE`. Inspect what's defined: `SELECT DISTINCT LOOKUP_TYPE FROM CMN_LOOKUPS`.

> [!warning] Always include `LANGUAGE_CODE` in NLS joins
> Or you'll get duplicate rows.

> [!warning] Dynamic lookups have no rows in CMN_LOOKUPS
> They return live SQL results from a stored NSQL definition. Look at [[CMN_LOOKUP_TYPES]].`IS_DYNAMIC = 1` for those, then read the NSQL definition (kept elsewhere — not in this dump).

> [!info] Default-language fallback
> Many tables have a `NAME` column that holds the default-language string. Use `CMN_CAPTIONS_NLS` (or the view) only when you need a non-default language.

## See also
- [[Domain 08 - Custom Objects and ODF]] — lookup-typed custom attributes
- [[Universal Conventions]] — translations live in `CMN_CAPTIONS_NLS`
- [[_MOC - Curated SQL Knowledge]]
