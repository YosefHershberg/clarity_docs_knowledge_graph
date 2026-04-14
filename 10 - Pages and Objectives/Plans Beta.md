---
title: Working with Plans (Beta)
tags:
  - concept
  - howto
aliases:
  - Plans
  - Workforce Plans
  - OBS-Driven Plans
  - Resource-Driven Plans
canonical: true
audience: pm, admin, rm, leadership
domain: reporting
---

# Working with Plans (Beta)

The **Plans** workspace in Clarity enables organizations to create workforce models that help leadership make data-driven decisions about human resources. Plans support strategic workforce planning by importing investment and resource data, modeling headcount scenarios, and rolling up data through organizational hierarchies.

**Key benefits of Plans:**

- **Improved decision-making** — Analyze workforce trends (turnover, skills gaps) and align human resources with strategic goals.
- **Future workforce planning** — Forecast future workforce needs by analyzing historical data patterns.
- **Improved operational efficiency** — Identify where the organization is over or understaffed.
- **Risk management** — Identify potential exposure areas such as compliance risks or skill shortages.

---

## Overview of Plan Types

Clarity supports two plan types:

| Plan Type | Description |
|---|---|
| **Investment OBS-Driven Plan** | Mirrors the investment structure of an OBS hierarchy. Automatically imports investment and staff data. Best for organizations using OBS to manage investment planning. |
| **Resource-Driven Actuals Plan** | Starts by importing resources, then uses tables to balance the Investment Breakdown. Best for detailed resource-level workforce modeling. |

**Key capabilities available in both plan types:**
- Configure up to **10 Resource and/or Investment Tables** per plan.
- Project headcounts using Add/Remove options in Resource Breakdown or Employee Type pages.
- **Versioning** — Analyze What-If scenarios.
- **Publishing** — Enforce approval governance and balance plans.
- **Plan Hierarchy** — Navigate organization hierarchy to view and manage headcount totals at different levels.
- **Aggregated Headcounts** — Roll up headcounts from a single unit to the top-level organization, with drill-down by business unit or team.

---

## Access Rights

| Access Right | Description |
|---|---|
| **Plan - Navigate** | Required to view the Plans module |
| **Plan - Create** | Required to create plans and execute Start New Round |
| **Plan - Edit** | Required to edit plans |
| **Plan - View** | Required to view plans |
| **Resource - View - All** | Required to add resources to plans |

---

## Setup View Options

1. Log into Clarity.
2. Navigate to the **Plans** workspace and click the **Grid** layout.
3. Click **View Options**.
4. **Show Expandable Tree** — Toggle on to view parent-child relationships in the plan hierarchy. Default is Off.
5. **Money Decimal Display** / **Number Decimal Display** — Configure display format for money and number attributes.
6. **Wrap Text** — Toggle on to wrap text for all grid attributes. Default is Off.
7. Click **X** to close the View Options panel.

---

## Implementing OBS Security on the Plans Object

You can configure OBS Security to ensure only users with appropriate access can use plans. To learn more about setting up OBS, see [[12 - Administration/OBS Configuration]] and **Clarity > Administration > OBS**.

---

## Configure the Expandable Tree in Plans

The Expandable Tree displays hierarchical relationships between plan instances in the Plans grid.

1. Log into Clarity and click **Plans**.
2. Click **View Options** (Gear icon) in the grid view.
3. Turn on the **Show Expandable Tree** toggle.
4. Click **X** to close the View Options panel.

The grid shows parent-child hierarchical relationships and automatically sorts data alphabetically by Name.

> [!info]
> When using the Expandable Tree:
> - **Supported actions:** Filter, Expand, Collapse, Delete, Save views for plans.
> - **Filter behavior:** If the condition is true at the top-most node and false for a child, only the top-most node displays. If false at the top-most node and true at a child, the child displays without its parent (with reduced indent).
> - **Not supported** with Expandable Tree: Export to CSV, Group By, Sorting.
> - The expansion state of nodes is **remembered across user logins**.

---

## Right-click Context Menu

Right-click any cell on a row in the Plans grid to see the context-sensitive menu:

| Option | Description |
|---|---|
| **Open Details** | Access the Details panel for the plan |
| **Star** | Mark the plan as a favorite |
| **Collapse All** | Collapse all plans in the grid |
| **Expand All** | Expand all plans in the grid |
| **Delete Row** | Remove the selected row from the grid |
| **Chart Range (beta)** | Generate a chart using the data in the grid |

