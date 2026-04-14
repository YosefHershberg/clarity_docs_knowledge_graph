# Program Management Reports

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[11 - Reporting/_MOC Reporting|Reporting]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[18 - Advanced Reporting/PMO Accelerator Reports/Program Reports]]
- [[11 - Reporting/Report Designer/Creating Your First Report]]
- [[11 - Reporting/Working with Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Investment Reports]]
- [[11 - Reporting/Report Designer/Drill Down Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Portfolio Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/PMO Admin Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Financial Reports]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Overview (#overview)
- H2: Program Status Detail (#program-status-detail)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Calculations (#calculations)
- H2: Program Budget vs. Forecast by Period (#program-budget-vs-forecast-by-period)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H2: Program Budget vs. Forecast by Period Detail (#program-budget-vs-forecast-by-period-detail)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H2: Program Milestone Dependencies (#program-milestone-dependencies)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)

## Overview

The Program Management reports provide visibility into program status, financial performance, key milestones, risks, issues, and change requests. The reports also provide insight into budget, planned, and forecast costs by fiscal period. The reports include program and subproject information.

Actual financial transaction cost amounts only include transactions that are processed and posted. Any other status is a transaction that is adjusted, reversed, or updated, and those transactions are excluded. Actual financial transaction cost amounts are in the currency that is the entity home currency of the department associated to the investment.

At the bottom of each investment section in the report, there is a summary for labor, non-labor, and total amounts of all transactions included in the report for the investment:
- **Labor amounts** include chargeable hours, non-chargeable hours, total hours, chargeable cost, non-chargeable cost, and total cost.
- **Non-labor and total amounts** include chargeable cost, non-chargeable cost, and total cost.

The chargeable amounts represent transactions processed with the chargeable option checked. The chargeable option can be checked if the transaction is entered through transaction entry or imported from an external system. If the transaction originates with a timesheet, then the chargeable option defaults from the input type code associated to the resource. The input type code has a chargeable option that you select when setting it up in administration.

**Report Security:** Security is determined by investment view rights.

The following reports are included with Program Management reports:
- Program Status Detail
- Program Budget vs. Forecast by Period
- Program Budget vs. Forecast by Period Detail
- Program Milestone Dependencies

---

## Program Status Detail

The Program Status Detail report displays the latest status report update and indicators for the program. It also has sections for financial performance, key milestones, team allocations, risks, issues, and change requests for the program and its projects. The report is very flexible; it allows you to control which sections appear and to select if each section includes the program only, its projects only, or both.

> [!WARNING]
> This report runs numerous queries to retrieve the data necessary to populate the report. You should avoid running this report without parameters and should try to limit the results to reasonable amounts of data. If you do not do this, then you may experience performance issues.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The status report indicators and status report update are based on the most recent program status report, so at least one status report must be completed on the program for the indicators to calculate and the information in the frames to be displayed. The status report with the greatest report date and a report status of final (or no value selected for report status) is considered the most recent.
- The program and its projects must have planned cost or budgeted cost amounts entered in the financial summary properties to display the planned or budget and remaining amounts under the financial cost heading in the financial performance section. If the program and its projects have detailed cost plans or budget plans created under the financial plans tab, then the planned cost and budgeted cost amounts on the financial summary properties are read-only and set according to the amounts in the detailed financial plan. In this case, the cost plan amount for the plan of record or approved budget amount display on the financial summary properties and in the report.
- The program and its projects must have milestones, risks, issues, and change requests for those report sections to display data. Milestones must have the **key task** field checked to display in the report.
- The projects in the program must have team members allocated to them for the team section to display data. Team members cannot be allocated to programs, so the team members displaying in this report roll up from the project teams.
- The projects in the program must have team members assigned to tasks with estimates to calculate the ETC and EAC hours that display in the team section.
- The projects in the program must have actual hours posted through timesheets, transaction entry, or imported into Clarity to calculate actuals in the team section, actual cost under the financial cost heading, and actual (ACWP) cost under the performance cost heading.
- The projects in the program must have baselines for baseline hours and the projected variance to display in the team section. They must also have baselines for BAC and the projected variance to display under the performance cost heading.
- The project cost amounts under the performance cost heading are dependent upon running the **Update Cost Totals** job. This job is available in the **Actions** pull-down on the task list or baseline list. The Update Cost Totals job runs: runtime extraction of rates, Update % Complete job, and Update Earned Value and Cost Totals job. If you want to update costs across several projects, run the **Update Earned Value and Cost Totals** job from the Jobs menu.
- The amounts in the financial performance and team sections are dependent upon the projects having hierarchy allocation percentages greater than 0%. If the allocation percentage is set to 0% on a project, then the amounts in the report are 0. The allocation percentage is set on the **Hierarchy** tab of the program or project. If setting from the project, navigate to the **Parents** submenu under the hierarchy tab.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Program Status Detail |
| **Resource ID** | `CSK_PRG_ProgramStatusDetail` |
| **Description** | Program Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Program Management/Program Status Detail` |
| **Path** | `/ca_ppm/reports/program_management/CSK_PRG_ProgramStatusDetail` |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Program OBS Type | `programOBSTypeKey_1` | Single-select Query | No | -- |
| Program OBS Unit | `programOBSUnitKey_1` | Single-select Query | No | -- |
| Program Manager | `programManagerKey_1` | Multiple-select Query | No | -- |
| Program | `programKey_1` | Multiple-select Query | No | -- |
| Program Status | `programStatusKey_1` | Multiple-select Query | Yes | Approved, Cancelled, On Hold, Unapproved |
| Project Status | `projectStatusKey_1` | Multiple-select Query | No | -- |
| Program Financial Plan Type | `programFinancialPlanType` | Single-select List of Values | Yes | Budget |
| Project Financial Plan Type | `projectFinancialPlanType` | Single-select List of Values | Yes | Budget |
| Show Financials? | `programShowFinancials` | Single-select List of Values | Yes | Program and Project |
| Show Milestones? | `programShowMilestones` | Single-select List of Values | Yes | Program and Project |
| Show Team? | `programShowTeam` | Single-select List of Values | Yes | Summarize by Role |
| Show Risks? | `programShowRisks` | Single-select List of Values | Yes | Program and Project |
| Show Issues? | `programShowIssues` | Single-select List of Values | Yes | Program and Project |
| Show Change Requests? | `programShowChangeRequests` | Single-select List of Values | Yes | Program and Project |
| Risk, Issue, and Change Request Priority | `riskIssueChangePriorityKey_1` | Multiple-select Query | Yes | Low, Medium, and High |
| Risk, Issue, and Change Request Status | `riskIssueChangeStatusKey_1` | Multiple-select Query | Yes | Open, Work in Progress, and Resolved |
| Rollup Project Financials to Program? | `rollupProjectFinancialsToProgram` | Boolean | No | Unchecked |
| Include Inactive Programs? | `includeInactivePrograms` | Boolean | No | Unchecked |
| Include Inactive Projects? | `includeInactiveProjects` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Checked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Program Status:** Approved, Cancelled, On Hold, Unapproved
- **Program Financial Plan Type:** Budget, Planned
- **Project Financial Plan Type:** Budget, Planned
- **Show Financials?:** Program and Project, Program Only, Project Only, Do Not Display
- **Show Milestones?:** Program and Project, Program Only, Project Only, Do Not Display
- **Show Team?:** Summarize by Role, Display Project Teams
- **Show Risks?:** Program and Project, Program Only, Project Only, Do Not Display
- **Show Issues?:** Program and Project, Program Only, Project Only, Do Not Display
- **Show Change Requests?:** Program and Project, Program Only, Project Only, Do Not Display
- **Risk, Issue, and CR Priority:** Low, Medium, High
- **Risk, Issue, and CR Status:** Open, Work in Progress, Resolved, Closed

### Parameter Explanations
- **Program OBS Type** is a cascading parameter and determines which units are listed in the Program OBS Unit parameter. This parameter is not used to control which programs display in the report.
- **Program OBS Unit** displays values based upon the Program OBS Type selected. When you select an OBS unit, the report displays programs attached to the OBS unit and descendants of the unit you select.
- **Program Financial Plan Type** allows you to select which type of financial cost to include in the report: budget or planned cost. This option is available because sometimes cost plans are implemented without budgets.
- **Budget:** The budget cost in the report is the budgeted cost from the program financial summary properties, populated from the approved budget plan (if a detailed budget plan exists).
- **Planned:** The planned cost in the report is the planned cost from the program financial summary properties, populated from the cost plan that is the plan of record (if a detailed cost plan exists).
- **Project Financial Plan Type** works the same way as the Program Financial Plan Type:
- **Budget:** The budget cost from the project financial summary properties, populated from the approved budget plan.
- **Planned:** The planned cost from the project financial summary properties, populated from the cost plan of record.
- **Rollup Project Financials to Program** controls how amounts under the financial cost heading in the financial performance section are calculated. If checked, the program amounts represent the aggregate of the program and project amounts. If unchecked, the program amounts represent only the program values, and the report presents extra rows for Project Total and Variance.

> [!NOTE]
> The amounts under the performance cost heading are always rolled up regardless of whether this parameter is checked.
- **Show Financials, Show Milestones, Show Risks, Show Issues, and Show Change Requests** allow you to control whether the corresponding section displays and whether program and/or project information is presented:
- **Program and Project:** Displays both programs and projects in the section.
- **Program Only:** Displays programs only.
- **Project Only:** Displays projects only (listed alphabetically).
- **Do Not Display:** Hides the section.
- **Show Team** controls whether the team section displays:
- **Summarize by Role:** Aggregates team allocations from projects by role (similar to the team tab on the program).
- **Display Project Teams:** Displays team allocations in detail for each project.
- The **project statuses** are displayed based on existing project statuses in the environment. For example, if there are projects with only Approved status, then only the Approved project status displays.

### Report Fields and Calculations

The report displays the program name, program ID, program manager, status, program objective, and finish date. It includes the status report date and status report update from the most recent program status report, along with the following status report indicators: overall, schedule, scope, and cost and effort.

The previous report date is from the prior program status report (based on report date). The status report indicator trending arrows compare the current status report to the prior status report:
- **Upward arrow:** Status has improved
- **Right arrow:** No change in status (or no prior status report for comparison)
- **Downward arrow:** Status has gotten worse

#### Financial Performance Section

When displayed, it includes: program or project name, start date, finish date, financial cost amounts, and performance cost amounts.

**Financial cost amounts:** planned cost or budget, actual cost, and remaining cost. The report has separate program and project financial plan type parameters, allowing you to select whether to display planned or budget cost.

The actual cost under the financial cost heading is based on financial transaction cost amounts. It only includes transactions that are processed and posted to WIP.

**Performance cost amounts:** as of date, BAC, Actual (ACWP), EAC, and projected cost variance. All these fields are on the schedule & performance properties of the program or project.

Project cost amounts under the performance cost heading are dependent upon running the **Update Cost Totals** job.

#### Key Milestones Section

When displayed, it includes: program or project milestone name, milestone ID, status, finish date, baseline finish date, days late, and schedule stoplight. Milestones must have the **key task** field checked. Tasks are excluded.

#### Team Section

When **Summarize by Role** is selected: role name, start date, finish date, % complete, allocation, baseline, actuals, ETC, EAC, and projected effort variance.

When **Display Project Teams** is selected: resource name, project role, start date, finish date, % complete, allocation, baseline, actuals, ETC, EAC, and projected effort variance. Amounts are in hours. Labor roles are included; equipment, expense, and material roles are excluded.

#### Risks Section

When displayed: risk name, risk ID, description, priority stoplight, probability, impact, status, response type, and target resolution date.

#### Issues Section

When displayed: issue name, issue ID, description, priority stoplight, status, and target resolution date.

#### Change Requests Section

When displayed: change request name, change request ID, description, priority, status, and expected close date. Templates are excluded.

### Calculations

#### Overall Status

The overall status field from the program status report. It is a calculated field that is the sum of the schedule status, scope status, and cost and effort status fields.

**Stoplight color:**

| Color | Condition |
|---|---|
| Green | On Track (< 40) |
| Yellow | Minor Variance (>= 40 and < 90) |
| Red | Significant Variance (>= 90) |

**Trending arrow:** Upwards = better than previous; Rightwards = no variance; Downwards = worse than previous.

Database view and column: `dwh_inv_status_report.overall_status`

#### Schedule Status

Based on the selection of On Track, Minor Variance, or Significant Variance.

| Color | Condition |
|---|---|
| Green | On Track (10) |
| Yellow | Minor Variance (20) |
| Red | Significant Variance (30) |

Database view and column: `dwh_inv_status_report.sr_schedule_status_key`

#### Scope Status

Same stoplight values as Schedule Status. Database view and column: `dwh_inv_status_report.sr_scope_status_key`

#### Cost and Effort Status

Same stoplight values as Schedule Status. Database view and column: `dwh_inv_status_report.sr_cost_effort_status_key`

#### Remaining

Displays the difference between planned or budget cost and actual cost, multiplied by the hierarchy allocation percentage.

**Formula:** `(Planned or Budget Cost - Actual Cost) * Hierarchy Allocation Percentage`

#### Projected Variance (Financial Performance)

Displays the variance between the EAC cost and baseline cost, multiplied by the hierarchy allocation percentage.

**Formula:** `(EAC Cost - BAC Cost) * Hierarchy Allocation Percentage`

#### Days Late

Considers whether a baseline exists and the milestone status:
- **If a baseline exists:** Days Late = Milestone Finish Date - Baseline Finish Date. A positive number indicates the milestone is late; a negative number indicates it is early.
- **If baseline exists and finish dates match:** The milestone is considered late if not completed and due before today's date. Days Late = Today's Date - Milestone Finish Date.
- **If no baseline:** Days Late is calculated only if the milestone is not completed and was due before today. Days Late = Today's Date - Milestone Finish Date.

**Schedule Stoplight:**

| Color | Condition |
|---|---|
| Green | On Schedule (<= 0) |
| Yellow | Between 1 and 10 Days Late (> 0 and <= 10) |
| Red | More Than 10 Days Late (> 10) |

#### Projected Variance (Team)

Displays the variance between the EAC and baseline effort, multiplied by the hierarchy allocation percentage.

**Formula:** `(EAC - Baseline) * Hierarchy Allocation Percentage`

#### Priority

Based on the priority of the risk, issue, or change request:

| Color | Priority |
|---|---|
| Green | Low |
| Yellow | Medium |
| Red | High |

**Report Security:** Determined by project view rights.

> [!NOTE]
> The default status values changed from Minor Variance to Needs Help and from Significant Variance to At Risk. See the PMO Accelerator Release Notes in the 14.4 edition of the English documentation set.

---

## Program Budget vs. Forecast by Period

The Program Budget vs. Forecast by Period report displays budget or planned cost compared to forecast cost, with variances for each period and in total. The report supports four different program financial planning structures/methods:
- Rolling up project financials to the program
- Program level budgeting with program and project level forecasts
- Program level budgeting with project level forecasts
- Program and project level budgets and forecasts

The report offers the ability to group by up to two financial plan grouping attributes, which can be any combination of: Charge Code, Cost Type, Department, Input Type Code, Location, Resource, Resource Class, Role, Transaction Class, User Value 1, and User Value 2.

This report also allows you to drill down to the **Program Budget vs. Forecast by Period Detail** report by clicking the program or projects link.

> [!WARNING]
> This report runs numerous queries to retrieve the data necessary to populate the report. Avoid running this report without parameters and try to limit the results to reasonable amounts of data, or you may experience performance issues.

### Report Prerequisites
- The **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must be run first.
- The program or one of its projects must have at least one financial plan. If the financial plan type parameter is **Budget**, at least one approved budget is required. If **Planned**, at least one cost plan is required.
- The program or its projects must have a department OBS unit associated. Set up a department OBS and location OBS (`Administration/Organization and Access-OBS`), associate them to the project object, create an entity (`Administration/Finance-Setup/Entities`), and create fiscal time periods.
- Annual fiscal time periods must be created covering the periods for which you have financial plans, even if you are not planning by annual periods. The report uses these to convert amounts for reporting by fiscal year.
- Monthly or 13-period fiscal time periods must exist for the as-of-date parameter evaluation.
- Project amounts depend on hierarchy allocation percentages being greater than 0%.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Program Budget vs. Forecast by Period |
| **Resource ID** | `CSK_PRG_BudgetForecastByPeriod` |
| **Description** | Program Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Program Management/Program Budget vs. Forecast by Period` |
| **Path** | `/ca_ppm/reports/program_management/CSK_PRG_BudgetForecastByPeriod` |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Program OBS Type | `programOBSTypeKey_1` | Single-select Query | No | -- |
| Program OBS Unit | `programOBSUnitKey_1` | Single-select Query | No | -- |
| Program Manager | `programManagerKey_1` | Multiple-select Query | No | -- |
| Program | `programKey_1` | Multiple-select Query | No | -- |
| Program Status | `programStatusKey_1` | Multiple-select Query | Yes | Approved, Cancelled, On Hold, Unapproved |
| Project Status | `projectStatusKey_1` | Multiple-select Query | No | -- |
| Program Financial Plan Type | `programFinancialPlanType` | Single-select List of Values | Yes | Budget |
| Financial Structure | `financialStructure` | Single-select List of Values | Yes | Rollup Project Financials to Program |
| Fiscal Year | `fiscalYearKey_1` | Multiple-select Query | Yes | -- |
| Fiscal Period Type | `fiscalPeriodType` | Single-select Query | Yes | Monthly |
| Report Currency | `currencyRequiredKey` | Single-select Query | Yes | -- |
| Financial Plan Group By 1 | `groupfinancialPlan1` | Single-select Query | Yes | Charge Code |
| Financial Plan Group By 2 | `groupfinancialPlan2` | Single-select Query | No | -- |
| Include Inactive Projects? | `includeInactiveProjects` | Boolean | No | Unchecked |
| Include Inactive Programs? | `includeInactivePrograms` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Program Status:** Approved, Cancelled, On Hold, Unapproved
- **Financial Plan Type:** Budget, Planned
- **Financial Structure:** Rollup Project Financials to Program, Program Budget and Program/Project Forecast, Program Budget and Project Forecast, Program/Project Budget and Forecast
- **Period Type:** 13 Periods, Monthly, Quarterly, Annually
- **Financial Plan Group By 1 and 2:** Charge Code, Cost Type, Department, Input Type Code, Location, Resource, Resource Class, Role, Transaction Class, User Value 1, User Value 2

### Parameter Explanations
- **Program OBS Type** is a cascading parameter and determines which units are listed in the Program OBS Unit parameter. Not used to control which programs display.
- **Program OBS Unit** displays values based upon the Program OBS Type selected.
- **Financial Plan Type** allows selecting budget or planned amounts:
- **Budget:** Based on the current approved budget.
- **Planned:** Based on the current cost plan of record.
- **Financial Structure** controls how budget/planned and forecast amounts are aggregated:
- **Rollup Project Financials to Program:** Budgets and forecasts maintained on projects, rolled up to the program.
- **Program Budget and Program/Project Forecast:** Budgets and forecasts on programs; forecasts on projects.
- **Program Budget and Project Forecast:** Budgets on programs; forecasts on projects.
- **Program/Project Budget and Forecast:** Budgets and forecasts on both programs and projects.
- **Fiscal Year** controls which costs from financial plans and actual transactions are included.
- **Period Type** changes the fiscal period displayed:
- 13 Periods, Monthly, Quarterly, or Annually
- **Report Currency** converts amounts to one currency. If multi-currency is not used, amounts display in the entity home currency. Multi-currency must be enabled in Classic PPM (`Administration/Finance-Setup/Defaults`). Exchange rates with an Exchange Rate Type of "Average" are required.
- **Financial Plan Group By 1 and 2** control report grouping (Charge Code, Cost Type, Department, Input Type Code, Location, Resource, Resource Class, Role, Transaction Class, User Value 1, User Value 2).

### Report Fields and Calculations

The first column is determined by the financial plan group by parameters. The report displays budget or planned and forecast cost amounts with variances. Only the current approved budget or plan of record cost plan is included. Benefit plans are excluded.

The report displays up to twelve period columns (thirteen for 13-period type) and a total column. Multiple fiscal years can result in additional periods on multiple pages.

If the report currency parameter is not selected, amounts display in each investment's home currency with an extra currency column. If a report currency is selected, all amounts are converted using foreign exchange rates of type "Average."

**Calculations (subject to fiscal year parameter):**
- **Budget or Planned:** Approved budget or planned cost for the cost plan of record, multiplied by the hierarchy allocation percentage for child projects.
- **Forecast:** Actuals + Forecast Remaining. Forecast remaining = actual cost through the last complete fiscal period plus planned cost remaining after that period.
- **Variance:** Budget or Planned - Forecast, multiplied by the hierarchy allocation percentage. Red background = Forecast exceeds Budget/Planned (negative variance).

**Financial Structure display variations:**
- **Rollup Project Financials to Program:** Program section with aggregated amounts. Drill-down links to subreport.
- **Program Budget and Program/Project Forecast:** Program section with budget/forecast/variance; projects section with forecast; variance section with totals. Drill-down links available.
- **Program Budget and Project Forecast:** Program row with budget/planned; projects row with forecast; variance row with difference. Drill-down links available.
- **Program/Project Budget and Forecast:** Program section, projects section, and variance section with budget/planned remaining, program budget/planned, forecast, and variance.

**Report Security:** Determined by project view rights.

---

## Program Budget vs. Forecast by Period Detail

The Program Budget vs. Forecast by Period Detail report displays amounts for each period and in total, depending on the financial structure selected. It shows amounts separately for the program and/or its projects to give visibility into the amounts that contribute to the main report aggregates.

> [!WARNING]
> This report runs numerous queries to retrieve the data necessary to populate the report. You should avoid running this report without parameters and should try to limit the results to reasonable amounts of data.

### Report Prerequisites

Same prerequisites as the Program Budget vs. Forecast by Period report apply.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Program Budget vs. Forecast by Period Detail |
| **Resource ID** | `CSK_PRG_BudgetForecastbyPeriodDetail` |
| **Description** | Program Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Program Management/Program Budget vs. Forecast by Period Detail` |
| **Path** | `/ca_ppm/reports/program_management/CSK_PRG_BudgetForecastByPeriodDetail` |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Program OBS Type | `programOBSTypeKey_1` | Single-select Query | No | -- |
| Program OBS Unit | `programOBSUnitKey_1` | Single-select Query | No | -- |
| Program Manager | `programManagerKey_1` | Multiple-select Query | No | -- |
| Program | `programKey_1` | Multiple-select Query | No | -- |
| Program Status | `programStatusKey_1` | Multiple-select Query | Yes | Approved, Cancelled, On Hold, Unapproved |
| Project Status | `projectStatusKey_1` | Multiple-select Query | No | -- |
| Program Financial Plan Type | `programFinancialPlanType` | Single-select List of Values | Yes | Budget |
| Financial Structure | `financialStructure` | Single-select List of Values | Yes | Rollup Project Financials to Program |
| Fiscal Year | `fiscalYearKey_1` | Multiple-select Query | Yes | -- |
| Fiscal Period Type | `fiscalPeriodType` | Single-select Query | Yes | Monthly |
| Report Currency | `currencyRequiredKey` | Single-select Query | Yes | -- |
| Financial Plan Group By 1 | `groupfinancialPlan1` | Single-select Query | Yes | Charge Code |
| Financial Plan Group By 2 | `groupfinancialPlan2` | Single-select Query | No | -- |
| Include Inactive Projects? | `includeInactiveProjects` | Boolean | No | Unchecked |
| Include Inactive Programs? | `includeInactivePrograms` | Boolean | No | Unchecked |
| Group Financial Value 1 (Read Only) | `groupFinancialValue1` | Single Value Text | No | Passed through main report |
| Group Financial Value 2 (Read Only) | `groupFinancialValue2` | Single Value Text | No | Passed through main report |
| Page Number (Read Only) | `pageNumber` | Single Value Number | No | Passed through main report |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values

Same as the Program Budget vs. Forecast by Period report.

### Parameter Explanations

Same parameter explanations as the main report apply. The detail report inherits parameter values from the main report when accessed via drill-down links.

### Report Fields and Calculations

Same calculations as the main report. The detail report shows amounts separately for the program and/or its projects depending on the selected financial structure.

**Report Security:** Determined by project view rights.

---

## Program Milestone Dependencies

The Program Milestone Dependencies report displays programs and their inter-project predecessor milestone dependencies. This gives visibility between your program milestones and predecessor-dependent milestones in other projects. The report displays dependencies as a diagram and a detailed list.

The diagram displays a maximum of five predecessor dependencies. The detailed list shows all predecessor dependencies without this limit. The report contains program summary and milestone information, including a dependency schedule stoplight and finish dates, as well as a checkmark icon indicating critical path milestones.

### Report Prerequisites
- The program must have at least one milestone with a dependency to a milestone in a separate project.
- For the program summary section, the program must have budgeted or planned cost entered on the financial summary. If the program has a detailed budget or cost plan, the approved budget amount or plan of record amount displays based on the financial plan type parameter.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Program Milestone Dependencies |
| **Resource ID** | `CSK_PRG_MilestoneDependencies` |
| **Description** | Program Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Program Management/Program Milestone Dependencies` |
| **Path** | `/ca_ppm/reports/program_management/CSK_PRG_MilestoneDependencies` |
| **Data Source** | Clarity Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Program OBS Type | `programOBSTypeKey_1` | Single-select Query | No | -- |
| Program OBS Unit | `programOBSUnitKey_1` | Single-select Query | No | -- |
| Program Manager | `programManagerKey_1` | Multiple-select Query | No | -- |
| Program | `programKey_1` | Multiple-select Query | No | -- |
| Program Status | `programStatusKey_1` | Multiple-select Query | Yes | Approved, Cancelled, On Hold, Unapproved |
| Work Status | `workStatusKey_1` | Multiple-select Query | No | -- |
| Financial Plan Type | `financialPlanTypeKey_1` | Single-select List of Values | Yes | Budget |
| Milestone From | `milestoneFrom` | Single Value Date | No | -- |
| Milestone To | `milestoneTo` | Single Value Date | No | -- |
| Show Grid Detail? | `showGridDetail` | Boolean | No | Checked |
| Include Inactive Programs? | `includeInactivePrograms` | Boolean | No | Unchecked |
| Include Inactive Projects? | `includeInactiveProjects` | Boolean | No | Unchecked |
| Database Schema | `ppmDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Program Status:** Approved, Cancelled, On Hold, Unapproved
- **Work Status:** Requested, Active, On Hold, Cancelled, Complete
- **Financial Plan Type:** Budget, Planned

### Parameter Explanations
- **Program OBS Type** is a cascading parameter and determines which units are listed in the Program OBS Unit parameter. Not used to control which programs display.
- **Program OBS Unit** displays values based upon the selected Program OBS Type.
- **Work Status** is associated to the Work Status lookup in PPM. This lookup is configurable.
- **Financial Plan Type** selects which financial plan cost amount to display in the program summary section:
- **Budget:** Displays budgeted cost.
- **Planned:** Displays planned cost.
- **Milestone From / Milestone To** determine the finish date range of milestones displayed. The diagram displays a maximum of five, but you can use date parameters to control which appear.
- **Show Grid Detail** controls whether dependencies from the diagram also display in a table below. The diagram has a maximum of five; the table shows all.

### Report Fields and Calculations

The program summary section displays: program name, program ID, program manager, work status, start date, finish date, planned or budgeted cost, and objective.

The report displays only programs with inter-project predecessor milestone dependency relationships. The diagram uses rectangles to represent the program and dependent projects. Dependency relationships are represented by lines with arrows pointing from predecessor projects to the successor program.

When **Show Grid Detail** is checked, the report includes a table with: dependent project name, dependent project ID, dependent milestone name, dependency schedule stoplight, dependent milestone finish date, program milestone name, and program milestone finish date. A checkmark icon indicates critical path milestones. Templates are excluded.

#### Dependency Schedule Calculation

The dependency schedule stoplight is the number of days the milestone is late, considering whether a baseline exists and the milestone status (same logic as described in the Days Late calculation for the Program Status Detail report).
