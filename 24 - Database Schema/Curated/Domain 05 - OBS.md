---
title: Domain 05 - OBS
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 5
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/obs
---

# Domain 05 — OBS (Organizational Breakdown Structure)

OBS lets you build hierarchies (Department, Location, Resource Pool, …) and **associate any object to any unit** in any OBS. Used heavily for security, reporting filters, and data partitioning.

## Tables in this domain

- [[PRJ_OBS_TYPES]] — defines an OBS (a tree)
- [[PRJ_OBS_LEVELS]] — depth labels per OBS
- [[PRJ_OBS_UNITS]] — actual nodes in the OBS tree
- [[PRJ_OBS_UNITS_FLAT]] — closure table (every ancestor↔descendant pair)
- [[OBS_UNITS_FLAT_BY_MODE]] — view exposing the closure with mode codes
- [[PRJ_OBS_ASSOCIATIONS]] — polymorphic M:N: object ↔ OBS unit

## PRJ_OBS_TYPES

> [!info] Purpose
> Defines an OBS (a tree). E.g. "Department", "Location", "Resource Pool".

- **Primary key.** `ID`.
- **Key columns.** `NAME`, `UNIQUE_NAME`, `DESCRIPTION`, `IS_ACTIVE`. Verify on [[PRJ_OBS_TYPES]].

## PRJ_OBS_LEVELS

> [!info] Purpose
> Defines the depth-levels for each OBS (e.g. "Region" / "Country" / "City").

- **Primary key.** `ID`.
- **Key columns.** `TYPE_ID` → [[PRJ_OBS_TYPES]].`ID`, `NAME`, `DEPTH`. Verify on [[PRJ_OBS_LEVELS]].

## PRJ_OBS_UNITS

> [!info] Purpose
> The actual nodes in the OBS tree.

- **Primary key.** `ID`.
- **Key columns.** `TYPE_ID` → [[PRJ_OBS_TYPES]].`ID`, `PARENT_ID` (self-FK), `UNIQUE_NAME`, `NAME`, `OBS_PATH`. Verify on [[PRJ_OBS_UNITS]].

## PRJ_OBS_UNITS_FLAT

> [!info] Purpose
> Closure-table for OBS — every (ancestor, descendant) pair, used for "in this branch" queries without recursive SQL.

- **Verified columns (16.4.1).**

| Column | Notes |
| --- | --- |
| `ID` | PK |
| `UNIT_ID` | the descendant (or self) — FK → [[PRJ_OBS_UNITS]].`ID` |
| `BRANCH_UNIT_ID` | the ancestor (or self) — FK → [[PRJ_OBS_UNITS]].`ID` |
| `CREATED_*`, `LAST_UPDATED_*` | |

## OBS_UNITS_FLAT_BY_MODE (view)

> [!info] Purpose
> Exposes the flat closure with relationship-mode codes — given a starting unit, you can list all descendants, all ancestors, or both, depending on the mode you filter on.

- **Verified columns (16.4.1).**

| Column | Notes |
| --- | --- |
| `UNIT_ID` | source unit — FK → [[PRJ_OBS_UNITS]].`ID` |
| `LINKED_UNIT_ID` | related unit — FK → [[PRJ_OBS_UNITS]].`ID` |
| `UNIT_MODE` | `OBS_UNIT_ONLY` (just this unit) / `OBS_UNIT_AND_CHILDREN` (this + descendants) / `OBS_UNIT_AND_ANCESTORS` (this + ancestors) / `OBS_UNIT_CHILD_AND_ANCESTORS` (this + descendants + ancestors) |

## PRJ_OBS_ASSOCIATIONS

> [!info] Purpose
> Polymorphic M:N: which OBS unit is each entity associated with.

- **Verified columns (16.4.1).**

| Column | Notes |
| --- | --- |
| `ID` | PK |
| `UNIT_ID` | FK → [[PRJ_OBS_UNITS]].`ID` |
| `TABLE_NAME` | the entity table name as a string |
| `RECORD_ID` | the entity ID |

