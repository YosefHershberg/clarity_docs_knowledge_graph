---
title: PMO Accelerator Advanced Reporting Setup
tags:
  - admin
  - howto
aliases:
  - PMO Setup
  - Advanced Reporting Setup
---
# PMO Accelerator Advanced Reporting Setup

The PMO Accelerator add-in provides the Advanced Reporting content for Clarity. Proper setup is required for reports to display data. This note covers all setup requirements.

> Source: Clarity 16.4.1 documentation, pp. 3293–3306

## Prerequisites

The **PMO Accelerator** add-in must be installed before the Advanced Reporting content can be used. The Advanced Reporting content delivered with the PMO Accelerator includes:
- Data Sources
- Domains
- Input Controls
- Reports
- Roles
- Templates

## Setup Checklist

To view reports with updated information, configure:

1. [[#Data Warehouse Calendar Periods and FTE]]
2. [[#Required Jobs]]
3. [[#Time Slices]]
4. [[#Populate Option (Performance)]]
5. [[#Language, Locale, and Time Zone]]
6. [[#Source Files]]
7. [[#Data Sources]]

---

## Data Warehouse Calendar Periods and FTE

The DWH calendar table (populated by the **Load Data Warehouse** job) drives:
- Calendar periods displayed in reports
- FTE conversions (based on resource with Resource ID = 'admin' and the WEEKLYRESOURCEAVAILCURVE or MONTHLYRESOURCEAVAILCURVE time slice)

**Default DWH periods:**
- Daily: 365 periods back and forward
- Weekly: 52 periods back and forward
- Monthly: 36 periods back and forward

**If you change the number of periods:** Change all DWH slice requests for that period type consistently. Large timeframes → longer Time Slicing job execution.

**Weekly period alignment:** Two settings must be consistent:
- First Day of Work Week in Classic PPM (Administration/Project Management/Settings)
- From Date of all weekly time slice requests (must start on the same day of the week)

---

## Required Jobs

These Classic PPM jobs are required by reports (specific jobs depend on the report):

| Job | Purpose |
|---|---|
| Create and Update Jaspersoft Users | Syncs Classic PPM users/access groups to Jaspersoft roles |
| Load Data Warehouse | Populates DWH dimensions, facts, and lookup tables |
| Load Data Warehouse Access Rights | Controls which investments each user can see in DWH-based reports |
| Time Slicing | Populates time-phased data curves |
| Update Report Tables | Populates report skills tables and reporting calendar |
| Post Timesheets | Makes timesheet data available |
| Post Transactions to Financials | Posts financial transactions |
| Post to WIP | Posts transactions to WIP |
| Import Financial Actuals | Imports actuals from external systems |
| Investment Allocation | Calculates investment allocations |
| Update Earned Value and Cost Totals | Required for EV metrics and cost amounts |
| Synchronize Portfolio Investments | Required for portfolio reports |

> **Warning:** Activate the Load Data Warehouse and Load Data Warehouse Access Rights jobs before running them.

**When to run Load Data Warehouse with Full Load:**
- Adding a new language in DWH system options
- Changing the entity for fiscal periods in DWH options
- Changing the First Day of Work Week in Classic PPM

**PMO Accelerator attributes and DWH:**
- All PMO Accelerator attributes have "Include in the Data Warehouse" checked by default
- **Do NOT uncheck these fields** — reports and input controls depend on them
- Attribute IDs are renamed when DWH columns are created (see DWH column mapping tables in documentation)

> **Warning:** Unchecking any PMO Accelerator attribute to exclude it from the DWH will break reports and input controls that reference that field.

---

## Time Slices

Time slices are configured in Administration/Data Administration/Time Slices.

> **Warning:** DWH time slice requests default to consistent settings per period type. If you edit them, keep From Date and Number of Periods the same for all slice requests of the same period type (Daily, Weekly, Monthly).

### Rules for Configuration
- All **weekly** time slice requests: From Date must match the First Day of Work Week
- All **monthly** time slice requests: From Date must always be the first of a month

### Time Slices Used by Advanced Reporting

| Time Slice Name | Item | Period | DWH Request |
|---|---|---|---|
| DAILYRESOURCEAVAILCURVE | Availability | Daily | No (not DWH) |
| DAILYRESOURCETIMECURVE | Time Entry | Daily | Yes |
| WEEKLYRESOURCEACTCURVE | Actuals | Weekly | Yes |
| WEEKLYRESOURCEALLOCCURVE | Allocations | Weekly | Yes |
| WEEKLYRESOURCEAVAILCURVE | Availability | Weekly | Yes |
| WEEKLYRESOURCEESTCURVE | Estimates | Weekly | Yes |
| MONTHLYRESOURCEACTCURVE | Actuals | Monthly | Yes |
| MONTHLYRESOURCEALLOCCURVE | Allocations | Monthly | Yes |
| MONTHLYRESOURCEAVAILCURVE | Availability | Monthly | Yes |
| MONTHLYRESOURCEBASECURVE | Baseline | Monthly | Yes |
| MONTHLYRESOURCEESTCURVE | Estimates | Monthly | Yes |
| MONTHLYRESOURCEHARDALLOC | Hard Allocation | Monthly | Yes |

**Special note for DAILYRESOURCEAVAILCURVE** (used by Missing Time report only):
- This is the ONE time slice that is NOT a DWH request
- Recommended setting: From Date = first day of month, 6 months prior to current month; Slice Period = Daily; Number of Periods = 400

---

## Populate Option (Performance)

Beginning with Release 14.3.0.3, most reports include a **Populate** check box on query-based parameters to improve performance.

**Without Populate:** No values load in the parameter (faster initial page load)
**With Populate:** Values load in the parameter (may be slower with large datasets)

**Query-based parameters with Populate:**
- Investment, Project, Resource, Role, Primary Role
- Investment Manager, Project Manager, Business Owner, Resource Manager, Booking Manager

**Additional performance improvement:** Investment, Project, and Resource parameters are now cascading based on OBS Unit and Manager selections:
- Select an Investment OBS Unit → Investment parameter shows only investments linked to that unit/descendants
- Select an Investment Manager → Investment parameter shows only that manager's investments

---

## Language, Locale, and Time Zone

Settings from Classic PPM (Home/Account Settings/Personal Information) are passed to Jaspersoft:

| Classic PPM Setting | Effect on Reports |
|---|---|
| Language | Report/parameter labels and returned data are localized |
| Locale | Number, time, and date formats |
| Time Zone | Report run date/time in report footer |

> **Note:** The time zone setting does NOT apply to business dates in reports. Business dates are not adjusted for time zone. For consistent dates between Classic PPM and reports, set the Jaspersoft server time zone to match the Classic PPM application and database server time zones.

> **Known Issue:** The repository folder structure and sub-items (reports, input controls, templates) do not appear in their localized form — names appear in English for all languages. Input controls show $R{} expressions rather than localized labels (but report output is fully localized).

---

## Source Files

Report source files are included in `jaspersoft_csk.zip`, available after installation at:
`<install>\reporting\content\csk\jaspersoft\package`

Patches include: `jaspersoft_csk_upgrade_[patch_number].zip`

JRXML files require **Jaspersoft Studio** (Eclipse-based tool, downloadable separately). See Clarity Release Notes for the supported Jaspersoft Studio version.

**Source file locations (after extraction):**
`\resources\organizations\org_template\ca_ppm\reports\<management_area>\`

Management areas: `project_management`, `investment_management`, `resource_management`, `time_management`, `financial_management`, `program_management`, `portfolio_management`, `administration`

---

## Data Sources

The PMO Accelerator Advanced Reporting content uses two data sources:

### Clarity BEAN (Classic PPM Bean Data Source)
- Type: Bean data source
- Purpose: Access to the Classic PPM **transactional** schema
- Used by reports that require real-time or non-DWH data (e.g., Risk Register, Portfolio reports, Roadmap Timeline)

### Clarity DWH BEAN (Classic PPM Data Warehouse Bean Data Source)
- Type: Bean data source
- Purpose: Access to the Data Warehouse schema
- Used by **most** reports and input controls

**Validating connections:** Test Connection button is available when editing the data source (Home/Personal/Advanced Reporting/View/Repository/<organization>/Clarity/Data Sources/Edit).

> **Note:** Do NOT modify the Bean Name and Bean Method properties in the data source.

---

## Report Folder Structure

All PMO Accelerator reports are located in Jaspersoft at:
`/ca_ppm/reports/<management_area>/`

The Clarity folder in Jaspersoft contains:
- `/Reports/Project Management/`
- `/Reports/Investment Management/`
- `/Reports/Resource Management/`
- `/Reports/Time Management/`
- `/Reports/Financial Management/`
- `/Reports/Program Management/`
- `/Reports/Portfolio Management/`
- `/Reports/Administration/`

---

## Related

- [[_MOC Advanced Reporting]]
- [[Roles and Permissions]]
- [[Project Reports]]
- [[Investment Reports]]
- [[Resource Reports]]
- [[Time Reports]]
- [[Financial Reports]]
- [[Program Reports]]
- [[Portfolio Reports]]
- [[PMO Admin Reports]]
- [[Getting Started Jaspersoft]]
- [[Data Warehouse Trends]]

%%Source: p3293-3306%%
