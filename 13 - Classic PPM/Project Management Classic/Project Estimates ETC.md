---
title: Project Estimates — ETC (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2277-2280
---
# Define Project Estimates (ETC) (Classic PPM)

The Estimate-to-Complete (ETC) is the estimated time for a resource to complete an assignment. ETC values are important for project planning, revenue recognition, and comparing estimates to actuals for better future forecasting.

You can assign ETC for both labor and non-labor resources. Labor resources always have a defined availability value; non-labor resources do not require one.

## ETC Calculation

When a resource is first assigned to a task, the application assumes:
- The resource spends their entire project allocation on that task
- The resource works on only one task at a time

**Default ETC formula:**

```
ETC = Assigned Work Days × Allocation (Daily Availability in Hours)
```

Where:
- **Assigned Work Days** — Number of working days the resource is assigned to the task
- **Allocation** — Hours per day the resource is available (default: 8 hours, adjusted by project allocation %)

> **Warning:** The default calculation is a shortcut only — not a substitute for real estimates from resources. Always adjust default ETC based on conversations with assigned resources.

### Clipping of Task Time

Task start/finish times are initially set to 8:00 AM – 5:00 PM. When a task is assigned, the task time is clipped *inward* (never outward) to match the shift pattern:
- If shifts run 7:00 AM – 4:00 PM, the task finish clips to 4:00 PM but the start stays at 8:00 AM
- This inward clipping can cause ETC to differ from expectations

### ETC Examples

- Aaron (100% allocation, 8 hrs/day) on a 5-day task: **ETC = 40 hours**
- Patty (50% allocation, 8 hrs/day) on the same 5-day task: **ETC = 20 hours**
- Task over 22 working days with one resource at 100%: **ETC = 176 hours**

## Define Project Estimates

### Steps

1. Open a project
2. Assign resources to tasks
3. Generate the estimates
4. Define estimates at the project level:
   1. Open **Properties** menu > **Estimating**
   2. Enter a value in **New ETC** (distributes across all tasks by duration, availability, and allocation)
   3. Click **Apply**
5. Define allocations by individual resource

> **Note:** You can also define estimates at the task level — see Task ETC documentation.

## Apply Top-Down Estimating

Top-down estimating lets you specify a total ETC and distribute it by percentage across tasks.

1. Open **Properties** menu > **Estimating**
2. Set **Mode** to **Top-Down Estimating**
3. Review **Current ETC** — the current estimate across all tasks
4. Enter a **New ETC** value for the project
5. Click **Preview** — view tasks with:
   - **Task** — Task name (expand summary tasks to view subtasks)
   - **ID** — Task identifier
   - **Current ETC** — Current estimate per task
   - **Top-down %** — Percentage of the top-down estimate distributed to the task
   - **New ETC** — The new estimate to apply
6. Click **Apply** — ETC is distributed to tasks configured to receive the top-down distribution

## Apply Estimating Rules

Set **Mode** to **Estimating Rules** in the Estimating properties page to apply rule-based estimating instead.

## Modify ETC — Available Methods

| Method | Action |
|--------|--------|
| Apply new ETC across all tasks | Edit New ETC on the Estimating properties page and click Apply |
| Apply top-down estimating | Use Top-Down Estimating mode and specify percentages per task |
| Apply estimating rules | Use Estimating Rules mode |
| Edit individual task ETC | Open task properties and edit ETC |
| Enter time-varying ETC segments | Edit by time segments on resource assignment properties |

> **Warning:** Assign staff to tasks before you can view and edit ETC.

## Related Notes

- [[Resource Assignments]] — Manage assignment-level ETC
- [[Projects Teams Tasks]] — Create and staff projects
- [[Autoschedule]] — Distribute ETC based on loading patterns
- [[_MOC Classic PPM]]
