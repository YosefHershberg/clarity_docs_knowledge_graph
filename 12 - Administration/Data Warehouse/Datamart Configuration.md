---
title: Configure the Datamart
tags:
  - admin
aliases:
  - Datamart Configuration
---
# Configure the Datamart

4. Save the changes.

Preview a Process Notification Template
You can preview how an instance of the process notification template appears when a resource receives it.
Follow these steps:
1. With the process open, click Notifications.
2. Click the notification template name.
3. Click Preview.
4. (Optional) You can restore modified notification templates to their default values. The Notification Templates page
indicates modified notification templates with a check mark in the Modified column. To restore the notification template, open it and click Restore Defaults.
Configure the Datamart
Configure the Datamart for the successful execution of the Datamart Extraction job. The job is required to run on a regular schedule for the successful operation of Classic PPM. As a business user, you can also write custom reports against the Datamart schema.
The Datamart supports the following types of reporting information and services:
- Fiscal or annual calendar periods. - Easily understood roll-up tables. - Alerts (stoplights) and trending analysis. - Protection from transaction database schema changes (when you customize reports or implement business
intelligence applications). - Multiple OBS types that enable multiple views of resource and project data (combined or viewed individually).
Examples: Extracting Data by OBS
- The default OBS location type is the USA unit. If a project is not associated with any OBS location, USA is used in the datamart extraction.

If a project is associated with another OBS location type (for example, the Germany OBS location), then that OBS location type is used in the datamart extraction.
- You can also specify a default OBS unit to use for projects and resources that are not assigned to an OBS type.
- Verify the Prerequisites - (Optional) Enable Parallel Processing for the Datamart (Microsoft SQL Server) - Configure the Datamart Settings - Set Up Time Slices for the Datamart - Schedule and Run the Datamart Extraction Job - Datamart Jobs - Datamart Stoplights - Create Datamart Stoplights

Verify the Prerequisites Complete the following prerequisites before setting up the Datamart:

- Verify that you have an understanding of the Datamart and what it includes. - Verify that you have read a description of the Datamart Extraction job and understand the requirements and restrictions
for running this job. - Set up a financial entity to associate with the Datamart. The Datamart uses the monthly fiscal time periods that are
defined for the entity. - Set up the system currency. For a multi-currency setup, set up all supported currencies. - Verify that the "Include in Datamart" setting is selected for resources and roles that must be included in the Datamart
extraction. The setting is selected by default when you create the resources or roles. - For the Datamart Extraction job to complete successfully, define at least one OBS associated with the Project and
Resource objects.
If you are using Financial Management and you want to see accurate data within the Datamart, complete the following tasks:
- Update time slices for the successful population of various types of sliced data such as actuals, estimates, allocations. - Set up the Rate Matrix Extraction job to populate the financial tables of the Datamart. - Set up Timesheets because actuals come from posted timesheets.
(Optional) Enable Parallel Processing for the Datamart (Microsoft SQL Server)
Enabling parallel processing can improve the performance of portions of the Datamart by setting them up to run in parallel. If the database server has more than one CPU available, you can use Microsoft SQL Server Enterprise Manager to start a Microsoft SQL Server Agent process.
The Datamart extraction is extremely I/O intensive because it detects incremental changes in the transactional tables and then writes those changes to the Datamart reporting tables.

In a typical customer environment, there is enough CPU power to launch multiple parallel processes to access the disks in parallel, therefore minimizing the overall Datamart runtimes.
Follow these steps:
1. Use the system administration account to log into Microsoft SQL Server Enterprise Manager and expand the submenu item of Management.
2. To start the Microsoft SQL Server Agent process, right-click SQL Server Agent and select Start. If desired, you can set additional options using the Properties palette. However, the Datamart does not rely on options that are contained in the Palette.
Configure the Datamart Settings
Verify the following settings for the Datamart, before running it the first time:
- Datamart currency and entity - OBS types - Data extraction options
Follow these steps:
1. Open Administration, and from Data Administration, click Datamart Settings.
2. In the Datamart Currency section, complete the following field and save:
- Datamart Currency: Specifies the currency for the financial data in the Datamart. 3. In the Datamart Entity section, complete the following field, and save:
- Datamart Entity: Defines the name of the Datamart entity. The Datamart Extraction job uses the active monthly fiscal time periods that are associated with the entity.
4. In the Customization of Datamart Extraction section, select the appropriate options:

