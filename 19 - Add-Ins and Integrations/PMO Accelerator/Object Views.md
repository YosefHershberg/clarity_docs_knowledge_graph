﻿---
title: PMO Accelerator Object Views
tags:
  - admin
  - reference
aliases:
  - Object Views
---
# PMO Accelerator Object Views


An object view determines how information displays for that object on a page. The following object views are available in Classic PPM:

- **Properties View** — Displays and allows users to enter information about an object
- **List Column View** — Displays information about object instances in rows and columns
- **List Filter View** — A section at the top of a list column view that allows users to search for and filter information

When you install the PMO Accelerator, some object views are reinstalled to display information differently than the default Classic PPM installation.

> [!NOTE]
> If you previously used Classic PPM Studio to configure the Classic PPM views, these configurations do not change.
> They are not overwritten by new or changed content during the PMO installation.
> Use the information in this article to compare the PMO views with the default Classic PPM views, and then decide whether to change your existing configurations or to apply the
> new PMO content.

**PMO Accelerator modifies views for the following objects:**

- Assignment
- Baseline
- Change Request
- Cost and Benefit Plan
- GL Allocation and Resource Credit
- Investments
- Issue
- Project
- Resource
- Risk
- Task
- Team

## Assignment


**Modified views:** Assignment Properties (Create and Edit), Task Assignment List.

> [!NOTE]
> To apply the Task Assignment List view, also apply the Assignment Properties view. You can review these dependencies between views on the add-in details page in Studio.

### Assignment Properties


To view assignment properties, open a project task and click the **Properties icon** in the Assignments section.

- **General** section includes: Resource, Role, Start, Finish, ETC, Actuals, EAC, Status, Loading Pattern, Baseline Start, Baseline Finish, Pending ETC, Pending Actuals, and Actuals Thru.
- **ETC Detail** section is not modified in the PMO Accelerator.

### Assignment List Views


**To view an assignment list:**
1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects)
2. Click **Tasks**
3. Select a task that contains assignments

The List Column view appears by default. From this view, you can:
- Link to the properties page for the assignment by clicking the Properties icon
- Link to the properties page for the resources or roles by clicking the name of the resources or roles
- View the Resource, Role, Loading Pattern, Start, Finish, Actuals, Actual Cost (ACWP), ETC, and EAC
- View a Time-Scaled Value displaying the ETC for each assignment for a seven-week period, starting with the current week

## Baseline


**Modified views:** Baseline Revision Properties (Create and Edit), Baseline Revision List, Baseline Revision Filter.

> [!NOTE]
> To apply the Baseline Revision List view, also apply the Baseline Revision Properties and Filter views.

### Baseline Properties


To view baseline properties, open a baseline revision of an investment.

- **General** section includes: Revision Name, Revision ID, Description, Baseline Start, Baseline Finish, and Current Revision checkbox.
- **Baseline Effort and Cost** section includes: BAC and BAC Cost.
- **Performance Against Current Baseline** section includes: Planned Value (BCWS), Earned Value (BCWP), Actual Cost (ACWP), Cost Variance (CV), Schedule Variance (SV), Cost Performance Index (CPI), and Schedule Performance Index (SPI).

### Baseline List Views


**To view a list of baselines:**
1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects)
2. Select a project
3. From the properties content menu, click **Baseline**

From this view, you can view the Revision Name, Revision ID, Current Revision checkbox, Baseline Start, Baseline Finish, BAC, and BAC Cost. The Current Revision is highlighted in the list.

### Baseline Filter Views


Filter by Revision Name, Revision ID, Current Revision, Baseline Start, and Baseline Finish. By default, Current Revision is set to All.

## Change Request


**Modified views:** Change Request Properties (Create and Edit), Change Request List, Change Request Filter.

> [!NOTE]
> To apply the Change Request List view, also apply the Change Request Properties and Filter views.

### Change Request Properties


To view change request properties, open a change request of a project.

- **General** section includes: Change Request Name, Change Request ID, Description, Category, Priority, Include in Status Reporting, Originating Issue or Risk (displays if change request is created from an issue or risk), Status, Owner, Reasons, and Next Review Date.
- **Details** section includes: Document, Impact on Baseline, Impact on Other Projects, Change in Cost, Change in Schedule, Change in Resources, Expected Close Date, Benefits, Close Date, Last Updated Date, Last Updated By, Created Date, and Created By.
- **Assessment** section includes: Assessor, Date Assessed, Approved By, and Date Approved.

