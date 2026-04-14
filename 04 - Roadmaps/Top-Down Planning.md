---
title: Top-Down Planning with Roadmaps
tags:
  - concept
  - howto
  - roadmaps
aliases:
  - Roadmap Planning
  - Strategic Planning
  - Portfolio Roadmap
  - Top-Down Investment Planning
canonical: true
audience: pm, leadership
domain: roadmaps
---

# Top-Down Planning with Roadmaps

Roadmaps in Clarity PPM enable **top-down strategic planning** — the practice of defining investment budgets, timelines, and priorities at the portfolio level *before* detailed project plans are created. This is the opposite of bottom-up planning (where schedules drive portfolio rollups).

---

## What is a Roadmap?

A **Roadmap** is a shared visual canvas that displays multiple investments as **horizontal bars** on a timeline. It is designed for:

- **Leadership and PMOs** to plan and communicate investment portfolios.
- **Scenario planning** — comparing multiple investment portfolios (what-if analysis).
- **Capacity analysis** — visualizing resource demand vs. supply across the portfolio.
- **Prioritization** — ranking and ordering investments before committing resources.

> [!info] Roadmaps Are Not Detailed Schedules
> Roadmaps work at the investment level (each bar = one investment). For task-level scheduling within an investment, see [[Tasks and Phases]] or [[Tasks in Hierarchy]].

---

## Creating a Roadmap

1. Navigate to **Roadmaps** in the main navigation.
2. Click **+ New Roadmap**.
3. Fill in:
   - **Name** *(required)* — The roadmap title (e.g., "FY2026 Technology Portfolio").
   - **Start Date** and **End Date** — The planning horizon displayed on the roadmap.
   - **OBS Unit** — Controls who can view and edit the roadmap.
   - **Blueprint** — The admin-defined template for this roadmap type.
   - **Description** — Purpose and context for the roadmap.
4. Click **Save** — the roadmap opens in the Timeline layout by default.

---

## Adding Investments to a Roadmap

### Adding Existing Investments

1. Open the roadmap.
2. Click **+ Add Investment** (or drag from the investment panel on the left).
3. Search for existing investments by name, type, or OBS.
4. Select one or more investments — they appear as bars on the timeline, positioned at their start/finish dates.

### Adding a Placeholder (New Roadmap Item)

When an investment doesn't exist yet, add a **placeholder bar**:

1. Click **+ New Item** or click directly on the timeline in an empty area.
2. Enter a name for the placeholder.
3. Set approximate start and finish dates.
4. Set key fields: estimated budget, target resources, priority.
5. Save — the placeholder appears as a bar.

> [!tip] Promote Placeholders to Investments
> Once a placeholder is approved for execution, use **Actions → Create Investment** to convert it into a real Clarity investment (project, custom investment, etc.) directly from the roadmap.

---

## Roadmap Scenarios

**Scenarios** are alternate versions of the roadmap used for what-if analysis:

### Creating a Scenario

1. Open the roadmap.
2. Click **Scenarios** in the toolbar → **New Scenario**.
3. Name the scenario (e.g., "Conservative Plan", "Accelerated Plan").
4. Choose whether to **copy** the current roadmap state as the starting point.
5. Make changes within the scenario: add/remove investments, change dates, adjust budgets.

### Comparing Scenarios

1. Click **Compare Scenarios** in the toolbar.
2. Select two or more scenarios to compare side by side.
3. Differences are highlighted: investments present in one but not the other, date/budget differences.

> [!note] Scenarios Don't Affect Live Data
> Changes made within a scenario do not update actual investment records until you **commit the scenario**. This makes scenario planning safe for leadership discussions.

### Committing a Scenario

1. Once a scenario is approved, click **Commit Scenario**.
2. Clarity applies the scenario's changes to the actual investment records (dates, budgets, status).
3. Confirm the commit — this action updates live data and cannot be undone.

---

## Capacity Analysis

Roadmaps include a **capacity bar** showing resource demand vs. supply:

1. Enable the capacity bar via **View Options** → **Show Capacity**.
2. The bar appears at the bottom (or top) of the timeline, divided by time period.
3. **Red segments** indicate overallocation (demand exceeds supply).
4. **Green segments** indicate available capacity.
5. Hover over a period to see the specific demand and supply numbers.

> [!tip] Resource-Based Prioritization
> When the capacity bar shows overallocation, use roadmap prioritization (drag to reorder investments, or set **Priority** scores) to decide which investments get resources first.

---

## Top-Down Budget Planning

Roadmaps support setting investment-level budgets before detailed financial plans exist:

1. In the roadmap, click a bar to open the **investment sidebar**.
2. Enter the **Top-Down Budget** (total planned cost for the investment).
3. This value flows into the investment's financial plan as a **top-level budget target**.
4. The investment manager then creates a detailed cost plan that must not exceed this top-down budget.

