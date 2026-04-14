# Financial Management

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[07 - Financial Management/_MOC Financials|Financial Management]]
- Canonical notes:
- [[07 - Financial Management/Financial Entity Setup]]
- [[07 - Financial Management/Financial Summaries]]
- [[07 - Financial Management/Financial Classes]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Idea-to-Project Staffing Example (#idea-to-project-staffing-example)
- H2: Overview (#overview)
- H2: Set Up Financial Management (#set-up-financial-management)
- H2: Financial Management Jobs (#financial-management-jobs)
- H2: Automate Financial Management Tasks (#automate-financial-management-tasks)
- H2: Standardize Financial Management Functionality and Business Logic (#standardize-financial-management-functionality-and-business-logic)
- H2: Create Financial Summaries (#create-financial-summaries)
- H3: Determine the Financial Metrics for Planning (#determine-the-financial-metrics-for-planning)
- H3: Set Financial Planning Options (#set-financial-planning-options)
- H3: Set Capital Cost and Reinvestment Rate for the System (#set-capital-cost-and-reinvestment-rate-for-the-system)
- H3: Set Capital Cost and Reinvestment Rate for the Investment (#set-capital-cost-and-reinvestment-rate-for-the-investment)
- H3: Manage Planned Cost and Benefit (#manage-planned-cost-and-benefit)
- H3: Manage Budgeted Cost and Benefits for Investments (#manage-budgeted-cost-and-benefits-for-investments)
- H2: Create Detailed Financial Plans (#create-detailed-financial-plans)
- H3: Prerequisites for Creating Detailed Financial Plans (#prerequisites-for-creating-detailed-financial-plans)
- H3: Select a Financial Plan View (#select-a-financial-plan-view)
- H3: Create Cost Plans (#create-cost-plans)
- H3: Create Benefit Plans (#create-benefit-plans)
- H3: Create Budget Plans (#create-budget-plans)
- H3: Copy Financial Plans (#copy-financial-plans)
- H2: Display Capital and Operating Costs (#display-capital-and-operating-costs)
- H3: Financial Summary Page (#financial-summary-page)
- H3: Detailed Financial Plan (#detailed-financial-plan)
- H3: Review the Prerequisites (#review-the-prerequisites)
- H3: Manually Update the Financial Summary Page to Display Capital and Operating Costs (#manually-update-the-financial-summary-page-to-display-capital-and-operating-costs)
- H3: Select the Method for Collecting Cost Information and Create the Plan (#select-the-method-for-collecting-cost-information-and-create-the-plan)
- H3: Set the Cost Type for Specific Investment Tasks (#set-the-cost-type-for-specific-investment-tasks)
- H3: Set the Capitalization Percentage for Investment Team Allocations (#set-the-capitalization-percentage-for-investment-team-allocations)
- H3: Verify Your Capital and Operating Costs (#verify-your-capital-and-operating-costs)
- H2: Enable Cost Plus Codes (#enable-cost-plus-codes)
- H3: Create Cost Plus Codes (#create-cost-plus-codes)
- H3: Create Cost Plus Rules and Add to Cost Plus Codes (#create-cost-plus-rules-and-add-to-cost-plus-codes)
- H2: Enable Investments, Resources, and Roles for Financial Processing (#enable-investments-resources-and-roles-for-financial-processing)
- H3: Enable Investments for Financials (#enable-investments-for-financials)
- H3: Enable Resources and Roles for Financials (#enable-resources-and-roles-for-financials)
- H2: Set Up a Financial Cost and Rate Matrix (#set-up-a-financial-cost-and-rate-matrix)
- H3: Example: Set Up a Cost/Rate Matrix Based on Resource Class (#example-set-up-a-costrate-matrix-based-on-resource-class)
- H3: Verify the Prerequisites (#verify-the-prerequisites)
- H3: Create a Cost and Rate Matrix (#create-a-cost-and-rate-matrix)
- H3: Assign Columns to the Matrix (#assign-columns-to-the-matrix)
- H3: Add Rows to the Matrix (#add-rows-to-the-matrix)
- H3: Edit the Current Rate (#edit-the-current-rate)
- H3: Copy the Current Rate (#copy-the-current-rate)
- H3: Increase the Rate for Cost/Rate Matrices (#increase-the-rate-for-costrate-matrices)
- H3: Unlock Matrices (#unlock-matrices)
- H2: Set Up a Financial Entity (#set-up-a-financial-entity)
- H3: Example: Set Up an Entity for Financial Planning (#example-set-up-an-entity-for-financial-planning)
- H3: Complete the Prerequisites (#complete-the-prerequisites)
- H3: Create Financial Classes (#create-financial-classes)
- H3: Create Fiscal Time Periods (#create-fiscal-time-periods)
- H3: Activate Fiscal Time Periods (#activate-fiscal-time-periods)
- H3: Create Plan Defaults (#create-plan-defaults)
- H2: Set Up Currencies and Foreign Exchange Rates (#set-up-currencies-and-foreign-exchange-rates)
- H3: Activate Currencies (#activate-currencies)
- H3: Set Up Conversion Rates (#set-up-conversion-rates)
- H3: Disable Currency Conversion (#disable-currency-conversion)
- H2: Set Up Financial Classes (#set-up-financial-classes)
- H3: Resource Classes (#resource-classes)
- H3: Company Classes (#company-classes)
- H3: Investment Classes (#investment-classes)

## Idea-to-Project Staffing Example

You staff a team for an idea with three (3) resources:
- Resource R1
- Resource R2
- Resource R3

The duration of the idea (converted to a project) is five (5) working days. ETC is 40 hours each.

You have a project template with two (2) resources:
- Resource R1
- Resource R2

The duration in the template is ten (10) working days. Each resource has an effort task with 80 hours of ETC. Let us examine the target project where the duration is 20 working days.

When you convert the idea to a project, the following activity occurs in the software. When the **Allow Effort Task Creation** setting is disabled, the software copies the effort task from the template to the new target project. If the setting is enabled, effort is copied and extended.
- **Assignment R1**: 80 hours (the old assignment that is copied from template)
- **Assignment R2**: 80 hours (the old assignment that is copied from template)
- **Assignment R3**: 160 hours (the new assignment to effort task extended from 5 days to 20 days, that is, multiplied by a factor of 4)

## Overview

Enterprise program management offices and financial managers can use the financial management capabilities to manage long-term forecasts, short-term cost plans and budgets, and interface with legacy ERP systems and financial tools. Financial management capabilities are provided throughout the lifecycle of a project, application, and service.

For example, project requests can be submitted with a high-level budget, or a more detailed cost benefit analysis. As work is executed, actual costs are captured and forecasts are revisited to track performance against the budget. Capitalized expenditures are separated from expenses for appropriate financial reporting and compliance. Chargebacks can map and allocate, and equitable distribution of project costs across business units and departments.

> [!NOTE]
> The documentation may not match what you see in the product user interface. This difference can occur because all access to features, menus, pages, buttons, and objects is determined by your access rights. Your organization can also configure the application pages, objects, lookups, partitions, processes, and user interface. Contact your administrator if you are not able to complete any of the steps in the documentation.
- Set Up Financial Management
- Financial Management Jobs
- Automate Financial Management Tasks
- Standardize Financial Management Functionality and Business Logic

## Set Up Financial Management

Complete these steps to set up financial management:

> [!NOTE]
> Before you set up financial management, see Access Rights Reference and verify that each user has the appropriate access rights.

1. Set Up Currencies and Foreign Exchange Rates.
2. Set Up a Financial Entity and Fiscal Time Periods.
3. Set Up Financial Locations.
4. Set Up Financial Departments.
5. Set Up Financial Classes.
6. Set Up a Financial Cost and Rate Matrix.
7. Enable Cost Plus Codes.
8. Set Up Financial Defaults, Charge Codes, Vendors, and WIP Settings.

## Financial Management Jobs

The following jobs are typically used for financial management:
- Import Financial Actuals
- Post Timesheets
- Rate Matrix Extraction
- Generate Invoices
- Post Incident Financials
- Post Transactions to Financial
- Post to WIP (optional job instead of using the Post to WIP page)

The following jobs are used with chargebacks to generate invoices:
- Update Aggregated Data
- Purge Temporary Aggregated Data

> [!TIP]
> To learn more about these and other Clarity jobs, see Jobs Reference in the Reference section of the English-language edition of the documentation.

## Automate Financial Management Tasks

You can create processes to automate certain financial management tasks, such as:
- The approval or rejection of budget plans that are associated with your cost plans.
- The notification of assigned action items to project managers and team members.

Follow these best practices:
- Define your start condition clearly for auto-starting transaction line-related processes. The start condition can accidentally launch several unwanted processes.
- Defining a process to set the partition of a cost plan is not necessary. Cost plans inherit the partition of the investment to which they belong.

## Standardize Financial Management Functionality and Business Logic

You can standardize the financial management functionality and business logic by setting up basic rules for financial transaction processing. After you define these rules, you can change them at any time.

Follow these steps:

1. Click **Administration**, **Finance**, **Processing**.
2. Complete the following fields:
- **Allow Chargeable Override**: Indicates if resources are allowed to change the chargeable status of a cost code as transactions are entered.
- **Use Multi-Currency**: When you enable multi-currency, the product tracks multiple currency codes and foreign exchange rates for transactions, chargebacks, and reporting.

> [!NOTE]
> Verify that your organization wants to enable multi-currency before selecting this option; once you enable it and click Save, you cannot revert to single-currency. If the Use Multi-Currency checkbox is disabled and checked, it means you upgraded from a multi-currency system or another administrator already selected this option. Once enabled, the option cannot be undone.
- **Apply Currency Precision for rate/cost**: Indicates if currency precision is applied to rate or cost. This setting determines whether calculations are made using the extended currency precision, or is rounded to the currency precision, and then calculated.
- **Entity Based Security**: Specifies the type of security that is applied to financial processing. Values:
- **None**. No security is used.
- **Strict**. Access is allowed only to the specified financial entity objects and transactions.
- **Parent**. Access is allowed only to the objects and transactions of the specified financial entity, its parent, and children.
- **Hide Financial OBS**: Indicates if financial OBS types must be hidden in some OBS browse lists. Select this check box to hide the Department and Location OBS types from OBS browse lists.
3. Save the changes.

## Create Financial Summaries

Compare the NPV, ROI, payback period, rate of return, breakeven, and other metrics for your investments. As an executive or financial manager, view high-level budget information for investments in a financial summary.

Investment analysis and assessment require that you record planned and budget cost and benefit information using financial metrics. The values that you enter are applied over one time period from the investment start date to the finish date. The values are applied only to this investment, not to any of its child or parent investments.

If you create a detailed cost, budget, or benefit plan after defining a financial summary, the detailed financial plan data overrides the summary data. The fields on the summary page become read-only. If you delete the detailed cost plans with the plan of record, you can edit the cost planning values on the financial summary page. Any budget plans associated with the deleted cost plans are not deleted and remain intact for your reference.
- Determine the Financial Metrics for Planning
- Set Financial Planning Options
- Set Capital Cost and Reinvestment Rate for the System
- Set Capital Cost and Reinvestment Rate for the Investment
- Manage Planned Cost and Benefit
- Manage Budgeted Cost and Benefits for Investments

### Determine the Financial Metrics for Planning

As a project manager, start with a cost plan and create cost projections for the proposed projects. You can also create a benefit plan to define benefit projections by project. The benefit plans are associated with the corresponding cost plans. To capture projected costs and benefits for a given time frame, you can view a financial summary.

As an executive or financial manager, you base your funding decisions on standard metrics. You can create a portfolio of specific projects including their cost and benefit plans. Use the portfolio data to accomplish the following goals:
- Compare the IRR, MIRR, and Payback Period for each project.
- Rank prospective projects and consider alternatives using IRR.
- Determine the profitability of a project using MIRR.
- Measure NPV, ROI, and breakeven.

Use the following financial metrics to evaluate your spending on individual investments. Decide which investments you want to pursue at the portfolio level.

> [!NOTE]
> The following rules are applied for calculating IRR, MIRR, Payback Period, and other metrics for investments that include child investments. The financial metrics are calculated based on the aggregated amount of the projects and subprojects. In the investment hierarchy, the financial metrics show for the investment itself and rolled up next to the parent investment.
> - Cash flow starts from the first fiscal time period where the cost plan starts relative to all investments.
> - The initial investment is the sum of the initial cost of all investments, including child investments.
> - When a main investment or any child investment has no planned costs, zero is used in the metric calculations.
> - The reinvestment rate and the total cost of capital for the top-level main investment are considered in the MIRR calculation.

> [!WARNING]
> All the Financial metrics for NPV, IRR, and other metrics are computed by using daily amounts rolled into calendar monthly periods. Typical financial tools available externally online compute these metrics using yearly amounts. Example: If you have a cost plan configured for yearly periods and enter a value of 12,000, the monthly amounts are not $1,000 across the year. The monthly amounts are determined by dividing the total yearly amount by the number of days in the year (including leap year) and computing the monthly amounts per the number of days in the month.

#### NPV

This metric displays the net present value (NPV) of the investment. NPV considers the initial cost of the investment, interest rates, future income, and the time value of money. In Classic PPM, NPV is calculated as the difference between the sum of the present value revenue and the sum of the present value planned cost.

Calculation:
- **t** represents the time period of the cash flow in months
- **N** represents the total time of the project
- **r** is the discount rate of return that can be earned on investments with similar risks
- **C0** is the initial investment cost (expressed as a negative number)
- **Ct** is the net cash flow or the amount of cash for time t (in months)

> [!TIP]
> Depreciation (expressed in terms of the decline in value of an asset or in terms of any beneficial tax treatment) is not included in NPV calculations. Because it is not an actual cash expense that you pay, depreciation does not directly impact cash flow; however, it does reduce net income. The tax benefit of depreciation can positively impact your after-tax cash flows.

Your organization might include depreciation in your cash flows when calculating NPV. For example, you could subtract the cost of the depreciation from your cash flow for each period. You might also add the tax benefit of depreciation to your present value calculations when planning. Classic PPM does not include a default system field to factor in depreciation. To include depreciation, add a line item to your cost plan or benefit plan.

#### ROI

This metric displays the return on investment (ROI). ROI is the ratio of money that is gained or lost on the investment relative to the amount invested. In Classic PPM, ROI is the ratio between the NPV and the sum of the present value planned cost. ROI is calculated as follows:

`ROI = (Total Planned Benefit - Total Planned Cost) / (Total Planned Cost)`
- **Total Planned Benefit** is the planned benefit amount that is defined for the investment. This value appears in the budget properties or in the detailed benefit plan.
- **Total Planned Cost** is the planned cost amount that is defined for the investment. This value appears in the budget properties or in the detailed cost plan.

#### IRR

This metric displays the Internal Rate of Return (IRR). IRR represents the discount rate that is used to achieve zero NPV for an investment. Use IRR as an alternate method for evaluating an investment without estimating the discount rate. IRR assumes the cash flows from an investment are reinvested at the IRR.

Calculation:
- **C0** is the initial investment cost (expressed as a negative number). You can define this value using the **Initial Investment** field on the budget properties page of an investment.
- **n** represents the number of periods available in the cash flow.
- Cash flow starts with the first fiscal time period of the cost plan or the associated benefit plan, whichever is earlier, and ends with the last fiscal time period of the cost plan or the associated benefit plan, whichever ends later. The cash flow for each fiscal time period equals the projected benefit less the available cost for that period. If benefit or cost is unavailable for a given fiscal time period, zero dollars is used.
- If cost and benefit are defined in budget properties of the investment, then the cost and benefit amounts are considered evenly distributed between Planned Cost and Planned Benefit start and end dates.
- If cost and benefit are defined from the detailed financial plan, IRR is based on the detailed cost plan and its associated benefit plan.
- If there is insufficient cash flow to make the investment profitable, IRR is a negative value.
- If no positive or negative cash flow exists, the IRR value is left blank.

#### MIRR

This metric displays the Modified Internal Rate of Return (MIRR). MIRR represents a rate that is used to measure the attractiveness of this investment. Use MIRR as part of a capital budgeting process to rank various alternative investment choices. MIRR assumes that all cash flows are reinvested at the cost of capital.

Calculation:
- **r** is the annual interest rate for reinvesting the positive cash flow. You can define this value using the **Reinvestment Rate** field on the budget properties page of an investment. If this value is not defined for an investment, r is zero.
- **f** is the annual finance rate on the capital that is borrowed for investments. You can define this value using the **Total Cost of Capital** field on the budget properties page of an investment.
- **n** represents the last period in the lifetime of the investment (n=i+j).
- If cost and benefit are defined in budget properties of the investment, MIRR is a lump sum that is distributed evenly over the specified time.
- If cost and benefit are populated from the detailed financial plan, MIRR is based on the detailed cost plan and its associated benefit plan.
- If there is insufficient cash flow to make the investment profitable, MIRR is a negative value.
- If no positive or negative cash flow exists, the MIRR value is left blank.

#### Breakeven

This metric displays the date when the expected cash flow equals the cash outlay for an investment. The breakeven date matches with the payback period.

#### Payback Period

Displays the number of periods (in months) needed for the sum of the expected cash flows to equal the initial cash outlay for an investment. The payback period matches with the breakeven date and considers the initial investment value. This value is part of the cost included in the first period of a given time period.

Payback Period is derived as one of the following:
- If cost and benefit is defined in the budget properties of the investment, payback is a lump sum that is distributed evenly over the specified time.
- If cost and benefit is populated from the detailed financial plan, payback is based on the detailed cost plan and its associated benefit plan.

### Set Financial Planning Options

You can set the options to define how the financial summaries interact with detailed financial plans of your investments.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects).
2. Open the investment.
3. Open the **Properties** menu and click **Budget**. The budget properties appear.
4. Complete the following fields in the **Financial Planning** section:
- **Currency**: Defines the currency for the investment. Default: System currency
- **Budget equals Planned Values**: Specifies if the budget values in the budget properties of an investment match the planned values. If a detailed budget plan exists for the investment, all the field values in the Budget section are display-only. The fields reflect the values in the detailed budget plan. When the check box is cleared, you can edit the budget fields. Default: Selected
- **Calculate Financial Metrics**: Specifies if financial metrics for the investment are calculated automatically. If unselected, you can define the financial metrics manually. Default: Selected
5. Save your changes.

### Set Capital Cost and Reinvestment Rate for the System

Set the annual total cost of capital and the annual reinvestment rate for investments at the system level to calculate the MIRR for planned costs and budget for investments. If you change the total cost of capital and reinvestment rate values on the Financial management defaults page, the corresponding values change accordingly on the budget properties page of the investment. The corresponding values change only if you select the option to calculate financial metrics automatically and use the system rates for total cost of capital and reinvestment. The metrics for all investments that use system options are recalculated. This happens in the background and might take some time if the system needs to process many investments.

You can override the system-level values by redefining these values at the investment level on the budget properties page.

Follow these steps:

1. Click **Administration**, **Finance**, **Setup**. The financial organizational structure page appears.
2. Click the **Defaults** link. The financial management defaults page appears.
3. Complete the following fields in the **General** section:
- **Annual Total Cost of Capital %**: Defines the annual finance rate on the capital that is borrowed to fund an investment. This value is reflected as the system rate for total cost of capital in the Financial Planning section of the investment budget properties page.
- **Annual Reinvestment Rate %**: Defines the annual interest rate that is used to reinvest positive cash flow for an investment. This value is reflected as the system rate for reinvestment in the Financial Planning section of the investment budget properties page.
4. Save the changes.

### Set Capital Cost and Reinvestment Rate for the Investment

You can set the total cost of capital and the reinvestment rate for an investment on the budget properties page. These investment-level settings override any system-level settings.

The investment-level rates are used for calculating financial metrics for the individual investment.

Follow these steps:

1. Open the investment.
2. Open the **Properties** menu and click **Budget**. The budget properties appear.
3. Complete the following fields in the **Financial Metrics Options** section:
- **Use System Rate for Total Cost of Capital**: Specifies if you want to use the system-level total cost of capital for this investment. Clear this check box and enter a value in the corresponding **Investment Rate** field that is located below the System Rate field. The investment rate defines the annual finance rate on the capital that is borrowed to fund this investment. Default: Selected
- **Use System Reinvestment Rate**: Specifies if you want to use the system-level reinvestment rate for this investment. Clear this check box and enter a value in the corresponding **Investment Rate** field that is located below the System Rate field. The investment rate defines the annual interest rate that is used to reinvest positive cash flow for this investment. Default: Selected
- **Initial Investment**: Defines the initial cost of the investment that is used in all financial metric calculations. You can configure this field to display aggregated values for investments and child investments. If you do not specify a value, initial investment is treated as zero. A negative initial investment value is allowed.
4. Save the changes.

### Manage Planned Cost and Benefit

Create the planned cost and planned benefit data for your investment in the financial summary. If a detailed cost plan and benefit plan exists for the investment, you can view the pre-populated planned cost and planned benefit data in the summary. If you delete the detailed cost plan, you can start using the financial summary.

Follow these steps:

1. Open the investment.
2. Open the **Properties** menu and click **Financial Summary** under Properties.
3. Enter the planned cost and benefit data, or view the following data if a detailed financial plan exists:
- **Planned Cost**: Defines the total planned cost for the investment. The value is distributed between the Planned Cost Start and the Planned Cost Finish dates.

> [!NOTE]
> Before Release 13.2, you could directly update the Planned Cost field. However, after Release 13.2, the Planned Cost field has not been editable. Instead, it is the sum of two fields that are editable: the Planned Operating Cost and Planned Capital Cost fields.
- **Planned Cost Start**: Defines the date when the planned cost for this investment starts. This field is populated from the start date that is defined on the investment schedule.
- **Planned Cost Finish**: Defines the date when planned cost for this investment ends. This field is populated from the finish date that is defined on the investment schedule.
- **Planned Benefit**: Defines the total planned benefit that you can receive from this investment.
- **Planned Benefit Start**: Defines the date when planned benefit starts for this investment.
- **Planned Benefit Finish**: Defines the date when planned benefit ends for this investment.
4. Review the following cost and benefit metrics to evaluate the value that the investment provides to the company. If planned cost and benefit values are not defined, these metrics are empty:
- Planned NPV
- Planned ROI
- Planned IRR
- Planned MIRR
- Planned Payback Period
- Planned Breakeven
5. Save any changes.

### Manage Budgeted Cost and Benefits for Investments

Create the budgeted cost and benefit data for your investment in the financial summary. If an approved budget and benefit plan exists for the investment, view the pre-populated budget cost and benefit data in the summary.

Follow these steps:

1. Open the investment.
2. Open the **Properties** menu and click **Financial Summary** under Properties.
3. Enter the following budgeted cost and benefit data, or view the following data if a detailed plan exists:
- **Budget Cost**: Defines the approved cost for this investment. This field is automatically populated and display-only in the following cases:
- If the **Budget equals Planned Values** check box is selected, this field displays the value in the Planned Cost field.
- If an approved POR exists in the financial plan, this field displays the last budget revision in the plan.
- **Budget Cost Start**: Defines the date when the budgeted cost for this investment starts. If the Budget equals Planned Values check box is selected, this field is read-only. This field is populated from the start date that is defined in the investment schedule.
- **Budget Cost Finish**: Defines the date when budgeted cost for this investment ends. If the Budget equals Planned Values check box is selected, this field is read-only. This field is populated from the finish date that is defined on the investment schedule.
- **Budget Benefit**: Defines the total budgeted benefit that you can receive from this investment. This field is populated and display-only in the following cases:
- If the **Budget equals Planned Values** check box is selected, this field displays the value from the Planned Benefit field.
- If an approved budget exists in the detailed financial plan, this field displays the last approved budgeted benefit.
- **Budget Benefit Start**: Displays the date when budgeted benefit starts for this investment. If the Budget equals Planned Values check box is selected, this field is read-only. This field is populated from the Planned Benefit Start date field.
- **Budget Benefit Finish**: Displays the date when budgeted benefit ends for this investment. If the Budget equals Planned Values check box is selected, this field is read-only. This field is populated from the Planned Benefit Finish date field.
4. Review the following budget metrics to evaluate the value that an investment provides to the company. If budget and benefit values are not defined, these metrics are empty:
- Budget NPV
- Budget ROI
- Budget IRR
- Budget MIRR
- Budget Breakeven
- Budget Payback Period
5. Save the changes.

## Create Detailed Financial Plans

Detailed financial planning allows you to estimate funding for your investments using cost plans. You can get approval for the funding using budget plans. As part of the approval process, you can associate your cost plans with benefit plans to estimate the benefit from your investments.
- Prerequisites for Creating Detailed Financial Plans
- Select a Financial Plan View
- Create Cost Plans
- Create Benefit Plans
- Create Budget Plans
- Copy Financial Plans

### Prerequisites for Creating Detailed Financial Plans

Before you create detailed financial plans, verify that the following items exist:
- Set up a financial entity and define fiscal time periods for the entity.
- Set up a financially enabled investment.
- See Access Rights Reference and verify that each user has the appropriate access rights to work with financial planning.

### Select a Financial Plan View

The following views provide cost plan or budget plan details:
- **Investment Currency View**: This default view shows only the data for the selected cost plan or budget. No child data appears. The view shows cost and revenue details in the investment home currency with grouping attributes presented in separate columns. If you have the appropriate access rights, you can edit the view.
- **Billing Currency View**: This view is the same as Investment Currency View except it shows the cost and revenue details in the billing currency that is based on a predefined exchange rate. The Billing Currency View applies to a multicurrency system where the billing currency is different from the investment home currency. The exchange rate that is used in the billing calculations depends on the following factors:
- The investment currency or the entity home currency and the billing currency set in the investment financial properties.
- The exchange rate type that is driven by the transaction type (for example, labor transaction, material transaction, and so on) set in the investment financial properties. The average exchange rate is always used.

  The following billing calculations are triggered when either the cost or the revenue changes in the financial plan for a given row:
- Billing Cost calculated as Cost * Exchange rate
- Billing Revenue calculated as Revenue * Exchange rate
- Total Cost is the sum of Billing Cost
- Total Revenue is the sum of Billing Revenue

  A change in the exchange rates or billing currency does not trigger recalculation of billing amounts.

Follow these steps:

1. Open an investment.
2. Open the **Financial Plans** menu and click **Cost Plans**, **Benefit Plans**, or **Budget Plans**. The plan list page appears.
3. Click the plan name to open the plan details.
4. Select the view that you want from the **Show** drop-down.

### Create Cost Plans

Cost plans are an alternative to financial summaries if you want to create a detailed plan that spans more than one fiscal time period. You can track planned costs, actual costs, and variances over the lifetime of an investment. In addition, you can break down data by different grouping attributes or criteria. You can define a cost plan manually or can populate it automatically and submit it as an investment budget for approval.

Use cost planning to facilitate your organizational financial planning process and to enforce standards. A cost plan consists of the following items:
- Grouping attributes
- Line item details

> [!NOTE]
> In case you delete all your cost plans including the plan of record, you can use the financial summary page to define cost planning data for your investment. Any associated budget plans are not deleted as you may want to use them for future reference. See Create Financial Summaries for more information.

You can configure a cost plan to display the following revenue fields. These fields are not available by default. Posted transactions must exist for these fields to display values.
- **Actual Unit**: Displays the aggregated actual unit for a given fiscal period.
- **Actual Cost**: Displays the aggregated actual cost for a given fiscal period that is calculated as Actual Units * Cost.
- **Actual Revenue**: Displays the actual billing rate for a given fiscal period that is calculated as Actual Units * Rate.
- **Cost Variance**: Displays the delta between Cost and Actual Cost.
- **Revenue Variance**: Displays the delta between Revenue and Actual Revenue.
- **Units Variance**: Displays the delta between Units and Actual Units.

#### Example: Manage a Cost Plan

Cost planning starts at the investment level and goes through multiple iterations of cost projections and reviews to produce the final approved budget. Investment budgets roll up to the department level and then roll up to higher levels as desired. To streamline this planning process, financial controllers can standardize the ways to capture and break down costs for the entire organization. These standards ensure that all the costs are easily recognized and roll up to the desired levels. Financial controllers can implement standardized budget approval processes to review and approve individual and departmental budgets.

The following is one example on how to manage cost plans based on standards that are defined by the financial controller. When a finance manager approves a cost plan, it becomes the budget plan for an investment.

1. Financial controller sets global default standards at the entity level to suggest the recommended cost planning structure.
2. Project manager does the following:
- Creates cost plans for an investment as estimates for a budget.
- Designates a specific cost plan as the POR.
- Optionally, associate the POR with a benefit plan.
- Submits the POR for budget approval.
- Optionally, associate a benefit plan with the submitted budget.
3. Finance manager or other designated authority approves or rejects the submitted cost plan as the budget plan.

#### Plan of Record

The plan of record (POR) is the cost plan that you intend to use as the budget plan for an investment. If there is an existing approved budget plan, you can use the POR to create a new budget plan. The first cost plan that you create for an investment becomes the POR by default. You can reassign the POR to any plan and submit it for budget approval. You can keep the remaining cost plans for future use or reference. In case you delete all your cost plans including the plan of record, you can use the financial summary page to define cost planning data for your investment. Deleting the POR or other cost plans does not delete any associated budget plans.

When you add an investment to a portfolio, the cost plan POR is automatically associated with all portfolio scenarios that are related to that investment. This association with the POR verifies that the investment costs are included in the portfolio scenarios. Later, if you select a different POR for the investment, the new POR is used in the portfolio provided no approved budget exists for the investment. Once a budget is approved, switching the POR has no effect on the value that is displayed on the financial summary pages of the investment. The financial summary value is the same value that is shown in the portfolio.

#### Grouping Cost Plan Data

You can group cost plan data using different attributes or criteria to view a breakdown of the data by time period. The structure of the cost plan line item details is based on these grouping attributes and the selected time periods.

The financial controller can set default grouping attributes globally when defining an entity. The project manager can change the default attributes when defining the initial cost plan scope at the investment level. Only the grouping attributes that you define in the initial scope are available for selection when adding line item details. You must select at least one value for each available grouping attribute or select the option to automatically populate the line item details. Individual line item detail rows are created for each unique combination of selected values for all available grouping attributes.

> [!NOTE]
> When defining a cost plan, if you do not select a particular grouping attribute, it is hidden from the cost planning pages but is still available from the configuration pages. You do not need to configure the page to manually hide the attribute.

#### Cost Plan Line Item Details

This example shows you how line item detail rows are created in a cost plan based on the values that are selected from the available grouping attributes.

1. Jim, the project manager for the ARP project at Forward, Inc. creates a cost plan and selects the following grouping attributes:
- Location
- Department
2. In the cost plan details, Jim selects the following values for each of the grouping attributes:
- **Location**: Boston, MA and San Francisco, CA
- **Department**: Software Development and Corporate IT

The system creates line item detail rows that are based on each unique combination of selected location and department value. Jim can now define the unit and cost values for each time period and view a breakdown of the cost plan for each unique combination of department and location.

#### Manually Define Cost Plans

You can create a cost plan manually or automatically populate a cost plan. The following steps describe how to manually define a cost plan.

> [!NOTE]
> Before you can create cost plans, verify that the following items exist:
> - Set up active fiscal time periods.
> - Set up a financially enabled investment.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects). The list page appears.
2. Open the investment. The properties page appears.
3. Open the **Financial Plans** menu and click **Cost Plans**. The cost plans list appears.
4. Click **New Manual Plan**. The create page appears.
5. Complete the following fields:
- **Plan Name**: Defines the name for the cost plan.
- **Plan ID**: Defines the unique ID for the cost plan.
- **Description**: Describes the cost plan.
- **Period Type**: Defines the type of time period for the plan. Default: The period type as defined in the entity plan defaults. If no period type is specified in the plan defaults, the period type from the entity properties is populated. Values: 13 Periods, Weekly, Semi Monthly, Monthly, Quarterly, and Annually
- **Plan Start Period**: Defines the fiscal start period of the cost plan. Default: The start period is defined in the entity plan defaults. If no start period is specified in the plan defaults, the start period is based on the entity period type and start date of the project. If no active period is found for the project start and end date, no default start period displays.
- **Plan End Period**: Defines the fiscal end period of the cost plan. Default: The end period is defined in the entity plan defaults. If no end period is specified in the plan defaults, the end period is based on the entity period type and the end date of the project. If no active period is found for the project end date, no default end period displays.
- **Benefit Plan**: Defines the benefit plan that is associated with the cost plan.
- **Currency**: Displays the entity home currency.
- **Plan of Record**: Indicates if this cost plan is the plan of record.
- **Grouping Attributes**: Defines the categories to use to define the cost plan line item detail structure. Default: The grouping attributes are defined in the entity plan defaults.
6. Save the changes, and click **Detail**. The cost plan details page appears.
7. Click **Add**. The page to select grouping attribute values appears.
8. Select one or more values for each grouping attribute and save. Select at least one grouping attribute before saving a cost plan. Grouping attributes not selected in the cost plan properties are not displayed in the line item details. A line item detail row is created for each unique combination of selected grouping attribute values.
9. Review or complete the following fields as desired. You cannot edit the total fields:
- **Total Cost**: Displays the total cost based on the costs specified for each time period.
- **Total Units**: Displays the total units based on the units specified for each time period.
- **Total Revenue**: Displays the total cost based on the unit and cost specified for each time period.
- **% Total**: Displays the percentage for that line item detail based on the total cost.
- **Unit, Cost and Revenue Details**: Defines the work effort units, cost, and revenue for each cost plan time period. The work effort units are based on the role or resource availability for the associated investment.
10. Save the changes.

#### Automatically Populate Cost Plans

When creating a cost plan, you can automatically populate the plan using values from the task assignments or investment team (that is, resources or roles). Automatically populating a cost plan saves time. You can also repopulate an existing cost plan.

Values are auto-populated in a cost plan, based on the following predefined financial attributes:
- The start and end periods are based on the fiscal period type of the associated entity and the start and end dates of the associated investment.

> [!NOTE]
> The auto-populate uses the investment start and finish dates to determine active fiscal time periods defined on the associated entity. All fiscal time periods are populated ignoring the freeze date defined in the entity plan defaults.
- The grouping attributes are based on the default grouping attributes defined on the associated entity. If default grouping attributes are not defined on the entity, you can define these attributes in the cost plan.
- The values for the grouping attributes are based on the investment team or task assignments.
- The costs and revenues for the resources are based on the costs and rates defined in the financial cost/rate matrix that is associated with the investment. Verify that a cost/rate matrix exists that covers the entire duration of the investment that the cost plan is associated to. If cost/rate is not defined in the matrix for the investment period, an error message appears.
- The matrix is associated with the investment under the appropriate section. For example, for labor, associate the matrix under the Labor Transaction Rates section.
- The work units are based on the sum of the work units of all roles or resources. The roles or resources come from either the investment team or task assignment with the same grouping attribute values as in the line item detail row.
- When populating from the investment team, every team member is a candidate row. However, if two team members have the same grouping attribute values, one line item detail row is created to represent both team members. For example, if grouping is by Transaction Class and Department, and two team members have the same transaction class and department, the product creates one cost plan line item detail row. This row represents the sum value from both records because each detail row must contain a unique combination of grouping attribute values.
- The product overwrites cost, revenue, and unit amounts on manually-created rows only if the row has grouping attributes that exist on the investment.

When you auto-populate a cost plan, both labor and non-labor resources use the department and location OBS units associated with the source location value in the entity. For example, if the source location value for a resource is "Investment" in the entity, the departments and locations associated with the investment are used for the planned amounts. For actual transaction amounts, both labor and non-labor resources use the department and location OBS units associated with the WIP settings. For example, in a cost plan that is grouped by department or location, you can end up with two rows when the WIP settings use the employee source and the entity settings use the investment source.

#### Populate Cost Plans from Investment Team

When you auto-populate a cost plan from the investment team, the system uses the values from the investment team members to populate the cost plan fields. If a value is not defined for a team member, either the corresponding value on the investment is used or the field is left blank.

| Value | Team Member | Primary Source | Secondary Source |
|-------|-------------|----------------|------------------|
| Charge Code | Resource or Role | Resource or Role | Investment |
| Cost Type | Resource | N/A (Cost type is a required field. Based on the Capitalization% specified at the team level for the resource or role, capital or operating values are passed to the associated cost/rate matrix. The corresponding cost breakdown by capital and operating values is displayed on the cost plan details, provided Cost Type is an assigned column on the cost/rate matrix and Cost Type is a grouping attribute on the cost plan detail.) | Investment |
| Input Type Code | Resource | Resource | None. The field is blank if the value is undefined on the resource, or if the team member is a role. |
| Department (Labor Resource) | Labor Resource | N/A | The field is blank if the team member is a role. |
| Department (Non-labor Resource) | Non-labor Resource | Entity source location | Investment |
| Department (Role) | Role | Entity source location | Investment |
| Location (Labor Resource) | Labor Resource | Staff OBS Unit | Investment |
| Location (Non-labor Resource) | Non-labor Resource | Entity source location | Investment |
| Location (Role) | Role | Entity source location | Investment |
| Transaction Class (Resource) | Resource | Resource | None. The field is blank if the value is undefined on the resource. |
| Transaction Class (Role) | Role | Role* | None. The field is blank if the value is undefined on the role. |
| Resource Class (Resource) | Resource | Team Member | None |
| Resource Class (Role) | Role | NA | The field is blank if the team member is a role. |
| Role (Resource) | Resource | Resource | None. The field is blank if the value is undefined on the resource. |
| Role (Role) | Role | Role* | None. The field is blank if the value is undefined on the role. |

*The role that is obtained for the Role attribute. For roles: if there is no team role, the resource primary role is used (the field is blank if the resource has no primary role). For role team members: if there is no team role, the team member (role) is used.

#### Example: Populating Line Item Details from Investment Team

This example shows you how a cost plan line item detail row is automatically populated with cost and revenue values from the investment team.

Jim, the project manager at Forward, Inc. creates a cost plan for the ARP project using the following information to define the scope of the plan:
- Monthly fiscal time periods from January 1 to March 31
- Grouping attributes: Resource, Role, Transaction Class

Jim selects the option to populate the cost plan line item details from the investment team. Based on the defined cost plan scope and the project team member values, the system internally identifies the following candidate line item detail row:

| Resource | Role | Transaction Class | Location | Department |
|----------|------|-------------------|----------|------------|
| Sam Ricci | Developer-1 | Billable | Los Angeles | Development |

The system passes the financial attributes values from the candidate row to the cost/rate matrix:

| Role | Location | Cost |
|------|----------|------|
| Developer-1 | San Francisco | 85 |
| Developer-1 | Los Angeles | 83 |
| Developer-2 | San Francisco | 75 |
| Developer-2 | Los Angeles | 72 |

The system identifies "83" as the applicable cost after matching the role, location, transaction class, and other financial attribute values to the rows in the matrix.

Based on the cost and the candidate row identified earlier, the system creates the following line item detail row in the cost plan:

| Resource | Role | Transaction Class | Jan 1 - Jan 31 | Feb 1 - Feb 29 | Mar 1 - Mar 31 |
|----------|------|-------------------|-----------------|-----------------|-----------------|
| Sam Ricci | Developer-1 | Billable | 83 | 83 | 83 |

#### Populate Cost Plans from Task Assignments

When you automatically populate a cost plan from the task assignment, the product uses the values from the task assignments to populate the cost plan fields. If a value is not defined for an assignment, either the corresponding value on the investment is used or the field is left blank.

| Value | Task Assignment | Primary Source | Secondary Source |
|-------|-----------------|----------------|------------------|
| Charge Code | Resource or Role | Resource or Role | Investment. The field is blank if the value is undefined on the investment. |
| Cost Type | Task | Task | Investment |
| Input Type Code (Resource) | Resource | Resource | None. The field is blank if the value is inactive or undefined on the resource, or if the resource is a role. |
| Input Type Code (Role) | Role | Not Applicable | None. The field is blank if the task assignee is a role. |
| Department (Resource) | Resource | Not Applicable | Investment |
| Department (Non-labor Resource) | Non-labor Resource | Entity source location | Investment |
| Department (Role) | Role | Entity source location | Investment |
| Location (Resource) | Resource | Entity source location | Investment |
| Location (Non-labor Resource) | Non-labor Resource | Entity source location | Investment |
| Location (Role) | Role | Staff OBS Unit | Investment |
| Transaction Class (Resource) | Resource | Resource | If the task assignee is a role, then the field is blank. |
| Transaction Class (Role) | Role | Role* | None. The field is blank if the value is undefined on the resource/role. |
| Resource Class (Resource) | Resource | Task Assignee | None. The field is blank if the value is undefined on the resource/role. |
| Role (Resource) | Resource | Resource | Team role. If the team role is undefined, the resource primary role is used. The field is blank if the resource primary role is undefined. |
| Role (Role) | Role | Role* | Task role. If the team role is undefined, the team member (role) is used. |

*The role that is obtained for the Role attribute.

#### Prepare to Automatically Populate Cost Plans

Complete these steps to set up cost plans to populate automatically:

1. Define plan defaults in the entity for fiscal time period type and grouping attributes.
2. Define costs and rates in the cost/rate matrix.
3. Financially enable the investment, associate a cost/rate matrix, and assign active roles or resources to project tasks.
4. Financially enable the resource or role. This action is recommended for more accurate cost projections.

#### Populate Cost Plans Automatically

Create a new cost plan by auto-populating the plan using values from the investment team or task assignments.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click an investment. The list page appears.
2. Open the investment. The properties page appears.
3. Open the **Financial Plans** menu and click **Cost Plans**. The cost plans list appears.
4. Open the **Actions** menu, and from **General**, click one of the following:
- **New from Investment Team**
- **New from Task Assignments**

   The properties page appears showing the default values from the associated entity and investment. You can accept these default values or change them.
5. Enter a name, ID, and description for the cost plan.
6. Save the changes. The cost plan details page appears. The line item detail rows are also populated from the investment team or task assignments.
7. (Optional) Open the **Actions** menu, and from **General**, click one of the following to populate the cost plan details:
- **Populate from Investment Team**
- **Populate from Task Assignments**
8. Save the changes.

#### Edit Cost Plans

You can edit the unit and cost details in a cost plan by clicking in the fields on the user interface and changing the values. You can only edit the cost plan for periods outside the freeze date defined in the entity plan defaults.

Follow these steps:

1. With the cost plan open, go to the correct time period for your plan using the left and right arrows in the **Unit, Cost and Revenue Details** section.
2. Edit the following fields:
- **Units**: Displays the number of units for the time period.
- **Cost**: Displays the cost for the time period.
- **Revenue**: Displays the revenue for the time period.
3. Save the changes.

#### Create the Plan of Record

Make a cost plan the plan of record (POR) to prepare to submit the cost plan for budget approval.

Follow these steps:

1. Open the investment.
2. Open the **Financial Plans** menu and click **Cost Plans**. The cost plans list appears.
3. Click the **Set Plan of Record** icon next to the plan you want as the plan of record. A check mark appears in the Plan of Record column for the plan selected. You can now submit the cost plan to be approved as the budget.

### Create Benefit Plans

Creating a benefit plan and associating it with a cost plan allows you to calculate ROI or NPV on an investment. Although cost plans can go through an approval process to become a formal budget, you do not need to approve benefit plans. While a benefit plan can be associated with an unlimited number of cost plans, a cost plan can have only one associated benefit plan.

To manage your benefit plans, create new plans to associate with cost plans or update existing plans.

> [!NOTE]
> You cannot delete a benefit plan that is associated with a cost plan.

Follow these steps:

1. Open the investment.
2. Open the **Financial Plans** menu and click **Benefit Plans**.
3. Click **New** and complete the requested information. The following fields require explanation:
- **Period Type**: Defines the time period unit that appears on the benefit plan.
- **Plan Start Period**: Defines the first time period to include in the plan.
- **Plan End Period**: Defines the last time period to include in the plan.
4. Save the changes.

#### Add Line Item Detail to Benefit Plans

Use these steps to add line item details to a new benefit plan. The details that you add appear under the Detail field on the benefit plans details list page. You can only define details for the time periods that are applicable to the benefit plan.

Follow these steps:

1. With the benefit plan open, click **Add**.
2. Enter the benefit plan details in the **Detail** field. Add as many benefit details as needed.
3. Save the changes. The benefit plan details appear listing the details that you entered.
4. For each benefit detail, complete and review the following fields in the **Benefit Details** section:
- **Benefit**: Defines the planned benefit amount for the time period.
- **Actual Benefit**: Defines the actual benefit amount for the time period.
- **Variance**: Displays the difference between the actual and the planned benefit for the time period.
5. Save the changes.
6. Review the following fields for each benefit detail line item:
- **% Benefit**: Displays the percentage of the benefit detail line item as it contributes to the total benefit plan.
- **Total Benefit**: Displays the total benefit for the benefit detail line item.
- **Actual Benefit**: Defines the actual benefit amount for the time period.
- **Variance**: Displays the difference between the actual and the planned benefit for the time period.

#### Associate Benefit Plans with Cost Plans

Follow these steps:

1. With the cost plan open, click **Properties**.
2. In the **Benefit Plan** field, select a benefit plan.
3. Click **Save**.

#### Associate Benefit Plans with Submitted Budgets

The benefit plan that is associated to a cost plan carries over to the submitted budget. This association can only be changed while the budget is in a submitted state. Once approved, the benefit plan association cannot be changed.

Follow these steps:

1. With the budget plan open, click **Properties**.
2. In the **Benefit Plan** field, select a benefit plan.
3. Click **Save**.

### Create Budget Plans

When a cost plan is approved, it becomes the budget plan for an investment. You can submit a portion of a cost plan for approval by varying the start and end dates for the submission. Only the portion between the new start and end dates is submitted for approval. When a cost plan is approved, it becomes a budget plan with a new version number. If there is a previous budget, it is saved separately and can be viewed but not edited.

When submitting a cost plan as a budget plan, remember these rules:
- If a budget plan exists, the submitted cost plan must include the same grouping attributes to merge the submitted cost plan data with the existing budget plan data. If the grouping attributes are not the same, replace the existing budget plan or cancel the submission.
- You can only submit or approve one budget plan at a time.
- When a submitted budget is approved, the budget plan becomes the POR.
- You can edit a submitted budget, but you cannot edit an approved budget.
- If an approved budget exists, the submitted cost plan data can be either merged with or can replace the approved budget.

#### Submit Cost Plans as Budget Plans

Submit a cost plan as a budget plan to create a new approved budget, or to update the budget after updating the cost plan. A cost plan must be designated as the POR before you can submit it for approval. If an approved budget plan exists, and you create or update a cost plan as the new POR, you can submit the POR to merge with the approved budget plan or to replace the budget plan.

Follow these steps:

1. Open the investment.
2. Open the **Financial Plans** menu and click **Cost Plans**. The cost plans list appears.
3. Copy the value in the **ID** field. You need this value in one of the following steps.
4. Open the **Actions** menu, and from **General**, click **Submit Plan of Record for Approval**.
5. Complete the requested information. The following fields require explanation:
- **Plan ID**: Defines unique ID for the budget plan. Paste the ID value in this field.
- **Plan Start Period**: Displays the start period of the budget plan. To submit a portion of the cost plan rather than the whole plan for budget, select a different start period.
- **Plan End Period**: Displays the end period of the budget plan. To submit a portion of the cost plan rather than the whole plan for budget, select a different end period.
- **Grouping Attributes**: Displays the grouping attributes of the cost plan.

> [!NOTE]
> If you want to merge the cost plan with an existing approved budget, the grouping attributes of the cost plan need to match. If they are different, you can either replace the entire budget plan, or cancel the approval request.
- **Submit Options**: Specifies whether to merge the cost plan that you are submitting with the approved budget, or to replace it.

> [!NOTE]
> This option is hidden if you submit the first cost plan for approval. The option is set to Replace and is read-only if the grouping attributes or time periods are different from the attributes in the approved budget.

6. Click **Submit for Approval**. The cost plan designated as the POR is submitted as a budget plan.

#### Approve or Reject Submitted Budget Plans

Use these steps to approve or reject a submitted cost plan as a budget. Before approving or rejecting a budget plan, you can edit the fields in the Unit, Cost, and Revenue Details section as needed. You can also add line item details to the plan.

> [!NOTE]
> You cannot edit an approved budget. Submit a new budget for approval to replace the old budget.

Follow these steps:

1. Open the investment.
2. Open the **Financial Plans** menu, and click **Budget Plans**. The budget plans list appears.
3. Open the submitted budget plan. The budget details appear.
4. Edit the fields in the **Unit, Cost, and Revenue Details** section, and save the changes.
5. Click **Approve** or **Reject**.

#### Create a Budget Revision

An approved cost plan becomes the budget plan for an investment. Because elements of an investment change, you can revise various parts of the budget, or can replace the budget entirely. You can make two types of revisions to an approved budget plan:

**Merged Budget Plan Revision**
- Submit a cost plan with new line items and merge the changes with the existing budget plan.
- Submit a portion of a cost plan by varying the start and end dates for the submission, or update the field values in specific time periods. You can submit only the changed time periods and can merge them with the budget.

**Replacement Budget Plan Revision**
- Submit a cost plan with deleted line items and replace the budget to remove those line items from the budget plan.
- Create a cost plan, using different grouping attributes or time period types, and replace the budget.

Both revision types provide approval history. However, the replace feature enables you to delete line items that are no longer needed, and to revise grouping attributes and fiscal time periods. When you submit a cost plan that revises an existing budget, you specify whether to merge or replace using the **Submit Options** pull-down list. This field appears only when there is at least one approved budget. If the new cost plan has a different structure than the existing budget, Replace is the only option. When your cost plan is approved, it becomes the revised budget plan with a new version number. You can view the previous version of the budget, which is saved separately. You cannot edit either previous budget plans or the current approved budget plans.

#### Example: Revise the Budget Plan

The following example illustrates the options for updating the budget plan. Forward Inc. has a new project that is planned for later this year. Alice manages the project and has already created a cost plan (ProjectA_estimatedCP-00) with the required roles and estimated costs. She needs the following roles:
- One software architect
- Three Java software engineers
- Two test engineers

Alice has not yet staffed the project. In her submitted cost plan, she added roles for each of the positions and populated the cost plan for the six months of the project. When creating the cost plan, Alice used the following properties:
- Grouping attributes: Role
- Time period type: Quarterly
- Start and End Dates: July 2 - December 31

She submitted the estimates for approval as the current budget plan. Alice's product manager approved the estimated budget. The manager knows that the budget will change before the project begins.

Complete these steps:

1. Review the prerequisites.
2. Revise the budget plan:
- Merge changes into the budget plan:
- Add line items to the budget.
- Change time period values in the budget.
- Replace the budget plan:
- Delete line items from the budget.
- Replace the budget with a new cost plan.
3. Verify the revised budget plan.

**Review the Prerequisites**

Access Rights: Have the following access rights:
- Financial - Cost Plan - Edit
- Financial - Financial Plan - Submit for Approval
- Project - Budget Plan - View
- Project - Budget Plan - Edit

Completed Tasks: Complete the following tasks before you begin:
- Create a cost plan for the investment.
- Specify the cost plan as the Plan of Record (POR).
- Submit the POR for approval and have it approved as the budget plan for the investment.

Other Information: After you submit a cost plan for approval, it becomes the submitted budget plan. You can edit the submitted budget plan; you cannot edit the budget plan after it is approved.

**Add Line Items to the Budget**

Add line items to the cost plan and merge the new lines into the budget. For example, you can add a role to a cost plan, and can submit the cost plan for approval as a merged change.

**Example: Revise the Budget with a New Role**

Alice determines that the new project needs a technical writer to document the online help. She adds the role of Senior Technical Writer to the cost plan, and submits the revised plan, ProjectA_estimatedCP-00, as a merged revision to the budget.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click the appropriate investment type; for example, Projects.
2. Open the investment and click **Financial Plans**.
3. Open the **Financial Plans** menu and click **Cost Plans**.
4. Open the cost plan.
5. Click **Add** to add the new line item. The Cost Plan Detail: Properties page appears and displays fields for each grouping attribute that appear in the cost plan. For example, if Role is a grouping attribute, then the Role field displays.
6. Select the values for the new line item (for example, roles) that you want to add.
7. Click **Save and Return**.
8. Enter the time period detail for the line item.
9. Save your changes and click **Return**.
10. Click **Actions** and select **Set as Plan of Record**.

> [!NOTE]
> If the cost plan is already the plan of record, skip this step.

11. Click **Yes** to confirm.
12. Click **Actions** and select **Submit Plan of Record for Approval**.

> [!NOTE]
> If you receive the message "Error: A submitted budget already exists" another cost plan for the investment exists as a submitted budget plan. The submitted budget plan must be approved or rejected before you can submit another plan for approval.

13. Enter the requested values.
14. Select **Merge** in the Submit Option pull-down list.
15. Click **Submit for Approval**.
16. Open the **Financial Plans** menu and click **Budget Plans** to view the list of budget plans and their status. You have submitted a cost plan for approval that merges an added line item into the existing budget.

**Change Time Period Values in the Budget**

You can revise the time period values in a cost plan and can merge them into the existing budget plan. Merging values from one or more time periods helps you keep the budget accurate, without having to replace the entire budget. For example, you receive incremental funding for your budget to account for increases in resource costs. You can revise the cost of the resource for only the affected months.

If you have set a freeze date in the financial entity, you can only edit the cost plan for periods after the freeze date.

**Example: Append Time Periods to the Budget Plan**

Alice reviews the project plans with her manager and finds she needs to add three months for a new required feature. Alice revises her cost plan by adding three months to the project and populates fields with the cost information for each resource. She submits the revised cost plan, with the ID of ProjectA_estimatedCP-00, as a merged revision with only the additional months.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click the appropriate investment type; for example, Projects.
2. Open the investment and click **Financial Plans**.
3. Open the **Financial Plans** menu and click **Cost Plans**.
4. Open the cost plan.
5. Go to the correct time period for the plan in the **Unit, Cost and Revenue Details** section.
6. Edit the **Units**, **Cost**, and **Revenue** fields for the time period.
7. Save your changes and click **Return**.
8. Click **Actions** and select **Set as Plan of Record**.

> [!NOTE]
> If the cost plan is already the plan of record, skip this step.

9. Click **Yes** to confirm.
10. Click **Actions** and select **Submit Plan of Record for Approval**.

> [!NOTE]
> If you receive the message "Error: A submitted budget already exists" another cost plan for the investment exists as a submitted budget plan. The submitted budget plan must be approved or rejected before you can submit another plan for approval.

11. Specify the **Start Period** and **End Period** values for only the months in which you are adding or updating the values.
12. Select **Merge** in the Submit Option drop-down list.
13. Click **Submit for Approval**.
14. Open the **Financial Plans** menu and click **Budget Plans** to view the list of budget plans and their status. You have submitted a cost plan for approval that merges revisions to time periods in the existing budget.

**Delete Line Items from the Budget**

Delete unnecessary line items and submit the cost plan as a replacement for the budget. For example, if you want to remove a line item from the budget plan, delete the line item in the cost plan. Submit the revised cost plan as a replacement for the budget plan.

> [!NOTE]
> Select **Replace** to delete line items. Selecting Merge prevents the deletion and the line item remains in the submitted budget plan.

**Example: Delete a Role and Replace the Budget**

Several months before the project starts, Alice discovers that she must transfer the headcount of a test engineer to another project. She deletes the line item for the role for the junior test engineer from the cost plan, ProjectA_estimatedCP-00, and submits the plan for approval. Alice selects Replace to remove the line item from the budget.

Follow these steps:

1. Click **Home**, **Portfolio Management**, and select a type of investment.
2. Open the investment and click **Financial Plans**.
3. Open the **Financial Plans** tab menu and click **Cost Plans**.
4. Open the cost plan.
5. Select the line item that you want to delete and click **Delete**.
6. Click **Yes** to confirm and click **Return**.
7. Click **Actions** and select **Set as Plan of Record**.

> [!NOTE]
> If the cost plan is already the plan of record, skip this step.

8. Click **Yes** to confirm.
9. Click **Actions** and select **Submit Plan of Record for Approval**.

> [!NOTE]
> If you receive the message "Error: A submitted budget already exists" another cost plan for the investment exists as a submitted budget plan. The submitted budget plan must be approved or rejected before you can submit another plan for approval.

10. Select **Replace** in the Submit Option pull-down list.
11. Click **Submit for Approval**.
12. Open the **Financial Plans** menu and click **Budget Plans** to view the list of budget plans and their status. You have submitted a cost plan for approval that replaces the existing budget.

**Replace the Budget with a New Cost Plan**

Choose new grouping attributes and time period types for the budget by creating and submitting a new cost plan that replaces the approved budget plan. For example, when planning for an upcoming project, you provide an estimated budget with the roles that you think you need. Before the start of the project, you create a cost plan with the actual resources and change the grouping attributes to include Department and Location. You can then submit the new cost plan to replace the approved budget plan.

**Example: Submit a New Cost Plan and Replace the Budget**

Alice fills all the positions for the team and knows the cost of each resource. She has resources in two locations and wants to group by department and location. Additionally, the product manager asks that she use monthly time periods instead of quarterly. Alice creates a cost plan and adds each resource with their cost details. She makes the following selections to the properties of the cost plan:
- Grouping Attributes: Location and Department
- Time period type: Monthly

Alice saves her changes as ProjectA_actualCP-00, and submits the new budget for approval.

Follow these steps:

1. Click **Home**, **Portfolio Management**, and select an investment type.
2. Open the investment and click **Financial Plans**.
3. Open the **Financial Plans** menu and click **Cost Plans**.
4. Create a cost plan and populate it.
5. Click **Save** and click **Return**.
6. Click **Actions** and select **Set as Plan of Record**.

> [!NOTE]
> If the cost plan is already the plan of record, skip this step.

7. Click **Yes** to confirm.
8. Click **Actions** and select **Submit Plan of Record for Approval**. The Submit Option field lists Replace as the only available option. You must replace the budget when the grouping attributes or the fiscal time period type are different from those selected properties for the existing budget.

> [!NOTE]
> If you receive the message "Error: A submitted budget already exists" another cost plan for the investment exists as a submitted budget plan. The submitted budget plan must be approved or rejected before you can submit another plan for approval.

9. Click **Submit for Approval**.
10. Open the **Financial Plans** menu and click **Budget Plans** to view the list of budget plans and their status. You have submitted a cost plan for approval that replaces the existing budget.

**Verify the Revised Budget Plan**

After you submit the cost plan for approval, it becomes available as the submitted budget plan. You can view the status of the budget plan, and edit the plan if you have the appropriate access rights.

**Example: Edit and Verify the Submitted Budget Plan**

Alice has submitted the revised cost plan for approval. The plan remains in the submitted budget plan state until her manager approves it. She verifies that her revisions have been merged into or have replaced the budget correctly. While Alice reviews the plan, she sees that the cost value for October is incorrect for one of the resources. She manually changes the value and saves her changes. Her manager approves the budget; and Alice has successfully revised the approved budget plan with her changes.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click the appropriate investment type; for example, Projects.
2. Open the investment and click **Financial Plans**.
3. Open the **Financial Plans** menu and click **Budget Plans**.
4. Open the submitted budget plan to view the revisions and verify that the revisions are correct.
5. Edit values in the budget plan with any necessary revisions.
6. Save your changes and click **Return**. After you have verified that the submitted budget is correct and it has been approved, you have successfully revised the approved budget plan.

### Copy Financial Plans

You can copy an existing financial plan from an investment to create a new plan. You can also copy a financial plan when creating an investment from a template investment that includes financial plans.

Remember these rules when you copy an existing financial plan to create a new plan:
- In the target cost plan, the fiscal period type and grouping attribute values default to the source cost plan values. You cannot change these values.
- Any process instances that are associated with the source financial plan are not copied to the new plan.
- Any processes that are associated with the cost or benefit plan objects are available to the new plan for generating process instances.
- You can copy cost plans and benefit plans but you cannot copy budget plans.

#### How Financial Plan Data is Copied

This example shows you how data is copied over from a source plan to the target plan based on the following inputs from the user:
- Time periods to be copied from the source plan
- Start and end periods of the target plan

Jim the project manager for the ARP project at Forward, Inc. selects an existing cost plan to copy and create a new plan. The existing cost plan spans the following time periods:
- Start period: Jan 1, 2009 - Jan 31, 2009
- End period: Dec 1, 2009 - Dec 31, 2009

On the copy cost plan page, Jim specifies the following as the copy periods in the Copy Data from Source Cost plan section:
- Start period: Jun 1, 2009 - June 30, 2009
- End period: Dec 1, 2009 - Dec 31, 2009

In the Target Cost Plan section of the same page, Jim specifies the following as the start and end periods of the target cost plan:
- Plan start period: Jan 1, 2011 - Jan 31, 2011
- Plan end period: Dec 1, 2011 - Dec 31, 2011

The data from Jun 09 to Dec 09 periods from the source plan are copied to the Jan 2011 to Jun 2011 periods in the target plan.

#### Copy Cost Plans

Use these steps to copy an existing cost plan from an investment to create a new cost plan. You can copy the cost plan or only a portion of it and modify.

Follow these steps:

1. Open the investment.
2. Open the **Financial Plans** menu and click **Cost Plans**. The list page appears.
3. Select the check box next to the cost plan you want to copy.
4. Open the **Actions** menu, and from **General**, click **Copy Cost Plan**. The copy plan page appears.
5. Complete or review the following fields in the **Copy Data from Source Cost Plan** section:
- **Source Plan Name**: Displays the source plan name.
- **Start Period**: Defines the start copy period. Data is copied to the target plan based on this start period and the target plan start period. Default: The source plan start period.
- **End Period**: Defines the end copy period. Data is copied to the target plan based on this end period and the target plan end period. Default: The source plan end period.
- **Scale By %**: Defines the percentage by which to scale (increase or decrease) the dollar values in the copied plan. Example: Enter 75 percent to increase the values from the source plan by 75 percent from their original. Default: 0%. No change in values.
6. Complete or review the following fields in the **Target Cost Plan** section:
- **Plan Name**: Defines the target plan name. Default: The name of the source plan is prefixed with "Copy of".
- **Plan ID**: Defines the target plan unique ID. Default: The ID of the source plan is prefixed with "Copy of".
- **Description**: Defines a description for the target plan. Default: The source cost plan description.
- **Period Type**: Displays the fiscal period type. Default: The fiscal period type of the source plan. You cannot change the default period type.
- **Plan Start Period**: Defines the target plan start period. Default: The start period of the source plan.
- **Plan End Period**: Defines the target plan end period. Default: The end period of the source plan.
- **Benefit Plan**: Displays the benefit plan that is associated with the source plan (if any).
- **Currency**: Displays the system currency that is selected during financial setup.
- **Grouping Attributes**: Displays the grouping attributes of the plan. Default: The grouping attributes of the source plan. You cannot change these grouping attributes.
7. Save the changes. The cost plan is copied over and the new plan appears listed on the cost plans list page.

#### Copy Benefit Plans

Use these steps to copy an existing benefit plan to create a new benefit plan. You can copy the entire plan or a portion of the plan. After copying the plan, you can modify it.

Follow these steps:

1. Open the investment.
2. Open the **Financial Plans** menu and click **Benefit Plans**. The benefit plans list appears.
3. Select the benefit plan that you want to copy.
4. Open the **Actions** menu, and from **General**, click **Copy Benefit Plan**. The copy benefit plan page appears.
5. Complete or review the following fields in the **Copy Data from Source Benefit Plan** section:
- **Source Plan Name**: Displays the source plan name.
- **Start Period**: Defines the start copy period. Data is copied to the target plan based on this start period and the target plan start period. Default: The source plan start period.
- **End Period**: Defines the end copy period. Data is copied to the target plan based on this end period and the target plan end period. Default: The source plan end period.
- **Scale By %**: Defines the percentage by which to scale (increase or decrease) the dollar values in the copied plan. Example: Enter 75 percent to increase the values from the source plan by 75 percent from their original. Default: 0%. No change in values.
6. Complete the following fields in the **Target Benefit Plan** section of the page:
- **Plan Name**: Defines the target plan name. Default: The name of the source plan is prefixed with "Copy of".
- **Plan ID**: Defines the target plan unique ID. Default: The ID of the source plan is prefixed with "Copy of".
- **Period Type**: Displays the fiscal period type. Default: The fiscal period type of the source plan. You cannot change the default period type.
- **Plan Start Period**: Defines the target plan start period. Default: The start period of the source plan.
- **Plan End Period**: Defines the target plan end period. Default: The end period of the source plan.
7. Save the changes. The benefit plan properties appear displaying the newly copied benefit plan values.
8. Review the amount in the **Total Benefit** field that reflects the scaling percentage that is applied when copying data from the source plan.
9. Click **Detail** to review or change the benefit plan details. The total benefit amount is broken down for the new planning periods. Zero values appear for the periods that are no longer a part of the new benefit plan.

## Display Capital and Operating Costs

You can show operating and capital costs separately on the financial summary page and in a detailed financial plan. You can enter the cost information in the following ways:
- For a high-level estimate, enter the sums for these expenses directly on the investment financial summary page.
- For a more detailed view of cost type information, set up an investment financial plan that collects operating and capital expenses. You can collect detailed cost information from task assignments or team allocations.

### Financial Summary Page

The financial summary page for an investment displays high-level operating and capitalization costs for planned and budgeted costs. You can edit the amounts on the financial summary until you create a cost plan of record (POR). When you create a POR, the fields for operating and capitalization costs in the planned and budgeted cost sections of the financial summary become read-only. The POR information updates the planned cost fields on the financial summary page automatically. The latest approved budget updates the budget fields.

### Detailed Financial Plan

You can create a detailed financial plan manually, or you can populate the plan automatically from tasks or team allocations. To populate cost and budget plans automatically with capital and operating costs, use one of the following methods:
- **Tasks**: Specify an investment-level default (Capital or Operating) for all tasks. If you do not specify a cost type, the default is Operating. You can override the default at the task or task hierarchy level for individual tasks as needed. For example, you have an investment in which most tasks have operating costs, and a few tasks have capital costs. Set the investment cost type as Operating so all tasks inherit the cost type of Operating. For each task that has capital cost, edit the cost type in those specific tasks to override the default cost type.
- **Team Allocations**: Specify a capital cost percentage for individual team member allocations. For example, you have six team members who are assigned to a project. Alice, one of the members, has capital cost of 15 percent. Specify the capitalization percentage for Alice. The capitalization percentage is used to calculate the percentage of operating cost and capital cost for an employee allocation. When you populate from the team allocation, Alice has two lines in the cost plan. One line shows the operating percentage and the other shows units and costs per the operating percentage.

> [!WARNING]
> These steps describe the product navigation with no add-ins installed. If you have an add-in such as the PMO Accelerator installed, the navigation can vary.

Follow these steps:
- Review the Prerequisites
- Manually Update the Financial Summary Page to Display Capital and Operating Costs
- Select the Method for Collecting Cost Information and Create the Plan
- Set the Cost Type for Specific Investment Tasks
- Set the Capitalization Percentage for Investment Team Allocations
- Verify Your Capital and Operating Costs

### Review the Prerequisites
- Verify that you have the `<investment> - Edit Financial` access right assigned to you.
- Associate the investment with an entity.
- Verify that the investment has team allocations and tasks assignments if you plan to populate using these options.

### Manually Update the Financial Summary Page to Display Capital and Operating Costs

To assist with high-level planning, you can manually add capital and operating amounts on the financial summary page. For example, you have a new project and must deliver high-level, planned cost estimates. You can enter estimates for operating and capital costs. Once you have created a cost plan of record (POR) or have an approved budget, these fields become read-only.

> [!TIP]
> To display the correct costs on the Financial Summary page, select Cost Type as a grouping attribute. Cost Type does not need to be a grouping attribute on the Detailed Plan.

Follow these steps:

1. Click **Home**, **Portfolio Management**, and select an investment type.
2. Open an investment.
3. Click the **Properties** tab menu and select **Financial Summary**.
4. In the **Planned Cost** section, enter values for the following fields (if the POR does not use the Cost Type grouping attribute, the Planned Operating Cost field summarizes all costs as operating):
- **Planned Capital Cost**: Specifies the amount of capital cost that is planned for the investment. If the plan has a cost POR, the values from the POR populate this field and it becomes read-only.
- **Planned Capital %**: Specifies the percentage of total cost that comes from capital. This read-only field is automatically calculated: Planned Capital % = Planned Capital Cost / Planned Cost
- **Planned Operating Cost**: Specifies the amount of operating cost that is planned for the investment. If the plan has a cost POR, the values from the POR populate this field and it becomes read-only.
- **Planned Operating %**: The percentage of total costs that are from your planned operating costs (OpEx). This read-only field is automatically calculated: Planned Operating % = Planned Operating Cost / Planned Cost
5. In the **Budgeted Cost** section, enter values for the following fields (if Cost Type is not a grouping attribute, then all values are combined in the Budgeted Operating Cost field):
- **Budgeted Capital Cost**: Specifies the amount of capital cost that is budgeted for the investment. This field is unavailable when:
- A POR or approved budget exists. The value is populated from the approved budget. The field becomes read-only when a POR is created; however, if an approved budget does not exist, the budget fields are automatically populated with null cost values.
- The Budget Equals Planned Values check box is selected and detailed financial plans do not exist.
- **Budgeted Capital %**: Specifies the percentage of total budget costs that come from capital. This read-only field is calculated from the Budgeted Capital Cost field value.
- **Budgeted Operating Cost**: Specifies the amount of operating cost that is budgeted for the investment. This field is unavailable when:
- A POR or approved budget exists. The value is populated from the approved budget.
- The Budget Equals Planned Values check box is selected and detailed financial plans do not exist.
- **Budgeted Operating %**: Specifies the percentage of total budget costs that come from operating. This read-only field is calculated from the Budgeted Operating Cost field value.
6. Save your changes.

> [!TIP]
> When a detailed cost plan already exists, the Financial Plan Summary fields are read-only. When no detailed cost plan exists, you can adjust the editable values. In all cases, Planned Cost = Planned Capital Cost + Planned Operating Cost.

### Select the Method for Collecting Cost Information and Create the Plan

Create the detailed financial plan to update capital and operating costs automatically from either task assignments or team allocations. If you plan to populate your financial plan using task assignments, you can override the investment Cost Type setting at the specific task level. Set the investment default for the cost type when you create the financial plan.

For example, consider an investment with 90 tasks that break down into the following cost types: 80 operating cost tasks and ten capital cost tasks. In this case, the financial manager sets the investment Cost Type attribute to Operating. This setting automatically assigns the Operating cost type to all tasks and the 80 operating cost tasks are correctly identified. For the ten tasks that are capital cost, the financial administrator specifies the cost type at the task level to override the default setting.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click the appropriate investment type.
2. Open an investment and click **Financial Plans**.
3. Open the **Financial Plans** menu and click **Cost Plans**.
4. Open the **Actions** menu, and from **General**, click one of the following options:
- **New from Investment Team**
- **New from Task Assignments**

   The properties page appears showing the default values from the associated entity and investment. You can accept these default values, or you can change them.
5. Enter a name, ID, and description for the cost plan.
6. Select **Cost Type** from the Grouping Attribute drop-down list.
7. Save your changes.

### Set the Cost Type for Specific Investment Tasks

Cost plans with information that is populated from task assignments can have some tasks with a cost type different from the default. You can indicate a cost type for a specific task that overrides the default cost type that is selected for the plan.

**Example 1**: The Cost Type attribute for an investment is set to Operating. However, there are some tasks or task hierarchies that require the Capital cost type. In this case, you select the Capital cost type for only those tasks. When you populate the cost plan from tasks assignments, the plan displays a breakdown of capital and operating costs by line item.

**Example 2**: The Cost Type attribute for an investment is set to Operating. The investment has a parent task with a cost type of Capital. The parent task has two children tasks: Task 1 has a cost type of Operating and Task 2 has no cost type selected. In this case, Task 1 has Operating specified and Task 2 inherits the cost type Capital from its parent task. When a cost plan is created using New from Task Assignments, two rows get created, one for Operating costs and one for Capital costs.

> [!NOTE]
> The Cost Type field does not display out-of-the-box for tasks. The system administrator must configure the Tasks view in Studio to display the field.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click the appropriate investment type.
2. Open the investment and click **Tasks**.
3. Open a task and select **Capital** or **Operating** from **Cost Type**. Note: A child task inherits the selected value, unless it has a different cost type selected.
4. Save your changes.
5. Repeat this procedure for each task that has a different cost type than the one selected for the investment.

### Set the Capitalization Percentage for Investment Team Allocations

To show capital costs by team allocation, specify the capitalization percentage value for team members. For example, you have a team of six people who are assigned to a project. You can specify a capitalization percentage for each team member. Each member can have a different percentage. The cost plan displays the capital and operating costs for team members for whom you set a capitalization percentage.

> [!NOTE]
> The Capitalization field does not display out-of-the-box for teams. The system administrator must configure the Teams view in Studio to display the field. Also, to edit the Capitalization % field, you require the `<investment> - Edit Financial` access right. For example, to edit this field for a project, you need the Project - Edit Financial access right.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click the appropriate investment type.
2. Open the investment and click **Teams**.
3. Click **Teams** to open the menu, then click **Staff**.
4. Click the properties icon next to a team member name.
5. Enter a value in the **Capitalization %** field. The value is used to calculate the percentage of operating cost and capital cost for the employee allocation.
6. Click **Save and Return**.
7. Repeat this procedure for each team member for whom you want to display both capital and operating cost percentages.

### Verify Your Capital and Operating Costs

Verify that the investment capital and operating costs appear on the following pages:
- Financial Summary page
- Cost Plans Detail page

To view the Financial Summary page, follow these steps:

1. Open **Home**, and from **Portfolio Management**, click the appropriate investment type (for example, Projects).
2. Open the investment and click **Properties** to open the menu.
3. Click **Financial Summary**.

To view the Cost Plans Detail page, follow these steps:

1. Open **Home**, and from **Portfolio Management**, click the appropriate investment type.
2. Open the investment and click **Financial Plans**.
3. Open the **Financial Plans** menu and click **Cost Plans**.
4. Click the name of the POR.

When the capital and operating costs appear on both pages, you have correctly displayed this information.

## Enable Cost Plus Codes

The cost plus mechanism is used to apply mark-ups. A cost plus code is a set of cost plus rules. Cost plus rules allow for the mark-up of actual or standard costs. Project managers can associate cost plus rules to their projects to allow mark-up to be calculated using the multiplier (factor), burden, and overhead methods. Cost plus rules are added to cost plus codes to make up cost plus. Cost plus is used in an existing cost/rate matrix.
- Create Cost Plus Codes
- Create Cost Plus Rules and Add to Cost Plus Codes

### Create Cost Plus Codes

Follow these steps:

1. Open **Administration**, and from **Finance**, click **Cost Plus Codes**.
2. Click **New**.
3. Complete the requested information. The following field requires explanation:
- **Applies To**: Defines the cost type to which the cost plus code applies from the list. Values:
- **Actual**. The actual amount paid for transactions.
- **Standard**. The blended or burdened rate.
4. Save the changes.

> [!NOTE]
> If a cost plus code has been used in a transaction, you cannot delete it.

### Create Cost Plus Rules and Add to Cost Plus Codes

The cost plus rules that you add to the cost plus code specify the conditions and amounts that are applied for markups. Cost plus rules are added to cost plus codes to make up cost plus. Cost plus is used in an existing cost/rate matrix. Define at least one cost plus rule for each code and add it to the cost plus code. You can define unlimited cost plus codes or rules.

To delete a cost plus rule after adding, complete these steps:
- To delete the last rule added, click **Delete Last Rule**.
- To delete rules with a lower sequence number than the last rule you entered, delete all of the rules with higher sequence numbers first.

Follow these steps:

1. Open **Administration**, and from **Finance**, click **Cost Plus Codes**.
2. Click the cost plus code to add a cost plus rule.
3. In the **Rules in effect** section, click **New**.
4. Complete the following fields:
- **Units From**: Defines the beginning value for which this rule is invoked.
- **Multiplier**: Defines the type of markup to apply for the actual or standard cost. Default: Percent
- **Burden**: Defines the type of markup to apply to burden. Default: Percent
- **Overhead**: Defines the mark-up variable for overhead. Default: Percent
- **Sequence**: Displays the range of units to which the mark-up applies.
- **Applies To**: Displays what the mark-up applies to (for example, cost, rate, or actual).
- **To**: Defines the end of the range for invoking the rule.
- **Multiplier Amount**: Defines the percentage amount for the multiplier markup. When this cost plus rule is invoked, the multiplier amount is included in the calculation for the total transaction amount. Default: 0
- **Burden Amount**: Defines the percentage amount for the burden markup. The burden equals cost (actual or standard) times the burden amount. When this cost plus rule is invoked, the burden amount is included in the calculation for the total transaction amount. Default: 0
- **Overhead Amount**: Defines the percentage amount for the overhead markup. Overhead is the operational costs of a business and equals cost (actual or standard) times the overhead amount. When this cost plus rule is invoked, the overhead amount is included in the total transaction amount. Default: 0
5. Save the changes.

## Enable Investments, Resources, and Roles for Financial Processing

To use the financial management system and configurations that you have set up, define the financial properties for investments. Also, define the financial properties for the resources and roles that are assigned to the investments.

You can then process financial transactions against investments and determine their costs. You can also process financial transactions against the resource assignments and determine how these costs impact investments.
- Enable Investments for Financials
- Enable Resources and Roles for Financials

### Enable Investments for Financials

Financially enabling the investments ensures that actual costs from posted transactions show up on cost plans, reports, portfolios, and other product areas. Setting the financial status of an investment to "Open" without completing the required financial setup causes error messages to appear when processing actual transactions.

> [!NOTE]
> The following procedure uses "projects" as a sample investment.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click **Projects**.
2. Open the project.
3. Open the **Properties** menu, and from **Properties**, click **Settings**.
4. In the **Financial** section, complete the requested information:
- **Company Name**: Defines the company sponsoring the project or receiving the benefits of the project.
- **Affiliated Project**: Defines the project that is financially tied to the project. You can select from all financially active projects that are associated with the company.
- **Department**: Defines the department that is used during transaction processing of chargebacks to charge or credit departments for costs.
- **Location**: Defines the location that is used to match the project with debit and credit rules for transaction processing of chargebacks.
- **Financial Status**: Specifies the status that determines how financial transactions entered against the project are handled. Values:
- **Open**. All transactions that are entered against the project can be fully processed. Select this status to enable the project for financial processing.
- **Hold**. No new transactions can accumulate on the project.
- **Closed**. No new transactions can accumulate on the project.
- **Type**: Defines the billing method that is required for financial transaction processing. Values:
- **Standard**. The option allows transactions to accumulate over a given cycle.
- **Internal**. The option is used to track financial transactions that are not meant for chargebacks. We recommend selecting the Internal option unless you are going to export transactions into a third-party billing application.
- **WIP Class**: Defines the WIP class that is used to match the project with cost/rate matrices.
- **Investment Class**: Defines the investment class that is used to match the project with cost/rate matrices.
- **Cost Type**: Defines the scheduled capital or operating cost of the project. By default, the cost type is set to Operating.
- **Billing Currency**: Defines the currency that is used to process chargebacks and financial transactions on the investment.
5. In the **Labor**, **Material**, **Equipment**, and **Expense Transaction Matrix** sections, enter the following cost or rate information as needed:
- **Rate Source**: Defines the cost/rate matrix that is used to calculate the benefit amount of the transaction entry for the project.
- **Cost Source**: Defines the cost/rate matrix that is used to calculate the cost amount of the transaction entry for the project.
- **Exchange Rate Type**: Displayed only when multiple currencies are available. Values:
- **Average**. The blended derived rate over a period.
- **Fixed**. The fixed rate that does not change over a defined period.
- **Spot**. The variable rate that changes frequently.
6. Save the changes.

### Enable Resources and Roles for Financials

Financially enabling the resources ensures that the actual costs from posted transactions show up on cost plans, reports, and portfolios. You can also access application pages that provide you visibility to resource transaction entries.

> [!NOTE]
> The following procedure describes financial properties that appear for resources. If you are defining financial properties for roles, not all these properties appear.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Open the resource or role.
3. Open the **Properties** menu, and click **Financial** from Properties.
4. Complete the fields in the **Supplemental** section:
- **Financially Active**: Indicates whether the financial attributes for a resource or role are enabled to record financial management activities against an investment.
- **Target % Billable**: Refers to the percentage of the targeted billing rate that is billable.
- **Financial Department**: Defines the financial department that is associated with an entity in the financial organization structure.
- **Financial Location**: Defines the financial location that is associated with an entity in the financial organization structure.
- **Transaction Class**: Defines the user-defined values that group transaction types for the resource or role.
- **Resource Class**: Defines the category for the financially enabled resource or role.
- **Target Billing Rate**: Refers to the targeted billing rate that is billable for the resource.
5. Save your changes.

## Set Up a Financial Cost and Rate Matrix

A financial cost and rate matrix is composed of general properties to describe the matrix, and columns that identify the criteria that is used to match the rates and costs to transactions. You can define a rate matrix that is used during financial transaction processing to determine costs and billing or charge rates. You can create cost and rate matrices for labor, materials, equipment, and expense resource types.

You can establish default matrices at the system level, entity level, and investment level. The product looks for and applies matrices first at the investment level, then at the entity level, and finally at the system level. You can set default rate locations at either the entity level or system level. If a matrix cannot be matched, you can enter costs and rates manually when you create transactions.
- Example: Set Up a Cost/Rate Matrix Based on Resource Class
- Verify the Prerequisites
- Create a Cost and Rate Matrix
- Assign Columns to the Matrix
- Add Rows to the Matrix
- Edit the Current Rate
- Copy the Current Rate
- Increase the Rate for Cost/Rate Matrices
- Unlock Matrices

### Example: Set Up a Cost/Rate Matrix Based on Resource Class

The Document Management Company captures costs in the financial system using the resource class and the input type code of the resources that are assigned to their investments. The company has four different resource classes that are assigned to two different input type codes.

For example, billable labor has an actual cost of $100 whereas non-billable labor has no associated cost. The cost for non-labor resource classes is calculated as $1.00 x quantity.

The financial manager sets up a cost/rate matrix with five different rows:

| From Date | To Date | Resource Class | Input Type Code | Actual Cost |
|-----------|---------|----------------|-----------------|-------------|
| 1/1/2019 | 12/31/2019 | Labor | Billable | $100.00 |
| 1/1/2019 | 12/31/2019 | Labor | Non-Billable | $0.00 |
| 1/1/2019 | 12/31/2019 | Expense | * | $1.00 |
| 1/1/2019 | 12/31/2019 | Materials | * | $1.00 |
| 1/1/2019 | 12/31/2019 | Equipment | * | $1.00 |

### Verify the Prerequisites

Before you set up a cost/rate matrix, complete these prerequisites:

1. Verify that you understand the following financial management concepts:
- Cost planning versus actuals, fiscal calendar cycles, fiscal time periods and how they are defined in your organization.
- The desired outcomes for any type of configuration.
- How you want to set up your organizational structure using entity, and the location and department OBS units.
- How your configurations, classifications, and definitions affect the data flow to your third-party integrations and chargebacks processing.
2. Verify that you have created and set up a financial entity.
3. Verify that you have previously set up a currency.
4. Verify that you have gathered the following information:
   a. Determine whether the matrix is based on the resource role, resource, input type code, or charge code.
   b. Establish a naming convention for the matrix.
   c. Verify and activate the currency that is required for the matrix.
   d. Determine if the matrix must be marked private.
   e. Create any data to be used in the matrix before the matrix is established.
   f. (Optional) Set up cost plus codes to use them for marking up actual or standard costs in the cost/rate matrix.

### Create a Cost and Rate Matrix

As a financial manager, you can ensure that standard costs and rates apply to all detailed financial plans and transactions for investments. Create a standard cost/rate matrix that provides default values from a centralized rate matrix in the financial system.

Populate the matrix with the following types of financial values:
- Planned costs for investments for use in detailed financial plans.
- Billing rates for financial transactions that are processed against the investments.

A rate matrix governs the rate structure that covers all of your pricing models. Depending on your needs, create one or more matrices. We recommend that you include labor, materials, equipment, and expense resource types in your matrix. We also recommend that you use charge codes to help define costs and rates.

> [!NOTE]
> Copying a cost or rate matrix adds a new matrix using the defined properties of the existing matrix.

Follow these steps:

1. Click **Administration**, **Finance**, **Manage Matrix**.
2. Click **New** and complete the following fields:
- **Matrix Name**: Enter the unique name to identify this matrix.
- **Matrix Type**: The default Cost/Rate type is selected.
- **Matrix Default Currency**: Defines the default currency for this matrix. This field appears only when multi-currency is enabled.
- **Location**: Defines the location OBS related to an entity. We recommend that you leave this field blank because it can result in no rates being applied.
- **Entity**: Defines the financial entity that is associated with the matrix. We recommend that you leave this field blank because it can result in no rates being applied.
- **Private**: Specifies whether this matrix is restricted to particular users.
3. Click **Save and Continue**. Skip to Step 3 in the next procedure.

### Assign Columns to the Matrix

Decide which columns are needed in the matrix. For example, to allow investment managers to show a breakdown of their actual capital and operating expenses in the cost plans, assign Cost Type as a column in the matrix.

Determine the column order of the matrix so that evaluation of the transaction is performed correctly. The order of the columns determines the weighting and filtering driving the costs and rates. Transaction processing reads the columns from left to right.

Follow these steps:

1. Click **Administration**, **Finance**, **Manage Matrix**.
2. In the Matrix Name column, select a matrix.
3. Select a column from the **Available** list of columns and click **Add**. The column or field appears in the Selected list.
4. Change the order of selected columns by moving them up or down in the list. Click the up or down arrows. Up corresponds to left and down corresponds to right in the matrix.
5. Click **Save and Continue**. Skip to Step 3 in the next procedure.

### Add Rows to the Matrix

Complete your cost/rate matrix definition by adding rows of specific values for the matrix columns. For example, if you assigned Resource Role and Transaction Class as matrix columns, create rows by selecting unique combinations of roles and transaction classes.

> [!NOTE]
> Verify that each matrix row is unique and the dates do not overlap.

The matrix rows let you define the criteria for applying rates and costs to investments and resources for transaction processing. The sample matrix in the following table defines the cost and rate for the Business Analyst role for two different transaction classes:

| From Date | To Date | Resource Role | Transaction Class | Rate | Standard Cost | Actual Cost | Currency |
|-----------|---------|---------------|-------------------|------|---------------|-------------|----------|
| 1/1/13 | 12/31/13 | Business Analyst | Employee | | | | USD |
| 1/1/13 | 12/31/13 | Business Analyst | Contract | | | | USD |

Follow these steps:

1. Click **Administration**, **Finance**, **Manage Matrix**.
2. Select a matrix.
3. Click **Edit Matrix Rows**.
4. Click **New**.
5. Complete the two required date fields:
- **From Date**: Defines the beginning of the effective date range for this row.
- **To Date**: Defines the end of the effective date range for this row.
6. Enter values for any matrix columns that you added.
7. Complete the following standard fields for your matrix rows:
- **Rate**: Defines the billing rate to apply to a transaction for the row. A value of at least 0.00 is required.
- **Standard Cost**: The standard cost associated with any transaction matching the criteria established in the rate matrix.
- **Actual Cost**: Defines the actual cost that is associated with any transaction matching the criteria established in the matrix.
- **Currency**: Specifies the currency for the row in the matrix. This field appears only when multi-currency is enabled.
- **Cost Plus Code**: Specifies the cost plus code to use when a transaction matches the criteria that is established in the matrix.
8. Click **Save and Return**.

### Edit the Current Rate

You can update the existing rate to reflect any billing or cost structure changes.

Follow these steps:

1. Click **Administration**, **Finance**, **Manage Matrix**.
2. Choose the matrix you want to edit. The Edit Matrix Rows tab will open.
3. Identify the row for the rate you wish to change.
4. Click the icon between the checkbox and the rate name for that row to open the Matrix Row Properties page.
5. Update the necessary fields with the new values.
6. Click **Save And Return** to apply your changes.

### Copy the Current Rate

You can copy the existing rate and edit the required information to create a new entry that reflects any adjustments needed for the upcoming fiscal year.

Follow these steps:

1. Click **Administration**, **Finance**, **Manage Matrix**.
2. Choose the matrix you want to edit. The Edit Matrix Rows tab will open.
3. In this tab, find the row for the rate you wish to copy.
4. Check the box next to the row you want to copy, then click **Copy** at the bottom of the page.
5. Edit any fields as needed for the new entry.
6. Click **Save And Return** to finalize the copy.

### Increase the Rate for Cost/Rate Matrices

A rate increase affects the entire matrix. At least one matrix row must exist for you to complete these steps.

Follow these steps:

1. Click **Administration**, **Finance**, **Manage Matrix**.
2. Select a matrix. The Edit Matrix Rows tabbed page appears.
3. Select the check box for a row.
4. Click **Rate Increase**.
5. Change any of the following entries:
- **Rate %**: Defines the percent increase to apply to the rate for the period specified.
- **Standard Cost %**: Defines the percent increase to apply to the standard cost for the period specified.
- **Actual Cost %**: Defines the percent increase to apply to the actual cost for the period specified.
- **Source Date From**: Defines the beginning of the date range for the matrix rows affected by the rate change.
- **Source Date To**: Defines the end of the date range for the matrix rows affected by the rate change.
- **New Date From**: Defines the beginning of the effective date range for the new matrix row.
- **New Date To**: Defines the end of the effective date range for the new matrix row.
6. Click **Preview**.
7. Choose either all or some of the rows. If no rows are selected, no new records will be created.
8. Click **Submit**.

> [!IMPORTANT]
> About values of Rate %, Standard Cost % and Actual Cost %:
> - A negative percentage results in a reduction of the Rate/Actual Cost/Standard Cost.
> - A zero percentage maintains the current Rate/Actual Cost/Standard Cost.
> - A positive percentage leads to an increase in the Rate/Actual Cost/Standard Cost.

> [!WARNING]
> Consider the following key points when entering the New Date From and New Date To:
> - New dates create new rows/records in the grid.
> - They DO NOT:
>   - Modify existing rows
>   - Generate duplicate rows
>   - Overlap existing dates
> - If you include existing dates with the new ones, a message will alert you that the row already exists.

### Unlock Matrices

Matrices that are currently being viewed or changed are locked and therefore other users cannot view or change them.

Follow these steps:

1. Click **Administration**, **Finance**, **Manage Matrix**.
2. Click **Locked Matrices**.
3. Select the matrix that you want to unlock.
4. Click **Unlock**.

## Set Up a Financial Entity

Creating a financial entity is the first step in setting up financial management. You can define as many entities as you need. Each entity owns a unique set of locations and departments for which the entities are financially aware. To establish this financial boundary, associate the entities with a geographical OBS for locations and an organizational OBS for departments. Once an entity is defined, you can create financial plans and can establish costs for investments.

Financial controllers can set up defaults at the entity level to suggest the recommended cost plan structure for the organization. For example, they can predefine the fiscal time period type and the grouping attributes for all cost plans. The default values are automatically populated for individual investment cost plans at the time you create them. The project managers can change these defaults for their specific investments.
- Example: Set Up an Entity for Financial Planning
- Complete the Prerequisites
- Create Financial Classes
- Create Fiscal Time Periods
- Activate Fiscal Time Periods
- Create Plan Defaults

### Example: Set Up an Entity for Financial Planning

The financial manager at an IT corporation sets up a financial entity to provide the investment managers the basic framework for building detailed financial plans. The financial manager defines the following financial classes to categorize the organizational information to process financially:
- Resource classes to differentiate the offshore and local resources.
- Transaction classes to categorize consulting, development, and sales labor transaction types.

To allow cost planning that is based on monthly periods, the financial manager selects a monthly fiscal time period type spanning from January 1 to December 31. The financial manager then selects the following grouping attributes to drive the structure of all investment cost plan line items:
- Resource
- Role
- Transaction Class

### Complete the Prerequisites

Before you set up a financial entity, complete these prerequisites:

**Financial Management Concepts**: Verify that you understand the following:
- Cost planning as opposed to actuals, fiscal calendar cycles, fiscal time periods and how they are defined in your organization.
- The desired outcomes for any type of configuration.
- How you want to set up your organizational structure using entity, and the location and department OBS units.
- How your configurations, classifications, and definitions affect the data flow to your third-party integrations and chargebacks processing.

**Create the OBS and Entity**: Verify that you have set up the following items:
- A multi-currency setup with an active system currency.
- A financial location and financial department OBS.
- An entity associated with the financial location and financial department OBS.
- Department and location OBS units for the entity that are associated with each other.

**Grouping Attributes**: Determine the criteria to group your financial planning data. Establish grouping attributes for cost plan line item details.

Example Grouping Attributes:
- **Cost Type**: Includes separate line items for operating and capital costs.
- **Charge Code**: Includes different types of operating or capital costs such as fixed or variable operating costs.

### Create Financial Classes

To process financial information by categorizing resources, investments, and transactions, create the following financial classes:
- **Resource Classes**: Differentiate the different types of resources for reporting. Allow you to apply different costs and rates for resources such as employees and contractors.
- **Company Classes**: Describe clients or companies within the organization such as internal customers and external customers.
- **WIP Classes**: Use as columns in a matrix to determine the rates and costs of actual transactions or planned costs.
- **Investment Classes**: Differentiate the services that an organization provides its clients such as administrative or maintenance.
- **Transaction Classes**: Categorize the type of work that resources record and differentiates costs, such as internal or contract labor.

> [!NOTE]
> Initially, associate a resource class to the labor resource type and a transaction class to the labor transaction type only. You can create the other resource and transaction type classes (material, equipment, and expenses) once financial management is configured.

Follow these steps:

1. Click **Administration**, **Finance**, **Setup**. The financial organizational structure appears.
2. In the **Classifications** section, click the link name for a class.
3. Click **New**.
4. Complete the fields on the page and click **Save**.

> [!TIP]
> When creating a resource class, select the **Active** check box to make the resource class available for new references on resources, cost plans, and transactions.

### Create Fiscal Time Periods

Define active fiscal time periods for an entity as units for reporting and financial processing. Based on these time periods, investment managers can create detailed financial plans or chargeback rules.

> [!NOTE]
> Fiscal time periods are required for the following capabilities in Clarity:
> - Staffing (Resource Management) telescopic calendar in Clarity 15.2 or higher
> - Roadmaps in Clarity 15.4 or higher (roadmaps require annual fiscal time period types)

Follow these steps:

1. Click **Administration**, **Finance**, **Setup**. The financial organization structure appears.
2. In the **Organizational Structure** section, click **Entities**.
3. Select an entity.
4. Click **Fiscal Time Periods**.
5. Click **New** and complete the fields on the page:
- **Period Type**: Specifies the period type, such as monthly or quarterly. Once you create a time period, you cannot change this value.
- **Start Date**: Specifies the start date for the period or range of time periods.
- **Finish Date**: Specifies the ending date for the time period or range of time periods.
6. Click **Save**.

> [!TIP]
> Once the time periods are active, you cannot edit the start and finish dates. You can edit the start and finish dates only for inactive periods.

> [!TIP]
> When defining monthly fiscal periods types, we recommend that you include the current month in the date range to ensure successful execution of the Datamart Extraction job.

### Activate Fiscal Time Periods

All fiscal time periods within the date range are created with a status of Inactive. To allow investment managers to use the time periods in detailed financial plans, activate the time periods.

> [!NOTE]
> Some of the key points to remember are:
> 1. If a time period is actively used in financial planning, transactions, and invoices, you cannot delete it.
> 2. The Start Period and End Period in the Clarity View Options display active and inactive fiscal periods defined for the Default Entity.

Follow these steps:

1. Click **Administration**, **Finance**, **Setup**.
2. In the **Organizational Structure** section, click **Entities**.
3. Select an entity.
4. Click **Fiscal Time Periods**.
5. Select each fiscal time period to be activated.
6. In the **Actions** menu, click **General**, **Activate**.
7. Click **Save**.

### Create Plan Defaults

To create the following types of defaults for detailed financial plans for all investments, use plan defaults:
- **Grouping attributes**. Groups financial planning data by specific criteria.
- **Fiscal time period type**. Breaks down financial planning data by specific time period type.
- **Starting and ending periods**. Specifies the date range for creating manual financial plans.
- **Locked plans**. Locks financial plans to prevent managers from changing the grouping attributes at the investment level.
- **Freeze date**. Governs the time periods. For example, enter December 31 to prevent the time periods for detailed financial plans from being changed before this date.

Follow these steps:

1. Click **Administration**, **Finance**, **Setup**.
2. In the **Organizational Structure** section, click **Entities**.
3. Select an entity.
4. Click **Plan Defaults**.
5. Complete the fields on the page:
- **Freeze Date**: Specifies the date on which you can edit the time periods for a plan.

> [!NOTE]
> You cannot manually edit the detailed financial plans for time periods before the freeze date. However, if you auto-populate cost plans using Populate from Investment Team or Populate from Task Assignments, the time periods get updated irrespective of freeze date.
- **Lock Plan Structure**: Specifies whether to prevent managers from overriding the plan defaults when defining cost plans.
- **Grouping Attributes**: Specifies the categories for designing the cost plan and benefit plan line item detail structure.
6. Click **Save**.

## Set Up Currencies and Foreign Exchange Rates

To perform currency conversions for financial transactions, set up conversion rates. The currency code that you select becomes the default system currency for all financial management pages. Once you set a system currency, you cannot change it.

You must set up the system currency before you can do any of these tasks:
- Create entities and import them through the XML Open Gateway (XOG).
- Define financial properties and financial summaries for investments.
- Change your system from single-currency to multicurrency.
- Activate Currencies
- Set Up Conversion Rates
- Disable Currency Conversion

### Activate Currencies

Before you can use a currency in a conversion rate, activate the currency. You can complete this step only when the product is set up as a multicurrency system.

Follow these steps:

1. Click **Administration**, **Finance**, **Setup**. The financial organizational structure appears.
2. Click **Currency**.
3. Select each currency that you want to activate, and click **Activate**.

> [!TIP]
> The product supports 193 currencies.

### Set Up Conversion Rates

To perform currency conversions, set up conversion rates in both directions. For example, if you set up an exchange rate for INR to USD, you must also set up the reverse direction exchange rate from USD to INR. If you do not set up the reverse exchange rate, an error appears when you try to process transactions after changing the currency type.

> [!WARNING]
> When entering a value for any money field (including custom money fields), the product supports and is limited to up to 18 digits. Any value after the 18th digit changes to a zero.

Follow these steps:

1. Click **Administration**, **Finance**, **Setup**.
2. Click **Foreign Exchange Rates**.
3. Click **New**.
4. Complete the six required fields on this page:
   a. **From Currency**: Select one of your active currencies.
   b. **To Currency**: Select another active currency for the conversion. If the currency you want does not appear in the list, activate it.
   c. **Conversion Rate**: Enter a decimal number between 0 and 1, or a multiplier between 1 and 2.
   d. **Rate Calculation Method**: Specify whether the conversion uses multiplication or division to calculate the exchange rate.
   e. **Exchange Rate Type**: Specify the stability period of the foreign exchange rate. As a general rule, specify Average.
- **Average**: A blended derived rate over a period of time, usually weekly or monthly.
- **Fixed**: A fixed rate that does not change over a period of time.
- **Spot**: A variable rate that changes over the course of the day.
   f. **Effective Date**: Specify the first day when you want the system to apply this new foreign exchange rate.
5. Click **Save and Return**.

### Disable Currency Conversion

The program or project hierarchy can include child investments, services, or ideas that are associated with multiple currencies. To provide the financial rollup from multiple currencies, the product completes the following tasks:
- Converts the different currencies to the parent investment currency.
- Aggregates the converted values and rolls up the values to the parent investment currency.

If there is a large amount of data that needs currency conversion, you can run into a performance issue.

(On-Premise only) As an administrator, you can disable the currency conversion feature by running the following SQL query:

```sql
UPDATE CMN_OPTION_VALUES SET VALUE = '0' WHERE OPTION_ID= (SELECT ID FROM CMN_OPTIONS WHERE OPTION_CODE='CURRENCY_CONVERSION_REQUIRED')
```

To re-enable currency conversion after disabling it, run the following SQL query:

```sql
UPDATE CMN_OPTION_VALUES SET VALUE = '1' WHERE OPTION_ID= (SELECT ID FROM CMN_OPTIONS WHERE OPTION_CODE='CURRENCY_CONVERSION_REQUIRED')
```

> [!NOTE]
> SaaS customers can create a support ticket to disable or enable currency conversion for their systems.

## Set Up Financial Classes

Use financial classes to: categorize resources, companies, investments, and transactions, uniquely describe rules when processing chargeback-related transactions, and enable projects for financial processing.
- Resource Classes
- Company Classes
- Investment Classes
- Work in Process Classes
- Transaction Classes
- Deactivate the Financial Attributes

### Resource Classes

Use resource classes to categorize financially enabled resources. Here are some examples:
- **Organizational**. Executive, management, or staff.
- **Geographical category**. Local, offshore, or EMEA.
- **Skill Level**. Principal, senior, or associate.
- **Equipment**. Computer hardware, software, or office equipment.
- **Materials**. Specifications, presentations, or user guides.

> [!NOTE]
> You can associate a resource to only one resource class.

### Company Classes

Company classes categorize clients, vertical markets, or lines of business within your financial organization and are required when financially enabling a company. A company can belong to only one company class at a time. Here are some examples:
- **Industry**. Government, education, consumer, technology
- **Region**. North America, South America, EMEA

> [!WARNING]
> Do not delete the company class if a company is associated with the company class. Deleting assigned company classes causes validation errors.

### Investment Classes

Use investment classes to categorize work logically within an organization.

### Work in Process Classes

Use work-in-process (WIP) classes to categorize companies and investments. WIP is also used to indicate methods of revenue recognition. You can use the WIP class to define the rates and costs for transactions, and to group transactions for posting to the general ledger.

> [!WARNING]
> If the WIP class is currently associated with a company, investment, or transaction, do not delete the WIP class.

### Transaction Classes

Transaction classes are user-defined values that group transaction types. For example, to categorize the labor transaction type for financial reporting and analysis in your organization, add the following transaction classes:
- Consulting
- Development
- Sales

Other examples:
- Hardware for equipment
- Software for material
- Travel for expense

Define at least one transaction class for each of the transaction types in the following table:

| Transaction Type | System Identifier |
|------------------|-------------------|
| Labor. Used to capture people hours that are associated with costs. | L |
| Material. Used to capture asset costs. | M |
| Equipment. Used to capture physical asset costs. | Q |
| Expense. Used to capture all other costs. | X |

Every transaction is associated with a transaction class. This association is useful when applying costs to investments in an organization.

### Deactivate the Financial Attributes

You can deactivate the financial attributes of Resource/Company/Investment/Work in Process/Transaction Classes.

Follow these steps:

1. Click **Administration**, **Finance**, and **Setup**. The financial organizational structure appears.
2. Click **Resource/Company/Work in Progress/Investment/Transaction Classes**.
3. In the **Active** column, select **No** to deactivate the attribute.
4. Click **Save**.

## Set Up Financial Defaults, Charge Codes, Vendors, and WIP Settings

As a financial manager, create the required default financial data. These defaults enable investment managers and other business users to perform their financial management tasks.
- Example: Create Financial Data to Process Financial Transactions and Plan Investment Costs
- Verify the Prerequisites
- Add Vendors
- Create Company Profiles
- Create Input Type Codes
- Create Charge Codes
- Set System Defaults
- Specify WIP Settings

### Example: Create Financial Data to Process Financial Transactions and Plan Investment Costs

A financial manager oversees the finances for a new Human Resources (HR) Upgrade project. The initiative includes several investments that are assigned to different investment managers across the organization. The financial manager creates the following financial data:
- Vendors V1 and V2 to track the hardware and material
- A financially enabled company profile
- Financially enabled investments, resources, and roles
- Input type codes to differentiate the rates of full-time resources from contractors
- Charge codes to differentiate the cost of regular work from overhead

### Verify the Prerequisites

Before you create the required financial data, verify that you understand the following financial management concepts and have set up the following financial items:
- Location and department OBS and OBS units
- Entity
- Financial Classes
- Cost and Rate Matrices
- Currencies
- Investments (for example, projects, applications, assets)
- Resources and roles

### Add Vendors

You can define your vendors so you can track the purchases to a specific supplier of products or services.

Follow these steps:

1. Open **Administration**, and from **Finance**, click **Setup**. The financial organizational structure appears.
2. Click **Vendors**.
3. Click **New**.
4. Complete the requested information.
5. Click **Save**.

### Create Company Profiles

You can create company profiles to associate with investments when integrating with third-party billing systems so you can classify the data.

> [!NOTE]
> Selecting a financial location and a financial department for a company automatically populates the WIP class, investment class, and company class with default values.

Follow these steps:

1. Open **Home**, and from **Financial Management**, click **Companies**.
2. Click **New**.
3. Complete the requested information.
4. Click **Save**.
5. Open the **Properties** menu and click **Financial**.
6. Complete the requested information. The following fields require explanation:
- **Financial Status**: Indicates the status of the company profile. Values:
- **Active**: You can create financially enabled investments for the company.
- **Inactive**: You cannot create financially enabled investments for the company.
- **No New Business**: Financially enabled investments currently exist for the company but you cannot create more.
- **Financial Location**: Defines the financial location of the company.
- **Financial Department**: Defines the department that is assigned ownership of the company.
- **WIP Class**: Defines the WIP class indicating the financial transaction category for the company.
- **Investment Class**: Defines the investment class to which this company is assigned.
- **Company Class**: Defines the company class to which this company is assigned.
- **Date Opened**: Defines the effective date that the company was financially enabled.
7. Save the changes.
8. Click **Billing Addresses** and provide the billing address information.
9. (Optional) Open the **Properties** menu and click **Supplemental**. Complete the requested information including company web address, stock ticker symbol, and account manager.
10. Save your changes.

### Create Input Type Codes

To classify the resources, control whether a transaction is chargeable, and differentiate costs and rates, create input type codes.

Follow these steps:

1. Open **Administration**, and from **Project Management**, click **Input Type Codes**.
2. Click **New**.
3. Complete the requested information. The following field requires explanation:
- **Chargeable**: Indicates if the input type code can be used in chargeable calculations.
4. Save the changes.

### Create Charge Codes

To process financial transactions and timesheets, support financial planning, and differentiate costs and rates by the type of work, create charge codes.

Follow these steps:

1. Open **Administration**, and from **Project Management**, click **Charge Codes**.
2. Click **New**.
3. Complete the requested information. The following field requires explanation:
- **Open for Time Entry**: Specifies if the resource can use timesheets to track time that is spent on task assignments. When cleared, you cannot select the charge code for investments, time entries, or financial transactions. Default: Selected
4. Save the changes.

> [!NOTE]
> If the project management setting **Enable Investment-specific Charge Codes** is selected, you see an additional Investment Name field. The new charge code is used only with this project for tracking time entries and financial transactions.

### Set System Defaults

You can set system-level defaults for financial classes, cost and rate matrices, and other financial management settings. You can override the system defaults at the entity level or investment-level. The investment-level defaults take precedence over entity or system defaults.

> [!NOTE]
> If you already defined a default entity in the entity properties, a value is auto-populated in the financial management defaults. The entity field is not required but if you do not set a default entity, it impacts the resource management capability in Clarity.

Follow these steps:

1. Open **Administration**, and from the **Finance** menu, click **Setup**. The financial organizational structure page appears.
2. Click the **Defaults** link. The financial management defaults page appears.
3. In the **File Maintenance** section, select the default values to use for the entity, location, department, and financial classes.
4. In the **Project** section, click the **Project Transaction Entry Defaults** link. The transaction entry page appears.
5. In the **Labor** section, complete the following fields:
- **Rate Source**: Defines the default matrix that is used to determine the chargeable rate for labor.
- **Cost Source**: Defines the default matrix that is used to determine the labor costs.
- **Source Location**: Defines the default source location.
- **Exchange Rate Type**: Defines the default labor exchange rate type. Values: Average, Spot, Fixed
6. In the **Material**, **Equipment**, and **Expense** sections, complete the following fields:
- **Rate Source**: Defines the default matrices for material, equipment, or expenses.
- **Source Location**: Indicates the default source location OBS unit.
- **Exchange Rate Type**: Defines the default exchange rate type.
7. Click **Save and Return**.
8. In the **General** section, complete the following fields:
- **Annual Total Cost of Capital %**: Defines the annual finance rate for the total cost of capital.
- **Annual Reinvestment Rate %**: Defines the annual interest rate for reinvesting positive cash flow.
- **Ignore Non-Labor Roles/Resources in Cost Plan Population**: Specifies whether non-labor ETC is skipped during autopopulation.
9. Save the changes.

### Specify WIP Settings

WIP transactions let you adjust and review transactions before invoicing them. To classify financial data in chargebacks, transactions posted to WIP, and in cost plans, specify the WIP settings.

Verify that you select the same value for entity, location, and department as shown in the following table:

| WIP Setting | Entity | Location | Department |
|-------------|--------|----------|------------|
| Configuration Option 1 | Project Entity | Project Location | Project Department |
| Configuration Option 2 | Client Entity | Client Location | Client Department |
| Configuration Option 3 | Employee Entity | Employee Location | Employee Department |

> [!NOTE]
> If the values do not match for entity, location, and department, you can get unexpected results in the WIP transactions.

Follow these steps:

1. Open **Administration**, and from the **Finance** menu, click **WIP Settings**.
2. Complete the following fields:
- **Entity**: Defines the entity that determines how financial data is classified.
- **Location**: Defines the location that determines how financial data is classified.
- **Department**: Defines the department that determines how financial data is classified.
- **WIP Aging Levels in Days**: Defines the number of days for each WIP level.
3. Click **Save**.

## Set Up Financial Departments

Financial departments represent units in the organizational structure of your company. You can set up a department as one of the following items:
- **IT Provider**. The department owns investments or services to which other departments can subscribe.
- **IT Customer**. The department subscribes to investments or services that an IT provider department provides.

**Prerequisites**: Set up the following items before you start working with departments:
- Create an entity.
- (Optional) Associate the department with locations.
- (Optional) Associate resources with the department.
- (Optional) Associate investments with the department.

### Create Departments

You create a department by naming it, associating it with an entity, and optionally selecting a parent department, department manager, and business relationship manager.

> [!NOTE]
> You can edit a department after creating it. If you have not associated a department with a location, you can delete it. When you delete a department, its sub departments are also deleted.

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Click **New**.
3. Complete the requested information:
- **Entity**: Defines the entity that is used to associate an organizational structure and financial planning defaults with the department. Once the department is created, you cannot change this field.
- **Parent Department**: Specifies the parent department for this department.
- **IT Customer**: Displays if the department is a subscriber.
- **IT Provider**: Displays if the department owns investments or services.
- **Department Manager**: Specifies the department manager. Automatically granted the Department - Edit access right.
- **Business Relationship Manager**: Defines the user who is a liaison between this department and other departments.
- **Delegate Invoice Approval**: Indicates if invoice approval must be delegated to the sub departments.
4. Save the changes.

> [!NOTE]
> You can delete a department when the following conditions are true:
> - The department is not referenced in the financial cost/rate matrix.
> - The department does not have associated financial transactions.
> - The department is not set as a default system department.
> - A financially enabled resource is not using the department.
> - A financially enabled project is not using the department.
> - The department is not associated with a location.

### Define the Department Budget

You can plan for and track budgeted costs and benefits for your department.

> [!NOTE]
> The following financial metrics are not available on the department properties as a default: Calculate Financial Metrics, Planned NPV, Planned ROI, Planned Breakeven, Planned IRR, Planned MIRR, Planned Payback Period (in months), Budget NPV, Budget ROI, Budget Breakeven, Budget IRR, Budget MIRR and Budget Payback Period (in months). You can configure the Department Properties view for the Department object to display the financial metrics.

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Click the department.
3. Click **Properties**, **Budget**. The budget properties page appears.
4. Complete or review the following fields:
- **Currency**: Displays the selected system currency.
- **Budget Equals Planned Values**: Indicates whether you want the budget cost and benefit values to be equal to the planned cost and budget values.
- **Planned Cost**: Defines the planned costs for the department.
- **Planned Cost Start** and **Planned Cost Finish**: Defines the dates when the planned cost starts and finishes.
- **Planned Benefit**: Defines the total planned benefit the department receives.
- **Planned Benefit Start** and **Planned Benefit Finish**: Defines the dates when planned benefit starts and finishes.
- **Budget Cost**: Defines the budgeted cost for the department.
- **Budget Cost Start** and **Budget Cost Finish**: Defines the dates when the budget cost starts and finishes.
- **Budget Benefit**: Defines the total budgeted benefit the department receives.
- **Budget Benefit Start** and **Budget Benefit Finish**: Defines the dates when budgeted benefit starts and finishes.
5. Save the changes.

### Manage Department Locations

You can associate a department to multiple locations by opening the department and clicking Locations. The locations must be from the same entity as the department.

### Manage Department Resources

Resources become members of a department when you associate them with a department OBS in the resource properties page. A resource can belong to only one department.

#### View Resource Allocation for Departments

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Click the department and click **Resources**. The department resources page appears.
3. In the **Department Resource Aggregation** section, review the following fields:
- **Department**: Displays the department or any of its sub departments.
- **Allocation**: Displays the aggregated full-time employee availability for each time period.
4. In the **Department Resources** section, view the list of resources associated with the department.

#### Plan Resource Capacity

Follow these steps:

1. With the department open, click **Resources**. The department resources page appears.
2. Open the **Scenario** menu and use scenarios to plan resource capacity.

### Manage Department Investments

Investments are tied to a department when they are associated with a department OBS in the investment properties. An investment can belong to only one department.

Follow these steps:

1. With the department open, click **Investments**. The investments list appears.
2. Click an investment link to view or edit the investment.

## Set Up Financial Locations

Financial locations represent the geographical locations where a company conducts its business. Locations such as a city, state, or country are uniquely associated with one entity.

### Create Locations and Associate the Locations to an Entity

Follow these steps:

1. Open **Administration**, and from **Finance**, click **Setup**. The financial organizational structure appears.
2. Click **Locations**.
3. Click **New** and complete the requested information:
- **Entity**: Specifies the entity to which this location belongs. This field cannot be changed after it is saved.
- **Parent**: Specifies the location to which this location belongs.
4. Save the changes.

> [!NOTE]
> After you create a location, you cannot delete it if it is associated with any department, entity, system defaults, resources, chargebacks, or GL allocation.

### Associate Departments with Locations

Follow these steps:

1. Open the location.
2. Click **Properties**, **Departments**.
3. Click **Add**.
4. Select the check box next to each department and click **Add**.

### Remove Department Associations From Locations

You can remove the association between a department and location if all of the following are true:
- Financially enabled investments are not using it.
- Financial transactions are not associated with it.
- A financially enabled resource is not using it.

## Set Up General Ledger Accounts and Process Chargebacks

Chargebacks represent the inter-department account transfers of investment or service costs. A chargeback is a debit or charge to departments for their shared cost of investments or services that were delivered during a specified period.

Before you set up chargebacks and general ledger accounts, verify that the following items exist:
- Set up a financial entity and define fiscal time periods.
- Set up financial departments and locations.
- Set up financial classes.
- Set up financially-enabled investments or services.
- Set up financially-enabled team members.
- Verify that each user has the appropriate access rights.

### Set Up General Ledger Accounts

GL accounts are combinations of main account codes and subaccount codes that are used to categorize accounts.

> [!NOTE]
> Before you set up GL accounts, verify that a financial entity exists.

Follow these steps:

1. Open **Administration**, and from **Finance**, click **GL Accounts**.
2. Click **New**.
3. Complete the requested information:
- **Main Account ID**: Defines the first part of the natural account number.
- **Sub Account ID**: Defines the second part of the natural account number.
- **Is Active**: Indicates if this account is active.
- **Overhead**: Indicates if this account is used to charge costs to designated departments.
- **Capital Expense**: Indicates if this account is used for capital expense.
- **Noncash Expense**: Indicates if this account is used for noncash expense.
4. Click **Save**.

### Set Up Chargeback Rules

Rules drive chargebacks and credits for investment and service costs. The following chargeback rules are supported:
- **Investment-specific Debit Rules**: Determines how to debit departments for the cost of investments or services.
- **Standard Debit Rules**: A standard set of debit rules that can be used globally within an entity.
- **Credit Rules**: Determines which departments are credited for the cost of investments or services.
- **Overhead Rules**: Determines how to charge remaining or overhead costs.

### Create Overhead Rules

Follow these steps:

1. Open **Administration**, and from **Chargebacks**, click **Overhead Rules**.
2. Click **New**.
3. Enter the following information:
- **Entity**: Defines the entity that is associated with the rule.
- **GL Account**: Defines the GL account that is associated with the rule.
- **Department**: Defines the department that is associated with the rule.
4. Save changes.
5. Define the overhead rule details (percentage, time periods).

### Set Investment Chargeback Options

Follow these steps:

1. Open an investment or service.
2. Open the **Chargebacks** menu, and click **Options**.
3. Complete the following fields:
- **Chargeback Type**: Defines the chargeback type. Values: Standard, Investment
- **Bill Expense Type**: Indicates how costs are accounted for. Values: Capital expense (charges considered for invoicing), Depreciation (charges not considered for invoicing)
4. Save the changes.

### Reverse Charges on Transactions

You can review transactions that are processed for your investments or services. If you find errors, you can reverse charges on selected transactions or on all listed transactions.

Follow these steps:

1. Open the investment or service.
2. Open the **Chargebacks** menu and click **Transactions**.
3. Filter for the fiscal period.
4. Review the transactions.
5. If the transactions are incorrect:
- Select each transaction and click **Reverse Selected Charges**.
- Or click **Reverse Filtered Charges** to reverse all listed transactions.

### View Department Recovery Statements

A recovery statement tells departments how much of their incurred costs can be recovered. Only departments that provide services can view department recovery statements.

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Click a department link to open the department.
3. Click **Recovery Statement**.
4. Filter for recovery information.
5. Review the recovery information.

### Submit and Approve Department Invoices

Each department that is charged receives an invoice for each time period.

#### Invoice Approval

1. The invoice is generated by running the **Generate Invoice** job. Status: Proforma.
2. Finance manager submits the invoice. Status changes to **Submitted** and the invoice becomes locked.
3. Department manager approves or rejects:
- If approved, status changes to **Approved**.
- If rejected, status changes to **Rejected**.

#### Delegated Invoice Approval

Delegated invoice approval enables sub departments to view and approve their own invoices. When sub departments are given delegated invoice approval, invoices are generated for each sub department and the parent department.

#### Invoice Aggregation

Each line item in an invoice shows the aggregate charges of the top-level parent investment or service in a hierarchy. You can drill down and view the detailed charges.

#### Invoice Adjustments

Occasionally you can see incorrect charges that require adjustment or reversal:
- Change your share in the cost of the investment or service.
- Update the transaction.
- Reverse the charges completely.

#### Submit Department Invoices

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Open the department and click **Invoices**.
3. Click an **Invoice Number** link to open the invoice.
4. Submit the invoice.

#### Lock or Unlock Department Invoices

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Open the department and click **Invoices**.
3. Click the **Invoice Number** link.
4. Click **Lock** or **Unlock**.

#### Approve or Reject Department Invoices

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Open the department and click **Invoices**.
3. Click an **Invoice Number** link.
4. Click **Approve** or **Reject**.

#### Regenerate Department Invoices

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Open the department and click **Invoices**.
3. Click an **Invoice Number** link.
4. Click **Regenerate**.
5. Click the **Current Amount** or **Total Amount** link to view transaction details.

## Set Up Financial Transactions, Voucher Headers, and WIP Adjustments

Transactions capture the total cost of labor, materials, equipment, and other expenses. Transactions can be charged back to departments for services, assets, applications, projects, and other investments. Transactions can be initiated from timesheets, imported from external systems, or entered manually. Work-in-progress transactions are an important stage in the accounting process that enables you to adjust and review transactions before they get invoiced.
- Transaction Entries
- Make Voucher and Resource Types Available for Processing
- Create Voucher Headers
- Create Transaction Entries
- Manage Work-in-Progress (WIP) Transactions
- Review Processed Transactions

### Transaction Entries

A transaction entry is composed of the following items:
- A voucher header describes transactions and categorizes them by resource type.
- Line items describing the transaction.

> [!TIP]
> Before creating and viewing transactions, log in as a user with the financial properties enabled.

Enter transactions manually to capture the total cost of investment materials, equipment, labor, and other expenses. All transactions are entered as vouchers and then posted to Work-in-Progress (WIP) for the transactions to appear on a department invoice.

Work-in-progress (WIP) is an important, fundamental accounting concept where all costs on an investment are captured and capitalized. Before transactions can be processed, they must be posted to WIP. Once a transaction has been posted to WIP, it has passed all validation criteria and is available for invoicing and posting to the general ledger (GL). You cannot delete posted WIP transactions, but can change them through the WIP adjustment process.

### Make Voucher and Resource Types Available for Processing

The following voucher types are used to categorize transactions by resource type:
- **Voucher Other**: Allows transactions on labor, materials, and equipment resource types.
- **Voucher Expense**: Allows transactions for the expense resource type.

### Create Voucher Headers

Follow these steps:

1. Click **Home**, **Financial Management**, **Transaction Entry**.
2. Click **New**.
3. Complete the following fields:
- **Entry Type**: Defines the voucher type.
- **Entry Number**: Defines a number that is used to track and process the transaction. Limit: Up to 30 characters.
- **P.O. Number**: Defines the purchase order number. Limit: Up to 30 characters.
- **Vendor**: Defines the vendor code of the company or resource.
- **Incurred By**: Defines the resource that incurred the expense.
4. Click **Save** to create the voucher header.

### Create Transaction Entries

Follow these steps:

1. With the voucher header open, click **New**.
2. Enter the required information:
- **Investment ID**: Identifies the investment associated with the transaction.
- **Task**: Identifies the task associated with the transaction.
- **Cost Type**: Identifies the cost type.
- **Charge Code**: Identifies the project or task charge code.
- **Resource ID**: Defines the ID of the resource.
- **Role**: Defines the role when applying a role-based rate or cost.
- **Transaction Class**: Defines the resource's transaction class.
- **Input Type Code**: Defines the resource's input type code.
- **Expense Type**: Defines the expense type.
- **Preserve General Information**: Saves the entered values for the session.
3. Enter transaction information in the **Transaction Data** section:
- **Quantity**: Defines the number of units.
- **Cost**: Provides the cost associated with the transaction.
- **Rate**: Provides the billing rate associated with the transaction.
- **Chargeable**: Indicates if this transaction should be charged internally.

### Delete Transactions

If transactions have not been posted to WIP, you can delete them.

To delete a voucher header:

1. Filter for voucher headers you want to delete.
2. Select the check box next to each voucher header.
3. Click **Delete**.

To delete a transaction:

1. Filter for voucher headers.
2. Select the **Entry Number** link to view transactions.
3. Select the check box next to each transaction.
4. Click **Delete**.

### Manage Work-in-Progress (WIP) Transactions

#### Post Transactions to Work-in-Progress

Two methods of WIP posting are available:
- **Full Post**: Lets you select all accumulated transactions in a specified date range. For best performance, limit to less than 5,000 transactions.
- **Selective Post**: Lets you filter transactions by location, client, investment, resource, and transaction type.

Follow these steps:

1. Open **Home**, and from **Financial Management**, click **Post to WIP**.
2. Search for the transactions you want to post using the available criteria.
3. Click **Apply** to filter transactions.
4. Click **Post** to send the transactions to the WIP stage, or click **Recalculate and Post** if multi-currency is enabled.

#### Work-in-Progress (WIP) Adjustments

With WIP adjustments, you can modify and correct posted WIP transactions. Posted WIP transactions must meet the following criteria:

1. Has been posted to WIP
2. Previous adjustments have been approved or rejected
3. Is not currently in the WIP adjustment process
4. Has not been invoiced
5. Has not been reversed
6. Has not been closed

#### Modify Posted WIP Transactions

Follow these steps:

1. Open **Home**, and from **Financial Management**, click **Create WIP Adjustment**.
2. Search for posted WIP transactions by specifying a date range.
3. Click **Filter**. Transactions that match the criteria appear.
4. Click the **Transaction Date** link to edit transaction information.
5. Modify the **Calculate New Rates** field as needed.
6. Save the changes.
7. Approve or reject the WIP adjustment.

#### Reverse Posted WIP Transactions

A reversal cancels the original posted transaction before it is billed.

Follow these steps:

1. Filter for the posted WIP transaction.
2. Select each transaction that you want to reverse, and click **Reverse**. The transaction is ready for WIP approval.

#### Transfer WIP Transactions

A transfer allows you to make batch WIP adjustments or to batch transfer transactions from one investment to another.

> [!NOTE]
> Any changes to the resource financial properties are not updated on WIP adjustments or WIP transfers. Fields like Location, Department, and Resource Class are only set for the WIP transaction at the time you create a transaction.

Follow these steps:

1. Filter for the posted WIP transaction.
2. Select the check box next to each transaction, and click **Transfer**.
3. In the **Transfer From** section, view the existing information.
4. Complete the transfer fields:
- **Override Date**: Identifies a new date for the transaction.
- **Project**: Identifies the investment to which the transaction is transferred.
- **Task**: Identifies the task to which the transaction is transferred.
- **Charge Code**: Identifies the charge code.
- **Input Type Code**: Identifies the input type code.
- **Resource ID**: Identifies the resource.
- **Calculate New Rates**: Indicates if rates are recalculated.
- **Transaction Class**: Identifies the transaction class.
5. Save the changes.
6. Click **Continue** to return to the previous page.

#### Approve or Reject WIP Adjustments

All WIP adjustments must be reviewed and either approved or rejected.

Follow these steps:

1. Click **Home**, **Financial Management**, **Approve WIP Adjustment**.
2. Filter for the specific WIP adjustments.
3. Select each transaction to approve or reject.
4. Click **Approve** or **Reject**.

#### Approve or Reject WIP Adjustments with Reviews

The WIP adjustment details page enables you to compare the adjusted transaction with the adjustment transaction.

Follow these steps:

1. Filter for the specific WIP adjustments.
2. Click the **Transaction Date** link to view the details of the selected WIP adjustment.
