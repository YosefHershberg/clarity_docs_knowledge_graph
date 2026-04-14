# Analyze Resource Allocation and Staffing

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[06 - Resource Management/_MOC Resources|Resource Management]]
- Related domains: [[12 - Administration/_MOC Administration|Administration]]
- Canonical notes:
- [[06 - Resource Management/Configure Resources Roles Teams]]
- [[12 - Administration/Staffing Administration]]
- [[06 - Resource Management/Allocations Analysis]]
- [[12 - Administration/Blueprints/Resources Blueprint]]
- [[12 - Administration/Blueprints/Staffing Blueprint]]
- [[06 - Resource Management/Resource Directory]]
- [[06 - Resource Management/Staffing Scenarios]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H3: Hide Attributes in the Staffing Workspace (#hide-attributes-in-the-staffing-workspace)
- H3: Support for Business Rules in the Staffing Workspace (#support-for-business-rules-in-the-staffing-workspace)
- H2: Leveraging the Staffing Grid (#leveraging-the-staffing-grid)
- H3: Managing Records By Using the Grid Layout (#managing-records-by-using-the-grid-layout)
- H3: Conversations About Staffing (#conversations-about-staffing)
- H3: Setup View Options (#setup-view-options)
- H3: Enable 'Resource Summary Mode' to View Histograms (#enable-resource-summary-mode-to-view-histograms)
- H3: Setting Up the Investment to Resource View (#setting-up-the-investment-to-resource-view)
- H3: Setting Up the Resource to Investment View (#setting-up-the-resource-to-investment-view)
- H3: Setting Up the Role to Resource View (#setting-up-the-role-to-resource-view)
- H3: Allocate Resources to Investments on the Staffing Page (#allocate-resources-to-investments-on-the-staffing-page)
- H3: Reallocating Resources or Roles (Partial or Complete) (#reallocating-resources-or-roles-partial-or-complete)
- H3: Replacing Roles/Resources in Investments (Partial or Complete) (#replacing-rolesresources-in-investments-partial-or-complete)
- H3: Additional Features on the Staffing Page (#additional-features-on-the-staffing-page)
- H3: Working with Widgets (#working-with-widgets)
- H3: Configure the Target Widgets in the Staffing Workspace (#configure-the-target-widgets-in-the-staffing-workspace)
- H2: Analyze Staffing by Using Allocations (#analyze-staffing-by-using-allocations)
- H3: Introducing the Allocations Tabs (#introducing-the-allocations-tabs)
- H3: Prerequisites for Using the Staffing Workspace (#prerequisites-for-using-the-staffing-workspace)
- H3: Exploring a Typical Use Case (#exploring-a-typical-use-case)
- H3: Setup View Options (#setup-view-options)
- H3: Configure Over and Under Threshold Configuration (#configure-over-and-under-threshold-configuration)
- H3: Leverage Common Grid Capabilities (#leverage-common-grid-capabilities)
- H3: Working with the Allocations by Investment Tab (#working-with-the-allocations-by-investment-tab)
- H3: Working with the Allocations by Resource Tab (#working-with-the-allocations-by-resource-tab)
- H3: Working with the Resource Availability View (#working-with-the-resource-availability-view)
- H3: Working with the Resources by Role View (#working-with-the-resources-by-role-view)
- H3: Editing Staffing Details (#editing-staffing-details)
- H3: Viewing or Hiding Empty Rows (#viewing-or-hiding-empty-rows)
- H3: Editing Individual Allocations (#editing-individual-allocations)
- H3: Working with Hard Allocations (#working-with-hard-allocations)
- H3: Reallocating Resources or Roles (Partial or Complete) (#reallocating-resources-or-roles-partial-or-complete)
- H3: Adding Staff to Investments (#adding-staff-to-investments)
- H3: Replacing Roles/Resources in Investments (Partial or Complete) (#replacing-rolesresources-in-investments-partial-or-complete)
- H3: Create Staffing Projections Using Scenarios (#create-staffing-projections-using-scenarios)
- H3: Conversations About Staffing (#conversations-about-staffing)
- H2: Analyze Staffing by Using Assignments (#analyze-staffing-by-using-assignments)
- H3: Introducing the Assignments Tabs (#introducing-the-assignments-tabs)
- H3: Prerequisites for Using the Staffing Workspace (#prerequisites-for-using-the-staffing-workspace)
- H3: Exploring a Typical Use Case (#exploring-a-typical-use-case)
- H3: Setup View Options (#setup-view-options)
- H3: Configure Over and Under Threshold Configuration (#configure-over-and-under-threshold-configuration)
- H3: Leverage Common Grid Capabilities (#leverage-common-grid-capabilities)
- H3: Working with the Assignments by Investment Tab (#working-with-the-assignments-by-investment-tab)
- H3: Working with the Assignments by Resource Tab (#working-with-the-assignments-by-resource-tab)
- H3: Working with the Resource Availability View (#working-with-the-resource-availability-view)
- H3: Working with the Resources by Role View (#working-with-the-resources-by-role-view)
- H3: Editing Staffing Details (#editing-staffing-details)
- H3: Viewing or Hiding Empty Rows (#viewing-or-hiding-empty-rows)
- H3: Adding Staff to Investments (#adding-staff-to-investments)
- H3: Create Staffing Projections Using Scenarios (#create-staffing-projections-using-scenarios)
- H3: Conversations About Staffing (#conversations-about-staffing)
- H3: Working with Widgets (#working-with-widgets)
- H3: Configure the Target Widgets in the Staffing Workspace (#configure-the-target-widgets-in-the-staffing-workspace)
- H2: Create Staffing Projections Using Scenarios (#create-staffing-projections-using-scenarios)
- H3: Setting Up Scenarios (#setting-up-scenarios)
- H3: Creating a New Scenario (#creating-a-new-scenario)
- H3: Sharing Scenarios (#sharing-scenarios)
- H3: Viewing Scenarios Shared by Others (#viewing-scenarios-shared-by-others)
- H3: Comparing Scenarios (#comparing-scenarios)

> [!TIP]
> **Free Clarity Training on Broadcom Academy**
- You can attend FREE Clarity training by registering at the Broadcom Academy.
- The Clarity: Staffing Investments training helps you leverage the Staffing Workspace in Clarity to optimize staff utilization across the organization
- You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom credentials, create a new account and start training.

The Clarity Staffing Workspace represents a comprehensive resource management solution designed to optimize staff allocation across all types of organizational investments. This powerful workspace leverages Clarity's advanced crossobject grid capabilities to provide a unified platform where project managers, resource managers, and strategic planners can effectively manage, visualize, and analyze staffing requirements for projects, ideas, custom investments, and teams. Built with today's dynamic business environment in mind, the Staffing Workspace addresses the critical need for organizations to efficiently allocate their human resources while maintaining visibility across multiple investment types simultaneously. The workspace serves as a centralized hub that transforms complex resource allocation decisions into streamlined, data-driven processes, enabling stakeholders to make informed staffing decisions that align with organizational objectives and maximize resource utilization.

### Hide Attributes in the Staffing Workspace

The Staffing Tile allows administrators to hide attributes in the Staffing workspace, which is essential for simplifying users' views. You can use the Investment Attributes, Staff Attributes, and Resource Attributes tabs to select the fields that would be displayed to users in the Staffing Workspace. The tabs include the Label and Secure attributes, which are set by administrators in the Attributes grid. Some key points to remember are:
- You need the Administration - Staffing - Navigate access right to allow users access to the Staffing tile.
- You can clear the "Include" flag for attributes that you do not want to display in the Staffing workspace.
- The changes you make in the Staffing tile impact:
- Timelines and Staffing Grid
- Columns
- Filtering
- Widgets
- The changes you make in the Staffing tile do not impact the Resource Histogram.
- Clarity now includes a set of fields that must always be available in the Staffing Workspace for it to function properly. They include the Finish, Has Staff, and Start fields associated with the Investment object. The Is Staff field associated with the Resource object and the Default Allocation and Staff Type fields associated with the Team object are also mandatory and cannot be hidden from users. To learn more, see Administer Staffing.

### Support for Business Rules in the Staffing Workspace


The business rules capability in Clarity has been extended to support the Staff Object. This allows administrators to give stakeholders more control over editing and visibility of staffing data based on their requirements. Consider a scenario in which you want to make the Staffing module read-only when the work status of a project is On Hold. In this scenario, you can create and associate a business rule with the Staff object. You can then select "Staff" in the Target object and use the View Page rule type. You can then use a filter with the Work Status attribute and then select the Disable Editing Target Object and Disable Deleting Target Object. Key Points to Remember Some key points to remember are:
- Users must have the Staffing - Navigate access right to view and interact with the Staffing Workspace.
- The Staffing Workspace includes the following key components:
- Staff Grid: Provides comprehensive resource allocation management with cross-object capabilities displaying all investment types in a unified view.
- Allocations Timeline: Offers visual resource management tools with configurable columns and multiple perspective views for quick decision-making.
- Resource Summary Mode: Features histogram visualization with configurable thresholds for effective workforce distribution analysis.
- Multiple Tab Options: Includes Allocations by Investment, Allocations by Resource, Assignments by Investment, Assignments by Resource, and Investments tabs for different analytical approaches.
- Scenario Planning enables stakeholders to create multiple staffing projections under different conditions, supporting what-if analyses for market demand changes, operational cost shifts, and resource availability fluctuations.
- Partial Allocation prevents resource overallocation by allowing percentage-based allocations within specified date ranges, enabling realistic multi-investment participation.
The Resource Summary mode is now available in the Staff module within the Hierarchies workspace. This mode enables quick identification of staffing levels across skill sets and departments, helping you make informed decisions on resource allocation. You can set thresholds to easily identify areas where staffing levels are below or above optimal, enabling timely adjustments to maintain operational efficiency. Clarity has introduced the capability to create filter groups on several key tabs: Allocations by Investment, Allocations by Resources, Assignments by Investments, and Assignments by Resource. This advanced filtering feature allows users to easily define complex filter conditions by logically grouping filters.

## Leveraging the Staffing Grid

The Staffing grid page leverages the power of the cross-object grid in Clarity to help you manage resource allocation for all types of investments in Clarity. You need to have the Staffing - Navigate access right to view this page.

The cross-object grid displays all your investments (projects, ideas, and custom investments) in Clarity. You can use the grid to review attributes that are common across all investments or specific to individual objects and investments. Let's consider an example where you want to view allocation data for multiple projects, ideas, and custom investments. In such as scenario, the following attributes are available in the Staffing Grid:
- Attributes such as Name, Investment ID, and Type, shared across all these investment types, are displayed under the Common Investment section.
- Attributes such as Resource, Role, Booking Status, and Allocation, which are crucial to resourcing all investments, are available in the Staffing section.
- Attributes specific to Custom Investments, Ideas, and Projects are available in their respective sections.
- TSV attributes such as Actuals, Allocations, and ETC are available in the Totals section.
> [!NOTE]
> Some key points to remember are:
- The cross-object workspaces do not support Aggregated Calculated Attributes (ACA), Calculated Attributes
nor Formula Attributes.
- The % Availability option is now available as a unit of measure. This capability is critical because it allows
the Resource Manager to get an idea of how much demand can be booked based on each Resource's specific calendar of available capacity. Click the Avatar icon, select General Settings, and then select the %Availability setting. This section contains the following topics:
- Managing Records By Using the Grid Layout
- Conversations About Staffing
- Setup View Options
- Enable 'Resource Summary Mode' to View Histograms
- Setting Up the Investment to Resource View
- Setting Up the Resource to Investment View
- Setting Up the Role to Resource View
- Allocate Resources to Investments on the Staffing Page
- Reallocating Resources or Roles
- Replacing Roles/Resources in Investments
- Additional Features on Staffing Page
- Working with Widgets

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
> [!NOTE]
> To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Widgets
- Details Panel
- Saved Views
- Filters

### Conversations About Staffing

You can use the Staff grid to start a conversation with team members. When you mention other users, they receive a notification and can reply in their Notifications window or on the Conversations tab.
Follow these steps:
1. In the Main Menu select Staffing,Staff Grid . 2. Click a resource or role for an investment. The Details panel appears. 3. Click the Conversations tab. 4. Start a conversation or reply. For example, in a conversation about a resource or role, mention the resource manager.
In a conversation about a specific investment, mention the project coordinator or project manager.

#### Conversation Notifications

Notifications alert you about conversation activity when a user mentions you.
- To view your notifications, click the notifications bell icon at the top of all pages in Clarity.
- The number of new notifications appears on the notifications bell. The number disappears when you click the bell.
- The notifications panel displays the avatar of the sender and the first line of their message.
- Scroll up or down to view all notifications on the panel.
- To open a notification, click one in the list. Supporting details about the conversation's context appear. You can reply, edit, or delete the message.
- Notifications about conversations for staffing provide a **Go to Staffing** button.
- A user can be mentioned in a staffing conversation if the user has the **Staffing - Navigate** access right. However, the user cannot see the resource if the user does not have the required rights for the resource.
- To delete a specific notification, hover over the notification and click **Delete**. To delete all notifications, click **CLEAR ALL**. The notifications are deleted for the specific user.
- If a conversation is deleted, the notification is also deleted.

> [!IMPORTANT]
> More Information: Clarity: Start a Conversation or Post a Reply

### Setup View Options

You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs). Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
5. In **Type**, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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

> [!IMPORTANT]
> You have to select the per-period metric attributes from the Column Panel.
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off. > [!IMPORTANT] When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.


> [!IMPORTANT]
> When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
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

### Enable 'Resource Summary Mode' to View Histograms

Enabling 'Resource Summary Mode' to display staffing data as a histogram based on configured thresholds is crucial for effectively visualizing workforce distribution. This mode enables quick identification of staffing levels across different skill sets and departments, helping managers make informed decisions on resource allocation. By setting thresholds, managers can easily identify areas where staffing levels are below or above optimal levels, allowing for timely adjustments to ensure operational efficiency.
Follow these steps:
1. In the Main Menu, click Staffing, Staff Grid. 2. Toggle ON Resource Summary Mode. 3. Click Confirm to replace existing groupings with 'Resource' and display staffing data using a histogram. 4. Select the Hamburger menu for an allocation and select from the None, % Utilization, Allocation/Availability, and
Availability - Allocation options.
When 'Resource Summary Mode' is enabled:
- Grid groups by Resource.
- Histogram appears for the following columns with Availability in the Staff grid:
- Allocation
- Hard Allocation
- Total Usage
- Histogram appears for time-varying attributes (Per-Period Metrics) too.
- Colors in the histogram indicate Over/Under Threshold settings configured in the General Settings.
- Allocation and Hard Allocation depends on Over/Under Allocation Threshold
- Total Usage depends on Over/Under Assignment Threshold To learn more about these settings, see Clarity: First-Time Login Experience.
> [!NOTE]
> Some key points to remember are:
- You can use a maximum of 3 Group By attributes in this mode. Resource should be one of the attributes.
- The Display Availability and Remaining Availability Amounts for Roles option in Classic PPM determines how
role availability amounts are displayed, with or without Resource Summary mode.
- The Export to CSV capability is not available in this mode.
- You can modify the Allocation and Hard Allocation values directly within the grid in this mode.
- The Replace and Reallocate options are unavailable in this mode in the Staff module under Hierarchies.

### Setting Up the Investment to Resource View

You can set up the Investment to Resource view to see investments at the parent level with their requested resource and role allocations at the child level. The view is also referred to as the Investments view. You can use the View Options, Group By, Filters, and Save Views capability to set up this view. Follow these steps:

1. Log into Clarity and open the Staffing page.
2. Click **View Options** and select the relevant Per-Period Metrics, Periods, Start Period, and End Period.
3. In the View Options page, select **Sum of Periods** or **Grand Totals**.
4. Drag the **Common Investment: Name** field and drop it in the **Group By** area to group the records by Investment Name.
5. Click **Show Filter** and in the **Add Filter** drop-down list, select the following options:
   a. Staffing: Resource Type = Labor
   b. Staffing: Staff Type = Resource & Team
   c. Common Investment: Finish 'Is After' {date}
   d. Common Investment: Start 'Is Before' {date}
   e. Investment Types: Project, Ideas, and Custom Investments
   f. Resource Types: All, Labor, Equipment, Expenses, Material
6. Use the **Save** button to save your view.
7. If you have the relevant access rights, you can update the allocations for various resources.

### Setting Up the Resource to Investment View

The Resources to Investments view lists resources at the parent level with their investment allocations at the child level. The view is also referred to as the Resources view. You can use the View Options, Group By, Filters, and Save Views capability to set up this view. Follow these steps:

1. Log into Clarity and open the Staffing page.
2. Click **View Options** and select the relevant Per-Period Metrics, Periods, Start Period, and End Period.
3. In the View Options page, select **Sum of Periods** or **Grand Totals**.
4. Drag the **Staffing: Resource** field and drop it in the **Group By** area to group the records by resources.
5. Click **Show Filter** and in the **Add Filter** drop-down list, select the following options:
   a. Staffing: Resource Type = Labor
   b. Staffing: Staff Type = Resource & Team
   c. Common Investment: Finish 'Is After' {date}
   d. Common Investment: Start 'Is Before' {date}
   e. Investment Types: Project, Ideas, and Custom Investments
   f. Resource Types: All, Labor, Equipment, Expenses, Material
6. Use the **Save** button to save your view.
7. If you have the relevant access rights, you can update the allocations for various resources.

### Setting Up the Role to Resource View

The Roles to Resource view lists staffing requests that are grouped by roles. You can use the View Options, Group By, Filters, and Save Views capability to set up this view.
Follow these steps:
1. Log into Clarity and open the Staffing page.
2. Click **View Options** and select the relevant Per-Period Metrics, Periods, Start Period, and End Period.
3. In the View Options page, select **Sum of Periods** or **Grand Totals**.
4. Drag the **Staffing: Role** field and drop it in the **Group By** area to group the records by resources.
5. Click **Show Filter** and in the **Add Filter** drop-down list, select the following options:
   a. Staffing: Resource Type = Labor
   b. Staffing: Staff Type = Role
   c. Common Investment: Finish 'Is After' {date}
   d. Common Investment: Start 'Is Before' {date}
   e. Investment Types: Project, Ideas, and Custom Investments
   f. Resource Types: All, Labor, Equipment, Expenses, Material
6. Use the **Save** button to save your view.
7. If you have the relevant access rights, you can update the allocations for various resources.

### Allocate Resources to Investments on the Staffing Page

You can create and add staffing allocations by using the Staffing Workspace. Use the Add Row (+) icon to create a new Staffing request. When you create a new request, Clarity automatically adds all mandatory fields to the Staffing grid. Once you populate the fields, a new Staffing request is created. Follow these steps:

1. Log into Clarity and navigate to the Staffing page.
2. Click the **Add Row** icon.
3. In the **Resource** column, enter the Resource Name or Role. You will see a drop-down list with the relevant values.
4. Select the relevant resource and the investment name.
5. Enter values in other mandatory fields.

### Reallocating Resources or Roles (Partial or Complete)

The Resource Reallocation and Resource Replacement capabilities have been enhanced to ensure they support partial reallocation. Partial allocation ensures that Clarity only updates allocations within the specified date range and allocation percentage. It provides the following advantages:
- **Prevent Resource Overallocation**: One of the primary reasons for implementing partial allocation is to avoid the overallocation of resources. When team members are allocated across multiple investments, it is critical to ensure they aren't booked beyond their capacity.
- **Enable Work on Multiple Investments**: Partial allocation enables resources to contribute to multiple investments simultaneously. Instead of dedicating resources full-time to a single project, you can allocate them at specific percentages across different investments.
- **Create More Accurate Staffing Plans**: Implementing partial allocation allows for more realistic investment planning since you enter the actual time a resource is expected to work on an investment, versus blocking them for the duration of the entire investment.

You can reallocate resources and roles associated with investments by using the Staff grid. When you are reallocating resources or roles, you can update the following attributes:
- Start
- Finish
- Default Allocation

Follow these steps:
1. Log into Clarity and click Staffing. 2. Select the Staff tab. 3. Right-click a resource/role and select Reallocate. 4. In the Reallocate "Investment Name" window:
a. Toggle the Use Investment Start and Use Investment Finish toggles to either reallocate the resource/role for the entire investment duration or specify the new Start and Finish dates.
b. Set the Default Allocation percentage. c. Select Partial or Total override type. Partial allocation ensures that Clarity only updates allocations within the
specified date range and allocation percentage. d. Click Reallocate to complete the process.

### Replacing Roles/Resources in Investments (Partial or Complete)

You can replace resources and roles associated with investments in the Staff grid.
Follow these steps:
1. Log into Clarity and click Staffing. 2. Select the Staff tab. 3. Right-click a resource and click Replace. 4. In the Replace "Resource Name" window:
a. Toggle the Use Investment Start and Use Investment Finish toggles to either replace the resource/role for the entire investment duration or specify the new Start and Finish dates.
b. Select Partial or Total override type. Partial allocation ensures that Clarity only updates allocations within the specified date range.
c. Click Replace to complete the process.

### Additional Features on the Staffing Page

Some of the key features available on the Staffing page and missing from the Staffing Plan page are:
- You can configure the Staffing page to show ETCs and Actuals, which gives you greater visibility into resource
allocation and availability. This capability is not available on the Staffing Plan page.
- The Staffing page allows you to edit the allocation associated with investments. This capability is not available on the
Staffing Plan page.
- The Staffing Plan page only shows investments within the telescope period you configured. This limitation no longer
applies to the new Staffing page.

### Working with Widgets

You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. In this release, the following widgets are available:
- Number Tile
- Pie
- Bar
- Progress Ring
- Target (Roadmaps and Staffing Workspace)

Some of the key actions you can perform with widgets are:
- Use the **Show Widgets** button to display the widgets toolbar.
- Use the **Manage Widgets** button to open the Add Widgets dialog box to add existing widgets from the My Widgets section and the Widget library.
- Create a **New Widget** from the Add Widgets dialog box.
- Enhance your data analysis by using the **Interactive Filtering** feature on widgets, enabling deeper insights through drill-down capabilities.

You can create the following widgets in this release. Each widget supports distinct operations such as Count, Sum, and Average. You can also specify the color of the widget and select the relevant display format (number or percentage).
- **Number Tile Widget**: Displays a specific number based on the widget definition and filter criterion.
- **Pie Widget**: Displays a pie chart based on the widget definition and filter criterion.
- **Bar Widget**: Displays a bar graph based on the widget definition and filter criterion.
- **Progress Ring Widget**: Displays a ring with a number based on the widget definition and filter criterion.
- **Target (Roadmaps and Staffing Workspace)**: Displays targets either as goals or constraints on the number and money attributes of the relevant objects.

> [!NOTE]
> To learn more about Widgets, see Widgets.

### Configure the Target Widgets in the Staffing Workspace

Consider a scenario where you want to set a specific target for attributes such as Allocation. You can use the Target Widget to visualize and manage targets as either goals or constraints related to numerical and financial attributes associated with the Staff and Investment objects.
Follow these steps:
1. Navigate to the Staffing workspace and open the relevant tab.
2. Click **Show Widgets** and then click the **Widgets** menu.
3. Click **Manage Widgets** to open the Add Widget dialog box.
4. Select **Add** to display a pre-defined target from the Widget Library or click **New Widget** to open the New Widget window.
5. Select **Target** as widget type and select **Next** to open the Create Target dialog box.
6. Enter the following details to define the new target:
- Title: Enter the name of the target widget.
- Type: You can specify the following types of targets.
- Target: A constraint that you try to stay under and not go over. For example, Capital Cost. This is selected by default.
- Goal: A target that you can either achieve or exceed. Benefit is an example of a target that is a goal.
- Sum: Select the attribute that will be aggregated.
- Label: Enter a label name for the selected attribute in Sum. For example, In Plan. This is an optional field.
- Only Include items where: Select the filter criterion for the widget.
- **In Widget Library**: Add your target widget to the Widget library if you have appropriate permissions.
7. Click **Create** to create your target widget.

> [!NOTE]
> Some key points to remember are:
- You need the Widgets - Edit Targets in Staffing access right to use the Target widget in the Staffing
Workspace.
- You can enter or edit the Targets within Scenario or Non-Scenario modes. You can see different targets when
you move across different scenario modes.
- You can create Target widgets for attributes associated with the Investment and Staff objects.

## Analyze Staffing by Using Allocations

The Allocations by Investment and Allocations by Resources tabs provide the visual tools required to manage resource and investment allocations. They help you quickly review allocations from multiple perspectives and drive decisionmaking.
This section contains the following topics:
- Introducing the Allocations Tabs
- Prerequisites for Using the Staffing Workspace
- Exploring a Typical Use Case
- Setup View Options
- Configure Over and Under Threshold Configuration
- Leverage the Common Capabilities Across Both Tabs
- Working with the Allocations by Investment Tab
- Working with the Allocations by Resource Tab
- Working with the Resource Availablity View
- Working with the Resources by Role View
- Editing Staffing Details
- View or Hide Empty Rows
- Reallocating Resources or Roles
- Adding Staff to Investments
- Replacing Roles/Resources in Investments
- Create Staffing Projections Using Scenarios
- Conversations About Staffing
- Working with Widgets
- Configure the Target Widget

### Introducing the Allocations Tabs

You can work with allocations by using the following tabs:
- Allocations by Investment: This tab allows you to see investments at the parent level with their requested resource and role allocations at the child level.
- Allocations by Resource: This tab lists resources at the parent level with their investment allocations at the child level.
Both these tabs include the Resource Histogram, which includes the Resource Availability and Resources by Role layouts. The Resource Histogram includes the following views:
- Resource Availability: This view displays the allocation and availability of each resource for the selected time period.
- Resources by Role: This view lists roles at the parent level with the allocation and availability of associated resources
at the child level.
> [!NOTE]
> Some key points to remember are:
- The Staffing timeline includes the pagination controls. Hence, when you expand an Investment or Resource grouping row, Clarity displays the pagination controls when there are more than 100 child rows. You can review the total number of rows under the Name column. Pagination helps improve user experience by breaking down large datasets into manageable chunks and helps load resource and investment data faster.
- The % Availability option is now available as a unit of measure. This capability is critical because it allows the Resource Manager to get an idea of how much demand can be booked based on each Resource's specific calendar of available capacity. Click the Avatar icon, select General Settings, and then select the %Availability setting.

### Prerequisites for Using the Staffing Workspace

Clarity recommends the following configuration for the Staffing workspace:
- Clear the **Display Availability and Remaining Availability Amounts for Roles** system option in Classic PPM. This enables Clarity to ignore non-zero values in the Availability and Remaining Availability fields for roles within the Roles workspace and Staffing workspaces. This field is selected by default when you upgrade to preserve how Clarity behaved before the upgrade. Broadcom recommends that you clear this field after upgrading to make the best use of the Staffing workspace and the Roles workspace.
- Enable the Staffing: Additional Group By and Histogram Options in Resource Summary Mode feature toggle. The Resource Summary Mode displays staffing data with a histogram based on configured thresholds and is crucial for visualizing workforce distribution effectively. You can now use the following options on the hamburger menu to configure the histogram.
- None - No numbers are displayed
- % Utilization - Allocation divided by Availability
- Allocation/Availability - Shows the allocation and availability in a single cell
- Availability - Allocation - Shows Remaining Availability

### Exploring a Typical Use Case

Since the Allocations Tabs provide you with visual tools to manage resource and investment allocations, you can use them in multiple scenarios. However, in this example, let's focus on a typical scenario where resource and project managers struggle with staffing investments due to typical scenarios such as the overallocation of certain resources and under allocation of other resources. Let's review some key actions that they can perform:
1. Setup the Staffing Workspace: Start by ensuring the relevant feature toggles and options are configured. Next, ensure you select the relevant Unit of Measure (FTE, Hours, Days) from the General tab of the Settings pane. Then, use the Column panel to add relevant fields to the Timeline and the Resource Histogram sections. Finally, you can set up the grid by using the relevant View Options.
2. Use the Allocations by Investment Tab: You can use this tab to expand relevant investments and identify the various overallocated resources.
3. Use the Resource Availablity Tab: You can use the Resource availability view to view the total allocation of that user for the selected period.
4. Use the Allocation by Resource View: You can now identify all the investments associated with the resource and the respective allocations.
5. Use the Resource by Role View: You can view other resources mapping to the relevant role if your first choice of resource is not available. You can then identify the appropriate resources and drag and drop them to the relevant investment in the Investment Timeline.
> [!NOTE]
> Clarity now loads data in smaller increments in the Staffing workspace to help users access information quickly. The new spinner provides visual cues to indicate when data is being loaded. The number counter available in previous releases is no longer available.

### Setup View Options

You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).
Follow these steps:
1. Log into Clarity 2. Navigate to the relevant page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. Define the Start Period and End Period. The application adjusts the time periods based on the value that you selected
for periods. 6. Define if you want to see Sum of Periods or Grand Totals in the Totals column.
- Sum of Period displays the Total (e.g., Actual Cost) for the number of periods in the layout
- Example
- If an Investment has a duration of 12 months; the page is configured to display 6 months. If Sum of Periods is selected, then the Totals column will sum up the (e.g., Actual Cost) 6 months displayed in the layout.
- Grand Total displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout
- Example
- If an Investment has a duration of 12 months; the layout is configured to display 6 months. If Grand Totals is selected, then the Totals column will sum up the (e.g., Actual Cost) for the 12 months of the investment.
7. Select the Show Indicator on Non-Default Values toggle to display visual indicators when the default values of the following attributes are updated.
- Default allocation percentage
- Grand Totals or Totals column
- Allocation Start and Finish date columns
- Individual allocation per-period metrics This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.
8. In Allocation Display, select if you want to see Allocation, Hard Allocation, or Both. 9. Click X to close the View Options panel. The page applies your settings and shows the details that are spread across
the time periods.

### Configure Over and Under Threshold Configuration

You can use the General Settings to configure the under and over-allocation thresholds for the Allocations by Investment and Allocations by Resources tabs. The Under-Allocation threshold defines the percentage below the total capacity for the period specified in the tabs. Let's consider a use case where the Over Allocation Threshold is set to 125% and the Over Color is set to Red. The Under Allocation Threshold is set to 85%, and the Under Color is set to Green.
- Cells with allocation values ranging from 85% to 125% are grey.
- Cells with allocation values greater than 125% are red.
- Cells with allocation values less than 85% are green.
- Cells with no utilization are non-colored.
Some examples of non-colored cells that have no utilization include:
- Resources that do not have any availability
- All roles since they do not have availability
- A resource that has been terminated, and you are reviewing resource data post-termination
> [!NOTE]
> Some key points to remember are:
- In the Allocations By Resource tab, the total allocation amounts roll up to the grouping row, and the threshold setting determines the colors. Similarly, the Resource Histogram determines the colors by the threshold setting.
- In the Allocations by Investment tab, you can expand an investment to see the colors associated with various resources allocated to it.
Follow these steps:
1. Click the drop-down menu next to your avatar and username at the top right. 2. Click Settings and then click General. 3. Populate the Over Allocation Threshold and the Under Allocation Threshold fields. 4. Click Close.

### Leverage Common Grid Capabilities

There are some standard capabilities across the Timeline and Resource Histogram sections that you can leverage to set them up to meet your requirements.
- **Add attributes to the grid by using the column panel** - The Timeline and the Resource Histogram have independent column panels. The Timeline is a cross-object grid. Hence, the column panel includes common attributes across all investments or specific to individual objects and investments. All the common attributes across investment types are available under Common Investment. Attributes that are specific to various investments are available under the respective investments. You can select various attributes to add them to the grid. The column panel for the Resource Histogram includes all the attributes associated with the Resource Object. To learn more about using the column panel in the grid, see Getting Started with Clarity Grids.
- **View more information by using the Details panel** - The Details panel allows you to view more information about a particular record. It is available in a two-column layout and can be resized to take up 75% of the screen. The Details layout allows you to include two fields per row. You can horizontally drag any field to occupy one or both columns. Clarity will append the attribute label's investment type when you add attributes associated with specific investments in the Details panel. To learn more about using the Details panel in the grid, see Working with the Details Panel.
- Analyze Information by using the Filter and Search options You can use the Search and the Filter options to identify various records based on your requirements. To learn more about using the Filter and Search options, see Working with Filters .
- Personalize the grid and save your view Clarity allows you to save and modify multiple views that help you achieve your business goals. Some of the key actions you can perform are:
- Save an existing configuration in the grid
- Update existing views by using the Quick Save functionality
- Access views saved by other users if they have shared it
- Mark relevant views as favorites so that you can access them easily
- Select default views
- Leveraging the Starred Attribute for Resources and Investments You can mark various investments and resources as your favorites by associating a star with them in the Staffing workspace. This allows you to easily flag and find instances that require extra monitoring or attention. You can mark a resource or an investment as a favorite using the Starred attribute in the Column panel. The changes you make here are reflected in the Resource and the respective Investments workspaces.

### Working with the Allocations by Investment Tab

This tab allows you to see investments at the parent level with their requested resource and role allocations at the child level. Each investment is displayed as a Gantt bar, and you can see the total allocation of resources for each slice of the selected period. You can expand the investment to see the following information:
- The grid displays all the resources allocated to the investment. You can use the column panel to the grid to view additional information.
- The grey bar on the timeline indicates the duration for which the resource is allocated to the investment.
- The number represents the allocation of each resource for each slice of the selected period.
- The red dot indicates that the resource is overallocated, and you should review the Resource Availability view to learn
more about the resource's availability.
- When you select an individual resource the resource is automatically highlighted in the Resource Availablity view.
- You can expand a grouping in the Allocation by Investment double-click a single Allocation or Hard Allocation value to
edit it. This capability allows Staffing Managers to quickly change a single allocation or hard allocation amount without having to open the 'Edit Allocations' modal.
- You can now view Actuals in the Allocations Timeline. This helps resource managers align staffing decisions with posted actual units, leading to more accurate planning and efficient resource utilization.
- You can now clear the value in a Total or Per-Period cell to reset it. Clearing the cell enabled Clarity to recompute the amount using the current 'Default Allocation % associated with the resource. This is useful in scenarios where the visual indicator helps you realize that the Allocation field has been updated and no longer matches the default allocation. You can clear the value and move away if you want to reset the allocation to the default value automatically.

> [!NOTE]
> You can use the Investments drop-down list to select if you want the timeline to show all investments in Clarity or specific investment types such as projects, custom investments, or ideas. If you choose All Staffed Investments, you will not see any investments that don't allocate resources. You can select the individual investment type to view such investments. If you have access to an investment, you can view all the resources assigned to the investment.

### Working with the Allocations by Resource Tab

This tab lists resources at the parent level with their investment allocations at the child level. Each resource is displayed as a Gantt bar, and you can see the total allocation of resources for each slice of the selected period. You can expand the resource to see the following information:
- The grid displays all the investments to which each resource is allocated. The column panel allows you to view
additional information.
- The grey bar on the timeline indicates the duration for which the resource is allocated to the investment.
- The number represents the allocation of each resource for each slice of the selected period.
- The red dot indicates that the resource is overallocated. To learn more about the resource's availability, you should
review the Resource Availability view.
- You can expand a grouping in the Allocation by Resource double-click a single Allocation or Hard Allocation value to
edit it. This capability allows Staffing Managers to quickly change a single allocation or hard allocation amount without having to open the 'Edit Allocations' modal.
- You can now view Actuals in the Allocations Timeline. This helps resource managers align staffing decisions with posted actual units, leading to more accurate planning and efficient resource utilization.
> [!NOTE]
> Resource Managers can now view unallocated resources and allocate them to appropriate investments in this layout. If you have access to a resource, you can review all associated investments.

### Working with the Resource Availability View

This view displays the allocation and availability of each resource for the selected time period. Some key pieces of information you can see are:
- The histogram displays the total availability and total allocation for each resource.
- The height and the color of each cell visually display if a resource is over or under-allocated.
- A red color cell with increased height depicts over-allocation.
- A green color cell with regular height depicts under allocation or appropriate allocation.
- If you have the relevant access rights, you can drag and drop a resource to the relevant investment in the Investment
Timeline.

### Working with the Resources by Role View

This view lists roles at the parent level with the allocation and availability of associated resources at the child level. The histogram displays the total allocation for each role for each slice of the selected period. You can expand each role to see the following information:
- The histogram displays the total availability and total allocation for each resource.
- The height and the color of each cell visually display if a resource is over or under-allocated.
- A red color cell with increased height depicts over allocation.
- A green color cell with regular height depicts under allocation or appropriate allocation.
- If you have the relevant access rights, you can drag and drop a resource to the relevant investment in the Investment
Timeline.
> [!IMPORTANT]
> Some key points to remember are
- The Investment Timeline now displays all investments (staffed and unstaffed). You can use the Type (Common Investment) filter to view only projects, ideas, or custom investments.
- The control button allows you to maximize the Investment Timeline or the Resource Histogram. You can also click the use the control button to manually adjust the size of the Investment Timeline and Resource Histogram panels. After you maximize either of the panels, you can click Restore to return to the original configuration.
- You can staff an investment by dragging resources or roles from the Resource Histogram section to the Investment Timeline.
- The Staffing
- Navigate access right is required to access the Staffing workspace.
- If the Allocation Timeline has more than 5,000 records, the user will receive an error message indicating this
condition. To resolve the issue, use the configurable filtering capabilities to reduce the number of allocation records returned to the view.

### Editing Staffing Details

The Allocation Timeline on the tabs has been enhanced to ensure you can perform inline edits within the timeline. You edit allocations in the timeline columns and specify default allocation and start and finish dates. Editing allocations and visualizing the impact of your changes help users quickly review allocations from multiple perspectives and drive decisionmaking. You can edit attributes associated with the Staffing object. However, attributes associated with the associated objects are read-only.
Editing Staffing Details
You can edit staffing details in the allocations timeline by leveraging the following capabilities
- Bulk Edit TSV Allocations
- Edit Individual Allocations

Bulk Edit TSV Allocations The Bulk Edit modal on the Staffing page allows you to see the real-time impacts allocation changes for resources across investments before you save the changes. You can bring up this modal in multiple ways:
- On the left pane of the Timeline or the Resource Histogram, select a specific row and use the right-click action to select
Edit Allocations.
- Double-click a specific row on the right pane of the Timeline or the Resource Histogram to open the Bulk Edit window.
> [!NOTE]
> The periods in the Bulk Edit window are determined by the periods set in the View Options. After you make the relevant changes, you can immediately see their impact by observing the Availability and Remaining fields. Hence, you can try multiple permutations and combinations before saving the data. You can also leverage the copy-paste functionality to update multiple allocations quickly. Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Allocations by Investments** or **Allocations by Resources** tabs.
3. Click **View Options** and ensure you select the relevant Period, Start Period, and End Period.
4. Select **Allocation**, **Hard Allocation**, or **Both** to decide whether to view and edit Hard Allocations.
5. Perform one of the following steps to open the Bulk Edit modal:
   a. On the left pane of the Investment Timeline or the Resource Histogram, select a specific row and use the right-click action to select **Edit Allocations**.
   b. On the right pane of the Investment Timeline or the Resource Histogram, double-click a specific row to open the Bulk Edit modal. If you are on the Allocations by Resource view, you can double-click a resource/role on the right pane to open the Bulk Edit window. However, if you are on the Allocations by Investment view, you must expand an investment and double-click a specific resource to open the Bulk Edit window.
6. On the Bulk Edit window, you can edit the relevant cells to update the resource, investment, and hard allocations. View the Availability and Remaining Availability and save your changes whenever you have finalised your allocation details.

### Viewing or Hiding Empty Rows

You can now use the "Hide empty groups" toggle to hide the empty grouping rows. When the toggle is ON, grouping rows with no allocation records or no child rows are hidden. These grouping rows are recognized as empty because there is no icon for the user to `expand' the grouping. Grouping rows are also empty where the dates don't fall within the duration specified in the View Option Periods. You won't see a bar in the timeline bar panel for these rows. The use of the `Hide empty groups' toggle does not impact the visibility of the child rows based on dates, and you may see some child rows without data or bars in the timeline.

### Editing Individual Allocations

You can use the Columns panel to add various attributes to the Timeline grid for the Allocations by Investment and Allocations by Resources tabs. If you have the relevant permissions, you can edit the various attributes.

Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Allocations by Investments** or **Allocations by Resources** tabs.
3. Select **Allocation**, **Hard Allocation**, or **Both** to decide whether to view and edit Hard Allocations.
4. Click **Columns** to add the relevant columns to the Investment Timeline grid.
5. Update relevant fields based on your requirements. The visual cues on the timeline help you understand how your changes impact your investments. To learn more about using the visual cues, see Use the Allocations by Investment tab.
> [!NOTE]
> You can only edit attributes associated with the Staffing object; attributes associated with other objects are read-only.

### Working with Hard Allocations

Project and resource managers collaborate to make allocation and staffing decisions with Clarity when implementing agile planning. The typical booking process followed in such scenarios is given below:
- Project Managers (PM) input soft-booked allocations for all the resources required for a given investment and its
duration.
- Project managers capture soft allocations.
- Resource managers collaborate with project managers to gain alignment and convert soft to hard allocations.

You can leverage the Staffing Workspace to edit hard allocations for resources by performing the following actions:

1. Configure the Allocations Display by using **View Options** to ensure that Hard allocations are displayed on the workspace. You can select either the **Hard Allocation** or **Both** options.
2. Use the **Columns** button to ensure that the Hard Allocation attribute for the Staffing and Totals object is added to the grid.
3. You can edit the Hard Allocations for various resources with the relevant permissions.
4. When you double-click a resource in the Allocations by Resource layout, the Bulk Edit allocations modal displays both the Hard and Soft allocations. You can update the resource allocation on the modal and save your changes. If you are using a filter on the Booking Status filter to display only Hard Allocations, the Bulk Edit modal will only show investments where the resource has hard allocations. This helps resource managers quickly identify if resources are over-allocated in certain time periods.
5. You can also filter based on the Hard Allocation attribute to identify resources that meet your criterion. Since the Allocations by Resource layout has been configured to ensure Resource managers can quickly identify and add resources to investments, you will always see unallocated resources irrespective of your filter criterion. Consider an example where you use filters to identify resources whose hard allocation is more than 100 hours. Clarity will display all those resources. However, it will also display all the unallocated resources so you can quickly allocate them to relevant investments.

### Reallocating Resources or Roles (Partial or Complete)

The Resource Reallocation and Resource Replacement capabilities have been enhanced to ensure they support partial reallocation. Partial allocation ensures that Clarity only updates allocations within the specified date range and allocation percentage. It provides the following advantages:
- **Prevent Resource Overallocation**: One of the primary reasons for implementing partial allocation is to avoid the overallocation of resources. When team members are allocated across multiple investments, it is critical to ensure they aren't booked beyond their capacity.
- Enable Work on Multiple Investments: Partial allocation enables resources to contribute to multiple investments simultaneously. Instead of dedicating resources full-time to a single project, you can allocate them at specific percentages across different investments.
- Create More Accurate Staffing Plans: Implementing partial allocation allows for more realistic investment planning since you enter the actual time a resource is expected to work on an investment, versus blocking them for the duration of the entire investment.
You can reallocate resources and roles associated with investments by using the Investment Timeline. When you are reallocating resources or roles, you can update the following attributes:
- Start
- Finish
- Default Allocation

Follow these steps:
1. Log into Clarity and click Staffing. 2. Select the Allocations by Investments tab and expand the relevant investment. 3. Right-click a resource/role and select Reallocate. 4. In the Reallocate "Investment Name" window:
a. Toggle the Use Investment Start and Use Investment Finish toggles to either reallocate the resource/role for the entire investment duration or specify the new Start and Finish dates.
b. Set the Default Allocation percentage. c. Select Partial or Total override type. Partial allocation ensures that Clarity only updates allocations within the
specified date range and allocation percentage. d. Click Reallocate to complete the process.

### Adding Staff to Investments

You can add roles, resources, and teams to investments by performing either of the two options:
1. Using the Quick Select Widget 2. Using the drag-and-drop capability
Using the Quick Select Widget The Quick Select widget in the Timeline Layout of the Staffing Workspace makes it easy for users to add resources quickly. You can perform the following actions:
1. Right-click an investment in the Allocations by Investment tab and relevant staff. 2. Right-click a resource in the Allocations by Resource tab and add associated investments. 3. Specify a default allocation that will persist when you use the Quick Select Widget.
The following lookups have been introduced in Clarity to enable users to perform the quick select action.
- LOOKUP_INVESTMENT_QUICK_ADD
- LOOKUP_RESOURCE_QUICK_ADD
- LOOKUP_ROLE_QUICK_ADD
- LOOKUP_TEAM_QUICK_ADD

#### Using the Drag and Drop Capability

You can allocate resources and roles to investments by dragging them from the Resource Histogram to the Investment Timeline. When you are allocating resources or roles, you can update the following attributes:
- Start
- Finish
- Default Allocation
Follow these steps:
1. Log into Clarity and click Staffing. 2. Select the Allocations by Investments or Allocations by Resources tabs. 3. In the Resource Histogram section, select the Resource by Role or Resource Availablity tabs. 4. Identify the relevant resource and drag and drop it to the associated investment in the Investment Timeline. 5. In the Add Staff "Investment Name" window:
a. Toggle the Use Investment Start and Use Investment Finish toggles to either reallocate the resource/role for the entire investment duration or specify the new Start and Finish dates.


b. Set the Default Allocation percentage. c. Click Add to complete the process.

### Replacing Roles/Resources in Investments (Partial or Complete)

You can replace resources and roles associated with investments by dragging them from the Resource Histogram to the relevant staff in the Investment Timeline. You can also right-click a resource in the Timeline and click Replace.

Follow these steps:
1. Log into Clarity and click Staffing. 2. Select the Allocations by Investments or Allocations by Resources tabs. 3. In the Resource Histogram section, select the Resource by Role or Resource Availability view. 4. Identify the relevant resource and drag and drop it to the resource you want to replace. 5. You can also right-click a resource in the Timeline and click Replace. 6. In the Replace "Resource Name" window:
a. Toggle the Use Investment Start and Use Investment Finish toggles to either replace the resource/role for the entire investment duration or specify the new Start and Finish dates.
b. Select Partial or Total override type. Partial allocation ensures that Clarity only updates allocations within the specified date range.
c. Click Replace to complete the process.

### Create Staffing Projections Using Scenarios

Scenario planning in the Staffing Workspace allows stakeholders to create multiple projections of staffing plans under different conditions. For instance, customers may want to evaluate how changes in market demand, supply chain disruptions, or shifts in operational costs could impact overall profitability. Hence, they would like to perform a series of what-if analyses to simulate how different investments could be staffed and understand the implications of their decisions.

To learn more, see Create Staffing Projections Using Scenarios.

### Conversations About Staffing

You can use the Allocations Timeline to start conversations with the team members. When you mention other users, they receive a notification and can reply in their Notifications window or on the Conversations tab.
Follow these steps:

1. In the Main Menu, select **Staffing**, **Allocations Timeline**.
2. Select the **Allocations by Investments** or **Allocations by Resource** tab.
3. Expand an investment or resource.
4. Click an investment or resource. The Details panel appears.
5. Click the **Conversations** tab.
6. Start a conversation or reply.
Conversation Notifications Notifications alert you about conversation activity when a user mentions you.
- To view your notifications, click the notifications bell icon at the top of all pages in Clarity.
- The number of new notifications appears on the notifications bell. The number disappears when you click the bell.
- The notifications panel displays the avatar of the sender and the first line of their message.
- Scroll up or down to view all notifications on the panel.
- To open a notification, click one in the list. Supporting details about the conversation's context appear. You can reply,
edit, or delete the message.
- Notifications about conversations for staffing provide a Go to Staffing button.
- A user can be mentioned in a staffing conversation if the user has the Staffing - Navigate access right. However, the
user cannot see the resource if the user does not have the required rights for the resource.
- To delete a specific notification, hover over the notification and click Delete. To delete all notifications, click CLEAR
ALL.The notifications are deleted for the specific user.
- If a conversation is deleted, the notification is also deleted.
IMPORTANT
More Information:
- Clarity: Start a Conversation or Post a Reply
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


> [!NOTE]
> To learn more about Widgets, see Widgets.


Configure the Target Widgets in the Staffing Workspace
Consider a scenario where you want to set a specific target for attributes such as Allocation. You can use the Target Widget to visualize and manage targets as either goals or constraints related to numerical and financial attributes associated with the Staff and Investment objects.
Follow these steps:
1. Navigate to the Staffing workspace and open the relevant tab.
2. Click **Show Widgets** and then click the **Widgets** menu.
3. Click **Manage Widgets** to open the Add Widget dialog box.
4. Select **Add** to display a pre-defined target from the Widget Library or click **New Widget** to open the New Widget window.
5. Select **Target** as widget type and select **Next** to open the Create Target dialog box.
6. Enter the following details to define the new target:
- Title: Enter the name of the target widget.
- Type: You can specify the following types of targets.
- Target: A constraint that you try to stay under and not go over. For example, Capital Cost. This is selected by default.
- Goal: A target that you can either achieve or exceed. Benefit is an example of a target that is a goal.
- Sum: Select the attribute that will be aggregated.
- Label: Enter a label name for the selected attribute in Sum. For example, In Plan. This is an optional field.
- Only Include items where: Select the filter criterion for the widget.
- **In Widget Library**: Add your target widget to the Widget library if you have appropriate permissions.
7. Click **Create** to create your target widget.
> [!NOTE]
> Some key points to remember are:
- You need the Widgets - Edit Targets in Staffing access right to use the Target widget in the Staffing Workspace.
- You can enter or edit the Targets within Scenario or Non-Scenario modes. You can see different targets when you move across different scenario modes.
- You can create Target widgets for attributes associated with the Investment and Staff objects.

## Analyze Staffing by Using Assignments

Many organizations manage staffing through Task Assignment Estimates rather than using Allocations. The Staffing workspace now includes new tabs where the Investment Manager or Resource Manager can now manage their staffing needs by editing the Task Assignment ETC values. Users can also set their personal preferences for the Over / Under Thresholds differently for Assignments by using the Over Assignment Threshold and Under Assignment Threshold configuration options.


This section contains the following topics:
- Introducing the Assignment Tabs
- Prerequisites for Using the Staffing Workspace
- Exploring a Typical Use Case
- Setup View Options
- Configure Over and Under Threshold Configuration
- Leverage the Common Capabilities Across Both Tabs
- Working with the Assignments by Investment Tab
- Working with the Assignments by Resource Tab
- Working with the Resource Availablity View
- Working with the Resources by Role View
- Editing Staffing Details
- View or Hide Empty Rows
- Reallocating Resources or Roles
- Adding Staff to Investments
- Replacing Roles/Resources in Investments
- Create Staffing Projections Using Scenarios
- Conversations About Staffing
- Working with Widgets
- Configure the Target Widget

### Introducing the Assignments Tabs

You can work with assignments by using the following tabs:
- Assignment by Investment: This tab allows you to see investments at the parent level with their requested resource and role assignments at the child level. Each investment is displayed as a Gantt bar, and you can see the total assignment of resources for each slice of the selected period.
- Assignment by Resources: This tab lists resources at the parent level with their investment assignments at the child level. Each resource is displayed as a Gantt bar, and you can see the total assignments of resources for each slice of the selected period.
Both these tabs include the Resource Histogram, which includes the Resource Availability and Resources by Role layouts. The Resource Histogram includes the following views:
- Resource Availablity: This view displays the assignment and availability of each resource for the selected time period.
- Resources by Role: This view lists roles at the parent level with the assignment and availability of associated
resources at the child level.
> [!NOTE]
> Some key points to remember are:
- The Staffing timeline includes the pagination controls. Hence, when you expand an Investment or Resource grouping row, Clarity displays the pagination controls when there are more than 100 child rows. You can review the total number of rows under the Name column. Pagination helps improve user experience by breaking down large datasets into manageable chunks and helps load resource and investment data faster.
- The % Availability option is now available as a unit of measure. This capability is critical because it allows the Resource Manager to get an idea of how much demand can be booked based on each Resource's specific calendar of available capacity. Click the Avatar icon, select General Settings, and then select the %Availability setting.

### Prerequisites for Using the Staffing Workspace

Clarity recommends the following configuration for the Staffing workspace:
- Clear the **Display Availability and Remaining Availability Amounts for Roles** system option in Classic PPM. This enables Clarity to ignore non-zero values in the Availability and Remaining Availability fields for roles within the Roles workspace and Staffing workspaces. This field is selected by default when you upgrade to preserve how Clarity behaved before the upgrade. Broadcom recommends that you clear this field after upgrading to make the best use of the Staffing workspace and the Roles workspace.
- Enable the Staffing: Additional Group By and Histogram Options in Resource Summary Mode feature toggle. The Resource Summary Mode displays staffing data with a histogram based on configured thresholds and is crucial for visualizing workforce distribution effectively. You can now use the following options on the hamburger menu to configure the histogram.
- None - No numbers are displayed
- % Utilization - Allocation divided by Availability
- Allocation/Availability - Shows the allocation and availability in a single cell
- Availability - Allocation - Shows Remaining Availability

### Exploring a Typical Use Case

Since the Assignments Tabs provide you with visual tools to manage resource and investment assignments, you can use it in multiple scenarios. However, in this example, let's focus on a typical scenario where resource and project managers

struggle with staffing investments due to typical scenarios such as the overassignment of certain resources and under overassignment of other resources. Let's review some key actions that they can perform:
1. Setup the Assignment Tabs: You can ensure you select the relevant Unit of Measure (FTE, Hours, Days) from the General tab of the Settings pane. Next, use the Column panel to add relevant fields to the Timeline and the Resource Histogram sections. Finally, you can set up the grid by using the relevant View Options.
2. Use the Assignment by Investment Tab: You can use this tab to expand relevant investments and identify the various overassigned resources.
3. Use the Resource Availablity Tab: You can use the Resource availability view to view the total assignment of that user for the selected period.
4. Use the Assignment by Resource View: You can now identify all the investments associated with the resource and the respective assignments.
5. Use the Resource by Role View: You can view other resources mapping to the relevant role if your first choice of resource is not available. You can then identify the appropriate resource and drag and drop them to the relevant investment in the Investment Timeline.
> [!NOTE]
> Clarity now loads data in smaller increments in the Staffing workspace to help users access information quickly. The new spinner provides visual cues to indicate when data is being loaded. The number counter available in previous releases is no longer available.

### Setup View Options

You can adjust your view of the page to show calendar per-period metrics (also known as time-scaled values or TSVs).
Follow these steps:
1. Log into Clarity 2. Navigate to the Staffing page and click the relevant layout. 3. In the layout, click View Options. 4. In Periods, select a unit of time (Weeks, Months, Quarters, Years). 5. In Type, select Period or Duration. 6. Define the Start Period and End Period. The application adjusts the time periods based on the value that you selected
for periods. 7. Define if you want to see Sum of Periods or Grand Totals in the Totals column.
- Sum of Period displays the Total (e.g., Actual Cost) for the number of periods in the layout
- Example
- If an Investment has a duration of 12 months; the page is configured to display 6 months. If the Sum of Periods is selected, then the Totals column will sum up the (e.g., Actual Cost) 6 months displayed in the layout.
- Grand Total displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout
- Example
- If an Investment has a duration of 12 months; the layout is configured to display 6 months. If Grand Totals is selected, then the Totals column will sum up the (e.g., Actual Cost) for the 12 months of the investment.
8. Select the Show Indicator on Non-Default Values toggle to display visual indicators when the default values of the following attributes are updated.
- Default allocation percentage
- Grand Totals or Totals column
- Allocation Start and Finish date columns
- Individual allocation per-period metrics This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.
9. In Assignments Display, select ETC, Actuals or Usage.

10. Click X to close the View Options panel. The page applies your settings and shows the details that are spread across the time periods.

### Configure Over and Under Threshold Configuration

You can use the General Settings to configure the under and over-assignment thresholds for the Assignments by Investment and Assignments by Resources tabs. The Under Assignment threshold defines the percentage below the total capacity for the period specified in the tabs. For example, if you enter 40, resources are considered under-assigned when at least 40 percent below their full assigned capacity. Full assignment capacity is assumed as 100 percent.
Similarly, the Over Assignment Threshold defines a percentage above the total capacity for the tabs. For example, if you enter 20, resources are considered over-assigned when they are at least 20 percent above their full assigned capacity.
You can enter values ranging from 1 to 100 in the Over Assignment and Under Assignment Threshold boxes. However, you cannot enter negative values.
In the Assignment By Resource tab, the total assignment amounts roll up to the grouping row, and the threshold setting determines the colors. Similarly, the Resource Histogram determines the colors by the threshold setting.
In the Assignment by Investment tab, you can expand the investment to see the colors associated with various resources allocated to the investment.
Follow these steps:
1. Click the drop-down menu next to your avatar and username at the top right.
2. Click **Settings** and then click **General**.
3. Populate the **Over Assignment Threshold** and the **Under Assignment Threshold** fields.
4. Click **Close**.

### Leverage Common Grid Capabilities

There are some standard capabilities across the Timeline and Resource Histogram sections that you can leverage to set them up to meet your requirements.
- **Add attributes to the grid by using the column panel** - The Timeline and the Resource Histogram have independent column panels. The Timeline is a cross-object grid. Hence, the column panel includes common attributes across all investments or specific to individual objects and investments. All the common attributes across investment types are available under Common Investment. Attributes that are specific to various investments are available under the respective investments. You can select various attributes to add them to the grid. The column panel for the Resource Histogram includes all the attributes associated with the Resource Object. To learn more about using the column panel in the grid, see Getting Started with Clarity Grids.
- **View more information by using the Details panel** - The Details panel allows you to view more information about a particular record. The panel is available in a two-column layout and can be resized to take up 75% of the screen. The Details layout allows you to include two fields per row. You can horizontally drag any field to occupy one or both columns. Clarity will append the attribute label's investment type when you add attributes associated with specific investments in the Details panel. To learn more about using the Details panel in the grid, see Working with the Details Panel.
- **Analyze Information by using the Filter and Search options**: You can use the Search and the Filter options to identify various records based on your requirements. To learn more about using the Filter and Search options, see Working with Filters.
- **Personalize the grid and save your view**: Clarity allows you to save and modify multiple views that help you achieve your business goals. Some of the key actions you can perform are:
- Save an existing configuration in the grid
- Update existing views by using the Quick Save functionality
- Access views saved by other users if they have shared it
- Mark relevant views as favorites so that you can access them easily
- Select default views
- **Leveraging the Starred Attribute for Resources and Investments**: You can mark various investments and resources as your favorites by associating a star with them in the Staffing workspace. This allows you to easily flag and find instances that require extra monitoring or attention. You can mark a resource or an investment as a favorite using the Starred attribute in the Column panel. The changes you make here are reflected in the Resource and the respective Investments workspaces.

### Working with the Assignments by Investment Tab

This tab allows you to see investments at the parent level with their requested resource and role assignments at the child level. Each investment is displayed as a Gantt bar, and you can see the total assignments of resources for each slice of the selected period. You can expand the investment to see the following information:
- The grid displays all the resources allocated to the investment. You can use the column panel to the grid to view additional information.
- The grey bar on the timeline indicates the duration for which the resource is allocated to the investment.
- The number represents the assignments of each resource for each slice of the selected period.
- The red dot indicates that the resource is over assigned, and you should review the Resource Availability view to learn
more about the resource's availability.
- When you select an individual resource, the resource is automatically highlighted in the Resource Availablity view.
> [!NOTE]
> You can use the Investments drop-down list to select if you want the timeline to show all investments in Clarity or specific investment types such as projects, custom investments, ideas, and teams. If you choose All Staffed Investments, you will not see any investments that don't have assigned resources. You can select the individual investment type to view such investments. If you have access to an investment, you can view all the resources assigned to the investment.

### Working with the Assignments by Resource Tab

This tab lists resources at the parent level with their investment assignments at the child level. Each resource is displayed as a Gantt bar, and you can see the total assignment of resources for each slice of the selected period. You can expand the resource to see the following information:
- The grid displays all the investments to which each resource is allocated. The column panel of the grid allows you to view additional information.
- The grey bar on the timeline indicates the duration for which the resource is allocated to the investment.
- The number represents the assignment of each resource for each slice of the selected period.
- The red dot indicates that the resource is over-assigned, and you should review the Resource Availability view to learn
more about the resource's availability.

### Working with the Resource Availability View

This view displays the allocation and availability of each resource for the selected time period. Some key pieces of information you can see are:
- The histogram displays the total availability and total assignment for each resource.
- The height and the color of each cell visually display if a resource is over or under-assigned.
- A red color cell with increased height depicts over-assigned.
- A green color cell with regular height depicts under-assigned or appropriately assigned.
- If you have the relevant access rights, you can drag and drop a resource to the relevant investment in the Investment
Timeline.

### Working with the Resources by Role View

This view lists roles at the parent level with the assignment and availability of associated resources at the child level. The histogram displays the total assignment for each role for each slice of the selected period. You can expand each role to see the following information:
- The histogram displays the total availability and total assignment for each resource.
- The height and the color of each cell visually display if a resource is over or under-assigned.
- A red color cell with increased height depicts over-assignment.
- A green color cell with regular height depicts under allocation or appropriate assignment.
- If you have the relevant access rights, you can drag and drop a resource to the relevant investment in the Investment
Timeline.

> [!IMPORTANT]
> Some key points to remember are
- The Investment Timeline now displays all investments (staffed and unstaffed). You can use the Type
(Common Investment) filter to view only projects, ideas, custom investments, and teams.
- The control button allows you to maximize the Investment Timeline or the Resource Histogram. You can
also click the control button to manually adjust the size of the Investment Timeline and Resource Histogram panels. After you maximize either of the panels, you can click Restore to return to the original configuration.
- You can staff an investment by dragging resources or roles from the Resource Histogram section to the Investment Timeline.
- The Staffing
- Navigate access right is required to access the Staffing workspace.
- If the Allocation Timeline has more than 5,000 records, the user will receive an error message indicating this condition. To resolve the issue, use the configurable filtering capabilities to reduce the number of allocation records returned to the view.

### Editing Staffing Details

The Timeline has been enhanced to ensure you can perform inline edits within the timeline. You edit assignments in the timeline columns and specify default assignments and start and finish dates. Editing assignments and visualizing the impact of your changes help users quickly review assignments from multiple perspectives and drive decision-making. You can edit attributes associated with the Staffing object. However, attributes associated with the associated objects are readonly.

#### Editing Staffing Details

You can edit staffing details in the assignments timeline by leveraging the following capabilities.
- Bulk Edit TSV Assignments
- Edit Individual Assignments

#### Bulk Edit TSV Assignments

The Bulk Edit modal on the Staffing page allows you to see the real-time impact assignment changes for resources across investments before you save the changes. You can bring up this modal in multiple ways:
- On the left pane of the Timeline or the Resource Histogram, select a specific row and use the right-click action to select
Edit Assignments.
- Double-click a specific row on the right pane of the Timeline or the Resource Histogram to open the Bulk Edit window.
> [!NOTE]
> The periods in the Bulk Edit window are determined by the periods set in the View Options. After you make the relevant changes, you can immediately see the impact of the changes by observing the Availablity and Remaining fields. Hence, you can try multiple permutations and combinations before saving the data. You can also leverage the copy-paste functionality to update multiple assignments quickly.
Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resources** tabs.
3. Click **View Options** and ensure you select the relevant Period, Start Period, and End Period.
4. Select **Actuals**, **ETC**, or **Usage** to decide if you want to edit ETC.

5. Perform one of the following steps to open the Bulk Edit modal:
   a. On the left pane of the Investment Timeline or the Resource Histogram, select a specific row and use the right-click action to select **Edit Assignments**.
   b. On the right pane of the Investment Timeline or the Resource Histogram, double-click a specific row to open the Bulk Edit modal. If you are on the Allocations by Resource view, you can double-click a resource/role on the right pane to open the Bulk Edit window. However, if you are on the Assignments by Investment view, you need to expand an investment and double-click a specific resource to open the Bulk Edit window.
6. On the Bulk Edit window, you can edit the relevant cells to update the resource and investment assignments. View the Availability and Remaining Availability and save your changes whenever you have finalized your assignment details.

### Viewing or Hiding Empty Rows

You can now use the "Hide empty groups" toggle to hide the empty grouping rows. When the toggle is ON, grouping rows with no assignment records or no child rows are hidden. These grouping rows are recognized as empty because there is no icon for the user to `expand' the grouping. Grouping rows are also empty where the dates don't fall within the duration specified in the View Option Periods. You won't see a bar in the timeline bar panel for these rows. The use of the `Hide empty groups' toggle does not impact the visibility of the child rows based on dates, and you may see some child rows that won't have data or bars in the timeline.

#### Editing Individual Assignments

You can use the Columns panel to add various attributes to the Timeline grid for the Assignments by Investment and Assignments by Resources tabs. If you have the relevant permissions, you can edit these attributes.

Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resources** tabs.
3. Select **Actuals**, **ETC**, or **Usage** to decide if you want to edit ETC.
4. Click **Columns** to add the relevant columns to the Investment Timeline grid.
5. Update relevant fields based on your requirements. The visual cues on the timeline help you understand how your
changes are impacting your investments. To learn more about using the visual cues, see Use the Allocations by Investment tab.
> [!NOTE]
> You can only edit attributes associated with the Staffing object; attributes associated with other objects are read-only. Reallocate Resources or Roles
The Resource Reallocation and Resource Replacement capabilities have been enhanced to ensure they support partial reallocation. Partial allocation ensures that Clarity only updates allocations within the specified date range and allocation percentage. It provides the following advantages.
- Prevent Resource Overallocation: One of the primary reasons for implementing partial allocation is to avoid the overallocation of resources. When team members are allocated across multiple investments, it is critical to ensure they aren't booked beyond their capacity.
- Enable Work on Multiple Investments: Partial allocation enables resources to contribute to multiple investments simultaneously. Instead of dedicating resources full-time to a single project, you can allocate them at specific percentages across different investments.
- Create More Accurate Staffing Plans: Implementing partial allocation allows for more realistic investment planning since you enter the actual time a resource is expected to work on an investment, versus blocking them for the duration of the entire investment.
You can reallocate resources and roles associated with investments by using the Investment Timeline. When you are reallocating resources or roles, you can update the following attributes:
- Start
- Finish
- Default Allocation
Follow these steps:
1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** tab and expand the relevant investment.
3. Right-click a resource/role and select **Reallocate**.
4. In the Reallocate "Investment Name" window:
   a. Toggle the **Use Investment Start** and **Use Investment Finish** toggles to either reallocate the resource/role for the entire duration of the investment or specify the new Start and Finish dates.
   b. Set the **Default Allocation** percentage.
   c. Select **Partial** or **Total** override type. Partial allocation ensures that Clarity only updates allocations within the specified date range and allocation percentage.
   d. Click **Reallocate** to complete the process.

### Adding Staff to Investments

You can add roles, resources, and team to investments by performing either of the two options:
1. Using the Quick Select Widget
2. Using the Drag and Drop Capability

#### Using the Quick Select Widget

The Quick Select widget in the Timeline Layout of the Staffing Workspace makes it easy for users to add resources quickly. You can perform the following actions:
1. Right-click an investment in the **Assignments by Investment** tab and add relevant staff.
2. Right-click a resource in the **Assignments by Resource** tab and add associated investments.
3. Specify a default allocation that will persist when you use the Quick Select Widget.
The following lookups have been introduced in Clarity to enable users to perform the quick select action.
- LOOKUP_INVESTMENT_QUICK_ADD
- LOOKUP_RESOURCE_QUICK_ADD
- LOOKUP_ROLE_QUICK_ADD
- LOOKUP_TEAM_QUICK_ADD

#### Using the Drag and Drop Capability

You can allocate resources and roles to investments by dragging them from the Resource Histogram to the Investment Timeline. When you are allocating resources or roles, you can update the following attributes:
- Start
- Finish
- Default Allocation
Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resources** tabs.
3. In the Resource Histogram section, select the **Resource by Role** or **Resource Availability** tabs.
4. Identify the relevant resource and drag and drop it to the associated investment in the Investment Timeline.
5. In the Add Staff "Investment Name" window:
a. Toggle the Use Investment Start and Use Investment Finish toggles to either reallocate the resource/role for the entire duration of the investment or specify the new Start and Finish dates.
b. Set the Default Allocation percentage. c. Click Add to complete the process.
Replacing Roles/Resources in Investments (Partial or Complete) You can replace resources and roles associated with investments by dragging them from the Resource Histogram to the relevant staff in the Investment Timeline. You can also right-click a resource in the Timeline and click Replace.
Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resources** tabs.
3. In the Resource Histogram section, select the **Resource by Role** or **Resource Availability** view.
4. Identify the relevant resource and drag and drop it to the resource you want to replace.
5. You can also right-click a resource in the Timeline and click **Replace**.
6. In the Replace "Resource Name" window:
a. Toggle the Use Investment Start and Use Investment Finish toggles to either replace the resource/role for the entire investment duration or specify the new Start and Finish dates.
b. Select Partial or Total override type. Partial allocation ensures that Clarity only updates allocations within the specified date range.
c. Click Replace to complete the process.

### Create Staffing Projections Using Scenarios

Scenario planning in the Staffing Workspace allows stakeholders to create multiple projections of staffing plans under different conditions. For instance, customers may want to evaluate how changes in market demand, supply chain disruptions, or shifts in operational costs could impact overall profitability. Hence, they would like to perform a series of what-if analyses to simulate how different investments could be staffed and understand the implications of their decisions. To learn more, see Create Staffing Projections Using Scenarios.

### Conversations About Staffing

You can start a conversation with the team members on the Assignments by Investments or Assignments by Resources tab. When you mention other users, they receive a notification and can reply in their Notifications window or on the Conversations tab.

Follow these steps:

1. In the Main Menu, select **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resource** tab.
3. Expand an investment or resource.
4. Click an investment or resource. The Details panel appears.
5. Click the **Conversations** tab.
6. Start a conversation or reply.

#### Conversation Notifications

Notifications alert you about conversation activity when a user mentions you.
- To view your notifications, click the notifications bell icon at the top of all pages in Clarity.
- The number of new notifications appears on the notifications bell. The number disappears when you click the bell.
- The notifications panel displays the avatar of the sender and the first line of their message.
- Scroll up or down to view all notifications on the panel.
- To open a notification, click one in the list. Supporting details about the context of the conversation appear. You can
reply, edit, or delete the message.
- Notifications about conversations for staffing provide a Go to Staffing button.
- A user can be mentioned in a staffing conversation if the user has the Staffing - Navigate access right. However, the
user cannot see the resource if the user does not have the required rights for the resource.
- To delete a specific notification, hover over the notification and click Delete. To delete all notifications, click CLEAR
ALL.The notifications are deleted for the specific user.
- If a conversation is deleted, the notification is also deleted.
> [!IMPORTANT]
> More Information:
- Clarity: Start a Conversation or Post a Reply

### Working with Widgets

You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. In this release, the following widgets are available:
- Number Tile
- Pie
- Bar
- Progress Ring
- Target (Roadmaps and Staffing Workspace)

Some of the key actions you can perform with widgets are:
- Use the **Show Widgets** button to display the widgets toolbar.
- Use the **Manage Widgets** button to open the Add Widgets dialog box to add existing widgets from the My Widgets section and the Widget library.
- Create a **New Widget** from the Add Widgets dialog box.
- Enhance your data analysis by using the **Interactive Filtering** feature on widgets, enabling deeper insights through drill-down capabilities.

You can create the following widgets in this release. Each widget supports distinct operations such as Count, Sum, and Average. You can also specify the color of the widget and select the relevant display format (number or percentage).
- **Number Tile Widget**: Displays a specific number based on the widget definition and filter criterion.
- **Pie Widget**: Displays a pie chart based on the widget definition and filter criterion.
- **Bar Widget**: Displays a bar graph based on the widget definition and filter criterion.
- **Progress Ring Widget**: Displays a ring with a number based on the widget definition and filter criterion.
- **Target (Roadmaps and Staffing Workspace)**: Displays targets either as goals or constraints on the number and money attributes of the relevant objects.

> [!NOTE]
> To learn more about Widgets, see Widgets.

### Configure the Target Widgets in the Staffing Workspace

Consider a scenario where you want to set a specific target for attributes such as Allocation. You can use the Target Widget to visualize and manage targets as either goals or constraints related to numerical and financial attributes associated with the Staff and Investment objects.
Follow these steps:
1. Navigate to the Staffing workspace and open the relevant tab.
2. Click **Show Widgets** and then click the **Widgets** menu.
3. Click **Manage Widgets** to open the Add Widget dialog box.
4. Select **Add** to display a pre-defined target from the Widget Library or click **New Widget** to open the New Widget window.
5. Select **Target** as widget type and select **Next** to open the Create Target dialog box.
6. Enter the following details to define the new target:
- Title: Enter the name of the target widget.
- Type: You can specify the following types of targets.
- Target: A constraint that you try to stay under and not go over. For example, Capital Cost. This is selected by default.
- Goal: A target that you can either achieve or exceed. Benefit is an example of a target that is a goal.
- Sum: Select the attribute that will be aggregated.
- Label: Enter a label name for the selected attribute in Sum. For example, In Plan. This is an optional field.
- Only Include items where: Select the filter criterion for the widget.
- **In Widget Library**: Add your target widget to the Widget library if you have appropriate permissions.
7. Click **Create** to create your target widget.

> [!NOTE]
> Some key points to remember are:
- You need the Widgets - Edit Targets in Staffing access right to use the Target widget in the Staffing Workspace.
- You can enter or edit the Targets within Scenario or Non-Scenario modes. You can see different targets when you move across different scenario modes.
- You can create Target widgets for attributes associated with the Investment and Staff objects.

## Create Staffing Projections Using Scenarios

Scenario planning in the Staffing Workspace allows stakeholders to create multiple projections of staffing plans under different conditions. For instance, customers may want to evaluate how changes in market demand, supply chain disruptions, or shifts in operational costs could impact overall profitability. Hence, they would like to perform a series of what-if analyses to simulate how different investments could be staffed and understand the implications of their decisions.

You can now create and share scenarios in the Staffing workspace to help stakeholders understand different scenarios to meet demand with current resource availability.
- Setting Up Scenarios
- Creating a New Scenario
- Sharing Scenarios
- Viewing Scenarios Shared by Others
- Comparing Scenarios
- Understanding Personas and Access Rights

### Setting Up Scenarios

Here is a set of critical actions administrators can perform to enable this capability for end users:
- Navigate to the Actions Framework and configure the Staffing Scenarios--Share with People and Staffing Scenarios-- Share with Groups actions. These actions are enabled by default to allow scenario owners to share their scenarios.
- Assign the Staffing Scenario--Access permission to stakeholders who need access to the Scenarios tab on the Staffing tile of the Administration workspace. Stakeholders can use the Scenarios tab to perform administrative actions, such as assigning owners to scenarios and sharing relevant scenarios with end users or groups. You must also assign Staffing Scenario - Edit - All and Staffing Scenario - Delete - All access rights.
- Assign the Staffing Scenario - Create/Copy/Edit/View access rights to end users using the Scenarios capability in the Staffing workspace.

### Creating a New Scenario

Create a new scenario by using the New Scenario button in the Scenario drop-down. The Scenario drop-down allows you to perform the following actions:
- Create a new scenario
- Manage scenarios where you are the owner
- Access scenarios shared with you
- Switch between various scenarios
After you create a scenario, Clarity launches the Scenario mode, where you can update investment and allocation fields by editing details in the grid or dragging the Gantt bars to compare scenarios. Clarity displays two rows of data for each column. The first one is editable and is specific to the current scenario. Administrations can update various investment and allocation fields. The second row, which is greyed out, is either current data or data from a specific scenario selected in the Compare to drop-down list.


Some key actions you can perform in the scenario mode are given in the following table.

Enabled Activities

Investment: Edit `Start Date' Y field

Investment: Move the

Y

Investment bar

Move the Allocation bar (child row)

Edit Allocation per-period data

Edit Allocation `Start' date field

Edit Allocation `Finish' date field

Edit `Default Allocation %' field

Right-click action to `Reallocate' entire allocation

Display Widgets & Targets using scenario-enabled fields

Filtering on scenario-enabled fields

Investments

Allocation by Investment

Assignments by

and Resource

Investment and Resource

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Y

Staff

> [!NOTE]
> Some key points to remember are:
- When you are in the Scenario Mode, you will see Scenario-enabled fields and scenario-editable fields. Scenario-enabled fields are those from the staffing workspace available in the Scenario mode. Scenarioeditable fields are a subset of scenario-enabled fields you can edit to compare various scenarios.
- The following actions are disabled in the Scenario Mode:
- Add Staff (to an Investment)
- Add Investment (to a Resource)
- Delete (staff or investment child row)
- Edit Assignments per-period metrics
- Edit Hard Allocations per-period metrics
- Directly updating the Staffing `Resource' field to `Replace' staff
- Drag-n-drop from Resource Histogram to Timeline to `Add' or `Replace' staff
- Making date changes to the Investment does not change the duration of the investment. It has the following impact.
- The existing Allocations, Tasks, and Assignments move with the Investment dates.
- The investment dates will move allocations and tasks forward without considering the dates of the posted
actuals.
- Allocations are shifted with the investment, and the amounts are re-computed into the new periods based on the current allocation % of availability amount within each period.
- Draft Scenario changes ignore the posted 'Actuals' date when allowing you to move the Investment or Allocation Start Date forward. You can move the Scenario Start Date after the earliest posted actual


transaction date. When the proposed Scenario changes are published, the changed Start Date will automatically adjust to align with the earliest posted actual transaction date.
- Changing Allocation dates or moving the allocation bar directly impacts the Allocation and the `Effort' task for the selected staff member.
- The child row bars on all four Timeline tabs represent the `Allocation,' regardless of the metric numbers selected for the view options.
- On the `Assignments' tabs, the bar represents the `Allocation' duration, and the displayed numbers represent the Task Assignment ETC values. It is possible the Allocation duration does not cover the Task Assignments' min/max dates or duration when the investment has `regular' tasks.
- The Allocation and `Effort' Task assignment ETC amounts are linked. Therefore, when changed, the Allocation and Effort Task Assignments should match. Existing regular tasks are not linked to changes in allocations.
- If you move the Allocation bar on an investment with regular tasks, it does not move the regular tasks, and you will see zero ETC values in the new periods.
When you create a scenario and then change the current data on the staffing workspace:
- An investment becomes a member of a scenario when it has scenario data.
- The updated data changes on the live investment are displayed when selecting the `Current Data' for comparison.
- If staff is added to the live investment, the scenario will NOT be aware of the additional allocation staffing row if the
investment is already a member of the scenario.
- The `Current Data' row will appear as expected.
- Changing scenario data on the added staff member row is NOT saved.
- If you add staff, it is recommended that you create a new scenario to ensure that the added staff members are loaded
into the scenario for editing.
Follow these steps:
1. Log into Clarity and open the Staffing Workspace. 2. Navigate to the relevant tab and click the Scenario drop-down. 3. Click New Scenario, enter the name and description of the scenario, and click Save. 4. In scenario mode, update the scenario-editable fields to model your new scenario. 5. Click Exit Scenario Mode to exit the scenario and access the current data.

### Sharing Scenarios

The Actions Framework helps administrators decide how scenarios can be shared in Clarity. The Staffing Scenarios Share with People action allows end-users to share scenarios to which recipients have view or editor access. The Staffing Scenarios - Share with Groups action allows end-users to share scenarios using Clarity Groups to which recipients have view or editor access.
> [!NOTE]
> Some key points to remember are:
- If any of the Scenario actions are enabled for end-users, they can only share scenarios where they are the owner. These scenarios are available under the "Mine" tab.
- If the Scenario actions are shared with Groups and/or People, you see the groups and people icons with a corresponding badge count.
- The Share button is always displayed when users hover over the Actions column. When the user clicks the "Share" button, a sharing modal is displayed, and end users can share scenarios based on the configuration specified in the Actions workspace.
Follow these steps:
1. Log into Clarity and open the Staffing Workspace.

2. Navigate to the relevant tab and click the **Scenario** drop-down.
3. Click **Manage** to open the Manage Scenarios dialog box.
4. Hover over the Actions column associated with the relevant scenario and click **Share**.
5. Click **Add People** or **Add Group** to share the scenario with the relevant user or group. You can now select multiple users and groups using the multi-select lookup.
6. Click **Editor** or **Viewer** with the associated person or group and click **Done**.

### Viewing Scenarios Shared by Others

You can collaborate with other organizational stakeholders by viewing scenarios they share. These scenarios are available in a couple of areas:
- Scenario drop-down.
- Shared tab in the Manage Scenarios window
The following points govern the scenarios you see in the Scenario drop-down:
- You can see all the scenarios that you created.
- You can see all scenarios shared with you with Editor or Viewer access. Scenario owners can share scenarios by
using the Share button on the Manage Scenarios dialog box. Administrators with the Staffing Scenario - Access permission can also navigate to the Scenarios tab and directly share scenarios with users and groups.
> [!NOTE]
> Even if you have the Staffing Scenario- Access permission, you will not see all the scenarios in the system on the Scenarios drop-down in the Staffing workspace. This is because the end-user experience has been designed to ensure that power users with administrative rights can use the Staffing Workspace to create and share their scenarios without having to scroll through all the scenarios in the system.
Follow these steps:
1. Log into Clarity and open the Staffing Workspace.
2. Navigate to the relevant tab and click the **Scenario** drop-down.
3. Click **Manage** to open the Manage Scenarios dialog box.
4. Click **Shared** to view all the scenarios that have been shared with you.

### Comparing Scenarios

You can use the compare scenarios capability to compare two scenarios and see how your staffing choices impact organizational strategy. When you compare scenarios, Clarity makes the following changes:
- Clarity displays two rows of data for each column. The first one is editable and is specific to the current scenario. Administrations can update various investment and allocation fields.
- The second row, which is greyed out, is data from a specific scenario selected in the Compare to drop-down list.
- A tick mark appears beside both the Selected Scenario and the Compare to: Scenario in the drop-down list.
> [!NOTE]
> Some key points to remember are:
- Supported comparison attributes include:
- Allocation with Start and Finish dates
- ETC
- Hard Allocation
- Total Usage
- Non-supported attributes are displayed only in the selected scenario.
- Hamburger menu settings are accessible only for the selected scenario, but any changes made in these
settings will also affect the Compare to: <Scenario> display.

Follow these steps:

1. Log into Clarity and click **Staffing** to open the Staffing workspace.
2. Navigate to the relevant tab and select a scenario from the **Scenario** drop-down list. The grid shows the selected scenario, and the **Compare to Scenario** option appears on the screen.
3. Select another scenario from the **Compare to:** drop-down list. The grid will show details for both the Selected Scenario and Compare to: Scenario.
4. Click **Exit Scenario Mode** to return to the default grid view.

### Publish Investment Scenarios in Staffing Workspace

Scenario planning in the Staffing Workspace allows stakeholders to create multiple projections of staffing plans under different conditions. You can now publish scenarios to quickly update the desired changes into the current investment plan of record. When you publish a scenario, the Publish modal displays all the investments where staffing records have been updated. You also see a count of the changes made for each investment and can perform the following actions using the selection action bar.
- Use the Select All option to select all the investments.
- Use the Deselect All option to clear all the investments.
- Use the Reset option to reset all the changes you made to the selected investments. After you publish a scenario, you can see the following messages on the screen:
- The scenario changes have been published.
- The scenario changes have been partially published. Some changes could not be applied for specific reasons.
- Scenario changes could not be published for specific reasons. A scenario will not be published when:
- An Investment has posted actual transactions.
- An investment is currently locked.
- The user does not have Investment Edit permission. The following access rights have been introduced:
- Staffing Scenario--Publish--Owner: This access right is intended for the typical Staffing Scenario owner. It allows
them to access the Staffing Scenario `Publish' modal to preview and publish selected investments.
- Staffing Scenario-Publish-All: This access right is intended for a Staffing Scenario super-user and allows the user to
publish all scenarios in the system.

Follow these steps:

1. Log in to Clarity and click **Staffing** to open the Staffing workspace.
2. Navigate to the relevant tab and select a scenario from the **Scenario** drop-down list. The grid shows the selected scenario, and the **Compare to Scenario** option appears on the screen.
3. Use the action bar to select the relevant investments and revert any investments if necessary.
4. Click **Publish** to publish the scenario.
> [!TIP]
> Watch the following video to learn more about Publish Investment Scenarios in Staffing Workspace from timestamps 28:10 to the end of the video.

### Understanding Personas and Access Rights

The following table explains the personas using the Scenarios capability and the access rights they would need. These rights are described only from the context of using the scenarios capability. You will need additional access rights to update investment and allocation details.

| Persona | Description | Access Rights |
|---|---|---|
| **Ian - The Administrator** | Ian wears multiple hats. He administers the Staffing workspace and manages staffing for an OBS Unit in his organization. | - **Staffing Scenario - Access**: Allows Ian to access the Scenarios tab on the Staffing page of the Administration workspace. He can manage scenarios for the entire organization from the Scenarios tab on the Staffing Workspace. - **Staffing Scenario - Edit All**: Allows Ian to edit all scenarios in the Staffing Workspace. It also allows Ian to change the scenario owner and share it with others using the Scenarios tab. - **Staffing Scenario - Delete All**: Allows Ian to delete any scenario by using the Scenarios tab and the Staffing workspace. - **Widgets - Edit Targets in Staffing**: Allows Ian to set Targets on any tab in the Staffing workspace. - **Staffing Scenario - Publish - All**: Allows the user to publish all scenarios in the system. |
| **Dana - Staffing Power User** | Dana will be creating scenarios and also setting targets for their unit. | - **Staffing Scenario - Access**: Allows Dana to access the scenario drop-down. - **Staffing Scenario - Create**: Allows Dana to create scenarios. - **Staffing Scenario - Copy**: Allows Dana to copy scenarios. - **Widgets - Edit Targets in Staffing**: Allows Dana to set Targets on any tab in the Staffing workspace. - **Staffing Scenario - Publish - Owner**: Allows Dana to access the Staffing Scenario Publish modal to preview and publish selected investments. |
| **Ray - Staffing User** | Ray is a regular staffing user who will be creating scenarios. | - **Staffing Scenario - Access**: Allows Ray to access the scenario drop-down. - **Staffing Scenario - Create**: Allows Ray to create scenarios. - **Staffing Scenario - Copy**: Allows Ray to copy scenarios. - **Staffing Scenario - Publish - Owner**: Allows Ray to access the Staffing Scenario Publish modal to preview and publish selected investments. |

> [!TIP]
> Watch the following video to learn more about Understanding Personas and Access Rights from timestamps 25:52 to 28:10.

## Analyze Investments in the Staffing Workspace

The Investments tab within Clarity's Staffing workspace provides a comprehensive and strategic view of active investments, serving as a critical tool for project managers, resource planners, and strategic decision-makers. This powerful component combines both timeline and grid layout capabilities to deliver a unified platform where stakeholders can visualize, analyze, and manage all active investments across the organization. The Investments tab addresses the complex challenges of modern business environments by offering consolidated views that enable rapid assessment of investment timelines, resource utilization patterns, and strategic alignment across multiple investment types including projects, ideas, custom investments, and teams. The Investment tab includes the following tabs.
- Timeline Layout: The Investments tab in Clarity's Staffing workspace provides a comprehensive, timeline-based view
of active investments, designed to aid strategic planning and efficient resource allocation. To learn more, see Analyze Active Investments by using the Timeline Layout
- Grid Layout: The Investments tab includes the Grid layout, which displays all the active investments you can access. You can use the grid to review common attributes across all investments or specific to individual investments. Consider an example where the grid includes multiple projects, ideas, custom investments, and teams. To learn more, see Analyze Active Investments by using the Grid Layout.

### Create, Edit, and Delete Agreements in the Investments Tab

The Investments tab in Clarity's Staffing workspace provides a comprehensive view of active investments to aid strategic planning and efficient resource allocation. The Timeline layout enables project managers, resource planners, and strategic planners to get a consolidated, graphical representation of all active investments. You can now create and manage business agreements from the Timeline layout if your administrator has edited the relevant investment blueprint and selected the Show in Details flyout option for the Agreements module. You can also select the Show Agreements toggle to ensure the agreements are available in the Timeline layout and can visually indicate the agreements between various investments. You can also create and manage business agreements from the Details panel available in the Grid layout.

> [!TIP]
> Watch the following video to learn more about Create, Edit, and Delete Agreements in the Investments Tab, from timestamp 12:59 to the end of the video.
Key Points to Remember
Some key points to remember are:
- The Investments tab offers both a Gantt-style Timeline layout--ideal for high-level strategic planning, scenario simulations, and milestone tracking--and a cross-object Grid layout for detailed analysis of common and investmentspecific attributes.
- Group investments into swimlanes by attributes such as Work Status or Manager, reorder items within lanes, and apply color-by rules (e.g., approval status) to visualize portfolio composition and quickly identify outliers.
- Choose up to three metrics (e.g., Budgeted Cost, Planned Benefit) to appear as badges on timeline bars, ensuring real-time visibility of critical KPIs directly in the Investments view.
- Create, compare, and share multiple what-if scenarios via the Scenarios drop-down; then publish selected scenario changes back to the live investment plan--complete with selective investment publishing and change previews--to align resource allocations with evolving business needs.

### Analyze Active Investments by using the Timeline Layout

The Investments tab in Clarity's Staffing workspace provides a comprehensive, timeline-based view of active investments, designed to aid strategic planning and efficient resource allocation.
In today's dynamic business environment, organizations face constant shifts in priorities, demands, and resource availability. The Investments tab addresses this need by offering a timeline layout similar to the Roadmaps functionality, tailored specifically for investment and staffing contexts. This layout enables project managers, resource planners, and strategic planners to get a consolidated, graphical representation of all active investments, making it easy to assess timelines, key milestones, dependencies, swimlanes, and overall resource utilization.
Highlights and Benefits of the Investment Timeline View
- Enhanced Planning with Timeline Visualization: The timeline layout provides a clear visual representation of each
investment's duration, start and end dates, and overlap with other projects. This view enables users to quickly grasp the overall investment landscape and adjust schedules as needed.
- Swimlane Organization: The Investments Timeline supports the organization of investments into swimlanes, allowing users to group investments by attributes such as Work Status or Manager. This feature provides a structured way to view related investments together, making it easier to analyze specific groups and understand resource allocation across different categories.
- Scenario-Based Planning: Users can create and switch between various scenarios to simulate different planning strategies. This feature allows planners to explore "what-if" scenarios, helping them understand the implications of changes in resource allocation, project timing, or investment prioritization.
- Comprehensive Customization with View Options: The Investments tab includes a robust set of view options, allowing users to customize the display based on periods, swimlanes, sorting preferences, and color-coding. This

flexibility helps tailor the view to specific reporting and planning needs, ensuring relevant information is always accessible.
- Integration of Key Milestones and Custom Events: In addition to investment timelines, users can overlay key milestones and create custom events on the timeline, providing critical context for project milestones, target dates, or other significant events. This feature is especially useful for tracking project phases, deadlines, or major deliverables.
- Seamless Data Export for Reporting: The Investments tab supports a PDF export function, allowing users to generate reports of the timeline view. This feature is particularly valuable for creating snapshots of current plans and sharing them with stakeholders.
Pre-Requisites To enable the Investments tab in the Staffing workspace, an administrator must first configure it within the Staffing Blueprint settings. Once enabled, users with Staffing Workspace access can view and interact with this tab, ensuring they have the necessary permissions to manage investment data effectively. Configurable options within the View Options allow users to set up their preferred display parameters, making it easy to adapt the timeline to varying requirements.
Visualize and Model Work Using the Timeline The Investments Timeline layout in the Staffing workspace allows users to view and organize investments over monthly, quarterly, or yearly periods. The timeline's period headers align with the fiscal time period labels defined for the default entity in Classic PPM, ensuring consistency across planning views. Only investments that fall within the timeline's configured start and finish periods appear in this view, with additional filtering available based on selected period types.
In the timeline, investments appear in different visual formats based on available date information:
- Bars represent investments with both a start and finish date.
- Circles indicate investments with only a start date.
- Diamonds denote investments with only a finish date. For investments linked to specific dates or milestones, users can configure custom visual indicators to represent key events such as go-live dates or significant milestones. Icons for these events, available as shapes like diamonds, circles, or triangles, can be set up in the Events sub-tab under View Options.
Follow these steps to create and manage investments on the timeline: 1. Open the Staffing workspace and navigate to the Investments tab. 2. Click Timeline to open the timeline layout. 3. To add an investment:
- Click and drag to draw the investment bar across the timeline, covering its duration.
- Alternatively, click on a specific period to set the investment in that location.
- You can place multiple investments within the same row. 4. If an investment lacks an assigned Swimlane value, it appears in the None swimlane. Once all investments are assigned a swimlane value, the None swimlane will no longer be displayed. 5. Complete the fields in the DETAILS panel. If your administrator has created any mandatory attributes, they will also be added to the DETAILS panel. 6. (Optional) Click the Configure button in the DETAILS panel to add more fields as needed. This enables you to populate additional information for each investment. For more details on using the DETAILS panel, see Common Components. 7. Click Done to save the investment details.

#### Arrange Items in the Timeline

Organize and adjust investments directly on the timeline layout in the Investments tab of the Staffing workspace. This functionality allows you to easily modify investment dates, group investments using swimlanes, and rearrange items for a clearer view of your staffing and resource allocation plan.
- Drag Investments to Adjust Dates: Select an investment on the timeline and drag it horizontally to adjust its start or end date. This flexibility allows for quick timeline modifications based on planning changes. In Scenario Mode, you can only adjust the dates horizontally; vertical movements between swimlanes are restricted.
- Organize with Swimlanes: Use the Swimlanes setting in View Options to group investments by attributes such as Manager or Work Status. This grouping feature makes it easy to track and review investments by specific categories. Within each swimlane, you can drag investments vertically to reorder them or move them between lanes.
- Drag-and-Drop to Rearrange Investments: If necessary, you can create empty rows by moving investments, and subsequent investments will automatically shift up or down to fill any empty rows, maintaining a clean and organized timeline view.
- Labels for Single-Date Investments: Investments with a single date (start or end) are represented as diamonds or circles. The labels for these items display outside the shapes, and if overlapping labels occur, you can manually adjust the position by dragging the items down to a new row for clarity.
- Load More option: When many records are present, a Load More button appears at the bottom of the timeline view. This button allows you to load additional items incrementally, helping to manage the display of large datasets without overwhelming the view. Each click loads the next set of investments up to the maximum allowed per page.
- Lock Dates with Shift Key: In Non-Scenario Mode, hold the Shift key while dragging an investment vertically to lock its dates, moving it to a different swimlane without altering the start or end dates. This feature helps keep dates consistent while reassigning items to different groups.
- Save View Configurations: Once you configure the grouping and arrangement of investments, save the view to easily retrieve it later. These settings are retained across sessions, allowing you to access your preferred timeline layout anytime.

#### Configure Timeline View Options

Configure the timeline layout to view investments organized by swimlanes and groups, tailored to different planning needs. You can customize the view by setting colors, displaying metrics as badges, and selecting periods. By default, the swimlane and color settings are set to None. Adjust the settings as per your analysis or reporting needs.
Follow these steps:
1. Open the Staffing workspace and navigate to the Investments tab. 2. Click View Options. 3. In the TIMELINE sub-tab, configure the following settings:
- Periods: Define the time intervals displayed on the timeline. Options include Months, Quarters, and Years.
- Start Period: Select the starting period for the timeline layout. Investments will be displayed from this period onward.
- End Period: Define the end period for the timeline layout, determining the time span covered in the view.
- Totals: Configure how totals are displayed in the Totals column based on the selected period range. You can choose between Sum of Periods or Grand Totals to view totals aligned with specific needs.
- Sum of Periods: Displays the total for the number of periods currently shown in the grid. For example, if an investment spans 12 months but only 6 months are visible, Sum of Periods will display the total (e.g., Actual Cost) for the 6 months displayed in the grid.
- Grand Totals: Displays the total for the entire duration of the investment, regardless of the number of periods displayed in the grid. For example, if an investment spans 12 months but only 6 months are displayed, Grand Totals will display the total (e.g., Actual Cost) for all 12 months of the investment.
- Swimlanes: Select an attribute to group investments into horizontal swimlanes based on their values. For example, group investments by Work Status or Manager to help stakeholders view investments organized by current status

or responsible team member. Available swimlane values are based on both static and dynamic lookups, with support for custom-defined and system-restricted lookups. Key points to remember:
- Only lookup values associated with active investments will appear in the swimlane selector.
- Custom and system-defined lookups can be used for swimlanes, but only static lookups are supported for the
"Color By" option.
- You can apply filters on the selected swimlane attribute, displaying only the relevant swimlanes in the timeline
view. Empty swimlanes can be hidden by using the Hide empty swimlanes toggle.
- Swimlane Groups: Group swimlanes for enhanced usability and presentation. This setting allows you to expand or
collapse groups of swimlanes, helping you to focus on specific segments of data. The Swimlane Groups selector shares the same options as the Swimlanes selector. Key points to remember:
- Selecting the same attribute for both Swimlanes and Swimlane Groups may lead to redundancy in the timeline
view, so choose attributes carefully.
- When exporting to PDF, both swimlane and swimlane group configurations, along with their expand/collapse
states, are retained, ensuring an accurate representation of the current view.
- Sort: Configure sorting preferences to arrange investments within swimlanes. Sorting options include alphabetical
order, start date, or other attributes relevant to your analysis. The selected sorting order is applied across all swimlanes, helping maintain a consistent, structured view of investments.
- Color By: Apply color coding to investments based on selected attributes. For instance, select Status to highlight investments based on approval status. A color legend appears in the bottom right corner, showing the meaning of each color. By default, investments appear in blue if no value is selected for Swimlanes or Color By.
- Badges: Select up to three metrics or attributes to display as badges on the investment bars, allowing you to monitor key values directly within the timeline. The badges legend appears in the lower-right corner, displaying the selected metrics in the order they were added. You can edit these metrics for each investment in the timeline, and your selected badges will persist between sessions.
- Hide Empty Swimlanes: Enable this toggle to hide any swimlanes without investments, simplifying the view and focusing only on active swimlanes.
- Show Agreements: Toggle this option to display dotted lines representing predecessor-successor relationships between investments. An agreement icon appears on investment bars with dependencies, helping you visualize and track inter-investment relationships.
- Show Text Overflow: Toggle this option to manage how investment names are displayed. Enabling this will expand the text display, while disabling it will trim investment names to fit within the bar length. 4. Click EVENTS. The list of available investment events appears, allowing you to select specific events to display on the timeline. a. Investment Events Investment events include dates that are critical to your investments, such as Key Milestones or custom-defined events that are set by users. By default, the Key Milestones option is available, representing crucial dates in the project timeline. You can also create custom events specific to each investment through the Manage Investment Events link. For more information, see Manage Investment Events. In the EVENTS sub-tab, configure the following settings for Investment events:
- Show Today: Turning on the Show Today toggle allows you to see a marker for the current date on the
timeline, helping to contextualize investment progress relative to today's date.
- Key Milestones: Selecting the Key Milestones option displays visual indicators (such as diamonds) along the
bars for any significant project milestones. This helps users track critical points across investment timelines at a glance.
> [!IMPORTANT]
> Some key points to remember:
- If an event falls outside the Investment's start or finish date, the event will be positioned at either the start or finish of the bar, whichever is closest to the event date.
- When using custom dates, ensure that events are synced to the timeline to make them visible.
- If multiple events fall on the same date for an investment, only the most recently created event will be
displayed.
- Event positioning will adjust automatically if an investment is moved on the timeline. b. Manage Investment Events Use the Manage Investment Events option to define custom events associated with specific dates. For example, you might create a custom event such as Launch Date to mark when an investment is expected to be released. This feature allows flexibility in marking specific points that are essential to each investment's lifecycle. To manage Investment Events, see Manage Investment Events. 5. Click X Close to exit the View Options.

#### Manage Investment Events

The Manage Investment Events option allows you to create and manage specific events for investments within the timeline layout. You can customize the visual indicators, such as symbols and icons, that represent key milestones and other important dates on the investment bars.
Follow these steps:
1. Open the Staffing workspace and navigate to the Investments tab. 2. Click View Options and then select the Events sub-tab. 3. Click Manage Investment Events. 4. The Investment Events window appears, allowing you to create new investment events or edit existing ones. 5. In the Manage Investment Events window, perform the following actions as needed:
a. To change the icon for an existing event:
- Select the Image dropdown beside the event (e.g., Key Milestones or Last Sync Date).
- Choose an icon from the available options, such as a diamond or circle, to visually represent the event on the timeline. > [!NOTE]
> - You cannot rename, modify, or delete the default investment (that is, KeyMilestones) event names.
- To delete an existing event, hover on the required event and click X that appears far right of the
respective row. b. To add a new custom event:
- Click New Event.
- Enter a name for the event and select an image to represent it. 6. When done, click X Close to save your changes and exit the Manage Investment Events window.
> [!TIP]
> Custom investment events provide additional flexibility for tracking unique dates that are critical to specific investments. Use these events to highlight project phases, go-live dates, or other essential milestones in the Investments timeline view.

#### Other Actions Available on the Investments Timeline Layout

Some of the additional actions you can perform by using the Investments Timeline layout are:
- View more information about an investment by using the DETAILS panel You can right-click on a selected investment and select OPEN DETAILS from the menu or use the Details panel to view more information about each investment. The panel is available as a two-column layout, and you can resize it to

take up 75% of the screen. The Details layout allows you to include two fields per row. To learn more about using the DETAILS panel in the grid, see Common Components.
- Show or hide swimlanes on the Timeline You can choose to show or hide swimlanes if there are no investments associated with a swimlane. Click the Swimlanes picker and then select swimlanes to show or hide, saving the configuration to a view. This capability allows you to display only the relevant swimlanes.
> [!NOTE]
> Key points to remember:
- If a swimlane containing an investment with a predecessor or successor link (agreement) is hidden, the agreement line will also be hidden.
- Hiding all swimlanes will result in a blank timeline view.
- Analyze investments by using the Filter and Search options
You can use the Search and the Filter options to locate specific investments based on your criteria. To learn more about using the Filter and Search options, see Common Components.
- Personalize the grid and save your view Clarity allows you to save and modify multiple views that support your business objectives. Some of the key actions you can perform are:
- Save an existing configuration in the grid
- Update existing views using the Quick Save functionality
- Access views saved by other users
- Mark relevant views as favorites for easy access
- Select default views
Investment Color Legend
The color legend appears when you select a value in the COLOR BY field in the Investments Timeline layout options panel.
- To collapse the legend, click X Collapse.
- To expand it again, click LEGEND.
Create Staffing Projections Using Scenarios
Scenario planning in the Staffing Workspace allows stakeholders to create multiple projections of staffing plans under different conditions. For instance, customers may want to evaluate how changes in market demand, supply chain disruptions, or shifts in operational costs could impact overall profitability. Hence, they would like to perform a series of what-if analyses to simulate how different investments could be staffed and understand the implications of their decisions.
To learn more, see Create Staffing Projections Using Scenarios.

#### Export the Investments Timeline to PDF

You can export the Investments timeline view to a PDF file, which can then be included in presentations or documents for stakeholder communication. The Export capability is available in the Item Actions menu. The exported PDF includes the dependencies and events defined in the investment timeline. The exported file name follows the pattern "<investment name>_<saved view name>."
Follow these steps:
1. Open the Investments tab in the timeline layout. 2. Click Item Actions to export to PDF. 3. Select the size of the PDF output. The available options are:
- Fit to Content (default)
- Letter
- Legal
- Tabloid
- A4
- HD Display (1920 pixels)
- Laptop (1440 pixels)
- Tablet (1024 pixels) 4. Select the orientation of the PDF output.
- Landscape (default)
- Portrait 5. Click Download to save the PDF file on your local system or open it using the relevant PDF readers or browsers.
> [!IMPORTANT]
> Important points to remember:
- The exported PDF file will have default minimum dimensions of 1366 X 768 pixels (Width X Height).
- If the exported PDF dimensions are less than the default, the PDF will use the default dimensions of 1366 X 768 pixels.
- If the exported PDF dimensions are greater than the default, the PDF will match the dimensions of the generated file.
- If the Investments Timeline exceeds the PDF limitation, you may not experience issues when viewing it within a supported browser.
- Clarity's existing job (Purge CSV Downloads), initially created to clean up CSV export files, has been updated to also clean up PDF export files. This job is not available to end-users and runs every day at 12:30 midnight, cleaning up files older than 7 days.
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
> [!NOTE]
> To learn more about Widgets, see Widgets.
Configure the Target Widgets in the Staffing Workspace
Consider a scenario where you want to set a specific target for attributes such as Allocation. You can use the Target Widget to visualize and manage targets as either goals or constraints related to numerical and financial attributes associated with the Staff and Investment objects.
Follow these steps:
1. Navigate to the Staffing workspace and open the relevant tab.
2. Click **Show Widgets** and then click the **Widgets** menu.
3. Click **Manage Widgets** to open the Add Widget dialog box.
4. Select **Add** to display a pre-defined target from the Widget Library or click **New Widget** to open the New Widget window.
5. Select **Target** as widget type and select **Next** to open the Create Target dialog box.
6. Enter the following details to define the new target:
- Title: Enter the name of the target widget.
- Type: You can specify the following types of targets.
- Target: A constraint that you try to stay under and not go over. For example, Capital Cost. This is selected by default.
- Goal: A target that you can either achieve or exceed. Benefit is an example of a target that is a goal.
- Sum: Select the attribute that will be aggregated.
- Label: Enter a label name for the selected attribute in Sum. For example, In Plan. This is an optional field.
- Only Include items where: Select the filter criterion for the widget.
- **In Widget Library**: Add your target widget to the Widget library if you have appropriate permissions.
7. Click **Create** to create your target widget.
> [!NOTE]
> Some key points to remember are:
- You need the Widgets - Edit Targets in Staffing access right to use the Target widget in the Staffing Workspace.
- You can enter or edit the Targets within Scenario or Non-Scenario modes. You can see different targets when you move across different scenario modes.
- You can create Target widgets for attributes associated with the Investment and Staff objects.

### Analyze Active Investments by using the Grid Layout

The Investments tab now includes the Grid layout, which displays all the active investments you can access. You can use the grid to review common attributes across all investments or specific to individual investments. Consider an example where the grid includes multiple projects, ideas, custom investments, and teams.
- Attributes such as Budgeted Cost and Planned Benefit, which are common across all these investment types, are displayed under the Common Investment section.
- Attributes such as Objective and Sponsor are only associated with the custom investment and are displayed under the relevant investment.
The Investment grid layout also supports the Manage Scenarios functionality, which enables stakeholders to create, evaluate, and share multiple staffing projections under various conditions. This capability allows organizations to perform what-if analyses on different staffing strategies, helping them understand the impact of changes in market demand, operational costs, and resource availability on investment timelines and resource allocations.

#### Managing Records By Using the Grid Layout

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
> [!NOTE]
> To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Widgets
- Details Panel
- Saved Views
- Filters

#### Setup View Options

You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs). Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
5. In **Type**, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
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

> [!IMPORTANT]
> You have to select the per-period metric attributes from the Column Panel.
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.
> [!IMPORTANT]
> When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.
> [!IMPORTANT]
> When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics.

9. **Show Total Row**: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.

The following table shows the different types of aggregation supported for various types of attributes:

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TS |
|---|---|---|---|---|---|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | Yes | Yes | Yes | Yes |
| Min/Max | Yes | Yes | Yes | | |
| None | Yes | Yes | Yes | Yes | Yes |


10. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.

11. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

12. To configure your own display attributes, choices, and the color of each value, click Manage Picklists, New Picklist.

a. Enter a name for your picklist in Picklist Name. Each picklist you define can be applied to the current project only.

b. To add value to your picklist, click Add Choice. Edit the name and color for each choice.

c. Click Done.

13. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

14. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget to quickly cycle through the data for various periods. Your Start Period and End Period settings will update the widget and as you cycle through periods in your widget, the Start Period and End Period will also be updated.


> [!NOTE]
> Some of the key points to remember are:
- You can secure and relabel the TSV attributes using Field Level Security. While TSV attributes can be relabeled, they cannot be secured.
- You can use the TSV totals in widgets.
- You can include the custom TSV data in the page.
- You can edit the custom TSV data in the page.
- You cannot add TSV totals to the Details Panel.
- Forecast data will only be displayed in TSV if a detailed cost plan has been created for the investment.
- Financial data is read-only in the page.
- If you are using the board layout, you can configure columns, swimlanes, sort, and color.
- If you are using the timeline layout, you have the Color By option.
Create Staffing Projections Using Scenarios
Scenario planning in the Staffing Workspace allows stakeholders to create multiple projections of staffing plans under different conditions. For instance, customers may want to evaluate how changes in market demand, supply chain disruptions, or shifts in operational costs could impact overall profitability. Hence, they would like to perform a series of what-if analyses to simulate how different investments could be staffed and understand the implications of their decisions.
To learn more, see Create Staffing Projections Using Scenarios.
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
- Bar Widget: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom
