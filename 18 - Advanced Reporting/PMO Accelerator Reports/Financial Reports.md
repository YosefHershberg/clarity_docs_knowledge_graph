---
title: PMO Financial Management Reports
tags:
  - reference
  - admin
aliases:
  - Financial Reports
---
# PMO Financial Management Reports


The Financial Management reports provide visibility into financial plans and actual costs across investments. They include capital, expense, budget, and forecast analysis, as well as financial transaction inquiry by resource and day.

> Source: Clarity 16.4.1 documentation, pp. 3497–3534

## Reports Included


| Report Name | Resource ID | Data Source |
|---|---|---|
| Financial Capitalization by Investment | CSK_FIN_CapitalizationByInv | DWH Bean |
| Financial Capitalization Detail | CSK_FIN_CapitalizationByInvDetail | DWH Bean |
| Financial Forecast Review by Investment | CSK_FIN_ForecastReviewByInv | DWH Bean |
| Financial Forecast Review by Plan Grouping | CSK_FIN_ForecastRevByPlanGroup | DWH Bean |
| Financial Budget vs. Forecast by Period | CSK_FIN_BudgetForecastByPeriod | DWH Bean |
| Financial Budget vs. Forecast by Period Detail | CSK_FIN_BudgetForecastByPeriodDetail | DWH Bean |
| Investment Transaction Inquiry | CSK_FIN_InvTransactionInquiry | DWH Bean |

---

## Financial Capitalization by Investment


**Description:** Displays capital and operating amounts for each investment including budget/planned, actual, remaining cost, and percent spent.
Groupable by up to three options (Investment Manager, Business Owner, Investment Type, Project Type, OBS Level). Drills down to Financial Capitalization Detail report.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Investment must have at least one financial plan (budget or cost plan depending on Financial Plan Type parameter)
  - If Financial Plan Type = Budget: investment needs at least one approved budget
  - If Financial Plan Type = Planned: investment needs at least one cost plan
- Financial plan must have **cost type** as a grouping attribute with capital and operating rows
- Department OBS unit must be associated to the investment (requires entity setup in Administration/Finance/Setup/Entities)
- Annual fiscal time periods must exist covering the plan period (used for fiscal year conversion)
- Monthly or 13-period fiscal time periods must exist (used for Financial Capitalization Detail month-by-month display)

**Key Parameters:** Investment OBS Type/Unit, Investment Type (default: All), Investment Manager, Investment, Investment Status, Financial Plan Type (default:
Planned), Fiscal Year, Report Currency, % Spent Threshold (default:
10), Group By 1/2/3 (No Grouping/Investment Manager/Business Owner/Investment Type/Project Type/OBS Level), Include Inactive Investments

**Key Calculations:**
- **Remaining:** Planned or Budget Cost − Actual Cost
- **% Spent:** (Actual Cost / Planned or Budget Cost) × 100
- **% Spent Threshold:** Red background when % spent exceeds the threshold value

**Drill-Down:** Click investment name → Financial Capitalization Detail (amounts by fiscal month)

**Security:** Investment view rights

---

## Financial Capitalization Detail


**Description:** Drill-down companion to Financial Capitalization by Investment. Displays capital and operating amounts by fiscal month for a single investment. Supports the same grouping attributes as the parent report.

**Prerequisites:** Same as Financial Capitalization by Investment. Monthly or 13-period fiscal time periods required.

**Note on Monthly Display:** If financial plans are entered quarterly or annually, amounts display in the first month of the quarter or first month of the year (amounts are NOT spread evenly across months).

**Security:** Investment view rights

---

## Financial Forecast Review by Investment


**Description:** Displays budget or planned cost, compared to forecast cost, with variances by investment. Provides a high-level view of how investments are tracking against financial targets. Drills down to Financial Forecast Review by Plan Grouping.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Investment must have at least one financial plan (budget or cost plan)
- Department OBS and entity/fiscal time period setup required
- Monthly or 13-period fiscal time periods required for as-of-date evaluation

**Key Parameters:** Investment OBS Type/Unit, Investment Type, Investment Manager, Investment, Investment Status, Financial Plan Type (Budget/Planned), Fiscal Year, As Of Date,
Report Currency, Group By 1/2 (financial plan grouping attributes:
Charge Code, Cost Type, Department, Input Type Code, Location, Resource, Resource Class, Role, Transaction Class, User Value 1/2), Include Inactive Investments