### Change Request List Views


**To view a list of change requests:**
1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects)
2. Open a project. The Properties page appears.
3. Click **Risks/Issues/Changes**
4. Select **Change Request** from the drop-down list

From this view, you can view the Change Request, Category, Priority, Status, Owner, Expected Close Date, and Last Updated Date.

### Change Request Filter Views


Filter by Change Request Name, Change Request ID, Category, Priority, Status, and Owner. By default, Category, Priority, and Status are set to All.

## Cost and Benefit Plan


**Modified views:** Benefit Plan Properties, Benefit Plan List, Benefit Plan Filter, Benefit Plan Detail Properties, Benefit Plan Detail List, Idea Benefit Plan Detail List,
Benefit Plan Detail Filter, Idea Benefit Plan Detail Filter, Cost Plan Properties, Cost Plan List, Cost Plan Filter, Budget List, Budget Filter, Cost Plan Detail Properties, Cost
Plan Detail List, Cost Plan Billing Detail List, Cost Plan Detail Filter, Budget Plan Detail Filter.

> [!NOTE]
> To apply the Cost Plan and Benefit Plan List views, also apply the Cost Plan and Benefit Plan Properties and Filter views.

### Cost and Benefit Plan Properties


To view cost and benefit plan properties, open a cost or benefit plan of an investment and click the **Properties icon**.

- **Benefit Plan**: Plan Name, Plan ID, Description, Period Type, Start Period, Finish Period
- **Benefit Plan Details**: Description, Benefit Class, Benefit Subclass (both installed with the PMO Accelerator)
- **Cost and Budget Plan**: Plan Name, Plan ID, Description, Period Type, Start Period, Finish Period, Benefit Plan, Currency, Plan of Record checkbox, Status, and Grouping Attributes
- **Submit Cost Plan to Budget**: Plan Name, Plan ID, Description, Period Type, Start Period, Finish Period, Benefit Plan, Submit Option, Currency, Plan of Record checkbox, Status, and Grouping Attributes
- **Cost and Budget Plan Details**: Includes the grouping attributes selected for the cost plan

### Cost and Benefit Plan List Views


**To view a list of cost or benefit plans:**
1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects)
2. Open the project and click **Financial Plans**
3. Select **Cost Plans**, **Benefit Plans**, or **Budget Plans** from the drop-down list

From this view, you can:
- **Benefit Plan** — View Plan Name, Period Type, Start Period, Finish Period, and Planned Benefit
- **Benefit Plan Details / Idea Benefit Plan Details** — View Benefit Class, Benefit Subclass, Description, Benefit Total, Realized Benefit, Benefit Variance, and a Time-Scaled Value displaying Benefit, Realized Benefit, and Benefit Variance
- **Cost Plan** — View Plan Name, Set as Plan of Record, Plan of Record checkbox, Period Type, Start Period, Finish Period, Planned Cost, and Benefit Plan (Plan of Record highlighted in list)
- **Budget Plan** — View Budget Name, Current checkbox, Status, Revision, Period Type, Start Period, Finish Period, Budget Cost, and Benefit Plan (Plan of Record highlighted)
- **Cost and Budget Plan Details (Investment Currency View)** — View grouping attributes (Cost Type, Charge Code, Transaction Class, Resource Role, Resource, Department, Location,
  Resource Class, Input Type Code, User Value 1, User Value 2), Cost Total, Actual Cost, Cost Variance, and Time-Scaled Values
- **Cost and Budget Plan Details (Billing Currency View)** — View grouping attributes, Units Total, Billing Cost Total, Billing Revenue Total, and Time-Scaled Values

### Cost and Benefit Plan Filter Views


- **Financial Plans (Benefit Plans)** — Filter by Plan Name, Plan ID, Start Period, and Finish Period
- **Financial Plans (Cost Plans)** — Filter by Plan Name, Plan ID, Plan of Record, Start Period, and Finish Period. Default: Plan of Record = All.
- **Financial Plans (Budget Plans)** — Filter by Budget Name, Budget ID, Current, Status, Start Period, and Finish Period. Default: Current = All.
- **Benefit Plan Details** — Filter by Benefit Class, Benefit Subclass, and Description. Defaults: Benefit Class and Benefit Subclass = All.
- **Cost Plan Details** — Filter by Cost Type, Charge Code, Transaction Class, Resource Role, Resource, Department, Location, Resource Class, Input Type Code, User Value 1, and User Value 2. Defaults: Cost Type, Charge Code, Transaction Class, Resource Class and Input Type Code = All.
- **Budget Plan Details** — Same filter options as Cost Plan Details with same defaults.

