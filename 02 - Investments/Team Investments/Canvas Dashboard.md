---
title: Team Investment Canvas Dashboard
tags:
  - howto
  - admin
aliases:
  - Team Dashboard
canonical: true
audience: pm
domain: investments
parent: "[[_MOC Investments]]"
---

# Configure Canvas for Team Investment Dashboard

## Overview

The Canvas module in Clarity is a powerful dashboard creation and visualization tool that transforms how organizations interact with project and investment data. It provides a simple, visually intuitive interface for configuring customizable dashboards for investments.

Canvas allows users to configure chart widgets, table-type widgets, and object-specific attributes in a unified layout, enabling data from multiple sub-objects to be viewed on a single page.

> [!note]
> Canvas layouts are configured through **Blueprints**. Administrators define which objects and widgets are available, ensuring each canvas is tailored to organizational needs and user roles.

## Prerequisites

Before using the Canvas module, your administrator must ensure:
- You have **View** access to the investment
- The investment is associated with a blueprint that includes the **Canvas** module

## Available Chart Widget Types

| Widget | Description |
|--------|-------------|
| **Number Tile** | Displays a specific number based on widget definition |
| **Progress Ring** | Ring chart showing progress toward a target |
| **Pie Chart** | Pie chart grouped by a selected attribute |
| **Bar Chart** | Bar graph (horizontal or vertical, clustered or stacked) |

## Available Table Widget Objects

Table widgets can be configured for the following sub-objects:
- Tasks
- Risks, Issues, Changes
- To Dos
- Staff
- Financials — Cost Plans, Budget Plans, Benefit Plans
- Status (Reports Grid)
- Custom Objects (second level only)

---

## Setting Up Canvas

### Create a Dashboard

1. Open the investment
2. Select the relevant **Canvas** module
3. Click **Configure** — a list of available widgets appears in the Configure Canvas panel
4. Drag widgets from the palette and drop them onto the canvas
5. Configure each widget (see sections below)
6. Click **Done** to save changes

### Configure View Options

**View Options** control how time-period data is displayed:

1. Navigate to the relevant layout and click **View Options**
2. In **Periods**, select a time unit: **Weeks**, **Months**, **Quarters**, or **Years**
3. In **Type**, configure per-period metrics using either:
   - **Periods** — Set a Start Period and End Period
   - **Duration** — Set a Start Period and number of periods, with an optional offset
4. In **Totals**, choose:
   - **Sum of Periods** — Totals column sums only the periods displayed in the layout
   - **Grand Total** — Totals column sums the full investment duration, regardless of displayed periods
5. Set the **Per-Period Metrics** display:
   - **Total** — Show only the Totals field
   - **Periods** — Show only per-period metric fields
   - **Total and Periods** — Show both simultaneously
6. Optionally enable **Select Total and Period Columns Separately** to configure independent per-period metrics for Totals and Periods columns

> [!important]
> When **Select Total and Period Columns Separately** is turned ON, the **Per-Period Metrics** setting in View Options is disabled. Switching it back OFF restores the previously selected Per-Period Metrics values.

---

## Working with Chart Widgets

### Add a Chart Widget

1. In the canvas, click **Configure**
2. Drag a chart widget onto the canvas — a configuration pop-up opens
3. Fill in the chart details:
   - **Title** — Name of the widget
   - **Target Object** — The sub-object to visualize (must be enabled in Blueprint)
   - **Color** — Display color of the widget
   - **Type** — Mathematical operation (Count, Sum, Average, Minimum, Maximum)
   - **Format** — Actual number or percentage
   - **Group By** — Primary grouping attribute (select **Periods** to use time-scaled values)
   - **Bar Orientation** — Horizontal or vertical (bar charts only)
   - **Sort Order** — Ascending or descending
   - **Group Format** — **Clustered** (bars side-by-side) or **Stacked** (bars stacked)
   - **Only Include Items Where** — Filter criterion for the widget
4. Click **Create**, then **Done**

> [!note]
> The Widget library is disabled in Canvas — you cannot add chart widgets to the Widget Library.

### Edit a Chart Widget

1. In the canvas, click **Configure**
2. Hover over the chart — an **Edit** (gear icon) option appears
3. Click the gear icon and update chart details in the pop-up
4. Click **Done** to save

### Chart Widget Constraints

