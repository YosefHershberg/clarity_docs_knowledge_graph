---
title: IT Service Management
tags:
  - concept
  - classic
  - howto
aliases:
  - IT Service Management
source_pages: 2204-2220
canonical: true
audience: everyone
domain: classic
---
# IT Service Management (Classic PPM)

IT services represent a subset of Classic PPM investments such as deploying a new platform or application. As a service manager, you analyze services relative to other investments for their value and cost.

Use IT service management to:
- Manage services and make informed financial decisions (view aggregated financial and effort data, determine total cost of ownership)
- Share investments and services across other investments, with allocation percentages controlling cost roll-up
- Define budget information, create financial plans, and enable financial transactions
- Staff a team to work on the service and related demand
- Use processes to notify a manager when investment status changes
- Audit a historical record of all changes, additions, and deletions

## Prerequisites

Before using IT Service Management, verify with your administrator:
- You have the required access rights for the features you want to use
- Scheduled jobs (e.g., **Investment Allocations** job) are running properly
- You have access to the commonly used reports:
  - Budget/Forecast Analysis
  - Chargeback GL Account
  - Customer & Provider Chargeback
  - Investment Status
  - Project Transaction Inquiry
  - Resource Assignments
  - Timesheet Detail
  - Capacity vs Demand By Resource *(requires PMO Accelerator)*
  - Capacity vs Demand By Role *(requires PMO Accelerator)*
- The **PMO Accelerator** add-in is installed if you need its data
- Audit fields are configured if you need access to the Audit menu

## Manage IT Services

### View a List of Services

1. Open **Home > IT Service Management > Services**
2. Filter, sort, and reconfigure the list as needed
3. Click a service name to open it

### Create or Edit a Service

> [!NOTE]
> Administrators and developers can also import a service from another system of record using the XML Open Gateway (XOG).

1. Open **Home > IT Service Management > Services**
2. Click **New** and complete the **General** section:

| Field | Description |
|-------|-------------|
| **Main Application** | Defines the main parent application associated with the service |
| **Manager** | Resource who manages the service. Default: current user |
| **Start Date / Finish Date** | Service start and end dates. Required for team allocation calculations |
| **Set Planned Cost Dates** | Sync planned cost dates with service dates. Default: Selected |
| **Goal** | Strategic goal alignment (e.g., Infrastructure Improvement, New Business Development) |
| **Alignment** | 0–100 score: Red (0–33) = not aligned, Yellow (34–67) = partial, Green (68–100) = aligned |
| **Status** | Approved / Rejected / Unapproved. Default: Unapproved |
| **Status Indicator** | Graphical stoplight: Red / Yellow / Green |
| **Stage** | Investment lifecycle stage (company-specific values) |
| **Priority** | Relative importance: 0 (low) to 36 (high). Default: 10 |
| **Risk** | Numeric risk score: Green (0–33) = low, Yellow (34–67) = medium, Red (68–100) = high |
| **Required** | Indicates the service meets a business requirement; used in portfolio tracking |

3. In the **Organizational Breakdown Structure** section, associate an OBS unit for security, organizational, or reporting purposes
4. Save changes
5. To deactivate a service: open it and clear the **Active** check box
6. To delete: select the check box next to the service and click **Mark for Deletion**

### Schedule a Service

1. Open **Home > IT Service Management > Services** > open a service
2. Open **Properties > Schedule**
3. Complete the **Schedule** section:
   - **Start Date / Finish Date** — Required for team allocation calculations
   - **Set Planned Cost Dates** — Sync planned cost dates with service dates
4. Complete the **Tracking** section:
   - **Time Entry** — Enable timesheet tracking for service staff
   - **Track Mode** — PPM (default) / None / Other
   - **Charge Code** — Default charge code; overridden by task-level charge codes on timesheets
5. Save changes

### Define a Budget for a Service

Use a simple budget to define planned cost, benefit, NPV, ROI, and breakeven. A detailed financial plan lets you budget costs over multiple periods.

> [!NOTE]
> Data from any detailed plans overrides the simple budget, and the fields on the page become read-only.

1. Open a service > **Properties > Budget**
2. Complete the **Financial Planning** section:
   - **Currency** — Currency for budget and forecast calculations
   - **Budget equals Planned Values** — When selected, budget values match planned values. Default: Selected
   - **Calculate Financial Metrics** — Auto-calculate financial metrics. Default: Selected
