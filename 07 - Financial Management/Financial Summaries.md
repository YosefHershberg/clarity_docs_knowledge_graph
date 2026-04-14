---
title: Creating Financial Summaries
tags:
  - howto
aliases:
  - Financial Summary
canonical: true
audience: finance, pm
domain: financials
---
# Creating Financial Summaries

> [!note]
> Verify that your organization wants to enable multi-currency before selecting this option; once you enable it and click Save, you cannot revert to single-currency.

If the Use Multi-Currency checkbox is disabled and checked, it means you upgraded from a multi-currency system or another administrator already selected this option.
Once enabled, the option cannot be undone. - Apply Currency Precision for rate/cost: Indicates if currency precision is applied to rate or cost.
This setting determines whether calculations are made using the extended currency precision, or is rounded to the currency precision, and then calculated. - Entity Based Security:
Specifies the type of security that is applied to financial processing. Values : - None. No security is used. - Strict.
Access is allowed only to the specified financial entity objects and transactions. - Parent.
Access is allowed only to the objects and transactions of the specified financial entity, its parent, and children. - Hide Financial OBS:
Indicates if financial OBS types must be hidden in some OBS browse lists. Select this check box to hide the Department and Location OBS types from OBS browse lists. 3.
Save the changes.
Create Financial Summaries
Compare the NPV, ROI, payback period, rate of return, breakeven, and other metrics for your investments. As an executive or financial manager, view high-level budget information for investments in a financial summary.
Investment analysis and assessment require that you record planned and budget cost and benefit information using financial metrics.

The values that you enter are applied over one time period from the investment start date to the finish date.
The values are applied only to this investment, not to any of its child or parent investments.
If you create a detailed cost, budget, or benefit plan after defining a financial summary, the detailed financial plan data overrides the summary data.

The fields on the summary page become read-only. If you delete the detailed cost plans with the plan of record, you can edit the cost planning values on the financial summary page.
Any budget plans associated with the deleted cost plans are not deleted and remain intact for your reference.
- Determine the Financial Metrics for Planning - Set Financial Planning Options - Set Capital Cost and Reinvestment Rate for the System - Set Capital Cost and Reinvestment Rate for the Investment - Manage Planned Cost and Benefit - Manage Budgeted Cost and Benefits for Investments
Determine the Financial Metrics for Planning
As a project manager, start with a cost plan and create cost projections for the proposed projects. You can also create a benefit plan to define benefit projections by project.

The benefit plans are associated with the corresponding cost plans. To capture projected costs and benefits for a given time frame, you can view a financial summary.
As an executive or financial manager, you base your funding decisions on standard metrics. You can create a portfolio of specific projects including their cost and benefit plans. Use the portfolio data to accomplish the following goals:
- Compare the IRR, MIRR, and Payback Period for each project. - Rank prospective projects and consider alternatives using IRR. - Determine the profitability of a project using MIRR. - Measure NPV, ROI, and breakeven.

Use the following financial metrics to evaluate your spending on individual investments. Decide which investments you want to pursue at the portfolio level.
> [!note]
> The following rules are applied for calculating IRR, MIRR, Payback Period, and other metrics for investments that include child investments.

The financial metrics are calculated based on the aggregated amount of the projects and subprojects.
In the investment hierarchy, the financial metrics show for the investment itself and rolled up next to the parent investment.
- Cash flow starts from the first fiscal time period where the cost plan starts relative to all investments.
- The initial investment is the sum of the initial cost of all investments, including child investments.
- When a main investment or any child investment has no planned costs, zero is used in the metric
calculations. - The reinvestment rate and the total cost of capital for the top-level main investment are considered in the
MIRR calculation. ATTENTION All the Financial metrics for NPV, IRR, and other metrics are computed by using daily amounts rolled into calendar monthly periods.

Typical financial tools available externally online compute these metrics using yearly amounts. Example:
If you have a cost plan configured for yearly periods and enter a value of 12,000, the monthly amounts are not $1,000 across the year.
The monthly amounts are determined by dividing the total yearly amount by the number of days in the year (including leap year) and computing the monthly amounts per the number of days in the month.
NPV This metric displays the net present value (NPV) of the investment.

NPV considers the initial cost of the investment, interest rates, future income, and the time value of money.
In Classic PPM, NPV is calculated as the difference between the sum of the present value revenue and the sum of the present value planned cost.
Calculation:
- t represents the time period of the cash flow in months - N represents the total time of the project - r is the discount rate of return that can be earned on investments with

