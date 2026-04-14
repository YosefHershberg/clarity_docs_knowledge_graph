---
title: Tasks, Phases, and Milestones
tags:
  - concept
  - howto
aliases:
  - Tasks
  - Phases
  - Milestones
  - To-Dos
  - Work Breakdown Structure
  - WBS
canonical: true
audience: pm
domain: projects
---

# Tasks, Phases, and Milestones

Clarity PPM provides a full work breakdown structure (WBS) with **phases**, **tasks**, **milestones**, and **to-dos**. These can be managed in three layouts: **Grid**, **Board**, and **Timeline (Gantt)**. Tasks are the primary unit of work tracked against time, resources, and completion.

%%Source: p1041-1075%%

---

## Core Concepts

### Task Types

| Type | Description | Has Duration? | Has Resources? |
|------|-------------|:---:|:---:|
| **Phase** | Container that groups related tasks | Yes (spans child tasks) | No |
| **Milestone** | Zero-duration checkpoint or deliverable | No (single date) | No |
| **Task** | Unit of work with start/finish dates and resource assignments | Yes | Yes |
| **To-Do** | Simple checkbox item on a task or standalone; not scheduled | No | No |

> [!note] **Phases** cannot have resource assignments directly. Resources are assigned to tasks within phases. Phase dates roll up from the earliest/latest child task dates.

> [!note] **Milestones** are represented as a diamond on the timeline. They mark key events (e.g., "Phase 1 complete," "Go-live") and can be linked to tasks via dependencies.

---

## Grid Layout

The Grid is a spreadsheet-style view, ideal for bulk entry and editing.

### Anatomy of the Grid
- Rows represent tasks, phases, and milestones in WBS order.
- Columns show task attributes (name, start, finish, duration, assigned resources, % complete, ETC, etc.).
- Indentation indicates hierarchy (phases contain tasks).

### Adding Tasks

#### Add a Single Task
1. Open the project → **Tasks** module → **Grid** layout.
2. Click **+ Add Task** at the bottom of the list, or press **Enter** at the last row.
3. Type the task name and press **Tab** to move to the next field.
4. Set **Start**, **Finish** (or **Duration**), and **% Complete**.
5. Click **Save** or press **Enter**.

#### Add a Phase
1. Click **+ Add Phase**.
2. Name the phase.
3. Add tasks inside the phase by clicking **+ Add Task** while the phase is selected, or by indenting an existing task.

#### Add a Milestone
1. Click the **+** dropdown → **Add Milestone**.
2. Set the milestone name and date (start = finish for milestones).

#### Indenting and Outdenting Tasks (WBS Hierarchy)
- Select a task row.
- Click the **Indent** (→) button to make it a child of the task above it.
- Click **Outdent** (←) to promote it one level up.

> [!tip] You can multi-select rows (hold Shift or Ctrl) and indent/outdent in bulk.

### Editing Tasks Inline
- Click any cell to edit it directly.
- Press **Tab** to move between cells, **Enter** to confirm.

### Reordering Tasks
- Drag the **drag handle** (six-dot icon) on the left of a row to reorder.
- Alternatively, use **Move Up / Move Down** from the row's context menu.

### Grid Columns

| Column | Description |
|--------|-------------|
| **Name** | Task name (editable inline) |
| **ID** | Auto-assigned task ID |
| **Status** | Not Started / In Progress / Complete / On Hold |
| **Start** | Planned start date |
| **Finish** | Planned finish date |
| **Duration** | Working days between start and finish |
| **Assigned To** | Resources assigned to the task |
| **% Complete** | Progress; can be manually set or calculated |
| **ETC** | Estimate to Complete (remaining hours) |
| **Actuals** | Hours logged via timesheets |
| **Dependencies** | Predecessor task links |
| **Constraint** | Scheduling constraint (ASAP, ALAP, Must Start On, etc.) |

---

## Board Layout

The Board is a Kanban-style view ideal for agile or status-driven workflows.

### Board Columns
- Default columns correspond to **task status**: Not Started, In Progress, Complete.
- Administrators can configure custom board columns via the project Blueprint.

### Using the Board
- Each task appears as a **card** showing name, assigned resource, and due date.
- **Drag cards** between columns to change status.
- Click a card to open its full detail panel.
- Click **+ Add** in a column to create a new task with that status.

> [!tip] The board is most useful for sprint-style work where tasks move across status columns regularly.

---

## Timeline Layout (Gantt)

The Timeline (Gantt chart) shows tasks as horizontal bars on a calendar.

### Navigating the Timeline
- Use the **Zoom** controls to view: Days / Weeks / Months / Quarters / Years.
- Scroll left/right to navigate the time axis.
- The left panel shows the task hierarchy; the right panel shows bars.

### Bars and Colors
- **Task bars** are blue by default.
- **Milestone diamonds** mark zero-duration checkpoints.
- **Phase bars** span the full range of their child tasks.
- **Critical path** tasks are highlighted (if critical path display is enabled).

### Creating Dependencies
1. Hover over a task bar until **dependency handles** appear (circles at the start and end of the bar).
2. Drag from one task's end handle to another task's start handle.
3. A **dependency arrow** is drawn between them.
4. Double-click the dependency arrow to set **Lag** (delay after predecessor finishes).

#### Dependency Types
| Type | Abbreviation | Meaning |
|------|:---:|---------|
| Finish-to-Start | FS | Successor starts after predecessor finishes (most common) |
| Start-to-Start | SS | Successor starts when predecessor starts |
| Finish-to-Finish | FF | Successor finishes when predecessor finishes |
| Start-to-Finish | SF | Successor finishes when predecessor starts |

