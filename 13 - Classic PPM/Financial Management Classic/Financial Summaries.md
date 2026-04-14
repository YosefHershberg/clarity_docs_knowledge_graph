---
title: Financial Summaries (Classic PPM)
tags:
  - classic
  - howto
  - reference
source_pages: 2123-2128
---
# Create Financial Summaries (Classic PPM)

Financial summaries allow executives and financial managers to compare NPV, ROI, payback period, rate of return, breakeven, and other metrics for investments.
Values entered are applied over one time period from the investment start date to the finish date, and apply only to this investment (not to child or parent investments).

> [!NOTE]
> If a detailed cost, budget, or benefit plan is created after defining a financial summary, the detailed plan data overrides the summary data and those fields become read-only. Deleting all cost plans (including the POR) restores editability of the financial summary.

## Financial Metrics Reference

| Metric | Description |
|--------|-------------|
| **NPV** | Net Present Value ג€” difference between sum of present value revenue and sum of present value planned cost |
| **ROI** | Return on Investment ג€” ratio between NPV and sum of present value planned cost: `ROI = (Total Planned Benefit - Total Planned Cost) / Total Planned Cost` |
| **IRR** | Internal Rate of Return ג€” discount rate that achieves zero NPV; assumes cash flows are reinvested at the IRR |
| **MIRR** | Modified IRR ג€” rate measuring investment attractiveness; assumes all cash flows reinvested at cost of capital |
| **Breakeven** | Date when expected cash flow equals the cash outlay |
| **Payback Period** | Number of months needed for expected cash flows to equal the initial cash outlay |

> [!IMPORTANT]
> All financial metrics (NPV, IRR, etc.) are computed using daily amounts rolled into calendar monthly periods. External financial tools often use yearly amounts ג€” results may differ.

## Set Financial Planning Options

1. Open **Home > Portfolio Management > Projects** (or other investment type)
2. Open the investment
3. Open **Properties** menu > **Budget**
4. Complete the **Financial Planning** section:
- **Currency** ג€” Defines the currency for the investment (Default: System currency)
- **Budget equals Planned Values** ג€” If selected, budget values match planned values (Default: Selected)
- **Calculate Financial Metrics** ג€” Whether financial metrics are calculated automatically (Default: Selected)
5. Save changes

## Set Capital Cost and Reinvestment Rate (System Level)

1. Click **Administration > Finance > Setup**
2. Click the **Defaults** link
3. In the **General** section, complete:
- **Annual Total Cost of Capital %** ג€” Annual finance rate on borrowed capital
- **Annual Reinvestment Rate %** ג€” Annual interest rate for reinvesting positive cash flow
4. Save changes

> [!NOTE]
> Changing system rates updates the corresponding values on all investment budget properties pages that use system rates. Recalculation happens in the background.

## Set Capital Cost and Reinvestment Rate (Investment Level)

Investment-level rates override system-level settings.

1. Open the investment
2. Open **Properties** menu > **Budget**
3. Complete the **Financial Metrics Options** section:
- **Use System Rate for Total Cost of Capital** ג€” Clear to override; enter investment-specific rate below
- **Use System Reinvestment Rate** ג€” Clear to override; enter investment-specific rate below
- **Initial Investment** ג€” Initial cost used in all financial metric calculations (negative initial investment is allowed)
4. Save changes

## Manage Planned Cost and Benefit

1. Open the investment
2. Open **Properties** menu > **Financial Summary**
3. Enter or view the planned cost and benefit data:
- **Planned Cost** ג€” Sum of Planned Operating Cost + Planned Capital Cost (not directly editable since Release 13.2)
- **Planned Cost Start / Finish** ג€” Populated from investment schedule dates
- **Planned Benefit** ג€” Total planned benefit from the investment
- **Planned Benefit Start / Finish** ג€” Start and end dates for planned benefit
4. Review financial metrics (empty if no planned cost/benefit defined):
- Planned NPV, Planned ROI, Planned IRR, Planned MIRR, Planned Payback Period, Planned Breakeven
5. Save changes

## Manage Budgeted Cost and Benefits

1. Open the investment
2. Open **Properties** menu > **Financial Summary**
3. Enter or view budgeted cost and benefit data:
- **Budget Cost** ג€” Auto-populated if "Budget equals Planned Values" is selected, or if an approved POR exists
- **Budget Cost Start / Finish** ג€” Populated from investment schedule dates
- **Budget Benefit** ג€” Auto-populated from Planned Benefit or last approved budgeted benefit
- **Budget Benefit Start / Finish** ג€” Populated from planned benefit dates
4. Review budget metrics:
- Budget NPV, Budget ROI, Budget IRR, Budget MIRR, Budget Breakeven, Budget Payback Period
5. Save changes

## Related Notes

- [[Detailed Financial Plans]] ג€” For detailed cost/benefit/budget plans
- [[Overview]] ג€” Financial management setup overview
- [[Financial Processing Setup]] ג€” Enable investments for financial processing
- [[_MOC Classic PPM]]