> [!important] Critical: project rows use `'SRM_PROJECTS'` as `TABLE_NAME`
> For project associations, [[PRJ_OBS_ASSOCIATIONS]].`TABLE_NAME` stores **`'SRM_PROJECTS'`** (the legacy view name), **not** `'INV_INVESTMENTS'`. Hard-coded historical behaviour and the source of many "why doesn't my OBS join return rows" bugs. Resources use `'SRM_RESOURCES'`. Applications use `'INV_APPLICATIONS'`. Verify the value for your target object by inspecting existing rows.

## Canonical OBS query

```sql
-- All resources associated with the "External" Resource Pool (this unit + all descendants)
SELECT R.UNIQUE_NAME, R.FULL_NAME
FROM   PRJ_OBS_TYPES         OT
JOIN   PRJ_OBS_UNITS         OU  ON OU.TYPE_ID = OT.ID
JOIN   OBS_UNITS_FLAT_BY_MODE OUF ON OUF.UNIT_ID = OU.ID
JOIN   PRJ_OBS_ASSOCIATIONS  OA  ON OA.UNIT_ID = OUF.LINKED_UNIT_ID
                                AND OA.TABLE_NAME = 'SRM_RESOURCES'
JOIN   SRM_RESOURCES         R   ON R.ID = OA.RECORD_ID
WHERE  OT.UNIQUE_NAME = 'Resource Pool'
  AND  OU.UNIQUE_NAME = 'External'
  AND  OUF.UNIT_MODE  = 'OBS_UNIT_AND_CHILDREN';
```

```sql
-- Projects in any descendant of a department OBS unit
SELECT I.CODE, I.NAME
FROM   PRJ_OBS_TYPES         OT
JOIN   PRJ_OBS_UNITS         OU  ON OU.TYPE_ID = OT.ID
JOIN   OBS_UNITS_FLAT_BY_MODE OUF ON OUF.UNIT_ID = OU.ID
JOIN   PRJ_OBS_ASSOCIATIONS  OA  ON OA.UNIT_ID = OUF.LINKED_UNIT_ID
                                AND OA.TABLE_NAME = 'SRM_PROJECTS'   -- not 'INV_INVESTMENTS'!
JOIN   INV_INVESTMENTS       I   ON I.ID = OA.RECORD_ID
WHERE  OT.UNIQUE_NAME = 'Department'
  AND  OU.UNIQUE_NAME = 'Engineering'
  AND  OUF.UNIT_MODE  = 'OBS_UNIT_AND_CHILDREN'
  AND  I.ODF_OBJECT_CODE = 'project'
  AND  I.IS_ACTIVE       = 1;
```

## Gotchas

> [!info] Use the view, not the raw table
> [[OBS_UNITS_FLAT_BY_MODE]] gives you the mode codes directly. Using the raw [[PRJ_OBS_UNITS_FLAT]] requires you to handle modes manually.

> [!info] An object can be associated to multiple OBS types
> One Department + one Location + one Resource Pool, etc. Each is a separate row in [[PRJ_OBS_ASSOCIATIONS]] with the same `RECORD_ID` but different `UNIT_ID` (under different OBS types).

> [!warning] OBS units have their own security
> Users may not see all units even though they exist. If you're materializing OBS data for a user-facing report, layer security checks.

> [!warning] `TABLE_NAME` strings are exact and case-sensitive
> Common values: `'SRM_PROJECTS'`, `'SRM_RESOURCES'`, `'INV_APPLICATIONS'`, `'INV_ASSETS'`, `'INV_IDEAS'`, `'INV_PRODUCTS'`, `'INV_SERVICES'`, `'INV_OTHERS'`, `'PRTASK'`. Confirm by checking [[PRJ_OBS_OBJECT_TYPES]] for the valid set per OBS.

## See also
- [[Universal Conventions]] — polymorphic FK pattern
- [[Common Joins Cheat-Sheet]]
- [[Domain 06 - Security]] — OBS-based security grants
- [[_MOC - Curated SQL Knowledge]]
