---
title: My Timesheet (Mobile)
tags:
  - howto
aliases:
  - Timesheets Mobile
canonical: true
audience: everyone
domain: mobile
---

# My Timesheet (Mobile)

## Overview

This page covers:

- Prerequisites
- Entering and submitting time
- Even spread total entry
- Task search and task add options
- Frictionless (virtual) time from Rally
- Timesheet rules flow
- Notes management
- Viewing past and future timesheets

## Sign-in Behavior and Login Memory

You can see a login configuration screen:

- the first time you set up SSO,
- after SSO password changes while the app still uses old credentials,
- when you tap `Change Login Method`.

Enter your SSO username and password, then tap `Log in`.

The app remembers:

- current server and username,
- last five successful login pairs (server URL + username).

Available actions:

- Delete old saved entry: tap `X Delete`.
- Modify saved settings: tap `Edit`.

> [!tip]
> To inspect image details in documentation, zoom in or open image in a new tab.

## Prerequisite Access Rights

Required rights to show timesheet menus:

- `Timesheets - Navigate` (Global)
- `Timesheets - Approve All` (Global)

> [!important]
> If required rights are missing, Clarity Mobile hides timesheet menu items.

## Enter Time and Submit Your Timesheet

`My Timesheet` is available when:

- resource is active,
- resource track mode is `PPM`,
- `Open for Time Entry` is enabled in Resource settings.

After login, the landing page shows:

- Current Period
- Next Period
- Previous Period

Tap `More Time Periods` to see additional open past periods.

> [!note]
> - `More Time Periods` shows open historical periods.
> - `Hide Additional Time Periods` collapses the expanded list.
> - A `Back to Top` button appears when scrolling.

Typical lifecycle:

- Open -> Submitted -> Approved
- If returned: Open -> Submitted -> Returned -> Submitted -> Approved

### Enter time

1. Open the target period.
2. Enter time per task cell.
3. Tap `Total` to see all tasks/time entries for the period.
4. Swipe left/right for day views.
5. Tap a day to view only tasks for that day.
6. Swipe left on a task to `Copy` or `Delete`.
7. Tap task name for task details.

Time entry follows Classic PPM timesheet options (hours or days, including rounding/increments).

### Submit timesheet

1. Review totals per day and full period.
2. Tap `Actions` > `Submit`.
3. If some tasks have no entered hours, review warning:
   - Tap `Confirm` to submit anyway.
   - Tap `Cancel` to add missing hours.

After submit, `Submitted!` appears briefly and you return to the landing page.

If attestation is enabled:

- confirm totals and tap `Submit`, or
- tap `Cancel` if not ready.

## Timesheet Rules Flow

1. Submit a timesheet.
2. Confirm submission.
3. If any rule fails, Clarity shows an error message.
4. Tap `Close`.
5. An error icon appears at top-right of the timesheet.
6. Tap the icon anytime to review errors.

> [!note]
> A top-right error icon means submission failed due to a Timesheet Rule error.

## Enter One Total and Spread Evenly Across Days

If administrators enable line-item totals, users can enter one total (hours or days) for a task and the app spreads it evenly across remaining days in the same period.

- Admin setting: `Allow entry of line item totals` (Classic PPM).
- Applies to both mobile and Classic PPM timesheets.

Example: enter 10 hours and the app distributes 2 hours per day across 5 days.

## Search and Select Tasks

1. Tap `Menu` > `My Timesheet`.
2. Open Current/Previous/Next period.
3. If no tasks, message appears: `No tasks. Add tasks to work on your timesheet.`
4. Tap three-dot action menu.
5. Tap `Search and Select Tasks`.
6. Search investments/tasks using the search bar.
7. Select tasks.
8. Tap `Add Tasks`.
9. Enter time.
10. Repeat for additional tasks if needed.

> [!note]
> You can swipe left on tasks to copy/delete, and tap task names for details.

## Manage Frictionless (Virtual) Time Entries from Rally

Frictionless entries are virtual entries generated from Rally data and are not initially predefined Clarity tasks/assignments. After submit/post, they are converted into tasks/assignments in the investment.

Prerequisite: Implement Frictionless Cost Accounting in Clarity.

1. Log in.
2. Tap `Menu` > `My Timesheet`.
3. Open required period.
4. Review imported virtual entries.
5. Update hours/notes as needed and submit.

Key capabilities:

- Copy entries
- Delete entries
- Edit actual hours
- Add notes

Related topics mentioned in source:

- Frictionless Time: Create Timesheets without Staff or Assignments on Investments
- Frictionless Time: Create Timesheets from Rally for a Specific Time Period

## Add Task from Previous Timesheet

1. Open target period in `My Timesheet`.
2. Tap three-dot action menu.
3. Tap `Add Tasks from Previous Timesheet`.
4. (Optional) Enable `Copy Time`.
5. Tap `OK`.

Success message: tasks from previous timesheet were added.

> [!note]
> If tasks were added previously without copied hours, rerun this option with copied time. If prompted that tasks with no time will be removed, tap `OK` to continue.

## Add Task from Assignments

1. Open target period in `My Timesheet`.
2. Tap three-dot action menu.
3. Tap `Add Tasks from Assignments`.

Tasks are auto-added from assignments.

## Add Task from Assignments (with ETC)

Use this option to add assignment tasks that have remaining effort and auto-populate actual hours.

Prerequisite: Enable `Populate assigned tasks with ETC` in Classic PPM Timesheet Options.

1. Log in.
2. Tap `Menu` > `My Timesheet`.
3. Select Current/Previous/Next period.
4. Tap three-dot action menu.
5. Select `Add Task from assignment (with ETC)`.

The app adds tasks and populates hours from ETC.

> [!note]
> - You can adjust populated values before submit.
> - If existing blank entries exist, the app prompts that tasks with no entered time will be removed before continuing.

## Manage Timesheet Notes (Timesheet-Level)

1. Tap `Menu` > `My Timesheet`.
2. Open any period.
3. Tap `Actions` > `Notes`.
4. Enter note text.
5. Optionally select a Date.
6. Tap `Post`.
7. Swipe left on your notes to edit/delete.
8. Confirm delete if prompted.

Notes are ordered chronologically with newest first.

## Manage Task Notes (Task-Level)

1. Tap `Menu` > `My Timesheet`.
2. Open any period.
3. Tap a task.
4. Enter note text.
5. Optionally select note date.
6. Tap `Post`.
7. Swipe left on your note to edit/delete.
8. Edit text/date and tap `Post` to save.

## View Future and Past Timesheets

Use the `Filter` option on My Timesheet page.

1. Tap `Filter`.
2. Select status values (optional).
3. Set `Start` and `End` dates for the period filter.
4. Tap `Apply`.

Key behavior:

- If status is not selected, all statuses are included.
- `Clear` resets filter criteria.
- `Apply` is disabled until required time period values are entered.
- When filtering by time period, open reporting periods within the entered range are shown.

## What's Next

You can create and deploy business rules for timesheets.

Reference topic: `Setting Up Rules for Timesheets`.

## Related
- [[_MOC Mobile App]]

%%Source: p2656-2683%%


