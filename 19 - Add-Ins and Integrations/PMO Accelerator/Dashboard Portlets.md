﻿---
title: PMO Dashboard Portlets for Projects
tags:
  - reference
aliases:
  - Dashboard Portlets
---
# PMO Dashboard Portlets for Projects


The PMO Accelerator offers a variety of program and project pages and portlets. To get started, select from the following dashboard views or page layouts from the properties page of a project or program:

- **PMO-Program Status** Page Layout
- **PMO-Project Status** Page Layout
- **PMO-Project Storyboard** Page Layout

Each view provides a different set of portlets that you can use to analyze program or project information.

**To select a dashboard view:**

1. Click **Home**, **Portfolio Management**, and click **Projects** or **Programs**
2. Click a program or project name link
3. Open the **Properties** menu and select **Settings**
4. Click the **Dashboard View** drop-down menu and select a view
5. Save your view and click **Dashboard**. The selected dashboard page and portlets appear.

## PMO-Program Status Page Layout


Use the PMO-Program Status dashboard view to display program variances in cost, schedule, and risk alerts.

This page includes the following portlets:

### Cost and Schedule Overview Portlet


The Cost and Schedule Overview portlet shows metrics, performance indicators, and risk information of each project associated to a program. Use this portlet to analyze the performance of ongoing projects.

**Fields displayed:**

- **Dashboard Icon** — Links to the project dashboard
- **Project** — Name of the project. Click a project name link to go to the properties page.
- **BAC Cost** — System-calculated baseline at completion (baseline cost at the time of the current baseline revision). Source: Schedule & Performance properties page.
- **Actual Cost (ACWP)** — Actual cost of work performed; total direct cost incurred in performing work based on posted actuals. Source: Schedule & Performance properties page.
- **EAC Cost** — Estimate at completion; total cost of actual work completed to date and the predicted cost of finishing the remaining work. Source: Schedule & Performance properties page.
- **Projected Cost Variance** — Variance between the estimated plus actual cost and the baseline cost. Formula: `((ETC Cost + Actual Cost (ACWP)) - BAC Cost)`
- **Projected Cost Variance%** — Stoplight indicating the projected cost variance as a percentage of BAC cost. Formula:
  `(((ETC Cost + Actual Cost (ACWP)) - BAC Cost) / BAC Cost) * 100`. Stoplights: Green = EAC cost ≤ baseline; Yellow = 1-10% over baseline; Red = >10% over baseline;
  White = no baseline.
- **Start** — Project start date
- **Finish** — Project finish date
- **Baseline Finish** — Baseline finish date of the project
- **Schedule %** — Stoplight indicating days late as a percentage of the project timeframe (finish date minus start date). Green = on/ahead of schedule; Yellow = 1-10% late; Red = >10% late; White = undefined.
- **Days Late** — Number of days late. If a baseline exists: project finish date minus baseline finish date (positive = late, negative = early). If no baseline: today minus project finish date (only when incomplete and past due).
- **Risk** — Stoplight based on project risk score. Green = 0-33 (low risk); Yellow = 34-67 (medium risk); Red = 68-100 (high risk).
- **High Priority Risks** — Total number of high-priority risks (excludes status Resolved or Closed)
- **High Priority Issues** — Total number of high-priority issues (excludes status Resolved or Closed)
- **High Priority Changes** — Total number of high-priority change requests (excludes status Resolved or Closed)

**Aggregate amounts at the bottom of the portlet:**

- **Project** — Total BAC cost, actual cost (ACWP), EAC cost, and projected cost variance for associated projects
- **Program** — Program budget cost
- **Variance** — Difference between program budget and total project EAC costs (negative = over budget)

