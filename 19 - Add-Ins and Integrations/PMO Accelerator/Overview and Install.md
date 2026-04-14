﻿---
title: PMO Accelerator Overview and Installation
tags:
  - admin
aliases:
  - Overview and Install
---
# PMO Accelerator Overview and Installation


The PMO Accelerator add-in is a collection of content and view configurations designed for project portfolio management that is not tied to any specific industry.
It provides ready-made content that your organization does not have to create, enabling you to support your existing program management office (PMO).
The add-in is useful for managing and gaining insight into portfolio, program, and project performance.

**The add-in includes the following content:**

- Dashboard pages
- Portlets
- Processes
- View configurations
- Access groups

The PMO Accelerator also includes optional sample data you can install in non-production environments. On-premise customers can install sample data themselves. SaaS customers can request the inclusion or exclusion of PMO sample data on a hosted instance of Classic PPM.

> [!WARNING]
> The sample data should never be installed in a production environment.

The sample data includes portfolios, programs, projects, ideas, applications, assets, services, other work, resources, resource roles, templates, financial plans, and organizational breakdown structures (OBS). It also includes the minimum administration setup required for this content.

## What's New by Release


### Release 15.7.1


No new additional reports are added to the PMO Accelerator in 15.7.1.

### Release 15.7


One new report was added: **Customizations Overview** — lists content that is not included out-of-the-box with Clarity so you can quickly identify custom content added to Clarity.
The report also contains other types of custom content created in Clarity, such as Studio objects and attributes, NSQL queries, GEL scripts, reports, and jobs.

### Release 15.6.1


You can apply the optional new **Include in Status Reporting** checkbox to tasks, risks, issues, or changes to allow users to mark specific items for inclusion in status reports.
This helps teams identify special items for further review, discussion, or escalation.
The attribute is available for the Task object and also for risks, issues, and changes after upgrading PMO content in 15.6.1.

### Release 15.5.1


Two new Jaspersoft Studio reports were added:

- **Project KPI Trends** — datasource based on an example of data warehouse trending capabilities
- **Roadmap Timeline** — datasource based on the standard Clarity transactional database, demonstrating an example of a roadmap timeline for investment planning

No Clarity database or data warehouse schema changes were made in 15.5.1.

### Release 15.5


The following new access rights were added to the **PMO Resource Administrator** security group:

- Team - Create
- Team - Delete - All
- Team - Edit - All
- Team - View - All

### Release 15.4.1


- **Renamed PMO Attribute:** The **Business Owner** attribute is renamed to **Sponsor** to match Clarity. No internal IDs were changed. Only user interface labels, portlets, lookups, NSQL queries, processes, and Jaspersoft reports were updated.
- **New Global Access Right:** A new global access right, **Tasks - Navigate**, is now available. It is included in the following PMO Accelerator access groups:
  PMO Executive Viewer, PMO Executive Viewer Extended, PMO Financial Administrator, PMO Idea Creator, PMO Idea Reviewer, PMO Investment Creator, PMO Investment Viewer Extended, PMO
  Portfolio Manager, PMO Program Manager, PMO Project Creator, PMO Project Manager, PMO Project Manager Extended, PMO Project Reviewer, PMO Resource Manager, PMO Resource Manager
  Extended, PMO Team Member, PMO Vendor Management, PMO System Administrator.

### Release 15.4.0


If you upgrade from Classic PPM 15.3 or earlier, you also receive these 15.4.0 updates:

- New content items for personally identifiable information (PII): Job, Lookup, Views, Object, Menu — see Protect Personally Identifiable Information for GDPR
- An enhancement to the Top 50 Project Watchlist report
- The add-in supports the same PMO Accelerator Attributes Enabled for REST APIs as the previous release

### Release 15.3


