---
title: Status Reports in Hierarchy
tags:
  - howto
  - hierarchies
aliases:
  - Hierarchy Status Reports
  - Program Status Reports
  - Portfolio Status
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Status Reports in Hierarchy

The **Status Reports in Hierarchy** view provides a consolidated view of status reports across all investments in the hierarchy. Program and portfolio managers can review the health of every investment in the tree — and create a program-level status report — without opening each investment separately.

---

## Accessing Status Reports in a Hierarchy

1. Open the hierarchy from the Hierarchies list.
2. Click the **Status Reports** tab in the hierarchy detail view.
3. The consolidated status view loads, showing the latest status report for each investment in the hierarchy.

---

## Consolidated Status View

The status view displays one row per investment, showing the **most recent status report** data:

| Column | Description |
|--------|-------------|
| **Investment Name** | Investment (indented by hierarchy level) |
| **Investment Type** | Project, Custom Investment, etc. |
| **Report Date** | Date of the most recent status report |
| **Reporting Period** | The period covered by the latest report |
| **Overall Status** | RAG (Red/Amber/Green) |
| **Schedule Status** | Schedule RAG |
| **Budget Status** | Budget RAG |
| **Scope Status** | Scope RAG |
| **Author** | Who submitted the status report |
| **Last Updated** | When the report was last modified |

---

## RAG Rollup to Program Level

At parent hierarchy nodes, Clarity calculates a **rolled-up RAG status** from all children:

| Rollup Rule | Description |
|-------------|-------------|
| **Worst-Child** | Parent shows Red if any child is Red; Amber if any child is Amber; Green if all Green |
| **Majority** | Parent shows the most common RAG value among children |
| **Weighted** | Parent RAG weighted by investment size (budget or effort) |

> [!note] Rollup Method Configuration
> The RAG rollup method is configured by an administrator in the hierarchy Blueprint. "Worst-Child" is the most commonly used method for risk-averse governance.

---

## Filtering Status Reports

1. Click **Filter** in the toolbar.
2. Common filters:
   - **Overall Status = Red** — Show only at-risk investments requiring attention.
   - **Report Date < 30 days ago** — Investments with stale status reports (not recently updated).
   - **Investment Level = 1** — First-level investments only (direct children of root).
   - **Missing Report** — Investments that have no status report for the current period.

> [!warning] Stale Status Reports
> Filter to investments where the most recent report is older than your reporting cadence (e.g., 30 days for monthly reporting). These investments need to be followed up with their managers.

---

## Creating a Program-Level Status Report

In addition to viewing investment-level reports, you can create a **program-level status report** that aggregates across the hierarchy:

1. In the Status Reports tab, click **+ New Program Report**.
2. Select the **Reporting Period**.
3. The program report canvas pre-populates with:
   - **Rolled-up RAG** from all child investments.
   - **Summary metrics**: count of Red/Amber/Green investments, total actuals vs. budget, etc.
   - **Aggregated milestones**: upcoming milestones across all investments.
   - **Aggregated risks/issues**: top risks from the hierarchy.
4. Add executive narrative to each section.
5. Click **Submit** to publish.

---

## Viewing Individual Investment Reports

From the hierarchy status view:

1. Click any investment row to open the investment sidebar.
2. Click **View Report** to open that investment's latest status report in full detail.
3. Or click **Open Investment** to navigate to the full investment detail view and its Status Reports tab.

---

## Status Report Trend

For each investment in the hierarchy, click the **Trend** icon to see the RAG history chart:
- X-axis: Reporting periods (months).
- Y-axis: RAG status color over time.
- Shows whether an investment is improving, stable, or deteriorating.

---

## Alerts for Missing Status Reports

If configured by an administrator:
- Investments without a status report for the current period show a **warning indicator**.
- The system may send automated reminders to investment managers whose reports are overdue.
- Check the **Missing Reports** filter to identify and follow up.

---

## Exporting the Hierarchy Status Summary

1. Click **Actions** → **Export to CSV** for a tabular summary.
2. Or click **Actions** → **Export to PDF** for a formatted status dashboard.
3. The PDF export can include the program-level status report and the per-investment RAG summary.

---

## Related Notes

- [[Status Reports|Investment Status Reports]] — Status reporting on individual investments
- [[Risks Issues Changes]] — RIC items that feed into status reports
- [[Financial Plans in Hierarchy]] — Financial data shown in status reports
- [[Canvas Dashboard|Roadmap Canvas]] — Alternative dashboard view for portfolio health
- [[_MOC Hierarchies]] — Back to the hierarchies MOC

%%Source: p687–690%%
