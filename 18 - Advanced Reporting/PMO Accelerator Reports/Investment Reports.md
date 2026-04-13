---
title: PMO Investment Management Reports
tags:
  - reference
  - admin
aliases:
  - Investment Reports
---
# PMO Investment Management Reports

The Investment Management reports provide visibility into KPIs of status, schedule, alignment, and risk across all investment types (projects, applications, products, services, etc.). They offer insight into staffing, cost, effort, risks, issues, and plan-vs-baseline comparisons.

> Source: Clarity 16.4.1 documentation, pp. 3386–3418

## Reports Included

| Report Name | Resource ID | Data Source |
|---|---|---|
| Investment Allocations and Assignments | CSK_INV_AllocationAssignment | DWH Bean |
| Investment Assignments by Task | CSK_INV_AssignmentsByTask | DWH Bean |
| Investment Baseline vs. Plan by Task | CSK_INV_BaseVsPlanByTask | DWH Bean |
| Investment Time and Estimate Review | CSK_INV_TimeAndEstimate | DWH Bean |
| Product or Application Roadmap | CSK_INV_Roadmap | DWH Bean |
| Roadmap Timeline | CSK_INV_RoadmapTimeline | Classic PPM Bean |
| Investment Risk, Issue, and Change Summary | CSK_INV_RiskIssueChangeSummary | DWH Bean |
| Investment Risk Register | CSK_INV_RiskRegister | DWH Bean |
| Investment Issue Register | CSK_INV_IssueRegister | DWH Bean |
| Investment Change Request Register | CSK_INV_ChangeRequestRegister | Classic PPM DWH Bean |

---

## Investment Allocations and Assignments

**Description:** Displays team member allocation, task assignment, and variance amounts by investment across time periods. Chart shows allocation vs. assignment by period. Can show allocations only, assignments only, or both. Displays weekly or monthly amounts plus totals; supports hours or FTE display.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Investment must have at least one resource/role on team for allocations to display
- Investment must have at least one resource/role assigned to a task for assignments to display (projects: assigned in Gantt; other investments: auto-assigned to effort task ~rmw)
- Allocation time slices: `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE`
- Assignment time slices: `MONTHLYRESOURCEACTCURVE`, `WEEKLYRESOURCEACTCURVE`, `MONTHLYRESOURCEESTCURVE`, `WEEKLYRESOURCEESTCURVE`

**Key Parameters:** Investment OBS Type/Unit, Investment Type (default: All), Investment Manager, Investment, Investment Status, Resource Manager, Resource Role, Start Date, End Date, Period Type (Week/Month), Report Type (Allocation and Assignment/Allocation Only/Assignment Only), Unit Type (Hours/FTE), Include Inactive Resources/Investments

**Key Calculations:**
- **Variance:** Allocation − Assignment (or the reverse depending on report type)
- **EAC:** ETC + Actual

**Security:** Investment view rights

---

## Investment Assignments by Task

**Description:** Displays task assignment amounts by investment, grouped by phase and task. Shows baseline, actual, ETC, EAC, and variance amounts by month across a 12-month window. Supports hours or FTE.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Investment must have at least one resource/role assigned to a task
- Task hierarchy table (`dwh_inv_task_hierarchy`) must be populated (requires Load DWH job)
- Baseline amounts: `MONTHLYRESOURCEBASECURVE` time slice
- Actual amounts: `MONTHLYRESOURCEACTCURVE` time slice
- ETC amounts: `MONTHLYRESOURCEESTCURVE` time slice

**Key Parameters:** Investment OBS Type/Unit, Investment Type, Investment Manager, Investment, Resource Manager, Resource, Start Date (determines first of 12 months), Unit Type (Hours/FTE), Include Inactive Investments/Resources

**Key Calculations:**
- **EAC:** ETC + Actual
- **Variance:** EAC − Baseline (red background when EAC exceeds baseline)

**Security:** Investment view rights

---

## Investment Baseline vs. Plan by Task

**Description:** Displays baseline, actual, ETC, EAC, and variance amounts for resource assignments grouped by investment, phase, and task. Shows a 12-month view from the selected start date. Supports hours or FTE.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resource must be assigned to at least one investment task
- Task hierarchy table populated by Load DWH job
- Time slices: `MONTHLYRESOURCEBASECURVE`, `MONTHLYRESOURCEACTCURVE`, `MONTHLYRESOURCEESTCURVE`

**Key Parameters:** Investment OBS Type/Unit, Investment Type (default: All), Investment Manager, Investment, Resource Manager, Resource, Start Date (default: start of current month), Unit Type (default: Hours), Include Inactive Investments/Resources

**Key Calculations:**
- **EAC:** ETC + Actual
- **Variance:** EAC − Baseline (red = EAC exceeds baseline)

**Security:** Investment view rights

---

## Investment Time and Estimate Review

