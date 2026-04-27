---
title: Where Is The Truth
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

# Where Is The Truth

Cross-domain map: when two tables seem to hold the same fact, **which one is authoritative**, and which is denormalized? Use this before writing a query that aggregates or filters on a "convenience" column.

> [!important] Verified against the 16.4.1 dump
> Some "denormalized" columns from the legacy KB do not exist in 16.4.1 (e.g. `SRM_RESOURCES.OBS_UNIT_ID`). They are flagged below.

## Ground-truth map

| Question | Source-of-truth | Beware-of (denormalized / aggregate / view) |
| --- | --- | --- |
| Project attributes (built-in) | [[INV_INVESTMENTS]] + [[INV_PROJECTS]] (joined `PRID = ID`) | [[SRM_PROJECTS]] view (read-only mirror) |
| Project attributes (custom) | [[ODF_CA_PROJECT]] (off-screen stub) | — |
| Project hierarchy | [[INV_HIERARCHIES]] (parent→child) and [[INV_FLAT_HIERARCHIES]] (closure) | `PARENT_ID` directly on [[INV_INVESTMENTS]] (denormalized convenience) |
| Resource attributes (built-in) | [[SRM_RESOURCES]] (+ 1:1 [[PRJ_RESOURCES]] for scheduler/calendar fields) | — |
| Resource attributes (custom) | [[ODF_CA_RESOURCE]] (off-screen stub) | — |
| Resource role flag | [[PRJ_RESOURCES]].`PRISROLE` | Legacy KB claims `SRM_RESOURCES.IS_ROLE` — **doesn't exist in 16.4.1** |
| Resource primary role | [[PRJ_RESOURCES]].`PRPRIMARYROLEID` | Legacy KB claims `SRM_RESOURCES.PRIMARY_ROLE_ID` — **doesn't exist in 16.4.1** |
| Login info / language / locale | [[CMN_SEC_USERS]] (off-screen stub) | [[SRM_RESOURCES]].`MANAGER_ID` is a `CMN_SEC_USERS.ID`, **not** a `SRM_RESOURCES.ID` — typical bug |
| Time-phased actuals (raw, per-day) | [[PRTIMEENTRY]].`PRACTCURVE` BLOB → sliced into [[PRJ_BLB_SLICES]] (or `PRJ_BLB_SLICES_D_ACT`) | [[PRASSIGNMENT]].`PRACTSUM` (post-slice rollup, in seconds), [[PRTASK]].`ACTUALS_CURVE` (rolled-up BLOB), [[INV_INVESTMENTS]].`LABOR_ACT_CURVE` (project-aggregated BLOB) |
| Time-phased allocation | [[PRJ_BLB_SLICES]] sliced from [[PRTEAM]].`PRALLOCCURVE` | [[PRTEAM]].`PRALLOCSUM` (flat total, seconds) |
| Time-phased availability | [[PRJ_BLB_SLICES]] sliced from [[PRJ_RESOURCES]].`PRAVAILCURVE` | [[PRCALENDAR]].`HOURS_PER_DAY` (calendar-only) |
| Hard allocation | [[PRJ_BLB_SLICES]] sliced from [[PRTEAM]].`HARD_CURVE` | [[PRTEAM]].`PRBOOKING` (booking status discriminator: 5=Soft, 15=Hard, 10=Mixed) |
| Estimate-to-complete (ETC) | [[PRASSIGNMENT]].`PRESTCURVE` BLOB → [[PRJ_BLB_SLICES]] (or `PRJ_BLB_SLICES_D_ETC`) | [[PRASSIGNMENT]].`PRESTSUM`, [[PRTASK]].`ESTIMATES_CURVE`, [[INV_INVESTMENTS]].`LABOR_ETC_CURVE` |
| Baseline (per task) | [[PRJ_BASELINE_DETAILS]] (joined via `BASELINE_ID` to [[PRJ_BASELINES]]) | [[INV_INVESTMENTS]].`BASELINE_ID` only points to the current baseline header; legacy KB columns `BASELINE_START`/`BASELINE_FINISH` on [[INV_INVESTMENTS]] **do not exist** |
| OBS membership | [[PRJ_OBS_ASSOCIATIONS]] (`TABLE_NAME` = `'SRM_PROJECTS'` for projects, `'SRM_RESOURCES'` for resources) | Legacy KB mentions `SRM_RESOURCES.OBS_UNIT_ID` — **does not exist in 16.4.1**; [[PRTEAM]].`RSF_OBSUNIT_ID` is a denormalized convenience for staffing requirements only |
| OBS hierarchy traversal | [[OBS_UNITS_FLAT_BY_MODE]] view (or [[PRJ_OBS_UNITS_FLAT]] raw closure) | [[PRJ_OBS_UNITS]].`PARENT_ID` (only direct parent) |
| Translations / display labels | [[CMN_CAPTIONS_NLS]] (off-screen) or [[CMN_LOOKUPS_V]] view | `<table>.NAME` (default-language only) |
| Lookup display values | [[CMN_LOOKUPS_V]] view (joined with `LOOKUP_TYPE` and `LANGUAGE_CODE`) | [[CMN_LOOKUPS]].`LOOKUP_CODE` (untranslated stored value) |
| Cost-plan period values | [[PRJ_BLB_SLICES]] under finance-specific `SLICE_REQUEST_ID` | Period totals on plan-detail rows |
| Investment ↔ financial properties | [[FIN_FINANCIALS]] joined via [[ODF_OBJECT_INSTANCE_MAPPINGS]] (`'project'` ↔ `'financials'`) | Direct FK does not exist on [[INV_INVESTMENTS]] |
| Financial transactions (raw) | [[FIN_TXNS]] (polymorphic on `TABLE_NAME` / `PK_ID`) | Legacy KB lists `FIN_TRANSACTIONS` columns (`INVESTMENT_ID`, `TASK_ID`, `RATE`, `COST`) — **don't exist; use `OBJECT_ID`/`OBJECT_TYPE` and follow `TIMEENTRY_ID`** |
| Posted financial facts | [[FIN_POSTED_TXNS]] + [[FIN_POSTED_TXN_VALUES]] (dimensional) | [[FIN_TXNS]].`IS_PROCESSED = 1` (post-flag on staging) |
| Audit history | [[CMN_AUDITS]] (off-screen) | — |
| Investment "is template" | [[INV_PROJECTS]].`IS_TEMPLATE` (for projects) | [[INV_INVESTMENTS]].`ODF_TEMPLATE` (modern-UI templates — different concept); legacy KB's `INV_INVESTMENTS.IS_TEMPLATE` **does not exist** |
| Investment manager | [[INV_INVESTMENTS]].`MANAGER_ID` → [[CMN_SEC_USERS]].`ID` | NOT [[SRM_RESOURCES]] — common pitfall |
| Document / file storage | [[CLB_DMS_FILES]] (legacy KB calls these "objects") | [[CLB_DMS_FILE_STORE]] (physical bytes only) |

