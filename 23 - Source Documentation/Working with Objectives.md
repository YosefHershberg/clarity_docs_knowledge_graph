# Working with Objectives

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[04 - Roadmaps/_MOC Roadmaps|Roadmaps]]
- Related domains: [[05 - Hierarchies/_MOC Hierarchies|Hierarchies]], [[10 - Pages and Objectives/_MOC Pages Objectives|Pages and Objectives]]
- Canonical notes:
- [[10 - Pages and Objectives/Working with Objectives]]
- [[05 - Hierarchies/Objectives Hierarchy]]
- [[10 - Pages and Objectives/Working with Pages]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Compare Objectives Workspace to Custom Objectives (#compare-objectives-workspace-to-custom-objectives)
- H2: Access Rights (#access-rights)
- H2: View OKRs (#view-okrs)
- H3: Actual Value (#actual-value)
- H3: Target Value (#target-value)
- H2: Managing Records By Using the Board Layout (#managing-records-by-using-the-board-layout)
- H3: Setup View Options for the Board Layout (#setup-view-options-for-the-board-layout)
- H2: Managing Records By Using the Grid Layout (#managing-records-by-using-the-grid-layout)
- H3: Setup View Options (#setup-view-options)
- H3: Right-click Context Menu (#right-click-context-menu)
- H2: Create Objectives Using Quick Create or Create from Template (#create-objectives-using-quick-create-or-create-from-template)
- H3: Create an Objective Using Quick Create (#create-an-objective-using-quick-create)
- H3: Create an Objective Using a Template (#create-an-objective-using-a-template)
- H3: Copy an Objective (#copy-an-objective)
- H2: Setup Hierarchical Nested Grids (#setup-hierarchical-nested-grids)
- H3: Sub-Grid Capabilities (#sub-grid-capabilities)
- H2: Associate Investments with Objectives (#associate-investments-with-objectives)
- H2: Managing Business Agreements from Objectives (#managing-business-agreements-from-objectives)
- H2: Introducing Vaia (Beta) - Leveraging AI (#introducing-vaia-beta---leveraging-ai)
- H2: Working with Widgets (#working-with-widgets)
- H3: Interactive Filtering on Widgets (#interactive-filtering-on-widgets)
- H3: Persistent Filter Panel State (#persistent-filter-panel-state)
- H3: Add Multiple Instances of the Same Attribute in Filters (#add-multiple-instances-of-the-same-attribute-in-filters)
- H2: Audit Module for Objectives (#audit-module-for-objectives)
- H3: Clarity vs Classic Audit Column Names (#clarity-vs-classic-audit-column-names)
- H3: Verify Prerequisites (#verify-prerequisites)
- H3: Setup View Options (#setup-view-options)
- H3: View Audit Details (#view-audit-details)
- H2: Configure Canvas to Manage the Objectives Dashboard (#configure-canvas-to-manage-the-objectives-dashboard)
- H3: Pre-requisite (#pre-requisite)
- H3: Setup Canvas to Create a Dashboard (#setup-canvas-to-create-a-dashboard)
- H3: Setup View Options (#setup-view-options)
- H3: Add or Remove Chart Widget in the Canvas (#add-or-remove-chart-widget-in-the-canvas)
- H3: Edit the Chart Widget in the Canvas (#edit-the-chart-widget-in-the-canvas)
- H3: Add a Table Widget to Canvas (#add-a-table-widget-to-canvas)
- H3: Configure the Columns in the Table Widget (#configure-the-columns-in-the-table-widget)
- H3: Search in Table Widget (#search-in-table-widget)
- H3: Arrange Widgets in the Canvas View (#arrange-widgets-in-the-canvas-view)
- H3: Search in Canvas (#search-in-canvas)
- H3: Setup Layout in the Canvas (#setup-layout-in-the-canvas)
- H3: Export to PDF (#export-to-pdf)
- H3: Expand the Widget (#expand-the-widget)
- H3: Widget Governance (#widget-governance)

The Objectives workspace in Broadcom Clarity serves as a powerful strategic alignment tool, transforming how organizations connect their strategic vision to operational execution. It provides organizations with out-of-the-box Objectives and Key Results (OKRs) capabilities, enabling teams to set, track, and measure progress against strategic goals without the complexity of custom configurations.

The Objectives workspace serves as an organizational system of record, bridging the gap between high-level strategic objectives and daily operational activities. Unlike traditional project management approaches that focus solely on task completion, this workspace emphasizes outcome-driven goal setting that aligns with broader business strategies.

The workspace leverages the proven OKR methodology - a goal-setting framework to help organizations focus on the most important things, create strategic alignment, track and measure progress, and stretch individuals and teams to inspire innovation.

The Clarity to Rally integration will support syncing out-of-the-box Objectives, Key Results, Interim Actual Values, and Target Values between Clarity and Rally.

This section contains the following topics:
- Compare Objectives Workspace to Custom Objectives
- Access Rights
- View OKRs
- Managing Records By Using the Board Layout
- Setup View Options for the Board Layout
- Managing Records By Using the Grid Layout
- Setup View Options
- Right-click Context Menu
- Create an Objective
- Copy an Objective
- Setup Hierarchical Nested Grids
- Associate Investments with Objectives
- Managing Business Agreements from Objectives
- Introducing Vaia (Beta) - Leveraging AI
- Working with Widgets

---

## Compare Objectives Workspace to Custom Objectives

The out-of-the-box OKR objects use a singular noun naming convention, such as:
- **Objective** (master object)
- **Key Result** (sub-object)
- **Actual Value** (sub-sub-object)
- **Target Value** (sub-sub-object)

OKR objects implemented in the context of the Custom Object-based OKR cookbook approach have a plural noun naming convention such as "Objectives" with an "s".

You may find, if configured, a single listing containing the out-of-the-box OKR object names with the CMO or CIT based object names in the following areas:
- **Clarity > Administration > Attributes** > Object filter
- **Clarity > Administration > Audit** > Object filter (if audit enabled)
- **Clarity > Administration > Blueprints** > Type filter
- **Clarity > Administration > Integrations** > Object Mapping > Clarity Object
- **Classic > Administration > Studio > Objects**

## Access Rights

Ensure that the following access rights are enabled to access the Objectives workspace:
- **Objective - Navigate**
- The typical **Create**, **Edit**, **View**, **Copy**, and **Delete** permissions can be configured.

## View OKRs

When you access the Objective workspace, you can view the Objective listing along with the default attributes for both Objectives and Key Results. A single objective is highlighted which has its own listing of Key Results. You can also observe that after selecting the **Details** flyout, the **Key Results** tab is selected in the fly-out and uses horizontal positioning. The Key Results module displayed in the fly-out is configured through the blueprint.

Here the Objective is an out-of-the-box Master Object. The **Progress** field ships with a seeded tooltip to help you understand this is a calculated (Number) field comparing total Key Results Progress divided by the number of Key Results.

In addition, Key Result is delivered as an out-of-the-box Sub-Object. Key Result also ships with a **Progress** field which is a Calculated (Number) field comparing Current and Target values. The **Last Updated Date** field is available for both Objective and Key Result and helps to monitor engagement.

**Follow these steps:**

1. Log in to Clarity and then click **Objectives** from the left main menu. The list of the default attributes for both Objectives and Key Results is displayed in the grid layout.
2. Click an objective from the list to drill into details or select an object row and then click the **Details** button to examine the Key Results in the fly-out.
3. Consider the following out-of-the-box fields as a best practice:
   a. **Key Result Owner:** Document individual key result ownership.
   b. **Key Result Unit of Measure:** Identify the type of information that "Start", "Current", and "Target" values represent.
   c. **Key Result Last Updated Date:** Monitor your organization's engagement in the overall OKR practice.
4. Additionally, you can expand the details fly-out and select a key result entry to see its captured interim Actual and Target values in the details fly-out.

### Actual Value

Actual Value is delivered as an out-of-the-box Key Result Sub-Object. Actual Value Name and ID attributes are configured out of the box with auto-numbering on by default. When Clarity Actual Values are in use, the most recent Actual Value automatically updates the Key Result "Current Value" upon page refresh.

### Target Value

Target Value is also delivered as an out-of-the-box Key Result Sub-Object. Interim Target Values do not update the Key Result Target value in any way. Date and Value pairs document interim information pertaining to the desired Key Result Target Value. Similar to Actual Value, Target Value Name and ID attributes are configured out-of-the-box with auto-numbering on by default.

---

## Managing Records By Using the Board Layout

You can use the Board layout to view items as cards. You can arrange these cards with drag-and-drop precision on a board layout with columnar swim lanes. Some key features associated with cards are:
- The board layout does not provide the option to create new cards.
- Cards can now display two title fields per card and display the width of the card. If you configure the investment name, it will hyperlink to the relevant investment.
- You can configure a maximum number of six fields across two columns per card.
- You can configure a maximum of six metrics per card, which are configured up to three columns across. Metrics are displayed in an abbreviated format.
- Cards appear in your choice of colors based on the value you select in the **Color** field in **View Options**. Your color selections are saved with the view.
- Card titles default to the **Name** field. If you configure a default value for the Name field in Studio, Clarity uses that value when creating cards. Without a default value, new cards show "New Item" as their default name.
- You can double-click a card to edit its name. You are not limited to using the default name.

You can interact with records on the board to perform the following actions:
- Use the **Search** bar to filter values based on the name or ID.
- Use **Filters** to identify records that match your selection criterion quickly. You can use the advanced filtering capability to define complex filter conditions.
- Use the **Details Panel**, which is available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using a series of configurable visual widgets.
- Save and modify multiple views that help you achieve your business goals.

> [!NOTE]
> To learn more about the board layout and associated capabilities, see: Clarity Boards, Widgets, Details Panel, Saved Views, Filters.

### Setup View Options for the Board Layout

The **View Options** capability allows you to customize the Board layout.

**Follow these steps:**

1. Navigate to the relevant page in Clarity.
2. Click the **Board** layout.
3. Click **View Options**.
4. Use **Columns** to specify attributes whose values will display as columns horizontally.
5. Use **Swimlanes** to specify attributes whose values will display as swimlanes that collapse vertically.
6. Use **Sort** to select an attribute to sort the cards within a column only.
7. Use **Color** to select a lookup attribute. If display mapping colors are configured for the attribute, it will display the color as a vertical bar on the left side of the card.
8. Use **Show Labels** to show or hide labels.
9. Use **Configure Card** to configure various options that will be displayed on the card.

---

## Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Edit data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the **Conditional Formatting** dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the **Column Panel** to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the **+** or **-** option to shift the values in the date field.
- Use the **Drag Functionality** to populate data.
- Drag up to three column headers to use the **Group By** capability. Then, view the data in the grid as rows of logical groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Use the **Bulk Delete** capability in the Common Grid to delete multiple records.
- Export the common grid data to a CSV file. The Classic PPM user interface supports the export of up to 25,000 rows to CSV file. In this release Clarity supports the export of up to 250,000 rows to CSV files.
- Use the **Search** bar to filter values based on the name or ID.
- Use **Filters** to quickly identify records that match your selection criterion. The advanced filtering capability allows you to define complex filter conditions.
- Use the **Details Panel**, which is available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using a series of configurable visual widgets.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views with other users.

> [!NOTE]
> To learn more about the grid layout and associated capabilities, see: Clarity Grids, Conditional Formatting, Widgets, Details Panel, Saved Views, Filters.

### Setup View Options

**Follow these steps:**

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
5. **Wrap Text:** Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
6. **Show Nested Subobjects:** Turn on the toggle to view and engage with sub-instances across multiple master instances concurrently.
- **Nested Subobject:** You can choose the specific sub-object to display its sub-object instances within the sub-grid.
7. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

> [!NOTE]
> If you see per-period metric details in the View Options, check out the Complete View Options in Grid section.

### Right-click Context Menu

You can right-click a cell on a row to view a context-sensitive menu. You can use this context-sensitive menu to:
- **Open Details:** Opens the details fly-out.
- **Delete Row:** The selected row gets deleted from the grid.

> [!NOTE]
> When you delete a row (or status report) from the grid, the specific status report will be deleted in the respective investment.
- **Star:** You can star various investments to mark them as a favorite.
- **Chart Range (beta):** Clarity creates a chart using the data in the grid. To learn more about using the Chart Range (beta) option in the grid, see Create a Chart.

---

## Create Objectives Using Quick Create or Create from Template

Objectives in Clarity help organizations define and track strategic goals. You can create objectives using two methods:
- **Quick Create:** Allows you to rapidly define a new objective with minimal details.
- **New from Template:** Uses predefined templates to ensure consistency and save time. When you create an objective from a template, the application prompts you to enter the information requested by the administrator in the **Create from Template** module of the blueprint associated with the template.

### Create an Objective Using Quick Create

If you have the **Objective - Create** access right, you can use the Quick Create method when you need to quickly add an objective. You can create an objective in Clarity by specifying the Objective Name. Some other key fields you can specify are Owner, Start, Target, Confidence Score, and so on.

**Follow these steps:**

1. Log into Clarity and click **Objectives**.
2. Click the **+** (Add Row) icon to create an objective.
3. Populate the required field columns such as Objective Name, Owner, Start, Target, and so on. Note that you have to fill all mandatory fields to save the record.
4. Once all columns are filled, the objective appears in the Objectives list, where you can edit further details if needed.
5. Click the Objective to navigate to the **Details** module.

### Create an Objective Using a Template

To save time and effort, and for consistency, create objectives from templates. A template is a framework that helps you quickly get started with new objectives. For example, you may have templates for strategic goals, process improvements, and organizational initiatives.

You can create templates in Clarity to capture the standard attributes and structure that you want to replicate in future objectives of the same type. Use an objective template to copy the contents of the template into each new objective. Use blueprints to define the fields, sections, visuals, and modules shared by one or more templates and further propagated to each new objective. You can modify any of the copied information from the template in the new objective.

When you create an objective from a template, the application prompts you to enter the information requested by the administrator in the **Create from Template** module of the blueprint associated with the template.

> [!NOTE]
> If the selected template includes Key Results, make sure that the Start Date and Target Date of the new Objective fully cover the date ranges of all Target Values associated with those Key Results. Otherwise, a validation error such as "Target Value date is outside the Objective Start and Target dates" may appear. This validation ensures that each Target Value (a sub-object of Key Result) falls within the timeline of the associated Objective.

**For Example:**

Suppose your selected template includes a Key Result called "15% increase in revenue for this fiscal year", and it has the following Target Values:
- Target Value 1 Date: April 12, 2023
- Target Value 2 Date: May 19, 2023

When you create a new Objective using this template, you must ensure:
- The Objective Start Date is on or before April 12, 2023
- The Objective Target Date is on or after May 19, 2023

**Valid Objective dates:**
- Start Date = April 1, 2023
- Target Date = May 31, 2023

**Invalid Objective dates:**
- Start Date = April 15, 2023 (Error: Target Value 1 is earlier)
- Target Date = May 15, 2023 (Error: Target Value 2 is later)

**Follow these steps:**

1. Log into Clarity and click **Objectives**.
2. Click **New from Template**. The **Select a Template** modal appears for you to select a template from the available list.
3. Use the search or navigation arrows to locate the desired template.
4. Select the template and click **Next**. The **New Objective** modal appears.
5. In the **New Objective** modal, populate the required fields as per the template settings. The fields that appear in this modal depend on the **Create from Template** settings configured in the associated Objectives blueprint.

> [!TIP]
> The Objective Name, Owner, Start Date, and Target Date are typically required. You may see additional fields based on the template you selected.

6. Click **Create** to save the objective.
7. The new objective is created based on the selected template. You can modify its details as needed.

### Copy an Objective

You can use the copy function to copy linked Key Results, Actual Values, and Target Values to a new objective or key result. However, using the copy function for a selected Actual Value or Target Value is not supported. The Actual Value and Target Value out-of-the-box attributes have auto-numbering enabled for Name and ID, which requires special handling for the copy function.

**Follow these steps:**

1. Log into Clarity and click **Objectives**.
2. Select an objective from the list that you want to copy from.
3. Click **Copy**.
4. Enter the new Objective Name in the **Copy Objective** dialog.

---

## Setup Hierarchical Nested Grids

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

### Sub-Grid Capabilities

The sub-grid is a generic grid supporting most standard grid capabilities. Some of the key actions you can perform within a sub-grid are:
- You can right-click a cell on a row to view a context-sensitive menu. Using the right-click context menu, you can:
- Open the Details Panel
- Delete the row
- Star various items to mark them as a favorite
- Create a chart using the data in the sub-grid
- You can hover over a column header to display the Column Heading Options menu with choices for pinning, autosizing, and resetting columns.
- You can use the column filter functionality to quickly identify records of a specific column that match your selection criterion. You can also use different operators in your filter criteria to be more specific about the data you want.
- You can use the **Column Panel** in the hamburger menu of every column to add or remove columns from the sub-grid.

---

## Associate Investments with Objectives

You can directly link one or more investments to an objective by using a dedicated **Investments** module within the Objectives workspace. This capability allows you to:
- **Associate Investments with Objectives:** You can link multiple investments (such as projects, products, or other investment types) to a specific objective. This makes it easy to visualize and track which investments are contributing to the achievement of each objective.
- **Strategic Alignment:** By linking investments to objectives, organizations can ensure that operational investment management is closely tied to strategic goals. This enhances transparency and supports better decision-making by showing how day-to-day work supports broader business outcomes.
- **Operational Visibility:** The Investments module allows users to quickly see which investments are associated with each objective, providing a clear line of sight from strategy to execution.

As with all Object modules, the Objective **Investments** module can also be configured through the Objectives Blueprint. Note that it is available only for the Object Type of Objective. The **Configure > Investments** section includes a list of all Clarity's configured Investment types, including Projects, Ideas, CITs, and Team Investments. The Administrator determines which Investment types will be available for association with Objectives.

**Follow these steps to associate Investments with an Objective:**

1. Open the **Objectives** workspace and click the name of the Objective you want to update. The Objective details page appears.
2. Click the **Investments** module.
3. To add Investments:
- Click **Add**.
- Choose an Investment Type from the list. A modal grid appears showing all Investments of that type you have access to.
- Select one or more Investments and click **Add**. The grid updates and shows the linked Investments.
4. To remove Investments:
- Select the check box next to the Investment you want to remove.
- Click **Delete** and confirm the removal.
5. After Investments are added to the grid:
- You can click an Investment name to open its Properties page in the same tab.
- To return to the Objective and the Investments module, do one of the following:
- Use the breadcrumb trail at the top.
- Or, click your browser's **Back** button.

> [!WARNING]
> Some of the key points to remember are:
> - In this release, the Objective Investments module does not support the following attribute types: Per-Period metrics (TSV), Conversations, Attachments.
> - The Investment Type attributes may not be immediately visible in the Investments module Column panel. To access these attributes, you must refresh your browser.
> - From the **Objective > Investments** module, end users can only access Investment types with Instance, OBS, and Global access rights. However, in certain cases, end users may have access, through the Column panel, to Investment type attributes for which they do not have access rights.

---

## Managing Business Agreements from Objectives

Clarity allows you to link one or more investments to an objective by using a dedicated **Investments** module within the Objectives workspace. You can now select an investment and use the **Details** panel to view the agreements associated with that investment. This makes it easy to visualize and track the agreements impacting investments that are contributing to the achievement of each objective. You can also create, edit, and delete agreements as you review investments associated with an objective.

> [!NOTE]
> Some key points to remember are:
> - You need to have instance rights for associated agreements to view them in the Details panel of the investment.
> - You can only view the **Agreements** tab in the details panel for an investment if it is associated with a blueprint where the **Show in Details Flyout** capability has been enabled for the Agreements module.
> - You can only create, edit, and delete agreements when you have the associated instance or global access rights.

---

## Introducing Vaia (Beta) - Leveraging AI

Vaia highlights Clarity's first foray into leveraging public AI models to simplify various user tasks. In this release, you can use Vaia to define Generative AI for any Rich Text Field (RTF) attribute based on the fields you configure in this workspace.

This capability is available for the following objects and sub-objects:
- **Objects:** Projects, Ideas, Custom Investment types (CIT), Hierarchy, Objectives, Plan, Roadmaps and Custom Master Object (CMO)
- **Sub-objects:** Risk, Issue, Change Request, Status Report, and Task

To learn more about configuring Vaia, see Configuring Vaia (Beta).

After you have set up Vaia, you can perform the following actions using the **AI Actions** button:
- Click the **Generate Content** option in the AI Actions button to generate the text for the field.
- If you have already entered some information, the **Revise Content** option will be enabled in the AI Actions. Click **Revise Content** to view the revised content.
- You can use the **Grade Content** option to grade the content in the field. On clicking Grade Content, the following actions occur:
- The AI displays the grading result in a new pop-up window. Review:
- Previously generated grades.
- Each grade includes a date for reference.
- Specific strengths and areas for improvement.
- Examples illustrating content enhancement.
- Regenerate/Refresh the grade as needed.
- Close the grade pop-up window and reopen it anytime by requesting Vaia to grade.

> [!NOTE]
> Some key points to remember are:
> - This feature uses a Generative AI service. The Generative AI service uses emerging technology, may provide inaccurate generated output, and is not designed for or intended to meet your regulatory, legal, or other obligations. Always review AI-generated content for accuracy and make adjustments as needed.
> - This feature is toggled off, and you must create a support ticket to toggle it in your environment.
> - Users need a Google Cloud Platform/OpenAI service account with appropriate permissions to use this functionality.
> - If the AI API key is not configured correctly, then the end user will see an error message on the screen.
> - If the configuration under "Vaia (Beta)" is disabled, the end user will see the following error message: `API 1019: Could not process the request due to internal error.`
> - The text generated depends on the AI Service Model utilized. It has been observed that AI models can change the text format over time, and the result displayed in Clarity would be impacted.

---

## Working with Widgets

You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. In this release, the following widgets are available:
- Number Tile
- Pie
- Bar
- Progress Ring
- Target (Roadmaps and Staffing Workspace)

Some of the key actions you can perform with widgets are:
- Use the **Show Widgets** button to display the widgets toolbar.
- Use the **Manage Widgets** button to open the **Add Widgets** dialog box to add existing widgets from the **My Widgets** section and the **Widget Library**.
- Create a **New Widget** from the Add Widgets dialog box.
- Enhance your data analysis by using the **Interactive Filtering** feature on widgets, enabling deeper insights through drill-down capabilities.

You can create the following widgets in this release. Each widget supports distinct operations such as Count, Sum, and Average. You can also specify the color of the widget and select the relevant display format (number or percentage).
- **Number Tile Widget:** Displays a specific number based on the widget definition and filter criterion.
- **Pie Widget:** Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the "Other" category.
- **Bar Widget:** Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the "Other" category.
- **Progress Ring Widget:** Displays a ring with a number based on the widget definition and filter criterion.
- **Target (Roadmaps and Staffing Workspace):** Displays targets either as goals or constraints on the number and money attributes of the relevant objects.

> [!NOTE]
> To learn more about Widgets, see Widgets.

> [!NOTE]
> Some key points to remember are:
> - The ability to associate the out-of-the-box (OOTB) Objective object with an Organizational Breakdown Structure (OBS) is not supported in this release. However, the CIT and CMO based Objectives do have the ability to associate to an OBS.
> - In prior releases, Rally's Last Actual Value updates Clarity's Current Value. With the Clarity 16.1.2 release, Clarity's latest Actual Value will update Clarity's Current Value. Additionally, users can manually update Clarity's Current Value even if Actual Value is in use.
> - You might not be able to create new Objectives or Key Results within the new out-of-the-box Objectives workspace if you have not followed the OKR cookbook prescriptive implementation when using Custom Master Objects for OKRs. This is due to Custom Master Object (CMO) based Objectives and Key Results Object IDs conflicting with the out-of-the-box Objective and Key Result Object IDs.
>   - **Workaround:** If you want to continue using the existing (Custom Object based) OKR instances, then you must:
>     a. XOG out the Objects and rename the Object ID to avoid duplicate ID conditions.
>     b. XOG out OKR instances and re-associate them with the new Object IDs.
>     c. XOG in the updated OKR objects and instances.
>   - You may never see this if OKRs were not implemented in your environment before the Clarity 16.1.2 release.

### Interactive Filtering on Widgets

Enhance your data analysis with the Interactive Filtering on Widgets feature, enabling detailed drill-down capabilities to explore data with deeper insight. Clicking on any widget dynamically updates the grid view to display data relevant to the selected widget element.

### Persistent Filter Panel State

Previously, Clarity did not retain the open or closed state of the Filters panel, requiring users to reopen or close the panel each time they navigated back to a page. This led to additional clicks and disrupted the continuity of user experience.

### Add Multiple Instances of the Same Attribute in Filters

Previously, when users needed to filter on the same attribute with different conditions in Clarity, they were required to create multiple filter groups and replicate all other filter criteria within each group. This process was time-consuming and complicated, as it required duplicating attributes just to apply different conditions to the same attribute.

---

## Audit Module for Objectives

Auditing in Broadcom Clarity is a critical capability designed to enhance transparency, accountability, and control over changes made to key business objects, including the Roadmaps workspace. Some key benefits of leveraging auditing are:
- **Traceability and Accountability:** Auditing provides a detailed, time-stamped record of all changes made to objects, including what was changed, when, and by whom. This is particularly important in regulated industries or for organizations following strict change management protocols.
- **Risk Mitigation:** Auditing helps organizations quickly identify unauthorized or erroneous changes, reducing the risk of misalignment or strategic drift. If data in an object is altered in a way that could jeopardize project delivery or business outcomes, the audit log provides the necessary information to investigate and remediate the issue.

The Audit module grid column names used in Clarity are different from those in Classic PPM. You can filter for all API-enabled Objects, but are limited to those that are audit-enabled through Classic PPM.

### Clarity vs Classic Audit Column Names

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

This section contains the following topics:
- Verify Prerequisites
- Setup View Options
- View Audit Details

### Verify Prerequisites

Before you begin using the feature, ensure that you have the following permissions:
- You must have **Audit Trail - View - All**, which allows you to view Audit Trail for any object in Classic and Audit for any object in Clarity.
- As an administrator, if you want to grant access rights to the users to access both the Audit tile and the Audit module, then:

| Location | Access Right |
|---|---|
| Administration > Audit tile | Administration - Audit - Navigate |
| Audit Module | Audit Trail - View - All |

### Setup View Options

You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).

**Follow these steps:**

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
5. In **Type**, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
- **Periods:** Set the Start Period and End Period. The application adjusts the time periods based on the value that you selected for periods.
- **Duration:** Set the Start Period and indicate the number of periods (Duration), with an optional offset from the start.
6. Define if you want to see **Sum of Periods** or **Grand Totals** in the Totals column.
- **Sum of Period** displays the Total (e.g., Actual Cost) for the number of periods in the layout.
- Example: If an Investment has a duration of 12 months and the page is configured to display 6 months, the Totals column will sum up the 6 months displayed in the layout.
- **Grand Total** displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout.
- Example: If an Investment has a duration of 12 months and the layout is configured to display 6 months, the Totals column will sum up all 12 months of the investment.
7. **Per-Period Metrics** grant you the ability to select specific data from the below options for display within the grid:
- **Total:** Exclusively shows the "Totals" field without the per-period metric fields in the grid.
- **Periods:** Solely displays the per-period metric fields without the "Totals" field in the grid.
- **Total and Periods:** Simultaneously presents the per-period metric fields and the "Totals" field in the grid.

> [!WARNING]
> You have to select the per-period metric attributes from the Column Panel.

8. **Select Total and Period Columns Separately:** Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.

> [!NOTE]
> When you enable **Select Total and Period Columns Separately**, Clarity disables the Per-Period Metrics setting in View Options.

> [!WARNING]
> When you switch from ON to OFF for the **Select Total and Period Columns Separately** option, the following happens:
> - It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
> - The Columns panel will only display one set of per-period metrics.

9. **Show Total Row:** Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.

The following table shows the different types of aggregation supported for various types of attributes:

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TSV |
|---|---|---|---|---|---|
| Sum | Yes | - | - | - | Yes |
| Average | Yes | Yes | - | - | Yes |
| Count | Yes | Yes | Yes | Yes | Yes |
| Min/Max | Yes | Yes | Yes | - | Yes |
| None | Yes | Yes | Yes | Yes | Yes |

10. Select the **Show Indicator on Non-Default Values** toggle to display visual indicators when the default values of the following attributes are updated:
- Default allocation percentage
- Grand Totals or Totals column
- Allocation Start and Finish date columns
- Individual allocation per-period metrics

    This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.

11. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.

12. **Wrap Text:** Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

13. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

14. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget to quickly cycle through the data for various periods. Your Start Period and End Period settings will update the widget and as you cycle through periods in your widget, the Start Period and End Period will also be updated.

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

### View Audit Details

The Audit module is available for all Blueprints and all API-enabled Objects. The Audit module is available for:
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

**Follow these steps:**

1. Open the relevant workspace for which the Audit module has been configured in the associated blueprint.
2. Click **Audit**. You can leverage the configurable grid toolset utilized throughout Clarity:
- Column configuration
- Fly-out configuration
- Saved views
- Robust filtering
- Group By
- Export to CSV

> [!WARNING]
> Some key points to remember are:
> - The Audit module includes a Standard View with one filter for "Changed Date" to improve the overall user experience. You may have very large amounts of audit data, which will require a longer than expected period to return a result set when NO filters are used. You cannot remove this filter. However, you can modify the values.
>   - Changed Date: = 10 Days Before To Current Date
> - You must close and reopen the Details Flyout to apply Global Date setting options to the Record field.
> - There is a difference in behavior when comparing how the Parent Object information is presented in Classic and Clarity. In Clarity, when you filter to display Sub-Object details (for a Risk as an example), the Parent information is populated. However, in Classic, you must select the Parent Object (such as Project), and the sub-object (or Risk) audit information is included.
> - **Resource Attribute:** When enabling the Resource attribute on the Assignment object for Audit, ensure the change, insert, and delete options are configured in Classic. When the proper Audit configuration is in place, you can see the Insert and Delete operations indicating a resource has been replaced on an assignment.
> - In Clarity 16.1.1, the following capabilities are not supported in the Clarity Audit grid:
>   - Sort using the Attribute column.
>   - Display (total) scalar values (for example, allocations) using configured setting for FTE, Hours, or Days (vs. seconds).
>   - Ability to configure the Audit module for Plans.
>   - Include audit information for the stock sub-sub objects (e.g., Assignments, To Dos) and custom sub-sub objects in the Audit module.
>   - **Workaround:** View audit details for these objects under **Clarity > Administration > Audit**.

---

## Configure Canvas to Manage the Objectives Dashboard

You can configure the chart widgets, table-type widgets, and object-specific attributes in the Canvas layout to view data across multiple sub-objects on a single page.

You can configure the following charts in Canvas:
- Number Tile
- Progress Ring
- Pie Chart
- Bar Chart

You can configure widgets for the following objects and sub-objects in Canvas:
- Key Results
- Custom Objects (second level only)

This section covers the following topics:
- Pre-requisite
- Setup Canvas to Create a Dashboard
- Setup View Options
- Add or Remove Chart Widget in the Canvas
- Edit the Chart Widget in the Canvas
- Add or Remove Table Widget in the Canvas
- Configure the Columns in the Table Widget
- Search in Canvas
- Setup Layout in the Canvas
- Export to PDF
- Expand the Widget
- Widget Governance
- Save Your Views

### Pre-requisite

Your administrator needs to perform the following actions to ensure you can use the Canvas module:
- You have view access to the objective.
- Your objective has to associate with a blueprint that includes the Canvas module.

### Setup Canvas to Create a Dashboard

**Follow these steps:**

1. Open an Objective.
2. Select the relevant canvas module on the Objective to open it.
3. Click **Configure**. A list of widgets enabled within the canvas appears under the **Configure Canvas** panel.

### Setup View Options

You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).

**Follow these steps:**

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
5. In **Type**, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
- **Periods:** Set the Start Period and End Period. The application adjusts the time periods based on the value that you selected for periods.
- **Duration:** Set the Start Period and indicate the number of periods (Duration), with an optional offset from the start.
6. Define if you want to see **Sum of Periods** or **Grand Totals** in the Totals column.
- **Sum of Period** displays the Total (e.g., Actual Cost) for the number of periods in the layout.
- Example: If an Investment has a duration of 12 months and the page is configured to display 6 months, the Totals column will sum up the 6 months displayed in the layout.
- **Grand Total** displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout.
- Example: If an Investment has a duration of 12 months and the layout is configured to display 6 months, the Totals column will sum up all 12 months of the investment.
7. **Per-Period Metrics** grant you the ability to select specific data from the below options for display within the grid:
- **Total:** Exclusively shows the "Totals" field without the per-period metric fields in the grid.
- **Periods:** Solely displays the per-period metric fields without the "Totals" field in the grid.
- **Total and Periods:** Simultaneously presents the per-period metric fields and the "Totals" field in the grid.

> [!WARNING]
> You have to select the per-period metric attributes from the Column Panel.

8. **Select Total and Period Columns Separately:** Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.

> [!NOTE]
> When you enable **Select Total and Period Columns Separately**, Clarity disables the Per-Period Metrics setting in View Options.

> [!WARNING]
> When you switch from ON to OFF for the **Select Total and Period Columns Separately** option, the following happens:
> - It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
> - The Columns panel will only display one set of per-period metrics.

9. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

> [!NOTE]
> Some of the key points to remember are:
> - You can change settings such as **Money Decimal Display**, **Number Decimal Display**, and **Show Total Row** within the table widget of Canvas.
> - You can override canvas per-period settings by enabling the **Override Canvas Per-Period Settings** option in specific tables with per-period metrics.

### Add or Remove Chart Widget in the Canvas

You can define the following chart widgets in canvas:
- Number Tile
- Progress Ring
- Pie Chart
- Bar Chart

> [!NOTE]
> You can add Chart widgets based on any sub-object defined in the investment that should be enabled in Blueprint.

**Follow these steps:**

1. In the Canvas, click **Configure**.
2. Drag a chart widget and drop it into the canvas. It opens the chart configuration pop-up window.
3. Enter the following details. Some fields will vary depending on your widget type and the operation selected in the **Type** field:
- **Title** - Enter the name of the widget
- **Target Object** - Select the sub-object of the investment that is enabled for the canvas in the Blueprint

> [!WARNING]
> The Chart widget will not display the object under Target Object that is disabled in the blueprint canvas.
- **Color** - Display the color of the widget
- **Type** - Select the relevant mathematical operation from the list
- **Format** - Select if you want to display the actual number or the percentage
- **Group By** - Select the attribute that defines your primary criterion for widgets

> [!NOTE]
> To configure the per-period metrics, select **Periods** from the Group By drop-down list.
- **Sum/Average/Minimum/Maximum** - Select the attributes for grouping in the bar chart.

> [!NOTE]
> The Sum/Average/Minimum/Maximum drop-down list displays only the TSV (Per-period) attributes when you select "Periods" in the Group By of Bar Charts.
- **Bar Orientation** - Select the horizontal or vertical bars
- **Sort Order** - Select the ascending or descending sort order. Hover over the Sort Order Tooltip icon to view the tooltip - The sort order will be based on the first attribute selected in the Sum/Average/Minimum/Maximum dropdown list.
- **Group Format** - Select the Clustered or Stacked option:
- **Clustered:** Multiple bars are displayed side by side for each category or group
- **Stacked:** Multiple bars are stacked on top of each other for each category or group
- **Only Include items where** - Select the filter criterion for the widget.

4. Click **Create** to create your widget.
5. Click **Done** to save your changes.

> [!NOTE]
> The Widget library is disabled in Canvas. So, you cannot add the widget to the Widget Library.

> [!WARNING]
> Some of the key points to remember while working with chart widgets:
> - Charts do not support sub-sub-object as a Target object.
> - Only the owner/creator of the chart widget can modify the widget configuration.
> - If other users remove a chart widget from the canvas, a draft copy of the view is created.
> - If a sub-object used as a target object in the chart widget is deleted, then the respective widget is also deleted from the view.
> - If a sub-object used as a target object in the chart widget is disabled in the canvas configuration, then the configured chart widget will continue to show in the canvas but not appear in the available widget list.
> - If an attribute added to the canvas is later secured using Field-Level Security (FLS), the widget will throw a 400 error. It will not be removed or displayed.
> - The Stacked/Clustered bar charts can be configured for Sum, Average, Minimum, and Maximum types but not for Count type. This also applies to per-period metrics in bar charts.
> - The Group Format (Stacked/Clustered) options appear when selecting more than one attribute in the Sum/Average/Minimum/Maximum drop-down list of Bar Charts.
> - A maximum of three attributes can be selected in the Sum/Average/Minimum/Maximum drop-down list of Bar Charts.
> - Sorting will be based on the periods selected in the View Options. So, "Sort Order" will be in Read-Only.
> - The Sum/Average/Minimum/Maximum drop-down list displays only the TSV (Per-period) attributes when you select "Periods" in the Group By of Bar Charts.

> [!TIP]
> After configuring the bar charts:
> - Hover over a bar to view the details of each category/period. This action highlights all associated bars in the chart.
> - The total sum of all periods will be shown at the end of the Stacked Bar Chart.
> - Clicking on a bar instantly changes the format from Number to Percent.
> - If a field in the grid has a negative value, it will not be visible in the Clustered and Stacked Bar Charts.

### Edit the Chart Widget in the Canvas

You can edit the chart widget in the canvas.

> [!WARNING]
> Some of the key points to remember while editing a chart are:
> - Only the owner of the chart widget can modify it by clicking on the edit icon (pencil icon) in the top-right corner of the chart widget.
> - The owner can also remove the chart widget by clicking on the "x" on the top-right corner of the chart widget.
> - If you remove the chart widget, it will be deleted from the canvas.

**Follow these steps:**

1. In the Canvas, click **Configure**.
2. Hover over the chart, and the **Edit** (Gear icon) option appears to let you edit the link.
3. Click **Edit** (Gear icon) to edit a particular widget. You can update the chart details in the pop-up window.
4. Click **Done** to save your changes.

### Add a Table Widget to Canvas

**Follow these steps:**

1. In the Canvas, click **Configure**.
2. Drag a table widget and drop it into the canvas.
3. Enter the name of the table widget.
4. Select the **Target Object** from the list.

Some of the critical actions you can perform by using the grid are:
- Analyze details in the grid by using **Filter**.
- Add or remove an attribute in the grid using **Columns**.

5. Click **Create**. You can see the table widget in the canvas.

### Configure the Columns in the Table Widget

The table widget on Canvas allows you to add or remove columns and filter the data. You can add a maximum of 20 columns to the table widget.

**Follow these steps:**

1. In the Canvas, click **Configure**.
2. Click the **Gear** icon at the top-right corner of the Table Widget to configure it. The grid opens in a pop-up window. Some of the critical actions you can perform by using the grid are:
- Add or remove an attribute in the grid using **Columns**.
- Leverage the **Conditional Formatting** capability. To learn more, see Configure Conditional Formatting.
- Analyze details in the grid by using **Filter**.
- Change the name of the table widget.
- Use the **Group By** capability in the table widgets of Canvas to transform your data grid into rows of logical groups. To learn more about Group By capability, see Collapse-Related Rows Together In Group By Mode.
- Additionally, specific settings related to **Money Decimal Display**, **Number Decimal Display**, and **Show Total Row** are available within the table widget of Canvas.

> [!WARNING]
> You can override canvas per-period settings by enabling the **Override Canvas Per-Period Settings** option in specific tables with per-period metrics.

3. Click **Done** to save your changes.

> [!NOTE]
> Clarity includes fields associated with the Resource Object in the dialog box that is available when you select the Staff Target Object. This helps you associate details such as Booking Manager and Date of Hire with the project's resources. The capability is governed by a feature toggle "Resource Attributes in Canvas Staff Target Object," which is enabled by default.

### Search in Table Widget

You can search the data in the table widget.

**Follow these steps:**

1. Click the **Canvas** module.
2. In the Table Widget, enter the text in the **Search** option (near Gear Icon) to identify various instances based on your requirements. You can view the search result in the grid.

### Arrange Widgets in the Canvas View

There are two types of widgets available in the Canvas view:

1. **1-column Widgets:** Attribute, Progress Ring, and Number Tile need a minimum of 1-column width.
2. **2-column Widgets:** Table Widgets, Pie Chart, and Bar Chart need a minimum of 2-column width.

> [!NOTE]
> You can drag a widget from its edge to change its size.

> [!WARNING]
> The maximum height of the Canvas is 24000px.

### Search in Canvas

You can use the **Search** bar available in Canvas to filter values based on the characters entered by you.

### Setup Layout in the Canvas

You can configure the column layout in Canvas with the following options:

1. 4-Columns
2. 6-Columns
3. 8-Columns

**Follow these steps:**

1. In Canvas, click **Configure**.
2. Click the **Layout** tab in the left panel.
3. Select the column layout based on your requirement:
   a. 4-Columns
   b. 6-Columns
   c. 8-Columns
   You will get a message: "The placement of the widgets will be rearranged. Do you want to proceed?"
4. Click **Proceed**.

> [!NOTE]
> When you change the layout in the canvas, the following changes occur:
> 1. If the column size increases, the layout retains the previous column size and adds new columns on the right-hand side.
> 2. If the column size is decreased, the layout adjusts the widgets in the right-most columns below all the other widgets.

### Export to PDF

You can export the Canvas layout to a PDF file so that you can include Canvas visuals in presentations or other documents for stakeholder communication.

**Follow these steps:**

1. Click the **Canvas** module.
2. Click **Export to PDF** to export the PDF file.
3. Click **Download** to save the PDF.

> [!NOTE]
> **What You See Is What You Get** - When you export the PDF, the PDF looks exactly as it appears on the screen. If the widget has a scroll bar, any data within the scroll bar will not be included in the PDF.

> [!WARNING]
> The Grid has Group By capability, allowing users to group and expand tables within the Canvas view. However, there is a limitation during PDF export where only five expanded tables are displayed. In such cases, Clarity selects the latest expanded tables in the Canvas, prioritizing them for inclusion in the PDF export.

### Expand the Widget

You can expand the pie chart, bar chart, and table widget in Canvas to view the complete and clear chart/widget.

**Follow these steps:**

1. Open the **Canvas** module.
2. Click the **Expand** icon near the chart/widget.

You will see the complete and clear chart/widget.

> [!NOTE]
> Some of the key points to remember are:
> 1. The Number Tile, Progress Ring, Pie Chart, and Bar Chart are responsive. When the Chart size increases in the Canvas, the text size in the Charts increases.
> 2. Click a data point to remove the corresponding slice from the Pie Chart, and observe that the removed data point will be indicated with a strikethrough in the legend.
> 3. The expanded bar chart will show a maximum of 20 categories/periods.

### Widget Governance

Some of the key points to remember while working with widgets:
