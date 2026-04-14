---
title: Tasks Workspace
tags:
  - concept
  - howto
aliases:
  - Tasks Page
  - Cross-Investment Tasks
  - Global Tasks View
  - My Tasks
canonical: true
audience: pm
domain: projects
---

# Tasks Workspace

The **Tasks Workspace** is a top-level menu item in Clarity PPM that provides a centralized, cross-investment view of tasks across all investments you have access to — projects, custom investments, and other investment types. Unlike the Tasks module inside a single project, the Tasks Workspace lets you see and manage tasks spanning your entire portfolio from one place.

> [!note] You need the **Tasks - Navigate** access right to access this workspace.

%%Source: Track Tasks Across Investments%%

---

## Overview

From the Tasks Workspace you can:

- View all tasks assigned to you (or anyone, subject to rights) across every investment in a single grid, board, calendar, or timeline.
- Edit task attributes, add assignments, create to-do items, and collaborate — without navigating into each investment individually.
- Leverage the **Associated Objects Grid** to surface investment-level attributes alongside task attributes.

Available layouts:
- **Grid** — spreadsheet-style data entry and bulk editing
- **Board** — Kanban card view with drag-and-drop
- **Calendar** — weekly or monthly calendar view
- **Timeline** — Gantt-style horizontal bar view

---

## Board Layout

The Board layout displays tasks as cards arranged in columnar swimlanes, ideal for status-based workflows.

### Key Card Features

- Cards can display **two title fields** per card plus the card width. If the investment name is configured, it hyperlinks to the relevant investment.
- Configure up to **six fields** across two columns per card.
- Configure up to **six metrics** per card (displayed up to three columns across, in abbreviated format).
- Card colors reflect the value selected in the **Color** field in View Options; color selections are saved with the view.
- **Double-click** a card to edit its name inline.
- The board layout does **not** provide the option to create new cards directly.

### Interacting with the Board

- Use the **Search** bar to filter values by name or ID.
- Use **Filters** for advanced, multi-condition filtering.
- Use the **Details Panel** (two-column layout) to edit task fields.
- Add **Widgets** to visualize health metrics.
- Save and share multiple **Saved Views**.

### Setup View Options — Board Layout

1. Navigate to the **Tasks** page and click the **Board** layout.
2. Click **View Options**.
3. Configure the following options:

| Option | Description |
|--------|-------------|
| **Columns** | Attributes whose values display as horizontal columns |
| **Swimlanes** | Attributes whose values display as collapsible vertical swimlanes |
| **Sort** | Attribute to sort cards within a column |
| **Color** | Lookup attribute; if display mapping colors are configured, shows as a vertical color bar on the left side of the card |
| **Show Labels** | Toggle labels on or off |
| **Configure Card** | Configure fields, metrics, and title fields displayed on the card |

> [!tip] See also [[Board Layout]] for full details on the Clarity board component.

---

## Calendar Layout

The Calendar layout displays tasks in a **weekly** or **monthly** calendar based on their Finish date.

### Key Features

- Tasks without a Finish date appear in the **Unscheduled** section.
- Toggle between **monthly** and **weekly** display.
- Use the **Show Weekend** toggle to show or hide weekend days.
- Cycle through time periods using the Calendar Carousel.
- Sort tasks within each day by **Date**, **Name**, or **Owner**.
- **Drag and drop** tasks from one date to another to update their Finish date.
- You cannot drag a task from a calendar cell back to the Unscheduled section.
- Right-click a task card to **edit** or **delete** it.
- Infinite scrolling supports large numbers of records.

### Weekly vs. Monthly Display

| Display | Card Shows |
|---------|------------|
| **Weekly** | Avatar of resources, Task Name, Investment Name, Task Status |
| **Monthly** | Task Name, avatar of assigned resources; overflow avatars shown as a counter |

> [!note] In the Monthly view, click **"+ More"** to open the Overflow Popover listing tasks that don't fit within a month cell. You can drag tasks from the Overflow Popover to a specific day.

> [!warning] Some drag-and-drop or edit actions may be restricted by existing task rules, for example:
> - Cannot set Task Status to Completed if ETC is not zero.
> - Cannot move Start/Finish dates if actuals have been posted.
> - Cannot set Task Status to Completed if % Complete is not 100%.

