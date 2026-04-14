# Add-in - PMO Accelerator

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[19 - Add-Ins and Integrations/_MOC Integrations|Add-Ins and Integrations]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[18 - Advanced Reporting/PMO Accelerator Setup]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/PMO Admin Reports]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Parameter Explanations (#parameter-explanations)
- H2: Report Fields and Calculations (#report-fields-and-calculations)
- H3: Database View and Column (#database-view-and-column)
- H3: Report Security (#report-security)
- H2: Add-in: PMO Accelerator (#add-in-pmo-accelerator)
- H3: What's New in Release 15.7.1 (#whats-new-in-release-1571)
- H3: What's New in Release 15.7 (#whats-new-in-release-157)
- H3: What's New in Release 15.6.1 (#whats-new-in-release-1561)
- H3: What's New in Release 15.5.1 (#whats-new-in-release-1551)
- H3: What's New in Release 15.5 (#whats-new-in-release-155)
- H3: What's New in Release 15.4.1 (#whats-new-in-release-1541)
- H3: What's New in Release 15.4.0 (#whats-new-in-release-1540)
- H3: What's New in Release 15.3 (#whats-new-in-release-153)
- H3: What's New in Release 15.2 (#whats-new-in-release-152)
- H3: What's New in Release 15.1 (#whats-new-in-release-151)
- H2: Attribute Overwrite and Data Warehouse (#attribute-overwrite-and-data-warehouse)
- H2: View Protection (#view-protection)
- H2: PMO Accelerator Certified and Supported Versions (#pmo-accelerator-certified-and-supported-versions)
- H2: PMO Accelerator Add-In Items Automatically Installed (#pmo-accelerator-add-in-items-automatically-installed)
- H3: Overwritten Items by Object Type (#overwritten-items-by-object-type)
- H3: Overwritten Items by Query Type (#overwritten-items-by-query-type)
- H2: Install the PMO Accelerator Add-In and PMO Sample Data (#install-the-pmo-accelerator-add-in-and-pmo-sample-data)
- H3: (On-Premise only) Install the PMO Accelerator Add-in (#on-premise-only-install-the-pmo-accelerator-add-in)
- H3: (On-Premise only) Import the Jaspersoft Advanced Reporting Content for the PMO Accelerator (#on-premise-only-import-the-jaspersoft-advanced-reporting-content-for-the-pmo-accelerator)
- H3: Upgrade the PMO Accelerator Content (#upgrade-the-pmo-accelerator-content)
- H3: PMO Accelerator Content Items by Release (#pmo-accelerator-content-items-by-release)
- H3: (On-Premise only) (Optional) Install PMO Accelerator Sample Data (#on-premise-only-optional-install-pmo-accelerator-sample-data)
- H2: PMO Accelerator Sample Data (#pmo-accelerator-sample-data)
- H3: PMO Sample Data: Organizational Breakdown Structures (OBS) (#pmo-sample-data-organizational-breakdown-structures-obs)
- H3: PMO Sample Data: Access Groups (#pmo-sample-data-access-groups)
- H3: PMO Sample Data: Resources (#pmo-sample-data-resources)
- H3: PMO Sample Data: Services (#pmo-sample-data-services)
- H3: PMO Sample Data: Assets (#pmo-sample-data-assets)
- H3: PMO Sample Data: Applications (#pmo-sample-data-applications)
- H3: PMO Sample Data: Ideas (#pmo-sample-data-ideas)
- H3: PMO Sample Data: Other Work (#pmo-sample-data-other-work)
- H3: PMO Sample Data: Project Templates (#pmo-sample-data-project-templates)
- H3: PMO Sample Data: Projects (#pmo-sample-data-projects)
- H3: PMO Sample Data: Programs (#pmo-sample-data-programs)
- H3: PMO Sample Data: Portfolios (#pmo-sample-data-portfolios)
- H2: PMO Accelerator Object Views (#pmo-accelerator-object-views)
- H3: Assignment (#assignment)
- H3: Baseline (#baseline)
- H3: Change Request (#change-request)
- H3: Cost and Benefit Plan (#cost-and-benefit-plan)
- H3: GL Allocation and Resource Credit (#gl-allocation-and-resource-credit)
- H3: Investments (#investments)
- H3: Issue (#issue)
- H3: Project (#project)
- H3: Resource (#resource)
- H3: Risk (#risk)
- H3: Task (#task)
- H3: Team (#team)
- H2: PMO Project Lifecycle and Processes (#pmo-project-lifecycle-and-processes)
- H3: Project Lifecycle Processes (#project-lifecycle-processes)
- H3: Project Templates (#project-templates)
- H3: Idea Type and Idea Category Lookup Mapping (#idea-type-and-idea-category-lookup-mapping)
- H3: Add-In Lookup Mapping (#add-in-lookup-mapping)
- H2: PMO Idea Review Process (#pmo-idea-review-process)
- H3: Create an Idea (#create-an-idea)

## Parameter Explanations

The following list describes the parameters:
- **Application OBS Type** is a cascading parameter and determines which units are listed in the Application OBS Unit parameter. This parameter is not used to directly control which applications display in the report.
- **Application OBS Unit** displays values that are based on the Application OBS Type you select. When you select an OBS unit in this parameter, the report displays the applications that are attached to that OBS unit and the descendants of the unit.
- **Group By** shows a list of options to group and sort the applications by in the report. Group subtotals are calculated for each group.

## Report Fields and Calculations

The report displays the application name, software category, application source, installation type, mission criticality, value score, technical score, risk score, number of users, and annual planned cost. The report is grouped by software category by default. You can also select to group the report by either mission criticality or application manager.

This report contains the following calculations:
- **Value Score** - The value score is an aggregated calculated field on the application. The value score field is derived from the latest assessment on the application. The latest assessment is defined as the assessment with the latest assessment date where the assessment status is Final. The Value Score stoplight color is determined as follows:
- Red = Low (< 34)
- Yellow = Medium (>= 34 and < 68)
- Green = High (>= 68)
- White = No value score on the assessment
- **Technical Score** - The technical score is an aggregated calculated field on the application. The technical score field is derived from the latest assessment on the application. The latest assessment is defined as the assessment with the latest assessment date where the assessment status is Final. The Technical Score stoplight color is determined as follows:
- Red = Low (< 34)
- Yellow = Medium (>= 34 and < 68)
- Green = High (>= 68)
- White = No technical score on the assessment
- **Risk Score** - The risk score is an aggregated calculated field on the application. The risk score field is derived from the latest assessment on the application. The latest assessment is defined as the assessment with the latest assessment date where the assessment status is Final. The Risk Score stoplight color is determined as follows:
- Green = Low (< 34)
- Yellow = Medium (>= 34 and < 68)
- Red = High (>= 68)
- White = No risk score on the assessment
- **Annual Planned Cost** - The annual planned cost is calculated by one of two methods, depending on whether the application has a cost plan of record in financial planning. If the application has a cost plan of record, then the costs are summed for the current fiscal year from that plan. Otherwise, the application financial summary Planned Cost field is used and prorated for the current fiscal year portion.

### Database View and Column

The following database view and column applies to this report:

`apm_app_plan_cost_y_v.plan_cost`

### Report Security

The application view rights determine the security for this report.

---

## Add-in: PMO Accelerator

The PMO Accelerator add-in is a collection of content and view configurations that are designed for project portfolio management that is not tied to any specific industry. The PMO Accelerator provides a collection of content that your organization does not have to create. The add-in enables you to support your existing program management office (PMO). The add-in is useful for managing and gaining insight into portfolio, program, and project performance.

The add-in includes the following content:
- Dashboard pages
- Portlets
- Processes
- View configurations
- Access groups

For more information about access groups, see PMO Accelerator Access Groups in the Reference section of the English documentation. The Access Rights Reference information is not localized in other languages.

The PMO Accelerator also includes optional sample data you can install in non-production environments. (On-premise customers can install sample data themselves. SaaS customers can request the inclusion or exclusion of PMO sample data on a hosted instance of Classic PPM.)

> [!WARNING]
> The sample data should never be installed in a production environment.

The sample data includes portfolios, programs, projects, ideas, applications, assets, services, other work, resources, resource roles, templates, financial plans, and organizational breakdown structures (OBS). It also includes the minimum administration setup that is required for this content.

### What's New in Release 15.7.1

No new additional reports are added to the PMO Accelerator in 15.7.1 release.

### What's New in Release 15.7

In 15.7, we added one (1) new report to the PMO Accelerator:
- **Customizations Overview**: The Customizations Overview report lists content that is not included out-of-the-box with Clarity so we can quickly identify custom content added to Clarity. The report also contains other types of custom content created in Clarity, such as Studio objects and attributes, NSQL queries, GEL scripts, reports, and jobs. For more information, see PMO Reports: Customizations Overview.

### What's New in Release 15.6.1

You can apply the optional new **Include in Status Reporting** checkbox to your tasks, risks, issues, or changes to allow users to mark specific items for inclusion in your status reports. This practice can help your teams identify special items for further review, discussion, or escalation.

### What's New in Release 15.5.1

In 15.5.1, we added two (2) new Jaspersoft Studio reports to the PMO Accelerator:
- **Project KPI Trends**: The datasource for this report is based on an example of data warehouse trending capabilities. See Data Warehouse Trending Configuration, Jobs, and Reporting.
- **Roadmap Timeline**: The datasource for this report is based on the standard Clarity transactional database and demonstrates an example of a roadmap timeline for investment planning. See Clarity: Top-Down Planning with Roadmaps.

No Clarity database or data warehouse schema changes were made in 15.5.1.

### What's New in Release 15.5

The following new access rights were added to the PMO Resource Administrator security group:
- Team - Create
- Team - Delete - All
- Team - Edit - All
- Team - View - All

### What's New in Release 15.4.1

The following new features and enhancements are available with the new accelerator in the 15.4.1 service pack:

**Renamed PMO Attribute**: The Business Owner attribute is renamed to Sponsor to match Clarity. No internal IDs were changed. Only the following classic, Clarity, and reporting display value instances changed:
- User interface labels and error messages
- Portlets, lookups, NSQL queries, and processes
- Jaspersoft reports

No Clarity database or data warehouse schema changes were made in 15.4.1.

**New Global Access Right**: A new global access right, **Tasks - Navigate** is now available to provide access to the Tasks main menu item. The access right is included in the following PMO Accelerator access groups:
- PMO Executive Viewer
- PMO Executive Viewer Extended
- PMO Financial Administrator
- PMO Idea Creator
- PMO Idea Reviewer
- PMO Investment Creator
- PMO Investment Viewer Extended
- PMO Portfolio Manager
- PMO Program Manager
- PMO Project Creator
- PMO Project Manager
- PMO Project Manager Extended
- PMO Project Viewer
- PMO Resource Manager
- PMO Resource Manager Extended
- PMO Team Member
- PMO Vendor Management
- PMO System Administrator

### What's New in Release 15.4.0

If you upgrade from Classic PPM 15.3 or earlier, you also receive the following 15.4.0 updates:
- The add-in includes the following new content items for personally identifiable information (PII):
- Job
- Lookup
- Views
- Object
- Menu

  See Protect Personally Identifiable Information for GDPR for details.
- An enhancement to the Top 50 Project Watchlist report.
- The add-in supports the same PMO Accelerator Attributes Enabled for REST APIs as the previous release.

### What's New in Release 15.3

The following new PMO features and enhancements are available with this release:
- This release no longer requires the manual configuration of a system currency before installing PMO Accelerator sample data. The system currency is now automatically set to USD when you install the PMO Accelerator sample data (`admin content-demo csk`).
- Installation of the PMO Accelerator is required in a new environment or after an upgrade to activate Clarity. The PMO Accelerator is required for certain data fields and views in Clarity.
- The add-in supports the same PMO Accelerator Attributes Enabled for REST APIs as the previous release.
- API Alias ID for new installs and upgrades for the following PMO attributes has been removed:
- Project Category
- Cost Variance %
- Project Cost Variance
- Project Cost Variance%
- Methodology
- API Alias ID for new installs and upgrades for the following PMO attributes has been added:
- Portfolio Category 1, 2, 3 and 4
- Business Alignment
- Alignment Factors: Corporate Priority, Business Unit Priority, Regulatory Compliance, Architectural Fit, Commercial Value, and Technology Compliance

### What's New in Release 15.2

The following new features and enhancements are available with this version:
- Administration reports include two new reports: Database Connection Check: Classic PPM, Database Connection Check: Data Warehouse.
- Reports and filter options in the Advanced Reporting content are modified to use the new security model in the Data Warehouse.
- Enhancements and fixes to existing portlets and reports.
- Cost and Effort Dashboard, Project Document Review, and the Schedule Dashboard portlet were improved.
- Status Report Properties view was improved.

The add-in supports the same PMO Accelerator Attributes Enabled for REST APIs as the previous release.

### What's New in Release 15.1

The following new features and enhancements are available with this version:
- Administration reports include two new reports: Database Connection Check: Classic PPM, Database Connection Check: Data Warehouse.
- Reports and filter options in the Advanced Reporting content are modified to use the new security model in the data warehouse.
- Enhancements and fixes to existing portlets and reports.

## Attribute Overwrite and Data Warehouse

Attributes installed by the PMO Accelerator in previous versions are overwritten during the upgrade to a higher version of the PMO Accelerator. If you have configured these attributes by renaming them, changing formulas in calculated attributes, changing the **Included in the Data Warehouse** check box, or modifying display mappings; then your configurations will be overwritten and you will need to manually redo them after upgrade. These attributes are on the following objects: benefit plan detail, idea, investment, project, and status report. For the full list of items overwritten upon upgrade, see PMO Accelerator Add-In Items Automatically Installed in Add-In PMO Accelerator.

## View Protection

If you previously used Studio to configure views or installed another add-in that configured views, these configurations remain as-is when installing the PMO Accelerator add-in. They are not overwritten by new or changed content during installation. You can decide whether to make manual changes to your existing configurations or to apply the new content delivered in the PMO Accelerator.

See PMO Accelerator Object Views for information about how to apply the view changes installed by this add-in.

## PMO Accelerator Certified and Supported Versions

See the Release Notes for the required PMO Accelerator add-in version for your release of Classic PPM.

## PMO Accelerator Add-In Items Automatically Installed

Attributes installed by the PMO Accelerator in previous versions are overwritten during the upgrade to a higher version of the PMO Accelerator. If you have configured these attributes by renaming them, changing formulas in calculated attributes, changing the **Included in the Data Warehouse** check box, or modifying display mappings; then your configurations will be overwritten and you will need to manually redo them after upgrade.

The majority of attributes installed by the PMO Accelerator have the **Include in the Data Warehouse** field checked by default. You cannot uncheck this field because reports depend upon them. The PMO Accelerator attribute IDs are renamed when their respective columns are created in the Data Warehouse. See the PMO Accelerator Advanced Reporting Content for a complete list of the attributes and their corresponding column names.

If you have previously configured the content installed by the PMO Accelerator for the following items, the configurations are not preserved. They are overwritten during installation or upgrade. The installation of these items is forced in each PMO release because it is required that the changes be applied.

The description column in the table references the release that initially contained the item change for non-object changes.

### Overwritten Items by Object Type

| Name | Type |
|------|------|
| Benefit Plan Detail | Object |
| Idea | Object |
| Investment | Object |
| Portfolio | Object |
| Project | Object |
| Status Report | Object |
| Idea and Project Category Parameterized Lookup | Lookup |
| PMO-Project Status | Page |
| Actuals by Transaction Type | Portlet |
| Cost and Schedule Overview | Portlet |
| Posted Transaction Review | Portlet |
| Program Manager Cost Dashboard | Portlet |
| Schedule and Progress | Portlet |
| Team Member Task Summary | Portlet |

### Overwritten Items by Query Type

| Name | Type |
|------|------|
| Actuals by Transaction Type | Query |
| Change Request Management | Query |
| Cost and Effort Dashboard | Query |
| Cost and Schedule Overview | Query |
| Current Issues | Query |
| Current Issues Listing | Query |
| Earned Value Analysis by Phase | Query |
| Investment Resource Utilization | Query |
| Investment Timesheet Review | Query |
| Investment Timesheet Summary | Query |
| Issue Management | Query |
| Issues By Priority | Query |
| Issues Listing | Query |
| Late Status Reports | Query |
| Late Tasks and Milestones | Query |
| Milestones | Query |
| Missing Status Reports | Query |
| My Timesheets | Query |
| Pending Estimates | Query |
| Process Bottlenecks | Query |
| Program Manager Cost Dashboard | Query |
| Program Manager Schedule Dashboard | Query |
| Project Analysis | Query |
| Project Baselines | Query |
| Project Costs by Phase | Query |
| Project Costs By Resource | Query |
| Project Costs By Task | Query |
| Project Cycle Time Analysis | Query |
| Project Document Review | Query |
| Project Indicators | Query |
| Project KPIs By OBS | Query |
| Project Life Cycle Review | Query |
| Risk Management | Query |
| Schedule and Progress | Query |
| Schedule Dashboard | Query |
| Schedule Performance | Query |
| Schedule Performance Details | Query |
| Staffing | Query |
| Staffing Details | Query |
| Status Report Indicators | Query |
| Status Report Listing | Query |
| Team Capacity | Query |
| Team Member Organizer | Query |
| Timesheet Notes | Query |
| Timesheet Review | Query |
| Transaction Review | Query |
| Upcoming Project Milestones | Query |

---

## Install the PMO Accelerator Add-In and PMO Sample Data

As an administrator, configure the PMO Accelerator content for Classic PPM. The PMO Accelerator add-in is required for all new installations and upgrades of Clarity.

To help you evaluate new features, optional PMO sample data content is also available. You can install the optional PMO sample data in systems set to USD currency only.
- Video: Install Content Add-Ins (PMO Accelerator)
- (On-Premise only) Install the PMO Accelerator Add-in
- (On-Premise only) Import the Jaspersoft Advanced Reporting Content for the PMO Accelerator
- Upgrade the PMO Accelerator Content
- PMO Accelerator Content Items by Release
- (On-Premise only) (Optional) Install PMO Accelerator Sample Data
- PMO Accelerator Sample Data

### (On-Premise only) Install the PMO Accelerator Add-in

> [!NOTE]
> Verify that you have already installed the Clarity data warehouse. The PMO Accelerator add-in includes items that are based on the data warehouse schema. If the data warehouse schema is unavailable, installation of the add-in is unsuccessful. See Install and Configure the Data Warehouse.

Install the PMO Accelerator add-in on your Classic PPM application server. The PMO Accelerator add-in is included with Classic PPM and is ready for installation. In releases prior to PMO Accelerator Release 3.2, you had to download the addin installer from the support site, but this is no longer necessary.

If you are upgrading from a previous Classic PPM release with the PMO Accelerator installed, you must also upgrade the PMO Accelerator. For the required version, see the Release Notes.

**Follow these steps:**

1. As a best practice, we recommend you back up the existing Classic PPM installation directory and database before installing the add-in. Back up your installation before installing this add-in so that you can restore the application to the prior version if necessary. Once you have installed the add-in, you cannot uninstall it.
2. Stop the services. Before installing the add-in, stop the Classic PPM Application (app) and Classic PPM Background (bg) services. Stop the services from Classic PPM System Administration (CSA).
3. Execute the install script. The script installs lookups, queries, portlets, pages, views, processes, groups, resource roles, project templates, and database objects.
   a. Open a command prompt and navigate to the Classic PPM runtime bin directory.
   b. Enter the command: `admin content csk`

   The installation process begins and information displays on the screen. The information is captured and stored in the `admin.log` file that is located in the logs directory. The output files are stored in the `logs/content/xog/csk` directory.

   c. Review the screen output and the logs for important information after the installation completes.
4. Start the services. After installing the add-in, start the Classic PPM Application (app) and Classic PPM Background (bg) services in CSA.

### (On-Premise only) Import the Jaspersoft Advanced Reporting Content for the PMO Accelerator

The following procedure imports domains, reports, input controls, localization bundles, images, templates, data sources, and roles. It also creates the organization name and the user who is specified in the Classic PPM System Administration (CSA) Reporting subtab.

> [!WARNING]
> It is required that you specify the organization name, organization ID, and the user in the CSA Reporting subtab before importing the Jaspersoft Advanced Reporting Content. In addition, the PMO Accelerator is a required prerequisite of the Jaspersoft Advanced Reporting content because many of the reports reference objects and attributes that are delivered in the PMO Accelerator.

Before importing the Jaspersoft Advanced Reporting content, complete the steps to set up advanced reporting in Jaspersoft and Classic PPM. For more information about how to set up advanced reporting, see Installing and Upgrading.

The import does the following:
- Creates the organization. Define the organization name and organization ID in the CSA Reporting subtab before importing.
- Creates the Clarity folder and its subfolders in the organization repository. The Clarity folder contains all the Jaspersoft Advanced Reporting content items.
- Creates the Advanced Reporting roles. For a description of these roles, see Advanced Reporting Roles and Permissions.
- Creates the PMO Accelerator roles. These roles determine content permissions and begin with `CSK_`.
- Updates the domains with the Data Warehouse schema owner name specific to the database.
- Uploads the UI Themes.
- Creates the Shared folder.
- Creates the Jaspersoft administrator user. The default user is `ppmjasperadmin`. This user can be changed in the CSA Reporting subtab before importing, but after importing this user should not be modified. The Create and Update Jaspersoft Users job and the Load Data Warehouse job, which dynamically updates domains, require this user.
- Creates an entry for the Jaspersoft Content in the Install History table (`CMN_INSTALL_HISTORY`).

**Follow these steps:**

1. Open a command prompt and navigate to the Classic PPM runtime bin directory.
2. Enter the command:
   ```
   admin content-jaspersoft csk -userName superuser -password <password>
   ```
   The import process begins and the import information is stored in the `admin.log`. The import process requires the superuser user.
3. Review the `admin.log` for important information after the import completes.
4. Open **Administration**, and from **Studio**, click **Content Add-Ins**. The Content Add-Ins page appears.
5. Click the **Accelerator: Program Management Office** add-in (ID: csk). The Content Add-In Accelerator: Program Management Office - Properties page appears.
6. Review the **Jaspersoft Content Installed Date** included in the Versions section of this page.

### Upgrade the PMO Accelerator Content

Perform these steps if you have an existing installation of the PMO Accelerator add-in, or if you have previously configured Classic PPM Studio objects. These steps are not required when the add-in is installed for the first time.

If you have an earlier version of the PMO Accelerator installed and you upgrade to a later version of the add-in, the Content Add-In Items List page shows which items are not installed. Their status appears as **Upgrade Ready** when an update to the item is included in the new PMO add-in.

For upgraded add-ins, you can install and periodically update content items in the add-in after the initial installation.

**Follow these steps:**

1. Log in to Classic PPM.
2. Click **Administration**, **Studio**, **Content Add-Ins**.
3. Click the List icon of the **Accelerator: Program Management Office** add-in (ID: csk). Select the add-in. Its status shows **Upgrade Ready**. The Content Add-In Items List page appears.
   a. Click the **Items** tab. Review the add-in items in the product.
   b. Review the existing configurations carefully before you apply the new or changed content.
   c. Select the items that are marked **Upgrade Ready** or **Not Installed** that you want to upgrade to the new version. You can filter on the Status field. Each content item has one of the following status values:
- **Not Installed**: Items that are new to the add-in version or items that produced an error upon install. When the PMO Accelerator is not upgraded after upgrading from a previous Classic PPM release, several items will show as Not Installed and an alert message saying that the add-in needs to be installed will display. Install the add-in to change the status of these items.
- **Upgrade Ready**: Items that you installed from a previous add-in version that has an update to the item in the current add-in version or views updated via the add-in that you have also modified via Studio.
- **Installed**: Items that are installed. Select the items you want to install.
   d. For all active process instances that display the **Upgrade Ready** status, cancel and delete the old process instances.
   e. Consider the configurations you have made to items before installing them. Installing modified items overwrites your configurations. If you have previously configured Studio object views, the configurations are preserved and are not overwritten during installation. You can decide which views to install by selecting them. For more information about how PMO Accelerator configures views, see PMO Accelerator Object Views.

> [!NOTE]
> Previously configured views are not overwritten during the installation. From this page, you can select which new or updated views to apply. Applying a Studio object view overwrites any existing Studio object views.

4. Click **Install**. The selected items appear on the Confirm Content Item Installation page. If selected items have dependencies on other items, the dependent items also appear on the page and must be installed.
5. Click **Yes** to update or install the items. If a user has previously changed an item listed on the confirmation or install page, publish the item before displaying the update to the users. For more information, see Clarity Studio Development.

### PMO Accelerator Content Items by Release

The following tables assume an earlier version of the PMO Accelerator was fully installed including all custom views. The add-in was then upgraded to the next version. The items in the tables are sorted alphabetically by content item.

> [!WARNING]
> Review the tables to understand the recommended actions for installing the add-in items with an Upgrade Ready status. The tables identify whether an update is strongly recommended, recommended, or optional.

The following fields appear in the tables:
- **Content Item**: Indicates the item name and is the same as the Content Item in the Content Add-In Items List page.
- **Type**: Indicates the item type and is the same as the type in the Content Add-In Items List page.
- **Description**: Describes the update and provides a short explanation of why you should apply it.
- **Action**: Indicates the recommended action:
- **SR**: The update is strongly recommended. It must be installed.
- **R**: The update is recommended. It should be installed.
- **O**: The update is optional. We recommend that you install the update unless you have modified custom views or items and do not want your modifications overwritten. If you do not apply a view update, you should read the description of the changes and consider manually making the changes in your configured views.

#### PMO Content in Release 15.6.1

The following table shows the upgrade-ready content items for environments upgrading to PMO Accelerator Release 15.6.1:

| Content Item | Type |
|---|---|
| PMO Executive Viewer | Group |
| PMO Executive Viewer - Extended | Group |
| PMO Financial Administrator | Group |
| PMO Idea Creator | Group |
| PMO Idea Reviewer | Group |
| PMO Investment Creator | Group |
| PMO Investment Viewer Extended | Group |
| PMO Portfolio Manager | Group |
| PMO Program Manager | Group |
| PMO Project Creator | Group |
| PMO Project Manager | Group |
| PMO Project Manager Extended | Group |
| PMO Project Reviewer | Group |
| PMO Resource Manager | Group |
| PMO Resource Manager Extended | Group |
| PMO System Administrator | Group |
| PMO Team Member | Group |
| PMO Vendor Administrator | Group |

#### PMO Content in Release 15.6

The following table shows the upgrade-ready content items for environments upgrading to PMO Accelerator Release 15.6:

| Content Item | Type |
|---|---|
| Change Request Management | Portlet |
| Current Issues Listing | Portlet |
| Issue Management | Portlet |
| Risk Management | Portlet |
| Issues Listing | Portlet |
| PMO Advanced Reporting Investment Management | Group |
| PMO Advanced Reporting Project Management | Group |
| PMO System Administrator | Group |

#### PMO Content in Release 15.5.1

The following table shows the new upgrade-ready content items for environments upgrading to PMO Accelerator Release 15.5.1:

| Content Item | Type |
|---|---|
| Project KPI Trends | Report |
| Roadmap Timeline | Report |

> [!TIP]
> The two new reports above are automatically installed with the PMO accelerator and do not appear as Upgrade Ready; however, for consistency, we documented them in the table shown. Your applied use of the reports is optional.

#### PMO Content in Release 15.5

The following table shows the upgrade-ready content items for environments upgrading to PMO Accelerator Release 15.5:

| Content Item | Type |
|---|---|
| Timesheet Review | Portlet |

#### PMO Content in Release 15.4.1

The following table shows the upgrade-ready content items for environments upgrading to PMO Accelerator Release 15.4.1:

| Content Item | Type |
|---|---|
| Overview | Portlet |
| Sponsor Filter | Portlet |
| Project KPIs by OBS | Portlet |
| Project Planned Cost | Portlet |
| Project Schedule | Portlet |
| Idea Review Process | Process |
| Issue Review and Escalation Process | Process |
| Idea Sponsor | Lookup |
| Idea Object Filter View | View |
| Idea Object Property View | View |
| Project Object Filter View | View |
| Project Object Property View | View |

#### PMO Content in Release 15.4

The following table shows the upgrade-ready content items for environments upgrading to PMO Accelerator Release 15.4:

| Content Item | Type |
|---|---|
| PMO Executive Viewer | Group |
| PMO Executive Viewer Extended | Group |
| PMO System Administrator | Group |
| Team Detail List View | View |

#### PMO Content in Release 15.3

The following table shows the upgrade-ready content items for environments upgrading to the PMO Accelerator add-in 15.3:

| Content Item | Type |
|---|---|
| Change Request Management | Portlet |
| Cost and Effort Dashboard | Portlet |
| Current Issues Listing | Portlet |
| Issue Management | Portlet |
| Risk Management | Portlet |
| Schedule Dashboard | Portlet |
| Overview | Page |
| Display Mappings - Color (Priority) | Lookup |
| Portlet Query Translations | Lookup |
| PMO Executive Viewer | Group |
| PMO Executive Viewer Extended | Group |
| PMO Financial Administrator | Group |
| PMO Idea Creator | Group |
| PMO Idea Reviewer | Group |
| PMO Investment Creator | Group |
| PMO Investment Viewer Extended | Group |
| PMO Portfolio Manager | Group |
| PMO Program Manager | Group |
| PMO Project Creator | Group |
| PMO Project Manager | Group |
| PMO Project Manager Extended | Group |
| PMO Project Viewer | Group |
| PMO Resource Administrator | Group |
| PMO Resource Manager | Group |
| PMO Resource Manager Extended | Group |
| PMP System Administrator | Group |
| PMO Team Member | Group |
| PMO Timesheet Administrator | Group |
| PMO Vendor Management | Group |

#### PMO Content in Release 15.2

The following table shows the upgrade-ready content items for environments upgrading to the PMO Accelerator add-in 15.2:

| Content Item | Type |
|---|---|
| PMO Financial Administrator | Group |
| PMO Resource Administrator | Group |
| PMO Resource Manager | Group |
| PMO Resource Manager Extended | Group |
| PMP System Administrator | Group |
| Timesheet Period Browse | Lookup |

#### PMO Content in Release 15.1

The following table shows the upgrade-ready content items for environments upgrading to the PMO Accelerator add-in 15.1:

| Content Item | Type |
|---|---|
| Cost and Effort Dashboard | Portlet |
| Project Document Review | Portlet |
| Schedule Dashboard | Portlet |
| Status Report Properties | View |

#### PMO Content in Release 14.4

The following table shows the upgrade-ready content items for environments upgrading to the PMO Accelerator add-in 14.4:

| Content Item | Type |
|---|---|
| Cost and Effort Dashboard | Portlet |
| PMO Resource Browse | Lookup |
| Portlet Query Translations | Lookup |
| Schedule Dashboard | Portlet |

#### PMO Content in Release 14.3

The following table shows the upgrade-ready content items for environments upgrading to the PMO Accelerator add-in 14.3:

| Content Item | Type |
|---|---|
| Cost and Effort Dashboard | Portlet |
| GL Allocation Object - Debit Rules Filter View | View |
| GL Allocation Object - Debit Rules List View | View |
| GL Allocation Object - Debit Rules Property Views | View |
| GL Allocation Object - Standard Rules Filter View | View |
| GL Allocation Object - Standard Rules List View | View |
| Overview Page | Page |
| PMO Resource Browse | Lookup |
| Portlet Query Translations | Lookup |
| Schedule Dashboard | Portlet |

### (On-Premise only) (Optional) Install PMO Accelerator Sample Data

You can install the PMO Accelerator sample data to evaluate examples of the functionality of Classic PPM.

> [!WARNING]
> Sample data is strictly for test or development environments. Do not install the sample data on your production Classic PPM server. Installing the data on a Classic PPM server that contains live production data can introduce system instability, overwrite existing data, or both. After you install the sample data in a test environment, you cannot remove it for the life of that instance.

Before installing the add-in sample data:
- Install sample data on a server that does not contain any data and is available for demonstration purposes only.
- Do not install the sample data on environments with pre-existing customer sample or in-house demo data.

**Follow these steps:**

1. Log in to Classic PPM as an admin, or as any user with **Financial Maintenance - Financial Management** and **Financial Maintenance - Financial Organizational Structure** global access rights.
2. Open **Administration**, and from the **Finance** menu, click **Setup**. The financial management defaults page appears.
3. Select currency as USD and save it. The sample data installer requires USD.

> [!NOTE]
> In Clarity 15.3 or higher, if no currency is set, the installer sets USD for you. If you already set a non-USD currency, the installer alerts you that it cannot continue.

4. Log in to Classic PPM System Administration.
5. Click **Home**, **All Services**.
6. Select the **Clarity Application (app)** and the **Clarity Background (bg)** check boxes.
7. Click **Stop**.
8. (Clarity 14.3 or older releases only) If you are using IBM WebSphere, stop Classic PPM System Administration and applications using the application server administration console. For more information, see the J2EE vendor documentation.
9. Open a command prompt and navigate to the Classic PPM runtime bin directory.
10. Enter the following command to install the sample data:
    ```
    admin content-demo csk
    ```
    The installation process begins and information displays on the screen. The output files are stored in the `logs/content/xog/csk` directory.
11. Review the screen output and the logs for important information after the installation completes.
12. After installing the add-in, start the Classic PPM Application (app) and Classic PPM Background (bg) services.
13. Open **Administration**, and from **Studio**, click **Content Add-Ins**. The Content Add-Ins page appears.
14. Click the **Accelerator: Program Management Office** add-in (ID: csk). The Content Add-In Accelerator: Program Management Office - Properties page appears.
15. Review the **Sample Data Installed Date** included in the Versions section of this page.

---

## PMO Accelerator Sample Data

The PMO Accelerator sample data includes the content pieces used in the product. Examples include sample OBS, access groups, resources, investments, and so on. Use the sample content to understand the functionality and to build your own data based on your business requirements.

### PMO Sample Data: Organizational Breakdown Structures (OBS)

To view the list of OBS samples, click **Administration**, **Organization and Access**, **OBS** in the main menu. The Organizational Breakdown Structures page appears listing the OBS samples.

#### Corporate Department OBS

The Corporate Department OBS is the Department OBS of the Corporate Entity. The OBS has two levels and the following units:

| Unit | Level |
|------|-------|
| IT | Department |
| Business Operations | Division |
| Development | Division |
| Shared Services | Division |

#### Corporate Location OBS

The Corporate Location OBS is the Location OBS of the Corporate Entity. The OBS has one level and the following units:

| Unit | Level |
|------|-------|
| Chicago | Location |
| Hyderabad | Location |
| London | Location |
| New York | Location |
| Paris | Location |
| Sao Paulo | Location |
| Singapore | Location |
| Sydney | Location |
| Tokyo | Location |

#### Organizational OBS

The Organizational OBS has three levels and the following units:

| Unit | Level |
|------|-------|
| All Groups | All Groups |
| Administration | Group |
| Application Mgt | Group |
| Business Technologies | Group |
| Infrastructure | Group |
| Facilities | Subgroup |
| Hardware | Subgroup |
| Mobile Initiatives | Group |
| Products | Group |
| Regulatory | Group |
| Services | Group |
| Social Networking | Group |

#### Resource Pool OBS

The Resource Pool OBS has three levels and the following units:

| Unit | Level |
|------|-------|
| All Groups | All |
| External | Group |
| Offshore Development | Team |
| Onshore Development | Team |
| Internal | Group |
| Development | Team |
| Operations | Team |
| Shared Services | Team |

#### Security OBS - Pages OBS

The Security OBS - Pages OBS has two levels and the following units:

| Unit | Level |
|------|-------|
| All | All |
| Financials | Group |
| General | Group |
| Issues and Risks | Group |
| Portfolio | Group |
| Program | Group |
| Project | Group |
| Reporting | Group |
| Requester | Group |
| Resource Planning | Group |
| Team | Group |
| Timesheets | Group |

### PMO Sample Data: Access Groups

The following access groups are included with the PMO Accelerator sample data:
- **PMO Partition IT**: Members of the PMO Partition IT group are associated to the IT partition in PMO sample data. All resources included with the PMO Sample Data are members of this group.
- **PMO Process Manager**: Members of the PMO Process Manager group start and manage processes in PMO sample data.

The following access rights are included with the PMO Process Manager group:

| Type | Area | Access Rights |
|------|------|---------------|
| Global | Process Management | Process - AutoStart - All, Process - Cancel - All, Process - Manage - All, Process - Start - All, Process - View Definition - All, Process View Instance - All |

### PMO Sample Data: Resources

Several users and resources are included with the PMO Accelerator sample data. The following resource examples are special users that are members of the access groups installed with the add-in:

| Resource Name | User Name | Resource ID | Group |
|---|---|---|---|
| Ed Carmen | exec | edCarmen | PMO Executive Viewer Extended, PMO Investment Viewer Extended |
| Randy Quinn | rq | randyQuinn | PMO Idea Creator, PMO Project Creator, PMO Process Manager |
| Beth Roberts | apr | bethRoberts | PMO Idea Creator, PMO Idea Reviewer |
| Peter Thompson | pt | peterThompson | PMO Portfolio Manager, PMO Investment Viewer Extended |
| Paula Granger | pg | paulaGranger | PMO Program Manager, PMO Project Creator, PMO Project Viewer, PMO Process Manager |
| Paul Martin | pm | paulMartin | PMO Project Manager Extended, PMO Project Creator, PMO Timesheet Administrator, PMO Process Manager |
| Rosie Miller | rm | rosieMiller | PMO Resource Administrator, PMO Resource Manager Extended, PMO Timesheet Administrator |
| Faye Maxwell | fm | fayeMaxwell | PMO Financial Administrator |
| Jason Berry | jberry | jasonBerry | PMO Team Member |
| Tom Morris | tm | tomMorris | PMO Team Member |
| PMO Administrator | csk.admin | csk.admin | PMO System Administrator |
| Classic PPM Administrator | admin | admin | PMO System Administrator |
| Sid Patel (Clarity) | sidpatel | sidPatel | PMO Roadmap Editor, PMO Executive Viewer Extended |
| Ian Conner (Clarity) | iconner | iconner | PMO Project Creator, PMO Project Manager Extended, PMO Project Viewer, PMO Timesheet Administrator |
| Barb Hudson (Clarity) | bhudson | barbHudson | PMO Project Creator, PMO Project Manager Extended, PMO Project Viewer, PMO Timesheet Administrator |
| Nicole Fleming (Clarity) | nfleming | nicoleFleming | PMO Project Creator, PMO Project Manager Extended, PMO Project Viewer, PMO Timesheet Administrator |
| Theresa Robertson | trobertson | theresaRobertson | PMO Team Member |
| Mike Jones | mjones | mikeJones | PMO Resource Administrator, PMO Resource Manager Extended |
| Derrick Joseph | djoseph | derrickJoseph | (see documentation) |
| Rita Cohen (Clarity) | - | - | (see documentation) |

### PMO Sample Data: Services

The following service examples are included with the PMO Accelerator sample data:

| Service Name | Team | Financial Plan |
|---|---|---|
| Cash Management | yes | |
| Customer Contract Center | yes | |
| Email | yes | yes |
| Global Expense Service | yes | yes |
| HR Self Service | yes | |
| Internal Marketing Portal | yes | |
| Online Web Portal Service | yes | yes |
| Regulatory Compliance Service | yes | |
| Security Infrastructure Service | yes | |
| Trading Forward | yes | |

### PMO Sample Data: Assets

The following asset examples are included with the PMO Accelerator sample data:

| Asset Name | Team | Financial Plan |
|---|---|---|
| APJ Data Center | yes | |
| APJ Research and Development Center | yes | |
| APJ Technology Center | | |
| BEA Weblogic 10.0 Application Server | yes | |
| BrightStor HSM Hierarchical Storage Manager | | |
| CA Wily Introscope | | |
| CA Wily Portal Manager | yes | |
| Dell PowerVault NX1950 Network Storage | yes | |
| EMEA Data Center | yes | |
| EMEA Technology Center | | |
| eTrust Anti-Virus for Linux | | |
| eTrust SiteMinder Apache Web Plug-In | yes | |
| Headquarters | yes | |
| HP DL 580 - 4 x 2.8 Dual core 8GB RAM | yes | |
| HP 1500cs Modular Smart Array - 48TB | yes | |
| LATAM Data Center | yes | yes |
| LATAM Research and Development Center | yes | |
| LATAM Technology Center | yes | |
| Microsoft SQL Server 2008 Standard Edition | yes | |
| MS Exchange 2010 | yes | |
| NA Data Center | yes | |
| NA Research and Development Center | yes | |
| NA Technology Center | | |
| Red Hat Linux Advanced Platform Support | yes | |
| Solaris 11 | | |
| Sun StorageTek 9970 System - 17TB | | |
| Sun Sunfire v440 - 4x1.5GHz 6GB RAM App | | |
| Sun Sunfire v440 - 4x1.5GHz 6GB RAM DB | | |
| Vignette Portal | yes | |
| Windows 2003 Enterprise Server | | |

### PMO Sample Data: Applications

The following application examples are included with the PMO Accelerator sample data:

| Application Name | Team | Financial Plan |
|---|---|---|
| Altus Online Order Application | yes | yes |
| BrightStor Storage Resource Manager for MS Exchange | yes | yes |
| Call Contact Center Application | yes | yes |
| CSS OnLine Retirement Application | yes | yes |
| Employee Benefits Admin Application | yes | yes |
| Employee Benefits Enrollment Application | yes | yes |
| Fixed Assets | yes | yes |
| Global Expense Application | yes | yes |
| Payroll | yes | yes |
| SAP R/3 Financial Accounting | yes | yes |
| SAP R/3 Human Resources | yes | yes |
| Supply Chain Datamart Application | yes | yes |

### PMO Sample Data: Ideas

The following idea examples are included with the PMO Accelerator sample data:

| Idea Name | Idea Type | Idea Category |
|---|---|---|
| Airport Access Security | Major Project | New Product or Service |
| AP Architecture Consolidation | Infrastructure Deployment | Network/Telecom |
| Bundle Mobile Devices | Major Project | New Product Service |
| Cloud Computing Enhancements | Major Project | New Development |
| Datamart Performance Upgrade | Infrastructure Deployment | Distributed |
| Datasecurity for BYOD | Major Project | New Product or Service |
| Email archival repository | Major Project | New Development |
| Green IT Initiative | Major Project | New Development |
| Launch OD Version 14 | Major Project | New Product or Service |
| Lost Device Service | Major Project | New Product or Service |
| Mobile Environmental Testing | Major Project | New Product or Service |
| Mobile Initiative for EMEA | Major Project | New Product or Service |
| Network Monitoring Upgrade | Infrastructure Deployment | Network/Telecom |
| New Online Application | Application Change | COTS Evaluation |
| On Demand Portal for Clarity Product | Major Project | New Development |
| On the Road Planner | Major Project | New Product or Service |
| Online Order Improvements | Major Project | New Development |
| Recycling Devices | Major Project | New Product or Service |
| Regulatory Reporting | Major Project | New Development |
| Report Writer Enhancements | Major Project | Other |
| Security Enhancements | Application Change | Enhancement |
| Tablet Office Systems | Major Project | New Product or Service |
| Upgrade Technology Center | Major Project | New Product or Service |

### PMO Sample Data: Other Work

The following other work examples are included with the PMO Accelerator sample data:

| Other Work Name | Team | Financial Plan |
|---|---|---|
| Holiday | yes | |
| Personal Leave | yes | |
| Vacation Time | yes | |

### PMO Sample Data: Project Templates

The following project template examples are included with the PMO Accelerator sample data:

| Project Template Name | WBS | Financial Plan | Risk | Issue |
|---|---|---|---|---|
| Development Template (MSP) | yes | | | |
| Development Template (Workbench) | yes | | | |

### PMO Sample Data: Projects

The following project examples are included with the PMO Accelerator sample data:

| Project Name | Template |
|---|---|
| Automated Security Enhancements | Major Project Template |
| BYOD Management | Development Template (MSP) |
| Change Mgt for Internal Portal | Major Project Template |
| Change Mgt for Online Order Entry | Major Project Template |
| Client Services Datamart | Major Project Template |
| Compliance Audit - Security | Major Project Template |
| Credit Card Processing Enhancements | Development Template (MSP) |
| Credit Card Security Improvements | Development Template (MSP) |
| CRM Contact Center Development | Major Project Template |
| CRM Enhancements | Development Template (MSP) |
| Data Warehouse Performance Tuning | Development Template (MSP) |
| eBusiness Mobile Network | Major Project Template |
| eCommerce Portal | Major Project Template |
| Email SAN Storage Implementation | Major Project Template |
| Executive Dashboard Visibility | Major Project Template |
| Financial Process Audit | Major Project Template |
| Financial Workflow Development | Major Project Template |
| Global HR Application Maintenance | Development Template (MSP) |
| HR Claims Processing Enhancement | Major Project Template |
| HR Online Benefits Security Upgrade | Major Project Template |
| Learning Portal Optimization | Development Template (MSP) |
| Meeting Reservation Portal | Development Template (MSP) |
| Mobile Advertising | Major Project Template |
| Mobile Commerce | Major Project Template |
| Mobile Device Management (MDM) Deployment | Major Project Template |
| Mobile Identity Management Enhancements | Major Project Template |
| Mobile Security | IT Infrastructure Deployment Template |
| Mobile Time and Approvals | Major Project Template |
| Mobile Management Services | Development Template (MSP) |
| MyLearning Mobile Pilot | Development Template (MSP) |
| Office Upgrade | Development Template (MSP) |
| Online Order Catalog | Major Project Template |
| Online Order Entry | Major Project Template |
| Online Order Performance Improvements | Development Template (MSP) |
| Online to Offline Market | Major Project Template |
| Order Management Release 2 | Major Project Template |
| Order Trending Analysis | Major Project Template |
| PCI Controls Remediation | Major Project Template |
| Security Compliance | Major Project Template |
| Social Networking Security Upgrade | Development Template (MSP) |
| System Upgrade Release 14 | Development Template (MSP) |
| Web Application Enhancement | Major Project Template |
| XPL Translations | Major Project Template |
| 4G Upgrade Readiness | Major Project Template |

> [!NOTE]
> By default, autonumbering is enabled for projects.

### PMO Sample Data: Programs

The following program example is included with the PMO Accelerator sample data:

| Program Name | Subprojects | Financial Plan | Risk | Issue | Change Request |
|---|---|---|---|---|---|
| Online Web Portal Program | eCommerce Portal, Online Order Catalog, Online Order Entry | yes | yes | yes | yes |

### PMO Sample Data: Portfolios

The following portfolio examples are included with the PMO Accelerator sample data:

| Portfolio Name | Unit |
|---|---|
| Application Management | Hours |
| Business Services | Hours |
| Business Technologies | Hours |
| Facilities | FTE |
| HR Compliance and Reporting | FTE |
| Infrastructure | Hours |
| Mobile Technologies | FTE |
| Pipeline Planning | FTE |
| Regulatory and Compliance | Hours |
| Request Management | Hours |

> [!NOTE]
> More Information:
> - See PMO Accelerator Access Groups in Clarity Access Rights Reference located in the Reference section.

---

## PMO Accelerator Object Views

An object view determines how information displays for that object on a page. The following object views are available in Classic PPM:
- **Properties View** - This view displays and allows users to enter information about an object.
- **List Column View** - This view displays information about object instances in rows and columns.
- **List Filter View** - This view is a section that appears at the top of a list column view and allows users to search for and filter information.

When you install the PMO Accelerator, some object views are reinstalled to display information in a different way than the default Classic PPM installation.

If you previously used Classic PPM Studio to configure the Classic PPM views, these configurations do not change. They are not overwritten by new or changed content during the PMO installation. Use the information that is provided in this article to compare the PMO views with the default Classic PPM views. You can then decide whether to change your existing Classic PPM configurations, or to apply the new PMO content.

### Assignment

The following table shows all assignment views that are modified in the PMO Accelerator:

| Object Name | View |
|---|---|
| Assignment | Assignment Properties (Edit), Task Assignment List |

To apply the Task Assignment List view, also apply the Assignment Properties view. You can review these dependencies between views on the add-in details page in Studio.

#### Assignment Properties

To view assignment properties, open a project task and click the Properties icon in the Assignments section. The Properties page appears by default.
- **General** - Contains general information about assignments organized into the following sections:
- **General**: Resource, Role, Start, Finish, ETC, Actuals, EAC, Status, Loading Pattern, Baseline Start, Baseline Finish, Pending ETC, Pending Actuals, and Actuals Thru.
- **ETC Detail**: This section is not modified in the PMO Accelerator.

#### Assignment List Views

To view an assignment list:

1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects).
2. Click **Tasks**.
3. Select a task that contains assignments. The List Column view appears by default. From this view, you can:
- Link to the properties page for the assignment by clicking the Properties icon.
- Link to the properties page for the resources or roles by clicking the name of the resources or roles.
- View the Resource, Role, Loading Pattern, Start, Finish, Actuals, Actual Cost (ACWP), ETC, and EAC.
- View a Time-Scaled Value displaying the ETC for each assignment for a seven-week period, starting with the current week.

### Baseline

The following table shows all baseline views that are modified in the PMO Accelerator:

| Object Name | View |
|---|---|
| Baseline | Baseline Revision Properties (Create and Edit), Baseline Revision List, Baseline Revision Filter |

To apply the Baseline Revision List view, also apply the Baseline Revision Properties and Filter views.

#### Baseline Properties

To view baseline properties, open a baseline revision of an investment. The Properties page appears by default.
- **General** - Contains general information about baseline revisions organized into the following sections:
- **General**: Revision Name, Revision ID, Description, Baseline Start, Baseline Finish, and Current Revision check box.
- **Baseline Effort and Cost**: BAC and BAC Cost.
- **Performance Against Current Baseline**: Planned Value (BCWS), Earned Value (BCWP), Actual Cost (ACWP), Cost Variance (CV), Schedule Variance (SV), Cost Performance Index (CPI) and Schedule Performance Index (SPI).

#### Baseline List Views

To view a list of baselines:

1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects).
2. Select a project.
3. From the properties content menu, click **Baseline**. The List Column view appears by default. From this view, you can:
- Link to the properties page for the baseline by clicking the name of the baseline revision.
- View the Revision Name, Revision ID, Current Revision check box, Baseline Start, Baseline Finish, BAC, and BAC Cost. The Current Revision is highlighted in the list.

#### Baseline Filter Views

By default, the List Filter view appears on the same page as the List Column view, but the List Filter View is in a collapsed state. You can expand the filter by clicking the Plus icon to see the filter options.

From this view, you can filter by Revision Name, Revision ID, Current Revision, Baseline Start, and Baseline Finish. By default, Current Revision is set to All.

### Change Request

The following table shows all change request views that are modified in the PMO Accelerator:

| Object Name | View |
|---|---|
| Change Request | Change Request Properties (Create and Edit), Change Request List, Change Request Filter |

To apply the Change Request List view, also apply the Change Request Properties and Filter views.

#### Change Request Properties

To view change request properties, open a change request of a project. The General page appears by default.
- **General**: Contains general information about change requests organized into the following sections:
- **General**: Change Request Name, Change Request ID, Description, Category, Priority, Include in Status Reporting, Originating Issue or Risk (displays if change request is created from an issue or risk), Status, Owner, Reasons, and Next Review Date.
- **Details**: Document, Impact on Baseline, Impact on Other Projects, Change in Cost, Change in Schedule, Change in Resources, Expected Close Date, Benefits, Close Date, Last Updated Date, Last Updated By, Created Date, and Created By.
- **Assessment**: Assessor, Date Assessed, Approved By, and Date Approved.

#### Change Request List Views

To view a list of change requests:

1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects).
2. Open a project. The Properties page appears.
3. Click **Risks/Issues/Changes**.
4. Select **Change Request** from the drop-down list. The List Column view appears by default. From this view, you can:
- Link to the properties page for the change request by clicking the change request name.
- View the Change Request, Category, Priority, Status, Owner, Expected Close Date, and Last Updated Date.

#### Change Request Filter Views

By default, the List Filter view appears on the same page as the List Column view in a collapsed state. You can expand the filter by clicking the Plus icon.

From this view, you can filter by Change Request Name, Change Request ID, Category, Priority, Status, and Owner. By default, Category, Priority, and Status are set to All.

### Cost and Benefit Plan

The following table shows all cost plan and benefit plan views that are modified in the PMO Accelerator:

| Object Name | View |
|---|---|
| Benefit Plan | Benefit Plan Properties (Create and Edit), Benefit Plan List, Benefit Plan Filter |
| Benefit Plan Detail | Benefit Plan Detail Properties (Create and Edit), Benefit Plan Detail List, Idea Benefit Plan Detail List, Benefit Plan Detail Filter, Idea Benefit Plan Detail Filter |
| Cost Plan | Cost Plan Properties (Create and Edit), Cost Plan List, Cost Plan Filter, Budget List, Budget Filter |
| Cost Plan Detail | Cost Plan Detail Properties (Create and Edit), Cost Plan Detail List, Cost Plan Billing Detail List, Cost Plan Detail Filter, Budget Plan Detail Filter |

To apply the Cost Plan and Benefit Plan List views, also apply the Cost Plan and Benefit Plan Properties and Filter views.

#### Cost and Benefit Plan Properties

To view cost and benefit plan properties, open a cost or benefit plan of an investment and click the Properties icon.
- **Benefit Plan**: Plan Name, Plan ID, Description, Period Type, Start Period, and Finish Period.
- **Benefit Plan Details**: Description, Benefit Class, and Benefit Subclass. The Benefit Class and Benefit Subclass are installed with the PMO Accelerator.
- **Cost and Budget Plan**: Plan Name, Plan ID, Description, Period Type, Start Period, Finish Period, Benefit Plan, Currency, Plan of Record check box, Status, and Grouping Attributes.
- **Submit Cost Plan to Budget**: Plan Name, Plan ID, Description, Period Type, Start Period, Finish Period, Benefit Plan, Submit Option, Currency, Plan of Record check box, Status, and Grouping Attributes.
- **Cost and Budget Plan Details**: Includes the grouping attributes selected for the cost plan.

#### Cost and Benefit Plan List Views

To view a list of cost or benefit plans:

1. Open **Home**, and from **Portfolio Management**, click an investment (for example, Projects).
2. Open the project and click **Financial Plans**.
3. Select **Cost Plans**, **Benefit Plans**, or **Budget Plans** from the drop-down list.

From this view, you can do the following:

**Benefit Plan:**
- Link to the properties page by clicking the Properties icon.
- Link to the detail list page by clicking the name of the benefit plan.
- View the Plan Name, Period Type, Start Period, Finish Period, and Planned Benefit.

**Benefit Plan Details and Idea Benefit Plan Details:**
- View the Benefit Class, Benefit Subclass, Description, Benefit Total, Realized Benefit, and Benefit Variance.
- View a Time-Scaled Value displaying Benefit, Realized Benefit, and Benefit Variance for each plan detail entry.

**Cost Plan:**
- Link to the properties page by clicking the Properties icon.
- Link to the detail list page by clicking the name of the cost plan.
- Link to the benefit plan properties by clicking the name of the benefit plan.
- View the Plan Name, Set as Plan of Record, Plan of Record check box, Period Type, Start Period, Finish Period, Planned Cost, and Benefit Plan. The Plan of Record is highlighted in the list.

**Budget Plan:**
- Link to the properties page by clicking the Properties icon.
- Link to the detail list page by clicking the name of the budget plan.
- Link to the benefit plan properties by clicking the name of the benefit plan.
- View the Budget Name, Current check box, Status, Revision, Period Type, Start Period, Finish Period, Budget Cost, and Benefit Plan. The Plan of Record is highlighted in the list.

**Cost and Budget Plan Details - Investment Currency View:**
- View the selected grouping attributes such as: Cost Type, Charge Code, Transaction Class, Resource Role, Resource, Department, Location, Resource Class, Input Type Code, User Value 1, and User Value 2.
- View the Cost Total, Actual Cost, and Cost Variance.
- View a Time-Scaled Value displaying Cost, Actual Cost, and Cost Variance for each plan detail entry.

**Cost and Budget Plan Details - Billing Currency View:**
- View the selected grouping attributes such as: Cost Type, Charge Code, Transaction Class, Resource Role, Resource, Department, Location, Resource Class, Input Type Code, User Value 1, and User Value 2.
- View the Units Total, Billing Cost Total, and Billing Revenue Total.
- View a Time-Scaled Value displaying Units, Billing Cost, and Billing Revenue for each plan detail entry.

#### Cost and Benefit Plan Filter Views

By default, the List Filter view appears in a collapsed state. You can expand the filter by clicking the Plus icon.

**Financial Plans:**
- For benefit plans, filter by Plan Name, Plan ID, Start Period, and Finish Period.
- For cost plans, filter by Plan Name, Plan ID, Plan of Record, Start Period, and Finish Period. By default, Plan of Record is set to All.
- For budget plans, filter by Budget Name, Budget ID, Current, Status, Start Period, and Finish Period. By default, Current is set to All.

**Financial Plan Details:**
- For benefit plan details, filter by Benefit Class, Benefit Subclass, and Description. By default, Benefit Class and Benefit Subclass are set to All.
- For cost plan details, filter by Cost Type, Charge Code, Transaction Class, Resource Role, Resource, Department, Location, Resource Class, Input Type Code, User Value 1 and User Value 2. By default, Cost Type, Charge Code, Transaction Class, Resource Class and Input Type Code are set to All.
- For budget plan details, filter by Cost Type, Charge Code, Transaction Class, Resource Role, Resource, Department, Location, Resource Class, Input Type Code, User Value 1 and User Value 2. By default, Cost Type, Charge Code, Transaction Class, Resource Class and Input Type Code are set to All.

### GL Allocation and Resource Credit

The following table shows all GL allocation and resource credit views that are modified in the PMO Accelerator:

| Object Name | View |
|---|---|
| GL Allocation | GL Allocation Debits Properties (Create and Edit), Standard Rule Debits Properties (Create and Edit), Debit Rule List, Debit Rule Filter, Standard Rule List, Standard Rule Filter |
| GL Allocation Detail | Overhead Rule Detail Properties (Create and Edit), Overhead Rule Detail List, Overhead Rule Detail Filter, Debit Rule Detail List, Standard Rule Detail List |
| Resource Credit | Resource Credit Properties (Create and Edit), Resource Credit List, Resource Credit Filter |
| Resource Credit Detail | Resource Credit Detail List |

#### GL Allocation and Resource Credit Properties

Properties view lets you define base information about chargeback rules, such as debit, standard, overhead, and credit rules.
- **GL Allocation Debit Rules**: Chargeback Description, Cost Type, Charge Code, Transaction Class, Input Type Code, User Value 1, User Value 2, Status, Allocation Code, and Charge Remainder to Overhead check box.
- **Standard Rules**: Chargeback Description, Entity, Cost Type, Charge Code, Transaction Class, Input Type Code, User Value 1, User Value 2, Status, Allocation Code, and Charge Remainder to Overhead check box.
- **Resource Credit Rules**: Credit Rule Description, Entity, Department, Location, Transaction Class, Resource Class, Status, and Resource Credit Code.
- **Debit Rule Details**: GL Account and Department.
- **Standard Rule Details**: GL Account and Department.
- **Resource Credit Rule Details**: GL Account and Department.
- **Overhead Rule Details**: GL Account, Entity, and Department.

#### GL Allocation and Resource Credit List Views

**Debit Rules:**
- Link to the properties page by clicking the Properties icon.
- Link to the debit rule details list page by clicking the chargeback description.
- View the Chargeback Description, Cost Type, Charge Code, Transaction Class, Input Type Code, User Value 1, User Value 2, and Status.

**Standard Rules:**
- Link to the properties page by clicking the Properties icon.
- Link to the standard rule details list page by clicking the chargeback description.
- View the Chargeback Description, Entity, Cost Type, Charge Code, Transaction Class, Input Type Code, User Value 1, User Value 2, and Status.

**Credit Rules:**
- Link to the properties page by clicking the Properties icon.
- Link to the credit rule details list page by clicking the credit rule description.
- View the Credit Rule Description, Entity, Department, Location, Transaction Class, Resource Class, and Status.

#### GL Allocation and Resource Credit Filter Views
- **Debit Rules**: Filter by Chargeback Description, Cost Type, Charge Code, Transaction Class, Input Type Code, Status, User Value 1, and User Value 2. By default, Charge Code, Input Type Code, Status, User Value 1, and User Value 2 are set to All.
- **Standard Rules**: Filter by Chargeback Description, Entity, Cost Type, Charge Code, Transaction Class, Input Type Code, Status, User Value 1, and User Value 2. By default, Charge Code, Input Type Code, Status, User Value 1, and User Value 2 are set to All.
- **Credit Rules**: Filter by Credit Rule Description, Entity, Department, Location, Status, Transaction Class, and Resource Class. By default, Status is set to All.
- **Overhead Rules**: Filter by GL Account and Department.

### Investments

The following table shows all investment views that are modified in the PMO Accelerator:

| Object Name | View |
|---|---|
| Application | Application Properties (Create and Edit), Application List, Application Filter |
| Asset | Asset Properties (Create and Edit), Asset List, Asset Filter |
| Idea | Idea Properties (Create and Edit), Idea List, Idea Filter |
| Other Work | Other Work Properties (Create and Edit), Other Work List, Other Work Filter |
| Product | Product Properties (Create and Edit), Product List, Product Filter |
| Service | Service Properties (Create and Edit), Services List, Services Filter, Service Subscriptions List (Departments), Service Subscriptions Filter (Departments), Service Subscriptions List (Add), Service Subscriptions Filter (Add) |

#### Investment Properties

To view main properties, open an investment. The Summary page appears by default.
- **Application Summary**: Application Name, Application ID, Description, Manager, Category, Platform, Technology, Version, Status, Progress, Work Status, Stage, Start Date, and Finish Date.
- **Asset Summary**: Asset Name, Asset ID, Description, Manager, Category, Status, Progress, Work Status, Stage, Start Date, and Finish Date.
- **Idea Summary**: Subject, Idea ID, Idea Type, Idea Category, Idea Priority, Fast Track checkbox, Objective, Status, Progress, Work Status, Requestor, Sponsor, Manager, Start Date, and Finish Date.
- **Other Work Summary**: Other Work Name, Other Work ID, Description, Manager, Category, Status, Progress, Stage, Start Date, and Finish Date.
- **Product Summary**: Product Name, Product ID, Description, Manager, Category, Version, Status, Progress, Work Status, Stage, Start Date, and Finish Date.
- **Service Summary**: Service Name, Service ID, Description, Manager, Status, Progress, Work Status, Stage, Start Date, and Finish Date.
- **Description** (Ideas only): Description, Impact on Existing Initiatives, Dependencies, Risks, Benefit Description, and General Notes.
- **Schedule & Performance** (not available for Ideas):
- **Schedule**: Start Date, Finish Date, Status Indicator, and Priority.
- **Performance**: Actuals, ETC, EAC, Number of Incidents, Incident Actual Effort, Incident Actual Cost, and Incident Currency.
- **Alignment & Risk**:
- **Alignment and Risk**: Business Alignment, Risk, Goal, and Required check box.
- **Alignment Factors**: Corporate Priority, Business Unit Priority, Regulatory Compliance, Architectural Fit, Commercial Value, and Technology Compliance.
- **Financial Summary**:
- **Financial Investment Rate Options**: Use System Total Cost of Capital Rate check box, System Total Cost of Capital Rate, Override Total Cost of Capital Rate, Initial Investment, Use System Reinvestment Rate check box, System Reinvestment Rate, and Override Reinvestment Rate.
- **Financial Plan Summary**: Calculate Financial Metrics check box, Planned Cost, Planned Capital Cost, Planned Capital %, Planned Operating Cost, Planned Operating %, Planned Cost Start, Planned Cost Finish, Planned Benefit, Planned Benefit Start, Planned Benefit Finish, Planned NPV, Planned ROI, Planned Breakeven, Planned IRR, Planned MIRR, Planned Payback Period (Months), Currency, Budget equals Planned check box, Budgeted Cost, Budgeted Capital Cost, Budgeted Capital %, Budgeted Operating Cost, Budgeted Operating %, Budgeted Cost Start, Budgeted Cost Finish, Budgeted Benefit, Budgeted Benefit Start, Budgeted Benefit Finish, Budgeted NPV, Budgeted ROI, Budgeted Breakeven, Budgeted IRR, Budgeted MIRR, Budgeted Payback Period (Months).
- **Settings**:
- **General**: Dashboard View and Active check box.
- **Time and Staff**: Track Mode, Open for Time Entry check box, and Default Resource OBS Unit.
- **Financial**: Billing Currency, Department, Location, Charge Code, Financial Status, Cost Type, WIP Class (except Ideas), Investment Class (except Ideas), and Set Planned Cost Dates check box.
- **Labor, Material, Equipment, and Expense Transaction Matrix**: Rate Source, Cost Source, and Exchange Rate Type. Not available for Ideas.

#### Investment List Views
- **Application**: View the Application, Manager, Stage, Category, Platform, Technology, Version, Start, Finish, and Planned Cost.
- **Asset**: View the Asset, Manager, Stage, Category, Start, Finish, and Planned Cost.
- **Idea**: View the Subject, Idea Type, Idea Category, Idea Priority, Start Date, Planned Cost, Planned Benefit, Planned NPV, Planned ROI, and Status.
- **Other Work**: View the Other Work, Manager, Category, Start, Finish, and Planned Cost.
- **Product**: View the Product, Manager, Stage, Category, Version, Start, Finish, and Planned Cost.
- **Service**: View the Service, Manager, Stage, Start, Finish, and Planned Cost.

> [!NOTE]
> Approved investments are highlighted in the list.

#### Investment Filter Views
- **Applications**: Filter by Application Name, Application ID, OBS Unit, OBS Unit - Filter Mode, Category, Manager, Stage, Approved Status, and Active. By default, Category and Approved Status are set to All, and Active is set to Yes.
- **Assets**: Filter by Asset Name, Asset ID, OBS Unit, OBS Unit - Filter Mode, Category, Manager, Stage, Approved Status, and Active.
- **Ideas**: Filter by Idea Subject, Idea ID, OBS Unit, OBS Unit - Filter Mode, Idea Type, Idea Category, Requestor, Planned ROI, Idea Priority, Status, and Active.
- **Other Work**: Filter by Other Work Name, Other Work ID, OBS Unit, OBS Unit - Filter Mode, Category, Manager, Stage, Approved Status, and Active.
- **Products**: Filter by Product Name, Product ID, OBS Unit, OBS Unit - Filter Mode, Category, Manager, Stage, Approved Status, and Active.
- **Services**: Filter by Service Name, Service ID, OBS Unit, OBS Unit - Filter Mode, Manager, Stage, Approved Status, and Active.

### Issue

| Object Name | View |
|---|---|
| Issue | Issue Properties (Create and Edit), Issue List, Issue Filter, Associated Issues List |

#### Issue Properties
- **General**: Issue Name, Issue ID, Description, Category, Priority, Originating Risk or Change Request, Resolution, Include in Status Reporting, Status, Owner, Document, Impact Date, Target Resolution Date, Resolution Date, Resolved By, Last Updated Date, Last Updated By, Created Date, and Created By.

#### Issue List Views

To view a list of issues:

1. Open a project. Click **Risks/Issues/Changes**.
2. Select **Issues** from the drop-down list. View the Issue, Category, Priority, Status, Owner, Target Resolution Date, and Last Updated Date.

#### Issue Filter Views

Filter by Issue Name, Issue ID, Category, Priority, Status, and Owner. By default, Category, Priority, and Status are set to All.

### Project

| Object Name | View |
|---|---|
| Project | Project Properties (Create and Edit), Project List, Project Filter, Program Properties (Create and Edit), Program List, Program Filter, My Projects, Subproject Selection List, Subproject Selection Filter, Project Templates Filter, Project Release Filter, Project Requirement Filter |

#### Project Properties
- **Project Summary**: Project Name, Project ID, Project Type, Project Category, Objective, Status, Progress, Work Status, Status Reporting, Stage, Start Date, Finish Date. Stakeholders: Project Manager, Sponsor, Project Management Office, and Finance and Governance.
- **Program Summary**: Program Name, Program ID, Objective, Status, Progress, Work Status, Status Reporting, Stage, Start Date, Finish Date. Stakeholders: Program Manager, Sponsor, Project Management Office, and Finance and Governance.
- **Schedule & Performance**:
- **Schedule (Projects)**: Start Date, Finish Date, As Of Date, % Complete, Baseline Start, Baseline Finish, Status Indicator, and Priority.
- **Performance Effort**: BAC, Actuals, ETC, EAC, Projected Effort Variance, Projected Effort Variance %.
- **Projected Effort Variance**: Formula: `(EAC Effort - BAC Effort)`
- **Projected Effort Variance %**: Formula: `((EAC Effort - BAC Effort) / BAC Effort) * 100`
- **Performance Cost**: Planned Value (BCWS), Earned Value (BCWP), Actual Cost (ACWP), BAC Cost, ETC Cost, EAC Cost, Projected Cost Variance, Projected Cost Variance %, Cost Variance (CV), Schedule Variance (SV), Cost Variance %, Schedule Variance %, CPI, and SPI.
- **Projected Cost Variance**: Formula: `((ETC Cost + Actual Cost (ACWP)) - BAC Cost)`
- **Projected Cost Variance %**: Formula: `(((ETC Cost + Actual Cost (ACWP)) - BAC Cost) / BAC Cost) * 100`
- **Cost Variance %**: Formula: `((BCWP - ACWP) / BCWP) * 100`
- **Schedule Variance %**: Formula: `((BCWP - BCWS) / BCWS) * 100`
- **Business Alignment**: Business Alignment, Goal, Required check box. Alignment Factors: Corporate Priority, Business Unit Priority, Regulatory Compliance, Architectural Fit, Commercial Value, and Technology Compliance. Portfolio Categorization: Portfolio Category 1-4.
- **Risk Rating**: Risk, plus Risk Factors: Objectives, Sponsorship, Funding, Resource Availability, Interdependencies, Technical, Human Interface, Organizational Culture, Supportability, Implementation, and Flexibility.
- **Financial Summary**: Same financial fields as Investment Financial Summary.
- **Status Reports**: List of status reports with Overall Status, Status Report Name, Schedule Status, Scope Status, and Cost and Effort Status.
- **Settings**: General, Time and Staff, Earned Value, Financial, and Transaction Matrix sections.

#### Project List Views
- **Project**: View Project, Manager, Stage, Start, Finish, and Gantt chart.
- **Program**: View Program, Manager, Stage, Start, Finish, and Gantt chart.

> [!NOTE]
> Approved projects or programs are highlighted in the list.

#### Project Filter Views
- **Projects**: Filter by Project Name, Project ID, OBS Unit, OBS Unit - Filter Mode, Project Type, Project Category, Manager, Stage, Scheduler, Approved Status, Template, and Active.
- **Programs**: Filter by Program Name, Program ID, OBS Unit, OBS Unit - Filter Mode, Manager, Stage, Approved Status, and Active.

### Resource

| Object Name | View |
|---|---|
| Resource | Resource Labor/Equipment/Material/Expense Properties (Create and Edit), Role Labor/Equipment/Material/Expense Properties (Create and Edit), Resource List, Resource Filter, Select Resources List, Resource Selection List, Resource Finder List, Department Resources List, Select Resources Filter, Resource Selection Filter, Resource Finder Filter, Department Resources Filter |

#### Resource Properties
- **Role Labor**: Name, Role ID, Parent Role, Category, Availability, Active check box, and Booking Manager.
- **Role Equipment and Material**: Name, Role ID, Parent Role, Category, Availability, and Active check box.
- **Role Expense**: Name, Role ID, Parent Role, Category, and Active check box.
- **Resource Labor**: Last Name, First Name, Resource ID, Email Address. Resource Management: Primary Role, Category, Date of Hire, Date of Termination, Availability, Resource Manager, Booking Manager, Employment Type, and External check box.
- **Resource Equipment and Material**: Resource Name, Resource ID. Resource Management: Primary Role, Category, Date of Hire, Date of Termination, Availability, Resource Manager, Booking Manager, and External check box.
- **Resource Expense**: Resource Name, Resource ID. Resource Management: Primary Role, Category, Date of Hire, Date of Termination, Booking Manager, and External check box.
- **Settings**: General (Include in Datamart check box, Active check box), Time Tracking (Track Mode, Input Type Code, Open for Time Entry check box).

#### Resource List Views

View the Resource/Role, Resource/Role ID, Primary Role, Resource Manager, Employment Type, and Resource Type.

#### Resource Filter Views

Filter by Resource/Role Name, Resource/Role ID, OBS Unit, OBS Unit - Filter Mode, Primary Role, Filter Mode, Is Role, Resource Manager, Employment Type, Resource Type, Category, and Active. By default, Is Role, Employment Type, and Resource Type are set to All, and Active is set to Yes.

### Risk

| Object Name | View |
|---|---|
| Risk | Risk Properties (Create and Edit), Risk List, Risk Filter, Associated Risks List |

#### Risk Properties
- **General**: Risk Name, Risk ID, Description, Category, Priority, Probability, Impact, Is Above Threshold check box, Response Type, Include in Status Reporting, Originating Issue or Change Request, Status, Owner, Risk Symptoms, Impact Description, and Impact Date.
- **Details**: Document, Assumptions, Associated Risks, Associated Issues, Target Resolution Date, Resolution, Resolution Date, Resolved By, Last Updated Date, Last Updated By, Created Date, and Created By.
- **Response Strategy**: Response Strategy, Assigned To, and Resolve By.

#### Risk List Views

View the Risk, Category, Priority, Probability, Impact, Calculated Risk, Is Above Threshold, Status, Owner, Target Resolution Date, and Last Updated Date.

#### Risk Filter Views

Filter by Risk Name, Risk ID, Category, Priority, Status, Owner, Probability, Impact, and Above Threshold. By default, Category, Priority, Status, Probability, Impact, and Above Threshold are set to All.

### Task

| Object Name | View |
|---|---|
| Task | Task Properties (Create and Edit), Task List, Task Filter, Association Task List, Gantt List, Project Requirement Task List, Select Task List, Association Task Filter, Gantt Filter |

#### Task Properties
- **General**: Name, ID, Start, Finish, Key Task check box, Milestone check box, Fixed Duration check box, Status, % Complete, Baseline Start, Baseline Finish, Priority, and Excluded from Auto scheduling check box.
- **Constraints**: Must Start On, Start No Earlier Than, Start No Later Than, Must Finish On, Finish No Earlier Than, and Finish No Later Than.
- **Performance**:
- **Performance Effort**: BAC, Actuals, ETC, EAC, and % Expended.
- **Performance Cost**: Planned Value (BCWS), Earned Value (BCWP), Actual Cost (ACWP), BAC Cost, ETC Cost, EAC Cost, Cost Variance (CV), Schedule Variance (SV), Cost Variance %, Schedule Variance %, CPI, and SPI.
- **Cost Variance %**: Formula: `((BCWP - ACWP) / BCWP) * 100`
- **Schedule Variance %**: Formula: `((BCWP - BCWS) / BCWS) * 100`
- **Settings**: Open for Time Entry check box, Charge Code, and Cost Type.

#### Task List Views

View the Task, Task ID, Start, Finish, Baseline Finish, Is Late, Status, % Complete, Critical check box, and Open for Time Entry check box.

**Gantt view**: View the Task, Assigned Resources, Start, Finish, Duration, Status, % Complete, Actuals, ETC, EAC, Actual Cost (ACWP), ETC Cost, and EAC Cost.

#### Task Filter Views

Filter by Task Name, Task ID, Key Task, Tasks Only, Start, Finish, Status, Is Late, Critical, Milestone, and Open for Time Entry. By default, Key Task is set to "Yes", and Tasks Only, Status, Is Late, Critical, Milestone, and Open for Time Entry are set to All.

### Team

| Object Name | View |
|---|---|
| Team | Staff Member Properties (Edit), Project Team Staff List, Project Team Detail List, Team Staff List (Investments), Team Detail List (Investments), Resource Allocations List, Resource Allocations Detail List, Team Selection List, Project Team Filter, Team Filter, Resource Allocations Filter, Resource Selection Filter |

#### Team Properties
- **General**: Requirement Name, Start Date, Finish Date, Default Allocation %, Booking Status, Request Status, Resource/Role, Investment Start Date, Investment Finish Date, Investment Role, Staff OBS Unit, and Open for Time Entry check box.
- **Resource Search**: Resource Employment Type.

> [!NOTE]
> The Planned Allocation and Hard Allocation sections are not modified in the PMO Accelerator.

#### Team List Views

**Staff view:**
- For projects and programs: View Resource/Role, Project Role, Staff OBS Unit, Booking Status, Open for Time check box, Start, Finish, Average Allocation %, Allocation, Actuals, and ETC.
- For other investments: View Resource/Role, Investment Role, Staff OBS Unit, Booking Status, Open for Time check box, Start, Finish, Average Allocation %, Allocation, Actuals, Incident Actuals, and Total Actuals.

**Detail view:**
- View a Time-Scaled Value showing Allocation by Period, displaying a six-month period starting with the current month.

#### Team Filter Views
- For projects and programs, filter by Requirement Name, Resource/Role Name, Resource/Role ID, Resource OBS, Resource OBS - Filter Mode, Project Role, Resource Type, Booking Status, Unstaffed, Open for Time, and Resource Active. By default, Resource Type is set to Labor, Booking Status, Unstaffed, and Open for Time are set to All, and Resource Active is set to Yes.

---

## PMO Project Lifecycle and Processes

The idea can go through an approval process or can be fast tracked to project creation. When the idea is ready to be converted, the Idea Review process starts a project creation process based on the following idea type and idea category combinations:

| Idea Type | Idea Category | Project Creation Process | Project Template |
|---|---|---|---|
| Major Project | Not applicable | Create Major Project | Major Project Template |
| Infrastructure Deployment | Not applicable | Create Infrastructure Project | Infrastructure Deployment Template |
| Application Change | Enhancement | Create Application Change Project | Application Change Template |
| Application Change | COTS Evaluation | Create Application COTS project | Application COTS Template |

### Project Lifecycle Processes

The following automated processes are included to help you manage the project lifecycle:
- **Document Review** - Manages the review workflow for Proposal or Operations types of documents.
- **Idea Review** - Lets you conduct analysis at an earlier stage to filter out poor or financially unfeasible ideas before they become investments.
- **Issue Review and Escalation** - Manages the review workflow for high-priority project issues.
- **Create Application Change Project** - Creates a project based on the Application Change Template.
- **Create Application COTS Project** - Creates a project based on the Application COTS Template.
- **Create Infrastructure Project** - Creates a project based on the Infrastructure Deployment Template.
- **Create Major Project** - Creates a project based on the Major Project Template.

### Project Templates

Project templates allow you to create projects based on standard tasks and role assignments for that project type. Templates help ensure consistency and efficiency in creating projects.

> [!WARNING]
> To use the Major Project approval and gate review processes, change the names and properties of the last tasks in each phase. But, do not change the IDs. The gate review process starts when tasks with the specific IDs are completed.

The following project templates are included:
- **Application Change** - Helps manage projects to change software applications.
- **Application COTS** - Designed to manage Commercial Off-the-Shelf (COTS) application selection.
- **Infrastructure Deployment** - Helps manage the deployment of an infrastructure enhancement.
- **Major Project** - Provides a framework for the application enhancement and development processes. Includes a sample WBS with six major phases, each with subtasks.

### Idea Type and Idea Category Lookup Mapping

Use the lookup mapping object to manage the available list of values for Idea Type and Idea Category.

Default lookup values:
- Application Change and COTS Evaluation
- Application Change and Enhancement
- Infrastructure Deployment and Desktop
- Infrastructure Deployment and Distributed
- Infrastructure Deployment and Network/Telecom
- Major Project and Compliance/Regulatory
- Major Project and New Development
- Major Project and New Product or Service
- Major Project and Other

**Follow these steps:**

1. From **Home**, click **Lookup Mapping** under Custom Objects.
2. Click **New Lookup Mapping**.
3. Complete the following fields:
- **Mapping Type**: Defines the type of mapping. Default: Idea and Project Type/Category
- **Parent Lookup**: Values: Application Change, Infrastructure Deployment, or Major Project
- **Child Lookup**: Values: New Development, Compliance/Regulatory, New Product or Service, Other, Enhancement, COTS Evaluation, Distributed, Network/Telecom, or Desktop
4. Save your changes.
5. (Optional) You can delete the lookup mappings that you create. You cannot reactivate a deleted lookup mapping. You cannot delete a system or system-restricted lookup mapping.

### Add-In Lookup Mapping

Similar to the Idea object, use the add-in lookup mapping object to manage relationships between add-in lookup mapping values.

The following mapping types are seeded in the PMO Accelerator as placeholders for other Classic PPM add-ins:
- Application Software Categories/Sub-Categories

> [!WARNING]
> Use the add-in lookup mapping object only for Classic PPM add-ins. Add values to the existing mapping types, but do not create new mapping types as they can affect the add-in functionality.

**Follow these steps:**

1. From **Home**, click **Add-In Lookup Mapping** under Custom Objects.
2. Click **New Add-In Lookup Mapping**.
3. Complete the following fields:
- **Mapping Type**: Defines the two lookup values (parent/child) for mapping.
- **Parent Lookup**: Defines the first lookup mapped.
- **Child Lookup**: Defines the second lookup mapped.
4. Save your changes.

---

## PMO Idea Review Process

The following tasks are involved in the Idea Review process:

1. Create the idea and, when it is ready, submit it for approval.
2. The Idea Review Process starts, and does one of the following:
- **Fast tracks to project creation** - If the **Fast Track** check box is selected, the project creation process starts based on the selected idea type and idea category. The process creates a WBS and baseline.
- **Starts the Idea Review process** - If the **Fast Track** check box is cleared, this process sends an action item to the sponsor to review the idea.
3. The sponsor evaluates the functional and technical benefits and analyzes the cost benefits of the idea. The sponsor selects one of the following options:
- **Reject** - The idea status is set to Rejected and the process ends.
- **Incomplete** - The idea status is set to Incomplete. An action is sent to the originating requester to update the idea.
- **Approve** - The idea status is set to Approved. An action item is sent to the originating requester.
4. The project creation process starts based on the idea type and idea category.
5. For a major project, the Project Gate Review Subprocess starts.

### Create an Idea

Use the Ideas page to create an idea.

**Follow these steps:**

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Click **New**.
3. Complete the following fields:
- **Subject**: Defines the summary/name for the idea.
- **Idea ID**: Defines the unique ID for the idea.
- **Idea Type**: Values: Major Project, Infrastructure Deployment, or Application Change
- **Idea Category**: Values depend on the Idea Type you select.
- **Idea Priority**: Values: Low, Medium, and High
- **Fast Track**: Specifies to convert the idea to a project by bypassing the review and approval step. Default: Cleared
- **Objective**: Defines the objective of the idea. Limits: 200 characters
- **Requester**: The resource originating the idea. Default: Currently logged in resource
- **Sponsor**: The sponsor owning the idea and approving conversion into a project.

> [!NOTE]
> If the Fast Track check box is cleared, the Idea Review Process requires a value for the Sponsor field.
- **Manager**: The resource that manages and owns the idea.
- **Start Date** / **Finish Date**: The dates for the idea.
- **Organizational** / **Department**: OBS associations for the idea.
4. Do one of the following:
- Save the idea.
- Click **Submit for Approval** to start the Idea Review process.

---

## PMO Create Major Project Process

The Create Major Project and Project Gate Review processes help you manage major projects:
- **Create Major Project**: Starts when a project is created using the Major Project template.
- **Project Gate Review**: Manages a gate review workflow. It starts three times for the following stages:
- Planning
- Building
- Closing

### Process Steps

1. After the project is created, the project manager defines the Project Management Office (PMO) stakeholder and clicks **Submit**. An action item is sent to the PMO stakeholder.
2. The PMO stakeholder selects:
- **Approved** - Project status set to Approved. Planning stage initiates.
- **Rejected** - Project status set to Rejected.
3. When the last task in the Planning phase is completed (% Complete = 100, Status = Completed), an action item is sent to the PMO stakeholder.
4. The PMO stakeholder selects:
- **Approved** - Next phase initiates.
- **Rejected** - Process ends for this phase.
- **Resubmit** - Action item sent to project manager to revise.
5. The Project Gate Review Subprocess repeats for remaining phases.
6. When the Closing phase is complete, the project manager closes the project.

---

## PMO Document Review Process

The Document Review process takes a submitted proposal or operations document through a review cycle:

1. The team member uploads the document and submits it for review. An action item is sent to the project manager.
2. The project manager reviews the document:
- **Approve** - Document status set to Approved.
- **Reject** - Document status set to Rejected. An action is sent to the document owner.

### Upload and Submit Documents for Review

**Follow these steps:**

1. Open the project.
2. Click **Collaboration**.
3. Open the Properties menu and click **Add Documents**.
4. Complete the following fields:
- **Select Files**: Up to five files at a time
- **Status**: Values: Submitted, Approved, or Rejected. Starts Review Process: Submitted
- **Category**: Values: Proposal, Planning, Development, Implementation, and Operations. Starts Review Process: Proposal or Operations
- **Date Created**: The date the document is uploaded.
- **Owner**: The owner that manages the document.
- **Access**: All Participants or Select Participants. Default: All Participants
- **Allow Non-Participants to Access Document**: Default: Cleared
- **Enable Check Out**: Default: Selected
- **Enable Versioning**: Default: Selected
- **Notify Resources/Groups**: Default: Cleared
- **Description** / **Comments**: Document description and comments.
5. Click **Add**.

---

## PMO Create Project from a Project Template

**Follow these steps:**

1. Open **Home**, and from **Portfolio Management**, click **Projects**.
2. Click **New from Template**.
3. Select one of the following templates, and click **Next**:
- Application Change Template
- Application COTS Template
- Infrastructure Deployment Template
- Major Project Template
4. Complete the following fields:
- **Project Name**: Limits: 80 characters
- **Project ID**: Typically auto-numbered. Limits: 20 characters
- **Start Date** / **Finish Date**
- **Objective**: Limits: 200 characters
- **Status**: Values: Started, Not started, Completed
- **Progress**: Values: Completed (100%), Started (1-99%), Not Started (0%). Default: Not Started
- **Assignment Pool**: Team Only or Resource Pool
- **Dashboard View**: Values: PMO-Project Status, PMO-Program Status, PMO-Project Storyboard, Program Layout, or Project Default Layout. Default: Project Default Layout
- **% Complete Calculation**: Manual, Effort, Duration
- **Organizational** / **Department**: OBS associations
- **Scale Work By** / **Scale Budget By**: Default: Zero percent
- **Convert resources to roles**: Default: Cleared
5. Save the changes.

---

## PMO Issue Review and Escalation Process

Use the Issue Review and Escalation process for projects with high-priority issues.

1. The project manager verifies that the PMO and Sponsor stakeholders are defined.
2. A team member creates an issue with Priority set to "High." The process starts and sends an action item to the project manager.
3. The project manager selects:
- **Rejected** - Action item sent to issue owner to resubmit.
- **Resolved** - Action item sent to sponsor to sign off.
4. The sponsor selects:
- **Approved** - Issue status set to "Resolved."
- **Rejected** - Action item sent to issue owner to update the resolution.

### Create a Detailed Issue

**Follow these steps:**

1. Open the project and click **Risks/Issues/Changes**.
2. Open the menu and click **Issues**.
3. Click **New**.
4. Complete the fields in the **General** section:
- **Owner**: The resource managing the risk. Default: Currently logged in resource
- **Creator**: The resource who created the issue.
5. Complete the **Details** section.
6. Attach documents in the **Attachments** section.
7. Complete the **Resolution** field.
8. Save your changes.

---

## PMO Business Alignment, Portfolio Categories, and Status Reports

You can view indicators that show how well your projects and portfolios are performing.

> [!TIP]
> Set auto-numbering on the ID attribute for each object. For more information, see Classic PPM Studio Development.

### Business Alignment

You can use alignment factors to calculate the business alignment for an investment.

**Follow these steps:**

1. Open an investment.
2. Open the **Properties** menu and click **Alignment & Risk** (or **Business Alignment** for projects).
3. Complete the following fields:
- **Business Alignment**: Displays as a stoplight (average of factor scores).
- Red (0-33): Poorly aligned
- Yellow (34-67): Average alignment
- Green (68-100): Well aligned
- **Goal**: Values: Cost Avoidance, Cost Reduction, Grow the Business, Infrastructure Improvement, or Maintain the Business
- **Risk**: Lower value = lower risk.
- **Required**: Indicates if the investment is required for compliance.
4. Complete the **Alignment Factors**:
- **Corporate Priority**: Green (high/higher), Yellow (medium), Red (low)
- **Business Unit Priority**: Green (high/higher), Yellow (medium), Red (low)
- **Architectural Fit**: Green (high/higher), Yellow (medium), Red (low)
- **Commercial Value**: Red (low), Yellow (medium), Green (high/higher)
- **Regulatory Compliance**: Green (required), Yellow (supports compliance), Red (not applicable)
- **Technology Compliance**: Green (in compliance), Yellow (not in compliance but stable), Red (not in compliance)

### Portfolio Categorization

Investments include four lookup fields for portfolio categorization:
- **Portfolio Category 1** through **Portfolio Category 4**: User-defined categories to classify projects.

These fields do not include any values by default and should be configured to support your categorizations.

### PMO Status Reports

**Follow these steps:**

1. Open the project or program.
2. Open **Properties** menu and click **Status Reports**.
3. Click **New**.
4. Complete the following fields:
- **Status Report Name**: Name of the status report.
- **Report Date**: Date the report was created.
- **Report Status**: Draft or Final.
- **Status Report Update**: Overall project or program status.
- **Key Accomplishments**: Main accomplishments for the reported period.
- **Upcoming Activities**: Upcoming activities.
- **Schedule Status**: Green (on track), Yellow (minor variance), Red (significant variance).
- **Current Phase**: Current phase of the project.
- **Next Milestone on Track?**: Default: Cleared
- **Variance Explanation**: Limits: 2000 characters
- **Scope Status**: Green (on track), Yellow (minor variance), Red (significant variance).
- **Scope Change Required?** / **Deliverable Scope Changed?** / **Project Objective Changed?**: Default: Cleared
- **Change Explanation**: Limits: 2000 characters
- **Cost and Effort Status**: Green (on track), Yellow (minor variance), Red (significant variance).
- **Review Approval Problems?** / **Staffing/Availability Issues?** / **Project Affected by External Factors?**: Default: Cleared
- **Cost and Effort Explanation**: Limits: 2000 characters
5. Save the changes.

> [!NOTE]
> Starting with Release 14.4 and higher, the following changes appear in report status lookups:
> - Green: On Track
> - Orange: Needs Help (formerly Minor Variance)
> - Red: At Risk (formerly Significant Variance)

---

## PMO General Pages and Portlets

The PMO Accelerator has the following general pages and portlets:
- Sponsor
- Program Dashboard
- PM Alerts
- Project Dashboard
- Risks, Issues, and Changes

### Sponsor

Use the overview sponsor page to analyze the sponsor view of project alignment, risk, budget, and schedule.

**Follow these steps:**

1. Open **Home**, and from **Personal**, click **General**.
2. Click **Sponsor**. Use the page-level filter to filter all portlets by sponsor.

#### Projects KPIs by OBS Portlet

Displays key performance indicators (KPIs) for projects organized by OBS, including:
- **OBS/Project**: OBS or project name (expandable hierarchy)
- **Manager**: Project manager with email icon
- **Business Alignment**: Stoplight (Green 68-100, Yellow 34-67, Red 0-33, White undefined)
- **Schedule %**: Stoplight indicating days late as percentage of project timeframe
- **Days Late**: Number of days by which a project is late
- **Projected Cost Variance %**: Formula: `(((ETC Cost + Actual Cost (ACWP)) - BAC Cost) / BAC Cost) * 100`
- **Projected Effort Variance %**: Formula: `((EAC Effort - BAC Effort) / BAC Effort) * 100`
- **Risk**: Stoplight (Green 0-33, Yellow 34-67, Red 68-100)
- **Issue**: Stoplight based on highest issue priority
- **Change**: Checkmark if change requests exist

Additional configurable fields: Days Late %, Schedule, Projected Cost Variance, Projected Effort Variance.

#### Project Schedule Portlet

Displays project type, risk, planned cost, and schedule in a Gantt chart format. Fields include Dashboard Icon, Project, Project Type, Risk stoplight, Planned Cost, and Gantt Schedule.

#### Planned Cost by Project Type Portlet

A pie chart showing the percentage amount of planned cost for each project type.

### Program Dashboard

Use the overview program dashboard page to review program cost and schedule.

**Follow these steps:**

1. Open **Home**, and from **Personal**, click **General**.
2. Click **Program Dashboard**. Use the page-level filter to filter by program.

#### Program Manager Cost Dashboard Portlet

Displays cost and effort performance of projects belonging to a program. Fields include:
- **Dashboard Icon**, **Project**, **Risk**, **Stage**, **Finish**
- **Planned ROI**, **Planned IRR**, **BAC Cost**, **Actual Cost (ACWP)**, **EAC Cost**
- **Projected Cost Variance**: Formula: `((ETC Cost + Actual Cost (ACWP)) - BAC Cost)`
- **Projected Cost Variance %**: Formula: `(((ETC Cost + Actual Cost (ACWP)) - BAC Cost) / BAC Cost) * 100`
- **Cost Drill Down**: Links to Project Costs by Phase, Task, and Resource portlets

Aggregate amounts at the bottom show project totals and program Budgeted Cost.

Additional configurable fields include Start, Project Manager, Planned Cost, Planned Capital Cost/%, Planned Operating Cost/%, Planned Benefit, Planned NPV, Planned Breakeven, Planned MIRR, Planned Payback, BAC, Actuals, ETC, EAC, Projected Effort Variance %, and earned value metrics.

#### Project Costs Drill Down Page

Drill down to: Project Costs by Phase Portlet, Project Costs by Task Portlet, and Project Costs by Resource Portlet. All three portlets display cost performance amounts and variances with fields including Project, Phase/Task/Resource, Status, Start, Finish, BAC Cost, Actual Cost (ACWP), ETC Cost, EAC Cost, Projected Cost Variance, and Projected Cost Variance %.

#### Program Manager Schedule Dashboard Portlet

Displays schedule performance of a program and its projects. Fields include:
- **Dashboard Icon**, **Program/Project**, **Start**, **Finish**
- **Overall Status**: Stoplight (Green, Yellow, Red, White)
- **Schedule %**: Days late as percentage of timeframe
- **Days Late**: Number of days late
- **Gantt Schedule**: Color-coded by schedule percentage

### PM Alerts

Provides a high-level, exception-based view of project manager activity. Alerts indicate potential problem areas within the next 45 days (default) or number of days entered in the **Days Outlook** filter.

**Follow these steps:**

1. Open **Home**, and from **Personal**, click **General**.
2. Click **PM Alerts**. Use the page-level filter for OBS, Project Manager, As of Date, and Days Outlook.

#### Schedule Performance Portlet

Displays the number of late tasks categorized as:
- **Critical Late**: Tasks that are late and on the critical path
- **Past Due**: Noncritical tasks past their finish date
- **Scheduled Late**: Noncritical tasks due within the outlook period

Click a bar to drill down to the **Schedule Performance Details** portlet showing detailed task information.

#### Milestones Portlet

Provides a list of project milestones and schedule indicators within the outlook period. Fields include Dashboard Icon, Project, Milestone, Finish, Schedule %, and Days Late.

#### Current Issues Portlet

Displays issues within the outlook period grouped by priority as a pie chart. Click a pie slice to drill down to the **Current Issues Listing** portlet with detailed issue information including Dashboard Icon, Project, Issue, Description, Priority, Schedule, Target Resolution, Category, Owner, and Email.

#### Staffing Portlet

Identifies projects where resources are not assigned to tasks within the outlook period. Displays unstaffed ETC hours in a bar chart. Click a bar to drill down to the **Staffing Details** portlet.

### Project Dashboard

Lists projects as a hierarchy allowing drill-down through the work breakdown structure.

**Follow these steps:**

1. Open **Home**, and from **Personal**, click **General**.
2. Click **Project Dashboard**. Use the page-level filter for OBS and project manager.

#### Schedule Dashboard Portlet

Displays project schedule performance and a Gantt. Fields include:
- **Project/WBS**: Name with link to properties
- **Subprojects Icon**, **Gantt Icon**
- **Start**, **Finish**
- **Overall Status**: Stoplight based on latest status report
- **Schedule %**: Days late as percentage of timeframe
- **Days Late**: Calculated based on baseline and progress
- **Gantt Schedule**: Color-coded bars

Additional configurable fields: % Complete, Baseline Start/Finish, Days Late %, Schedule, Project/Task ID, Project Manager, Progress/Status, Work Status.

#### Cost and Effort Dashboard Portlet

Displays project cost and effort performance amounts and variances. Fields include:
- **Project/WBS**, **Subprojects Icon**
- **BAC Cost**, **Actual Cost (ACWP)**, **EAC Cost**
- **Projected Cost Variance**: Formula: `((ETC Cost + Actual Cost (ACWP)) - BAC Cost)`
- **Projected Cost Variance %**: Stoplight
- **BAC**, **Actuals**, **EAC**
- **Projected Effort Variance**: Formula: `(EAC Effort - BAC Effort)`
- **Projected Effort Variance %**: Stoplight

### Risks, Issues, and Changes

Provides a place to manage all risks, issues, and change requests.

**Follow these steps:**

1. Open **Home**, click **General** under **Personal**.
2. Click **Risks, Issues and Changes**.

#### Risk Management Portlet

Displays risks associated with projects. Default filter limits to status "Open" or "Work in Progress". Fields include Dashboard Icon, Project, Risk, Description, Priority, Probability, Impact, Above Threshold, Target Resolution Date, Category, Owner, and Email.

#### Issue Management Portlet

Displays issues associated to projects. Default filter limits to status "Open" or "Work in Progress". Fields include Dashboard Icon, Project, Issue, Description, Priority, Schedule, Target Resolution Date, Category, Owner, and Email.

#### Change Request Management Portlet

Displays change requests associated to projects. Default filter limits to status "Open" or "Work in Progress". Fields include Dashboard Icon, Project, Change Request, Description, Priority, Expected Close Date, Category, Owner, and Email.

---

## PMO-Program Status Page Layout

Use the PMO-program status page layout of a dashboard to view the overall picture and performance summary of a program.

### Resource Utilization Portlet

Displays allocation versus assignment by month in an area graph. The Y-axis shows effort in hours, the X-axis shows months.

> [!NOTE]
> Assign staff to tasks before viewing resource utilization.

---

## PMO-Project Status Page Layout

Use the PMO-project status page layout of dashboard to view the overall picture and performance summary of a project.

### Project Indicators Portlet

Displays key performance indicators (KPIs) for the project:
- **Stage**: Progress bar with colored stages based on business alignment
- **Schedule %**: Stoplight (Green, Yellow 1-10%, Red >10%, White undefined)
- **Days Late**: Number of days late
- **Projected Cost Variance %**: Formula: `(((ETC Cost + Actual Cost (ACWP)) - BAC Cost) / BAC Cost) * 100`
- **Projected Effort Variance %**: Formula: `((EAC Effort - BAC Effort) / BAC Effort) * 100`
- **Risk**: Stoplight (Green 0-33, Yellow 34-68, Red 68-100)
- **Issue**: Stoplight based on highest issue priority
- **Change**: Checkmark if change requests exist

### Upcoming Milestones Portlet

Provides a list of all milestones for a project with Milestone Name, Finish, Schedule %, Days Late, and Gantt Schedule.

### Project Baselines Portlet

Displays a line graph charting baseline activity against hours worked. X-axis shows monthly periods, Y-axis shows cumulative project hours.

### Status Report Indicators Portlet

Displays indicators based on the most recent status report. Fields include Overall Status, Report Date, Project Manager, Schedule, Scope, Cost and Effort, and Status Reports link.

> [!NOTE]
> Starting with Release 14.4, the default Status Report Status lookup values change from Minor Variance to Needs Help and from Significant Variance to At Risk.

### Actuals by Transaction Type Portlet

Displays actual cost totals organized by transaction type (equipment, expense, labor, material). Fields include Transaction/Resource/Date, Task, Quantity, and Cost.

### Team Utilization Portlet

Displays total effort per resource across all assigned tasks. Fields include Properties Icon, Resource Allocation Icon, List of Tasks Icon, Resource, Average Allocation %, and color-coded histogram (Green = actuals, Yellow = availability threshold, Red = overallocated).

---

## PMO-Project Storyboard Page Layout

Use the PMO-project storyboard page layout to view detailed project performance information.

### Team Capacity Portlet

Displays future resource needs comparing demand to allocation. The graph begins with the current month.

### Issues by Priority Portlet

Displays a pie chart grouping issues by priority. Click a pie slice to drill down to the **Issues Listing** portlet.

### Earned Value Analysis by Phase Portlet

Tracks work performance to account for cost and schedule variances. Fields include Phase, Planned Value (BCWS), Earned Value (BCWP), Actual Cost (ACWP), Cost Variance (CV), Schedule Variance (SV), CPI, and SPI.

---

## PMO Status Report Review

Use the Status Report Review page to review summary and detailed information about status reports.

To access: Open **Home**, and from **Dashboards**, select **Status Report Review**.

### Status Report Listing

The **Status Report Listing Portlet** displays project status reports including the status report update and indicators. Fields include Project, Manager, Overall Status, Status Report Update, Report Date, Report Status, Schedule, Scope, and Cost and Effort.

Additional configurable fields: Change Explanation, Cost and Effort Explanation, Current Phase, Deliverable Scope Changed, Finish Date, Key Accomplishments, Latest Report, Next Milestone on Track, Progress, Project Affected By External Factors, Project Category, Project ID, Project Objective Changed, Project Type, Review Approval Problems, Scope Change Required, Staffing/Availability Issues, Stage, Start Date, Status, Status Reporting, Status Report Name, Upcoming Activities, Variance Explanation, Work Status.

> [!NOTE]
> Starting with Release 14.4, status lookup values changed: Green = On Track, Orange = Needs Help, Red = At Risk.

### Late and Missing Status Reports

#### Late Status Reports Portlet

Displays projects with late status reports. Fields include Report Date, Project, Manager, Status Reporting, Project Type, and Work Status.

#### Missing Status Reports Portlet

Displays projects without at least one completed status report. Fields include Project, Manager, Status Reporting, Project Type, and Work Status.

> [!NOTE]
> To configure portlets with additional fields, see Personalize a Portlet under Getting Started with Classic PPM.

---

## PMO Resource Management Timesheet Overview and Pending Estimates Review

### Timesheet Overview

Timesheets track time at the task level on a daily basis. The timesheet actuals are generated from approved hours that project team members record on timesheets. Once approved, the **Post Timesheets** job runs to post the timesheets.

To access: Open **Home**, and from **Resource Management**, select **Timesheet Overview**.

#### Investment Timesheet Summary Portlet

Displays pending and posted actuals by investment. Fields include Investment, Manager, Pending Actuals, Posted Actuals, Total Actuals, and Timesheet Details Icon.

> [!WARNING]
> This portlet references timesheet data and may result in many rows of data being displayed if filters are not applied. Implement required filters to prevent performance issues.

#### Investment Timesheet Review Portlet

On the Timesheet Details page, displays pending and posted actuals by task, resource, and time period. Fields include Timesheet, Notes Attached, Investment, Task, Resource, Employment Type, Status, Adjustment, Period Start, Period End, Pending Actuals, Posted Actuals, and Total Actuals.

#### Timesheet Notes Portlet

Lists notes attached to timesheet entries. Fields include Note, Category, Task, Created By, Created Date, Modified By, and Modified Date.

#### Pending Estimates Review Portlet

Displays pending estimates and recommended changes by project, task, and resource. Fields include:
- **Project**, **Task**, **Resource**, **Start**, **Finish**
- **Pending ETC**: ETC amount added to the timesheet
- **Plan ETC**: ETC amount initially assigned
- **Pending Actuals**: Unposted actuals
- **Adjusted Plan ETC**: Formula: `(Plan ETC - Pending Actuals)`
- **Recommended Change in ETC**: Formula: `(Pending ETC - Adjusted Plan ETC)`
- **Increase/Decrease in ETC**: Green (decrease) or Red (increase)

#### Timesheet Review Portlet

Displays pending and posted actuals by task, resource, and time period on the project Team tab.

> [!WARNING]
> This portlet references timesheet data and may result in many rows of data being displayed if filters are not applied.

**Follow these steps:**

1. Click **Home**, **Portfolio Management**, **Projects**.
2. Open a project.
3. Click the **Team** tab.
4. In the **Actions** menu, click **Views**, **Timesheet Review**.

---

## PMO Financial Management Posted Transaction Review Portlet

### Posted Transaction Review Portlet

Displays financial transactions across investments by transaction date, including quantity, cost, and currency information.

To access: Open **Home**, and from **Financial Management**, click **Posted Transaction Review**.

> [!WARNING]
> This portlet references financial transaction data and may result in many rows if filters are not applied.

Fields include: Transaction Date, Investment, Task, Charge Code, Cost Type, Resource, Transaction Class, Input Type Code, Quantity, Transaction Cost, Transaction Amount, Transaction Currency, Converted Cost, Converted Amount, Converted Currency, and Converted Rate.

Additional configurable fields: Chargeable, Investment Class, Investment Department, Investment Entity, Investment ID, Investment Location, Notes Entered on the Transaction, Resource Class, Resource Department, Resource ID, Resource Location, Task ID, Transaction Number, Transaction Rate, Transaction Type, User Lov 1, User Lov 2, WIP Class, Billing Amount, Billing Cost, Billing Currency, Billing Rate, Reporting Amount, Reporting Cost, Reporting Currency, Reporting Rate.

### Posted Transaction Review Portlet (Investment Level)

Displays financial transactions for a single investment. Access by opening an investment, clicking **Financial Plans**, selecting a cost plan, then **Actions** > **Posted Transaction Review**.

> [!NOTE]
> More Information:
> - Getting Started with Classic PPM
> - Financial Management

---

## Additional PMO Portlets

The following additional portlets are included with the PMO Accelerator but are not placed on any pages after installation. You can use Studio to add them to your Classic PPM pages.

> [!TIP]
> You can personalize the user interface. To add fields to a portlet using the Configure option, see Getting Started with Classic PPM.

### Late Tasks and Milestones Portlet

Provides a list of late tasks and milestones with a Gantt chart. Fields include Task, Task ID, Finish, Status, Schedule %, Days Late, and Gantt Schedule.

### My Timesheets Portlet

Displays the status of your timesheets for open time periods. Fields include Timesheet icon, Period Start, Period End, Timesheet Status, and Status Icon:
- Grey Diamond: Current Timesheet
- Green Checkmark: Submitted Timesheet
- Red Circle: Action Required

### Process Bottlenecks Portlet

Displays initiated processes and indicates how long an assigned resource took to respond to each process milestone step. Duration Status stoplights:
- Green: Less than 3 days
- Yellow: 3 to 5 days
- Red: 5 or more days

### Project Analysis Portlet

Provides program managers with a view into projects and tasks that are part of the program. Fields include Project/Task, Team Icon, Project Manager, Stage, Start Date, Finish Date, Overall Status, Schedule %, Days Late, and Gantt Schedule.

### Project Cycle Time Analysis Portlet

Displays the number of days spent in each project phase as a bar graph. Select a methodology to use this portlet.

### Project Document Review Portlet

Displays project documents with links. Fields include Project, Manager, Document Manager Icon, Document, Status (Green = Approved, Yellow = Submitted, Red = Rejected), Category, Owner, Created Date, Last Updated Date, Version Number, and Last Revision Comments.

### Project Lifecycle Review Portlet

Displays the schedule status of each project phase. Fields include Dashboard Icon, Project, Project Manager, Stage (progress bar), Start, Finish, and Schedule %.

### Resource Utilization Percentage by Month Portlet

Displays resource assignments as a percentage of allocations by month in a column graph.

### Team Member Task Summary Portlet

Displays resource assignments, ETC, pending actuals, and actuals for project tasks. Fields include Dashboard Icon, Project, Task, Guidelines, Resource/Role, Priority (Green 24-36 low, Yellow 12-23 medium, Red 0-11 high), Status, Schedule %, and Days Late.
