# Financial Management Reports

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[11 - Reporting/_MOC Reporting|Reporting]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[18 - Advanced Reporting/PMO Accelerator Reports/Financial Reports]]
- [[11 - Reporting/Report Designer/Creating Your First Report]]
- [[11 - Reporting/Working with Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Investment Reports]]
- [[11 - Reporting/Report Designer/Drill Down Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Portfolio Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/PMO Admin Reports]]
- [[11 - Reporting/Exporting Reports]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Report Fields and Calculations (#report-fields-and-calculations)
- H2: Report Security (#report-security)
- H2: Financial Management Reports (#financial-management-reports)
- H2: Financial Capitalization by Investment (#financial-capitalization-by-investment)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Financial Capitalization Detail (#financial-capitalization-detail)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Financial Forecast Review by Investment (#financial-forecast-review-by-investment)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Financial Forecast Review by Plan Grouping (#financial-forecast-review-by-plan-grouping)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Financial Budget vs. Forecast by Period (#financial-budget-vs-forecast-by-period)
- H3: Parameter Explanations (#parameter-explanations)
- H2: Financial Budget vs. Forecast by Period Detail (#financial-budget-vs-forecast-by-period-detail)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H2: Investment Transaction Inquiry (#investment-transaction-inquiry)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)

## Report Fields and Calculations

The report includes only resources with missing time and displays the following columns: resource name, employment type, primary role, available hours, entered hours, missing hours, timesheet status, and email address. The report can be grouped by resource manager or OBS level. Resources must have Open for Time Entry checked and Track Mode set to Clarity or Other to be included in the report. Resources must be employed during the time period that is selected in the parameter to be included in the report, which means that resources must have a hire date less than the report time period finish date or no hire date. Moreover, resources must also have a date of termination greater than the report time period start date or no date of termination. Resources only are included; roles are excluded.
The report has two charts: Timesheet Count Summary and Timesheet Hours Summary. The charts include all resources that meet the parameter criteria, not only resources with missing time. This gives you visibility into all of the timesheets for the periods selected when running the report. Therefore, the charts do not tie to the numbers represented in the body of the report. The amounts in the charts are summary numbers for all resources who should be entering time in the time periods of the report.
The Timesheet Count Summary chart displays timesheet counts for the categories of Completed, Partial, and Missing. A completed timesheet is a timesheet where the hours entered on the timesheet are greater than or equal to the resource available hours for the time period. A partial timesheet is a timesheet where the hours entered on the timesheet are less than the resource available hours for the time period. A missing timesheet means that the timesheet has zero hours entered for the time period or a timesheet has not been created for the time period. If a resource meets the following criteria and the resource does not have a timesheet entered for the time period, then the resource is included in the report as having missing time: open for time entry, track mode of Classic PPM, either no date of hire or a date of hire less than the period end date, and either no termination date or a termination date greater than the period start date.
The Timesheet Hours Summary chart displays hours grouped by the categories of Available, Entered, Missing, and Overage. Available hours are the sum of available hours for the resources that meet the parameter criteria. Entered hours are the sum of the hours entered on the timesheets. Missing hours is the sum of available hours per time period minus hours entered on each timesheet. Overage hours are the sum of hours entered on each timesheet that are greater than the available hours per time period.

## Report Security

Security is determined by resource view rights.

## Financial Management Reports

The Financial Management reports provide visibility into financial plans and actual cost of investments across the organization. The reports include capital, expense, budget, and forecast analysis. One financial report also provides visibility into financial transactions, by resource and day, across investments.
The following reports are included with Financial Management reports:
- Financial Capitalization by Investment
- Financial Capitalization Detail
- Financial Forecast Review by Investment
- Financial Forecast Review by Plan Grouping
- Financial Budget vs. Forecast by Period
- Financial Budget vs. Forecast by Period Detail
- Investment Transaction Inquiry

## Financial Capitalization by Investment

The Financial Capitalization by Investment report displays capital and operating amounts for each investment. These amounts include: budget or planned, actual, remaining cost, and percent spent. The report offers the ability to group by up

to three options, which can be any combination of the following: Investment Manager, Business Owner, Investment Type, Project Type, and OBS Level. The following image shows the Financial Capitalization by Investment report displaying capital and operating amounts for each investment.
This report allows you to drill down to the Financial Capitalization Detail report, by clicking an investment name, to view amounts by fiscal month. The following image shows the Financial Capitalization Detail report that is grouped by business owner.
The following report example is grouped by two, of the possible three, grouping options. It is grouped first by OBS Level and second by Business Owner. The grouping options are fairly flexible, allowing you to summarize the data and subtotal it by various grouping attributes including: Investment Manager, Business Owner, Investment Type, Project Type, and OBS Level. These grouping options can be applied in any order so, for example, you can group first by OBS Level, second by Investment Type, and third by Investment Manager. Alternatively, you can group first by Investment Type, second by Investment Manager, and third by OBS Level. You can also group by one attribute or three attributes, offering a wide range of grouping and subtotaling options.


The following image shows the Financial Capitalization report that is grouped by OBS and business owner.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The investment must have at least one financial plan for the investment to display in the report. The report has a financial plan type parameter with the values of budget or planned so you can run the report for budget or cost plan amounts. If the financial plan type parameter is budget, then the investment must have at least one approved budget for the investment to display in the report. If the financial plan type parameter is planned, then the investment must have at least one cost plan for the investment to display in the report.
- The financial plan must have cost type selected as a grouping attribute and financial plan detail rows must exist for the capital and operating cost types. This report only includes financial plans that have cost type as a grouping attribute so if the financial plan does not group by cost type, then it does not display in the report.
- The investment must have a department OBS unit that is associated to it to create a cost plan on the investment. For a department OBS to be available to associate to an investment, first set up a department OBS and a location OBS Administration/Organization and Access-OBS) and associate them to the investment objects (for example, Application, Project, and so on) on which you can create financial plans. Next, create an entity (Administration/ Finance-Setup/Entities) and associate the department OBS and location OBS to the entity. On the entity, create fiscal time periods (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) for the period types (monthly, 13 periods, quarterly, annually) that you want to reference in creating financial plans. If you do not intend to plan by annual fiscal periods, still create them because the report requires them as explained in the next bullet item.
- There must be fiscal time periods, with a period type of annually, created (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) that cover the periods for which you have investment financial plans in Classic PPM. For example, if you have investments with monthly or quarterly budgets or cost plans for 2015 and 2015, then you must have annual fiscal periods that are created for 2015 and 2015 even though you are not creating budgets or cost plans by these annual periods. The report uses these annual periods to convert the budget and cost plan amounts entered so they can be reported by fiscal year, independent of how they are entered in the financial plans.
- There must be fiscal time periods, with a period type of monthly or 13 periods, created (Administration/Finance-Setup/ Entities-Fiscal Time Periods Tab). The Financial Capitalization Detail report displays amounts by fiscal period type of monthly or 13 periods, whichever you have set up in your system. If your financial plans are entered by period types of


monthly or 13 periods, then the amounts display in those periods in the report as they do in the financial plan. If your financial plans are entered by period types of quarterly or annually, then the amounts display in the first month of the quarter or first month of the year, respectively. The quarter and annual amounts entered in the financial plan are not spread evenly across months in the report; they are included in the first month corresponding to the quarter or year in which the amounts are entered.

### Report Properties

The following values list the report properties:
Name: Financial Capitalization by Investment
Resource ID: CSK_FIN_CapitalizationByInv
Description: Financial Management (PMO Accelerator)
Folder: Clarity /Reports/Financial Management/Financial Capitalization by Investment
Path: /ca_ppm/reports/financial_management/CSK_FIN_CapitalizationByInv
Data Source: Clarity Data Warehouse Bean Data Source

### Report Parameter Options

The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Investment OBS Type investmentOBSTypeKey_1

Single-select Query

Investment OBS Unit investmentOBSUnitKey_1

Single-select Query

Investment Type investmentTypeKey_1

Multiple-select Query

Investment Manager investmentManagerKey_1

Multiple-select Query

Investment investmentKey_1

Multiple-select Query

Investment Status investmentStatusKey_1

Multiple-select Query

Financial Plan Type financialPlanTypeKey_1

Single-select List of Values

Fiscal Year fiscalYearKey_1

Multiple-select Query

Report Currency currencyKey_1

Single-select Query

% Spent Threshold pctSpentThreshold

Single Value Number

Group By 1

Single-select

groupInvManagerBusOwnerOBS1List of Values

Group By 2

Single-select

groupInvManagerBusOwnerOBS2List of Values

Group By 3

Single-select

groupInvManagerBusOwnerOBS3List of Values

Input Control Name Input Control Resource ID

Mandatory Default Value

Investment OBS Type

No

investmentOBSTypeKey_1

Investment OBS Unit

No

investmentOBSUnitKey_1

Investment Type

Yes

investmentTypeKey_1

All

Investment Manager

No

investmentManagerKey_1

Investment

No

investmentKey_1

Investment Status

No

investmentStatusKey_1

Financial Plan Type financialPlanTypeKey_1

Yes Planned

Fiscal Year

Yes

fiscalYearKey_1

Report Currency

No

currencyKey_1

% Spent Threshold

Yes

pctSpentThreshold


Group By 1

Yes

groupInvManagerBusOwnerOBS1No Grouping

Group By 2

Yes

groupInvManagerBusOwnerOBS2No Grouping

Group By 3

Yes

groupInvManagerBusOwnerOBS3No Grouping


Prompt Text Parameter Name
Include Inactive Investments? includeInactiveInvestments
Database Schema dwhDBSchema

Boolean Hidden

Type

UI Theme ppmUserUITheme

Hidden

Language ppmUserLanguage

Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID
Include Inactive Investments? includeInactiveInvestments
Not Applicable

Mandatory Default Value No Unchecked
Yes
Passed through Classic PPM

Not Applicable

Yes Passed through Classic PPM

Not Applicable

Yes Passed through Classic PPM

Not Applicable

Yes Passed through Classic PPM

### Parameter Lookup Values

The following values list the lookup values:
Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Financial Plan Type: Budget, Planned
Group By 1, 2 and 3: No Grouping, Investment Manager, Business Owner, Investment Type, Project Type, OBS Level 1-10

### Parameter Explanations

The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control which investments display in the report.
- The Investment OBS Unit parameter displays values that are based upon the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Financial Plan Type parameter allows you to select which type of financial plan to include in the report. You can run the report to display budget amounts from the budget or planned amounts from the cost plan. This option is available because sometimes cost plans are implemented without budgets so this parameter gives you the flexibility to select which plan type to show in the report. The Financial Plan Type parameter works as follows:
- Budget. The budget amounts in the report are based on the current approved budget. The preceding screen captures were run with the option of planned. If they were run with the option of budget, then they would display the word budget where they display the word planned in the main report column headings and subreport row labels
- Planned. The planned amounts in the report are based on the current cost plan of record. The preceding screen captures display the amounts as planned because this is the parameter value that is selected when running the report.
- The Fiscal Year parameter allows you to control which costs, from the financial plans and actual transactions, are included in the report. When you select a fiscal year, the budget or planned amounts are restricted to only display the amounts within the fiscal year you select. The same applies to actual amounts. You can view costs for one or several


fiscal years, regardless of whether the financial plans are entered by period types of monthly, 13 periods, quarterly, or annually.
- The Report Currency parameter allows you to convert the amounts in the report to one currency for reporting purposes. If you select a currency in the parameter, then the amounts in the report is converted into that currency per the exchange rates set up in the product, if the report currency is different from the investment currency. If you do not select a currency in the parameter, then the report displays amounts in the entity home currency of the department that is associated to the investment. To use this Report Currency parameter to convert currencies, you must have multi-currency enabled in your installation of the product (Administration/Finance-Setup/Defaults). In the Currency section, there is a System field that must be set to Multi Currency. In addition to enabling multi-currency, also activate the currencies you want to use in the product (Administration/Finance-Setup/Currency). Lastly, set up foreign exchange rates in the product (Administration/Finance-Setup/Foreign Exchange Rates). The report uses exchange rates with an exchange rate type of 'Average' so set up exchange rates of this type.
- The % Spent Threshold parameter allows you to control when the background color changes from yellow to red for the % spent columns in the report. If the % spent in the report is less or equal to 100%, then the background color is green. If the % spent is greater than 100%, then it is yellow until it reaches the % spent threshold that is entered as a parameter. Amounts that are greater than the threshold are red. In the preceding screen captures, the % spent threshold parameter that is entered when running the report is 10%. Entering a value of 10% means that the % spent turns red when it is greater than 110%. Enter 10% as the threshold, not 110%.
- The report has Group By 1, 2, and 3 parameters that allow you to control how the report is grouped. You can group the report by up to three options, which can be any combination of the following grouping options:
- No Grouping This option does not group the report so you can select this value if you do not want to do a grouping
for one of the group by options
- Investment Manager This option groups the report by investment manager.
- Business Owner This option groups the report by business owner.
- Investment Type This option groups the report by investment type. The values for investment type are: Application,
Asset, Idea, Other Work, Product, Project, and Service
- Project Type This option groups the report by project type. The values for project type are: Major Project,
Application Change, and Infrastructure Deployment. The project type is a configurable lookup so values can be added, modified, or deactivated.
- OBS Level 1-10 This option groups the report by OBS level and requires that you select a unit in the investment OBS parameter to group by an OBS level. The investment OBS parameter and grouping by an OBS level work with one another. The investment OBS parameter determines which OBS you group by when you select a group by level. You can group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS supported in the product. OBS level 1 is the top level in the hierarchy and OBS level 10 is bottom level in the hierarchy. When you group by an OBS level, the investments that are attached to OBS units at the level you select and any units below the level you select are rolled up to the group by level of the report. If you group by an OBS level that is lower in the hierarchy, then the report groups the investments by this level (for example, OBS Level 4). If investments are associated to units higher than level 4 (for example, investments are attached to levels 2 and 3), then the investments that are associated to units higher in the hierarchy display in the report in an Undefined grouping. The Undefined grouping indicates that there is no OBS unit that is defined for the investment at the level by which you are grouping. If you group by an OBS level but you do not select a unit in the investment OBS parameter, then the report returns results. However, it will not group by an OBS level because it relies on the investment OBS parameter to determine which OBS to use for grouping.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.

### Report Fields and Calculations

The report displays the investment name, investment start date, and investment finish date. If the financial plan type parameter is set to budget, then the report displays the following columns: budget, capital budget, capital actual, capital budget remaining, capital % spent, operating budget, operating actual, operating budget remaining, and operating % spent. For budgets, the report only includes the current approved budget amounts. If the financial plan type parameter is

set to planned, then the report displays the following columns: planned, capital planned, capital actual, capital planned remaining, capital % spent, operating planned, operating actual, operating planned remaining, and operating % spent. For planned, the report only includes the current plan of record cost plan amounts.
The report requires cost types with IDs of 'CAPITAL' and 'OPERATING'. Financial plans must be grouped by cost type for amounts to display in this report. The current approved budget or cost plan of record is the only financial plan included. The plan of record for the cost plan is the one designated as plan of record. The plan of record for the budget is current approved budget. Budget and cost plans are included; benefit plans are excluded.
If the report currency parameter is not selected, then the report will display all investments in their home currency. This is the entity home currency of the department that is associated to the investment. In this case, an extra currency column displays in the report to the right of the investment name to give visibility into the currency of the investment because the investments can be in different currencies. If the report currency parameter is set to a currency, then all the investments in the report are converted from their home currency to the report currency, if the two are different, so you can view all investments in the same currency. In this case, the currency is displayed in parentheses in the report title instead of as a column in the report because all the investments are in the same report currency. In order to use the report currency parameter for converting amounts, your Classic PPM installation must have multi-currency enabled. Currency conversions are calculated based on the foreign exchange rates set up with a type of average. They are also based on the current date so the exchange rate effective date must be the same or earlier than the current date. With these conditions met, the exchange rate effective date closest to the current date is the exchange rate that is used for the conversions.
Actual financial transaction cost amounts only include transactions that are processed and posted. Any other status is a transaction that is adjusted, reversed or updated and those transactions are excluded. Actual financial transaction cost amounts are in the currency that is the entity home currency of the department that is associated to the investment. The report displays amounts that are based on the fiscal year parameter selected. This report contains the following calculations, which are all subject to the fiscal year parameter:
- Budget or Planned This is the approved budget or planned cost for the cost plan of record.
- Capital Budget or Planned Budget or Planned Cost where the Cost Type ID is 'CAPITAL'
- Capital Actual Actual Cost where the Cost Type ID is 'CAPITAL'
- Capital Budget or Planned Remaining Capital Budget or Planned
- Capital Actual
- Capital % Spent (Capital Actual / Capital Budget or Planned) x 100
Capital % Spent background color is determined as follows:
- Green. The % Spent is less than or equal to 100%.
- Yellow. The % Spent is greater than 100% and it exceeds 100% by a value that is less than or equal to the % Spent
threshold entered as a parameter.
- Red. The % Spent is greater than 100% and it exceeds 100% by a value that is greater than the % Spent threshold
entered as a parameter.
- Operating Budget or Planned.Budget or Planned Cost where the Cost Type ID is 'OPERATING'
- Operating Actual. Actual Cost where the Cost Type ID is 'OPERATING'
- Operating Budget or Planned Remaining. Operating Budget or Planned
- Operating Actual
- Operating % Spent (Operating Actual / Operating Budget or Planned) x 100 Operating % Spent background color is
determined as follows:
- Green. The % Spent is less than or equal to 100%.
- Yellow. The % Spent is greater than 100% and it exceeds 100% by a value that is less than or equal to the % Spent
threshold entered as a parameter.
- Red. The % Spent is greater than 100% and it exceeds 100% by a value that is greater than the % Spent threshold
entered as a parameter.

### Report Security

Security is determined by investment view rights.

## Financial Capitalization Detail

The Financial Capitalization Detail report displays the budget or planned, actual, and remaining amounts by fiscal month and in total for the fiscal year. The amounts are grouped by cost type (capital, operating) and transaction type (equipment, expenses, labor, and material). If there are labor actual amounts for the period, then the amounts are listed by resource name in the Actual Detail section of the report that follows the Labor section. If there are no labor actual amounts for the periods in the report, then the Actual Detail section does not display. The following image shows the Financial Capitalization Detail report displaying the budget or planned, actual, and remaining amounts by fiscal month and in total for the fiscal year.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The investment must have at least one financial plan for the investment to display in the report. The report has a financial plan type parameter with the values of budget or planned so you can run the report for budget or cost plan amounts. If the financial plan type parameter is budget, then the investment must have at least one approved budget for the investment to display in the report. If the financial plan type parameter is planned, then the investment must have at least one cost plan for the investment to display in the report.
- The financial plan must have cost type that is selected as a grouping attribute and financial plan detail rows must exist for the capital and operating cost types. This report only includes financial plans that have cost type as a grouping attribute so if the financial plan does not group by cost type, then it does not display in the report.
- The investment must have a department OBS unit that is associated to it to create a cost plan on the investment. For a department OBS to be available to associate to an investment, first set up a department OBS and a location OBS (Administration/Organization and Access-OBS) and associate them to the investment objects (for example, Application, Project, and so on) on which you create financial plans. Next, create an entity (Administration/FinanceSetup/Entities) and associate the department OBS and location OBS to the entity. On the entity, create fiscal time periods (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab ) for the period types (monthly, 13 periods, quarterly, annually) that you want to reference in creating financial plans. If you do not intend to plan by annual fiscal periods, still create the fiscal periods because the report requires them as explained in the next bullet item.
- There must be fiscal time periods, with a period type of annually, created (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) that cover the periods for which you have investment financial plans in the product. For example, if you have investments with monthly or quarterly budgets or cost plans for 2015 and 2016, then you must have annual


fiscal periods that are created for 2015 and 2016 even though you are not creating budgets or cost plans by these annual periods. The report uses these annual periods to convert the budget and cost plan amounts entered so they can be reported by fiscal year, independent of how they are entered in the financial plans.
- There must be fiscal time periods, with a period type of monthly or 13 periods, created (Administration/Finance-Setup/ Entities-Fiscal Time Periods Tab). The Financial Capitalization Detail report displays amounts by fiscal period type of monthly or 13 periods, whichever you have set up in your system. If your financial plans are entered by period types of monthly or 13 periods, then the amounts display in those periods in the report as they do in the financial plan. If your financial plans are entered by period types of quarterly or annually, then the amounts display in the first month of the quarter or first month of the year, respectively. The quarter and annual amounts that are entered in the financial plan are not spread evenly across months in the report; they are included in the first month corresponding to the quarter or year in which the amounts are entered.

### Report Properties

The following values list the report properties:
Name: Financial Capitalization Detail
Resource ID: CSK_FIN_CapitalizationByInvDetail
Description: Financial Management (PMO Accelerator)
Folder: Clarity /Reports/Financial Management/Financial Capitalization Detail
Path: /ca_ppm/reports/financial_management/CSK_FIN_CapitalizationByInvDetail
Data Source: Clarity Data Warehouse Bean Data Source

### Report Parameter Options

The following table lists the report parameter options.

Prompt Text Parameter Name
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Financial Plan Type financialPlanTypeKey_1
Fiscal Year fiscalYearKey_1
Report Currency currencyKey_1
% Spent Threshold pctSpentThreshold

Type Single-select Query Single-select Query Multiple-select Query Multiple-select Query Multiple-select Query Multiple-select Query Single-select List of Values Multiple-select Query Single-select Query Single Value Number

Input Control Name Input Control Resource ID
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Financial Plan Type financialPlanTypeKey_1
Fiscal Year fiscalYearKey_1
Report Currency currencyKey_1
% Spent Threshold pctSpentThreshold

Mandatory Default Value No
No
Yes All
No
No
No
Yes Planned Yes
No
Yes 10


Prompt Text Parameter Name
Include Inactive Investments? includeInactiveInvestments
Database Schema dwhDBSchema

Boolean Hidden

UI Theme ppmUserUITheme

Hidden

Language ppmUserLanguage

Hidden

User ID ppmUser

Hidden

Type


Input Control Name Input Control Resource ID Include Inactive Investments? includeInactiveInvestments Not Applicable
Not Applicable
Not Applicable
Not Applicable

Mandatory Default Value No Unchecked Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM

### Parameter Lookup Values

The following values list the lookup values:
Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Financial Plan Type: Budget, Planned

### Parameter Explanations

The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control which investments display in the report.
- The Investment OBS Unit parameter displays values that are based upon the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Financial Plan Type parameter allows you to select which type of financial plan to include in the report. You can run the report to display budget amounts from the budget or planned amounts from the cost plan. This option is available because sometimes cost plans are implemented without budgets so this parameter gives you the flexibility to select which plan type to show in the report. The Financial Plan Type parameter works as follows:
- Budget The budget amounts in the report are based on the current approved budget. The preceding screen captures were run with the option of planned. If they are run with the option of budget, then they display the word budget where they display the word "planned" in the main report column headings and subreport row labels.
- Planned The planned amounts in the report are based on the current cost plan of record. The preceding screen captures display the amounts as planned because this is the parameter value that is selected when running the report.
- The Fiscal Year parameter allows you to control which costs, from the financial plans and actual transactions, are included in the report. When you select a fiscal year, the budget or planned amounts are restricted to only display the amounts within the fiscal year you select. The same applies to actual amounts. You can view costs for one or several fiscal years, regardless of whether the financial plans are entered by period types of monthly, 13 periods, quarterly, or annually.
- The Report Currency parameter allows you to convert the amounts in the report to one currency for reporting purposes. If you select a currency in the parameter, then the amounts in the report are converted into that currency per the exchange rates set up in Clarity, if the report currency is different from the investment currency. If you do not select a currency in the parameter, then the report displays amounts in the entity's home currency of the department that is associated to the investment. In order to use this Report Currency parameter to convert currencies, enable multicurrency in your installation of the product (Administration/Finance-Setup/Defaults). In the Currency section, there is


a System field that must be set to Multi Currency. In addition to enabling multi-currency, also activate the currencies that you want to use in in the product (Administration/Finance-Setup/Currency). Lastly, set up Foreign Exchange rates in the product (Administration/Finance-Setup/Foreign Exchange Rates). The report uses exchange rates with an Exchange Rate Type of 'Average' so you must set up exchange rates of this type.
- The % Spent Threshold parameter allows you to control when the background color changes from yellow to red for the % spent columns in the report. If the % spent in the report is less or equal to 100%, then the background color is green. If the % spent is greater than 100%, then it is yellow until it reaches the % spent threshold that is entered as a parameter. Amounts that are greater than the threshold is red. In the preceding screen captures, the % spent threshold parameter that is entered when running the report is 10%. Entering a value of 10% means that the % spent turns red when it is greater than 110%. You should enter 10% as the threshold, not 110%.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.

### Report Fields and Calculations

The report is grouped by investments and it displays budget or planned, actual, and remaining cost amounts that are grouped by cost type and transaction type. The financial plan type parameter determines if the report displays budget or planned, same as with the main report. If there are labor actual costs in at least one period, the report displays an actual detail section that shows the actual labor cost amounts by resource. The report shows all cost amounts by fiscal period type of monthly or 13 periods, depending upon the fiscal period type you have set up for the investment entity. It also displays a total for the fiscal year. If the report is run for more than one fiscal year, then there is a page break in the report for each fiscal year so each fiscal year begins on a new page.
The report requires cost types with IDs of 'CAPITAL' and 'OPERATING'. Financial plans must be grouped by cost type for amounts to display in this report. The current approved budget or cost plan of record is the only financial plan included. The plan of record for the cost plan is the one designated as plan of record. The plan of record for the budget is current approved budget. Budget and cost plans are included; benefit plans are excluded.
If the report currency parameter is not selected, then the report displays all investments in their home currency. This is the entity home currency of the department that is associated to the investment. In this case, an extra currency column displays in the report to the right of the investment name to give visibility into the currency of the investment because the investments can be in different currencies. If the report currency parameter is set to a currency, then all the investments in the report are converted from their home currency to the report currency, if the two are different, so you can view all investments in the same currency. In this case, the currency is displayed in parentheses in the report title instead of as a column in the report because all the investments are in the same report currency. In order to use the report currency parameter for converting amounts, your Classic PPM installation must have multi-currency enabled. Currency conversions are calculated based on the foreign exchange rates set up with a type of average. They are also based on the current date so the exchange rate effective date must be the same or earlier than the current date. With these conditions met, the exchange rate effective date closest to the current date is the exchange rate that is used for the conversions.
Actual financial transaction cost amounts only include transactions that are processed and posted. Any other status is a transaction that is adjusted, reversed, or updated and those transactions are excluded. Actual financial transaction cost amounts are in the currency that is the entity home currency of the department that is associated to the investment.
The remaining amounts have a green background color if they are positive numbers or zero because this means that budget or planned exceeds actual. The remaining amounts have a background color of red if they are negative numbers because this means that actuals exceed budget or planned.

### Report Security

Security is determined by investment view rights.

## Financial Forecast Review by Investment

The Financial Forecast Review by Investment report displays budget or planned, actual, and forecast cost amounts with variances for each investment. The report offers the ability to group by up to three options, which can be any combination of the following: Investment Manager, Business Owner, Investment Type, Project Type, and OBS Level. The following image shows the Financial Forecast Review by Investment report displaying information that is grouped by business owner.
The following report example is grouped by two, of the possible three, grouping options. It is grouped first by OBS Level and second by Business Owner. The grouping options are fairly flexible, allowing you to summarize the data and subtotal it by various grouping attributes including: Investment Manager, Business Owner, Investment Type, Project Type, and OBS Level. These grouping options can be applied in any order so, for example, you can group first by OBS Level, second by Investment Type, and third by Investment Manager. Alternatively, you can group first by Investment Type, second by Investment Manager, and third by OBS Level. You can also group by one attribute or three attributes, offering a wide range of grouping and subtotaling options. The following image shows the Financial Forecast Review by Investment report displaying information that is grouped by OBS and business owner.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The investment must have at least one financial plan for the investment to display in the report. The report has a financial plan type parameter with the values of budget or planned so you can run the report for budget or cost plan amounts. If the financial plan type parameter is budget, then the investment must have at least one approved budget for the investment to display in the report. If the financial plan type parameter is planned, then the investment must have at least one cost plan for the investment to display in the report.
- The investment must have a department OBS unit that is associated to it to create a cost plan on the investment. For a department OBS to be available to associate to an investment, first set up a department OBS and a location OBS (Administration/Organization and Access-OBS) and associate them to the investment objects (for example, Application, Project, and so on) on which you create financial plans. Next, create an entity (Administration/FinanceSetup/Entities) and associate the department OBS and location OBS to the entity. On the entity, create fiscal time periods (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) for the period types (monthly, 13 periods, quarterly, annually) that you want to reference in creating financial plans. If you do not intend to plan by annual fiscal periods, still create them because the report requires them as explained in the next bullet item.
- There must be fiscal time periods, with a period type of annually, created (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) that cover the periods for which you have investment financial plans in the product. For example, if you have investments with monthly or quarterly budgets or cost plans for 2015 and 2016, then you must have annual fiscal periods that are created for 2015 and 2016 even though you are not creating budgets or cost plans by these annual periods. The report uses these annual periods to convert the budget and cost plan amounts entered so they can be reported by fiscal year, independent of how they are entered in the financial plans.
- There must be fiscal time periods, with a period type of monthly or 13 periods, created (Administration/Finance-Setup/ Entities-Fiscal Time Periods Tab). There is an as of date parameter that is evaluated to the end of the fiscal period in which it falls, by comparing it to fiscal periods with a type of monthly or 13 periods, whichever you have set up in your system. If you do not have fiscal periods with a type of monthly or 13 periods, then the report cannot evaluate the as of date parameter to a fiscal period to calculate actuals to date and forecast (calculated). Report Properties The following values list the report properties:


Name: Financial Forecast Review by Investment Resource ID: CSK_FIN_ForecastReviewByInv Description: Financial Management (PMO Accelerator) Folder: Clarity /Reports/Financial Management/Financial Forecast Review Path: /ca_ppm/reports/financial_management/CSK_FIN_ForecastReviewByInv Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Investment OBS Type investmentOBSTypeKey_1

Single-select Query

Investment OBS Unit investmentOBSUnitKey_1

Single-select Query

Investment Type investmentTypeKey_1

Multiple-select Query

Investment Manager investmentManagerKey_1

Multiple-select Query

Investment investmentKey_1

Multiple-select Query

Investment Status investmentStatusKey_1

Multiple-select Query

Financial Plan Type financialPlanTypeKey_1

Single-select List of Values

Fiscal Year fiscalYearKey_1

Multiple-select Query

Report Currency currencyKey_1

Single-select Query

% Spent Threshold pctSpentThreshold

Single Value Number

% of Plan Type Threshold pctOfPlanTypeThreshold

Single Value Number

Group By 1

Single-select

groupInvManagerBusOwnerOBS1List of Values

Group By 2

Single-select

groupInvManagerBusOwnerOBS2List of Values

Group By 2

Single-select

groupInvManagerBusOwnerOBS3List of Values

Include Inactive Investments? Boolean includeInactiveInvestments

Database Schema dwhDBSchema

Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Investment OBS Type

No

investmentOBSTypeKey_1

Investment OBS Unit

No

investmentOBSUnitKey_1

Investment Type

Yes

investmentTypeKey_1

All

Investment Manager

No

investmentManagerKey_1

Investment

No

investmentKey_1

Investment Status

No

investmentStatusKey_1

Financial Plan Type financialPlanTypeKey_1

Yes Planned

Fiscal Year

Yes

fiscalYearKey_1

Report Currency

No

currencyKey_1

% Spent Threshold

Yes

pctSpentThreshold


% of Plan Type Threshold

Yes

pctOfPlanTypeThreshold


Group By 1

Yes

groupInvManagerBusOwnerOBS1No Grouping

Group By 2

Yes

groupInvManagerBusOwnerOBS2No Grouping

Group By 2

Yes

groupInvManagerBusOwnerOBS3No Grouping

Include Inactive Investments? No

includeInactiveInvestments

Unchecked

Not Applicable

Yes

Passed through Classic PPM


Prompt Text Parameter Name UI Theme ppmUserUITheme
Language ppmUserLanguage
User ID ppmUser

Hidden

Type

Hidden

Hidden


Input Control Name Input Control Resource ID Not Applicable
Not Applicable
Not Applicable

Mandatory Default Value Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM

### Parameter Lookup Values

The following values list the lookup values:
Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Financial Plan Type: Budget, Planned
Group By 1, 2 and 3: No Grouping, Investment Manager, Business Owner, Investment Type, Project Type, OBS Level 1-10

### Parameter Explanations

The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control which investments display in the report.
- The Investment OBS Unit parameter displays values that are based on the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Financial Plan Type parameter allows you to select which type of financial plan to include in the report. You can run the report to display budget amounts from the budget or planned amounts from the cost plan. This option is available because sometimes cost plans are implemented without budgets so this parameter gives you the flexibility to select which plan type to show in the report. The Financial Plan Type parameter works as follows:
- Budget. The budget amounts in the report are based on the current approved budget. The preceding screen captures display the amounts as budget because this is the parameter value that is selected when running the report.
- Planned. The planned amounts in the report are based on the current cost plan of record. The preceding screen captures were run with the option of budget. If they are run with the option of planned, then they display the word "planned" where they display the word "budget" in the report and subreport column headings.
- The Fiscal Year parameter allows you to control which costs, from the financial plans and actual transactions, are included in the report. When you select a fiscal year, the budget or planned amounts are restricted to only display the amounts within the fiscal year you select. The same applies to actual amounts. You can view costs for one or several fiscal years, regardless of whether the financial plans are entered by period types of monthly, 13 periods, quarterly, or annually.
- The Report Currency parameter allows you to convert the amounts in the report to one currency for reporting purposes. If you select a currency in the parameter, then the amounts in the report are converted into that currency per the exchange rates set up in Clarity, if the report currency is different from the investment currency. If you do not select a currency in the parameter, then the report displays amounts in the entity home currency of the department that is associated to the investment. In order to use this Report Currency parameter to convert currencies, enable multi-currency in your product installation (Administration/Finance-Setup/Defaults). In the Currency section, there is a System field that must be set to Multi Currency. In addition to enabling multi-currency, also activate the currencies that you want to use in the product (Administration/Finance-Setup/Currency). Lastly, set up Foreign Exchange rates in the


product (Administration/Finance-Setup/Foreign Exchange Rates). The report uses exchange rates with an Exchange Rate Type of 'Average' so you must set up exchange rates of this type.
- The % Spent Threshold parameter allows you to control when the background color changes from yellow to red for the % spent column in the report. If the % spent in the report is less or equal to 100%, then the background color is green. If the % spent is greater than 100%, then it is yellow until it reaches the % spent threshold that is entered as a parameter. Amounts that are greater than the threshold is red. In the preceding screen captures, the % spent threshold parameter that is entered when running the report is 10%. Entering a value of 10% means that the % spent turns red when it is greater than 110%. Enter 10% as the threshold, not 110%.
- The % of Plan Type Threshold parameter allows you to control when the background color changes from yellow to red for the % of budget or planned column in the report. If the % of budget or planned in the report is less or equal to 100%, then the background color is green. If the % of budget or planned is greater than 100%, then it is yellow until it reaches the % of plan type threshold that is entered as a parameter. Amounts that are greater than the threshold are red. In the preceding screen captures, the % of plan type threshold parameter that is entered when running the report is 10%. Entering a value of 10% means that the % of budget or planned turns red when it is greater than 110%. Enter 10% as the threshold, not 110%.
- The report has Group By 1, 2, and 3 parameters that allow you to control how the report is grouped. You can group the report by up to three options, which can be any combination of the following grouping options:
- No Grouping. This option does not group the report so you can select this value if you do not want to do a grouping
for one of the groups by options.
- Investment Manager. This option groups the report by investment manager.
- Business Owner. This option groups the report by business owner.
- Investment Type. This option groups the report by investment type. The values for investment type are:
Application, Asset, Idea, Other Work, Product, Project, and Service.
- Project Type. This option groups the report by project type. The values for project type are: Major Project,
Application Change, and Infrastructure Deployment. The Project Type is a configurable lookup so values can be added, modified, or deactivated.
- OBS Level 1-10. This option groups the report by OBS level and requires that you select a unit in the investment OBS parameter to group by an OBS level. The investment OBS parameter and grouping by an OBS level work with one another. The investment OBS parameter determines which OBS you group by when you select a group by level. You can group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS supported in the product. OBS level 1 is the top level in the hierarchy and OBS level 10 is bottom level in the hierarchy. When you group by an OBS level, the investments that are attached to OBS units at the level you select and any units below the level you select are rolled up to the group by level of the report. If you group by an OBS level that is lower in the hierarchy, then the report groups the investments by this level (for example , OBS Level 4). If investments are associated to units higher than level 4 (for example, investments are attached to levels 2 and 3), then the investments that are associated to units higher in the hierarchy display in the report in an Undefined grouping. The Undefined grouping indicates that there is no OBS unit that is defined for the investment at the level by which you are grouping. If you group by an OBS level but you do not select a unit in the investment OBS parameter, then the report returns results. However, the report does not group by an OBS level because it relies on the investment OBS parameter to determine which OBS to use for grouping.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.

### Report Fields and Calculations

The report displays the investment name, investment start date, and investment finish date. If the financial plan type parameter is set to budget, then the report displays the following columns: budget, actual to date, budget remaining, % spent, forecast (calculated), forecast remaining, budget to forecast variance, and % of budget. For budgets, the report only includes the current approved budget amounts.

If the financial plan type parameter is set to planned, then the report displays the following columns: planned, actual to date, planned remaining, % spent, forecast (calculated), forecast remaining, planned to forecast variance, and % of planned. For planned, the report only includes the current plan of record cost plan amounts.
The current approved budget or cost plan of record is the only financial plan included. The plan of record for the cost plan is the one designated as plan of record. The plan of record for the budget is current approved budget. Budget and cost plans are included; benefit plans are excluded.
If the report currency parameter is not selected, then the report displays all investments in their home currency. This is the entity home currency of the department that is associated to the investment. In this case, an extra currency column displays in the report to the right of the investment name to give visibility into the currency of the investment because the investments can be in different currencies. If the report currency parameter is set to a currency, then all of the investments in the report are converted from their home currency to the report currency, if the two are different, so you can view all investments in the same currency. In this case, the currency is displayed in parentheses in the report title instead of as a column in the report because all of the investments are in the same report currency. In order to use the report currency parameter for converting amounts, your Classic PPM installation must have multi-currency enabled. Currency conversions are calculated based on the foreign exchange rates set up with a type of average. They are also based on the current date so the exchange rate effective date must be the same or earlier than the current date. With these conditions met, the exchange rate effective date closest to the current date is the exchange rate that is used for the conversions.
Actual financial transaction cost amounts only include transactions that are processed and posted. Any other status is a transaction that is adjusted, reversed, or updated and those transactions are excluded. Actual financial transaction cost amounts are in the currency that is the entity home currency of the department that is associated to the investment.
This report contains the following calculations, which are all subject to the fiscal year parameter:
- Budget or Planned. This is the approved budget or planned cost for the cost plan of record.
- Actual To Date This is the actual cost posted during the fiscal period.
- Budget or Planned Remaining. Budget or Planned
- Actual To Date
- % Spent. (Actual To Date / Budget or Planned) x 100
% Spent background color is determined as follows:
- Green. The % Spent is less than or equal to 100%.
- Yellow. The % Spent is greater than 100% and it exceeds 100% by a value that is less than or equal to the % Spent
threshold entered as a parameter.
- Red. The % Spent is greater than 100% and it exceeds 100% by a value that is greater than the % Spent threshold
entered as a parameter.
- Forecast (Calculated) This is the actual cost posted through the prior fiscal period plus the planned cost beginning in
the current fiscal period.
- Forecast Remaining This is the actual cost posted through the last complete fiscal period plus the planned cost
remaining in the cost plan of record after the last complete fiscal period. For example, if the project's as of date is 05/20/2015, then forecast remaining is actual cost through 04/30/2015 plus planned cost in fiscal periods after the fiscal period ending 04/30/2015.
- Budget or Planned to Forecast Variance Budget or Planned
- Forecast (Calculated)
- % of Budget or Planned (Forecast (Calculated) / Budget or Planned) x 100 % of Budget or Planned background color is as follows:
- Green. The % of Budget or Planned is less than or equal to 100%.
- Yellow. The % of Budget or Planned is greater than 100% and it exceeds 100% by a value that is less than or equal
to the % of Plan Type threshold that is entered as a parameter.
- Red. The % of Budget or Planned is greater than 100% and it exceeds 100% by a value that is greater than the %
of Plan Type threshold that is entered as a parameter.

### Report Security

Security is determined by investment view rights.

## Financial Forecast Review by Plan Grouping

The Financial Forecast Review by Plan Grouping report displays budget or planned, actual, and forecast cost amounts with variances for each investment, grouped by up to two financial plan grouping attributes. The report has parameters for you to select the financial plan group by attributes when you run the report and you can select any of the attributes that are supported as financial plan grouping attributes. The following image shows the Financial Forecast Review by Plan Grouping report displaying budget or planned, actual, and forecast cost amounts with variances for each investment.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The investment must have at least one financial plan for the investment to display in the report. The report has a financial plan type parameter with the values of budget or planned so you can run the report for budget or cost plan amounts. If the financial plan type parameter is budget, then the investment must have at least one approved budget for the investment to display in the report. If the financial plan type parameter is planned, then the investment must have at least one cost plan for the investment to display in the report.
- The investment must have a department OBS unit that is associated to it to create a cost plan on the investment. For a department OBS to be available to associate to an investment, first set up a department OBS and a location OBS (Administration/Organization and Access-OBS) and associate them to the investment objects (for example, Application, Project, and so on) on which you create financial plans. Next, create an entity (Administration/FinanceSetup/Entities) and associate the department OBS and location OBS to the entity. On the entity, create fiscal time periods (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) for the period types (monthly, 13 periods, quarterly, annually) that you want to reference in creating financial plans. If you do not intend to plan by annual fiscal periods, still create them because the report requires them as explained in the next bullet item.
- There must be fiscal time periods, with a period type of annually, created (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) that cover the periods for which you have investment financial plans in the product. For example, if you have investments with monthly or quarterly budgets or cost plans for 2015 and 2016, then you must have annual fiscal periods that are created for 2015 and 2016 even though you are not creating budgets or cost plans by these


annual periods. The report uses these annual periods to convert the budget and cost plan amounts entered so they can be reported by fiscal year, independent of how they are entered in the financial plans.
- There must be fiscal time periods, with a period type of monthly or 13 periods, created (Administration/Finance-Setup/ Entities-Fiscal Time Periods Tab). There is an as of date parameter that is evaluated to the end of the fiscal period in which it falls, by comparing it to fiscal periods with a type of monthly or 13 periods, whichever you have set up in your system. If you do not have fiscal periods with a type of monthly or 13 periods, then the report cannot evaluate the as of date parameter to a fiscal period to calculate actuals to date and forecast (calculated).

### Report Properties

The following values list the report properties:
Name: Financial Forecast Review by Plan Grouping
Resource ID: CSK_FIN_ForecastRevByPlanGroup
Description: Financial Management (PMO Accelerator)
Folder: Clarity /Reports/Financial Management/Financial Forecast Review by Plan Grouping
Path: /ca_ppm/reports/financial_management/CSK_FIN_ForecastRevByPlanGroup
Data Source: Clarity Data Warehouse Bean Data Source

### Report Parameter Options

The following table lists the report parameter options.

Prompt Text Parameter Name
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Financial Plan Type financialPlanTypeKey_1
Fiscal Year fiscalYearKey_1
Report Currency currencyKey_1
% Spent Threshold pctSpentThreshold
% of Plan Type Threshold pctOfPlanTypeThreshold
Financial Plan Group By 1 groupfinancialPlan1

Type Single-select Query Single-select Query Multiple-select Query Multiple-select Query Multiple-select Query Multiple-select Query Single-select List of Values Multiple-select Query Single-select Query Single Value Number Single Value Number Single-select List of Values

Input Control Name Input Control Resource ID
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Financial Plan Type financialPlanTypeKey_1
Fiscal Year fiscalYearKey_1
Report Currency currencyKey_1
% Spent Threshold pctSpentThreshold
% of Plan Type Threshold pctOfPlanTypeThreshold
Financial Plan Group By 1 groupfinancialPlan1

Mandatory Default Value No
No
Yes All No
No
No
Yes Planned Yes
No
Yes 10 Yes 10 Yes


Prompt Text Parameter Name
Financial Plan Group By 2 groupfinancialPlan2
Include Inactive Investments? includeInactiveInvestments
Database Schema dwhDBSchema

Type Single-select List of Values Boolean Hidden

UI Theme ppmUserUITheme

Hidden

Language ppmUserLanguage

Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID Financial Plan Group By 2 groupfinancialPlan2 Include Inactive Investments? includeInactiveInvestments Not Applicable
Not Applicable
Not Applicable
Not Applicable

Mandatory Default Value No
No Unchecked Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM

### Parameter Lookup Values

The following values list the lookup values:
Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Financial Plan Type: Budget, Planned
Financial Plan Group By 1 and 2: Charge Code, Cost Type, Department, Input Type Code, Location, Resource, Resource Class, Role, Transaction Class, User Value 1, User Value 2

### Parameter Explanations

The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used which investments display in the report.
- The Investment OBS Unit parameter displays values that are based on the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Financial Plan Type parameter allows you to select which type of financial plan to include in the report. You can run the report to display budget amounts from the budget or planned amounts from the cost plan. This option is available because sometimes cost plans are implemented without budgets so this parameter gives you the flexibility to select which plan type to show in the report. The Financial Plan Type parameter works as follows:
- Budget The budget amounts in the report are based on the current approved budget. The preceding screen capture displays the amounts as budget because this is the parameter value that is selected when running the report.
- Planned The planned amounts in the report are based on the current cost plan of record. The above screen capture was run with the option of budget. If it is run with the option of planned, then it displays the word "planned" where it displays the word "budget" in the report column headings.
- The Fiscal Year parameter allows you to control which costs, from the financial plans and actual transactions, are included in the report. When you select a fiscal year, the budget or planned amounts are restricted to only display the amounts within the fiscal year you select. The same applies to actual amounts. You can view costs for one or several


fiscal years, regardless of whether the financial plans are entered by period types of monthly, 13 periods, quarterly, or annually.
- The Report Currency parameter allows you to convert the amounts in the report to one currency for reporting purposes. If you select a currency in the parameter, then the amounts in the report are converted into that currency per the exchange rates set up in the product, if the report currency is different from the investment currency. If you do not select a currency in the parameter, then the report displays amounts in the entity home currency of the department that is associated to the investment. In order to use this Report Currency parameter to convert currencies ,enable multi-currency in your installation of the product (Administration/Finance-Setup/Defaults). In the Currency section, there is a System field that must be set to Multi Currency. In addition to enabling multi-currency, also activate the currencies that you want to use in the product (Administration/Finance-Setup/Currency). Lastly, set up Foreign Exchange rates in the product (Administration/ Finance-Setup/Foreign Exchange Rates). The report uses exchange rates with an Exchange Rate Type of 'Average' so you must set up exchange rates of this type.
- The % Spent Threshold parameter allows you to control when the background color changes from yellow to red for the % spent column in the report. If the % spent in the report is less or equal to 100%, then the background color is green. If the % spent is greater than 100%, then it is yellow until it reaches the % spent threshold that is entered as a parameter. Amounts that are greater than the threshold are red. In the preceding screen capture, the % spent threshold parameter that is entered when running the report is 10%. Entering a value of 10% means that the % spent turns red when it is greater than 110%. Enter 10% as the threshold, not 110%.
- The % of Plan Type Threshold parameter allows you to control when the background color changes from yellow to red for the % of budget or planned column in the report. If the % of budget or planned in the report is less or equal to 100%, then the background color is green. If the % of budget or planned is greater than 100%, then it is yellow until it reaches the % of plan type threshold that is entered as a parameter. Amounts that are greater than the threshold are red. In the preceding screen capture, the % of plan type threshold parameter that is entered when running the report is 10%. Entering a value of 10% means that the % of budget or planned turns red when it is greater than 110%. Enter 10% as the threshold, not 110%.
- The report has Financial Plan Group By 1 and Financial Plan Group By 2 parameters that allow you to control how the report is grouped. You can group the report by up to two options, which can be any combination of the following grouping options:
- Charge Code. This option groups the report by charge code.
- Cost Type. This option groups the report by cost type.
- Department. This option groups the report by department.
- Input Type Code. This option groups the report by input type code.
- Location. This option groups the report by location.
- Resource. This option groups the report by resource.
- Resource Class. This option groups the report by resource class.
- Role This option groups the report by role.
- Transaction Class. This option groups the report by transaction class.
- User Value 1. This option groups the report by user value 1.
- User Value 2. This option groups the report by user value 2.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev,
or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.

### Report Fields and Calculations

The report displays the investment name, investment start date, and investment finish date. If the financial plan type parameter is set to budget, then the report displays the following columns: budget, actual to date, budget remaining, % spent, forecast (calculated), forecast remaining, budget to forecast variance, and % of budget. For budgets, the report only includes the current approved budget amounts. If the financial plan type parameter is set to planned, then the report displays the following columns: planned, actual to date, planned remaining, % spent, forecast (calculated), forecast

remaining, planned to forecast variance, and % of planned. For planned, the report only includes the current plan of record cost plan amounts.
The current approved budget or cost plan of record is the only financial plan included. The plan of record for the cost plan is the one designated as plan of record. The plan of record for the budget is current approved budget. Budget and cost plans are included; benefit plans are excluded.
If the report currency parameter is not selected, then the report displays all investments in their home currency. This is the entity home currency of the department that is associated to the investment. In this case, an extra currency column displays in the report to the right of the investment name to give visibility into the currency of the investment because the investments can be in different currencies. If the report currency parameter is set to a currency, then all the investments in the report are converted from their home currency to the report currency, if the two are different, so you can view all investments in the same currency. In this case, the currency is displayed in parentheses in the report title instead of as a column in the report because all of the investments are in the same report currency. In order to use the report currency parameter for converting amounts, your Classic PPM installation must have multi-currency enabled. Currency conversions are calculated based on the foreign exchange rates set up with a type of average. They are also based on the current date so the exchange rate effective date must be the same or earlier than the current date. With these conditions met, the exchange rate effective date closest to the current date is the exchange rate that is used for the conversions.
Actual financial transaction cost amounts only include transactions that are processed and posted. Any other status is a transaction that is adjusted, reversed, or updated and those transactions are excluded. Actual financial transaction cost amounts are in the currency that is the entity home currency of the department that is associated to the investment.
This report contains the following calculations, which are all subject to the fiscal year parameter:
- Budget or Planned This is the approved budget or planned cost for the cost plan of record.
- Actual To Date This is the actual cost posted during the fiscal period.
- Budget or Planned Remaining Budget or Planned
- Actual To Date
- % Spent (Actual To Date / Budget or Planned) x 100 % Spent background color is determined as follows:
- Green. The % Spent is less than or equal to 100%.
- Yellow. The % Spent is greater than 100% and it exceeds 100% by a value that is less than or equal to the % Spent
threshold entered as a parameter.
- Red. The % Spent is greater than 100% and it exceeds 100% by a value that is greater than the % Spent threshold
entered as a parameter.
- Forecast (Calculated) This is the actual cost posted through the prior fiscal period plus the planned cost beginning in
the current fiscal period.
- Forecast Remaining This is the actual cost posted through the last complete fiscal period plus the planned cost
remaining in the cost plan of record after the last complete fiscal period. For example, if the project's as of date is 05/20/2015, then forecast remaining is actual cost through 04/30/2015 plus planned cost in fiscal periods after the fiscal period ending 04/30/2015.
- Budget or Planned to Forecast Variance Budget or Planned
- Forecast (Calculated)
- % of Budget or Planned (Forecast (Calculated) / Budget or Planned) x 100 % of Budget or Planned background color is as follows:
- Green. The % of Budget or Planned is less than or equal to 100%.
- Yellow. The % of Budget or Planned is greater than 100% and it exceeds 100% by a value that is less than or equal
to the % of Plan Type threshold that is entered as a parameter.
- Red. The % of Budget or Planned is greater than 100% and it exceeds 100% by a value that is greater than the %
of Plan Type threshold that is entered as a parameter.

### Report Security

Security is determined by investment view rights.

## Financial Budget vs. Forecast by Period

The Financial Budget vs. Forecast by Period report displays budget or planned cost, which is compared to forecast cost, with variances for each period and in total. The report offers the ability to group by up to two financial plan grouping attributes, which might be any combination of the following: Charge Code, Cost Type, Department, Input Type Code, Location, Resource, Resource Class, Role, Transaction Class, User Value 1, and User Value 2. The following image shows the Financial Budget vs. Forecast by Period report displaying budget or planned cost, which is compared to forecast cost.
This report also allows you to drill down to the Financial Budget vs. Forecast by Investment report, by clicking on the lowest level financial plan grouping attribute, to view amounts by investment. The following image shows the Financial Budget vs. Forecast by Investment report.

Report Prerequisites
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The investment must have at least one financial plan for the investment to display in the report. The report has a financial plan type parameter with the values of budget or planned so you can run the report for budget or cost plan amounts. If the financial plan type parameter is budget, then the investment must have at least one approved budget for the investment to display in the report. If the financial plan type parameter is planned, then the investment must have at least one cost plan for the investment to display in the report.
- The investment must have a department OBS unit that is associated to it to create a cost plan on the investment. For a department OBS to be available to associate to an investment, you must first set up a department OBS and a location OBS (Administration/Organization and Access-OBS) and associate them to the investment objects (for example, Application, Project) on which you create financial plans. Next, create an entity (Administration/FinanceSetup/Entities) and associate the department OBS and location OBS to the entity. On the entity, create fiscal time periods (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) for the period types (monthly, 13 periods, quarterly, annually) that you want to reference in creating financial plans. If you do not intend to plan by annual fiscal periods, still create the time periods because the report requires them as explained in the next bullet item.
- There must be fiscal time periods, with a period type of annually, created (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) that cover the periods for which you have investment financial plans in the product . For example, if you have investments with monthly or quarterly budgets or cost plans for 2015 and 2016, then you must have annual fiscal periods created for 2015 and 2016 even though you are not creating budgets or cost plans by these annual periods. The report uses these annual periods to convert the budget and cost plan amounts entered so they might be reported by fiscal year, independent of how they are entered in the financial plans.
- There must be fiscal time periods, with a period type of monthly or 13 periods, created (Administration/Finance-Setup/ Entities-Fiscal Time Periods Tab). There is an as of date parameter that is evaluated to the end of the fiscal period in which it falls, by comparing it to fiscal periods with a type of monthly or 13 periods, whichever you have set up in your system. If you do not have fiscal periods with a type of monthly or 13 periods, then the report cannot evaluate the as of date parameter to a fiscal period to calculate actuals to date and forecast (calculated). Report Properties The following values list the report properties: Name: Financial Budget vs. Forecast by Period


Resource ID: CSK_FIN_BudgetForecastByPeriod Description: Financial Management (PMO Accelerator) Folder: Clarity /Reports/Financial Management/Financial Budget vs. Forecast by Period Path: /ca_ppm/reports/financial_management/CSK_FIN_BudgetForecastByPeriod Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Financial Plan Type financialPlanTypeKey_1
Fiscal Year fiscalYearKey_1
Fiscal Period Type fiscalPeriodType
Report Currency currencyRequiredKey
Investment Type investmentTypeKey_1
Financial Plan Group By 1 groupfinancialPlan1
Financial Plan Group By 2 groupfinancialPlan2
Include Inactive Investments? includeInactiveInvestments
Database Schema dwhDBSchema

Type Single-select Query Single-select Query Multiple-select Query Multiple-select Query Multiple-select Query Single-select List of Values Multiple-select Query Single-select Query Single-select Query Multiple-select Query Single-select Query Single-select Query Boolean Hidden

UI Theme ppmUserUITheme

Hidden

Language ppmUserLanguage

Hidden

Input Control Name Input Control Resource ID Investment OBS Type investmentOBSTypeKey_1 Investment OBS Unit investmentOBSUnitKey_1 Investment Manager investmentManagerKey_1 Investment investmentKey_1 Investment Status investmentStatusKey_1 Financial Plan Type financialPlanTypeKey_1 Fiscal Year fiscalYearKey_1 Fiscal Period Type fiscalPeriodType Report Currency currencyRequiredKey Investment Type investmentTypeKey_1 Financial Plan Group By 1 groupfinancialPlan1 Financial Plan Group By 2 groupfinancialPlan2 Include Inactive Investments? includeInactiveInvestments Not Applicable
Not Applicable
Not Applicable

Mandatory Default Value No
No
No
No
No
Yes Budget Yes
Yes Monthly Yes
Yes All Yes Charge Code No
No Unchecked Yes Passed through Classic PPM Yes Passed through Classic PPM Yes Passed through Classic PPM


Prompt Text Parameter Name
User ID ppmUser

Hidden

Type


Input Control Name Input Control Resource ID
Not Applicable

Mandatory Default Value Yes
Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values.
Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Financial Plan Type: Budget, Planned
Fiscal Period Type: 13 Periods, Monthly, Quarterly, Annually
Financial Plan Group By 1 and 2: Charge Code, Cost Type, Department, Input Type Code, Location, Resource, Resource Class, Role, Transaction Class, User Value 1, User Value 2

### Parameter Explanations

The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control which investments display in the report.
- The Investment OBS Unit parameter displays values that are based upon the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Financial Plan Type parameter allows you to select which type of financial plan to include in the report. You can run the report to display budget amounts from the budget or planned amounts from the cost plan. This option is available because sometimes cost plans are implemented without budgets so this parameter gives you the flexibility to select which plan type to show in the report. The Financial Plan Type parameter works as follows:
- Budget. The budget amounts in the report are based on the current approved budget. The preceding screen capture displays the amounts as budget because this is the parameter value that is selected when running the report.
- Planned. The planned amounts in the report are based on the current cost plan of record. The preceding screen capture was run with the option of budget. If it is run with the option of planned, then it displays the word planned where it displays the word budget in the report title and row labels.
- The Fiscal Year parameter allows you to control which costs, from the financial plans and actual transactions, are included in the report. When you select a fiscal year, the budget or planned amounts are restricted to only display the amounts within the fiscal year you select. The same applies to actual amounts. You might view costs for one or several fiscal years, regardless of whether the financial plans are entered by period types of monthly, 13 periods, quarterly, or annually.
- The Fiscal Period Type parameter allows you to change the type of fiscal period that displays across the columns of the report. The following options are available:
- 13 Periods The report displays amounts by the 13 period fiscal period type.
- Monthly The report displays amounts by the monthly fiscal period type.
- Quarterly The report displays amounts by the quarterly fiscal period type.
- Annually The report displays amounts by the annually fiscal period type.
NOTE
If both Monthly and 13 Periods fiscal time periods per year exist, Monthly takes priority.


The Data Warehouse only loads one set of fiscal monthly period types. For example, if you have defined both 12 month and 13 month fiscal periods types, only the 12 month fiscal periods display.
- The Report Currency parameter allows you to convert the amounts in the report to one currency for reporting purposes. If you do not use multi-currency then all your investments are in the same currency and you only have one currency to select in the report currency parameter. In this case, the report displays amounts in the entity home currency of the department that is associated to the investment. If you use multi-currency, then you can select any currency you have active in the product as the report currency. When you select a currency in the parameter, the amounts in the report are converted into that currency per the exchange rates set up in the product, if the report currency is different from the investment currency. In order to use this Report Currency parameter to convert currencies, enable multi-currency in your installation of the product (Administration/Finance-Setup/Defaults). In the Currency section, there is a System field that must be set to Multi Currency. In addition to enabling multi-currency, also activate the currencies that you want to use in the product (Administration/Finance-Setup/Currency). Lastly, set up Foreign Exchange rates in the product (Administration/Finance-Setup/Foreign Exchange Rates). The report uses exchange rates with an Exchange Rate Type of 'Average' so you must set up exchange rates of this type.
- The report has Financial Plan Group By 1 and Financial Plan Group By 2 parameters that allow you to control how the report is grouped. You can group the report by up to two options, which can be any combination of the following grouping options:
- Charge Code. This option groups the report by charge code.
- Cost Type. This option groups the report by cost type.
- Department. This option groups the report by department.
- Input Type Code. This option groups the report by input type code.
- Location. This option groups the report by location.
- Resource. This option groups the report by resource.
- Resource Class. This option groups the report by resource class.
- Role. This option groups the report by role.
- Transaction Class. This option groups the report by transaction class.
- User Value 1. This option groups the report by user value 1.
- User Value 2. This option groups the report by user value 2.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev,
or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.
Report Fields and Calculations
The fields that display in the report depend on the following factors:
- The first column of the report is determined by the values that are selected in the following parameters:
- Financial plan group by 1
- Financial plan group by 2
- If the financial plan type parameter is set to budget, then the report displays budget cost, forecast cost, and variance. For budgets, the report only includes the current approved budget amounts. If the financial plan type parameter is set to planned, then the report displays planned cost, forecast cost, and variance. For planned, the report only includes the current plan of record cost plan amounts.
- For all fiscal period types except the 13 period type, the report displays up to twelve period columns and a total column. For the13 period type, the report displays up to thirteen period columns and total column. If you run the report for multiple fiscal years, the report displays additional fiscal periods on multiple pages.
- The current approved budget or the cost plan of record is the only financial plan included. Benefit plans are not included.
- If the report currency parameter is not selected, then the report displays all investments in their home currency. The home currency of the investment is the entity currency of the department that is associated to the investment. An extra currency column displays to the right of the investment name indicating the currency of the investment because

the investments may be in different currencies. If the report currency parameter is set, then all the investments in the report are converted from their home currency to the report currency. As all the investments are in the same report currency, the currency is displayed in parentheses in the report title instead of as a separate column. To use the report currency parameter for converting amounts, verify that the following prerequisites are completed:
- Your Clarity installation has multi-currency enabled.
- Foreign exchange rates are set up with a type of average. see Set Up Currencies and Foreign Exchange Rates for
details.
- The exchange rate effective date must be the same or earlier than the current date. The exchange rate effective
date that is closest to the current date is used for the conversions.
- Actual financial transaction cost amounts only include transactions that are processed and posted. Any other
status is a transaction that is adjusted, reversed, or updated and these transactions are excluded. Actual financial transaction cost amounts are in the currency that is the entity home currency of the department that is associated to the investment. This report contains the following calculations, which are all subject to the fiscal year parameter:
- Budget or Planned. This is the approved budget or planned cost for the cost plan of record.
- Forecast. Actuals + Forecast Remaining Forecast is the actual cost posted through the last complete fiscal period plus the planned cost remaining in the cost plan of record after the last complete fiscal period. For example, if the project's as of date is 05/20/2015, then forecast remaining is actual cost through 04/30/2015 plus planned cost in fiscal periods after the fiscal period ending 04/30/2015.
- Variance Budget or Planned
- Forecast Variance background color is as follows: Red. The Forecast exceeds Budget or Planned, which means the variance is a negative number. Report Security and Technical Details Security is determined by investment view rights.

## Financial Budget vs. Forecast by Period Detail

The Financial Budget vs. Forecast by Period Detail report displays budget or planned cost, which is compared to forecast cost, with variances for each period and in total. It shows the amounts for each investment that make up the financial plan grouping that you select when filtering or drilling from the main report. The following image shows the Financial Budget vs. Forecast by Period Detail report displaying budget or planned cost, which is compared to forecast cost.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The investment must have at least one financial plan for the investment to display in the report. The report has a financial plan type parameter with the values of budget or planned so you can run the report for budget or cost plan amounts. If the financial plan type parameter is budget, then the investment must have at least one approved budget for the investment to display in the report. If the financial plan type parameter is planned, then the investment must have at least one cost plan for the investment to display in the report.
- The investment must have a department OBS unit that is associated to it to create a cost plan on the investment. For a department OBS to be available to associate to an investment, first set up a department OBS and a location OBS (Administration/Organization and Access-OBS) and associate them to the investment objects (for example, Application, Project, and so on.) on which you create financial plans. Next, create an entity (Administration/FinanceSetup/Entities) and associate the department OBS and location OBS to the entity. On the entity, create fiscal time periods (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) for the period types (monthly, 13 periods, quarterly, annually) that you want to reference in creating financial plans. If you do not intend to plan by annual fiscal periods, still create them because the report requires them as explained in the next bullet item.
- There must be fiscal time periods, with a period type of annually, created (Administration/Finance-Setup/Entities-Fiscal Time Periods Tab) that cover the periods for which you have investment financial plans in the product. For example, if you have investments with monthly or quarterly budgets or cost plans for 2015 and 2016, then you must have annual fiscal periods that are created for 2015 and 2016 even though you are not creating budgets or cost plans by these annual periods. The report uses these annual periods to convert the budget and cost plan amounts entered so they can be reported by fiscal year, independent of how they are entered in the financial plans.
- There must be fiscal time periods, with a period type of monthly or 13 periods, created (Administration/Finance-Setup/ Entities-Fiscal Time Periods Tab). There is an as of date parameter that is evaluated to the end of the fiscal period in which it falls, by comparing it to fiscal periods with a type of monthly or 13 periods, whichever you have set up in your system. If you do not have fiscal periods with a type of monthly or 13 periods, then the report cannot evaluate the as of date parameter to a fiscal period to calculate actuals to date and forecast (calculated).


Report Properties The following values list the report properties: Name: Financial Budget vs. Forecast by Period Detail Resource ID: CSK_FIN_BudgetForecastByPeriodDetail Description: Financial Management (PMO Accelerator) Folder: Clarity /Reports/Financial Management/Financial Budget vs. Forecast by Period Detail Path: /ca_ppm/reports/financial_management/CSK_FIN_BudgetForecastByPeriodDetail Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Financial Plan Type financialPlanTypeKey_1
Fiscal Year fiscalYearKey_1
Fiscal Period Type fiscalPeriodType
Report Currency currencyRequiredKey
Investment Type investmentTypeKey_1
Financial Plan Group By 1 groupfinancialPlan1
Financial Plan Group By 2 groupfinancialPlan2
Include Inactive Investments? includeInactiveInvestments
Group Financial Value 1 (Read Only) groupFinancialValue1
Group Financial Value 2 (Read Only) groupFinancialValue2

Type
Single-select Query Single-select Query Multiple-select Query Multiple-select Query Multiple-select Query Single-select List of Values Multiple-select Query Single-select Query Single-select Query Multiple-select Query Single-select Query Single-select Query Boolean
Single Value Text
Single Value Text

Input Control Name Input Control Resource ID
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Financial Plan Type financialPlanTypeKey_1
Fiscal Year fiscalYearKey_1
Fiscal Period Type fiscalPeriodType
Report Currency currencyRequiredKey
Investment Type investmentTypeKey_1
Financial Plan Group By 1 groupfinancialPlan1
Financial Plan Group By 2 groupfinancialPlan2
Include Inactive Investments? includeInactiveInvestments
Group Financial Value 1 (Read Only) groupFinancialValue1
Group Financial Value 2 (Read Only) groupFinancialValue2

Mandatory Default Value No
No
No
No
No
Yes Budget Yes
Yes Monthly Yes
Yes All Yes Charge Code No
No Unchecked No Passed through main report
No Passed through main report


Prompt Text Parameter Name Page Number (Read Only) pageNumber Database Schema dwhDBSchema
UI Theme ppmUserUITheme
Language ppmUserLanguage
User ID ppmUser

Type Single Value Number Hidden
Hidden
Hidden
Hidden


Input Control Name Input Control Resource ID Page Number (Read Only) pageNumber Not Applicable
Not Applicable
Not Applicable
Not Applicable

Mandatory Default Value No Passed through main report Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM

### Parameter Lookup Values

The following values list the lookup values:
Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Financial Plan Type: Budget, Planned
Fiscal Period Type: 13 Periods, Monthly, Quarterly, Annually
Financial Plan Group By 1 and 2: Charge Code, Cost Type, Department, Input Type Code, Location, Resource, Resource Class, Role, Transaction Class, User Value 1, User Value 2

### Parameter Explanations

The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control which investments display in the report.
- The Investment OBS Unit parameter displays values based on the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Financial Plan Type parameter allows you to select which type of financial plan to include in the report. You can run the report to display budget amounts from the budget or planned amounts from the cost plan. This option is
available because sometimes cost plans are implemented without budgets so this parameter gives you the flexibility to select which plan type to show in the report. The Financial Plan Type parameter works as follows:
- Budget The budget amounts in the report are based on the current approved budget. The preceding screen
capture displays the amounts as budget because this is the parameter value that is selected when running the report.
- Planned The planned amounts in the report are based on the current cost plan of record. The preceding screen capture is run with the option of budget. If it is run with the option of planned, then it displays the word "planned" where it displays the word budget in the report title and row labels.
- The Fiscal Year parameter allows you to control which costs, from the financial plans and actual transactions, are included in the report. When you select a fiscal year, the budget or planned amounts are restricted to only display the amounts within the fiscal year you select. The same applies to actual amounts. You can view costs for one or several fiscal years, regardless of whether the financial plans are entered by period types of monthly, 13 periods, quarterly, or annually.
- The Fiscal Period Type parameter allows you to change the type of fiscal period that displays across the columns of the report. The following options are available:
- 13 Periods. The report displays amounts by the 13 period fiscal period type.
- Monthly. The report displays amounts by the monthly fiscal period type.
- Quarterly. The report displays amounts by the quarterly fiscal period type.
- Annually. The report displays amounts by the annually fiscal period type.
NOTE
If both Monthly and 13 Periods fiscal time periods per year exist, Monthly takes priority.
- The Report Currency parameter allows you to convert the amounts in the report to one currency for reporting
purposes. If you do not use multi-currency, then all your investments are in the same currency and you only have one currency to select in the report currency parameter. In this case, the report displays amounts in the entity home currency of the department that is associated to the investment.
- If you use multi-currency, then you have the option to select any currency you have active in the product as the report currency. When you select a currency in the parameter, the amounts in the report are converted into that currency per the exchange rates set up in the product, if the report currency is different from the investment currency. In order to use this Report Currency parameter to convert currencies, enable multi-currency in your installation of the product (Administration/Finance-Setup/Defaults). In the Currency section, there is a System field that must be set to Multi Currency. In addition to enabling multi-currency, also activate the currencies that you want to use in the product (Administration/Finance-Setup/Currency). Lastly, set up Foreign Exchange rates the product (Administration/Finance-Setup/Foreign Exchange Rates). The report uses exchange rates with an Exchange Rate Type of 'Average' so you must set up exchange rates of this type.
- The report has Financial Plan Group By 1 and Financial Plan Group By 2 parameters that allow you to control how the report is grouped. You can group the report by up to two options, which can be any combination of the following grouping options:
- Charge Code This option groups the report by charge code.
- Cost Type This option groups the report by cost type.
- Department This option groups the report by department.
- Input Type Code This option groups the report by input type code.
- Location This option groups the report by location.
- Resource This option groups the report by resource.
- Resource Class This option groups the report by resource class.
- Role This option groups the report by role.
- Transaction Class This option groups the report by transaction class.
- User Value 1 This option groups the report by user value 1.
- User Value 2 This option groups the report by user value 2.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.

### Report Fields and Calculations

The report displays the budget or planned, forecast, and variance amounts by investment for the financial plan grouping that you selected when drilling from the main report. It displays the same columns, with the same calculations and background color, as the main report.
The current approved budget or cost plan of record is the only financial plan included. The plan of record for the cost plan is the one designated as plan of record. The plan of record for the budget is current approved budget. Budget and cost plans are included; benefit plans are excluded.
If the report currency parameter is not selected, then the report displays all investments in their home currency. This is the entity home currency of the department that is associated to the investment. In this case, an extra currency column displays in the report to the right of the investment name to give visibility into the currency of the investment because the investments can be in different currencies.

If the report currency parameter is set to a currency, then all the investments in the report are converted from their home currency to the report currency, if the two are different, so you can view all investments in the same currency. In this case, the currency is displayed in parentheses in the report title instead of as a column in the report because all the investments are in the same report currency. In order to use the report currency parameter for converting amounts, your Classic PPM installation must have multi-currency enabled. Currency conversions are calculated based on the foreign exchange rates set up with a type of average. They are also based on the current date so the exchange rate effective date must be the same or earlier than the current date. With these conditions met, the exchange rate effective date closest to the current date is the exchange rate that is used for the conversions. Actual financial transaction cost amounts only include transactions that are processed and posted. Any other status is a transaction that is adjusted, reversed, or updated and those transactions are excluded. Actual financial transaction cost amounts are in the currency that is the entity home currency of the department that is associated to the investment. This report contains the following calculations, which are all subject to the fiscal year parameter:
- Budget or Planned This is the approved budget or planned cost for the cost plan of record.
- Forecast Actuals + Forecast Remaining Forecast is the actual cost posted through the last complete fiscal period plus
the planned cost remaining in the cost plan of record after the last complete fiscal period. For example, if the project's as of date is 05/20/2015, then forecast remaining is actual cost through 04/30/2015 plus planned cost in fiscal periods after the fiscal period ending 04/30/2015.
- Variance Budget or Planned
- Forecast Variance background color is as follows: Red. The Forecast exceeds Budget or Planned, which means the variance is a negative number. Report Security and Technical Details Security is determined by investment view rights.

## Investment Transaction Inquiry

The Investment Transaction Inquiry report displays actual quantity and cost, by resource and day, for each investment. The report and pie charts can be grouped by various options, making it a dynamic report. The following image shows the Investment Transaction Inquiry report displaying actual quantity and cost.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The investment must have the financial fields populated to post transactions to financials for the investment. These fields are in the financial section of the settings properties on the project and include financial status, type, billing currency, department, location, and charge code. Alternatively, the resource can select a charge code in the timesheet if the timesheet is configured to display this field. The financial status field must be set to open to post financial transactions. If the financial status is hold or closed, the product does not post transactions for the investment.
- The resource must have the financially active field checked and the financial fields populated to post transactions to financials. These fields are in the financial properties of the resource and include financial department, financial location, transaction class, and resource class. The resource must also have the input type field completed in the time tracking section of the settings properties on the resource. Alternatively, the resource can select an input type code in the timesheet if the timesheet is configured to display this field.
- The investment and resource must have a department OBS unit that is associated to them to process financial transactions. For a department OBS to be available to associate to an investment and resource, first set up a department OBS and a location OBS (Administration/Organization and Access-OBS) and associate them to the investment objects (for example, Application, Project, and so on) and resource object for which you can enter transactions. Next, create an entity (Administration/Finance-Setup/Entities) and associate the department OBS and location OBS to the entity. The entity determines the home currency of the investment when you associate the department to the investment.
- There must be a rate matrix created (Administration/Finance-Manage Matrix) and associated as a system default rate matrix (Administration/Finance-Setup/Defaults/Project Transaction Entry Defaults) or an investment-specific rate matrix for calculation of cost amounts. The matrix is required to calculate cost, if posting timesheets as financial transactions. The matrix is optional if entering transactions through transaction entry or importing from an external system. In those cases, the cost rate can be entered or imported with the transaction.
- Financial transactions can be initiated from timesheets, transaction entry, or imported from external systems.
- The investment must have at least one resource that is assigned to a task for the resource to enter time against the investment. For projects, the resource must be assigned to a task in the Gantt unless the project has an effort task with resources automatically assigned. For investments other than the project, resources added to the team are automatically assigned to an effort task for the investment. Note: Effort task is a task with the Task ID of '~rmw'.
- There must be charge codes that are created (Administration/Project Management-Charge Codes) and associated to the investment to post timesheets as financial transactions. For projects, the transaction charge code is determined in the following order, whichever it finds first: based on the task charge code; then, based on a parent task charge


code by walking up the work breakdown structure; and lastly, based on the project charge code. For non-project investments, the transaction charge code is determined by the charge code that is entered on the investment. If the transaction is entered through transaction entry or imported from an external system, the charge code can be entered or imported with the transaction.
- There must be transaction classes that are created (Administration/Finance/Setup-Transaction Classes) and associated to the resource to post timesheets as financial transactions. If the transaction is entered through transaction entry or imported from an external system, the transaction class can be entered or imported with the transaction.
- There must be resource classes that are created (Administration/Finance/Setup-Resource Classes) and associated to the resource to post timesheets as financial transactions. If the transaction is entered through transaction entry or imported from an external system, the resource class can be entered or imported with the transaction.
- There must be input type codes created (Administration/Project Management-Input Type Codes) and associated to the resource to post timesheets as financial transactions. If the transaction is entered through transaction entry or imported from an external system, the input type code can be entered or imported with the transaction. Note: The input type code is not on the financial properties of the resource; it is in the time tracking section of the settings properties on the resource.

### Report Properties

The following values list the report properties:
Name: Investment Transaction Inquiry
Resource ID: CSK_FIN_InvTransactionInquiry
Description: Financial Management (PMO Accelerator)
Folder: Clarity /Reports/Financial Management/Investment Transaction Inquiry
Path: /ca_ppm/reports/financial_management/CSK_FIN_InvTransactionInquiry
Data Source: Clarity Bean Data Source

### Report Parameter Options

The following table lists the report parameter options.

Prompt Text Parameter Name
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Start Date startDate
End Date endDate
Transaction Entry Number transactionEntryNumber

Type
Single-select Query
Single-select Query
Multiple-select Query
Multiple-select Query
Multiple-select Query
Single Value Date
Single Value Date
Single Value Number

Input Control Name Input Control Resource ID

Investment OBS Type

No

investmentOBSTypeKey_1

Investment OBS Unit

No

investmentOBSUnitKey_1

Investment Type

Yes

investmentTypeKey_1

All

Investment Manager

No

investmentManagerKey_1

Investment

No

investmentKey_1

Start Date

Yes

startDate

End Date

Yes

endDate

Transaction Entry Number

No

transactionEntryNumber

Mandatory Default Value


Prompt Text Parameter Name
Transaction Status transactionStatus
Graph 1 Group By groupChartFinAttributes1
Graph 2 Group By groupChartFinAttributes2
Transaction Group By 1 groupTransactionFinAttributes1
Transaction Group By 2 groupTransactionFinAttributes2
Report Column 1 groupColumnFinAttributes1
Report Column 2 groupColumnFinAttributes2
Report Column 3 groupColumnFinAttributes3
Report Column 4 groupColumnFinAttributes4
Report Column 5 groupColumnFinAttributes5
Include Inactive Investments? includeInactiveInvestments
Show Graphs? showGraphs
Database Schema ppmDBSchema
UI Theme ppmUserUITheme
Language ppmUserLanguage
User ID ppmUser

Type
Single-select List of Values Single-select List of Values Single-select List of Values Single-select List of Values Single-select List of Values Single-select List of Values Single-select List of Values Single-select List of Values Single-select List of Values Single-select List of Values Boolean
Boolean
Hidden
Hidden
Hidden
Hidden

Input Control Name Input Control Resource ID Transaction Status transactionStatus Graph 1 Group By groupChartFinAttributes1 Graph 2 Group By groupChartFinAttributes2 Transaction Group By 1 groupTransactionFinAttributes1 Transaction Group By 2 groupTransactionFinAttributes2 Report Column 1 groupColumnFinAttributes1 Report Column 2 groupColumnFinAttributes2 Report Column 3 groupColumnFinAttributes3 Report Column 4 groupColumnFinAttributes4 Report Column 5 groupColumnFinAttributes5 Include Inactive Investments? includeInactiveInvestments Show Graphs? showGraphs Not Applicable
Not Applicable
Not Applicable
Not Applicable

Mandatory Default Value No
Yes Charge Code Yes Transaction Class No Transaction Type No
Yes Resource Yes Resource Role Yes Task Yes Charge Code Yes Transaction Class No Unchecked No Checked Yes Passed through Classic PPM Yes Passed through Classic PPM Yes Passed through Classic PPM Yes Passed through Classic PPM

### Parameter Lookup Values

The following values list the lookup values:
Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Transaction Status: Posted, Unposted
Graph 1 and 2 Group By: Charge Code, Cost Type, Department, Input Type, Location, Resource Class, Resource Role, Transaction Class, Transaction Type, User Value 1, User Value 2
Transaction Group By 1 and 2: Charge Code, Cost Type, Department, Input Type, Location, Resource, Resource Class, Resource Role, Task, Transaction Class, Transaction Type, User Value 1, User Value 2
Report Column 1-5: Charge Code, Cost Type, Department, Input Type, Location, Resource, Resource Class, Resource Role, Task, Transaction Class, Transaction Type, User Value 1, User Value 2


Parameter Explanations The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit
parameter. This parameter is not used to control which investments display in the report.
- The Investment OBS Unit parameter displays values that are based upon the Investment OBS Type selected. When
you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Start Date and End Date parameters determine which transaction dates are included in the report.
- The Transaction Entry Number parameter is a text field which allows you to display only transactions that are related to a specific transaction entry number. The text field is case-sensitive so you must capitalize letters in the parameter if they are capitalized in the entry number. The parameter supports a wildcard character (star) being entered at the end of the string; the report displays all matching records that meet the criteria entered preceding the wildcard character.
- The Transaction Status parameter allows you to select which transactions to include in the report and works as follows:
- Posted. This option includes financial transactions that have been posted via the Post to WIP (Home/Financial
Management-Post to WIP).
- Unposted. This option includes timesheets and transactions that are imported from external systems that have
been posted to financials for processing via the Post Transactions to Financials job (Home/Personal-Reports and Jobs) or entered in transaction entry, but are not yet posted via the Post to WIP (Home/Financial Management-Post to WIP).
- The report has Graph 1 Group By and Graph 2 Group By parameters that allow you to control how each chart in the report is grouped. You can group each chart by the following grouping options:
- Charge Code. This option groups the chart by charge code.
- Cost Type. This option groups the chart by cost type.
- Department. This option groups the chart by department.
- Input Type. This option groups the chart by input type code.
- Location. This option groups the chart by location.
- Resource Class. This option groups the chart by resource class.
- Resource Role. This option groups the chart by resource role.
- Transaction Class. This option groups the chart by transaction class.
- Transaction Type. This option groups the chart by transaction type.
- User Value 1. This option groups the chart by user value 1.
- User Value 2. This option groups the chart by user value 2.
- The report has Transaction Group By 1 and Transaction Group By 2 parameters that allow you to control how the body of the report is grouped. You can group the report by up to two options, which can be any combination of the following grouping options:
- Charge Code. This option groups the body of the report by charge code.
- Cost Type. This option groups the body of the report by cost type.
- Department. This option groups the body of the report by department.
- Input Type. This option groups the body of the report by input type code.
- Location. This option groups the body of the report by location.
- Resource. This option groups the body of the report by resource.
- Resource Class. This option groups the body of the report by resource class.
- Resource Role. This option groups the body of the report by resource role.
- Task. This option groups the body of the report by task.
- Transaction Class. This option groups the body of the report by transaction class.
- Transaction Type. This option groups the body of the report by transaction type.
- User Value 1. This option groups the body of the report by user value 1.
- User Value 2. This option groups the body of the report by user value 2.
- The report has Report Column 1-5 parameters that allow you to control the columns that display in the report. You can
select up to five columns to display in the report and control the order in which they display. Report column 1 displays first and report column 5 displays last. The report column options are as follows:
- Charge Code. The charge code column displays in the report.
- Cost Type. The cost type column displays in the report.
- Department. The department column displays in the report.
- Input Type. The input type code column displays in the report.
- Location. The location column displays in the report.
- Resource. The resource column displays in the report.
- Resource Class. The resource class column displays in the report.
- Resource Role. The resource role column displays in the report.
- Task. The task column displays in the report.
- Transaction Class. The transaction class column displays in the report.
- Transaction Type. The transaction type column displays in the report.
- User Value 1. The user value 1 column displays in the report.
- User Value 2. The user value 2 column displays in the report.
- The Show Graph parameter controls whether the cost charts display on the report. If the parameter is checked, the charts display at the top of each investment transaction section in the report. If the parameter is not checked, the charts will not display.
Report Fields and Calculations
The report has two pie charts showing the cost distribution according to the graph group by options that are selected when running the report. The amounts in the charts are a summary of all transactions meeting the parameter criteria of the report.
The report displays the investment name, investment ID, start date, finish date, investment manager, financial status, company name, and objective at the top of the report. The body of the report displays the following investment transaction information: transaction date, report columns 1 through 5 selected using the parameters, posted date, quantity, actual cost rate, and total cost. The report adjusts the column headings and content according to the values selected in the Report Column 1-5 parameters, which can be any combination of the following: charge code, cost type, department, input type, location, resource, resource class, resource role, task, transaction class, transaction type, user value 1, and user value 2. In the preceding screen capture, resource name, resource role, department, location, and task were the columns that are selected when running the report.
The transactions can be grouped by up to two options in the report body, which can be any combination of the following: charge code, cost type, department, input type, location, resource, resource class, resource role, task, transaction class, transaction type, user value 1, and user value 2. Actual financial transaction cost amounts only include transactions that
