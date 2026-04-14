---
title: Advanced Timesheet Features
tags:
  - concept
  - howto
  - admin
aliases:
  - Timesheet Attestation
  - Enter Time for Others
  - Enter Time for a Team
  - Charge Codes
  - Input Type Codes
  - Adjust Posted Timesheet
  - Timesheet Notifications
  - Field Level Security Timesheets
canonical: true
audience: everyone
domain: timesheets
---

# Advanced Timesheet Features

This note covers the advanced timesheet capabilities in Clarity 16.4.1: delegated time entry (for others or teams), attestation, spreading totals, charge codes, adjusting posted timesheets, notifications, manual vs. automated entry tracking, and field-level security.

%%Source: p1595-1620%%

---

## Enter Time for Others

A resource manager or team member with the appropriate access rights can create, edit, and submit timesheets on behalf of another team member. This is useful when a resource is unavailable (e.g., travelling, on leave).

**Required access rights:**
- **Resource - Enter Time** (instance, OBS, or global) for the target resource.
- **Resource - Approve Time** (instance, OBS, or global).

**Additional conditions that must be met for the target resource:**
- Status is **Active** or **Locked**.
- **Open for Time Entry** is checked.
- **Track Mode** is set to PPM.
- The team member is added in the Team for a project in Classic PPM.

**Steps:**

1. Click **MY TIMESHEETS**.
2. Select the required time period.
3. Click the **Select resource to enter time** icon. A list of eligible team members appears.
4. Click **View** next to the target resource.
5. Click **Add Tasks** and choose the relevant task population option.
6. Enter the hours for the team member.
7. Click **SUBMIT**.

> [!note]
> From Clarity 15.6.1 onward, you can log time for **inactive resources** as well.

---

## Enter Time for a Team

If a task is assigned to a **team resource** (rather than an individual), you can enter time for the entire team. You only need access rights to the team resource itself — not to each individual team member.

**Required access rights:** Resource - Enter Time, Resource - Approve Time.

**Steps:**

1. Click **MY TIMESHEETS**.
2. Select the required time period.
3. Click the **Select Resource** icon.
4. Filter the list using: Resource, Resource Manager, Resource OBS, or Status (default filter: Open).
5. Select the team resource name or click **View**.
6. Add tasks and enter hours as normal, then submit.

> [!tip]
> When you submit a timesheet for a task assigned to a team, the project's **planned-to-actuals** financials reflect the team actuals based on the time you entered.

---

## Timesheet Attestation

Organizations with time compliance requirements (e.g., government contracts, regulated industries) can require resources to explicitly confirm their entries before submission.

**How it works:**
- When the resource clicks **SUBMIT**, a confirmation message (attestation statement) appears.
- The administrator can edit the text of this statement via Timesheet Options.
- The resource must click **CONFIRM** to complete the submission. Clicking away or canceling leaves the timesheet unsubmitted.

> [!info]
> Attestation is an optional feature configured by the administrator. If you do not see a confirmation dialog on submit, attestation is not enabled for your organization.

---

## Spread Total Across Multiple Days

If enabled by your administrator, you can enter a total number of hours (or days) in the **Total** column of a timesheet row. Clarity will evenly distribute that total across all working days in the row.

> [!tip]
> This is useful when you know you worked a fixed total on a task but did not track which specific days. Enter the total and let Clarity spread it automatically.

> [!warning]
> Any existing daily values in that row are **replaced** by the new spread values. There is no merge — the spread overwrites prior entries.

**Prerequisite:** Your administrator must enable the **Spread Total** option in Timesheet Options.

---

## Non-Working Days

Non-working days (weekends, holidays configured in the resource calendar) are displayed as **gray columns** on the timesheet grid. You can still enter hours on non-working days — Clarity does not block entry on those columns.

**Non-project work time (holidays, vacation, personal leave):**
- Your project or resource manager can set up an **Other Work** investment type in Classic PPM to track non-project hours.
- Select it as a work item on your timesheet and record holiday, personal leave, or vacation hours against it.

> [!tip]
> If you use Other Work to track vacation or personal time, mark those days as non-working on your calendar. This prevents the hours from being carried over if you use the **Copy Previous Timesheet** option.

---

## Charge Codes and Input Type Codes

Charge codes and input type codes are used primarily for **payroll processing** and financial classification of time entries.

**Steps to apply a charge code or input type:**

1. Create or open a timesheet in **Open** status.
2. Ensure the **Input Type Code** and/or **Charge Code** columns are visible (configure via the Columns panel or Classic PPM Timesheet Options).
3. Click the cell in the **Input Type Code** or **Charge Code** column for the relevant task row.
4. Select a value from the picklist, or start typing to search.

> [!info]
> Input type codes and charge codes must be defined by your administrator before they are available for selection. Contact your system administrator if the values you need are not in the list.

---

## Adjust an Approved and Posted Timesheet

Once a timesheet is approved, it is **posted**: actual hours flow into project financials and cost actuals. If you discover an error after posting, you can create an **adjustment timesheet** rather than editing the original.