---

## Plans Blueprint and Business Rules

The **Plans blueprint** configures layouts for the Plans workspace. Business Rules in the Plans blueprint control how end users engage with the workspace.

When creating business rules for Plans:
- Only the **Set the Rule Type as View Page** rule type is supported.
- This rule type executes every time a user views a page and supports only one complex condition.

Pre-existing **system-level rules** are visible when you start creating rules. Add the **System** attribute to the grid to distinguish system-defined rules from user-defined rules. These system rules govern the underlying functionality of the Plans workspace.

**Enhanced capabilities in the Plans Blueprint:**
- **Round Selector** — Switch between rounds within the plan hierarchy to seamlessly compare plans without returning to the Plans workspace.
- **Plan Round Filter** — Use the **Current Round** option to automatically select the latest round for all plans, reducing clutter when multiple rounds exist.

### Versioning

Versioning enables "what-if" scenario analysis for resource plans.

**Working Copy behavior:**
- Only one working copy exists per plan instance.
- Clarity uses the working copy when aggregating values through the plan hierarchy.
- Creating a version snapshots the working copy's table values.

**Version copy behavior:**
- A version is a read-only, point-in-time snapshot of resource and investment table values.
- A version cannot be overwritten or updated.
- For OBS Investment Plans: versions cannot be deleted. For Resource-Driven Plans: versions can be deleted.
- Restoring a version overwrites the working copy with the version's values.

> [!info]
> Key versioning constraints:
> - The **Sync** button is only available on the top-level node (disabled on child nodes).
> - Edit permissions on the top-level node are required to synchronize plans.
> - When a sync is in progress, all plans in the hierarchy are **read-only** until the sync completes successfully.
> - You cannot version a plan if it has **negative actuals**.

---

## Create and Synchronize Investment OBS-Driven Plans

An Investment OBS-Driven Plan mirrors the investment structure of an OBS (Organizational Breakdown Structure) hierarchy. When you create a plan, the initial synchronization imports investment and staff data from the **previous fiscal year** as actuals, enabling resource planning based on real data.

> [!tip]
> Most organizations begin planning 4+ months before the fiscal year starts. Use the **Sync** option throughout the planning process to keep investment and staff records (including TSV data) current.

The typical workflow for OBS-Driven Plans:

1. **Create** the plan using New Plan from OBS.
2. **Configure** the plan — add relevant tables, enable targets, configure Add/Remove options.
3. **Review** Staff and Investment tabs within investments.
4. **Update** Investment Tables — balance all breakdown tables to zero Undefined records.
5. **Create Versions** — save point-in-time snapshots for scenario analysis.
6. **Synchronize** — keep investment and staff data current.
7. **Publish** — finalize and roll up data to the parent plan.
8. **Commit** — freeze the plan hierarchy.
9. **Start a New Round** — generate a new plan hierarchy iteration.

### Create an Investment OBS-Driven Plan

1. Log into Clarity and click **Plans**.
2. Click **New Plan from OBS**.
3. In the **OBS** drop-down list, select the relevant OBS.
4. In the **Plan Period**, select the relevant fiscal year and click **Next**.
5. In the **Top Level Plan Node**, select the starting node for the plan.
6. In the **Lowest Level Plan Node**, select the ending node for the plan.
7. Optionally select **Include Investments from Descendants of Lowest Level** to include investments below the lowest node.
8. In **Investment Types to Include**, select the investment objects to include (e.g., Projects, Ideas, Custom Investments).
9. Click **Create**.

> [!info]
> Key points:
> - Clarity imports labor and team staff records from the OBS structure and aggregates labor records.
> - Plans can be renamed to meet business requirements.
> - Actuals in the plan are based on the Total Usage of imported Staff records.
> - If plan creation fails, an error message displays and no hierarchy is created. If the tree is created but synchronization fails, Clarity saves everything up to the failure point — the plan is **read-only** until a successful sync completes.
> - The New Plan from OBS modal displays up to **500 OBS units**.
> - All mandatory custom Plan attributes must have a default value — blank mandatory attributes will cause plan creation to fail.
> - The unit of measure for the Staff module is controlled by **Avatar > Settings > General**.

### Configure an Investment OBS-Driven Plan

