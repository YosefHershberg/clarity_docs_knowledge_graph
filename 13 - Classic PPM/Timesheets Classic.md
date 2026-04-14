---
title: Submit a Timesheet (Classic)
tags:
  - howto
  - classic
aliases:
  - Timesheets Classic
canonical: true
audience: everyone
domain: classic
---

# Submit a Timesheet (Classic)

As a project team member or staff, you are responsible for tracking the hours you work on specific tasks and submitting a timesheet. Timesheets allow companies to plan budgets for complex projects, track resource allocation, and implement charge codes.

Timesheets are available in Clarity, Classic PPM, and the mobile app. Contact your administrator or manager to confirm which options are available at your organization.

> [!TIP]
> In release 15.1 and newer, you cannot use Classic PPM timesheets if your administrator has enabled timesheets in Clarity.

**Timesheet submission workflow:**
1. Open your timesheet.
2. Configure timesheet options.
3. Populate the timesheet with tasks.
4. Add entries manually if needed.
5. (Optional) Specify input type and charge codes.
6. (Optional) Add indirect category rows.
7. Enter your work time.
8. Submit for approval.
9. Correct if returned.

---

## Open Your Timesheet

**Steps:**
1. Click **Home > Personal > Timesheets**. The unsubmitted timesheets appear.
2. Click the **Timesheet** icon next to a timesheet.

> [!NOTE]
> You can also click the **Current Timesheet** icon (clock symbol) at the top right of any page to open your current week timesheet.

---

## Configure Your Timesheet

Configure the default appearance and time entry options for all your timesheets.

**Steps:**
1. Log in to Classic PPM and open a timesheet.
2. Click the **Configure** link on the lower right side of the page.
3. In the **Content and Layout** section, select column labels from the **Available Columns** list and move them to the **Selected Columns** list.
4. Set sorting options:
   - **Default Sorting Column** — Column to sort tasks by (e.g., parent investment, description, short name, or start date).
   - **Sorting Order** — **Ascending** (lowest to highest) or **Descending** (highest to lowest).
5. In the **Time Entry Options** section, set auto-populate preferences:
   - **Populate assigned tasks** — Automatically populates the timesheet with task assignments currently open (within the time period plus the range your administrator set, default 7 days).
   - **Copy time entries from previous timesheet** — Copies open task entries from the previous timesheet.
   - **Include actuals from previous timesheet (except incidents)** — Includes actual hours from the previous timesheet, except incidents and one-time entries (vacation, sick days on non-working days).
   - **Display Unit** — **Hours** or **Days**.
   - **Decimal Places** — Number of decimal places for the selected display unit.
6. Click **Save**.

---

## Populate a Timesheet

When you first open a timesheet it is blank. You can automatically populate it with tasks.

**Steps:**
1. Open your new current week timesheet.
2. (Optional) Click **Configure** to set or change auto-populate options.
3. Click **Populate** to fill the timesheet based on your configured options.

> [!NOTE]
> The **Populate** button appears only if automatic populate options are configured.

---

## Add Entries to a Timesheet Manually

You can add additional tasks from your project after populating.

**Steps:**
1. Click the **Add Task** button on the open timesheet.
2. Select the check box next to the tasks you want to add and click **Add**.

---

## Specify Entry Input Type and Charge Codes (Optional)

Input type and charge codes are used for payroll purposes. Verify your company's policy before submitting.

**Steps:**
1. Open a timesheet.
2. Select an input type code or charge code from the **Input Type Code** or **Charge Code** drop-down in a time entry row.
3. (Optional) Select the check box next to an entry you want to split and click **Split**.

> [!NOTE]
> Splitting an entry allows you to enter specific hours under two different charge codes. After splitting, select a type or charge code for the second entry.

4. Save the changes.

---

## Add a Timesheet Row Under an Indirect Category (Optional)

Your manager may ask you to add rows under an indirect category.

> [!TIP]
> Timesheets in Clarity 15.x no longer support indirect time entries. Use **Other Work** instead. Note that switching may cause differences in totals if indirect time was previously entered and approved in Classic PPM.

**Steps:**
1. Open a timesheet.
2. Click **New Indirect Row**.
3. Select **Charge Codes** or **Input Type Codes** if applicable.
4. Save the changes.

---

## Enter Your Work Time

Record the time you worked each day on specific task assignments.

**Steps:**
1. Open a timesheet.
2. Enter the number of hours worked on each assignment each day in the **Date** cells.
3. Save the changes.

> [!NOTE]
> To distribute hours evenly across all working days, enter the total number of hours in the **Total** column for the time entry row. If you enter values in both the **Date** and **Total** cells, the **Date** cell value takes precedence.

---

## Submit a Timesheet for Approval

Your submitted timesheet goes to the timesheet approver. The status remains **Unapproved** until it is approved.

Do one of the following:
- From the timesheets list page, select the timesheet and click **Submit for Approval**.
- Open the timesheet and click **Submit for Approval**.

---

## Correct a Returned Timesheet

When your manager returns a timesheet for correction, you receive a notification (by alert, email, or SMS depending on your account settings).

**Steps:**
1. Open your returned timesheet (e.g., click the link in the notification).
2. Make the requested corrections.
3. Resubmit for approval.

---

## Search Special Characters Reference

When using global search, the following special characters must be escaped with a backslash (`\`):

| Character | Symbol | Escape |
|---|---|---|
| Plus sign | `+` | `\+` |
| Minus sign | `-` | `\-` |
| Double ampersand | `&&` | `\&&` |
| Double vertical bars | `\|\|` | `\|\|` |
| Exclamation point | `!` | `\!` |
| Left parenthesis | `(` | `\(` |
| Right parenthesis | `)` | `\)` |
| Left curly brace | `{` | `\{` |
| Right curly brace | `}` | `\}` |
| Left square bracket | `[` | `\[` |
| Right square bracket | `]` | `\]` |
| Circumflex | `^` | `\^` |
| Quotes | `"` | `\"` |
| Tilde | `~` | `\~` |
| Asterisk | `*` | `\*` |
| Question mark | `?` | `\?` |
| Colon | `:` | `\:` |
| Backslash | `\` | `\\` |

---

## Related

- [[_MOC Classic PPM]]

%%Source: p2087-2091%%