## GL Allocation and Resource Credit


**Modified views:** GL Allocation Debits Properties, Standard Rule Debits Properties, Debit Rule List, Debit Rule Filter, Standard Rule List, Standard Rule Filter, Overhead Rule
Detail Properties, Overhead Rule Detail List, Overhead Rule Detail Filter, Debit Rule Detail List, Standard Rule Detail List, Resource Credit Properties, Resource Credit List,
Resource Credit Filter, Resource Credit Detail List.

### GL Allocation and Resource Credit Properties


- **GL Allocation Debit Rules**: Chargeback Description, Cost Type, Charge Code, Transaction Class, Input Type Code, User Value 1, User Value 2, Status, Allocation Code, and Charge Remainder to Overhead checkbox
- **Standard Rules**: Chargeback Description, Entity, Cost Type, Charge Code, Transaction Class, Input Type Code, User Value 1, User Value 2, Status, Allocation Code, and Charge Remainder to Overhead checkbox
- **Resource Credit Rules**: Credit Rule Description, Entity, Department, Location, Transaction Class, Resource Class, Status, and Resource Credit Code
- **Debit Rule Details**: GL Account and Department
- **Standard Rule Details**: GL Account and Department
- **Resource Credit Rule Details**: GL Account and Department
- **Overhead Rule Details**: GL Account, Entity, and Department

### GL Allocation and Resource Credit List Views


**To view a list of debit rules:**
1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects)
2. Open the project and click **Chargebacks**
3. Select **Debit Rules** from the drop-down list

**Debit Rules** — Link to properties page by clicking Properties icon; link to detail list by clicking the chargeback description; view Chargeback Description, Cost Type, Charge Code, Transaction Class, Input Type Code, User Value 1, User Value 2, and Status.

**Debit Rule Details** — Link to detail properties by clicking the GL Account; view GL Account and Department; view Time-Scaled Value displaying allocation percentage by period.

**To view a list of standard, overhead, or credit rules:** Open **Administration**, and from **Chargebacks**, click the appropriate type.

- **Standard Rules** — View Chargeback Description, Entity, Cost Type, Charge Code, Transaction Class, Input Type Code, User Value 1, User Value 2, and Status
- **Standard Rule Details** — View GL Account and Department with allocation percentage Time-Scaled Value
- **Credit Rules** — View Credit Rule Description, Entity, Department, Location, Transaction Class, Resource Class, and Status
- **Credit Rule Details** — View GL Account and Department with allocation percentage Time-Scaled Value
- **Overhead Rule Details** — View GL Account, Entity, and Department with allocation percentage Time-Scaled Value

### GL Allocation and Resource Credit Filter Views


- **Debit Rules** — Filter by Chargeback Description, Cost Type, Charge Code, Transaction Class, Input Type Code, Status, User Value 1, and User Value 2. Defaults: Charge Code, Input Type Code, Status, User Value 1, and User Value 2 = All.
- **Standard Rules** — Filter by Chargeback Description, Entity, Cost Type, Charge Code, Transaction Class, Input Type Code, Status, User Value 1, and User Value 2. Same defaults.
- **Credit Rules** — Filter by Credit Rule Description, Entity, Department, Location, Status, Transaction Class, and Resource Class. Default: Status = All.
- **Overhead Rules** — Filter by GL Account and Department.

## Investments


**Modified views for:** Application, Asset, Idea, Other Work, Product, Service (properties, list, filter, and service subscriptions views).

> [!NOTE]
> To apply the Investment List views, also apply the corresponding Investment Properties and Filter views.

### Investment Properties


To view main properties, open an investment. The Summary page appears by default.