- This release no longer requires manual configuration of a system currency before installing PMO Accelerator sample data. The system currency is now automatically set to USD when you install the PMO Accelerator sample data (`admin content-demo csk`).
- Installation of the PMO Accelerator is required in a new environment or after an upgrade to activate Clarity. The PMO Accelerator is required for certain data fields and views in Clarity.
- API Alias ID for new installs and upgrades was **removed** for: Project Category, Cost Variance %, Project Cost Variance, Project Cost Variance%
- API Alias ID for new installs and upgrades was **added** for: Portfolio Category 1, 2, 3, and 4; Business Alignment; Alignment Factors: Corporate Priority, Business Unit Priority, Regulatory Compliance, Architectural Fit, Commercial Value, and Technology Compliance

### Release 15.2


- Administration reports include two new reports: **Database Connection Check: Classic PPM** and **Database Connection Check: Data Warehouse**
- Reports and filter options in the Advanced Reporting content are modified to use the new security model in the Data Warehouse
- Enhancements and fixes to existing portlets and reports (Cost and Effort Dashboard, Project Document Review, Schedule Dashboard portlet, Status Report Properties view)

### Release 15.1


- Administration reports include two new reports: **Database Connection Check: Classic PPM** and **Database Connection Check: Data Warehouse**
- Reports and filter options in the Advanced Reporting content are modified to use the new security model in the data warehouse
- Enhancements and fixes to existing portlets and reports

## Key Concepts


### Attribute Overwrite and Data Warehouse


Attributes installed by the PMO Accelerator in previous versions are overwritten during the upgrade to a higher version.
If you have configured these attributes by renaming them, changing formulas in calculated attributes, changing the **Included in the Data Warehouse** checkbox, or modifying display
mappings — your configurations will be overwritten and you will need to manually redo them after upgrade.

Affected objects: benefit plan detail, idea, investment, project, and status report.

### View Protection


If you previously used Studio to configure views or installed another add-in that configured views, these configurations remain as-is when installing the PMO Accelerator.
They are not overwritten by new or changed content during installation.
You can decide whether to make manual changes to your existing configurations or apply the new content delivered in the PMO Accelerator.

### PMO Accelerator Certified and Supported Versions


See the Release Notes for the required PMO Accelerator add-in version for your release of Classic PPM.

### PMO Accelerator Add-In Items Automatically Installed


The majority of attributes installed by the PMO Accelerator have the **Include in the Data Warehouse** field checked by default. You cannot uncheck this field because reports depend upon them.

If you have previously configured the following content items, the configurations are **not** preserved — they are overwritten during installation or upgrade:

**Objects:** Benefit Plan Detail, Idea, Investment, Portfolio Investment, Project, Status Report, Idea and Project Category

**Parameterized Lookup:** PMO-Project Status

**Pages:** Actuals by Transaction Type, Cost and Schedule Overview, Posted Transaction Review, Program Manager Cost Dashboard, Schedule and Progress

**Portlets:** Actuals by Transaction Type, Change Request Management, Cost and Effort Dashboard, Cost and Schedule Overview, Current Issues, Current Issues Listing, Earned Value
Analysis by Phase, Investment Resource Utilization, Investment Timesheet Review, Investment Timesheet Summary, Issue Management, Issues By Priority, Issues Listing, Late Status
Reports, Late Tasks and Milestones, Milestones, Missing Status Reports, My Timesheets, Pending Estimates, Process Bottlenecks, Program Manager Cost Dashboard, Program Manager
Schedule Dashboard, Project Analysis, Project Baselines, Project Costs by Phase, Project Costs By Resource, Project Costs By Task, Project Cycle Time Analysis, Project Document
Review, Project Indicators, Project KPIs By OBS, Project Life Cycle Review, Risk Management, Schedule and Progress, Schedule Dashboard, Schedule Performance, Schedule Performance
Details, Staffing, Staffing Details, Status Report Indicators, Status Report Listing, Team Capacity, Team Member Organizer, Timesheet Notes, Timesheet Review, Transaction Review,
Upcoming Project Milestones