> [!warning] **Circular dependencies** (A depends on B, B depends on A) are not allowed and will produce a validation error.

### Adjusting Bars
- Drag a bar **left/right** to change its start/finish date.
- Drag the **right edge** of a bar to change its duration.
- Hold **Shift** while dragging to also move all dependent tasks.

---

## Task Detail Panel

Click any task to open its **detail panel** on the right side. Fields include:

| Section | Fields |
|---------|--------|
| **General** | Name, ID, Status, Priority, Description |
| **Dates** | Start, Finish, Duration, Constraint Type |
| **Assignments** | Resources assigned; hours per resource |
| **Progress** | % Complete, ETC, Actuals |
| **Dependencies** | Predecessor and successor links |
| **To-Dos** | Checklist items within this task |
| **Notes** | Free-text notes |

---

## To-Dos

**To-Dos** are simple checklist items that can be attached to a task or exist at the project level.

### Creating To-Dos on a Task
1. Open the task detail panel.
2. Scroll to the **To-Dos** section.
3. Click **+ Add To-Do**.
4. Enter the to-do text and optionally assign it to a resource.
5. Check the box to mark it complete.

> [!tip] To-Dos are visible in the **My Work** view for the assigned resource, making them useful for tracking small, non-scheduled work items.

---

## Assigning Resources to Tasks

1. Open the task detail panel.
2. In the **Assignments** section, click **+ Assign**.
3. Search for a resource (only project team members appear; see [[Staffing]]).
4. Set the **hours** or **% of task** for the assignment.
5. Click **Add**.

> [!note] If a resource is not yet on the project team, assigning them to a task automatically adds them as a staff member with a Soft booking.

---

## % Complete Calculation

| Mode | How It Works |
|------|-------------|
| **Manual** | PM directly enters the % complete on each task |
| **Based on Hours** | % = Actuals / (Actuals + ETC) × 100 |
| **Based on Task Count** | % = completed tasks / total tasks × 100 |

The project-level % complete rolls up from task values based on the method configured in the Blueprint.

---

## Keyboard Shortcuts (Grid Layout)

| Shortcut | Action |
|---------|--------|
| **Enter** | Add new row / confirm edit |
| **Tab** | Move to next cell |
| **Shift+Tab** | Move to previous cell |
| **Delete / Backspace** | Clear cell content |
| **Ctrl+Z** | Undo last action |
| **Ctrl+S** | Save all changes |
| **F2** | Edit selected cell |

---

## Calendar Layout for Tasks

The **Calendar** layout displays project tasks in a weekly or monthly view based on their Finish date. It is available inside a project's Tasks module.

### Key Features

- Tasks without a Finish date appear in the **Unscheduled** section.
- Toggle between **Monthly** and **Weekly** display.
- Use the **Show Weekend** toggle to show or hide weekends.
- **Drag and drop** tasks from one date to another to update their Finish date.
- You cannot drag a task from the calendar back to the Unscheduled state.
- Right-click a task card to edit or delete it.
- Infinite scrolling supports large record sets.

### Weekly vs. Monthly Display

| Display | Card Shows |
|---------|------------|
| **Weekly** | Resource avatars, Task Name, Investment Name, Task Status |
| **Monthly** | Task Name and resource avatars; overflow shown as a counter |

> [!warning] Some drag-and-drop and editing actions may be restricted by task rules — for example, you cannot set Task Status to Completed if ETC is not zero, or move dates if actuals have been posted.

---

## Export Timeline to PDF

You can export the Timeline (Gantt) layout of a project's Tasks module to a PDF file for sharing.

### Steps

1. Open the project and navigate to the **Tasks** module.
2. Switch to the **Timeline** layout.
3. Configure the view as desired (zoom level, visible columns, date range).
4. Click **Export** (or the export icon) and select **Export to PDF**.
5. Select the PDF size and orientation.
6. Click **Download**. The PDF is generated and available via the notification area.

---

## Copy Tasks From Investments

You can copy tasks within an investment to duplicate work items and save setup time.

### Steps

1. Open the project and navigate to the **Tasks** module.
2. In the **Grid** or **Timeline** layout, select the task(s) you want to copy.
3. Right-click and select **Copy**, or use the Actions menu.
4. Clarity duplicates the task(s). Update the name, dates, and assignments as needed.

> [!note] This feature is also available in the cross-investment [[Tasks Workspace]].

---

## Display Parent Tasks While Filtering

When you apply filters in the Tasks grid, Clarity can optionally display the parent phase or parent task of any matching child task — even if the parent itself does not match the filter criteria. This ensures you retain context for where each task sits in the WBS hierarchy.

- Enable this option in **View Options** or the filter panel settings.
- Parent rows are displayed in a read-only, dimmed state when shown only for context.

---

## Show Today Toggle

The **Show Today** toggle is available in the **Timeline** layout of the Tasks module.

- When enabled, Clarity displays a **star** and a **dotted vertical line** marking today's date across all tasks on the timeline.
- This gives you an immediate visual reference for your current position relative to the overall plan.
- The toggle is available in View Options or the Timeline toolbar.

---

## Related Notes
- [[Autoschedule]] — Let Clarity recalculate task dates automatically
- [[Staffing]] — Manage the resources available to assign to tasks
- [[Baselines]] — Snapshot the task plan for comparison
- [[Financial Plans]] — Labor assignments drive cost plan calculations
- [[Tasks Workspace]] — Global cross-investment view of all tasks
- [[_MOC Projects]]