1. Log into Clarity and click **Plans**.
2. Select a plan to open it.
3. Click the **Plan** tab.
4. Click **Configure** to open the Configure Plan window.
5. **Current Plan Configuration** — Select the calculation method:
   - **From Actual Amount**: Current Plan = Actual value + (Add and Remove values)
   - **From Previous Plan Amount**: Current Plan = Previous Plan value + (Add and Remove values)
6. **Enable Targets** — Toggle on to define fiscal targets pushed down to child plans.
7. **Breakdown (Previous Year) Add/Remove** — Include Add/Remove columns in the FY-1 section for scenarios such as acquisitions, resignations, and retirements.
8. **Show Planning Columns** — Show previous plan amount or actual plan amount in the planning column.
9. **Display** — Select assignments or allocations; select FTE, Hours, or Days.
10. **Number Decimal Display** — Configure numeric display precision.
11. In **Resource Breakdown** or **Investment Breakdown** sections:
    - Hover over a table and click **Delete** to remove it (removing all tables removes the entire section).
    - Hover over a table and **drag** to reposition it.
    - Use **Add Table** to add up to **10 Resource and/or Investment Tables** per plan (selected from static or dynamic lookups on the resource or investment objects).
12. Click **Save**.

> [!warning]
> Configuration constraints:
> - Only parent plans can have their configuration edited. Child plans inherit the parent's configuration.
> - Users must have **edit access on the top-level plan** to edit plan configuration.
> - When adding new tables, click **Sync** to synchronize values from investments.

### Set Financial Year Targets for Parent Plan Owners

Parent plan owners can define fiscal targets for their immediate child plans, which are then pushed down.

> [!info]
> Target behavior:
> - If plan totals do NOT match the target, publishing is still allowed — targets provide guidance, not enforcement.
> - Target amounts are independent of plan versions — targets do not change between versions.
> - Parent owners must have **edit access to immediate child plans** to update target values.
> - Target amounts can only be changed on the **Working Copy**.
> - Targets only accept **whole numbers** (no decimals).
> - A sub-parent without a target from its parent can define partial targets for its own immediate children.

**Follow these steps:**

1. Log into Clarity and click **Plans**.
2. Select a relevant parent plan to open it.
3. Click the **Plan** tab, then click **Configure**.
4. Select **Enable Targets** and click **Save**.
5. Click **Edit** in the **Targets** widget to enter targets for each child plan.
6. Ensure the Totals are balanced against the targets assigned to child plans.
7. Click **Done** to save.

### View Existing Staff and Investments Associated with the Plans

After your administrator configures the Plans blueprint with **Investment** and **Staff** modules, you can view investments and staff associated with plans in their respective modules. Use the Column panel to add attributes configured by your Clarity administrator under the **Plans tile on the Administration workspace**.

### Update Investment Tables

1. Log into Clarity and click **Plans**.
2. Select a plan to open it.
3. Click the **Plan** tab and then **Configure** to display the relevant tables under the Investment Breakdown and Resource Breakdown sections.
4. Navigate to the **Investment Breakdown** category and edit the tables — add relevant categories and associate resource counts. The exercise is complete when the **Undefined** category has zero resources.
5. If accommodating acquisitions, resignations, or retirements, enable **Breakdown (Previous Year) Add/Remove** via Configure to include Add/Remove columns in the FY-1 section.
6. Ensure **Undefined** values in the Resource Breakdown section are also zero.

> [!info]
> As you update Investment Breakdown tables, the Resource Breakdown tables update automatically.

### Create Versions of Your Plan (OBS-Driven)

1. Log into Clarity and click **Plans**.
2. Select a plan to open it, then click the **Plan** tab.
3. After updating your plan, click the **Version** button.
4. Enter the version name and click **Save**.
5. In the versions drop-down, click **Working Copy** to continue editing.
6. Click **Manage Versions** to view, rename, or delete versions.
7. To restore a version, select it in the drop-down and click **Restore**.

> [!info]
> OBS-Driven plan versioning also supports:
> - Versions within a plan's **Investment grid** — multiple versions with different investment snapshots.
> - Versions within a plan's **Staff grid** — multiple versions with different staffing snapshots, including TSV attributes.
> - Versioning is limited to a specific plan instance (not the entire plan hierarchy).
> - **OBS versions cannot be deleted** (unlike Resource-Driven plan versions).

