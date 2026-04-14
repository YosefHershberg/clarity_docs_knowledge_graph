---
title: Health Report
tags:
  - admin
aliases:
  - Health Report
---
# Health Report

1. Open Microsoft SQL Server Enterprise Manager.
2. Back up the Classic PPM database.
3. Right-click on the Classic PPM database, and click Properties.
4. Click the Data Files tab.
5. Click in to the new row below the Classic PPM _Data file name and enter the following information:
- Classic PPM_Idx as the file name. - The correct second disk location for the file named Classic PPM_Idx_Data.NDF.

- A value for Space Allocated (the value should be at least 50 percent of the primary data file allocation). - IDX next to Filegroup Name. The name that you use must not be a Microsoft SQL Server keyword such as INDEX.
> [!note]
> Do not change any of the other default settings. 6. To create the new data file and the new filegroup, when all values are entered, click OK. 7. To verify that the data file and filegroup are created, right-click the Classic PPM database. 8. Click the Data Files tab and verify that the new data file is created. Verify that all the values you entered are present and correct. 9. Click the Filegroups tab and verify that the new filegroup entered exists. The default filegroup should be PRIMARY. 10. Connect to the Classic PPM database using SQL Query Analyzer as the niku db user. 11. Execute the stored procedure CMN_MIGRATE_MSSQL_INDEXES_SP with the new filegroup as a parameter:
> EXECUTE CMN_MIGRATE_MSSQL_INDEXES_SP 'IDX'
> When this stored procedure is run, all the indexes from the PRIMARY filegroup are moved to the IDX filegroup on the second disk. Executing this stored procedure might take a significant amount of time depending on the size of the database.
> CA On Demand Portal Administration (On-Demand Only)
> NOTE This online document supersedes all previous PDF editions of the CA On Demand Portal Administration Guide, version 2.0 or higher. As of June 15, 2018, because the content applies to other products and not just Classic PPM SaaS, this content has been moved here: CA On Demand Portal Documentation.
> Health Report, Job Monitor, Governor Settings, and Data Warehouse Audit Dashboard
> A system health report, log analysis portlets, currently running jobs monitor, and data warehouse audit dashboard are available to support the security and diagnostics needs of administrators.

- The health report shows system status for the application, database, and data warehouse. - The health report also detects any non-compliant governor settings (maximum data limits).

- A related discovery analysis report detects system customizations. - The Log Analysis page includes system statistics, daily page or XOG views, and log data. - A Job Monitor page shows the currently running jobs.

- In 15.6 and higher, a new Data Warehouse Audit dashboard shows the latest progress of the Load Data Warehouse
job.
- Required Access Rights - View or Download a Clarity System Health Report - Command Line Health Report - Health Report Exclusions - Governor Settings (Maximum Data Limits) - New!

Clarity 15.6.1 Governor Limits Stored in the Database - Download a Customization Discovery Analysis Report - View System Statistics and Log Data - Jobs Monitor - View the Data Warehouse Audit Dashboard
Required Access Rights - To run the Health Report, verify that you have the Administration - Application Setup global access right. - To view the Log Analysis portlets, verify that you have the Administration - Access right and that you are assigned to
the Log Analysis Access group. - To run the tomcat access logs, verify that you have the Jobs - Access right. Also verify that you have the following
instance level job definition access right: Job - Run on Tomcat access log import/analyze.
View or Download a Clarity System Health Report
System health including the Classic PPM application servers, database, and data warehouse is important.

As an administrator, application support engineer, or help desk technician, you want to maintain operations and minimize downtime.

Before contacting other support professionals or engaging with the online community, you want a quick assessment of Classic PPM system health.
Follow these steps:
1. Log in to Classic PPM with administrative access rights.
2. Click the Administration menu. Under Security and Diagnostics, select Health Report.
3. Select one of the following tabs:
- Summary: This tab lists the health status and completion percentage for the application, database, and data warehouse.

The % Completed value calculates the total number of settings that require a value during a new install or upgrade. The health report summary shows you what portion those required settings have a value.

For example, 88% Complete indicates that you are still missing valid values for the remaining 12 percent of all settings.

When the report shows Setup Complete and a green status icon, the health for that category is good. When setup is not complete, a red icon appears. Click Details to view one of the three other tabs.
- Application: This tab shows application server details. Settings include file locations, URLs, Java version, JVM, LDAP, SSO, SSL, and ports. You also see instance-specific configurations for CSA, background (bg), and beacon services.

- To verify settings for Clarity, expand Application Instance (app), New User Experience. The ppm-ux attribute appears with a red icon when a newer version is available but is not deployed.

The Clarity features are delivered and updated through a separate Java WAR file. WAR files should have a META-INF folder.
- To verify settings for governor limits, expand Governor Limits. - To switch the status of the on-the-fly RateMatrix property, click Enable or Disable. When enabled, the application
applies the PRJ_RT_RATES_EXTRACTION rate matrix options. This setting is disabled by default. - Database: This tab provides information about database connectivity, table spaces, database options, and server
parameters. - Data Warehouse: This tab provides information about data warehouse connectivity, table spaces, data warehouse
options, and server parameters. Settings include JDBC URL, database timezone mismatch, database size, and ETL job timeout for the Load Data Warehouse job. This tab also includes setup information for time slices and other application settings for the data warehouse.
> [!tip]
> Click the Fix It link to navigate to the application page where you can fix the non-compliant setting. For example, a red icon and Fix It link appear to help you set up entities or time slices. Remember that the 'From Date' and 'Number of Periods' have to match the records in the Data Warehouse for each type of period. 4. To view the recommended values for each setting on the Database and Data Warehouse tabs: a. The Recommended field provides the required values to achieve compliance and improve system health. If no exact value is recommended, the field remains empty. b. Hover your mouse over the Status icon to view a recommendation to fix the listed item. c. As an Oracle database administrator, you might have permissions to V_$PARAMETER. If you do, expand Database Parameters to view the health of your database and data warehouse parameters. If you do not have permissions, hover over the status icon to show the command to grant access. 5. To export the complete health report to Excel, click the Download Health Report button on the Summary tab. Open the HealthReport.xlsx.zip file to view the HealthReport.xlsx file in Excel.
> NOTE
> The previously available health check in CSA is no longer available in this release. Use the new health report tabbed pages, download a health report to Excel, or run the command line health report instead.
> Command Line Health Report
> To run the health report from a command line, enter the following command:
> admin healthreport
> Health Report Exclusions
> In SaaS and FedRAMP environments, the health report database and data warehouse tabs do not list the following items:
> - JDBC URL - Database parameters - SQLNET parameters
> Governor Settings (Maximum Data Limits)
> Governor settings optimize performance by enforcing maximum limits on specific data. For example, the maximum size allowed for an uploaded document is 20 megabytes and the maximum number of rows you can export to Excel is 25,000. These limits help prevent a minority of users from degrading the performance of the majority of other users.
> In the current release of Clarity, administrators can override a default limit, up to the given critical limit.

## Related
- [[_MOC Administration]]

%%Source: p3008-3010%%