> [!note] Top-Down vs. Bottom-Up
> **Top-down budget** = leadership sets the envelope. **Bottom-up cost plan** = team plans the detail. Clarity supports both simultaneously, letting you compare them for variance.

---

## Investment Prioritization

To rank investments on the roadmap:

1. In the roadmap list (Grid or Timeline with the investment list visible), drag investments to reorder them.
2. Alternatively, set a **Priority** field value (numeric score or high/medium/low) on each investment.
3. Filter or sort by priority to focus on top-ranked investments.
4. Use the **prioritization panel** (if enabled) to rank investments using a scoring model (criteria-based scoring).

---

## Sharing a Roadmap

1. Click **Share** in the roadmap toolbar.
2. Add specific users or OBS units who should have access.
3. Set their access level: **View**, **Edit**, or **Admin**.
4. Optionally, generate a **shareable link** (read-only URL) for stakeholders who don't have Clarity accounts.

---

---

## Copy a Roadmap

Create a new roadmap by copying an existing one. All scenarios, saved views, local and global picklists, dependencies, personalizations, view options across all three layouts, and event definitions are copied to the new roadmap.

1. Log in to Clarity and click **Roadmaps**.
2. Select the roadmap to copy and click **Copy** (or right-click and select **Copy** from the context menu).
3. In the **Copy Roadmap** dialog, enter a name for the new roadmap.
4. Click **Copy**. A **"Copy is in Progress"** banner displays until the copy completes.
5. Open the copied roadmap to update its details, scenarios, and associations.

> [!note] Copy Behavior Details
> - Copy complexity is calculated based on the number of associations (items, views, events, picklists). A governor limit `MAX_LOAD_PER_RDM_INSTANT_COPY` (default: 700) controls whether the copy is instant (< 700) or goes through a background job (> 700).
> - Only one roadmap can be copied at a time. While copy is in progress, the current scenario of the source roadmap is temporarily locked for editing.
> - Personalizations, starring, sharing settings, conversations, and unsaved views from the source are **not** copied to the target.
> - If the copy fails, a failed notification is sent via the Notification icon.

---

## Create and Use Custom Attributes for Roadmaps

Administrators can create custom attributes on the **Roadmap Item** object, which then become available to roadmap planners in the Details panel, Grid columns, and filters.

**Example:** A Portfolio Manager wants a **Confidence Level** attribute (values: High, Medium, Low) on roadmap items to guide investment decisions.

### Procedure (Administrator)

1. Open **Classic PPM** and navigate to **Administration → Studio → Objects**.
2. In the Object Name field, type `Roadmap Item` and press Enter.
3. Select the **Roadmap Item** object.
4. Click the **Attributes** tab, then click **New**.
5. Define the attribute:
   - **Name** — Display label (e.g., Confidence Level).
   - **API Attribute ID** — The identifier used for CSV import, sync matching, and API calls (e.g., `c_confidence_level`). Must start with a single character followed by an underscore.
   - **Data Type** — The type of data (e.g., Static List lookup for a picklist, Number, String, Boolean, Date, Money).
   - For lookup attributes: associate a static list lookup defining the available values.
6. Click **Save and Return**.
7. (Optional) Configure **Display Mappings** to assign colors to lookup values if using the attribute for Color By.

After creation, the custom attribute appears in the **Column Panel**, **Filter Panel**, and **Details Panel** across all roadmap layouts.

> [!tip] Sync Custom Attributes with Investments
> Once a custom attribute is created on the Roadmap Item object, it can be matched and synchronized from linked investment attributes using the [[Sync and Import|Sync Linked Items]] feature — provided the API Attribute IDs and data types match.

---

## Using Processes with Roadmaps

The Roadmaps object supports **Clarity Processes** — allowing automated workflows to be triggered when roadmaps are created or updated.

> [!tip] Process Capabilities for Roadmaps
> - Roadmaps are **event-enabled**, so processes can run on creation and update events.
> - The **Roadmap** object appears as a primary object option when building processes.
> - Processes can push roadmap item data to external systems (e.g., Rally) for execution.
> - Roadmaps are automatically event-enabled after upgrade. The event-enabled flag can optionally be unchecked.

> [!important] Limitations to Know
> - Processes can only be **viewed and managed** in Classic PPM — not in the Clarity modern UI.
> - Processes built with **action items** still require the user to act on them in Classic PPM.
> - Processes **cannot be run against roadmap items** — only against roadmaps. However, process start conditions can reference roadmap, roadmap item, or roadmap item dependency attributes.
> - There is no option to start a process **On Demand** from the UI even if that option is selected in the process definition. Use the **"Execute a Process"** job instead.
> - If you change the name of a custom investment, its **Event Enabled** flag is unchecked automatically.
> - If you create an action item process, the notification link back to the roadmap does not work.

---

## Enabling Field Level Security for Roadmaps and Roadmap Items

