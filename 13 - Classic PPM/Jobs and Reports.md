---
title: Run Schedule and Share Reports
tags:
  - howto
  - classic
aliases:
  - Jobs and Reports
canonical: true
audience: everyone
domain: classic
---

# Run, Schedule, and Share Reports

---

## Filter Portlet: Lookup Field Configuration

When adding a Lookup or Multi-Valued Lookup field to a filter portlet, the following additional fields apply:

- **Data Type** — Select **Lookup** or **Multi Value Lookup**; the page updates to reflect the lookup and its data source (static or dynamic).
- **Display Type** — Specifies how the field is used: **Text Entry** or **Exact Text**.
- **Lookup** — List of values for the user to select.
- **Lookup Style** — How many items a user can select when the lookup executes.
- **Entry** — *(Static dependent lookups only)* Starting point for the data a user sees. Select a level or parent lookup value.
- **Exit** — *(Static dependent lookups only)* End point for the data a user sees.
- **Filter Default** — Default value in the filter field, applied to mapped portlet attributes when published to a dashboard.
- **Required in Filter** — A value is required when a filter request is executed.
- **Hidden in Filter** — The field is hidden at runtime, but its default value is still included in filter requests.
- **Read-Only in Filter** — Displays a default value that cannot be edited.
- **Hint** — Short help message (limit: 512 characters).

If you selected a parameterized lookup, complete the **Lookup Parameter Mappings** section (visible only for parameterized lookups).

### Arrange Fields on a Filter Portlet

After creating the filter portlet and its fields, you can control the placement of fields on the portlet page.

> [!NOTE]
> In **Toolbar** view, the left column maps to the top row and the right column maps to the bottom row of the portlet page.

**Steps:**
1. Go to **Administration > Studio > Portlets**.
2. Filter by **Type: Filter** and search for the portlet.
3. Open the filter portlet and click **Layout**.
4. Move fields to the appropriate list box (**Left Column** or **Right Column**) using the arrows. The order in each list box determines the display order.
5. Complete the **Settings** section:
   - **Render As** — How the filter portlet appears: **Toolbar** or **Section**. If **Toolbar** is selected, the default filter state is fixed as **Expanded**.
   - **Default Filter State** — Whether the filter portlet appears expanded or collapsed.
6. Save your changes.

---

## Jobs

Jobs are sets of actions that automate common administrative processes. They can populate or refresh database tables, run background processes, and execute queries or procedures.

### View Job Run Time and Run Status

Use the **Scheduled Job** page to view run times and statuses. A scheduled run can have the following statuses:

| Status | Description |
|---|---|
| **Cancelled** | The run was stopped and all future recurring instances are permanently cancelled. |
| **Completed** | A single, non-recurring run has finished. If logging is configured, the log is available. Recurring runs never show *Completed*. |
| **Paused** | The run is temporarily stopped. |
| **Running** | The run is in progress. |
| **Scheduled** | The run is queued to execute on its prescribed date and time. |
| **Waiting** | The run has reached its start time but cannot execute until an incompatible job or process finishes. |
| **Pending for Process Engine** | The Process Engine was not running before the Assign Incident job ran. |

### Run or Schedule a Job

The **Available Jobs** page lists all jobs you can access. Each job has one corresponding definition and one job type.

**Steps:**
1. Click **Home > Personal > Reports and Jobs**.
2. Click **Jobs > Available Jobs**.
3. Click a job.
4. Complete the fields:
   - **General** — Edit the job name to distinguish each instance. A read-only **Job ID** and **Status** appear after submission.
   - **Parameters** — Specify job parameters (appears only if defined by your administrator). Click **Save Parameters** to save a set for reuse; saved parameters appear as child jobs below the parent.
   - **When** — Select **Scheduled** to run later. Click **Set Recurrence** to set a recurring schedule.

You can also set recurrence using UNIX crontab format by selecting **Use UNIX Crontab Entry Format**. Example (midnight on the 1st and 15th of every month):

```
0 0 1,15 * *
```

> [!NOTE]
> For more information about UNIX Crontab format and special character usage, see the Oracle Documentation.

5. Click **Submit**.

