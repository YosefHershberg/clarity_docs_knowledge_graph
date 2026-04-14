---
title: Clarity Studio Stock Objects Actions and Data Providers
tags:
  - dev
aliases:
  - Stock Objects
canonical: true
audience: dev
domain: development
---

# Clarity Studio Stock Objects, Actions, and Data Providers

Classic PPM provides a set of stock objects, object actions, and system data providers. As a Studio developer, use these to customize the application for your organization.

- **[[#Studio Stock Objects]]**
- **[[#Studio Stock Object Actions]]**
- **[[#Studio System Data Providers]]**
- **[[#Clarity Studio Portfolio Data Providers]]**

> [!NOTE]
> Studio also includes stock portlets. For more information, see the Portlet Reference.

---

## Studio Stock Objects

The following stock objects are provided with the application:

| Object | Description |
|--------|-------------|
| **Action Item** | Units of work assigned to project members or yourself. Types: personal, project, process. Viewable from the Action Item area of the Organizer. |
| **Assignment** | Describes how a staff member works on a task. Includes start/finish dates and times, actual and remaining work, and status. |
| **Baseline** | A snapshot of a project over time. Contains a subset of project object fields. |
| **Benefit Plan** | Contains benefit plan information used for the Benefit Plan list page. |
| **Benefit Plan Detail** | Contains benefit plan detail for entering proposed returns on an investment. |
| **Change Requests** | Evaluation and approval criteria for change requests. Subobject of the Project object. |
| **Company** | Descriptive information about companies including Account Manager, Category, Company Type, Industry, Contact, and Rating. |
| **Cost Plan** | Attributes used on the Cost Plan and Budget list pages. |
| **Cost Plan Detail** | Cost plan detail for creating cost projection scenarios and budget revisions for an investment. |
| **Department** | Represents a place in the company organizational chart. Used for staff and budgeting responsibility. |
| **Financial Properties** | Stores financial properties displayed on the Financial subpage for NPIOs. |
| **Financials** | Stores attributes for the Simple Budget page. |
| **Fiscal Time Period** | Stores fiscal time periods used in financial plans and chargebacks. |
| **GL Account** | Represents a general ledger account used for charging departments for delivered work. |
| **Investment** | Abstract object containing base attributes for all investments. |
| **Issue** | A risk that has been realized. Enables risk property management to help increase project success. |
| **Location** | Represents a geographical location for a company. Can also be an OBS unit by location. |
| **Portfolio** | Represents a portfolio of investments. Portfolio managers evaluate Start, Continue, Discontinue, and Postpone decisions for each investment. |
| **Portfolio Investment** | Subobject of the Portfolio object. Represents any investment (project, asset, application) in a portfolio. |
| **Portfolio Investment Role Demand** | Subobject of Portfolio Investment. Represents the role demand for any investment in a portfolio. |
| **Portfolio Plan** | Subobject of the Portfolio object. Represents a portfolio plan. |
| **Project** | Represents a project. |
| **Project Financial Properties** | Stores project properties displayed on the Financial subpage for projects. |
| **Resource** | Represents a resource. |
| **Risk** | Measures the likelihood of meeting project expectations for budget, time, and quality. Subobject of the Project object. |
| **Task** | Describes activities that span a specific time. Part of the WBS and feeds project plans. Subobject of the Project object. |
| **Team** | Subobject of a Project. Describes four types of labor resources: Staff, Participant, Project Groups, and Collaboration Manager. |

---

## Studio Stock Object Actions

The following definitions apply to the scope column:
- **Generic** - Can be added to tabs on the Project Default Layout portlet page.
- **Global** - Can be added to any view for any object and to the Home menu.

| Object | Action | Description | Internal ID |
|--------|--------|-------------|-------------|
| Action Item | New Action Item | Creates a new action item. | npt.setObjectUserPartitions |
| Baseline | New Baseline | Creates a new baseline. | projmgr.baselineRevisionProperties |
| Baseline | Update Baseline | Updates a baseline. | projmgr.baselineRevisionUpdateClick |
| Baseline | Update Cost Totals | Updates earned value cost totals. | projmgr.baselineRevisionEarnedValueUpdate |
| Benefit Plan Detail | Add Benefit Plan Detail | Adds benefit plan detail rows to a benefit plan. | revmgr.benefitplandetailProperties |
| Cost Plan | Approve Budget | Approves the budget. | revmgr.costplanListApproveBudget |
| Cost Plan | Reject Budget | Rejects the budget. | revmgr.costplanListRejectBudget |
| Cost Plan | Set as Plan of Record | Sets the selected cost plan as the plan of record. | revmgr.markPlanCurrent |
| Cost Plan | Submit Plan of Record for Approval | Submits the cost plan of record for approval. | revmgr.submitForApproval |
| Cost Plan Detail | Add Cost Plan Detail | Adds cost plan detail rows to a detail cost plan. | revmgr.costplandetailNew |
| Cost Plan Detail | New Budget Plan Detail | Adds budget plan detail rows to a budget plan. | revmgr.budgetplandetailNew |
| Cost Plan Detail | Populate from Investment Team | Creates cost plan detail rows from the investment team. | revmgr.populateFromResourcePlan |
| Cost Plan Detail | Populate from Task Assignments | Creates cost plan detail rows from task assignments. | revmgr.populateFromTaskAssignments |
| Cost Plan Detail | Submit for Approval | Submits the cost plan of record for budget approval. | revmgr.submitForApproval |
| Department | Add Department | Adds a department. | revmgr.locationDepartmentsToAdd |
| Department | New Department | Creates a new department. | revmgr.departmentPropertiesNew |
| Fiscal Time Period | Activate | Makes the fiscal time period active. | revmgr.activateTimePeriods |
| Fiscal Time Period | Deactivate | Makes the fiscal time period inactive. | revmgr.deactivateTimePeriods |
| Fiscal Time Period | New Fiscal Time Period | Creates a new fiscal time period. | revmgr.timePeriodNew |
| GL Account | New GL Account | Creates a new GL account. | revmgr.glAccountNew |
| Location | Add Location | Adds a location. | revmgr.departmentAddLocations |
| Location | New Location | Creates a new location. | revmgr.locationNew |
| Portfolio | New Portfolio | Creates a new portfolio. | pma.portfolioNewObjectAction |
| Project | Add Dependency | Adds a dependent project. | projmgr.selectProjectDependencies |
| Project | Add Subproject | Adds a subproject to the project. | projmgr.selectSubProjects |
| Project | Add to My Projects | Adds the project to the My Projects portlet. | projmgr.hotListMemberInsert |
| Project | Copy Project from Template | Creates a project from the selected project template. | projmgr.selectProjectTemplate |
| Project | Create Baseline | Creates a new project baseline. | projmgr.createBaseline |
| Project | Go to Links page | Navigates to the Links page. | projmgr.linkList |
| Project | Go to Notes page | Navigates to the Notes page. | projmgr.noteList |
| Project | New Benefit Plan | Creates a new benefit plan. | revmgr.newBenefitplan |
| Project | New Change Request | Creates a new change request. | itl.changeNew |
| Project | New from Investment Team | Creates a new cost plan from the investment team. | revmgr.newCostplanFromInvTeam |
| Project | New from Task Assignments | Creates a new cost plan from task assignments. | revmgr.newCostplanFromTaskAssgn |
| Project | New Issue | Creates a new issue. | itl.issueNew |
| Project | New Manual Plan | Creates a new manual cost plan. | revmgr.newCostplan |
| Project | New Project | Creates a new project. | projmgr.projectNew |
| Project | New Risk | Creates a new risk. | itl.riskNew |
| Project | New Task | Creates a new task. | projmgr.newTask |
| Project | New WBS Task | Creates a new task and adds it to the WBS page. | projmgr.newWBSTask |
| Project | Remove from My Projects | Removes the project from the My Projects portlet. | projmgr.hotListItemDelete |
| Resource | Book Resources | Books the resources for the project. | resource.loadResourcesForBooking |
| Resource | New Resource | Creates a new project resource. | projmgr.resourceNewOptions_odf |
| Resource | Replace | Replaces the resource. | resource.replaceResources |
| Task | Add Existing Tasks | Adds selected tasks. | projmgr.wbsLinkToTasks |
| Task | Add Hyperlinks to Task | Adds hyperlinks to the task. | projmgr.linkList |
| Task | Add Notes to Task | Adds notes to the task. | projmgr.noteList |
| Task | Assign Resource to Task | Assigns the resource to the task. | projmgr.wbsTaskListAssignClick |
| Task | Copy Task from Template | Creates a new task as a copy of a template. | projmgr.selectProjectTemplate |
| Task | Link Tasks | Creates task dependencies for selected tasks. | projmgr.wbsGridCreateDependency |
| Task | Update Cost Totals | Updates the earned value cost totals in the Task list. | projmgr.updateEarnedValueAction |
| Task | Update Cost Totals (WBS) | Updates the earned value cost totals on the WBS page. | projmgr.wbsupdateEarnedValueAction |
| Team | Accept Hard Allocation | Confirms acceptance of a hard allocation. | projmgr.resourceProjectsSelitemCheckConfirm2 |
| Team | Accept Hard Allocation (Team) | Accepts hard allocation for the selected team. | projmgr.teamSelitemCheckConfirm |
| Team | Add Resource Allocation | Allocates the selected team resource. | pma.selectResourceInvestments |
| Team | Add Team Member | Adds a team member. | projmgr.resourceObjectSelectionList |
| Team | Add/update by OBS | Adds or updates team properties by OBS. | projmgr.staffOBSUpdateProperties |
| Team | Allocate from Estimates | Updates the team's allocation based on estimates. | projmgr.teamUpdateForAllocation |
| Team | Assignment Roles | Selects a role to assign. | projmgr.assnRoleSwapClick |
| Team | Commit Planned Allocation | Commits the planned allocation for the resource. | projmgr.resourceProjectsSelitemCheckConfirm3 |
| Team | Commit Planned Allocation (Team) | Commits the planned allocation for the team. | projmgr.teamSelitemCheckConfirm1 |
| Team | Estimate from Allocation | Generates resource estimates based on allocation. | projmgr.teamUpdateForEstimate |
| Team | Set Allocation | Sets the staff allocation. | projmgr.staffSetAllocationClick |
| Team | Shift Allocation (Resource) | Shifts or scales the selected resource allocation. | projmgr.resourceShiftScaleSelection |
| Team | Shift Allocation (Team) | Shifts or scales the selected team allocation. | projmgr.teamShiftScaleSelection |
| Transaction Header | New Transaction | Creates a new transaction. | npt.setObjectUserPartitions |
| Transaction Header | Post Selected | Posts the selected transaction. | revmgr.postSelectedHeaders |
| Transaction Header | Recalculate Selected | Recalculates the selected transaction. | revmgr.recalculateSelectedHeaders |
| Transaction Line | New Transaction Line | Inserts a new transaction line. | npt.setObjectUserPartitions |
| Transaction Line | Post Selected Lines | Posts the selected transaction lines. | revmgr.postSelectedLines |
| Transaction Line | Recalculate Selected Lines | Recalculates the selected transaction lines. | revmgr.recalculateSelectedLines |

---

## Studio System Data Providers

Data providers are the source behind all list and chart portlet data. They are special data constructs accessed directly through portlets or through queries. System data providers are not based on a specific object.

| Data Provider | Description |
|---------------|-------------|
| **Action Item** | Recommended data provider for building action item portlets. |
| **Actuals vs Allocation Discrepancy** | Data provider for the Team object. Filters team members with an actual vs allocation discrepancy over a defined threshold. |
| **Aggregation Investment List** | Data provider for displaying a list of investments with aggregation. |
| **Assigned Change Requests** | Data provider for displaying assigned change requests. |
| **Assigned Issues** | Data provider for displaying assigned issues. |
| **Assigned Risks** | Data provider for displaying assigned risks. |
| **Entity Hierarchy** | Data provider for displaying hierarchical entities such as investments. |
| **Key Tasks** | Subset of the Task object containing data about key tasks. |
| **OBS Investment Aggregation** | Data provider for displaying investments OBS aggregation. |
| **OBS Resource Aggregation** | Data provider for displaying resources OBS aggregation. |
| **Resources with Aggregation** | Data provider for resources with time-scaled and team-based aggregation support. |
| **Resources with Availability** | Data provider for showing a list of resources with availability. |
| **Roles with Resource Aggregation** | Data provider for role resources with time-scaled and resource/team-based aggregation support. |
| **Scenario List** | Data provider for the list of portfolio and capacity planning scenarios. |
| **Task Dependencies** | Data provider for displaying task dependencies. |
| **Team Allocations** | Data provider for the Team object with time-scaled and aggregation support. |

---

## Clarity Studio Portfolio Data Providers

This section lists portfolio attributes organized by Classic PPM Studio data provider. Use these attributes as fields, filters, or both in portfolio portlets.

Available portfolio data providers:
- **Portfolio Provider** (123 attributes)
- **Portfolio Plan Provider** (66 attributes)
- **Portfolio Investment Provider** (244 attributes)
- **Portfolio Investment Financial Performance Provider** (245 attributes)
- **Portfolio Role Capacity and Demand** (29 attributes)

---

### Portfolio Provider

Use the **123 attributes** in this data provider to develop chart and grid portlets for displaying data about one or more portfolios. This provider includes fields for displaying investment, distributed, and target portfolio data.

> [!NOTE]
> For time-varying attributes, each entry has a matching `(Total)` variant. The total variant displays a scalar total in grid portlets; the base variant displays time-sliced values in virtual columns. Both variants support numeric range filters.

**Key attributes:**

| Attribute | Type | Usage |
|-----------|------|-------|
| Above Waterline | Boolean (Filter) | Filters investments included in aggregation. Values: All, Yes (above), No (below). |
| Active | Boolean (Field/Filter) | Whether the portfolio is active or inactive. |
| Capacity Unit Type | Lookup - String (Field/Filter) | Whether capacity values appear in hours or FTE. |
| Cost Health | Lookup - String (Field/Filter) | Overall health scores based on planned or target total costs. |
| Created By | String (Field/Filter) | Full name of the resource who created the portfolio. |
| Created Date | Date (Field/Filter) | Date the portfolio was created. |
| Currency | Lookup - String (Field/Filter) | Currency type for the portfolio. |
| Department | Lookup - String (Field/Filter) | Customer or provider department portfolio. Customer portfolios fund investments via chargeback rules; provider portfolios contain investments owned by the department. |
| Description | String (Field/Filter) | Description for each portfolio. |
| Distributed Benefits | Money (Field/Filter) | Distributed target benefits. Apply the Portfolio Plan Type filter to view portfolio or plan of record amounts. Scalar value (not time-sliced). |
| Distributed Benefits (Total) | Time-varying (Field/Filter) | Matching attribute for totals and time-sliced values. |
| Distributed Capital Cost | Money (Field/Filter) | Distributed capital cost in currency units. Scalar value. |
| Distributed Capital Cost (Total) | Time-varying (Field/Filter) | Matching attribute for totals and time-sliced values. |
| Distributed Cost | Money (Field/Filter) | Distributed cost clipped for the portfolio planning horizon. Scalar value. |
| Distributed Cost (Total) | Time-varying (Field/Filter) | Clipped for the investment dates. |
| Distributed Operating Cost | Money (Field/Filter) | Distributed operating cost clipped for the portfolio planning horizon. Scalar value. |
| Distributed Operating Cost (Total) | Time-varying (Field/Filter) | Clipped for the investment dates. |
| Distributed Overall Roles | Number (Field/Filter) | Distributed overall roles in FTE or hours. Clipped for portfolio planning horizon. Scalar value. |
| Distributed Overall Roles (Total) | Time-varying (Field/Filter) | Clipped for the investment dates. |
| Distributed Total Roles | Number (Field/Filter) | Total distributed roles in FTE or hours. Clipped for portfolio planning horizon. Scalar value. Appears in the Totals row under the Distributed Target column on the portfolio Targets page. |
| Financial Entity | Lookup - String (Filter) | Filters portfolios by Financial Entity. |
| Finish Date | Date (Field/Filter) | Finish date for the portfolio. |
| ID | String (Field/Filter) | Unique identifier for the portfolio. Formerly known as Portfolio Code. |
| Last Updated By | String (Field/Filter) | Full name of the resource who last updated the portfolio. |
| Last Updated Date | Date (Field/Filter) | Date when the portfolio was last modified. |
| Name | String (Field/Filter) | Name of the portfolio. |
| OBS Unit | Lookup - String (Filter) | Filters portfolios by OBS unit. |
| Page Layout | Lookup - String (Field/Filter) | Page layout for the portfolio (e.g., default, PMO Program Status, PMO Project Storyboard). |
| Partition | Lookup - String (Field/Filter) | Portfolio partition; enables filtering by partition. |
| Portfolio Managers | Lookup - String (Field/Filter) | Names of resources managing investments in the portfolio. |
| Portfolio Plan Type | Lookup - String (Filter) | Filters target and distributed amounts. Options: Portfolio (default) or Plan of Record. |
| Portfolio Stakeholders | Lookup - String (Field/Filter) | Resources designated as stakeholders. |
| Start Date | Date (Field/Filter) | Start date for the portfolio. |
| Target Benefits | Money (Field/Filter) | Target amount of financial benefits expected from the portfolio. |
| Target Capital Cost | Money (Field/Filter) | Target capital cost spending for the portfolio. |
| Target Operating Cost | Money (Field/Filter) | Target operating cost for the portfolio. |
| Target Overall Roles | Number (Field/Filter) | Target role capacity in hours or FTE. |
| Target Total Cost | Money (Field/Filter) | Target total cost for the portfolio. |
| Target Total Roles | Number (Field/Filter) | Total number of hours or FTE set as target for all identified roles. |

---

### Portfolio Plan Provider

Use the **66 attributes** in this data provider to develop chart and grid portlets for portfolio plans.

**Key attributes:**

| Attribute | Type | Usage |
|-----------|------|-------|
| Created By | String (Field/Filter) | Full name of the resource who created the plan. |
| Created Date | Date (Field/Filter) | Date when the portfolio plan was created. |
| Currency | Lookup - String (Field/Filter) | Currency type for the portfolio plan. |
| Current Selected Plan | Boolean (Filter) | Identifies plans currently selected for comparison reports. |
| Description | String (Field/Filter) | Description for each portfolio plan. |
| Distributed Benefits | Money (Field/Filter) | Distributed target benefits. Apply Portfolio Plan Type filter for portfolio or plan of record amounts. Scalar value. |
| Distributed Benefits (Total) | Time-varying (Field/Filter) | Matching attribute for totals and time-sliced values. |
| Distributed Capital Cost | Money (Field/Filter) | Distributed capital cost in currency units. Scalar value. |
| Distributed Cost | Money (Field/Filter) | Distributed cost clipped for portfolio planning horizon. Scalar value. |
| Distributed Operating Cost | Money (Field/Filter) | Distributed operating cost clipped for portfolio planning horizon. Scalar value. |
| Distributed Overall Roles | Money (Field/Filter) | Distributed overall roles in FTE or hours. Scalar value. |
| Distributed Total Roles | Number (Field/Filter) | Total distributed roles in FTE or hours. Clipped for portfolio planning horizon. Appears in the Totals row under the Distributed Target column on the Targets page. |
| Financial Entity | Lookup - String (Filter) | Filters plan data by Financial Entity. |
| Finish Date | Date (Field/Filter) | Finish date for the portfolio plan. |
| Fiscal Period End Date | Lookup - String (Filter) | Filters by Fiscal Period End Date. |
| Fiscal Period Start Date | Lookup - String (Filter) | Filters by Fiscal Period Start Date. |
| Fiscal Period Type | Lookup - String (Filter) | Filters by Fiscal Period Type. |
| Last Updated By | String (Field/Filter) | Full name of the resource who last updated the plan. |
| Last Updated Date | Date (Field/Filter) | Date when the portfolio plan was last modified. |
| Page Layout | Lookup - String (Field/Filter) | Page layout for the plan. |
| Partition | Lookup - String (Field/Filter) | Portfolio partition; enables filtering by partition. |
| Plan ID | String (Field/Filter) | Unique identifier for each portfolio plan. |
| Plan Name | String (Field/Filter) | Name for each portfolio plan. |
| Plan of Record | Boolean (Field/Filter) | Whether the plan is the recognized plan of record (true/1) or another plan (false/0). |
| Portfolio | Lookup - String (Field/Filter) | Name of the associated portfolio. |
| Portfolio Active | Boolean (Field/Filter) | Whether the portfolio plan is active (true/1) or inactive (false/0). |
| Portfolio Distributed Benefits | Money (Field/Filter) | Distributed benefits from the portfolio object (master object of portfolio plan). |
| Portfolio Distributed Capital Cost | Money (Field/Filter) | Distributed capital cost from the portfolio. |
| Portfolio Distributed Cost | Money (Field/Filter) | Distributed cost from the portfolio. |
| Portfolio Distributed Operating Cost | Money (Field/Filter) | Distributed operating cost from the portfolio. |
| Portfolio Distributed Overall Roles | Number (Field/Filter) | Overall total role effort distributed over multiple time periods (hours or FTE). |
| Portfolio Distributed Total Roles | Number (Field/Filter) | Total labor effort for all roles distributed across multiple time periods (hours or FTE). |
| Portfolio Finish Date | Date (Field/Filter) | End date for the portfolio plan. |
| Portfolio ID | String (Field/Filter) | Unique identifier for the portfolio. Formerly known as Portfolio Code. |
| Portfolio Managers | Lookup - String (Field/Filter) | Names of resources managing the portfolio investments. |
| Portfolio Name | String (Field/Filter) | Name of the portfolio. |
| Portfolio Stakeholders | Lookup - String (Field/Filter) | Resources designated as stakeholders. |
| Portfolio Start Date | Date (Field/Filter) | Start date for the portfolio plan. |
| Portfolio Target Benefits | Money (Field/Filter) | Target financial benefits expected from the portfolio plan. |
| Portfolio Target Capital Cost | Money (Field/Filter) | Target capital costs expected during a specific planning period. |
| Portfolio Target Operating Cost | Money (Field/Filter) | Target operating costs expected during a specific planning period. |
| Portfolio Target Overall Roles | Number (Field/Filter) | Target role capacity in hours or FTE. |
| Portfolio Target Total Cost | Money (Field/Filter) | Target total costs expected during a specific planning period. |
| Portfolio Target Total Roles | Number (Field/Filter) | Total hours or FTE set as target for all identified roles. |
| Start Date | Date (Field/Filter) | Start date for the portfolio plan. |
| Target Benefits | Money (Field/Filter) | Target amount of financial benefits expected. |
| Target Capital Cost | Money (Field/Filter) | Target capital cost spending for the plan. |
| Target Operating Cost | Money (Field/Filter) | Target operating cost for the plan. |
| Target Overall Roles | Number (Field/Filter) | Target overall roles for the plan. |
| Target Total Cost | Money (Field/Filter) | Target total cost for the plan. |
| Target Total Roles | Number (Field/Filter) | Target capacity and role demand by month and total. Includes Portfolio roles from the Targets tab. Unplanned roles (Other Roles) are allocated to portfolio investments but not included in targets. |

---

### Portfolio Investment Provider

Use the **244 attributes** in this data provider to develop chart and grid portlets for portfolio investments. This provider includes fields for planned, budgeted, and actual costs, NPV, ROI, payback, and role allocations.

> [!NOTE]
> If you add an aggregate calculated attribute (ACA) to the Portfolio Investment object, the ACA is also available to the Portfolio Investment data provider. See [[Objects and Attributes]] for more information.

**Key attributes:**

| Attribute | Type | Usage |
|-----------|------|-------|
| Above Waterline | Boolean (Field/Filter) | Filters investments included in aggregation amounts. Values: All, Yes (above waterline), No (below waterline). |
| Above Waterline Caption | Lookup - String (Field/Filter) | Displays Above Waterline or Below Waterline as text. |
| Active | Boolean (Field/Filter) | Whether the portfolio investment is active or inactive. |
| Actual Capital % | Percent (Field/Filter) | Portion of actual costs that are capital. Calculation: Actual Capital Cost / Actual Cost. |
| Actual Capital Cost | Money (Field/Filter) | Total actual capital cost from ppa_wip table where Cost Type is Capital. Clipped for planning horizon. |
| Actual Cost | Money (Field/Filter) | Total actual cost regardless of cost type. Not the same as ACWP. If Forecast As Of Date is set, represents total up to that date. |
| Actual Operating % | Percent (Field/Filter) | Portion of actual costs that are operating. Calculation: Actual Operating Cost / Actual Cost. |
| Actual Operating Cost | Money (Field/Filter) | Total actual cost where cost type is operating. Clipped for portfolio planning horizon. |
| Actuals | Number (Field/Filter) | Aggregated actuals for all roles in selected investments. |
| Actuals As Of Date | Date (Field/Filter) | Filters posted actuals by a specific date. |
| ACWP | Money (Field/Filter) | Actual Cost of Work Performed. Total direct cost from posted actuals. Calculations: Assignment = posting process; Detail Task = sum of assignment ACWP; Summary Task = sum of detail-task ACWP; Project = sum of summary-task ACWP. |
| Alignment | Number (Field/Filter) | Overall alignment score. Values: Red (0-33) = poorly aligned; Yellow (34-67) = average; Green (68-100) = aligned. |
| Approved | Boolean (Field/Filter) | Whether a portfolio plan is approved (true/1) or unapproved (false/0). |
| Approved Caption | Lookup - String (Field/Filter) | Displays Approved or Unapproved as text. |
| Architectural Fit | Lookup - String (Field/Filter) | How well the investment aligns with organizational architecture. Traffic light: Green = high fit; Yellow = medium; Red = low. |
| BAC | Money (Field/Filter) | Budget at Completion. |
| Baseline Finish | Date (Field/Filter) | Baseline finish date for the investment. |
| Baseline Start | Date (Field/Filter) | Baseline start date for the investment. |
| Baseline Usage | Number (Field/Filter) | Resource utilization when the investment was baselined. Calculation: Total of Actuals + ETC. |
| BCWP | Money (Field/Filter) | Budgeted Cost of Work Performed (earned value). Calculated when baselined or when earned value totals are updated. |
| BCWS | Money (Field/Filter) | Budgeted Cost of Work Scheduled (planned value). Calculation: `BCWS = Sum of BAC at a specific point in time`. |
| Budget to Forecast Capital Cost Variance | Money (Filter) | Calculation: Budgeted Capital Cost - Forecast Capital Cost. |
| Budget to Forecast Cost Variance | Money (Filter) | Calculation: Budgeted Cost - Forecast Cost. |
| Budget to Forecast Operating Cost Variance | Money (Filter) | Calculation: Budgeted Operating Cost - Forecast Operating Cost. |
| Budgeted % Spent | Percent (Filter) | Portion of original budgeted costs spent. Calculation: Actual Cost / Budgeted Cost. |
| Budgeted Benefit | Money (Field/Filter) | Budgeted benefit equal to Planned Benefit from the benefit plan in the current approved budget revision. |
| Budgeted Breakeven | Date (Field/Filter) | Date when expected cash flow equals the expense of funding the investment. End of budgeted payback period. |
| Budgeted Capital % | Percent (Field/Filter) | Portion of total budget costs from capital. Calculation: Budgeted Capital Cost / Budgeted Cost. |
| Budgeted Capital % Spent | Percent (Filter) | Portion of budgeted capital costs spent. Calculation: Actual Capital Cost / Budgeted Capital Cost. |
| Budgeted Capital Cost | Money (Field/Filter) | Budgeted cost where cost type is Capital in the current approved budget revision. |
| Budgeted Capital Cost Remaining | Money (Field/Filter) | Calculation: Budgeted Capital Cost - Actual Capital Cost. |
| Budgeted Cost | Money (Field/Filter) | Budgeted cost from the current approved budget revision. |
| Budgeted Cost Finish | Date (Field/Filter) | End date for budgeted costs. |
| Budgeted Cost Remaining | Money (Field/Filter) | Budgeted cost remaining (actuals subtracted from planned amounts). Total of Budgeted Capital + Operating. |
| Budgeted Cost Start | Date (Field/Filter) | Start date for budgeted costs. |
| Budgeted IRR | Percent (Field/Filter) | Budgeted internal rate of return (IRR). |
| Budgeted MIRR | Percent (Field/Filter) | Budgeted modified internal rate of return (MIRR). MIRR assumes cash flows are reinvested at the cost of capital. |
| Budgeted NPV | Money (Field/Filter) | Budgeted net present value (NPV) based on a budgeted discount rate and term. |
| Budgeted Operating % | Percent (Field/Filter) | Portion of total budget costs that are operating costs. Calculation: Budgeted Operating Cost / Budgeted Cost. |
| Budgeted Operating Cost | Money (Field/Filter) | Budgeted cost where cost type is Operating in the current approved budget revision. |
| Budgeted Operating Cost Remaining | Money (Field/Filter) | Budgeted operating cost remaining when actuals are subtracted from planned amounts. |
| Budgeted Payback Period | Number (Field/Filter) | Number of periods (months) to budget before the investment recovers all expenses. |
| Budgeted ROI | Percent (Field/Filter) | Budgeted return on investment as a percentage of original funds. |
| Business Alignment | Calculated - Number (Field) | Business alignment score. Values: Red (0-33) = poor; Yellow (34-67) = average; Green (68-100) = aligned. |
| Business Unit Priority | Lookup - String (Field/Filter) | How well the investment aligns with business unit goals. Traffic light: Green = high; Yellow = medium; Red = low. |
| Charge Code | Lookup - String (Field/Filter) | Project or task charge code. Auto-populated from project or task charge code. |
| Commercial Value | Lookup - String (Field/Filter) | How well the investment aligns with future market growth. Traffic light: Red = low; Yellow = medium to high; Green = high. |
| % Complete | Percent (Field/Filter) | Percentage of work complete. |
| Corporate Priority | Lookup - String (Field/Filter) | Corporate priority ranking. Traffic light: Red = low; Yellow = medium; Green = high. |
| Cost Type | Lookup - String (Field/Filter) | Cost type for the investment. Values: Operating or Capital. |
| Cost Variance % | Calculated - Number (Field) | Cost variance expressed as a percentage. Calculations: `CV = BCWP - ACWP` / `CV% = CV/BCWP x 100`. |
| CPI | Number (Field/Filter) | Cost Performance Index. CPI >= 1 = favorable; CPI < 1 = unfavorable. Calculation: `CPI = BCWP / ACWP`. |
| Created Date | Date (Field/Filter) | Date when this portfolio investment was created. |
| Currency Code | Lookup - String (Field/Filter) | Currency code for the investment. |
| CV | Money (Field/Filter) | Cost variance (CV). Calculation: `CV = BCWP - ACWP`. |
| Description | String (Field/Filter) | Description for each portfolio investment. |
| EAC | Money (Field/Filter) | Estimate at Completion. Calculation: `EAC = ACWP + (BAC - BCWP) / CPI`. Baseline required. |
| EAC (AT) | Money (Field/Filter) | Atypical EAC for non-typical variances. Calculation: `EAC (AT) = ACWP + (BAC - BCWP)`. Baseline required. |
| EAC (T) | Money (Field/Filter) | Typical EAC for typical variances. Calculation: `EAC (T) = ACWP + ETC`. No baseline required. |
| EAC for Labor Resources | Time-varying (Field/Filter) | Estimated effort at completion (actuals + remaining ETC) as a time-varying value. |
| EAC Sum for Labor Resources | Number (Field/Filter) | Total EAC for all labor resources. Stored as a BLOB; value is in seconds. |
| ETC | Number (Field/Filter) | Estimate to Complete for all resources and tasks. Expressed in hours or FTE. |
| ETC (AT) | Money (Field/Filter) | Atypical ETC for non-typical variances. Calculation: `ETC (AT) = BAC - BCWP`. Baseline required. |
| ETC (Cost) | Money (Field/Filter) | Estimated cost to complete. Calculation: `ETC (Cost) = remaining labor cost (ETC * billing rate) + remaining non-labor cost`. |
| ETC (T) | Money (Field/Filter) | Typical ETC for typical variances. Calculation: `ETC (T) = (BAC - BCWP) / CPI`. |
| ETC Sum for Labor Resources | Number (Field/Filter) | Total ETC for all labor resources. Stored as a BLOB; value is in seconds. |
| % Expended | Percent (Field/Filter) | Percentage of total assets expended to date. |
| Financial Entity | Lookup - String (Filter) | Filters investments by Financial Entity. |
| Financial Plans | Number (Field/Filter) | Filters investments by predefined financial plans. Note: selecting a financial plan affects other field values such as Planned Benefit. |
| Finish | Date (Field/Filter) | Date when the investment is scheduled to end. |
| Fiscal Period End Date | Lookup - String (Filter) | Filters by Fiscal Period End Date. |
| Fiscal Period Start Date | Lookup - String (Filter) | Filters by Fiscal Period Start Date. |
| Fiscal Period Type | Lookup - String (Filter) | Filters by Fiscal Period Type. |
| Forecast % of Budgeted | Percent (Filter) | Portion of original budget estimated to be spent. Calculation: Forecast Cost / Budgeted Cost. |
| Forecast As Of Date | Date (Filter) | Enables date-based calculation for Actual Cost, Forecast Cost, and Forecast Cost Remaining. |
| Forecast Capital Cost | Money (Filter) | Estimated future capital cost. If Forecast As Of Date is set: Actual Capital Cost + Forecast Capital Cost Remaining. Otherwise: Actual Capital Cost + Planned Capital Cost. |
| Forecast Cost | Money (Filter) | Estimated future cost. If Forecast As Of Date is set: Actual Cost + Forecast Cost Remaining. Otherwise: Actual Cost + Planned Cost. |
| Forecast Cost Remaining | Money (Filter) | Estimated future cost remaining. If Forecast As Of Date is set: planned cost curve after that date. Otherwise: entire Planned Cost. |
| Forecast Operating Cost | Money (Filter) | Estimated future operating cost. |
| Forecast Operating Cost Remaining | Money (Filter) | Estimated future operating cost remaining. |
| Goal | Lookup - String (Field/Filter) | Predefined goal for grouping investments sharing a common theme. |
| Idea Category | Lookup - String (Field/Filter) | Idea category for investments that originated as an idea. Depends on Idea Type field. |
| Idea Type | Lookup - String (Field/Filter) | Idea type for investments that originated as an idea. Determines available Idea Category values. |
| Initial Investment | Money (Field/Filter) | Original cost calculated to fund an investment. Negative values are allowed. |
| Investment ID | String (Field/Filter) | Short code serving as unique identifier for each investment. |
| Investment Name | String (Field/Filter) | Common name of the investment. |
| Investment Type | Lookup - String (Field/Filter) | Investment type. Values: asset (0), application (1), product (2), other investment (3). |
| Last Updated Date | Date (Field/Filter) | Date when the portfolio investment was last modified. |
| Manager | Lookup - String (Field/Filter) | Manager assigned to the investment. |
| Modified in plan | Boolean (Field/Filter) | Whether the investment changed in its portfolio plan. |
| Number of Incidents | Number (Field/Filter) | Total number of incidents logged against this investment. |
| OBS Unit | Lookup - String (Filter) | Filters investments by OBS unit. |
| Partition | Lookup - String (Field/Filter) | Portfolio partition; enables filtering by partition. |
| Planned Benefit | Money (Field/Filter) | Expected gross revenues for the investment. |
| Planned Benefit Finish | Date (Field/Filter) | End date for the planned benefit period. |
| Planned Benefit Start | Date (Field/Filter) | Start date for the planned benefit period. |
| Planned Breakeven | Date (Field/Filter) | Date when expected cash flow equals the expense of funding the investment. End of planned payback period. |
| Planned Capital Cost | Money (Field/Filter) | Planned capital cost. Clipped for the portfolio planning horizon. |
| Planned Capital Cost Remaining | Money (Field/Filter) | Remaining portion of planned capital costs. |
| Planned Cost | Money (Field/Filter) | Planned Cost from the plan of record cost plan. |
| Planned Cost Remaining | Money (Field/Filter) | Remaining portion of planned costs. |
| Planned IRR | Percent (Field/Filter) | Planned internal rate of return (IRR). |
| Planned MIRR | Percent (Field/Filter) | Planned modified internal rate of return (MIRR). |
| Planned NPV | Money (Field/Filter) | Planned net present value (NPV) based on planned discount rate and term. |
| Planned Operating Cost | Money (Field/Filter) | Planned operating cost. Clipped for the portfolio planning horizon. |
| Planned Operating Cost Remaining | Money (Field/Filter) | Remaining planned operating cost. |
| Planned Payback Period | Number (Field/Filter) | Number of periods (months) to fund the investment before recovering all expenses. |
| Planned ROI | Percent (Field/Filter) | Planned return on investment as a percentage of original planned funds. |
| Planned to Forecast Capital Cost Variance | Money (Filter) | Calculation: Planned Capital Cost - Forecast Capital Cost. |
| Planned to Forecast Cost Variance | Money (Filter) | Calculation: Planned Cost - Forecast Cost. |
| Planned to Forecast Operating Cost Variance | Money (Filter) | Calculation: Planned Operating Cost - Forecast Operating Cost. |
| Planning Horizon Finish Date | Date (Field/Filter) | Ending date of the custom planning window. |
| Planning Horizon Start Date | Date (Field/Filter) | Starting date of the custom planning window. |
| Portfolio | Lookup - String (Field/Filter) | Name of the associated portfolio. |
| Portfolio Active | Boolean (Field/Filter) | Whether the portfolio is active (true/1) or inactive (false/0). |
| Portfolio Capacity Unit Type | Lookup - String (Field/Filter) | Whether portfolio capacity role amounts appear in hours or FTE. |
| Portfolio Category 1-4 | Lookup - String (Field/Filter) | Up to four custom portfolio investment categories. Fully configurable per organization (e.g., industry code, client type, compliance level, funding source). |
| Portfolio Currency Code | Lookup - String (Field/Filter) | Currency type for the portfolio investment. |
| Portfolio Distributed Benefits | Money (Field/Filter) | Distributed benefits from the portfolio object (master object of portfolio investment). |
| Portfolio Distributed Capital Cost | Money (Field/Filter) | Distributed capital cost from the portfolio. |
| Portfolio Distributed Cost | Money (Field/Filter) | Distributed cost from the portfolio. |
| Portfolio Distributed Operating Cost | Money (Field/Filter) | Distributed operating cost from the portfolio. |
| Portfolio Distributed Overall Roles | Number (Field/Filter) | Total role effort distributed over multiple time periods (hours or FTE). |
| Portfolio Distributed Total Roles | Number (Field/Filter) | Total labor effort for all roles distributed across multiple time periods (hours or FTE). |
| Portfolio ID | String (Field/Filter) | Unique identifier for the portfolio. Formerly known as Portfolio Code. |
| Portfolio Managers | Lookup - String (Field/Filter) | Names of resources managing the portfolio. |
| Portfolio Name | String (Field/Filter) | Name of the portfolio. |
| Portfolio Plan Type | Lookup - String (Filter) | Filters investment aggregation amounts. Options: Portfolio (default) or Plan of Record. |
| Portfolio Stakeholders | Lookup - String (Field/Filter) | Resources designated as stakeholders. |
| Portfolio Target Benefits | Money (Field/Filter) | Target financial benefits expected. |
| Portfolio Target Capital Cost | Money (Field/Filter) | Target capital costs during a specific planning period. |
| Portfolio Target Operating Cost | Money (Field/Filter) | Target operating costs during a specific planning period. |
| Portfolio Target Overall Roles | Number (Field/Filter) | Target role capacity in hours or FTE. |
| Portfolio Target Total Cost | Money (Field/Filter) | Target total costs during a specific planning period. |
| Portfolio Target Total Roles | Number (Field/Filter) | Total hours or FTE set as target for all identified roles. |
| Project Category | Lookup - String (Field/Filter) | Types of projects recognized by the organization (e.g., Planning, Development, Implementation). |
| Project Gantt | Number (Field/Filter) | Investments with an associated project Gantt chart. |
| Project Type | Lookup - String (Field/Filter) | Project investment type (e.g., major projects, new applications, application changes). |
| Project/Idea Category | Lookup - String (Field/Filter) | Category of the idea or project. |
| Project/Idea Type | Lookup - String (Field/Filter) | Types of projects and ideas recognized by the organization. |
| Projected Cost Variance | Calculated - Number (Field) | Projected time-varying curve for total baseline cost variance (EAC - baseline cost). |
| Projected Cost Variance % | Calculated - Number (Field) | Projected cost variance expressed as a percentage. |
| Projected Effort Variance | Calculated - Number (Field) | Projected time-varying curve for total baseline variance for all labor resources (EAC - baseline). |
| Projected Effort Variance % | Calculated - Number (Field) | Projected effort variance expressed as a percentage. |
| Rank | Number (Field/Filter) | Relative ranking of investments in a portfolio. Set on the Waterlines page. |
| Realized Budgeted Benefit | Money (Field/Filter) | Time-varying actual revenue from a benefit plan associated with an approved budget plan. |
| Realized Planned Benefit | Money (Field/Filter) | PLANNED_ACTUAL_BENEFIT value. |
| Regulatory Compliance | Lookup - String (Field/Filter) | SLA compliance level. Traffic light: Green (0-33) = low; Yellow (34-67) = medium; Red (68-100) = high. |
| Reinvestment Rate | Percent (Field/Filter) | Reinvestment rate used in financial calculations. Used when IS_SYS_VAL_FOR_RR is True. |
| Required | Boolean (Field/Filter) | Whether the investment is required for portfolio management scenarios. |
| Risk | Number (Field/Filter) | Risk score for the investment. |
| Role Actuals | Number (Field/Filter) | Sum of actual time spent by all roles on an investment. |
| Role Allocation Demand | Number (Field/Filter) | Sum of team allocations grouped by investment. |
| Role Allocation Remaining | Number (Field/Filter) | Difference between allocation demand and actuals. Calculation: `Role Allocation Remaining = Role Allocation Demand - Role Actuals`. Units: Hours or FTE. |
| Schedule to Baseline | Calculated - Number (Field) | Number of days difference between current investment duration and baseline duration. |
| Schedule Variance % | Calculated - Number (Field) | Value of completed work relative to planned work. Calculations: `SV = BCWP - BCWS` / `SV% = (SV/BCWS) * 100`. Positive = ahead of schedule; negative = behind. |
| SPI | Number (Field/Filter) | Schedule Performance Index. SPI < 1 = behind schedule. Calculation: `SPI = BCWP / BCWS`. |
| Stage | Lookup - String (Field/Filter) | Current stage of the investment in its process (e.g., Initiation, Planning, Building, Closing). |
| Stage Count | Number (Field/Filter) | Total number of available stages in the parent process. |
| Stage Number | Number (Field/Filter) | Current stage number value. Example: 0 = Prospect; 1 = Qualification; 5 = Contract Close; 6 = Won; 7 = Loss; 8 = Abandoned. |
| Start | Date (Field/Filter) | Portfolio investment start date. |
| Status | Lookup - String (Field/Filter) | Status of the investment. |
| Status Indicator | Lookup - String (Field/Filter) | Status indicator for the investment. |
| SV | Money (Field/Filter) | Schedule Variance expressed in currency units. Calculation: `SV = BCWP - BCWS`. |
| TCO Currency | String (Field/Filter) | Currency code associated with the total cost of ownership value. |
| Technology Compliance | Lookup - String (Field/Filter) | How well the investment aligns with platform and architecture standards. Traffic light: Red = non-compliant; Yellow = not compliant but stable; Green = compliant. |
| Total Cost of Capital | Percent (Field/Filter) | Total capital costs of the investment. |
| Total Effort | Number (Field/Filter) | Total effort in hours or FTE applied to the investment. |
| Total Incident Actual Effort | Number (Field/Filter) | Total actuals in hours or FTE for investments based on incidents. |
| Total Labor Effort | Number (Field/Filter) | Total labor effort in hours or FTE. Calculation: `Total Labor Effort = Actuals + ETC`. |
| Total Ownership Cost | Money (Field/Filter) | Total cost of ownership. Used to compare costs shared or incurred over time. |
| Work Status | Lookup - String (Field/Filter) | Work status of investments. Values: Active, Cancelled, On Hold, Complete, Requested. |

---

### Portfolio Investment Financial Performance Provider

Use the **245 attributes** in this data provider to develop chart and grid portlets for portfolio investments with financial performance metrics including forecasts and financial percentages.

> [!NOTE]
> This provider includes all the attributes listed under the **Portfolio Investment Provider**, plus one additional attribute: **Object Code** (String, Filter) - filters portfolio investments by Object Code.
>
> Key differences from the Portfolio Investment Provider: attributes that were Filter-only in the Portfolio Investment Provider are available as Field and Filter in this provider (e.g., Budget to Forecast variances, Forecast percentages, Forecast cost attributes, Planned percentage attributes).
>
> If you add an ACA to the portfolio investment object, the ACA is also available in this provider.

> [!TIP]
> You can view **Projected Cost Variance**, **Projected Effort Variance**, and other KPIs on the **Project Indicators** portlet.

---

### Portfolio Role Capacity and Demand

Use the **29 attributes** in this data provider to develop chart and grid portlets that capture capacity and demand by role in a single portfolio.

> [!NOTE]
> This provider works with the **Plan** filter in the upper right corner of a page. Place your portlet on a tab in an instance of a portfolio. When users select a plan, the portlet displays plan amounts instead of portfolio amounts.

**Key attributes:**

| Attribute | Type | Usage |
|-----------|------|-------|
| Above Waterline | Boolean (Filter) | Filters allocation demand and actual amounts for roles. Values: All, Yes (above waterline), No (below waterline). |
| Actuals | Number (Field/Filter) | Aggregated actuals for all roles in selected investments. |
| Actuals (Total) | Number (Field/Filter) | Matching attribute for totals and time-sliced values. |
| Allocation Demand | Number (Field/Filter) | Aggregated allocation demand for roles in selected investments. |
| Allocation Demand (Total) | Number (Field/Filter) | Matching attribute for totals and time-sliced values. |
| Allocation Remaining | Number (Field/Filter) | Remaining capacity allocation for roles. Calculation: `Allocation Remaining = Allocation Demand - Actuals`. Units: Hours or FTE. |
| Allocation Remaining (Total) | Number (Field/Filter) | Matching attribute for totals and time-sliced values. |
| Capacity for Role | Time-varying (Filter) | Filters portfolios by Capacity for Role. |
| Capacity Target | Number (Filter) | Filters portfolios by Capacity Target. |
| Capacity Unit Type | Lookup - String (Field/Filter) | Whether portfolio resource and role capacity values appear in hours or FTE. |
| Distributed Target | Number (Field/Filter) | Adjusts or scales the distributed target for a role in a portfolio plan. |
| Distributed Target (Total) | Number (Field/Filter) | Matching attribute for totals and time-sliced values. |
| Distributed to Allocation Demand Variance | Number (Field/Filter) | Difference between distributed target and allocation demand. Calculation: `Distributed Target - Allocation Demand`. Units: Hours or FTE. |
| Distributed to Allocation Demand Variance (Total) | Number (Field/Filter) | Matching attribute for totals and time-sliced values. |
| Exclude Other Roles | Boolean (Filter) | When selected, excludes Other Roles from results. By default, Other Roles are included. |
| Financial Entity | Lookup - String (Filter) | Filters portfolios by Financial Entity. |
| Fiscal Period End Date | Lookup - String (Filter) | Filters portfolios by Fiscal Period End Date. |
| Fiscal Period Start Date | Lookup - String (Filter) | Filters portfolios by Fiscal Period Start Date. |
| Fiscal Period Type | Lookup - String (Filter) | Filters portfolios by Fiscal Period Type. |
| Partition | Lookup - String (Field/Filter) | Portfolio partition; enables filtering by partition. |
| Plan Id | Number (Filter) | Filters by unique identifier for a portfolio plan. |
| Portfolio ID | Number (Filter) | Filters by Portfolio ID. |
| Role | Lookup - String (Filter) | Browse filter for selecting a role to filter portlet data. |
| Role ID | Lookup - String (Field/Filter) | Unique identifier for each role. |
| Role Name | String (Field/Filter) | Name of the role (e.g., analyst, hardware technician). |
| Target | Number (Field/Filter) | Target for the role. |
| Target to Allocation Demand Variance | Number (Field/Filter) | Difference between target and allocation demand. Calculation: `Target - Allocation Demand`. Units: Hours or FTE. |
| Target to Allocation Demand Variance (Total) | Number (Field/Filter) | Matching attribute for totals and time-sliced values. |
| Target to Distributed Variance | Number (Field/Filter) | Difference between the target role capacity and the distributed target. |

> [!NOTE]
> The Portfolio Role Capacity and Demand provider includes the **Other Roles** row, which aggregates allocation demand and actual amounts across investments for roles that users exclude from portfolio targets.

---

## Related
- [[_MOC Development]]

%%Source: p4146-4240%%