**Field Level Security (FLS)** allows administrators to restrict access to specific attributes on Roadmap and Roadmap Item objects, at the **user group** level.

> [!important] FLS Key Rules
> 1. FLS is granted and revoked at the **group level** by administrators — not individual users.
> 2. FLS applies to Clarity (modern UI) only — **not** to Classic PPM.
> 3. FLS always has **precedence** over object-level security access rights.
> 4. **Integration Users** will have access to all secured attributes regardless of FLS settings.

### Attributes That Cannot Be Secured by FLS

| Object | Excluded Attributes |
|---|---|
| **Roadmap** | ID, Name, Start Period, Start, Finish, Blueprint Active ID |
| **Roadmap Item** | ID, Name, Start, Finish, Currency*, In Plan*, Per-period metrics (e.g., TSV)* |

*Marked attributes have restricted FLS application.

---

## Set Target Widgets for the Roadmap

**Target Widgets** display financial or numeric constraints and goals on the roadmap toolbar, helping planners stay within portfolio limits while adding or adjusting items.

A **Target** is a constraint you try to stay under (e.g., Capital Cost budget). A **Goal** is a target you aim to achieve or exceed (e.g., Benefit).

### Procedure

1. Open a roadmap and click **Timeline**, **Board**, or **Grid**.
2. Click **Show Widgets** to display the Widgets toolbar.
3. Click **Manage Widgets → Add** (from Widget Library) or **New Widget**.
4. Select **Target** as the widget type, then click **Next**.
5. In the **Create Target** dialog, fill in:
   - **Title** — Name of the target widget (e.g., "Capital Budget").
   - **Type** — `Target` (constraint — stay under) or `Goal` (aim to achieve or exceed).
   - **Sum** — Select the attribute to aggregate (number or money attribute; calculated-number attributes are supported).
   - **Label** — Optional label for the selected attribute (e.g., "In Plan").
   - **Only Include Items Where** — Filter criterion to scope which roadmap items feed this widget.
   - **In Widget Library** — Check to add this widget to the shared Widget Library (requires appropriate permissions).
6. Click **Create**.

The widget now appears in the Widgets toolbar and updates as you add, remove, or move items. Target widgets are visible across Timeline, Board, and Grid layouts.

---

## Create Rally Portfolio Items from Roadmap Scenario

Once a roadmap scenario is finalized and items are marked **In Plan**, Clarity can send those items to **Rally** as Portfolio Items (initiatives or features) using the **Send to Rally** capability.

> [!note] Prerequisites
> 1. A Rally integration object must be configured in Clarity.
> 2. An **integration mapping** must be defined between Clarity and Rally, including:
>    - Object mapping (roadmap items → Rally initiatives or features)
>    - Lookup mappings (roadmap item lookups → Rally lookups)
>    - Field mappings (roadmap item fields → Rally initiative/feature fields)
> 3. The target roadmap must have the relevant **Integration Mapping** attribute populated (via the Properties page).
> 4. The **Send to Rally** action must be **enabled by an administrator** in the Actions workspace (disabled by default).
> 5. Access to the Integration Mapping attribute must be granted to relevant stakeholders.

### Procedure

1. In the Roadmaps workspace, open the roadmap with finalized In Plan items.
2. Select the relevant scenario.
3. Click **Item Actions → Send to Rally**.
4. Clarity creates Portfolio Items in Rally for all **In Plan** roadmap items in the current scenario.

> [!tip] Supporting Jobs
> - The **Import Integration Mappings Job** has been enhanced to support the roadmap items object.
> - The **Synchronize Mapped Information Job** supports roadmap items.
> - The **Import Staging Table Job** runs automatically after Synchronize Mapped Information to populate the To Clarity and To Rally staging tables.

> [!note] Send to Rally Availability
> - The Send to Rally action is available in the **Item Actions** menu for Timeline, Board, and Grid layouts.
> - The action sends only **In Plan** items from the currently selected scenario.
> - The Integration Mapping attribute on the Roadmaps object is secured — only users with appropriate permissions can view and update it.

---

## Related Notes

- [[Timeline Layout]] — Detailed guide to the roadmap timeline view
- [[Board Layout]] — Kanban-style view of roadmap items
- [[Grid Layout]] — Tabular view for roadmap data management
- [[Sync and Import]] — CSV import, investment import, and synchronization procedures
- [[Picklists]] — Managing global and local picklists for grouping
- [[Roadmap Groups]] — Aggregating multiple roadmaps into a group view
- [[Canvas Dashboard]] — Executive dashboard canvas for roadmaps
- [[_MOC Roadmaps]] — Back to the roadmaps MOC
- [[_MOC Projects]] — Projects are the most common roadmap bar type

%%Source: p545–574 + Clarity 16.4.1 Top-Down Planning with Roadmaps (Custom Attributes, Processes, FLS, Target Widgets, Copy, Rally sections)%%
