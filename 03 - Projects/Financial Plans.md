---
title: Financial Plans
tags:
  - howto
  - concept
aliases:
  - Cost Plans
  - Budget Plans
  - Benefit Plans
  - Forecast Plans
  - Project Financials
---

# Financial Plans

Clarity PPM provides a full financial planning framework within each project. Financial plans allow project managers and financial analysts to build detailed **cost plans**, set approved **budgets**, maintain rolling **forecasts**, and track expected **benefits**. Together, these form the financial backbone of a project.

%%Source: p1122-1156%%

---

## Financial Plan Types

| Plan Type | Purpose | Who Creates It |
|-----------|---------|----------------|
| **Cost Plan** | Detailed line-item projection of costs | PM / Financial Analyst |
| **Budget Plan** | Approved/baseline financial plan | PM / Finance (after approval) |
| **Forecast** | Rolling update of expected costs | PM / Financial Analyst |
| **Benefit Plan** | Projected financial benefits (ROI) | PM / Business Analyst |

> [!note] Not all plan types may be available on your project — availability depends on the **Blueprint** configuration. See [[_MOC Administration]].

---

## Concepts

### Cost Plan
A **cost plan** is a detailed schedule of expected costs, broken down by:
- **Period** (monthly, quarterly, or annually)
- **Cost category** (labor, hardware, software, travel, etc.)
- **Resource / Role** (who is performing the work)
- **OBS** (organizational unit incurring the cost)

Multiple cost plans can exist for a project (e.g., "Original Estimate", "Revised Q2 Estimate"). Only one can be marked as the **primary** plan at a time.

### Budget Plan
A **budget plan** represents the **approved financial baseline**. It is typically created by promoting a cost plan after management approval.

> [!tip] Once a budget plan is approved, it should not be edited. Track variances through a separate forecast instead.

### Forecast
A **forecast** is an updated projection of costs based on actuals to date plus the estimate to complete (ETC). Forecasts are typically updated monthly or quarterly.

### Benefit Plan
A **benefit plan** captures the expected financial return from the project — cost savings, revenue generation, or other quantified value. It is used in ROI and NPV calculations.

---

## Navigating to Financial Plans

1. Open the project.
2. Click **Financial Plans** in the left navigation panel.
3. The module shows all plan types as tabs or sections: **Cost Plans**, **Budget Plan**, **Forecast**, **Benefit Plans**.

---

## Creating a Cost Plan

### Steps
1. In the Financial Plans module, click the **Cost Plans** tab.
2. Click **+ New Cost Plan**.
3. Fill in the header fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | E.g., "2024 Original Estimate" |
| **Description** | No | Purpose of this plan |
| **Plan of Record** | No | Check to mark as the primary plan |
| **Fiscal Period Type** | Yes | Monthly, Quarterly, or Annual |
| **Start Period** | Yes | First period of the plan |
| **End Period** | Yes | Last period of the plan |

4. Click **Save** to create the plan header.

### Adding Cost Plan Detail Lines

Each line in the cost plan represents a combination of dimensions:

1. In the cost plan, click **+ Add Line** (or **+ Add Row**).
2. Set the dimensions:

| Dimension | Description |
|-----------|-------------|
| **Cost Category** | Type of cost (Labor, Hardware, Travel, etc.) |
| **Resource / Role** | Optional: specific person or generic role |
| **Investment OBS** | Which org unit owns this cost |
| **Charge Code** | GL account or charge code |
| **Transaction Class** | Capital vs. Operating expenditure |

3. Enter **period amounts** across the columns (one column per fiscal period).
4. Click **Save**.

> [!tip] Use **Labor** lines populated from the [[Staffing]] team to automatically estimate labor costs based on resource rates and allocations. Click **Populate from Team** or **Populate from Allocations** if the button is available.

---

## Populating a Cost Plan from Resource Allocations

Clarity can auto-populate labor cost plan lines from the project team:

1. Open an existing cost plan.
2. Click **Actions → Populate from Team Allocations** (button name may vary by version).
3. Configure the population parameters:
   - **Rate Matrix**: Which rate matrix to use for labor costing
   - **Period Range**: Which periods to populate
4. Click **Populate**.

Clarity creates or updates lines for each team member × fiscal period combination using their allocation and billing/cost rate.

> [!note] The rate matrix must be configured by an administrator for auto-population to work correctly. See [[_MOC Financials]].

---

## Marking a Cost Plan as Plan of Record

Only one cost plan can be the **Plan of Record** (primary plan) at a time.

1. Open the cost plan to designate.
2. Click **Edit**.
3. Check **Plan of Record**.
4. Click **Save**.

The previous Plan of Record is automatically un-flagged.

---

## Creating a Budget Plan

A budget plan is typically **promoted from a cost plan** after management approval:

1. Open the approved cost plan.
2. Click **Actions → Set as Budget** (or **Promote to Budget**).
3. Confirm — the budget plan is created as a snapshot.

Alternatively, create a budget plan manually:
1. Click the **Budget Plan** tab.
2. Click **+ New Budget Plan**.
3. Enter the fields and period amounts.
4. Click **Save**.

> [!warning] Editing an approved budget plan after the fact undermines its use as a baseline. Instead, create a **revised budget plan** and track variance in a separate column or report.

---

## Creating a Forecast

1. Click the **Forecast** tab (or **Forecasts** depending on configuration).
2. Click **+ New Forecast**.
3. Fill in name, period range, and optionally link it to a cost plan as the starting point.
4. Adjust **ETC** (Estimate to Complete) values for remaining periods based on current knowledge.
5. The system can calculate **EAC** (Estimate at Completion) = Actuals + ETC.
6. Click **Save**.

> [!tip] Lock past periods in a forecast so actuals are preserved and only future ETC values are editable.

---

## Creating a Benefit Plan

1. Click the **Benefit Plans** tab.
2. Click **+ New Benefit Plan**.
3. Fill in:

| Field | Description |
|-------|-------------|
| **Name** | E.g., "Cost Savings — Automation" |
| **Benefit Type** | Cost Reduction, Revenue, Avoided Cost, etc. |
| **Period Range** | Fiscal periods the benefit spans |

4. Enter **benefit amounts** by period.
5. Click **Save**.

Benefit plans are used to calculate **NPV** and **ROI** at the investment portfolio level.

---

## Financial Plan Grid

The grid within a plan shows:
- **Rows**: Detail lines (cost categories, resources, OBS)
- **Columns**: Fiscal periods
- **Totals**: Row totals and column totals
- **Variance**: Budget vs. Actuals, Forecast vs. Budget (when columns are configured)

---

## Key Financial Metrics

| Metric | Calculation |
|--------|-------------|
| **ETC** | Estimate to Complete — remaining planned cost |
| **EAC** | Estimate at Completion = Actuals + ETC |
| **BAC** | Budget at Completion — approved budget total |
| **CV** | Cost Variance = EV - Actuals |
| **SV** | Schedule Variance = EV - PV |
| **CPI** | Cost Performance Index = EV / Actuals |
| **SPI** | Schedule Performance Index = EV / PV |

> [!note] Earned Value metrics (EV, CV, SV, CPI, SPI) require **Earned Value Management** to be configured and enabled. See [[_MOC Financials]].

---

## Access Rights for Financial Plans

| Right | What It Allows |
|-------|---------------|
| **Financial Plans - View** | View all plan types |
| **Financial Plans - Edit** | Create and edit cost/benefit plans |
| **Budget Plans - Approve** | Promote cost plan to budget |
| **Financial Plans - Approve** | Approve and lock financial plans |

---

## Related Notes
- [[Staffing]] — Resource allocations drive labor cost plan lines
- [[Baselines]] — Snapshot project plan including financial data
- [[_MOC Financials]] — Deep dive into rate matrices, chargebacks, GL accounts
- [[Status Reports]] — Financial progress shown in status reports
- [[_MOC Projects]]