- Extract project management time facts and summary: Indicates if project management time facts and summary information is extracted when the Datamart Rollup - Time Facts and Time Summary job runs.
- Extract financial management time facts and summary: Indicates if financial management time facts and summary information are extracted when the Datamart Rollup - Time Facts and Time Summary job runs.
- Extract resource time facts and summary: Indicates if resource time facts and summary information are extracted when the Datamart Rollup - Time Facts and Time Summary job runs.
5. Create a project and resource OBS mapping. In the Project Organizational Breakdown Structure Mapping, or the Resource Organizational Breakdown Structure Mapping section, click New.
> [!note]
> Select at least one OBS unit for both the Project and Resource objects for the Datamart Extraction job to complete successfully. 6. On the Organizational Breakdown Structure Mapping page, complete the following fields: - Order: Displays the order in which the OBS units are configured in the Datamart settings. - OBS: Displays the OBS type that is selected for the OBS configurations. You can select one OBS unit for each OBS type that is associated with the project and resource objects. The maximum number of OBS types that you can select for configuration on the Datamart settings is five. - Default OBS Unit: Defines the default OBS unit. Provides a "holding bucket" for all those projects and resources that do not have the respective OBS type assigned. The field displays the full path of the OBS unit that you selected.
> Set Up Time Slices for the Datamart
> Before you run a Datamart job, define the time slices that indicate increments of data.
> Each time slice request that you define specifies the objects and fields, the slicing frequency, and the granularity to store the data. Once defined, the Time Slicing job extracts data and displays a readable flat table that is based on the defined criteria. You can then query the time slice to run reports.
> The following default time slices are used in the Datamart:
> - DAILYRESOURCEACTCURVE (ID=2) - DAILYRESOURCEESTCURVE (ID=3) - DAILYRESOURCEAVAILCURVE (ID=1) - DAILYRESOURCEBASECURVE (ID=11) - DAILYRESOURCEALLOCCURVE (ID=10)
> NOTE Although you do not need to create new slice definitions, verify that the default slice definitions are set up properly. For example, you can edit an existing time slice to ensure that the date ranges are applicable. Also, set the From Date of the slice definition to the first day of the month and at least a minimum of three months before the current month.
> Schedule and Run the Datamart Extraction Job
> For successful operation of the product, execute the Datamart Extraction job on a regular schedule. The job executes a stored procedure to populate the tables that are needed for:
> - OBS references - All non-fiscal time-scaled varying (TSV) grids - All fiscal TSV grids and financial processing
> The Datamart rollup job depends on the successful extraction of data by the Datamart Extraction job.

Best Practice: Run the job daily and schedule it to run during off-peak hours. Based on the volume of data to extract, the time and system resources that are required to process the request can be significant.
Follow these steps:
1. Open Home, and from Personal, click Reports and Jobs.
2. Open the Jobs menu, and click Available Jobs.
3. Click the Datamart Extraction job.
4. Complete the requested information. The following sections require explanation:
- General: Edit the job name. For scheduled runs, you can change the name to distinguish each instance of a run. For submitted scheduled job entries, a read-only job ID and status are displayed.
- Parameters: Set the parameters as desired. Click Save Parameters to save the defined set of parameters for reuse. The saved parameters display in the list on the Available Jobs list page below the job type from which it is based.
- When: Defines the interval at which the job runs. Select Scheduled to run the job later. To run the job at a recurring time, click the Set Recurrence link.

You can also set the recurrence of a scheduled job using the UNIX Crontab. To use crontab, select Use UNIX Crontab Entry Format and enter the schedule.

For example, the following entry indicates that the job runs at midnight on the 1st and 15th of every month.

0 0 1,15 * * You can use the Crontab option on Windows, Linux, and UNIX operating systems where the Classic PPM instance is running.

When you use this option, the scheduled configuration takes the time of the server system running the Classic PPM instance.
5. Submit your changes.
Datamart Jobs
The Datamart extracts project, financial, and resource management data from Classic PPM. The Datamart delivers a number of stock high-performance reports.

Datamart reports provide excellent performance when compared to other reports because of the reduced query complexity and flattened table structures. You can also write reports against the Datamart schema.
The Datamart provides the following:
- Project and resource data points - Data based on fiscal or calendar periods and OBS - Data that is aggregated and stored in an easily understood roll-up tables - Support for alerts (stoplights) and trending analysis - Protection from transaction database schema changes (when you customize reports or implement business
intelligence applications)
The Datamart also:
- Extracts data from the transactional system into the NBI_DIM% dimension tables - Extracts project, financial, and resource management data from the transactional system into the NBI% Datamart
tables - Rolls up project and resource data into the NBI%TIME_SUMMARY summary tables
ATTENTION
You need to execute the Datamart Extraction job daily to ensure you can use Clarity effectively in your organization. The job should run with the Extract Only OBS and Extract Only Calendar options selected. The Datamart Extraction job updates the OBS and CALENDAR tables in the database.
- The NBI_DIM_OBS and NBI_DIM_OBS_FLAT tables are needed for OBS references. - The NBI_DIM_CALENDAR_TIME tables are needed for all non-fiscal time-scaled varying (TSV) grids in
Classic PPM. - The NBI_DIM_FISCAL_TIME tables needed for all fiscal TSV grids and financial processing in Classic PPM.

