---
title: Domain 04 - Time Timesheets and Slicing
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 4
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/time
---

# Domain 04 — Time, Timesheets and the Slicing Engine

This is the most architecturally subtle area. **Time-phased data is stored as BLOBs on the owning entity** (allocation curves on [[PRTEAM]], ETC/actual curves on [[PRASSIGNMENT]], financial-plan details on `PAC_*`). To get row-per-period numbers you query the **slice tables**, populated by the **time-slicing background job** according to **slice request definitions** in [[PRJ_BLB_SLICEREQUESTS]].

> [!important] In 16.4.1 there are 30+ specialized slice tables
> Beyond the legacy [[PRJ_BLB_SLICES]], the dump has separate tables per granularity × curve type — e.g. `PRJ_BLB_SLICES_D_ACT` (daily actuals), `PRJ_BLB_SLICES_W_ALC` (weekly allocation), `PRJ_BLB_SLICES_M_BASE` (monthly baseline), `PRJ_BLB_SLICES_D_ETC`, `PRJ_BLB_SLICES_M_HARDALC`, `PRJ_BLB_SLICES_W_AVL`, etc. Each [[PRJ_BLB_SLICEREQUESTS]] row sets a `TABLE_NAME` indicating which destination table its slices go to. Use the right destination table for performance — but the legacy [[PRJ_BLB_SLICES]] still works as a unified read.

## Tables in this domain

- [[PRTIMESHEET]] — submitted timesheet header (one per resource per period)
- [[PRTIMEENTRY]] — individual line items (one per assignment per timesheet)
- [[PRTIMEPERIOD]] — defined timesheet periods
- [[PRJ_BLB_SLICES]] — legacy unified sliced values
- [[PRJ_BLB_SLICEREQUESTS]] — slice configurations (legacy KB calls this `PRJ_SLICE_REQUESTS`)
- Specialized slice tables: `PRJ_BLB_SLICES_{D|W|M}_{ACT|ETC|ALC|HARDALC|AVL|BASE|CAP_*|REQCRV|TEAMCUSG|TENT_ETC|INCI_ACT}` — see [[Tables Index]]
- [[PRCHARGECODE]] — charge codes

## PRTIMESHEET

> [!info] Purpose
> A submitted (or in-progress) timesheet for a resource for a time period.

- **Primary key.** `PRID`.

> [!example] Verified columns live in [[PRTIMESHEET]]

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `PRID` | NUMERIC | PK |
| `PRRESOURCEID` | NUMERIC | FK → [[SRM_RESOURCES]].`ID` (comment says `PRRESOURCE.PRID`; legacy alias) |
| `PRTIMEPERIODID` | NUMERIC | FK → [[PRTIMEPERIOD]].`PRID` |
| `PRSTATUS` | NUMERIC | `0` = Unsubmitted, `1` = Submitted, `2` = Returned, `3` = Approved, `4` = Posted, `5` = Adjusted |
| `PRACTSUM` | FLOAT | total seconds on the timesheet (legacy KB calls this `PRTOTAL`) |
| `PRSUBMITTEDBY` | NUMERIC | FK → [[CMN_SEC_USERS]].`ID` (legacy KB calls this `PRAPPROVERID` — wrong) |
| `PRAPPROVEDBY` | NUMERIC | FK → [[CMN_SEC_USERS]].`ID` |
| `PRISADJUSTMENT` | NUMERIC NOT NULL | adjustment-of-earlier flag |
| `PRADJUSTEDID` | NUMERIC | self-FK to the adjusted row |
| `PRMODBY`, `PRMODTIME` | NUMERIC/DATE | last modifier |
| `POSTED_TIME` | DATE | post timestamp |
| `PRACTCURVE` | BINARY | timesheet actuals BLOB |
| `PRVERSION` | NUMERIC | optimistic-lock version |
| `FAILEDRULES` | NVARCHAR | validation rule IDs that failed |

> [!warning] Drift from legacy KB on PRTIMESHEET
> - Status values: legacy KB says `0=Open, 1=Submitted, 2=Approved, 3=Posted, 4=Returned`. **In 16.4.1 the values are `0=Unsubmitted, 1=Submitted, 2=Returned, 3=Approved, 4=Posted, 5=Adjusted`.**
> - `PRTOTAL` → `PRACTSUM` (and value is in **seconds**, not hours)
> - `PRAPPROVERID` → `PRAPPROVEDBY`
> - `PRSUBMITDATE`, `PRAPPROVEDDATE`, `PRCREATEDDATE`, `PRLASTUPDATEDDATE` → not present in dump under those names; the timestamps that exist are `PRMODTIME` (last modification) and `POSTED_TIME` (post time)

