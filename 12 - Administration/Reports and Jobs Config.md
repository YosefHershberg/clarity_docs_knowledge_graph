---
title: Configure Reports and Jobs
tags:
  - admin
aliases:
  - Reports and Jobs Config
canonical: true
audience: admin
domain: administration
---
# Configure Reports and Jobs

## Overview

As an administrator, you configure which reports and jobs are active for other users to run. A report or job definition consists of general properties, parameters, incompatible jobs, associated categories, and access rights. This page also covers the Hide Financial OBS option that affects OBS browse lists in reports and filters.

> [!tip]
> As an administrator, select Administration, Data Administration, Reports and Jobs to make configuration changes. To view available reports and jobs, users select Home, Personal, Reports and Jobs.

## Hide Financial OBS Option

Applying this option removes financial OBS listings (Department or Location types) from OBS browse lists. The option is applied in addition to any existing customization for a browse.

The option affects the following lookup IDs:
- OBS_BROWSE_FLT_ALL
- OBS_BROWSE_FLT_BPM_DEF_PROCESSES
- OBS_BROWSE_FLT_CMP
- OBS_BROWSE_FLT_CMN_PAGES
- OBS_BROWSE_FLT_CMN_PORTLETS
- OBS_BROWSE_FLT_CMN_SCH_JOB_DEFINITIONS
- OBS_BROWSE_DMART_FLT_RES
- OBS_BROWSE_DMART_FLT_PRJ
- OBS_BROWSE_FLT_INV_APPLICATION
- OBS_BROWSE_FLT_INV_ASSET
- OBS_BROWSE_FLT_INV_OTHER
- OBS_BROWSE_FLT_INV_PRODUCT
- OBS_BROWSE_FLT_PRJ
- OBS_BROWSE_FLT_RES

The option affects filtering of the following areas:

- **Reports:** Reports using OBS Unit as a filter do not provide the Financial OBS drill-down within the Show OBS drop-down list. To run a report against an investment assigned to a financial OBS, use different filter options (for example, Project Manager) or leave the OBS filter empty.
- **Resource List:** The Resource filter within the resource list or Project Team does not provide the Financial OBS drill-down. Use different filter options such as part of the resource name.
- **Investment Filter:** Investments associated with a financial OBS cannot be filtered using the Show OBS drop-down list. Use other filter options to reduce the list.
- **OBS Access Rights:** Associate access rights through the OBS Unit for non-financial OBS types. Access rights for financial OBS types must be handled through a separate security OBS.

### Set the Hide Financial OBS Option

Follow these steps:
1. Click Administration, Finance, Processing.
2. Select the Hide Financial OBS check box in the OBS Filter section.
3. Click Save.

## Create a Job Definition

Use the Job Definitions page to view all available report and job definitions. You can edit only user-defined reports and jobs.

Follow these steps:
1. Open Administration, and from Data Administration, click Reports and Jobs.
2. Click New.
3. In the Executable Type field, select one of the following:
   - **Report:** Executes a Jaspersoft report stored on your Jaspersoft server.
   - **Java:** Executes queries. Use when business logic cannot be implemented in XBL. Example: `com.niku.calendar.scheduler.CalendarBackgroundProcess`
   - **Persistent Meta Data (PMD):** Executes queries at regular intervals without business logic. Example: `itl.incidentCostCalc`
   - **SQL Stored Procedure:** Implements data-intensive business logic as a stored procedure. Example: `cmn_job_logs_delete_sp`
   - **Extensible Business Language (XBL):** Implements business logic and executes queries; superset of PMD. Example: `postTimesheets.xql`
   - **Extract, Transform, and Load (ETL):** Executes ETL extraction, transformation, and loading into target tables. Example: the Load Data Warehouse job.
4. In the Executable Name field, enter a name following the naming convention for the executable type:
   - Report: `/ca_ppm/reports/investment_management/CSK_INV_TimeAndEstimate`
   - Java: `com.myorg.projmgr.service.staffing.job.InvestmentAllocationJob`
   - PMD: `itl.incidentCostCalc`
   - SQL Stored Procedure: `IMM_ASSIGN_INCIDENT`
   - XBL: `projmgr#projects/purgeProjects.xbl`
5. Save your changes.

## Define Report or Job Parameters

