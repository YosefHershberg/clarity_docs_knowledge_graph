﻿---
title: Ad Hoc Views and Custom Report Development
tags:
  - howto
aliases:
  - Ad Hoc Views
---

# Ad Hoc Views and Custom Report Development


This page provides best practices for working with Advanced Reporting views, domains, and custom reports developed in Jaspersoft Studio.

> [!tip]
> Running and scheduling ad hoc views and ad hoc reports in Classic PPM under **Reports and Jobs** is not supported. Only Jaspersoft Studio reports are supported for running and scheduling from Classic PPM.

---

## Jaspersoft Studio User Guide


The **Jaspersoft Studio User Guide** covers the following subjects:

- Jaspersoft Studio user interface, hardware and software requirements, report structure, and export options
- Basic concepts about JRXML and expressions using Java and Groovy
- Basic element properties, formatting and positioning options, graphic and text elements
- How to work with fields, parameters, variables, templates, queries, and charts

---

## Best Practices for Ad Hoc Views


To reduce performance issues and generate the desired results for your advanced reports, follow these best practices when using the Ad Hoc Viewer and the domains.

### Do Not Select All Domain Fields


The Classic PPM domains contain hundreds of fields and measures. When building ad hoc views, only select the fields you plan to use.
Too many fields can cause your view to perform slower.
Later, if needed, you can add more fields by clicking the icon to the right of the domain name and then clicking **Select Fields**.

### Limit the Size of Crosstab Ad Hoc Views


Crosstab ad hoc views are more complex — they use aggregations and calculation functions, so they generally perform slower than table or chart views. Limit the size of your crosstab views whenever possible to improve performance.

### Create Ad Hoc Views in No Data Mode


You can create ad hoc views using three different data modes: **Full Data**, **Sample Data**, and **No Data**. Create ad hoc views using either **No Data** or **Sample Data** mode because performance is much better. Once the view is complete, you can switch to **Full Data** mode.

### Select the Correct Metrics


The Classic PPM domains (except for the Custom Master Objects domain) contain three different period types. Each domain also contains a set of metrics for use with each period type. If the wrong metrics are selected, you will not get the expected results.

| Period Type | Field Set | Measures Set |
|---|---|---|
| Weekly | Weekly Periods | Weekly Periods |
| Calendar | Calendar Periods | Calendar Periods |
| Fiscal | Fiscal Periods | Fiscal Periods |
| Summary Totals | (not period-specific) | Summary Totals |

> [!warning]
> Do not mix period types. For example, do not use Calendar Periods fields with Weekly Periods measures.

Each object field set within a domain is for use with a corresponding object measures set.
For example, when building ad hoc views against the **Project Management** domain with monthly team data, select metrics from the **Team** set under the Calendar Periods measures
set.
The measures under the Calendar Periods Team set are aggregated and grouped at the team level.

**Object measure sets in the Project Management domain:**

- **Project metric sets** — aggregated and summarized at the project level
- **Team metric sets** — aggregated and summarized at the team level
- **Task metric sets** — aggregated and summarized at the task level
- **Assignment metric sets** — aggregated and summarized at the assignment level

### Use OBS Data Correctly


When selecting and displaying OBS information in ad hoc views, filter for a specific OBS type. Otherwise, when resources and investments are attached to different OBS (which is common), you will get duplicate results.

### Use Portfolio Data Correctly


The portfolio fields in domains are included primarily for filtering and grouping investment data by portfolio. Currently, domains do not include portfolio rollups or complex portfolio structures like scenarios.

### Use Financial Data Correctly in the Financial Management Domain


The Financial Management Domain contains financial planning data and financial transaction data stored at different levels of granularity. They do not have a direct relationship with each other.

> [!warning]
> Do not use financial planning fields and metric sets together with financial transactions fields and metric sets in the same ad hoc view. This produces unexpected results.

- Use **Transactions** sets to view actual transactions at a detail level
- Use **Financial Plan** metric sets (actual cost, actual unit, actual revenue, realized benefit) when viewing financial planning data with actuals
- Financial planning property data is combined in the same row as financial planning detail data. If you select property data without detail data, you will see multiple occurrences because it displays for every occurrence of the detail data.

### Use Time Data Correctly in the Time Management Domain


