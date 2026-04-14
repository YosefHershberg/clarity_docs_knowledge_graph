---
title: Clarity Studio Portlets
tags:
  - dev
aliases:
  - Portlets
canonical: true
audience: dev
domain: development
---
# Clarity Studio Portlets

Portlets are small windows or snapshots into data — grids, charts, or HTML content displayed on a page. Similar to reports, portlets can collect data from the Classic PPM database, other enterprise databases, or external HTML sources.

**Supported portlet types:**
- **Chart portlets** — Graphic views (heat maps, tree maps, bubble charts, pie charts, etc.)
- **Grid portlets** — Lists or tables of data filterable on demand
- **Filter portlets** — Coordinate filtering across multiple portlets on a page
- **HTML portlets** — Web page content in HTML format

> [!NOTE]
> Interactive portlets (Xcelsius/Flash) are no longer supported in any environment. In FedRAMP environments, HTML portlets are also not supported.

Data for a portlet comes from an **object** (automatic data provider) or an **NSQL query**.

---

## Develop Chart Portlets

Charts are best for displaying data with multiple dimensions and metrics. Each chart portlet appears in 3D and animation display.

### Chart Types

| Chart Type | Description | Min Metrics | Max Metrics |
|------------|-------------|-------------|-------------|
| Area | Data points connected by lines; area below line filled | 1 | Unlimited |
| Bar | Each dimension displayed in a horizontal bar | 1 | Unlimited |
| Bubble | Metrics on X and Y axes; bubble size = third metric | 3 | Unlimited |
| Column | Each dimension in a vertical bar | 1 | Unlimited |
| Donut | Proportional segments like a pie chart | 1 | 1 |
| Funnel | Proportional rows in a funnel shape | 1 | 1 |
| Heat Map | Primary metric plotted on 2D grid using color scale | 1 (Z-Axis) | — |
| Line | Data points connected by lines along axes | 1 | Unlimited |
| Pie | Data objects in proportional slices | 1 | 1 |
| Scatter | Metrics across X and Y axes | 2 | 2 |
| Tree Map | Hierarchical tree with branched nodes; clickable shapes showing relative size | 3 | — |

### Create a Chart Portlet

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlets**.
2. Click **New**, select **Chart Portlet**, and complete the fields:
   - **Portlet Name / Portlet ID** — Name and unique identifier.
   - **Content Source** — Data origin. Default: Customer.
   - **Category** — Reporting area. Default: Business Intelligence.
   - **Base Size** — Select **Large** for a single-chart page; **Small** to share with other portlets. Default: Small.
   - **Active** — Whether the portlet is visible to users. Default: Selected.
   - **Instance Type** — Type of page where portlet can be placed. **General** = any page. Default: General.
   - **Data Provider** — Query, System, or Object that provides data.
3. (Optional) Click **Browse** to specify the data provider.
4. Click **Next** and select a chart type based on the query's dimensions and metrics.
5. Click **Next**.
6. Complete the **Select Metrics** page (varies by chart type):
   - **Bubble chart:** X Axis, Y Axis, Bubble Radius metrics.
   - **Heat map:** X Axis metric, Y Axis metric, Z Axis metric (color scale), and Grouping Function (Sum, Count, Average, Max, Min).
   - **Tree map:** Primary Metric, and up to three Grouping levels.
7. Click **Next** or **Finish and Open**.

> [!NOTE]
> You can change the chart type later by opening the portlet and clicking the **Chart Section** tab > **Chart Type**.

### Configure a Chart Portlet Filter

**Follow these steps:**
1. Open the chart portlet.
2. Click the **Chart Filter Section** tab and click **Layout**.
3. Move the desired fields from **Available** to the appropriate filter columns using arrows.
4. Complete the **Settings** section:
   - **Section Title, Default Filter State, Allow Power Filter**
5. Click **Save**.
6. Click the **Chart Filter Section** tab and click **Fields**.
7. From the **Display** menu, select **All**, **Selected**, or **Available**.
8. Click the **Properties** icon for a field to modify its filter behavior.
9. Click **Save and Return**.

### Configure Chart Source Data and Appearance

