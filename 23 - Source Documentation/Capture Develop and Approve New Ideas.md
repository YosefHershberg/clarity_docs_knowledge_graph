# Capture, Develop, and Approve New Ideas

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[02 - Investments/_MOC Investments|Investments]]
- Related domains: [[16 - Development/_MOC Development|Development]]
- Canonical notes:
- [[02 - Investments/Custom Investments/Agreements]]
- [[02 - Investments/Custom Investments/Audit]]
- [[02 - Investments/Team Investments/Canvas Dashboard]]
- [[02 - Investments/Ideas/Canvas Dashboard]]
- [[02 - Investments/Custom Investments/Canvas Dashboard]]
- [[02 - Investments/Ideas/Checklists]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Executing Processes from Clarity (#executing-processes-from-clarity)
- H2: The Ideas Workspace (#the-ideas-workspace)
- H3: Prerequisites (#prerequisites)
- H3: Key Points to Remember (#key-points-to-remember)
- H2: Getting Started with Ideas (#getting-started-with-ideas)
- H3: Create from Template Access Right (#create-from-template-access-right)
- H3: Create an Idea from a Template (#create-an-idea-from-a-template)
- H3: Mark an Idea as a Template (#mark-an-idea-as-a-template)
- H3: Working with the AI Chat Panel (#working-with-the-ai-chat-panel)
- H3: Setup View Options (Ideas Workspace) (#setup-view-options-ideas-workspace)
- H3: Setup Hierarchical Nested Grids (#setup-hierarchical-nested-grids)
- H2: Convert Ideas to Project/Custom Investment Type Using Templates (#convert-ideas-to-projectcustom-investment-type-using-templates)
- H3: Prerequisites (#prerequisites)
- H3: Steps to Convert (#steps-to-convert)
- H3: Conversion Impact Table (#conversion-impact-table)
- H2: Enable 'Allow Time Entry for Unstaffed Resources' (#enable-allow-time-entry-for-unstaffed-resources)
- H3: Impact of Enabling Allow Time Entry for Unstaffed Resources (#impact-of-enabling-allow-time-entry-for-unstaffed-resources)
- H2: Navigating Ideas in Various Layouts (#navigating-ideas-in-various-layouts)
- H3: Managing Records By Using the Grid Layout (#managing-records-by-using-the-grid-layout)
- H3: Managing Records By Using the Board Layout (#managing-records-by-using-the-board-layout)
- H2: Working with Cost Plans (#working-with-cost-plans)
- H3: Create a Cost Plan (#create-a-cost-plan)
- H3: Edit Grouping Attributes (#edit-grouping-attributes)
- H3: About Source Field (#about-source-field)
- H3: Include Actuals from Children in Cost Plan/Budget (#include-actuals-from-children-in-cost-planbudget)
- H3: Rollup Actuals by Team if Available in Cost Plan (#rollup-actuals-by-team-if-available-in-cost-plan)
- H3: Edit Cost Plan Detail (#edit-cost-plan-detail)
- H3: Add Multiple Lines for the Same Grouping Attribute Values (#add-multiple-lines-for-the-same-grouping-attribute-values)
- H3: Set the Plan of Record (#set-the-plan-of-record)
- H3: Copy a Cost Plan (#copy-a-cost-plan)
- H3: Delete a Cost Plan (#delete-a-cost-plan)
- H3: Grouping Attributes (#grouping-attributes)
- H3: View Actuals Posted (#view-actuals-posted)
- H3: Compare Budget to Cost, Actuals and Forecast in Cost Plan Details (#compare-budget-to-cost-actuals-and-forecast-in-cost-plan-details)
- H3: Compare Plans (Cost Plans) (#compare-plans-cost-plans)
- H2: Working with Budget Plans (#working-with-budget-plans)
- H3: Submit Cost Plans as Budget Plans (#submit-cost-plans-as-budget-plans)
- H3: Approve or Reject Submitted Budget Plans (#approve-or-reject-submitted-budget-plans)
- H3: Budget Plan Changes (#budget-plan-changes)
- H3: Create a Budget Revision (#create-a-budget-revision)
- H3: Compare Plans (Budget Plans) (#compare-plans-budget-plans)
- H2: Working with Forecasts (#working-with-forecasts)
- H3: Forecast Cutover (#forecast-cutover)
- H3: Example (#example)
- H3: Other Forecast Definitions (#other-forecast-definitions)
- H2: Working with Benefit Plans and Actual Transactions (#working-with-benefit-plans-and-actual-transactions)
- H3: Create a Benefit Plan (#create-a-benefit-plan)
- H3: Edit Benefit Plans Details (#edit-benefit-plans-details)
- H3: Associate Benefit Plans with Cost Plans (#associate-benefit-plans-with-cost-plans)
- H3: Associate Benefit Plans with Submitted Budgets (#associate-benefit-plans-with-submitted-budgets)
- H3: Actual Transactions (#actual-transactions)
- H3: View Multicurrency Transactions (#view-multicurrency-transactions)
- H2: Staff an Idea (#staff-an-idea)
- H3: Overview of the Staff Grid (#overview-of-the-staff-grid)
- H3: Set Units of Measure (#set-units-of-measure)
- H3: Support for Business Rules in the Staffing Workspace (#support-for-business-rules-in-the-staffing-workspace)
- H3: View Investments Associated with Resources (#view-investments-associated-with-resources)
- H3: Key Points to Consider (#key-points-to-consider)
- H2: Adding Resources to Ideas (#adding-resources-to-ideas)
- H3: Add One or More Roles to the Staff Grid (#add-one-or-more-roles-to-the-staff-grid)

## Executing Processes from Clarity

You want to lock these attributes after updating them so that they cannot be updated till the object instance is ready to be archived. In previous Clarity releases, you need to open Classic PPM and execute a process to lock these attributes. You can now execute a process from the **Properties** module.

You can only execute a process from Clarity when the following conditions are met:
- You have the **Process Start** or **Process Manage** access rights.
- The process has been added to the associated blueprint.

**Follow these steps:**

1. In Clarity, open the relevant object instance.
2. On the **Properties** module:
   a. Select **Actions** and click the relevant process to execute it. The **Actions** button is available if there is more than one process associated with the investment.
   b. Select the **Process** if that is the only process associated with that blueprint.

> [!IMPORTANT]
> Some key points you need to remember are:
> - You can only call processes where `Active=TRUE` and `Available for On-Demand Start=Yes`.
> - If you delete a process definition in Classic PPM, it will remove the generic action for all blueprints using that process definition.
> - When you execute a process in Clarity, you will see a message stating that the process has started successfully.
> - The **Actions** button is only available under the **Properties** module.
> - You can add a maximum of 50 processes to a blueprint.
> - If a process is on hold or disabled, you will get a run time error in Clarity.
> - Processes executed by using the **Actions** button will NOT enforce any partition logic configured on the process definition. If the user selects that generic action, a runtime error will be displayed.
> - All actions defined on the blueprint will display to the end-user, but the end-user will get a run-time error if the end-user selects an action and does not have the process start or process manage to start that process.
> - The **Hide Actions** capability enables you to leverage business rules and enforce fine-grained access control capabilities for actions. You can now use the Hide Actions capability that has been introduced to show relevant actions to specific users.

---

## The Ideas Workspace

The Ideas workspace serves as a centralized hub for capturing, developing, and approving new business initiatives before they evolve into full-scale projects or investments. This workspace is designed to help organizations systematically evaluate and manage their innovation pipeline, allowing teams to screen multiple ideas efficiently and make informed decisions about which concepts deserve further investment and development.

Within the Ideas workspace, users can create ideas from customizable templates to ensure consistency and save time during the initial capture phase. The workspace provides an intuitive, spreadsheet-like interface where teams can easily view, filter, and organize ideas using configurable columns and fields. Organizations can apply their own taxonomy and terminology, making it possible to organize work beyond traditional project structures to include products, value streams, or any custom investment type that aligns with their business model. The workspace also supports hierarchical organization, allowing ideas to be grouped and viewed in unlimited ways depending on business needs.

> [!TIP]
> **Free Clarity Training on Broadcom Academy**
> - You can attend FREE Clarity training by registering at Broadcom Academy.
> - The **Clarity: Demand Management** training can help you leverage the demand management capability in your organization.
> - You can log into Broadcom Academy with your existing Broadcom credentials. If you don't have Broadcom credentials, simply provide your official email address and get started with your training.

### Prerequisites

Before using Ideas, verify that your administrator has granted you the appropriate access rights:
- **Idea Management - Navigate**
- **Ideas Navigate**
- **Ideas - Create**
- **Resource - View Ideas - All** or **Idea - View - All**
- **Resource - Approve Ideas - All** or **Idea - Approve - All**

> [!TIP]
> As an administrator, see **Access Rights Reference** in the English edition of the documentation. The Demand Management Access Rights page describes the access rights that are required to interact with ideas. The rights are generally the same for Classic PPM and Clarity.

### Key Points to Remember
- You can execute a process from projects, custom investments, ideas, roadmap items, and master objects in Clarity.
- To learn more about converting ideas to projects, see **Capture Develop and Approve Ideas**.

The Standard Idea blueprint allows administrators or PMO content designers to configure layouts for ideas based on different business needs. If you create a custom subobject and provide it an API alias, it will be available as a module in the blueprint. The idea blueprint also supports business rules and channels.
- To learn more about Idea Blueprints, see **Blueprints for Ideas**.
- To learn more about custom investments blueprints, see **Ideas Blueprints**.

You can now view and manage hierarchical data for master-object and sub-object instances on a single page. This capability streamlines data management and enhances visibility across related records.

---

## Getting Started with Ideas

This section contains the following topics:
- Create from Template Access Right
- Create an Idea from a Template
- Mark an Idea as a Template
- Convert Ideas to Project/Custom Investment Type Using Templates
- Working With The AI Chat Panel
- Setup Hierarchical Nested Grids
- Enable 'Allow Time Entry for Unstaffed Resources'

### Create from Template Access Right

If you have the **Ideas - Create** access right, you can:
- Create an Idea by using the **+** button in the Grid layout.
- Create an Idea by using the **Insert Row Below** in the Grid layout.
- Create an Idea by using the **New Card** button in the Board view.

> [!NOTE]
> Clarity automatically adds the required fields to the grid or the Details panel when you are creating an Idea.

If you have the **Ideas - Create from Template** access right, you can:
- Create a new Idea by using the **New From Template** button on the board and grid layout.
- Create new Idea based on existing templates.

### Create an Idea from a Template

To save time and effort, and for consistency, create ideas from templates. A template is a framework that helps you quickly get started with new ideas. For example, you may have templates for different kinds of ideas in your organization.

You can create templates in Clarity that you want to duplicate in future ideas of the same type. You can mark an existing idea as a template and copy the contents of the template into each new idea. You can use blueprints to define the fields, sections, and modules for the idea. You can modify any of the copied information from the template in the new idea.

When you create an idea from a template, the application prompts you to enter the information requested by the administrator in the **Create from Template** module of the blueprint associated with the template.

> [!NOTE]
> - You can only create ideas from a template in Clarity. Creating ideas from a template is not supported in Classic PPM.
> - Clarity automatically creates only the effort task since you cannot create tasks on ideas. However, Team Staff can be created in a template that can copy the idea template's contents to the new idea.
> - Clarity will copy second and third-level records associated with the custom sub-objects in the template.

After you provide the information, Clarity copies the following items into the new idea:
- **Blueprint Elements**: The modules, sections, and fields defined in the blueprint for the template.
- **Roles**: After adding a named team member to the idea that matches a role, you can remove the role.
- **Financial Plans**: Both detailed and summary financial plans.
- **Links**: All links are copied. Links can contain parameter variables with dynamic context-sensitive values.
- **Idea To-Do Items**: Any to-do items that are associated with the existing idea template are copied to the new idea. Completed items are reset to Open status.
- **Risks, Issues, and Changes**: The risks, issues, and changes associated with the template are copied over to the new idea.

**Follow these steps:**

1. In the main menu, click **Ideas**.
2. Click **NEW FROM TEMPLATE**.
3. Select the template that you want to use. You can also search for an idea template.
4. Click **Next**.
5. Populate the mandatory details required to create the idea.
6. Click **CREATE**.

The new Idea is created based on the template you selected. To learn more about using blueprints to add fields to the New Idea window, see **Ideas Blueprints**.

### Mark an Idea as a Template

You can mark an Idea as a template by selecting the **Template** flag for the relevant ideas. When users create a new idea by using a template, the **Originating Template** field will be automatically populated.

**Follow these steps:**

1. In the main menu, click **Ideas**.
2. For the relevant Idea in the grid layout, add the **Template** field to the grid.
3. Select the check-box in the **Template** field against the relevant idea to mark as a template.

> [!IMPORTANT]
> Ideas with actual or time cannot be flagged as template.

### Working with the AI Chat Panel

The AI Chat Panel allows you to interact with the AI Agent directly within Clarity. Use it to view automated responses, follow-up prompts, and enter your own queries if permitted. The chat panel is accessible through the AI Agent logo in supported workspaces or modules.

**Follow these steps:**

1. In Clarity, navigate to a workspace or module that supports the AI Agent.
2. Click the AI Agent logo in the page header. The available AI Chat Panels that you can access appear in a drop-down list.
3. Select an AI Chat Panel from the list. The panel opens and displays the prompt response configured by your administrator.

#### View AI Chat Panel Components

Within the AI Chat Panel, you can view and interact with the following elements:
- **Follow-Up Prompts**: Display predefined follow-up questions configured in the AI Agent setup.
- **User Input Text Box**: Type a follow-up response if **Allow Free-Form Input** is enabled.
- **Additional Follow-Up Prompts**: Click the **Expand** icon to view all available follow-up prompts.

#### Use the Chat Panel Interface

You can adjust the chat panel layout to suit your viewing preference:
- **Maximize**: Expand the chat window to cover most of the Clarity interface. You can manually adjust the size of the window as needed.
- **Dock**: Anchor the panel beside the main Clarity window for a side-by-side view.
- **Minimize and Restore**: Temporarily collapse or reopen the chat panel.
- **Close**: Exit the chat panel to end the current interaction.

> [!NOTE]
> Some of the key points to remember when interacting with AI Agents in the AI Chat Panel are:
> - Each follow-up prompt automatically includes all previous prompts, data sources, and LLM responses within the same chat session.
> - Closing the chat panel ends the current LLM interaction and clears the conversation history.
> - Invoking a new AI Agent starts a new, separate interaction session.
> - The AI Agent button for the user is disabled while the agent is running. If the user closes the AI Chat Panel before the current interaction completes, the button remains disabled until the agent finishes processing.
> - If an AI Agent panel is open and the user clicks on a new AI Agent, Clarity closes the current chat and starts a new one.
> - When asking the LLM to build charts, always include the phrase "using highcharts" in your prompt to ensure compatibility with Clarity's licensed charting library.

### Setup View Options (Ideas Workspace)

You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).

**Follow these steps:**

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
5. In **Type**, specify whether you wish to set up Per-Period Metrics using **Periods** or **Duration**:
- **Periods**: Set the Start Period and End Period. The application adjusts the time periods based on the value that you selected for periods.
- **Duration**: Set the Start Period and indicate the number of periods (Duration), with an optional offset from the start.
6. Define if you want to see **Sum of Periods** or **Grand Totals** in the Totals column.
- **Sum of Period** displays the Total (e.g., Actual Cost) for the number of periods in the layout.
- Example: If an Investment has a duration of 12 months; the page is configured to display 6 months. If Sum of Periods is selected then the Totals column will sum up the (e.g., Actual Cost) 6 months displayed in the layout.
- **Grand Total** displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout.
- Example: If an Investment has a duration of 12 months; the layout is configured to display 6 months. If Grand Totals is selected then the Totals column will sum up the (e.g., Actual Cost) for the 12 months of the investment.
7. **Per-Period Metrics** grant you the ability to select specific data from the below options for display within the grid:
- **Total**: Exclusively shows the 'Totals' field without the per-period metric fields in the grid.
- **Periods**: Solely displays the per-period metric fields without the 'Totals' field in the grid.
- **Total and Periods**: Simultaneously presents the per-period metric fields and the 'Totals' field in the grid.

> [!IMPORTANT]
> You have to select the per-period metric attributes from the **Column Panel**.

8. **Select Total and Period Columns Separately**: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.

> [!IMPORTANT]
> When you enable **Select Total and Period Columns Separately**, Clarity disables the Per-Period Metrics setting in View Options.
> When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
> - It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
> - The Columns panel will only display one set of per-period metrics.

9. **Show Total Row**: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu.

**Aggregation types supported by attribute type:**

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TS |
|---|---|---|---|---|---|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | Yes | Yes | Yes | Yes |
| Min/Max | Yes | Yes | Yes | | |
| None | Yes | Yes | Yes | Yes | Yes |

10. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
11. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
12. **Show Nested Subobjects**: Turn on the toggle to view and engage with sub-instances across multiple master instances concurrently.
- **Nested Subobject**: You can choose the specific sub-object to display its sub-object instances within the sub-grid.
13. To configure your own display attributes, choices, and the color of each value, click **Manage Picklists**, **New Picklist**.
    a. Enter a name for your picklist in **Picklist Name**. Each picklist you define can be applied to the current project only.
    b. To add value to your picklist, click **Add Choice**. Edit the name and color for each choice.
    c. Click **Done**.
14. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.
15. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget to quickly cycle through the data for various periods.

> [!NOTE]
> Some of the key points to remember are:
> - You can secure and relabel the TSV attributes using Field Level Security. While TSV attributes can be relabeled, they cannot be secured.
> - You can use the TSV totals in widgets.
> - You can include the custom TSV data in the page.
> - You can edit the custom TSV data in the page.
> - You cannot add TSV totals to the Details Panel.
> - Forecast data will only be displayed in TSV if a detailed cost plan has been created for the investment.
> - Financial data is read-only in the page.
> - If you are using the board layout, you can configure columns, swimlanes, sort, and color.
> - If you are using the timeline layout, you have the Color By option.

### Setup Hierarchical Nested Grids

You can view and manage sub-instances across multiple master instances concurrently.

**Follow these steps:**

1. Log into Clarity.
2. Navigate to the relevant page and click the grid layout.
3. In the grid layout, click **View Options**.
4. Turn on the **Show Nested Subobjects** toggle.
5. In **Nested Subobject**, you can choose the specific sub-object to display its sub-object instances within the sub-grid.
6. Master Grid rows show the **Expand** button.
7. Expand the Master Instance to view the Sub-Grid.

You can view the sub-grid under the master instance.

> [!NOTE]
> Some of the key points to remember are:
> - Any configuration modifications to sub-grids, such as filters, columns, and sorting, are implemented across all sub-grids.
> - When accessing a Details panel, choosing a sub-grid will exhibit the specifics of the sub-instance, as anticipated.
> - Adjustments made in the View options, like decimal preferences, per-period metrics, and text wrapping, are implemented in both the master grid and sub-grids.
> - Certain functionalities, including Export to CSV, Creating a new instance, Data Grouping, and Aggregated Totals row, are inaccessible while viewing sub-grids.

#### Sub-Grid Capabilities

The sub-grid is a generic grid supporting most Standard grid capabilities. Some of the key actions you can perform within a sub-grid are:
- You can right-click a cell on a row to view a context-sensitive menu. Using the right-click context menu, you can:
- Open the Details Panel
- Delete the row
- Star various items to mark them as a favorite
- Create a chart using the data in the sub-grid
- You can hover over a column header to display the Column Heading Options menu with choices for pinning, autosizing, and resetting columns.
- You can use the column filter functionality to quickly identify records of a specific column that match your selection criterion. You can also use different operators in your filter criteria to be more specific about the data you want.
- You can use the **Column Panel** in the hamburger menu of every column to add or remove columns from the sub-grid.

> [!TIP]
> Ensure that **Grid View Options to display Nested Subobject for Investments** is enabled in **Feature Toggles**. This option is enabled by default and will be removed in Clarity 16.4.1.

---

## Convert Ideas to Project/Custom Investment Type Using Templates

You can now convert an approved idea into a project using a template. The conversion uses the new **Create from Template** modal window.

### Prerequisites

You can now convert an approved idea into a project or custom investment (Investment) using a predefined template. As an administrator verify that the idea is in an **Approved** state and ensure that the following user access rights are assigned to enable users to convert ideas to Investment:
- **Ideas Navigate**
- **Idea View**
- **Resource hard book** instance rights on particular users
- **Project Create from Template** / `<Custom_Investment>` **Create from Template**
- **Projects Navigate** / `<Custom_Investment>` **Navigate**
- **Project - Cost Plan - Edit All** / `<Custom_Investment>` **- Cost Plan - Edit All**
- **Project - Benefit Plan - Edit All** / `<Custom_Investment>` **- Benefit Plan - Edit All**
- **Project - Budget Plan - Edit All** / `<Custom_Investment>` **- Budget Plan - Edit All**

> [!IMPORTANT]
> Administrators can manage which Custom Investment Types (CITs) are available for idea conversion by enabling and securing the `Convert from Idea` action through the **Actions** framework in **Administration**. To learn more, see **Actions**.
> Note that this action cannot be applied to the Project type.

**Example:** Sid, a Demand Manager, has evaluated an idea, determined it holds value, and seeks to convert it into an investment for implementation. During his weekly idea review, Sid shortlists ideas aligned with organizational goals. Nicole, the Investment Manager, reviews these shortlisted ideas, identifies those with significant data, and approves them, allowing Sid to proceed. With the new conversion options, Sid can now convert approved ideas into investments available in Clarity, using templates to carry over all critical evaluation details seamlessly.

### Steps to Convert

**Follow these steps:**

1. Log in to Clarity.
2. Navigate to **Ideas**, right-click an approved idea:
- Select **Convert to Project**.
- Select **Convert to Investment** and choose a specific custom investment type.

> [!NOTE]
> If more than three custom investment types are enabled in the **Convert from Idea** action (via Administration > Actions), the right-click menu displays two selection levels. Otherwise, the specific custom investments will appear in the list.

3. Select a template.
4. Select the following options as applicable:
- **Copy Team**
- **Copy Financials**
- **Copy Risks Issues and Changes**
- **Copy Checklists**
5. Click **CREATE**.

The newly converted idea opens on the relevant page.

> [!NOTE]
> - After converting an Idea to an Investment, the Idea status (in the Grid & Board) is updated to **Converted**.
> - You can include the **Originating Idea** status in the Grid, Board, and Details panel.

### Conversion Impact Table

The following table explains the impact of various actions while converting an idea into an Investment:

| Sl. No. | Options Selected While Converting | Template Has | Impact |
|---|---|---|---|
| 01 | Copy Financials, Copy Teams, Copy Risks Issues and Changes | Financials, Teams, Risks/Issues/Changes | All items copied from template |
| 02 | Copy Financials, Copy Teams, Copy Risks Issues and Changes | Financials, Teams, Risks/Issues/Changes | All items copied from template |
| 03 | Copy Risks Issues and Changes | Risks, Issues, and Changes | Only RICs copied |
| 04 | Copy Financials | Financials | Only financials copied |
| 05 | Copy Checklists | Checklists | Only checklists copied |
| 06 | Allow Time Entry for Unstaffed Resources enabled for Idea | The Allow Time Entry for Unstaffed Resources field configured in the Template popup window | Setting carried over |
| 07 | Allow Time Entry for Unstaffed Resources enabled for Idea | The Allow Time Entry for Unstaffed Resources field configured in the Template popup window | Setting carried over |

---

## Enable 'Allow Time Entry for Unstaffed Resources'

The **Allow Time Entry for Unstaffed Resources** field is available in the Investments and Team Investments Workspace. By default, this field is set to `disabled`.

### Impact of Enabling Allow Time Entry for Unstaffed Resources

**01. Effort Task Creation**
- When the **Allow Time Entry for Unstaffed Resources** attribute is enabled for an Investment, an effort task will be automatically created if no tasks exist.
- Additional tasks can still be created alongside the effort task.

**02. Timesheet Availability**
- With the attribute enabled, the Investment and its associated task will be available for Time Entry, even if the user is not allocated in the Staff module or assigned to the task.
- This is an effort task with the Task ID `~rmw`. You can complete the entire timesheet lifecycle using the `~rmw` task, including entering hours, submitting the timesheet, reviewing and approving the timesheet, and posting the effort task.
- Existing rule is still valid: If **Allow Time Entry for Unstaffed Resources** = Yes but **Open for Time Entry** = No, the Investment will not appear in Timesheets.

> [!NOTE]
> The resource must have view access to the Investment Instance to view the effort task as Time Entry in Timesheets. For example, the resource should be granted the `Project - View Management - All` access right.

To learn more, see **Frictionless Cost Accounting**.

---

## Navigating Ideas in Various Layouts

As a manager, you are responsible for managing multiple investments. You want to view the status of all your investments on one page. Click an investment to view all the related sub-objects of the project, such as Conversations, Tasks, Links, Status, Financials, Risks, Issues, Changes, Documents, Details, and Staff of the project, depending on your access rights.

This section contains the following topics:
- Setup View Options
- Managing Records By Using the Grid Layout
- Managing Records By Using the Board Layout
- Setup View Options for the Board Layout
- Managing Records Using the Timeline Layout
- Working with Widgets
- Mark Investments for Deletion in Clarity

### Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Edit Data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the **Conditional Formatting** dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the **Column Panel** to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the **+** or **-** option to shift the values in the date field.
- Use the **Drag Functionality** to populate data.
- Drag up to three column headers to use the **Group By** capability. Then, view the data in the grid as rows of logical groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Use the **Bulk Delete** capability in the Common Grid to delete multiple records.
- Export the common grid data to a CSV file. The Classic PPM user interface supports the export of up to 25,000 rows to CSV file. In this release Clarity supports the export of up to 250,000 rows to CSV files.
- Use the **Search bar** available to filter values based on the name or ID.
- Use **Filters** to quickly identify records that match your selection criterion. The advanced filtering capability allows you to define complex filter conditions.
- Use the **Details Panel**, which is available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using a series of configurable visual widgets.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views with other users.

> [!NOTE]
> To learn more about the grid layout and associated capabilities, see:
> - Clarity Grids
> - Conditional Formatting
> - Widgets
> - Details Panel
> - Saved Views
> - Filters

### Managing Records By Using the Board Layout

You can use the Board layout to view items as cards. You can arrange these cards with drag-and-drop precision on a board layout with columnar swim lanes. Some key features associated with cards are:
- The board layout does not provide the option to create new cards.
- Cards can now display two title fields per card and display the width of the card. If you configure the investment name, it will hyperlink to the relevant investment.
- You can configure a maximum number of six fields across two columns per card.
- You can configure a maximum of six metrics per card, which are configured up to three columns across. Metrics are displayed in an abbreviated format.
- Cards appear in your choice of colors based on the value you select in the **Color** field in **View Options**. Your color selections are saved with the view.
- Card titles default to the **Name** field. If you configure a default value for the Name field in Studio, Clarity uses that value when creating cards. Without a default value, new cards show **New Item** as their default name.
- You can double-click a card to edit its name. You are not limited to using the default name.

---

## Working with Cost Plans

You can create multiple cost plans for a project. However, you can set only one cost plan as your plan of record (POR). By default, the first cost plan is set as the plan of record for a project.

### Create a Cost Plan

**Follow these steps:**

1. Open a project and click **FINANCIALS**. The sub-page for cost plans and budget plans is displayed. To view the existing cost plans for a project click **Cost Plans** and the list appears in a grid layout.
2. Click the **(+)** plus icon. A new line appears in the plan list grid.
3. Complete the required fields including **PLAN NAME**, **PLAN ID**, **PERIOD TYPE**, **START PERIOD**, **FINISH PERIOD**, and **GROUPING ATTRIBUTES**, and various other fields that are available from the column picker.

> [!NOTE]
> The **PLAN ID** field appears only if auto-numbering is turned off for the Cost Plan object in Classic PPM.

> [!IMPORTANT]
> If the `actuals_out_of_date` flag is set to Yes in the Cost/Budget Plans table, Clarity updates the Audit and Actual fields in Cost/Budget Plans. Clarity updates these fields when you perform the following actions:
> - Post the Actuals; the respective investment cost and budget plans get invalidated
> - Adjust the Actuals; the respective investment cost and budget plans get invalidated
> - Create a new Cost Plan using Clarity (Manual or Copy)/API/XOG
> - Populate actions such as:
>   - Populate a cost plan from allocations
>   - Populate a cost plan from assignments
>   - Change the Cost Plan Dates using Clarity/API/XOG
>   - Update the Cost/Units/Revenue using Clarity/API/XOG
> Note: When you navigate to Cost Plan Details or Budget Plan Details, the **Last Updated By** field displays Administrator (which can be configured to a different user, if needed).

### Edit Grouping Attributes

You can edit the grouping attribute values directly within an existing cost plan or a submitted budget detail record. This improves data accuracy and eliminates the need to delete and recreate rows due to incorrect grouping selections.

**Steps to Edit Grouping Attributes:**

1. Open an investment and click **Financials**.
2. In the **Cost Plans** sub-page, select a cost plan from the grid.
3. Click the grouping attribute cell (e.g., Cost Type, Resource Class) in the grid.
4. Select the desired value from the drop-down list.

**What Happens After Editing a Row with Actuals?**
- Clarity clears Actual Cost, Actual Units, and Variances.
- Actuals are repopulated when the relevant jobs run or when you revisit the plan.
- Variances are recalculated based on the updated grouping.

### About Source Field

A read-only field called **Source** is available in the Cost Plan Detail grid. This field identifies how each row was created:
- **Manual** - Entered directly by a user.
- **Populate Action** - Created using Populate from Allocations or Populate from Assignments.
- **Actual Without Planned** - Created when actuals exist for a combination not present in the cost plan.

**Dynamic Behavior of the Source Field:**
- If a row initially shows **Actual Without Planned**, and you use **Populate from Assignments**, the source updates to **Populate Action**.
- If you then manually modify the same row, the source updates to **Manual**.

> [!NOTE]
> Key Points to Remember:
> - You can edit grouping attributes in Financial Plan comparison mode, but only in the selected plan, not in the compared plan.
> - Uniqueness validation is enforced. If the new grouping combination already exists, the system displays the following error: "Combination already exists."

### Include Actuals from Children in Cost Plan/Budget

The **Include Actuals from Children** option in Cost Plans/Budgets allows users to aggregate actuals from child investments into the parent investment's cost plan/budget.

**Key Highlights:**
- **Hierarchy-Based Aggregation**: The investment hierarchy is defined using the existing parent attribute, identifying child investments whose actuals are aggregated into the parent's cost plan/budget.
- **New Attribute in Cost Plans/Budgets**: The **Include Actuals from Children** attribute is now available in the Cost Plans and Budgets page. This allows you to control whether actuals from child investments are included in the parent cost plan/budget.
- **Similar to Standard Attributes**: This new attribute can be used for filtering, grouping, sorting, and more in the grid. You can also secure, relabel, and add tooltip information to it in the Attributes page.
- **Job-Driven Updates**: When you enable Include Actuals from Children and run the **Post WIP Actuals to Financial Plans** job, actuals from child investments are rolled up and added to the parent investment's cost plan/budget.
- **Visual Indicator**: A visual cue indicates when actuals are rolled up from child investments, improving user awareness.
- **Transaction Review**: Drilling into the Actuals amounts on the Cost Plan/Budget Details page will display transactions from both the parent and child investments when the **Include Actuals from Children** field is checked.

**Follow these steps:**

1. Open an investment and click **FINANCIALS**. The Cost Plans sub-page will appear.
2. Configure the **Include Actuals from Children** field in the Columns section and check this field.
3. Open the Cost Plan with the **Include Actuals from Children** field checked. You can now view the aggregated actuals from child investments along with the parent investment's actuals in the Cost Plan/Budget Details.

### Rollup Actuals by Team if Available in Cost Plan

The **Roll up Actuals by Team if Available** option allows you to aggregate actuals by team rather than by individual resource in the Cost Plans/Budgets page.

**Steps to Use:**

1. Open an investment and click **FINANCIALS**. The Cost Plans sub-page will appear.
2. Configure the **Rollup Actuals by Team if Available** field in the Columns section and check this field.

> [!NOTE]
> Ensure that **Resource** is included as one of the grouping attributes in the plan.

3. Open the Cost Plan with the **Rollup Actuals by Team if Available** field checked. You will now see the aggregated actuals by team in the Cost Plan/Budget Details.

> [!IMPORTANT]
> Resources Without a Team: If a resource does not belong to a team but the Roll up actuals per team flag is checked, the resource will still appear alongside the teams in the cost plan.

### Edit Cost Plan Detail

If the estimates have changed for a project, you can edit and update the associated cost plan details from the Details panel. Alternatively, update the line item details for a cost plan detail by editing the rows in the grid. Double-click the cells in the plan detail to edit the planned cost values.

**Follow these steps:**

1. Open a project and click **FINANCIALS**. The sub-page for cost plans and budget plans appear.
2. Open the cost plan from the list that appears in the grid layout. The cost plan details page opens.
3. Double-click the cell and edit the cost for each attribute as required. The total cost is updated in the cost plan details page and is visible in the cost plan.
4. If you select the option **Populate from Allocations** in the Cost Plan List, the cost involved is auto-populated based on preconfigured values. The associated project must have at least one staff member (resource, role, or team) to allow populating from allocations.
5. If you select the option **Populate from Assignments** in the Cost Plan List, the cost involved is auto-populated based on preconfigured values. The associated project must have at least one task assigned to allow populating from assignments.

### Add Multiple Lines for the Same Grouping Attribute Values

Nicole Fleming, a Project Manager, purchases various hardware components (such as Workstations, Printers, and Servers) for the team. She wants to add cost details to the financials. In the Cost Plan Details, Clarity provides the ability to enter multiple lines per grouping attributes. It eliminates the need to maintain offline spreadsheets.

**Follow these steps:**

1. Open an investment and click **FINANCIALS**. The sub-page for Cost Plans appear.
2. Open the cost plan from the list that appears in the grid layout. The cost plan details page opens.
3. Right-click on a row and click **Create Detail Row** to create a detailed (child) row to capture additional details.
4. Enter the description and click **Create**. A branch notation indicates the detailed (child) row of the Summary (parent) row.

> [!NOTE]
> Some of the key points to remember while working with detailed rows in the Cost Plan Details are:
> 1. When you create a detailed (child) row, the summary (parent) row becomes read-only. Any detailed rows update will instantly roll up to the summary row.
> 2. The Detailed (child) records are not imported into the Data Warehouse; however, a child Description table within the DWH stores the description corresponding to these child rows.
> 3. The detailed (child) rows can also be viewed and updated from Hierarchy Financials.
> 4. A summary (parent) record for TSV attributes such as Cost, Revenue, etc. shows aggregated amounts of their corresponding detailed children records.
> 5. TSV attributes such as Actual Cost, Actual Units, etc. are supported only at the summary (parent) level and not at the detailed (child) level.

> [!TIP]
> To keep the Summary (parent) and Detailed (child) rows together in the grid, it is recommended to sort on each grouping attribute first, and last on the Description attribute using multi-sort.

### Set the Plan of Record

The plan of record (POR) is the cost plan that you intend to use as the budget plan for a project. If you have defined multiple cost plans for a custom investment, by default, the first cost plan is set as the plan of record (POR). You can set any other cost plan as the plan of record for a project. On the Plan Details page, the **PLAN OF RECORD** image appears at the top, next to the plan name.

**Follow these steps:**

1. Open a project and click **FINANCIALS**. The sub-page for cost plans and budget plans appear.
2. Open the cost plan from the list that appears in the grid layout.
3. Click the **Actions** menu and select **Make Plan Of Record**. The selected cost plan is now the plan of record for the custom investment.

### Copy a Cost Plan

You can create a cost plan from a copy of an existing cost plan. For example, you might copy a cost plan, edit a portion of it, and delete the rest. The copied plan includes the same grouping attributes, currency, and other details as the source plan.

**Follow these steps:**

1. Open a project and click **FINANCIALS**. The sub-page for cost plans and budget plans appear.
2. Open the cost plan from the list that appears in the grid layout.
3. Click the **Actions** menu and select **Copy**.
4. Complete the required fields including **PLAN NAME**, **PLAN ID**, **PLAN DESCRIPTION**, **PERIOD TYPE**, **START PERIOD**, **FINISH PERIOD**, **BENEFIT PLAN**, and **SCALE BY %**. Here, **Scale By %** defines the percentage by which to scale (increase or decrease) the dollar values in the copied plan. Example: Enter 75 percent to increase the values from the source plan by 75 percent from their original. Default: 0%. No change in values.

> [!NOTE]
> The **PLAN ID** field appears only if auto-numbering is turned off for the Cost Plan object in Classic PPM.

5. Click **CREATE**. The copied cost plan appears for you and other users to view or edit.

### Delete a Cost Plan

You can perform similar steps to delete a cost plan that you no longer need. You can delete the plan of record if it is the only cost plan available for a project. Otherwise, make another cost plan the POR before deleting the current POR.

### Grouping Attributes

Group the cost plan data by the available attributes to analyze how the funds are being allocated for each type within a grouping attribute.

**Follow these steps:**

1. Open a project and click **FINANCIALS**. The sub-page for cost plans and budget plans appear.
2. Open the cost plan from the list that appears in the grid layout.
3. Specify the **Grouping Attributes** from the cost plan. Alternatively, you can specify the grouping attributes from the Details panel. The attributes are also visible from the filter.

The Grouping Attributes you specified in a cost plan are listed as attributes (columns) in the cost plan details page. The attributes let you group and aggregate the cost for a specific attribute.

> [!IMPORTANT]
> **About An Additional Grouping Attribute 'Financial Work Type'**
> You can categorize work by an additional attribute called **Financial Work Type**, which helps with Capital Forecasting. It is a static empty lookup. As an administrator, you can add values to this lookup based on your organization's specific needs.
> **Why is "Financial Work Type" Important?**
> Capital forecasting plays a vital role in financial planning by enabling organizations to anticipate future investment expenditures. The "Financial Work Type" attribute is a key component of this forecasting process, helping to categorize and track financial data efficiently.
> Key points:
> - The "Financial Work Type" attribute has been Data Warehouse-enabled, allowing report designers to retrieve its value in reports when needed.
> - This attribute is not supported in Rate Matrix at this time.

### View Actuals Posted

Nicole would like to view the actual costs posted during the fiscal period for the Projects, which helps to compare the Planned to Actuals for the project.

**Follow these steps:**

1. Team members must submit a Timesheet, or create a manual transaction entry, or add a transaction through the XOG.
2. The administrator must then execute the following jobs in Classic PPM:

| Method for Posting Actuals | Jobs |
|---|---|
| Timesheet Entry | Post Timesheet, Post Transactions to Financial, Post to WIP |
| Transaction Entry | Post to WIP, Post WIP Actuals to Financial Plans |
| XOG | Post Transactions to Financial, Post to WIP, Post WIP Actuals to Financial Plans |

**Follow these steps:**

1. In the main menu, click **Projects**.
2. Open a Project, and click **FINANCIALS**. The cost plan list appears.
3. Click the cost plan name. The Actuals are now displayed in the cost plan details page.
4. The following time-scaled values (TSV) fields for cost plan details are available for selection from the **PER-PERIOD METRICS** field:
- **Cost**: Displays the planned cost.
- **Actual Cost**: Displays the aggregated actual cost for a given fiscal period that is calculated as Actual Units * Cost.
- **Actual Revenue**: Displays the actual billing rate for a given fiscal period that is calculated as Actual Units * Rate.
- **Actual Units**: Displays the aggregated actual unit for a given fiscal period.
- **Cost Variance**: Displays the delta between Cost and Actual Cost.
- **Revenue**: Displays the planned revenue.
- **Revenue Variance**: Displays the delta between Revenue and Actual Revenue.
- **Units**: Displays the planned units.
- **Units Variance**: Displays the delta between Units and Actual Units.

> [!NOTE]
> You can adjust your view of the project grid to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs). The selected TSV fields you selected are listed as attributes (columns) in the cost plan details page. Now, the financial date is in-sync with the latest posted actuals.

5. Click the per-period value under the **Actual Cost** / **Actual Unit** columns to view the actual data for that period. The **Transaction Review** grid pop-up window opens. The values in the Transaction Review grid are non-editable. These values are pre-filtered based on:
- **Grouping Attributes** - It is selected while creating the Cost Plan/Budget.
- **Data Range** - It is picked where you clicked in the financial details page.

> [!NOTE]
> Some of the key points to remember related to the Transaction Review grid are:
> 1. The grid view setting, such as decimal display, is taken from the View Options setting of Actual Transactions.
> 2. The changes cannot be saved in the grid.
> 3. The Details panel is not available in the grid.
> 4. Even when data is grouped in the Financials Details page, you can view the actual data for per-period values.

### Compare Budget to Cost, Actuals and Forecast in Cost Plan Details

Rita Lee, a Financial Manager, wants to present the current budget to investment stakeholders. Hence, she wants to compare planned, approved, and actual costs. The comparison assists stakeholders in making corrective decisions regarding investments based on budget versus planned costs, actuals, and forecasts.

In the Cost Plan Details, Clarity provides the ability to view current budget (i.e. the latest Approved Budget) and its variance with Cost, Actual Cost and Forecast in the Cost Plan Details page.

**Follow these steps:**

1. Open an investment and click **FINANCIALS**. The sub-page for Cost Plans appear.
2. Open the cost plan from the list that appears in the grid layout. The cost plan details page opens.
3. Click **View Options** (Gear Icon) and select the following fields in **Per-Period Metrics**:
- Cost
- Budget
- Budget To Cost Variance
- Actual Cost
- Budget To Actual Variance
- Forecast
- Budget To Forecast Variance
- Forecast % of Budget Cost
4. Close View Options. You can see the comparison between actuals, budget, and forecast in the grid.

> [!TIP]
> It is recommended to add less than or equal to 12 time periods with three TSV fields in the grid.

### Compare Plans (Cost Plans)

You can compare different plans within an Investment, such as:
- Cost Plan Detail 01 vs Cost Plan Detail 02
- Cost Plan Detail 01 vs Budget Plan Detail 01
- Budget Plan Detail 01 vs Budget Plan Detail 02

**Follow these steps:**

1. Open an investment and click **FINANCIALS**. The sub-page for Cost Plans appears.
2. Open the cost plan from the list that appears in the grid layout. The cost plan details page opens.
3. In **Compare to:** click the **Cost Plans** / **Budgets** button.
- **Cost Plans** button: Lists cost plans with matching grouping attributes that are available for selection. Unavailable Cost Plans (conflicting grouping attributes) are shown in read-only mode. The Plan of Record (POR) of Cost Plan is indicated with a star icon.
- **Budgets** button: Lists budget plans with matching grouping attributes that are available for selection. Unavailable Budget Plans (conflicting grouping attributes) are shown in read-only mode. The Current Budget is indicated with a star icon.
4. Select a plan from the drop-down list. The chosen plan appears beside `Compare to:` <Plan Name>. You can view the separate columns for Selected Plan, `Compare To:` <Plan>, and Delta under the supported per-period metrics.

> [!NOTE]
> Turn on **Show Deltas** in View Options to show the Deltas column in the grid while comparing plans.

**Changes that occur when you select a plan to compare:**
- Clarity shows the Selected Plan followed by the `Compare to:` <Plan>.
- `Compare to:` <Plan> columns are highlighted with a grey background in the grid.
- In Delta column:
- Positive numbers are shown in Green
- Negative numbers are shown in Red
- A tick mark appears for the `Compare to:` <Plan> in the drop-down list.
- A prefix `Budget` text is added when you select a budget plan to compare.

> [!IMPORTANT]
> Some of the key points to remember while comparing plans are:
> - The supported attributes for comparison include: Cost, Forecast, Revenue, Actual Revenue, Units
> - Non-supported attributes or detail rows are shown only for the Selected Plan.
> - The following will be available for the selected Cost Plan but not the `Compare to` Cost Plan:
>   - Editing Per-Period Metrics
>   - Row-level actions such as Add Row, Open Details, Star, Create Detail Row, Insert Row Below, and Delete Row
>   - Cost Plan actions such as Submit for Approval, Populate, Copy, and Delete
> - The Hamburger menu settings are accessible only for the Selected Cost Plan columns, yet the settings affect both the `Compare to:` <Plan> and Deltas columns.
> - To remove the comparison from the grid, select **None** from the Compare to: drop-down list.
> - Export to CSV is disabled while comparing plans.
> - Widgets render data from the Selected Plan (not the `Compare to:` <Plan>).

---

## Working with Budget Plans

When a cost plan is approved, it becomes the budget plan for an investment. You can submit a portion of a cost plan for approval by varying the start and end dates for the submission. Only the portion between the new start and end dates is submitted for approval. When a cost plan is approved, it becomes a budget plan with a new version number. If there is a previous budget, it is saved separately and can be viewed but not edited.

When submitting a cost plan as a budget plan, remember these rules:
- If a budget plan exists, the submitted cost plan must include the same grouping attributes to merge the submitted cost plan data with the existing budget plan data. If the grouping attributes are not the same, replace the existing budget plan or cancel the submission.
- You can only submit or approve one budget plan at a time.
- When a submitted budget is approved, the budget plan becomes the POR.
- You can edit a submitted budget, but you cannot edit an approved or rejected budget.
- If an approved budget exists, the submitted cost plan data can be either merged with or can replace the approved budget.

This section contains the following topics:
- Submit Cost Plans as Budget Plans
- Approve or Reject Submitted Budget Plans
- Budget Plan Changes
- Create a Budget Revision
- Compare Plans

### Submit Cost Plans as Budget Plans

Submit a cost plan as a budget plan to create a new approved budget, or to update the budget after updating the cost plan. A cost plan must be designated as the POR before you can submit it for approval.

**Follow these steps:**

1. Click the relevant investment page.
2. Open the investment and click **Financials**. By default, the cost plan that is designated as the Plan of Record appears.
3. Click the **Actions** menu and select **SUBMIT FOR APPROVAL**.

> [!NOTE]
> To submit a budget plan, click **Plan List** and select the **Actions** menu associated with the POR.

4. Complete the following fields:
- **PLAN NAME**: Enter the name of the budget plan.
- **PLAN ID**: Defines unique ID for the budget plan.
- **PLAN DESCRIPTION**: Provide a brief explanation of the budget plan.
- **PERIOD TYPE** (Non-editable): Displays the period type associated with the cost plan.
- **START PERIOD**: Displays the start period of the budget plan. To submit a portion of the cost plan rather than the whole plan for the budget, select a different start period.
- **FINISH PERIOD**: Displays the end period of the budget plan. To submit a portion of the cost plan rather than the whole plan for the budget, select a different end period.
- **BENEFIT PLAN**: Associate a benefit plan with the budget plan. If you have associated a benefit plan with the cost plan, the same benefit plan will get attached to the budget plan.
- **SUBMIT OPTION**:
- **Replace**: Selected by default when you are creating a new budget plan.
- **Merge**: Available when you revise a budget plan. Allows you to merge the changes with the existing budget plan.
5. Submit the cost plan for approval.

### Approve or Reject Submitted Budget Plans

**Follow these steps:**

1. Click the relevant investment page.
2. Open the investment and click **Financials**. By default, the POR appears.
3. Click **Plan List** and click **BUDGETS** to review the list of budgets.
4. In the **Search bar**, enter the name of the budget or the PLAN ID to identify the budget you want to edit.
5. To approve or reject the budget, click the **Actions** menu and then select **APPROVE BUDGET** or **REJECT BUDGET**.
6. To edit a budget, click it. The budget opens.
7. Add an additional row or remove a row from the budget.
8. Edit the amounts in the **BUDGET** column.
9. After you have finalized your changes, click the **Actions** menu and select **APPROVE BUDGET** to approve the budget.
10. To reject a budget, select the **REJECT BUDGET** option.

### Budget Plan Changes
- **Combination Already Exists**: If a "Combination Already Exists" error message appears, it means you added a new row to a budget plan with the same grouping attributes as a previous entry. In this situation, you can delete the unnecessary row.
- **Cannot Edit an Approved Plan**: After you submit a cost plan for approval, it becomes the submitted budget plan. You can edit the submitted budget plan; however, you cannot edit the budget plan after it is approved.

### Create a Budget Revision

An approved cost plan becomes the budget plan for a project. Since projects are dynamic and continuously change, you can revise various parts of the budget, or can replace the budget entirely. You can make two types of revisions to an approved budget plan:

**Merged Budget Plan Revision:**
- Submit a cost plan with new line items and merge the changes with the existing budget plan.
- Submit a portion of a cost plan by varying the start and end dates for the submission, or update the field values in specific time periods. You can submit only the changed time periods and can merge them with the budget.

**Replacement Budget Plan Revision:**
- Submit a cost plan with deleted line items and replace the budget to remove those line items from the budget plan.
- Create a cost plan, using different grouping attributes or time period types, and replace the budget.

Both revision types provide approval history. However, the replace feature enables you to delete line items that are no longer needed, and to revise grouping attributes and fiscal time periods.

When you submit a cost plan that revises an existing budget, you specify whether to merge or replace using the **Submit Options** pull-down list. This field appears only when there is at least one approved budget. If the new cost plan has a different structure than the existing budget, **Replace** is the only option.

When your cost plan is approved, it becomes the revised budget plan with a new version number. You can view the previous version of the budget, which is saved separately. You cannot edit either previous budget plans or the currently approved budget plan.

> [!TIP]
> Another simple example where you might want to replace a budget is when you no longer need a line item in the budget plan. If you want to remove a line item from the budget plan, delete the line item in the cost plan. Submit the revised cost plan as a replacement for the budget plan.

**Follow these steps:**

1. Click **Projects**.
2. Open a project and click **Financials**.
3. Open an approved/rejected cost plan that is designated as Plan of Record.
4. Click the **Actions** menu and select **SUBMIT FOR APPROVAL**.
5. Complete the following fields:
- **PLAN NAME**: Enter the name of the budget plan.
- **PLAN ID**: Defines unique ID for the budget plan.
- **PLAN DESCRIPTION**: Provide a brief explanation of the budget plan.
- **PERIOD TYPE** (Non-editable): Displays the period type associated with the cost plan.
- **START PERIOD**: Displays the start period of the budget plan.
- **FINISH PERIOD**: Displays the end period of the budget plan.
- **BENEFIT PLAN**: Associate a benefit plan with the budget plan.
- **SUBMIT OPTION**:
- **Replace**: Allows you to replace the existing budget plan.
- **Merge**: Available when you revise a budget plan. Allows you to merge the changes with the existing budget plan.
6. Click **Submit**.

### Compare Plans (Budget Plans)

You can compare different plans within an Investment, such as:
- Cost Plan Detail 01 vs Cost Plan Detail 02
- Cost Plan Detail 01 vs Budget Plan Detail 01
- Budget Plan Detail 01 vs Budget Plan Detail 02

**Follow these steps:**

1. Open an investment and click **FINANCIALS**. The sub-page for Budgets appears.
2. Open the budget plan from the list that appears in the grid layout. The budget plan details page opens.
3. In **Compare to:** click the **Budgets** / **Cost Plans** button.
- **Budgets** button: Lists budget plans with matching grouping attributes that are available for selection. Unavailable Budget Plans (conflicting grouping attributes) are shown in read-only mode. The Current Budget is indicated with a star icon.
- **Cost Plans** button: Lists cost plans with matching grouping attributes that are available for selection. Unavailable Cost Plans (conflicting grouping attributes) are shown in read-only mode. The Plan of Record (POR) of Cost Plan is indicated with a star icon.
4. Select a plan from the drop-down list.

> [!NOTE]
> Turn on **Show Deltas** in View Options to show the Deltas column in the grid while comparing plans.

**Changes that occur when you select a plan to compare:**
- Clarity shows the Selected Plan followed by the `Compare to:` <Plan>.
- `Compare to:` <Plan> columns are highlighted with a grey background in the grid.
- In Delta column:
- Positive numbers are shown in Green
- Negative numbers are shown in Red
- A tick mark appears for the `Compare to:` <Plan> in the drop-down list.
- A prefix `Cost Plan` text is added when you select a cost plan to compare.

> [!IMPORTANT]
> Some of the key points to remember while comparing plans are:
> - The supported attributes for comparison include: Cost, Forecast, Revenue, Actual Revenue, Units
> - Non-supported attributes or detail rows are shown only for the Selected Plan.
> - The following will be available for the selected Plan but not the `Compare to` Plan:
>   - Editing Per-Period Metrics
>   - Row-level actions such as Add Row, Open Details, Star, Create Detail Row, Insert Row Below, and Delete Row
>   - Budget Plan actions such as Approve Budget, Reject Budget
> - The Hamburger menu settings are accessible only for the Selected Plan columns, yet the settings affect both the `Compare to:` <Plan> and Deltas columns.
> - To remove the comparison from the grid, select **None** from the Compare to: drop-down list.
> - Export to CSV is disabled while comparing plans.
> - Widgets render data from the Selected Plan (not the `Compare to:` <Plan>).

---

## Working with Forecasts

Cost Plan and Budgets details have two Forecast attributes:

1. **Forecast** is defined as the sum of the actual amount for the fiscal period completed and the planned amount for the current fiscal period and the fiscal period in the future:
- For the fiscal period completed: `Forecast = Actual Cost`
- For the current fiscal period and the fiscal period in the future: `Forecast = Planned Cost`

2. **Forecast Variance** is defined as the difference between the planned cost and forecast:
- `Forecast Variance = Planned Cost - Forecast`

### Forecast Cutover

Here are the formulae for Forecast based on Forecast Cutover:
- Till the forecast Cutover: `Forecast = Actual Cost for the fiscal period`
- After the forecast Cutover date: `Forecast = Actual Cost for the fiscal period ended + Planned Cost for the fiscal period in the future`

Forecast Cutover allows you to overwrite how Forecast is calculated. When you populate the **Forecast Cutover** field, Clarity will calculate Forecast as the sum of the actual amount till the Forecast Cutover date and the planned amount for the fiscal period in the future.

### Example

The details of posted actuals for September, October, November:

| Period | Month | Posted Actuals |
|---|---|---|
| September | 01 September 2021 | (posted) |
| October | 01 October 2021 | (posted) |
| November | 01 November 2021 | (posted) |

**The Forecast and Forecast Variance:**

| Period | Transaction Class | Resource Class | Cost | Actual Cost | Forecast | Forecast Variance |
|---|---|---|---|---|---|---|
| 2021-09 | External Labor | Offshore | 10,000 | 9,000 | 9,000 | 1,000 |
| 2021-10 | External Labor | Offshore | 10,000 | 9,000 | 11,258 | 2,258 |
| 2021-11 | External Labor | Offshore | 10,000 | 9,000 | 10,000 | 0 |

In October, the actuals are posted on 01 October 2021. So, Clarity takes the actual cost of October completely based on the forecast cutover date, along with the planned cost for the remaining seven days.

Here is the calculation:

`Forecast = Actual Cost + Planned Cost = 9,000 + ((10,000/31)*7) = 9,000 + 2,258 = 11,258`

**Follow these steps:**

1. Open an investment and click **FINANCIALS**.
2. In Cost Plan, click the **(+)** plus icon.
3. Complete the required fields.
4. Open the Column panel and check **Forecast Cutover**.
5. Add a date in the **Forecast Cutover** column.
6. Open the newly created cost plan.
7. Edit the cost plan details.
8. Navigate to **View Options**, **PER-PERIOD METRICS**.
9. Select **Actual Cost**, **Cost**, **Forecast**, and **Forecast Variance**.
10. Close View Options.
11. Click the next/previous arrow in **PER-PERIOD METRICS** to view the next/previous period details.

An Investment is planned for 12 months with a budget of $120,000. After three months, the amount spent is $27,000. The Forecast Cutover is set for October 25, 2021.

### Other Forecast Definitions
- **Total Forecast** is defined as the sum of all forecast amounts between the enclosing fiscal periods (based on Sum of Periods and Grand Totals setting in View Options).
- **Total Forecast Variance** is defined as the difference between Total Planned/Budgeted Cost and Total Forecast:
- `Total Forecast Variance = Total Planned/Budgeted Cost - Total Forecast`

> [!NOTE]
> The forecast attributes are not available in Classic PPM.

---

## Working with Benefit Plans and Actual Transactions

The Financials module in Clarity supports Benefit Plans. Creating a benefit plan and associating it with a cost plan allows you to estimate the benefit from custom investments or Net Present Value (NPV) on a custom investment.
- The cost plans follow the approval process to become a formal budget; however, there is no need to approve benefit plans.
- A benefit plan can be associated with multiple cost plans; however, a cost plan can have only one associated benefit plan.
- To manage benefit plans, create a benefit plan to associate with cost plans or update existing plans.

> [!NOTE]
> You cannot delete a benefit plan that is associated with any cost or budget plan.
- Remember that the saved views are shared across the financial modules of different investment types. For example, if you save a view in the Benefits Plan grid for a custom investment, the same view is available in the Benefits Plan grid for ideas and projects.

### Create a Benefit Plan

**Follow these steps:**

1. Open a custom investment and click **FINANCIALS** module.
2. Click **Benefit Plans**, and click the **(+)** plus icon.
3. Complete the following fields:
   a. **Name**: Enter a name for the benefit plan.
   b. **Period Type**: Defines the time period unit that appears on the benefit plan, such as Weekly, Monthly, Quarterly, or Annual.
   c. **Start Period**: Defines the first time period to include in the plan.
   d. **Finish Period**: Defines the last time period to include in the plan.
   e. **ID**: Enter an ID for the benefit plan.
4. Save the changes.

### Edit Benefit Plans Details

Use these steps to add line item details to a new benefit plan. The details that you add appear under the Detail field on the benefit plans details list page. You can only define details for the time periods that are applicable to the benefit plan.

**Follow these steps:**

1. With the benefit plan open, click the **(+)** plus icon.
2. For each benefit detail, complete the following fields in the Benefit Details section:
   a. **Benefit Class**: Select an option in the Benefits Class field.
   b. **Benefit Subclass**: Select an option in the Benefit Subclass field.
   c. **Description**: Enter a brief explanation of the plan.
3. Review the following fields for each benefit detail line item:
   a. **Benefit**: Defines the planned benefit amount for the time period.
   b. **Actual Benefit**: Defines the actual benefit amount for the time period.
   c. **Variance**: Displays the difference between the actual and the planned benefit for the time period.

### Associate Benefit Plans with Cost Plans

**Follow these steps:**

1. From the Cost Plan list, select a cost plan.
2. In the **Benefit Plan** field, select a benefit plan.

### Associate Benefit Plans with Submitted Budgets

The benefits plan that is associated with a cost plan carries over to the submitted budget. This association can only be changed while the budget is in a submitted state. Once approved, the benefit plan association cannot be changed.

**Follow these steps:**

1. From the budget plan list, select the budget plan.
2. In the **Benefit Plan** field, select a benefit plan.

### Actual Transactions

In the Financials modules, along with the Cost Plans, Budget Plans, and Benefit Plans, you can now see the **Actual Transactions** grid. This grid is non-editable and displays the actual costs posted through transactions for an investment by transaction date, quantity, cost, and currency information.

With the Actual Transactions grid, a financial manager can:
- Better understand an investment's financial visibility.
- View the list of transactions that are posted and an overall summary of all the transactions associated with the investment in a single place.
- Compare transaction currency amounts to converted currency amounts by task and resource.

Clarity displays actual transactions by using the generic grid and inherits all the generic grid capabilities. You can see the Details panel when you select a row in the grid. However, you cannot perform these generic grid capabilities:
- Edit a row in the grid
- Add or delete a row
- Right-click context menu

#### Access Rights

Ensure that you have the following access rights to access the Actual Transactions grid:
- `<Investment>` - Cost Plan - View
- `<Investment>` - Cost Plan - Edit
- `<Investment>` - Budget Plan - View
- `<Investment>` - Budget Plan - Edit

#### Source for Actual Transactions

The data in the Actual Transactions grid populates after the following jobs are executed in Classic PPM:

| Method for Posting Actuals | Jobs |
|---|---|
| Timesheet Entry | Post Timesheet, Post Transactions to Financial, Post to WIP |
| Transaction Entry | Post to WIP, Update Financial Plan Actuals and Forecast |
| XOG | Post Transactions to Financial, Post to WIP, Update Financial Plan Actuals and Forecast |

### View Multicurrency Transactions

You can now view multicurrency transactions in the grid. This enhancement allows you to record, view, and analyze financial transactions across multiple currencies with accurate conversion and reporting.

This enhancement includes:
- **Home or Investment Currency**: The currency associated with the investment.
- **Billing Currency**: The currency used for invoicing and billing.
- **Reporting Currency**: The currency used for corporate reporting or consolidation.
- **Transaction Currency**: The currency selected when entering a transaction manually.

**Follow these steps:**

1. Log in to Clarity.
2. Navigate to the relevant page.
3. Configure the required currency fields using **Columns**.
4. View the transactions in different currencies directly in the grid.

---

## Staff an Idea

The Staffing grid provides a comprehensive resource management capability that enables organizations to strategically allocate their workforce and resources across various investments. As a resource manager, you can use the Staff grid to identify and add people, roles, teams, and even non-labor resources by name or ID, providing complete visibility into resource availability, allocation percentages, task assignments, and actual hours worked.

The staffing functionality considers four key factors when making resource allocation decisions: availability (the amount of time a resource is available for work), allocation (the percentage of time a resource is assigned to an investment), assignments (the various tasks a resource is assigned to within an investment), and actuals (the hours entered by a resource in a timesheet against specific tasks).

### Overview of the Staff Grid

You can use the Staff Grid to identify and add people, roles, teams, and even non-labor resources by name or ID. The Staff Grid has the following fields in the default view:
- **Role**: Defines the role of the staff member that is requested for the investment.
- **Booking Status**: Defines whether the staff member is tentatively scheduled (soft) or committed (hard) to work on the investment.
- **Open for Time Entry**: Indicates if the staff member can enter time on their timesheets for the investment. If you clear the checkbox, a staff member cannot log time for a specific investment.
- **Start**: Defines the start date for the allocation for the staff member.
- **Finish**: Defines the finish date for the allocation for the staff member.
- **Allocation**: Defines the total availability (planned or committed) of the staff member to the investment.
- **Actuals**: Defines the actuals posted by the staff member against the investment.
- **ETC**: Defines the total assignment of the staff member to the investment tasks.
- **Default Allocation**: Defines the default allocation as 100%. You can edit the default allocation percentage.

> [!NOTE]
> You can use the column panel to search and add relevant fields to the grid.

> [!TIP]
> Whenever you edit a task to add/remove resources or change the ETC, the changes are reflected in the Staff grid.

### Set Units of Measure

You can configure Clarity to display hours or days instead of full-time equivalent (FTE). FTE is a method for normalizing data for full and part-time resources and is calculated based on the standard calendar.

**Follow these steps:**

1. Click the drop-down menu next to your avatar and username at the top right.
2. Select **SETTINGS**.
3. Click **GENERAL**.
4. In the **Unit of Measure** field, select **FTE**, **Days** or **Hours**.
5. Click **X Close**.

### Support for Business Rules in the Staffing Workspace

The business rules capability in Clarity has been extended to support the Staff Object. This allows administrators to give stakeholders more control over editing and visibility of staffing data based on their requirements.

Consider a scenario in which you want to make the Staffing module read-only when the work status of a project is **On Hold**. In this scenario, you can create and associate a business rule with the Staff object. You can then select "Staff" in the Target object and use the **View Page** rule type. You can then use a filter with the **Work Status** attribute and then select the **Disable Editing Target Object** and **Disable Deleting Target Object**.

### View Investments Associated with Resources

You can now view resource-specific staffing allocation data directly from the **Staff** tab on an investment (Project, Idea, Custom Investment). You can edit the investment blueprint and add the **Investment** module as a sub-module for the Staff tab.

Some key benefits:
- **Unified Resource View**: Resources can be viewed alongside their investment allocations, eliminating the need to switch between the Resources and Staffing workspaces.
- **Streamlined Decision Making**: Managers can make informed resource allocation decisions with immediate access to the investment context and its financial implications.

**Follow these steps:**

1. Open an investment and click **Staff**.
2. Click an individual allocation and select the **Investments** tab to view investments associated with the resource. You can use the **Resource Summary Mode** to view allocations or usage for the resource as histograms.
3. You can also click a record, click **Details**, and then click **Investments** to view investment details on the Details panel.

> [!NOTE]
> - Administrators need to configure the Staff module for projects, ideas, and custom investments so that the Investment module is available as a tab.
> - Users can utilise the Resource Summary mode to view allocations or usage for the resource as histograms. These histograms utilise colour thresholds to indicate whether a resource is over-allocated, under-allocated, or operating within optimal capacity.
> - You can click a resource in the Staff tab and view investment allocations on the Investments tab in the Details panel. You can expand the tab and use the Resource Summary mode.

### Key Points to Consider
- **Resource Allocation Fundamentals**: When working with investments, it's essential to understand the four key factors that drive effective staffing decisions: availability, allocation, assignments, and actuals.
- **Booking Status Management**: Clarity supports different booking statuses, including soft (tentatively scheduled) and hard (committed) allocations, with the added capability for mixed bookings where planned and hard allocations differ.
- **Access Rights and Security**: Proper access rights configuration is critical for effective investment management. Users need appropriate combinations of project edit rights and resource booking rights to perform various staffing operations.
- **Replacement and Reallocation Capabilities**: Clarity provides sophisticated functionality for replacing staff members and reallocating resources, supporting both partial and complete replacements.

---

## Adding Resources to Ideas

### Add One or More Roles to the Staff Grid

You can start by adding the **Requirement Name** field to the Staff Grid. You can then add multiple instances of the same role to an investment.

**Follow these steps:**

1. In the main menu, click the relevant investment page.
2. Open an investment and click **Staff**.
3. Apply one or more filters to constrain the volume of staff members in a large list.
4. Use the column panel to identify and add the **Requirements Name** attribute to the grid.
5. Click **Add Row**. This button appears only for users who have the proper booking rights.
6. Search for a resource, role, or team by name or ID. For resources, you can also search by primary role such as architect, business analyst, and so on.
7. After you add a role, update the **Requirement Name** column to reflect your requirement accurately.

### Identify and Add Resources

Project managers and Resource Managers typically use **Allocations Timeline** on the Staffing page to identify resources for various investments. A sample workflow:

1. They use the **Allocations by Investments** view to review the roles that are associated with an investment.
2. They use the **Allocations by Resource** view to review the current resource allocation and identify potential resources.
3. They can then allocate resources by any of the following methods:
   a. Replace a role with a resource directly from the Staffing page.
   b. Replace a role with a resource directly in the investment by using the Staff grid.

### Add Staff Members to an Investment

You can add resources, roles, or teams to an investment from the Staff module using one of two options:
- Using the **Add Row** button to add the resource, role, or team.
- Using the **Add Staff** button to add resources, roles, and teams to an investment in Clarity.

#### Use the Add Row Button

**Follow these steps:**

1. Open an investment and click **Staff**.
2. In the **Staff** field, double-click the resource, role, or team that you want to replace.
3. Complete one of the following tasks:
- Search for a resource by name, ID, or primary role or select from the drop-down list.
- Search for a role or select one from the drop-down list.
- Search for a team or select one from the drop-down list.

#### Use the Add Staff Button

You can use the new **Add Staff** button to add resources, roles, and teams to an investment in Clarity. After you click the Add Staff button, you can choose if you want to add resources, roles, or teams.

**Follow these steps:**

1. Open an investment and click **Staff**.
2. Click **Add Staff** and select one of the following options:
- Resources
- Roles
- Teams
3. Based on your selection, Resources, Roles, or Teams are displayed in the Clarity common grid.
4. Use the filter and search option to identify resources, roles, or teams that need to be added to the investment.
5. Click **Add** to add the resources, roles, or teams to the investment.

> [!NOTE]
> You can add inactive resources to an investment using the **Add Staff** button. Clarity allows this flexibility to help users allocate newly created resources that may be set to Inactive initially. However, if you want to prevent this behavior, you can revoke Booking Rights for those resources.

> [!TIP]
> You can use the following features to effectively edit data in the grid:
> - **Relative Date Shifting**: You can use the **+** or **-** option to shift the values in the date field. For example, you can enter "+2" to increase the date by two days.
> - **Using the Drag Functionality to Populate Data**: You can populate data in the grid layout by dragging the previous value. The drag functionality supports number sequencing.

---

## Replace Staff Members in Ideas

### Reallocating Staff Members (Partial or Complete)

The Resource Reallocation and Resource Replacement capabilities have been enhanced to support partial reallocation. Partial allocation provides the following advantages:
- **Prevent Resource Overallocation**: Avoid the overallocation of resources across multiple investments.
- **Enable Work on Multiple Investments**: Partial allocation enables resources to contribute to multiple investments simultaneously.
- **Create More Accurate Staffing Plans**: Implementing partial allocation allows for more realistic investment planning.

When reallocating resources or roles, you can update the following attributes:
- Start
- Finish
- Default Allocation

**Follow these steps:**

1. Log into Clarity and click the relevant investment.
2. Select the **Staff** tab.
3. Right-click a resource/role and select **Reallocate**.
4. In the **Reallocate "Investment Name"** window:
   a. Toggle the **Use Investment Start** and **Use Investment Finish** toggles to either reallocate the resource/role for the entire investment duration or specify the new Start and Finish dates.
   b. Set the **Default Allocation** percentage.
   c. Select **Partial** or **Total** override type. Partial allocation ensures that Clarity only updates allocations within the specified date range and allocation percentage.
   d. Click **Reallocate** to complete the process.

### Replace Staff Members In an Investment (Partial or Complete)

You can also use the Staff module to replace roles and resources in investments. You can replace the following staff members:
- Replace a role with a different role, a team, or a resource.
- Replace a resource with a different resource, team, or role.
- Replace a team with a different team, a resource, or a role.

**Follow these steps:**

1. Open an investment and click **Staff**.
2. Right-click a resource and click **Replace**.
3. In the **Replace "Resource Name"** window:
   a. Toggle the **Use Investment Start** and **Use Investment Finish** toggles.
   b. Select **Partial** or **Total** override type.
   c. Click **Replace** to complete the process.
4. You can also double-click the resource, role, or team that you want to replace.

### Replace a Role with Another Staff Member

With investment edit access and booking rights for the resource and role, you can replace a role with any other staff member (resource, role, or team). The original role is either partially or completely replaced based on the following factors:
- The combination of booking rights on the existing role and the booking rights on the target role, resource, or team. If the booking status of the role is hard, the role remains on the investment. The user with hard booking rights to the role can remove it.
- The project management setting **Reassign Tasks when replacing Role** (available in Classic PPM, under Administration).

When replacing a role, you can only select a target resource or team that is not already on the investment.

### Replace a Resource with Another Staff Member

You can replace a resource with any other staff member (resource, role, or team). You can only select a target resource or team that is not already on the investment. You require edit access to the investment and soft booking rights for the resources and roles. If the existing resource allocation is hard, then you require hard booking rights to replace the existing resource.

**If replacing an existing resource with actuals posted on the investment:**
- The target staff member is allocated based on the default allocation percentage.
- The target staff member is assigned to the tasks with the remaining ETCs.
- The existing resource remains on the investment and is assigned to tasks where actuals are posted.
- The existing resource allocation amount is reset to zero.
- All existing staff member task assignment ETC amounts are reset to zero.

**If replacing an existing resource with task assignments:**
- The target staff member is added to the remaining allocation and all relevant task assignments.
- The start date of the staff member allocations is set after the existing Resource ActThru date.
- For any task where the existing resource has booked actuals, the target staff member is assigned to the task with the remaining ETC.

**If replacing an existing resource without posted actuals:**
- The target staff member replaces the existing resource for all allocations and task assignments.
- The existing resource is removed.

> [!NOTE]
> The same rules apply when you replace a team with a staff member.

---

## Delete Staff Members in Ideas

You can use the Staff grid to remove a resource from the investment. You require the following investment rights along with resource or role hard or soft booking rights to remove staff members from the grid:
- `<investment>` - Edit (Instance or OBS)
- `<investment>` - Edit Management (Instance or OBS)
- `<investment>` - Edit Management - All (Global)

You can always remove any roles from the investment staff. You can remove resources from the investment staff if they satisfy the following conditions:
- No posted actuals are associated with the resource.
- No requisitions in booked status are associated with the resource.
- If a resource has an associated requisition that is in booked status, you must first unbook and then delete the requisition in Classic PPM. After that, you can remove the resource from the investment staff.

**Follow these steps:**

1. Open an investment and click **Staff**.
2. Click any cell in the row for the staff member that you want to remove.
3. Right-click the cell and select **Delete Row** from the grid context menu.
4. Removing a staff member from an investment does not delete the resource or role from the system.

---

## Working with Mixed Bookings

### Leverage Mixed Bookings in the Staff Grid

Consider a scenario where you want to implement agile planning where project and resource managers collaborate to make allocation and staffing decisions in Clarity. In such scenarios, resources are not booked for multi-year investments because the management team does not want to commit resources for the entire duration of the investment.

The typical booking process:
- Project Managers (PM) input soft-booked allocations for all the resources required for a given investment and its duration.
- Project managers capture soft allocations.
- Resource managers collaborate with project managers to gain alignment and then convert soft allocations to hard allocations.

> [!NOTE]
> When you allow mixed bookings in Clarity, a user with `Project - Manager (Auto)` rights can modify allocation data for resources in the Team Detail page. When you update the settings to prohibit mixed bookings, a user with `Project - Manager (Auto)` rights will not be able to modify resource allocation data. Project Managers can adjust the planned allocation based on investment requirements but cannot update the hard allocation field without the necessary booking rights. Resource Managers or users with relevant rights can update the hard allocation field after negotiations with the project manager. The **Accept Hard Allocation** and **Commit Planned Allocation** actions in Clarity enable resource managers to synchronize the planned and hard allocation curves.

### Typical Booking Process

Project Managers (PM) input soft-booked allocations for all the resources required for a given investment and its duration. Project Managers are capturing `planned` allocations. Resource managers have a `conversation` with the PM to gain alignment and then convert planned (soft) allocations to committed (hard) allocations. The conversation typically occurs on a quarterly cadence, which results in a mixed booking. A team member is mixed-booked when the planned allocation and hard allocation are not equal.

### Enable Mixed Booking in Classic PPM

If you want to enable mixed booking in Classic PPM, you can request your administrator to enable this feature in Classic PPM.

**Follow these steps:**

1. Open the **Administration** menu, and under **Project Management**, select **Settings**.
2. Select the **Allow Mixed Booking** checkbox and click **Save**.

### Configure the Staff Grid for Mixed Bookings

After you have enabled mixed booking in Classic PPM, ensure you perform the following activities on the Staff grid:
- Use the **Column Panel** to add **Totals** (Allocations, Hard Allocations) and **Hard Allocations** attributes to the Staff grid.
- Use **View Options** to select **Allocations** and **Hard Allocations** in the **PER-PERIOD METRICS** drop-down list.

### Edit Allocations When Mixed Booking is Enabled

You can now enter both Allocations (soft) and Hard Allocations Totals or Per-Period Metrics. If you enter totals, the value is distributed evenly in the per-period metrics. The booking status is automatically set to Mixed when the 'Allocations' data and 'Hard Allocations' data do not match.

Rules for Mixed, Hard, and Soft booking statuses:
- You cannot directly change the booking status to Mixed. It is automatically set when the Allocations data does not match the Hard Allocations data.
- You can directly change the booking status from Mixed to Hard or from Mixed to Soft.
- If the current booking status is Mixed and you update Allocations or Hard Allocations, the status will remain Mixed unless:
- Allocations now match Hard Allocations
- Hard Allocations are completely removed
- If you manually remove all hard allocations, the booking status is automatically updated to soft.

---

## Working with Allocation Values

### Allocation Values

The **Allocation** column on the left is sometimes known as a scalar field value. The value on the right (**Totals | Allocations**) derives its value from your per-period metrics, which are in turn, based on time-scaled value (TSV) fields and fiscal periods in Classic PPM.

You might see two different values; however, the behavior is valid. The differences are more noticeable with FTE units.
- The scalar allocation value uses the exact date boundaries of the start and finish dates for the row.
- The per-period metric total allocations use the start date of the start period and the last date of the end period selected.

The calculation:
- `Allocation (expressed in FTE or hours) = allocation worktime / total work time`
- Allocation is defined as the amount of time that a resource is allocated on an investment as a proportion of total possible work time, not calendar time.
- A typical workday is often 8:00 a.m. to 5:00 p.m. less an hour for lunch. Eight (8) hours * 3600 = 28,800 seconds per day.
- In a typical week, a resource might be allocated for five (5) days: 28,800 * 5 = 144,000 seconds.
- In this example, resource allocation over the 5-day workweek is allocation worktime (144,000) / total worktime (144,000) = 1 FTE.

### Update Cell Values in the Totals Column and Per-Period Columns

The **STAFF** and **ASSIGNMENTS** grids support the following features:
- You can configure the grid (click **Column Panel**) to show allocation values in a Totals column, in per-period metric columns, or in both.
- When you show both, you can enter separate values in each per-period column and see them counted toward the value in the Totals column.
- Conversely, you can enter one value in Totals and watch the application dynamically spread the allocation across the remaining periods in the current view.

> [!IMPORTANT]
> When copying and pasting in a grid, verify the cell dimensions and columns you want to copy and paste are the same. We recommend that you avoid copying and pasting values from inside both the Totals column and per-period metric columns in the same operation.

---

## Rules Applicable in Staff Grid

### Business Rules for Labor Resources
- Labor resources must have availability greater than zero.
- For zero demand, when adding labor resources to investment teams, set the allocation percentage to zero and task assignments will then not have any ETC amounts.
- If you don't want a specific labor resource to show up with any capacity, you can create a non-standard calendar with all non-working days.
- The allocation and ETC values are also impacted by the resource's availability within their associated calendar.

### Business Rules While Using the Staff Grid
- You can add labor and non-labor roles by using the Staff grid in projects.
- You can perform role replacements using the Staffing functionality, the Project Staff grid, or the Project Assignments grid.
- If you have a project template where roles are assigned to the team, and you create a project from this template in Clarity, labor and non-labor roles appear in the project Staff grid.
- If you have a project template where roles are assigned to the tasks, and you create a project from this template in Clarity, the roles are still assigned to the tasks in the new project.
- Verify that the following attributes on the Team object have a default value that is defined in Classic PPM:
- Booking Status
- Request Status
- Requisitions are not supported in Clarity.

### Business Rules for Non-Labor Resources
- If a non-labor resource has zero availability, then when the resource or role is added to an investment team, there will be zero allocations and zero ETC.
- Expense Resources and Roles will always have zero availability.
- It is not possible to configure an Expense resource or role with availability.
- You do not use Expenses for tracking work effort or hours.
- However, Equipment and Material and Labor Resources all can have zero or non-zero availability. These types of resources can be scheduled within the investment for performing work or for hours of usage.

---

## Access Rights to Staff Ideas

### Access Rights for Using the Staff Grid

The following business logic determines how the application adds resources and roles as staff members:
- The combination of project and booking access rights of the project manager.
- The default **Booking Status** setting for the Team sub object in Classic PPM.

In the default configuration, Booking Status is set to **Soft** so that users with soft booking rights can add staff members. System administrators can change the default setting to **Hard** to allow only users with hard booking rights to add staff members.

#### Default Booking Status is Soft

| Access Rights | Result |
|---|---|
| Project - edit + Resource - hard booking | Staff member added, Booking Status set to Soft |
| Project - edit + Resource - soft booking | Staff member added, Booking Status set to Soft |
| Project - view + Resource - hard booking | Staff member added, Booking Status set to Soft |
| Project - view + Resource - soft booking | Cannot add a staff member |

#### Default Booking Status is Hard

| Access Rights | Result |
|---|---|
| Project - edit + Resource - hard booking | Staff member added, Booking Status set to Hard |
| Project - edit + Resource - soft booking | Cannot add a staff member |
| Project - view + Resource - hard booking | Staff member added, Booking Status set to Hard |
| Project - view + Resource - soft booking | Cannot add a staff member |

#### Project Edit and Hard Booking Rights

With **Project - Edit** (Instance or OBS) and **Resource/Role - Hard Book**, when Staff Booking Status is **Soft**, you can edit:
- Staff (resource or role name)
- Project Role (paired with Resource - View access on roles)
- Booking Status
- Open for Time Entry
- Start/Finish (change allocation dates within the project date range or extend the allocation beyond the project date range)
- Default Allocation
- Capitalization %
- Custom staff fields
- Requested Manager (for roles)

With **Project - Edit Management** (Instance or OBS) or **Project - Edit Management - All** (Global), same fields apply except Capitalization % (these access rights do not include the Project - Edit Financial access right).

When Staff Booking Status is **Hard**, the same fields are editable with the corresponding access rights.

#### Project View and Hard Booking Rights

With **Project - View** (Instance or OBS) and **Resource/Role - Hard Book**, you can edit most of the STAFF fields including:
- Staff (resource or role name)
- Project Role (paired with Resource - View access on Roles)
- Booking Status
- Open for Time Entry
- Start/Finish
- Default Allocation
- Requested Manager (for roles)
- Custom staff fields

#### Project Edit and Soft Booking Rights

With **Project - Edit** (Instance or OBS) and **Resource/Role - Soft Book**, when Staff Booking Status is **Soft**, you can edit:
- Staff (only role name)
- Project Role (paired with Resource - View access on roles)
- Open for Time Entry
- Start/Finish
- Default allocation
- Capitalization %
- Requested Manager (for roles)
- Custom staff fields

When Staff Booking Status is **Hard**, the same fields apply (except you cannot change Booking Status or Start/Finish).

With **Project - View** or **Project - View Management**, you have **View only** access.

#### Project Edit and No Booking Rights

With **Project - Edit** (Instance or OBS) and **No Booking Rights**, you can edit:
- Staff (role name only)
- Project Role field (paired with Resource - View access on roles)
- Open for Time Entry
- Capitalization %
- Requested Manager (for roles)
- Custom Staff fields

With **Project - View** or **Project - View Management**, you have **View only** access.

---

## Creating To Dos for Ideas

Clarity's To Dos functionality provides a comprehensive task management system that allows you to create to-do items for various components within your investment management workflow. To Do's help break down work into smaller, manageable activities that can be tracked and completed to ensure successful investment management.

The To Dos module operates at multiple levels within Clarity, offering flexibility in how you organize and manage your work. You can create to-do items for investments, phases, milestones, or tasks.

> [!NOTE]
> To learn more about the To Do's workspace, see **To Dos Workspace**.

### Pre-Requisites for Using the To Dos Module

Your administrator needs to perform the following actions to ensure you can use the To Dos module:

1. You have one of the following access rights:
- **To Do - Create - All**
- **To Do - Delete - All**
- **To Do - Edit - All**
2. You have view access to the investment.
3. Your investment is associated with a blueprint that includes the To Dos module.

### Creating To Dos for Investments

You can now create To Dos at an investment level so that you can track and complete activities to manage the investment successfully.

**Follow these steps:**

1. Log into Clarity and navigate to the relevant Investments page.
2. Ensure the investment is mapped to a blueprint that has the To Dos module.
3. Open the investment and click **To Dos**.
4. Click **Columns** and add the **Parent** and **Parent Type** attributes to the grid. This will help you differentiate between To Dos associated with investments and tasks.
5. Click **Add Row** and enter the name of the To Do to create a new To Do item. You can only create To Dos associated with investments in the To Dos module. You can create To Dos for tasks on the Tasks module.

> [!IMPORTANT]
> Some of the key points to remember:
> - To Dos are implemented as a Studio Object but cannot be leveraged in Classic PPM.
> - The Data Warehouse uses the new To Dos tables.
> - To Dos stock attributes are Name, ID, Owner, Due Date, and Completed.
> - The To Dos ID field supports auto-numbering.
> - The To Dos object does not support the ability to create Sub-Objects.
> - You can star various To Do's to mark them as a favourite.
> - You can create custom attributes for the To Dos object in Clarity.
> - The To Dos Object is not enabled for use with BPM processes.
> - The To Dos Due Date has no limitations and can fall outside an investment's Start and Finish Dates.
> - When a To Dos is copied over from a template, Clarity populates the To Dos Due Date with whatever is in the Due Date field (e.g., blank or actual) before copy.

### Managing Attachments for a To Do

**Upload an attachment:**

1. Open **To Dos** in Clarity.
2. In **Columns**, check the **Attachment** field.
3. Click the **Edit** icon in the Attachment column for a To Do.
4. Click the **Upload File** icon in Attachment.
5. Select a file from the local machine and click **Open**.

> [!NOTE]
> You can only upload ten files for a To Do. If you try to upload more than ten files, an error message appears: "Uploading more than 10 files is not allowed".

> [!WARNING]
> You can only upload one file at a time for a To Do.

**View an attachment:**

1. Open **To Dos** in Clarity.
2. Click the **Edit** icon in the Attachment column for a To Do.
3. Click on the uploaded file name to download and view it.

**Delete an attachment:**

1. Open **To Dos** in Clarity.
2. Click the **Edit** icon in the Attachment column for a To Do.
3. Click the **Delete** icon in Attachments to remove the uploaded file from the list.

---

## Creating and Managing Idea Checklists

### Overview of Checklists

Checklists allow you to create checklists specific to the investments. You can define To Dos within the checklist along with To Do owner, due date, and link. Checklists created in investments are also displayed in **My Workspace**.

You can perform the following actions in Checklists:
- Create a checklist
- Set a due date for the checklist
- Rename/Copy/Delete the checklist
- Move/Remove a checklist
- Share the checklist with other team members as Collaborators

After creating the checklist, you can:
- Create To Dos
- Assign a resource and set a due date for To Dos
- Rearrange To Dos
- Block or delete To-Dos in the Checklist
- Mark To-Dos as Completed

> [!NOTE]
> You can mark a completed To Do as Not Completed. So it appears in your Due list again.

### Pre-requisites for Using the Checklists Module

Your administrator needs to perform the following actions:

1. You need to have the following access right:
- **Checklist - Create**: Allows user to create Checklists
2. You need to have the following access rights to work with To Dos in Checklists:
- **To Do - Create - All**: Allows user to create To Dos in the Clarity for which the user has access to view associated objects.
- **To Do - Delete - All**: Allows user to delete all To Dos.
- **To Do - Edit - All**: Allows user to view and edit all To Dos.
- **To Do - View - All**: Allows user to view all To Dos.
3. You have view access to the investment.
4. Your investment has to associate with a blueprint that includes the Checklists module.

> [!IMPORTANT]
> When checklists are available in a template, and you create an investment using the template, the Checklists associated with the Template will be visible in the Checklists module. When you convert an idea to a project, Checklists associated with the Idea will be available. When you convert an idea that has checklists to a project and you choose a template with checklists, both sets of Checklists will be available.

### Managing Checklists

#### Creating a Checklist

1. Open an investment in Clarity and click **Checklists**.
2. Click **+** to add a new Checklist.
3. Enter a name for the checklist.
4. Click **Create**.

> [!NOTE]
> The checklist created in the investment is also displayed in **My Workspace**.

#### Setting Due Date for a Checklist

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist that you want to set a due date.
3. Click **Three-dot Action Menu** and select **Set Due Date**.
4. Select a date from the calendar.

#### Copying a Checklist

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist that you want to copy.
3. Click **Three-dot Action Menu** and select **Copy**.
4. Enter the name of the Checklist and click **Copy**.

> [!IMPORTANT]
> When you copy a checklist, the following items are duplicated:
> - Due date of the Checklist
> - All the To Dos in the Checklist along with: Owner, Due Date, Link
> The following changes happen in the copied checklist:
> - Removes collaborators from the checklist
> - Changes the state of the Blocked To Do to Unblocked To Do
> - Removes Blocked Description of the To Do
> - Changes the state of the Completed To Do to Not Completed To Do

#### Renaming a Checklist

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist that you want to rename.
3. Click **Three-dot Action Menu** and select **Rename**.
4. Rename the Checklist and click **Save**.

#### Changing the Status of a Checklist

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist that you want to change the status.
3. Click **Three-dot Action Menu** and select **Mark Complete**.

You can see the Checklist under the **Completed** heading in the Checklist Panel. The Completed heading in the Checklist panel will be collapsed by default, and you can expand it to see the completed checklists.

> [!IMPORTANT]
> Clarity enables the **Mark Open** option for the completed Checklist. You can re-open the checklist using **Mark Open** in Three-dot Action Menu.

#### Moving a Checklist to an Investment/Agreement

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist that you want to move.
3. Click **Three-dot Action Menu** and select **Move Checklist**.
4. Select an Investment/Agreement where the checklist needs to be moved.
5. Select the specific Investment/Agreement in the **Move Checklist to** pop-up window.
6. Click **Move**. The Checklist will be moved to the selected Investment/Agreement.

#### Removing a Checklist from an Investment/Agreement

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist that you want to remove.
3. Click **Three-dot Action Menu** and select **Remove Checklist from Investment/Agreement**.

> [!IMPORTANT]
> The removed checklist from the investment will be available in **My Workspace**.

#### Deleting a Checklist

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist that you want to delete.
3. Click **Three-dot Action Menu** and select **Delete**.
4. The Delete Checklist pop-up window opens with the message: "All To Dos in this checklist will be deleted".
5. Click **Delete**.

> [!IMPORTANT]
> If you delete the checklist from the investment, then it is also deleted from **My Workspace**.

#### Transferring Checklist Ownership

**Co-Owner** has all the rights of **Owner**, including the ability to delete the checklist and remove other collaborators from the checklist.

> [!IMPORTANT]
> Owner cannot be removed.

**Scenario:** If you convert Idea into Project (Checked/Unchecked Copy Checklist), the person who converts Idea into Project becomes the Owner, and the new project manager is the **Co-Owner** of the checklist.

> [!NOTE]
> The Checklist Owner, Co-owner and Collaborators from Idea and project template will not be copied.

### Managing To Dos in Checklists

You can create To Dos in checklists to track and complete activities to manage the investment successfully.

#### Creating a To Do

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist that you want to add To Dos in.
3. Click **New To Do** and enter the name of the To Do.

#### Assigning a Resource for a To Do

1. Open an investment in Clarity and click **Checklists**.
2. In the Checklist, click a To Do to assign a resource.
3. Click **Assign Owner**.
4. Select a user from the list.

#### Setting a Due Date for a To Do

1. Open an investment in Clarity and click **Checklists**.
2. In the Checklist, click a To Do to set a due date.
3. Click **Set Due Date**.
4. Select a date from the Calendar. If you select the overdue date, Clarity shows Due Date with a red background.

#### Adding/Editing a Link for a To Do

1. Open an investment in Clarity and click **Checklists**.
2. In the Checklist, click a To Do to add a link.
3. Click **Three-dot Action Menu** and select **Add Link**.
4. Enter the link in **Edit Link** and click **Done**.

To remove the link, click **Three-dot Action Menu**, select **Edit Link**, and click **Remove**.

#### Blocking a To Do

1. Open an investment in Clarity and click **Checklists**.
2. In the Checklist, click a To Do.
3. Click **Three-dot Action Menu** and select **Block**.
4. Enter the description for blocking To Do.

Two ways to unblock a To Do:
- **Method 01**: Click the **Unlock** button on the blocked To Do.
- **Method 02**: Click **Three-dot Action Menu** and select **Unblock**.

#### Marking a To Do as Completed

1. Open an investment in Clarity and click **Checklists**.
2. In the Checklist, check **Mark Complete** for a To Do. The To Do moves under Completed list.

#### Rearranging To Dos

You can drag and drop To Dos to rearrange them in the Checklist.

### Working with Collaborators

The Checklist can be shared with one or multiple users. The Checklist can only be shared with users defined in Clarity. Collaborator names can be searched by name or email address in the **Share Checklists** pop-up window.

> [!NOTE]
> Only owners can share a checklist with others or remove a collaborator.

#### Sharing a Checklist

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist that you want to share with others.
3. Click the **Share** button. The Share Checklist pop-up window opens.
4. Search by name or e-mail address.
5. Select the name/e-mail address to add the user as a collaborator.
6. Click **Done**.

> [!NOTE]
> - If you assign an owner and do not share the checklist with the assigned owner, then the owner can view the To Do in their My Workspace but cannot perform any actions on it.
> - Only the Checklist owner and collaborators can see their checklist. Other users will not see any checklist unless a checklist is shared with them.

#### Modifying Checklist Sharing Group

The Checklist Sharing group is seeded in Clarity. Users with whom a checklist is shared are automatically added to this group.

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **Groups**.
2. Click the **Checklist Sharing** group.
3. Open the **Access Rights** menu and click **Global**. You can see the following access rights:
   a. Checklist - Create
   b. My Workspace - Navigate
   c. Resource - View - All
   d. To Do - Create - All
   e. To Do - Delete - All
   f. To Do - Edit - All
   g. To Do - View - All

#### Removing a Collaborator

1. Open an investment in Clarity and click **Checklists**.
2. Click the Checklist from which you want to remove a collaborator.
3. Click the **Share** button.
4. Click **Three-dot Action Menu** of the collaborator and select **Remove**.

#### Roles in Checklists

| Roles | View | Share | Copy | Rename |
|---|---|---|---|---|
| Owner | Yes | Yes | Yes | Yes |
| Co-Owner | Yes | Yes | Yes | Yes |
| Collaborator | Yes | Yes | Yes | Yes |
| Participant with Investment-View Access Right | Yes | Yes | Yes | Yes |

> [!IMPORTANT]
> Some of the key points to remember while working as a Collaborator:
> - You can see a collaborator icon for the checklist shared with you.
> - You can view the other collaborators working on the checklist by clicking the Share button. It is read-only.
> - You will become the owner of the copied checklist.

---

## Hierarchy Module for Ideas

The Hierarchy module for investments in Clarity is a powerful feature designed to manage parent-child relationships between different types of investments, including ideas, projects, and custom investments. This module provides a structured approach to organizing investments in a hierarchical manner.

The module is particularly valuable in scenarios where organizations need to synchronize mapped information between Clarity and external systems like Rally. For instance, when a Clarity investment is mapped to a portfolio item in Rally, the Hierarchy module can automatically include all mapped children of Portfolio Items (such as Epics) in the synchronization process through the **Sync Children of Parent** option.

You can also use the **Parent** attribute to associate multiple child investments (ideas, projects, and custom investments) with an investment.

---

## Agreements For Ideas

The success of any large organization depends on the seamless execution of hundreds of different investments that are loosely or tightly coupled with each other. Most customers struggle to capture and manage agreements between these investments.

When critical investments in an organization introduce changes that impact their delivery dates, most stakeholders are caught unaware. Two key reasons:

1. There is no single place of truth in the organization where stakeholders can review dependencies between investments.
2. Most stakeholders simply don't remember all the investments dependent on them and the ripple effect of introducing changes.

The **Business Agreements** workspace in Clarity addresses these challenges by enabling you to define and manage agreements between investments. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates.

### Create Agreements

You can create business agreements from the following investment areas:
- Agreements module within the investment
- The Details panel of the investment in the relevant investment workspace
- The Details panel of the investment in the Hierarchies workspace (Grid and Timeline layout)
- The Details panel of the investment in the Roadmaps workspace

Administrators can determine how users can create Business Agreements by editing the associated investment blueprint:
- **Enable Quick Create**: Allows users to create an agreement by clicking the plus (+) icon within the Agreements module.
- **Enable Create Dialog**: Allows users to use the **Create from Template** option.
- **Show in Details flyout**: Allows users to create an agreement from the Details module.

When you create a business agreement from an investment, the successor is automatically set to that investment.

**Follow these steps:**

1. Navigate to the relevant workspace and click the associated investment.
2. Click **Details** and select the **Agreements** module.
3. Click the **Add Row** icon to create a new agreement.
4. Type the name and press Enter to create the agreement.
5. After creating the agreement, populate the predecessor, successor, commitment, and deadline fields.

### Create Agreements from a Template

You can use the **Template** attribute in the Agreements workspace to select a set of common agreements your organization uses as a template.

**Follow these steps:**

1. Navigate to the Agreements module for the associated investment.
2. Click the **New from Template** button to open the Select a Template dialog.
3. Select the relevant template and click **Next**.
4. Enter the various details in the New Agreement window and click **Create**.
5. After creating the agreement, populate the predecessor, successor, commitment, and deadline fields.

### View Business Agreements for Investments in Clarity

When you create an agreement between investments, you can see this agreement in the Agreements modules within those investments. Your administrator will need to add the Agreements module to the blueprint associated with your investments.

> [!NOTE]
> - You cannot edit agreements from within your investment. However, you can click the Agreement Name and navigate to the Agreements workspace.
> - The Agreement - Create, Agreement - Delete, Agreement - Edit, Agreement - Navigate, and Agreement - View instance and global access rights are available for working with Business Agreements.
> - Administrators will need to manually add the Agreements modules to the relevant blueprints.

---

## Manage Risks, Issues, and Changes for Ideas

The Risks, Issues, and Changes (RICs) module in Clarity is a comprehensive project management tool designed to help scrum masters and project managers effectively manage project uncertainties and modifications across all types of investments.

The RICs module has undergone significant enhancements in recent releases, expanding its availability from projects-only to all investment types including Projects, Custom Investments, Ideas, and Team Investments.

### Verify Prerequisites

Verify that you have the required access rights to work with risks, issues, and changes:
- See **Project and Portfolio Management Access Rights** for the complete list of access rights required.
- Ensure that the Risks, Issues, and Changes modules are added to the blueprint.

### Upload Documents

You can upload, download, and delete documents associated with Risks/Issues/Changes.

**Follow these steps:**

1. Open an investment.
2. Click **Risks**, **Issues**, or **Changes** to navigate to the corresponding page.
3. Click **Column Panel**.
   a. Select **Document**.
   b. To close the column panel, click **X**.
4. Hover over the Document cell in the grid and click the **Edit** (pencil icon) option.
5. Click the **Upload** icon to upload the file.
6. Select a file and click **Open**. A link appears under the Document column.
7. To download the file, click the link in the Document column.

> [!NOTE]
> - You can attach multiple documents to it.
> - You can attach a maximum of ten documents to it.

> [!IMPORTANT]
> You can now secure fields associated with the RIC object by using the **Field Level Security** grid.

### Create Custom SubObjects for Investments

You can create Sub-Object instances using the **New** button for Projects, Ideas, and Custom Investments and abstract investment custom sub-objects. If your administrator has enabled the **Enable Create Dialog** toggle in the Master Object blueprint for a particular Sub-Object, then you can see a button within the Sub-Object called **New [Sub-Object]**.

### View Action Items in Investments

The **Action Items** module displays the Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, CMO, and Custom Investments.
- Process Action Items created in Classic will display grouped by **Open Items** and **Closed Items**.
- Sorted by the most recently initiated Action Item first; ties sort alphabetically by Action Item Subject.
- By default, a summary of Open Items with Closed Items collapsed will be displayed.

Action Item States during their lifecycle:
- **Initiated**: No actions have been taken yet
- **Decisions**: At least one Assignee responded
- **Closed**: Action Item is completed

> [!NOTE]
> - While the Sent To Recipient list is displayed for each Action Item, the criteria or number of actions required to close the Action Item is not displayed.
> - Only process Action Items are displayed.
> - Any Action Items for Investment Sub-Objects are not displayed.

### Copy an Existing Risk, Issue, or Change Request

From the Clarity 16.2.1 and higher releases, you can copy Risks, Issues, or Change Requests. You must have required Risk, Issue, and Change Request - Copy permissions (access rights).

**Follow these steps:**

1. Log into Clarity and navigate to the relevant Investments page.
2. Ensure the investment is mapped to a blueprint that has the Risks, Issues, and Changes module.
3. Open the investment and click **Risks**, **Issues**, or **Changes**.
4. For a specific record, right-click and click **Copy** from the menu.
5. In the copy dialog, enter the relevant Name and then click **Copy**.

> [!IMPORTANT]
> - Selecting multiple RICs grays out the Copy button with a tooltip indicating a single-item limitation.
> - When copying an RIC record, the system copies all fields from the original RIC, including the values of any To Dos. However, tasks that are associated with Risks or Issues are not copied over.
> - Conversations associated with the original RIC will not be transferred to the duplicate record.

### Create Risks, Issues, or Changes from Existing RICs

From the Clarity 16.2.1 and higher releases, you can create new Risks, Issues, or Change Requests from existing RICs with links to the original RIC for quick reference and historical context.

**From Risks:**
- Create a new Issue from an existing Risk
- Create a new Change Request from an existing Risk

**From Issues:**
- Create a new Risk from an existing Issue
- Create a new Change Request from an existing Issue

**From Changes:**
- Create a new Risk from an existing Change Request
- Create a new Issue from an existing Change Request

**Follow these steps:**

1. Log into Clarity and navigate to the relevant Investments page.
2. Ensure the investment is mapped to a blueprint that has the RICs module.
3. Open the investment and click **Risks**, **Issues**, or **Changes**.
4. For a specific record, right-click and click the **Create <Risks, Issues, and Change Request>** action from the menu.
5. In the create dialog, enter the relevant Name and ID.
6. Click **Create** to add a new RIC item.

> [!IMPORTANT]
> - After creating new RICs, the end user will remain in the RICs module from which the Create RICs action was initiated.
> - Regarding the **Originating Issue/Risk** field:
>   - If the RICs Blueprint setting **Enable Properties Navigation** is enabled, the field will display as a link.
>   - In Classic PPM, the field remains as a String field only.
> - The **Properties** page in the RICs module does not provide an option to create RICs. The capability is only offered on the grid via right-click action menu.
> - RICs creation is not available from the RICs modules within the Hierarchy workspace.

### Create To Dos for Risks, Issues, and Changes

You can now create To Dos for Risks, Issues, and Changes for an investment.

**Follow these steps:**

1. Log into Clarity and navigate to the relevant Investments page.
2. Ensure the investment is mapped to a blueprint that has the RICs module.
3. Open the investment and click **Risks**, **Issues**, or **Changes**.
4. Select a specific record and click **Details** to open the Details panel.
5. Click **To Dos** to open the To Do's workspace. Click **Expand** to expand the workspace.
6. Click **Add Row** and enter the name of the To Do to create a new To Do item.

> [!NOTE]
> Your administrator needs to ensure:
> 1. You have one of the following access rights: **To Do - Create - All** or **To Do - Edit - All**.
> 2. Your investment is associated with a blueprint that includes the RICs modules.
> 3. You have the relevant rights to create and edit Risks, Issues, and Changes.

---

## Manage Status Reports for Ideas

### Overview

The Status Reports module in Clarity serves as a critical component for effective investment management, designed to facilitate comprehensive investment status reporting throughout the entire investment lifecycle.

> [!NOTE]
> You need the following rights to work with the project status in Clarity:
> - `<Investment>` **- Edit** and **Status Report** access right to create new reports
> - **Status Report - Edit All** and **Project - Edit** to edit status reports

The PMO Project Manager access group contains all the access rights required to access an investment and create Status Reports in Clarity.

### General Flow to Generate the Status Report

The general flow follows: Create Draft -> Preview -> Publish -> PDF Generated.

### Field Level Security in Status Reports

The attributes of the Status Report object can be secured using field-level security. A visual indicator appears to identify fields under field-level security control in Status. Field-level security is supported in the Canvas, Preview, and Reports grid of the Status module.

---

## Working With Idea Canvas (Status)

The Canvas layout provides a simple and visually intuitive interface in the Status module. In the Canvas view, you can configure the report layout, preview, and publish to a PDF format (for the most current report).

Key points:
- You can modify the canvas by dragging the available widget or field to the canvas.
- The canvas will display grey shading on the area where the selected widget/field will be dropped.
- You can remove widgets or fields from the canvas.
- You can resize widgets in the canvas.
- You can configure the data in four columns on the canvas.
- You can edit data on the canvas.
- When you are editing data, you can only view objects for which you have permission.

### Use the Default Investment Status

To view the current project status, open a project and click the **Status** tab. The latest draft of the status report appears by default in the Canvas view.

**Key widgets available in the default status:**

| Widget Name | Description |
|---|---|
| Number Tile | Displays a specific number based on the widget definition and filter criterion |
| Pie | Displays a pie chart based on the widget definition and filter criterion |
| Bar | Displays a bar graph based on the widget definition and filter criterion |
| Progress Ring | Displays a ring with a number based on the widget definition and filter criterion |
| Overall Status | Derived from the schedule, scope, and cost/effort status. Also visible on the investment tile |
| Schedule Status | Indicates if the investment schedule is on track, has a minor variance, or a significant variance |
| Scope Status | Indicates if the investment scope is on track, has a minor variance, or a significant variance |
| Cost and Effort Status | Indicates if the effort and budget amount consumed are on track with the original estimates |
| Milestone Timeline | Indicates milestone status. Configure button allows selecting options to show names/dates |
| Effort Metrics | Total effort estimated, submitted, and balance effort for the investment |
| Cost Metrics | Total approved budget, budget exhausted to date, and balance budget |
| Status Report Update and Key Accomplishments | Custom text fields for summary and highlights |

**Table Widgets** allow you to review Tasks, RICs, To Dos, Staff, Financials (Cost Plans, Budget Plans, Benefit Plans).

> [!NOTE]
> If status reports exist for the investment in Classic PPM, the system populates the information from the latest Draft report (based on Report Date) in Canvas.

### Customize the Investment Status

You can customize the investment status to include or exclude information by adding or removing widgets and fields.

### Add or Remove Widgets from the Investment Status

**Follow these steps:**

1. Click **Configure** to open the Canvas in the edit mode.
2. From the **Configure Canvas** section, drag and drop the relevant fields and widgets to the canvas.
3. Click **X** to remove any widgets or fields from the canvas.
4. Point the mouse to a corner of a widget or field and drag horizontally or vertically to change its size.
5. Click **Done** to save your changes.

> [!NOTE]
> The following widgets/fields are not available in this release:
> 1. Next 2 Weeks Calendar widget
> 2. Completed Tasks
> 3. High-level Status Module

### Configure the Columns in the Table Widget

The table widget on Canvas allows you to add or remove columns and filter the data. You can add a maximum of 20 columns to the table widget.

**Follow these steps:**

1. In the Canvas, click **Configure**.
2. Click the **Gear** icon at the top-right corner of the Table Widget to configure it.
3. Key actions you can perform:
- Add or remove an attribute in the grid using **Columns**
- Leverage the **Conditional Formatting** capability
- Analyze details in the grid by using **Filter**
- Change the name of the table widget
- Use the **Group By** capability in the table widgets
- Configure **Money Decimal Display**, **Number Decimal Display**, and **Show Total Row** settings

> [!IMPORTANT]
> You can override canvas per-period settings by enabling the **Override Canvas Per-Period Settings** option in specific tables with per-period metrics.

### Arrange Widgets in the Canvas View

Two types of widgets:
- **Widgets that are best displayed in one column** - Most widgets such as Status Report Update, Cost Metrics, and Effort Metrics.
- **Widgets that are best displayed in two columns** - Table widgets that typically display a lot of information.

> [!NOTE]
> The maximum height of the Canvas is 24000px.

### Include Risks, Issues, Changes, and Tasks in the Investment Status

From Clarity 15.6.1 onwards, you can add Risks, Issues, Changes, and Tasks to the investment status.

**Follow these steps:**

1. Select the Risks, Issues, Changes, or Tasks that you want to show in the investment status:
   a. Open investment and click **Risks**, **Issues**, **Changes**, or **Tasks** to navigate to the corresponding page.
   b. Add the **Include in Status Reporting** column to the grid and select the flag for items you want to include.

### Add or Remove Chart Widget in the Canvas

You can define the following chart widgets in canvas: Number Tile, Progress Ring, Pie Chart, Bar Chart.

**Follow these steps:**

1. In the Canvas, click **Configure**.
2. Drag a chart widget and drop it into the canvas.
3. Enter the following details:
- **Title** - Enter the name of the widget
- **Target Object** - Select the sub-object of the investment
- **Color** - Display the color of the widget
- **Type** - Select the relevant mathematical operation
- **Format** - Select number or percentage display
- **Group By** - Select the attribute that defines your primary criterion
- **Bar Orientation** - Select horizontal or vertical bars
- **Sort Order** - Select ascending or descending
- **Group Format** - Select Clustered or Stacked option
- **Only Include items where** - Select the filter criterion
4. Click **Create** to create your widget.
5. Click **Done** to save your changes.

> [!IMPORTANT]
> Key points for chart widgets:
> - Charts do not support sub-sub-object as a Target object.
> - Only the owner/creator of the chart widget can modify the widget configuration.
> - A maximum of three attributes can be selected in the Sum/Average/Minimum/Maximum drop-down list of Bar Charts.
> - If an attribute added to the canvas is later secured using Field-Level Security (FLS), the widget will throw a 400 error.

### Setup Layout in the Canvas

You can configure the column layout in Canvas: **4-Columns**, **6-Columns**, **8-Columns**.

**Follow these steps:**

1. In Canvas, click **Configure**.
2. Click the **Layout** tab in the left panel.
3. Select the column layout based on your requirement.
4. Click **Proceed** when prompted.

### Widget Governance
- You can see the widget counter that indicates the total number of widgets added to the canvas.
- You can add a maximum of seven table widgets to an individual canvas.
- You can add ten charts and table widgets to an individual canvas.

### Export to PDF

You can export the Canvas layout to a PDF file.

**Follow these steps:**

1. Click the Canvas module.
2. Click **Export to PDF** to export the PDF file.
3. Click **Download** to save the PDF.

> [!IMPORTANT]
> **What You See Is What You Get**: When you export the PDF, the PDF looks exactly as it appears on the screen. If the widget has a scroll bar, any data within the scroll bar will not be included in the PDF. Only five expanded tables are displayed in PDF export.

### Add Custom Attributes to the Investment Status

The Investment Status is associated with the **Status Report** custom object in Clarity (installed with the PMO Accelerator add-in). Supported custom attribute data types:
- String, Large String, Number, Money, Boolean, Date
- Single-Valued Lookup, Calculated Number, Calculated String, Calculated Date

### Edit the Investment Status Values

You can request your administrator to edit the Status Report Status lookup to add additional values. The overall status of the investment is derived from: Schedule Status, Scope Status, and Cost and Effort Status.

### Analyze Investment Trends

Trending indicators (up, down, and side/neutral arrows) on the status report gauges are based on the latest value of the gauge as compared to the value in the prior published status:
- **Up Arrow**: The latest draft status is better than the prior published status.
- **Horizontal (Neutral) Arrow**: The latest draft status is the same as the prior published status.
- **Down Arrow**: The latest draft status is worse than the prior status.

Status colors:
- **Green**: On Track
- **Orange**: Needs Help (Minor Variance)
- **Red**: At Risk (Significant Variance)

### Publish Investment Status Reports

You can preview and publish the current status report in PDF format.

> [!TIP]
> Ask your administrator to verify that `.PDF` is an Authorized File Extension under **Administration**, **System Options** in Classic PPM.

**Follow these steps:**

1. Open an investment and click **Status**.
2. In the Canvas view, click **Preview** to generate a preview.

> [!IMPORTANT]
> If you see the report date set to the current date in the Preview Mode, your administrator must have enabled the **Set Report Date to Current Date on Preview** option in the System Options page.

> [!WARNING]
> If you click Preview and get an error message - "Attribute 'cop_report_date' was locked and cannot be changed", then contact your administrator.

3. You can control screen size and orientation with options: Letter, Legal, Tabloid, A4, HD Display (1920px), Laptop (1440px), Tablet (1024px), Fit to Content. Orientation: Portrait or Landscape.
4. Click **Refresh** to update the PDF format changes.

> [!IMPORTANT]
> Before clicking Publish, check the text formatting in the Preview mode.

5. Click **Publish** to publish the current draft status report.

> [!NOTE]
> When you publish a PDF status report from Canvas, the following changes occur in the Reports grid:
> - A new status report instance appears.
> - The value in the Report Status field changes from Draft to Final.
> - The values from the previous status report instance are copied over to the new instance.

---

## Working With the Reports Grid

### View the Status Report

In Reports, you can view the current and prior status reports.

**Follow these steps:**

1. Open the investment.
2. Click **Status**, **Reports**. The list of current and prior status reports appears.

> [!NOTE]
> The **Attachment** column contains the link to the published status report in PDF format if the PDF is available for the report.

### Create a Status Report

1. Open the investment.
2. Click **Status**, **Reports**.
3. Click the plus icon to add a row at the top of the grid.
4. Enter values in the required fields. A new status report will be created.

### Edit the Status Report

There are four ways to edit the status reports in the grid:
- Edit the fields in the grid.
- Edit the fields using the Details panel.
- Edit multiple rows using the **Bulk Edit** option.
- If the status report is not published, click the status report name to edit in canvas view.

### Publish the Status Report (from Reports Grid)

1. Open the investment.
2. Click **Status**, **Reports**.
3. Click the name of the status report to open canvas view.
4. Click **Preview**.
5. Click **Publish**. This generates the PDF format of the status report.

> [!ATTENTION]
> After generating a PDF, you can edit the values in the grid. But, the values will not be updated in the PDF.

To update values in the PDF:
1. Change Report Status from Final to Draft.
2. Click the name of the status report.
3. Click **Preview**.
4. Click **Publish**.

### Indicate the Most Recent Record

The Reports tab includes a **Latest** check box attribute to indicate the most recent record, where **Report Status** has been set to **Final** in Clarity.

> [!IMPORTANT]
> The **Latest** attribute does not dynamically update. You have to refresh the page to apply field edits within the Reports tab.

---

## Create a Sub-Object Instance for Ideas

You can create Sub-Object instances using the **New** button for Projects, Ideas, and Custom Investments. If your administrator has enabled the **Enable Create Dialog** toggle in the Master Object blueprint, then a **New [Sub-Object]** button appears on the Sub-Object grid, timeline, and board.

---

## Update Idea Status in the Status Report Module

In addition to the **STATUS** tab that allows you to view and publish PDF status reports, administrators can also configure an investment blueprint to include a **STATUS REPORT** grid.

> [!NOTE]
> We recommend using either the Status tab to generate PDF status reports or the Status Report grid, but not both at the same time.

**Comparison: Status Module vs Status Report Module**

| Capability | Canvas View | Reports Grid | Status Report Module |
|---|---|---|---|
| Generate an investment status report PDF | Yes | Yes | No |
| Publish new status report with values from previous report | Yes | Yes | No |
| View and edit custom attributes | Yes | Yes | Yes |
| Access Rights | Investment Edit + Status Report access right | Investment Edit + Status Report access right | Status Report - View/Edit instance and global rights |
| Saved views | No | Yes | Yes |
| Filtering | No | Yes | Yes |
| Configurable report layout sections | Yes | Yes | No |

---

## Start a Conversation or Post a Reply

Conversations are a collection of replies to an original theme or question. Conversations provide a collaborative forum for all team members to discuss, document, and solve investment-specific issues.

### Pre-requisites for Using the Conversations Module

1. Ensure you have view access to the investment.
2. Associate the investment with a blueprint that includes the Conversations module.

> [!TIP]
> Turn on the **Show in Details Flyout** option under the Conversations module in Blueprint to view the conversations module in the Details panel.

### Conversations About Investments

**Follow these steps:**

1. Open an Investment.
2. Click the **Conversations** tab.
3. Enter your message in the **Start a conversation** box and click **Post** or press the Enter key.

### Mention a User Using the @Sign

In conversations, use the **@** sign to mention other users. Mentioning someone by name sends a new notification to alert them to reply.

Tips:
- After the @ sign, enter the letters of the first or last name. Suggested team members appear.
- The full name, resource ID, and avatar image appear to verify identity.
- To mention all users staffed to the investment, use **@Staff**.
- All active and locked team members can be mentioned. Inactive team members cannot be mentioned.
- Up to eleven (11) suggested Clarity users appear.
- We recommend you mention no more than 20 users in a single conversation.

> [!IMPORTANT]
> You must have the **Resource - View - All** access right to get the list of Clarity users.

### Conversations and Replies
- The most recent conversation appears first; the most recent reply in a conversation appears last.
- Click **Refresh Conversations** to see the two most recent replies. Click **SHOW ALL** to expand.
- Only the user who posted a conversation can edit or delete it.
- A conversation supports up to 200 replies.
- You can enter a maximum of 1300 characters in a post or reply.
- To add a new line in a comment, press **Shift + Enter**.
- Conversations support the following URL formats: `www`, `http://`, `https://`, `ftp://`, `sftp://`

> [!TIP]
> Do not enter values inside angle brackets in data fields in Classic PPM or Clarity. The coupled angle brackets are not a supported special character combination.

### Attach Files in Conversations

You can upload and edit up to five attachments to each comment in a conversation.

**Follow these steps:**

1. Open a conversation. A **Reply...** prompt appears.
2. In the new reply, click **Attach**. To add attachments to a previous comment, click the **Options** menu and select **Edit** and then click **Attach**.
3. Select the file you want to attach. Press and hold down the Ctrl key to select up to five files. Click **Open**.
4. Add or edit your reply text. You cannot attach a file without entering an associated comment.
5. Click **Post** or press the Enter key.
6. (Optional) To delete an attachment, click the **Options** menu and select **Edit**. Click **X Delete**.

> [!TIP]
> File attachments follow the same restrictions as project documents. Maximum size of an attachment is 20 MB. To limit acceptable file types, set the **Authorized File Extensions** field.

### Conversation Notifications
- To view notifications, click the **notifications bell** icon at the top of all pages in Clarity.
- The number of new notifications appears on the notifications bell.
- Click a notification to view supporting details.
- If a user is mentioned more than once in a single message, they are notified only once.
- If **@Staff** is mentioned in a conversation, a notification is sent to all team members.
- To delete all notifications, click **CLEAR ALL**.

> [!TIP]
> - You can personalize the way that you receive notifications (e-mail, SMS text message, and on-screen).
> - As an administrator, you can modify the two notification templates for conversations:
>   - **Conversation - Mentioned in a conversation**
>   - **Conversation - Mentioned in reply to a conversation**

### Access Rights for Conversation-specific Actions In Notifications

| Sl.No. | Action | Need Access Rights |
|---|---|---|
| 01 | To view the message | Yes |
| 02 | To reply to the message | Yes |
| 03 | To attach the files | Yes |
| 04 | To go to the specific `<INVESTMENT>` | Yes |

---

## Configure Canvas to Manage the Idea Dashboard

The Canvas module in Clarity serves as a powerful dashboard creation and visualization tool that transforms how organizations interact with their project and investment data. This comprehensive module provides a simple and visually intuitive interface that enables users to configure customizable dashboards.

The Canvas module is configured through Blueprints, where administrators can define which objects and widgets are available to users.

### Available Charts
- Number Tile
- Progress Ring
- Pie Chart
- Bar Chart

### Available Objects and Sub-objects for Widgets
- Tasks, Risks, Issues, Changes, To Dos, Staff
- Financials - Cost Plans, Budget Plans, Benefit Plans
- Status (Reports Grid of Status)
- Custom Objects (second level only)

### Prerequisites
- You have view access to the investment.
- Your investment has to associate with a blueprint that includes the Canvas module.

### Setup Canvas to Create a Dashboard

**Follow these steps:**

1. Open an investment.
2. Select the relevant canvas module on the investment to open it.
3. Click **Configure**. A list of widgets enabled within the canvas appears under the **Configure Canvas** panel.

### Add or Remove Chart Widget in the Canvas (Dashboard)

**Follow these steps:**

1. In the Canvas, click **Configure**.
2. Drag a chart widget and drop it into the canvas.
3. Enter the details: Title, Target Object, Color, Type, Format, Group By, Bar Orientation, Sort Order, Group Format, and Filter criterion.
4. Click **Create** to create your widget.
5. Click **Done** to save your changes.

> [!IMPORTANT]
> Key points for chart widgets:
> - Charts do not support sub-sub-object as a Target object.
> - Only the owner/creator of the chart widget can modify the widget configuration.
> - If a sub-object used as a target object is deleted, the respective widget is also deleted.
> - A maximum of three attributes can be selected in the Sum/Average/Minimum/Maximum drop-down list.

### Add a Table Widget to Canvas (Dashboard)

**Follow these steps:**

1. In the Canvas, click **Configure**.
2. Drag a table widget and drop it into the canvas.
3. Enter the name of the table widget.
4. Select the **Target Object** from the list.
5. Click **Create**.

### Setup Layout in the Canvas (Dashboard)

Options: **4-Columns**, **6-Columns**, **8-Columns**.

### Export to PDF (Dashboard)

1. Click the Canvas module.
2. Click **Export to PDF**.
3. Click **Download** to save the PDF.

### Widget Governance (Dashboard)
- Maximum of seven table widgets per canvas.
- Maximum of ten charts and table widgets per canvas.

### Save Your Views

Clarity allows you to save and modify multiple views. Key actions:

1. Save an existing configuration in the grid.
2. Update existing views by using the **Quick Save** functionality.
3. Access views saved by other users.
4. Mark relevant views as favorites.
5. Select default views.

---

## Audit Module for Ideas

Auditing in Broadcom Clarity is a critical capability designed to enhance transparency, accountability, and control over changes made to key business objects.

Key benefits:
- **Traceability and Accountability**: Provides a detailed, time-stamped record of all changes made to objects, including what was changed, when, and by whom.
- **Risk Mitigation**: Helps organizations quickly identify unauthorized or erroneous changes.

### Audit Grid Column Names

The Audit module grid column names used in Clarity are different from those in Classic PPM:

| Clarity Audit Name | Classic Audit Name |
|---|---|
| Name | Object Name |
| Object ID | Object |
| Record | Name |
| Parent | Parent Name |
| Changed Date | Date |
| Attribute | Attribute |
| Attribute ID | Attribute Code |
| Changed By | Changed By |
| Operation | Operation |
| Old Value | Old Value |
| New Value | New Value |
| Record ID, Parent ID, Grandparent, and Grandparent ID | Not visible in Classic |

### Verify Prerequisites

Before using the feature, ensure that you have the following permissions:
- You must have **Audit Trail - View - All**, which allows you to view Audit Trail for any object in Classic and Audit for any object in Clarity.
- As an administrator, if you want to grant access rights:

| Location | Access Right |
|---|---|
| Administration > Audit tile | Administration - Audit - Navigate |
| Audit Module | Audit Trail - View - All |

### View Audit Details

The Audit module is available for all Blueprints and all API-enabled Objects:
- Agreements
- Custom Investment Types
- Custom Objects
- Level 3 Sub-Objects: OOTB Sub-Objects and Custom Sub-Objects
- Hierarchies
- Ideas
- Pages
- Projects
- Roadmaps
- Plans
- Cost Plan and Cost Plan Details
- Budget Plan and Budget Plan Details
- Benefit Plan and Benefit Plan Details
