---
title: Advanced Reporting Domains
tags:
  - concept
  - reference
aliases:
  - Jaspersoft Domains
  - PPM Domains
  - Reporting Domains
canonical: true
audience: pm, admin, finance
domain: reporting
---

# Advanced Reporting Domains

Advanced Reporting domains provide a **business view of the Clarity Data Warehouse** for use in [[Ad Hoc Views]]. When you create an ad hoc view, you select a domain that organizes data into logical sets and fields. Domains enforce data security: you see only the data you have permission to view in Classic PPM.

> [!warning]
> Do not modify the default domains provided with Clarity. To customize a domain, copy it to a new location in the repository and make changes to the copy. Note that dynamic domain updates performed by Clarity are not reflected in copied versions.

---

## Domain Terminology

| Term | Definition |
|------|-----------|
| **Sets** | Folder-like containers that organize domain items. Examples: General set, OBS set. Expand sets to view their items. |
| **Items** | Individual entries within a set. Can be Fields or Measures. |
| **Fields** | Items that display qualitative information, such as name, location, or date. |
| **Measures** | Items that display numeric or aggregated values (e.g., hours, costs). Values on which you can perform mathematical calculations. |
| **Ad Hoc Viewer/Editor** | The interactive Jaspersoft designer for creating, viewing, and editing ad hoc views. |

---

## Common Characteristics of All Domains

- **Object Domains**: Domains cover the most frequently used objects, including NPIOs such as Ideas and Applications. In the ad hoc editor, **Fields** (left panel, top) list qualitative properties; **Measures** (left panel, bottom) list numeric values.

- **Internal IDs**: Every domain contains an **Internal ID set** for use as filters by report and dashboard developers. IDs are the same across all domains for shared objects.

- **Custom Folder**: Appears in a domain if you have DWH-enabled custom fields or objects. The Custom folder is the first set under each object. Custom subobjects appear as subfolders named after the subobject.

- **Period Type Consistency**: Select the **same period type** for both Fields and Measures. Mixing period types produces unexpected repeated results.

| Period Type | Field Set | Measures Set |
|---|---|---|
| Weekly | Weekly Periods | Weekly Periods |
| Calendar | Calendar Periods | Calendar Periods |
| Fiscal | Fiscal Periods | Fiscal Periods |
| Summary Totals | (not period-specific) | Summary Totals |

- **Domain Security**: You see all object sets and fields in a domain you can access, but the **data** visible depends on your Classic PPM access rights.

- **Date Fields**: Most domain dates are **business dates** without timestamps or time zone conversion. Exceptions: system dates (Created Date, Last Updated Date, Warehouse Updated Date).

- **PMO Accelerator Fields**: Dynamically included in domains. Their internal IDs are renamed when included in the data warehouse, unlike other add-in fields.

> [!tip]
> For descriptions of all domain fields, see the **Advanced Reporting and Database Schema Index** page, available from [[Getting Started Jaspersoft]].

---

## The 8 Advanced Reporting Domains

### 1. Investment Management Domain

**Purpose**: Information about investments across **all investment types** and their teams. Covers only data common to all investment types.

**Contains**:
- Investment-level financial summary data (summarized totals and period breakdowns)
- Team data (team level, by calendar periods)
- General, financial, OBS, and team information
- Portfolio contents and properties

**Does NOT contain**: Detailed Cost Plan data or actual WIP transaction data. See the Financial Management Domain.

**Data Security**: Investment-level access rights.

**Key Rules**:
- Use Investment fields with Investment measures; Team fields with Team measures.
- Do not mix calendar types (Weekly/Calendar/Fiscal).
- Portfolio data is actual/current, NOT the portfolio planning snapshot.

---

### 2. Application Management Domain

**Purpose**: Investments, teams, and financials for the **Application** investment type.

**Contains**: Investment-level financial data, team data, general/financial/OBS/team info, portfolio contents.

**Does NOT contain**: Detailed Cost Plan or transaction data.

**Data Security**: Application-level access rights.

**Key Rules**:
- Do not mix object types or calendar types.
- For Baseline hours, use Investment data (Team data does not include Baseline hours).

---

### 3. Idea Management Domain

**Purpose**: Investments, teams, and financials for the **Idea** investment type.

**Contains**: Investment-level financial data, team data, general/financial/OBS/team info, portfolio contents.

**Does NOT contain**: Detailed Cost Plan or transaction data.

**Data Security**: Idea-level access rights.

