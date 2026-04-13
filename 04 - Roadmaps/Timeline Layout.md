---
title: Roadmaps Timeline Layout
tags:
  - howto
  - roadmaps
aliases:
  - Roadmap Timeline
  - Timeline View Roadmaps
  - Gantt Roadmap
---

# Roadmaps Timeline Layout

The **Timeline layout** is the primary view for roadmaps — a Gantt-style chart showing all roadmap investments as horizontal bars plotted against a time axis. It is designed for communicating the portfolio schedule at a glance and performing date-based planning.

---

## Accessing the Timeline Layout

1. Open a roadmap from the Roadmaps list.
2. The roadmap opens in the **Timeline layout** by default.
3. If you are in a different layout, click the **Timeline** icon in the layout toggle (upper right of the toolbar).

---

## Timeline Anatomy

The timeline consists of:

| Element | Description |
|---------|-------------|
| **Investment List** (left panel) | Rows listing all roadmap items; shows key fields |
| **Gantt Area** (right panel) | Horizontal bars plotted against dates |
| **Time Axis** | The header showing dates (day/week/month/quarter/year scale) |
| **Bars** | Horizontal bars — each represents one investment |
| **Milestones** | Diamond shapes for key dates |
| **Capacity Area** | Optional strip at the bottom showing resource demand/supply |
| **Today Line** | Vertical line marking the current date |

---

## Working with Bars

### Bar Appearance

- **Bar width** = Investment duration (start to finish date).
- **Bar color** = Driven by a field (e.g., status, priority, investment type) or set manually per item.
- **Bar label** = Investment name (and optionally other fields like ID or budget).

### Moving a Bar (Rescheduling)

1. Click and drag a bar **horizontally** to move it to new dates.
2. The investment's start and finish dates update in real time.
3. Release to confirm — the investment record is updated immediately.

> [!warning] Moving Bars Updates Live Data
> Dragging a bar updates the actual investment's start/finish dates. If the investment has a detailed task schedule, check whether autoschedule is enabled — the tasks may shift accordingly.

### Resizing a Bar (Changing Duration)

- Drag the **left edge** of a bar to change the start date.
- Drag the **right edge** of a bar to change the finish date.
- The bar length updates to reflect the new duration.

### Bar Color Configuration

1. Click **View Options** → **Color By**.
2. Select a field to drive bar color (e.g., Status, Priority, Investment Type, Custom Field).
3. Clarity uses a pre-configured color palette for lookup values, or you can assign custom colors per value in Administration.

---

## Milestones on the Timeline

Milestones appear as **diamond shapes** on the timeline at their scheduled date.

### Adding a Milestone

1. Click **+ New Milestone** in the investment list (or right-click on the timeline area).
2. Enter the milestone name and date.
3. Optionally assign a color or icon.

### Moving a Milestone

Drag the diamond to a new date. The associated investment milestone record is updated.

---

## Zoom and Time Scale

Use the **zoom controls** in the toolbar to adjust the visible time scale:

| Scale | Best For |
|-------|---------|
| **Day** | Short sprints, daily detail |
| **Week** | Sprint-level planning (2–4 week view) |
| **Month** | Quarterly planning (most common for roadmaps) |
| **Quarter** | Annual portfolio view |
| **Year** | Multi-year strategic roadmap |

- Use the **zoom slider** for fine-grained control between fixed scales.
- Click **Fit to View** to auto-scale the timeline to show all investments from earliest start to latest finish.

---

## Grouping and Sorting

### Grouping Investments

1. Click **Group By** in the View Options.
2. Select a field to group by (e.g., Status, Investment Type, OBS Unit, Manager).
3. Investments are grouped into labeled sections; each group can be collapsed/expanded.

### Sorting Within Groups

1. Click a column header in the investment list (left panel) to sort.
2. Sort is applied within each group.

---

## Filtering the Timeline

1. Click the **Filter** icon.
2. Add filter conditions (e.g., Status = Active, Start Date > 2025-01-01).
3. Only matching investments appear on the timeline.
4. Save the filter for reuse.

---

## The Investment Sidebar

Click any bar (or investment name in the left panel) to open the **investment sidebar**:

- View and edit key fields inline (name, dates, status, budget, manager).
- Click **Open** to navigate to the full investment detail view.
- Close the sidebar with the X button.

> [!tip] Quick Edits Without Leaving the Roadmap
> The sidebar lets you update investment fields without navigating away from the roadmap. Use it for quick status updates or date corrections during planning meetings.

---

## Capacity Visualization

1. Click **View Options** → **Show Capacity** to enable the capacity strip.
2. The capacity strip appears below the Gantt bars, divided into time periods.
3. Color coding:
   - **Green** — Demand is within available supply.
   - **Yellow/Amber** — Demand is 80–100% of supply.
   - **Red** — Demand exceeds supply (overallocated).
4. Hover over a period for exact numbers (demand hours, supply hours, variance).

---

## Dependency Lines

If investments have formal dependencies configured:

1. Click **View Options** → **Show Dependencies**.
2. Dependency arrows appear between bars (Finish-to-Start by default).
3. The **critical path** is highlighted in a distinct color.

---

## Printing / Exporting the Timeline

1. Click **Actions** → **Export**.
2. Choose **PDF** or **Image (PNG)** format.
3. Select the date range to include in the export.
4. Configure orientation (landscape recommended for timelines).
5. Click **Export** — Clarity generates the file for download.

---

## Related Notes

- [[Top-Down Planning]] — Roadmap concepts and creating roadmaps
- [[Board Layout]] — Alternative Kanban layout for roadmaps
- [[Grid Layout]] — Alternative tabular layout for roadmaps
- [[Canvas Dashboard]] — Executive dashboard view for roadmaps
- [[_MOC Roadmaps]] — Back to the roadmaps MOC

%%Source: p575–587%%
