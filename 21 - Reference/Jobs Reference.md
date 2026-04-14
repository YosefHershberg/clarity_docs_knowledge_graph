---
title: Clarity Jobs Reference
tags:
  - reference
aliases:
  - Jobs
  - Scheduled Jobs
canonical: true
audience: everyone
domain: reference
---
# Clarity Jobs Reference

Classic PPM includes stock jobs that you can configure, schedule, and run. As an administrator, use the following list of jobs, descriptions, and parameters for running jobs successfully.

## Jobs List (A–Z)

- Anonymize Personally Identifiable Information (PII)
- Auto-approve Timesheets Job
- Autoschedule Project Job
- Auto-submit Timesheets Job
- Clean User Session Job
- Purge Picklist Data Job
- Convert Mixed Booking Status Job
- Copy Cost Plan of Record Charge Code with Cost Type Job
- Create Agile Central Investments
- Create and Update Jaspersoft Users Job
- Create Data Warehouse Trend Job
- Database Optimization Job
- Datamart Extraction Job
- Datamart Rollup - Time Facts and Time Summary Job
- Delete Investments and Time Reporting Periods Job
- Delete Duplicate Timesheets Job
- Delete Data Warehouse Trend Job
- Delete Log Analysis Data Job
- Delete Process Instance Job
- Enable Capitalization Job
- Execute a Process Job
- Generate Invoices
- Global Search Sync Job
- Import Financial Actuals Job
- Import Integration Mappings Job
- Import Integrations Job
- Index Contents and Documents for Searches Job
- Update Investment Allocations and Usage
- Load Data Warehouse Job
- Load Data Warehouse Access Rights
- LDAP - Synchronize New and Changed Users Job (On-Premise Only)
- LDAP - Synchronize Obsolete Users Job (On-Premise Only)
- Oracle Table Analyze Job (On-Premise Only)
- Parallel Job Processor
- Populate Timesheets Job
- Populate Users User License Type
- Post Actuals to Investment Job
- Post Incident Financials Job
- Post Timesheets Job
- Post to WIP Job
- Post Transactions to Financial Job
- Post WIP Actuals to Financial Plans Job
- PPM Customization Discovery Analysis Job
- Purge Documents Job
- Purge Audit Trail Job
- Purge Action Items Job
- Purge Financial Tables Job
- Purge Notifications Job
- Purge Report Output Job
- Purge Temporary Aggregated Data Job
- Rate Matrix Extraction Job
- Refresh Resource Directory Job
- Register New Investments for Enable Capitalization Job
- Remove Job Logs and Report Library Entries Job
- Remove Job Logs and Report Library Entries Job by Type
- Restore Domains Job
- SaaS User Sync Job
- Send Action Item Reminder Job
- Support Data Scan Job
- Synchronize Agile Central Job
- Synchronize Jaspersoft Roles Job
- Synchronize Mapped Information
- Synchronize Portfolio Investments Job
- System Maintenance Job
- Timesheet Integration Job
- Time Slicing Job
- Time Slicing Sync
- Tomcat Access Log Import/Analyze Job
- Update % Complete Job
- Update Aggregated Data Job
- Update Allocation from Estimates Job
- Update Data Warehouse Trend Job
- Update Earned Value and Cost Totals Job
- Update Earned Value History Job
- Update Estimates from Allocations Job
- Update Report Tables Job
- Validate Process Definitions Job

## Recommended Job Sequence

> [!tip]
> The following list shows a typical sequence for scheduled jobs in a standard Classic PPM production environment:
> 1. Time Slicing job (run every minute)
> 2. Time Slicing Sync job (runs every five minutes)
> 3. Investment Allocation job (run every day)
> 4. Rate Matrix Extraction (Incremental run) with options: a. Extract Cost for Schedulers (optional) b. Prepare Rate Matrix Data c. Update Rate Matrix Data d. Incremental
> 5. Post Timesheets
> 6. Purge Temporary Aggregated Data
> 7. Update Aggregated Data
> 8. Update Earned Value History
> 9. Create Earned-Value Snapshots
> 10. Update Business Objects Report Tables
> 11. If you use the financial posting module: a. Post Transactions to Financials b. Post to WIP c. Import Financial Actuals (Optional)

After the Rate Matrix Extraction job completes, perform the following actions to obtain rates:
- Run the Post Timesheets job
- Baseline a project or a task
- Run the Update Earned Value History job
- Open one or more projects in Open Workbench or Microsoft Project

> [!note]
> Do not run the following jobs during normal peak production business hours: Rate Matrix Extraction (Full run), Datamart Extraction, Datamart Rollup.

## Best Practices for Job Incompatibility

- **OOTB Jobs:** Mark out-of-the-box (OOTB) jobs as Incompatible only if recommended by Broadcom Support or if a consistent issue is identified when specific jobs run in parallel.
- **Custom Jobs:** Set custom jobs as Incompatible only if they update the same database tables as an OOTB job or another custom job.
- **Schedule Jobs:** Schedule jobs strategically, preferably outside of business hours, and avoid changing incompatibility settings unless it is necessary or advised by Broadcom Support.
- **Execution Intervals:** When scheduling multiple jobs, ensure sufficient intervals between job executions, especially for larger jobs, to maintain optimal performance. Marking long-running jobs as Incompatible with others can delay the execution of all remaining jobs.

---

## Job Descriptions

### Anonymize Personally Identifiable Information (PII)

This job permanently obfuscates attribute values that contain personal data for organizations with GDPR or other privacy policies. After running the job, the following attributes for designated resources are scrambled with serialized data:
- Resource Full Name
- Resource First Name
- Resource Last Name
- Resource E-mail

Custom date, string, number, and money attributes are also scrambled.

**Parameters:**
- **Anonymize Only Inactive Resources with Anonymize PII Selected:** Select this option to scramble the data for resources flagged with the Anonymize PII option on the Resource Settings page.
- **WARNING! Anonymize ALL Resources:** Select this option to permanently obfuscate the resource data for all internal resources.

---

### Auto-approve Timesheets Job

The Auto-approve Timesheets job automatically approves individual timesheets that meet the configured parameters and have a status of Submitted.

**Parameters:**

| Parameter | Description |
|---|---|
| Time Period | Select from Previous, Current, Next, or another Time Period |
| Resource OBS | Choose one or more Resource OBS units |
| OBS Mode | Choose OBS Mode. Default: UNIT ONLY |
| Resource Manager | Filter by assigned resource manager |
| Booking Manager | Filter by assigned booking manager |
| Team | Select the Team Investments |
| Primary Role | Filter by one or more roles |
| Resource | Select individual resources |
| Person Type | Choose from options like Contractor or Employee |
| Resource Active | Select All, Yes, or No |

**Restrictions:** The Auto-approve Timesheets, Populate Timesheets, Post Timesheet, and Timesheet Integration jobs are marked as incompatible and cannot be executed simultaneously.

