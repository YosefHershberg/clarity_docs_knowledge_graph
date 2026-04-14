---
title: Staffing Grid
tags:
  - howto
  - concept
aliases:
  - Staff Grid
  - Staffing Page
  - Cross-Object Staffing Grid
canonical: true
audience: rm, pm
domain: resources
---

# Staffing Grid

## Overview

The **Staffing Grid** is a cross-object grid in Clarity's Staffing workspace that provides a unified view of resource allocation across all investment types — projects, ideas, custom investments, and teams — in a single spreadsheet-like interface. It is the primary tool for resource managers and project managers to manage, review, and update allocations at scale.

> [!note]
> You need the **Staffing - Navigate** access right to view the Staffing Grid page.

## Grid Layout Capabilities

The Staffing Grid leverages the full power of Clarity's common grid. Key capabilities include:

- **Inline editing** — Right-click any cell to edit allocation data directly in the grid
- **Column management** — Pin, resize, reorder, and reset columns; use the Column Panel to show/hide attributes
- **Conditional formatting** — Apply color rules to cells or rows to highlight data patterns
- **Group By** — Drag up to three column headers to the Group By area to organize data into logical groups
- **Favorites (Starred)** — Mark investments and resources as favorites using the Starred attribute
- **Bulk Delete** — Delete multiple staffing records at once
- **Export to CSV** — Export up to 250,000 rows to CSV (compared to 25,000 in Classic PPM)
- **Drag functionality** — Use drag-and-drop to populate allocation data
- **Filters** — Advanced filtering with filter groups for complex conditions
- **Details Panel** — Two-column layout for editing fields without leaving the grid
- **Saved Views** — Save, share, and set default views
- **Widgets** — Configurable visual widgets (Number Tile, Pie, Bar, Progress Ring, Target)
- **Charting** — Embedded charting experience similar to Microsoft Excel or Google Sheets

### Attribute Sections in the Grid

The cross-object grid organizes columns into attribute sections:

| Section | Attributes Available |
|---------|---------------------|
| **Common Investment** | Name, Investment ID, Type — shared across all investment types |
| **Staffing** | Resource, Role, Booking Status, Allocation, Default Allocation % |
| **Project / Idea / Custom** | Attributes specific to each investment type |
| **Totals** | TSV attributes: Actuals, Allocations, ETC spread across time periods |

> [!important]
> The cross-object Staffing Grid does **not** support Aggregated Calculated Attributes (ACA), Calculated Attributes, or Formula Attributes.

## Hide Attributes in the Staffing Workspace

Administrators can simplify the user view by hiding attributes through the **Staffing Tile** in the Administration workspace.

- Use the **Investment Attributes**, **Staff Attributes**, and **Resource Attributes** tabs to control which fields appear
- Clear the **Include** flag for any attribute you want to hide
- Hidden attributes affect: Timelines, Staffing Grid columns, Filtering, and Widgets
- Hidden attributes do **not** affect the Resource Histogram

**Mandatory fields that cannot be hidden:**

| Object | Mandatory Fields |
|--------|-----------------|
| Investment | Finish, Has Staff, Start |
| Resource | Is Staff |
| Team (Staff) | Default Allocation, Staff Type |

> [!note]
> You need the **Administration - Staffing - Navigate** access right to access the Staffing tile in Administration.

## Support for Business Rules

Business rules can be applied to the **Staff Object** in the Staffing workspace, giving administrators fine-grained control over editing and visibility of staffing data.

**Example use case:** Make the Staffing module read-only when a project's Work Status is "On Hold."

To configure:
1. Create a business rule associated with the Staff object
2. Set the **Target object** to `Staff`
3. Use the **View Page** rule type
4. Apply a filter on `Work Status`
5. Enable **Disable Editing Target Object** and **Disable Deleting Target Object**

Key components visible to users in the Staffing workspace:

| Component | Description |
|-----------|-------------|
| **Staff Grid** | Cross-object grid for managing allocations across all investment types |
| **Allocations Timeline** | Visual Gantt-style view with configurable columns and multiple perspectives |
| **Resource Summary Mode** | Histogram visualization with configurable over/under thresholds |
| **Multiple Tabs** | Allocations by Investment, Allocations by Resource, Assignments by Investment, Assignments by Resource, Investments |

## Conversations About Staffing

You can start conversations with team members directly from the Staff Grid using the Details panel.

**Steps:**
1. In the Main Menu, select **Staffing** > **Staff Grid**
2. Click a resource or role for an investment — the **Details panel** appears
3. Click the **Conversations** tab
4. Start a conversation or reply

**Example uses:**
- In a conversation about a resource or role, @mention the resource manager
- In a conversation about an investment, @mention the project coordinator

### Conversation Notifications