**Queries:** (same list as portlets above — each portlet has a corresponding NSQL query)

## Install the PMO Accelerator Add-In and PMO Sample Data


As an administrator, configure the PMO Accelerator content for Classic PPM. The PMO Accelerator add-in is required for all new installations and upgrades of Clarity.

To help you evaluate new features, optional PMO sample data is also available. You can install the optional PMO sample data in systems set to **USD currency only**.

### (On-Premise only) Install the PMO Accelerator Add-In


> [!NOTE]
> Verify that you have already installed the Clarity data warehouse. The PMO Accelerator add-in includes items that are based on the data warehouse schema. If the data warehouse schema is unavailable, installation of the add-in will be unsuccessful. See Install and Configure the Data Warehouse.

Install the PMO Accelerator add-in on your Classic PPM application server. The PMO Accelerator add-in is included with Classic PPM and is ready for installation.
In releases prior to PMO Accelerator Release 3.2, you had to download the add-in installer from the support site, but this is no longer necessary.

If you are upgrading from a previous Classic PPM release with the PMO Accelerator installed, you must also upgrade the PMO Accelerator. For the required version, see the Release Notes.

**Steps:**

1. **Back up** the existing Classic PPM installation directory and database before installing the add-in. Once installed, the add-in cannot be uninstalled.
2. **Stop the services.** Before installing the add-in, stop the Classic PPM Application (app) and Classic PPM Background (bg) services from Classic PPM System Administration (CSA).
3. **Execute the install script.** The script installs lookups, queries, portlets, pages, views, processes, groups, resource roles, project templates, and database objects:
   a. Open a command prompt and navigate to the Classic PPM runtime `bin` directory
   b. Enter the command:
   ```
   admin content csk
   ```
   The installation process begins and information displays on the screen. Output is captured in `admin.log` in the `logs` directory. Output files are stored in the `logs/content/xog/csk` directory.
   c. Review the screen output and logs for important information after installation completes.
4. **Start the services.** After installing the add-in, start the Classic PPM Application (app) and Classic PPM Background (bg) services in CSA.

### (On-Premise only) Import the Jaspersoft Advanced Reporting Content


The following procedure imports domains, reports, input controls, localization bundles, images, templates, data sources, and roles. It also creates the organization name and the user specified in the Classic PPM System Administration (CSA) Reporting subtab.

> [!WARNING]
> You must specify the organization name, organization ID, and the user in the CSA Reporting subtab **before** importing the Jaspersoft Advanced Reporting Content.
> The PMO Accelerator is also a required prerequisite of the Jaspersoft Advanced Reporting content because many reports reference objects and attributes delivered in the PMO
> Accelerator.

The import does the following:

- Creates the organization (define the organization name and organization ID in the CSA Reporting subtab first)
- Creates the Clarity folder and its subfolders in the organization repository
- Creates the Advanced Reporting roles and the PMO Accelerator roles (begin with "CSK_")
- Updates the domains with the Data Warehouse schema owner name specific to the database
- Uploads the UI Themes and creates the Shared folder
- Creates the Jaspersoft administrator user (default: `ppmjasperadmin`) — do not modify this user after importing
- Creates an entry for the Jaspersoft Content in the Install History table (`CMN_INSTALL_HISTORY`)

**Steps:**

1. Open a command prompt and navigate to the Classic PPM runtime `bin` directory
2. Enter the command:
   ```
   admin content-jaspersoft csk -userName superuser -password <password>
   ```
   The import process begins and import information is stored in `admin.log`. The import process requires the superuser user.
3. Review `admin.log` for important information after the import completes
4. Open **Administration**, and from **Studio**, click **Content Add-Ins**. The Content Add-Ins page appears.
5. Click the **Accelerator: Program Management Office** add-in (ID: `csk`). The Content Add-In Properties page appears.
6. Review the **Jaspersoft Content Installed Date** in the Versions section of this page.