**Additional fields available via the configure option:** Baseline Start, Business Alignment (Green 68-100 / Yellow 34-67 / Red 0-34), BAC (effort), Actuals (effort), ETC, EAC
(effort), Projected Effort Variance, Projected Effort Variance %, Planned Benefit, Planned Cost, Planned Capital Cost, Planned Capital %, Planned Operating Cost, Planned Operating
%, Planned Value (BCWS), Earned Value (BCWP), Schedule (days stoplight), Days Late %.

> [!NOTE]
> To configure additional fields in a portlet, see Personalize a Portlet under Getting Started with Classic PPM.

> [!TIP]
> **Days Late %:** Each detail task is considered in the context of its summary task in the same way.
> A one-day delay in a short phase or activity is not the same as a one-day delay in a long phase or activity.
> If a leaf task is 5 days late, and the summary task duration is 50 days, this task is considered 10% late given the length of the summary task.

### Schedule and Progress Portlet


The Schedule and Progress portlet displays a bubble graph showing how the score of each project balances between its scheduled variance and its current finish date.
Each bubble represents a project associated to the program. Rolling your cursor over a bubble displays project details such as the name, finish date, schedule %, and planned cost.
Changing a project planned cost changes its bubble size. Clicking a bubble takes you to the project dashboard.

The X-axis displays project finish dates; the Y-axis displays their schedule %. Projects behind schedule appear below the 0 y-coordinate. Projects ahead of schedule appear above the 0 y-coordinate.

**Metrics used in the graph:**

- **Schedule %** — Days late as a percentage of the project timeframe (finish date minus start date). Takes into account project progress and baseline.
- **Progress** — Project progress. Values: Not Started, Started, or Completed
- **Planned Cost** — Planned cost of the project. Source: Financial Summary properties page.

**Additional fields available via configure:** ETC, Planned Capital Cost, Planned Operating Cost, Planned ROI, Planned IRR, Planned MIRR, Planned NPV, Schedule (days stoplight), Days Late, Days Late %.

### Resource Utilization Portlet


The Resource Utilization portlet displays allocation versus assignment by month, illustrated in an area graph. Use this portlet to view the amount of resource effort required or expected to complete the projects associated to a program.

> [!NOTE]
> Assign staff to tasks before viewing resource utilization.

By default, the area graph displays total effort by month for all resources allocated to projects in the program. The Y-axis shows effort in hours; the X-axis shows the corresponding month. Click a legend entry to exclude that group from the graph.

## PMO-Project Status Page Layout


Use the PMO-Project Status page layout to view the overall picture and performance summary of a project. The dashboard displays project indicators, status report indicators, upcoming milestones, and team utilization.

This page includes the following portlets:

### Project Indicators Portlet


The Project Indicators portlet displays key performance indicators (KPIs) for the project, providing a quick update on KPIs such as stage, schedule %, days late, projected cost variance %, projected effort variance %, risk, issues, and change requests.

**Fields displayed:**

- **Stage** — Stage of the project lifecycle as a progress bar. Gray squares indicate completed stages; current stage is represented as a color based on business alignment.
- **Schedule %** — Stoplight indicating days late as a percentage of the project timeframe. Green = on/ahead of schedule; Yellow = 1-10% late; Red = >10% late; White = undefined.
- **Days Late** — Number of days by which a project is late (baseline-based or today-based if no baseline).
- **Projected Cost Variance%** — Stoplight. Formula: `(((ETC Cost + ACWP) - BAC Cost) / BAC Cost) * 100`. Green = EAC ≤ baseline; Yellow = 1-10% over; Red = >10% over; White = no baseline.
- **Projected Effort Variance %** — Stoplight. Formula: `((EAC Effort - BAC Effort) / BAC Effort) * 100`. Green = EAC ≤ baseline; Yellow = 1-10% over; Red = >10% over; White = no baseline data.
- **Risk** — Stoplight based on project risk score. Green = 0-33; Yellow = 34-68; Red = 68-100; White = undefined.
- **Issue** — Stoplight based on highest issue priority (excludes Resolved or Closed). Green = all low priority; Yellow = at least one medium, no high; Red = at least one high priority issue.
- **Change** — Checkmark if at least one change request exists (excludes Resolved or Closed).

