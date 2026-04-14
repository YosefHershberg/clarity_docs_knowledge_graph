---
title: PMO Resource Management Reports
tags:
  - reference
  - admin
aliases:
  - Resource Reports
---
# PMO Resource Management Reports


The Resource Management reports provide visibility into the capacity and demand of resources across the resource pool.
They display capacity and demand by OBS, role, resource, and investment.
Reports identify over/under-allocated resources, show resource availability, skills, and compare plan amounts to baselines.

> Source: Clarity 16.4.1 documentation, pp. 3419–3475

## Reports Included


| Report Name | Resource ID | Data Source |
|---|---|---|
| Resource Baseline vs. Plan by Employment Type | CSK_RES_BaseVsPlanByEmpType | DWH Bean |
| Capacity vs. Allocation by OBS | CSK_RES_CapVsAllocByOBS | DWH Bean |
| Capacity vs. Booking Status by OBS | CSK_RES_CapVsBookingByOBS | DWH Bean |
| Capacity vs. Demand by Role | CSK_RES_CapVsDemandByRole | DWH Bean |
| Capacity vs. Demand by Resource | CSK_RES_CapVsDemandByResource | DWH Bean |
| Over/Under Allocation by Role | CSK_RES_OverUnderAllocByRole | DWH Bean |
| Over/Under Allocation by Resource | CSK_RES_OverUnderAllocation | DWH Bean |
| Resource Skills | CSK_RES_Skills | Classic PPM Bean |
| Resource Skills and Remaining Capacity | CSK_RES_SkillsRemCapacity | DWH Bean |
| Resource Skills and Remaining Capacity Detail | (sub-report) | DWH Bean |
| Resource Forecasted Utilization | CSK_RES_ForecastedUtilization | DWH Bean |
| Resource Forecasted Utilization Detail | CSK_RES_ForecastedUtilDetail | DWH Bean |
| Resource Allocations and Assignments | CSK_RES_AllocationAssignment | DWH Bean |
| Resource Assignments by Task | CSK_RES_AssignmentsByTask | DWH Bean |
| Resource Availability | CSK_RES_ResourceAvailability | DWH Bean |

---

## Resource Baseline vs. Plan by Employment Type


**Description:** Displays baseline, actual, ETC, EAC, and variance amounts by resource across investments, grouped by employment type (e.g., Employee, Contractor). Chart shows baseline vs. EAC by month. Supports hours or FTE.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resource must have employment type field completed (required field)
- Resource must be assigned to at least one investment during the reporting period
- Time slices: `MONTHLYRESOURCEBASECURVE` (baseline), `MONTHLYRESOURCEACTCURVE` (actual), `MONTHLYRESOURCEESTCURVE` (ETC)

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Booking Manager, Resource, Investment Type (default: All), Start Date (default:
start of current quarter), End Date (default: end of next quarter), Unit Type (default: Hours), Completed Tasks Only, Include Inactive Resources/Investments, Show Graph

**Key Calculations:**
- **EAC:** ETC + Actual
- **Variance:** EAC − Baseline (red = EAC exceeds baseline)
- **% Variance:** `((EAC − Baseline) / Baseline) × 100`

**Security:** Resource view rights

---

## Capacity vs. Allocation by OBS


**Description:** Displays resource capacity and demand (allocation) across investments, groupable by any OBS level. Shows weekly or monthly amounts plus totals. Includes summary charts of capacity vs. allocation. Supports hours or FTE.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resource must have availability defined for capacity to display
- Resource must be allocated to at least one investment for demand to display
- Capacity time slices: `MONTHLYRESOURCEAVAILCURVE`, `WEEKLYRESOURCEAVAILCURVE`
- Demand time slices: `MONTHLYRESOURCEALLOCCURVE`, `WEEKLYRESOURCEALLOCCURVE`

**Key Parameters:** Resource OBS Type/Unit (required), Resource Manager, Booking Manager, Resource, Investment Type, Start Date, Period Type (Week/Month), Unit Type, Group By (No Grouping/Resource Manager/Booking Manager/OBS Level), Include Inactive Resources/Investments