### Upgrade the PMO Accelerator Content


Perform these steps if you have an existing installation of the PMO Accelerator add-in, or if you have previously configured Classic PPM Studio objects. These steps are not required when the add-in is installed for the first time.

If you have an earlier version installed and you upgrade, the **Content Add-In Items List** page shows items that are not installed with a status of **Upgrade Ready**.

**Steps:**

1. Log in to **Classic PPM**
2. Click **Administration**, **Studio**, **Content Add-Ins**
3. Click the **List icon** of the Accelerator: Program Management Office add-in (ID: `csk`). Select the add-in. Its status shows **Upgrade Ready**. The Content Add-In Items List page appears.
   - Click the **Items** tab and review the add-in items
   - Review existing configurations carefully before applying new or changed content
   - Select items marked **Upgrade Ready** or **Not Installed** that you want to upgrade. You can filter on the **Status** field.

   **Status values:**
   - **Not Installed** — Items new to the add-in version or items that produced an error upon install
   - **Upgrade Ready** — Items installed from a previous version that have an update in the current version, or views updated via the add-in that you have also modified via Studio
   - **Installed** — Items that are currently installed

   - For all active process instances that display **Upgrade Ready** status, cancel and delete the old process instances before proceeding
   - Consider the configurations you have made to items before installing them — installing modified items overwrites your configurations
   - If you have previously configured Studio object views, the configurations are preserved and are not overwritten during installation

> [!NOTE]
> Previously configured views are not overwritten during installation. From this page, you can select which new or updated views to apply. Applying a Studio object view overwrites any existing Studio object views.

4. Click **Install**. The selected items appear on the Confirm Content Item Installation page. If selected items have dependencies on other items, the dependent items also appear and must be installed.
5. Click **Yes** to update or install the items. If a user has previously changed an item listed on the confirmation page, publish the item before displaying the update to users.

## PMO Accelerator Content Items by Release


The following tables show upgrade-ready content items for each release. The tables assume an earlier version of the PMO Accelerator was fully installed including all custom views, and was then upgraded to the next version. Items are sorted alphabetically by content item.

> [!WARNING]
> Review the tables to understand the recommended actions for installing add-in items with an **Upgrade Ready** status. The tables identify whether an update is strongly recommended, recommended, or optional.

**Action codes:**
- **SR** — Strongly recommended. Must be installed.
- **R** — Recommended. Should be installed.
- **O** — Optional. Recommended unless you have modified custom views or items and do not want your modifications overwritten.

### PMO Content in Release 15.6.1


The following groups are upgrade-ready for environments upgrading to PMO Accelerator Release 15.6.1:

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

### PMO Content in Release 15.6


| Content Item | Type |
|---|---|
| Change Request Management | Portlet |
| Current Issues Listing | Portlet |
| Issue Management | Portlet |
| Issues Listing | Portlet |
| Risk Management | Portlet |
| PMO Advanced Reporting Investment Management | Group |
| PMO Advanced Reporting Project Management | Group |
| PMO System Administrator | Group |

### PMO Content in Release 15.5.1


| Content Item | Type |
|---|---|
| Project KPI Trends | Report |
| Roadmap Timeline | Report |

> [!TIP]
> The two new reports above are automatically installed with the PMO Accelerator and do not appear as Upgrade Ready. However, for consistency, they are documented in the table shown. Your applied use of the reports is optional.

### PMO Content in Release 15.5


| Content Item | Type |
|---|---|
| Timesheet Review | Portlet |

### PMO Content in Release 15.4.1


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

### PMO Content in Release 15.4


| Content Item | Type |
|---|---|
| PMO Executive Viewer | Group |
| PMO Executive Viewer Extended | Group |
| PMO System Administrator | Group |
| Team Detail List View | View |

