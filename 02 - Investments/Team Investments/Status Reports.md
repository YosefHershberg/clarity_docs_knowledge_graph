---
title: Team Investment Status Reports
tags:
  - howto
aliases:
  - Team Status
canonical: true
audience: pm
domain: investments
---

# Manage Status Reports for Team Investments

## Overview

The **Status Reports** module enables investment managers to create, customize, and publish detailed status reports that keep teams focused on their work while providing stakeholders with regular updates on investment progress, risks, and performance metrics.

The module provides two interfaces:
- **Canvas view** — Visual report creation with configurable widgets
- **Reports Grid** — List-based management of status report instances

> [!note]
> Required access rights:
> - **\<Investment\> - Edit** and **Status Report** access right to create new reports
> - **Status Report - Edit All** and **Project - Edit** to edit existing reports
> The **PMO Project Manager** access group contains all rights needed to access an investment and create status reports.

### Field-Level Security in Status Reports

Attributes of the Status Report object can be secured using field-level security. A visual indicator identifies fields under field-level security control. FLS is supported in the **Canvas**, **Preview**, and **Reports Grid** views.

---

## Working with Canvas View

The Canvas layout provides a visual, drag-and-drop interface for configuring and publishing status reports.

### View the Default Investment Status

1. Open an investment and click **Status**
2. The latest draft of the status report appears in Canvas view by default

**Default widgets included:**

| Widget | Description |
|--------|-------------|
| **Number Tile** | Displays a specific number based on widget definition |
| **Pie** | Pie chart grouped by a selected attribute |
| **Bar** | Bar graph with Group By and aggregation |
| **Progress Ring** | Ring chart with a number metric |
| **Overall Status** | Derived from schedule, scope, and cost/effort status; also visible on the investment tile |
| **Schedule Status** | Indicates if schedule is on track, minor variance, or significant variance |
| **Scope Status** | Indicates if scope is on track, minor variance, or significant variance |
| **Cost and Effort Status** | Indicates if effort and budget are on track |
| **Milestone Timeline** | Shows investment start/finish dates and milestone completion status |
| **Effort Metrics** | Total estimated effort, submitted effort, and balance effort |
| **Cost Metrics** | Total approved budget, budget exhausted to date, and balance budget |
| **Status Report Update / Key Accomplishments** | Custom text fields for narrative summaries |
| **Table Widgets** | Data grids for Tasks, RICs, To Dos, Staff, Cost Plans, Budget Plans, Benefit Plans |

> [!note]
> The **Milestone Timeline** widget supports configuration for showing milestone names and/or dates, and offers "Closest 10" (10 milestones nearest to today) or "Key Milestones" display options.

> [!note]
> If Classic PPM status reports exist for the investment, the system populates the latest Draft report in Canvas. If only Final reports exist, a draft is created from the latest Final report.

### Set Up View Options

1. Navigate to the relevant layout and click **View Options**
2. In **Periods**, select a time unit: **Weeks**, **Months**, **Quarters**, or **Years**
3. In **Type**, configure per-period metrics using:
   - **Periods** — Set a Start Period and End Period
   - **Duration** — Set a Start Period and number of periods, with an optional offset
4. In **Totals**, choose:
   - **Sum of Periods** — Sums only the periods displayed in the layout
   - **Grand Total** — Sums the full investment duration regardless of displayed periods
5. Set **Per-Period Metrics**:
   - **Total** — Show only the Totals field
   - **Periods** — Show only per-period metric fields
   - **Total and Periods** — Show both simultaneously
6. Optionally enable **Select Total and Period Columns Separately** for independent configurations
7. Click **X** to close View Options

> [!important]
> When **Select Total and Period Columns Separately** is ON, the Per-Period Metrics setting is disabled. Turning it back OFF restores the previously selected values. Per-period metric attributes must be selected from the **Column Panel**.
>
> You can also override canvas per-period settings on individual tables by enabling the **Override Canvas Per-Period Settings** option.

### Add or Remove Widgets from the Status

1. Click **Configure** to open the canvas in edit mode
2. Drag and drop relevant fields and widgets from the **Configure Canvas** panel onto the canvas
3. Click **X** on any widget or field to remove it
4. Drag a corner of a widget to resize it horizontally or vertically
5. Click **Done** to save changes