### Upcoming Milestones Portlet


The Upcoming Milestones portlet provides a list of all milestones for a project.

**Fields displayed:**

- **Milestone Name** — Name of the milestone. Click to view the task properties page.
- **Finish** — Finish date of the milestone
- **Schedule %** — Stoplight indicating days late as a percentage of the summary task or project timeframe. If the milestone has a parent task in the WBS, the parent task's timeframe is used; otherwise, the project timeframe is used.
- **Days Late** — Days late considering whether a baseline exists and the milestone status.
- **Gantt Schedule** — Gantt chart showing finish dates of milestones. Color based on schedule percentage.

### Project Baselines Portlet


The Project Baselines portlet displays a line graph that charts the baseline activity against the usage or hours worked on the project. The X-axis displays monthly periods and the Y-axis displays cumulative project hours. A line appears for each baseline on the project and the current project plan.

### Status Report Indicators Portlet


The Status Report Indicators portlet displays indicators based on the status report with the most recent report date and a report status of final or no value selected.

> [!NOTE]
> To display information in this portlet, a project status report must exist.

**Fields displayed:**

- **Overall Status** — Stoplight for overall project health. Green = on track; Yellow = minor variance; Red = significant variance.
- **Report Date** — Report date entered for the status report. Click to view the status report properties page.
- **Project Manager** — Project manager name
- **Schedule** — Stoplight for schedule status based on the Schedule section in the status report.
- **Scope** — Stoplight for scope status based on the Scope section in the status report.
- **Cost and Effort** — Stoplight for cost and effort status based on the Cost and Effort section in the status report.
- **Status Reports** — Icon linking to the status reports of the project.

> [!NOTE]
> Starting with Release 14.4, the default Status Report Status lookup values change from Minor Variance to **Needs Help** and from Significant Variance to **At Risk**. The On Track value remains the same.

### Actuals by Transaction Type Portlet


The Actuals by Transaction Type portlet displays the actual cost totals organized by transaction type (equipment, expense, labor, and material). To view data, first enter project transactions and post them to WIP. Quantity and cost amounts roll up in the hierarchy.

**Fields displayed:** Transaction/Resource/Date, Task, Quantity, Cost.

> [!NOTE]
> The portlet has two placeholder columns that do not display data unless the portlet is exported to Excel. When exported, the resource name and transaction date display in the placeholder columns.

### Team Utilization Portlet


The Team Utilization portlet displays total effort per resource across all assigned tasks of the project. You can drill down to see utilization by individual resource and task.

**Fields displayed:**

- **Properties Icon** — Links to the staff member properties page
- **Resource Allocation Icon** — Opens the resource/role allocations page
- **List of Tasks Icon** — Opens the task resource utilization list page for that resource
- **Resource** — Name of the associated resource. Click to view the resource properties page.
- **Average Allocation %** — Average percentage of available time for a resource
- **Time Period** — Time periods for a task displayed as a colored histogram. Green = actual hours to date; Yellow = availability threshold; Red = overallocated.

## PMO-Project Storyboard Page Layout


Use the PMO-Project Storyboard page layout to view detailed information about the overall picture and performance of a project.

This page consists of the following portlets:

### Team Capacity Portlet


The Team Capacity portlet displays future resource needs of projects. It shows the resource demand on the project compared to the allocation of team members staffed on the project. The graph begins with the current month and moves forward for the duration of the project.

- **Staff allocation** — Equal to the remaining allocation on the project
- **Assignment value** — Value entered in the ETC field on the task assignments plus any posted actuals

### Upcoming Milestones Portlet


Same portlet as described in the PMO-Project Status section.

### Issues by Priority Portlet


The Issues by Priority portlet displays a pie chart grouping issues by priority. Issues with a status of Resolved or Closed are excluded. Each pie segment reflects the number of issues of that priority, giving a graphical overall view of the status of a project in terms of issues raised.