**After Job Execution:** Verify that the qualifying timesheets are updated with the status Approved in the Timesheets.

---

### Autoschedule Project Job

This job creates or overwrites tentative schedules by automatically scheduling tasks that are based on task dependencies, constraints, priority order, and related date and resource logic. This job can be run concurrently with other instances of this job.

**Parameters:**

| Parameter | Description |
|---|---|
| Project | Defines the name of the investment to schedule |
| OBS Unit | Defines the specific OBS unit to schedule. If both a project and OBS unit are selected, the project is ignored |
| Autoschedule Date | Defines the date from which to schedule tasks |
| Ignore Tasks Starting Before | Defines the date before which tasks are ignored |
| Ignore Tasks Starting After | Defines the date to begin excluding all tasks |
| Resource Constraints | Indicates if this job considers resource availability. Default: Selected |
| Schedule from Finish Date | Indicates scheduling backwards from the finish date. Default: Cleared |
| Subnets | Indicates calculating the critical path for the entire project. Default: Cleared |
| Honor Constraints on Started Tasks | Indicates scheduling remaining work according to normal auto schedule logic. Default: Cleared |
| Schedule Assignments on Excluded Tasks | Indicates changing task assignment dates, as long as they stay within existing task start and finish dates. Default: Cleared |
| Start Successors on Next Day | Indicates starting all successor tasks on the next day. Default: Cleared |
| Publish After Scheduling | Indicates if changes made to the tentative plan are automatically published to the Plan of Record. When selected, the tentative plan is deleted and the project is unlocked. Default: Cleared |

---

### Auto-submit Timesheets Job

The Auto-submit Timesheets job automatically submits timesheets for individuals. This job processes timesheets that match selected parameters and have a status of "Open" or "Returned".

**Parameters:**

| Parameter | Description |
|---|---|
| Time Period | Select from Previous, Current, Next, or another Time Period |
| Resource OBS | Choose one or more Resource OBS units |
| OBS Mode | Choose OBS Mode. Default: UNIT ONLY |
| Resource Manager | Filter by assigned resource manager |
| Booking Manager | Filter by assigned booking manager |
| Team | Select the Team Investments |
| Primary Role | Filter by one or more roles |
| Resource | Select individual resources |
| Person Type | Choose from options like Contractor or Employee |
| Resource Active | Select All, Yes, or No |

**Restrictions:**
- The Auto-submit Timesheets job should not run simultaneously with any custom processes defined in Clarity.
- The Auto-submit Timesheets, Populate Timesheets, Post Timesheet, and Timesheet Integration jobs are marked as incompatible and cannot be executed simultaneously.

**After Job Execution:**
- If no errors are found, the timesheet is automatically submitted.
- Otherwise, Clarity sends a timesheet notification for errors; the Errors button appears in Timesheet for error details; the Has Errors field is checked for affected timesheets.

---

### Clean User Session Job

This job removes the session-based user data stored in the product for the resource logged in. The criteria for removing the data is the creation date/time of the data, with the length of the session expiration time must be before the date/time this job runs.

**Requirements:** None
**Restrictions:** This job cannot run concurrently with other jobs including other instances of this job.
**Parameters:** None

---

### Purge Picklist Data Job

This job removes purged picklist data that may have accumulated over time. The purge flag is set behind the scenes when specific delete picklist actions are taken.

**Requirements:** None
**Restrictions:** None
**Parameters:** None

---

### Convert Mixed Booking Status Job

This job converts all unlocked investment team allocations with mixed booking status to hard or soft. This job also disables the Allow Mixed Booking option.

> [!tip]
> Use this job if you have activated Clarity and are using the new Staffing (Resource Management) features. The new features do not support mixed booking allocations. The job is inactive by default. Activate and run this job so users can use the new features.

**Requirements:** None
**Restrictions:** None

**Parameters:**

| Parameter | Description |
|---|---|
| Target Booking Status | Soft: Any planned allocation on a project remains unchanged and the hard allocation is removed (recommended). Hard: Any planned allocation on a project remains unchanged and the hard allocation is updated to match the planned allocation. Mixed: The mixed booking allocations are left unprocessed (not recommended). |

---

### Copy Cost Plan of Record Charge Code with Cost Type Job

This job creates a copy of a plan of record and adds Cost Type to the existing grouping attributes. This job is intended to process only investments that were created before Release 13.2 or that have been enabled for capitalization.

> [!note]
> The statistics of a job execution are printed in a BG log file for the job. The log file contains information such as the number of processed, skipped, or failed investments.

**Requirements:** The Enable Capitalization job must be run on the investment before you can select the investment for this job.

**Restrictions:** If your investment cost plans contain a large amount of detail, process a few investments at a time.

**Parameters:**

| Parameter | Description |
|---|---|
| Investment OBS | Specifies the OBS whose investments you want to process |
| Investment | Specifies the individual investments that you want to process |
| Capital Charge Code | Specifies the charge codes to designate as Capital cost type |
| Operating Charge Code | Specifies the charge codes to designate as Operating cost type |

---

### Create Agile Central Investments

The job creates Agile Central investments in CA Agile Central from Clarity projects and associates them to the projects.

**Criteria for eligible projects:**
- Active project
- Not a template
- Synchronize flag is checked
- Associated to an agile system
- Integration type is Investment
- The Create Agile Central Investment field is not blank

**Requirements:** Assign the following access rights to the integration owner: Agile Central Investment - Create; Agile Central Investment - Edit All

**Parameters:**
- **Project:** Specifies the individual projects that you want to process. If no projects are selected, all projects meeting the required criteria are processed.

---

### Create and Update Jaspersoft Users Job

Run this job after creating or updating Classic PPM users with Advanced Reporting access rights to synchronize them with Jaspersoft.

This job:
- Creates Advanced Reporting users if they do not already exist in Jaspersoft
- Passes and updates user properties from Classic PPM to Jaspersoft
- Disables users in Jaspersoft if they are inactive or locked in Classic PPM
- Reactivates users if a Jaspersoft superuser had disabled or deleted a valid Classic PPM user

> [!tip]
> Schedule this job to execute nightly (off peak hours). Select the Include Inactive and Locked Users checkbox to synchronize all Jaspersoft users (active, inactive and locked). Run this job before you run the Synchronize Jaspersoft Roles job.

> [!note]
> The Jaspersoft User ID field is mapped to the User Name field in Classic PPM. In certain situations, such as when the User Name in Classic PPM has special characters, or if you change the User Name, the User Name value in Classic PPM and the User ID value in Jaspersoft do not match.

---

### Create Data Warehouse Trend Job

This job creates new snapshots of your trending data.

**Requirements:** Run the Load Data Warehouse job before running this job.

**Parameters:**

| Parameter | Description |
|---|---|
| Trend Type | All Trend Tables, Monthly Trend Tables, Summary Trend Tables, or Fiscal Trend Tables |
| Trend Period | Use this field to populate a year of periods or a single period of data for fiscal and monthly trend types |
| Trend Year | If the Trend Type is set to Monthly Trend Tables, a snapshot is taken for that year. Default: current year |
| Trend Name | Name for the trend. If blank, defaults to YYYY-MM-DD:[Trend_key] |

---

### Database Optimization Job

Maintain the structural integrity of Clarity data using the Database Optimization job. This job targets metadata — including localized strings, instance security rights, and page instances — to purge obsolete records and prevent "ghost" data accumulation.

**Maintenance Activities:** Caption Maintenance, Instance Rights Maintenance, Page Instances Maintenance

**Parameters:**

| Parameter | Description |
|---|---|
| Enable Caption Maintenance | Manage the lifecycle of localized UI strings |
| Caption Language | Specify which language captions the system processes |
| Delete Orphaned Captions | Identify and remove UI captions no longer associated with a valid attribute, object, or lookup value |
| Caption Limit | Set the maximum number of captions to process in a single run |
| Clean Orphaned Instance Rights | Purge access rights records that reference deleted object instances |
| Clean Orphaned Instance Rights (Limit) | Specify the maximum number of orphaned instance rights to delete in one execution |
| Clean Page Instances | Delete temporary user session page configurations and obsolete cached page instances |
| Clean Page Instances (Limit) | Specify the maximum number of page instances to purge per run |

**Restriction:** Do not execute the Database Optimization and System Maintenance jobs simultaneously.

---

### Datamart Extraction Job

This job extracts data from the transaction database tables and stores it in the legacy datamart reporting tables.

> [!note]
> For Microsoft SQL Server with the SQL Server Agent enabled, add the Classic PPM administrator account to the SQLAgentUserRole role to run datamart extraction jobs.

**Requirements:**
- (Recommended) Run this job after the Time Slicing job and after the Rate Matrix Extraction job.
- Define daily time slice definitions with a start date at least three months before the current date.
- Configure Datamart settings: Datamart Currency, Datamart Entity, Datamart Extraction Options, Project OBS Mapping, Resource OBS Mapping.

**Restrictions:** This job cannot run concurrently with itself or any of the following jobs: Datamart Rollup - Time Facts and Time Summary, Delete Investments and Time Reporting Periods, Import Financial Actuals, Post Timesheets, Post Transactions to Financial, Recalculate Cost of Capital Fields, Time Slicing.

**Parameters:**

| Parameter | Description |
|---|---|
| Extract Only OBS | Specifies that the job extracts only the OBS data if selected |
| Extract Only Calendars | Specifies that the job extracts only the calendar data if selected |

---

### Datamart Rollup - Time Facts and Time Summary Job

This optional job populates the following time facts and time summary tables for resources who want to develop custom reports: NBI_PM_PT_FACTS, NBI_FM_PT_FACTS, NBI_RT_FACTS, NBI_PM_PROJECT_TIME_SUMMARY, NBI_FM_PROJECT_TIME_SUMMARY, NBI_RESOURCE_TIME_SUMMARY.

**Restrictions:** Multiple instances of this job cannot run concurrently. This job cannot run with: Datamart Rollup - Time Facts and Time Summary, Datamart Extraction, Delete Investments and Time Reporting Periods.

**Parameters:** None

---

### Delete Investments and Time Reporting Periods Job

This job (also called the Delete Investments or Delete Projects job) deletes investments that were marked for deletion and time entries for specific time reporting periods that were marked for deletion.

> [!note]
> Grant the Job - Run access right for this job to only the selected users who can govern the process of deleting the investments. Before running the job, review all items marked for deletion and backup the system.

**Restrictions:** This job cannot run concurrently with other instances of itself or the following jobs: Import Financial Actuals, Post Timesheets, Post Transactions to Financial, Time Slicing.

**Parameters:**

| Parameter | Description |
|---|---|
| Delete Marked Investments with Timesheet and Transaction Data | When selected, the job deletes previously marked inactive investments that have timesheets, financial transaction data, or both |

---

### Delete Duplicate Timesheets Job

This job helps the administrator identify the duplicate timesheets associated with a single time period and a resourceID and removes them from the system. Can be executed manually or via a pre-determined schedule.

---

### Delete Data Warehouse Trend Job

This job deletes previous snapshots of your trending data.

**Parameters:**

| Parameter | Description |
|---|---|
| Trend | Select one trend. All its snapshots and trending data are deleted |
| Delete Trends Created Prior To | If a Specific Date or Relative Date is chosen, all trends and snapshots are deleted where the Trend Start Date is before or equal to the date |

---

### Delete Log Analysis Data Job

This job removes the Classic PPM log analysis-related data. This job is scheduled automatically to run at 1:00 AM each day.

**Requirements:** None
**Restrictions:** None

**Parameters:**

| Parameter | Description | Default |
|---|---|---|
| Log retention in days | Specifies the number of days that data is retained in the tables related to analyzed access logs | 30 days |
| Session token retention in days | Specifies the number of days that data is retained in the table LOG_SESSIONS | 14 days |

---

### Delete Process Instance Job

This job deletes process instances with a status of Done or Aborted.

**Requirements:** Run the Delete Process Instance job before you upgrade.

**Restrictions:** This job cannot run concurrently with other instances of this job.

**Parameters:**

| Parameter | Description |
|---|---|
| Process Name | Defines the name of process instance to delete |
| Process Instance Status | Defines the status of the process instances to delete: Aborted or Done |
| Finish Date From | Defines the date from which all completed process instances are deleted |
| Finish Date To | Defines the date to which all process instances are deleted. Default: Start of Previous Quarter |
| Object Type | Defines the object type of process instance to delete |
| Initiated By | Defines the name of the user who initiated the process instance |
| Initiator OBS | Enter the OBS name or use the search tool to select the OBS name or OBS unit |

---

### Enable Capitalization Job

This job enables you to set expenses in investments that were created before Release 13.2 as either Capital or Operating.

**What the Job Does:**
- Sets the investment cost type to either Capital or Operating based on charge codes
- Sets the task cost type to Capital or Operating for each task according to charge codes
- Sets the transaction cost type for actual posted WIP transactions
- Sets the team Capitalization % value to the value you enter in the Capitalization Percent parameter

**Restrictions:** The length of time the job runs depends on the amount of data. If investments have a great amount of data, limit the number of investments for a job run. Run the job immediately after the upgrade before any modifications.

**Parameters:**

| Parameter | Description |
|---|---|
| OBS Unit | Specifies the OBS units whose investments you want to process |
| Investment | Specifies the individual investments to enable |
| Capital Charge Code | Specifies the charge codes to designate as Capital cost type |
| Operating Charge Code | Specifies the charge codes to designate as Operating cost type |
| Capitalization Percent | Specifies the amount of expense for an investment that is designated capital expense |

---

### Execute a Process Job

This job executes a process that is not associated with any object.

