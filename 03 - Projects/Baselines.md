---
title: Baselines
tags:
  - howto
aliases:
  - Project Baseline
  - Schedule Baseline
  - Baseline Snapshot
---

# Baselines

A **baseline** is a point-in-time snapshot of a project's schedule, scope, and financial data. Baselines allow project managers to compare the current project state against the original plan, measure variance, and demonstrate how the project has evolved over time.

%%Source: p1157-1161%%

---

## What a Baseline Captures

When you create a baseline, Clarity snapshots:

| Data Category | What Is Captured |
|--------------|-----------------|
| **Dates** | Project start, finish; task start and finish dates |
| **Duration** | Task durations at time of baseline |
| **% Complete** | Completion percentages at baseline time |
| **Cost / Financial** | Cost plan totals (if financial baseline is included) |
| **Scope** | All tasks, phases, and milestones present at baseline time |
| **Staffing** | Team composition at time of baseline |

> [!note] A baseline is a **read-only** snapshot. You cannot edit baseline data after it is created — this ensures it remains a reliable reference point.

---

## When to Create a Baseline

Best practice is to baseline at key lifecycle stages:

| When | Why |
|------|-----|
| **Project approval / kickoff** | Capture the original approved plan |
| **After scope change approval** | Create a "revised baseline" with the new approved scope |
| **Before a major replanning exercise** | Preserve the pre-replan state |
| **At phase gates** | Snapshot end-of-phase status |

> [!tip] Name baselines clearly so it is obvious when they were taken: "Original Baseline – 2024-01-15" or "Post-Change-Request-3 Baseline".

---

## Creating a Baseline

### Steps
1. Open the project.
2. Navigate to the **Baselines** module in the left navigation panel.
3. Click **+ New Baseline** (or **Create Baseline**).
4. Fill in the baseline fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | Descriptive name for this snapshot |
| **Description** | No | Context for why this baseline was taken |
| **Include Financial Data** | No | Whether to snapshot cost plan values |

5. Click **Create** (or **Save**).

Clarity immediately captures the current project state and stores it as a baseline record.

> [!warning] Baseline creation can take a few moments on large projects with many tasks. Do not navigate away until the baseline confirmation message appears.

---

## Viewing Baselines

1. In the **Baselines** module, all baselines are listed in a grid.
2. Click a baseline name to view its detail.
3. The detail view shows the baseline's task list with dates and durations as captured at snapshot time.

### Baseline Grid Columns

| Column | Description |
|--------|-------------|
| **Name** | Baseline name |
| **Created By** | Who created the baseline |
| **Created On** | Date and time of snapshot |
| **Description** | Notes about the baseline |
| **Task Count** | Number of tasks captured |

---

## Comparing Baseline vs. Current Plan

Clarity displays baseline comparison in the **Timeline (Gantt)** layout:

1. Open the **Timeline** layout in the Tasks module.
2. Enable **Baseline** display from the timeline settings (gear icon or **Show Baseline** toggle).
3. Select which baseline to display.
4. A **ghost bar** (typically gray) appears behind each task's current bar, showing the baseline position.

### Reading the Comparison
- If the current bar extends **beyond** the ghost bar → task has slipped (delayed)
- If the current bar is **shorter** than the ghost bar → task finished earlier than planned
- If the current bar starts **later** than the ghost bar → late start

> [!tip] The Gantt comparison is the quickest way to show stakeholders how the schedule has changed from the approved plan.

---

## Baseline Columns in the Grid

In the Tasks grid layout, you can add baseline comparison columns:

| Column | Description |
|--------|-------------|
| **Baseline Start** | Task start date at baseline time |
| **Baseline Finish** | Task finish date at baseline time |
| **Baseline Duration** | Task duration at baseline time |
| **Start Variance** | Current Start − Baseline Start (days) |
| **Finish Variance** | Current Finish − Baseline Finish (days) |
| **Duration Variance** | Current Duration − Baseline Duration (days) |

---

## Deleting a Baseline

1. In the Baselines module, find the baseline row.
2. Click the **More (...)** menu.
3. Select **Delete**.
4. Confirm.

> [!warning] Deleting a baseline is permanent and cannot be undone. Once deleted, the historical snapshot is gone. Only delete baselines that were created in error.

---

## Multiple Baselines

Clarity supports **multiple baselines** per project. Common scenarios:

| Baseline | Purpose |
|----------|---------|
| Baseline 1 | Original approved plan |
| Baseline 2 | Post-change-request-1 plan |
| Baseline 3 | Post-change-request-2 plan |

> [!note] Only one baseline can be shown in the Timeline comparison at a time. Switch between baselines using the baseline selector in the timeline settings.

---

## Access Rights for Baselines

| Right | What It Allows |
|-------|---------------|
| **Project - View** | View baselines and comparison columns |
| **Project - Edit** | Create and delete baselines |
| **Baselines - Manage** | Full baseline management (if separate right is configured) |

---

## Related Notes
- [[Tasks Phases Milestones]] — Task schedule that baselines capture
- [[Financial Plans]] — Cost plan data included in financial baselines
- [[Autoschedule]] — Baseline before running Autoschedule
- [[Status Reports]] — Report schedule variance against baseline
- [[_MOC Projects]]