- Notifications appear on the **bell icon** at the top of every Clarity page
- Badge count disappears once you click the bell
- The panel shows the sender's avatar and the first line of their message
- Click a notification to open context — you can reply, edit, or delete
- Staffing conversation notifications include a **Go to Staffing** button
- A user can be @mentioned if they have the **Staffing - Navigate** access right
- Deleting a conversation also deletes its notifications

## Setup View Options

Adjust the time-period display (TSV — time-scaled values) for the grid.

1. Click **View Options** in the layout
2. In **Periods**, select Weeks, Months, Quarters, or Years
3. In **Type**, select **Periods** (set Start/End period) or **Duration** (set start + number of periods)
4. Set **Sum of Periods** or **Grand Totals** for the Totals column:
   - **Sum of Periods** — Totals only the periods visible in the layout
   - **Grand Totals** — Totals the full investment duration regardless of visible periods
5. In **Per-Period Metrics**, choose: Total only / Periods only / Total and Periods
6. Toggle **Show Total Row** to display an aggregation row at the top of the grid
7. Toggle **Show Indicator on Non-Default Values** to flag cells that deviate from default allocation %
8. Configure **Money Decimal Display** and **Number Decimal Display** as needed
9. Toggle **Wrap Text** for long text attributes

> [!note]
> TSV attributes can be relabeled using Field Level Security but cannot be secured. Financial data is read-only in the grid. Forecast data only appears if a detailed cost plan exists for the investment.

## Resource Summary Mode (Histograms)

Enabling **Resource Summary Mode** transforms the grid to display staffing data as a histogram grouped by resource.

**Steps to enable:**
1. In the Main Menu, click **Staffing** > **Staff Grid**
2. Toggle **ON** Resource Summary Mode
3. Click **Confirm** to replace existing groupings with Resource grouping

**When Resource Summary Mode is active:**
- Grid automatically groups by Resource
- Histograms appear for columns that include Availability: Allocation, Hard Allocation, Total Usage
- Histogram colors reflect configured Over/Under Allocation Thresholds from General Settings:
  - **Over-allocated** → Red (above threshold)
  - **Under-allocated** → Green (below threshold)
  - **Within range** → Grey

**Hamburger menu options per allocation cell:**

| Option | Description |
|--------|-------------|
| None | No numbers displayed |
| % Utilization | Allocation ÷ Availability |
| Allocation/Availability | Shows both values in one cell |
| Availability - Allocation | Shows remaining availability |

> [!note]
> Limitations in Resource Summary Mode: max 3 Group By attributes (Resource must be one); Export to CSV is unavailable; Replace and Reallocate are unavailable in the Staff module under Hierarchies.

## Setting Up Views

### Investment to Resource View

Groups investments at parent level with resource/role allocations as children.

1. Open Staffing > Staff Grid
2. Click **View Options** — configure periods and metrics
3. Drag **Common Investment: Name** to the **Group By** area
4. Add filters: Resource Type = Labor, Staff Type = Resource & Team, date range, investment types
5. Save the view

### Resource to Investment View

Groups resources at parent level with investment allocations as children.

1. Open Staffing > Staff Grid
2. Click **View Options** — configure periods and metrics
3. Drag **Staffing: Resource** to the **Group By** area
4. Add the same set of filters as above
5. Save the view

### Role to Resource View

Groups staffing requests by role.

1. Open Staffing > Staff Grid
2. Click **View Options** — configure periods and metrics
3. Drag **Staffing: Role** to the **Group By** area
4. Add filters: Staff Type = Role, date range, investment types
5. Save the view

## Allocating Resources

**To add a new staffing allocation:**
1. Navigate to **Staffing** > **Staff Grid**
2. Click the **Add Row (+)** icon
3. Enter the Resource Name or Role — a drop-down list appears with matching values
4. Select the resource and investment name
5. Fill in remaining mandatory fields — Clarity saves the new staffing request

**To reallocate (partial or complete):**
1. Right-click a resource/role row and select **Reallocate**
2. Toggle **Use Investment Start** / **Use Investment Finish** or set custom dates
3. Set the **Default Allocation %**
4. Select **Partial** (date-range only) or **Total** (replaces all allocations)
5. Click **Reallocate**

**To replace a resource:**
1. Right-click a resource row and select **Replace**
2. Set date range and Partial/Total override type
3. Click **Replace**

## Additional Features vs. Staffing Plan Page

| Feature | Staffing Grid | Classic Staffing Plan |
|---------|--------------|----------------------|
| View ETCs and Actuals | Yes | No |
| Edit allocations | Yes | No |
| Show all investments (beyond telescope period) | Yes | No |

## Related

- [[Allocations Analysis]] — Allocations timeline (Investment and Resource tabs)
- [[Assignments Analysis]] — Assignments-based staffing analysis
- [[Staffing Scenarios]] — What-if scenario planning
- [[_MOC Resources]]

%%Source: Analyze Resource Allocation and Staffing — Leveraging the Staffing Grid%%
