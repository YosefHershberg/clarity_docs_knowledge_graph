---
title: Working with Pages
tags:
  - howto
aliases:
  - Custom Pages
---

# Working with Pages

## Overview

The **Pages** workspace in Broadcom Clarity provides a streamlined, centralized environment where users can access a tailored collection of Clarity or external application pages.

Unlike traditional navigation, this workspace lets you surface relevant content ג€” such as key dashboards, actionable reports, or integrated third-party pages ג€” all from a unified, user-friendly location without having to drill into individual projects or object instances.

At the core of the Pages workspace is the **Canvas** functionality, which lets users design their workspace experience.

Through Canvas, you can add and arrange a variety of widgets ג€” tables, charts, and more ג€” to visualize and interact with data from multiple sub-objects (tasks, risks, issues, to-do lists) on a single page.

The layout is customizable using drag-and-drop tools, allowing grid-like displays, widget resizing, and adaptation to evolving business needs.

---

## Access Rights

Ensure you have the appropriate access rights before using this feature:

| Access Right | Description |
|---|---|
| **Page - Create** | Allows user to create Pages in Clarity |
| **Page - Creator (Auto)** | Allows the Page creator to view, edit, and delete the Page |
| **Page - Delete** | Allows user to delete specific Pages |
| **Page - Delete - All** | Allows user to delete all Pages |
| **Page - Edit** | Allows user to view and edit specific Pages |
| **Page - Edit - All** | Allows user to view and edit all Pages |
| **Page - Navigate** | Allows user access to Pages (user sees only Pages they have access to) |
| **Page - View** | Allows user to view specific Pages |
| **Page - View - All** | Allows user to view all Pages |

---

## Accessing Pages

Follow these steps:

1. In Clarity, select **Pages**.
2. Select the relevant page to open it.
3. Select the relevant module on the page to open it.

> [!note]
> Key points about Pages:
> - Every page is associated with a blueprint. See [[Blueprints]] ג†’ *Pages: Configure Blueprints* for details.
> - Classic PPM includes a new Studio object called **"Page"**, which supports Instance, Global, and OBS access rights.
> - Attributes in the Page object can be secured using **Field Level Security**.
> - Pages cannot be seen in Classic PPM.
> - You cannot define sub-objects for the Page object.
> - Channels within a blueprint are limited to the governor limit of **15**.
> - The Page object in Classic PPM has the event-enable flag, but processes are not supported on the Page object.
> - When setting security, two **"Page"** objects appear in the list ג€” one refers to the Classic PPM portlet page, the other to the Clarity page.

---

## Setup View Options

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. **Show Total Row**: Turn on the toggle to show a Total row at the top of the grid (just below the header row). Default is **Off**. Configure column aggregation using the column header's hamburger menu.

### Aggregation Types by Attribute Type

| Aggregation | Number / Money / Calculated / Integer | Percent | Date | Boolean | TS |
|---|---|---|---|---|---|
| **Sum** | ג“ | | | | |
| **Average** | ג“ | | | | |
| **Count** | ג“ | ג“ | ג“ | ג“ | ג“ |
| **Min / Max** | ג“ | ג“ | ג“ | | |
| **None** | ג“ | ג“ | ג“ | ג“ | ג“ |

5. Configure **Money Decimal Display** and **Number Decimal Display** for how money and number attributes are shown.
6. **Wrap Text**: Turn on the toggle to wrap text for all attributes on the grid. Default is **Off**.
7. Click **X** to close the View Options panel. The page applies your settings.

### Per-Period Metrics (TSV)

When working with time-scaled values:

1. In **Periods**, select a unit of time: *Weeks*, *Months*, *Quarters*, or *Years*.
2. In **Type**, choose how to set up per-period metrics:
   - **Periods**: Set **Start Period** and **End Period**. The application adjusts time periods accordingly.
   - **Duration**: Set **Start Period** and indicate the number of periods (Duration), with an optional offset.
3. Define **Totals** column behavior:
   - **Sum of Periods**: Totals the displayed periods only (e.g., 6 of 12 months if only 6 are shown).
   - **Grand Totals**: Totals the full investment duration regardless of how many periods are displayed.
