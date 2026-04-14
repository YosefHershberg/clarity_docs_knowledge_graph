---
title: Project Schedules in the Gantt View (Classic PPM)
tags:
  - howto
  - classic
aliases:
  - Project Schedules Gantt
source_pages: 2325-2351
canonical: true
audience: everyone
domain: classic
---
# Project Schedules in the Gantt View (Classic PPM)

The Gantt view is the primary workspace for creating and managing all project tasks and schedules in Classic PPM. Use the Gantt chart to edit tasks and dependencies in a timeline, change task dates, and create finish-start dependencies by dragging and dropping Gantt bars.

## Working in the Gantt View

The Gantt view is divided into a **Work Breakdown Structure (WBS)** on the left and a **Gantt chart** on the right.

- A green progress bar above the task Gantt bar shows how much work is complete for the task
- By default, no object actions display in the Gantt view; contact your administrator to configure the Actions menu
- Changes to the WBS or Gantt chart are stored as **pending edits** until you explicitly save or discard them
- If a save error occurs (e.g., duplicate task ID), resolve the error or discard the problematic edits in the error message window; other pending edits can still be saved

> [!TIP]
> Maximize your work area by promoting the detail panel to the workspace, or by maximizing the page.

By default:
- Late tasks and milestones display with exclamation points on their Gantt bars
- Completed tasks and milestones display with checkmarks on their Gantt bars

## Gantt View Toolbar

Key toolbar actions:

| Action | Description |
|--------|-------------|
| Save | Saves all pending changes explicitly |
| Discard | Discards unsaved changes |
| Insert Task | Inserts a new task in the WBS |
| Copy Task from Template | Copies a task from a project template |
| Add Existing Subproject | Adds an existing subproject to the WBS |
| Create New Subproject | Creates a new subproject and adds it to the WBS |
| Create Subproject from Template | Creates a subproject from a template |
| Assign Resource | Assigns a resource to the selected task |
| Outdent / Indent | Changes the WBS level of the selected task |
| Move Task | Moves the selected task up or down in the WBS |
| Create Dependency | Creates a task dependency between selected tasks |
| Remove Dependency | Removes task dependencies between selected tasks |
| Expand All / Collapse All | Expands or collapses all tasks in the WBS |
| Lock / Unlock | Shows lock status; click to unlock (admin rights required) |
| Autoschedule With Options | Opens autoschedule options dialog |
| Autoschedule and Publish | Autoschedules and immediately publishes the POR |
| Publish Tentative Schedule | Publishes a tentative schedule as the POR |
| Delete Tentative Schedule | Discards the tentative schedule |
| Create Baseline | Creates a project baseline |
| Update Task Baseline | Updates the task baseline for selected tasks |
| Update Cost Totals | Updates ACWP, BCWP, and other cost metrics |
| Delete Task / Remove Subproject | Deletes a task or removes a subproject |
| Legend | Opens the Gantt chart legend |
| Time Scale | Changes the Gantt chart timescale |
| Collapse to WBS | Collapses the Gantt view to show only the WBS |

## Pending Edits

Changes in the Gantt view are stored as pending edits and persist across sessions for the current user. Pending edits include:

- Creating tasks (inline insert) or editing any task attribute
- Assigning resources to tasks; moving task dates with drag-and-drop
- Creating or deleting tasks from task properties
- Indenting or outdenting tasks
- Moving or copying tasks using toolbar icons
- Adding existing subprojects; creating baselines
- Running Autoschedule or opening in external schedulers
- Creating or removing task dependencies using drag-and-drop

> [!NOTE]
> Rollup fields (e.g., parent task dates) are recalculated only after you save. For example, extending a subtask date does not update the parent task dates until you save.

## Locking Projects When Editing

When you start editing in the Gantt view, the project is automatically locked. The lock icon on the toolbar shows who locked it.

- Only the current project is locked — subprojects are not locked
- All project pages become read-only while locked (for all users, including the locking user), except:
  - The current user with the lock can still edit in the Gantt view
  - If **Allow Edit of Allocations when Investment is Locked** is set, users with resource management rights can add staff
