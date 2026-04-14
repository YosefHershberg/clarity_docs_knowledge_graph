---
title: Create Staffing Projections Using Scenarios
tags:
  - howto
aliases:
  - Scenarios
  - What-If Analysis
  - Staffing Scenarios
canonical: true
audience: rm, pm
domain: resources
---

# Create Staffing Projections Using Scenarios

## Overview

Scenario planning in the Staffing Workspace allows stakeholders to create multiple projections of staffing plans under different conditions. Use it to evaluate how changes in market demand, supply chain disruptions, or operational cost shifts impact profitability — without affecting live investment data.

You can create, share, compare, and publish scenarios from the Staffing workspace.

## Setting Up Scenarios (Administrator Steps)

Before end users can access scenarios, administrators must configure the following:

1. Navigate to the **Actions Framework** and configure:
   - **Staffing Scenarios - Share with People** action (enabled by default)
   - **Staffing Scenarios - Share with Groups** action (enabled by default)
2. Assign the **Staffing Scenario - Access** permission to stakeholders who need the Scenarios tab in the Administration workspace
3. Also assign: **Staffing Scenario - Edit - All** and **Staffing Scenario - Delete - All** for admin-level management
4. Assign end-user access rights: **Staffing Scenario - Create / Copy / Edit / View**

## Creating a New Scenario

1. Log into Clarity and open the **Staffing workspace**
2. Navigate to the relevant tab and click the **Scenario** drop-down
3. Click **New Scenario**, enter a name and description, and click **Save**
4. In Scenario Mode, update scenario-editable fields (grid editing or dragging Gantt bars)
5. Click **Exit Scenario Mode** to return to current data

**In Scenario Mode, Clarity displays two rows per column:**
- **Row 1 (editable)** — scenario-specific data
- **Row 2 (greyed out)** — current live data or data from a comparison scenario

**Actions enabled in Scenario Mode:**

| Action | Investments Tab | Allocations by Investment/Resource | Assignments by Investment/Resource |
|--------|:-:|:-:|:-:|
| Edit Investment Start Date | Y | Y | Y |
| Move Investment bar | Y | Y | Y |
| Move Allocation bar | — | Y | Y |
| Edit Allocation per-period data | — | Y | — |
| Edit Allocation Start/Finish | — | Y | — |
| Edit Default Allocation % | — | Y | — |
| Reallocate (right-click) | — | Y | — |
| Display Widgets & Targets | Y | Y | Y |
| Filter on scenario-enabled fields | Y | Y | Y |

> [!note]
> **Disabled in Scenario Mode:** Add Staff, Add Investment, Delete staff/investment rows, Edit Assignments per-period metrics, Edit Hard Allocations per-period metrics, direct Resource field replacement, drag-n-drop from Resource Histogram to add/replace staff.

**Important date behavior in Scenario Mode:**
- Moving an investment date shifts existing Allocations, Tasks, and Assignments forward proportionally
- Allocations are re-computed into new periods based on current allocation % of availability
- Draft scenario changes ignore posted Actuals dates — when published, Start Dates auto-adjust to align with the earliest posted actual

## Sharing Scenarios

The **Actions Framework** controls how scenarios can be shared.

1. Log into Clarity and open the **Staffing workspace**
2. Click the **Scenario** drop-down and click **Manage**
3. Hover over the **Actions** column for the relevant scenario and click **Share**
4. Click **Add People** or **Add Group** — multi-select is supported
5. Assign **Editor** or **Viewer** access, then click **Done**

> [!note]
> - Scenario owners can only share scenarios listed under the **Mine** tab
> - When scenarios are shared, the groups/people icons show a badge count
> - The Share button appears on hover in the Actions column

## Viewing Scenarios Shared by Others

Shared scenarios appear in two locations:
- The **Scenario** drop-down in the Staffing workspace
- The **Shared** tab in the Manage Scenarios dialog

**What you can see in the Scenario drop-down:**
- All scenarios you created
- All scenarios shared with you (Editor or Viewer access)

> [!note]
> Having the **Staffing Scenario - Access** permission does not make all system scenarios visible in the drop-down. This is intentional — power users interact via the drop-down, not a global list.

**Steps to view shared scenarios:**
1. Log into Clarity and open the **Staffing workspace**
2. Click the **Scenario** drop-down > **Manage**
3. Click the **Shared** tab to see all scenarios shared with you

## Comparing Scenarios

Use the Compare Scenarios capability to see how two scenarios differ side-by-side.

1. Open the **Staffing workspace** and select a scenario from the **Scenario** drop-down
2. The **Compare to Scenario** option appears — select a second scenario from it
3. Clarity displays two rows per column: selected scenario (editable) and compare-to scenario (greyed out)
4. A tick mark appears beside both the selected and compare-to scenarios in the drop-down
5. Click **Exit Scenario Mode** to return to the default grid view

**Supported comparison attributes:**
- Allocation with Start and Finish dates
- ETC
- Hard Allocation
- Total Usage

> [!note]
> Non-supported attributes display only for the selected scenario. Hamburger menu settings apply to the selected scenario but visually affect the Compare to display as well.

## Publish Investment Scenarios

Publishing a scenario applies its draft changes back to the live investment plan of record.

**The Publish modal shows:**
- All investments where staffing records were updated in the scenario
- A count of changes per investment

**Available actions in the Publish modal:**
- **Select All** — select all changed investments for publishing
- **Deselect All** — clear all selections
- **Reset** — revert all changes for selected investments before publishing

**A scenario will NOT publish when:**
- An investment has posted actual transactions
- An investment is currently locked
- The user lacks Investment Edit permission

**Steps to publish:**
1. Log into Clarity and open the **Staffing workspace**
2. Select the scenario from the **Scenario** drop-down
3. Use the action bar to select investments and revert any as necessary
4. Click **Publish**

**Publish access rights:**

| Access Right | Intended For |
|-------------|-------------|
| **Staffing Scenario - Publish - Owner** | Scenario owners — access the Publish modal and publish their own scenarios |
| **Staffing Scenario - Publish - All** | Super-users — publish any scenario in the system |

## Understanding Personas and Access Rights

| Persona | Role Description | Key Access Rights |
|---------|-----------------|-------------------|
| **Ian - The Administrator** | Administers the Staffing workspace and manages staffing for an OBS unit | Staffing Scenario - Access; Staffing Scenario - Edit All; Staffing Scenario - Delete All; Widgets - Edit Targets in Staffing; Staffing Scenario - Publish - All |
| **Dana - Staffing Power User** | Creates scenarios and sets targets for their unit | Staffing Scenario - Access; Staffing Scenario - Create; Staffing Scenario - Copy; Widgets - Edit Targets in Staffing; Staffing Scenario - Publish - Owner |
| **Ray - Staffing User** | Regular staffing user creating scenarios for their investments | Staffing Scenario - Access; Staffing Scenario - Create; Staffing Scenario - Copy; Staffing Scenario - Publish - Owner |

> [!tip]
> The access rights listed above are scenario-specific. Additional rights are required to edit investment details and allocation data in the Staffing workspace.

## Related

- [[Staffing Grid]] — Cross-object staffing grid
- [[Allocations Analysis]] — Allocations timeline views
- [[Assignments Analysis]] — Assignments-based analysis
- [[_MOC Resources]]

%%Source: p1479-1485 — Create Staffing Projections Using Scenarios%%