Click a pie slice to open the **Issues Drill Down** page.

**Issues Drill Down Page** includes the Issues Listing portlet, which displays details about issues indicating whether the target resolution date is on track.

**Fields in Issues Listing portlet:**

- **Dashboard Icon** — Links to the project dashboard
- **Project** — Project name. Click to go to the properties page.
- **Issue** — Name of the issue
- **Description** — Description of the issue
- **Priority** — Stoplight indicating priority. Green = low; Yellow = medium; Red = high.
- **Schedule** — Stoplight for the schedule (today minus target resolution date). Green = on schedule; Yellow = 1-2 days late; Red = >2 days late; White = date undefined.
- **Target Resolution** — Target resolution date of the issue
- **Category** — Values: Flexibility, Funding, Human Interface, Implementation, Interdependencies, Objectives, Organizational Culture, Resource Availability, Sponsorship, Supportability, or Technical.
- **Owner** — Name of the owner of the issue
- **Email** — Email icon to send an email to the issue owner

**Additional fields available via configure:** Created By, Created Date, Issue ID, Last Updated Date, Owner Email, Priority Code, Project ID, Resolution, Resolved Date, Status, Updated By.

### Earned Value Analysis by Phase Portlet


Use the Earned Value Phase Analysis portlet to track work performance and account for cost and schedule variances.

**Fields displayed:**

- **Phase** — Phase of the project
- **Planned Value (BCWS)** — Budgeted cost of work scheduled (planned value/PV). Source: Schedule & Performance properties page.
- **Earned Value (BCWP)** — Budgeted cost of work performed (earned value/EV). Source: Schedule & Performance properties page.
- **Actual Cost (ACWP)** — Total direct cost incurred in performing work based on posted actuals. Source: Schedule & Performance properties page.
- **Cost Variance (CV)** — System-calculated cost variance (value of what is accomplished to date vs. what is spent to date). Source: Schedule & Performance properties page.
- **Schedule Variance (SV)** — System-calculated schedule variance (value of what is scheduled vs. what is performed). Positive = ahead of baseline; negative = behind baseline. Source: Schedule & Performance properties page.
- **Cost Performance Index (CPI)** — Efficiency rating for work accomplished. ≥1 = favorable; <1 = unfavorable. Source: Schedule & Performance properties page.
- **Schedule Performance Index (SPI)** — Ratio of work performed to work scheduled. ≥1 = on schedule; <1 = behind schedule. Source: Schedule & Performance properties page.

## PMO Status Report Review


Use the Status Report Review page in the PMO Accelerator to review summary and detailed information about status reports, including late and missing status reports, across projects.

To access this page: open **Home**, and from **Dashboards**, select **Status Report Review**.

This page includes the following tabs:

- **Status Report Listing**
- **Late and Missing Status Reports**

### Status Report Listing


The Status Report Listing page provides information about all status reports associated to projects. Use the page-level filter to filter the portlet by project OBS or project manager.

**Status Report Listing Portlet** displays project status reports including the status report update and indicators. There is an **Include Programs** filter option (default: Yes).

**Fields displayed:**

- **Project** — Project name. Click to view the properties page.
- **Manager** — Project manager name
- **Overall Status** — Stoplight. Green = on track; Yellow = minor variance; Red = significant variance.
- **Status Report Update** — Status report update entered on the status report. Click to view the status report properties page.
- **Report Date** — Date entered for the status report
- **Report Status** — Values: draft or final
- **Schedule** — Stoplight for schedule status
- **Scope** — Stoplight for scope status
- **Cost and Effort** — Stoplight for cost and effort status