### PMO Content in Release 15.3


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
| PMO System Administrator | Group |
| PMO Team Member | Group |
| PMO Timesheet Administrator | Group |
| PMO Vendor Management | Group |

### PMO Content in Release 15.2


| Content Item | Type |
|---|---|
| PMO Financial Administrator | Group |
| PMO Resource Administrator | Group |
| PMO Resource Manager | Group |
| PMO Resource Manager Extended | Group |
| PMO System Administrator | Group |
| Timesheet Period Browse | Lookup |

### PMO Content in Release 15.1


| Content Item | Type |
|---|---|
| Cost and Effort Dashboard | Portlet |
| Project Document Review | Portlet |
| Schedule Dashboard | Portlet |
| Status Report Properties | View |

### PMO Content in Release 14.4


| Content Item | Type |
|---|---|
| Cost and Effort Dashboard | Portlet |
| PMO Resource Browse | Lookup |
| Portlet Query Translations | Lookup |
| Schedule Dashboard | Portlet |

### PMO Content in Release 14.3


| Content Item | Type |
|---|---|
| Cost and Effort Dashboard | Portlet |
| GL Allocation Object - Debit Rules Filter View | View |
| GL Allocation Object - Debit Rules List View | View |
| GL Allocation Object - Debit Rules Property Views | View |
| GL Allocation Object - Standard Rules Filter View | View |
| GL Allocation Object - Standard Rules List View | View |
| Overview | Page |
| PMO Resource Browse | Lookup |
| Portlet Query Translations | Lookup |
| Schedule Dashboard | Portlet |

## (On-Premise only) Install PMO Accelerator Sample Data


You can install the PMO Accelerator sample data to evaluate examples of the functionality of Classic PPM.

> [!WARNING]
> Sample data is strictly for test or development environments. Do not install the sample data on your production Classic PPM server.
> Installing the data on a server that contains live production data can introduce system instability, overwrite existing data, or both.
> After you install the sample data in a test environment, you cannot remove it for the life of that instance.

**Before installing the add-in sample data:**

- Install sample data on a server that does not contain any data and is available for demonstration purposes only
- Do not install the sample data on environments with pre-existing customer sample or in-house demo data

**Steps:**

1. Log in to Classic PPM as an admin, or as any user with **Financial Maintenance - Financial Management** and **Financial Maintenance - Financial Organizational Structure** global access rights.
2. Open **Administration**, and from the **Finance** menu, click **Setup**. The financial management defaults page appears.
3. Select **USD** as the currency and save.

   > [!NOTE]
   > In Clarity 15.3 or higher, if no currency is set, the installer sets USD for you. If you already set a non-USD currency, the installer alerts you that it cannot continue.

4. Log in to **Classic PPM System Administration**
5. Click **Home**, **All Services**
6. Select the **Clarity Application (app)** and **Clarity Background (bg)** check boxes
7. Click **Stop**
8. (Clarity 14.3 or older only) If you are using IBM WebSphere, stop Classic PPM System Administration and applications using the application server administration console.
9. Open a command prompt and navigate to the Classic PPM runtime `bin` directory
10. Enter the following command to install the sample data:
    ```
    admin content-demo csk
    ```
    The installation process begins and output files are stored in the `logs/content/xog/csk` directory.
11. Review the screen output and logs for important information after installation completes.
12. After installing, start the Classic PPM Application (app) and Classic PPM Background (bg) services.
13. Open **Administration**, and from **Studio**, click **Content Add-Ins**. The Content Add-Ins page appears.
14. Click the **Accelerator: Program Management Office** add-in (ID: `csk`). The Content Add-In Properties page appears.
15. Review the **Sample Data Installed Date** in the Versions section of this page.

## PMO Accelerator Sample Data


The PMO Accelerator sample data includes the content pieces used in the product — sample OBS, access groups, resources, investments, and so on. Use the sample content to understand the functionality and to build your own data based on your business requirements.