**Key Rules**:
- Do not mix object types or calendar types.
- For Baseline hours, use Investment data (not Team data).

---

### 4. Project Management Domain

**Purpose**: Comprehensive data for **projects and programs** (Project object). The most data-rich domain.

**Contains**:
- Investment-level financial data (project summary level, NOT cost plan level)
- Team data (team level, by calendar periods)
- Tasks and assignments (summary-level totals)
- Issues, risks, and change requests (change requests include Measures metrics; issues/risks do not)
- General, financial, OBS, and team information
- Portfolio contents and properties
- Custom attributes and subobjects for both investment and project objects (combined Custom set)

**Does NOT contain**: Detailed Cost Plan or actual transaction data.

**Data Security**: Project-level access rights.

**Key Rules**:
- Do not mix object types or calendar types.
- For Baseline hours, use Investment data (not Team data).
- When viewing data by resource AND task: add **Assignment Resource**, not Team Resource. Using Team Resource produces inaccurate results.

**Object Measure Sets**:

| Measure Set | Aggregation Level |
|---|---|
| Project metric sets | Project level |
| Team metric sets | Team level |
| Task metric sets | Task level |
| Assignment metric sets | Assignment level |

---

### 5. Resource Management Domain

**Purpose**: Investments, resources, teams, assignments, and task fields from the **resource perspective**.

**Contains**: Resource-level data, investment and team data, assignment data, task fields from resource perspective.

**Data Security**: Resource-level access rights.

**Key Rules**: Do not mix calendar types.

---

### 6. Time Management Domain

**Purpose**: **Created timesheets** and **missing timesheets**. Use for timesheet compliance management.

**Contains**: Timesheet details at the date-worked level, all created timesheets (all statuses), missing timesheet data, incidents.

**Does NOT contain**: Aggregated hours for projects/investments. Use Investment Management domain for aggregated data.

**Data Security**: Timesheet-level access rights.

**Key Rules**:
- Select **either** Timesheet data **or** Missing Time data per view. Do not combine both in the same view.
- Missing Timesheets shows resources/periods where no timesheet was created. Missing entries on an existing timesheet appear under the Timesheets set.
- If integrated timesheets are not used, fields exist but contain no data.

---

### 7. Financial Management Domain

**Purpose**: Detailed financial data — the authoritative domain for financial plans, cost plans, benefit plans, and WIP transactions.

**Contains**:
- Detailed financial planning data: cost plans, cost plan details, benefit plans, benefit plan details
- WIP transaction details at the transaction level (one row per transaction)
- OBS and Investment data
- Only **fiscal time periods** (no calendar or weekly periods)

**Does NOT contain**: Invoicing or chargeback data.

**Data Security**: Financial plan-level access rights.

**Key Rules**:
- Do not mix metric types: use **Investment Totals** OR **WIP Transactions** measures in one view, not both.
- All metrics are fiscal. Do not mix calendar types.
- Multiple plans exist per investment; use a filter to show only the plan of record.
- Financial planning property data is combined with detail data in the same row; selecting property data without detail data produces duplicate rows.
- Use **Transactions sets** for actual transaction detail.
- Use **Financial Plan metric sets** (actual cost, actual unit, actual revenue, realized benefit) when viewing financial planning data with actuals.

---

### 8. Custom Master Objects Domain

**Purpose**: Custom master objects and their child objects that are data warehouse enabled.

**Contains**: Custom master objects and children, Language subobject and fields. Each custom master object appears as its own named set.

**Key Rules**:
- Custom master objects have no parent objects and are not related to each other or any other Clarity objects.
- View **one custom master object at a time**. You cannot view multiple simultaneously.
- Do not mix calendar types.

**Data Security**: Custom master object-level access rights.

> [!note]
> See [[Getting Started Jaspersoft]] for additional notes on using the Custom Master Objects domain.

---

## Data Warehouse Database Schema

Schema information is available on the **Advanced Reporting and Database Schema Index** page:
- Database schema for the application and data warehouse
- ERD diagram for the data warehouse
- Advanced Reporting domain field descriptions
- PMO Accelerator add-in information
- Jaspersoft Studio Professional Client and Report Development Guide

---

## Related

- [[_MOC Advanced Reporting]]
- [[Ad Hoc Views]]
- [[Create Ad Hoc Views]]
- [[Getting Started Jaspersoft]]
- [[Data Warehouse Schema]]

%%Source: p3200-3230%%