3. Complete the **Financial Metrics Options** section (system rate, investment rate, initial investment)
4. Complete the **Planned** section:

| Field | Description |
|-------|-------------|
| **Planned Cost** | Total planned cost distributed over planned cost dates |
| **Planned Cost Start / Finish** | Date range for cost distribution |
| **Planned Benefit** | Anticipated financial benefit distributed over benefit dates |
| **Planned NPV** | Calculated: Planned Benefit − Planned Cost |
| **Planned ROI** | Calculated: Planned NPV / Planned Cost |
| **Planned Breakeven** | Date/amount when the program becomes profitable |
| **Planned IRR** | Planned internal rate of return |
| **Planned MIRR** | Planned modified internal rate of return |
| **Planned Payback Period** | Planned payback period date |

> [!NOTE]
> To make Planned NPV, Planned ROI, and Planned Breakeven editable, clear the **Calculate NPV Data** field.

5. Complete the **Budget** section (Budget Cost, Budget Benefit, Budget NPV, Budget ROI, Budget Breakeven, Budget IRR, Budget MIRR, Budget Payback Period)
6. Save changes

### Enable Financial Transactions for a Service

Enable financial processing to identify the location, department, and transaction rates used during chargeback processing.

**Prerequisites:**
- Entity, WIP, and investment classes and locations exist
- Rate and cost matrices are configured
- A department is defined

1. Open the service > **Properties > Settings**
2. Complete the **Financial** section:

| Field | Description |
|-------|-------------|
| **WIP Class** | Work-in-process class for rate/cost matrix matching |
| **Investment Class** | Investment class for rate/cost matrix matching |
| **Department** | Used for chargeback processing. Required for chargebacks. Auto-populated if set on general properties |
| **Location** | Used to match investment with debit/credit rules for chargeback processing |

3. In the **Transaction Matrix** sections for Labor, Material, Equipment, and Expense, enter:
   - **Rate Source** — Rate used during transaction processing
   - **Cost Source** — Cost of labor, materials, equipment, or expenses
   - **Exchange Rate Type** — How rates and costs are converted (if multicurrency is enabled)
4. Save changes

### Manage Incidents for a Service

1. Open a service > **Properties > Incident Categories**
2. Select incident categories to associate with the service and click **Add**
3. Click **Save and Return**
4. To view incidents: **Properties > Incidents**
5. To create a new incident: click **New**
6. To reassign an incident: click **Reassign**
7. To convert an incident into a task or project: click **Convert**

> [!NOTE]
> Your administrator sets up and maintains incident categories. Administrators can also associate any service to an incident category collectively.

### Define Dependencies for a Service

1. Open a service > **Properties > Dependencies**
2. Select a mode:
   - **Investments that depend on this one** — Other investments dependent on your service
   - **Investments this one depends on** — Investments your service depends on
3. Click **Add** > filter or click **Show All**
4. Select investments and click **Add**
5. Save changes

### Create and Update Baselines

Baselines capture snapshots of total planned effort and estimated costs.

> [!NOTE]
> Incident actuals represent unplanned work and are not part of the total effort for baselines.

> [!TIP]
> Define rates for service staff and run the **Rate Matrix Extraction** job before baselining to get cost baseline values. Complete percent values on summary tasks before baselining to get BCWP baseline values.

**Create a baseline:**
1. Open a service > **Properties > Baseline**
2. Click **New** and complete:
   - **Revision Name** — e.g., Initial Baseline, Mid-Term Baseline (Required)
   - **Revision ID** — Unique identifier such as v1 or v5 (Required)
   - **Description** — Optional
   - **Current Revision** — Sets this baseline as the active baseline. Default: Selected
3. Save changes

**View baseline data (from the baseline revisions page):**
- **Usage** — Total effort (actuals + remaining ETC) at the time of baselining
- **BCWP** — Budgeted cost of work performed = BAC × summary level % complete

**Update a baseline:**
1. Open **Properties > Baseline**
2. Select the baseline check box
3. Click **Update Baseline** > confirm with **Yes**

> [!NOTE]
> The most recently created baseline becomes the current baseline by default. If you delete the current baseline and others exist, the most recent becomes current.