**Follow these steps:**
1. Open the chart portlet.
2. Click the **Chart Section** tab > **Source Data**.
3. Select the metrics to include in the chart. Click **Save**.
4. Click the **Chart Section** tab > **Options**.
5. In the **Options** field, select **Entire Chart**, **X-Axis**, or **Y-Axis**.
6. Configure relevant display options (available options vary by chart type):
   - **Allow Configuration / Allow Label Configuration** — Whether users can modify the portlet appearance.
   - **Allow Drilldown** — For tree maps; enables clicking data slices to reveal deeper levels.
   - **Angle of First Slice** — First slice position for pie/donut charts (0–360°).
   - **Axis Label** — Shows metric names along chart axes.
   - **Category Labels** — Labels along the category axis (column/bar/line charts).
   - **Datapoint Labels / Mouseover Labels** — Show/hide values at data points or on hover.
   - **Decimal Places / Display Units** — Number formatting and rounding.
   - **Group By Column / Group By Function** — Organizes metrics by a selected column and aggregate function (Sum, Count, Average, Max, Min).
   - **Layout Type** — For tree maps: Slice and Dice, Squarified, or Strip.
   - **Logarithmic** — Plots data on a logarithmic Y-axis scale.
   - **Major Unit Increment / Maximum Value** — Axis scale controls.
   - **Number of Rows** — Divides Y-axis data into groups for heat maps.
   - **Other Category Threshold** — Groups records beyond a threshold into "Other".
   - **Show Axis / Show Legend / Show Line Markers / Show Lines / Show Major Grid Lines** — Visual toggles.
   - **Show Title / Show Subtitle** — Display portlet name and metric subtitle.
   - **Sort Column / Sub-type** — Sort default and bar sub-type (for bar/column charts).
7. Save your changes.

#### Configure a Line Chart

1. In the **Options** field, select **Guides** and click **New**.
2. Complete: **Axis**, **Label**, **Show Label**, **Type**, **Color**.
3. Save.

#### Configure Consistent Colors

> [!NOTE]
> Requires **Use Consistent Chart Colors** to be enabled under **Administration > General Settings > System Options**. This option does not apply to heat map and tree map charts.

**Follow these steps:**
1. Open the chart portlet, click the **Chart Section** tab > **Options**.
2. Set **Consistent Color Key** to a metric or attribute (e.g., Priority).
3. Set **Use Consistent Colors** to **Yes**.
4. Save. Repeat for each chart portlet using the same color key.

#### Configure Colors for Heat Maps

> [!NOTE]
> If the heat map uses attributes with colors derived from custom display mappings, colors are read-only.

**Follow these steps:**
1. Open the heat map portlet, click **Chart Section** > **Options**.
2. In the **Options** field, select **Map Colors**.
3. For each color row: select a color, enter a description, and enter **From** and **To** value ranges.
4. Click **Save and Return**.

#### Configure the Chart Color Palette

**Follow these steps:**
1. Open **Administration > General Settings > System Options**.
2. In **Other**, select **Use Consistent Chart Colors** and click **Save and Return**.
3. In the **Chart Colors** field, click **[Color Palette]**.
4. Click **New**. Enter a **Name** and an **RGB** hex value (e.g., `0000FF` for blue).
5. Click **Save and Return**. Repeat for each color.
6. Click **Order** to sequence the colors.
7. (Optional) To restore the default palette, select all custom colors and click **Delete**.

---

## Develop Grid Portlets

Grid portlets display data in rows and columns. Use them for lists, capacity/demand views, or any tabular data. They are best suited when the query has one or two dimensions.

Virtual column types supported in grid portlets:
- Gantt charts, Progress bars, Bar/Column charts, Aggregation rows, Image links

**Guidelines:**
- Static dependent list lookups configured as multi-valued lookups are not supported.
- Autosuggest is not supported with static dependent lists.
- Secured subpage access restrictions are enforced in grid portlets.
- Use hierarchical grid portlets for data with parent-child structure.

### Create a Grid Portlet

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlets**.
2. Click **New** and select **Grid Portlet**.
3. Complete the fields:
   - **Content Source, Category, Instance Type** — Same as chart portlets.
   - **Data Provider** — Query, System, or Object.
   - **Partition** — Specifies partition-specific lookup behavior.

