---
title: Conventions and FK Patterns
type: reference
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - reference
---

# Conventions and FK Patterns

Hard-won rules for reading the Clarity PPM schema and writing correct SQL against it.

## Naming prefixes

Tables in Clarity follow strict prefix conventions. Use the prefix to know which subject area a table belongs to.

| Prefix | Subject area | Notes |
| --- | --- | --- |
| `INV_` | Investments | Master table is [[INV_INVESTMENTS]]; sub-type tables join via `ID`. |
| `PR` (no underscore) | Legacy "Niku" Open Workbench tables | Columns prefixed `pr*` (e.g. `prID`, `prProjectID`). Joins commonly use `prID` ↔ `ID`. |
| `PRJ_` | Project subsystem | Baselines, OBS, EV history, time slices, dependencies. |
| `PRTASK`, `PRTEAM`, `PRASSIGNMENT` | Work breakdown | Tasks, team members, assignments. |
| `RSM_` | Resource Staffing Manager | Skills, requisitions. |
| `SRM_` | Staffing/Resource Master | [[SRM_RESOURCES]], [[SRM_PROJECTS]], [[SRM_COMPANIES]]. |
| `CMN_` | Common (security, lookups, audits, currencies, languages, partitions) | Off-screen in this vault — see [[_MOC - Database Schema]] for stubs. |
| `ODF_` | On-Demand Framework (Studio) | Custom objects, custom attributes, object-instance mappings. |
| `FIN_` | Financial Management | Plans, transactions, financial properties. |
| `PFM_` | Portfolio Management | Portfolios, scenarios, plans. |
| `CBK_` | Chargebacks | GL allocations, GL transactions, invoices. |
| `PPA_` | Project & Portfolio Accounting | WIP, billings, posting batches, transcontrol. |
| `PAC_` | PMO Accelerator / Classic accounting | Forecasts, MNT (maintenance) tables, batches. |
| `CLB_` | Collaboration | DMS files/folders, notifications, search index. |
| `CMS_` | Content Management Studio | Content packages, add-ins. |
| `CAL_` | Calendar / Action Items | Action items, events, invitees. |
| `CAP_` | Capacity Planning | Scenarios, scenario membership. |
| `NMC_` | Modern Conversations / Channels | Messages, conversations, channels, participants. |
| `NTD_` | (Legacy) Discussions | Topics, messages, categories. |
| `NBI_` | Datamart / BI | Fact and dimension tables, snapshot summaries. |
| `RDM_` | Roadmaps | Roadmaps, roadmap items, picklists. |
| `BLP_` | Blueprints | Visuals, external apps. |
| `BRM_` | Business Rule Management | Rules, conditions, actions. |
| `BPM_` | Business Process Management | Workflow runs (off-screen). |
| `RIM_` | Risks / Issues / Mitigations | ITIL subject area. |
| `IMM_` | Incident Management | ITIL subject area. |
| `ITL_` | ITIL associations |  |
| `MSP*` | MS Project import staging | `MSPPROJECT`, `MSPTASK`, `MSPASSIGNMENT`, etc. |
| `MR*` | Methodology / Work Plans (legacy) | `MRTASK`, `MRESTMODEL`, `MRPACKAGE`. |
| `OLB_`, `BB_`, `BGT_`, `INVOICEHEADER*` | Billing/invoicing |  |
| `DPT_` | Department subscriptions / metrics |  |
| `DWH_` | Data warehouse staging metadata |  |
| `IMP_` | Transaction import staging | `IMP_TRANSACTIONIMPORT`, `IMP_TRANSACTIONIMPORTERRORS`. |
| `INT_` | Integration / external mapping tables |  |
| `LOG_` | Logging / report runs |  |
| `OBA_` | Objectives / OBA todos |  |
| `OMP_`, `OSF_` | Onboarding / object-system feature tables |  |
| `EVM_` | Earned-value / Period definitions |  |
| `ESC_` | Escalation rules and runs |  |

