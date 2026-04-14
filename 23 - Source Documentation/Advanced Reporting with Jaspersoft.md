# Advanced Reporting with Jaspersoft

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[11 - Reporting/_MOC Reporting|Reporting]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[11 - Reporting/Report Designer/Creating Your First Report]]
- [[18 - Advanced Reporting/Getting Started Jaspersoft]]
- [[11 - Reporting/Working with Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Investment Reports]]
- [[11 - Reporting/Report Designer/Drill Down Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Portfolio Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/PMO Admin Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Financial Reports]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: New! Getting Started with Jaspersoft 9.0 (#new-getting-started-with-jaspersoft-90)
- H3: Additional Resources (#additional-resources)
- H3: What's New in Jaspersoft Version 9.0 (#whats-new-in-jaspersoft-version-90)
- H2: Getting Started with Advanced Reporting (#getting-started-with-advanced-reporting)
- H2: Advanced Reporting Components (#advanced-reporting-components)
- H3: Clarity Data Warehouse (#clarity-data-warehouse)
- H3: Ad Hoc Views and Reports (#ad-hoc-views-and-reports)
- H2: Create an Ad Hoc View and Report (#create-an-ad-hoc-view-and-report)
- H2: Run or Schedule an Advanced Report (#run-or-schedule-an-advanced-report)
- H2: Task Data in the Data Warehouse (#task-data-in-the-data-warehouse)
- H2: Roadmap Data in the Data Warehouse (#roadmap-data-in-the-data-warehouse)
- H2: Resource Team Data in the Data Warehouse (#resource-team-data-in-the-data-warehouse)
- H2: Advanced Reporting Domains (#advanced-reporting-domains)
- H3: Domain Terminology (#domain-terminology)
- H3: Common Characteristics of Advanced Reporting Domains (#common-characteristics-of-advanced-reporting-domains)
- H3: Investment Management Domain (#investment-management-domain)
- H3: Application Management Domain (#application-management-domain)
- H3: Idea Management Domain (#idea-management-domain)
- H3: Project Management Domain (#project-management-domain)
- H3: Resource Management Domain (#resource-management-domain)
- H3: Time Management Domain (#time-management-domain)
- H3: Financial Management Domain (#financial-management-domain)
- H3: Custom Master Objects Domain (#custom-master-objects-domain)
- H3: Data Warehouse Database Schema (#data-warehouse-database-schema)
- H2: Recommended Jaspersoft Training (#recommended-jaspersoft-training)
- H2: Ad Hoc Views and Custom Report Development (#ad-hoc-views-and-custom-report-development)
- H3: Best Practices for Ad Hoc Views (#best-practices-for-ad-hoc-views)
- H3: Show the View SQL Query Button (#show-the-view-sql-query-button)
- H3: Migrate Custom Domains (#migrate-custom-domains)
- H3: Best Practices for Custom Report Development (#best-practices-for-custom-report-development)
- H2: Create and Publish Jaspersoft Studio Reports (#create-and-publish-jaspersoft-studio-reports)
- H3: Create an Advanced Reporting Developer User (#create-an-advanced-reporting-developer-user)
- H3: Set Up the JasperReports Server Connection (#set-up-the-jasperreports-server-connection)
- H3: Create a Simple Report (#create-a-simple-report)
- H3: Video: Create a Report in Jaspersoft Studio (#video-create-a-report-in-jaspersoft-studio)
- H3: Create a Report Unit (#create-a-report-unit)
- H3: Create a Parent Report with Child Subreports (#create-a-parent-report-with-child-subreports)
- H2: Install Jaspersoft Studio Professional and CA JDBC Adapter (#install-jaspersoft-studio-professional-and-ca-jdbc-adapter)
- H2: Export, Import, or Migrate Advanced Reporting Content (#export-import-or-migrate-advanced-reporting-content)
- H2: Jaspersoft Commands for Classic PPM Administrators (On-Premise Only) (#jaspersoft-commands-for-classic-ppm-administrators-on-premise-only)
- H2: PMO Accelerator Advanced Reporting Content (#pmo-accelerator-advanced-reporting-content)
- H2: Advanced Reporting Roles and Permissions (#advanced-reporting-roles-and-permissions)
- H2: Project Management Reports (#project-management-reports)
- H2: Investment Management Reports (#investment-management-reports)

Learn about Clarity Advanced Reporting with Jaspersoft, reporting best practices, and the Jaspersoft Community.

Advanced Reporting with Jaspersoft allows you to create ad hoc views of Clarity data. You can save the information as a report, display a dashboard, or share it using different formats.

You configure each ad hoc view and its corresponding report by selecting the data that you want to include. You can run a report immediately or you can set up a recurring schedule. In either case, you control the output method and delivery format.

**Contents:**
- New! Getting Started with Jaspersoft 9.0
- Getting Started with Advanced Reporting
- Advanced Reporting Components
- Create an Ad Hoc View and Report
- Run or Schedule an Advanced Report
- Task Data in the Data Warehouse
- Roadmap Data in the Data Warehouse
- Resource Team Data in the Data Warehouse
- Advanced Reporting Domains
- Data Warehouse Database Schema

## New! Getting Started with Jaspersoft 9.0

Clarity 16.2.1 and higher releases now support Jaspersoft 9.0 and also Jaspersoft 8.1.1.
> [!ATTENTION]
> When you plan to install Jaspersoft 9.0, some of the key things you need to remember are:
> - You need to be on Clarity 16.2.1 (or later) and Jaspersoft 8.1.1 to upgrade to Jaspersoft 9.0.
> - Jaspersoft 9.0 includes an installation keystore. Create a backup of the installation keystore (`<user.home.dir>/.jrsks` & `<user.home.dir>/.jrsksp`) to ensure you can connect to the Jaspersoft database in case of any issues. You will not be able to access your data if you don't have a copy of the keystore files. If you are using a Windows server, the keystores are available under the `C:\users\<user directory>` directory.
> - The superuser password is encrypted with installer key stores, so if you forget your credentials, you will not be able to retrieve them.
> - Jaspersoft Advanced Reporting feature is available in English, Simplified Chinese, and the six core languages and locales that are listed for Clarity. To learn more, see Hardware and Software Specifications.
> - Jaspersoft 9.0 supports TCPS for the Oracle 19c database.
> [!NOTE]
> Upgrade to Jaspersoft 9.0 on Oracle TCPS/SSL is not supported. However, you can install a fresh instance of Jaspersoft 9.0 on Oracle TCPS and move the content from Jaspersoft 8.1.1 to the 9.0 version using Clarity's admin export and import commands.
> You can use the following commands to export and import content.
> Sample admin command to export:
> ```
> ./admin jaspersoft export -fromURL <Jaspersoft 8.1.1 Server URL> -fromUserName superuser -fromPassword <Superuser Password> orgName <Org Name> -fileName <Export_Filename>.zip
> ```
> Sample admin command to import:
> ```
> ./admin jaspersoft import -toURL <Jaspersoft 9.0 Server URL> -toUserName superuser -toPassword <Superuser Password> orgName <Org Name> -fileName <Export_Filename>.zip
> ```

Additional notes for Jaspersoft 9.0:
- Jaspersoft 9.0 supports Microsoft SQL Server 2019.
- Jaspersoft 9.0 supports Adopt Open JDK 17.0.12+7 and Tomcat 9.0.89.
- Jaspersoft 9.0 requires you to install Google Chrome or Chromium 124 or higher on the server where you plan to install Jaspersoft.
- When you export content from Jaspersoft 9.0, use the **Legacy Key** option to ensure you can import content on all existing Jaspersoft servers.
- Jaspersoft 9.0 will not work on Internet Explorer. You can use the relevant versions of Chrome, Firefox, and Edge.

### Additional Resources

Available from TIBCO:
- Jaspersoft 9.0 Documentation
- Jaspersoft Community Articles, Tutorials, and Videos
- Jaspersoft 9.0 Release Notes

### What's New in Jaspersoft Version 9.0

For more information on the new features in Jaspersoft Version 9.0, see Jaspersoft 9.0 Release Notes.

> [!TIP]
> If you are implementing a custom REST API integration with Jaspersoft, and you encounter an issue, remove the `|` character and use `%7c` instead. Jaspersoft JRS-11883 notes that some application servers, such as Tomcat, are ending their support of the pipe character (`|`), which delimits a username and organization when they are passed as a URL to the server. The application server returns an illegal character error for pipe characters. TIBCO examples and documentation now use `%7c` instead of pipe.
> For example, instead of:
> ```
> homeFlow&j_username=jasperadmin|organization_1
> ```
> we now use:
> ```
> homeFlow&j_username=jasperadmin%7Corganization_1
> ```

## Getting Started with Advanced Reporting

**Prerequisites:** To manage ad hoc views, reports, and dashboards, your administrator sets up Advanced Reporting for you and grants you access rights.
- If you do not see the **Advanced Reporting** menu link in Classic PPM when you click **Home, Personal**, contact your administrator.
- To work with the Advanced Reporting content, install it in your target environment.
- Verify that your administrator has installed the PMO Accelerator.

**Resources:** As a report designer or administrator, review the following resources:
- **Jaspersoft Community:** Tutorials and tips.
- **Oracle and SQL Database Performance Whitepapers:** To establish performance benchmarks and validate system stability, Broadcom conducted a series of tests for Clarity. The data warehouse is optimized for reporting and analytics and is on a separate schema from the Classic PPM database. The data warehouse is populated at scheduled intervals by an ETL job. To help you plan for an upgrade, you can view examples of expected growth rates and loading times which are based on existing database sizes. See the Reference section of the English edition of the documentation.
- **Advanced Reporting and Database Schema Index**
- To help you plan for a new installation or upgrade with Advanced Reporting, refer to the deployment architecture examples in the sizing guide for Clarity, see Install Jaspersoft 8.1.1.

> [!WARNING]
> The Load Data Warehouse job determines the freshness of the data in the data warehouse. Running this job with great frequency impacts performance; not running it often enough yields stale data. We recommend that you run this job only once every day during non-peak hours. For more information, see Jobs Reference in the English edition of the documentation.

## Advanced Reporting Components

The following image shows the Advanced Reporting components:

> [!INFO]
> Figure 36: Image showing the Advanced Reporting components
### Clarity Data Warehouse

The Clarity data warehouse is the main data source for the advanced reporting features. The data warehouse schema is optimized for reporting. The schema includes the investment, resource, portfolio, timesheet, and project data.

The data warehouse is populated at scheduled intervals by jobs that load the relevant data from the application database. The data warehouse can be extended to include custom objects and attributes.

The application provides a set of domains that contains the most common data. When you create an ad hoc view, you select from a list of the available domains. A domain provides a business view of the data warehouse. A domain limits your access to data based on your security permissions. A user who can access specific projects and resources in Clarity can access the same projects and resources in the advanced reporting domains.

If you add custom objects or attributes to the product, these custom objects and attributes can also be included in the domains. To view the domains and reports, you must have the PMO Accelerator add-in installed with the required Jaspersoft Advanced Reporting content.

You create ad hoc views in the form of charts, tables, and crosstabs that let you analyze data from the domains. You can also use ad hoc views to generate and share reports.

### Ad Hoc Views and Reports

Advanced Reporting lets you create ad hoc views of your project and portfolio data. You can use the ad hoc views in the following ways:
- Create a dashboard of multiple related views.
- Save the views as reports.
- Export or email the reports as PDF, Word, Excel, PowerPoint, and other file formats.
- Display multiple related reports on a dashboard.
You customize each ad hoc view and report by selecting the domains and fields that you want to include.
The integrated JasperReports Server manages ad hoc views, reports, and dashboards. When you select the Advanced Reporting option from the Home menu, the Advanced Reporting page appears. This page, and all pages that are opened from this page, are based on the Jaspersoft application.
> [!NOTE]
> For information about using Jaspersoft, access the Jaspersoft Community website and click the **Documentation** link. On the Documentation page, select the version of Jaspersoft that corresponds to your Clarity release. Then click the link for the JasperReports Server User Guide. Refer to the Classic PPM Release Notes for the Jaspersoft version that corresponds to your release.

## Create an Ad Hoc View and Report

Use Advanced Reporting to create ad hoc views and reports by selecting fields from the domains. You can then run the reports or you can place the reports on a dashboard to monitor status and progress.
**Follow these steps:**

1. Open **Home**, and from **Personal**, click **Advanced Reporting**. The Advanced Reporting page opens. You see links to the different Advanced Reporting functions (in blocks). The functions that you can see and access depend on your user role. The following blocks require explanation:
- **Ad Hoc Views:** Create a limited view of your data that you can use to prepare reports or access a list of existing ad hoc views.
- **Reports:** Create and format reports from existing ad hoc views or access a list of existing reports.
2. Click **Ad Hoc Views, Create**, select a domain, and click **Choose Data**.

> [!NOTE]
> Click the **Ad Hoc Views, View List** link to see the existing ad hoc views that you can access.

3. Select the domain fields that you want to have available for your ad hoc view. Click **Table**, **Chart**, or **Crosstab** (depending on the format that you want).

> [!WARNING]
> We do not recommend that you select all fields in the domain. For best performance, use the following guidelines to create smaller views:
> - For the Investment Management, Project Management, Application Management, Idea Management, and Resource Management domains, select one metric set for each view. The metric sets are Summary, Weekly, Calendar, and Fiscal.
> - For the Financial Management domain, select one set for each view. The sets are Financial Transaction and Plan Data.
> - For the Time Management domain, select one set for each view. The sets are Missing Time and Timesheets.

4. Create an ad hoc view by selecting fields and measures and adding (dragging) them to the new ad hoc view.
5. Save the ad hoc view. You can save the ad hoc view to the **Shared** folder. If you save to the Shared folder, other users can access your ad hoc view.
6. (Optional) Create a report when you save the ad hoc view. Reports allow you to use scheduling and more formatting options.

> [!NOTE]
> The Advanced Reporting features use the JasperReports Server. For information about using Jaspersoft with views, reports, and dashboards, access the Jaspersoft Community website and click the **Documentation** link.
> On the Documentation page, select the version of Jaspersoft that corresponds to your Classic PPM release. Then click the link for the JasperReports Server User Guide. See the Classic PPM Release Notes for the Jaspersoft version that corresponds to your Classic PPM release.

## Run or Schedule an Advanced Report

Advanced Reporting lets you run, schedule, and manage scheduled reports that are based on Classic PPM data. You can schedule reports with different output options (for example, PDF or Excel) and email reports to people that you want to notify.
To run and schedule advanced reports, verify that you meet the following prerequisites. If you do not, contact your administrator.
- You can see the **Advanced Reporting** link in the Personal menu under **Home**.
- A list of reports exists.

You can run a report immediately or you can schedule it to run at a specific interval and frequency. You can also manage your scheduled reports by monitoring the list of scheduled reports, changing schedules, or deleting schedules.

> [!WARNING]
> Your report output cannot exceed 500 pages. This limit applies to each output format that you select. As a best practice, we recommend that you filter the report to limit the output data. Do not use reports to extract large volumes of data.

**Follow these steps:**

1. Open **Home**, and from **Personal**, click **Advanced Reporting**. The Advanced Reporting page opens. You see links to the different Advanced Reporting functions (in blocks). The functions that you can see and access depend on your user role. The following block requires explanation:
- **Reports:** Create and format reports from existing ad hoc views or access a list of existing reports.
2. On the **Reports** block, click **View List**. A list of reports to which you have permissions appears.
3. Run a report immediately by selecting and opening a report and entering values for the **Options** on the left. Click **Apply**.

> [!NOTE]
> The **Options** act as filters to focus the report on only the data that you want to see.

4. To schedule a report to run as a job, right-click the report name and select **Schedule**. Click **Create Schedule**. The **New Schedule** page opens with the **Schedule** tab selected.
   a. Select a schedule definition using a **Simple** or **Calendar** recurrence schedule.
   b. Select parameters, which are similar to the report filter options.
   c. Select output options (for example, PDF, Excel, and PowerPoint) and distribution methods. You can also specify a locale. When the scheduled report runs, the report is presented in the specified language.
- **Formats:** Select a maximum of two options (for example, Powerpoint and Word, or PDF and Excel).
- **Output to Repository:** Browse to select the Shared folder (or a subfolder) or your own user folder (under Users). If you save to the Shared folder, other users can access your report. Only you can access the report if you save to your own user folder.
- Output to Repository Examples: `/shared/reports` or `/users/username`
- We do not recommend that you save your report to the Clarity folder or any of its subfolders. These folders are overwritten during a system upgrade, and your reports are then lost.
   d. Select the notifications that you want to send when the scheduler runs. The notifications can include the report as an email attachment.
- **Email Notification To, CC, or BCC:** Enter email addresses, up to a maximum of 100 characters. If you are sending the report to a large number of users, separate email addresses with commas. You can also enter email aliases, which we recommend.
5. Click **Save**.
6. Manage your scheduled reports by changing or deleting the scheduled jobs.

## Task Data in the Data Warehouse

Beginning with Release 15.4, the data warehouse began including fields for tasks, phases, and milestones as seen on the new project task board. The stored data includes field names, task board values, columns, colors, task card position and color, and to-do items.

You can develop reports on the following new data warehouse task board tables:
- **DWH_INV_BOARD:** This table stores each task board as a row. The table includes a relationship back to the linked parent object.
- **DWH_INV_BOARD_LANE:** This table stores every lane (column) on the board. Attributes include the lane level, position (sequence), and orientation.
- **DWH_INV_BOARD_CARD:** This table stores basic data about every task card on the board. Attributes include the card color and position (sequence). The Task Owner field also appears in its own column in the `dwh_inv_task` table.

## Roadmap Data in the Data Warehouse

Release 15.4 also added thirteen (13) new tables in the data warehouse to support the new Roadmapping features:
- DWH_CMN_SCENARIO
- DWH_LKP_ROADMAP_STATUS
- DWH_CMN_SCENARIO_FACTS
- DWH_LKP_ROADMAP_TYPE
- DWH_RDM_ROADMAP
- DWH_LKP_RDM_MUST_HAVE
- DWH_RDM_ROADMAP_LN
- DWH_RDM_PICKLIST
- DWH_RDM_PICKLIST_LN
- DWH_RDM_ROADMAP_ITEM
- DWH_RDM_ROADMAP_ITEM_LN
- DWH_RDM_ITEM_POSITION
- DWH_RDM_ITEM_SUMMARY_FACTS

The following calculated attributes for the Roadmap Item object are also included:
- Remaining Capacity = Capacity - Actual Capacity
- Remaining Capital Cost = Capital Cost - Actual Capital Cost
- Remaining Operating Cost = Operating Cost - Actual Operating Cost
- Total Actual Cost = Actual Capital Cost + Actual Operating Cost
- Total Cost = Capital Cost + Operating Cost
- Total Remaining Cost = Total Cost - Total Actual Cost

## Resource Team Data in the Data Warehouse

Release 15.5.1 added two (2) more tables in the data warehouse for the Team object:
DWH_INV_TEAM_DEF DWH_INV_TEAM_MEMBER


The following section summarizes these changes:

DWH_CMN_SCENARIO:
- One row for every scenario

DWH_CMN_SCENARIO_FACTS:
- Contains summary level facts - One row for every fact type for a
scenario target or goal

DWH_RDM_ROADMAP:
- One row for every roadmap

DWH_RDM_ROADMAP_LN
- One row for each roadmap and
language

DWH_RDM_PICKLIST
- One row for each value in a roadmap
picklist

DWH_RDM_PICKLIST_LN
- One row for each roadmap picklist value
and language

DWH_RDM_ROADMAP_ITEM
- One row for each roadmap item

DWH_RDM_ROADMAP_ITEM_LN
- One row for each roadmap item and
language

DWH_RDM_ITEM_SUMMARY_FACTS
- Contains summary level facts - One row for each roadmap item

DWH_RDM_ITEM_POSITION

DWH_LKP_ROADMAP_STATUS
- For roadmap items, stores each picklist, - Lookup table for roadmap status the selected picklist value, and position - One row for each roadmap status and
language

DWH_LKP_ROADMAP_TYPE
- Lookup table for roadmap types - One row for each roadmap type and
language


DWH_CMN_SCENARIO:
- One row for every scenario

DWH_CMN_SCENARIO_FACTS:
- Contains summary level facts - One row for every fact type for a
scenario target or goal

DWH_RDM_ROADMAP:
- One row for every roadmap

DWH_LKP_RDM_MUST_HAVE:
- Lookup table for roadmap must haves - One row for each roadmap must-have
and language

Two (2) New Tables in the Data Warehouse for the Team object in 15.5.1:

In 15.5.1, we added 2 new columns to the DWH_RES_RESOURCE dimension table :
- TEAM_DEF_KEY - IS_TEAM
This table contains one row for each resource, including a team resource.

## Advanced Reporting Domains

Classic PPM provides a set of domains that contains the most frequently used product data. A domain provides a business view of the Clarity data warehouse. You select a domain from the ad hoc viewer when you build your ad hoc views. A domain limits your access to data based on your security permissions.

The domain fields are organized into sets and items. The sets act like folders that you can expand to view the items. Some examples of domain sets include the General and the OBS sets. For descriptions of the domain fields, see the Advanced Reporting and Database Schema Index page.
Custom attributes are listed and are viewable if they are enabled for the data warehouse. Each domain has its own custom attributes.
> [!WARNING]
> We do not recommend that you change the domains that are provided with the product. To modify a product-provided domain, copy the domain, place it in another location in the repository, and make your changes in the copied version. However, the dynamic domain updates that Clarity performs are not reflected in your copied versions. We recommend that you request enhancements to the product domains, instead of making these changes yourself.
- Domain Terminology
- Common Characteristics of Advanced Reporting Domains
- Investment Management Domain
- Application Management Domain
- Idea Management Domain
- Project Management Domain
- Resource Management Domain
- Time Management Domain
- Financial Management Domain
- Custom Master Objects Domain
- Data Warehouse Database Schema

### Domain Terminology

The following terms are commonly used with the domain descriptions:
Sets and Items. The domains are organized into sets and items. The sets act like folders that you can expand and view the items. Some examples of domain sets include the General and the OBS sets. Items include fields and measures.
Fields. Items that display qualitative information, such as name or location, are fields.
Measures. Items that display numeric values or aggregate values are measures. Measures are the quantitative values of a record, such as an amount. In domains, all items that are based on numeric fields are designated as measures. The items in Measures are numeric fields or items for which you can do mathematical calculations.
Ad Hoc Viewer and Editor. The Ad Hoc viewer and editor is the interactive designer for viewing, creating, and editing an ad hoc view. With an ad hoc view, you can explore and analyze data. Ad hoc views can also be used to create content for reports.

### Common Characteristics of Advanced Reporting Domains

The following major characteristics apply to all Advanced Reporting domains. See the descriptions of the individual domains for information that is domain-specific.
- Object Domains. Domains are provided for the most frequently used objects, including the new product investment objects (NPIOs), such as Ideas and Applications. In each domain, you can see only the product data that you have permission to view. When viewing a domain in the ad hoc editor, the Fields section of the left panel lists all field properties (such as Investment names, OBS, text fields, and dates). The Measures section of the left panel lists all numeric amounts that are related to the fields (such as hours and costs). The items in Measures are fields for which you can do mathematical calculations.
- Internal IDs. Each domain contains an Internal ID set. You use internal IDs for building dashboards. Internal IDs are primarily used as filters by report developers and dashboard developers. These IDs, which are not used in ad hoc

views, are the same across all domains. You can map these IDs to input controls and you can use them for filtering on dashboards. Internal IDs are related to objects, not domains. If Investment data exists in multiple domains, the same Investment key is available in each domain.
> [!NOTE]
> Dashboards are not provided with Classic PPM. See the Jaspersoft documentation for information about how to build dashboards.
- **Custom Folder.** The Custom folder appears in a domain if you have custom fields or objects (related to the domain objects) that are data warehouse enabled. To verify that your custom fields and objects are data warehouse enabled, see your administrator. The Custom folders also include add-in fields. The Custom folder always appears as the first set under each object (after the list of object fields). If you have multiple objects in a domain, the Custom folder appears under each object folder. For example, the Team object includes its own custom team fields in a Custom folder under the Team folder. If you add custom fields to an object (or if you install an add-in with custom fields) and the fields are data warehouse enabled, custom sets are created in the corresponding domains. The custom fields are included in the Custom sets under the related object.

> [!NOTE]
> If a custom object or subobject has a lookup attribute, the key for it is included in the Internal IDs folder under the Custom folder.
- **Period Type:** When you select period types, select the same period type for both Fields (top of the left panel on Advanced Reporting page) and Measures (bottom of left panel). Selecting different period types for Fields and Measures can produce unexpected results.
- **Domain Sets:** Domains are organized into sets and field items. The sets act like folders that you can expand to view the field items. Some examples of sets are the General and the OBS sets.
- **Domain Security:** You have access to specific domains based on your role. When you open Advanced Reporting, you see only the domains that you can access. However, you may not have access to all data in the domains that you can access. When you view a domain that you can access, you see all object sets and fields in that domain. However, the data that appears for the objects and fields depends on your access rights.
- **Date Fields:** Most of the dates in the domains are business dates that are displayed without timestamps and time zone conversions. The exceptions are the system dates, which display date and time and have time zone conversions applied to them. The system dates include Created Date, Last Updated Date, and Warehouse Updated Date.
- **PMO Accelerator Fields:** The PMO Accelerator fields are dynamically included in the domains (similar to custom attributes). However, the internal IDs of the PMO Accelerator fields are renamed when they are included in the data warehouse and the domains. The renaming of the internal IDs occurs only for PMO Accelerator fields. All other add-in fields have the same behavior as the custom attributes.

### Investment Management Domain

The Investment Management domain includes information about investments (for all investment types) and their corresponding teams. This domain-only includes information that is common to all investment types. For example, no information about assignments is included.
The Investment Management domain includes financial summary data for Investments, but not detailed financial planning or actual transaction data. The detailed financial planning and actual transaction data is included in the Financial Management domain.
Custom fields that you add to the Investment object in Classic PPM appear in the Investment Management domain (in the Custom set under the Investment set). If you add custom fields to the Team object in Classic PPM, those fields appear in the Investment Management domain, Custom set under the Team set.
Custom subobjects that you add to the Investment object appear under the Custom set in their own subobject folder (set), for example, "Country". The name of the subobject set is the same as the subobject name.

The Investment Management domain contains two main types of data: investment-level financial data (summarized for the total Investment and divided into periods) and team data (at the team level and by calendar periods). The domain has general information, financial information, OBS information, and team information for all team members in an investment.
The Investment Management domain does not have detailed Cost Plan or actual transaction detail data. See the Financial Management domain for that information.
Data security. Data security is determined by investment-level access rights. If you have rights to view an investment in Classic PPM, then you see all data that is related to that investment in this domain. You can also view all subobject data that is enabled for the data warehouse.
Do not mix object types. When selecting from Fields and Measures. If you select Investment Name in the Fields area, select a total under the Investment Totals in the Measures area. Selecting a total from a different Measures object category (for example, Team Totals) could produce unexpected results. For Investment data, use investment fields and investment measures. To use Team data when creating an ad hoc view, select a team member field from the Team folder under Fields. Use a team amount from the Team folder under Measures. In general, use Investment data (Fields) with Investment metrics (Measures) and use Team data (Fields) with Team metrics (Measures).
Use Team data when you want specific data about a team and its members (for example, resources or allocation start dates).
Do not mix calendar types. When you look at periodic data (for example, monthly data), do not mix calendar types when making ad hoc view selections. For example, use calendar period measures (Measures section, left panel) for calendar period fields (Fields section, left panel). Use fiscal period measures (Measures section) for fiscal period fields (Fields section). Also, do not mix the period types (week, calendar, fiscal). Otherwise, you get unexpected results because the data is repeated for each period type.
Portfolios. The Investment Management domain includes portfolios (contents and properties). You can use the portfolios to filter and group the investment data by portfolio when building ad hoc views.
For example, you created a portfolio in Classic PPM with 100 investments. In the Investment Management domain, you add Investment Name to the ad-hoc view (drag Investment Name from Fields to Columns in the New Ad Hoc View). Then drag Portfolio Name (from Fields) to the Filters, select the portfolio (that you created with 100 investments) from the dropdown, and click Apply. The ad hoc view now only shows the 100 investments in that selected portfolio. In this way, you are using Portfolios as a filtering method of reporting on your investment data.
You can also group your data by portfolio in the Investment Management domain. For example, you want to see the Total EAC Hours for the investments in each portfolio. You add (drag) Investment Name from the Fields area to Columns in the New Ad Hoc View. Then you drag Total EAC Hours from the Investment Totals in the Measures area to Columns in the New Ad Hoc View. Then you add Portfolio Name (from Fields) to Groups in the New Ad Hoc View. Your data is shown organized by portfolio in the format you selected (table, chart, pie diagram).
In the Investment Management domain, you are working with actual up-to-date investment data. You are not using the portfolio investment snapshot of the data that you use during portfolio planning in Classic PPM. Portfolio planning uses a copy of the actual investment data. Therefore, the Investment Management domain data does not match the data in the Classic PPM portfolios that you use for portfolio planning. For more information about portfolio planning, see Portfolio Management
Custom Fields. If you have custom fields that are related to investments, these fields appear in a Custom folder in the Investment Management domain. This domain can have multiple Custom folders. For example, Team custom fields appear in the Team Custom folder.

### Application Management Domain

The Application Management domain contains information about the investments, teams, and financials that are related to applications. Items that apply only to applications are included in this domain.

The Application Management domain contains two main types of data: investment-level financial data (summarized for the total Investment and divided into periods) and team data (at the team level and by calendar periods). The domain has general information, financial information, OBS information, and team information for all team members in an investment.
The Application Management domain does not have detailed Cost Plan or actual transaction detail data. See the Financial Management domain for that information.
Data security. Data security is determined by application-level access rights. If you have rights to view an application in Classic PPM, then you see all data that is related to that application in this domain, including all subobject data that is enabled for the data warehouse.
Do not mix object types. when selecting from Fields and Measures. If you select Investment Name in the Fields area, select a total under the Investment Totals in the Measures area. Selecting a total from a different Measures object category (for example, Team Totals) could produce unexpected results. For Investment data, use investment fields and investment measures. To use Team data when creating an ad hoc view, select a team member field from the Team folder under Fields. Use a team amount from the Team folder under Measures. In general, use Investment data (Fields) with Investment metrics (Measures) and use Team data (Fields) with Team metrics (Measures).
Use Team data when you want specific data about a team and its members (for example, resources or allocation start dates). However, for Baseline hours, do not use Team data. You can find total Baseline hours summed under Investment data.
Do not mix calendar types. When you look at periodic data (for example, monthly data), do not mix calendar types when making ad hoc view selections. For example, use calendar period measures (Measures section) for calendar period fields (Fields area) and use fiscal period measures (Measures area) for fiscal period fields (Fields section). Also, do not mix the period types (week, calendar, fiscal). Otherwise, you get unexpected results because the data is repeated for each period type.
Portfolios. The Application Management domain includes portfolios (contents and properties). You can use the portfolios to filter and group the investment data by portfolio when building ad hoc views.
In the Application Management domain, you are working with your actual up-to-date investment data (not a copy of the data as you use when doing portfolio planning in Classic PPM ).
For example, you created a portfolio in Classic PPM with 100 investments. In the Application Management domain, you add Investment Name to the ad-hoc view (drag Investment Name from Fields to Columns in the New Ad Hoc View). Then drag Portfolio Name (from Fields) to the Filters, select the portfolio (that you created with 100 investments) from the dropdown, and click Apply. The ad hoc view now only shows the 100 investments in that selected portfolio. In this way, you are using Portfolios as a filtering method of reporting on your investment data.
You can also group your data by portfolio in the Application Management domain. For example, you want to see the Total EAC Hours for the investments in each portfolio. You add (drag) Investment Name from the Fields area to Columns in the New Ad Hoc View. Then you drag Total EAC Hours from the Investment Totals in the Measures area to Columns in the New Ad Hoc View. Then you add Portfolio Name (from Fields) to Groups in the New Ad Hoc View. Your data is shown organized by portfolio in the format you selected (table, chart, pie diagram).
In the Application Management domain, you are working with actual up-to-date investment data. You are not using a copy of the data as you use during portfolio planning in Classic PPM. Therefore, the Application Management domain data does not match the data in the Classic PPM portfolios that you use for portfolio planning. Portfolio planning uses a copy of the actual investment data.
Custom Fields. If you have custom fields that are related to applications, these fields appear in a Custom folder in the Application Management domain. This domain can have multiple Custom folders. For example, Team custom fields appear in the Team Custom folder.

### Idea Management Domain

The Idea Management domain contains information about the investments, teams, and financials that are related to Ideas. Fields that apply only to ideas are included in this domain.

The Idea Management domain contains two main types of data: investment-level financial data (summarized for the total Investment and divided into periods) and team data (at the team level and by calendar periods). The domain has general information, financial information, OBS information, and team information for all team members in an investment.
The Idea Management domain does not have detailed Cost Plan or actual transaction detail data. See the Financial Management domain for that information.
Data security. Data security is determined by idea-level access rights. If you have rights to view an idea in Classic PPM, then you see all data that is related to that idea in this domain, including all subobject data that is enabled for the data warehouse.
Do not mix object types. when selecting from Fields and Measures. If you select Investment Name in the Fields area, select a total under the Investment Totals in the Measures area. Selecting a total from a different Measures object category (for example, Team Totals) could produce unexpected results. For Investment data, use investment fields and investment measures. To use Team data when creating an ad hoc view, select a team member field from the Team folder under Fields. Use a team amount from the Team folder under Measures. In general, use Investment data (Fields) with Investment metrics (Measures) and use Team data (Fields) with Team metrics (Measures).
Use Team data when you want specific data about a team and its members (for example, resources or allocation start dates). However, for Baseline hours, do not use Team data. You can find total Baseline hours summed under Investment data.
Do not mix calendar types. When you look at periodic data (for example, monthly data), do not mix calendar types when making ad hoc view selections. For example, use calendar period measures (Measures area) for calendar period fields (Fields area) and use fiscal period measures (Measures section) for fiscal period fields (Fields section). Also, do not mix the period types (week, calendar, fiscal). Otherwise, you get unexpected results because the data is repeated for each period type.
Portfolios. The Idea Management domain includes portfolios (contents and properties). You can use the portfolios to filter and group the investment data by portfolio when building ad hoc views.
For example, you created a portfolio in Clarity with 100 investments. In the Idea Management domain, you add Investment Name to the ad-hoc view (drag Investment Name from Fields to Columns in the New Ad Hoc View). Then drag Portfolio Name (from Fields) to the Filters, select the portfolio (that you created with 100 investments) from the drop-down, and click Apply. The ad hoc view now only shows the 100 investments in that selected portfolio. In this way, you are using Portfolios as a filtering method of reporting on your investment data.
You can also group your data by portfolio in the Idea Management domain. For example, you want to see the Total EAC Hours for the investments in each portfolio. You add (drag) Investment Name from the Fields area to Columns in the New Ad Hoc View. Then you drag Total EAC Hours from the Investment Totals in the Measures area to Columns in the New Ad Hoc View. Then you add Portfolio Name (from Fields) to Groups in the New Ad Hoc View. Your data is shown organized by portfolio in the format you selected (table, chart, pie diagram).
In the Idea Management domain, you are working with actual up-to-date investment data. You are not using a copy of the data as you use during portfolio planning in Clarity. Therefore, the Idea Management domain data does not match the data in the Clarity portfolios that you use for portfolio planning. Portfolio planning uses a copy of the actual investment data.
Custom Fields. If you have custom fields that are related to ideas, these fields appear in a Custom folder in the Idea Management domain. This domain can have multiple Custom folders. For example, Team custom fields appear in the Team Custom folder.

### Project Management Domain

The Project Management domain contains information about projects and programs that are related to the Project object. This information includes investments, teams, financials, issues, risks, and change requests. Change requests include metrics (under Measures), but issues and risks do not include metrics. This domain also contains tasks and assignments,

with summary-level data (totals) for both objects. The financial attributes in this domain are project summary level and not cost plan level. You can find detailed financial information at the cost plan level in the Financial Management domain.
Custom attributes and subobjects for the investment and project objects are included in this domain. They appear combined in a Custom set. No distinction exists between the attributes and subobjects that belong to the investment and those that belong to the project.
This domain includes properties that apply specifically to the Project object. These properties appear in the General set.
The Portfolio properties are used for filtering projects by portfolios. You can see the projects that are associated with each portfolio. This domain does not contain aggregated data.
The Project Management domain contains two main types of data: investment-level financial data (summarized for the total Investment and divided into periods) and team data (at the team level and by calendar periods). The domain has general information, financial information, OBS information, and team information for all team members in an investment.
The Project Management domain does not have detailed Cost Plan or actual transaction detail data. See the Financial Management domain for that information.
Data security. Data security is determined by project-level access rights. If you have rights to view a project in Classic PPM, then you see all data that is related to that project in this domain, including all subobject data that is enabled for the data warehouse.
Do not mix object types. When selecting from Fields and Measures. If you select Investment Name in the Fields area, select a total under the Investment Totals in the Measures area. Selecting a total from a different Measures object category (for example, Team Totals) could produce unexpected results. For Investment data, use investment fields and investment measures. To use Team data when creating an ad hoc view, select a team member field from the Team folder under Fields and use a team amount from the Team folder under Measures. In general, use Investment data (Fields) with Investment metrics (Measures) and use Team data (Fields) with Team metrics (Measures).
Use Team data when you want specific data about a team and its members (for example, resources or allocation start dates). However, for Baseline hours, do not use Team data. You can find total Baseline hours summed under Investment data.
NOTE If you want to add a task to an ad hoc view and you want to view the data by resource and task, add the Assignment Resource to the view. If you add the Team Resource (instead of the Assignment Resource), the resulting data is inaccurate. If you want to view team data (without task data) by resource, add the Team Resource to the view.
Do not mix calendar types. When you look at periodic data (for example, monthly data), do not mix calendar types when making ad hoc view selections. For example, use calendar period measures (Measures area) for calendar period fields (Fields area) and use fiscal period measures (Measures area) for fiscal period fields (Fields area). Also, do not mix the period types (week, calendar, fiscal). Otherwise, you get unexpected results because the data is repeated for each period type.
Portfolios. The Project Management domain includes portfolios (contents and properties). You can use the portfolios to filter and group the investment data by portfolio when building ad hoc views.
In the Project Management domain, you are working with your actual up-to-date investment data (not a copy of the data as you use when doing portfolio planning in Classic PPM ).
For example, you created a portfolio in Classic PPM with 100 investments. In the Project Management domain, you add Investment Name to the ad-hoc view (drag Investment Name from Fields to Columns in the New Ad Hoc View). Then drag Portfolio Name (from Fields) to the Filters, select the portfolio (that you created with 100 investments) from the drop-down, and click Apply. The ad hoc view now only shows the 100 investments in that selected portfolio. In this way, you are using Portfolios as a filtering method of reporting on your investment data.
You can also group your data by portfolio in the Project Management domain. For example, you want to see the Total EAC Hours for the investments in each portfolio. You add (drag) Investment Name from the Fields area to Columns in the

New Ad Hoc View. Then you drag Total EAC Hours from the Investment Totals in the Measures area to Columns in the New Ad Hoc View. Then you add Portfolio Name (from Fields) to Groups in the New Ad Hoc View. Your data is shown organized by portfolio in the format you selected (table, chart, pie diagram). In the Project Management domain, you are working with actual up-to-date investment data. You are not using a copy of the data as you use during portfolio planning in Classic PPM. Therefore, the Project Management domain data does not match the data in the Classic PPM portfolios that you use for portfolio planning. Portfolio planning uses a copy of the actual investment data. Custom Fields. If you have custom fields that are related to projects, these fields appear in a Custom folder in the Project Management domain. This domain can have multiple Custom folders. For example, Team custom fields appear in the Team Custom folder.

### Resource Management Domain

The Resource Management domain includes information about investments, resources, teams and assignments, and task fields from the resource perspective.

**Data security.** Data security is determined by resource-level access rights. If you have rights to view a resource in Classic PPM, then you see all data that is related to that resource in this domain. You can also see all subobject data that is enabled for the data warehouse.

**Do not mix calendar types.** When you look at periodic data (for example, monthly data), do not mix calendar types when making ad hoc view selections. For example, use calendar period measures (Measures area) for calendar period fields (Fields area) and use fiscal period measures (Measures area) for fiscal period fields (Fields area). Also, do not mix the period types (week, calendar, fiscal). Otherwise, you get unexpected results because the data is repeated for each period type.

### Time Management Domain

The Time Management domain contains information about created timesheets and missing timesheets. Use this domain if you are managing timesheets. This domain provides timesheet details at the date worked level. All created timesheets for all statuses are included in this domain. Incidents are also included in this domain.

> [!NOTE]
> This domain does not contain aggregated hours for a project or investment. For aggregated data, use the Investment Management domain. If you do not use the integrated application timesheets for timekeeping, you can see the fields in this domain, but the fields have no data.

**Data security.** Data security is determined by timesheet-level access rights. If you have rights to view a timesheet in Classic PPM, then you see all data that are related to that timesheet in this domain, including all subobject data that is enabled for the data warehouse.

**Missing Timesheets.** This domain includes missing timesheets. You can view a specific resource by period and you can see the timesheets that were not created for that resource. The domain does not include missing time entries on a created timesheet. If you forgot to create an entire timesheet for a given time period, that missing timesheet appears under Missing Time (in the Fields area). However, if you forgot to complete some of the time entries on an existing timesheet, those time entries do not appear under Missing Time. To see all time entries (entered hours and missing entries) in existing timesheets, look under the Timesheets set. Any missing time entry from an existing timesheet appears there.

### Financial Management Domain

The Financial Management domain lets financial managers view financial data. This domain includes OBS and Investment data. The domain includes only fiscal time periods (not calendar or weekly time periods). All metrics (under the Measures area of the Ad Hoc Viewer/Editor) are fiscal.
This domain contains detailed financial planning data, including cost plans, cost plan details, benefit plans, benefit plan details, and WIP transaction details. The domain includes the data at a plan level (in the Financial Plans set under Investments in the Fields area of the Ad Hoc View/Editor). You can view the data for an actual plan of record or an actual Benefits plan.
This domain does not include invoicing or chargeback data.
NOTE Some of this financial planning data is also available in the Investment Management domain as a subset of the investment data.
If you do not use Financial Management, you can see the fields in this domain, but the fields have no data.
The Financial Management domain includes detailed financial planning data under Financial Plans. The domain also includes break-ups, such as charge codes. WIP transaction data is included at the transaction level. A row is included for every transaction (at the detail level not at the summary level).
Data security. Data security is determined by financial plan-level access rights. If you have rights to view a financial plan in Classic PPM, then you see all data that are related to that financial plan in this domain. You can also see all subobject data that is enabled for the data warehouse.
Do not mix metric types. When selecting from Fields and Measures. If you select a total under the Investment Totals in the Measures area, do not also select a Transaction Measure under the WIP Transactions in the Measures area. This combination could produce unexpected results. When selecting a Measure in the Financial Management domain, select either Investment Totals or WIP Transactions, but not both simultaneously.
You cannot look at the investment-level summary financial data using detailed financial planning metrics. At the detail level, you have a row of data for each financial plan. All the financial plans for a project are available. To view only the POR plan data, for example, use the filter. Otherwise, you get duplicated or triplicated numbers.
Data that is shown under Investment Totals (Measures area) is investment-level data. Data that is shown under Financial Plans or Fiscal Periods (Fields area) is detail-level data. Data that is shown under WIP Transactions (Fields and Measures areas) is transaction-level data. Data that is not shown under Fiscal periods is total (summary/investment level) data.
Do not mix calendar types. When you look at periodic data (for example, monthly data), do not mix calendar types when making selections. For example, use calendar period measures (Measures area) for calendar period fields (Fields area) and use fiscal period measures (Measures area) for fiscal period fields (Fields area). Also, do not mix the period types (week, calendar, fiscal). Otherwise, you get unexpected results, because the data is repeated for each period type.
Project Plans. As you include financial plans in your Ad Hoc View, you notice that there are multiple plans for each investment project. You do not only see the plan of record. You see all plans for the investment. To view only the plan of record, use a filter.
Custom Fields. If you have custom fields that are related to financial planning, these fields appear in a Custom folder in the Financial Management domain. This domain can have multiple Custom folders. For example, Team custom fields appear in the Team Custom folder.

### Custom Master Objects Domain

The Custom Master Objects domain contains information about custom master objects and their child objects. This domain also includes the Language subobject and fields. Your administrator makes these objects data warehouseenabled, and they are then included in the Custom Master Objects domain.

> [!NOTE]
> Custom Master Objects do not have parent objects and so are not related to any other objects in Classic PPM.

This domain contains custom master objects and their children. These objects are not related to any other object in Classic PPM. Each custom object has a corresponding set in this domain. The custom object name is also the set name.

The objects in this domain are not related to each other. View one custom master object at a time. When you select the Custom Master Object domain for viewing in the Ad Hoc Viewer/Editor, select one of the custom master objects to view. You cannot view data for multiple custom master objects simultaneously, because the custom master objects do not have relationships with each other.

**Data security.** Data security is determined by custom master object-level access rights. If you have rights to view a custom master object in Classic PPM, then you see all data that is related to that custom master object in this domain. You can also see all subobject data that is enabled for the data warehouse.

**Do not mix calendar types.** When you look at periodic data (for example, monthly data), do not mix calendar types when making selections. For example, use calendar period measures (Measures area) for calendar period fields (Fields area) and use fiscal period measures (Measures area) for fiscal period fields (Fields area). Also, do not mix the period types (week, calendar, fiscal). Otherwise, you get unexpected results because the data is repeated for each period type.

### Data Warehouse Database Schema

Schema information for Classic PPM and the data warehouse is available on the Advanced Reporting and Database Schema Index page. You can download and view the following information:
- Database schema information for the application and data warehouse
- An ERD diagram for the data warehouse
- Advanced Reporting domain field descriptions
- PMO Accelerator add-in information
- Jaspersoft Studio Professional Client and Report Development Guide

## Recommended Jaspersoft Training

Jaspersoft training is available from Broadcom and TIBCO Software, Inc. Take these recommended training courses and be successful with your Jaspersoft implementation.
**Jaspersoft Training - TIBCO Software, Inc.**
- Recommended Training for Project Managers, Business Analysts, and Portfolio Managers
- Recommended Training for Administrators and General Technical Users
- Recommended Training for Report Developers

Recommended Training for Project Managers, Business Analysts, and Portfolio Managers The online training and resources in the following table are recommended for end users such as Project Managers, Business Analysts, and Portfolio Managers:

Training Material Ad Hoc Views Tutorial

Video

Type

Reports Tutorial

Video

Dashboards Tutorial

Video

Description

Duration

This video helps you learn how to create and configure Ad Hoc views using the Ad Hoc Editor. This video is also available from the Ad Hoc Views tile when you navigate to Advanced Reporting (Advanced Reporting - Ad Hoc Create access right is required to see the tile).

8 minutes

This video helps you learn how to create and format reports from existing Ad Hoc views. This video is also available from the Reports tile when you navigate to Advanced Reporting (Advanced Reporting - Report Create access right is required to see the tile).

9 minutes

This video helps

9 minutes

you learn how to

create dashboards

and dashlets. This video

is also available from

the Dashboards tile

when you navigate to

Advanced Reporting

(Advanced Reporting
- Dashboard Create

access right is required to

see the tile).

Where to find? Ad Hoc Views Tutorial
Ad Hoc Reports Tutorial
Dashboards Tutorial


Recommended Training for Administrators and General Technical Users All of the training material listed above and the online training and resources in the following table are recommended for administrators such as the Classic PPM administrators and general technical users:

Training Material Domains Tutorial

Video

Type

JasperReports Server How-to Videos Playlist

Video

JasperReports Server User Guide

User Guide

Description

Duration

This video helps you learn how to create domains. This video is also available from the Domains tile when you navigate to Advanced Reporting (Advanced Reporting - Domain Create access right is required to see the tile).

8 minutes

A playlist of Howto Videos for the JasperReports Server that includes videos about home page and menus, Ad Hoc table view, Ad Hoc crosstab View, Ad Hoc chart view, report scheduler, and more.

The JasperReports Server User Guide provides detailed information about the following subjects:
- Getting Started
and Library pages, searching the repository.
- Running reports and
the report viewer.
- Working with the Ad
Hoc Editor.
- Adding reports
directly to the repository.
- Creating domains and
advanced domain features.

Where to find? Domains Tutorial
How-to Videos Playlist
JasperReports Server User Guide


Training Material
JasperReports Server Administration Guide

Type Administration Guide

Description
The JasperReports Server Administration Guide provides detailed information about the following subjects:
- Overview of the
repository, users and roles, security
- User and role
management
- Repository
administration and other resources in the repository
- Import and export.

Duration

Where to find? JasperReports Server Administration Guide


Recommended Training for Report Developers All of the training materials listed above and the online training and resources in the following table are recommended for report developers:

Training Material

Type

Getting Started Tutorials Tutorial

Tutorials

Tutorial

Description
- What
is Jaspersoft Studio? - An introduction to the Eclipse-based report designer tool.
- Getting started
with Jaspersoft Studio - The minimum requirements to install Jaspersoft Studio Professional.
- Designing a Report -
How to create a new report.
- Report Structure -
A description of the basic structure of a report including bands and specific report properties.
- Drag & Drop - How
the drag-and-drop works in the report designer.
- Exporting reports -
How to compile and export reports.
- Measure Units - How
to configure measure units, including pixels, centimeters, millimeters, and inches.
- The Expression
Editor - What is the Expression Editor and how it works.
- Using report variables
- Simple tutorial about using report variables.
- Using report
parameters - Simple tutorial about using report parameters.
- Using report groups -
Simple tutorial about using report groups.
- Element attributes
and styles - An overview of how attributes and styles are assigned to report elements.
- The styles template -
Simple tutorial about creating and using a style template inside

Duration

Where to find? Jaspersoft Community
Jaspersoft Community


Training Material
Jaspersoft Studio User Guide

Type User Guide

Description
The Jaspersoft Studio User Guide provides detailed information about the following subjects:
- Jaspersoft Studio
user interface, hardware and software requirements, report structure, and export options.
- Basic concepts
about JRXML and expressions using Java and Groovy.
- Basic element
properties, formatting and positioning options, graphic and text elements.
- How to work with
fields, parameters, and variables, templates, queries, and charts.

Duration

Where to find?
Jaspersoft Studio User Guide

## Ad Hoc Views and Custom Report Development
- Best Practices for Ad Hoc Views
- Show the View SQL Query Button
- Migrate Custom Domains
- Best Practices for Custom Report Development
This page provides best practices for you to observe when working with your Advanced Reporting views, domains, and custom reports developed in Jaspersoft Studio.

TIP
Running and scheduling ad hoc views and ad hoc reports in Classic PPM under Reports and Jobs is not supported. Only Jaspersoft Studio reports are supported for running and scheduling from Classic PPM.

### Best Practices for Ad Hoc Views

To reduce performance issues and generate the desired results for your advanced reports, follow these best practices when using the Ad Hoc Viewer and the domains:
- Do Not Select All Domain Fields Into Ad Hoc Views: The Classic PPM domains contain hundreds of fields and measures so you can build ad hoc views that meet your business requirements. When building ad hoc views, try not to select all the fields in the domain into your view. Too many fields can cause your view to perform slower. Only select the fields into you view that you plan to use. Later, if needed, you can add more fields to your view by clicking the icon to the right of the domain name and then clicking Select Fields.
- The following image shows how to add more fields to your ad hoc view.
- Limit the Size of Crosstab Ad Hoc Views: The Crosstab ad hoc views are more complex with aggregations and calculation functions, so they generally perform slower than table or chart views. When building and using crosstab views, limit the size of your views whenever possible to improve performance.
- Create Ad Hoc Views in No Data Mode: You can create ad hoc views using three different data modes, full data, sample data, and no data. Create ad hoc views using either No Data or Sample Data mode because the performance is much better. Later, once the view is complete, you can switch to Full Data mode. The following image shows how to select the correct data mode when creating an ad hoc view.
- Select the Correct Metrics: The Classic PPM domains, except for the Custom Master Objects domain, contain three different period types. The domains also contain a set of metrics for use with each period type. If the wrong metrics are selected, you do not get the expected results. For example, when looking at weekly data, use fields in the Weekly Periods set (such as Week Start Date) combined with measures from the Weekly Periods set. Do not use fields from the Calendar Periods or Fiscal Periods sets with measures from the Weekly Periods set. Also, the Summary Totals metric set is typically not for use with period types because it is summarized data and not periodic data. The following image shows how to use weekly measures with weekly period sets.

The following field sets correspond to the measure sets described for each period type. Try not to cross the period types: Weekly Period Type: Use Weekly Periods field set with the Weekly Periods measures set. Calendar Period Type: Use Calendar Periods field set with the Calendar Periods measures set. Fiscal Period Type: Use Fiscal Periods field set with the Fiscal Periods measures set. Summary Totals: The summary totals are metrics that are not aggregated by any period type, they are summary data and not periodic data. - Each object fields set within a domain is for use with a corresponding object measures set: For example, when building ad hoc views against the Project Management domain that contain monthly team data, select metrics from the Team set under the Calendar Periods measures set. The measures under the Calendar Periods Team set are aggregated and grouped at the team level. The following image shows how to select metrics from the Team set under Measures when working with team data in the Project Management domain.

The following object measure sets are aggregated and grouped in the Project Management domain as described. The other Classic PPM domains follow a similar pattern. Project metric sets. Use the project metrics aggregated and summarized at the project level with project fields. Team metric sets. Use the team metrics aggregated and summarized at the team level with team fields. Task metric sets. Use the task metrics aggregated and summarized at the task level and with task fields. Assignment metric sets. Use the assignment metrics aggregated and summarized at the assignment level with assignment fields. - Use OBS Data Correctly: When selecting and displaying OBS information in ad hoc views, verify that you filter for a specific OBS type. Otherwise, when resources and investments are attached to different OBS which they frequently are, you get duplicate results. - Use Portfolio Data Correctly: Some of the domains contain a portfolio set that includes fields that are frequently used for filtering and grouping of investments by portfolios. The portfolio fields are included primarily for filtering and for

grouping investment data by portfolio. Currently the domains do not include portfolio rollups or other complex portfolio structures like scenarios. - Use Financial Data Correctly in the Financial Management Domain: The Financial Management Domain contains financial planning and financial transactions data. This data is stored at a different level of granularity and does not have a direct relationship with other data. For example, financial plans are stored at a fiscal period level and transactions are stored at a transaction level. To avoid unexpected results, do not use the financial planning fields and metric sets with the financial transactions fields and metric sets in the same ad hoc view. Use the transactions sets in this domain to look at actual transactions at a detail level. The actual cost, actual unit, actual revenue, and realized benefit metrics are aggregated at a fiscal period level within the Financial Plan metric sets. Use these metrics when viewing financial planning data with actuals. To make it easier to develop reports against the data warehouse, financial planning property data has been combined in the same row with the financial planning detail data. This is important to understand when building ad hoc views using the Financial Plan sets in the Financial Management domain. When you select financial planning property data without selecting financial planning detail data, you get multiple occurrences of the financial planning property data because it displays for every occurrence of the financial planning detail data. Displaying the financial planning property data without any corresponding detail data is not a common scenario so you might not encounter this issue. - Use Time Data Correctly in the Time Management Domain: The Time Management domain contains timesheet data and missing time data. When using this domain to create ad hoc views, select either timesheet data or missing time data. Try not to combine the two data types in the same view as you can get unexpected results. - Reconcile Dates in Classic PPM and Ad Hoc Views for Time Zone Differences: The Advanced Reporting domains display dates without the time element, except for system dates. In Classic PPM, most users set the display of dates as date, without a time element, and the display of system dates as date and time. Some examples of system dates are Created Date and Last Updated Date. The following dates are not considered system dates; instead, we refer to these dates as business dates: - Investment start and finish dates - Task start and finish dates - Assignment start and finish dates As long as you display system dates in Classic PPM as date and time (with a time element), the system dates match the dates in the Advanced Reporting domains. As long as you display other dates such as business dates in Classic PPM as date (without a time element), they match the dates in the Advanced Reporting domains. Custom attributes that you create as dates in Classic PPM are not considered system dates and display as date (without a time element) in Advanced Reporting. These dates never adjust according to time zone. - When you execute a report immediately, there is no time zone adjustment for the business dates. Time zone adjustment is made only for the system dates. The adjustment is made based on the time zone defined for you in Classic PPM under Home, Account Settings. - When you schedule a report and select a time zone to create the report schedule, no time zone adjustment occurs for the business dates. Time zone adjustment is made only for the system dates. The adjustment is made based on the time zone that you select in Advanced Reporting, Output Options when creating a schedule.
NOTE
By default, the date fields that you select in the ad hoc views appear as date (without a time element) even for system dates. When creating an ad hoc view, you can modify the date format for the system dates to include a time element as shown in the following image:
- Export Ad Hoc Views and Reports: The maximum number of report pages that you can generate is 500 pages for both scheduled and unscheduled reports. The limit applies to all reports and ad-hoc views that are exported using paginated options such as Excel (Paginated) and XLSX (Paginated). The limit is not applicable to the ad-hoc views exported using non-paginated export options such as Excel and XLSX. The following image shows the export options that have a limit to the maximum number of pages that are exported.

### Show the View SQL Query Button

In Jaspersoft 6.4.2 and 7.1, the **View SQL Query** button does not appear for report users (even with ROLE_ADMINISTER) by default.

**Follow these steps:**

1. Log in to the Jaspersoft report server as a superuser.
2. In the main menu, click **Manage, Server Settings, Adhoc Settings**.
3. Select the **Enable View Query in Ad Hoc Editor** check box and click **Change**.

Users with ROLE_ADMINISTER can now view the **View SQL Query** button in ad hoc views.
> [!TIP]
> **Best Practices for Domains and Reports**
> - Do not make any changes to the default domains, permissions, or reports that come with the application and advanced reporting solution. Any changes you make can cause problems or be impacted by the upgrade process. Instead, always make a copy of a domain or report in a test environment and then make your changes outside of the Classic PPM production folder structure.
> - Avoid creating domains over 2.0 MB. If you exceed this size limit, you can get errors when editing the domain in the domain designer. Jaspersoft recommends that you include fewer than 50 tables or views in a domain. If you exceed this limit, you can get errors when building the domain.
> - Do not build your Jaspersoft Studio reports based on domains. Jaspersoft recommends that you do not use domain-based Studio reports due to known performance and functional issues. Instead, develop your Jaspersoft Studio reports using direct SQL statements. If you build domain-based Studio reports, the report behavior can be different in the Studio client than when you publish it on the server.
> - Do not migrate the original default system domains from one environment to another because custom objects and attributes added to the domain might exist in one environment but not in another. Run the Load Data Warehouse job in each environment so the domains automatically include the correct custom objects and attributes for that particular environment. Custom domains are not automatically updated to include custom objects and attributes so you must manually maintain these domains.

### Migrate Custom Domains

Migrate custom domains from one environment to another by performing the following steps:

1. Extract the domain file from the environment that you are migrating from.
2. Edit the domain using the **Domain Designer** and select **Export Design**.
3. Save the domain XML file locally. The following image shows the Export Design option in the domain designer:
4. Edit the domain XML file using any XML editing tool for any differences in custom objects and attributes that might exist in the original environment but not in the migrated environment. Also, change the schema name to the new environment in the XML file. Create or update the domain in the new environment.
5. In the new environment, Upload the domain XML file produced in Step 2 while creating or editing the custom domain. The following image shows how to upload the domain XML file.

> [!NOTE]
> Verify that the schema file name that you upload does not contain any spaces or special characters.

6. Click **Submit**. If there are any differences between the environments you missed during Step 4, an error appears showing the details. Fix your domain XML file and then try again.

### Best Practices for Custom Report Development

Use Jaspersoft Studio to build and manage your own custom reports in Advanced Reporting. As a prerequisite, set up the CA JDBC Adapter to connect to the Classic PPM transactional database or data warehouse schemas without a VPN connection. The adapter lets you run and test report queries faster and more efficiently.

The following guidelines for developing reports using Jaspersoft Studio represent the most efficient course of action. We highly recommend that you follow these best practices.

#### Start the Report
- Install and use the Jaspersoft Studio version that corresponds to the Classic PPM version that you have in your environment. Avoid installing more than one version of Jaspersoft Studio on the same computer. If you are using multiple Broadcom products (for example, Classic PPM and ITSM) that support different versions of the Jaspersoft server, we recommend that you install the latest version of Jaspersoft Studio. Next, configure the Jaspersoft Studio connection to work with the corresponding version of JasperReports library. If you are using a functionality that is only available in the latest version, you can encounter issues when trying the functionality on an earlier version.
- Use existing stock reports as examples when you start developing your custom reports. The PMO Accelerator Advanced Reporting content includes more than 50 reports that you can use as a starting point.
- Do not modify the reports under the Classic PPM folder. Make a copy of the OOTB report and modify the copy. - Organize the folder structure for your custom content similar to the Classic PPM folder organization, considering how
you want to manage security. You can allow access at the folder level or at the report level. - Create your reports outside the Classic PPM folder, not under it.
Create a folder under the organization for your own reporting content or use the Shared folder when the reports are available to all users. - Provide an ID that identifies the report as your custom report when you create a report. For example, start with your company name or abbreviation. - When copying and modifying an OOTB report, use the same procedure that you use to create a report. Provide a new ID and use the JRXML file of the OOTB report to upload the copy. - Follow the syntax rules that are required by Jaspersoft. Avoid spaces and special characters in the JRXML file name that you use to upload the report. We recommend Camel Case notation.

#### Design the Report
- Limit the number of input controls that you include in your report. Only include input controls that are relevant for the report.
- Always try to categorize the data when you have input controls with high cardinality (values that are uncommon or unique, such as resources or investments). Use cascading input controls when possible.
- Create resources in the repository, such as input controls and images, so that you can use them for more than one report. Take advantage of the resources that are already created and avoid redundancy. For example, input controls that are used by one report should be created outside the report unit so that you can use them in other reports that you create later.
- Create a report template that contains headers, styles, company logos, page footer, and other definitions before starting a project. Report templates save time and effort and help reports have a consistent look-and-feel.
- Keep a backup copy of the JRXML files that you create or modify. Store these copies in a source control tool or any other system or collaboration tool that you use to control source code.

#### Develop the Report
- We do not recommend that you develop reports in Jaspersoft Studio using domains as data sources. This practice can have a severe impact on performance. SQL is the preferred language for developing reports in Jaspersoft Studio.
- Limit the number of subdatasets (subqueries) in your report. The recommended limit is ten subdatasets. - Limit the number of subreports that are called by the main report. The recommended limit is ten subreports. - Use the "Print When Expression" option, when possible, to avoid unnecessary calls to subreports and subqueries. - Use frames to group elements, especially when you have several fields in the report layout. Avoid hiding elements
using rectangles or other elements. Frames can be invisible and they keep fields aligned when exporting to Microsoft Word and to other export options. - Always use the "Text Field" element, even if you are defining static text. The "Text Field" element gives you more flexibility and allows for internationalization. - Always define the "Pattern" property for the "Text Field" element when it returns values of type other than text and date. - Avoid overlapping fields (for example, making the width of an element extend over the next element). Fields that are overlapping do not display when the report is exported. - Create your own images or use the images included in the PMO Accelerator Advanced Reporting content. Use the "repo:/<PATH_TO_THE_IMAGE>/<IMAGE_ID>" syntax to reference the image inside the report.

Example: repo:/ca_ppm/resources/images/stoplightRed - When working with images, we recommend that you use one image element that is associated to an IF-THEN-ELSE
expression to display different images instead of having several image elements. - Use Groovy as the language for the report. In Jaspersoft Studio, select the report name at the top of the hierarchy in
the Outline view and change it on the Properties, Report tab. When you use Groovy, you can use built-in functions and simpler expressions. You can still use Java in your expressions, if necessary. - Use the following OOTB built-in parameters in your report queries. These parameters are passed through the integration between Classic PPM and the JasperReports Server. - ppmUserUITheme. The UI Theme selected as default in Classic PPM. - ppmUser. The user name of the user who is logged in to Classic PPM. - ppmUserLanguage. The user language of the user who is logged in to Classic PPM. - ppmDBName. The database name that is used for Microsoft SQL Server. - ppmDBSchema. The Classic PPM database schema. - ppmDBVendor. The Classic PPM database vendor (oracle, mssql). - dwhDBSchema. The Data Warehouse database schema. - dwhDBVendor. The Data Warehouse database vendor. - dwhDBLink. The Classic PPM Database Link as defined in CSA.

#### Publish the Report
- You do not need to publish a report every time that you edit it. After you create the report unit, you can upload the
JRXML file from Jaspersoft Studio instead of publishing the report. - Avoid publishing reports with subreports from Jaspersoft Studio. When you modify reports that include subreports,
download the reports to your local server and upload the updated JRXML file. Follow this procedure for the main report and subreports. You can also upload a local JRXML file from the Set Up the Report page when you edit the report. However, the report server does not validate the JRXML file when you upload it. Use Jaspersoft Studio to validate the JRXML before uploading it. - Compile the report in Jaspersoft Studio to validate it before uploading. Click the Compile Report icon that is located in the upper right corner of the Design area. The following image shows the Compile Report icon.
- When you publish a report, the Select Resources to Publish window appears. Select Ignore from the menu instead of Overwrite for all resources included on this window that exist in the repository.

#### Run the Report

You can run the report under the **Home** menu by selecting **Advanced Reporting** or **Reports and Jobs**. To run reports directly from Classic PPM under **Home, Reports and Jobs**, complete the following steps after developing the reports:

1. Create report filters as lookups under **Administration, Data Administration, Lookups**. See Configure Lookups.
2. Create report definitions under **Administration, Data Administration, Reports and Jobs**. See Configure Reports and Jobs.
3. To secure the reporting data, grant the required advanced reporting access rights to the appropriate users and groups. See Advanced Reporting Access Rights.

## Create and Publish Jaspersoft Studio Reports

Use Jaspersoft Studio Professional to connect to Advanced Reporting to create, download, upload, and publish reports. You need a report developer user and a server connection to connect to Advanced Reporting. You can also create data adapters in Jaspersoft Studio to test report queries.

Complete the following procedures as prerequisites for developing reports. The article assumes that you have successfully installed Jaspersoft Studio Professional.
- Create an Advanced Reporting Developer User
- Set Up the JasperReports Server Connection
- Create a Simple Report
- Video: Create a Report in Jaspersoft Studio
- Create a Report Unit
- Create a Parent Report with Child Subreports
- Tips for Creating and Publishing Reports
- Jaspersoft Report Page Limits

### Create an Advanced Reporting Developer User

Create a report developer user who can log in to Jaspersoft Studio directly. Users that you create in Jaspersoft from Classic PPM are created with an encrypted password and are maintained by Classic PPM. You cannot use this type of user for report development in Jaspersoft Studio. You need a user that is not maintained by Classic PPM.

The report developer user has no more rights than the Advanced Reporting administrator user in Classic PPM, but can connect through Jaspersoft Studio.

**Follow these steps:**

1. Log in to Classic PPM as a user with Advanced Reporting administration rights.
2. Click **Home, Advanced Reporting**.
3. Click **Manage, Users** and then click **Add User**.
4. Enter the user name and password information (for example, `report_developer`).
5. To add the user to your organization, click **Add User to org**. The report developer user is created. Do not use this user to log in to Clarity. The following image shows the Add User dialog for creating a report developer user in Jaspersoft:

6. Click **Edit** on the right side of the properties page.
7. Locate the **ROLE_ADMINISTRATOR** role, click the right arrow to assign the permission, and click **Save**. The ROLE_ADMINISTRATOR role grants permission to modify and administer Advanced Reporting items in your organization.

> [!NOTE]
> Due to a known Jaspersoft issue, the Roles Available list might not include all roles or roles might not appear correctly. Resize the browser application window until the scroll bar appears. Once the scroll bar appears, scroll down to ROLE_ADMINISTRATOR. If you still do not see the scroll bar after resizing the window, type ROLE_ADMINISTRATOR in the search box and click the magnifier (search) icon. The known issue can also cause the roles to be listed multiple times.

### Set Up the JasperReports Server Connection

**Follow these steps:**

1. In Classic PPM, click **Administration, System Options**. Set up the Advanced Reporting Server URL and Organization ID. See Configure General System Settings.
2. In Jaspersoft Studio, in the **Repository Explorer**, right-click **Servers** and select **Create JasperReports Server Connection**.
3. Complete the following information:
- **Name:** Defines the name for the server connection (for example, Advanced Reporting Test Environment).
- **URL:** Defines the Advanced Reporting Server URL exactly as it is defined in Classic PPM.
- **Organization:** Defines the Organization ID exactly as it is defined in Classic PPM.
- **User:** Defines the report developer user name.
- **Password:** Define the report developer user password.
4. Click **Test**.
5. Click **Finish**.

> [!NOTE]
> If the connection is unsuccessful, verify that the report developer user exists and the password is correct. Also verify that the URL and Organization values are correct. For Jaspersoft 7.1, ensure the **Use SOAP Protocol Only** option is not selected. Expand **Advanced Settings** to select that option and click **Test Connection**. A 401 error is displayed if the Use SOAP Protocol Only option is checked.

### Create a Simple Report

You installed Jaspersoft Studio, created a report developer user, and configured a data adapter and a server connection. Now, you can create reports in Advanced Reporting.

**Follow these steps:**

1. In Jaspersoft Studio, select **File, New, Jasper Report**. The New Report Wizard displays the report templates page.
2. Select a template (for example, **Blank A4**) and click **Next**. The New Report Wizard displays the report file page.
3. Select a local folder to save the report and provide a file name with the `.jrxml` extension. Avoid spaces and special characters when creating the JRXML file.
4. Click **Next**. The New Report Wizard displays the data source page.
5. Select the **One Empty Record - Empty rows** data adapter for now. You can change it later.
6. Click **Next** and then click **Finish**. Jaspersoft Studio generates the report and opens it in the Design area. You can work locally designing the report, adding fields, and other elements from the palette. You can also use the DataSet and Query editor dialog in the upper-right corner of the Design area to add and test the report query. In the dialog, you can select the most appropriate data adapter and can test your report query against a database.

> [!WARNING]
> We recommend that you do not develop reports in Jaspersoft Studio using domains as a data source because it can severely impact performance. SQL is the preferred language for developing reports in Jaspersoft Studio. For more details about the DataSet and Query editor dialog and other options for developing reports in Jaspersoft Studio, see Recommended Jaspersoft Training.

### Video: Create a Report in Jaspersoft Studio

### Create a Report Unit

Create a report unit by publishing a report to Advanced Reporting using the JRXML file previously created. A report unit contains the following items:
- Main JRXML file
- Input controls and other controls
- Report resource bundles
- Data sources
- References to resources such as sub reports

> [!NOTE]
> The data source is not the same as the data adapter. The data adapter is only necessary when you are running the report in Jaspersoft Studio locally in your client system. You can associate the report to a data source from the repository when you publish it.

#### Publish a Report

**Follow these steps:**
1. In Jaspersoft Studio, open the report (JRXML file). 2. Click Publish Report to JasperReports Server in the upper-right corner of the Design area. The Report Publishing
Wizard opens. 3. Select the server and location where you want to publish the report. Avoid publishing reports under the Classic PPM
folder. 4. Select Create Report Unit if it is not already selected. 5. Complete the following information:
- Report Unit Label: Defines the report name that displays in the repository and when you search the library in Advanced Reporting.
- Report Unit Name (ID): Defines the report internal ID. Provide an ID that does not contain spaces and special characters. We also recommend that you prefix the ID with your company initials. You cannot modify the ID later.
- Report Unit Description: Optional. Defines the report description that displays in the repository and when you search the library in Advanced Reporting. Provide meaningful keywords that can be helpful when searching for reports.
6. Click Next. The Select Resources to Publish window opens. 7. Select Ignore from the drop-down instead of Overwrite for all resources included in the window. 8. Click Next. The Configure the data source window opens. 9. Select Data Source from Repository. 10. Navigate to the Clarity /Data Sources folder and select one of the following options:
- Clarity BEAN for the transactional database - Clarity DWH BEAN for the Data Warehouse Select a data source even if the following message appears: "There is a problem with selected Datasource which is not valid". The message disappears when you select the correct data source. 11. Click Finish. The report is uploaded to the server. A "Successful!" message displays if there are no errors. 12. Click OK.

#### Add Resources to the Report

Add resources such as filter options to the report you previously published. You need the **Advanced Reporting Administer** access right to complete this procedure.

**Follow these steps:**

1. In Classic PPM, click **Home, Advanced Reporting**.
2. Select **View, Repository**.
3. Navigate to the folder where the report is located.
4. In the Repository, right-click the report and select **Edit**. The **Set Up the Report** page displays.
5. Click **Controls & Resources**. Click one of the following links:
- **Add Resource** to add resources from the repository such as report bundles.
- **Add Input Control** to add input controls from the repository.
6. Click **Submit**.

You do not need to publish the report every time you edit it. Once you have created the report unit, you can simply upload the JRXML file from Jaspersoft Studio instead of publishing the report. You can also upload a local JRXML file from the Set Up the Report page when editing the report in Advanced Reporting. However, the report server does not validate the JRXML file when you upload it. Use Jaspersoft Studio to validate the JRXML before uploading it. For more details about input controls and other resources for developing reports in Jaspersoft Studio, see Recommended Jaspersoft Training.

### Create a Parent Report with Child Subreports

You can create a parent report and add child subreports to it. The Project Storyboard report is included with the Advanced Reporting content that is installed with the PMO Accelerator add-in.

#### Download the Main and Subreports JRXML

**Follow these steps:**

1. In Jaspersoft Studio, in the **Repository Explorer**, expand **Servers** and the server connection.
2. Navigate to the **Clarity /Reports/Project Management** folder and expand the **Project Storyboard** report. The resources in the report unit display.
3. Right-click **Main jrxml** and select **Download To File**. The **Save As** window opens.
4. Select a folder and provide a file name without spaces and special characters (for example, My_ProjectStoryboard.jrxml). We recommend that you prefix your report names with your company initials.
5. Click OK. Jaspersoft Studio saves the report JRXML file in your local folder and opens it in the editor.

6. In the Project Storyboard report folder, right-click the Project Storyboard Earned Value Analysis subreport and select Download To File.
7. Select a folder and keep the file name that is already provided, replacing CSK with your company initials (for example, My_PRJ_ProjectStoryboard_EVAnalysis_Subreport.jrxml).
8. Click OK. Jaspersoft Studio saves the report JRXML file in your local folder and opens it in the editor. 9. In the Project Storyboard report folder, right-click the Project Storyboard Issues subreport and select Download To
File. 10. Select a folder and keep the file name that is already provided, replacing CSK with your company initials (for example,
My_PRJ_ProjectStoryboard_Issues_Subreport.jrxml). 11. Click OK. Jaspersoft Studio saves the report JRXML file in your local folder and opens it in the editor. Now that you downloaded the source files for the main report and its sub reports, you have all the source files open in the editor and saved in your local folder. Use these copies to create your own version of the Project Storyboard report. Create Report Unit for Main Report Create a report unit to run the report from Advanced Reporting. The report unit contains the main JRXML file, references to sub reports used by the main report, input controls, report bundles, and other controls. The report unit also contains the data source that is used by the report. The data source is not the same as the data adapter. When you publish a report, you associate it to a data source from the repository. The data adapter is only necessary when you are running the report in Jaspersoft Studio locally in your client system. Follow these steps: 1. In Jaspersoft Studio, verify that you have all the report source files open in the editor and saved in your local folder. 2. Select the tab where the main report is open. 3. Select Outline and click the report name at the top level of the hierarchy. The Properties tab displays the report
properties. 4. Select Properties, Report and then change the report name by replacing CSK with your company initials. Keep the
resource bundle as CSK. The following image shows the Properties tab displaying the report properties.

5. Select Outline and expand GroupDetail Group Footer 1 until the subreport elements appear. The following image displays the GroupDetail Group Footer 1 subreport elements.
6. Click the first subreport. The subreport properties appear. 7. Navigate to the first subreport element properties and change the expression replacing CSK with your company
initials. 8. Repeat the steps to change the expression for the second subreport. 9. Save your changes locally. If, for some reason, the Save option is not available, navigate to the Source tab in the
designer area and try to save the report. If you are still unable to save the report, make a small change in the report source and click Save from the toolbar. The report is saved when the * in front of the report tab name disappears. The message Do you want to publish this report to JasperReports Server? appears. 10. Click No. 11. Click Publish Report to JasperReports Server in the upper-right corner of the Design area. The Report Publishing Wizard opens. 12. Select the server and location where you want to publish the report. Avoid publishing reports under the Classic PPM folder. The following image shows the Publish Report to JasperReports Server window.

13. Select Create Report Unit if it is not already selected. 14. Complete the following information:
- Report Unit Label: Defines the report name that displays in the repository and when you search the library in Advanced Reporting.
- Report Unit Name (ID): Defines the report internal ID. Provide an ID that does not contain spaces and special characters. We recommend that you prefix the ID with your company initials. You cannot modify the ID later.
- Report Unit Description: Optional. Defines the report description that displays in the repository and when you search the library in Advanced Reporting. Provide meaningful keywords that can be helpful when searching for reports.
15. Click Next. The Select Resources to publish window opens. 16. Select Ignore from the drop-down instead of Overwrite for all resources included on the window. 17. Click Next. The Configure the data source window opens. 18. Select Data Source from Repository. 19. Navigate to the Clarity /Data Sources folder and select CA_PPM_DWH_BEAN for the Data Warehouse. Select the
data source even if the following message appears: "There is a problem with selected Datasource which is not valid". The message disappears when you select the correct data source. The following image shows the Configure the data source window where you select a data source.

20. Click Finish. The report is uploaded to the server. A "Success!" message appears if there are no errors. 21. Click OK. The following image shows the message that appears when resources are published successfully on the
JasperReports Server.
At this point, the Project Storyboard report unit exists in Advanced Reporting. However, it does not include the subreports.

#### Add Subreports to Main Report Unit

Change the subreport names and upload them using the JRXML files that you previously downloaded.

**Follow these steps:**

1. In Jaspersoft Studio, verify that you have all the report source files open in the editor and saved in your local folder.
2. Select the tab where the first subreport is open.
3. Select **Outline** and click the report name at the top level of the hierarchy. The report properties appear.
4. Select **Properties, Report**, and change the report name by replacing CSK with your company initials. Keep the resource bundle as CSK.
5. Save your changes locally. The message **Do you want to publish this report to JasperReports Server?** appears.
6. Click **No**.
7. Repeat the steps to change the name for the second sub report.
8. In the **Repository Explorer**, expand **Servers** and the server connection.
9. Navigate to the folder where your copy of the Project Storyboard report is located (the one you published previously). The resources in the report unit appear.
10. Right-click the report unit folder and select **New**.
11. Select **JRxml**.
12. Click **Next**. The **Add Resource** wizard appears.
13. Complete the following information:
- **Name:** Defines the name of the sub report as an internal name that does not display in the repository.
- **ID:** Defines the sub report internal ID used by the main report when it calls the sub report. Provide an ID that does not contain spaces and special characters. We recommend that you prefix the ID with your company initials. You cannot modify the ID later.
- **Description:** Optional. Defines the sub report description as an internal description that does not display in the repository.
14. Click **Next**. The **Report file** window opens.
15. Select **Upload from File System** from the drop-down list.
16. Click **Finish**.
17. Repeat the steps in this procedure for the Project Storyboard Issues sub report. The report unit with the main and sub reports is now created.

> [!NOTE]
> We recommend that you do not publish reports that include sub reports from Jaspersoft Studio. To modify reports that include sub reports, download them to your local system and then upload the updated JRXML files. Follow this practice for both the main and the sub reports.

#### Add Resources to a Report

Add resources such as filter options to the reports that you previously created. For example, the Project Storyboard report uses localized input controls and hence requires the report resource bundle. You require the **Advanced Reporting Administer** right to complete the following procedure.

1. In Classic PPM, click **Home, Advanced Reporting**.
2. Select **View, Repository**.
3. Navigate to the folder where the report is located.
4. In the Repository, right-click the report and select **Edit**. The **Set Up the Report** page displays.
5. Click **Controls & Resources**.
6. Click **Add Resource** and then click the **select a resource from the Repository** option.
7. Click **Browse** and navigate to **Clarity /Resources/Localization**.
8. Scroll down until you find **Report Resource Bundle**.
9. Select **Report Resource Bundle** and click **Next**.
10. Provide a name and resource ID (for example, `CSK_Report_Resource_Bundle`).
11. Click **Next**.
12. Click **Submit**.
13. Repeat these steps to add other resources such as input controls.
TIP
- To learn more about the input controls and other resources that are used for developing reports in Jaspersoft Studio, see Recommended Jaspersoft Training.
- To learn more about the input controls used by the Project Storyboard report, see the Advanced Reporting Product Guide on Broadcom Support.

Tips for Creating and Publishing Reports
- Make sure that you keep a backup copy of the JRXML files you create or modify. Store these copies in a source control tool or any other system or collaboration tool that you use to control source code.
- Some input controls, such as Project, Investment, Resource, have dependencies on other input controls. They are cascading input controls. These input controls require that all dependencies are added to the report.
- The $R{} expression that is used in input control names is for localization purposes. Do not use the $R{} expression in your input controls unless you want them localized to other languages.
- The keyword included in the $R{} expression is available in the Report Resource Bundle and for this reason the base Report Resource Bundle should be associated to a report that includes at least one input control referencing the $R{} expression. The Report Resource Bundle is also required if the report itself contains $R{} expressions to display labels.
- The base Report Resource Bundle contains labels in English. Report Resource Bundles from other languages that Classic PPM supports are available under the Clarity /Resources/Localization folder. You can add extra report resource bundles to your report unit to support other languages.
- If a report unit is corrupted, a java.lang.Exception: Attachment not present! error appears. The error occurs more often with reports that are published from Jaspersoft Studio and contain subreports. In some versions, this message also appears after you first publish a new report. To resolve the error, follow these steps:
a. Upload the main JRXML file and the corresponding JRXML files of each subreport that is associated to the main report.
b. If this is a new report that you just published, publish the report again a second time.

Jaspersoft Report Page Limits The Classic PPM page where you generate a report determines the maximum number of pages for very large reports:

Classic PPM Release 14.2 and newer

Application Page Advanced Reporting

15.3 or newer

Reports and Jobs

NOTE More Information:

Method Run or Export (Save As) Schedule a Report Run Immediately or Schedule

Page Limit

500 1,000 1,000
- Configure General System Settings - Install Jaspersoft Studio Professional 7.1 and CA JDBC Adapter

## Install Jaspersoft Studio Professional and CA JDBC Adapter

The CA JDBC Adapter enables report developers to connect to the Classic PPM transactional or data warehouse database to run queries from Jaspersoft Studio Professional without a VPN connection. The adapter supports up to 1,000 rows that are returned in a query when developing and previewing reports.
WARNING
The CA JDBC Adapter can only be used with Jaspersoft Studio Pro for Clarity. Any other reporting or database tool is not supported to work with the CA JDBC Adapter. Verify that you have a supported version of Jaspersoft 7.8 running on your reports server. You can find the Jaspersoft version in the About link in the upper-right corner of all Clarity pages.
The CA JDBC Adapter for Jaspersoft 9.0 only supports the PostgreSQL database.
- Download and Install Jaspersoft Studio Professional - Download and Install CA JDBC Adapter for Jaspersoft Studio Professional - Create a CA JDBC Adapter Connection in Jaspersoft Studio Professional - Preview Data with the Data Adapter - Troubleshoot Errors with the Jaspersoft Studio CA JDBC Adapter
Download and Install Jaspersoft Studio Professional
You can perform the following steps to download Jaspersoft Studio.
1. As a Clarity SaaS administrator, you can download Jaspersoft Studio Professional 7.9 with CA JDBC Adapter from the FTP site.
2. If you have a valid Broadcom Support account, you can download Jaspersoft Studio Professional 7.9 with CA JDBC Adapter from our Broadcom Support downloads site.


3. Mount the downloaded ISO image to extract the two ZIP archives: - ca_jdbc_adapter_7.x.x_x.x.x.xx: This archive contains the optional CA JDBC Adapter. - TIBCOJaspersoftStudioPro-7.x.x.zip: This archive contains the Jaspersoft Studio Professional installers and license file.
4. After you extract the TIBCOJaspersoftStudioPro.zip , run the 32-bit or 64-bit Windows installer or the Mac OSX installer for Jaspersoft Studio Professional. The same license applies to all versions.
5. Launch Jaspersoft Studio Professional. 6. Click Help, License Manager. 7. Click Install new license and browse to the location of the jasperreports.license file included in the
downloaded ZIP folder. 8. Click Open to install it. The following message appears: The new license for Jaspersoft Studio Professional was
successfully installed. 9. Click OK. Configure Jaspersoft Studio to Support Bundled JDK TrustStore (Jaspersoft Studio 7.9 TCPS Only) Jaspersoft Studio 7.9.0 now supports TCPS for the Oracle 19c database. If you plan to use the Bundled JDK option, while configuring TCPS, you need to perform the following steps to use Jaspersoft Studio 7.9. These steps are critical because when the database administrators install Oracle on TCPS, they generate a private key. This key needs to be imported into Java. 1. Navigate to the Java bin folder. A sample command is given below.
cd C:\Program Files\TIBCO\Jaspersoft Studio Professional-7.9.0\features \jre.win32.win32.x86_64.feature_1.8.0.u151\jre\bin
2. Use the following command to export the certificate.
keytool.exe -exportcert -keystore <keystore path> -storepass <keystore password> -storetype <keystore type> -alias <keystore alias> -file <location to export certificate/certificate name>
A sample command is given below.

keytool.exe -exportcert -keystore <C:\truststore.p12> -storepass <Dummy#1234> -storetype <PKCS12> -alias <clrt-i65702.dummy.test.net_testroot> -file <C:\oracle78test.cer>
3. Use the following command to import the certificate into the CA Certs directory.
keytool.exe -importcert -keystore <location of cacerts> -storepass <password of cacerts keystore> -alias <keystore alias> -file <location to exported certificate/certificate name>
A sample command is given below:
keytool.exe -importcert -keystore <C:\Program Files\TIBCO\Jaspersoft Studio Professional-7.9.0\features \jre.win32.win32.x86_64.feature_1.8.0.u151\jre\lib\security\cacerts> -storepass <changeit> -alias <clrti65702.dummy.test.net_testroot> -file <C:\oracle78test.cer>
4. When prompted whether you trust this certificate, type yes and press Enter. You have now added the certificate into Java.
Download and Install CA JDBC Adapter for Jaspersoft Studio Professional
1. As an on-premise administrator with a valid Broadcom Support account, you can also download Jaspersoft Studio Professional 7.9 with CA JDBC Adapter or from our Broadcom Support downloads site. See the KB Article ID 142814 to learn how to Broadcom download products and solutions.
2. Mount the downloaded ISO image to extract the two ZIP archives: - ca_jdbc_adapter_7.x.x.x.zip or ca_jdbc_adapter_x.x.x.x.zip: This archive contains the optional CA JDBC Adapter. - TIBCOJaspersoftStudioPro-7.x.x.zip or TIBCOJaspersoftStudioPro-x.x.x.zip: This archive contains the Jaspersoft Studio Professional installers and license file.
3. Extract ca_jdbc_adapter.zip to a local folder. 4. Log in to Classic PPM as an administrator. 5. Click Administration, General Settings, System Options, Advanced Reporting and verify the following information:
- Advanced Reporting Server URL - Organization ID 6. Click Advanced Reporting, Manage, Users and verify that a report developer user exists. The report developer user must be created directly in Advanced Reporting and not as a resource in Classic PPM. If a report developer user does not exist, contact your administrator to create a user. See Create an Advanced Reporting Developer User. 7. Assign the ROLE_ADMINISTRATOR role to the report developer user in Advanced Reporting. 8. Identify your local workspace in Jaspersoft Studio Professional. Click File, Switch Workspace. The Workspace Root Path indicates the location of your workspace (for example, C:\workspace\Studio). 9. Click Cancel. Exit Jaspersoft Studio Professional if the application is running. 10. Create a drivers folder under your local workspace (you can change the name). You identified your local workspace in the previous two steps. 11. Copy the contents inside the ca_jdbc_adapter_.zip archive to the drivers folder that you created in the previous step. The following JAR files are included: - ca_jdbc_adapter_7.x.x.x.jar: This file is the CA JDBC Adapter JAR file. - jdbc\postgreSQL-42.2.6.jar: This file is the native PostgreSQL JDBC driver JAR file. 12. Open Jaspersoft Studio Professional and continue with the next procedure.
Create a CA JDBC Adapter Connection in Jaspersoft Studio Professional
Perform the following steps for each schema and environment that you reference in developing reports. If you develop reports against the Clarity database and data warehouse schemas, you must create separate adapters for each one. A report can only reference one adapter at a time.
1. In Jaspersoft Studio Professional, navigate to the Repository Explorer view and right-click Data Adapters. 2. Select Create Data Adapter to open the Data Adapter Wizard.

3. Select Database JDBC Connection from the list of Data Adapters and click Next. 4. On the Database Location tab, complete the following fields:
- Name: The name of the data adapter (for example, Clarity TXN Development, Clarity DWH Development, Clarity TXN Test, Clarity DWH Test)
- JDBC Driver: com.jaspersoft.jdbc.driver.JasperDriver This option is not available from the drop-down list. Enter the JBDC driver exactly as specified or use Copy and Paste.
- JDBC URL: Follow this format: jdbc:jaspersoft@<Clarity SERVER URL>/ reportservice;datasource=<BEAN_DATA_SOURCE_REPOSITORY_PATH>;pagesize=<PAGE_SIZE> <JASPERSOFT URL>/reportservice; Specify your Clarity server URL for the application (including a colon and the port number if applicable) followed by a forward slash and the string reportservice followed by a semi-colon. <BEAN_DATA_SOURCE_REPOSITORY_PATH> The path in the organization repository where the bean data source is located. The path is relative to the organization. <PAGE_SIZE> The number of records that the adapter fetches at one time from the server. The maximum limit is a server setting of 500. You can specify a page size value in the range of 100-500. If you specify a value greater than 500, the data adapter still fetches 500 records at a time because the server setting takes precedence. This page size setting does not control the number of rows that are returned in a query. Another setting on the server determines the maximum rows that are returned in a query (the default is 1,000 rows). The page size is a fetch mechanism to transmit records over the network and is transparent to the report developer. Clarity Bean Data Source Example: jdbc:jaspersoft@https://<jaspersoftserver>/ reportservice;datasource=/ca_ppm/data_sources/CA_PPM_BEAN;pagesize=500 Clarity Data Warehouse Bean Data Source Example: jdbc:jaspersoft@https:// <jaspersoftserver>/reportservice;datasource=/ca_ppm/data_sources/ CA_PPM_DWH_BEAN;pagesize=500
- Username: <USERNAME>|<ORGANIZATION_ID> The report developer user created in Advanced Reporting and the Organization ID available in System OptionsAdvanced Reporting. Example: report_developer|cappm1234_dev
- Password: <PASSWORD> The report developer user password in Advanced Reporting.

5. Click the Driver Classpath tab and click Add. Select the folder where you copied the JAR files and add the files to the classpath.

6. Click Test to verify the adapter configuration. A Successful message appears.
7. Click Finish to save the data adapter settings. TIP If you upgrade using the same workspace, update the drivers manually. Drivers are not automatically updated as part of an upgrade. In some tests, after upgrading to Jaspersoft 9.0 and Jaspersoft Studio 7.9, clicking the Test connection button showed Successful but in reality, it failed with a 404 error until we duplicated the connection or created a new connection. Only then did it start working as expected. This behavior was the case with the Jaspersoft Adapters as well. You can ignore this problem because it likely means the Oracle schema data warehouse user was locked. However, post-upgrade, you must create a new connection or duplicate it.

Preview Data with the Data Adapter After creating a data adapter connection, you can select it from the Dataset and Query Dialog or Preview when developing reports in Jaspersoft Studio. Follow these steps: 1. In Jaspersoft Studio, select File, New, Jasper Report. The New Report Wizard displays the report templates page. 2. Select a template (for example, Blank A4) and click Next. The New Report Wizard displays the report file page. 3. Select a local folder to save the report and provide a file name with the .jrxml extension. Avoid spaces and special
characters when creating the JRXML file. 4. Click Next. The New Report Wizard displays the data source page. 5. Select the "One Empty Record - Empty rows" data adapter for now. You can change it later. 6. Click Next and then click Finish. Jaspersoft Studio generates the report and opens it in the Design area. 7. Click the Dataset and Query editor dialog in the upper-right corner of the Design area as shown in the following image
to build and test the report query.
8. In the Dataset and Query Dialog, select the Clarity DWH Development data adapter that you created earlier. The "Getting metadata for Clarity DWH Development Please wait ..." message appears. Wait until the metadata is populated with a list of the database schema names. The database schema that you have access to is indicated as "CURRENT".

9. Expand the schema name that shows as "CURRENT" to see the available tables and views as shown in the following image. You can now create your SQL queries or build them using the drag-and-drop query builder. Refer to the Jaspersoft Studio documentation for more information about the query builder.
10. Once the query is ready, you can map the columns of the result set to fields of the report. Click Read Fields. The query executes and the metadata is read. If no errors occur, for each column that is selected, a field is added to the field names list with the proper class types.
11. Click the Data Preview tab to verify the data that the query returns the expected data.

Troubleshoot Errors with the Jaspersoft Studio CA JDBC Adapter - The CA JDBC Adapter supports SQL language. The adapter does not support PLSQL-based report development. - When working with Oracle database CLOB, NCLOB, or BLOB columns in a report query, you must modify the Class
Type for each field to java.sql.Clob , java.sql.NClob , and java.sql.Blob , respectively. The Read Fields button available on the Dataset and Query Dialog uses oracle.sql.CLOB, oracle.sql.NCLOB, and oracle.sql.BLOB class types as the default for CLOB, NCLOB, or BLOB columns. After creating fields using the Read Fields button, replace these class types with their corresponding java.sql.x class type. - When working with Oracle database SYSTIMESTAMP columns in a report query, you must modify the Class Type for each field to java.sql.Timestamp . The Read Fields button available on the Dataset and Query Dialog uses oracle.sql.TIMESTAMPTZ class type as the default for SYSTIMESTAMP columns. After creating fields using the Read Fields button, replace this class type with the java.sql.Timestamp class type. Error Messages: java.sql.SQLException: User is Unauthorized/Forbidden. Please check login credentials. This message appears when the user name, Organization ID, or password that is provided to the data adapter are incorrect or the user name does not exist. Resolution: Make sure the user name, Organization ID, and password are correct. Verify that the user name exists in Advanced Reporting for the environment you are trying to connect. Getting metadata for <data adapter> Please wait... The Dataset and Query Dialog is searching for the metadata corresponding to the data adapter currently associated to the report. For some reason, the metadata information cannot be retrieved (for example, server not running, network connection issues ). The dialog becomes unresponsive. Resolution: Contact your system administrator to verify if the system is not running or if there is a network issue. If you have another server, you can work around the issue by selecting another data adapter. Click OK to close the Dataset and Query Dialog, verifying that the desired data adapter is selected. Reopen the Dataset and Query Dialog. The dialog points to the data adapter option previously selected.

Operation cancelled. Please note that aborting the operation could cause possible resource/memory leaks, especially when working database connections. If you experience problems, please try restarting Jaspersoft Studio.
This message appears when the Dataset and Query Dialog is still searching for, or retrieving, the metadata information corresponding to the data adapter currently associated to the report and you select another data adapter from the pull down list. The operation is canceled and often the Dataset and Query Dialog does not refresh the metadata information from the latest data adapter selection.
Resolution: Click OK to close the Dataset and Query Dialog, verifying that the desired data adapter is selected. Reopen the Dataset and Query Dialog. The dialog points to the data adapter option previously selected. Restart Jaspersoft Studio if you experience degradation in its performance.
java.sql.SQLRecoverableException: IO Error: The Network Adapter could not establish the connection.
This message appears if for some reason the Advanced Reporting server you are trying to connect is not available.
Resolution: Contact your system administrator to verify if the system is not running or if there is a network issue.
java.lang.NullPointerException in the Data Preview tab of the Dataset and Query Dialog
This message appears in the following situations:
- An invalid class type is defined to one or more fields - The report query is referencing parameters that are using Groovy built-in functions and the report language is not
defined as Groovy.
Resolution: Verify that all fields have valid class types associated to them. If you are using Groovy built-in functions, verify that the report language is Groovy. In some cases, you may need to close and reopen Jaspersoft Studio.

## Export, Import, or Migrate Advanced Reporting Content

You can move your Jaspersoft reporting content from a development environment to a test or production environment. You can move content from one Jaspersoft reports server to a newer version after an upgrade. You can also move content from more than one tenant across servers.
- Prerequisites - Export Content - Import Content - (On-Premise only) Export Jaspersoft Advanced Reporting Content Using the Command Line - (On-Premise only) Import Jaspersoft Advanced Reporting Content Using the Command Line - (On-Premise only) Migrate Jaspersoft Advanced Reporting Content - (On-Premise only) Synchronize the Context with Jaspersoft - View Database Schema Differences - Update Domain Schema - Update Domain Schema in Jaspersoft 9.0
Prerequisites
- Access Rights: This functionality is available only to users with the Advanced Reporting - Administer access right. Migration does not require access to the system where the server is installed.
- Review Dependencies: Jaspersoft Studio reports and views often have dependencies on other resources. These dependencies can include data sources, domains, input controls, queries, and language bundles. For example, a report might depend on images, input data types, and a data source. An exported report includes all dependencies even if they are stored in folders that were not selected during the export. The migration of content with dependencies

also creates the same folder structure on the target server. The imported content replaces any existing resources on the target server. Export Content You can export individual resources or an entire folder of the repository. 1. Log in to the Classic PPM source environment. 2. Click Home, Personal, Advanced Reporting. 3. Select View, Repository. You can export resources such as reports, ad hoc views, from a single folder. You can also export from the Library page. 4. To select more than one resource, press the Ctrl key. When viewing the repository, you can select an entire folder in the left panel. 5. Right-click the selected folder or resources and select Export. The Export Resources dialog appears:
6. (Optional) You can change the default name of the zip file. 7. The export provides the following options for your release of Jaspersoft:
Include report jobs: When checked, the export includes scheduled report jobs with any reports in your repository selection. Include repository permissions: When checked, the export includes any explicit permissions on all items in your repository selection. Clear this check box if you want the exported items to inherit the permissions of the target repository. Include dependencies: This option appears in Jaspersoft 6.4.2. When checked, the export includes any dependencies. Clear this check box to export resources and folders without full paths or dependencies, so that the resulting catalog can be imported by organization admins. In Jaspersoft 6.2.1, the export.zip contains all the dependencies. 8. Click Export. The server generates the zip file and your browser prompts you to save the file. Depending on the size of your repository and the selected options, it might take several minutes to generate the file.

WARNING ! Resources are exported with their dependencies, even if the dependencies are not included in your selection. The export can be large and might take a long time to generate and then download. During this time, the export operation can affect server performance. For this reason we do not recommend exporting large amounts of data.
Import Content After you export, you can import the exported zip file. 1. Log in to the Classic PPM target environment. 2. Click Home, Personal, Advanced Reporting. 3. Select Manage, Organizations. 4. In the left panel, right-click the target organization and select Import.
The Import dialog appears:
5. Click Browse to select the zip file to import. The dialog allows only the zip archive format. You can import only files created by the export.
6. The import provides the following options: - Update: When checked, the Update option imports only resources that are new to the current organization (different URI). - Skip user updates: This option allows you to keep the current definition of any users that also exist in the imported organization, in case the exported zip file includes users. - Include themes: When checked, the Include themes option imports any themes that exist in the imported organization.
7. Click Import. The server uploads the zip file and imports its contents into the organization. If there are any broken dependencies in the catalog, the server displays a message with three choices: - Skip: This option does not import the resource with the broken dependency, but continues to import other resources. - Include: Attempts to import the resource with the broken dependency. The import succeeds if there is already a resource in the destination that satisfies the dependency. If the dependency is not satisfied in the destination, the resource is skipped and the import continues. - Cancel: Stops the import operation.
8. (Optional) You can import into a different organization. If the source organization has a different ID than the target organization, the import merges the content of the export into the selected organization. The following message appears:
The file being imported contains a top-level organization name that does not match the currently selected organization

Import file: <source organization ID>
Selected organizations: <target organization ID>
Content is merged into <target organization ID>
9. Click Continue Import to start the import. When merging organizations with the update option, the contents of the import override the target organization for any resource with the same name and location. The import might take a long time to upload and then process. During this time, the import operation can affect server performance. For this reason we do not recommend importing large amounts of data.
(On-Premise only) Export Jaspersoft Advanced Reporting Content Using the Command Line
Jaspersoft super users and tenant administrators can use the export command to export all Jaspersoft Advanced Reporting content from the JasperReports server (the same or a different instance).
Your exported Jaspersoft Advanced Reporting content can include tenant level data, folders, reports, domains, input controls, roles, users, server settings, or the public folder.
NOTE
Partial export of the Jaspersoft content is not supported with this command.
WARNING
Do not use the export command (admin jaspersoft export) to create a content zip file for use in upgrading Jaspersoft. Export the tenant-level data from the Jaspersoft server using either the Jaspersoft UI (Manage, Server Settings, Export) or the Jaspersoft export command (js-export.bat in <JaspersoftInstaller>/buildomatic/).
Follow these steps:
1. Stop the Jaspersoft server before using the export command. 2. Review any resource dependencies outside of the organization that can block the operation. 3. Open a command prompt and go to install directory/bin. 4. Execute the following command:
admin jaspersoft export [-orgName t1,t2,t3,..., tn] [-fileName zipfile name] [includePublic=true]|[-includeServerSettings=true] -fromUserName <superuser> fromPassword <superuser_password> -fromUrl <JSURL> -allOrgs -properties -overwrite 5. - orgName: Specify the organization IDs of the tenants to be exported. Separate multiple IDs with commas. If this
parameter does not include organization IDs, help information is displayed. Omit this parameter if you want to export only the public folder (or the server settings) and no tenants. - fileName: Enter the name of the zip file that you are exporting the Advanced Reporting content to. You can export single or multiple tenants to this file. You can specify a target directory path. - includePublic: (Optional) This parameter exports the public folders at the global level from the server. This parameter is not specific to a tenant, but applies to the source server (which encompasses all tenants on the source server). - includeServerSettings: (Optional) This parameter exports the server settings at the global level from the server. This parameter is not specific to a tenant, but applies to the source server (which encompasses all tenants on the source server). - fromUserName : Enter the super user Jaspersoft user name. - fromPassword : Enter the password for the Jaspersoft super user. - fromUrl : Provide the URL of the source server. - allOrgs : Exports all the organizations from the Jaspersoft report server. - properties: Specify the name of the properties file that contains the export command parameters. Use this option instead of specifying the parameters individually in the command. - overwrite : This parameter overwrites a previously created export zip file, if the file exists.

The export command fails in the following cases: - Required parameters are missing. - The include option folder name is not public (for example, you specify -includeTemp instead of -includePublic). - User credentials are not for the Jaspersoft super user. - The orgName parameter is included in the command, but tenants are not specified.
(On-Premise only) Import Jaspersoft Advanced Reporting Content Using the Command Line Jaspersoft super users and tenant administrators can use the import command to import all Jaspersoft Advanced Reporting content from the JasperReports server (the same or a different instance).
WARNING
1. You can only import the content if the organization IDs match between the export and import servers. You cannot import content that was exported from an organization with a different organization ID. 2. You can only import the content zip file that has been exported using the command-line Export command. 1. Stop the Jaspersoft Server. 2. Open a command prompt at install directory/bin 3. Execute the following command:
admin jaspersoft import [-orgName t1,t2,t3,..., tn] [-fileName zipfile name] -toUserName <superuser> -toPassword <superuser_password> -toUrl <JSURL> -silent
1. - orgName : Specify the organization IDs of the tenants to be imported. Separate multiple IDs with commas. If this parameter does not specify tenants, then all the tenants in the zip file are imported.
- fileName : Enter the name of the zip file that you are importing. If you do not specify a filename, help information is displayed.
- toUserName : Enter the super user Jaspersoft user name. - toPassword : Enter the password for the Jaspersoft super user. - toUrl : Provide the URL of the target server. - silent : Permits the silent creation of tenants on the destination Jaspersoft report server. This parameter creates all
tenants automatically on the destination Jaspersoft server. If you do not use this parameter, you are prompted to create the tenants. If the tenant names in the orgName parameter and zip file do not match, the following hint appears: Tenant doesn't exist do you want to create? Y/N - Enter Y to create new tenants and continue with the import. - Enter N to cancel the import and exit.
NOTE The partial import or export of Jaspersoft content is not supported with this command. The import command fails in the following cases: - Required parameters are missing. - User credentials are not for the Jaspersoft super user. - Content zip file is corrupted. - An incorrect zip file (exported using the Jaspersoft UI or js-export.bat utility) is used for the import.

(On-Premise only) Migrate Jaspersoft Advanced Reporting Content As a Jaspersoft administrator, you can export and import the Jaspersoft Advanced Reporting content. This content includes views, reports, custom domains, dashboards, and their dependencies. You can also migrate tenant level data, folders, reports, jobs, domains, input controls, roles, and users. These migration options are helpful when moving custom advanced reporting content between test and production environments.
NOTE To use these migration features and to update domain schema, apply Jaspersoft server cumulative patch 6.2.1_5.2.1.2.6. The migrate command moves the Jaspersoft Advanced Reporting content to a different Jaspersoft server. WARNING You can only migrate Jaspersoft Advanced Reporting content if the source and destination servers have matching organization IDs. You cannot migrate content between organizations that have different organization IDs.
Migration Example You have an environment with a single Jaspersoft Reports Server that is shared by multiple Classic PPM instances, or tenants. That is, on the same server, different organizations and tenants are provisioned, one for each instance. When the server needs to be updated to a newer version, all organizations and tenants on that server are upgraded. However, not all organizations and tenants on the current server may be ready to upgrade. In this case, you can complete an installation of Jaspersoft with the newer version on a different server, and then migrate the content of selected organizations and tenants from the existing server to the new server. Follow these steps: 1. Open a command prompt in the install directory/bin and execute the following command: admin jaspersoft migrate [-
orgName t1,t2,t3,..., tn] [-fileName zipfile name] [-includePublic=true]|[-includeServerSettings=true] -fromUserName <source user name> -fromPassword <source_password> -fromUrl <sourceURL> -toUrl <destination url> [toUserName <destination user name>] [-toPassword <destination password>] -allOrgs -silent 2. - orgName: Specify the organization IDs of the tenants to be migrated (separate multiple IDs with commas). If
this parameter does not include organization IDs, help information is displayed. Omit this parameter if you want

to migrate only the public folder (or the server settings) and no tenants. Use the allOrgs parameter instead of orgName to migrate all tenants. - includePublic: (Optional) This parameter migrates the public folders at the global level from the server. This parameter is not specific to a tenant, but applies to the source server (which encompasses all tenants on the source server). - includeServerSettings: (Optional) This parameter migrates the server settings at the global level from the server. This parameter is not specific to a tenant, but applies to the source server (which encompasses all tenants on the source server). - fromUserName: Enter the super user Jaspersoft user name for the source tenant. - fromPassword: Enter the password for the Jaspersoft super user for the source tenant. - fromUrl: Provide the URL of the source server. - toUrl : Provide the URL of the target server. - toUserName: Enter the super user Jaspersoft user name for the destination tenant. - toPassword: Enter the password for the Jaspersoft super user for the destination tenant. - allOrgs: This parameter migrates all tenants from the Jaspersoft report server. - silent: This parameter permits the silent creation of tenants on the destination Jaspersoft report server. This parameter creates all tenants automatically on the destination Jaspersoft server. If you do not use this parameter, you are prompted to create the tenants. If the tenant names in the orgName parameter and zip file do not match, the following hint appears:
Tenant doesn't exist do you want to create? Y/N
- Enter Y to create new tenants and continue with the migration. - Enter N to cancel the migration and exit. 3. Update the properties.xml file with the following information: - Destination Jaspersoft URL - Organization ID 4. The exported set of folders and files include resources in the repository, such as reports and their dependencies. The exported content is compressed in a single zip archive file.
WARNING
The content of the zip file is not intended for external access. The zip file contains files in several private formats. The XML syntax is not publicly available and the data files are not meant to be accessed.
(On-Premise only) Synchronize the Context with Jaspersoft
After you migrate (or import) content to a target tenant, you can change the user profile attributes or the domain schema name for the Jaspersoft administrator user. When content is moved from one Jaspersoft server to another Jaspersoft server in a different environment, the underlying Classic PPM server is also different from the source. The database that the server connects to is also different from the source.
This command adjusts the Jaspersoft configuration so that reports and other content work seamlessly. It synchronizes the Classic PPM server and database details to the targeted Jaspersoft tenant. It also updates the target tenant with the user profile attributes and the domain schema name from the source Classic PPM context for the Jaspersoft administrator user.
1. Update the properties.xml file for the Classic PPM instance that connects to the targeted Jaspersoft server or tenant with the following information: - Destination Jaspersoft URL - Organization ID
2. Select the target tenant name and user profile attribute values from the properties.xml file. 3. If you did not already generate the key store file, do it now, before you run the syncPPMContext command. 4. Run the following command from the Classic PPM target system after you import or migrate the tenant content:


Clarity - 16.4.1 admin jaspersoft syncPPMContext -userName <username> -password <password>
- username: Enter the superuser Jaspersoft user name for the Jaspersoft report server. - password: Enter the superuser Jaspersoft password for the Jaspersoft report server. Note: The migrate command fails if you include the syncPPMContext option and the credentials are not for the Jaspersoft super user.
View Database Schema Differences Organization IDs and database schema names in the source environment are typically different from the target environment. You can view information about the organization ID and database schema names. 1. Log in to Classic PPM. 2. Select Administration, General Settings, System Options. 3. View the Advanced Reporting section. Update Domain Schema When resources are imported to a target server where the database schema names are different from the source server, the resources do not work as expected. This behavior occurs when domains are imported, or are included in the import as a dependency. Domains keep references to the database schema from the source server. We recommend you to update the target server domain schema to eliminate any schema mismatch. Follow these steps: 1. Log in to Clarity. 2. Click Home, Personal, Advanced Reporting. 3. Select Manage, Update Domain Schema. 4. Select the Domain Name from the target server that requires an update. 5. Select the Domain Schema corresponding to the database accessed by the domain:
- Clarity Database Schema: Select this option for domains accessing the Clarity transactional database. - Data Warehouse Database Schema: Select this option for domains accessing the Data Warehouse database.
Select this option for all out-of-the-box domains included in the Advanced Reporting Content. 6. Click Update. The following image shows a successful example:

Update Domain Schema in Jaspersoft 9.0 When you try to export and import a Report/Dashboard from two different servers, follow below steps. Follow these steps: 1. From Server A, Export the report with dependencies and Legacy Key.
2. Edit the Dependent Domain, Export the Domain Design, and Save the XML file. 3. In Server B, navigate to Home > Manage > Organization > Import.


4. Choose the exported file in Step 1 with Legacy Key. 5. Navigate to Domains and Edit the Domain.


6. Edit Domain shows Server A DWH schema, which is broken. Click Confirm and delete items.

7. Click Import Design , select the XML saved in the Step 2, and then click Upload.

8. Click Upload Domain Design.
9. Click Save Domain.

## Jaspersoft Commands for Classic PPM Administrators (On-Premise Only)

As an administrator, use the following commands to manage the Jaspersoft advanced reporting content for Classic PPM. - First-Time Installation and Upgrades - Upgrades - Jaspersoft Sender Email Address - Maintenance

First-Time Installation and Upgrades This is the command we execute on any Clarity version system to install jaspersoft content for the first time.
admin content-jaspersoft <contentpackId> -userName superuser -password superuser
Run this command only to import the content for the first time in the Classic PPM environment. Also use this command during release and patch upgrades. This command performs the following actions: - Verifies whether the organization that you defined on the CSA Reporting subtab already exists.
- If the organization already exists, this command exits with an appropriate message. It does not execute the import because it is a new install.
- If the organization does not exist, this command creates the organization defined in the CSA Reporting subtab and continues.
- Creates a zip file specific for the organization in a temporary folder by replacing the org name with given in CSA - Imports the content from the temporary zip file - Creates the Clarity folder and its subfolders in the organization's repository - Creates the Advanced Reporting roles - Creates the PMO Accelerator roles. These roles determine content permissions and begin with the CSK_ prefix. - Updates the domains with the Data Warehouse schema owner name specific to the database - Uploads the UI Themes - Creates the user profile attributes - Update e-mail notification settings (available with Jaspersoft 6.2.1 and newer) - Creates the Jaspersoft administrator user. The default user is ppmjasperadmin . In on-premise environments, this
user can be changed on the CSA Reporting subtab before importing. After importing this user should not be modified. The Create and Update Jaspersoft Users job and the Load Data Warehouse job, which dynamically update domains, require this user. - Create shared folder and set permissions of that folder - Set permissions on themes, other folders and public folder - Creates cmn_install_history entry which will be used to track install history and also identify the upgrade mode
TIP When the default settings such as Organization name, Admin user name, Key store, Database configurations, or JASPERSOFT folder level permissions change, do not try to fix them by reimporting the content. Execute the related commands to fix them.
Upgrades This command is used to install the jaspersoft content upgrade. This command needs to be executed on top of patch releases or release upgrades:
admin content-jaspersoft <contentpackId> -userName superuser -password superuser upgrade
Run this command only to import the content for the first time in the Classic PPM environment. Also use this command during release and patch upgrades. This command performs the following actions: - Verifies if the organization defined in the CSA Reporting subtab already exists.
- If the organization does not exist, it exits with an appropriate message. It does not create the organization which means it does not execute the import because it is an upgrade, not a new install.
- If the organization does exist, it creates a zip file specific for the organization in a temporary folder and continues. - Imports the content from the temporary zip file - Updates the Clarity /Reports folder and its subfolders in the organization's repository. - Retains the Clarity folder, default subfolders, and their permissions. - Updates the out-of-the-box Jaspersoft Advanced Reporting items, in the Clarity folder and subfolders. Items include
domains, reports, input controls, templates, images, etc - It should not matter what is in the zip file being imported because no content is going to be deleted. If the zip file
includes content previously imported, update the content with the content from the zip file. If the zip file includes new content, import the new content without modifying the content previously imported. In summary, always only update the content which is coming from the zip file - Updates the domains being imported with the Data Warehouse schema owner name specific to the database - If content contains domains then Dynamic Domain routine will run - Uploads the UI Themes - Verify if the Jaspersoft administrator user already exists or if the Jaspersoft administrator user was modified in CSA and needs to be recreated - Verify if the Shared folder already exists or needs to be recreated. If the Shared folder exists skip it, do not modify it. Permissions should not be modified - Creates cmn_install_history entry after the import. This table tracks install history and also identify the upgrade mode
Jaspersoft Sender Email Address The sender email address is the address that appears when JasperSoft sends an email notification for a scheduled report. JasperSoft lets you set the sender email address at the JasperSoft Reporting Server (JRS) level, but not at the tenant (organization) level. - SaaS Environments: The following address is the default sender email address value for the JasperSoft reporting
server for Clarity SaaS implementations:
do-not-reply-ondemand@saas.broadcom.com
- On-Premise Environments: The following address is the default sender email address value for the JasperSoft reporting server for on-premise implementations:
do-not-reply@your_domain.com
For information about changing this default value during installation, see Installing. To change the default value after installation, perform the following steps: a. Locate and open the js.quartz.properties file in a text editor. b. Edit the report.scheduler.mail.sender.from property to include your sender email address and save the
file. c. Restart the JRS.
Maintenance
Update User Profile Updates the jasperadmin user profile attributes using properties.xml entries.
admin update jasperParameters
Run this command when changes occur in one or more of the following items:
- the configuration of Classic PPM - the database username or password - the data warehouse username or password - the key store


Synchronize and Jaspersoft Environments
Run this command when changes in the Classic PPM environment are not synchronized with Jaspersoft.
admin jaspersoft syncPPMContext -userName superuser -password superuser
This command performs the following actions:
- Verifies properties like url and username if they are changed then it will not update user profile attributes - If the ppmjasperadmin does not exist in Jaspersoft or Clarity it will create in both the systems - If new keystore is generated in between then the profile attributes will be encrypted using new keystore. - If profile attributes related to database properties changed then those profile attributes values will be updated - If there are any additional profile needs to be added that will be added - Updates the domain schema names for all OOTB domains
If only database properties were changed, then updateJasperParameters should work.

Export
admin jaspersoft export [-properties propertiesFile] -fromUserName username -fromPassword password -
fromURL JaspersoftSrcUrl -fileName contentFile [-overwrite] [-orgName orgId1,<orgId2>,..]] /[-allOrgs] [-
includePublic] [-includeServerSettings]
This command performs the following actions:
- Verifies the URL, username and password are valid. - Verifies the provided organization list exist. - If organizations are not passed considers to export all organizations. - If includePublic flag is set, exports the public folder content. - If includeServerSettings flag is set, exports the server side settings Exports the provided organizations/all orgs whole
content Zips into provided filename. - If overwrite flag is not given and if file already exists throws error message
NOTE Use this command to export the content from on JASPERSOFT instance to import into another JASPERSOFT instance via this CLI Don't use the content exported via this command in JASPERSOFT UI import

Import
admin jaspersoft import [-properties propertiesFile] -toUserName username -toPassword password -toURL
JaspersoftDsUrl -fileName contentFile [-silent] [-orgName orgId1,<orgId2>,..]] ]
This command performs the following actions:
- Verifies the URL, username and password are valid. - Verifies the provided organization list exist in zip file. - Provided organization list and organizations in zip should match Content zip file should be exported via CLI export
command Prompts for Organizations confirmation, if silent flag passed considers as create by default. - If Yes is the confirmation then creates the organizations in the JASPERSOFT instance Imports the content Imports
public folder content if zip contains it Imports server side settings if zip contains it


NOTE Don't reimport on already existing org, this will override the content Don't use zip file generated via JASPERSOFT UI.


Migrate (Export and Import)
migrate performs the two tasks, export and import
admin jaspersoft migrate [-properties propertiesFile] -toUserName username -toPassword password fromUserName username -fromPassword password -toURL JaspersoftDsUrl -fromURL JaspersoftSrcUrl [-orgName
orgId1,<orgId2>,..]] /[-allOrgs] [-includePublic] [-includeServerSettings] [-silent] ]
This command performs the following actions: - If allOrg argument passed then it exports and imports all arguments. - If migrate run on already imported content tenant will not be recreated. - Content will be reimported if org is already exist If org is not existed then new org will be created Include Public and
Include server settings will be migrated if arguments are provided.
NOTE Don't migrate on already existing org, this will override the content Try to avoid all orgs option, sometimes resource contention will cause adverse effect on JASPERSOFT instance.

Repair Domain Corruption
Run this command only when your domains are corrupt. Domain corruption prevents the Load Data Warehouse job from running.
admin content-jaspersoft <contentpackId> -userName superuser -password superuser restoreDomains
This command performs the following actions:
- Verifies if the organization defined in the CSA Reporting subtab already exists. - If the organization does not exist, it exits with an appropriate message. It does not create the organization which
means it does not execute the import because it is an upgrade, not a new install - Creates a zip file specific for the organization in a temporary folder - Imports the content from the temporary zip file - Replaces all the OOTB domains which are under Clarity /domains folder - Updates the domains being imported with the Data Warehouse schema owner name specific to the database - Runs the dynamic domain updates
NOTE Run this command when the Load Data warehouse job fails by complaining Domain updates are failing. While working on adhoc views using domains if it fails to fetch data and configuring columns, check domains definition and if it reports any error then run this command.

List Domains This command checks the user profile attribute and get list of email domains supported.
admin jaspersoft email listDomains

Add Domains This command adds the email domains to the supported domain list.
admin jaspersoft email -addDomains
- The Jaspersoft server sends email only for these supported domains. Other domain-specific email is rejected. - The server verifies if the domains that you add are already in the supported list; only new ones are added. - The list of trusted domains cannot exceed 1200 characters.

Remove Domains
This command removes the email domain in the supported domain list.
admin jaspersoft email -removeDomains
- Emails will be sent via JASPERSOFT only for the supported domains. Removed domain specific emails will be rejected
- Checks if provided domains are present in domains list - If available removes them otherwise ignores

Advanced Reporting Notifications
This command enables or disables the notification system in JASPERSOFT instance.
If enabled, then notifications like email or alert will be sent out from JASPERSOFT else nothing will be communicated to outer world.
admin jaspersoft email disableNotifications|enableNotifications

## PMO Accelerator Advanced Reporting Content

The PMO Accelerator add-in includes a collection of Advanced Reporting content. The PMO Accelerator is a required prerequisite of the Advanced Reporting content. Many of the reports reference items that are delivered through the PMO Accelerator.
The Advanced Reporting content includes the following items:
- Data Sources - Domains - Input Controls - Reports - Roles - Templates

PMO Accelerator Attributes and Data Warehouse
The majority of attributes installed by the PMO Accelerator have the Include in the Data Warehouse field checked. Do not uncheck this field because reports depend upon it. The PMO Accelerator attribute IDs are renamed when their respective columns are created in the data warehouse (DWH).
A complete list of the PMO Accelerator attributes and their corresponding Data Warehouse column names is included in the following tables.
Object: Benefit Plan

Attribute Attribute ID

DWH Enabled

Benefit Class

Yes

obj_benefit_class

Benefit Subclass

Yes

obj_benefit_subclass

Table Column
dwh_fin_benefit_plan benefit_class_key
dwh_fin_benefit_plan benefit_subclass_key

Lookup Table dwh_lkp_benefit_class
dwh_lkp_benefit_subcla ss

Notes


Object: Idea

Attribute Attribute ID

DWH Enabled

Business Owner

Yes

obj_business_owner

Idea Category

Yes

obj_request_category

Idea Type

Yes

obj_request_type

Fast Track obj_fast_track Yes

Objective obj_objective Yes Object: Investment

Attribute Attribute ID

DWH Enabled

Architectural Fit

Yes

obj_align_factor3

Business Alignment

Yes

obj_alignment

Business Unit Priority Yes obj_align_factor2

Commercial Value

Yes

obj_align_factor4

Corporate Priority

Yes

obj_align_factor1

Portfolio Category 1

Yes

obj_pfl_category1

Portfolio Category 2

Yes

obj_pfl_category2

Portfolio Category 3

Yes

obj_pfl_category3

Portfolio Category 4

Yes

obj_pfl_category4

Regulatory Compliance Yes obj_align_factor5

Technology Compliance Yes obj_align_factor6


Table Column dwh_inv_idea business_owner_key
dwh_inv_idea idea_prj_category_key
dwh_inv_idea idea_prj_type_key
dwh_inv_idea is_fast_track dwh_inv_idea objective

Lookup Table

Notes

dwh_lkp_idea_prj_categ ory
dwh_lkp_idea_prj_type

No lookup table is required because it should be joined to the DWH_RES_RESOURCE table.
The same lookup table is available for Idea and Project.
The same lookup table is available for Idea and Project.

Table Column

Lookup Table

Notes

dwh_inv_investment

dwh_lkp_align_factor1_4

align_architectural_key

dwh_inv_investment business_alignment

This is a calculated attribute and does not have a lookup table with the display mappings.

dwh_inv_investment

dwh_lkp_align_factor1_4

align_business_unit_key

dwh_inv_investment align_commercial_key

dwh_lkp_align_factor1_4

dwh_inv_investment align_corporate_key

dwh_lkp_align_factor1_4

dwh_inv_investment portfolio_cat1_key

dwh_lkp_portfolio_cat1

dwh_inv_investment portfolio_cat2_key

dwh_lkp_portfolio_cat2

dwh_inv_investment portfolio_cat3_key

dwh_lkp_portfolio_cat3

dwh_inv_investment portfolio_cat4_key

dwh_lkp_portfolio_cat4

dwh_inv_investment align_regulatory_key

dwh_lkp_align_factor5

dwh_inv_investment align_technology_key

dwh_lkp_align_factor6


Attribute Attribute ID

DWH Enabled

Work Status

Yes

obj_work_status

Object: Project

Attribute Attribute ID

DWH Enabled

Business Owner

Yes

obj_stakeholder1

Cost Variance %

No

obj_ev_cv_pct

Estimating Factor 1

Yes

obj_est_factor1

Estimating Factor 2

Yes

obj_est_factor2

Finance and Governance Yes obj_stakeholder3

Objective obj_objective Yes

Project Category

Yes

obj_request_category

Project Management

Yes

Office obj_stakeholder2

Project Template

No

obj_methodology

Project Type

Yes

obj_request_type

Projected Cost Variance No obj_cost_amt_var

Projected Cost Variance No % obj_cost_pct_var

Table Column
dwh_inv_investment work_status_key

Lookup Table dwh_lkp_work_status

Notes

Table Column dwh_inv_project business_owner_key
dwh_inv_summary_facts ev_cost_var_pct
dwh_inv_project estimating_factor_1 dwh_inv_project estimating_factor_2 dwh_inv_project finance_governance_key
dwh_inv_project objective dwh_inv_project idea_prj_category_key dwh_inv_project project_mgmt_office_key
dwh_inv_project idea_prj_type_key dwh_inv_summary_facts eac_base_cost_var
dwh_inv_summary_facts eac_base_cost_pct

Lookup Table

Notes
No lookup table is required because it should be joined to the DWH_RES_RESOURCE table.
This attribute is not enabled because it already exists in the facts table.

No lookup table is required because it should be joined to the DWH_RES_RESOURCE table.

No lookup table is required because it should be joined to the DWH_RES_RESOURCE table.
This attribute is not enabled for this release.
This attribute is not enabled because it already exists in the facts table.
This attribute is not enabled because it already exists in the facts table.


Attribute Attribute ID

DWH Enabled

Projected Effort Variance No obj_effort_amt_var

Projected Effort Variance No % obj_effort_var

Schedule to Baseline

No

obj_schedule_var

Schedule Variance % Yes obj_ev_sv_pct

Status Reporting

Yes

obj_status_reporting

Object: Status Report

Attribute Attribute ID

DWH Enabled

Change Explanation

Yes

cop_scope_exp

Cost and Effort

Yes

Explanation

cop_effort_exp

Cost and Effort Status Yes cop_cost_eft_status

Current Phase

No

cop_phase

Deliverable

Yes

Scope Changed

cop_scope_deliver

Key Accomplishments Yes cop_key_accomplish

Next Milestone on Track Yes cop_sched_milestone

Overall Status

Yes

cop_overall_status

Project Affected by

Yes

External Factors?

cop_cost_effort_ext

Table Column dwh_inv_summary_facts eac_base_hours_var
dwh_inv_summary_facts eac_base_hours_pct

Lookup Table

Notes
This attribute is not enabled because it already exists in the facts table.
This attribute is not enabled because it already exists in the facts table.

dwh_inv_summary_facts ev_schedule_var_pct

This attribute is not enabled because it already exists in the facts table.

dwh_inv_project status_reporting_key

dwh_lkp_status_reporting

Table Column
dwh_inv_status_report change_explanation
dwh_inv_status_report cost_effort_explanation

Lookup Table

dwh_inv_status_report dwh_lkp_sr_status sr_cost_effort_status_key

Notes

dwh_inv_status_report is_deliverable_scope_change
dwh_inv_status_report key_accomplishments dwh_inv_status_report is_next_milestone_on_track dwh_inv_status_report overall_status
dwh_inv_status_report is_project_external_factors

This is a calculated attribute and does not have a lookup table with the display mappings.


Attribute Attribute ID

DWH Enabled

Project ID cop_project_id No

Project Manager

No

cop_project_manager

Project Name

No

cop_project_name

Project Objective

Yes

Changed cop_scope_obj

Report Date

Yes

cop_report_date

Report Status

Yes

cop_report_status

Review Approval

Yes

Problems?

cop_cost_effort_rev

Schedule Status

Yes

cop_schedule_status

Scope Change Required Yes cop_scope_change

Scope Status

Yes

cop_scope_status

Staffing/

Yes

Availability Issues?

cop_cost_eft_staff

Status Report Update Yes cop_report_update

Upcoming Activities

Yes

cop_upcoming_act

Variance Explanation

Yes

cop_schedule_exp

Object: Task

Attribute Attribute ID

DWH Enabled

Cost Variance %

No

obj_ev_cv_pct

Schedule Variance % No obj_ev_sv_pct


Table Column

Lookup Table

Notes

This is a virtual attribute. Virtual attributes are not enabled.

This is a virtual attribute. Virtual attributes are not enabled.

This is a virtual attribute. Virtual attributes are not enabled.

dwh_inv_status_report is_project_objective_change

dwh_inv_status_report report_date

dwh_inv_status_report sr_report_status_key

dwh_lkp_sr_report_statu s

is_review_approval_prob lems

dwh_inv_status_report dwh_lkp_sr_status sr_schedule_status_key

dwh_inv_status_report is_scope_change_required

dwh_inv_status_report sr_scope_status_key

dwh_lkp_sr_status

dwh_inv_status_report is_staff_avail_issues

dwh_inv_status_report report_update
dwh_inv_status_report upcoming_activities
dwh_inv_status_report variance_explanation

Table Column

Lookup Table

dwh_inv_task_summary_facts ev_cost_var_pct

dwh_inv_task_summary_facts ev_schedule_var_pct

Notes
This attribute is not enabled because it already exists in the facts table.
This attribute is not enabled because it already exists in the facts table.


NOTE
More Information:
- Export, Import, or Migrate Advanced Reporting Content - PMO Accelerator Access Groups - Add-in: PMO Accelerator
PMO Accelerator Advanced Reporting Setup
To view the reports with updated information, set up the jobs, calendar, time slices, language, locale, timezone, and other required items:
- PMO Accelerator Advanced Reporting Data Warehouse Calendar Periods and FTE Calculations - PMO Accelerator Advanced Reporting and Data WareHouse Jobs - PMO Accelerator Advanced Reporting Time Slices - PMO Accelerator Advanced Reporting Populate Option - PMO Accelerator Advanced Reporting Language, Locale, and Time Zone - PMO Accelerator Advanced Reporting Source Files - PMO Accelerator Advanced Reporting Data Sources
PMO Accelerator Advanced Reporting Data Warehouse Calendar Periods and FTE Calculations
The calendar periods in reports and the amounts that are converted to FTE depend on the Data Warehouse calendar table. This table is populated by running the Load Data Warehouse job. By default, this job populates calendar periods for 365 daily periods back and 365 daily periods forward, 52 weekly periods back and 52 weekly periods forward, and 36 monthly periods back and 36 monthly periods forward.
If you need to change the number of calendar periods, you must consistently change all of the Data Warehouse slice requests for that number of periods. Although there is no limit for the number of periods, if you select a large timeframe the Time Slicing job will take longer to complete and you may experience performance issues.
For period type of week to display data, there are two places in Classic PPM that must have consistent start days of the week:
- The start day of the week for the report column headings is retrieved from the First Day of Work Week field set in Classic PPM (Administration/Project Management-Settings).
- The time slices referenced by the report must all start on the day that you set as the first day of the work week.
The amounts being converted to FTE depend on the Data Warehouse calendar table. This table is populated by running the Load Data Warehouse job. This job populates calendar periods and calculates weekly and monthly FTE amounts based on the availability of the resource with Resource ID of 'admin' and the time slice with the name WEEKLYRESOURCEAVAILCURVE or MONTHLYRESOURCEAVAILCURVE (Administration/Data Administration-Time Slices), respectively.
There are twelve time slice requests used for advanced reporting. Of these twelve time slice requests, eleven of them are used via the Data Warehouse. There is only one time slice request used for advanced reporting that is not a Data Warehouse request. See the Administration Guide for more details regarding the Data Warehouse time slice requests. The Data Warehouse time slice requests default to the following time periods, based on the database server system date:
- One year back and forward for Daily. The From Date of the slice request is one year prior to the system date. - One year back and forward for Weekly. The From Date is one year prior to the system date and is the same day as the
First Day of Work Week. To locate the First Day of Work Week field, open the Administration menu and from Project Management, click Settings. - Three years back and forward for Monthly. The From Date is three years prior to the system date and is always the first day of the month.

PMO Accelerator Advanced Reporting and Data WareHouse Jobs
The following Classic PPM jobs are required by reports; however, which jobs are required depends on the report. This documentation includes Report Prerequisites and Report Security sections that detail the jobs required to populate data in each report.
- Create and Update Jaspersoft Users - Load Data Warehouse - Load Data Warehouse Access Rights - Time Slicing - Update Report Tables - Post Timesheets - Post Transactions to Financials - Post to WIP - Import Financial Actuals - Investment Allocation - Update Earned Value and Cost Totals - Synchronize portfolio investments
The Load Data Warehouse and Load Data Warehouse Access Rights jobs are required by almost all reports. These jobs populate dimensions, facts, and lookup tables in the Data Warehouse (DWH). If the Data Warehouse is not populated, the reports display a message that there are no matching records found and most of the report parameters do not display data.
WARNING
If not already active, activate the Load Data Warehouse and Load Data Warehouse Access Rights jobs before you run them.
The Load Data Warehouse job extracts the data from the Classic PPM database, transforms the data, and loads the data into the Data Warehouse. The job populates the Data Warehouse for stock objects and attributes and any custom objects and attributes that have been explicitly enabled for inclusion in the Data Warehouse. The job also updates the advanced reporting domains if you have set up advanced reporting with Jaspersoft.
NOTE
Limit any long string attributes that you enable for the Data Warehouse to a maximum of 1000 characters. The Data Warehouse database includes only the first 1000 characters from long string attributes.
Run the Load Data Warehouse job with the Full Load option selected in the following cases:
- You add a new language in the Data Warehouse system options. Running an incremental load of the job does not update the Data Warehouse with the new language.
- You change the entity for fiscal periods in the Data Warehouse options. - You change the First Day of the Work Week field set in Classic PPM (Administration/Project Management-Settings).
The majority of attributes installed by the PMO Accelerator are enabled for inclusion in the Data Warehouse. These attributes have the Included in the Data Warehouse field checked. Do not uncheck this field because reports depend upon them. The PMO Accelerator attribute IDs are renamed when their respective columns are created in the Data Warehouse.
WARNING
If you uncheck any PMO Accelerator attributes to exclude from the Data Warehouse, the reports and input controls that reference these fields will no longer work.

PMO Accelerator Advanced Reporting Time Slices
WARNING
By default, the Data Warehouse time slice requests are set consistently for each slice period (Daily, Weekly, Monthly). If you edit these slice requests, set the From Date and Number of Periods to be the same for each slice period type. If these values are not set correctly, the data in the Data Warehouse will be inconsistent. For more information about editing the time slices, see Configure the Data Warehouse and Advanced Reporting. If you need to change any of the slices, you must consistently change all of the Data Warehouse slice requests for that slice period type.
Specifically, follow these rules when setting the From Date and Number of Periods for the Data Warehouse time slice requests:
- There is only one daily time slice request referenced by reports. The DAILYRESOURCEAVAILCURVE time slice request is used by the Missing Time report. See the 'Report Prerequisites' section of the Missing Time report for more details. The recommended setting for this slice request is in the following table.

Time Slice Name

Item

DAILYRESOURCEAVAI Availability LCURVE

From Date
The first day of the month, six months prior to the current month.

Slice Period Daily

Number of Periods 400
- For all weekly time slice requests, the From Date must be the same day as the First Day of the Work Week set in Administration under Settings, Project Management. For example, if the First Day of the Work Week is a Monday, then all weekly time slice requests must be set with a From Date that is a Monday.
- For all monthly time slice requests, the From Date must be always the first of a month.
The time slice requests (Administration/Data Administration-Time Slices) in the following table are referenced by reports. The time slice requests must be configured to cover the periods displayed in the reports or the reports will not display data for those periods. The individual report sections of this document indicate which reports reference the time slices so you may search the document to determine which reports are dependent upon them.

Time Slice Name

Item

DAILYRESOURCEAVAILCURV Availability E
DAILYRESOURCETIMECURVE Time Entry
WEEKLYRESOURCEACTCUR Actuals VE
WEEKLYRESOURCEALLOCC Allocations URVE
WEEKLYRESOURCEAVAILCU Availability RVE
WEEKLYRESOURCEESTCUR Estimates VE
MONTHLYRESOURCEACTCU Actuals RVE
MONTHLYRESOURCEALLOC Allocations CURVE

Daily

Slice Period

Daily Weekly

Weekly

Weekly

Weekly

Monthly

Monthly

Data Warehouse No Yes Yes Yes Yes Yes Yes Yes


Time Slice Name

Item

MONTHLYRESOURCEAVAILC Availability URVE
MONTHLYRESOURCEBASEC Baseline URVE
MONTHLYRESOURCEESTCU Estimates RVE
MONTHLYRESOURCEHARDA Hard Allocation LLOC

Slice Period Monthly Monthly Monthly Monthly

Data Warehouse Yes Yes Yes Yes

PMO Accelerator Advanced Reporting Populate Option
Beginning with Release 14.3.0.3, most reports include the Populate check box to improve the performance of certain query-based parameters. Prior to this patch, you might experience slow performance in the following areas:
- Clicking a report to view the input control page and report - this page might be slow to render - Clicking a specific query-based input control in the report to select a value - the input control might be slow in returning
all the values
The query-based parameters which contain the new Populate check boxes in reports are:
- Investment - Project - Resource - Role - Primary Role - Investment Manager - Project Manager - Business Owner - Resource Manager - Booking Manager
The following query-based parameters also include extra modifications to improve performance: Investment, Project, and Resource. These parameters are now cascading based on the OBS Unit and Manager you select. For example, if you select an Investment OBS Unit, the Investment parameter now only displays those investments that are directly linked to that OBS unit or descendants. Likewise, if you select an Investment Manager, the Investment parameter only displays investments for that manager.
For example, the Investment parameter has a Populate Investments? check box. Performance is optimum because no investments appear. To view investments, select the Populate Investments? check box. If you have also selected an Investment OBS Unit, then only the investments that are associated to the unit or a descendant appear. Likewise, if you have selected an Investment Manager, only the investments for the manager appear.
The following image shows the Investment parameter and list of investments after you select the Populate Investments? check box.


PMO Accelerator Advanced Reporting Language, Locale, and Time Zone The language, locale, and time zone settings that are selected in Classic PPM (Home, Account Settings, Personal Information) are passed to Jaspersoft and apply to the reports as follows: - The language setting that is selected in Classic PPM applies to report and parameter labels and the data returned in
the report. - The locale setting that is selected in Classic PPM applies to number, time, and date formats. - The time zone setting that is selected in Classic PPM applies to the report run date and time that appear in the footer
of all reports. The time zone setting that is selected in Classic PPM does not apply to business dates in reports. These dates are not adjusted for time zone conversions. Also, business dates in reports might not match if they are configured in Classic PPM to show the time because time zone conversion is applied. To display consistent time zone in Classic PPM and reports, the Jaspersoft server must be set to the same time zone as the Classic PPM application and database servers.

NOTE
A known issue prevents the Advanced Reporting repository folder structure and sub-items (including reports, input controls, and templates) from appearing in their localized form. The item names and their descriptions appear in English for all languages. Input controls display the $R{} expression that is used by Jaspersoft for localization. This expression is only converted when running the reports; however, the report output is fully localized. See Change Impact and Upgrade for more details.

PMO Accelerator Advanced Reporting Source Files
The report source files are included in a zip file (jaspersoft_csk.zip) and are available after the installation in the Classic PPM reporting content folder: <install>\reporting\content\csk\jaspersoft\package. If a patch is installed, any updated report source files will be included in a patch zip file (jaspersoft_csk_upgrade_[patch_number].zip).
The JRXML report files require the Jaspersoft Studio report designer development tool. The Jaspersoft Studio report designer is an eclipse-based development tool that can be downloaded and installed locally on your computer. See the CA Clarity Release Notes for the supported version of Jaspersoft Studio.
When you extract the contents of the zip file, the report source files are available under \resources\organizations \org_template\ca_ppm\reports followed by their corresponding management area. The source files in the following table are included:

Report Capacity vs. Allocation by OBS Capacity vs. Booking Status by OBS Capacity vs. Demand by Resource
Capacity vs. Demand by Role Data Warehouse Schema Financial Budget vs. Forecast by Period Financial Budget vs. Forecast by Period Detail
Financial Capitalization by Investment Financial Capitalization Detail Financial Forecast Review by Investment Financial Forecast Review by Plan Grouping Investment Allocations and Assignments Investment Assignments by Task Investment Baseline vs. Plan by Task Investment Transaction Inquiry Key Task and Milestone Status KPIs by Project Type Missing Time Over/Under Allocation by Resource Over/Under Allocation by Role Portfolio Plan Changes

Source Files
\resource_management\CSK_RES_CapVsAllocByOBS_files \resource_management\CSK_RES_CapVsBookingByOBS_files \resource_management\CSK_RES_CapVsDemandByResource_ files \resource_management\CSK_RES_CapVsDemandByRole_files \administration\CSK_ADM_DataWarehouseSchema_files \financial_management\CSK_FIN_BudgetForecastByPeriod_files \financial_management\CSK_FIN_BudgetForecastByPeriodDetai l_files \financial_management\CSK_FIN_CapitalizationByInv_files \financial_management\CSK_FIN_CapitalizationByInvDetail_files \financial_management\CSK_FIN_ForecastReviewByInv_files \financial_management\CSK_FIN_ForecastRevByPlanGroup_files \investment_management\CSK_INV_AllocationAssignment_files \investment_management\CSK_INV_AssignmentsByTask_files investment_management\CSK_INV_BaseVsPlanByTask_files \financial_management\CSK_FIN_InvTransactionInquiry_files \project_management\CSK_PRJ_KeyTaskMilestoneStatus_files \project_management\CSK_PRJ_KPIsByProjectType_files \time_management\CSK_TME_MissingTime_files \resource_management\CSK_RES_OverUnderAllocation_files \resource_management\CSK_RES_OverUnderAllocByRole_files \portfolio_management\CSK_PFM_PortPlanChanges_files


Report Portfolio Plan Comparison Clarity Schema Program Budget vs. Forecast by Period Program Budget vs. Forecast by Period Detail
Program Milestone Dependencies Program Status Detail Project Change Request Register Project Cost and Effort Project Earned Value Project Issue Register Project Portfolio Summary Project Risk, Issue, and Change Summary Project Risk Register Project Status Detail Project Status Report List Project Status Summary Project Storyboard Project Task Dependencies Resource Allocations and Assignments Resource Assignments by Task Resource Availability Resource Baseline vs. Plan by Employment Type Resource Forecasted Utilization Resource Forecasted Utilization Detail Resource Skills Resource Time Review by Manager Resource Time Summary and Detail Time Compliance Time Compliance Detail User Access Rights User Access Rights Detail User License and Activity User License and Activity Detail

Source Files \portfolio_management\CSK_PFM_PortPlanComparison_files \administration\CSK_ADM_PPMSchema_files \program_management\CSK_PRG_BudgetForecastByPeriod_files \program_management\CSK_PRG_BudgetForecastByPeriodDeta il_files \program_management\CSK_PRG_MilestoneDependencies_files \program_management\CSK_PRG_ProgramStatusDetail_files \project_management\CSK_PRJ_ChangeRequestRegister_files \project_management\CSK_PRJ_ProjectCostAndEffort_files \project_management\CSK_PRJ_EarnedValue_files \project_management\CSK_PRJ_IssueRegister_files \project_management\CSK_PRJ_PortfolioSummary_files \project_management\CSK_PRJ_RiskIssueChangeSummary_files \project_management\CSK_PRJ_RiskRegister_files \project_management\CSK_PRJ_ProjectStatusDetail_files \project_management\CSK_PRJ_StatusReportList_files \project_management\CSK_PRJ_ProjectStatusSummary_files \project_management\CSK_PRJ_ProjectStoryboard_files \project_management\CSK_PRJ_TaskDependencies_files \resource_management\CSK_RES_AllocationAssignment_files \resource_management\CSK_RES_AssignmentsByTask_files \resource_management\CSK_RES_ResourceAvailability_files \resource_management\CSK_RES_BaseVsPlanByEmpType_files \resource_management\CSK_RES_ForecastedUtilization_files \resource_management\CSK_RES_ForecastedUtilDetail_files \resource_management\CSK_RES_Skills_files \time_management\CSK_RES_ResTimeReviewByMgr_files \time_management\CSK_RES_TimeSummaryAndDetail_files \time_management\CSK_TME_Compliance_files \time_management\CSK_TME_ComplianceDetail_files \administration\CSK_USR_AccessRights_files \administration\CSK_USR_AccessRightsDetail_files \administration\CSK_USR_LicenseActivity_files \administration\CSK_USR_LicenseActivityDetail_files


PMO Accelerator Advanced Reporting Data Sources The data sources define how and where to obtain the data displayed by ad hoc views, reports, and input controls. The Advanced Reporting content includes two data sources as follows: - Clarity BEAN - Classic PPM Bean Data Source The Clarity BEAN data source is a bean data source type required by the Advanced Reporting content to access the Classic PPM transactional schema. - Clarity DWH BEAN - Classic PPM Data Warehouse Bean Data Source The Clarity DWH BEAN data source is a bean data source type required by the Advanced Reporting content to access the Data Warehouse schema. Almost all reports and input controls are using the Classic PPM DWH BEAN data source. Some reports display data that is not available in the Data Warehouse and for this reason they are using the Classic PPM BEAN data source. Each report has a 'Report Properties' section that indicates which data source is referenced by the report. The data source connections must be valid for the Advanced Reporting content to work. You can use the Test Connection button to validate the data source connection. The Test Connection button is available when you edit the data source (Home/ Personal/Advanced Reporting/View/Repository/<organization>/Clarity /Data Sources-Edit). If the validation fails, contact your administrator to ensure that the databases are running. The Bean Name and Bean Method properties defined in the data source properties should not be modified.
NOTE More Information: - Configure the Data Warehouse and Advanced Reporting - Configure Time Slices - Jobs Reference - PMO Accelerator Attributes and the Data Warehouse - Run, Schedule, and Share Reports

## Advanced Reporting Roles and Permissions

Advanced Reporting access includes create permissions and repository item permissions (No Access, Read Only, Read and Write, Execute Only). These permissions can be granted at the role or user level. Classic PPM includes Advanced Reporting roles that are assigned to users based on Classic PPM access rights. These roles begin with ROLE_ and only provide create permissions. The PMO Accelerator add-in includes extra roles that begin with CSK_ and set permissions for repository items such as reports or domains. The PMO Accelerator add-in also updates repository item permissions for the default roles. When you add users to these roles, the users automatically inherit the permissions of the role. The roles are meant to be implemented in a matrix fashion, which means that a user can be associated with more than one role to obtain multiple permissions.


The following roles are included with Advanced Reporting:


Role CSK_ROLE_ADMINISTRATION CSK_ROLE_ALL_REPORTS_DOMAINS
CSK_ROLE_APPLICATION_MANAGEMENT
CSK_ROLE_CUSTOM_MASTER_OBJECTS
CSK_ROLE_FINANCIAL_MANAGEMENT
CSK_ROLE_IDEA_MANAGEMENT CSK_ROLE_INVESTMENT_MANAGEMENT
CSK_ROLE_PROGRAM_MANAGEMENT CSK_ROLE_PROJECT_MANAGEMENT
CSK_ROLE_RESOURCE_MANAGEMENT
CSK_ROLE_TIME_MANAGEMENT
ROLE_ADMINISTRATOR ROLE_ADHOC_DESIGNER ROLE_DASHBOARD_DESIGNER ROLE_DATASOURCE_DESIGNER ROLE_DOMAIN_DESIGNER ROLE_REPORT_DESIGNER

Permissions
View items created in the Ad Hoc Views and Dashboards folders and run administration reports. This role corresponds to the PMO Advanced Reporting Administration access group.
View items created in the Ad Hoc Views and Dashboards folder. View all domains and run administration, investment, project, resource, time and financial reports. This role corresponds to the PMO Advanced Reporting All Reports and Domains access group.
View items created in the Ad Hoc Views and Dashboards folders. View the Application Management domain. This role corresponds to the PMO Advanced Reporting Application Management access group.
View items created in the Ad Hoc Views and Dashboards folders. View the Custom Master Objects domain. This role corresponds to the PMO Advanced Reporting Customer Master Objects access group.
View items created in the Ad Hoc Views and Dashboards folders. Vew the Financial Management domain and run financial reports. This role corresponds to the PMO Advanced Reporting Financial Management access group.
View items created in the Ad Hoc Views and Dashboards folders. View the Idea Management domain. This role corresponds to the PMO Advanced Reporting Idea Management access group.
View items created in the Ad Hoc Views and Dashboards folders. View the Investment Management domain and run investment reports. This role corresponds to the PMO Advanced Reporting Investment Management access group.
View items created in the Ad Hoc Views and Dashboards folders and run program reports. This role corresponds to the PMO Advanced Reporting Program Management access group.
View items created in the Ad Hoc Views and Dashboards folders. View the Project Management domain and run project reports. This role corresponds to the PMO Advanced Reporting Project Management access group.
View items created in the Ad Hoc Views and Dashboards folders. View the Resource Management domain and run resource reports. This role corresponds to the PMO Advanced Reporting Resource Management access group.
View items created in the Ad Hoc Views and Dashboards folders. View the Time Management domain and run time reports. This role corresponds to the PMO Advanced Reporting Time Management access group.
Administer the system.
Create Ad Hoc views.
Create dashboards.
Create data sources.
Create domains.
Create reports.


ROLE_USER

Role

The following chart shows the permissions for each role:

Permissions Navigate to the Advanced Reporting page.


For best results, enlarge and scroll this image, view on a wide-screen device, or print in landscape orientation.

## Project Management Reports

The project management reports provide visibility into the key performance indicators of status, schedule, alignment, and risk across projects in an organization. The reports also provide insight into schedule, cost, effort, risks, and issues in managing the projects. Several reports present status report information for monitoring project progress, while others offer analysis of staffing issues and comparisons of project plan performance compared to baseline. The following reports are included with Project Management reports:
- KPIs by Project Type (Dashboard) - KPIs by Project Type - Top 50 Project Watchlist - Project Portfolio Summary - Project Planning Schedule - Project Schedule - Project Cost and Effort - Project Task Dependencies - Key Task and Milestone Status - Project Earned Value - Project Storyboard - Project Status Report List - Project Status Summary - Project Status Detail - Project Risk, Issue, and Change Summary - Project Risk Register - Project Issue Register - Project Change Request Register - Project or Program Roadmap


KPIs by Project Type (Dashboard)
The KPIs by Project Type (Dashboard) report displays the key performance indicators of status, schedule, alignment, and risk as gauges, with column charts of these key indicators by project type. Resource allocation and actual hours are summarized by project type and displayed in pie charts. An issue, risk, and change request bar chart displays the number of each by project type and priority.
The following image displays the KPIs by Project Type report with status, schedule, alignment, and risk details.


Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report.
If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.The charts in the report are grouped by the project type field on the projects. To make the groupings relevant, the project type field must be completed. If the project type field is not defined, the project types display in the report as Undefined. - The status is based on the most recent project status report so at least one status report must be completed on the projects for this indicator to calculate. The status report with the greatest report date and a report status of final, or no value selected for report status, is considered the most recent. - The business alignment and risk rating properties on the projects must be completed to calculate the alignment and risk indicators. - Projects must have team members with allocation amounts to calculate resource allocations. - Projects must have actual hours posted through timesheets, transaction entry, or imported into Classic PPM to calculate resource actuals. Report Properties The following values list the report properties. Name: KPIs by Project Type (Dashboard) Resource ID: CSK_PRJ_KPIsByProjectTypeDashboard Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/KPIs by Project Type (Dashboard) Path: /ca_ppm/reports/project_management/CSK_PRJ_KPIsByProjectTypeDashboard


Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select query ypeKey_1

Project OBS Unit projectOBSUn Single-select query itKey_1

Project Type projectTypeKey_1 Multiple-select query

Project

Multiple-select query

Manager projectManagerKey_1

Project Status projectStatusKey_1

Multiple-select query

Risk, Issues, or Change Requests risksIssuesCRs

Single-select list of values

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project Type projectTypeKey_1 No

Project

No

Manager projectManagerKey_1

Project

No

Status projectStatusKey_1

Risk, Issues, or Change Requests risksIssuesCRs

No Issues

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values.
Project Type: Major Project, Application Change, Infrastructure Deployment
Risk, Issues, or Change Requests: Risks, Issues, Change Requests
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based upon the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Project Type parameter is associated to the Idea and Project Type lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report includes gauge components that are combined with regular column charts showing KPI average values and percentage of projects with critical status, schedule late, high alignment and high risk, categorized by project


type. Amounts and percentages of resource allocation hours and actual hours are represented in two pie charts. The report also includes a bar chart showing the distribution of high, medium, and low priorities of issues, risks and change requests, which are categorized by project type. Programs and templates are excluded. This report contains the following calculations:
- Status. The gauge needle displays the average overall status (sum of overall status that is divided by number of projects). This value is taken from the overall status field from the project status report. The overall status is a calculated field in Clarity that is the sum of the schedule status, scope status, and cost and effort status fields on the status report. Each of these fields is ranked as on track with a value of 10, minor variance with a value of 20, or significant variance with a value of 30. The gauge indicator displays the average overall status (sum of overall status that is divided by number of projects). The Gauge color is determined as follows:Green= On Track (< 40)Yellow= Minor Variance (>= 40 and < 90)Red Significant Variance >= 90
Database view and column: dwh_inv_status_report.overall_status
- Critical Status. This value is the percent of projects with significant variance, when overall status is greater than or equal to 90, grouped by project type.
- Schedule. The gauge needle displays the average schedule (sum of schedule that is divided by number of projects). The schedule is the number of days the project is late and considers the following items: - Whether a baseline exists - Project progress
If a baseline exists, then days late is calculated as project finish date minus baseline finish date. A positive number indicates that the project is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the project finish date is the same as the baseline finish date, then the project is considered late if it is not completed and it was due before today's date. In this case, the number of days late is calculated as today's date minus project finish date. If there is no baseline, then days late is calculated if the project is not completed and it was due before today's date. In this case, the number of days late is calculated as today's date minus project finish date. The Gauge color is determined as follows: Green= On Schedule (<= 0) Yellow= Between 1 and 10 Days Late (>0 and <=10) Red= More Than 10 Days Late (>10)
- Schedule Late. This value is the percent of projects with number of days the project is late greater than 10 days, grouped by project type.
- Alignment. The gauge needle displays the average business alignment (sum of business alignment that is divided by number of projects). The alignment indicator is the business alignment field on the project. The business alignment field is calculated as an average of the alignment factors that are completed on the project. Each of the alignment factors is ranked as low with a value of 25, medium with a value of 50, high with a value of 75, or very high with a value of 100. The Gauge color is determined as follows:Green= Good Alignment (>= 68)Yellow= Average Alignment (>=34 and <68)Red= Poor Alignment (< 34)
Database view and column: dwh_inv_investment.business_alignment
- High Alignment. This value is the percent of projects with good alignment, when business alignment is greater than or equal to 68, grouped by project type.
- Risk. The gauge needle displays the average risk (sum of risk that is divided by number of projects). The risk indicator is the risk field on the project. The risk field is calculated as the weighted average of the risk factors that are completed on the project. Each of the risk factors is ranked as low with a value of 0, medium with a value of 50, high with a value of 100. The Gauge color is determined as follows:Green= Low Risk (< 34)Yellow= Medium Risk (>=34 and <68)Red= High Risk (>=68)
Database view and column dwh_inv_investment.risk
- High Risk. This value is the percent of projects with high risk, when risk is greater than or equal to 68, grouped by project type.
Report Security Security is determined by project view rights.

NOTE Starting with Release 14.4, the default Status Report Status lookup values change from Minor Variance to Needs Help and from Significant Variance to At Risk. The On Track value remains the same. See the PMO Accelerator Release Notes in the 14.4 edition of the English documentation set.
KPIs by Project Type
The KPIs by Project Type report lists projects, which are grouped by project type. The report displays the key performance indicators of status, schedule, alignment, and risk with resource allocation and actual hours from the inception of the project. The following image displays the KPIs by Project Type report with key performance indicators.
Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options. - The report is grouped by the project type field on the project so in order for the groupings to be relevant, the projects should have this field completed. If the project does not have a project type defined it displays on the report, but it is in a section named Project Type Undefined. - The status stoplight is based on the most recent project status report so at least one status report must be completed on the project for this indicator to calculate. The status report with the greatest report date and a report status of final, or no value selected for report status, is considered the most recent. - The business alignment and risk rating properties on the project must be completed to calculate the alignment and risk indicators. - The project must have team members with allocation amounts to calculate resource allocations. - The project must have actual hours posted through timesheets, transaction entry, or imported into Clarity to calculate resource actuals.


Report Properties The following values list the report properties: Name: KPIs by Project Type Resource ID: CSK_PRJ_KPIsByProjectType Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/KPIs by Project Type Path: /ca_ppm/reports/project_management/CSK_PRJ_KPIsByProjectType Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select Query ypeKey_1

Project OBS Unit projectOBSUn Single-select Query itKey_1

Project Type projectTypeKey_1 Multiple-select Query

Project

Multiple-select Query

Manager projectManagerKey_1

Project projectKey_1

Multiple-select Query

Project Status projectStatusKey_1

Multiple-select Query

Include Inactive

Boolean

Projects? includeInactiveProjects

Include Inactive

Boolean

Resources? includeInactiveResources

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project Type projectTypeKey_1 No

Project

No

Manager projectManagerKey_1

Project projectKey_1

No

Project

No

Status projectStatusKey_1

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Include Inactive

No Checked

Resources? includeInactiveResources

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values The following values list the lookup values: Project Type: Major Project, Application Change, Infrastructure Deployment Parameter Explanations The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based upon the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Project Type parameter is associated to the Idea and Project Type lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays the project name, project manager, project start date, project finish date, status, schedule, alignment, risk, resource allocations, and resource actuals. Resource allocations and actuals include labor and equipment resources; expense and material resources are excluded. Programs and templates are excluded. The report is grouped by project type, which is an attribute on the project. The lookup that is associated to the project type attribute is a configurable lookup in Classic PPM. The lookup values can be added, modified, or deactivated for the purposes of managing projects in Classic PPM and grouping them in this report. This report contains the following calculations:
- Status. This value is the overall status field from the project status report. The overall status is a calculated field in Clarity that is the sum of the schedule status, scope status, and cost and effort status fields on the status report. Each of these fields is ranked as on track with a value of 10, minor variance with a value of 20, or significant variance with a value of 30. Status stoplight color is determined as follows:Green= On Track (< 40)Yellow= Minor Variance (>= 40 and < 90)Red= Significant Variance (>= 90)White= No overall status completed on the project status report Database view and column: dwh_inv_status_report.overall_status
- Schedule. The schedule stoplight is the number of days the project is late and considers the following items: - Whether a baseline exists - Project progress If a baseline exists, then days late is calculated as project finish date minus baseline finish date. A positive number indicates that the project is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the project finish date is the same as the baseline finish date, then the project is considered late if it is not completed and it was due before today's date. In this case, the number of days late is calculated as today's date minus project finish date. If there is no baseline, then days late is calculated if the project is not completed and it was due before today's date. In this case, the number of days late is calculated as today's date minus project finish date. Schedule stoplight color is determined as follows:Green= On Schedule (<= 0)Yellow= Between 1 and 10 Days Late (>0 and <=10)Red= More Than 10 Days Late (>10)
- Alignment. The alignment indicator is the business alignment field on the project. The business alignment field is calculated as an average of the alignment factors that are completed on the project. Each of the alignment factors is ranked as low with a value of 25, medium with a value of 50, high with a value of 75, or very high with a value of 100. Alignment stoplight color is determined as follows:Green= Good Alignment (>= 68)Yellow= Average Alignment (>= 34 and < 68)Red= Poor Alignment (< 34)White= No business alignment completed on the project Database view and column: dwh_inv_investment.business_alignment
- Risk The risk indicator is the risk field on the project. The risk field is calculated as the weighted average of the risk factors that are completed on the project. Each of the risk factors is ranked as low with a value of 0, medium with a value of 50, high with a value of 100. Risk stoplight color is determined as follows:Green= Low Risk (< 34)Yellow= Medium Risk (>= 34 and < 68)Red= High Risk (>= 68)White= No risk completed on the project Database view and column: dwh_inv_investment.risk
Report Security Security is determined by project view rights.
NOTE
Starting with Release 14.4, the default Status Report Status lookup values change from Minor Variance to Needs Help and from Significant Variance to At Risk. The On Track value remains the same. See the PMO Accelerator Release Notes in the 14.4 edition of the English documentation set.

Top 50 Project Watchlist
The Top 50 Project Watchlist report displays the 50 projects with the highest resource allocation amounts in your organization. The report shows a dashboard with gauges followed by a table or list of projects. The report provides visibility into the key performance indicators of status, schedule, alignment, risk, issues and change requests. There are also pie charts that show the distribution of issues, risks, and change requests that are based on priority. There are four parameter check boxes for critical status, scheduled late, high alignment, and high risk that allow you to quickly filter the list to view the projects of most interest. For example, you can quickly view any projects that are highly aligned to the business that are scheduled late.
TIP Subtle design changes were introduced to this report in Clarity Releases 14.4 and 15.3. See the notes at the bottom of this page. The following image displays an example of the Top 50 Project Watchlist report:
This report allows you to drill down to the Project Status Detail report, by clicking on a project name, to see more information about the project status. The following image displays the Project Status Detail report.

Report Prerequisites Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The status is based on the most recent project status report so at least one status report must be completed on the projects for this indicator to calculate. The status report with the greatest report date and a report status of final, or no value selected for report status, is considered the most recent.
- The business alignment and risk rating properties on the projects must be completed to calculate the alignment and risk indicators.
- Projects must have team members with allocation amounts to calculate resource allocations.
Report Properties
The following values list the report properties:
Name: Top 50 Project Watchlist
Resource ID: CSK_PRJ_Top50WatchList
Description: Project Management (PMO Accelerator)
Folder: Clarity /Reports/Project Management/Top 50 Project Watchlist
Path: /ca_ppm/reports/project_management/CSK_PRJ_Top50WatchList
Data Source: Clarity Data Warehouse Bean Data Source
Report Parameter Options
The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select query ypeKey_1

Project OBS Unit projectOBSUn Single-select query itKey_1

Project Type projectTypeKey_1 Multiple-select query

Project

Multiple-select query

Manager projectManagerKey_1

Project Status projectStatusKey_1

Multiple-select query

Graph 1

Single-select list of values

Graph 2

Single-select list of values

Critical Status criticalStatus

Boolean

Scheduled Late scheduledLate Boolean

High Alignment highAlignment Boolean

High Risk highRisk

Boolean

Include Inactive

Boolean

Projects? includeInactiveProjects

Include Inactive

Boolean

Resources? includeInactiveResources

Database Schema dwhDBSchema

Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project Type projectTypeKey_1 No

Project

No

Manager projectManagerKey_1

Project

No

Status projectStatusKey_1

Not applicable

Yes Issues

Not applicable

Yes Risks

Critical Status criticalStatus

No Unchecked

Scheduled Late scheduledLate No Unchecked

High Alignment highAlignment No Unchecked

High Risk highRisk

No Unchecked

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Include Inactive

No Checked

Resources? includeInactiveResources

Not applicable

Yes Passed through Classic PPM


Prompt Text Parameter Name UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Type


Input Control Name Input Control Resource ID
Not applicable
Not applicable
Not applicable

Mandatory Default Value
Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Project Type: Major Project, Application Change, Infrastructure Deployment
Parameter Explanations
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Dashboard Filter Explanations
The following list describes the dashboard filters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based upon the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select. These results are then ranked by the allocation amounts on each project and the top 50 projects, with the greatest number of allocation hours, are displayed.
- The Project Type parameter is associated to the Idea and Project Type lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
Report Fields and Calculations: The report includes gauge components showing KPI average values of status, schedule, alignment, and risk. The table view lists the projects with the highest resource allocations and can be narrowed down by checking projects with critical status, schedule late, high alignment and high risk, isolated or combined. The issue, risk and change request priority distribution is represented in two pie charts, which can also be filtered to display different results. Programs and templates are excluded. This report contains the following calculations:
- Status. The gauge needle displays the average overall status (sum of overall status that is divided by number of projects). This is the overall status field from the project status report. The overall status is a calculated field in Classic PPM that is the sum of the schedule status, scope status, and cost and effort status fields on the status report. Each of these fields is ranked as on track with a value of 10, minor variance with a value of 20, or significant variance with a value of 30. The gauge indicator displays the average overall status (sum of overall status that is divided by number of projects). The Gauge color is determined as follows:Green= On Track (< 40)Yellow= Minor Variance (>=40 and <90)Red= Significant Variance (>=90) Database view and column: dwh_inv_status_report.overall_status
- Critical Status. Displays projects with significant variance, when overall status is greater than or equal to 90. - Schedule. The gauge needle displays the average schedule (sum of schedule that is divided by number of projects).
The schedule is the number of days the project is late and considers the following items: - Whether or not a baseline exists - Project progress If a baseline exists, then days late is calculated as project finish date minus baseline finish date. A positive number indicates that the project is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the project finish date is the same as the baseline finish date, then the project is considered late if it is not completed and it was due before today's date. In this case, the number of days late


is calculated as today's date minus project finish date. If there is no baseline, then days late is calculated if the project is not completed and it was due before today's date. In this case, the number of days late is calculated as today's date minus project finish date. The Gauge color is determined as follows:Green= On Schedule (<=0)Yellow= Between 1 and 10 Days Late (>0 and <=10)Red= More than 10 Days Late (>10) Database view and column: dwh_inv_investment.days_late - Schedule Late. Displays projects with number of days the project is late greater than 10 days. - Alignment. The gauge needle displays the average business alignment (sum of business alignment that is divided by number of projects). The alignment indicator is the business alignment field on the project. The business alignment field is calculated as an average of the alignment factors that are completed on the project. Each of the alignment factors is ranked as low with a value of 25, medium with a value of 50, high with a value of 75, or very high with a value of 100. The Gauge color is determined as follows:Green= Good Alignment (>=68)Yellow= Average Alignment (>=34 and <68)Red= Poor Alignment (< 34) Database view and column: dwh_inv_investment.business_alignment - High Alignment. Displays projects with good alignment, when business alignment is greater than or equal to 68. - Risk. The gauge needle displays the average risk (sum of risk that is divided by number of projects). The risk indicator is the risk field on the project. The risk field is calculated as the weighted average of the risk factors that are completed on the project. Each of the risk factors is ranked as low with a value of 0, medium with a value of 50, high with a value of 100. The Gauge color is determined as follows:Green= Low Risk (< 34)Yellow= Medium Risk (>=34 and <68)Red= High Risk (>=68) Database view and column: dwh_inv_investment.risk - High Risk. Displays projects with high risk, when risk is greater than or equal to 68. Report Security Security is determined by project view rights.
NOTE
1. Starting with Release 14.4, the default Status Report Status lookup values change from Minor Variance to Needs Help and from Significant Variance to At Risk. The On Track value remains the same. See the PMO Accelerator Release Notes in the 14.4 edition of the English documentation set.
2. Starting with Release 15.3, the Alignment gauge orientation is flipped horizontally so that all green scores point in the same direction (to the left) while all red scores point to the right.
Project Portfolio Summary
The Project Portfolio Summary report includes three charts displaying the percentage of budget by project type, percentage of budget by work status, and a comparison of budgeted compared to planned cost by grouping option. The report also includes a detail listing of projects with their status, alignment, risk, budget cost, planned cost, and variance. The comparison chart and detail listing have the following group by options: Portfolio Category, Goal, Project Type, Project Status, Sponsor, and OBS Level. The following image displays the Project Portfolio Summary report with the portfolio summary charts.

The following image displays the Project Portfolio Summary report with the portfolio summary detail.
Report Prerequisites Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The report pie charts are grouped by the project type and work status fields on the project. Complete the project type and work status fields for a project for the pie charts to be relevant. The column chart is grouped according to the Group By parameter, which is explained in the parameter section.
- The report displays projects that start or finish within the date range that is entered in the Portfolio Start Date and Portfolio Finish Date parameters. Specifically, the project start date must be the same as or before the date entered in the Portfolio Finish Date parameter. The project finish date must be the same as or after the date entered in the Portfolio Start Date parameter.
- The business alignment and risk rating properties on the project must be completed to calculate the alignment and risk indicators.
- The financial summary properties on the project must have budgeted cost and planned cost amounts that are entered to display the financial amounts and variances in the report. If the project has a detailed budget or cost plan that is created under the financial plans tab of the project, then the budgeted cost and planned cost amounts on the financial summary properties are read-only and set according to the amounts in the detailed financial plan. In this case, the approved budget amount or cost plan amount for the plan of record displays on the financial summary properties and in the report.
Report Properties
The following values list the report properties:
Name: Project Portfolio Summary
Resource ID: CSK_PRJ_PortfolioSummary
Description: Project Management (PMO Accelerator)
Folder: Clarity /Reports/Project Management/Project Portfolio Summary
Path: /ca_ppm/reports/project_management/CSK_PRJ_PortfolioSummary
Data Source: Clarity Data Warehouse Bean Data Source
Report Parameter Options
The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBSTypeKey_1
Project OBS Unit projectOBSUnitKey_1
Portfolio Category 1 portfolioCategoryKey_1
Portfolio Category 2 portfolioCategoryKey_2
Portfolio Category 3 portfolioCategoryKey_3
Portfolio Category 4 portfolioCategoryKey_4
Goal goalKey_1
Project Type projectTypeKey_1

Single-select query Single-select query Single-select query Single-select query Single-select query Single-select query Multiple-select query Multiple-select query

Input Control Name Input Control Resource ID
Project OBS Type projectOBSTypeKey_1
Project OBS Unit projectOBSUnitKey_1
Portfolio Category 1 portfolioCategoryKey_1
Portfolio Category 2 portfolioCategoryKey_2
Portfolio Category 3 portfolioCategoryKey_3
Portfolio Category 4 portfolioCategoryKey_4
Goal goalKey_1
Project Type projectTypeKey_1

Mandatory Default Value No No No No No No No No


Prompt Text Parameter Name

Type

Sponsor sponsorKey_1
Project projectKey_1
Project Status projectStatusKey_1
Work Status workStatusKey_1
Portfolio Start Date portfolioStartDate
Portfolio Finish Date portfolioFinishDate
Variance % Yellow Threshold variancePctYellowThreshold
Variance % Red Threshold variancePctRedThreshold
Group By groupCategoryOBSGoal
Include Inactive Projects? includeInactiveProjects
Show Graph? showGraph
Database Schema dwhDBSchema

Multiple-select query Multiple-select query Multiple-select query
Multiple-select query Single Value Date
Single Value Date
Single Value Number
Single Value Number
Single-select List of Values
Boolean
Boolean Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID
Sponsor businessOwnerKey_1
Project projectKey_1
Project Status projectStatusKey_1
Work Status workStatusKey_1
Portfolio Start Date portfolioStartDate
Portfolio Finish Date portfolioFinishDate
Variance % Yellow Threshold variancePctYellowThreshold
Variance % Red Threshold variancePctRedThreshold
Group By groupCategoryOBSGoal
Include Inactive Projects? includeInactiveProjects
Show Graph? showGraph
Not applicable

Mandatory Default Value No No No
No Yes Start of Current Year
Yes End of Current Year
No 0
No 0
Yes No Grouping
No Unchecked
No Checked Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values The following values list the lookup values: Goal: Cost Avoidance, Cost Reduction, Grow the Business, Infrastructure Improvement, Maintain the Business Project Type: Major Project, Application Change, Infrastructure Deployment Work Status: Requested, Active, On Hold, Cancelled, Complete Group By: No Grouping, Portfolio Category 1-4, Goal, Project Type, Project Status, Sponsor, OBS Level 1-10 Parameter Explanations The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based upon the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Portfolio Category 1-4 parameters are associated to the Portfolio Category 1-4 lookups in Classic PPM. These lookups are configurable so lookup values can be added, modified, or deactivated.
- The Goal parameter is associated to the Investment Goal lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Project Type parameter is associated to the Idea and Project Type lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Portfolio Start Date parameter determines which projects display in the report. The project finish date must be the same as or after the date entered in the Portfolio Start Date parameter for the project to display in the report.
- The Portfolio Finish Date parameter determines which projects display in the report. The project start date must be the same as or before the date entered in the Portfolio Finish Date parameter for the project to display in the report.
- The Variance % Yellow and Variance % Red Threshold parameters allow you to control when the background color changes to yellow and red, respectively, for the % Variance column in the report. The background color changes for both positive and negative variances. If the % Variance in the report is less than the Variance % Yellow Threshold, then there is no background color. If the % Variance is greater than or equal to the Variance % Yellow Threshold, then it is yellow until it reaches the Variance % Red Threshold entered as a parameter. Amounts that are greater than or equal to the Variance % Red Threshold is red. In the preceding screen capture, the Variance % Yellow Threshold parameter that is entered when running the report is 10% and the Variance % Red Threshold is 15%. Entering these parameter values means that the % Variance turns yellow when it is greater than or equal a positive or negative 10% variance. It turns red when it is greater than or equal to a positive or negative 15% variance.
- The report has a Group By parameter that allows you to control how the report is grouped. This parameter groups the budgeted and planned cost column chart. It also groups the projects in the body of the report. The following group options are available: - No Grouping. This option does not group the column chart or projects so you can select this value if you do not want to group the report. - Portfolio Category 1-4. This option groups the column chart and projects by portfolio category. The portfolio category fields are associated to lookups that do not include any values and can be configured to support your categorizations. The portfolio categories are configurable lookups so values can be added, modified, or deactivated. - Goal. This option groups the column chart and projects by goal. The values for goal are: Cost Avoidance, Cost Reduction, Grow the Business, Infrastructure Improvement, Maintain the Business. The goal is a configurable lookup so values can be added, modified, or deactivated. - Project Type. This option groups the column chart and projects by project type. The values for project type are: Major Project, Application Change, and Infrastructure Deployment. The project type is a configurable lookup so values can be added, modified, or deactivated. - Project Status. This option groups the column chart and projects by status. - Sponsor. This option groups the column chart and projects by sponsor. - OBS Level 1-10. This option groups the column chart and projects by OBS level and requires that you select a unit in the project OBS parameter to group by an OBS level. The project OBS parameter and grouping by an OBS level work with one another. The project OBS parameter determines which OBS you group by when you select a group by level. You can group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS supported in Classic PPM. OBS level 1 is the top level in the hierarchy and OBS level 10 is bottom level in the hierarchy. When you group by an OBS level, the projects that are attached to OBS units at the level you select and any units below the level you select are rolled up to the group by level of the report. If you group by an OBS level that is lower in the hierarchy, then the report groups the projects by this level (for example, OBS Level 4). If projects are associated to units above level 4 (for example, projects are attached to levels 2 and 3), then the

projects that are associated to units higher in the hierarchy display in the report in an Undefined grouping. The Undefined grouping indicates that there is no OBS unit that is defined for the project at the level by which you are grouping. f you group by an OBS level but you do not select a unit in the project OBS parameter, then the report returns results. However, the report does not group by an OBS level because it relies on the project OBS parameter to determine which OBS to use for grouping.
- The Show Graph parameter controls whether the pie charts and column chart display in the report. If the parameter is checked, the charts display on the first page of the report. If the parameter is not checked, the charts do not display.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
If the report is grouped by project status, then the report displays the following columns: project name, sponsor, work status, alignment, risk, budget cost, planned cost, variance, and % variance. If the report is grouped by any other option, then the report displays the following columns: project name, status, work status, alignment, risk, budget cost, planned cost, variance, and % variance. When the show graph parameter is checked, the report also includes two pie charts and a column chart. The pie charts display the percentage of budget cost, grouped by project type and work status. The column chart displays a comparison of budgeted cost to planned cost, aggregated by the group by parameter option that is selected when running the report. Programs and templates are excluded. This report contains the following calculations:
- Alignment. The alignment indicator is the business alignment field on the project. The business alignment field is calculated as an average of the alignment factors that are completed on the project. Each of the alignment factors is ranked as low with a value of 25, medium with a value of 50, high with a value of 75, or very high with a value of 100. Alignment stoplight color is determined as follows: Green= Good Alignment (>= 68) Yellow= Average Alignment (>=34 and <68) Red= Poor Alignment (< 34) Gray= No business alignment that is completed on the project Database view and column: dwh_inv_investment.business_alignment
- Risk. The risk indicator is the risk field on the project. The risk field is calculated as the weighted average of the risk factors that are completed on the project. Each of the risk factors is ranked as low with a value of 0, medium with a value of 50, high with a value of 100. Risk stoplight color is determined as follows: Green= Low Risk (<34) Yellow= Medium Risk (>=34 and <68) Red= High Risk (>= 68) Gray= No risk that is completed on the project Database view and column: dwh_inv_investment.risk
- Variance. The variance field is the difference between budget cost and planned cost amounts. Formula: Budget Cost - Planned Cost
- % Variance. The % variance field is the percentage of variance between budget cost and planned cost amounts. % Variance background color is determined as follows: Yellow. The % Variance is greater than or equal to the Variance % Yellow Threshold entered as a parameter. It is yellow until it reaches the amount that is entered as the Variance % Red Threshold. The background color applies to both positive and negative variances. Red. The % Variance is greater than or equal to the Variance % Red Threshold entered as a parameter. The background color applies to both positive and negative variances. Formula: ((Budget Cost - Planned Cost) / Budget Cost) * 100
Report Security: Security is determined by project view rights.
Project Planning Schedule
The Project Planning Schedule report lists projects and their Gantt schedule covering twelve time periods, which might be week, month, quarter, or year. The report might be run with or without a scenario that is applied and grouped by several different options including: Portfolio Category, Project Type, Project Status, Work Status, Stage, Project Manager, Sponsor, and OBS Level. There is also an option when running the report to control the colors that are displayed in the Gantt schedule with portfolio category, project type, or work status.


WARNING
This report runs numerous queries to retrieve the data necessary to populate the report. Avoid running this report without parameters and try to limit the results to reasonable amounts of data. Else, you might experience performance issues.
Report Prerequisites
The project does not have any prerequisites to display in the report.
Report Properties
The following values list the report properties:
Name: Project Planning Schedule Resource ID: CSK_PRJ_PlanningSchedule Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project Planning Schedule Path: /ca_ppm/reports/ project_management/CSK_PRJ_PlanningSchedule Data Source: Clarity Bean Data Source
Report Parameter Options The following table lists the report parameter options:

Prompt Text Parameter Name

Type

Project OBS Type projectOBSTypeKey_1

Single-select Query

Project OBS Unit projectOBSUnitKey_1

Single-select Query

Project Manager projectManagerKey_1

Multiple-select Query

Project projectKey_1

Multiple-select Query

Scenario scenarioKey

Single-select Query

Project Status projectStatusKey_1

Multiple-select Query

Work Status workStatusKey_1

Multiple-select Query

Gantt Color ganttColor

Single-select List of Values

Gantt Start Date ganttStartDate

Single Value Date

Period Type periodTypeAll

Single-select List of Values

Group By

Single-select

groupCategoryOBSWorkStatus List of Values

Only Include Projects Within Boolean Gantt Date Range?
onlyIncludeProjectsWithinGanttDateRange

Include Inactive Projects? includeInactiveProjects

Boolean

Database Schema ppmDBSchema

Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type

No

projectOBSTypeKey_1

Project OBS Unit

No

projectOBSUnitKey_1

Project Manager

No

projectManagerKey_1

Project

No

projectKey_1

Scenario

No

scenarioKey

Project Status

No

projectStatusKey_1

Work Status

No

workStatusKey_1

Gantt Color

No

ganttColor

Gantt Start Date ganttStartDate

Yes Start of Current Month

Period Type periodTypeAll

Yes Month

Group By

Yes

groupCategoryOBSWorkStatus No Grouping

Only Include Projects Within No

Gantt Date Range?

Unchecked

onlyIncludeProjectsWithinGanttDateRange

Include Inactive Projects? includeInactiveProjects

No Unchecked

Not applicable

Yes

Passed through Classic PPM


Prompt Text Parameter Name

UI Theme ppmUserUITheme

Hidden

Language ppmUserLanguage

Hidden

User ID ppmUser

Hidden

Type


Input Control Name Input Control Resource ID
Not applicable
Not applicable
Not applicable

Mandatory Default Value
Yes Passed through Classic PPM Yes Passed through Classic PPM Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Work Status: Requested, Active, On Hold, Cancelled, Complete Gantt Color: Portfolio Category 1-4, Project Type, Work Status Period Type: Week, Month, Quarter, Year Group By: No Grouping, Portfolio Category 1-4, Project Type, Project Status, Work Status, Stage, Project Manager, Sponsor, OBS Level 1-10
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based on the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Scenario parameter displays the scenarios to which you have security access. Scenarios might be created from the scenario widget in the upper right corner of the project properties or resource planning tabs (Home/Resource Management-Resource Planning). If a Scenario parameter is selected when running the report, then the Gantt schedule is yellow for any projects with start or finish dates that are modified in the scenario and blue for the remaining projects.
- The Work Status parameter is associated to the Work Status lookup in Clarity. This lookup is configurable so lookup values might be added, modified, or deactivated.
- The report has a Gantt Color parameter that allows you to determine how colors are displayed in the Gantt schedule. If no Gantt Color is selected, then the Gantt schedule is blue. If a Gantt Color parameter is selected when running the report, then the attribute that is selected determines the color of the Gantt schedule. The attribute must have a color display mapping defined (Administration/StudioObjects) or the Gantt is white. If a Gantt Color is selected, it takes precedence over the Scenario parameter and the Scenario parameter that is described earlier does not determine the Gantt color. The attributes available for the Gantt Color parameter are:
Portfolio Category 1-4. The Gantt color is based on the display mappings of the Portfolio Category attributes. The Portfolio Category attributes are configurable attributes in the Investment object. Project Type. The Gantt color is based on the display mappings of the Project Type attribute. The Project Type attribute is a configurable attribute in the Project object. Work Status. The Gantt color is based on the display mappings of the Work Status attribute. The Work Status attribute is a configurable attribute in the Project object.
- The report has a Period Type parameter that allows you to change the display periods of the Gantt.
Week. The Gantt displays twelve weeks. Each week starts on the day of the week defined in the First Day of Work Week field in Classic PPM (Administration/Project Management-Settings).
Month. The Gantt displays twelve months.


Quarter. The Gantt displays twelve quarters. Year. The Gantt displays twelve years.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available:
No Grouping. This option does not group projects so you should select this value if you do not want to group the report. Portfolio Category 1-4. This option groups the projects by portfolio category. The portfolio category fields are associated to lookups that do not include any values and should be configured to support your categorizations. The portfolio categories are configurable lookups so values might be added, modified, or deactivated.
Project Type. This option groups the projects by the project type. The values for project type are: Major Project, Application Change, and Infrastructure Deployment. The project type is a configurable lookup so values may be added, modified, or deactivated.
Project Status. This option groups the projects by project status.
Work Status. This option groups the projects by work status. The values for work status are: Requested, Active, On Hold, Cancelled, and Complete. The work status is a configurable lookup so values might be added, modified, or deactivated.
Stage. This option groups the projects by stage. The stage is a configurable lookup so values might be added, modified, or deactivated. You can find the stage lookup by filtering on Lookup Name = 'Investment Type' or Source = 'Static Dependent List' (Administration/Data Administration-Lookups).
Project Manager. This option groups the projects by project manager.
Sponsor. This option groups the projects by sponsor.
OBS Level 1-10. This option groups the projects by OBS level and requires that you select a unit in the project OBS parameter to group by an OBS level. The project OBS parameter and grouping by an OBS level work with one another. The project OBS parameter determines which OBS you group by when you select a group by level. You might group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS supported in Clarity. OBS level 1 is the top level in the hierarchy and OBS level 10 is bottom level in the hierarchy. When you group by an OBS level, the projects that are attached to OBS units at the level you select and any units below the level you select are rolled up to the group by level of the report. If you group by an OBS level that is lower in the hierarchy, then the report groups the projects by this level (for example, OBS Level 4). If projects are associated to units above level 4 (for example, projects are attached to levels 2 and 3), then the projects that are associated to units higher in the hierarchy display in the report in an Undefined grouping. The Undefined grouping indicates that there is no OBS unit that is defined for the project the level by which you are grouping. If you group by an OBS level but you do not select a unit in the project OBS parameter, then the report returns results. However, it will not group by an OBS level because it relies on the project OBS parameter to determine which OBS to use for grouping.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays the project name, project start date, project finish date, and a twelve period Gantt schedule. If a scenario is selected when running the report, then the report displays the following columns: project name, scenario start date, original start date, scenario finish date, original finish date and a twelve period Gantt schedule. The scenario start and finish dates are the actual start and finish dates for projects that are not modified in the scenario and the 'what-if' start and finish dates for projects that are modified in the scenario. The original start and finish dates are the project dates before being modified through the scenario. Original dates only display if the dates have been modified in the scenario. Programs and templates are excluded.The Gantt schedule default color is blue. If a Scenario parameter is selected when running the report, then the Gantt schedule is yellow for any projects with start or finish dates that are modified in the scenario and blue for the remaining projects. If a Gantt Color parameter is selected when running the report, then the attribute that is selected determines the color of the Gantt schedule. The attribute must have a color display mapping defined (Administration/Studio-Objects) or the Gantt is white. If a Gantt Color is selected, it takes precedence over the Scenario parameter and the Scenario parameter does not determine the Gantt color.


Report Security Security is determined by project view rights.


Project Schedule
The Project Schedule report lists projects, and any subprojects, with their work breakdown structure and resource assignments. You control the level of detail for the report--project, phase, task, or assignment. The report also includes a Gantt chart covering six time periods, which might be week, month, quarter, or year.
The following image displays a Project Schedule report that shows a project, phases, and tasks.

Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options. - For the WBS and resources to display in the report, the project must have tasks with resource assignments in the Gantt. Report Definition The following values list the report properties: Name: Project Schedule Resource ID: CSK_PRJ_ProjectSchedule Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project Schedule Path: /ca_ppm/reports/project_management/CSK_PRJ_ProjectSchedule


Data Source: Clarity Data Warehouse Bean Data Source Report Parameters The following table lists the report parameter options:

Prompt Text Parameter Name

Type

Project OBS Type projectOBSTypeKey_1

Single-select Query

Project OBS Unit projectOBSUnitKey_1

Single-select Query

Project Manager projectManagerKey_1

Multiple-select Query

Project projectKey_1

Multiple-select Query

Project Status projectStatusKey_1

Multiple-select Query

Work Status workStatusKey_1

Multiple-select Query

Detail Level detailLevel

Single-select List of Values

Gantt Start Date ganttStartDate

Single Value Date

Period Type periodTypeAll

Single-select List of Values

Only Include Tasks

Boolean

Within Gantt Date Range?

onlyIncludeTasksWithinGanttDateRange

Include Inactive Projects? includeInactiveProjects

Boolean

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme

Hidden

Language ppmUserLanguage

Hidden

User ID ppmUser

Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type

No

projectOBSTypeKey_1

Project OBS Unit

No

projectOBSUnitKey_1

Project Manager

No

projectManagerKey_1

Project

No

projectKey_1

Project Status

No

projectStatusKey_1

Work Status

No

workStatusKey_1

Detail Level detailLevel

Yes Task

Gantt Start Date ganttStartDate

Yes Start of Current Month

Period Type periodTypeAll

Yes Month

Only Include Tasks

No

Within Gantt Date Range?

Unchecked

onlyIncludeTasksWithinGanttDateRange

Include Inactive Projects? includeInactiveProjects

No Unchecked

Not applicable

Yes

Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values Work Status: Requested, Active, On Hold, Cancelled, Complete Detail Level: Project, Phase, Task, Assignment Period Type: Week, Month, Quarter, Year Parameter Explanations


The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based on the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Work Status parameter is associated to the Work Status lookup in Clarity. This lookup is configurable so lookup values might be added, modified, or deactivated.
- The report has a Detail Level parameter that allows you to control how much of the work breakdown structure you display in the report. The Detail Level parameter works as follows:
Project. Projects and subprojects display.
Phase. Projects, subprojects, and summary tasks at the top level of the work breakdown structure display. Summary tasks are tasks which have at least one child task or subproject in the work breakdown structure.
Task. Projects, subprojects, summary tasks, and detail tasks display. Summary tasks are tasks that have at least one child task or subproject in the work breakdown structure. Detail tasks are tasks that do not have any child tasks or subprojects.
Assignment. Projects, subprojects, summary tasks, detail tasks, and resource assignments on detail tasks display.
- The report has a Period Type parameter that allows you to change the display periods of the Gantt.
Week. The Gantt displays six weeks. Each week starts on the day of the week that is defined in the First Day of Work Week field in Clarity (Administration/Project Management-Settings).
Month. The Gantt displays six months. Quarter.
The Gantt displays six quarters. Year. The Gantt displays six years.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays the project name, work breakdown structure phase or task name, assigned resource name, project start date, project finish date, schedule % indicator, days late, and a six period Gantt schedule. The Gantt color is determined by the schedule % for the project, phases, and tasks. The Gantt color at the assignment level is gray because schedule % is not calculated at the assignment level.
If the project has a subproject, then the subproject will display in the report and is identified with a subproject icon to the right of the subproject name. The work breakdown structure and assigned resources of the subproject also display. Programs and templates are excluded.
This report contains the following calculations:
- Schedule %
Project calculation: Displays a stoplight indicating days late as a percentage of the project timeframe, which is finish date minus start date. The calculation takes into account the project progress and baseline (if a baseline exists). The color of the stoplight indicates if the project is on schedule or late.
Task calculation: Displays a stoplight indicating days late as a percentage of the summary task or project timeframe, which is finish date minus start date. If the task has a parent task in the WBS, then the parent task timeframe is used in the calculation. If the task is at the top level of the WBS and does not have a parent task, then the project timeframe is used in the calculation. The task calculation takes into account the task status and baseline (if a baseline exists). The color of the stoplight indicates if the task is on schedule or late.

Assignment calculation: There is no calculation for resource assignments so the schedule % stoplight does not display for resources. Schedule % stoplight and Gantt bar color: Green= On schedule (<=0)Yellow= Between 1 and 10 % late (>0 and <=10)Red= More than 10 % late (>10)Gray = Assignment level Gantt bar is gray - Days Late: Displays the number of days late considering the following: - Whether a baseline exists - Project progress or task status If a baseline exists, days late is calculated as project or task finish date minus baseline finish date. A positive number indicates that the project or task is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the project or task finish date is the same as the baseline finish date, then the project or task is considered late if it is not completed and it was due before today's date. In this case, days late is calculated as today's date minus project or task finish date. If there is no baseline, then days late is calculated if the project or task is not completed and it was due before today's date. In this case, days late is calculated as today's date minus project or task finish date. There is no calculation for resource assignments so the days late is not populated. Schedule stoplight color: Green= On schedule (<=0)Yellow= Between 1 and 10 days late (>0 and <=10)Red= More than 10 days late (>10) Report Security Security is determined by project view rights.
Project Cost and Effort
The Project Cost and Effort report lists projects, with their work breakdown structure and resource assignments. If the project has subprojects, the subprojects also display. There is an option when running the report to control the level that is displayed in the report. The levels are: project, phase, task, or assignment. The following examples show two of those options. The report displays baseline, actual, EAC, and projected cost and effort variance amounts. The following image displays the Project Cost and Effort report with project displayed at the task level.

The following image displays the Project Cost and Effort report with master project with subprojects displayed at the phase level.
WARNING This report runs numerous queries in order to retrieve the data needed to populate the report and may result in many pages of data being displayed if filters are not applied. You should avoid running this report wide open so that only reasonable amounts of data are displayed. If you do not do this, then you may experience performance issues. Report Prerequisites Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The project does not have any prerequisites to display in the report. For the cost and effort amounts to display data in the report, the project must have at least one task and resource assignment.
- There must be a rate matrix created (Administration/Finance-Manage Matrix) and associated as a system default rate matrix (Administration/Finance-Setup/Defaults/Project Transaction Entry Defaults) or a project-specific rate matrix for calculation of cost amounts.
- The project must have a baseline for BAC Cost, Projected Cost Variance, Projected Cost Variance %, BAC, Projected Effort Variance, and Projected Effort Variance % to display data in the report.
- The project, phase, and task level cost amounts are dependent upon running the Update Cost Totals job. This job is available in the Actions pull-down on the task list or baseline list. The Update Cost Totals job runs the following items: - Runtime extraction of rates (calculates rates that are based on the matrix but does not populate the data mart rate table), - Update % Complete job, and - Update Earned Value and Cost Totals job. If you want to update costs across several projects instead of updating costs for only one project, run the Update Earned Value and Cost Totals job from the Reports and Jobs menu. The Update Earned Value and Cost Totals job from the menu is the same as the Update Cost Totals job in the Actions pull-down, except it updates all the projects meeting the parameter criteria when run instead of updating only one project.
- The assignment level EAC cost, Projected Cost Variance, and Projected Cost Variance % are dependent upon the data mart rate table (nbi_proj_res_rates_and_costs) being populated to calculate the ETC cost portion of EAC cost. This table is populated by running the Rate Matrix Extraction job.
Report Properties
The following values list the report properties:
Name: Project Cost and Effort
Resource ID: CSK_PRJ_ProjectCostAndEffort
Description: Project Management (PMO Accelerator)
Folder: Clarity /Reports/Project Management/Project Cost and Effort
Path: /ca_ppm/reports/project_management/CSK_PRJ_ProjectCostAndEffort
Data Source: Clarity Data Warehouse Bean Data Source
Report Parameter Options
The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select query ypeKey_1

Project OBS Unit projectOBSUn Single-select query itKey_1

Project

Multiple-select query

Manager projectManagerKey_1

Project projectKey_1

Multiple-select query

Project Status projectStatusKey_1

Multiple-select query

Work Status workStatusKey_1 Multiple-select query

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project

No

Manager projectManagerKey_1

Project projectKey_1

No

Project

No

Status projectStatusKey_1

Work Status workStatusKey_1 No


Prompt Text Parameter Name

Type

Detail Level detailLevel

Single-select list of values

Include Inactive

Boolean

Projects? includeInactiveProjects

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Detail Level detailLevel

Yes Assignment

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Work Status: Requested, Active, On Hold, Cancelled, Complete
Detail Level: Project, Phase, Task, Assignment
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based upon the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Work Status parameter is associated to the Work Status lookup in Clarity. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The report has a Detail Level parameter that allows you to control how much of the work breakdown structure you display in the report. The Detail Level parameter works as follows: - Project. Projects and subprojects display. - Phase. Projects, subprojects, and summary tasks at the top level of the work breakdown structure display. Summary tasks are tasks which have at least one child task or subproject in the work breakdown structure. - Task. Projects, subprojects, summary tasks, and detail tasks display. Summary tasks are tasks that have at least one child task or subproject in the work breakdown structure. Detail tasks are tasks that do not have any child tasks or subprojects. - Assignments. Projects, subprojects, summary tasks, detail tasks, and resource assignments on detail tasks display.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays the project name, work breakdown structure phase or task name, assigned resource name, cost amounts, and effort amounts. The cost and effort amounts include: BAC, actual, EAC, projected variance, and projected variance %. The cost amounts at the project, phase, task, and assignment level include labor and non-labor. The effort amounts at the project, phase, and task level include labor only. The effort amounts at the assignment level include labor and non-labor. This is consistent with how Classic PPM displays these amounts on the project, task, and


assignment properties. If the project has a subproject, then the subproject displays in the report and the subproject is identified with a subproject icon to the right of the subproject name. The work breakdown structure and assigned resources of the subproject also display. Programs and templates are excluded. This report contains the following calculations: - Projected Cost Variance. The projected cost variance field is on the project and displays the variance between the
EAC cost and baseline cost. Formula: ((ETC Cost + Actual Cost (ACWP)) - BAC Cost) Database view and column: dwh_inv_summary_facts.eac_base_cost_var - Projected Cost Variance %. The projected cost variance % field is on the project and displays a stoplight indicating the projected cost variance as a percentage of BAC cost. Projected Cost Variance % stoplight color is determined as follows: Green. The EAC cost is less than or equal to the baseline. Yellow. The EAC cost is between one and ten percent over baseline. Red. The EAC cost is more than ten percent over baseline. Gray No baseline data exists. Formula: (((ETC Cost + Actual Cost (ACWP)) - BAC Cost) / BAC Cost) * 100 Database view and column: dwh_inv_summary_facts.eac_base_cost_pct Projected Effort Variance. The projected effort variance field is on the project and displays the variance between the EAC effort and baseline effort. Formula: (EAC Effort - BAC Effort) Database view and column: dwh_inv_summary_facts.eac_base_hours_var - Projected Effort Variance %. The projected effort variance % field is on the project and displays a stoplight indicating the projected effort variance as a percentage of BAC effort. Projected Effort Variance % stoplight color is determined as follows: Green. The EAC effort is less than or equal to the baseline. Yellow. The EAC effort is between one and ten percent over baseline. Red. The EAC effort is more than ten percent over baseline. Gray. No baseline data exists. Formula: ((EAC Effort - BAC Effort) / BAC Effort) * 100 Database view and column: dwh_inv_summary_facts.eac_base_hours_pct Report Security: Security is determined by project view rights.
Project Task Dependencies
The Project Task Dependencies report displays projects and their inter-project task dependency relationships. This gives you visibility between your project and dependent tasks in other projects. The report displays predecessor and successor dependencies as a diagram, and a detailed list. The diagram displays a maximum of five predecessor and five successor inter-project dependencies. The detailed list does not have this limit and shows all inter-project task dependencies. The report contains project summary and task information, including a dependency schedule stoplight and dependency type. The report also includes a checkmark icon indicating that the task or dependent task is on the critical path. The following image displays the Project Task Dependencies report.
Report Prerequisites


Verify that you have completed the following prerequisites before you run this report:
- The project must have at least one task or milestone with a dependency to a task or milestone in another project to display in the report.
- For the project summary section, the project must have budgeted or planned cost that is entered on the financial summary of the project. If the project has a detailed budget or cost plan, then the approved budget amount or cost plan amount for the plan of record displays based on the financial plan type parameter that is selected when running the report.
Report Properties
The following values list the report properties:
Name: Project Task Dependencies
Resource ID: CSK_PRJ_TaskDependencies
Description: Project Management (PMO Accelerator)
Folder: Clarity /Reports/Project Management/Project Task Dependencies
Path: /ca_ppm/reports/project_management/CSK_PRJ_TaskDependencies
Data Source: Clarity Bean Data Source
Report Parameter Options
The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select Query ypeKey_1

Project OBS Unit projectOBSUn Single-select Query itKey_1

Project Type projectTypeKey_1 Multiple-select Query

Project

Multiple-select Query

Manager projectManagerKey_1

Project projectKey_1

Multiple-select Query

Project Status projectStatusKey_1

Multiple-select Query

Work Status workStatusKey_1 Multiple-select Query

Financial Plan

Single-select List of Values

Type financialPlanTypeKey_1

Task Start From taskStartFrom Single Value Date

Task Start To taskStartTo

Single Value Date

Show Grid Details? showGridDetail

Boolean

Include Inactive

Boolean

Projects? includeInactiveProjects

Database Schema ppmDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project Type projectTypeKey_1 No

Project

No

Manager projectManagerKey_1

Project projectKey_1

No

Project

No

Status projectStatusKey_1

Work Status workStatusKey_1 No

Financial Plan

Yes Planned

Type financialPlanTypeKey_1

Task Start From taskStartFrom No

Task Start To taskStartTo

No

Show Grid Details? showGridDetail

No Checked

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM


Prompt Text Parameter Name Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Type


Input Control Name Input Control Resource ID
Not applicable
Not applicable

Mandatory Default Value
Yes Passed through Classic PPM
Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Project Type: Major Project, Application Change, Infrastructure Deployment
Work Status: Requested, Active, On Hold, Cancelled, Complete
Financial Plan Type: Budget, Planned
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based on the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Financial Plan Type parameter allows you to select which type of financial plan cost amount to display in the project summary section of the report. You can run the report to display the budgeted or planned cost amount that is entered on the financial summary of the project. If the project has a detailed budget or cost plan, then the approved budget amount or cost plan amount for the plan of record displays. The Financial Plan Type parameter works as follows: - Budget. The report displays budgeted cost. The preceding screen capture was run with the option of planned. If it is run with the option of budget, then it displays "budgeted" where it displays "planned" in the project summary section of the report. - Planned The report displays planned cost. The preceding screen capture displays planned cost in the project summary section because this is the parameter valued selected when running the report.
- The Task Start From and Task Start To parameters determine the start date of the tasks that display in the report. If dates are entered, the report includes tasks with start dates within the range of dates that are entered in the parameters. This allows you to control which inter-project dependencies display in the report. The diagram displays a maximum of five predecessor and five successor inter-project dependencies, but you can leverage the date parameters to determine which appear if you have more than five dependencies.
- The Show Grid Detail parameter controls whether the dependencies displayed in the diagram also display in a table below the diagram. The diagram displays a maximum of five predecessor and five successor inter-project dependencies. The detailed table does not have this limit and shows all inter-project task dependencies. If the parameter is checked, a table showing the dependencies display below the diagram for each project. If the parameter is not checked, the table does not display.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays the project name, project ID, project type, project manager, work status, start date, finish date, planned or budgeted cost, and objective in the project summary section. The report has a financial plan type


parameter, allowing you to select whether to display the planned or budgeted cost. The report displays only projects with inter-project task dependency relationships (that is., dependencies to tasks or milestones in other projects). The report includes a diagram as a visual representation of these inter-project dependencies. The diagram uses rectangles to represent the main project and its dependent projects. The main project is at the center of the diagram. The predecessor projects are located above the main project; the successor projects are located below the main project. The dependency relationships are represented by lines connecting dependent projects to the main project, with the arrows pointing to the successor projects. The diagram displays a maximum of five predecessor and five successor projects. If there are more than five inter-project dependencies, the diagram displays the first five projects in alphabetical order. The other dependencies display as part of the grid when you select the Show Grid Detail parameter. The report also has Task Start From/To parameters to control which inter-project dependencies display in the report.
When the Show Grid Detail parameter is checked, the report includes a table that displays information about each project dependency that is associated to the main project. The project dependency information is displayed in the first eight columns and includes: dependent project name, dependent project ID, dependent task name, dependency schedule stoplight, dependent task start date, dependent task finish date, type (Predecessor, Successor), and dependency type (Finish-Finish, Finish-Start, Start-Finish, Start-Start). The main project information is displayed in the last three columns and includes: task name, task start date, and task finish date. The main project name displays above these columns. The report also displays a checkmark icon, to the right of task name, indicating that the task or dependent task is critical. Programs and templates are excluded. This report contains the following calculations:
- Dependency Schedule: The dependency schedule stoplight is the number of days the task or milestone is late and considers the following items: - Whether a baseline exists - Task or milestone status If a baseline exists, then days late is calculated as task or milestone finish date minus baseline finish date. A positive number indicates that the task or milestone is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the task or milestone finish date is the same as the baseline finish date, then the task or milestone is considered late if it is not completed and it was due before today's date. In this case, days late is calculated as today's date minus task or milestone finish date. If there is no baseline, then days late is calculated if the task or milestone is not completed and it was due before today's date. In this case, days late is calculated as today's date minus task or milestone finish date. Dependency Schedule stoplight color is determined as follows: - Green= On Schedule (<=0) - Red= Late (>0)
- Dependency Diagram: The dependency diagram uses rectangles to represent the main project and its dependent projects. The main project is in the center of the diagram. The predecessor projects are located above the main project; the successor projects are located below the main project. The color of the rectangle for the dependent projects is determined by the dependency schedule stoplight of their tasks or milestones. If a dependent project has at least one task or milestone with a red dependency schedule stoplight, then the rectangle in the diagram is red for that dependent project. The color of the rectangle for the main project is based on the project schedule, which is the number of days the main project is late, and considers the following items: - Whether a baseline exists - Project progress If a baseline exists, then days late is calculated as project finish date minus baseline finish date. A positive number indicates that the project is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the project finish date is the same as the baseline finish date, then the project is considered late if it is not completed and it was due before today's date. In this case, the number of days late is calculated as today's date minus project finish date. If there is no baseline, then days late is calculated if the project is not completed and it was due before today's date. In this case, the number of days late is calculated as today's date minus project finish date. Schedule color is determined as follows: - Green= On Schedule (<=0) - Red= Late (>0)
Report Security: Security is determined by project view rights.

Key Task and Milestone Status
The Key Task and Milestone Status report displays the task or milestone status, percent complete, and schedule percent indicators. You can group the report data by project or project manager. You can also control the work breakdown structure (WBS) levels that appear. The start date schedule and finish date schedule pie charts display the number of tasks and milestones with each schedule percent indicator color. The following image displays the Key Task and Milestone Status report with task or milestone status, percent complete, and schedule percent indicators by project.
Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - Run the Load Data Warehouse and Load Data Warehouse Access Rights jobs before you run this report. If the Data
Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options. - To appear in the report, the project requires at least one task or milestone. Report Properties The following values list the report properties: Name: Key Task and Milestone Status Resource ID: CSK_PRJ_KeyTaskMilestoneStatus Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Key Task and Milestone Status


Path: /ca_ppm/reports/project_management/CSK_PRJ_KeyTaskMilestoneStatus Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select query ypeKey_1

Project OBS Unit projectOBSUn Single-select query itKey_1

Project

Multiple-select query

Manager projectManagerKey_1

Project projectKey_1

Multiple-select query

Project Status projectStatusKey_1

Multiple-select query

WBS Type wbsTypeKey_1

Multiple-select query

Group By groupProjectManager Single-select list of values

Show Late Tasks Only? showLateTasksOnly

Boolean

Include Completed

Boolean

Tasks? includeCompletedTasks

Include Inactive

Boolean

Projects? includeInactiveProjects

Show Graphs? showGraphs Boolean

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project

No

Manager projectManagerKey_1

Project projectKey_1

No

Project

No

Status projectStatusKey_1

WBS Type wbsTypeKey_1

Yes Key Tasks and Milestones

Group By groupProjectManager Yes Project Manager

Show Late Tasks Only? showLateTasksOnly

No Unchecked

Include Completed

No Unchecked

Tasks? includeCompletedTasks

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Show Graphs? showGraphs No Checked

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed though Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values WBS Type: Full WBS, Key Tasks and Milestones, Milestones Only, Phases Only Group By: No Grouping, Project Manager Parameter Explanations The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based on the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and its descendants.
- The report has a WBS Type parameter that allows you to control how much of the WBS you display in the report. The WBS Type parameter works as follows: - Full WBS. Summary tasks, detail tasks, and milestones display. Summary tasks are tasks that have at least one child task in the WBS. Detail tasks do not have any child tasks. Milestones are WBS elements that have the milestone field selected and zero duration. Their start and finish dates are the same. - Key Tasks and Milestones. Key tasks and milestones display. Summary tasks, detail tasks and milestones must have the key task field selected to display in the report. - Milestones Only. Milestones are WBS elements that have the milestone field selected and zero duration. Their start and finish dates are the same. - Phases Only. Summary tasks at the top level of the WBS display. Summary tasks are tasks which have at least one child task in the WBS.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: - No Grouping. This option does not group projects so select this value if you do not want to group the report. - Project Manager. This option groups the projects by project manager.
- The Show Late Tasks Only parameter allows you to control which tasks and milestones display in the report. If the parameter is checked, the report includes only tasks and milestones that are scheduled to finish late. The finish schedule percent indicator for these tasks and milestones is yellow or red.
- There is an Include Completed Tasks parameter that allows you to control which tasks and milestones display in the report. If the parameter is checked, the report includes tasks and milestones with all statuses, including 'Completed'. If the parameter is not checked, then it only includes tasks and milestones with a status of 'Not Started' and 'Started'.
- The Show Graphs parameter controls whether the start and finish date schedule charts display on the report. If the parameter is checked, when no grouping option is selected the charts display on the first page of the report. If the parameter is checked and the report is grouped by project manager, the charts display at the top of each project manager section in the report. If the parameter is not checked, the charts do not display.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays the project name, task, or milestone name, type (phase, task, milestone), task, or milestone status, % complete, baselined (checkmark if the task or milestone has a baseline), start date, start days late, start schedule % indicator, finish date, finish days late, and finish schedule % indicator. Completed tasks are excluded by default. Completed tasks are included if the Include Completed Tasks parameter is checked. Programs and templates are excluded. When the show graphs parameter is checked, the report also includes two pie charts. The two pie charts show the start and finish date schedule percent indicator distribution, according to the group by option that is selected when running the report. The amounts in the charts are a summary of all tasks and milestones meeting the parameter criteria of the report. This report contains the following calculations:
- Start/Finish Days Late: Displays the number of days late considering the following items: - Whether a baseline exists - Task or milestone statusIf a baseline exists, then Days Late is calculated as task or milestone start/finish date minus baseline start/finish date. A positive number indicates that the task or milestone is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the task or milestone start/finish date is the same as the baseline start/finish date, then the task or milestone is considered late if it is not completed and it was due before today. In this case, Days Late is calculated as today date minus task or milestone start/finish date. If there is no baseline, then days late is calculated if the task or milestone is not completed and it

was due before today date. In this case, days late is calculated as today minus task or milestone start/finish date. Schedule stoplight color is determined as follows: - Green= On Schedule (<= 0) - Yellow= Between 1 and 10 Days Late (>0 and <=10) - Red= More Than 10 Days Late (>10) - Start/Finish Schedule %: Displays a stoplight indicating days late as a percentage of the summary task or project timeframe, which is finish date minus start date. If the task or milestone has a parent task in the WBS, then the parent task timeframe is used in the calculation. If the task or milestone is at the top level of the WBS and does not have a parent task, then the project timeframe is used in the calculation. The task or milestone calculation includes the task or milestone status and baseline (if a baseline exists). The color of the stoplight indicates whether the task or milestone is on schedule or late: - Green= On Schedule <= 0 - Yellow= Between 1 and 10 % Late > 0 and <= 10 - Red= More Than 10 % Late > 10 Report Security: Security is determined by project view rights.
Project Earned Value
The Project Earned Value report displays the earned value information of a project by period and in total, allowing you to measure the project performance and progress. The report includes general project information, current performance values, indexes, and cost estimates. The charts include an S-Curve, comparing planned value, actual cost and earned value amounts by period; and an Indexes Curve, comparing target, CPI, and SPI values by period. There is also a report option to display the chart amounts by period in a table format. The following image displays the Project Earned Value report with Earned Value curves.
The following image displays the Earned Value Detail table.

Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - There must be at least one earned value reporting period that is created (Administration/Earned Value Management-
Period Definitions). The earned value reporting period must have a status of active. The report supports earned value reporting periods set up with a scale of weekly, monthly, quarterly, or annually. The periods that are displayed in the report depend on the earned value reporting period that is associated with the project. - The project must have an earned value reporting period that is associated for the project to display in the report. It must also have an earned value calculation method that is selected for earned value to calculate for the project. Both of these fields are in the earned value section of the settings properties on the project. Classic PPM also has an earned value calculation method field on the task; it is not on the properties by default. Configure the task properties and add the field if you want to manage the calculation method differently for tasks compared to the method that is defined on the project. If a task has a calculation method that is defined, then it is used to calculate earned value of the task. If the task does not have a calculation method that is defined, then the task uses the calculation method of a parent task. If a parent task does not have a calculation method that is defined, then the project calculation method is used for all calculations.
NOTE The calculation methods are described in the Report Fields and Calculations section. Calculation of earned value always uses the current revision of the baseline. - The project must have a baseline for the following to display or calculate: baseline start date, baseline finish date, planned value, earned value, CPI, SPI, CV, SV, BAC, and VAC. - There must be a rate matrix created (Administration/Finance-Manage Matrix) and associated as a system default rate matrix (Administration/Finance-Setup/Defaults/Project Transaction Entry Defaults) or a project-specific rate matrix for calculation of cost amounts. - The project must have team members that are assigned to tasks with estimates to calculate metrics that are included in the report. It must also have assignments to post actuals to the project. - The project must have actual hours posted through timesheets, transaction entry, or imported into Clarity to calculate actual cost. - If the earned value calculation method on the project is a percent complete method, then the project must have % complete entered on the tasks in the work breakdown structure. There is a % complete calculation field in the general section of the settings properties on the project. If this field is set to manual, then the % complete must be manually updated in the work breakdown structure. If this field is set to effort or duration, then the % complete is calculated by running the Update % Complete job.
NOTE The Update % Complete job is automatically run when running the Update Earned Value History or Update Earned Value and Cost Totals job, so it is not necessary to run it separately if you are running one of these jobs. - The project per period cost and index amounts in the line charts and table are dependent upon running the Update Earned Value History job. This job calculates earned value metrics for a project or group of projects, based on parameters that are selected, and creates earned value snapshots of the data by time period. This data is based on the earned value reporting period set on the project and earned value calculation method set on the project, or tasks.

The Update Earned Value History invokes and also runs the Update % Complete job so it is not necessary to run this job separately. The Update % Complete job updates the % complete values whenever you change project or task data that affects the percent complete calculation. This job only updates the % complete values if the % Complete Calculation field is set to effort or duration. This is a field in the general section of the settings properties on the project. - The project total cost amounts in the current performance, indexes and cost estimates report sections are dependent upon running the Update Cost Totals job or the Update Earned Value and Cost Totals job. The Update Cost Totals job is available in the Actions pull-down on the task list or baseline list. The Update Cost Totals job runs the following items: - Runtime extraction of rates (calculates rates that are based on the matrix but does not populate the data mart rate
table) - Update % Complete job - Update Earned Value and Cost Totals job. If you want to update costs across several projects instead of updating
costs for only one project, run the job from the menu is the same as the job in the Actions pull-down, except it updates all the projects meeting the parameter criteria when run instead of updating only one project.
Report Properties
The following values list the report properties:
Name: Project Earned Value
Resource ID: CSK_PRJ_EarnedValue
Description: Project Management (PMO Accelerator)
Folder: Clarity /Reports/Project Management/Project Earned Value
Path: /ca_ppm/reports/project_management/CSK_PRJ_EarnedValue
Data Source: Clarity Bean Data Source
Report Parameter Options
The following table lists the report parameter options.

Prompt Text Parameter Name Type

Project OBS Type projectOBSTypeKey_1

Single-select query

Project OBS Unit projectOBSUnitKey_1

Single-select query

Project Manager projectManagerKey_1

Multiple-select query

Project projectKey_1

Multiple-select query

Start Date startDateNotRequired Single value date

End Date endDateNotRequired Single value Date

Show Period Earned

Boolean

Value Numbers?

showPeriodEarnedValueNumbers

Include Inactive Projects? includeInactiveProjects

Boolean

Database Schema ppmDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type

No

projectOBSTypeKey_1

Project OBS Unit

No

projectOBSUnitKey_1

Project Manager

No

projectManagerKey_1

Project projectKey_1

No

Start Date startDateNotRequired No

End Date endDateNotRequired No

Not applicable

No Checked

Include Inactive Projects? includeInactiveProjects Not applicable
Not applicable

No Unchecked
Yes Passed through Classic PPM Yes Passed through Classic PPM


Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Not applicable Not applicable

Yes Passed through Classic PPM
Yes Passed through Classic PPM

Parameter Lookup Values There are no parameter lookup values for this report.
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based upon the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Start Date and End Date parameters control which periods display in the charts and detail table. These parameters must be completed for data to display in the charts or detail table. The amounts in the current performance, indexes, and cost estimates sections of the report are project level amounts and do not change based on the date parameters selected.
- The Show Period Earned Value Numbers parameter controls whether the amounts by period that is displayed in the charts also display in a table below the charts. If the parameter is checked, a table showing earned value amounts by period displays below the charts for each project. If the parameter is not checked, the table does not display.
Report Fields and Calculations
The report displays the project name, project manager, project ID, status, progress, start date, finish date, baseline start date, baseline finish date in the project information section. The current performance section includes: as of date and the system-calculated amounts of planned value, actual cost, and earned value. The indexes section includes: CPI, SPI, CV, and SV. The cost estimates section includes: BAC, ETC, EAC, and VAC. These amounts can be viewed in Clarity on the schedule & performance properties of the project. Programs and templates are excluded.
The report includes two line charts that are used to visualize the trend in project performance over the reporting periods. The S-Curve chart displays planned value, actual cost, and earned value amounts over the earned value reporting periods. The Indexes Curve chart displays CPI and SPI, compared to the Target index, over the same earned value reporting periods.
When the Show Period Earned Value Numbers parameter is checked the report includes a table that displays the planned value, actual cost, earned value, CV, SV, CPI, SPI, and target indexes for each earned value reporting period.
This report contains the following calculations:
- Planned Value. This is the system-calculated value of budgeted cost of work scheduled (BCWS) or the budgeted amount that you can spend on the project in a given time. It is the sum of the BAC through a point in time. This point in time is the project as of date set on the schedule & performance properties of the project. If there is no as of date, then the calculation uses the current date (that is, today). This calculation requires a baseline.
- Actual Cost. This is the system-calculated value of actual cost of worked performed (ACWP) and is based on posted actuals. It is the sum of the actuals on the project through a point in time. This point in time is the project as of date set on the schedule & performance properties of the project. If there is no as of date, then the calculation uses the current date (that is, today). If you have future posted actuals, they arel not be included in this calculation unless you set the "as of date" to a date that is the same as or after the last date of posted actuals.
- Earned Value. This is the system-calculated value of budgeted cost of work performed (BCWP) and represents the amount of budgeted cost (BAC) completed based on performance. Performance is measured using the EV Calculation Method that is selected on the project. This calculation requires a baseline. The EV calculation method is set in the earned value section of the settings properties on the project. If you want to manage this at the task level, you


can add the EV calculation method field to the task properties and can select a value on the task instead of using the value set on the project. The EV calculation methods are as follows: - Percent Complete. This method is calculated by the product. At the project level, Earned Value is the sum of
Earned Value for all level one tasks. At the task level, Earned Value = BAC * %Complete. Note: Percent Complete is the default method if you do not change it. - 0/100. This method is calculated by the product. If % Complete = 100, then the Earned Value = BAC; else, Earned Value = 0. The % complete field is on the schedule & performance project properties. - 50/50. This method is calculated by the product. If %Complete = 100, then Earned Value = BAC. If %Complete > 0 but < 100 then Earned Value = BAC / 2. If %Complete = 0, then BCWP = 0. The % complete field is on the schedule & performance project properties. - Level of Effort (LOE). This method is calculated by the product. Earned Value = Planned Value. - Weighted Milestones. This method is not calculated by the product. Use the Earned Value (BCWP) Override field in the earned value section of the settings properties on the project to manually enter the earned value. If you are managing the EV calculation method at the task level, you can also add the (BCWP) Override field to the task and enter the earned value at the task level. - Milestone Percent Complete (PC). This method is not calculated by PPM. You must use the Earned Value (BCWP) Override field in the earned value section of the settings properties on the project to manually enter Earned Value. If you are managing the EV calculation method at the task level, you can also add the (BCWP) Override field to the task and enter it at the task level. - Apportioned Effort (AE). This method is not calculated by the product. Use the Earned Value (BCWP) Override field in the earned value section of the settings properties on the project to manually enter the earned value. If you are managing the EV calculation method at the task level, you can also add the (BCWP) Override field to the task and enter the earned value at the task level. - CPI. This is the system-calculated value of cost performance index (CPI) and is the ration of work that is performed to money spent. A value greater than or equal to one indicates a favorable condition at or under budget. A value of less than one indicates an unfavorable condition of over budget. This calculation requires a baseline. Formula: Earned Value / Actual Cost (or BCWP / ACWP) - SPI. This is the system-calculated value of schedule performance index (SPI) and is the ratio of work that is performed to work scheduled. A value greater than or equal to one indicates a favorable condition of work ahead of or on schedule. A value of less than one indicates an unfavorable condition of work behind schedule. This calculation requires a baseline. Formula: Earned Value / Planned Value (or BCWP / BCWS) - CV. This is the system-calculated value of cost variance (CV) and is the amount of what has been accomplished compared to what has been spent. This calculation requires a baseline. Formula: Earned Value - Actual Cost (or BCWP - ACWP) - SV. This is the system-calculated value of schedule variance (SV) and is amount of work that is performed compared to what is scheduled to date. This calculation requires a baseline. Formula: Earned Value - Planned Value (or BCWP - BCWS) - BAC. This is the system-calculated value of baseline at completion, which is the baseline cost at the time of the current baseline revision. It is the sum of all the assignment level actual cost values for the project and the ETC cost, at the time the baseline is recorded. It also includes future posted actual costs. This calculation requires a baseline. - ETC. This is the system-calculated value of the estimate cost to complete the project. ETC cost is the total of the remaining labor and non-labor cost to complete the project. - EAC. This is the system-calculated value of estimate at completion and is the cost of total effort. Formula: Actual Cost + ETC (or ACWP + ETC) - VAC. This is the difference between the estimate at completion (EAC) and the baseline at completion (BAC). This calculation requires a baseline. Formula: EAC - BAC
Report Security and Technical Details


Security is determined by project view rights.


Project Storyboard
The Project Storyboard report shows key aspects of a project that is organized in separate frames. Each frame in the report displays project information such as project dates, project objective, the amount, and cost of resources that are planned and actual, key accomplishments, upcoming activities, current issues and risks, and the project progress toward goals. This report can be used to analyze the project earned value and track work performance to account for cost and schedule variances.
The following image displays the Project Storyboard report with key aspects of a project that is organized in separate frames.

WARNING This report runs numerous queries to retrieve the data that is required to populate the report and can result in many pages of data being displayed if filters are not applied. Avoid running this report wide open so that only reasonable amounts of data are displayed. Else, you can experience performance issues.

Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options. - The status report indicators, status report update, key accomplishments, and upcoming activities are based on the most recent project status report. At least one status report must be completed on the project for the indicators to calculate and the information to display. The status report with the greatest report date and a report status of final, or no value that is selected for report status, is considered the most recent. - For the labor hours section, the project must have team members that are assigned to tasks with estimates. - For the financial performance section, the project must have budget or planned cost and benefit amounts that are entered on the financial summary of the project. If the project has a detailed budget or cost plan, then the approved budget amount or cost plan amount for the plan of record displays based on the financial plan type parameter that is selected when running the report. - The project must have actual hours posted through timesheets, transaction entry, or imported into Classic PPM to calculate actual hours and actual cost. - For the current issues and current risks sections, there must be issues and risks that are entered on the project. The report sorts issues and risks by priority, so the highest priority ones are displayed. Then, the report sorts them by their target resolution date in ascending order. - The project must have a baseline for baseline start and finish dates, baseline labor hours, EAC to baseline variance, and earned value amounts to display data in the report. - The earned value amounts are dependent upon running the Update Cost Totals or the Update Earned Value and Cost Totals jobs. The Update Cost Totals job is available in the Actions pull-down on the task list or baseline list. The Update Cost Totals job runs the following items: - Runtime extraction of rates (calculates rates that are based on the matrix but does not populate the data mart rate
table) - Update % Complete job - Update Earned Value and Cost Totals jobIf you want to update costs across several projects instead of updating
costs for only one project, run the Update Earned Value and Cost Totals job from the Reports and Jobs menu. The Update Earned Value and Cost Totals job from the menu is the same as the Update Cost Totals job in the Actions pull-down, except it updates all the projects meeting the parameter criteria instead of updating only one project.
Report Properties The following values list the report properties:
Name: Project Storyboard Resource ID: CSK_PRJ_ProjectStoryboard Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project Storyboard Path: /ca_ppm/reports/project_management/CSK_PRJ_ProjectStoryboard Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options


The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBSTypeKey_1
Project OBS Unit projectOBSUnitKey_1
Project Manager projectManagerKey_1
Project projectKey_1
Project Status projectStatusKey_1
Work Status workStatusKey_1
Phase Start Date phaseStartDate
Financial Plan Type financialPlanTypeKey_1
Include Inactive Projects? includeInactiveProjects
Database Schema dwhDBSchema

Single-select query Single-select query Multiple-select query Multiple-select query Multiple-select query Multiple-select query Single value date Single-select list of values Boolean Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID
Project OBS Type projectOBSTypeKey_1
Project OBS Unit projectOBSUnitKey_1
Project Manager projectManagerKey_1
Project projectKey_1
Project Status projectStatusKey_1
Work Status workStatusKey_1
Phase Start Date phaseStartDate
Financial Plan Type financialPlanTypeKey_1
Include Inactive Projects? includeInactiveProjects
Not applicable

Mandatory Default Value No
No
No
No No
No No Start of Current Month
Yes Planned
No Unchecked
Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Work Status: Requested, Active, On Hold, Cancelled, Complete
Financial Plan Type: Budget, Planned
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based upon the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Phase Start Date parameter allows you to control the project phases that display in the report. Phases beginning on or after the start date entered are displayed in the report.
- The Financial Plan Type parameter allows you to change the values that are displayed for the financial performance in the report. When you select financial plan type of budget, the report displays budgeted benefit, budgeted cost,


EAC to budgeted variance, budgeted ROI, and budgeted breakeven. When you select financial plan type of planned, the report displays planned benefit, planned cost, EAC to planned variance, planned ROI and planned breakeven. Budget. The report displays budget values for the financial performance. Planned. The report displays planned values for the financial performance. - The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status,then only the Approved project status displays.
Report Fields and Calculations
The report displays the project name, project manager, project type, stage, status report date, status, progress, start date, finish date, baseline start date, baseline finish date, days late, project objective, cost amounts, and effort amounts. The effort amounts, in hours, include: baseline, actuals, ETC, EAC, EAC to baseline variance, remaining allocation, and allocation to ETC variance. The cost amounts include: planned benefit, planned cost, actual cost, EAC, EAC to planned variance, planned ROI and planned breakeven. Planned cost amounts can be switched to budgeted cost amounts by selecting the Budget option available in the Financial Plan Type report parameter. Programs and templates are excluded.
The report displays the status report update, key accomplishments and upcoming activities from the latest project status report, and the overall schedule, scope, cost, and effort indicators of the status report indicators. The status report indicators trending arrows show the results of the current status report that is compared to the results of the previous status report. If there is no previous status report or if there is no variance, the indicator displays a rightwards arrow. The report also displays information about issues and risks. The issue and risk priority distribution is represented in two pie charts. The issue information includes the issue subject, priority, status, target date, and owner. The risk information includes the risk subject, probability, impact, priority, status, target date, and owner information. There are two links available. From the issue and risk lists, it is possible to go to the project issues list page by clicking the "More Issues..." link and to the risks list page by clicking the "More Risks..." link.
The Earned Value Analysis by Phase frame lists earned value amounts by project phase including phase name, start, finish, status, % complete, and the system-calculated values of planned value, earned value, actual cost, CV, SV, CPI, and SPI. This is consistent with how Classic PPM displays these amounts on the task properties. By default, phases beginning on or after the start date of the current month are listed. It can be modified by selecting a start date in the Phase Start Date report parameter. Phases are included; tasks are excluded. From this frame, it is possible to go to the project plan by clicking the "Full Project Plan...".
This report contains the following calculations:
- Days Late. Days late displays the number of days late considering the following items: - Whether or not a baseline exists - Project progress or task statusIf a baseline exists, then days late is calculated as project or task finish date minus baseline finish date. A positive number indicates that the project or task is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the project or task finish date is the same as the baseline finish date, then the project or task is considered late if it is not completed and it was due before today's date. In this case, days late is calculated as today's date minus project or task finish date. If there is no baseline, then days late is calculated if the project or task is not completed and it was due before today's date. In this case, days late is calculated as today's date minus project or task finish date. There is no calculation for resource assignments so the days late is not populated. - Overall. This is the overall status field from the project status report. The overall status is a calculated field in Classic PPM that is the sum of the schedule status, scope status, and cost and effort status fields on the status report. The stoplight color is determined as follows: Green= On Track (<40) Yellow= Minor Variance (>=40 and <90) Red= Significant Variance (>= 90)
The trending arrow is determined as follows: Upwards=Overall Status better than the previous Overall Status

Rightwards= No variance Downwards= Overall Status worse than the previous Overall Status Database view and column: dwh_inv_status_report.overall_status - Schedule. This is the schedule status field from the project status report. The schedule status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows: Green= On Track (10) Yellow= Minor Variance (20) Red= Significant Variance (30) The trending arrow is determined as follows: Upwards= Schedule Status is better than the previous Schedule Status Rightwards= No variance Downwards= Schedule Status is worse than the previous Schedule Status Database view and column: dwh_inv_status_report.sr_schedule_status_key - Scope. This is the scope status field from the project status report. The scope status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows: Green On Track 10 Yellow Minor Variance 20 Red Significant Variance 30 The trending arrow is determined as follows: Upwards= Scope Status is better than the previous Scope Status Rightwards= No variance Downwards= Scope Status is worse than the previous Scope Status Database view and column: dwh_inv_status_report.sr_scope_status_key - Cost and Effort. This is the cost and effort status field from the project status report. The cost and effort status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows: Green= On Track (10) Yellow= Minor Variance (20) Red= Significant Variance (30) The trending arrow is determined as follows: Upwards= Cost and Effort Status is better than the previous Cost and Effort Status Rightwards= No variance Downwards= Cost and Effort Status is worse than the previous Cost and Effort Status Database view and column: dwh_inv_status_report.sr_cost_effort_status_key - Planned Value. This is the system-calculated value of budgeted cost of work scheduled (BCWS) or the budgeted amount that you can spend on the project in a given time. It is the sum of the BAC through a point in time. This point in time is the project as of date set on the schedule & performance properties of the project. If there is no as of date, then the calculation uses the current date (that is, today). This calculation requires a baseline. Earned Value This is the system-calculated value of budgeted cost of work performed (BCWP) and represents the amount of budgeted cost (BAC) completed based on performance. Performance is measured using the EV Calculation Method that is selected on the project. This calculation requires a baseline.The EV calculation method is set in the earned value section of the settings properties on the project. If you want to manage this at the task level, add the EV calculation method field to the task properties and select a value on the task instead of using the value set on the project. The EV calculation methods are as follows:
- Percent Complete. This method is calculated by the product. At the project level, Earned Value is the sum of Earned Value for all level one tasks. At the task level, Earned Value = BAC * %Complete. Note: Percent Complete is the default method if you do not change it.
- 0/100. This method is calculated by the product. If % Complete = 100, then the Earned Value = BAC; else, Earned Value = 0. The % complete field is on the schedule & performance project properties.
- 50/50. This method is calculated by the product. If %Complete = 100, then Earned Value = BAC. If %Complete > 0 but < 100 then Earned Value = BAC / 2. If %Complete = 0, then BCWP = 0.The % complete field is on the schedule & performance project properties.
- Level of Effort (LOE). This method is calculated by the product. Earned Value = Planned Value. - Weighted Milestones. This method is not calculated by the product. Use the Earned Value (BCWP) Override
field in the earned value section of the settings properties on the project to manually enter earned value. If you are managing the EV calculation method at the task level, you can also add the (BCWP) Override field to the task and enter the earned value at the task level. - Milestone Percent Complete (PC). This method is not calculated by the product. Use the Earned Value (BCWP) Override field in the earned value section of the settings properties on the project to manually enter earned value. If you are managing the EV calculation method at the task level, you can also add the (BCWP) Override field to the task and enter the earned value at the task level. - Apportioned Effort (AE). This method is not calculated by the product. Use the Earned Value (BCWP) Override field in the earned value section of the settings properties on the project to manually enter earned value. If you are managing the EV calculation method at the task level, you can also add the (BCWP) Override field to the task and enter the earned value at the task level. - Actual Cost. This is the system-calculated value of actual cost of worked performed (ACWP) and is based on posted actuals. It is the sum of the actuals on the project through a point in time. This point in time is the project as of date set on the schedule & performance properties of the project. If there is no "as of date", then the calculation uses the current date (that is, today). If you have future posted actuals, they are not included in this calculation unless you set the as of date to a date that is the same as or after the last date of posted actuals. - CV. This is the system-calculated value of cost variance (CV) and is the amount of what has been accomplished versus what has been spent. This calculation requires a baseline. Formula: Earned Value - Actual Cost (or BCWP - ACWP) - SV. This is the system-calculated value of schedule variance (SV) and is amount of work that is performed versus what is scheduled to date. This calculation requires a baseline. Formula. Earned Value - Planned Value (or BCWP - BCWS) - CPI.This is the system-calculated value of cost performance index (CPI) and is the ration of work that is performed to money spent. A value greater than or equal to one indicates a favorable condition at or under budget. A value of less than one indicates an unfavorable condition of over budget. This calculation requires a baseline. Formula. Earned Value / Actual Cost (or BCWP / ACWP) - SPI.This is the system-calculated value of schedule performance index (SPI) and is the ratio of work that is performed to work scheduled. A value greater than or equal to one indicates a favorable condition of work ahead of or on schedule. A value of less than one indicates an unfavorable condition of work behind schedule. This calculation requires a baseline. Formula: Earned Value / Planned Value (or BCWP / BCWS)
Report Security
Security is determined by project view rights.
NOTE
Starting with Release 14.4, the default status values change from Minor Variance to Needs Help and from Significant Variance to At Risk. See the PMO Accelerator Release Notes in the 14.4 edition of the English documentation set.

Project Status Report List
The Project Status Report List report displays schedule dates, work status, and status report indicators across projects. The report can be grouped by several different options including: Portfolio Category, Overall Status, Project Type, Stage, Project Manager, Sponsor, and OBS Level. The columns that display in the report change based on the grouping option selected. The overall status summary pie chart displays the percentage of projects with each overall status color. The column chart displays the number of projects for each overall status color and is grouped by the option that is selected when running the report. The following image displays the Project Status Report List report with schedule dates, work status, and status report indicators across projects.
Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options. - The project does not have any prerequisites to display in the report. - The project properties must have fields such as project manager, work status, stage, and status reporting completed to display data in the report. The project name, start date, and finish date are required in Classic PPM so they always display data. - The status report date and the stoplight indicators are based on the most recent project status report so at least one status report must be completed on the project for these fields to display data. The status report with the greatest report date and a report status of final, or no value selected for report status, is considered the most recent. The status report indicators display gray stoplights if the project does not have a status report meeting these conditions. Report Properties The following values list the report properties: Name: Project Status Report List


Resource ID: CSK_PRJ_StatusReportList Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project Status Report List Path: /ca_ppm/reports/project_management/CSK_PRJ_StatusReportList Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select query ypeKey_1

Project OBS Unit projectOBSUn Single-select query itKey_1

Portfolio Category 1 portfolioCategoryKey_1

Single-select query

Portfolio Category 2 portfolioCategoryKey_2

Single-select query

Portfolio Category 3 portfolioCategoryKey_3

Single-select query

Portfolio Category 4 portfolioCategoryKey_4

Single-select query

Project Type projectTypeKey_1 Multiple-select query

Project

Multiple-select query

Manager projectManagerKey_1

Sponsor sponsorKey_1

Multiple-select query

Project projectKey_1

Multiple-select query

Project Status projectStatusKey_1

Multiple-select query

Work Status workStatusKey_1 Multiple-select query

Overall Status overallStatus

Multiple-select list of values

Status

Multiple-select query

Reporting statusReportingKey_1

Group

Single-select list of values

By groupCategoryOBSOverallStatus

Include Programs? includeProgram

Boolean

Include Inactive Projects? includeInactiveProjects

Boolean

Show Graph? showGraph

Boolean

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Portfolio Category 1

No

portfolioCategoryKey_1

Portfolio Category 2

No

portfolioCategoryKey_2

Portfolio Category 3

No

portfolioCategoryKey_3

Portfolio Category 4

No

portfolioCategoryKey_4

Project Type projectTypeKey_1 No

Project

No

Manager projectManagerKey_1

Sponsor sponsorKey_1

No

Project projectKey_1

No

Project

Yes

Status projectStatusKey_1

Work Status workStatusKey_1 No

Overall Status overallStatus

Yes Red, Yellow, Green, Gray

Status

Yes Required

Reporting statusReportingKey_1

Group

Yes No Grouping

By groupCategoryOBSOverallStatus

Include Programs? includeProgram

No Checked

Include Inactive Projects? includeInactiveProjects

No Unchecked

Show Graph? showGraph

No Checked

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM


Prompt Text Parameter Name Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Type


Input Control Name Input Control Resource ID
Not applicable
Not applicable

Mandatory Default Value
Yes Passed through Classic PPM
Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Project Type: Major Project, Application Change, Infrastructure Deployment
Work Status: Requested, Active, On Hold, Cancelled, Complete
Overall Status: Red, Yellow, Green, Gray
Status Reporting: Not Required, Optional, Required
Group By: No Grouping, Portfolio Category 1-4, Overall Status, Project Type, Stage, Project Manager, Sponsor, OBS Level 1-10
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control which projects display in the report.
- The Project OBS Unit parameter displays values that are based upon the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Portfolio Category 1-4 parameters are associated to the Portfolio Category 1-4 lookups in Classic PPM. These lookups are configurable so lookup values can be added, modified, or deactivated.
- The Project Type parameter is associated to the Idea and Project Type lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available:
- No Grouping. This option does not group the column chart or projects so select this value if you do not want to group the report.
- Portfolio Category 1-4. This option groups the column chart and projects by portfolio category. The portfolio category fields are associated to lookups that do not include any values and can be configured to support your categorizations. The portfolio categories are configurable lookups so values can be added, modified, or deactivated.
- Overall Status. This option groups the column chart and projects by the overall status color of the most recent status report.
- Project Type. This option groups the column chart and projects by the project type. The values for project type are: Major Project, Application Change, and Infrastructure Deployment. The project type is a configurable lookup so values can be added, modified, or deactivated.
- Stage. This option groups the column chart and projects by stage. The stage is a configurable lookup so values can be added, modified, or deactivated. You can find the stage lookup by filtering on Lookup Name = 'Investment Type' or Source = 'Static Dependent List' (Administration/Data Administration-Lookups).
- Project Manager. This option groups the column chart and projects by project manager. - Sponsor. This option groups the column chart and projects by sponsor. - OBS Level 1-10. This option groups the column chart and projects by OBS level and requires that you select a
unit in the project OBS parameter to group by an OBS level. The project OBS parameter and grouping by an OBS level work with one another. The project OBS parameter determines which OBS you group by when you select a group by level. You can group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS supported in the product. OBS level 1 is the top level in the hierarchy and OBS level 10 is bottom level in the hierarchy. When you group by an OBS level, the projects that are attached to OBS units at the level you select and any units below the level you select are rolled up to the group by level of the report. If you group by an OBS level that is lower in the hierarchy, then the report groups the projects by this level (for example , OBS Level 4). If projects are associated to units above level 4 (for example, projects are attached to levels 2 and 3), then the projects that are associated to units higher in the hierarchy display in the report in an Undefined grouping. The Undefined grouping indicates that there is no OBS unit that is defined for the project for the level by which you are grouping.If you group by an OBS level but you do not select a unit in the project OBS parameter, then the report returns results. However, the report does not group by an OBS level because it relies on the project OBS parameter to determine which OBS to use for grouping.
- The Include Programs parameter controls whether program status reports display. If the parameter is checked, the report displays program status reports. If the parameter is not checked, the program status reports do not display.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
- The Show Graph parameter controls whether the Overall Status charts display on the report. If the parameter is checked, the charts display at the top of the report. If the parameter is not checked, the charts do not display.
NOTE
To align with the enhanced productivity introduced in Clarity 15.x, we updated the 14.4 PMO Accelerator. Starting with Release 14.4 and higher, the following changes appear in report status lookups, portlets, and reports:
- Green: On Track - Orange: Needs Help (the former default value was Minor Variance) - Red: At Risk (the former default value was Significant Variance)
The documentation may refer to the previous values, even in 15.x releases. This is intentional. The explanations are still valid for new and existing users. Existing users can verify how the subtle changes appear after an upgrade. New users can understand how the values relate to the magnitude of the variance. Also note that your values and display mappings may vary.
Report Fields and Calculations

If the report is grouped by stage, then the report displays the following columns: project name, project manager, start date, finish date, work status, report date, status reporting, and status report indicators. If the report is grouped by project manager, then the report displays the following columns: project name, project manager, start date, finish date, work status, stage, report date, status reporting, and status report indicators. If the report is grouped by any other option, then the report displays the following columns: project name, project manager, start date, finish date, stage, report date, status reporting, and status report indicators. When the show graph parameter is checked, the report also includes a pie chart and a column chart. The overall status summary pie chart displays the percentage of projects, grouped by the overall status color of their most recent status report. The column chart displays the number of projects for each overall status color and is grouped by the option that is selected when running the report. This report contains the following calculations from the most recent status report. The status report with the greatest report date and a report status of final, or no value that is selected for report status, is considered the most recent status report.
- Overall. This is the overall status field from the project status report. The overall status is a calculated field in Classic PPM that is the sum of the schedule status, scope status, and cost and effort status fields on the status report. The stoplight color is determined as follows: Green= On Track(< 40) Yellow= Minor Variance (>=40 and <90) Red= Significant Variance (>= 90) Gray= No status report exists with a report status of final, or no value that is selected for report status
Database view and column:
dwh_inv_status_report.overall_status
- Schedule. This is the schedule status field from the project status report. The schedule status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows: Green= On Track (10) Yellow= Minor Variance (20) Red= Significant Variance (30) Gray= No status report exists with a report status of final, or no value that is selected for report status
Database view and column:
dwh_inv_status_report.sr_schedule_status_key
- Scope. This is the scope status field from the project status report. The scope status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows: Green= On Track (10) Yellow= Minor Variance (20) Red= Significant Variance (30) Gray= No status report exists with a report status of final, or no value that is selected for report status
Database view and column:
dwh_inv_status_report.sr_scope_status_key
- Cost and Effort. This is the cost and effort status field from the project status report. The cost and effort status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows: Green= On Track (10) Yellow= Minor Variance (20) Red= Significant Variance (30) Gray= No status report exists with a report status of final, or no value that is selected for report status


Database view and column: dwh_inv_status_report.sr_cost_effort_status_key Report Security Security is determined by project view rights.


Project Status Summary
The Project Status Summary report displays summary information about a project, including current stage, overall status, key accomplishments, upcoming activities, the cost and amount of resources that are consumed, mapped risks indicating categories with a high number of risks, and a high-level Gantt chart displaying information about the project phases and key milestones.
The following image displays the Project Status Summary report with key accomplishments, upcoming activities, costs and resources, risks, and key milestones.

WARNING This report runs numerous queries to retrieve the data necessary to populate the report. Avoid running this report without parameters and try to limit the results to reasonable amounts of data. Otherwise, you may experience performance issues. Report Prerequisites


Verify that you have completed the following prerequisites before you run this report:
- Run the Load Data Warehouse and Load Data Warehouse Access Rights jobs. If the data warehouse is not populated, most of the report parameters do not display options and the report displays a message indicating that there are no matching records.
- The Overall Status, Status Report Date, Key Accomplishments, and Upcoming Activities are based on the most recent project status report. At least one status report must be completed on the project for the indicators to calculate and for the information in the frames to appear. The status report with the greatest report date and a report status of final, or no value selected, is considered the most recent.
- The project must have a baseline for Cost and Resource to display data in the report.
Report Properties
The following list shows the report properties:
Name: Project Status Summary
Resource ID: CSK_PRJ_ProjectStatusSummary
Description: Project Management (PMO Accelerator)
Folder: Clarity /Reports/Project Management/Project Status Summary
Path: /ca_ppm/reports/project_management/CSK_PRJ_ProjectStatusSummary
Data Source: Clarity Data Warehouse Bean Data Source
Report Parameter Options
The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select Query ypeKey_1

Project OBS Unit projectOBSUn Single-select Query itKey_1

Project

Multiple-select Query

Manager projectManagerKey_1

Project projectKey_1

Multiple-select Query

Project Status projectStatusKey_1

Multiple-select Query

Work Status workStatusKey_1 Multiple-select Query

Gantt Start Date ganttStartDate Single Value Date

Period Type periodTypeAll

Single-select List of Values

Include Inactive

Boolean

Projects? includeInactiveProjects

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project

No

Manager projectManagerKey_1

Project projectKey_1

No

Project

No

Status projectStatusKey_1

Work Status workStatusKey_1 No

Gantt Start Date ganttStartDate Yes Start of Current Month

Period Type periodTypeAll

Yes Month

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM


Prompt Text Parameter Name

User ID ppmUser

Hidden

Type


Input Control Name Input Control Resource ID
Not applicable

Mandatory Default Value
Yes Passed through Classic PPM

Parameter Lookup Values
The following list contains the lookup values:
Work Status: Requested, Active, On Hold, Canceled, Complete
Period Type: Week, Month, Quarter, Year
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to directly control which projects display in the report.
- The Project OBS Unit parameter displays values based on the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Work Status parameter is associated to the Work Status lookup in PPM. This lookup is configurable so lookup values might be added, modified, or deactivated.
- The Gantt Start Date parameter allows you to control the project phases and key milestones that display in the report. Phases and key milestones beginning on or after the start date entered are displayed in the report.
- The report has a Period Type parameter that allows you to change the display periods of the Gantt. Week-The Gantt displays ten weeks. Each week starts on Monday. Month-The Gantt displays ten months. Quarter-The Gantt displays ten quarters. Year-The Gantt displays ten years.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays overall status, status report date, key accomplishments, and upcoming activities from the latest project status report. The trending arrow shows the current overall status that is compared to the overall status of a previous status report. If there is no previous status report or if there is no variance, the indicator displays a rightward arrow.
The report includes two gauges showing cost and resource allocation burning rates against baseline. The cost amounts are calculated based on actual costs against baseline costs to date. The resource allocation amounts are calculated based on posted actuals against baseline efforts to date. The report also includes a radar chart displaying number of risks by risk category. Tasks are excluded by default. Phases and milestones are included. Programs and templates are excluded.
The report displays the work breakdown structure phase or milestone name, and a ten period Gantt schedule. The Gantt color is determined by the schedule %.
This report contains the following calculations:
- Overall Status-This is the overall status field from the project status report. The overall status is a calculated field in Clarity that is the sum of the schedule status, scope status, and cost and effort status fields on the status report. The stoplight color is determined as follows: Green= On Track (<40) Yellow= Minor Variance (>=40 and <90) Red= Significant Variance (>=90)


The trending arrow is determined as follows: Upwards= Overall Status better than the previous Overall Status Rightwards= No variance Downwards= Overall Status worse than the previous Overall Status Database view and column: dwh_inv_status_report.overall_status - Schedule % Task calculation- Displays a stoplight indicating days late as a percentage of the summary task or project timeframe, which is finish date minus start date. If the task has a parent task in the WBS, then the parent task timeframe is used in the calculation. If the task is at the top level of the WBS and does not have a parent task, then the project timeframe is used in the calculation.The task calculation takes into account the task status and baseline (if a baseline exists). The color of the stoplight indicates if the task is on schedule or late. Schedule % stoplight and Gantt bar color is determined as follows: Green= On Schedule (<=0) Yellow= Between 1 and 10 % Late (>0 and <=10) Red= More Than 10 % Late (>10) Gray= Assignment level Gantt bar is gray. Report Security and Technical Details Security is determined by project view rights.
NOTE Starting with Release 14.4, the default Status Report Status lookup values change from Minor Variance to Needs Help and from Significant Variance to At Risk. The On Track value remains the same. See the PMO Accelerator 14.4 Release Notes in the 14.4 edition of the English documentation set.
Project Status Detail
The Project Status Detail report displays detailed information about the project team allocations, key milestones, risks, issues, and change requests, including the most relevant project indicators. The following image shows the Project Status Detail report with team allocations, key milestones, risks, issues, and change requests.


Clarity - 16.4.1 3362


WARNING
This report runs numerous queries to retrieve the required to populate the report and might result in many pages of data being displayed if filters are not applied. Avoid running this report wide open so that only reasonable amounts of data are displayed. If you do not do this, then you can experience performance issues.
Report Prerequisites
Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The status report indicators, status report update, key accomplishments, and upcoming activities are based on the most recent project status report. So at least one status report must be completed on the project for the indicators to calculate and for the information in the frames to be displayed. The status report with the greatest report date and a report status of final, or no value selected for report status, is considered the most recent.
- The project must have a team, milestones, risks, issues and change requests for those report sections to display data. Milestones must have the key task field checked to display in the report.
- The project must have team members that are assigned to tasks with estimates to calculate labor hours. - The project must have actual hours posted through timesheets, transaction entry, or imported into Classic PPM to
calculate actuals and actual cost. - The project must have a baseline for baseline (hours or cost), projected effort variance, projected effort variance %,
projected cost variance, and projected cost variance % to display data in the report. - The project cost amounts are dependent upon running the Update Cost Totals job. This job is available in the Actions
pull-down on the task list or baseline list. The Update Cost Totals job runs the following: Runtime extraction of rates (calculates rates based on the matrix but does not populate the data mart rate table), Update % Complete job, and Update Earned Value and Cost Totals job. If you want to update costs across several projects instead of updating costs for only one project, run the Update Earned Value and Cost Totals job from the Reports and Jobs menu. The Update Earned Value and Cost Totals job from the menu is the same as the Update Cost Totals job in the Actions pulldown, except it updates all the projects meeting the parameter criteria instead of updating only one project.
Report Properties
The following values list the report properties:
Name: Project Status Detail
Resource ID: CSK_PRJ_ProjectStatusDetail
Description: Project Management (PMO Accelerator)
Folder: Clarity /Reports/Project Management/Project Status Detail
Path: /ca_ppm/reports/project_management/CSK_PRJ_ProjectStatusDetail
Data Source: Clarity Data Warehouse Bean Data Source
Report Parameter Options
The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select Query ypeKey_1
Project OBS Unit projectOBSUn Single-select Query itKey_1

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1


Prompt Text Parameter Name

Type

Project

Multiple-select Query

Manager projectManagerKey_1

Project projectKey_1

Multiple-select Query

Project Status projectStatusKey_1

Multiple-select Query

Work Status workStatusKey_1 Multiple-select Query

Amount Type amountType

Single-select List of Values

Risk, Issue, and

Multiple-select Query

Change Request

Priority riskIssueChangePriorityKey_1

Risk, Issue, and

Multiple-select Query

Change Request

Status riskIssueChangeStatusKey_1

Include Inactive Projects? includeInactiveProjects

Boolean

Include Inactive Resources? includeInactiveResources

Boolean

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Project

No

Manager projectManagerKey_1

Project projectKey_1

No

Project

No

Status projectStatusKey_1

Work Status workStatusKey_1 No

Amount Type amountType

Yes Hours

Risk, Issue, and

Yes Low, Medium, and High

Change Request

Priority riskIssueChangePriorityKey_1

Risk, Issue, and

Yes Open, Work in Progress,

Change Request

and Resolved

Status riskIssueChangeStatusKey_1

Include Inactive Projects? includeInactiveProjects

No Unchecked

Include Inactive Resources? includeInactiveResources

No Checked

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Work Status: Requested, Active, On Hold, Canceled, Complete
Amount Type: Cost, Hours
Risk, Issue, and CR Priority: Low, Medium, High
Risk, Issue, and CR Status: Open, Work in Progress, Resolved, Closed
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter that determines which units are listed in the Project OBS Unit parameter. This parameter is not used to directly control which projects display in the report.
- The Project OBS Unit parameter displays values based on the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit that you select.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values might be added, modified, or deactivated.
- The Amount Type parameter allows you to determine if the report displays amounts as cost or hours. When you select cost as the amount type, the report displays a section heading of (Cost) and displays the amounts as cost. When you


select hours as the cost amount type, the report displays a section heading of (Hours) and displays amounts in hours. Cost-The report displays a (Cost) heading. The baseline, actual, ETC, EAC, and projected variance amounts are represented as cost. Hours-The report displays an (Hours) heading. The baseline, actual, ETC, EAC, and projected variance amounts are represented in hours. - The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays the project name, project ID, project manager, project type, goal, status, progress, project objective, stage, finish date, baseline finish date, days late, cost or effort amounts, and project indicators. The project indicators include: schedule to baseline, alignment, risk, issue, and change.
If the amount type parameter is set to cost, then the report displays the following columns: baseline, actuals, ETC, EAC, projected cost variance, and projected cost variance %. If the amount type parameter is set to hours, then the report displays the following columns: baseline, actuals, ETC, EAC, projected effort variance, and projected effort variance %. Programs and templates are excluded.
The report displays the status report date and status report update from the latest project status report and the following status report indicators: overall, schedule, scope, and cost and effort. The previous report date is from the prior project status report, based on report date. The status report indicator trending arrows compare the current status report to the prior status report. An upward pointing arrow indicates that the status has improved, a downward pointing arrow indicates that the status has gotten worse, and a right pointing arrow indicates that there is no change in status or there is no prior status report for comparison.
The project team information in the report includes resource name, project role, start, baseline start, finish, baseline finish, booking status, request status, allocation hours, actual hours, and ETC hours. Labor roles are also included. Equipment, expense, and material roles are excluded.
The key milestones in the report include project milestone name, ID, status, finish, baseline finish, days late, and schedule. Milestones are included but tasks are excluded.
The report also displays detailed information about risks, issues, and change requests. The risk information includes: risk name, ID, description, priority, probability, impact, status, response type, and target resolution. The issue information includes: issue name, ID, description, priority, status, and target resolution. The change request information includes: change request name, ID, description, priority, status, and expected close.
NOTE
To align with the enhanced productivity introduced in Clarity 15.x, we updated the 14.4 PMO Accelerator. Starting with Release 14.4 and higher, the following changes appear in report status lookups, portlets, and reports:
- Green: On Track - Orange: Needs Help (the former default value was Minor Variance) - Red: At Risk (the former default value was Significant Variance)
The documentation may refer to the previous values, even in 15.x releases. This is intentional. The explanations are still valid for new and existing users. Existing users can verify how the subtle changes appear after an upgrade. New users can understand how the values relate to the magnitude of the variance. Also note that your values and display mappings may vary.
This report contains the following calculations:
- Overall. This value is the overall status field from the project status report. The overall status is a calculated field in Classic PPM that is the sum of the schedule status, scope status, and cost and effort status fields on the status report. The stoplight color is determined as follows: Green= On Track (<40)

Yellow= Minor Variance (>=40 and <90) Red= Significant Variance (>=90) The trending arrow is determined as follows: Upwards= Overall Status better than the previous Overall Status Rightwards= No variance Downwards= Overall Status worse than the previous Overall Status
Database view and column:
dwh_inv_status_report.overall_status
- Schedule. This value is the schedule status field from the project status report. The schedule status is determined by the selection of the On Track, Minor Variance or Significant Variance status option. The stoplight color is determined as follows: Green= On Track 10 Yellow= Minor Variance 20 Red= Significant Variance 30 The trending arrow is determined as follows: Upwards= Schedule Status is better than the previous Schedule Status Rightwards= No variance Downwards= Schedule Status is worse than the previous Schedule Status.
Database view and column:
dwh_inv_status_report.sr_schedule_status_key
- Scope. This value is the scope status field from the project status report. The scope status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows: Green= On Track 10 Yellow= Minor Variance 20 Red= Significant Variance 30 The trending arrow is determined as follows: Upwards= Scope Status is better than the previous Scope Status Rightwards= No variance Downwards= Scope Status is worse than the previous Scope Status.
Database view and column:
dwh_inv_status_report.sr_scope_status_key
- Cost and Effort. This value is the cost and effort status field from the project status report. The cost and effort status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows: Green= On Track 10 Yellow= Minor Variance 20 Red= Significant Variance 30 The trending arrow is determined as follows: Upwards= Cost and Effort Status is better than the previous Cost and Effort Status Rightwards= No variance Downwards= Cost and Effort Status is worse than the previous Cost and Effort Status.
Database view and column:

dwh_inv_status_report.sr_cost_effort_status_key - Alignment. This value displays a stoplight based on the project business alignment, which is the average of the scores
for each factor that is selected on the business alignment project properties. A higher value indicates better alignment. The stoplight color is determined as follows: Red= Poor Alignment (<34) Yellow= Average Alignment (>=34 and <67) Green= Good Alignment (>=68) Database view and column: dwh_inv_investment.business_alignment - Risk. This value displays a stoplight that is based on the project risk score, which is the combined risk level for the project based on all the selections made in the risk factors section of the risk rating project properties. A lower value indicates lower risk. The stoplight color is determined as follows: Green= Low Risk (<34) Yellow= Medium Risk (>=34 and <68) Red= High Risk (>=68) Database view and column: dwh_inv_investment.risk - Issue. This value displays a stoplight that is based on the highest project issue priority. The stoplight color is determined as follows: Green= All issues that exist on the project are low priority. Yellow= At least one medium priority issue and no high priority issue exist on the project. Red= At least one high priority issue exists on the project. Database view and column: dwh_inv_summary_facts.issue_high_priority_count dwh_inv_summary_facts.issue_med_priority_count dwh_inv_summary_facts.issue_low_priority_count - Change. This value displays a stoplight that is based on the highest project change request priority. The stoplight color is determined as follows: Green= All change requests that exist on the project are low priority. Yellow= At least one medium priority change request and no high priority change request exist on the project. Red= At least one high priority change request exists on the project. Database view and column: dwh_inv_summary_facts.cr_high_priority_count dwh_inv_summary_facts.cr_med_priority_count dwh_inv_summary_facts.cr_low_priority_count - Projected Cost Variance. The projected cost variance field is on the project and displays the variance between the EAC cost and baseline cost. Formula: ((ETC Cost + Actual Cost (ACWP)) - BAC Cost) Database view and column: dwh_inv_summary_facts.eac_base_cost_var
- Projected Cost Variance %. The projected cost variance % field is on the project and displays a stoplight indicating the projected cost variance as a percentage of BAC cost. The Projected Cost Variance % stoplight color is determined as follows: Green= The EAC cost is less than or equal to the baseline. Yellow= The EAC cost is between one and ten percent over baseline. Red= The EAC cost is more than ten percent over baseline. White= No baseline data exists. Formula: (((ETC Cost + Actual Cost (ACWP)) - BAC Cost) / BAC Cost) * 100
Database view and column:
dwh_inv_summary_facts.eac_base_cost_pct
- Projected Effort Variance. The projected effort variance field is on the project and displays the variance between the EAC effort and baseline effort. Formula: (EAC Effort - BAC Effort)
Database view and column:
dwh_inv_summary_facts.eac_base_hours_var
- Projected Effort Variance %. The projected effort variance % field is on the project and displays a stoplight indicating the projected effort variance as a percentage of BAC effort. The Projected Effort Variance % stoplight color is determined as follows: Green= The EAC effort is less than or equal to the baseline. Yellow= The EAC effort is between one and ten percent over baseline. Red= The EAC effort is more than ten percent over baseline. White= No baseline data exists. Formula: ((EAC Effort - BAC Effort) / BAC Effort) * 100
Database view and column:
dwh_inv_summary_facts.eac_base_hours_pct
- Days Late. Days late displays the number of days late considering the following: - Whether a baseline exists - Project progress or task status If a baseline exists, then days late is calculated as project or task finish date minus baseline finish date. A positive number indicates that the project or task is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the project or task finish date is the same as the baseline finish date, then the project or task is considered late if it is not completed and it was due before today's date. In this case, days late is calculated as today's date minus project or task finish date. If there is no baseline, then days late is calculated if the project or task is not completed and it was due before the current date. In this case, days late is calculated as the current date minus project or task finish date. There is no calculation for resource assignments so the days late will not be populated. Schedule stoplight color is determined as follows: Green= On Schedule (<=0) Yellow= Between 1 and 10 Days Late (>0 and <=10) Red= More Than 10 Days Late (>10)
Database view and column:
dwh_inv_investment.days_late
Report Security Security is determined by project view rights.

Project Risk, Issue, and Change Summary
The Project Risk, Issue, and Change Summary report includes two sets of pie charts. The first set displays the number of risks and issues by target resolution date and the number of change requests by expected close date. The second set displays the number of risks, issues, and change requests by status. The report also includes a detail listing of risks, issues, and change requests with the following information: name, ID, priority, status, category, owner, created date, and target resolution or expected close date. The report detail can be grouped by project or not grouped. The following image displays the first page of the Project Risk, Issue, and Change Summary report with charts.
The following image displays the second page of the Project Risk, Issue, and Change Summary report with details.

Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options. - The project must have at least one risk for the project to display in the risk section of the report. - The project must have at least one issue for the project to display in the issue section of the report. - The project must have at least one change request for the project to display in the change request section of the report. - Risks, issues, and change requests must have the target resolution or expected close date completed for them to be classified as late or not late in the pie graphs. If these dates are not completed, they are included in the "No Date Entered" category. Report Properties The following values list the report properties: Name: Project Risk, Issue, and Change Summary Resource ID: CSK_PRJ_RiskIssueChangeSummary Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project Risk, Issue, and Change Summary Path: /ca_ppm/reports/project_management/CSK_PRJ_RiskIssueChangeSummary Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options


The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select Query ypeKey_1

Project OBS Unit projectOBSUn Single-select Query itKey_1

Project Type projectTypeKey_1 Multiple-select Query

Project

Multiple-select Query

Manager projectManagerKey_1

Sponsor sponsorKey_1

Multiple-select Query

Project projectKey_1

Multiple-select Query

Project Status projectStatusKey_1

Multiple-select Query

Work Status workStatusKey_1 Multiple-select Query

Risk, Issue and

Multiple-select Query

Change Request

Priority riskIssueChangePriorityKey_1

Risk, Issue and

Multiple-select Query

Change Request

Status riskIssueChangeStatusKey_1

Sort

Single-select List of Values

By sortRiskIssueChangeRequest

Group By groupProject

Single-select List of Values

Show Risks? showRisks

Boolean

Show Issues? showIssues

Boolean

Show Change

Boolean

Requests? showChangeRequests

Include Programs? includePrograms

Boolean

Include Inactive

Boolean

Projects? includeInactiveProjects

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project Type projectTypeKey_1 No

Project

No

Manager projectManagerKey_1

Sponsor sponsorKey_1

No

Project projectKey_1

No

Project

No

Status projectStatusKey_1

Work Status workStatusKey_1 No

Risk, Issue and

Yes Low, Medium, and High

Change Request

Priority riskIssueChangePriorityKey_1

Risk, Issue and

Yes Open, Work in Progress,

Change Request

and Resolved

Status riskIssueChangeStatusKey_1

Sort

Yes Created Date

By sortRiskIssueChangeRequest

Group By groupProject

Yes Project

Show Risks? showRisks

No Checked

Show Issues? showIssues

No Checked

Show Change

No Checked

Requests? showChangeRequests

Include Programs? includePrograms

No Checked

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values The following values list the lookup values: Project Type: Major Project, Application Change, Infrastructure Deployment Work Status: Requested, Active, On Hold, Cancelled, Complete


Risk, Issue, and Change Request Priority: Low, Medium, High
Risk, Issue, and Change Request Status: Open, Work in Progress, Resolved, Closed
Sort By: ID, Created Date, TargetResolution, or Expected Close Date
Group By: No Grouping, Project
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter and determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control directly which projects display in the report.
- The Project OBS Unit parameter displays values that are based on the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Project Type parameter is associated to the Idea and Project Type lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The following parameters allow you to control whether the corresponding section displays in the report: Show Risks, Show Issues, and Show Change Requests.
- The report has an Include Programs parameter to include programs. If the parameter is checked, then program risks, issues, and change requests are included in the report. If the parameter is not checked, then program risks, issues, and change requests are not included in the report.
- The report has a Sort By parameter that allows you to control how the report is sorted. The following sort options are available: ID. This option sorts the report by the risk, issue, or change request ID in ascending order. Created Date. This option sorts the report by the create date in descending order. Target Resolution or Expected Close Date. This option sorts the report by the target resolution or expected close date in ascending order.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: No Grouping. This option does not group risks, issues, and change requests so select this value if you do not want to group the report. Project. This option groups the risks, issues, and change requests by the project.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report has three parameters that determine the pie charts that display on the first page and the sections that display in the detail listing.
- If the show risks parameter is checked, the report displays two pie charts on the first page showing the risk distribution by target resolution date and status. The report also displays a listing of individual risks with the following information: project name, project ID, risk name, risk ID, calculated risk, priority stoplight, status, category, owner, created date, and target resolution date. If the report is grouped by project, then the project name and ID display as a group heading instead of columns.
- If the show issues parameter is checked, the report displays two pie charts on the first page showing the issue distribution by target resolution date and status. The report also displays a listing of individual issues with the following information: project name, project ID, issue name, issue ID, priority stoplight, status, category, owner, created date, and target resolution date. If the report is grouped by project, then the project name and ID display as a group heading instead of columns.
- If the show change requests parameter is checked, the report displays two pie charts on the first page showing the charge request distribution by expected close date and status. The report also displays a listing of individual change

requests with the following information: project name, project ID, change request name, change request ID, priority stoplight, status, category, owner, created date, and expected close date. If the report is grouped by project, then the project name and ID display as a group heading instead of columns. Templates are excluded from the report. This report contains the following calculations: - Priority The priority field is based on the priority of the risk, issue, or change request and includes the following values for rating priority: low, medium, and high. The stoplight color is determined as follows: Green= Low Yellow= Medium Red= High - Calculated Risk. Calculated risk is a score that is based on risk probability and impact, which have the following
levels: low (1), medium (2), and high (3). Formula: Probability * Impact Calculated risk background color is determined as follows: Red= The calculated risk is greater than the system-level risk threshold. White= The calculated risk is equal to or less than the system-level risk threshold. The system-level risk threshold is defined in Classic PPM Administration (Administration, Project Management, Risk Settings). Database view and column: dwh_rim_risk.rim_probability_key dwh_rim_risk.rim_impact_key dwh_rim_risk.is_above_threshold Report Security Security is determined by project view rights.
Project Risk Register
The Project Risk Register report displays comprehensive information for each project risk. The risk register also provides the option to display items that are associated to the risk such as notes, action items, tasks, and other risks and issues. The report can be grouped by project or not grouped. The following image displays the Project Risk Register report with details about each risk.


Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The project must have at least one risk for the project to display in the report. - The risk properties must have fields such as description, category, probability, impact, response type, resolution, target
resolution, impact date, and originating ID completed for them to display data in the report. The risk name, risk ID, priority, status, and owner are required in Classic PPM so they always display data.
Report Properties The following values list the report properties: Name: Project Risk Register Resource ID: CSK_PRJ_RiskRegister Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project Risk Register Path: /ca_ppm/reports/project_management/CSK_PRJ_RiskRegister Data Source: Clarity Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select Query ypeKey_1

Project OBS Unit projectOBSUn Single-select Query itKey_1

Project Type projectTypeKey_1 Multiple-select Query

Project

Multiple-select Query

Manager projectManagerKey_1

Sponsor sponsorKey_1

Multiple-select Query

Project projectKey_1

Multiple-select Query

Project Status projectStatusKey_1

Multiple-select Query

Work Status workStatusKey_1 Multiple-select Query

Risk Priority riskPriorityKey_1 Multiple-select Query

Risk Status riskStatusKey_1 Multiple-select Query

Sort By sortRiskIssue

Single-select List of Values

Group By groupProject

Single-select List of Values

Show Notes? showNotes

Boolean

Show Associated Action

Boolean

Items? showAssociatedActionItems

Shows Associated

Boolean

Tasks? showAssociatedTasks

Show Associated Risks and

Boolean

Issues? showAssociatedRisksAndIssues

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project Type projectTypeKey_1 No

Project

No

Manager projectManagerKey_1

Sponsor sponsorKey_1

No

Project projectKey_1

No

Project

No

Status projectStatusKey_1

Work Status workStatusKey_1 No

Risk Priority riskPriorityKey_1 Yes Low, Medium, and High

Risk Status riskStatusKey_1

Yes Open, Work in Progress, and Resolved

Sort By sortRiskIssue

Yes Created Date

Group By groupProject

Yes Project

Show Notes? showNotes

No Checked

Show Associated Action

No Checked

Items? showAssociatedActionItems

Shows Associated

No Checked

Tasks? showAssociatedTasks

Show Associated Risks and

No Checked

Issues? showAssociatedRisksAndIssues


Prompt Text Parameter Name

Include Programs? includePrograms

Boolean

Include Inactive

Boolean

Projects? includeInactiveProjects

Database Schema ppmDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Type

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Include Programs? includePrograms

No Checked

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Project Type: Major Project, Application Change, Infrastructure Deployment
Work Status: Requested, Active, On Hold, Cancelled, Complete
Risk Priority: Low, Medium, High
Risk Status: Open, Work in Progress, Resolved, Closed
Sort By: ID, Created Date, Target Resolution Date
Group By: No Grouping, Project
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter that determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control directly which projects display in the report.
- The Project OBS Unit parameter displays values that are based on the Project OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Project Type parameter is associated to the Idea and Project Type lookup in Classic PPM. This lookup is configurable so lookup values might be added, modified, or deactivated.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values might be added, modified, or deactivated.
- The Show Notes parameter controls whether notes associated to risks are included in the report. If the parameter is checked, then notes display at the bottom of each risk section in the report. If the parameter is not checked, notes do not display.
- The Show Associated Action Items parameter controls whether action items associated to risks are included in the report. If the parameter is checked, then action items display at the bottom of each risk section in the report. If the parameter is not checked, action items do not display.
- The Show Associated Tasks parameter controls whether tasks that are associated to risks are included in the report. If the parameter is checked, then tasks display at the bottom of each risk section in the report. If the parameter is not checked, tasks do not display.
- The Show Associated Risks and Issues parameter controls whether risks or issues that are associated to risks within the project are included in the report. If the parameter is checked, risks or issues display at the bottom of each risk


section in the report. If the parameter is not checked, risks or issues do not display. Note: Risks and issues can be associated through the multi-select browse fields on the risk properties. - The report has an Include Programs parameter to include programs. If the parameter is checked, then program risks are included in the report. If the parameter is not checked, then program risks are not included in the report. - The report has a Sort By parameter that allows you to control how the report is sorted. The following sort options are available: ID. This option sorts the report by the risk ID in ascending order. Created Date. This option sorts the report by the create date in descending order. Target Resolution Date. This option sorts the report by the target resolution date in ascending order.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: No Grouping. This option does not group risks so you should select this value if you do not want to group the report. Project. This option groups the risks by the project.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays the risk ID, created date, risk name, target resolution date, impact date, probability, response type, category, status, project name, owner, description, resolution, impact, calculated risk, priority, and originating ID. If the report is grouped by project, then the project name displays as a group heading instead of a column.
- If the show notes parameter is checked, then the report displays the following columns for the risks that have notes: date entered, subject, description, and entered by. They are sorted by date entered, in descending order.
- If the show associated action items parameter is checked, then the report displays the following columns for the risks that have action items associated to them: due date, subject, description, assigned to, and status. They are sorted by due date, in descending order.
- If the show associated tasks parameter is checked, then the report displays the following columns for the risks that have tasks associated to them: task ID, task name, start, finish, % complete, and status. They are sorted by task ID, in ascending order. If there is no task ID, they are sorted by WBS sequence in ascending order.
- If the show associated risks and issues parameter is checked, then the report displays the following columns for the risks that have other risks or issues associated to them: risk or issue ID, name, description, type (risk or issue), and status. They are sorted by risk or issue ID, in ascending order. Templates are excluded from the report.
This report contains the following calculations:
- Calculated Risk. Calculated risk is a score that is based on risk probability and impact, which have the following levels: low (1), medium (2), and high (3). Formula: Probability * Impact Calculated risk background color is determined as follows: Red= The calculated risk is greater than the system-level risk threshold. White= The calculated risk is equal to or less than the system-level risk threshold.
The system-level risk threshold is defined in Clarity Administration (Administration, Project Management, Risk Settings).
Database view and column:
odf_risk_v2.calculated_risk
odf_risk_v2.is_above_threshold
Report Security
Security is determined by project view rights.

Project Issue Register
The Project Issue Register report displays comprehensive information for each project issue. The issue register also provides the option to display items that are associated to the issue such as notes, action items, and tasks. The report can be grouped by project or not grouped. The following image displays the Project Issue Register with details about the issues.
Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The project must have at least one issue for the project to display in the report. - The issue properties must have fields such as description, category, resolution, target resolution, impact date, and
originating ID completed for them to display data in the report. The issue name, issue ID, priority, status, and owner are required in Classic PPM so they always display data. Report Properties The following values list the report properties. Name: Project Issue Register Resource ID: CSK_PRJ_IssueRegister Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project Issue Register Path: /ca_ppm/reports/project_management/CSK_PRJ_IssueRegister Data Source: Clarity Bean Data Source Report Parameter Options


The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select Query ypeKey_1

Project OBS Unit projectOBSUn Single-select Query itKey_1

Project Type projectTypeKey_1 Multiple-select Query

Project

Multiple-select Query

Manager projectManagerKey_1

Sponsor sponsorKey_1

Multiple-select Query

Project projectKey_1

Multiple-select Query

Project Status projectStatusKey_1

Multiple-select Query

Work Status workStatusKey_1 Multiple-select Query

Issue Priority issuePriorityKey_1 Multiple-select Query

Issue Status issueStatusKey_1 Multiple-select Query

Sort By sortRiskIssue

Single-select List of Values

Group By groupProject

Single-select List of Values

Show Notes? showNotes

Boolean

Show Associated Action

Boolean

Items? showAssociatedActionItems

Show Associated

Boolean

Tasks? showAssociatedTasks

Include Programs? includePrograms

Boolean

Include Inactive

Boolean

Projects? includeInactiveProjects

Database Schema ppmDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project Type projectTypeKey_1 No

Project

No

Manager projectManagerKey_1

Sponsor sponsorKey_1

No

Project projectKey_1

No

Project

No

Status projectStatusKey_1

Work Status workStatusKey_1 No

Issue Priority issuePriorityKey_1 Yes Low, Medium, and High

Issue Status issueStatusKey_1 Yes Open, Work in Progress, and Resolved

Sort By sortRiskIssue

Yes Created Date

Group By groupProject

Yes Project

Show Notes? showNotes

No Checked

Show Associated Action

No Checked

Items? showAssociatedActionItems

Show Associated

No Checked

Tasks? showAssociatedTasks

Include Programs? includePrograms

No Checked

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values The following values list the lookup values. Project Type: Major Project, Application Change, Infrastructure Deployment Work Status: Requested, Active, On Hold, Cancelled, Complete Issue Priority: Low, Medium, High Issue Status: Open, Work in Progress, Resolved, Closed


Sort By: ID, Created Date, Target Resolution Date
Group By: No Grouping, Project
Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter that determines which units are listed in the Project OBS Unit parameter. This parameter is not used to control directly which projects display in the report.
- The Project OBS Unit parameter displays values that are based on the selected Project OBS Type. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Project Type parameter is associated to the Idea and Project Type lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Show Notes parameter controls whether notes that are associated to issues are included in the report. If the parameter is checked, then notes display at the bottom of each issue section in the report. If the parameter is not checked, notes do not display.
- The Show Associated Action Items parameter controls whether action items associated to issues are included in the report. If the parameter is checked, then action items display at the bottom of each issue section in the report. If the parameter is not checked, action items do not display.
- The Show Associated Tasks parameter controls whether tasks associated to issues are included in the report. If the parameter is checked, then tasks display at the bottom of each issue section in the report. If the parameter is not checked, tasks do not display.
- The report has an Include Programs parameter to include programs. If the parameter is checked, then program issues are included in the report. If the parameter is not checked, then program issues are not included in the report.
- The report has a Sort By parameter that allows you to control how the report is sorted. The following sort options are available: ID. This option sorts the report by the issue ID in ascending order. Created Date. This option sorts the report by the create date in descending order. Target Resolution Date. This option sorts the report by the target resolution date in ascending order.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: No Grouping. This option does not group issues, so select this value if you do not want to group the report. Project. This option groups the issues by the project.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
Report Fields and Calculations
The report displays the issue ID, created date, issue name, target resolution date, impact date, category, status, project name, owner, description, resolution, priority, and originating ID. If the report is grouped by project, then the project name displays as a group heading instead of a column.
If the show notes parameter is checked, then the report displays the following columns for the issues that have notes: date entered, subject, description, and entered by. They are sorted by date entered, in descending order.
If the show associated action items parameter is checked, then the report displays the following columns for the issues that have action items associated to them: due date, subject, description, assigned to, and status. They are sorted by due date, in descending order.
If the show associated tasks parameter is checked, then the report displays the following columns for the issues that have tasks associated to them: task ID, task name, start, finish, % complete, and status. They are sorted by task ID, in

ascending order. If there is no task ID, they are sorted by WBS sequence in ascending order. Templates are excluded from the report. Report Security Security is determined by project view rights.
Project Change Request Register
The Project Change Request Register report displays comprehensive information for each project change request. The change request register also provides the option to display associated notes. The report can be grouped by project or not grouped. The following image displays the Project Change Request Register report with associated notes.
Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The project must have at least one change request for the project to display in the report. - The change request properties must have fields such as description, change in cost, change in schedule, change in
resources, category, expected close, approved by, approved date, and originating ID completed for them to display data in the report. The change request name, change request ID, priority, status, and owner are required in Classic PPM so they always display data. Report Properties The following values list the report properties: Name: Project Change Request Register Resource ID: CSK_PRJ_ChangeRequestRegister Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project Change Request Register Path: /ca_ppm/reports/project_management/CSK_PRJ_ChangeRequestRegister Data Source: Classic PPM Bean Data Source Report Parameter Options


The following values list the report properties.

Prompt Text Parameter Name

Type

Project OBS Type projectOBST Single-select Query ypeKey_1

Project OBS Unit projectOBSUn Single-select Query itKey_1

Project Type projectTypeKey_1 Multiple-select Query

Project

Multiple-select Query

Manager projectManagerKey_1

Sponsor sponsorKey_1

Multiple-select Query

Project projectKey_1

Multiple-select Query

Project Status projectStatusKey_1

Multiple-select Query

Work Status workStatusKey_1 Multiple-select Query

Change Request Priority changePriorityKey_1

Multiple-select Query

Change Request Status changeStatusKey_1

Multiple-select Query

Sort By sortChangeRequest

Single-select List of Values

Group By groupProject

Single-select List of Values

Show Notes? showNotes

Boolean

Include Programs? includePrograms

Boolean

Include Inactive Projects? includeInactiveProjects

Boolean

Database Schema ppmDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type projectOBST No ypeKey_1

Project OBS Unit projectOBSUn No itKey_1

Project Type projectTypeKey_1 No

Project

No

Manager projectManagerKey_1

Sponsor sponsorKey_1

No

Project projectKey_1

No

Project

No

Status projectStatusKey_1

Work Status workStatusKey_1 No

Change Request Priority changePriorityKey_1

Yes Low, Medium, and High

Change Request Status changeStatusKey_1

Yes Open, Work in Progress, and Resolved

Sort By sortChangeRequest

Yes Created Date

Group By groupProject

Yes Project

Show Notes? showNotes

No Checked

Include Programs? includePrograms

No Checked

Include Inactive Projects? includeInactiveProjects

No Unchecked

Not applicable

Yes Passed

Not applicable Not applicable Not applicable

Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM

Parameter Lookup Values The following values list the lookup values: Project Type: Major Project, Application Change, Infrastructure Deployment Work Status: Requested, Active, On Hold, Cancelled, Complete Change Request Priority: Low, Medium, High Change Request Status: Open, Work in Progress, Resolved, Closed Sort By: ID, Created Date, Expected Close Date Group By: No Grouping, Project


Parameter Explanations
The following list describes the parameters:
- The Project OBS Type is a cascading parameter that determines which units are listed in the Project OBS Unit parameter. This parameter is not used to directly control which projects display in the report.
- The Project OBS Unit parameter displays values that are based on the selected Project OBS Type. When you select an OBS unit in this parameter, the report displays the projects that are attached to the OBS unit and descendants of the unit you select.
- The Project Type parameter is associated to the Idea and Project Type lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The Show Notes parameter controls whether notes that are associated to change requests are included in the report. If the parameter is checked, then notes display at the bottom of each change request section in the report. If the parameter is not checked, notes do not display.
- The report has an Include Programs parameter to include programs. If the parameter is checked, then program change requests are included in the report. If the parameter is not checked, then program change requests are not included in the report.
- The report has a Sort By parameter that allows you to control how the report is sorted. The following sort options are available: ID. This option sorts the report by the change request ID in ascending order. Created Date. This option sorts the report by the create date in descending order. Expected Close Date. This option sorts the report by the expected close date in ascending order.
- The project statuses are displayed based on the existing project statuses in the environment such as test, dev, or prod. For example, if there are projects with only Approved status, then only the Approved project status displays.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: No Grouping. This option does not group change requests so do not select this value if you do not want to group the report. Project. This option groups the change requests by the project.
Report Fields and Calculations
The report displays the change request ID, created date, change request name, change in cost, change in schedule, change in resources, category, status, project name, owner, description, expected close date, approved by, approved date, priority, and originating ID. If the report is grouped by project, then the project name displays as a group heading instead of a column. If the show notes parameter is checked, then the report displays the following columns for the change requests that have notes: date entered, subject, description, and entered by. They are sorted by date entered, in descending order. Templates are excluded from the report.
Report Security
Security is determined by project view rights.
Project or Program Roadmap
The Project or Program Roadmap report lists milestones and their Gantt schedule covering a timeframe, which might be twelve months or four quarters. The report can be grouped by up to three options, which can be any combination of the following grouping options: Manager, Project, Program, and OBS Level. The grouping options determine how milestones are rolled up.
The following image shows the Project or Program Roadmap report listing milestones and their Gantt schedules covering a timeframe.


WARNING This report runs numerous queries to retrieve the data necessary to populate the report. Avoid running this report without parameters and try to limit the results to reasonable amounts of data. Else, you can experience performance issues.
Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options. - Milestones must have the milestone and key task fields selected to display in the report. Report Definition The following values list the report properties:
Name: Project or Program Roadmap Resource ID: CSK_PRJ_Roadmap Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project or Program Roadmap Path: /ca_ppm/reports/project_management/CSK_PRJ_Roadmap Data Source: Clarity Data Warehouse Bean Data Source Report Parameters The following table lists the report parameter options:

Prompt Text Parameter Name

Type

Project or Program OBS Type Single-select projectProgramOBSTypeKey_1 Query
Project or Program OBS Unit Single-select projectProgramOBSUnitKey_1 Query
Project or Program Manager Multiple-select projectProgramManagerKey_1 Query

Input Control Name Input Control Resource ID

Mandatory Default Value

Project OBS Type

No

projectProgramOBSTypeKey_1

Project OBS Unit

No

projectProgramOBSUnitKey_1

Project Manager

No

projectProgramManagerKey_1


Prompt Text Parameter Name

Type

Project or Program projectProgramKey_1
Project Status projectStatusKey_1

Multiple-select Query
Multiple-select Query

Start Date ganttStartDate

Single Value Date

Period Type periodTypeMonthQuarter

Single-select List of Values

Group By 1 groupManagerProgramOBS1

Single-select List of Values

Group By 2 groupManagerProgramOBS2

Single-select List of Values

Group By 3 groupManagerProgramOBS3

Single-select List of Values

Include Inactive Projects or

Boolean

Programs?

includeInactiveProjectsPrograms

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme

Hidden

Language ppmUserLanguage

Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Project

No

projectProgramKey_1

Project Status projectStatusKey_1

No
Approved, Cancelled, On Hold, Unapproved

Gantt Start Date ganttStartDate

Yes Start of Current Quarter

Period Type periodTypeMonthQuarter

No Quarter

Group By 1 groupManagerProgramOBS1

Yes Manager

Group By 2 groupManagerProgramOBS2

Yes Program

Group By 3 groupManagerProgramOBS3

Yes Project

Include Inactive Projects or

No

Programs?

Unchecked

includeInactiveProjectsPrograms

Not applicable

Yes

Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Period Type: Month, Quarter
Group By 1, 2 and 3: No Grouping, Manager, Project, Program, OBS Level 1-10
Parameter Explanations
The following list describes the parameters:
- The Project or Program OBS Type is a cascading parameter and determines which units are listed in the Project or Program OBS Unit parameter. This parameter is not used to control which projects or programs display in the report
- The Project or Program OBS Unit parameter displays values that are based on the Project or Program OBS Type selected. When you select an OBS unit in this parameter, the report displays the projects or programs that are attached to the OBS unit and descendants of the unit you select.
- The Start Date parameter allows you to control the starting period that displays in the report. - The report has a Period Type parameter that allows you to change the display periods of the Gantt.
Month. The Gantt displays twelve months.


Quarter. The Gantt displays four quarters.
- The report has Group By 1, Group By 2, and Group By 3 parameters that allow you to control how the report is grouped and milestones are rolled up. You can group the report by up to three options, which can be any combination of the following grouping options:
No Grouping. This option does not group project milestones so you can select this value if you do not want to group the report.
Manager. This option groups project milestones by project or program manager.
Project. This option groups project milestones by project.
Program. This option groups project milestones by program.
OBS Level 1-10. This option groups project milestones by OBS level and requires that you select a unit in the project or program OBS parameter to group by an OBS level. The project or program OBS parameter and grouping by an OBS level work with one another. The project or program OBS parameter determines which OBS you group by when you select a group by level. You can group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS supported in Classic PPM. OBS level 1 is the top level in the hierarchy and OBS level 10 is bottom level in the hierarchy. When you group by an OBS level, the project milestones of the projects or programs that are attached to OBS units at the level you select and any units below the level you select are rolled up to the group by level of the report. If you group by an OBS level that is lower in the hierarchy, then the report groups the project milestones by this level (for example, OBS Level 4). If projects or programs are associated to units above level 4 (for example, projects are attached to levels 2 and 3), then the project milestones of the projects or programs that are associated to units higher in the hierarchy display in the report in an Undefined grouping. The Undefined grouping indicates that there is no OBS unit that is defined for the project or program at the level by which you are grouping. If you group by an OBS level but you do not select a unit in the project or program OBS parameter, then the report returns results. However, the report does not group by an OBS level because it relies on the project or program OBS parameter to determine which OBS to use for grouping.
Report Fields and Calculations
The report adjusts the column headings and content according to the values selected in the Group By 1, 2 and 3 parameters, which can be any combination of the following: no grouping, manager, project, program, OBS level 1-10. The Group By 1 determines how the report is grouped. The Group By 2 and 3 determine the report layout and how milestones are rolled up. If the report is grouped by Group By 1, 2 and 3 and none of them are the No Grouping option, then the report displays the following columns: grouping option 2, grouping option 3, and twelve monthly periods or four quarterly periods. If you select No Grouping for all groping options, then the report displays the first column as 'Undefined' and the 'Undefined' group. If the report is grouped by project, then the report displays the following columns: project name, and twelve monthly periods or four quarterly periods. If the report is grouped by any other option, then the report displays the following columns: project name, and twelve monthly periods or four quarterly periods. Programs are included, templates are excluded.
The report displays 'Undefined' and rolls up all milestones to the Undefined level.
If you group by Project, the Group By 1 and Group By 2 show Project and milestones are not rolled up.
if you group by Program, the Group By 1 and Group by 2 show Program and milestones are rolled up to the Program Level
The projects or programs can be grouped by up to three options in the report body, which can be any combination of the following: manager, project, program, OBS level 1-10.
Milestone stoplight color is determined as follows:
- Gray = Completed - Green = Started - Blue = Not Started
Report Security


Security is determined by project view rights.

## Investment Management Reports

The Investment Management reports provide visibility into the key performance indicators of status, schedule, alignment, and risk across investments in an organization. The reports also provide insight into schedule, cost, effort, risks, and issues in managing the investments. Several reports present status report information for monitoring investment progress, while others offer analysis of staffing issues and comparisons of plan performance compared to baseline. These reports are included with Investment Management reports:
These reports are included with Investment Management reports:
- Investment Allocations and Assignments - Investment Assignments by Task - Investment Baseline vs. Plan by Task - Investment Time and Estimate Review - Product or Application Roadmap - Roadmap Timeline Report - Roadmap Timeline Report - Investment Risk, Issue, and Change Summary - Investment Risk Register - Investment Issue Register - Investment Change Request Register - Investment Risk, Issue, and Change Summary
Investment Allocations and Assignments
The Investment Allocations and Assignments report displays team member allocation, task assignment, and variance amounts by investment across time periods. The chart shows allocation compared to assignment amounts by period. The report can also be run to show allocations only or assignments only. This report displays amounts by week or month, and in total, for each team member and investment. The amounts can be displayed as hours or FTEs.
The following image shows the Investment Allocations and Assignments report displaying team member allocation, task assignment, and variance amounts by investment across time periods.


Report Prerequisites
Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The investment must have at least one resource or role on the investment team for the investment and team member allocations to display in the report.
- The investment must have at least one resource or role assigned to a task for the investment assignments to display in the report. For projects, the resource or role must be assigned to a task in the Gantt unless the project has an effort task with resources or roles automatically assigned. For investments other than the project, resources or roles added to the team are automatically assigned to an effort task for the investment. Note: Effort task is a task with the Task ID of '~rmw'.
- The allocation amounts are calculated based on the time slices with the name MONTHLYRESOURCEALLOCCURVE and WEEKLYRESOURCEALLOCCURVE (Administration/Data Administration-Time Slices).
- The assignment amounts are calculated based on the time slices with the name MONTHLYRESOURCEACTCURVE and WEEKLYRESOURCEACTCURVE; and MONTHLYRESOURCEESTCURVE and WEEKLYRESOURCEESTCURVE (Administration/Data Administration-Time Slices).
Report Properties
The following values list the report properties:
Name: Investment Allocations and Assignments
Resource ID: CSK_INV_AllocationAssignment
Description: Investment Management (PMO Accelerator)
Folder: Clarity /Reports/Investment Management/Investment Allocations and Assignments
Path: /ca_ppm/reports/investment_management/CSK_INV_AllocationAssignment
Data Source: Clarity Data Warehouse Bean Data Source
Report Parameter Options
The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Investment OBS Type investme Single-select query ntOBSTypeKey_1

Investment OBS Unit investmen Single-select query tOBSUnitKey_1

Investment Type investmentTypeKey_1

Multiple-select query

Investment

Multiple-select query

Manager investmentManagerKey_1

Investment investmentKey_1 Multiple-select query

Investment

Multiple-select query

Status investmentStatusKey_1

Resource

Multiple-select query

Manager resourceManagerKey_1

Resource Role roleKey_1

Multiple-select query

Input Control Name Input Control Resource ID

Mandatory Default Value

Investment OBS Type investme No ntOBSTypeKey_1

Investment OBS Unit investmen No tOBSUnitKey_1

Investment Type investmentTypeKey_1

Yes All

Investment

No

Manager investmentManagerKey_1

Investment investmentKey_1 No

Investment

No

Status investmentStatusKey_1

Resource

No

Manager resourceManagerKey_1

Resource Role roleKey_1

No


Prompt Text Parameter Name

Type

Resource resourceKey_1

Multiple-select query

Employment Type employmentTypeKey_1

Multiple-select query

Booking Status bookingStatusKey_1

Multiple-select query

Start Date startDate

Single value date

Period Type periodTypeWeekMonth

Single-select list of values

Unit Type unitType

Single-select list of values

Type of Hours typeOfHoursAll Single-select list of values

Include Unstaffed Roles? includ Boolean eUnstaffedRoles

Include Inactive

Boolean

Investments? includeInactiveInvestments

Include Inactive

Boolean

Resources? includeInactiveResources

Show Graph? showGraph

Boolean

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Resource resourceKey_1

No

Employment

No

Type employmentTypeKey_1

Booking

No

Status bookingStatusKey_1

Start Date startDate

Yes Start of Current Month

Period Type periodTypeWeekMonth

Yes Month

Unit Type unitType

Yes Hours

Type of Hours typeOfHoursAll Yes Allocated and Assigned

Include Unstaffed Roles? includ No Unchecked eUnstaffedRoles

Include Inactive

No Unchecked

Investments? includeInactiveInvestments

Include Inactive

No Checked

Resources? includeInactiveResources

Show Graph? showGraph

No Checked

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values The following values list the lookup values: Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service Employment Type: Contractor, Employee Booking Status: Hard, Mixed, Soft Period Type: Week, Month Unit Type: FTE, Hours Type of Hours: Allocated and Assigned, Allocated, Assigned Parameter Explanations The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control which investments display in the report.
- The Investment OBS Unit parameter displays values that are based on the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Start Date parameter determines the first time period that displays in the report. There are a total of twelve periods that display in the report, starting with the period in which the start date parameter entered falls. If a date other than the first day of a monthly or weekly period is entered, then the report evaluates it to the start of the period to which the date entered belongs. For example, if you enter a start date of 01/15/2015, the report will display the first month starting on 01/01/2015. The same is true for weekly periods.
- The Period Type parameter allows you to change the type of time periods that display across the columns of the report. This parameter works with the start date parameter to determine the periods that display on the report. The following options are available: - Week. The report displays twelve weeks. - Month. The report displays twelve months.
- The Type of Hours parameter allows you to determine which amounts display in the report. The following options are available: - Allocated and Assigned. The report displays allocation, assignment, and variance amounts in the body of the report. It displays allocation and assignment amounts in the line chart. - Allocated. The report displays allocation amounts in the body of the report and the line chart. - Assigned. The report displays assignment amounts in the body of the report and the line chart.
- There is an Include Unstaffed Roles parameter that allows you to include roles, which have not been staffed with resources, in the report. If the parameter is checked, then roles are included in the report. If the parameter is not checked, then roles are not included in the report.
- The Show Graph parameter controls whether the Allocation vs. Assignment chart displays on the report. If the parameter is checked, the chart displays at the top of the report. If the parameter is not checked, the chart does not display.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.
Report Fields and Calculations
The report displays the resource or role name with allocation, assignment, and variance amounts by period and in total, grouped by investment. The report also includes a line chart showing allocation compared to assignments, in hours or FTEs, by month or week. Labor and equipment resources or roles are included in the report; expense and material resources or roles are excluded. Roles are only included if the Include Unstaffed Roles parameter is checked. Programs and templates are excluded.
The report displays twelve periods, starting with the period entered in the start date parameter. If the period type parameter is month, then the first day of the month in which the start date entered falls is the first monthly period that is displayed in the report. If the period type parameter is week, then the first date of the week in which the start date entered falls is the first weekly period that is displayed in the report. Weekly periods are calculated based on the first day of the work week. The amounts being converted to FTE depend on the Data Warehouse calendar table. This report contains the following calculation:
- Variance: The variance field is the difference between the allocation and assignment amounts. Variance background color is determined as follows: Red= The assignment amount exceeds the allocation amount. Formula: Allocation - Assignment
Report Security


Security is determined by investment view rights.


Investment Assignments by Task
The Investment Assignments by Task report displays actual and estimate effort amounts for resource task assignments, by investment. The report displays amounts by resource task assignment, and in total, for each investment. The report also displays task status and % complete information, and assignment start and finish dates.
The following image displays the Investment Assignments by Task report with actual and estimate effort amounts for resource task assignments, by investment.

Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options. - The investment must have at least one resource or role that is assigned to a task for the investment and task to display in the report. For projects, the resource or role must be assigned to a task in the Gantt unless the project has an effort task with resources or roles automatically assigned. For investments other than the project, resources or roles added to the team are automatically assigned to an effort task for the investment. Note: Effort task is a task with the Task ID of '~rmw'. Report Properties The following values list the report properties: Name: Investment Allocations and Assignments Resource ID: CSK_INV_AllocationAssignment Description: Investment Management (PMO Accelerator) Folder: Clarity /Reports/Investment Management/Investment Allocations and Assignments


Path: /ca_ppm/reports/investment_management/CSK_INV_AllocationAssignment Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Resource Manager resourceManagerKey_1
Resource Role roleKey_1
Resource resourceKey_1
Employment Type employmentTypeKey_1
Booking Status bookingStatusKey_1
Task Start Date taskStartDate
Include Completed Tasks? includeCompletedTasks
Include Unstaffed Roles? includeUnstaffedRoles
Include Inactive Investments? includeInactiveInvestments
Include Inactive Resources? includeInactiveResources
Database Schema dwhDBSchema

Single-select query Single-select query Multiple-select query Multiple-select query Multiple-select query Multiple-select query Multiple-select query Multiple-select query Multiple-select query Multiple-select query Multiple-select query Single value date Boolean Boolean Boolean Boolean Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Input Control Name Input Control Resource ID
Investment OBS Type investmentOBSTypeKey_1 Investment OBS Unit investmentOBSUnitKey_1 Investment Type investmentTypeKey_1 Investment Manager investmentManagerKey_1 Investment investmentKey_1 Investment Status investmentStatusKey_1 Resource Manager resourceManagerKey_1 Resource Role roleKey_1 Resource resourceKey_1 Employment Type employmentTypeKey_1 Booking Status bookingStatusKey_1 Task Start Date taskStartDate Include Completed Tasks? includeCompletedTasks Include Unstaffed Roles? includeUnstaffedRoles Include Inactive Investments? includeInactiveInvestments Include Inactive Resources? includeInactiveResources Not applicable
Not applicable
Not applicable
Not applicable

Mandatory Default Value No
No
Yes All
No
No No
No
No No No
No
No No Unchecked
No Unchecked
No Unchecked
No Checked
Yes Passed through Classic PPM Yes Passed through Classic PPM Yes Passed through Classic PPM Yes Passed through Classic PPM

Parameter Lookup Values The following values list the lookup values:


Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Employment Type: Contractor, Employee
Booking Status: Hard, Mixed, Soft
Parameter Explanations
The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control which investments display in the report.
- The Investment OBS Unit parameter displays values that are based on the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Start Date parameter determines the first time period that displays in the report. There are a total of twelve periods that display in the report, starting with the period in which the start date parameter entered falls. If a date other than the first day of a monthly or weekly period is entered, then the report evaluates it to the start of the period to which the date entered belongs. For example, if you enter a start date of 01/15/2015, the report will display the first month starting on 01/01/2015. The same is true for weekly periods.
- The Period Type parameter allows you to change the type of time periods that display across the columns of the report. This parameter works with the start date parameter to determine the periods that display on the report. The following options are available: - Week. The report displays twelve weeks. - Month. The report displays twelve months.
- The Type of Hours parameter allows you to determine which amounts display in the report. The following options are available: - Allocated and Assigned. The report displays allocation, assignment, and variance amounts in the body of the report. It displays allocation and assignment amounts in the line chart. - Allocated. The report displays allocation amounts in the body of the report and the line chart. - Assigned. The report displays assignment amounts in the body of the report and the line chart.
- There is an Include Unstaffed Roles parameter that allows you to include roles, which have not been staffed with resources, in the report. If the parameter is checked, then roles are included in the report. If the parameter is not checked, then roles are not included in the report.
- The Show Graph parameter controls whether the Allocation vs. Assignment chart displays on the report. If the parameter is checked, the chart displays at the top of the report. If the parameter is not checked, the chart does not display.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.
Report Fields and Calculations
The report displays the resource or role name with allocation, assignment, and variance amounts by period and in total, grouped by investment. The report also includes a line chart showing allocation compared to assignments, in hours or FTEs, by month or week. Labor and equipment resources or roles are included in the report; expense and material resources or roles are excluded. Roles are only included if the Include Unstaffed Roles parameter is checked. Programs and templates are excluded.
The report displays twelve periods, starting with the period entered in the start date parameter. If the period type parameter is month, then the first day of the month in which the start date entered falls is the first monthly period that is displayed in the report. If the period type parameter is week, then the first date of the week in which the start date entered falls is the first weekly period that is displayed in the report. Weekly periods are calculated based on the first day of the work week. The amounts being converted to FTE depend on the Data Warehouse calendar table. This report contains the following calculation:
- Variance: The variance field is the difference between the allocation and assignment amounts. Variance background color is determined as follows: Red= The assignment amount exceeds the allocation amount. Formula: Allocation - Assignment
Report Security
Security is determined by investment view rights.


Investment Baseline vs. Plan by Task
The Investment Baseline vs. Plan by Task report displays baseline and plan amounts for resources and roles that are assigned to the investment. This report displays baseline, actual, ETC, EAC, and variance amounts for 12 months, starting with the month selected in the start date report parameter. It has amounts by month and in total for each investment and assignment. The amounts can be displayed as hours or FTEs.
The following image displays the Investment Baseline vs. Plan by Task report displaying the baseline and planned amounts for resources and roles that are assigned to the investment.

Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If
the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options. - The investment must have at least one resource or role assigned to a task for the investment to display in the report. For projects, the resource or role must be assigned to a task in the Gantt unless the project has an effort task with resources or roles automatically assigned. For investments other than the project, resources or roles added to the


team are automatically assigned to an effort task for the investment. Note: Effort task is a task with the Task ID of '~rmw'. - The phase and task grouping in the report is dependent upon the task hierarchy (dwh_inv_task_hierarchy) table, which is populated by running the Load Data Warehouse job. - The baseline amounts are calculated based on the current baseline revision and the time slice with the name MONTHLYRESOURCEBASECURVE (Administration/Data Administration-Time Slices). - The actual amounts are calculated based on the time slice with the name MONTHLYRESOURCEACTCURVE (Administration/Data Administration-Time Slices). - The ETC amounts are calculated based on the time slice with the name MONTHLYRESOURCEESTCURVE (Administration/Data Administration-Time Slices).
Report Properties
The following values list the report properties:
Name: Investment Baseline vs. Plan by Task
Resource ID: CSK_INV_BaseVsPlanByTask
Description: Investment Management (PMO Accelerator)
Folder: Clarity /Reports/Investment Management/Investment Baseline vs. Plan by Task
Path: /ca_ppm/reports/investment_management/CSK_INV_BaseVsPlanByTask
Data Source: Clarity Data Warehouse Bean Data Source
Report Parameter Options
The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Resource Manager resourceManagerKey_1
Resource resourceKey_1
Start Date startDate
Unit Type unitType
Include Inactive Investments? includeInactiveInvestments
Include Inactive Resources? includeInactiveResources
Database Schema dwhDBSchema
UI Theme ppmUserUITheme

Single-select Query
Single-select Query
Multiple-select Query
Multiple-select Query
Multiple-select Query Multiple-select Query
Multiple-select Query Single Value Date Single-select List of Values Boolean
Boolean
Hidden
Hidden

Input Control Name Input Control Resource ID
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager investmentManagerKey_1
Investment investmentKey_1
Resource Manager resourceManagerKey_1
Resource resourceKey_1
Start Date startDate
Unit Type unitType
Include Inactive Investments? includeInactiveInvestments
Include Inactive Resources? includeInactiveResources

Mandatory Default Value No
No
Yes All
No
No No
No Yes Start of Current Month Yes Hours No Unchecked
No Checked
Yes Passed through Classic PPM Yes Passed through Classic PPM


Prompt Text Parameter Name Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Type

Input Control Name Input Control Resource ID

Mandatory Default Value
Yes Passed through Classic PPM Yes Passed through Classic PPM

Parameter Lookup Values:
The following values list the lookup values:
Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Unit Type: FTE, Hours
Parameter Explanations
The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control which investments display in the report.
- The Investment OBS Unit parameter displays values that are based on the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Start Date parameter allows you to control the months that display in the report. The start date that is entered determines the first month that is displayed in the report, with the other 11 months following sequentially after the first month.
Report Fields and Calculations
The report displays the phase name, task name, resource or role name, and the assignment amounts of baseline, actual, ETC, EAC, and variance by month and in total. The amounts being converted to FTE depend on the Data Warehouse calendar table. The assignment amounts include labor resources or roles. Equipment, expense, and material resources or roles are excluded. Programs and templates are excluded. This report contains the following calculations:
- EAC. The EAC field is the sum of the ETC and actual amounts. Formula: ETC + Actual
- Variance.The variance field is the difference between the EAC and baseline amounts. If no baseline exists, the baseline amounts are set to zero and the variance is calculated as if the baseline amounts are zero. Variance background color is determined as follows: Red The EAC amount exceeds the baseline amount. zero Formula: EAC - Baseline
Report Security
Security is determined by investment view rights.

Investment Time and Estimate Review
The Investment Time and Estimate Review report displays actual and estimate amounts for resources assignments, grouped by investment or resource. This report displays plan actuals, plan ETC, pending actuals, and pending ETC giving visibility into actuals and recommended changes in ETCs on tasks. It also shows hours worked by date for the time periods that are selected when running the report.
Report Prerequisites
Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- There must be at least one timesheet for the time period and timesheet status that is selected when running the report or the report displays a message that there are no results that match your criteria.
- The investment must have at least one resource that is assigned to a task for the resource to enter time against the investment and for it to display in the report. For projects, the resource must be assigned to a task in the Gantt unless the project has an effort task with resources automatically assigned. For investments other than the project, resources added to the team are automatically assigned to an effort task for the investment. Note: Effort task is a task with the Task ID of '~rmw'. In a timesheet, resources might also assign themselves to tasks if they are a team member on the project and the 'Prevent Unassigned Timesheet Tasks' field is unchecked on the project. This field is in the time and staff section of the settings properties on the project. They might also create unplanned tasks in a timesheet if they are a team member on the project and have the appropriate permissions (Project - Edit Project Plan).
- The hours worked amounts are calculated based on the time slice with the name DAILYRESOURCETIMECURVE (Administration/Data Administration-Time Slices). This time slice must be configured to cover the dates worked displayed in this report or the report does not display data for those dates.
Report Properties
The following values list the report properties:
Name: Investment Time and Estimate Review
Resource ID: CSK_INV_TimeAndEstimate
Description: Investment Management (PMO Accelerator)
Folder: Clarity /Reports/Investment Management/Investment Time and Estimate Review
Path: /ca_ppm/reports/investment_management/CSK_INV_TimeAndEstimate
Data Source: Clarity Data Warehouse Bean Data Source
Report Parameter Options
The following table lists the report parameter options:

Prompt Text Parameter Name
Resource OBS Type re sourceOBSTypeKey_1

Type Single-select query

Resource OBS Unit resourceOB Single-select query SUnitKey_1

Resource

Multiple-select query

Manager resourceManagerKey_1

Resource resourceKey_1

Multiple-select query

Investment Type investmentTypeKey_1

Multiple-select query

Investment Managerinvestment Multiple-select query ManagerKey_1

InvestmentinvestmentKeyNoOB Multiple-select query S

Time Period timePeriod

Multiple-select Query

Timesheet Status timesheetSta Multiple-select Query tusKey_1

Input Control Name Input Control Resource ID
Resource OBS Type re sourceOBSTypeKey_1

Mandatory Default Value
No

Resource OBS Unit resourceOB No SUnitKey_1

Resource

No

Manager resourceManagerKey_1

Resource resourceKey_1

No

Investment Type investmentTypeKey_1

YesAll

Investment Managerinvestment No ManagerKey_1

InvestmentinvestmentKeyNoOB No S

Time Period timePeriod

Yes

Timesheet Status timesheetSta Yes Open, Submitted, Returned,

tusKey_1

Approved, and Posted


Prompt Text Parameter Name Resource OBS Type re sourceOBSTypeKey_1
Group By groupInvResource
Include Inactive Resources? includeInactiveResources
Include Inactive Investments? includeInactiveInvestments

Type Single-select query Single-select List of Values Boolean
Boolean

Input Control Name Input Control Resource ID
Resource OBS Type re sourceOBSTypeKey_1
Group By groupInvResource
Include Inactive Resources? includeInactiveResources
Include Inactive Investments? includeInactiveInvestments

Mandatory Default Value
No NoInvestments NoUnchecked
NoUnchecked

Parameter Lookup Values
The following values list the lookup values:
Investment Type: All, Application, Asset, Idea, Other Work, Product, Project, Service
Time Period: Current Time Period, Next Time Period, Previous Time Period, List of Time Periods
Timesheet Status: Open, Submitted, Returned, Approved, Posted, Adjusted
Group By: Investments, Resources
Parameter Explanations
The following list describes the parameters:
- The Resource OBS Type is a cascading parameter and determines which units are listed in the Resource OBS Unit parameter. This parameter is not used to control which resources display in the report.
- The Resource OBS Unit parameter displays values that are based on the Resource OBS Type selected. When you select an OBS unit in this parameter, the report displays the resources that are attached to the OBS unit and descendants of the unit you select.
- The Time Period parameter allows you to determine which time periods display on the report. Select at least one time period when running the report.
- The Timesheet Status parameter works with the time period parameter. The report only displays the dates that are worked for the time period and timesheet status you select when running the report. One of the values in the timesheet status parameter is 'Adjusted' and this status requires some additional explanation. An adjusted timesheet is a timesheet which has been posted in Classic PPM but then changes are made to the timesheet and it is re-posted. As a rule, it does not make sense to display adjusted timesheets in reports because these timesheets have been replaced with more recently posted timesheets. While the status of 'Adjusted' is available as an option to allow visibility into adjusted timesheets, it is not typically selected when running the report.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: - Investments. This option groups the report by investment and displays the following columns as the first three columns in the report: task name, resource name, and resource manager. - Resources. This option groups the report by resource and displays the following columns as the first two columns in the report: investment name and task name.
Report Fields and Calculations
If the report is grouped investment, then the report displays the following columns: task name, resource name, resource manager, actuals, ETC, pending actuals, pending ETC, change in ETC, timesheet status, date worked, and hours worked. If the report is grouped resource, then the report displays the following columns: investment name, task name, actuals, ETC, pending actuals, pending ETC, change in ETC, timesheet status, date worked, and hours worked. The amounts are displayed in hours and include labor resources only. Labor resources are included in the report; equipment, expense, and material resources or roles are excluded. Programs and templates are excluded.


The assignment actuals are the actuals to date posted to the task. The assignment ETC is the current plan ETC for the task. The pending actuals are the total actuals that are entered in timesheets that are not posted to the project. The pending ETC is the pending ETC entered using a timesheet or on the task. The timesheet status, date worked, and hours worked columns display based on the time period and timesheet status parameters that are selected when running the report. This gives you visibility into daily time records for the time periods and status you select. This report contains the following calculations: - Change in ETC. The change in ETC field is the variance between the pending ETC and current plan ETC, less
pending actuals. Formula: (Pending ETC - (Assignment ETC - Pending Actuals)) Variance background color is as follows: Green. The recommended Change in ETC is negative, indicating the ETC should be decreased for the task. Red. The recommended Change in ETC is positive, indicating the ETC should be increased for the task. Report Security Security is determined by resource view rights.
Product or Application Roadmap
The Product or Application Roadmap report lists milestones from projects allocated to products or applications and their Gantt schedule covering a timeframe. The timeframe can be twelve months or four quarters. The report can be grouped by any combination of the following options: - Application - Product - Manager The following image displays the Product or Application Roadmap report listing project milestones and their Gantt schedules covering a timeframe.
WARNING To avoid performance issues, run the report after specifying the parameters to limit the amount of data retrieved. Report Prerequisites Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The product must have projects allocated through the hierarchy and the child projects must have milestones. - The application must have projects allocated through the hierarchy and the child projects must have milestones. - Milestones must have the milestone and key task fields selected to display in the report.
Report Properties
The following values list the report properties:
Name: Product or Application Roadmap
Resource ID: CSK_INV_Roadmap
Description: Investment Management (PMO Accelerator)
Folder: Clarity /Reports/Investment Management/Product or Application Roadmap
Path: /ca_ppm/reports/investment_management/CSK_INV_Roadmap
Data Source: Clarity Data Warehouse Bean Data Source
Report Parameter Options
The following table lists the report parameter options:

Prompt Text Parameter Name

Type

Product or

Single-select query

Application OBS Type productApplicationOBSTypeKey_1

Product or

Single-select query

Application OBS Unit productApplicationOBSUnitKey_1

Product or Application

Multiple-select query

Manager productApplicationManagerKey_1

Product or

Multiple-select query

Application productApplicationKey_1

Start Date startDate

Date

Period

Single-select list of values

Type periodTypeMonthQuarter

Group

Single-select list of values

By groupManagerApplicationProduct

Include Inactive

Boolean

Investments? includeInactiveInvestments

Database Schema dwhDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Product or

No

Application OBS Type productApplicationOBSTypeKey_1

Product or

No

Application OBS Unit productApplicationOBSUnitKey_1

Product or Application

No

Manager productApplicationManagerKey_1

Product or

No

Application productApplicationKey_1

Start Date startDate

Yes

Period

No

Type periodTypeMonthQuarter Quarter

Group

Yes

By groupManagerApplicationProduAcptplication

Include Inactive

No

Investments? includeInactiveInvesUtmncehnetscked

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values


The following values list the lookup values:
Period Type: Month, Quarter Parameter Explanations The following list describes the parameters: - The Product or Application OBS Type is a cascading parameter and determines which units are listed in the Product or
Application OBS Unit parameter. This parameter is not used to control which projects display in the report. - The Product or Application OBS Unit parameter displays values that are based on the Product or Application OBS
Type selected. When you select an OBS unit in this parameter, the report displays the products or applications that are attached to the OBS unit and descendants of the unit you select. - The Start Date parameter allows you to control the starting period that displays in the report. - The report has a Period Type parameter that allows you to change the display periods of the Gantt. Month. The Gantt displays twelve months. Quarter. The Gantt displays four quarters. - The report has a Group By parameter that allows you to control how the report is grouped. You can group the report by the following grouping options:
Application. This option groups projects by application. Product. This option groups projects by products. Manager. This option groups project by product or application and by manager. Report Fields and Calculations The report adjusts the column headings and content according to the values selected in the Group By parameter. If the report is grouped by product or application, then the report displays the following columns: product or application name, and twelve monthly periods or four quarterly periods. If the report is grouped by manage, then the report displays the following columns: product or application name, project, and twelve monthly periods or four quarterly periods. Milestones are not rolled up to the product or application level. Programs are included, templates are excluded.
The milestone stoplight color is determined as follows: - Gray = Completed - Green = Started - Blue = Not Started Report Security Security is determined by investment view rights.
Roadmap Timeline Report
The Roadmap Timeline report displays roadmap items for a specific roadmap across time periods. This report displays a graphical timeline by month, quarter, or year for each team roadmap item, grouped by a selected swimlane. You can select up to three (3) numeric metrics during runtime to display with the timeline.
NOTE When a report is generated for a roadmap, it displays relevant roadmap data. However, for roadmap groups, the report does not display any data because the roadmap groups do not contain any corresponding roadmap items stored in the database tables. You can use the Export to PDF option in the Item Actions menu of the Roadmap Timeline layout to export the Roadmap Group to PDF that has the capability to include Widgets, Metrics, Dependencies, and Legend, as required.

The following image shows a Roadmap Timeline report with Benefit, Capital, and Operating amounts by roadmap item with a schedule bar spanning time periods.

This page contains the following topics:
- Report Prerequisites - Report Properties - Report Parameter Options - Parameter Lookup Values - Parameter Explanations - Report Fields and Calculations

Report Prerequisites
Before you run this report, to display any data, your roadmap must have at least one roadmap item spanning the selected fiscal period.

Report Properties Name: Roadmap Timeline Resource ID: CSK_INV_RoadmapTimeline Description: Investment Management (PMO Accelerator) Folder: Clarity /Reports/Investment Management/Roadmap Timeline Path: /ca_ppm/reports/investment_management/CSK_INV_RoadmapTimeline Data Source: Clarity Bean Data Source

Report Parameter Options The following table lists the report parameter options:

Prompt TextParameter Name

Type

Roadmap roadmapKey_1

Single-selectquery

Fiscal Year fiscalYear

Single-selectquery

Period periodTypeMonthQtrYear Single-selectlist of values

Swimlane swimlaneKey_1

Single-select query

Color By colorByKey_1

Single-selectquery

Roadmap Item Metrics roadmapItemMetric

Multiple-select list of values

Input Control NameInput Control
Resource ID

MandatoryDefault Value

Roadmap roadmapKey_1

Yes

Fiscal Year fiscalYear

Yes

Period periodTypeMonthQtrYear Yes Months

SwimlaneswimlaneKey_1

No

Color By colorByKey_1

No

Roadmap Item

No

Metrics roadmapItemMetric


Prompt TextParameter Name

Type

Clip Metrics

Boolean

to Roadmap Dates clipMetricsToRoadmap

Database Schema ppmDBSchema

Hidden

UI ThemeppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User IDppmUser

Hidden


Input Control NameInput Control
Resource ID

MandatoryDefault Value

Clip Metrics

NoUnchecked

to Roadmap Dates clipMetricsToRoadmap

Not applicable

Yes Passed through Clarity

Not applicable Not applicable Not applicable

Yes Passed through Clarity YesPassed through Clarity YesPassed through Clarity

Parameter Lookup Values
The following values list the lookup values:
Period: Months, Quarters, Years
Swimlane: Type, Status, In Plan
Color By: Type, Status, In Plan
Roadmap Item Metrics: Actual, Actual Operating Cost, Actual Capital Cost, Benefit, Capacity, Capital Cost, IRR, NPV, Operating Cost, Payback Period, Rank, Remaining Capacity, Remaining Capital Cost, Remaining Operating Cost, ROI, Total Actual Cost, Total Cost, Total Remaining Cost

Parameter Explanations
The following list describes the parameters:
- Fiscal Year: Allows you to control roadmap metric amounts that are included in the report.
TIP
When you select a fiscal year, the selected metrics are not restricted to only the amounts within the fiscal year. Only when you select the Clip Metrics to Roadmap Dates parameter are the selected metrics restricted to display the amounts within the fiscal year.
- Period: Allows you to change the type of time periods that display across the columns of the report. This parameter works with the fiscal year parameter to determine the periods that display on the report. - Months: The report displays twelve months. - Quarters: The report displays four quarters. - Years: The report displays one year.
- Swimlanes and Color By: These parameters include three (3) default picklists and any custom picklists that your organization created for all roadmaps.
- Roadmap Item Metrics: Allows you to select up to 3 metrics to display for each roadmap item. - Clip Metrics to Roadmap Dates: Allows you to adjust your roadmap items to clip the metric values for the number
and money attributes to match the roadmap duration. If the roadmap includes items that fall either partially or completely outside the roadmap duration, their metric values are clipped to match the roadmap duration. When the option is unchecked, total values are visible for the metrics in the report timeline.

Report Fields and Calculations
The report displays each roadmap item in the roadmap with up to three (3) metric amounts, grouped by the selected value in the swimlane parameter. If you select more than three metrics, the first three metrics in alphabetical order are selected


and the remaining are ignored. The report also includes a timeline bar showing the duration of each roadmap item within the selected periods. Timeline bar colors are calculated based on the Color By report parameter. The report displays twelve periods or less, starting with the period entered in the Fiscal Year parameter. If the period parameter is months, the first day of the month in which the fiscal year falls is the first monthly period in the report. If the period parameter is quarters, the first date of the quarter in which the fiscal year entered falls is the first quarterly period that appears in the report. If the period parameter is years, the Fiscal Year entered appears as a single period.
Investment Risk, Issue, and Change Summary
The Investment Risk, Issue, and Change Summary report includes two sets of pie charts. The first set displays the number of risks and issues by target resolution date and the number of change requests by the expected close date. The second set displays the number of risks, issues, and change requests by status. The report also includes a detailed listing of risks, issues, and change requests with the following information: name, ID, priority, status, category, owner, created date, and target resolution or expected close date. The report only includes investments where the Risk, Issues, and Change modules are available. The report details can be grouped by investment or not grouped. The following image displays the first page of the Investment Risk, Issue, and Change Summary report with charts.
Report Prerequisites Verify that you have completed the following prerequisites before you run this report:
- The Load Data Warehouse and Load Data Warehouse Access Rights jobs must be run before you run this report. If the Data Warehouse is not populated, the report displays a message that there are no matching records. Also, most of the report parameters do not display options.
- The investment must have at least one risk for the project to display in the risk section of the report. - The investment must have at least one issue for the project to display in the issue section of the report. - The investment must have at least one change request for the project to display in the change request section of the
report.
- Risks, issues, and change requests must have the target resolution or expected close date completed for them to be classified as late or not late in the pie graphs. If these dates are not completed, they are included in the "No Date Entered" category.

Report Properties The following values list the report properties: Name: Investment Risk, Issue, and Change Summary Resource ID: CSK_INV_RiskIssueChangeSummary Description: Investment Management (PMO Accelerator) Folder: Clarity /Reports/Investment Management/Investment Risk, Issue, and Change Summary Path: /ca_ppm/reports/investment_management/CSK_INV_RiskIssueChangeSummary Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager projectManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Work Status workStatusKey_1
Risk, Issue, and Change Request Priority riskIssueChangePriorityKey_1
Risk, Issue, and Change Request Status riskIssueChangeStatusKey_1
Sort By sortRiskIssueChangeRequest
Group By groupProject

Single-select Query Single-select Query Multiple-select Query Multiple-select Query Multiple-select Query Multiple-select Query Multiple-select Query Multiple-select Query
Multiple-select Query
Single-select List of Values Single-select List of Values

Input Control Name Input Control Resource ID
Investment OBS Type investmentOBSTypeKey_1
Investment OBS Unit investmentOBSUnitKey_1
Investment Type investmentTypeKey_1
Investment Manager projectManagerKey_1
Investment investmentKey_1
Investment Status investmentStatusKey_1
Work Status workStatusKey_1
Risk, Issue, and Change Request Priority riskIssueChangePriorityKey_1
Risk, Issue, and Change Request Status riskIssueChangeStatusKey_1
Sort By sortRiskIssueChangeRequest
Group By groupProject

Mandatory Default Value No No No No No No No Yes Low, Medium, and High
Yes Open, Work in Progress, and Resolved Yes Created Date Yes Project


Prompt Text Parameter Name

Show Risks? showRisks
Show Issues? showIssues
Show Change Requests? showChangeRequests
Include Programs? includePrograms
Include Inactive Investments? includeInactiveProjects
Database Schema dwhDBSchema

Boolean Boolean Boolean
Boolean
Boolean
Hidden

UI Theme ppmUserUITheme Hidden

Type

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID
Show Risks? showRisks Show Issues? showIssues Show Change Requests? showChangeRequests Include Programs? includePrograms Include Inactive Projects? includeInactiveProjects Not applicable
Not applicable
Not applicable
Not applicable

Mandatory Default Value
No Checked No Checked No Checked
No Checked
No Unchecked
Yes Passed through Classic PPM Yes Passed through Classic PPM Yes Passed through Classic PPM Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Work Status: Requested, Active, On Hold, Cancelled, Complete
Risk, Issue, and Change Request Priority: Low, Medium, High
Risk, Issue, and Change Request Status: Open, Work in Progress, Resolved, Closed
Sort By: ID, Created Date, TargetResolution, or Expected Close Date
Group By: No Grouping, Project
Parameter Explanations
The following list describes the parameters:
- The Investment OBS Type is a cascading parameter and determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control directly which investments display in the report..
- The Investment OBS Unit parameter displays values that are based on the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The following parameters allow you to control whether the corresponding section displays in the report: Show Risks, Show Issues, and Show Change Requests.
- The report has an Include Programs parameter to include programs. If the parameter is checked, then program risks, issues, and change requests are included in the report. If the parameter is not checked, then program risks, issues, and change requests are not included in the report.
- The report has a Sort By parameter that allows you to control how the report is sorted. The following sort options are available: ID. This option sorts the report by the risk, issue, or change request ID in ascending order. Created Date. This option sorts the report by the create date in descending order.


Target Resolution or Expected Close Date. This option sorts the report by the target resolution or expected close date in ascending order.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: No Grouping. This option does not group risks, issues, and change requests so select this value if you do not want to group the report. Project. This option groups the risks, issues, and change requests by the project.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.
Report Fields and Calculations
The report has three parameters that determine the pie charts that display on the first page and the sections that display in the detail listing.
- If the show risks parameter is checked, the report displays two pie charts on the first page showing the risk distribution by target resolution date and status. The report also displays a listing of individual risks with the following information: project name, project ID, risk name, risk ID, calculated risk, priority stoplight, status, category, owner, created date, and target resolution date. If the report is grouped by project, then the project name and ID display as a group heading instead of columns.
- If the show issues parameter is checked, the report displays two pie charts on the first page showing the issue distribution by target resolution date and status. The report also displays a listing of individual issues with the following information: project name, project ID, issue name, issue ID, priority stoplight, status, category, owner, created date, and target resolution date. If the report is grouped by project, then the project name and ID display as a group heading instead of columns.
- If the show change requests parameter is checked, the report displays two pie charts on the first page showing the charge request distribution by expected close date and status. The report also displays a listing of individual change requests with the following information: project name, project ID, change request name, change request ID, priority stoplight, status, category, owner, created date, and expected close date. If the report is grouped by project, then the project name and ID display as a group heading instead of columns. Templates are excluded from the report.
This report contains the following calculations:
- Priority The priority field is based on the priority of the risk, issue, or change request and includes the following values for rating priority: low, medium, and high. The stoplight color is determined as follows: Green= Low Yellow= Medium Red= High
- Calculated Risk. Calculated risk is a score that is based on risk probability and impact, which have the following levels: low (1), medium (2), and high (3). Formula: Probability * Impact Calculated risk background color is determined as follows: Red= The calculated risk is greater than the system-level risk threshold. White= The calculated risk is equal to or less than the system-level risk threshold. The system-level risk threshold is defined in Classic PPM Administration (Administration, Project Management, Risk Settings).
Database view and column: dwh_rim_risk.rim_probability_key dwh_rim_risk.rim_impact_key dwh_rim_risk.is_above_threshold
Report Security


Security is determined by project view rights.


Investment Risk Register

The Investment Risk Register report displays comprehensive information for each investment risk. The risk register also provides the option to display other risks and issues that are associated with the risk. The report only includes investments where the Risk, Issues, and Change modules are available. The report details can be grouped by investment or not grouped.
The following image displays the Investment Risk Register report with details about each risk.
Report Prerequisites
Verify that you have completed the following prerequisites before you run this report:
- The investment must have at least one risk for the project to display in the report. - The risk properties must have fields such as description, category, probability, impact, response type, resolution, target
resolution, impact date, and originating ID completed for them to display data in the report. The risk name, risk ID, priority, status, and owner are required in Classic PPM so they always display data.

Report Properties The following values list the report properties: Name: Investment Risk Register Resource ID: CSK_INV_RiskRegister Description: Project Management (PMO Accelerator) Folder: Clarity /Reports/Investment Management/Investment Risk Register Path: /ca_ppm/reports/investment_management/CSK_PRJ_RiskRegister Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Investment OBS Type projectO Single-select Query BSTypeKey_1

Investment OBS Unit projectOB Single-select Query SUnitKey_1

Investment Type projectTypeKey_1

Multiple-select Query

Investment

Multiple-select Query

Manager investmentManagerKey_1

Investment

Multiple-select Query

Status investmentStatusKey_1

Work Status workStatusKey_1 Multiple-select Query

Risk Priority riskPriorityKey_1 Multiple-select Query

Risk Status riskStatusKey_1 Multiple-select Query

Sort By sortRiskIssue

Single-select List of Values

Input Control Name Input Control Resource ID

Mandatory Default Value

Investment OBS Type projectO No BSTypeKey_1

Investment OBS Unit projectOB No SUnitKey_1

Investment Type projectTypeK No ey_1

Investment

No

Manager investmentManagerKey_1

Investment

No

Status investmentStatusKey_1

Work Status workStatusKey_1 No

Risk Priority riskPriorityKey_1 Yes Low, Medium, and High

Risk Status riskStatusKey_1

Yes Open, Work in Progress, and Resolved

Sort By sortRiskIssue

Yes Created Date


Prompt Text Parameter Name

Type

Group By groupProject

Single-select List of Values

Show Associated Action

Boolean

Items? showAssociatedActionItems

Shows Associated

Boolean

Tasks? showAssociatedTasks

Show Associated Risks and

Boolean

Issues? showAssociatedRisksAndIssues

Include Programs? includePrograms

Boolean

Include Inactive

Boolean

Investments? includeInactiveInvestments

Database Schema ppmDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Group By groupProject

Yes Project

Show Associated Action

No Checked

Items? showAssociatedActionItems

Shows Associated

No Checked

Tasks? showAssociatedTasks

Show Associated Risks and

No Checked

Issues? showAssociatedRisksAndIssues

Include Programs? includePrograms

No Checked

Include Inactive

No Unchecked

Investments? includeInactiveInvestments

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Work Status: Requested, Active, On Hold, Cancelled, Complete
Risk Priority: Low, Medium, High
Risk Status: Open, Work in Progress, Resolved, Closed
Sort By: ID, Created Date, Target Resolution Date
Group By: No Grouping, Project
Parameter Explanations
The following list describes the parameters:
- The Investment OBS Type is a cascading parameter that determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control directly which investments display in the report.
- The Investment OBS Unit parameter displays values that are based on the Investment OBS Type selected. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values might be added, modified, or deactivated.
- The Show Associated Risks and Issues parameter controls whether risks or issues that are associated to risks within the project are included in the report. If the parameter is checked, risks or issues display at the bottom of each risk


section in the report. If the parameter is not checked, risks or issues do not display. Note: Risks and issues can be associated through the multi-select browse fields on the risk properties. - The report has an Include Programs parameter to include programs. If the parameter is checked, then program risks are included in the report. If the parameter is not checked, then program risks are not included in the report. - The report has a Sort By parameter that allows you to control how the report is sorted. The following sort options are available: ID. This option sorts the report by the risk ID in ascending order. Created Date. This option sorts the report by the create date in descending order. Target Resolution Date. This option sorts the report by the target resolution date in ascending order.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: No Grouping. This option does not group risks so you should select this value if you do not want to group the report. Project. This option groups the risks by the project.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.
Report Fields and Calculations
The report displays the risk ID, created date, risk name, target resolution date, impact date, probability, response type, category, status, project name, owner, description, resolution, impact, calculated risk, priority, and originating ID. If the report is grouped by project, then the project name displays as a group heading instead of a column.
- If the show notes parameter is checked, then the report displays the following columns for the risks that have notes: date entered, subject, description, and entered by. They are sorted by date entered, in descending order.
- If the show associated action items parameter is checked, then the report displays the following columns for the risks that have action items associated with them: due date, subject, description, assigned to, and status. They are sorted by the due date, in descending order.
- If the show associated tasks parameter is checked, then the report displays the following columns for the risks that have tasks associated with them: task ID, task name, start, finish, % complete, and status. They are sorted by task ID, in ascending order. If there is no task ID, they are sorted by WBS sequence in ascending order.
- If the show associated risks and issues parameter is checked, then the report displays the following columns for the risks that have other risks or issues associated with them: risk or issue ID, name, description, type (risk or issue), and status. They are sorted by risk or issue ID, in ascending order. Templates are excluded from the report.
This report contains the following calculations:
- Calculated Risk. Calculated risk is a score that is based on risk probability and impact, which have the following levels: low (1), medium (2), and high (3). Formula: Probability * Impact Calculated risk background color is determined as follows: Red= The calculated risk is greater than the system-level risk threshold. White= The calculated risk is equal to or less than the system-level risk threshold.
The system-level risk threshold is defined in Clarity Administration (Administration, Project Management, Risk Settings).
Database view and column:
odf_risk_v2.calculated_risk
odf_risk_v2.is_above_threshold
Report Security
Security is determined by investment view rights.


Investment Issue Register

The Investment Issue Register report displays comprehensive information for each investment issue. The report only includes investments where the Risk, Issues, and Change modules are available. The report details can be grouped by investment or not grouped.
Report Prerequisites
Verify that you have completed the following prerequisites before you run this report:
- The investment must have at least one issue for the project to display in the report. - The issue properties must have fields such as description, category, resolution, target resolution, impact date, and
originating ID completed for them to display data in the report. The issue name, issue ID, priority, status, and owner are required in Classic PPM so they always display data.

Report Properties The following values list the report properties. Name: Investment Issue Register Resource ID: CSK_INV_IssueRegister Description: Investment Management (PMO Accelerator) Folder: Clarity /Reports/Project Management/Project Issue Register Path: /ca_ppm/reports/investment_management/CSK_INV_IssueRegister Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Investment OBS Type investme Single-select Query ntOBSTypeKey_1

Investment OBS

Single-select Query

Unit investmentOBSUnitKey_1

Investment Type investmentTyp Multiple-select Query eKey_1

Investment Manager investment Multiple-select Query ManagerKey_1

Investment investmentKey_1 Multiple-select Query

Investment

Multiple-select Query

Status investmentStatusKey_1

Work Status workStatusKey_1 Multiple-select Query

Issue Priority issuePriorityKey_1 Multiple-select Query

Issue Status issueStatusKey_1 Multiple-select Query

Sort By sortRiskIssue
Group By groupProject
Include Programs? includePrograms

Single-select List of Values Single-select List of Values Boolean

Input Control Name Input Control Resource ID

Mandatory Default Value

Investment OBS

No

Type investmentOBSTypeKey_1

Investment OBS

No

Unit investmentOBSUnitKey_1

Investment Type investmentTyp No eKey_1

Investment Manager investment No ManagerKey_1

Investment investmentKey_1 No

Investment

No

Status investmentStatusKey_1

Work Status workStatusKey_1 No

Issue Priority issuePriorityKey_1 Yes Low, Medium, and High

Issue Status issueStatusKey_1 Yes Open, Work in Progress, and Resolved

Sort By sortRiskIssue

Yes Created Date

Group By groupProject

Yes Project

Include Programs? includePrograms

No Checked


Prompt Text Parameter Name

Include Inactive

Boolean

Projects? includeInactiveProjects

Database Schema ppmDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Type

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Include Inactive

No Unchecked

Projects? includeInactiveProjects

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values.
Work Status: Requested, Active, On Hold, Cancelled, Complete
Issue Priority: Low, Medium, High
Issue Status: Open, Work in Progress, Resolved, Closed
Sort By: ID, Created Date, Target Resolution Date
Group By: No Grouping, Project
Parameter Explanations
The following list describes the parameters:
- The Investment OBS Type is a cascading parameter that determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to control directly which investments display in the report.
- The Investment OBS Unit parameter displays values that are based on the selected Investment OBS Type. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The report has an Include Programs parameter to include programs. If the parameter is checked, then program issues are included in the report. If the parameter is not checked, then program issues are not included in the report.
- The report has a Sort By parameter that allows you to control how the report is sorted. The following sort options are available: ID. This option sorts the report by the issue ID in ascending order. Created Date. This option sorts the report by the create date in descending order. Target Resolution Date. This option sorts the report by the target resolution date in ascending order.
- The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: No Grouping. This option does not group issues, so select this value if you do not want to group the report. Project. This option groups the issues by the project.
- The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays.


Report Fields and Calculations The report displays the issue ID, created date, issue name, target resolution date, impact date, category, status, investment name, owner, description, resolution, priority, and originating ID. If the report is grouped by investment, then the investment name displays as a group heading instead of a column. Templates are excluded from the report. Report Security Security is determined by investment view rights.

Investment Change Request Register
The Investment Change Request Register report displays comprehensive information for each investment change request. The report only includes investments where the Risk, Issues and Change modules are available. The report details can be grouped by investment or not grouped.
Report Prerequisites
Verify that you have completed the following prerequisites before you run this report:
- The investment must have at least one change request for the project to display in the report. - The change request properties must have fields such as description, change in cost, change in schedule, change in
resources, category, expected close, approved by, approved date, and originating ID completed for them to display data in the report. The change request name, change request ID, priority, status, and owner are required in Classic PPM so they always display data.

Report Properties The following values list the report properties: Name: Investment Change Request Register Resource ID: CSK_INV_ChangeRequestRegister Description: Investment Management (PMO Accelerator) Folder: Clarity /Reports/Investment Management/Investment Change Request Register Path: /ca_ppm/reports/investment_management/CSK_INV_ChangeRequestRegister Data Source: Classic PPM Data Warehouse Bean Data Source Report Parameter Options The following values list the report properties.

Prompt Text Parameter Name

Type

Investment OBS Type investme Single-select Query ntOBSTypeKey_1

Investment OBS Unit investmen Single-select Query tOBSUnitKey_1

Investment Type investmentTypeKey_1

Multiple-select Query

Investment

Multiple-select Query

Manager investmentManagerKey_1

Investment investmentKey_1 Multiple-select Query

Investment

Multiple-select Query

Status investmentStatusKey_1

Input Control Name Input Control Resource ID

Mandatory Default Value

Investment OBS Type investme No ntOBSTypeKey_1

Investment OBS Unit investmen No tOBSUnitKey_1

Investment

No

Type investmentTypeKey_1

Investment

No

Manager investmentManagerKey_1

Investment investmentKey_1 No

Investment

No

Status investmentStatusKey_1


Prompt Text Parameter Name

Type

Work Status workStatusKey_1 Multiple-select Query

Change Request Priority changePriorityKey_1

Multiple-select Query

Change Request Status changeStatusKey_1

Multiple-select Query

Sort By sortChangeRequest

Single-select List of Values

Group By groupInvestment

Single-select List of Values

Show Notes? showNotes

Boolean

Include Programs? includePrograms

Boolean

Include Inactive

Boolean

Investments? includeInactiveInvestments

Database Schema ppmDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden


Input Control Name Input Control Resource ID

Mandatory Default Value

Work Status workStatusKey_1 No

Change Request Priority changePriorityKey_1

Yes Low, Medium, and High

Change Request Status changeStatusKey_1

Yes Open, Work in Progress, and Resolved

Sort By sortChangeRequest

Yes Created Date

Group By groupInvestment

Yes Project

Show Notes? showNotes

No Checked

Include Programs? includePrograms

No Checked

Include Inactive

No Unchecked

Projects? includeInactiveInvestments

Not applicable

Yes Passed

Not applicable Not applicable Not applicable

Yes Passed through Classic PPM
Yes Passed through Classic PPM
Yes Passed through Classic PPM

Parameter Lookup Values
The following values list the lookup values:
Work Status: Requested, Active, On Hold, Cancelled, Complete
Change Request Priority: Low, Medium, High
Change Request Status: Open, Work in Progress, Resolved, Closed
Sort By: ID, Created Date, Expected Close Date
Group By: No Grouping, Project
Parameter Explanations
The following list describes the parameters:
- The Investment OBS Type is a cascading parameter that determines which units are listed in the Investment OBS Unit parameter. This parameter is not used to directly control which investments display in the report
- The Investment OBS Unit parameter displays values that are based on the selected Investment OBS Type. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select.
- The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values can be added, modified, or deactivated.
- The report has an Include Programs parameter to include programs. If the parameter is checked, then program change requests are included in the report. If the parameter is not checked, then program change requests are not included in the report.
- The report has a Sort By parameter that allows you to control how the report is sorted. The following sort options are available:


ID. This option sorts the report by the change request ID in ascending order. Created Date. This option sorts the report by the create date in descending order. Expected Close Date. This option sorts the report by the expected close date in ascending order. - The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays. - The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: No Grouping. This option does not group change requests so do not select this value if you do not want to group the report. Project. This option groups the change requests by the project. Report Fields and Calculations The report displays the change request ID, created date, change request name, change in cost, change in schedule, change in resources, category, status, investment name, owner, description, expected close date, approved by, approved date, priority, and originating ID. If the report is grouped by investment, then the investment name displays as a group heading instead of a column. Templates are excluded from the report. Report Security Security is determined by investment view rights.
Investment Status Report List
The Investment Status Report List report displays schedule dates, work status, and status report indicators across investments. The report can be grouped by several different options including Portfolio Category, Overall Status, Stage, Investment Manager, and OBS Level. The columns that display in the report change based on the grouping option selected. The overall status summary pie chart displays the percentage of investments with each overall status color. The column chart displays the number of investments for each overall status color and is grouped by the option that is selected when running the report. The report only includes investments where the Risk, Issues, and Change modules are available. The following image displays the Investment Status Report List report with schedule dates, work status, and status report indicators across investments.

Report Prerequisites Verify that you have completed the following prerequisites before you run this report: - The Investment OBS Type is a cascading parameter that determines which units are listed in the Investment OBS Unit
parameter. This parameter is not used to directly control which investments display in the report. - The Investment OBS Unit parameter displays values that are based on the selected Investment OBS Type. When
you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select. - The investment does not have any prerequisites to display in the report. - The Investment OBS Unit parameter displays values that are based on the selected Investment OBS Type. When you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select. The investment does not have any prerequisites to display in the report. - The status report date and the stoplight indicators are based on the most recent investment status report so at least one status report must be completed on the investment for these fields to display data. The status report with the greatest report date and report status of final, or no value selected for report status, is considered the most recent. The status report indicators display gray stoplights if the investment does not have a status report meeting these conditions. Report Properties The following values list the report properties: Name: Investment Status Report List Resource ID: CSK_INV_StatusReportList Description: Investment Management (PMO Accelerator) Folder: Clarity /Reports/Investment Management/Investment Status Report List Path: /ca_ppm/reports/investment_management/CSK_INV_StatusReportList


Data Source: Clarity Data Warehouse Bean Data Source Report Parameter Options The following table lists the report parameter options.

Prompt Text Parameter Name

Type

Investment OBS Type projectO Single-select Query BSTypeKey_1

Investment OBS Unit projectOB Single-select Query SUnitKey_1

Portfolio Category 1 portfolioCategoryKey_1

Multiple-select Query

Portfolio Category 2 portfolioCategoryKey_2

Multiple-select Query

Portfolio Category 3 portfolioCategoryKey_3

Multiple-select Query

Portfolio Category 4 portfolioCategoryKey_4

Multiple-select Query

Investment Type investmentTypeKey_1

Multiple-select Query

Investment

Multiple-select Query

Manager investmentManagerKey_1

Investment investmentKey_1 Multiple-select query

Investment Status investmentStatusKey_1

Multiple-select query

Work Status workStatusKey_1 Multiple-select query

Overall Status overallStatus

Multiple-select list of values

Group

Single-select

By groupCategoryOBSOverallStatluisst of values

Include Inactive

Boolean

Investments? includeInactiveInvestments

Show Graph? showGraph

Boolean

Database Schema ppmDBSchema

Hidden

UI Theme ppmUserUITheme Hidden

Language ppmUserLanguage Hidden

User ID ppmUser

Hidden

Input Control Name Input Control Resource ID

Mandatory Default Value

Investment OBS Type projectO No BSTypeKey_1

Investment OBS Unit projectOB No SUnitKey_1

Portfolio Category

No

1 portfolioCategoryKey_1

Portfolio Category

No

2 portfolioCategoryKey_2

Portfolio Category

No

3 portfolioCategoryKey_3

Portfolio Category

No

4 portfolioCategoryKey_4

Investment

No

Type investmentTypeKey_1

Investment

Yes Created Date

Manager investmentManagerKey_1

Investment investmentKey_1 Yes

Investment

Yes

Status investmentStatusKey_1

Work Status workStatusKey_1 No

Overall Status overallStatus

Yes Red, Yellow, Green, Gray

groupCategoryOBSOverallStatus No Grouping

Include Inactive

No Unchecked

Investments? includeInactiveInvestments

Show Graph? showGraph

No Checked

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Not applicable

Yes Passed through Classic PPM

Parameter Lookup Values The following values list the lookup values:


Work Status: Requested, Active, On Hold, Cancelled, Complete Overall Status: Red, Yellow, Green, Gray Status Reporting: Not Required, Optional, Required Group By: No Grouping, Portfolio Category 1-4, Overall Status, Stage, Investment Manager, OBS Level 1-10 Parameter Explanations The following list describes the parameters: - The Investment OBS Type is a cascading parameter that determines which units are listed in the Investment OBS Unit
parameter. This parameter is not used to control directly which investments display in the report. - The Investment OBS Unit parameter displays values that are based on the Investment OBS Type selected. When
you select an OBS unit in this parameter, the report displays the investments that are attached to the OBS unit and descendants of the unit you select. - The Portfolio Category 1-4 parameters are associated to the Portfolio Category 1-4 lookups in Classic PPM. These lookups are configurable so lookup values can be added, modified, or deactivated. - The Work Status parameter is associated to the Work Status lookup in Classic PPM. This lookup is configurable so lookup values might be added, modified, or deactivated. - The report has an Include Programs parameter to include programs. If the parameter is checked, then program risks are included in the report. If the parameter is not checked, then program risks are not included in the report. - The report has a Group By parameter that allows you to control how the report is grouped. The following group options are available: No Grouping. This option does not group risks so you should select this value if you do not want to group the report. Portfolio Category 1-4. This option groups the column chart and investments by portfolio category. The portfolio category fields are associated to lookups that do not include any values and can be configured to support your categorizations. The portfolio categories are configurable lookups so values can be added, modified, or deactivated. - Overall Status. This option groups the column chart and investments by the overall status color of the most recent status report. - Stage. This option groups the column chart and investments by stage. The stage is a configurable lookup so values can be added, modified, or deactivated. - Investment Manager. This option groups the column chart and investments by investment manager. - OBS Level 1-10. This option groups the column chart and investments by OBS level and requires that you select a unit in the Investment OBS parameter to group by an OBS level. The Investment OBS parameter and grouping by an OBS level work with one another. The Investment OBS parameter determines which OBS you group by when you select a group by level. You can group by any OBS level from 1 to 10, which is the maximum number of levels for an OBS supported in the product. OBS level 1 is the top level in the hierarchy and OBS level 10 is the bottom level in the hierarchy. When you group by an OBS level, the investments that are attached to OBS units at the level you select and any units below the level you select are rolled up to the group by the level of the report. If you group by an OBS level that is lower in the hierarchy, then the report groups the investments by this level (for example, OBS Level 4). If investments are associated to units above level 4 (for example, investments are attached to levels 2 and 3), then the investments that are associated with units higher in the hierarchy display in the report in an Undefined grouping. The Undefined grouping indicates that there is no OBS unit that is defined for the investment for the level by which you are grouping. If you group by an OBS level but you do not select a unit in the Investment OBS parameter, then the

report returns results. However, the report does not group by an OBS level because it relies on the Investment OBS parameter to determine which OBS to use for grouping. - The Include Programs parameter controls whether program status reports display. If the parameter is checked, the report displays program status reports. If the parameter is not checked, the program status reports do not display. - The investment statuses are displayed based on the existing investment statuses in the environment such as test, dev, or prod. For example, if there are investments with only Approved status, then only the Approved investment status displays. - The Show Graph parameter controls whether the Overall Status charts display on the report. If the parameter is checked, the charts display at the top of the report. If the parameter is not checked, the charts do not display.
Report Fields and Calculations
If the report is grouped by stage, then the report displays the following columns: investment name, investment manager, start date, finish date, work status, report date, and status report indicators. If the report is grouped by investment manager, then the report displays the following columns: investment name, investment manager, start date, finish date, work status, stage, report date, and status report indicators. If the report is grouped by any other option, then the report displays the following columns: investment name, investment manager, start date, finish date, stage, report date, and status report indicators. When the show graph parameter is checked, the report also includes a pie chart and a column chart. The overall status summary pie chart displays the percentage of investments, grouped by the overall status color of their most recent status report. The column chart displays the number of investments for each overall status color and is grouped by the option that is selected when running the report. This report contains the following calculations from the most recent status report. The status report with the greatest report date and a report status of final, or no value that is selected for report status, is considered the most recent status report.
- Overall. This is the overall status field from the status report. The overall status is a calculated field in Classic PPM that is the sum of the schedule status, scope status, and cost and effort status fields on the status report. The stoplight color is determined as follows: - Green= On Track (< 40) - Yellow= Minor Variance (>=40 and <90) - Red= Significant Variance (>= 90) - Gray= No status report exists with a report status of final, or no value that is selected for report status
Database view and column:
dwh_inv_status_report.sr_schedule_status_key
- Schedule. This is the schedule status field from the status report. The schedule status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows: - Green= On Track (10), - Yellow= Minor Variance (20) - Red= Significant Variance (30) - Gray= No status report exists with a report status of final, or no value that is selected for report status
Database view and column:
dwh_inv_status_report.sr_schedule_status_key
- Cost and Effort. This is the cost and effort status field from the status report. The cost and effort status is determined by the selection of the On Track, Minor Variance, or Significant Variance status option. The stoplight color is determined as follows:
- Green= On Track (10) Yellow= Minor Variance (20) Red= Significant Variance (30) Gray= No status report exists with a report status of final, or no value that is selected for report status
Database view and column:
