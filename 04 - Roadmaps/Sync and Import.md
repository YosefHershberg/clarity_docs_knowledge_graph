---
title: Roadmap Sync and Import
tags:
  - howto
  - roadmaps
aliases:
  - Import Roadmap Items
  - Sync Roadmap Items
  - Roadmap CSV Import
  - Synchronize Roadmap
  - Multi-Currency Roadmap
canonical: true
audience: pm, leadership
domain: roadmaps
---

# Roadmap Sync and Import

Clarity provides three ways to populate a roadmap with items: drawing them manually, importing from a CSV file, or importing directly from existing Clarity investments (projects, custom investments, ideas). After items are linked to investments, the **synchronization** engine keeps roadmap attributes up to date with the source data.

---

## Import Roadmap Items From a CSV File

You can import up to **250 roadmap items** from a comma-separated values (CSV) file into a single roadmap scenario. This method is useful when teams maintain planning data in spreadsheets before migrating to Clarity.

> [!note] CSV Import Limitations
> - You cannot update **existing** roadmap items via CSV import — only create new ones.
> - Requires **Roadmap - Edit** instance-level or OBS-level access right, or **Roadmap - Edit - All** global access right.

### Supported Attribute Formats

| Attribute Type | Format Required |
|---|---|
| **Numbers** | No thousand separator; use period for decimal; dash for negative |
| **Percentages** | Enter as decimal — e.g., `0.25` for 25% |
| **Monetary values** | No comma separator (unless enclosed in quotes); no currency code or symbol |
| **Strings** | Use double quotes around any string containing a comma |
| **Dates** | `YYYY-MM-DD` format (e.g., `2019-11-15`) |
| **Static single-value lookups** | Exact case-sensitive value — e.g., `Project`, `Program`, `Idea`, `Feature` |

### Procedure

1. Log in to Clarity and click **Roadmaps**.
2. Open a roadmap, select the **Roadmap Items** tab, and choose a scenario.
3. Click **Item Actions → Import from CSV**.
4. Click **Download** to obtain the `PPM_ROADMAP_CSV_IMPORT_TEMPLATE.csv` file.
5. Prepare your CSV file:
   - Row 1 — optional user-friendly column headers (e.g., `Roadmap Item Name`, `Start Date`).
   - Row 2 — the **API Attribute ID** for each column (e.g., `name`, `start`, `npv`). The API IDs for custom attributes can be changed; system attribute IDs remain fixed.
   - Rows 3–252 — data rows (up to 250 items).
   - Format dates as `YYYY-MM-DD`. Excel may reformat dates; verify before saving.
   - Save as `.csv` with **UTF-8 encoding** to preserve special characters.
6. Return to the roadmap and verify you are in the correct scenario.
7. Click **Import CSV**, select the file, and click **Import CSV** again.
8. Review the confirmation message showing rows imported vs. rows rejected.
9. Locate the imported items in the board, timeline, or grid layout.
   - On the **Board**: imported items may appear in the **None** column until you assign a picklist value.
   - On the **Timeline**: items appear in the swim lane that matches their lookup value (e.g., None, Project, Idea).

> [!tip] Excel Tips for CSV Import
> - Format date cells with the custom `YYYY-MM-DD` number format in Excel.
> - Do not use commas as thousand separators for numeric fields.
> - Always use **Save As → CSV (UTF-8)** to preserve special characters.

---

## Import Projects, Custom Investments, and Ideas

You can create roadmap items by importing active investments directly from Clarity. The import action creates a **link** between the roadmap item and its source investment, enabling ongoing synchronization.

### Prerequisites for Import

The investment must meet all of the following conditions:

- Status is **Active**.
- For projects: not a template or program.
- For custom investments: the **Include in Roadmaps** setting is selected on the custom investment type.
- The investment is **not already linked** to another roadmap item in the same scenario.

> [!note] Financial Data Behavior
> When the start/finish dates of a project differ from those of its associated cost plan of record, the roadmap item reflects the **project dates**. However, financial attributes (Capital Cost, Operating Cost) reflect data from the **cost plan**, not the project dates.

### Procedure

1. Navigate to **Roadmaps** in the main menu.
2. Open a roadmap in the timeline, board, or grid view.
3. Click **Scenarios** and select the target scenario.
4. Click **Item Actions → Import from PPM**.
5. From the drop-down, select **Project**, **Idea**, or the custom investment type name.
6. In the **Select From** grid that appears:
   - Use checkboxes to select individual rows.
   - Use **Select All** to choose all visible rows at once.
   - The grid excludes investments already linked to a roadmap item in this scenario.
