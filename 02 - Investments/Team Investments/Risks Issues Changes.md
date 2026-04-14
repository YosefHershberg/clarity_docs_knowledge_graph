---
title: Team Investment Risks, Issues, and Changes
tags:
  - howto
aliases:
  - Team RIC
canonical: true
audience: pm
domain: investments
---

# Manage Risks, Issues, and Changes for Team Investments

## Overview

The **Risks, Issues, and Changes (RIC)** module is a comprehensive project management tool designed to help scrum masters and project managers effectively manage project uncertainties and modifications across all investment types — Projects, Custom Investments, Ideas, and Team Investments.

The module operates at the abstract investment level, making it versatile and accessible for various organizational structures.

> [!important]
> The **Agreements** module (also accessible within investments) enables you to define and manage agreements between investments. Administrators must manually add the Agreements module to relevant blueprints — it is not automatically included in the default blueprint.

---

## Prerequisites

Before working with Risks, Issues, and Changes:
- Verify you have the required access rights (see [[Access Rights|Project and Portfolio Management Access Rights]] for the full list)
- Ensure the **Risks**, **Issues**, and **Changes** modules are added to the investment's blueprint

---

## Setting Up View Options

1. Navigate to the investment and click the relevant layout
2. Click **View Options**
3. Configure the following settings:

### Show Total Row
- Toggle **On** to display a Total row at the top of the grid (below the header row)
- Default: **Off**
- Configure column aggregation using the column header's hamburger menu

**Supported aggregation types by data type:**

| Aggregation | Number / Money / Calculated / Integer | Percent | Date | Boolean | TS |
|-------------|:-------------------------------------:|:-------:|:----:|:-------:|:--:|
| Sum         | Yes | Yes | | | Yes |
| Average     | Yes | Yes | | | |
| Count       | Yes | Yes | Yes | Yes | Yes |
| Min / Max   | Yes | Yes | Yes | | Yes |
| None        | Yes | Yes | Yes | Yes | Yes |

### Other View Options
- **Money Decimal Display** — Set decimal precision for money attributes
- **Number Decimal Display** — Set decimal precision for number attributes
- **Wrap Text** — Toggle On to wrap text for all attributes in the grid (default: **Off**)

4. Click **X** to close View Options and apply settings

---

## Upload Documents to RIC Records

You can upload, download, and delete documents attached to Risks, Issues, or Changes.

1. Open the investment and navigate to **Risks**, **Issues**, or **Changes**
2. Click **Column Panel** and select **Document**, then close the panel
3. Hover over the **Document** cell in the grid and click the **Edit** (pencil icon)
4. Click the **Upload** icon and select a file, then click **Open**
5. A link appears in the Document column — click it to download

> [!note]
> - You can attach a maximum of **10 documents** per RIC record
> - File types are controlled by the **Authorized File Extensions** setting in Classic PPM Administration
> - Fields on the RIC object can be secured using the **Field Level Security** grid

---

## Managing Records in the Grid Layout

The Clarity Grid enables the following actions on RIC records:

- **Edit data** via right-click or inline cell editing; also supports pin, resize, reorder, and reset columns
- **Conditional Formatting** — Apply color rules to cells or rows for quick visual analysis
- **Column Panel** — Show or hide columns
- **Favorites** — Mark records with a star
- **Date Shifting** — Use **+** or **-** to shift date field values
- **Drag to Populate** — Drag functionality to fill data across cells
- **Group By** — Drag up to 3 column headers to group data into logical rows
- **Charts** — Embedded charting similar to spreadsheet applications (Excel / Google Sheets)
- **Bulk Delete** — Delete multiple records simultaneously
- **Export to CSV** — Export up to 250,000 rows (Clarity); Classic PPM supports up to 25,000 rows
- **Search** — Filter records by name or ID using the Search bar
- **Filters** — Advanced filtering for complex filter conditions
- **Details Panel** — Two-column layout panel for editing fields
- **Widgets** — Visual summaries of RIC health
- **Saved Views** — Save, modify, and share multiple views

---

## Working with Widgets

Widgets provide a visual summary of RIC health. Available widget types:

| Widget | Description |
|--------|-------------|
| **Number Tile** | Displays a specific count or metric |
| **Pie** | Grouped pie chart by a selected attribute |
| **Bar** | Bar graph with Group By and aggregation options |
| **Progress Ring** | Ring chart with a number metric |
| **Target** | Displays goals or constraints on number/money attributes (Roadmaps and Staffing Workspace) |

