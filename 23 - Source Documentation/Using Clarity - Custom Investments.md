# Using Clarity

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

Using Clarity
The articles in this section explain how to start using Clarity in your organization.
This section contains the following topics:
- Create and Edit Custom Investments
- Top-Down Planning with Roadmaps
- Create and Edit Hierarchies
- Working with Plans (Beta)
- Collaborative Workflow Management
- Creating and Managing Business Agreements
- Capture, Develop, and Approve New Ideas
- Managing Projects
- Manage Status Reports
- Working with Team Investments
- Analyze Resource Allocation and Staffing
- Manage Vouchers and Transactions
- Track Tasks Across Investments
- Track and Edit To Dos
- Working with Pages
- Working with Objectives
- Enter Hours and Submit a Timesheet
- Configure Resources, Roles, and Team Resources
- Create, Edit, and Delete Menu Links
- Viewing Custom Objects and Subobjects
- Getting Started with Clarity Administration
Create and Edit Custom Investments


Custom Investments allow organizations to create specialized categories of investments that align with their unique business processes and strategic objectives. Consider Sid, a portfolio manager who continuously needs to evaluate how he can help his business and organization transform its products, go-to-market strategy, and customer experience. Traditional project management tools often limit strategic planning to predefined categories, but Sid wants to articulate his corporate strategy using business terminology that reflects his organization's actual investment approach. In this scenario, Sid can use Custom Investments in Clarity to chart out his strategy, break it down into critical objectives, and create investment items. His teams can then build small prototypes for each investment item to evaluate its feasibility. For example, Sid might create custom investment types such as:
- Strategic Themes - High-level organizational priorities that drive decision-making
- Digital Transformation Initiatives - Technology-focused investments that modernize business processes
- Market Expansion Programs - Geographic or demographic growth investments
- Product Innovation Pipelines - Research and development investments for new offerings This approach enables Sid and his stakeholders to filter custom investment items by specific parts of the organization, aligning investments with actual business funding models rather than forcing everything into traditional project categories. The Custom Investments capability supports organizations in maximizing investment alignment using a customized approach that mirrors their unique investment management practices. To learn more about custom investments, see Create and Edit Custom Investments.
TIP Free Clarity Training on Broadcom Academy
- You can attend FREE Clarity training by registering at Broadcom Academy.
- The Clarity: Managing Custom Investments training can help you leverage custom investments in your organization.
- You can log into Broadcom Academy with your existing Broadcom credentials. If you don't have Broadcom credentials, simply provide your official email address and get started with your training.
Key Points to Consider Prerequisites and Access Rights: While creating and using Custom Investments, ensure the following essential access rights are enabled:
- Custom_Investment_type - Create
- Custom_Investment_type - Edit All
- Custom_Investment_type - Edit All
- Custom_Investment_type - View All
- Custom_Investment_type - Xog Access
- Custom_Investment_type - Task Management Users are required to navigate and view rights for each custom investment type to access the custom investment instance information. Blueprint Considerations: Custom investment blueprints are automatically created when administrators establish new custom investment types. However, these standard blueprints should be customized to reflect specific business requirements:
- Configure the Details layout by adding relevant sections and fields that align with organizational goals.
- Based on business needs, add appropriate modules such as Tasks, Staff, Financials, Risks, Issues, and Changes.
- Publish the blueprint after customization and mark it as the default for relevant investment items.
Associate Custom Investment Items with OBS: You can associate custom investment items with the organizational breakdown structure (OBS) to link specific departments and locations to the custom investments. An Organizational Breakdown Structure (OBS) is a hierarchical representation of your company that you can use to align your investments. With an OBS, you can perform the following tasks:
- Categorize objects for filtering and reporting purposes.
- Grant access rights to users for object instances based on their OBS membership.
For more information about OBS creation, see Configure an Organizational Breakdown Structure
You can now view and manage hierarchical data for master-object and sub-object instances on a single page. This capability streamlines data management and enhances visibility across related records.
{"URL":["/investments","/investments/*/common"],"heroDescriptionIdentifier":"hero","customCards": [{"id":"KeyPoints","title":"Key Points to Consider","type":"use","languages":["en-us"]}, {"id":"IPCE_New","title":"Enhancements","type":"configure","languages":["en-us"]},{"title":"Enablement Videos","type":"videos","URL":["https://youtu.be/MhcNB-F2IqI","https://youtu.be/dj_OLLSHD_M"],"languages":["en-us"]}, {"id":"4181833","title":"Training: Getting Started with Clarity","type":"courses","languages":["en-us"]}]}
Getting Started with Custom Investments
You can use Custom Investments in Clarity to chart out his strategy, break it down into critical objectives, and create investment items. Your teams can then build small prototypes for each investment item to evaluate its feasibility.
This section contains the following topics:
- Prerequisites
- Working With The AI Chat Panel
- Setup View Options
- Setup Hierarchical Nested Grids
- Enable 'Allow Time Entry for Unstaffed Resources'
- Custom Investment Effort Task
Prerequisites
Note the following points and prerequisites:
- The Custom Investment item can be associated with one or more OBS via the normal OBS association process.
- Ensure that the following access rights are enabled for Custom Investments:
- Custom_Investment_type - Create
- Custom_Investment_type - Edit All
- Custom_Investment_type - Navigate
- Custom_Investment_type - View All
- Custom_Investment_type - Xog Access
- Custom_Investment_type - Task Management
- The OBS selector is added to the Details panel.
TIP
If you want to create a new OBS, ensure that the OBS attribute is API enabled and Access Rights enabled.
For the Department and Location to appear in the Custom Investments Details module:

Follow these steps: 1. Copy the custom investment blueprint. 2. Edit the blueprint to add the Department and Location attributes in the Details module 3. Publish the custom investment blueprint.
For information about blueprints see Clarity: Configure Blueprints for Projects and Investments.
You can associate, update, or dissociate a Custom Investment Type object with Department, Location, Organization, and Default Resource OBS.
NOTE If you change the Department value for a Custom Investment, the corresponding Department OBS also is updated.
Example: Sid wants to create an Organizational Breakdown Structure (OBS) and associate it with a Custom Investment item so that he can assign each custom investment to a specific part of his organization. This will enable Sid and the stakeholders of the associated custom investment items to filter the custom investment items by specific parts of the organization.
Sid asks the administrator to create a custom investment named Business Case. He then requests the administrator to create a new OBS. The administrator navigates to OBS Administration in Classic PPM and creates an OBS named ACME OBS. The administrator associates the Business Case object to the ACME OBS.
As a result, Sid can now filter the Business Case custom investment item by ACME OBS.
Follow these steps: 1. Log in to Clarity. 2. Click Investments from the main menu. 3. The custom investments are displayed, select Business Case custom investment. 4. Select an instance. 5. Navigate to the Column picker, select the following OBS units as required:
- Department
- Location
- Custom_OBS for example, ACME OBS The associated columns are added to the Custom Investment grid. 6. Specify the OBS attribute values for the instance. The instance is now associated with the OBS. 7. You can search and filter the instance, by location, unit, units and descendants, and units and ancestors.
Working with the AI Chat Panel The AI Chat Panel allows you to interact with the AI Agent directly within Clarity. Use it to view automated responses, follow-up prompts, and enter your own queries if permitted. The chat panel is accessible through the AI Agent logo in supported workspaces or modules.
Follow these steps: 1. In Clarity, navigate to a workspace or module that supports the AI Agent. 2. Click the AI Agent logo in the page header. The available AI Chat Panels that you can access appear in a drop-down
list. 3. Select an AI Chat Panel from the list. The panel opens and displays the prompt response configured by your
administrator.
View AI Chat Panel Components Within the AI Chat Panel, you can view and interact with the following elements:
- Follow-Up Prompts: Display predefined follow-up questions configured in the AI Agent setup.
- User Input Text Box: Type a follow-up response if Allow Free-Form Input is enabled.
- Additional Follow-Up Prompts: Click the Expand icon to view all available follow-up prompts.


Use the Chat Panel Interface
You can adjust the chat panel layout to suit your viewing preference:
- Maximize: Expand the chat window to cover most of the Clarity interface. You can manually adjust the size of the window as needed.
- Dock: Anchor the panel beside the main Clarity window for a side-by-side view.
- Minimize and Restore: Temporarily collapse or reopen the chat panel.
- Close: Exit the chat panel to end the current interaction.
NOTE
Some of the key points to remember when interacting with AI Agents in the AI Chat Panel are:
- Each follow-up prompt automatically includes all previous prompts, data sources, and LLM responses within the same chat session.
- Closing the chat panel ends the current LLM interaction and clears the conversation history.
- Invoking a new AI Agent starts a new, separate interaction session.
- The AI Agent button for the user is disabled while the agent is running. If the user closes the AI Chat Panel
before the current interaction completes, the button remains disabled until the agent finishes processing.
- If an AI Agent panel is open and the user clicks on a new AI Agent, Clarity closes the current chat and starts
a new one.
- When asking the LLM to build charts, always include the phrase "using highcharts" in your prompt to ensure
compatibility with Clarity's licensed charting library.

Setup View Options You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs). Follow these steps: 1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.
REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.
IMPORTANT
When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics. 9. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.
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


10. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

11. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

12. Show Nested Subobjects: Turn on the toggle to view and engage with sub-instances across multiple master instances concurrently.
- Nested Subobject: You can choose the specific sub-object to display its sub-object instances within the sub-grid.

13. To configure your own display attributes, choices, and the color of each value, click Manage Picklists, New Picklist.

a. Enter a name for your picklist in Picklist Name. Each picklist you define can be applied to the current project only.

b. To add value to your picklist, click Add Choice. Edit the name and color for each choice.

c. Click Done.

14. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.


15. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget to quickly cycle through the data for various periods. Your Start Period and End Period settings will update the widget and as you cycle through periods in your widget, the Start Period and End Period will also be updated.
NOTE Some of the key points to remember are:
- You can secure and relabel the TSV attributes using Field Level Security. While TSV attributes can be
relabeled, they cannot be secured.
- You can use the TSV totals in widgets.
- You can include the custom TSV data in the page.
- You can edit the custom TSV data in the page.
- You cannot add TSV totals to the Details Panel.
- Forecast data will only be displayed in TSV if a detailed cost plan has been created for the investment.
- Financial data is read-only in the page.
- If you are using the board layout, you can configure columns, swimlanes, sort, and color.
- If you are using the timeline layout, you have the Color By option.
Setup Hierarchical Nested Grids You can view and manage with sub-instances across multiple master instances concurrently.
Follow these steps: 1. Log into Clarity. 2. Navigate to the relevant page and click the grid layout. 3. In the grid layout, click View Options. 4. Turn on the Show Nested Subobjects toggle. 5. In Nested Subobject, you can choose the specific sub-object to display its sub-object instances within the sub-grid. 6. Master Grid rows show the Expand button. 7. Expand the Master Instance to view the Sub-Grid.
You can view the sub-grid under the master instance.
NOTE Some of the key points to remember are:
- Any configuration modifications to sub-grids, such as filters, columns, and sorting, are implemented across all
sub-grids.
- When accessing a Details panel, choosing a sub-grid will exhibit the specifics of the sub-instance, as
anticipated.
- Adjustments made in the View options, like decimal preferences, per-period metrics, and text wrapping, are
implemented in both the master grid and sub-grids.
- Certain functionalities, including Export to CSV, Creating a new instance, Data Grouping, and Aggregated
Totals row, are inaccessible while viewing sub-grids.
Sub-Grid Capabilities The sub-grid is a generic grid supporting most Standard grid capabilities.
Some of the key actions you can perform within a sub-grid are:
- You can right-click a cell on a row to view a context-sensitive menu. Using the right-click context menu, you can:
- Open the Details Panel
- Delete the row
- Star various items to mark them as a favorite
- Create a chart using the data in the sub-grid
- You can hover over a column header to display the  Column Heading Options menu with choices for pinning, autosizing, and resetting columns.
- You can use the column filter functionality to quickly identify records of a specific column that match your selection criterion. You can also use different operators in your filter criteria to be more specific about the data you want.
- You can use the Column Panel in the hamburger menu of every column to add or remove columns from the sub-grid.
TIP Ensure that Grid View Options to display Nested Subobject for Investments is enabled in Feature Toggles. This option is enabled by default and will be removed in Clarity 16.4.1.
Enable `Allow Time Entry for Unstaffed Resources'
The Allow Time Entry for Unstaffed Resources field is available in the Investments and Team Investments Workspace. By default, this field is set to `disabled'.
Impact of enabling Allow Time Entry for Unstaffed Resources
01. Effort Task Creation
- When the Allow Time Entry for Unstaffed Resources attribute is enabled for an Investment, an effort task will be
automatically created if no tasks exist.
- Additional tasks can still be created alongside the effort task.
02. Timesheet Availability
- With the attribute enabled, the Investment and its associated task will be available for Time Entry, even if the user is
not allocated in the Staff module or assigned to the task.
- This is an effort task with the Task ID '~rmw'. You can complete the entire timesheet lifecycle using the '~rmw' task,
including entering hours, submitting the timesheet, reviewing and approving the timesheet, and posting the effort task.
- Existing rule is still valid. If Allow Time Entry for Unstaffed Resources = Yes but Open for Time Entry = No, the Investment will not appear in Timesheets.
NOTE The resource must have view access to the Investment Instance to view the effort task as Time Entry in Timesheets.
For example, the resource should be granted the "Project - View Management - All" access right.
To learn more, see Frictionless Cost Accounting.
Custom Investment Access Rights
When you create a custom investment, the following rights are automatically created:
- Custom_Investment_type - Create
- Custom_Investment_type - Edit All
- Custom_Investment_type - Navigate
- Custom_Investment_type - View All
- Custom_Investment_type - Xog Access
- Custom_Investment_type - Task Management

These are global or instance rights and can be assigned to various stakeholders depending on their role in the organization.

Custom Investment Effort Task
You use the Administration, Project Management, Settings page in Classic PPM to select or clear the Allow Effort Task Creation option. If this option is selected, an effort task would be created on the investment, when a Staff Member is added to the investment. In previous releases of Clarity, this option only applied to the Project Object. This setting applies to custom investments from Clarity 15.7.1 onwards.
TIP
Custom Investment Types can be used for tracking Other Work instead of Classic PPM NPIO - Other Work. To learn more, watch the following videos:
1. Clarity Quick Byte: Recipe for Managing Other Work 2. Clarity Quick Byte: Managing Other Work in Clarity
WARNING In Classic PPM and Classic PPM XOG:
- When staff members are added to NPIOS: Ideas, Applications, Assets, Products, Services, and Other Work, the Effort Task is ALWAYS created. This is because Classic PPM NPIOs do not support task operations and additional tasks - therefore the Effort Task is Required for Classic PPM NPIOs to support posting actuals on the investments.
- In Classic PPM, projects are the only instances that honor this setting. NPIOs created in Classic PPM ignore this setting and always get the Effort Task.
Custom Investments use some of the project management administration settings. Review the table given below to learn more about these settings.

Administration Settings Round Allocations to Nearest %
Allow Effort Task Creation
Reassign Tasks when Replacing Role Allow Edit of Allocations when Investment is Locked

Description
- Default = 25%
- This is used for the 'Allocate From Estimates' action.
- Currently, this is only applicable to Projects.
- This functionality is not supported on Custom Investments
- Default = True (Checked)
- This is applicable for both Projects and Custom Investments.
- Standard NPIOs only have an Effort Task that is always
created and hidden.
- Refer to the Allow Effort Task Creation section for more details
on how it works for Projects and Custom Investments.
- Default = True (Checked)
- This is applicable for both Projects and Custom Investments.
- Default = False (Unchecked)
- This is only applicable to Projects.
- Custom Investments DO NOT use schedulers - therefore it
cannot be locked by a scheduler.
- Custom Investments DO NOT use BPM Processes - therefore
it cannot be locked by a process.


Administration Settings Automatically Open Staff Members for Time Entry
Allow Mixed Booking

Description
- Default = Never
- This is applicable for ALL Investment Types and Custom
Investments.
- This option controls the setting of the Team (Staff) Open for
Time Entry field.
- This option is ignored if the Studio Team Object attribute Open
for Time Entry Default = True
- Team Object Open for Time Entry attribute.
- Default = True (Checked)
- If the Team Open for Time Entry attribute (OTE) Default =
False (Unchecked), the system-level setting will update the Team/Staff OTE attribute to checked under the following conditions: Never, When Hard Booked or When Request Status is Approved.
- Custom Investments DO NOT use Requisitions, therefore,
the Request Status is Approved option is not applicable and hence the flag will not get automatically set for Custom Investments with this configuration. It will act the same as 'Never' value.
- Default = False (Unchecked)
- This is applicable for ALL Investment Types and Custom
Investments.
- When this option is checked, the user can enter different
segment values in Allocations and Hard Allocations curves causing a Mixed Booking Status.

Reordering Investment Tiles
Clarity administrators have the ability to group and reorder Custom Investment and Custom Master Object tiles to enhance usability for easier access to custom investments.
This section contains the following topics:
- Access Rights
- Tile Group and Tile Viewing
- Create a Tile Grouping
- Edit Tile Grouping
- Tile Group Reordering
- Tile Reordering

Access Rights
To group or reorder investment tiles, ensure that the following access rights are enabled for Custom Investments and Custom Master Objects:

Supported Objects Custom Investments

Capability
Create, Update, Delete, and Reorder Tile Group Add and Remove Tile from Group

Rights Required
Custom Investment
- Navigate Tiles
- Administer
Custom Investment
- Navigate Tiles
- Administer [Custom Investment] - Navigate


Supported Objects Custom Master Object

Capability Reorder Tile in a Group
View Tile Group View Tile Create, Update, Delete, and Reorder Tile Group Add and Remove Tile from Group
Reorder Tile in a Group
View Tile Group View Tile

Rights Required
Custom Investment
- Navigate Tiles
- Administer [Custom Investment] - Navigate
[Custom Investment] - Navigate (For at least one Tile in the Tile Group)
[Custom Investment] - Navigate
Custom Object
- Navigate Tiles
- Administer
Custom Object
- Navigate Tiles
- Administer [Custom Master Object] - Navigate
Custom Object
- Navigate Tiles
- Administer [Custom Master Object] - Navigate
[Custom Object] - Navigate (For at least one Tile in the Tile Group)
[Custom Master Object] - Navigate

Tile Group and Tile Viewing
You can View Tile Groups and Tiles as follows:
- You can only see Tile Groups that have Tiles.
- You can see a Tile Group if they have access rights to see at least 1 Tile within that Tile Group. If the User does not
have access rights to see any Tiles in a Tile Group, then that Tile Group will be hidden.
- You can see the ungrouped section if they have access rights to see at least 1 Tile within the ungrouped section. If the
User does not have access rights to see any Tiles in the ungrouped section, then the ungrouped section will be hidden.
- You can only see Tiles they have access rights for.


Create a Tile Grouping


Administrators can Create, Update, and Delete Tile Groups.
1. In the Custom Investment or Custom Master Object page, click the Configure button to Create, Update, or Delete a Tile Group. Tiles in a Deleted Tile Group are moved to an ungrouped section
2. Click the New Group button to create a new Tile Group. 3. Populate Group Name and select a Color for the Group. A New Tile Group is added to the top of the Tile Groups. Note
that the Tile Group Name has localization support 4. Click the Done button when all Tile configurations are complete. New Tiles (including newly API enabled Objects) are
placed in an ungrouped section by default


Edit Tile Grouping


Administrators can Add or Remove Tiles from a Group as follows: 1. Click the Configure button. 2. Drag and Drop a single Tile in or out of Tile Group or ungrouped section. 3. Click Done button when finished.
Tile Group Reordering

Administrators can Reorder Tile Groups as follows: 1. Click the Configure button.


2. Click the New Group button to Create a new Tile Group. 3. Drag and Drop Tile Group Drag Handle to desired location. 4. Click Done button when finished.
Tile Reordering


Administrators can Reorder Tiles within Tile Groups as follows: 1. Click the Configure button. 2. Drag and Drop Tile Drag Handle to the desired location within the Tile Group. Note that you can also reorder Tiles in
the ungrouped section. 3. Drag and Drop Tile Group Drag Handle to desired location. 4. Click Done button when finished.
Navigating Investments in Various Layouts
As a manager, you are responsible for managing multiple investments. You want to view the status of all your investments on one page. Click an investment to view all the related sub-objects of the project, such as Conversations, Tasks, Links, Status, Financials, Risks, Issues, Changes, Documents, Details, and Staff of the project, depending on your access rights. This section contains the following topics:
- Managing Records By Using the Grid Layout
- Setup View Options
- Managing Records By Using the Board Layout
- Setup View Options for the Board Layout
- Managing Records Using the Timeline Layout
- Working with Widgets
- Display Key Milestones for Custom Investments

Managing Records By Using the Grid Layout
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
Setup View Options
You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off. REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.


IMPORTANT
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


10. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

11. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

12. To configure your own display attributes, choices, and the color of each value, click Manage Picklists, New Picklist.

a. Enter a name for your picklist in Picklist Name. Each picklist you define can be applied to the current project only.

b. To add value to your picklist, click Add Choice. Edit the name and color for each choice.

c. Click Done.

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
- If you are using the timeline layout, you have the Color By option.


Managing Records By Using the Board Layout
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
- You can double-click a card to edit its name. You are not limited to using the default name.
You can interact with records on the board to perform the following actions:
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
Setup View Options for the Board Layout
The View Options capability allows you to customize the Board layout.
Follow these steps:
1. Navigate to the relevant page in Clarity. 2. Click the Board layout. 3. Click View Options. 4. Use Periods (Periods, Start Period, End Period, Totals) to specify cards displayed on the board and metrics
calculations. 5. Define if you want to see Sum of Periods or Grand Totals in the Totals column.
- Sum of Period displays the Total (e.g., Actual Cost) for the number of periods in the layout
- Example
- If an Investment has a duration of 12 months; the page is configured to display 6 months. If Sum of Periods is selected then the Totals column will sum up the (e.g., Actual Cost) 6 months displayed in the layout.
- Grand Total displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout
- Example
- If an Investment has a duration of 12 months; the layout is configured to display 6 months. If Grand Totals is selected then the Totals column will sum up the (e.g., Actual Cost) for the 12 months of the investment

6. Use Columns to specify attributes whose values will display as columns horizontally. 7. Use Swimlanes to specify attributes whose values will display as swimlanes that collapse vertically. 8. Use Sort to select an attribute to sort the cards within a column only. 9. Use Color to select a lookup attribute. If display mapping colors are configured for the attribute, it will display the color
as a vertical bar on the left side of the card. 10. Use Show Labels to show or hide labels. 11. Use Configure Card to configure various options that will be displayed on the card. 12. To configure your own display attributes, choices, and the color of each value, click Manage Picklists, New Picklist.
a. Enter a name for your picklist in Picklist Name. Each picklist you define can be applied to the current project only. b. To add value to your picklist, click Add Choice. Edit the name and color for each choice. c. Click Done. Managing Records Using the Timeline Layout
You can now use the Timeline Layout to execute investments seamlessly. Some key actions you can perform on the Timeline Layout are:
- Edit investment data by using the configurable grid or the Details panel.
- Drag the investment bars horizontally to adjust start and end dates.
- Add Widgets to view investment data graphically.
- Use the Color By option to determine the color of investment bars.
- You can now copy tasks within investments to duplicate them.
- You can use the Show Today toggle for the Tasks module to view your current position as of today in the overall
plan. Today is displayed as a star and a dotted line that cuts across various tasks displayed on the Timeline.
NOTE Some key points you need to remember are:
- The rows of the Timeline are presented in alphanumeric sort by Investment name.
- You cannot create dependency lines between investments on the Investment timeline.
- Timeline investment bars can be moved horizontally (to change investment start and end dates) but not
vertically. When the investment bar is moved, the underlying business logic for assignments, tasks, and staff is applied.
- The Investment Timeline view supports `fiscal' periods.
- When using the "+" button to create a new investment, the Details flyout will automatically open for the user to input required fields that do not have a default value.
- You can now see key milestones and their status on the Timeline layout for projects and custom investments.
- Mark various tasks as Key Tasks on the Tasks module associated with a project or custom investment
- Select the Key Milestones check box on the View Options pane for the Timeline layout on the Projects
page and the Custom Investments page.
- Hover your mouse over a milestone to view its name and finish date. If the diamond associated with a
milestone is filled, it means the milestone status is complete.
Working with Widgets
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
field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom

three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- Bar Widget: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- Progress Ring Widget: Displays a ring with a number based on the widget definition and filter criterion.
- Target (Roadmaps and Staffing Workspace): Displays targets either as goals or constraints on the number and money attributes of the relevant objects.
NOTE To learn more about Widgets, see Widgets.
Display Key Milestones for Custom Investments You can now see key milestones and their status on the Timeline layout for projects and custom investments. The key actions you need to perform to view milestones are: 1. Mark various tasks as Key Tasks on the Tasks module associated with a project or custom investment 2. Select the Key Milestones check box on the View Options pane for the Timeline layout on the Projects page and the
Custom Investments page. 3. Hover your mouse over a milestone to view the Name and Finish Date for the milestone. If the diamond associated
with a milestone is filled, it means the milestone status is complete.
Mark Investments for Deletion in Clarity You can now mark an investment (Project, Idea, Custom Investment) for deletion in Clarity by using the Mark for Deletion action button. When you mark an investment for deletion, Clarity sets the Purge Flag field. The relevant stakeholders can now review all the investments that are marked for deletion. Once they are satisfied, they can run the Delete Investments and Time Reporting Period job to delete the relevant investments. Before you mark an investment for deletion ensure that:
- The financial status of the investment is set to Closed to prevent new transactions.
- The investment status is set to Inactive.
- No process instances are currently running on the investment.
You need to have the <investment> - Delete - All global access right and "Edit" access rights for investments that you want to mark for deletion. If you have marked an investment for deletion and want to revert your decision, you can use the Clear Deletion option. The option clears the purge flag field associated with the investment. Follow these steps: 1. Log into Clarity. 2. Navigate to the relevant investment page and select the Grid layout. 3. Select the relevant investments and click Mark for Deletion.
Create Custom Investments
This section contains the following topics:
- Create a New Custom Investment
- Creating and Editing Investment Items
- Create an Investment Item from a Template
- Mark an Investment Item as a Template


Create a New Custom Investment
You can ask your administration to create a new custom investment in Clarity. When the administrator creates a new custom investment, Clarity automatically creates an associated blueprint and creates the appropriate access rights. Your administrator can then give you the necessary access rights to edit the custom investment.
To review how your administrator creates a custom investment, see Clarity: Configure Custom Investment Types.
After your administrator has created a custom investment, you can ask them to copy and edit the blueprint to reflect the goals of your business unit. Some key activities the administrator can perform using blueprints are:
- Specify the layout and fields that would be available when you select any investment item associated with the investment
- Specify the modules that would be available when you select any investment item associated with the investment.
To learn more about blueprints, see Configure Blueprints
Example: Sid requests his administrator to create a new Strategy Custom Investment and customize its blueprint.

Creating and Editing Investment Items
You can create and manage investment items by using the Grid or the Board layout in Clarity. Let's learn more about the Grid and Board layouts.
- Grid Layout: Analyze investment items quickly by using an excel-inspired grid layout.
- Board Layout: View investment items as cards, which you can arrange with drag-and-drop precision on a board layout
with columnar swim lanes.

Create a Custom Investment Item
- If you have the <Custom Investment> - Create access right, you can:
- Create a new investment item by using the "+" button in the Grid layout.
- Create an investment item by using the Insert Row Below in the Grid layout.
- Create an investment item by using the "New Card" button in the Board view. NOTE Clarity automatically adds the required fields to the grid or the Details panel when you are creating a custom investment item.
- If you have the Custom Investment - Create from Template access right, you can:
- Create a new investment item by using the New From Template button on the board and grid layout.

Create an Investment Item from a Template
To save time and effort, and for consistency, create projects from templates. A template is a framework that helps you quickly get started with new investment items. For example, you may have templates for different kinds of investment items in your organization. You can create templates in Classic PPM to capture the standard task and role assignments that you want to duplicate in future investments of the same type. You can mark an existing investment item as a template and copy the contents of the template into each new investment item. You can use blueprints to define the fields, sections, and modules for the investment item. You can modify any of the copied information from the template in the new investment item. When you create an investment item from a template, the application prompts you to enter the


information requested by the administrator in the Create from Template module of the blueprint associated with the template. After you provide the information, Clarity copies the following items into the new investment item:
- Blueprint Elements: The modules, sections, and fields defined in the blueprint for the template.
- Task Hierarchy: A two-level hierarchy where child tasks and milestones are grouped under phases.
- Roles: After adding a named team member to the project that matches a role, you can remove the role.
- Financial Plans: Both detailed and summary financial plans.
- Links: All links are copied. Links can contain parameter variables with dynamic context-sensitive values.
- Task To-Do Items: Any to-do items that are associated with the existing tasks are copied to the new investment item.
Completed items are reset to Open status.
- Risks, Issues, and Changes:The risks, issues, and changes associated with the template are copied over to the new
investment item.
- Second and third-level records:The second and third-level records associated with the custom sub-objects in the
template. Follow these steps: 1. In the main menu, click Investments. 2. Open the relevant custom investment. 3. Click NEW FROM TEMPLATE. 4. Select the template that you want to use. 5. Populate the mandatory details required to create the investment item. 6. Click CREATE.
Mark an Investment Item as a Template You can mark a custom investment item as a template by selecting the Template flag for the relevant investment items. When users create a new custom investment by using a template, the Originating Template field will be automatically populated. Follow these steps: 1. In the main menu, click Investments. 2. Open the relevant custom investment in the grid layout. 3. Add the Template field to the grid. 4. Select the relevant investment items as a template.
CSV Import for Investments (Beta)

Customers use Microsoft Excel to manipulate data before entering it into Clarity. You can now use the Generic CSV Import ability to import data into investments in Clarity. Some key points to remember are:
- The CSV file's data must be correctly formatted. Ensure your CSV file includes all the mandatory fields associated with
the Custom Master Object.
- Set the CSV Export format to Export/Import in the General tab of the Settings panel.
- You can import a maximum of 250 records.
- Clarity will not import Business rules on CSV import.
- The import action will fail if you have duplicate lookups in the CSV file. The following data types are supported:
- Number
- Percentage
- Strings
- Dates (Fixed)
- Boolean
- Lookups
- Static Dynamic (SVL/MVL)
- Money (Single currency Clarity System)
- TSV A new Export/Import option has been introduced in Clarity. When you are exporting a CSV in Clarity to import it back again, you need to select this option. Clarity will export the necessary header rows to allow you to import the CSV file into Clarity. When you have to export or import CSV files with dynamic lookups:
- Clarity will only export records that are displayed on the grid.
- End-users can copy and paste lookup labels and IDs from other records to change dynamic lookup values. Some key points you need to remember are:

NOTE
- Business Rules are not enforced during CSV Import.
- Clarity does not compare the values in the CSV import file with the values on the Clarity server before
importing them. Hence, the Last Updated Date and Last Updated By fields for every imported record.
- If you are auto-numbering IDs, leave the ID value blank in the CSV Import file to create a record
- entering
the value of the ID will update the record.
- When using CSV Import, the user must use the same language/locale as the exported CSV file, or incorrect
import results may occur.
- The following data types are not supported: Rich Text/Long String, OBS, Picklist, Attachment, URL,
Parameterized, and Static Dependent Lookups.
- When you Import Updates to MVLs, it will overwrite the existing values. Follow these steps: 1. Click Avatar, Settings, Generic, and select Export/Import. 2. Click any investment in Clarity. 3. Configure the grid with the attributes you want to be populated when you insert. 4. Filter grid for records to use as a template for creating new records 5. Select Actions and click Export to CSV. 6. Update the CSV file with the relevant information. 7. Click Import CSV and select the relevant CSV file. 8. Click Open to complete the import process. 9. You will get an Import Successful message.


Introducing Support for Lookups and OBS


When you export a CSV file from a workspace that includes OBS data associated with an entity, Clarity will not include the forward slash in the CSV export. However, the CSV Import will support the OBS value with or without the forward slash. Enter the full path of the OBS value in your CSV Import file. The Lookup ID format has been enhanced to support curly braces instead of parentheses. Hence, you will now need to enter Berks, Paul {pberks} instead of Berks, Paul (pberks) while adding lookup values to the CSV Import file.
NOTE Some key points to remember are:
- You can now enter the lookup label value for dynamic lookups in the CSV Import file. In previous versions,
you had to enter both the lookup label value and the associated lookup ID. You can continue to use the lookup ID format in case there are duplicate label names. In summary, the following formats are now supported:
- Lookup Label Value
- Lookup Label Value {lookup ID)
- On investments, the "Default Resource OBS Unit" is technically a dynamic lookup, but it is displayed like an OBS. If you Export to CSV and then Import from CSV, the import from this attribute will fail. Users will need to remove path information to only show the base label.

Importing TSV's by using CSV Files Clarity now enables customers to add Time Scaled Values (TSVs) into CSV files and import them into Clarity. You can navigate to the Custom Objects grid and click Export to CSV to download the CSV file. The file includes three-row headers that allow customers to input TSV information.
- First Row - TSV period name
- Second Row - TSV API attribute name
- Third row - TSV attribute name When you upload the CSV file, Clarity uses the first row to determine the period (week/month/quarter/years) and then processes the period value. The CSV import is based on the language and locale of the end users.
NOTE Some key points to remember are:
- TSV Number, Money, and Percentage data types are supported for the CSV import capability.
- TSV Total values are not supported in CSV Import and are ignored during import.
- If Clarity detects duplicate Fiscal Period Names on the default entity, it will abort the CSV Import. You must fix
the duplicate period names to use CSV Import capability.
- TSV Money attributes only support in single currency Clarity instances.
- Clarity will use the system currency defined in Financial Management while processing TSV Money attributes
during the CSV Import.
- You do not need to provide contiguous values in the TSV Import file.
- Clarity allows users to specify TSV Period labels in the language specified in a user's language setting.
Clarity uses the translation specified in the Entity Fiscal Time Periods to match the user's language to the translation.
- You cannot update any attributes using the "Active Currencies" lookup definition via CSV import.
- CSV Import Files does not support TSVs with different period types within the same file.
- Custom master objects only support calendar TSV, but Clarity leverages the fiscal TSV configuration from the default entity when using CSV Import for TSVs.
- Business Rules on custom master objects are not enforced during CSV Import.
Introducing Asynchronous Synchronization

The CSV Import process is now asynchronous to ensure that importing a significant volume of data does not compromise Clarity's performance. You will see a notification indicating the outcome of your import action. You can click the notification to get more details about the outcome of the import action.
- Notifications with a green checkmark mean your CSV Import was successful with no warning or error messages.
- Notifications with a yellow diamond mean your CSV Import records were imported, but one or more of your attribute
columns were not imported and would need to be updated manually. For example, URL datatypes and Starred attributes are not supported for CSV Import.
- Notifications with a red triangle mean some or all of your records in your CSV import had errors and did not import into Clarity. You can download the error CSV file with the records that did not get imported and the reasons why they did not import.
- Notifications with a red blocked symbol mean the system had trouble processing the CSV file, and the import was aborted. An example of this error is that your CSV import file does not have the correct header row at the top of the file or the file has incorrect delimiters separating attribute values.
NOTE Some key points to remember are:
- CSV Import Notifications will display faster when the PPM Broker is enabled.
- Email notifications will not be sent out for CSV Import.
- If an attribute has field level security (FLS) and it is read-only for the user, the CSV Import for that record will
not get imported.
Enhancing CSV Import to Support Business Rules
This CSV Import capability has now been enhanced to support Business Rules defined by Clarity administrators. This enhancement is crucial because administrators define Business Rules based on organizational mandates. Hence, the ability to implement these rules while importing investment data by using CSV files is vital.
NOTE Some key points to remember are:
- Clarity only executes Business rules if you use CSV files to update existing records. Clarity will not enforce business if you use the CSV Import capability to create new records.
- Clarity supports validating the View Page and Attribute Update business rules while importing data from CSV files.
- The View Page type business rule executes every time a user views a page. This rule type supports only one complex condition.
- The Attribute Update business rule executes every time you change the value of a selected attribute.
- If Clarity does not import certain records due to business rule violations, you can download the CSV file from the Notifications area and review the error messages.
- Clarity will ignore Required Rules while importing data from CSV files.
Let's consider an example where a business rule has been defined to ensure that when the Work Status is Active, the Manager attribute is set to read-only. Hence, when you try to import a record where the Works Status changes from Requested to Active, the Manager attribute will automatically become a read-only attribute.
Clarity will compare the attribute value in the system with the CSV file. It will only update attributes if the values differ between CSV File and Clarity. Hence, Clarity will not update a false audit trail by updating a record with the same values.
To learn more about business rules, see Working with Business Rules.
Copy Custom Investments

You can copy a custom investment item in Clarity to create a new investment. This capability is advantageous if you have multiple investment items with similar WBSs, RICs, and Staff requirements. The copy option is available on the Grid, Timeline, and Board layout. When you create a copy an investment, Clarity prompts you to populate the following fields:
1. Mandatory fields defined by your administrator in Classic PPM. 2. Mandatory fields defined by your administrator in the associated blueprint
While Clarity copies the investment item, the "Copy in Progress" banner is available to the user, and the investment is locked till the copy process is complete.
NOTE Some key points you need to remember are:
- You need the Investment - Copy access right to copy a investment item in Clarity. The Investment Copy requires additional permissions for a successful copy including Resource Booking permissions and Create permissions for all modules with records to copy.
- Clarity copies second and third-level records when copying investment items.
- The Copy action validates security and all `required' fields have a value throughout all related objects when
creating the new records.
- The following details are copied: Links, All financial plans and fields (except budget plans and fields),
Tasks, Staff, and Assignments, Picklists on tasks, Internal Task dependencies, Risks, Issues, and Changes, Documents, To Dos, Checklists, and Baselines. Please review the following knowledge base article for more information.
- The following details are not copied: Actual transactions, Starred selection, Conversations, Agreement Links, Audit trail entries, Action items, Security rights.
- An investment copy fails due to the following reasons. Clarity records the errors in the log file.
- Mandatory fields defined in Classic PPM are not filled in on a sub-object from the source investment
items.
- Insufficient access rights for resource booking or for create sub-level records in the new investment items.
- The selected investment is currently locked.
Follow these steps:
1. Log into Clarity, and click Investments. 2. Click a custom investment to open it. 3. Right-click the relevant investment item, and click Copy. This option is only enabled when you have Investment - Copy
access right. 4. In the Copy Investment window, populate the relevant fields and click Copy.
Executing Processes Using Actions
You can execute a process from projects, custom investments, ideas, roadmap items, master objects, and the Business Agreement object in Clarity. Consider a scenario where you have specific custom attributes associated with an object. You want to lock these attributes after updating them so that they cannot be updated till the object instance is ready to be archived. In previous Clarity releases, you need to open Classic PPM and execute a process to lock these attributes. You can now execute a process from the Properties module.
You can only execute a process from Clarity when the following conditions are met:
- You have the Process Start or Process Manage access rights.
- The process has been added to the associated blueprint.
Follow these steps:
1. In Clarity, open the relevant object instance.

2. On the Properties module: a. Select Actions and click the relevant process to execute it. The Actions button is available if there is more than one process associated with the investment. b. Select the Process if that is the only process associated with that blueprint. IMPORTANT Some key points you need to remember are:
- You can only call processes where "Active=TRUE" and "Available for On-Demand Start=Yes."
- If you delete a process definition in Classic PPM, it will remove the generic action for all blueprints using that process definition.
- When you execute a process in Clarity, you will see a message stating that the process has started successfully.
- The Actions button is only available under the Properties module.
- You can add a maximum of 50 processes to a blueprint.
- If a process is on hold or disabled, you will get a run time error in Clarity.
- Processes executed by using the Actions button will NOT enforce any partition logic configured on the process definition. If the user selects that generic action, a runtime error will be displayed.
- All actions defined on the blueprint will display to the end-user, but the end-user will get a run-time error if the end-user selects an action and does not have the process start or process manage to start that process.
- The Hide Actions capability enables you to leverage business rules and enforce fine-grained access control capabilities for actions. You can now use the Hide Actions capability that has been introduced to show relevant actions to specific users.
Supporting Email-Based Actions Processes in Clarity are workflows that automate approvals, notifications, and task assignments for various objects, such as projects, tasks, and resources. With the email-based action feature, you can respond to these processes directly from your inbox, simplifying your interaction with Clarity workflows. Responding to Processes via Email 1. When a process is triggered in Clarity, you will receive an email notification with the relevant details. 2. Open the email, which will contain information about the process and the action required (for example, Approve
Resource Allocation for Project Y). 3. Review the details in the email and click the appropriate action button (for example, Approve or Reject). 4. A new response email will be created automatically. You do not need to edit this email, instead, click Send to submit
your response. a. If you click Approve, Clarity will update the process as though you approved it in the platform. b. If you click Reject, Clarity will update the process as though you rejected it in the platform.
Review Features Available Across Custom Investments
This section contains the following topics:
- Associating Child Investments with an Investment
- Manage Risks for an Investment
- View Business Agreements for Investments in Clarity
- Attributes to Confirm Synchronization Status of Investments
- Add Allocations and Assignments by Period for Investments
- Enhancement to the Investment Status Field
- Leveraging the % Complete Capability for Investments
- Introducing the Ability to Unlock Investments
- Introducing Vaia (Beta) - Leveraging AI


Associating Child Investments with an Investment
You can use the Parent attribute to associate multiple child investments (ideas, projects, and custom investments) with an investment. In Clarity 16.0.3 and higher releases, the parent investment is now hyperlinked so that you can navigate to the parent investment. A couple of other key points to remember are:
- The Parent field is available in the Timeline and the Grid layouts.
- The newly introduced Parent Type field provides visibility for the type of investment.
Follow these steps:
1. In Clarity, navigate to an Investment page and select the Grid layout. 2. Click Columns and add the Parent and Parent Type attributes to the grid. 3. Identify the investment for which you want to add a parent in Clarity. 4. Double-click within the Parent column of the relevant investment and select the Parent investment.

Manage Risks for an Investment
If you manage risks directly for each investment, you can use a new calculated attribute Risk Score that has been introduced in this release. 11 new contributing attributes have also been introduced (Resource Availability Risk, Supportability Risk, Technical Risk, Sponsorship Risk, Organizational Culture Risk, Objectives Risk, Interdependencies Risk, Implementation Risk, Human Interface Risk, Flexibility Risk, Funding Risk). Since Risk Score is a calculated attribute, you can populate the Risk Score by population any of 11 attributes that contribute to the Risk Score. These attributes are available for all investments.
NOTE The risk attributes associated with the project object have been depreciated. Clarity will synchronize the values between the deprecated attributes and the new attributes for one year before announcing end-of-support for the Risk attribute and the associated contributing attributes.


View Business Agreements for Investments in Clarity


The Business Agreements capability in Clarity enables you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates. You can create business agreements from the following investment areas:
- Agreements module within the investment
- The Details panel on the relevant investment workspace
Administrators can determine how users can create Business Agreements by editing the associate investment blueprint. Consider a scenario where the administrator wants to enable users to create business agreements for projects. They can edit the Project template, select the Agreements module, and select from the following options:
- Enable Quick Create: This option allows users to create an agreement by clicking the plus (+) icon within the Agreements module.
- Enable Create Dialog: Allows users to use the Create from Template option to create business agreements from the agreements module.
- Show in Details flyout: Allows users to create an agreement from the Details module in the Projects workspace since you are editing the Project blueprint. This capability is available for the Grid and
When you create a business agreement from an investment, the successor is automatically set to that investment. The agreement is also available in the Agreements workspace, where stakeholders can review all the agreements relevant

to them based on their access rights. You can also view these business agreements in roadmaps when you import the relevant investment as a roadmap item. Follow these steps: 1. Navigate to the Agreements module for the associated investment. 2. Click the Add Row icon to create a new agreement. 3. Type the name and press Enter to create the agreement. 4. After creating the agreement, populate the predecessor, successor, commitment, and deadline fields to ensure the
agreement includes relevant information.
Attributes to Confirm Synchronization Status of Investments
You can use the Last Sync Status and Last Sync Message attributes to view the status of your investments with respect to their synchronization with Rally. Some key points you need to consider while reviewing these attributes are:
- Date and time indicate when the record was updated when either Clarity updates Rally or Rally updates Clarity (not
when the sync job was started or completed).
- The date and time are based on either the 'Clarity to Rally' or the `Rally to Clarity' sync direction.
- The timestamp is displayed in a 24-hour format and is based upon the Clarity user's time zone who initiated/scheduled
the synchronization.
- The `Last Sync Message' is a string field.
- The values of the `Last Sync Status' attribute (e.g., Successful and Failed) are seeded as read-only fields out of the
box. NOTE Some key points you need to remember are:
- The Last Sync Status and Last Sync Message attributes have been introduced for end-users working on investments to see when the investment was last updated by Rally.
- The Last Sync Status and Last Sync Message attributes will not be updated if the Synchronize Mapped Information job does not identify changes in the mapped investments.


Add Allocations and Assignments by Period for Investments


You can now view per-period metrics for Actuals, ETCs, Total Usage, Allocation, and Hard Allocation at an investment level. In previous releases, you had to navigate to various modules such as Staff and Financials to view this information. You can view per-period metrics for Projects, Ideas, and Custom Investments.
NOTE Some key points you need to remember are:
- Run the Investment Allocations and Usage job to refresh the per-period metrics.
- Some key attributes have been renamed in this release
- Actuals for Labor Resources has been renamed to Actuals
- ETC for Labor Resources has been renamed to ETC
- EAC for Labor Resources has been renamed to Total Usage
- The Investment Allocation job has been renamed as Update Investment Allocations and Usage.
Leveraging the % Complete Capability for Investments The % Complete attribute in Clarity is a critical metric used to indicate the progress of an investment or task. This attribute typically reflects the percentage of work that has been completed relative to the total work planned. This attribute is available in projects and and custom investments. You can use the % Complete Calculation method field to determine how Clarity measures progress.
- Manual: When the % Complete Calculation Method is set to manual, users must manually update the % Complete
for both summary and detail tasks. This method does not automatically aggregate data from child tasks, so project managers must actively manage and input progress updates.
- Duration: This method calculates the % Complete based on the time elapsed relative to the total planned duration of tasks. In this scenario, users can manually enter the percent complete at the detail task level; however, the summary

task and investment-level percentages will be read-only and calculated based on the completed durations of all detailed tasks.
- Effort: The effort method focuses solely on labor resources and calculates % Complete using actual labor hours compared to estimated labor hours.
NOTE Some key points to remember are:
- You need to execute the Update % Complete job to see the updates to the % Complete field.
- New '% Complete' and '% Complete Calculation Method fields are available in the abstract investment object.
- The existing API Attribute ID for these fields on the project object is no longer available. They will be
available as Read-Only fields and will be labeled as deprecated in Classic PPM.
Introducing Vaia (Beta) - Leveraging AI
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

NOTE Some key points to remember are:
- This feature uses a Generative AI service. The Generative AI service uses emerging technology, may
provide inaccurate generated output, and is not designed for or intended to meet your regulatory, legal, or other obligations. Always review AI-generated content for accuracy and make adjustments as needed.
- This feature is toggled off, and you must create a support ticket to toggle it in your environment. For more information, see the following KB article.
- Users need a Google Cloud Platform/Open AI service account with appropriate permissions to use this functionality.
- If the AI API key is not configured correctly, then the end user will see an error message on the screen.
- If the configuration under "Vaia (Beta)" is disabled, the end user will see the following error message: API 1019: Could not process the request due to internal error.
- The text generated depends on the AI Service Model utilized. It has been observed that AI models can change the text format over time, and the result displayed in Clarity would be impacted. Enhancement to the Investment Status Field The Status field for investments now follows the same logic as Classic PPM and presents only valid choices to users depending on the investment's existing status. The values in the fields are not driven by any access rights. Clarity derives the choices by examining the values in the Progress and Status fields. Unlock an Investment

When users work with task schedulers in investments, Clarity can lock an investment if they create a tentative schedule, have unsaved changes in PPM Gantt, or open the investment in Open Workbench or Microsoft Project. The following users can open a locked investment using the Unlock button on the top-right corner.
- Lock owner
- Investment Manager
- Administrator with 'Administration - Application Setup' access right Follow these steps:
- Log into Clarity and open the relevant investment.
- Navigate to the Properties tab and select Unlock.
NOTE Some key points to remember are:
- This feature is governed by the Ability to unlock Investments feature toggle.
- This capability is available for projects, custom investments, and the Teams investment.
- The ability of the investment manager to unlock investments was previously unavailable in Classic PPM.
Staff an Investment
The Staffing grid provides a comprehensive resource management capability that enables organizations to strategically allocate their workforce and resources across various investments. As a resource manager, you can use the Staff grid to identify and add people, roles, teams, and even non-labor resources by name or ID, providing complete visibility into resource availability, allocation percentages, task assignments, and actual hours worked. The staffing functionality considers four key factors when making resource allocation decisions: availability (the amount of time a resource is available for work), allocation (the percentage of time a resource is assigned to an investment), assignments (the various tasks a resource is assigned to within an investment), and actuals (the hours entered by a resource in a timesheet against specific tasks).
This section contains the following topics:
- Overview of the Staff Grid
- Set Units of Measure
- Support for Business Rules in the Staffing Workspace
- View Investments Associated with Resources
- Setup View Options
- Managing Records By Using the Grid Layout
- Key Points to Remember

Overview of the Staff Grid You can use the Staff Grid to identify and add people, roles, teams, and even non-labor resources by name or ID. The Staff Grid has the following fields in the default view:
- Role: Defines the role of the staff member that is requested for the investment.
- Booking Status: Defines whether the staff member is tentatively scheduled (soft) or committed (hard) to work on the
investment.
- Open for Time Entry: Indicates if the staff member can enter time on their timesheets for the investment. If you clear
the checkbox, a staff member cannot log time for a specific investment.
- Start: Defines the start date for the allocation for the staff member.
- Finish: Defines the finish date for the allocation for the staff member.
- Allocation: Defines the total availability (planned or committed) of the staff member to the investment.
- Actuals: Defines the actuals posted by the staff member against the investment.
- ETC: Defines the total assignment of the staff member to the investment tasks.
- Default Allocation: Defines the default allocation as 100%. You can edit the default allocation percentage.
NOTE You can use the column panel to search and add relevant fields to the grid. For example, Derek can use the column panel to add the Totals column to the grid. TIP Whenever you edit a task to add/remove resources or change the ETC, the changes are reflected in the Staff grid. Set Units of Measure Example: Derek wants to view the Clarity to display hours or days instead of full-time equivalent (FTE). Let's review how he can do that.
You can configure Clarity to display hours instead of full-time equivalent (FTE). FTE is a method for normalizing data for full and part-time resources and is calculated based on the standard calendar. You can learn more about FTE by reading this knowledge base article.


Follow these steps: 1. Click the drop-down menu next to your avatar and username at the top right. 2. Select SETTINGS. 3. Click GENERAL. 4. In the Unit of Measure field, select FTE, Days or Hours. 5. Click X Close.
Support for Business Rules in the Staffing Workspace


The business rules capability in Clarity has been extended to support the Staff Object. This allows administrators to give stakeholders more control over editing and visibility of staffing data based on their requirements. Consider a scenario in which you want to make the Staffing module read-only when the work status of a project in On Hold. In this scenario, you can create and associate a business rule with the Staff object. You can then select "Staff" in the Target object and use the View Page rule type. You can then use a filter with the Work Status attribute and then select the Disable Editing Target Object and Disable Deleting Target Object.


View Investments Associated with Resources


Currently, investment managers and resource managers must navigate to the dedicated Staffing workspace to view overand under-allocated resources through specialised tabs, such as Allocations by Resource and Allocations by Investment. This creates workflow inefficiencies and context switching that can slow down resource management decisions. You can now view resource-specific staffing allocation data directly from the Staff tab on an investment (Project, Idea, Custom Investment). You can edit the investment blueprint and add the Investment module as a sub-module for the Staff tab. You can then either click an individual resource allocation or use the Details panel to view investments associated with the resource. Some key benefits of viewing resource-specific allocation data directly are:
- Unified Resource View: Resources can be viewed alongside their investment allocations, eliminating the need to
switch between the Resources and Staffing workspaces.
- Streamlined Decision Making: Managers can make informed resource allocation decisions with immediate access to
the investment context and its financial implications. Follow these steps: 1. Open an investment and click Staff. 2. Click an individual allocation and select the Investments tab to view investments associated with the resource. You can
use the Resource Summary Mode to view allocations or usage for the resource as histograms. 3. You can also click a record, click Details, and then click Investments to view investment details on the Details panel.
NOTE Some key points to remember are:
- Administrators need to configure the Staff module for projects, ideas, and custom investments so that the Investment module is available as a tab. This will ensure that users can click on a resource and view all the investments associated with it.
- Users can utilise the Resource Summary mode to view allocations or usage for the resource as histograms. These histograms utilise colour thresholds to indicate whether a resource is over-allocated, under-allocated, or operating within optimal capacity, allowing for easy identification of issues at a glance.
- You can click a resource in the Staff tab and view investment allocations on the Investments tab in the Details panel. You can expand the tab and use the Resource Summary mode.
Setup View Options You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs). Follow these steps: 1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off. REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.


IMPORTANT
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
- If you are using the timeline layout, you have the Color By option.
Managing Records By Using the Grid Layout
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

Key Points to Consider Resource Allocation Fundamentals: When working with investments, it's essential to understand the four key factors that drive effective staffing decisions: availability (the amount of time a resource is available for work), allocation (the percentage of time assigned to an investment), assignments (the various tasks within an investment), and actuals (the hours entered in timesheets against specific tasks). These interconnected elements form the foundation of successful resource planning and must be carefully balanced to achieve optimal outcomes. Booking Status Management: Clarity supports different booking statuses, including soft (tentatively scheduled) and hard (committed) allocations, with the added capability for mixed bookings where planned and hard allocations differ. This flexibility enables collaborative planning between project managers, who can input soft-booked allocations, and resource managers, who can convert them to hard commitments after negotiations. Understanding these booking states is crucial for maintaining accurate resource planning and avoiding overallocation issues. Access Rights and Security: Proper access rights configuration is critical for effective investment management. Users need appropriate combinations of project edit rights and resource booking rights to perform various staffing operations. The system enforces strict business rules around who can add, modify, or remove staff members based on their access levels, ensuring that only authorized personnel can make resource commitments that impact the organization. Replacement and Reallocation Capabilities: Clarity provides sophisticated functionality for replacing staff members and reallocating resources, supporting both partial and complete replacements. When replacing resources with posted actuals, Clarity intelligently handles the transition by maintaining existing actuals while reassigning the remaining work to new resources. This capability is particularly valuable for managing resource changes without losing historical data or disrupting ongoing work.
Adding Resources to Investments
This section contains the following topics:
- Add One or More Roles to the Staff Grid
- Identify and Add Resources
- Add Staff Members to a Investment
- Use the Add Row button
- Use the Add Staff button
Add One or More Roles to the Staff Grid Derek had a chat with the project manager, and they decide that they need two senior developers, one associate developer, and one principal developer for the investment. Derek needs to ensure this requirement is captured in the Staff grid. Let's see how he does that. You can start by adding the Requirement Name field to the Staff Grid. You can then add multiple instances of the same role to an investment. You can then modify the names of the roles to distinguish them, such as Associate Developer, Senior Developer, and Principal Developer, in the Requirement Name field. The new role names that you assign on the investment Staff tab also appear in the pages under the Staffing page.

Follow these steps: 1. In the main menu, click the relevant investment page. 2. Open an investment and click Staff. 3. Apply one or more filters to constrain the volume of staff members in a large list. 4. Use the column panel to identify and add the Requirements Name attribute to the grid. 5. Click Add Row. This button appears only for users who have the proper booking rights. 6. Search for a resource, role, or team by name or ID. For resources, you can also search by primary role such as
architect, business analyst, and so on. 7. After you add a role, update the Requirement Name column to reflect your requirement accurately.
Identify and Add Resources Project managers and Resource Managers typically use Allocations Timeline on the Staffing page to identify resources for various investments. A sample workflow followed by them is given below: 1. They use the Allocations by Investments view to review the roles that are associated with a investment. 2. They use the Allocations by Resource view to review the current resource allocation and identify potential resources. 3. They can then allocate resources by any of the following methods:
a. Replace a role with a resource directly from the Staffing page. b. Replace a role with a resource directly in the investment by using the Staff grid.
NOTE To learn more about using the Staffing page, review Analyze Allocations by Using Allocations Timeline.
Add Staff Members to a Investment You can add resources, roles, or teams to a investment from the Staff module using one of the two options:
- Using the Add Row button to add the resource, role, or team.
- Using the Add Staff button to add resources, roles, and teams to an investment in Clarity.
Use the Add Row button You can use the Add Row button to add the resource, role, or team to an investment. You can use this option if you want to add individual resources to the investment. Follow these steps: 1. Open a investment and click Staff.


2. In the Staff field, double-click the resource, role, or team that you want to replace. 3. Complete one of the following tasks:
- Search for a resource by name, ID, or primary role or select from the drop-down list.
- Search for a role or select one from the drop-down list.
- Search for a team or select one from the drop-down list


Use the Add Staff button
You can use the new Add Staff button to add resources, roles, and teams to an investment in Clarity. After you click the Add Staff button, you can choose if you want to add resources, roles, or teams. If you choose resources, Clarity will load a list of all the resources available to you in a generic multi-select grid. You can use the search and filter options to quickly identify the relevant resources and add them to the investment.
Follow these steps:
1. Open a investment and click Staff. 2. Click Add Staff and select one of the following options:
- Resources
- Roles
- Teams 3. Based on your selection, Resources, Roles, or Teams are displayed in the Clarity common grid. 4. Use the filter and search option to identify resources, roles, or teams that need to be added to the investment. 5. Click Add to add the resources, roles, or teams to the investment.
NOTICE
You can add inactive resources to an investment using the Add Staff button.
Clarity allows this flexibility to help users allocate newly created resources that may be set to Inactive initially. However, if you want to prevent this behavior, you can revoke Booking Rights for those resources. Once revoked, Clarity will restrict users without appropriate permissions from adding inactive staff to investments.
Please refer to the Knowledge Base article for more information.
TIP
You can use the following features to effectively edit data in the grid:
- Relative Date Shifting: You can use the + or - option to shift the values in the date field. For example, you can enter "+2" to increase the date by two days. The date shifting capability does not bypass business rules. You can also use the date shifting capability when you are performing Bulk Edits in Clarity.
- Using the Drag Functionality to Populate Data: You can populate data in the grid layout by dragging the previous value. This will work for all attributes and you can drag multiple attributes together. The drag functionality supports number sequencing. To use this functionality, hover over a field and start dragging when the plus icon is displayed.
Replace Staff Members in Investments
This section contains the following topics:
- Reallocating Staff Members (Partial or Complete)
- Replace Staff Members In an Investment (Partial or Complete)
- Replace a Role with Another Staff Member
- Replace a Resource with Another Staff Member
Reallocating Staff Members (Partial or Complete) The Resource Reallocation and Resource Replacement capabilities have been enhanced to ensure they support partial reallocation. Partial allocation ensures that Clarity only updates allocations within the specified date range and allocation percentage. It provides the following advantages.
- Prevent Resource Overallocation: One of the primary reasons for implementing partial allocation is to avoid the
overallocation of resources. When team members are allocated across multiple investments, it is critical to ensure they aren't booked beyond their capacity.
- Enable Work on Multiple Investments: Partial allocation enables resources to contribute to multiple investments simultaneously. Instead of dedicating resources full-time to a single project, you can allocate them at specific percentages across different investments.
- Create More Accurate Staffing Plans: Implementing partial allocation allows for more realistic investment planning since you enter the actual time a resource is expected to work on an investment, versus blocking them for the duration of the entire investment. You can reallocate resources and roles associated with investments in the Staff module. When you are reallocating resources or roles, you can update the following attributes:
- Start
- Finish
- Default Allocation Follow these steps: 1. Log into Clarity and click the relevant investment.

2. Select the Staff tab. 3. Right-click a resource/role and select Reallocate. 4. In the Reallocate "Investment Name" window:
a. Toggle the Use Investment Start and Use Investment Finish toggles to either reallocate the resource/role for the entire investment duration or specify the new Start and Finish dates.
b. Set the Default Allocation percentage. c. Select Partial or Total override type. Partial allocation ensures that Clarity only updates allocations within the
specified date range and allocation percentage. d. Click Reallocate to complete the process.
Replace Staff Members In an Investment (Partial or Complete) You can also use the Staff module to replace roles and resources in investments. You can replace the following staff members:
- Replace a role with a different role, a team, or a resource.
- Replace a resource with a different resource, team, or role.
- Replace a team with a different team, a resource, or a role. Follow these steps: 1. Open an investment and click Staff. 2. Right-click a resource and click Replace. 3. In the Replace "Resource Name" window:
a. Toggle the Use Investment Start and Use Investment Finish toggles to either replace the resource/role for the entire investment duration or specify the new Start and Finish dates.
b. Select Partial or Total override type. Partial allocation ensures that Clarity only updates allocations within the specified date range.
c. Click Replace to complete the process. 4. You can also double-click the resource, role, or team that you want to replace.
a. Complete one of the following tasks:
- Search for a resource by name, ID, or primary role, or select from the drop-down list.
- Search for a role or select one from the drop-down list.
- Search for a team or select one from the drop-down list
Replace a Role with Another Staff Member Example: Derek wants to replace the project management role in this investment with a project management resource. With investment edit access and booking rights for the resource and role, you can replace a role with any other staff member (that is, resource, role, or team). The original role is either partially or completely replaced based on the following factors:
- The combination of booking rights on the existing role and the booking rights on the target role, resource, or team. If
the booking status of the role is hard, the role remains on the investment. The user with hard booking rights to the role can remove it.
- The project management setting Reassign Tasks when replacing Role. The setting is available in Classic PPM, under Administration. See Define Default Project Settings
When replacing a role, you can only select a target resource or team that is not already on the investment.

Replace a Resource with Another Staff Member
Example: Derek wants to replace Jason, a developer on his investment, with Sean since Jason has been transferred to another investment. You can replace a resource with any other staff member (that is, resource, role, or team). You can only select a target resource or team that is not already on the investment. You can add the same role multiple times to an investment. Hence, you can select a target role that is already on the investment to replace an existing resource. You require edit access to the investment and soft booking rights for the resources and roles. If the existing resource allocation is hard, then you require hard booking rights to replace the existing resource. A staff member replaces an existing resource based on the following rules: If you are replacing an existing resource with actuals posted on the investment, the following behavior applies:
- The target staff member is allocated based on the default allocation percentage.
- The target staff member is assigned to the tasks with the remaining ETCs.
- The existing resource remains on the investment and is assigned to tasks where actuals are posted.
- The existing resource allocation amount is reset to zero.
- All existing staff member task assignment ETC amounts are reset to zero.
If you are replacing an existing resource with task assignments, the following behavior applies:
- The target staff member is added to the remaining allocation and all relevant task assignments.
- The start date of the staff member allocations is set after the existing Resource ActThru date. The allocation rate of the
existing allocation is used for the remainder of the investment.
- For any task where the existing resource has booked actuals, the target staff member is assigned to the task with the
remaining ETC.
If you are replacing an existing resource without posted actuals, the following behavior applies:
- The target staff member replaces the existing resource for all allocations and task assignments.
- The existing resource is removed.
NOTE The same rules apply when you replace a team with a staff member.
Delete Staff Members in Investments
You can use the Staff grid to remove a resource from the investment. You require the following investment rights along with resource or role hard or soft booking rights to remove staff members from the grid.
- <investment> - Edit (Instance or OBS)
- <investment> - Edit Management (Instance or OBS)
- <investment>- Edit Management - All (Global)
You can always remove any roles from the investment staff. You can remove resources from the investment staff if they satisfy the following conditions:
- No posted actuals are associated with the resource.
- No requisitions in booked status are associated with the resource.
- If a resource has an associated requisition that is in booked status, you must first unbook and then delete the
requisition in Classic PPM. After that, you can remove the resource from the investment staff. See Manage Requisitions.
Follow these steps:
1. Open a investment and click Staff. 2. Click any cell in the row for the staff member that you want to remove.


3. Right-click the cell and select Delete Row from the grid context menu. 4. Removing a staff member from a investment does not delete the resource or role from the system.


Working with Mixed Bookings
This section contains the following topics:
- Leverage Mixed Bookings in the Staff Grid
- Typical Booking Process
- Enable Mixed Booking in Classic PPM
- Configure the Staff Grid for Mixed Bookings
- Edit Allocations When Mixed Booking is Enabled

Leverage Mixed Bookings in the Staff Grid
Consider a scenario where you want to implement agile planning where project and resource managers collaborate to make allocation and staffing decisions in Clarity. In such scenarios, resources are not booked for multi-year investments because the management team does not want to commit resources for the entire duration of the investment. Hence, resource and project managers are required to collaborate and plan allocations for their teams constantly. The typical booking process followed in such scenarios is given below:
- Project Managers (PM) input soft-booked allocations for all the resources required for a given investment and its duration.
- Project managers capture soft allocations.
- Resource managers collaborate with project managers to gain alignment and then convert soft allocations to hard
allocations.
The collaboration between project and resource managers is a continuous activity that typically occurs on a quarterly cadence, which results in the following views for a given investment.
NOTE When you allow mixed bookings in Clarity, a user with 'Project - Manager (Auto)' rights can modify allocation data for resources in the Team Detail page. When you update the settings to prohibit mixed bookings, a user with 'Project - Manager (Auto)' rights will not be able to modify resource allocation data. This behavior is permitted because the Allow Mixed Booking option in Clarity enables you to have different values for planned allocation and hard allocation on a team record. Project Managers can adjust the planned allocation based on investment requirements but cannot update the hard allocation field without the necessary booking rights. Resource Managers or users with relevant rights can update the hard allocation field after negotiations with the project manager. The Accept Hard Allocation and Commit Planned Allocation actions in Clarity, enable resource managers to synchronize the planned and hard allocation curves.
Typical Booking Process
Project Managers (PM) input soft-booked allocations for all the resources required for a given investment and its duration. Project Managers are capturing `planned' allocations. Resource managers have a `conversation' with the PM to gain alignment and then convert planned (soft) allocations to committed (hard) allocations. The conversation typically occurs on a quarterly cadence, which results in a mixed booking. A team member is mixed-booked when the planned allocation and hard allocation are not equal.


