---
title: WBS and Task Dependencies (Classic PPM)
tags:
  - howto
  - classic
aliases:
  - WBS and Task Dependencies
source_pages: 2330-2346
canonical: true
audience: everyone
domain: classic
---
# Work Breakdown Structure (WBS) and Task Dependencies (Classic PPM)

The Work Breakdown Structure (WBS) is a hierarchical list of tasks that shows the relationships between tasks. It displays in the Gantt view alongside the Gantt chart and is used to create, organize, and manage all project tasks.

## WBS Basics

- All new tasks are added at the same level in the WBS initially
- Group detail tasks under summary tasks using indent/outdent
- You can create an unlimited number of hierarchical levels
- Filter the task list using simple or complex filter criteria
- Task order and level in the WBS indicate relationships

> [!NOTE]
> You cannot assign resources to milestone or summary tasks.

### Task Types

**Detail task** — A task with resource assignments tracked for effort. Can be a Level 1 task or a subtask under a summary task.

**Summary task** — A task with one or more subtasks nested beneath it. Dates are driven by the earliest start and latest finish of its detail tasks. Total Effort and cost are calculated from detail task data. Level 1 summary tasks cannot be outdented further.

**Milestone** — Zero-duration task marking a key event.

**Effort task** — Auto-created when the **Allow Effort Task Creation** setting is enabled and:
- Staff is added to a project before any tasks are created
- Staff is added to an idea that is converted to a project
- All existing tasks are flagged as key tasks

Team members are automatically assigned to the effort task with ETC based on their allocation. To prevent auto-creation, create at least one non-key task before adding team members.

## Organize Tasks in the WBS

Use the Gantt view toolbar icons:
- **Indent** — Move task one level deeper (becomes a subtask)
- **Outdent** — Move task one level higher
- **Move Tasks** — Reposition task up or down in the WBS

To move tasks by drag-and-drop:
- Select a task check box and drag to the new position
- Moving a summary task also moves all its nested subtasks
- You cannot move tasks across or between projects
- Existing dependencies are not removed when a task is moved

To expand/collapse:
- Click the **(+)** / **(-)** icon next to a summary task
- Use **Expand All** / **Collapse All** toolbar icons for all tasks
- The expand/collapse state is retained across Classic PPM sessions

## Edit Tasks in the WBS

Edit task fields directly inline in the Gantt view's WBS.

For subprojects: expand the subproject in the WBS and click the task to open the subproject's Gantt view.

**To delete a task or milestone:**
- The resource assignment is removed
- If a summary task is deleted, its detail tasks are NOT deleted (may affect their schedule)
- If the task has resource assignments with posted actuals, it cannot be deleted — it is placed in a "deleted tasks" phase with ETC set to zero and status set to "Complete"

> [!NOTE]
> Tasks can be deleted only if not associated with unposted transactions or posted assignment actuals.

**Key WBS fields:**

| Field | Description |
|-------|-------------|
| **Task** | Task name; max 150 characters |
| **Start** | Assignment start date (must be on or after task start; read-only if actuals exist) |
| **Finish** | Assignment finish date (must be on or before task completion) |
| **% Complete** | 0 = not started; 1–99 = in progress; 100 = complete |
| **Assigned Resources** | Names of resources assigned to the task |

## Edit Task Properties

1. Open the project > **Tasks**
2. Click the task name

> [!NOTE]
> A locked task cannot be edited. Click **Unlock** to enable editing.

**Task fields:**

| Field | Description |
|-------|-------------|
| **Status** | Auto-calculated: Not Started / Started / Completed |
| **% Complete** | 0 / 1–99 / 100 |
| **Guidelines** | File path for task guidelines (e.g., `\\Clarity\Guidelines\Plan.doc`) |
| **Charge Code** | Task-level code; overrides project-level charge code |
| **Must Start On** | Hard start date constraint for autoschedule |
| **Must Finish On** | Hard finish date constraint for autoschedule |
| **Start No Earlier Than** | Earliest possible start (autoschedule constraint) |
| **Start No Later Than** | Latest possible start (autoschedule constraint) |
| **Finish No Earlier Than** | Earliest possible finish (autoschedule constraint) |
| **Finish No Later Than** | Latest possible finish (autoschedule constraint) |
| **Exclude from Autoscheduling** | Excludes task dates from autoscheduling. Default: Cleared |