- The project is unlocked as soon as you save or discard your edits
- Administrators with **Administration - Application Setup** rights can force-unlock the project
- Opening in an external scheduler locks the Gantt view for all users including the current user

## Open Gantt View in a Separate Window

The Gantt view can be opened in a separate browser window:
- Click the **Gantt** icon for a project from the projects list or the My Projects portlet
- Open the project, then open **Tasks** menu and click **Gantt**

Rules for separate Gantt windows:
- You can open multiple Gantt windows for different projects simultaneously
- Only one Gantt window per project at a time
- Gantt windows do not refresh automatically — manually refresh to see changes from another window
- Drilling down into a subproject proxy task opens a separate Gantt window for that project

## Gantt Chart Legend

| Indicator | Description |
|-----------|-------------|
| Task with checkmark | Completed — status = Completed, no remaining work |
| Task with exclamation | Late task |
| Summary task bar | Summary task grouping |
| External task (chart) | Task from another project displayed in the Gantt chart |
| Subproject (chart) | Subproject displayed in the Gantt chart |
| External task (WBS) | External task entry in the WBS list |
| Subproject (WBS) | Subproject entry in the WBS list |
| Diamond | Milestone |
| Late diamond | Late milestone |
| External diamond | External milestone |
| Red line | Critical path |
| Dashed line | Link to hidden task |

## Change Gantt Chart Timescale

1. Open the project > **Tasks** menu > **Gantt**
2. Click the **Time Scale** icon on the toolbar
3. Select the desired timescale

Use the single arrows at the top left/right of the Gantt chart to scroll one time unit at a time; double arrows jump to the next set of time periods.

## Print the Gantt View

1. Click the **Printable View** icon on the Gantt chart — a read-only view opens in a new window
2. Maximum 300 tasks visible at a time
3. Before printing, enable background colors and images in browser settings:
   - **IE / Firefox**: Use **Page Setup** in the browser menu (use Alt key to show the menu)
   - **Chrome**: Use the **Print** option in the browser menu

## Task Cost Metrics

Display cost metrics in the Gantt view without requiring a current baseline. These fields are not shown by default — personalize the page or have your administrator configure the Gantt list column view.

| Metric | Formula | Baseline Required |
|--------|---------|-------------------|
| **ACWP** | Sum of actual costs posted up to as-of date | No |
| **ETC (Cost)** | `Remaining labor cost + remaining nonlabor cost` | No |
| **EAC (T)** | `ACWP + ETC` | No |

ACWP is calculated at the assignment, detail-task, summary-task, and project levels (see [[Earned Value and Metrics]] for full reference).

## Work Breakdown Structure (WBS)

The WBS is a hierarchical list of tasks showing relationships between tasks. It displays in the Gantt view alongside the Gantt chart.

- All new tasks are added at the same level in the WBS
- Group detail tasks under summary tasks using indent/outdent
- You can create an unlimited number of hierarchical levels
- Filter the list to find specific tasks based on simple or complex criteria

### Task Types

**Summary task** — A task with one or more subtasks nested beneath it. Dates are derived from the earliest start and latest finish of its detail tasks. Total Effort and cost are calculated from detail task data.

**Detail task** — A task with assignments tracked for effort. Can be a Level 1 task or a subtask. Level 1 tasks cannot be outdented further.

**Milestone** — A zero-duration task marking a key event.

**Effort task** — A special task auto-created when the **Allow Effort Task Creation** setting is enabled and staff are added before any tasks are created (or all tasks are key tasks). Team members are automatically assigned to the effort task with ETC based on their allocation.

> [!NOTE]
> You cannot assign resources to milestone or summary tasks.

### Organize Tasks in the WBS

- Use toolbar icons **Outdent**, **Indent**, and **Move Tasks** to organize tasks
- Move tasks by selecting and dragging, or using the Move icon
- Moving a task also moves all its subtasks
- You cannot move tasks across or between projects
- Dependencies are not removed when a task is moved

### Expand and Collapse the WBS

- Click the **(+)** / **(-)** icon next to a summary task to expand/collapse it
- Use **Expand All** and **Collapse All** toolbar icons for all tasks
- Expand/collapse state is retained across Classic PPM sessions