The Time Management domain contains timesheet data and missing time data. Select either timesheet data or missing time data — do not combine the two data types in the same view, as this produces unexpected results.

### Reconcile Dates for Time Zone Differences


The Advanced Reporting domains display dates without a time element, except for system dates. The following dates are considered **business dates** (not system dates):

- Investment start and finish dates
- Task start and finish dates
- Assignment start and finish dates

**Rules for date display:**

- Display **system dates** (Created Date, Last Updated Date) in Classic PPM as **date and time** so they match the Advanced Reporting domains.
- Display **business dates** in Classic PPM as **date** (without time) so they match the Advanced Reporting domains.
- Custom attributes created as dates in Classic PPM are not considered system dates and never adjust for time zone.

When you execute a report immediately, there is no time zone adjustment for business dates. When you schedule a report, time zone adjustment is made only for system dates, based on the time zone selected in **Advanced Reporting, Output Options**.

> [!note]
> By default, date fields in ad hoc views appear as date (without a time element), even for system dates. When creating an ad hoc view, you can modify the date format for system dates to include a time element.

### Export Ad Hoc Views and Reports


The maximum number of report pages that you can generate is **500 pages** for both scheduled and unscheduled reports.
This limit applies to all reports and ad hoc views exported using **paginated** options such as **Excel (Paginated)** and **XLSX (Paginated)**.
The limit does not apply to non-paginated export options such as **Excel** and **XLSX**.

---

## Show the View SQL Query Button


In Jaspersoft 6.4.2 and 7.1, the **View SQL Query** button does not appear for report users (even with `ROLE_ADMINISTER`) by default.

**Follow these steps:**

1. Log in to the Jaspersoft report server as a superuser.
2. In the main menu, click **Manage**, **Server Settings**, **Adhoc Settings**.
3. Select the **Enable View Query in Ad Hoc Editor** check box and click **Change**.

Users with `ROLE_ADMINISTER` can now view the **View SQL Query** button in ad hoc views.

---

## Best Practices for Domains and Reports


> [!tip]
> Do not make any changes to the default domains, permissions, or reports that come with the application. Any changes can cause problems or be impacted by the upgrade process.
> Always make a copy of a domain or report in a test environment and make your changes outside of the Classic PPM production folder structure.

- Avoid creating domains over **2.0 MB**. Exceeding this size limit can cause errors when editing in the domain designer. Jaspersoft recommends including fewer than **50 tables or views** in a domain.
- Do not build Jaspersoft Studio reports based on domains due to known performance and functional issues. Use **direct SQL statements** instead.
- Do not migrate the original default system domains from one environment to another — custom objects and attributes may exist in one environment but not in another.
  Run the **Load Data Warehouse** job in each environment so the domains automatically include the correct custom objects and attributes for that environment.

### Migrate Custom Domains


To migrate custom domains from one environment to another:

1. Extract the domain file from the source environment.
2. Edit the domain using the **Domain Designer** and select **Export Design**.
3. Save the domain XML file locally.
4. Edit the domain XML file using any XML editing tool for any differences in custom objects and attributes that exist in the original environment but not in the migrated environment. Also, change the schema name to the new environment in the XML file.
5. In the new environment, upload the domain XML file while creating or editing the custom domain.

> [!note]
> Verify that the schema file name you upload does not contain any spaces or special characters.

6. Click **Submit**. If there are differences between the environments you missed in Step 4, an error appears showing the details. Fix your domain XML file and try again.

---

## Best Practices for Custom Report Development


Use **Jaspersoft Studio** to build and manage your own custom reports in Advanced Reporting.
As a prerequisite, set up the CA JDBC Adapter to connect to the Classic PPM transactional database or data warehouse schemas without a VPN connection.
The adapter lets you run and test report queries faster and more efficiently.

### Start the Report


