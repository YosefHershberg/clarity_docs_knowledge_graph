---
title: PMO General Pages and Portlets
tags:
  - reference
aliases:
  - Pages and Portlets
canonical: true
audience: admin, dev
domain: integrations
---
# PMO General Pages and Portlets


The PMO Accelerator includes the following general pages and portlets:

- **Sponsor** — sponsor view of project alignment, risk, budget, and schedule
- **Program Dashboard** — program cost and schedule overview
- **PM Alerts** — exception-based view of project manager activity
- **Project Dashboard** — project schedule, cost, and effort metrics
- **Risks, Issues, and Changes** — manage all risks, issues, and change requests

---

## Sponsor Page


Use the overview sponsor page to analyze the sponsor view of project alignment, risk, budget, and schedule.

**Steps to access:**
1. Open **Home**, and from **Personal**, click **General**
2. Click **Sponsor**

Use the page-level filter to filter all portlets at once by sponsor.

**Portlets on this page:**
- Project KPIs by OBS Portlet
- Project Schedule Portlet
- Planned Cost by Project Type Portlet

### Project KPIs by OBS Portlet


Displays key performance indicators (KPIs) for projects organized by OBS. Provides a quick update on KPIs such as business alignment, schedule %, days late, projected cost and effort variance %, risk, issues, and change requests.

The portlet displays information from both an OBS and a project perspective. Project information rolls up to each OBS level.

**Fields:**

- **OBS/Project** — Displays the OBS or project name. Expand an OBS name to display all projects. Click a project link to go to project properties.
- **Manager** — Displays the project manager. Click a link to go to the resource properties page.
- **Email Icon** — Click to send an email to the project manager.
- **Business Alignment** — Displays how well the project aligns to the organization business goal. For each OBS unit, the average alignment is calculated. Stoplights: Green (68–100) = good alignment; Yellow (34–67) = average; Red (0–33) = poor; White = undefined.
- **Schedule %** — Displays a stoplight indicating days late as a percentage of project timeframe (finish minus start). Considers project progress and baseline. Stoplights: Green = on/ahead of schedule; Yellow = 1–10% late; Red = >10% late; White = undefined.
- **Days Late** — Displays days by which the project is late. If a baseline exists: project finish minus baseline finish. If no baseline: today minus project finish date (when not complete and past due). Average is calculated per OBS unit.
- **Projected Cost Variance %** — Stoplight: (((ETC Cost + Actual Cost) - BAC Cost) / BAC Cost) × 100. Stoplights: Green = EAC ≤ baseline; Yellow = 1–10% over; Red = >10% over; White = no baseline.
- **Projected Effort Variance %** — Stoplight: ((EAC Effort - BAC Effort) / BAC Effort) × 100. Stoplights: Green = EAC ≤ baseline; Yellow = 1–10% over; Red = >10% over; White = no baseline.
- **Risk** — Stoplight based on project risk score. Stoplights: Green (0–33) = low; Yellow (34–67) = medium; Red (68–100) = high.
- **Issue** — Stoplight based on the highest issue priority. Excludes Resolved/Closed issues. Stoplights: Green = all issues low priority; Yellow = at least one medium, no high; Red = at least one high.
- **Change** — Checkmark if at least one change request exists (excluding Resolved/Closed).

**Additional configurable fields:**

> [!NOTE]
> To configure additional fields to a portlet, see Getting Started.

- **Days Late %** — Days late as a percentage of the project timeframe (finish minus start). Average calculated per OBS unit.
- **Schedule** — Stoplight for number of days late. Stoplights: Green = on/ahead; Yellow = 1–10 days late; Red = >10 days late; White = undefined.
- **Projected Cost Variance** — Formula: ((ETC Cost + Actual Cost (ACWP)) - BAC Cost).
- **Projected Effort Variance** — Formula: (EAC Effort - BAC Effort).

### Project Schedule Portlet


Displays project type, risk, planned cost, and schedule in a Gantt chart format.

**Fields:**

- **Dashboard Icon** — Links to the project dashboard.
- **Project** — Displays the project name. Click to go to the project properties page.
- **Project Type** — Displays the project type.
- **Risk** — Stoplight based on the total risk score. Stoplights: Green (0–33) = low; Yellow (34–67) = medium; Red (68–100) = high.
- **Planned Cost** — Amount of planned cost for the project.
- **Schedule** — Gantt chart representing the project length.

Based on the **Project object provider**. Additional fields from the object provider may be added through the configure option.

### Planned Cost by Project Type Portlet


A pie chart showing the percentage of planned cost for each project type. Each pie slice corresponds to a project type. Mouse over a pie slice to display the total planned cost amount for that type.

Based on the **Project object provider**. Additional fields may be added through the configure option.

---

## Program Dashboard Page


Use the overview program dashboard page to review program cost and schedule. Compares program data to cost and schedule of associated projects.

**Steps to access:**
1. Open **Home**, and from **Personal**, click **General**
2. Click **Program Dashboard**

Use the page-level filter to filter both portlets at once by program.

**Portlets on this page:**
- Program Manager Cost Dashboard Portlet
- Program Manager Schedule Dashboard Portlet

### Program Manager Cost Dashboard Portlet


Displays cost and effort performance of projects belonging to a program. Compares a program budget to the cost performance of its projects. Information is also available on the Schedule & Performance and Financial Summary properties of each project.

**Fields:**

- **Dashboard Icon** — Links to the project dashboard.
- **Project** — Click to go to the project properties page.
- **Risk** — Stoplight based on the project risk score. Stoplights: Green (0–33) = low; Yellow (34–67) = medium; Red (68–100) = high.
- **Stage** — Stage in the project lifecycle.
- **Finish** — Finish date of the project.
- **Planned ROI** — Ratio of money gained or lost relative to money invested. Source: Financial Summary properties.
- **Planned IRR** — Internal Rate of Return (discount rate to achieve zero NPV). Source: Financial Summary properties.
- **BAC Cost** — Baseline at completion (baseline cost at time of current baseline revision). Source: Schedule & Performance properties.
- **Actual Cost (ACWP)** — Actual cost of work performed (total direct cost based on posted actuals). Source: Schedule & Performance properties.
- **EAC Cost** — Estimate at completion (actual cost to date + predicted cost to finish). Source: Schedule & Performance properties.
- **Projected Cost Variance** — Formula: ((ETC Cost + Actual Cost (ACWP)) - BAC Cost).
- **Projected Cost Variance %** — Stoplight: (((ETC Cost + Actual Cost (ACWP)) - BAC Cost) / BAC Cost) × 100. Stoplights: Green = EAC ≤ baseline; Yellow = 1–10% over; Red = >10% over; White = no baseline.
- **Cost Drill Down** — Icon linking to a page with Project Costs by Phase, Project Costs by Task, and Project Costs by Resource portlets.

