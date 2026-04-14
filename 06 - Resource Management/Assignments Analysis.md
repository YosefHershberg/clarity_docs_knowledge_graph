---
title: Analyze Staffing by Assignments
tags:
  - howto
aliases:
  - Assignments
canonical: true
audience: rm, pm
domain: resources
---
# Analyze Staffing by Assignments

> [!note]
> To learn more about Widgets, see Widgets.

## Analyze Staffing by Using Assignments

Many organizations manage staffing through Task Assignment Estimates rather than using Allocations.

The Staffing workspace includes tabs where the Investment Manager or Resource Manager can manage their staffing needs by editing Task Assignment ETC values.
Users can also set personal preferences for Over/Under Thresholds differently for Assignments by using the **Over Assignment Threshold** and **Under Assignment Threshold** configuration options.

This section contains the following topics:

- [[#Introducing the Assignments Tabs]]
- [[#Prerequisites for Using the Staffing Workspace]]
- [[#Exploring a Typical Use Case]]
- [[#Setup View Options]]
- [[#Configure Over and Under Threshold Configuration]]
- [[#Leverage Common Grid Capabilities]]
- [[#Working with the Assignments by Investment Tab]]
- [[#Working with the Assignments by Resource Tab]]
- [[#Working with the Resource Availability View]]
- [[#Working with the Resources by Role View]]
- [[#Editing Staffing Details]]
- [[#Viewing or Hide Empty Rows]]
- [[#Reallocate Resources or Roles]]
- [[#Adding Staff to Investments]]
- [[#Replacing Roles/Resources in Investments]]
- [[#Create Staffing Projections Using Scenarios]]
- [[#Conversations About Staffing]]
- [[#Working with Widgets]]
- [[#Configure the Target Widgets in the Staffing Workspace]]

## Introducing the Assignments Tabs

You can work with assignments by using the following tabs:

- **Assignment by Investment:** This tab allows you to see investments at the parent level with their requested resource and role assignments at the child level. Each investment is displayed as a Gantt bar, and you can see the total assignment of resources for each slice of the selected period.
- **Assignment by Resources:** This tab lists resources at the parent level with their investment assignments at the child level. Each resource is displayed as a Gantt bar, and you can see the total assignments of resources for each slice of the selected period.

Both tabs include the Resource Histogram, which includes the following views:

- **Resource Availability:** Displays the assignment and availability of each resource for the selected time period.
- **Resources by Role:** Lists roles at the parent level with the assignment and availability of associated resources at the child level.

> [!note]
> Some key points to remember:
> - The Staffing timeline includes pagination controls. When you expand an Investment or Resource grouping row, Clarity displays pagination controls when there are more than 100 child rows.
>   You can review the total number of rows under the Name column. Pagination improves user experience by breaking down large datasets into manageable chunks and helps load data faster.
> - The **% Availability** option is now available as a unit of measure. This allows the Resource Manager to gauge how much demand can be booked based on each resource's specific calendar of available capacity.
>   Click the Avatar icon, select **General Settings**, and then select the **%Availability** setting.

## Prerequisites for Using the Staffing Workspace

Clarity recommends the following configuration for the Staffing workspace:

- **Clear the Display Availability and Remaining Availability Amounts for Roles** system option in Classic PPM.
  This enables Clarity to ignore non-zero values in the Availability and Remaining Availability fields for roles within the Roles workspace and Staffing workspaces.
  This field is selected by default when you upgrade to preserve how Clarity behaved before the upgrade. Broadcom recommends that you clear this field after upgrading.

- **Enable the Staffing: Additional Group By and Histogram Options in Resource Summary Mode** feature toggle.
  The Resource Summary Mode displays staffing data with a histogram based on configured thresholds and is crucial for visualizing workforce distribution effectively.
  You can configure the histogram using the hamburger menu options:
  - **None** — No numbers are displayed
  - **% Utilization** — Allocation divided by Availability
  - **Allocation/Availability** — Shows the allocation and availability in a single cell
  - **Availability - Allocation** — Shows Remaining Availability

## Exploring a Typical Use Case

Since the Assignments Tabs provide visual tools to manage resource and investment assignments, you can use them in multiple scenarios.
The following example focuses on a typical scenario where resource and project managers struggle with over-assignment of certain resources and under-assignment of others.

Key actions they can perform:

1. **Setup the Assignment Tabs:** Select the relevant Unit of Measure (FTE, Hours, Days) from the General tab of the Settings pane. Use the Column panel to add relevant fields to the Timeline and Resource Histogram sections. Set up the grid using the relevant View Options.
2. **Use the Assignment by Investment Tab:** Expand relevant investments to identify various over-assigned resources.
3. **Use the Resource Availability Tab:** View the total assignment of a user for the selected period.
4. **Use the Assignment by Resource View:** Identify all investments associated with a resource and their respective assignments.
5. **Use the Resource by Role View:** View other resources mapped to a relevant role if your first-choice resource is not available. Identify the appropriate resource and drag and drop them to the relevant investment in the Investment Timeline.

> [!note]
> Clarity now loads data in smaller increments in the Staffing workspace to help users access information quickly. The new spinner provides visual cues to indicate when data is being loaded. The number counter available in previous releases is no longer available.

## Setup View Options

You can adjust your view of the page to show calendar per-period metrics (also known as time-scaled values or TSVs).

Follow these steps:

1. Log into Clarity.
2. Navigate to the Staffing page and click the relevant layout.
3. In the layout, click **View Options**.
4. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
5. In **Type**, select Period or Duration.
6. Define the **Start Period** and **End Period**. The application adjusts the time periods based on the value you selected for periods.
7. Define if you want to see **Sum of Periods** or **Grand Totals** in the Totals column:
   - **Sum of Period** — Displays the Total (e.g., Actual Cost) for the number of periods displayed in the layout. Example: if an Investment has a 12-month duration and the page is configured to display 6 months, the Totals column sums the 6 months shown.
   - **Grand Total** — Displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed. Example: if an Investment has a 12-month duration and the layout shows 6 months, the Totals column sums all 12 months.
8. Select the **Show Indicator on Non-Default Values** toggle to display visual indicators when the default values of the following attributes are updated:
   - Default allocation percentage
   - Grand Totals or Totals column
   - Allocation Start and Finish date columns
   - Individual allocation per-period metrics

   This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.
9. In **Assignments Display**, select ETC, Actuals, or Usage.
10. Click **X** to close the View Options panel. The page applies your settings and shows details spread across the time periods.

## Configure Over and Under Threshold Configuration

You can use General Settings to configure the under and over-assignment thresholds for the Assignments by Investment and Assignments by Resources tabs.

- **Under Assignment Threshold** — Defines the percentage below total capacity for the period. For example, if you enter 40, resources are considered under-assigned when at least 40 percent below their full assigned capacity. Full assignment capacity is assumed as 100 percent.
- **Over Assignment Threshold** — Defines a percentage above total capacity. For example, if you enter 20, resources are considered over-assigned when they are at least 20 percent above their full assigned capacity.

You can enter values ranging from 1 to 100 in either threshold box. Negative values are not allowed.

In the **Assignment by Resource** tab, the total assignment amounts roll up to the grouping row, and the threshold setting determines the colors. Similarly, the Resource Histogram determines colors by the threshold setting.

In the **Assignment by Investment** tab, you can expand the investment to see the colors associated with various allocated resources.

Follow these steps:

1. Click the drop-down menu next to your avatar and username at the top right.
2. Click **Settings** and then click **General**.
3. Populate the **Over Assignment Threshold** and **Under Assignment Threshold** fields.
4. Click **Close**.

## Leverage Common Grid Capabilities

There are standard capabilities across the Timeline and Resource Histogram sections you can leverage to meet your requirements.

### Add Attributes Using the Column Panel

The Timeline and Resource Histogram have independent column panels. The Timeline is a cross-object grid, so the column panel includes attributes common across all investments (under **Common Investment**) as well as attributes specific to individual investment types.
The column panel for the Resource Histogram includes all attributes associated with the Resource Object.

To learn more, see Getting Started with Clarity Grids.

### View More Information Using the Details Panel

The Details panel allows you to view more information about a particular record. The panel is available in a two-column layout and can be resized to take up 75% of the screen.
You can horizontally drag any field to occupy one or both columns. Clarity appends the attribute label's investment type when you add attributes associated with specific investments in the Details panel.

To learn more, see Working with the Details Panel.

### Analyze Information Using the Filter and Search Options

Use the Search and Filter options to identify records based on your requirements. To learn more, see Working with Filters.

### Personalize the Grid and Save Your View

Clarity allows you to save and modify multiple views to achieve your business goals. Key actions include:

- Save an existing configuration in the grid
- Update existing views using the Quick Save functionality
- Access views saved by other users if shared
- Mark relevant views as favorites for easy access
- Select default views

### Leverage the Starred Attribute for Resources and Investments

You can mark investments and resources as favorites by associating a star with them in the Staffing workspace. This allows you to flag and find instances that require extra monitoring or attention.

Use the **Starred** attribute in the Column panel to mark a resource or investment as a favorite. Changes are reflected in the Resource and respective Investments workspaces.

## Working with the Assignments by Investment Tab

This tab allows you to see investments at the parent level with their requested resource and role assignments at the child level. Each investment is displayed as a Gantt bar, and you can see the total assignments of resources for each slice of the selected period.

Expand an investment to see the following information:

- The grid displays all resources allocated to the investment. Use the column panel to view additional information.
- The grey bar on the timeline indicates the duration for which the resource is allocated to the investment.
- The number represents the assignments of each resource for each slice of the selected period.
- The red dot indicates that the resource is over-assigned. Review the Resource Availability view to learn more about the resource's availability.
- When you select an individual resource, the resource is automatically highlighted in the Resource Availability view.

> [!note]
> Use the **Investments** drop-down list to select whether the timeline shows all investments in Clarity or specific investment types such as projects, custom investments, ideas, and teams.
>
> If you choose **All Staffed Investments**, investments with no assigned resources will not appear. Select an individual investment type to view such investments.
>
> If you have access to an investment, you can view all resources assigned to it.

## Working with the Assignments by Resource Tab

This tab lists resources at the parent level with their investment assignments at the child level. Each resource is displayed as a Gantt bar, and you can see the total assignment of resources for each slice of the selected period.

Expand a resource to see the following information:

- The grid displays all investments to which the resource is allocated. The column panel allows you to view additional information.
- The grey bar on the timeline indicates the duration for which the resource is allocated to the investment.
- The number represents the assignment of the resource for each slice of the selected period.
- The red dot indicates that the resource is over-assigned. Review the Resource Availability view to learn more about the resource's availability.

## Working with the Resource Availability View

This view displays the allocation and availability of each resource for the selected time period. Key information includes:

- The histogram displays the total availability and total assignment for each resource.
- The height and color of each cell visually display if a resource is over or under-assigned:
  - **Red cell with increased height** — over-assigned
  - **Green cell with regular height** — under-assigned or appropriately assigned
- If you have the relevant access rights, you can drag and drop a resource to the relevant investment in the Investment Timeline.

## Working with the Resources by Role View

This view lists roles at the parent level with the assignment and availability of associated resources at the child level. The histogram displays the total assignment for each role for each slice of the selected period.

Expand a role to see:

- The histogram displays the total availability and total assignment for each resource.
- The height and color of each cell visually display assignment status:
  - **Red cell with increased height** — over-assignment
  - **Green cell with regular height** — under allocation or appropriate assignment
- If you have the relevant access rights, you can drag and drop a resource to the relevant investment in the Investment Timeline.

> [!important]
> Some key points to remember:
> - The Investment Timeline now displays all investments (staffed and unstaffed). Use the **Type (Common Investment)** filter to view only projects, ideas, custom investments, and teams.
> - The control button allows you to maximize the Investment Timeline or the Resource Histogram. You can also click the control button to manually adjust the size of both panels. After maximizing either panel, click **Restore** to return to the original configuration.
> - You can staff an investment by dragging resources or roles from the Resource Histogram to the Investment Timeline.
> - The **Staffing - Navigate** access right is required to access the Staffing workspace.
> - If the Allocation Timeline has more than 5,000 records, the user will receive an error message. Use the configurable filtering capabilities to reduce the number of allocation records returned to the view.

## Editing Staffing Details

The Timeline has been enhanced to support inline edits. You edit assignments in the timeline columns and specify default assignments and start and finish dates.
Editing assignments and visualizing the impact of your changes helps users quickly review assignments from multiple perspectives and drive decision-making.

You can edit attributes associated with the Staffing object. Attributes associated with other objects are read-only.

### Bulk Edit TSV Assignments

The Bulk Edit modal on the Staffing page allows you to see the real-time impact of assignment changes for resources across investments before you save the changes.

You can open the Bulk Edit modal in multiple ways:

- On the left pane of the Timeline or the Resource Histogram, select a specific row and use the right-click action to select **Edit Assignments**.
- Double-click a specific row on the right pane of the Timeline or the Resource Histogram.

> [!note]
> The periods in the Bulk Edit window are determined by the periods set in View Options.
>
> After making changes, you can immediately see their impact by observing the Availability and Remaining fields. You can try multiple permutations before saving. Use the copy-paste functionality to update multiple assignments quickly.

Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resources** tab.
3. Click **View Options** and ensure you select the relevant Period, Start Period, and End Period.
4. Select **Actuals**, **ETC**, or **Usage** to decide what you want to edit.
5. Open the Bulk Edit modal using one of the following methods:
   - On the left pane of the Investment Timeline or Resource Histogram, select a specific row and right-click to select **Edit Assignments**.
   - On the right pane of the Investment Timeline or Resource Histogram, double-click a specific row.
   - If you are on the **Allocations by Resource** view, double-click a resource/role on the right pane.
   - If you are on the **Assignments by Investment** view, expand an investment and double-click a specific resource.
6. On the Bulk Edit window, edit the relevant cells to update resource and investment assignments. View the **Availability** and **Remaining Availability** fields and save when your assignment details are finalized.

### Edit Individual Assignments

You can edit individual assignment details directly in the timeline columns to specify default assignments and start and finish dates.

## Viewing or Hide Empty Rows

Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resources** tab.
3. Select **Actuals**, **ETC**, or **Usage** to decide what you want to edit.
4. Click **Columns** to add the relevant columns to the Investment Timeline grid.
5. Update relevant fields based on your requirements. The visual cues on the timeline help you understand how your changes are impacting investments. To learn more about visual cues, see Use the Allocations by Investment tab.

> [!note]
> You can only edit attributes associated with the Staffing object; attributes associated with other objects are read-only.

## Reallocate Resources or Roles

The Resource Reallocation and Resource Replacement capabilities support partial reallocation. Partial allocation ensures that Clarity only updates allocations within the specified date range and allocation percentage. It provides the following advantages:

- **Prevent Resource Overallocation:** Avoid booking team members beyond their capacity when they are allocated across multiple investments.
- **Enable Work on Multiple Investments:** Allow resources to contribute to multiple investments simultaneously at specific percentages, rather than dedicating them full-time to a single project.
- **Create More Accurate Staffing Plans:** Enter the actual time a resource is expected to work on an investment, versus blocking them for the entire investment duration.

You can update the following attributes when reallocating:

- Start
- Finish
- Default Allocation

Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** tab and expand the relevant investment.
3. Right-click a resource/role and select **Reallocate**.
4. In the **Reallocate "Investment Name"** window:
   a. Toggle **Use Investment Start** and **Use Investment Finish** to reallocate for the entire investment duration or specify new Start and Finish dates.
   b. Set the **Default Allocation** percentage.
   c. Select **Partial** or **Total** override type. Partial allocation only updates allocations within the specified date range and allocation percentage.
   d. Click **Reallocate** to complete the process.

## Adding Staff to Investments

You can add roles, resources, and teams to investments using either of two options:

1. **Using the Quick Select Widget**
2. **Using the Drag and Drop Capability**

### Using the Quick Select Widget

The Quick Select widget in the Timeline Layout of the Staffing Workspace makes it easy for users to add resources quickly. You can perform the following actions:

1. Right-click an investment in the **Assignments by Investment** tab and add relevant staff.
2. Right-click a resource in the **Assignments by Resource** tab and add associated investments.
3. Specify a default allocation that persists when using the Quick Select Widget.

The following lookups enable the quick select action:

- `LOOKUP_INVESTMENT_QUICK_ADD`
- `LOOKUP_RESOURCE_QUICK_ADD`
- `LOOKUP_ROLE_QUICK_ADD`
- `LOOKUP_TEAM_QUICK_ADD`

### Using the Drag and Drop Capability

You can allocate resources and roles to investments by dragging them from the Resource Histogram to the Investment Timeline. When allocating resources or roles, you can update:

- Start
- Finish
- Default Allocation

Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resources** tab.
3. In the Resource Histogram section, select the **Resource by Role** or **Resource Availability** tab.
4. Identify the relevant resource and drag and drop it to the associated investment in the Investment Timeline.
5. In the **Add Staff "Investment Name"** window:
   a. Toggle **Use Investment Start** and **Use Investment Finish** to allocate for the entire investment duration or specify new Start and Finish dates.
   b. Set the **Default Allocation** percentage.
   c. Click **Add** to complete the process.

## Replacing Roles/Resources in Investments (Partial or Complete)

You can replace resources and roles associated with investments by dragging them from the Resource Histogram to the relevant staff in the Investment Timeline, or by right-clicking a resource in the Timeline and clicking **Replace**.

Follow these steps:

1. Log into Clarity and click **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resources** tab.
3. In the Resource Histogram section, select the **Resource by Role** or **Resource Availability** view.
4. Identify the relevant resource and drag and drop it to the resource you want to replace, or right-click a resource in the Timeline and click **Replace**.
5. In the **Replace "Resource Name"** window:
   a. Toggle **Use Investment Start** and **Use Investment Finish** to replace for the entire investment duration or specify new Start and Finish dates.
   b. Select **Partial** or **Total** override type. Partial allocation only updates allocations within the specified date range.
   c. Click **Replace** to complete the process.

## Create Staffing Projections Using Scenarios

Scenario planning in the Staffing Workspace allows stakeholders to create multiple projections of staffing plans under different conditions.
For instance, customers may want to evaluate how changes in market demand, supply chain disruptions, or shifts in operational costs could impact overall profitability, performing what-if analyses to simulate how different investments could be staffed.

To learn more, see Create Staffing Projections Using Scenarios.

## Conversations About Staffing

Follow these steps:

1. In the Main Menu, select **Staffing**.
2. Select the **Assignments by Investments** or **Assignments by Resource** tab.
3. Expand an investment or resource.
4. Click an investment or resource. The Details panel appears.
5. Click the **Conversations** tab.
6. Start a conversation or reply.

### Conversation Notifications

Notifications alert you about conversation activity when a user mentions you.

- To view your notifications, click the notifications bell icon at the top of any page in Clarity.
- The number of new notifications appears on the bell and disappears when you click it.
- The notifications panel displays the avatar of the sender and the first line of their message.
- Scroll up or down to view all notifications. Click one to open it — supporting details about the context of the conversation appear.
- You can reply, edit, or delete the message.
- Notifications about staffing conversations include a **Go to Staffing** button.
- A user can be mentioned in a staffing conversation if they have the **Staffing - Navigate** access right. However, the user cannot see the resource if they do not have the required rights for that resource.
- To delete a specific notification, hover over it and click **Delete**. To delete all notifications, click **CLEAR ALL**. Deleted notifications are removed only for the specific user.
- If a conversation is deleted, the notification is also deleted.

> [!important]
> More Information: Clarity: Start a Conversation or Post a Reply

## Working with Widgets

You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity.

Available widget types:

- **Number Tile** — Displays a specific number based on the widget definition and filter criterion.
- **Pie** — Displays a pie chart based on the widget definition and filter criterion. Select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute.
  Shows the top or bottom three results in distinct areas; remaining results are grouped in the **Other** category.
- **Bar** — Displays a bar graph based on the widget definition and filter criterion. Select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute.
  Shows the top or bottom three results in distinct areas; remaining results are grouped in the **Other** category.
- **Progress Ring** — Displays a ring with a number based on the widget definition and filter criterion.
- **Target (Roadmaps and Staffing Workspace)** — Displays targets either as goals or constraints on number and money attributes of the relevant objects.

Each widget type supports distinct operations such as Count, Sum, and Average. You can also specify the widget color and select the relevant display format (number or percentage).

Key actions you can perform with widgets:

- Use the **Show Widgets** button to display the widgets toolbar.
- Use the **Manage Widgets** button to open the Add Widgets dialog box to add existing widgets from the My Widgets section and the Widget Library.
- Create a **New Widget** from the Add Widgets dialog box.
- Enhance data analysis using the **Interactive Filtering** feature on widgets, enabling deeper insights through drill-down capabilities.

> [!note]
> To learn more about Widgets, see Widgets.

## Configure the Target Widgets in the Staffing Workspace

You can use the Target Widget to visualize and manage targets as either goals or constraints related to numerical and financial attributes associated with the Staff and Investment objects.

Follow these steps:

1. Navigate to the Staffing workspace and open the relevant tab.
2. Click **Show Widgets** and then click the **Widgets** menu.
3. Click **Manage Widgets** to open the Add Widget dialog box.
4. Select **Add** to display a pre-defined target from the Widget Library, or click **New Widget** to create a new one.
5. Select **Target** as the widget type and select **Next** to open the Create Target dialog box.
6. Enter the following details to define the new target:
   - **Title:** Enter the name of the target widget.
   - **Type:** Specify the type of target:
     - **Target** — A constraint that you try to stay under and not exceed (e.g., Capital Cost). This is selected by default.
     - **Goal** — A target that you can achieve or exceed (e.g., Benefit).
   - **Sum:** Select the attribute that will be aggregated.
   - **Label:** Enter a label name for the selected attribute in Sum (e.g., In Plan). This is optional.
   - **Only Include items where:** Select the filter criterion for the widget.
   - **In Widget Library:** Add your target widget to the Widget Library if you have appropriate permissions.
7. Click **Create** to create your target widget.

## Hard Allocations in the Assignments Context

While the Assignments tabs focus on Task Assignment ETCs, hard allocations represent committed bookings that co-exist alongside soft allocations in the Staffing workspace.

### What Are Hard Allocations?

The typical booking process in agile planning:
- **Project Managers** enter soft-booked allocations for all required resources (tentative/planned)
- **Resource Managers** collaborate with PMs to gain alignment and convert soft to hard allocations (committed)

### Working with Hard Allocations

1. In **View Options**, set **Allocation Display** to include **Hard Allocation** or **Both** (Allocation + Hard Allocation)
2. Use the **Columns** panel to add the Hard Allocation attribute (Staffing object and Totals object) to the grid
3. Edit Hard Allocations directly if you have the relevant permissions

**Bulk editing hard allocations:**
- Double-click a resource on the Allocations by Resource view — the Bulk Edit modal shows both Hard and Soft allocations
- If filtering by Booking Status for Hard Allocations only, the Bulk Edit modal displays only investments with hard allocations for that resource
- This helps resource managers quickly identify over-allocated periods

**Filtering for hard allocations:**
- Use the Hard Allocation attribute as a filter to identify resources meeting a specific criterion
- In the Allocations by Resource layout, unallocated resources always appear alongside filtered results — enabling quick allocation of available resources

> [!note]
> Hard Allocation and Soft Allocation values can both be viewed in histograms when Resource Summary Mode is enabled. Colors are determined by the Over/Under Allocation Threshold settings in General Settings.

## Analyze Investments in the Staffing Workspace

The **Investments tab** within the Staffing workspace provides a strategic, consolidated view of all active investments. It serves project managers, resource planners, and strategic decision-makers who need to visualize and manage all investments in one place.

The Investments tab supports two layouts:

| Layout | Purpose |
|--------|---------|
| **Timeline Layout** | Gantt-style view for strategic planning, scenario simulations, and milestone tracking |
| **Grid Layout** | Cross-object grid for detailed analysis of common and investment-specific attributes |

> [!note]
> To enable the Investments tab, an administrator must configure it within the **Staffing Blueprint** settings.

### Timeline Layout for Investments

The Investments Timeline layout provides a visual, Gantt-style representation of all active investments, including projects, ideas, custom investments, and teams.

**Key capabilities:**

- **Visual bars** — investments with both start and finish dates appear as bars; start-only as circles; finish-only as diamonds
- **Swimlanes** — group investments by attributes (e.g., Work Status, Manager) for structured analysis
- **Color By** — apply color coding based on an attribute (e.g., Approval Status); a legend appears in the bottom-right corner
- **Badges** — display up to 3 key metrics (e.g., Budgeted Cost, Planned Benefit) directly on investment bars
- **Scenario-Based Planning** — create and switch between scenarios; model "what-if" changes without impacting live data
- **Custom Events** — overlay key milestones and custom events (go-live dates, phase gates) on the timeline
- **PDF Export** — export the timeline to PDF for stakeholder presentations

**Steps to create and manage investments on the timeline:**

1. Open the Staffing workspace and navigate to the **Investments** tab
2. Click **Timeline** to open the timeline layout
3. To add an investment: click and drag to draw a bar across the timeline, or click a period to place the investment there
4. Complete the fields in the **Details panel** — mandatory attributes appear automatically
5. Click **Done** to save

**Arranging items in the timeline:**

- **Drag horizontally** to adjust start/end dates (Scenario Mode: horizontal only, no swimlane changes)
- **Drag vertically** to reorder within swimlanes or move between lanes (Non-Scenario Mode)
- Hold **Shift** while dragging vertically to lock dates (move to a different swimlane without changing dates)
- **Load More** button appears at the bottom when many records are present — loads items incrementally

**Configuring Timeline View Options:**

1. Open the **Investments** tab > click **View Options**
2. In the **TIMELINE** sub-tab, configure:
   - **Periods** — Months, Quarters, or Years
   - **Start/End Period** — define the visible date range
   - **Totals** — Sum of Periods or Grand Totals
   - **Swimlanes** — group by attribute (e.g., Work Status); supports static and dynamic lookups
   - **Swimlane Groups** — further group swimlanes; avoid selecting the same attribute as Swimlanes
   - **Sort** — alphabetical, start date, or other attributes
   - **Color By** — static lookups only; applies color per attribute value
   - **Badges** — up to 3 metrics displayed on bars; persists between sessions
   - **Hide Empty Swimlanes** — toggle to hide swimlanes with no investments
   - **Show Agreements** — toggle to display dotted lines for predecessor-successor investment relationships
   - **Show Text Overflow** — toggle to expand or trim investment name display
3. In the **EVENTS** sub-tab:
   - Enable **Show Today** to display a current-date marker
   - Enable **Key Milestones** to show milestone diamonds on investment bars
   - Use **Manage Investment Events** to create custom events (go-live, phase gates)

> [!important]
> - If a swimlane containing an investment with an agreement is hidden, the agreement line is also hidden
> - If multiple events fall on the same date, only the most recently created event displays
> - Event positioning adjusts automatically when an investment is moved on the timeline

**Exporting the Timeline to PDF:**

1. Open the Investments tab in Timeline layout
2. Click **Item Actions** > export to PDF
3. Select paper size (Fit to Content, Letter, Legal, Tabloid, A4, HD Display, Laptop, Tablet)
4. Select orientation (Landscape/Portrait)
5. Click **Download**

> [!note]
> The exported PDF includes dependencies and events. File name pattern: `<investment name>_<saved view name>`. Minimum dimensions: 1366 x 768 pixels.

### Grid Layout for Investments

The Grid layout in the Investments tab displays all active investments accessible to you using the cross-object grid.

**What you can do:**
- Review **common attributes** across all investment types (under Common Investment)
- Review **investment-specific attributes** for projects, ideas, custom investments, and teams
- Group, filter, search, and save views using standard grid capabilities

### Agreements in the Investments Tab

If an administrator has enabled the **Agreements module** in the relevant investment blueprint and selected **Show in Details flyout**, you can create and manage business agreements from the Investments tab.

**From the Timeline layout:**
- Enable **Show Agreements** toggle in View Options to display agreement lines (dotted) between investments
- Right-click an investment or use the Details panel flyout to access Agreements

**From the Grid layout:**
- Use the **Details panel** to create and manage agreements from the Grid layout

> [!note]
> Agreements represent business relationships (predecessor-successor dependencies) between investments and are visualized as dotted lines connecting investment bars in the timeline.

## Related
- [[Staffing Grid]] — Cross-object staffing grid for allocations
- [[Allocations Analysis]] — Allocations timeline (Investment and Resource tabs)
- [[Staffing Scenarios]] — What-if scenario planning and publishing
- [[_MOC Resources]]

%%Source: p1465-1478; Analyze Investments in the Staffing Workspace%%