### Edit Scheduled Job Run Properties

You can edit properties of runs with a **Canceled** or **Completed** status. All other statuses are read-only.

> [!NOTE]
> If a job is scheduled to run only once, you can only edit its properties before the scheduled run time.

**Steps:**
1. Click **Home > Personal > Reports and Jobs**.
2. Click **Jobs > Scheduled Jobs**.
3. Click the name of the job you want to edit.
4. Edit the information and save your changes.

> [!NOTE]
> If a job fails, review the status of scheduled instances for more information or contact your administrator.

### Manage a Scheduled Job Run

From **Home > Personal > Reports and Jobs > Jobs > Scheduled Jobs**, select the check box next to a scheduled job and choose one of:

- **Pause** — Temporarily stops the job. It will not run at its scheduled time until resumed.
- **Resume** — Resumes a paused job at its next scheduled run time.
- **Cancel Job** — Stops the job immediately and cancels all future runs. A canceled job remains in the list with **Canceled** status and its properties cannot be edited.
- **Delete Job** — Removes runs with **Canceled** or **Completed** status. Does not delete the job type or run logs.

### View or Delete the Job Log

The **Log** page shows a read-only version of run properties, job entries, times, and error messages.

> [!TIP]
> Schedule the **Remove Job Logs** job to periodically clean up old logs.

**Steps:**
1. Click **Home > Personal > Reports and Jobs**.
2. Click **Jobs > Log**.

> [!NOTE]
> For further reference, see **Configure Jobs** and **Jobs Reference** in the English edition of the documentation.

---

## Reports

Report behavior is similar to jobs. You can run a Jaspersoft report immediately or schedule it for a future time with recurrence options.

### Report Access Rights

| Access Level | Rights Required |
|---|---|
| **View Reports** | Reports - Access (opens Available Reports page); Reports - View Output - All; instance rights on projects, investments, and resources. |
| **Run Reports** | Report - Run (instance level) or Reports - Run All (global). At least one Advanced Reporting access right. Must be in a Clarity PMO Advanced Reporting group. |
| **Define Report Parameters** | Reports and Jobs - Create Definition; Reports and Jobs - Edit Definition. |
| **Row-level security** | Based on your access rights — only data you can view appears in reports. |

> [!NOTE]
> A shared report may give recipients access to data they would not ordinarily see. For example, if User A shares a 100-project report with User B (who has access to only 20 projects), User B can view all 100 projects.

> [!NOTE]
> Before running or scheduling reports, your account must be mapped to a Jaspersoft user. Administrators must run the **Create and Update Jaspersoft Users** and **Synchronize Jaspersoft Roles** jobs.

### Activate Reports

Administrators configure which reports are available to users.

**Steps:**
1. Log in to the Classic PPM user interface as an administrator with:
   - **Reports and Jobs - Administrator Access**
   - **Reports and Jobs - Create Definition**
   - **Reports and Jobs - Edit Definition**
2. Select **Administration > Data Administration > Reports and Jobs**.
3. Set **Executable Type** to **Report** and click **Filter**.
4. Select one or more reports by check box and click **Activate**. The reports appear on the **Available Reports** page.
5. To hide a report, click **Deactivate** or open it and clear the **Active** check box.

### Add Reports to the My Reports Portlet

**From the Available Reports List:**
1. Select **Home > Personal > Reports and Jobs**.
2. Select one or more reports by check box and click **Add to My Reports**.
3. Navigate to **Home > Personal > General** to view the **My Reports** portlet.

**From the Report Properties Page:**
1. Select **Home > Personal > Reports and Jobs**.
2. Click a report to open the **Report Properties** page.
3. In the **Parameters** section, click **Save Parameters**.
4. Enter a name in the **Saved Parameters Name** field and select **Add to My Reports**.
5. Click **Save and Return**.

### Run or Schedule a Report

**Steps:**
1. Select **Home > Personal > Reports and Jobs**.
2. Enter filter criteria or click **Show All** to view all available reports.
3. Click a report.
4. Complete the **General** section:
   - **Report Name** — Rename to distinguish scheduled instances (e.g., *Retail Banking - Weekly Rate Extraction*).
   - **Format** — Output format: **PDF** (default), **PPTX**, or **XLSX**.