**Steps:**

1. Open the posted timesheet.
2. Click **Adjust**.
3. A new timesheet appears for the same time period in **Open** status. Make your corrections.
4. Click **Submit** to route the adjustment through the normal approval workflow.

**To cancel an adjustment before submitting:**
- Click **Delete Adjustment**. This option is only available while the adjustment timesheet is in **Open** or **Returned** status.

> [!note]
> The drop-down on the Adjustment Timesheet bar shows all dates on which the timesheet was adjusted, giving you a full audit trail of changes.

> [!warning]
> Inactive tasks on a posted timesheet appear as **read-only** in the adjustment view. You cannot re-enter time against them.

---

## Timesheet Notifications

Clarity supports six timesheet notification types. Notifications must be enabled via **Settings** (governed by Feature Toggles), after which they appear under the Bell icon in the main navigation.

| Notification | Trigger | Target Link |
|---|---|---|
| **Timesheet - Overdue** | Approver clicks **Remind** on a resource's unsubmitted timesheet | Resource's My Timesheet page |
| **Timesheet - Request To Add Closed and Unassigned Task** | Resource clicks **Notify Manager** on a task that is both closed (not open for time entry) and unassigned | Task Module of the investment |
| **Timesheet - Request To Add Closed Task** | Resource clicks **Notify Manager** on a task not open for time entry (but assigned) | Task Module of the investment |
| **Timesheet - Request To Add Unassigned Task** | Resource clicks **Notify Manager** on a task assigned to someone else | Task Module of the investment |
| **Timesheet - Returned** | Approver returns (rejects) a submitted timesheet | Resource's My Timesheet page |
| **Timesheet - Submitted** | Resource submits a timesheet | Resource's My Timesheet page |

> [!note]
> If the Task module is not configured in the investment's Blueprint, clicking the Target Link for task-related notifications will open the Properties module instead.

**To enable timesheet notifications:**
1. Click the user avatar or settings gear → **Settings**.
2. Navigate to the **Notifications** section.
3. Toggle on the timesheet notification types you want to receive.

---

## Manual vs. Automated Time Entries

Clarity 16.3.3 introduced two auditing fields — **Entry Method** and **Job Type Code** — that let you distinguish entries made by users from those created by system jobs.

### Entry Method Values

| Value | Meaning |
|---|---|
| **Manual** | Entry was created or last modified by a user (selecting tasks, copying, editing hours, charge codes, or lookup values) |
| **Automated** | Entry was created by a system job (e.g., Populate Timesheets, Timesheet Integration) |
| *(null/empty)* | Entry predates the Clarity 16.3.3 upgrade |

> [!note]
> If a user modifies an **Automated** entry, the Entry Method changes to **Manual** — but the original **Job Type Code** is retained to preserve the audit trail.

### Job Type Code

Displays the name of the job that created or last updated the entry (e.g., `timesheet_integration`, `populate_timesheet_using_etc`). Null for manual entries or pre-16.3.3 entries.

### Common Audit Scenarios

| Scenario | Entry Method | Job Type Code |
|---|---|---|
| Created by Populate Timesheets job | Automated | `populated` |
| Created manually or copied | Manual | null |
| Automated entry later modified by user | Manual | Retained from original job |
| Created before Clarity 16.3.3 | null | null |

**To configure these columns as visible:**
1. Navigate to **Timesheets** in the main menu.
2. Click **Columns**.
3. In the Columns panel, check **Entry Method** and **Job Type Code**.

> [!info]
> Entry Method and Job Type Code are available in **Data Warehouse**, **Data Provider**, and **Report Designer**, making them useful for compliance and audit reporting. They can also be used in **Timesheet Rules** (e.g., prevent manual modification of automated entries for specific charge codes).

---

## Field Level Security in Timesheets

Administrators can restrict or relabel individual time entry attributes using **Field Level Security (FLS)**.

**What administrators can do:**
- Mark a time entry attribute as secured so only members of a specific Access Group can edit it.
- Relabel out-of-the-box field names (e.g., rename "User Value 01" to "Expense Category") — the new label propagates throughout the timesheet column configuration panel.
- Configure FLS via **Administration > Attributes**.

**What resources see:**
- A visual indicator on the timesheet identifies fields under FLS control.
- If you are not in the Access Edit group for a secured attribute, the field is read-only.

> [!warning]
> The **Copy** option in the Three-Dot Action menu on a time entry row is **hidden** if:
> - The user is not part of the Access Edit group, AND
> - At least one configured time entry attribute on that row is secured.
> This prevents inadvertent copying of secured attribute values to new rows.

---

## Related Notes

- [[Enter Hours and Submit]] — Core time entry and submission workflow
- [[Frictionless Time]] — Unstaffed entry, Rally integration, auto-submit, auto-approve
- [[Review and Approve]] — Manager approval workflow
- [[Grid Layout Management]] — Timesheet grid, Has Errors, OBS filters
- [[_MOC Timesheets]]