> [!note]
> The following widgets are **not available** in the current release:
> - Next 2 Weeks Calendar widget
> - Completed Tasks widget
> - High-level Status Module

### Include Risks, Issues, Changes, and Tasks in Status Reports

Available from Clarity 15.6.1 onwards.

**Method 1 — Using the grid:**
1. Open the investment and navigate to **Risks**, **Issues**, **Changes**, or **Tasks**
2. Add the **Include in Status Reporting** column to the grid
3. Select the flag for each item to include in the status report

**Method 2 — Using the Details panel:**
1. Click any row to display the **Details** tab
2. Click **Configure** to display all available attributes
3. Drag-and-drop **Include in Status Reporting** to the Details layout
4. Select the flag for the desired items

### Configure Table Widget Columns

1. In the canvas, click **Configure**
2. Click the **Gear** icon at the top-right corner of the table widget
3. Use the grid pop-up to:
   - Add or remove columns via the **Columns** panel (max 20 columns)
   - Apply **Conditional Formatting** rules
   - Use **Filter** to analyze specific data
   - Rename the widget
   - Enable **Group By** to collapse related rows into logical groups
   - Configure **Money Decimal Display**, **Number Decimal Display**, and **Show Total Row**
4. Click **Done**

### Add a Chart Widget

1. Click **Configure**
2. Drag a chart widget onto the canvas
3. Fill in chart details:
   - **Title**, **Target Object**, **Color**, **Type**, **Format**, **Group By**
   - For bar charts: **Bar Orientation**, **Sort Order**, **Group Format** (Clustered or Stacked)
   - **Only Include Items Where** — Filter criterion
4. Click **Create**, then **Done**

> [!important]
> Chart widget rules:
> - Charts do not support sub-sub-objects as Target Objects
> - Only the **owner/creator** can modify a chart widget
> - Maximum **3 attributes** in Sum/Average/Minimum/Maximum drop-down for bar charts
> - Stacked/Clustered bar charts do **not** support Count type
> - Widget Library is disabled — widgets cannot be added to the Widget Library
> - If an attribute is secured with FLS after being added to canvas, the widget throws a 400 error

### Arrange Widgets in Canvas View

Two widget size categories:
- **1-column**: Status Report Update, Cost Metrics, Effort Metrics, and most attribute widgets
- **2-column**: Table widgets (best practice — single-column reduces readability)

The maximum canvas height is 24,000 px. Configure the column layout (4, 6, or 8 columns) via **Configure > Layout**.

### Analyze Investment Trends

Trending indicators compare the latest draft status against the last published status:

| Indicator | Meaning |
|-----------|---------|
| Up arrow | Latest status is **better** than prior published status |
| Horizontal (neutral) arrow | Latest status is the **same** as prior published status |
| Down arrow | Latest status is **worse** than prior published status |

**Status colors:**
- **Green** — On Track
- **Orange** — Needs Help (Minor Variance)
- **Red** — At Risk (Significant Variance)

> [!note]
> The initial status report for a new investment shows no trending indicators — trending arrows appear after multiple published reports exist.

**Overall Status badge display rules:**

| Report Status | Latest Flag | Badge Shown? |
|---------------|:-----------:|:------------:|
| Draft | Null | No |
| Final | Yes | Yes (on project tile and investment banner) |
| Changed Final → Draft | Null | No (if no other Final report); otherwise, next most recent Final report is used |

### Add Custom Attributes to Status Reports

If custom attributes have been created for the **Status Report** object in Clarity Studio with the following data types, they can be added to the investment status: String, Large String, Number, Money, Boolean, Date, Single-Valued Lookup, Calculated Number, Calculated String, Calculated Date.

> [!note]
> The Status Report object is installed with the **PMO Accelerator** add-in.

### Edit Lookup Values for Status Fields

Administrators can add values (such as "Started") to the **Status Report Status** lookup and map colors to those values:

1. In Classic PPM, go to **Administration > Data Administration > Lookups**
2. Open the **Status Report Status** lookup and add a new value
3. Go to **Administration > Objects**, open the **Status Report** object
4. Open the relevant attribute (e.g., **Schedule Status**) and use **Display Mapping** to associate a color with the new value
5. Click **Save and Return**

### Save Your Views

Use **Saved Views** to save and share canvas configurations. Key actions:
- Save an existing grid configuration
- Update views using **Quick Save**
- Access views saved by other users
- Mark views as favorites
- Select a default view