### Setup View Options — Calendar Layout

1. Navigate to the **Tasks** page and click the **Calendar** layout.
2. Click **View Options**.
3. Configure the following options:

| Option | Description |
|--------|-------------|
| **Range** | View the calendar by week or month |
| **Date** | Configure which date field plots the task on the calendar |
| **Sort** | Attribute to sort cards within each day (Week or Month range) |
| **Color** | Lookup attribute; in Week range displays as a vertical bar on the left of the card; in Month range fills the entire task bar |
| **Show Weekend** | Hide or show weekends in Week or Month range |

### Using the Calendar

1. Navigate to the **Tasks** page and click the **Calendar** layout.
2. Click **View Options** and configure the calendar.
3. Use the **Calendar Carousel** to select the appropriate time period.
4. Click a card and use the **Details** tab to update task fields.
5. Right-click a card to delete it or open the Details panel.
6. Drag and drop cards to update their Finish dates.
7. In Month view, click **"+ More"** to open the Overflow Popover.

---

## Associated Objects Grid

The Tasks grid uses the **Associated Objects Grid** pattern. While the grid is primarily for viewing and editing tasks, you can also surface attributes from related investment objects to make informed decisions without leaving the workspace.

You can add the following types of columns to the grid:

- **Task attributes** — Name, % Complete, ETC, Status, Start, Finish, etc.
- **Common Investment attributes** — Corporate Priority, Manager, and other fields shared across all investment types.
- **Investment-specific attributes** — Fields from the specific Project or Custom Investment where each task lives.

> [!important] Cross-object workspaces do **not** support Aggregated Calculated Attributes (ACA), Calculated Attributes, or Formula Attributes.

---

## Grid Layout

The Grid layout provides a spreadsheet-style view for bulk data management.

### Key Actions in the Grid

- **Edit inline** using the right-click context menu.
- **Pin, resize, reorder, and reset** columns.
- Apply **Conditional Formatting** rules to color-code cells or rows.
- Use the **Column Panel** to show or hide columns.
- **Star** task records to mark as favorites.
- Use the **+** / **-** buttons to shift date field values.
- Use **Drag Functionality** to populate data across cells.
- Drag up to **three column headers** for **Group By** grouping.
- Use the embedded **charting experience** for visual analysis.
- **Bulk Delete** multiple records.
- **Export to CSV** (up to 250,000 rows).
- Use **Filters** for simple or advanced multi-condition filtering.
- Use the **Details Panel** (two-column layout) for field editing.
- Save and share **Saved Views**.

### Setup View Options — Grid Layout

1. Navigate to the **Tasks** page and click the **Grid** layout.
2. Click **View Options**.
3. Configure the following:

| Setting | Description |
|---------|-------------|
| **Show Total Row** | Displays an aggregate Total row below the column headers (default: Off) |
| **Money Decimal Display** | Number of decimal places for money attributes |
| **Number Decimal Display** | Number of decimal places for number attributes |
| **Wrap Text** | Wraps text in all columns (default: Off) |

**Aggregation types supported per data type:**

| Aggregation | Number / Money / Calculated / Integer | Percent | Date | Boolean | TSV |
|-------------|:-----:|:-----:|:-----:|:-----:|:-----:|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | | | | |
| Min / Max | Yes | | | | |
| None | Yes | | | | |

---

## Timeline Layout

The Timeline layout presents tasks as horizontal bars on a time axis.

### Key Capabilities

- Edit task data using the configurable grid or the Details panel.
- Drag task bars horizontally to adjust start and end dates.
- Add Widgets to view task data graphically.
- Use **Color By** to color-code task bars by a selected attribute.
- **Copy tasks** within investments to duplicate them.
- Use the **Show Today** toggle to display a star and dotted line marking today's position across all tasks.

> [!note] Key points for the Timeline:
> - Rows are presented in alphanumeric sort by Investment name.
> - You cannot create dependency lines between investments on the Investment timeline.
> - Bars can be moved horizontally (changing dates) but not vertically.
> - The Timeline view supports fiscal periods.
> - You can view **key milestones** and their status — a filled diamond indicates a completed milestone.

---

## Editing Tasks