Enable Mixed Booking in Classic PPM If you want to enable mixed booking in Classic PPM, you can request your administrator to enable this feature in Classic PPM. Follow these steps: 1. Open the Administration menu, and under Project Management, select Settings. 2. Select the Allow Mixed Booking checkbox and click Save.
Configure the Staff Grid for Mixed Bookings After you have enabled mixed booking in Classic PPM, ensure you perform the following activities on the Staff grid to use mixed bookings successfully.
- Use the Column Panel to add Totals (Allocations, Hard Allocations) and Hard Allocations attributes to the Staff grid.
- Use View Options to select Allocations and Hard Allocations in the PER-PERIOD METRICS drop-down list.
Edit Allocations When Mixed Booking is Enabled You can now enter both Allocations (soft) and Hard Allocations Totals or Per-Period Metrics. If you enter totals, the value is distributed evenly in the per-period metrics. The booking status is automatically set to Mixed when the 'Allocations' data and 'Hard Allocations' data do not match. Let's review some of the rules for Mixed, Hard, and Soft booking statuses when mixed booking is enabled in Clarity.
- You cannot directly change the booking status to Mixed. It is automatically set when the Allocations data does not
match the Hard Allocations data.
- You can directly change the booking status from Mixed to Hard or from Mixed to Soft.
- If the current booking status is Mixed and you update Allocations or Hard Allocations, the status will remain Mixed
unless:
- Allocations now match Hard Allocations
- Hard Allocations are completely removed
- If you manually remove all hard allocations, the booking status is automatically updated to soft.
Working with Allocation Values
This section contains the following topics:
- Allocation Values
- Update Cell Values in the Totals Column and Per-Period Columns
Allocation Values The following image demonstrates how project staff allocation totals can vary in different columns:

The Allocation column on the left is sometimes known as a scalar field value. The value on the right (Totals | Allocations) derives its value from your per-period metrics, which are in turn, based on time-scaled value (TSV) fields and fiscal periods in Classic PPM. You might see two different values; however, the behavior is valid. The differences are more noticeable with FTE units. The scalar allocation value uses the exact date boundaries of the start and finish dates for the row. The per-period metric total allocations use the start date of the start period and the last date of the end period selected. The calculation is derived in a different way. You could observe a larger TSV range than the date range for the row in the grid. This behavior explains why the totals, especially for FTE values, can sometimes vary.
- Allocation (expressed in FTE or hours) = allocation worktime
- total work time
- Allocation is defined as the amount of time that a resource is allocated on an investment as a proportion of total
possible work time, not calendar time.
- A typical workday is often 8:00 a.m. to 5:00 p.m. less an hour for lunch. Eight (8) hours * 3600 = 28,800 seconds per
day.
- In a typical week, a resource might be allocated for five (5) days. Their allocation is 28,000
- 5 = 144,000 seconds.
- Total possible work time between two dates in a typical week might be 5 days
- 8 hours per day
- 3600 = 144,000
seconds.
- In this example, resource allocation over the 5-day workweek is allocation worktime (144,000)
- total worktime
(144,000) = 1 FTE. Classic PPM calculates a total allocation value for a given resource that represents how many seconds they are allocated to the project relative to the total possible work time for the duration of that allocation segment. The application also factors in your per-period metrics to calculate a dynamic total for your currently selected time periods. You see a column labeled Totals | Allocations and multiple columns labeled with your choice of time period followed by Allocations under each period label.Unlike the Total Allocation scalar value calculations, the allocated work time in the per-period columns represents the sum of the allocations, not across the project, but only for the duration of the periods in your current view. When calculating the dynamic totals for the allocations, the application determines how long a resource is allocated for the duration of the periods and divides that number by the total work time available during the same dynamic period. The numbers can represent various planning periods including a paradigm where you select time periods that extend beyond the date range of the original allocation. This explanation accounts for what some users perceive as variations in the data. Example: The following example shows two resources with different allocations. The resource manager is attempting to plan six (6) months from today. The application normalizes the data and calculates allocations as expected across the selected periods.
Update Cell Values in the Totals Column and Per-Period Columns The STAFF and ASSIGNMENTS grids support the following subtle features and options:
- You can configure the grid (click Column Panel) to show allocation values in a Totals column, in per-period metric columns, or in both.
- When you show both, you can enter separate values in each per-period column and see them counted toward the value in the Totals column.
- Conversely, you can enter one value in Totals and watch the application dynamically spread the allocation across the remaining periods in the current view.
You can also copy and paste values spanning multiple cells; however, exercise caution as you might get unexpected results.
- When copying and pasting in a grid, verify the cell dimensions and columns you want to copy and paste are the same.
- We recommend that you avoid copying and pasting values from inside both the Totals column and per-period metric
columns in the same operation. Use one or the other. In other words, do not attempt to update values for the Totals column and for per-period columns in a single paste operation.
Rules Applicable in Staff Grid
This section contains the following topics:
- Business Rules for Labor Resources
- Business Rules While Using the Staff Grid
- Business Rules for Non-Labor Resources
Business Rules for Labor Resources
- Labor resources must have availability greater than zero.
- For zero demand, when adding labor resources to investment teams, set the allocation percentage to zero and task
assignments will then not have any ETC amounts.
- If you don't want a specific labor resource to show up with any capacity, you can create a non-standard calendar with
all non-working days.
- The allocation and ETC values are also impacted by the resource's availability within their associated calendar.
Therefore, even if the resource has a non-zero availability setting, and when the resource is added to the team or a task, the actual amount of allocation or ETC that is computed is dependent on the resource's calendar availability and the resource's hire and termination dates.
Business Rules While Using the Staff Grid Observe the following business rules when staffing projects in Clarity:
- You can add labor and non-labor roles by using the Staff grid in projects.
- You can perform role replacements using the Staffing functionality, the Project Staff grid, or the Project Assignments
grid.
- If you have a project template where roles are assigned to the team, and you create a project from this template in Clarity, labor and non-labor roles appear in the project Staff grid.
- If you have a project template where roles are assigned to the tasks, and you create a project from this template in Clarity, the roles are still assigned to the tasks in the new project. You can replace the roles with named resources by using the Staffing functionality, the Project Staff grid, or the Project Assignments grid.
- Verify that the following attributes on the Team object have a default value that is defined in Classic PPM. If a default value is not defined for these attributes, users are unable to edit the team records from a project in Clarity:
- Booking Status
- Request Status
- Requisitions are not supported in Clarity
Business Rules for Non-Labor Resources
- If a non-labor resource has zero availability, then when the resource or role is added to an investment team, there will be zero allocations and zero ETC.
- Expense Resources and Roles will always have zero availability.
- It is not possible to configure an Expense resource or role with availability.
- You do not use Expenses for tracking work effort or hours.
- However, Equipment and Material and Labor Resources all can have zero or non-zero availability. These types of
resources can be scheduled within the investment for performing work or in the case of Equipment or Materials, can be scheduled for hours of usage.
Access Rights to Staff Investments

Access Rights for Using the Staff Grid
The following business logic determines how the application adds resources and roles as staff members:
- The combination of project and booking access rights of the project manager.
- The default Booking Status setting for the Team sub object in Classic PPM
In the default configuration, Booking Status is set to Soft so that users with soft booking rights can add staff members. System administrators can change the default setting to Hard to allow only users with hard booking rights to add staff members.

Access Rights
- Project - edit
- Resource - hard booking
- Project - edit
- Resource - soft booking
- Project - view
- Resource - hard booking
- Project - view
- Resource - soft booking

Default Booking Status is Soft
- A staff member is added
- Booking Status is set to Soft
- A staff member is added
- Booking Status is set to Soft
- A staff member is added
- Booking Status is set to Soft
- Cannot add a staff member

Project Edit and Hard Booking Rights

Default Booking Status is Hard
- A staff member is added
- Booking Status is set to Hard
- Cannot add a staff member
- A staff member is added
- Booking Status is set to Hard
- Cannot add a staff member


Depending on the staff member booking status, you can edit the following attributes with project edit access and resource or role hard booking rights.

Project Access

Resource/Role - Hard Book Staff Booking Status is Soft

Project - Edit (Instance or OBS)
This access right includes the Project - Edit Financial access right which allows edits to the Capitalization % field.

Edit the following attributes:
- Staff (resource or role name)
- Project Role (paired with Resource -
View access on roles)
- Booking Status
- Open for Time Entry
- Start/Finish (change allocation dates
within the project date range or extend
the allocation beyond the project date
range)
- Default Allocation
- Capitalization %
- Custom staff fields
- Requested Manager (for roles)
- Project - Edit Management (Instance or

OBS)
- Project - Edit Management - All (Global)

These access rights do not include the
- Project
- Edit Financial access right.
- Staff (resource or role name) Project Role (paired with Resource View access on roles) Booking Status Open for Time Entry Start/Finish (change allocation dates within the project date range or extend the allocation beyond the project date range) Default allocation Requested Manager (for roles) Custom staff fields

Resource/Role - Hard Book
Staff Booking Status is Hard
Edit the following attributes:
- Staff (resource or role name)
- Project Role (paired with Resource -
View access on roles)
- Booking Status
- Open for Time Entry
- Start/Finish (change allocation dates
within the project date range or extend the allocation beyond the project date range)
- Default Allocation
- Capitalization %
- Custom staff fields
- Requested Manager (for roles)
- Staff (resource or role name)
- Project Role (paired with Resource -
View access on roles)
- Booking Status
- Open for Time Entry
- Start/Finish (change allocation dates
within the project date range or extend the allocation beyond the project date range)
- Default allocation
- Requested Manager (for roles)
- Custom staff fields

Project View and Hard Booking Rights
Depending on the staff member booking status, you can edit the following attributes with project view access and resource or role hard booking rights.

Project Access

Resource/Role - Hard Book Staff Booking Status is Soft
- Project - View (Instance or OBS)

Edit the following attributes:
- Project - View Management (Instance or

OBS)
- Project - View Management - All

(Global)
- When paired with Resource HARD BOOKING, the user can edit most of the STAFF fields.
- Staff (resource or role name) Project Role (paired with Resource View access on roles) Booking Status Open for Time Entry Start/Finish (change allocation dates within the project date range or extend

the allocation beyond the project date

range)
- Default Allocation
- Requested Manager (for roles)
- Custom staff fields

Resource/Role - Hard Book Staff Booking Status is Hard
Edit the following attributes:
- Staff (resource or role name)
- Project Role (paired with Resource -
View access on Roles)
- Booking Status
- Open for Time Entry
- Start/Finish (change allocation dates
within the project date range or extend the allocation beyond the project date range)
- Default Allocation
- Requested Manager (for roles)
- Custom staff fields


Project Edit and Soft Booking Rights
Depending on the staff member booking status, you can edit the following attributes with project edit access and resource or role soft booking rights.

Project Access

Resource/Role - Soft Book Staff Booking Status is Soft

Project - Edit (Instance or OBS)
This access right includes the Project - Edit Financial access right which allows the editing the Capitalization % field.

Edit the following attributes:
- Staff (only role name)
- Project Role (paired with Resource -
View access on roles)
- Open for Time Entry
- Start/Finish (change allocation dates
within the project date range or extend the allocation beyond the project date range)
- Default allocation
- Capitalization %
- Requested Manager (for roles)
- Custom staff fields
- Project - Edit Management (Instance or

OBS)
- Project - Edit Management - All (Global)

These access rights do not include the
- Project
- Edit Financial access right.
- Staff (only role name)
Project Role (paired with Resource View access on roles)
Open for Time Entry
Start/Finish (change allocation dates within the project date range or extend the allocation beyond the project date range)
Default allocation
Requested Manager (for roles)
Custom staff fields
- Project - View
- Project - View Management

View only

Resource/Role - Soft Book Staff Booking Status is Hard Edit the following attributes:
- Staff (only role name)
- Project Role (paired with Resource -
View access on roles)
- Open for Time Entry
- Default allocation
- Capitalization %
- Requested Manager (for roles)
- Custom staff fields
- Staff (only role name)
- Project Role (paired with Resource -
View access on roles)
- Open for Time Entry
- Requested Manager (for roles)
- Custom staff fields
View only

Project Edit and No Booking Rights


Depending on the staff member booking status, you can edit the following attributes with project edit access and no resource or role booking rights.

Project Access Project - Edit (Instance or OBS) This access includes Project - Edit Financial which provides an ability to edit Capitalization %.
- Project - Edit Management (Instance or OBS)
- Project - Edit Management - All (Global)
These access rights do not include the Project
- Edit Financial access right.
- Project - View
- Project - View Management

No Booking Rights
Edit the following attributes:
- Staff (role name only)
- Project Role field (paired with Resource - View access on
roles)
- Open for Time Entry
- Capitalization %
- Requested Manager (for roles)
- Custom Staff fields
- Staff (role name only)
- Project Role field (paired with Resource - View access on
roles)
- Open for Time Entry
- Requested Manager (for roles)
- Custom Staff fields
View only

NOTE Please review this Knowledge Base Article for more information.

Investment Phases, Milestones, Tasks, and To-Do Items
Tasks in Clarity represent fundamental units of work within investment projects that form the backbone of project management and execution. A task is specifically defined as "a unit of work in a plan that is assigned to one or more resources for a specified period". These tasks can incorporate milestones to measure progress and can be organized hierarchically within a comprehensive work breakdown structure (WBS) that includes phases, milestones, and task relationships. The task management system in Clarity operates within a structured framework where tasks can be grouped under common phases in the project lifecycle. Some key terms you need to remember are:
Tasks: A task is a unit of work in a plan that is assigned to one or more resources for a specified period. A task can have milestones to measure progress.
Milestones: Milestones help you track and measure progress. For example, add a milestone named planning phase gate complete. The milestone is complete only when all the tasks in the planning phase are completed.
Phases: You can group related tasks and milestones under a common phase in the project lifecycle. For example, create a planning phase followed by a design phase. You can break the planning phase into tasks such as defining a resource plan, identifying infrastructure requirements, and defining storage requirements. Phases show their aggregated actuals and ETC for their child tasks.
This section contains the following topics:
- Video: Introduction to Tasks
- Understanding Task Characteristics
- Field Level Security in Tasks
- Working with Subprojects
- Key Points to Consider


Video: Introduction to Tasks The following video gives you an introduction to tasks.
NOTE This video will not be available when you download the documentation in PDF format. Click here to watch the video on YouTube. Understanding Task Characteristics The following characteristics apply to tasks:
- You can assign only labor resources and roles and define teams as staff members to tasks.
- If the new staff member replaces a specific project role, you can remove the role from the task.
- You cannot change the start date for a task with posted actuals.
- You can convert a task to a phase or a milestone by changing its type in the task details. You cannot convert a task containing posted actuals or assignments.
- You can convert a phase to a task or a milestone by changing its type in the phase details. You cannot convert a phase if it has child tasks.
- If a task is associated with a phase, you cannot convert the task to a phase.
- Marking a task as completed sets the ETC to zero (0) and the Percent Complete to 100%.
- To delete a task, navigate to the Details page of the task and click DELETE TASK. You cannot delete a task if the task has posted actuals. Field Level Security in Tasks You have the following capabilities while using Field Level Security(FLS) with Tasks: 1. Task object attributes can be secured using field-level security. The Task FLS applies to 124 unique attributes. 2. Administrators have the flexibility to modify or rename out-of-the-box field labels (Example: "User Value 01" attribute is re-labeled as "Existing Assets" in the Attributes page). a. A visual indicator appears to identify fields under field level security control. b. The Tasks column configuration panel propagates field re-labeling(Example: "Existing Assets" is displayed in Tasks that is re-labeled from "User Value 01"). To learn more about using the Field Level Security grid, see Secure Field Level Access.


Working with Subprojects


As a project manager, use subprojects to group related projects under one master project for scheduling purposes. Establishing subproject associations lets you create plans and track and analyze an individual project in detail. The associations also help view, summarise, and analyse the progress of several projects at the master project level. You can use master projects with subprojects to perform top-down planning and to share resource availability across projects.
NOTE Some key points to remember are:
- Subprojects are only available for the Project Tasks module.
- The 'Add Subprojects' action is only available from the Timeline view.
- Subproject(s) are visible as a proxy Task within the Timeline, Board, and Grid views. You cannot access
Subproject data from only the Timeline layout.
- You cannot move tasks between Master and Subprojects or between Subprojects.
- While the `Collapse All' option will collapse Master and Subprojects, the Expand All option will expand the
Master Project.
- Subprojects can be positioned anywhere and task dependency lines can be drawn from the subproject to the
master project.
- Users with relevant permissions can add new child or sibling tasks directly into the subproject.
- You can add the "Is Subproject" attribute to the grid to view the list of proxy tasks that are subprojects in the
Grid layout.
Follow these steps:
1. Open the project and click Tasks. 2. Open the Tasks page and click Timeline. 3. Click Actions and click Add Subprojects. 4. In the Select from Projects grid, identify the relevant projects and select Add. 5. Expand the subproject to view all the tasks associated with it. You can now manage the tasks associated with the
subproject by performing the following activities: a. Collaborate with Stakeholders b. Create To Do items for task c. Assign Staff Members to tasks


d. Add Links to tasks e. Create and organize Tasks in a Hierarchy
Create Custom SubObjects for Investments


You can create Sub-Object instances using the New button for Projects, Ideas, and Custom Investments and abstract investment custom sub-objects. If your administrator has enabled the Enable Create Dialog toggle in the Master Object blueprint for a particular Sub-Object, then you can see a button within the Sub-Object called "New [Sub-Object]". This button appears on the Sub-Object grid, timeline, and board (including new card wherever applicable). When you click the New [Sub-Object] button, a create dialog similar to the create from template modal appears. The new create Dialog is based on the attributes configured in Edit Module Details for a sub-object in the Object Blueprint. Your administrator can enforce required (Always true and conditional required) attributes using blueprint business rules. These required attributes will have an asterisk indicating that you must provide values for these attributes to create the instance. To learn more, see Create Custom Sub Objects.
Key Points to Consider Some key points to remember while working with tasks are:
- Task Assignment and Status: Only labor resources, roles, and defined teams can be assigned to tasks. Tasks with posted actuals cannot have their start dates modified. Marking a task as complete automatically sets ETC to zero and Percent Complete to 100%.
- Per-Period Metrics: Actuals, ETC, and Total Usage provide essential visibility into labor resource consumption patterns, tracking completed work, remaining forecasts, and complete demand - critical for capacity planning, earned value analysis, and ensuring resources align with project timelines and budgets. Since you can view these attributes as per-period metrics, you can get period-specific trends such as early-month actuals delays, mid-quarter ETC spikes indicating scope changes, or Total Usage peaks that signal upcoming capacity constraints, enabling proactive staffing and schedule adjustments.
- Task Type Conversion: Tasks can be converted to phases or milestones, except when they contain posted actuals or assignments. Phases cannot be converted if they have child tasks, and tasks associated with phases cannot be converted into phases themselves.
- Data Integrity: Tasks with posted actuals cannot be deleted, ensuring historical project data remains intact.
- Dependency Rules: Dependencies cannot be created from phases and summary tasks. External dependencies
require appropriate access rights to external investments and maintain integrity even when tasks extend beyond project finish dates.
- Autoschedule Limitations: Constrained tasks are prioritized over non-constrained tasks; however, the system overrides this prioritization if it violates dependencies or causes resource over-allocation. Tasks with dependencies or assignments cannot be converted to summary tasks.
- Field Level Security: Task FLS secures unique attributes with visual indicators for secured fields. Users need appropriate combinations of investment edit rights and resource booking rights to modify staff assignments.
Standard Features Across Layouts
This section contains the following topics:
- Smart Task Creation
- Collaborate with Stakeholders on Tasks
- Create To-Do Items
- Assign Staff Members to Investment Tasks
- Managing Task Dependencies
- Add Fields to the Details Panel
- Change Unit of Measure for Work Effort
- Edit Task Duration in Clarity
- Group Tasks Based on a Role or Status
- Add Helpful Links to Tasks
- Update ETC for a Task
- Delete Tasks and Phases
- Working with Widgets


Smart Task Creation


You can now use the Smart Task Creation capability to create new tasks that override the Default Start and Default Finish dates in Classic PPM. In previous releases, when you created a new task in an investment, Clarity automatically applied the default start and finish dates. If these dates were outside the existing investment start or finish dates, Clarity automatically shifted the investment dates.
Clarity administrators can now select the Set New Task Start and Finish Dates Using Parent or Investment Dates option. Clarity will enforce the following behaviours when users create tasks.
- New Task button or (+) button: Creates a new task at Level 1 of the WBS and inherits the investment dates.
- Insert Row Below button(Flat grid action): Creates a new task at Level 1 of the WBS and inherits the investment dates
in a flat grid list.
- Insert Sibling Task (Timeline or Expandable Tree Grid Action): Creates a new task at the same level as the source task
and inherits its dates from the source task's parent.
- Insert Child Task (Timeline or Expandable Tree Grid Action): Creates a new task at one level below the source task
and inherits the source task's dates, making the source task the Parent Task for the newly created task.
NOTE Some key points to remember are:
- Administrators must select the "Set New Task Start and Finish Dates Using Parent or Investment Dates" option to enable Smart Task Creation.
- Ensure administrators have selected the Default Date for the Task Start and Finish Date attributes to ensure the Smart Task Creation feature works properly. If either the Task Start date or Finish date field does not have a Default Date set in Classic PPM, not all actions for creating a new task will pull in the Parent or Investment Dates.
- Moving the task bar forward or backward, or changing task dates, may push the Investment Start or Finish Date out, depending on the change or the task's duration. Use the Duration field to adjust the task before changing the Start Date. Change the Finish Date to an earlier date to reduce the Duration before changing the Start Date.

Collaborate with Stakeholders on Tasks
You can start conversations with the team members of the project to collaborate on a particular task. You can use these conversations to record discussions and decisions related to the task or to request a team member to perform an activity for the task.
Follow these steps:
1. Navigate to the Tasks tab. 2. In Timeline, Board, or Grid layout, select a task. The Details panel appears. 3. Click the Conversations tab, and add your comment. Use @resource name to address a specific team member and
post your conversation. NOTE You can only address the resources added in the STAFF tab. The mentioned user will get the notification when they click the Notification bell icon in Clarity.
Create To-Do Items
Create to-do items for a phase, a milestone, or a task to break down the work into smaller activities. For example, the Plan Database Upgrade task can include the following to-do items:
- Receive Management Approval
- Schedule DBA Resource
You can create a maximum of 25 to-do items for a task. The status of the to-do list items does not affect the status of the parent task. You decide when the task is complete. You can expand and collapse the Open and Completed sections for to-do items.
Follow these steps:
1. Navigate to the Tasks tab. 2. In Timeline, Board, or Grid layout, select a task.
The Details layout is displayed in the right pane. 3. Click the To Do tab. 4. In the Open section, click NEW TO DO and enter a short description (upto 256 characters) in the Add a To Do field,
and press Enter. 5. Click the date picker to add an optional due date. The due date must fall within the start and end date of the parent
object such as project or investment item. 6. Click Assign to select an optional owner for the to-do item. You can select any active labor resource, role, or team
for which you have at least the Resource - View access right. Resources, roles, and teams that are available for the task owner are also available for the to-do items. You can update the owner or due date at any time for both open and completed items. 7. To mark an open to-do item completed, select the empty circle icon next to its name. 8. The item moves to the Completed section with a checkmark icon to indicate its completed status. 9. To reopen a to-do item, click the checkmark and the item moves back to the Open status.
Assign Staff Members to Investment Tasks
Assign work at the task-level when you want specific resources, roles, or teams to work on a task. Sid, the Project Manager wants to assign an Architect, a developer, and a UX Designer to the Research and Development task so that they all work in tandem to complete the R&D work with the desired outcome.
1. Click the Tasks tab. 2. Click on the task that you want to assign resources to. In this example, click the Research and Development task. 3. Click the DETAILS panel.

4. Click on the Assignments tab in the Details panel. 5. Add the resources, teams, or roles that you want to assign to the task.
The selected staff are assigned to the task. You can modify or delete the assignments until any actuals are posted for the assignment. 6. Click Expand to use some key capabilities of the common grid such as Views, Group-by, Filter, and Export to CSV.
For more information about assignments, see Assign Project Tasks to Resources, Roles, and Teams.
Managing Task Dependencies
The Task Dependencies module is now available as a subtab on the Details panel in the Tasks module and the Tasks workspace. This tab allows users to see complex dependencies, such as Start-to-Start and Finish-to-Finish dependencies, with leads and lags in the predecessors and successors.
The Dependency subtab grid displays the primary dependency property fields, such as the relationship of the dependent task, the type of relationship, and the Lag time as default attributes. If the Lag Type is Daily, the Lag number represents the working days between the task and the dependent task. When a 'Percent' Lag type is selected, the Lag number represents a percent of the duration of the predecessor task to determine the number of working days between the two tasks. Using the 'Lag' field only impacts the schedule when using 'Autoschedule'; changing the number does NOT automatically move the dependent task.
The most common type of dependency is where both tasks are within the same investment. However, if external task dependencies are created from Classic or PPM Gantt, the Dependent Investment Name and ID values can be used to identify external dependencies.
NOTE If there are external dependencies, they are not listed as a task in the list of tasks within the investment. You can only see external tasks for a project with an associated sub-project.
Follow these steps:
1. In Timeline, Board, or Grid layout, select a task. The Details panel is displayed.
2. Click the Dependencies tab. 3. Click Expand. 4. Review the dependencies in the Dependencies page.
NOTE To learn more about creating dependencies, see Managing Tasks in the Timeline Layout.
Add Fields to the Details Panel
Your administrator can configure which attributes are available for other users to add or remove on the Details tab of the DETAILS panel. As a user with sufficient access rights, you can choose additional fields and arrange them on the layout.
Follow these steps:
1. In Timeline, Board, or Grid layout, select a task. The DETAILS panel appears.
2. Click the DETAILS tab. 3. Click Configure. 4. Enter the name of the field. As you start typing, you will see the matching fields. 5. Drag-and-drop the required field from the list to the Details tab. You can move the fields around and place them in the
order that you want. TIP Place all the mandatory fields (indicated with an * asterisk) together at the top for ease-of-use.

6. Click Exit when you are done.
Follow these steps:
1. In Clarity, open an investment item, and navigate to the Tasks module. 2. In Timeline, Board, or Grid layout, select a task. TheDETAILS layout appears. 3. Click the DETAILS tab. 4. Click CONFIGURE. 5. To search for a field (task attributes) enter all or part of its name in the search bar. 6. Matching fields appear. 7. Drag a field from the list of fields to the DETAILS panel layout. Drop the field on the top of an existing field. 8. Your new field appears on the layout above the existing field. 9. To reorder the sequence of fields, you can drag-and-drop them into a new arrangement. 10. To remove a field, select it on the layout and then click X Remove. 11. Click EXIT.
Some key attributes you can see on the Details tab are:
- Owner: Defines a resource or a defined team as the owner of the task. You cannot select a role as the task owner. The owner does not need to be a staff member.
- Estimate To Complete (ETC): Defines the total remaining work for the task in resource hours (total hours - actuals). Points to note:
- The initial value is automatically populated based on the availability and allocation of the resources (assignees) that are assigned to that task.
- You can overwrite the default ETC value at any time with your own estimate.
- If you change the value at the task level, the associated assignments are also updated except any assignments with actuals or an ETC of zero (0.0) since no further ETC is expected in this scenario.
- All ETC from all tasks is aggregated at the phase level. Before you can enter an ETC value, create an assignment for the task.
- Percent Complete: Defines an estimated percentage of the amount of work that has been completed on a task. You can edit the percent complete value if the % Complete Calculation field is set to Manual in the project settings in Classic PPM.
Example: In this example, the user enters only the letters CR in the word critical to locate the Critical field. The user drags the Critical field on the top of the Status field to position it above that field. The user clicks EXIT and the new field is available for updates by other users.
TIP A couple of rules that apply when you change the task dates are given below:
- When you change the Task Finish date the Task Duration is updated. However, the Start Date does not change.
- When you change the Task Start date the Task Finish date is updated. However, Task Duration does not change.
Change Unit of Measure for Work Effort
You can change the unit of measure for the work effort on tasks. This personalization is only applicable to you and will not impact other users' views. You can set the unit of measure to FTE, Hours, or Days.
1. Click the drop-down menu next to your avatar and select Settings. 2. Click General to change the Unit of Measure. To view the effort in hours, set the unit of measure to hours.
Any actuals, ETC, and total effort values in the task are updated as per the new unit of measure. For example, an ETC value of 2 FTE changes to 16 hours for a one-day task assuming an availability rate of 8 hours a day.


Edit Task Duration in Clarity


You can edit the Task Duration field within the Task Timeline, Grid layout, and Details panel. When you update the Task Duration field the Finish Date is updated accordingly. The grid layout provides a couple of additional ways to update the grid.
- Use the Bulk Edit capability to edit multiple fields in one go.
- Use the "+" or "-" options to increase or decrease the duration of the task.
NOTE In some cases, you cannot modify Task Duration due to internal business rules such as committed actuals, ETCs, or other logic.
Group Tasks Based on a Role or Status You can group tasks based on an attribute to view the task distribution better. For example, you can group tasks by the Role attribute to view the tasks assigned to each role, or by Status to get a quick summary of tasks in each status.
NOTE You can group tasks only in the grid view. Follow these steps: 1. Open the Tasks tab and switch to the grid view. 2. Drag the desired column header to the Group By bar. For example, drag the Status column header to the Group By bar to view the tasks grouped by their status.
NOTE To group by another column, drag that column to the Group By bar. The previous column is automatically removed and the data is grouped by the new column. You can group by only one column at a time.

Add Helpful Links to Tasks The TASKS page supports the entry of one or more helpful links to external sites that might help the task owner to complete their work. For example, a financial task might include a link to a financial index and a construction task might include a link to a site that captures important weather and environmental data.Follow these steps: 1. In Clarity, open an investment item, and navigate to the Tasks module. 2. In Timeline, Board, or Grid layout, select a task. The DETAILS layout appears. 3. Click the Links tab. 4. Click NEW LINK.
a. Enter a URL to an external link. b. Enter a user-friendly LINK NAME. 5. Click DONE.
NOTE Dynamic links with project-sensitive variable parameters are not supported. (Those dynamic link options are available with CHANNEL and LINK project blueprint modules.)
Update ETC for a Task You can update the ETC at the task-level.
- Timesheets only pull in tasks that have non-zero ETCs.
- Clarity does not support assignment-level ETC updates.
- If you update the ETC at the task-level, application rules prevent additional ETC from being added to assignments
with actuals and zero (0.00) ETC. To override this type of assignment, update the ETC directly on the assignment (not through the task-level ETC spreading).
Follow these steps: 1. In the Tasks tab, expand the Columns panel in the right pane and add the ETC column. Alternatively, click the
DETAILS panel. 2. Update the ETC.
The application spreads the total value proportionately over all the assignments.
Delete Tasks and Phases You can delete tasks that do not have any actuals recorded. Deleting the last child task under a summary or phase task converts the phase task into a regular task. Refresh the page to see the phase tasks that are now no longer phase tasks in the incoming lane. To delete a project phase, delete all child tasks and milestones under the phase. You cannot delete a phase with tasks or milestones under it.
Working with Widgets You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. In this release, the following widgets are available:
- Number Tile
- Pie
- Bar
- Progress Ring
- Target (Roadmaps and Staffing Workspace) Some of the key actions you can perform with widgets are:
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
Managing Tasks in the Grid Layout
This section contains the following topics:
- Introduction
- Setup View Options
- Managing Records By Using the Grid Layout
Introduction
NOTE This video will not be available when you download the documentation in PDF format. Click here to watch the video on YouTube.
The grid view lets you view tasks in a grid as rows of data. Use the task grid to sort, filter, and configure the view to suit your needs for better data entry. Each row in the grid displays the following details for tasks and milestones:
- Name
- Start and Finish dates
- Status
- Owner
Setup View Options Follow these steps: 1. Log into Clarity


2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click View Options. 4. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.
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


5. Select the Show Expandable Tree toggle to view and manage the hierarchical Work Breakdown Structure (WBS) directly within the Investment Tasks grid.

NOTE

Some key points to remember are:
- The Show Expandable Tree option is not available in the Tasks workspace and the Hierarchy Tasks module.
- The Show Expandable Tree option includes Sub-Projects and External Dependent Tasks.
- The Show Expandable Tree option is available in the Projects and Custom Investments Tasks module.
- The Export to Export CSV action in the expandable tree generates the same output that the user would
see if they were using the flat list, even though their current view is using the Expandable Tree.
- Parent Tasks are not exported unless they match the filtering criteria.
- External dependent tasks are not exported.
- The Sub-Project proxy task and all its tasks are not exported.
- When an External Task belongs to a Subproject, the Task is shown in two places: next to the local task (with the icon) and within the subproject WBS (without the icon).
- When using a Business Rule on the Source Object for the Investment Type (CIT or Project) to `Disable Adding Child Objects' for the Tasks object
- The right-click context menu actions are disabled to prevent the user from adding new tasks through these actions.
- The `Copy from...' and `Add Subprojects' actions are disabled in the general `Actions' button menu to prevent the user from adding new tasks through these actions.
6. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.
7. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off. 8. To configure your own display attributes, choices, and the color of each value, click Manage Picklists, New Picklist.
a. Enter a name for your picklist in Picklist Name. Each picklist you define can be applied to the current project only.
b. To add value to your picklist, click Add Choice. Edit the name and color for each choice. c. Click Done. 9. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.


