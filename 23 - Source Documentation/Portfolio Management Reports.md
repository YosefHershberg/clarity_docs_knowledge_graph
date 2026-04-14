# Portfolio Management Reports

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[11 - Reporting/_MOC Reporting|Reporting]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[18 - Advanced Reporting/PMO Accelerator Reports/Portfolio Reports]]
- [[11 - Reporting/Report Designer/Creating Your First Report]]
- [[11 - Reporting/Working with Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Investment Reports]]
- [[11 - Reporting/Report Designer/Drill Down Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Financial Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/PMO Admin Reports]]
- [[11 - Reporting/Exporting Reports]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Program Dependency Reports (#program-dependency-reports)
- H2: Portfolio Management Reports (#portfolio-management-reports)
- H2: Portfolio Plan Comparison (#portfolio-plan-comparison)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security and Technical Details (#report-security-and-technical-details)
- H2: Portfolio Plan Changes (#portfolio-plan-changes)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security and Technical Details (#report-security-and-technical-details)
- H2: Portfolio Plan Changes - Waterline and Rank (#portfolio-plan-changes---waterline-and-rank)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: PMO Reports: Administration Reports (#pmo-reports-administration-reports)
- H3: PMO Reports: Data Warehouse Schema (#pmo-reports-data-warehouse-schema)
- H3: PMO Reports: Clarity Schema (#pmo-reports-clarity-schema)
- H3: PMO Reports: User License and Activity (#pmo-reports-user-license-and-activity)
- H3: PMO Reports: User License and Activity Detail (#pmo-reports-user-license-and-activity-detail)
- H3: PMO Reports: User Access Rights (#pmo-reports-user-access-rights)
- H3: PMO Reports: User Access Rights Detail (#pmo-reports-user-access-rights-detail)
- H3: PMO Reports: Database Connection Check to Clarity and DWH (#pmo-reports-database-connection-check-to-clarity-and-dwh)
- H3: PMO Reports: Customizations Overview (#pmo-reports-customizations-overview)
- H2: Data Warehouse Trend Reporting (#data-warehouse-trend-reporting)
- H3: Trending Snapshots (#trending-snapshots)
- H3: Trending Structural Tables (#trending-structural-tables)
- H3: Trending Jobs (#trending-jobs)
- H3: Trending Data Tables (#trending-data-tables)
- H3: Trending Views (#trending-views)
- H3: Enable a Custom Attribute for Trending (#enable-a-custom-attribute-for-trending)
- H3: Trend Reporting Examples (#trend-reporting-examples)
- H3: XOG Support for Trending (#xog-support-for-trending)
- H3: Troubleshooting SQL Errors in Trending Jobs (#troubleshooting-sql-errors-in-trending-jobs)

## Program Dependency Reports

Whether a baseline exists and milestone status determines how days late is calculated:
- If a baseline exists, then days late is calculated as milestone finish date minus baseline finish date. A positive number indicates that the milestone is late according to the baseline. A negative number indicates that it is early according to the baseline.
- If a baseline exists and the milestone finish date is the same as the baseline finish date, then the milestone is considered late if it is not completed and it was due before today's date. In this case, days late is calculated as today's date minus milestone finish date.
- If there is no baseline, then days late is calculated if the milestone is not completed and it was due before today's date. In this case, days late is calculated as today's date minus milestone finish date.

**Dependency Schedule** stoplight color is determined as follows:
- **Green** = On Schedule (<=0)
- **Red** = Late (>0)

**Dependency Diagram**: The dependency diagram uses rectangles to represent the program and its dependent projects. The program is at the top of the diagram; the predecessor projects are located below the program. The color of the rectangle for the dependent projects is determined by the dependency schedule stoplight of their milestones. If a dependent project has at least one milestone with a red dependency schedule stoplight, then the rectangle in the diagram is red for that dependent project.

The color of the rectangle for the program is based on the program schedule, which is the number of days the program is late, and considers program progress as follows:
- Days late is calculated if the program is not completed and it was due before today's date. The number of days late is calculated as today's date minus program finish date.
- Schedule color is determined as follows:
- **Green** = On Schedule (<=0)
- **Red** = Late (>0)

**Report Security**: Security is determined by project view rights.

## Portfolio Management Reports

The Portfolio Management reports provide visibility into waterline and rank information of investments in a portfolio. The reports also provide information about portfolio distributed target, investment budget, and investment planned amounts, indicating the differences between portfolios and portfolio plans.

The following reports are included in the Portfolio Management reports:
- Portfolio Plan Comparison
- Portfolio Plan Changes
- Portfolio Plan Changes - Waterline and Rank

## Portfolio Plan Comparison

The Portfolio Plan Comparison report is grouped by portfolio and displays distributed target and above waterline investment cost and role amounts. The report provides visibility into portfolio amounts, allowing a comparison of up to three portfolio plans. The change amount and change percentage for each plan, compared to portfolio, are presented.

> [!WARNING]
> This report runs numerous queries to retrieve the data necessary to populate the report. Avoid running this report without parameters and try to limit the results to reasonable amounts of data. Otherwise, you may experience performance issues.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- You must have at least one portfolio created (**Home / Portfolio Management - Portfolios**) when running the report or the report displays a message that there are no results that match your criteria.
- You must have at least one portfolio plan created to compare a plan against the actual portfolio, otherwise the report displays portfolio amounts only.
- The report has a parameter that allows you to compare the portfolio to the portfolio plan of record. The portfolio must have at least one portfolio plan marked as plan of record for the **Compare Portfolio to Plan of Record** parameter to work.
- There must be distributed target amounts entered in the targets tab of the portfolio for the report to display distributed target amounts.
- There must be at least one portfolio investment that is above the waterline on the waterlines tab of the portfolio for the report to display amounts in the following sections: Above Waterline Investment Totals, Above Waterline Investment Metrics, and Above Waterline Investment Counts.
- The portfolio contents must be defined and the portfolio must be synchronized for the report to display investment data. The portfolio investment data is synchronized by running the **Synchronize portfolio investments** job. This job provides a snapshot of the investment data included in a portfolio and portfolio plans. It copies data from the actual investment tables to the portfolio investment tables. The information that is copied depends on the attributes that are registered on the Portfolio Investment object **Attribute Registry** tab (**Administration / Studio - Objects**). By default, the required portfolio investment attributes are included.
- This job can be run manually or scheduled from a portfolio and **Reports and Jobs** (**Home / Personal - Reports and Jobs**). Only one portfolio can be selected at a time when running the job. You can run this job to synchronize the portfolio investments by clicking the **Sync Schedule Manual** link on the portfolio properties. This link opens the portfolio sync properties page, which has the option to schedule the sync (weekly or monthly recurrence) or to sync manually. If manual recurrence is selected and you click the **Sync Now** button, the portfolio will immediately sync. The same **Sync Now** button is also available on the **Contents Editor** and **Targets** tabs of the portfolio. Once the portfolio investments are synchronized, their data displays in the report. The portfolio investment data reflects the snapshot of investment data as of the **Last Sync Date**. The Last Sync Date displays under the Sync Schedule field on the portfolio properties.
- The actual investments must have data for the portfolio sync to copy the data from the actual investments to the portfolio investments. They must have planned cost or budgeted cost and benefit amounts entered in the financial summary properties to sync these amounts to the portfolio and display in the above the waterline investment sections of the report. If the investments have detailed cost plans or budget plans and benefit plans created under the financial plans tab, then the planned or budgeted cost and benefit amounts on the financial summary properties will be read only and set according to the amounts in the detailed financial plans. In this case, the cost plan amount for the plan of record or approved budget amount, with associated benefits, displays on the financial summary properties and in the report.

> [!NOTE]
> These investment cost and benefit amounts can be manually entered or modified for plans in a portfolio.
- The investments must have at least one resource or role on the investment team for the team member allocation demand amounts to sync to the portfolio and display in the above the waterline investment sections of the report.

> [!NOTE]
> These investment role allocation demand amounts can be manually entered or modified for plans in a portfolio.
- The report does not require any time slice requests. The amounts are based on portfolio CLOB data. Portfolio CLOBs store the portfolio time phased data.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Portfolio Plan Comparison |
| **Resource ID** | CSK_PFM_PortPlanComparison |
| **Description** | Portfolio Management (PMO Accelerator) |
| **Folder** | Clarity /Reports/Portfolio Management/Portfolio Plan Comparison |
| **Path** | /ca_ppm/reports/portfolio_management/CSK_PFM_PortPlanComparison |
| **Data Source** | Clarity Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Portfolio OBS Type | portfolioOBSTypeKey_1 | Single-select Query | portfolioOBSTypeKey_1 | No | |
| Portfolio OBS Unit | portfolioOBSUnitKey_1 | Single-select Query | portfolioOBSUnitKey_1 | No | |
| Portfolio Manager | portfolioManagerKey_1 | Multiple-select Query | portfolioManagerKey_1 | No | |
| Portfolio Stakeholder | portfolioStakeholderKey_1 | Multiple-select Query | portfolioStakeholderKey_1 | No | |
| Portfolio | portfolioKey_1 | Multiple-select Query | portfolioKey_1 | No | |
| Portfolio Plan | portfolioPlanKey_1 | Multiple-select Query | portfolioPlanKey_1 | No | |
| Financial Plan Type | financialPlanTypeKey_1 | Single-select List of Values | financialPlanTypeKey_1 | Yes | Planned |
| Compare Portfolio to Plan of Record? | comparePortfolioToPlanOfRecord | Boolean | comparePortfolioToPlanOfRecord | No | Unchecked |
| Include Inactive Portfolios? | includeInactivePortfolios | Boolean | includeInactivePortfolios | No | Unchecked |
| Database Schema | ppmDBSchema | Hidden | Not applicable | Yes | Passed through Classic PPM |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Classic PPM |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Classic PPM |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Financial Plan Type**: Budget, Planned

### Parameter Explanations
- The **Portfolio OBS Type** is a cascading parameter that determines which units are listed in the Portfolio OBS Unit parameter. This parameter does not directly control which portfolios display in the report.
- The **Portfolio OBS Unit** parameter displays values based on the Portfolio OBS Type selected. When you select an OBS unit in this parameter, the report displays the portfolios that are attached to the OBS unit and descendants of the unit you select.
- The **Compare Portfolio to Plan of Record** parameter compares each portfolio to the portfolio plan marked as the Plan of Record, if there is one. This allows you to run the report comparing portfolio amounts to plan of record amounts, without having to browse and select specific plans for the comparison.
- The **Portfolio Plan** parameter allows you to select specific portfolio plans to display in the report. The report supports comparing up to three plans for each portfolio. If you select more than three plans for one portfolio, the report displays the plan that is marked as the plan of record and the two most recently created plans. If there is no plan of record, the report displays the three most recently created plans of the plans you selected. The parameter uses the same logic if you do not select any plans in the parameter; it displays plan of record first and then the most recent plans.
- The **Financial Plan Type** parameter allows you to select which type of financial cost and benefit to include in the report: budgeted or planned. This option is available because sometimes cost plans are implemented without budgets, so this parameter gives you the flexibility to select which plan type to show in the report. The Financial Plan Type parameter works as follows:
- **Budget** - The budgeted cost and benefit amounts in the report are from the investment financial summary properties. These fields are populated from the approved budget plan, if there is a detailed budget plan on the investment, and its associated benefit plan.
- **Planned** - The planned cost and benefit amounts in the report are from the investment financial summary properties. These fields are populated from the cost plan that is the plan of record, if there is a detailed cost plan on the investment, and its associated benefit plan.

### Report Fields and Calculations

The report is grouped by portfolio and displays the following four sections for each portfolio: distributed target totals, above waterline investment totals, above waterline investment metrics, and above waterline investment counts. Each section displays the following columns: description of the line item, portfolio amounts, and portfolio plan amounts. The portfolio plan amounts are followed by change amount and % columns, which indicate if the plan amount is an increase or decrease to the portfolio amount.

The report supports comparing up to three plans. You can select any number of plans, up to three plans. If you select more than three plans, the report displays the plan that is marked as the plan of record and the two most recently created plans that are not the plan of record. If there is no plan of record, the report displays the three most recently created plans. From left to right in the report, the plans are displayed in this order: plan of record (if it exists) and then any other plans sorted in descending order of most recent to oldest.

#### Distributed Target Totals Section

Includes the following line items: total cost, capital cost, operating cost, benefit, role overall total, listing of each individual role included in the portfolio targets, role total, and role variance.

#### Above Waterline Investment Totals Section

Includes the following line items: planned cost, planned capital cost, planned operating cost, planned benefit, listing of each individual role included in the portfolio targets, Other Roles line item for additional investment roles not included in the targets, and role total.

#### Above Waterline Investment Metrics Section

Includes the following line items: planned NPV, planned cost per role, planned benefit per role, and planned profit per role.

#### Above Waterline Investment Counts Section

Includes the following line items: all investments and each investment type included in the portfolio.

The amounts that display in the report are amounts that fall within the portfolio planning horizon, which is the time window between the portfolio start and finish dates. For portfolio plan amounts, the portfolio planning horizon is the time window between the portfolio plan start and finish dates. Any distributed target or investment amounts outside this time window are not included in the report.

For investment amounts, the report has the option to display planned or budgeted amounts depending on the financial plan type parameter selected. The investment amounts shown in the report represent amounts from investments that are above the waterline in the portfolio.

Investments are considered above the waterline if they are ranked, through ranking rules or manual ranking, above the waterline. The waterline placement is determined by the primary constraint or it can be manually set.

#### Calculations

**Change**: The change amount field is the variance between the portfolio plan and portfolio amounts to determine if the plan amount is an increase or decrease to the portfolio amount.

Formula: `Portfolio Plan - Portfolio`

**%**: The change % is the variance between the portfolio plan and portfolio amounts, displayed as a percentage of the portfolio amount.

Formula: `((Portfolio Plan - Portfolio) / Portfolio) * 100`

**Role: Total** (Distributed Target Section): This total is the sum of the individual roles included in the portfolio targets.

**Role: Variance** (Distributed Target Section): This variance is the difference between the role overall total and role total amounts.

Formula: `Role: Overall Total - Role: Total`

**Role: Other Roles** (Above Waterline Investment Totals Section): This amount is the sum of the allocation amounts for any roles on investments in the portfolio that are not individually added to the portfolio targets.

**Role: Total** (Above Waterline Investment Totals Section): This total is the sum of the individual roles included in the portfolio targets and the Other Roles.

**Planned Cost per Role**: Formula: `Planned Cost / Role: Total`

**Planned Benefit per Role**: Formula: `Planned Benefit / Role: Total`

**Planned Profit per Role**: Formula: `(Planned Benefit - Planned Cost) / Role: Total`

### Report Security and Technical Details

Security is determined by portfolio view rights.

---

## Portfolio Plan Changes

The Portfolio Plan Changes report is grouped by portfolio and displays investments that have key attributes modified in portfolio plans. These attributes include budgeted or planned cost and benefit, role demand, and schedule dates. The report provides visibility into investment level changes in portfolio plans. The report compares the portfolio amounts to portfolio plan amounts, using highlighting and arrow indicators to identify changes, for up to three plans. Within each portfolio, the report can also be grouped by investment manager.

> [!WARNING]
> This report runs numerous queries to retrieve the data necessary to populate the report. Avoid running this report without parameters and try to limit the results to reasonable amounts of data. Otherwise, you might experience performance issues.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- You must have at least one portfolio created (**Home / Portfolio Management - Portfolios**) when running the report or the report displays a message that there are no results that match your criteria.
- You must have at least one portfolio plan created. There must also be at least one investment that has one of the key report attributes modified in the plan. The report displays only investments that have been changed in a plan; it does not list all investments in the portfolio.
- The report has a parameter that allows you to compare the portfolio to the portfolio plan of record. The portfolio must have at least one portfolio plan that is marked as plan of record for the **Compare Portfolio to Plan of Record** parameter to work.
- The portfolio contents must be defined and the portfolio must be synchronized for the report to display investment data. The portfolio investment data is synchronized by running the **Synchronize portfolio investments** job. This job provides a snapshot of the investment data included in a portfolio and portfolio plans. It copies data from the actual investment tables to the portfolio investment tables. The information that is copied depends on the attributes that are registered on the Portfolio Investment object **Attribute Registry** tab (**Administration / Studio - Objects**). By default, the required portfolio investment attributes are included.
- This job can be run manually or scheduled from a portfolio and **Reports and Jobs** (**Home / Personal - Reports and Jobs**). Only one portfolio can be selected at a time when running the job. You can run this job to sync the portfolio investments by clicking the **Sync Schedule Manual** link on the portfolio properties. This link opens the portfolio sync properties page, which has the option to schedule the sync (weekly or monthly recurrence) or manually sync. If manual recurrence is selected and you click the **Sync Now** button, the portfolio synchronizes immediately. The same **Sync Now** button is also available on the **Contents Editor** and **Targets** tabs of the portfolio. Once the portfolio investments are synchronized, their data displays in the report. The portfolio investment data reflects the snapshot of investment data as of the **Last Sync Date**. The Last Sync Date displays under the Sync Schedule field on the portfolio properties.
- The actual investments must have data for the portfolio sync to copy the data from the actual investments to the portfolio investments. They must have planned cost or budgeted cost and benefit amounts entered in the financial summary properties to sync these amounts to the portfolio and display in the report. If the investments have detailed cost plans or budget plans and benefit plans created under the financial plans tab, then the planned or budgeted cost and benefit amounts on the financial summary properties are read only and set according to the amounts in the detailed financial plans. In this case, the cost plan amount for the plan of record or approved budget amount, with associated benefits, displays on the financial summary properties and in the report.

> [!NOTE]
> These investment cost and benefit amounts can be manually entered or modified for plans in a portfolio.
- The investments must have at least one resource or role on the investment team for the team member allocation demand amounts to sync to the portfolio and display in the report.

> [!NOTE]
> These investment role allocation demand amounts can be manually entered or modified for plans in a portfolio.
- The report does not require any time slice requests. The amounts are based on portfolio CLOB data. Portfolio CLOBs store the portfolio time phased data.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Portfolio Plan Changes |
| **Resource ID** | CSK_PFM_PortPlanChanges |
| **Description** | Portfolio Management (PMO Accelerator) |
| **Folder** | Clarity /Reports/Portfolio Management/Portfolio Plan Changes |
| **Path** | /ca_ppm/reports/portfolio_management/CSK_PFM_PortPlanChanges |
| **Data Source** | Clarity Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Portfolio OBS Type | portfolioOBSTypeKey_1 | Single-select Query | portfolioOBSTypeKey_1 | No | |
| Portfolio OBS Unit | portfolioOBSUnitKey_1 | Single-select Query | portfolioOBSUnitKey_1 | No | |
| Portfolio Manager | portfolioManagerKey_1 | Multiple-select Query | portfolioManagerKey_1 | No | |
| Portfolio Stakeholder | portfolioStakeholderKey_1 | Multiple-select Query | portfolioStakeholderKey_1 | No | |
| Portfolio | portfolioKey_1 | Multiple-select Query | portfolioKey_1 | No | |
| Portfolio Plan | portfolioPlanKey_1 | Multiple-select Query | portfolioPlanKey_1 | No | |
| Financial Plan Type | financialPlanTypeKey_1 | Single-select List of Values | financialPlanTypeKey_1 | Yes | Planned |
| Investment Manager | investmentManagerKey_1 | Multiple-select Query | investmentManagerKey_1 | No | |
| Group By | groupInvestmentManager | Single-select List of Values | groupInvestmentManager | Yes | Investment Manager |
| Compare Portfolio to Plan of Record? | comparePortfolioToPlanOfRecord | Boolean | comparePortfolioToPlanOfRecord | No | Unchecked |
| Show Above Waterline Only? | showAboveWaterlineOnly | Boolean | showAboveWaterlineOnly | No | Unchecked |
| Include Inactive Portfolios? | includeInactivePortfolios | Boolean | includeInactivePortfolios | No | Unchecked |
| Database Schema | ppmDBSchema | Hidden | Not applicable | Yes | Passed through Classic PPM |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Classic PPM |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Classic PPM |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Financial Plan Type**: Budget, Planned
- **Group By**: No Grouping, Investment Manager

### Parameter Explanations
- The **Portfolio OBS Type** is a cascading parameter that determines which units are listed in the Portfolio OBS Unit parameter. This parameter does not directly control which portfolios display in the report.
- The **Portfolio OBS Unit** parameter displays values based on the Portfolio OBS Type selected. When you select an OBS unit in this parameter, the report displays the portfolios that are attached to the OBS unit and descendants of the unit you select.
- The **Compare Portfolio to Plan of Record** parameter compares each portfolio to the portfolio plan marked as the Plan of Record, if there is one. This allows you to run the report comparing portfolio amounts to plan of record amounts, without having to browse and select specific plans for the comparison.
- The **Show Above Waterline Only** parameter allows you to control which investments display in the report. If the parameter is checked, the report includes only investments that are above the waterline in the portfolio. If the parameter is not checked, then the report includes all investments above and below the waterline.
- The **Portfolio Plan** parameter allows you to select specific portfolio plans to display in the report. The report supports comparing up to three plans for each portfolio. If you select more than three plans for one portfolio, the report displays the plan that is marked as the plan of record and the two most recently created plans. If there is no plan of record, the report displays the three most recently created plans of the plans you selected. The parameter uses the same logic if you do not select any plans in the parameter; it displays plan of record first and then the most recent plans.
- The **Financial Plan Type** parameter allows you to select which type of financial cost and benefit to include in the report: budgeted or planned. This option is available because sometimes cost plans are implemented without budgets so this parameter gives you the flexibility to select which plan type to show in the report. The Financial Plan Type parameter works as follows:
- **Budget** - The budgeted cost and benefit amounts in the report are from the investment financial summary properties. These fields are populated from the approved budget plan, if there is a detailed budget plan on the investment, and its associated benefit plan.
- **Planned** - The planned cost and benefit amounts in the report are from the investment financial summary properties. These fields are populated from the cost plan that is the plan of record, if there is a detailed cost plan on the investment, and its associated benefit plan.
- The report has a **Group By** parameter that allows you to control how the report is grouped. The following group options are available:
- **No Grouping** - This option does not group the report so you should select this value if you do not want to do a grouping.
- **Investment Manager** - This option groups the report by investment manager.

### Report Fields and Calculations

The report is grouped by portfolio and investment within each portfolio. It displays the following columns: investment or attribute name, portfolio value, and portfolio plan values. The report displays only portfolios with investments that have been changed in a plan. It lists only investments with report attributes modified in at least one plan; it does not list all investments in the portfolio. The report also offers an option to group the investments by the investment manager.

The report supports comparing up to three plans. You can select any number of plans, up to three plans. If you select more than three plans, the report displays the plan that is marked as the plan of record and the two most recently created plans that are not the plan of record. If there is no plan of record, the report displays the three most recently created plans. From left to right in the report, the plans are displayed in this order: plan of record (if it exists) and then any other plans sorted in descending order of most recent to oldest.

The investment key attributes included in the report are: planned cost, planned capital cost, planned operating cost, planned benefit, planned NPV, planned ROI %, planned payback (months), planned break even, listing of each individual role included in the portfolio targets, Other Roles line item for additional investment roles not included in the targets, role total, start date, finish date, approved, and required.

The report displays a checkmark for the investments in the portfolio that are approved or required. The amounts that display in the report are amounts that fall within the portfolio planning horizon, which is the time window between the portfolio start and finish dates. For portfolio plan amounts, the portfolio planning horizon is the time window between the portfolio plan start and finish dates.

The investment attribute changes in portfolio plans are highlighted and the direction of change is represented with arrow indicators. The attribute value has a gray background if the value in the portfolio plan is different from the portfolio and no background if they are the same. An upward pointing arrow indicates the value has increased in the plan; a downward pointing arrow indicates the value has decreased in the plan.

### Report Security and Technical Details

Security is determined by portfolio view rights.

---

## Portfolio Plan Changes - Waterline and Rank

The Portfolio Plan Changes - Waterline and Rank report is grouped by portfolio and displays the Above Waterline indicator and numerical Rank for investments in each portfolio. The report provides visibility into investment level waterline and rank changes in portfolio plans. It compares the waterline and rank information between the portfolio and portfolio plans, using highlighting to identify changes, for up to three plans.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- There must be at least one portfolio created (**Home / Portfolio Management - Portfolios**) when running the report or the report displays a message that there are no results that match your criteria.
- There must be at least one portfolio plan created to compare a plan against the actual portfolio otherwise the report displays portfolio amounts only.
- The report has a parameter that allows you to compare the portfolio to the portfolio plan of record. The portfolio must have at least one portfolio plan that is marked as plan of record for the **Compare Portfolio to Plan of Record** parameter to work.
- The portfolio contents must be defined and the portfolio must be synchronized for the report to display investment data. The portfolio investment data is synchronized by running the **Synchronize portfolio investments** job. This job provides a snapshot of the investment data included in a portfolio and portfolio plans. It copies data from the actual investment tables to the portfolio investment tables. The information that is copied depends on the attributes that are registered on the Portfolio Investment object **Attribute Registry** tab (**Administration / Studio / Objects**). By default, the required portfolio investment attributes are included. This job can be run manually or scheduled from a portfolio and **Reports and Jobs** (**Home / Personal - Reports and Jobs**). Only one portfolio can be selected at a time when running the job. You can run this job to sync the portfolio investments by clicking on the **Sync Schedule 'Manual'** link on the portfolio properties. This link opens the portfolio sync properties page, which has the option to schedule the sync (weekly or monthly recurrence) or manually sync. If manual recurrence is selected and you click the **Sync Now** button, the portfolio synchronizes immediately. The same **Sync Now** button is also available on the **Contents Editor** and **Targets** tabs of the portfolio. Once the portfolio investments are synchronized, their data displays in the report. The portfolio investment data reflects the snapshot of investment data as of the **Last Sync Date**. The Last Sync Date displays under the Sync Schedule field on the portfolio properties.
- There must be at least one portfolio plan that is created to run the report from the **Compare** button because it requires that you select which plans to include in the report. The report supports comparing up to three plans.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Portfolio Plan Changes - Waterline and Rank |
| **Resource ID** | CSK_PFM_PortPlanChgWaterline |
| **Description** | Portfolio Management (PMO Accelerator) |
| **Folder** | Clarity /Reports/Portfolio Management/Portfolio Plan Changes Waterline and Rank |
| **Path** | /ca_ppm/reports/portfolio_management/CSK_PFM_PortPlanChgWaterline |
| **Data Source** | Clarity Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Portfolio OBS Type | portfolioOBSTypeKey_1 | Single-select Query | portfolioOBSTypeKey_1 | No | |
| Portfolio OBS Unit | portfolioOBSUnitKey_1 | Single-select Query | portfolioOBSUnitKey_1 | No | |
| Portfolio Manager | portfolioManagerKey_1 | Multiple-select Query | portfolioManagerKey_1 | No | |
| Portfolio Stakeholder | portfolioStakeholderKey_1 | Multiple-select Query | portfolioStakeholderKey_1 | No | |
| Portfolio | portfolioKey_1 | Multiple-select Query | portfolioKey_1 | No | |
| Portfolio Plan | portfolioPlanKey_1 | Multiple-select Query | portfolioPlanKey_1 | No | |
| Financial Plan Type | financialPlanTypeKey_1 | Single-select List of Values | financialPlanTypeKey_1 | Yes | Planned |
| Compare Portfolio to Plan of Record? | comparePortfolioToPlanOfRecord | Boolean | comparePortfolioToPlanOfRecord | No | Unchecked |
| Include Inactive Portfolios? | includeInactivePortfolios | Boolean | includeInactivePortfolios | No | Unchecked |
| Database Schema | ppmDBSchema | Hidden | Not applicable | Yes | Passed through Classic PPM |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Classic PPM |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Classic PPM |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Classic PPM |

### Parameter Lookup Values

There are no parameter lookup values for this report.

### Parameter Explanations
- The **Portfolio OBS** parameter allows you to control which portfolios display in the report. When you select an OBS unit in this parameter, the report displays the portfolios that are attached to the OBS unit you select and the portfolios that are attached to any OBS units that are descendent units of the OBS unit you select.
- The **Compare Portfolio to Plan of Record** parameter compares each portfolio to the portfolio plan marked as the Plan of Record, if there is one. This allows you to run the report comparing the portfolio to the plan of record, without having to browse and select specific plans for the comparison.
- The **Show Above Waterline Only** parameter allows you to control which investments display in the report. If the parameter is checked, the report includes only investments that are above the waterline in the portfolio. If the parameter is not checked, then it includes all investments above and below the waterline.
- The **Portfolio Plan** parameter allows you to select specific portfolio plans to display in the report. The report supports comparing up to three plans for each portfolio. If you select more than three plans for one portfolio, the report displays the plan that is marked as the plan of record and the two most recently created plans. If there is no plan of record, the report displays the three most recently created plans of the plans you selected. The parameter uses the same logic if you do not select any plans in the parameter; it displays plan of record first and then the most recent plans.

### Report Fields and Calculations

The report is grouped by portfolio and displays the following columns: investment name, above waterline and rank for the portfolio, and above waterline and rank for portfolio plans. The report displays a checkmark for the investments in the portfolio that are above the waterline. The report includes all investments in the portfolio that have a rank. If an investment is not ranked (NR in the waterlines tab in the portfolio), then it does not display in the report.

The report supports comparing up to three plans. From left to right in the report, the plans are displayed in this order: plan of record (if it exists) and then any other plans sorted in descending order of most recent to oldest.

The investment waterline and rank changes in portfolio plans are highlighted with a gray background. The above waterline and rank columns have a gray background if the portfolio plan is different from the portfolio. If the plan is the same as the portfolio, there is no background color.

### Report Security

Security is determined by portfolio view rights.

---

## PMO Reports: Administration Reports

The Administration reports provide visibility into license distribution, user activity, access rights, and database schemas. The reports display the number of users by license type and last login date. They also present a detailed listing of access rights that are granted to users. The schema reports show the logical entities from the Clarity database and data warehouse schemas.

The PMO Accelerator Advanced Reporting content includes the following Administration reports:
- PMO Reports: Data Warehouse Schema
- PMO Reports: Clarity Schema
- PMO Reports: User License and Activity
- PMO Reports: User License and Activity Detail
- PMO Reports: User Access Rights
- PMO Reports: User Access Rights Detail
- PMO Reports: Database Connection Check to Clarity and DWH
- PMO Reports: Customizations Overview

---

### PMO Reports: Data Warehouse Schema

The Data Warehouse Schema report displays the columns of tables and views in the Data Warehouse (DWH) schema. The report includes the column data types, nulls constraints, and comments. The report is grouped by the database table or view.

#### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The **Load Data Warehouse** job must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, the report parameter does not display options.

#### Report Properties

| Property | Value |
|---|---|
| **Name** | Data Warehouse Schema |
| **Resource ID** | CSK_ADM_DataWarehouseSchema |
| **Description** | Administration (PMO Accelerator) |
| **Folder** | Clarity /Reports/Administration/Data Warehouse Schema |
| **Path** | /ca_ppm/reports/administration/CSK_ADM_DataWarehouseSchema |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

#### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Data Warehouse Table | dataWarehouseTable | Multiple-select Query | dataWarehouseTable | No | |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Classic PPM |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Classic PPM |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Classic PPM |

#### Parameter Lookup Values

There are no parameter lookup values for this report.

#### Parameter Explanations
- The **Data Warehouse Table** parameter allows you to determine which tables or views display on the report.

#### Report Fields and Calculations

The report is grouped by the database table or view and displays the columns available to each table or view. The columns on the report include: column, definition, nulls, and comments. The **Nulls** report column displays "Yes" when the NOT NULL integrity constraint is specified for the database column, otherwise it displays "No". The report includes custom fields and objects that are marked as Data Warehouse enabled in Clarity.

#### Report Security

There is no security inside the report.

---

### PMO Reports: Clarity Schema

The Clarity Schema report displays the columns of tables and views in the Classic PPM schema. The report includes the column data types, nulls constraints and comments. The report is grouped by the database table or view.

#### Report Prerequisites

There are no prerequisites for this report.

#### Report Properties

| Property | Value |
|---|---|
| **Name** | Clarity Schema |
| **Resource ID** | CSK_ADM_PPMSchema |
| **Description** | Administration (PMO Accelerator) |
| **Folder** | Clarity /Reports/Administration/Clarity Schema |
| **Path** | /ca_ppm/reports/administration/CSK_ADM_PPMSchema |
| **Data Source** | Clarity Bean Data Source |

#### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Clarity Table | ppmTable | Multiple-select Query | ppmTable | No | |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Classic PPM |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Classic PPM |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Classic PPM |

#### Parameter Lookup Values

There are no parameter lookup values for this report.

#### Parameter Explanations
- The **Clarity Table** parameter allows you to determine which tables or views display on the report.

#### Report Fields and Calculations

The report is grouped by the database table or view and it displays the columns available to each table or view. The columns on the report include: column, definition, nulls, and comments. The **Nulls** report column displays "Yes" when the NOT NULL integrity constraint is specified for the database column; otherwise it displays "No".

#### Report Security

There is no security inside the report.

---

### PMO Reports: User License and Activity

The User License and Activity report displays the license type and usage frequency of each resource. The report also shows general resource information. The report can be grouped by several different options, including No Grouping, Resource Manager, Primary Role, Employment Type, License Type, Usage Frequency, and OBS Level.

The columns that display in the report are based on the grouping option selected. The user count by license type pie chart displays the number and percentage of users, grouped by license type. The user count by last login date pie chart displays the number and percentage of users, grouped by usage frequency.

This report allows you to drill down to the **User License and Activity Detail** report by clicking a resource name. The Detail report allows you to see the resource access rights that contribute to each license type.

#### Report Prerequisites

Verify that you have completed the following prerequisite before you run this report:
- The user must have a status of "Active" to display in the report. Users with a status of "Inactive" or "Lock" do not display in the report even if the active flag on the resource is checked.

#### Report Properties

| Property | Value |
|---|---|
| **Name** | User License and Activity |
| **Resource ID** | CSK_USR_LicenseActivity |
| **Description** | Administration (PMO Accelerator) |
| **Folder** | Clarity /Reports/Administration/User License and Activity |
| **Path** | /ca_ppm/reports/administration/CSK_USR_LicenseActivity |
| **Data Source** | Clarity Bean Data Source |

#### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Resource OBS Type | resourceOBSTypeKeyRequired | Single-select Query | resourceOBSTypeKeyRequired | Yes | |
| Resource OBS Unit | resourceOBSUnitKeyRequired | Single-select Query | resourceOBSUnitKeyRequired | Yes | |
| Resource Manager | resourceManagerKey_1 | Multiple-select Query | resourceManagerKey_1 | No | |
| Primary Role | primaryRoleKey_1 | Multiple-select Query | primaryRoleKey_1 | No | |
| Resource | resourceKey_1 | Multiple-select Query | resourceKey_1 | No | |
| Employment Type | employmentTypeKey_1 | Multiple-select Query | employmentTypeKey_1 | No | |
| License Type | licenseType | Multiple-select Query | licenseType | Yes | Full, Restricted, View Only |
| Usage Frequency | usageFrequency | Multiple-select Query | usageFrequency | Yes | Below 30 Days, Between 30 and 60 Days, More than 60 Days, Not Logged In |
| Sort By | sortLastLoginResource | Single-select List of Values | sortLastLoginResource | Yes | Last Login Date |
| Group By | groupResManagerLicenseUsageOBS | Single-select List of Values | groupResManagerLicenseUsageOBS | Yes | License Type |
| Show Graphs? | showGraphs | Boolean | showGraphs | No | Checked |
| Database Schema | ppmDBSchema | Hidden | Not applicable | Yes | Passed through Classic PPM |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Classic PPM |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Classic PPM |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Classic PPM |

#### Parameter Lookup Values
- **Employment Type**: Contractor, Employee
- **License Type**: Manager (Unrestricted), Team Member (Restricted), Viewer
- **Usage Frequency**: Below 30 Days, Between 30 and 60 Days, More than 60 Days, Not Logged In
- **Sort By**: Last Login Date, Resource
- **Group By**: No Grouping, Resource Manager, Primary Role, Employment Type, License Type, Usage Frequency, OBS Level 1-10

#### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter that determines which units are listed in the Resource OBS Unit parameter. This parameter does not directly control which resources display in the report.
- The **Resource OBS Unit** parameter displays values that are based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources that are attached to the OBS unit and descendants of the unit you select.
- The **License Type** parameter allows you to select which type of license to include in the report. The following options are available:
- **Full** - The report displays resources with the full license type based on the access rights that are granted through the resource, group, or resource OBS unit.
- **Restricted** - The report displays resources with the restricted license type based on the access rights that are granted through the resource, group, or resource OBS unit.
- **View** - The report displays resources with the view only license type based on the access rights that are granted through the resource, group, or resource OBS unit.
- The **Usage Frequency** parameter allows you to select the users to include in the report, based on the frequency they log into Classic PPM. The following options are available:
- **Below 30 Days** - The report displays resources who have used their licenses during the last 30 days, based on the last login date.
- **Between 30 and 60 Days** - The report displays resources who have not used their licenses for more than 30 days, but have accessed the system during the last 60 days, based on the last login date.
- **More than 60 Days** - The report displays resources who have not used their licenses for more than 60 days, based on the last login date.
- **Not Logged In** - The report displays resources that have never used their licenses, based on the last login date.
- The **Sort By** parameter allows you to control how the report is sorted:
- **Last Login Date** - Sorts the report by the last login date, in descending order, within the report grouping. The users who have not logged in to Classic PPM sort to the top because they do not have a last login date.
- **Resource** - Sorts the report by the resource name, in ascending order, within the report grouping.
- The **Group By** parameter allows you to control how the report is grouped:
- **No Grouping** - Does not group the report.
- **Resource Manager** - Groups the report by resource manager.
- **Primary Role** - Groups the report by the resource primary role.
- **Employment Type** - Groups the report by the employment type (Contractor, Employee).
- **License Type** - Groups the report by license type (Manager/Unrestricted, Team Member/Restricted, Viewer).
- **Usage Frequency** - Groups the report by usage frequency (Below 30 Days, Between 30 and 60 Days, More than 60 Days, Not Logged In).
- **OBS Level 1-10** - Requires that you select a unit in the resource OBS parameter to group by an OBS level. OBS level 1 is the top level in the hierarchy and OBS level 10 is the bottom level. When you group by an OBS level, the resources attached to OBS units at the level you select and any units below are rolled up to the group by level. If resources are associated to units above the selected level, they display in an "Undefined" grouping.
- The **Show Graphs** parameter controls whether the user count by license type and the user count by last login date pie charts display on the report. If the parameter is checked, the charts display on the first page of the report.

#### Report Fields and Calculations

If the report is not grouped, then the report displays the following columns: resource name, resource ID, user name, resource manager, primary role, employment type, license type, usage frequency, and last login date. If the report is grouped, then the report displays the same columns excluding the column that is selected as the grouping option.

When the show graph parameter is checked, the report also displays two pie charts. The user count by license type pie chart displays the number and percentage of users, grouped by license type. The user count by last login date pie chart displays the number and percentage of users, grouped by usage frequency.

The report displays license types based on the current Classic PPM license model, which includes Full, Restricted, and View Only. Users with a status of "Active" are included. Users with a status of "Inactive" or "Lock" are excluded. Resources only are included; roles are excluded.

#### Report Security

Security is determined by resource view rights.

---

### PMO Reports: User License and Activity Detail

The User License and Activity Detail report displays all of the access rights granted to a resource. The access rights may be granted directly to the resource, through a group, or through a resource OBS. The access rights include global, instance, and OBS unit rights. The report also displays participant rights that are granted through the project.

#### Report Prerequisites

Complete the following prerequisites before you run this report:
- The user must have a status of "Active" to appear in the report. Users with a status of "Inactive" or "Lock" do not appear in the report even if the active flag on the resource is checked.
- Global access rights display in the report if the user is granted at least one global access right directly, through a group, or through a resource OBS unit used for access rights.
- Instance access rights display in the report if the user is granted at least one instance access right directly, through a group, or through a resource OBS unit used for access rights.
- OBS Unit access rights display in the report if the user is granted at least one OBS unit access right directly, through a group, or through a resource OBS unit used for access rights.

#### Report Properties

| Property | Value |
|---|---|
| **Name** | User License and Activity Detail |
| **Resource ID** | CSK_USR_LicenseActivityDetail |
| **Description** | Administration (PMO Accelerator) |
| **Folder** | Clarity /Reports/Administration/User License and Activity Detail |
| **Path** | /ca_ppm/reports/administration/CSK_USR_LicenseActivityDetail |
| **Data Source** | Clarity Bean Data Source |

#### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Resource OBS Type | resourceOBSTypeKeyRequired | Single-select Query | resourceOBSTypeKeyRequired | Yes | |
| Resource OBS Unit | resourceOBSUnitKeyRequired | Single-select Query | resourceOBSUnitKeyRequired | Yes | |
| Resource Manager | resourceManagerKey_1 | Multiple-select Query | resourceManagerKey_1 | No | |
| Primary Role | primaryRoleKey_1 | Multiple-select Query | primaryRoleKey_1 | No | |
| Resource | resourceKey_1 | Multiple-select Query | resourceKey_1 | No | |
| Employment Type | employmentTypeKey_1 | Multiple-select Query | employmentTypeKey_1 | No | |
| License Type | licenseType | Multiple-select Query | licenseType | Yes | Full, Restricted, View Only |
| Usage Frequency | usageFrequency | Multiple-select Query | usageFrequency | Yes | Below 30 Days, Between 30 and 60 Days, More than 60 Days, Not Logged In |
| Database Schema | ppmDBSchema | Hidden | Not applicable | Yes | Passed through Classic PPM |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Classic PPM |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Classic PPM |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Classic PPM |

#### Parameter Lookup Values
- **Employment Type**: Contractor, Employee
- **License Type**: Manager (Unrestricted), Team Member (Restricted), Viewer
- **Usage Frequency**: Below 30 Days, Between 30 and 60 Days, More than 60 Days, Not Logged In

#### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter that determines which units are listed in the Resource OBS Unit parameter. This parameter does not directly control which resources display in the report.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources attached to the OBS unit and descendants of the unit you select.
- The **License Type** parameter allows you to select which type of license to include in the report:
- **Full** - The report displays resources with the full license type based on the access rights granted through the resource, group, or resource OBS unit.
- **Restricted** - The report displays resources with the restricted license type based on the access rights granted through the resource, group, or resource OBS unit.
- **View** - The report displays resources with the view only license type based on the access rights granted through the resource, group, or resource OBS unit.
- The **Usage Frequency** parameter allows you to select the users to include in the report, based on the frequency they log into Classic PPM:
- **Below 30 Days** - Resources who have used their licenses during the last 30 days.
- **Between 30 and 60 Days** - Resources who have not used their licenses for more than 30 days, but have accessed the system during the last 60 days.
- **More than 60 Days** - Resources who have not used their licenses for more than 60 days.
- **Not Logged In** - Resources that have never used their licenses.

#### Report Fields and Calculations

The report is grouped by resource and displays all access rights that are granted to each resource. The columns include: access right name, access right type, access right to OBS unit, granted through type, granted through, and access right description.

Users with a status of "Active" are included. Users with a status of "Inactive" or "Lock" are excluded. Resources only are included; roles are excluded.

This report contains the following columns:
- **Access Right To OBS Unit**: Displays data if the Access Right Type is "OBS Unit". In this case, the column displays the OBS Type and Unit to which the user has access for the access right.
- **Granted Through Type**: Displays how the access right is granted. The options include:
- **Resource** - The access right is assigned directly to the user.
- **Group** - The access right is assigned to a group and the resource belongs to the group.
- **OBS Unit** - The access right is assigned to a resource OBS unit and, depending on the OBS association mode, the resource is associated to the unit, an ancestor unit, or a descendant unit. The resource OBS must have the option set for "Used for Access Rights" (**Administration / Organization and Access / OBS**). If this option is checked, then the OBS units display an "Access Rights for this Unit" tab where you can assign rights to the OBS unit.
- **Granted Through**: Displays the specific resource, group, or OBS unit through which the access right is granted.

#### Report Security

Security is determined by resource view rights.

---

### PMO Reports: User Access Rights

The User Access Rights report displays all access rights that are granted to a resource. The access rights can be granted directly to the resource, through a group, or through a resource OBS. The access rights granted include global, instance and OBS unit rights. The report also displays participant rights that are granted through the project.

This report allows you to drill down to the **User Access Rights Detail** report by clicking an instance level right to view the instances to which the user has access. This drill down option is only available if the report is grouped by resource and it is only available for instance level rights, which include participant rights.

#### Report Prerequisites

Complete the following prerequisites before you run this report:
- The user must have a status of "Active" to display in the report. Users with a status of "Inactive" or "Lock" do not display in the report even if the active flag on the resource is checked.
- Global access rights display if the user is granted at least one Global access right directly, through a group, or through a resource OBS unit used for access rights.
- Instance access rights display if the user is granted at least one Instance access right directly, through a group, or through a resource OBS unit used for access rights.
- OBS Unit access rights display if the user is granted at least one OBS Unit access right directly, through a group, or through a resource OBS unit used for access rights.

#### Report Properties

| Property | Value |
|---|---|
| **Name** | User Access Rights |
| **Resource ID** | CSK_USR_AccessRights |
| **Description** | Administration (PMO Accelerator) |
| **Folder** | Clarity /Reports/Administration/User Access Rights |
| **Path** | /ca_ppm/reports/administration/CSK_USR_AccessRights |
| **Data Source** | Clarity Bean Data Source |

#### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Resource OBS Type | resourceOBSTypeKeyRequired | Single-select Query | resourceOBSTypeKeyRequired | Yes | |
| Resource OBS Unit | resourceOBSUnitKeyRequired | Single-select Query | resourceOBSUnitKeyRequired | Yes | |
| Resource Manager | resourceManagerKey_1 | Multiple-select Query | resourceManagerKey_1 | No | |
| Primary Role | primaryRoleKey_1 | Multiple-select Query | primaryRoleKey_1 | No | |
| Resource | resourceKey_1 | Multiple-select Query | resourceKey_1 | No | |
| Employment Type | employmentTypeKey_1 | Multiple-select Query | employmentTypeKey_1 | No | |
| Access Right Type | accessRightType | Multiple-select Query | accessRightType | Yes | Global, Instance, OBS Unit |
| Access Right | accessRight | Multiple-select Query | accessRight | Yes | |
| Group By 1 | groupAccessRightResource | Single-select List of Values | groupAccessRightResource | Yes | Resource |
| Group By 2 | groupAccessRightType | Single-select List of Values | groupAccessRightType | Yes | Access Right Type |
| Database Schema | ppmDBSchema | Hidden | Not applicable | Yes | Passed through Classic PPM |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Classic PPM |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Classic PPM |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Classic PPM |

#### Parameter Lookup Values
- **Employment Type**: Contractor, Employee
- **Access Right Type**: Global, Instance, OBS Unit
- **Group By 1**: Access Right, Resource
- **Group By 2**: No Grouping, Access Right Type

#### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter that determines which units are listed in the Resource OBS Unit parameter. This parameter does not directly control which resources display in the report.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources attached to the OBS unit and descendants of the unit you select.
- The **Access Right Type** parameter allows you to select which type of access right to include in the report:
- **Global** - The report displays global access rights granted through the resource, group, or resource OBS unit.
- **Instance** - The report displays instance access rights granted through the resource, group, or resource OBS unit.
- **OBS Unit** - The report displays OBS unit access rights granted through the resource, group, or resource OBS unit.
- The **Group By 1** parameter allows you to control how the report is grouped:
- **Access Right** - Groups the body of the report by access right name and description. Allows you to display a list of all resources with a particular right. If you group by access right, there is no drill down to the User Access Rights Detail report.
- **Resource** - Groups the body of the report by resource. If you group by resource, there is a drill down to the User Access Rights Detail report.
- The **Group By 2** parameter allows you to control how the report is subgrouped:
- **No Grouping** - Does not apply a subgrouping.
- **Access Right Type** - Does a subgrouping by access right type (global, instance, OBS unit).

#### Report Fields and Calculations

If the report is grouped by resource, then the report displays the following columns: access right name, access right type, access right to OBS unit, granted through type, granted through, and access right description. The access right type does not display as a column if the report is subgrouped by this option. If the report is grouped by resource, the instance level rights drill down to the User Access Rights Detail report displaying the instance names to which the user has access.

If the report is grouped by access right, then the report displays the following columns: resource name, primary role, resource manager, access right type, access right to OBS unit, granted through type, and granted through. The access right type does not display as a column if the report is subgrouped by this option. The grouping displays the access right name and description.

Users with a status of "Active" are included. Users with a status of "Inactive" or "Lock" are excluded. Resources only are included; roles are excluded.

This report contains the following columns:
- **Access Right To OBS Unit** - Displays data if the Access Right Type is "OBS Unit". The column displays the OBS Type and Unit to which the user has access for the access right.
- **Granted Through Type** - Displays how the access right is granted:
- **Resource** - The access right is assigned directly to the user.
- **Group** - The access right is assigned to a group and the resource belongs to the group.
- **OBS Unit** - The access right is assigned to a resource OBS unit. The resource OBS must have the option set for "Used for Access Rights" (**Administration / Organization and Access / OBS**).
- **Granted Through** - Displays the specific resource, group, or OBS unit through which the access right is granted.

#### Report Security

Security is determined by resource view rights.

---

### PMO Reports: User Access Rights Detail

The User Access Rights Detail report displays the instances (for example, portlet, project, portfolio) to which a resource has access for one instance level right. The report includes the following columns: instance name, instance ID, and description.

#### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The user must have a status of "Active" to display in the report. Users with a status of "Inactive" or "Lock" do not display in the report even if the active flag on the resource is checked.
- Global access rights display if the user is granted at least one Global access right directly, through a group, or through a resource OBS unit used for access rights.
- Instance access rights display if the user is granted at least one Instance access right directly, through a group, or through a resource OBS unit used for access rights.
- OBS Unit access rights display if the user is granted at least one OBS Unit access right directly, through a group, or through a resource OBS unit used for access rights.

#### Report Properties

| Property | Value |
|---|---|
| **Name** | User Access Rights Detail |
| **Resource ID** | CSK_USR_AccessRightsDetail |
| **Description** | Administration (PMO Accelerator) |
| **Folder** | Clarity /Reports/Administration/User Access Rights Detail |
| **Path** | /ca_ppm/reports/administration/CSK_USR_AccessRightsDetail |
| **Data Source** | Clarity Bean Data Source |

#### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Resource OBS Type | resourceOBSTypeKeyRequired | Single-select Query | resourceOBSTypeKeyRequired | Yes | |
| Resource OBS Unit | resourceOBSUnitKeyRequired | Single-select Query | resourceOBSUnitKeyRequired | Yes | |
| Resource Manager | resourceManagerKey_1 | Multiple-select Query | resourceManagerKey_1 | No | |
| Primary Role | primaryRoleKey_1 | Multiple-select Query | primaryRoleKey_1 | No | |
| Resource | resourceKeyActive | Multiple-select Query | resourceKeyActive | No | |
| Employment Type | employmentTypeKey_1 | Multiple-select Query | employmentTypeKey_1 | No | |
| Access Right | instanceAccessRight | Multiple-select Query | instanceAccessRight | Yes | |
| Database Schema | ppmDBSchema | Hidden | Not applicable | Yes | Passed through Classic PPM |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Classic PPM |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Classic PPM |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Classic PPM |

#### Parameter Lookup Values
- **Employment Type**: Contractor, Employee

#### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter that determines which units are listed in the Resource OBS Unit parameter. This parameter does not directly control which resources display in the report.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources attached to the OBS unit and descendants of the unit you select.

#### Report Fields and Calculations

The report is for one instance level right and resource. The report displays the instances (for example, portlet, project, portfolio) to which a resource has access for the instance level right. The report includes the following columns: instance name, instance ID, and description.

Users with a status of "Active" are included. Users with a status of "Inactive" or "Lock" are excluded. Resources only are included; roles are excluded.

#### Report Security

Security is determined by resource view rights.

---

### PMO Reports: Database Connection Check to Clarity and DWH

The PMO Accelerator Advanced Reporting content includes two reports for checking the database connections to the main Clarity transactional database and the data warehouse database:
- Database Connection Check: Report
- Database Connection Check: Data Warehouse Report

#### Database Connection Check: Classic PPM Report

The Database Connection Check: Classic PPM report monitors the health of the transactional database connection. The report includes the data source connection, the database vendor, and the database schema. The report also displays the database link that is used to access the transactional database from the Data Warehouse.

**Report Prerequisites**: None.

**Report Properties**:

| Property | Value |
|---|---|
| **Name** | Database Connection Check: Clarity |
| **Resource ID** | CSK_ADM_DatabaseConnectionCheckPPM |
| **Description** | Administration (PMO Accelerator) |
| **Folder** | Clarity /Reports/Administration/Database Connection Check: Clarity |
| **Path** | /ca_ppm/reports/administration/CSK_ADM_DatabaseConnectionCheckPPM |
| **Data Source** | Clarity Bean Data Source |

**Report Parameter Options**:

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| UI Theme | ppmUserUITheme | Hidden | Yes | Passed through Classic PPM |
| DB Vendor | ppmDBVendor | Hidden | Yes | Passed through Classic PPM |
| DB Schema | ppmDBSchema | Hidden | Yes | Passed through Classic PPM |
| DB Link | dwhDBLink | Hidden | Yes | Passed through Classic PPM |

**Parameter Lookup Values**: None.

**Parameter Explanations**: None.

**Report Fields and Calculations**:

The report displays a green bulb gauge that shows "Normal" when the connection is successful. The report query performs a simple SELECT statement to verify the connection. If the connection is unsuccessful, the following error message appears:

> The server has encountered an error. Excuse the inconvenience.

This message indicates that the report cannot be executed due to issues with the Clarity Bean Data Source connection.

This report contains the following fields:
- **Data Source**: Displays the data source name "Clarity BEAN".
- **DB Vendor**: Displays Oracle or Microsoft SQL Server depending upon the value of the DB Vendor parameter that is passed through Classic PPM.
- **DB Schema**: Displays the value of DB Schema parameter that is passed through Classic PPM.
- **DB Link**: Displays the value of the DB Link parameter that is passed through Classic PPM. The report does not verify the existence of the database link. The report displays the DBLINK name that is defined in CSA that is passed into Advanced Reporting from Classic PPM.

**Report Security**: None.

#### Database Connection Check: Data Warehouse Report

The Database Connection Check: Data Warehouse report monitors the health of the database connection to the data warehouse (DWH). The report displays information relevant to the DWH database, such as the data source connection, the database vendor, and the schema. The report also displays the database link from the Clarity transactional database.

**Report Prerequisites**: None.

**Report Properties**:

| Property | Value |
|---|---|
| **Name** | Database Connection Check: Data Warehouse |
| **Resource ID** | CSK_ADM_DatabaseConnectionCheckDWH |
| **Description** | Administration (PMO Accelerator) |
| **Folder** | Clarity /Reports/Administration/Database Connection Check: Data Warehouse |
| **Path** | /ca_ppm/reports/administration/CSK_ADM_DatabaseConnectionCheckDWH |
| **Data Source** | Clarity DWH Bean Data Source |

**Report Parameter Options**:

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| UI Theme | ppmUserUITheme | Hidden | Yes | Passed through Classic PPM |
| DB Vendor | dwhDBVendor | Hidden | Yes | Passed through Classic PPM |
| DB Schema | dwhDBSchema | Hidden | Yes | Passed through Classic PPM |
| DB Link | dwhDBLink | Hidden | Yes | Passed through Classic PPM |

**Parameter Lookup Values**: None.

**Parameter Explanations**: None.

**Report Fields and Calculations**:

The report displays a green bulb gauge that shows "Normal" when the connection is successful. The report query performs a simple SELECT statement to verify the connection. If the connection is unsuccessful, the following error message appears:

> The server has encountered an error. Excuse the inconvenience.

This message indicates that the report cannot be executed due to issues with the DWH Bean Data Source connection.

This report contains the following fields:
- **Data Source**: Displays the data source name "Classic PPM DWH BEAN".
- **DB Vendor**: Displays Oracle or Microsoft SQL Server depending on the value of the DB Vendor parameter that is passed through Classic PPM.
- **DB Schema**: Displays the value of DB Schema parameter that is passed through Classic PPM.
- **DB Link**: Displays the value of the DB Link parameter that is passed through Classic PPM. The report does not verify the existence of the database link.

**Report Security**: None.

---

### PMO Reports: Customizations Overview

The Customizations Overview report lists content that is not included out-of-the-box with Clarity so you can quickly identify custom content added to Clarity. The report contains database objects such as tables, views, functions, etc. that are not included out-of-the-box with the Clarity schema. The report also contains other types of custom content created in Clarity, such as Studio objects and attributes, NSQL queries, GEL scripts, reports, and jobs.

The report is grouped by "Database Objects" or "Clarity," and sub-grouped by the content item type.

#### Report Prerequisites

There are no prerequisites for this report.

#### Report Properties

| Property | Value |
|---|---|
| **Name** | Customizations Overview |
| **Resource ID** | CSK_ADM_Customizations |
| **Description** | Administration (PMO Accelerator) |
| **Folder** | Clarity /Reports/Administration/Customizations Overview |
| **Path** | /ca_ppm/reports/administration/CSK_ADM_Customizations |
| **Data Source** | Clarity Bean Data Source |

#### Report Parameter Options

| Prompt Text | Parameter Name | Type | Input Control Resource ID | Mandatory | Default Value |
|---|---|---|---|---|---|
| Content Type | contentType | Multiple-select List of Values | contentType | No | |
| Content Item | contentItem | Single Value Text | contentItem | No | [Null] |
| Content Item ID | contentItemID | Single Value Text | contentItemID | No | [Null] |
| Include SQL Query | includeSQLQuery | Boolean | includeSQLQuery | No | Unchecked |
| Include Script Text | includeScriptText | Boolean | includeScriptText | No | Unchecked |
| UI Theme | ppmUserUITheme | Hidden | Not applicable | Yes | Passed through Clarity |
| Language | ppmUserLanguage | Hidden | Not applicable | Yes | Passed through Clarity |
| User ID | ppmUser | Hidden | Not applicable | Yes | Passed through Clarity |
| Database Vendor | ppmDBVendor | Hidden | Database: Clarity | Yes | Passed through Clarity |

#### Parameter Lookup Values
- **Content-Type**: Attribute, Custom Script, Object, Query, Report, Job, Function, Index, Package, Package Body, Stored Procedure, Table, Trigger, View

#### Parameter Explanations
- The **Content-Type** parameter allows you to select which type of custom content or database object to include in the report:
- **Attribute** - A list of custom attributes created in Studio Objects in Clarity.
- **Custom Script** - A list of custom GEL scripts available in processes.
- **Object** - A list of custom Studio objects created in Clarity.
- **Query** - A list of custom NSQL queries created in Clarity.
- **Report** - A list of custom report definitions created in Clarity.
- **Job** - A list of custom job definitions created in Clarity.
- **Function** - A list of functions created in the Clarity schema.
- **Index** - A list of indexes created in the Clarity schema.
- **Package** - A list of packages created in the Clarity schema.
- **Package Body** - A list of package body definitions created in the Clarity schema.
- **Stored Procedure** - A list of stored procedures created in the Clarity schema.
- **Table** - A list of tables created in the Clarity schema.
- **Trigger** - A list of triggers created in the Clarity schema.
- **View** - A list of views created in the Clarity schema.
- The **Content Item** parameter allows you to select any content item whose name matches exactly or partially the name provided. The Content Item parameter is not case sensitive, and you do not need to use wild card filters.
- The **Content Item ID** parameter allows you to select any content item whose id matches exactly or partially the id provided. The Content Item ID parameter is not case sensitive, and you do not need to use wild card filters.
- The **Include SQL Query** parameter controls whether the code of the NSQL query displays in the report. If the parameter is checked, then the SQL code of any custom NSQL query included in the report displays in the SQL Query/Script Text column.
- The **Include Script Text** parameter controls whether the code of a GEL script displays in the report. If the parameter is checked, then the GEL script code of any custom process included in the report displays in the SQL Query/Script Text column.

#### Report Fields and Calculations

The report displays the content item name and the content item id. If the **Include SQL Query** parameter is selected, the report displays the code of the corresponding NSQL query in the SQL Query/Script Text column. If the **Include Script Text** parameter is selected, the report displays the code of the corresponding GEL script in the SQL Query/Script Text column.

> [!IMPORTANT]
> It is recommended to combine other filter options and control the results yielded by the report when selecting these options as they can generate a huge output.

The report is grouped by "Database Objects" (functions, indexes, packages, package bodies, stored procedures, tables, triggers, and views) or by "Clarity" (Studio objects and attributes, NSQL queries, GEL scripts, reports, and jobs).

Database objects that are registered in the CMN_DB_HISTORY_TABLE during installations and upgrades are not listed by the report. The report excludes NSQL queries that belong to the following add-ins: Agile Addin, Application Portfolio Management, and Accelerator: Program Management Office. Studio objects and attributes that belong to those same add-ins are also not listed. Attributes that are marked as System and not marked as custom attributes or have an extended type as "obs" or "obs_entity" are not listed. Custom scripts that are GEL Scripts (include `gel:setDataSource` as part of their code) and are used in processes are listed by the report. Only custom jobs that have SQL Stored Procedure as executable type are listed by the report.

#### Report Security

There is no security check in the report query.

---

## Data Warehouse Trend Reporting

The data warehouse supports your business intelligence and analytics trend reporting efforts by capturing trending snapshots. Tables and jobs are available to help you capture snapshots of important data. You can compare the data over time and make observations about how it is trending. For example, labor costs are trending down while planned ROI is trending up.

This section provides administrators, architects, and report developers with the technical details for setting up and managing the trending capabilities.

### Trending Snapshots

Trending data is dynamically defined through your seed data. Each trend is a series of snapshots of different data warehouse tables. You can run jobs that take snapshots of data to be used in trending reports. The frequency of trending data is flexible.
- Trending has its own set of jobs that depend on the **Load Data Warehouse** job.
- The jobs do not depend on the Data Warehouse Load Access Rights job.
- Trending references only the data warehouse tables; it does not use the Clarity transactional database.
- The data warehouse harvests your trending data from its other existing tables. Those tables are already aggregated and summarized. When updating and connecting to trending data in the data warehouse, performance is already optimized by design.

Trending has been set up to dynamically configure itself by checking the metadata tables and making the database object changes defined in those meta tables. Programmatic changes are not required in order to add tables or columns in future snapshots.

The system uses the following six metadata tables to support trending:

| Table | Description |
|---|---|
| **DWH_TRD_META_tables** | Contains information about the tables that are included in the trending snapshot. |
| **DWH_TRD_META_odf_tables** | Contains ODF information about the tables included in the trending snapshot. You cannot make changes to this table. |
| **DWH_TRD_META_columns** | Contains information about the table columns that are included in the trending snapshot. |
| **DWH_TRD_META_odf_columns** | Contains ODF information about the table columns included in the trending snapshot. |
| **DWH_TRD_META_idx_pk_fk** | Contains information about the table indexes, primary keys and foreign keys. |
| **DWH_TRD_META_odf_idx_pk_fk** | Contains ODF information about the table indexes, primary keys and foreign keys. You cannot make changes to this table. |

> [!NOTE]
> The specific tables, views, columns, indexes, and keys can change over time. Changes appear automatically after the trending jobs run.

### Trending Structural Tables

The following tables provide the structure for generating and maintaining trending data:
- **DWH_TRD_trend**: This header table stores key information about each trend. It includes the unique trend key, trend name, trend type, the run time start and end dates, and the snapshot year.
- **DWH_TRD_trend_detail**: This table stores details about each snapshot. It includes the trend key, the target table that was refreshed, and the start and end dates.
- **DWH_TRD_trend_history**: Historical information about when the trends were updated. If you update a trend multiple times, the history shows the details including the last run date of the data warehouse at the time of the trend update.
- **DWH_TRD_trend_deletion**: Stores the date and time of trend deletion.
- **DWH_TRD_gen_facts**: Temporary table for processing; stores data structures.
- **DWH_TRD_tmp_current_key**: Temporary table for processing; stores information about the current trend.

### Trending Jobs

To configure your own trending data, use the following three jobs:
- **Create Data Warehouse Trend**: To define parameters that establish your new trend, run this initial job. For example, you could create a trend to analyze monthly changes in spending for a particular year.
- **Update Data Warehouse Trend**: To refresh an existing snapshot with new data, run or schedule this job.
- **Delete Data Warehouse Trend**: This job deletes your previous snapshots. You can delete snapshots by specifying a named trend or by entering a specific date or relative date. The job deletes all snapshots in that trend or all snapshots from all trends prior to your selected date.

> [!NOTE]
> The data warehouse creates all the necessary trending tables only after you run the Load Data Warehouse and Create Data Warehouse Trend jobs.

### Trending Data Tables

The following tables store the trending source data that report developers can use to build trending reports and dashboards. These tables track the slow progressive changes in dimensions for investments, resources, and OBS mappings:
- `DWH_TRD_INV_INVESTMENT`
- `DWH_TRD_INV_INVESTMENT_LN`
- `DWH_TRD_RES_RESOURCE`
- `DWH_TRD_LKP_OBS_UNIT`
- `DWH_TRD_INV_OBS_MAPPING`
- `DWH_TRD_RES_OBS_MAPPING`
- `DWH_TRD_INV_MONTH_FACTS`
- `DWH_TRD_RES_MONTH_FACTS`
- `DWH_TRD_INV_SUM_FACTS`

Investment, resource, and investment summary facts are included in the trending snapshots. Snapshots can capture monthly changes to individual attributes. Common examples of popular trending data might include changes to the following attributes:
- Investment OBS
- Resource OBS
- OBS mapping
- Investment manager
- Status and KPI values
- Actual hours
- Dates
- Resource manager
- Booking manager
- Primary role

> [!TIP]
> Examine trending data to identify answers to popular questions:
> - "What locations or departments have added the most staff in the last six months?"
> - "Are actuals trending up or down, and on which investments?"
> - "How are forecasts trending against budgets over the most recent four quarters?"
> - "Is project status trending in the right direction this quarter?"
> - Human Resources might want to know when the number of resources in the primary role of Chief Data Scientist drops below three to refresh its staffing efforts.

### Trending Views

Three trending materialized views are available to guide you to the appropriate data in the warehouse:
- **DWH_TRD_PER_TREND_BY_F_MV**: Fiscal period data.
- **DWH_TRD_PER_TREND_BY_M_MV**: Monthly calendar data.
- **DWH_TRD_PER_TREND_BY_W_MV**: Weekly data.

All three views share the same table column layout.

### Enable a Custom Attribute for Trending

You can enable custom attributes for trending in the investment, resource, and project objects. Stock non-project investment objects (NPIOs) also support custom attribute trending including applications, assets, products, services, and other work.

To configure trending, enable the object and attribute for the data warehouse and then enable them again, specifically, for trending.

1. Click **Administration**, **Studio**, **Objects**.
2. Open an object that supports trending. The **Include in the Data Warehouse Trending** check box for all objects is read-only. If the object supports trending, this field is still disabled (grayed-out), but the option is pre-selected. If the object does not support trending, the check box is not selected.
3. Click the **Attributes** tab.
4. To filter on attributes that are enabled or not enabled for trending, use the **Data Warehouse Trending** filter field.
5. To add a new custom attribute, click **New**.

> [!TIP]
> Trending is limited to the following types of custom attributes: string, number, date, lookup, formula, calculated, aggregated, and Boolean.

6. To enable the custom attribute for the data warehouse, select **Include in the Data Warehouse**.
7. To enable it for trending, select **Include in the Data Warehouse Trending**. The trending ETL jobs now include any custom attributes that you enable for trending.

> [!TIP]
> When a user disables an attribute that was previously enabled for the data warehouse, the application also clears the trending check box.

### Trend Reporting Examples

#### Project KPI Trends

The Project KPI Trends report is available as an example of the applied use of trending snapshots. Trend reporting helps teams and leadership identify overall patterns that shift over time. Use the Project KPI Trends report to monitor key performance indicators and establish priorities. For example, track the quantity and severity of open risks, issues, change requests, and to-do items over time.

#### Trended Metrics by Project

The Trended Metrics by Project report serves as a second example of trend reporting. It compares key financial data for core investments by fiscal period (for example, by month).

This report is populated with your pre-defined trending data already configured and extracted to the data warehouse. You can run the report for a single month, up to 12 months, or up to 12 fiscal periods. When users run or schedule this report, they can select up to five (5) of the following project metrics:

| Metric Group 1 | Metric Group 2 |
|---|---|
| Actual Cost | EAC Cost |
| Actual Hours | EAC Hours |
| Allocation Cost | ETC Cost |
| Allocation Hours | ETC Hours |
| Baseline Cost | Forecast Cost |
| Baseline Hours | Planned Benefit |
| Budgeted Benefit | Planned Cost |
| Budgeted Cost | |

### XOG Support for Trending

To support trending in the XOG, a new `dwTrendEnabled` Boolean attribute appears in the XML for imported and exported Clarity objects and attributes. Developers refer to this XML attribute as the trending flag.

The same business rules apply for both the user interface and XOG. Developers might manually update the trending flag in their XOG export file. Changes could occur that do not adhere to the trending business rules. For example, a XOG import attempts to create or update an attribute that cannot be enabled for trending. In this scenario, the following warning message appears:

> Attribute <attribute ID> cannot be enabled for trending.

The XOG import continues but skips that specific change in trending properties for that particular attribute.

### Troubleshooting SQL Errors in Trending Jobs

If SQL errors occur during the execution of a trending job, examine the following details in the `DWH_TRD_ERROR_MESSAGES` table:
- `ERROR_MESSAGE`
- `ERROR_NUMBER`
- `SQL_COMMAND`
- `TABLE_NAME`

The `SQL_COMMAND` field includes the offending statement that triggered the error.

> [!NOTE]
> **More Information**:
> - Jobs Reference
> - Oracle and MS SQL Database Schema Changes
> - (SaaS only) Configure OData Access to the Data Warehouse
