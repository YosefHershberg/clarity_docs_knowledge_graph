---
title: PMO Program Management Reports
tags:
  - reference
  - admin
aliases:
  - Program Reports
---
# PMO Program Management Reports

The Program Management reports provide visibility into program status, financial performance, milestone tracking, and budget vs. forecast analysis. Reports aggregate data from programs and their constituent projects.

> Source: Clarity 16.4.1 documentation, pp. 3535–3559

## Reports Included

| Report Name | Resource ID | Data Source |
|---|---|---|
| Program Status Detail | CSK_PRG_ProgramStatusDetail | DWH Bean |
| Program Budget vs. Forecast by Period | CSK_PRG_BudgetForecastByPeriod | DWH Bean |
| Program Budget vs. Forecast by Period Detail | CSK_PRG_BudgetForecastbyPeriodDetail | DWH Bean |
| Program Milestone Dependencies | CSK_PRG_MilestoneDependencies | Classic PPM Bean |

---

## Program Status Detail

**Description:** Provides a comprehensive one-page status report for programs including status indicators (overall, schedule, scope, cost/effort), financial performance, key milestones, team data, and risk/issue/change request details. Configurable sections allow showing/hiding financials, milestones, team, risks, issues, and change requests. Status trending arrows compare current to prior status report.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- At least one program status report completed (most recent = greatest report date with Final status or no status value)
- Program and its projects must have planned/budgeted cost in financial summary for financial section
- Milestones must have "Key Task" field checked to display
- Projects must have team members allocated for team section
- Projects must have team members assigned to tasks with estimates for ETC/EAC hours
- Actual hours must be posted for actuals in team and financial sections
- Baselines required for baseline hours and projected variance
- **Update Cost Totals** job required for project cost amounts in performance section
- Hierarchy allocation percentages must be > 0% for project amounts to roll up

**Key Parameters:**
- Program OBS Type/Unit, Program Manager, Program, Program Status (default: Approved/Cancelled/On Hold/Unapproved)
- Project Status
- Program Financial Plan Type (Budget/Planned, default: Budget)
- Project Financial Plan Type (Budget/Planned, default: Budget)
- Show Financials (Program and Project/Program Only/Project Only/Do Not Display, default: Program and Project)
- Show Milestones (same options)
- Show Team (Summarize by Role/Display Project Teams, default: Summarize by Role)
- Show Risks (same options as Show Financials)
- Show Issues (same options)
- Show Change Requests (same options)
- Risk/Issue/CR Priority (Low/Medium/High, default: all)
- Risk/Issue/CR Status (Open/Work in Progress/Resolved/Closed, default: Open/Work in Progress/Resolved)
- Rollup Project Financials to Program (boolean)
- Include Inactive Programs/Projects/Resources

**Key Calculations:**

**Status stoplights:**
- Green = On Track (< 40), Yellow = Minor Variance (40–89), Red = Significant Variance (≥ 90)
- Source: `dwh_inv_status_report.overall_status`

**Trending arrows:**
- Upward = status improved vs. prior report
- Rightward = no change
- Downward = status worsened

**Financial remaining:** `(Planned or Budget Cost − Actual Cost) × Hierarchy Allocation %`

**Projected Variance:** `(EAC Cost − BAC Cost) × Hierarchy Allocation %`

**Days Late (milestones):**
- If baseline: finish date − baseline finish date (positive = late)
- If no baseline and past due: today − finish date
- Stoplight: Green ≤ 0, Yellow 1–10, Red > 10

**Priority stoplights:** Green = Low, Yellow = Medium, Red = High

**Rollup Project Financials to Program:**
- **Checked:** Program amounts = aggregate of program + project amounts
- **Unchecked:** Program amounts = program values only; extra rows show Project Total and Variance (program vs. project aggregate)

**Security:** Project view rights

> **Note:** Starting with Release 14.4, status values changed from "Minor Variance" → "Needs Help" and "Significant Variance" → "At Risk."

---

## Program Budget vs. Forecast by Period

**Description:** Displays budget or planned cost compared to forecast cost with variances by fiscal period for programs. Supports four program financial planning structures:
1. Rolling up project financials to the program
2. Program-level budgeting with program and project-level forecasts
3. Program-level budgeting with project-level forecasts only
4. Program and project-level budgets and forecasts

Groupable by up to two financial plan grouping attributes. Drills down to Program Budget vs. Forecast by Period Detail.

> **Warning:** This report runs numerous queries. Apply filters to avoid performance issues.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Program or at least one of its projects must have an approved budget (if Financial Plan Type = Budget) or cost plan (if Financial Plan Type = Planned)
- Department OBS unit must be associated to the program/project
- Entity with fiscal time periods setup required
- Annual fiscal time periods required (for fiscal year grouping)
- Monthly or 13-period fiscal time periods required (for as-of-date evaluation)
- Projects must have hierarchy allocation percentages > 0% for project amounts to display

**Key Parameters:** Program OBS Type/Unit, Program Manager, Program, Program Status, Financial Plan Type (Budget/Planned), As Of Date, Fiscal Year, Report Currency, Group By 1/2 (Charge Code/Cost Type/Department/Input Type Code/Location/Resource/Resource Class/Role/Transaction Class/User Value 1/2), Include Inactive Programs/Projects/Resources

**Key Calculations:**
- **Forecast (Calculated):** Actual to as-of date + ETC from as-of date forward
- **Variance:** Budget/Planned − Forecast (Calculated)
- Project amounts × hierarchy allocation percentage

**Drill-Down:** Click program or project link → Program Budget vs. Forecast by Period Detail

**Security:** Project view rights

---

## Program Budget vs. Forecast by Period Detail

**Description:** Detail-level companion to Program Budget vs. Forecast by Period. Displays the financial data at the program and project level broken down by fiscal period and selected grouping attributes.

**Prerequisites:** Same as Program Budget vs. Forecast by Period.

**Security:** Project view rights

---

## Program Milestone Dependencies

**Description:** Displays program milestone dependency relationships between programs and their constituent projects. Shows inter-project milestone dependencies as a diagram and a detailed list. Helps identify critical path and schedule risks across programs.

**Data Source:** Classic PPM Bean (transactional)

**Prerequisites:**
- Program must have at least one milestone with an inter-project dependency to another milestone
- For the project summary section: budgeted or planned cost must be entered on the financial summary

**Key Parameters:** Program OBS Type/Unit, Program Manager, Program, Financial Plan Type, Milestone date range parameters

**Key Fields:** Program/project name, milestone name, dependency type, predecessor/successor, schedule stoplight, critical path indicator, financial summary

**Security:** Project view rights

---

## Common Program Report Requirements

### Financial Setup
- Department OBS associated to program/project
- Entity (Administration/Finance/Setup/Entities) with department OBS and location OBS
- Fiscal time periods (annual + monthly or 13-period) created for the entity

### Hierarchy Allocation Percentages
- Set on the hierarchy tab of the program or project (or from project's "parents" submenu)
- Must be > 0% for project amounts to roll up to program level in reports

### Status Reports
- Program status reports must be created with completed status indicator fields
- Most recent = greatest report date with Final status or no status value
- Prior report = previous status report by date (used for trending arrow calculations)

## Related

- [[_MOC Advanced Reporting]]
- [[PMO Accelerator Setup]]
- [[Roles and Permissions]]
- [[Financial Reports]]
- [[Project Reports]]

%%Source: p3535-3559%%