Managing Records By Using the Grid Layout
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
TIP
You can use the following features to effectively edit data in the grid:
- Relative Date Shifting: You can use the + or - option to shift the values in the date field. For example, you can enter "+2" to increase the date by two days. The date-shifting capability does not bypass business rules. You can also use the date-shifting capability when you are performing Bulk Edits in Clarity.
- Use the Drag Functionality to Populate Data: You can populate data in the grid layout by dragging the previous value. This will work for all attributes and you can drag multiple attributes together. The drag functionality supports number sequencing. To use this functionality, hover over a field and start dragging when the plus icon is displayed.
Managing Tasks in the Board Layout

You can use the Board layout to view items as cards. You can arrange these cards with drag-and-drop precision on a board layout with columnar swim lanes. Some key features associated with cards are displayed here:
- Edit Card Details within the Board Layout
- Using Filters within the Board Layout
- Move Cards within the Board Layout
- Using the Common Search Component
- Setup View Options for the Board Layout Edit Card Details within the Board Layout You can edit the card details by using the Details panel associated with the Board layout. You can open the Details panel by:
- Right-clicking a card and selecting Open Details.
- Selecting a card and clicking the Details tab.
- Double-clicking the card.
Using Filters within the Board Layout
You can use filters within the Board layout to view cards based on your filtering criterion. Filtering a lookup configured for Columns or Swimlanes will limit the number of columns/swimlanes displayed on the board. It allows users to show only specific columns or swimlanes to view and move tasks across columns and swimlanes easier. Some key limitations are:
- The Board layout only displays the first 10 records in the result set for columns. You need to filter to access other
columns.
- Clarity has a different behavior for static and dynamic lookups. For static lookups Clarity display all columns/
swimlanes, while for dynamic lookups the list will grow as the user scrolls and Clarity will dynamically add columns/ swimlanes.
- You cannot assign a card to a column that is not displayed.

NOTE Some key points to remember are:
- The board view does not provide the option to create new cards.
- In the old board layout, users were allowed to configure the same attribute on the fields and metrics sections
on the card. In the new board, you can only configure an attribute on either the metric or fields section but not both.
- When the column and swimlane are set to the same attribute, and you drag-n-drop the card to different values between the column and swimlane, then the column value will be used to set the card data.
- The Board layout will display blank till a column field is selected in the view options.
- Display Type settings in the Attributes grid are not being enforced on the board card if the attribute is configured with Studio display mappings.
- If the attribute configured for the "Column" field under View Options is used in a filter and no filter value is configured for the filter, the board layout will be blank.
- While the user can select sort order, they cannot change the ascending or descending direction within that order. It will always be ascending.
- Its recommended you use filters to identify your cards in the board layout. Move Cards within the Board Layout You can perform the following actions to move cards between columns and swimlanes in the board layout.
- Drag and drop single or multiple cards between columns or swimlanes.
- Right-click a card and select Move to column or Move to swimlane.
Using the Common Search Component
You can use the Search bar available across the board, grid, and timeline layouts to filter values based on the name or ID. Consider an example where you want to locate a specific task in an investment. You can simply type the first few characters of its name in the Search bar to locate it and edit it. The search values are not persisted when you save a view. Also, if you navigate away and return to the workspace, the search bar will be cleared. You can use the Search bar alongside the traditional filter available in Clarity. Consider an example where you use the filter to identity all the tasks that have not started and then use the search bar to look for a specific task. Clarity only displays results that meet the criteria of the filter and the Search bar.

TIP
- The Search bar is not available in Roadmaps, the Staff module, and the Assignments module.
- When you are using special characters in Search, you need to use "backslash" \ before the special character
to see relevant results. Consider an example where you have created a project named "GTM Transition %50 Takeover". If you simply use "%" in the Search box, you will see all the projects that you can access in Clarity. Use "\%" to Search for projects that include "%" in the Project Name.
Setup View Options for the Board Layout The View Options capability allows you to customize the Board layout. Follow these steps: 1. Navigate to the relevant page in Clarity. 2. Click the Board layout. 3. Click View Options. 4. Use Columns to specify attributes whose values will display as columns horizontally. 5. Use Swimlanes to specify attributes whose values will display as swimlanes that collapse vertically. 6. Use Sort to select an attribute to sort the cards within a column only. 7. Use Color to select a lookup attribute. If display mapping colors are configured for the attribute, it will display the color
as a vertical bar on the left side of the card. 8. Use Show Labels to show or hide labels. 9. Use Configure Card to configure various options that will be displayed on the card. 10. To configure your own display attributes, choices, and the color of each value, click Manage Picklists, New Picklist.
a. Enter a name for your picklist in Picklist Name. Each picklist you define can be applied to the current project only. b. To add value to your picklist, click Add Choice. Edit the name and color for each choice. c. Click Done.
Managing Tasks in Timeline Layout
As a project manager, you can create and manage all tasks in the Timeline layout. The Timeline layout is divided into a Work Breakdown Structure (WBS) on the left and a task timeline on the right. Both the WBS and the task timeline shows you all the sub-level tasks associated with the selected project/investment item.


This section contains the following topics:
- Overview of the Timeline Layout
- Create and Organize Tasks in the Work Breakdown Structure
- Personalize the Timeline Layout
- Explore Project Tasks in the Work Breakdown Structure
- Adjust Task Duration in the Timeline
- Add and Remove Dependencies
- Export Tasks in the Timeline Layout to PDF
- Copy Tasks From Investments
- Display Parent Tasks While Filtering
- Update Cost Totals for Projects and Custom Investments

Overview of the Timeline Layout

Create Task Phase
Summary Task Task
Milestone Filter View Options VIEW COLUMN DETAILS Legend

UI Label

Action
Allows you to create a new task in the WBS Represents the top-most level in the WBS for all the items below it. A phase can have multiple summary tasks under it. You can add the Phase Name attribute to the Tasks Grid and the DETAILS panel to view the phase associated with a task. Represents a group of related tasks and milestones A unit of work in a plan that is assigned to one or more resources for a specified period Allows you to track and measure the progress of tasks Allows you to quickly sort through tasks and identify relevant tasks Allows you to personalize the Timeline layout Allows you to save your settings and share them with other users Allows you to add fields to the Timeline grid Allows you to edit tasks Shows you the value associated with each color


Dependency Task Timeline WBS

UI Label

Action
Allows you to add and remove dependencies between various tasks
Displays tasks, sub-tasks, and how they are spread across the duration of the investment item depending upon the period selected in View Options
Displays the work-breakdown structure for the tasks in your investment item

NOTE This video will not be available when you download the documentation in PDF format. Click here to watch the video on YouTube.

Create and Organize Tasks in the Work Breakdown Structure
Depending on the template that you have used for creating the project, the tasks tab will be prepopulated with the tasks in the template. You can create additional tasks for your project-specific needs.
You can create tasks in all three layouts: Timeline, Board, and Grid. However, you can group tasks and organize them in the WBS only in the Timeline layout. So, if you want to create summary tasks and add detail tasks under the summary tasks, use the Timeline layout.
Follow these steps:
1. In the Clarity main menu, click the relevant investment page. 2. Open the investment. 3. Complete the following steps to create or edit tasks: 4. Use the + icon in the Timeline layout: A new level 1 task will be created in the WBS. 5. Click the Details panel change the task name and update the other values. 6. Right-click the task and select the INSERT CHILD option to create a subtask. Your existing task becomes a summary
task. NOTE
- You cannot create a child task for a milestone.
- A task with dependencies cannot be turned into a summary task.
- A task with assignments cannot be turned into a summary task.
- A summary task does not support assignments.
- When you delete the last child task below a summary task, it gets converted to a regular task. 7. Select a task in the WBS and right-click to select the INSERT SIBLING option to create a task at the same level directly under the task that you selected. 8. Drag and drop the tasks to change the order or move them around in the WBS. NOTE
- Drag and drop a task within the same summary task or phase
- Drag and drop a task to a different summary task or phase
- Drag and drop a summary task within a different phase or summary task
- All nested summary tasks and child tasks are automatically copied, and the timeline of the phase or summary tasks is appropriately adjusted
- Drag and drop a phase within another phase
- You cannot move a phase below a summary task
- You cannot move a phase below a child task of the same phase


Personalize the Timeline Layout
You can personalize the Timeline to ensure it meets your business requirements. Some key actions you can perform are:
- Select the relevant period and color by options
- Create and apply picklists
- Show or hide dependencies
- Add or remove fields from the timeline grid
- Compare the current schedule to the baseline
Follow these steps:
1. Open an investment item and click TASKS. 2. Click Timeline layout. 3. Click View Options. 4. Under PERIOD, select Weeks, Months, Quarters, or Years. The timeline displays the calendar periods In the
previous release, the Timeline showed fiscal periods. 5. Under COLOR BY, select a picklist to add color to your tasks based on the display mapping of the picklist values. For
example, select Status to display the tasks in different colors that indicate their status. All tasks that have started items appear in green. The LEGEND in the bottom right corner of the page shows the value associated with each color. If you collapse the legend, you can reopen it by clicking LEGEND. 6. To configure your own display attributes, choices, and the color of each value, click MANAGE PICKLISTS.
- PICKLIST NAME: Enter a name for your picklist. Each picklist you define can be applied only to the current
investment.
- ADD CHOICE: To add a value to your picklist, click ADD CHOICE. Edit the name and color for each choice. 7. Select the Show Dependencies checkbox to ensure dependencies are visible on the timeline. 8. When finished, click DONE. 9. Close the View Options window. 10. Click Columns and search for relevant fields to add them to the timeline. You can now edit task details by using the Timeline grid or the DETAILS panels. 11. Click Actions and select Compare to Baseline to view the current baseline in the Task Timeline. This option displays the baseline taskbars by using the current revision baseline task dates. You don't need any additional access rights to use the Compare to Baseline action.
Key Points to Remember:
- The Timeline includes the WBS column as a fixed column that cannot be hidden or moved to another column position in the grid.
- There is another attribute, "WBS Sort' which users can optionally add as a column in the table with the timeline in view
- and save the configuration in a View
- Within the Timeline, the "% Complete" progress bar is displayed for all tasks, including summary Tasks
- The color of a Timeline bar is driven by Task Status
- The "shading" of a Timeline bar is driven by Task % Complete
- You don't need to have access to the Baselines Module to use the Compare to Baseline action.
Explore Project Tasks in the Work Breakdown Structure
The Work Breakdown Structure (WBS) is a hierarchical list of tasks showing relationships between the tasks. The WBS is displayed in the Timeline layout with the Tasks timeline. You can use the WBS to create and organize tasks. The Timeline layout displays summary tasks, milestone tasks, and detail tasks.
- You can group detail tasks under a summary task. Right-click a summary task and create detail tasks as Child tasks.
- You can create an unlimited number of hierarchical levels in a WBS.
- You can filter the list to find specific tasks that are based on simple or complex filter criteria.
The tasks are displayed in the Timeline in the order you create them. The order and level indicate their relationship with each other. The task above a detail task could be a phase, a summary task, or another detail task.
Distinguishing Between Phases and Summary Tasks
- A phase represents the top-most level in the WBS for all the items below it and can have multiple summary tasks
under it.
- A summary task is a task that has one or more subtasks nested beneath it. You can indent tasks to be included as
subtasks to the summary task.
- The summary bar is shaded based on the completion of the tasks associated with it.
- A subtask is any task that is nested under a task. Subtasks can be detail tasks or summary tasks. You can nest
summary tasks under other summary tasks.
- When creating a summary task, give it a name that implies a logical, organizational grouping. For example, if multiple
tasks are to be performed in the planning phase to research the project requirements, create a summary task named Research and Analysis and add all the subtasks as children.
- Detail task dates determine the summary task and phase dates. The earliest start date of the detail tasks determines the summary task or phase start date, and the latest end date of the detail tasks determines the summary task or phase finish date.
- The summary task dates change as you edit the detail task dates. Total Effort and cost for a summary task are calculated based on the detail task information.
- You can use the Expand All and Collapse All options in the Timeline layout to expand and collapse all tasks.
Adjust Task Duration in the Timeline
You can hover over a task to view the dates and time associated with it. You can then drag a task to adjust its duration, start dates, and finish date. When you drag a task, the associate summary task and phase durations are also automatically adjusted.
TIP A couple of rules that apply when you change the task dates are given below:
- When you change the Task Finish date the Task Duration is updated. However, the Start Date does not change.
- When you change the Task Start date, the Task Finish date is updated. However, Task Duration does not change.
NOTE You cannot edit the task duration in the following cases:
- When the task is a Milestone or a Summary Task.
- Timesheet is already submitted for that period.
Add and Remove Internal and External Dependencies
Task dependencies in the Timeline layout allow you to create better investment plans by designating a successor or predecessor task for a task and indicating the type of relationship between the tasks. Previously, you could only create dependencies with tasks with the same investment. You can use the Add External Dependency option to add dependencies with tasks within other investments in Clarity. The four kinds of dependencies you can create are:
- Finish-Start - The predecessor task must finish before the successor task can start. This dependency is the most common type.
- Start-Start - The predecessor task must start before the successor task can start.
- Start-Finish - The predecessor task must start before the successor task can finish.
- Finish-Finish - The predecessor task must finish before the successor task can finish.
NOTE You cannot create dependencies from phases and summary tasks. Follow these steps to create internal dependencies: 1. Open an investment item and click TASKS. 2. Click Timeline layout. 3. Select a task in the timeline. Let's call it the source task. You will notice two blue dots at the start and the end of this task. 4. Point to the blue dot at the beginning or end of the source task and right-click to view the dependency arrow. Drag this arrow to the target task and join it with the beginning or end of the target task to create the appropriate dependency. If you select the blue dot at the end of the source task and connect the arrow to the beginning of the target task, you establish a finish-start relationship. NOTE
You can now directly manage dependencies in the Timeline grid by editing the predecessor and successor fields. This capability reduces the need to use multiple third-party tools to manage tasks. You can click WBS/ Row icon to choose a preferred format and then edit the predecessor and successor fields to define the new dependencies.
Creating External Dependencies Follow these steps to create external dependencies: 1. Open an investment item and click TASKS. 2. Click Timeline layout. 3. Select a task in the timeline or the WBS, right-click, and select Add External Dependency. 4. Select the investment name and task with which you want to define the dependency. 5. Select the appropriate relationship, namely predecessor or successor.

6. Select the appropriate dependency type. 7. Select the Lag Type. it identifies the lag period between the two tasks. For example, for a Finish-Start type of
relationship, create a lag period of five days between the finish date of the predecessor task and the start of the successor task. 8. Select the Lag Value. It specifies the type of lag between two dependent tasks. If you enter 5 as the lag and daily as the lag type, a lag period of five days between the tasks is created.
NOTE Some key points to remember are:
- You can only add investments for which you have access.
- When rescheduling existing tasks, the external dependency tasks are not automatically rescheduled.
- If the existing start and end dates of the investment are not updated, you create a dependency with an
external task that extends beyond the project's finish date.
- You can apply this capability in the Tasks module on all investments. Export Tasks in the Timeline Layout to PDF You can now export the tasks associated with an investment into a PDF file. The Export to PDF action is available on the Timeline layout of the Tasks module for projects and custom investments. Here are some key points to remember:
- You can generate a PDF for the current plan.
- You can export a PDF with widgets if they are available on the Tasks page.
- The default Expand/Collapse state is exported to PDF. If you manually change the default Expand/Collapse state, the changes are not exported to PDF.


Introducing the Show Today Toggle for the Tasks Module


The Show Today toggle in the Timeline layout for the Tasks module allows you to view your current position as of today in the overall plan. Today is displayed as a star and a dotted line that cuts across various tasks displayed on the Timeline.
NOTE Some key points to remember are:
- You will see the label Today depending on their timezone and language setting.
- When you hover over the dotted line or the star, a tooltip displays "Today" and shows the current date.
- If Today does not fall in the range for the time periods configured for the Timeline layout, you will not see the
star and dotted line.
- If Today does not fall within the investment's date range, the star and dotted line will not appear.
Copy Tasks From Investments You can now use the Copy From actions on the Timeline layout of the Tasks module to copy tasks from other investments in your investment. The `Copy from...' action is displayed in a Project or Custom Investment when you have Edit Management rights on the investment, which includes the permissions to manage tasks. You also need Investment - View rights for the investment from which you pull tasks.
NOTE Some key points to remember are:
- After you click Copy From, you can select the investment type and the target investment to copy tasks.
- The user will need Resource Booking rights to copy tasks with assignments, as the assignees will be added
to the investment staff.
- All Task-related To Dos and Links are automatically copied without additional rights. That means if there are
To-Dos on the Tasks and the current user does not see them or has no access to them, they are still copied, and other users who may have access to the To-Dos will see them.
- Although the Task ID field is not required, Clarity mandates that every task must have a unique ID. If you use Task IDs, you will be restricted in what tasks can be copied successfully. Hence, have a set of Tasks without a Task ID if you want to copy them multiple times into the same Investment.
- When copying tasks with assignments successfully, the user will need access to the Resource Hard Book and/or Resource Soft Book to add staff.
Follow these steps:
1. Open an investment item and click TASKS. 2. Click Timeline layout. 3. Click Actions and Copy From and select the relevant investment. 4. Select the relevant investment to click Next. 5. Select the relevant task and click Copy.
Display Parent Tasks While Filtering
In previous releases, when an Investment Manager applies filters to view specific tasks (such as filtering by task owner, status, or priority), displaying only the filtered child tasks without their parent context creates several problems:
- Loss of Hierarchical Understanding: Without visibility into parent tasks, filtered results appear as isolated items rather than components of a larger work structure.
- Broken Dependency Visualisation: Parent tasks often serve as summary containers, showing the overall timeline and dependencies between major project phases. When these are hidden during filtering, Investment Managers lose sight of critical relationships between different work streams.
Clarity now preserves the WBS structure and returns the parent task when users filter for specific tasks in the Timeline layout. This functionality is governed by the "Return Parent Tasks when Filtering on Task Timeline layouts in Investments" layouts feature toggle.
NOTE
Some key points to remember are:
- This capability is not available in the Tasks workspace, Hierarchy Tasks module, and Timesheet "Select Tasks" page.
- This capability is also available when you use the Show Expandable Tree option in the Grid layout.
- The Sub-Project `proxy' task is always returned for Timeline and Expandable Tree in filtering, regardless
of the results of the criteria. Therefore, you may see the `proxy' task listed without any child tasks. Use [ `Is Subproject' = No ] to explicitly remove the sub-project `proxy' and all the associated subproject WBS tasks from the results.
- The Flat Grid List does not return the parent/summary tasks and does not display subprojects and external tasks.
Update Cost Totals for Projects and Custom Investments
You can now use the Update Cost Totals action in the Tasks Timeline layout to update the assignment and allocation cost totals. This action can be used after you set up the investment for the first time. Some key configurations that need to be completed are shared below.
- Investment properties associated with a Rate and Cost Matrix.
- Staff members added to the investment with allocations
- Task WBS Plan created
- Staff members assigned to tasks with estimates
- Rate Matrix Extraction job executed
NOTE Some key points to remember are:
- You can also execute the Update Cost Totals action when staff allocation and assignment changes are made
or when the rate matrix is updated.
- You need the following access rights to use the Update Cost Totals action.
- <Project or Custom Investment Type> - Update Cost Totals
- <Project or Custom Investment Type> - Edit
Working with Autoschedule
Autoschedulers provide an automated way to create schedules. Autoscheduling helps model your plan and generate dates for your tasks and overall investment. Autoschedule is designed to schedule investment tasks while minimizing the delays and expansions that can cause deadline slippage while eliminating or minimizing resource over-allocation. You can use Autoschedule to update the schedule after you or others make small, quick changes to it. You can review your changes before publishing them.
NOTE If you want to use other schedulers, you can use the Actions (3 dot) button to work with schedulers such as Clarity Gantt, Microsoft Project, or Open Workbench. This section contains the following topics:
- Working with Autoschedule
- Autoschedule and Publish
- Schedule Subnets
- Calculate Critical Path
- Lock Tasks
- Create a Tentative Schedule


Working with Autoschedule


Autoschedule uses task duration, task date constraints, priority order, dependency information, and the related date and resource logic to identify the critical path and schedules tasks. Each task is scheduled:
- To use availability as early in the investment as possible
- To start at the earliest or latest possible time, subject to date constraints
- To minimize the duration of the critical path
NOTE To autoschedule in the Gantt view, verify that you have the Schedule In Browser access right.
The critical path determines the earliest finish date of the investment. Autoschedule uses the critical path information to make the following scheduling adjustments:
- Determines early and late start and finish dates for each task.
- Moves the early start forward or back, as applicable.
- Checks for load patterns that are set to fixed and adjusts early start and finish dates to fit.
- Builds new ETC curves based on the recalculated early start and finish dates for the tasks and subtracts as applicable
from remaining resource availability.
- To eliminate or minimize resource over-allocation, calculations can move out a task finish date or the investment finish
date.
Task date constraints are rules that help determine the investment work sequence. For example, the task must start on, start, or finish no later than a specific date. Set the date constraints on the task properties page.
NOTE Autoschedule prioritizes constrained tasks over non-constrained tasks. However, auto-scheduling overrides this rule if it violates a dependency or over-allocates a resource. For example, task 1 has a dependency on task 2 to finish before it can start. Task 1 also has a constraint that requires it to finish one day before task 2 finishes. In this case, the auto-scheduler ignores the task constraint because it violates the dependency on task 2.