7. Click **Add**. Each imported investment appears as a roadmap item in the layout.
   - The **Linked To** and **Linked To ID** columns on the grid layout show the source investment.
   - Financial data from the cost plans of imported custom investments is also imported.
8. (Optional) Click the **Linked To** column value to drill into the investment detail page.
9. Save the scenario view if needed.

---

## Synchronize Roadmap Items with Linked Investments

After items are linked to investments, you can synchronize them to pull the latest data from the source. Synchronization supports both on-demand and scheduled modes.

### Sync Behavior Overview

- Clarity matches attributes by **API Attribute ID** and **Data Type**.
- Financial attributes (planned, actual, benefit, revenue) can be synchronized.
- **Start/Finish Date sync** can be performed with or without events:
  - **With Events** *(default)*: syncs start/finish dates plus milestone data and item events from the investment.
  - **Without Events**: syncs only dates; any previously synced event data is cleared.
- **Capacity sync** can be performed via Allocations or Assignments:
  - **Allocations** *(default)*: total planned capacity for the roadmap.
  - **Assignments**: committed capacity — ETC + Actuals.
  - Clearing the Capacity checkbox disables both options.

> [!caution] Custom TSV Sync Not Supported
> Custom time-scaled values (TSVs) are not officially supported for sync. Officially supported data types include: STRING, DATE, BOOLEAN, NUMBER, PERCENT, MONEY, URL, CLOB, RICHTEXT, LOOKUP.

### Sync Column and Checkbox

The **Sync** checkbox column in the grid controls which linked items are included:

| State | Meaning |
|---|---|
| **Visible and Selected** | Item is linked and will be synchronized |
| **Visible and Not Selected** | Item is linked but excluded from the next sync |
| **Not Visible** | Item is not linked — cannot be synchronized |

> [!tip] Track Sync History
> Add the **Last Synced Date** field from the Column Panel to the grid to see when each roadmap item was last synchronized.

### On-Demand Sync (Sync Linked Items)

1. Open a roadmap in the grid and select a scenario.
2. Import investments or verify that **Linked To** is populated for items.
3. In the Column Panel, add any custom attributes to synchronize.
4. Review the **Sync** checkboxes — clear any items you want to exclude.
5. Click **Item Actions → Sync Linked Items**.
6. In the **Sync Linked Items** window:
   - Select all attributes, attribute groups, or specific attributes to synchronize.
   - To sync custom lookup attributes and multi-valued lookup strings, select **Matching Custom Attributes**.
   - Click **Save** to persist the selection without syncing yet.
   - Click **Save and Sync Now** to save and begin the sync immediately.
7. A **"Sync in Progress"** banner appears. The current scenario is temporarily locked for editing. You can work on other scenarios or other pages during the sync.

> [!note] Scenario-Specific Sync
> Sync Linked Items only updates the **current scenario**. If you have multiple scenarios, you must run sync separately on each one.

### Scheduled Sync (Configure Sync Schedule)

1. Follow steps 1–4 from On-Demand Sync above.
2. Click **Item Actions → Configure Sync Schedule**.
3. In the **Configure Sync Schedule** window:
   - **Days**: Select the days of the week for the sync to run.
   - **Time**: Enter in `hh:mm` format and select AM or PM. Default is 6:00 AM.
   - **Start Date / End Date**: Set the date range using the date pickers.
   - Select attributes to synchronize (same options as on-demand sync).
   - Select **Matching Custom Attributes** if needed.
4. Click **Save** to save the schedule (sync will run automatically at the configured times).
5. Click **Save and Sync Now** to save the schedule and also sync immediately.
6. To remove the schedule, click **Delete Schedule** — this cancels the background job and clears the saved configuration.

> [!note] Schedule Persistence and Behavior
> - Schedule configuration is persisted **per scenario, per roadmap**.
> - On-demand selection is persisted **per user, per scenario, per roadmap**.
> - Browser time zone is honored for time settings and Last Sync display.
> - Copying a roadmap also copies its sync schedule.
> - The underlying job is **SCHEDULE_RDM_ITEMS_SYNC**.

---

## Use Case: Managing Monthly Roadmaps with Auto-Sync

**Scenario:** At the start of each new month, Sid creates a new roadmap by duplicating the previous month's roadmap.

**Problem:** Without an end date on the previous month's sync schedule, the old roadmap continues syncing and conflicts with the new roadmap.

**Solution:** Always set an **end date** in Configure Sync Schedule before duplicating a roadmap.

