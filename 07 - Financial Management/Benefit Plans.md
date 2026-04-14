---
title: Working with Benefit Plans
tags:
  - howto
aliases:
  - Benefits
  - ROI Tracking
canonical: true
audience: finance, pm
domain: financials
---
# Working with Benefit Plans and Actual Transactions

The Forecast and Forecast Variance are:

| 2021-09 | Transaction Class External Labor

## Resource Class Offshore

Cost 10,000

Actual Cost 9,000

Forecast 9,000

Forecast Variance 1,000

| 2021-10 | Transaction Class External Labor

## Resource Class Offshore

Cost 10,000

Actual Cost 9,000

Forecast 11,258

Forecast Variance 2,258

| 2021-11 | Transaction Class External Labor

## Resource Class Offshore

Cost 10,000

Actual Cost 9,000

Forecast 10,000

## Forecast Variance 0

In October, the actuals are posted on 01 October 2021. So, Clarity takes the actual cost of October completely based on the forecast cutover date, along with the planned cost for the remaining seven days.
Here is the calculation:
Forecast= Actual Cost + Planned Cost = 9,000 + ((10,000/31)*7)=9,000 + 2,258=11,258
Follow these steps:
1. Open an investment and click FINANCIALS.
2. In Cost Plan, click the (+) plus icon.
3. Complete the required fields.
4. Open the Column panel and check Forecast Cutover.
5. Add a date in the Forecast Cutover column.
6. Open the newly created cost plan.
7. Edit the cost plan details.
8. Navigate to View Options, PER-PERIOD METRICS.
9. Select Actual Cost, Cost, Forecast, and Forecast Variance.
10. Close View Options.
11. Click the next/previous arrow in PER-PERIOD METRICS to view the next/previous period details.
000. After three months, the amount spent is $27,
000. The Forecast Cutover is set for October 25, 2021.

## Other Forecast Definitions
- Total Forecast is defined as the sum of all forecast amounts between the enclosing fiscal periods (based on Sum of Periods and Grand Totals setting in View Options).
- Total Forecast Variance is defined as the difference between Total Planned/Budgeted Cost and Total Forecast. - Total Forecast Variance = Total Planned/Budgeted Cost - Total Forecast
> [!note]
> The forecast attributes are not available in Classic PPM.

## Working with Benefit Plans and Actual Transactions

The Financials module in Clarity supports Benefit Plans. Creating a benefit plan and associating it with a cost plan allows you to estimate the benefit from custom investments or Net Present Value (NPV) on a custom investment.
- The cost plans follow the approval process to become a formal budget; however, there is no need to approve benefit plans.
- A benefit plan can be associated with multiple cost plans; however, a cost plan can have only one associated benefit plan.
- To manage benefit plans, create a benefit plan to associate with cost plans or update existing plans
> [!note]
> You cannot delete a benefit plan that is associated with any cost or budget plan.
- Remember that the saved views are shared across the financial modules of different investment types. For example, if you save a view in the Benefits Plan grid for a custom investment, the same view is available in the Benefits Plan grid for ideas and projects.
You can work with the benefit plans as follows:
- Create a Benefit Plan - Edit Benefit Plans Details - Associate Benefit Plans with Cost Plans - Associate Benefit Plans with Submitted Budgets
This section contains the following topics:
- Create a Benefit Plan: Intro - Edit Benefit Plans Details - Setup View Options - Associate Benefit Plans with Cost Plans - Associate Benefit Plans with Submitted Budgets - Actual Transactions - View Multicurrency Transactions
Create a Benefit Plan: Intro
1. Open a custom investment and click FINANCIALS module.
2. Click Benefit Plans, and click the (+) plus icon.
3. Complete the following fields:
a. Name: Enter a name for the benefit plan. b. Period Type: Defines the time period unit that appears on the benefit plan, such as Weekly, Monthly, Quarterly, or
Annual. c. Start Period: Defines the first time period to include in the plan. d. Finish Period: Defines the last time period to include in the plan. e. ID: Enter an ID for the benefit plan. 4. Save the changes.
Edit Benefit Plans Details Use these steps to add line item details to a new benefit plan. The details that you add appear under the Detail field on the benefit plans details list page. You can only define details for the time periods that are applicable to the benefit plan.Follow these steps:
1. With the benefit plan open, click the (+) plus icon.
2. For each benefit detail, complete the following fields in the Benefit Details section:
a. Benefit Class: Select an option in the Benefits Class field.

b. Benefit Subclass: Select an option in the Benefit Subclass field. c. Description: Enter a brief explanation of the plan. 3.

Review the following fields for each benefit detail line item: a. Benefit: Defines the planned benefit amount for the time period. b. Actual Benefit:
Defines the actual benefit amount for the time period. c. Variance: Displays the difference between the actual and the planned benefit for the time period.

## Setup View Options
You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).
Follow these steps:
1. Log into Clarity
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click View Options.
4. In Periods, select a unit of time (Weeks, Months, Quarters, Years).
5. In Type, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
- Periods: Set the Start Period and End Period. The application adjusts the time periods based on the value that you selected for periods.
- Duration: Set the Start Period and indicate the number of periods (Duration), with an optional offset from the start.

6. Define if you want to see Sum of Periods or Grand Totals in the Totals column.

- Sum of Period displays the Total (e.g., Actual Cost) for the number of periods in the layout - Example - If an Investment has a duration of 12 months;
the page is configured to display 6 months. If Sum of Periods is selected then the Totals column will sum up the (e.g., Actual Cost) 6 months displayed in the layout.
- Grand Total displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout - Example - If an Investment has a duration of 12 months;
the layout is configured to display 6 months. If Grand Totals is selected then the Totals column will sum up the (e.g., Actual Cost) for the 12 months of the investment
7. Per-Period Metrics grant you the ability to select specific data from the below options for display within the grid: - Total:

Exclusively shows the 'Totals' field without the per-period metric fields in the grid. - Periods:
Solely displays the per-period metric fields without the 'Totals' field in the grid. - Total and Periods:
Simultaneously presents the per-period metric fields and the 'Totals' field in the grid. IMPORTANT You have to select the per-period metric attributes from the Column Panel.
8. Select Total and Period Columns Separately: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.
REMEMBER When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.
> [!important]
> When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
- It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
- As previously shown, the Columns panel will only display one set of per-period metrics. 9. Show Total Row: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just
below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.
The following table shows the different types of aggregation supported for various types of attributes:

Number, Money, Calculated, Integer

## Percent

## Date

## Boolean

## TS

## Sum

## Average

## Count

## Min/Max

## None

10. Select the Show Indicator on Non-Default Values toggle to display visual indicators when the default values of the following attributes are updated.

- Default allocation percentage

- Grand Totals or Totals column

- Allocation Start and Finish date columns

- Individual allocation per-period metrics

This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.

11. Select how you want the money and number attributes to be displayed by configuring the Money Decimal Display and Number Decimal Display options.
12. Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
13. Click X to close the View Options panel. The page applies your settings and shows the financial details that are spread
across the time periods. 14. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget
to quickly cycle through the data for various periods. Your Start Period and End Period settings will update the widget and as you cycle through periods in your widget, the Start Period and End Period will also be updated.
> [!note]
> Some of the key points to remember are: - You can secure and relabel the TSV attributes using Field Level Security. While TSV attributes can be
relabeled, they cannot be secured. - You can use the TSV totals in widgets. - You can include the custom TSV data in the page. - You can edit the custom TSV data in the page.

- You cannot add TSV totals to the Details Panel. - Forecast data will only be displayed in TSV if a detailed cost plan has been created for the investment.
- Financial data is read-only in the page. - If you are using the board layout, you can configure columns, swimlanes, sort, and color.
- If you are using the timeline layout, you have the Color By option.
Associate Benefit Plans with Cost Plans Use these steps to associate a benefit plan with a cost plan.
1. From the Cost Plan list, select a cost plan.
2. In the Benefit Plan field, select a benefit plan.
Associate Benefit Plans with Submitted Budgets The benefits plan that is associated with a cost plan carries over to the submitted budget. This association can only be changed while the budget is in a submitted state. Once approved, the benefit plan association cannot be changed.
1. From the budget plan list, select the budget plan.
2. In the Benefit Plan field, select a benefit plan.
Actual Transactions In the Financials modules, along with the Cost Plans, Budget Plans, and Benefit Plans, you can now see the Actual Transactions grid.