- Install and use the Jaspersoft Studio version that corresponds to the Classic PPM version in your environment. Avoid installing more than one version of Jaspersoft Studio on the same computer.
- Use existing stock reports as examples when starting custom report development. The PMO Accelerator Advanced Reporting content includes more than 50 reports you can use as a starting point.
- Do not modify reports under the Classic PPM folder. Make a copy of the OOTB report and modify the copy.
- Organize the folder structure for your custom content similar to the Classic PPM folder organization, considering how you want to manage security.
- Create your reports outside the Classic PPM folder, not under it. Create a folder under the organization for your own reporting content, or use the **Shared** folder when reports are available to all users.
- Provide an ID that identifies the report as your custom report — for example, start with your company name or abbreviation.
- When copying and modifying an OOTB report, provide a new ID and use the JRXML file of the OOTB report to upload the copy.
- Follow Jaspersoft syntax rules. Avoid spaces and special characters in the JRXML file name. Use **CamelCase** notation.

### Design the Report


- Limit the number of input controls. Only include controls that are relevant for the report.
- Always try to categorize data when you have input controls with high cardinality (such as resources or investments). Use **cascading input controls** when possible.
- Create resources in the repository (such as input controls and images) so that you can reuse them across multiple reports. Take advantage of resources that are already created to avoid redundancy.
- Create a **report template** that contains headers, styles, company logos, page footer, and other definitions before starting a project. Templates save time and help reports have a consistent look and feel.
- Keep a backup copy of the JRXML files that you create or modify. Store these copies in a source control tool.

### Develop the Report


- Do not develop reports in Jaspersoft Studio using domains as data sources. SQL is the preferred language.
- Limit the number of **subdatasets (subqueries)** to a recommended maximum of **10**.
- Limit the number of **subreports** called by the main report to a recommended maximum of **10**.
- Use the **"Print When Expression"** option when possible to avoid unnecessary calls to subreports and subqueries.
- Use **frames** to group elements, especially when you have several fields in the report layout. Avoid hiding elements using rectangles or other elements. Frames can be invisible and keep fields aligned when exporting.
- Always use the **"Text Field"** element, even for static text — it provides more flexibility and allows for internationalization.
- Always define the **"Pattern"** property for "Text Field" elements that return values of type other than text or date.
- Avoid overlapping fields. Fields that overlap do not display when the report is exported.
- Use the `"repo:/<PATH_TO_THE_IMAGE>/<IMAGE_ID>"` syntax to reference images inside the report. Example: `repo:/ca_ppm/resources/images/stoplightRed`
- When working with images, use one image element associated to an IF-THEN-ELSE expression to display different images, rather than multiple image elements.
- Use **Groovy** as the language for the report (set in **Properties**, **Report** tab in the Outline view). Groovy allows use of built-in functions and simpler expressions.
- Use the following built-in parameters in your report queries:

| Parameter | Description |
|---|---|
| `ppmUserUITheme` | UI Theme selected as default in Classic PPM |
| `ppmUser` | User name of the logged-in Classic PPM user |
| `ppmUserLanguage` | Language of the logged-in user |
| `ppmDBName` | Database name for Microsoft SQL Server |
| `ppmDBSchema` | Classic PPM database schema |
| `ppmDBVendor` | Classic PPM database vendor (`oracle`, `mssql`) |
| `dwhDBSchema` | Data Warehouse database schema |
| `dwhDBVendor` | Data Warehouse database vendor |
| `dwhDBLink` | Classic PPM Database Link as defined in CSA |

### Publish the Report


- You do not need to publish a report every time you edit it. After creating the report unit, you can upload the JRXML file from Jaspersoft Studio instead of republishing.
- Avoid publishing reports with subreports from Jaspersoft Studio. When modifying reports that include subreports, download them to your local server and upload the updated JRXML file. This applies to both the main report and subreports.
- Compile the report in Jaspersoft Studio to validate it before uploading. Click the **Compile Report** icon in the upper right corner of the Design area.
- When you publish a report, the **Select Resources to Publish** window appears. Select **Ignore** from the menu (instead of **Overwrite**) for all resources in the window that already exist in the repository.

### Run the Report


You can run the report under the **Home** menu by selecting **Advanced Reporting** or **Reports and Jobs**. To run reports directly from Classic PPM under **Home**, **Reports and Jobs**, complete these steps after developing the reports:

1. Create report filters as lookups under **Administration**, **Data Administration**, **Lookups**.
2. Create report definitions under **Administration**, **Data Administration**, **Reports and Jobs**.

---

## Related

- [[_MOC Advanced Reporting]]

%%Source: p3245-3255%%