### Synchronize Investment OBS Plans

Use **Synchronize** after creating an OBS plan to keep investment actuals current. When you synchronize, Clarity removes all investments and re-imports selected investment types and associated staff records.

The scope of synchronization is determined by:
- The **Investment Types** selected in the Plan Sync in Progress window.
- The attributes specified in the **Plans Tile on the Administration workspace**.

1. Log into Clarity and click **Plans**.
2. Select a plan to open it, then click the **Plan** tab.
3. Click **Actions** > **Sync Investments and Staff**.

> [!info]
> Sync constraints:
> - The **Sync** button is only available on the **top-level node**.
> - **Edit permissions on the top-level node** are required.
> - When sync is in progress, all plans in the hierarchy are read-only.
> - Clarity uses the **Synchronize Plan from the OBS** job (not user-accessible, triggered only by the Sync button).
> - Use **Preserve Manual Plan Name Changes** to prevent manual name changes from being overwritten during sync.
> - Only attributes selected by your administrator from the Plans tile in Administration are synchronized.

### Synchronize OBS Unit Changes in Plans

When the OBS hierarchy changes (corporate restructuring, mergers), use **Update Plan Structure from OBS** to adapt the plan to OBS changes.

Supported OBS change types:
- OBS Unit renamed
- OBS Unit added
- OBS Unit moved
- OBS Unit deleted

1. Log into Clarity and click **Plans**.
2. Select a plan to open it, then click the **Plan** tab.
3. Click **Actions** > **Update Plan Structure from OBS**.
4. In the **Plan Levels** pane, select the updated plan level and click **Next**. (Higher level = removes plans; lower level = adds plans.)
5. In the **Changes from OBS** pane, review Added, Moved, Deleted, and Renamed OBS Units (and plan level changes). Click **Next**.
6. In the **Preview Changes** pane, review the new plan hierarchy with delta changes. Click **Next**.
7. Select **Sync Investment and Staff Records after Updating Plans** and click **Update**.

> [!warning]
> OBS sync constraints:
> - You cannot move or delete the top-most level node. If the root level plan node is moved or deleted in the OBS, an error message displays — you must create a new investment-driven OBS plan hierarchy.
> - The Plan Hierarchy navigator is limited to **500 plans per branch**. If any OBS branch exceeds 500 units, OBS sync to that branch of the Plan Hierarchy is not possible.
> - If deleted or deactivated attributes exist in breakdown tables, Clarity displays a banner and prompts confirmation before executing a plan sync to remove those attributes.
> - Clarity only imports investments associated with the selected OBS and within the fiscal year start and end periods.

### Publishing Plans (OBS-Driven)

Publishing enforces approval governance and balances plans. When published:
- Clarity creates a version (prompts for a version name).
- Plan breakdown table values, investments, and staff records become visible to the immediate parent plan.
- The plan becomes **read-only** (use **Recall** to unpublish and make it a normal plan version).
- Plan Status changes to **Published** in the Plans workspace.

**Publish All:** Click on a parent plan, and use **Publish All** to publish all unpublished child plans and the parent plan simultaneously. A banner indicates the Publish All action is in progress. Plans with "Undefined" rows will not be published — if a child plan is blocked, all parent plans in that branch are also blocked.

1. Log into Clarity and click **Plans**.
2. Select a plan to open it, then click the **Plan** tab.
3. Ensure Investment Tables are correctly balanced with zero Undefined records.
4. Click **Publish** and enter a name in the **Save and Publish** window.

> [!info]
> Publishing rules:
> - Only **one published plan** at a time per plan instance.
> - Can only publish from the **Working Copy**. To republish a prior version, restore it to Working Copy first.
> - Plans with **Undefined records** in Breakdown Tables **cannot be published**.
> - A **published plan cannot be deleted**.
> - Use **Return All** action on the top-level plan to unpublish all published plans in the hierarchy.
> - Use **Recall** (visible only on the Published plan) to unpublish. Once a plan is **accepted** (approved by parent), it cannot be recalled.

### Commit a Plan

Committing finalizes the plan hierarchy by locking editing. After committing:
- You cannot publish, recall, or use Return All on the plan hierarchy.
- Sync Investment/Staff and Update Plan Structure by OBS actions are **disabled**.
- All Working Copies are **hidden**.
- Navigating the plan hierarchy defaults to the committed plan.

