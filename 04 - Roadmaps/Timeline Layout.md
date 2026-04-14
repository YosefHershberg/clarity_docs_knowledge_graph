---
title: Roadmaps Timeline Layout
tags:
  - howto
  - roadmaps
aliases:
  - Roadmap Timeline
  - Timeline View Roadmaps
  - Gantt Roadmap
canonical: true
audience: pm, leadership
domain: roadmaps
---

# Roadmaps Timeline Layout

The **Timeline layout** is the primary view for roadmaps — a Gantt-style chart showing all roadmap investments as horizontal bars plotted against a time axis. It is designed for communicating the portfolio schedule at a glance and performing date-based planning.

---

## Accessing the Timeline Layout

1. Open a roadmap from the Roadmaps list.
2. The roadmap opens in the **Timeline layout** by default.
3. If you are in a different layout, click the **Timeline** icon in the layout toggle (upper right of the toolbar).

---

## Timeline Anatomy

The timeline consists of:

| Element | Description |
|---------|-------------|
| **Investment List** (left panel) | Rows listing all roadmap items; shows key fields |
| **Gantt Area** (right panel) | Horizontal bars plotted against dates |
| **Time Axis** | The header showing dates (day/week/month/quarter/year scale) |
| **Bars** | Horizontal bars — each represents one investment |
| **Milestones** | Diamond shapes for key dates |
| **Capacity Area** | Optional strip at the bottom showing resource demand/supply |
| **Today Line** | Vertical line marking the current date |

---

## Working with Bars

### Bar Appearance

- **Bar width** = Investment duration (start to finish date).
- **Bar color** = Driven by a field (e.g., status, priority, investment type) or set manually per item.
- **Bar label** = Investment name (and optionally other fields like ID or budget).

### Moving a Bar (Rescheduling)

1. Click and drag a bar **horizontally** to move it to new dates.
2. The investment's start and finish dates update in real time.
3. Release to confirm — the investment record is updated immediately.

> [!warning] Moving Bars Updates Live Data
> Dragging a bar updates the actual investment's start/finish dates. If the investment has a detailed task schedule, check whether autoschedule is enabled — the tasks may shift accordingly.

### Resizing a Bar (Changing Duration)

- Drag the **left edge** of a bar to change the start date.
- Drag the **right edge** of a bar to change the finish date.
- The bar length updates to reflect the new duration.

### Bar Color Configuration

1. Click **View Options** → **Color By**.
2. Select a field to drive bar color (e.g., Status, Priority, Investment Type, Custom Field).
3. Clarity uses a pre-configured color palette for lookup values, or you can assign custom colors per value in Administration.

---

## Milestones on the Timeline

Milestones appear as **diamond shapes** on the timeline at their scheduled date.

### Adding a Milestone

1. Click **+ New Milestone** in the investment list (or right-click on the timeline area).
2. Enter the milestone name and date.
3. Optionally assign a color or icon.

### Moving a Milestone

Drag the diamond to a new date. The associated investment milestone record is updated.

---

## Zoom and Time Scale

Use the **zoom controls** in the toolbar to adjust the visible time scale:

| Scale | Best For |
|-------|---------|
| **Day** | Short sprints, daily detail |
| **Week** | Sprint-level planning (2–4 week view) |
| **Month** | Quarterly planning (most common for roadmaps) |
| **Quarter** | Annual portfolio view |
| **Year** | Multi-year strategic roadmap |

- Use the **zoom slider** for fine-grained control between fixed scales.
- Click **Fit to View** to auto-scale the timeline to show all investments from earliest start to latest finish.

---

## Grouping and Sorting

### Grouping Investments

1. Click **Group By** in the View Options.
2. Select a field to group by (e.g., Status, Investment Type, OBS Unit, Manager).
3. Investments are grouped into labeled sections; each group can be collapsed/expanded.

### Sorting Within Groups

1. Click a column header in the investment list (left panel) to sort.
2. Sort is applied within each group.

---

## Filtering the Timeline

1. Click the **Filter** icon.
2. Add filter conditions (e.g., Status = Active, Start Date > 2025-01-01).
3. Only matching investments appear on the timeline.
4. Save the filter for reuse.

---

## The Investment Sidebar

Click any bar (or investment name in the left panel) to open the **investment sidebar**:

- View and edit key fields inline (name, dates, status, budget, manager).
- Click **Open** to navigate to the full investment detail view.
- Close the sidebar with the X button.

> [!tip] Quick Edits Without Leaving the Roadmap
> The sidebar lets you update investment fields without navigating away from the roadmap. Use it for quick status updates or date corrections during planning meetings.

---

## Capacity Visualization

1. Click **View Options** → **Show Capacity** to enable the capacity strip.
2. The capacity strip appears below the Gantt bars, divided into time periods.
3. Color coding:
   - **Green** — Demand is within available supply.
   - **Yellow/Amber** — Demand is 80–100% of supply.
   - **Red** — Demand exceeds supply (overallocated).
4. Hover over a period for exact numbers (demand hours, supply hours, variance).

---