5. Complete the **Parameters** section:
   - Parameters vary by report. Click **Save Parameters** to save for reuse (saved parameters appear indented below the original report).
6. Complete the **When** section:
   - Select **Immediately** or **Schedule**.
   - For scheduled reports, click **Set Recurrence** or use UNIX Crontab format.

> [!NOTE]
> For more information about Crontab format, see the Oracle Documentation.

7. Complete the **Notify** section — specify resources and groups to notify on success or failure.

> [!NOTE]
> Recipients must have **Reports and Jobs** notifications enabled. To enable: **Home > Personal > Account Settings > Notifications**.

8. Complete the **Sharing** section — specify resources and groups to share the report output with (scheduled reports only).

> [!NOTE]
> Sharing a report automatically grants the **Report - View - Output** access right to the specified recipients.

9. Click **Submit**.
   - Immediate reports appear in your browser download folder.
   - Scheduled reports appear on the **Scheduled Reports** page.
   - After execution, view output in the **Report Library**.

### Edit Scheduled Report Properties

The **Scheduled Reports** page lists all scheduled report run times and statuses. You can edit properties of runs with **Canceled** or **Completed** status.

Manage scheduled reports with these actions:
- **Pause** — Temporarily stops the report from running at its scheduled time.
- **Resume** — Resumes a paused report at its next scheduled run time.
- **Cancel Job** — Stops the run immediately and cancels all future runs. Cannot be edited after cancellation.
- **Delete Job** — Removes runs with **Cancelled** or **Completed** status. Does not delete the report type or generated outputs.

Scheduled report statuses:

| Status | Description |
|---|---|
| **Canceled** | Report and all recurring instances permanently canceled. |
| **Completed** | Single, non-recurring report is complete and output is available. Recurring instances never show *Completed*. |
| **Paused** | The next scheduled instance is temporarily stopped. |
| **Running/Processing** | The scheduled instance is in progress. |
| **Scheduled** | The next instance is queued for its defined date and time. |
| **Waiting** | Cannot start until an incompatible report or job finishes. |
| **Failed** | The scheduled instance failed. |

> [!NOTE]
> If a report is scheduled to run only once, you can only edit its properties before the scheduled run time.

**Steps:**
1. Select **Home > Personal > Reports and Jobs**.
2. Click the **Reports** tab and select **Scheduled Reports**.
3. Select the check box next to one or more reports and click **Pause**, **Resume**, **Cancel Job**, or **Delete Job**.
4. Click a **Report Name** link to edit properties.
5. Edit report properties and click **Submit**.

### View the Generated Report Output

The **Report Library** page lists all generated report output. Each recurrence creates a separate instance.

> [!NOTE]
> Adobe Acrobat Reader is required to view PDF reports.

**Steps:**
1. Select **Home > Personal > Reports and Jobs**.
2. Click the **Reports** tab and select **Report Library**.
3. Click the **Open Report** icon next to the report.
4. (Optional) Click the **Report Name** link to view pre-defined parameters, log entries, and scheduled properties.

If you do not have access, the following error appears:
> *DMS-05100: You do not have permission to access this document. Contact the document owner for access.*

### Delete Generated Reports

**Steps:**
1. Select **Home > Personal > Reports and Jobs**.
2. Open the **Reports** menu and click **Report Library**.
3. Select the check box next to the report and click **Delete**.

> [!TIP]
> Schedule the **Remove Job Logs and Report Library entries** job to periodically remove outdated reports.

### Jobs Affecting Report Information

All Jaspersoft Studio reports accessed from Classic PPM rely on the **Load Data Warehouse** job for fresh data. Run these jobs in order:

1. **Load Data Warehouse**
2. **Load Data Warehouse access rights**
3. **Create and Update Jaspersoft Users**
4. **Synchronize Jaspersoft Roles**

Additional jobs that may impact report data:
- Post Timesheets
- Time Slicing
- Update % Complete
- Update Data Warehouse Trend
- Update Earned Value and Cost Totals

---

## Related

- [[_MOC Classic PPM]]

%%Source: p2071-2078%%