1. Log into Clarity and click **Plans**.
2. Select a plan to open it, then click the **Plan** tab.
3. Ensure Investment Tables are correctly balanced.
4. Click **Actions** > **Commit Round**.

### Start a New Round to Generate a Plan Hierarchy

A **round** is a complete copy of the plan hierarchy that allows new targets and plan adjustments without affecting the source hierarchy. Rounds are useful for iterative review/approval cycles.

Use cases:
- Viewing the plan with different target values and comparing rounds.
- Viewing different resource counts between plans.
- Generating a point-in-time snapshot of the plan hierarchy.

1. Log into Clarity and click **Plans**.
2. Select a plan to open it, then click the **Plan** tab.
3. Click **Actions** > **Start New Round**. (Only available on a **committed** plan.)
4. Use the **Round Selector** within the plan hierarchy to navigate between rounds. Use the **Plan Round filter** > **Current Round** option to quickly identify the latest round for all plans.

> [!warning]
> Round constraints:
> - A round can only be created from the latest round where **Plan Status = Committed**.
> - **Start New Round** can only be executed from the **top-level plan**.
> - Rounds are only available for **Investment OBS-type plans**.
> - Users need the **Plan - Create** access right.
> - Round names are auto-incremented numerically (Round 1, Round 2, etc.).
> - **Security rights** to the newly created round instance must be provisioned separately — access to the prior round does NOT automatically grant access to the new round.

### View Investments and Staff from Child Plans in Parent Plans

After a child plan is published, its Investment and Staff data becomes visible to parent plans via the **Plan Navigator**.

1. Log into Clarity and click **Plans** (ensure plans have appropriate parent mapping).
2. Select a plan to open it, then click the **Plan** tab.
3. Use the **Plan navigator** to navigate to the parent tab.
4. Click the **Staff** and **Investment** tabs to view data rolled up from child plans.

> [!info]
> Parent plan visibility rules:
> - The **Version** and **Plan** fields are available on the Investments tab to identify the child plan and version for each investment.
> - Parent plans only see child plan information **after** the child plan is published.
> - A parent plan can only be published when **all immediate child plans are published**.
> - When a parent plan is published, Clarity marks its immediate child plans as **approved**.
> - If a child plan needs to be recalled, the parent plan must first recall its own published plan.

---

## Setting Up a Resource-Driven Actuals Plan

A Resource-Driven plan starts by importing resources and then balances the Investment Breakdown tables. This plan type is suited to organizations that model workforce based on actual resource data rather than OBS hierarchy.

**Workflow overview:**
1. Create the plan (Resource plan type).
2. Configure the plan — add tables, configure breakdown options.
3. Add resources to the plan.
4. Set up the plan (configure breakdown tables from the Plan tab).
5. Update Resource Management and Investment Breakdown tables.
6. Create versions for scenario analysis.
7. Synchronize resource actuals.
8. Publish the plan.
9. Work with the Plan Hierarchy.

### Overview of Resource Tables

Resource tables are derived from static or dynamic lookups associated with the abstract Resource object.

| Column | Description |
|---|---|
| **Previous Plan Period** | Determined by the fiscal year defined for the plan (FY-1). If no annual fiscal periods are defined for the previous period, displays "Base". Editable. |
| **Actual** | Read-only column generated by imported resources. |
| **Add and Remove** | Editable columns to adjust headcount from the previous plan period. Supports acquisitions, resignations, and retirements. |
| **Current Plan Period** | Read-only. Calculated based on the top-level configuration setting (From Actual Amount or From Previous Plan Amount). |

### Overview of Investment Tables

Investment tables are derived from static or dynamic lookups associated with the abstract Investment object.

| Column | Description |
|---|---|
| **Previous Plan Period** | Determined by the fiscal year defined for the plan (FY-1). Editable. |
| **Actual** | **Editable** column for manually entering values. (Differs from Resource tables where Actuals is read-only.) |
| **Add and Remove** | Editable columns to adjust headcount. |
| **Current Plan Period** | Read-only. Calculated based on the top-level configuration setting. |

### Create a Resource-Driven Plan

1. Log into Clarity and click **Plans**.
2. Click **New Resource Plan**.
3. Enter the **Plan Name** and the **Fiscal Year**.
4. Select a **Parent** (optional) to establish a hierarchical relationship.
5. Click **Create**.
6. Click the plan to navigate to its **Properties** module.

