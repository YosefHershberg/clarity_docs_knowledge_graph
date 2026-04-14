---
title: Charts
tags:
  - howto
aliases:
  - Chart View
  - Clarity Charts
  - Grid Charts
canonical: true
audience: everyone
domain: ui
parent: "[[_MOC Getting Started]]"
---

# Charts in the Grid

Clarity PPM 16.4.1 provides a **Chart View** that renders a graphical chart from the current grid data. Charts allow you to visualize trends, distributions, and comparisons without leaving the grid context.

%%Source: p286%%

---

## Accessing Chart View

1. Navigate to a grid (e.g., Projects list, Investments list).
2. In the view switcher toolbar, click the **Chart** icon (bar chart symbol).
3. The chart renders below or alongside the grid based on the current layout.

> [!note]
> Chart View is available in supported grids. Not all grids in Clarity support the chart view — availability depends on the object type and Blueprint configuration.

---

## Chart Types Available

| Chart Type | Best Used For |
|------------|--------------|
| **Bar Chart** | Comparing values across categories (e.g., budget by department) |
| **Stacked Bar Chart** | Showing part-to-whole breakdown across categories |
| **Line Chart** | Showing trends over time |
| **Pie / Donut Chart** | Showing proportional distribution |
| **Bubble Chart** | Comparing three variables simultaneously |

---

## Configuring a Chart

1. Switch to **Chart View**.
2. Click **Configure Chart** or the chart settings icon (gear/pencil).
3. Set the following:
   - **Chart Type** — Select bar, line, pie, etc.
   - **X-Axis** — The category field (e.g., Status, Department, Quarter)
   - **Y-Axis** — The numeric measure field (e.g., Budget, Cost, Count)
   - **Group By** — Optional secondary grouping for stacked/grouped charts
   - **Color By** — Field that determines bar/slice colors
4. Click **Apply**.

> [!tip]
> Charts respond to active [[Common Components/Filters|filters]] — applying a filter to the grid also filters the chart data. This makes it easy to drill into subsets of data.

---

## Chart and Grid Interaction

When Chart View is active alongside the Grid, the two panels are **synchronized**:

- Filtering the grid updates the chart automatically.
- Clicking on a chart bar, slice, or data point **highlights** the corresponding rows in the grid below.
- This interactive drill-down allows you to quickly identify which records contribute to a particular visual segment.

---

## Saving Chart Configuration

Chart configuration (type, axes, grouping) can be saved as part of a **[[Common Components/Saved Views|Saved View]]**:

1. Configure the chart as desired.
2. Click **Save View** in the toolbar.
3. Name the view and set sharing options.
4. The chart configuration is preserved and reloaded when the view is selected.

---

## Exporting Charts

- Click the **overflow menu (⋮)** in the chart area.
- Select **Export as PNG** or **Export as SVG** (options may vary).
- The chart image is downloaded to your device.

> [!note]
> For detailed data exports, use the **Grid Export** (CSV/Excel) feature rather than chart export. Chart exports capture only the visual image, not the underlying data.

---

## Related Notes

- [[Common Components/Grids]] — The grid that powers chart data
- [[Common Components/Filters]] — Filtering affects chart data
- [[Common Components/Saved Views]] — Save chart configurations as views
- [[Common Components/Board Layout]] — Alternative visual layout
