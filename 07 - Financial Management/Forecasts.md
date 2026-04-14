---
title: Working with Forecasts
tags:
  - howto
aliases:
  - Forecasting
  - EAC
canonical: true
audience: finance, pm
domain: financials
---
# Working with Forecasts

## Overview

The Cost Plan and Budget grid supports several row-level and plan-level actions:

- Editing per-period metrics
- Row-level actions: Add Row, Open Details, Star, Create Detail Row, Insert Row Below, Delete Row
- Budget plan actions: Approve Budget, Reject Budget
- The Hamburger menu settings are accessible only for the Selected Plan columns, yet the settings affect both the **Compare to: \<Plan\>** and **Deltas** columns.

To remove the comparison from the grid, select **None** from the **Compare to:** drop-down list.

> [!important]
> Export to CSV is disabled while comparing plans. Widgets render data from the Selected Plan (not the Compare to: \<Plan\>).

## Working with Forecasts

Cost Plan and Budget details have two Forecast attributes:

1. **Forecast** — defined as the sum of the actual amount for completed fiscal periods and the planned amount for the current and future fiscal periods.

   Formulae for Forecast:
   - For completed fiscal periods: `Forecast = Actual Cost`
   - For the current and future fiscal periods: `Forecast = Planned Cost`

2. **Forecast Variance** — defined as the difference between planned cost and forecast.

   Formula: `Forecast Variance = Planned Cost − Forecast`

This section contains the following topics:
- [[#Forecast Cutover]]
- [[#Forecast Cutover Example]]
- [[#Other Forecast Definitions]]

## Forecast Cutover

Forecast Cutover allows you to overwrite how Forecast is calculated. When you populate the **Forecast Cutover** field, Clarity calculates Forecast as the sum of the actual amount through the Forecast Cutover date and the planned amount for future fiscal periods.

Formulae for Forecast based on Forecast Cutover:

- Up to the Forecast Cutover date: `Forecast = Actual Cost for the fiscal period`
- After the Forecast Cutover date: `Forecast = Actual Cost for completed fiscal periods + Planned Cost for future fiscal periods`

## Forecast Cutover Example

The following example (Hedmoral) illustrates how Forecast Cutover affects calculations.

**Posted actuals detail:**

| Month | Period Start | Posted Actuals |
|-------|-------------|---------------|
| September | 01 September 2021 | — |
| October | 01 October 2021 | — |
| November | 01 November 2021 | — |

## Other Forecast Definitions

Refer to the [[Cost Plans]] and [[Budget Plans]] notes for additional forecast-related attribute definitions.

## Related
- [[Cost Plans]]
- [[Budget Plans]]
- [[_MOC Financials]]

%%Source: p447, p1149%%