**Additional fields available via configure:** Change Explanation, Cost and Effort Explanation, Current Phase, Deliverable Scope Changed, Finish Date, Key Accomplishments, Latest
Report, Next Milestone on Track, Progress, Project Affected By External Factors, Project Category, Project ID, Project Objective Changed, Project Type, Review Approval Problems,
Scope Change Required, Staffing/Availability Issues, Stage, Start Date, Status, Status Reporting, Status Report Name, Upcoming Activities, Variance Explanation, Work Status.

> [!NOTE]
> Starting with Release 14.4 and higher, status report lookup values were updated: Green = **On Track**, Orange = **Needs Help** (formerly Minor Variance), Red = **At Risk** (formerly Significant Variance).

### Late and Missing Status Reports


The Late and Missing Status Reports page provides information about projects with late status reports and projects that do not have at least one status report completed. By default, days since last report considers seven days in the past based on the current date.

Use the page-level filter to filter all portlets at once by project OBS and project manager.

**Late Status Reports Portlet** — Displays projects that are supposed to have status reports completed but do not have them completed since the last report date.
Filters to only include projects with Status Reporting set to Optional or Required. Includes an **Include Programs** filter option (default: Yes).

**Fields displayed:** Report Date, Project, Manager, Status Reporting, Project Type, Work Status.

**Additional fields via configure:** Finish Date, Progress, Project Category, Project ID, Stage, Start Date, Status.

**Missing Status Reports Portlet** — Displays projects that do not have at least one status report completed on the project. Filters to only include projects with Status Reporting set to Optional or Required. Includes an **Include Programs** filter option (default: Yes).

**Fields displayed:** Project, Manager, Status Reporting, Project Type, Work Status.

**Additional fields via configure:** Finish Date, Progress, Project Category, Project ID, Stage, Start Date, Status.

## PMO Resource Management Timesheet Overview


The PMO add-in includes the **Timesheet Overview** section of the Resource Management menu and the **Timesheet Review** action on the Team tab of projects.

To access the Timesheet Overview page: open **Home**, and from **Resource Management**, select **Timesheet Overview**.

Use the page-level filter to filter all portlets at once by investment OBS, investment manager, employment type, timesheet status, and timesheet period.

### Investment Timesheet Summary Portlet


The Investment Timesheet Summary portlet displays pending and posted actuals by investment. Use this portlet to compare pending actuals to actuals posted through timesheets.

> [!WARNING]
> This portlet references timesheet data and may result in many rows of data being displayed if filters are not applied.
> You should implement required filters in this portlet so that only reasonable amounts of timesheet data are displayed.
> If you do not do this, you may experience performance issues.

**Fields displayed:**

- **Investment** — Investment name. Only investments with existing timesheet entries appear. Click to go to investment properties.
- **Manager** — Investment manager name
- **Pending Actuals** — Pending actuals amount for the investment
- **Posted Actuals** — Posted actuals amount for the investment
- **Total Actuals** — Total including pending and posted actuals
- **Timesheet Details Icon** — Click to drill down to the Timesheet Details page (includes Investment Timesheet Review and Timesheet Notes portlets)

### Investment Timesheet Review Portlet


Displays pending and posted actuals by task, resource, and time period. Available from the Timesheet Details page.

There is an **Adjustment** filter on this portlet. If set to Yes, adjustment timesheets are displayed. Once an adjustment has been posted, the original adjusted timesheets are not shown to prevent duplication of actuals.

> [!WARNING]
> This portlet references timesheet data and may result in many rows of data being displayed if filters are not applied. You should implement required filters to avoid performance issues.

**To access this portlet:**
1. Click **Home**, **Resource Management**, **Timesheet Overview**
2. Click the Timesheet Details arrow icon

**Fields displayed:** Timesheet, Notes Attached, Investment, Task, Resource, Employment Type, Status, Adjustment, Period Start, Period End, Pending Actuals, Posted Actuals, Total Actuals.

### Timesheet Notes Portlet


Team members, project managers, and resource managers may add notes to timesheets. Notes can be added for the entire timesheet or for a single timesheet entry. This portlet lists notes attached to a single timesheet entry.

