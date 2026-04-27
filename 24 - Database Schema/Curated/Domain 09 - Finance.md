---
title: Domain 09 - Finance
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 9
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/finance
---

# Domain 09 — Finance, Cost & Benefit Plans

> [!warning] Significant naming/structure drift between legacy KB and 16.4.1
> The legacy KB describes a simpler model with `FIN_TRANSACTIONS`, `FIN_ENTITIES`, `FIN_FISCAL_TIME_PERIODS`, `PAC_MNT_PERIODS`, `PAC_MNT_LINEITEMS`, `PAC_MNT_LINEITEM_DETAILS` — **most of these names are not in the 16.4.1 dump**. The actual structure uses [[FIN_TXNS]] (a polymorphic transaction table), [[FIN_POSTED_TXNS]] / [[FIN_POSTED_TXN_VALUES]] for post-posting facts, [[FIN_PLANS]] / [[FIN_COST_PLAN_DETAILS]] / [[FIN_BENEFIT_PLAN_DETAILS]] for cost-plan data, and [[FIN_FINANCIALS]] for the per-investment financial-properties bridge. Currency / entity / fiscal-period tables are off-screen.

## Tables in this domain (16.4.1 reality)

In dump:
- [[FIN_FINANCIALS]] — financial-properties row per investment (bridge from `INV_INVESTMENTS` to finance)
- [[FIN_PLANS]] — cost / benefit plan headers
- [[FIN_COST_PLAN_DETAILS]] — cost-plan line items
- [[FIN_BENEFIT_PLAN_DETAILS]] — benefit-plan line items
- [[FIN_TXNS]] — financial transactions (polymorphic; `TABLE_NAME` / `PK_ID` denote source)
- [[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]] — post-posting facts and dimensional values
- [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]] — plan defaults
- [[FIN_BURDEN_*]] (CLASSES / LEVELS / MATRICES / DETAILS / ASSOCIATIONS) — burden / overhead
- [[FIN_OBJECT_PROPERTIES]] — investment financial properties (per-investment)
- [[FIN_WORKTYPE_TASK_MAP]] — work-type → task mapping (new in 16.4.1)
- [[FIN_ATTRIBUTES]] — financial attribute definitions
- [[PAC_MNT_PROJECTS]] — satellite financial table per investment
- [[PAC_MNT_RESOURCES]] — satellite financial table per resource

Off-screen (legacy KB names; verify columns via `INFORMATION_SCHEMA.COLUMNS`):
- [[FIN_ENTITIES]] — financial entities
- [[FIN_FISCAL_TIME_PERIODS]] — fiscal periods
- [[FIN_CURRENCIES]] — currencies (in production may also be `CMN_CURRENCIES`)

## FIN_FINANCIALS

> [!info] Purpose
> Per-investment row that holds financial properties (rates, processing flags, etc.). Bridges [[INV_INVESTMENTS]] to finance via [[ODF_OBJECT_INSTANCE_MAPPINGS]] (`Primary_Object_Instance_Code='project'` ↔ `Secondary_Object_Instance_Code='financials'`).

> [!example] Verified columns live in [[FIN_FINANCIALS]]

## FIN_PLANS

> [!info] Purpose
> Cost / benefit plan headers — one per plan, multiple per investment.

- **Primary key.** `ID`.
- Common columns: header has the investment FK, plan type code, plan-of-record flag, period range. **Verify on [[FIN_PLANS]]**.

## FIN_COST_PLAN_DETAILS / FIN_BENEFIT_PLAN_DETAILS

> [!info] Purpose
> Line items in a cost (or benefit) plan — one per dimension combo: charge code × role × department × etc. Period values are time-phased.

> [!example] Verified columns live in [[FIN_COST_PLAN_DETAILS]] and [[FIN_BENEFIT_PLAN_DETAILS]]

## FIN_TXNS

> [!info] Purpose
> Financial transactions. **Polymorphic on source table** — `TABLE_NAME` + `PK_ID` identify the source row (timesheet entry, expense line, etc.).

> [!example] Verified columns live in [[FIN_TXNS]]

### Keystone columns (16.4.1)