**Aggregate amounts at the bottom:**
- **Project** — Aggregate percentages and amounts for projects in the program (averages for ROI/IRR; sums for BAC, Actual, EAC, Variance).
- **Program** — Budgeted Cost from Financial Summary properties of the program.
- **Variance** — Difference between program Budgeted Cost and total EAC cost of projects.

**Additional configurable fields:** Start, Project Manager, Planned Cost, Planned Capital Cost, Planned Capital %, Planned Operating Cost, Planned Operating %, Planned Benefit,
Planned NPV, Planned Breakeven, Planned MIRR, Planned Payback (Months), BAC (effort), Actuals (effort), ETC (effort), EAC (effort), Projected Effort Variance %, Planned Value
(BCWS), Earned Value (BCWP), Cost Variance (CV), Schedule Variance (SV), Cost Variance %, Schedule Variance %, Cost Performance Index (CPI), Schedule Performance Index (SPI).

#### Project Costs Drill Down Page


Click the **Cost Drill Down** icon in the Program Manager Cost Dashboard to access:

- **Project Costs by Phase Portlet**
- **Project Costs by Task Portlet**
- **Project Costs by Resource Portlet**

**Project Costs by Phase Portlet**

Displays cost performance amounts and variances by phase. Identifies phases that are over baseline from a cost standpoint.

Fields: Project, Phase (click to view task properties), Status, Start, Finish, BAC Cost, Actual Cost (ACWP), ETC Cost, EAC Cost, Projected Cost Variance, Projected Cost Variance % (stoplight).

Additional configurable fields:
Baseline Start, Baseline Finish, BAC (effort), Actuals (effort), ETC (effort), EAC (effort), Projected Effort Variance, Projected Effort Variance %, Planned Value (BCWS), Earned
Value (BCWP), Cost Variance (CV), Schedule Variance (SV), Cost Variance %, Schedule Variance %, CPI, SPI.

**Project Costs by Task Portlet**

Displays cost performance amounts and variances by task. Identifies tasks that are over baseline from a cost standpoint.

Fields: Project, Phase, Task, Status, Start, Finish, BAC Cost, Actual Cost (ACWP), ETC Cost, EAC Cost, Projected Cost Variance, Projected Cost Variance % (stoplight).

Additional configurable fields: Same as Project Costs by Phase.

**Project Costs by Resource Portlet**

Displays cost performance amounts and variances by resource. Identifies resources that are over baseline from a cost standpoint.

Fields: Project, Team Icon (links to team staff page), Resource/Role, Project Role, Resource Type, Employment Type, BAC Cost, Actual Cost (ACWP), ETC Cost, EAC Cost, Projected Cost Variance, Projected Cost Variance % (stoplight).

Additional configurable fields: BAC (effort), Actuals (effort), ETC (effort), EAC (effort), Projected Effort Variance, Projected Effort Variance %.

### Program Manager Schedule Dashboard Portlet


Displays schedule performance of a program and projects belonging to the program.

**Fields:**

- **Dashboard Icon** — Links to the program or project dashboard.
- **Program/Project** — Click to open the properties page.
- **Start** — Start date.
- **Finish** — Finish date.
- **Overall Status** — Stoplight based on the most recent final status report. Stoplights: Green = on track; Yellow = minor variance; Red = significant variance; White = undefined.
- **Schedule %** — Stoplight for days late as a percentage of timeframe. Stoplights: Green = on/ahead; Yellow = 1–10% late; Red = >10% late; White = undefined.
- **Days Late** — Days late considering baseline existence and program/project progress.
- **Gantt Schedule** — Gantt chart comparing program finish date with associated project schedules. Color based on Schedule %.

**Additional configurable fields:** Baseline Start, Baseline Finish, Project Manager, Days Late %, Schedule (stoplight for days late with Green/Yellow/Red/White), Status Indicator (stoplight from Schedule & Performance properties).

---

## PM Alerts Page


Provides a high-level, exception-based view of project manager activity. Alerts indicate potential problem areas within the next 45 days (default) or the number of days entered in the **Days Outlook** filter.

If you provide a value for **As of Date**, portlets display results centered on that date (45 days past and future). You can combine **As of Date** and **Days Outlook**.

**Steps to access:**
1. Open **Home**, and from **Personal**, click **General**
2. Click **PM Alerts**

Use the page-level filter to filter all portlets at once by OBS, Project Manager, As of Date, and Days Outlook.

**Portlets on this page:**
- Schedule Performance Portlet
- Milestones Portlet
- Current Issues Portlet
- Staffing Portlet

### Schedule Performance Portlet


Displays the number of late tasks categorized as Critical Late, Past Due, or Scheduled Late within the days outlook.

**Task classifications:**
- **Critical Late** — Tasks are late and on the critical path.
- **Past Due** — Noncritical tasks past their finish date.
- **Scheduled Late** — Noncritical tasks due as of the current date or in the future based on scheduling.

Summary tasks, milestones, and tasks with status "Completed" are not included. Days late is calculated as:
- If a baseline exists: task finish minus baseline finish.
- If baseline exists and finish dates match: task is late if not completed and due before today.
- If no baseline: today minus task finish date (when not complete and past due).

No columns on the graph implies all tasks are completing as scheduled. Click a bar to open the **Schedule Performance Drill Down** page.

#### Schedule Performance Drill Down Page


Includes the **Schedule Performance Details** portlet. Displays a list of critical late, past due, or scheduled late tasks within the days outlook.

**Fields:** Dashboard Icon, Project, Task, Status (Not Started / Started), Classification (Critical Late / Past Due / Scheduled Late), Finish, Schedule % (stoplight), Days Late,
BAC (effort), Actuals (effort), ETC (effort), EAC (effort), Projected Effort Variance, Projected Effort Variance % (stoplight).

**Additional configurable fields:** Start, Baseline Start, Baseline Finish, Days Late %, Schedule (stoplight for days late count).

### Milestones Portlet


Provides a list of project milestones and schedule indicators within the days outlook.

**Fields:** Dashboard Icon, Project, Milestone (click to view task properties), Finish, Schedule % (stoplight), Days Late.

**Additional configurable fields:** Start, Baseline Start, Baseline Finish, Days Late %, Schedule (stoplight for days late count).

### Current Issues Portlet


Displays issues within the days outlook grouped by priority across projects. Excludes issues with status "Resolved" or "Closed". Displays as a pie chart — each slice reflects the number of issues by priority.

Click a pie slice to open the **Current Issues Drill Down** page.

#### Current Issues Drill Down Page


Includes the **Current Issues Listing** portlet. Displays a list of issues within the days outlook.

**Fields:**

