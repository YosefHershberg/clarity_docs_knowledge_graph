---
title: Data Warehouse Schema and Optimization
aliases: [DWH Schema, Database Schema, Schema Optimization]
tags: [admin, reference, dev]
---

# Data Warehouse Schema and Optimization


The Clarity Data Warehouse (DWH) uses a purpose-built relational schema optimized for reporting and analytics.
It is separate from the Classic PPM transactional database and is populated by ETL jobs on a scheduled basis.
Understanding the schema conventions and performance guidelines is essential for report developers, administrators, and anyone writing custom SQL reports against the DWH.

---

## Schema Overview


The DWH schema covers the following major data areas:

- Investment management (projects, applications, ideas, custom investments)
- Resource management (resources, assignments, staffing)
- Portfolio management
- Financial management (cost plans, budget plans, benefit plans, transactions)
- Time management (timesheets, time entries)
- Roadmap planning
- Organizational Breakdown Structures (OBS)

> [!NOTE]
> Schema information, ERD diagrams, and domain field descriptions are available on the **Advanced Reporting and Database Schema Index** page in the Broadcom documentation portal. Download from there for complete column-level detail.

---

## Table Naming Conventions


All DWH tables follow a consistent prefix-based naming convention. The prefix identifies the functional domain of the table:

| Prefix | Domain |
|--------|--------|
| `DWH_CFG` | Configuration — log and audit information |
| `DWH_CMN` | Common — objects used across most areas |
| `DWH_CMP` | Company database objects |
| `DWH_FIN` | Financial management |
| `DWH_INV` | Investment management |
| `DWH_LKP` | Lookup tables |
| `DWH_META` | Metadata — describes the DWH structure itself |
| `DWH_ODF` | Customer-specific / custom objects |
| `DWH_PFM` | Portfolio management |
| `DWH_RDM` | Roadmap data |
| `DWH_RES` | Resource management |
| `DWH_RIM` | Risk and Issue management |
| `DWH_TME` | Time management |
| `DWH_TRD` | Trending data |
| `DWH_X` | Internal tables used to populate fact tables (not available to users) |

> [!TIP]
> Tables with `DWH_X_` in the name are internal staging tables. They are not exposed to report developers and should not be queried directly.

---

## Lookup Table Standards


### Static Lookups


Each static lookup in Clarity has its own table in the DWH. Lookup values are stored per language, so if the DWH is configured for English and Spanish, each lookup value has two rows.

Standard columns on a static lookup table:

| Column | Data Type | Description |
|--------|-----------|-------------|
| `[LOOKUP_NAME]_key` | number or varchar(30) | Key value of the lookup (maps to `lookup_enum` or `lookup_code` in Classic PPM) |
| `LANGUAGE_CODE_KEY` | number | ID from the Classic PPM languages table |
| `LANGUAGE_CODE` | varchar(30) | Unique language code |
| `[LOOKUP_NAME]` | varchar(255) | Descriptive name of the lookup value |
| `SORT_ORDER` | number | Display sort order |
| `IS_ACTIVE` | number | Whether the lookup value is currently active |
| `CLARITY_UPDATED_DATE` | date | Last update timestamp in Classic PPM |
| `DW_UPDATED_DATE` | date | Last update timestamp in the Data Warehouse |

### Dynamic Lookups


Dynamic lookups follow a similar structure but the schema can vary per lookup. If language-dependent, `language_code_key` and `language_code` columns are present. Each table also carries miscellaneous columns specific to that lookup.

---

## Fact Table Conventions


Fact tables follow these naming and structural rules:

- Names end with the suffix `_FACTS`
- Tables with `_PERIOD_` in the name store facts by defined time periods
- Tables with `_SUMMARY_` in the name store aggregated/summarized facts
- Internal (`DWH_X_`) fact tables are used as staging; they are not user-accessible

### Period Types


Facts are stored across four period types:

| Period Type | Description |
|-------------|-------------|
| Daily | Day-level granularity |
| Weekly | Week-level granularity |
| Monthly | Calendar month granularity |
| Fiscal Period | Fiscal calendar granularity (based on the entity set in DWH configuration) |

### Key Fact Tables