> [!NOTE]
> **Exclude from Autoscheduling** works with the **Schedule Assignments on Excluded Tasks** option on the autoschedule page. If both are enabled, autoschedule can adjust assignment dates within the task's fixed start/finish boundaries.

3. Save changes

## Edit Task Duration

Task duration = number of working days between start and finish. Duration auto-calculates after saving.

| Field Edited | Result |
|--------------|--------|
| Task Duration | Finish date changes; Gantt bar updates |
| Task Finish Date | Duration recalculates |
| Task Start Date | Finish date adjusts without affecting duration |

Cannot edit duration for milestones, summary tasks, or when a timesheet is already submitted for that period.

> [!NOTE]
> Duration is calculated based on the base calendar. Calendar exceptions automatically affect duration.

**Decimal duration behavior:**

| Application | Input 1.2, 1.35, 1.99 | Result |
|-------------|------------------------|--------|
| Classic PPM | Rounds to 1, 1, 2 | Finish date adjusts |
| Microsoft Project | No rounding | Saves as-is |
| Open Workbench | Rounds to 1, 1, 2 | Finish date adjusts |

## Set Time Tracking at the Task Level

Control which tasks are open or closed for time entry to prevent accidental actuals.

1. Open the task properties > **Settings**
2. Set the **Open for Time Entry** field

Alternatively, add the **Open for Time Entry** field to any editable task page layout via the **Configure** option.

**When to close a task:**
- Multi-phased projects where future tasks should not receive time yet
- Completed tasks that should not receive further actuals
- Critical path tasks where errant actuals could shift project dates

## Set Task Earned Value Options

The Earned Value section is hidden by default. Add it to the task properties page via personalization or Studio configuration.

1. Open the task > **Earned Value** section
2. Complete:
   - **EV Calculation Method** — Task-level EV method override. Default: Percent Complete
   - **BCWP Override** — Manually entered BCWP; overrides system-calculated value for all EV metrics
   - **BCWP** — Display-only; system-calculated when baseline is created or cost totals updated
   - **Earned Value Last Updated** — Display-only date
3. Save changes

> [!TIP]
> Enter BCWP Override only when tracking earned value in an external system and not using Classic PPM for EV calculations.

## Task ETC Estimating

### Set Up Top-Down Estimating

**Step 1 — Zero out existing estimates:**
1. Open the task > **Estimating**
2. Set **ETC** to 0
3. Click **Apply**

**Step 2 — Enter distribution percentages:**
1. Open the task > **Estimating**
2. Set **Top-down %** for this task
3. Save

**Step 3 — Apply the top-down ETC:**
1. Open the task > **Estimating**
2. Enter the total ETC in the **ETC** field
3. Click **Preview** to verify the distribution
4. Click **Apply** to save

### Create a Task Estimating Rule

1. Open the task > **Estimating** > **Task Estimating Rules** section > **New**
2. Complete:
   - **Operator** — addition, subtraction, multiplication, division, exponential, or modulus
   - **Value** — Estimate for Another Task / Constant / Project Attribute. Default: Estimate for Another Task
3. Click **Add** — rule appears in the **Estimating Rule** field if valid
4. Click **Finish**

> [!NOTE]
> You can enter a formula directly into the **Estimating Rule** field and click **Evaluate** to bypass the Operator/Value fields.

### Create Execution Conditions

Required for all non-default rules.

1. Open the task > **Estimating** > click **[Define execution conditions]**
2. Select **Object**: Project or Task
3. Select a field and value; choose **Operator** (= or !=) and **Right** value
4. Click **Add**, then **Evaluate**, then **Save and Return**

### Apply ETC from Task Estimating Rules

1. Open the task > **Estimating**
2. Select the rule check box > click **Run**
3. Select the tasks to apply ETC to
4. Click **Apply ETC from Rules**

Rules execute in list order. If no rule meets its conditions, the default rule runs.

## Task Dependencies

Task dependencies define the sequence relationship between tasks. They display as lines in the Gantt chart.

### Dependency Types