## Naming differences (legacy KB → 16.4.1)

| Legacy KB name | 16.4.1 name |
| --- | --- |
| `INV_OTHER_WORK` | [[INV_OTHERS]] (`ODF_OBJECT_CODE = 'other'`, not `'other_work'`) |
| `INV_FLAT_HIERARCHIES` (rollup) | [[INV_HIERARCHIES]] is parent/child; [[INV_FLAT_HIERARCHIES]] is the closure |
| `PRJ_DEPENDENCIES` | [[PRDEPENDENCY]] (task-level), [[PRJ_PROJECT_DEPENDS]] (project-level) |
| `PRJ_SLICE_REQUESTS` | [[PRJ_BLB_SLICEREQUESTS]] |
| `FIN_TRANSACTIONS` | [[FIN_TXNS]] |
| `SRM_ACTIONITEMS` | [[CAL_ACTION_ITEMS]] |
| `CLB_DMS_OBJECTS` | [[CLB_DMS_FILES]] |
| `RESOURCE_TYPE_CODE` (VARCHAR on SRM_RESOURCES) | `RESOURCE_TYPE` (NUMERIC) |
| `IS_ROLE` (on SRM_RESOURCES) | [[PRJ_RESOURCES]].`PRISROLE` |
| `PRIMARY_ROLE_ID` (on SRM_RESOURCES) | [[PRJ_RESOURCES]].`PRPRIMARYROLEID` |
| `OPEN_FOR_TIME_ENTRY` (on SRM_RESOURCES) | [[PRJ_RESOURCES]].`PRISOPEN` (on resources); [[INV_INVESTMENTS]].`IS_OPEN_FOR_TE` (on investments); [[PRTEAM]].`PRISOPEN` (on team); [[PRTASK]].`IS_OPEN_TE` (on tasks) |
| `PRTEAMID` (FK on PRASSIGNMENT) | `TEAM_ID` |
| `PRSUMMARY` (on PRTASK) | `PRISTASK = 0` (summary) / `1` (detail) |
| `PRWBSSEQ` (on PRTASK) | `PRWBSSEQUENCE` |
| `PROUTLINELEVEL` (on PRTASK) | `PRWBSLEVEL` |
| `PRPARENTID` (on PRTASK) | not present in 16.4.1; hierarchy is implied by `PRWBSLEVEL`+`PRWBSSEQUENCE` |
| `PRACTSTART` / `PRACTFINISH` (on PRTASK) | not present; use [[PRJ_BASELINE_DETAILS]].`BASE_START`/`BASE_FINISH` for baseline |
| `PRBASESTART` / `PRBASEFINISH` (on PRTASK) | not present; baseline lives in [[PRJ_BASELINE_DETAILS]] |
| `PREST` / `PRACTUAL` (on PRTASK) | not present; rolls up from [[PRASSIGNMENT]].`PRESTSUM`/`PRACTSUM` |
| `PRACWP` / `PRBCWP` / `PRBCWS` (on PRTASK) | not present; EVM lives elsewhere (e.g. [[PRJ_EV_HISTORY]]) |
| `PRSTARTDATE` / `PRFINISHDATE` (on PRTEAM) | `PRAVAILSTART` / `PRAVAILFINISH` |
| `PRDEFAULTALLOCATION` (on PRTEAM) | not present; allocation is in `PRALLOCCURVE` (BLOB) and the flat sum is `PRALLOCSUM` (seconds) |
| `PRBOOKINGSTATUS` (on PRTEAM) | `PRBOOKING` (and the value domain is `5`/`15`/`10`, not `0`/`1`/`2`) |
| `PRTOTAL` (on PRTIMESHEET / PRTIMEENTRY) | `PRACTSUM` |
| `PRDAILYVALUES` (on PRTIMEENTRY) | `PRACTCURVE` (BLOB) |
| `IS_TEMPLATE` (on INV_INVESTMENTS) | `ODF_TEMPLATE` (different concept; the project sub-type [[INV_PROJECTS]] has its own `IS_TEMPLATE`) |
| `BASELINE_START` / `BASELINE_FINISH` (on INV_INVESTMENTS) | not present; follow `BASELINE_ID` to [[PRJ_BASELINES]] / [[PRJ_BASELINE_DETAILS]] |

## Renamed targets in column comments

Some 16.4.1 dump column comments still reference legacy table names. Treat these as their modern equivalents:

| Comment text | Treat as |
| --- | --- |
| `PMA_IDEAS.ID` | [[INV_IDEAS]].`PRID` (or [[INV_INVESTMENTS]].`ID` for the parent) |
| `PRRESOURCE.PRID` | [[SRM_RESOURCES]].`ID` (or [[PRJ_RESOURCES]].`PRID`, same value) |
| `SRM_PROJECTS.ID` | [[INV_INVESTMENTS]].`ID` (the view's `ID` is the same value) |
| `PRTASKS` | [[PRTASK]] |
| `PRJ_OBS_TYPE` | [[PRJ_OBS_TYPES]] |
| `ENTITIES` | [[ENTITY]] |
| `TAXMETHOD` | [[TAX_METHOD]] |

See [[Version Notes]] for the full rename map.

## See also
- [[_MOC - Curated SQL Knowledge]]
- [[Universal Conventions]]
- [[Common Joins Cheat-Sheet]]
- [[Version Notes]]
