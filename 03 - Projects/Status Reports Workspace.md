---
title: Status Reports Workspace
tags:
  - concept
  - howto
aliases:
  - Cross-Object Status Reports
  - Global Status Reports
  - Status Reports Page
canonical: true
audience: pm
domain: projects
---

# Status Reports Workspace

The **Status Reports Workspace** is a top-level menu item in Clarity PPM that provides a cross-investment view of status reports for **all investment types** — projects, ideas, and custom investments — in one place. Unlike the Status Reports module inside a single investment, this workspace lets you view, edit, export, and manage status reports across your entire portfolio.

%%Source: Manage Status Reports%%

---

## Overview

For an investment manager, status reporting is one of the most critical components of effective portfolio management. By reporting investment status periodically, you ensure teams stay focused and investments succeed throughout their entire lifecycle.

Status reporting:
- Facilitates effective communication between teams and stakeholders
- Establishes a repeatable process documenting accomplishments
- Measures team performance
- Documents actions necessary to implement and mitigate risk
- Highlights where teams should focus to correct problems and maintain progress

The Status Reports Workspace gives you the ability to:
- **View and edit** status report attributes across all investment types from a single workspace.
- **Configure columns** to retrieve data from all objects where status reports are created.
- **Preview and publish** multiple status reports in PDF format.
- **Download PDFs** and share them with investment stakeholders.
- Apply all business rules defined on parent object blueprints.

---

## Prerequisites

Before using the Status Reports Workspace, ensure the following are in place:

1. Your administrator has configured the **STATUS** module using Blueprints for the relevant investment types.
2. You have the **Status Reports - Navigate** access right to access the workspace.
3. You have any additional **Status Reports global rights** required for your intended actions (view, edit, delete).

> [!important] Object names appear in the Columns flyout **only if at least one status report has been created** in one of that object's instances.

---

## View and Edit Status Reports

### Steps

1. In the main menu, click **Status Reports**. The Status Reports page is displayed.
2. To navigate to a specific investment, click the **Name** of the Investment.

> [!note] On the Investment page, a link is available to navigate back to the Status Reports Workspace.

3. Click the **Status** module to view the status reports for that investment.
4. Edit fields directly in the grid (except read-only fields) based on your access rights. Values are automatically updated in the Reports tab of the investment.
5. Click **Report** to view the list of current and prior status reports.
6. Edit fields in the grid as permitted by your access rights.

### Important Editing Rules

> [!important] Key points to remember:
> - Based on your investment access rights, you can view, edit, or delete status reports directly from the workspace.
> - Object names appear in the Columns flyout only if at least one status report exists in one of that object's instances.
> - Cross-object workspaces do **not** support Aggregated Calculated Attributes (ACA), Calculated Attributes, Formula Attributes, or Virtual Attributes.
> - **Exception**: **Overall Status** (a calculated attribute) **is** available in both the Column Panel and Configurable Filtering.

---

## Setup View Options

1. Log into Clarity.
2. Navigate to the **Status Reports** page and click the relevant layout.
3. Click **View Options**.
4. Configure the following settings:

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

5. Click **X** to close the View Options panel.

---

## Right-click Context Menu

Right-click any cell in the grid to open a context-sensitive menu with the following options:

| Option | Action |
|--------|--------|
| **Open Details** | Opens the Details flyout panel for that status report |
| **Delete Row** | Deletes the selected status report from the grid and from the respective investment |
| **Star** | Marks the investment as a favorite |
| **Chart Range (beta)** | Creates a chart using the data selected in the grid |

> [!warning] When you **Delete Row**, the specific status report is permanently deleted from the respective investment, not just removed from view.

> [!note] The **Chart Range (beta)** option lets Clarity create a chart using selected grid data. See [[Charts]] for details.

---

## Latest Attribute

The Reports tab includes a **Latest** checkbox attribute that indicates the most recent record where **Report Status** has been set to **Final** in Clarity.

> [!note] The **Latest** attribute does **not** dynamically update. You must **refresh the page** to apply field edits made within the Reports tab and see the updated Latest value.

---

## Grid Layout Capabilities

The Status Reports Workspace uses the full **Clarity Common Grid** supporting:

- **Edit inline** using the right-click context menu.
- **Pin, resize, reorder, and reset** columns.
- Apply **Conditional Formatting** rules to color-code cells or rows.
- Use the **Column Panel** to show or hide columns.
- **Star** records to mark as favorites.
- Use the **+** / **-** buttons to shift date field values.
- Use **Drag Functionality** to populate data across cells.
- Drag up to **three column headers** for **Group By** grouping.
- Use the embedded **charting experience** for visual analysis.
- **Bulk Delete** multiple records.
- **Export to CSV** (up to 250,000 rows).
- Use the **Search** bar to filter by name or ID.
- Use **Filters** for simple or advanced multi-condition filtering.
- Use the **Details Panel** (two-column layout) for field editing.
- Save and share **Saved Views**.

---

## Bulk Export to PDF

You can export multiple status reports to a single PDF file for sharing with investment stakeholders. All selected status reports are included in one PDF, with each status report starting on a new page.

**Supported report statuses for export:** Draft, Final, or Latest — from Projects, Ideas, and Custom Investments.

### Steps

1. In the main menu, click **Status Reports**. The Status Reports page is displayed.
2. Select the **checkboxes** next to the status reports you want to export.
3. Click **Export to PDF**. The combined status report preview is displayed.
4. Select the **size** of the PDF output:

| Size Option | Description |
|-------------|-------------|
| Letter | Standard US letter size |
| Legal | Legal-size paper |
| Tabloid | Tabloid / ledger size |
| A4 | ISO A4 size |
| HD Display | 1920 pixels wide |
| Laptop | 1440 pixels wide |
| Tablet | 1024 pixels wide |
| Fit to Content | Automatically fits to content dimensions |

5. Select the **orientation** of the PDF output:
   - **Portrait**
   - **Landscape**

6. Select a **View** from the View drop-down.

> [!note] If a default view is in an unsaved state, the view drop-down will not be populated in PDF preview mode. Only **saved and recommended** views appear in the preview mode's view drop-down.

7. Click **Download** to start the export operation. A banner appears while the export runs in the background.

> [!note] Key points about the bulk export:
> - The bulk export runs as the **Bulk PDF Export** background job.
> - Job details include information about which status reports were exported, report settings, and any failed report information.
> - Once the PDF is ready, a **notification** appears. Click the notification icon, then click the file to save or open the PDF.

---

## Widgets

Widgets provide visual summaries of status report data across the workspace.

| Widget | Description |
|--------|-------------|
| **Number Tile** | Displays a specific count or value |
| **Pie** | Pie chart with top 3 / bottom 3 breakdown |
| **Bar** | Bar chart with top 3 / bottom 3 breakdown |
| **Progress Ring** | Ring chart with a count or value |

- Use **Show Widgets** to display the widgets toolbar.
- Use **Manage Widgets** to add widgets from the library or create new ones.
- Use **Interactive Filtering** on widgets for drill-down analysis.

> [!tip] See [[Widgets]] for full widget configuration details.

---

## Related Notes

- [[Status Reports]] — Status Reports module within a single project
- [[Canvas Dashboard]] — Configure investment-level canvas dashboards
- [[Grids]] — Full grid component documentation
- [[_MOC Projects]]