The three tables mentioned above are the only tables you need to populate to run Clarity effectively in your organization. All the other NBI tables are not used in stock reports and the data warehouse.
Custom Portlets and Reports
If you have any custom portlets or reports which use the Datamart and/or the Datamart Rollup tables, you need to run the Datamart Extraction job without selecting the parameters. The job will update all the extraction tables. If you use the Datamart Rollup tables:
- You will need need to run the Datamart Extraction job without any parameters. - Run the Datamart Rollup job.
All the other NBI tables are not required for successfully running Clarity.
The Datamart Extraction job uses many system resources. For best results, run the job once daily during periods of low, or no user activity and avoid peak system hours.
The Datamart has the following jobs:
- Rate Matrix Extraction: Extracts rate matrix data. Run the job each time you change the rate matrix or a project financial properties. Frequency: Optional or run daily before the Datamart Extraction job
- Datamart Extraction: Extracts data from transactional database tables and stores them in reporting tables. The tables are the foundation of most stock reports and some custom reports.

The job should run with the Extract Only OBS and Extract Only Calendar options selected. The Datamart Extraction job updates the OBS and CALENDAR tables in the database. Frequency: Daily
- Datamart Rollup - Time Facts and Time Summary: The time facts and summary job display in the following time tables: - NBI_PM_PT_FACTS - NBI_FM_PT_FACTS - NBI_RT_FACTS - NBI_PM_PROJECT_TIME_SUMMARY - NBI_FM_PROJECT_TIME_SUMMARY - NBI_RESOURCE_TIME_SUMMARY For best results, run the job after the Datamart Extraction job.

Also, run it when a custom report depends on the output of any of the time tables. Frequency: Daily. For best results, schedule the Time Slicing job before you run the Datamart Extraction job.

The Datamart extraction gets data from the time slice table.

Datamart Table Descriptions
The following table contains high-level descriptions of the Datamart tables. The tables do not capture historical changes in resource, project, and task properties. All data is captured with current property values.

For example, if a resource department OBS is changed, the next time you run the Datamart jobs, the tables are populated with the currently saved department OBS value for all periods.

Table (T) or View (V) T: NBI_PRT_FACTS V: NBI_PROJECT_RES_TASK_FACTS T: NBI_PROJECT_CURRENT_FACTS
T: NBI_PM_PT_FACTS V: NBI_PM_PROJECT_TIME_FACTS

Description
Resource, project, and task information (including resource ID, project ID, task ID) available per day.
Project management and accounting information available as-oftoday.
Project management time-sliced information (including the project ID) available for calendar weeks and months.

Table (T) or View (V) T: NBI_FM_PT_FACTS V: NBI_FM_PROJECT_TIME_FACTS T: NBI_PM_PROJECT_TIME_SUMMARY
T: NBI_FM_PROJECT_TIME_SUMMARY
T: NBI_R_FACTS V: NBI_RESOURCE_FACTS T: NBI_RT_FACTS V: NBI_RESOURCE_TIME_FACTS NBI_RESOURCE_TIME_SUMMARY
NBI_DIM_CALENDAR_TIME

Description
Financial management and time-sliced information (including project ID) available for fiscal months only.
Project management and roll-up information (OBS and calendar hierarchy, no project IDs) available by calendar weeks, months, quarters, and years.
Financial management and roll-up information (OBS and fiscal calendar hierarchy, no project IDs) available by fiscal periods, quarters, and years.
Roll up resources (including resource ID) information available per day.
Resource time-sliced information (including the resource ID) available for calendar weeks and months.
Roll-up resource information (excluding resource ID) available for calendar week, months, quarters, and years. Summary information grouped by Datamart resource OBS unit. Count of internal and external resources.

Totals for available hours, actual hours, baseline hours, ETC hours, and allocated hours.
Calendar information that sets up the weekly periods to start on a Monday. See support KB article: 27248 for more information

Datamart Stoplights
Stoplights let you flag projects that meet certain criteria. For example, use a red stoplight to flag all projects with actual hours that are greater than or equal to budgeted hours. You can store up to 15 stoplights in the NBI_PROJECT_CURRENT_FACTS (STOPLIGHT_1 through STOPLIGHT_15) table.
> [!note]
> Datamart Stoplights is only used when you want to develop custom portlets or reports using the Datamart Extraction tables. Most customers don't use this functionality because they use the Clarity Datawarehouse and Jaspersoft.
> Stoplight values are as follows:
> - one (1) = green - two (2) = yellow - three (3) = red
> Stoplight conditions are defined using ANSI SQL and include only columns that are provided in the NBI_PROJECT_CURRENT_FACTS table.
> Examples
> - A project that is less than 90 percent complete:
> PCT_COMPLETE < 90
> - More than 50 tasks remain open:
> PCT_COMPLETE < 90
> - Actual hours are 95 percent of budgeted hours or greater:
> ACTUAL_HOURS > (0.95 * BUDGET_HOURS)
> - Actual equipment costs exceed labor cost:
> COST_ACT_EQUIP > COST_ACT_LAB

## Related
- [[_MOC Administration]]

%%Source: p3208-3213%%