## Investment subtype pattern

`INV_INVESTMENTS` is the master / supertype. Every concrete investment kind has its own table that joins on `ID`:

| Object | Concrete table | `ODF_OBJECT_CODE` value |
| --- | --- | --- |
| Project | [[INV_PROJECTS]] (legacy: also row in `PAC_MNT_PROJECTS`) | `project` |
| Idea | [[INV_IDEAS]] | `idea` |
| Application | [[INV_APPLICATIONS]] | `application` |
| Asset | [[INV_ASSETS]] | `asset` |
| Product | [[INV_PRODUCTS]] | `product` |
| Service | [[INV_SERVICES]] | `service` |
| Other Work | [[INV_OTHERS]] | `other` |

`INV_PROJECTS.PRID = INV_INVESTMENTS.ID` and the same `prID = ID` pattern holds for the other sub-tables.

## prID ↔ ID join pattern

Almost every "PR-prefixed" table (PRTASK, PRTEAM, PRASSIGNMENT, PRTIMESHEET, …) has a `prID` primary key column. When another PR-table FKs to it, the column is named `prSomethingID` and joins to `prID`. When a non-PR table FKs to it, the column is named `<Something>_ID` and still joins to the PR table's `prID`.

```sql
-- Tasks for a project
select t.PRNAME, t.PRSTART, t.PRFINISH
  from PRTASK t
  join INV_PROJECTS p on p.PRID = t.PRPROJECTID
  join INV_INVESTMENTS i on i.ID = p.PRID
 where i.NAME = 'My Project';
```

## Polymorphic FK patterns

Several tables FK to "anything" via a discriminator column. **Always include the discriminator in the join clause** — the same `ID` value can collide between unrelated parent tables.

### `Object_Code` / `Object_ID`