## Edit Project Tasks

### Edit Tasks in the WBS

Edit task fields directly inline in the Gantt view's WBS. For subprojects, expand the subproject in the WBS and click the task to open the subproject's Gantt view.

**To delete a task or milestone:**
- The resource assignment is removed
- If it is a summary task, its detail tasks are NOT deleted (which may affect their schedule)
- If the task has resource assignments with posted actuals, it cannot be deleted — instead, it is placed in a "deleted tasks" phase with ETC set to zero and status set to "Complete"

> [!NOTE]
> Tasks can be deleted only if they are not associated with unposted transactions or posted assignment actuals.

**Key task fields editable in the WBS:**

| Field | Description |
|-------|-------------|
| **Task** | Task name (max 150 characters) |
| **Start** | Assignment start date; must be on or after task start date; read-only if actuals exist |
| **Finish** | Assignment finish date; must be on or before task completion date |
| **% Complete** | 0 = not started, 1–99 = in progress, 100 = complete |
| **Assigned Resources** | Resource name |

### Edit Tasks in the Gantt Chart

Edit start and finish dates by dragging the Gantt bar:
- **Left/right edge** — Changes the start date (left) or finish date (right) without affecting the other
- **Middle of bar** — Changes both start and finish dates by an equal amount

> [!NOTE]
> If actuals are posted against a task, you cannot change the start date by dragging.

A red triangle in the upper-left corner of a field indicates an unsaved change. The triangle clears after saving.

### Edit Task Properties

1. Open the project > **Tasks**
2. Click the task name
3. Edit task fields:

| Field | Description |
|-------|-------------|
| **Status** | Auto-calculated: Not Started / Started / Completed |
| **% Complete** | 0 / 1–99 / 100 |
| **Guidelines** | File path for task guidelines document |
| **Charge Code** | Task-level charge code (overrides project-level charge code) |
| **Must Start On** | Hard date constraint for autoscheduling |
| **Must Finish On** | Hard date constraint for autoscheduling |
| **Start No Earlier Than** | Earliest possible start (autoscheduling constraint) |
| **Start No Later Than** | Latest possible start (autoscheduling constraint) |
| **Finish No Earlier Than** | Earliest possible finish (autoscheduling constraint) |
| **Finish No Later Than** | Latest possible finish (autoscheduling constraint) |
| **Exclude from Autoscheduling** | Excludes task dates from autoschedule. Default: Cleared |

> [!NOTE]
> A locked task cannot be edited. Click **Unlock** to enable editing.

> [!NOTE]
> **Exclude from Autoscheduling** works together with **Schedule Assignments on Excluded Tasks** on the autoschedule options page. If both are set, assignments can be rescheduled within the task's fixed start/finish dates.

4. Save changes

### Edit Task Duration in the Gantt Chart

Task duration = number of working days between start and finish. Duration is auto-calculated after saving.

| Field Edited | Result |
|--------------|--------|
| Task Duration | Finish date and Gantt bar change |
| Task Finish Date | Duration changes |
| Task Start Date | Finish date changes without impacting duration |

Duration cannot be edited for milestone or summary tasks, or when a timesheet is already submitted for that period.

**Decimal duration handling by application:**

| Application | Behavior for 1.2, 1.35, or 1.99 |
|-------------|----------------------------------|
| Classic PPM | Rounds to 1, 1, or 2; finish date adjusts |
| Microsoft Project | No rounding; saves 1.2, 1.35, or 1.99 as-is |
| Open Workbench | Rounds to 1, 1, or 2; finish date adjusts |

> [!NOTE]
> Duration is calculated based on the base calendar. Exceptions in the base calendar automatically affect the duration value.

### Set Default Earned Value Options for Tasks

The Earned Value section does not display by default on the task properties page. Add it via page personalization or administrator Studio configuration.

