---
title: Tasks in Hierarchy
tags:
  - howto
  - hierarchies
aliases:
  - Hierarchy Tasks
  - View Tasks Hierarchy
  - Cross-Investment Tasks
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Tasks in Hierarchy

The **Tasks in Hierarchy** view provides a consolidated list of tasks from **all investments** in the hierarchy — in a single grid. This eliminates the need to open each investment separately to check task progress, enabling program-level task tracking and cross-investment dependency analysis.

---

## Accessing Tasks in a Hierarchy

1. Open the hierarchy from the Hierarchies list.
2. Click the **Tasks** tab in the hierarchy detail view.
3. The tasks grid loads, showing tasks from all investments in the hierarchy with their investment context.

---

## Task Grid Structure

Each row represents one task. Key columns:

| Column | Description |
|--------|-------------|
| **Task Name** | Task title (indented to show phase/task nesting) |
| **Investment** | The investment this task belongs to |
| **Investment Level** | The hierarchy level of the parent investment |
| **Assigned Resource** | Resource(s) assigned to the task |
| **Start** | Task start date |
| **Finish** | Task finish date |
| **Duration** | Working days |
| **% Complete** | Current progress |
| **ETC** | Remaining effort hours |
| **Actuals** | Hours logged via timesheets |
| **Status** | Not Started / In Progress / Complete / On Hold |
| **Milestone** | Yes/No indicator |

---

## Filtering Tasks

Use the Filter panel to focus on relevant tasks:

- **By Investment** — Show tasks from a specific investment only.
- **By Investment Level** — Show tasks from only Level 1 investments, or all levels.
- **By Resource** — All tasks assigned to a specific person (useful for workload review).
- **By Status** — Filter to In Progress or overdue tasks only.
- **By Date Range** — Tasks scheduled within a specific window (e.g., current quarter).
- **By % Complete** — Tasks below a threshold (e.g., less than 50% complete but past start date).

> [!tip] Finding Overdue Tasks Across the Program
> Filter to: Status ≠ Complete AND Finish < Today. This shows all tasks that should have finished but haven't — across the entire program.

---

## Sorting and Grouping Tasks

### Sorting

Click any column header to sort. Multi-column sort: hold Shift and click additional headers.

### Grouping

1. Click **Group By** → select a field:
   - **Investment** — Group tasks by their parent investment.
   - **Resource** — Group by assigned resource (workload view).
   - **Status** — Group by task status.
   - **Milestone** — Separate milestone rows from task rows.
2. Subtotals appear at each group header: total ETC, total actuals, average % complete.

---

## Viewing Critical Path Across the Hierarchy

If dependency data is available and configured:

1. Click **View Options** → **Show Critical Path**.
2. Tasks on the critical path (where delay would push the hierarchy finish date) are highlighted in red.
3. This enables program managers to focus attention on tasks that matter most for schedule.

---

## Inline Task Editing

1. Click any editable cell in the task grid.
2. Update the field (e.g., % Complete, ETC, Status, Assigned Resource).
3. Click elsewhere or press Enter to save.
4. The change updates the underlying investment's task record immediately.

> [!warning] Editing Rights Required
> You must have **Investment - Edit** rights on the investment that owns the task. If you lack edit rights on an investment, its tasks appear read-only in the hierarchy view.

---

## Milestone Summary View

To see only milestones (ignoring detailed tasks):

1. Enable the **Milestone Only** filter or toggle.
2. The grid shows only milestone rows across all investments.
3. Columns: Investment, Milestone Name, Date, Status, Responsible Resource.
4. This is useful for a **program milestone report**.

---

## Exporting Tasks

1. Click **Actions** → **Export to CSV**.
2. All visible columns and rows (respecting active filters) are exported.
3. The Investment column identifies which investment each task belongs to.
4. Use the export for offline analysis, reporting, or integration with external scheduling tools.

---

## Tasks in Hierarchy vs. Tasks Within an Investment

| Context | Where | Best For |
|---------|-------|---------|
| **Tasks in Hierarchy** | Hierarchy → Tasks tab | Program-level tracking, cross-investment workload |
| **Tasks in Investment** | Investment → Tasks tab | Detailed task management within one investment |

Use the Hierarchy Tasks view for **monitoring**. Use the individual investment's Tasks tab for **editing and scheduling**.

---

## Related Notes

- [[Cross-Object Investment Grid]] — Investment-level attributes across the hierarchy
- [[Financial Plans in Hierarchy]] — Financial analysis across the hierarchy
- [[Tasks and Phases]] — Detailed task management within a single investment
- [[Timeline Layout]] — Gantt view of tasks across the hierarchy
- [[_MOC Hierarchies]] — Back to the hierarchies MOC

%%Source: p664–673%%