**Key Calculations:**
- **Forecast (Calculated):** Actual to the as-of date + ETC from the as-of date forward
- **Variance:** Budget/Planned − Forecast (Calculated)

**Drill-Down:** Click investment name → Financial Forecast Review by Plan Grouping

**Security:** Investment view rights

---

## Financial Forecast Review by Plan Grouping


**Description:** Displays budget/planned cost vs. forecast with variances, broken down by financial plan grouping attributes (e.g., cost type, charge code, role). Provides detail-level financial comparison across grouping dimensions.

**Prerequisites:** Same as Financial Forecast Review by Investment.

**Key Parameters:** Investment OBS Type/Unit, Investment Type, Investment Manager, Investment, Financial Plan Type, Fiscal Year, As Of Date, Report Currency, Group By 1/2 (financial plan grouping attributes)

**Security:** Investment view rights

---

## Financial Budget vs. Forecast by Period


**Description:** Displays budget or planned cost compared to forecast cost with variances, broken down by fiscal period. Groupable by up to two financial plan grouping attributes. Drills down to Financial Budget vs. Forecast by Period Detail.

> **Warning:** This report runs numerous queries. Apply filters to avoid performance issues.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Investment must have at least one financial plan (budget or cost plan)
- Department OBS and entity setup required
- Annual fiscal time periods required (for fiscal year grouping)
- Monthly or 13-period fiscal time periods required (for as-of-date evaluation and period display)

**Key Parameters:** Investment OBS Type/Unit, Investment Type (default: All), Investment Manager, Investment, Investment Status, Financial Plan Type (default:
Planned), Fiscal Year, As Of Date, Report Currency, Group By 1/2 (Charge Code/Cost Type/Department/Input Type Code/Location/Resource/Resource Class/Role/Transaction Class/User
Value 1/2), Include Inactive Investments

**Supported Financial Plan Grouping Attributes:** Charge Code, Cost Type, Department, Input Type Code, Location, Resource, Resource Class, Role, Transaction Class, User Value 1, User Value 2

**Drill-Down:** Click investment → Financial Budget vs. Forecast by Period Detail

**Security:** Investment view rights

---

## Financial Budget vs. Forecast by Period Detail


**Description:** Detail version of Financial Budget vs. Forecast by Period. Shows financial data at the individual investment and grouping attribute level across fiscal periods.

**Prerequisites:** Same as Financial Budget vs. Forecast by Period.

**Security:** Investment view rights

---

## Investment Transaction Inquiry


**Description:** Displays financial transactions by resource and day across investments. Provides visibility into individual financial transaction records including transaction amounts, transaction class, charge codes, and posting details. Useful for financial reconciliation and audit.

> **Warning:** This report runs numerous queries. Apply filters (especially investment, date range) before running.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Transactions must be posted (Post Transactions to Financials, Post to WIP, or Import Financial Actuals jobs)
- Transactions display in the entity home currency

**Key Parameters:** Investment OBS Type/Unit, Investment Type, Investment Manager, Investment, Resource Manager, Resource, Transaction Class, Charge Code, Transaction Date From/To, Include Inactive Investments/Resources

**Key Fields:** Investment, resource, transaction date, transaction class, charge code, rate, cost, quantity, input type code, transaction status

**Security:** Investment view rights

---

## Common Financial Report Requirements


### Setup Prerequisites
1. **Department OBS** configured (Administration/Organization and Access/OBS)
2. **Entity** created (Administration/Finance/Setup/Entities) with department OBS and location OBS associated
3. **Fiscal Time Periods** created for the entity:
   - **Annual periods:** Required by all financial reports for fiscal year grouping
   - **Monthly or 13-period periods:** Required for period-level display and as-of-date evaluation
4. **Financial plans** (cost plans or approved budgets) created on investments with Cost Type as a grouping attribute

### Financial Plan Type Parameter
- **Budget:** Uses approved budget plan amounts
- **Planned:** Uses cost plan of record amounts

### Currency Note
Actual cost amounts in financial reports are based on financial transaction amounts in the entity home currency. Only transactions processed and posted to WIP are included.

## Related

- [[_MOC Advanced Reporting]]
- [[PMO Accelerator Setup]]
- [[Roles and Permissions]]
- [[Investment Reports]]
- [[Program Reports]]

%%Source: p3497-3534%%
