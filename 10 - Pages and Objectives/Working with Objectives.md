---
title: Working with Objectives
tags:
  - concept
  - howto
aliases:
  - OKRs
  - Key Results
  - Objectives and Key Results
  - OKR workspace
canonical: true
audience: pm, admin
domain: reporting
---

# Working with Objectives

The **Objectives** workspace in Broadcom Clarity provides out-of-the-box OKR (Objectives and Key Results) capabilities, enabling organizations to set, track, and measure progress against strategic goals. It serves as an organizational system of record, bridging the gap between high-level strategic objectives and daily operational activities.

The workspace uses the proven OKR methodology — a goal-setting framework to help organizations focus on the most important things, create strategic alignment, track and measure progress, and stretch individuals and teams to inspire innovation.

> [!info]
> The Clarity to Rally integration supports syncing out-of-the-box Objectives, Key Results, Interim Actual Values, and Target Values between Clarity and Rally.

---

## Compare Objectives Workspace to Custom Objectives

The out-of-the-box OKR objects use a **singular noun** naming convention:
- **Objective** — master object
- **Key Result** — sub-object
- **Actual Value** — sub-sub-object
- **Target Value** — sub-sub-object

OKR objects implemented via the Custom Object-based OKR cookbook approach use a **plural noun** convention (e.g., "Objectives" with an "s"). You may find both in the following areas:

- **Clarity > Administration > Attributes** — Object filter
- **Clarity > Administration > Audit** — Object filter (if audit enabled)
- **Clarity > Administration > Blueprints** — Type filter
- **Clarity > Administration > Integrations** — Object Mapping > Clarity Object
- **Classic > Administration > Studio > Objects**

> [!warning]
> If OKRs were implemented using Custom Master Objects (CMO) before Clarity 16.1.2, the CMO-based Object IDs may conflict with the out-of-the-box Objective and Key Result Object IDs, preventing new Objectives or Key Results from being created in the OOTB workspace.
> **Workaround:** XOG out the custom Objects, rename Object IDs to avoid duplicates, XOG out OKR instances and re-associate them with the new Object IDs, then XOG in the updated objects and instances.

---

## Access Rights

Ensure the following access rights are enabled to access the Objectives workspace:

| Access Right | Description |
|---|---|
| **Objective - Navigate** | Required to access the Objectives workspace |
| **Objective - Create** | Required to create new objectives |
| **Objective - Edit** | Required to modify existing objectives |
| **Objective - View** | Required to view objectives |
| **Objective - Copy** | Required to copy objectives |
| **Objective - Delete** | Required to delete objectives |
| **Audit Trail - View - All** | Required to view the Audit module |
| **Administration - Audit - Navigate** | Required to access the Administration > Audit tile |

---

## View OKRs

When you access the Objectives workspace, you see the Objective listing with default attributes for both Objectives and Key Results. A single highlighted objective shows its own listing of Key Results. Selecting the **Details** flyout opens the **Key Results** tab in horizontal positioning, configured through the blueprint.

The **Objective** is an out-of-the-box Master Object with a **Progress** field — a calculated (Number) field showing total Key Results Progress divided by the number of Key Results. **Key Result** is a Sub-Object with its own **Progress** field comparing Current and Target values. The **Last Updated Date** field is available for both and helps monitor engagement.

**Follow these steps:**

1. Log in to Clarity and click **Objectives** from the left main menu. The default attribute list for Objectives and Key Results is displayed in the grid layout.
2. Click an objective from the list to drill into details, or select an object row and click **Details** to examine Key Results in the fly-out.
3. Consider the following out-of-the-box fields as best practice:
   - **Key Result Owner** — Document individual key result ownership.
   - **Key Result Unit of Measure** — Identify the type of information that Start, Current, and Target values represent.
   - **Key Result Last Updated Date** — Monitor your organization's engagement in the OKR practice.
4. Expand the details fly-out and select a key result entry to see its captured interim Actual and Target values.

### Actual Value

Actual Value is an out-of-the-box Key Result Sub-Object. Name and ID attributes are configured with auto-numbering enabled by default. When Clarity Actual Values are in use, the most recent Actual Value automatically updates the Key Result **Current Value** upon page refresh.

### Target Value

Target Value is an out-of-the-box Key Result Sub-Object. Interim Target Values do **not** update the Key Result Target value. Date and Value pairs document interim information pertaining to the desired Key Result Target Value. Similar to Actual Value, Name and ID attributes are configured with auto-numbering by default.

> [!info]
> In prior releases, Rally's Last Actual Value updated Clarity's Current Value. As of Clarity 16.1.2, Clarity's latest Actual Value updates Clarity's Current Value. Users can also manually update Clarity's Current Value even when Actual Value is in use.

---

## Managing Records Using the Board Layout

The Board layout displays items as cards with drag-and-drop precision in columnar swim lanes.

Key capabilities:
- The board layout does **not** provide the option to create new cards.
- Cards can display two title fields per card. If you configure the investment name, it hyperlinks to the relevant investment.
- Configure a maximum of **six fields** across two columns per card.
- Configure a maximum of **six metrics** per card, displayed up to three columns across in abbreviated format.
- Card colors are based on the value selected in the **Color** field in View Options; selections are saved with the view.
- Card titles default to the **Name** field. Double-click a card to edit its name.
- Use the **Search** bar to filter by name or ID.
- Use **Filters** for advanced filtering with complex filter conditions.
- Use the **Details Panel** (two-column layout) to edit fields.
- Save and modify multiple views.

> [!info]
> For full details, see [[01 - Getting Started/Common Components/Board Layout]], [[01 - Getting Started/Common Components/Widgets]], [[01 - Getting Started/Common Components/Details Panel]], [[01 - Getting Started/Common Components/Saved Views]], and [[01 - Getting Started/Common Components/Filters]].

### Setup View Options for the Board Layout

1. Navigate to the Objectives workspace.
2. Click the **Board** layout.
3. Click **View Options**.
4. **Columns** — Specify attributes whose values display as columns horizontally.
5. **Swimlanes** — Specify attributes whose values display as collapsible swimlanes vertically.
6. **Sort** — Select an attribute to sort cards within a column.
7. **Color** — Select a lookup attribute; if display mapping colors are configured, the color appears as a vertical bar on the left side of the card.
8. **Show Labels** — Show or hide labels.
9. **Configure Card** — Configure which fields display on each card.

---

## Managing Records Using the Grid Layout

The Clarity Grid is a dynamic grid supporting the following actions:

- Edit data using the right-click option; pin, resize, reorder, and reset columns.
- Apply **Conditional Formatting** to color-code cells or rows based on rules.
- Use the **Column Panel** to show or hide columns.
- Mark instances as favorites using the **star** icon.
- Use the **+** or **-** option to shift date field values.
- Use **Drag Functionality** to populate data.
- **Group By** — Drag up to three column headers to group data.
- Use the out-of-the-box charting experience embedded within Clarity.
- **Bulk Delete** — Delete multiple records simultaneously.
- **Export to CSV** — Export up to 250,000 rows (Classic PPM supports up to 25,000 rows).
- Use **Filters** for advanced filtering with complex conditions.
- Use the **Details Panel** (two-column layout) to edit fields.
- Save, modify, and share multiple views.

> [!info]
> For full details, see [[01 - Getting Started/Common Components/Grids]], [[01 - Getting Started/Common Components/Widgets]], [[01 - Getting Started/Common Components/Details Panel]], [[01 - Getting Started/Common Components/Saved Views]], and [[01 - Getting Started/Common Components/Filters]].

### Setup View Options

1. Log into Clarity and navigate to the Objectives workspace.
2. Click the relevant layout and then click **View Options**.
3. **Money Decimal Display** / **Number Decimal Display** — Configure how money and number attributes display.
4. **Wrap Text** — Toggle on to wrap text for all attributes. Default is Off.
5. **Show Nested Subobjects** — Toggle on to view and engage with sub-instances across multiple master instances concurrently.
   - **Nested Subobject** — Choose the specific sub-object to display within the sub-grid.
