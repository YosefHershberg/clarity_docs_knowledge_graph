---
title: Domain 03 - Resources Roles and Calendars
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 3
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/resources
---

# Domain 03 — Resources, Roles and Calendars

## Conceptual point

> [!important] Resources, roles, materials, equipment and expense types are all rows in [[SRM_RESOURCES]]
> Distinguished by:
> - `RESOURCE_TYPE` — numeric type code (Labor / Material / Equipment / Expense). The legacy KB calls this `RESOURCE_TYPE_CODE` and treats it as a VARCHAR — in the 16.4.1 dump it is `RESOURCE_TYPE` (NUMERIC).
> - `PERSON_TYPE` — numeric flag (the legacy KB's `IS_ROLE` flag does not exist on SRM_RESOURCES in 16.4.1; the role flag lives on the sister table [[PRJ_RESOURCES]] as `PRISROLE`).
> - The 1:1 sister table [[PRJ_RESOURCES]] adds `PRTYPECODEID` (older type-code mechanism, FK → [[PRTYPECODE]]).

## Tables in this domain

- [[SRM_RESOURCES]] — master table for everyone and everything that can be allocated
- [[PRJ_RESOURCES]] — 1:1 project-system extension (calendar, type-code, role flags, availability curves)
- [[CMN_SEC_USERS]] — login user accounts (off-screen stub; column-level metadata is not in the 16.4.1 dump)
- [[PRCALENDAR]] — base calendars
- [[PRCALENDAREXCEPTION]] — calendar exception days (off-screen — not in dump)
- [[PRTYPECODE]] — resource type code lookup

## SRM_RESOURCES

> [!info] Purpose
> Master table for everyone and everything that can be allocated. **Distinct from [[CMN_SEC_USERS]]**: a resource may or may not have a login user; an admin user may have no resource record.

- **Primary key.** `ID`.
- **Business key.** `UNIQUE_NAME` — the user-facing Resource ID.

> [!example] Verified columns live in [[SRM_RESOURCES]]
> 64 columns in 16.4.1. Below are the keystone columns the agent typically reaches for. **Several names from the legacy KB do not exist in 16.4.1** — see the drift callout.

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `ID` | NUMERIC | PK |
| `UNIQUE_NAME` | NVARCHAR | external/business key |
| `FULL_NAME` | NVARCHAR | display name |
| `FIRST_NAME`, `LAST_NAME`, `MIDDLE_NAME` | NVARCHAR | for labor resources |
| `EMAIL`, `SMS_EMAIL` | NVARCHAR | |
| `USER_ID` | NUMERIC | FK → [[CMN_SEC_USERS]].`ID` (NULL for non-login resources) |
| `MANAGER_ID` | NUMERIC | FK → [[CMN_SEC_USERS]].`ID` — **points to USER, not RESOURCE** |
| `BOOK_MANAGER_ID` | NUMERIC | booking manager (also a CMN_SEC_USERS.ID) |
| `IS_ACTIVE` | NUMERIC NOT NULL | activation |
| `IS_EXTERNAL` | INTEGER NOT NULL | LDAP/SSO-sourced |
| `EXTERNAL_ID`, `EXTERNAL_SOURCE_ID` | NVARCHAR/NUMERIC | external HR system id |
| `RESOURCE_TYPE` | NUMERIC NOT NULL | resource kind (numeric, NOT a VARCHAR like the legacy KB suggests) |
| `PERSON_TYPE` | NUMERIC NOT NULL | person classification |
| `DATE_OF_HIRE` | DATE | (legacy KB calls this `HIRE_DATE`) |
| `DATE_OF_TERMINATION` | DATE | (legacy KB calls this `TERMINATION_DATE`) |
| `ENTITY_CODE` | NVARCHAR | financial entity |
| `FORECAST_RATE` | NUMERIC | |
| `DEFINED_TEAM_ID` | NUMERIC | FK → TEAM_DEFINITIONS |
| `IS_HIDDEN` | NUMERIC NOT NULL | hide from UI |
| `ODF_BLUEPRINT_ID` | NUMERIC | modern UI blueprint |
| `INCLUDE_FLAG` | INTEGER NOT NULL | |
| `USE_IN_FRC_BUDGET` | INTEGER NOT NULL | force into budget |
| `SLICE_STATUS` | NUMERIC | |
| `CREATED_*`, `LAST_UPDATED_*` | | |

> [!warning] Drift from legacy KB on SRM_RESOURCES
> The legacy KB lists these columns as living on SRM_RESOURCES — **they do not, in 16.4.1**. Use the noted alternatives:
> - `RESOURCE_TYPE_CODE` (VARCHAR) → `RESOURCE_TYPE` (NUMERIC) on this table
> - `IS_ROLE` → [[PRJ_RESOURCES]].`PRISROLE`
> - `PRIMARY_ROLE_ID` → [[PRJ_RESOURCES]].`PRPRIMARYROLEID`
> - `OPEN_FOR_TIME_ENTRY` → [[PRJ_RESOURCES]].`PRISOPEN`
> - `EMPLOYMENT_TYPE_CODE`, `LANGUAGE_ID`, `LOCALE_ID`, `TIME_ZONE`, `LAST_LOGIN_DATE` → all on [[CMN_SEC_USERS]] (off-screen stub; verify column names against your environment)
> - `AVAILABILITY` (hours/day) → not on this table; see [[PRCALENDAR]].`HOURS_PER_DAY` for calendar-based availability and [[PRJ_RESOURCES]].`PRAVAILCURVE` (BLOB) for time-phased availability
> - `BOOKING_STATUS` → not on this table; per-team booking is [[PRTEAM]].`PRBOOKING` (`5`=Soft, `15`=Hard, `10`=Mixed)
> - `OBS_UNIT_ID` → not on this table; truth lives in [[PRJ_OBS_ASSOCIATIONS]] when `TABLE_NAME = 'SRM_RESOURCES'`

### Outbound FKs

- `USER_ID` → [[CMN_SEC_USERS]].`ID`
- `MANAGER_ID`, `BOOK_MANAGER_ID`, `CREATED_BY`, `LAST_UPDATED_BY` → [[CMN_SEC_USERS]].`ID`
- `ENTITY_CODE` → [[ENTITY]].`ENTITY`
- `DEFINED_TEAM_ID` → TEAM_DEFINITIONS (off-screen)

### Inbound (heavy)

- [[PRTEAM]].`PRRESOURCEID`, `PRROLEID`
- [[PRASSIGNMENT]].`PRRESOURCEID`, `ROLE_ID`
- [[PRTIMESHEET]].`PRRESOURCEID`
- [[PRJ_RESOURCES]].`PRID` (1:1)
- [[PRJ_OBS_ASSOCIATIONS]] when `TABLE_NAME = 'SRM_RESOURCES'`
- [[ODF_CA_RESOURCE]] (custom attrs — off-screen stub)

### Typical query (16.4.1-correct)

```sql
SELECT  r.UNIQUE_NAME, r.FULL_NAME, u.USER_NAME,
        rr.FULL_NAME      AS primary_role,
        tc.PRNAME         AS type_label,
        c.HOURS_PER_DAY
FROM    SRM_RESOURCES  r
LEFT    JOIN CMN_SEC_USERS  u  ON u.ID  = r.USER_ID
LEFT    JOIN PRJ_RESOURCES  pr ON pr.PRID = r.ID
LEFT    JOIN PRJ_RESOURCES  rrp ON rrp.PRID = pr.PRPRIMARYROLEID  -- primary role row in PRJ_RESOURCES
LEFT    JOIN SRM_RESOURCES  rr  ON rr.ID  = rrp.PRID                -- and back to SRM for full name
LEFT    JOIN PRTYPECODE     tc  ON tc.PRID = pr.PRTYPECODEID
LEFT    JOIN PRCALENDAR     c   ON c.PRID  = pr.PRCALENDARID
WHERE   r.IS_ACTIVE = 1;
```

### Gotchas

> [!warning] `MANAGER_ID` points at [[CMN_SEC_USERS]].`ID`, not [[SRM_RESOURCES]].`ID`
> Bites everyone the first time. To get the manager *as a resource*: `JOIN SRM_RESOURCES mr ON mr.USER_ID = r.MANAGER_ID`.

> [!warning] Role flag is on the sister table
> Use [[PRJ_RESOURCES]].`PRISROLE = 1` to find roles. SRM_RESOURCES.`PERSON_TYPE` is a different classification.

> [!info] Non-login resources have `USER_ID IS NULL`
> Typical for materials/equipment.

> [!info] OBS membership is in [[PRJ_OBS_ASSOCIATIONS]]
> A resource can be associated to multiple OBS units across multiple OBS types.

> [!warning] Inactivating a resource does not remove their assignments

## PRJ_RESOURCES

> [!info] Purpose
> Project-system extension table for resources. **1:1** with [[SRM_RESOURCES]] (`PRJ_RESOURCES.PRID = SRM_RESOURCES.ID`).

- **Primary key.** `PRID` — also FK to [[SRM_RESOURCES]].`ID`.

> [!example] Verified columns live in [[PRJ_RESOURCES]] (54 columns in 16.4.1)

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `PRID` | NUMERIC | PK + FK → [[SRM_RESOURCES]].`ID` |
| `PRTYPECODEID` | NUMERIC | FK → [[PRTYPECODE]].`PRID` |
| `PRCALENDARID` | NUMERIC | FK → [[PRCALENDAR]].`PRID` |
| `PRISROLE` | NUMERIC NOT NULL | `1` if this row represents a role |
| `PRISOPEN` | NUMERIC NOT NULL | "open for time entry" gate (legacy KB has this on SRM_RESOURCES; in 16.4.1 it's here) |
| `PRAVAILCURVE` | BINARY | time-phased availability BLOB (decode via [[PRJ_BLB_SLICES]]) |
| `PRTRACKMODE` | NUMERIC | how time is tracked |
| `PRPARENTID` | NUMERIC | parent role id (only for role rows) |
| `PRPRIMARYROLEID` | NUMERIC | non-role's primary role (legacy KB calls this `PRIMARY_ROLE_ID` on SRM_RESOURCES) |
| `PRCATEGORY` | NVARCHAR | category |
| `ODF_TOTAL_ALLOC`, `ODF_TOTAL_HARD_ALLOC`, `ODF_TOTAL_ETC`, `ODF_TOTAL_ACTUALS`, `ODF_TOTAL_USAGE`, `ODF_REMAIN_AVAIL` | BINARY | aggregated time-phased curves rolled up from assignments/teams |
| `ODF_NK_*` | NVARCHARMAX | sql-curve text representations of the BLOB curves |
| `ODF_FTE_*` | NUMERIC | FTE conversion factors per curve |
| `SLICE_STATUS`, `ODF_SS_*` | NUMERIC | slicer state per curve |
| `CREATED_*`, `LAST_UPDATED_*` | | |

### Gotchas

> [!warning] Invisible in modern UI but the scheduler/time-slicer reads it
> Custom integrations sometimes update [[SRM_RESOURCES]] and forget this table → calendar/availability problems.

> [!info] Aggregate curves
> The `ODF_TOTAL_*` BINARY columns are rolled up from [[PRTEAM]] / [[PRASSIGNMENT]]. Reading the matching `ODF_SS_*` slice-status indicator tells you whether they're stale.

## CMN_SEC_USERS

> [!info] Purpose
> Login user accounts. Distinct from [[SRM_RESOURCES]]. Some users have a resource ([[SRM_RESOURCES]].`USER_ID = CMN_SEC_USERS.ID`); some don't (admin-only logins).

> [!warning] Off-screen stub
> [[CMN_SEC_USERS]] is a `db-table-stub` in this vault — column-level metadata was not in the 16.4.1 dump. **Verify columns via `INFORMATION_SCHEMA.COLUMNS` against your environment** before relying on them.

### Keystone columns (legacy KB — verify before use)

| Column | Notes |
| --- | --- |
| `ID` | PK |
| `USER_NAME` | login name |
| `FIRST_NAME`, `LAST_NAME` | |
| `EMAIL` | |
| `USER_STATUS_ID` | FK → [[CMN_LOOKUPS]] with `LOOKUP_TYPE = 'SEC_USER_STATUS'` |
| `LANGUAGE_ID`, `LOCALE_ID`, `TIME_ZONE` | localization |
| `LAST_LOGIN_DATE` | |
| `IS_EXTERNAL` | LDAP/SSO-sourced |
| `EMPLOYMENT_TYPE` | |
| `CREATED_DATE`, `LAST_UPDATED_DATE` | |

### Inbound (very heavy — most "created_by" / "manager_id" / "user_id" columns hit here)

- [[SRM_RESOURCES]].`USER_ID`, `MANAGER_ID`, `BOOK_MANAGER_ID`
- [[INV_INVESTMENTS]].`MANAGER_ID`, `APPROVEDBY_ID`
- Almost every `CREATED_BY` / `LAST_UPDATED_BY` column system-wide
- [[CMN_SEC_ASSGND_OBJ_PERM]], [[CMN_SEC_ASSGND_RIGHTS]], [[CMN_SEC_USER_GROUPS]] (all off-screen stubs)

### Gotchas

> [!info] A user can exist without a resource record
> Admin-only logins have no [[SRM_RESOURCES]] row.

> [!info] `USER_STATUS_ID` must be looked up via [[CMN_LOOKUPS_V]]
> with `LOOKUP_TYPE = 'SEC_USER_STATUS'`. See [[Domain 07 - Lookups and NLS]].

## PRCALENDAR

> [!info] Purpose
> Base calendars driving the scheduling engine.

- **Primary key.** `PRID`.

> [!example] Verified columns live in [[PRCALENDAR]]

### Keystone columns (16.4.1)

| Column | Notes |
| --- | --- |
| `PRID` | PK |
| `PRNAME` | calendar name |
| `PRBASECALENDARID` | self-FK — parent calendar |
| `PRISBASE` | base-calendar flag |
| `PRSTANDARDHOURS` | weekly working-hour pattern (BLOB) |
| `HOURS_PER_DAY` | (modern column) |
| `IS_DEFAULT` | system default |

## PRCALENDAREXCEPTION

> [!warning] Off-screen / not in the 16.4.1 dump
> Calendar exception days (holidays, time off, working-on-weekend overrides). **Verify column names via `INFORMATION_SCHEMA.COLUMNS`.**

- **Primary key (legacy KB).** `PRID`.
- **Key columns (legacy KB).** `PRCALENDARID` → [[PRCALENDAR]].`PRID`, `PREXCEPTIONDATE`, `PRISWORKING`, `PRSTART`, `PRFINISH`.

## PRTYPECODE

> [!info] Purpose
> Resource type code lookup — labor / material / equipment / expense.

- **Primary key.** `PRID`.
- **Key columns.** `PRNAME`, `PRTYPECLASS`. See [[PRTYPECODE]].

## See also
- [[Domain 02 - Tasks Assignments and Team]] — `PRRESOURCEID` lives there
- [[Domain 04 - Time Timesheets and Slicing]] — `PRTIMESHEET.PRRESOURCEID`
- [[Domain 05 - OBS]] — resource ↔ OBS associations
- [[Domain 06 - Security]] — users + groups + rights
- [[Common Joins Cheat-Sheet]]
- [[_MOC - Curated SQL Knowledge]]