**Requirements:** None
**Restrictions:** This job can only execute processes you have access to. It can only execute non-object based processes (that is, processes without a primary object).
**Parameters:** Process ID — The ID of the process to execute.

---

### Generate Invoices

This job takes a set of unprocessed transactions, matches them with best-fitting chargeback rules from the investment hierarchies, and applies the rule to generate chargeback transactions. An invoice header is generated for every unique combination of department and fiscal time period.

**Requirements:** Set up a financial structure, define credit and overhead rules, define investment debit rules, post the WIP transactions, optionally run the Purge Temporary Aggregated Data job, and run the Update Aggregated Data job.

**Restrictions:** This job cannot run concurrently with other instances of this job.

**Parameters:**

| Parameter | Description |
|---|---|
| Entity | Defines the entity for which to generate invoices |
| Regenerate | All: Regenerates the chargeback transactions by applying existing rules. New Transactions/Adjustments: Processes only new unprocessed transactions or adjustments |
| Lock/Submit | Indicates if all invoices from prior periods are automatically locked and submitted |
| Override Manual Locks | Indicates if this job can temporarily unlock previously generated invoices and regenerate them |

---

### Global Search Sync Job

The Global Search Sync job synchronizes the search tables with the latest searchable attribute data.

**Parameters:**

| Parameter | Description |
|---|---|
| Select Objects | Allows the admin to run the job for specific objects. If no selection is made, the job runs for all objects |
| Full Load | Triggers a resynchronization of all selected attributes. Default: unchecked (only changes since last successful run) |

> [!note]
> The Global Search Sync job should be executed regularly to ensure search results remain up-to-date. The job only captures attribute changes made through the Clarity application. Deleted attributes will not be removed from the search results until a Full Load is executed.

---

### Import Financial Actuals Job

This job updates task assignments with the actuals entered in financial transactions and WIP adjustments.

**Requirements:** None
**Restrictions:** This job cannot run concurrently with other instances of itself or the Delete Investments and Time Reporting Periods job.
**Parameters:** None

---

### Import Integration Mappings Job

The Import Integration Mappings job fetches the Milestones, Investment Categories, Date, and Project lookups from Rally and stores them in Clarity. The job also synchronizes Financial Work Type (FWT) Task Mappings between Clarity and Rally.

**Parameters:**
- **Integration Mapping:** Provide the integration mapping instance.

---

### Import Integrations Job

Import Integrations job imports Rally Portfolio Items and Teams for Frictionless Cost Accounting.

**Parameters:**
- **Integration:** Provide the integration instance.

---

### Index Contents and Documents for Searches Job

This job indexes the search content (such as activities and action items) and documents.

**Requirements:** None
**Restrictions:** This job cannot run concurrently with other instances of this job.
**Parameters:** None

---

### Update Investment Allocations and Usage

This job (previously called the Investment Allocation job) updates labor allocations, Actuals, ETC, Total Usage, Baseline Usage and Baseline Variance on Projects, Custom Investments and NPIOs.

**Fields Updated:** Actuals Sum for Labor Resources, Actuals (time-varying), ETC Sum for Labor Resources, ETC (time-varying), EAC Sum for Labor Resources, Total Usage (time-varying), Current Baseline fields, Allocation (time-varying), Hard Allocation (time-varying).

> [!note]
> When you run the Investment Allocation job in between incremental runs of the Rate Matrix Extraction job, the incremental option behaves in the same manner as a full execution.

**Requirements:** None
**Restrictions:** Incompatible with the Load Data Warehouse job.
**Parameters:** Investment name, Manager name, OBS and OBS Mode.

---

### Load Data Warehouse Job

The Load Data Warehouse Job extracts data from the transactional database, transforms the data into a denormalized format, and loads the data into the data warehouse.

> [!note]
> The Load Data warehouse job does not consider the Lock flag associated with a project. Hence, if a project is locked, its content will be loaded into the Data Warehouse for both full and incremental runs.

**Requirements:** Run this job with the Full Load option selected after upgrades, adding a new language, deleting an attribute or unselecting Include in Data Warehouse, changing the entity for fiscal periods, changing timeslice dates, changing the First Day of Work Week, or changing any Data Warehouse System Options.

**Restrictions:** While the Load Data Warehouse job runs, any concurrent user edits may temporarily be excluded from the data warehouse.

**Parameters:**

| Parameter | Description |
|---|---|
| Full Load | Rebuilds the data warehouse from scratch if selected. If not selected, this job only looks for incremental changes since the last time you ran it. Default: incremental |

> [!warning]
> If you are running this job for the first time or after a failed run (once corrected), select the Full Load parameter. For subsequent runs, you can run an incremental load by leaving the Full Load parameter unselected.

**Database Size and Job Frequency:**
- **Full loads** recreate the data warehouse from scratch. Run once a day during non-peak hours (or once a week for global enterprises).
- **Incremental loads** can be run more frequently. The best way to determine the frequency is to run the incremental load and see how long it takes. Recommended: every 3–4 hours depending on database size.

---

### Load Data Warehouse Access Rights

The job extracts access rights for investments and resources from the Classic PPM database and loads them into the Classic PPM Data Warehouse.

Run this job after running the Load Data Warehouse job and after running the Time Slicing job. You do not need to run this job each time after you run the Load Data Warehouse job.

---

### LDAP - Synchronize New and Changed Users Job (On-Premise Only)

This job synchronizes users that were added or modified in the LDAP server with the Classic PPM user table.

**Requirements:** Configure LDAP to run this job. You must be an authenticated LDAP user to view this report.
**Restrictions:** This job cannot run concurrently with any other instances of this job.
**Parameters:** No job parameters. Uses CSA settings.

---

### LDAP - Synchronize Obsolete Users Job (On-Premise Only)

This job deactivates users who are marked as inactive, or removed from the LDAP server through the Classic PPM user table.

**Requirements:** Configure LDAP to run this job.
**Restrictions:** This job cannot run concurrently with other instances of this job.
**Parameters:** No job parameters. Uses CSA settings.

---

### Oracle Table Analyze Job (On-Premise Only)

This job refreshes statistics that are used to determine the best path or execution for a query.

**Requirements:** Clarity must be configured with an Oracle database. Run this job at least once a week during off-peak hours.

**Restrictions:** You cannot run multiple concurrent instances of this job.
**Parameters:** None (starting with Clarity 15.4.1, the legacy Schema Name and Estimate Percent parameters were removed; the job now uses AUTO_SAMPLE_SIZE).

---

### Parallel Job Processor

> [!note]
> This job is not available for general use. It is restricted to certified partners, support, and services personnel.

This job divides the workload in a target job into multiple threads inside the same single job. It processes the separate threads and units of work in parallel to save time.

**Requirements:** The job requires a large number of work units to justify its configuration and use. The units of work cannot be dependent on each other.

**Restrictions:** This job is limited to authorized administrators only. Cannot run concurrently with other instances of this job.