- **Application Summary**: Application Name, Application ID, Description, Manager, Category, Platform, Technology, Version, Status, Progress, Work Status, Stage, Start Date, and Finish Date.
- **Asset Summary**: Asset Name, Asset ID, Description, Manager, Category, Status, Progress, Work Status, Stage, Start Date, and Finish Date.
- **Idea Summary**: Subject, Idea ID, Idea Type, Idea Category, Idea Priority, Fast Track checkbox, Objective, Status, Progress, Work Status, Requestor, Sponsor, Manager, Start Date, and Finish Date.
- **Other Work Summary**: Other Work Name, Other Work ID, Description, Manager, Category, Status, Progress, Stage, Start Date, and Finish Date.
- **Product Summary**: Product Name, Product ID, Description, Manager, Category, Version, Status, Progress, Work Status, Stage, Start Date, and Finish Date.
- **Service Summary**: Service Name, Service ID, Description, Manager, Status, Progress, Work Status, Stage, Start Date, and Finish Date.
- **Description** (Ideas only): Description, Impact on Existing Initiatives, Dependencies, Risks, Benefit Description, and General Notes.
- **Schedule & Performance** (not available for Ideas): Schedule section (Start Date, Finish Date, Status Indicator, Priority) and Performance section (Actuals, ETC, EAC, Number of Incidents, Incident Actual Effort, Incident Actual Cost, Incident Currency).
- **Alignment & Risk**: Business Alignment, Risk, Goal, Required checkbox, and Alignment Factors (Corporate Priority, Business Unit Priority, Regulatory Compliance, Architectural Fit, Commercial Value, Technology Compliance).
- **Financial Summary**: Financial Investment Rate Options and Financial Plan Summary (complete cost, capital, operating, and benefit plan financial metrics).
- **Settings**: General, Time and Staff, Financial, and Transaction Matrix sections.

### Investment List Views


**To view a list of investments:** Open **Home**, and from **Portfolio Management**, click an investment type.

- **Application** — View Application, Manager, Stage, Category, Platform, Technology, Version, Start, Finish, and Planned Cost
- **Asset** — View Asset, Manager, Stage, Category, Start, Finish, and Planned Cost
- **Idea** — View Subject, Idea Type, Idea Category, Idea Priority, Start Date, Planned Cost, Planned Benefit, Planned NPV, Planned ROI, and Status
- **Other Work** — View Other Work, Manager, Category, Start, Finish, and Planned Cost
- **Product** — View Product, Manager, Stage, Category, Version, Start, Finish, and Planned Cost
- **Service** — View Service, Manager, Stage, Start, Finish, and Planned Cost (plus links to hierarchy and subscriptions)

> [!NOTE]
> Approved investments are highlighted in the list.

**To view a list of service subscriptions:**
1. Open **Home**, and from **Organization**, click **Departments**
2. Select a department and click **Subscriptions**

View Service Subscription, ID, Description, Start Date, and Finish Date. To add services, click **Add** to see a filterable list of available services.

### Investment Filter Views


- **Applications / Assets / Other Work / Products** — Filter by name, ID, OBS Unit, OBS Unit - Filter Mode, Category, Manager, Stage, Approved Status, and Active. Defaults: Category and Approved Status = All, Active = Yes.
- **Ideas** — Filter by Idea Subject, Idea ID, OBS Unit, OBS Unit - Filter Mode, Idea Type, Idea Category, Requestor, Planned ROI, Idea Priority, Status, and Active. Defaults: Idea Type, Idea Category, Idea Priority, and Status = All, Active = Yes.
- **Services** — Filter by Service Name, Service ID, OBS Unit, OBS Unit - Filter Mode, Manager, Stage, Approved Status, and Active. Default: Approved Status = All, Active = Yes.
- **Service Subscriptions** — Filter by Service Name, Service ID, OBS Unit, OBS Unit - Filter Mode, Manager, Start Date, and Finish Date.

## Issue


**Modified views:** Issue Properties (Create and Edit), Issue List, Issue Filter, Associated Issues List.

> [!NOTE]
> To apply the Issue List view, also apply the Issue Properties and Filter views.

### Issue Properties


To view issue properties, open an issue of a project.

- **General** section includes:
  Issue Name, Issue ID, Description, Category, Priority, Originating Risk or Change Request (displays if created from a risk or change request), Resolution, Include in Status
  Reporting, Status, Owner, Document, Impact Date, Target Resolution Date, Resolution Date (if resolved), Resolved By (if resolved), Last Updated Date, Last Updated By, Created
  Date, and Created By.

### Issue List Views


**To view a list of issues:**
1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects)
2. Open a project. The Properties page appears.
3. Click the **Risks/Issues/Changes** tab
4. Select **Issues** from the drop-down list

View the Issue, Category, Priority, Status, Owner, Target Resolution Date, and Last Updated Date.

