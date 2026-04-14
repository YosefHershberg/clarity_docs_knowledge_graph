---
title: Custom Metrics in Hierarchies
tags:
  - howto
  - concept
  - hierarchies
aliases:
  - Hierarchy Custom Metrics
  - Aggregation Metrics Hierarchy
  - Calculation Metrics Hierarchy
  - Hierarchy Roll-Up Metrics
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Custom Metrics in Hierarchies

Clarity enables you to define **custom metrics** that roll up data across your hierarchy tree. Rather than relying solely on standard fields, you can create metrics that aggregate values up the tree (Aggregation Metrics) or calculate derived values per investment (Calculation Metrics). These appear directly on hierarchy cards and in the cross-object grid.

> [!info] Where Custom Metrics Apply
> Custom metrics defined in a hierarchy are available across:
> - **Investment Hierarchies** (hierarchy card view)
> - **Objectives Hierarchies** (hierarchy card view)
> - **Cross-Object Investment Grid** (as columns and filter criteria)
> - **Timeline Layout** (as columns in the grid panel)

---

## Prerequisites

> [!warning] Required Access Right
> You can create or delete custom metrics only when you have the **Hierarchy - Manage Metrics** global access right. Without this right, you will see an error when trying to access the **MANAGE METRICS** dialog.

---

## Metric Scope and Availability

Custom metrics are scoped by the investment types included in a hierarchy:

- If you create a custom metric for a hierarchy that includes **Custom Investments and Projects**, that metric will **not** be available in a hierarchy that includes only Ideas.
- When custom metrics are created, they also appear in:
  - The **Hierarchical** filter category on the Cross-Object Grid
  - The **Hierarchical** column picker category on the Cross-Object Grid

> [!tip] Practical Example
> Rhonda manages a security products portfolio. She wants to monitor:
> 1. **Total Planned Cost** — the rolled-up sum of Planned Cost across all investments in the program.
> 2. **Total Actual Cost** — calculated as Actual Capital Cost + Actual Operating Cost for each investment.
>
> She uses Aggregation Metrics for (1) and Calculation Metrics for (2). Both metrics then appear on hierarchy cards across all hierarchies that include the same investment types.

---

## Working with Aggregation Metrics

**Aggregation metrics** roll up a selected attribute value upward through the entire hierarchy tree — from children to parents, across all investment types.

### Create an Aggregation Metric

1. In the main menu, click **Hierarchies** and select the hierarchy you want to open.
2. Click **View Options** and select **Manage Metrics**.
3. Under the **AGGREGATION** tab, click **New Metric** and enter the metric name (e.g., "Total Planned Cost").
4. In **METRIC BASED ON**, select the source attribute (e.g., Planned Cost).
5. In **AGGREGATION SCOPE**, choose the rollup behavior:
   - **Self and Children**: Adds the investment's own attribute value to the rolled-up sum of all its children. Example: a parent investment's Planned Cost is included in addition to all child costs.
   - **Children Only**: Displays only the rolled-up sum from child investments — the investment's own value is excluded from the rolled-up total.
6. Click **Create**.
7. Open **View Options** and, under the relevant investment tab, drag your new aggregation metric into the **CARD METRICS** section.
8. Cards refresh and show the aggregated value.

> [!note]
> After an aggregation metric is created, you can edit its **name** and view its definition, but you **cannot edit the definition** (the source attribute or scope). To change a metric definition, you must delete it and create a new one.

---

## Working with Calculation Metrics

**Calculation metrics** perform a mathematical operation on two attributes for a **single investment** — there is no cross-investment rollup. The result is displayed on the investment's card.

### Create a Calculation Metric

1. In the main menu, click **Hierarchies** and select the hierarchy you want to open.
2. Click **View Options** (or **Card Options**) and select **Manage Metrics**.
3. Under the **CALCULATION** tab, click **New Metric** and enter the metric name (e.g., "Total Actual Cost").
4. In **Metric Type**, select:
   - **Standard**: Uses money and number fields, excluding per-period metrics (TSVs).
   - **Per-Period**: Uses only stock and custom per-period metrics (TSVs).
5. In **Metric One**, select the first attribute (e.g., Actual Capital Cost).
6. In **Operator**, select the mathematical operator: Add, Subtract, Multiply, or Divide.
7. In **Metric Two**, select the second attribute (e.g., Actual Operating Cost).