6. Click **X** to close the View Options panel.

### Right-click Context Menu

Right-click any cell on a row to see the context-sensitive menu:

| Option | Description |
|---|---|
| **Open Details** | Opens the details fly-out for the selected record |
| **Delete Row** | Deletes the selected row from the grid |
| **Star** | Marks the record as a favorite |
| **Chart Range (beta)** | Creates a chart using the data in the grid |

> [!info]
> When you delete a row (or status report) from the grid, the specific record is deleted from the respective investment.

---

## Create Objectives Using Quick Create or Template

### Create an Objective Using Quick Create

Requires the **Objective - Create** access right.

1. Log into Clarity and click **Objectives**.
2. Click the **+** (Add Row) icon to create an objective.
3. Populate required fields: Objective Name, Owner, Start, Target, Confidence Score, and any other mandatory fields.
4. Once all mandatory columns are filled, the objective appears in the Objectives list.
5. Click the Objective to navigate to the **Details** module for further editing.

### Create an Objective Using a Template

Templates capture the standard attributes and structure to replicate in future objectives. When creating from a template, the application prompts you to enter the information configured in the **Create from Template** module of the associated Objectives blueprint.

> [!warning]
> If the selected template includes Key Results with Target Values, ensure the new Objective's Start Date and Target Date fully cover the date ranges of all associated Target Values. Otherwise, a validation error such as "Target Value date is outside the Objective Start and Target dates" will appear.
>
> **Example:** If a template Key Result has Target Values on April 12, 2023 and May 19, 2023, the new Objective must have Start Date on or before April 12, 2023 and Target Date on or after May 19, 2023.

1. Log into Clarity and click **Objectives**.
2. Click **New from Template**. The **Select a Template** modal appears.
3. Use the search or navigation arrows to locate the desired template.
4. Select the template and click **Next**. The **New Objective** modal appears.
5. Populate the required fields (typically Objective Name, Owner, Start Date, Target Date, plus any template-specific fields).
6. Click **Create** to save the objective.

> [!tip]
> The fields visible in the New Objective modal depend on the **Create from Template** settings configured in the associated Objectives blueprint.

### Copy an Objective

You can copy linked Key Results, Actual Values, and Target Values to a new objective. However, copying a selected Actual Value or Target Value directly is not supported (due to auto-numbering on Name and ID fields).

1. Log into Clarity and click **Objectives**.
2. Select the objective you want to copy.
3. Click **Copy**.
4. Enter the new Objective Name in the **Copy Objective** dialog.

---

## Setup Hierarchical Nested Grids

You can view and manage sub-instances across multiple master instances concurrently using nested sub-grids.

1. Log into Clarity and navigate to the Objectives workspace (grid layout).
2. Click **View Options**.
3. Turn on the **Show Nested Subobjects** toggle.
4. In **Nested Subobject**, choose the specific sub-object to display within the sub-grid.
5. Master Grid rows show the **Expand** button. Click it to view the Sub-Grid under the master instance.

> [!info]
> Key behaviors of nested sub-grids:
> - Configuration modifications to sub-grids (filters, columns, sorting) apply across **all** sub-grids.
> - When accessing a Details panel, choosing a sub-grid shows the sub-instance details.
> - View Options adjustments (decimal preferences, per-period metrics, text wrapping) apply to both master grid and sub-grids.
> - The following functions are **not available** while viewing sub-grids: Export to CSV, Create new instance, Data Grouping, Aggregated Totals row.

### Sub-Grid Capabilities

The sub-grid supports most standard grid capabilities:
- **Right-click context menu** — Open Details Panel, Delete row, Star items, Create a chart.
- **Column Heading Options** — Hover over a column header to pin, auto-size, or reset columns.
- **Column filter** — Filter records in a specific column using various operators.
- **Column Panel** — Add or remove columns from the sub-grid via the hamburger menu.

---

## Associate Investments with Objectives

You can link investments (projects, products, custom investment types) directly to an objective using the **Investments** module within the Objectives workspace.

