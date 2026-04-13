---
title: PMO Project Management Reports
tags:
  - reference
  - admin
aliases:
  - Project Reports
---
# PMO Project Management Reports

The project management reports provide visibility into the key performance indicators of status, schedule, alignment, and risk across projects in an organization. They offer insight into schedule, cost, effort, risks, and issues, plus status report monitoring and plan-vs-baseline comparisons.

> Source: Clarity 16.4.1 documentation, pp. 3307–3385

## Reports Included

| Report Name | Resource ID | Data Source |
|---|---|---|
| KPIs by Project Type (Dashboard) | CSK_PRJ_KPIsByProjectTypeDashboard | DWH Bean |
| KPIs by Project Type | CSK_PRJ_KPIsByProjectType | DWH Bean |
| Top 50 Project Watchlist | CSK_PRJ_Top50ProjectWatchlist | DWH Bean |
| Project Portfolio Summary | CSK_PRJ_PortfolioSummary | DWH Bean |
| Project Planning Schedule | CSK_PRJ_ProjectPlanningSchedule | DWH Bean |
| Project Schedule | CSK_PRJ_ProjectSchedule | DWH Bean |
| Project Cost and Effort | CSK_PRJ_ProjectCostAndEffort | DWH Bean |
| Project Task Dependencies | CSK_PRJ_TaskDependencies | Classic PPM Bean |
| Key Task and Milestone Status | CSK_PRJ_KeyTaskMilestoneStatus | DWH Bean |
| Project Earned Value | CSK_PRJ_EarnedValue | DWH Bean |
| Project Storyboard | CSK_PRJ_ProjectStoryboard | DWH Bean |
| Project Status Report List | CSK_PRJ_StatusReportList | DWH Bean |
| Project Status Summary | CSK_PRJ_ProjectStatusSummary | DWH Bean |
| Project Status Detail | CSK_PRJ_ProjectStatusDetail | DWH Bean |
| Project Risk, Issue, and Change Summary | CSK_PRJ_RiskIssueChangeSummary | DWH Bean |
| Project Risk Register | CSK_PRJ_RiskRegister | Classic PPM Bean |
| Project Issue Register | CSK_PRJ_IssueRegister | Classic PPM Bean |
| Project Change Request Register | CSK_PRJ_ChangeRequestRegister | Classic PPM Bean |
| Project or Program Roadmap | CSK_PRJ_Roadmap | DWH Bean |

---

## KPIs by Project Type (Dashboard)

**Description:** Displays KPIs of status, schedule, alignment, and risk as gauges and column charts by project type. Resource allocation and actual hours displayed in pie charts. Issues, risks, and change requests shown in a bar chart by project type and priority.

**Prerequisites:**
- Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run
- Project type field must be completed for meaningful groupings
- At least one status report per project (most recent = greatest report date with Final status or no status)
- Business alignment and risk rating must be completed on projects
- Team members with allocation amounts required for resource allocation data
- Actual hours posted via timesheets, transaction entry, or import

**Key Parameters:** Project OBS Type/Unit (cascading), Project Type, Project Manager, Project Status, Risk/Issues/Change Requests (default: Issues)

**Key Calculations:**
- **Status gauge:** Average overall status across projects. Green < 40, Yellow 40–89, Red ≥ 90 (`dwh_inv_status_report.overall_status`)
- **Schedule gauge:** Average days late. Green ≤ 0, Yellow 1–10, Red > 10
- **Alignment gauge:** Average business alignment. Green ≥ 68, Yellow 34–67, Red < 34 (`dwh_inv_investment.business_alignment`)
- **Risk gauge:** Average risk (weighted). Green < 34, Yellow 34–67, Red ≥ 68 (`dwh_inv_investment.risk`)

**Security:** Project view rights

---

## KPIs by Project Type

**Description:** Lists projects grouped by project type with KPI stoplights for status, schedule, alignment, and risk, plus resource allocation and actual hours from project inception.

**Prerequisites:** Same as KPIs by Project Type (Dashboard). Projects without a type appear under "Project Type Undefined."

