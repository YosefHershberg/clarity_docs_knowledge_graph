---
title: Grids
tags:
  - concept
  - howto
aliases:
  - Clarity Grid
  - Grid View
  - Grid Layout
  - Conditional Formatting
---

# Working with Clarity Grids

The **Grid** is the primary data display and editing interface throughout Clarity PPM's New UX. Almost every list of records — projects, tasks, investments, resources, timesheets — is presented as a grid. Grids are highly configurable and support inline editing, filtering, sorting, grouping, and conditional formatting.

%%Source: p276-285%%

---

## Grid Anatomy

```
┌─ Toolbar ──────────────────────────────────────────────────────────────┐
│  [+ New]  [View: Default ▼]  [Filter ▼]  [Group ▼]  [Columns ▼]  [⋮] │
├─ Column Headers ───────────────────────────────────────────────────────┤
│  ☐  │  Name          │  Status    │  Manager    │  Finish     │  ...   │
├─────────────────────────────────────────────────────────────────────────┤
│  ☐  │  Project Alpha │  Active    │  J. Smith   │  2024-06-30 │  ...   │
│  ☐  │  Project Beta  │  On Hold   │  M. Jones   │  2024-09-15 │  ...   │
│  ☐  │  Project Gamma │  Planned   │  A. Davis   │  2025-01-01 │  ...   │
└────────────────────────────────────────────────────────────────────────┘
[  Pagination: Rows 1-25 of 142  ]  [ ← ]  [ 1 ]  [ 2 ]  [ → ]
```

---

## Toolbar Actions

| Button/Control | Description |
|----------------|-------------|
| **+ New** | Create a new record (opens inline row or side panel) |
| **View dropdown** | Switch between saved views or the default view |
| **Filter** | Open the filter panel to add/modify filters |
| **Group** | Group rows by a field value |
| **Columns** | Add, remove, or reorder columns |
| **Export** | Export grid data to CSV or Excel |
| **Overflow (⋮)** | Additional actions: bulk update, delete, share view |

---

## Managing Columns

### Adding Columns
1. Click **Columns** in the toolbar (or the column header area).
2. In the column picker panel, check the fields you want to display.
3. Uncheck fields to hide them.
4. Drag fields up/down to reorder them.
5. Click **Apply** or **Save** to persist.

### Resizing Columns
- Hover over the right edge of a column header until the resize cursor appears.
- Click and drag to resize.

### Reordering Columns
- Click and drag a column header left or right to change its position.

> [!tip]
> The set of available columns is determined by the **Blueprint** configuration for that investment type. If a field you need is not listed, ask your administrator to add it to the Blueprint.

---

## Sorting

- Click any **column header** to sort by that column (ascending).
- Click again to toggle to descending sort.
- A small arrow indicator shows the active sort direction.
- **Multi-column sort**: Hold `Shift` and click additional column headers to add secondary sort levels.

---

## Inline Editing

Most fields in a grid row can be edited directly without opening a detail panel.

1. Click on a **cell** in the grid.
2. The cell becomes editable (text input, dropdown, date picker, etc.).
3. Type or select the new value.
4. Press **Enter** or click elsewhere to save.
5. Press **Escape** to cancel the edit.

> [!warning] Required Fields and Validation
> If a required field is left empty or an invalid value is entered, the cell will display an error indicator. The row cannot be saved until the validation error is resolved.

> [!tip] Bulk Editing
> Select multiple rows using the checkboxes, then use **Actions → Bulk Update** to change a field value across all selected rows simultaneously.

---

## Grouping Rows

Grouping organizes rows by a shared field value, collapsing rows into expandable sections.

1. Click **Group** in the toolbar.
2. Select the field to group by (e.g., **Status**, **Manager**, **Department**).
3. Rows are now grouped with collapsible section headers showing the group value and row count.
4. Click a group header to expand/collapse it.
5. To remove grouping, click **Group** again and deselect the field.

> [!note]
> Grouped grids support aggregation in the group header row — sums, averages, and counts for numeric columns.

---

## Conditional Formatting

Conditional formatting applies visual styling (background color, text color, icons) to cells or rows based on field values or rules.

### Setting Up Conditional Formatting

1. Click the **overflow menu (⋮)** in the grid toolbar.
2. Select **Conditional Formatting** (or find it in the column header right-click menu).
3. Click **+ Add Rule**.
4. Configure:
   - **Field** — The field to evaluate (e.g., Status, % Complete, Finish Date)
   - **Condition** — The comparison (equals, greater than, less than, contains, is empty, etc.)
   - **Value** — The threshold or target value
   - **Formatting** — Choose background color, text color, or icon
5. Click **Save**.

### Example Conditional Formatting Rules

| Field | Condition | Value | Format |
|-------|-----------|-------|--------|
| Status | Equals | At Risk | Red background |
| % Complete | Less than | 25 | Yellow text |
| Finish Date | Less than | Today | Red text |
| Budget Variance | Greater than | 10% | Orange background |

> [!tip]
> Multiple rules can be applied to the same column. Rules are evaluated in order — the first matching rule wins. Drag rules to reorder their priority.

> [!note]
> Conditional formatting rules can be saved as part of a [[Saved Views|Saved View]] so your team sees consistent visual indicators.

---

## Row Selection and Bulk Actions

- Click the **checkbox** at the left of a row to select it.
- Click the **header checkbox** to select all rows on the current page.
- With rows selected, the toolbar shows bulk action options:
  - **Delete** selected records
  - **Bulk Update** — change a field value on all selected records
  - **Export** selected records
  - **Move** records (where applicable)

---

## Pagination and Row Limits

- By default, grids show **25 rows per page**. This can be changed via the rows-per-page selector at the bottom.
- Use **← →** navigation arrows or click a page number to move between pages.
- The total record count is shown in the pagination bar.

> [!note]
> Changing the rows-per-page setting is user-specific and persists within your session. It may reset on the next login unless saved as part of a Saved View.

---

## Grid Hierarchy (Tree Grid)

Some grids support a **hierarchical (tree) view** — for example, the task grid within a project shows tasks and their subtasks in a collapsible tree.

- Click the **expand arrow** (▶) next to a parent row to expand it.
- Click **▼** to collapse.
- Drag rows to reorder or re-parent them (where the grid supports drag-and-drop).

---

## Switching Views

Grids often support multiple layout modes via the **view switcher** in the toolbar:

| View | Description |
|------|-------------|
| **Grid** | Standard tabular view (default) |
| **Board** | Kanban-style cards grouped by status field |
| **Timeline** | Gantt-style timeline (for date-based data) |
| **Chart** | Graphical chart view |

See [[Board Layout]], [[Charts]] for details on those views.

---

## Related Notes

- [[Common Components/Filters]] — Applying filters to grid data
- [[Common Components/Saved Views]] — Saving and sharing grid configurations
- [[Common Components/Board Layout]] — Kanban board alternative view
- [[Common Components/Charts]] — Chart view in grids
- [[Common Components/Details Panel]] — Opening the full record from a grid row
- [[Common Components/Conditional Formatting|Grids#Conditional Formatting]] — Visual formatting rules
