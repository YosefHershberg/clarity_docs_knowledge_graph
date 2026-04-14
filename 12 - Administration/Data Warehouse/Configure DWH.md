---
title: Configure the Data Warehouse
tags:
  - admin
aliases:
  - Configure DWH
canonical: true
audience: admin
domain: administration
---
# Configure the Data Warehouse

## Overview

Use Advanced Reporting to create ad hoc views of Classic PPM data and save the views as reports. You can then email the reports, export them, display them on a dashboard, or consume them as is.

To create ad hoc views, report builders can select from a set of advanced reporting domains that contain default product data. The domains are the metadata layer to the Classic PPM data warehouse (DWH).

> [!important]
> You need the PMO Accelerator add-in with Jaspersoft Advanced Reporting content to view domains and reports. See the PMO Accelerator Release Notes for more information.

## Clarity Data Warehouse

The data warehouse (DWH) is the main data source for the advanced reporting solution. Advanced Reporting lets you create both ad hoc reports and Jaspersoft Studio reports that you can display on a dashboard. The data warehouse schema is optimized specifically for reporting and analytics, and includes investment, resource, portfolio, timesheet, and project objects.

**The five jobs that update the data warehouse:**
- **Load Data Warehouse:** Loads data incrementally or in full.
- **Load Data Warehouse Access Rights:** Loads user permissions.
- **Create Data Warehouse Trend:** Creates new data warehouse trending information.
- **Update Data Warehouse Trend:** Updates selected trending tables with the latest information.
- **Delete Data Warehouse Trend:** Removes selected trends from the data warehouse.

The DWH schema is populated at scheduled intervals by the Load Data Warehouse and Load Data Warehouse Access Rights jobs. These two ETL jobs extract relevant data from the PPM database, transform it, and load it into the data warehouse.

A standard set of table prefixes, lookups, fact tables, and queries are used in the data warehouse to work with any reporting tool. See Clarity Data Warehouse (DWH) Conventions.

The PMO Accelerator add-in includes Jaspersoft Studio reports. These SQL reports are written directly against the data warehouse. A few are written against the Classic PPM database.

> [!tip]
> For better performance, write your reports against a data source and not against the domain layer. We also recommend that you write all reports against the data warehouse data source. Use the PPM database as your data source only if the required data is not available in the data warehouse.

> [!note]
> To write more sophisticated reports directly against the data warehouse or the database, download a client tool such as Jaspersoft Studio. For information about Jaspersoft Studio, see the Jaspersoft Community.

## View Objects and Attributes Included in the Data Warehouse

Only the most commonly used stock objects and attributes are included in the data warehouse by default.

Follow these steps:
1. Click Administration, Studio, Objects.
2. In the Objects list, a check mark appears in the Data Warehouse column to identify included objects. You can also open the object and view the Include in the Data Warehouse check box.
3. Select an object and click the Attributes tab.
4. In the Attributes list, a check mark appears in the Data Warehouse column to identify included attributes.

> [!note]
> Certain object attributes that are automatically included in the data warehouse do not have the Data Warehouse field selected. These attributes are also visible in the domains.

The following object attributes are included automatically even when the Data Warehouse field does not appear selected:

**Project:** % Complete, % Expended, Actuals, Actuals for Labor Resources, Actuals Sum for Labor Resources, ACWP, Alignment, BAC, Baseline Cost, Baseline Usage, BCWP, BCWP Override, BCWS, Budgeted Benefit, Budgeted Capital Cost, Budgeted Cost, Budgeted IRR, Budgeted MIRR, Budgeted NPV, Budgeted ROI, Cost Variance %, CPI, Current Baseline (for Labor Resources), EAC, EAC(AT), EAC(T), ETC, Planned Benefit, Planned Capital Cost, Planned Cost, Planned IRR, Planned MIRR, Planned NPV, Planned ROI, Projected Cost Variance, Projected Effort Variance, Schedule Variance %, SPI, Total Effort, Total Labor Effort, and many others.

**Task:** % Complete, % Expended, Actuals, ACWP, BAC, Baseline Cost, Baseline Duration, Baseline Usage, BCWP, BCWP Override, BCWS, Cost Variance %, CPI, CV, EAC, EAC(AT), EAC(T), ETC, ETC(AT), ETC(Cost), Finish Variance, Schedule Variance %, SPI, Total Effort.

**Benefit Plan:** Total Actual Benefit, Total Benefit, Total Billing Benefit.

**Cost Plan:** Total Cost, Total Revenue, Total Units.

**Team:** Actuals, Allocation, Allocation Cost, Baseline Cost, Baseline Usage, ETC, Hard Allocation, Hard Allocation Cost, Total Actuals, Total Usage.