**To manage widgets:**
- Click **Show Widgets** to display the widgets toolbar
- Click **Manage Widgets** to open the **Add Widgets** dialog — add from My Widgets or the Widget Library
- Use **Interactive Filtering** on widgets for drill-down analysis

---

## Create Custom Sub-Objects for Investments

If your administrator has enabled the **Enable Create Dialog** toggle in the blueprint for a sub-object, a **New [Sub-Object]** button appears in the sub-object's grid, timeline, and board views.

Clicking **New [Sub-Object]** opens a create dialog based on the attributes configured in **Edit Module Details** for that sub-object. Required attributes are marked with an asterisk.

---

## View Action Items in Investments

The **Action Items** module displays Process Action Item status and approval details for each action item associated with the investment. It is available in Projects, Ideas, Custom Investments, and Team Investments.

> [!note]
> No additional security rights are required — any user with View access to the investment can see all Action Items for it.

**Action Item display rules:**
- Process Action Items created in Classic PPM are grouped by **Open Items** and **Closed Items**
- Sorted by most recently initiated, then alphabetically by Subject
- Default view: summary of Open Items with Closed Items collapsed
- Summary mode shows: Subject, Priority, and current Stage

**Action Item lifecycle states:**

| State | Description |
|-------|-------------|
| **Initiated** | No actions have been taken yet |
| **Decisions** | At least one assignee has responded |
| **Closed** | Action item is completed |

> [!note]
> Action Items for Sub-Objects are not displayed. The Sent To Recipient list is displayed alphabetically — use **Show All** / **Show Less** links when the list exceeds one line.

---

## Copy an Existing Risk, Issue, or Change Request

Available from Clarity 16.2.1 and later. Copy a single RIC record via the right-click menu or **Copy** button.

**To copy a RIC:**
1. Navigate to the investment's **Risks**, **Issues**, or **Changes** module
2. For a specific record, right-click and select **Copy**
3. In the copy dialog, enter a **Name** for the copy
4. Click **Copy**

> [!important]
> Key rules for copying:
> - The **Copy** option appears in the right-click menu only if you have the required Instance, OBS, and Global access rights
> - Selecting multiple RICs grays out the Copy button — only **single-item copies** are supported
> - The copied record's Name is pre-filled as "Copy \<original name\>"
> - All field values are copied, including To Do statuses
> - Tasks associated with Risks or Issues are **not** copied
> - Conversations from the original RIC are **not** transferred to the copy

---

## Create a New RIC from an Existing RIC

Available from Clarity 16.2.1 and later. Create a new Risk, Issue, or Change Request from an existing one, with a back-link to the originating record.

**Supported cross-creation paths:**

| From | Can Create |
|------|-----------|
| **Risk** | New Issue, New Change Request |
| **Issue** | New Risk, New Change Request |
| **Change Request** | New Risk, New Issue |

**To create a new RIC from an existing one:**
1. Navigate to the investment and open the relevant **Risks**, **Issues**, or **Changes** module
2. Right-click a record and select the **Create \<Risk / Issue / Change Request\>** action
3. In the create dialog, enter a **Name** and **ID**
4. Click **Create**

> [!important]
> Key rules:
> - After creation, you remain in the originating RICs module — the new item appears alphabetically in the target module
> - The **Originating Issue/Risk** field displays as a link if **Enable Properties Navigation** is enabled in the RICs Blueprint; otherwise it displays as a string
> - Administrators can rename the **Originating Issue/Risk** field using the **Attributes** capabilities in Studio
> - This capability is only available on the grid via right-click — not from the Properties page
> - Not available from RIC modules within the Hierarchy workspace

---

## Create To Dos for RIC Records

Track activities needed to mitigate or manage specific Risks, Issues, or Changes using To Dos.

**Prerequisites:**
- You have one of the following access rights: **To Do - Create - All** or **To Do - Edit - All**
- The investment is associated with a blueprint that includes the Risks, Issues, and Changes modules
- You have the required rights to create and edit RIC records

**To create a To Do:**
1. Navigate to the investment's **Risks**, **Issues**, or **Changes** module
2. Select a specific record and click **Details** to open the Details panel
3. Click **To Dos** to open the To Do workspace
4. Click **Expand** to enlarge the workspace
5. Click **Add Row** and enter the name of the To Do item
6. Press **Enter** or click **Save**

The new To Do item is now available both in the investment's **To Dos** module and on the relevant Risks/Issues/Changes tab in the **To Dos Workspace**.

---

## Related
- [[Getting Started]]
- [[Status Reports]]
- [[_MOC Investments]]

%%Source: p1369-1378%%
