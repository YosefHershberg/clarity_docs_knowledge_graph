---
title: Version Notes
type: reference
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - reference
  - version
---

# Version Notes

Notes on the schema versions that this vault is built from, and the deltas you will hit while writing SQL.

## Sources

| Source | Version | Coverage | Use it for |
| --- | --- | --- | --- |
| Broadcom ERD set (`ccppmod156`) | **15.6** | 33 subject-area diagrams | Relationship graph, subject-area grouping |
| MSSQL Niku schema dump | **16.4.1** (current) | 569 tables with column/type/comment | Column-level metadata, FK extraction |
| Previous Niku dump | 16.1.1 (replaced) | 538 tables | n/a — fully superseded by 16.4.1 |

The 16.4.1 dump is the file the vault is regenerated from. The 16.1.1 dump is no longer used.

## 16.1.1 → 16.4.1 delta

**526 tables in both** dumps · **43 tables added** in 16.4.1 · **12 tables removed** from 16.1.1.

### New in 16.4.1 (43 tables)

> [!info] These are the tables that did not exist in 16.1.1. They reflect features added between Clarity 16.1.1 and 16.4.1.

#### Vaia AI / GenAI feature pack

- [[GEN_AI_MODELS]] — registered AI model definitions
- [[GEN_AI_PROMPTS]] — prompt templates
- [[GEN_AI_TEMPLATES]] — content templates
- [[GEN_ARTIFACTS_CONFIG]] — artifact configuration
- [[GEN_ARTIFACTS_METADATA]] — artifact metadata
- [[GEN_ATTR_CONFIG]] — attribute configuration for AI
- [[GEN_CONTENTS_LOGS]] — generation logs
- [[GEN_CONTENT_HISTORY]] — generation history

#### OKR (Objectives and Key Results)

- [[OKR_OBJECTIVES]] — objectives with hierarchy, owner, schedule, confidence
- [[OKR_KEY_RESULTS]] — key results
- [[OKR_TARGET_VALUES]] — target value time series
- [[OKR_ACTUAL_VALUES]] — actual value time series

#### Snapshot framework

A new generic snapshot subsystem captures point-in-time state for several entities.

- [[SNAPSHOT_VERSIONS]] — snapshot version registry (root)
- [[INV_INVESTMENT_SNAPSHOTS]]
- [[PRJ_RESOURCE_SNAPSHOTS]]
- [[PRTEAM_SNAPSHOTS]]
- [[SRM_RESOURCE_SNAPSHOTS]]
- [[PAC_MNT_RESOURCE_SNAPSHOTS]]

#### Work plans (replaces / extends Roadmaps OBS pivots)

- [[WORK_PLAN_CONFIGURATIONS]]
- [[WORK_PLAN_CONFIG_LIST_ELEMENTS]]
- [[WORK_PLAN_OBS_INVESTMENTS]]
- [[WORK_PLAN_OBS_STAFFS]]
- [[WORK_PLAN_OBS_UNITS]]

#### Integration / external system mapping

- [[INT_EXT_PFM_ITEMS]] — external portfolio items
- [[INT_EXT_PROJECTS]] — external projects (Rally / Agile Central / Jira mapping)
- [[INT_FRICTIONLESS_ACCT_MAPS]] — frictionless account maps

#### Object groups (cross-entity grouping)

- [[OBJECT_GROUPS]]
- [[OBJECT_GROUP_ITEMS]]

#### Orphan deletion framework (replaces `DEL_ORPHAN_*`)

- [[ORPHAN_DEL_RECORDS_CONF]] — config
- [[ORPHAN_DEL_RECORDS_LIST]] — work list
- [[ORPHAN_DEL_RECORDS_LOG]] — execution log

#### Misc

- [[BLP_BLUEPRINT_VISUAL_CONFIGS]] — blueprint visual configs
- [[CAP_SCENARIO_RESOURCES]] — capacity-scenario named resources
- [[DPR_DATA_PROVIDER]] — Data Provider registry (Report Designer)
- [[DWH_ATTR_METADATA]] — DWH attribute metadata
- [[EXT_INT_TIMESHEET_DATA_LOGS]] — external timesheet integration logs
- [[FIN_WORKTYPE_TASK_MAP]] — work-type → task mapping for financial transactions
- [[NMC_ADMIN_QUERIES]] — Modern UX admin queries
- [[NMC_ADMIN_QUERY_METADATA]]
- [[NMC_CALC_FUNCTIONS]] — calculated-function registry
- [[NMC_SECTIONS]] — Modern UX sections
- [[PPA_GETRATE_WITHROLE_NEW_TBL]] — replacement getRate-with-role lookup
- [[PRJ_RESOURCES_AGGR]] — aggregated resource view (read model)