If you have the relevant permissions, you can edit tasks in the Tasks Workspace by:

- Adding fields from the **Column Panel** and editing them inline.
- Adding fields to the **Details Panel** and editing them there.
- Editing **To Dos**, **Assignments**, **Links**, and **Conversations** via the Details Panel.

### Locked Investments

When users work with task schedulers (Open Workbench or Microsoft Project), Clarity may lock the investment. When a project is locked:

- A **lock icon** is shown on the Tasks Workspace row.
- You can hover over the lock icon to see who locked the investment.

The following users can unlock a locked investment using the **Unlock** button (top-right corner):

- The lock owner
- The Investment Manager
- An Administrator with the **Administration - Application Setup** access right

> [!tip] See [[Create a Project]] for more on the Locked By field and lock behavior.

---

## Collaborate on Tasks

You can start conversations with team members directly from the Tasks Workspace.

### Steps

1. Navigate to the **Tasks** page and select a task.
2. Open the **Details** panel on the right.
3. Click the **Conversations** tab.
4. Add your comment. Use `@resource name` to address a specific team member.
5. Click **Post**.

> [!note] The mentioned user receives a notification when they click the **Notification bell** icon in Clarity.

---

## Create To-Do Items for Tasks

Break a task into smaller, trackable activities by adding To-Do items.

**Business rules:**
- Maximum of **25 to-do items** per task.
- The status of to-do items does **not** affect the status of the parent task.
- Due date must fall within the start and end dates of the **parent investment** (project or investment item).
- You can assign a to-do to any active labor resource, role, or team for which you have at least **Resource - View** access.

### Steps

1. In the Calendar, Board, or Grid layout, select a task.
2. The **Details** panel opens on the right.
3. Click the **To Do** tab.
4. In the Open section, click **NEW TO DO**.
5. Enter a short description (up to **256 characters**) and press **Enter**.
6. Optionally, click the **date picker** to set a due date.
7. Optionally, click **Assign** to select an owner (resource, role, or team).
8. To mark a to-do as complete, select the **empty circle** icon next to its name. It moves to the Completed section with a checkmark.
9. To reopen a completed to-do, click the checkmark — the item returns to Open status.

> [!tip] You can expand and collapse the **Open** and **Completed** sections for to-do items.

---

## Add Staff Members to Tasks

Assign resources, roles, or teams to a task to indicate who is responsible for the work.

### Steps

1. Click the **Tasks** page and click the task you want to assign resources to.
2. Click the **DETAILS** panel.
3. Click the **Assignments** tab.
4. Add resources, teams, or roles. The selected staff are assigned to the task.
5. Click **Expand** to use the full grid capabilities: Views, Group-by, Filter, and Export to CSV.

> [!note] You can modify or delete assignments until any actuals are posted for the assignment.

---

## Add Links to Tasks

Add helpful links to external sites related to the task.

### Steps

1. Click the **Tasks** page and click the task to which you want to add links.
2. Click the **DETAILS** panel.
3. Click the **Links** tab.
4. Click **NEW LINK**.
5. Enter a URL to an external link.
6. Enter a user-friendly **LINK NAME**.

---

## Widgets

Widgets provide visual summaries of task health across the workspace.

| Widget | Description |
|--------|-------------|
| **Number Tile** | Displays a specific count or value based on widget definition and filter |
| **Pie** | Pie chart; shows top 3 / bottom 3 results; remainder grouped as "Other" |
| **Bar** | Bar chart; shows top 3 / bottom 3 results; remainder grouped as "Other" |
| **Progress Ring** | Ring chart with a count or value |

- Use **Show Widgets** to display the widgets toolbar.
- Use **Manage Widgets** to add widgets from your library or create new ones.
- Use **Interactive Filtering** on widgets for drill-down analysis.

> [!tip] See [[Widgets]] for full widget configuration details.

---

## Related Notes

- [[Tasks Phases Milestones]] — Tasks inside a single project (WBS, Gantt, phases, milestones)
- [[To Dos Workspace]] — Global cross-investment view of all To-Do items
- [[Staffing]] — Manage project team members available for task assignment
- [[Board Layout]] — Detailed board component documentation
- [[Grids]] — Detailed grid component documentation
- [[_MOC Projects]]
