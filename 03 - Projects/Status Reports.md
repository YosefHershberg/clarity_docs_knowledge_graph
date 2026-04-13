---
title: Status Reports
tags:
  - howto
aliases:
  - Project Status Report
  - Status Canvas
  - Reports Grid
  - Progress Report
  - Project Health
---

# Status Reports

The **Status Reports** module in Clarity PPM allows project managers to create and publish structured progress updates. Status reports capture overall health, key accomplishments, upcoming activities, risks, and issues at a point in time. They are visible to stakeholders and can be configured as a **canvas** (visual dashboard) or a **reports grid** (list-based).

%%Source: p1172-1202%%

---

## Overview

Status reports serve as the primary communication mechanism between the project team and stakeholders. Key uses:

- Weekly or monthly project health updates
- Gate review summaries
- Executive portfolio reporting input
- Audit trail of project progress over time

> [!note] The Status Reports module must be enabled in the project's **Blueprint** to appear in project navigation.

---

## Report Cadences

Organizations typically define a **reporting cadence** — how often status reports are created:

| Cadence | Common Use Case |
|---------|----------------|
| Weekly | Active delivery projects |
| Bi-weekly | Sprint/iteration reports |
| Monthly | Program or portfolio reporting |
| Ad-hoc | Gate reviews, escalation |

> [!tip] Create status reports on a consistent schedule. Stakeholders rely on predictable reporting cadences for their own planning.

---

## Navigating to Status Reports

1. Open the project.
2. Click **Status Reports** in the left navigation panel.
3. The **Reports Grid** shows all existing status reports for this project.

---

## Creating a Status Report

### Steps
1. In the Status Reports module, click **+ New Status Report** (or **+ New Report**).
2. Fill in the report header fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | E.g., "Week 12 Status – 2024-03-22" |
| **Report Date** | Yes | Date this report represents |
| **Status Period** | No | Period the report covers |
| **Overall Status** | Yes | Green / Yellow / Red (or configured values) |
| **Schedule Status** | No | On Track / At Risk / Off Track |
| **Budget Status** | No | On Track / At Risk / Off Track |
| **Scope Status** | No | On Track / At Risk / Off Track |
| **Resource Status** | No | On Track / At Risk / Off Track |

3. Fill in the narrative sections:

| Section | Content |
|---------|---------|
| **Summary** | Executive-level 2–3 sentence summary |
| **Accomplishments** | What was completed in the reporting period |
| **Upcoming Activities** | What is planned for the next period |
| **Risks and Issues** | Key risks or issues affecting the project |
| **Decisions Needed** | Items requiring stakeholder decisions |
| **Notes** | Any other relevant information |

4. Click **Save** (report is in **Draft** status).
5. When ready to share, click **Publish** (changes status to **Published**).

> [!tip] Use **bullet points** within narrative sections to make reports easier to scan. Avoid paragraphs of dense text.

> [!warning] Once a report is **Published**, it is visible to all stakeholders with project view access. Review carefully before publishing.

---

## Overall Status Indicators

| Status | Meaning | When to Use |
|--------|---------|-------------|
| **Green** | On track | All dimensions healthy, no significant concerns |
| **Yellow** | At risk | One or more dimensions at risk; issues exist but manageable |
| **Red** | Off track | Significant problems; schedule, budget, or scope is impacted; escalation needed |

> [!note] The status values (Green/Yellow/Red, or other configured values) are set by your administrator in the Blueprint. Some organizations use **Blue** for new projects or **Gray** for on-hold.

---

## Status Canvas View

The **Status Canvas** is a visual, configurable layout for the status report — think of it as a one-page dashboard view.

### What the Canvas Can Show
- **Status indicator widgets** (colored RAG balls for schedule, budget, scope, resources)
- **Text widgets** (accomplishments, upcoming activities, risks)
- **Chart widgets** (cost vs. budget chart, % complete by phase)
- **Task lists** (upcoming milestones, overdue tasks)
- **Risk/Issue summaries**
- **KPI gauges**

### Configuring the Status Canvas
1. Open a status report.
2. Switch to **Canvas** view (if the view toggle is available).
3. Click **Edit Layout** or the canvas edit icon.
4. Add, resize, and arrange widgets.
5. Click **Save Layout**.

> [!note] Canvas layout can be set as the **default view** for status reports by the project manager. Changes to layout do not affect the report data — only the visual presentation.

### Publishing the Canvas View
- The canvas view is automatically shown when stakeholders open a published status report.
- Use the **Print** or **Export to PDF** option to share reports outside Clarity.

---

## Reports Grid

The **Reports Grid** lists all status reports for the project in chronological order.

### Grid Columns

| Column | Description |
|--------|-------------|
| **Name** | Report name; click to open |
| **Report Date** | Date the report represents |
| **Overall Status** | RAG indicator |
| **Schedule Status** | Schedule RAG |
| **Budget Status** | Budget RAG |
| **Status** | Draft or Published |
| **Created By** | Report author |
| **Published Date** | When it was published |

### Filtering Reports
Filter by:
- Status (Draft / Published)
- Report Date range
- Overall Status (Green/Yellow/Red)
- Created By

---

## Measuring Progress

### % Complete Tracking
Status reports show project-level **% complete**, which can be:
- **Rolled up** from task completion (calculated automatically)
- **Manually entered** by the PM
- **Earned value** based (requires EVM configuration)

### Milestone Tracking
The status report canvas can embed a **milestone list widget** showing:
- Upcoming milestones and their dates
- Overdue milestones (highlighted in red)
- Recently completed milestones

### Budget Tracking
The status canvas can show:
- **Planned vs. Actual cost** by period (bar chart)
- **EAC vs. Budget** comparison
- **Burn rate** trend

---

## Report Lifecycle

```
Draft → (review) → Published → Archived
```

| State | Description |
|-------|-------------|
| **Draft** | In progress; visible only to the PM |
| **Published** | Visible to all project stakeholders |
| **Archived** | Historical; still viewable but clearly marked as old |

---

## Editing a Published Report

> [!warning] Editing a published report changes content that stakeholders have already seen. Best practice is to create a **new report** rather than editing a published one. If you must edit, add a note explaining what changed and why.

1. Open the published report.
2. Click **Edit**.
3. Make changes.
4. Click **Save** (it remains Published).

---

## Copying a Status Report

To save time, copy the previous period's report as a template for the new one:

1. In the Reports Grid, find the report to copy.
2. Click **More (...)** → **Copy**.
3. Update the **Report Date** and narrative content.
4. Click **Save**.

> [!tip] Copying the previous report is the most efficient way to maintain consistency in report format while just updating the content.

---

## Access Rights

| Right | What It Allows |
|-------|---------------|
| **Project - View** | View published status reports |
| **Project - Edit** | Create, edit, and publish status reports |
| **Status Reports - Manage** | Full management including deletion |

---

## Related Notes
- [[Canvas Dashboard]] — Configure the project canvas (project-level dashboard, separate from status report canvas)
- [[Risks Issues Changes]] — Surface open risks and issues in the report
- [[Baselines]] — Report schedule variance against baseline
- [[Financial Plans]] — Report financial health
- [[_MOC Projects]]
