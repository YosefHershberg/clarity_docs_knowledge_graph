---
title: Creating and Managing Business Agreements
tags:
  - howto
  - concept
aliases:
  - Agreements
  - Business Agreements
canonical: true
audience: everyone
domain: collaboration
---

# Creating and Managing Business Agreements

**Business Agreements** in Clarity allow you to formally capture and manage dependencies between investments. When one investment must deliver something before another can proceed, a Business Agreement defines what is owed, when it's due, and who is responsible — preventing stakeholders from being blindsided when timelines shift.

Key problem addressed: Organizations lack a single source of truth for investment dependencies. Decisions made in planning meetings get buried in emails, and the ripple effects of delays go unnoticed until it's too late.

## The Agreement Object

The Agreement object lives in Classic PPM but is surfaced in the Clarity UI. Key points:
- Agreements can be created between **projects, ideas, and custom investments**.
- **Predecessors**: Investments that must deliver something to the successor.
- **Successors**: Investments that consume the output from predecessors.
- **Commitment**: Date by which the predecessor can deliver.
- **Deadline**: Date by which the successor needs the deliverable.
- **Owners**: One or more resources that own the agreement.
- **Contributors**: One or more resources contributing to the agreement.
- You can assign an **OBS** to an agreement.
- Supports **field-level security** on attributes.
- The predecessor and successor fields support field-level security (Edit column only; View is always set to All Users).
- Available access rights: **Agreement - Create**, **Agreement - Delete**, **Agreement - Edit**, **Agreement - Navigate**, **Agreement - View** (both instance and global).

> [!IMPORTANT]
> - You can only select projects, ideas, and custom investment types as predecessors or successors. Templates, roles, non-labor resources, teams, and inactive resources are not allowed.
> - Agreements can only be created from the Agreements workspace — not from within individual investment objects.
> - The Agreements module for investment objects is **not automatically added** to the default blueprint. Administrators must manually add it.
> - The canvas supports a maximum of **500 items**.

---

## Configuring the Agreement Blueprint

As an application administrator or PMO content designer, you can use **Blueprints** to configure layouts for the Agreements workspace. This includes adding custom attributes, changing module arrangement, and configuring field-level security.

See [[12 - Administration/Blueprints/Agreements Blueprint]] for the full configuration procedure.

---

## Associate Blueprint with Agreement

1. Navigate to the **Agreements** workspace.
2. Use the **Column Picker** to add the **Blueprint** field to the grid.
3. For each agreement, click the Blueprint field and select the appropriate blueprint.

---

## Creating an Agreement

After creation, an agreement is visible:
- On the **Agreements** page (for users with appropriate access rights).
- In the **Agreements module** for each investment that is a party to the agreement (if the administrator has added the module to the blueprint).
- On the **Roadmaps Timeline** layout, showing dependencies between investments visually.

**Follow these steps:**

1. Navigate to the **Agreements** page.
2. Click the **Add Row** icon to create a new agreement.
3. Type the name and press **Enter**.
4. Populate the **Predecessor**, **Successor**, **Commitment**, and **Deadline** fields.
5. Select the agreement row and click **Details** to open the Details panel.
6. Click **Conversations** to notify relevant stakeholders.

> [!NOTE]
> Use the **Template** attribute to mark an agreement as a template. Users who click **Create from Template** in an investment's Agreements module can select from all agreements that have been marked as templates.

---

## Setup View Options

View Options customize how data is displayed in the Agreements grid.

**Follow these steps:**

1. Navigate to the Agreements page and select a layout.
2. Click **View Options**.
3. **Show Total Row**: Toggle on to add a Total row below the column headers. Configure per-column aggregation using each column header's hamburger menu.

Supported aggregation types by data type:

| Aggregation | Number / Money / Calculated / Integer | Percent | Date | Boolean | TSV |
|---|---|---|---|---|---|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | | | | |
| Min/Max | Yes | | | | |
| None | Yes | | | | |

4. **Money Decimal Display**: Set the number of decimal places for money attributes.
5. **Number Decimal Display**: Set the number of decimal places for number attributes.
6. **Wrap Text**: Toggle on to wrap text in all grid cells (off by default).
7. Click **X** to close the panel and apply settings.