- **Dashboard Icon** — Links to the project dashboard.
- **Project** — Click to view project properties.
- **Issue** — Name of the issue.
- **Description** — Issue description.
- **Priority** — Stoplight: Green = low; Yellow = medium; Red = high.
- **Schedule** — Stoplight: today's date minus target resolution date. Green = on schedule; Yellow = 1–2 days late; Red = >2 days late; White = no target resolution date.
- **Target Resolution** — Target resolution date.
- **Category** — Values: Flexibility, Funding, Human Interface, Implementation, Interdependencies, Objectives, Organizational Culture, Resource Availability, Sponsorship, Supportability, or Technical.
- **Owner** — Name of the issue owner.
- **Email** — Click to send email to the issue owner.

**Additional configurable fields:** Created By, Created Date, Issue ID, Last Updated By, Last Updated Date, Priority Name (text instead of stoplight), Resolution, Resolved Date, Status.

### Staffing Portlet


Identifies projects where resources are not assigned to tasks within the days outlook. Displays unstaffed ETC hours (hours assigned to a role instead of a resource) in a bar chart. Y-axis = project names; X-axis = unstaffed role hours.

Summary tasks, milestones, and completed tasks are excluded. Click a bar to open the **Staffing Outlook Drill Down** page.

#### Staffing Outlook Drill Down Page


Includes the **Staffing Details** portlet. Lists unstaffed tasks for the selected project within the days outlook.

**Fields:**

- **Dashboard Icon** — Links to the project dashboard.
- **Project** — Click to view project properties.
- **Task** — Click to view task properties.
- **Team** — Resources icon. Click to go to the project team staff page to assign resources.
- **Unstaffed Role** — Name of the unstaffed role. Click to open role properties.
- **Assignment Start** — Start date of the assignment.
- **Assignment Finish** — Finish date of the assignment.
- **ETC** — Unstaffed ETC hours for the assignment.
- **Gantt Schedule** — Gantt chart indicating when the assignment starts and finishes.

**Additional configurable field:** Project ID.

---

## Project Dashboard Page


Lists projects as a hierarchy. Allows drilling from a project through its work breakdown structure to the lowest task level, including subprojects. Provides visibility into project schedule, cost, and effort metrics.

**Steps to access:**
1. Open **Home**, and from **Personal**, click **General**
2. Click **Project Dashboard**

Use the page-level filter to filter all portlets by OBS and project manager.

**Portlets on this page:**
- Schedule Dashboard Portlet
- Cost and Effort Dashboard Portlet

### Schedule Dashboard Portlet


Displays project schedule performance and a Gantt chart. You can filter to show only projects you manage or all projects you have access to, including subprojects. Subprojects are always shown under their master projects. By default, **Include Programs** is set to **Yes**.

**Fields:**

- **Project/WBS** — Click to open the properties page.
- **Subprojects Icon** — Indicates the project is a subproject.
- **Gantt Icon** — Links to the Clarity-Gantt view.
- **Start** — Start date of the project or task.
- **Finish** — Finish date of the project or task.
- **Overall Status** — Stoplight based on the most recent final status report. Stoplights: Green = on track; Yellow = minor variance; Red = significant variance; White = undefined.
- **Schedule %** — Stoplight for days late as a percentage of timeframe. Stoplights: Green = on/ahead; Yellow = 1–10% late; Red = >10% late; White = undefined.
- **Days Late** — Days late considering baseline and progress/status.
- **Gantt Schedule** — Gantt chart showing start and finish dates, colored by schedule percentage.

> [!NOTE]
> When you export a portlet, limitations apply. See Personalize Clarity: Change Password, Account Settings, Notifications, Export to Excel and Personalize a Portlet.

**Additional configurable fields:** % Complete, Baseline Start, Baseline Finish, Days Late %, Schedule (stoplight for days late count), Project/Task ID, Project Manager, Project Progress or Task Status, Work Status.

### Cost and Effort Dashboard Portlet


Displays project cost and effort performance amounts and variances. You can filter to projects you manage or all projects you have access to, including subprojects.
Subprojects are always included under their master projects. **Include Programs** filter defaults to **Yes**. Milestones do not have hours or cost values.

**Fields:**

- **Project/WBS** — Click to open the properties page.
- **Subprojects Icon** — Indicates the project is a subproject.
- **BAC Cost** — Baseline at completion. Sources: Schedule & Performance properties (project) or Performance properties (task).
- **Actual Cost (ACWP)** — Actual cost of work performed. Same sources.
- **EAC Cost** — Estimate at completion. Same sources.
- **Projected Cost Variance** — Formula: ((ETC Cost + Actual Cost (ACWP)) - BAC Cost).
- **Projected Cost Variance %** — Stoplight: same formula as above as a percentage. Stoplights: Green = EAC ≤ baseline; Yellow = 1–10% over; Red = >10% over; White = no baseline.
- **BAC** — Baseline effort (actuals + remaining ETC at time of baseline).
- **Actuals** — Actual effort posted for the task in the project.
- **EAC** — Estimated effort at completion.
- **Projected Effort Variance** — Formula: (EAC Effort - BAC Effort).
- **Projected Effort Variance %** — Stoplight: ((EAC Effort - BAC Effort) / BAC Effort) × 100. Stoplights: Green = EAC ≤ baseline; Yellow = 1–10% over; Red = >10% over; White = no baseline.

**Additional configurable fields:** ETC (effort), ETC Cost, Finish, Project/Task ID, Project Manager, Project Progress or Task Status, Start, Work Status.

---

## Risks, Issues, and Changes Page


Provides a place to manage all risks, issues, and change requests tracked in Classic PPM.

**Steps to access:**
1. Open **Home**, and click **General** under **Personal**
2. Click **Risks, Issues and Changes** (Risk Management portlet appears maximized by default)

Use the page-level filter to filter all portlets at once by OBS and project manager.

**Portlets on this page:**
- Risk Management Portlet
- Issue Management Portlet
- Change Request Management Portlet

### Risk Management Portlet


Displays a list of risks associated with accessible projects. Default filter is set to risks with status "Open" or "Work in Progress". **Include Programs** filter defaults to **Yes**.

**Fields:**

- **Dashboard Icon** — Links to the project dashboard.
- **Project** — Click to view project properties.
- **Risk** — Click to view risk properties.
- **Description** — Risk description.
- **Priority** — Stoplight: Green = low; Yellow = medium; Red = high.
- **Probability** — Stoplight: Green = low; Yellow = medium; Red = high; White = undefined.
- **Impact** — Stoplight: Green = low; Yellow = medium; Red = high; White = undefined.
- **Above Threshold** — Checkmark if calculated risk ≥ system-level overall risk threshold.
- **Target Resolution Date** — Target resolution date of the risk.
- **Category** — Values: Flexibility, Funding, Human Interface, Implementation, Interdependencies, Objectives, Organizational Culture, Resource Availability, Sponsorship, Supportability, or Technical.
- **Owner** — Name of the risk owner.
- **Email** — Click to send email to the risk owner.

