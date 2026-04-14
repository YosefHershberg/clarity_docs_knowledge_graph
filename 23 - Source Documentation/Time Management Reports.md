# Time Management Reports

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[11 - Reporting/_MOC Reporting|Reporting]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[18 - Advanced Reporting/PMO Accelerator Reports/Time Reports]]
- [[11 - Reporting/Report Designer/Creating Your First Report]]
- [[11 - Reporting/Working with Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Investment Reports]]
- [[11 - Reporting/Report Designer/Drill Down Reports]]
- [[11 - Reporting/Exporting Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/PMO Admin Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Portfolio Reports]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Resource Time Review by Manager (#resource-time-review-by-manager)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Resource Time Summary and Detail (#resource-time-summary-and-detail)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Timesheet Detail (#timesheet-detail)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Time Compliance (#time-compliance)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Time Compliance Detail (#time-compliance-detail)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Missing Time (#missing-time)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)

The Time Management reports provide visibility into timesheets that are entered by resources across the organization. They also provide insight into any timesheets that are missing for resources who should be entering time.

The following reports are included with Time Management:
- Resource Time Review by Manager
- Resource Time Summary and Detail
- Timesheet Detail
- Time Compliance
- Time Compliance Detail
- Missing Time

---

## Resource Time Review by Manager

The Resource Time Review by Manager report displays timesheet entries for each resource, grouped by investment manager or resource manager. This report displays the hours that are entered on the timesheet by day and in total for each investment and time entry, and for each resource.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- Run the **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- There must be at least one timesheet for the time period and there must be a timesheet status that is selected when running the report. If not, the report displays a message that there are no results that match your criteria.
- There must be time reporting periods created, with a scale of weekly (**Administration / Project Management - Time Reporting Periods**). The time reporting period must have a status of **Open** to enter time in the period. The report supports time reporting periods that are set up with a scale of weekly. The weekly periods can start on any day of the week, and the periods are reflected correctly in the report column headings. The report does not support time reporting periods that are set up with any of the following scales: annual, monthly, quarterly, semiannual, daily, biweekly. These other scale types do not display correctly in the report.
- The resource who is entering time must have the **Open for Time Entry** field checked and the **Track Mode** set to **Clarity** or **Other** to enter time. The resource date of hire must be blank, before the time period, or within the time period for the resource to enter time for the period. The resource date of termination must be blank, after the time period, or within the time period for the resource to enter time for the period.
- The investment must have the **Open for Time Entry** field checked and the track mode set to **Clarity** to enter time against the investment. If the investment is a project, then the **Open for Time Entry** field on the task must also be checked to enter time against the task.
- The investment must have at least one resource assigned to a task for the resource to enter time against the investment and for it to display in the report. For projects, the resource must be assigned to a task in the Gantt, unless the project has an effort task with resources automatically assigned. For investments other than the project, resources added to the team are automatically assigned to an effort task for the investment.

> [!NOTE]
> Effort task is a task with the Task ID of `~rmw`.
- In a timesheet, resources can also assign themselves to tasks if they are a team member on the project and the **Prevent Unassigned Timesheet Tasks** field is unchecked on the project. This field is in the time and staff section of the settings properties on the project. Resources can also create unplanned tasks in a timesheet if they are team members on the project and have the appropriate permissions (**Project - Edit Project Plan**).
- The timesheet hour amounts are calculated based on the time slice with the name `DAILYRESOURCETIMECURVE` (**Administration / Data Administration - Time Slices**).

### Report Properties

| Property | Value |
|---|---|
| **Name** | Resource Time Review by Manager |
| **Resource ID** | `CSK_RES_ResTimeReviewByMgr` |
| **Description** | Time Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Time Management/Resource Time Review by Manager` |
| **Path** | `/ca_ppm/reports/time_management/CSK_RES_ResTimeReviewByMgr` |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select Query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select Query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select Query | No | |
| Resource | `resourceKey_1` | Multiple-select Query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select Query | No | |
| Investment Type | `investmentTypeKey_1` | Multiple-select Query | Yes | All |
| Investment Manager | `investmentManagerKey_1` | Multiple-select Query | No | |
| Investment | `investmentKey_1` | Multiple-select Query | No | |
| Time Period | `timePeriod` | Multiple-select Query | Yes | |
| Timesheet Status | `timesheetStatusKey_1` | Multiple-select Query | Yes | Open, Submitted, Returned, Approved, and Posted |
| Group By | `groupResManagerInvManager` | Single-select List of Values | Yes | Resource Manager |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Investment Type:** All, Application, Asset, Idea, Other Work, Product, Project, Service
- **Time Period:** Current Time Period, Next Time Period, Previous Time Period, List of Time Periods
- **Timesheet Status:** Open, Submitted, Returned, Approved, Posted, Adjusted
- **Group By:** Investment Manager, Resource Manager

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter that determines which units are listed in the **Resource OBS Unit** parameter. This parameter is not used to control directly which resources display in the report.
- The **Resource OBS Unit** parameter displays values that are based on the selected Resource OBS Type. When you select an OBS unit in this parameter, the report displays the resources that are attached to the OBS unit and descendants of the unit you select.
- The **Time Period** parameter allows you to determine which time periods display on the report. Select at least one time period when you run the report.
- The **Timesheet Status** parameter works with the time period parameter. The report only displays time periods with the timesheet status you select when you run the report. One of the values in the timesheet status parameter is **Adjusted**, and this status requires some additional explanation. An adjusted timesheet is a timesheet that was posted in Classic PPM, but then changes were made to the timesheet and it was reposted. As a general rule, it does not make sense to display adjusted timesheets in reports because these timesheets have been replaced with more recently posted timesheets. While the status of Adjusted is available as an option to allow visibility into adjusted timesheets, you should not typically select this status when you run the report.
- The report has a **Group By** parameter that allows you to control how the report is grouped. The following group options are available:
- **Investment Manager** - This option groups the report by investment manager.
- **Resource Manager** - This option groups the report by resource manager.

### Report Fields and Calculations

The report displays the timesheet period ending, timesheet status, type of time entry, investment, description, task status, input type code, and the timesheet amounts by day and in total. The report includes labor resources only and the timesheet amounts are in hours.

The report is formatted to display seven days in the time period; therefore, only weekly time periods are supported for this report. If your weekly time periods start on a day other than Monday, the report adjusts the column headings accordingly. For example, your weekly periods may start on Sunday. In this case, the report columns display Sunday through Saturday instead of Monday through Sunday.

### Report Security

Security is determined by resource view rights.

---

## Resource Time Summary and Detail

The Resource Time Summary and Detail report displays timesheet hours and notes for each resource and time period. The report may be grouped by resource manager, time period, or any OBS level.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The report displays resources that are set up to enter time in Classic PPM. If the resource does not have a timesheet in Classic PPM for the time period and the timesheet status was selected when running the report, then the resource displays in the report with a timesheet status of Open with zero hours. It is not necessary to have at least one timesheet for the resource to display in the report.
- The resource is considered set up for time entry if the following conditions are met on the resource: the **Open for Time Entry** field is checked; the **Track Mode** set to **Clarity** or **Other**; the date of hire is blank, prior to the time period, or within the time period; and the date of termination is blank, after the time period, or within the time period.
- The investment must have the **Open for Time Entry** field checked and the track mode set to **Clarity** in order to enter time against the investment. If the investment is a project, then the **Open for Time Entry** field on the task must also be checked in order to enter time against the task.
- The investment must have at least one resource assigned to a task in order for the resource to enter time against the investment and for it to display in the report. For projects, the resource must be assigned to a task in the Gantt, unless the project has an effort task with resources automatically assigned. For investments other than the project, resources added to the team are automatically assigned to an effort task for the investment.

> [!NOTE]
> Effort task is a task with the Task ID of `~rmw`.
- In a timesheet, resources may also assign themselves to tasks if they are team members on the project and the **Prevent Unassigned Timesheet Tasks** field is unchecked on the project. This field is in the time and staff section of the settings properties on the project. They can also create unplanned tasks in a timesheet if they are a team member on the project and have the appropriate permissions (**Project - Edit Project Plan**).
- The timesheet hour amounts are calculated based on the time slice with the name `DAILYRESOURCETIMECURVE` (**Administration / Data Administration - Time Slices**).

### Report Properties

| Property | Value |
|---|---|
| **Name** | Resource Time Summary and Detail |
| **Resource ID** | `CSK_RES_TimeSummaryAndDetail` |
| **Description** | Time Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Time Management/Resource Time Summary and Detail` |
| **Path** | `/ca_ppm/reports/time_management/CSK_RES_TimeSummaryAndDetail` |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select Query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select Query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select Query | No | |
| Resource | `resourceKey_1` | Multiple-select Query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select Query | No | |
| Time Period | `timePeriod` | Multiple-select Query | Yes | |
| Timesheet Status | `timesheetStatusKey_1` | Multiple-select Query | Yes | Open, Submitted, Returned, Approved, and Posted |
| Group By | `groupResManagerTimePeriodOBS` | Single-select List of Values | Yes | Resource Manager |
| Include Zero Hour Timesheets? | `includeZeroHourTimesheets` | Boolean | No | Checked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Time Period:** Current Time Period, Next Time Period, Previous Time Period, List of Time Periods
- **Timesheet Status:** Open, Submitted, Returned, Approved, Posted, Adjusted
- **Group By:** Resource Manager, Time Period, OBS Level 1-10

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter and determines which units are listed in the **Resource OBS Unit** parameter. This parameter is not used to directly control which resources display in the report.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources attached to the OBS unit and descendants of the unit you select.
- The **Time Period** parameter allows you to determine which time periods display on the report. You must select at least one time period when you run the report.
- The **Timesheet Status** parameter works with the time period parameter. The report only displays time periods with the timesheet status you select when you run the report. One of the values in the timesheet status parameter is **Adjusted** and this status requires some additional explanation. An adjusted timesheet is a timesheet that has been posted in Classic PPM, but then changes are made to the timesheet and it is reposted. As a general rule, it does not make sense to display adjusted timesheets in reports because these timesheets have been replaced with more recently posted timesheets. While the status of Adjusted is available as an option to allow visibility into adjusted timesheets, it should not normally be selected when running the report.
- The report has a **Group By** parameter that allows you to control how the report is grouped. The following group options are available:
- **Resource Manager** - This option groups the report by resource manager and displays the following columns as the first three columns in the report: resource name, time period start, and time period end.
- **Time Period** - This option groups the report by time reporting period and displays the following columns as the first two columns in the report: resource name and resource manager.
- **OBS Level 1-10** - This option groups the report by OBS level and displays the following columns as the first three columns in the report: resource name, time period start, and time period end. This grouping option requires that you select a unit in the resource OBS parameter in order to group by an OBS level. The resource OBS parameter and grouping by an OBS level work with one another. The resource OBS parameter determines which OBS you group by when you select a group by level. You can group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS that is supported in Classic PPM. OBS level 1 is the top level in the hierarchy and OBS level 10 is the bottom level in the hierarchy. When you group by an OBS level, the resources attached to OBS units at the level that you select and any units below the level that you select are rolled up to the group by level of the report. If you group by an OBS level that is lower in the hierarchy, then the report groups the resources by this level (for example, OBS Level 4). If resources are associated to units above level 4 (for example, resources are attached to levels 2 and 3), then the resources that are associated to units higher in the hierarchy display in the report in an **Undefined** grouping. The Undefined grouping indicates that there is no OBS unit that is defined for the resource at the level by which you are grouping. If you group by an OBS level but you do not select a unit in the resource OBS parameter, then the report returns results; however, it will not group by an OBS level because it relies on the resource OBS parameter to determine which OBS to use for grouping.

### Report Fields and Calculations

If the report is grouped by resource manager or OBS level, then the report displays the following columns: resource name, time period start, time period end, timesheet status, adjustment, hours, note category, and notes. If the report is grouped by time period, then the report displays the following columns: resource name, resource manager, timesheet status, adjustment, hours, note category, and notes. The amounts are displayed in hours and include labor resources only.

Resources must have **Open for Time Entry** checked and **Track Mode** set to **Clarity** or **Other** to be included in the report. Resources must be employed during the time period selected in the parameter to be included in the report, which means that resources must have a hire date less than the report time period finish date or no hire date. Resources must also have a date of termination greater than the report time period start date or no date of termination. Resources only are included; roles are excluded.

The adjustment column displays a check mark icon if the timesheet for the period is an adjustment timesheet for a previously posted timesheet. The hours for the resource are the total hours entered on the resource timesheet for the time period. The note category and notes columns are the notes that are entered on the timesheet. If the timesheet has more than one note, then the other notes appear as additional rows on the report for the resource and time period.

### Report Security

Security is determined by resource view rights.

---

## Timesheet Detail

The Timesheet Detail report displays timesheet entries for a resource and time period. The timesheet entries include tasks, other time, incidents, and indirect time. The report shows the timesheet hours by day and in total, with any notes related to the time entry.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The report displays resources that are set up to enter time in Classic PPM. If the resource does not have a timesheet in Classic PPM for the time period and the timesheet status was selected when running the report, then the resource displays in the report with a timesheet status of Open with zero hours. It is not necessary to have at least one timesheet for the resource to display in the report.
- The resource is considered set up for time entry if the following conditions are met on the resource: the **Open for Time Entry** field is checked; the **Track Mode** set to **Clarity** or **Other**; the date of hire is blank, prior to the time period, or within the time period; and the date of termination is blank, after the time period, or within the time period.
- The investment must have the **Open for Time Entry** field checked and the track mode set to **Clarity** to enter time against the investment. If the investment is a project, then the **Open for Time Entry** field on the task must also be checked to enter time against the task.
- The investment must have at least one resource that is assigned to a task for the resource to enter time against the investment and for it to display in the report. For projects, the resource must be assigned to a task in the Gantt, unless the project has an effort task with resources automatically assigned. For investments other than the project, resources added to the team are automatically assigned to an effort task for the investment.

> [!NOTE]
> Effort task is a task with the Task ID of `~rmw`.
- In a timesheet, resources might also assign themselves to tasks if they are team members on the project and the **Prevent Unassigned Timesheet Tasks** field is unchecked on the project. This field is in the time and staff section of the settings properties on the project. They can also create unplanned tasks in a timesheet if they are a team member on the project and have the appropriate permissions (**Project - Edit Project Plan**).
- The timesheet hour amounts are calculated based on the time slice with the name `DAILYRESOURCETIMECURVE` (**Administration / Data Administration - Time Slices**).

### Report Properties

| Property | Value |
|---|---|
| **Name** | Timesheet Detail |
| **Resource ID** | `CSK_RES_TimesheetDetail` |
| **Description** | Time Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Time Management/Timesheet Detail` |
| **Path** | `/ca_ppm/reports/time_management/CSK_RES_TimesheetDetail` |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select Query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select Query | Yes | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select Query | No | |
| Resource | `resourceKey_1` | Multiple-select Query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select Query | No | |
| Time Period | `timePeriod` | Multiple-select Query | Yes | |
| Timesheet Status | `timesheetStatusKey_1` | Multiple-select Query | Yes | Open, Submitted, Returned, Approved, and Posted |
| Include Zero Hour Timesheets? | `includeZeroHourTimesheets` | Boolean | No | Checked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Time Period:** Current Time Period, Next Time Period, Previous Time Period, List of Time Periods
- **Timesheet Status:** Open, Submitted, Returned, Approved, Posted, Adjusted

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter and determines which units are listed in the **Resource OBS Unit** parameter. This parameter is not used to control which resources display in the report.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources that are attached to the OBS unit and descendants of the unit you select.
- The **Time Period** parameter allows you to determine which time periods display on the report. Select at least one time period when you run the report.
- The **Timesheet Status** parameter works with the time period parameter. The report only displays time periods with the timesheet status you select when you run the report. One of the values in the timesheet status parameter is **Adjusted** and this status requires some additional explanation. An adjusted timesheet is a timesheet that has been posted in Classic PPM, but then changes are made to the timesheet and it is reposted. Usually, it does not make sense to display adjusted timesheets in reports because these timesheets have been replaced with more recently posted timesheets. While the status of Adjusted is available as an option to allow visibility into adjusted timesheets, it should not typically be selected when running the report.

### Report Fields and Calculations

The report is grouped by resource and time period and it displays the following columns: investment, description, hours entered for each time entry by day and in total, note category, and notes. If there is more than one note on the time entry, then the other notes appear as additional rows on the report for the time entry.

The report is formatted to display seven days in the time period; therefore, only weekly time periods are supported for this report. If your weekly time periods start on a day other than Monday, the report adjusts the column headings accordingly. For example, your weekly periods may start on Sunday and in this case the report columns display Sunday through Saturday instead of Monday through Sunday.

### Report Security

Security is determined by resource view rights.

---

## Time Compliance

The Time Compliance report displays the timesheet compliance percent by OBS unit. The report also displays the number of timesheets by status and in total for each OBS unit. The report displays the number of timesheets that are open, submitted, returned, approved, and posted for each OBS unit.

This report allows you to drill down to the Time Compliance Detail report, by clicking an OBS unit name, to view the timesheet status by resource in the OBS.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The report displays resources that are set up to enter time in Classic PPM. If the resource does not have a timesheet in Classic PPM for the time period that is selected when running the report, then the resource displays in the report with a timesheet status of Open. You do not need to have at least one timesheet for the resource to display in the report.
- The resource is considered set up for time entry if the following conditions are met on the resource: **Open for Time Entry** field is checked; **Track Mode** set to **Clarity** or **Other**; date of hire is blank, prior to the time period, or within the time period; and date of termination is blank, after the time period, or within the time period.
- Time reporting periods must be created (**Administration / Project Management - Time Reporting Periods**). The time reporting period must have a status of **Open** to enter time in the period.
- The investment must have the **Open for Time Entry** field checked and the **Track Mode** set to **Clarity** to enter time against the investment. If the investment is a project, then the **Open for Time Entry** field on the task must also be checked to enter time against the task.
- The investment must have at least one resource that is assigned to a task for the resource to enter time against the investment. For projects, the resource must be assigned to a task in the Gantt unless the project has an effort task with resources automatically assigned. For investments other than the project, resources added to the team are automatically assigned to an effort task for the investment.

> [!NOTE]
> Effort task is a task with the Task ID of `~rmw`.
> In a timesheet, resources can also assign themselves to tasks if they are team members on the project and the **Prevent Unassigned Timesheet Tasks** field is unchecked on the project. This field is in the time and staff section of the settings properties on the project. They can also create unplanned tasks in a timesheet if they are team members on the project and they have the appropriate permissions (**Project - Edit Project Plan**).
- The **Number of OBS Levels** group by options are dependent on the data mart OBS table (`nbi_dim_obs`) being populated with the OBS unit names for each OBS level. This table is populated by running the **Update Report Tables** job with the update OBS option checked or by running the **Datamart Extraction** job. One of these jobs must be run when an OBS unit is created, deleted, renamed, or any of the OBS unit relationships are modified. For example, run one of these jobs if an OBS unit is moved from one level in the OBS to another level. One of these jobs does not need to be run if you have modified associations of resources to an OBS unit because the association of resources to the OBS is not dependent on the data mart OBS table. For example, you do not need to run one of these jobs if you added resources to an OBS unit, removed resources from an OBS unit, or moved resources from one OBS unit to another.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Time Compliance |
| **Resource ID** | `CSK_TME_Compliance` |
| **Description** | Time Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Time Management/Time Compliance` |
| **Path** | `/ca_ppm/reports/time_management/CSK_TME_Compliance` |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select Query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select Query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select Query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select Query | No | |
| Time Period | `timePeriod` | Multiple-select Query | Yes | |
| Compliance % Yellow Threshold | `compliancePctYellowThreshold` | Single Value Number | Yes | 90 |
| Compliance % Red Threshold | `compliancePctRedThreshold` | Single Value Number | Yes | 75 |
| Number of OBS Levels | `numberOfOBSLevels` | Single-select List of Values | Yes | |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Time Period:** Current Time Period, Next Time Period, Previous Time Period, List of Time Periods
- **Number of OBS Levels:** 1, 2, 3, 4

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter and determines which units are listed in the **Resource OBS Unit** parameter. This parameter is not used to control directly which resources display in the report.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources that are attached to the OBS unit and descendants of the unit you select.
- The **Time Period** parameter allows you to determine which time periods display on the report. Select at least one time period when you run the report.
- The **Compliance % Yellow** and **Compliance % Red Threshold** parameters allow you to control when the background color changes to yellow and red, respectively, for the Compliance % column in the report. If the Compliance % in the report is greater than the Compliance % Yellow Threshold, then there is no background color. If the Compliance % is less than the Compliance % Yellow Threshold, then it is yellow until it falls below the Compliance % Red Threshold entered as a parameter. Amounts that are less than the Compliance % Red Threshold are red. For example, if the Compliance % Yellow Threshold parameter is 90% and the Compliance % Red Threshold is 75%, then the Compliance % turns yellow when it is less than 90% and turns red when it is less than 75%.
- The report has a **Number of OBS Levels** parameter that allows you to control which levels of the organizational breakdown structure you display in the report to calculate compliance for those levels. This parameter works with the **Resource OBS** parameter. The Number of OBS Levels parameter works as follows:
- **1** - The report displays one OBS level, the level selected in the Resource OBS parameter. It rolls up the compliance % calculation and number of timesheets to include all resources that are associated to OBS units below the OBS unit displayed in the report.
- **2** - The report displays two OBS levels, starting from the level selected in the Resource OBS parameter. It rolls up the compliance % calculation and number of timesheets, at each level, to include all resources associated to OBS units below the OBS units displayed in the report.
- **3** - The report displays three OBS levels, starting from the level selected in the Resource OBS parameter. It rolls up the compliance % calculation and number of timesheets, at each level, to include all resources associated to OBS units below the OBS units displayed in the report.
- **4** - The report displays four OBS levels, starting from the level selected in the Resource OBS parameter. It rolls up the compliance % calculation and number of timesheets, at each level, to include all resources associated to OBS units below the OBS units displayed in the report.

### Report Fields and Calculations

The report displays the following columns: OBS unit name, compliance %, number of timesheets, and number of timesheets by status including open, submitted, returned, approved, and posted. The report is grouped by OBS level.

Resources must have **Open for Time Entry** checked and **Track Mode** set to **Clarity** or **Other** to be included in the report. Resources must be employed during the time period selected in the parameter to be included in the report, which means that resources must have a hire date less than the report time period finish date or no hire date. Also, resources must have a date of termination greater than the report time period start date or no date of termination. Resources only are included; roles are excluded.

This report contains the following calculations:
- **Compliance %** - The compliance % field is the percentage of timesheets posted versus those to be entered for the time periods included in the report.
- **Compliance % background color** is determined as follows:
- **Yellow** - The Compliance % is less than the Compliance % Yellow Threshold entered as a parameter. It is yellow until it falls below the Compliance % Red Threshold entered as a parameter.
- **Red** - The Compliance % is less than the Compliance % Red Threshold entered as a parameter.
- **Formula:** `(Number of Posted Timesheets / Total Number of Timesheets) * 100`

### Report Security

Security is determined by resource view rights.

---

## Time Compliance Detail

The Time Compliance Detail report displays the timesheet status by resource, including email address, employment type, and resource manager. The report shows all the resources in the OBS that you selected when drilling from the main report.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The report displays resources that are set up to enter time in Classic PPM. If the resource does not have a timesheet in Classic PPM for the time period that is selected when running the report, then the resource displays in the report with a timesheet status of Open. You do not need to have at least one timesheet for the resource to display in the report.
- The resource is considered set up for time entry if the following conditions are met on the resource: **Open for Time Entry** field is checked; **Track Mode** set to **Clarity** or **Other**; date of hire is blank, before the time period, or within the time period; and the date of termination is blank, after the time period, or within the time period.
- Time reporting periods must be created (**Administration / Project Management - Time Reporting Periods**). The time reporting period must have a status of **Open** to enter time in the period.
- The investment must have the **Open for Time Entry** field checked and the **Track Mode** set to **Clarity** to enter time against the investment. If the investment is a project, then the **Open for Time Entry** field on the task must also be checked to enter time against the task.
- The investment must have at least one resource assigned to a task for the resource to enter time against the investment. For projects, the resource must be assigned to a task in the Gantt unless the project has an effort task with resources automatically assigned. For investments other than the project, resources added to the team are automatically assigned to an effort task for the investment.

> [!NOTE]
> Effort task is a task with the Task ID of `~rmw`.
> In a timesheet, resources can also assign themselves to tasks if they are team members on the project and the **Prevent Unassigned Timesheet Tasks** field is unchecked on the project. This field is in the time and staff section of the settings properties on the project. They can also create unplanned tasks in a timesheet if they are team members on the project and if they have the appropriate permissions (**Project - Edit Project Plan**).
- The **Number of OBS Levels** group by options are dependent on the data mart OBS table (`nbi_dim_obs`) being populated with the OBS unit names for each OBS level. This table is populated by running the **Update Report Tables** job with the update OBS option checked or by running the **Datamart Extraction** job. One of these jobs must be run when an OBS unit is created, deleted, renamed, or any of the OBS unit relationships are modified. For example, run one of these jobs if an OBS unit is moved from one level in the OBS to another level. One of these jobs does not need to be run if you have modified associations of resources to an OBS unit because the association of resources to the OBS is not dependent on the data mart OBS table. For example, you do not need to run one of these jobs if you added resources to an OBS unit, removed resources from an OBS unit, or moved resources from one OBS unit to another.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Time Compliance Detail |
| **Resource ID** | `CSK_TME_ComplianceDetail` |
| **Description** | Time Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Time Management/Time Compliance Detail` |
| **Path** | `/ca_ppm/reports/time_management/CSK_TME_ComplianceDetail` |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select Query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select Query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select Query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select Query | No | |
| Time Period | `timePeriod` | Multiple-select Query | Yes | |
| Number of OBS Levels | `drillDownLevel` | Single-select List of Values | Yes | 2 |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Time Period:** Current Time Period, Next Time Period, Previous Time Period, List of Time Periods
- **Number of OBS Levels:** 1, 2, 3, 4

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter that determines which units are listed in the **Resource OBS Unit** parameter. This parameter does not directly control which resources display in the report.
- The **Resource OBS Unit** parameter displays values that are based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources that are attached to the OBS unit and descendants of the unit that you select.
- The **Time Period** parameter allows you to determine which time periods display on the report. Select at least one time period when running the report.
- The **Compliance % Yellow** and **Compliance % Red Threshold** parameters allow you to control when the background color changes to yellow and red, respectively, for the Compliance % column in the report. If the Compliance % in the report is greater than the Compliance % Yellow Threshold, then there is no background color. If the Compliance % is less than the Compliance % Yellow Threshold, then it is yellow until it falls below the Compliance % Red Threshold entered as a parameter. Amounts that are less than the Compliance % Red Threshold are red. For example, if the Compliance % Yellow Threshold parameter is 90% and the Compliance % Red Threshold is 75%, then the Compliance % turns yellow when it is less than 90% and turns red when it is less than 75%.
- The report has a **Number of OBS Levels** parameter that allows you to control which levels of the organizational breakdown structure that you display in the report to calculate compliance for those levels. This parameter works with the **Resource OBS** parameter. The Number of OBS Levels parameter works as follows:
- **1** - The report displays one OBS level, the level that is selected in the Resource OBS parameter. It rolls up the compliance % calculation and number of timesheets to include all resources that are associated to OBS units below the OBS unit displayed in the report.
- **2** - The report displays two OBS levels, starting from the level that is selected in the Resource OBS parameter. It rolls up the compliance % calculation and number of timesheets, at each level, to include all resources that are associated to OBS units below the OBS units that are displayed in the report.
- **3** - The report displays three OBS levels, starting from the level that is selected in the Resource OBS parameter. It rolls up the compliance % calculation and number of timesheets, at each level, to include all resources that are associated to OBS units below the OBS units that are displayed in the report.
- **4** - The report displays four OBS levels, starting from the level that is selected in the Resource OBS parameter. It rolls up the compliance % calculation and number of timesheets, at each level, to include all resources that are associated to OBS units below the OBS units that are displayed in the report.

### Report Fields and Calculations

The report is grouped by OBS level and displays the following columns: resource name, email address, time period ending, timesheet status, employment type, and resource manager.

Resources must have **Open for Time Entry** checked and **Track Mode** set to **Clarity** or **Other** to be included in the report. Resources must be employed during the time period that is selected in the parameter to be included in the report, which means that resources must have a hire date less than the report time period finish date or no hire date. Moreover, resources must also have a date of termination greater than the report time period start date or no date of termination. Resources only are included; roles are excluded.

### Report Security

Security is determined by resource view rights.

---

## Missing Time

The Missing Time report displays resource available hours, timesheet hours entered, and timesheet hours missing by resource and time period. The report can be grouped by resource manager or OBS level. The report also has an option to calculate missing time based on timesheet status or resource availability.

The charts include a summary of timesheets across the periods included in the report:
- **Timesheet Count Summary** - Displays the number of timesheets that are completed, partially completed, or missing for the time periods.
- **Timesheet Hours Summary** - Displays the number of hours grouped by resource availability, timesheets entered, timesheets missing, and overage.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- Run the **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs. If the data warehouse is not populated, the report displays a message that there are no matching records and most of the report parameters show no options.
- The report displays resources that are set up to enter time in Classic PPM. If the resource does not have a timesheet in Classic PPM for the time period and timesheet status selected when running the report, then the resource displays in the report with a timesheet status of Open with zero hours. You do not need to have at least one timesheet for the resource to display in the report.
- Configure the resource for time entry. The resource is considered set up for time entry if the following conditions are met on the resource: the **Open for Time Entry** field is checked; **Track Mode** set to **PPM** (formerly Clarity) or **Other**; date of hire is blank, before the time period, or within the time period; and date of termination is blank, after the time period, or within the time period. If the resource is not considered open for time entry based on the above criteria, but the resource does have a timesheet for the period in question, the resource will appear on the report.
- Create time reporting periods (**Administration / Project Management - Time Reporting Periods**). The time reporting period must have a status of **Open** to enter time in the period.
- The investment must have the **Open for Time Entry** field checked and the **Track Mode** set to **Clarity** to enter time against the investment. If the investment is a project, then the **Open for Time Entry** field on the task must also be checked to enter time against the task.
- The investment must have at least one resource that is assigned to a task for the resource to enter time against the investment and for it to display in the report. For projects, the resource must be assigned to a task in the Gantt unless the project has an effort task with resources automatically assigned. For investments other than the project, resources added to the team are automatically assigned to an effort task for the investment.

> [!NOTE]
> Effort task is a task with the Task ID of `~rmw`.
> In a timesheet, resources can also assign themselves to tasks if they are team members on the project and the **Prevent Unassigned Timesheet Tasks** field is unchecked on the project. This field is in the time and staff section of the settings properties on the project. They can also create unplanned tasks in a timesheet if they are team members on the project and if they have the appropriate permissions (**Project - Edit Project Plan**).
- The resource available hours are calculated based on the time slice with the name `DAILYRESOURCEAVAILCURVE` (**Administration / Data Administration - Time Slices**). This time slice is not a Data Warehouse request, therefore, it must be configured to cover the dates that are displayed in this report or the report does not display data for those dates.

### Report Properties

| Property | Value |
|---|---|
| **Name** | Missing Time |
| **Resource ID** | `CSK_TME_MissingTime` |
| **Description** | Time Management (PMO Accelerator) |
| **Folder** | `Clarity /Reports/Time Management/Missing Time` |
| **Path** | `/ca_ppm/reports/time_management/CSK_TME_MissingTime` |
| **Data Source** | Clarity Data Warehouse Bean Data Source |

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select Query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select Query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select Query | No | |
| Resource Role | `roleKey_1` | Multiple-select Query | No | |
| Resource | `resourceKey_1` | Multiple-select Query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select Query | No | |
| Time Period | `timePeriod` | Multiple-select Query | Yes | |
| Timesheet Status | `timesheetStatusKey_1` | Multiple-select Query | Yes | Open, Submitted, Returned, Approved, and Posted |
| Group By | `groupResManagerOBS` | Single-select List of Values | Yes | Resource Manager |
| Calculate Missing Time Based on Timesheet Status? | `calculateMissingTime` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Show Timesheet Summary Graph? | `showTimesheetSummaryGraph` | Boolean | No | Checked |
| Database Schema (PPM) | `ppmDBSchema` | Hidden | Yes | Passed through Classic PPM |
| Database Schema (DWH) | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| Database Vendor | `dwhDBVendor` | Hidden | Yes | Passed through Classic PPM |
| Database Link | `dwhDBLink` | Hidden | Yes | Passed through Classic PPM |
| Database Username | `ppmDBName` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Time Period:** Current Time Period, Next Time Period, Previous Time Period, List of Time Periods
- **Timesheet Status:** Open, Submitted, Returned, Approved, Posted, Adjusted
- **Group By:** Resource Manager, OBS Level 1-10

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter that determines which units are listed in the **Resource OBS Unit** parameter. This parameter does not directly control which resources display in the report.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources that are attached to the OBS unit and descendants of the unit you select.
- The **Time Period** parameter allows you to determine which time periods display on the report. Select at least one time period when running the report.
- The **Timesheet Status** parameter works with the time period parameter. The report only displays time periods with the timesheet status you select when running the report. One of the values in the timesheet status parameter is **Adjusted** and this status requires some additional explanation. An adjusted timesheet is a timesheet that has been posted in Classic PPM, but then changes are made to the timesheet and it is reposted. As a rule, it does not make sense to display adjusted timesheets in reports because these timesheets have been replaced with more recently posted timesheets. While the status of Adjusted is available as an option to allow visibility into adjusted timesheets, it should not normally be selected when running the report.
- The **Calculate Missing Time Based on Timesheet Status** parameter determines how missing time is calculated in the report. This allows you to determine if you want to calculate missing time based on timesheet status or resource time entered being less than availability.
- **When checked:** The timesheet statuses that are selected in the timesheet status parameter determine missing time and the available hours are not used to determine missing timesheets. For example, if you select timesheet statuses of open and submitted, then only timesheets with a status of open and submitted are considered missing time in the report. Timesheets with a status of returned, approved, posted or adjusted are not considered missing.
- **When unchecked:** The report compares the hours that are entered on a timesheet to the resource available hours to determine missing time. For example, if a resource enters 32 hours on a timesheet, but is available for 40 hours in the time period, then 8 hours are considered missing time.
- The **Show Timesheet Summary Graph** parameter controls whether the Timesheet Count Summary and Timesheet Hours Summary charts display on the report. If the parameter is checked, the charts display on the top of the first page of the report. If the parameter is not checked, the charts do not display.
- The report has a **Group By** parameter that allows you to control how the report is grouped. The following group options are available:
- **Resource Manager** - This option groups the report by resource manager.
- **OBS Level 1-10** - This option groups the report by OBS level and requires that you also select a unit in the resource OBS parameter. The resource OBS parameter and grouping by an OBS level work with one another. The resource OBS parameter determines which OBS you group by when you select a group by level. You can group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS supported in Clarity. OBS level 1 is the top level in the hierarchy and OBS level 10 is the bottom level in the hierarchy. When you group by an OBS level, the resources that are attached to OBS units at the level you select and any units below the level you select are rolled up to the group by level of the report. If you group by an OBS level that is lower in the hierarchy, then the report groups the resources by this level (for example, OBS Level 4). If resources are associated to units above level 4 (for example, resources are attached to levels 2 and 3), then the resources that are associated to units higher in the hierarchy display in the report in an **Undefined** grouping. The Undefined grouping indicates that no OBS unit is defined for the resource at the level by which you are grouping. If you group by an OBS level but you do not select a unit in the resource OBS parameter, then the report returns results; however, it will not group by an OBS level because it relies on the resource OBS parameter to determine which OBS to use for grouping.