Autoschedule and Publish You can publish the tentative schedule using the default options. When you autoschedule and publish, the new schedule replaces the current schedule, and the investment is unlocked. Follow these steps: 1. Open the investment and click Tasks. 2. Open the Tasks page and click Timeline. 3. Click Actions and click Autoschedule. 4. Complete the following fields:
- Autoschedule Date: Specifies the date to begin scheduling tasks. Default: Current Date
- If you have checked the box 'Schedule from Finish Date' and you enter a date that you want the investment to 'finish' in the 'Autoschedule Date' field, then the new schedule will reflect this as the new finish date of the investment.
- If you enter the existing start date or a new start date, the Autoschedule algorithm will use the selected options in the modal to determine a new schedule. Ensure you do not select the Schedule from Finish Date option in this scenario.
- If the investment is already in progress, ensure you use the 'Actuals Thru' attribute on the Assignments tab to understand how that date can impact some tasks in the new schedule when there are actuals posted. Then, enter the next working day that follows the last date shown for the 'Actuals Thru' attribute.
- Ignore Tasks Starting Before Specifies the date before which to exclude tasks. Example: For example, you enter 7/3/22 as the Ignore Tasks Starting Before date, and you have a task that starts on 6/20/22. The task is excluded from the schedule.
- Ignore Tasks Starting After Specifies the date after which to exclude all tasks. Example: For example, you enter 7/3/22 as the Ignore Tasks Starting After date, and you have a task that starts on 8/14/22. The task is excluded from the schedule.
- Resource Constraints Specifies if you want Autoschedule to consider resource availability when scheduling the investment. Default: Selected
NOTE If you clear the check box, Autoschedule treats resources as if they have unlimited availability. Each task is scheduled against the total availability of the resource but not against the remaining availability, which takes other task assignments into consideration. This results in the shortest possible schedule, but it can also cause over-commitment of resources.
- Schedule from Finish Date Specifies if you want Autoschedule to perform a backwards schedule from a defined deadline date. Use this option if the last task must be completed by the investment finish date. Default: Cleared If you schedule from the finish date, enter the finish date into the Autoschedule Date field.
- Subnets Specifies to autoschedule to calculate the critical path for the entire investment. When the field is selected, a separate critical path is calculated for each subnet. Default: Cleared
- Honor Constraints on Started Tasks Specifies if you want Autoschedule to consider resource availability when scheduling the investment. This option is selected by default. There are different factors that make a task 'Constrained'.
- A task can be constrained manually with the 'Must' dates such as 'Must Start No Later than' and similar options.
- Started Task dates are always honored. A Task can be constrained when Actuals have been posted and are considered excluded or ignored. Once Actuals have been posted, the Start date of the task is constrained. The Remaining ETC may or may not push out the 'Finish' date depending on other factors such as the loading pattern of the assignment, availability, or manually constrained dates on the task.
- Schedule Assignments on Excluded Tasks This indicates the assignments on an excluded task are scheduled. A task is excluded or ignored as a constrained task through the Autoschedule algorithm or based on the selected options in the Autoschedule modal, or if the task is marked 'Locked'. By picking this option, the assignments are scheduled within the dates of the excluded task. This field works with the Exclude from Autoscheduling field on the task properties page. Default: Cleared
- Start Successors on Next Day Specifies to autoschedule to start successor tasks with zero lag the day after the predecessor task finishes. When cleared, successor tasks start the same day as the predecessor task finishes as long as the resource has availability that is left. Default: Cleared 5. Click Autoschedule. The investment is now locked. The `Tentative Schedule' banner is visible across investment Timeline, Board, Grid layouts.
- If you click Publish
- After the user publishes the schedule, the investment is unlocked.
- The Investment Schedule is UPDATED.
- The Tentative Schedule is DELETED.
- When you Discard
- After the user discards a schedule, the investment is unlocked.
- The Investment Schedule is not updated.
- The Tentative Schedule is deleted.


Schedule Subnets
You can set up your investment to calculate separate critical paths. Subnets are a set of investment tasks that have dependencies among themselves or a single task with no dependencies. During autoschedule, you can calculate and display separate critical paths for each subnet and for each task that does not have dependencies. Otherwise, only one critical path, the longest path, is calculated for the investment.
Scheduling subnets has these key benefits:
- If you are working with a investment where you have structured the work breakdown structure to support multiple concurrent critical paths, you can display all critical paths.
- If you have a investment that contains management tasks that span the investment life, you can display the management tasks and the true critical path.
NOTE The Task object include the "Critical" field. The value of this field has not impact on the Critical Path Methodology (CPM) algorithm when you are using the Autoschedule capability. When the Autoschedule is published, the 'Critical' field is updated based on the determination of the algorithm.

Calculate Critical Path
You can calculate the critical path for tasks in Clarity. Critical path is a set of tasks in a investment for which any delay or expansion lengthens the investment or causes investment deadlines to slip. The critical path determines the investment's earliest finish date. Autoschedule uses the critical path value to determine the tasks that drive the investment deadlines and constraints. The critical path is calculated using the dependency sequence and task duration. If you decide to schedule subnets, a separate critical path is calculated and displayed for each subnet and for each task that does not have dependencies.
Clarity calculates a investment's critical path using a two-step process. The following rules govern how this two-step process is conducted:
- Tasks that are part of the longest duration chain are on the critical path.
- investment finish date is the sole reference date used to calculate both the early and late schedules.
- Float can be zero, lesser or greater than zero.
- Task status has no bearing on dependency violations or the critical path calculation.
- A task that is not on the dependency network cannot have an early schedule or late schedule; hence, it cannot be on
the critical path.
- Resource constraints do not affect the critical path calculation.
To arrive at the critical path, the application performs two passes through the dependency network.
The First Pass
The first pass works forward through the network to determine the early start and early end dates for each task in the network, and calculates the longest duration path through the network. The investment's reference end date is the investment's defined finish date. If you did not define this date, the end date is the early end date of the last task in the network or, if there is more than one branch, the latest of the early end dates of the last task in each branch. The Task


Assignment Loading Pattern is used in the calculations to ensure the Early / Late dates keep the tasks within the date range. Clarity checks any Fixed loading pattern assignments and adjusts the Early Start or Early Finish.
To calculate the early start date for the task's successor(s), the application starts with the first task in the network and adds the task's duration to the start date. Adjustments are made for gaps or overlaps by adding or subtracting from the duration. The early end date is calculated by adding the task's duration to the early start date. The application repeats this process for each task in the network.
NOTE The successor of a Start-Start dependency has the same early start date as the predecessor. The successor of a Finish-Finish dependency has the same early end date as the predecessor.
The Second Pass
The second pass works backward through the network starting from the investment finish date to determine each task's late start and late end date. The last task of each branch of the network has a late end date equal to the investment finish date. To calculate the late end date for a task's predecessor(s), the application subtracts the task's duration from the investment finish date. Adjustments are made for gaps or overlaps by adding or subtracting from the duration. The late start date is calculated by subtracting the task's duration from the late end date. The application repeats this process for each task in the network. Clarity uses the Task Assignment Loading Pattern is used in the calculations to ensure the Early / Late dates keep the tasks within the date range. Clarity checks for any Fixed loading pattern assignments and adjusts the Late Start or Late Finish.
NOTE The predecessor of a Start-Start dependency has the same late start date as the successor. The predecessor of a Finish-Finish dependency has the same late end date as the successor.
Calculate Float
Clarity calculates the float for each task by subtracting the early start date from the late start date. Float is the number of days that a task's initiation or completion can be delayed without adversely affecting the investment finish date. Float is calculated using the following formula: Late Start - Early Start. Tasks with a float of zero (0) appear on the critical path.
Lock Tasks
You can lock one or more tasks to prevent task dates from changing when you are working with the autoschedule. If you want to lock a particular task, add the Locked attribute to the Details panel and select it for the appropriate task.
IMPORTANT Some key points you need to remember are:
- This capability was previously available in Classic PPM. It has now been added to Clarity.
- The autoscheduling capability is only available for investments. It's not available for custom investments.
- The 'Tentative Schedule' banner is visible across Investment Timeline, Board, Grid layouts.
- Suppose a investment user is in the tentative schedule mode by using the new auto-scheduling capabilities
and another user accesses the same investment. In that case, they will not see the tentative schedule. However, the second user will determine the schedule is locked. You can add the Locked By column to the grid to identify who has locked the investment.
- Classic PPM Gantt auto-scheduling displays tentative dates and current dates, using a red-line visual. This capability will not be introduced in Clarity.
Create a Tentative Schedule
You can now use the Create Tentative Schedule ability to shift various tasks and review the impact on the investment in a tentative mode. They can then choose to discard or publish the tentative schedule. You can also choose the Autoshift Successor Tasks option to automatically shift successors when the parent task is moved.

After launching the Tentative schedule mode, you can: 1. Drag the taskbar in the Task timeline to shift the task and successor tasks. 2. Update the date by selecting the new Start or Finish date in the WBS section. 3. Use the relative dates capability by entering values such as +10 or - 4 to shift the taskbar and successor tasks.
NOTE Some key points to remember are:
- The option to Create a Tentative Schedule is available as a separate action and is also visible after you have
to use the Autoschedule capability.
- If a Task's Start or Finish Date changes and there are dependencies on the Start or from the Finish date, the
Successor dependent tasks will shift based on your change.
- When the StartDate is updated, Clarity moves the Finish Date and maintains the duration of the task.
- When the finish date changes, it changes the duration of the task.
- Successor Tasks move the same number of days as the predecessor task that is being moved. Follow these steps: 1. Open the investment and click Tasks. 2. Open the Tasks page and click Timeline. 3. Click Actions and click Create Tentative schedule. 4. Shift the Start or Finish dates by:
- Dragging the taskbar.
- Update the date by changing the Start or Finish date.
- Use the relative dates capability. 5. Review your changes and use the Publish button to finalize your changes.
Custom Investments: Manage Financial Plans
The Financial Management module in Clarity serves as a comprehensive solution for investment financial planning and analysis. Rita, a Financial Manager, represents the typical user who leverages this module for critical responsibilities including budgeting, projecting cash flows, and determining optimal investment and project financing strategies. The module empowers users to create, edit, and analyze multiple cost plans for projects, providing the flexibility to mark a plan of record and submit it for approval. When a cost plan receives approval, it seamlessly transitions into a budget plan for the project, establishing a clear workflow from planning to execution. Clarity also supports dynamic budget adjustments based on project progress, allowing users to create new cost plans that can either merge with existing budgets or replace them entirely, ensuring financial planning remains aligned with investment realities. Rita can also complete the following goals:
- View all the financial cost plans on the Plan List page.
- Create, edit, and analyze cost plans.
- When ready, she can mark the plan of record and send it for approval. (When a cost plan is approved, it becomes the
budget plan for a project.)
- Adjust the cost plan based on the progress of projects and create a new cost plan that either merges with or replaces
the existing budget.

TIP Free Clarity Training on Broadcom Academy
- You can attend FREE Clarity training by registering at the Broadcom Academy.
- The Clarity: Financial Management training helps you leverage the Financial Management capabilities in Clarity.
- You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom credentials, create a new account and start training.
ATTENTION The Financials module leverages the SQL curve technology introduced in Clarity 15.9.1 to significantly improve the handling of time-phased data. You will now be able to view time-phased data without the restrictive time windows available in Classic PPM. The SQL curve technology also allows you to aggregate time-phased data by using the Group-By functionality. It also enables Clarity to display the remaining availability for all resources (resource availability - resources aggerated allocations across investments ) in the Staff grid across investments. The Time Slicing Group By job is scheduled to run every five minutes. If you do not execute this job in your environment, you may not see accurate metric data. This section contains the following topics:
- Prerequisites
- Setup View Options
- Managing Records By Using the Grid Layout
- Field Level Security in Financial Plans
- Cost/Budget/Benefit Plan Details Object in Attributes
- Key Points to Consider
- Working with Widgets

Prerequisites
Before you implement the feature, ensure that the administrator implements the following configuration details:
- Ensure that the project is associated with the blueprint in the projects grid view. To do so, add the blueprint column from the column picker and select the blueprint you want to associate with the project.
- An administrator can decide whether Financial Plans (old financials) or Financials (new financials) module appears when users open a project. You can add the new projects financials module to the default layout for the standard blueprint. To learn more, see Configure Blueprints for Projects.
- Ensure that the project is financially-enabled and that an entity with active fiscal time periods is associated with the project in Classic PPM. To learn more, see Classic PPM Financial Management. To do so associate your project with a department by selecting Department from the Column Picker and then specifying the value in the Department.
- Ensure that you have one or more of the following access rights:
- "Investment" - Edit
- "Investment" Management - Navigate
- "Investment" - Navigate
- "Investment" - Cost Plan - View All
- "Investment" - Cost Plan - Edit All
- "Investment"- Budget Plan - View All
- "Investment"- Budget Plan - Edit All
- "Investment"- Budget Plan - Approve All
- "Investment"- Budget Plan - Reject All
- "Investment" - Benefit Plan - View All
- "Investment" - Benefit Plan - Edit All
- "Investment" - Benefit Plan - Approve All

Setup View Options
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
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


5. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

6. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.


7. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.
Managing Records By Using the Grid Layout
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
Field Level Security in Financial Plans
The Administration
- Attributes page provides access to Financial (Cost/Budget and Benefit) Plan objects. You have the following capabilities while using Field Level Security(FLS) with Financial Plans:
1. Secure a Financial Plan attribute to enable access to that attribute only if the user belongs to the Access View or Access Edit groups specified in the Attributes page.
2. Modify or relabel the Financial Plan field labels and see the changes everywhere in Clarity. 3. Provide a tooltip for the Financial Plan attribute to view the additional information about the attribute.

To learn more about using the Field Level Security grid, see Secure Field Level Access. Cost/Budget/Benefit Plan Details Object in Attributes The Objects (Cost/Budget/Benefit Plan Details) are available in Attributes.

Some of the key points to remember while working with attributes of Cost/Budget/Benefit Plan Details:
- You have the flexibility to modify or rename out-of-the-box field labels (Example: "User Value 01" attribute is re-labeled
as "Expense Category" in the Attributes page).
- The columns in the Cost Plans/Budgets/Benefit Plans detail page show field re-labeling (Example: "Cross BU Code"
is displayed in the Cost Plans/Budgets/Benefit Plans detail page that is re-labeled from "Charge Code").
- You can only secure the out-of-the-box Benefit Class and Subclass attributes using Field Level Security.
- A visual indicator (Shield Icon) appears to identify fields under field-level security control.

Key Points to Consider Prerequisites and Setup Requirements: Consider the following requirements while using the financials module:
- Investments must be financially enabled with an entity containing active fiscal time periods associated with Classic
PPM.
- Associate investments with departments by selecting a Department from the Column Picker and specifying the
department value
- Verify possession of necessary access rights, including Edit, Navigate, and various Cost Plan, Budget Plan, and
Benefit Plan permissions.
- The Financials module leverages SQL curve technology to enhance time-phased data handling, eliminating restrictive
time windows.
- The Time Slicing Group By job should run frequently for accurate metric data display. Cost Plan Management: Consider the following requirements while using the Cost Plan capabilities:
- Multiple cost plans can be created for a project, but only one can be designated as the Plan of Record (POR). The first
cost plan is automatically set as the POR by default.
- The "Include Actuals from Children" option enables the aggregation of actuals from child investments into parent
investment cost plans, accompanied by a visual cue indicating when actuals are rolled up.
- Users can add multiple lines for the same grouping attribute values, eliminating the need for offline spreadsheets and
enabling detailed financial tracking.
Budget Plan Management: Consider the following requirements while using the Budget Plan capabilities:
- Budget plans are created when cost plans are approved, following specific rules that require submitted cost plans to
include matching grouping attributes to merge with existing budget plans.
- Only one budget plan can be submitted or approved at a time, and once approved, it becomes the POR.
- Budget revisions can be made through two approaches: merging new line items with existing budget plans or replacing
budgets entirely by varying start and end dates for submissions.
Forecast and Benefit Plans: Consider the following requirements while using the Forecast and Benefit Plans capabilities:
- Forecast is calculated as the sum of actual amounts for completed fiscal periods and planned amounts for current and
future periods.
- Benefit plans do not require approval processes like cost plans but can be associated with multiple cost plans, while
each cost plan can only have one associated benefit plan.
- Benefit plans cannot be deleted if associated with any cost or budget plan, and saved views are shared across
financial modules of different investment types.
Working with Widgets You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. In this release, the following widgets are available:
- Number Tile
- Pie
- Bar
- Progress Ring
- Target (Roadmaps and Staffing Workspace) Some of the key actions you can perform with widgets are:
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
Working with Cost Plans
You can work with the cost plan and cost plan details as follows:
- Setup View Options
- Create a Cost Plan
- Edit Grouping Attributes
- Include Actuals from Children in Cost Plan/Budget
- Rollup Actuals by Team if Available in Cost Plan
- Edit Cost Plan Detail
- Add Multiple Lines for the Same Grouping Attribute Values
- Set the Plan of Record
- Copy a Cost Plan
- Delete a Cost Plan
- Grouping Attributes
- View Actuals Posted
- Compare Budget to Cost, Actuals and Forecast in Cost Plan Details
- Compare Plans
Setup View Options
You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).
Follow these steps:
1. Log into Clarity

2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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
- Total and Periods: Simultaneously presents the per-period metric fields and the 'Totals' field in the grid.


IMPORTANT You have to select the per-period metric attributes from the Column Panel.
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.
REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.
IMPORTANT
When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics. 9. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.
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


10. Show Deltas: Turn on the toggle to show the Deltas column in grid while comparing plans. By default, the value is set to ON.

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
- If you are using the timeline layout, you have the Color By option.
Create a Cost Plan You can create multiple cost plans for a project. However, you can set only one cost plan as your plan of record (POR). By default, the first cost plan is set as the plan of record for a project. Follow these steps: 1. Open a project and click FINANCIALS. The sub-page for cost plans and budget plans is displayed. To view the
existing cost plans for a project click Cost Plans and the list appears in a grid layout. 2. Click the ( + ) plus icon. A new line appears in the plan list grid. 3. Complete the required fields including PLAN NAME, PLAN ID, PERIOD TYPE, START PERIOD, FINISH PERIOD,
and GROUPING ATTRIBUTES, and various other fields that are available from the column picker. NOTE The PLAN ID field appears only if auto-numbering is turned off for the Cost Plan object in Classic PPM.
IMPORTANT If the actuals_out_of_date flag is set to Yes in the Cost/Budget Plans table, Clarity updates the Audit and Actual fields in Cost/Budget Plans. Clarity updates these fields when you perform the following actions:
- Post the Actuals; the respective investment cost and budget plans get invalidated
- Adjust the Actuals; the respective investment cost and budget plans get invalidated
- Create a new Cost Plan using Clarity(Manual or Copy)/API/XOG
- Populate actions such as:
- Populate a cost plan from allocations
- Populate a cost plan from assignments
- Change the Cost Plan Dates using Clarity/API/XOG
- Update the Cost/Units/Revenue using Clarity/API/XOG Note: When you navigate to Cost Plan Details or Budget Plan Details, the Last Updated By field displays Administrator (which can be configured to a different user, if needed).

Edit Grouping Attributes You can edit the grouping attribute values directly within an existing cost plan or a submitted budget detail record. This improves data accuracy and eliminates the need to delete and recreate rows due to incorrect grouping selections. Steps to Edit Grouping Attributes 1. Open an investment and click Financials. 2. In the Cost Plans sub-page, select a cost plan from the grid. 3. Click the grouping attribute cell (e.g., Cost Type, Resource Class) in the grid. 4. Select the desired value from the drop-down list. What Happens After Editing a Row with Actuals?
- Clarity clears Actual Cost, Actual Units, and Variances.
- Actuals are repopulated when the relevant jobs run or when you revisit the plan.
- Variances are recalculated based on the updated grouping. About Source Field A read-only field called Source is available in the Cost Plan Detail grid. This field identifies how each row was created:
- Manual
- Entered directly by a user.
- Populate Action
- Created using Populate from Allocations or Populate from Assignments.
- Actual Without Planned
- Created when actuals exist for a combination not present in the cost plan. Dynamic Behavior of the Source Field
- If a row initially shows Actual Without Planned, and you use Populate from Assignments, the source updates to
Populate Action.
- If you then manually modify the same row, the source updates to Manual.
NOTE Key Points to Remember
- You can edit grouping attributes in Financial Plan comparison mode, but only in the selected plan, not in the compared plan.
- Uniqueness validation is enforced. If the new grouping combination already exists, the system displays the following error: "Combination already exists."
Include Actuals from Children in Cost Plan/Budget
The Include Actuals from Children option in Cost Plans/Budgets allows users to aggregate actuals from child investments into the parent investment's cost plan/budget.
Key Highlights:
- Hierarchy-Based Aggregation: The investment hierarchy is defined using the existing parent attribute, identifying
child investments whose actuals are aggregated into the parent's cost plan/budget.
- New Attribute in Cost Plans/Budgets: The Include Actuals from Children attribute is now available in the Cost
Plans and Budgets page. This allows you to control whether actuals from child investments are included in the parent cost plan/budget.
- Similar to Standard Attributes: This new attribute can be used for filtering, grouping, sorting, and more in the grid. You can also secure, relabel, and add tooltip information to it in the Attributes page.
- Job-Driven Updates: When you enable Include Actuals from Children and run the Post WIP Actuals to Financial Plans job, actuals from child investments are rolled up and added to the parent investment's cost plan/budget.
- Visual Indicator: A visual cue (`') indicates when actuals are rolled up from child investments, improving user awareness.
- Transaction Review: Drilling into the Actuals amounts on the Cost Plan/Budget Details page will display transactions from both the parent and child investments when the Include Actuals from Children field is checked.
Follow these steps:
1. Open an investment and click FINANCIALS. The Cost Plans sub-page will appear. 2. Configure the Include Actuals from Children field in the Columns section and check this field. 3. Open the Cost Plan with the Include Actuals from Children field checked.
You can now view the aggregated actuals from child investments along with the parent investment's actuals in the Cost Plan/Budget Details.
Rollup Actuals by Team if Available in Cost Plan
The Roll up Actuals by Team if Available option allows you to aggregate actuals by team rather than by individual resource in the Cost Plans/Budgets page.
Steps to Use:
1. Open an investment and click FINANCIALS. The Cost Plans sub-page will appear. 2. Configure the Rollup Actuals by Team if Available field in the Columns section and check this field.
NOTE Ensure that Resource is included as one of the grouping attributes in the plan. 3. Open the Cost Plan with the Rollup Actuals by Team if Available field checked.
You will now see the aggregated actuals by team in the Cost Plan/Budget Details.
REMEMBER
Resources Without a Team:
If a resource does not belong to a team but the Roll up actuals per team flag is checked, the resource will still appear alongside the teams in the cost plan.

Edit Cost Plan Detail If the estimates have changed for a project, you can edit and update the associated cost plan details from the Details panel. Alternatively, update the line item details for a cost plan detail by editing the rows in the grid. Double-click the cells in the plan detail to edit the planned cost values. Follow these steps: 1. Open a project and click FINANCIALS. The sub-page for cost plans and budget plans appear. 2. Open the cost plan from the list that appears in the grid layout. The cost plan details page opens. 3. Double-click the cell and edit the cost for each attribute as required. The total cost is updated in the cost plan details
page and is visible in the cost plan. 4. If you select the option Populate from Allocations in the Cost Plan List, the cost involved is auto-populated based on
preconfigured values. The associated project must have at least one staff member (resource, role, or team) to allow populating from allocations. 5. If you select the option Populate from Assignments in the Cost Plan List, the cost involved is auto-populated based on preconfigured values. The associated project must have at least one task assigned to allow populating from assignments.
Add Multiple Lines for the Same Grouping Attribute Values Nicole Fleming, a Project Manager, purchases various hardware components (such as Workstations, Printers, and Servers) for the team. She wants to add cost details to the financials. In the Cost Plan Details, Clarity provides the ability to enter multiple lines per grouping attributes. It eliminates the need to maintain offline spreadsheets. So, Nicole can leverage Clarity for financial planning and gain the endorsement of their finance team. Follow these steps: 1. Open an investment and click FINANCIALS. The sub-page for Cost Plans appear. 2. Open the cost plan from the list that appears in the grid layout. The cost plan details page opens. 3. Right-click on a row and click Create Detail Row to create a detailed (child) row to capture additional details. 4. Enter the description and click Create. A branch notation indicates the detailed (child) row of the Summary (parent)
row. NOTE Some of the key points to remember while working with detailed rows in the Cost Plan Details are: 1. When you create a detailed (child) row, the summary (parent) row becomes read-only. Any detailed rows update will instantly roll up to the summary row. 2. The Detailed (child) records are not imported into the Data Warehouse; however, a child Description table within the DWH stores the description corresponding to these child rows. 3. The detailed (child) rows can also be viewed and updated from Hierarchy Financials. 4. A summary (parent) record for TSV attributes such as Cost, Revenue, etc. shows aggregated amounts of their corresponding detailed children records. 5. TSV attributes such as Actual Cost, Actual Units, etc. are supported only at the summary (parent) level and not at the detailed (child) level.

TIP To keep the Summary(parent) and Detailed(child) rows together in the grid, it is recommended to sort on each grouping attribute first, and last on the Description attribute using multi-sort. Set the Plan of Record The plan of record (POR) is the cost plan that you intend to use as the budget plan for a project. If you have defined multiple cost plans for a custom investment, by default, the first cost plan is set as the plan of record (POR). You can set any other cost plan as the plan of record for a project. On the Plan Details page, the PLAN OF RECORD image appears at the top, next to the plan name. Follow these steps: 1. Open a project and click FINANCIALS. The sub-page for cost plans and budget plans appear. 2. Open the cost plan from the list that appears in the grid layout. 3. Click the  Actions menu and select Make Plan Of Record. The selected cost plan is now the plan of record for the custom investment. Copy a Cost Plan You can create a cost plan from a copy of an existing cost plan. For example, you might copy a cost plan, edit a portion of it, and delete the rest. The copied plan includes the same grouping attributes, currency, and other details as the source plan. Follow these steps: 1. Open a project and click FINANCIALS. The sub-page for cost plans and budget plans appear. 2. Open the cost plan from the list that appears in the grid layout. 3. Click the  Actions menu and select Copy. 4. Complete the required fields including PLAN NAME, PLAN ID, PLAN DESCRIPTION, PERIOD TYPE, START PERIOD, FINISH PERIOD, BENEFIT PLAN, and SCALE BY %. Here, Scale By % defines the percentage by which to scale (increase or decrease) the dollar values in the copied plan. Example: Enter 75 percent to increase the values from the source plan by 75 percent from their original. Default: 0%. No change in values.

NOTE The PLAN ID field appears only if auto-numbering is turned off for the Cost Plan object in Classic PPM. 5. Click CREATE. The copied cost plan appears for you and other users to view or edit.
Delete a Cost Plan You can perform similar steps to delete a cost plan that you no longer need. You can delete the plan of record if it is the only cost plan available for a project. Otherwise, make another cost plan the POR before deleting the current POR.
Grouping Attributes Group the cost plan data by the available attributes to analyze how the funds are being allocated for each type within a grouping attribute. Follow these steps: 1. Open a project and click FINANCIALS. The sub-page for cost plans and budget plans appear. 2. Open the cost plan from the list that appears in the grid layout. 3. Specify the Grouping Attributes from the cost plan. Alternatively, you can specify the grouping attributes from the
Details panel. The attributes are also visible from the filter. The Grouping Attributes you specified in a cost plan are listed as attributes (columns) in the cost plan details page. The attributes let you group and aggregate the cost for a specific attribute.
REMEMBER About An Additional Grouping Attribute 'Financial Work Type' You can categorize work by an additional attribute called Financial Work Type, which helps with Capital Forecasting. It is a static empty lookup. As an administrator, you can add values to this lookup based on your organization's specific needs. Why is "Financial Work Type" Important? Capital forecasting plays a vital role in financial planning by enabling organizations to anticipate future investment expenditures. The "Financial Work Type" attribute is a key component of this forecasting process, helping to categorize and track financial data efficiently. Some of the key points to remember are:
- The "Financial Work Type" attribute has been Data Warehouse-enabled, allowing report designers to retrieve
its value in reports when needed.
- This attribute is not supported in Rate Matrix at this time. Watch the following video to learn about Financial Work Type attribute.
View Actuals Posted Nicole would like to view the actual costs posted during the fiscal period for the Projects, which helps to compare the Planned to Actuals for the project. Follow these steps: 1. Team members must submit a Timesheet, or create a manual transaction entry, or add a transaction through the XOG.


2. The administrator must then execute the following jobs in Classic PPM.


Method for Posting Actuals Timesheet Entry
Transaction Entry XOG

Jobs
- Post Timesheet
- Post Transactions to Financial
- Post to WIP
- Post to WIP
- Post WIP Actuals to Financial Plans
- Post Transactions to Financial
- Post to WIP
- Post WIP Actuals to Financial Plans

Follow these steps:
1. In the main menu, click Projects. 2. Open a Project, and click FINANCIALS. The cost plan list appears. 3. Click the cost plan name. The Actuals are now displayed in the cost plan details page. 4. The following time-scaled values (TSV) fields for cost plan details are available for selection from the PER-PERIOD
METRICS field:
- Cost: Displays the planned cost.
- Actual Cost: Displays the aggregated actual cost for a given fiscal period that is calculated as Actual Units * Cost.
- Actual Revenue: Displays the actual billing rate for a given fiscal period that is calculated as Actual Units * Rate.
- Actual Units: Displays the aggregated actual unit for a given fiscal period.
- Cost Variance: Displays the delta between Cost and Actual Cost.
- Revenue: Displays the planned revenue.
- Revenue Variance: Displays the delta between Revenue and Actual Revenue.
- Units: Displays the planned units.
- Units Variance: Displays the delta between Units and Actual Units.
NOTE You can adjust your view of the project grid to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs). The selected TSV fields you selected are listed as attributes (columns) in the cost plan details page. Now, the financial date is in-sync with the latest posted actuals. 5. Click the per-period value under the Actual Cost/Actual Unit columns to view the actual data for that period. The Transaction Review grid pop-up window opens. The values in the Transaction Review grid are non-editable. These values are pre-filtered based on:
- Grouping Attributes - It is selected while creating the Cost Plan/Budget; and
- Data Range - It is picked where you clicked in the financial details page.
NOTE Some of the key points to remember related to the Transaction Review grid are:
1. The grid view setting, such as decimal display, is taken from the View Options setting of Actual Transactions. 2. The changes cannot be saved in the grid. 3. The Details panel is not available in the grid. 4. Even when data is grouped in the Financials Details page, you can view the actual data for per-period
values.

Compare Budget to Cost, Actuals and Forecast in Cost Plan Details Rita Lee, a Financial Manager, wants to present the current budget to investment stakeholders.


Hence, she wants to compare planned, approved, and actual costs. The comparison assists stakeholders in making corrective decisions regarding investments based on budget versus planned costs, actuals, and forecasts.
In the Cost Plan Details, Clarity provides the ability to view current budget (i.e. the latest Approved Budget) and its variance with Cost, Actual Cost and Forecast in the Cost Plan Details page.
Therefore, Rita can use Clarity to compare Budget to Cost, Actuals to Forecast, and present this information to stakeholders.
Follow these steps:
1. Open an investment and click FINANCIALS. The sub-page for Cost Plans appear. 2. Open the cost plan from the list that appears in the grid layout. The cost plan details page opens. 3. Click View Options (Gear Icon) and select the following fields in Per-Period Metrics:
- Cost
- Budget
- Budget To Cost Variance
- Actual Cost
- Budget To Actual Variance
- Forecast
- Budget To Forecast Variance
- Forecast % of Budget Cost 4. Close View Options. You can see the comparison between actuals, budget, and forecast in the grid.
It is recommended to add less than or equal to 12 time periods with three TSV fields in the grid.
Compare Plans
You can compare different plans within an Investment, such as:
- Cost Plan Detail 01 vs Cost Plan Detail 02
- Cost Plan Detail 01 vs Budget Plan Detail 01
- Budget Plan Detail 01 vs Budget Plan Detail 02
Follow these steps:
1. Open an investment and click FINANCIALS. The sub-page for Cost Plans appears. 2. Open the cost plan from the list that appears in the grid layout. The cost plan details page opens. 3. In Compare to: click the Cost Plans/Budgets button.
Cost Plans button:
- Lists cost plans with matching grouping attributes that are available for selection.
- Unavailable Cost Plans (conflicting grouping attributes) are shown in read-only mode.
- The Plan of Record (POR) of Cost Plan is indicated with a star icon. Budgets button:
- Lists budget plans with matching grouping attributes that are available for selection.
- Unavailable Budget Plans (conflicting grouping attributes) are shown in read-only mode.
- The Current Budget is indicated with a star icon. 4. Select a plan from the drop-down list. The chosen plan appears beside `Compare to:' <Plan Name>. You can view the separate columns for Selected Plan, `Compare To:' <Plan>, and Delta under the supported perperiod metrics.
NOTE Turn on 'Show Deltas' In View Options to show the Deltas column in the grid while comparing plans
Changes Occur

