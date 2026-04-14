---
title: Canvas Dashboard in Hierarchy
tags:
  - howto
  - concept
  - hierarchies
aliases:
  - Hierarchy Canvas
  - Canvas Dashboard Hierarchy
  - Hierarchy Dashboard
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Canvas Dashboard in Hierarchy

The **Canvas** module in Hierarchies is a configurable dashboard that lets you view data across multiple sub-objects on a single page. It combines chart widgets (Number Tile, Progress Ring, Pie Chart, Bar Chart) with table widgets to give program managers and leadership a consolidated view of investment health without drilling into individual workspaces.

> [!info] Prerequisites
> - You must have view access to the hierarchy.
> - Your hierarchy must be associated with a blueprint that includes the Canvas module. This is configured by an administrator in the Hierarchy Blueprint.

---

## What Can You Display on Canvas?

Canvas widgets can be configured for the following objects and sub-objects:

| Object / Sub-Object | Description |
|---------------------|-------------|
| **Investments** | Core investment data (projects, ideas, CITs) |
| **Staff** | Resource allocations and staffing data |
| **Risks** | Risk records across all hierarchy investments |
| **Issues** | Issue records across all hierarchy investments |
| **Changes** | Change request records |
| **Financials - Cost Plans** | Cost plan details |
| **Financials - Budget Plans** | Budget plan details |
| **Financials - Benefit Plans** | Benefit plan details |
| **Status** | Status reports |
| **Custom Sub-objects** | Any custom sub-objects enabled in the Blueprint |

**Available chart types**: Number Tile, Progress Ring, Pie Chart, Bar Chart.

---

## Setting Up Canvas

### Open Canvas

1. In the main menu, click **Hierarchies**.
2. Select the hierarchy you want to open.
3. Select the **Canvas** module in the hierarchy workspace.
4. Click **Configure**. The Configure Canvas panel opens, showing all widgets enabled in the Blueprint.

### Setup View Options

You can configure per-period metrics (TSV) for the canvas:

1. Click **View Options**.
2. In **Periods**, select a unit of time: Weeks, Months, Quarters, or Years.
3. In **Type**, specify:
   - **Periods**: Set the Start Period and End Period.
   - **Duration**: Set the Start Period and indicate the number of periods, with an optional offset.
4. Define totals display:
   - **Sum of Period**: Total for the number of periods displayed.
   - **Grand Total**: Total for the full duration of the investment.
5. **Per-Period Metrics**: Select Total, Periods, or Total and Periods.

> [!important] Column Panel Required
> You must select per-period metric attributes from the **Column Panel** — they are not added automatically via View Options alone.

6. **Select Total and Period Columns Separately**: Turn on to configure separate per-period metrics for Totals and Periods. Default is Off.

> [!note]
> When **Select Total and Period Columns Separately** is enabled, Clarity disables the Per-Period Metrics setting in View Options.

7. Click **X** to close View Options.

> [!tip] Canvas-Level Overrides
> You can change **Money Decimal Display**, **Number Decimal Display**, and **Show Total Row** within individual table widgets. You can also override the canvas-level per-period settings by enabling **Override Canvas Per-Period Settings** on a specific table widget that has per-period metrics.

---

## Working with Chart Widgets

### Add a Chart Widget

1. In the Canvas, click **Configure**.
2. Drag a chart widget (Number Tile, Progress Ring, Pie Chart, or Bar Chart) and drop it into the canvas area. The chart configuration pop-up opens.
3. Fill in the configuration fields:

| Field | Description |
|-------|-------------|
| **Title** | Name of the widget |
| **Target Object** | Sub-object of the hierarchy enabled in the Blueprint |
| **Color** | Display color of the widget |
| **Type** | Mathematical operation (Count, Sum, Average, etc.) |
| **Format** | Actual number or percentage |
| **Group By** | Attribute defining the primary grouping criterion |
| **Sum/Average** | Attribute to be totaled or averaged |
| **Sort Order** | Ascending or descending |
| **Only Include items where** | Filter criterion for the widget |

4. Click **Create**.
5. Click **Done** to save changes.

> [!warning] Chart Widget Constraints
> - Charts do not support sub-sub-objects as a Target Object.
> - Only the owner/creator of the chart widget can modify its configuration.
> - If another user removes a chart widget from the canvas, a draft copy of the view is created.
> - If a sub-object used as a target is deleted, the widget is also deleted.
> - If an attribute is later secured via Field Level Security (FLS), the widget will throw a 400 error and will not be displayed.
> - The Widget Library is disabled in Canvas — you cannot add canvas widgets to the Widget Library.

> [!note]
> Chart widgets will not display a target object that has been disabled in the Blueprint canvas configuration.

### Edit a Chart Widget

1. In the Canvas, click **Configure**.
2. Hover over the chart — the **Edit** (gear icon) appears in the top-right corner.
3. Click **Edit** to update the widget definition in the pop-up.
4. Click **Done** to save.

