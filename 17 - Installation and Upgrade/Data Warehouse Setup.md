﻿---
title: Set Up the Data Warehouse
tags:
  - admin
aliases:
  - Data Warehouse Setup
---
# Set Up the Data Warehouse


After you install the database, complete the following tasks to set up the Data Warehouse for use with Classic PPM:

- (SaaS and On-Premise) Review the Prerequisites
- (SaaS and On-Premise) Set the Language and Fiscal Periods for the Data Warehouse
- (SaaS and On-Premise) Configure the Data Warehouse Server Credentials
- (SaaS and On-Premise) Populate the Data Warehouse with Data
- (On-Premise only) Monitor the Data Warehouse Job
- (On-Premise only) Rebuild the Data Warehouse

---

## (SaaS and On-Premise) Review the Prerequisites


Review the following information before you set up the Data Warehouse:

- Determine whether you want to install the Data Warehouse on a separate physical server or as a separate instance on the same server. Where you install the Data Warehouse depends on your business needs.
- Verify that the server times set for the Clarity app server, product database server, and Data Warehouse database server are all in sync.
- Only standard Clarity objects and attributes are automatically populated in the Data Warehouse by default.
- The following attribute types are supported: Boolean, String, Large String, Number, Money, Date, Calculated, Formula, Lookup, Multivalued Lookup, URL, and Time-Varying.
- For any custom objects and custom attributes you want to include in the Data Warehouse, follow these steps:
  1. Open **Administration** and from **Studio**, click **Objects**.
  2. To include a custom object, click the name, select the **Include in the Data Warehouse** check box, and click **Save**.
  3. To include custom attributes for an object:
     a. Click the **Attributes** tab.
     b. Select the custom attributes you want to include. Custom attributes are identified by a check box in the left column.
     c. Click **Include in Data Warehouse**.
     d. Save your changes.

> [!NOTE]
> Also look for custom attributes on standard Clarity objects.

- Time slices with the **Data Warehouse** option selected determine the ranges for the Data Warehouse facts. The default ranges are:
  - Three years back and forward for Months
  - One year back and forward for Weeks
  - One year back and forward for Daily
  - Three years back and forward for Fiscal

Verify that the ranges work for your business needs.
If necessary, update the **From Date** and **Number of Periods** by opening a time slice and making the changes on the properties page.
All Monthly time slices should have the same From Date and Number of Periods. The same is true for Weekly, Daily, Fiscal, and so on.

- To help ensure correct functionality and accuracy of data, verify the following:
  - The server time is the same (preferably, down to the second) on the Clarity application server, Clarity database server, and Data Warehouse database server.
  - The timezone, date, and time is the same on the Clarity application server and database servers in the same environment.

> [!NOTE]
> This synchronization is necessary because the Load Data Warehouse job imports data based on the `last_updated_date` field. If the date and time on the servers do not match, data may not be loaded into the Data Warehouse or jobs may not start on time.

---

## (SaaS and On-Premise) Set the Language and Fiscal Periods for the Data Warehouse


To set the languages and the entity for fiscal periods for the Data Warehouse, use the **System Options** page in Classic PPM.

> [!WARNING]
> Modifying the fields described in the following procedure requires you to run the Load Data Warehouse job with the option **Full Load** selected.
> Changes to the **Entity for Fiscal Periods** field result in a resource-intensive operation because all fiscal fields within the Data Warehouse are recalculated.

Follow these steps:

1. Open **Administration** and from **General Settings**, click **System Options**.
2. In the **Data Warehouse Options** section, complete the following fields:

   - **Languages** — Specifies the language localizations included in the Data Warehouse. Multiple languages result in increased storage requirements on the Data Warehouse server.
   - **Entity for Fiscal Periods** — Specifies the entity used to determine fiscal periods.
     The fiscal periods associated with the selected entity are used for all Data Warehouse fiscal period data calculations.
     Setting the entity for the first time creates new Data Warehouse time slice requests, so the initial run of the Time Slicing job takes significantly longer than normal.

   > [!NOTE]
   > Do not set or change the entity when a time slice rollover is in progress. Wait until the rollover completes. To determine which slice requests are in rollover, check the expiration date on the time slices.

   > [!NOTE]
   > The entity must have Monthly (or 13 period) fiscal time periods set up to cover the time range of the time slice requests. Otherwise, the time slice requests are ignored when the Time Slicing job runs.

3. Save your changes.

---

## (SaaS and On-Premise) Configure the Data Warehouse Server Credentials