**Key Parameters:** Project OBS Type/Unit, Project Type, Project Manager, Project Status

**Security:** Project view rights

---

## Top 50 Project Watchlist

**Description:** Lists the top 50 projects that most need attention based on KPI values (status, schedule, alignment, risk). Projects are ranked by their overall KPI performance.

**Prerequisites:** Load DWH jobs. At least one status report per project for status stoplight.

**Security:** Project view rights

---

## Project Portfolio Summary

**Description:** Provides a portfolio-level view of projects with KPIs, cost, effort, and schedule summary. Displays projects with their status, schedule, cost and effort variance, and resource allocations.

**Prerequisites:** Load DWH and Load DWH Access Rights jobs.

**Security:** Project view rights

---

## Project Planning Schedule

**Description:** Displays a Gantt-style view of project milestones across time periods. Can be grouped by manager, project, program, or OBS level 1–10. The report can display twelve months or four quarters. Milestone stoplights indicate completion status.

**Key Parameters:** Project OBS Type/Unit, Project/Program Manager, Period Type (Month/Quarter), Group By 1/2/3, Start Date

**Milestone stoplight:** Gray = Completed, Green = Started, Blue = Not Started

**Security:** Project view rights

---

## Project Schedule

**Description:** Displays projects and their work breakdown structure with schedule information. Shows schedule stoplight, days late, and % late with Gantt bars. Can display at project, phase, task, or assignment level.

**Key Calculations:**
- **Schedule % stoplight:** Green ≤ 0%, Yellow 1–10%, Red > 10%, Gray = assignment level
- **Days Late:** If baseline exists: finish date − baseline finish date. If no baseline and not complete and past due: today − finish date
- **Schedule stoplight color:** Green ≤ 0, Yellow 1–10 days late, Red > 10 days late

**Security:** Project view rights

---

## Project Cost and Effort

**Description:** Lists projects with WBS and resource assignments. Displays baseline, actual, EAC, and projected cost and effort variance amounts. Controllable detail level: project, phase, task, or assignment.

> **Warning:** This report runs numerous queries. Apply filters before running to avoid performance issues.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- At least one task and resource assignment for cost/effort amounts
- Rate matrix created and associated (system default or project-specific)
- Baseline required for BAC Cost, Projected Variance fields
- Update Cost Totals job must be run for project/phase/task cost amounts
- Rate Matrix Extraction job required for assignment-level EAC cost

**Key Parameters:** Project OBS Type/Unit, Project Manager, Project, Project Status, Work Status, Detail Level (Project/Phase/Task/Assignment), Include Inactive Projects

**Key Calculations:**
- **Projected Cost Variance:** `(ETC Cost + Actual Cost) − BAC Cost` → `dwh_inv_summary_facts.eac_base_cost_var`
- **Projected Cost Variance %:** `((ETC + Actual − BAC) / BAC) × 100` → Green ≤ 0%, Yellow 1–10%, Red > 10%
- **Projected Effort Variance:** `EAC Effort − BAC Effort` → `dwh_inv_summary_facts.eac_base_hours_var`
- **Projected Effort Variance %:** `((EAC − BAC) / BAC) × 100`

**Security:** Project view rights

---

## Project Task Dependencies

**Description:** Displays projects and inter-project task dependency relationships as a diagram (max 5 predecessor + 5 successor) and a detailed list. Shows predecessor/successor dependencies, dependency type, critical path indicator, and project summary with schedule stoplight.

**Prerequisites:**
- At least one task/milestone with a dependency to a task/milestone in another project
- Budgeted or planned cost entered on financial summary for project summary section

**Key Parameters:** Project OBS Type/Unit, Project Type, Project Manager, Project, Financial Plan Type, Task Start From/To, Include Subprojects

**Security:** Project view rights

---

## Key Task and Milestone Status

**Description:** Displays the status of key tasks and milestones across projects. Stoplights indicate schedule health. Shows task start/finish dates, % complete, and days late.

**Prerequisites:** Load DWH and Load DWH Access Rights jobs. Tasks/milestones must be flagged as key.

**Security:** Project view rights

---

## Project Earned Value

**Description:** Displays earned value metrics for projects including BCWS, BCWP, ACWP, SPI, CPI, and variance amounts. Includes schedule and cost performance indicators.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Update Earned Value and Cost Totals job must be run
- Baseline required for earned value calculations
- Rate matrix required for cost calculations

**Key Parameters:** Project OBS Type/Unit, Project Type, Project Manager, Project, Project Status, Work Status, Detail Level

**Security:** Project view rights

---

## Project Storyboard

**Description:** Provides a one-page visual summary ("storyboard") of a project including status, schedule, cost, effort, risk, issues, and change requests. Designed for executive review.

**Prerequisites:** Load DWH and Load DWH Access Rights jobs.

**Key Parameters:** Project (single select), Financial Plan Type

**Security:** Project view rights

---

## Project Status Report List

**Description:** Lists all project status reports with report date, status, and overall status stoplight. Allows review of status report history across multiple projects.

**Prerequisites:** Load DWH and Load DWH Access Rights jobs. At least one status report per project.

**Key Parameters:** Project OBS Type/Unit, Project Manager, Project, Project Status, Report Status, Report Date range

**Security:** Project view rights

---

## Project Status Summary

**Description:** Displays a summary of the most recent project status report for each project including status stoplights (overall, schedule, scope, cost/effort), plus key dates and financial summary.

**Prerequisites:** Load DWH and Load DWH Access Rights jobs. At least one status report required.

**Security:** Project view rights

---

## Project Status Detail

**Description:** Provides a full detail view of the most recent project status report per project, including all status report fields: accomplishments, next steps, issues, risks, and financial data.

**Prerequisites:** Load DWH and Load DWH Access Rights jobs. At least one status report required.

**Security:** Project view rights

---

## Project Risk, Issue, and Change Summary

**Description:** Provides a rolled-up summary of open risks, issues, and change requests across projects. Shows counts by priority and status.

**Prerequisites:** Load DWH and Load DWH Access Rights jobs.

**Security:** Project view rights

---

## Project Risk Register

**Description:** Displays a detailed list of risks for selected projects including risk name, ID, category, priority, status, probability, impact, exposure score, owner, and key dates.

**Data Source:** Classic PPM Bean Data Source (transactional, not DWH)

**Prerequisites:** Projects must have risks created with required fields completed (name, ID, priority, status, owner always display).

**Security:** Project view rights

---

## Project Issue Register

**Description:** Displays a detailed list of issues for selected projects including issue name, ID, category, priority, status, owner, and key dates.

**Data Source:** Classic PPM Bean Data Source

**Prerequisites:** Projects must have issues created. Issue name, ID, priority, status, and owner are required fields.

**Security:** Project view rights

---

## Project Change Request Register

**Description:** Displays a detailed list of change requests for selected projects including name, ID, priority, status, category, expected close, approved by/date, and originating ID.

**Data Source:** Classic PPM Bean Data Source

**Prerequisites:** Projects must have change requests created with required fields completed.

**Security:** Project view rights

---

## Project or Program Roadmap

**Description:** Displays a visual roadmap Gantt for projects or programs showing milestones and key phases across time periods. Supports grouping by manager, project, program, or OBS level.

**Data Source:** DWH Bean Data Source

**Key Parameters:** Project OBS Type/Unit, Project/Program Manager, Period Type (Month/Quarter), Start Date, Group By 1/2/3

**Security:** Project view rights

---

## Common Prerequisites for All Project Reports

- **Load Data Warehouse** job must be run (populates dimensions, facts, lookup tables)
- **Load Data Warehouse Access Rights** job must be run (controls which projects each user can see)
- If DWH is not populated, reports display "no matching records" and parameters show no values

## Related

- [[_MOC Advanced Reporting]]
- [[PMO Accelerator Setup]]
- [[Roles and Permissions]]
- [[Investment Reports]]
- [[Resource Reports]]

%%Source: p3307-3385%%