Benefits:
- **Strategic Alignment** — Ensure operational investment management ties to strategic goals.
- **Operational Visibility** — Quickly see which investments contribute to each objective.

The Investments module is configured through the Objectives Blueprint (available only for the Objective Object Type). The Administrator determines which Investment types (Projects, Ideas, CITs, Team Investments) are available for association.

**Follow these steps to associate investments:**

1. Open the **Objectives** workspace and click the name of the Objective to update.
2. Click the **Investments** module.
3. To **add** investments:
   - Click **Add**.
   - Choose an Investment Type from the list. A modal grid appears.
   - Select one or more investments and click **Add**.
4. To **remove** investments:
   - Select the check box next to the investment.
   - Click **Delete** and confirm.
5. After adding investments:
   - Click an investment name to open its Properties page.
   - Use the breadcrumb trail or browser Back button to return to the Objective.

> [!warning]
> Current limitations of the Objective Investments module:
> - Does not support: Per-Period metrics (TSV), Conversations, Attachments.
> - Investment Type attributes may not be immediately visible in the Investments module Column panel — refresh the browser to access them.
> - End users can only access Investment types with Instance, OBS, and Global access rights from this module.

---

## Managing Business Agreements from Objectives

You can select an investment in the Objectives Investments module and use the **Details** panel to view the agreements associated with that investment. You can also create, edit, and delete agreements while reviewing investments in the context of an objective.

> [!info]
> Requirements for managing agreements:
> - You need instance rights for associated agreements to view them in the investment Details panel.
> - The **Agreements** tab is only visible if the associated blueprint has the **Show in Details Flyout** capability enabled for the Agreements module.
> - Creating, editing, and deleting agreements requires associated instance or global access rights.

---

## Vaia AI Integration

Vaia enables Generative AI for any Rich Text Field (RTF) attribute within the Objectives workspace.

**Supported objects and sub-objects:**
- Objects: Projects, Ideas, Custom Investment types (CIT), Hierarchy, Objectives, Plan, Roadmaps, and Custom Master Object (CMO)
- Sub-objects: Risk, Issue, Change Request, Status Report, and Task

**Available AI Actions (after Vaia is configured):**
- **Generate Content** — Generate text for the field.
- **Revise Content** — Revise previously entered content (enabled when content already exists).
- **Grade Content** — Grade the content; results appear in a pop-up showing previously generated grades, dates, specific strengths, areas for improvement, and enhancement examples. Regenerate or refresh the grade as needed.

> [!warning]
> Key considerations:
> - This feature uses a Generative AI service that may produce inaccurate output. Always review AI-generated content for accuracy.
> - This feature is **toggled off** by default — create a support ticket to enable it in your environment.
> - Users need a Google Cloud Platform or OpenAI service account with appropriate permissions.
> - If the AI API key is not configured correctly, an error message displays.
> - If Vaia configuration is disabled: `API -1019: Could not process the request due to internal error.`

For configuration details, see [[14 - Vaia AI/AI Agents]].

---

## Working with Widgets

Configurable visual widgets help you review and summarize the health of your business. Available widget types:

| Widget | Description |
|---|---|
| **Number Tile** | Displays a specific number based on definition and filter criterion |
| **Pie** | Displays a pie chart; supports Group By, Aggregation Type, and top/bottom 3 results |
| **Bar** | Displays a bar graph; supports Group By, Aggregation Type, and top/bottom 3 results |
| **Progress Ring** | Displays a ring with a number based on definition and filter criterion |
| **Target** | Displays targets as goals or constraints (Roadmaps and Staffing Workspace) |

Each widget supports operations: **Count**, **Sum**, and **Average**. You can specify the color and display format (number or percentage).

Key actions:
- **Show Widgets** — Displays the widgets toolbar.
- **Manage Widgets** — Opens the Add Widgets dialog to add from **My Widgets** or the **Widget Library**.
- **New Widget** — Create a new widget from the Add Widgets dialog.

> [!info]
> OBS association for the out-of-the-box Objective object is not supported in this release. CIT and CMO-based Objectives do support OBS association.

### Interactive Filtering on Widgets