> [!important]
> Key rules for chart widgets:
> - Charts do not support sub-sub-objects as Target Objects
> - Only the **owner/creator** of a chart widget can modify its configuration
> - If another user removes a chart widget, a draft copy of the view is created
> - If a sub-object used as a Target Object is deleted, the chart widget is also deleted
> - If a sub-object is disabled in blueprint canvas configuration, the widget remains in the canvas but disappears from the available widget list
> - If an attribute is secured with **Field-Level Security (FLS)** after being added to canvas, the widget throws a 400 error
> - Stacked/Clustered bar charts support Sum, Average, Minimum, and Maximum — **not** Count
> - Maximum of **3 attributes** in the Sum/Average/Minimum/Maximum drop-down for bar charts
> - Sorting is based on periods selected in View Options; Sort Order becomes read-only for period-based bar charts

**Interacting with rendered bar charts:**
- Hover over a bar to view details for each category/period — all associated bars highlight
- The total sum of all periods displays at the end of Stacked Bar Charts
- Clicking a bar toggles the format between Number and Percent
- Fields with negative values are not visible in Clustered and Stacked Bar Charts

---

## Working with Table Widgets

### Add a Table Widget

1. In the canvas, click **Configure**
2. Drag a **table widget** onto the canvas
3. Enter the widget name
4. Select the **Target Object** from the list
5. Click **Create**

### Configure Table Widget Columns

1. In the canvas, click **Configure**
2. Click the **Gear** icon at the top-right corner of the table widget
3. Use the grid pop-up to:
   - Add or remove columns via **Columns** panel (max 20 columns)
   - Apply **Conditional Formatting** rules
   - Use **Filter** to analyze specific data
   - Rename the table widget
   - Enable **Group By** to collapse related rows into logical groups
   - Configure **Money Decimal Display** and **Number Decimal Display**
   - Enable **Show Total Row** toggle
4. Click **Done**

> [!note]
> When the **Staff** target object is selected, Clarity includes **Resource Object** fields (such as Booking Manager and Date of Hire) in the column dialog. This is controlled by the "Resource Attributes in Canvas Staff Target Object" feature toggle (enabled by default).

### Search in a Table Widget

1. Click the **Canvas** module
2. In the table widget, enter text in the **Search** option (near the Gear icon) to filter records

> [!important]
> You can override canvas per-period settings for individual table widgets by enabling the **Override Canvas Per-Period Settings** option on tables with per-period metrics.

---

## Arranging Widgets in the Canvas

Two size categories of widgets:
- **1-column minimum**: Attribute, Progress Ring, Number Tile
- **2-column minimum**: Table Widgets, Pie Chart, Bar Chart

Drag a widget from its edge to resize it. The maximum canvas height is 24,000 px.

### Configure Column Layout

Canvas supports three column layouts:
- **4-Columns**
- **6-Columns**
- **8-Columns**

**To change the layout:**
1. In Canvas, click **Configure**
2. Click the **Layout** tab in the left panel
3. Select a column layout — a confirmation prompt appears
4. Click **Proceed**

> [!note]
> When increasing column count, new columns are added on the right and existing widgets retain their size. When decreasing column count, widgets in the rightmost columns are moved below all other widgets.

---

## Search in Canvas

Use the **Search** bar in Canvas to filter values based on entered characters. This works across the entire canvas view.

---

## Export to PDF

Export the Canvas layout to PDF for use in presentations or stakeholder communications:

1. Click the **Canvas** module
2. Click **Export to PDF**
3. Click **Download** to save the file

> [!important]
> The exported PDF reflects exactly what is displayed on screen (WYSIWYG). Data within scrollable areas of a widget is not included. When using **Group By** in table widgets, only the first **5 expanded tables** appear in the PDF export — Clarity prioritizes the most recently expanded tables.

---

## Expand a Widget

To view a pie chart, bar chart, or table widget in full size:

1. Open the **Canvas** module
2. Click the **Expand** icon near the chart or widget

> [!note]
> - Number Tile, Progress Ring, Pie Chart, and Bar Chart are responsive — text size increases as widget size increases
> - Click a data point in a Pie Chart to remove/restore that slice; removed slices are shown with strikethrough in the legend
> - The expanded bar chart shows a maximum of **20 categories/periods**

---

## Widget Governance

Key points for managing widgets:
- Only the **owner/creator** of a chart widget can modify or remove it
- If a non-owner removes a chart widget, a **draft copy** of the view is created
- Widgets referencing deleted sub-objects are automatically removed
- Widgets referencing FLS-secured attributes display a 400 error

---

## Related
- [[Status Reports]]
- [[Getting Started]]
- [[Common Capabilities|Blueprints]]

%%Source: p1416-1425%%