**Portfolio:** Distributed Benefits, Distributed Capital Cost, Distributed Cost, Distributed Operating Cost, Distributed Overall Roles, Target Benefits, Target Capital Cost, Target Operating Cost, Target Overall Roles, Target Total Cost.

**Assignment:** % Complete, % Expended, Actual Cost, Actuals, Baseline Cost, Baseline Usage, ETC, ETC Cost, Max % Load, Pending Actuals, Proposed ETC, Total Effort.

## Configure the Data Warehouse

Over time, you can configure the data warehouse settings to adjust to your changing business needs.

> [!note]
> Whenever you change the data warehouse configuration, run the Load Data Warehouse job with the Full Load option selected.

> [!warning]
> After modifying the fields described below, run the Load Data Warehouse job with Full Load selected. Changes to the field Entity for Fiscal Periods result in a resource-intensive operation because all fiscal fields within the data warehouse are recalculated.

Follow these steps:
1. Click Administration, General Settings, System Options.
2. In the Data Warehouse Options section, complete the following fields:
   - **Languages:** Specifies the language localizations included in the Data Warehouse. Multiple languages result in increased storage requirements. Always select English; otherwise, the Load Data Warehouse job fails.
   - **Entity for Fiscal Periods:** Specifies the entity used to determine fiscal periods for all Data Warehouse fiscal period data calculations. Setting or updating this entity creates Data Warehouse time slice requests, so the initial or subsequent runs of the Time Slicing job take longer. Do not set or change the entity when a time slice rollover is in progress.
   - **Include Weekly Period Data:** When selected, facts are loaded in weekly increments.
   - **Include Monthly Period Data:** When selected, facts are loaded in monthly increments.
   - **Include Fiscal Period Data:** When selected, facts are loaded in fiscal time periods determined by the Entity for Fiscal Periods field.
   - **Consistent Fiscal Periods Across Entities:** Specifies if fiscal time period dates are consistent across entities.
   - **Include Only Financial Plan of Record:** When selected (default), only the current budget plan, cost plan of record, and associated benefit plans are included. Uncheck to compare old plans with current plans (can impact performance for large data sets).
   - **Include SQL Curve Data:** When selected, creates SQL Curve tables in the data warehouse schema to support time-varying attributes for Object-based Data Providers.

> [!note]
> The entity must have Monthly (or 13 period) fiscal time periods set up to cover the time range of the time slice requests. Select at least one period data type (Weekly, Monthly, or Fiscal). If none is selected, the Load Data Warehouse job fails for both full and incremental loads.

> [!tip]
> Leave the Consistent Fiscal Periods Across Entities option unchecked unless you experience performance issues with the Load Data Warehouse job.

3. Save your changes.
4. Run the following jobs in the listed order:
   1. Time Slicing
   2. Load Data Warehouse
   3. Load Data Warehouse Access Rights

## Configure the Data Warehouse Time Slices

Time slices with the Data Warehouse option selected determine the ranges for the Data Warehouse facts. Data Warehouse time slice requests are system requests and cannot be deleted.

The Data Warehouse time slice requests default to the following time periods (based on the database server system date):
- **Daily:** One year back and forward. From Date is one year before the system date.
- **Weekly:** One year back and forward. From Date is one year before the system date, on the same day as the First Day of Work Week.
- **Monthly:** Three years back and forward. From Date is three years before the system date and is always the first day of the month.
- **Fiscal:** Three years back and forward. From Date is three years before the system date, corresponding to the start date of the fiscal period for the selected entity.

> [!warning]
> The entity must have Monthly (or 13 Period) fiscal time periods set up to cover the range of the time slice requests; otherwise, the time slice requests are ignored when the Time Slice job runs. Verify that the ranges work for your business needs.

### Rules for Setting the From Date and Number of Periods

> [!warning]
> By default, the Data Warehouse time slice requests are set consistently for each slice period. If you edit these slice requests, set the From Date and Number of Periods to be the same for each slice period type. If not set correctly, the data in the Data Warehouse is inconsistent.

Rules:
- Verify that there is only one daily time slice request.
- For all weekly time slice requests, the From Date must be the same day as the First Day of the Work Week in Project Management settings.
- For all monthly time slice requests, the From Date must always be the first of a month.
- For all fiscal time slice requests, the From Date must correspond to the start date of a Monthly (or 13 Period) fiscal period type.
- The time slice ranges must include the start and finish dates of the investments on which you regularly report.

## Enable Custom Objects and Attributes for the Data Warehouse

To view preexisting custom objects and attributes in the domains, explicitly enable them for inclusion in the Data Warehouse.

Verify that the custom objects and attributes you want to enable exist in the product. For more information about objects and attributes, see Classic PPM Studio Development.

