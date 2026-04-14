---
title: Roadmap Groups
tags:
  - concept
  - howto
  - roadmaps
aliases:
  - Roadmap Group
  - Group Roadmaps
  - Grouped Roadmaps
  - Roadmap Group Management
canonical: true
audience: pm, leadership
domain: roadmaps
---

# Roadmap Groups

**Roadmap Groups** (available from Clarity 16.2.0 onwards) allow you to aggregate multiple individual roadmaps into a single, unified planning view. This supports top-down planning at a higher level of abstraction — a Roadmap Group shows items from all included roadmaps together, enabling executives and portfolio managers to review and re-plan across the full portfolio.

---

## Overview

A Roadmap Group is a **container object** that holds references to individual roadmaps. It provides the same three layout views (Timeline, Board, Grid) as a regular roadmap, but the items displayed come from the **child roadmaps** rather than being created directly in the group.

> [!note] Key Differences from a Regular Roadmap
> - Roadmap Groups **cannot** have roadmap items imported or created directly.
> - Roadmap Items **cannot be edited** from within a Roadmap Group — editing must be done on the source roadmap.
> - **Sync of roadmap items** and **Manage Picklists** are not available in Roadmap Groups.
> - **Drag-and-drop** reordering of items within a Roadmap Group is not supported.

### What Roadmap Groups Do Support

Roadmap Groups support the following capabilities:

- Dependencies
- Agreements and Key Milestones
- Roadmap Events
- Export to PDF
- Export to CSV
- Widgets
- View Options with **Swimlane Groups** for granular visualization control

---

## Access and Visibility Rules

> [!important] Access Is Inherited from Child Roadmaps
> - You must have at least **view access to individual roadmaps** to see the roadmap items from those roadmaps within a group.
> - Access to the Roadmap Group alone does **not** guarantee visibility of all linked roadmap items.
> - If a group contains 4 roadmaps and you have access to only 2, you will only see items from those 2 roadmaps.
> - The **Roadmap** attribute is blacklisted from Field Level Security (FLS) — FLS is not supported for this attribute.

---

## Create a Roadmap Group

1. Log in to Clarity and click **Roadmaps**.
2. Click **New Roadmap** or click the **+ (Add Row)** icon.
3. Complete the following fields:
   - **Roadmap Name** — Enter the name for the group (e.g., "Enterprise Portfolio FY2026").
   - **Genre** — Select **Roadmap Group**. (The Roadmap option is selected by default; you must change this.)
   - **Author** — Visible only when using the Add Row icon; select the relevant author.
   - **Start Period** — The group's planning start. Defaults to the next fiscal annual period.
   - **Duration** — Defaults to 1 Year. Options depend on annual fiscal periods defined on the default entity.

> [!important] Extended Duration
> If more than five annual fiscal periods are defined in the future, an **Other** option appears. Selecting it allows you to enter a duration from 6 through 8 years. Duration can be changed later by updating the Duration attribute.

4. Click **Create**. The Roadmap Group appears in the timeline layout with a system-generated ID.
5. Click **Select Roadmaps** to start adding child roadmaps. The **Select From Roadmaps** screen appears.
6. Click **+ Add Roadmap** to browse the list of available roadmaps.
7. Use **search keywords** or **filters** to narrow the list, then select checkboxes for the roadmaps to include.
8. Click **Add** to add the selected roadmaps.
9. Click **Close** to confirm. The items from the selected roadmaps now appear in the group view.

To **delete** a roadmap group, go to the Roadmaps list page, select the roadmap group row, and click **Delete**.

---

## Copy a Roadmap Group

Create a new roadmap group by copying an existing one. The copy includes:

- Dependencies
- Agreements and Key Milestones
- Roadmap Events
- View options for all three layouts
- Event definitions

> [!note] What Is Not Copied
> - Personalizations (saved views, starred views, sharing settings, and unsaved views from the source are not copied to the target).

### Procedure

1. Log in to Clarity and click **Roadmaps**.
2. Select the roadmap group to copy, then click **Copy**. Alternatively, right-click the roadmap group and select **Copy** from the context menu.
3. The **Copy Roadmap** dialog appears. Enter a name for the copy.
4. Click **Copy**. A **"Copy is in Progress"** banner is displayed until the copy completes.
5. Once complete, the new roadmap group appears in the Roadmaps grid.
6. Open the copied group and update the details as needed.

> [!note] Copy Behavior Details
> - Only **one roadmap group can be copied at a time**.
> - The copy function includes all associations of the source group.
> - Copy is performed either **instantly** (fewer associations) or **via background job** (more associations) — similar to the Sync function.
> - If you navigate away or refresh during a background copy, the banner is lost but the copy may still complete; check the grid.
> - You cannot start another copy while a copy is in progress.
> - If the copy fails, a **notification** is sent via the Notification icon.

---

## Edit Roadmap Group Details

You can update the attributes of a roadmap group (description, type, status, author, and so on) and add or remove child roadmaps.

### Edit via the Roadmaps List Grid

1. On the Roadmaps page, use the **Column Panel** to add relevant attributes to the grid (e.g., Description, Type, Status, Starred).
2. Edit values directly in the grid by clicking the appropriate cell.

### Edit via the Properties Tab

1. Open the roadmap group.
2. Click **Properties** to open the Properties tab.
3. Update the desired attributes (name, description, author, type, status).
4. Save your changes.

### Add or Remove Child Roadmaps

1. Open the roadmap group.
2. Click **Select Roadmaps** to open the selection screen.
3. To **add** new roadmaps: select their checkboxes and click **Add**.
4. To **remove** a roadmap from the group: deselect it or use the remove option on the group's roadmap list.
5. Click **Close** to save.

---

## Related Notes

- [[Top-Down Planning]] — Creating and managing individual roadmaps
- [[Timeline Layout]] — Timeline view behavior (applies to Roadmap Groups too)
- [[Board Layout]] — Board view behavior (applies to Roadmap Groups too)
- [[Grid Layout]] — Grid view behavior (applies to Roadmap Groups too)
- [[_MOC Roadmaps]] — Back to the roadmaps MOC

%%Source: Clarity 16.4.1 — Top-Down Planning with Roadmaps (Working with Roadmap Groups section)%%