**To view a list of issues associated to a task:**
1. Open a project and click **Tasks**
2. Open a task and click **Associated Risks/Issues**
3. Select **Issues** from the drop-down list

View the Issue, Issue ID, Category, Priority, Status, Owner, Target Resolution Date, and Last Updated Date.

### Issue Filter Views


Filter by Issue Name, Issue ID, Category, Priority, Status, and Owner. By default, Category, Priority, and Status are set to All.

## Project


**Modified views:** Project Properties (Create and Edit), Project List, Project Filter, Program Properties (Create and Edit), Program List, Program Filter, My Projects, Subproject
Selection List, Subproject Selection Filter, Project Templates Filter, Project Release Filter, Project Requirement Filter.

> [!NOTE]
> To apply the Project List view, also apply the corresponding Project Properties and Filter views.

### Project Properties


To view main properties, open a project or program. The Summary page appears by default.

- **Project Summary**: Project Name, Project ID, Project Type, Project Category, Objective, Status, Progress, Work Status, Status Reporting, Stage, Start Date, Finish Date. Stakeholders: Project Manager, Sponsor, Project Management Office, Finance and Governance.
- **Program Summary**: Program Name, Program ID, Objective, Status, Progress, Work Status, Status Reporting, Stage, Start Date, Finish Date. Stakeholders: Program Manager, Sponsor, Project Management Office, Finance and Governance.
- **Schedule & Performance**: Schedule section (Start Date, Finish Date, As Of Date, % Complete, Baseline Start, Baseline Finish for projects;
  Status Indicator, Priority) and Performance Effort section (BAC, Actuals, ETC, EAC, Projected Effort Variance, Projected Effort Variance %, % Expended — last two installed by PMO
  Accelerator) and Performance Cost section (BCWS, BCWP, ACWP, BAC Cost, ETC Cost, EAC Cost, Projected Cost Variance, Projected Cost Variance %, CV, SV, Cost Variance %, Schedule
  Variance %, CPI, SPI — last four installed by PMO Accelerator).
- **Business Alignment**: Business Alignment, Goal, Required checkbox; Alignment Factors: Corporate Priority, Business Unit Priority, Regulatory Compliance, Architectural Fit, Commercial Value, Technology Compliance; Portfolio Categorization: Portfolio Category 1, 2, 3, and 4.
- **Risk Rating**: Risk and Risk Factors (Objectives, Sponsorship, Funding, Resource Availability, Interdependencies, Technical, Human Interface, Organizational Culture, Supportability, Implementation, Flexibility).
- **Financial Summary**: Financial Investment Rate Options and Financial Plan Summary (complete cost, capital, operating, and benefit plan financial metrics).
- **Status Reports**: List of status reports for the project or program. View Overall Status, Status Report Name, Schedule Status, Scope Status, and Cost and Effort Status.
- **Settings**:
  General (Dashboard View, Methodology, Scheduler, % Complete Calculation, Program checkbox, Template checkbox, Active checkbox), Time and Staff (Assignment Pool, Track Mode, Open
  for Time Entry, Prevent Unassigned Timesheet Tasks, Default Resource OBS Unit, Requisition Approval Required), Earned Value (EV Calculation Method, BCWP Override, Earned Value
  Reporting Period, Last Updated), Financial (Company Name, Affiliated Project, Billing Currency, Department, Location, Charge Code, Financial Status, Cost Type, Type, WIP Class,
  Investment Class, Set Planned Cost Dates), Transaction Matrices (Labor, Material, Equipment, Expense).

> [!NOTE]
> You can secure the Settings page and control which users are allowed to change project or program settings.

### Project List Views


**To view a list of projects or programs:** Open **Home**, and from **Portfolio Management**, click **Projects** or **Programs**.

- **Project** — Link to Dashboard, properties page, Status Reports page, Gantt view, and Document Manager. View the Project, Manager, Stage, Start, and Finish, plus a Gantt chart showing schedule status for a six-month period.
- **Program** — Link to Dashboard, properties page, Subprojects page, Status Reports page, Gantt view, and Document Manager. View the Program, Manager, Stage, Start, and Finish, plus a Gantt chart.

> [!NOTE]
> Approved projects or programs are highlighted in the list.

**My Projects** (from Home, Personal, General): Link to Dashboard, properties page, Status Reports page, Team page, Gantt view, and Document Manager. View the Project and Stage.

**To view a list of investments for adding as subprojects:**
1. Open **Home**, and from **Portfolio Management**, click **Projects** or **Programs**
2. Open a project or program and click **Subprojects**
3. Click **Add**