## PRTIMEENTRY

> [!info] Purpose
> Individual time-entry rows within a timesheet — one row per assignment that the resource logged time against.

- **Primary key.** `PRID`.

> [!example] Verified columns live in [[PRTIMEENTRY]]

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `PRID` | NUMERIC | PK |
| `PRTIMESHEETID` | NUMERIC | FK → [[PRTIMESHEET]].`PRID` |
| `PRASSIGNMENTID` | NUMERIC | FK → [[PRASSIGNMENT]].`PRID` |
| `PRTASKID` | NUMERIC | FK → [[PRTASK]].`PRID` (denorm) |
| `PRPROJECTID` | NUMERIC | FK → [[INV_INVESTMENTS]].`ID` (denorm) |
| `PRRESOURCEID` | NUMERIC | FK → [[SRM_RESOURCES]].`ID` (denorm) |
| `RESOURCE_TEAM_ID` | NUMERIC | FK → [[PRTEAM]].`PRID` |
| `ROLE_ID` | NUMERIC | direct time-entry role → [[PRJ_RESOURCES]].`PRID` |
| `PRCHARGECODEID` | NUMERIC | FK → [[PRCHARGECODE]].`PRID` |
| `PRTYPECODEID` | NUMERIC | FK → [[PRTYPECODE]].`PRID` |
| `PRACTSUM` | FLOAT | period-level actuals in seconds (legacy KB calls this `PRTOTAL`) |
| `PRACTCURVE` | BINARY | per-day actuals BLOB (legacy KB calls this `PRDAILYVALUES`) |
| `INCIDENT_ID` | NUMERIC | FK → [[IMM_INCIDENTS]].`ID` if entry is for an incident |
| `INCIDENT_INVESTMENT_ID` | NUMERIC | |
| `FIN_WORK_TYPE` | NUMERIC | financial work-type lookup |
| `FWT_TASK_ID` | NVARCHAR | financial work-type task id |
| `USER_LOV1`, `USER_LOV2` | NVARCHAR | customer lookups |
| `SOURCE` | NVARCHAR | origin (e.g. Catalyst Addin) |
| `PRRMEXPORTED` | NUMERIC NOT NULL | sent to project accounting |
| `SLICE_STATUS` | NUMERIC | slicer state |

> [!warning] Drift from legacy KB on PRTIMEENTRY
> - `PRTOTAL` → `PRACTSUM`
> - `PRDAILYVALUES` (BLOB) → `PRACTCURVE` (BLOB)
> - `PRINPUTTYPECODEID` → not present in 16.4.1; use `PRTYPECODEID` and the FIN_WORK_TYPE lookup
> - `PRSTATUS` → not present on PRTIMEENTRY in 16.4.1 (status lives on the parent [[PRTIMESHEET]])

## PRTIMEPERIOD

> [!info] Purpose
> Defined timesheet periods (typically weeks).

- **Primary key.** `PRID`.

> [!example] Verified columns live in [[PRTIMEPERIOD]]

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `PRID` | NUMERIC | PK |
| `PRSTART` | DATE | period start |
| `PRFINISH` | DATE | period end |
| `PRISOPEN` | NUMERIC NOT NULL | **inverted semantics: `0` = actuals CAN be entered, `1` = actuals CANNOT be entered** |
| `PURGE_FLAG` | NUMERIC | marked for deletion |
| `PRMODBY`, `PRMODTIME` | NVARCHAR/DATE | last modifier |
| `PRPOSTEDBY`, `PRPOSTEDTIME` | NVARCHAR/DATE | post info |

> [!warning] `PRISOPEN` is inverted on PRTIMEPERIOD
> Unlike most "open" flags in Clarity (`1` = open), this column has `0` = open and `1` = closed. The dump comment is the source of truth.

> [!warning] Drift from legacy KB on PRTIMEPERIOD
> - `PRSTATUS` → not present on this table in 16.4.1; period state derives from `PRISOPEN` and `PRPOSTEDBY/PRPOSTEDTIME`

## PRJ_BLB_SLICES

