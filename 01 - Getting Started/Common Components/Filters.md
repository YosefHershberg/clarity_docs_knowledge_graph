---
title: Filters
tags:
  - howto
aliases:
  - Grid Filters
  - Filtering
  - Filter Panel
  - Clarity Filters
---

# Working with Filters

**Filters** in Clarity PPM 16.4.1 reduce the records displayed in a grid, board, or chart to only those matching specified criteria. Filters can be applied temporarily for a single session or saved as part of a [[Common Components/Saved Views|Saved View]] for repeated use.

%%Source: p304-307%%

---

## Filter Concepts

| Term | Description |
|------|-------------|
| **Filter** | A condition that limits which records are displayed |
| **Filter Panel** | The UI panel where you add and manage filter conditions |
| **Filter Condition** | A single rule: field + operator + value (e.g., Status = Active) |
| **Filter Set** | Multiple conditions combined with AND/OR logic |
| **Quick Filter** | A simplified filter bar shown directly above the grid |
| **Advanced Filter** | Full filter panel with all operators and complex logic |

---

## Opening the Filter Panel

1. Click **Filter** in the grid toolbar (or the funnel icon).
2. The filter panel opens — either as a side panel or a dropdown depending on the view.
3. Add your filter conditions.
4. Click **Apply** to filter the grid.

> [!tip]
> When a filter is active, the **Filter button** in the toolbar shows a badge or indicator (e.g., turns blue, shows a count). This reminds you that you are viewing filtered data, not the full record set.

---

## Adding a Filter Condition

1. In the filter panel, click **+ Add Condition** or **+ Add Filter**.
2. Select the **Field** to filter on from the dropdown (e.g., Status, Manager, Department, Finish Date).
3. Select the **Operator** (see operator reference below).
4. Enter or select the **Value**.
5. Click **Apply**.

### Filter Operators Reference

| Operator | Data Type | Description |
|----------|-----------|-------------|
| **Equals** | Text, Lookup, Boolean | Exact match |
| **Not Equals** | Text, Lookup | Excludes exact match |
| **Contains** | Text | Partial text match |
| **Does Not Contain** | Text | Excludes partial match |
| **Starts With** | Text | Text begins with value |
| **Is Empty** | Any | Field has no value |
| **Is Not Empty** | Any | Field has a value |
| **Greater Than** | Number, Date | Value exceeds threshold |
| **Less Than** | Number, Date | Value is below threshold |
| **Greater Than or Equal** | Number, Date | Value meets or exceeds |
| **Less Than or Equal** | Number, Date | Value is at or below |
| **Between** | Number, Date | Value falls within a range |
| **In** | Lookup, Text | Value matches any in a list |
| **Not In** | Lookup, Text | Value matches none in a list |
| **Is True / Is False** | Boolean | For yes/no fields |

---

## Combining Multiple Conditions

When multiple filter conditions are added, they are combined with logic:

- **AND** (default) — A record must match ALL conditions to appear
- **OR** — A record must match at least ONE condition to appear

### Changing the Logic
1. Add two or more conditions.
2. Look for the **AND / OR** toggle between conditions.
3. Click it to switch between AND and OR logic.

> [!example] Example Filter Set
> Show projects that are:
> - Status = **Active** AND
> - Department = **IT** AND
> - Finish Date **less than** 2024-12-31
>
> This returns only active IT projects finishing before end of 2024.

---

## Quick Filters

Some grids show a **Quick Filter bar** directly above the column headers. Quick filters provide one-click filtering for the most common criteria:

- Predefined buttons: **My Projects**, **Active**, **At Risk**, **This Quarter**, etc.
- These are configured by administrators or Blueprint settings.
- Click a quick filter button to apply it; click again to remove it.

> [!tip]
> Quick filters and the full filter panel can be used together. Quick filters add conditions on top of any conditions already set in the filter panel.

---

## Filtering by Date

Date filters support both absolute and relative values:

| Filter Type | Example | Description |
|-------------|---------|-------------|
| **Absolute date** | 2024-06-30 | Specific calendar date |
| **Today** | Today | Dynamic — always means current date |
| **This Week** | This Week | Dynamic — current ISO week |
| **This Month** | This Month | Dynamic — current calendar month |
| **This Quarter** | This Quarter | Dynamic — current fiscal quarter |
| **This Year** | This Year | Dynamic — current calendar year |
| **Next N days** | Next 30 days | Rolling window |
| **Past N days** | Past 7 days | Lookback window |

> [!tip]
> Use **dynamic date filters** (Today, This Week) when saving views — they update automatically so you don't need to change the date each time you use the saved view.

---

## Filtering by Lookup Fields

Lookup fields (dropdowns with predefined values) support multi-select filtering:

1. Click **Equals** or **In** as the operator.
2. A multi-select dropdown appears.
3. Check all values you want to include.
4. Click **Apply**.

---

## Clearing Filters

- To remove a single condition: click the **X** next to that condition in the filter panel.
- To clear all filters: click **Clear All** in the filter panel, or click the **Filter** button → **Reset**.
- To reset to a saved view's filters: re-select the view from the **View** dropdown.

---

## Saving Filters as Part of a View

Filters are not automatically persisted — they reset when you navigate away unless saved.

1. Apply your desired filters.
2. Click **View** dropdown → **Save As New View** (or **Save Current View As...**).
3. The filters are saved as part of the view.
4. When you select this view in the future, the filters are automatically applied.

See [[Common Components/Saved Views]] for full saved view documentation.

---

## Filter Scope

Filters apply to the **current grid context**. They do not carry over when you navigate to a different object list. Each grid maintains its own independent filter state.

> [!note]
> In some grids, a **persistent filter** may be set by an administrator at the Blueprint level — these cannot be removed by users and are always applied. They appear grayed out in the filter panel.

---

## Related Notes

- [[Common Components/Grids]] — The grid where filters are applied
- [[Common Components/Saved Views]] — Saving filter configurations
- [[Common Components/Board Layout]] — Filters work the same on boards
- [[Common Components/Global Search]] — Alternative to filtering for finding specific records
