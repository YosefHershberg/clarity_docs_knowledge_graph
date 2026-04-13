---
title: Financial Plans in Hierarchy
tags:
  - howto
  - hierarchies
aliases:
  - Hierarchy Financials
  - Hierarchy Financial Plans
  - Program Financial Rollup
  - Portfolio Financials
---

# Financial Plans in Hierarchy

The **Financial Plans in Hierarchy** view consolidates financial data from all investments in the hierarchy into a single aggregated view. It allows program managers and financial controllers to see total planned costs, budgets, actuals, and variances across the entire investment tree without opening each investment individually.

---

## Accessing Financials in a Hierarchy

1. Open the hierarchy from the Hierarchies list.
2. Click the **Financial Plans** tab (or **Financials** tab) in the hierarchy detail view.
3. The financial summary grid loads showing aggregated data by hierarchy level.

---

## Financial Rollup Mechanics

Data rolls up from **leaf-level investments** through parent nodes to the root:

```
Root Program: Total Budget $2.5M = Sum of all children
  ├── Child Program 1: $800K
  │   ├── Project A: $300K
  │   └── Project B: $500K
  └── Child Program 2: $1.7M
      ├── Project C: $900K
      └── Project D: $800K
```

| Field | Rollup Method |
|-------|--------------|
| **Planned Cost** | Sum of all direct and indirect children |
| **Actual Cost** | Sum of all approved actuals across children |
| **ETC** | Sum of all ETC values across children |
| **Budget** | Sum of all approved budgets across children |
| **Budget Variance** | Budget − Actual Cost (calculated at each level) |
| **EAC** | Actual Cost + ETC (at each level) |

---

## Financial Plan Summary Grid

The summary grid shows key financial metrics per hierarchy node (each investment):

### Standard Columns

| Column | Description |
|--------|-------------|
| **Investment Name** | The investment (indented by level) |
| **Investment Type** | Project, Custom Investment, etc. |
| **Total Budget** | Approved budget for the investment |
| **Total Planned** | Sum of all cost plan planned amounts |
| **Total Actuals** | Incurred costs (approved timesheets + transactions) |
| **ETC** | Estimated cost to complete |
| **EAC** | Estimate at completion (Actuals + ETC) |
| **Budget Variance** | Budget − EAC |
| **Variance %** | Budget Variance ÷ Budget × 100 |

### By Period (Time-Phased)

Click **View Options** → **Time-Phased** to switch to a period-by-period view:
- Columns represent months (or quarters).
- Each cell shows the planned vs. actual vs. ETC for that period.
- Useful for cash flow analysis and budget monitoring by period.

---

## Filtering Financial Data

1. Click **Filter** in the toolbar.
2. Filter by:
   - **Cost Type** — Labor only, Non-Labor only, or all.
   - **Charge Code** — Specific financial classification.
   - **Resource Class** — Internal, External, Contractor.
   - **Period Range** — Show only specific months/quarters.
   - **Investment Level** — Drill to specific levels.

---

## Viewing by Investment Level

Use the **Level** toggle to expand or collapse hierarchy levels:

- **Level 0** (Root only) — Single row showing program totals.
- **Level 1** — Root + first-level children.
- **All Levels** — Full expansion showing every investment.
- Click the **expand/collapse arrow** next to any row to drill into its children.

---

## Budget vs. Actuals Analysis

The most common use of this view is **budget variance analysis**:

1. Enable columns: Total Budget, Total Actuals, EAC, Budget Variance, Variance %.
2. Sort by **Variance %** descending to find the most over-budget investments.
3. Click a problem investment to open its sidebar and review its cost plan details.
4. Navigate to the investment directly via **Open** to investigate further.

> [!tip] Red/Green Coloring
> If configured, the Budget Variance column uses color coding:
> - **Green** — Under budget (positive variance).
> - **Amber** — Variance within a warning threshold (e.g., -5% to -10%).
> - **Red** — Over budget (negative variance beyond threshold).

---

## Cost Plan Type Breakdown

When a hierarchy investment has multiple cost plans (Draft, Approved, Forecast):

1. Click **View Options** → **Plan Type**.
2. Select which plan type to display:
   - **Approved Budget** — The baseline budget plan.
   - **Current Forecast** — The latest forecast (re-estimate).
   - **All Plans** — Toggle between plan types per row.

---

## Financial Plans in the Hierarchy vs. Investment-Level Financial Plans

| Context | Where | Shows |
|---------|-------|-------|
| **Hierarchy Financial Plans** | Hierarchy → Financials tab | Aggregated across all investments in tree |
| **Investment Financial Plans** | Investment → Financial Plans tab | Detailed line-item plan for one investment |

Use the Hierarchy view for **program-level monitoring and governance**. Use the investment-level view for **detailed financial management**.

---

## Exporting Financial Data

1. Click **Actions** → **Export to CSV**.
2. The export includes all visible columns and all rows (respecting filters).
3. For time-phased data: export includes one column per period.
4. Use for offline analysis, finance reporting, or executive budget presentations.

---

## Related Notes

- [[Financial Plans]] — Individual investment financial plan management
- [[Cross-Object Investment Grid]] — Investment attributes grid (non-financial)
- [[Status Reports]] — Financial status reporting within the hierarchy
- [[_MOC Financials]] — Deep-dive into Clarity financial management
- [[_MOC Hierarchies]] — Back to the hierarchies MOC

%%Source: p674–681%%