## Dependency Lines

If investments have formal dependencies configured:

1. Click **View Options** → **Show Dependencies**.
2. Dependency arrows appear between bars (Finish-to-Start by default).
3. The **critical path** is highlighted in a distinct color.

---

## Create Roadmap Items With No Start or No Finish Date

Roadmap items do not require both a start and finish date. Single-date items appear as distinct visual symbols:

| Dates Provided | Visual Appearance |
|---|---|
| Both start and finish | Horizontal **bar** |
| Start date only | **Open circle** symbol |
| Finish date only | **Diamond** symbol (like a milestone) |

### Procedure

- **To create an item with no start date:** Draw the roadmap item on the timeline, then clear the start date in the **START** field in the Details panel.
- **To create an item with no finish date:** Draw the roadmap item, then clear the finish date in the **FINISH** field.
- **To convert a floating item to a firm-date item:** Select the item and use the Details panel to add the missing date. The pointer changes to an arrow for drag-and-drop placement; you can then edit the exact dates.

---

## Manage Roadmap Events

**Roadmap Events** are timeline markers representing key dates — such as Today, Roadmap Start, Roadmap Finish, or custom organizational dates. They appear as configurable visual indicators (diamond, circle, triangle, square, star, flag, or rocket) plotted in a dedicated swim lane.

The system ships with three pre-defined roadmap events: **Today**, **Roadmap Start**, and **Roadmap Finish**.

### Enable/Configure Roadmap Events Display

1. Open a roadmap and click **Timeline**.
2. Click **View Options → EVENTS** sub-tab.
3. Toggle **Show Roadmap Events** to show or hide the events swim lane and its visual indicators.
4. Toggle **Show Labels** to show or hide event name labels alongside the indicators.

> [!note] Overlapping Event Labels
> If roadmap events occur close together in time, label overlap may occur. Adjust the selected events or change the period type (Months/Quarters/Years) to reduce overlap.

### Create or Edit Roadmap Events

1. In the **EVENTS** sub-tab of View Options, click **Manage Roadmap Events**.
2. The **Roadmap Events** window opens.
3. To **edit** an existing event: change the date, image (symbol), and line color using the drop-down selectors.
   - To rename: click the event name text box and type the new name.
   - Note: the three default events (Today, Roadmap Start, Roadmap Finish) **cannot be renamed or deleted**, but their date, image, and line values can be changed.
4. To **delete** a custom event: hover over the row and click the **X** icon on the right.
5. To **add a new event**: click **New Event**. A new row appears — enter a name and select date, image, and line color values.
6. Click **X Close** when done.

---

## Manage Item Events

**Item Events** are visual indicators plotted on individual roadmap item bars, representing dates from the linked investment — such as project milestones, custom date attributes, or the investment's start/finish dates.

The system ships with one pre-defined item event: **Key Milestones** — tasks flagged as key milestones in a linked project.

### Enable/Configure Item Events Display

1. In the **EVENTS** sub-tab of View Options:
   - Check **Key Milestones** to display key milestone symbols on linked roadmap item bars.

> [!important] Item Event Positioning Rules
> - If an event date falls **outside** the roadmap item's start/finish range, the event is positioned at the closest boundary (start or finish).
> - After using **Import from PPM**, item events based on custom date attributes must be **synced** before they appear.
> - When a roadmap item is moved (shifted left or right), events move **relative** to the item.
> - If two events fall on the **same date** for an item, only the **most recently created** event is displayed.
> - Item Event legend details can be exported to PDF via **Legend → Export to PDF**.

### Create or Edit Item Events

1. In the **EVENTS** sub-tab of View Options, click **Manage Item Events**.
2. The **Item Events** window opens.
3. To **edit** an existing item event: select the date attribute and change its image (symbol) using the drop-down.
4. To **add a new item event**:
   - Click **New Event**. A drop-down appears.
   - Select a **date attribute** from the linked investment (e.g., a custom project field called "Launch Date").
   - Select the **image** (symbol) to display on the bar (e.g., rocket for launch dates).
5. Click **X Close** when done.

---

## Vaia Summarization for Roadmap Timeline

The Clarity AI assistant (**Vaia**) can generate structured summaries of the Timeline layout, surfacing key insights without manual analysis.

### Prerequisites

- The Roadmap object instance must be enabled in Vaia configuration. See [[14 - Vaia AI/_MOC Vaia AI|Vaia AI]] for setup instructions.

### Procedure

1. Log in to Clarity and click **Roadmaps**.
2. Open a roadmap and navigate to the **Timeline** layout.
3. (Optional) Save the current timeline view to generate a summary scoped to that view.
4. Click the **Summarize** button.

The **Summary page** opens and includes the following sections:

| Section | Content |
|---|---|
| **Overview** | High-level summary of the roadmap's state |
| **Key Investments** | Highlighted investments in the current view |
| **Dependencies** | Summary of dependency relationships |
| **Approaching Deadlines** | Items with near-term finish dates |
| **Problems to Note** | Potential issues or risks identified |
| **Actions Required** | Recommended actions for the roadmap owner |

