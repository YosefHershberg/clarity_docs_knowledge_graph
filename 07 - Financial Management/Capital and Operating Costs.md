---
title: Display Capital and Operating Costs
tags:
  - howto
  - concept
aliases:
  - CapEx OpEx
  - Capitalization
canonical: true
audience: finance, pm
domain: financials
---
# Display Capital and Operating Costs

- Source Plan Name: Displays the source plan name. - Start Period: Defines the start copy period. Data is copied to the target plan based on this start period and the
target plan start period. Default: The source plan start period. - End Period: Defines the end copy period. Data is copied to the target pan based on this end period and the target
plan end period. Default: The source plan end period. - Scale By %: Defines the percentage by which to scale (increase or decrease) the dollar values in the copied plan.
6. Complete the following fields in the Target Benefit Plan section of the page. - Plan Name: Defines the target plan name. Default:

The name of the source plan is prefixed with "Copy of". - Plan ID: Defines the target plan unique ID. Default: The ID of the source plan is prefixed with "Copy of". - Period Type:
Displays the fiscal period type. Default: The fiscal period type of the source plan. You cannot change the default period type. - Plan Start Period:
Defines the target plan start period. Default: The start period of the source plan. - Plan End Period: Defines the target plan end period. Default:
The end period of the source plan.
7. Save the changes. The benefit plan properties appear displaying the newly copied benefit plan values.
8. Review the amount in the Total Benefit field that reflects the scaling percentage that is applied when copying data from the source plan.
9. Click Detail to review or change the benefit plan details. The total benefit amount is broken down for the new planning periods. Zero values appear for the periods that are no longer a part of the new benefit plan.
Display Capital and Operating Costs
You can show operating and capital costs separately on the financial summary page and in a detailed financial plan. You can enter the cost information in the following ways:
- For a high-level estimate, enter the sums for these expenses directly on the investment financial summary page. - For a more detailed view of cost type information, set up an investment financial plan that collects operating and capital
expenses. You can collect detailed cost information from task assignments or team allocations.
Financial Summary Page
The financial summary page for an investment displays high-level operating and capitalization costs for planned and budgeted costs.

You can edit the amounts on the financial summary until you create a cost plan of record (POR).
When you create a POR, the fields for operating and capitalization costs in the planned and budgeted cost sections of the financial summary become read-only.
The POR information updates the planned cost fields on the financial summary page automatically. The latest approved budget updates the budget fields.
Detailed Financial Plan
You can create a detailed financial plan manually, or you can populate the plan automatically from tasks or team allocations. To populate cost and budget plans automatically with capital and operating costs, use one of the following methods:
- Tasks: Specify an investment-level default (Capital or Operating) for all tasks. If you do not specify a cost type, the default is Operating.

You can override the default at the task or task hierarchy level for individual tasks as needed.
For example, you have an investment in which most tasks have operating costs, and a few tasks have capital costs.
Set the investment cost type as Operating so all tasks inherit the cost type of Operating.
For each task that has capital cost, edit the cost type in those specific tasks to override the default cost type.
- Team Allocations: Specify a capital cost percentage for individual team member allocations. For example, you have six team members who are assigned to a project.

Alice, one of the members, has capital cost of 15 percent. Specify the capitalization percentage for Alice.
The capitalization percentage is used to calculate the percentage of operating cost and capital cost for an employee allocation.
When you populate from the team allocation, Alice has two lines

in the cost plan. One line shows the operating percentage and the other shows units and costs per the operating percentage.
> [!warning]
> These steps describe the product navigation with no add-ins installed. If you have an add-in such as the PMO Accelerator installed, the navigation can vary.

The following diagram describes how a financial administrator displays capital and operating costs on summary and detailed financial plans. Figure 4:
This workflow image shows how a financial manager displays capital and operating costs on summary and detailed financial plans
Follow these steps:

- Review the Prerequisites - Manually Update the Financial Summary Page to Display Capital and Operating Costs - Select the Method for Collecting Cost Information and Create the

Plan - Set the Cost Type for Specific Investment Tasks - Set the Capitalization Percentage for Investment Team Allocations - Verify Your Capital and Operating Costs

## Review the Prerequisites
- Verify that you have the <investment> - Edit Financial access right assigned to you. - Associate the investment with an entity. - Verify that the investment has team allocations and tasks assignments if you plan to populate using these options.
Manually Update the Financial Summary Page to Display Capital and Operating Costs
To assist with high-level planning, you can manually add capital and operating amounts on the financial summary page.