> [!info] Purpose
> **The single most important table for time-phased reporting.** Decoded daily/weekly/monthly slices for every BLOB curve in the system. (Modern Clarity also writes to specialized `PRJ_BLB_SLICES_*` tables — pick the right one for your `SLICE_REQUEST_ID`.)

- **Primary key (logical).** `(SLICE_REQUEST_ID, PRJ_OBJECT_ID, SLICE_DATE)`.

> [!example] Verified columns live in [[PRJ_BLB_SLICES]]

### Columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `SLICE_REQUEST_ID` | NUMERIC | FK → [[PRJ_BLB_SLICEREQUESTS]].`ID` — selects the curve being read |
| `PRJ_OBJECT_ID` | NUMERIC | the owning entity's primary key — interpretation depends on the slice request's `FIELD` (assignment / team / time-entry / availability / baseline / etc.) |
| `SLICE_DATE` | DATE | start of the slice period |
| `SLICE` | NUMERIC | the value (hours, cost, allocation %, etc.) |
| `CREATED_DATE` | DATE NOT NULL | |

## PRJ_BLB_SLICEREQUESTS

> [!info] Purpose
> Definitions of which slices to materialize (the legacy KB calls this `PRJ_SLICE_REQUESTS`).

- **Primary key.** `ID`.

> [!example] Verified columns live in [[PRJ_BLB_SLICEREQUESTS]]

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `ID` | NUMERIC NOT NULL | PK (referenced by [[PRJ_BLB_SLICES]].`SLICE_REQUEST_ID`) |
| `REQUEST_NAME` | NVARCHAR NOT NULL | seeded or user-entered |
| `FIELD` | NUMERIC | data column being sliced. Examples: `0`=`PRASSIGNMENT.prActCurve`, `1`=`PRASSIGNMENT.prEstCurve`, `3`=`PRJ_RESOURCES.prAvailCurve`, `4`=`PRTEAM.prAllocCurve`, `5`=`PRTIMEENTRY.prActCurve`, `9`=assignment cost, … (full domain has 22 values; see [[PRJ_BLB_SLICEREQUESTS]] for all) |
| `FREQUENCY` | NUMERIC | rollover cadence (`0`=Daily … `8`=Yearly, `9`=Once) |
| `PERIOD` | NUMERIC | slice size (same domain as `FREQUENCY` minus the "Once" value) |
| `NUM_PERIODS` | NUMERIC | how many periods to materialize |
| `FROM_DATE` | DATE | first slice date |
| `TO_DATE` | DATE | last slice date |
| `FROM_DATE_OFFSET` | NUMERIC NOT NULL | rolling window offset (negative = past) |
| `EXPIRATION_DATE` | DATE | next rollover |
| `REQUEST_COMPLETED_DATE` | DATE | last successful run |
| `TABLE_NAME` | NVARCHAR NOT NULL | **destination slice table** (which `PRJ_BLB_SLICES_*` to write to) |
| `IS_ACTIVE` | INTEGER NOT NULL | |
| `IS_TEMPLATE` | NUMERIC NOT NULL | template request — never executed |
| `IS_VISIBLE` | INTEGER NOT NULL | shown in Timeslice admin UI |
| `IS_SYSTEM` | INTEGER NOT NULL | seeded vs editable |
| `IS_DWH_REQUEST` | INTEGER NOT NULL | for Data Warehouse |
| `IS_SYNCHRONOUS` | INTEGER NOT NULL | involved with Instaslicing |
| `USE_SQL_CURVE` | INTEGER NOT NULL | internal use |
| `FISCAL_ENTITY_ID`, `FISCAL_PERIOD_TYPE` | NUMERIC/NVARCHAR | for fiscal-period slicing — FK into [[BIZ_COM_PERIODS]] |
| `DATE_FLAGS` | NUMERIC | end-of-month rollover handling |
| `REQUEST_STATUS` | NUMERIC | |
| `CREATED_*`, `LAST_UPDATED_*` | | |

> [!warning] Drift from legacy KB on PRJ_BLB_SLICEREQUESTS
> Legacy KB names `OBJECT_ID`, `OBJECT_FIELD`, `PERIOD_TYPE`, `LAST_RUN_DATE` are wrong. The 16.4.1 dump uses `FIELD` (with a numeric domain), `PERIOD` and `FREQUENCY` (also numeric), `REQUEST_COMPLETED_DATE`, and `TABLE_NAME` (destination table — new in modern Clarity).

## PRCHARGECODE

