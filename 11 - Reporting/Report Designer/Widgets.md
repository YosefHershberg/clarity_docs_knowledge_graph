---
title: Creating and Managing Widgets
tags:
  - howto
aliases:
  - Report Widgets
  - Chart Widgets
---

# Creating and Managing Widgets

Widgets are the fundamental building blocks of Clarity's Report Designer.

Each widget acts as a self-contained visualization element that transforms raw data from Data Providers into meaningful, actionable insights.

Combining multiple widgets in a single report creates comprehensive dashboards that tell a complete story about organizational data.

Every widget can be independently configured through a consistent **four-tab property system**: **Setup**, **Format**, **Style**, and **Filter**.

## Topics Covered

- [[#Types of Widgets]]
- [[#Previewing and Publishing a Report]]
- [[#Configuring the Setup Tab]]
- [[#Configuring the Format Tab]]
- [[#Configuring the Style Tab]]
- [[#Configuring the Filter Tab]]
- [[#Number Tile and Progress Ring Widgets]]
- [[#Chart Widgets]]
- [[#Tables Widget]]
- [[#Conditional Formatting for Tables]]
- [[#Configure Attribute Groups]]
- [[#Per-Period Metric Settings]]
- [[#Conditional Formatting for Per-Period Metrics]]

---

## Types of Widgets

### Standard Widgets

| Name | Purpose | Best For | Key Features |
|------|---------|----------|--------------|
| **Number Tile** | Displays a single key metric prominently | KPIs, summary values, dashboard highlights | Simple numeric display with color customization |
| **Progress Ring** | Shows a metric as a circular progress indicator | Goal completion, percentage achievements, progress tracking | Circular visualization with customizable colors |
| **Pie Chart** | Shows data distribution as slices of a circle | Part-to-whole relationships, category distributions | Up to 26 slices, "Others" grouping, interactive filtering |
| **Donut Chart** | Pie chart with hollow center for modern styling | Same as Pie chart, with a cleaner appearance | Central space for additional information |
| **Bar Chart** | Displays data using horizontal bars | Comparing categories, rankings, time-series data | Periods toggle, stacked/clustered grouping, up to 26 bars |
| **Column Chart** | Displays data using vertical bars | Trend analysis, time-series comparison | Same as Bar chart, vertical orientation |
| **Line Chart** | Displays trends by connecting data points with lines | Time-series analysis, monitoring changes over time | Multiple series, periods toggle, interactive filtering, data markers, adjustable axes |
| **Bubble Chart** | Visualizes relationships across three measures using bubble position and size | Portfolio-style analysis (value vs. alignment vs. cost) | Configure X/Y dimensions and Metric (bubble size); hover tooltip; Per-Period Metric settings |
| **Split Packed Bubble Chart** | Groups bubbles by outer category with inner breakdown | Part-to-whole comparisons across categories | Configure Dimension and Breakdown dimension; Metric aggregation; Maximum bubbles settings |
| **Gantt Chart** | Displays records as timeline bars | Schedule-focused reporting, overlap analysis, timeline tracking | Configure Columns, Start, and Finish; Per-Period Metric settings |
| **Table** | Detailed tabular data display | Detailed data inspection, multiple attributes | AutoFit, pagination, totals row, decimal formatting |
| **Attribute Group** | Interactive filter container affecting other widgets | Dynamic filtering, guided data exploration | Requires "Attribute Based" report type; filters widgets on the same tab |

### Content Widgets

| Name | Purpose | Key Features |
|------|---------|--------------|
| **Line/Link Widget** | Creates logical separations between widgets | Can be displayed vertically or horizontally; can be converted to a link |
| **Text Widget** | Adds formatted text, labels, headers, or explanatory information | Rich text formatting, customizable fonts, static content |
| **Image Widget** | Embeds static images, logos, or external visual elements | Standard image formats, resizable, maintains aspect ratio |

---

## Previewing and Publishing a Report

Before publishing, preview the report to validate all elements are correctly configured.

1. Click **Preview** to review widgets, filters, and layout.
2. Make any necessary adjustments.
3. When satisfied, click **Publish**.
4. Confirm the publish action.

The report status updates to **Published** and appears in the **Available Reports** tab with details including Name, Status, Published By, and Published Date.

---

## Configuring the Setup Tab

The **Setup** tab configures the foundational aspects of a widget ג€” data source, dimensions, metrics, and key display structure.

| Setting | Description | Associated Widgets |
|---------|-------------|-------------------|
| **Chart Type** | Switch between chart types | Number Tile, Progress Ring, All Charts |
| **Data Provider** | Select the source dataset | Number Tile, Progress Ring, All Charts, Table, Attribute Group |
| **Title** | Descriptive name for the widget | Number Tile, Progress Ring, All Charts, Table |
| **Metric** | Numeric value to display (Sum, Average, Count, etc.) | Number Tile, Progress Ring, All Charts, Table |
| **Dimension** | Context for metric values (X-axis, groupings, slices) | All Charts |
| **X-dimension** | Attribute for X-axis values | Bubble Chart |
| **Y-dimension** | Attribute for Y-axis values | Bubble Chart |
| **Period Toggle** | Enable time-based dimension | Bar Chart, Column Chart |
| **Sort By** | Field to sort data by | All Charts |
| **Sort Order** | Ascending or descending | All Charts |
| **Breakdown dimension** | Attribute used to group values within main dimension | Split Packed Bubble Chart |
| **Breakdown sort by / order** | Sort fields for the breakdown dimension | Split Packed Bubble Chart |
| **Columns** | Attribute used to group timeline rows | Gantt Chart |
| **Start / Finish** | Date attributes for timeline bars | Gantt Chart |
| **Per-Period Metrics** | Time-based calculations (None, Periods, Duration) | Number Tile, Progress Ring, All Charts, Table, Attribute Group |
| **Label** | Content for text widget | Text |
| **Make Link** | Convert text to a hyperlink | Text |

---

## Configuring the Format Tab

The **Format** tab refines the widget's appearance and data structure.

| Setting | Description | Associated Widgets |
|---------|-------------|-------------------|
| **Metric Format** | Display as Number or Percent | Number Tile, Progress Ring, All Charts |
| **Padding** | Space between content and the widget border | Number Tile, Progress Ring, All Charts, Table, Image |
| **Maximum Slices/Bars** | Limit displayed segments (max 26) | All charts except Line |
| **Group Others** | Combine smaller segments into "Others" | All charts except Line |
| **Legend** | Position (None, Top, Bottom, Right) | All Charts |
| **Axis Setting** | X/Y axis visibility and titles | Bar, Column, Line Charts |
| **Maximum bubbles** | Limit displayed bubbles | Bubble Chart, Split Packed Bubble Chart |
| **Legend display** | Choose what to show in legend (Name, ID, Name and ID) | Bubble Chart |
| **Show labels** | Show or hide labels | Bubble Chart, Split Packed Bubble Chart |
| **Show gridlines** | Show or hide gridlines on X/Y axis | Bubble Chart |
| **Money decimal display** | Controls money decimal formatting | Gantt Chart |
| **Number decimal display** | Controls number decimal formatting | Gantt Chart |
| **Row height** | Compact, Comfortable, or Roomy | Gantt Chart |
| **Grid spacing** | Controls spacing between grid lines | Gantt Chart |
| **AutoFit** | Grow report tables dynamically (Fixed layout only) | Table |
| **Repeat Column Header** | Show headers on each page when AutoFit is enabled | Table |
| **Show Total Row** | Display totals at the bottom | Table |
| **Repeat Total Row** | Keep total row visible while scrolling | Table |
| **Auto Expand Group** | Automatically expand grouped rows on load | Table |
| **Show Group Counts** | Display count of items within each group | Table |
| **Show Per Period Metrics Column** | Display per-period metric columns alongside attributes | Table |
| **Decimal Display** | Money/Number decimal formatting | Table |
| **Wrap Text** | Turn text wrapping on/off in cells | Table |
| **Direction** | Horizontal or Vertical arrangement | Line |

---

## Configuring the Style Tab

The **Style** tab controls aesthetic elements ג€” borders, font styles, and color schemes ג€” to align with branding or improve readability.

**Steps:**

1. Log in to Clarity and click **Reporting > Report Designer**.
2. Select the relevant report and click **Edit**.
3. Select the widget and click the **Configure (Gear)** icon.
4. Use the **Style** tab to customize visual styling and branding.
5. Select **Display Mapping** if the dimension value has display mappings configured in Clarity Studio.

> [!note]
> The **Display Mapping** option is only available for Pie, Donut, Bar, and Column charts configured with a single metric.

---

## Configuring the Filter Tab

The **Filter** tab enables granular data selection at the widget level, overriding broader tab and report-level filters.

| Setting | Description | Associated Widgets |
|---------|-------------|-------------------|
| **Match Filter** | All (AND) or Any (OR) filter logic | All widgets |
| **Add Filter** | Define specific filter conditions | All widgets |
| **Add filter groups** | Create complex filter logic with groups | All widgets |

**Steps:**

1. Log in to Clarity and click **Reporting > Report Designer**.
2. Select the relevant report and click **Edit**.
3. Click **Add Widgets**, then add or select a widget.
4. Click the **Configure (Gear)** icon to open the widget properties.
5. Use the **Setup** tab to assign the data provider and configure dimensions and metrics.
6. Use the **Format** tab to refine visual representation.
7. Use the **Style** tab to customize branding.
8. Use the **Filter** tab to add filter conditions and define All/Any logic.
9. Close the Chart Properties pane.

---

## Number Tile and Progress Ring Widgets

The **Number Tile** prominently displays a single metric (KPI, aggregate value, summary count) in a customizable tile format ג€” ideal for financial totals, project counts, or targets monitored at a glance.

The **Progress Ring** shows metrics as a circular progress indicator for completion rates, goal achievement, or percentage values. It supports custom colors, interactive filtering, and dynamic updates as data changes.

**Steps to configure:**

1. Log in to Clarity and click **Reporting > Report Designer**.
2. Select the relevant report and click **Edit > Add Widgets**.
3. Click or drag the widget onto the canvas.
4. Click the **Configure (Gear)** icon to open the properties pane.
5. Use the **Setup**, **Format**, **Style**, and **Filter** tabs to configure the widget.
6. Close the Chart Properties pane.

---

## Chart Widgets

Clarity provides a diverse set of chart widgets for different analytical purposes:

- **Pie Chart:** Part-to-whole relationships; ideal for category proportions at a glance.
- **Donut Chart:** Modern alternative to Pie with a hollow center for supplementary labels.
- **Bar Chart:** Horizontal bars for comparing categories, rankings, or items with long labels.
- **Column Chart:** Vertical bars for time-series and trend analysis across periods.
- **Line Chart:** Connects data points with lines; best for trends, cycles, and multi-series analysis.
- **Bubble Chart:** Three-measure comparisons using position and bubble size; ideal for portfolio analysis.
- **Split Packed Bubble Chart:** Hierarchical view grouping bubbles by parent category with breakdown inside.
- **Gantt Chart:** Timeline bars plotted against start and finish dates for schedule-oriented reporting.

**Steps to configure:**

1. Log in to Clarity and click **Reporting > Report Designer**.
2. Select the relevant report and click **Edit > Add Widgets**.
3. Click or drag a chart widget onto the canvas.
4. Click the **Configure (Gear)** icon to open the properties pane.
5. Use the **Setup**, **Format**, **Style**, and **Filter** tabs to configure the widget.
6. Close the Chart Properties pane.

---

## Tables Widget

The **Table** widget presents detailed, multi-attribute data in a structured grid format. It is well-suited for operational reviews, audit trails, and scenarios where depth and precision are required.

**Steps to configure:**

1. Log in to Clarity and click **Reporting > Report Designer**.
2. Select the relevant report and click **Edit > Add Widgets**.
3. Click the **Table** widget to add it to the canvas.
4. Click the **Configure (Gear)** icon to open the properties pane.
5. Use the **Setup** tab to assign the data provider and configure columns.

> [!note]
> Access the **Column Panel** directly from Table Properties to view and search all available fields without excessive scrolling. You can drag and drop attributes to reorder them, or move them directly onto the table canvas.

6. Use the **Format** tab to configure: **Show Total Row**, **Auto Expand Groups**, **Show Group Counts**, **Show Per Period Metrics column**, and decimal display.
7. Use the **Style** tab to customize:
   - Table title
   - Table header
   - Table cells
   - Alternate row background color
   - Total Row
   - Table Group Row
8. Use the **Filter** tab to add widget-level filter conditions.
9. Use **Conditional Formatting** to apply dynamic visual styling.
10. Close the Chart Properties pane.

### Column-Level Controls (Hamburger Menu)

| Option | Description |
|--------|-------------|
| **Wrap Text** | Set text wrapping at the column level. Note: the Format tab "Wrapped text = True" setting takes precedence. |
| **Header Alignment** | Set alignment to Left, Right, or Center |
| **Header Background** | Open color picker for header background |
| **Header Text Color** | Open color picker for header text |
| **Hide Icons** | Hide tooltip icon in the column header |
| **Decimal Display** | Select decimal display option |
| **Cell Alignment** | Set to Left, Center, or Right |
| **Display Type** | Select from Value, Range, or Range Description and Value |

---

## Conditional Formatting for Tables

Conditional formatting lets you define rules to automatically apply colors, text effects, and formatting attributes to table cells or entire rows.

**Examples:**

- Highlight tasks flagged "At Risk" with bold red backgrounds.
- Color-code revenue columns: green for above target, strikethrough red for below.
- Style approval status fields: bold green for approved, yellow underline for pending.
- Apply row-level formatting for project health status.

> [!note]
> **Key limitations:**
>
> - Not applied when accessing Clarity from mobile devices.
> - Not applied when exporting to CSV.
> - Up to **20 rules** per view.
> - Copying a view copies its conditional formatting rules (including disabled rules, in the same order).
> - Every rule must have at least one valid condition (Condition + Condition Value).
> - Condition groups are not available.
> - Multiple conditions on the same attribute are not supported in a single rule.
> - The "is Not Between" condition is not supported.
> - The starred attribute is not available for format conditions.
> - You can only change color for boolean attributes.
> - You cannot change the color of grid cells that include links.

---

## Configure Attribute Groups

An **Attribute Group** widget filters and groups the contents of other widgets on the same tab based on the values in the Attribute Container.

### Steps

1. **Add the Attribute Container Widget:**
   - In Report Designer, select the target tab.
   - Click **+ Add Widgets > Attribute Group** to add it to the canvas.

2. **Configure the Data Provider:**
   - Click **Tab Settings** on the newly added container.
   - Select **Attribute Based** as the Report Type.

> [!note]
> You cannot add an Attribute Group when the Report type is set to Summary.

   - Select the appropriate data provider from the **Data Provider** dropdown.
   - If you change the data provider, all existing Attribute Containers will be deleted. Click **Confirm** to proceed.

3. **Configure the Attribute Container:**
   - Hover over the top-middle border of the container and click the **Configure** icon.
   - Enter a **Title** for the container.
   - Click **+ Add Attributes** to add attributes. You can resize and rearrange them.
   - Click **+ Add Metrics** to add numeric attributes (does not affect grouping or filtering).

4. **Configure Attribute Widgets:**
   - Hover over an attribute widget and click the **Configure** icon.
   - Use **Label Position** to set the label position (Top or Left).

5. **Interactivity:**
   - The Attribute Container filters and groups other widgets on the same tab based on selected attribute values.
   - Multiple Attribute Groups within a tab execute with **AND logic** across all attributes.
   - Multiple Attribute Groups must all use the **same data provider**. The system defaults to the data provider of the first configured container.

---

## Per-Period Metric Settings

Per-period metrics can be configured at the **report**, **tab**, and **widget** levels for flexible time-based data analysis.

### Key Enhancements

- **Report-Level:** A new **Show Report-Level Period Selector** toggle is available in Report Settings. When enabled, the per-period metric selector appears in both Designer and Preview modes.
- **Tab Settings:** Per-period metric options are available under the **Setup** tab in Tab Settings.
- **Widget Settings:** Configure per-period metrics via the **Setup** tab in Widget Settings (tables and charts).
- **Scheduled Reports:** Per-period metric settings are available on the **Filter** tab when scheduling. By default, these are set to None and inherit from the Report Definition.

### Precedence Rules

1. Widget-level settings override tab and report-level settings.
2. Tab-level settings override report-level settings.
3. If Widget or Tab settings are **None**, report-level settings are applied.
4. If all levels are **None**, grand totals for configured per-period fields are displayed.

> [!note]
> The **Apply** button becomes active when per-period settings are modified at the tab or widget level. Settings are applied when you click **Apply**, close the settings dialog, or press **Escape**.

### Smart Date Options for Time Reporting Periods

When **Periods = Days** in the Standard Calendar:

**Define Start Dates:**
- **Start of current time period** ג€” Beginning of the active period
- **Start of next time period** ג€” Beginning of the upcoming period
- **Start of previous time period** ג€” Beginning of the last completed period

**Define End Dates:**
- **End of current time period** ג€” Conclusion of the active period
- **End of next time period** ג€” Conclusion of the upcoming period
- **End of previous time period** ג€” Conclusion of the last completed period

**Dynamic Rolling Windows:**
- **Next Period** in Start Date ג€” Look ahead from the upcoming period (for forecasting future resource allocation)
- **Prior Period** in End Date ג€” Cap data at the most recently completed period (for historical performance analysis)

---

## Conditional Formatting for Per-Period Metrics

Clarity supports applying conditional formatting at the **individual period (TSV) level** for time-phased metrics ג€” not just the Totals column.

**Use cases:**
- Highlight resource over-allocation in a specific month.
- Flag cost overruns in upcoming periods before they appear in summary totals.
- Identify delayed weekly or monthly progress buckets to surface risks early.

> [!note]
> Some key limitations apply ג€” refer to the Conditional Formatting for Tables section above for full details.

---

## Related

- [[Creating Your First Report]]
- [[_MOC Reporting]]

%%Source: p1731-1750%%

