---
title: Governor Settings
tags:
  - admin
aliases:
  - Governor Settings
---
# Governor Settings

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

3. To view the response in HTML format use the following URL: http(s)://<server>:<port>/niku/ serverstatus/governorlimits?run=html
4. To get the results of the violators use the following url: http(s)://<server>:<port>/niku/serverstatus/ governorlimits?type=violators
New Admin Commands A series of admin governors commands are available for on-premise administrators to extend the governor limits up to the critical limit only (not recommended, but permitted by the system).

- These commands are the exclusive method allowed and supported for temporarily bypassing the governor limits up to
the established critical limits - Critical limits were determined based on the max numbers set across all our SaaS customers - The only way to bypass the critical limits is through a direct database update (not supported or recommended) The commands support set, unset (also known as reset or restore defaults), and list options:
admin governors -set <governorKey> <governorValue> admin governors -list <governorKey|all|violated> admin governors -unset <governorKey|all> set to default and enables governor
Example:
C:\Windows\System32>admin governors -list MAX_SQL_GEL_ROWS Code: MAX_SQL_GEL_ROWS Current Limit: 110000 Critical Limit: 120000 Default Limit: 100000 Active: true ##################
1. Log in to Classic PPM with administrative access rights.
2. Click the Administration menu. Under Security and Diagnostics, select Health Report.
3. Below the Summary tab, click the Download Discovery Analysis Report button. The output contains about 20
tabs of data including non-compliant objects, data sources, and grid portlets. Discuss these customizations before upgrading or changing environments. 4.

(Optional) For large deployments, the Discovery Analysis report is also available as a job for your convenience. To prepare this report, select the Active check box for the Clarity Customization Discovery Analysis job.

The job produces an Excel spreadsheet which can also be e-mailed to the recipient that is specified in the job parameters at the time of execution.
> [!note]
> More Information: - See Clarity Customization Discovery Analysis Job in Jobs Reference in the English edition of the
> documentation.

1. Log in to Classic PPM with administrative access rights.
2. Refer to the Required Access Rights section at the start of this document. To refresh the data in these portlets, you
3. Click the Administration menu. Under Security and Diagnostics, select Log Analysis.
4. Select one of the following tabs:
a. System Stats by Hour/Day: Use this tab to view average server response times, total sessions, and a list of the slowest actions performed for a specific day.
b. System Stats by Month: Use this tab to view monthly page views and XOG requests for all servers or grouped by server. You can also view monthly session counts.
c. Daily Page/XOG Views: Use this tab to analyze the top 20 slowest pages. For example, you could troubleshoot the slowest pages and then optimize them for improved performance.

This tab includes page views by service or server, daily page views, average response times by day, XOG requests by service or server, their average response times, and the total number of XOG calls by day.
5. Enter your filter criteria: a. Select a Date. b. Select an Environment such as All or local. c. Select a Hostname such as All or a specific application server. d. Click Filter.
6. To export the data, click the Log Data Export tab. Specify the Environment and the date range for the exported data.

Each row of exported data shows the date, total page views by all users, the average page response time in seconds, the total number of XML Open Gateway (XOG) requests, the average XOG response time, and the unique session count for that day.
7. To configure any of the portlets on these tabs, click Configure if available. To export the data to Excel or PowerPoint, click Export to Excel or Export to PowerPoint. Not all portlets support these options.
In the following Average Response Time by Server example, slower response times were observed at 9:00 am for a specific day. Further analysis revealed a group of users running similar queries, jobs, and processes. Response times were improved when a time-consuming process was rescheduled.

The following example shows the data that you can find in the Slow Actions by Day portlet.

URL

Time (secs)

Start

security.login 18.5 Action
unreadPush 12.3 Notifications Count

20180223 14:20:10
20180223 15:44:17

End
20180223 14:21:34 20180223 15:45:08

Hostname Method

myserver.na me1
myserver.na me2

POST GET

Bytes 42,300 6,100

Session Cookie

Username

S131430_DD user12 778-4012

S131437_EE admin14 778-4014

The associated username for a session ID helps you trace user activity in the system. For example, after user_01 deleted a custom object in Studio, user_02 began to notice delays and slower performance on another page indicated in the URL column.
> [!note]
> When a user logs in to the application, a trigger records their username and associated session ID cookie value.

1. Log in to Classic PPM with administrative access rights.
2. Select Administration, Security and Diagnostics, Jobs Monitor. The following information appears:

- - Job Name: The instance of the job that is currently running. - Run ID: The instance ID for the currently running job. - Job ID: The ancestor or parent ID for the running job.

- Job Definition Name: The ancestor or parent job name. - Job Definition ID: The ancestor or parent job definition. - Description: An optional description of the job.

- Scheduler Server: The server that queued the job process and that is now running the job. For example, bg@job_server1.xx.yyy
View the Data Warehouse Audit Dashboard
1. Log in to Classic PPM with administrative access rights.
2. Click Administration, Security and Diagnostics, Data Warehouse.
3. (Optional) To search the audit data, click + Expand Filter, enter your filter criteria, and click Filter.
4. The Data Warehouse Audit portlet displays the following fields:
5. Examine the audit data. For example, sort by row count or duration to examine the heaviest table loads.
6. If any errors occurred, the companion Data Warehouse Error portlet displays the following fields: - Data Warehouse Table Name - Error Message - Error Number - SQL Command
7. (Optional) Click Options to configure the audit or errors portlet. You can also export the data. For example, export an offending SQL command to a CSV file and send to your troubleshooting team. The following image shows an example of the Data Warehouse Audit dashboard in Clarity 15.6:

## Related
- [[_MOC Administration]]

%%Source: p3012-3016%%