1. Open the project > **Tasks**
2. Click the task name
3. In the **Earned Value** section, complete:
   - **EV Calculation Method** — Task-level method override (values same as project level). Default: Percent Complete
   - **BCWP Override** — Manually enter BCWP to override the system-calculated value; used in all EV calculations requiring BCWP
   - **BCWP** — System-calculated (display-only after baseline or cost totals update)
   - **Earned Value Last Updated** — Display-only date of last update
4. Save changes

> [!TIP]
> Enter a BCWP Override value only if you are tracking and calculating earned value in an external system and not using Classic PPM for EV calculations.

### Set Time Tracking at the Task Level

Control which tasks are open or closed for time entry. Prevents resources from accidentally logging time to incorrect tasks.

**When to close a task for time entry:**
- The project is multi-phased and future tasks should not receive time yet
- A task is complete and should receive no further actuals
- The task is on the critical path and errant actuals could shift project dates

**Steps:**
1. From the task properties menu, click **Settings** to edit the **Open for Time Entry** field on the settings page
2. Alternatively, add the **Open for Time Entry** field to any editable task page layout using the **Configure** option

## Task ETC — Estimating

### Set Up Top-Down Estimating for Tasks

Top-down estimating distributes a total ETC amount to detail tasks by percentage.

**Step 1 — Zero out existing estimates:**
1. Open the project > **Tasks** > open the task > **Estimating**
2. Set **ETC** to 0 and click **Apply**

**Step 2 — Enter distribution percentages:**
1. Open the task > **Estimating**
2. Set **Top-down %** for the task
3. Save changes

**Step 3 — Apply the top-down estimate:**
1. Open the task > **Estimating**
2. Enter the ETC amount in the **ETC** field
3. Click **Preview** to see how the amount distributes to detail tasks
4. Click **Apply** to save the distribution

### Create a Task Estimating Rule

Estimating rules calculate ETC automatically based on a formula. Multiple rules can exist per task; only one serves as the default.

1. Open the project > **Tasks** > open the task > **Estimating**
2. In the **Task Estimating Rules** section, click **New**
3. Complete the fields:
   - **Operator** — addition, subtraction, multiplication, division, exponential, or modulus
   - **Value** — Estimate for Another Task / Constant / Project Attribute. Default: Estimate for Another Task
4. Click **Add** — expression is evaluated; the new rule appears in the **Estimating Rule** field if successful
5. Click **Finish**

> [!NOTE]
> You can enter or paste a formula directly into the **Estimating Rule** field to bypass the Operator and Value fields, then click **Evaluate**.

### Create Execution Conditions

Execution conditions determine when a rule runs. Required for all non-default rules.

1. Open the task > **Estimating**
2. Click **[Define execution conditions]** next to an existing rule
3. Select **Object**: Project or Task
4. Select **Field** or **Operation**, then select a value
5. Select **Operator** (= or !=) and define **Right** (Constant or Object)
6. Click **Add**, then **Evaluate**, then **Save and Return**

### Compare Generated ETC with Current ETC

1. Open the task > **Estimating**
2. Select the rule and click **Run**
3. View:
   - **Current ETC** — ETC currently in place
   - **ETC from Rules** — ETC generated by the applied rule

### Apply ETC from Task Estimating Rules

1. Open the task > **Estimating**
2. Select the check box next to the rule and click **Run**
3. Select the check box next to the tasks to apply ETC to
4. Click **Apply ETC from Rules**

Rules are evaluated in list order. If no rule meets its execution conditions, the default rule runs. Rules can be applied at the phase/summary-task level to affect all detail tasks, or at the individual task level.

## Task Dependencies

Task dependencies let you designate predecessor or successor tasks and specify the type of relationship. Dependencies display as lines in the Gantt chart.

### Dependency Types

| Type | Description |
|------|-------------|
| **Finish-Start (FS)** | Predecessor must finish before successor can start. Most common. |
| **Start-Start (SS)** | Predecessor must start before successor can start |
| **Start-Finish (SF)** | Predecessor must start before successor can finish |
| **Finish-Finish (FF)** | Predecessor must finish before successor can finish |

### Create Task Dependencies (Same Project)

