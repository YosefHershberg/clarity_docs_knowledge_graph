---
title: Top-Down Planning with Roadmaps
tags:
  - concept
  - howto
  - roadmaps
aliases:
  - Roadmap Planning
  - Strategic Planning
  - Portfolio Roadmap
  - Top-Down Investment Planning
---

# Top-Down Planning with Roadmaps

Roadmaps in Clarity PPM enable **top-down strategic planning** — the practice of defining investment budgets, timelines, and priorities at the portfolio level *before* detailed project plans are created. This is the opposite of bottom-up planning (where schedules drive portfolio rollups).

---

## What is a Roadmap?

A **Roadmap** is a shared visual canvas that displays multiple investments as **horizontal bars** on a timeline. It is designed for:

- **Leadership and PMOs** to plan and communicate investment portfolios.
- **Scenario planning** — comparing multiple investment portfolios (what-if analysis).
- **Capacity analysis** — visualizing resource demand vs. supply across the portfolio.
- **Prioritization** — ranking and ordering investments before committing resources.

> [!info] Roadmaps Are Not Detailed Schedules
> Roadmaps work at the investment level (each bar = one investment). For task-level scheduling within an investment, see [[Tasks and Phases]] or [[Tasks in Hierarchy]].

---

## Creating a Roadmap

1. Navigate to **Roadmaps** in the main navigation.
2. Click **+ New Roadmap**.
3. Fill in:
   - **Name** *(required)* — The roadmap title (e.g., "FY2026 Technology Portfolio").
   - **Start Date** and **End Date** — The planning horizon displayed on the roadmap.
   - **OBS Unit** — Controls who can view and edit the roadmap.
   - **Blueprint** — The admin-defined template for this roadmap type.
   - **Description** — Purpose and context for the roadmap.
4. Click **Save** — the roadmap opens in the Timeline layout by default.

---

## Adding Investments to a Roadmap

### Adding Existing Investments

1. Open the roadmap.
2. Click **+ Add Investment** (or drag from the investment panel on the left).
3. Search for existing investments by name, type, or OBS.
4. Select one or more investments — they appear as bars on the timeline, positioned at their start/finish dates.

### Adding a Placeholder (New Roadmap Item)

When an investment doesn't exist yet, add a **placeholder bar**:

1. Click **+ New Item** or click directly on the timeline in an empty area.
2. Enter a name for the placeholder.
3. Set approximate start and finish dates.
4. Set key fields: estimated budget, target resources, priority.
5. Save — the placeholder appears as a bar.

> [!tip] Promote Placeholders to Investments
> Once a placeholder is approved for execution, use **Actions → Create Investment** to convert it into a real Clarity investment (project, custom investment, etc.) directly from the roadmap.

---

## Roadmap Scenarios

**Scenarios** are alternate versions of the roadmap used for what-if analysis:

### Creating a Scenario

1. Open the roadmap.
2. Click **Scenarios** in the toolbar → **New Scenario**.
3. Name the scenario (e.g., "Conservative Plan", "Accelerated Plan").
4. Choose whether to **copy** the current roadmap state as the starting point.
5. Make changes within the scenario: add/remove investments, change dates, adjust budgets.

### Comparing Scenarios

1. Click **Compare Scenarios** in the toolbar.
2. Select two or more scenarios to compare side by side.
3. Differences are highlighted: investments present in one but not the other, date/budget differences.

> [!note] Scenarios Don't Affect Live Data
> Changes made within a scenario do not update actual investment records until you **commit the scenario**. This makes scenario planning safe for leadership discussions.

### Committing a Scenario

1. Once a scenario is approved, click **Commit Scenario**.
2. Clarity applies the scenario's changes to the actual investment records (dates, budgets, status).
3. Confirm the commit — this action updates live data and cannot be undone.

---

## Capacity Analysis

Roadmaps include a **capacity bar** showing resource demand vs. supply:

1. Enable the capacity bar via **View Options** → **Show Capacity**.
2. The bar appears at the bottom (or top) of the timeline, divided by time period.
3. **Red segments** indicate overallocation (demand exceeds supply).
4. **Green segments** indicate available capacity.
5. Hover over a period to see the specific demand and supply numbers.

> [!tip] Resource-Based Prioritization
> When the capacity bar shows overallocation, use roadmap prioritization (drag to reorder investments, or set **Priority** scores) to decide which investments get resources first.

---

## Top-Down Budget Planning

Roadmaps support setting investment-level budgets before detailed financial plans exist:

1. In the roadmap, click a bar to open the **investment sidebar**.
2. Enter the **Top-Down Budget** (total planned cost for the investment).
3. This value flows into the investment's financial plan as a **top-level budget target**.
4. The investment manager then creates a detailed cost plan that must not exceed this top-down budget.

> [!note] Top-Down vs. Bottom-Up
> **Top-down budget** = leadership sets the envelope. **Bottom-up cost plan** = team plans the detail. Clarity supports both simultaneously, letting you compare them for variance.

---

## Investment Prioritization

To rank investments on the roadmap:

1. In the roadmap list (Grid or Timeline with the investment list visible), drag investments to reorder them.
2. Alternatively, set a **Priority** field value (numeric score or high/medium/low) on each investment.
3. Filter or sort by priority to focus on top-ranked investments.
4. Use the **prioritization panel** (if enabled) to rank investments using a scoring model (criteria-based scoring).

---

## Sharing a Roadmap

1. Click **Share** in the roadmap toolbar.
2. Add specific users or OBS units who should have access.
3. Set their access level: **View**, **Edit**, or **Admin**.
4. Optionally, generate a **shareable link** (read-only URL) for stakeholders who don't have Clarity accounts.

---

## Related Notes

- [[Timeline Layout]] — Detailed guide to the roadmap timeline view
- [[Board Layout]] — Kanban-style view of roadmap items
- [[Grid Layout]] — Tabular view for roadmap data management
- [[Canvas Dashboard]] — Executive dashboard canvas for roadmaps
- [[_MOC Roadmaps]] — Back to the roadmaps MOC
- [[_MOC Projects]] — Projects are the most common roadmap bar type

%%Source: p545–574%%