This grid is non-editable and displays the actual costs posted through transactions for an investment by transaction date, quantity, cost, and currency information.
With the Actual Transactions grid, a financial manager can: - Better understand an investment's financial visibility. - View the list of transactions that are posted and an overall summary of all the transactions associated with the
investment in a single place. - Compare transaction currency amounts to converted currency amounts by task and resource.

Clarity displays actual transactions by using the generic grid and inherits all the generic grid capabilities. You can see the Details panel when you select a row in the grid. However, you cannot perform these generic grid capabilities.
- Edit a row in the grid - Add or delete a row - Right-click context menu
Access Rights
Ensure that you have the following access rights to access the Actual Transactions grid:
- <Investment> - Cost Plan - View - <Investment> - Cost Plan - Edit - <Investment> - Budget Plan - View - <Investment>- Budget Plan - Edit
Source for Actual Transactions
The data in the Actual Transactions grid populates after the following jobs are executed in Classic PPM:

## Method for Posting Actuals Timesheet Entry
Transaction Entry
XOG

## Jobs
- Post Timesheet - Post Transactions to Financial - Post to WIP
- Post to WIP - Update Financial Plan Actuals and
Forecast
- Post Transactions to Financial - Post to WIP - Update Financial Plan Actuals and
Forecast

## Managing Records By Using the Grid Layout
The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Pin, resize, reorder, and reset columns to personalize each grid. - Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to
create rules determining the colors and format of various cells or rows in the grid. - Use the Column Panel to show or hide columns on the grid. - Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups. - Export the common grid data to a CSV file. The Classic PPM user interface supports the export of up to 25000 rows to
CSV file. In this release Clarity supports the export of up to 250,000 rows to CSV files. - Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions. - Use the Details Panel, which is available as a two-column layout, to edit fields.

- Review and summarize the health of your business by using a series of configurable visual widgets.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.
> [!note]
> To learn more about the grid layout and associated capabilities, see:

- Clarity Grids - Conditional Formatting - Widgets - Details Panel - Saved Views - Filters

## View Multicurrency Transactions
You can now view multicurrency transactions in the grid. This enhancement allows you to record, view, and analyze financial transactions across multiple currencies with accurate conversion and reporting.
This enhancement includes:
- Home or Investment Currency: The currency associated with the investment. - Billing Currency: The currency used for invoicing and billing. - Reporting Currency:

The currency used for corporate reporting or consolidation. - Transaction Currency: The currency selected when entering a transaction manually.
Scenario: Hedmoral Bank
Hedmoral Bank is a global financial institution with operations in the UK, US, Australia, and Japan. The bank manages investments across multiple regions, with the Home (Investment) Currency set to GBP.
A US-based project team enters a transaction for software licensing costs:
- Transaction Currency (entered): USD - Billing Currency (for client invoicing): AUD - Reporting Currency (for consolidation): JPY - Home (Investment) Currency: GBP
Process:
1. The team enters the transaction in USD in the Unposted Transactions object.
2. When the transaction is posted, Clarity automatically converts the USD amount using the effective exchange rates
configured for the transaction date: - GBP (Home/Investment Currency) - AUD (Billing Currency) - JPY (Reporting Currency) 3. Each currency field in the Posted Transactions grid displays the converted value.
Benefits for Hedmoral Bank:
- Project managers can see actual costs in the local currency of the project team (USD) and compare them with billing amounts (AUD).
- Finance analysts can consolidate costs and revenue in JPY for corporate reporting. - Executives can track investment performance in GBP, the bank's base currency, ensuring consistent financial visibility
across regions. - Reduces manual currency conversions and improves reporting accuracy for global projects.
This capability allows Hedmoral Bank to manage multicurrency investments efficiently, maintain consistent reporting, and improve financial decision-making across international operations.
Follow these steps:
1. Log in to Clarity.
2. Navigate to the relevant page.

## Related
- [[Cost Plans]]
- [[_MOC Financials]]

%%Source: p448-454%%