The summary also shows a **"Refresh Summary"** button and a **"Last Updated"** timestamp. Re-opening the Summarize screen regenerates the summary to capture recent changes.

> [!note] Vaia Summary Notes
> - Summary generation uses a Generative AI service and may produce inaccurate output. Always review generated content.
> - The feature must be toggled on in your environment via a support ticket. An API key (Google Cloud Platform or OpenAI) must be configured by your administrator.

---

## Export the Roadmap Timeline to PDF

You can export the timeline view to a PDF file for use in stakeholder presentations or offline reviews.

### Procedure

1. Open a roadmap in the **Timeline** layout.
2. Click **Item Actions → Export to PDF**.
3. Select the **PDF size**:
   - Fit to Content *(default)*
   - Letter, Legal, Tabloid, A4
   - HD Display (1920 px), Laptop (1440 px), Tablet (1024 px)
4. Select the **orientation**:
   - Landscape *(default)*
   - Portrait
5. Save the PDF or open it in your browser/PDF reader.

> [!important] PDF Export Dimensions
> - Minimum exported dimensions: **1366 × 768 pixels** (width × height). If the selected size produces smaller dimensions, the minimum is used.
> - The **Purge CSV Downloads** job also cleans up PDF export files. It runs daily at 12:30 AM and removes files older than 7 days.
> - Exported file name follows the pattern: `<roadmap name>_<saved view name>`.
> - Swimlane Groups and their expand/collapse state are honored in the export.

---

## Troubleshooting PDF Export

The following error codes may appear during PDF export:

| Error Code | Error Message | Notes |
|---|---|---|
| EXP-01000 | Error generating PDF export | General export failure; check logs |
| EXP-01001 | Invalid export file name | File name contains invalid characters |
| EXP-01002 | Missing value for {0} parameter | A required parameter was not provided |
| EXP-01003 | Export is not supported for the {0} workspace | The current workspace does not support PDF export |
| EXP-01004 | Export is not supported for the option {0} | The selected option is not valid for export |
| EXP-01005 | Required libraries are missing. Contact your administrator. | Libraries needed for PDF generation are not installed |
| EXP-01006 | Required binaries are missing. Contact your administrator. | Playwright binaries are missing on the server |

> [!note] Additional Troubleshooting Tips
> - Refreshing the browser while export is in progress **aborts** the export; nothing is logged in `app-ca.log`.
> - Switching view or scenario during export causes the **file to reflect the new view/scenario content** while the file name shows the original view name.
> - Users with **Roadmap View rights** who switch to the Grid layout during export will not see a progress spinner.
> - To enable debug logging, navigate to `/niku/nu#action:security.loggerConfig` and add `com.ca.ppm.export` with priority `debug`.

---

## Performance Tuning for PDF Export

The following system configuration options can be used to improve PDF export performance. Changes require a **cache flush** at `<app-url>/niku/nu#action:security.cache` (click **Flush All**) after updating.

| Configuration Option | Default | Description |
|---|---|---|
| `PLAYWRIGHT_POOL_MAX_TOTAL_OPT` | 2 | Max concurrent PDF export threads. Recommend setting to half the number of CPU cores. Increasing too high degrades overall system performance. |
| `PLAYWRIGHT_POOL_MAX_IDLE_OPT` | 1 | Idle pool size for faster export start. Must be less than MAX_TOTAL and greater than MIN_IDLE. |
| `PLAYWRIGHT_POOL_MIN_IDLE_OPT` | 1 | Minimum idle threads. Must be less than MAX_IDLE. |
| `PLAYWRIGHT_NAVIG_TIMEOUT_OPT` | 100,000 ms | Navigation timeout. Range: 100,000–900,000 ms. Must be less than Gateway/web server timeout. |
| `PW_WAIT_SELECTOR_TIMEOUT` | — | Wait selector timeout. Set via DB query or admin command (see below). |

To set `PW_WAIT_SELECTOR_TIMEOUT` via DB:

```sql
UPDATE cmn_option_values
SET value = 900000
WHERE option_id = (
  SELECT id FROM cmn_options WHERE option_code = 'PW_WAIT_SELECTOR_TIMEOUT'
);
```

Or via admin console:

```
admin system-options -add PW_WAIT_SELECTOR_TIMEOUT 1 -force
```

After updating, flush the cache at `<app-url>/niku/nu#action:security.cache` → **Flush All**.

---

## Related Notes

- [[Top-Down Planning]] — Roadmap concepts and creating roadmaps
- [[Board Layout]] — Alternative Kanban layout for roadmaps
- [[Grid Layout]] — Alternative tabular layout for roadmaps
- [[Sync and Import]] — Syncing item events from linked investments
- [[Canvas Dashboard]] — Executive dashboard view for roadmaps
- [[_MOC Roadmaps]] — Back to the roadmaps MOC

%%Source: p575–587 + Clarity 16.4.1 Top-Down Planning with Roadmaps (Timeline sections: No-date items, Events, Vaia summarization, PDF export, troubleshooting, performance tuning)%%