Report or job parameters enable users to filter data or specify the scope of the report or job. Define all parameters for passing to the server from Classic PPM.

Follow these steps:
1. Open Administration, and from Data Administration, click Reports and Jobs.
2. Open the report or job definition.
3. Click Parameters, and then click New.
4. Complete the requested information:
   - **Bind Parameter Code:** Defines the parameter bind code matching the stored procedure parameter name (e.g., `P_JOB_RUN_ID`).
   - **Type:** Specifies the parameter field type displayed to users: Text, Checkbox, Pull-down, Browse, Date, Relative Date, or Time Period.

> [!note]
> Save changes to set default values for browse or pull-down parameter types.
> - **Default:** Read-only value of the parameter (required if Read-only is selected).
> - **Read-only:** If selected, provide a value for the parameter in the Default field.

5. Save your changes.

## Schedule Jobs Using UNIX Crontab Format

The UNIX cron format is used to specify time while scheduling jobs in Clarity. Use the Set Recurrence link on the Job Properties page.

Crontab argument order: minutes (0-59), hour (0-23), day of month (1-31), month (1-12), day of week (0-6).

> [!important]
> The Clarity application uses formatting similar to UNIX Crontab but NOT all aspects of the formatting rules:
> - Do NOT use the hyphen symbol (-) to define ranges. Using hyphens may produce unpredictable results.
> - To define a range, specify numbers separated by commas with no spaces.
> - Spaces are used only as delimiters between arguments.

Follow these steps:
1. In Classic PPM, click Home, Reports and Jobs, and select the Jobs tab.
2. Select the relevant job.
3. Select the Set Recurrence link (available in the When tab below the Recurrence field).
4. In the Job-Recurrence window, enter the relevant parameters in the Use UNIX crontab entry format field.
5. Click Save and Return.

## Reorder Report or Job Definition Parameters

Parameters display in the order in which you add them. Parameter order is important for SQL Stored Procedure jobs.

Follow these steps:
1. Open Administration, and from Data Administration, click Reports and Jobs.
2. Open the report or job definition to reorder parameters.
3. Select Parameter Order.
4. Select the parameter and use the arrows to move it up or down the list.
5. Save your changes.

## Identify Incompatible Report or Job Definitions

Some reports or jobs cannot run simultaneously. For example, you cannot concurrently run a job with the Datamart Extraction job if they depend on data from it. When an incompatible report or job is scheduled, its run time is postponed until the running report or job completes.

Follow these steps:
1. Open Administration, and from Data Administration, click Reports and Jobs.
2. Open the report or job definition that you want to edit.
3. Click Incompatible Jobs, and click Add.
4. Select the check box next to the report or job that cannot run concurrently with this one and click Add.

## Associate Report or Job Definitions with Categories

Use the included categories to group reports or jobs in meaningful ways. No new categories can be created or deleted.

1. Open Administration, and from Data Administration, click Reports and Jobs.
2. Open the report or job definition, and click Associated Categories.
3. Click Add.
4. Select the category to associate with the report or job, and click Add.

## Report and Job Notifications

Recipients can receive notifications (alert, email, or SMS) when a report or job finishes or fails.

1. Click Home, Personal, Account Settings.
2. Click Notifications.
3. Select the check box next to each notification and method you want to receive.
4. Save your changes.

## Activate or Deactivate a Report or Job

Inactive reports or jobs display on the definitions page with the Active column check box cleared.

1. Open Administration, and from Data Administration, click Reports and Jobs.
2. Select Job Definitions.
3. Select the inactive report or job and click Activate, or select the active report or job and click Deactivate.

## Cancellable Jobs

You can cancel currently running jobs or scheduled future jobs.

Follow these steps:
1. Open Administration, and from Data Administration, click Reports and Jobs.
2. Click a Job. If the Cancellable field is checked, the job can be cancelled.

The following running jobs can be cancelled:

| # | Job Name |
|---|---|
| 1 | Time Slicing |
| 2 | Escalation |
| 3 | Delete Investments and Time Reporting Periods |
| 4 | Post Timesheets |
| 5 | Autoschedule Project |
| 6 | Convert Mixed Booking Status |
| 7 | Purge Picklist Data |
| 8 | Sync SaaS Users |
| 9 | Export to CSV Job |
| 10 | Time Slicing Sync |
| 11 | Update Earned Value and Cost Totals |
| 12 | Bulk PDF Export |
| 13 | Populate Timesheets |
| 14 | Timesheet Integration |

