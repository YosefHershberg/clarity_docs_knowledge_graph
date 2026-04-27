---
title: Common Joins Cheat-Sheet
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

# Common Joins Cheat-Sheet

> [!important] All examples below are corrected against the 16.4.1 schema dump
> Where the legacy KB used a different name (`PRTEAMID` → `TEAM_ID`, `PROUTLINELEVEL` → `PRWBSLEVEL`, `PRJ_SLICE_REQUESTS` → [[PRJ_BLB_SLICEREQUESTS]], `INV_OTHER_WORK` → [[INV_OTHERS]], `SRM_ACTIONITEMS` → [[CAL_ACTION_ITEMS]], `FIN_TRANSACTIONS` → [[FIN_TXNS]], etc.), the dump-correct name is used here.

## A. Project → custom attributes → manager

```sql
SELECT  i.ID, i.CODE, i.NAME, op.*, u.USER_NAME AS manager
FROM    INV_INVESTMENTS  i
JOIN    INV_PROJECTS     p   ON p.PRID = i.ID
LEFT    JOIN ODF_CA_PROJECT op ON op.ID = i.ID
LEFT    JOIN CMN_SEC_USERS u  ON u.ID  = i.MANAGER_ID
WHERE   i.ODF_OBJECT_CODE = 'project'
  AND   i.IS_ACTIVE       = 1
  AND   p.IS_TEMPLATE     = 0;
```

## B. Project team

```sql
SELECT  i.CODE, r.UNIQUE_NAME, r.FULL_NAME,
        tm.PRAVAILSTART, tm.PRAVAILFINISH, tm.PRBOOKING
FROM    PRTEAM            tm
JOIN    INV_INVESTMENTS   i  ON i.ID = tm.PRPROJECTID
JOIN    SRM_RESOURCES     r  ON r.ID = tm.PRRESOURCEID
WHERE   i.CODE = 'PR1001'
  AND   tm.PRISOPEN = 1;
```

## C. Project tasks → assignments → resource

```sql
SELECT  i.CODE, t.PRNAME, r.FULL_NAME,
        a.PRESTSUM/3600 AS est_hours, a.PRACTSUM/3600 AS act_hours
FROM    PRTASK         t
JOIN    INV_INVESTMENTS i ON i.ID = t.PRPROJECTID
JOIN    PRASSIGNMENT    a ON a.PRTASKID = t.PRID
JOIN    SRM_RESOURCES   r ON r.ID = a.PRRESOURCEID
WHERE   i.CODE = 'PR1001'
  AND   t.PRISTASK = 1;            -- detail (leaf) tasks only
```

## D. Resource → user (login) → manager (resource)

```sql
SELECT  r.UNIQUE_NAME, u.USER_NAME, mr.UNIQUE_NAME AS manager_resource
FROM    SRM_RESOURCES   r
LEFT    JOIN CMN_SEC_USERS u   ON u.ID  = r.USER_ID
LEFT    JOIN CMN_SEC_USERS um  ON um.ID = r.MANAGER_ID  -- MANAGER_ID points at USER, not RESOURCE
LEFT    JOIN SRM_RESOURCES mr  ON mr.USER_ID = um.ID;
```

## E. Timesheets → daily slices

```sql
-- 1) Find the slice-request id for daily PRTIMEENTRY actuals once per env
SELECT ID, REQUEST_NAME, TABLE_NAME
  FROM PRJ_BLB_SLICEREQUESTS
 WHERE FIELD = 5      -- PRTIMEENTRY.prActCurve
   AND PERIOD = 0     -- daily
   AND IS_ACTIVE = 1;

-- 2) Read the slices
SELECT  R.UNIQUE_NAME, I.NAME AS project, T.PRNAME AS task,
        S.SLICE_DATE, S.SLICE / 3600.0 AS hours
FROM    PRTIMEPERIOD     TP
JOIN    PRTIMESHEET      TS  ON TS.PRTIMEPERIODID = TP.PRID
JOIN    PRTIMEENTRY      TE  ON TE.PRTIMESHEETID  = TS.PRID
JOIN    SRM_RESOURCES    R   ON R.ID = TS.PRRESOURCEID
JOIN    PRASSIGNMENT     A   ON A.PRID = TE.PRASSIGNMENTID
JOIN    PRTASK           T   ON T.PRID = A.PRTASKID
JOIN    INV_INVESTMENTS  I   ON I.ID  = T.PRPROJECTID
JOIN    PRJ_BLB_SLICES   S   ON S.PRJ_OBJECT_ID    = TE.PRID
                            AND S.SLICE_REQUEST_ID = :daily_actuals_slice_id
WHERE   R.UNIQUE_NAME = 'admin'
  AND   TP.PRSTART >= DATE '2025-01-01';
```

## F. OBS unit (and descendants) → resources

```sql
SELECT  R.UNIQUE_NAME, R.FULL_NAME
FROM    PRJ_OBS_TYPES         OT
JOIN    PRJ_OBS_UNITS         OU  ON OU.TYPE_ID = OT.ID
JOIN    OBS_UNITS_FLAT_BY_MODE OUF ON OUF.UNIT_ID = OU.ID
JOIN    PRJ_OBS_ASSOCIATIONS  OA  ON OA.UNIT_ID = OUF.LINKED_UNIT_ID
                                 AND OA.TABLE_NAME = 'SRM_RESOURCES'
JOIN    SRM_RESOURCES         R   ON R.ID = OA.RECORD_ID
WHERE   OT.UNIQUE_NAME = 'Resource Pool'
  AND   OU.UNIQUE_NAME = 'External'
  AND   OUF.UNIT_MODE  = 'OBS_UNIT_AND_CHILDREN';
```