> [!warning]
> Enable a custom master object for the Data Warehouse before enabling a custom sub-object of the master object. Otherwise, the option to include the sub-object in the data warehouse appears disabled. Similarly, enable an object for the Data Warehouse first, before enabling the custom attributes of that object.

Follow these steps:
1. Click Administration, Studio, Objects.
2. To enable a custom object for the Data Warehouse:
   a. Click the object name to open its properties.
   b. Select the Include in the Data Warehouse check box and save.
3. To enable each custom attribute for the Data Warehouse:
   a. With the object open, click Attributes.
   b. Click the attribute name to open its properties.
   c. Select the Include in the Data Warehouse check box and save. To enable multiple custom attributes at once, select them on the object attributes list page and then select Include in Data Warehouse.
4. Click Save and Return.
5. Run the Load the Data Warehouse job to include the custom objects and attributes in the Data Warehouse and domains.
6. Check the Custom Master Objects domain to verify that your custom object appears. Check the other domains to verify that your custom attributes appear in the respective domains.

## Update Calculated and Number Custom Attributes

You can update the formulas or decimal places for any custom attributes (calculated or number) included in the Data Warehouse. Build and validate formulas for calculated attributes before including them in the Data Warehouse.

Follow these steps:
1. Deselect the Include in the Data Warehouse check box for the attribute to disable it.
2. Run the Load Data Warehouse job to remove the attribute from the Data Warehouse and domains.
3. Build the new formula or change the decimal places for the number custom attribute.
4. Select the Include in the Data Warehouse check box for the attribute to re-enable it.
5. Rerun the Load Data Warehouse job to add back the attribute to the Data Warehouse and domains.

## Disable Custom Objects and Attributes from the Data Warehouse

Follow these steps:
1. Disable all custom sub-objects for the master object. Next, disable the custom master object from the Data Warehouse. Disabling the master object also disables the custom attributes for the master and sub-objects.
2. Run the Load Data Warehouse job. Verify that the Full Load option is selected. Run the job at least once before re-enabling an object or attribute.

> [!warning]
> Do not delete or disable any attribute available from an add-in because doing so can break reporting functionality. Before disabling custom objects or attributes, verify that those objects and attributes are not used in any views or reports. Notify all users to remove those objects or attributes from any views or reports currently using them. If users do not remove them, they cannot create views and reports and the existing views and reports become unusable.

**Workaround:** If users encounter a system error due to disabled attributes:
1. Re-enable the disabled or deleted objects or attributes for the Data Warehouse.
2. Run the Load the Data Warehouse job to reload them into the Data Warehouse and domains.
3. Access the ad hoc views and reports that use the re-enabled objects or attributes. Manually remove the appropriate objects or attributes from the views and reports and save.
4. Disable the custom objects or attributes from the Data Warehouse again.
5. Run the Load the Data Warehouse job to remove the custom objects and attributes.

> [!tip]
> You can disable multiple custom attributes at once by selecting them on the attributes list page and then selecting Exclude from Data Warehouse.

## Instantaneous Sync of Data Between Clarity and Data Warehouse

The Instantaneous Sync feature enables near real-time synchronization of data between Clarity and the Data Warehouse. Changes made in Clarity -- such as object instance modifications (insert, update, delete) and schema updates (new objects or attributes enabled for the Data Warehouse) -- are automatically reflected in the Data Warehouse without requiring a manual Load Data Warehouse job.

Administrators can enable or disable this feature using the **Enable Instantaneous Sync** checkbox in Administration > System Options > Data Warehouse Options. By default, the option is turned off.

Instantaneous Sync uses SQL Curves instead of fact tables for efficiency, and it tracks both schema changes and object modification events. While it offers broad coverage, some areas such as fiscal time periods, baselines, and certain investment attributes still require a manual Load Data Warehouse job.

### Key Highlights

- **Near Real-Time Sync:** Changes made in Clarity are reflected almost immediately in the Data Warehouse, minimizing data refresh wait times.
- **Schema Changes:** Tracks changes to both out-of-the-box and custom objects/attributes, including adding, modifying, deactivating, or deleting attributes in Classic Studio.
- **Object Inclusion and Exclusion:** Syncs when objects or attributes are enabled or disabled for the Data Warehouse in Classic Studio.
- **Historical Data Sync:** When an object/attribute is newly enabled for the Data Warehouse, existing values are backfilled via a historical sync.
- **Instance Data Updates:** Insert, update, and delete operations on object instances are synchronized across both Clarity and Classic PPM interfaces.
- **XOG and REST Coverage:** Supported for most objects.
- **Timesheet Integration:** All timesheet updates are captured by Instantaneous Sync during the Timesheet Posting job, except assignment updates.
- **Timeslicing and TSV:** Updates from Time Slicing and Timeslice Sync jobs are captured, including SQL Curves, per-period TSV metrics, resource availability, and total usage.
- **SQL Curve Table Support:** If SQL Curve tables are enabled in System Options, they are updated in near real time. Fact tables are not updated by Instantaneous Sync and still require the Load Data Warehouse job.
- **Background Service Execution:** Runs as part of Clarity Background Services (BG); the PPM Broker service is not required.
- **Supported Databases:** Oracle, PostgreSQL, and MSSQL.

### Prerequisites

Before enabling Instantaneous Sync, administrators must complete the following steps:
- **DB Link Creation:** Execute the command `admin db create-db-link` to establish a database link between Clarity and the Data Warehouse schema.
- **System Option:** In Administration > System Options > Data Warehouse Options, select the Enable Instantaneous Sync checkbox.
- **Initial Full Load:** Run a full Load Data Warehouse job at least once before enabling synchronization to initialize metadata tables.
- **SQL Curves (Optional):** If the Data Warehouse SQL Curves option is enabled, SQL Curve tables are updated in near real time with Instantaneous Sync. Fact tables still require the Load Data Warehouse job.

### System Behavior

- Toggled Off by Default: Administrators must enable Instantaneous Sync in Administration > System Options > Data Warehouse Options.
- Leverages Background Services (BG): The synchronization process runs as part of Clarity Background Services (BG); the PPM Broker service is not required.
- Security: No additional access rights are required.

### Instantaneous Sync Logging

Instantaneous Sync activity is recorded in the `BG-CA.log` and `App-CA.log` files. Administrators can review these logs to monitor synchronization and troubleshoot issues.

**Enable Debug Logging:** Update the `Logger.xml` file with the following configuration:
```xml
<Logger additivity="false" level="debug" name="com.niku.union.interfaces.DWHSynchronizer">
    <AppenderRef ref="STDOUT"/>
</Logger>
```

**Enable Debug Logging (Data Warehouse Level):** A `IS_SYNC_IN_DEBUG_MODE` column is available in the `DWH_CFG_SETTINGS` table. By default, this column is set to 0 (disabled). When set to 1, detailed log entries are recorded in the `DWH_SYNC_DEBUG_MESSAGE` table.

> [!note]
> Key points for Instantaneous Sync:
> - Ensure that required system options are enabled and the `admin db create-db-link` command is executed before using Instantaneous Sync.
> - Changes are recorded in `DWH_ODF_INST_CHANGES` and `DWH_ODF_SCHEMA_CHANGES` tables.
> - Processed records are moved to `DWH_ODF_INST_CHANGES_ARCHIVE` to prevent data overflow.
> - Regular database cleanup ensures optimal system performance.
> - Fact Tables Are Not Updated: Instantaneous Sync applies only to SQL Curve tables. Fact tables still require a manual Load Data Warehouse job.
> - Support in REST API and XOG: The REST API and XML Open Gateway (XOG) synchronize newly inserted or modified user, resource, and investment data.
> - Performance Considerations: Large data volumes may introduce short delays.

## Recommendations and Limitations for Instantaneous Sync

### Recommendations for Job Scheduling

**Load Data Warehouse (Full Load):**
- Continue scheduling this job in the same way as before Instantaneous Sync was enabled.
- Instantaneous Sync is mutually incompatible with the Load Data Warehouse job. This is managed by the system automatically.
- A full load must be run at least once before enabling Instantaneous Sync in an environment.

**Load Data Warehouse (Incremental Load):**
- Continue scheduling the incremental load job as before.
- Incremental load jobs remain important to process data not covered by Instantaneous Sync.

**Load Data Warehouse Access Rights:**
- This job must continue to run as before. Instantaneous Sync does not synchronize security.

**When the Include SQL Curve Data option is enabled:**
- After enabling or re-enabling this option, run a full load once to initialize the SQL Curve tables.
- SQL Curve data is populated by both the Load Data Warehouse job and during Instantaneous Sync.
- Continue scheduling Load Data Warehouse jobs (full or incremental) regardless of whether the SQL Curve option is enabled.

### Limitations

Instantaneous Sync captures schema and data changes for objects and attributes enabled for the Data Warehouse, including:
- Schema changes for out-of-the-box and custom objects and attributes (add, modify, deactivate, or delete in Classic Studio).
- Inclusion and exclusion of objects and attributes in the Data Warehouse.
- Historical synchronization of existing data when objects or attributes are newly enabled.
- Changes made in ODF.
- Object and attribute instance updates (insert, update, delete) across both Classic PPM and Clarity.
- Some updates made through XOG.

## Related
- [[_MOC Administration]]

%%Source: p3017-3029%%