### Manage Subscriptions and Department Chargebacks

A subscription is a request by a department to receive a service. Subscribing departments are service consumers; the managing department is the service provider.

**View subscription information:**
1. Open a service > **Properties > Subscriptions**
2. Monitor the following:
   - **Customer Department** — Department that subscribed
   - **Incidents** — Number of incidents logged by the department
   - **Charges** — Aggregate charges approved for delivered service
   - **SLA Violations** — Number of service level violations logged

**Subscribe a department:**
1. Click **Add**
2. Browse or filter departments and click **Add**
3. Click **Return**

> [!NOTE]
> To charge the department, update the chargeback debit rule by adding GL allocations for the newly subscribed department.

**Remove a subscription:**
1. Select the check box next to the department and click **Remove**
2. Confirm with **Yes**

> [!WARNING]
> When you cancel a subscription, update the chargeback debit rule and remove the GL allocation for the department. Otherwise, the department continues to be charged.

### Evaluate Capacity Planning Scenarios

1. Open a service
2. In the scenario toolbar, select a capacity planning scenario
3. Evaluate the service by switching between the scenario and the plan of record
4. (Optional) Click **Create** in the scenario toolbar to create a new capacity planning scenario

## Build a Service Hierarchy

### Service Hierarchy Overview

The financial hierarchy displays aggregated planned cost, actual cost, and remaining cost for investments, incorporating allocation percentages. Child investment costs roll up to the parent service on the financial rollup; child work values roll up on the effort rollup.

**Common use case:** Share a database server between two software applications. Add the applications as child investments to the database server's hierarchy, and set allocation percentages to define cost sharing.

### Define Parent Investments and Allocations

1. Open a service > **Hierarchy > Parents**
2. Click **Add** > select one or more parent investments
3. In the **Allocation** field, enter the allocation percentage
4. To remove a parent: select its check box and click **Remove**
5. Save changes

> [!NOTE]
> The total combined allocation across all parents is always 100 percent.

### Define Child Investments and Allocations

1. Open a service > **Hierarchy > Financial Rollup**
2. Select the check box next to the child service and click **Add Child**
3. Select investments and click **Add**
4. Click **Return**
5. Click the allocation amount for the child investment
6. Enter the allocation percentage and save
7. To remove a child: select its check box and click **Remove** > **Return**

### Examine the Effort Rollup

1. Open a service > **Hierarchy > Effort Rollup**
2. Expand or collapse items in the hierarchy
3. Examine aggregated child service labor values (ETC, EAC, actual work variances)
4. The **Self** line item displays work values for the parent service; lines below are child investments
5. Filter by status using the **Status** field

> [!TIP]
> To reflect actual effort in the hierarchy, run the **Investment Allocation** job.

### Examine the Financial Rollup

1. Open a service > **Hierarchy > Financial Rollup**
2. Examine parent and child services:

| Field | Description |
|-------|-------------|
| **Planned Cost** | Planned costs including roll-up from child investments (weighted by allocation %) |
| **Actual Cost** | Costs from invoices; for unapproved services, rolled up from child investments |
| **Remaining Cost** | Planned Cost − Actual Cost |
| **Planned ROI** | Return on investment including child investments |
| **Planned NPV** | Net present value including child investments |
| **Planned Benefit** | Sum of planned benefits from detailed budgets |
| **TCO** | Total Cost of Ownership — aggregated cost of running the service including all supporting investments |

3. Filter by status using the **Status** field

> [!NOTE]
> By default, both approved and unapproved child investments are displayed.

## Staff a Service Team

Services are not associated with tasks, and staffing them does not result in long-term commitments for resources.

### Add Resources or Roles

1. Open a service > **Team**
2. Click **Add** > select resources and roles

**Team staff page columns:**

| Column | Description |
|--------|-------------|
| **Properties icon** | Opens the resource profile; change allocations here |
| **Resource Finder icon** | Find and replace the resource |
| **Role** | Resource role for this assignment |
| **Time** | Yellow checkmark if resource can enter timesheet values |
| **Booking Status** | Hard / Soft / Mixed |
| **Start / Finish** | Allocation date range. Default: investment dates |
| **% Allocation** | Percentage of time allocated to the service |
| **Allocation** | Total hours tentatively booked |
| **Allocated Actuals** | Total hours posted to this investment |
| **Incident Actuals** | Time posted to incidents associated with this investment |
| **Total Actuals** | Allocated Actuals + Incident Actuals |

