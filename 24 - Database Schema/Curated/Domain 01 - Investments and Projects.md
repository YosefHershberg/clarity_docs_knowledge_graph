---
title: Domain 01 - Investments and Projects
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 1
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/investments
---

# Domain 01 — Investments and Projects

> [!important] Architectural fact
> **Every fundable, schedulable, or staffable thing is an "investment".** Project, Application, Asset, Idea, Service, Product, and Other Work are all sub-types. The super-type table is [[INV_INVESTMENTS]]; each sub-type adds its specifics in a 1:1 child table that joins on `ID` (the sub-type table's PK is named `PRID` in 16.4.1; the join is `subtype.PRID = INV_INVESTMENTS.ID`).

[[SRM_PROJECTS]] is a **view** over [[INV_INVESTMENTS]] filtered to project rows. It existed as a real table before Clarity 8.1; it was migrated to a view to preserve legacy NSQL/GEL.

## Tables in this domain

- [[INV_INVESTMENTS]] — super-type
- [[INV_PROJECTS]] — sub-type for projects
- [[INV_APPLICATIONS]] — sub-type for applications
- [[INV_ASSETS]] — sub-type for assets
- [[INV_IDEAS]] — sub-type for ideas
- [[INV_SERVICES]] — sub-type for services
- [[INV_PRODUCTS]] — sub-type for products
- [[INV_OTHERS]] — sub-type for "other work" (legacy KB calls this `INV_OTHER_WORK`)
- [[INV_HIERARCHIES]] — investment parent/child rollup (legacy KB calls this `INV_FLAT_HIERARCHIES`; in 16.4.1 the rollup table is [[INV_HIERARCHIES]] and there's also [[INV_FLAT_HIERARCHIES]] which is a closure table)
- [[SRM_PROJECTS]] — legacy view (`SELECT * FROM INV_INVESTMENTS WHERE ODF_OBJECT_CODE = 'project'`)

## INV_INVESTMENTS

> [!info] Purpose
> Super-type for every investment. Holds attributes common to all investment kinds: identity, dates, manager, status, currency, baseline pointer.

- **Primary key.** `ID`.
- **Business key.** `CODE` (unique within partition; XOG and REST handle).
- **Discriminator.** `ODF_OBJECT_CODE` ∈ `{project, application, asset, idea, service, product, other}` (note: the "other" sub-type uses `'other'`, not `'other_work'`, in 16.4.1).

> [!example] Verified columns live in [[INV_INVESTMENTS]]
> The dump note has all 114 columns with types and comments. Below are the keystone columns the agent typically reaches for.

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `ID` | NUMERIC NOT NULL | PK |
| `CODE` | NVARCHAR NOT NULL | external/business key |
| `NAME` | NVARCHAR NOT NULL | display name |
| `DESCRIPTION` | NVARCHAR | also `INV_DESCRIPTION` (rich text) added in 16.x |
| `ODF_OBJECT_CODE` | NVARCHAR NOT NULL | type discriminator |
| `IS_ACTIVE` | NUMERIC NOT NULL | `0` = inactive, `1` = active |
| `ODF_TEMPLATE` | NUMERIC NOT NULL | template flag (legacy KB calls this `IS_TEMPLATE` — that name does not exist on this table; `IS_TEMPLATE` lives on [[INV_PROJECTS]] only) |
| `MANAGER_ID` | NUMERIC | FK → [[CMN_SEC_USERS]].`ID` |
| `APPROVEDBY_ID` | NUMERIC | FK → [[CMN_SEC_USERS]].`ID` |
| `SCHEDULE_START` | DATE | spans earliest task start and earliest team allocation start |
| `SCHEDULE_FINISH` | DATE | spans latest task finish and latest team allocation finish |
| `BASELINE_ID` | NUMERIC | FK → [[PRJ_BASELINES]].`ID` (current baseline pointer) |
| `STATUS` | NUMERIC NOT NULL | approval state — driven by the investment's object-state lookup |
| `STATUS_INDICATOR` | NUMERIC | RYG (lookup `INVESTMENT_STATUS_INDICATOR`) |
| `PROGRESS` | NUMERIC NOT NULL | `0` = not started, `1` = started, `2` = completed |
| `PRIORITY` | NUMERIC | 0–36 |
| `RISK` | NUMERIC | aggregate risk score |
| `STAGE_CODE` | NVARCHAR | lifecycle stage |
| `GOAL_CODE` | NVARCHAR | strategic goal |
| `CURRENCY_CODE` | NVARCHAR | ISO 3-letter; FK → CMN_CURRENCIES (off-screen — see also stub) |
| `ENTITY_CODE` | NVARCHAR | FK → [[ENTITY]].`ENTITY` |
| `IS_OPEN_FOR_TE` | NUMERIC NOT NULL | gate for time entry against the investment |
| `TRACK_MODE` | NUMERIC | source of actuals |
| `IS_REQUIRED` | NUMERIC NOT NULL | required-in-portfolio flag |
| `IS_CUSTOM` | NUMERIC NOT NULL | belongs to a custom investment object |
| `RSF_OBS_UNIT` | NUMERIC | default staffing OBS unit; FK → [[PRJ_OBS_UNITS]].`ID` |
| `IDEA_ID` | NUMERIC | back-pointer to the idea this was promoted from (refers to PMA_IDEAS.ID; treat as [[INV_IDEAS]] in 16.4.1) |
| `PARENT_ID` | NUMERIC | parent investment id (program → child) |
| `CHARGECODEID` | NUMERIC | FK → [[PRCHARGECODE]].`PRID` |
| `PURGE_FLAG` | NUMERIC | marked for deletion |
| `SLICE_STATUS` | NUMERIC | slicing status for [[PRJ_BLB_SLICES]] |
| `CREATED_DATE`, `CREATED_BY` | DATE / NUMERIC | `CREATED_BY` → [[CMN_SEC_USERS]].`ID` |
| `LAST_UPDATED_DATE`, `LAST_UPDATED_BY` | DATE / NUMERIC | |

> [!warning] Curated KB drift on INV_INVESTMENTS
> The legacy KB lists `IS_TEMPLATE`, `BASELINE_START`, `BASELINE_FINISH`, and `PARTITION_CODE` directly on this table. **None of those exist in the 16.4.1 dump.** Use `ODF_TEMPLATE` for the template flag, `BASELINE_ID` (joined to [[PRJ_BASELINES]]) for baseline dates, and confirm partition handling with `INFORMATION_SCHEMA.COLUMNS` (multi-tenant partitioning is real but the column name is environment-dependent).

### Foreign keys (outbound)

- `MANAGER_ID`, `APPROVEDBY_ID`, `CREATED_BY`, `LAST_UPDATED_BY` → [[CMN_SEC_USERS]].`ID`
- `BASELINE_ID` → [[PRJ_BASELINES]].`ID`
- `RSF_OBS_UNIT` → [[PRJ_OBS_UNITS]].`ID`
- `CHARGECODEID` → [[PRCHARGECODE]].`PRID`
- `ENTITY_CODE` → [[ENTITY]].`ENTITY`

### Inbound (selected — many more exist)

- [[INV_PROJECTS]].`PRID`, [[INV_APPLICATIONS]].`PRID`, [[INV_ASSETS]].`PRID`, [[INV_IDEAS]].`PRID`, [[INV_SERVICES]].`PRID`, [[INV_PRODUCTS]].`PRID`, [[INV_OTHERS]].`ID` (1:1 sub-types)
- [[ODF_CA_PROJECT]].`ID` (custom attrs — off-screen stub)
- [[PRTASK]].`PRPROJECTID`, [[PRTEAM]].`PRPROJECTID`
- [[PAC_MNT_PROJECTS]].`OBJECT_ID`
- [[INV_FLAT_HIERARCHIES]] (closure)
- [[PRJ_OBS_ASSOCIATIONS]] when `TABLE_NAME = 'SRM_PROJECTS'`

### Typical query (16.4.1-correct)

```sql
-- Active, non-template projects with their custom attributes and manager
SELECT  i.ID, i.CODE, i.NAME, i.SCHEDULE_START, i.SCHEDULE_FINISH,
        u.USER_NAME      AS manager_login,
        op.*
FROM    INV_INVESTMENTS  i
JOIN    INV_PROJECTS     p   ON p.PRID = i.ID
LEFT    JOIN ODF_CA_PROJECT op ON op.ID = i.ID
LEFT    JOIN CMN_SEC_USERS u  ON u.ID  = i.MANAGER_ID
WHERE   i.ODF_OBJECT_CODE = 'project'
  AND   i.IS_ACTIVE       = 1
  AND   p.IS_TEMPLATE     = 0;
```

### Gotchas

> [!warning] Always filter `ODF_OBJECT_CODE`
> Forgetting it returns all investments, not just the type you intended.

> [!warning] `IS_TEMPLATE` lives on [[INV_PROJECTS]], not [[INV_INVESTMENTS]]
> Filter `p.IS_TEMPLATE = 0` after joining the sub-type. The investment-level template flag is `ODF_TEMPLATE` and is distinct (modern-UI templates).

> [!warning] `IS_ACTIVE = 0` is soft-inactivation, not delete
> Rows persist; XOG can re-activate. Never `DELETE` from this table — it cascades through 30+ tables and breaks them.

> [!warning] `MANAGER_ID` points to [[CMN_SEC_USERS]].`ID`, NOT [[SRM_RESOURCES]].`ID`
> Bites everyone the first time. To get the manager's resource record: `JOIN SRM_RESOURCES rm ON rm.USER_ID = i.MANAGER_ID`.

> [!info] `STATUS` domain depends on `ODF_OBJECT_CODE`
> Different sub-types use different lookup types for the same column.

> [!info] Baseline dates are NOT on this table
> Use `BASELINE_ID → PRJ_BASELINES → PRJ_BASELINE_DETAILS` for baseline numbers.

## INV_PROJECTS

> [!info] Purpose
> Sub-type holding **project-only** attributes. Exactly one row per [[INV_INVESTMENTS]] row where `ODF_OBJECT_CODE = 'project'`.

- **Primary key.** `PRID` — also FK to [[INV_INVESTMENTS]].`ID`. (Note: the legacy KB calls this `ID`; in the 16.4.1 dump the column is `PRID`.)

> [!example] Verified columns live in [[INV_PROJECTS]]

### Keystone columns (16.4.1)

| Column | Type | Notes |
| --- | --- | --- |
| `PRID` | NUMERIC | PK + FK → [[INV_INVESTMENTS]].`ID` |
| `IS_TEMPLATE` | NUMERIC NOT NULL | template flag |
| `IS_PROGRAM` | NUMERIC NOT NULL | program flag (rolls up children) |
| `IS_REVENUE_PLAN` | NUMERIC NOT NULL | benefits vs revenue mode |
| `TYPE` | NVARCHAR NOT NULL | project type |
| `PRBUDGET` | FLOAT | projected cost (legacy budget number) |
| `PRPCTCOMPLETE` | FLOAT | default new-task % complete |
| `PERCENT_COMPLETE` | NUMERIC NOT NULL | computed project % complete |
| `PERCENT_CALC_MODE` | NUMERIC NOT NULL | which calc method |
| `PRASOF` | DATE | "as-of date" for earned value |
| `PROCESS_SCALE_BDGT` / `PROCESS_SCALE_WORK` | NUMERIC | template-process scaling |
| `STAGE_IDENTIFIER` | NVARCHAR | Six Sigma stage |
| `RCF_*` | NUMERIC | risk contributing factors (objectives, sponsorship, funding, …) |
| `EV_PERIOD_ID`, `EV_CALC_METHOD`, `EV_BCWP_OVR` | various | earned-value reporting |
| `LAST_CALC_RUN` | DATE | task-estimates last run |
| `REQ_APPROVAL_REQD` | NUMERIC NOT NULL | requisition approval required |
| `CREATED_*`, `LAST_UPDATED_*` | | |

> [!warning] Drift from the legacy KB
> The legacy KB lists `OPEN_FOR_TIME_ENTRY`, `TRACK_MODE`, `STATUS_INDICATOR`, `BUDGET_PLAN_TYPE_CODE`, `WORK_STATUS`, `STAGE_CODE`, `GOAL_CODE`, `BASELINE_LAST_UPDATED_DATE` on this table. **In 16.4.1 those live on [[INV_INVESTMENTS]] (`IS_OPEN_FOR_TE`, `TRACK_MODE`, `STATUS_INDICATOR`, `STAGE_CODE`, `GOAL_CODE`)**, not on the sub-type. Use the parent table for them.

### Gotchas

> [!warning] Filter `IS_TEMPLATE = 0` here
> The legacy KB suggests checking the parent — but in 16.4.1 only this sub-type carries the flag.

> [!warning] `IS_OPEN_FOR_TE` lives on the parent
> Common cause of "missing actuals" — check `INV_INVESTMENTS.IS_OPEN_FOR_TE`, [[PRTEAM]].`PRISOPEN`, and [[SRM_RESOURCES]].`OPEN_FOR_TIME_ENTRY`.

> [!info] Track mode is on the parent
> Use `INV_INVESTMENTS.TRACK_MODE` for "where actuals come from" (Clarity / Other / None).

## Other sub-types

| Table | `ODF_OBJECT_CODE` | Notable columns (16.4.1) | Custom attrs |
| --- | --- | --- | --- |
| [[INV_APPLICATIONS]] | `application` | see [[INV_APPLICATIONS]] for verified list | [[ODF_CA_APPLICATION]] |
| [[INV_ASSETS]] | `asset` | see [[INV_ASSETS]] | `ODF_CA_ASSET` |
| [[INV_IDEAS]] | `idea` | see [[INV_IDEAS]] | [[ODF_CA_IDEA]] |
| [[INV_SERVICES]] | `service` | see [[INV_SERVICES]] | `ODF_CA_SERVICE` |
| [[INV_PRODUCTS]] | `product` | see [[INV_PRODUCTS]] | `ODF_CA_PRODUCT` |
| [[INV_OTHERS]] | `other` | only 6 columns: `ID`, `CATEGORY_CODE`, audit columns. Most data lives on [[INV_INVESTMENTS]]. | `ODF_CA_OTHER` |

> [!info] Sub-type discriminator value for "Other Work"
> Legacy KB says `'other_work'`. In 16.4.1 the value is `'other'` (verify in your environment by `SELECT DISTINCT ODF_OBJECT_CODE FROM INV_INVESTMENTS`).

## INV_HIERARCHIES / INV_FLAT_HIERARCHIES

> [!info] Purpose
> Investment parent/child rollup tables — used for program → project hierarchies.

- [[INV_HIERARCHIES]] — direct parent→child links (`PARENT_ID`, `CHILD_ID`).
- [[INV_FLAT_HIERARCHIES]] — closure table (every ancestor↔descendant pair). Use this for "all descendants of a program" queries without recursive SQL.

> [!warning] Legacy KB calls the rollup table `INV_FLAT_HIERARCHIES`
> In 16.4.1 there are two distinct tables — verify the column you need with the dump notes.

## SRM_PROJECTS (view)

> [!info] Purpose
> Legacy view returning [[INV_INVESTMENTS]] rows where `ODF_OBJECT_CODE = 'project'`. Was a real table before Clarity 8.1; migrated to a view to keep old NSQL/GEL/XOG working.

```sql
-- Effective definition
CREATE OR REPLACE VIEW SRM_PROJECTS AS
SELECT * FROM INV_INVESTMENTS WHERE ODF_OBJECT_CODE = 'project';
```

> [!warning] Critical: OBS uses the string `'SRM_PROJECTS'`
> [[PRJ_OBS_ASSOCIATIONS]].`TABLE_NAME` for project links stores **`'SRM_PROJECTS'`** (not `'INV_INVESTMENTS'`). Hard-coded historical behaviour. The same is true of [[PRTASK]].`PRPROJECTID` whose comment says `refers to SRM_PROJECTS.ID` — treat that join as `INV_INVESTMENTS.ID`.

> [!warning] DML via the view is not supported
> Indexes physically belong to [[INV_INVESTMENTS]].

## See also
- [[_MOC - Curated SQL Knowledge]]
- [[Universal Conventions]]
- [[Common Joins Cheat-Sheet]]
- [[Where Is The Truth]]
- [[Domain 02 - Tasks Assignments and Team]] — what hangs off a project
- [[Domain 08 - Custom Objects and ODF]] — custom attrs in `ODF_CA_*`
