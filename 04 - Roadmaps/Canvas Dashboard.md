---
title: Canvas Dashboard for Roadmaps
tags:
  - howto
  - admin
  - roadmaps
aliases:
  - Roadmap Canvas
  - Roadmap Dashboard
  - Roadmap Executive View
---

# Canvas Dashboard for Roadmaps

The **Canvas** layout for roadmaps provides a fully configurable executive dashboard showing portfolio metrics, charts, and key data — all in one view. It is the roadmap equivalent of the [[Canvas Dashboard|Investment Canvas]], but scoped to the entire roadmap's portfolio of investments.

> [!info] Canvas vs. Timeline/Board/Grid
> The Canvas layout is a **read-only (by default) dashboard** for reporting and communication. Use [[Timeline Layout]], [[Board Layout]], or [[Grid Layout]] for active planning and data management.

---

## Accessing the Roadmap Canvas

1. Open a roadmap.
2. Click the **Canvas** icon in the layout toggle.
3. The canvas loads with the configured widget layout for this roadmap.

---

## Common Roadmap Canvas Widgets

| Widget Type | What It Shows |
|-------------|--------------|
| **Metric Tile** | Single KPI: total investments count, total budget, total ETC |
| **Donut/Pie Chart** | Investments by Status, Priority, or Investment Type |
| **Bar Chart** | Budget vs. Actuals by investment or by period |
| **Line Chart** | Budget spend trend over time across the portfolio |
| **Grid Widget** | Table of top-priority investments with key fields |
| **Capacity Chart** | Resource demand vs. supply across the roadmap |
| **Milestone List** | Upcoming milestones across all roadmap investments |
| **Status Summary** | RAG distribution (how many Green/Amber/Red investments) |
| **Rich Text** | Executive narrative, context, or key decisions |

---

## Configuring the Roadmap Canvas

> [!tip] Admin vs. User Configuration
> If the Canvas was configured at the **Blueprint level** by an administrator, the layout applies to all roadmaps of that type. Individual roadmap owners can further customize their roadmap's canvas (subject to Blueprint permissions).

### Entering Edit Mode

1. On the Canvas tab, click **Edit Canvas** (pencil icon).
2. The canvas switches to edit mode — widgets show handles and settings icons.

### Adding a Widget

1. Click **+ Add Widget** or click an empty cell.
2. Select the widget type.
3. Configure:
   - **Title** — Display label.
   - **Data Source** — The roadmap-level data to display.
   - **Date Range** — Rolling periods or fixed dates.
   - **Filters** — Optionally filter to a subset of roadmap items (e.g., only High Priority).
4. Click **Save Widget**.

### Portfolio-Level Data Sources

Unlike investment canvas (which scopes data to one investment), roadmap canvas widgets aggregate data **across all investments in the roadmap**:

- **Total Budget** = Sum of all investment budgets.
- **Total Actuals** = Sum of all investment actuals.
- **Investments by Status** = Count of investments per status.
- **Capacity** = Aggregate demand and supply across all staffed investments.

### Saving the Layout

Click **Save Layout** to preserve widget positions and configurations.

---

## Status Summary Widget (RAG Dashboard)

The most common roadmap canvas widget for executive reporting:

1. Add a **Status Summary** widget.
2. It displays three colored counters:
   - **Green** — Number of investments with Green status.
   - **Amber** — Number of investments with Amber status.
   - **Red** — Number of investments with Red (at-risk) status.
3. Click any color to drill through to the filtered list of investments in that status.

---

## Portfolio Budget Widget

1. Add a **Chart** widget and set:
   - **Type**: Stacked Bar or Grouped Bar.
   - **X-Axis**: Investment Name (or OBS Unit for rollup).
   - **Series 1**: Total Budget.
   - **Series 2**: Actual Cost.
   - **Series 3**: ETC.
2. This creates a per-investment budget vs. actuals vs. forecast chart across the portfolio.

---

## Capacity Chart Widget

1. Add a **Capacity Chart** widget.
2. Configure:
   - **Time Range**: Current quarter, next 12 months, etc.
   - **Group By**: All resources combined, or by role/OBS unit.
3. The chart displays stacked bars for demand and a line for supply — making overallocation periods immediately visible.

---

## Sharing the Canvas View

1. The Canvas layout is accessible to all users with **Roadmap - View** access.
2. No special sharing configuration is needed beyond roadmap access.
3. For external sharing (stakeholders without Clarity), export the canvas:
   - **Actions** → **Export to PDF** or take a screenshot via the print/export option.

---

## Best Practices for Executive Roadmap Canvas

> [!tip] Executive Roadmap Dashboard Layout
> Recommended widget layout for a 1-page executive view:
> 1. **Row 1**: 3–4 Metric Tiles (Total Budget, Total Actuals, Variance %, Investments at Risk count)
> 2. **Row 2**: Status Summary (RAG donut) + Budget vs. Actuals (bar chart)
> 3. **Row 3**: Capacity Chart (demand vs. supply)
> 4. **Row 4**: Top-Priority Investments Grid (filtered to Top 10 by priority)
> 5. **Row 5**: Rich Text for executive narrative and key decisions

---

## Related Notes

- [[Top-Down Planning]] — Roadmap concepts and creating roadmaps
- [[Timeline Layout]] — Date-based planning layout
- [[Grid Layout]] — Data management layout
- [[Checklists]] — Governance gate reviews on roadmaps
- [[_MOC Roadmaps]] — Back to the roadmaps MOC
- [[Canvas Dashboard|Investment Canvas]] — Per-investment canvas (separate from roadmap canvas)

%%Source: p607–616%%