> [!important]
> Only the owner of the chart widget can edit it. The owner can also remove the widget by clicking the **X** in the top-right corner. Removing a chart widget permanently deletes it from the canvas.

---

## Working with Table Widgets

### Add a Table Widget

1. In the Canvas, click **Configure**.
2. Drag a **Table widget** and drop it into the canvas.
3. Enter the name of the table widget.
4. Select the **Target Object** from the list.
5. Click **Create**. The table widget appears in the canvas.

> [!note] Staff Target Object
> When you select the Staff Target Object, Clarity includes fields from the Resource Object (such as Booking Manager and Date of Hire). This is governed by the feature toggle "Resource Attributes in Canvas Staff Target Object," which is enabled by default.

### Configure Columns in a Table Widget

The table widget supports up to **20 columns**.

1. In the Canvas, click **Configure**.
2. Click the **Gear icon** at the top-right corner of the Table Widget. The grid opens in a pop-up.
3. Configure the table using these capabilities:
   - **Columns**: Add or remove attributes in the grid.
   - **Conditional Formatting**: Apply rules to highlight cells or rows.
   - **Filter**: Analyze grid data based on selection criteria.
   - **Group By**: Transform the data grid into rows of logical groups.
   - **Money Decimal Display / Number Decimal Display**: Format numeric values.
   - **Show Total Row**: Enable a totals row at the top of the grid.
   - **Override Canvas Per-Period Settings**: Enable to apply widget-specific TSV settings.
4. Click **Done** to save.

### Search in a Table Widget

1. Click the **Canvas** module.
2. In the Table Widget, enter text in the **Search** option (near the Gear Icon) to filter instances.

### Remove a Table Widget

1. In the Canvas, click **Configure**.
2. Click **X** on the table widget to remove it from the Canvas.

---

## Searching in Canvas

Use the **Search** bar in Canvas to filter values based on characters entered. This filters across all visible content in the canvas view.

---

## Arranging Widgets

Widgets have minimum width requirements based on type:

| Widget Type | Minimum Width |
|-------------|---------------|
| Attribute, Progress Ring, Number Tile | 1-column |
| Table Widget, Pie Chart, Bar Chart | 2-columns |

> [!note]
> Drag a widget from its edge to resize it. The maximum canvas height is 24,000 px.

---

## Setting Up the Canvas Layout

You can configure the canvas in 3 column layout options: **4-Columns**, **6-Columns**, or **8-Columns**.

1. In Canvas, click **Configure**.
2. Click the **Layout** tab in the left panel.
3. Select your desired column layout. A confirmation message appears: "The placement of the widgets will be rearranged. Do you want to proceed?"
4. Click **Proceed**.

> [!note] Layout Change Behavior
> - If column count **increases**: The layout retains the previous column sizes and adds new columns on the right.
> - If column count **decreases**: Widgets in the rightmost columns are moved below all other widgets.

---

## Exporting Canvas to PDF

1. Click the **Canvas** module.
2. Click **Export to PDF**.
3. Click **Download** to save the PDF file.

> [!note] What You See Is What You Get
> The exported PDF matches the canvas exactly as it appears on screen. Data within a widget's scroll bar will **not** be included in the PDF.

> [!important] Group By Expansion Limit in PDF
> The grid supports Group By with expandable tables in canvas. However, during PDF export, only **five expanded tables** are displayed. Clarity selects the most recently expanded tables for inclusion.

---

## Expanding a Widget

To view a full-sized view of a chart or table widget:

1. Open the **Canvas** module.
2. Click the **Expand** icon near the chart or widget.

> [!note] Expansion Behavior
> - Number Tile, Progress Ring, Pie Chart, and Bar Chart are responsive — text size increases as the chart size increases.
> - Click a data point in a Pie Chart to remove the corresponding slice; removed slices appear with a strikethrough in the legend.
> - An expanded bar chart shows a maximum of **20 categories/periods**.

---

## Widget Governance

| Limit | Value |
|-------|-------|
| Maximum table widgets per canvas | 7 |
| Maximum total widgets (charts + tables) per canvas | 10 |

A widget counter in the canvas interface shows the current number of widgets added.

---

## Saving Views

Canvas views can be saved, shared, and set as defaults — the same as other Clarity saved views.

Key actions:
1. Save the current canvas configuration.
2. Use **Quick Save** to update an existing view.
3. Access views saved by other users.
4. Mark views as favorites for easy access.
5. Set a default view.

See [[Saved Views]] for full details on the saved views workflow.

---

## Related Notes

- [[Create and Edit Hierarchies]] — Setting up hierarchy trees and cards
- [[Cross-Object Investment Grid]] — Tabular analysis of all hierarchy investments
- [[Timeline Layout]] — Gantt view of hierarchy investments
- [[_MOC Hierarchies]] — Back to the Hierarchies MOC
- [[Widgets]] — General widget configuration reference

%%Source: p2244–2539%%