**Security:** Resource view rights

---

## Capacity vs. Booking Status by OBS


**Description:** Displays resource capacity broken down by booking status (Hard, Soft, Mixed) vs. demand, groupable by OBS level. Shows weekly or monthly amounts plus totals.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resource must have availability and allocation amounts
- Capacity time slices: `MONTHLYRESOURCEAVAILCURVE`, `WEEKLYRESOURCEAVAILCURVE`
- Demand time slices: `MONTHLYRESOURCEALLOCCURVE`, `WEEKLYRESOURCEALLOCCURVE`

**Key Parameters:** Resource OBS Type/Unit (required), Resource Manager, Employment Type, Booking Status (Hard/Soft/Mixed), Period Type (Week/Month), Unit Type, Group By

**Security:** Resource view rights

---

## Capacity vs. Demand by Role


**Description:** Displays resource capacity and demand by role across time periods. Helps identify which roles are over- or under-staffed. Shows 12 weekly or monthly periods plus totals.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resources must have primary role assigned
- Capacity and demand time slices must be configured

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Booking Manager, Role, Start Date, Period Type (Week/Month), Unit Type (Hours/FTE), Employment Type, Booking Status

**Security:** Resource view rights

---

## Capacity vs. Demand by Resource


**Description:** Displays capacity and demand amounts at the individual resource level across time periods. Provides drill-down into specific resource supply/demand situations.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Capacity and demand time slices must be configured

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Booking Manager, Resource, Investment Type, Start Date, Period Type (Week/Month), Unit Type

**Security:** Resource view rights

---

## Over/Under Allocation by Role


**Description:** Displays remaining capacity (capacity minus allocation) by role across time periods. Color-coded cells indicate over/under allocation based on configurable threshold percentages. Supports hours or FTE.

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Employment Type, Booking Status, Period Type (Week/Month), Unit Type, Start Date, Over/Under Allocated (Over and
Under/Over Only/Under Only), Over Allocated Threshold % (red threshold), Under Allocated Threshold % (green threshold), Group By (No Grouping/Resource Manager/Booking Manager)

**Key Behaviors:**
- **Red background:** Resource over-allocated by more than the Over Allocated Threshold %
- **Green background:** Resource under-allocated by more than the Under Allocated Threshold %
- Only shows roles, not individual resources; equipment/expense/material excluded

**Security:** Resource view rights

---

## Over/Under Allocation by Resource


**Description:** Displays remaining capacity by individual resource across 12 weekly or monthly periods. Color-coded with threshold-based stoplights similar to Over/Under Allocation by Role. Includes investment-level allocation detail.

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Booking Manager, Resource, Investment Type, Investment Status, Employment Type, Booking Status, Period Type, Unit Type, Start Date, Over/Under Allocated filter, Over/Under Allocated Threshold %, Group By

**Security:** Resource view rights

---

## Resource Skills


**Description:** Displays the skills hierarchy with associated resources, showing proficiency rating and interest level for each resource/skill combination. Includes a stacked column chart of resources by parent skill and employment type.

**Data Source:** Classic PPM Bean (transactional — does not use DWH)

**Prerequisites:**
- At least one skill must exist (Administration/Data Administration/Skills Hierarchy) associated to at least one labor resource
- **Update Report Tables** job must be run with the "update resource skills index" option to populate the report skills tables (run whenever skills are created, deleted, renamed, or modified in the hierarchy)

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Booking Manager, Resource Role, Resource, Employment Type, Skill, Interest ≥ (1-Low to 10-High, default:
1-Low), Proficiency ≥ (1-Beginner to 10-Expert, default: 1-Beginner), Sort By (Resource/Proficiency), Include Inactive Resources, Show Graph

**Key Fields:** Resource name, primary role, resource manager, booking manager, employment type, skill proficiency, skill interest

**Security:** Resource view rights

---

## Resource Skills and Remaining Capacity


