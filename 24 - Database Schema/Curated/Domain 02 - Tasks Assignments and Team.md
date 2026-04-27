---
title: Domain 02 - Tasks Assignments and Team
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 2
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/tasks
---

# Domain 02 — Tasks, Assignments and Team

The scheduling layer. These tables come from the **legacy Workbench scheduler** and use the old `PR…` naming with no underscore between `PR` and the column name (`PRID`, `PRPROJECTID`, `PRSTART`). They're current and central.

## Entity model

```
INV_INVESTMENTS (project)
       │
       ├── PRTEAM             (one row per resource on the team — allocation level)
       │       │
       │       └── PRASSIGNMENT  (one row per task assignment for that team member)
       │              │
       │              └── PRTASK    (the WBS task)
       │
       └── PRTASK             (tasks belong directly to the project too via PRPROJECTID)
```

## Tables in this domain

- [[PRTASK]] — WBS tasks
- [[PRTEAM]] — project team membership (allocation level)
- [[PRASSIGNMENT]] — resource-on-task assignments
- [[PRJ_BASELINES]] — baseline header
- [[PRJ_BASELINE_DETAILS]] — per-task baseline details
- [[PRDEPENDENCY]] — task-level dependencies (legacy KB calls this `PRJ_DEPENDENCIES`)
- [[PRJ_PROJECT_DEPENDS]] — project-level (cross-project) dependencies

## PRTASK

> [!info] Purpose
> Stores **all tasks** (WBS rows) including summary tasks, milestones, and the auto-created project root. Hierarchy is encoded by `PRWBSLEVEL` (depth) + `PRWBSSEQUENCE` (sequence within parent).

- **Primary key.** `PRID` (note: column is `PRID`, not `ID`).

> [!example] Verified columns live in [[PRTASK]]
> 66 columns in 16.4.1. Below are the keystone columns the agent typically reaches for. **Several names from the legacy KB do not exist in 16.4.1** — see the drift callout below.

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `PRID` | NUMERIC | PK |
| `PRPROJECTID` | NUMERIC | FK; comment says `SRM_PROJECTS.ID` — joins to [[INV_INVESTMENTS]].`ID` (since `SRM_PROJECTS` is a view) |
| `PRNAME` | NVARCHAR | task name |
| `PRSHORTNAME` | NVARCHAR | abbreviated name |
| `PREXTERNALID` | NVARCHAR | XOG handle, unique per project |
| `PRSTART` | DATE | scheduled start |
| `PRFINISH` | DATE | scheduled finish |
| `PREARLYSTART` / `PREARLYFINISH` | DATE | critical-path |
| `PRLATESTART` / `PRLATEFINISH` | DATE | critical-path |
| `PRDURATION` | FLOAT | working days |
| `PRSTATUS` | NUMERIC | 0=not started, 1=started, 2=completed |
| `PRPCTCOMPLETE` | FLOAT | % complete (user-entered) |
| `PRWBSLEVEL` | NUMERIC | depth in WBS (1 = top) |
| `PRWBSSEQUENCE` | NUMERIC | order within parent |
| `WBS_PARSEQ` | NUMERIC | parent's WBS sequence (system-maintained) |
| `WBS_NNBSEQ` | NUMERIC | next-non-branch sequence |
| `PRISTASK` | NUMERIC NOT NULL | `0` = summary (no assignments), `1` = detail task |
| `PRISMILESTONE` | NUMERIC NOT NULL | milestone flag |
| `PRISKEY` | NUMERIC NOT NULL | "key" task flag |
| `PRISCRITICAL` | NUMERIC NOT NULL | on critical path |
| `PRISLOCKED` | NUMERIC NOT NULL | OWB cannot reschedule |
| `PRISFIXED` | NUMERIC NOT NULL | fixed-duration |
| `PRISUNPLANNED` | NUMERIC NOT NULL | added from a timesheet |
| `IS_OPEN_TE` | NUMERIC NOT NULL | open for time entry (legacy KB calls this `PRISOPEN`) |
| `PRTOTALFLOAT` | FLOAT | slack |
| `PRPRIORITY` | NUMERIC | |
| `PRCHARGECODEID` | NUMERIC | FK → [[PRCHARGECODE]].`PRID` |
| `EV_CALC_METHOD`, `EV_BCWP_OVR` | various | EVM |
| `ESTIMATES_CURVE`, `ACTUALS_CURVE`, `USAGE_CURVE` | BINARY | aggregate curves rolled up from [[PRASSIGNMENT]] |
| `TASK_OWNER` | NUMERIC | resource id of owner |
| `MSP_TASK_TYPE`, `IS_MSP_ONEWAY` | various | MS Project import |
| `FIN_WORK_TYPE` | NUMERIC | financial work-type lookup |
| `COST_TYPE` | NVARCHAR | |
| `CREATED_*`, `LAST_UPDATED_*` | | |