Used by:
- [[CMN_AUDITS]] (off-screen) — discriminator is `Object_Code`. The placeholder "XYZ" in the ERD means *any object table*.
- [[ODF_OBJECT_INSTANCE_MAPPINGS]] — `Primary_Object_Instance_Code` / `Secondary_Object_Instance_Code` discriminate which side is which (e.g. `project` ↔ `financials`).
- [[CAL_ACTION_ITEMS]] — `Object_ID` and `Sub_Object_ID` reference [[INV_INVESTMENTS]] (no `Object_Type` column there because it's always investments).

### `Object_Type` (PRJ_EV_HISTORY, PRJ_BASELINE_DETAILS, RSM_REQ_REQUISITIONS)

`Object_Type` takes values like `PROJECT`, `IDEA`, `APPLICATION`, `ASSET`, `PRODUCT`, `OTHER`, `SERVICE`, `TASK`, `TEAM`, `ASSIGNMENT`, `RESOURCE`, `RISK`, `INCIDENT`. The `Object_ID` column then resolves to the correct table:

| `Object_Type` | Resolves to |
| --- | --- |
| `PROJECT` / `IDEA` / `APPLICATION` / `ASSET` / `PRODUCT` / `OTHER` / `SERVICE` | [[INV_INVESTMENTS]] (.ID) |
| `TASK` | [[PRTASK]] (.prID) |
| `TEAM` | [[PRTEAM]] (.prID) |
| `ASSIGNMENT` | [[PRASSIGNMENT]] (.prID) |
| `RESOURCE` | [[SRM_RESOURCES]] (.ID) |
| `RISK` | [[RIM_RISKS_AND_ISSUES]] (.ID) |
| `INCIDENT` | [[IMM_INCIDENTS]] (.ID) |

### `Table_Name` + `PK_ID` / `Record_ID`

Used by [[PRJ_OBS_ASSOCIATIONS]] (`Table_Name` = name of the target table such as `PRTask`, `SRM_Resources`, `SRM_Projects`) and by [[ITL_OBJECT_ASSOCIATIONS]] (`Table_Name = 'PRTASK'` etc.). The `Record_ID` / `Pk_ID` is the primary key of the referenced row.

### `PRTableName` + `prRecordID`

Used by [[PRNOTE]] and [[PRLINK]]. `PRTableName` ∈ { `PRProject`, `PRTask`, `PRResource`, `PRTimeSheet`, `PRTimeEntry`, `SRM_Projects`, `SRM_Resources`, `SRM_COMAPNIES` (sic — typo in the ERD) }.

### `Principal_Type` / `Principal_Id`

Used by [[CMN_PARTITION_MEMBERS]] (off-screen), notification associations, etc. `Principal_Type` ∈ { `User`, `Group`, `OBS` }.

## Custom attributes (Studio / ODF)

Every Clarity object that supports custom attributes has a sibling table named `ODF_CA_<object_code>`. These tables have one row per object instance (`ID` joins back to the master) and one column per custom attribute defined in Studio.

Examples:
- `ODF_CA_PROJECT.ID = INV_PROJECTS.PRID = INV_INVESTMENTS.ID`
- `ODF_CA_IDEA.ID = INV_IDEAS.ID`
- `ODF_CA_INV.ID = INV_INVESTMENTS.ID` (custom attributes defined on the abstract Investment object)

For multi-valued lookups, see `ODF_MULTI_VALUED_LOOKUPS` (off-screen) — keyed by `pk_id` (= the row in `ODF_CA_<object>`), `attribute_code`, and one row per selected value.

## Time-sliced fact tables

`PRJ_BLB_SLICES_*` and the matching daily/weekly/monthly variants store per-period (D = daily, W = weekly, M = monthly) time-phased data for actuals, allocations, ETC, baselines, capacity, etc. Joining recipe:

```sql
-- Per-day actuals on an assignment
select s.SLICE_DATE, s.SLICE
  from PRJ_BLB_SLICES_D_ACT s
  join PRJ_BLB_SLICES r on r.ID = s.SLICE_REQUEST_ID
 where r.PRJ_OBJECT_ID = :prAssignmentID;
```

`SLICE_REQUEST_ID` joins to [[PRJ_BLB_SLICES]] (a control table). `PRJ_OBJECT_ID` is the prID of the underlying object (assignment, team, task, baseline detail, resource).

## Datamart (NBI_*) is the read model

The `NBI_*` tables are denormalized snapshot/fact tables produced by Datamart jobs. For ad-hoc reporting, it is usually cheaper to read from `NBI_*` than to recompute from the OLTP tables. See [[_MOC - Datamart ERD]].

## Currency, language, lookups (off-screen but ubiquitous)

These tables don't appear in the 16.4.1 dump but are joined constantly:

- `CMN_CURRENCIES.CURRENCY_CODE` — joined from `INV_INVESTMENTS.CURRENCY_CODE`, `FIN_PLANS`, `FIN_TXNS`, etc.
- `CMN_EXCHANGE_RATES` — `From_Currency_Code` / `To_Currency_Code` for FX conversions.
- `CMN_LANGUAGES.LANGUAGE_CODE` — joined from `CMN_CAPTIONS_NLS` and any NLS table.
- `CMN_LOOKUPS.ID` — joined from any column that ends with `_CODE` or stores a lookup value (`STATUS_INDICATOR`, `GOAL_CODE`, `STAGE_CODE`, etc.). The discriminator is `Lookup_Type` on `CMN_LOOKUPS`, which lines up with the lookup-type code documented in column comments.

## Bitwise / TSV columns

Columns ending in `_TSV` (Time-Sliced Vector) hold a binary-encoded time series. Treat as opaque — read from the corresponding `PRJ_BLB_SLICES_*` instead. Most of `INV_INVESTMENTS.AGGR_*_TSV` columns are marked obsolete in the 16.4.1 dump.