Clicking any widget dynamically updates the grid view to display data relevant to the selected widget element, enabling drill-down capabilities for deeper data analysis.

### Persistent Filter Panel State

Clarity retains the open or closed state of the Filters panel, eliminating the need to reopen or close it each time you navigate back to a page.

### Add Multiple Instances of the Same Attribute in Filters

You can apply multiple filter conditions to the same attribute within a single filter group, without duplicating other filter criteria across multiple groups. This replaces the previous approach of creating separate filter groups for each condition on the same attribute.

---

## Audit Module for Objectives

The Audit module provides a time-stamped record of all changes — what was changed, when, and by whom. Benefits include traceability, accountability, and risk mitigation.

The Audit module is available for all Blueprints and all API-enabled Objects, including:
- Agreements, Custom Investment Types, Custom Objects, Level 3 Sub-Objects
- Hierarchies, Ideas, Pages, Projects, Roadmaps, Plans
- Cost Plan / Cost Plan Details, Budget Plan / Budget Plan Details, Benefit Plan / Benefit Plan Details

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
| Record ID, Parent ID, Grandparent, Grandparent ID | Not visible in Classic |

### Verify Prerequisites

| Location | Required Access Right |
|---|---|
| Administration > Audit tile | **Administration - Audit - Navigate** |
| Audit Module (within a workspace) | **Audit Trail - View - All** |

### Setup View Options (Audit)

1. Log into Clarity and navigate to the Objectives workspace.
2. Click the relevant layout and click **View Options**.
3. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
4. In **Type**, specify Per-Period Metrics using **Periods** (set Start/End Period) or **Duration** (set Start Period and number of periods).
5. Define whether to see **Sum of Periods** or **Grand Totals** in the Totals column.
   - **Sum of Period** — Totals the displayed periods only.
   - **Grand Total** — Totals the full investment duration regardless of display.
6. Configure **Per-Period Metrics** display:
   - **Total** — Shows only the Totals field.
   - **Periods** — Shows only per-period metric fields.
   - **Total and Periods** — Shows both.
7. **Select Total and Period Columns Separately** — Toggle on to configure separate per-period metric sets for Totals and Periods columns. Default is Off.
8. **Show Total Row** — Toggle on to show an aggregate Total row at the top of the grid. Default is Off.
9. **Show Indicator on Non-Default Values** — Toggle on to display visual indicators when default values for allocation percentage, Grand Totals, allocation dates, or individual allocation per-period metrics are changed.
10. Click **X** to close.

> [!warning]
> You must select per-period metric attributes from the Column Panel separately.

### View Audit Details

1. Open the relevant workspace where the Audit module is configured in the associated blueprint.
2. Click **Audit**. Available grid tools:
   - Column configuration
   - Fly-out configuration
   - Saved views
   - Robust filtering
   - Group By
   - Export to CSV

> [!warning]
> Key limitations:
> - The Audit module includes a default filter for **Changed Date** (= 10 Days Before To Current Date). This filter cannot be removed, only modified.
> - You must close and reopen the Details Flyout to apply Global Date setting options to the Record field.
> - In Clarity, when filtering to display Sub-Object details (e.g., a Risk), the Parent information is populated. In Classic, you must select the Parent Object and the sub-object audit information is included.
> - The following are not supported in the Clarity Audit grid (as of 16.1.1): sorting by Attribute column; displaying scalar TSV values in FTE/Hours/Days format; configuring the Audit module for Plans; including stock and custom sub-sub object audit info (workaround: use **Clarity > Administration > Audit**).

---

## Configure Canvas to Manage the Objectives Dashboard

The Canvas layout displays configurable chart widgets, table widgets, and object-specific attributes to visualize data across multiple sub-objects on a single page.

**Available chart widget types in Canvas:**
- Number Tile
- Progress Ring
- Pie Chart
- Bar Chart

**Available target objects for Canvas widgets:**
- Key Results
- Custom Objects (second level only)

### Pre-requisite

Before using the Canvas module, your administrator must:
- Grant you view access to the objective.
- Associate the objective with a blueprint that includes the Canvas module.