**Description:** Combines resource skills search with remaining capacity display. Find resources with remaining capacity and specific skills.
Shows weekly or monthly remaining capacity amounts, sortable by capacity or resource, groupable by resource/booking manager.
Drills down to Resource Skills and Remaining Capacity Detail.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resource must have availability and allocation data
- Capacity time slices: `MONTHLYRESOURCEAVAILCURVE`, `WEEKLYRESOURCEAVAILCURVE`
- Demand time slices: `MONTHLYRESOURCEALLOCCURVE`, `WEEKLYRESOURCEALLOCCURVE`
- **Update Report Tables** job required for calendar FTE calculations
- Skills must exist and be associated to labor resources

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Booking Manager, Resource, Employment Type, Skill, Interest ≥, Proficiency ≥, Period Type (Week/Month), Start Date,
Unit Type, Sort By (Resource/Remaining Capacity), Group By (No Grouping/Resource Manager/Booking Manager), Include Inactive Resources

**Security:** Resource view rights

---

## Resource Forecasted Utilization


**Description:** Displays resource utilization by comparing actual hours, ETC hours, and available hours. Shows the utilization percentage by resource. Helps forecast resource utilization over time.

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Booking Manager, Resource, Investment Type, Investment Manager, Investment, Period Type (Month/Quarter), Start Date, Unit Type, Include Inactive Resources/Investments

**Security:** Resource view rights

---

## Resource Forecasted Utilization Detail


**Description:** Drill-down detail version of Resource Forecasted Utilization showing investment-level breakdown for each resource.

**Key Parameters:** Same as Resource Forecasted Utilization

**Security:** Resource view rights

---

## Resource Allocations and Assignments


**Description:** Displays team member allocation, task assignment, and variance amounts by resource across investments and time periods.
Shows weekly or monthly amounts plus totals. Can display hours or FTE. Mirrors Investment Allocations and Assignments but organized by resource rather than investment.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resource must have allocation or assignment data
- Allocation time slices: `MONTHLYRESOURCEALLOCCURVE`, `WEEKLYRESOURCEALLOCCURVE`
- Assignment time slices: `MONTHLYRESOURCEACTCURVE`, `WEEKLYRESOURCEACTCURVE`, `MONTHLYRESOURCEESTCURVE`, `WEEKLYRESOURCEESTCURVE`

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Booking Manager, Resource, Investment Type, Investment Manager, Investment, Start Date, End Date, Period Type, Report Type (Allocation and Assignment/Allocation Only/Assignment Only), Unit Type, Include Inactive Resources/Investments

**Security:** Resource view rights

---

## Resource Assignments by Task


**Description:** Displays task assignment amounts (baseline, actual, ETC, EAC, variance) by resource grouped by investment, phase, and task. 12-month view from selected start date. Supports hours or FTE.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resource must be assigned to at least one investment task
- Time slices: `MONTHLYRESOURCEBASECURVE`, `MONTHLYRESOURCEACTCURVE`, `MONTHLYRESOURCEESTCURVE`

**Security:** Resource view rights

---

## Resource Availability


**Description:** Displays resource available capacity amounts by period and in total. Groupable by resource manager, primary role, or no grouping. Shows 12 weekly or monthly periods. Supports hours or FTE.

**Prerequisites:**
- Load DWH and Load DWH Access Rights jobs
- Resource must have availability defined
- Capacity time slices: `MONTHLYRESOURCEAVAILCURVE`, `WEEKLYRESOURCEAVAILCURVE`

**Key Fields:**
- When no grouping: resource name, primary role, availability by period and total
- When grouped by resource manager: same columns
- When grouped by primary role: resource name, resource manager, availability by period and total
- Labor and equipment resources included; expense and material excluded

**Security:** Resource view rights

---

## Common Prerequisites


- **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs required
- FTE conversion depends on the DWH calendar table (populated by Load DWH job)
- Labor resources only for effort-based reports; equipment excluded from some reports
- Roles are excluded from resource-level reports (and vice versa) unless specifically noted
- Weekly periods require consistent First Day of Work Week setting across time slices and Administration settings

## Related

- [[_MOC Advanced Reporting]]
- [[PMO Accelerator Setup]]
- [[Roles and Permissions]]
- [[Investment Reports]]
- [[Time Reports]]

%%Source: p3419-3475%%