> [!info] Purpose
> Charge codes for time entry / financial categorization.

- **Primary key.** `PRID`.

> [!example] Verified columns live in [[PRCHARGECODE]]

### Keystone columns (legacy + 16.4.1 alignment)

| Column | Notes |
| --- | --- |
| `PRID` | PK |
| `PRNAME` | charge-code name |
| `PRDESCRIPTION` | description |
| `PRSHORTNAME` | short label |
| `PRISACTIVE` | activation flag |
| `PREXTERNALID` | external code |

## How slicing works

1. A **slice request** in [[PRJ_BLB_SLICEREQUESTS]] defines: which entity (assignment / team / transaction / financial plan / etc.), which curve (via the numeric `FIELD`), which granularity (`PERIOD`), the date range, and the **destination table** (`TABLE_NAME`).
2. The **slicing background job** runs and writes decoded values into the destination [[PRJ_BLB_SLICES]] (or specialized `PRJ_BLB_SLICES_*`).
3. Reports/portlets/queries read the slice table filtered by `SLICE_REQUEST_ID`.
4. Each `SLICE_REQUEST_ID` corresponds to one curve on one entity (e.g. "daily ETC on assignments" → `FIELD = 1`, `PERIOD = 0` (daily), destination `PRJ_BLB_SLICES_D_ETC`).

## Time-data query pattern (canonical, 16.4.1)

```sql
-- Daily posted actuals for a resource, decoded via slices
SELECT R.UNIQUE_NAME, R.FULL_NAME, I.NAME AS project_name, T.PRNAME AS task,
       S.SLICE_DATE, S.SLICE AS hours
FROM   PRTIMEPERIOD     TP
JOIN   PRTIMESHEET      TS ON TS.PRTIMEPERIODID = TP.PRID
JOIN   PRTIMEENTRY      TE ON TE.PRTIMESHEETID  = TS.PRID
JOIN   SRM_RESOURCES    R  ON R.ID = TS.PRRESOURCEID
JOIN   PRASSIGNMENT     A  ON A.PRID = TE.PRASSIGNMENTID
JOIN   PRTASK           T  ON T.PRID = A.PRTASKID
JOIN   INV_INVESTMENTS  I  ON I.ID  = T.PRPROJECTID
JOIN   PRJ_BLB_SLICES   S  ON S.PRJ_OBJECT_ID    = TE.PRID
                          AND S.SLICE_REQUEST_ID = :daily_actuals_slice_id
WHERE  R.UNIQUE_NAME = 'admin'
  AND  TP.PRSTART >= DATE '2025-01-01';
```

Get `:daily_actuals_slice_id` once per environment:

```sql
SELECT ID, REQUEST_NAME, TABLE_NAME
  FROM PRJ_BLB_SLICEREQUESTS
 WHERE FIELD = 5            -- PRTIMEENTRY.prActCurve
   AND PERIOD = 0            -- daily
   AND IS_ACTIVE = 1;
```

## Gotchas

> [!warning] You must know the right `SLICE_REQUEST_ID`
> Get it from [[PRJ_BLB_SLICEREQUESTS]] (filter on `FIELD` and `PERIOD`) once per environment and cache.

> [!warning] Recently-changed data may not yet be sliced
> The slicer is a background job. Status visible in `CMN_SCH_JOBS` (off-screen). Look at `SLICE_STATUS` on the owning entity ([[PRTIMEENTRY]], [[PRASSIGNMENT]], [[PRTEAM]]) to see if its slices need refresh (`1`/`2`/`3`).

> [!info] `PRTIMEENTRY.PRACTSUM` is the period-level total
> Per-day breakdown is in `PRACTCURVE` BLOB or via slices.

> [!info] `PRSTATUS = 4` (Posted) on the timesheet
> Means actuals have been pushed to [[PRASSIGNMENT]].`PRACTSUM` and rolled up onto [[PRTASK]] (`ACTUALS_CURVE`). Pre-post, those numbers exclude the timesheet.

> [!warning] Sums are stored in seconds, not hours
> `PRACTSUM`, `PRESTSUM`, etc. are seconds — divide by 3600 for hours.

## See also
- [[Domain 03 - Resources Roles and Calendars]] — `PRRESOURCEID`
- [[Domain 02 - Tasks Assignments and Team]] — `PRASSIGNMENTID`
- [[Common Joins Cheat-Sheet]]
- [[_MOC - Curated SQL Knowledge]]