View the Investment, ID, Type, Manager, Status, Start, and Finish.

### Project Filter Views


- **Projects** — Filter by Project Name, Project ID, OBS Unit, OBS Unit - Filter Mode, Project Type, Project Category, Manager, Stage, Scheduler, Approved Status, Template, and Active. Defaults: Project Type, Project Category, Scheduler, and Approved Status = All; Template = No; Active = Yes.
- **Programs** — Filter by Program Name, Program ID, OBS Unit, OBS Unit - Filter Mode, Manager, Stage, Approved Status, and Active. Defaults: Approved Status = All, Active = Yes.
- **Subprojects (Add)** — Filter by Investment Name, Investment ID, OBS Unit, OBS Unit - Filter Mode, Investment Type, Manager, Approved Status, Template, and Active. Defaults: Investment Type and Approved Status = All; Template = No; Active = Yes.
- **Template Projects** — Filter by Project Name, Project ID, OBS Unit, OBS Unit - Filter Mode, Manager, Template, and Active. Defaults: Template and Active = Yes.
- **Release-linked projects** — Filter by Project Name, Project ID, OBS Unit, OBS Unit - Filter Mode, Manager, Approved Status, Template, and Active. Defaults: Approved Status = All; Template = No; Active = Yes.
- **Requirement-linked projects** — Same filters as Release-linked projects.

## Resource


**Modified views:** Resource Labor/Equipment/Material/Expense Properties (Create and Edit), Role Labor/Equipment/Material/Expense Properties (Create and Edit), Resource List,
Resource Filter, Select Resources List, Resource Selection List, Resource Finder List, Department Resources List, and corresponding Filter views.

> [!NOTE]
> To apply the Resource List view, also apply the corresponding Resource Properties and Filter views.

### Resource Properties


To view main properties, open a resource or role.

- **Role Labor**: Name, Role ID, Parent Role, Category, Availability, Active checkbox, and Booking Manager
- **Role Equipment and Material**: Name, Role ID, Parent Role, Category, Availability, and Active checkbox
- **Role Expense**: Name, Role ID, Parent Role, Category, and Active checkbox
- **Resource Labor**: Last Name, First Name, Resource ID, Email Address; Resource Management: Primary Role, Category, Date of Hire, Date of Termination, Availability, Resource Manager, Booking Manager, Employment Type, and External checkbox
- **Resource Equipment and Material**: Resource Name, Resource ID; Resource Management: Primary Role, Category, Date of Hire, Date of Termination, Availability, Resource Manager, Booking Manager, and External checkbox
- **Resource Expense**: Resource Name, Resource ID; Resource Management: Primary Role, Category, Date of Hire, Date of Termination, Booking Manager, and External checkbox
- **Settings** (Resources only): General (Include in Datamart checkbox, Active checkbox); Time Tracking (Track Mode, Input Type Code, Open for Time Entry checkbox)

> [!NOTE]
> You can secure the Settings page and control which users are allowed to change resource settings.

### Resource List Views


**To view a list of resources or roles:** Open **Home**, and from **Resource Management**, click **Resources**.

View the Resource/Role, Resource/Role ID, Primary Role, Resource Manager, Employment Type, and Resource Type.

**To add resources to the investment team:**
1. Open a project and click **Team**
2. Click **Add**

View Resource/Role, Resource/Role ID, Primary Role, Resource Manager, Employment Type, and Resource Type.

**To assign resources to tasks:**
1. Open a project, click **Tasks**
2. Select a task and click **Assign**

View Resource/Role, Resource/Role ID, Primary Role, Employment Type, Team Member, Project Role, Start, and Finish.

**Resource Finder:** Open **Home**, and from **Resource Management**, click **Resource Finder**. View Resource, Resource ID, Primary Role, Employment Type, Availability Match, Skill Match, and Total Match.

**Department Resources:**
1. Open **Home**, and from **Organization**, click **Departments**
2. Open a department and click **Resources**

View Resource, Resource ID, Primary Role, Resource Manager, Employment Type, Resource Type, Date of Hire, and Email Address.

### Resource Filter Views


