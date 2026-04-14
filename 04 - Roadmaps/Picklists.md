---
title: Roadmap Picklists
tags:
  - howto
  - admin
  - roadmaps
aliases:
  - Roadmap Picklist Configuration
  - Global Picklist Roadmaps
  - Local Picklist Roadmaps
  - Roadmap Grouping Options
canonical: true
audience: pm, leadership, admin
domain: roadmaps
---

# Roadmap Picklists

**Picklists** in Clarity Roadmaps define the grouping options that control how roadmap items are organized into **swim lanes** (Timeline layout), **columns** (Board layout), and **color coding** (all layouts). There are two kinds of picklists:

- **Global Picklists** — defined at the system level and available across all roadmaps.
- **Local Picklists** — defined within a specific roadmap and available only to that roadmap.

---

## Understanding Picklist Scope

| Type | Who Creates It | Applies To | Where Configured |
|---|---|---|---|
| **Default Global** | Administrator | All roadmaps | Classic PPM Studio → Roadmap Item object attributes |
| **Custom Global** | Administrator | All roadmaps | Classic PPM Studio → Static List lookup + Roadmap Item attribute |
| **Local** | Any roadmap user with edit access | One roadmap only | View Options → Manage Picklists (within the roadmap) |

---

## Configure a Default Global Picklist

Default global picklists are based on **lookup attributes** on the Roadmap Item object. The system ships with three default picklists:

| Attribute | Description | Note |
|---|---|---|
| **Status** | Groups items by their approval/workflow status (e.g., Unapproved, Approved) | Fully configurable |
| **Type** | Groups items by roadmap item type (e.g., Project, Program, Idea, Feature) | Fully configurable |
| **In Plan** | Groups items by plan inclusion (In Plan / Not In Plan) | System-restricted — cannot add new values; only labels and colors can be changed |

> [!tip] Type Field Disambiguation
> There are two "Type" fields in roadmaps. **Roadmap Type** (on the Details panel) refers to the type of roadmap (Investment, Product, Application). **Roadmap Item Type** (in swim lanes and legends) refers to the type of item (Project, Program, Idea, Feature). These are distinct attributes.

Default picklists are **global** — they appear as options for **SWIMLANES** and **COLOR BY** in View Options across all roadmaps. On the Timeline layout they appear as swim lanes; on the Board they appear as columns; on the Grid they appear as filterable columns.

If a default color is not defined for a picklist value, the application uses **white** as the fallback.

### Procedure

1. Navigate to **Administration → Studio → Objects**.
2. Open the **Roadmap Item** object and click the **Attributes** tab.
3. Select the attribute to configure (e.g., Status, Type, or In Plan).
4. Configure the following properties:
   - Set the **display order** of values in the list.
   - **Rename or add values** to align with your business terminology.
   - Update **color display mappings** for each value.
   - **Activate or deactivate** lookup picklist values.
     - Deactivated values still display existing items in that column/swim lane.
     - Once the last item is moved out of a deactivated column, the column disappears.
5. To add an entirely **new global picklist**, click **New** and define the attribute and its values on the Roadmap Item object.

---

## Create a Custom Global Picklist (All Roadmaps)

Custom global picklists allow organizations to define their own grouping dimensions — applied to all roadmaps. For example, a picklist named **Business Outcomes** with values Mobile, Technology Enhancement, and Wow the Customers.

> [!note] Custom Global vs. Local
> Custom global picklists are governed at the system level and require administrator access. If you only need a grouping for one roadmap, create a **local picklist** instead.

### Procedure

1. In Classic PPM, navigate to **Administration → Studio → Lookups → New**.
2. Create a **Static List lookup** associated with the **Roadmap Item** object.
   - Select **Manual sort order** so you can control the display order of values in the UI.
3. Add your custom values to the lookup (these become the grouping options).
4. **Reorder the values** manually to set the desired display order.
5. On the **Roadmap Item** object, create a new **attribute**:
   - The attribute name becomes the picklist name displayed on roadmaps.
   - Use the **Data Type** field to associate the attribute with the Static List lookup you created.