### Setup Canvas to Create a Dashboard

1. Open an Objective.
2. Select the relevant Canvas module tab.
3. Click **Configure**. The **Configure Canvas** panel appears with a list of enabled widgets.

### Setup View Options (Canvas)

1. Log into Clarity and open the Canvas module.
2. Click **View Options**.
3. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
4. In **Type**, specify Per-Period Metrics using Periods or Duration.
5. Configure **Sum of Periods** or **Grand Totals**.
6. Set **Per-Period Metrics** to Total, Periods, or Total and Periods.
7. **Select Total and Period Columns Separately** — Configure separate per-period metrics for Totals and Periods.
8. Click **X** to close.

> [!info]
> You can change **Money Decimal Display**, **Number Decimal Display**, and **Show Total Row** within individual table widgets in Canvas. Use **Override Canvas Per-Period Settings** on specific tables to override the global Canvas per-period settings.

### Add or Remove Chart Widgets in Canvas

Available chart types: Number Tile, Progress Ring, Pie Chart, Bar Chart.

1. In the Canvas, click **Configure**.
2. Drag a chart widget and drop it into the canvas. The chart configuration pop-up appears.
3. Configure the following fields (varies by widget type):
   - **Title** — Name of the widget.
   - **Target Object** — Sub-object enabled for canvas in the Blueprint.
   - **Color** — Display color of the widget.
   - **Type** — Mathematical operation (Count, Sum, Average, etc.).
   - **Format** — Display as actual number or percentage.
   - **Group By** — Primary criterion for the widget. Select **Periods** to configure per-period metrics.
   - **Sum/Average/Minimum/Maximum** — Attributes for grouping (Bar Chart). Displays only TSV attributes when Periods is selected in Group By.
   - **Bar Orientation** — Horizontal or vertical.
   - **Sort Order** — Ascending or descending. Based on the first attribute in Sum/Average/Minimum/Maximum.
   - **Group Format** — **Clustered** (bars side by side) or **Stacked** (bars on top of each other). Appears when more than one attribute is selected. Maximum 3 attributes.
   - **Only Include items where** — Filter criterion for the widget.
4. Click **Create** to create the widget.
5. Click **Done** to save.

> [!warning]
> Chart widget limitations:
> - Charts do not support sub-sub-objects as Target Objects.
> - Only the owner/creator can modify the widget configuration (click the pencil icon).
> - If another user removes a chart widget, a draft copy of the view is created.
> - If a target sub-object is deleted, the widget is also deleted.
> - If an attribute is secured via Field-Level Security (FLS) after being added to canvas, the widget throws a 400 error.
> - Stacked/Clustered bar charts support Sum, Average, Minimum, Maximum — but not Count type.
> - Maximum 3 attributes in Sum/Average/Minimum/Maximum for Bar Charts.
> - The Widget Library is disabled in Canvas.

> [!tip]
> After configuring bar charts:
> - Hover over a bar to view category/period details and highlight all associated bars.
> - The total sum of all periods shows at the end of the Stacked Bar Chart.
> - Click a bar to toggle between Number and Percent format.
> - Fields with negative values are not visible in Clustered and Stacked Bar Charts.

### Edit the Chart Widget in Canvas

Only the **owner** of a chart widget can modify it.

1. In the Canvas, click **Configure**.
2. Hover over the chart. The **Edit** (Gear icon) appears in the top-right corner.
3. Click **Edit** (Gear icon) to update the chart details.
4. Click **Done** to save.

> [!info]
> Remove a widget by clicking the **x** in the top-right corner. This permanently deletes it from the canvas.

### Add a Table Widget to Canvas

1. In the Canvas, click **Configure**.
2. Drag a table widget and drop it into the canvas.
3. Enter the name of the table widget.
4. Select the **Target Object** from the list.
5. Click **Create**.

### Configure the Columns in the Table Widget

The table widget allows up to **20 columns**.

