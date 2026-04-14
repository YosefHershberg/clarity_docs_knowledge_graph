# Top-Down Planning with Roadmaps

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[04 - Roadmaps/_MOC Roadmaps|Roadmaps]]
- Related domains: [[05 - Hierarchies/_MOC Hierarchies|Hierarchies]], [[10 - Pages and Objectives/_MOC Pages Objectives|Pages and Objectives]]
- Canonical notes:
- [[04 - Roadmaps/Top-Down Planning]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Prerequisites (#prerequisites)
- H2: Overview of Layouts (#overview-of-layouts)
- H2: Review a List of Existing Roadmaps (#review-a-list-of-existing-roadmaps)
- H2: Create a Roadmap (#create-a-roadmap)
- H2: Copy a Roadmap (#copy-a-roadmap)
- H2: Edit Roadmap Details (#edit-roadmap-details)
- H2: Add Roadmap Items (#add-roadmap-items)
- H2: Import Roadmap Items From a CSV File (#import-roadmap-items-from-a-csv-file)
- H2: Import Projects, Custom Investments, and Ideas (#import-projects-custom-investments-and-ideas)
- H2: Link Roadmaps Items to Projects, Custom Investments, and Ideas (#link-roadmaps-items-to-projects-custom-investments-and-ideas)
- H3: Delete the Link Between Roadmaps Items and Investment Objects (#delete-the-link-between-roadmaps-items-and-investment-objects)
- H2: Share Roadmaps with Other Users (#share-roadmaps-with-other-users)
- H2: Use Multi-Currency in Roadmaps (#use-multi-currency-in-roadmaps)
- H2: Synchronize Roadmap Items with Linked Project, Custom Investment, or Idea Attributes (#synchronize-roadmap-items-with-linked-project-custom-investment-or-idea-attributes)
- H2: Use Case: Managing Monthly Roadmaps with Auto-Sync (#use-case-managing-monthly-roadmaps-with-auto-sync)
- H3: Matching Custom Attributes (#matching-custom-attributes)
- H3: Sync Column and Checkbox (#sync-column-and-checkbox)
- H2: Set Target Widgets for the Roadmap (#set-target-widgets-for-the-roadmap)
- H2: Working with Widgets (#working-with-widgets)
- H2: Manage Roadmap Picklists (#manage-roadmap-picklists)
- H3: Configure a Default Global Picklist (#configure-a-default-global-picklist)
- H3: Create a Custom Global Picklist (All Roadmaps) (#create-a-custom-global-picklist-all-roadmaps)
- H3: Create a Local Picklist (#create-a-local-picklist)
- H3: Manage Local Picklists (#manage-local-picklists)
- H3: Delete a Local Picklist Choice (#delete-a-local-picklist-choice)
- H2: Create Roadmap Planning Scenarios (#create-roadmap-planning-scenarios)
- H3: Manage Scenarios for a Roadmap (#manage-scenarios-for-a-roadmap)
- H2: Select an OBS Unit for a Roadmap (#select-an-obs-unit-for-a-roadmap)
- H2: Create and Use Custom Attributes for Roadmaps (#create-and-use-custom-attributes-for-roadmaps)
- H2: Using Process with Roadmaps (#using-process-with-roadmaps)
- H2: Enabling Field Level Security for Roadmaps and Roadmap Items (#enabling-field-level-security-for-roadmaps-and-roadmap-items)
- H2: Working with Roadmap Groups (#working-with-roadmap-groups)
- H3: Create a Roadmap Group (#create-a-roadmap-group)
- H3: Copy a Roadmap Group (#copy-a-roadmap-group)
- H3: Edit Roadmap Group Details (#edit-roadmap-group-details)
- H2: Create Portfolio Items in Rally from Roadmap Scenario (#create-portfolio-items-in-rally-from-roadmap-scenario)
- H2: Introducing Vaia (Beta) - Leveraging AI (#introducing-vaia-beta---leveraging-ai)
- H2: Roadmaps: Using the Timeline Layout (#roadmaps-using-the-timeline-layout)
- H3: Visualize and Model Work Using the Timeline (#visualize-and-model-work-using-the-timeline)
- H3: Create Roadmap Items With No Start or No Finish Date (#create-roadmap-items-with-no-start-or-no-finish-date)
- H3: Arrange Items in the Timeline (#arrange-items-in-the-timeline)
- H3: Add Dependencies for Roadmap Items (#add-dependencies-for-roadmap-items)
- H3: Configure Roadmap Timeline View Options (#configure-roadmap-timeline-view-options)
- H3: Manage Roadmap Events (#manage-roadmap-events)
- H3: Manage Item Events (#manage-item-events)
- H3: Other Actions Available on the Timeline Layout (#other-actions-available-on-the-timeline-layout)
- H3: Summarization for Roadmap Timeline by Vaia (#summarization-for-roadmap-timeline-by-vaia)
- H3: Roadmap Color Legend (#roadmap-color-legend)
- H3: Compare Scenarios in the Timeline (#compare-scenarios-in-the-timeline)
- H3: Export the Roadmap Timeline to PDF (#export-the-roadmap-timeline-to-pdf)
- H3: Troubleshooting the PDF Export Capability (#troubleshooting-the-pdf-export-capability)
- H3: Tweak System Configurations to Enhance Performance (#tweak-system-configurations-to-enhance-performance)
- H2: Roadmaps: Using the Board Layout (#roadmaps-using-the-board-layout)
- H3: Managing Records By Using the Board Layout (#managing-records-by-using-the-board-layout)
- H3: Setup View Options for the Board Layout (#setup-view-options-for-the-board-layout)
- H2: Roadmaps: Using the Grid Layout (#roadmaps-using-the-grid-layout)
- H3: Plan Roadmap Items In a Grid (#plan-roadmap-items-in-a-grid)
- H3: Managing Records By Using the Grid Layout (#managing-records-by-using-the-grid-layout)
- H3: Set View Options for the Grid Layout (#set-view-options-for-the-grid-layout)
- H3: Drag and Drop Ordering (#drag-and-drop-ordering)

Clarity Roadmaps represents a significant evolution from bottom-up portfolio management approaches, introducing a true top-down planning methodology that was previously unavailable in many traditional PPM systems. Unlike rigid, annual planning processes that often lead to organizational fatigue and investment plans driven by operational backlogs, Clarity Roadmaps provides a lightweight, adaptable planning framework that facilitates stakeholder engagement and strategic alignment across the entire portfolio. The tool captures the vision and trajectory of investments over time, offering a high-level visual summary that helps organizations shift their focus from tasks and features to desired outcomes and measurable value delivery.

Some key benefits of using Roadmaps are:
- **Enhanced Strategic Alignment**: Roadmaps enable work to be grouped by strategy and provide holistic visualization of how initiatives and projects contribute to organizational strategic objectives. This visualization leads to clear direction, stakeholder alignment, adaptability, and measurable progress, ensuring that software development efforts are consistently aligned with business objectives.
- **Improved Transparency and Collaboration**: Outcome-oriented roadmaps enhance transparency, trust, and collaboration by ensuring all stakeholders maintain unified understanding of priorities, goals, and progress. This collaborative approach proves particularly valuable for cross-functional teams working on complex initiatives spanning multiple departments or business units.
- **Scenario Planning and What-If Analysis**: Roadmaps enable organizations to explore different strategic possibilities by creating multiple roadmap versions, with capabilities to designate baseline scenarios and Plans of Record (POR). This enables decision-makers to see differences between proposed scenarios, understand the impact of proposed changes, and quickly consider alternatives before making material commitments.

> [!TIP]
> Free Clarity Training on Broadcom Academy
> - You can attend FREE Clarity training by registering at the Broadcom Academy.
> - The Clarity Cookbook: Roadmaps that Tell a Story training is available in the Academy.
> - You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom credentials, simply create a new account and start training.
> - You can review Roadmaps that Tell a Story to see how you can leverage the Clarity Roadmaps cookbook to effectively deploy Roadmaps in your organization.

This section contains the following topics:
- Prerequisites
- Overview of Layouts
- Review a List of Existing Roadmaps
- Create a Roadmap
- Copy a Roadmap
- Edit Roadmap Details
- Add Roadmap Items
- Import Roadmap Items From a CSV File
- Import Projects, Custom Investments, and Ideas
- Link Roadmaps Items to Projects, Custom Investments, and Ideas
- Share Roadmaps with Other Users
- Use Multi-Currency in Roadmaps
- Synchronize Roadmap Items with Linked Project, Custom Investment, or Idea Attributes
- Use case: Managing Monthly Roadmaps with Auto-Sync
- Set Target Widgets for the Roadmap
- Manage Roadmap Picklists
- Create Roadmap Planning Scenarios
- Select an OBS Unit for a Roadmap
- Create and Use Custom Attributes for Roadmaps
- Using Process with Roadmaps
- Enabling Field Level Security for Roadmaps and Roadmap Items
- Working with Roadmap Groups
- Create Portfolio Items in Rally from Roadmap Scenario
- Introducing Vaia (Beta) - Leveraging AI

## Prerequisites

To use Roadmaps, verify with your administrator that the following configuration is complete in Classic PPM:
- Create a default entity. See Create an Entity in Configure an Organizational Breakdown Structure.
- Configure monthly, quarterly, and annual fiscal time period types for the default entity. See Set Up a Financial Entity. If any fiscal period types are not defined on the default entity, those fiscal period types are blank in the column headings in the timeline.
- Grant users the required access rights. See Clarity Access Rights Reference in the English edition of the documentation.
- Create custom global picklists. Include the grouping attributes or lookup values that your organization wants to use in all roadmaps. See Create a Custom Global Picklist.
- Configure color display mappings. You can customize the color grouping options available for the default global picklists. You can also assign color grouping options for your custom global picklists. See Clarity Studio Objects and Attributes in the English edition of the documentation.

## Overview of Layouts

Clarity Roadmaps provides three distinct layout options that enable stakeholders across an organization to interact with roadmap data in formats that best suit their specific roles and planning requirements. Each layout offers unique capabilities for viewing, organizing, and managing roadmap items, providing comprehensive flexibility for different audiences and use cases.
**Timeline Layout:** Timeline Layout serves as the primary visualization tool for strategic planning, displaying roadmap items chronologically across monthly, quarterly, or annual fiscal periods. This layout excels at providing executives and portfolio managers with high-level visual summaries of investment trajectories over time, featuring customizable swimlanes for organizing items by strategic attributes, color-coding based on picklist values, and support for up to three financial metrics displayed as badges on roadmap items. The Timeline layout enables dependency mapping between roadmap items, scenario comparison capabilities for what-if analysis, and sophisticated event management including milestones and key dates represented by various visual indicators such as diamonds, circles, triangles, squares, stars, flags, or rockets.
**Board Layout:** Board Layout transforms roadmap planning into an interactive, collaborative experience by presenting roadmap items as draggable cards organized in columnar swimlanes. This Kanban-style interface proves particularly valuable for agile teams and cross-functional collaboration, enabling users to manage the lifecycle of roadmap items by dragging cards between columns that represent different states, statuses, or organizational groupings. Each card can display up to six configurable fields across two columns and up to six metrics in abbreviated format, with customizable color schemes based on selected attributes. The Board layout supports local and global picklist management, allowing teams to create custom categorization systems such as team assignments, distribution channels, or approval workflows.


**Grid Layout:** Grid Layout provides the most detailed analytical view of roadmap data, presenting information in a familiar spreadsheet-like format with roadmap items displayed as rows and their attributes as configurable columns. This layout appeals to analysts, project managers, and stakeholders who require granular data manipulation and detailed examination of roadmap item properties. The Grid layout offers comprehensive data management capabilities including bulk editing, conditional formatting for visual data analysis, time-phased financial data display by fiscal periods, and advanced filtering and search functionality.

## Review a List of Existing Roadmaps

You can use the Roadmaps page to create a new roadmap for your organization. Since the Roadmaps page utilizes the Clarity common grid some of the key actions you can perform are:
- Use the Column panel to customize the grid by adding various fields to it
- Filter the data in the grid based on your business requirements
- Use the Group By option to collapse related rows view aggregated subtotals wherever applicable
- Export the various roadmaps along with the data in the grid to a CSV file
- Add custom attributes to the grid layout, the column panel, and filters
- Edit data associated with roadmaps directly in the grid or by using the DETAILS layout
- Save your view
For more information on how you can leverage the generic grid capability of Clarity, see Common Components

## Create a Roadmap

You can use the Add Row icon or the New Roadmap button to create a new roadmap.
Follow these steps to create a new roadmap:
1. Log into Clarity and click **Roadmaps**.
2. Click **New Roadmap** or click the **Add Row** icon.
3. Complete the following fields:
- **Roadmap Name**: Enter the name of the roadmap.
- **Genre**: The Roadmap radio button is selected by default. When creating a roadmap, this option must be left with Roadmap being selected.
- **Author**: This option is not displayed if you are using the New Roadmap button. If you are using the Add Row icon to create a roadmap, you can select the relevant author by using the Author field.
- **START PERIOD**: Defines the roadmap start period that is based on what fiscal annual periods you have configured for your default entity. The field shows the next fiscal annual period by default. For example, if the current date is April 15, 2021, the default fiscal period shows 2022, the next annual fiscal period.
- **DURATION**: Defines the roadmap duration and shows one year as the default. The duration that you can select depends on the corresponding annual fiscal periods that are set up on the default entity. For example, you select 2020 as the start period and there are three annual fiscal periods (2020, 2021, and 2022) set up on the default entity. The duration options that appear include 1 Year, 2 Years, and 3 Years.

> [!IMPORTANT]
> The **Other** option appears if you have more than five annual periods that are defined in the future. Consider a scenario where you select 2020 as the start period and the default entity has annual fiscal periods that are defined through 2028. In such a scenario the Other option appears. When you select this option, the system allows you to enter only a number from 6 through 8. You can change the duration after creating a roadmap by updating the Duration attribute.

4. Click **Create**. Your new roadmap appears in the default timeline layout with a unique system-defined ID. If autonumbering is not set up in Classic PPM, enter a unique ID for your roadmap.
5. Add items to your roadmap in the timeline, board, or grid layout.
To delete a roadmap, from the Roadmaps list page, select the roadmap and click Delete.

## Copy a Roadmap

Create a new roadmap by copying an existing roadmap. The details including all the scenarios, saved views, picklists ( local + global), dependencies, personalizations, view options of three layouts, and event definitions from the existing roadmap are copied over. You can tailor the details in the new roadmap for specific investments that may be associated with different teams or departments.
Follow these steps:
1. Log into Clarity and click **Roadmaps**.
2. Select a roadmap from which you want to create a copy and then click **Copy**. Alternatively, you can right-click the roadmap and select **Copy** from the menu. The Copy Roadmap dialog appears for you to provide a name.
3. Enter a name and then click **Copy**. The Copy is in Progress banner is displayed until the copy function is complete and then you can see the copied roadmap in the grid.

> [!NOTE]
> The copy function is triggered in two ways depending on the number of roadmap associations (number of roadmap items, views, events, picklists, and so on). If the roadmap has fewer associations, the copy function will be instant. However, if the associations are more, the copy is done through the background (bg) services similar to the Sync function.

4. Select the copied roadmap to open and change the values.
> [!NOTE]
> Some points to remember are:
- You can only copy one roadmap at a time.
- The copy function copies a roadmap and all its associations.
- The time to copy a roadmap depends on its associations. A Roadmap is copied either Instantly or through
Back Ground (BG) Job based on the Complexity of the Roadmap being copied. The complexity is calculated based on its associations. A new GOVERNOR limit MAX_LOAD_PER_RDM_INSTANT_COPY is introduced to control the threshold. The current threshold value for MAX_LOAD_PER_RDM_INSTANT_COPY is 700. Roadmap copy is instantaneous if the complexity value is < 700 and is through Back Ground (BG) if the complexity value is > 700.
- You can perform all functions on a copied roadmap as on the source roadmap.
- When a copy is in progress:
- If you refresh the screen or navigate out of the Roadmaps screen and then return, the banner is lost
and the copy function fails. However, you can see the copied roadmap in the grid if the copy function is completed during this time.
- You cannot perform another copy function for other roadmaps.
- You can work on other scenarios or other application pages. However, only the current scenario of the source roadmap is temporarily locked for editing.
- Personalizations will not be copied. For example, if the user is in `view1' of Source Roadmap, then on Copied Roadmap, the user will land on `Default (If Exists) or Standard view' and not on `view1'.
- Starred, Sharing, Conversations, and Un-Saved views in the Source Roadmap will not be copied to the target Roadmap.
- When the copy function fails, a notification with a failed message is sent. You can view the message using the Notification icon.

## Edit Roadmap Details

You can add more details to your roadmap such as description or type. You can also edit the existing details. For example, change the author from you to somebody else who can take ownership of it.

Follow these steps:

1. On the Roadmaps page, use the column panel to add relevant attributes to the grid. You can add attributes such as Description, Type, Status, and Starred.
2. Enter the values associated with various attributes to add or edit details associated with the roadmap.

> [!NOTE]
> You can also use the **Properties** tab within a roadmap to edit the various roadmap details.

## Add Roadmap Items

A roadmap consists of items that you want to plan during a given time such as an annual business event or a project that spans multiple quarters. Multiple roadmap items fill the roadmap duration.
You can build a roadmap by adding items as you work through the planning details and funding constraints at your organization. You can use any layout to add roadmap items. When you revisit an existing roadmap, the application returns you to the most recent layout for that roadmap.
You can create roadmap items in Clarity by using one of the following methods:
1. Use the Add Row button on the Timeline, Grid, or Board layouts to create a new roadmap item. 2. Import Roadmap Items From a CSV File 3. Import Projects, Custom Investments, and Ideas from Clarity
Note: If you are using scenarios, a roadmap item is only added to the currently selected scenario in which you are working, not to all existing scenarios.

## Import Roadmap Items From a CSV File

Sid is a Portfolio Manager and his product teams currently use spreadsheets to plan their product launches. Let's help them quickly create a roadmap by importing their data into Clarity.
You can import a list of up to 250 roadmap items from a comma-separated values (CSV) file. Your imported roadmap items appear inside a single roadmap scenario. You cannot update existing roadmap items with this feature.
Importing roadmap items requires the Roadmap - Edit instance-level or OBS-level access right or the Roadmap - Edit - All global access right.
Refer to the following table for the supported types of roadmap item attributes that you can import and their correct formats.

Attribute Type Numbers Percentages Monetary values
Strings Dates

Format
Do not use a thousand separator. Enter periods for the decimal places. Use a dash for negative numbers.
Enter percentages as decimals. For example, to import 25percent, your raw import row should show 0.25.
Do not include a comma for the thousands separator, unless you enclose it in quotes. Decimal values are acceptable; however, do not include currency codes or symbols.
Use double quotes around any strings with commas. For example, "Roadmap Item 1 for regions A, B, and C".
Use the YYYY-MM-DD format. For example, 2019-11-15 for November 15, 2019.


Static single value lookups

Specify one case-sensitive value from the set. For example, for type specify Project, Program, Idea, or Feature. For inPlan, specify 2 (In Plan) or 1 (Not In Plan).

Follow these steps:
1. Log in to Clarity. 2. In the main menu, click Roadmaps. 3. Open a Roadmap and on the Roadmap Items tab select a scenario. 4. Click Item Actions, Import from CSV. 5. Download the PPM_ROADMAP_CSV_IMPORT_TEMPLATE.csv file. 6. Prepare the CSV file:
a. Open a spreadsheet, database, or other application where you can format your source CSV file. For example, a committee decides to explore 40 new portfolio items and sends you a list. You can configure that list in Microsoft Excel. Save a copy of the import template as my_new_items.csv, paste your list of 40 items, format the list as required, and import it into Clarity.
b. Review the first row of the template. The first row contains optional user-friendly names and instructions for each field. For example, Roadmap Item Name (Required field - Max = 80 characters), Start Date, NPV - Net Present Value (Money +/-0.00), or Operating Cost (Money +/-0.00).
c. Verify that the second row contains the API Attribute ID for each attribute. The default values are already set. Your administrator can change these IDs in Clarity Studio. For example, name, start, npv, or operating cost. You can change the API Attribute IDs for any custom attributes only.
d. Verify that the remaining rows (up to 250) contain values that are delimited by a comma with no spaces. Excel handles the commas inside cells and between cells for you when you save as CSV. You do not see the commas in Excel. You can build a raw import file in text using Notepad where you must include the commas.
e. Verify that any date values you want to import follow the YYYY-MM-DD format. Be careful that Excel does not reformat your values.
f. Save your CSV file. If working in Excel, use the Save As option to save your file as a CSV file with the .csv file extension.
7. Verify that you have opened a roadmap and selected a scenario. 8. Click Import CSV. 9. Select the CSV file from your local PC or network server and click Import CSV. A confirmation message shows you
how many rows were successfully imported and how many rows could not be imported. 10. Locate your new imported roadmap items on the board, timeline, or grid. On the board, imported roadmap items might
appear in the None column, ready for you to review. On the timeline, imported roadmap items appear in their specified swim lane (for example, None, Project, or Idea).
> [!TIP]
> New items may not necessarily appear in the NONE column. Their placement depends on how the data is set up in the CSV. You could specify a lookup value for the status or type. The roadmap item would appear in the column or swimlane that corresponds with that value.
When working with the CSV import template in Microsoft Excel, observe the following requirements:
- Format date column cells with the custom YYYY-MM-DD format.
- Do not use commas as thousands separators.
- Save the file as CSV and use UTF-8 encoding to preserve special characters that extend beyond the standard ASCII
(ISO 8859 Latin I) codeset.
Use the following images for guidance:

## Import Projects, Custom Investments, and Ideas

You can create roadmap items by importing active projects, ideas, or custom investments for which you have at least view access rights. When you import projects, ideas, or custom investments as roadmap items, the application creates a link between the roadmap item and the investment object. Each investment object remains linked to the new roadmap item. The Import from Clarity option now displays the corresponding grid with selection checkboxes. You can select Projects, Ideas, or Custom Investment Items from the respective grid. The selection grid lets you select individual row items. You can also select or deselect all rows. You can select any number of investments from the grid. Clarity imports the selected investments. The Select all Option lets you select all the line items to import in an instant. You cannot import a project, idea, or custom investment that is already linked to a roadmap item in a scenario. Those projects, custom investment, and ideas are excluded from the IMPORT FROM Clarity drop-down. Before you can link a roadmap item with a project, idea, or custom investment, ensure that the following conditions are met
- They are active.
- The project is not a template or program.
- The Include in Roadmaps setting for the custom investment type is selected.
- The custom investment is not already linked to another roadmap item in the same roadmap scenario.
NOTE When the start and finish dates of a project is different from that of the associated cost plan of record, the start and finish dates of the linked roadmap item reflect the project dates. However, financial attributes such as Capital Cost or Operating Cost reflect the data from the cost plan. Follow these steps: 1. In the main menu, click Roadmaps. 2. Open a roadmap in the timeline, board, or grid view. 3. Click Scenarios, and select a scenario. 4. Click Item Actions and select Import from PPM. 5. To import any investment object, complete the following steps: a. Select Project, Idea, or <custom investment name> from the drop-down menu. The Select From page appears. b. Select the checkboxes corresponding to the rows.

c. Click Add. NOTE
Each imported project or investment appears as a roadmap item in the timeline, board, or grid. Roadmap item data remains linked to the original projects and investments. The Linked To and Linked To ID columns on the grid layout show the original project or investment data. The financial data from the cost plans of the imported custom investments is also imported in the roadmap item. d. You can import investment objects linked to an OBS unit or import multiple individual investment objects. 6. (Optional). Click the Linked To column item and view the instance details. 7. (Optional) Save any special changes that you make to the current scenario and view.

## Link Roadmaps Items to Projects, Custom Investments, and Ideas

In a roadmap scenario, you can associate a roadmap item to an existing project, a custom investment, or an idea. You will only see projects, custom investments, or ideas for which you have at least view access rights. If you are linking Roadmap Items to a project, then the project:
- Should be active
- Cannot be a template or a program
- Should not be linked to another roadmap item in the same scenario
Similarly, once an idea or a custom investment is linked to a Roadmap item, they cannot be associated with other roadmap items.
Linking allows you to drill into the associated Clarity object (project, custom investment, or idea) and view more details about it. Also, you can import the latest system data from the object into the roadmap item.
Follow these steps
1. Open a roadmap. 2. Click Scenarios to select a scenario. 3. If you are on the Grid layout, use the Linked To column to link the roadmap item to a project, an investment, or an
idea. a. The Linked To ID column is automatically populated with the linked project or investment ID. b. The Linked to Type column is automatically populated based on the type of imported object (project or custom
investment type).
> [!TIP]
> If you cannot see the Linked To or any other columns in the grid, use the Column Panel to add columns to the grid. 4. In the Timeline or Board layout, select the roadmap item to open the DETAILS panel. 5. In the Linked To option, select the project, custom investment, or idea you want to link to the roadmap item. 6. Click Done to save your changes. 7. Use the hyperlink to access the project, investment, or idea pages. Depending on the object type you linked and the type of access you have, you land on one of the following pages:
- Project tiles page: You land on the project tiles page when you have access only to the project but no access to any of the modules (tabs) configured in the project. Consider an example where a project is configured to include only the Risks, Issues, and Changes modules. If you have view access to this project but no access to any of the modules, you land on the project tiles page. You do not see a link to navigate back to the source roadmap.
- Project page with error: You land on a project module page and receive an unauthorized error. Consider an example where a project is configured to include only the following modules in the listed order: Tasks, Risks, Issues, and Changes. If you have view access to this project but no access to the first module (Tasks), you land on

the Tasks page of the project. However, since you are not authorized to see tasks, you get an error on the page. You see a link to navigate back to the source roadmap. You do not see any other modules.
- Project page with no error: You land on a project module page and do not receive an error. For example, a project is configured to include only the following modules in the listed order: Tasks, Risks, Issues, and Changes. If you have view access to this project and also access to the first module (Tasks), you land on the Tasks page of the project. You are also able to see the tasks and a link to navigate back to the source roadmap. You do not see any other modules besides Tasks.
- Investment Details page: You land on the investment details page.
- Idea Details page: You land on the linked idea's grid page. 8. To navigate back to the roadmap, click the roadmap name link at the top of the page.

### Delete the Link Between Roadmaps Items and Investment Objects

You can also delete the link between roadmap items and Clarity objects. Follow these steps: 1. Open a Roadmap. 2. Click Scenarios and select a scenario. 3. If you are on the Grid layout, click the Edit icon on Linked To column and click REMOVE LINK. You can also select
the Roadmap item, open the DETAILS panel, click the Edit icon and select Remove Link. 4. In the Board layout or Timeline layout, select the roadmap item and open the DETAILS panel. 5. Click the Edit icon next to the linked Clarity object. 6. Click Remove Link. 7. Click DONE to save your changes.

## Share Roadmaps with Other Users

You can share roadmaps with other Clarity users to collaborate with them. Based on your requirements, you can provide them either edit or view access to the roadmap. Here are a few key points you need to remember. Some key points you need to remember are:
- You need to be the author of a Roadmap to share it with other Clarity users.
- You can provide Edit or Viewer access to the Clarity user while sharing a roadmap.
- After you share the roadmap, relevant users would be granted Roadmap-Edit or Roadmap-View access rights.
- The relevant users will get a notification. They can navigate to the roadmap by clicking the Notification. The user must
have the Roadmap-Navigate access right to access roadmaps. This right is not granted by using the Share option.
- An author can also remove a shared user from the roadmap.

Follow these steps:
1. Open a Roadmap. 2. Click Properties to open the Properties tab. 3. Click Share to open the Share Roadmap window. 4. Enter the name of the users in the dialog box to select them. 5. Assign the user's relevant access rights. Users get a notification and can click them to access the roadmap.

## Use Multi-Currency in Roadmaps

You can now sync investment data in different currencies into roadmaps with automatic currency conversion. This aligns the data with the selected Roadmap Currency and ensures consistent financial reporting.
Prerequisites
1. Enable Multi-Currency: a. Navigate to Administration > Finance > Processing. b. Check Use Multi-Currency.
2. Activate Currencies and Define Exchange Rates: a. Navigate to Administration > Finance > Setup. b. Activate the required currencies (e.g., USD, INR). c. Define exchange rates between the active currencies, with valid effective dates. NOTE Ensure that all required Foreign Exchange Rates of type Average are configured in the system for the effective dates of the Roadmap Items. If an exchange rate for a Roadmap Item's currency is missing, the conversion will not occur, and an error message will be recorded in the job logs.
3. Enable Currency conversion during Roadmap Items Import and Sync: a. Ensure you have the Administration - Feature Toggles
- Navigate access right to access the Feature Toggles tile in Clarity Administration. b. Navigate to Clarity Administration and click Feature Toggles. c. Ensure that the Enable Currency conversion during Roadmap Items Import and Sync feature toggle is turned on.
Follow these steps:
1. Log into Clarity and click Roadmaps. 2. In the Roadmaps workspace, configure the Currency field from the Columns panel and select the currency for a
roadmap. 3. Open the roadmap in the grid. 4. From the Columns panel, add the Currency field to the grid. 5. Click Item Actions, then Sync Linked Items. 6. Select the attributes to synchronize. You can choose all attributes, attribute groups, or specific attributes. 7. Click Save and Sync Now to start the sync process. A "Sync in progress" message appears. 8. After completion, financial values are converted to the roadmap's currency using the configured exchange rate.
NOTE The Currency field of each roadmap item is updated to reflect the selected roadmap currency.
Any conversion failures (for example, when Foreign Exchange Rates are not configured) are logged in the Roadmap Items Sync job logs.
IMPORTANT
Roadmap Item Creation Behavior
- If Roadmap Currency is Not Set:
- The item defaults to the Studio default currency, if available.
- If no default is set, the system prompts you to specify a currency.
- If Roadmap Currency is Set:
- The item automatically uses the roadmap's currency, overriding the Studio default.
- You can still change it to any other active currency.
Sync Behavior with Currency Conversion
- Currency conversion is based on the exchange rate for the effective date.
- Financial fields, such as totals and period values, are converted to the roadmap currency.

## Synchronize Roadmap Items with Linked Project, Custom Investment, or Idea Attributes

Links are created between roadmap items and projects, custom investments, or ideas when you perform the following actions:
- Import projects, ideas, or custom investments into a roadmap.
- Link a roadmap item to a project, idea, or custom investment in the grid.
As the roadmap or portfolio manager, you can synchronize your linked roadmap items to existing investments. Synchronizing ensures that the roadmap data reflects the latest system data from the linked investments. You can control which roadmap items, attributes, or attributes groups to synchronize. As a project manager, Nicole should also be able to sync either Allocation based or Assignments based capacity attributes.
- When synchronizing attributes, Clarity matches API Attribute ID and Data Type for investment attributes and roadmap item objects. The financial attributes (planned, actual, benefit and revenue) can carry over and can remain synchronized with each imported object.
- You have the ability to sync Start and Finish Dates with either events or without events.
- With Events: Allows you to sync the roadmap with the Start and finish dates along with milestone data and any item events set up from the investments into the roadmap. This option is selected by default.
- Without Events: Allows you to sync the roadmap with only start and finish dates. If selected, any previously synced event data in the roadmap will be cleared.
- You have the ability to sync Capacity as either Allocations or Assignments.
- Syncing Allocations enables the roadmap owner to understand the total capacity planned for a roadmap.
- Syncing Assignments enables the roadmap owner to understand the total capacity committed and the remaining capacity for a roadmap.
- If you select Assignments, Capacity values derived are ETC + Actuals.
- If you select Allocations, Capacity values derived are Allocations.
- Clearing the Capacity checkbox disables Assignments & Allocations options. By default, the Allocations option is selected.
- For the Clarity 16.1.3 or higher releases, you can schedule the synchronization of a Roadmap, providing you with automatic and timely updates to the data you use in Roadmaps. You can use either Sync Linked Items for OnDemand sync or Configure Sync Schedule for a scheduled sync based on your requirements. You can save your selection for both types of sync and view the last sync details.
- Sync Linked Items: With the "On Demand Sync" feature, you can synchronize linked items whenever you need them. Using Sync Linked Items, you can open the 'Sync Linked Items' window, where you can select the attributes for the synchronization. You have the option to click 'Save' to save your selection or 'Cancel' to close the modal without saving. If you want to save your selection and synchronize immediately, you can select 'Save and Sync Now.' This feature provides you with flexibility and control, allowing you to sync data on your terms, exactly when you need it. Note that Last Sync is blank for the first time, that is, when no Sync has been performed.
- Configure Sync Schedule: The "Configure Sync Schedule" feature allows you to set up automatic synchronization according to your preferred schedule. Using Configure Sync Schedule, you can open the Configure Sync Schedule window. Here, you can select specific days of the week, enter a time in a 12-hour format, and set a start and end date for the synchronization. The default time is set to '6.00 AM,' but you can modify it as needed. Once you have made your selections, you can click 'Save' to save the schedule along with the attributes selected to

sync the data whenever the sync is scheduled. However, if you want to save the schedule and sync immediately, you can select 'Save and Sync Now.' You also have the option to delete the saved schedule by using the 'Delete Schedule' button. This feature allows you to automate the sync process, ensuring that your data is always up to date according to your chosen schedule. This feature uses the SCHEDULE_RDM_ITEMS_SYNC job to schedule the synchronization of items.
> [!NOTE]
> Some of the key points to remember are:
- Persistence of Selection:
- For the Sync Linked Items option, the selection will be persisted per user, per scenario, and per Roadmap.
- For the Configure Sync Schedule option, the selection will be persisted per scenario and per Roadmap.
- Browser time setting is honored while setting time for Sync Schedule and while displaying Last Sync details.
- 'Delete Schedule' cancels the respective schedule job and then deletes the Job.
- Save and Sync Now:
- 'Save and Sync Now' will save the selected attributes information and sync immediately.
- The window will close, and Sync starts, displaying the banner 'Sync In Progress. This scenario is
temporarily locked for editing.'
- While Sync is in Progress, the screen becomes non-editable. The user experience is the same as it
was before in the 16.1.2 release.
- Last Sync displays the user details of Last Sync across Sync Linked Items and Configure Sync
Schedule windows.
- Copying a Roadmap will also copy its Sync Schedule.
NOTE The sync functionality is identical for Projects, Ideas, and Custom Investment Types. In Clarity 15.9.2 and higher releases, you can synchronize rich text fields between various investments and roadmaps.
Example: Sid is working in a roadmap grid that has several roadmap items that are linked to Clarity projects. As the portfolio manager, Sid knows that there are several project managers still working on changing metrics in their projects. He wants to exclude these projects from the synchronization process. Sid wants to control which roadmap items are updated with the project data. He also wants to update only the actual attributes and not the planned ones. When the project managers are done updating their plans, Sid opens the roadmap, selects the remaining roadmap items, and synchronizes them with the latest project data.
Follow these steps:
1. In the main menu, click Roadmaps. 2. Open a roadmap in the grid. 3. Click Scenarios and select a scenario. 4. Import projects, ideas, or custom investments into a roadmap or link a roadmap item to a project, idea, or custom
investment in the grid. Verify that the Linked To field shows the associated project, idea, or investment. 5. Click Column Panel and select one or more custom attributes that you want to synchronize in the grid. 6. Select the Sync attribute. You might have to scroll the grid to the right to view the new attribute in its own column. By
default, syncing is selected for linked roadmap items. 7. For the linked roadmap items that you do not want to synchronize, clear the checkbox in the Sync column. 8. Click Item Actions and select Sync Linked Items. If you want to schedule the sync function, skip this step.
a. Select the roadmap item attributes to synchronize. You can select all attributes, attribute groups, or only specific attributes.
b. To sync custom lookup attributes for projects, ideas, custom investments, and multi-valued lookup
- strings, select Matching Custom Attributes.
c. Click Save to save the current selection of attributes. Note that clicking Save will not initiate the synchronization process.
d. Click Save and Sync Now to begin the synchronization process. Sync in progress appears. You can work on other scenarios or other application pages during the sync operation. Only the current scenario is temporarily locked for editing. NOTE The Sync Linked Items option will only synchronize the attributes in the current scenario. If you have multiple scenarios and need to update them, you have to run Sync Linked Items on each scenario. For example, if Sid runs Sync Linked Items on a March POR scenario and Julie refreshes the page in a different scenario called August POR, she will not see the updated attributes. To see the updated attributes, Julie or Sid must run roadmap Sync Linked Items on the specific scenario.
9. Click Item Actions and select Configure Sync Schedule. a. From the Days dropdown, select the days of the week. b. Enter Time in hh:mm format and then select AM or PM. The default value is set to 6:00 AM. c. Use the date picker to select Start Date and End Date.

d. Select the roadmap item attributes to synchronize. You can select all attributes, attribute groups, or only specific attributes.
e. To sync custom lookup attributes for projects, ideas, custom investments, and multi-valued lookup
- strings, select Matching Custom Attributes.
f. Click Save to save the schedule along with the current selection of attributes. This will automatically initiate the synchronization process on the selected date and time.
g. Click Save and Sync Now to save the schedule along with the current selection of attributes and also begin the synchronization process immediately. Note that this will also automatically initiate the synchronization process on the selected date and time. Sync in progress appears. You can work on other scenarios or other application pages during the sync operation. Only the current scenario is temporarily locked for editing. NOTE The Sync Linked Items option will only synchronize the attributes in the current scenario. If you have multiple scenarios and need to update them, you have to run Sync Linked Items on each scenario. For example, if Sid runs Sync Linked Items on a March POR scenario and Julie refreshes the page in a different scenario called August POR, she will not see the updated attributes. To see the updated attributes, Julie or Sid must run roadmap Sync Linked Items on the specific scenario.
h. Click Delete Schedule if you want to delete the saved schedule. When you click Delete Schedule, saved schedule details along with the selected attributes will be deleted, and the window will be closed.
10. After the sync process is complete, the custom attributes are populated in the roadmap item custom attributes. NOTE When you sync roadmaps items with projects, you can select between syncing allocations or assignments. If you select assignments, Clarity will use add the ETC and the Actuals for the project to calculate assignments and synchronize the project with the roadmap item. When you import a project as a roadmap item all the relevant data associated with the project is imported as roadmap item attributes. When synchronizing a roadmap, it only updates the attributes you selected in the Sync Linked Items window. In Clarity 16.1.2 and higher releases, you can sync the Roadmap Item with the Parent and Type attributes.
> [!CAUTION]
> In this release, Clarity does not support the synchronization of custom TSVs for roadmaps items. This release includes a defect DE63401, which may result in the synchronization of some custom TSVs. However, Clarity officially supports synchronization for the following data types:
- STRING
- DATE
- BOOLEAN
- NUMBER
- PERCENT
- MONEY
- URL
- CLOB
- RICHTEXT
- LOOKUP

## Use Case: Managing Monthly Roadmaps with Auto-Sync

**Scenario:**
At the start of each new month, Sid creates a new Roadmap by duplicating the previous month's Roadmap.
**Problem:**
Without explicitly setting an end date in Configure Sync Schedule, there is a risk of conflicts or duplicated updates between the old and new Roadmaps.
**Solution:**
An end date must be set in the Configure Sync Schedule for the previous month's Roadmap to prevent overlapping or unwanted synchronization. This ensures:
- Automatic synchronization stops pulling data for the completed period.
- The new Roadmap starts fresh with its own start and end dates, aligned with the new month.
**Example:**
- **Previous Roadmap:** At the end of March, the Roadmap for March is completed. Before creating the April Roadmap, the Configure Sync Schedule for the March scenario is set with an end date of March 31.
- **Current Roadmap:** At the beginning of April, a new Roadmap is created for April by duplicating the March Roadmap. The sync schedule for the April Roadmap must be updated with a start date of April 01 and an end date of April 30. > [!WARNING] If not updated, the new Roadmap won't sync because it will have the old dates, and the end date has already passed.
**Benefits:**
Implementing this approach ensures:
1. **Seamless data management:** It prevents overlapping or conflicting updates between consecutive Roadmaps.
2. **Improved accuracy:** It ensures each Roadmap reflects the accurate data for its respective time period, while preserving proper historical data in older Scenarios.
3. **Time efficiency:** It prevents errors and minimizes the time spent troubleshooting or reconfiguring the sync.

### Matching Custom Attributes

When synchronizing matching custom attributes, the match is based on the API Attribute ID and Data Type for the child attribute of the parent Project, Custom Investment, or Idea object:
- The API Attribute ID and lookup data type for the attribute must match the API Attribute ID of the roadmap item object.
- The type for the attribute must match the attribute type on the roadmap item object.
- The lookup must also match.
- API Attribute ID must be a single character followed by an underscore (example: c_attribute).
- When you select the Matching Custom Attributes option and the application finds a match, the data from the
investment populates the roadmap item.
- If the application finds no matching attributes, nothing happens to your custom investment attributes. The application
continues synchronizing the remaining linked items as usual.
- Lookups (SVL) - (Static and Parameterized)
- Number
- String
- Boolean
- Date
- Money
- Large text
The following conditions also apply:
> [!WARNING]
> - Clarity will synchronize additional attributes when you select the "Matching Custom Attributes" option.
- Clarity matches attributes based on API Attribute ID and type.
- If you select the "Matching Custom Attributes" option and Clarity finds a match based on these criteria, the
data will be populated from the investment to the roadmap item.
- When you synchronize Large String attributes, Clarity will copy the data as is, including special characters
and formatting.
- When you synchronize the "Money" attribute, Clarity will copy the amount without any conversion.
- When you synchronize the "Money" attribute, Clarity requires two pieces of information namely currency and
amount.

### Sync Column and Checkbox

The following three conditions control the appearance of the checkbox in the grid:
- Visible and Not Selected: The roadmap item is linked to a project; however, you do not want to synchronize it.
- Visible and Selected: The roadmap item is linked to a project and ready for synchronization.
- Not Visible: The roadmap item is not linked. Without a linked project, the roadmap item cannot be synchronized.
> [!TIP]
> To identify the last time a roadmap item was synchronized, add the Last Synced Date field from the Column Panel to the grid.

## Set Target Widgets for the Roadmap

You can set target widgets either as goals or constraints on the number and money attributes of the Roadmap Item object. Target widgets can be displayed in the Timeline, Board, and Grid layouts. By adding, moving, or removing roadmap items that you can effectively plan the roadmap while meeting the set targets. Calculated-number attributes can now be selected as targets.
Follow these steps:
1. Open a roadmap and click Timeline, Board, or Grid. 2. Click Show Widgets to display the Widgets toolbar. 3. Click Manage Widgets to open the Add Widget dialog box. 4. Select Add to display a pre-defined target from Widget Library or click New Widget to open the New Widget window. 5. Select Target as widget type and select Next to open the Create Target dialog box..

6. Enter the following details to define the new Target behavior.
- Title - Enter the name of the target widget.
- Type - You can specify the following types of targets.
- Target: A constraint that you try to stay under and not go over. For example, Capital Cost. This is selected by default.
- Goal: A target that you can either achieve or exceed. Benefit is an example of a target that is a goal.
- Sum - Select the attribute that will be aggregated.
- Label - Enter a label name for the selected attribute in Sum. For example, In Plan. This is an optional field.
- Only Include items where - Select the filter criterion for the widget.
- In Widget Library - Add your target widget to the Widget library if you have appropriate permissions.
7. Click Create to create your target widget.

## Working with Widgets

You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. In this release, the following widgets are available:
- Number Tile
- Pie
- Bar
- Progress Ring
- Target (Roadmaps and Staffing Workspace)
Some of the key actions you can perform with widgets are:
- Use the Show Widgets button to display the widgets toolbar.
- Use the Manage Widgets button to open the Add Widgets dialog box to add existing widgets from the My Widgets
section and the Widget library.
- Create a New Widget from the Add Widgets dialog box.
- Enhance your data analysis by using the Interactive Filtering feature on widgets, enabling deeper insights through drill-
down capabilities.
You can create the following widgets in this release. Each widget supports distinct operations such as Count, Sum, and Average. You can also specify the color of the widget and select the relevant display format (number or percentage).
- Number Tile Widget: Displays a specific number based on the widget definition and filter criterion.
- Pie Widget: Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant
field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- Bar Widget: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- Progress Ring Widget: Displays a ring with a number based on the widget definition and filter criterion.
- Target (Roadmaps and Staffing Workspace): Displays targets either as goals or constraints on the number and money attributes of the relevant objects.
NOTE To learn more about Widgets, see Widgets.

## Manage Roadmap Picklists

### Configure a Default Global Picklist

The default picklists for grouping roadmap items are based on the values that your administrator defines for the following lookup attributes. The lookups reside on the Roadmap Item object in :
- Status: The lookup contains the values for the Status attribute that lets you group items into columns by status. For example, all unapproved roadmap items appear under the Unapproved column.
- Type: The lookup contains the values for the Type attribute that lets you group items by roadmap item type. For example, all ideas appear under the Idea column.
NOTE
The In Plan lookup attribute is system-restricted. You cannot customize the lookup to add more values. You can only change the labels and the display colors for the existing values.
Classic PPMClarity Studio Objects and Attributes
The default picklists are global and are available to all roadmaps in the system for grouping roadmap items. They appear differently on the different layouts. On the timeline layout, they appear as swim lanes with optional colors. On the board layout, they appear as columns with optional colors. On the grid, they appear as columns.If a default color is not defined for the picklist values, the application uses white as the default color. You can customize the default color for the default global picklists.Work with your system administrator to configure the default global picklists in Classic PPM. See Clarity Studio Objects and Attributes for details.
Follow these steps:
1. Click Administration, Studio, Objects. 2. Open the Roadmap Item object and click the Attributes tab. 3. Select the attribute that you want to configure. For example, Status, Type, or In Plan. 4. Configure the following properties:
- Set the order in which the values appear in the list.
- Rename or add values to the list to align with your business needs.
- Change the predefined color display mappings.
- Activate a lookup picklist that was previously deactivated or deactivate a lookup so it no longer appears as
a picklist. Users cannot add new picklist values to the columns for deactivated picklists. The column appears visually different compared to the active columns. When you move the last item out of the deactivated value column, the column disappears. 5. To add a new global picklist, click New and define the roadmap item attribute and its values.
> [!TIP]
> Do not be confused by the appearance of a field called Type with values such as Investment, Product, and Application on the Details panel, and another field also called Type with values such as Project, Program, Idea, or Feature as seen in the swimlanes and legend. You are seeing the subtle difference between Roadmap Type and Roadmap Item Type.

### Create a Custom Global Picklist (All Roadmaps)

You can create your own custom picklist containing custom grouping values that are governed by the company. The global picklists appear under the SWIMLANES or COLUMNS and COLOR BY list under View Options. They apply to all roadmaps. For example, you can create a custom picklist that is named Business Outcomes to group your roadmap items using the following values:
- Mobile
- Technology Enhancement
- Wow the Customers
The custom picklist becomes available in the Columns and Color By grouping attributes. You can then select Business Outcomes from the Columns attribute to view your roadmap items that are grouped into columns corresponding to their business outcome value. Also, you can select Business Outcomes from the Color By attribute to view your roadmap items that are grouped by colors that you associate with the business outcomes.
Follow these steps:
1. In the Administration tool, create a Static List lookup that is associated with the Roadmap Item object. Select the Manual sort order so you can define the order in which the lookup values appear on the UI.
2. Add your custom values to the lookup. The values correspond to the grouping options that the picklist contains on a roadmap.
3. Reorder the values manually. 4. On the Roadmap Item object, create an attribute. The attribute name corresponds to the picklist name that displays on
the roadmap. 5. Associate the new attribute to the Static List lookup using the Data Type field. 6. In Display Mappings, select a color to represent each lookup value. 7. (Optional). Specify a default color for each lookup value. If you deactivate a lookup value, the assigned color
disappears for the value from the roadmap and it displays in the default color.
When you create a global picklist, the existing roadmap items first appear in the None swim lane or column and are sorted by their start date. You can then move these items from None to the other lanes. If you deactivate or delete the picklist in , the items again appear in the None swim lane or column.If you delete the roadmap Item attribute that is used as a custom global picklist, the picklist is removed from all roadmaps.

### Create a Local Picklist

Create a local picklist to group roadmap items by columns or by color in a specific roadmap. You can then use the picklist across all the layouts. For example, if you create a Columns picklist in the Board layout, the picklist appears in the Timeline settings as an option under SWIMLANES. In the Grid layout, the picklist choices appear in the Column Panel.Apply the picklist choices to the roadmap layout. For example, if you create a columns picklist, move any new roadmap items from the None column to the new columns.
Follow these steps:
1. Open a roadmap and click Timeline, Board, or Grid 2. Click View Options. 3. Click MANAGE PICKLISTS. The MANAGE PICKLISTS window appears. 4. Click NEW PICKLIST. 5. Enter a picklist name (for example, Business Outcomes). 6. Add choices to your picklist. Name the choices to correspond to your picklist values. For example, Mobile, Technology
Enhancement, and so on. 7. To select a color for a picklist choice, click the red box to the left of the choice. Pick a color from the palette that
displays. 8. Click Done to save the picklist and add it to the Columns or Color By list under THIS ROADMAP.
Example:
NOTE
NOTE: When you switch between different scenarios for a roadmap, the grouping that you have currently selected for the roadmap items remains the same across all the scenarios.

If you create a color picklist, a color legend appears at the bottom right corner of the page. The legend displays the colors and their corresponding values in the picklist. Sid has already compiled a roadmap of the new efforts that his research teams have underway. Upon drilling into the roadmap, Sid realizes that he wants to group the roadmap items by team, which is not a currently defined grouping available. He creates a Team picklist for his five teams, then distributes the available roadmap items to those teams. He also wants to have a quick way to indicate the status of these items. Sid selects Status as the color by attribute, which also causes a legend to appear at the bottom of the page indicating which color reflects which status. He then saves these choices as part of his "Working View".

### Manage Local Picklists

You can select an existing local picklist or search for a picklist by name. After selecting a picklist, you can edit or delete the values. If you delete a custom local picklist that is applied to a roadmap view, the default picklist gets applied to the view. For example, say that you have selected a local picklist (MyPicklist01) for the Columns grouping on the board layout. You delete the picklist. The view then refreshes and applies the default global picklist of Status to the Columns grouping.
Follow these steps:
1. Open a roadmap and click Timeline, Board, or Grid. 2. Click View Options. 3. Click MANAGE PICKLISTS. The MANAGE PICKLISTS window appears. 4. Select a picklist that you want to edit. 5. Edit the picklist values as follows:
- Rename, delete, or add choices.
- Move the choices up or down in the list.
- Change the color choices.
- Delete the entire picklist. 6. When done, click X Close .

### Delete a Local Picklist Choice
- If you delete a picklist choice, the corresponding column or swim lane is deactivated and appears unavailable on the layouts. After you move all the roadmap items from the deleted column or swim lane, the column or swim lane disappears.
- If you delete a picklist choice that is assigned a color, any existing roadmap items continue to display the color. After you move the roadmap items from the deleted column or swim lane, the column or swim lane with color disappears.

## Create Roadmap Planning Scenarios

A scenario is a copy of the roadmap data with a unique name. Scenarios allow you to explore changes to the roadmap items in the context of a scenario. You can create multiple scenarios for a roadmap and can indicate which is the plan of record and which is the baseline. When you report the portfolio performance, you can decide to use only one plan (for example, the plan of record). Sid is preparing for a stakeholder meeting to review his Technology Work roadmap for the next six months. The stakeholders ask many questions. He wants to answer them visually so they can see the impact of making the suggested changes. For example, John wants to know if adding more resources for the roadmap items delivers faster time-to-market. Karen wants to know the impact if they reduce funding and allocate fewer resources. Sid selects the default scenario and clicks Save As to create a scenario with a new name. He edits the content to reflect these scenario questions. Sid creates the following scenarios from the default scenario:
- Technology Work with More Resources
- Technology Work with Fewer Resources
NOTE The Sync Linked Items option will only sync the attributes in the current scenario. If you have multiple scenarios and need to update them, you have to run Sync Linked Items on each scenario. For example, if Sid runs Sync Linked Items on a scenario called March POR and Julie refreshes the page in a different scenario

called August POR, she will not see the updated attributes. To see the updated attributes, Julie or Sid have to run roadmap Sync Linked Items on the specific scenario.
Follow these steps: You can create a scenario from any roadmap layout by copying either the default scenario or an existing scenario.
1. Open a roadmap and click Scenarios. If you have not created any scenarios, the Default Scenario appears in the Scenario drop-down list. If you have created scenarios, the existing scenarios also appear on the menu.
2. Select the default or an existing scenario and then select Save As to create a copy of that scenario. 3. Enter a name for the new scenario and click Save. 4. Edit the roadmap items specific to this scenario. The changes are not reflected in other scenarios.
Default scenario If you are not using scenarios, the system creates a default roadmap scenario using the base roadmap data and applies the Plan of Record (POR) tag. Until you create more scenarios, the default scenario and its POR tag are not visible. Baseline You can tag only one scenario per roadmap as a baseline. You are not required to mark a scenario as a baseline. If a scenario is already tagged as the POR, you cannot tag it as the baseline. You can delete a roadmap scenario that is the baseline. Plan of Record (POR) You can tag only one scenario per roadmap as the plan of record. If no scenarios exist for a roadmap, you cannot edit the default scenario plan of record tag to No. There must always be a plan of record scenario in the system. If you try to delete a roadmap scenario that is the plan of record, you are prompted to select another scenario as the plan of record.

### Manage Scenarios for a Roadmap

You can edit a roadmap item and its attributes in all scenarios but each change is specific to each scenario.
1. Open a roadmap and click Scenarios. 2. Click the Scenario drop-down and click MANAGE. 3. Click the  Actions menu next to a scenario to manage the scenario as follows:
- Rename the scenario
- Delete the scenario
- Set the scenario as the POR and remove the POR tag from any previous POR scenario.
- Make the scenario the baseline and remove the baseline tag from any previous baseline scenario.
- Remove the baseline tag from a baseline. 4. Click X Close.

## Select an OBS Unit for a Roadmap

As a portfolio manager, you can restrict and limit OBS associations on roadmap objects. Only users having OBS-level access rights or global roadmap rights can view the roadmap objects associated with their OBS.
After you associate a roadmap with an OBS, you can select an OBS unit for the roadmap in Clarity.
Follow these steps
1. Navigate to a roadmap. You must have an OBS unit or global roadmap access rights to view or edit the roadmap. 2. Click the Details button. The associated OBS attribute for the roadmap appears. 3. Select an OBS unit for the roadmap.

## Create and Use Custom Attributes for Roadmaps

Sid - a Portfolio Manager creates roadmaps to build top-down plans and initiatives. He wants to attach a custom attribute called confidence level with the roadmap items. He can set the confidence level to high, low, or medium and use it to

guide his investment decisions. Let's see how the administrator helps Sid by first creating a lookup and then a custom attribute. Follow these steps: 1. Open Classic PPM and select Objects. 2. In the Object Name field, type Roadmap Item and press Enter. 3. Select the Roadmap Item object. 4. Select the Attributes tab and click New to create a new attribute. 5. Click Save and Return to finalize your changes.

## Using Process with Roadmaps

The Roadmaps object has been enhanced to support processes in this release. You can now invoke processes based on creation or updates roadmaps. Customers can now use a process to push a roadmap item to another system, such as Rally, for execution.
> [!TIP]
> - Roadmaps are event enabled to allow processes to run against it.
- The roadmap will appear as an option under the primary object for processes.
- Processes can run when you create and update of roadmaps.
- Roadmaps are automatically event enabled after upgrade. Customers have the option to "uncheck" the
event-enabled flag.
- Processes executed against a roadmap can only be seen in Classic PPM.
- Processes built with action items still require you to act on it in Classic PPM.
- Processes cannot be run on roadmap items. However, process start condition can
use roadmap, roadmap items, or roadmap item dependency attributes.
- If you change the name of a custom investment then the "Event Enabled" flag gets unchecked.
- If you create an action item process then the notification link to the Roadmap does not work.
- There is no option to start a process "On Demand" even if you select that option in the process definition. You
can run these processes by using the "Execute a Process" job. For more information on how you can leverage processes in Clarity, see ClarityConfigure Processes.

## Enabling Field Level Security for Roadmaps and Roadmap Items

Roadmap and Roadmap Item attributes can be secured using field-level security (FLS). You can use FLS to provide access to specific attributes or fields for specific user groups. Roadmap and Roadmap Item field-level security apply only to Clarity and not Classic PPM.
> [!IMPORTANT]
> Some of the key points you need to remember are: 1. The administrator grants and revokes field access at the group level. 2. The following items cannot be secured by FLS:
a. Roadmap - ID, Name, Start Period, Start, Finish, Blueprint Active ID b. Roadmap Item - ID, Name, Start, Finish, Currency*, In Plan*, Per-period metrics (e.g., TSV)* 3. FLS always has precedence over defined Roadmap or Roadmap Item Object security access rights. 4. From a third-party integration perspective, the "Integration User" will have access to secured attributes.

## Working with Roadmap Groups

From the Clarity 16.2.0 and higher releases, you can use the Roadmap Groups feature to create and manage grouped roadmaps with ease of planning and representing the top-down plans. This will provide an easy way to review the underlying roadmap information and re-plan as required. You can create and manage Roadmap Groups through a simplified user interface, which includes a 'Genre' selection during roadmap creation and a Manage Roadmap Group module for easy customization. You can create a Roadmap Group either through the New Roadmap button or through the + icon on the Roadmap grid. Similar to Roadmaps, Roadmap Groups also support functionalities like Dependencies, Agreements, Key Milestones, Roadmap Events, Export to PDF, Export to CSV, and Widgets. Additionally, the View Options includes Swimlane Groups for more granular control over roadmap visualization. Note that the Snap to Period and Manage Picklists options are not applicable to Roadmap Groups.

> [!NOTE]
> Some key points to remember are:
- View Access: Ensure that you have at least view access to individual 'Roadmaps' to see the associated
'Roadmap Items' within 'Roadmap Groups'. Access to a 'Roadmap Group' alone does not guarantee the visibility of all linked Roadmap Items.
- Access Restrictions: If you are granted access to a 'Roadmap Group' that includes multiple Roadmaps, you will only see items from those Roadmaps to which you have access. For example, if a group contains four Roadmaps and you have access to only two, you will only see the items from those two Roadmaps.
- Attribute Restrictions: The 'Roadmap' attribute is blacklisted, meaning that Field Level Security (FLS) is not supported for this attribute. Be mindful of this when configuring user permissions and access.
- Manual Adjustments: This version does not allow users to manually drag and drop 'Roadmap Items' within 'Roadmap Groups'. Therefore, planning adjustments must be made using other available tools within the system.
- Not Supported: Some of the functionalities in roadmaps such as Import or Sync of Roadmap Items, Editing of Roadmap Items, and Managing Picklists are not available in Roadmap Groups.

### Create a Roadmap Group

You can use the Add Row icon or the New Roadmap button to create a new roadmap group. Follow these steps to create a new roadmap group: 1. Log into Clarity and click Roadmaps. 2. Click New Roadmap or click the + (Add Row) icon. 3. Complete the following fields:
- Roadmap Name: Enter the name of the roadmap.
- Genre: Select the Roadmap Group option. By default, the Roadmap radio button is selected.
- Author: This option is not displayed if you are using the New Roadmap button. If you are using the Add Row icon
to create a roadmap group, you can select the relevant author by using the Author field.
- START PERIOD: Defines the roadmap group start period that is based on what fiscal annual periods you have
configured for your default entity. The field shows the next fiscal annual period by default. For example, if the current date is April 15, 2021, the default fiscal period shows 2022, the next annual fiscal period.
- DURATION: Defines the roadmap group duration and shows one year as the default. The duration that you can select depends on the corresponding annual fiscal periods that are set up on the default entity. For example, you

select 2020 as the start period and there are three annual fiscal periods (2020, 2021, and 2022) set up on the default entity. The duration options that appear include 1 Year, 2 Years, and 3 Years.
IMPORTANT The Other option appears if you have more than five annual periods that are defined in the future. Consider a scenario where you select 2020 as the start period and the default entity has annual fiscal periods that are defined through 2028. In such a scenario the Other option appears. When you select this option, the system allows you to enter only a number from 6 through 8. You can change the duration after creating a roadmap by updating the Duration attribute. 4. Click Create. Your new roadmap group appears in the default timeline layout with a unique system-defined ID. If autonumbering is not set up in Classic PPM, enter a unique ID for your roadmap. You can now add roadmaps to your roadmap group in the timeline, board, or grid layout 5. Click Select Roadmaps to start adding roadmaps. The Select From Roadmaps screen is displayed. 6. Click + Add Roadmap to select the required roadmaps to be added from the list displayed. 7. Select required Roadmaps to be added from the list by checking the associated checkboxes. In this screen, you can search for roadmaps using keywords or apply filters to narrow down the results. 8. Click Add to add the selected roadmaps to the group. 9. After verifying the roadmaps, click Close. You can now see the selected roadmap information on the screen.
To delete a roadmap group, from the Roadmaps list page, select the roadmap group and click Delete.

### Copy a Roadmap Group

Create a new roadmap group by copying an existing roadmap group. The details including dependencies, agreements, key milestones, roadmap events, view options of three layouts, and event definitions from the existing roadmap are copied over. You can tailor the details in the new roadmap for specific investments that may be associated with different teams or departments.
Follow these steps:
1. Log into Clarity and click Roadmaps. 2. Select a roadmap group from which you want to create a copy and then click Copy. Alternatively, you can right-click
the roadmap group and select Copy from the menu. The Copy Roadmap dialog appears for you to provide a name. 3. Enter a name and then click Copy. The Copy is in Progress banner is displayed until the copy function is complete
and then you can see the copied roadmap group in the grid. NOTE The copy function is triggered in two ways depending on the number of roadmap group associations. If the roadmap group has fewer associations, the copy function will be instant. However, if the associations are more, the copy is done through the background (bg) services similar to the Sync function.
4. Select the copied roadmap group to open and change the values.
> [!NOTE]
> Some points to remember are:
- You can only copy one roadmap group at a time.
- The copy function copies a roadmap group and all its associations.
- You can perform all functions on a copied roadmap group as on the source roadmap group.
- When a copy is in progress:
- If you refresh the screen or navigate out of the Roadmaps screen and then return, the banner is lost and the copy function fails. However, you can see the copied roadmap in the grid if the copy function is completed during this time.
- You cannot perform another copy function for other roadmap groups.
- When the copy function fails, a notification with a failed message is sent. You can view the message using
the Notification icon.

### Edit Roadmap Group Details

You can add more or delete roadmaps to your roadmap group. You can also edit the existing details. For example, change the author from you to somebody else who can take ownership of it. Follow these steps: 1. On the Roadmaps page, use the column panel to add relevant attributes to the grid. You can add attributes such as
Description, Type, Status, and Starred. 2. Enter the values associated with various attributes to add or edit details associated with the roadmap.
NOTE You can also use the Properties tab within a roadmap group to edit the various roadmap group details.

## Create Portfolio Items in Rally from Roadmap Scenario

Clarity's roadmap capability is a strategic tool designed to enhance project and portfolio management by providing a clear, visual representation of initiatives aligned with organizational goals. Consider a scenario in which you present a digital banking roadmap to your executive team, and they approve six of the eight roadmap items for immediate execution. You can now leverage the Send to Rally capability to create Portfolio Items (initiatives and features) directly in Rally for all the "In Plan" roadmap items. Some key advantages of using this capability are:
- Increased Efficiency: Eliminates manual data entry, saving stakeholders significant time and effort.
- Improved Accuracy: Ensures data consistency between Clarity and Rally, reducing errors and rework for development
teams.
- Enhanced Collaboration: Provides a single source of truth for product roadmaps, improving communication and
alignment between product and development teams.
You can perform the following actions to leverage this capability. 1. If Clarity and Rally are not already integrated, create an integration object. 2. Define an integration mapping between Clarity and Rally to map objects, fields, and lookups. 3. Define an object mapping to map the roadmap items object to initiatives or features in Clarity. 4. Define lookup mappings to map lookups for roadmap items to lookups associated with Rally initiatives and features. 5. Define field mappings to map fields associated with Clarity Roadmap items to fields for Rally initiatives and features. 6. Finalize a roadmap with the stakeholders to ensure relevant roadmap items are marked "In-Plan." 7. Select the relevant integration mapping that should be associated with the roadmap by using the Properties page. 8. Use the Send to Rally option to create a feature or an initiative in Rally.
> [!NOTE]
> Some key points to remember are:
- The Send to Rally option is available for roadmap scenarios and sends the "In-Plan" roadmap items.
- The Send to Rally action is available in the Item Actions menu for the Timeline, Board, and Grid layouts.
- The Send to Rally action is disabled by default and must be enabled by an administrator in the Actions
workspace. You can secure this action and ensure it is available only to relevant stakeholders.
- The Integration Mapping attribute associated with the Roadmaps object is secured. Access the Attributes grid
and assign permissions to relevant stakeholders who can view and update this attribute.
- The Roadmap Items and Roadmap objects now support the Send to Rally action, with several new attributes
added.
- The Import Integration Mappings Job has been enhanced to support the roadmap items object and its
attributes.
- The Synchronize Mapped Information Job has been enhanced to support the roadmap items object and its
attributes.
- The Import Staging Table Job runs automatically after the Synchronize Mapped Information job to populate
the To Clarity and To Rally Staging tables. TIP Watch the following video to learn how to create Portfolio Items in Rally from Roadmap Scenario.

## Introducing Vaia (Beta) - Leveraging AI

Vaia highlights Clarity's first foray into leveraging public AI models to simplify various user tasks. In this release, you can use Vaia to define Generative AI for any Rich Text Field (RTF) attribute based on the fields you configure in this workspace. This capability is available for the following objects and sub-objects:
- Objects: Projects, Ideas, Custom Investment types (CIT), Hierarchy, Objectives, Plan, Roadmaps and Custom Master
Object (CMO)
- Sub-objects: Risk, Issue, Change Request, Status Report, and Task

To learn more about configuring Vaia, see Configuring Vaia (Beta). After you have set up Vaia, you can perform the following actions using AI Actions button:
- Click the 'Generate Content' option in the AI Actions button to generate the text for the field.
- If you have already entered some information, the 'Revise Content' option will be enabled in the AI Actions. Click
'Revise Content' to view the revised content.
- You can use the 'Grade Content' option to grade the content in the field. On clicking the Grade Content, the following
actions occur:
- The AI displays the grading result in a new pop-up window. Review:
- Previously generated grades.
- Each grade includes a date for reference.
- Specific strengths and areas for improvement.
- Examples illustrating content enhancement.
- Regenerate/Refresh the grade as needed.
- Close the grade pop-up window and reopen it anytime by requesting the Vaia to grade.
> [!NOTE]
> Some key points to remember are:
- This feature uses a Generative AI service. The Generative AI service uses emerging technology, may
provide inaccurate generated output, and is not designed for or intended to meet your regulatory, legal, or other obligations. Always review AI-generated content for accuracy and make adjustments as needed.
- This feature is toggled off, and you must create a support ticket to toggle it in your environment. For more information, see the following KB article.
- Users need a Google Cloud Platform/Open AI service account with appropriate permissions to use this functionality.
- If the AI API key is not configured correctly, then the end user will see an error message on the screen.
- If the configuration under "Vaia (Beta)" is disabled, the end user will see the following error message: API 1019: Could not process the request due to internal error.
- The text generated depends on the AI Service Model utilized. It has been observed that AI models can change the text format over time, and the result displayed in Clarity would be impacted. New Benefit and Revenue fields have been added to enhance financial visibility and enable comprehensive top-down financial planning. These new attributes capture both planned and budget variations and include calculated values such as Profit and Net Benefit, providing a holistic view of investment performance within Roadmaps.

## Roadmaps: Using the Timeline Layout

This section contains the following topics:
- Visualize and Model Work Using the Timeline
- Create Roadmap Items With No Start or No Finish Date
- Arrange Items in the Timeline
- Add Dependencies for Roadmap Items
- Configure Roadmap Timeline View Options
- Manage Roadmap Events
- Manage Item Events
- Other Actions Available on the Timeline Layout
- Summarization for Roadmap Timeline by Vaia
- Roadmap Color Legend
- Compare Scenarios in the Timeline
- Create and Manage Business Agreements
- Export the Roadmap Timeline to PDF
- Troubleshooting the PDF Export Capability
- Tweak System Configurations to Enhance Performance

### Visualize and Model Work Using the Timeline

The roadmap timeline layout displays planning items in monthly, quarterly, or annual periods. The column headers for the time periods match the fiscal time period labels that are defined for the default entity in Classic PPM. Only the roadmap items that fall within the roadmap start and finish dates appear on the timeline. The items are further filtered based on your period type view options.
Items on the timeline can be bars, circles, or diamonds. Bars result when you enter both the start date and finish date for an item. Circles result when you enter only the start date for an item. Diamonds result when you enter only the finish date for an item.
The Business Agreements workspace in Clarity enables you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates. You can review existing agreements between investments by selecting the Show Agreements toggle. The dependencies between agreements are indicated by using dotted lines to highlight predecessor and successor relationships. You can filter using Has Agreements or Has Dependencies attribute filters to view respective Roadmap Items on Timeline, Board, and Grid layouts.
For Roadmap Items with linked investments, you can configure visual indicators to represent events such as milestones or other key (linked) investment dates in the form of a diamond, circle, triangle, square, star, flag, or rocket. You can leverage the Events sub-tab on View Options to define the icons associated with relevant events.
Follow these steps:
1. From the roadmaps list, open a roadmap. 2. Click Timeline. 3. Click and drag to draw the item on the timeline to cover the appropriate duration. Or, click on a specific time period to
create a roadmap item in that location. You can add multiple roadmap items within the same row. If you have not yet assigned a picklist value to the roadmap item, it appears in the None swim lane. After you have assigned a picklist value to all the roadmap items, the None swim lane disappears.

4. Complete the fields in the DETAILS panel. If your administrator has created any mandatory attributes, they will also be added to the DETAILS panel.
5. You can click the Configure button if you want to add more fields to the DETAILS panel and populate them. To learn more about the DETAILS panel, see Common Components.
6. Click Done.

### Create Roadmap Items With No Start or No Finish Date

To create a roadmap item with no start date, draw the roadmap item and clear the start date in the START field. The roadmap item appears with a diamond symbol, like a milestone.
To create a roadmap item with no finish date, draw the roadmap item and clear the finish date in the FINISH field. The roadmap item appears with an open circle symbol.
To convert the floating item to an item with firm start and finish dates, select the roadmap item and use the DETAILS panel to add dates. The pointer changes to an arrow to apply dates that align with your drag-and-drop placement. You can edit the exact dates.

### Arrange Items in the Timeline
- Select a roadmap item and drag it anywhere to change the duration or the start or end dates. A roadmap item that you
create on the Board shows up at the bottom of the Timeline and you can drag it anywhere.
- Drag and overlap a roadmap item on to another item to push the target roadmap item down to the next available row. If
you create an empty row, the roadmap items below that row move up to fill in the empty row.
- The labels for the single-date roadmap items (that is, diamonds and circles) display outside the items. Hence,
overlapping of the labels might occur when you drag one item over another to push the target item down. In this case, manually drag the target roadmap item down to a new row.
- Select from available grouping attributes to organize the roadmap items into swim lanes as appropriate for different audiences. You can create roadmap items in the swim lanes and can drag the items between the lanes.
- Save your grouping configurations as part of the roadmap view for easy retrieval. The grouping configurations for a roadmap persist across all your sessions.

### Add Dependencies for Roadmap Items

To define dependencies between roadmap items, add dependency lines between the roadmap items. You can add dependency lines from one roadmap item to another or to multiple roadmap items. For example, you can connect the CRM 2.0 roadmap item in the Grow the Business swim lane to the SaaS Migration roadmap item in the IT Operations swim lane. Follow these steps: 1. From the roadmap timeline, click the roadmap item and select the action menu. 2. Select DEPENDENCIES to start dependency mode. 3. Click the connector icon for the target roadmap items to create dependency lines from the source roadmap item. 4. To delete a dependency line, click the X that appears next to each target roadmap item. 5. To exit the dependency mode, click the X in the blue EDIT DEPENDENCIES bar at the top of the page. Dependency
lines with arrows show the relationships between roadmap items in the timeline.

6. To hide the dependency lines, click View Options and clear the Show Dependencies checkbox.
In the dependency mode, drag-and-drop is disabled for the roadmap items. To edit a roadmap item, click the item to open the DETAILS panel.
> [!TIP]
> If there is a large distance between roadmap items, the dependency lines are truncated in the timeline. In the grid, add the Predecessor and Successors attributes from the Column Panel to view all dependencies for a particular roadmap item. A maximum of 25 predecessors and 25 successor values appear for a roadmap item. Any changes you make to the dependencies in the timeline are reflected in the grid.

### Configure Roadmap Timeline View Options

Configure the timeline layout to view roadmap items that are grouped in swim lanes by attribute. You can view the items by color and can map those colors back to meaningful values. You can also set the zoom level and select financial metrics that appear as badges on your roadmap items. By default, the timeline swimlane and color settings are set to None. Adjust the settings for your audience.
Follow these steps:
1. Open a roadmap and click Timeline. 2. Click View Options. 3. In the TIMELINE sub-tab, configure the following settings:
- SWIMLANES: Select a picklist to group the roadmap items into horizontal swim lanes by the picklist values. For example, group roadmap items into swim lanes that are based on business outcomes for a steering committee. Group the same roadmap items by the team for business development directors. Each audience can see where each roadmap item sits in its planning process. You can select from the list of default global picklists or can create a custom global picklist. You can also create a local picklist applicable only to this roadmap. See Create and Manage Local Picklists. Additionally, swimlanes support Custom Defined and System Restricted dynamic lookups. You can use this type of lookup to fetch data from the database in real-time to populate the drop-down.
NOTE
Some key points you must remember are:
- The swimlane values displayed in the Roadmap Timeline will only be those lookup values that have been associated with individual Roadmap Items using the Grid, Details fly-out, or Import from CSV. For example, a given dynamic lookup may have ten values, but if only five values are associated with Roadmap Items, the available Roadmap Timeline swimlane values will be limited to the five in use.
- Stock, Custom, and Parameterized dynamic lookups can be used for Roadmap Timeline swimlanes.
- Dynamic or Parametrized lookups cannot be used for the Roadmap Timeline `Color By' capability.
- You can select a Swimlane attribute in the View Options (for example, `Goal') and apply a filter on the
same attribute. This displays only the Swimlanes that honor the selected filter values. Note that the filtering functionality supports both static and dynamic lookups. Filtering on Swimlane using Static Lookup or Dynamic Lookup, will display the respective Swimlanes even when the Swimlane is empty.
- SWIMLANE GROUPS: You can use this drop-down to group Swimlanes for better usability and presentation. The values in the Swimlane Groups selector are the same as the Swimlanes selector. You will have the ability to expand and collapse both Swimlanes and Swimlane Groups with the Expand/Collapse preference persisting per user, per Roadmap. You can move a Roadmap Item into a collapsed Swimlane, positioning it at the top of the Swimlane. However, moving a Roadmap Item into a collapsed Swimlane Roadmap Group is not permitted, and an indicator will signal this restriction. If all Swimlanes in a Group are hidden, the Group will be hidden as well. Additionally, when you select aggregatable metrics and group RMI's through Swimlane, the system will show the aggregation of metrics at

both the Swimlane level and the Swimlane Group level, enhancing your ability to organize and view your Roadmap data.
> [!NOTE]
> Some of the key points to remember are:
- It is essential for you to be mindful when selecting attributes for Swimlanes and Swimlane Groups.
Choosing the same attribute for both may result in misleading information being displayed on the Timeline layout, particularly concerning grouping and aggregations.
- When you export to PDF, the Swimlane Groups (along with Swimlanes) will be included, and the respective expand/collapse settings will be honored. This ensures that the visual representation in the PDF will accurately reflect your current view and preferences.
- COLOR BY: Select a picklist to add color to your roadmap items based on the display mapping of the picklist values. For example, select Status to display the roadmap items in different colors that indicate their approval status. All approved items appear in blue. The COLORS legend in the bottom right corner of the page shows the value associated with each color. If you collapse the legend, you can reopen it by clicking LEGEND. By default, roadmap items appear in a blue color when you have not selected a value for SWIMLANES or COLOR BY.
- BADGES: Select up to three financial metrics or single-value lookups to display as badges on the roadmap items to review them in the timeline. The BADGES legend in the bottom right corner shows the metrics in sequential order as you selected them. If you collapse the legend, you can reopen it by clicking LEGEND. The badges appear on each roadmap item in the same order as you select them. You can also edit the values for the selected metrics for each roadmap item in the timeline. Your selected metrics remain the same for you between sessions in an unsaved view. To keep your settings, save your view. NOTE With the Clarity 16.1.3 release, the Metric field in the Timeline View options has been renamed to Badges.
- PERIODS: Select Months, Quarters, or Years. The timeline displays the roadmap items for the number of fiscal periods that are defined for the selected period type. For example, your default entity includes fiscal time periods

for five years (60 months). When you select Months, the timeline displays roadmap items over 60 monthly columns. Zoom out to five years to view all 60 months.
- Start Period: Select the start period for the timeline layout. If you select a Start Period beyond the duration of the timeline, you will be able to see Roadmap items between your Start and End period.
- End Period: Select the end period for the timeline layout. If you select an End Period beyond the duration of the timeline, you will be able to see Roadmap items between your Start and End period.
- Hide empty swimlanes: When this toggle is turned ON, any Swimlanes without items will be hidden from view. This also extends to Swimlane Groups, hiding groups that contain only empty Swimlanes.
- Show Dependencies: Show or hide the dependency lines between roadmap items. This option is automatically selected when you start dependency mode to add dependency lines between roadmap items.
- Show Text Overflow: The Show Text Overflow option allows you to have control over how much roadmap item name is displayed and allows you to better interact with roadmaps. Clearing this option will trim the roadmap item name to within the length of the roadmap item.
- Show Agreements: Show or hide the link (predecessor and successor relationships) between the agreement owners as a dotted line or a visual indicator (an agreement icon) at the bottom of the roadmap item to show dependencies between agreements.
- Snap to Period: Turn on the toggle to snap the Roadmap Item to a period, as most Roadmap planning is done in months or quarters rather than exact dates. You can position roadmap items on the same line in the same swim lane You can drag the roadmap item and have both the start and end dates snap to the closest period start and end. 4. Click EVENTS. The list of roadmap events and roadmap item events that are configured appears. a. Roadmap Events Roadmap events represent dates such as Today, Roadmap Start, Roadmap Finish, or any configured dates in the form a diamond, circle, triangle, square, star, flag, or rocket. By default, Today, Roadmap Start, and Roadmap Finish are pre-defined. You can leverage Manage Roadmap Events to optionally define new or edit existing roadmap visual indicators for Events and also associate the icons with relevant roadmap events. For more information, see Manage Roadmap Events. In the EVENTS sub-tab, configure the following settings for Roadmap events:
- Show Roadmap Events Turning on the Show Roadmap Events toggle allows you see the visual indicators (symbols) and its dedicated swim lane on the timeline based on the selected roadmap events.
- Show Labels Turning on the Show Labels toggle allows you to see the Event names (labels) along with associated images and lines in the Timeline layout. NOTE Overlapping of Roadmap names may happen if the Roadmap Events are occurring closely. You may need to select or de-select the Roadmap Events and set the Periods to handle the overlap.
b. Item Events Item events represent linked investment dates such as investment start or finish dates, Milestone Tasks or custom date attributes. By default, Key Milestones is already pre-defined. Key Milestones are the tasks that are flagged for key Task and Milestone in a project. You can leverage Manage Event Items of Events sub-tab to define item events and also associate the icons with relevant item events. For more information, see Manage Item Events. In the EVENTS sub-tab, configure the following settings for Item events:
- Key Milestones Selecting the Key Milestones option allows you see the visual indicators (symbols) plotted along the bars of any roadmap item events or dates that are used to measure the progress of a project.
> [!IMPORTANT]
> Some key points you need to remember are:
- If an event falls outside the Roadmap Item start or finish date, the Event will be positioned at either the start or finish on the Roadmap Item
- whichever is closest to the Event date.
- After using `Import from PPM', Events defined with a custom date attribute must be synced before they are visible and positioned on a Roadmap Item.
- When Roadmap Items are moved (shifted left or right), Event positioning (for example: their corresponding dates) will move relative to the Roadmap Item move.
- If a Roadmap Item has ( 2) Events that fall on the same date, only the Event that was created last will be displayed on the Roadmap Item.
- You can view the Roadmap Item Event information in Legend by selecting Roadmap Item Event and then selecting Legend. You can export the Roadmap Item Event details in Legend to PDF by opening the Legend and then selecting using the Export to PDF menu option.
5. Click X Close. NOTE Clarity clips the metric values for the number and money attributes to match the roadmap duration. If the roadmap includes items that fall either partially or completely outside the Start Period and End Period, their metric values are clipped to match the Start Period and End Period.

### Manage Roadmap Events

Manage Roadmap Events allows you to create and manage roadmap events. You can configure to change the visual indicators (symbols) and line color of events that are plotted on the timeline layout.
Follow these steps: 1. Open a roadmap and click Timeline. 2. Click View Options. 3. Click EVENTS.

4. Click Manage Roadmap Events. The Roadmap Events window appears that allows you to create new roadmap event or edit an existing event.
5. To edit an existing event, change the date, image, and line values by moving the choices up or down in respective lists against the required event name. To rename an existing event, click the required event name text box and edit the value.
NOTE
- You cannot rename or delete the default roadmap event names. However, you can change the date, image, and line values.
- To delete an existing event, hover on the required event and click X that appears far right of the respective row.
6. Click New Event to add more roadmap events. A new row appears for you to enter the required values.
7. Enter an event name and then select date, image, and line values from respective lists. 8. When done, click X Close.

### Manage Item Events

Manage Item Events allows you to change the images (symbols) for key milestones that are plotted on the bars of any roadmap items with linked investments. You can also add new item events, that is, you can select a particular date attribute on the investment and indicate the dates on the bars.
Follow these steps:
1. Open a roadmap and click Timeline. 2. Click View Options. 3. Click EVENTS. 4. Click Manage Item Events.
The Item Events window appears that allows you to Create Item Event or change an image (symbol) against a date attribute. 5. Select a date attribute that you want to edit. 6. Edit the image by moving the choices up or down in the list. 7. Click New Event to add more date attributes. A drop-down list appears for you to select a particular date attribute on the investment. 8. Select a date attribute from the list and then select an image that you want to indicate on the bars. For example, if you have a project field Launch Date that you want to indicate on all the bars linked to projects with a rocket icon. You create a new event by selecting the field from the project and the image that you want to use. 9. When done, click X Close.

### Other Actions Available on the Timeline Layout

Some of the other actions you can perform by using the Timeline layout are:
- View more information about an investment by using the DETAILS panel You can right-click on a selected Roadmap Item and select OPEN DETAILS from the menu or use the Details panel to view more information about each Roadmap Item. The panel is available as a two-column layout, and you can resize it to take up 75% of the screen. The Details layout allows you to include two fields per row. To learn more about using the DETAILS panel in the grid, see Common Components.
- Show or hide swimlanes on the Timeline You have the flexibility to show or hide swimlanes if there are no roadmap items associated with a swimlane. Click the Swimlanes picker and then select swimlanes to show or hide and save the configuration to a view. The capability allows you to display only the relevant swimlanes.

NOTE
Some key points you must remember are:
- Roadmap Item source or target dependency lines will be hidden if the swimlane it resides in is hidden.
- All swimlanes hidden results in a blank roadmap.
- Analyze investments by using the Filter and Search options You can use the Search and the Filter options to identify various roadmap items based on your requirements. To learn more about using the Filter and Search options, see Common Components.
- Personalize the grid and save your view Clarity allows you to save and modify multiple views that help you achieve your business goals. Some of the key actions you can perform are:
- Save an existing configuration in the grid
- Update existing views, by using the Quick Save functionality
- Access views saved by other users
- Mark relevant views as favorites so that you can access them easily
- Select default views

### Summarization for Roadmap Timeline by Vaia

Use the Summarize AI button to generate summaries for the Roadmap Timeline layout. This enhancement brings convenience and insight through easy-to-access summaries, streamlining information access.
Prerequisite:
Enable Roadmap object instance in Vaia to generate summaries in Roadmap. To learn more, see Enable Roadmap Object Instance.
Follow these steps:
1. Log into Clarity and click Roadmaps. 2. Open a Roadmap item, Timeline. 3. Save the view in Timeline to generate summary for saved view. (This step is optional to generate summary for
unsaved view.) 4. Click the Summarize button.
The Summary page opens. The Summary page includes a "Refresh Summary" button and a "Last Updated" timestamp along with: a. Overview b. Key Investments c. Dependencies d. Approaching Deadlines e. Problems to Note f. Actions Required
> [!NOTE]
> Re-opening the Summarize screen will regenerate the summary to capture any recent changes.

### Roadmap Color Legend

The color legend appears when you select a value in the COLOR BY field in the timeline layout options panel.
- To collapse the legend, click X Collapse.
- To expand it again, click LEGEND.

### Compare Scenarios in the Timeline

Compare two roadmap scenarios in the timeline so you can evaluate your different what-if scenarios and can decide the best course of action for a given roadmap. Roadmap scenario comparisons let you analyze the same roadmap items within two different scenarios. Follow these steps: To compare scenarios, verify that at least one more scenario exists besides the default scenario. 1. Open a roadmap in the timeline layout. 2. In the Scenario drop-down list, select your first scenario. Let's call this your Compare From scenario. 3. Click Compare Scenarios to start comparison mode. 4. From the COMPARE TO menu, select the second (compare to) scenario. 5. Use the following guidelines to compare the roadmap items in the two scenarios:
a. A delta icon is displayed if there are differences between selected Roadmap Items. b. Scenario differences are displayed on the Compare tab of the DETAILS panel. c. If a roadmap item does not exist in either the "Compare From" or "Compare To" scenario, the Details flyout
Compare tab will display "Not in "Scenario Name". d. The following items are validated for scenario differences:
- Roadmap Item (Name)
- Roadmap Item Start and Finish date
- Swimlane
- Color
- Metric 1, Metric 2, and Metric 3


Create Agreements


The Business Agreements capability in Clarity enables you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates. You can create business agreements from the following investment areas:
- Agreements module within the investment
- The Details panel of the investment in the relevant investment workspace
- The Details panel of the investment in the Hierarchies workspace (Grid and Timeline layout)
- The Details panel of the investment in the Roadmaps workspace
Administrators can determine how users can create Business Agreements by editing the associate investment blueprint. Consider a scenario where the administrator wants to enable users to create business agreements for projects. They can edit the Project template, select the Agreements module, and select from the following options:
- Enable Quick Create: This option allows users to create an agreement by clicking the plus (+) icon within the Agreements module.
- Enable Create Dialog: Allows users to use the Create from Template option to create business agreements from the agreements module.
- Show in Details flyout: Allows users to create an agreement from the Details module in the Projects workspace since you are editing the Project blueprint. This capability is available for the Grid and

When you create a business agreement from an investment, the successor is automatically set to that investment. The agreement is also available in the Agreements workspace, where stakeholders can review all the agreements relevant to them based on their access rights. You can also view these business agreements in roadmaps and hierarchies when you import the relevant investment.
Follow these steps:
1. Navigate to the relevant workspace and click the associated investment. 2. Click Details and select the Agreements module. 3. Click the Add Row icon to create a new agreement. 4. Type the name and press Enter to create the agreement. 5. After creating the agreement, populate the predecessor, successor, commitment, and deadline fields to ensure the
agreement includes relevant information.

### Export the Roadmap Timeline to PDF

You can export the Roadmap timeline view to a PDF file so that you can include Timeline visuals in presentations or other documents for stakeholder communication. The Export capability is available in the Item Actions menu. The exported PDF includes the dependencies and events defined in the roadmap. The exported file name follows the pattern "<roadmap name>_<saved view name>."
Follow these steps:
1. Open a roadmap in the timeline layout. 2. Click Item Actions and select Export to PDF. 3. Select the size of the PDF output. Following are the available options.
- Fit to Content (default)
- Letter
- Legal
- Tabloid
- A4
- HD Display (1920 pixels)
- Laptop (1440 pixels)
- Tablet (1024 pixels) 4. Select the orientation of the PDF output.
- Landscape (default)
- Portrait 5. Save the PDF file on your local system or open it by using the relevant readers/browsers.
> [!IMPORTANT]
> Some key points you need to remember are:
- The exported PDF file will have default minimum dimensions of 1366 X 768 pixels (Width X Height).
- When the exported PDF dimensions are less than the default dimensions, the PDF generated will use the default dimensions of 1366 X 768 pixels.
- When the exported PDF dimensions are greater than the default dimensions, the PDF generated will use the dimensions of the generated file.
- If a Roadmap Timeline exceeds the PDF limitation, you will not experience any issues when viewing the Timeline within a supported browser.
- Clarity's existing job (Purge CSV Downloads), originally created to clean up CSV export files, has been updated to additionally clean up PDF export files. The Purge CSV Downloads job is not available to the enduser from the (Classic PPM) and runs every day at 12:30 midnight and cleans up files older than 7 days.

### Troubleshooting the PDF Export Capability

The following table describes the various error messages you may encounter while using the PDF generation capability.

Error Code

Error Message

EXP-01000

Error generating PDF export

Cu

EXP-01001

Invalid export file name

Cu

EXP-01002

Missing value for {0} parameter

The

EXP-01003

Export is not supported for the {0} workspace

Wit

EXP-01004

Export is not supported for the option {0}

The

EXP-01005

Required libraries are missing. Please contact your system administrator.

Cu

loc

mis

EXP-01006

Required binaries are missing. Please contact your system administrator

Cu

are

> [!NOTE]
> - If you refresh your browser while the export is in progress, the export operation is aborted and no information is logged in the app-ca.log file.
- When you change a view/scenario while the export is in progress, the exported file name contains the view name that you were on before clicking the export button. However, the content is related to the view/scenario you have switched to after hitting the export button.
- If a user with Roadmap view rights, clicks Export and switches to the grid layout, the spinner does not appear on the user interface indicating that the export is in progress.
- You can add Debug logs to the log configuration screen (/niku/nu#action:security.loggerConfig) with debug in the priority column, and the following as part of the category's column:
- com.ca.ppm.export
- com.ca.ppm.export

You can tweak the following system configuration options to enhance the performance of the PDF generation capability.

### Tweak System Configurations to Enhance Performance

You can tweak the following system configuration options to enhance the performance of the PDF generation capability.
PLAYWRIGHT_POOL_MAX_TOTAL_OPT - default value: 2
By increasing this value, PDF export concurrency could be increased. It is recommended this value should be half of the number of cores allocated to the system. It is possible to degrade overall Clarity system performance if this value is increased.
PLAYWRIGHT_POOL_MAX_IDLE_OPT - default value: 1
By increasing this value, users may experience a slightly faster PDF export experience. The value should be less than PLAYWRIGHT_POOL_MAX_TOTAL_OPT and greater than PLAYWRIGHT_POOL_MIN_IDLE_OPT. It is possible to degrade overall Clarity system performance if this value is increased.
PLAYWRIGHT_POOL_MIN_IDLE_OPT - default value: 1


By increasing this value, users may experience a slightly faster PDF export experience. The value should be less than PLAYWRIGHT_POOL_MIN_IDLE_OPT. It is possible to degrade overall Clarity system performance if this value is increased.
PLAYWRIGHT_NAVIG_TIMEOUT_OPT
The default value is 100,000 (milliseconds). The value should not be greater than the Gateway timeout. By increasing this value, users can update timeout to the required value as per the need of the environment. This value should be less than the timeout configured with a web server or gateway timeout and should be in the range from 100,000 (milliseconds) to 900,000 (milliseconds).
PW_WAIT_SELECTOR_TIMEOUT
Follow these steps: 1. To set a new value, you can follow either the DB or the admin command approach.
- DB query to set the new value:
update cmn_option_values set value = 900000 where option_id = (select id from cmn_options co where option_code = 'PW_WAIT_SELECTOR_TIMEOUT')
- OR, from console on the app server system as below:
admin system-options -add PW_WAIT_SELECTOR_TIMEOUT 1 -force
2. After setting the new value, enter the following URL in the web browser to flush the cache.
<app-url>/niku/nu#action:security.cache
3. Click Flush all.

## Roadmaps: Using the Board Layout

This section contains the following topics:
- Managing Records By Using the Board Layout
- Setup View Options for the Board Layout
- Create and Manage Business Agreements

### Managing Records By Using the Board Layout

You can use the Board layout to view items as cards. You can arrange these cards with drag-and-drop precision on a board layout with columnar swim lanes. Some key features associated with cards are:
- The board layout does not provide the option to create new cards.
- Cards can now display two title fields per card and display the width of the card. If you configure the investment name,
it will hyperlink to the relevant investment.
- You can configure a maximum number of six fields across two columns per card.
- You can configure a maximum of six metrics per card, which are configured up to three columns across. Metrics are
displayed in an abbreviated format.
- Cards appear in your choice of colors based on the value you select in the Color field in View Options. Your color
selections are saved with the view.
- Card titles default to the Name field. If you configure a default value for the Name field in Studio, Clarity uses that value
when creating cards. Without a default value, new cards show New Item as their default name.
- You can double-click a card to edit its name. You are not limited to using the default name. You can interact with records on the board to perform the following actions:
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to identify records that match your selection criterion quickly. You can use the advanced filtering capability
to define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using a series of configurable visual widgets.
- Save and modify multiple views that help you achieve your business goals.
NOTE To learn more about the board layout and associated capabilities, see:
- Clarity Boards
- Widgets
- Details Panel
- Saved Views
- Filters

### Setup View Options for the Board Layout

The View Options capability allows you to customize the Board layout.
Follow these steps: 1. Navigate to the relevant page in Clarity. 2. Click the Board layout. 3. Click View Options. 4. Use Periods (Periods, Start Period, End Period, Totals) to specify cards displayed on the board and metrics
calculations. 5. Define if you want to see Sum of Periods or Grand Totals in the Totals column.
- Sum of Period displays the Total (e.g., Actual Cost) for the number of periods in the layout
- Example
- If an Investment has a duration of 12 months; the page is configured to display 6 months. If Sum of Periods is selected then the Totals column will sum up the (e.g., Actual Cost) 6 months displayed in the layout.
- Grand Total displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout
- Example
- If an Investment has a duration of 12 months; the layout is configured to display 6 months. If Grand Totals is selected then the Totals column will sum up the (e.g., Actual Cost) for the 12 months of the investment
6. Use Columns to specify attributes whose values will display as columns horizontally. 7. Use Swimlanes to specify attributes whose values will display as swimlanes that collapse vertically. 8. Use Sort to select an attribute to sort the cards within a column only. 9. Use Color to select a lookup attribute. If display mapping colors are configured for the attribute, it will display the color
as a vertical bar on the left side of the card. 10. Use Show Labels to show or hide labels. 11. Use Configure Card to configure various options that will be displayed on the card. 12. To configure your own display attributes, choices, and the color of each value, click Manage Picklists, New Picklist.
a. Enter a name for your picklist in Picklist Name. Each picklist you define can be applied to the current project only. b. To add value to your picklist, click Add Choice. Edit the name and color for each choice. c. Click Done.


Create Agreements


The Business Agreements capability in Clarity enables you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates. You can create business agreements from the following investment areas:
- Agreements module within the investment
- The Details panel of the investment in the relevant investment workspace
- The Details panel of the investment in the Hierarchies workspace (Grid and Timeline layout)
- The Details panel of the investment in the Roadmaps workspace
Administrators can determine how users can create Business Agreements by editing the associate investment blueprint. Consider a scenario where the administrator wants to enable users to create business agreements for projects. They can edit the Project template, select the Agreements module, and select from the following options:
- Enable Quick Create: This option allows users to create an agreement by clicking the plus (+) icon within the Agreements module.
- Enable Create Dialog: Allows users to use the Create from Template option to create business agreements from the agreements module.
- Show in Details flyout: Allows users to create an agreement from the Details module in the Projects workspace since you are editing the Project blueprint. This capability is available for the Grid and

When you create a business agreement from an investment, the successor is automatically set to that investment. The agreement is also available in the Agreements workspace, where stakeholders can review all the agreements relevant to them based on their access rights. You can also view these business agreements in roadmaps and hierarchies when you import the relevant investment. Follow these steps: 1. Navigate to the relevant workspace and click the associated investment. 2. Click Details and select the Agreements module. 3. Click the Add Row icon to create a new agreement. 4. Type the name and press Enter to create the agreement. 5. After creating the agreement, populate the predecessor, successor, commitment, and deadline fields to ensure the
agreement includes relevant information.

## Roadmaps: Using the Grid Layout

Like a spreadsheet, the grid layout provides a detailed view of roadmap items in columns and rows. All the attributes of the roadmap items appear as column headings or fields with values. This section contains the following topics:
- Plan Roadmap Items In a Grid
- Managing Records By Using the Grid Layout
- Set View Options for the Grid Layout
- Drag and Drop Ordering
- Create and Manage Business Agreements
- Display Time-Phased Data by Fiscal Periods

### Plan Roadmap Items In a Grid

You can configure the columns that you want to display on the grid using the Column Panel. The Column Panel lists all standard and custom attributes that are API enabled for the Roadmap Item object in Classic PPM. Follow these steps: 1. From the roadmaps list, click a roadmap. 2. Click Grid. 3. To view a list of columns, click Column Panel. 4. Select the columns that you want to display on the grid. You might have to scroll right to view all the items you select. 5. To close the Column panel, click X Close. 6. To add a new roadmap item at the top of the grid, click New Row. The new row is populated with any default values
predefined for the Roadmap Item object attributes in Classic PPM. 7. To delete roadmap items, select them and use the Delete option.

### Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Edit Data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the + or - option to shift the values in the date field.
- Use the Drag Functionality to populate data.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Use the Bulk Delete capability in the Common Grid to delete multiple records.
- Export the common grid data to a CSV file. The Classic PPM user interface supports the export of up to 25000 rows to
CSV file. In this release Clarity supports the export of up to 250,000 rows to CSV files.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using a series of configurable visual widgets.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.
NOTE To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Widgets
- Details Panel
- Saved Views
- Filters

### Set View Options for the Grid Layout

You can use View Options to configure the layout of the Roadmap items grid. Follow these steps:
1. Open a roadmap and click the Grid layout. 2. Click View Options. 3. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and
Number Decimal Display options. 4. You can set targets either as goals or constraints on the calculated-number attributes or money attributes of the
Roadmap Item object. Select Show Targets if you want to show Targets on the grid layout. 5. In the Targets drop-down list, select the relevant attributes that will be displayed as targets on the grid layout. 6. Set the PER-PERIOD METRICS field to display a time-scaled series of time-sliced data for various attributes. 7. In the PERIODS field, select a unit of time (weeks, months, quarters, years). 8. Start Period: Select the start period for the roadmap items that are displayed in the grid layout. If you select a Start
Period beyond the duration of the roadmap, you will be able to see Roadmap items between your Start and End period.


9. End Period: Select the end period for the roadmap items that are displayed in the grid layout. If you select an End Period beyond the duration of the roadmap, you will be able to see Roadmap items between your Start and End period.
10. Define if you want to see Sum of Periods or Grand Totals in the Totals column. If you select Grand Totals, Clarity will continue to display the Totals for the entire duration of your investment even when you cycle through various periods by using the per-period metrics widget.
11. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu.
The following table shows the different types of aggregation supported for various types of attributes:

Number, Money, Calculated, Integer

Percent

Date

Boolean

TS

Sum


Average


Count


Min/Max


None


12. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

13. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

14. To configure your own display attributes, choices, and the color of each value, click Manage Picklists, New Picklist.

a. Enter a name for your picklist in Picklist Name. Each picklist you define can be applied to the current project only.

b. To add value to your picklist, click Add Choice. Edit the name and color for each choice.

c. Click Done.

15. Click X Close to close the View Options panel. The grid applies your settings and shows per-period metrics that are spread across the time periods.

16. You will also see a scrolling per-period metrics widget on the grid layout. You can click front and back arrows on the widget to quickly cycle through the data for various periods. Your Start Period and End Period settings will update the widget and as you cycle through periods in your widget, the Start Period and End Period will also be updated.

NOTE Clarity clips the metric values for the number and money attributes to match the roadmap duration. If the roadmap includes items that fall either partially or completely outside the Start Period and End Period, their metric values are clipped to match the Start Period and End Period.

### Drag and Drop Ordering

From the Clarity release 16.1.0, to provide greater flexibility in ranking items or manually sorting them for better data management, a virtual attribute Order has been introduced on Roadmap Item that can be configured through Columns in the Roadmap item Grid. Order would reflect the ordering (ranking) of the Roadmap Items in the Roadmap Grid based on the Roadmap Item name in ascending order. Follow these steps: 1. From the roadmaps list, click a roadmap. 2. Click Grid. 3. To view a list of columns, click Column Panel. 4. Select the Order column that you want to display on the grid. The Order column reflects the ordering of Roadmap
Item names in ascending order. You can sort on the Order column. 5. To close the Column panel, click X Close. 6. To recalculate the Order values based on the currently selected grid view, click on the Order column menu and select
Recalculate order from Sort. This option will trigger the Recalculate Order from Sort job, which calculates the new value of the Order attribute based on the current sort and applies it to all records. When you access the grid layout, where the Recalculate Order from Sort job is currently calculating the new order, you will see a warning message asking you not to update the sort order.
> [!NOTE]
> Some of the key points to remember are:
- You can create Roadmap Items with `Order' on ascending or descending sort and the newly created
Roadmap Item would reflect the new order based on sorting. The following conditions are honored if you create a Roadmap Item at the top by clicking the plus icon.
- If you are using ascending, then the Order assigned will be one.
- If you are using descending, then the Order assigned will be the last order number.
- Drag and Drop is enabled on Roadmap Item Grid.
- Order must be the first sort for Drag and Drop to be enabled.
- Users with Roadmap Edit rights can see the Drag and Drop icon on mouse hover and perform manual Drag
and Drop. Without Roadmap Edit rights, you will not see the Drag and Drop icon on mouse hover.
- You will see an information message if Order is not the first sort when you try to Drag and Drop a row.
- You can Drag and Drop a row when Roadmap Item Grid has Order as the first sort.
For example: `Credit Score Highlighting' that has `Order' as 10 is Dragged and Dropped as the third row. This would change the `Order' of `Credit Score Highlighting' to `3' and also change the `Order' of the below rows accordingly.
- You cannot Drag and Drop an RMI from one page to Other.
- In Filtered mode, you will be able to Drag and Drop.
- In the Grid layout, the Order values in the Group By mode are hidden.
- The Order attribute is hidden in the Details flyout of Timeline and Grid layouts.
- In the Timeline layout, you can set Order as a metric. However, the Order is not available to be aggregated in Swimlane.
- You cannot filter using the Order attribute.
- You cannot use aggregation on the Order attribute.
- You can rename the Order attribute.
- If you insert a record in between, then based on the position and the Sort Order type (ascending or descending), the new record will get the order accordingly.
- You can update the `Order' on demand based on the sort order of the current view.
- Recalculate Order from Sort will only update the order when the sort is not on Order. It will be disabled if the sort is on Order.


Create Agreements


The Business Agreements capability in Clarity enables you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates. You can create business agreements from the following investment areas:
- Agreements module within the investment
- The Details panel of the investment in the relevant investment workspace
- The Details panel of the investment in the Hierarchies workspace (Grid and Timeline layout)
- The Details panel of the investment in the Roadmaps workspace Administrators can determine how users can create Business Agreements by editing the associate investment blueprint. Consider a scenario where the administrator wants to enable users to create business agreements for projects. They can edit the Project template, select the Agreements module, and select from the following options:
- Enable Quick Create: This option allows users to create an agreement by clicking the plus (+) icon within the Agreements module.
- Enable Create Dialog: Allows users to use the Create from Template option to create business agreements from the agreements module.
- Show in Details flyout: Allows users to create an agreement from the Details module in the Projects workspace since you are editing the Project blueprint. This capability is available for the Grid and
When you create a business agreement from an investment, the successor is automatically set to that investment. The agreement is also available in the Agreements workspace, where stakeholders can review all the agreements relevant to them based on their access rights. You can also view these business agreements in roadmaps and hierarchies when you import the relevant investment.
Follow these steps:
1. Navigate to the relevant workspace and click the associated investment. 2. Click Details and select the Agreements module. 3. Click the Add Row icon to create a new agreement. 4. Type the name and press Enter to create the agreement. 5. After creating the agreement, populate the predecessor, successor, commitment, and deadline fields to ensure the
agreement includes relevant information.

### Display Time-Phased Data by Fiscal Periods

To manage the financials for your roadmap items, select and display per-period time-scaled-value (TSV) metrics in the grid. You can also display one or more Totals attributes in the grid.
Follow these steps:
The following procedure describes how to display per-period TSV metrics and Totals attributes in the grid.
1. From the roadmap grid, click View Options. 2. Click the PER-PERIOD METRICS field and select the attributes to display their data as time-scaled values. The grid
displays the metric data for the maximum number of defined fiscal periods. 3. Click the PERIODS field and select the time period by which you want to view the per-period metrics. For example, if
you select Benefit as a per-period metric and Monthly for periods, then you can view monthly benefit amounts for all your roadmap items for the roadmap duration. 4. To close the Setting panel, click X Close. 5. In Column Panel, expand the Totals attribute to view the group of attributes for which you can display total amounts in the grid. Select the attributes for which you want to display totals.
> [!TIP]
> - You can configure one set of Totals attributes and a different set of per-period metrics in the grid.
- To not display the total amount for an attribute in the grid, clear the checkbox for that attribute in the Totals
group in Column Panel.
- Save the grid column positions for the TSV metrics, non-TSV attributes, and Totals attributes to a view for
later retrieval.
When you are updating totals, some key points to remember are:
- If there is no finish date and only start date is available
- If that start date is within the periods being shown at the moment, the total would be updated to just that day.
- if that start date is outside the periods being shown at the moment, the total would be spread across periods currently being looked at.
- If there is no start date and only end date is available
- If that finish date is within the periods being shown at the moment, the total would be updated to just that day
- If that finish date is outside the periods being shown at the moment the total would be spread across periods
currently being looked at
- If there are no start and finish dates
- When there is no start and finish dates, Clarity would consider roadmap start and roadmap finish as the start and finish date of the roadmap item
- If both start and finish dates are defined
- If there is an overlap of roadmap item dates with the periods currently being looked at, the total spread across the overlap
- If there is no overlap of the roadmap item dates with the periods currently being looked at, the total would be spread across periods currently being looked at
NOTE
When you update the metrics in the Timeline, Board, or Grid layouts the same rules apply.

### Spreading of TSV Metric Values Using Calendar Days or Work Days

The spreading of the total value for the following TSV metrics is based on the number of calendar days in the month, quarter, or year. For example, in Q1 there are fewer days because February has only 28 days. Hence, the value is smaller in Q1 than in Q2.
- Capital Cost
- Operating Cost
- Actual Capital Cost
- Actual Operating Cost
- Benefit
The spreading of the total value for the following TSV metrics is based on workdays. Depending on the number of hours a specific workday constitutes, a metric might display a higher or lower amount per period.
- Actuals
- Capacity
You cannot edit the TSV metrics with either a "Remaining" or a "Total" prefix as they are calculated values.

## Conversations

You can start a conversation or post your comments in a reply message with optional attachments and links. Conversations are a collection of replies to an original theme or question. Conversations provide a collaborative forum for all team members to discuss, document, and solve roadmap-specific issues.
- Pre-requisites for Using the Conversations Module
- Conversations About Roadmaps
- Mention a User Using the @Sign
- Conversations and Replies
- Attach Files in Conversations
- Conversation Notifications
- Access Rights for Conversation-specific Actions In Notifications
Pre-requisites for Using the Conversations Module
Your administrator needs to perform the following actions to work with Conversations:
1. Ensure you have view access to the Roadmap.

2. Associate the roadmap with a blueprint that includes the Conversations module NOTE Turn on the Show in Details Flyout option under the Conversations module in Blueprint to view the conversations module in the Details panel.
Conversations About Roadmaps Stay in touch with your team, ask questions, and resolve issues using conversations.
NOTE Users need to have the Roadmap - Navigate access rights to view the specific roadmap page in Clarity. Follow these steps: 1. Open a Roadmap. 2. Click the Conversations tab. 3. Enter your message in the Start a conversation box and click Post or press the Enter key. Other users can enter their messages in the Reply box.
Mention a User Using the @Sign In conversations, use the @ sign to mention other users. Mentioning someone by name sends a new notification to alert them to reply. For example, Derrick and Barb do not mention each other when collaborating to solve staffing issues. They are already communicating in the conversation. However, mention someone in a new conversation or reply to notify them that you would like them to respond.
Tips for Using the @Sign
- You do not have to remember the complete name of the person that you want to mention. After the @ sign, enter the
letters of the first or last name. Suggested team members appear. IMPORTANT You must have the Resource - View - All access right to get the list of Clarity users.
- All active and locked team members can be mentioned. Inactive team members do not appear and cannot be mentioned.
- In conversations, up to eleven (11) suggested names appear.
- We recommend you mention no more than 20 users in a single conversation.
Conversations and Replies All conversations display the following behavior:
- The most recent conversation appears first; the most recent reply in a conversation appears last.
- Click Refresh Conversations to see the two most recent replies in a conversation. If a conversation has more than
two replies, click SHOW ALL to expand and view the list of remaining replies. Click SHOW LESS to view the two most recent replies.
- Only the user who posted a conversation can edit or delete it.

NOTE When you delete a conversation, the application also deletes all replies. You cannot recover a deleted conversation.
- A conversation supports up to 200 replies.
- You can enter a maximum of 1300 characters in a post or reply. Spaces, special characters, line breaks, and @mention strings count toward the 1300-character limit.
- To add a new line in a comment, press Shift + Enter.
- HTML content is not supported in conversations; however, you can add links to other content. You can copy and paste links or can enter them directly. After you click the Post button, the URL appears as a hyperlink. Users can click a link to view the content in a new browser tab. Conversations support the following URL formats:
www http:// https:// ftp:// sftp://
TIP Do not enter values inside angle brackets in data fields in Classic PPM or Clarity. For example, avoid typing <abc> or <value1> using angle brackets for placeholder text. The coupled angle brackets are not a supported special character combination and can produce unexpected results.
Attach Files in Conversations You can upload and edit up to five attachments to each comment in a conversation. Follow these steps: 1. Open a conversation. A Reply... prompt appears for the next comment. 2. In the new reply, click Attach. To add attachments to a previous comment, click the Options menu and select Edit
and then click Attach. 3. Select the file you want to attach. Press and hold down the Ctrl key to select up to five files. Click Open. Thumbnails
of the attached files appear below the comment. 4. Add or edit your reply text. You cannot attach a file without entering an associated comment. 5. Click Post or press the Enter key. The file attachments are uploaded. 6. (Optional) To delete an attachment, click the  Options menu and select Edit. Click X Delete.
- When you delete a reply, the application also deletes any attachments.
- When you delete a roadmap, the application also deletes any associated conversations. Even attachments are also
deleted. TIP File attachments follow the same restrictions as project documents. As an administrator, you determine project document settings. For example, the maximum size of an attachment is 20 MB. To limit acceptable file types, you can also set the Authorized File Extensions field. See Configure General System Settings.

Conversation Notifications
Notifications alert you about conversation activity when a user mentions you or your team.
- To view your notifications, click the notifications bell icon at the top of all pages in Clarity.
- The number of new notifications appears on the notifications bell. The number disappears when you click the bell.
- The notifications panel displays the avatar of the sender and the first line of their message.
- Scroll up or down to view all notifications on the panel.
- To open a notification, click one in the list. Supporting details about the context of the conversation appear. You can
reply, edit, or delete the message. You can also navigate to the specific page from the notification message window. Click Go to Roadmap.
- If a user is mentioned more than once in a single message, they are notified only once.
- To delete a specific notification, hover over the notification and click Delete. To delete all notifications, click CLEAR ALL.The notifications are deleted for the specific user.
- If a conversation is deleted, the notification is also deleted.
> [!TIP]
> - You can personalize the way that you receive notifications. By default, the application sends you conversation notifications by e-mail, SMS text message, and on-screen. See Set Up Notifications in Personalize Clarity: Change Password, Account Settings, Notifications, Export to Excel.
- As an administrator, you can modify the two notification templates for conversations. These templates define how notifications appear in the application:
- Conversation - Mentioned in a conversation
- Conversation - Mentioned in reply to a conversation See Configure Notifications and Notification Templates.
Access Rights for Conversation-specific Actions In Notifications

Sl.No. 01. 02. 03. 04.

To view the message To reply to the message To attach the files To go to the specific Roadmap

Actions

Need Access Righ # # # #

## Audit Module for Roadmaps

Auditing in Broadcom Clarity is a critical capability designed to enhance transparency, accountability, and control over changes made to key business objects, including the Roadmaps workspace. Some key benefits of leveraging auditing in the Roadmaps workspace are:
- Strategic Importance of Roadmaps: Roadmaps in Clarity are used for top-down planning and strategic alignment, representing high-level business goals, timelines, and major initiatives. Changes to a roadmap can significantly impact organizational direction, resource allocation, and stakeholder expectations.
- Traceability and Accountability: Auditing provides a detailed, time-stamped record of all changes made to roadmaps, including what was changed, when, and by whom. This is particularly important in regulated industries or for organizations following strict change management protocols.
- Risk Mitigation: Auditing helps organizations quickly identify unauthorized or erroneous changes, reducing the risk of misalignment or strategic drift. If a roadmap is altered in a way that could jeopardize project delivery or business outcomes, the audit log provides the necessary information to investigate and remediate the issue.


The Audit module grid column names used in Clarity are different from those in Classic PPM. You can filter for all APIenabled Objects, but are limited to those that are audit-enabled through Classic PPM. The Clarity and Classic audit grid column names are given below.
NOTE You can only view audit-related information for attributes associated with the Roadmaps object.

Clarity Audit Name
Name Object ID Record Parent Changed Date Attribute Attribute ID Changed By Operation Old Value New Value Record ID, Parent ID, Grandparent, and Grandparent ID
This section contains the following topics:
- Verify Prerequisites
- Setup View Options
- View Audit Details

Object Name Object * Name Parent Name Date Attribute Attribute Code Changed By Operation Old Value New Value Not visible in Classic

Classic Audit Name

Verify Prerequisites
Before you begin using the feature, ensure that you have the following permissions:
- You must have Audit Trail - View - All, which allows you to view Audit Trail for any object in Classic and Audit for any object in Clarity.
- As an administrator, if you want to grant access rights to the users to access both the Audit tile and the Audit module, then:

Location

Access Right

Administration > Audit tile

Administration - Audit - Navigate

Pr

Audit Module

Audit Trail - View - All
- Setup View Options
You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout.


3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
- Periods: Set the Start Period and End Period. The application adjusts the time periods based on the value that you selected for periods.
- Duration: Set the Start Period and indicate the number of periods (Duration), with an optional offset from the start.
6. Define if you want to see Sum of Periods or Grand Totals in the Totals column.
- Sum of Period displays the Total (e.g., Actual Cost) for the number of periods in the layout
- Example
- If an Investment has a duration of 12 months; the page is configured to display 6 months. If Sum of Periods is selected then the Totals column will sum up the (e.g., Actual Cost) 6 months displayed in the layout.
- Grand Total displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout
- Example
- If an Investment has a duration of 12 months; the layout is configured to display 6 months. If Grand Totals is selected then the Totals column will sum up the (e.g., Actual Cost) for the 12 months of the investment
7. Per-Period Metrics grant you the ability to select specific data from the below options for display within the grid:
- Total: Exclusively shows the 'Totals' field without the per-period metric fields in the grid.
- Periods: Solely displays the per-period metric fields without the 'Totals' field in the grid.
- Total and Periods: Simultaneously presents the per-period metric fields and the 'Totals' field in the grid. IMPORTANT You have to select the per-period metric attributes from the Column Panel.


8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off. > [!NOTE] When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options. IMPORTANT
When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics. 9. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid. The following table shows the different types of aggregation supported for various types of attributes:

Number, Money, Calculated, Integer

Percent

Date

Boolean

TS

Sum


Average


Count


Min/Max


None


10. Select the Show Indicator on Non-Default Values toggle to display visual indicators when the default values of the following attributes are updated.
- Default allocation percentage
- Grand Totals or Totals column
- Allocation Start and Finish date columns
- Individual allocation per-period metrics

This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.

11. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

12. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

13. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

14. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget to quickly cycle through the data for various periods. Your Start Period and End Period settings will update the widget and as you cycle through periods in your widget, the Start Period and End Period will also be updated.

NOTE

Some of the key points to remember are:
- You can secure and relabel the TSV attributes using Field Level Security. While TSV attributes can be relabeled, they cannot be secured.
- You can use the TSV totals in widgets.
- You can include the custom TSV data in the page.
- You can edit the custom TSV data in the page.
- You cannot add TSV totals to the Details Panel.
- Forecast data will only be displayed in TSV if a detailed cost plan has been created for the investment.
- Financial data is read-only in the page.
- If you are using the board layout, you can configure columns, swimlanes, sort, and color.
- If you are using the timeline layout, you have the Color By option. View Audit Details The Audit module is available for all Blueprints and all API-enabled Objects. The Audit module is available for:
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

Follow these steps: 1. Open the relevant workspace for which the Audit module has been configured in associated blueprint. 2. Click Audit. You can leverage the configurable grid toolset utilized throughout Clarity:
- Column configuration
- Fly-out configuration
- Saved views
- Robust filtering
- Group By
- Export to CSV
IMPORTANT Some key points to remember are:
- The Audit module includes a Standard View with (1) filter for `Changed Date' to improve the overall user
experience. You may have very large amounts of audit data, which will require a longer than expected period to return a result set when NO filters are used. You cannot remove this filter. However, you can modify the values.
- Changed Date: = 10 Days Before To Current Date
- You must close and reopen the Details Flyout to apply Global Date setting options to the Record field.
- There is a difference in behavior when comparing how the Parent Object information is presented in Classic and Clarity. In Clarity, when you filter to display Sub-Object details (for a Risk as an example), the Parent information is populated. However, in Classic, you must select the Parent Object (such as Project), and the sub-object (or Risk) audit information is included.
- Resource Attribute: When enabling the Resource attribute on the Assignment object for Audit, ensure the change, insert, and delete options are configured in Classic. When the proper Audit configuration in place, you can see the Insert and Delete operations indicating a resource has been replaced on an assignment.
- In Clarity 16.1.1, the following capabilities are not supported in the Clarity Audit grid:
- Sort using the Attribute column.
- Display (total) scalar values (for example, allocations) using configured setting for FTE, Hours, or Days (vs. seconds).
- Ability to configure the Audit module for Plans.
- Include audit information for the stock sub-sub objects (e.g., Assignments, To Dos) and custom sub-sub objects in the Audit module. Workaround: View audit details for these objects under Clarity > Administration > Audit.

## Configure Canvas to Manage the Roadmap Dashboard

You can configure the chart widgets, table-type widgets, and object-specific attributes in the Canvas layout to view data across multiple sub-objects on a single page.


You can configure the following charts in Canvas:
- Number Tile
- Progress Ring
- Pie Chart
- Bar Chart
You can configure widgets for the following objects and sub-objects in Canvas:
- Roapmap Items
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


Pre-requisite
Your administrator needs to perform the following actions to ensure you can use the Canvas module.
- You have view access to the Roadmaps.
- Your roadmap has to associate with a blueprint that includes the Canvas module.

Setup Canvas to Create a Dashboard
Follow these steps:
1. Open a roadmap. 2. Select the relevant canvas module on the roadmap to open it. 3. Click Configure. A list of widgets enabled within the canvas appears under the Configure Canvas panel.

Setup View Options
You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
- Periods: Set the Start Period and End Period. The application adjusts the time periods based on the value that you selected for periods.
- Duration: Set the Start Period and indicate the number of periods (Duration), with an optional offset from the start. 6. Define if you want to see Sum of Periods or Grand Totals in the Totals column.
- Sum of Period displays the Total (e.g., Actual Cost) for the number of periods in the layout
- Example
- If an Investment has a duration of 12 months; the page is configured to display 6 months. If Sum of Periods is selected then the Totals column will sum up the (e.g., Actual Cost) 6 months displayed in the layout.
- Grand Total displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout
- Example
- If an Investment has a duration of 12 months; the layout is configured to display 6 months. If Grand Totals is selected then the Totals column will sum up the (e.g., Actual Cost) for the 12 months of the investment
7. Per-Period Metrics grant you the ability to select specific data from the below options for display within the grid:
- Total: Exclusively shows the 'Totals' field without the per-period metric fields in the grid.
- Periods: Solely displays the per-period metric fields without the 'Totals' field in the grid.
- Total and Periods: Simultaneously presents the per-period metric fields and the 'Totals' field in the grid. IMPORTANT You have to select the per-period metric attributes from the Column Panel.
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off. > [!NOTE] When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options. IMPORTANT
When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics. 9. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread
across the time periods.
IMPORTANT
Some of the key points to remember are:
- You can change settings such as Money Decimal Display, Number Decimal Display, and Show Total Row within the table widget of Canvas.
- You can override canvas per-period settings by enabling the Override Canvas Per-Period Settings option in specific tables with per-period metrics.
Add or Remove Chart Widget in the Canvas
You can define the following chart widgets in canvas:
- Number Tile
- Progress Ring
- Pie Chart
- Bar Chart

NOTE You can add Chart widgets based on any sub-object defined in the investment that should be enabled in Blueprint. Follow these steps: 1. In the Canvas, click Configure. 2. Drag a chart widget and drop it into the canvas. It opens the chart configuration pop-up window. 3. Enter the following details. Some fields will vary depending on your widget type and the operation selected in the Type field.
- Title - Enter the name of the widget
- Target Object
- Select the sub-object of the investment that is enabled for the canvas in the Blueprint
IMPORTANT The Chart widget will not display the object under Target Object that is disabled in the blueprint canvas.
- Color - Display the color of the widget
- Type - Select the relevant mathematical operation from the list.
- Format - Select if you want to display the actual number or the percentage
- Group By - Select the attribute that defines your primary criterion for widgets
NOTE To configure the per-period metrics, select Periods from the Group By drop-down list.
- Sum/Average/Minimum/Maximum - Select the attributes for grouping in the bar chart. NOTE The Sum/Average/Minimum/Maximum drop-down list displays only the TSV (Per-period) attributes when you select the 'Periods' in the Group By of Bar Charts.
- Bar Orientation - Select the horizontal or vertical bars
- Sort Order - Select the ascending or descending sort order. Hover over the Sort Order Tooltip icon to view the tooltip - The sort order will be based on the first attribute selected in the Sum/Average/Minimum/Maximum dropdown list..
- Group Format - Select the Clustered or Stacked option:
- Clustered: Multiple bars are displayed side by side for each category or group
- Stacked: Multiple bars are stacked on top of each other for each category or group
- Only Include items where - Select the filter criterion for the widget. 4. Click Create to create your widget. 5. Click Done to save your changes. NOTE The Widget library is disabled in Canvas. So, you can't add the widget to the Widget Library.

IMPORTANT Some of the key points to remember while working with chart widgets:
- Charts do not support sub-sub-object as a Target object.
- Only the owner/creator of the chart widget can modify the widget configuration.
- If other users remove a chart widget from the canvas, a draft copy of the view is created.
- If a sub-object used as a target object in the chart widget is deleted, then the respective widget is also
deleted from the view.
- If a sub-object used as a target object in the chart widget is disabled in the canvas configuration, then the
configured chart widget will continue to show in the canvas but not appear in the available widget list.
- If an attribute added to the canvas is later secured using Field-Level Security (FLS), the widget will throw a
400 error. It will not be removed or displayed.
- The Stacked/Clustered bar charts can be configured for Sum, Average, Minimum, and Maximum types but
not for Count type. This also applies to per-period metrics in bar charts.
- The Group Format (Stacked/Clustered) options appear when selecting more than one attribute in the Sum/
Average/Minimum/Maximum drop-down list of Bar Charts.
- A maximum of three attributes can be selected in the Sum/Average/Minimum/Maximum drop-down list of Bar
Charts.
- Sorting will be based on the periods selected in the View Options. So, 'Sort Order' will be in Read-Only.
- The Sum/Average/Minimum/Maximum drop-down list displays only the TSV (Per-period) attributes when you
select the 'Periods' in the Group By of Bar Charts.
NOTICE After configuring the bar charts:
- Hover over a bar to view the details of each category/period. This action highlights all associated bars in the
chart.
- The total sum of all periods will be shown at the end of the Stacked Bar Chart.
- Clicking on a bar instantly changes the format from Number to Percent.
- If a field in the grid has a negative value, it will not be visible in the Clustered and Stacked Bar Charts.
Edit the Chart Widget in the Canvas You can edit the chart widget in the canvas.
IMPORTANT Some of the key points to remember while editing a chart are:
- Only the owner of the chart widget can modify it by clicking on the edit icon (pencil icon) in the top-right
corner of the chart widget.
- The owner can also remove the chart widget by clicking on the "x" on the top-right corner of the chart widget.
- If you remove the chart widget, it will be deleted from the canvas. Follow these steps: 1. In the Canvas, click Configure. 2. Hover over the chart, and the Edit (Gear icon) option appears to let you edit the link. 3. Click Edit(Gear icon) to edit a particular widget. You can update the chart details in the pop-up window. 4. Click Done to save your changes.


Add a Table Widget to Canvas
Follow these steps:
1. In the Canvas, click Configure. 2. Drag a table widget and drop it into the canvas. 3. Enter the name of the table widget. 4. Select the Target Object from the list.


Some of the critical actions you can perform by using the grid are:
- Analyze details in the grid by using Filter.
- Add or remove an attribute in the grid using Columns 5. Click Create. You can see the table widget in the canvas. Configure the Columns in the Table Widget The table widget on Canvas allows you to add or remove columns and filter the data. You can add a maximum of 20 columns to the table widget. Follow these steps: 1. In the Canvas, click Configure. 2. Click the Gear icon at the top-right corner of the Table Widget to configure it. The grid opens in a pop-up window. Some of the critical actions you can perform by using the grid are:
- Add or remove an attribute in the grid using Columns.
- Leverage the Conditional Formatting capability. To learn more, see Configure Conditional Formatting.
- Analyze details in the grid by using Filter.
- Change the name of the table widget.
- Use the Group By capability in the table widgets of Canvas to transform your data grid into rows of logical groups.
To learn more about Group By capability, see Collapse-Related Rows Together In Group By Mode.
- Additionally, specific settings related to Money Decimal Display, Number Decimal Display, and Show Total Row are
available within the table widget of Canvas. IMPORTANT You can override canvas per-period settings by enabling the Override Canvas Per-Period Settings option in specific tables with per-period metrics.
3. Click Done to save your changes.
NOTE Clarity includes fields associated with the Resource Object in the dialog box that is available when you select the Staff Target Object. This helps you associate details such as Booking Manager and Date of Hire with the project's resources. The capability is governed by a feature toggle "Resource Attributes in Canvas Staff Target Object," which is enabled by default.
Search in Table Widget You can search the data in the table widget. Follow these steps: 1. Click the Canvas module. 2. In the Table Widget, enter the text in the Search option (near Gear Icon) to identify various instances based on your
requirements. You can view the search result in the grid.
Arrange Widgets in the Canvas View There are two types of widgets available in the Canvas view: 1. 1-column Widgets: Attribute, Progress Ring, and Number Tile need a minimum of 1-column width 2. 2-column Widgets: Table Widgets, Pie Chart, and Bar Chart need a minimum of 2-column width
NOTE You can drag a widget from its edge to change its size. IMPORTANT The maximum height of the Canvas is 24000px.
Search in Canvas You can use the Search bar available in Canvas to filter values based on the characters entered by you.
Setup Layout in the Canvas You can configure the column layout in Canvas with the following options: 1. 4-Columns 2. 6-Columns 3. 8-Columns

Follow these steps: 1. In Canvas, click Configure. 2. Click the Layout tab in the left panel. 3. Select the column layout based on your requirement:
a. 4-Columns b. 6-Columns c. 8-Columns You will get a message - "The placement of the widgets will be rearranged. Do you want to proceed?". 4. Click Proceed.
NOTE When you change the layout in the canvas, the following changes occur in the canvas: 1. If the column size increases, the layout retains the previous column size and adds new columns on the right-
hand side. 2. If the column size is decreased, the layout adjusts the widgets in the right-most columns below all the other
widgets. Export to PDF You can export the Canvas layout to a PDF file so that you can include Canvas visuals in presentations or other documents for stakeholder communication. Follow these steps: 1. Click the Canvas module. 2. Click Export to PDF to export the PDF file.
3. Click Download to save the PDF.

> [!NOTE]
> What You See Is What You Get When you export the PDF, the PDF looks exactly as it appears on the screen. If the widget has a scroll bar, any data within the scroll bar will not be included in the PDF. IMPORTANT The Grid has Group By capability, allowing users to group and expand tables within the Canvas view. However, there is a limitation during PDF export where only five expanded tables are displayed. In such cases, Clarity selects the latest expanded tables in the Canvas, prioritizing them for inclusion in the PDF export. Expand the Widget You can expand the pie chart, bar chart, and table widget in Canvas to view the complete and clear chart/widget. Follow these steps: 1. Open the Canvas module. 2. Click the Expand icon near the chart/widget.
You will see the complete and clear chart/widget. NOTICE Some of the key points to remember are: 1. The Number Tile, Progress Ring, Pie Chart, and Bar Chart are responsive. When the Chart size increases in the Canvas, the text size in the Charts increases. 2. Click a data point to remove the corresponding slice from the Pie Chart, and observe that the removed data point will be indicated with a strikethrough in the legend. 3. The expanded bar chart will show a maximum of 20 categories/periods.
Widget Governance Some of the key points to remember while working with widgets:
- You can see the widget counter that indicates the total number of widgets added to the canvas.
- You can add a maximum of seven table widgets to an individual canvas.
- You can add ten charts and table widgets to an individual canvas.
Save Your Views Clarity allows you to save and modify multiple views that help you achieve your business goals. Some of the critical actions you can perform are: 1. Save an existing configuration in the grid. 2. Update existing views by using the Quick Save functionality 3. Access views saved by other users 4. Mark relevant views as favorites so that you can access them easily 5. Select default views To learn more about using the Saved View option, see Working with Saved Views.

## Creating and Managing Roadmap Checklists

This section contains the following topics:
- Overview of Checklists
- Pre-requisites for Using the Checklists Module
- Managing Checklists
- Managing To Dos
- Working with Collaborators

Overview of Checklists
Checklists allow you to create checklists specific to the investments. You can define To Dos within the checklist along with To Do owner, due date, and link. Checklists created in investments are also displayed in "My Workspace".
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
NOTE You can mark a completed To Do as Not Completed. So it appears in your Due list again.

Pre-requisites for Using the Checklists Module
Your administrator needs to perform the following actions to ensure you can use the Checklists module.
1. You need to have the following access right to use the Checklists module:
- Checklist - Create: Allows user to create Checklists
2. You need to have the following access rights to work with To Dos in Checklists:
- To Do - Create
- All: Allows user to create To Dos in the Clarity for which the user has access to view associated objects.
- To Do - Delete
- All: Allows user to delete all To Dos in the Clarity for which the user has access to view To Dos and to view associated objects.
- To Do - Edit
- All: Allows user to view and edit all To Dos in the Clarity for which the user has access to view associated objects.
- To Do - View
- All: Allows user to view all To Dos in the Clarity for which the user has access to view associated objects.
3. You have view access to the investment. 4. Your investment has to associate with a blueprint that includes the Checklists module.
IMPORTANT The following table explains the impact of various user actions on checklists:

Sl. No. 01.
02. 03.

Actions

What happens in My Workspace?

When checklists are available in a template, Checklists associated with the Template will be visible in the and if you create an investment using the Checklists module. template

When you convert an idea to a project and if Checklists associated with the Idea will be available in the

checklists are available in the idea

Checklists module.

When you convert an idea that has checklists to a project and you choose a template with checklists

Checklists associated with Idea and Template will be available in the Checklists module.


Managing Checklists
You can perform the following actions in Checklist:
- Creating a Checklist
- Setting Due Date for a Checklist
- Copying a Checklist
- Renaming a Checklist
- Changing the Status of a Checklist
- Moving a Checklist to an Investment/Agreement
- Removing a Checklist from an Investment/Agreement
- Deleting a Checklist
- Transferring Checklist Ownership
Creating a Checklist
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. Click `+' to add a new Checklist. 3. Enter a name for the checklist. 4. Click Create.
NOTE The checklist created in the investment is also displayed in "My Workspace".
Setting Due Date for a Checklist
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to set a due date. 3. Click Three-dot Action Menu and select Set Due Date. 4. Select a date from the calendar.
Copying a Checklist
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to copy. 3. Click Three-dot Action Menu and select Copy. 4. Enter the name of the Checklist and click Copy.
IMPORTANT When you copy a checklist, the following items are duplicated in the copied checklist:
- Due date of the Checklist
- All the To Dos in the Checklist along with:
- Owner of the To Do
- Due Date of the To Do
- Link attached to the To Do
When you copy a checklist, the following changes happen in the copied checklist:
- Removes collaborators from the checklist
- Changes the state of the Blocked To Do to Unblocked To Do
- Removes Blocked Description of the To Do
- Changes the state of the Completed To Do to Not Completed To Do


Renaming a Checklist
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to rename. 3. Click Three-dot Action Menu and select Rename. 4. Rename the Checklist and click Save.

Changing the Status of a Checklist
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to change the status. 3. Click Three-dot Action Menu and select Mark Complete.
You can see the Checklist under the Completed heading in the Checklist Panel. The Completed heading in the Checklist panel will be collapsed by default, and you can expand it to see the completed checklists.
> [!NOTE]
> Clarity enables the Mark Open option for the completed Checklist. You can re-open the checklist using Mark Open in Three-dot Action Menu.

Moving a Checklist to an Investment/Agreement
You can move the checklist from an Investment to another Investment/Agreement using Move Checklist in Three-dot Action Menu. Here is the flow to move a checklist:

Follow these steps: 1. Open an investment in Clarity and click Checklists.

2. Click the Checklist that you want to move from one Investment/Agreement to another Investment/Agreement. 3. Click Three-dot Action Menu and select Move Checklist. 4. Select an Investment/Agreement where the checklist needs to be moved. 5. Select the specific Investment/Agreement in the Move Checklist to (Investment/Agreement) pop-up window displaying
object-specific list. 6. Click Move.
The Checklist will be moved to the selected Investment/Agreement. You don't see the checklist in the Investment.
Removing a Checklist from an Investment/Agreement Follow these steps: 1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to remove from Investment/Agreement. 3. Click Three-dot Action Menu and select Remove Checklist from Investment/Agreement..
The Checklist will be removed from the Investment/Agreement. The link to the Investment/Agreement will be removed from the Checklist.
REMEMBER The removed checklist from the investment will be available in "My Workspace".
Deleting a Checklist Follow these steps: 1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to delete. 3. Click Three-dot Action Menu and select Delete.
The Delete Checklist pop-up window opens with the message
- "All To Dos in this checklist will be deleted" 4. Click Delete.
REMEMBER If you delete the checklist from the investment, then it is also deleted from "My Workspace".
Transferring Checklist Ownership 'Co-Owner' has all the rights of 'Owner', including the ability to delete the checklist and remove other collaborators from the checklist.
IMPORTANT Owner cannot be removed. Refer to the following scenarios to learn more: Scenario: If you convert Idea into Project (Checked/Unchecked Copy Checklist) the a person who converts Idea into Project becomes the Owner, and the new project manager is the `Co-Owner' of the checklist. NOTICE The Checklist Owner, Co-owner and Collaborators from Idea and project template will not be copied.


Based on the selection of 'Copy Checklists', the following table shows the results:

Sl.No. a.

Condition If Copy Checklist is checked while converting Idea into Project

b.

If Copy Checklist is unchecked while converting Idea into Project

Scenario a: Populate checklist during Idea to Project Conversion (Checked Copy Checklist)

The Checklist Own Checklist To Do's
- Only Checklists fro

Scenario b: Populate checklist during Idea to Project Conversion (Unchecked Copy Checklist)

Managing To Dos You can now create To Dos in checklist so that you can track and complete activities to manage the investment successfully. These are typically higher-level activities that may not have specific tasks created for them. You can assign an Owner and set due date for a To Do. You can also block and unblock To Dos.


You can perform the following actions in To Dos:
- Creating a To Do
- Assigning a Resource for a To Do
- Setting a Due Date for a To Do
- Adding/Editing a Link for a To Do
- Blocking a To Do
- Marking a To Do as Completed
- Rearranging To Dos


Creating a To Do
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to add To Dos in it. 3. Click New To Do and enter the name of the To Do. 4. A new To Do will be created.

Assigning a Resource for a To Do
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. In the Checklist, click a To Do to assign a resource. 3. Click Assign Owner. 4. Select a user from the list.

Setting a Due Date for a To Do
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. In the Checklist, click a To Do to set a due date. 3. Click Set Due Date. 4. Select a date from the Calendar. If you select the overdue date, Clarity shows Due Date with a red background.

Adding/Editing a Link for a To Do
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. In the Checklist, click a To Do to add a link. 3. Click Three-dot Action Menu and select Add Link. 4. Enter the link in Edit Link and click Done.
To remove the link for the To Do, follow these steps:
1. Open an investment in Clarity and click Checklists. 2. In the Checklist, click a To Do to remove a link. 3. Click Three-dot Action Menu and select Edit Link. 4. In Edit Link, click Remove.


Blocking a To Do
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. In the Checklist, click a To Do to add a link. 3. Click Three-dot Action Menu and select Block. 4. Enter the description for blocking To Do.
There are two ways to unblock a To Do:
Method 01: Click the Unlock button on the blocked To Do.
Method 02: Click Three-dot Action Menu and select Unblock.


Marking a To Do as Completed
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. In the Checklist, check Mark Complete for a To Do. The To Do moves under Completed list.

Rearranging To Dos You can drag and drop To Dos to rearrange them in the Checklist.

Working with Collaborators
The Checklist can be shared with one or multiple users. The Checklist can only be shared with users defined in Clarity. Collaborator names can be searched by name or email address in the Share Checklists pop-up window. Users with whom the Checklist is shared are added as "Collaborators". Owner and collaborator avatars are displayed next to the Share button and the total counter.
NOTE Only owners can share a checklist with others or remove a collaborator.


You can perform the following actions in Checklist:
- Sharing a Checklist
- Modifying Checklist Sharing Group
- Removing a Collaborator
- Roles in Checklists


Sharing a Checklist
Follow these steps:
1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to share with others. 3. Click the Share button. The Share Checklist pop-up window opens. 4. Search by name or e-mail address. 5. Select the name/e-mail address to add the user as a collaborator. You can add multiple users as collaborators. 6. Click Done.
> [!NOTE]
> Some of the key points to remember are:
- If you assign an owner and do not share the checklist with the assigned owner, then the owner can view the To Do in his/her My Workspace but cannot perform any actions on it.
- Only the Checklist owner and collaborators can see their checklist. Other users will not see any checklist unless a checklist is shared with them.

Modifying Checklist Sharing Group
The Checklist Sharing group is seeded in Clarity. Users with whom a checklist is shared are automatically added to this group. This group helps the Administrator to:
1. Add and remove access rights for the group. 2. Add and remove users from the group.
Follow these steps:
1. Click Administration, Organization and Access, Groups. 2. Click the Checklist Sharing group. 3. Open the Access Rights menu and click Global. You can see the following access rights in Checklist Sharing group:
a. Checklist
- Create b. My Workspace
- Navigate c. Resource - View
- All d. To Do - Create
- All e. To Do - Delete
- All f. To Do - Edit
- All g. To Do - View
- All
To add additional access rights:
1. Click Add. 2. Select the appropriate global rights for the user group and click Add. 3. If more access rights are available on additional pages, click Add and Select More. Continue assigning access rights
until all appropriate access rights have been assigned. 4. When you have finished assigning global rights to the user group, click Return.