> [!info]
> You need the **Plan - Navigate** access right to view the Plans module.

### Configure the Plan

1. Log into Clarity, click **Plans**, and select a plan to open it.
2. Click the **Plan** tab, then click **Configure**.
3. **Current Plan Configuration**:
   - **From Actual Amount**: Current Plan = Actual value + (Add and Remove values)
   - **From Previous Plan Amount**: Current Plan = Previous Plan value + (Add and Remove values)
4. **Breakdown (Previous Year) Add/Remove** — Include Add/Remove columns in the FY-1 section.
5. **Show Planning Columns** — Show previous plan amount or actual plan amount.
6. In **Resource Breakdown** or **Investment Breakdown** sections:
   - Hover and click **Delete** to remove a table.
   - Drag tables to reposition them.
   - Use **Add Table** to add up to **10 Resource and/or Investment Tables**.
7. Click **Save**.

> [!info]
> Child plans inherit configuration from parent plans — only parent plan configuration can be edited directly.

### Add Resources to the Plan

1. Log into Clarity, click **Plans**, and select a plan.
2. Navigate to the **Resources** tab and click **Add Resources**.
3. Use **Group By** and **Filter** to identify relevant resources. Configure TSV attributes using the **Columns** option.
4. Click **Add** to import resources to the plan.
5. Validate the imported resources on the Resources page.

> [!info]
> - Requires **Resource - View - All** access right.
> - Removing a resource from the grid removes the corresponding roles and employment types from the Plans module.

### Setting Up the Plan (Plan Tab)

After importing resources, navigate to the **Plan** tab to begin workforce modeling. The Plan tab includes:

- **Resource Breakdown** tables — Resource data associated with the plan. Analyze current and projected roles needed.
- **Investment tables** — Align resources with various investments and categories. In the Resource-Driven approach, data may initially appear in the Unallocated column.
- **Previous Plan** and **Current Plan** widgets — Automatically updated aggregated totals.

1. Log into Clarity, click **Plans**, and select a plan.
2. Click the **Plan** tab, then **Configure** to display the relevant tables.
3. Review all tables in the **Resource Breakdown** section — allocate resources to relevant columns to eliminate unallocated resources.
4. Navigate to the **Investment Breakdown** section and assign resources to categories until the **Undefined** category shows zero.

> [!tip]
> Work with your Clarity administrator to edit the `WORK_PLAN_INV_CATEGORY` lookup for the Investment Category. Assign employees to categories such as Active Development, Bug Fixes, Sustenance, and Support.

### Update the Resource Management and Investment Breakdown Tables

When using the Resource Management approach, enter numeric values in the **Add** or **Remove** columns of the Resource Breakdown section tables. This action creates "Undefined" values in the Investment Breakdown section tables. You must reallocate these until all Undefined values are zero.

1. Log into Clarity, click **Plans**, and select a plan.
2. Click the **Plan** tab, then **Configure** to display the relevant sections.
3. In the **Resource Breakdown** section, add relevant categories and associate resource counts. Complete when the Undefined category shows zero. (As you update Resource Breakdown, Investment Breakdown updates automatically.)
4. In the **Investment Breakdown** section, ensure all Undefined values are reallocated to zero.

### Create Versions of Your Plan (Resource-Driven)

1. Log into Clarity, click **Plans**, and select a plan.
2. Click the **Plan** tab.
3. After updating the plan, click the **Version** button.
4. Enter the version name and click **Save**.
5. In the versions drop-down, click **Working Copy** to continue editing.
6. Click **Manage Versions** to view, rename, or delete versions.
7. To restore a version, select it in the drop-down and click **Restore**.

> [!info]
> Resource-Driven plan versioning differences from OBS-Driven:
> - Versions **can be deleted** in Resource-Driven plans.
> - Versioning is limited to a specific plan instance (not the entire hierarchy).
> - A plan with **negative actuals** cannot be versioned.

### Synchronize Plans (Resource-Driven)

Use **Synchronize** to update resource actuals on the plan.

1. Log into Clarity, click **Plans**, and select a plan.
2. Click the **Plan** tab.
3. Click **Actions** > **Sync Resources**.