The following changes occur when you select a plan to compare:
- Clarity shows the Selected Plan followed by the `Compare to:' <Plan>.
- `Compare to:' <Plan> columns are highlighted with a grey background in the grid.
- In Delta column:
- Positive numbers are shown in Green
- Negative numbers are shown in Red
- A tick mark appears for the `Compare to:' <Plan> in the drop-down list.
- A prefix `Budget' text is added when you select a budget plan to compare.
REMEMBER
Some of the key points to remember while comparing plans are:
- The supported attributes for comparison include:
- Cost
- Forecast
- Revenue
- Actual Revenue
- Units
- Non-supported attributes or detail rows are shown only for the Selected Plan.
- The following will be available for the selected Cost Plan but not the `Compare to' Cost Plan:
- Editing Per-Period Metrics
- Row-level actions such as Add Row, Open Details, Star, Create Detail Row, Insert Row Below, and Delete
Row
- Cost Plan actions such as Submit for Approval, Populate, Copy, and Delete
- The Hamburger menu settings are accessible only for the Selected Cost Plan columns, yet the settings affect both the `Compare to:' <Plan> and Deltas columns.
- To remove the comparison from the grid, select None from the Compare to: drop-down list.
IMPORTANT
- Export to CSV is disabled while comparing plans.
- Widgets render data from the Selected Plan (not the `Compare to:' <Plan>).
Working with Budget Plans
When a cost plan is approved, it becomes the budget plan for an investment. You can submit a portion of a cost plan for approval by varying the start and end dates for the submission. Only the portion between the new start and end dates is submitted for approval. When a cost plan is approved, it becomes a budget plan with a new version number. If there is a previous budget, it is saved separately and can be viewed but not edited.
When submitting a cost plan as a budget plan, remember these rules:
- If a budget plan exists, the submitted cost plan must include the same grouping attributes to merge the submitted cost plan data with the existing budget plan data. If the grouping attributes are not the same, replace the existing budget plan or cancel the submission.
- You can only submit or approve one budget plan at a time.
- When a submitted budget is approved, the budget plan becomes the POR.
- You can edit a submitted budget, but you cannot edit an approved or rejected budget.
- If an approved budget exists, the submitted cost plan data can be either merged with or can replace the approved
budget.


This section contains the following topics:
- Submit Cost Plans as Budget Plans
- Approve or Reject Submitted Budget Plans
- Budget Plan Changes
- Create a Budget Revision
- Setup View Options
- Compare Plans


Submit Cost Plans as Budget Plans
Submit a cost plan as a budget plan to create a new approved budget, or to update the budget after updating the cost plan. A cost plan must be designated as the POR before you can submit it for approval. If an approved budget plan exists, and you create or update a cost plan as the new POR, you can submit the POR to merge with the approved budget plan or to replace the budget plan.
Follow these steps:
1. Click the relevent investment page. 2. Open the investment and click Financials. By default, the cost plan that is designated as the Plan of Record appears. 3. Click the  Actions menu and select SUBMIT FOR APPROVAL.
NOTE
To submit a budget plan, click Plan List and select the  Actions menu associated with the POR. 4. Complete the following fields:
- PLAN NAME Enter the name of the budget plan
- PLAN ID Defines unique ID for the budget plan
- PLAN DESCRIPTION Provide a brief explanation of the budget plan.
- PERIOD TYPE (Non-editable) Displays the period type associated with the cost plan.
- START PERIOD Displays the start period of the budget plan. To submit a portion of the cost plan rather than the
whole plan for the budget, select a different start period.
- FINISH PERIOD Displays the end period of the budget plan. To submit a portion of the cost plan rather than the
whole plan for the budget, select a different end period.
- BENEFIT PLAN Associate a benefit plan with the budget plan. If you have associated a benefit plan with the cost
plan, the same benefit plan will get attached to the budget plan.
- SUBMIT OPTION
- Replace: Selected by default when you are creating a new budget plan.
- Merge: Available when you revise a budget plan. Allows you to merge the changes with the existing budget plan. 5. Submit the cost plan for approval.

Approve or Reject Submitted Budget Plans
Follow these steps:
1. Click the relevant investment page. 2. Open the investment and click Financials. By default, the POR appears. 3. Click Plan List and click BUDGETS to review the list of budgets. 4. In the Search bar, enter the name of the budget or the PLAN ID to identify the budget you want to edit. 5. To approve or reject the budget, click the  Actions menu and then select APPROVE BUDGET or REJECT BUDGET. 6. To edit a budget, click it. The budget opens. 7. Add an additional row or remove a row from the budget. 8. Edit the amounts in the BUDGET column.


9. After you have finalized your changes, click the  Actions menu and select APPROVE BUDGET to approve the budget.
10. To reject a budget, select the REJECT BUDGET option.
Budget Plan Changes
- Combination Already Exists: If a Combination Already Exists error message appears, it means you added a new
row to a budget plan with the same grouping attributes as a previous entry. In this situation, you can delete the unnecessary row.
- Cannot Edit an Approved Plan: After you submit a cost plan for approval, it becomes the submitted budget plan. You can edit the submitted budget plan; however, you cannot edit the budget plan after it is approved.
Create a Budget Revision An approved cost plan becomes the budget plan for a project. Since projects are dynamic and continuously change, you can revise various parts of the budget, or can replace the budget entirely. You can make two types of revisions to an approved budget plan: Merged Budget Plan Revision
- Submit a cost plan with new line items and merge the changes with the existing budget plan.
- Submit a portion of a cost plan by varying the start and end dates for the submission, or update the field values in
specific time periods. You can submit only the changed time periods and can merge them with the budget. Replacement Budget Plan Revision
- Submit a cost plan with deleted line items and replace the budget to remove those line items from the budget plan.
- Create a cost plan, using different grouping attributes or time period types, and replace the budget. Both revision types provide approval history. However, the replace feature enables you to delete line items that are no longer needed, and to revise grouping attributes and fiscal time periods. When you submit a cost plan that revises an existing budget, you specify whether to merge or replace using the Submit Options pull-down list. This field appears only when there is at least one approved budget. If the new cost plan has a different structure than the existing budget, Replace is the only option. When your cost plan is approved, it becomes the revised budget plan with a new version number. You can view the previous version of the budget, which is saved separately. You cannot edit either previous budget plans or the currently approved budget plan.
TIP Another simple example where you might want to replace a budget is when you no longer need a line item in the budget plan. If you want to remove a line item from the budget plan, delete the line item in the cost plan. Submit the revised cost plan as a replacement for the budget plan. Follow these steps: 1. Click Projects. 2. Open a project and click Financials. 3. Open an approved/rejected cost plan that is designated as Plan of Record. 4. Click the  Actions menu and select SUBMIT FOR APPROVAL. 5. Complete the following fields:
- PLAN NAME Enter the name of the budget plan
- PLAN ID Defines unique ID for the budget plan
- PLAN DESCRIPTION Provide a brief explanation of the budget plan.
- PERIOD TYPE (Non-editable) Displays the period type associated with the cost plan.
- START PERIOD Displays the start period of the budget plan. To submit a portion of the cost plan rather than the
whole plan for the budget, select a different start period.
- FINISH PERIOD Displays the end period of the budget plan. To submit a portion of the cost plan rather than the
whole plan for the budget, select a different end period.
- BENEFIT PLAN Associate a benefit plan with the budget plan. If you have associated a benefit plan with the cost
plan, the same benefit plan will get attached to the budget plan.
- SUBMIT OPTION
- Replace: Allows you to replace the existing budget plan.
- Merge: Available when you revise a budget plan. Allows you to merge the changes with the existing budget plan. 6. Click Submit. Setup View Options You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs). Follow these steps: 1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off. REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.

IMPORTANT
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


10. Show Deltas: Turn on the toggle to show the Deltas column in grid while comparing plans. By default, the value is set to ON.

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
- If you are using the timeline layout, you have the Color By option.

Compare Plans You can compare different plans within an Investment, such as:
- Cost Plan Detail 01 vs Cost Plan Detail 02
- Cost Plan Detail 01 vs Budget Plan Detail 01
- Budget Plan Detail 01 vs Budget Plan Detail 02 Follow these steps: 1. Open an investment and click FINANCIALS. The sub-page for Budgets appears. 2. Open the budget plan from the list that appears in the grid layout. The budget plan details page opens. 3. In Compare to: click the Budgets/Cost Plans button.
Budgets button:
- Lists budget plans with matching grouping attributes that are available for selection.
- Unavailable Budget Plans (conflicting grouping attributes) are shown in read-only mode.
- The Current Budget is indicated with a star icon. Cost Plans button:
- Lists cost plans with matching grouping attributes that are available for selection.
- Unavailable Cost Plans (conflicting grouping attributes) are shown in read-only mode.
- The Plan of Record (POR) of Cost Plan is indicated with a star icon. 4. Select a plan from the drop-down list. The chosen plan appears beside `Compare to:' <Plan Name>. You can view the separate columns for Selected Plan, `Compare To:' <Plan>, and Delta under the supported perperiod metrics.
NOTE Turn on 'Show Deltas' In View Options to show the Deltas column in the grid while comparing plans Changes Occur The following changes occur when you select a plan to compare:
- Clarity shows the Selected Plan followed by the `Compare to:' <Plan>.
- `Compare to:' <Plan> columns are highlighted with a grey background in the grid.
- In Delta column:
- Positive numbers are shown in Green
- Negative numbers are shown in Red
- A tick mark appears for the `Compare to:' <Plan> in the drop-down list.
- A prefix `Cost Plan' text is added when you select a cost plan to compare. REMEMBER Some of the key points to remember while comparing plans are:
- The supported attributes for comparison include:
- Cost
- Forecast
- Revenue
- Actual Revenue
- Units
- Non-supported attributes or detail rows are shown only for the Selected Plan.
- The following will be available for the selected Plan but not the `Compare to' Plan:
- Editing Per-Period Metrics
- Row-level actions such as Add Row, Open Details, Star, Create Detail Row, Insert Row Below, and Delete
Row
- Budget Plan actions such as Approve Budget, Reject Budget
- The Hamburger menu settings are accessible only for the Selected Plan columns, yet the settings affect both the `Compare to:' <Plan> and Deltas columns.
- To remove the comparison from the grid, select None from the Compare to: drop-down list.
IMPORTANT
- Export to CSV is disabled while comparing plans.
- Widgets render data from the Selected Plan (not the `Compare to:' <Plan>).

Working with Forecasts
Cost Plan and Budgets details have two Forecast attributes:
1. The forecast is defined as the sum of the actual amount for the fiscal period completed and the planned amount for the current fiscal period and the fiscal period in the future. Here are the formulae for Forecast: a. For the fiscal period completed, Forecast = Actual Cost b. For the current fiscal period and the fiscal period in the future, Forecast = Planned Cost
2. Forecast variance is defined as the difference between the planned cost and forecast. Here is the formula for Forecast Variance: a. Forecast Variance = Planned Cost
- Forecast
This section contains the following topics:
- Forecast Cutover
- Example
- Other Forecast Definitions

Forecast Cutover
Here are the formulae for Forecast based on Forecast Cutover:
- Till the forecast Cutover Forecast = Actual Cost for the fiscal period
- After the forecast Cutover date  Forecast = Actual Cost for the fiscal period ended + Planned Cost for the fiscal
period in the future
Forecast Cutover allows you to overwrite how Forecast is calculated. When you populate the Forecast Cutover field, Clarity will calculate Forecast as the sum of the actual amount till the Forecast Cutover date and the planned amount for the fiscal period in the future.

Example `Hedmoral'
The details of posted actuals:

September October November

Month

01 September 2021 01 October 2021 01 November 2021

Posted Actuals


The Forecast and Forecast Variance are:


| 2021-09 | Transaction Class External Labor

Resource Class Offshore

Cost 10,000

Actual Cost 9,000

Forecast 9,000

Forecast Variance 1,000

| 2021-10 | Transaction Class External Labor

Resource Class Offshore

Cost 10,000

Actual Cost 9,000

Forecast 11,258

Forecast Variance 2,258

| 2021-11 | Transaction Class External Labor

Resource Class Offshore

Cost 10,000

Actual Cost 9,000

Forecast 10,000

Forecast Variance 0

In October, the actuals are posted on 01 October 2021. So, Clarity takes the actual cost of October completely based on the forecast cutover date, along with the planned cost for the remaining seven days.
Here is the calculation:
Forecast= Actual Cost + Planned Cost = 9,000 + ((10,000/31)*7)=9,000 + 2,258=11,258
Follow these steps:
1. Open an investment and click FINANCIALS. 2. In Cost Plan, click the (+) plus icon. 3. Complete the required fields. 4. Open the Column panel and check Forecast Cutover. 5. Add a date in the Forecast Cutover column. 6. Open the newly created cost plan. 7. Edit the cost plan details. 8. Navigate to View Options, PER-PERIOD METRICS. 9. Select Actual Cost, Cost, Forecast, and Forecast Variance. 10. Close View Options. 11. Click the next/previous arrow in PER-PERIOD METRICS to view the next/previous period details.
An Investment is planned for 12 months with a budget of $120,000. After three months, the amount spent is $27,000. The Forecast Cutover is set for October 25, 2021.

Other Forecast Definitions
- Total Forecast is defined as the sum of all forecast amounts between the enclosing fiscal periods (based on Sum of Periods and Grand Totals setting in View Options).
- Total Forecast Variance is defined as the difference between Total Planned/Budgeted Cost and Total Forecast.
- Total Forecast Variance = Total Planned/Budgeted Cost
- Total Forecast
NOTE The forecast attributes are not available in Classic PPM.

Working with Benefit Plans and Actual Transactions


The Financials module in Clarity supports Benefit Plans. Creating a benefit plan and associating it with a cost plan allows you to estimate the benefit from custom investments or Net Present Value (NPV) on a custom investment.
- The cost plans follow the approval process to become a formal budget; however, there is no need to approve benefit plans.
- A benefit plan can be associated with multiple cost plans; however, a cost plan can have only one associated benefit plan.
- To manage benefit plans, create a benefit plan to associate with cost plans or update existing plans
NOTE You cannot delete a benefit plan that is associated with any cost or budget plan.
- Remember that the saved views are shared across the financial modules of different investment types. For example, if you save a view in the Benefits Plan grid for a custom investment, the same view is available in the Benefits Plan grid for ideas and projects.
You can work with the benefit plans as follows:
- Create a Benefit Plan
- Edit Benefit Plans Details
- Associate Benefit Plans with Cost Plans
- Associate Benefit Plans with Submitted Budgets
This section contains the following topics:
- Create a Benefit Plan: Intro
- Edit Benefit Plans Details
- Setup View Options
- Associate Benefit Plans with Cost Plans
- Associate Benefit Plans with Submitted Budgets
- Actual Transactions
- View Multicurrency Transactions
Create a Benefit Plan: Intro
1. Open a custom investment and click FINANCIALS module. 2. Click Benefit Plans, and click the (+) plus icon. 3. Complete the following fields:
a. Name: Enter a name for the benefit plan. b. Period Type: Defines the time period unit that appears on the benefit plan, such as Weekly, Monthly, Quarterly, or
Annual. c. Start Period: Defines the first time period to include in the plan. d. Finish Period: Defines the last time period to include in the plan. e. ID: Enter an ID for the benefit plan. 4. Save the changes.
Edit Benefit Plans Details Use these steps to add line item details to a new benefit plan. The details that you add appear under the Detail field on the benefit plans details list page. You can only define details for the time periods that are applicable to the benefit plan.Follow these steps:
1. With the benefit plan open, click the (+) plus icon. 2. For each benefit detail, complete the following fields in the Benefit Details section:
a. Benefit Class: Select an option in the Benefits Class field.


b. Benefit Subclass: Select an option in the Benefit Subclass field. c. Description: Enter a brief explanation of the plan. 3. Review the following fields for each benefit detail line item: a. Benefit: Defines the planned benefit amount for the time period. b. Actual Benefit: Defines the actual benefit amount for the time period. c. Variance: Displays the difference between the actual and the planned benefit for the time period.


Setup View Options
You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.
REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.
IMPORTANT
When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics. 9. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.
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


10. Select the Show Indicator on Non-Default Values toggle to display visual indicators when the default values of the following attributes are updated.
- Default allocation percentage
- Grand Totals or Totals column
- Allocation Start and Finish date columns
- Individual allocation per-period metrics

This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.


11. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.
12. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off. 13. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread
across the time periods. 14. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget
to quickly cycle through the data for various periods. Your Start Period and End Period settings will update the widget and as you cycle through periods in your widget, the Start Period and End Period will also be updated.
NOTE Some of the key points to remember are:
- You can secure and relabel the TSV attributes using Field Level Security. While TSV attributes can be
relabeled, they cannot be secured.
- You can use the TSV totals in widgets.
- You can include the custom TSV data in the page.
- You can edit the custom TSV data in the page.
- You cannot add TSV totals to the Details Panel.
- Forecast data will only be displayed in TSV if a detailed cost plan has been created for the investment.
- Financial data is read-only in the page.
- If you are using the board layout, you can configure columns, swimlanes, sort, and color.
- If you are using the timeline layout, you have the Color By option.
Associate Benefit Plans with Cost Plans Use these steps to associate a benefit plan with a cost plan.
Follow these steps: 1. From the Cost Plan list, select a cost plan. 2. In the Benefit Plan field, select a benefit plan.
Associate Benefit Plans with Submitted Budgets The benefits plan that is associated with a cost plan carries over to the submitted budget. This association can only be changed while the budget is in a submitted state. Once approved, the benefit plan association cannot be changed.
Follow these steps: 1. From the budget plan list, select the budget plan. 2. In the Benefit Plan field, select a benefit plan.
Actual Transactions In the Financials modules, along with the Cost Plans, Budget Plans, and Benefit Plans, you can now see the Actual Transactions grid. This grid is non-editable and displays the actual costs posted through transactions for an investment by transaction date, quantity, cost, and currency information.
With the Actual Transactions grid, a financial manager can:
- Better understand an investment's financial visibility.
- View the list of transactions that are posted and an overall summary of all the transactions associated with the
investment in a single place.
- Compare transaction currency amounts to converted currency amounts by task and resource.

Clarity displays actual transactions by using the generic grid and inherits all the generic grid capabilities. You can see the Details panel when you select a row in the grid. However, you cannot perform these generic grid capabilities.
- Edit a row in the grid
- Add or delete a row
- Right-click context menu
Access Rights
Ensure that you have the following access rights to access the Actual Transactions grid:
- <Investment> - Cost Plan
- View
- <Investment> - Cost Plan - Edit
- <Investment> - Budget Plan
- View
- <Investment>- Budget Plan
- Edit
Source for Actual Transactions
The data in the Actual Transactions grid populates after the following jobs are executed in Classic PPM:

Method for Posting Actuals Timesheet Entry
Transaction Entry
XOG

Jobs
- Post Timesheet
- Post Transactions to Financial
- Post to WIP
- Post to WIP
- Update Financial Plan Actuals and
Forecast
- Post Transactions to Financial
- Post to WIP
- Update Financial Plan Actuals and
Forecast

Managing Records By Using the Grid Layout
The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Pin, resize, reorder, and reset columns to personalize each grid.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to
create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Export the common grid data to a CSV file. The Classic PPM user interface supports the export of up to 25000 rows to
CSV file. In this release Clarity supports the export of up to 250,000 rows to CSV files.
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


View Multicurrency Transactions
You can now view multicurrency transactions in the grid. This enhancement allows you to record, view, and analyze financial transactions across multiple currencies with accurate conversion and reporting.
This enhancement includes:
- Home or Investment Currency: The currency associated with the investment.
- Billing Currency: The currency used for invoicing and billing.
- Reporting Currency: The currency used for corporate reporting or consolidation.
- Transaction Currency: The currency selected when entering a transaction manually.
Scenario: Hedmoral Bank
Hedmoral Bank is a global financial institution with operations in the UK, US, Australia, and Japan. The bank manages investments across multiple regions, with the Home (Investment) Currency set to GBP.
A US-based project team enters a transaction for software licensing costs:
- Transaction Currency (entered): USD
- Billing Currency (for client invoicing): AUD
- Reporting Currency (for consolidation): JPY
- Home (Investment) Currency: GBP
Process:
1. The team enters the transaction in USD in the Unposted Transactions object. 2. When the transaction is posted, Clarity automatically converts the USD amount using the effective exchange rates
configured for the transaction date:
- GBP (Home/Investment Currency)
- AUD (Billing Currency)
- JPY (Reporting Currency) 3. Each currency field in the Posted Transactions grid displays the converted value.
Benefits for Hedmoral Bank:
- Project managers can see actual costs in the local currency of the project team (USD) and compare them with billing amounts (AUD).
- Finance analysts can consolidate costs and revenue in JPY for corporate reporting.
- Executives can track investment performance in GBP, the bank's base currency, ensuring consistent financial visibility
across regions.
- Reduces manual currency conversions and improves reporting accuracy for global projects.
This capability allows Hedmoral Bank to manage multicurrency investments efficiently, maintain consistent reporting, and improve financial decision-making across international operations.
Follow these steps:
1. Log in to Clarity. 2. Navigate to the relevant page.


3. Configure the required currency fields using Columns. 4. View the transactions in different currencies directly in the grid.


Custom Investments: Assign Resources, Roles, or Teams to Tasks
The Assignments module serves as a comprehensive resource management tool, empowering project managers, Scrum Masters, and resource managers to manage task assignments and perform strategic resource planning efficiently. This module provides a centralized platform where teams can assign resources, roles, or teams to specific tasks within custom investments, enabling better coordination and resource utilization across projects.
The module facilitates both task-level and resource-level assignment approaches, offering flexibility in how work is distributed and managed. Project managers can either focus on specific tasks and assign the appropriate resources to them, or they can take a resource-centric approach by selecting team members and assigning them to relevant tasks across the investment. Additionally, the Assignments module incorporates advanced time-phased data handling through SQL curve technology, enabling users to view and analyze estimate-to-complete (ETC) values and other metrics without the restrictive time windows present in earlier versions.
This section contains the following topics:
- Prerequisites
- Setup View Options
- Video: Adding Assignments to Investments
- Configure the Assignment Pool
- Assigning Tasks
- Verify Task Assignments
- Plan the Resource and Role Assignments for Investment Tasks
- Update Cell Values in the Totals Column and Per-Period Columns
Prerequisites
- Before you attempt to view per-period metrics, verify that you have set up a sufficient quantity of fiscal time slices. For example, if you plan to view data spanning 52 weeks, define those 52 weeks in advance.
- Set your Unit of Measure preferences in Hours/Days/Full-Time Equivalents (FTE). You can set the unit of measurement for work effort fields such as allocations, estimates, or actuals by updating your general settings.
ATTENTION The Assignments module leverages the SQL curve technology introduced in Clarity 15.9.1 to significantly improve the handling of time-phased data. You will now be able to view time-phased data without the restrictive time windows available in Classic PPM. The SQL curve technology also allows you to aggregate time-phased data by using the Group-By functionality. It also enables Clarity to display the remaining availability for all resources (resource availability - resources aggerated allocations across investments ) in the Staff grid across investments. The Time Slicing Sync job is scheduled to run every five minutes. If you do not execute this job in your environment, you may not see accurate metric data.
- If you do not see the Assignments tab in your investment, contact the administrator to configure the investment blueprint with the Assignments module.
Video: Adding Assignments to Investments
The following video describes how to add assignments to investments.
NOTE This video will not be available when you download the documentation in PDF format. Click here to watch the video on YouTube.


Setup View Options You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs). Follow these steps: 1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.
REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.
IMPORTANT
When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics. 9. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.
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
- If you are using the timeline layout, you have the Color By option.
Configure the Assignment Pool
An assignment pool defines the scope of resources you have for assigning tasks. The following options are available:
Team Only (Default): Specifies that you can only choose resources, roles, and teams that are added in the STAFF tab for assigning tasks. If you select this option, you must add the required resources, roles, and teams to the STAFF tab first and then assign them tasks.
Resource Pool: Specifies that you can choose resources from the global resource pool for assigning tasks. In this case, you can choose any resource for which you have the booking rights. If you select this option, you need not populate the STAFF tab manually; the resource and roles that you select in the Assignment tab are automatically added to the STAFF tab.
Follow these steps
1. In the Clarity main menu, click the relevant investment page. 2. Open an investment. 3. Complete the following steps to configure the assignment pool setting for the investment. 4. In the grid view, click the Columns Panel icon in the right pane. 5. Search for Assignment Pool and select it.The Assignment Pool column is added to the grid view. 6. Click on a row and change the Assignment Pool setting to Team Only or Resource Pool for that instance. 7. The assignment pool setting is updated for the selected investment.
Assigning Tasks
As a Project Manager, Scrum Master, or Resource Manager, you assign tasks to the appropriate resources, roles, or teams so that the right people are involved in each task. You want to assign more than one resource, role, or team to a task depending on the complexity of the task.
You can assign tasks to resources, roles, or teams using one of the following methods:
- Assign work at the task-level - This method lets you add or modify assignments in the context of a specific task. You can use this method when you want to assign a task to specific resources, roles, or teams.
- Assign work at the resource-level - This method lets you add or modify assignments across all the tasks in the investment. You can use this method when you want to assign a resource, role, or team to specific tasks in the investment.

NOTE You can assign a resource or team to a task only once. However, you can assign a task to different instances of the same role. Add the role as many times as you need for task assignment in the STAFF tab. For example, if you want to assign a task to two Developers, add the Developer role twice in the STAFF tab. Use the column panel in the STAFF tab to add the Requirement Name field to distinguish between the different instances of the same role.
In either case, you can assign tasks to a resource from the global resource pool or from the Staff list, depending on the assignment pool setting for the selected project.
Add, Modify, Delete, or View Assignments at the Task-Level
Assign work at the task-level when you want specific resources, roles, or teams to work on a task. Sid, the Project Manager wants to assign an Architect, a developer, and a UX Designer to the Research and Development task so that they all work in tandem to complete the R&D work with the desired outcome.
1. In the Clarity main menu, click the relevant page. 2. Open an investment. 3. Complete the following steps to assign work at the task-level:
- Click the Tasks tab.
- Click on the task that you want to assign resources to. In this example, click the Research and Development task.
- Click the DETAILS panel.
- Click on the Assignments tab in the Details panel.
- Add the resources, teams, or roles that you want to assign to the task.
The selected staff are assigned to the task. You can modify or delete the assignments until any actuals are posted for the assignment.
- Click Expand to use some key capabilities of the common grid such as Views, Group-by, Filter, and Export to CSV.
Alternatively, you can use the Task List tab of the project to assign tasks, provided that your administrator has configured the Task List module in the project blueprint. The Task List tab groups the assignments by tasks and provides a quick view of the assignments for each task in the project. You can also click any of the tasks in the Task List tab and add the assignments in the right pane.
Add, Modify, Delete, or View Assignments at the Resource-Level
Assign work at the resource-level when you want to assign a resource, role, or team to specific tasks in the project or an investment item. For example, Sid wants Architects to review and approve all the design tasks. He wants to be able to select the Architect role and assigns every design task to the role, instead of opening each design task and adding the architects to the tasks.
Follow these steps:
1. In the Clarity main menu, click Projects or Project Tiles. 2. Open a project. 3. Complete the following steps to assign work at the resource-level:
a. Click the Assignments tab. b. Click + to add an assignment. Select the resource, role, or team that you want to assign tasks to. In this example,
select the Architect role. NOTE Depending on the Assignment Pool setting, you can either select a resource from the global resource pool or only from within the staff. For more information, see the Configure the Assignment Pool section.
c. Select the task name from the Task field. Naming the tasks appropriately helps in quickly identifying and assigning the tasks. For example, you can prefix the design tasks with "Design:" so that you can easily select them from the list and not miss adding any.

d. Repeat steps 2 and 3 for all the design tasks that you want to assign to the architects. The selected staff is assigned to the task. You can modify or delete the assignments until any actuals are recorded.
Verify Task Assignments After all the assignments are completed, you can ensure that every task has the required people and roles involved and every role has the right tasks assigned. Follow these steps: 1. In the Clarity main menu, click the relevant investment. 2. Open an investment. 3. Complete the following steps to group tasks:
a. Click the Assignments tab. b. To view the assignments by task, do the following:
a. Drag the Task column to the Group By section. b. Expand each task and ensure that you have added the required resources, roles, and teams. c. To view the assignments by role or resource, do the following: a. Drag the Resource column to the Group By section. b. Expand each role or resource and ensure that the right tasks are assigned to them. The following screenshot shows the ASSIGNMENTS page with assignments grouped by resource roles:
When you group by resource, task, or owner, the application aggregates time-scaled values such as ETC, EAC, and actuals for cost or effort. Exit group-by mode to edit TSV values.
Plan the Resource and Role Assignments for Project Tasks Follow these steps: 1. Click ASSIGNMENTS. 2. To apply a view, click VIEW and select a saved view. You can also continue working in an unsaved view. 3. To filter the data in the grid, click Filter.
a. Click ADD FILTER. b. Select a filter field. c. Select one or more filter values. Click away in the neutral white space above the filter bar to apply your filter to the
grid. 4. To group the data, drag its column header into the Group By bar. 5. To sort the data, click a column header or press the Shift key while you click up to four columns.

6. For resource planning, the grid displays per-period metrics spanning multiple time periods. Click View Options. a. Specify your preferences for the display of money and number data. b. In the PER-PERIOD METRICS field, select one or more metrics. c. In the PERIODS field, select a unit of time (weeks, months, quarters, or years). d. Select the START PERIOD and END PERIOD. The values in those fields adjust to the value you selected in the PERIODS field.
7. To save your current view, click View, Save As. 8. Click X Close.
TIP Two or more attributes could have the same name or label in the user interface but represent different data types. For example, the Assignments module shows Actual Cost as a Money datatype and Actual Cost as a time-varying attribute for the actual cost curve data that appears in per-period metrics. Other examples include Actuals, ETC, and ETC Cost.
Update Cell Values in the Totals Column and Per-Period Columns The STAFF and ASSIGNMENTS grids support the following subtle features and options:
- You can configure the grid (click Column Panel) to show allocation values in a Totals column, in per-period metric
columns, or in both.
- When you show both, you can enter separate values in each per-period column and see them counted toward the
value in the Totals column.
- Conversely, you can enter one value in Totals and watch the application dynamically spread the allocation across the
remaining periods in the current view. You can also copy and paste values spanning multiple cells; however, exercise caution as you might get unexpected results.
- When copying and pasting in a grid, verify the cell dimensions and columns you want to copy and paste are the same.
- We recommend that you avoid copying and pasting values from inside both the Totals column and per-period metric
columns in the same operation. Use one or the other. In other words, do not attempt to update values for the Totals column and for per-period columns in a single paste operation.
Creating To Dos for Custom Investments
Clarity's To Dos functionality provides a comprehensive task management system that allows you to create to-do items for various components within your investment management workflow. To Do's help break down work into smaller, manageable activities that can be tracked and completed to ensure successful investment management. The To Dos module operates at multiple levels within Clarity, offering flexibility in how you organize and manage your work. You can create to-do items for investments, phases, milestones, or tasks, providing a hierarchical approach to activity management. The To Do's capability in Clarity integrates seamlessly with other modules, allowing you to create To Dos not only for investments but also for Tasks, Risks, Issues, and Changes, all of which can be viewed and managed through the centralized To Dos module or the dedicated To Dos Workspace.
NOTE To learn more about the To Do's workspace, see To Dos Workspace. This section contains the following topics:
- Pre-Requisites for Using the To Dos Module
- Setup View Options
- Creating To Dos for Investments
- Managing Attachments for a To Do
- Managing Records By Using the Grid Layout
- Working with Widgets
Pre-Requisites for Using the To Dos Module
Your administrator needs to perform the following actions to ensure you can use the To Dos module.
1. You have one of the following access rights:
- To Do - Create - All
- To Do - Delete - All
- To Do - Edit - All
2. You have view access to the investment. 3. Your investment is associated with a blueprint that includes the To Dos module.


Setup View Options
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
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


5. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

6. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

7. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

Creating To Dos for Investments
You can now create To Dos at an investment level so that you can track and complete activities to manage the investment successfully. These are typically higher-level activities that may not have specific tasks created for them.


Follow these steps:
1. Log into Clarity and navigate to the relevant Investments page. 2. Ensure the investment is mapped to a blueprint that has the To Dos module. 3. Open the investment and click To Dos. 4. Click Columns and add the Parent and Parent Type attributes to the grid. This will help you differentiate between To
Dos associated with investments and tasks. 5. Click Add Row and enter the name of the To Do to create a new To Do item. You can only create To Dos associated
with investments in the To Dos module. You can create To Dos for tasks on the Tasks module.
REMEMBER Some of the key points to remember while using the grid are:
- To Dos are implemented as a Studio Object but cannot be leveraged in Classic PPM.
- The Data Warehouse uses the new To Dos tables.
- To Dos stock attributes are Name, ID, Owner, Due Date, and Completed
- The To Dos ID field supports auto-numbering
- The To Dos object does not support the ability to create Sub-Objects.
- You can star various To Do's to mark them as a favourite.
- You can create custom attributes for the To Dos object in Clarity.
- The To Dos Object is not enabled for use with BPM processes.
- The To Dos Due Date has no limitations and can fall outside an investment's Start and Finish Dates.
- When a To Dos is copied over from a template, Clarity populates the To Dos Due Date with whatever is in the Due Date field (e.g., blank or actual) before copy.
Managing Attachments for a To Do
Upload an attachment
Follow these steps:
1. Open To Dos in Clarity. 2. In Columns, check the Attachment field. 3. Click the Edit icon in the Attachment column for a To Do. 4. Click the Upload File icon in Attachment. 5. Select a file from the local machine and click Open.
NOTE You can only upload only ten files for a To Do. If you try to upload more than ten files, an error message appears: "Uploading more than 10 files is not allowed".
WARNING You can only upload only one file at a time for a To Do.
View an attachment
Follow these steps:
1. Open To Dos in Clarity. 2. Click the Edit icon in the Attachment column for a To Do. 3. Click on the uploaded file name to download and view it.
Delete an attachment
Follow these steps:
1. Open To Dos in Clarity.


2. Click the Edit icon in the Attachment column for a To Do. 3. Click the Delete icon in Attachments to remove the uploaded file from the list.


Managing Records By Using the Grid Layout
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

Working with Widgets
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
Key Points to Consider
Some key points to remember while using ToDo's in Clarity are:
- To Dos are implemented as a Studio Object but cannot be leveraged in Classic PPM. The Data Warehouse uses the new To Dos tables, ensuring proper data integration within the modern Clarity architecture.
- The To Dos system includes stock attributes such as Name, ID, Owner, Due Date, and Completed. The ID field supports auto-numbering for automatic identification, while Clarity allows you to star various To Dos to mark them as favorites for quick access.
- The To Dos system includes stock attributes such as Name, ID, Owner, Due Date, and Completed. The ID field supports auto-numbering for automatic identification. Clarity also allows you to star various To Dos to mark them as favorites for quick access.
- The To Dos Due Date has no limitations and can fall outside an investment's Start and Finish Dates, providing flexibility in scheduling activities that may extend beyond the formal project timeline.
Creating and Managing Investment Checklists
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

Clarity - 16.4.1 467

Changing the Status of a Checklist Follow these steps: 1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to change the status. 3. Click Three-dot Action Menu and select Mark Complete.
You can see the Checklist under the Completed heading in the Checklist Panel. The Completed heading in the Checklist panel will be collapsed by default, and you can expand it to see the completed checklists.
REMEMBER Clarity enables the Mark Open option for the completed Checklist. You can re-open the checklist using Mark Open in Three-dot Action Menu. Moving a Checklist to an Investment/Agreement You can move the checklist from an Investment to another Investment/Agreement using Move Checklist in Three-dot Action Menu. Here is the flow to move a checklist:
Follow these steps: 1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to move from one Investment/Agreement to another Investment/Agreement. 3. Click Three-dot Action Menu and select Move Checklist. 4. Select an Investment/Agreement where the checklist needs to be moved. 5. Select the specific Investment/Agreement in the Move Checklist to (Investment/Agreement) pop-up window displaying
object-specific list. 6. Click Move.
The Checklist will be moved to the selected Investment/Agreement. You don't see the checklist in the Investment. Removing a Checklist from an Investment/Agreement Follow these steps: 1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to remove from Investment/Agreement.

3. Click Three-dot Action Menu and select Remove Checklist from Investment/Agreement.. The Checklist will be removed from the Investment/Agreement. The link to the Investment/Agreement will be removed from the Checklist. REMEMBER The removed checklist from the investment will be available in "My Workspace".
Deleting a Checklist Follow these steps: 1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to delete. 3. Click Three-dot Action Menu and select Delete.
The Delete Checklist pop-up window opens with the message
- "All To Dos in this checklist will be deleted" 4. Click Delete.
REMEMBER If you delete the checklist from the investment, then it is also deleted from "My Workspace". Transferring Checklist Ownership 'Co-Owner' has all the rights of 'Owner', including the ability to delete the checklist and remove other collaborators from the checklist. IMPORTANT Owner cannot be removed. If you move a checklist to an investment, then the manager of the investment is added as a Co-Owner of the checklist. Refer to the following scenario to learn more:

Managing To Dos You can now create To Dos in checklist so that you can track and complete activities to manage the investment successfully. These are typically higher-level activities that may not have specific tasks created for them. You can assign an Owner and set due date for a To Do. You can also block and unblock To Dos.
You can perform the following actions in To Dos:
- Creating a To Do
- Assigning a Resource for a To Do
- Setting a Due Date for a To Do
- Adding/Editing a Link for a To Do
- Blocking a To Do
- Marking a To Do as Completed
- Rearranging To Dos Creating a To Do Follow these steps: 1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to add To Dos in it. 3. Click New To Do and enter the name of the To Do. 4. A new To Do will be created. Assigning a Resource for a To Do Follow these steps: 1. Open an investment in Clarity and click Checklists.


2. In the Checklist, click a To Do to assign a resource. 3. Click Assign Owner. 4. Select a user from the list.


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


Working with Collaborators The Checklist can be shared with one or multiple users. The Checklist can only be shared with users defined in Clarity. Collaborator names can be searched by name or email address in the Share Checklists pop-up window. Users with whom the Checklist is shared are added as "Collaborators". Owner and collaborator avatars are displayed next to the Share button and the total counter.
NOTE Only owners can share a checklist with others or remove a collaborator.
You can perform the following actions in Checklist:
- Sharing a Checklist
- Modifying Checklist Sharing Group
- Removing a Collaborator
- Roles in Checklists Sharing a Checklist Follow these steps: 1. Open an investment in Clarity and click Checklists. 2. Click the Checklist that you want to share with others. 3. Click the Share button. The Share Checklist pop-up window opens. 4. Search by name or e-mail address. 5. Select the name/e-mail address to add the user as a collaborator. You can add multiple users as collaborators. 6. Click Done.
NOTE Some of the key points to remember are:
- If you assign an owner and do not share the checklist with the assigned owner, then the owner can view the To Do in his/her My Workspace but cannot perform any actions on it.
- Only the Checklist owner and collaborators can see their checklist. Other users will not see any checklist unless a checklist is shared with them.
Modifying Checklist Sharing Group The Checklist Sharing group is seeded in Clarity. Users with whom a checklist is shared are automatically added to this group. This group helps the Administrator to: 1. Add and remove access rights for the group. 2. Add and remove users from the group. Follow these steps: 1. Click Administration, Organization and Access, Groups. 2. Click the Checklist Sharing group. 3. Open the Access Rights menu and click Global. You can see the following access rights in Checklist Sharing group:
a. Checklist
- Create b. My Workspace
- Navigate c. Resource - View
- All d. To Do - Create
- All e. To Do - Delete
- All f. To Do - Edit
- All g. To Do - View
- All To add additional access rights: 1. Click Add. 2. Select the appropriate global rights for the user group and click Add. 3. If more access rights are available on additional pages, click Add and Select More. Continue assigning access rights until all appropriate access rights have been assigned. 4. When you have finished assigning global rights to the user group, click Return. To remove access rights: 1. In Checklist Sharing - Global Access Rights, select the access right that you want to remove from the list. 2. Click Remove.
Removing a Collaborator Follow these steps: 1. Open an investment in Clarity and click Checklists. 2. Click the Checklist from which you want to remove a collaborator. 3. Click the Share button. The Share Checklist pop-up window opens, and you can see the list of Collaborators with an
Owner. 4. Click Three-dot Action Menu of the collaborator and select Remove.The collaborator will be removed from Share
Checklist.


Roles in Checklists Roles in Checklists define who will take responsibility for performing checklists actions.


Roles
Owner
Co-Owner
Collaborator
Participant with Investment-View Access Right

View # # # #

Share # # # #

Copy # # # #

Rename # # # #

IMPORTANT Some of the key points to remember while working as a Collaborator:
- You can see a collaborator icon for the checklist shared with you.
- You can view the other collaborators working on the checklist by clicking the Share button. It is read-only. You
cannot add or remove collaborators.
- You will become the owner of the copied checklist. You can perform all the checklists actions (View, Share,
Copy, Delete, and Rename) on the copied checklist.
NOTE To learn more about My Workspace, see Creating and Managing To Dos in My Workspace.

Hierarchy Module for Investments

The Hierarchy module for investments in Clarity is a powerful feature designed to manage parent-child relationships between different types of investments, including ideas, projects, and custom investments. This module provides a structured approach to organizing investments in a hierarchical manner, enabling users to associate multiple child investments with a parent investment and view these relationships in an organized format.
The module is particularly valuable in scenarios where organizations need to synchronize mapped information between Clarity and external systems like Rally. For instance, when a Clarity investment is mapped to a portfolio item in Rally, the Hierarchy module can automatically include all mapped children of Portfolio Items (such as Epics) in the synchronization process through the "Sync Children of Parent" option. This automation eliminates the need to manually map every child investment in Rally to an investment in Clarity and populate the Parent attribute individually


You can also use the Parent attribute to associate multiple child investments (ideas, projects, and custom investments) with an investment. This section contains the following topics:
- Setting Up View Options
- Managing Records By Using the Grid Layout
- Working with Widgets Setup View Options You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs). Follow these steps: 1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.


REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options. IMPORTANT
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
- If you are using the timeline layout, you have the Color By option.
Managing Records By Using the Grid Layout
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

Working with Widgets
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
Agreements For Investments
The success of any large organization depends on the seamless execution of hundreds of different investments that are loosely or tightly coupled with each other. Most customers struggle to capture and manage agreements between these investments. Generally, the discussions on the dependencies between investments happen in planning meetings, and the decisions are documented in emails which get buried very quickly.
Hence, when critical investments in an organization introduce changes that impact their delivery dates, most stakeholders are caught unaware, and the effects are felt both upstream and downstream. When you analyze the root cause of such failures and delays, you identify two key reasons.
1. There is no single place of truth in the organization where stakeholders can review dependencies between investments. Hence, they are unaware of the impact of making changes that extend the timelines of any investment.
2. Most stakeholders simply don't remember all the investments dependent on them and the ripple effect of introducing changes.

The Business Agreements workspace in Clarity addresses these challenges by enabling you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates. This section contains the following topics:
- Create Agreements
- View Business Agreements for Investments in Clarity
- Setup View Options
- Managing Records By Using the Grid Layout Create Agreements
The Business Agreements capability in Clarity enables you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates. You can create business agreements from the following investment areas:
- Agreements module within the investment
- The Details panel of the investment in the relevant investment workspace
- The Details panel of the investment in the Hierarchies workspace (Grid and Timeline layout)
- The Details panel of the investment in the Roadmaps workspace

Administrators can determine how users can create Business Agreements by editing the associate investment blueprint. Consider a scenario where the administrator wants to enable users to create business agreements for projects. They can edit the Project template, select the Agreements module, and select from the following options:
- Enable Quick Create: This option allows users to create an agreement by clicking the plus (+) icon within the
Agreements module.
- Enable Create Dialog: Allows users to use the Create from Template option to create business agreements from the
agreements module.
- Show in Details flyout: Allows users to create an agreement from the Details module in the Projects workspace since
you are editing the Project blueprint. This capability is available for the Grid and
When you create a business agreement from an investment, the successor is automatically set to that investment. The agreement is also available in the Agreements workspace, where stakeholders can review all the agreements relevant to them based on their access rights. You can also view these business agreements in roadmaps and hierarchies when you import the relevant investment.
Follow these steps:
1. Navigate to the relevant workspace and click the associated investment. 2. Click Details and select the Agreements module. 3. Click the Add Row icon to create a new agreement. 4. Type the name and press Enter to create the agreement. 5. After creating the agreement, populate the predecessor, successor, commitment, and deadline fields to ensure the
agreement includes relevant information.
Create Agreements from a Template
You can use the Template attribute in the Agreements workspace to select a set of common agreements your organization uses as a template. You can then leverage the New from Template option in the Agreements module associated with investments to create new business agreements based on a specified template. This allows organizations to standardize the format of business agreements across multiple divisions and business units.
Follow these steps:
1. Navigate to the Agreements module for the associated investment. 2. Click the New from Template button to open the Select a Template dialog. 3. Select the relevant template and click Next. 4. Enter the various details in the New Agreement window and click Create. 5. After creating the agreement, populate the predecessor, successor, commitment, and deadline fields to ensure the
agreement includes relevant information.
Setup View Options Follow these steps: 1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.


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


5. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

6. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

7. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

Managing Records By Using the Grid Layout
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
- Filters The Business Agreements workspace in Clarity addresses enables you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates. When you create an agreement between investments, you can see this agreement in the Agreements modules within those investments. Your administrator will need to add the Agreements module to the blueprint associated with your investments. You cannot edit agreements from within your investment. However, you can click the Agreement Name and navigate to the Agreements workspace. To learn more about the workspace, see Create and Manage Business Agreements. No new capabilities have been introduced in this release. The Agreement - Create, Agreement - Delete, Agreement - Edit, Agreement - Navigate, and Agreement - View instance and global access rights are available for working with Business Agreements. Some key points you can remember are:
- You can use blueprints to configure layouts for the Agreements workspace and to add the Agreements module to investments. To learn more, see Configure Blueprints for Business Agreements.
- The Agreements modules for investment objects will not be automatically added to the default blueprint. Administrators will need to manually add the Agreements modules to the relevant blueprints. {"URL":["/project/*/agreements/grid","/idea/*/agreements/grid","/investments/*/agreements/ grid"],"description":"IPCE_Description","new":"IPCE_New","admin":"IPCE_Admin","troubleshooting": {"masterkb":"","text":"the following KB articles will help you","URL": ["https://knowledge.broadcom.com/external/article? articleId=227703"]}, "pendo":"","video":["https://youtu.be/MbdxQcb2S2k"]}
Manage Risks, Issues, and Changes for Custom Investments
The Risks, Issues, and Changes (RICs) module in Clarity is a comprehensive project management tool designed to help scrum masters and project managers effectively manage project uncertainties and modifications across all types of investments. This module enables teams to create, track, and manage new risks, issues, and change requests within each investment, providing a centralized platform for proactive risk mitigation and issue resolution. The RICs module has undergone significant enhancements in recent releases, expanding its availability from projectsonly to all investment types including Projects, Custom Investments, Ideas, and Team Investments. This expansion reflects Clarity's commitment to providing unified risk management capabilities across the entire portfolio management ecosystem. The module now operates at the abstract investment level rather than being confined to specific project objects, making it more versatile and accessible for various organizational structures. This section contains the following topics:
- Verify Prerequisites
- Setup View Options
- Upload Documents
- Managing Records By Using the Grid Layout
- Working with Widgets
- Create Custom SubObjects for Investments
- View Action Items in Investments
- Copy an existing Risk, Issue, or Change Request
- Create Risks, Issues, or Changes from existing RICs
- Create To Dos for Risks, Issues, and Changes


Verify Prerequisites
Verify that you have the required access rights to work with risks, issues, and changes. Refer to the following documentation for details:
- See Project and Portfolio Management Access Rights for the complete list of access rights required for managing risks, issues, and changes. New Global access rights to manage Risks, Issues, and Changes, for projects, ideas, and custom investments have been introduced.
- Ensure that the Risks, Issues, and Changes modules are added to the blueprint.

Setup View Options
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
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


5. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

6. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

7. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

Upload Documents You can upload, download, and delete documents associated with Risks/Issues/Changes.


Follow these steps:
1. Open an investment. 2. Click Risks, Issues, or Changes to navigate to the corresponding page. 3. Click Column Panel.
a. Select Document. b. To close the column panel, click X. 4. Hover over the Document cell in the grid and click the Edit (pencil icon) option. 5. Click the Upload icon to upload the file. 6. Select a file and click Open. A link appears under the Document column. 7. To download the file, click the link in the Document column.
NOTE
Some of the key points to remember while using the Document field are:
- You can attach multiple documents to it.
- You can attach a maximum of ten documents to it.
Here are the Document attribute settings in Classic PPM:


As an administrator, you determine document settings. For example, set the Authorized File Extensions field to limit acceptable file types. See Configure General System Settings.

IMPORTANT You can now secure fields associated with the RIC object by using the Field Level Security grid. To learn more about using the Field Level Security grid, see Secure Field Level Access.
Managing Records By Using the Grid Layout
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
Working with Widgets
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
down capabilities. You can create the following widgets in this release. Each widget supports distinct operations such as Count, Sum, and Average. You can also specify the color of the widget and select the relevant display format (number or percentage).
- Number Tile Widget: Displays a specific number based on the widget definition and filter criterion.
- Pie Widget: Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant
field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- Bar Widget: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- Progress Ring Widget: Displays a ring with a number based on the widget definition and filter criterion.
- Target (Roadmaps and Staffing Workspace): Displays targets either as goals or constraints on the number and money attributes of the relevant objects.
NOTE To learn more about Widgets, see Widgets.


Create Custom SubObjects for Investments


You can create Sub-Object instances using the New button for Projects, Ideas, and Custom Investments and abstract investment custom sub-objects. If your administrator has enabled the Enable Create Dialog toggle in the Master Object blueprint for a particular Sub-Object, then you can see a button within the Sub-Object called "New [Sub-Object]". This button appears on the Sub-Object grid, timeline, and board (including new card wherever applicable). When you click the New [Sub-Object] button, a create dialog similar to the create from template modal appears. The new create Dialog is based on the attributes configured in Edit Module Details for a sub-object in the Object Blueprint. Your administrator can enforce required (Always true and conditional required) attributes using blueprint business rules. These required attributes will have an asterisk indicating that you must provide values for these attributes to create the instance. To learn more, see Create Custom Sub Objects.


View Action Items in Investments


The Action Items module displays the Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, CMO, and Custom Investments. You need no new security rights for this module. If you have access to view the Investment, you can view all the Action Items for the investment. Once you have configured Actions Items in the blueprint, you can view the Actions Items module in the investment page. The module will display all Action Items for that Investment regardless of whether the User is an Assignee. Users who have access to view the Investment can view all the Action Items for that Investment.
- Process Action Items created in Classic will display grouped by Open Items and Closed Items.
- Sorted by the most recently initiated Action Item first, ties will then sort alphabetically by Action Item Subject.
- By default, a summary of Open Items with Closed Items collapsed will be displayed.
- The summary mode will display the Subject, Priority, and current Stage summary for each Action Item.
- Action Item details are displayed in the order they occurred. They will have one of three States during their lifecycle:
- Initiated: No actions have been taken yet
- Decisions: At least one Assignee responded
- Closed: Action Item is completed
- Date/Time format will be set in User Settings under General.
- Action Items for Sub-Objects are not displayed.

NOTE Some of the key points to remember are:
- While the Sent To Recipient list is displayed for each Action Item, the criteria or number of actions required to
close the Action Item is not displayed.
- The Sent To Recipient list is displayed in alphabetical order. If there is more than 1 line of Sent To Recipients,
you have a link available to Show All or Show Less.
- Only process Action Items are displayed.
- Any Action Items for Investment Sub-Objects are not displayed. Copy an existing Risk, Issue, or Change Request From the Clarity 16.2.1 and higher releases, you can copy Risks, Issues, or Change Requests. The copy feature is accessible through a Copy button for single items and a right-click action menu. Note that you must have required Risk, Issue, and Change Request
- Copy permissions (access rights) in Clarity that allow you to copy Risk, Issue, or Change Request instances for Investments. Separate access rights are designated for copying RICs related to Projects, Ideas, Custom Investments, and Team Investments.
Follow these steps: 1. Log into Clarity and navigate to the relevant Investments page. 2. Ensure the investment is mapped to a blueprint that has the Risks, Issues, and Changes module. 3. Open the investment and click Risks, Issues, or Changes. 4. For a specific record, right-click and click Copy from the menu. The respective copy dialog is displayed. 5. In the copy dialog, enter the relevant Name and then click Copy. You can see the entry of the copied item in the list.
IMPORTANT Some of the key points to remember are:
- The right-click menu will show the Copy option only if a user has the appropriate Instance, OBS, and Global access rights to duplicate Risks, Issues, or Changes (RICs).
- Selecting multiple RICs grays out the Copy button with a tooltip indicating a single-item limitation.
- Users can copy a single RIC from a selection, but only the first chosen item will be copied.
- Upon initiating the Copy function, a dialog titled "Copy <Object name>" (for example, "Copy Risk") appears.
It automatically populates the Name field of the instance with "Copy <RICs name>" (for example, "Copy Scope Change"). This dialog presents the Name and ID fields and any required fields in Studio. The dialog will display no information if the Name and ID fields are set to auto-number and no Studio-required fields are specified.
- When copying an RIC record, the system copies all fields from the original RIC, including the values of any To Dos. For instance, if a To Do within the RIC is marked as "Completed," this status will be replicated in the new RIC record. However, while the duplication action copies all field values as they are, tasks that are associated with Risks or Issues are not copied over. In addition, Clarity's current functionality supports the association of tasks with Issues and Risks within the Classic interface, but this does not apply to Change Requests. Additionally, any conversations associated with the original RIC will not be transferred to the duplicate record. Create Risks, Issues, or Changes from existing RICs From the Clarity 16.2.1 and higher releases, you can create new Risks, Issues, or Change Requests (RICs) from existing RICs with links to the original RIC for quick reference and historical context. Administrators can enable this feature within Blueprints for various investment types, providing users with creation rights and the ability to streamline the RICs management process and enhance knowledge retention and management.

Using this functionality, you can:
- From Risks:
- Create a new Issue from an existing Risk and provide a link back to the originating Risk.
- Create a new Change Request Request from an existing Risk and provide a link back to the originating Risk.
- From Issues:
- Create a new Risk from an existing Issue and provide a link back to the originating Issue.
- Create a new Change Request Request from an existing Issue and provide a link back to the originating Issue.
- From Changes:
- Create a new Risk from an existing Change Request and provide a link to the originating Change Request.
- Create a new Issue from an existing Change Request and provide a link to the originating Change Request.
Follow these steps:
1. Log into Clarity and navigate to the relevant Investments page. 2. Ensure the investment is mapped to a blueprint that has the Risks, Issues, and Changes module. 3. Open the investment and click Risks, Issues, or Changes. 4. For a specific record, right-click and click the Create <Risks, Issues, and Change Request> action from the menu.
The respective create dialog is displayed. 5. In the create dialog, enter the relevant Name and ID. 6. Click Create to add a new RIC item.
IMPORTANT
Some of the key points to remember are:
- After the user creates new RICs, the end user will remain in the RICs module from which the Create RICs action was initiated. The newly created RICs are positioned alphabetically in the target module/grid.
- Regarding the 'Originating Issue/Risk' field:
- If the RICs Blueprint setting `Enable Properties Navigation' is enabled, the 'Originating Issue/Risk' field will display as a link. If it is not enabled, the 'Originating Issue/Risk' field will display as a string field.
- In the Classic PPM, the 'Originating Issue/Risk' field name remains the same and will continue to display the ID as a String field only.
- From the Clarity, the 'Originating Issue/Risk' configurable filter and the 'Contains' option remain a string field.
- If an organization prefers an alternate term for 'Originating Issue/Risk,' an Administrator can use the 'Attributes' capabilities to rename the field as needed.
- The `Properties' page in the RICs module does not provide an option to create RICs. The capability is only offered on the grid and accessed using the right-click action menu (if enabled in Blueprint).
- RICs creation is not available from the RICs modules within the Hierarchy workspace.
Create To Dos for Risks, Issues, and Changes
You can now create To Dos for Risks, Issues, and Changes for an investment. This will help you track and complete activities to manage the risks, issues, and changes successfully. This helps you stay on top of all the things you need to do to mitigate or manage risks, issues, and changes in your organization.
Follow these steps:
1. Log into Clarity and navigate to the relevant Investments page. 2. Ensure the investment is mapped to a blueprint that has the Risks, Issues, and Changes module. 3. Open the investment and click Risks, Issues, or Changes. 4. Select a specific record and click Details to open the Details panel.

5. Click To Dos to open the To Do's workspace. Click Expand to expand the workspace. 6. Click Add Row and enter the name of the To Do to create a new To Do item.
This To Do item is now available on the To Dos module associated with the investment and the relevant (Risks, Issues, Changes) tab on the To Dos Workspace.
NOTE Your administrator needs to perform the following actions to ensure you can create To Dos: 1. You have one of the following access rights:
- To Do - Create - All
- To Do - Edit - All 2. Your investment is associated with a blueprint that includes the Risks, Issues, and Changes modules. 3. You have the relevant rights to create and edit Risks, Issues, and Changes.
Manage Status Reports for Custom Investments
This section contains the following topics:
- Overview
- General Flow to Generate the Status Report
- Field Level Security in Status Reports
Overview The Status Reports module in Clarity serves as a critical component for effective investment management, designed to facilitate comprehensive investment status reporting throughout the entire investment lifecycle. This module enables investment managers to create, customize, and publish detailed status reports that keep teams focused on their work while providing stakeholders with regular updates on investment progress, risks, and performance metrics. The module operates through multiple interfaces, including the Canvas view for visual report creation and the Reports grid for managing status report instances. Investment managers can generate PDF status reports that can be shared with PMO teams and other stakeholders, ensuring constant visibility into investment status and associated risks.
NOTE You need the following rights to work with the project status in Clarity.
- <Investment> - Edit and Status Report access right to create new reports
- Status Report - Edit All and Project - Edit to edit status reports
The PMO Project Manager access group contains all the access rights required to access an investment and create Status Reports in Clarity. The Investment-Edit access right could be the Project, Idea, Custom Investment, or Team, depending on the investment in consideration.
General Flow to Generate the Status Report Here is the flow diagram of the Status Report:

Field Level Security in Status Reports The attributes of the Status Report object can be secured using field-level security. A visual indicator appears to identify fields under field-level security control in Status. Field-level security is supported in the Canvas, Preview, and Reports grid of the Status module.
To learn more about securing attributes, see Secure Field Level Access.
Working With Canvas
The Canvas layout provides a simple and visually intuitive interface in the Status module. In the Canvas view, you can configure the report layout, preview, and publish to a PDF format (for the most current report). Some key points to remember are:
- You can modify the canvas by dragging the available widget or field to the canvas.
- The canvas will display grey shading on the area where the selected widget/field will be dropped.
- You can remove widgets or fields from the canvas.
- You can resize widgets in the canvas.
- You can configure the data in four columns on the canvas.
- You can edit data on the canvas.
- When you are editing data, you can only view objects for which you have permission.


You can perform the following actions in Canvas:
- Use the Default Investment Status
- Customize the Investment Status
- Setup View Options
- Add or Remove Widgets from the Investment Status
- Arrange Tabs on the Investment Status Grid
- Add Risks, Issues, Changes, and Tasks to the Investment Status
- Add or Remove Chart Widget in the Canvas
- Edit the Chart Widget in the Canvas
- Add or Remove Table Widget in the Canvas
- Search in Table Widget
- Remove Table Widget in the Canvas
- Setup Layout in the Canvas
- Widget Governance
- Save Your Views
- Search in Canvas
- Export to PDF
- Expand the Widget
- Add Custom Attributes to Investment Status
- Edit the Investment Status Values
- Analyze Investment Trends
- Publish Investment Status Reports


Use the Default Investment Status
Example: Nicole is an investment manager and wants to view the current status of the investment. She wants to evaluate if the investment is on schedule and the current effort and cost metrics. She will then share her findings with the team in an upcoming team meeting.


To view the current project status, open a project and click the Status tab. The latest draft of the status report appears by default in the Canvas view.


Some of the key widgets that you can update in the default status are given below.


Number Tile

Widget Name

Description
Displays a specific number based on the widget definition and filter criterion.

Pie Bar Progress Ring
Overall Status

Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
Displays a ring with a number based on the widget definition and filter criterion.
The overall status of the investment is derived from the schedule, scope, and cost/effort status. The overall status is also visible on the investment tile. The status colors on the status report page and the investment tiles (for example, green for On Track, or Red for At-Risk) are based on the display mapping configuration for the Overall Status attribute of the Status Report object. See Clarity Studio Objects and Attributes for details on configuring display mappings for attributes.


Schedule Status

Widget Name

Scope Status Cost and Effort Status

Milestone Timeline

Effort Metrics

Cost Metrics

Description Indicates if the investment schedule is on track, has a minor variance, or a significant variance from the original schedule.
Indicates if the investment scope is on track, has a minor variance, or a significant variance from the original scope.
Indicates if the effort and the budget amount that is consumed for the project are on track with the original estimates.
Indicates the milestone status of the investment. It displays the investment start and finish dates and the completion status of the milestones. A Configure button is available on the Milestone Timeline widget. You can select options to show names and/ or dates of the milestones (including Today), in addition to the option to choose which milestones to display on the Timeline. The "Closest 10" option shows up to 10 milestones from the past or future that are closest to today. The "Key Milestones" option shows the key milestones. This helps improve the readability of milestones, especially in the PDF report. Allows you to review:
- The total effort that was estimated for the investment
- The total effort that has been submitted against the investment
by team members
- The balance effort for the investment
Note: The value in the status report is based on the value selected for the Default Display Unit for Work Effort setting in Classic PPM. The setting appears under Administration, Project Management.
Allows you to review:
- The total approved budget for the investment
- The total budget that has been exhausted to date
- The balance budget for the investment

Status Report Update and Key Accomplishments

Allows you to share a summary of the status report and highlight key accomplishments of the team by editing these custom text fields.


Table Widgets

Widget Name

Description
Allows you to review the following components involved in the investment:
1. Tasks 2. RICs 3. To Dos 4. Staff 5. Financials - Cost Plans 6. Financials - Budget Plans 7. Financials - Benefit Plans
You can resize the widgets to two columns or four columns on the canvas. Point the mouse to a corner of the widget and drag it horizontally or vertically to change its size. You can also click Configure to select the relevant attributes that should be displayed on the status report. The Table widget now supports the Conditional Formatting capability. To learn more, see Configure Conditional Formatting.

NOTE
If status reports exist for the investment in Classic PPM, the system populates the information from the latest Draft report (based on Report Date) in Canvas. If there are only Final status reports (that is, no drafts) in Classic PPM, the system creates a draft status report instance from the latest status report based on Report Date. When the investment manager or a user with the appropriate access rights navigates to the Status page in Clarity for the first time, the information from the draft status report populates in Canvas.

Customize the Investment Status
Example: Nicole shares the status with her team and it really helps the team understand the current status of the investment. However, the team requests Nicole to make the following changes to the report:
- Add the current phase of the investment to the status
- Add the risks to the investment so that risks can be highlighted to the management team
- Add a custom field that highlights the key contributor of the month
- Ensure that the status for the investment can be set to Investment Started during the initial phase of the investment
Let's review how Nicole customizes the investment report to help it reflect the team's progress.
Setup View Options
You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off. REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options. IMPORTANT
When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics. 9. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread
across the time periods.
IMPORTANT
Some of the key points to remember are:
- You can change settings such as Money Decimal Display, Number Decimal Display, and Show Total Row within the table widget of Canvas.
- You can override canvas per-period settings by enabling the Override Canvas Per-Period Settings option in specific tables with per-period metrics.
Add or Remove Widgets from the Investment Status
You can customize an Investment status to include or exclude information by adding or removing widgets and fields.
Follow these steps:
1. Click Configure to open the Canvas in the edit mode. 2. From the Configure Canvas section, drag and drop the relevant fields and widgets to the canvas. 3. Click X to remove any widgets or fields from the canvas. 4. Point the mouse to a corner of a widget or field and drag horizontally or vertically to change its size. 5. Click Done to save your changes.


NOTE
The following widgets/fields are not available in this release:
1. Next 2 Weeks Calendar widget 2. Completed Tasks 3. High-level Status Module


Configure the Columns in the Table Widget
The table widget on Canvas allows you to add or remove columns and filter the data. You can add a maximum of 20 columns to the table widget.
Follow these steps:
1. In the Canvas, click Configure. 2. Click the Gear icon at the top-right corner of the Table Widget to configure it. The grid opens in a pop-up window.
Some of the critical actions you can perform by using the grid are:
- Add or remove an attribute in the grid using Columns.
- Leverage the Conditional Formatting capability. To learn more, see Configure Conditional Formatting.
- Analyze details in the grid by using Filter.
- Change the name of the table widget.
- Use the Group By capability in the table widgets of Canvas to transform your data grid into rows of logical groups.
To learn more about Group By capability, see Collapse-Related Rows Together In Group By Mode.
- Additionally, specific settings related to Money Decimal Display, Number Decimal Display, and Show Total Row are
available within the table widget of Canvas. IMPORTANT
You can override canvas per-period settings by enabling the Override Canvas Per-Period Settings option in specific tables with per-period metrics. 3. Click Done to save your changes.
NOTE Clarity includes fields associated with the Resource Object in the dialog box that is available when you select the Staff Target Object. This helps you associate details such as Booking Manager and Date of Hire with the project's resources. The capability is governed by a feature toggle "Resource Attributes in Canvas Staff Target Object," which is enabled by default.

Arrange Widgets in the Canvas View
There are two types of widgets available in the Canvas view:
- Widgets that are best displayed in one column - Most of the widgets such as Status Report Update, Cost Metrics, and Effort Metrics require only one column. You can drag a single-column widget left or right to ensure it occupies two columns.
- Widgets that are best displayed in two columns - Table widgets are best displayed in two columns because they typically display a lot of information. You can resize these widgets to fit into a single column.
NOTE
Some of the key points to remember are:
1. The maximum height of the Canvas is 24000px. 2. The Risks, Issues, Changes, and Tasks table widgets can be dragged and resized to fit in a single column.
However, this is not recommended since it reduces the readability of the content in these grids.


Include Risks, Issues, Changes, and Tasks in the Investment Status From Clarity 15.6.1 onwards, you can add Risks, Issues, Changes, and Tasks to the investment status. Follow these steps: 1. Select the Risks, Issues, Changes, or Tasks that you want to show in the investment status:
a. Open investment and click Risks, Issues, Changes, or Tasks to navigate to the corresponding page. b. Add the Include in Status Reporting column to the grid and select the flag for risks, issues, changes, or tasks that
you want to include in the status. Alternatively, use the following steps to add the column to the Details panel and select the flag: a. Click any column associated with risk, an issue, a change, or a task to display the Details tab. b. Click CONFIGURE to display a list of all the attributes that are available. c. Drag-and-drop the Include in Status Reporting flag to the Details layout. d. Select the Include in Status Reporting flag for risks, issues, changes, or tasks that you want to include in the
status. Add or Remove Chart Widget in the Canvas You can define the following chart widgets in canvas:
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
available within the table widget of Canvas. IMPORTANT
You can override canvas per-period settings by enabling the Override Canvas Per-Period Settings option in specific tables with per-period metrics. 3. Click Done to save your changes.
NOTE Clarity includes fields associated with the Resource Object in the dialog box that is available when you select the Staff Target Object. This helps you associate details such as Booking Manager and Date of Hire with the project's resources. The capability is governed by a feature toggle "Resource Attributes in Canvas Staff Target Object," which is enabled by default.
Search in Table Widget
You can search the data in the table widget.
Follow these steps:
1. Click the Canvas module. 2. In the Table Widget, enter the text in the Search option (near Gear Icon) to identify various instances based on your
requirements. You can view the search result in the grid.
Remove Table Widget in the Canvas
Follow these steps:
1. In the Canvas, click Configure. 2. Click 'X' to remove the table widget from the Canvas
Setup Layout in the Canvas
You can configure the column layout in Canvas with the following options:
1. 4-Columns 2. 6-Columns 3. 8-Columns
Follow these steps:
1. In Canvas, click Configure. 2. Click the Layout tab in the left panel. 3. Select the column layout based on your requirement:
a. 4-Columns b. 6-Columns c. 8-Columns You will get a message - "The placement of the widgets will be rearranged. Do you want to proceed?". 4. Click Proceed.

NOTE When you change the layout in the canvas, the following changes occur in the canvas: 1. If the column size increases, the layout retains the previous column size and adds new columns on the right-
hand side. 2. If the column size is decreased, the layout adjusts the widgets in the right-most columns below all the other
widgets. Widget Governance Some of the key points to remember while working with widgets:
- You can see the widget counter that indicates the total number of widgets added to the canvas.
- You can add a maximum of seven table widgets to an individual canvas.
- You can add ten charts and table widgets to an individual canvas. Save Your Views Clarity allows you to save and modify multiple views that help you achieve your business goals. Some of the critical actions you can perform are: 1. Save an existing configuration in the grid. 2. Update existing views by using the Quick Save functionality 3. Access views saved by other users 4. Mark relevant views as favorites so that you can access them easily 5. Select default views To learn more about using the Saved View option, see Working with Saved Views.


Search in Canvas You can use the Search bar available in Canvas to filter values based on the characters entered by you.


Export to PDF
You can export the Canvas layout to a PDF file so that you can include Canvas visuals in presentations or other documents for stakeholder communication.
Follow these steps:
1. Click the Canvas module. 2. Click Export to PDF to export the PDF file.