4. **Per-Period Metrics** display options:
   - **Total**: Shows only the Totals field ג€” no per-period columns.
   - **Periods**: Shows only per-period columns ג€” no Totals field.
   - **Total and Periods**: Shows both per-period columns and the Totals field.

> [!important]
> You must select per-period metric attributes from the **Column Panel**.

5. **Select Total and Period Columns Separately**: Turn on to configure separate per-period metrics for Totals and Periods in the Columns panel. Default is **Off**.

> [!important]
> When switching **Select Total and Period Columns Separately** from ON to OFF:
> - Clarity retains the previously selected **Per-Period Metrics** values in View Options and updates the grid.
> - The Columns panel reverts to displaying only one set of per-period metrics.

6. **Show Indicator on Non-Default Values**: Toggle on to display visual indicators when the following attributes are updated from their defaults:
   - Default allocation percentage
   - Grand Totals or Totals column
   - Allocation Start and Finish date columns
   - Individual allocation per-period metrics

7. Click **X** to close the View Options panel.

> [!note]
> Key points about per-period metrics:
> - TSV attributes can be relabeled using Field Level Security, but cannot be secured.
> - TSV totals can be used in widgets.
> - Custom TSV data can be included and edited on the page.
> - TSV totals cannot be added to the Details Panel.
> - Forecast data only appears in TSV if a detailed cost plan has been created for the investment.
> - Financial data is read-only on the page.

A scrolling per-period metrics widget appears on the page. Use the front and back arrows on the widget to cycle through periods; this also updates **Start Period** and **End Period** in View Options.

---

## Configure Canvas to Add Table Widgets

You can configure a Canvas defined in a Pages Blueprint to include table-type widgets for viewing data across multiple sub-objects on a single page. By default, Canvas is blank and must be configured.

Using the Canvas layout you can:

- Add widgets for the following sub-objects:
  - **Tasks**
  - **Risk**
  - **Issues**
  - **Changes**
  - **To Dos**
- Modify the canvas by dragging available widgets to the canvas. Grey shading appears on the target drop area.
- Change the widget layout at any time in configure mode and save it as part of a saved view.
- Remove widgets from the canvas.
- Resize widgets in the canvas.

### Steps to Add Widgets

1. In Clarity, select **Pages**.
2. Select a relevant page to open it.
3. Select the relevant canvas module on the page to open it.
4. Click **Configure**. The Configure Canvas panel lists available widgets.
5. Drag and drop the required widgets onto the canvas layout. You can add each table widget multiple times; however, the total is limited to **8 widgets** (7 table widgets + 1 Action Item widget).
6. Click **Done** to save the changes.

> [!note]
> Key points about canvas widgets:
> - A counter tracks how many times each table widget has been added.
> - If you need more than 8 table widgets, create an additional Canvas.
> - A maximum of **10 columns** can be added to a table widget.
> - Table widgets show up to **25 rows per page**.
> - Widget layouts are saved as part of the **Saved View**.
> - Each widget's settings are saved individually as part of the view.
> - You cannot define a single filter across all widgets ג€” each widget must have its own filter.
> - Sub-object widgets do not show the parent's view.

---

## Configure Widgets in Canvas

Each table widget added to the canvas has its own **Search box** and **Configure** button, visible only when hovering over the widget.

You can:

- Add or remove columns displayed in the widget (max **10 columns**).
- Resize columns in the widget.
- Edit data in the widget (you can only view objects for which you have permission).
- Review and act on process-based action items using the **Action Item widget**.

### Steps to Configure a Widget

1. In Clarity, select **Pages**.
2. Select a relevant page to open it.
3. Select the relevant canvas module on the page to open it.
4. Hover over the required table widget and click **Configure**. A configuration dialog appears.
5. In the configuration dialog:
   a. Rename the table widget.
   b. Define a widget filter using the **Add Filter** box.
   c. Define the column layout using the available columns in the right panel.
6. Click **Done** to save the changes.

---

## Setup Layout in the Canvas

You can configure the column layout in Canvas with the following options:

- **4-Columns**
- **6-Columns**
- **8-Columns**

### Steps to Set Layout

1. Open an investment.
2. Select the relevant canvas module on the investment to open it.
3. Click **Configure**.
4. Click the **Layout** tab in the left panel.
5. Select the column layout: **4-Columns**, **6-Columns**, or **8-Columns**.