**To access this portlet:**
1. Click **Home**, **Resource Management**, **Timesheet Overview**
2. Click the Timesheet Details arrow icon
3. If notes are available, click the yellow checkmark icon in the Notes Attached column

**Fields displayed:** Note, Category, Task, Created By, Created Date, Modified By, Modified Date.

### Pending Estimates Review Portlet


A team member can increase or decrease the ETC on a task using Timesheets. The project manager must approve these modifications before the change is reflected in Classic PPM.
The Pending Estimates Review portlet displays pending estimates and recommended changes by project, task, and resource.
It displays only tasks with pending estimates and excludes tasks when there is no recommended change in ETC.

**Fields displayed:**

- **Project** — Project name. Click to view project properties.
- **Task** — Task name. Click to view task properties.
- **Resource** — Resource assigned to the task. Click to view resource assignment properties.
- **Start** — Start date of the task assignment
- **Finish** — Finish date of the task assignment
- **Pending ETC** — ETC amount added to the timesheet
- **Plan ETC** — ETC amount initially assigned to the task
- **Pending Actuals** — Amount of unposted actuals for the task
- **Adjusted Plan ETC** — Formula: `(Plan ETC - Pending Actuals)`
- **Recommended Change in ETC** — Formula: `(Pending ETC - Adjusted Plan ETC)`
- **Increase/Decrease in ETC** — Stoplight. Green = decrease recommended; Red = increase recommended.

### Timesheet Review Portlet


The Timesheet Review portlet displays pending and posted actuals by task, resource, and time period. Available on the project **Team** tab.

> [!WARNING]
> This portlet references timesheet data and may result in many rows of data being displayed if filters are not applied. You should implement required filters to avoid performance issues.

**To access this portlet:**
1. Click **Home**, **Portfolio Management**, **Projects**
2. Open a project and click the **Team** tab
3. In the **Actions** menu, click **Views**, **Timesheet Review**

**Fields displayed:** Timesheet, Notes Attached, Resource, Employment Type, Task, Status, Adjustment, Period Start, Period End, Pending Actuals, Posted Actuals, Total Actuals.

## PMO Financial Management — Posted Transaction Review


The financial management portlets display information about the total costs posted through transactions associated with investments. To display data, verify investment and resource financial properties are complete and transactions are posted.

### Posted Transaction Review Portlet


Displays financial transactions across investments by transaction date, including quantity, cost, and currency information. Use this portlet to compare transaction currency amounts to converted currency amounts by task and by resource.

To access this portlet: open **Home**, and from **Financial Management**, click **Posted Transaction Review**.

> [!WARNING]
> This portlet references financial transaction data and may result in many rows of data being displayed if filters are not applied. You should implement required filters to avoid performance issues.

**Fields displayed:** Transaction Date, Investment, Task, Charge Code, Cost Type (Capital/Operating), Resource, Transaction Class, Input Type Code, Quantity, Transaction Cost, Transaction Amount, Transaction Currency, Converted Cost, Converted Amount, Converted Currency, Converted Rate.

**Additional fields available via configure:** Chargeable, Investment Class/Department/Entity/ID/Location, Notes Entered on the Transaction, Resource Class/Department/ID/Location,
Task ID, Transaction Number, Transaction Rate, Transaction Type, User Lov 1, User Lov 2, WIP Class, Billing Amount/Cost/Currency/Rate, Reporting Amount/Cost/Currency/Rate.

### Posted Transaction Review Portlet (Investment Level)


Displays financial transactions for a single investment by transaction date, including quantity, cost, and currency information.

> [!WARNING]
> This portlet references financial transaction data and may result in many rows of data being displayed if filters are not applied. You should implement required filters to avoid performance issues.

**To access this portlet:**
1. Open an investment and click **Financial Plans**
2. Click a cost plan name
3. Open the **Actions** menu and click **Posted Transaction Review**