**Additional configurable fields:** Assumptions, Calculated Risk, Date Last Updated, Impact Date, Impact Description, Project ID, Resolution, Resolved Date, Response Type, Risk ID, Risk Symptoms, Status, Updated By.

### Issue Management Portlet


Displays a list of issues associated with accessible projects. Default filter is set to issues with status "Open" or "Work in Progress". **Include Programs** filter defaults to **Yes**.

**Fields:**

- **Dashboard Icon** — Links to the project dashboard.
- **Project** — Click to view project properties.
- **Issue** — Click to view issue properties.
- **Description** — Issue description.
- **Priority** — Stoplight: Green = low; Yellow = medium; Red = high.
- **Schedule** — Stoplight: today minus target resolution date. Green = on schedule; Yellow = 1–2 days late; Red = >2 days late; White = undefined.
- **Target Resolution Date** — Target resolution date.
- **Category** — Values: same as Risk Management portlet.
- **Owner** — Name of the issue owner.
- **Email** — Click to send email to the issue owner.

**Additional configurable fields:** Created By, Created Date, Issue ID, Last Updated, Project ID, Resolution, Resolved Date, Status, Updated By.

### Change Request Management Portlet


Displays a list of change requests associated with accessible projects. Default filter is set to change requests with status "Open" or "Work in Progress". **Include Programs** filter defaults to **Yes**.

**Fields:**

- **Dashboard Icon** — Links to the project dashboard.
- **Project** — Click to view project properties.
- **Change Request** — Click to view change request properties.
- **Description** — Description of the change request.
- **Priority** — Stoplight: Green = low; Yellow = medium; Red = high.
- **Expected Close Date** — Expected close date of the change request.
- **Category** — Values: same as Risk Management portlet.
- **Owner** — Name of the change request owner.
- **Email** — Click to send email to the change request owner.

**Additional configurable fields:** Approved By, Approved Date, Assessment Date, Assessor, Benefits, Change Request ID, Close Date, Created By, Created Date, Effect On Resources,
Effect On Schedule, Impact On Baseline, Impact On Other Projects, Last Updated Date, Project ID, Reasons, Review Date, Status, Updated By.

---

## PMO Portfolio Pages and Portlets


The PMO Accelerator includes the following portfolio pages and portlets:

- **Portfolio Dashboard** — portfolio-level analysis across multiple portfolios
- **PMO Portfolio Investment Dashboard** — investment-level analysis within a portfolio

> [!TIP]
> To add fields to a portlet using the Configure option, see Getting Started with Classic PPM. That section includes documentation on personalizing the user interface.

---

## Portfolio Dashboard Page


Use the Portfolio Dashboard to view a series of tabs with portlets that provide a view of data across portfolios.
Portfolio planning and analysis occur within the portfolio planning horizon.
If the plan of record is selected as a portlet filter, then the planning horizon is based on the plan of record start and finish dates.

This dashboard shows portfolio investment amounts that are **above the waterline**.

**Steps to access:** Open **Home**, and from **Portfolio Management**, click **Portfolio Dashboard**.

**Tabs on this page:**
- Cost and Benefits
- Roles
- Cost and Health
- Goal Analysis
- Investment Analysis
- Capital and Operating

### Cost and Benefits Tab


Shows target, distributed, and planned cost and benefits for each portfolio. Variance amounts compare target to distributed and distributed to planned.

Use the page-level filter to filter by manager, stakeholder, and above waterline. By default, only above-waterline investment amounts are shown. Change the **Above Waterline** drop-down to view below-waterline or all amounts.

**Portlets:** Portfolio Costs Portlet, Portfolio Cost and Benefit Analysis Portlet.

#### Portfolio Costs Portlet


Column graph showing the target, distributed, and planned cost of each portfolio. Use to compare cost amounts across portfolios.

**Filters:** Portfolio (multi-select), OBS Unit, Portfolio Plan Type, Managers (multi-select), Stakeholders (multi-select), Above Waterline, Active.

By default, **Portfolio Plan Type** is set to **Portfolio** (amounts as of the last sync). Set to **Plan of Record** for plan-based amounts (portfolio must have a plan of record to appear).

Y-axis values = portfolio target, distributed, and planned cost amounts. Target cost is a line; distributed and planned cost are columns. Click a column to open the portfolio waterlines page.

Based on the **Portfolio Provider**. Additional fields available through the configure option.

#### Portfolio Cost and Benefit Analysis Portlet


Displays target, distributed, and planned cost and benefit amounts for each portfolio. Shows overall health, risk, and cost variances.

**Filters:** Same as Portfolio Costs Portlet.

**Fields:**

- **Portfolio** — Click to go to the portfolio properties page.
- **Targets Icon** — Opens the portfolio targets page.
- **Waterlines Icon** — Opens the portfolio waterlines page.
- **Overall Health** — Stoplight based on portfolio overall health score. Stoplights: Green (68–100); Yellow (34–67); Red (0–33).
- **Risk** — Stoplight: Green = low; Yellow = medium; Red = high.
- **Target Cost** — Target total cost of the portfolio.
- **Distributed Cost** — Distributed target total cost.
- **Target to Distributed Cost Variance** — Difference between target and distributed target cost (negative = distributed exceeds target).
- **Planned Cost** — Planned cost of portfolio investments within the planning horizon.
- **Distributed to Planned Cost Variance** — Difference between distributed target and planned cost (negative = planned exceeds distributed target).
- **Target Benefits** — Target benefits of the portfolio.
- **Distributed Benefits** — Distributed target benefits.
- **Target to Distributed Benefits Variance** — Difference (negative = distributed exceeds target).
- **Planned Benefits** — Planned benefits of portfolio investments within the planning horizon.
- **Distributed to Planned Benefits Variance** — Difference (negative = planned exceeds distributed target).

Based on the **Portfolio Provider**.

> [!NOTE]
> To configure additional fields in a portlet, see Getting Started.

### Roles Tab


Shows target, distributed, and demand amounts for roles in each portfolio. Variance amounts compare target to distributed and distributed to demand.

**Access:** Open **Home**, from **Portfolio Management**, select **Portfolio Dashboard**, then click the **Roles** tab.

Target and distributed amounts reflect the portfolio properties or targets tab. Role demand amounts are the role allocation demand of the portfolio investments. Amounts display in hours or FTE determined by the **Capacity Unit Type** field on the portfolio properties.

Use the page-level filter to filter by manager, stakeholder, and above waterline.

**Portlets:** Portfolio Roles Portlet, Portfolio Role Analysis Portlet.

#### Portfolio Roles Portlet


