---
title: Staffing in Hierarchy
tags:
  - howto
  - hierarchies
aliases:
  - Hierarchy Staffing
  - Staff Grid Hierarchy
  - Resource Allocation Hierarchy
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Staffing in Hierarchy

The **Staffing module** in Hierarchies leverages the cross-object grid to help you manage resource allocation across all investment types in your hierarchy — projects, ideas, and custom investments — from a single workspace. Rather than visiting each investment individually, program managers can review and update staffing data for the entire hierarchy tree in one place.

> [!info] Prerequisites
> - The **Staffing module** must be added to the relevant Hierarchy Blueprint by an administrator.
> - You need the appropriate investment edit access rights and booking rights (soft or hard) to modify staff records.

---

## Staffing Grid Data Model

The cross-object staffing grid organizes data into three main sections:

| Section | Key Attributes |
|---------|---------------|
| **Common Investment** | Name, Investment ID, Type — shared across all investment types |
| **Staffing** | Resource, Role, Booking Status, Allocation — essential resourcing fields |
| **Totals** | Actuals (TSV), Allocations (TSV), ETC (TSV) — time-varying per-period metrics |

> [!note]
> The cross-object staffing workspace does not support Aggregated Calculated Attributes (ACA), Calculated Attributes, or Formula Attributes.

---

## Setup View Options

You can configure per-period metrics (TSV) to show fiscal or calendar allocation data across time periods.

Follow these steps:

1. Log into Clarity and open the relevant hierarchy.
2. Click **Staff** to open the staffing module.
3. Click **View Options**.
4. In **Periods**, select a unit of time: Weeks, Months, Quarters, or Years.
5. In **Type**, specify how to define Per-Period Metrics:
   - **Periods**: Set a Start Period and End Period. Clarity adjusts the display based on the period unit selected.
   - **Duration**: Set a Start Period and the number of periods (Duration), with an optional offset from the start.
6. Define how totals are displayed:
   - **Sum of Period**: Shows the total for the number of periods currently displayed in the layout.
   - **Grand Total**: Shows the full investment total regardless of how many periods are displayed.
7. Set **Per-Period Metrics** display:
   - **Total**: Shows only the Totals field (no per-period columns).
   - **Periods**: Shows only per-period columns (no Totals field).
   - **Total and Periods**: Shows both.

> [!important]
> Per-period metric attributes must be selected from the **Column Panel** — they are not automatically added.

8. **Select Total and Period Columns Separately**: Turn on to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. Default is Off.

> [!note]
> When **Select Total and Period Columns Separately** is enabled, Clarity disables the Per-Period Metrics setting in View Options. Switching it back OFF retains the previously selected Per-Period Metrics values and returns the Columns panel to one set of per-period metrics.

9. **Show Total Row**: Turn on to display an additional Total row at the top of the grid (below the header). Default is Off.

**Aggregation Types by Attribute Type**:

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TS |
|-------------|-----------------------------------|---------|------|---------|----|
| Sum | Yes | - | - | - | Yes |
| Average | Yes | Yes | - | - | Yes |
| Count | Yes | Yes | Yes | Yes | Yes |
| Min/Max | Yes | Yes | Yes | - | Yes |
| None | Yes | Yes | Yes | Yes | Yes |

10. **Show Indicator on Non-Default Values**: Enable to display visual indicators when default values are updated for:
    - Default allocation percentage
    - Grand Totals or Totals column
    - Allocation Start and Finish date columns
    - Individual allocation per-period metrics

11. Configure **Money Decimal Display** and **Number Decimal Display** as needed.

12. **Wrap Text**: Turn on to wrap text for all attributes in the grid. Default is Off.

13. Click **X** to close the View Options panel. A scrolling per-period metrics widget appears — use the front and back arrows to cycle through periods.

> [!note] TSV Key Points
> - TSV attributes can be relabeled but not secured via Field Level Security.
> - TSV totals can be used in widgets.
> - Custom TSV data can be included and edited in the staffing grid.
> - TSV totals cannot be added to the Details Panel.
> - Forecast data only displays in TSV if a detailed cost plan has been created for the investment.

---

## Replace Staff Members

You can use the staffing grid to replace roles, resources, or teams within any investment in the hierarchy. The following replacement combinations are supported:

- Replace a **role** with a different role, a team, or a resource.
- Replace a **resource** with a different resource, a team, or a role.
- Replace a **team** with a different team, a resource, or a role.

### How to Replace a Staff Member

1. Open a hierarchy and click **Staff**.
2. In the **Resource** field, double-click the resource, role, or team you want to replace.
3. Search for and select the replacement:
   - Search by name, ID, or primary role for resources.
   - Search by name or select from the drop-down for roles and teams.

### Replace a Role with Another Staff Member

Requirements: investment edit access and booking rights for both the existing and target staff member.

The original role is either partially or completely replaced based on:
- The combination of booking status (hard or soft) on the existing role and the target staff member.
- The **Reassign Tasks when replacing Role** setting configured in Classic PPM Administration.

> [!note]
> If the existing role has a hard booking status, the role remains on the investment. You can only select a target resource or team that is not already on the investment.

### Replace a Resource with Another Staff Member

Requirements: investment edit access; soft booking rights for soft-booked resources; hard booking rights if the existing allocation is hard.

**If the resource has actuals posted**:
- The target staff member is allocated at the default allocation percentage.
- The target staff member is assigned to tasks with remaining ETCs.
- The existing resource remains on the investment (assigned to tasks where actuals are posted).
- The existing resource's allocation amount is reset to zero.
- All existing task assignment ETC amounts for the existing resource are reset to zero.

**If the resource has task assignments (no actuals)**:
- The target staff member is added with the remaining allocation and all relevant task assignments.
- The start date of the target staff member's allocations is set after the existing resource's ActThru date.
- For tasks where the existing resource has booked actuals, the target is assigned with the remaining ETC.

**If the resource has no posted actuals**:
- The target staff member fully replaces the existing resource for all allocations and task assignments.
- The existing resource is removed from the investment.

> [!note]
> The same replacement rules apply when replacing a **team** with another staff member.

---

## Remove Staff Members

You can remove a resource, role, or team from any investment in the hierarchy staffing grid.

**Access requirements**:
- `<Investment>` - Edit All (Global), OR
- `<Investment>` - Edit (Instance or OBS)
- Plus resource or role hard or soft booking rights.

**You can always remove**: roles from the investment staffing grid.

**You can remove a resource only when**:
- No posted actuals are associated with the resource.
- No requisitions in **Booked** status are associated with the resource.

> [!warning]
> If a resource has a requisition in Booked status, you must first unbook and then delete the requisition in Classic PPM before removing the resource from the staffing grid.

### Steps to Remove a Staff Member

1. Open a hierarchy and click **Staff**.
2. Click any cell in the row for the staff member you want to remove.
3. Right-click the cell and select **Delete Row** from the context menu.

> [!note]
> Removing a staff member from an investment item does not delete the resource or role from the system — it only removes the staffing record from that investment.

---

## Enable Resource Summary Mode (Histograms)

**Resource Summary Mode** displays staffing data as histograms, giving a visual representation of resource utilization across investments. This is particularly useful for identifying over- and under-allocation at a glance.

Follow these steps:

1. In the Main Menu, click **Hierarchies** and select the relevant hierarchy.
2. Click **Staff** to open the staffing grid.
3. Toggle **ON** the **Resource Summary Mode** switch.
4. Click **Confirm** — existing Group By settings are replaced with a grouping by **Resource**, and histograms appear.
5. To configure the histogram display, select the hamburger menu for an allocation column and choose from:
   - **None**
   - **% Utilization**
   - **Allocation / Availability**
   - **Availability - Allocation**

When Resource Summary Mode is active, histograms appear for the following columns (where Availability data is present):

| Column | Histogram Type |
|--------|---------------|
| Allocation | Governed by Over/Under Allocation Threshold |
| Hard Allocation | Governed by Over/Under Allocation Threshold |
| Total Usage | Governed by Over/Under Assignment Threshold |
| Per-Period Metric columns (TSVs) | Available for time-varying attributes |

**Color coding**: Colors in the histogram reflect Over/Under Threshold settings configured in General Settings (Administration). See [[First Time Login]] for threshold configuration details.

> [!note] Resource Summary Mode Constraints
> - You can use a maximum of **3 Group By attributes** in this mode; Resource must be one of them.
> - The **Display Availability and Remaining Availability Amounts for Roles** option in Classic PPM determines how role availability amounts are displayed.
> - **Export to CSV** is not available in this mode.
> - You can directly modify **Allocation** and **Hard Allocation** values within the grid in this mode.
> - The **Replace** and **Reallocate** options are unavailable in this mode within the Hierarchy Staff module.

---

## Related Notes

- [[Create and Edit Hierarchies]] — Hierarchy tree setup and card management
- [[Cross-Object Investment Grid]] — Tabular cross-investment analysis
- [[Financial Plans in Hierarchy]] — Financial data across the hierarchy
- [[_MOC Hierarchies]] — Back to the Hierarchies MOC

%%Source: p1975–2159%%
