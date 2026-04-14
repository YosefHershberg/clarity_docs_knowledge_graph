---
title: Working with Reports
tags:
  - howto
aliases:
  - View Reports
---

# Working with Reports

The **Reports** tile in Clarity's Reporting workspace provides a centralized and organized way to view and work with reports. It is a read-only interface that lists all reports a user can access, supporting report execution, scheduling, sharing, and export.

## Topics Covered

- [[#Access Requirements]]
- [[#Accessing the Reports Tile]]
- [[#Viewing the Reports Grid]]
- [[#Filtering Reports]]
- [[#Exporting the Reports List]]
- [[#Marking Reports as Favorites]]
- [[#Viewing Report Details]]
- [[#Accessing Published Reports]]
- [[#Exporting a Report]]
- [[#Schedule a Report]]
- [[#Viewing and Editing Report Schedules]]
- [[#Working with the Reports Library]]
- [[#Troubleshooting]]

---

## Access Requirements

### Feature Toggle

A feature toggle called **Reporting: Reports** controls this functionality. It is enabled by default. Administrators can manage it under **Administration > Feature Toggles**.

### Global Security Rights

| Right | Description |
|-------|-------------|
| **Reporting - Reports - Navigate** | Required to access the Reports tile |
| **Reporting - Available Reports - Navigate** | Access to the Available Reports tab |
| **Reporting - Scheduled Reports - Navigate** | Access to the Scheduled Reports tab |
| **Reporting - Reports Library - Navigate** | Access to the Reports Library tab |
| **Reporting - Report Viewer - View - All** | Required to view reports in the Reports tile |
| **Reporting - Report Schedule - Create** | Create report schedules |
| **Reporting - Report Schedule - Delete - All** | Delete all report schedules, including others' |
| **Reporting - Report Schedule - Edit - All** | Edit all report schedules (pause, resume, cancel) |
| **Reporting - Report Schedule - View - All** | View all report schedules |

### OBS and Instance Rights

- Report Designer and Report Viewer **OBS security rights** are assigned on the Report object. Associate the Report object with the OBS to make it visible in Clarity (the API Attribute ID is assigned automatically).
- Report Designer and Report Viewer **instance security rights** are also assigned on the Report object.

### Deploying the Report Service

To enable report scheduling, deploy and start the Report service:

```
service add deploy report
service start report
```

The Report service is a new background (`bg`) type service that handles all scheduled report executions.

---

## Accessing the Reports Tile

Navigate to the **Reporting** section in the left-hand menu and select **Reports**. The tile opens in the Reporting workspace and displays reports in three tabs (visible based on your access rights):

1. **Available Reports**
2. **Scheduled Reports**
3. **Reports Library**

---

## Viewing the Reports Grid

The Reports grid has three tabs:

| Tab | Description |
|-----|-------------|
| **Available Reports** | Lists all reports you can open and run. Click a report name to open it in the Report Viewer. You can schedule reports from this tab (except Responsive layout reports). |
| **Scheduled Reports** | Lists report schedules you can view or manage. Includes schedule metadata, sharing details, locale settings, and Job ID. Language, Locale, and Unit of Measure are editable in-grid. Click a schedule name to open the schedule modal; changes apply to future runs only. |
| **Reports Library** | Stores output from scheduled runs and on-demand exports. Columns include: Name, Download, Status, Run By, Format, Job ID, Run ID. Supports search, filters, saved views, conditional formatting, and view options. |

### Grid Features

- **Filter:** Filter by attributes such as name, description, status, and tags. Supports lookup-based attributes with "Is Empty" and "Is Not Empty" options.
- **Export:** Export the grid data to CSV.
- **Favorites:** Add the **Starred** column from the Columns panel to mark reports as favorites.

> [!note]
> **Active Flags for Reports and Data Providers:**
>
> - If a data provider is **inactivated**, existing reports using it will continue to function, but new reports cannot use it.
> - If a report is **inactivated**, published reports linked to a menu icon remain functional. However, if you remove the menu icon, the inactive report cannot be re-assigned.

---

## Filtering Reports

1. Click the **Filter** icon next to the grid title.
2. Select filter criteria from the available options.
3. The grid updates to show reports matching the selected conditions.

Lookup values are retrieved from Clarity's transactional database ג€” updates to lookup definitions, sort order, translations, and filter settings are reflected immediately.

---

## Exporting the Reports List

You can export the list of reports currently displayed in the grid to CSV.

1. Click the **Export** button at the top-left of the grid.
2. Select **CSV** as the export format.
3. The grid data downloads as a CSV file.

> [!note]
> The export includes only the data visible in the grid at the time of export, based on applied filters and column selections.

---

## Marking Reports as Favorites

1. In the Reports grid, click the **star icon** next to the report name.
2. The report is marked as a favorite and will appear when you apply the favorites filter.

---

## Viewing Report Details

Click a report name in the grid to open it in the **Report Viewer** (read-only mode).

### Viewer Actions

| Action | Description |
|--------|-------------|
| **Schedule** | Schedule the report (not available for Responsive layout) |
| **Export** | Export to PDF or PPTX (Fixed layout) or CSV (Data Extraction layout) |
| **Pagination** | Use navigation arrows at the bottom to move through report pages |
| **Return to grid** | Click the **Reports** breadcrumb at the top to return to the grid |

### Draft Reports

Draft reports are only accessible to the creator and users with edit permissions. They are not visible to general users until published.

---

## Exporting a Report

You can export reports in PDF, PPTX, or CSV format, depending on the report layout.

### Steps

1. Log in to Clarity and navigate to **Reporting > Reports**.
2. Open the required report from the **Available Reports** tab or **Reports Library** tab.
3. Click **Export** and choose the available format:
   - **Export to PDF** ג€” Fixed layout only
   - **Export to PPTX** ג€” Fixed layout only
   - **Export to CSV** ג€” Data Extraction (CSV) layout only
4. A progress banner appears: *Export in Progress. Download will be available in notifications.*
5. When complete, open the **Notifications** panel to download the file. The output is also saved in the **Reports Library** tab.

> [!note]
> **Key export notes:**
>
> - Fixed layout supports PDF and PPTX. Export is disabled for Responsive layout.
> - Data Extraction (CSV) layout supports CSV only.
> - Large reports may take longer; you can continue working while the export runs.
> - If a widget fails to load within the maximum processing time, a timeout message appears inside the exported file. Other widgets still display normally.

### Known Export Issues

| Issue | Reference |
|-------|-----------|
| CSV Display Type: exports show Value only, not Range Description and Value | DE178099 |
| PDF export may fail when an Attribute Group contains an image | DE178017 |
| Table cell overflow may appear on the next page in PDF/PPTX | F58825 |
| Responsive layout and individual table widget CSV export not yet supported | Planned for future release |

### Report Output Limits

| Condition | Message |
|-----------|---------|
| TSV records exceed 50,000 | "Maximum 50K records. Please add more filters and try again." |
| Attribute contains more than 100 periods | "Maximum 100 periods allowed." |
| Total periods across all attributes exceed 900 | "Maximum 900 periods and metrics allowed." |
| Report exceeds 500 pages | First 500 pages exported; final slide shows truncation notice |

### PPTX/PDF Visual Differences

- Number Tile widgets may appear rectangular in exports but square within Clarity.
- Bar and Column chart legends appear only in English.
- Rich Text formatted attributes are not currently supported in exported reports.
- Fonts are rendered using a 1-pixel-to-0.75-point conversion for consistent sizing.

---

## Schedule a Report

Scheduling allows you to run a report automatically at a set time ג€” once or on a recurring basis.

### Steps

1. **Open the Reports tile:**
   - From **Available Reports**, select the report to schedule.
   - From **Scheduled Reports**, open an existing schedule to edit.

2. **Open the Schedule modal:**
   - Click **Schedule** in the report header, or right-click the report name in the grid and choose **Schedule**.

3. **Configure the Schedule modal tabs:**

| Tab | Purpose | Key Fields |
|-----|---------|------------|
| **Schedule** | Set when and how often the report runs | Run On, Enable Recurrence (Weekly/Monthly), Repeat On, Ends |
| **Filter** | Apply or adjust filters for this schedule | Match Filters (All/Any), hidden/locked/editable filters, Unit of Measure, Period |
| **Export** | Define export format and display options | Format (PDF/PPTX/CSV), Exclude Tabs, Language, Locale, Date Display, Unit of Measure |
| **Share** | Share report output with users or groups | Add People, Add Groups |
| **Email** | Email the scheduled output to recipients | To/CC/BCC, Subject, Message, Attachments |
| **Notify** | Notify users of run completion or failure | Notify on failure (creator added by default), Notify on completion |

### Schedule Tab Details

- **Run On:** Date and time to run. Selecting a past date/time runs the report immediately.
- **Enable Recurrence:** Turn on for repeating schedule. Choose **Week** or **Month**.
  - *Weekly:* Choose days of the week (Sunג€“Sat).
  - *Monthly:* Choose months and enter dates (comma-separated).
- **Ends:** Choose **Never** (continues indefinitely) or **On a Date**.

### Filter Tab Details

- **Hidden filters:** Applied when the report runs but not shown.
- **Locked filters:** Show a lock icon and cannot be changed.
- **Editable filters:** Can be modified for this schedule.
- **Unit of Measure:** FTE, Hours, Days, or % Availability.
- **Period:** Defines the reporting time frame.

### Export Tab Details

- **Fixed layout:** PDF (default) or PowerPoint (PPTX).
- **CSV layout:** CSV is the only format (view-only).
- **Exclude Tabs:** Exclude specific tabs from the export. Hidden if the report has only one tab.
- **Language, Locale, Date Display, Unit of Measure:** Default to your user settings.

### Share Tab Details

- **Add People:** Select individual users to receive the scheduled report.
- **Add Groups:** Select security groups. All users in the group receive the output.
- Recipients see the report in their **Notifications** panel and in the **Reports Library**.

### Email Tab Details

- **To:** One or more email addresses (required to send email). Separate with commas.
- **CC and BCC:** Optional.
- **Subject and Message:** Optional fields for the email.
- **Attachments:**
  - **Report as attachment:** Includes the report output.
  - **Add Reports Library link:** Adds a link to the report (requires Clarity login and rights).
- Emails can be sent to internal and/or external addresses. External delivery requires SMTP configuration.

### Notify Tab Details

- **Notify on failure:** Add people or groups to notify on failure. Creator is added by default.
- **Notify on completion:** Add people or groups to notify on successful completion.
- Notifications appear in the **bell icon** and include a link to run details in the Reports Library.

4. **Save the schedule:** Click **Save** once all required fields are completed.
5. **Manage schedules:** Use the **Scheduled Reports** tab to edit, pause, resume, cancel, or delete schedules.

> [!note]
> **Key scheduling notes:**
>
> - Responsive layout reports cannot be scheduled.
> - Draft or inactive reports cannot be scheduled.
> - Unpublished report edits are not included in scheduled runs.
> - Data Extraction (CSV) layout schedules always export CSV.
> - Deleting a schedule also deletes its generated runs from the Reports Library.
> - Reports that return no data are still emailed to all recipients in the Email tab.
> - The schedule creator does **not** receive a Share bell notification unless they add themselves in the Share tab. They will still have access in the Reports Library.
> - Email sharing notifications are not sent to any user, including the schedule creator.
> - To receive bell notifications for scheduled reports, users must enable **Report Run Status** notification in **Avatar > Settings > Notifications**.

---

## Viewing and Editing Report Schedules

### Steps

1. Navigate to **Reporting > Reports > Scheduled Reports** tab.
2. Use search or filters to find the schedule.
3. Click the **Schedule Name** to open the Schedule modal for editing. Right-click > **Open Details** opens a read-only panel.
4. Modify run date/time, recurrence, filters, export options, recipients, or notifications.
   - **Exceptions:** Locked and hidden filters cannot be edited.
5. Available actions depend on the schedule's status:

| Status | Available Actions |
|--------|------------------|
| **Scheduled** | View or edit |
| **Completed** | View only |
| **Paused** | View or edit |
| **Cancelled** | View only |
| **Deleted** | No longer visible |

6. Click **Save** to apply updates.

> [!note]
> - Changes to editable columns (Language, Locale, Unit of Measure) in the Scheduled Reports tab apply to **future runs only**.
> - The **Export Format** (PDF, PPTX, or CSV) is locked after the schedule is created and cannot be changed.
> - You can **Pause**, **Resume**, **Cancel**, or **Delete** schedules from the right-click menu in the grid.

---

## Working with the Reports Library

The **Reports Library** lets you view and download report outputs generated from scheduled runs or on-demand exports.

### Steps

1. Navigate to **Reporting > Reports > Reports Library** tab.
2. The grid lists completed report outputs with columns: **Name**, **Download**, **Report**, **Status**, **Run By**, **Format**, **Finish**, **Job ID**, **Run ID**.
3. Click the **Name** link to open output details in a modal:
   - **Filter:** Shows filter values used during the run (or "No Filters To Show").
   - **Logs:** Execution log entries with timestamps (Job Started, Message, Job Completed).
4. Select a row to open the **Details** panel on the right:
   - **Details:** Metadata including name, source report, status, format, finish date, and Download link.
   - **Logs:** Same execution log information.
5. Click the **Download** icon or the **Download** link in the Details tab to save the file.

> [!note]
> **Key points:**
>
> - Access is controlled by assigned security rights. Contact your administrator if you cannot view or download.
> - Completed outputs include audit information: applied filters and execution logs.
> - To manage schedules (pause, resume, cancel, delete), use the **Scheduled Reports** tab.
> - Only the user who created or scheduled the report can delete its associated outputs.
> - When deleting a scheduled report, a confirmation message appears: *This action will delete the schedule and all associated report instances in the Reports Library. Do you want to continue?*
> - Once deleted, report output is permanently removed and cannot be recovered.

### Purge Reports Job

Administrators can clean up report data using the **Purge Reports** job.

| Property | Value |
|----------|-------|
| **Job Name** | Purge Reports |
| **Job ID** | `PURGE_REPORTS` |
| **Purpose** | Remove old/unnecessary report instances from the Reports Library |
| **Scope** | Permanently deletes selected instances; cannot be undone |

> [!warning]
> This job does not apply security restrictions and should be used with caution. It should only be executed by administrators with appropriate access rights.

---

## Troubleshooting

| Issue | Resolution |
|-------|-----------|
| No data in widgets | Ensure the **Load Data Warehouse** job has been run |
| Some users see data, others do not | Verify the **Load Data Warehouse Access Rights** job has been run (permissions issue) |
| TSV information missing from widgets | Confirm the **Include SQL Curve Data (BETA)** flag is enabled under System Options; if not, enable it and perform a full data warehouse load |
| Data or configurations not appearing as expected | Try refreshing your browser ג€” there are known refresh issues with Report Designer |

---

## System Reports

Clarity 16.4.0 introduced a suite of out-of-the-box (OOTB) **System Reports** in the Report Designer. These are delivered as system-level reports that provide immediate, value-driven reporting capabilities without requiring prior customization.

System Reports are **system-protected** — they cannot be edited or deleted directly. They serve as templates and examples. To use a system report as the basis for a custom report, you must copy it.

### Examples of Key System Reports

| Report Name | Description |
|---|---|
| **Capacity vs. Demand by Resource** | Identifies overallocation, resource bottlenecks, and opportunities for better resource planning. Previously available in Jaspersoft as resource utilization reports. |
| **Financial Budget vs. Forecast by Period** | Enables accurate comparison of budgeted vs. forecasted spend, allowing finance teams to proactively address variances. |
| **KPIs by Project Type Dashboard** | Provides instant analytics on key project metrics, highlighting areas for improvement and supporting continuous delivery optimization. |

> [!note]
> System Reports support responsive and interactive dashboard formats for dynamic data visualization and drill-in.

---

## Copy System Reports and Remap Data Providers

You can copy out-of-the-box system reports and remap their data providers, enabling you to create personalized copies without modifying the original system versions. This preserves upgradeability and system integrity — Clarity-delivered system reports may receive ongoing enhancements, and your copies remain unaffected.

### How It Works

When you copy a system report, the system offers two options for the associated Data Provider:

1. **Create a copy of the associated system Data Provider**: A copy of the system Data Provider is created automatically (with a prefix for uniqueness) and remapped to the copied report.
2. **Map to an existing non-system Data Provider**: Map the copied report to a compatible custom Data Provider that already exists. The system validates attribute compatibility before allowing remapping.

### Validation Before Copy

Before the copy is permitted, the system verifies that all referenced **attributes, filters, widgets, and localization settings** in the original report are present in the remapped Data Provider.

### Publish State After Copy

- The **copied Data Provider** is automatically published.
- The **copied report** is created in **Draft** status — you must review and manually publish it.

### Required Access Rights

Both of the following rights are required to perform the copy operation:

| Right | Purpose |
|---|---|
| `Reporting - Report Designer - Copy` | Copy the report |
| `Reporting - Data Provider - Copy` | Copy or remap the associated Data Provider |

### Steps to Copy a System Report

1. Log in to Clarity and navigate to **Reporting > Report Designer**.
2. Locate the system report in the grid (system reports are marked with the **System** indicator).
3. Select the report and click **Copy** (or right-click > **Copy**).
4. In the Copy dialog:
   - Enter a new unique name for the copied report.
   - Choose to **copy the system Data Provider** or **select an existing compatible Data Provider**.
5. Click **Copy**. The copied report is created in Draft status; the associated Data Provider is published.
6. Open the copied report, review and customize as needed.
7. Click **Publish** when ready to make the report available to users.

> [!note]
> Filters in data-provider joins are not considered when determining compatible remap targets. Virtual attributes such as "Has Assignments" and "Has Subtasks" on task objects behave differently in the data warehouse and may require periodic full data loads to reflect updates accurately.

---

## Related

- [[_MOC Reporting]]
- [[Data Providers]]

%%Source: p1767-1779, p1892-1900%%