similar risks - C0 is the initial investment cost (expressed as a negative number) - Ct is the net cash flow or the amount of cash for time t (in months)
> [!tip]
> Depreciation (expressed in terms of the decline in value of an asset or in terms of any beneficial tax treatment) is not included in NPV calculations.

Because it is not an actual cash expense that you pay, depreciation does not directly impact cash flow; however, it does reduce net income.
The tax benefit of depreciation can positively impact your after-tax cash flows.

You organization might include depreciation in your cash flows when calculating NPV.

For example, you could subtract the cost of the depreciation from your cash flow for each period.
You might also add the tax benefit of depreciation to your present value calculations when planning. Classic PPM does not include a default system field to factor in depreciation.
To include depreciation, add a line item to your cost plan or benefit plan.
ROI This metric displays the return on investment (ROI). ROI is the ratio of money that is gained or lost on the investment relative to the amount invested. In Classic PPM, ROI is the ratio between the NPV and the sum of the present value planned cost ROI calculated as follows:
ROI=(total present value planned benefit - total present value planned cost)/total present value planned cost Another way to express this is given in the following equation:

ROI = (Total Planned Benefit - Total Planned Cost)/(Total Planned Cost) - Total Planned Benefit is the planned benefit amount that is defined for the investment.
This value appears in the
budget properties or in the detailed benefit plan. - Total Planned Cost is the planned cost amount that is defined for the investment. This value appears in the budget
properties or in the detailed cost plan.
IRR This metric displays the Internal Rate of Return (IRR). IRR represents the discount rate that is used to achieve zero NPV for an investment.

Use IRR as an alternate method for evaluating an investment without estimating the discount rate. IRR assumes the cash flows from an investment are reinvested at the IRR.
Calculation:
- C0 is the initial investment cost (expressed as a negative number).You can define this value using the Initial Investment field on the budget properties page of an investment.
- n represents the number of periods available in the cash flow. - Cash flow starts with the first fiscal time period of the cost plan or the associated benefit plan, whichever is earlier, and
ends with the last fiscal time period of the cost plan or the associated benefit plan, whichever ends later.

The cash flow for each fiscal time period equals the projected benefit less the available cost for that period.
If benefit or cost is unavailable for a given fiscal time period, zero dollars is used.
- If cost and benefit are defined in budget properties of the investment, then the cost and benefit amounts are considered evenly distributed between Planned Cost and Planned Benefit start and end dates.
- If cost and benefit are defined from the detailed financial plan, IRR is based on the detailed cost plan and its associated benefit plan.
- If there is insufficient cash flow to make the investment profitable, IRR is a negative value. - If no positive or negative cash flow exists, the IRR value is left blank.

MIRR This metric displays the Modified Internal Rate of Return (MIRR). MIRR represents a rate that is used to measure the attractiveness of this investment.

Use MIRR as part of a capital budgeting process to rank various alternative investment choices. MIRR assumes that all cash flows are reinvested at the cost of capital. Calculation:
- r is the annual interest rate for reinvesting the positive cash flow. You can define this value using the Reinvestment Rate field on the budget properties page of an investment. If this value is not defined for an investment, r is zero.
- f is the annual finance rate on the capital that is borrowed for investments. You can define this value using the Total Cost of Capital field on the budget properties page of an investment.
- n represents the last period in the lifetime of the investment (n=i+j). - If cost and benefit are defined in budget properties of the investment, MIRR is a lump sum that is distributed evenly
over the specified time. - If cost and benefit are populated from the detailed financial plan, MIRR is based on the detailed cost plan and its
associated benefit plan. - If there is insufficient cash flow to make the investment profitable, MIRR is a negative value. - If no positive or negative cash flow exists, the MIRR value is left blank.
Breakeven This metric displays the date when the expected cash flow equals the cash outlay for an investment. The breakeven date matches with the payback period.
Payback Period Displays the number of periods (in months) needed for the sum of the expected cash flows to equal the initial cash outlay for an investment.

The payback period matches with the breakeven date and considers the initial investment value. This value is part of the cost included in the first period of a given time period.
Payback Period is derived as one of the following: - If cost and benefit is defined in the budget properties of the investment, payback is a lump sum that is distributed
evenly over the specified time. - If cost and benefit is populated from the detailed financial plan, payback is based on the detailed cost plan and its
associated benefit plan.
1. Open Home, and from Portfolio Management, click an investment (for example, Projects).
2. Open the investment.
3. Open the Properties menu and click Budget. The budget properties appear.
4. Complete the following fields in the Financial Planning section:

- Currency: Defines the currency for the investment. Default: System currency - Budget equals Planned Values: Specifies if the budget values in the budget properties of an investment match
the planned values. If a detailed budget plan exists for the investment, all the field values in the Budget section are display-only.

The fields reflect the values in the detailed budget plan. When the check box is cleared, you can edit the budget fields. Default: Selected - Calculate Financial Metrics:
Specifies if financial metrics for the investment are calculated automatically. If unselected, you can define the financial metrics manually. Default: Selected 5.
Save your changes.
Set Capital Cost and Reinvestment Rate for the System
Set the annual total cost of capital and the annual reinvestment rate for investments at the system level to calculate the MIRR for planned costs and budget for investments.

If you change the total cost of capital and reinvestment rate values on the Financial management defaults page, the corresponding values change accordingly on the budget properties page of the investment.
The corresponding values change only if you select the option to calculate financial metrics automatically and use the system rates for total cost of capital and reinvestment.
The metrics for all investments that use system options are recalculated. This happens in the background and might take some time if the system needs to process many investments.
You can override the system-level values by redefining these values at the investment level on the budget properties page.
Follow these steps:
1. Click Administration, Finance, Setup. The financial organizational structure page appears.
2. Click the Defaults link. The financial management defaults page appears.
3. Complete the following fields in the General section:
- Annual Total Cost of Capital %: Defines the annual finance rate on the capital that is borrowed to fund an investment. This value is reflected as the system rate for total cost of capital in the Financial Planning section of the investment budget properties page.
- Annual Reinvestment Rate %: Defines the annual interest rate that is used to reinvest positive cash flow for an investment. This value is reflected as the system rate for reinvestment in the Financial Planning section of the investment budget properties page.
4. Save the changes.
Set Capital Cost and Reinvestment Rate for the Investment
You can set the total cost of capital and the reinvestment rate for an investment on the budget properties page. These investment-level settings override any system-level settings.
The investment-level rates are used for calculating financial metrics for the individual investment.
Follow these steps:
1. Open the investment.
2. Open the Properties menu and click Budget. The budget properties appear.
3. Complete the following fields in the Financial Metrics Options section:
- Use System Rate for Total Cost of Capital: Specifies if you want to use the system-level total cost of capital for this investment.

Clear this check box and enter a value in the corresponding Investment Rate field that is located below the System Rate field.
The investment rate defines the annual finance rate on the capital that is borrowed to fund this investment. Default: Selected
- Use System Reinvestment Rate: Specifies if you want to use the system-level reinvestment rate for this investment. Clear this check box and enter a value in the corresponding Investment Rate field that is located below

the System Rate field. The investment rate defines the annual interest rate that is used to reinvest positive cash flow for this investment. Default: Selected - Initial Investment:

Defines the initial cost of the investment that is used in all financial metric calculations.
You can configure this field to display aggregated values for investments and child investments. If you do not specify a value, initial investment is treated as zero.
A negative initial investment value is allowed. 4. Save the changes.
Manage Planned Cost and Benefit
Create the planned cost and planned benefit data for your investment in the financial summary.

If a detailed cost plan and benefit plan exists for the investment, you can view the pre-populated planned cost and planned benefit data in the summary.
If you delete the detailed cost plan, you can start using the financial summary.
Follow these steps:
1. Open the investment.
2. Open the Properties menu and click Financial Summary under Properties.
3. Enter the planned cost and benefit data, or view the following data if a detailed financial plan exists:
- Planned Cost: Defines the total planned cost for the investment. The value is distributed between the Planned Cost Start and the Planned Cost Finish dates.
> [!note]
4. Review the following cost and benefit metrics to evaluate the value that the investment provides to the company. If planned cost and benefit values are not defined, these metrics are empty: - Planned NPV - Planned ROI - Planned IRR - Planned MIRR - Planned Payback Period - Planned Breakeven
5. Save any changes.
Manage Budgeted Cost and Benefits for Investments
Create the budgeted cost and benefit data for your investment in the financial summary. If an approved budget and benefit plan exists for the investment, view the pre-populated budget cost and benefit data in the summary.
Follow these steps:
1. Open the investment.
2. Open the Properties menu and click Financial Summary under Properties.
3. Enter the following budgeted cost and benefit data, or view the following data if a detailed plan exists:

## Related
- [[_MOC Financials]]

%%Source: p2123-2128%%

