# Working with Plans (Beta)

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[04 - Roadmaps/_MOC Roadmaps|Roadmaps]]
- Related domains: [[05 - Hierarchies/_MOC Hierarchies|Hierarchies]], [[10 - Pages and Objectives/_MOC Pages Objectives|Pages and Objectives]]
- Canonical notes:
- [[10 - Pages and Objectives/Plans Beta]]
- [[05 - Hierarchies/Financial Plans in Hierarchy]]
- [[10 - Pages and Objectives/Working with Objectives]]
- [[10 - Pages and Objectives/Working with Pages]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Executing Processes from Properties (#executing-processes-from-properties)
- H3: Supporting Email-Based Actions (#supporting-email-based-actions)
- H2: Working with Plans (Beta) (#working-with-plans-beta)
- H3: Topics in This Section (#topics-in-this-section)
- H2: Overview of Plans (#overview-of-plans)
- H2: Setup View Options (#setup-view-options)
- H2: Implementing OBS Security on the Plans Object (#implementing-obs-security-on-the-plans-object)
- H2: Configure the Expandable Tree in Plans (#configure-the-expandable-tree-in-plans)
- H2: Right-click Context Menu (#right-click-context-menu)
- H2: Introducing Vaia (Beta) - Leveraging AI (#introducing-vaia-beta---leveraging-ai)
- H2: Plans Blueprint and Business Rules (#plans-blueprint-and-business-rules)
- H3: Versioning (#versioning)
- H2: Create and Synchronize Investment OBS-Driven Plans (#create-and-synchronize-investment-obs-driven-plans)
- H3: Topics in This Section (#topics-in-this-section)
- H3: Create an Investment OBS-Driven Plan (#create-an-investment-obs-driven-plan)
- H3: Configure an Investment OBS-Driven Plan (#configure-an-investment-obs-driven-plan)
- H3: Set Financial Year Targets for Parent Plan Owners (#set-financial-year-targets-for-parent-plan-owners)
- H3: View Existing Staff and Investments Associated with the Plans (#view-existing-staff-and-investments-associated-with-the-plans)
- H3: Update Investment Tables (#update-investment-tables)
- H3: Create Versions of Your Plan (#create-versions-of-your-plan)
- H3: Synchronize Investment OBS Plans (#synchronize-investment-obs-plans)
- H3: Synchronize OBS Unit Changes in Plans (#synchronize-obs-unit-changes-in-plans)
- H3: Publishing Plans (#publishing-plans)
- H3: Commit a Plan (#commit-a-plan)
- H3: Start a New Round to Generate a Plan Hierarchy (#start-a-new-round-to-generate-a-plan-hierarchy)
- H3: View Investments and Staff from Child Plans in Parent Plans (#view-investments-and-staff-from-child-plans-in-parent-plans)
- H2: Setting Up A Resource Driven Actuals Plan (#setting-up-a-resource-driven-actuals-plan)
- H3: Topics in This Section (#topics-in-this-section)
- H3: Overview of Resource Tables (#overview-of-resource-tables)
- H3: Overview of Investment Tables (#overview-of-investment-tables)
- H3: Create a Plan (#create-a-plan)
- H3: Configure the Plan (#configure-the-plan)
- H3: Add Resources to the Plan (#add-resources-to-the-plan)
- H3: Setting Up the Plan (#setting-up-the-plan)
- H3: Update the Resource Management and Investment Breakdown Tables (#update-the-resource-management-and-investment-breakdown-tables)
- H3: Create Versions of Your Plan (#create-versions-of-your-plan)
- H3: Synchronize Plans (#synchronize-plans)
- H3: Publishing Plans (#publishing-plans)
- H3: Working with the Plan Hierarchy (#working-with-the-plan-hierarchy)

## Executing Processes from Properties

Follow these steps:

1. In Clarity, open the relevant object instance.
2. On the **Properties** module:
   a. Select **Actions** and click the relevant process to execute it. The **Actions** button is available if there is more than one process associated with the investment.
   b. Select the **Process** if that is the only process associated with that blueprint.

> [!IMPORTANT]
> Some key points you need to remember are:
> - You can only call processes where "Active=TRUE" and "Available for On-Demand Start=Yes."
> - If you delete a process definition in Classic PPM, it will remove the generic action for all blueprints using that process definition.
> - When you execute a process in Clarity, you will see a message stating that the process has started successfully.
> - The **Actions** button is only available under the **Properties** module.
> - You can add a maximum of 50 processes to a blueprint.
> - If a process is on hold or disabled, you will get a run time error in Clarity.
> - Processes executed by using the **Actions** button will NOT enforce any partition logic configured on the process definition. If the user selects that generic action, a runtime error will be displayed.
> - All actions defined on the blueprint will display to the end-user, but the end-user will get a run-time error if the end-user selects an action and does not have the process start or process manage to start that process.
> - The **Hide Actions** capability enables you to leverage business rules and enforce fine-grained access control capabilities for actions. You can now use the Hide Actions capability that has been introduced to show relevant actions to specific users.

### Supporting Email-Based Actions

Processes in Clarity are workflows that automate approvals, notifications, and task assignments for various objects, such as projects, tasks, and resources. With the email-based action feature, you can respond to these processes directly from your inbox, simplifying your interaction with Clarity workflows.

#### Responding to Processes via Email

1. When a process is triggered in Clarity, you will receive an email notification with the relevant details.
2. Open the email, which will contain information about the process and the action required (for example, Approve Resource Allocation for Project Y).
3. Review the details in the email and click the appropriate action button (for example, **Approve** or **Reject**).
4. A new response email will be created automatically. You do not need to edit this email, instead, click **Send** to submit your response.
   a. If you click **Approve**, Clarity will update the process as though you approved it in the platform.
   b. If you click **Reject**, Clarity will update the process as though you rejected it in the platform.

---

## Working with Plans (Beta)

You can use the Plans in Clarity to create Workforce models that help the leadership team make more informed and data-driven decisions about their human resources, leading to better business outcomes. Some key benefits of leveraging the Plans to model the workforce in your organization are:
- **Improved decision-making**: Workforce modeling helps organizations make data-driven decisions about their workforce, enabling them to align human resources with strategic goals. By analyzing workforce trends, such as employee turnover rates or skills gaps, organizations can identify areas where they need to invest in employee training or development, adjust hiring practices, or optimize their staffing levels.
- **Future workforce planning**: Workforce modeling enables organizations to forecast future workforce needs, which can be helpful in strategic planning. By analyzing historical workforce data, organizations can identify patterns in employee turnover or skills demand and predict their future workforce needs. This can help organizations avoid costly staffing mistakes and ensure they have the necessary resources to meet their business goals.
- **Improved operational efficiency**: Workforce modeling can help organizations optimize their operational efficiency by identifying areas where organizations are over or understaffed.
- **Risk management**: Workforce modeling can help organizations manage their workforce-related risks by identifying potential exposure areas, such as compliance risks or skill shortages.

### Topics in This Section
- Overview of Plans
- Setup View Options
- Implementing OBS Security on the Plans Object
- Configure the Expandable Tree in Plans
- Right-click Context Menu
- Introducing Vaia (Beta) - Leveraging AI

---

## Overview of Plans

Some key capabilities available in this release:
- Create and Synchronize an Investment OBS-Driven Plan to define and manage planning for investments. An OBS is a hierarchical representation of your company that you can use to align resources, projects, and investments.
- Create a Resource-Driven Actuals Plan where you will start by importing resources and then balance the tables in the Investment Breakdown section to finalize your plan.
- Configure your plan by adding up to 10 Resource and/or Investment Tables to your plan to suit your planning needs.
- Project your headcounts by using the **Add** and **Remove** options on the Resource Breakdown or the Employee Type page.
- Leverage versioning to analyze What-If scenarios for plans.
- Publish plans to enforce approval governance and properly balance plans.
- Leverage Plan Hierarchy: You can quickly navigate your organization's hierarchy to view and manage headcount totals at different levels.
- View Aggregated Headcounts: You can use Plans to roll up headcounts from a single unit to the top level of your organization. Hence, you can review headcounts at a business unit or organization level and dive into individual teams during the planning process.

---

## Setup View Options

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the **Grid** layout.
3. In the layout, click **View Options**.
4. **Show Expandable Tree**: Turn on the toggle to view the parent and child relationships of the plan hierarchy. By default, the value is set to Off.
5. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
6. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
7. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

---

## Implementing OBS Security on the Plans Object

You can now configure OBS Security to ensure only users with appropriate access can use plans. To learn more, see Configure OBS.

## Configure the Expandable Tree in Plans

You can view the hierarchical relationships between instances of the same object in Plans.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Click **View Options** (Gear icon) in the grid view.
3. Turn on the toggle for **Show Expandable Tree**.
4. Click **X** to close the View Options panel.

The grid shows the hierarchical relationships between parent objects and children. It automatically sorts data alphabetically in the "Name" column.

> [!NOTE]
> Some of the key points to remember are:
> - With the expandable tree in the grid, you can perform the following actions:
>   - Filter
>   - Expand
>   - Collapse
>   - Delete
>   - Save views for plans
> - Clarity examines the condition given in the filter option at each level of expandable tree. The behavior of the filter option is as follows:
>   - If the condition is true at the top-most node and false for the child node, only the top-most node will be displayed.
>   - If the condition is false at the top-most node and true for the child node, the result displays the child node without the top-most node and reduces the indent for the child node in the grid.
> - The following functionalities are excluded while using the expandable tree in the grid:
>   - Export to CSV
>   - Group By
>   - Sorting
> - The expansion state of nodes in the tree is remembered across user logins.

---

## Right-click Context Menu

You can right-click a cell on a row to view a context-sensitive menu. You can use this context-sensitive menu to:
- **Open Details**: Access the Details panel for the plan.
- **Star**: Mark the plan as a favorite by assigning a star to it.
- **Collapse All**: Collapse all plans in the grid.
- **Expand All**: Expand all plans in the grid.
- **Delete Row**: Remove the selected row from the grid.
- **Chart Range (beta)**: Generate a chart using the data in the grid. To learn more about using the Chart Range (beta) option in the grid, see Create a Chart.

---

## Introducing Vaia (Beta) - Leveraging AI

Vaia highlights Clarity's first foray into leveraging public AI models to simplify various user tasks. In this release, you can use Vaia to define Generative AI for any Rich Text Field (RTF) attribute based on the fields you configure in this workspace.

This capability is available for the following objects and sub-objects:
- **Objects**: Projects, Ideas, Custom Investment types (CIT), Hierarchy, Objectives, Plan, Roadmaps and Custom Master Object (CMO)
- **Sub-objects**: Risk, Issue, Change Request, Status Report, and Task

To learn more about configuring Vaia, see Configuring Vaia (Beta).

After you have set up Vaia, you can perform the following actions using **AI Actions** button:
- Click the **Generate Content** option in the AI Actions button to generate the text for the field.
- If you have already entered some information, the **Revise Content** option will be enabled in the AI Actions. Click **Revise Content** to view the revised content.
- You can use the **Grade Content** option to grade the content in the field. On clicking the Grade Content, the following actions occur:
- The AI displays the grading result in a new pop-up window. Review:
- Previously generated grades.
- Each grade includes a date for reference.
- Specific strengths and areas for improvement.
- Examples illustrating content enhancement.
- Regenerate/Refresh the grade as needed.
- Close the grade pop-up window and reopen it anytime by requesting the Vaia to grade.

> [!NOTE]
> Some key points to remember are:
> - This feature uses a Generative AI service. The Generative AI service uses emerging technology, may provide inaccurate generated output, and is not designed for or intended to meet your regulatory, legal, or other obligations. Always review AI-generated content for accuracy and make adjustments as needed.
> - This feature is toggled off, and you must create a support ticket to toggle it in your environment. For more information, see the following KB article.
> - Users need a Google Cloud Platform/Open AI service account with appropriate permissions to use this functionality.
> - If the AI API key is not configured correctly, then the end user will see an error message on the screen.
> - If the configuration under "Vaia (Beta)" is disabled, the end user will see the following error message: `API -1019: Could not process the request due to internal error.`
> - The text generated depends on the AI Service Model utilized. It has been observed that AI models can change the text format over time, and the result displayed in Clarity would be impacted.

---

## Plans Blueprint and Business Rules

Clarity introduced the Plans blueprint to help you configure layouts for the Plans workspace. The Plans blueprint has now been enhanced to support Business Rules to control how end users engage with this workspace.

When you create a business rule in the Plans blueprint, you can only use the **Set the Rule Type as View Page** rule type. This rule type is executed every time a user views a page and supports only one complex condition.

When you start creating rules for plans, you will see a few read-only business rules that are already available there. These are system-level rules that govern the functionality of the Plans module. You can add the **System** attribute to the grid to visually determine if any rule is system-defined or user-defined. You can click these rules and use the Plan name and description to learn more about the rule. These rules help administrators understand the underlying functionality of the Plans workspace and design new business rules that work in sync with existing system-defined rules.
- **Enhanced Round Selection Experience**: In previous releases, when you wanted to view different rounds of your plans, you had to return to the Plans workspace and select the relevant round. You can now use the **Round Selector** capability within the plan hierarchy to seamlessly switch between rounds and compare plans.
- **Introducing the Plan Round Filter**: When you create a new round, Clarity creates a copy of the entire plan hierarchy. Hence, when you create multiple rounds for multiple plans, the Plans workspace will start looking cluttered. You can now use the **Plan Round filter** and use the **Current Round** option to automatically select the latest round for all plans. This helps you quickly identify and edit the current round for each plan.

### Versioning

You can now use the versioning capability in plans to view and analyze "what-if" scenarios for your resource plans. You start by editing the working copy of a plan. Whenever you create a unique permutation, you can save it as a version. You can then continue to edit the working copy. If you arrive at a different permutation, you can save it as another version of the plan. If you are unhappy with the working copy, restore it to any saved versions and continue to edit it.

After creating a Resource plan, you can use the **Synchronize** option to update the resource actuals on the plan.

> [!NOTE]
> Some key points to remember are:
> - The **Sync** button is available on the top-level node. It will be disabled on all child nodes.
> - You need edit permissions on the top-level node to synchronize plans.
> - When a sync is in progress, all of the plans in the plan hierarchy are not editable. They are read-only until a successful sync is executed on the plan hierarchy.

---

## Create and Synchronize Investment OBS-Driven Plans

Most organizations use an Investment OBS to define and manage investment planning. An OBS is a hierarchical representation of your company that you can use to align resources, projects, and investments.

You can now use the **New Plan from OBS** option to create an investment-driven plan that mirrors the investment structure of the OBS. You start by selecting the OBS and the plan period. Next, you choose the Top-Level Plan Node and the Lowest-Level Plan Node to signify the start and end points for investments to be included in the plan. You can also choose to include or ignore investments that are descendants of the lowest node of your OBS. Finally, you can select the Investment Types that should be included in your plan. The system will display all of the Investment Types associated with the OBS. Some organizations choose to create plans with only projects, while others include Projects, Ideas, and Custom Investments. Clarity will now create a plan based on your selections.

After you create the plan, you typically perform the following steps:

1. Configure an Investment OBS-Driven Plan to add the relevant tables to the plan. You can also choose to use the **Breakdown (Previous Year) Add/Remove** option to include the Add/Remove columns in the FY - 1 section. This allows you to include scenarios such as acquisitions, resignations, and retirement in the planning process. Finally, you can define fiscal targets, which will be pushed down to child plans.
2. Navigate to the **Staff** and **Investment** tabs within the various investments and review the records associated with each plan.
3. Update the Investment Tables and ensure they are correctly balanced and do not include any Undefined records in the breakdown tables.
4. Create and save various versions of your plan to capture variations of your plan.
5. Synchronize OBS Plans to ensure you capture changes to the Staffing and Investment data associated with the OBS.
6. Publish your plans to finalize them and roll up data to your parent plan.
7. Commit your plans to freeze them so they are not editable.
8. Start a New Round to generate a plan hierarchy.

### Topics in This Section
- Create an Investment OBS-Driven Plan
- Configure an Investment OBS-Driven Plan
- Set Financial Year Targets for Parent Plan Owners
- View Existing Staff and Investments
- Update Investment Tables
- Create Versions of Your Plan
- Synchronize Investment OBS Plans
- Synchronize OBS Unit Changes in Plans
- Publish Plans
- Commit a Plan
- Start a New Round to Generate a Plan Hierarchy
- View Investments and Staff from Child Plans in Parent Plans

### Create an Investment OBS-Driven Plan

When you create a plan in Clarity, the initial synchronization will now import the investment and staff data from the previous fiscal year. For example, if you create a plan for Fiscal year 2024, the investment and staff data for fiscal year 2023 will automatically be imported and displayed as actuals. This will ensure that you can do the resource planning based on actual data entered in Clarity. This is critical because most organizations begin their planning process at least four months prior to the fiscal year. They import the Investment and Staff records when they create their initial plan. However, the planning process continues for months, and the investment actuals also get updated. You can use the **Sync** option to synchronize investment and staff records, including the TSV data, to ensure your planning activity is based on the latest data.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Click **New Plan from OBS**.
3. In the **OBS** drop-down list, select the relevant OBS.
4. In the **Plan Period**, select the relevant Plan Period and click **Next**.
5. In the **Top Level Plan Node**, select the initial node for your Investment OBS-Driven plan.
6. In the **Lowest Level Plan Node**, select the final node for your Investment OBS-Driven plan.
7. You can also choose to include or ignore investments that are descendants of the lowest node of your OBS by selecting or clearing the **Include Investments from Descendants of Lowest Level** check box.
8. In the **Investment Types to include** section, select the investment objects you want to include in your plan.
9. Click **Create** to create the plan.

> [!NOTE]
> Some key points to remember are:
> - Clarity imports labor and team staff records into the plan from the investments associated with the OBS structure and aggregates the labor records.
> - You can rename an Investment-OBS Driven plan to meet your business requirements.
> - The Actuals in the plans will be based on the Total Usage of the Staff records imported into the plan.
> - If Clarity encounters a failure while creating the plan, it will display an error message and not create the Plan hierarchy. However, if it creates the tree successfully and fails to synchronize data, Clarity will save everything till the point of failure. The plan will be read-only until a successful sync is executed on the plan hierarchy.
> - The New Plan from OBS Modal will display up to 500 OBS units within the selection widget.
> - All mandatory custom attributes on the Plan object must have a default value. If they are blank, the plan creation using OBS capability will fail.
> - The unit of measure for the Staff module is controlled by settings configured by you. You can change it by clicking your Avatar and selecting the General tab on the Settings modal.
> - Rich Text Fields (RTF) are not supported under the Investment/Staff grids.

### Configure an Investment OBS-Driven Plan

You can now use the **Configure** button for a plan to set up your plan.

Follow these steps:

1. Log in to Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Click **Configure** to open the Configure Plan window.
5. Select the **Current Plan Configuration**. You can select from the following options:
- **From Actual Amount**: Current Plan = Actual value + (Add and Remove values)
- **From Previous Plan Amount**: Current Plan = Previous Plan value + (Add and Remove values)
6. Select **Enable Targets** to define fiscal targets which will be pushed down to child plans.
7. Select **Breakdown (Previous Year) Add/Remove** to include the Add/Remove columns in the FY - 1 section. This allows you to include scenarios such as acquisitions, resignations, and retirement in the planning process. The total resources are calculated based on the adjusted plan for the previous financial year and the values entered in the Add Remove column.
8. Use the **Show Planning Columns** option to select if you want to show the previous plan amount or the actual plan amount in the planning column.
9. Select if you want to display assignments or allocations.
10. Select if you want to display FTE, Hours, or Days.
11. Select the appropriate number decimal display.
12. In the **Resource Breakdown** or **Investment Breakdown** sections, you can perform the following actions:
- Hover over any table and select the **Delete** button to remove it. If you remove all the tables from either section, the entire section will be removed from the plans page.
- Hover over any table and drag it to the appropriate location. The position of the table in the window determines its position on the Plans page.
- Use the **Add Table** option to configure up to 10 Resource and/or Investment Tables per plan by using the Add Table option. The drop-down list will display the static or dynamic lookups from the resource or investment objects.

> [!NOTE]
> Some key points you need to remember are:
> - If you have a plan hierarchy, you can only edit the configuration on the parent plans. The child plans inherit the hierarchy of the parent plan.
> - Users must have edit access on the top-level plan to edit the plan configuration.
> - If a child plan's "Parent" value is removed so that it becomes a top-level plan, the prior child plan's configuration will be retained when it becomes a top-level plan.

> [!NOTE]
> When you add new tables, ensure you click **Sync** to synchronize values from the investments.

### Set Financial Year Targets for Parent Plan Owners

You can use the Plans in Clarity to create Workforce models that help the leadership team make more informed, data-driven decisions about their human resources. Leveraging capabilities such as versioning, synchronizing, and publishing plans lead to better business outcomes. The Plans workspace has now been enhanced to ensure that parent plan owners can define fiscal targets for their immediate child plans, which will be pushed down to child plans. If the child plan is also a parent plan, you can set fiscal targets for the direct child plans. Plan owners can then edit their plans to ensure they meet the values specified in the Target.

This capability is configurable using the **Enable Targets** option. You can then edit the targets for immediate child plans. If a sub-parent does not have a target passed from its parent, it can define partial targets for its immediate child records. This allows sub-parent plans to start work on their plans independently or until a target is passed down from its parent.

> [!NOTE]
> Some key points to remember are:
> - If the fiscal year plan totals do NOT match the plan target, it will not prevent the plan from being published. The goal of targets is to provide guidance for plan owners to aim for their fiscal year totals. Parent plan owners will still need to approve child plans and should work with their child plan owners on any exceptions.
> - Target amounts are independent of plan versions. This means target amounts will not change between plan versions.
> - To use targets, parent owners must have edit access to their immediate child plans to update the target value on those child plans.
> - Target amounts can only be changed on the "Working Copy."
> - Targets will only accept whole numbers (No decimal values).

Follow these steps:

1. Log in to Clarity and click **Plans**.
2. Select a relevant parent plan to open it.
3. Click the **Plan** tab.
4. Click **Configure** to open the Configure Plan window.
5. Select **Enable Targets** to define fiscal targets which will be pushed down to child plans.
6. Click **Save** to confirm your changes.
7. Click **Edit** in the Targets widget to enter targets for the plan. Ensure the Totals are balanced against the target assigned to each child plan.
8. Click **Done** to save your changes.

### View Existing Staff and Investments Associated with the Plans

The Plans blueprint now includes the **Investment** and **Staff** modules. After your administrator has configured the blueprint to display these modules, you can view the investments and staff associated with your plans in the respective modules. You can click the column panel to add various attributes to the grid. Your Clarity administrator selects the attributes available in the Column Panel from the Plans tile on the Administration workspace.

### Update Investment Tables

Since you are using the Investment OBS-driven approach, you can start by defining the various investment-related information in your organization using the tables in the Investment Breakdown section. You can use the **Configure** option to add more tables to this section.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Click **Configure** to configure the plan to display the relevant tables under the **Investment Breakdown** section and **Resource Breakdown** sections.
5. Navigate to the Investment Breakdown category and start editing various tables. You can add relevant categories to the table and start associating a resource count with each category. The exercise is complete when you have zero resources in the Undefined category. As you update the tables in this section, the tables in the Resources Breakdown section are automatically updated.
6. If you have to accommodate for scenarios such as acquisitions, resignations, and retirement in the planning process, ensure you select **Breakdown (Previous Year) Add/Remove** by using the Configure option to include the Add/Remove columns in the FY - 1 section. The total resources are calculated based on the adjusted plan for the previous financial year and the values entered in the Add Remove column.
7. Ensure that you reallocate "Undefined" values in the Resource Breakdown section so the "Undefined" values are zero.

### Create Versions of Your Plan

You can now use the versioning capability in plans to view and analyze "what-if" scenarios for your plans. You start by editing the working copy of a plan. Whenever you create a unique permutation, you can save it as a version. You can then continue to edit the working copy. If you arrive at a different permutation, you can save it as another version of the plan. If you are unhappy with the working copy, restore it to any saved versions and continue to edit it.

Some key points to remember are:
- You can now create versions within a plan's Investment grid. This allows you to create multiple versions per plan with different investment snapshots.
- You can now create versions within a plan's Staff grid. This allows you to create multiple versions per plan with different staffing snapshots. Clarity also versions the TSV attributes within a plan's Staff grid. The settings on the Staff grid are controlled by the User Settings under the avatar and the plan hierarchy configuration.
- Versioning is limited to a specific plan instance and not the entire plan hierarchy.
- Versioning a plan will snapshot the values entered in the resource and investment tables.
- Once you version a plan, it becomes a read-only copy. You cannot update it or overwrite an existing versioned plan.
- You cannot version a plan if it has negative actuals.

**When you are using the Working Copy**, some points to consider are:
- There is only one working copy per plan instance.
- Where you are updating the resource and investment table values.
- Clarity uses the working copy when aggregating values through the plan hierarchy.
- When you create a version of a plan, it will create it by taking a snapshot of the table values in the working copy.

**When you create a Version copy**, some points to consider are:
- A version is a point-in-time snapshot plan copy of the resource and investment table values.
- A version is a read-only plan and cannot be overwritten or updated.
- A version cannot be deleted.
- When you restore the version copy, Clarity will overwrite the resource and investment table values in the working copy with the corresponding values from the version copy.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. After updating your plan, click the **Version** button.
5. Enter the name of the version and click **Save**.
6. In the versions drop-down list and click **Working Copy** to start editing the plan again.
7. Click **Manage Versions** to view the list of versions and rename or delete specific versions.
8. If you want to restore a version, select it in the version drop-down list and click **Restore**.

### Synchronize Investment OBS Plans

After creating an Investment OBS plan, you can use the **Synchronize** option to update the investment actuals on the plan. The Sync button is available on the top-level node. When you synchronize the plan to update investment actuals, the following selections determine the scope:
- The Investment Types you select in the Plan Sync in Progress window.
- The attributes you specify in the Plans Tile on the Administration workspace.

> [!NOTE]
> Some key points to remember are:
> - When synchronizing investment actuals, Clarity will remove all investments and re-import selected investment types and associated staff records.
> - You can use the **Preserve Manual Plan Name Changes** option to ensure that if you have manually updated the name of a plan, it is not changed.
> - The **Sync** button is available on the top-level node. It will be disabled on all child nodes.
> - You need edit permissions on the top-level node to synchronize plans.
> - When a sync is in progress, all of the plans in the plan hierarchy are not editable. They are read-only until a successful sync is executed on the plan hierarchy.
> - When you initiate a sync operation, Clarity leverages the Synchronize Plan from the OBS job. This job is not available to users and is only initiated when users click the Sync button.
> - You can only synchronize attributes selected from the Plans tile on the Administration workspace by your Clarity administrator.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Click **Actions**, **Sync Investments and Staff** to synchronize the investments.

### Synchronize OBS Unit Changes in Plans

Customers model their organizational structure within Clarity by using the OBS capability. They then create investment-driven OBS plans for resource management for the upcoming fiscal year. However, corporate restructuring and mergers are a reality, and organizations would need to adapt their plans to adapt to such events.

You can now use the **Update Plan Structure from OBS** option on the parent plan to update changes made to the OBS hierarchy in Clarity. The synchronization supports the following changes:
- OBS Unit is renamed
- OBS unit is added
- OBS unit is moved
- OBS unit is deleted

The **Update Plan Structure from the OBS** dialog box allows you to:
- Change the levels from which you want to import investments
- View a summary of changes that have been made to the OBS
- View the new plan structure based on the OBS changes

> [!NOTE]
> Some key points to remember are:
> - You cannot move or delete the top-most level node in the plan hierarchy. If you need to make such a change due to an OBS change, you must create a new investment-driven OBS plan hierarchy.
> - If Clarity detects that the root level plan node has been moved or deleted, it will display an error message.
> - The Plan Hierarchy navigator is limited to 500 plans for a branch of the hierarchy. If the OBS Unit structure has a branch that is greater than 500 units, you will not be able to OBS sync to the Plan Hierarchy.
> - If you use deleted and deactivated attributes in the Resource and Investment Breakdown tables, Clarity will display a banner noting that the deleted attributes will be removed and prompt a confirmation. Clarity will then execute a plan synchronization to update the plan.
> - Clarity will only import investments associated with the selected OBS and falling within the fiscal year start and end periods.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Click **Actions**, **Update Plan Structure from OBS** to synchronize the plan with the updated OBS structure.
5. In the **Plan Levels** pane, select the updated plan level and click **Next**. Selecting a higher level will remove plans, and selecting a lower level will add plans to your plan hierarchy.
6. The **Changes from OBS** pane identifies OBS Units that were Added, Moved, Deleted, or Renamed. It also identifies changes to the plan's lowest level from the previous step, which could Add or Remove plans. Click **Next**.
7. In the **Preview Changes** pane, review the new plan hierarchy with the delta changes and click **Next**.
8. Select the **Sync Investment and Staff Records after Updating Plans** and click **Update**.

### Publishing Plans

The Publishing process allows organizations to enforce approval governance and properly balance plans. Some key capabilities include the ability to:
- Ensures plans are properly balanced before a plan is published.
- Allow a published plan to be recalled if changes need to be made.
- Allow Parent plan owners to approve child plans, thus locking child plans from further updates.

When you publish a plan, remember the following points:
- Clarity creates a version of the plan. It will prompt the user to enter a name for the new version.
- For Investment OBS plans, the plan breakdown table values, investments, and staff records will be visible to its immediate parent plan.
- The plan becomes read-only. You can "Recall" a plan, which will unpublish it and make it a normal plan version.
- The Plan Status changes to Published in the Plans workspace.

You can leverage the **Publish All** capability from any parent plan. When you click on "Publish" and your child plans are published, a modal will display for you to enter a Plan Version Name when the plan is published. If you click "Publish All," it will publish all child plans that are not published and the parent plan. A banner will be displayed to users within the plan hierarchy indicating that a Publish All action is in progress. Plans with "Undefined" rows will not be published. If the child plan with "Undefined" rows is not published, its parent plan and all its parent plans up to the parent plan executing the publish all for that branch of the plan hierarchy will not be published either.

> [!NOTE]
> Some key points to remember are:
> - When you publish a plan, it is designated as the plan that Clarity would aggregate in the Plan hierarchy. You can only have one published plan.
> - You can only publish a plan from the Working Copy. If you want to make a prior plan version of the published plan, you must first restore the version to the Working Copy and then publish the plan from the Working Copy.
> - To ensure only correctly balanced plans get aggregated up the plan hierarchy, you can only publish a plan where there are no "Undefined" records in the Breakdown Tables.
> - You can publish both Investment OBS and Resource type plans.
> - You will not be able to delete a published plan.

Follow these steps to publish a plan:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Use the **Configure** button to set up the Plan workspace.
5. Update the Investment tables, ensure they are correctly balanced, and do not include any undefined records in the breakdown tables.
6. Click the **Publish** button and enter the name in the Save and Publish window. The plan becomes read-only. You can "Recall" and Restore it, which will un-publish the plan and make the plan a normal version. You will be able to republish an updated plan from the Working Copy.

> [!NOTE]
> You can only see the **Recall** button when you are on the Published plan. Once a plan is accepted, you cannot recall the plan. You can also use the **Return All** action on the top-level plan to unpublish all published plans in the plan hierarchy.

### Commit a Plan

You can also commit plans in a plan hierarchy for Investment-OBS plans. When you commit to a plan, you finalize it by locking down the editing of the plan hierarchy. When you commit a plan:
- You cannot publish, recall, or return everything on the plan hierarchy.
- Sync Investment/Staff and Update Plan Structure by OBS actions will be disabled.
- All Working Copies will be hidden.
- When navigating the plan hierarchy, it should default to the committed plan.

Follow these steps to commit to a plan:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Use the **Configure** button to set up the Plan workspace.
5. Update the Investment tables, ensure they are correctly balanced and do not include any undefined records in the breakdown tables.
6. Click **Actions** and then click **Commit Round**.

### Start a New Round to Generate a Plan Hierarchy

The Plans workspace allows parent plan owners to define fiscal targets for their immediate child plans, which will be pushed down to child plans. However, there are scenarios where the management team may want to redo the entire planning process. In such scenarios, you can start a new round to create a copy of a plan hierarchy and define new targets so plan owners can adjust their plans to the new targets.

A round is a copy of the plan hierarchy where plan owners can adjust the plan values to provide a different perspective for plan approvers to review and decide which plan to move forward with for the upcoming fiscal year. A new round can be independently modified, and changes will not impact the source plan hierarchy used to create it. You can create as many rounds as you like, but you can only have one active round per plan hierarchy for a specific fiscal year. You can use the **Round Selector** capability within the plan hierarchy to seamlessly switch between rounds and compare plans.

Some key use cases where you can create new rounds are:
- When using Plans for your workforce modeling, you may go through several iterations of reviews and approvals. You may create a round to see your plan with different target values and compare your prior rounds with your current round target values.
- You may create a new round to view different resource counts between plans in your plan hierarchy to better understand the impact between your prior and current rounds.
- Rounds provide a point-in-time snapshot of your plan hierarchy. You may generate a new round to log the progress of your planning or regenerate a new plan by creating a new round from a specific point in time.

> [!NOTE]
> Some key points to remember are:
> - A round can only be created from the latest round where "Plan Status=Committed."
> - You can only execute "Start New Round" from the top-level plan.
> - Rounds are only available for Investment OBS-type plans.
> - Users need the "Plan - Create" right to execute "Start New Round."
> - The round names are incremented numerically (ex, Round 1, Round 2, Round 3, etc).
> - You can use the Plan Round filter and the Current Round option to automatically select the latest round for all plans on the Plans workspace. This helps you quickly identify and edit the current round for each plan.
> - Security rights to the newly created round instance will need to be provisioned. Just because the user had access to the prior round instance does NOT automatically give the user access to the new round instance.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Click **Actions** and then click **Start New Round**. This option is only available when the plan has already been committed.
5. Use the **Round Selector** capability to navigate between various rounds of the plan. You can also navigate to the Plans workspace and use the Plan Round filter to review rounds to each plan. You can leverage the **Current Round** option to automatically select the latest round for all plans.

### View Investments and Staff from Child Plans in Parent Plans

You can use the Plan Navigator to view the Investments and Staff from child plans on the parent plans after you publish a child plan. Consider a scenario when you have created Investment-driven OBS plans. Many large organizations have thousands of investments that are managed in Clarity. The investment managers for various OBS units can now navigate to the parent plan for their investments and review the data from the past year. They can then make adjustments and publish the child plans to roll up the data to the parent plans. Thus, the leadership team is assured that the data being shared in the top-level plan is accurate and has been vetted by the relevant stakeholders.

> [!NOTE]
> Some key points to remember are:
> - The **Version** and the **Plan** fields are available on the Investments tab. You can use them on the parent plan to identify the child plan and the version associated with the investment.
> - Parent plans will only see child plan information when the child plan is published.
> - Parent plan can only be published when all its immediate child plans are published.
> - When you publish a parent plan, Clarity marks its immediate child plans approved. If there's a need for a child plan to be recalled, the parent plan will need to recall its published plan so the child plan can recall its published plan.

Follow these steps:

1. Log in to Clarity and click **Plans**. Ensure that the plans have the appropriate parent mapping.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Use the Plan navigator to navigate to the parent tab.
5. Click the **Staff** and **Investment** tabs to view data from parent plans. You can configure Resource, Investment, and Staff attributes under the Staff module.

---

## Setting Up A Resource Driven Actuals Plan

When you choose to create a Resource-driven plan, you will start by importing resources. You will then configure your plan to add various resource and investment breakdown tables. You can also leverage the **Select Breakdown (Previous Year) Add/Remove** option to plan for scenarios such as acquisitions, resignations, and retirement in the planning process. Next, you update the Resource Management tables and balance them to finalize your plan. You can also create versions of your plan to simulate various scenarios for stakeholders. When you are ready to finalize your plan, you can publish it. If this plan is a child plan, the details will automatically roll up to the parent plan.

### Topics in This Section
- Overview of Resource Tables
- Overview of Investment Tables
- Create a Plan
- Configure the Plan
- Add Resources to the Plan
- Setting Up the Plan
- Update the Resource Management Tables and Investment Breakdown Tables
- Create Versions of Your Plan
- Synchronize Plans
- Publishing Plans
- Working with the Plan Hierarchy

### Overview of Resource Tables

The Resource tables are derived from the various static or dynamic lookups associated with the abstract Resource object. Here are the key columns in any Resource table:
- **Previous Plan Period**: This is determined from the annual fiscal year value that you defined for the plan. If you select a fiscal year=2023, the Previous Plan label will be 2022. If there are no annual fiscal periods defined under the default entity for the previous period, the system will display "Base" for the Previous Plan label. You can update values associated with the Previous Plan Period so that you're able to compare prior and current plan totals. Clarity now includes the **Select Breakdown (Previous Year) Add/Remove** option to include the Add/Remove columns in the FY - 1 section. This allows you to include scenarios such as acquisitions, resignations, and retirement in the planning process. The total resources are calculated based on the adjusted plan for the previous financial year and the values entered in the Add Remove column.
- **Actual**: A read-only column where the values are generated by the resources imported into the plan.
- **Add and Remove**: Editable columns to adjust your headcount from the previous plan period.
- **Current Plan Period**: A read-only column where the values are calculated based on the setting in your top-level configuration.

### Overview of Investment Tables

The Investment tables are derived from the various static or dynamic lookups associated with the abstract Investment object. Here are the key columns in any Investment table:
- **Previous Plan Period**: This is determined from the annual fiscal year value that you defined for the plan. If you select a fiscal year=2023, the Previous Plan label will be 2022. If there are no annual fiscal periods defined under the default entity for the previous period, the system will display "Base" for the Previous Plan label. You can update values associated with the Previous Plan Period so that you're able to compare prior and current plan totals.
- **Actual**: An editable column where you can manually enter the values in the current plan. Note that this is different from the Resource tables, where Actuals is a read-only column.
- **Add and Remove**: Editable columns to adjust your headcount from the previous plan period.
- **Current Plan Period**: A read-only column where the values are calculated based on the setting in your top-level configuration. To learn more about these settings, see Configuring Plans.

### Create a Plan

You can create a plan in Clarity by specifying the **Plan Name** and **Fiscal Year**. Some other key fields that matter are:
- **Plan Type**: You can click the Add Row button to create a Resource plan. You can click the New Plan from OBS to create an Investment OBS-Driven plan.
- **Parent**: You can associate an existing plan as a parent to establish a hierarchical relationship. The values within your plan will roll up and be available for the parent plan.

Follow these steps to create a Resource Driven plan:

1. Log into Clarity and click **Plans**.
2. Click the **New Resource Plan** button to create a new plan.
3. Enter the **Plan Name** and the **Fiscal Year**.
4. Select the **Parent** if applicable.
5. Click **Create**.

A new plan will be created in the grid.

6. Click the Plan to navigate to the **Properties** module.

> [!NOTE]
> You need the **Plan - Navigate** access right to view the Plans module.

### Configure the Plan

You can now use the **Configure** button to set up your plan.

Follow these steps:

1. Log in to Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Click **Configure** to open the Configure Plan window.
5. Select the **Current Plan Configuration**. You can select from the following options:
- **From Actual Amount**: Current Plan = Actual value + (Add and Remove values)
- **From Previous Plan Amount**: Current Plan = Previous Plan value + (Add and Remove values)
6. Select **Breakdown (Previous Year) Add/Remove** to include the Add/Remove columns in the FY - 1 section. This allows you to include scenarios such as acquisitions, resignations, and retirement in the planning process. The total resources are calculated based on the adjusted plan for the previous financial year and the values entered in the Add Remove column.
7. Select the **Show Planning Columns** option to show the previous plan amount or the actual plan amount in the planning column.
8. In the **Resource Breakdown** or **Investment Breakdown** sections, you can perform the following actions:
- Hover over any table and select the **Delete** button to remove it. If you remove all the tables from either section, the entire section will be removed from the plans page.
- Hover over any table and drag it to the appropriate location. The table's position in the window determines its position on the Plans page.
- Use the **Add Table** option to configure up to 10 Resource and/or Investment Tables per plan. The drop-down list will display the static or dynamic lookups from the resource or investment objects.

> [!NOTE]
> Some key points you need to remember are:
> - If you have a plan hierarchy, you can only edit the configuration on the parent plans. The child plans inherit the hierarchy of the parent plan.
> - Users must have edit access on the top-level plan to edit the plan configuration.
> - If a child plan's "Parent" value is removed so that it becomes a top-level plan, the prior child plan's configuration will be retained when it becomes a top-level plan.

### Add Resources to the Plan

After you have created a plan, the next step is to add all the resources associated with the plan. You can navigate to the **Resources** tab and use the **Add Resources** button to import resources to the plan. The resources grid allows you to use the filter and group by roles to identify and add resources to the plan.

> [!NOTE]
> You need the **Resource - View - All** access right to add resources to the plan.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Navigate to the **Resources** tab and click **Add Resources**.
4. Use the **Group By** and **Filter** option to identify relevant resources. You can configure TSVs attributes by adding them to the grid by using the **Columns** option.
5. Click **Add** to add them to the Resources page.
6. Validate the imported resources on the Resources page and associated data on the Plans page.

> [!NOTE]
> If you remove a resource from the grid, the corresponding roles and employment types will be removed from the Plans module.

### Setting Up the Plan

After you have imported resources, you can navigate to the **Plan** tab to start workforce modeling. The Plan tab includes the following components:
- The **Resource Breakdown** tables show you the resource data associated with your plans. This will help you analyze the current and projected roles needed to support that plan.
- The **Investment tables** help you align resources with various investments and categories relevant to your organization. If you are using the Resource-Driven actuals approach, all the data in the Investment tables may be in the unallocated column.
- The **Previous Plan** and **Current Plan** widgets are automatically updated and provide aggregated totals from the respective sections.

> [!NOTE]
> You can work with your Clarity administrator to edit the `WORK_PLAN_INV_CATEGORY` lookup to the Investment Category. You can assign employees to relevant categories such as Active Development, Bug Fixes, Sustenance, and Support.

After you have imported resources, you can start updating the tables in the Investment Breakdown section to distribute the resources to various categories in each table.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Click **Configure** to configure the plan to display the relevant tables under the **Resource Breakdown** and **Investment Breakdown** sections.
5. Since you have already imported resources, review all the tables in the Resource Breakdown section and allocate resources to relevant columns if necessary to ensure you don't see any resources in the unallocated category.
6. Navigate to the Investment Breakdown category and start editing various tables. You can add relevant categories to the table and start associating resources with each category. You can consider the exercise complete when you have zero resources in the Undefined category.

### Update the Resource Management and Investment Breakdown Tables

Since you are using the Resource Management approach, you can enter numeric values in the **Add** or **Remove** columns for various tables in the Resource Breakdown section. This will add "Undefined" values in various tables associated with the Investment Breakdown section. Ensure that you reallocate "Undefined" values so the "Undefined" values are zero.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Click **Configure** to configure the plan to display the relevant tables under the **Investment Breakdown** section and **Resource Breakdown** sections.
5. Navigate to the Resource Breakdown category and start editing various tables. You can add relevant categories to the table and start associating a count of resources with each category. You can consider the exercise complete when you have zero resources in the Undefined category. As you update the tables in this section, the tables in the Investment Breakdown section are automatically updated.
6. Ensure that you reallocate the "Undefined" values in the Investment Breakdown section so that they are zero.

### Create Versions of Your Plan

You can now use the versioning capability in plans to view and analyze "what-if" scenarios for your plans. You start by editing the working copy of a plan. Whenever you create a unique permutation, you can save it as a version. You can then continue to edit the working copy. If you arrive at a different permutation, you can save it as another version of the plan. If you are unhappy with the working copy, restore it to any saved versions and continue to edit it.

Some key points to remember are:
- Versioning is limited to a specific plan instance and not the entire plan hierarchy.
- Once you version a plan, it becomes a read-only copy. You cannot update it or overwrite an existing versioned plan.
- You cannot version a plan if it has negative actuals.

**When you are using the Working Copy**, some points to consider are:
- There is only one working copy per plan instance.
- Clarity uses the working copy when aggregating values through the plan hierarchy.
- When you create a version of a plan, it will create it by taking a snapshot of the table values in the working copy.

**When you create a Version copy**, some points to consider are:
- A version is a point-in-time snapshot plan copy of the resource and investment table values.
- A version is a read-only plan and cannot be overwritten or updated.
- A version can be deleted.
- When you restore the version copy, Clarity will overwrite the resource and investment table values in the working copy with the corresponding values from the version copy.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. After updating your plan, click the **Version** button.
5. Enter the name of the version and click **Save**.
6. In the versions drop-down list, click **Working Copy** to start editing the plan again.
7. Click **Manage Versions** to view the list of versions and rename or delete specific versions.
8. If you want to restore a version, select it in the version drop-down list and click **Restore**.

### Synchronize Plans

After creating a Resource plan, you can use the **Synchronize** option to update the resource actuals on the plan. Some key points to remember are:
- The **Sync** button is available on the top-level node. It will be disabled on all child nodes.
- You need edit permissions on the top-level node to synchronize plans.
- When a sync is in progress, all of the plans in the plan hierarchy are not editable. They are read-only until a successful sync is executed on the plan hierarchy.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Click **Actions**, **Sync Resources**, to synchronize the investments.

### Publishing Plans

The Publishing process allows organizations to enforce approval governance and properly balance plans. Some key capabilities include the ability to:
- Ensures plans are properly balanced before a plan is published.
- Allow a published plan to be recalled if changes need to be made.
- Allow Parent plan owners to approve child plans, thus locking child plans from further updates.

When you publish a plan, remember the following points:
- Clarity creates a version of the plan. It will prompt the user to enter a name for the new version.
- For Resource-type plans, only the plan breakdown table values are aggregated to the immediate parent plan.
- The plan becomes read-only. You can "Recall" a plan, which will unpublish it and make it a normal plan version.

> [!NOTE]
> Some key points to remember are:
> - When you publish a plan, it is designated as the plan that Clarity would aggregate in the Plan hierarchy. You can only have one published plan.
> - You can only publish a plan from the Working Copy. If you want to make a prior plan version of the published plan, you must first restore the version to the Working Copy and then publish the plan from the Working Copy.
> - To ensure only correctly balanced plans get aggregated up the plan hierarchy, you can only publish a plan where there are no "Undefined" records in the Breakdown Tables.
> - You can publish both Investment OBS and Resource type plans.
> - You will not be able to delete a published plan.

Follow these steps:

1. Log into Clarity and click **Plans**.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Use the **Configure** button to set up the Plan workspace.
5. Update the Resource and Investment tables and ensure they are correctly balanced and do not include any undefined records.
6. Click the **Publish** button and enter the name in the Save and Publish window. The plan becomes read-only. You can "Recall" and Restore it, which will un-publish the plan, which will make the plan a normal plan version. You will be able to re-publish an updated plan from the Working Copy.

> [!NOTE]
> You can only see the **Recall** button when you are on the Published plan. Once a plan is accepted, you cannot recall the plan.

### Working with the Plan Hierarchy

You can use the Plan Navigator to quickly navigate your organization's hierarchy to view and manage headcount totals. The hierarchy is controlled by the value of the **Parent** attribute specified while creating the plan. You will only see plans in the Plan Hierarchy for which instance or global view access rights.

> [!IMPORTANT]
> Ensure that you publish your child plans to finalize them and roll up data to your parent plan.

When you access a parent plan by using the Plan navigator, you can perform the following actions:
- Add resources associated only to the parent plan. You cannot edit resources associated with the child plan directly from the parent plan.
- Expand the **Previous Plan** and **Current Plan** widgets to display rollup aggregated totals from the plan and immediate child plans.

Follow these steps:

1. Log in to Clarity and click **Plans**. Ensure that the plans have the appropriate parent mapping.
2. Select a relevant plan to open it.
3. Click the **Plan** tab.
4. Use the Plan navigator to navigate to the parent tab.
5. Review Create and Synchronize an Investment OBS-Driven Plan and Resource Driven Actuals to see how to populate and model your plan.
6. Expand the **Previous Plan** and **Current Plan** widgets to view the rollup aggregated totals from the plan and immediate child plans.

> [!NOTE]
> Some key points to remember are:
> - You can use instance and global rights for plans.
> - Ensure that you publish your child plans to finalize them and roll up data to your parent plan.
> - If you can access the Plan, you see all the resources in the grid under "Resources".
> - When adding resources to the plan in the resource modal, you need the **Resource - View - All** access right.
> - If you view a Plan Hierarchy and don't have view access to a mid-level parent, the Plan Hierarchy will display as a flat list.
> - You cannot remove Investment Categories once they have been added to a plan.
> - You cannot remove Roles or Employment Type categories once they have been manually added to a plan or after "Add/Remove" values have been entered for that category.