### Export Canvas to PDF

1. Click the **Canvas** module
2. Click **Export to PDF**
3. Click **Download** to save

> [!important]
> The PDF reflects exactly what is on screen (WYSIWYG). Scrollable widget content is not included. With Group By enabled, only the first **5 expanded tables** appear in the export.

### Publish a Status Report

1. Open the investment and click **Status**
2. In Canvas view, click **Preview** to review the report
3. Select **Size** (Letter, Legal, Tabloid, A4, HD Display, Laptop, Tablet, Fit to Content) and **Orientation** (Portrait or Landscape)
4. Click **Refresh** to apply format changes
5. Click **Publish** to finalize the report as a PDF

> [!important]
> Review text formatting in **Preview** mode before publishing. Text may be clipped if fields are not sized to accommodate all content. Adjust widget sizes in **Configure Canvas** view if needed.
>
> If Preview generates an error "Attribute 'cop_report_date' was locked and cannot be changed," contact your administrator — a process may be locking the Report Date field.

> [!warning]
> The report preview may appear blank if:
> - The report exceeds 2 MB
> - The report includes rich text fields
> - The report includes an image file larger than 2 MB
> If Japanese characters do not appear, install the required fonts on the Clarity server.

**After publishing:**
- A new status report instance appears in the Reports grid
- **Report Status** changes from **Draft** to **Final**
- Values from the previous report instance are copied to the new one

---

## Working with the Reports Grid

The **Reports Grid** provides a list-based view of all status report instances for the investment.

### View Status Reports

1. Open the investment
2. Click **Status > Reports**

> [!note]
> The **Attachment** column contains a link to the published PDF for Final reports. Always ensure the Attachment column is visible in the Reports grid.
> After upgrading to Clarity 16.0.1, if an Attachment is available and Report Status is **Draft**, the report name is linkable.

### Create a Status Report

1. Open the investment and click **Status > Reports**
2. Click the **+** icon to add a row at the top of the grid
3. Select mandatory fields using the **Column Panel**
4. Enter values in required fields

### Edit a Status Report

Four editing methods:
- Edit fields directly in the grid (inline)
- Edit using the **Details** panel
- Use **Bulk Edit** for multiple rows
- Click the report name (only available when not yet published)

> [!note]
> If the Attachment is available and Report Status is **Final**, the report name is non-linkable (read-only).

### Publish from the Reports Grid

1. Click the investment report name to open it in Canvas view
2. Click **Preview**, then **Publish**

> [!important]
> After generating a PDF, you can edit values in the grid, but changes are **not** automatically reflected in the published PDF. To update the PDF:
> 1. Change **Report Status** from Final to Draft
> 2. Click the report name
> 3. Click **Preview**, then **Publish**

### Indicate the Most Recent Record

The Reports grid includes a **Latest** checkbox to mark the most recent record where **Report Status** is **Final**.

> [!note]
> The **Latest** attribute does not dynamically update. Refresh the page to apply field edits within the Reports grid.

### Right-click Context Menu

Right-click a cell to access:
- **Insert Row Below** — Adds a new row to the grid
- **Delete Row** — Removes the selected row
- **Chart Range (beta)** — Creates a chart from grid data

---

## Canvas vs. Reports Grid — Feature Comparison

| Capability | Canvas View | Reports Grid |
|-----------|:-----------:|:------------:|
| Generate investment status report PDF | Yes | Yes |
| Publish new report with values from previous report | Yes | Yes |
| View and edit custom attributes | Yes | Yes |
| Review current and previous status reports | Investment manager: Status Report - Edit All; Team members: Status Report - View All | Yes |
| Saved views | No | Yes |
| Filtering | No | Yes |
| Configurable report layout (Key Accomplishments, Effort Metrics, Cost Metrics, etc.) | Yes | No |
| Status Report grid access rights | No | Yes — Status Report - View / Edit (instance or global) |
| Delete status report instances | No | No |

> [!note]
> Use **either** the Status tab **or** the Status Report grid — not both simultaneously. Using both can create confusion:
> - Publishing a PDF from the Status tab creates a new instance and updates Report Status to Final in the grid, but the grid's Final status does not generate a PDF.

---

## Related
- [[Canvas Dashboard]]
- [[Getting Started]]
- [[_MOC Investments]]

%%Source: p1379-1409%%