The Data Warehouse schema can be on the same physical server as the Clarity database as a separate instance, or on a different physical server depending on the size of the Clarity database.

> [!WARNING]
> The **HTTP Entry URL** and **HTTPS Entry URL** fields completed for the Clarity server in CSA cannot be `localhost` when Jaspersoft is integrated with Clarity. The URLs must be explicitly entered on the **Application** subtab of the **Properties** tab. For example:
> - HTTP Entry URL: `http://<server name>:<port>`
> - HTTPS Entry URL: `https://<server name>:<port>`

Follow these steps:

1. Open the Clarity System Administration application at: `http://<hostname>:8090`
2. Log in using the password that you created during the initial installation.
3. In the left navigation panel, click **Servers** and click the name of the server.
4. On the **Properties** tab, click the **Data Warehouse** subtab and complete the following fields:

   | Field | Description |
   |---|---|
   | **Vendor** | Database system: Oracle (default) or Microsoft SQL Server |
   | **Sys Password** | System password for this database server (Oracle 11g only) |
   | **Dimension Table Tablespace** | Tablespace for dimension tables. Default: `DWH_PPM_DATA_DIM` |
   | **Fact Table Tablespace** | Tablespace for fact tables. Default: `DWH_PPM_DATA_FACT` |
   | **Dimension Index Tablespace** | Tablespace for dimension indices. Default: `DWH_PPM_INDX_DIM` |
   | **Fact Index Tablespace** | Tablespace for fact indices. Default: `DWH_PPM_INDX_FACT` |
   | **Fetch Size** | Hint for the JDBC driver as to the number of rows to fetch |
   | **Status** | Indicates whether the Data Warehouse server is available |
   | **Specify URL** | Specifies a different JDBC URL. Required when Oracle RAC is used |
   | **Hostname** | IP address or hostname of the database server |
   | **Port** | Port for database traffic. Default: `1521` (Oracle) or `1433` (SQL Server) |
   | **Database Name** | (SQL Server only) Name of the SQL Server database |
   | **Service ID** | (Oracle only) Oracle database Service ID |
   | **Service Name** | Oracle database service or ODBC connection name |
   | **Login Name** | Schema login name |
   | **Password** | Schema login password |
   | **Custom Database Link** | Whether the database link is the default (`ppmdblink`) or custom |
   | **Clarity Database Link** | Name of a custom database link |
   | **ETL Job Timeout** | Length of time before an ETL job stops. Default: `600` minutes |

5. Save your changes.

---

## (SaaS and On-Premise) Populate the Data Warehouse with Data


To populate the Data Warehouse with data from the Clarity database, run the following jobs in order:

### Time Slicing Job


Splits time varying data into a relational format.

> [!NOTE]
> The first run of this job can take substantial time.

### Load Data Warehouse Job


Extracts data from the Clarity database, transforms it, and loads it into the Data Warehouse. This job is initially disabled — enable it before running.

> [!WARNING]
> If you are running this job for the first time to populate the Data Warehouse, select the **Full Load** parameter. If you had a failed run and corrected the problem, also select **Full Load** for the first run after the failure.

> [!WARNING]
> The following actions require you to rerun the Load Data Warehouse job after the initial population:
> - Deleting an attribute or clearing the **Include in the Data Warehouse** option in Studio
> - Changing the data type of an attribute
> - Adding a language to the Data Warehouse
> - Changing a timeslice date to include a larger timeframe
> - Changing a system setting (a Full Load is required)

#### Instantaneous Sync


Provides near real-time synchronization of the Data Warehouse with changes made in Clarity.

To enable, check the **Enable Instantaneous Sync** checkbox in **Administration > System Options > Data Warehouse Options**.

**Requirements:**
- Run a Full Load at least once to initialize metadata tables before relying on Instantaneous Sync.
- Ensure the DBLINK between Clarity and the Data Warehouse schema is configured.
- Most updates are processed automatically by Background Services (BG). The PPM Broker service is not required.

**Covered by Instantaneous Sync:**
- Object instance CRUD operations
- Schema inclusion/exclusion with historical backfill for newly enabled attributes
- XOG/REST updates for Projects and related data (Tasks, Team, Assignments, Risks, Issues, Changes)
- Ideas, Custom Investment Types (CITs), NPIOs, Cost Plan XOG, and Benefit Plan XOG
- Timesheets (Clarity)
- Updates from Time Slicing and Time Slicing Sync jobs (TSV/per-period metrics, resource availability, and usage) when SQL Curves are enabled