Column graph showing target, distributed, and demand amounts for roles in each portfolio. Compare role amounts across portfolios.

**Filters:** Portfolio (multi-select), OBS Unit, Portfolio Plan Type, Capacity Unit Type, Managers (multi-select), Stakeholders (multi-select), Above Waterline, Active.

**Capacity Unit Type** filter shows only portfolios set to hours or FTE. Y-axis = portfolio target, distributed, and demand amounts for roles. Target is a line; distributed and demand are columns. Click a column to open the portfolio waterlines page.

Based on the **Portfolio Provider**.

#### Portfolio Role Analysis Portlet


Displays target, distributed, and demand amounts for roles in each portfolio.

**Filters:** Same as Portfolio Roles Portlet.

**Fields:**

- **Portfolio** — Click to go to the portfolio properties page.
- **Targets Icon** — Opens the portfolio targets page.
- **Waterlines Icon** — Opens the portfolio waterlines page.
- **Overall Health** — Stoplight: Green (68–100); Yellow (34–67); Red (0–33).
- **Risk** — Stoplight: Green = low; Yellow = medium; Red = high.
- **Target Overall Roles** — Target overall roles of the portfolio.
- **Distributed Overall Roles** — Distributed overall roles.
- **Target to Distributed Roles Variance** — Difference (negative = distributed exceeds target).
- **Role Demand** — Role allocation demand for portfolio roles and other roles within the planning horizon.
- **Distributed to Role Demand Variance** — Difference (negative = role demand exceeds distributed target).

Based on the **Portfolio Provider**.

### Cost and Health Tab


View overall health and target cost for each portfolio along with the aggregated planned cost of investments.

**Access:** Portfolio Dashboard → **Cost and Health** tab.

Use the page-level filter to filter by manager, stakeholder, and above waterline.

**Portlet:** Portfolio Cost by Overall Health Portlet.

#### Portfolio Cost by Overall Health Portlet


Bubble graph displaying how planned cost of portfolio investments balances between portfolio overall health and target total cost. Each bubble represents a portfolio; bubble size = planned cost.

**Filters:** Portfolio (multi-select), OBS Unit, Portfolio Plan Type, Managers (multi-select), Stakeholders (multi-select), Above Waterline, Active.

**Graph description:**
- Click a bubble to open the portfolio waterlines page. Mouse over to see portfolio name, target total cost, overall health score, and planned cost.
- Y-axis = Overall Health; X-axis = Target Total Cost.
- **Zoned Background Color:** Green (68–100) = upper third; Yellow (34–67) = middle; Red (0–33) = lower third.

Based on the **Portfolio Provider**.

### Goal Analysis Tab


Shows aggregated investment counts, planned cost, role demand, and planned NPV, grouped by goal, across portfolios.

**Access:** Portfolio Dashboard → **Goal Analysis** tab.

Role demand displays in hours or FTE per portfolio properties. Use the page-level filter to filter by manager, stakeholder, and above waterline.

**Portlets:**
- Portfolio Investment Count by Goal Portlet
- Portfolio Planned Cost by Goal Portlet
- Portfolio Role Demand by Goal Portlet
- Portfolio Planned NPV by Goal Portlet

> [!NOTE]
> If the same investments appear in multiple portfolios and both are included in the filter, the portlets will double-count investment amounts. Set up portfolios and filtering carefully to avoid this.

#### Portfolio Investment Count by Goal Portlet


Bar graph showing the number of portfolio investments across portfolios, grouped by goal. **Filters:** Portfolio (multi-select), Portfolio Plan Type, Above Waterline, Portfolio Active. X-axis = percentage of investments by goal. Mouse over a bar to display the total number of investments for a goal.

Based on the **Portfolio Investment Provider**.

#### Portfolio Planned Cost by Goal Portlet


Pie graph showing planned cost, grouped by goal, for portfolio investments across portfolios. **Filters:** Portfolio (multi-select), Portfolio Plan Type, Above Waterline, Portfolio Active. Each pie segment = percentage of planned cost by goal. Mouse over to display total planned cost for a goal.

Based on the **Portfolio Investment Provider**.

#### Portfolio Role Demand by Goal Portlet


Pie graph showing role demand, grouped by goal, for portfolio investments across portfolios.
**Filters:** Portfolio (multi-select), Portfolio Plan Type, Portfolio Capacity Unit Type, Above Waterline, Portfolio Active. Each pie segment = percentage of role demand by goal.
Mouse over to display role demand for a goal.

Based on the **Portfolio Investment Provider**.

#### Portfolio Planned NPV by Goal Portlet


Column graph showing planned NPV, grouped by goal, for portfolio investments across portfolios. **Filters:** Portfolio (multi-select), Portfolio Plan Type, Above Waterline, Portfolio Active. Y-axis = planned NPV amounts by goal. Mouse over a column to display the planned NPV for a goal.

Based on the **Portfolio Investment Provider**.

### Investment Analysis Tab


Shows aggregated investment counts by type, work status, waterline position, and approval status, across portfolios.

**Access:** Portfolio Dashboard → **Investment Analysis** tab.

Use the page-level filter to filter by manager, stakeholder, and above waterline. Exception: the **Portfolio Investment Count by Waterline** portlet is not filtered by the Above Waterline page-level filter (it compares above and below waterline investments).

**Portlets:**
- Portfolio Investment Count by Type Portlet
- Portfolio Investment Count by Work Status Portlet
- Portfolio Investment Count by Waterline Portlet
- Portfolio Investment Count by Approval Portlet

#### Portfolio Investment Count by Type Portlet


Donut graph showing the number of portfolio investments grouped by investment type. Each segment = percentage of investments by type. Mouse over to display the total count for an investment type.

**Filters:** Portfolio (multi-select), Portfolio Plan Type, Above Waterline, Portfolio Active.

Based on the **Portfolio Investment Provider**.

#### Portfolio Investment Count by Work Status Portlet


Donut graph showing the number of portfolio investments grouped by work status. Each segment = percentage of investments by work status. Mouse over to display the total count for a work status.

**Filters:** Portfolio (multi-select), Portfolio Plan Type, Above Waterline, Portfolio Active.

Based on the **Portfolio Investment Provider**.

#### Portfolio Investment Count by Waterline Portlet


Donut graph showing the number of portfolio investments above and below the waterline across portfolios. Each segment = percentage of investments above and below the waterline. Mouse over to display the total count for above and below the waterline.

**Filters:** Portfolio (multi-select), Portfolio Plan Type, Portfolio Active (no Above Waterline filter — this portlet is a comparison).

Based on the **Portfolio Investment Provider**.

#### Portfolio Investment Count by Approval Portlet


Donut graph showing the number of portfolio investments that are approved and unapproved across portfolios. Each segment = percentage approved and unapproved. Mouse over to display the total count for each status.

