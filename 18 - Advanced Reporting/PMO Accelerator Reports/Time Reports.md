---
title: PMO Time Management Reports
tags:
  - reference
  - admin
aliases:
  - Time Reports
---
# PMO Time Management Reports

The Time Management reports provide visibility into timesheets entered by resources across the organization. They also identify missing timesheets and support timesheet compliance monitoring.

> Source: Clarity 16.4.1 documentation, pp. 3476–3496

## Reports Included

| Report Name | Resource ID | Data Source |
|---|---|---|
| Resource Time Review by Manager | CSK_RES_ResTimeReviewByMgr | DWH Bean |
| Resource Time Summary and Detail | CSK_RES_TimeSummaryAndDetail | DWH Bean |
| Timesheet Detail | CSK_RES_TimesheetDetail | DWH Bean |
| Time Compliance | CSK_TME_Compliance | DWH Bean |
| Time Compliance Detail | CSK_TME_ComplianceDetail | DWH Bean |
| Missing Time | CSK_TME_MissingTime | DWH Bean |

---

## Resource Time Review by Manager

**Description:** Displays timesheet entries for each resource grouped by investment manager or resource manager. Shows hours entered on the timesheet by day and in total for each investment/time entry/resource. Supports weekly time periods only.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- At least one timesheet for the selected time period and status
- Weekly time reporting periods must be created (Administration/Project Management-Time Reporting Periods)
- Resource must have "Open for Time Entry" checked and Track Mode set to Clarity or Other
- Resource hire date and termination date must cover the time period
- Investment must have "Open for Time Entry" checked and Track Mode set to Clarity
- If project: task's "Open for Time Entry" must also be checked
- Resource must be assigned to at least one investment task
- Time slice: `DAILYRESOURCETIMECURVE`

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Resource, Employment Type, Investment Type (default: All), Investment Manager, Investment, Time Period (required), Timesheet Status (default: Open/Submitted/Returned/Approved/Posted), Group By (Investment Manager/Resource Manager, default: Resource Manager), Include Inactive Resources/Investments

**Key Fields:** Timesheet period ending, timesheet status, time entry type, investment, task description, task status, input type code, hours by day (7 columns) and total

**Note:** Only weekly time periods are supported. Column headings adjust if the work week starts on a day other than Monday.

**Security:** Resource view rights

---

## Resource Time Summary and Detail

**Description:** Displays timesheet hours and notes for each resource and time period. Groupable by resource manager, time period, or any OBS level (1–10). Provides summary and detail rows of timesheet data.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resources configured for time entry in Classic PPM
- If no timesheet exists for the period and selected status, resource displays with 0 hours

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Resource, Employment Type, Investment Type, Investment Manager, Investment, Time Period (required), Timesheet Status, Group By (Resource Manager/Time Period/OBS Level 1–10), Include Inactive Resources/Investments

**Security:** Resource view rights

---

## Timesheet Detail

**Description:** Provides a detailed view of individual timesheet entries including daily hours, investment details, task details, and timesheet notes. Useful for timesheet review and audit.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- At least one timesheet for the selected criteria

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Resource, Investment Type, Investment, Time Period, Timesheet Status, Include Inactive Resources/Investments

**Security:** Resource view rights

---

## Time Compliance

**Description:** Displays timesheet compliance rates by OBS level. Shows the percentage of timesheets that are submitted/approved on time. The report rolls up compliance data across OBS hierarchy levels. Configurable yellow and red threshold percentages highlight compliance issues.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Time reporting periods must be created

**Key Parameters:** Resource OBS Type/Unit (required), Resource Manager, Employment Type, Time Period (required), Number of OBS Levels (1–4, default: 2), Compliance % Yellow Threshold, Compliance % Red Threshold

**Key Behaviors:**
- **Number of OBS Levels:** Controls how many OBS levels display in the report, rolling up compliance % and timesheet counts from descendant units
- **Color thresholds:** If Compliance % < Yellow Threshold → yellow; if < Red Threshold → red

**Security:** Resource view rights

---

## Time Compliance Detail

**Description:** Detail-level companion to Time Compliance. Displays individual resource compliance information including resource name, email, time period ending, timesheet status, employment type, and resource manager. Grouped by OBS level.

**Prerequisites:** Same as Time Compliance

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Employment Type, Time Period (required), Number of OBS Levels (1–4, default: 2)

**Key Fields:** Resource name, email address, time period ending, timesheet status, employment type, resource manager

**Inclusion Criteria:**
- Resource must have "Open for Time Entry" checked and Track Mode set to Clarity or Other
- Resource must be employed during the time period (hire date before period end, termination date after period start)
- Roles excluded; only resources included

**Security:** Resource view rights

---

## Missing Time

**Description:** Displays resource available hours, timesheet hours entered, and missing hours by resource and time period. Groupable by resource manager or OBS level 1–10. Includes two summary charts: Timesheet Count Summary (Completed/Partial/Missing) and Timesheet Hours Summary (Available/Entered/Missing/Overage). Supports two missing time calculation methods.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resources configured for time entry (Open for Time Entry, Track Mode = Clarity or Other, valid hire/termination dates)
- Time reporting periods created with "Open" status
- Resource must be assigned to at least one investment task
- **Special:** `DAILYRESOURCEAVAILCURVE` time slice (NOT a DWH request — must be configured separately to cover reporting dates)

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Resource Role, Resource, Employment Type, Time Period (required), Timesheet Status (default: Open/Submitted/Returned/Approved/Posted), Group By (Resource Manager/OBS Level 1–10), Calculate Missing Time Based on Timesheet Status (boolean), Include Inactive Resources, Show Timesheet Summary Graph

**Calculate Missing Time Based on Timesheet Status:**
- **Checked:** Timesheets with selected statuses are considered "missing" (e.g., selecting Open and Submitted means those are the missing ones)
- **Unchecked:** Compares hours entered to available hours — if entered < available, the difference is missing time

**Key Definitions:**
- **Completed timesheet:** Hours entered ≥ resource available hours for the period
- **Partial timesheet:** Hours entered < resource available hours
- **Missing timesheet:** Zero hours entered OR no timesheet created for the period
- **Overage:** Hours entered > available hours

**Inclusion Criteria:** Resources must have Open for Time Entry checked, Track Mode = Clarity, valid hire/termination dates. Roles excluded.

**Security:** Resource view rights

---

## Common Time Report Requirements

- Weekly time reporting periods required for most reports (`DAILYRESOURCETIMECURVE` time slice)
- The "Adjusted" timesheet status = timesheet that was posted then changed and re-posted; generally not selected
- Resources without timesheets for a period appear with Open status and 0 hours (not excluded from reports)
- Investment must have "Open for Time Entry" enabled; project tasks must also have this enabled
- Resources can self-assign to tasks or create unplanned tasks if project settings allow

## Related

- [[_MOC Advanced Reporting]]
- [[PMO Accelerator Setup]]
- [[Roles and Permissions]]
- [[Resource Reports]]

%%Source: p3476-3496%%
