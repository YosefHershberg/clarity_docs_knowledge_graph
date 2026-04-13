---
title: Autoschedule
tags:
  - concept
  - howto
aliases:
  - Auto Schedule
  - Scheduling Engine
  - Auto-Schedule
  - Project Scheduling
---

# Autoschedule

**Autoschedule** is Clarity's scheduling engine that automatically calculates task start and finish dates based on dependencies, resource calendars, task durations, and scheduling constraints. When Autoschedule is enabled, Clarity acts like a full-featured project scheduling tool — similar to MS Project's scheduling engine.

%%Source: p1068-1075%%

---

## How Autoschedule Works

When you run Autoschedule, Clarity:

1. Reads all **task dependencies** (FS, SS, FF, SF links)
2. Applies **lag** and **lead** time between dependent tasks
3. Considers **resource calendars** (working days, holidays, exceptions)
4. Respects **scheduling constraints** on individual tasks
5. Calculates new **start and finish dates** for all tasks
6. Identifies the **critical path** — the longest chain of dependent tasks that determines the project end date

> [!note] Autoschedule affects task dates only. It does not change resource allocations, % complete, or financial data.

---

## Enabling Autoschedule

Autoschedule is configured at the **project level**.

### Turn On Autoschedule
1. Open the project.
2. Go to **Settings** or the **Edit Project** panel.
3. Find the **Scheduling Mode** field.
4. Set it to **Autoschedule**.
5. Save.

> [!warning] When switching from **Manual** to **Autoschedule** mode, existing task dates may be recalculated immediately. Review tasks after the switch to confirm dates are as expected.

### Manual Mode vs. Autoschedule Mode

| Feature | Manual Mode | Autoschedule Mode |
|---------|:-----------:|:-----------------:|
| Task dates set by PM | Yes | No (engine sets them) |
| Dependency-driven dates | No | Yes |
| Calendar-aware scheduling | No | Yes |
| Critical path highlighted | No | Yes |
| Task constraints honored | N/A | Yes |

---

## Scheduling Constraints

Each task can have a **scheduling constraint** that limits how the engine places it in time:

| Constraint | Abbreviation | Behavior |
|-----------|:---:|---------|
| **As Soon As Possible** | ASAP | Schedules task as early as dependencies allow (default) |
| **As Late As Possible** | ALAP | Schedules task as late as possible without delaying the project |
| **Must Start On** | MSO | Task must start on a specific date |
| **Must Finish On** | MFO | Task must finish on a specific date |
| **Start No Earlier Than** | SNET | Task cannot start before this date |
| **Start No Later Than** | SNLT | Task must start by this date |
| **Finish No Earlier Than** | FNET | Task cannot finish before this date |
| **Finish No Later Than** | FNLT | Task must finish by this date |

> [!tip] Use **ASAP** (the default) for most tasks. Only apply hard constraints (MSO, MFO) to externally-driven dates like regulatory deadlines or client milestones.

> [!warning] Hard constraints (MSO, MFO) can create **scheduling conflicts** if they conflict with dependency logic. Clarity will flag these conflicts on the timeline.

---

## Running Autoschedule

### Manual Recalculation
Even in Autoschedule mode, you can trigger a recalculation manually:

1. Open the project Tasks view (Grid or Timeline).
2. Click the **Schedule** button (or **Actions → Reschedule**).
3. Clarity recalculates all task dates.
4. Review changes — modified dates are highlighted.
5. Click **Save** to confirm.

### Automatic Recalculation
If configured, Clarity can recalculate automatically whenever:
- A dependency is added or removed
- A task's duration is changed
- A constraint is modified

> [!note] Automatic recalculation behavior depends on the **Blueprint** and system settings configured by your administrator.

---

## Critical Path

The **critical path** is the sequence of tasks with zero float — any delay in a critical path task delays the entire project.

### Viewing the Critical Path
1. Open the **Timeline** layout.
2. Enable **Critical Path** display from the timeline settings (gear icon).
3. Critical path tasks appear in **red** (or a configured highlight color).

### Reducing Critical Path Length
Common techniques:
- **Fast-track**: Overlap tasks that were previously sequential (change FS to SS dependencies)
- **Crash**: Assign additional resources to critical path tasks to shorten their duration
- **Remove scope**: Eliminate tasks that are on the critical path

---

## Resource Calendars and Scheduling

Autoschedule uses **resource calendars** to skip non-working days:

- **Base Calendar**: The default working schedule (e.g., Mon–Fri, 8 hours/day)
- **Resource Calendar**: Individual exceptions (vacation, part-time schedules)
- **Project Calendar**: Project-level non-working days (holidays, shutdowns)

> [!note] If a resource is on vacation during a task, Autoschedule extends the task's finish date to account for the non-working time, rather than scheduling work on vacation days.

---

## Float (Slack)

| Type | Description |
|------|-------------|
| **Free Float** | How long a task can be delayed without delaying the next task |
| **Total Float** | How long a task can be delayed without delaying the project end date |

Tasks on the critical path have **zero total float**. Tasks with positive float have scheduling flexibility.

---

## Common Scenarios

### Scenario 1: Adding a New Task in the Middle
1. Add the task to the WBS.
2. Link it to its predecessor and successor.
3. Set duration.
4. Run Autoschedule → dates recalculate.

### Scenario 2: A Predecessor Task is Delayed
1. Update the predecessor's finish date or duration.
2. Run Autoschedule.
3. All dependent successor tasks shift automatically.

### Scenario 3: External Deadline Constraint
1. Find the milestone or task with the deadline.
2. Set constraint to **Finish No Later Than** with the deadline date.
3. Run Autoschedule.
4. If the constraint cannot be met, Clarity flags a scheduling conflict.

---

## Autoschedule vs. Manual Scheduling: When to Use Each

| Situation | Recommended Mode |
|-----------|-----------------|
| Agile/iterative project with evolving scope | Manual |
| Complex project with many dependencies | Autoschedule |
| Project with fixed external deadlines | Autoschedule with FNLT constraints |
| Simple project with few tasks | Manual |
| Need critical path analysis | Autoschedule |

---

## Related Notes
- [[Tasks Phases Milestones]] — Build the WBS that Autoschedule works with
- [[Staffing]] — Resource calendars affect scheduling
- [[Baselines]] — Baseline the schedule before running Autoschedule
- [[_MOC Projects]]