**Filters:** Portfolio (multi-select), Portfolio Plan Type, Above Waterline, Portfolio Active.

Based on the **Portfolio Investment Provider**.

### Capital and Operating Tab


Shows total, capital, and operating cost amounts (target, planned, and actual) for each portfolio.

**Access:** Portfolio Dashboard → **Capital and Operating** tab.

Target amounts reflect the portfolio properties or targets tab. Planned and actual amounts are from portfolio investments. Use the page-level filter to filter by manager, stakeholder, and above waterline.

**Portlets:** Portfolio Capital and Operating Costs Portlet, Portfolio Capital and Operating Cost Analysis Portlet.

#### Portfolio Capital and Operating Costs Portlet


Area graph showing planned total, capital, and operating cost of each portfolio. Shows the portion of planned cost that is capital vs. operating.

**Filters:** Portfolio (multi-select), OBS Unit, Portfolio Plan Type, Managers (multi-select), Stakeholders (multi-select), Above Waterline, Active.

Y-axis = planned total, capital, and operating cost amounts. Click a point in the area graph to open the portfolio waterlines page. Click a legend label to hide areas in the graph.

Based on the **Portfolio Provider**.

#### Portfolio Capital and Operating Cost Analysis Portlet


Displays total, capital, and operating cost amounts (target, planned, and actual) for each portfolio with variance amounts comparing target to planned.

**Filters:** Same as Portfolio Capital and Operating Costs Portlet.

**Fields:**

- **Portfolio** — Click to go to the portfolio properties page.
- **Targets Icon** — Opens the portfolio targets page.
- **Waterlines Icon** — Opens the portfolio waterlines page.
- **Start** — Start date of the portfolio planning horizon (portfolio start date or plan of record start date).
- **Finish** — Finish date of the portfolio planning horizon (portfolio finish date or plan of record finish date).
- **Target Cost** — Target total cost of the portfolio.
- **Planned Cost** — Planned cost of portfolio investments within the planning horizon.
- **Actual Cost** — Actual cost posted to investments within the planning horizon.
- **Target to Planned Cost Variance** — Difference (negative = planned exceeds target).
- **Target Capital Cost** — Target capital cost.
- **Planned Capital Cost** — Planned capital cost within the planning horizon.
- **Actual Capital Cost** — Actual capital cost within the planning horizon.
- **Target to Planned Capital Cost Variance** — Difference (negative = planned exceeds target).
- **Target Operating Cost** — Overall target operating cost.
- **Planned Operating Cost** — Planned operating cost within the planning horizon.
- **Actual Operating Cost** — Actual operating cost within the planning horizon.
- **Target to Planned Operating Cost Variance** — Difference (negative = planned exceeds target).

Based on the **Portfolio Provider**.

---

## PMO Portfolio Investment Dashboard


Use the PMO-Portfolio Investment Dashboard to view a series of tabs with portlets for planning and monitoring a portfolio's execution. Portfolio planning and analysis occur within the portfolio planning horizon.

This dashboard shows portfolio investment amounts that are **above the waterline**.

**Steps to select this dashboard view:**
1. Open **Home**, from **Portfolio Management**, click **Portfolios**
2. Click a portfolio link
3. Open the **Properties** menu and select **Settings**
4. Click the **Dashboard View** drop-down and select **PMO-Portfolio Investment Dashboard**
5. Save

**Tabs on this page:**
- Scorecard
- Analysis
- Capacity
- Financials

### Scorecard Tab


View alignment and schedule of investments in a bubble graph, with planned, actual, and remaining cost and role amounts.

**Steps to access:**
1. Open **Home**, from **Portfolio Management**, click **Portfolios**
2. Click a portfolio link
3. Click the **Scorecard** tab

Use the page-level filter to filter by above waterline. By default, only above-waterline amounts are shown.

**Portlets:** Balance Portlet, Investment Cost and Role Demand Portlet.

#### Balance Portlet


Bubble graph displaying how the planned cost and risk of investments balance between their business alignment and finish dates. Each bubble represents an investment; bubble size = planned cost.

**Graph description:**
- Click a bubble to open the investment properties page. Mouse over for name, start date, business alignment score, and planned cost.
- Y-axis = Business Alignment; X-axis = Investment Finish Dates.
- **Business Alignment Zones:** Green (68–100) = upper third; Yellow (34–67) = middle; Red (0–33) = lower third.
- **Risk (bubble color):** Green (0–33) = low; Yellow (34–67) = medium; Red (68–100) = high.

Based on the **Portfolio Investment Provider**.

#### Investment Cost and Role Demand Portlet


Displays planned, actual, and remaining cost and role demand amounts for above-waterline investments.

**Filters:** Investment Name, Investment ID, Manager, Goal, Investment Type, Above Waterline, Approved, Active.

**Fields:**

- **Investment** — Click to view portfolio investment properties.
- **Goal** — Values: Cost Avoidance, Cost Reduction, Grow the Business, Infrastructure Improvement, or Maintain the Business.
- **Stage** — Stage in the investment lifecycle as a progress bar. Gray = completed stages; colored = current stage based on business alignment.
- **Business Alignment** — Stoplight: Green (68–100) = good; Yellow (34–67) = average; Red (0–33) = poor; White = undefined.
- **Risk** — Stoplight: Green (0–33) = low; Yellow (34–67) = medium; Red (68–100) = high.
- **Planned Cost** — Planned cost within the portfolio planning horizon.
- **Actual Cost** — Actual cost posted within the portfolio planning horizon.
- **Remaining Cost** — Planned cost minus actual cost.
- **Role Demand** — Role allocation demand for portfolio roles and other roles within the planning horizon.
- **Role Actuals** — Role actuals posted within the portfolio planning horizon.
- **Role Remaining** — Role demand minus role actuals.

**Aggregate amounts:**
- **Investment Total** — Total planned cost, actual cost, remaining cost, role demand, role actuals, and role remaining within the portfolio horizon.
- **Distributed Target** — Distributed target total cost (planned cost column) and distributed target overall role amounts (role demand column).
- **Variance** — Difference between distributed target and investment totals (negative = investment totals exceed distributed target).

Based on the **Portfolio Investment Provider**.

### Analysis Tab


Shows planned cost, planned benefit, role demand, and planned NPV grouped by goal across portfolio investments.

**Steps to access:**
1. Open **Home**, from **Portfolio Management**, click **Portfolios**
2. Click a portfolio link
3. Click the **Analysis** tab

Use the page-level filter to filter by above waterline. Exceptions: **Planned Cost by Waterline** and **Role Demand by Waterline** portlets are not filtered by the Above Waterline page-level filter.