> [!NOTE]
> - Source data for virtual columns must be defined in the query.
> - The Y-axis (rows) can contain only one dimension.
> - For two-dimensional queries, either dimension can be in rows; the other goes to columns (X-axis).
> - Metrics display in the first/last header row when the query has two or more dimensions.

4. Click **Next**, then **Finish and Open**.

### Configure Column Layout and Appearance

**Follow these steps:**
1. Open the portlet.
2. Click the **List Column Section** tab > **Layout**.
3. Move attributes from **Available Columns** to **Selected Columns**.
4. Click **Save**.
5. In **Column Sorting**, select the primary sort attribute and direction (Ascending/Descending).
6. Add up to three more sort columns.
7. Save your changes.
8. Click the **List Column Section** tab > **Fields**.
9. For each field:
   - Edit the label if needed.
   - Click **Properties** to change column appearance.
   - Click **Indicator Images** to show data as icons.
10. Click **Save and Return**.

### Add a Gantt Chart to a Grid Portlet

**Follow these steps:**
1. Open the portlet.
2. Open the **List Column Section** menu > **Fields**.
3. Click **New** > **Gantt** > **Next**.
4. In the **General** section, set **Show Column Label** and **Allow Word Wrapping in Column Header**.
5. In the **Time Scale** section, set **Start Date, Time Scale, Number of Time Periods, Time Period Offset, Show Group Header Row**.
6. In the **Primary Bar** section, set:
   - **Item Name Attribute, Start Date Attribute, Finish Date Attribute**
   - **Milestone Attribute** (tasks only)
   - **Progress Through Date Attribute** or **Progress Percent Attribute** (these two override each other)
   - **Label for Bar, Additional Information Attribute, Show Mouseover**
7. Select dates to show in the primary bar.
8. (Optional) Select **Show Secondary Bar** and configure it similarly.
9. Save your changes.

### Add a Bar or Column Graph to a Grid Portlet

**Follow these steps:**
1. Open the portlet.
2. Open the **List Column Section** menu > **Fields**.
3. Click the **Properties** icon in a row.
4. Update the **Column Label**, **Show Column Label**, **Allow Word Wrapping in Column Header**.
5. Select the chart type in the **Display Type** field and click **Save**.
6. Complete the **Primary Bar or Column** section:
   - **Thickness, Maximum Length**
   - **Length Scaling:** Relative to Same Column, Relative to Same Row, Relative to Entire Table, or No Scaling.
   - **Color, Threshold Line Attribute, Over-threshold Color**
   - **Secondary Value, Link**
7. (Optional) Create a **Stacked Attribute** with color, secondary value, and link.
8. Save your changes.

### Add a Progress Bar to a Grid Portlet

**Follow these steps:**
1. Open the portlet.
2. Open the **List Column Section** menu > **Fields**.
3. Click **New** > **Progress Bar** > **Next**.
4. Complete the fields:
   - **Current Stage Name, Current Stage Number, Number of Stages**
   - **Color Attribute, Show Label, Column Width**
5. Save your changes.

### Add an Image Link to a Grid Portlet

**Follow these steps:**
1. Open the portlet.
2. Open the **List Column Section** menu > **Fields**.
3. Click **New** > **Image** > **Next**.
4. Complete the fields:
   - **Column Label, Show Column Label, Allow Word Wrapping in Column Header**
   - **Image** — Image to display in the column.
   - **Link** — Target page.
   - **Open as Pop-up** — Whether the target opens as a pop-up.
   - **Disable Link Attribute** — Attribute that controls whether the link shows as text or hyperlink.
5. Save your changes.

### Add an Aggregation Row to a Grid Portlet

Aggregation virtual column types:

| Type | Description |
|------|-------------|
| Aggregation | Operates on a column of data (Sum, Average, Count, Min, Max, Variance, Std Dev) |
| Comparison | Compares two or more query data fields |
| Variance | Displays the difference between aggregation and comparison rows |

> [!NOTE]
> String attributes cannot be aggregated. For date data, only COUNT, MIN, and MAX are available.

