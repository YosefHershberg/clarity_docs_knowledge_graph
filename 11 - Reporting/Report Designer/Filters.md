---
title: Working with Filters in Reports
tags:
  - howto
aliases:
  - Report Filters
canonical: true
audience: pm, admin
domain: reporting
---

# Working with Filters

Filters in the Report Designer enable users to narrow down the data displayed in reports at multiple levels: **widget-level**, **tab-level**, and **report-level**. This flexibility ensures precise control over the data presented.

> [!NOTE]
> You can use **Is Empty** and **Not Empty** filters to identify incomplete records — for example, assignments without assigned resources, tasks with missing dates, or projects with gaps in data entry.

## Filter Precedence

When filters at different levels target the same attribute, the following precedence applies:

> **Widget Filter > Tab Filter > Report Filter**

Widget-level filters take the highest precedence, followed by tab-level filters, with report-level filters applied last.

### Precedence Example

| Filter Attribute | Report Filter | Tab Filter | Widget Filter | Result |
|------------------|--------------|------------|---------------|--------|
| Manager | Derrick Joseph, Rosie Miller | None | None | Report Filter applied |
| Is Role | Yes | No | None | Tab Filter applied |
| Primary Role | Engineer, QA, Architect | Architect, UX | Engineer, Project Manager | Widget Filter applied |

## Report-Level Filters

Report-level filters apply globally across all widgets and tabs.

**Steps:**

1. In the report canvas, click the **Filters** icon in the top toolbar.
2. Define filter conditions applicable to all tabs and widgets (e.g., `Operating Costs > $1,000,000`).
3. Toggle **Show filters in preview mode** if you want filters visible to end-users.
4. Save the filters and verify their effect across the report.

> [!NOTE]
> End-users can see report-level filters by clicking the **Filters** icon in the published report. Filters are currently read-only for end-users; future releases may introduce editable filters.

## Tab-Level Filters

Tab-level filters are applied to individual tabs and override any conflicting report-level filters for the same attribute.

**Steps:**

1. In the report canvas, select the tab you want to add a filter to.
2. Click the **Tab Settings** button at the top-right of the tab.
3. Click **Add filter group** and define filter conditions (e.g., filter by department or region).
4. Choose whether filters should apply **All** (AND) or **Any** (OR) logic.
5. Click **Apply** to save.

> [!NOTE]
> Tab-level filters do not affect other tabs. They only apply to widgets within the selected tab.

## Widget-Level Filters

Widget-level filters are applied directly to individual widgets and override both tab-level and report-level filters.

**Steps:**

1. In the report canvas, hover over the widget to expose the widget toolbar.
2. Click the **gear icon** to open the widget properties.
3. Navigate to the **Filter** tab.
4. Click **Add filter group** and define filter conditions (e.g., `Planned Operating Costs > $300,000`).
5. Use **Match All** (AND) or **Match Any** (OR) logic as needed.
6. Click **Apply** to save.

## Interactive Filtering

Interactive filtering lets users filter data across widgets by clicking a dimension value (e.g., a chart slice or bar). When a value is selected, all other connected widgets update automatically.

### How It Works

- **Click to Filter:** Click a segment in Pie charts, Bar charts, or Column charts to apply a filter.
- **Single Selection:** Only one value can be selected at a time per tab. Unselect to reset.
- **Target Widgets:** Any widget connected to the same data attribute will respond to the selection.
- **Visual Feedback:** The selected element is highlighted; others are grayed out.

### Supported Widget Behavior

| Widget Type | Initiates Filtering | Responds to Filtering |
|-------------|--------------------|-----------------------|
| Bar / Column charts | Yes (click a bar) | Yes |
| Pie / Donut charts | Yes (click a slice) | Yes |
| Number Tiles / Progress Rings | Only if already filtered | Yes |
| Tables | No | Yes |

### Constraints

- Interactive filtering is only available in **Responsive** layout reports.
- Interactive filtering is disabled for Bar/Column widgets with the **Periods** toggle enabled.
- Only one dimension can be filtered per tab at a time.
- Filters are scoped to the current tab and do not affect other tabs.
- Available only in published reports (Report Viewer) or in **Preview** mode.

### Behavior with Period Types

| Period Type | Behavior |
|-------------|----------|
| Days | Filters data for the specific date clicked |
| Months / Quarters / Years | Filters data for the selected period |

### Interactive Filtering and Attribute Groups

- Uses **AND logic** when combined with attribute groups — all conditions within the selected group are applied.
- Supports multiple source widgets, allowing selections across different widgets simultaneously.

### Visual Feedback Details

- **Tooltip:** For Number Tiles or Progress Rings, a tooltip indicates whether interactive filtering is supported.
- **Highlighted Dimension:** The selected dimension is highlighted; other dimensions' opacity decreases.
- **Toggle Value / Percent:** In Pie, Donut, Bar/Column charts, Number Tiles, and Progress Rings — **double-click** the widget to toggle between showing values and percentages.

## Conditional Formatting and Filters

> [!NOTE]
> **Key points about conditional formatting with filters:**
>
> - Conditional formatting rules only apply if the **Unit of Measure** in the rule matches the Unit of Measure in the report.
> - Higher rules have priority over lower rules, regardless of the "To" field value.
> - If a UOM=Hours rule exists and "Hours" is unchecked under **Settings > UOM**, the rule will never execute. The designer must ensure the UOM setting matches the formatting rule.

## Related

- [[Creating Your First Report]]
- [[_MOC Reporting]]

%%Source: p1751-1757%%