For example, you have a new project and must deliver high-level, planned cost estimates. You can enter estimates for operating and capital costs.
Once you have created a cost plan of record (POR) or have an approved budget, these fields become read-only.
> [!tip]
> To display the correct costs on the Financial Summary page, select Cost Type as a grouping attribute. Cost Type does not need to be a grouping attribute on the Detailed Plan.
Follow these steps:
1. Click Home, Portfolio Management, and select an investment type.
2. Open an investment.
3. Click the Properties tab menu and select Financial Summary.
4. In the Planned Cost section, enter values for the following fields: Note: If the POR does not use the Cost Type
grouping attribute, the Planned Operating Cost field summarizes all costs as operating. - Planned Capital Cost Specifies the amount of capital cost that is planned for the investment. If the plan has a cost
POR, the values from the POR populate this field and it becomes read-only. - Planned Capital % Specifies the percentage of total cost that comes from capital. This read-only field is
automatically calculated based on the Planned Cost field value.

Planned Capital % = Planned Capital Cost - Planned Cost - Planned Operating Cost Specifies the amount of operating cost that is planned for the investment.
If the plan has a cost POR, the values from the POR populate this field and it becomes read-only.
- Planned Operating % The percentage of total costs that are from your planned operating costs (OpEx).
This read-only field is automatically calculated based on the Planned Cost field value. Planned Operating % = Planned Operating Cost - Planned Cost 5.
In the Budgeted Cost section, enter values for the following fields. Note:
If Cost Type is not a grouping attribute, then all values are combined in the Budgeted Operating Cost field.
- Budgeted Capital Cost Specifies the amount of capital cost that is budgeted for the investment. This field is unavailable when:

- A POR or approved budget exists. The value is populated from the approved budget. The field becomes readonly when a POR is created; however, if an approved budget does not exist, the budget fields are automatically populated with null cost values.
- The Budget Equals Planned Values check box is selected and detailed financial plans do not exist. - Budgeted Capital % Specifies the percentage of total budget costs that come from capital. This read-only field is
calculated from the Budgeted Capital Cost field value. - Budgeted Operating Cost Specifies the amount of operating cost that is budgeted for the investment. This field is
unavailable when: - A POR or approved budget exists. The value is populated from the approved budget. The field becomes visible
when a POR is created; however, if an approved budget does not exist, the budget fields are automatically populated with null cost values.

- The Budget Equals Planned Values check box is selected and detailed financial plans do not exist.
- Budgeted Operating % Specifies the percentage of total budget costs that come from operating. This read-only field is calculated from the Budgeted Operating Cost field value. 6.
Save your changes. TIP When a detailed cost plan already exists, the Financial Plan Summary fields are read-only (as shown in the image at right below).
When no detailed cost plan exists, you can adjust the editable values (as shown in the image at left below).
In all cases, Planned Cost = Planned Capital Cost + Planned Operating Cost.

Select the Method for Collecting Cost Information and Create the Plan
Create the detailed financial plan to update capital and operating costs automatically from either task assignments or team allocations.

If you plan to populate your financial plan using task assignments, you can override the investment Cost Type setting at the specific task level.
Set the investment default for the cost type when you create the financial plan.
For example, consider an investment with 90 tasks that break down into the following cost types: 80 operating cost tasks and ten capital cost tasks.

In this case, the financial manager sets the investment Cost Type attribute to Operating.
This setting automatically assigns the Operating cost type to all tasks and the 80 operating cost tasks are correctly identified.
For the ten tasks that are capital cost, the financial administrator specifies the cost type at the task level to override the default setting.
Follow these steps:
1. Open Home, and from Portfolio Management, click the appropriate investment type.
2. Open an investment and click Financial Plans.
3. Open the Financial Plans menu and click Cost Plans.
4. Open the Actions menu, and from General, click one of the following options:
5. Enter a name, ID, and description for the cost plan.
6. Select Cost Type from the Grouping Attribute drop-down list.
7. Save your changes.
Set the Cost Type for Specific Investment Tasks
Cost plans with information that is populated from task assignments can have some tasks with a cost type different from the default. You can indicate a cost type for a specific task that overrides the default cost type that is selected for the plan.
Example 1
The Cost Type attribute for an investment is set to Operating. However, there are some tasks or task hierarchies that require the Capital cost type.

In this case, you select the Capital cost type for only those tasks.
When you populate the cost plan from tasks assignments, the plan displays a breakdown of capital and operating costs by line item.
Example 2
The Cost Type attribute for an investment is set to Operating. The investment has a parent task with a cost type of Capital. The parent task has two children tasks: Task 1 has a cost type of Operating and Task 2 has no cost type selected.
In this case, Task 1 has Operating specified and Task 2 inherits the cost type Capital from its parent task. When a cost plan is created using New from Task Assignments, two rows get created, one for Operating costs and one for Capital costs.
> [!note]
> The Cost Type field does not display out-of-the-box for tasks. The system administrator must configure the Tasks view in Studio to display the field.
Follow these steps:
1. Open Home, and from Portfolio Management, click the appropriate investment type.
2. Open the investment and click Tasks.
3. Open a task and select Capital or Operating from Cost Type. Note: A child task inherits the selected value, unless it
4. Save your changes.
5. Repeat this procedure for each task that has a different cost type than the one selected for the investment.

## Related
- [[_MOC Financials]]

%%Source: p2149-2153%%