**Portlets:**
- Planned Cost by Goal Portlet
- Planned Benefit by Goal Portlet
- Role Demand by Goal Portlet
- Planned NPV by Goal Portlet
- Planned Cost by Waterline Portlet *(configurable)*
- Role Demand by Waterline Portlet *(configurable)*

#### Planned Cost by Goal Portlet


Pie graph showing planned cost of investments grouped by goal. Each slice = percentage of planned cost by goal. Mouse over to display total planned cost for a goal. **Filters:** Investment Type, Above Waterline, Approved, Active.

#### Planned Benefit by Goal Portlet


Pie graph showing planned benefit of investments grouped by goal. Each slice = percentage of planned benefit by goal. Mouse over to display total planned benefit for a goal. **Filters:** Same as above.

#### Role Demand by Goal Portlet


Pie graph showing role demand of investments grouped by goal. Each slice = percentage of role demand by goal. Mouse over to display total role demand for a goal. **Filters:** Same as above.

#### Planned NPV by Goal Portlet


Column graph showing planned NPV of investments grouped by goal. Each column = percentage of planned NPV by goal. Mouse over to display total planned NPV for a goal. **Filters:** Same as above.

#### Planned Cost by Waterline Portlet


Pie graph showing planned cost of investments above and below the waterline. **Filters:** Investment Type, Approved, Active. To add to the page: personalize the Analysis tab, then map the **Above Waterline** filter attribute to the **Above Waterline** mapping field in the Page Filters tab.

#### Role Demand by Waterline Portlet


Pie graph showing role demand of investments above and below the waterline. **Filters:** Investment Type, Approved, Active. To add to the page: same personalization steps as Planned Cost by Waterline.

All Analysis tab portlets are based on the **Portfolio Investment Provider**.

### Capacity Tab


View investment schedule and role capacity versus demand, comparing role demand of portfolio investments to role target capacity.

**Steps to access:**
1. Open **Home**, from **Portfolio Management**, click **Portfolios**
2. Click a portfolio link
3. Click the **Capacity** tab

Use the page-level filter to filter by above waterline.

**Portlets:**
- Investment Schedule Portlet
- Role Capacity and Demand Portlet
- Role Capacity and Demand Histogram Portlet *(configurable)*

#### Investment Schedule Portlet


Displays the schedule, planned cost, and role demand for portfolio investments.

**Filters:** Investment Name, Investment ID, Manager, Start, Investment Type, Above Waterline, Approved, Active.

**Fields:**

- **Investment** — Click to view portfolio investment properties.
- **Investment Demand Icon** — Opens the Role Demand tab of the portfolio investment properties page.
- **Approved** — Checkmark if the investment status is Approved.
- **Start** — Start date of the investment.
- **Finish** — Finish date of the investment.
- **Planned Cost** — Planned cost within the portfolio planning horizon.
- **Role Demand** — Role allocation demand within the portfolio horizon.
- **Gantt Schedule** — Investment schedule based on start and finish dates.

**Aggregate amounts:**
- **Investment Total** — Total planned cost and role demand within the portfolio horizon.
- **Distributed Target** — Distributed target total cost (planned cost column) and distributed target overall role amount (role demand column).
- **Variance** — Difference between distributed target and investment totals (negative = investment totals exceed distributed target).

Based on the **Portfolio Investment Provider**.

#### Role Capacity and Demand Portlet


Displays distributed target capacity and role demand by month and in total for portfolio investments. Lists portfolio roles from the Targets tab and unplanned roles (Other Roles) allocated to portfolio investments but not in targets.

**Filters:** Role (multi-select), Above Waterline, Exclude Other Roles.

**Fields:**

- **Role** — Portfolio roles and other roles allocated to portfolio investments.
- **Distributed Target Capacity** — Distributed target capacity within the portfolio horizon.
- **Role Demand** — Role demand within the portfolio horizon.
- **Distributed Target Remaining** — Distributed target capacity minus role demand.
- **Capacity (by Month)** — Distributed target capacity by month.
- **Demand (by Month)** — Demand by month.
- **Remaining (by Month)** — Difference between monthly capacity and demand (negative = demand exceeds capacity).

**Aggregate amounts:** Capacity (sum of distributed target capacity), Demand (sum of role demand), Remaining (capacity minus demand) — all in total and by month.

Based on the **Portfolio Role Capacity and Demand provider**.

#### Role Capacity and Demand Histogram Portlet


Histogram of distributed target capacity and role demand by month and in total. Yellow columns = demand; Red columns = amount exceeding distributed target capacity threshold.

**Filters:** Role (multi-select), Above Waterline, Exclude Other Roles.

To add to the page: personalize the Capacity tab, then map the **Above Waterline** filter attribute to the **Above Waterline** mapping field in the Page Filters tab.

**Fields and aggregates:** Same as Role Capacity and Demand Portlet, with the addition of a **Capacity and Demand (by Month)** histogram column.

Based on the **Portfolio Role Capacity and Demand provider**.

### Financials Tab


Perform financial planning by period, analyze capital and operational costs, review budget versus forecast, and view financial metrics for portfolio investments.

> [!NOTE]
> To view capital and operating amounts, enter capital and operating costs in your portfolio and investments. If using cost plans, verify that cost plans are grouped by the cost type attribute. See Financial Management for setup information.

**Steps to access:**
1. Open **Home**, from **Portfolio Management**, click **Portfolios**
2. Click a portfolio link
3. Click the **Financials** tab

Use the page-level filter to filter by above waterline.

**Portlets:**
- Investment Planning by Period Portlet
- Investment Cost by Period Portlet
- Investment Financial Summary Portlet
- Capital and Operating Cost Summary Portlet
- Capital and Operating Budget vs. Forecast Portlet

#### Investment Planning by Period Portlet


For editing planned capital cost, planned operating cost, and planned benefit amounts by period for portfolio investments. Use to change planned cost, planned benefit, and role demand amounts in portfolio plans.

**Filters:** Investment Name, Investment ID, Manager, Investment Type, Above Waterline, Approved, Active.

**Fields:**

- **Investment** — Click to view portfolio investment properties.
- **Investment Demand Icon** — Opens the Role Demand tab (editable when a plan is selected).
- **Role Demand** — Role allocation demand within the portfolio horizon.
- **Planned Cost** — Planned cost within the planning horizon.
- **Planned Capital Cost** — Planned capital cost within the planning horizon.
- **Planned Operating Cost** — Planned operating cost within the planning horizon.
- **Planned Benefit** — Planned benefit within the planning horizon.
- **Role Demand (by Period)** — Total role demand by period, including values outside the planning horizon.
- **Total Cost (by Period)** — Total planned cost by period, including outside the planning horizon.
- **Capital Cost (by Period)** — Total planned capital cost by period, including outside the planning horizon.
- **Operating Cost (by Period)** — Total planned operating cost by period, including outside the planning horizon.
- **Benefit (by Period)** — Total planned benefit by period, including outside the planning horizon.

