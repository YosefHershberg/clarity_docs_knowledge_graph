---
title: Data Warehouse Trend Reporting
tags:
  - concept
aliases:
  - Data Warehouse Trends
---

# Data Warehouse Trend Reporting


The data warehouse supports business intelligence and analytics trend reporting by capturing trending snapshots.
Tables and jobs are available to help you capture snapshots of important data.
You can compare the data over time and make observations about how it is trending — for example, labor costs trending down while planned ROI is trending up.

This note provides administrators, architects, and report developers with technical details for setting up and managing the trending capabilities.

---

## Overview


- [[#Trending Snapshots]]
- [[#Trending Structural Tables]]
- [[#Trending Jobs]]
- [[#Trending Data Tables]]
- [[#Trending Views]]
- [[#Enable a Custom Attribute for Trending]]
- [[#Trend Reporting Examples]]

---

## Trending Snapshots


Trending data is dynamically defined through your seed data. Each trend is a series of snapshots of different data warehouse tables. You can run jobs that take snapshots of data to be used in trending reports. The frequency of trending data is flexible.

**Key characteristics:**

- Trending has its own set of jobs that depend on the **Load Data Warehouse** job.
- The jobs do not depend on the **Data Warehouse Load Access Rights** job.
- Trending references only the data warehouse tables — it does not use the Clarity transactional database.
- The data warehouse harvests your trending data from its other existing tables, which are already aggregated and summarized. Performance is already optimized by design.

Trending configures itself dynamically by checking the metadata tables and making the database object changes defined in those metadata tables. Programmatic changes are not required to add tables or columns in future snapshots.

**Six metadata tables support trending:**

| Table | Description |
|---|---|
| `DWH_TRD_META_tables` | Information about the tables included in the trending snapshot |
| `DWH_TRD_META_odf_tables` | ODF information about the tables included in the snapshot (read-only) |
| `DWH_TRD_META_columns` | Information about the table columns included in the snapshot |
| `DWH_TRD_META_odf_columns` | ODF information about the table columns included in the snapshot |
| `DWH_TRD_META_idx_pk_fk` | Information about table indexes, primary keys, and foreign keys |
| `DWH_TRD_META_odf_idx_pk_fk` | ODF information about indexes, PKs, and FKs (read-only) |

> [!note]
> The specific tables, views, columns, indexes, and keys can change over time. Changes appear automatically after the trending jobs run.

---

## Trending Structural Tables


The following tables provide the structure for generating and maintaining trending data:

| Table | Description |
|---|---|
| `DWH_TRD_trend` | Header table; stores unique trend key, name, type, run time start/end dates, and snapshot year |
| `DWH_TRD_trend_detail` | Stores details about each snapshot: trend key, target table refreshed, start/end dates |
| `DWH_TRD_trend_history` | Historical information about when trends were updated, including last DWH run date at time of update |
| `DWH_TRD_trend_deletion` | Stores the date and time of trend deletion |
| `DWH_TRD_gen_facts` | Temporary table for processing; stores data structures |
| `DWH_TRD_tmp_current_key` | Temporary table for processing; stores information about the current trend |

---

## Trending Jobs


To configure your own trending data, use the following three jobs:

| Job | Description |
|---|---|
| **Create Data Warehouse Trend** | Define parameters that establish a new trend. For example, create a trend to analyze monthly changes in spending for a particular year. Run this job first. |
| **Update Data Warehouse Trend** | Refresh an existing snapshot with new data. Run or schedule this job to keep trend data current. |
| **Delete Data Warehouse Trend** | Delete previous snapshots by specifying a named trend or a specific date or relative date. Deletes all snapshots in that trend, or all snapshots from all trends prior to your selected date. |

> [!note]
> The data warehouse creates all necessary trending tables only after you run both the **Load Data Warehouse** job and the **Create Data Warehouse Trend** job.

---

## Trending Data Tables


The following tables store the trending source data that report developers can use to build trending reports and dashboards. These tables track slow progressive changes in dimensions for investments, resources, and OBS mappings:

- `DWH_TRD_INV_INVESTMENT`
- `DWH_TRD_INV_INVESTMENT_LN`
- `DWH_TRD_RES_RESOURCE`
- `DWH_TRD_LKP_OBS_UNIT`
- `DWH_TRD_INV_OBS_MAPPING`
- `DWH_TRD_RES_OBS_MAPPING`
- `DWH_TRD_INV_MONTH_FACTS`
- `DWH_TRD_RES_MONTH_FACTS`
- `DWH_TRD_INV_SUM_FACTS`

Investment, resource, and investment summary facts are included in trending snapshots. Snapshots can capture monthly changes to individual attributes. Common examples of popular trending data include:

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

> [!tip]
> Examine trending data to identify answers to popular questions such as:
> - "What locations or departments have added the most staff in the last six months?"
> - "Are actuals trending up or down, and on which investments?"
> - "How are forecasts trending against budgets over the most recent four quarters?"
> - "Is project status trending in the right direction this quarter?"
> - "When does the number of resources in a primary role drop below a threshold to trigger staffing action?"

---

## Trending Views


Three trending materialized views are available to guide you to the appropriate data in the warehouse:

| View | Description |
|---|---|
| `DWH_TRD_PER_TREND_BY_F_MV` | Fiscal period data |
| `DWH_TRD_PER_TREND_BY_M_MV` | Monthly calendar data |
| `DWH_TRD_PER_TREND_BY_W_MV` | Weekly data |

All three views share the same table column layout.

---

## Enable a Custom Attribute for Trending


You can enable custom attributes for trending in the investment, resource, and project objects. Stock non-project investment objects (NPIOs) also support custom attribute trending including applications, assets, products, services, and other work.

To configure trending, enable the object and attribute for the data warehouse, then enable them again specifically for trending.

**Follow these steps:**

1. Click **Administration**, **Studio**, **Objects**.
2. Open an object that supports trending.

The **Include in the Data Warehouse Trending** check box for all objects is read-only. If the object supports trending, this field is pre-selected (but disabled/grayed out). If the object does not support trending, the check box is not selected.

3. Click the **Attributes** tab.
4. To filter on attributes that are enabled or not enabled for trending, use the **Data Warehouse Trending** filter field.
5. To add a new custom attribute, click **New**.

> [!tip]
> Trending is limited to the following types of custom attributes: string, number, date, lookup, formula, calculated, aggregated, and Boolean.

6. To enable the custom attribute for the data warehouse, select **Include in the Data Warehouse**.
7. To enable it for trending, select **Include in the Data Warehouse Trending**.

The trending ETL jobs now include any custom attributes you enable for trending.

> [!note]
> When a user disables an attribute that was previously enabled for the data warehouse, the application also clears the trending check box.

---

## Trend Reporting Examples


### Project KPI Trends


The **Project KPI Trends** report (introduced in Release 15.5.1) is an example of applied trending snapshots. Trend reporting helps teams and leadership identify overall patterns that shift over time.

Use the Project KPI Trends report to monitor key performance indicators and establish priorities. For example, track the quantity and severity of open risks, issues, change requests, and to-do items over time.

### Trended Metrics by Project


The **Trended Metrics by Project** report (introduced in Release 15.6) serves as a second example of trend reporting. It compares key financial data for core investments by fiscal period.

This report is populated with your pre-defined trending data already configured and extracted to the data warehouse. You can run the report for a single month, up to 12 months, or up to 12 fiscal periods.

When users run or schedule this report, they can select up to **5** of the following project metrics:

- Actual Cost
- Actual Hours
- Allocation Cost
- Allocation Hours
- Baseline Cost
- Baseline Hours
- Budgeted Benefit
- Budgeted Cost

---

## Related

- [[_MOC Advanced Reporting]]

%%Source: p3597-3601%%