6. In **Display Mappings**, assign a color to represent each lookup value.
7. (Optional) Specify a **default color** for each value (used when the primary color is deactivated).

After creating a custom global picklist:
- Existing roadmap items initially appear in the **None** swim lane or column.
- Users can move items into the appropriate lanes manually.
- If the picklist attribute is **deactivated** or **deleted** in Studio, items revert to the None swim lane.
- If the Roadmap Item attribute itself is deleted, the picklist is **removed from all roadmaps**.

---

## Create a Local Picklist

Local picklists let individual roadmap owners create custom grouping options relevant to a specific roadmap. They are available across all three layouts (Timeline, Board, Grid) of that one roadmap.

> [!example] Use Case
> Sid's Technology roadmap needs a "Team" grouping dimension not defined globally. He creates a local picklist with five team names — this grouping is only available in his roadmap.

### Procedure

1. Open a roadmap and click **Timeline**, **Board**, or **Grid**.
2. Click **View Options**.
3. Click **MANAGE PICKLISTS**. The MANAGE PICKLISTS window appears.
4. Click **NEW PICKLIST**.
5. Enter a **picklist name** (e.g., Business Outcomes).
6. Add choices to the picklist. Name each choice to correspond to a grouping value (e.g., Mobile, Technology Enhancement).
7. For each choice, click the **color swatch** (red box) on the left to select a color from the palette.
8. Click **Done** to save the picklist.

The new local picklist is now available under:
- **SWIMLANES** in Timeline View Options
- **COLUMNS** in Board View Options
- **Column Panel** in the Grid layout

If you create a **color picklist**, a color legend appears at the bottom-right of the page. If the legend is collapsed, click **LEGEND** to reopen it.

> [!note] Picklist Grouping Persists Across Scenarios
> When you switch between different scenarios in a roadmap, the grouping currently selected for roadmap items remains the same across all scenarios.

---

## Manage Local Picklists

You can edit existing local picklists after they are created — renaming choices, reordering them, changing colors, or deleting them entirely.

### Procedure

1. Open a roadmap and click **Timeline**, **Board**, or **Grid**.
2. Click **View Options**.
3. Click **MANAGE PICKLISTS**. The MANAGE PICKLISTS window appears.
4. **Select** the picklist you want to edit (or search by name).
5. Edit picklist values as needed:
   - **Rename** individual choices.
   - **Delete** individual choices (see behavior notes below).
   - **Add** new choices.
   - **Reorder** choices using the up/down controls.
   - **Change colors** for choices.
   - **Delete the entire picklist** using the delete option.
6. When done, click **X Close**.

> [!note] Deleting a Local Picklist
> If you delete a custom local picklist that is currently applied to a roadmap view, the **default global picklist of Status** is automatically applied to that view in its place.

---

## Delete a Local Picklist Choice

Deleting a single choice (value) from a local picklist has the following behavior:

- The corresponding **column or swim lane becomes deactivated** and appears unavailable on the layouts.
- **Existing roadmap items** in that column or swim lane remain visible until you move them out.
- Once **all items are moved** out of the deactivated column or swim lane, the column/swim lane disappears.
- If the deleted choice was **assigned a color**, items in that column continue to display the color until they are moved out. After all items are moved, the column with color disappears.

> [!tip] Workflow for Safe Picklist Cleanup
> 1. Identify items in the column you plan to delete.
> 2. Move or reassign all items to other columns/swim lanes.
> 3. Delete the picklist choice — the empty column disappears immediately.

---

## Related Notes

- [[Top-Down Planning]] — Overview of roadmaps, scenarios, and creating roadmaps
- [[Timeline Layout]] — How picklists appear as swim lanes on the timeline
- [[Board Layout]] — How picklists appear as columns on the board
- [[Grid Layout]] — How picklists appear in the column panel on the grid
- [[Sync and Import]] — Synchronizing roadmap items with linked investments
- [[_MOC Roadmaps]] — Back to the roadmaps MOC
- [[_MOC Administration]] — Studio configuration for global picklists

%%Source: Clarity 16.4.1 — Top-Down Planning with Roadmaps (Manage Roadmap Picklists section)%%