> [!note]
> When you change the column layout:
> - **Increasing columns**: The layout retains the previous column sizes and adds new columns on the right.
> - **Decreasing columns**: Widgets in the right-most columns are moved below all other widgets.

> [!warning]
> **Known Issue**: The UI text indicates that PDF export is available for 4-column and 6-column layouts. However, Canvas does not offer an export to PDF option. This will be corrected in an upcoming patch of Clarity.

---

## Working with the Action Item Widget

Along with table-type widgets, you can add an **Action Item widget** to the Canvas to track project progress and help ensure projects are complete and on time.

The Action Item widget displays:

- Process-based reminders about work assigned to you or by you to others, color-coded by action item priority.
- **Object Type** and **Instance Name** for each action item, regardless of whether it is in the Open, Pending, or Closed tab.
- Instance Name is linkable for Investments (navigates to the first Module of the Investment as defined in the Blueprint), but not for Sub-Objects.

### Action Item Tabs

The Action Item widget has three tabs:

| Tab | Description |
|---|---|
| **Open** | Action items awaiting the user's action |
| **Pending** | Action items acted on by the user but pending with other users |
| **Closed** | Completed actions |

### Available Actions

Actions available are: **Approved**, **Rejected**, and **Approved With Conditions**.

- If three or fewer actions are available, all are shown as individual buttons.
- If more than three actions are possible, the first two are shown and the remaining appear in a **More** menu.

### Action Item Card Details

- Displays the subject and the first two lines of the description.
- Click the action item subject to view the full description, the selected action, and other users the action is awaiting.
- Displays a count of the number of reviewers.

> [!note]
> Key points about the Action Item widget:
> - Acting on an action item shows a toast notification and removes the card from the **Open** tab.
> - Cards moved to **Closed** show the user's action and who took the last action.
> - Instance Name is **not linkable** for Sub-Objects ג€” it appears in black italics.
> - The **More** button allows the user to change their action if needed.
> - Action Item cards within widgets cannot be resized.
> - The **Closed** tab displays actions up to **one year old**.
> - Search and sorting are not available for Action Items.
> - Manually created action items are not displayed in the Action Item widget.
> - The action item does not display the due date.

---

## Audit Module for Pages

The Clarity audit capability is available in the Pages workspace. Key benefits include:

- **Change Tracking and Accountability**: Provides a detailed record of who made changes, what was changed, and when ג€” ensuring accountability for modifications to shared workspaces.
- **Security and Compliance**: Helps organizations demonstrate control over access and modifications, supporting regulatory compliance and internal governance.
- **Troubleshooting and Error Resolution**: Allows administrators to quickly identify what changed and who made the change, supporting faster recovery of the intended setup.

### Audit Grid Column Names

Clarity and Classic PPM use different column names in the audit grid:

| Clarity Audit Name | Classic Audit Name |
|---|---|
| **Name** | Name |
| **Object Name** | Object * |
| **Record** | Record |
| **Parent** | Parent Name |
| **Changed Date** | Date |
| **Attribute** | Attribute |
| **Attribute ID** | Attribute Code |
| **Changed By** | Changed By |
| **Operation** | Operation |
| **Old Value** | Old Value |
| **New Value** | New Value |
| Record ID, Parent ID, Grandparent, Grandparent ID | *(not visible in Classic)* |

### Verify Prerequisites

Before using the Audit feature, ensure you have the following permissions:

- **Audit Trail - View - All**: Allows viewing the Audit Trail for any object in Classic and Audit for any object in Clarity.

| Location | Access Right |
|---|---|
| Administration > Audit tile | **Administration - Audit - Navigate** |
| Audit Module | **Audit Trail - View - All** |

### View Audit Details

The Audit module is available for all Blueprints and all API-enabled objects, including:

- Agreements
- Custom Investment Types
- Custom Objects
- Level 3 Sub-Objects (OOTB and Custom)
- Hierarchies
- Ideas
- Pages
- Projects
- Roadmaps
- Plans
- Cost Plan and Cost Plan Details
- Budget Plan and Budget Plan Details
- Benefit Plan and Benefit Plan Details

---

## Related

- [[_MOC Pages Objectives]]
- [[_MOC Administration]]

%%Source: p1544-1559%%

