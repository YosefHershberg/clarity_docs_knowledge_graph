---
title: Enter Hours and Submit a Timesheet
tags:
  - howto
  - concept
aliases:
  - Time Entry
  - Submit Timesheet
  - Create Timesheet
  - Populate Timesheets Job
canonical: true
audience: everyone
domain: timesheets
---

# Enter Hours and Submit a Timesheet

As a team member, you use timesheets to track the hours you work on specific tasks and investments. Accurate time reporting drives project cost tracking, charge code analysis, and resource allocation insights. Your submitted timesheet goes to your manager for approval before hours are posted to project actuals.

%%Source: p1589-1610%%

---

## Open an Unsubmitted Timesheet

1. Select **Timesheets** from the main menu (if you have access to other features) — or the Timesheets page opens automatically if it is your only access.
2. The timesheet for the period closest to the current date is shown by default.
3. Use the left/right arrows at the top to navigate to a different period.

> [!tip]
> Click the month name in the date picker to jump to a specific year without scrolling period by period.

---

## Create a Timesheet

Clarity provides three methods to populate a timesheet with tasks. Not all methods are always available — for example, Copy Previous Timesheet is unavailable if you have no prior timesheet, and Add Assigned Tasks is unavailable if you have no current assignments.

### Method 1: Add Tasks (Manual or from Assignments)

1. Click **MY TIMESHEETS** and open a time period.
2. Click **Add Tasks** and choose from these options:

| Option | What it does | When it is available |
|---|---|---|
| **Add Assigned Tasks** | Populates timesheet with assignments currently open for time entry within the period (plus non-zero ETC assignments up to 7 days outside the period by default) | You have active assignments |
| **Add Assigned Tasks (with ETC)** | Same as above but filters to assignments with non-zero Estimated Time to Complete | Admin has enabled "Populate Assigned Tasks (with ETC)" in Timesheet Options |
| **Copy Previous Timesheet** | Duplicates task entries (not hours) from your most recently submitted timesheet | Admin enabled "Copy time entries from previous timesheet"; previous timesheet exists and is within four periods |
| **Copy Previous Timesheet (with time)** | Copies both tasks and actual hours, excluding incident actuals and one-time non-working-day entries | Admin enabled "Include actuals from previous timesheet (except incidents)"; same recency rules apply |
| **Select Tasks** | Opens a filterable list of all work items available to you | Always available |

> [!note]
> When you use Add Assigned Tasks or Copy Previous Timesheet on a timesheet that already has tasks with no time entered, Clarity prompts: "Tasks with no time entered will be removed. Do you want to continue?"

3. After the initial population, click **Add Tasks** again at any time to add more work items.
4. Click the task name link to navigate back to Task Properties.

### Method 2: Populate Timesheets Job

An administrator or authorized user can run the **Populate Timesheets** job to pre-fill timesheets for a group of resources, typically as a scheduled process at the start of each period.

1. In Classic PPM, navigate to **Home > Personal > Reports and Jobs**.
2. Click **Jobs > Available Jobs**.
3. Click the **Populate Timesheets** job.
4. Enter the required parameters (time period, resource filter, etc.).
5. Click **Submit**.

> [!info]
> Entries created by this job have **Entry Method = Automated** and **Job Type Code = populate_timesheet_using_etc** (or similar). See [[Advanced Timesheet Features#Manual vs. Automated Time Entries|Manual vs. Automated Time Entries]] for details.

### Method 3: Allow Submission with No Tasks

If your administrator has enabled **Allow submission of timesheets with no tasks** in Timesheet Options, you can submit an empty timesheet (for periods where you did no project work).

1. Click **MY TIMESHEETS** and open the time period.
2. Without adding any tasks, click **Submit**.

---

## OTE Field Impact on Timesheet Options

The **Open for Time Entry (OTE)** field on an assignment controls whether that assignment appears on your timesheet. The table below summarizes the interaction:

| Task | Assignment OTE | Add Assigned Tasks | Select Tasks |
|---|---|---|---|
| Task 01 | Enabled | Task is added to the timesheet | User can view and add the task |
| Task 02 | Disabled | Task is **not** added | User can view the task but cannot add it |

> [!important]
> If the Assignment OTE is enabled but the Project-level or Task-level OTE is disabled, the resource still cannot add the task to their timesheet. All three levels must allow time entry.

**Effect on specific Timesheet Options when Assignment OTE is disabled:**

| Timesheet Option | Behavior |
|---|---|
| Populate assigned tasks | Clarity skips the task; if all tasks are disabled, the "Add Assigned Tasks" option itself becomes disabled |
| Copy time entries from previous timesheet | Clarity does not copy disabled-OTE tasks; if all tasks are disabled, an error message is shown |
| Include actuals from previous timesheet | Same behavior as Copy |

---

## Enter Hours on a Timesheet

1. On your open timesheet, find the task row.
2. Click the cell for the day and enter the number of hours worked.
3. Clarity allows entry of more than 24 hours per day — this supports scenarios where you record an aggregate total spanning multiple calendar days on a single date.
4. Repeat for each task and each day.
5. Click **Submit** when all entries are complete.

> [!note]
> If your administrator configured the time entry display unit as **Days** in Classic PPM, your timesheet shows and accepts values in days rather than hours.

**Adding and removing task rows:**
- Click **Add Tasks** to add more work items at any time.
- Click **Remove Tasks**, select checkboxes (or **Select All**), and click **Delete And Close** to remove multiple rows.
- Use the **three-dot menu** on a row to **Copy** or **Delete** a single entry.
- Click **Expand All / Collapse All** to manage the view.

> [!important]
> You can only enter time if:
> - The investment and task are both **Open for Time Entry**
> - You are an **active user**
> - You belong to the **labor resource class**
>
> The following task types are excluded from **Add Tasks** entirely: milestone tasks, phases (summary tasks), tasks on inactive investments, tasks with Track Mode ≠ PPM, tasks with OTE = false, tasks on template investments, and tasks on programs.

---

## Timesheets and Estimate-to-Complete (ETC)

Your administrator can add an **ETC** column to your timesheet. When you change this value, it becomes a **pending ETC** — the number displays in bold blue and hovering over it shows the original value.

A pending ETC must be explicitly accepted or rejected by the project manager or resource manager in the investment's Assignments view.

**Steps for the PM/RM to accept or reject a pending ETC:**

1. Open the investment and click the **Assignments** or **Tasks** module.
2. Click **Columns** and add the **ETC** and **Pending ETC** fields.
3. To **accept**: copy the Pending ETC value into the ETC cell, then delete the Pending ETC value.
4. To **reject**: delete the value in the Pending ETC cell.

---

## Tracked Time and Percent Gauges

Two gauges at the top of every timesheet provide quick visibility into utilization:

| Gauge | What it shows |
|---|---|
| **Tracked Time** | Total hours/days entered vs. total available work time for the period. Turns **red** when tracked time exceeds available time. |
| **Project Time** | Percentage of tracked time booked against **Project** investment types vs. all other investment types. |

> [!info]
> Both gauges must be enabled in Classic PPM: go to **Administration > Project Management > Timesheet Options > Modern UX Options** and select **Display Effort Gauge** and **Display Project Time Gauge**.

---

## Timesheet Notes

Notes in Clarity timesheets exist at two distinct levels, and it is important not to confuse them.

### Timesheet-Level Notes

Notes that apply to the entire timesheet (e.g., "Out of office Wednesday–Thursday"):

1. Open your timesheet.
2. Click **NOTES** at the top of the timesheet.
3. Add, edit, or delete notes as needed.

### Time Entry-Level Notes

Notes that apply to a specific task row or daily cell:

1. Click the **three-dot action menu** on the task row and select **Notes**, OR
2. Click the **Notes icon** that appears on a row that already has notes.
3. Add, edit, or delete the entry-level note.

> [!important]
> The Notes panel accessed through a time entry row does **not** display timesheet-level notes. These are two separate note contexts — entry notes are scoped to the row; timesheet notes are scoped to the full timesheet period.

---

## Notify Manager to Open a Task for Time Entry

If you want to log time against a task that is not open for time entry or not assigned to you, you can notify the project manager directly from the timesheet.

1. Open your timesheet.
2. Click **Add Tasks** → **Select Tasks**.
3. In the filter panel, set **Open for Time Entry = No** to surface closed tasks.
4. Right-click the task and select **Notify Manager**.

Clarity sends a notification to the Investment Manager. The notification type depends on the situation (see [[Advanced Timesheet Features#Timesheet Notifications|Timesheet Notifications]]).

---

## Submitting and Correcting Timesheets

### Submit

Click **Submit** when all hours are entered. If your organization uses **Timesheet Attestation**, a confirmation dialog appears — click **CONFIRM** to complete submission.

If a timesheet **rule violation** exists, an error message appears. Click **Errors** to see the details, fix the issues, and resubmit.

### Return a Submitted Timesheet

Open a submitted (not yet approved) timesheet and click **Return** to move it back to Open status for editing. You cannot return an **approved** timesheet unless you have timesheet approval rights.

### Correct a Returned Timesheet

When your resource manager returns your timesheet:
1. Open the returned timesheet (click the link in the notification or navigate to My Timesheets).
2. Review any notes left by the approver explaining what to correct.
3. Make corrections and click **Submit**.

### Adjust a Posted Timesheet

Approved timesheets are posted — hours flow to project financials. To correct a posted timesheet, see [[Advanced Timesheet Features#Adjust an Approved and Posted Timesheet|Adjust an Approved and Posted Timesheet]].

---

## View Timesheets in a Closed Period

When a time reporting period is **closed**, you can view your timesheet for that period as read-only. To edit, adjust, or reprocess a timesheet in a closed period, the system administrator must re-open the period.

---

## Related Notes

- [[Review and Approve]] — Manager review and approval workflow
- [[Advanced Timesheet Features]] — Enter Time for Others, attestation, charge codes, notifications, field security
- [[Frictionless Time]] — Unstaffed entry, Rally integration, auto-submit, auto-approve
- [[Grid Layout Management]] — Timesheet grid views, filters, bulk actions
- [[_MOC Timesheets]]
