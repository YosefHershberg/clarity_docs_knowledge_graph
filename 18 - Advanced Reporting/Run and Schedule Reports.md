---
title: Run and Schedule Advanced Reports
tags:
  - howto
aliases:
  - Schedule Advanced Report
  - Run Advanced Report
  - Jaspersoft Schedule
canonical: true
audience: pm, admin, finance
domain: reporting
---

# Run and Schedule Advanced Reports

Advanced Reporting lets you run reports immediately or schedule them to run at a specified interval. You can control the output format, delivery method, and recipient list.

> [!tip]
> For scheduling reports in the modern Clarity Reporting workspace (Report Designer), see [[Working with Reports]].

---

## Prerequisites

- You can see the **Advanced Reporting** link in the Personal menu under **Home**. If not, contact your administrator.
- A list of reports exists in the Advanced Reporting repository.
- You have the appropriate access rights for viewing and running reports.

> [!warning]
> Your report output cannot exceed **500 pages**. This limit applies to each output format selected. As a best practice, filter the report to limit output data. Do not use reports to extract large volumes of data.

---

## Running a Report Immediately

1. Open **Home** and from **Personal**, click **Advanced Reporting**. The Advanced Reporting page opens.

2. On the **Reports** tile, click **View List**. A list of reports you have permission to access appears.

3. **Select and open a report.** On the left side of the report, enter values for the **Options** (these act as filters to focus the report on specific data).

4. Click **Apply**. The report runs and displays immediately.

---

## Scheduling a Report

1. Open **Home > Personal > Advanced Reporting**.

2. On the **Reports** tile, click **View List**.

3. **Right-click the report name** and select **Schedule**.

4. Click **Create Schedule**. The **New Schedule** page opens with the **Schedule** tab selected.

### Schedule Tab

Configure when and how often the report runs:

| Setting | Description |
|---|---|
| **Simple recurrence** | Run at a fixed interval (e.g., every X hours, days) |
| **Calendar recurrence** | Run on specific days/times using a calendar-based schedule |

### Parameters Tab

Select parameters similar to the report filter options. Parameters focus the report on the data you want for the scheduled run.

### Output Options Tab

Configure the export format and distribution:

**Formats** (select a maximum of two):

| Format | Notes |
|---|---|
| PDF | Standard document format |
| Excel / XLSX | Spreadsheet format |
| Word / DOCX | Document format |
| PowerPoint / PPTX | Presentation format |
| CSV | Data extract format |
| RTF | Rich text format |

> [!note]
> Select a maximum of **two output formats** per schedule (e.g., PowerPoint and Word, or PDF and Excel).

**Output to Repository**: Browse to select the destination folder.
- **Shared folder** (or subfolders): other users can access the output.
- **User folder** (under Users/username): only you can access the output.

Examples:
- `/shared/reports`
- `/users/username`

> [!warning]
> Do not save scheduled report output to the Clarity folder or its subfolders. These folders are overwritten during upgrades, and your outputs will be lost.

**Locale**: When the scheduled report runs, the report is presented in the specified language.

### Notifications Tab

Configure email notifications when the schedule runs:

| Field | Description |
|---|---|
| **Email Notification To** | Required recipient email address(es) for the report |
| **CC** | Optional carbon copy recipient(s) |
| **BCC** | Optional blind carbon copy recipient(s) |

- Enter email addresses separated by commas.
- Maximum 100 characters per field.
- You can enter email aliases (recommended for large recipient lists).
- The report can be included as an email attachment.

5. Click **Save** to save the schedule.

---

## Managing Scheduled Reports

After creating schedules, manage them from the Scheduled Reports list in Advanced Reporting:

| Action | Description |
|---|---|
| **View schedule** | Open a scheduled job to review its configuration |
| **Edit schedule** | Modify run time, recurrence, parameters, output, or notifications |
| **Change schedule** | Adjust frequency or timing of an existing schedule |
| **Delete schedule** | Remove the scheduled job permanently |

---

## Output Format Considerations

| Format | Best For | Notes |
|---|---|---|
| PDF | Sharing with stakeholders | Fixed layout, paginated |
| Excel/XLSX | Data analysis, further processing | Paginated and non-paginated options |
| PowerPoint/PPTX | Executive presentations | Paginated |
| CSV | Data extract, integration | Non-paginated; large data sets |
| Word/DOCX | Editable reports | Paginated |

> [!note]
> The 500-page limit applies to **paginated** formats such as Excel (Paginated) and XLSX (Paginated). Non-paginated exports such as Excel and XLSX are not subject to this limit.

---

## Time Zone and Date Considerations

- When you execute a report **immediately**, there is no time zone adjustment for business dates.
- When you **schedule** a report, time zone adjustment is made only for **system dates** (Created Date, Last Updated Date), based on the time zone selected in **Advanced Reporting > Output Options**.
- **Business dates** (investment start/finish, task start/finish, assignment start/finish) do not adjust for time zone.

---

## Related

- [[Create Ad Hoc Views]]
- [[Ad Hoc Views]]
- [[Reporting Domains]]
- [[Working with Reports]]
- [[_MOC Advanced Reporting]]

%%Source: p3185-3195%%