**Parameters:**

| Parameter | Description |
|---|---|
| Pre-Processor | Implements the JobPreProcessor interface; gets input data and converts it into different units of work to process in parallel |
| Post-Processor | Implements the JobPostProcessor interface; analyzes results and takes actions, like reporting |
| Input Parameters | The input data can contain different types of objects. Default implementation reads XOG import files |
| Output Parameters | The output file location for the work units after processing |
| Batch Size | Used to process units of work in smaller segments. Default: one tenth of the total number of input items |

---

### Populate Timesheets Job

The Populate Timesheets job automatically populates timesheets based on assigned tasks.

**Restrictions:** The Timesheet Integration Job and the Populate Timesheets Job are incompatible and cannot be executed simultaneously.

**Parameters:**

| Parameter | Description |
|---|---|
| Time Period | Specify the time period for which timesheets will be populated |
| Population Method | Add Assigned Tasks: Populate with assigned tasks. Add Assigned Tasks (with ETC): Populate with assigned tasks and ETC |
| Override Time Entries | Select to overwrite manually edited data. Leave unchecked to retain manually edited data |
| Investment Type | If selected, the job modifies time entries only related to that type |
| Investment to Exclude | If specified, the job excludes time entries linked to that investment |
| Team | Select the team to populate timesheets for its resources |

---

### Populate Users User License Type

Use this job to update the License Type attribute in the Resources and Users grids based on user access rights and security group memberships.

**Parameters:**

| Parameter | Description |
|---|---|
| Resource | Select one or more individual resources to update |
| Resource OBS | Select one or more Resource OBS units |
| OBS Mode | Choose the OBS mode. Default: UNIT ONLY |

> [!note]
> The job runs daily to keep license type information current. You can also run it on demand. Only users with no access rights will have a blank License Type after completion.

---

### Post Actuals to Investment Job

The Post Actuals to Investment job generates the investment Actual and Forecast time-scaled varying (TSV) data in the investment and hierarchy grids.

**Requirements:** Set up Financial Management and Timesheets. Run the Post to WIP job before running this job.
**Restrictions:** This job cannot run concurrently with other instances of this job.

**Parameters:**

| Parameter | Description |
|---|---|
| Investment OBS | Specifies the OBS whose investments you want to process |
| Investment | Specifies the individual investments that you want to process |
| To Investment Last Updated Date | Defines the to-date to which financial details have been updated |
| From Investment Last Updated Date | Defines the from-date to which financial details have been updated |
| Update Only Active Investments | Updates the planned, actual, and forecast TSV data of the active investments |

---

### Post Incident Financials Job

This financial processing job posts the transactions of incident effort entries to the general ledger account.

**Requirements:** Enter the effort for the incident. Only a team member on an investment can enter and submit effort for incidents associated to the investment. The investment must be financially active.

**Restrictions:** This job cannot run concurrently with other instances of this job.

**Parameters:** Effort From Date, Effort To Date.

---

### Post Timesheets Job

The Post Timesheets job is a background process that compiles and posts the actual values into the project plan. It generates the timesheet for the resource assignment based on the actual hours approved.

**This job does the following:**
- Updates the resource assignment and the Transaction Import table with the actual values on the timesheets. The timesheet status changes to "Approved".
- Advances Estimate To Complete (ETC) past the time period for the posted timesheets on all task assignments of the corresponding resources.

**Requirements:** Set up Timesheets. Run the Rate Matrix Extraction job to ensure the rates and costs are current.

**Restrictions:** This job cannot run concurrently with other instances of itself or the Delete Investments and Time Reporting Periods job.

**Parameters:**
- **Location:** You can process timesheets based on the location of the resource.

---

### Post to WIP Job

Use this job to automate Post to WIP functionality and ensure organizational financial information is up-to-date on a regular basis.

**Parameters:**

| Parameter | Description |
|---|---|
| Investment OBS | Displays the Department OBS or Location OBS |
| Investment | Displays one or more investments from a list of all the financially active investments |
| Resource | Displays one or more financially enabled resources (not roles) |
| Entry Type | Displays the type of entries to include: All, Imported, PPM, Voucher Expense, or Voucher Other |
| Transaction Type | Displays one or more types of transactions to include: Labor or Expense |
| Voucher Entry Number | Displays one or more voucher entries based on your selection in the Entry Type field |
| From Transaction Date | Beginning date to define an optional range of time for filtering transactions |
| To Transaction Date | Ending date to define an optional range of time for filtering transactions |
| Post Options | Indicates whether the job recalculates the data using updated exchange rates before it is posted |

**Restrictions:** The Post to WIP job and Post to WIP page are not compatible. Use one or the other but not both at the same time.

---

### Post Transactions to Financial Job

This job verifies and transfers data from the Transaction Import tables to the Financial Management tables.

**Requirements:** Set up Financial Management and Timesheets.
**Restrictions:** This job cannot run concurrently with other instances of itself or the following jobs: Datamart Extraction, Delete Investments and Time Reporting Periods.

**Parameters:**

| Parameter | Description |
|---|---|
| Transaction From Date | Defines the from date to which transactions are posted for this job to process |
| Transaction To Date | Defines the to date to which transactions are posted. If not entered, the job posts transactions up to the current date |

---

### Post WIP Actuals to Financial Plans Job

The Post WIP Actuals to Financial Plans job posts Actuals and Forecast attributes to Cost Plans and Budgets after they are posted to WIP. This applies to Projects, Ideas, Custom Investments and Team Investments in Clarity.

> [!note]
> Prior to Clarity 16.4.0, this job was named "Update Financial Plan Actuals and Forecast".

**Requirements:** Run the Post to WIP job before running this job.

**Parameters:**

| Parameter | Description |
|---|---|
| Investment OBS | Indicates the investment OBS Unit to process |
| Investment | Defines the name of the investment on which this job runs |
| Update Only Plan of Record | Updates the actuals and forecast for the cost plan of record. Default: selected |
| Update Only Approved Budget | Updates the actuals and forecast of the approved budget plan. Default: selected |
| Update Only Active Investments | Updates the actuals and forecast of the active investments. Default: selected |
| From Financial Plan Last Updated Date | Defines the from-date to which financial plan has been updated |
| To Financial Plan Last Updated Date | Defines the to-date to which financial plan has been updated |

---

### PPM Customization Discovery Analysis Job

This job is for use by Broadcom to analyze customizations to determine environment complexity. It generates a report designed for Broadcom Global Delivery teams and advanced administrators when preparing to migrate an on-premise environment to a SaaS environment.

**Requirements:** Select the Active check box for this job to prepare the report.

**Parameters:**

| Parameter | Description |
|---|---|
| Obfuscate Email Addresses | When selected, e-mail addresses in the Excel output are obfuscated (e.g., supervisor1@ca.com appears as su*********@ca.com) |
| Recipient Email Address | Enter one or more e-mail addresses separated with a comma or semi-colon |

