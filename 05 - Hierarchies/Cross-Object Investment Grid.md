---
title: Cross-Object Investment Grid
tags:
  - howto
  - concept
  - hierarchies
aliases:
  - Cross-Object Grid
  - Hierarchy Grid
  - Multi-Investment Grid
  - Portfolio Analysis Grid
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Cross-Object Investment Grid

The **Cross-Object Investment Grid** is one of the most powerful analysis tools in Clarity PPM's Hierarchies feature. It displays all investments in a hierarchy in a single, unified grid — regardless of investment type — allowing you to compare attributes, financials, and status across a mixed portfolio in one view.

> [!info] "Cross-Object" Explained
> "Cross-Object" means the grid can display fields from **multiple investment types** (Projects, Custom Investments, Ideas) in the same table. A standard grid is limited to fields from one object type; the cross-object grid transcends this limitation.

---

## Accessing the Cross-Object Investment Grid

1. Open a hierarchy from the Hierarchies list.
2. In the hierarchy detail view, click the **Investments** tab or **Grid** icon.
3. The cross-object investment grid loads showing all investments in the hierarchy.

---

## Grid Structure

The grid displays one row per investment, with hierarchy indentation showing the tree structure:

```
Level 0 (Root):   Digital Transformation Program    $2.5M    85%   Green
  Level 1:        Customer Portal Project           $800K    90%   Green
    Level 2:      UI Redesign                       $200K    95%   Green
    Level 2:      API Integration                   $600K    88%   Amber
  Level 1:        Data Analytics Platform           $1.7M    80%   Amber
    Level 2:      Data Lake Setup                   $900K    75%   Amber
    Level 2:      BI Dashboard Build                $800K    85%   Green
```

---

## Columns Available in the Grid

The cross-object grid supports columns from:

### Common Investment Fields (All Types)
- Name, ID, Status, Manager, Start, Finish
- OBS Unit, Investment Type
- % Complete, ETC, Actual Cost, Budget, Planned Cost
- Priority, Risk Score

### Type-Specific Fields
Fields from specific investment types (Projects, Custom Investments) can be added as columns. When an investment of a different type doesn't have that field, the cell displays blank.

### Hierarchy-Specific Columns
- **Level** — The depth in the hierarchy (0 = root, 1 = first level, etc.)
- **Rolled-Up Values** — For parent nodes: aggregated values from all descendants
- **Direct Values** — For all nodes: the investment's own field value

---

## Column Management

### Adding / Removing Columns

1. Click the **Columns** button in the toolbar.
2. Select/deselect fields to show or hide.
3. Available fields include investment attributes, financial fields, and custom fields.
4. Click **Apply** — the grid updates immediately.

> [!tip] Save Your Column Configuration
> After setting up your preferred columns, click **Save View** (or **Save Configuration**) to preserve the layout. Named views can be shared with other users.

### Reordering and Resizing Columns

- Drag column headers to reorder.
- Drag column borders to resize.

---

## Filtering the Cross-Object Grid

1. Click the **Filter** icon.
2. Add conditions:
   - **Investment Type** — Filter to only Projects, only Custom Investments, etc.
   - **Status** — Active, Proposed, At Risk, etc.
   - **Level** — Show only top-level investments, or drill to leaf-level only.
   - **Any field value** — Budget range, OBS unit, manager, etc.
3. The hierarchy indentation is preserved even after filtering.

> [!note] Filtering and Rollup
> When a parent investment's children are filtered out, the parent's **rolled-up values** still include the hidden children. The rollup is always based on all descendants, not just visible ones.

---

## Inline Editing in the Grid

1. Click any editable cell to edit inline.
2. Editable fields are those where you have **investment Edit** access.
3. Changes save immediately and may trigger rollup recalculation for parent nodes.

> [!warning] Editing Rolled-Up Values
> Rolled-up values (e.g., Total Budget at the Program level) cannot be edited directly — they are calculated from children. To change the total, edit the individual child investments.

---

## Grouping in the Cross-Object Grid

In addition to the default hierarchy indentation, you can add a secondary grouping:

1. Click **Group By** → select a field (e.g., Investment Type, Status).
2. Within each hierarchy level, investments are further grouped by the selected field.
3. Subtotals appear at each group header.

---

## Sorting

- Click any column header to sort.
- Sorting applies **within hierarchy levels** — the tree structure (parent-child indentation) is preserved.
- To sort across the entire flat list (ignoring hierarchy), use the **Flatten** option before sorting.

---

## Flattening the Hierarchy

To view all investments as a flat list (without indentation):

1. Click **View Options** → **Flatten Hierarchy**.
2. The grid switches to a flat list with a Level column indicating depth.
3. All standard sort, filter, and export operations work normally on the flat list.
4. Click **Restore Hierarchy** to return to tree view.

---

## Exporting the Cross-Object Grid

1. Click **Actions** → **Export to CSV**.
2. The export includes:
   - All visible columns.
   - A **Level** column indicating hierarchy depth.
   - A **Parent ID** column for reconstructing the hierarchy structure externally.
3. Rolled-up values at parent rows are included as separate columns.

---

## Use Cases

> [!example] Program Status Review
> Filter to Status = Amber or Red, sort by Planned Cost descending. Instantly see all at-risk investments across the program ranked by financial impact.

> [!example] Budget vs. Actuals Across the Portfolio
> Add columns: Planned Cost, Actual Cost, ETC, Budget Variance. The root row shows program-level totals; expand to see each investment's contribution.

> [!example] Manager Workload
> Group by Manager field. See how many investments each manager is responsible for and their combined ETC, sorted by workload.

---

## Related Notes

- [[Create and Edit]] — Setting up the hierarchy structure
- [[Financial Plans in Hierarchy]] — Dedicated financial analysis view
- [[Tasks in Hierarchy]] — Task-level analysis across the hierarchy
- [[Timeline Layout]] — Gantt view for the hierarchy
- [[_MOC Hierarchies]] — Back to the hierarchies MOC

%%Source: p650–663%%