> [!info]
> - The **Sync** button is only available on the **top-level node**.
> - **Edit permissions on the top-level node** are required.
> - When sync is in progress, all plans in the hierarchy are read-only.

### Publishing Plans (Resource-Driven)

Publishing enforces approval governance and balances Resource-Driven plans. When published:
- Clarity creates a version (prompts for a version name).
- For Resource-type plans, only the plan breakdown table values are aggregated to the immediate parent plan.
- The plan becomes **read-only** (use **Recall** to unpublish).

1. Log into Clarity, click **Plans**, and select a plan.
2. Click the **Plan** tab.
3. Use **Configure** to set up the Plan workspace.
4. Update Resource and Investment tables — ensure they are correctly balanced with zero Undefined records.
5. Click **Publish** and enter a name in the **Save and Publish** window.

> [!info]
> - Only **one published plan** at a time.
> - Can only publish from the **Working Copy**.
> - Plans with **Undefined records** in Breakdown Tables cannot be published.
> - **Recall** is only visible when on the Published plan. Once a plan is **accepted**, it cannot be recalled.

### Working with the Plan Hierarchy (Resource-Driven)

The **Plan Navigator** enables navigation through the organizational hierarchy to view and manage headcount totals. The hierarchy is controlled by the **Parent** attribute specified when creating the plan.

1. Log into Clarity, click **Plans** (ensure plans have appropriate parent mapping).
2. Select a plan and click the **Plan** tab.
3. Use the **Plan navigator** to navigate to the parent tab.
4. Review the plan using the steps in the Create and Synchronize and Resource-Driven Actuals sections.
5. Expand the **Previous Plan** and **Current Plan** widgets to view rollup aggregated totals from the plan and immediate child plans.

> [!warning]
> Plan Hierarchy constraints:
> - Use instance and global rights for plans.
> - Publish child plans to finalize and roll up data to the parent plan.
> - If you can access the plan, you see all resources in the grid under "Resources."
> - Adding resources in the resource modal requires the **Resource - View - All** access right.
> - If you view a plan hierarchy without access to a mid-level parent, the hierarchy displays as a **flat list**.
> - You **cannot remove Investment Categories** once added to a plan.
> - You **cannot remove Roles or Employment Type categories** once manually added to a plan or after Add/Remove values have been entered for that category.

---

## Vaia AI Integration

Vaia enables Generative AI for any Rich Text Field (RTF) attribute within the Plans workspace.

**Supported objects and sub-objects:**
- Objects: Projects, Ideas, Custom Investment types (CIT), Hierarchy, Objectives, Plan, Roadmaps, and Custom Master Object (CMO)
- Sub-objects: Risk, Issue, Change Request, Status Report, and Task

**Available AI Actions (after Vaia is configured):**
- **Generate Content** — Generate text for the field.
- **Revise Content** — Revise previously entered content (enabled when content already exists).
- **Grade Content** — Grade the content; results appear in a pop-up showing previously generated grades, dates, strengths, areas for improvement, and enhancement examples.

> [!warning]
> Key considerations:
> - This feature uses a Generative AI service that may produce inaccurate output. Always review AI-generated content for accuracy.
> - This feature is **toggled off** by default — create a support ticket to enable it.
> - Users need a Google Cloud Platform or OpenAI service account with appropriate permissions.
> - If the AI API key is not configured correctly, an error message displays.
> - If Vaia configuration is disabled: `API -1019: Could not process the request due to internal error.`

For configuration details, see [[14 - Vaia AI/AI Agents]].

---

## Related Notes

- [[_MOC Pages Objectives|Pages and Objectives MOC]]
- [[10 - Pages and Objectives/Working with Objectives|Working with Objectives]]
- [[10 - Pages and Objectives/Working with Pages|Working with Pages]]
- [[06 - Resource Management/_MOC Resources|Resource Management MOC]]
- [[05 - Hierarchies/_MOC Hierarchies|Hierarchies MOC]]
- [[07 - Financial Management/_MOC Financial Management|Financial Management MOC]]
- [[14 - Vaia AI/AI Agents|Vaia AI Agents]]
- [[12 - Administration/OBS Configuration|OBS Configuration]]
- [[01 - Getting Started/Common Components/Grids|Grids]]
- [[01 - Getting Started/Common Components/Filters|Filters]]

%%Source: Clarity 16.4.1 Documentation PDF%%