| Fact Table | Description | Aggregation |
|------------|-------------|-------------|
| `DWH_FIN_TRANSACTION_FACTS` | Financial transactions | Daily |
| `DWH_TME_ENTRY_FACTS` | Time entries | Daily |
| `DWH_FIN_BENEFIT_PERIOD_FACTS` | Financial benefit by period | Fiscal |
| `DWH_FIN_PLAN_PERIOD_FACTS` | Financial plan by period | Fiscal |
| `DWH_INV_ASSIGN_PERIOD_FACTS` | Task assignments by period | Fiscal, Weekly, Monthly |
| `DWH_INV_TASK_PERIOD_FACTS` | Investment tasks by period | Fiscal, Weekly, Monthly |
| `DWH_INV_TEAM_PERIOD_FACTS` | Investment team by period | Fiscal, Weekly, Monthly |
| `DWH_INV_PERIOD_FACTS` | Investment-level facts by period | Fiscal, Weekly, Monthly |
| `DWH_RES_PERIOD_FACTS` | Resource facts by period | Fiscal, Weekly, Monthly |

### Key Summary Fact Tables


Summary tables aggregate data without period dimension. Use these for totals and rollups:

| Summary Table | Description |
|---------------|-------------|
| `DWH_FIN_BENEFIT_SUMMARY_FACTS` | Financial benefit totals |
| `DWH_FIN_PLAN_SUMMARY_FACTS` | Financial plan totals |
| `DWH_INV_ASSIGN_SUMMARY_FACTS` | Assignment totals |
| `DWH_INV_TASK_SUMMARY_FACTS` | Task totals |
| `DWH_INV_TEAM_SUMMARY_FACTS` | Team totals |
| `DWH_INV_SUMMARY_FACTS` | Investment totals |

> [!WARNING]
> When matching summary numbers to period facts, qualify the period facts by a period type. Summary rollups exist in the DWH — assignments roll up to tasks, and tasks roll up to investments.

---

## Task Board Tables (Release 15.4+)


Beginning with Release 15.4, the DWH includes task board tables for reporting on tasks, phases, and milestones:

| Table | Description |
|-------|-------------|
| `DWH_INV_BOARD` | One row per task board. Includes a relationship back to the linked parent object. |
| `DWH_INV_BOARD_LANE` | One row per lane (column) on the board. Stores lane level, position, and orientation. |
| `DWH_INV_BOARD_CARD` | One row per task card. Stores card color, position, and sequence. The Task Owner field also appears in `DWH_INV_TASK`. |

---

## Roadmap Tables (Release 15.4+)


Thirteen new tables were added in Release 15.4 to support Roadmapping:

| Table | Description |
|-------|-------------|
| `DWH_CMN_SCENARIO` | One row per scenario |
| `DWH_CMN_SCENARIO_FACTS` | Summary-level facts; one row per fact type per scenario target or goal |
| `DWH_RDM_ROADMAP` | One row per roadmap |
| `DWH_RDM_ROADMAP_LN` | One row per roadmap per language |
| `DWH_RDM_PICKLIST` | One row per value in a roadmap picklist |
| `DWH_RDM_PICKLIST_LN` | One row per roadmap picklist value per language |
| `DWH_RDM_ROADMAP_ITEM` | One row per roadmap item |
| `DWH_RDM_ROADMAP_ITEM_LN` | One row per roadmap item per language |
| `DWH_RDM_ITEM_SUMMARY_FACTS` | Summary-level facts; one row per roadmap item |
| `DWH_RDM_ITEM_POSITION` | Picklist values, selected values, and positions per roadmap item |
| `DWH_LKP_ROADMAP_STATUS` | Lookup: roadmap status, one row per status per language |
| `DWH_LKP_ROADMAP_TYPE` | Lookup: roadmap type, one row per type per language |
| `DWH_LKP_RDM_MUST_HAVE` | Lookup: roadmap must-haves, one row per value per language |

Calculated attributes also added for the Roadmap Item object:

- Remaining Capacity = Capacity − Actual Capacity
- Remaining Capital Cost = Capital Cost − Actual Capital Cost
- Remaining Operating Cost = Operating Cost − Actual Operating Cost
- Total Actual Cost = Actual Capital Cost + Actual Operating Cost
- Total Cost = Capital Cost + Operating Cost
- Total Remaining Cost = Total Cost − Total Actual Cost

---

## Resource Team Tables (Release 15.5.1+)


Two tables were added in Release 15.5.1 for the Team object:

| Table | Description |
|-------|-------------|
| `DWH_INV_TEAM_DEF` | Team definition |
| `DWH_INV_TEAM_MEMBER` | Team member records |

Two new columns were also added to `DWH_RES_RESOURCE`:

- `TEAM_DEF_KEY` — foreign key to the team definition
- `IS_TEAM` — flag indicating whether the resource is a team resource

---

## Referential Integrity


The DWH schema enforces referential integrity through primary and foreign keys:

- Language tables (ending in `_LN`) have foreign keys to their master table
- Fact tables have foreign keys to dimension/master tables
- Foreign key constraints follow the naming convention `FK1`
- Primary key constraints follow the naming convention `PK`

When a master record is deleted, child records in related tables are automatically deleted (cascade delete). This design eliminates orphan records and improves data accuracy.

---

## Schema Tables for Monitoring and Diagnostics


| Table / View | Purpose |
|--------------|---------|
| `DWH_RUN_STATUS_V` | Monitor Load Data Warehouse job status (`COMPLETED_FLAG = 1` means complete) |
| `DWH_GATHER_METRICS_V` | View row counts and load times per table for the last run |
| `DWH_CFG_SETTINGS` | Configuration settings, including `IS_SYNC_IN_DEBUG_MODE` for Instantaneous Sync debug logging |
| `DWH_SYNC_DEBUG_MESSAGE` | Debug log entries for Instantaneous Sync (when debug mode is enabled) |
| `DWH_ODF_INST_CHANGES` | Records instance-level data changes tracked for Instantaneous Sync |
| `DWH_ODF_SCHEMA_CHANGES` | Records schema-level changes tracked for Instantaneous Sync |
| `DWH_ODF_INST_CHANGES_ARCHIVE` | Archived processed sync records (prevents data overflow) |
| `DWH_META_COLUMNS` | Metadata about DWH columns; useful when troubleshooting missing views or tables |
| `DWH_META_TABLES` | Metadata about DWH tables |

### Useful Monitoring Queries


**Check load job completion status:**
```sql
SELECT TABLE_NAME, TABLE_TYPE, COMPLETED_FLAG, POPULATION_TIME_SEC,
       DW_LOAD_START_DATE, DW_LOAD_END_DATE
FROM DWH_RUN_STATUS_V
```

**View row counts and load times per table:**
```sql
SELECT TABLE_NAME, RECORD_COUNT, POPULATION_TIME_SEC
FROM DWH_GATHER_METRICS_V
WHERE TABLE_NAME NOT IN (
  'DWH_CFG_LOG','DWH_CFG_TABLE_AUDIT','DWH_FK_PK_EXCEPTIONS',
  'DWH_META_COLUMNS','DWH_META_INDEXES','DWH_META_TABLES'
)
ORDER BY TABLE_NAME
```

**Check app and DWH version match (before rebuild):**
```sql
SELECT * FROM cmn_install_history ORDER BY installed_date DESC
SELECT * FROM cmn_dwh_install_history ORDER BY installed_date DESC
```

---

## Sample Query Pattern


DWH queries are simpler than Classic PPM transactional queries. No complex lookup joins are needed — lookup tables are pre-joined and consistent. Example team allocation query:

```sql
SELECT i.investment_manager, i.investment_name,
       t.resource_name, t.role_name,
       tl.booking_status, tl.request_status,
       p.period_start_date,
       tf.alloc_hours, tf.alloc_cost
FROM dwh_inv_team t
  INNER JOIN dwh_inv_team_ln tl    ON t.team_key      = tl.team_key
  INNER JOIN dwh_inv_investment i  ON t.investment_key = i.investment_key
  INNER JOIN dwh_inv_team_period_facts tf ON t.team_key = tf.team_key
  INNER JOIN dwh_cmn_period p      ON tf.period_key    = p.period_key
WHERE SYSDATE BETWEEN p.year_start_date AND p.year_end_date
  AND p.period_type_key = 'MONTHLY'
  AND tl.language_code = 'en'
```