**Limitations:**
- Does not update lookup definitions (e.g., renaming a static lookup value)
- Does not update fact tables, fiscal time periods, time reporting periods, baselines, scalars/metrics, OBS creation, or security data
- Excludes attributes with inconsistent metadata (e.g., Banner Color) and updates made through GEL scripts or direct XOG database updates

**Supported databases:** Oracle, PostgreSQL, and MSSQL.

### Load Data Warehouse Access Rights Job


Loads access privileges for resources and investments from the Clarity database to the Data Warehouse. This job is initially disabled — enable it before running.

> [!NOTE]
> When the Load Data Warehouse Access Rights and Load Data Warehouse jobs run, they write standard messages to the Jobs logs and detailed messages to the Data Warehouse logs.
> The default log files are `bg-dwh.log` and `bg-ca.log`. To enable more logging, change the **Kettle Log Level** in CSA (**Logs > Edit Configuration**).

---

## Data Warehouse: Enable Plan Actuals Toggle


The **Enable Plan Actuals** toggle feature helps improve Clarity performance by addressing the following issues:

1. Slow Data Warehouse loading (both incremental and full)
2. Errors in the `DWH_X_PLAN_ACT_PER_FACTS` table, for example:
   ```
   ERROR: ENCOUNTERED EXCEPTION WHILE INSERTING FROM DWH_X_PLAN_ACT_PER_FACTS.
   The duplicate key value violates unique constraint "dwh_x_plan_act_per_facts_u3"
   ```
3. The table `DWH_X_PLAN_ACT_PER_FACTS` is hung, locked, or bloated.

To toggle **ON** the Enable Plan Actuals feature:

```sql
update dwh_settings set enable_plan_actuals = 1;
```

To toggle **OFF** (use fiscal time slice instead):

```sql
update dwh_settings set enable_plan_actuals = 0;
```

> [!IMPORTANT]
> Oracle and Postgres support the Enable Plan Actuals toggle. MS SQL does not support this feature.

---

## (On-Premise only) Monitor the Data Warehouse Job


Monitor the status of the Load Data Warehouse job using the following database view in the Classic PPM Data Warehouse schema:

```sql
SELECT TABLE_NAME, TABLE_TYPE, COMPLETED_FLAG, POPULATION_TIME_SEC,
       DW_LOAD_START_DATE, DW_LOAD_END_DATE
FROM DWH_RUN_STATUS_V
```

If `Completed_Flag = 1`, the load is complete. If `Completed_Flag = 0`, the load is not yet complete.

To monitor the status of the last load run and view row counts and load times per table:

```sql
SELECT TABLE_NAME, RECORD_COUNT, POPULATION_TIME_SEC
FROM DWH_GATHER_METRICS_V
WHERE TABLE_NAME NOT IN (
  'DWH_CFG_LOG','DWH_CFG_TABLE_AUDIT','DWH_FK_PK_EXCEPTIONS',
  'DWH_META_COLUMNS','DWH_META_INDEXES','DWH_META_TABLES'
)
ORDER BY TABLE_NAME
```

---

## (On-Premise only) Rebuild the Data Warehouse


If the Load Data Warehouse job fails and the configuration might be corrupt, you may need to rebuild the data warehouse database.

1. Verify that the application and data warehouse databases match:

   ```sql
   select * from cmn_install_history order by installed_date desc
   select * from cmn_dwh_install_history order by installed_date desc
   ```

2. To check for missing views or tables (metadata mismatch), run the following queries:

   ```sql
   select a.dwh_table_name, a.dwh_column_name, a.attr_type, a.attr_data_type,
          a.attr_data_size, a.is_deleted, a.js_processed
   from DWH_META_COLUMNS a order by 1,2

   select b.dwh_table, b.dwh_column, b.attribute_type, b.attribute_data_type
   from DWH_META_COLUMNS b order by 1,2
   ```

3. To rebuild the DWH schema, schedule the following steps:
   a. Locate the default initial database file:
      - `dwh_oracle_base.db` — import using the Oracle datapump utility
      - `dwh_mssql_base.db` — restore using MS SQL Server Management Studio
   b. Run the following command on the Classic PPM application server to match the PPM version:
      ```
      admin db dwh-upgrade -Dupgrade.phase=maintenance
      ```

---

> [!NOTE]
> **What's Next?**
> - Configure the Data Warehouse
> - [[Post Upgrade Steps]]
> - Install PMO Accelerator Add-In and PMO Sample Data

## Related
- [[_MOC Install Upgrade]]

%%Source: p2801-2806%%
