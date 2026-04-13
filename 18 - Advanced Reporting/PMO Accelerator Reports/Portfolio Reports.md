---
title: PMO Portfolio Management Reports
tags:
  - reference
  - admin
aliases:
  - Portfolio Reports
---
# PMO Portfolio Management Reports

The Portfolio Management reports provide visibility into investment data within portfolios and portfolio plans. They support plan comparison, investment-level change tracking, and waterline analysis.

> Source: Clarity 16.4.1 documentation, pp. 3560–3571

## Reports Included

| Report Name | Resource ID | Data Source |
|---|---|---|
| Portfolio Plan Comparison | CSK_PFM_PortPlanComparison | Classic PPM Bean |
| Portfolio Plan Changes | CSK_PFM_PortPlanChanges | Classic PPM Bean |
| Portfolio Plan Changes - Waterline and Rank | CSK_PFM_PortPlanChgWaterline | Classic PPM Bean |

---

## Portfolio Plan Comparison

**Description:** Provides a comprehensive portfolio-level view comparing actual portfolio data to portfolio plans. Displays above-waterline investment totals, metrics, and counts. Supports comparison of the portfolio to up to three plans, with optional comparison to the plan of record. Includes distributed target amounts and investment-level detail.

> **Warning:** This report runs numerous queries. Apply filters before running to avoid performance issues.

**Data Source:** Classic PPM Bean (transactional — uses portfolio CLOB data, not DWH)

**Prerequisites:**
- At least one portfolio must exist
- At least one portfolio plan created to compare portfolio vs. plan (otherwise only portfolio amounts display)
- For "Compare Portfolio to Plan of Record" parameter: at least one portfolio plan marked as plan of record
- Distributed target amounts entered on the Targets tab of the portfolio (for distributed target display)
- At least one portfolio investment above the waterline (for above-waterline section display)
- Portfolio contents must be defined and synchronized via **Synchronize Portfolio Investments** job
  - Can be run manually or scheduled from portfolio or Reports and Jobs
  - Only one portfolio at a time
  - Available via "Sync Schedule Manual" link → Sync Now button on portfolio properties, Contents Editor tab, and Targets tab
- Actual investments must have planned/budgeted cost and benefit entered (financial summary properties or via detailed plans) for above-waterline investment sections
- Investments must have at least one resource/role on the investment team for role allocation demand to display

**Important Notes:**
- Portfolio investment data reflects snapshot as of the **Last Sync Date** (shown on portfolio properties)
- Does **NOT** require time slice requests — amounts are based on portfolio CLOB data
- Investment cost/benefit amounts can be manually entered or modified for plans in a portfolio

**Key Parameters:** Portfolio OBS Type/Unit, Portfolio Manager, Portfolio Stakeholder, Portfolio, Portfolio Plan, Financial Plan Type, Compare Portfolio to Plan of Record (boolean), Include Inactive Portfolios, DB Schema (hidden)

**Report Sections:**
- Portfolio summary (name, manager, stakeholder, sync date)
- Above Waterline Investment Totals (cost, benefit, role demand)
- Above Waterline Investment Metrics
- Above Waterline Investment Counts
- Distributed targets (if entered)
- Investment-level detail with plan comparison columns

**Security:** Portfolio view rights (security based on portfolio association, not DWH access rights)

---

## Portfolio Plan Changes

**Description:** Displays investments within a portfolio that have key attributes modified in portfolio plans. Highlights changes to budgeted/planned cost and benefit, role demand, and schedule dates across up to three plans. Comparisons use highlighting and arrow indicators to identify changes. Can be grouped by investment manager within each portfolio.

**Data Source:** Classic PPM Bean (transactional)

**Prerequisites:**
- At least one portfolio with at least one portfolio plan containing investment data
- Portfolio must be synchronized (Synchronize Portfolio Investments job)
- Investments must have planned/budgeted cost and benefit entered for financial change tracking
- Investments must have role allocations for demand change tracking

**Key Parameters:** Portfolio OBS Type/Unit, Portfolio Manager, Portfolio Stakeholder, Portfolio, Portfolio Plan (up to 3 selectable), Compare Portfolio to Plan of Record (boolean), Include Inactive Portfolios

**Change Indicators:**
- Highlighting to identify changed values between plans
- Arrow indicators (up/down) showing direction of change for cost, benefit, demand, and dates

**Security:** Portfolio view rights

---

## Portfolio Plan Changes - Waterline and Rank

**Description:** Displays the Above Waterline indicator and numerical Rank for investments in each portfolio across up to three portfolio plans. Highlights changes in waterline status and rank between portfolio and plans using color highlighting.

**Data Source:** Classic PPM Bean (transactional)

**Prerequisites:**
- At least one portfolio with portfolio plans
- Investments must have waterline and rank data set in portfolio plans

**Key Parameters:** Portfolio OBS Type/Unit, Portfolio Manager, Portfolio Stakeholder, Portfolio, Portfolio Plan (up to 3), Compare Portfolio to Plan of Record (boolean), Include Inactive Portfolios

**Key Fields:** Investment name, investment manager, Above Waterline indicator (per portfolio and each plan), Rank (per portfolio and each plan), with highlighting for changes

**Security:** Portfolio view rights

---

## Common Portfolio Report Requirements

### Portfolio Synchronization
The **Synchronize Portfolio Investments** job is required for all portfolio reports:
- Copies investment data from actual investment tables to portfolio investment tables
- Attributes synchronized depend on what is registered on the Portfolio Investment object Attribute Registry tab (Administration/Studio/Objects)
- Can be scheduled (weekly/monthly recurrence) or run manually
- Only one portfolio can be synchronized at a time
- Portfolio data reflects the snapshot from the **Last Sync Date**

### No DWH Requirement
Portfolio reports use Classic PPM Bean data source (transactional portfolio tables and CLOB data), **not** the Data Warehouse. The Load Data Warehouse job is not required.

### Financial Setup
For investment amounts to display in portfolio reports:
- Investments need planned/budgeted cost and benefit in financial summary properties (or from detailed plans — plan of record cost plan or approved budget)
- Investments need at least one resource/role on team for demand amounts

## Related

- [[_MOC Advanced Reporting]]
- [[PMO Accelerator Setup]]
- [[Roles and Permissions]]
- [[Investment Reports]]
- [[Financial Reports]]

%%Source: p3560-3571%%