Key advantages of this pattern:
- No lookup table joins required — lookups are pre-joined in dimension tables
- Consistent join key (`_KEY` columns) across all tables
- Consistent column naming conventions across the schema

---

## Physical Storage (On-Premise CSA Settings)


On-premise deployments configure separate tablespaces for DWH objects in the **Clarity System Administration (CSA)** application under the **Data Warehouse** subtab:

| Field | Default Value | Purpose |
|-------|---------------|---------|
| **Dimension Table Tablespace** | `DWH_PPM_DATA_DIM` | Storage for dimension tables |
| **Fact Table Tablespace** | `DWH_PPM_DATA_FACT` | Storage for fact tables |
| **Dimension Index Tablespace** | `DWH_PPM_INDX_DIM` | Storage for dimension indexes |
| **Fact Index Tablespace** | `DWH_PPM_INDX_FACT` | Storage for fact indexes |

Separating data and index tablespaces on different physical storage improves I/O performance during ETL loads and reporting queries.

---

## Performance Optimization


### ETL Job Scheduling


> [!IMPORTANT]
> The **Load Data Warehouse** job determines the freshness of DWH data. Running it too frequently impacts performance; running it too infrequently yields stale data. Broadcom recommends **once daily during non-peak hours**.

The five DWH jobs and their scheduling recommendations:

| Job | Recommendation |
|-----|---------------|
| **Load Data Warehouse** | Daily, off-peak. Full Load after any schema or config change. |
| **Load Data Warehouse Access Rights** | Daily. Must continue even when Instantaneous Sync is enabled — sync does not cover security. |
| **Create Data Warehouse Trend** | Run once when creating a new trend definition. |
| **Update Data Warehouse Trend** | Schedule regularly to keep trend snapshots current. |
| **Delete Data Warehouse Trend** | Run as needed to purge old snapshots and control storage growth. |

### Instantaneous Sync


**Instantaneous Sync** (enabled in **Administration > System Options > Data Warehouse Options**) provides near real-time synchronization for most object changes, reducing reliance on scheduled full/incremental loads.

Key points:
- Updates SQL Curve tables only — **fact tables are not updated** and still require the Load Data Warehouse job
- Runs as part of Clarity Background Services (BG); PPM Broker is not required
- Requires a DB link between Clarity and the DWH schema (`admin db create-db-link`)
- A Full Load must be run at least once before enabling sync

> [!WARNING]
> Instantaneous Sync is mutually incompatible with the Load Data Warehouse job (managed automatically by the system). Both the full and incremental load jobs should still be scheduled as before.

### Enable Plan Actuals Toggle


The **Enable Plan Actuals** toggle improves DWH load performance when the `DWH_X_PLAN_ACT_PER_FACTS` table becomes slow, locked, or bloated.

Toggle ON:
```sql
UPDATE dwh_settings SET enable_plan_actuals = 1;
```

Toggle OFF (reverts to fiscal time slice behavior):
```sql
UPDATE dwh_settings SET enable_plan_actuals = 0;
```

> [!NOTE]
> The Enable Plan Actuals toggle is supported on Oracle and PostgreSQL only. MS SQL does not support this feature.

### Period Data Configuration


Reduce DWH size and ETL processing time by enabling only the period granularities your organization needs:

| Option | Effect when enabled |
|--------|---------------------|
| **Include Weekly Period Data** | Facts loaded in weekly increments |
| **Include Monthly Period Data** | Facts loaded in monthly increments |
| **Include Fiscal Period Data** | Facts loaded in fiscal time periods |
| **Include Only Financial Plan of Record** | Only current budget plan and cost plan of record included (reduces storage and load time) |
| **Include SQL Curve Data** | Enables SQL Curve tables for per-period metrics in Object-based Data Providers; required for Instantaneous Sync |

> [!TIP]
> Leave **Consistent Fiscal Periods Across Entities** unchecked unless you experience specific performance issues with the Load Data Warehouse job.

### Time Slice Ranges


Time slices control what date ranges exist for DWH fact tables. Default ranges:

| Period Type | Default Range |
|-------------|---------------|
| Daily | 1 year back and forward |
| Weekly | 1 year back and forward |
| Monthly | 3 years back and forward |
| Fiscal | 3 years back and forward |

> [!WARNING]
> If you need a large timeframe, be aware that the Time Slicing job will take longer and you may experience performance issues. Always set the From Date and Number of Periods consistently across all slice requests of the same period type.

### Report Development Best Practices


For custom reports written directly against the DWH:

- **Write SQL, not domain-based reports.** Jaspersoft domain-based reports can severely impact performance. Use direct SQL against the DWH data source.
- **Prefer the DWH over the transactional database.** The DWH schema is optimized for reporting. Only query the PPM transactional database if the required data is not available in the DWH.
- **Do not mix period types in the same query.** Use calendar period measures with calendar period fields, fiscal measures with fiscal fields, weekly measures with weekly fields. Mixing period types produces unexpected results (data repeats per period type).
- **Do not mix financial transaction and financial plan data.** These exist at different granularity levels and do not have a direct relationship. Keep them in separate views.
- **Filter OBS data.** Always filter for a specific OBS type when selecting OBS information. Without filtering, duplicate results appear because resources and investments are frequently attached to multiple OBS types.
- **Limit ad hoc view field selection.** Select only the fields you need — selecting all domain fields degrades query performance significantly.
- **Use No Data or Sample Data mode** when building ad hoc views, then switch to Full Data mode only when the view is complete.
- **Limit crosstab views** — crosstabs with aggregations run slower than table or chart views. Keep crosstabs as small as possible.

### Ad Hoc View Domain Parameters


Built-in parameters available for use in custom Jaspersoft Studio SQL reports:

| Parameter | Description |
|-----------|-------------|
| `ppmDBSchema` | Classic PPM transactional database schema name |
| `ppmDBVendor` | PPM database vendor (`oracle`, `mssql`, `postgres`) |
| `dwhDBSchema` | Data Warehouse database schema name |
| `dwhDBVendor` | Data Warehouse database vendor |
| `dwhDBLink` | Classic PPM database link name (as configured in CSA) |
| `ppmUser` | Login name of the user running the report |
| `ppmUserLanguage` | Language of the user running the report |
| `ppmUserUITheme` | UI theme selected in Classic PPM |
| `ppmDBName` | Database name (MS SQL Server) |

Using `dwhDBSchema` in SQL statements ensures your reports work across environments without hardcoded schema names.

---

## Custom Objects and Attributes


Custom objects and attributes can be enabled for inclusion in the DWH. They appear in the `DWH_ODF_` table namespace.

**Enable a custom object:**
1. Open **Administration > Studio > Objects**
2. Click the object name and select **Include in the Data Warehouse**
3. Click **Save**

**Enable custom attributes:**
1. Open the object and click the **Attributes** tab
2. Select the attributes and click **Include in Data Warehouse**
3. Run the **Load Data Warehouse** job (Full Load)

> [!WARNING]
> Enable a custom master object for the DWH **before** enabling its child sub-objects. Enable the object before enabling its custom attributes. Reversing this order disables the child options.

> [!WARNING]
> Before disabling custom objects or attributes, verify they are not used in any views or reports. Existing views and reports that reference disabled objects will become unusable.

---

## Related

- [[Configure DWH]] — DWH configuration options, Instantaneous Sync, language/fiscal period settings
- [[DWH Conventions]] — Detailed standards for lookups, fact tables, and query examples
- [[Data Warehouse Setup]] — Initial setup: tablespaces, credentials, rebuild procedures, monitoring queries
- [[Data Warehouse Trends]] — Trend reporting tables and jobs
- [[OData Access]] — OData endpoints for BI tool access (SaaS)
- [[Getting Started Jaspersoft]] — Advanced Reporting overview
- [[Studio Reports]] — Custom Jaspersoft Studio report development
- [[PMO Admin Reports]] — Out-of-the-box DWH schema and Clarity schema reports

%%Source: p3048-3051, p2801-2806, p3017-3029, Advanced Reporting with Jaspersoft p524-528, p739-817%%
