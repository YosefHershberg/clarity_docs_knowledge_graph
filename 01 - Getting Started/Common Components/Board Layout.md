---
title: Board Layout
tags:
  - concept
  - howto
aliases:
  - Kanban Board
  - Board View
  - Clarity Board
canonical: true
audience: everyone
domain: ui
parent: "[[_MOC Getting Started]]"
---

# Board Layout

The **Board Layout** in Clarity PPM 16.4.1 provides a Kanban-style visual view of records.
Instead of rows in a table, records appear as **cards** organized in columns representing status stages or other categorical groupings. The Board Layout is available for projects, investments, tasks, and other supported object types.

---

## When to Use the Board Layout

| Use Case | Example |
|----------|---------|
| Tracking task status visually | To Do -> In Progress -> Complete |
| Managing investment pipeline stages | Proposed -> Approved -> Active -> Closed |
| Reviewing items by priority or owner | Low / Medium / High priority columns |
| Sprint or iteration planning | Backlog -> Sprint 1 -> Sprint 2 -> Done |

> [!tip]
> The Board Layout is especially useful for **agile-style work management** where moving cards between status columns drives the workflow. It complements the [[Grids|Grid Layout]] which is better for detailed data entry and analysis.

---

## Switching to Board Layout

1. Navigate to a supported list (e.g., Projects, Tasks, Investments).
2. In the toolbar, look for the **view switcher** icons for Grid, Board, Timeline.
3. Click the **Board** icon (usually represented by vertical columns or cards icon).

The view switches from a table to a card-based board.

---

## Board Layout Anatomy

- Top toolbar with actions such as **+ New**, **Group by**, **Filter**, and **Columns**
- Columns based on the selected grouping field (for example: Proposed, Approved, Active, Closed)
- Card counts per column
- Individual cards showing key fields such as name, owner, and financial summary

---

## Board Columns

Board columns represent the distinct values of the **group-by field** (typically Status). Each column shows:
- The **column header** with the status/category name
- The **card count** for that column
- The individual **record cards**

### Configuring the Group-By Field

1. Click **Group by** in the board toolbar.
2. Select the field to group cards by (default is usually **Status**).
3. The board re-renders with the new grouping.

> [!note]
> The available group-by fields are determined by the Blueprint configuration for that investment type. Common options include Status, Priority, OBS Unit, and Manager.

---

## Record Cards

Each card on the board represents one record. Cards display a summary of key fields configured for the board view.

### Default Card Fields (typical configuration)
- **Record Name** (clickable opens the Details Panel or full record)
- **Manager / Owner**
- **Dates** (start/finish)
- **Financial summary** (budget, cost, etc.)
- **Status indicator** (colored dot or badge)

### Configuring Card Fields
1. Click **Columns** or **Card Fields** in the toolbar.
2. Select which fields to display on cards.
3. Click **Apply**.

---

## Moving Cards Between Columns (Drag and Drop)

You can change a record's status/category by dragging its card to a different column.

1. Click and hold a card.
2. Drag it to the target column.
3. Release to drop.
4. Clarity updates the underlying field value (e.g., changes Status from "Proposed" to "Approved").

> [!warning] Required Fields on Status Change
> If a status change triggers a required field check (e.g., moving to "Approved" requires a Budget value), Clarity will open a popup requesting the required information before completing the move.

> [!note] Workflow Integration
> If your organization has configured **Processes (Workflows)** that trigger on status changes, moving a card on the board will trigger those workflow actions. Be aware of any approval steps or notifications that may fire.

---

## Creating Records from the Board

1. Click **+ New** in the board toolbar, or click the **+ Add** button at the bottom of a specific column.
2. A quick-create form or inline input appears.
3. Fill in the required fields.
4. The new card appears in the appropriate column based on its status.

---

## Filtering the Board

Filters applied in Board Layout work the same as in Grid Layout - they reduce which cards are shown.

1. Click **Filter** in the board toolbar.
2. Add filter conditions (see [[Common Components/Filters]]).
3. The board updates to show only matching cards.

> [!tip]
> Filters and group-by settings can be saved as part of a [[Common Components/Saved Views|Saved View]] specific to the Board Layout. Your board configuration can be shared with team members.

---

## Column Limits and WIP

> [!note] WIP Limits (where configured)
> In agile-configured boards, administrators may set **Work-In-Progress (WIP) limits** on certain columns. If a column is at its WIP limit, a visual warning appears when you try to add more cards to that column.

---

## Board vs. Grid: When to Use Each

| Scenario | Recommended View |
|----------|-----------------|
| Reviewing status distribution visually | **Board** |
| Entering or editing many field values | **Grid** |
| Moving records between stages | **Board** (drag and drop) |
| Sorting/filtering by multiple criteria | **Grid** |
| Presenting a pipeline to stakeholders | **Board** |
| Exporting data to Excel | **Grid** |

---

## Related

- [[Common Components/Grids]] - The table-based alternative view
- [[Common Components/Filters]] - Filtering cards on the board
- [[Common Components/Saved Views]] - Saving board configurations
- [[Common Components/Details Panel]] - Opening a full record from a board card
- [[Common Components/Charts]] - Chart view for data visualization

%%Source: p287-291%%
