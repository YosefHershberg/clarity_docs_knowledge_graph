# IT Service Management

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[13 - Classic PPM/_MOC Classic PPM|Classic PPM]]
- Canonical notes:
- [[13 - Classic PPM/IT Service Management]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Prerequisites for IT Service Management (#prerequisites-for-it-service-management)
- H2: Manage IT Services (#manage-it-services)
- H3: View a List of Services (#view-a-list-of-services)
- H3: Create or Edit a Service (#create-or-edit-a-service)
- H3: Schedule a Service (#schedule-a-service)
- H3: Define a Budget for a Service (#define-a-budget-for-a-service)
- H3: Enable Financial Transactions for a Service (#enable-financial-transactions-for-a-service)
- H3: Manage Incidents for a Service (#manage-incidents-for-a-service)
- H3: Define Dependencies for a Service (#define-dependencies-for-a-service)
- H3: Create and Update Baselines to Measure Progress (#create-and-update-baselines-to-measure-progress)
- H3: Manage Subscriptions and Department Chargebacks (#manage-subscriptions-and-department-chargebacks)
- H3: Evaluate Capacity Planning Scenarios for a Service (#evaluate-capacity-planning-scenarios-for-a-service)
- H2: Build a Service Hierarchy (#build-a-service-hierarchy)
- H3: Service Hierarchies (#service-hierarchies)
- H3: Define Parent Investments and Allocations (#define-parent-investments-and-allocations)
- H3: Define Child Investments and Allocations (#define-child-investments-and-allocations)
- H3: Examine the Effort Rollup for a Service (#examine-the-effort-rollup-for-a-service)
- H3: Examine the Financial Rollup for a Service (#examine-the-financial-rollup-for-a-service)
- H2: Staff a Service Team (#staff-a-service-team)
- H3: Add Resources or Roles to a Service Team (#add-resources-or-roles-to-a-service-team)
- H3: Define Staff Requirements for a Service (#define-staff-requirements-for-a-service)
- H3: Examine Role Capacity for a Service (#examine-role-capacity-for-a-service)
- H3: Define Resource Allocations for a Service (#define-resource-allocations-for-a-service)
- H3: Adjust Resource Allocations for a Service (#adjust-resource-allocations-for-a-service)
- H3: Shift, Commit, or Accept Resource Allocations (#shift-commit-or-accept-resource-allocations)
- H3: Set Allocations for Multiple Team Members (#set-allocations-for-multiple-team-members)
- H3: Edit Planned and Committed Allocations for a Service (#edit-planned-and-committed-allocations-for-a-service)
- H3: Replace Resources on a Service Team (#replace-resources-on-a-service-team)
- H2: Review Processed Transactions (#review-processed-transactions)

IT services represent a subset of Classic PPM investments such as deploying a new platform or application. As a service manager, you analyze services relative to other investments for their value and cost. Use the IT service management capabilities of the product to implement the following business and IT goals:
- Manage your services and make informed financial decisions. For example, you can view aggregated financial and effort data to determine the total cost of ownership.
- Share investments and services across other investments and services. Each child investment or service can have allocations that define how much a service is shared. You can define the percentage value each child investment or service is allocated to a parent investment in a hierarchy.
- Define budget information, create financial plans, and enable the investment for financial transactions.
- Staff a team to work on the service and related demand (requests or incidents).
- Use processes to notify a manager when the status of an investment changes. You can also define a process to perform actions, such as changing the progress to completed.
- Audit a historical record of all changes, additions, and deletions for specific investment fields.

> [!NOTE]
> Documentation steps may not match what you see in the product user interface. This difference can occur because all access to features, menus, pages, buttons, and objects is determined by your access rights. Your organization may also have configured the application, objects, processes, partitions, and user interface. Contact your administrator if you are not able to complete any of the steps in the documentation.

## Prerequisites for IT Service Management

As a service manager or IT analyst, complete these items to prepare for IT Service Management:
- Verify with your administrator that you have the required access rights for the features that you want to use. If you do not have access rights to specific services, they do not display on the list page. If you do not have view access rights to any service, the list is empty.
- Verify with your administrator that scheduled jobs are running properly. For example, the Investment Allocations job can influence data and performance in IT service management.
- Verify that you have access to the following commonly used IT service management reports:
- Budget/Forecast Analysis
- Chargeback GL Account
- Customer & Provider Chargeback
- Investment Status
- Project Transaction Inquiry
- Resource Assignments
- Timesheet Detail
- Capacity vs Demand By Resource (requires the PMO Accelerator)
- Capacity vs Demand By Role (requires the PMO Accelerator)
- Verify that your administrator has installed the PMO Accelerator add-in if you need access to the data that it provides.
- If you are using processes, your administrator can define processes for specific service types. Use the **Processes: Initiated** page to create and run processes on services. For more information, see Administrating.
- If you are using the audit capabilities, verify with your administrator that you have access rights to view the **Audit** menu. Contact your administrator to configure the audit fields and to determine the information that is stored in the audit trail. For more information, see Getting Started.

## Manage IT Services

As an IT Service Manager, use this article to manage your services in Classic PPM.
- View a List of Services
- Create or Edit a Service
- Schedule a Service
- Define a Budget for a Service
- Enable Financial Transactions for a Service
- Manage Incidents for a Service
- Define Dependencies for a Service
- Create and Update Baselines to Measure Progress
- Manage Subscriptions and Department Chargebacks
- Evaluate Capacity Planning Scenarios for a Service

### View a List of Services

You can view a list of your IT services and open the ones you want to explore.

Follow these steps:

1. Open **Home**, and from **IT Service Management**, click **Services**. The list page appears.
2. You can filter, sort, and reconfigure the services list page. The services that display in the list are sorted in ascending order by the service name. You can also save and use filters, build and use power filters, delete filters, and sort lists.
3. To open a service and view details or make edits, click a service by name.

### Create or Edit a Service

Use this procedure to create or edit a service.

> [!NOTE]
> Administrators and developers can also import a service from another system of record using the XML Open Gateway (XOG).

Follow these steps:

1. Open **Home**, and from **IT Service Management**, click **Services**.
2. Click **New** and complete the fields in the General section:
- **Main Application**: Defines the main parent application associated with the new child service.
- **Manager**: Defines the manager of the service. By default, the manager is the user who creates the service.
- **Start Date and Finish Date**: Defines when the service starts and ends. If you do not specify a start date and finish date, the software cannot calculate the allocations on the Team page.
- **Set Planned Cost Dates**: Specifies if the planned cost dates are synchronized with the service dates. Selecting the option for a detailed financial plan does not affect the planned cost dates. Default: Selected
- **Goal**: Defines the goal for the service that aligns it with your corporate strategy. Examples include Infrastructure Improvement (OPEX) or New Business Development (CAPEX). Your organization defines the values and your administrator sets them.
- **Alignment**: Indicates how the service aligns with the organization business goal. The higher the value, the stronger the alignment. The metric is used in portfolio analysis for comparable business alignment criteria. When you click **Save**, the numeric value you enter appears as one of the following status symbols:
- Red: Scores from 0 to 33 are not aligned.
- Yellow: Scores from 34 to 67 are somewhere in the middle.
- Green: Scores from 68 to 100 are aligned.
- **Status**: Indicates the status of the service in the service management lifecycle. Values: Approved, Rejected, Unapproved. Default: Unapproved
- **Status Indicator**: Displays a graphical representation of the status. For example, if the status is Approved, you can visually represent the status as a green stoplight. Values: Red, Yellow, and Green. When saved, the selection displays as a stoplight symbol.
- **Stage**: Defines the stage in the investment lifecycle. The list of choices is company-specific and depends on the values that your administrator sets. The metric is used in portfolio analysis when you use comparable stage criteria across all portfolio investments.
- **Priority**: Indicates the relative importance to the organization business goal. The metric is used in portfolio analysis when you use comparable priority criteria across all portfolio investments. Limit: zero (low) to 36 (high). Default: 10
- **Risk**: Indicates the numeric score for risk. Lower the value, lower is the risk. The metric is used in portfolio analysis when you use comparable risk criteria across all portfolio investments. Enter a numeric value. When saved, one of the following stoplight symbols is displayed:
- Green: Score from 0 to 33 indicates low risk.
- Yellow: Score from 34 to 67.
- Red: Score from 68 to 100 indicates high risk.
- **Required**: To indicate that the investment meets a business requirement, select this check box. This attribute is used to track investments in portfolios, portlets, or graphs.
3. In the **Organizational Breakdown Structure** section, associate an OBS with the service for security, organizational, or reporting purposes. When editing properties, if a department is selected on the financial properties page, the field can be auto-populated. The OBS named Department is used to associate the service with a department. If multiple OBS units of the same name exist, the department is listed last.
4. Save the changes.
5. To hide a service (set to inactive), open it and clear the **Active** check box.
6. To delete a service, select the check box next to the service and click **Mark for Deletion**.

### Schedule a Service

Use this procedure to set the schedule, enable time entry, and define a charge code for a service.

Follow these steps:

1. Open **Home**, and from **IT Service Management**, click **Services**.
2. Open a service.
3. Open the **Properties** menu, and from Properties, click **Schedule**.
4. Complete the fields in the Schedule section:
- **Start Date and Finish Date**: Defines when the service starts and finishes. If you do not specify a start date and finish date, the software cannot calculate the allocations on the Team page.
- **Set Planned Cost Dates**: Indicates if planned cost dates are synchronized with the service start and finish dates. Select the check box to synchronize.
5. Complete the fields in the Tracking section:
- **Time Entry**: Indicates if staff members can enter time on their timesheets for the work that they perform for the service. Select the check box to enable the service for time entry. To report their time, each staff member must also be enabled for time entry.
- **Track Mode**: Indicates the tracking method used to enter time for the service.
- **PPM (Default)**: Staff members enter time against their assigned tasks using timesheets.
- **None**: Non-labor resources, such as expenses, materials, and equipment track actuals through transaction vouchers, or through a scheduler, such as Open Workbench or Microsoft Project.
- **Other**: Indicates that actuals are imported from a third-party program.
- **Charge Code**: Defines the charge code associated with the service. Charge codes help process financial transaction and in financial planning, to track the actuals. If you enter a different charge code at the task level on timesheets, the task level charge codes override them.
6. Save your changes.

### Define a Budget for a Service

Use a simple budget to define the planned cost, benefit, net present value (NPV), return on investment (ROI), and breakeven information for the service. A detailed financial plan lets you budget costs over multiple periods. When you set the start and end date for a budget, funding flows constantly and evenly over the period.

> [!NOTE]
> Data from any detailed plans override the simple budget, and the fields on the page become read-only.

Finance managers set up defaults that define how financial plans can be created and the financial time periods used. The investment managers create multiple financial cost plans as estimates for a budget. They can submit the most appropriate cost plan for approval as a budget. Finance managers approve the submitted cost plans.

Follow these steps:

1. Open a service.
2. Open the **Properties** menu, and click **Budget**.
3. Complete the fields in the financial planning section:
- **Currency**: Specifies the currency for calculating the budget and forecast values.
- **Budget equals Planned Values**: Specifies if the budget values in the budget properties of an investment match the planned values. If a detailed budget plan exists for the investment, all the field values in the Budget section are display-only. The fields reflect the values in the detailed budget plan. When the check box is cleared, you can edit the budget fields. Default: Selected
- **Calculate Financial Metrics**: Specifies if financial metrics for the investment are calculated automatically. If unselected, you can define the financial metrics manually. Default: Selected
4. Complete the fields in the financial metrics options section:
- **System Rate**: Displays the system rate for calculating the total cost of capital.
- **Investment Rate**: Displays the investment rate for calculating the total cost of capital.
- **Initial Investment**: Defines the initial investment on the service.
- **Use System Reinvestment Rate**: Select the field to calculate the total cost of capital at the system reinvestment rate.
5. Complete the fields in the planned section:
- **Planned Cost**: Defines the total planned cost for the investment. The value is distributed between the Planned Cost Start and the Planned Cost Finish dates.
- **Planned Cost Start**: Defines the scheduled start date for the investment budget.
- **Planned Cost Finish**: Defines the scheduled finish date for the investment budget.
- **Planned Benefit**: Defines the anticipated financial benefit for the investment. The value is distributed between the planned benefit start and finish dates.
- **Planned Benefit Start**: Defines the scheduled start date for the investment benefit.
- **Planned Benefit Finish**: Defines the scheduled finish date for the investment benefit.
- **Planned NPV**: Displays the planned net present value (NPV), calculated as: `Planned NPV = Planned Benefit - Planned Cost`
- **Planned ROI**: Calculated as: `Planned ROI = Planned NPV / Planned Cost`. Default: Locked
- **Planned Breakeven**: Displays the date and amount to indicate the period and value at which the program becomes profitable. Default: Locked
- **Planned IRR**: Displays the planned internal rate of return for the investment.
- **Planned MIRR**: Displays the planned modified internal rate of return (MIRR) for the investment.
- **Planned Payback Period**: Displays the date of the investment planned payback period.

> [!NOTE]
> You can make the Planned NPV, Planned ROI, and Planned Breakeven fields available for data entry. To make these fields available, clear the **Calculate NPV Data** field.

6. Complete the fields in the Budget section:
- **Budget Cost**: Displays the total budgeted cost for the investment.
- **Budget Cost Start**: Displays the budgeted cost start date of an investment.
- **Budget Cost Finish**: Displays the budgeted cost finish date of an investment.
- **Budget Benefit**: Displays the budgeted benefit for an investment.
- **Budget Benefit Start**: Displays the budgeted benefit start date of an investment.
- **Budget Benefit Finish**: Displays the budgeted benefit finish date of an investment.
- **Budget NPV**: Displays the budgeted NPV (Net Present Value) of this investment.
- **Budget ROI**: Displays the budgeted ROI (Return on Investment) of this investment.
- **Budget Breakeven**: Displays the date when the investment budgeted cost equals the budgeted benefit.
- **Budget IRR**: Displays the budgeted internal rate of return for the investment.
- **Budget MIRR**: Displays the budgeted modified internal rate of return for this investment.
- **Budget Payback Period**: Displays the date of the investment budgeted payback period.
7. Save your changes.

### Enable Financial Transactions for a Service

You can enable the service for financial processing. Identify the location, department, and other attributes that are used when processing financial transactions. You can also define transaction rates for the following entities for each service:
- Labor
- Material
- Equipment
- Expense

Verify that the following items exist before enabling a service for financial transactions:
- Entity, WIP, and investment classes and locations.
- Rate and cost matrices.
- A department.

Follow these steps:

1. Open the service.
2. Open the **Properties** menu, and click **Settings**.
3. Complete the fields in the Financial section:
- **WIP Class**: Defines the work-in-process class used to match the investment with rate and cost matrices. The WIP class can also be used for reporting purposes.
- **Investment Class**: Defines the investment class used to match the investment with rate and cost matrices. The investment class can also be used for reporting purposes.
- **Department**: Defines the department used during transaction processing of chargebacks to charge or credit departments for costs. The department can also be used to match the investment with rate and cost matrices. If a department is selected on the general properties page, this field is auto-populated. Required for chargebacks.
- **Location**: Defines the location that is used to match the investment with debit and credit rules for transaction processing of chargebacks. If system or entity defaults indicate that the source location is taken from the investment, use location to match the investment with rate and cost matrices.
4. In the **Transaction Matrix** sections for Labor, Material, Equipment, and Expense, enter the following for each transaction type:
- **Rate Source**: Defines the rate used during transaction processing to charge for the cost of labor, materials, equipment, or expenses associated with the service.
- **Cost Source**: Defines the cost of the labor, materials, equipment, or expenses associated with the service.
- **Exchange Rate Type**: If multicurrency is enabled, the exchange rate type indicates how rates and costs are converted.
5. Save your changes.

### Manage Incidents for a Service

Use incidents to track the IT demand from users and the work performed by IT analysts on your services. Incidents can include problems, issues, defects, and other requests.

Follow these steps:

1. Open a service.
2. Open the **Properties** menu and click **Incident Categories**.
3. Select the incident categories to associate with the service, and click **Add**. Incident categories group incidents to capture and assess the cost incurred and to view resource utilization.

> [!NOTE]
> Your administrator sets up and maintains the incident categories. Administrators can also associate any service collectively to an incident category.

4. Click **Save and Return**.
5. To view a list of incidents, open the **Properties** menu, and click **Incidents**.
6. To create a new incident, click **New**.
7. To reassign an incident, click **Reassign**.
8. To convert an incident into a task or project, click **Convert**.

### Define Dependencies for a Service

Dependency relationships exist between services in your portfolio. Dependencies can occur between the start and completion of conflicting tasks, or from budget overruns. You can define investments that depend on your service, and can indicate when your service depends on another investment.

Follow these steps:

1. Open a service.
2. Open the **Properties** menu, and click **Dependencies**.
3. Select a mode to add the following:
- **Investments that depend on this one**: Displays other investments that are dependent on your investment.
- **Investments this one depends on**: Displays other investments that your investment is dependent on.
4. Click **Add** to add more dependencies to your investment. The select investments page appears.
5. Enter the Name and select the investment type in the **Type** field, or click **Show All**.
6. In the **Investment Filter** section, select the investment names check box, and click **Add**.
7. Save your changes.

### Create and Update Baselines to Measure Progress

Often used with projects, baselines are also available to capture snapshots of total planned effort and estimated costs for a service. A baseline is static. The changes that you make to a service after you create a baseline do not automatically appear in the current baseline. However, you can update a baseline to include new information.

> [!NOTE]
> Incident actuals represent unplanned work and are not part of the total effort for baselines.

Create an initial baseline before you enter any resource time. Create more baselines at intervals including mid-way through the service, when different phases are complete, and when the service is complete. The initial baseline lets you compare estimates to actuals when the service is underway.

Follow these steps:

1. Open a service.
2. Open the **Properties** menu, and click **Baseline**. The baselines page appears.
3. To edit a service baseline, click the name of a baseline revision on the page.
4. To create a baseline, click **New**. The properties page appears.
5. Complete the following fields:
- **Revision Name**: Defines the name of the baseline revision. Example: Initial Baseline, Mid-Term Baseline, or Final Baseline. Required: Yes
- **Revision ID**: Defines the unique identifier for the baseline revision. Example: The baseline version number, such as v1 or v5. Required: Yes
- **Description**: Defines the description for the baseline revision. Required: No
- **Current Revision**: Defines a baseline revision as the current baseline. The field is display only if a baseline revision exists. By default, the baseline you create last becomes the current project baseline. If you have defined only one baseline, that becomes the current baseline. Default: Selected
6. Save the changes.
7. View the following work effort and cost information for a baseline. The information is taken from the columns on the baseline revisions page of service properties:
- **Usage**: The total effort (actuals plus remaining ETC) at the time the baseline was taken. The actuals are posted against the assignments of the service.
- **BCWP**: Budgeted cost of work performed at the time the baseline is taken. The cost is the BAC value times the summary level percent complete.
8. (Optional) Use baselines to perform an Earned Value Analysis (EVA) on service performance. An EVA shows how much you have spent on your service and the completed work to date.

> [!NOTE]
> Define rates for the service staff and run the **Rate Matrix Extraction** job before baselining to get cost baseline values. Complete the percent values on summary tasks before baselining to get BCWP baseline values.

9. To update a baseline, open the **Properties** menu, and click **Baseline**. The service baseline page appears.
10. Select the check box next to the baseline.
11. Click **Update Baseline**. The confirmation page appears.
12. Click **Yes**. The most recently created baseline becomes the service current baseline by default. If you delete the current revision baseline and more than one baseline exists, then the most recent baseline becomes the current revision. When an investment has one baseline, that baseline is marked as the Current baseline. The baseline displays in the list with a yellow checkmark in the Current column. Open a baseline to make it the current baseline, select the **Current Revision** field, and save the baseline revision.

### Manage Subscriptions and Department Chargebacks

A subscription is a request by a department to receive a service. Subscribing departments become consumers of the service. The department managing the service becomes the service provider. As a service provider, use subscriptions to manage relationships with subscribing departments. The subscriptions include costs charged to the subscribing department for services delivered.

You can view a list of all departments that have subscribed to a service, and add or remove departments from the subscription list. Department managers can also subscribe their departments to services. For more information on chargebacks, see Financial Management.

Follow these steps:

1. Open a service.
2. Open the **Properties** menu, and click **Subscriptions**.
3. Browse or filter subscriptions. Monitor the following information:
- **Customer Department**: Displays the department that has subscribed to the service.
- **Incidents**: Displays the number of incidents that the subscribing department has logged against the service.
- **Charges**: Displays the aggregate charges that the subscribing department has currently approved for the delivered service.
- **SLA Violations**: Defines the number of service level violations that the subscribing department had logged against the service.
4. To subscribe a department:
   a. Click **Add**. The add subscriber departments page appears.
   b. Browse or filter departments to add to the subscription list, and click **Add**.
   c. Click **Return**.

> [!NOTE]
> To charge a department for the delivered service, update the chargeback debit rule by adding GL allocations for the newly subscribed department. Work with your IT finance manager and the subscribing department manager to determine when to start charging back for services.

5. To remove a subscription:
   a. Select the check box next to each customer department to cancel the subscription, and click **Remove**. The confirmation page appears.
   b. Click **Yes**.

> [!NOTE]
> When you cancel a subscription, be sure to update the chargeback debit rule, and remove the GL allocation for the department. Otherwise, the department continues to be charged for services.

### Evaluate Capacity Planning Scenarios for a Service

Scenarios allow you to apply a systematic methodology to optimize a service. Apply scenarios to the service to analyze how staffing changes or shifts in dates affect the outcome of your investment.

Follow these steps:

1. Open a service.
2. In the scenario toolbar below the page toolbar, select a capacity planning scenario. The scenario is set as the current scenario.
3. Evaluate the service by switching between a scenario and the plan of record.
4. (Optional) To create a capacity planning scenario, click **Create** in the scenario toolbar.

## Build a Service Hierarchy

As an IT service manager, use this article to build a service hierarchy. You can manage services in a hierarchy with other investments including projects, assets, applications, products, services, and other work.
- Service Hierarchies
- Define Parent Investments and Allocations
- Define Child Investments and Allocations
- Examine the Effort Rollup for a Service
- Examine the Financial Rollup for a Service

### Service Hierarchies

The financial hierarchy displays an aggregation of the planned cost, actual cost, and remaining cost for your investments. The time-varying values factor in the investment allocation percentages that you have defined. The financial rollup and the effort rollup are hierarchical representations of the investments, services, and ideas that comprise your service.

As you build your hierarchy, the planned costs for a child investment or service roll up to the parent service. These aggregated costs appear on the financial rollup. Similarly, the associated child investment or service aggregated work values roll up to the parent service on the effort rollup.

You can also share services between other investments, services, and ideas. For example, you can share a database server that supports two software applications. You could achieve the following goals:
- Add the software applications as child investments to the database server investment hierarchy.
- Edit the child investment or service cost allocation percentage and time segments.

Your service investment allocation percentage determines what portion of a service is allocated to another service, investment, or idea. All cost data in the investment hierarchy is based on the allocation percentages.

### Define Parent Investments and Allocations

You can add one or more parent investments to a service. Under each parent, define the allocations for each child investment in the service hierarchy. Investment and service allocations can be split among more than one parent investment. The total combined allocation is always 100 percent.

Follow these steps:

1. Open a service.
2. Open the **Hierarchy** menu and click **Parents**.
3. Click **Add** to select one or more investments that you want to designate as parent investments.
4. In the **Allocation** field, enter the allocation percentage for the parent investment.
5. To remove a parent, select the check box for the investment and click **Remove**.
6. Save the changes.

### Define Child Investments and Allocations

As a service owner or investment manager, define the allocations for each child investment and service in the hierarchy. When you add the first child investment to your service, its allocation is set to 100 percent. You can edit the allocation percentage for a child service, investment, or idea. Child investment cost totals are automatically aggregated in the parent service based on the investment allocation percentages.

Follow these steps:

1. Open a service.
2. Open the **Hierarchy** menu and click **Financial Rollup**.
3. Select the check box next to the desired child service, and click **Add Child**.
4. Select the check box next to the investments and click **Add**.
5. Click **Return**.
6. Click the allocation amount for the child investment. The set allocations page appears.
7. In the **Allocation** field for your service, enter the child investment percentage that is allocated to the parent service or investment.
8. Save the changes.
9. To remove a child service from the financial rollup, select the check box for the service and click **Remove**.
10. Click **Return**.

### Examine the Effort Rollup for a Service

You can view the total work effort that was performed on the approved or unapproved investments, services, and ideas in the hierarchy.

Follow these steps:

1. Open a service.
2. Open the **Hierarchy** menu, and click **Effort Rollup**.
3. To view each service including any parent or child services, expand or collapse the items in the hierarchy.
4. Examine the aggregation of the child service labor-related information including the ETC, EAC, and actual work variances. The aggregation takes into account the child investment or service allocation percentages.
5. Depending on the view you select in the hierarchy, the **Self** line item displays the work values or costs for the parent service. The line items below the Self line are for any child investments or services.
6. To filter the list, select an option from the **Status** field.
7. To adjust allocations to align with business goals, you can also add or remove child investments or services.

> [!TIP]
> To reflect actual effort in the hierarchy, run the **Investment Allocation** job.

### Examine the Financial Rollup for a Service

You can view financial data in a hierarchical list that shows your child investments, services, and ideas. All the child costs and benefits are rolled up to the parent service and appear on the parent service line item.

You can track the costs incurred to build, maintain, and support your service. You can also track the allocation percentages, planned costs, actual costs, remaining costs, planned benefits, planned ROI, and planned NPV. You can modify the service by adding or removing child investments.

Follow these steps:

1. Open a service.
2. Open the **Hierarchy** menu, and click **Financial Rollup**.
3. Examine the parent and child services in the financial rollup including values for the following fields:
- **Planned Cost**: The planned costs for the investment including the costs rolled up from any child investments based on their allocation percentages.
- **Actual Cost**: The costs incurred from invoices. If the service is unapproved, the actual costs are also rolled up from the child investment or service. The costs are rolled up after the investment allocation percentage is factored in.
- **Remaining Cost**: The difference between the planned costs and the actual costs.
- **Planned ROI**: The planned return on the investment and its child investments.
- **Planned NPV**: The net present value on the investment and its child investments.
- **Planned Benefit**: The sum of the planned benefit from the investment, service, or idea detailed budget. The planned benefit represents the anticipated future revenues for the investment.
- **TCO**: The total cost of ownership is the aggregated amount of costs derived from running or operating a service. Operating a service involves managing all supporting investments such as projects, applications, and ideas. The TCO metric tracks costs and shared allocations. Use TCO to manage a service budget and compare aggregated costs accrued from other investment types.
4. To determine TCO, add one or more child investments to a service. View the aggregated cost and labor totals from the hierarchical bill of investments.
5. To filter the list, select an option from the **Status** field.

> [!NOTE]
> By default, the service financial and effort rollups display a list of approved and unapproved child investments.

6. To adjust allocations to align with business goals, you can also add or remove child investments or services.

## Staff a Service Team

As a manager, you can assign a team of resources or roles to work on a service. You can implement many of the same features that are available for projects. For example, when working with service teams, you can engage in the following activities:
- Plan capacity by role.
- Add or update resources and roles by OBS.
- Change staff roles and requirements.
- Shift and scale allocations for roles or resources.

IT analysts, engineers, consultants, and other staff can record the time that they work on services, incidents, and requests on their timesheets.

> [!NOTE]
> Services are not associated with tasks and staffing them does not result in long-term commitments for any resources.
- Add Resources or Roles to a Service Team
- Define Staff Requirements for a Service
- Examine Role Capacity for a Service
- Define Resource Allocations for a Service
- Adjust Resource Allocations for a Service
- Shift, Commit, or Accept Resource Allocations
- Set Allocations for Multiple Team Members
- Edit Planned and Committed Allocations for a Service
- Replace Resources on a Service Team
- Change Staff Member Roles on a Service

### Add Resources or Roles to a Service Team

To staff a service, add specific named labor resources, nonlabor resources, or roles as placeholders.
- Resources are automatically allocated at 100 percent of their available working days.
- You can adjust allocations, over-allocate resources, or automatically allocate only the remaining availability of the resource.
- You can add multiple instances of a role to a service but not multiple instances of the same named resource. For example, assign a developer role twice to represent two different requirements for a resource with developer skills.

Follow these steps:

1. Open a service and click **Team**.
2. Review the team staff page for the service before you add more staff. The page contains the following columns and icons:
- **Properties icon**: Opens the resource profile. You can view profile information and change allocations, including planned and hard allocations.
- **Resource Finder icon**: Opens the Find Resources page for the selected resource. You can replace the resource or role with a different one.
- **Resource Allocation**: Opens the Resource/Role Allocations page. You can update the resource allocation.
- **Role**: Displays the role of the resource for this assignment. The role can be different from the primary role selected in the resource profile.
- **Time**: Displays a yellow checkmark if the resource or role is allowed to enter timesheet values for this investment.
- **Booking Status**: Displays one of the following resource or role booking status values:
- **Hard**: The resource is committed to the investment.
- **Soft**: The resource is tentatively scheduled for the investment.
- **Mixed**: Both soft and hard allocation exist for the resource.
- **Start**: Displays the team member allocation start date. If the date is not defined, the default is the start date of the investment.
- **Finish**: Displays the team member allocation finish date. If the date is not defined, the default is the finish date of the investment.
- **% Allocation**: Displays the percentage the team member is allocated to the investment.
- **Allocation**: Displays the number of hours the resource is tentatively booked to the investment. Unless you change the booking dates, staff members are automatically booked for the entire duration. You cannot directly edit the allocation. You can change the allocation using:
- The setting allocation options
- The new allocation curves that are defined on the resource staff member properties page
- The **Shift Allocation** option
- **Allocated Actuals**: Displays the total number of hours of the resource to date on the investment.
- **Incident Actuals**: Displays the time posted to incidents associated with this investment.
- **Total Actuals**: Displays the aggregated total actual time posted against the investment. The value is the sum of the allocated actuals and the incident actuals.
3. To add resources and roles, click **Add**. The select resource page appears.
4. Select the resources and roles to add to your service staff.

> [!NOTE]
> Use a role as a placeholder when you do not know the name of the resource. Or, use role if the resource is not available for staffing on your service.

5. Use the **Search Filter** to find resources or roles by name or other criteria.
6. Click **Add** to add the resources or roles you select.
7. (Optional) To add team members to your service at the OBS level, click **Add/Update by OBS**.
8. (Optional) You can book overallocated resources to a service. When the available hours are less than the number of requested hours, the remaining availability confirmation page appears to indicate that the resource is overbooked.
- If you book the resource at 100 percent (default) of their availability, the 100% Resource Allocation column lists the number of hours used.
- The **Remaining Availability** column indicates the actual number of work hours the resource has available to work on the service. Select one of the following options:
- **Overallocate**: Over-allocates the resource.
- **Remaining Only**: Books the resource for the amount that is listed in the Remaining Availability column.
9. (Optional) To remove a resource, select its check box and click **Remove**.

> [!NOTE]
> You cannot remove a resource if they posted actuals or if they submitted actuals pending for the service.

10. Save your changes.

### Define Staff Requirements for a Service

After adding the resource or role to your service, use the resource or role staff member page to modify the staffing requirement.

Follow these steps:

1. Open the service and click **Team**.
2. Click the **Properties** icon for the resource or role.
3. Edit the staff member properties:
- **Requirement Name**: Displays the name of the staffing requirement.
- **Start and Finish Date**: Defines the team member allocation start date and finish date for the investment. Default: The investment start date and the investment finish date.
- **Default % Allocation**: Defines the percentage of time to allocate the resource to the investment (you can enter 0 percent). The change updates the Allocation and Allocation % columns on the investment team staff page.
- **Booking Status**: Indicates the commitment level for the staff member allocation. Staff member bookings are soft, hard, or mixed. The booking status is set automatically when team members are booked or their allocation changes.
- **Request Status**: Determines the staffing requirement type. Default: New
- **Resource**: Displays the resource associated with the requirement.
- **Investment Start and Finish Date**: Displays the start and finish date of the investment.
- **Investment Role**: Defines the role for which resources are requested for the investment. Example: Developer, Business Analyst, Architect
- **Staff OBS Unit**: Defines the Staff OBS Unit. Default: The investment Staff OBS Unit value, if defined.
- **Open for Time Entry**: Specifies if the resource can use timesheets to track time that is spent on task assignments. When cleared, the resource cannot log time on any project. Default: Selected
4. Complete the following fields in the **Resource Search** section:
- **Resource Employment Type**: Indicates if the resource is a contractor or a full-time employee.
- **Resume Keywords**: Defines the keywords from the resume of the resource.
- **Planned Allocation**: Defines the total percentage of time the resource is planned to be allocated to the investment, as requested by the investment manager. The allocation also specifies the start and end dates.
- **Hard Allocation**: Defines the total percentage of hard-booked allocation of the resource to the investment (as entered by the resource manager). The allocation also specifies the start and end dates of the allocation. No hard allocation value exists until the resource manager hard-books the allocations.
5. Save the changes.

### Examine Role Capacity for a Service

Use the aggregated view of all role demand to plan the staffing requirements for a service. You can examine the capacity of each resource by role.

Follow these steps:

1. Open a service and click **Team**.
2. Click the **Team** menu and select **Role Capacity**.
3. View role allocation for the service and compare it with the allocations for other investments or services. The investment hierarchy aggregates the data of a role and each subinvestment allocates a specific percentage to the service.
4. View available role capacity for the service and subinvestments.
5. You can also view resources without a team role in the **[No Role]** row.
6. (Optional) View this information from inside or outside a scenario. For example, a role can appear to be over-allocated. Click the **Staff** icon to open the team staff page and examine the resources that are using the role.

### Define Resource Allocations for a Service

A staff allocation represents the assignment of a specific resource to a service. Staff members are automatically booked for the entire duration of the service. You can change the booking dates and other staff allocation information.

Follow these steps:

1. Open the service, and click **Team**.
2. Edit the following fields:
- **Resource**: Displays the resource name. Click the resource name link to open the resource properties.
- **Role**: Defines the resource role for the investment.
- **Time**: Indicates if the resource can enter time for their completed work on the investment.
- **Booking Status**: Indicates the resource booking status for the investment.
- **Start and Finish**: Defines the start and finish dates the resource is booked to the investment. When you change the dates, the value in the Allocation column is updated.
- **% Allocation**: Defines the default amount this resource is allocated to this investment. You can enter zero (0) as the allocation percentage. Changes also update the value in the Allocation column.
- **Allocation**: Displays the number of hours the resource is tentatively booked. An allocation amount is generated for each resource by multiplying the total number of working days between the service start and finish dates (including the start and finish dates) by the number of hours the resource is available to work each day. ETC is based on the number of hours a resource is assigned to the service.
- **Allocated Actuals**: Displays the total number of hours that the resource has been assigned to this investment.
- **Incident Actuals**: Displays the time posted to incidents associated with this investment.
- **Total Actuals**: Defines the total actuals posted for this resource.
3. Save the changes.

### Adjust Resource Allocations for a Service

You can adjust resource allocations including extending a resource assignment or unbooking a hard-booked resource.

For example, the planned or default allocation for a resource is 100 percent. The resource is booked to work on your service from April 1 to July 1. The resource is also scheduled to work on another service 50 percent of the time from April 1 to April 30. The resource plans to be away on vacation from May 15 to May 22. In this case, you can create two allocation curves. One curve indicates a deviation to 50 percent from April 1 to April 30. Another curve indicates a deviation to 0 percent from May 15 to May 22.

Follow these steps:

1. Open the service, and click **Team**.
2. Click the **Properties** icon next to the resource and examine the following items:
- **Planned Allocation**: This curve represents the total planned (default) allocation amount that the service manager originally requested.
- **Hard Allocation**: This curve represents the allocation amount that the resource manager commits.

> [!NOTE]
> The booking status for a resource automatically adjusts to changes in the planned and hard allocation curves. The project management **Allow Mixed (default) Booking** setting determines your ability to view the Hard Allocation section.

3. In the **Default % Allocation** field, enter the percentage of time for the resource that is allocated to the service. For example, enter 0, 50, or 100 percent. The change is reflected in the Allocation and Allocation % columns on the team staff page.
4. Examine the planned and hard allocations for your services and identify deviations from the Default % Allocation field.
5. Create one row for each deviation from the default allocation. Continuing our example at the beginning of this topic, create two rows:
   a. One row represents the period when the resource works at 50 percent.
   b. A second row represents the period when the resource works at 0 percent (out of office).
6. To create a planned or hard allocation period:
   a. Enter a **Start** date for the period.
   b. Enter a **Finish** date for the period.
   c. Enter the percentage of time you expect them to work (as tentative or committed) in the **% Allocation** field. For example, enter 0, 50, or 100 percent.
7. Save the changes.

### Shift, Commit, or Accept Resource Allocations

You can make the following types of changes to resource allocations:
- **Shift Allocation**: You can shift or scale all or a portion of the resource allocations in a service. Shift allocations to extend them beyond the allowable time-scaled view, which is six months. For example, an allocation starts May 1 at its default rate of 100 percent until May 31. The allocation extends through June at the reduced allocation of 50 percent. If you change the start to June 1, the allocation shifts from June 1 through July 1 (31 calendar days) at 100 percent. Then it extends through August 2 at 50 percent. You can also shift allocations for time spans that contain no segments.
- **Commit Planned Allocation**: You can set the hard allocation to equal the planned allocation. To hard-book the segments, edit the planned allocation segment for a resource. A resource with a hard booking status implies that the resource is fully committed. Committing planned allocation does not reset the default allocation percentage.
- **Accept Hard Allocation**: You can remove soft-booked segments in the Planned Allocation section. All segments are reset to equal the hard-booked committed segments.

Follow these steps:

1. Open the service, and click **Team**.
2. Select the check box next to the resource to shift allocations.
3. To shift or scale allocations:
   a. Open the **Actions** menu, and click **Shift Allocation**.
   b. In the **Time Span to Shift** section, change the start and finish dates that the resource is allocated to work on the service. As you move data, segmented allocation dates are kept intact, even when the percent allocated for each segment changes.
   c. In the **Time Shift Parameters** section:
- In the **Shift to Date** field, enter the date when you want the shifted allocation to begin.
- In the **Shift Cut-off Date** field, enter the ending date for shifting allocations. Allocations cannot shift beyond the last date.
- In the **Scale Allocation % By** field, enter the percentage change in the allocation that is required for the shift.
4. To commit the planned allocation so that it becomes the hard allocation:
   a. Open the **Actions** menu, and click **Commit Planned Allocation**. The confirmation page appears.
   b. Click **Yes**.
5. Conversely, to accept the hard allocation and reset the planned allocation to match the hard allocation:
   a. Open the **Actions** menu, and click **Accept Hard Allocation**. The confirmation page appears.
   b. Click **Yes**. All allocations are fully committed. All segments are reset to equal the hard-booked committed segments. The Booking Status value changes to Hard. The % Allocation and Allocation column values are updated.
6. Save the changes. The changes appear in the Allocation column on the staff page of the service team.

### Set Allocations for Multiple Team Members

You can set the allocations of multiple team members at the same time.

Follow these steps:

1. Open a service and click **Team**.
2. Select the check box next to the resource to update allocation.
3. Click the **Actions** menu, and click **Set Allocation**.
4. In the **General** section, set the following allocations for the selected team members:
- **Start Date and Finish Date**: Defines the dates when the allocation starts and ends. Select the **Reset to Match Investment Start Date** check box to reset the resource staffing requirements to match the service start and finish dates.
- **Default Allocation %**: Defines the resource allocation for the service.
5. Select the **Clear existing allocation segments** check box in the **Existing Allocation Segments** section of the page. Such selection removes all allocation segments for the selected team members.
6. To create an allocation segment for the selected team members, complete the following fields in the **New Allocation Segments** section:
- **Start and End**: Defines the dates when the allocation starts and ends.
- **% Allocation**: Defines the percentage that the resource is allocated to the service.
7. Save the changes.

### Edit Planned and Committed Allocations for a Service

As a service manager, you want to answer the following questions:
- How much resource availability do I have for a service?
- Which resources are overbooked or under booked, and by how much?

You can examine the planned and committed allocation for a service by resource and by time period in a graph.

Follow these steps:

1. Open a service.
2. Click the **Team** menu and select **Detail**. Allocations appear by resource, allocation, and time period.
3. Scroll over a time period. A note with a brief summary appears.
4. Examine the time period columns and allocation colors. The columns are set to weekly by default, and always start with the current week.
- Yellow indicates resources that are allocated at or under availability for that time period.
- Red indicates resources that are over-allocated. The amount of time that is booked exceeds availability for that time period.
- Green indicates resource allocations to other investments, ideas, or services.
5. To edit the time-related values, click in the graph. For example, you can edit the time cells for each resource.
6. Save your changes.

### Replace Resources on a Service Team

You can replace the staff members who are assigned to a service team. Use the availability score to find a replacement with similar skills. You can replace a resource with a different resource and can replace a role with a resource.

> [!NOTE]
> The replacement process can result in over-allocated resources. If possible, advise the original staff member to complete and post their time entries before the replacement occurs.

Follow these steps:

1. Open a service, and click **Team**.
2. Next to the name of the resource to replace, click the **Resource Finder** icon.
3. Examine the following fields:
- **Availability**: Identifies the assignment period and the number of hours for the resource allocation. The replacement operation transfers the dates and the hours to a new replacement.
- **Availability Match**: Displays a score that factors in the duration of the assignment (work period) and the availability of each matching resource. The higher the score, the closer the match.

## Review Processed Transactions

You view all transactions posted to ensure that they are posted correctly. If you find an error, you can reverse the charges.

Follow these steps:

1. Click **Home**, **Financial Management**, **Transactions**. An alert message indicates that transactions appear after you select a GL period.
2. Select a GL period (fiscal period).
3. Specify any filter criteria for the transactions you want to review.
4. Review the transactions.
5. If transactions are incorrect and require adjustments, do one of the following:
   a. Click **Reverse Selected Charges**.
   b. Click **Reverse Filtered Charges** to reverse charges of all transactions listed. The selected transactions indicate that charges were reversed.