3. Click Download to save the PDF. REMEMBER What You See Is What You Get When you export the PDF, the PDF looks exactly as it appears on the screen. If the widget has a scroll bar, any data within the scroll bar will not be included in the PDF. IMPORTANT The Grid has Group By capability, allowing users to group and expand tables within the Canvas view. However, there is a limitation during PDF export where only five expanded tables are displayed. In such cases, Clarity selects the latest expanded tables in the Canvas, prioritizing them for inclusion in the PDF export.
Expand the Widget You can expand the pie chart, bar chart, and table widget in Canvas to view the complete and clear chart/widget. Follow these steps: 1. Open the Canvas module. 2. Click the Expand icon near the chart/widget.

You will see the complete and clear chart/widget. NOTICE Some of the key points to remember are: 1. The Number Tile, Progress Ring, Pie Chart, and Bar Chart are responsive. When the Chart size increases in the Canvas, the text size in the Charts increases. 2. Click a data point to remove the corresponding slice from the Pie Chart, and observe that the removed data point will be indicated with a strikethrough in the legend. 3. The expanded bar chart will show a maximum of 20 categories/periods.
Add Custom Attributes to the Investment Status The Investment Status is associated with the Status Report custom object in Clarity. This Status Report object is installed when you install the PMO Accelerator add-in. If you have created custom attributes of a supported data type in the Status Report object, you can add them to the investment status. In our scenario, Nicole requests the Administrator to create an attribute where she can highlight the key contributor of the month. The administrator creates the attribute and ensures that it has an API alias so that the attribute is available in Clarity. Nicole can now add this attribute to the investment status. To create a custom attribute, see Clarity Studio Objects and Attributes.

NOTE You can create a custom attribute with the following data types to ensure that the attribute is included in the investment status:
- String
- Large String
- Number
- Money
- Boolean
- Date
- Single-Valued Lookup
- Calculated Number
- Calculated String
- Calculated Datedata Edit the Investment Status Values You can also request your administrator to edit the Status Report Status lookup adds additional values to the lookup. You can then edit the Status Report object and edit relevant attributes such as schedule status, scope status, and cost and effort status to edit colors associated with each lookup value. The overall status of the investment is derived from these three attributes. In our scenario, Nicole asks the administrator to add Started to the Status Report Status lookup. Follow these steps: 1. Log in to Classic PPM .


2. Click Administration, Data Administration, Lookups. 3. Use the filter options to locate and open the Status Report Status lookup. 4. Click Values and use the New button to add a new value. In our scenario, we will add the Started value.


5. Click Save and Return to save your changes. 6. Click Administration, Objects and use the filter options to locate and open the Status Report object. 7. Click Attributes and use the filter options to identify and open the relevant attribute. In our scenario, let's open the
Schedule Status attribute. 8. Use the Display Mapping section to associate a color with the new value you added to the Status Report Status
lookup. In our scenario, the administrator would associate the Grey color with the Started value.
9. Click Save and Return to finalize your changes.

Analyze Investment Trends Analyzing investment trends is a common investment management technique to use investment data and determine possible variance from the baseline (budget, cost, schedule, or scope). This data can help you anticipate and predict how much variance you can expect if the investment is not adjusted during a specific timeframe. Specific trends can be anticipated and adjustments can be made to minimize risk, maximize the team effectiveness, and deliver the investment on time. The trending indicators (up, down, and side/neutral arrows) on the status report gauges are based on the latest value of the gauge as compared to the value in the prior published status.
- Up Arrow: The latest draft status is better than the prior published status.
- Horizontal (Neutral) Arrow: The latest draft status is the same as the prior published status.
- Down Arrow: The latest draft status is worse than the prior status. The color in the status report gauges are based on the latest status values:
- Green: On Track
- Orange: Needs Help (Minor Variance)
- Red: At Risk (Significant Variance) You can update the values in the gauges and the overall status gets updated based on the latest values. Use the following information to determine the status for the various gauges:
- Effort Metrics displaying the team member hours remaining for the investment.
- Cost Metrics displaying the latest budget available for the investment.
- Upcoming Activities of the investment. The initial status report for a new investment shows no trending indicators because no previous data exists. As you publish additional reports, trending arrows appear comparing current status against the last published status. For example, if the overall health trend for the current status is looking better than the prior published status, an up arrow appears. The following image shows trending indicators for a sample investment:
REMEMBER
- The Project Tile and Investment Banner displays ' Overall Status', only if Report Status is 'Final' and is
associated with the 'Latest' flag.
- The following table describes how Clarity displays overall status in the project tile and investment banner.

Sl. No.

Report Status

Latest

Overall Status Badge in the Project Tile an

01.

Set to `Draft'

Null

The Overall Status Badge is NOT displayed in th Investment Banner.

02.

Set to `Final


The Overall Status Badge is displayed in the Pro Banner.

03.

Change from `Final' to `Draft' Automatically changes from  to Condition 01: If any other status report is set to

`Null'

Status field

The Overall Status Badge of the status report is

Tile and Investment Banner.

Condition 02: If no other status report is set to

field

The Overall Status Badge is NOT displayed in th Investment Banner.
- If you are not using status reports, you can hide the status badges (On Track, Needs Help, At Risk) on the project tiles and investment banner. In Classic PPM, remove the display mappings on the Overall Status attribute for the Status Report object. See Clarity Studio Object Views, Configure Display Mappings for more information.

Publish Investment Status Reports
You can preview and publish the current status report in PDF format. You can download the same PDF and share it with the Investment stakeholders.
TIP
Ask your administrator to verify that .PDF is an Authorized File Extension under Administration, System Options in Classic PPM.


Follow these steps: 1. Open an investment and click Status. 2. In the Canvas view, click Preview to generate a preview of the current status report. You can download or print the
status report for reference in preview mode. IMPORTANT If you see the report date set to the current date in the Preview Mode, your administrator must have enabled the Set Report Date to Current Date on the Preview option in the System Options page. This option helps to auto-set the Report Date to the Current Date on Preview.
To learn more, see Enable Clarity. WARNING If you click Preview and get an error message - Attribute 'cop_report_date' was locked and cannot be changed, then contact your administrator. Because your administrator has enabled the Set Report Date to Current Date on Preview option, and a process is set to lock the Report Date. The report preview will appear blank due to browser issues if the following conditions are met:
- The report exceeds 2 MB.
- The report includes rich text fields.
- The report includes an image file larger than 2 MB. NOTE
- If the table header and the rest of the row(s) are on different pages, the table information will not be
displayed properly.
- When the status report fits entirely in a page, you will see a blank page appended to it. If the content fits
into half a page, you don't see a blank page at the end.
- If Japanese characters do not appear in Preview, you must install the required fonts on the Clarity server. 3. You can control screen size and orientation with the following options: a. Select the Size from the drop-down list. a. Letter b. Legal

c. Tabloid d. A4 e. HD Display (1920px) f. Laptop (1440px) g. Tablet (1024px) h. Fit to Content b. Select the Orientation from the drop-down list. a. Portrait b. Landscape 4. Click Refresh to update the PDF format changes.
IMPORTANT Before clicking Publish, please check the text formatting in the Preview mode. For example, if you add four lines in the text field (Key Accomplishments), only three lines may be visible in the field in Preview. So, the same three lines will be published in PDF. If you find any text formatting issue, navigate to the Configure Canvas view to adjust the fields to accommodate the entire text.
5. Click Publish to publish the current draft status report. NOTE When you publish a PDF status report from Canvas, the following changes occur in the Reports grid:
- A new status report instance appears.
- The value in the Report Status field changes from Draft to Final.
- The values from the previous status report instance are copied over to the new instance. Manually changing the report status from Draft to Final in the grid is similar to what happens when publishing; however, no PDF file is created under the Reports tab. Users might perceive this behavior gap between the PDF status report and the grid status report. The values from the Final status report on the grid are not copied over to create a publishable draft status report under the Status tab, under Reports. Users of the PDF status page might expect a PDF to be generated when they or other users mark the status Final on the grid; however, no PDF is generated for that status report record.
Working With the Reports Grid
You can perform the following actions with the reports grid:
- View the Status Report
- Setup View Options
- Create a Status Report
- Right-click Context Menu
- Edit the Status Report
- Publish the Status Report
- Indicate the Most Recent Record
- Managing Records By Using the Grid Layout
- Working with Widgets


View the Status Report
In Reports, you can view the current and prior status reports.
Follow these steps:
1. Open the investment. 2. Click Status, Reports. The list of current and prior status reports appears.
NOTE The Attachment column contains the link to the published status report in PDF format if the PDF is available for the report. So, ensure that the Attachment column is always available in the Status Reports grid.
IMPORTANT Upgrade Impact:
After upgrading to the Clarity 16.0.1 release, if the Attachment is available and Report Status is Draft for a report, then the name of the status report is linkable.

Setup View Options
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
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


5. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

6. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.


7. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.
Create a Status Report Follow these steps: 1. Open the investment. 2. Click Status, Reports. 3. To add a row at the top of the grid, click the plus icon. Ensure that you select the mandatory fields using Column
Panel. 4. Enter values in the required fields. A new status report will be created.
Right-click Context Menu You can right-click a cell on a row to view a context-sensitive menu. You can use this context-sensitive to:
- Insert Row Below: A new row gets added to the grid
- Delete Row: The selected row gets deleted from the grid
- Chart Range (beta): Clarity creates a chart using the data in the grid. To learn more about using the Chart Range
(beta) option in the grid, see Create a Chart.
Edit the Status Report There are four ways to edit the status reports in the grid. They are:
- You can edit the fields in the grid.
- You can edit the fields using the Details panel.
- You can edit the multiple rows using the Bulk Edit option.
- If the status report is not published then you can edit the status report by clicking on the status report name.
NOTE If the Attachment is available and Report Status is Final for a report, then the name of the status report is nonlinkable.
Publish the Status Report Follow these steps: 1. Open the investment. 2. Click Status, Reports. 3. Click the name of the status report. You can edit or customize an Investment status in the canvas view. 4. Click Preview. 5. Click Publish. This generates the PDF format of the status report. You can download or print the status report for
reference. NOTE When you publish a PDF status report from the Reports tab, the following changes occur in the Reports tab:
- A new status report instance appears.
- The value in the Report Status field changes from Draft to Final.
- The values from the previous status report instance are copied over to the new instance. ATTENTION After generating a PDF, you can edit the values in the grid. But, the values will not be updated in the PDF.


Follow these steps to update the values in the PDF:
1. Change Report Status from Final to Draft. 2. Click the name of the status report. 3. Click Preview. 4. Click Publish.


Indicate the Most Recent Record
The Reports tab includes a `Latest' check box attribute to indicate the most recent record, where `Report Status' has been set to `Final' in Clarity.
REMEMBER The `Latest' attribute does not dynamically update. You have to refresh the page to apply field edits within the Reports tab.

Managing Records By Using the Grid Layout
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


Working with Widgets You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. In this release, the following widgets are available:
- Number Tile
- Pie
- Bar
- Progress Ring
- Target (Roadmaps and Staffing Workspace) Some of the key actions you can perform with widgets are:
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
Create a Sub-Object Instance for Investments


Create Custom SubObjects for Investments


You can create Sub-Object instances using the New button for Projects, Ideas, and Custom Investments and abstract investment custom sub-objects. If your administrator has enabled the Enable Create Dialog toggle in the Master Object blueprint for a particular Sub-Object, then you can see a button within the Sub-Object called "New [Sub-Object]". This button appears on the Sub-Object grid, timeline, and board (including new card wherever applicable). When you click the New [Sub-Object] button, a create dialog similar to the create from template modal appears. The new create Dialog is based on the attributes configured in Edit Module Details for a sub-object in the Object Blueprint. Your administrator can enforce required (Always true and conditional required) attributes using blueprint business rules. These required attributes will have an asterisk indicating that you must provide values for these attributes to create the instance. To learn more, see Create Custom Sub Objects.
Update Investment Status in the Status Report Module
In addition to the STATUS tab that allows you to view and publish PDF status reports, administrators can also configure an investment blueprint to include a STATUS REPORT grid. See Clarity: Configure Blueprints for Projects and Investments for more information.

Use this page to update the stock and custom attributes of the investment Status Report object. You can update the values for current and prior status reports.
NOTE
We recommend using either the Status tab to generate PDF status reports or the Status Report grid, but not both at the same time. Using both for the same investment can potentially be confusing. For example, when you publish a PDF status report from the Status tab, the following changes occur in the grid:
- A new status report instance appears.
- The value in the Report Status field changes from Draft to Final.
- The values from the previous status report instance are copied over to the new instance.
Manually changing the report status from Draft to Final in the grid is similar to what happens when publishing; however, no PDF file is created under the Status tab, under Reports. Users might perceive this behavior gap between the PDF status report and the grid status report. The values from the Final status report on the grid are not copied over to create a publishable draft status report under the Status tab, under Reports. Users of the PDF status page might expect a PDF to be generated when they or other users mark the status Final on the grid; however, no PDF is generated for that status report record.
Refer to the following chart to decide whether to use the traditional Status report page or the new Status Report grid.

Capability

Status Module

Canvas View

Reports Grid

Generate an investment status Yes

Yes

report PDF

Publish new status report with Yes

Yes

values from previous status

report

View and edit custom attributes Yes

Yes

Review current and previous status reports
- Investment managers require the Status Report - Edit All
access right
- Team members require the Status Report - View All access
right

Saved views

No

Yes

Filtering

No

Yes

Configurable report layout

Yes

Yes

sections such as Key

Accomplishments, Completed

Tasks, Next 2 weeks, Effort

Metrics, and Cost Metrics

Status Report Module
No
No
Yes
- Status Report - View global
or instance rights control the display of one or more status report instances
- Status Report - Edit instance
rights and Status Report Edit All global access rights are required to update status report instances*
- The grid does not allow
deletion of status report instances Yes Yes No

*See the Change, Impact, and Upgrade guide for a potential known issue with this feature.


Custom Investments: Links
Team members can use different collaboration and file-sharing tools such as Microsoft SharePoint as they work on their investments. As a project manager, you can organize internal Clarity links and external links to other sites, documents, and content. Use the LINKS page as a central hub for all of the internal and external investment artifacts that are used to manage the investment.
You can configure dynamic links with placeholder information using supported system variables such as:
- internalID - To link to content for the current investment by ID, insert the internalID variable
- code - To link to content for the current investment by code, insert the code API attribute ID variable
- userName - To personalize the link for the current user, insert the userName variable
- manager - To link to content for the current investment manager, insert the manager variable
- name - To link to content for the current investment by name, insert the name variable
This section contains the following topics:
- Organize Investment Links
- Configure Dynamic Links to Other Application Pages
- Dynamic Links Examples
Organize Investment Links
With the Investment - View access right, team members can view and open the links. With the Investment - Edit access right, team members can also create, update, and delete the links.
1. Open a investment and click LINKS. 2. To create a link, click ADD LINK.
a. Enter the URL or copy and paste a valid URL beginning with http://, https://, or www. b. Enter a user-friendly link name to identify the link. The application also attempts to show an icon or image for your
URL. c. Press the ENTER key. Your new link appears in the GENERAL section. 3. To group links under a new section, click ADD LINK in the GENERAL section and then click NEW CATEGORY. 4. Repeat the steps above to define at least one new link in the new category. 5. To rename a category or section, click Rename. Change the name for your new category. After you change the name, you can repeat Step 3 to add a new category. 6. You can also complete these additional steps:
- To organize your links, drag-and-drop them under each section or category.
- To edit a link display name or URL, click Edit.
- To delete a link, click X Delete in the top right corner of the link.
- When you delete all links in a section, the section is also removed.
TIP
You can also add links in individual tasks and in other locations in Classic PPM. When adding file:// protocol links, the following browser limitations apply:
- File:// protocol links are not supported in Clarity.
- File:// protocol links are accessible only in Microsoft Edge, and, while it is still supported by Classic PPM only,
Internet Explorer 11.
- File:// protocol links are not accessible in Chrome, Firefox, and Safari browsers.
Because file:// protocol links can be defined on the Classic PPM Project Links page, they show on the Clarity Project Links page. However, they are not supported. In recent testing, they often do not work as expected.

If you need file:// protocol links on your investments, we suggest the following strategy: 1. Remove the LINKS module from the investment blueprint. 2. Create a Channel module that brings users to the Classic PPM investment Links page. Because the Clarity does not support task-level links, users won't encounter this issue at that level.

Configure Dynamic Links to Other Application Pages
You can configure dynamic links with placeholder information using supported system variables. When users click these links, current values replace the variables. You can add a single dynamic link that takes users to specific pages with personalized attributes in the URL. Examples include Classic PPM pages, Microsoft Sharepoint sites, and other content pages.
TIP
Because the raw URLs use dynamic variables, you can copy and paste them to multiple investments or use the same links in templates (associated with blueprints) for consistency among all your investments. Hover over a link to see the resolved URL. Similar dynamic link options are available with the Channels feature. Administrators can define up to five (5) channels that provide business users with dynamic link capabilities without leaving the current investment page in Clarity. See Clarity: Configure Blueprints for Projects and Investments.
This feature supports the following dynamic link data:

Sl. No. 1 2 3
4 5 6 7

Link Goal or Target Investment ID: To link to content for the current investment by ID, insert the internalID variabl Investment Code: To link to content for the current investment by code, insert the code API attribu User: To personalize the link for the current user, insert the userName variable.
Project Manager: To link to content for the current project manager, insert the manager variable. Investment Name: To link to content for the current investment by name, insert the name variable. User ID: To link to log in user's internal user ID five million number, insert the _userInternalI Resource ID: To link to log in user's internal resource ID five million number, insert the _resourc

Dynamic Link Example 1: Links from and to Clarity You want to define a single generic link that you can use with multiple investments. You want the link to capture the current investment ID and open the Team Role Capacity page in Classic PPM.
- The following example shows the abstract URL that you can enter on the investment Links page:
http://<ppm_server>/niku/nu#action:projmgr.invRoleCapacity&id=${internalID}
- The following example shows the fixed URL for the clickable live link with resolved values for the variables:
http://<ppm_server>/niku/nu#action:projmgr.invRoleCapacity&id=5001234

Dynamic Link Example 2: Link Current User/Resource Details from to Clarity The following example shows the URL that you can enter on the Links page to open the current user details in Classic PPM:
http://<ppm_server>/niku/nu#action:nmc.openUser&id=${_userInternalId}&resourceId=${_resourceInternalId}


Dynamic Link Example 3: Concatenate or Join Link Parameters
The following example shows how you can concatenate specific variable strings in a URL with an ampersand (&):
http://<my_sharepoint_server>/ProjectManager=${manager}&ProjectCode=${code}
Dynamic Link Example 4: Security Based On User Access Rights
The following example walks through the steps that reveal the security behavior that applies when different users click on your dynamic links.
1. As an administrator, you configure a investment link with the following dynamic URL to an external application: http://some.link?id=${internalID}&projectName=${name}
2. You set up two users: a. PM_user_A has global access rights for viewing all investments. b. test_user_B has only instance-level view rights on investment P1.
3. In this example, we are only concerned with access to the external application in the context of the following two investments: a. P1: internalId 5001084 b. P2: internalId 5001083
4. When each user clicks the same link, Clarity checks their global and instance view rights on each investment before returning any investment data.
- The abstract link for PM_user_A resolves to fixed parameter values for the investment ID and name for both investments.
- The abstract link for test_user_B only resolves to fixed parameter values for the P1 investment. The link for the P2 investment would not return valid data for test_user_B. Only the internal investment ID (5001083), assuming this user could get to a source page for that investment, would be passed but not the investment name because this user does not have permissions.
Conversations
You can start a conversation or post your comments in a reply message with optional attachments and links. Conversations are a collection of replies to an original theme or question. Conversations provide a collaborative forum for all team members to discuss, document, and solve investment-specific issues. For example, use conversations to discuss customer feedback or share observations during development. Conversations also help resource managers and investment coordinators discuss which resources to allocate to an investment.
This section contains the following topics:
- Pre-requisites for Using the Conversations Module
- Conversations About Investments
- Mention a User Using the @Sign
- Conversations and Replies
- Attach Files in Conversations
- Conversation Notifications
- Access Rights for Conversation-specific Actions In Notifications
Pre-requisites for Using the Conversations Module
Your administrator needs to perform the following actions to work with Conversations:
1. Ensure you have view access to the investment. 2. Associate the investment with a blueprint that includes the Conversations module

NOTE Turn on the Show in Details Flyout option under the Conversations module in Blueprint to view the conversations module in the Details panel.
Conversations About Investments Stay in touch with your team, ask questions, and resolve issues using conversations. Investment team members and the investment manager can reply and mention another team member in the conversation.
NOTE Users need to have the Investment - Navigate access rights to view the specific Investment page in Clarity. Follow these steps: 1. Open an Investment. 2. Click the Conversations tab. 3. Enter your message in the Start a conversation box and click Post or press the Enter key. Other users can enter their messages in the Reply box.
Mention a User Using the @Sign In conversations, use the @ sign to mention other users. Mentioning someone by name sends a new notification to alert them to reply. For example, Derrick and Barb do not mention each other when collaborating to solve staffing issues. They are already communicating in the conversation. However, mention someone in a new conversation or reply to notify them that you would like them to respond.
Tips for Using the @Sign
- You do not have to remember the complete name of the person that you want to mention. After the @ sign, enter the
letters of the first or last name. Suggested team members appear. IMPORTANT You must have the Resource - View - All access right to get the list of Clarity users.
- The full name, resource ID, and avatar image appear to verify the identity of the team member.
- To mention all users staffed to the investment, including the investment manager, use @Staff.
- All active and locked team members can be mentioned. Inactive team members do not appear and cannot be
mentioned.
- In conversations, up to eleven (11) suggested Clarity users appear.
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
Attach Files in Conversations You can upload and edit up to five attachments to each comment in a conversation. Investment team members can download and view the attached files. Follow these steps: 1. Open a conversation. A Reply... prompt appears for the next comment. 2. In the new reply, click Attach. To add attachments to a previous comment, click the Options menu and select Edit
and then click Attach. 3. Select the file you want to attach. Press and hold down the Ctrl key to select up to five files. Click Open. Thumbnails
of the attached files appear below the comment. 4. Add or edit your reply text. You cannot attach a file without entering an associated comment. 5. Click Post or press the Enter key. The file attachments are uploaded. 6. (Optional) To delete an attachment, click the  Options menu and select Edit. Click X Delete.
- When you delete a reply, the application also deletes any attachments.
- When you delete an investment, a task, or a risk, issue, or change entry, the application also deletes any associated
conversations. For investments and tasks, any attachments are also deleted.

TIP
File attachments follow the same restrictions as project documents. As an administrator, you determine project document settings. For example, the maximum size of an attachment is 20 MB. To limit acceptable file types, you can also set the Authorized File Extensions field. See Configure General System Settings.
Conversation Notifications
Notifications alert you about conversation activity when a user mentions you or your team.
- To view your notifications, click the notifications bell icon at the top of all pages in Clarity.
- The number of new notifications appears on the notifications bell. The number disappears when you click the bell.
- The notifications panel displays the avatar of the sender and the first line of their message.
- Scroll up or down to view all notifications on the panel.
- To open a notification, click one in the list. Supporting details about the context of the conversation appear. You can
reply, edit, or delete the message. You can also navigate to the specific page from the notification message window. Click Go to <INVESTMENT>.
- If a user is mentioned more than once in a single message, they are notified only once.
- If a team is mentioned (@Staff) in an investment conversation, a notification is sent to all the team members, including the investment manager.
- To delete a specific notification, hover over the notification and click Delete. To delete all notifications, click CLEAR ALL.The notifications are deleted for the specific user.
- If a conversation is deleted, the notification is also deleted.
TIP
- You can personalize the way that you receive notifications. By default, the application sends you conversation notifications by e-mail, SMS text message, and on-screen. See Set Up Notifications in Personalize Clarity: Change Password, Account Settings, Notifications, Export to Excel.
- As an administrator, you can modify the two notification templates for conversations. These templates define how notifications appear in the application:
- Conversation - Mentioned in a conversation
- Conversation - Mentioned in reply to a conversation See Configure Notifications and Notification Templates.
Access Rights for Conversation-specific Actions In Notifications

Sl.No. 01. 02. 03. 04.

To view the message To reply to the message To attach the files To go to the specific <INVESTMENT>

Actions

Need Access Righ # # # #

Configure Canvas to Manage the Custom Investment Dashboard
The Canvas module in Clarity serves as a powerful dashboard creation and visualization tool that transforms how organizations interact with their project and investment data. This comprehensive module provides a simple and visually intuitive interface that enables users to configure customizable dashboards for various objects within the Clarity ecosystem.


As a modern dashboard capability, the Canvas module allows users to configure chart widgets, table-type widgets, and object-specific attributes in a unified layout, providing the ability to view data across multiple sub-objects on a single page. This functionality represents a significant advancement in Clarity's user experience, offering organizations a centralized approach to monitoring and analyzing their projects and investments through dynamic, interactive visualizations.
The Canvas module is configured through Blueprints, where administrators can define which objects and widgets are available to users, ensuring that each canvas is tailored to specific organizational needs and user roles. This blueprintbased approach provides flexibility while maintaining governance, allowing organizations to create multiple canvases within the same blueprint, each with its own unique configuration and purpose.
You can configure the following charts in Canvas:
- Number Tile
- Progress Ring
- Pie Chart
- Bar Chart
You can configure widgets for the following objects and sub-objects in Canvas:
- Tasks
- Risks
- Issues
- Changes
- To Dos
- Staff
- Financials - Cost Plans
- Financials - Budget Plans
- Financials - Benefit Plans
- Status [Reports Grid of Status]
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
Key Points to Remember
Your administrator needs to perform the following actions to ensure you can use the Canvas module.
- You have view access to the investment.
- Your investment has to associate with a blueprint that includes the Canvas module.

Setup Canvas to Create a Dashboard
As you look at your investment dashboard, you will be able to determine what needs to be done next, depending on the current state of your investment. Let us configure the canvas to create a dashboard.
Follow these steps:
1. Open an investment. 2. Select the relevant canvas module on the investment to open it. 3. Click Configure. A list of widgets enabled within the canvas appears under the Configure Canvas panel.
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
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off. REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options. IMPORTANT
When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics.

9. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods. IMPORTANT Some of the key points to remember are:
- You can change settings such as Money Decimal Display, Number Decimal Display, and Show Total Row within the table widget of Canvas.
- You can override canvas per-period settings by enabling the Override Canvas Per-Period Settings option in specific tables with per-period metrics.
Add or Remove Chart Widget in the Canvas You can define the following chart widgets in canvas:
- Number Tile
- Progress Ring
- Pie Chart
- Bar Chart
NOTE You can add Chart widgets based on any sub-object defined in the investment that should be enabled in Blueprint.

Follow these steps: 1. In the Canvas, click Configure. 2. Drag a chart widget and drop it into the canvas. It opens the chart configuration pop-up window. 3. Enter the following details. Some fields will vary depending on your widget type and the operation selected in the Type
field.
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
- Only Include items where - Select the filter criterion for the widget. 4. Click Create to create your widget. 5. Click Done to save your changes.
NOTE The Widget library is disabled in Canvas. So, you can't add the widget to the Widget Library.
IMPORTANT
Some of the key points to remember while working with chart widgets:
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
NOTICE
After configuring the bar charts:
- Hover over a bar to view the details of each category/period. This action highlights all associated bars in the chart.
- The total sum of all periods will be shown at the end of the Stacked Bar Chart.
- Clicking on a bar instantly changes the format from Number to Percent.
- If a field in the grid has a negative value, it will not be visible in the Clustered and Stacked Bar Charts.
Edit the Chart Widget in the Canvas
You can edit the chart widget in the canvas.
IMPORTANT
Some of the key points to remember while editing a chart are:
- Only the owner of the chart widget can modify it by clicking on the edit icon (pencil icon) in the top-right corner of the chart widget.
- The owner can also remove the chart widget by clicking on the "x" on the top-right corner of the chart widget.
- If you remove the chart widget, it will be deleted from the canvas.


Follow these steps:
1. In the Canvas, click Configure. 2. Hover over the chart, and the Edit (Gear icon) option appears to let you edit the link. 3. Click Edit(Gear icon) to edit a particular widget. You can update the chart details in the pop-up window. 4. Click Done to save your changes.
Add a Table Widget to Canvas
Follow these steps:
1. In the Canvas, click Configure. 2. Drag a table widget and drop it into the canvas. 3. Enter the name of the table widget. 4. Select the Target Object from the list.


Some of the critical actions you can perform by using the grid are:
- Analyze details in the grid by using Filter.
- Add or remove an attribute in the grid using Columns 5. Click Create. You can see the table widget in the canvas.
Configure the Columns in the Table Widget The table widget on Canvas allows you to add or remove columns and filter the data. You can add a maximum of 20 columns to the table widget. Follow these steps: 1. In the Canvas, click Configure. 2. Click the Gear icon at the top-right corner of the Table Widget to configure it. The grid opens in a pop-up window.
Some of the critical actions you can perform by using the grid are:
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

REMEMBER What You See Is What You Get When you export the PDF, the PDF looks exactly as it appears on the screen. If the widget has a scroll bar, any data within the scroll bar will not be included in the PDF. IMPORTANT The Grid has Group By capability, allowing users to group and expand tables within the Canvas view. However, there is a limitation during PDF export where only five expanded tables are displayed. In such cases, Clarity selects the latest expanded tables in the Canvas, prioritizing them for inclusion in the PDF export. Expand the Widget You can expand the pie chart, bar chart, and table widget in Canvas to view the complete and clear chart/widget. Follow these steps: 1. Open the Canvas module. 2. Click the Expand icon near the chart/widget.
You will see the complete and clear chart/widget. NOTICE Some of the key points to remember are: 1. The Number Tile, Progress Ring, Pie Chart, and Bar Chart are responsive. When the Chart size increases in the Canvas, the text size in the Charts increases. 2. Click a data point to remove the corresponding slice from the Pie Chart, and observe that the removed data point will be indicated with a strikethrough in the legend. 3. The expanded bar chart will show a maximum of 20 categories/periods.
Widget Governance Some of the key points to remember while working with widgets:
- You can see the widget counter that indicates the total number of widgets added to the canvas.
- You can add a maximum of seven table widgets to an individual canvas.
- You can add ten charts and table widgets to an individual canvas.
Save Your Views Clarity allows you to save and modify multiple views that help you achieve your business goals. Some of the critical actions you can perform are: 1. Save an existing configuration in the grid. 2. Update existing views by using the Quick Save functionality 3. Access views saved by other users 4. Mark relevant views as favorites so that you can access them easily 5. Select default views To learn more about using the Saved View option, see Working with Saved Views.
Audit Module for Investments
Auditing in Broadcom Clarity is a critical capability designed to enhance transparency, accountability, and control over changes made to key business objects, including the Roadmaps workspace. Some key benefits of leveraging auditing are:
- Traceability and Accountability: Auditing provides a detailed, time-stamped record of all changes made to objects,
including what was changed, when, and by whom. This is particularly important in regulated industries or for organizations following strict change management protocols.
- Risk Mitigation: Auditing helps organizations quickly identify unauthorized or erroneous changes, reducing the risk of misalignment or strategic drift. If data in an object is altered in a way that could jeopardize project delivery or business outcomes, the audit log provides the necessary information to investigate and remediate the issue.

The Audit module grid column names used in Clarity are different from those in Classic PPM. You can filter for all APIenabled Objects, but are limited to those that are audit-enabled through Classic PPM. The Clarity and Classic audit grid column names are given below.

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
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options.


4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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


8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off. REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options. IMPORTANT
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
This capability was newly introduced in this release. {"URL":["/project/*/audit/attributes","/idea/*/audit/attributes","/investments/*/*/audit/attributes","/teaminvestments/*/*/ audit/attributes","/roadmap/*/audit/attributes","/hierarchy/*/investments/audit/attributes","/agreement/*/audit/attributes","/ objective/*/audit/attributes"],"heroDescriptionIdentifier":"01Intro","customCards":[{"id":"important","title":"Key Points to Remember","type":"use","languages":["en-us"]},{"title":"Enablement Videos","type":"videos","URL":["https://youtu.be/
