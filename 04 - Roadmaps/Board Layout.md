---
title: Roadmaps Board Layout
tags:
  - howto
  - roadmaps
aliases:
  - Roadmap Board
  - Roadmap Kanban
  - Board View Roadmaps
canonical: true
audience: pm, leadership
domain: roadmaps
---

# Roadmaps Board Layout

The **Board layout** presents roadmap investments as **cards** arranged in columns — similar to a Kanban board. It is ideal for status-based categorization, prioritization reviews, and portfolio triage meetings where the team needs to see investments grouped by a specific attribute.

---

## Accessing the Board Layout

1. Open a roadmap.
2. Click the **Board** icon in the layout toggle (upper right toolbar).
3. The roadmap switches to the board view.

---

## Board Structure

| Element | Description |
|---------|-------------|
| **Columns** | Groups of cards; driven by a field value (e.g., Status, Priority, Phase) |
| **Cards** | Each card represents one roadmap investment |
| **Column Header** | Shows the column name and the count of investments in that column |
| **WIP Limit** | Optional maximum number of cards per column (admin-configured) |

---

## Configuring Columns

Columns are driven by a **grouping field**. To change the grouping:

1. Click **View Options** → **Group By**.
2. Select the field to group by:
   - **Status** (most common) — e.g., Proposed, Approved, Active, Completed
   - **Priority** — High, Medium, Low
   - **Investment Stage** — Ideation, Planning, Execution, Closure
   - **OBS Unit** — Group by department or team
   - **Any custom lookup field** configured in the Blueprint
3. The board re-renders with a column for each distinct value of the chosen field.

> [!tip] Best Groupings for Roadmap Boards
> - **Status** — For lifecycle tracking and portfolio reviews.
> - **Priority** — For investment prioritization sessions.
> - **Quarter** — For planning by delivery quarter (requires a custom quarter field).

---

## Card Content

Each card displays key investment information. Commonly shown:

- **Investment Name** (card title)
- **Manager**
- **Start / Finish Dates**
- **Budget or Cost**
- **Status Indicator** (RAG dot)
- **Priority Badge**
- **Custom Fields** configured in the Blueprint

Click any card to open the **investment sidebar** for quick edits or click **Open** to navigate to the full detail view.

---

## Moving Cards Between Columns

1. Click and drag a card from one column to another.
2. Dropping the card in a new column updates the investment's **grouping field** value.
   - Example: Dragging from "Proposed" to "Approved" updates the investment's Status field to "Approved".
3. The change is saved immediately.

> [!warning] Field Updates Are Live
> Dragging cards updates the actual investment field. There is no "undo" on the board — if you drag incorrectly, drag the card back to the original column.

---

## Sorting Cards Within a Column

1. In the column header, click the **sort icon**.
2. Select the sort field (e.g., Priority descending, Start Date ascending).
3. Cards within the column reorder accordingly.

---

## Filtering the Board

1. Click the **Filter** icon in the toolbar.
2. Add filter conditions to show only relevant investments.
3. Cards that don't match the filter disappear from the board.
4. The column count updates to reflect only visible cards.

---

## WIP Limits (Work in Progress Limits)

If configured by an administrator:

- Each column may have a **WIP Limit** — the maximum number of investments allowed in that column simultaneously.
- When a column exceeds its WIP limit, the column header turns **red**.
- This is a visual warning only — Clarity does not prevent additional cards from being added.

---

## Adding Investments from the Board

1. Click **+ New Item** in a column header to add a new investment directly into that column's status/group.
2. Fill in the quick-create fields in the dialog.
3. Click **Save** — the new investment appears as a card in that column.

---

## Board vs. Timeline: When to Use Each

| Board Layout | Timeline Layout |
|-------------|----------------|
| Status-based triage | Date-based scheduling |
| Portfolio prioritization | Capacity planning |
| Investment lifecycle tracking | Milestone tracking |
| Quick status updates | Dependency visualization |
| Agile-style sprint planning | Long-range roadmap communication |

---

## Related Notes

- [[Top-Down Planning]] — Roadmap concepts and investment management
- [[Timeline Layout]] — Gantt-style date-based roadmap view
- [[Grid Layout]] — Tabular data view for roadmaps
- [[_MOC Roadmaps]] — Back to the roadmaps MOC

%%Source: p588–590%%