### Sample Data: Organizational Breakdown Structures (OBS)


Navigate to **Administration**, **Organization and Access**, **OBS** to view the list of OBS samples.

**Corporate Department OBS** (Department OBS of the Corporate Entity, 2 levels):

| Unit | Level |
|---|---|
| IT | Division |
| Business Operations | Division |
| Development | Division |
| Shared Services | Division |

**Corporate Location OBS** (Location OBS of the Corporate Entity, 1 level):

| Unit | Level |
|---|---|
| Chicago | Location |
| Hyderabad | Location |
| London | Location |
| New York | Location |
| Paris | Location |
| Sao Paulo | Location |
| Singapore | Location |
| Sydney | Location |
| Tokyo | Location |

**Organizational OBS** (3 levels):

| Unit | Level |
|---|---|
| All Groups | All Groups |
| Administration | Group |
| Application Mgt | Group |
| Business Technologies | Group |
| Infrastructure | Group |
| Facilities | Subgroup |
| Hardware | Subgroup |
| Mobile Initiatives | Group |
| Products | Group |
| Regulatory Services | Group |
| Social Networking | Group |

**Resource Pool OBS** (3 levels):

| Unit | Level |
|---|---|
| All Groups | All Group |
| External | Group |
| Offshore Development | Team |
| Onshore Development | Team |
| Internal | Group |
| Development | Team |
| Operations | Team |
| Shared Services | Team |

**Security OBS - Pages OBS** (2 levels):

| Unit | Level |
|---|---|
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

### Sample Data: Access Groups


- **PMO Partition IT** — Members are associated to the IT partition in PMO sample data. All resources included with the PMO Sample Data are members of this group.
- **PMO Process Manager** — Members start and manage processes in PMO sample data. Includes the following access rights: Process - AutoStart - All, Process - Cancel - All, Process - Manage - All, Process - Start - All, Process - View Definition - All, Process View Instance - All.

### Sample Data: Resources


| Resource Name | User Name | Resource ID | Groups |
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
| Barb Hudson (Clarity) | bhudson | barbHudson | PMO Project Creator, PMO Project Manager Extended, PMO Project Viewer, PMO Timesheet Administrator |
| Nicole Fleming (Clarity) | nfleming | nicoleFleming | PMO Project Creator, PMO Project Manager Extended, PMO Project Viewer, PMO Timesheet Administrator |
| Theresa Robertson | trobertson | theresaRobertson | PMO Project Creator, PMO Project Manager Extended, PMO Project Viewer, PMO Timesheet Administrator, PMO Team Member, PMO Resource Administrator, PMO Resource Manager Extended |
| Mike Jones | mjones | mikeJones | (standard member) |
| Derrick Joseph | djoseph | derrickJoseph | (standard member) |

### Sample Data: Services


| Service Name | Team |
|---|---|
| Cash Management | Yes |
| Customer Contract Center | Yes |
| Email | Yes |
| Global Expense Service | Yes |
| HR Self Service | Yes |
| Internal Marketing Portal | Yes |
| Online Web Portal Service | Yes |
| Regulatory Compliance Service | Yes |
| Security Infrastructure Service | Yes |
| Trading Forward | Yes |

### Sample Data: Assets


The following asset examples are included with the PMO Accelerator sample data:
APJ Data Center, APJ Research and Development Center, APJ Technology Center, BEA Weblogic 10.0 Application Server, BrightStor HSM Hierarchical Storage Manager, CA Wily Introscope,
CA Wily Portal Manager, Dell PowerVault NX1950 Network Storage, EMEA Data Center, EMEA Technology Center, eTrust Anti-Virus for Linux, eTrust SiteMinder Apache Web Plug-In,
Headquarters, HP DL 580 - 4 x 2.8 Dual core 8GB RAM, HP 1500cs Modular Smart Array - 48TB, LATAM Data Center, LATAM Research and Development Center, LATAM Technology Center,
Microsoft SQL Server 2008 Standard Edition, MS Exchange 2010, NA Data Center, NA Research and Development Center, NA Technology Center, Red Hat Linux Advanced Platform Support,
Solaris 11, Sun StorageTek 9970 System - 17TB, Sun Sunfire v440 - 4x1.5GHz 6GB RAM App, Sun Sunfire v440 - 4x1.5GHz 6GB RAM DB, Vignette Portal, Windows 2003 Enterprise Server.