**Follow these steps:**
1. Open the portlet.
2. Open the **List Column Section** tab > **Aggregation**.
3. Click **Add**.
4. Complete: **Label, Show, Attribute, Function**.
5. Save your changes.
6. To show the difference between two rows, select the **Variance** checkbox (requires two rows with **Show** selected).
7. Click **Reorder** to arrange rows.
8. Save your changes.

### Configure Grid Portlet Display Options

**Follow these steps:**
1. Open the portlet.
2. Select the **List Column Section** tab > **Options**.
3. Complete the fields:
   - **Secondary Value Display:** Mouseover only, Mouseover and redline text, or Show Null Secondary Values.
   - **Filter** — Initial display of results.
   - **Rows per Page** — Number of rows per page.
   - **Highlight Row by Attribute** — Highlights a row when the attribute value is non-zero.
   - **Display Currency Code in Column** — Show currency code for money attributes.
   - **Allow Configuration / Allow Label Configuration** — User ability to customize the portlet.
   - **Attribute Value Protection** — Whether attributes are protected using display conditions, secured subpages, or both.
4. Save your changes.

### Configure the Filter for a Grid Portlet

**Follow these steps:**
1. Open the portlet.
2. Click the **List Filter Section** tab > **Layout**.
3. Move attributes from **Available** to the filter columns.
4. In the **Settings** section, set **Section Title** and **Allow Power Filter**.
5. Click **Save**.
6. Click the **List Filter Section** tab > **Fields**.
7. In the **Display** field, select fields to show.
8. Save your changes.

---

## Develop Filter Portlets

A filter portlet coordinates filtering for all portlets on a page or across pages.

**Filter scope levels:**
- **Page Level** — Filter values not shared across pages.
- **Application Level** — Filter values shared across pages using the same filter portlet.

**Filter precedence rules:**
- When a filter portlet is clicked, all mapped portlets are filtered using its values.
- If a user clicks **Show All** on an individual portlet filter, all records for that portlet appear — this overrides the filter portlet for that portlet only.
- Application-level filter portlets persist values across pages; the most recently used filter portlet's values are persisted when multiple filter portlets exist on a page.

### Create a Filter Portlet

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlets**.
2. Click **New**, select **Filter Portlet**, and complete the fields:
   - **Portlet Name, Portlet ID, Content Source, Category, Description**
   - **Active** — Whether visible to users. Default: Selected.
   - **Instance Type** — Type of page. Default: General.
3. Save your changes.

### Add a Field to a Filter Portlet

**Follow these steps:**
1. Open a filter portlet and click the **Fields** tab.
2. Click **Add**.
3. Complete the fields:
   - **Field Name, Field ID, Description**
   - **Data Type** — Cannot be changed after saving.
   - **Display Type** — Text Entry or Exact Text.
   - **Filter Default** — Default value for the filter field.
   - **Lookup / Lookup Style** — Lookup values and single or multi-select behavior.
   - **Width** — Field width in pixels. Default: 30px (dates: 20px).
   - **Required in Filter** — Whether a value is required when the filter is executed.
   - **Hidden in Filter** — Hidden from display; default value still applied on filter execution.
   - **Read-Only in Filter** — Displays default value; cannot be edited.
   - **Hint / Tooltip** — Helper text and hover tooltip.
4. Save your changes.

### Configure the Filter Portlet Layout

**Follow these steps:**
1. Open a filter portlet and click the **Layout** tab.
2. Move fields to **Selected (Left Column)** or **Selected (Right Column)** using arrows.
3. Set the order using up/down arrows.
4. Complete:
   - **Render As** — **Toolbar** (fixed expanded) or **Section**.
   - **Default Filter State** — Expanded or collapsed.
5. Save your changes.

### Add a Filter Portlet to a Portlet Page

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Select a page. To add to a tab, click **Tabs**, then click the tab name.
3. Click **Page Filters** > **Add**.
4. Select the filter portlet and click **Add**.
5. Adjust settings:
   - **Persist** — Whether filter values persist when navigating to another page.
   - **Default** — Whether this filter is the page default.
6. Click the **Filter Mappings** icon.
7. In the **Mapping Field** drop-down, select the portlet attribute to map to each filter field.
   - For lookup attributes, filter portlet field and portlet attribute must have the same lookup ID.
   - If a filter portlet field is not mapped to at least one portlet attribute, it does not display.
   - If no fields are mapped, the filter portlet does not display.
