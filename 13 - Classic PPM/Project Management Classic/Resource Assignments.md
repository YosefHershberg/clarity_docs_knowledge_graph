---
title: Resource Assignments (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2314-2325
canonical: true
audience: everyone
domain: classic
---
# Manage Resource Assignments (Classic PPM)

Resource assignments link specific resources to project tasks and define how much time each resource is expected to spend. You can modify assignment properties, remove assignments, replace assigned resources, and enter time-varying ETC segments.

## Modify Resource Assignment Properties

1. Open the project and click **Tasks**
2. Open the **Tasks** menu > **Assignments**
3. Click the **Properties** icon next to the resource name
4. In the **General** section, complete:
   - **Loading Pattern** — Distributes ETC over the task duration for autoschedule (Front, Back, Uniform, Contoured, Fixed)
   - **Actuals** — Total hours recorded to date (updated when Post Timesheets job runs; read-only)
   - **Actuals Thru** — Actuals through date for the resource assignment (updated by Post Timesheets job)
   - **Status** — Completed / Started / Not Started (calculated from % Complete)
   - **Start** — Assignment start date (on or after task start; read-only if actuals exist)
   - **Finish** — Assignment finish date (on or before task completion)
   - **ETC** — Remaining hours estimated to complete the task
5. Save changes

## Remove Resource Assignments from Tasks

> [!NOTE]
> If the assignment is associated with posted transactions, it cannot be removed.

1. Open the project > **Tasks** > **Assignments**
2. Select the check box next to the resource
3. Click **Remove**
4. Confirm with **Yes**

## Replace Resources Assigned to Tasks

1. Open the project > **Tasks** > **Assignments**
2. Select the resource to replace
3. Click **Replace** — the Replace Resource page appears showing:
   - Current assignments of the selected resource at the top
   - Available resources and roles with their booking status and dates
4. Select the replacement resource or role
5. Click **Replace**

## Enter Time-Varying ETC Segments (Task Level)

Define variable work effort across the duration of a task assignment using the Fixed loading pattern.

### For Task Assignments

1. Open the project > **Tasks** > **Assignments**
2. Click the **Properties** icon next to the task name
3. In the **Assignments** section, set **Loading Pattern** to **Fixed**
4. In the **Usage** column, click a cell and enter the work effort for that time period
5. Save changes

### For Resource Assignments

1. Open the project > **Tasks** > **Assignments**
2. Click the **Properties** icon next to the task name
3. Click the **Properties** icon next to the resource name
4. Set **Loading Pattern** to **Fixed**
5. In the **ETC Detail** section, enter for each time segment:
   - **Start** — Segment start date
   - **Finish** — Segment finish date
   - **Value** — ETC hours for this segment
6. Save changes

**How segments display:** Consecutive segments with work units are shown as one block. Example:

| Segment | Work Units |
|---------|-----------|
| 11/01 – 11/08 | 32 |
| 11/08 – 11/15 | 28 |
| 11/15 – 11/22 | 0 |
| 11/22 – 11/29 | 32 |

Displays as:

| Segment | Work Units |
|---------|-----------|
| 11/01 – 11/15 | 60 |
| 11/22 – 11/29 | 32 |

## Create Time-Varying ETC Segments

1. Open the resource assignment properties
2. Set **Loading Pattern** to **Fixed**
3. In the **ETC Detail** section, add time segments with Start, Finish, and Value
4. Save changes

When you save, the total ETC for the assignment is recalculated as the sum of all segment values.

## Evenly Distribute ETC Over Segments

Enter a total ETC value without specifying segment values — the ETC is distributed evenly over all time segments.

1. Open resource assignment properties
2. Enter a value in the **ETC** field
3. Save changes

## ETC Distribution and Autoschedule

| Loading Pattern | Autoschedule Behavior |
|-----------------|----------------------|
| Fixed | Preserves user-defined time segments |
| Front / Back / Contoured / Uniform | Autoschedule overwrites defined segments |
| No segments defined | ETC distributed evenly by autoschedule |

## Run Autoschedule After Adjusting ETC

After adjusting resource assignment ETC:
1. Adjust resource assignment ETC
2. Define autoschedule parameters and autoschedule the project
3. Publish the tentative schedule or return to the plan of record (POR)

See [[Autoschedule]] for full details.

## Related Notes

- [[Project Estimates ETC]] — Project-level ETC management
- [[Autoschedule]] — Autoschedule behavior with ETC
- [[Time Recording]] — How resources enter actual time
- [[_MOC Classic PPM]]