| Type | Abbreviation | Description |
|------|-------------|-------------|
| Finish-Start | FS | Predecessor must finish before successor starts. Most common. |
| Start-Start | SS | Predecessor must start before successor starts |
| Start-Finish | SF | Predecessor must start before successor finishes |
| Finish-Finish | FF | Predecessor must finish before successor finishes |

### Create Task Dependencies (Same Project)

1. Open the project > **Tasks** > **Gantt**
2. Do one of the following:
   - Select check boxes next to two tasks and click the **Link** icon (creates FS by default)
   - Drag Gantt bar edges:
     - Right edge → Left edge of target: Finish-Start
     - Left edge → Right edge of target: Start-Finish
     - Left edge → Left edge of target: Start-Start
     - Right edge → Right edge of target: Finish-Finish

> [!NOTE]
> Cannot create dependencies to or from summary tasks. After creation, change the dependency type via task properties, not drag-and-drop.

> [!NOTE]
> If pending edits exist, drag-to-create-dependencies and WBS drag-to-move are unavailable. Task date dragging still works.

### Drag-and-Drop Guidelines

- Cursor near **start** of bar → changes start date only (left-right arrow cursor)
- Cursor in **middle** of bar → changes both start and end dates equally (four-way arrow cursor)
- Cursor near **end** of bar → changes end date only (left-right arrow cursor)
- Drop after dragging → changes appear as pending edits in the WBS
- Press **Escape** while dragging to cancel

### Edit Task Dependencies

1. Open the task > **Properties** > **Main** > **Dependencies**
2. Click the dependent task link
3. Edit:
   - **Relationship** — Predecessor or Successor. Default: Predecessor
   - **Type** — FS / SS / SF / FF. Default: Finish-Start
   - **Lag** — Lag period between tasks. Default: 0.00
   - **Lag Type** — Daily or Percent of predecessor duration. Default: Daily
4. Save changes

**Lag examples:**
- Lag = 5, Lag Type = Daily → 5-day gap between tasks
- Lag = 20, Lag Type = Percent, Duration = 100 days → 20-day gap (20% of 100)

### Dependency Chains

A sequence of finish-start dependencies with zero lag between tasks or milestones. Each task relies on the previous one completing before it can start.

Example: Task 1 → Task 2 → Task 3: each task can start only after the preceding one completes.

### Create External Task Dependencies

Create dependencies between tasks in different projects.

1. Open the task > **Properties** > **Main** > **Dependencies** > **New**
2. Select the external task and click **Next**
3. Complete fields (same as editing internal dependencies, plus **Dependent Investment** and **Dependent Task** display fields)
4. Save changes

Externally dependent tasks are shown in the Gantt view before or after the current task based on the relationship. The Gantt does not prefix the external project name — add the **Investment Name** field to the PPM Gantt configuration to see the associated project.

## Resource Utilization View

Access from **Tasks** menu > **Resource Utilization** to see effort for each task.

**Color coding:**

| Color | Meaning |
|-------|---------|
| Blue | Total allocation for the task (should equal Total Effort column) |
| Yellow | Allocated at or under availability |
| Red | Over-allocated |
| Green | Actuals recorded for that period |

> [!WARNING]
> Assign staff to tasks before viewing resource utilization.

**Edit from Resource Utilization view:**
1. Open a project > **Tasks** > **Resource Utilization**
2. Edit **Start** or **Finish** dates (unavailable if task is already started or finished)
3. Save changes

A task name with a plus sign (+) suffix has child tasks — click to expand.

## Open Projects in Open Workbench

1. Open the project > **Tasks**
2. From **Open in Scheduler** menu, select **Workbench**
3. Select **Read-Only** or **Read-Write** (default: Read-Write)
4. Click **Go**

> [!NOTE]
> You cannot open projects with the same project ID and `.rmp` filename in Open Workbench from different Classic PPM servers. Delete the locally saved `.rmp` file first.

## Related Notes

- [[Project Schedules Gantt]] — Gantt view toolbar and chart operations
- [[Autoschedule]] — Autoschedule with dependency-aware scheduling
- [[Resource Assignments]] — Assignment-level ETC management
- [[Project Estimates ETC]] — Project-level estimating
- [[Earned Value and Metrics]] — EV metrics reference
- [[_MOC Classic PPM]]

%%Source: p2330-2346%%
