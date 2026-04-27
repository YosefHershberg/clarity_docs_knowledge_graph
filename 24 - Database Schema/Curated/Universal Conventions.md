---
title: Universal Conventions
type: reference
audience: dev
domain: development
canonical: true
sot: true
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
---

# Universal Conventions

Naming, universal columns, and architectural facts that apply to the entire Clarity transactional schema.

> [!important] Authoritative
> This page (together with [[_MOC - Curated SQL Knowledge]]) is the **single source of truth** for naming and structural conventions. The auto-generated [[Conventions and FK Patterns]] is broader (covers more obscure prefixes) but defers to this page where they overlap.

## Table-name prefixes (curated set)

| Prefix | Domain | Examples |
| --- | --- | --- |
| `INV_` | Investment super-type and sub-types | [[INV_INVESTMENTS]], [[INV_PROJECTS]] |
| `PRJ_` | Project / scheduling specifics, OBS, slices | [[PRJ_OBS_UNITS]], [[PRJ_BLB_SLICES]] |
| `PR` (no underscore, legacy) | Workbench scheduler legacy tables | [[PRTASK]], [[PRTEAM]], [[PRASSIGNMENT]], [[PRTIMESHEET]] |
| `SRM_` | Service & Resource Management | [[SRM_RESOURCES]], [[SRM_PROJECTS]] (view) |
| `CMN_` | Common framework — security, lookups, captions, partitions | [[CMN_SEC_USERS]], [[CMN_LOOKUPS]] |
| `ODF_` | Object Definition Framework — Studio metadata + custom-object data tables | [[ODF_OBJECTS]], `ODF_CA_<object_code>` |
| `NBI_` | Datamart facts (legacy aggregates) | NBI_PROJECT_CURRENT_FACTS |
| `PAC_` | Cost & benefit plan headers and details | [[PAC_MNT_PROJECTS]], [[PAC_MNT_PERIODS]] |
| `FIN_` | Finance entities, fiscal periods, transactions | [[FIN_TXNS]] (legacy doc names this `FIN_TRANSACTIONS`), [[FIN_ENTITIES]] |
| `DWH_` | Data Warehouse (separate database, star schema) | not covered here |

For the full prefix list including newer 16.x prefixes (`RDM_`, `BLP_`, `BRM_`, `NMC_`, `OKR_`, `GEN_AI_*`, `WORK_PLAN_*`, …), see [[Conventions and FK Patterns]].

## Universal columns

These columns appear on most transactional tables — recognize them and you can navigate the schema by sight.

| Column | Purpose |
| --- | --- |
| `ID` | `NUMBER` / `BIGINT` PK, sequence-generated, internal-only. **Do not hard-code across DEV/TEST/PROD.** |
| `CODE` or `UNIQUE_NAME` | User-visible business key. XOG and REST handle. |
| `NAME` | Display label. |
| `IS_ACTIVE` | `0/1` soft-activation/deletion flag. **Clarity does not delete; it inactivates.** |
| `CREATED_DATE`, `LAST_UPDATED_DATE` | Timestamps. Use `LAST_UPDATED_DATE` for incremental sync. |
| `CREATED_BY`, `LAST_UPDATED_BY` | `NUMBER` FK → [[CMN_SEC_USERS]].`ID`. |
| `ODF_OBJECT_CODE` | Discriminator on polymorphic tables (notably [[INV_INVESTMENTS]]). |
| `ODF_PARENT_ID` | Back-pointer to a parent object on sub-objects. |
| `PARTITION_CODE` | Multi-tenant partition slice; FK → [[CMN_PARTITIONS]].`CODE`. |

## Universal facts to remember

> [!warning] Internal IDs are environment-specific
> Never hard-code `ID` values across DEV/TEST/PROD. Use `CODE` / `UNIQUE_NAME` and look up the ID at runtime.

> [!warning] There is no real DELETE
> Clarity uses `IS_ACTIVE = 0` and a logical-delete pattern. Hard-deleting from base tables breaks referential integrity in 30+ downstream tables.

> [!warning] Time-phased data is BLOB-encoded
> Allocations, ETC, actuals, financial-plan details are stored as BLOB curves on owner tables. The **time-slicing engine** decodes them into row-per-period records in the `*_BLB_SLICES` tables. See [[Domain 04 - Time Timesheets and Slicing]].

> [!info] Custom attributes live in `ODF_CA_<object_code>`
> Each Studio-defined object has a parallel custom-attribute table named for its object code: [[ODF_CA_PROJECT]], [[ODF_CA_RESOURCE]], etc. See [[Domain 08 - Custom Objects and ODF]].

> [!info] Translations live in `CMN_CAPTIONS_NLS`
> Display strings for lookups and many objects are NLS-driven, joined by `(TABLE_NAME, PK_ID, LANGUAGE_CODE)`. See [[Domain 07 - Lookups and NLS]].

> [!tip] Schema has 1000+ tables; ~80 cover ~95% of queries
> The 10-domain breakdown in [[_MOC - Curated SQL Knowledge]] focuses on those ~80 high-value tables. The vault's [[Tables Index]] holds notes for all 569 tables in the 16.4.1 dump.

## High-level FK map

```
                              CMN_SEC_USERS
                              /     |      \
            (login)          /      |       \   (manager_id)
                            /       |        \
              SRM_RESOURCES         |          INV_INVESTMENTS.MANAGER_ID
                  | 1:1             |
              PRJ_RESOURCES         |
                  |                 |
                  |             ODF_OBJECTS  ───────►  ODF_CA_<code>
                  |                                     ▲
                  |                                     │ id
   PRTEAM ◄── PRPROJECTID ── INV_INVESTMENTS ── ID ─────┘
     │                          │   ▲
     │                          │   │ (sub-types: 1:1 on ID)
     │                          │   ├─ INV_PROJECTS
     │                          │   ├─ INV_APPLICATIONS
     │                          │   ├─ INV_ASSETS
     │                          │   ├─ INV_IDEAS
     │                          │   ├─ INV_SERVICES
     │                          │   ├─ INV_PRODUCTS
     │                          │   └─ INV_OTHERS  (legacy KB calls this INV_OTHER_WORK)
     │
     └─► PRASSIGNMENT ◄── PRTASKID ── PRTASK
                │
                └─► PRTIMEENTRY ◄── PRTIMESHEET ◄── (resource)

  PRJ_OBS_TYPES → PRJ_OBS_UNITS → PRJ_OBS_ASSOCIATIONS (poly: TABLE_NAME + RECORD_ID)
                       │
                       └─► PRJ_OBS_UNITS_FLAT (closure for hierarchy lookup)

  CMN_LOOKUP_TYPES → CMN_LOOKUPS → CMN_CAPTIONS_NLS  (view: CMN_LOOKUPS_V)
```

## See also
- [[_MOC - Curated SQL Knowledge]]
- [[Common Joins Cheat-Sheet]]
- [[Where Is The Truth]]
- [[Conventions and FK Patterns]] (auto-generated, broader prefix coverage)