---

### Purge Documents Job

This job permanently deletes documents.

**Requirements:** As an administrator, back up all documents that are stored in the product or in the Knowledge Store.
**Restrictions:** This job cannot run concurrently with other instances of itself.

**Parameters:** Choose from options including: Purge All Documents for the Following Objects; Purge Documents and Versions Not Accessed for [n] Days; Retain the [n] Most Recent Versions and Purge the Prior Versions; targeted at All Projects, Project OBS, Specific Project, All Resources, Resource OBS, Specific Resource, All Companies, Company OBS, Specific Company, or Knowledge Store.

---

### Purge Audit Trail Job

This job removes all audit trail records according to specified job settings.

**Parameters:** None

---

### Purge Action Items Job

This job enables you to directly delete and control the deletion of Action Items by Type, Status (Open or Closed), and Created Date range.

> [!note]
> This job does not delete action items if they are associated with any process instances that are not completed or canceled.

**Parameters:** None

---

### Purge Financial Tables Job

Use the Purge Financial Tables Job to permanently delete all financial transactions associated with a specified investment.

> [!note]
> This job does not delete chargeback transactions or chargeback invoice transactions.

**Requirements:** (Recommended) Back up all financial transactions before running this job. Grant the Financial Maintenance - Financial Management access right. Verify that the project has a status of "Closed" for the transactions you want to purge.

**Restrictions:** This job cannot run concurrently with other instances of this job.

**Parameters:**
- **Investment:** Defines the name of the investment on which this job runs.

---

### Purge Notifications Job

This job performs a bulk deletion of notifications.

**Requirements:** None
**Restrictions:** This job cannot run concurrently with other instances of this job.

**Parameters:**

| Parameter | Description |
|---|---|
| Notification Type | Defines the notification type to delete (e.g., Timesheet). Select multiple types or Select All |
| From Created Date | Start date of the range during which the notifications were created |
| To Created Date | End date of the range during which the notifications were created |
| Assignee | Defines the resource who receives the notifications |
| Assignee OBS | Defines the OBS of the resource who receives the notifications |

---

### Purge Report Output Job

This job permanently deletes the report output from the document management system.

**Parameters:**

| Parameter | Description |
|---|---|
| Format | Mandatory. Values: ALL, PDF, PPTX, XLSX. Default: ALL |
| Report | Report name given to the saved report output |
| From Run Date | Start date of the date range for permanent deletion |
| To Run Date | End date of the date range for permanent deletion |
| Run By | Search for the user who executed the job |

---

### Purge Temporary Aggregated Data Job

This job cleans up the data that is created as a part of computing aggregated costs for generating chargeback invoices. The job is scheduled to run once a day automatically, but can be run on demand too.

**Requirements:** Run this job prior to running the following jobs: Update Aggregated Data, Generate Invoices.
**Restrictions:** This job cannot run concurrently with other instances of this job.

**Parameters:**
- **Purging Option:** Indicates if all temporary data or outdated data has been cleared. Clearing all temporary data cleans up all the temporary as well as cached data. Clearing outdated temporary data preserves the cached data that is still valid and deletes other temporary data.

---

### Rate Matrix Extraction Job

This job extracts rate matrix information and refreshes the rate matrix extraction tables. Run this job each time the rate matrix and the financial properties of a project change.

> [!tip]
> We recommend scheduling the Rate Matrix Extraction job using the Incremental Update only option at regular intervals. This practice reduces the need for the application to extract the rates in real time.

**Requirements:** Set up a default matrix or a matrix associated with the entity or project.

**Restrictions:** This job cannot run concurrently with other instances of itself. The Datamart Extraction job utilizes some of the data that the Rate Matrix Extraction job creates; therefore, run this job successfully before running Datamart Extraction, Post Timesheets, and Update Earned Value and Costs Totals jobs.

**Parameters:**

| Parameter | Description | Default |
|---|---|---|
| Extract Cost and Rate Information for the Scheduler | Extracts cost and rate information for a desktop scheduler (Open Workbench or Microsoft Project). Impacts performance | Cleared |
| Prepare Rate Matrix Data | Adds updated rate matrix data to a temporary table. The data in the NBI_PROJ_RES_RATES_AND_COSTS table stays intact | Cleared |
| Update Rate Matrix Data | Copies updated rate matrix data from the temporary table to the NBI_PROJ_RES_RATES_AND_COSTS table. Rate matrix data is not available during this step | Cleared |
| Incremental Update Only | Rate extraction occurs only for current incremental project and NPIO updates, not a full update | Selected |
| Team Rates Only | Populates only the rates related to the team; does not extract task assignment rates | Cleared |

---

### Refresh Resource Directory Job

The Refresh Resource Directory job ensures that the Resource Directory is updated with the latest data, including updates to Resource Manager or Booking Manager attributes.

**Parameters:**
- **Skip Circular Report:** If enabled, the job will not generate the circular reference report.

**Key Points:**
1. Ensure the job has completed at least once to display the respective resources in the Resource Directory.
2. The job detects circular references related to the Resource Manager or Booking Manager and generates a downloadable CSV report with details.
3. After performing a bulk update via XOG or API, run this job to maintain accurate hierarchy data.

> [!warning]
> The presence of any cyclic references, such as mutual reporting relationships, in the system will prevent resource display. A "No Resources" message will appear until the references are resolved and the refresh job is executed.

---

### Register New Investments for Enable Capitalization Job

This job identifies investments that would otherwise be excluded and registers them for the Enable Capitalization job. After processing investments, the Enable Capitalization job sets each investment to S (Successfully Processed) or F (Failed). Investments with a status of S are not considered by the Enable Capitalization job again.

**Requirements:** To make post-upgrade bulk updates: (1) Perform a Classic PPM upgrade; (2) Update the Cost Type and Team Capitalization % attributes; (3) Run the following jobs in sequence: Register New Investments for Enable Capitalization, Enable Capitalization, Copy Cost Plan of Record Charge Code with Cost Type.

---

### Remove Job Logs and Report Library Entries Job

This job removes old job log entries and report library entries from the database after they have exceeded a specified number of days.

**Requirements:** None
**Restrictions:** You cannot run this job concurrently with any other instance of the Remove Job logs job.

**Parameters:** Report age for delete, Job age for delete.

---

### Remove Job Logs and Report Library Entries Job by Type

Similar to the Remove Job Logs and Report Library Entries job, but provides administrators more control over what logs should be deleted.

**Parameters:**
- **Job/Report Type:** Accepts multiple job types.
- **Age to Delete:** Age of entries.

---

### Restore Domains Job

When upgrading Jaspersoft and importing advanced reporting content, the domain data can become corrupted. Run the Restore Domains job to restore the domains to their original state with any custom objects and attributes.

**Requirements:** None
**Restrictions:** None
**Parameters:**
- **Content Pack:** Specifies the add-in that contains the domain data that you want to restore (e.g., PMO Accelerator).