> [!warning] Drift from legacy KB on PRTASK
> The legacy KB lists `PRPARENTID`, `PRSUMMARY`, `PRWBSSEQ`, `PROUTLINELEVEL`, `PRACTSTART`, `PRACTFINISH`, `PRBASESTART`, `PRBASEFINISH`, `PREST`, `PRACTUAL`, `PRACWP`, `PRBCWP`, `PRBCWS`, `PRISOPEN`. **None of those exist on PRTASK in the 16.4.1 dump.** Use:
> - **Hierarchy:** `PRWBSLEVEL` + `PRWBSSEQUENCE` (no parent-id pointer; parent is implied by sequencing).
> - **Summary flag:** `PRISTASK = 0` (a summary). `PRSUMMARY` does not exist.
> - **Outline level:** `PRWBSLEVEL`.
> - **Baseline dates:** [[PRJ_BASELINE_DETAILS]] (joined via `BASELINE_ID` and `TASK_ID`), not on `PRTASK`.
> - **Actual dates / actuals / EVM totals:** roll up from [[PRASSIGNMENT]] (`PRACTSUM`) and [[PRJ_BLB_SLICES]] (sliced curves). PRTASK has aggregate curves (`ACTUALS_CURVE`, `ESTIMATES_CURVE`, `USAGE_CURVE`) but they're BLOBs.
> - **"Open for time entry" flag:** `IS_OPEN_TE` (no `PRISOPEN`).

### Foreign keys (outbound)

- `PRPROJECTID` → [[INV_INVESTMENTS]].`ID` (via [[SRM_PROJECTS]] view)
- `PRCHARGECODEID` → [[PRCHARGECODE]].`PRID`
- `CREATED_BY`, `LAST_UPDATED_BY` → [[CMN_SEC_USERS]].`ID`

### Inbound

- [[PRASSIGNMENT]].`PRTASKID`
- [[PRCONSTRAINT]].`PRTASKID`
- [[PRDEPENDENCY]] (`prPredID` / `prSuccID`)
- [[PRJ_BASELINE_DETAILS]].`TASK_ID`
- [[PRSUBPROJECT]].`PRTASKID`, `PRREFTASKID`
- [[PRTIMEENTRY]] indirectly via [[PRASSIGNMENT]]

### Typical queries (16.4.1-correct)

```sql
-- Tasks of a project, hierarchical order (excluding the hidden root and summaries if you want leaves only)
SELECT  t.PRID, t.PRNAME, t.PRWBSLEVEL,
        t.PRSTART, t.PRFINISH, t.PRPCTCOMPLETE
FROM    PRTASK            t
JOIN    INV_INVESTMENTS   i ON i.ID = t.PRPROJECTID
WHERE   i.CODE = 'PR1001'
  AND   t.PRISTASK = 1            -- detail tasks only
ORDER   BY t.PRWBSSEQUENCE;

-- Tasks with a specific assignee
SELECT  i.CODE, t.PRNAME, r.FULL_NAME
FROM    PRTASK         t
JOIN    INV_INVESTMENTS i ON i.ID = t.PRPROJECTID
JOIN    PRASSIGNMENT    a ON a.PRTASKID = t.PRID
JOIN    SRM_RESOURCES   r ON r.ID = a.PRRESOURCEID
WHERE   r.UNIQUE_NAME = 'jdoe';
```

