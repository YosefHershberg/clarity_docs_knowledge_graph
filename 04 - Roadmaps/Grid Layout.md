---
title: Roadmaps Grid Layout
tags:
  - howto
  - roadmaps
aliases:
  - Roadmap Grid
  - Roadmap Table View
  - Grid View Roadmaps
canonical: true
audience: pm, leadership
domain: roadmaps
---

# Roadmaps Grid Layout

The **Grid layout** displays roadmap investments in a **tabular list** with sortable, filterable columns. It is best suited for bulk data management, comparing investments across many fields, inline editing, and exporting investment data.

---

## Accessing the Grid Layout

1. Open a roadmap.
2. Click the **Grid** icon in the layout toggle (upper right toolbar).
3. The roadmap switches to the grid view.

---

## Grid Structure

The grid is a standard data table with:

- **Rows** — One row per roadmap investment.
- **Columns** — Configurable fields (name, status, dates, budget, manager, custom fields).
- **Inline editing** — Click any editable cell to edit directly.
- **Multi-select** — Check the row checkbox to select multiple investments for bulk actions.
- **Sticky header** — Column headers remain visible when scrolling.

---

## Column Management

### Showing / Hiding Columns

1. Click the **Columns** button in the toolbar (or the column selector icon).
2. Check or uncheck fields to show or hide them.
3. Changes are saved per user per roadmap.

### Reordering Columns

1. Hover over a column header until the **drag handle** appears.
2. Click and drag the column to its new position.

### Resizing Columns

- Hover over the border between two column headers until the resize cursor appears.
- Drag left or right to resize.

---

## Inline Editing

1. Click any editable cell.
2. The cell switches to edit mode (text input, date picker, or dropdown).
3. Make your change and press **Enter** or click elsewhere to save.
4. The investment record is updated immediately.

> [!tip] Speed Tip: Tab to Move Between Cells
> After editing a cell, press **Tab** to move to the next editable cell in the same row, or **Shift+Tab** to move backward. Press **Enter** to move to the same field in the next row.

---

## Sorting

- Click any **column header** to sort ascending.
- Click again to sort descending.
- Click a third time to remove the sort.
- Hold **Shift** and click additional headers to add **multi-column sort**.

---

## Filtering

1. Click the **Filter** icon in the toolbar.
2. Add filter conditions:
   - Select a **field**, **operator** (equals, contains, greater than, is empty, etc.), and **value**.
   - Add multiple conditions with AND / OR logic.
3. Click **Apply** — only matching investments appear in the grid.
4. The filter pill appears below the toolbar showing active filters.
5. Save the filter with a name for reuse.

---

## Grouping

1. Click **Group By** in View Options.
2. Select a field to group rows (e.g., Investment Type, Status, OBS Unit, Priority).
3. Groups appear as collapsible section headers.
4. Expand or collapse individual groups by clicking the arrow.

> [!tip] Group Totals
> When grouping is active, numeric columns (budget, cost, ETC) show **group subtotals** in the group header row — useful for budget rollups by category.

---

## Bulk Actions

1. Select multiple investments using **row checkboxes**.
2. The **Bulk Actions** toolbar appears.
3. Available actions:
   - **Bulk Edit** — Update a shared field across all selected investments.
   - **Delete** — Remove selected investments from the roadmap (or from Clarity if configured).
   - **Export** — Export only selected rows to CSV.
   - **Add to Scenario** — Add selected investments to a roadmap scenario.

---

## Exporting Grid Data

1. In the Grid layout, click **Actions** → **Export to CSV**.
2. The export includes:
   - All visible columns (columns are exported as-is; hidden columns are excluded).
   - All rows matching the current filter (or all rows if no filter is active).
3. Download the CSV for use in Excel or other tools.

> [!note] Export vs. Report
> Grid export is a simple CSV dump of the current view. For formatted reports with charts and custom layouts, use [[_MOC Reporting|Reporting]] tools.

---

## Comparing the Grid to Other Layouts

| Feature | Grid | Timeline | Board |
|---------|------|----------|-------|
| Date visualization | No | Yes | No |
| Bulk editing | Yes | Limited | Limited |
| Grouping / subtotals | Yes | Yes (by group) | Yes (by column) |
| Sorting | Yes | Yes | Within column |
| Kanban drag-drop | No | Bar drag | Yes |
| Export to CSV | Yes | No | No |
| Best for | Data management | Scheduling | Status tracking |

---

## Related Notes

- [[Top-Down Planning]] — Roadmap concepts and investment creation
- [[Timeline Layout]] — Date-based Gantt view
- [[Board Layout]] — Kanban view for roadmaps
- [[Canvas Dashboard]] — Executive dashboard view
- [[_MOC Roadmaps]] — Back to the roadmaps MOC

%%Source: p591–598%%