- **Main Resource list** — Filter by Resource/Role Name, Resource/Role ID, OBS Unit, OBS Unit - Filter Mode, Primary Role, Filter Mode, Is Role, Resource Manager, Employment Type, Resource Type, Category, and Active. Defaults: Is Role, Employment Type, Resource Type = All; Active = Yes.
- **Add to Team** — Filter by Resource/Role Name, Resource/Role ID, OBS Unit, OBS Unit - Filter Mode, Primary Role, Filter Mode, Resource Manager, Employment Type, Resource Type, Category, and Is Role. Defaults: Employment Type, Resource Type, Is Role = All.
- **Assign to Tasks** — Same as Add to Team plus Is Team Member. Defaults include Is Team Member = All.
- **Resource Finder** — Filter by Resource Name, Resource ID, OBS Unit, OBS Unit - Filter Mode, Role, Filter Mode, Employment Type, Availability, Availability Threshold (%), Include Soft-booked Resources checkbox, Skills, and Skills Threshold (%). Default: Employment Type = All.
- **Department Resources** — Filter by Resource Name, Resource ID, Primary Role, Filter Mode, Show Resources in Sub-departments checkbox, Resource Manager, Employment Type, Resource Type, and Active. Defaults: Employment Type, Resource Type = All; Active = Yes.

## Risk


**Modified views:** Risk Properties (Create and Edit), Risk List, Risk Filter, Associated Risks List.

> [!NOTE]
> To apply the Risk List view, also apply the Risk Properties and Filter views.

### Risk Properties


To view risk properties, open a risk of a project.

- **General** section includes: Risk Name, Risk ID, Description, Category, Priority, Probability, Impact, Is Above Threshold checkbox, Response Type, Include in Status Reporting, Originating Issue or Change Request (if applicable), Status, Owner, Risk Symptoms, Impact Description, and Impact Date.
- **Details** section includes: Document, Assumptions, Associated Risks, Associated Issues, Target Resolution Date, Resolution, Resolution Date (if resolved), Resolved By (if resolved), Last Updated Date, Last Updated By, Created Date, and Created By.
- **Response Strategy** page includes: Response Strategy, Assigned To, and Resolve By.

### Risk List Views


**To view a list of risks:**
1. Open a project and click **Risks/Issues/Changes**

View the Risk, Category, Priority, Probability, Impact, Calculated Risk, Is Above Threshold, Status, Owner, Target Resolution Date, and Last Updated Date.

**To view a list of risks associated to a task:**
1. Open a project, click **Tasks**
2. Open a task and click **Associated Risks/Issues**

View the Risk, Risk ID, Category, Priority, Probability, Impact, Calculated Risk, Above Threshold, Status, Owner, Target Resolution Date, and Last Updated Date.

### Risk Filter Views


Filter by Risk Name, Risk ID, Category, Priority, Status, Owner, Probability, Impact, and Above Threshold. By default, Category, Priority, Status, Probability, Impact, and Above Threshold are set to All.

## Task


**Modified views:** Task Properties (Create and Edit), Task List, Task Filter, Association Task List, Gantt List, Project Requirement Task List, Select Task List, Association Task Filter, Gantt Filter.

> [!NOTE]
> To apply the Task List view, also apply the Task Properties and Filter views.

### Task Properties


To view task properties, open a task of a project.

- **General** section includes: Name, ID, Start, Finish, Key Task checkbox, Milestone checkbox, Fixed Duration checkbox, Status, % Complete, Baseline Start, Baseline Finish, Priority, and Excluded from Auto scheduling checkbox.
- **Assignments** section — see Assignment List Views.
- **Constraints** page includes: Must Start On, Start No Earlier Than, Start No Later Than, Must Finish On, Finish No Earlier Than, and Finish No Later Than.
- **Performance Effort** section includes: BAC, Actuals, ETC, EAC, and % Expended.
- **Performance Cost** section includes: BCWS, BCWP, ACWP, BAC Cost, ETC Cost, EAC Cost, CV, SV, Cost Variance %, Schedule Variance %, CPI, SPI. **Cost Variance %** and **Schedule Variance %** are installed by the PMO Accelerator:
  - **Cost Variance %** = `((BCWP - ACWP) / BCWP) * 100`
  - **Schedule Variance %** = `((BCWP - BCWS) / BCWS) * 100`
- **Settings** page includes: Open for Time Entry checkbox, Charge Code, and Cost Type.

> [!NOTE]
> You can secure the Settings page and control which users are allowed to change task settings.

### Task List Views


**To view a list of tasks:**
1. Open a project and click **Tasks**

View the Task, Task ID, Start, Finish, Baseline Finish, Is Late, Status, % Complete, Critical checkbox, and Open for Time Entry checkbox.