### Sample Data: Applications


| Application Name | Team | Financial Plan |
|---|---|---|
| Altus Online Order Application | Yes | Yes |
| BrightStor Storage Resource Manager for MS Exchange | Yes | Yes |
| Call Contact Center Application | Yes | Yes |
| CSS OnLine Retirement Application | Yes | Yes |
| Employee Benefits Admin Application | Yes | Yes |
| Employee Benefits Enrollment Application | Yes | Yes |
| Fixed Assets | Yes | Yes |
| Global Expense Application | Yes | Yes |
| Payroll | Yes | Yes |
| SAP R/3 Financial Accounting | Yes | Yes |
| SAP R/3 Human Resources | Yes | Yes |
| Supply Chain Datamart Application | Yes | Yes |

### Sample Data: Ideas


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
| Security Enhancements | Major Project | Enhancement |
| Tablet Office Systems Upgrade | Application Change | New Product or Service |
| Technology Center | Major Project | New Product or Service |

### Sample Data: Other Work


| Other Work Name | Team |
|---|---|
| Holiday | Yes |
| Personal Leave | Yes |
| Vacation Time | Yes |

### Sample Data: Project Templates


| Project Template Name | WBS | Financial Plan | Risk | Issue |
|---|---|---|---|---|
| Development Template (MSP) | Yes | Yes | — | — |
| Development Template (Workbench) | Yes | Yes | — | — |

### Sample Data: Projects


The following project examples are included with the PMO Accelerator sample data:
Automated Security Enhancements, BYOD Management, Change Mgt for Internal Portal, Change Mgt for Online Order Entry, Client Services Datamart Compliance Audit - Security, Credit
Card Processing Enhancements, Credit Card Security Improvements, CRM Contact Center Development, CRM Enhancements, Data Warehouse Performance Tuning, eBusiness Mobile Network,
eCommerce Portal, Email SAN Storage Implementation, Executive Dashboard Visibility, Financial Process Audit, Financial Workflow Development, Global HR Application Maintenance, HR
Claims Processing Enhancement, HR Online Benefits Security Upgrade, Learning Portal Optimization, Meeting Reservation Portal, Mobile Advertising, Mobile Commerce, Mobile Device
Management (MDM) Deployment, Mobile Identity Management Enhancements, Mobile Security, Mobile Time and Approvals, Mobile Management Services, MyLearning Mobile Pilot, Office
Upgrade, Online Order Catalog, Online Order Entry, Online Order Performance Improvements, Online to Offline Market, Order Management Release 2, Order Trending Analysis, PCI
Controls Remediation, Security Compliance, Social Networking Security Upgrade, System Upgrade Release 14, Web Application Enhancement, XPL Translations, 4G Upgrade Readiness.

> [!NOTE]
> By default, autonumbering is enabled for projects.

### Sample Data: Programs


| Program Name | Subprojects | Financial Plan | Risk | Issue | Change Request |
|---|---|---|---|---|---|
| Online Web Portal | eCommerce Portal, Online Order Catalog, Online Order Entry | Yes | Yes | Yes | Yes |

### Sample Data: Portfolios


| Portfolio Name | Unit |
|---|---|
| Application Management | Hours |
| Business Services | Hours |
| Business Technologies | Hours |
| Facilities | FTE |
| HR Compliance and Reporting | FTE |

## Related
- [[_MOC Integrations]]

%%Source: p4603-4631%%
