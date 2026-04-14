---
title: Job Monitor
tags:
  - admin
aliases:
  - Job Monitor
---
# Job Monitor

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

The following table lists the recommended and enforced governor settings:

NameGovernor Field

DESCRIPTION

DEF_LIMIT

Document Size

Maximum file size for

DMS_DOCUMENT_MAX_SaIZdEocument during initial upload. (Any pre-

existing document that

exceeds the setting is

not validated by the

governor.)

Export to Excel E2E_MAX_ROWS

Maximum number of rows that you can export to Excel from Classic PPM.

25,000

Objects/NSQL Limit MAX_FETCH_LIMIT

Maximum number of rows that can be fetched by NSQL in a list view or grid portlet.
(Only applies if you configure aggregation on the list view or grid portlet.)

50,000

SQL GEL Rows MAX_SQL_GEL_ROWS

Maximum number of SQL query rows that you can retrieve by running a GEL script.*

100,000

CSV GEL Rows

Maximum GEL CSV rows 25,000

MAX_CSV_GEL_ROWS allowed

Timesheet Tasks

Maximum number of

MAX_TIMESHEET_TASKStasks in a timesheet.

Max XML Nodes MAX_XML_NODES

Maximum number of nodes that you can read or write through XOG.

150,000

Max Investment Attributes

Maximum number of

attributes in a portfolio.

PFM_LIMITS_MAX_INV_ATTRS

PFM Limit on Roles

Maximum number of

PFM_LIMITS_MAX_ROLESroles in a portfolio.

Export to Excel (App) Maximum rows for Export 25,000
E2E_MAX_ROWS_APP to Excel, application level setting

Export to Excel Timer Maximum time for an

E2E_TIMER

export to Excel before

ending the export.

Max To-Do Items for a Maximum number of to- 25

Task

do items for a task.

MAX_TODOS_PER_TASK

CRITICAL_LIMIT 50
75,000 100,000
120,000 50,000 300 400,000 700 100 75,000 720 40

UNITS MB
rows rows
rows rows tasks nodes attributes roles rows seconds to-do items

NameGovernor Field

DESCRIPTION

Max documents

Maximum documents

DMS_MAX_DOCUMENTSallowed in a single

upload session.

Max attachments

Maximum conversation

ODF_MAX_ATTACHMENTaSttachments allowed

for ODF object

CSV Import Limit CSV_IMPORT_LIMIT

Maximum records allowed for CSV import processing

CSV Export Limit E2CSV_MAX_ROWS

Maximum records allowed for CSV export

Export to CSV Timer E2CSV_TIMER

Timer for Export to CSV

Maximum request parameters

Maximum request parameters allowed

MAX_REQUEST_PARAMETER_COUNT

DEF_LIMIT 5
25,000 1,800 1,800

CRITICAL_LIMIT

UNITS

files

rows

75,000 2,000 1,800

rows seconds parameters

*In 15.5.1, the same limit for Excel is enforced for CSV with MAX_CSV_GEL_ROWS=25000. Do not confuse this limit with MAX_SQL_GEL_ROWS=100000.

Until you upgrade to 15.5.1 or newer, avoid creating GEL scripts that attempt to read, run, or append records in a very large CSV file. Out-of-memory errors and application outages can occur.
> [!warning]
> The approved defaults are enforced to optimize or maintain performance. We recommend that on-premise administrators do not adjust these settings.

The following limits are not set by the governor settings but are hard-coded in Clarity:

Setting
Maximum number of columns in a board layout.
Maximum rows to export to CSV. Maximum number of fields in a configurable Details panel

Maximum

100 columns
250,000 rows 200 fields

Units

New! Clarity 15.6.1 Governor Limits Stored in the Database Governor limits are now stored in the database for you after upgrading or installing 15.6.1 or newer. - New installations are set to the recommended values shown above. - Upgrades preserve your previous settings.
1. Server setting required for the API calls to work <accessToServerStatus allow="ALL" />
2. Navigate to the following API landing page: http(s)://<server>:<port>/niku/serverstatus/
governorlimits

## Related
- [[_MOC Administration]]

%%Source: p3010-3012%%