1. Open the project > **Tasks** > **Gantt**
2. Do one of the following:
   - In the WBS, select the check boxes next to two tasks and click the **Link** icon — creates a finish-start dependency
   - In the Gantt chart, drag-and-drop a Gantt bar edge onto another bar edge:
     - Right edge → Left edge: Finish-Start
     - Left edge → Right edge: Start-Finish
     - Left edge → Left edge: Start-Start
     - Right edge → Right edge: Finish-Finish

> [!NOTE]
> You cannot create dependencies to or from summary tasks. Once created with drag-and-drop, you cannot change the dependency type by dragging — use the task properties page to edit. You can move tasks without affecting existing dependencies.

### Drag-and-Drop Guidelines

- Place cursor near the **start** of a bar to change start date only (cursor = left-right arrow)
- Place cursor in the **middle** of a bar to change both start and end dates equally (cursor = four-way arrow)
- Place cursor near the **end** of a bar to change end date only (cursor = left-right arrow)

> [!NOTE]
> If pending edits exist, drag-to-create-dependencies and drag-to-move-in-WBS are unavailable. You can still change task dates.

### Edit Task Dependencies

1. Open the project > **Tasks** > click the task name
2. Open **Properties** menu > **Main** > **Dependencies**
3. Click the link for the dependent task
4. Edit:
   - **Relationship** — Predecessor or Successor. Default: Predecessor
   - **Type** — FS, SS, SF, FF. Default: Finish-Start
   - **Lag** — Lag period between tasks. Default: 0.00
   - **Lag Type** — Daily or Percent of predecessor duration. Default: Daily
5. Save changes

### Create External Task Dependencies

Dependencies can be created between tasks in different projects.

1. Open the task > **Properties** > **Main** > **Dependencies**
2. Click **New** > select the external task > click **Next**
3. Complete fields (same as editing internal dependencies)
4. Save changes

Externally dependent tasks are displayed in the Gantt view before or after the current task based on the relationship type. The Gantt view does not prefix the external project name — add the **Investment Name** field to the PPM Gantt configuration to see the associated project.

### Dependency Chains

A dependency chain links multiple tasks or milestones in sequence as a series of finish-start dependencies with zero lag. Each task in the chain relies on the previous task completing before it can start.

## Resource Utilization in the Gantt View

Resource utilization shows the effort required to complete each task. Access it from **Tasks** menu > **Resource Utilization**.

### Color Coding

| Color | Meaning |
|-------|---------|
| Blue | Total allocation for the task period (should equal the Total Effort column value) |
| Yellow | Resource allocated at or under availability |
| Red | Resource over-allocated (booked hours exceed availability) |
| Green | Actuals recorded by the resource for that period |

The **Total** row at the bottom shows aggregate allocation across all resources. Red in this row means resources are over-allocated for that period.

> [!NOTE]
> A task name suffixed with a plus sign (+) has child tasks. Click the sign to expand and view utilization for child and summary tasks.

> [!WARNING]
> Assign staff to tasks before viewing resource utilization.

### Edit Resource Utilization Fields

1. Open a project > **Tasks** menu > **Resource Utilization**
2. Edit start and finish dates for the task (cannot edit if task is started or finished)
3. Save changes

Changes to task name or ID are reflected on list and WBS pages and on staff assignment pages.

## Open Projects in Open Workbench

1. Open the project > **Tasks**
2. From the **Open in Scheduler** menu, select **Workbench**
3. Select:
   - **Read-Only** — Opens the project unlocked in Open Workbench
   - **Read-Write** — Opens and locks the project in Classic PPM. Default: Read-Write
4. Click **Go**

> [!NOTE]
> You cannot open projects with the same project ID and `.rmp` filename in Open Workbench from different Classic PPM servers. Delete the locally saved `.rmp` file before opening the duplicate.

## Related Notes

- [[Autoschedule]] — Full autoschedule options and tentative schedules
- [[WBS and Task Dependencies]] — Detailed WBS management
- [[Resource Assignments]] — Resource assignment management
- [[Project Estimates ETC]] — ETC and estimating
- [[Earned Value and Metrics]] — EV metrics and calculations
- [[_MOC Classic PPM]]

%%Source: p2325-2351%%