### Gotchas

> [!warning] Every project has a root summary
> The hidden auto-created root has `PRWBSLEVEL = 1` and `PRISTASK = 0` (summary). Filter `PRISTASK = 1` for leaf tasks only.

> [!warning] `PRISTASK = 0` rows are summaries (roll-ups)
> Don't sum their curve numbers with leaf tasks.

> [!info] `PRWBSSEQUENCE` is sparse
> Use it for `ORDER BY` only, not arithmetic.

> [!info] PRTASK aggregate curves vs. PRASSIGNMENT detail
> `ACTUALS_CURVE` / `ESTIMATES_CURVE` / `USAGE_CURVE` on `PRTASK` are aggregates rolled up from [[PRASSIGNMENT]]. Slice-level truth is in [[PRJ_BLB_SLICES]] / specialized slice tables (see [[Domain 04 - Time Timesheets and Slicing]]).

> [!warning] Column names have no underscore after `PR`
> `PRID`, `PRPROJECTID`, `PRNAME`, `PRWBSLEVEL`, `PRWBSSEQUENCE`. Easy to mistype.

## PRTEAM

> [!info] Purpose
> Resources / roles **on a project's team**. One row per resource (or role) per project. Project-level allocation; task-level is in [[PRASSIGNMENT]].

- **Primary key.** `PRID`.

> [!example] Verified columns live in [[PRTEAM]] (68 in 16.4.1)

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `PRID` | NUMERIC | PK |
| `PRPROJECTID` | NUMERIC | FK → [[INV_INVESTMENTS]].`ID` (via [[SRM_PROJECTS]] view) |
| `PRRESOURCEID` | NUMERIC | FK → [[SRM_RESOURCES]].`ID` |
| `PRROLEID` | NUMERIC | FK → [[SRM_RESOURCES]].`ID` (project-specific role) |
| `PRISOPEN` | NUMERIC NOT NULL | "active on team" flag (legacy KB calls this `OPEN_FOR_TIME_ENTRY`) |
| `PRAVAILSTART` | DATE | allocation start (legacy KB calls this `PRSTARTDATE`) |
| `PRAVAILFINISH` | DATE | allocation finish (legacy KB calls this `PRFINISHDATE`) |
| `PRBOOKING` | NUMERIC | `5`=Soft, `15`=Hard, `10`=Mixed (legacy KB calls this `PRBOOKINGSTATUS` with values 0/1/2 — wrong) |
| `PRSTATUS` | NUMERIC | request status (Open/Closed) |
| `PRALLOCSUM` | FLOAT | total allocation in seconds (set by slicer) |
| `PRALLOCCURVE` | BINARY | allocation BLOB curve |
| `HARD_CURVE` | BINARY | hard allocation BLOB |
| `INCIDENT_ACT_CURVE` | BINARY | incident actuals BLOB |
| `RSF_OBSUNIT_ID` | NUMERIC | OBS unit for staffing requirement → [[PRJ_OBS_UNITS]].`ID` |
| `RSF_PERSON_TYPE` | NUMERIC | person type for staffing search |
| `REQUIREMENT_NAME` | NVARCHAR | named staffing requirement |
| `TEAM_UID` | NVARCHAR | unique team-member key (handles same role multiple times) |
| `SLICE_STATUS`, `HARD_SLICE_STATUS`, `INCIDENT_SLICE_STATUS` | NUMERIC | slicer state |
| `COPIED_FROM_TEMPLATE_ROLE` | NUMERIC | provenance |
| `CREATED_*`, `LAST_UPDATED_*` | | |