## G. Project + OBS unit (note `'SRM_PROJECTS'` string)

```sql
SELECT  i.CODE, i.NAME, ou.UNIQUE_NAME AS obs_unit
FROM    PRJ_OBS_ASSOCIATIONS oa
JOIN    INV_INVESTMENTS      i   ON i.ID = oa.RECORD_ID
JOIN    PRJ_OBS_UNITS        ou  ON ou.ID = oa.UNIT_ID
WHERE   oa.TABLE_NAME = 'SRM_PROJECTS'      -- not 'INV_INVESTMENTS'!
  AND   i.ODF_OBJECT_CODE = 'project'
  AND   i.IS_ACTIVE       = 1;
```

## H. Lookup display value (translated)

```sql
JOIN  CMN_LOOKUPS_V  L
   ON  L.ID            = <fk_column>
  AND  L.LOOKUP_TYPE   = '<TYPE_CODE>'
  AND  L.LANGUAGE_CODE = 'en';
```

Common type codes: `SEC_USER_STATUS`, `INVESTMENT_STATUS_INDICATOR`, `PRJ_STATUS`, `PRJ_GOAL`, `RES_RESOURCE_TYPE`.

## I. Investment hierarchy (program → all descendants)

```sql
SELECT  child.CODE, child.NAME
FROM    INV_INVESTMENTS  parent
JOIN    INV_FLAT_HIERARCHIES h ON h.PARENT_ID = parent.ID
JOIN    INV_INVESTMENTS  child  ON child.ID = h.CHILD_ID
WHERE   parent.CODE = 'PROG-001'
  AND   child.IS_ACTIVE = 1;
```

## J. Investment → financials bridge

```sql
-- Project's financial-properties row via the polymorphic mapping
SELECT  i.CODE, i.NAME, fin.*
FROM    INV_INVESTMENTS              i
JOIN    ODF_OBJECT_INSTANCE_MAPPINGS m
       ON  m.PRIMARY_OBJECT_INSTANCE_CODE   = 'project'
       AND m.PRIMARY_OBJECT_INSTANCE_ID     = i.ID
       AND m.SECONDARY_OBJECT_INSTANCE_CODE = 'financials'
JOIN    FIN_FINANCIALS               fin
       ON  fin.ID = m.SECONDARY_OBJECT_INSTANCE_ID
WHERE   i.CODE = 'PR1001';
```

## K. Skills on resources / requisitions

```sql
SELECT  r.UNIQUE_NAME, sk.NAME AS skill, ass.PROFICIENCY
FROM    SRM_RESOURCES            r
JOIN    RSM_SKILLS_ASSOCIATIONS  ass ON ass.RESOURCE_ID = r.ID
JOIN    RSM_SKILLS               sk  ON sk.ID = ass.SKILL_ID;
```

## L. Action items by assignee (16.4.1)

```sql
SELECT  ai.SUBJECT, ai.STATUS, ai.PRIORITY, ai.DUE_DATE,
        r.UNIQUE_NAME AS assignee, inv.NAME AS related_investment
FROM    CAL_ACTION_ITEMS              ai
LEFT    JOIN CAL_ACTION_ITEM_ASSIGNEES ass ON ass.CAL_ACTION_ITEM_ID = ai.ID
LEFT    JOIN SRM_RESOURCES             r   ON r.USER_ID = ass.PROXY_SOURCE_ID
LEFT    JOIN INV_INVESTMENTS           inv ON inv.ID = ai.OBJECT_ID;
```

## Cross-domain "where is the truth" map

| Question | Source-of-truth table | Beware-of (denormalized) |
| --- | --- | --- |
| Project attributes (built-in) | [[INV_INVESTMENTS]] + [[INV_PROJECTS]] | [[SRM_PROJECTS]] view |
| Project attributes (custom) | [[ODF_CA_PROJECT]] | — |
| Resource attributes (built-in) | [[SRM_RESOURCES]] (+ [[PRJ_RESOURCES]]) | `OBS_UNIT_ID` denormalized (does not exist on SRM_RESOURCES in 16.4.1; truth is in [[PRJ_OBS_ASSOCIATIONS]]) |
| Resource attributes (custom) | [[ODF_CA_RESOURCE]] | — |
| Login info / manager | [[CMN_SEC_USERS]] | [[SRM_RESOURCES]].`MANAGER_ID` (points to USER, not RESOURCE!) |
| Time-phased actuals (raw) | [[PRTIMEENTRY]] (+ slices) | [[PRASSIGNMENT]].`PRACTSUM`, [[PRTASK]].`ACTUALS_CURVE` (post-slice rollups) |
| Time-phased allocation | [[PRJ_BLB_SLICES]] (sliced from [[PRTEAM]] BLOBs) | `PRTEAM.PRALLOCSUM` (only flat total) |
| OBS membership | [[PRJ_OBS_ASSOCIATIONS]] | [[PRTEAM]].`RSF_OBSUNIT_ID` (denormalized for staffing requirement) |
| Translations | [[CMN_CAPTIONS_NLS]] (or via [[CMN_LOOKUPS_V]]) | `<table>.NAME` (default-language only) |
| Cost-plan time-phased | [[PRJ_BLB_SLICES]] (finance slice IDs) | Period totals on plan headers |
| Audit history | [[CMN_AUDITS]] | — |

See [[Where Is The Truth]] for an expanded discussion.

## See also
- [[_MOC - Curated SQL Knowledge]]
- [[Universal Conventions]]
- [[Where Is The Truth]]
- [[Joining Recipes]] — auto-generated 14 SQL templates (older; use this cheatsheet first)
