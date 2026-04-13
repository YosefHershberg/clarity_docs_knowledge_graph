---
title: Canvas Dashboard
tags:
  - howto
  - admin
aliases:
  - Project Canvas
  - Canvas
  - Project Dashboard
  - Canvas Configuration
---

# Canvas Dashboard

The **Canvas** is Clarity PPM's fully configurable widget-based dashboard that lives inside each project. It serves as the **project overview page** — a single-screen summary combining key metrics, status indicators, lists, and charts. Each project can have its own canvas layout, and users can further personalize their view.

%%Source: p1206-1217%%

---

## What Is the Canvas?

The canvas is a drag-and-drop dashboard surface where you can place and arrange **widgets** — configurable panels that display specific project data. Unlike the status report canvas (which is a point-in-time report), the **project canvas** shows **live data** that updates as the project changes.

**Common uses:**
- Project overview/summary for stakeholders
- Daily PM dashboard showing health at a glance
- Team-facing view showing current sprint tasks and statuses
- Executive summary configured for leadership review

---

## Accessing the Canvas

1. Open the project.
2. Click **Overview** or **Canvas** in the left navigation panel (the first item in most blueprints).
3. The canvas loads with the current widget layout.

> [!note] If the Canvas module is not visible, it may be disabled in the project's **Blueprint** or you may not have access. See [[_MOC Administration]].

---

## Canvas Layout Modes

| Mode | Description |
|------|-------------|
| **View Mode** | Normal mode — see the live data; no editing |
| **Edit Mode** | Arrange, add, and configure widgets |

Switch between modes by clicking the **Edit Layout** button (pencil/grid icon in the top-right of the canvas).

---

## Widget Types

### Status and Health Widgets
| Widget | Description |
|--------|-------------|
| **Overall Status** | RAG indicator (Green/Yellow/Red) with optional label |
| **Schedule Status** | Schedule health indicator |
| **Budget Status** | Budget health indicator |
| **Scope Status** | Scope health indicator |
| **Confidence Level** | Slider or gauge showing PM confidence |

### Text and Rich Content Widgets
| Widget | Description |
|--------|-------------|
| **Text / Rich Text** | Free-text area with formatting (Markdown-style) |
| **Summary** | Auto-populated project summary fields |
| **Key Decisions** | List of decisions made or needed |
| **Notes** | Freeform notes panel |

### Data and Metric Widgets
| Widget | Description |
|--------|-------------|
| **Key Metrics** | Configurable KPI tiles (% complete, budget, EAC) |
| **Progress Bar** | Visual % complete bar |
| **Cost vs. Budget Chart** | Bar or line chart of cost vs. budget by period |
| **Burn Rate Chart** | Actuals over time |
| **Milestone List** | Upcoming and overdue milestones |
| **Task List** | Filtered list of tasks (e.g., overdue, this week) |
| **Risk Summary** | Count and list of open risks by priority |
| **Issue Summary** | Count and list of open issues |
| **Team List** | Project team members and their allocation |
| **Checklist Progress** | Completion status of checklists |

### Embedded Widgets
| Widget | Description |
|--------|-------------|
| **Embedded Report** | Embed a Clarity report output |
| **Embedded URL** | iFrame an external page (e.g., Power BI, SharePoint) |
| **Image** | Display a static image (e.g., org chart, architecture diagram) |

---

## Entering Edit Mode and Adding Widgets

### Steps
1. Click **Edit Layout** (pencil/grid icon).
2. The canvas enters edit mode — a **widget palette** appears (sidebar or toolbar).
3. To add a widget:
   - Click **+ Add Widget** or drag a widget type from the palette onto the canvas.
   - The widget appears on the canvas with a default size.
4. Position the widget by **dragging** its header.
5. Resize by **dragging the resize handle** (bottom-right corner of the widget).
6. Click the **Configure** (gear) icon on a widget to open its settings.

---

## Configuring Widgets

Each widget has its own configuration panel. Common configuration options:

| Option | Applies To | Description |
|--------|-----------|-------------|
| **Title** | All | Custom label for the widget |
| **Show Border** | All | Toggle widget border visibility |
| **Background Color** | All | Widget background color |
| **Data Source** | Data widgets | Which field or report to display |
| **Filter** | List widgets | Which tasks/risks/issues to show |
| **Chart Type** | Chart widgets | Bar, Line, Pie, Donut |
| **Period Range** | Financial charts | Which fiscal periods to display |
| **Columns** | List widgets | Which columns to show in the list |
| **URL** | Embedded URL | The URL to embed |

### Example: Configure the Milestone List Widget
1. Click the gear icon on the Milestone List widget.
2. Set **Filter**: Status = Not Complete, Due Date = Next 30 days.
3. Set **Columns**: Milestone Name, Due Date, Status.
4. Set **Sort**: Due Date ascending.
5. Click **Apply**.

---

## Saving and Publishing the Layout

1. After arranging widgets, click **Save Layout**.
2. The layout is saved and becomes the default view for all users on this project.
3. Click **Exit Edit Mode** to return to view mode.

> [!tip] As a project manager, you can set up the canvas once and all stakeholders see the same organized layout when they open the project.

> [!note] Some systems allow **per-user canvas personalization** — users can add their own widgets without affecting other users' views. Whether this is enabled depends on your Blueprint and system settings.

---

## Resetting to Default Layout

If a canvas becomes cluttered or you want to start fresh:

1. Enter **Edit Mode**.
2. Click **More → Reset to Default** (or **Actions → Reset Layout**).
3. Confirm — the canvas reverts to the Blueprint's default widget layout.

> [!warning] Resetting removes all custom widget configurations. This action cannot be undone.

---

## Administrator Configuration

Administrators can configure:

| Setting | Where |
|---------|-------|
| **Default canvas layout** for a blueprint | Blueprint settings in [[_MOC Administration]] |
| **Available widget types** | System settings |
| **Lock canvas layout** (prevent user customization) | Blueprint settings |
| **Embedded URL allowlist** | System settings (for iFrame widgets) |

> [!note] Locking the canvas layout in the Blueprint ensures all projects using that blueprint have a consistent project overview page — useful for portfolio-level reporting consistency.

---

## Canvas vs. Status Report Canvas

| Feature | Project Canvas | Status Report Canvas |
|---------|:--------------:|:-------------------:|
| Shows live data | Yes | No (point-in-time) |
| Created periodically | No (always exists) | Yes (new report each period) |
| Can be published | N/A | Yes |
| Historical snapshots | No | Yes (one per report) |
| Configured by | PM / Admin | PM (per report) |

---

## Related Notes
- [[Getting Started]] — Overview of all project layouts
- [[Status Reports]] — Point-in-time status canvas within reports
- [[Tasks Phases Milestones]] — Task list and milestone widgets pull from here
- [[Financial Plans]] — Financial widgets pull from cost/budget plans
- [[Risks Issues Changes]] — Risk/issue summary widgets
- [[_MOC Administration]] — Blueprint configuration for canvas
- [[_MOC Projects]]
