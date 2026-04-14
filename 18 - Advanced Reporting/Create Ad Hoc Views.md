---
title: Create an Ad Hoc View and Report
tags:
  - howto
aliases:
  - Create Ad Hoc View
  - New Ad Hoc View
canonical: true
audience: pm, admin, finance
domain: reporting
---

# Create an Ad Hoc View and Report

Advanced Reporting lets you create ad hoc views of Clarity data by selecting fields from the domains. You can save views as reports, place them on dashboards, or export them in multiple formats.

> [!tip]
> Running and scheduling ad hoc views and ad hoc reports from Classic PPM under **Reports and Jobs** is not supported. Only Jaspersoft Studio reports support running/scheduling from Classic PPM.

---

## Prerequisites

- You have access to **Advanced Reporting** in Classic PPM (**Home > Personal > Advanced Reporting**). If you do not see this link, contact your administrator.
- The PMO Accelerator add-in is installed with the required Jaspersoft Advanced Reporting content.
- You have been granted the appropriate access rights (**Advanced Reporting - Ad Hoc Create** is required to see the Ad Hoc Views tile).

---

## Step-by-Step: Create an Ad Hoc View

1. Open **Home** and from **Personal**, click **Advanced Reporting**. The Advanced Reporting page opens with tiles for the available functions.

2. Click **Ad Hoc Views > Create**. A domain selection dialog appears.

   > [!note]
   > Click **Ad Hoc Views > View List** to see existing ad hoc views you can access.

3. **Select a domain** and click **Choose Data**. Available domains include:
   - [[Reporting Domains#1. Investment Management Domain|Investment Management]]
   - [[Reporting Domains#2. Application Management Domain|Application Management]]
   - [[Reporting Domains#3. Idea Management Domain|Idea Management]]
   - [[Reporting Domains#4. Project Management Domain|Project Management]]
   - [[Reporting Domains#5. Resource Management Domain|Resource Management]]
   - [[Reporting Domains#6. Time Management Domain|Time Management]]
   - [[Reporting Domains#7. Financial Management Domain|Financial Management]]
   - [[Reporting Domains#8. Custom Master Objects Domain|Custom Master Objects]]

4. **Select domain fields** that you want available in your ad hoc view.

   > [!warning]
   > Do not select all fields in the domain. For best performance:
   > - For Investment Management, Project Management, Application Management, Idea Management, and Resource Management domains: select **one metric set per view** (Summary, Weekly, Calendar, or Fiscal).
   > - For Financial Management: select one set per view (Financial Transaction or Plan Data).
   > - For Time Management: select one set per view (Missing Time or Timesheets).

5. Click **Table**, **Chart**, or **Crosstab** to select the format for your ad hoc view.

   | Format | Description | Performance Note |
   |---|---|---|
   | Table | Rows and columns of data | Good performance |
   | Chart | Visual charts (bar, pie, line, etc.) | Good performance |
   | Crosstab | Matrix/pivot table with aggregations | Slower; limit size for better performance |

6. **Build the ad hoc view** by selecting fields and measures and dragging them into the view:
   - Drag **Fields** (qualitative items) to Columns, Rows, or Groups.
   - Drag **Measures** (numeric items) to Columns or Measures.
   - Select the **same period type** for both Fields and Measures (do not mix Weekly, Calendar, and Fiscal).

7. **Use data modes** to optimize performance during view creation:

   | Data Mode | Description | Recommendation |
   |---|---|---|
   | Full Data | Shows all actual data | Use only after view is complete |
   | Sample Data | Shows a small data sample | Good for building views |
   | No Data | Shows structure without data | Best performance while building |

   > [!tip]
   > Create ad hoc views in **No Data** or **Sample Data** mode. Switch to Full Data mode only after the view is complete.

8. **Apply filters** by dragging fields to the Filters area and setting values. Click **Apply**.

   > [!note]
   > Filters (Options) focus the report on only the data you want to see.

9. **Save the ad hoc view**. You can save to:
   - The **Shared** folder: other users can access the view.
   - Your **user folder** (under Users): only you can access it.

   > [!warning]
   > Do not save to the Clarity folder or any of its subfolders. These folders are overwritten during system upgrades, and your views will be lost.

10. (Optional) **Create a report from the ad hoc view** when saving. Reports allow you to use scheduling and more formatting options.

---

## Best Practices for Ad Hoc Views

See [[Ad Hoc Views]] for a full list of best practices. Key highlights:

- **Do not select all domain fields.** The Classic PPM domains contain hundreds of fields and measures. Only select what you need.
- **Limit crosstab size.** Crosstabs use aggregations and generally perform slower.
- **Match period types.** Always use the correct metric set for your field period type (e.g., Calendar Periods fields with Calendar Periods measures).
- **OBS data**: When selecting OBS information, filter for a specific OBS type to avoid duplicate results.
- **Financial domain**: Do not use financial planning fields and WIP transaction fields together in the same view.
- **Time domain**: Do not combine Timesheet data and Missing Time data in the same view.

---

## Creating a Report from an Ad Hoc View

1. From the Advanced Reporting page, click **Reports > Create** (or create a report when saving an ad hoc view).
2. Select an existing ad hoc view as the data source.
3. Format the report — apply headers, styles, sorting, grouping, and other options.
4. Save the report. You can save to the Shared folder for organization-wide access.

To run and schedule reports based on ad hoc views, see [[Run and Schedule Reports]].

---

## Export Options

Ad hoc views and reports can be exported in the following formats:
- PDF
- Excel / XLSX
- Word
- PowerPoint
- Other Jaspersoft-supported formats

> [!note]
> The maximum number of report pages is **500 pages** for both scheduled and unscheduled reports. This applies to paginated formats (Excel Paginated, XLSX Paginated). Non-paginated exports (Excel, XLSX) are not subject to this limit.

---

## Related

- [[Reporting Domains]]
- [[Ad Hoc Views]]
- [[Run and Schedule Reports]]
- [[_MOC Advanced Reporting]]
- [[Getting Started Jaspersoft]]

%%Source: p3175-3185%%
