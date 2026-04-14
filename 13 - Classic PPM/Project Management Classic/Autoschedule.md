---
title: Autoschedule (Classic PPM)
tags:
  - howto
  - classic
aliases:
  - Autoschedule
source_pages: 2347-2351
---
# Automatically Create Project Schedules (Classic PPM)

Autoschedule is an automated way to create project schedules. It helps model your plan, generate task dates, and minimize delays and resource over-allocation. Use Autoschedule to update the schedule after small changes, and review the results before publishing them as the plan of record (POR).

## How Autoschedule Works

Autoschedule uses task duration, date constraints, priority order, dependency information, and resource availability to identify the project critical path and schedule tasks. Each task is scheduled to:

- Use availability as early in the project as possible
- Start at the earliest or latest possible time, subject to date constraints
- Minimize the duration of the critical path

The critical path determines the earliest project finish date. Autoschedule makes the following adjustments:

- Determines early and late start and finish dates for each task
- Moves early start dates forward or back as applicable
- Checks for fixed load patterns and adjusts early start/finish to fit
- Builds new ETC curves based on recalculated dates, subtracting from remaining resource availability
- Moves task finish dates or the project finish date to eliminate or minimize resource over-allocation

> [!NOTE]
> To autoschedule in the Gantt view, verify you have the **Project - Schedule In Browser** access right.

> [!NOTE]
> Autoschedule prioritizes constrained tasks over non-constrained tasks. However, autoscheduling overrides this rule if it violates a dependency or over-allocates a resource.
For example: if task 1 depends on task 2 finishing before it can start, but task 1 has a constraint requiring it to finish one day before task 2 finishes, the autoscheduler ignores the task constraint because it violates the dependency.

## Task Estimating Rules

Task estimating rules calculate ETC values automatically based on formulas you define.

### Apply Estimating Rules

1. Open the project and click **Tasks**
2. Open a task and click **Estimating**
3. Select the check box next to the rule and click **Run**
4. On the run estimating rules page, select the check box next to the task and click **Apply ETC from Rules**

### Edit Estimating Rules

1. Open a project and click **Tasks**
2. Open a task and click **Estimating**
3. Edit the following fields:
- **Operator** ג€” Formula operator: addition, subtraction, multiplication, division, exponential, or modulus
- **Value** ג€” The value for the estimating rule:
- *Estimate for Another Task* ג€” Uses estimates from another task on this project
- *Constant* ג€” A fixed integer or decimal value
- *Project Attribute* ג€” A numeric project attribute from the list
4. Click **Add** ג€” The expression is evaluated; if successful, the rule appears in the **Estimated Rule** field. If unsuccessful, an error message displays.
5. Click **Finish and Save**

To edit an execution condition, click its name:
- To define a condition for the default rule, click the **Define execution conditions** link
- Edit the execution condition and save

## Autoschedule and Publish

Publish the tentative schedule using default options. Publishing replaces the POR and unlocks the project.

1. Open the project and click **Tasks**
2. Open the **Tasks** menu and click **Gantt**
3. Click the down arrow for the **Autoschedule With Options** icon and click **Autoschedule with Publish**
4. A tentative schedule is created and the project is locked
5. Publish the tentative schedule or delete it

## Create a Tentative Schedule

A tentative schedule lets you model changes before committing them to the POR. The project is locked while in tentative-schedule mode.

1. Open the project and click **Tasks**
2. Open the **Tasks** menu and click **Gantt**
3. Click the down arrow for the **Autoschedule With Options** icon
4. Complete the scheduling options:

| Option | Description | Default |
|--------|-------------|---------|
| **Autoschedule Date** | Date to begin scheduling tasks | Current date |
| **Ignore Tasks Starting Before** | Exclude tasks starting before this date | ג€” |
| **Ignore Tasks Starting After** | Exclude tasks starting after this date | ג€” |
| **Resource Constraints** | Consider resource availability when scheduling | Selected |
| **Schedule from Finish Date** | Backward schedule from a deadline date; enter the finish date in Autoschedule Date | Cleared |
| **Subnets** | Calculate a separate critical path for each subnet | Cleared |
| **Honor Constraints on Started Tasks** | Respect constraints on tasks with actuals | Selected |
| **Schedule Assignments on Excluded Tasks** | Schedule assignments within the dates of excluded/locked tasks | Cleared |
| **Start Successors on Next Day** | Start successor tasks the day after predecessor finishes (vs. same day) | Cleared |
| **Publish After Scheduling** | Immediately publish tentative schedule as POR | Cleared |

> [!NOTE]
> If **Resource Constraints** is cleared, Autoschedule treats resources as having unlimited availability. This produces the shortest possible schedule but may cause overlapping tasks and resource over-commitment.

5. Click **Autoschedule**

To discard the tentative schedule: click the down arrow for **Autoschedule With Options** and select **Delete Tentative Schedule**. The project is unlocked and POR information is restored.

## Publish a Tentative Schedule

Replaces the POR with the tentative schedule and unlocks the project.

1. Open the project > **Tasks** > **Gantt**
2. Click the down arrow for **Autoschedule With Options** and click **Publish Tentative Schedule**
3. Click **Yes** to confirm

## Unlock Projects in Tentative Schedule Mode

Only the user who locked the project, or a resource with **Administration - Access** rights, can unlock.

1. Open the project > **Tasks** > **Gantt**
2. Click the **Lock** icon in the Gantt view toolbar

## Schedule Subnets

Subnets are sets of project tasks with dependencies among themselves, or a single task with no dependencies. When enabled, Autoschedule calculates a separate critical path for each subnet.

**Benefits of subnets:**
- Calculate and display the critical path of each subproject in a master project (not only the longest path)
- Display multiple concurrent critical paths in complex WBS structures
- Show management tasks and the true project critical path separately

**Steps:**
1. Open the project > **Tasks** > **Gantt**
2. Click the down arrow for **Autoschedule With Options**
3. Select the **Subnets** check box
4. Click **Autoschedule**

## Lock Tasks

Lock individual tasks to prevent their dates from changing during autoschedule.

1. Open an unlocked project and click **Tasks**
2. Click **Open in Scheduler > Clarity Gantt**
3. In the Gantt view, click **Options** and add the **Locked** field to the list
4. Set **Locked** to **Yes** for each task to protect
5. Click **Autoschedule With Options > Create Tentative Schedule**
6. Click **Publish Tentative Schedule** ג€” locked task dates are preserved

## Tentative Schedules and Subprojects

When autoscheduling a master project:
- A tentative schedule is created for the master project and publishable tentative schedules for all subprojects
- If a subproject is locked, an **unpublishable** tentative schedule is created for it
- Publishing the master project's tentative schedule replaces each subproject's POR only if the subproject's tentative schedule is publishable

**Warning is shown when a subproject is locked because:**
- It is locked through a process, by another user, or through scheduling in an external scheduler
- It is marked as **Read Only** on the Subprojects list page
- The current user does not have edit rights to alter the subproject schedule

## Related Notes

- [[Project Schedules Gantt]] ג€” Gantt view and scheduling tools
- [[WBS and Task Dependencies]] ג€” Task structure and dependencies
- [[Project Estimates ETC]] ג€” ETC management
- [[Projects Teams Tasks]] ג€” Project creation overview
- [[_MOC Classic PPM]]

%%Source: p2347-2351%%