**Fields displayed:** Transaction Date, Task, Charge Code, Cost Type, Resource, Transaction Class, Input Type Code, Quantity, Transaction Cost, Transaction Amount, Transaction Currency, Converted Cost, Converted Amount, Converted Currency, Converted Rate.

Same additional fields available via configure as the global portlet.

## Additional PMO Portlets


The following portlets are included with the PMO Accelerator add-in but are not included on any pages after installation. Use Studio to add these portlets to your Classic PPM pages.

> [!TIP]
> You can personalize the user interface. To add fields to a portlet using the Configure option, see Getting Started with Classic PPM.

### Late Tasks and Milestones Portlet


Provides a list of late tasks and milestones for a project including a Gantt chart. Use this portlet to view tasks that are not completed or are late. You can configure this portlet to display on a project dashboard.

**Fields displayed:**

- **Task** — Task name. Click to view task properties.
- **Task ID** — ID of the task
- **Finish** — Task finish date
- **Status** — Task status: Not Started, Started, or Completed
- **Schedule %** — Stoplight indicating days late as a percentage of the summary task or project timeframe. Green = on/ahead of schedule; Yellow = 1-10% late; Red = >10% late; White = undefined.
- **Days Late** — Days late including non-work days (baseline-based or today-based if no baseline)
- **Gantt Schedule** — Gantt chart showing start and finish dates of tasks and finish dates of milestones

**Additional fields via configure:** Start, Baseline Start, Baseline Finish, Schedule (days stoplight), Days Late %.

### My Timesheets Portlet


Displays the status of your timesheets for open time periods. Use this portlet to view a list of your timesheets that are current, submitted, or late.

**Fields displayed:** Timesheet, Period Start, Period End, Timesheet Status, Status Icon.

**Status icons:**
- Grey Diamond = Current timesheet
- Green Checkmark = Submitted timesheet
- Red Circle = Action required

**Additional fields available for configuration (by administrator only):** Action Required, Days, Weekend.

> [!NOTE]
> This portlet has the **Allow Configuration** option unchecked; therefore, end users cannot configure the portlet unless an administrator enables this option.

### Process Bottlenecks Portlet


Displays initiated processes and indicates how long an assigned resource took to respond to each process milestone step. Use this portlet to analyze if an action is taking longer than the required time and to reevaluate internal processes.

To view this portlet, select a process type from the filter at the top of the portlet. Verify that:
- The process type has at least one step designated as a milestone
- Before activating a process, navigate to each process step considered a milestone and verify the milestone field

**Fields displayed:**

- **Process** — Name of the process
- **Instance** — Process instance name
- **Flow Diagram** — Flow diagram icon. Click to display the process flow diagram.
- **Initiated by** — Name of the person that initiated the process
- **Duration Status** — Stoplight for each process milestone step. Green = <3 days; Yellow = 3-4 days; Red = ≥5 days.
- **Duration and Reviewers** — Duration and reviewer names for each process milestone step

### Project Analysis Portlet


Provides program managers with a view into the projects and tasks that are part of the program. Use this portlet to analyze the schedule of ongoing projects. You can configure this portlet to display on a program dashboard.

> [!NOTE]
> This portlet does not display any data if placed on a page that is not a dashboard tab on the program object.

**Fields displayed:**

- **Project/Task** — Project name with associated tasks. Click project name for all tasks; click task name for task properties.
- **Team Icon** — Links to the project team staff page
- **Project Manager** — Project manager name
- **Stage** — Stage in the lifecycle of the project
- **Start Date** / **Finish Date** — Start and finish dates
- **Overall Status** — Stoplight based on the most recent final status report. Green = on track; Yellow = minor variance; Red = significant variance; White = undefined.
- **Schedule %** — Stoplight for both projects and tasks indicating days late as a percentage of the timeframe.
- **Days Late** — Days late including non-work days (baseline-based or today-based if no baseline)
- **Gantt Schedule** — Gantt chart showing start and finish dates of projects and tasks