**Aggregate amounts:** Role Demand, Total Cost, Capital Cost, Operating Cost, Benefit — all in total and by period.

Based on the **Portfolio Investment Financial Performance provider**.

#### Investment Cost by Period Portlet


Displays planned, actual, remaining, and forecast costs for portfolio investments in total and by period. The **Forecast As of Date** filter calculates Actual and Forecast Remaining amounts.

**Filters:** Investment Name, Investment ID, Manager, Forecast As Of Date, Investment Type, Above Waterline, Approved, Active.

**Fields:**

- **Investment** — Click to view portfolio investment properties.
- **Planned Cost** — Planned cost within the planning horizon.
- **Actual Cost** — Actual cost posted within the planning horizon (if Forecast As Of Date is set, only includes transactions on or before that date).
- **Remaining Cost** — Planned cost minus actual cost.
- **Forecast Cost** — Actual cost + forecast cost remaining (remaining = planned cost amounts after the Forecast As Of Date).
- **Planned (by Period)** — Planned cost by period, including outside the planning horizon.
- **Actual (by Period)** — Actual cost by period (filtered by Forecast As Of Date if set).
- **Remaining (by Period)** — Planned minus actual cost by period.
- **Forecast (by Period)** — Forecast cost by period (actual through Forecast As Of Date + remaining planned cost after that date).

**Aggregate amounts:** Planned, Actual, Remaining (negative = actual exceeds planned), Forecast — in total and by period.

Based on the **Portfolio Investment Financial Performance provider**.

#### Investment Financial Summary Portlet


Displays financial amounts and metrics, including NPV and ROI, for portfolio investments.

**Filters:** Investment Name, Investment ID, Manager, Investment Type, Above Waterline, Approved, Active.

**Fields:**

- **Investment** — Click to view portfolio investment properties.
- **Planned Benefit** — Planned benefit within the planning horizon.
- **Planned Cost** — Planned cost within the planning horizon.
- **Actual Cost** — Actual cost posted within the planning horizon.
- **Remaining Cost** — Planned cost minus actual cost.
- **Planned NPV** — Net present value. Source: Portfolio Investment Properties.
- **Planned ROI** — Ratio of money gained or lost relative to amount invested. Source: Portfolio Investment Properties.
- **Planned IRR** — Internal Rate of Return. Source: Portfolio Investment Properties.
- **Planned MIRR** — Modified Internal Rate of Return. Source: Portfolio Investment Properties.
- **Planned Payback (Months)** — Number of months for expected cash flows to equal initial outlay. Source: Portfolio Investment Properties.
- **Planned Breakeven** — Date when expected cash flow equals cash outlay. Source: Portfolio Investment Properties.

**Aggregate amounts:**
- **Investment Total** — Total planned benefit, planned cost, actual cost, remaining cost, and planned NPV within the portfolio horizon.
- **Distributed Target** — Distributed target benefit (planned benefit column) and distributed target total cost (planned cost column).
- **Variance** — Difference between distributed target and investment totals (negative = investment totals exceed distributed target).

Based on the **Portfolio Investment Financial Performance provider**.

#### Capital and Operating Cost Summary Portlet


Displays planned and actual cost amounts in total and separated into capital and operating. Amounts are shown as horizon amounts (within portfolio start and finish dates) and as total amounts (independent of planning horizon).

**Filters:** Investment Name, Investment ID, Manager, Investment Type, Above Waterline, Approved, Active.

**Fields:**

- **Investment** — Click to view portfolio investment properties.
- **Planned** — Planned cost within the portfolio planning horizon.
- **Planned (Total)** — Planned cost including values outside the planning horizon.
- **Actual** — Actual cost posted within the portfolio planning horizon.
- **Actual (Total)** — Actual cost including values outside the planning horizon.
- **Capital Planned** — Planned capital cost within the planning horizon.
- **Capital Planned (Total)** — Planned capital cost including outside the planning horizon.
- **Capital Actual** — Actual capital cost within the planning horizon.
- **Capital Actual (Total)** — Actual capital cost including outside the planning horizon.
- **Operating Planned** — Planned operating cost within the planning horizon.
- **Operating Planned (Total)** — Planned operating cost including outside the planning horizon.
- **Operating Actual** — Actual operating cost within the planning horizon.
- **Operating Actual (Total)** — Actual operating cost including outside the planning horizon.

**Aggregate amounts at the bottom:**
- **Investment Total** — Aggregated totals for all investments in the portfolio across: planned cost, actual cost, capital planned, capital actual, operating planned, and operating actual — each in horizon and total (all-time) amounts.
- **Distributed Target** — Distributed target total cost, distributed target total cost (total), distributed target capital cost, distributed target capital cost (total), distributed target operating cost, and distributed target operating cost (total).
- **Variance** — Difference between distributed target and investment total values (negative = investment totals exceed distributed target amounts).

Based on the **Portfolio Investment Financial Performance provider**.

#### Capital and Operating Budget vs. Forecast Portlet


Displays budget, actual, forecast, and variance cost amounts for portfolio investments — in total and separated into capital and operating. Use to compare budget to forecast capital and operating costs.

**Filters:** Investment Name, Investment ID, Manager, Forecast As Of Date, Investment Type, Above Waterline, Approved, Active.

**Access:** Open the portfolio and click the **Financials** tab. If the page is maximized, select **Capital and Operating Budget vs. Forecast** from the portlet drop-down.

**Fields:**

- **Investment** — Click to view portfolio investment properties.
- **Budgeted Cost** — Budgeted cost from the current approved budget or financial summary amount (total of Budgeted Capital and Operating cost within the planning horizon).
- **Budgeted Capital Cost** — Budgeted capital cost from the current approved budget or financial summary within the planning horizon.
- **Budgeted Operating Cost** — Budgeted operating cost from the current approved budget or financial summary within the planning horizon.
- **Actual Cost** — Actual cost posted within the planning horizon. If Forecast As Of Date is set, only includes transactions on or before that date.
- **Actual Capital Cost** — Actual capital cost posted within the planning horizon (filtered by Forecast As Of Date if set).
- **Actual Operating Cost** — Actual operating cost posted within the planning horizon (filtered by Forecast As Of Date if set).
- **Forecast Cost** — Actual cost + forecast cost remaining. If Forecast As Of Date is set: actual cost includes amounts through that date; forecast cost remaining includes planned cost amounts after that date.
- **Forecast Capital Cost** — Actual capital cost + forecast capital cost remaining (same Forecast As Of Date logic).
- **Forecast Operating Cost** — Actual operating cost + forecast operating cost remaining (same Forecast As Of Date logic).

## Related
- [[_MOC Integrations]]

%%Source: p4674-4753%%