### Removed in 16.4.1 (12 tables)

These were upgrade-leftover backup tables (`ZZ_*`) and the older orphan-cleanup tables (`DEL_ORPHAN_*`) replaced by `ORPHAN_DEL_RECORDS_*`. Their notes were deleted from this vault.

- ZZ_BRCM_1593_BPM_DEF_OBJECTS_BKP
- ZZ_BRCM_1593_BPM_RUN_OBJECTS_BKP
- ZZ_BRCM_1593_ODF_FILTER_EXPRESSIONS_BKP
- ZZ_BRCM_BPM_DEF_OBJECTS_BKP
- ZZ_BRCM_BPM_RUN_OBJECTS_BKP
- ZZ_BRCM_ODF_FILTER_EXPRESSIONS_BKP
- ZZ_PRTASK_POST_UPG_TRG_BKP_DDL
- ZZ_REM_ADD_GLOB_NAV_RIGHT
- ZZ_REM_ADD_GLOB_NAV_RIGHT_LOG
- DEL_ORPHAN_ASSGND_OBJ_PERM
- DEL_ORPHAN_ASSGND_OBJ_PERM_LOG
- DEL_ORPHAN_OBJ_PERM_CONF

> [!warning] Backup tables may still exist in older deployments
> If your target environment was upgraded from a pre-16.4 version recently, these backup tables can still be present in the database. They are not part of the canonical schema — do not rely on them for SQL.

## ERD vs dump version mismatch (15.6 ERDs ↔ 16.4.1 dump)

The 33 ERDs were published for ccppmod156 (Clarity 15.6) and have not been re-published for the 16.x line. Most relationships are stable, but you will hit the following when reading:

### 1. ERD-only stub tables (10)

Tables that appear in ERDs but are not in the 16.4.1 dump. Each has a `db-table-stub` note in this vault. They exist in production but column-level metadata must be confirmed via `information_schema.columns` against the live database.

### 2. Post-15.6 dump-only tables

Most of the 569 tables in 16.4.1 do **not** appear in any ERD because they were added after 15.6 (notable prefixes: `RDM_`, `NMC_`, `BLP_`, `BRM_`, `OBA_`, `RQP_`, `API_`, `PFM_*` extensions, `PRJ_BLB_SLICES_*`, `INT_`, `DWH_`, `OKR_`, `GEN_AI_*`, `WORK_PLAN_*`, `*_SNAPSHOTS`). The per-table notes in this vault still document them — they just have no "Subject areas (ERDs)" section. Use [[Tables Index]] or [[Conventions and FK Patterns]] (naming-prefix table) to find them.

### 3. Stale comment renames

Some column comments in the 16.4.1 dump still reference table names that have since been renamed. Known cases:

| Old name (in comment) | Current name |
| --- | --- |
| `PMA_IDEAS` | [[INV_IDEAS]] |
| `PRRESOURCE` | [[PRJ_RESOURCES]] |
| `SRM_RESOURCE` | [[SRM_RESOURCES]] |
| `PRTASKS` | [[PRTASK]] |
| `PRJ_OBS_TYPE` | [[PRJ_OBS_TYPES]] |
| `ENTITIES` | [[ENTITY]] |
| `TAXMETHOD` | [[TAX_METHOD]] |

When following a wikilink and finding nothing, try the current name from this table.

## How to refresh this vault

The generator script is at `C:\Users\yosefh\AppData\Local\Temp\build_db_schema_vault.py`. It is idempotent — re-run it after replacing the source dump. To target a future version, change the `SRC` constant at the top of the script.

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[Conventions and FK Patterns]] — naming prefixes, polymorphic FKs
- [[Joining Recipes]] — common SQL patterns
- [[Tables Index]] — alphabetical list of all 579 tables (incl. stubs)
