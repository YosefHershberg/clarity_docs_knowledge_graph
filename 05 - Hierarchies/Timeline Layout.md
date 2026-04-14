---
title: Timeline Layout in Hierarchy
tags:
  - howto
  - hierarchies
aliases:
  - Hierarchy Timeline
  - Program Timeline
  - Hierarchy Gantt
  - Portfolio Timeline
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Timeline Layout in Hierarchy

The **Timeline layout** in the Hierarchies module presents all investments in the hierarchy as **horizontal bars** on a Gantt chart, allowing program managers to review the collective schedule of all investments in the tree — with hierarchy indentation preserved.

> [!info] Timeline Here vs. Roadmap Timeline
> This is the **Hierarchy Timeline** — it shows investments from a specific hierarchy with their parent-child structure. The [[Timeline Layout|Roadmap Timeline]] shows investments from a roadmap. Both are Gantt-style views, but hierarchy timelines show the tree indentation while roadmap timelines show a flat list of investment bars.

---

## Accessing the Timeline in a Hierarchy

1. Open the hierarchy from the Hierarchies list.
2. Click the **Timeline** icon in the layout toggle (or the **Timeline** tab).
3. The Gantt chart loads with all hierarchy investments displayed as bars.

---

## Timeline Structure

| Element | Description |
|---------|-------------|
| **Investment List** (left panel) | Hierarchical list of investments with indentation |
| **Gantt Area** (right panel) | Bars plotted against the time axis |
| **Time Axis** | Header with date scale (day/week/month/quarter/year) |
| **Bars** | Each bar = one investment; width = duration; color = configurable field |
| **Milestones** | Diamond shapes for key dates from each investment |
| **Today Line** | Vertical line marking the current date |
| **Dependency Arrows** | Cross-investment dependencies (if configured) |

---

## Hierarchy Indentation in the Timeline

The investment list (left panel) shows the hierarchy tree:

```
▼ Digital Transformation Program    ████████████████████████████
  ▼ Customer Portal Project         ██████████████
      UI Redesign                   ████████
      API Integration                         ██████████
  ▼ Data Analytics Platform                 ████████████████████
      Data Lake Setup                         ████████
      BI Dashboard Build                              ████████████
```

- Click the **expand/collapse arrow** next to a parent to show/hide its children.
- **Collapse all** to see only the root level; **Expand all** to see every level.

---

## Bar Behavior

### Moving Bars

1. Click and drag a bar horizontally to reschedule the investment.
2. The investment's start and finish dates update immediately.
3. Child investments are **not automatically moved** — you must move them individually, or use **Autoschedule** on the individual investment.

> [!warning] Moving Parent Bars
> Moving a parent bar changes the parent investment's dates only — it does not cascade to children. If you want to shift the entire sub-program, move each investment's bar individually, or update dates via the [[Cross-Object Investment Grid]].

### Resizing Bars

- Drag the **right edge** to extend or shorten the finish date.
- Drag the **left edge** to change the start date.

---

## Bar Color Configuration

1. Click **View Options** → **Color By**.
2. Select a field:
   - **Status** (default) — Green/Amber/Red reflects investment status.
   - **Investment Type** — Different color per type (Projects, Custom Investments, etc.).
   - **Priority** — High/Medium/Low in distinct colors.
   - **RAG** — Color from the latest status report overall status.
3. The legend appears in the toolbar showing which color = which value.

---

## Zoom and Scale

| Scale | Best For |
|-------|---------|
| **Week** | Short programs (2–6 months) |
| **Month** | Standard annual program view |
| **Quarter** | Multi-year portfolio view |
| **Year** | Long-range strategic program |

- Use **Fit to View** to auto-zoom so all investments are visible in one screen.
- Use the **date range picker** to navigate to a specific period.

---

## Milestones on the Hierarchy Timeline

Milestones from all investments appear as diamonds. To manage milestone visibility:

1. Click **View Options** → **Show Milestones** to toggle.
2. Hover over a milestone diamond to see its name, date, and parent investment.
3. Click a milestone to open the sidebar with details.

---

## Critical Path Across the Hierarchy

1. Click **View Options** → **Show Critical Path**.
2. The critical path — the chain of investments and tasks where delay pushes the program finish date — is highlighted in a distinct color (typically red).
3. The **program finish date** is shown in the timeline header as the latest finish date across all investments.

> [!note] Critical Path Calculation
> The hierarchy critical path is calculated based on investment-level dependencies (Finish-to-Start links between investments). If investments are not formally linked with dependencies, no critical path is shown.

---

## Cross-Investment Dependencies

To display dependencies between investments:

1. Click **View Options** → **Show Dependencies**.
2. Dependency arrows appear connecting the end of one investment bar to the start of another.
3. To **add a dependency**:
   - Click on a bar to select it.
   - Click **Add Dependency** in the sidebar.
   - Search for and select the dependent investment.
   - Choose the dependency type (Finish-to-Start, etc.).

---

## Baseline Overlay

If baselines have been set on individual investments:

1. Click **View Options** → **Show Baseline**.
2. A grey shadow bar appears behind each investment bar showing the original planned dates.
3. The difference between the grey (baseline) and colored (current) bars shows schedule variance at a glance.

---

## Printing and Exporting the Timeline

1. Click **Actions** → **Export**.
2. Choose format: **PDF** or **Image (PNG)**.
3. Configure:
   - **Date Range** — Trim the export to a specific period.
   - **Orientation** — Landscape (recommended for wide timelines).
   - **Include Details** — Optionally include the left panel with investment names and key fields.
4. Click **Export** to generate the file.

> [!tip] Executive Timeline Exports
> For executive presentations: set scale to **Quarter**, collapse to Level 1 only, color by Status, and export as landscape PDF. This gives a clean one-page program timeline overview.

---

## Related Notes

- [[Top-Down Planning]] — Strategic planning using roadmap timelines
- [[Timeline Layout|Roadmap Timeline]] — Timeline for roadmap items (different from hierarchy)
- [[Tasks in Hierarchy]] — Task-level timeline within investments
- [[Cross-Object Investment Grid]] — Data-focused (non-visual) hierarchy view
- [[Financial Plans in Hierarchy]] — Financial aggregation across the hierarchy
- [[_MOC Hierarchies]] — Back to the hierarchies MOC

%%Source: p696–711%%