1. In the Canvas, click **Configure**.
2. Click the **Gear** icon at the top-right corner of the Table Widget. The grid opens in a pop-up window.
3. Available actions:
   - **Columns** — Add or remove attributes.
   - **Conditional Formatting** — Apply formatting rules. See [[01 - Getting Started/Common Components/Grids]].
   - **Filter** — Filter the table data.
   - Change the name of the table widget.
   - **Group By** — Group rows logically.
   - **Money Decimal Display**, **Number Decimal Display**, **Show Total Row** — Configure within the table widget.
4. Click **Done** to save.

> [!info]
> When selecting the **Staff** Target Object, Clarity includes fields from the Resource Object (e.g., Booking Manager, Date of Hire) in the configuration dialog. Governed by the feature toggle "Resource Attributes in Canvas Staff Target Object" (enabled by default).

### Search in Table Widget

Click the **Canvas** module, then enter text in the **Search** option near the Gear icon to filter instances in the table widget.

### Arrange Widgets in the Canvas View

| Widget Type | Minimum Width |
|---|---|
| Attribute, Progress Ring, Number Tile | 1 column |
| Table Widgets, Pie Chart, Bar Chart | 2 columns |

- Drag a widget from its edge to change its size.
- Maximum Canvas height: 24,000 px.

### Search in Canvas

Use the **Search** bar in Canvas to filter displayed values based on entered characters.

### Setup Layout in Canvas

Configure the column layout in Canvas:

1. In Canvas, click **Configure**.
2. Click the **Layout** tab in the left panel.
3. Select a column layout: **4-Columns**, **6-Columns**, or **8-Columns**.
4. A confirmation message appears: "The placement of the widgets will be rearranged. Do you want to proceed?"
5. Click **Proceed**.

> [!info]
> When changing layout:
> - If column count **increases**, the layout retains previous column sizes and adds new columns on the right.
> - If column count **decreases**, widgets in the right-most columns shift below all other widgets.

### Export to PDF

You can export the Canvas layout to PDF for presentations or stakeholder communication.

1. Click the **Canvas** module.
2. Click **Export to PDF**.
3. Click **Download** to save.

> [!warning]
> - **What You See Is What You Get** — The PDF matches exactly what is visible on screen. Data within scroll bars is not included.
> - The Grid Group By capability allows grouped/expanded tables in Canvas, but PDF export is limited to **5 expanded tables** (the latest expanded tables are prioritized).

### Expand the Widget

1. Open the **Canvas** module.
2. Click the **Expand** icon near the chart or widget.

> [!info]
> - Number Tile, Progress Ring, Pie Chart, and Bar Chart are responsive — widget text size increases as canvas size increases.
> - Click a data point in a Pie Chart to remove that slice (removed data points show with strikethrough in the legend).
> - Expanded Bar Charts display a maximum of **20 categories/periods**.

### Widget Governance

Key points when working with Canvas widgets:
- Only the owner/creator of a chart widget can modify its configuration.
- The Widget Library is disabled in Canvas — widgets cannot be added to the Widget Library from Canvas.
- If a sub-object used as a Target Object in a chart widget is disabled in the canvas configuration, the configured widget continues to show in the canvas but will not appear in the available widget list.

---

## Related Notes

- [[_MOC Pages Objectives|Pages and Objectives MOC]]
- [[10 - Pages and Objectives/Plans Beta|Plans Beta]]
- [[10 - Pages and Objectives/Working with Pages|Working with Pages]]
- [[05 - Hierarchies/_MOC Hierarchies|Hierarchies MOC]]
- [[04 - Roadmaps/_MOC Roadmaps|Roadmaps MOC]]
- [[14 - Vaia AI/AI Agents|Vaia AI Agents]]
- [[01 - Getting Started/Common Components/Grids|Grids]]
- [[01 - Getting Started/Common Components/Board Layout|Board Layout]]
- [[01 - Getting Started/Common Components/Widgets|Widgets]]
- [[01 - Getting Started/Common Components/Filters|Filters]]
- [[20 - Cookbooks/OKRs Objectives Key Results|OKRs Cookbook]]

%%Source: Clarity 16.4.1 Documentation PDF%%
