# Resource Management Reports

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[11 - Reporting/_MOC Reporting|Reporting]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[18 - Advanced Reporting/PMO Accelerator Reports/Resource Reports]]
- [[11 - Reporting/Report Designer/Creating Your First Report]]
- [[11 - Reporting/Working with Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Investment Reports]]
- [[11 - Reporting/Report Designer/Drill Down Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Portfolio Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/PMO Admin Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Financial Reports]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Resource Baseline vs. Plan by Employment Type (#resource-baseline-vs-plan-by-employment-type)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Capacity vs. Allocation by OBS (#capacity-vs-allocation-by-obs)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Capacity vs. Booking Status by OBS (#capacity-vs-booking-status-by-obs)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Capacity vs. Demand by Role (#capacity-vs-demand-by-role)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Capacity vs. Demand by Resource (#capacity-vs-demand-by-resource)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Over/Under Allocation by Role (#overunder-allocation-by-role)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Over/Under Allocation by Resource (#overunder-allocation-by-resource)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)
- H3: Parameter Lookup Values (#parameter-lookup-values)
- H3: Parameter Explanations (#parameter-explanations)
- H3: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Report Security (#report-security)
- H2: Resource Skills Report (#resource-skills-report)
- H3: Report Prerequisites (#report-prerequisites)
- H3: Report Properties (#report-properties)
- H3: Report Parameter Options (#report-parameter-options)

The Resource Management reports provide visibility into the capacity and demand of resources across the resource pool of your organization. The reports display capacity and demand by OBS, role, resource, and investment for summary and detail level analysis. The reports allow you to identify over-allocated and under-allocated resources and overall resource availability. The reports also present a view of resource plan amounts across investments, compared to baseline amounts for those investments.

The following reports are included with the Resource Management reports:
- Resource Baseline vs. Plan by Employment Type
- Capacity vs. Allocation by OBS
- Capacity vs. Booking Status by OBS
- Capacity vs. Demand by Role
- Capacity vs. Demand by Resource
- Over/Under Allocation by Role
- Over/Under Allocation by Resource
- Resource Skills Report
- Resource Skills and Remaining Capacity
- Resource Skills and Remaining Capacity Detail
- Resource Forecasted Utilization
- Resource Forecasted Utilization Detail
- Resource Allocations and Assignments
- Resource Assignments by Task
- Resource Availability

---

## Resource Baseline vs. Plan by Employment Type

The Resource Baseline vs. Plan by Employment Type report displays baseline, actual, estimate, and variance amounts by resource across investments. The report is grouped by employment type (for example, employee, contractor) to give you visibility into the variances for each type. The chart shows baseline compared to estimate at completion by month. The amounts can be displayed as hours or FTEs.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The resource must have the employment type field completed on the resource. This is a required field in Classic PPM.
- The resource must be assigned to at least one investment during the reporting period that is selected to display in the report. For projects, the resource must be assigned to a task in the Gantt unless the project has an effort task with resources automatically assigned. For investments other than the project, resources added to the team are automatically assigned to an effort task for the investment.

> [!NOTE]
> Effort task is a task with the Task ID of `~rmw`.
- The baseline amounts are calculated based on the current baseline revision and the time slice with the name `MONTHLYRESOURCEBASECURVE` (Administration/Data Administration-Time Slices).
- The actual amounts are calculated based on the time slice with the name `MONTHLYRESOURCEACTCURVE` (Administration/Data Administration-Time Slices).
- The ETC amounts are calculated based on the time slice with the name `MONTHLYRESOURCEESTCURVE` (Administration/Data Administration-Time Slices).

### Report Properties
- **Name:** Resource Baseline vs. Plan by Employment Type
- **Resource ID:** `CSK_RES_BaseVsPlanByEmpType`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Resource Baseline vs. Plan by Employment Type
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_BaseVsPlanByEmpType`
- **Data Source:** Clarity Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Investment Type | `investmentTypeKey_1` | Multiple-select query | Yes | All |
| Start Date | `startDate` | Single value date | Yes | Start of Current Quarter |
| End Date | `endDate` | Single value date | Yes | End of Next Quarter |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Completed Tasks Only? | `completedTasksOnly` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Show Graph? | `showGraph` | Boolean | No | Checked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Investment Type:** All, Application, Asset, Idea, Other Work, Product, Project, Service
- **Unit Type:** FTE, Hours

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter and determines which units are listed in the Resource OBS Unit parameter. This parameter is not used to control which resources display in the report.
- The **Resource OBS Unit** parameter displays values that are based upon the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources attached to the OBS unit and descendants of the unit you select.
- The **Start Date** and **End Date** parameters allow you to control the months that display in the report. The start date determines the first month of data included in the baseline, actual, ETC, EAC, and variance values and the first month displayed in the chart. The end date determines the month through which data is included in the report and is the last month displayed in the chart.
- The **Completed Tasks Only** parameter allows you to control which tasks display in the report. If checked, the report includes only tasks with a status of 'Completed'. If not checked, it includes all tasks regardless of status.
- The **Show Graph** parameter controls whether the Baseline vs. EAC by Month chart displays on the report. If checked, the chart displays at the top of each employment type section. If not checked, the chart does not display.

### Report Fields and Calculations

The report displays the resource name, investment name, investment ID, baseline, actual, ETC, EAC, variance, and % variance across investments. When the show graph parameter is checked, the report also includes a column chart showing baseline compared to estimate at completion, in hours or FTEs, by month. Labor is included in the report; equipment, expense, and material resources or roles are excluded. Programs and templates are excluded. All tasks, regardless of status, are included by default. If the Completed Tasks Only parameter is checked, then only tasks with a status of 'Completed' are included.

The report is grouped by employment type, which is an attribute on the resource. The lookup associated to the employment type attribute is a configurable system lookup in Classic PPM.

The amounts are calculated for a range of periods determined by the start date and end date report parameters. The amounts being converted to FTE depend on the Data Warehouse calendar table.

This report contains the following calculations:
- **EAC** - The EAC field is the sum of the ETC and actual amounts. Formula: `ETC + Actual`
- **Variance** - The variance field is the difference between EAC and baseline amounts. If no baseline exists, the baseline amounts are set to 0. Variance background color: Red = The EAC amount exceeds the baseline amount. Formula: `EAC - Baseline`
- **% Variance** - The percentage of variance between EAC and baseline amounts. If no baseline exists, the baseline amounts are set to 0. % Variance background color: Red = The EAC amount exceeds the baseline amount. Formula: `((EAC - Baseline) / Baseline) * 100`

### Report Security

Security is determined by resource view rights.

---

## Capacity vs. Allocation by OBS

The Capacity vs. Allocation by OBS report displays resource capacity and demand across investments. The report can be grouped by any OBS level, providing visibility into resources at any level of the organization. The report displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- Resource capacity amounts display if the resource has availability that is defined and meets the parameter criteria.
- Resource demand allocation amounts display if the resource is allocated to at least one investment. Resource assignments are not required.
- The capacity amounts are calculated based on the time slices with the name `MONTHLYRESOURCEAVAILCURVE` and `WEEKLYRESOURCEAVAILCURVE` (Administration/Data Administration-Time Slices).
- The demand amounts are calculated based on the time slices with the name `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE` (Administration/Data Administration-Time Slices).

### Report Properties
- **Name:** Capacity vs. Allocation by OBS
- **Resource ID:** `CSK_RES_CapVsAllocByOBS`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** CA PPM/Reports/Resource Management/Capacity vs. Allocation by OBS
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_CapVsAllocByOBS`
- **Data Source:** Clarity Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKeyRequired` | Single-select query | Yes | |
| Resource OBS Unit | `resourceOBSUnitKeyRequired` | Single-select query | Yes | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Investment OBS Type | `investmentOBSTypeKey_1` | Single-select query | No | |
| Investment OBS Unit | `investmentOBSUnitKey_1` | Single-select query | No | |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Group By | `groupOBSLevel` | Single-select list of values | Yes | OBS Level 1 |
| Include Unstaffed Roles? | `includeUnstaffedRoles` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Show Graphs? | `showGraphs` | Boolean | No | Checked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter and determines which units are listed in the Resource OBS Unit parameter. This parameter is not used to control which resources display in the report.
- The **Resource OBS Unit** parameter displays values that are based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources that are attached to the OBS unit and descendants of the unit you select.
- For the capacity amounts, the resource OBS parameter filters resources that are based on their OBS. For the allocation demand amounts, the resource OBS parameter filters investment team members that are based on their staff OBS. If the staff OBS is not completed for the team members, then it filters the resources that are based on their OBS.
- The **Investment OBS Type** is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control which investments display in the report.
- The **Investment OBS Unit** parameter displays values that are based on the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The **Start Date** parameter determines the first time period that displays in the report. There are a total of 12 periods that display on the report, starting with the period in which the start date parameter entered falls. If a date other than the first day of a monthly or weekly period is entered, then the report evaluates it to the start of the period to which the date entered belongs.
- The **Period Type** parameter allows you to change the type of time periods that display across the columns of the report. This parameter works with the start date parameter to determine the periods that display on the report:
- **Week** - The report displays twelve weeks.
- **Month** - The report displays twelve months.
- The **Group By** parameter allows you to control how the report is grouped. The following group options are available:
- **OBS Level 1-10** - This option requires that you select a unit in the resource OBS parameter to group by an OBS level. You can group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS supported in Classic PPM. OBS level 1 is the top level in the hierarchy and OBS level 10 is the bottom level. When you group by an OBS level, the resources attached to OBS units at the level you select and any units below are rolled up to the group by level. If you group by an OBS level but do not select a unit in the resource OBS parameter, the report returns results but does not group by an OBS level.
- The **Include Unstaffed Roles** parameter allows you to include roles which have not been staffed with resources in the report demand allocation amounts. If checked, unstaffed roles are included. If not checked, they are excluded.
- The **Show Graph** parameter controls whether the Capacity and Demand charts display on the report.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod.

### Report Fields and Calculations

The report displays the investment name and capacity and demand amounts by period and in total, which is grouped by OBS unit. Labor and equipment resources are included in the report; expense and material resources or roles are excluded. Templates are excluded.

The capacity amounts include the capacity for resources that have an OBS unit the same as or a descendant of the resource OBS unit that is selected in the parameter. The allocation demand amounts include allocations for team staff members that have a staff OBS unit the same as or a descendant of the resource OBS unit selected in the parameter. If the staff OBS unit is not completed for team members, then it uses the OBS of the resource for demand.

The report displays 12 periods, starting with the period entered in the start date parameter. Weekly periods are calculated based on the first day of the work week. The remaining capacity field on the report has a red background if the value is a negative number, no background if the value is zero, and a green background if the value is a positive number. The amounts being converted to FTE depend on the Data Warehouse calendar table.

### Report Security

Security is determined by resource view rights.

---

## Capacity vs. Booking Status by OBS

The Capacity vs. Booking Status by OBS report includes three charts. The line chart displays capacity compared to demand, with demand distributed by booking status, and actuals by period. The pie charts display demand by booking status and demand by employment type. The report also includes a detail listing of resource capacity and demand at the booking status level across investments. The report can be grouped by any OBS level, providing visibility into resources at any level of the organization. The report displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- Resource capacity amounts display if the resource has availability that is defined and meets the parameter criteria.
- Resource demand allocation amounts display if the resource is allocated to at least one investment. Resource assignments are not required.
- The capacity amounts are calculated based on the time slices with the name `MONTHLYRESOURCEAVAILCURVE` and `WEEKLYRESOURCEAVAILCURVE` (Administration/Data Administration-Time Slices).
- The total demand amounts are calculated based on the time slices with the name `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE` (Administration/Data Administration-Time Slices).
- The hard allocation amounts are calculated based on the time slices with the name `MONTHLYRESOURCEHARDALLOC` and `WEEKLYRESOURCEHARDALLOC` (Administration/Data Administration-Time Slices).
- The soft allocation amounts are calculated as the difference between the total allocation demand amounts and hard allocation amounts. There are no soft allocation slice requests.
- The actual amounts are calculated based on the time slices with the name `MONTHLYRESOURCEACTCURVE` and `WEEKLYRESOURCEACTCURVE` (Administration/Data Administration-Time Slices).

### Report Properties
- **Name:** Capacity vs. Booking Status by OBS
- **Resource ID:** `CSK_RES_CapVsBookingByOBS`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Capacity vs. Booking Status by OBS
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_CapVsBookingByOBS`
- **Data Source:** Clarity Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKeyRequired` | Single-select query | Yes | |
| Resource OBS Unit | `resourceOBSUnitKeyRequired` | Single-select query | Yes | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Investment OBS Type | `investmentOBSTypeKey_1` | Single-select query | No | |
| Investment OBS Unit | `investmentOBSUnitKey_1` | Single-select query | No | |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Group By | `groupOBSLevel` | Single-select list of values | Yes | OBS Level 1 |
| Show Investments? | `showInvestments` | Boolean | No | Checked |
| Include Unstaffed Roles? | `includeUnstaffedRoles` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Show Graphs? | `showGraphs` | Boolean | No | Checked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Project Status:** All, Approved, Unapproved
- **Employment Type:** Contractor, Employee
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter and determines which units are listed in the Resource OBS Unit parameter.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected. When you select an OBS unit, the report displays resources attached to the OBS unit and descendants.
- For the capacity amounts, the resource OBS parameter filters resources based on their OBS. For the allocation demand amounts, the resource OBS parameter filters investment team members based on their staff OBS. If the staff OBS is not completed for team members, then it filters resources based on their OBS.
- The **Investment OBS Type** and **Investment OBS Unit** parameters work the same way for filtering investments.
- The **Start Date** parameter determines the first time period that displays in the report. There are 12 periods total. If a date other than the first day of a period is entered, the report evaluates it to the start of that period.
- The **Period Type** parameter allows you to select Week (twelve weeks) or Month (twelve months).
- The **Show Investments** parameter allows you to preclude individual investments from displaying in the report. If checked, investments display to provide investment-level detail of demand. If not checked, the report shows resource capacity, demand, and remaining capacity without investment-level detail.
- The **Include Unstaffed Roles** parameter allows you to include roles which have not been staffed with resources in the report demand allocation amounts.
- The **Group By** parameter allows you to control how the report is grouped (OBS Level 1-10).
- The **Show Graph** parameter controls whether the line chart and pie charts display.
- The investment statuses are displayed based on the existing investment statuses in the environment.

### Report Fields and Calculations

The report displays the capacity and demand amounts by period and in total, grouped by OBS unit. The report also displays demand amounts by investment if the show investments parameter is checked. Labor and equipment resources are included; expense and material resources and roles are excluded. Roles are only included in demand allocation amounts if the Include Unstaffed Roles parameter is checked. Templates are excluded.

The demand amounts are separated into hard and soft allocations. The actual hours posted also display. When the show investments parameter is checked, the report displays hard allocations, soft allocations, and actuals by investment name.

The remaining capacity field has a red background if negative, no background if zero, and green background if positive. The amounts being converted to FTE depend on the Data Warehouse calendar table.

When the show graph parameter is checked, the report also includes a line chart and two pie charts. The line chart displays capacity compared to demand, with demand distributed by booking status, and actuals by period. The pie charts display demand by booking status and demand by employment type.

### Report Security

Security is determined by resource view rights.

---

## Capacity vs. Demand by Role

The Capacity vs. Demand by Role report displays capacity and demand at the role level across investments. The report gives you visibility into the capacity, demand, and remaining capacity by role. The report displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records.
- Role capacity amounts display if a resource has the role set as their primary role. The resource must also have availability that is defined and meet the parameter criteria.
- Role demand allocation amounts display if a resource has the role set as their primary role. The resource must also be allocated to at least one investment and the report must display type of hours as allocations. Resource demand assignment amounts display if a resource has the role set as their primary role and is assigned to at least one task on an investment and the report must display type of hours as assignments.
- The capacity amounts are calculated based on the time slices with the name `MONTHLYRESOURCEAVAILCURVE` and `WEEKLYRESOURCEAVAILCURVE`.
- When the report displays type of hours as allocations, the demand amounts are calculated based on the time slices with the names `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE`.
- When the report displays type of hours as assignments, the demand amounts are calculated based on the time slices with the names `MONTHLYRESOURCEACTCURVE`, `WEEKLYRESOURCEACTCURVE`, `MONTHLYRESOURCEESTCURVE`, and `WEEKLYRESOURCEESTCURVE`.

### Report Properties
- **Name:** Capacity vs. Demand by Role
- **Resource ID:** `CSK_RES_CapVsDemandByRole`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Capacity vs. Demand by Role
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_CapVsDemandByRole`
- **Data Source:** Clarity Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Investment OBS Type | `investmentOBSTypeKey_1` | Single-select query | No | |
| Investment OBS Unit | `investmentOBSUnitKey_1` | Single-select query | No | |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Type of Hours | `typeOfHours` | Single-select list of values | Yes | Allocated |
| Show Roles With No Capacity? | `showRolesWithNoCapacity` | Boolean | No | Unchecked |
| Include Unstaffed Roles? | `includeUnstaffedRoles` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours
- **Type of Hours:** Allocated, Assigned

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter and determines which units are listed in the Resource OBS Unit parameter.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected.
- For the capacity amounts, the resource OBS parameter filters resources based on their OBS. For the allocation or assignment demand amounts, the resource OBS parameter filters investment team members based on their staff OBS.
- The **Investment OBS Type** and **Investment OBS Unit** parameters work similarly for investments.
- The **Start Date** parameter determines the first time period in the report. There are 12 periods total.
- The **Period Type** parameter: Week (12 weeks) or Month (12 months).
- The **Type of Hours** parameter allows you to change the display amounts: Allocated (allocation amounts) or Assigned (assignment amounts).
- The **Show Roles With No Capacity** parameter allows you to include roles that have zero capacity. Roles capacity is determined by the capacity of the resources that have the role as a primary role.
- The **Include Unstaffed Roles** parameter allows you to include roles which have not been staffed with resources in the report demand allocation amounts.
- The investment statuses are displayed based on the existing investment statuses in the environment.

### Report Fields and Calculations

The report displays the role name, capacity, demand, and remaining amounts by period and in total. Labor and equipment resources and roles are included; expense and material resources and roles are excluded. Roles are only included in demand allocation amounts if the Include Unstaffed Roles parameter is checked. Templates are excluded.

The capacity amounts are grouped by the resource primary role. The allocation or assignment demand amounts are grouped by the investment role and if not completed, then by the resource primary role.

The remaining capacity field has a red background if negative, no background if zero, and green background if positive. The amounts being converted to FTE depend on the Data Warehouse calendar table.

### Report Security

Security is determined by resource view rights.

---

## Capacity vs. Demand by Resource

The Capacity vs. Demand by Resource report displays resource capacity and demand at the resource level across investments. The report gives you visibility into the capacity, demand, and remaining capacity by resource. The report displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report.
- Resource capacity amounts display if the resource has availability defined and meets the parameter criteria.
- Resource demand allocation amounts display if the resource is allocated to at least one investment and the report displays type of hours as allocations. Resource demand assignment amounts display if the resource is assigned to at least one task on the investment and the report displays type of hours as assignments.
- The capacity amounts are calculated based on the time slices with the name `MONTHLYRESOURCEAVAILCURVE` and `WEEKLYRESOURCEAVAILCURVE`.
- When the report displays type of hours as allocations, the demand amounts are calculated based on the time slices `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE`.
- When the report displays type of hours as assignments, the demand amounts are calculated based on the time slices `MONTHLYRESOURCEACTCURVE`, `WEEKLYRESOURCEACTCURVE`, `MONTHLYRESOURCEESTCURVE`, and `WEEKLYRESOURCEESTCURVE`.

### Report Properties
- **Name:** Capacity vs. Demand by Resource
- **Resource ID:** `CSK_RES_CapVsDemandByResource`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Capacity vs Demand by Resource
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_CapVsDemandByResource`
- **Data Source:** Clarity Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Investment OBS Type | `investmentOBSTypeKey_1` | Single-select query | No | |
| Investment OBS Unit | `investmentOBSUnitKey_1` | Single-select query | No | |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Type of Hours | `typeOfHours` | Single-select list of values | Yes | Allocated |
| Show Investments? | `showInvestments` | Boolean | No | Checked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours
- **Type of Hours:** Allocated, Assigned

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter and determines which units are listed in the Resource OBS Unit parameter.
- The **Resource OBS Unit** parameter displays values based on the Resource OBS Type selected.
- For the capacity amounts, the resource OBS parameter filters resources based on their OBS. For the allocation or assignment demand amounts, it filters investment team members based on their staff OBS.
- The **Investment OBS Type** and **Investment OBS Unit** parameters work similarly for investments.
- The **Start Date** parameter determines the first time period. Twelve periods display total.
- The **Period Type** parameter: Week (twelve weeks) or Month (twelve months).
- The **Type of Hours** parameter: Allocated (allocation amounts) or Assigned (assignment amounts).
- The **Show Investments** parameter allows you to preclude individual investments from displaying. If not checked, the report displays resource capacity, demand, and remaining capacity without investment-level detail.
- The investment statuses are displayed based on the existing investment statuses in the environment.

### Report Fields and Calculations

The report displays the resource name, investment name, capacity, demand, and remaining amounts by period and in total, grouped by resource. Labor and equipment roles are included; expense and material roles are excluded.

The remaining capacity field has a red background if negative, no background if zero, and green background if positive. The amounts being converted to FTE depend on the Data Warehouse calendar table.

### Report Security

Security is determined by resource view rights.

---

## Over/Under Allocation by Role

The Over/Under Allocation by Role report displays resource remaining capacity amounts by role. The report displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

This report allows you to drill down to the Capacity vs. Demand by Resource report, by clicking on a role name, to see more information about the capacity and demand of the resources having this primary role.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report.
- The role must be over-allocated or under-allocated in at least one of the reporting periods to display on the report. Over-allocated roles are roles that have investment allocation demand exceeding available capacity (negative remaining capacity). Under-allocated roles are roles that have investment allocation demand less than available capacity (positive remaining capacity).
- In order to calculate remaining capacity, role capacity and demand allocation must be included. Role capacity amounts are included if a resource has the role set as their primary role. The resource must also have availability defined and meet the parameter criteria. Role demand allocation amounts are included if a resource has the role set as their primary role and is allocated to at least one investment.
- The capacity amounts are calculated based on the time slices `MONTHLYRESOURCEAVAILCURVE` and `WEEKLYRESOURCEAVAILCURVE`.
- The demand amounts are calculated based on the time slices `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE`.

### Report Properties
- **Name:** Over/Under Allocation by Role
- **Resource ID:** `CSK_RES_OverUnderAllocByRole`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Over/Under Allocation by Role
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_OverUnderAllocByRole`
- **Data Source:** Clarity Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Over/Under Allocated | `overUnderAllocated` | Single-select list of values | Yes | Over and Under Allocated |
| Over Allocated Threshold % (0-100) | `overAllocatedThreshold` | Single value number | Yes | 10 |
| Under Allocated Threshold % (0-100) | `underAllocatedThreshold` | Single value number | Yes | 30 |
| Show Roles With No Capacity? | `showRolesWithNoCapacity` | Boolean | No | Unchecked |
| Include Unstaffed Roles? | `includeUnstaffedRoles` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours
- **Over/Under Allocated:** Over and Under Allocated, Over Allocated Only, Under Allocated Only

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter. The **Resource OBS Unit** parameter displays values based on the selected type.
- The **Start Date** determines the first time period (12 periods total).
- The **Period Type**: Week (12 weeks) or Month (12 months).
- The **Over/Under Allocated** parameter filters roles depending on their allocation state:
- **Over and Under Allocated** - Includes roles over or under allocated in at least one period.
- **Over Allocated Only** - Includes roles over-allocated in at least one period.
- **Under Allocated Only** - Includes roles under-allocated in at least one period.
- The **Over Allocated Threshold %** controls when the background color turns red. Roles over-allocated by a percentage greater than the threshold appear red.
- The **Under Allocated Threshold %** controls when the background color turns green. Roles under-allocated by a percentage greater than the threshold appear green.
- The **Show Roles With No Capacity** parameter includes roles with zero capacity if checked.
- The **Include Unstaffed Roles** parameter includes roles not staffed with resources in demand allocation amounts if checked.

### Report Fields and Calculations

The report displays the role name and remaining capacity amounts by week or month and in total. Labor and equipment resources are included; expense and material resources are excluded. Roles only display if they are over or under-allocated in at least one period displayed. Roles are included in demand allocation amounts if the Include Unstaffed Roles parameter is checked. Templates are excluded.

The background color of remaining capacity is based on the threshold parameters: red if over-allocated beyond the threshold, green if under-allocated beyond the threshold, no background if within bounds or zero.

### Report Security

Security is determined by resource view rights.

---

## Over/Under Allocation by Resource

The Over/Under Allocation by Resource report displays resource remaining capacity amounts by resource. The report displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

This report allows you to drill down to the Capacity vs. Demand by Resource report, by clicking a resource name, to see more information about the resource capacity and demand.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report.
- The resource must be over-allocated or under-allocated in at least one of the reporting periods to display on the report.
- To calculate remaining capacity, resource capacity and demand allocation must be included. Resource capacity amounts are included if the resource has availability defined and meets the parameter criteria. Resource demand allocation amounts are included if the resource is allocated to at least one investment.
- The capacity amounts are calculated based on the time slices `MONTHLYRESOURCEAVAILCURVE` and `WEEKLYRESOURCEAVAILCURVE`.
- The demand amounts are calculated based on the time slices `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE`.

### Report Properties
- **Name:** Over/Under Allocation by Resource
- **Resource ID:** `CSK_RES_OverUnderAllocation`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Over/Under Allocation by Resource
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_OverUnderAllocation`
- **Data Source:** Clarity Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Over/Under Allocated | `overUnderAllocated` | Single-select list of values | Yes | Over and Under Allocated |
| Over Allocated Threshold % (0-100) | `overAllocatedThreshold` | Single value number | Yes | 10 |
| Under Allocated Threshold % (0-100) | `underAllocatedThreshold` | Single value number | Yes | 30 |
| Group By | `groupResManagerBookingManager` | Single-select list of values | Yes | No Grouping |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours
- **Over/Under Allocated:** Over and Under Allocated, Over Allocated Only, Under Allocated Only
- **Group By:** No Grouping, Resource Manager, Booking Manager

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter. The **Resource OBS Unit** displays values based on the selected type.
- The **Start Date** determines the first time period (12 periods total).
- The **Period Type**: Week (12 weeks) or Month (12 months).
- The **Over/Under Allocated** parameter filters resources by allocation state (Over and Under Allocated, Over Allocated Only, Under Allocated Only).
- The **Over Allocated Threshold %** controls when the background turns red. The **Under Allocated Threshold %** controls when the background turns green.
- The **Group By** parameter: No Grouping, Resource Manager, or Booking Manager.

### Report Fields and Calculations

The report displays the resource name, primary role, and remaining capacity amounts by week or month and in total. Labor and equipment resources are included; expense and material resources are excluded. Resources only display if they are over or under-allocated in at least one displayed period. Resources only are included; roles are excluded.

The background color is based on the threshold parameters: red if over-allocated beyond threshold, green if under-allocated beyond threshold, no background if within bounds.

### Report Security

Security is determined by resource view rights.

---

## Resource Skills Report

The Resource Skills report displays the skills hierarchy with the associated resources at each level in the hierarchy. This report includes the proficiency rating and interest level of each resource for each listed skill. The report also includes a stacked column chart displaying the number of resources by parent skill and employment type.

### Report Prerequisites

Complete the following prerequisites before you run this report:
- At least one skill must exist (Administration, Data Administration, Skills Hierarchy). The skill must be associated with at least one labor resource. Otherwise, the report displays a message that no results match your criteria.
- The resource skills in the report depend on the report skills tables. To update these tables, run the **Update Report Tables** job with the update resource skills index option selected. The report skills tables store the relationships between resource skills and their parent skills. The job supports up to ten levels in the skills hierarchy. Run this job whenever a skill is created, deleted, or renamed. Also run the report when a skill is modified in the skills hierarchy. You do not have to run the report after associating skills to resources.

### Report Properties
- **Name:** Resource Skills
- **Resource ID:** `CSK_RES_Skills`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Resource Skills
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_Skills`
- **Data Source:** Classic PPM bean datasource

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Skill | `skillKey` | Multiple-select query | No | |
| Interest (Greater Than or Equal To) | `resourceInterest` | Single-select list of values | Yes | 1 - Low |
| Proficiency (Greater Than or Equal To) | `resourceProficiency` | Single-select list of values | Yes | 1 - Beginner |
| Sort By | `sortResourceProficiency` | Single-select list of values | Yes | Resource |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Show Graph? | `showGraph` | Boolean | No | Checked |
| Database Schema | `ppmDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Interest (Greater Than or Equal To):** 1-Low, 2-Low, 3-Low, 4-Medium, 5-Medium, 6-Medium, 7-Medium, 8-High, 9-High, 10-High
- **Proficiency (Greater Than or Equal To):** 1-Beginner, 2-Beginner, 3-Beginner, 4-Advanced, 5-Advanced, 6-Advanced, 7-Advanced, 8-Expert, 9-Expert, 10-Expert
- **Sort By:** Resource, Proficiency

### Parameter Explanations
- The **Resource OBS Type** is a cascading parameter that determines which units are listed in the Resource OBS Unit parameter.
- The **Interest (Greater Than or Equal To)** parameter uses skill interest level (Low, Medium, High with sublevels 1-10) to determine which resources appear in the report.
- The **Proficiency (Greater Than or Equal To)** parameter uses skill proficiency level (Beginner, Advanced, Expert with sublevels 1-10) to determine which resources appear.
- The **Sort By** parameter: Resource (ascending by name within each skill grouping) or Proficiency (descending within each skill grouping).
- The **Show Graph** parameter controls whether the column chart displays.

### Report Fields and Calculations

The report displays the resource name, primary role, resource manager, booking manager, employment type, skill proficiency, and skill interest. The report displays labor resources because skills are only supported on labor resources. Roles are excluded.

When the show graph parameter is selected, the report includes a stacked column chart. The column chart displays the number of resources in the skills hierarchy, grouped by top parent skills, with a split between employment types.

### Report Security

Resource view rights determine report security.

---

## Resource Skills and Remaining Capacity

The Resource Skills and Remaining Capacity report allows you to search for resources with remaining capacity and a particular skill set. The report displays resource remaining capacity amounts by resource. The report can be sorted by remaining capacity or resource and grouped by resource manager or booking manager. The report displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

This report allows you to drill down to the Resource Skills and Remaining Capacity Detail subreport, by clicking a resource name, to see more information about the resource capacity, demand, and skills.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report.
- To calculate remaining capacity, resource capacity and demand allocation must be included. Resource capacity amounts are included if the resource has availability defined and meets the parameter criteria. Resource demand allocation amounts are included if the resource is allocated to at least one investment.
- The capacity amounts are calculated based on the time slices `MONTHLYRESOURCEAVAILCURVE` and `WEEKLYRESOURCEAVAILCURVE`. These time slices must be configured to cover the periods displayed in this report.
- The demand amounts are calculated based on the time slices `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE`. These time slices must be configured to cover the periods displayed.
- For period type of week, the First Day of Work Week field in Classic PPM (Administration/Project Management-Settings) and the weekly time slices must be consistent.
- The time periods and FTE conversions depend on the report calendar table, populated by running the **Update Report Tables** job with the update reporting calendar option checked.
- The report includes a skills parameter to search for resources with remaining capacity and a particular skill set. Skills must be created and associated to labor resources.

### Report Properties
- **Name:** Resource Skills and Remaining Capacity
- **Resource ID:** `CSK_RES_SkillsRemCapacity`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Resource Skills and Remaining Capacity
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_SkillsRemCapacity`
- **Data Source:** Clarity DWH Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Skill | `skillKey` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Over/Under Allocated | `overUnderAllocated` | Single-select list of values | Yes | Over and Under Allocated |
| Over Allocated Threshold % (0-100) | `overAllocatedThreshold` | Single value number | Yes | 10 |
| Under Allocated Threshold % (0-100) | `underAllocatedThreshold` | Single value number | Yes | 30 |
| Sort By | `sortResourceRemainingCapacity` | Single-select list of values | Yes | Remaining Capacity |
| Group By | `groupResManagerBookingManager` | Single-select list of values | Yes | No Grouping |
| Show Under Allocated Only? | `showUnderAllocatedOnly` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours
- **Sort By:** Resource, Remaining Capacity
- **Group By:** No Grouping, Resource Manager, Booking Manager

### Parameter Explanations
- The **Skill** parameter allows you to search for resources with remaining capacity and a particular skill set. If a resource has at least one selected skill, it displays in the report. However, the subreport displays all the resource skills regardless.
- The **Start Date** determines the first period. There are nine periods total.
- The **Period Type**: Week (nine weeks) or Month (nine months).
- The **Over Allocated Threshold %** and **Under Allocated Threshold %** control the background color thresholds.
- The **Sort By** parameter: Remaining Capacity (descending by total) or Resource (ascending by name).
- The **Group By** parameter: No Grouping, Resource Manager, or Booking Manager.
- The **Show Under Allocated Only** parameter displays only under-allocated resources if checked.

### Report Fields and Calculations

If the report is not grouped, it displays: resource name, resource manager, booking manager, primary role, and remaining capacity amounts. If grouped by resource manager, the resource manager column is removed. If grouped by booking manager, the booking manager column is removed. Labor and equipment resources are included; expense and material resources are excluded.

The report displays nine periods. The background color is based on the threshold parameters. The remaining capacity field has a red background if over-allocated beyond threshold, green if under-allocated beyond threshold, no background if within bounds.

### Report Security

Security is determined by resource view rights.

---

## Resource Skills and Remaining Capacity Detail

The Resource Skills and Remaining Capacity Detail subreport displays resource capacity and demand for each investment to which the resource is allocated. It also displays all the skills associated to the resource, with the proficiency and interest levels. The subreport displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report.
- To calculate remaining capacity, resource capacity and demand allocation must be included. Resource capacity amounts are included if the resource has availability defined. Resource demand allocation amounts are included if the resource is allocated to at least one investment.
- The capacity and demand time slices are the same as the main report (`MONTHLYRESOURCEAVAILCURVE`, `WEEKLYRESOURCEAVAILCURVE`, `MONTHLYRESOURCEALLOCCURVE`, `WEEKLYRESOURCEALLOCCURVE`).
- For period type of week, the First Day of Work Week field and weekly time slices must be consistent.
- The time periods and FTE conversions depend on the report calendar table.
- The report includes a skills parameter for searching resources with a particular skill set.

### Report Properties
- **Name:** Resource Skills and Remaining Capacity Detail
- **Resource ID:** `CSK_RES_SkillsRemCapacityDetail`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Resource Skills and Remaining Capacity Detail
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_SkillsRemCapacityDetail`
- **Data Source:** Clarity DWH Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Skill | `skillKey` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Over Allocated Threshold % (0-100) | `overAllocatedThreshold` | Single value number | Yes | 10 |
| Under Allocated Threshold % (0-100) | `underAllocatedThreshold` | Single value number | Yes | 30 |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours

### Parameter Explanations
- The **Skill** parameter allows you to search for resources with remaining capacity and a particular skill set. The subreport displays all resource skills regardless of the skills selected in the parameter.
- The **Start Date** determines the first period. Nine periods display total.
- The **Period Type**: Week (nine weeks) or Month (nine months).
- The **Over Allocated Threshold %** and **Under Allocated Threshold %** control the background color thresholds.

### Report Fields and Calculations

The report lists the investments to which the resource is allocated, including the investment name, booking status, allocation start date, allocation finish date, and capacity and allocation amounts by period and in total. The background color thresholds apply the same as the main report.

The report also displays the parent skill, skill, description, proficiency, and interest of all skills associated to the resource.

### Report Security

Security is determined by resource view rights.

---

## Resource Forecasted Utilization

The Resource Forecasted Utilization report displays availability, allocation, and assignment amounts by resource across time periods. The chart shows these amounts per period. The report displays amounts by week or month, and in total. The amounts appear as hours or full-time equivalents (FTEs).

This report allows you to click on a period to drill down to the Resource Forecasted Utilization Detail report.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- Run the Load Data Warehouse and Load Data Warehouse Access Rights jobs. If the Data Warehouse is not populated, the report displays a message that no matching records exist.
- Resource available amounts display if the resource has availability defined and meets the parameter criteria. Available amounts do not display for roles.
- Resource allocation amounts display if the resource or role is allocated to at least one investment team during the reporting period.
- Resource assignment amounts display if the resource or role is assigned to at least one investment during the reporting period. For projects, the resource or role must be assigned to a task in the Gantt unless the project has an effort task with resources or roles automatically assigned.

> [!NOTE]
> Effort task is a task with the Task ID of `~rmw`.
- The availability amounts are calculated based on the time slices `MONTHLYRESOURCEAVAILCURVE` and `WEEKLYRESOURCEAVAILCURVE`.
- For allocations, the amounts are calculated based on `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE`.
- For assignments, the amounts are calculated based on `MONTHLYRESOURCEACTCURVE`, `WEEKLYRESOURCEACTCURVE`, `MONTHLYRESOURCEESTCURVE`, and `WEEKLYRESOURCEESTCURVE`.

### Report Properties
- **Name:** Resource Forecasted Utilization
- **Resource ID:** `CSK_RES_ForecastedUtilization`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Resource Forecasted Utilization
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_ForecastedUtilization`
- **Data Source:** Classic PPM Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| End Date | `endDate` | Single value date | Yes | End of Current Year |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Include Unstaffed Roles? | `includeUnstaffedRoles` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Show Graph? | `showGraph` | Boolean | No | Checked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours

### Parameter Explanations
- The **Start Date** and **End Date** parameters control the months or weeks that display in the report.
- The **Period Type**: Week or Month.
- The **Include Unstaffed Roles** parameter includes roles not staffed with resources if checked.
- The **Show Graph** parameter controls whether the column chart displays at the top of each resource section.

### Report Fields and Calculations

The report displays the resource or role name, resource manager, primary role, employment type, period, available amount, allocation amount, allocation remaining amount, allocation percent (%), assignment amount, assignment remaining amount, and assignment percent (%). The amounts and percentages appear by period and in total. Roles are only included if the Include Unstaffed Roles parameter is checked.

The allocation remaining and assignment remaining fields have a red background if the value is a negative number.

This report contains the following calculations:
- **Allocation %** - The percentage of availability allocated to investments. Formula: `(Allocation Amount / Available Amount) * 100`
- **Assignment %** - The percentage of availability assigned to tasks. For non-project investments, the assignment % equals the allocation %. Formula: `(Assignment Amount / Available Amount) * 100`

### Report Security

Security is determined by resource view rights.

---

## Resource Forecasted Utilization Detail

The Resource Forecasted Utilization Detail report displays availability, allocation, and assignment amounts by investment and task. The report is grouped by resource and time period. The report displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- Run the Load Data Warehouse and Load Data Warehouse Access Rights jobs before you run this report.
- Resource available amounts display if the resource has availability defined. Available amounts do not display for roles.
- Resource allocation amounts display if the resource or role is allocated to at least one investment team during the selected reporting period.
- Resource assignment amounts display if the resource or role is assigned to at least one investment during the selected reporting period.
- The availability, allocation, and assignment time slices are the same as the main report.

### Report Properties
- **Name:** Resource Forecasted Utilization Detail
- **Resource ID:** `CSK_RES_ForecastedUtilDetail`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Resource Forecasted Utilization Detail
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_ForecastedUtilDetail`
- **Data Source:** Classic PPM Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| End Date | `endDate` | Single value date | Yes | End of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Show Tasks? | `showTasks` | Boolean | No | Checked |
| Include Unstaffed Roles? | `includeUnstaffedRoles` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours

### Parameter Explanations
- The **Start Date** and **End Date** control the time range displayed.
- The **Period Type**: Week or Month.
- The **Show Tasks** parameter controls whether tasks display under investments. If checked, tasks with resource assignments display for each investment.
- The **Include Unstaffed Roles** parameter includes roles not staffed with resources if checked.

### Report Fields and Calculations

The report is grouped by resource or role and time period and displays: investment name, task name, charge code, available amount, allocation amount, allocation percent (%), assignment amount, and assignment percent (%). The assignment amount and % are in bold at the investment level because they are calculated based on the tasks.

The allocation % and assignment % fields have a red background if greater than 100 percent.

This report contains the following calculations:
- **Allocation %** - Formula: `(Allocation Amount / Available Amount) * 100`. Red background when exceeding 100%.
- **Assignment %** - Formula: `(Assignment Amount / Available Amount) * 100`. Red background when exceeding 100%.

### Report Security

Security is determined by resource view rights.

---

## Resource Allocations and Assignments

The Resource Allocations and Assignments report displays investment allocation, assignment, and variance amounts by resource across time periods. The chart shows allocation compared to assignment amounts by period. The report can also be run to show allocations only or assignments only. This report displays amounts by week or month, and in total, for each investment and resource. The amounts can be displayed as hours or FTEs.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- Run the Load Data Warehouse and Load Data Warehouse Access Rights jobs before you run this report.
- The resource or role must be allocated to at least one investment team for allocations to display.
- The resource or role must be assigned to at least one investment task for assignments to display.
- The allocation amounts are calculated based on `MONTHLYRESOURCEALLOCCURVE` and `WEEKLYRESOURCEALLOCCURVE`.
- The assignment amounts are calculated based on `MONTHLYRESOURCEACTCURVE`, `WEEKLYRESOURCEACTCURVE`, `MONTHLYRESOURCEESTCURVE`, and `WEEKLYRESOURCEESTCURVE`.

### Report Properties
- **Name:** Resource Allocations and Assignments
- **Resource ID:** `CSK_RES_AllocationAssignment`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Resource Allocations and Assignments
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_AllocationAssignment`
- **Data Source:** Classic PPM Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Type of Hours | `typeOfHoursAll` | Single-select list of values | Yes | Allocated and Assigned |
| Investment Type | `investmentTypeKey_1` | Multiple-select query | Yes | All |
| Investment Manager | `investmentManagerKey_1` | Multiple-select query | No | |
| Investment | `investmentKey_1` | Multiple-select query | No | |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Include Unstaffed Roles? | `includeUnstaffedRoles` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Checked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Show Graph? | `showGraph` | Boolean | No | Checked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours
- **Type of Hours:** Allocated and Assigned, Allocated, Assigned
- **Investment Type:** All, Application, Asset, Idea, Other Work, Product, Project, Service

### Parameter Explanations
- The **Start Date** determines the first time period. Twelve periods display total.
- The **Period Type**: Week (twelve weeks) or Month (twelve months).
- The **Type of Hours** parameter determines which amounts display:
- **Allocated and Assigned** - Shows allocation, assignment, and variance amounts in the body and allocation and assignment amounts in the line chart.
- **Allocated** - Shows allocation amounts only.
- **Assigned** - Shows assignment amounts only.
- The **Include Unstaffed Roles** parameter includes roles not staffed with resources if checked.
- The **Show Graph** parameter controls whether the Allocation vs. Assignment chart displays.

### Report Fields and Calculations

The report displays the investment name with allocation, assignment, and variance amounts by period and in total, grouped by resource or role. The report also includes a line chart showing allocation compared to assignments, in hours or FTEs, by month or week. Programs and templates are excluded.

This report contains the following calculation:
- **Variance** - The difference between allocation and assignment amounts. Red background when the assignment amount exceeds the allocation amount. Formula: `Allocation - Assignment`

### Report Security

Security is determined by resource view rights.

---

## Resource Assignments by Task

The Resource Assignments by Task report displays actual and estimate effort amounts for investment task assignments, by resource. The report displays amounts by investment task assignment, and in total, for each resource. The report also displays task status and percent (%) complete information, and assignment start and finish dates.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- Run the Load Data Warehouse and Load Data Warehouse Access Rights jobs before you run this report.
- The resource or role must be assigned to at least one investment task for the resource to display. For projects, the resource or role must be assigned to a task in the Gantt unless the project has an effort task with resources or roles automatically assigned.

> [!NOTE]
> Effort task is a task with the Task ID of `~rmw`.

### Report Properties
- **Name:** Resource Assignments by Task
- **Resource ID:** `CSK_RES_AssignmentsByTask`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Resource Assignments by Task
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_AssignmentsByTask`
- **Data Source:** Classic PPM Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Booking Status | `bookingStatusKey_1` | Multiple-select query | No | |
| Investment Type | `investmentTypeKey_1` | Multiple-select query | Yes | All |
| Investment Manager | `investmentManagerKey_1` | Multiple-select query | No | |
| Investment | `investmentKey_1` | Multiple-select query | No | |
| Investment Status | `investmentStatusKey_1` | Multiple-select query | No | |
| Task Start Date | `taskStartDate` | Single value date | No | |
| Include Completed Tasks? | `includeCompletedTasks` | Boolean | No | Unchecked |
| Include Unstaffed Roles? | `includeUnstaffedRoles` | Boolean | No | Unchecked |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Include Inactive Investments? | `includeInactiveInvestments` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Booking Status:** Hard, Mixed, Soft
- **Investment Type:** All, Application, Asset, Idea, Other Work, Product, Project, Service

### Parameter Explanations
- The **Task Start Date** parameter determines the start date of the tasks displayed. If a date is entered, tasks with dates equal to or greater than that date are included. If no date is entered, all tasks are included.
- The **Include Completed Tasks** parameter: If checked, includes tasks with all statuses including Completed. If not checked, only tasks with status Not Started and Started are included.
- The **Include Unstaffed Roles** parameter includes roles not staffed with resources if checked.

### Report Fields and Calculations

The report displays the investment name, task name, status, % complete, assignment role, assignment start date, assignment finish date, actuals, ETC, and EAC amounts by task and in total for each resource. If the assignment role is blank, then the team role displays. If the team role is blank, then the resource primary role displays. Completed tasks are excluded by default. Templates are excluded.

This report contains the following calculation:
- **EAC** - The EAC field is the sum of the ETC and actual amounts. Formula: `ETC + Actual`

### Report Security

Security is determined by resource view rights.

---

## Resource Availability

The Resource Availability report displays available capacity amounts by resource. The report can be grouped by resource manager or primary role. The report displays amounts by week or month, and in total. The amounts can be displayed as hours or FTEs.

### Report Prerequisites

Verify that you have completed the following prerequisites before you run this report:
- Run the Load Data Warehouse and Load Data Warehouse Access Rights jobs before you run this report.
- Resource availability amounts display if the resource has availability defined and meets the parameter criteria. The availability amounts are determined by the resource calendar.
- The availability amounts are calculated based on the time slices `MONTHLYRESOURCEAVAILCURVE` and `WEEKLYRESOURCEAVAILCURVE` (Administration, Data Administration, Time Slices).

### Report Properties
- **Name:** Resource Availability
- **Resource ID:** `CSK_RES_ResourceAvailability`
- **Description:** Resource Management (PMO Accelerator)
- **Folder:** Clarity /Reports/Resource Management/Resource Availability
- **Path:** `/ca_ppm/reports/resource_management/CSK_RES_ResourceAvailability`
- **Data Source:** Classic PPM Data Warehouse Bean Data Source

### Report Parameter Options

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Resource OBS Type | `resourceOBSTypeKey_1` | Single-select query | No | |
| Resource OBS Unit | `resourceOBSUnitKey_1` | Single-select query | No | |
| Resource Manager | `resourceManagerKey_1` | Multiple-select query | No | |
| Booking Manager | `bookingManagerKey_1` | Multiple-select query | No | |
| Resource Role | `roleKey_1` | Multiple-select query | No | |
| Resource | `resourceKey_1` | Multiple-select query | No | |
| Employment Type | `employmentTypeKey_1` | Multiple-select query | No | |
| Start Date | `startDate` | Single value date | Yes | Start of Current Month |
| Period Type | `periodTypeWeekMonth` | Single-select list of values | Yes | Month |
| Unit Type | `unitType` | Single-select list of values | Yes | Hours |
| Group By | `groupResManagerPrimaryRole` | Single-select list of values | Yes | No Grouping |
| Include Inactive Resources? | `includeInactiveResources` | Boolean | No | Unchecked |
| Database Schema | `dwhDBSchema` | Hidden | Yes | Passed through Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed through Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed through Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed through Classic PPM |

### Parameter Lookup Values
- **Employment Type:** Contractor, Employee
- **Period Type:** Week, Month
- **Unit Type:** FTE, Hours
- **Group By:** No Grouping, Resource Manager, Primary Role