---

### SaaS User Sync Job

The SaaS User Sync job enables Clarity SaaS customers to synchronize Clarity users with Broadcom Okta and assign them to the appropriate Okta groups.

**Requirements:** None
**Restrictions:** None

**Parameters:**

| Parameter | Description |
|---|---|
| Email Address (Required) | Specify the user name of the users that need to be created in Okta. Wildcards supported. Example: *@avago.com or * (all users) |
| Notify Users (Required) | When set to "Yes", Okta registration is sent to the user (unless their email domain is enabled for Federated SSO) |
| Full Sync | When selected, considers users matching the email address criteria without regard to when the job was last executed |

---

### Send Action Item Reminder Job

Use this job to send action item reminder alerts, SMS, or email messages.

**Requirements:** One or more action items with reminders already set.
**Restrictions:** This job cannot run concurrently with other instances of this job. The job does not send reminders for action items that have already been completed.
**Parameters:** None. The job uses the properties of the action items.

---

### Support Data Scan Job

The Support Data Scan job provides performance diagnostics and data integrity metadata for analysis by Broadcom Support technicians.

The following requests are available for execution:
- **general_perf_check:** Performs a check to determine if areas of the product are configured in a sub-optimal manner.
- **orphan_record_check:** Scans some common tables to determine if there are orphan records.
- **scan_large_tables:** Performs an analysis on some common tables to determine their record counts.
- **oom_perf_check:** Examines the configuration of the environment for areas that can contribute to high memory usage.

> [!note]
> Run these requests only under the direction of Broadcom Support.

---

### Synchronize Agile Central Job

This job processes all projects that are synchronized with Rally investments or portfolio items. It determines whether the Last Agile Sync Date for tasks in PPM is before the Last Updated Date for portfolio items and user stories in Agile Central.

**Requirements:** The Agile add-in must be installed.
**Restrictions:** The job cannot run concurrently with any other instance of itself or the following jobs: Post Timesheets, Time Slicing.

**Parameters:**

| Parameter | Description |
|---|---|
| Date Window | Defines the date window for the updated projects to synchronize with CA Agile Central |
| Project Status | Defines the status of the projects to synchronize (e.g., All Projects) |
| Synchronize Projects where Work Status is Complete | Specifies whether to synchronize only the completed projects |

---

### Synchronize Jaspersoft Roles Job

This job ensures that users of Classic PPM groups that have advance reporting rights and exist in Jaspersoft are matched to the corresponding roles in Jaspersoft.

**Requirements:** In Classic PPM, assign Advanced Reporting access rights to each report user. Add report users to active groups. Select the Allow Jaspersoft Role Synchronization check box on the System Options page. Run the Create and Update Jaspersoft Users job before running this job.

**Restrictions:** None
**Parameters:** None

---

### Synchronize Mapped Information

The Synchronize Mapped Information job enables administrators to synchronize the mapped information between Clarity and Rally.

**Requirements:** None
**Restrictions:** None

**Parameters:**

| Parameter | Description |
|---|---|
| Full Load | When selected, all records in Clarity and Rally associated with the integration mapping are synchronized regardless of when both systems were last updated |
| Sync Children of Parent | Automatically includes all mapped children of Portfolio Items in the synchronization process |

---

### Synchronize Portfolio Investments Job

This job synchronizes the portfolio planning data with the latest data from the actual investments. The update is based on a sync schedule that the portfolio manager defines in the portfolio properties.

**Requirements:** None
**Restrictions:** None
**Parameters:** None

---

### System Maintenance Job

Manage application background health by cleaning service-related data, Data Warehouse (DWH) tracking information, and process engine error history.

**Cleanup Activities:** PPM Broker Table Maintenance, Data Warehouse (DWH) Tracker Table Maintenance, BPM (Process Engine) Errors Table Maintenance.

**Parameters:**

| Parameter | Description |
|---|---|
| Maintain PPM Broker Service | Enable to clean PPM Broker tables that store temporary session and service data |
| PPM Broker Data Retention (days) | Specify the retention period for broker data. Values greater than five reset to the default |
| Clean Data Warehouse Tracker Logs | Remove logs generated during DWH synchronization |
| Data Warehouse Instance Sync | Synchronize instance-level tracking records to align the DWH with the transactional database state |
| Data Warehouse Tracker Logs Retention (days) | Define the number of days to retain DWH ETL and tracker logs before purging |
| Clean Process Error Logs | Purge historical records of failed or errored background processes |
| Process Error Logs Retention (days) | Determine the audit period for retaining process error logs before deletion |
| Clean Orphaned Process Error Logs | Remove error logs no longer associated with an existing process instance |
| Clean Orphaned Process Error Logs (Limit) | Set the maximum number of orphaned records to delete per execution |

**Restriction:** Do not execute the System Maintenance and Database Optimization jobs simultaneously.

---

### Timesheet Integration Job

The Timesheet Integration job enables seamless synchronization of timesheet details between Clarity and Rally.

**Restrictions:** The Timesheet Integration Job and the Populate Timesheets Job are incompatible and cannot be executed simultaneously.

**Parameters:**

| Parameter | Description |
|---|---|
| Integration Type | Choose the integration type |
| Time Period | Choose the time period (Previous Period and Current Period are available) |
| Team Investments | Choose the team investment to determine the specific team assignments |

---

### Time Slicing Job

This job processes all configured time slices and updates discrete transactional data for the actual task assignment values, Estimate To Complete (ETC) and baselines, time sheet actuals, team and assignment data from a scenario, resource allocations to projects and resource availability.

**Requirements:** None
**Restrictions:** This job cannot run concurrently with other Time Slicing jobs. Other instances of this job cannot exist.
**Parameters:** None

---

### Time Slicing Sync

The Time Slicing Sync job synchronizes and rebuilds the SQLcurve data that underpins timephased views in Clarity, such as per-period cost, work, allocation, and availability.

**Parameters:**

| Parameter | Purpose | Default | Optimized Value |
|---|---|---|---|
| Parallel Processing Thread Count | Controls concurrency | 1 Thread | 2–3 Threads (do not exceed 3 to avoid diminishing returns and table locking) |
| Process Number of Rows per Batch | Balances memory usage versus speed | 100 rows | 500 rows (revert to 100 if you experience Out of Memory errors or table locking) |
| Maximum Runtime (minutes) | Ensures the job yields results after a set time | Blank (no limit) | 10 to 30 minutes (schedule the job more frequently with a short runtime cap) |
| Number of Prior Months for Limiting Investment Data | Determines the 1st day of the month prior to the current date for processing active investments | 60 months | 36 to 60 months |
| Number of Prior Months for Limiting Timesheet Data | Determines a relative date for processing timesheet entries | 24 months | 12–24 months |

**Requirements:** None
**Restrictions:** This job cannot run concurrently with other scheduled Time Slicing Sync jobs and scheduled Time Slicing jobs.