---

## Using the Canvas to Manage Agreements

The **Canvas** layout provides a visual, card-style interface for reviewing and editing a single agreement's details. The default canvas displays the **Investment Dependencies**, **Conversation**, and **Stakeholders** widgets, plus the commitment and deadline fields.

**Follow these steps:**

1. Navigate to the **Agreements** page.
2. Click an agreement to open its canvas.
3. Click **Configure** to enter editable mode.
4. From the **Configure Canvas** panel, drag and drop fields and widgets onto the canvas.
5. Drag a corner of any widget or field to resize it.
6. Click **Remove** to remove a widget or field.
7. Click **Done** to save changes.

**Canvas capabilities:**
- Drag to place; grey shading previews the drop zone.
- Up to **6 columns** of data (configurable).
- All data types are supported **except TSVs**.
- Data can be edited directly on the canvas.
- You can only view objects for which you have permission.
- Use `@` to mention users in the Conversations widget.

---

## Setup Layout in the Canvas

You can configure the number of columns displayed in the canvas.

**Follow these steps:**

1. Navigate to the Agreements page and click the target agreement.
2. Click **Configure** → open the **Layout** tab in the left panel.
3. Select a column layout: **4-Columns**, **6-Columns**, or **8-Columns**.

> [!NOTE]
> Layout change behavior:
> - **Increasing columns**: The current layout is retained and new columns are added to the right.
> - **Decreasing columns**: Widgets in the rightmost columns are shifted downward below the rest.

> [!NOTE]
> **Known Issue**: The UI text does not indicate that PDF export is available for 8-column layouts. However, export to PDF using 8 columns works correctly. This will be corrected in an upcoming patch.

---

## Working with Widgets

Widgets let you visualize and summarize agreement data. They are available from the **Widgets toolbar** and can be added, configured, and filtered interactively.

**Key widget actions:**
- Click **Show Widgets** to display the widgets toolbar.
- Click **Manage Widgets** to open the **Add Widgets** dialog, where you can pick from **My Widgets** or the **Widget Library**.
- Click **New Widget** in the dialog to create a custom widget.
- Use **Interactive Filtering** (drill-down) on any widget for deeper analysis.

**Available widget types:**

| Widget | Description |
|---|---|
| **Number Tile** | Displays a single aggregated number based on filter criteria. |
| **Pie** | Pie chart grouped by a chosen field. Shows top/bottom 3 groups; remainder grouped as "Other". |
| **Bar** | Bar chart grouped by a chosen field. Shows top/bottom 3 groups; remainder grouped as "Other". |
| **Progress Ring** | Ring visualization with a central number based on filter criteria. |
| **Target** | (Roadmaps and Staffing Workspace) Displays numeric/money targets as goals or constraints. |

Each widget supports **Count**, **Sum**, and **Average** aggregation. You can set widget colors and choose between number or percentage display formats.

---

## Additional Capabilities for the Agreement Object

### Processes

You can create and execute **Clarity processes** against the Business Agreement object to automate actions and workflow steps.

### Custom Sub-Objects

**Custom sub-objects** extend the Agreement object with additional granular data not covered by standard attributes. Use Classic PPM's Studio to define sub-objects specific to your organization's needs.

### Business Rules

**Business rules** in Clarity control how users interact with agreements and automate actions based on conditions. You can now define business rules scoped to the Agreements object.

### Notifications

The Agreements object supports **Clarity notifications**, allowing you to alert stakeholders automatically when agreement attributes change or milestones are reached.

### Action Items

You can create **Action Items** for the Business Agreements object, enabling structured decision workflows (Approve, Reject, Acknowledge) to be linked directly to an agreement.

---

## Related

- [[_MOC Collaboration]]
- [[_MOC Investments]]
- [[_MOC Roadmaps]]
- [[12 - Administration/Blueprints/Agreements Blueprint]]
- [[Conversations]]

%%Source: Clarity 16.4.1 Documentation PDF, p790-812%%