**Additional fields via configure:** Baseline Start, Baseline Finish, Business Alignment, Status Indicator, Days Late %, Schedule (days stoplight).

### Project Cycle Time Analysis Portlet


Displays the number of days spent in each project phase illustrated as a bar graph. Use this portlet to compare time spent in each phase for projects based on the same methodology (project template).

**To use this portlet:**
1. With the project open, open the **Properties** menu and click **Settings**
2. Click the **Methodology** drop-down and select a project methodology

By default, the bar graph displays duration of each phase in the methodology. X-axis = duration in days; Y-axis = corresponding project phase.

### Project Document Review Portlet


Displays project documents, including links to documents and folder locations. Use this portlet to review documents for specific projects or across projects by filtering on OBS or project manager.

**Fields displayed:**

- **Project** — Project name. Click to view properties.
- **Manager** — Project manager
- **Document Manager Icon** — Links to the folder location of the document
- **Document** — Document name. Click to open the document.
- **Status** — Stoplight. Green = Approved; Yellow = Submitted; Red = Rejected.
- **Category** — Document category
- **Owner** — Document owner
- **Created Date** — Date the document was created
- **Last Updated Date** — Date the document was last updated
- **Version Number** — Version number of the document
- **Last Revision Comments** — Last revision comments

**Additional fields via configure:** Created By, Description, Folder, Last Updated By, Location, Non-participants Allowed Access, Project ID, Status Name, Versioning Enabled.

### Project Lifecycle Review Portlet


Displays the schedule status of each project phase. Use this portlet for a phase schedule overview of projects based on the same project methodology.

**To use this portlet:**
1. With the project open, open the **Properties** menu and click **Settings**
2. Click the **Methodology** drop-down and select a project template as the methodology

**Fields displayed:**

- **Dashboard Icon** — Links to the project dashboard
- **Project** — Project name. Click to go to the properties page.
- **Project Manager** — Name of the project manager
- **Stage** — Stage of the project lifecycle as a progress bar. Gray squares = completed stages; current stage = color based on Business Alignment.
- **Start** / **Finish** — Project start and finish dates
- **Schedule%** — Stoplight indicating days late as a percentage of the project timeframe (phase-based). Green = on/ahead of schedule; Yellow = 1-10% late; Red = >10% late; White = undefined.

**Additional fields via configure:** Business Alignment, Stage Name, Days Late, Schedule (days stoplight), Days Late %, Phase Status (Green = completed; Yellow = started/on schedule; Red = started/late; White = not started).

### Resource Utilization Percentage by Month Portlet


Displays resource assignments as a percentage of allocations by month, illustrated in a column graph. Use this portlet to verify that all resources assigned to the projects are fully utilized. You can configure this portlet to display on a program dashboard.

X-axis = months (starting with current month); Y-axis = resource utilization as a percentage.

### Team Member Task Summary Portlet


Displays resource assignments, ETC, pending actuals, and actuals for project tasks. Use the portlet to analyze task schedule by resource and review estimates and actuals. You can configure this portlet to display on a project dashboard.

**Fields displayed:**

- **Dashboard Icon** — Links to the project dashboard
- **Project** — Project name. Click to go to properties.
- **Task** — Task name. Click to view task properties.
- **Guidelines** — Guidelines icon if the task has a valid URL or guideline set up. Click to go to the guidelines page.
- **Resource/Role** — Resource or role assigned to the task. Click to view properties.
- **Priority** — Stoplight for task priority. Green = 24-36 (low); Yellow = 12-23 (medium); Red = 0-11 (high).
- **Status** — Task status: Not Started, Started, or Completed
- **Schedule %** — Stoplight indicating days late as a percentage of the summary task or project timeframe.
- **Days Late** — Days late including non-work days (baseline-based or today-based if no baseline)

## Related
- [[_MOC Integrations]]

%%Source: p4754-4801%%
