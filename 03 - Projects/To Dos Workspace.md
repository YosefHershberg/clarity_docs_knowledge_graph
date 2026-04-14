---
title: To Dos Workspace
tags:
  - concept
  - howto
aliases:
  - To Dos Page
  - Global To Dos
  - Track To Dos
  - To Do Items
canonical: true
audience: pm
domain: projects
---

# To Dos Workspace

The **To Dos Workspace** is a top-level menu item in Clarity PPM that centralizes every actionable To-Do item assigned to you — across projects, custom investments, tasks, risks, issues, and change requests — into a single filterable workspace. It gives you an at-a-glance view of your workload, priorities, and progress across your entire portfolio.

%%Source: Track and Edit To Dos%%

---

## Access Rights

Clarity introduced the following global access rights for the To Dos Workspace:

| Access Right | What It Allows |
|-------------|----------------|
| **To Do - Navigate** | Access the To Dos page; see all To Dos assigned to you across all investments |
| **To Do - Create - All** | Create To Do items |
| **To Do - Delete - All** | Delete To Do items |
| **To Do - Edit - All** | Edit To Do item fields |
| **To Do - View - All** | View all To Do items |

> [!note] These access rights are assigned to the **Viewer** license type in Clarity.

> [!important] You must have the **To Do - Navigate** access right to see the To Dos page at all.

---

## Overview of the To Dos Workspace

The To Dos Workspace is organized into four pages:

| Page | Shows |
|------|-------|
| **All** | All To Dos except personal checklists |
| **Investments** | To Dos associated with investments |
| **Tasks** | To Dos associated with Tasks |
| **Risks, Issues, Changes** | To Dos associated with Risks, Issues, and Change Requests |

Switch between pages using the tabs at the top of the workspace to focus on a specific context.

---

## Associated Objects Grid

The To Dos grid is an **Associated Objects Grid**: while it is primarily for viewing and editing To Do items, you can also surface attributes from related Tasks and Investments to make informed decisions without navigating away.

You can add the following types of columns to the grid:

- **To Do attributes** — Name, Due Date, Owner, Completed, Attachment, ID
- **Task attributes** — % Complete, ETC, and other task-level fields
- **Common Investment attributes** — Corporate Priority, Manager, and other shared investment fields
- **Investment-specific attributes** — Fields from the specific Projects or Custom Investments where To Dos live

> [!tip] Use the **Assigned Resources** filter to view To Dos for specific users.

### Business Rules and Notes

> [!important] Key points to remember when working with To Dos:
> - To Dos are implemented as a **Studio Object** but cannot be leveraged in Classic PPM.
> - The **Data Warehouse** uses new To Dos tables.
> - Stock attributes are: **Name**, **ID**, **Owner**, **Due Date**, and **Completed**.
> - The **To Dos ID** field supports auto-numbering.
> - The To Dos object does **not** support Sub-Objects.
> - The To Dos object is **not** enabled for use with BPM processes.
> - You **cannot create** new To Dos from this page (creation happens within tasks/investments/RICs).
> - **To Dos Due Date** has no limitations — it can fall outside an investment's Start and Finish dates.
> - When a To Do is copied over from a **template**, Clarity populates the Due Date with whatever value is in the Due Date field before copy (including blank).
> - You can create **custom attributes** for the To Dos object in Clarity Studio.
> - You can star To Dos to mark them as favorites.

---

## Managing Attachments for a To Do

You can attach files to To Do items to provide supporting documentation.

### Attachment Limits

- Maximum of **10 files** per To Do.
- You can only upload **one file at a time**.

> [!warning] If you attempt to upload more than 10 files, an error message appears: "Uploading more than 10 files is not allowed."

### Upload an Attachment

1. Open **To Dos** in Clarity.
2. In **Columns**, check the **Attachment** field to make it visible in the grid.
3. Click the **Edit** icon in the Attachment column for a To Do.
4. Click the **Upload File** icon in the Attachment panel.
5. Select a file from your local machine and click **Open**.

### View an Attachment

1. Open **To Dos** in Clarity.
2. Click the **Edit** icon in the Attachment column for a To Do.
3. Click the uploaded file name to download and view it.

### Delete an Attachment

1. Open **To Dos** in Clarity.
2. Click the **Edit** icon in the Attachment column for a To Do.
3. Click the **Delete** icon next to the file to remove it from the list.

---

## Setup View Options

1. Log into Clarity.
2. Navigate to the **To Dos** page and click the relevant layout.
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

## Grid Layout Capabilities

The To Dos grid is a full **Clarity Common Grid** supporting the following actions:

- **Edit inline** using the right-click context menu.
- **Pin, resize, reorder, and reset** columns to personalize the view.
- Apply **Conditional Formatting** rules to color-code cells or rows.
- Use the **Column Panel** to show or hide columns.
- **Star** To Do records to mark as favorites.
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

> [!tip] See [[Grids]] for full grid capabilities documentation.

---

## Widgets

Widgets provide visual summaries of To Do health across the workspace.

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

- [[Tasks Workspace]] — Global cross-investment view of tasks; To-Dos on tasks are created here
- [[Tasks Phases Milestones]] — To-Dos within the context of a single project's tasks
- [[Risks Issues Changes]] — To-Dos can also be associated with risks, issues, and changes
- [[Grids]] — Full grid component documentation
- [[_MOC Projects]]