| Column | Notes |
| --- | --- |
| `ID` | PK |
| `PK_ID` | source row id |
| `TABLE_NAME` | source table name |
| `OBJECT_TYPE` | NVARCHAR — investment kind (`0`=ASSET, `1`=APPLICATION, `2`=PRODUCT, `3`=OTHER) |
| `OBJECT_ID` | investment id (joins to [[INV_INVESTMENTS]].`ID`) |
| `QUANTITY`, `QUANTITY_UNIT` | unit value |
| `RESOURCE_ID` | FK → [[PAC_MNT_RESOURCES]].`ID` |
| `TRANSACTION_TYPE` | `0`=LABOR, `1`=MATERIAL, `2`=EXPENSE, `3`=EQUIPMENT |
| `TIMEENTRY_ID` | FK → [[PRTIMEENTRY]] when source is a timesheet |
| `IS_PROCESSED` | `0`=Unposted, `1`=Posted |
| `TRANSACTION_DATE` | when |
| `SOURCE_MODULE` | XOG-specified source |
| `CREATED_*`, `LAST_UPDATED_*` | |

> [!warning] Drift from legacy KB on FIN_TXNS
> The legacy KB lists `INVESTMENT_ID`, `TASK_ID`, `CHARGECODE_ID`, `RATE`, `COST`, `BILLING_AMOUNT`, `STATUS` directly on this table. **None of those exist in 16.4.1 under those names.** Use `OBJECT_ID` + `OBJECT_TYPE` for investment, follow `TIMEENTRY_ID` to [[PRTIMEENTRY]] for the task association, and look at [[FIN_POSTED_TXN_VALUES]] for posted dimensional values (rate, cost, billing).

## FIN_POSTED_TXNS / FIN_POSTED_TXN_VALUES

> [!info] Purpose
> After the financial-posting job runs, transactions land in [[FIN_POSTED_TXNS]] (one row per posted transaction) with dimensional values in [[FIN_POSTED_TXN_VALUES]].

## PAC_MNT_PROJECTS

> [!info] Purpose
> Satellite project table used for financial processing. One row per investment.

> [!example] Verified columns live in [[PAC_MNT_PROJECTS]]

## PAC_MNT_RESOURCES

> [!info] Purpose
> Satellite resource table used for financial processing. One row per resource.

## Off-screen (legacy KB profiles)

### FIN_ENTITIES

- **Purpose.** Financial entities — top-level fiscal containers.
- **Primary key (legacy KB).** `ID`. Columns: `ENTITY_CODE`, `NAME`, `IS_ACTIVE`, `CURRENCY_CODE`. **Verify against environment.**

### FIN_FISCAL_TIME_PERIODS

- **Purpose.** Fiscal periods (months, quarters, years) per entity.
- **Primary key (legacy KB).** `ID`. Columns: `ENTITY_ID` → [[FIN_ENTITIES]].`ID`, `PERIOD_CODE`, `START_DATE`, `END_DATE`, `PERIOD_TYPE` (`MONTH` / `QUARTER` / `YEAR` / `WEEK`). **Verify.**

### FIN_CURRENCIES

- **Purpose.** Currency definitions.
- **Primary key.** `CODE`.
- **Note.** In some environments this is named `CMN_CURRENCIES`. Both [[FIN_CURRENCIES]] and `CMN_CURRENCIES` appear as off-screen in the 16.4.1 dump — verify the actual table name in your DB.

## Time-phased financial values

> [!important] Cost-plan period values are sliced
> The header / detail row stores a curve BLOB (column varies). The slicer (see [[Domain 04 - Time Timesheets and Slicing]]) decodes them into [[PRJ_BLB_SLICES]] (or specialized `PRJ_BLB_SLICES_*`) under finance-specific `SLICE_REQUEST_ID`s. Use the right slice request to read time-phased plan values rather than scanning curve BLOBs.

## Gotchas

> [!warning] "Plan of Record" is the budget
> Multiple "scenarios" can coexist (`IS_PLAN_OF_RECORD = 0`). For accepted cost figures, filter `IS_PLAN_OF_RECORD = 1` and the latest baseline.

> [!warning] Cost-plan dimensions vary per entity
> Queries against `FIN_*` plan tables need to know which dimensions are enabled in your environment.

> [!warning] FIN_TXNS is polymorphic
> Always filter `TABLE_NAME` (and / or `OBJECT_TYPE`) to scope to the source kind you care about.

## See also
- [[Domain 04 - Time Timesheets and Slicing]] — time-phased decoding
- [[Domain 01 - Investments and Projects]] — `OBJECT_ID` joins to [[INV_INVESTMENTS]]
- [[Domain 08 - Custom Objects and ODF]] — investment ↔ financials bridge via [[ODF_OBJECT_INSTANCE_MAPPINGS]]
- [[Common Joins Cheat-Sheet]]
- [[_MOC - Curated SQL Knowledge]]