> [!warning] Data Type Mismatch
> Metric One and Metric Two must be of the **same data type**. For example, you cannot combine Actual Operating Cost (Money) and Allocation (Number). If you use different data types, Clarity shows: *"Metric One and Metric Two must be of the same data type."*

> [!note] Division by Zero
> If Clarity detects a division by zero condition, it sets the divisor equal to 1 to avoid errors.

8. Click **Create**.
9. Open **Card Options** and add your calculated metric to the card via the **CARD METRICS** list.
10. Cards refresh and display the calculated value per investment.

---

## Key Points and Constraints

| Behavior | Detail |
|----------|--------|
| **Aggregation scope** | Aggregation metrics roll up across all investments; calculation metrics apply per investment |
| **Editing** | You can edit the metric name and view the definition. You cannot edit the definition — delete and recreate instead |
| **XOG / Classic PPM** | Hierarchy aggregation and calculation metrics cannot be created or updated via XOG or Classic PPM |
| **Field Level Security** | FLS is **not** applied to aggregation or calculation metrics |
| **Card metric display** | Attributes configured as card metrics are **rounded up** before display |
| **Card field display** | Attributes configured as card fields are **not** rounded — displayed as-is |
| **TSV availability** | All stock and custom per-period (TSV) attributes are available for both metric types |
| **Saved views** | Saving a view after configuring cards saves the card title, fields, and metrics. Deleting or unlinking cards does not trigger an "unsaved view" state |

> [!tip] Displaying Metrics on the Right Cards
> If you create an aggregation metric based on attributes of the Ideas object, it can be added to cards for all investment types. However, it will only show a value on **Idea cards** — Project and Custom Investment cards will show blank, because the source attribute belongs to Ideas only.

---

## Comparison: Hierarchy Metrics vs. Studio Attributes

Custom Metrics in Hierarchies are an end-user feature, distinct from the administrator-configured Calculated and Aggregated Attributes in Studio (Classic PPM).

| Aspect | Hierarchy Aggregation and Calculation Metrics | Studio Aggregated and Calculated Attributes |
|--------|----------------------------------------------|---------------------------------------------|
| **Configured by** | End users (simple calculations) | Administrators in Studio (simple and complex) |
| **Methods supported** | Aggregation: Sum; Calculation: Add, Subtract, Multiply, Divide | Calculated: Add, Average, Absolute, DateDiff, Divide, Max, Min, Multiply, Percentage, Power, Round, Sqrt, Subtract, Sum, Trunc; Aggregated: Average, Count, Min, Max, Sum |
| **Data types** | Number, Money, Integer, Studio Calculated, Other Aggregation Metrics (Calculation only) | Number, Money, Integer, Date, String; Cannot use Studio calculated/aggregated metrics as inputs |
| **Availability** | Clarity only — visible across all hierarchy instances | Classic PPM and Clarity |
| **Edit definition** | Delete and recreate to change definition | Can be edited in Studio |

> [!note]
> Studio aggregated and calculated attributes are a Classic PPM feature. Hierarchy custom metrics are a Clarity-only feature introduced to give end users self-service roll-up capabilities without administrator involvement.

---

## Using Custom Metrics in the Cross-Object Grid and Timeline

Once created, custom metrics appear in two additional locations beyond hierarchy cards:

1. **Cross-Object Grid** → Column Panel → **Hierarchical** category — add as a column.
2. **Cross-Object Grid** → Filters → **Hierarchical** category — filter investments by metric value.

For the **Timeline Layout**, custom metrics (both aggregation and calculation) are available:
- As **total metrics** in the Columns panel.
- As **per-period metrics** in View Options (when Per-Period type is used).
- Displayed data respects Money and Number Decimal Display settings from View Options.
- When used as total metrics, data respects Sum of Periods or Grand Totals settings.

---

## Related Notes

- [[Create and Edit Hierarchies]] — Hierarchy setup and card configuration
- [[Cross-Object Investment Grid]] — Cross-investment grid where metrics appear as columns
- [[Timeline Layout]] — Gantt view where metrics appear as grid columns
- [[Objectives Hierarchy]] — Custom metrics also apply here
- [[_MOC Hierarchies]] — Back to the Hierarchies MOC

%%Source: p363–451, p985–1047, p1825–1903%%