**Description:** Displays actual and estimate amounts for resource assignments grouped by investment or resource. Shows plan actuals, plan ETC, pending actuals, and pending ETC, plus hours worked by date for selected time periods. Provides visibility into actuals and recommended ETC changes.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- At least one timesheet for the selected time period and status
- Resource assigned to at least one investment task
- Hours worked: requires `DAILYRESOURCETIMECURVE` time slice configured for the reporting dates

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Resource, Investment Type, Investment Manager, Investment, Time Period, Timesheet Status (default: Open/Submitted/Returned/Approved/Posted), Group By (Investments/Resources), Include Inactive Resources/Investments

**Key Fields:**
- Plan Actuals, Plan ETC, Pending Actuals, Pending ETC
- **Change in ETC:** `Pending ETC − (Assignment ETC − Pending Actuals)`
  - Green = negative (ETC should decrease)
  - Red = positive (ETC should increase)
- Date Worked, Hours Worked (daily detail from DAILYRESOURCETIMECURVE)

**Security:** Resource view rights

---

## Product or Application Roadmap

**Description:** Lists milestones from projects allocated to products or applications with a Gantt schedule covering 12 months or 4 quarters. Groupable by application, product, or manager. Programs included, templates excluded.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Products/applications must have projects allocated through the hierarchy
- Child projects must have milestones with the "milestone" and "key task" fields selected

**Key Parameters:** Product/Application OBS Type/Unit, Product/Application Manager, Product/Application, Start Date, Period Type (Month/Quarter), Group By (Application/Product/Manager), Include Inactive Investments

**Milestone stoplight:** Gray = Completed, Green = Started, Blue = Not Started

**Security:** Investment view rights

---

## Roadmap Timeline

**Description:** Displays a graphical timeline report for a specific roadmap, showing roadmap items by month, quarter, or year. Items are grouped by a selected swimlane (Type, Status, In Plan, or custom). Up to 3 numeric metrics can be displayed per roadmap item.

> **Note:** Roadmap groups do not display in this report (only roadmap items). Use Export to PDF from the Roadmap Timeline layout for group exports.

**Prerequisites:** Roadmap must have at least one roadmap item spanning the selected fiscal period.

**Data Source:** Classic PPM Bean (transactional)

**Key Parameters:**
- Roadmap (required)
- Fiscal Year (required)
- Period: Months / Quarters / Years
- Swimlane: Type, Status, In Plan (or custom picklists)
- Color By: Type, Status, In Plan (or custom)
- Roadmap Item Metrics (up to 3 from: Actual, Benefit, Capital Cost, IRR, NPV, Operating Cost, Payback Period, Rank, ROI, Total Cost, etc.)
- Clip Metrics to Roadmap Dates (boolean)

**Key Behaviors:**
- Selecting > 3 metrics: first 3 alphabetically are used
- Clip Metrics: restricts metric values to roadmap item duration when checked

---

## Investment Risk, Issue, and Change Summary

**Description:** Two sets of pie charts showing risks/issues by target resolution date and change requests by expected close date, plus a second set by status. Detailed listing includes name, ID, priority, status, category, owner, created date, and target/expected close date. Groupable by investment.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Investments must have risks, issues, and/or change requests created
- Target resolution/expected close dates must be completed for late classification (otherwise shown as "No Date Entered")

**Security:** Investment view rights

---

## Investment Risk Register

**Description:** Detailed listing of risks across investments including risk name, ID, category, priority, status, probability, impact, exposure score, owner, and key dates. Mirrors the Project Risk Register but applies to all investment types.

**Data Source:** DWH Bean

**Prerequisites:** Load DWH and Load DWH Access Rights jobs. Investments must have risks with required fields.

**Security:** Investment view rights

---

## Investment Issue Register

**Description:** Detailed listing of issues across investments including issue name, ID, category, priority, status, owner, and key dates.

**Data Source:** DWH Bean

**Prerequisites:** Load DWH and Load DWH Access Rights jobs. Investments must have issues created.

**Security:** Investment view rights

---

## Investment Change Request Register

**Description:** Detailed listing of change requests across investments including name, ID, priority, status, category, expected close, approved by/date, resources, and originating ID.

**Data Source:** Classic PPM DWH Bean

**Prerequisites:** Load DWH and Load DWH Access Rights jobs.

**Security:** Investment view rights

---

## Common Prerequisites

- **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must be run
- Investment Type parameter defaults to **All** (includes: Application, Asset, Idea, Other Work, Product, Project, Service)
- FTE conversion depends on the DWH calendar table (populated by Load DWH job)
- Equipment, expense, and material resources are excluded from all effort/cost calculations
- Programs and templates are excluded unless specifically noted

## Related

- [[_MOC Advanced Reporting]]
- [[PMO Accelerator Setup]]
- [[Roles and Permissions]]
- [[Project Reports]]
- [[Resource Reports]]
- [[Financial Reports]]

%%Source: p3386-3418%%