**Example workflow:**

| Step | Action |
|---|---|
| End of March | Set end date of March 31 on the March roadmap's Configure Sync Schedule |
| Beginning of April | Duplicate March roadmap to create April roadmap |
| April setup | Update April roadmap's sync schedule: Start = April 01, End = April 30 |

> [!warning] Missing End Dates Cause Sync Failures
> If the new roadmap inherits old sync dates where the end date has already passed, it will not sync at all. Always update the sync schedule after duplicating.

**Benefits of this approach:**

1. **Seamless data management** — prevents overlapping or conflicting updates between consecutive roadmaps.
2. **Improved accuracy** — each roadmap reflects accurate data for its respective time period while preserving historical data in older scenarios.
3. **Time efficiency** — prevents errors and minimizes troubleshooting time.

---

## Matching Custom Attributes

When the **Matching Custom Attributes** option is selected during sync, Clarity matches investment attributes to roadmap item attributes using these rules:

- The **API Attribute ID** must match between the investment child attribute and the roadmap item object.
- The **Data Type** must match.
- For lookups: the lookup definition must also match.
- API Attribute IDs must follow the format: **single character + underscore** (e.g., `c_confidence_level`).

### Supported Custom Attribute Types for Matching

- Lookups (SVL — Static and Parameterized)
- Number
- String
- Boolean
- Date
- Money
- Large Text (CLOB)

> [!warning] Money Attribute Behavior
> When syncing a **Money** attribute, Clarity copies the amount as-is — no currency conversion is applied. Money sync requires both a **currency** and an **amount** value. When syncing **Large String** attributes, Clarity copies the data including special characters and formatting.

---

## Use Multi-Currency in Roadmaps

Clarity supports automatic currency conversion when syncing investment data from multiple source currencies into a roadmap with a defined currency.

### Prerequisites

1. **Enable Multi-Currency:**
   - Navigate to **Administration → Finance → Processing**.
   - Check **Use Multi-Currency**.

2. **Activate Currencies and Define Exchange Rates:**
   - Navigate to **Administration → Finance → Setup**.
   - Activate required currencies (e.g., USD, INR).
   - Define **Average** type exchange rates between active currencies with valid effective dates.

3. **Enable the Feature Toggle:**
   - Ensure you have the **Administration - Feature Toggles - Navigate** access right.
   - Navigate to **Clarity Administration → Feature Toggles**.
   - Confirm that **Enable Currency conversion during Roadmap Items Import and Sync** is turned on.

> [!important] Missing Exchange Rates Cause Conversion Failures
> Ensure that **Foreign Exchange Rates of type Average** are configured for all currencies used by roadmap items, covering the effective dates of those items. Missing exchange rates prevent conversion and are logged in the Roadmap Items Sync job logs.

### Roadmap Item Currency Behavior

| Condition | Behavior |
|---|---|
| Roadmap currency is **not set** | Item defaults to the Studio default currency; if none, user is prompted |
| Roadmap currency is **set** | Item automatically uses roadmap currency, overriding Studio default |
| User preference | Currency can still be changed to any other active currency |

### Procedure

1. Log in to Clarity and click **Roadmaps**.
2. In the Roadmaps workspace, open the **Columns panel** and add the **Currency** field to the list view.
3. Select the currency for the roadmap.
4. Open the roadmap in the grid layout and add the **Currency** field to the grid via the Column Panel.
5. Click **Item Actions → Sync Linked Items**.
6. Select the attributes to synchronize (can include all, groups, or specific attributes).
7. Click **Save and Sync Now**. A "Sync in progress" message appears.
8. After completion, financial values are converted to the roadmap's currency using the configured exchange rate.

> [!note] Conversion Details
> - Currency conversion uses the exchange rate effective on the **item's effective date**.
> - Financial fields (totals and period values) are converted to the roadmap currency.
> - The **Currency** field of each roadmap item is updated to reflect the roadmap's currency after sync.
> - Conversion failures are logged in the **Roadmap Items Sync** job logs.

---

## Related Notes

- [[Top-Down Planning]] — Overview of roadmaps and creating/managing roadmaps
- [[Grid Layout]] — The grid is the primary layout for managing sync and linked data
- [[Picklists]] — Managing roadmap picklists for grouping and color-coding
- [[_MOC Roadmaps]] — Back to the roadmaps MOC
- [[_MOC Administration]] — Exchange rate and multi-currency configuration

%%Source: Clarity 16.4.1 — Top-Down Planning with Roadmaps (Import, Sync, and Multi-Currency sections)%%