**Gantt view (WBS):**
1. Open a project, click **Tasks**, and select **Gantt** from the drop-down list

View the Task, Assigned Resources, Start, Finish, Duration, Status, % Complete, Actuals, ETC, EAC, Actual Cost (ACWP), ETC Cost, and EAC Cost.

**Tasks associated to a risk, issue, or change request:**
1. Open a project, click **Risks/Issues/Changes**
2. Open a risk or issue and click **Associated Tasks**

View the Task, ID, Start, Finish, Status, and % Complete.

### Task Filter Views


- **Main Task list** — Filter by Task Name, Task ID, Key Task, Tasks Only, Start, Finish, Status, Is Late, Critical, Milestone, and Open for Time Entry. Defaults: Key Task = Yes; Tasks Only, Status, Is Late, Critical, Milestone, and Open for Time Entry = All.
- **Gantt (WBS) filter** — Filter by Task Name, Task ID, Assigned To Resources, Start, Finish, List View checkbox, Include, Status, Is Late, Critical, Milestone, and Exclude Projects checkbox. Defaults: Include, Status, Is Late, Critical, Milestone = All.
- **Associated Tasks filter** — Filter by Tasks Only, Key Task, Status, and Milestone. All default to All.

## Team


**Modified views:** Staff Member Properties (Edit), Project Team Staff List, Project Team Detail List, Team Staff List (Investments), Team Detail List (Investments), Resource
Allocations List, Resource Allocations Detail List, Team Selection List, Project Team Filter, Team Filter, Resource Allocations Filter, Resource Selection Filter.

> [!NOTE]
> To apply the Team List view, also apply the corresponding Team Properties and Filter views.

### Team Properties


**To view team member properties:**
1. Open a project and click **Team**
2. Click the **Properties icon** of a team member

- **General** section includes: Requirement Name, Start Date, Finish Date, Default Allocation %, Booking Status, Request Status, Resource/Role, Investment Start Date, Investment Finish Date, Investment Role, Staff OBS Unit, and Open for Time Entry checkbox.
- **Resource Search** section includes: Resource Employment Type.

> [!NOTE]
> The Planned Allocation and Hard Allocation sections are not modified in the PMO Accelerator.

### Team List Views


**To view a list of team members:**
1. Open a project and click **Team**
2. Select **Staff** or **Detail** from the drop-down list

- **Staff (Projects/Programs)** — View Resource/Role, Project Role, Staff OBS Unit, Booking Status, Open for Time checkbox, Start, Finish, Average Allocation %, Allocation, Actuals, and ETC
- **Staff (Other Investments)** — View Resource/Role, Investment Role, Staff OBS Unit, Booking Status, Open for Time checkbox, Start, Finish, Average Allocation %, Allocation, Actuals, Incident Actuals, and Total Actuals
- **Detail (Projects/Programs)** — View Resource/Role, Project Role, Booking Status, Start, Finish, Allocation, Actuals, ETC, and a Time-Scaled Value showing Allocation by Period for a six-month period
- **Detail (Other Investments)** — View Resource/Role, Investment Role, Booking Status, Start, Finish, Allocation, and Actuals

**To view a list of allocations for resources or roles:**
1. Open **Home**, and from **Resource Management**, click **Resources**
2. Open a resource and click **Allocations**
3. Select **Summary** or **Detail** from the drop-down list

- **Summary** — View Investment, Investment Manager, Investment Role, Booking Status, Open for Time, Allocation Start, Allocation Finish, Average Allocation %, Allocation, Actuals, and ETC
- **Detail** — View Investment, Investment Role, Booking Status, Allocation Start, Allocation Finish, Allocation, Actuals, ETC, and a Time-Scaled Value showing Allocation by Period for a six-month period

**To view a list of team members you can assign to tasks:**
1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects)
2. Open a project and click **Tasks**
3. Select a task, click **Assign**, then click **Team**

> [!NOTE]
> The Assignment Pool option must be set to Resource Pool.

The List Filter view appears by default in an expanded state. Filter by Resource/Role Name, Resource/Role ID, Resource OBS, Resource OBS - Filter Mode, Project Role, Resource Type, Booking Status, and Zero Allocation. Defaults: Resource Type = Labor; Booking Status = All; Zero Allocation = No.

## Related
- [[_MOC Integrations]]

%%Source: p4632-4657%%