> [!warning] Drift from legacy KB on PRTEAM
> Legacy KB names → 16.4.1 names:
> - `PRSTARTDATE` → `PRAVAILSTART`
> - `PRFINISHDATE` → `PRAVAILFINISH`
> - `PRDEFAULTALLOCATION` → does not exist as a column; daily allocation lives in `PRALLOCCURVE` (BLOB) sliced into [[PRJ_BLB_SLICES]] / specialized slice tables. The aggregate is `PRALLOCSUM` (seconds).
> - `PRBOOKINGSTATUS` → `PRBOOKING` (and the value domain is `5`/`10`/`15`, not `0`/`1`/`2`)
> - `OPEN_FOR_TIME_ENTRY` → `PRISOPEN`
> - `IS_KEY_MEMBER`, `IS_FROM_REQUISITION`, `PRREQUEST_STATUS` → not present under those names; verify on [[PRTEAM]] before using.
> - `PRACTSUM`, `PRESTSUM`, `PRAVAILCURVE` → not on PRTEAM in 16.4.1; ETCs/actuals live on [[PRASSIGNMENT]] and on the resource itself.

### Foreign keys (outbound)

- `PRPROJECTID` → [[INV_INVESTMENTS]].`ID`
- `PRRESOURCEID`, `PRROLEID` → [[SRM_RESOURCES]].`ID`
- `RSF_OBSUNIT_ID` → [[PRJ_OBS_UNITS]].`ID`
- `CREATED_BY`, `LAST_UPDATED_BY` → [[CMN_SEC_USERS]].`ID`

### Inbound

- [[PRASSIGNMENT]].`TEAM_ID`
- [[RSM_REQ_RESOURCES]].`PRTEAMID`

### Gotchas

> [!warning] BLOB curves are binary — use slices
> `PRALLOCCURVE`, `HARD_CURVE`, `INCIDENT_ACT_CURVE` are proprietary binary; query [[PRJ_BLB_SLICES]] (with the right `SLICE_REQUEST_ID` from [[PRJ_BLB_SLICEREQUESTS]]) for the decoded time-phased view.

> [!info] A team member can have no assignments
> Represents planned-but-unstarted allocation.

> [!info] Roles are rows in [[SRM_RESOURCES]] with `IS_ROLE = 1`
> `PRROLEID` points to that same table.

> [!info] `PRBOOKING` value domain
> `5` = Soft, `15` = Hard, `10` = Mixed. The legacy KB's `0/1/2` is incorrect.

## PRASSIGNMENT

> [!info] Purpose
> A single resource's assignment to a single task. The "M" in the M:N between [[PRTASK]] and [[PRTEAM]].

- **Primary key.** `PRID`.

> [!example] Verified columns live in [[PRASSIGNMENT]]

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `PRID` | NUMERIC | PK |
| `PRTASKID` | NUMERIC | FK → [[PRTASK]].`PRID` |
| `TEAM_ID` | NUMERIC | FK → [[PRTEAM]].`PRID` (legacy KB calls this `PRTEAMID`) |
| `PRRESOURCEID` | NUMERIC | resource — comment says `PRRESOURCE.PRID` but joins to [[SRM_RESOURCES]].`ID` |
| `ROLE_ID` | NUMERIC | FK → [[SRM_RESOURCES]].`ID` for task-specific role |
| `PRSTART` / `PRFINISH` | DATE | assignment window |
| `PRESTSUM` | FLOAT | remaining estimate (sum of `PRESTCURVE`) |
| `PRACTSUM` | FLOAT | posted actuals (sum of `PRACTCURVE`) |
| `PRPENDESTSUM` | FLOAT | pending estimate from timesheets |
| `PRPENDACTSUM` | FLOAT | pending actuals (in-flight from timesheets) |
| `PRPENDSTART` / `PRPENDFINISH` | DATE | system-anticipated dates |
| `PRACTTHRU` | DATE | "as of" date for actuals |
| `PRESTPATTERN` | NUMERIC | loading pattern (Uniform/Fixed/Contour/Front/Back) |
| `PRESTMAX` | FLOAT | max % availability assignable |
| `PRSTATUS` | NUMERIC NOT NULL | 0=Not started, 1=Started, 2=Completed |
| `PRWDM` | FLOAT | work distribution multiplier |
| `PREXTENSION` | BINARY | combined `PRACTCURVE` + `PRESTCURVE` + `PRBASECURVE` |
| `PRESTCURVE`, `PRACTCURVE` | BINARY | time-phased estimate / actuals BLOBs (still present; sliced to [[PRJ_BLB_SLICES]]) |
| `ACTCOST_CURVE`, `ETCCOST_CURVE` | BINARY | time-phased cost BLOBs |
| `IS_OPEN_TE` | NUMERIC NOT NULL | open for time entry |
| `SLICE_STATUS` | NUMERIC | slicer state |
| `PRISUNPLANNED` | NUMERIC NOT NULL | added via timesheet "Add Task" |
| `CREATED_*`, `LAST_UPDATED_*` | | |