Any other running job returns: `NJS-0137: Job <job name> cannot be cancelled`

## Create a Report Definition

Define Jaspersoft Studio reports in Clarity so that end-users can run them from Home, Personal, Reports and Jobs.

Follow these steps:
1. Click Administration, Data Administration, Reports and Jobs.
2. Click New and enter the following information:
   - **Job Definition Name:** The report name as it appears in Jaspersoft.
   - **Job Definition ID:** The Resource ID for the report as specified in Jaspersoft. Navigate to Advanced Reporting, select Edit for the report; the Resource ID appears on the Setup the Report page.
   - **Content Source:** Select Customer for user-defined reports.
   - **Active:** Activate to make the report visible from Home, Personal, Reports and Jobs.
   - **Executable Type:** Select Report.
   - **Executable Name:** The path to the repository folder in Jaspersoft. Right-click the report name in Advanced Reporting and select Properties to see the full path. Use the same casing as shown.
3. Click Save and Continue. Proceed to define parameters for the report.

### Define Report Parameters

Define a parameter for each input control in Jaspersoft, in the same order as the input controls.

> [!note]
> For dependent lookups (e.g., OBS type/unit), you do not need to create a parameter for the dependent lookup. You can also skip mapping parameters for "populate" input controls (performance check boxes in Jaspersoft).

1. Click Parameters, New.
2. Enter the following information:
   - **Parameter Label:** The label users see when running the report. Must correspond to the input control in Jaspersoft.
   - **Bind Parameter Code:** Must exactly match the input control ID in Jaspersoft.
   - **Type:** Must match the data type in Jaspersoft (Text, Checkbox, Pull-down, Browse, Date, Relative Date, or Time Period).
   - **Default:** Provide a default value only if a default is available in Jaspersoft.

> [!tip]
> In PPM, if you do not specify a default, no default value appears for the report parameter. In Jaspersoft, the first value in a list is always selected and appears like a default even when no default is defined.

3. Specify if the parameter requires a value and if it is read-only.
4. After creating and saving all parameters, click Save and Return.
5. Click Parameter Order. Specify the display order matching the order of input controls in Jaspersoft.
6. Click Save and Continue.

### Define Report Incompatibility

1. Click Incompatible Jobs.
2. Select Report from Executable Type.
3. Add any reports or jobs that cannot run simultaneously, including another instance of the same report.
4. Click Return when done.

## Create a Custom Job

If the included stock jobs do not meet your requirements, you can create new jobs using Java or SQL.

Follow these steps:
1. Select a method that best addresses the job to create.
2. Write the queries, statements, or procedures using Java and SQL.
3. Deploy the executable.
4. Create a job definition by referencing the executable type and name.

To enable the background scheduler to clean up all processing jobs at startup, set the `isPrimary` attribute on the `jobSchedulerInstance` element in `properties.xml` to `true`.

### SQL Stored Procedure Guidelines

Pass the `P_JOB_RUN_ID` and `P_JOB_USER_ID` parameters. Parameter order is important for SQL Server and Oracle.

**SQL Server:**
```sql
CREATE PROCEDURE OR REPLACE PROCEDURE <my new job> (
    @P_JOB_RUN_ID NUMERIC,
    @P_JOB_USER_ID NUMERIC
)
```

**Oracle:**
```sql
CREATE OR REPLACE PROCEDURE <my new job> (
    P_JOB_RUN_ID IN NUMBER,
    P_JOB_USER_ID IN NUMBER
) AS <procedure body>
```

### Java Guidelines

Follow these steps:
1. Create a Java class implementing `com.niku.union.interfaces.SchedulerListener`. Implement only the `scheduledEventFired()` method.
2. Compile the class, ensuring the CLASSPATH includes `$NIKU_HOME/lib/union.jar`.
3. Create a JAR file: `jar cf myBackgroundJob.jar myBackgroundJob.class`
4. Deploy by placing the executable in `$NIKU_HOME/customlib`.
5. Create a job definition with the executable name as the valid class name or fully qualified class name.

## Related
- [[_MOC Administration]]

%%Source: p3153-3164%%
