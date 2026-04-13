---
title: Widgets
tags:
  - concept
  - howto
aliases:
  - Dashboard Widgets
  - Home Widgets
  - Clarity Widgets
---

# Working with Widgets

**Widgets** are configurable data panels displayed on the **Home** screen and on custom **Pages** in Clarity PPM 16.4.1. They provide at-a-glance visibility into key data — your projects, tasks, timesheets, KPIs, and more. The Home dashboard is fully widget-based and personalized per user.

%%Source: p294-298%%

---

## Widget Concepts

| Term | Description |
|------|-------------|
| **Widget** | A self-contained data panel on a dashboard page |
| **Home Page** | Your personal dashboard — the first page after login |
| **Page** | A custom page (admin-created or personal) containing one or more widgets |
| **Widget Instance** | A specific configured widget placed on a page |
| **Widget Type** | The category of widget (list, chart, metric, etc.) |

---

## Standard Widget Types

### List Widgets
Display a grid-style list of records filtered to your context.

| Widget | Shows |
|--------|-------|
| **My Projects** | Projects you manage or are staffed on |
| **My Tasks** | Tasks assigned to you across all projects |
| **My Investments** | Investments you own or follow |
| **My Action Items** | Open action items assigned to you |
| **Notifications** | Recent system notifications |

### Metric / KPI Widgets
Display a single numeric value or KPI with optional trend indicator.

- Total project count by status
- Budget vs. actual variance
- Timesheet completion rate
- Resource utilization percentage

### Chart Widgets
Render a graphical chart (bar, pie, line) based on a configured data set.

- Project status distribution (pie chart)
- Budget by department (bar chart)
- Monthly timesheet hours (line chart)

### Timesheet Widgets
- **My Timesheets** — Shows current period timesheet status and quick-submit
- **Team Timesheets** (for managers) — Shows team members' timesheet statuses

### Custom HTML / Text Widgets
- Free-form content widgets for announcements, links, or instructions
- Configured by administrators for system-wide or page-specific use

---

## Adding Widgets to Your Home Page

1. On the **Home** screen, click the **+ Add Widget** button (or the edit/pencil icon for the page).
2. The widget gallery opens — browse or search for the widget type you want.
3. Click **Add** on the desired widget.
4. The widget appears on your Home page with default settings.
5. Configure it (see below).

> [!note]
> The available widgets depend on your access rights and the widgets your administrator has made available. Some widgets may be restricted to specific user groups.

---

## Configuring a Widget

Each widget has its own configuration options. To configure:

1. Click the **gear icon** or **options (⋮)** on the widget header.
2. Select **Configure** or **Edit**.
3. Adjust settings such as:
   - **Title** — Custom widget title
   - **Filter** — Which records to show (e.g., only active projects, only your projects)
   - **Columns** — Which fields to display in list widgets
   - **Rows** — Number of records to show (e.g., top 10)
   - **Chart type / Axis** — For chart widgets
   - **Time period** — For timesheet/financial widgets
4. Click **Save**.

> [!tip]
> For **My Projects** widget, configure the filter to show only **Active** projects to reduce noise. Add key columns like **Status**, **Manager**, **Finish Date**, and **% Complete** for a useful project dashboard.

---

## Rearranging Widgets

- **Drag and drop** widgets to reposition them on the page.
- Hover over the widget header until the move cursor appears, then drag.
- Widgets snap to a grid layout — you can have widgets side-by-side or stacked.

---

## Resizing Widgets

- Drag the **resize handle** (bottom-right corner of a widget) to make it larger or smaller.
- Widget sizes typically snap to predefined size increments.

---

## Removing Widgets

1. Click the **gear icon** or **options (⋮)** on the widget.
2. Select **Remove** or **Delete**.
3. Confirm the removal.

> [!note]
> Removing a widget from your Home page only removes it from your personal view — it does not delete any underlying data.

---

## Shared Pages and Widgets

Administrators can create **shared Pages** that appear in the left navigation for all users (or a group of users). These pages contain pre-configured widgets that users can view but typically cannot modify.

- Shared pages are useful for **executive dashboards**, **team status pages**, or **departmental KPI views**.
- Individual users can have their own personalized Home page in addition to shared pages.

> [!note] Admin Configuration
> Creating shared pages and managing which widgets are available requires administrative access. See [[_MOC Administration]] for page and widget administration.

---

## Widget Refresh

Widgets display data as of the last refresh. To get the latest data:

- Most widgets **auto-refresh** on page load.
- Some widgets have a **manual refresh** button (circular arrow icon) in the header.
- For real-time data needs, use the full grid view rather than a widget.

---

## Related Notes

- [[First Time Login]] — The Home page and its default widgets
- [[Common Components/Grids]] — Full grid views behind list widgets
- [[Common Components/Filters]] — Filters applied within widget configuration
- [[Common Components/Saved Views]] — Views that can feed into widgets
- [[_MOC Administration]] — Admin configuration of pages and widgets