> [!warning] Drift from legacy KB on PRASSIGNMENT
> - `PRTEAMID` → `TEAM_ID` (renamed)
> - `PRBASE_FINISH`, `PRBASE_START` → not on this table; baseline lives in [[PRJ_BASELINE_DETAILS]] (`BASE_START`, `BASE_FINISH`)
> - `PRPCTCOMPLETE` → not on this table; rollup lives on [[PRTASK]] (`PRPCTCOMPLETE`) and [[INV_PROJECTS]] (`PERCENT_COMPLETE`)
> - `PRISMODIFIED` → not present
> - `OPEN_FOR_TIME_ENTRY` → `IS_OPEN_TE`

### Foreign keys (outbound)

- `PRTASKID` → [[PRTASK]].`PRID`
- `TEAM_ID` → [[PRTEAM]].`PRID`
- `PRRESOURCEID` → [[SRM_RESOURCES]].`ID`
- `ROLE_ID` → [[SRM_RESOURCES]].`ID`
- `CREATED_BY`, `LAST_UPDATED_BY` → [[CMN_SEC_USERS]].`ID`

### Inbound

- [[PRTIMEENTRY]].`PRASSIGNMENTID`

### Gotchas

> [!warning] `TEAM_ID` and `PRRESOURCEID` must be consistent
> `PRRESOURCEID` should equal the team-member's resource. XOG enforces this; ad-hoc DML doesn't.

> [!warning] Posted vs pending actuals
> Actuals only become "real" after the time slicer runs. `PRPENDACTSUM` is the in-flight number; `PRACTSUM` is the post-slice total. Use [[PRJ_BLB_SLICES]] for live numbers during posting cycles.

> [!info] Deleting an assignment with existing time entries fails on FK

## PRJ_BASELINES / PRJ_BASELINE_DETAILS

[[PRJ_BASELINES]] holds baseline headers (one project can have multiple; one is "current"). [[PRJ_BASELINE_DETAILS]] holds per-task baseline rows.

> [!info] Verified columns
> Header — see [[PRJ_BASELINES]]. Detail — see [[PRJ_BASELINE_DETAILS]]. Common joins:
> - `PRJ_BASELINES.OBJECT_ID` → [[INV_INVESTMENTS]].`ID` (note: NOT `PROJECT_ID` as the legacy KB suggests; verify on the table note)
> - `PRJ_BASELINE_DETAILS.BASELINE_ID` → [[PRJ_BASELINES]].`ID`
> - `PRJ_BASELINE_DETAILS.TASK_ID` → [[PRTASK]].`PRID` (when the detail is task-level)

## Dependencies

The legacy KB calls these `PRJ_DEPENDENCIES`. In 16.4.1 they live in two tables:

- [[PRDEPENDENCY]] — task-level dependencies. Verified columns: `prID`, `prPredID` (predecessor task → [[PRTASK]].`PRID`), `prSuccID` (successor task → [[PRTASK]].`PRID`), `prLag`, `prType` (FS/SS/FF/SF). See [[PRDEPENDENCY]].
- [[PRJ_PROJECT_DEPENDS]] — project-level dependencies (cross-project). See [[PRJ_PROJECT_DEPENDS]].

> [!info] Dependency types
> `0` = FS (Finish-to-Start), `1` = SS (Start-to-Start), `2` = FF (Finish-to-Finish), `3` = SF (Start-to-Finish).

## See also
- [[Domain 03 - Resources Roles and Calendars]] — what `PRRESOURCEID` joins to
- [[Domain 04 - Time Timesheets and Slicing]] — where actuals come from
- [[Common Joins Cheat-Sheet]]
- [[Universal Conventions]]
- [[_MOC - Curated SQL Knowledge]]