8. (Optional) Select **Hide If Empty** to hide the portlet when no value is entered for mapped filter fields.
9. Save your changes.

### View Pages for a Filter Portlet

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlets**.
2. Open a filter portlet.
3. Click the **Portlet Pages** tab.

---

## Develop HTML Portlets

Use HTML portlets to display web or network data (e.g., company news, corporate directories, intranet content).

> [!TIP]
> - **Static Data:** HTML portlets are best for static content.
> - **No Custom JavaScript:** Do not embed custom JavaScript or redirect links.
> - **Do Not Reload:** Do not use `window.location.href` — Clarity is a single-page Ajax application.
> - **Not Supported in FedRAMP:** HTML portlets are not supported in FedRAMP environments.
> - **Test CSS:** Verify CSS class name compatibility.

> [!WARNING]
> The application does not allow the following syntax inside HTML portlet scripts:
> - `alert|eval|expression|prompt|confirm` followed by `(`
> - `javascript|vbscript` followed by `:`
> - `document.write`
> - `</script>`
> - `<base href=...>`
> - `<script...>`
> - HTML comments (`<!--` or `-->`)

### Create an HTML Portlet

**Follow these steps:**
1. Click **Administration > Studio > Portlets**.
2. Click **New** and select **HTML Portlet**.
3. Complete the fields:
   - **Portlet Name** (required), **Portlet ID** (required)
   - **Content Source, Category, Description**
   - **Active** — Default: Selected.
   - **Instance Type** — Department, General, Location, Standard Rule, Portfolio, or Project. Default: Department. Required.
   - **HTML Code** — The HTML to display. Required.
4. Save your changes.

---

## Portlet Configuration

### Add a Portlet to a Page

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Click **New** and complete the page information (Type, Layout, Personalizable).
3. Click **Save and Continue**.
4. Click **Content** > **Add**.
5. Select the portlet and click **Add**.
6. Click **Layout** and use arrows to position the portlet in the appropriate column.
7. Save your changes.
8. Add the page to the main menu or the Actions menu.

### Assign User Access to a Portlet

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlets**.
2. Open the portlet.
3. Click the **Access to this Portlet** tab and select **Resource**, **Group**, or **OBS Unit**.
4. Click **Add**.
5. Select the access rights:
   - **Portlet - Edit** — Allows editing and viewing the portlet definition.
   - **Portlet - View** — Allows viewing the portlet.
   - **Portlet Definition Editor** — View and edit portlet definition (requires Administration - Studio right).
6. Click **Add and Continue**.
7. Select the resources, groups, or OBS units.
8. For OBS units, select the **Default Association Mode** (Unit only, Unit and ancestors, Unit and descendants, or Unit + descendants + ancestors).
9. Click **Add**.
10. Save your changes.

### Test the Portlet

**Follow these steps:**
1. Log in as a user representing the target audience.
2. Verify the data is accurate and meaningful.
3. Verify the filter works as intended.
4. If changes are needed, log in as a developer and adjust the portlet.

### Publish Changes to a Portlet

Publishing overwrites personalized user portlets and previously published administrator portlets.

**Follow these steps:**
1. Click **Administration > Studio > Portlets**.
2. Select the checkbox next to the portlet name and click **Publish**.

> [!NOTE]
> During a release upgrade or when installing add-ins, personalized user portlets are not upgraded. Publish new portlets to keep users current.

### Restrict User Configuration of Portlets

**Follow these steps:**
1. Open a portlet in Studio.
2. For a grid portlet: open the **List Column Section** menu > **Options**.
   For a chart portlet: open the **Chart Section** menu > **Options**.
3. Clear one or both checkboxes:
   - **Allow Configuration** — When off, users cannot configure column layout, names, display properties, or add aggregation rows.
   - **Allow Label Configuration** — When off with Allow Configuration on, labels cannot be changed but other items can be configured.
4. Save your changes.

### Set a System View for a Portlet

**Follow these steps:**
1. In Studio, open the portlet.
2. Configure the view as needed and publish to apply the system-level view for all users.

---

## Related
- [[_MOC Development]]

%%Source: p4061-4088%%