3. (Optional) Click **Add/Update by OBS** to add an entire OBS unit
4. When a resource is overbooked, choose:
   - **Overallocate** — Book at 100% regardless of availability
   - **Remaining Only** — Book only available hours

> [!NOTE]
> You cannot remove a resource if they have posted actuals or submitted pending actuals.

### Define Staff Requirements

1. Open the service > **Team**
2. Click the **Properties** icon for the resource or role
3. Edit:
   - **Start and Finish Date** — Allocation dates. Default: investment dates
   - **Default % Allocation** — Percentage of time allocated (0% allowed)
   - **Booking Status** — Soft / Hard / Mixed (set automatically)
   - **Investment Role** — Role for this assignment (e.g., Developer, Business Analyst)
   - **Open for Time Entry** — Enable timesheet logging. Default: Selected
4. In the **Resource Search** section, define **Planned Allocation** and **Hard Allocation** curves
5. Save changes

### Examine Role Capacity

1. Open a service > **Team > Role Capacity**
2. View role allocation and compare with other investments
3. Examine available capacity for each role
4. Resources without a team role appear in the **[No Role]** row
5. Click the **Staff** icon to open the team staff page for an over-allocated role

### Define Resource Allocations

1. Open the service > **Team**
2. Edit allocation fields: Role, Time, Booking Status, Start/Finish, % Allocation
3. Save changes

> [!NOTE]
> The **Allocation** column is not directly editable. Change it through allocation curves, Set Allocation, or Shift Allocation.

### Adjust Resource Allocations

Use allocation curves for date-specific deviations from the default allocation.

1. Open the service > **Team** > click the **Properties** icon
2. View **Planned Allocation** (requested by service manager) and **Hard Allocation** (committed by resource manager)
3. In **Default % Allocation**, enter the base percentage
4. Create one row for each deviation from the default (e.g., 50% for vacation overlap, 0% for time off)
   - Enter **Start**, **Finish**, and **% Allocation** for each period
5. Save changes

### Shift, Commit, or Accept Resource Allocations

1. Open the service > **Team** > select the resource check box
2. To **shift or scale allocations**:
   - Open **Actions > Shift Allocation**
   - Set the time span, shift-to date, shift cut-off date, and **Scale Allocation % By** percentage
3. To **commit planned allocation** (planned → hard):
   - Open **Actions > Commit Planned Allocation** > confirm with **Yes**
4. To **accept hard allocation** (reset planned to match hard):
   - Open **Actions > Accept Hard Allocation** > confirm with **Yes**
   - All soft segments are removed; booking status changes to Hard
5. Save changes

### Set Allocations for Multiple Team Members

1. Open a service > **Team** > select resource check boxes
2. Click **Actions > Set Allocation**
3. In the **General** section, set Start Date, Finish Date, and Default Allocation %
4. (Optional) Select **Clear existing allocation segments** to remove all existing segments
5. In the **New Allocation Segments** section, create new segments with Start, End, and % Allocation
6. Save changes

### Edit Planned and Committed Allocations

1. Open a service > **Team > Detail**
2. Examine allocations by resource and time period:
   - **Yellow** — Allocated at or under availability
   - **Red** — Over-allocated (booked hours exceed availability)
   - **Green** — Allocated to other investments, ideas, or services
3. Click in the graph to edit time-period values
4. Save changes

### Replace Resources on a Service Team

> [!NOTE]
> The replacement process can result in over-allocated resources. Advise the original staff member to complete and post time entries before the replacement.

1. Open a service > **Team**
2. Click the **Resource Finder** icon next to the resource to replace
3. Examine **Availability** (assignment period and hours) and **Availability Match** score (higher = better match)
4. Select a replacement resource and confirm

## Related Notes

- [[Demand Management]] — Incidents and ideas
- [[Financial Management Classic/Overview]] — Financial plans and chargebacks
- [[Resource Management Classic]] — Resource allocations
- [[_MOC Classic PPM]]

%%Source: p2204-2220%%