---

### Tomcat Access Log Import/Analyze Job

This job imports Tomcat access log files from the local Classic PPM environment, then stores and summarizes the data in designated tables (LOG_DETAILS, LOG_SUMMARY, LOG_FILES, LOG_REPORTDEFS).

**Requirements:** None
**Restrictions:** None
**Parameters:**
- **Log Date:** Specifies the date for the access logs that are imported and analyzed. Default: yesterday.

---

### Update % Complete Job

The Update % Complete job updates the percent (%) complete values whenever you change project or task data that affects the percent complete calculation. This job is only run if the % Complete Calculation Method is set to Duration or Effort.

**Requirements:** For best results, schedule this job to run recurrently at an appropriate interval (e.g., every 10 minutes).

**Restrictions:** The Update % Complete job is incompatible with itself.

**Parameters:**

| Parameter | Description |
|---|---|
| Investment Name | Indicates the active investment to process |
| Manager | Indicates the project/investment manager; the job processes all active investments assigned to this manager |
| Investment OBS | Indicates the Investment OBS Unit; the job processes all active investments associated with the selected OBS unit |
| OBS Mode | Determines which branches of the selected OBS structure are processed. Values: Unit Only, Unit and Ancestors, Unit and Descendants. Default: Unit Only |
| Include Milestones when Updating Tasks Status | Ensure milestones contribute to the rolled-up Task Status and % Complete values |

---

### Update Aggregated Data Job

Use the Update Aggregated Data job to flatten the percentage allocations between investments. This job is only required for generating chargeback invoices.

**Requirements:** None
**Restrictions:** This job cannot run concurrently with any other instance of itself or the Generate Invoices job.
**Parameters:** None

---

### Update Allocation from Estimates Job

The Update Allocation from Estimates Job updates team allocation to match remaining ETC starting from team member ActThrough date.

> [!note]
> This job is available for all types of investments. The job updates the allocation values only for active investments and ignores all inactive investments.

**Restrictions:** Run this job during off-peak hours.

**Parameters:**

| Parameter | Description |
|---|---|
| Investment Name | Indicates the active investment to process |
| Manager | Indicates the project/investment manager |
| Investment OBS | Indicates the Investment OBS Unit |
| OBS Mode | Values: Unit Only, Unit and Ancestors, Unit and Descendants. Default: Unit Only |

---

### Update Data Warehouse Trend Job

This job updates an existing snapshot of your trending data. The job deletes the previous trend snapshot data and then re-creates a new snapshot in its place.

**Requirements:** Run the Load Data Warehouse job before running this job.
**Parameters:**
- **Trend:** All the snapshots of the selected trend are refreshed.

---

### Update Earned Value History Job

The Update Earned Value History job calculates earned value for a project or set of projects and creates earned value snapshots of the time sliced data.

**Requirements:** To create a historical snapshot, the project requires a current baseline and an association with a valid historical earned value reporting period.

**Restrictions:** You cannot run more than one instance of this job at the same time.

**Parameters:**

| Parameter | Description | Default |
|---|---|---|
| Investment | Defines the name of the investment on which this job runs | All investments |
| OBS Unit | Defines the name of the OBS Unit for the project | — |
| Investment Manager | Specifies the name of the resource managing the project | — |
| Lag | Determines the number of days to wait before taking the snapshot | — |
| Rewrite Existing Snapshot | Indicates for the job to regenerate the current reporting period snapshot | Cleared |
| Show Projected ACWP | Creates data for the projected actual cost of work performed | Cleared |
| Show Projected BCWP | Creates data for the projected budgeted cost of work performed | Cleared |
| Show Projected BCWS | Creates data for the projected budgeted cost of work scheduled | Cleared |

---

### Update Earned Value and Cost Totals Job

This job calculates the earned value and costs for projects and NPIOs. It tracks investment progress by calculating earned value and updating costs, and invokes the Update % Complete job before it runs.

**Restrictions:** This job cannot run concurrently with any other instance of itself.

**Parameters:**

| Parameter | Description |
|---|---|
| Investment | Select one active or inactive investment. Without a selected investment, the job processes all active investments |
| OBS Unit | Defines the name of the OBS Unit for the project |
| Investment Manager | Specifies the name of the resource managing the investment |

> [!tip]
> A large number of team members on investments can impact job performance. Define the job using parameters to reduce the volume of updated data.

---

### Update Estimates from Allocations Job

Updates the Effort Task ETC to match Allocation starting from team member Act through date.

> [!important]
> Any staff member who is not already assigned to the Effort Task will be assigned when the job runs. This ensures the Effort Task includes all staff members, with updated Estimates based on their allocation as of their "Actuals Thru" date.

**Restrictions:** Projects without an Effort Task are not processed. The job updates the ETC values only for active investments. This job processes a high-volume of team and task data — run it during off-peak hours.

**Parameters:**

| Parameter | Description |
|---|---|
| Investment | Indicates the active project or investment |
| Manager | Indicates the project or investment manager |
| Investment OBS | Indicates the investment OBS Unit |
| OBS Mode | Values: Unit Only, Unit and Ancestors, Unit and Descendants. Default: Unit Only |
| Investment Type | Indicates the investment type: Applications, Assets, Ideas, Other Work, Portfolios, Programs, Services, Projects, and Products |

---

### Update Report Tables Job

The Update Report Tables job is required for reports that display monthly or weekly calendar periods, FTE amounts, and OBS level or phase grouping options.

**Requirements:** None

**Parameters:**

| Parameter | Description |
|---|---|
| Update Reporting Calendar | Populates the rpt_calendar table that stores date ranges for daily, weekly, monthly and quarterly calendar periods, and the FTE for the date range. Populates five years back and five years forward |
| Update Investment Hierarchy | Populates the rpt_inv_hierarchy table (up to ten levels of investment hierarchical relationships) and the rpt_program_hierarchy table (up to five levels of program and project relationships) |
| Update WBS Index | Populates the rpt_wbsindex table that stores relationships between phases and tasks. Supports incremental updates |
| Update Resource Skills Index | Populates rpt_res_skills_index and rpt_res_skills_flat tables that store relationships between resource skills and their parent skills (up to ten levels) |
| Update OBS | Populates the nbi_dim_obs table (up to ten levels of OBS unit information). Run nightly or when there are changes to the OBS structure |

---

### Validate Process Definitions Job

This job checks for the integrity of a process. Useful when you use process definition XOG to import many process definitions.

**Requirements:** Validate process definitions that the login user has Process Definition - View access rights.

**Restrictions:** None

**Parameters:**

| Parameter | Description |
|---|---|
| Activate Process If Validated | When enabled and Process Status is Validated, the job automatically activates the process definitions. Default: Cleared |
| Process Status | Specifies the status of process definitions: Errors Encountered, Not Validated, Re-validation Required, or Validated |

---

## Related
- [[_MOC Reference]]

%%Source: p3729-3788%%
