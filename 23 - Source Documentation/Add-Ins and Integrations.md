# Add-Ins and Integrations

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[19 - Add-Ins and Integrations/_MOC Integrations|Add-Ins and Integrations]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[19 - Add-Ins and Integrations/MSP and OWB Integration]]
- [[19 - Add-Ins and Integrations/Rally Integration]]
- [[19 - Add-Ins and Integrations/SSO Integration]]
- [[19 - Add-Ins and Integrations/APM Add-In]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Install an Add-in (#install-an-add-in)
- H3: Review the Prerequisites (#review-the-prerequisites)
- H3: Stop the Services (#stop-the-services)
- H3: Install the Add-in (#install-the-add-in)
- H3: Start the Services (#start-the-services)
- H3: Apply the Add-in Content Items (Upgrades Only) (#apply-the-add-in-content-items-upgrades-only)
- H2: Add-in: CA Application Portfolio Management (APM) (#add-in-ca-application-portfolio-management-apm)
- H3: APM Add-in Release Notes (#apm-add-in-release-notes)
- H3: Install the APM Add-In (#install-the-apm-add-in)
- H3: APM Add-In Attributes and the Data Warehouse (#apm-add-in-attributes-and-the-data-warehouse)
- H3: APM Application Lifecycle (#apm-application-lifecycle)
- H3: APM Application List View and Properties (#apm-application-list-view-and-properties)
- H3: APM Application Assessments (#apm-application-assessments)
- H3: APM Application Certifications (#apm-application-certifications)
- H3: APM Application Dashboard (#apm-application-dashboard)
- H3: APM Assessment Review Page and Portlets (#apm-assessment-review-page-and-portlets)
- H3: APM Application Reports (#apm-application-reports)

To extend product functionality, you can install optional content add-ins and configure integrations with Rally, CA Open Workbench, Microsoft Project, and CA SSO. Classic PPM platform offers a comprehensive set of integration options to work with data from multiple sources. You can extend the functionality of Classic PPM by installing one or more of the available add-ins that are included with the product. Add-ins are included with the product and are ready to be installed. You do not need to download separate add-in installation image files.

> [!NOTE]
> Additional licensing and fees may apply to procure additional software.

> [!TIP]
> The Microsoft Project (MSP) and Open Workbench (OWB) documentation appears in the Using section under Project Management. This documentation is available only in English. These optional scheduling programs are available to help you work with projects, tasks, and other work items.

---

## Install an Add-in

> [!WARNING]
> Thoroughly review and follow the documentation.

### Review the Prerequisites
- Back up the file system and database before installing an add-in. You can use the `admin backup` command to take a backup of the file system. This precaution ensures that you can restore the application, if necessary.
- Each add-in delivers a specific solution. Although you can install more than one add-in, the resulting system configuration will be a combination of different solutions. In this case, additional configuration in Studio might be necessary to make the new system configuration useful.
- As a precaution, install an add-in in a test environment before you install it into your production environment. The test environment allows you to see the system configuration changes that an add-in produces.
- Installing and applying an add-in can change the views for objects such as projects. If your organization uses customized views, install in a test environment to review the results and make more Studio configurations if necessary.
- To verify that the add-in that you are installing or upgrading works with your product version, review the required versions for add-ins, integrations, and other compatible software in the Release Notes.
- Beginning with Release 15.3, the APM and PMO add-ins require the data warehouse. These add-ins include Jaspersoft Advanced Reporting content items. Before you install the PMO or APM add-ins in Release 15.3, verify that you have already installed the data warehouse. See Install and Configure the Data Warehouse in the English edition of the documentation. These add-ins include items that are based on the data warehouse schema. If the data warehouse schema is unavailable, the add-ins won't work. If the installation or upgrade script for these add-ins does not detect the data warehouse, it cannot continue and exits.
- After you install an add-in, you cannot uninstall it.

### Stop the Services

Stop the Classic PPM Application (app) and Classic PPM Background (bg) services before installing an add-in.

1. From the command prompt, navigate to the `bin` folder in the Classic PPM home directory.
2. Enter the following command:
   ```
   service stop app bg
   ```
3. If there are cloned services (app2, app3, bg2, bg3, and so on), add those service IDs to the command or use the following command:
   ```
   service stop all
   ```

### Install the Add-in

The following table contains the add-in installation IDs that are required for the installation process.

| Add-in | Installation ID |
|---|---|
| Application Portfolio Management | `apm` |
| Rally Integration | `agl` |
| PMO Accelerator | `csk` |

1. From the command prompt, navigate to the `bin` folder in the Classic PPM home directory.
2. Enter this command:
   ```
   admin content <id>
   ```
   The installation process begins and information appears on the screen. The information is captured and stored in the `admin.log` file in the logs directory.
3. Review the screen output and the logs for important information after the installation completes.

### Start the Services

Follow these steps if all services use Apache Tomcat as the Classic PPM app server, running on a single server.

1. From the command prompt, navigate to the `bin` folder in the Classic PPM home directory.
2. Enter this command:
   ```
   service start app bg
   ```
3. If there are cloned services (app2, app3, bg2, bg3, and so on), add those service IDs to the command or use this command:
   ```
   service start all
   ```
4. If you have only one server, you are finished here. If you have multiple servers, log into CSA and continue with the following steps.
5. Open **Home** and click **All Services**.
6. Clear the check box for any remote app and bg services.
7. Open the **Distribution** menu, and click **Distribute All**.
8. Select the remote servers and click **Distribute**. Wait until the distribution is complete before continuing.
9. Open **Home**, and click **All Services**.
10. Select the Classic PPM Application (app) and Classic PPM Background (bg) service checkboxes, and click **Start**.

### Apply the Add-in Content Items (Upgrades Only)

For upgraded add-ins, you apply the add-in content items after the installation. To apply the add-in, review the add-in items in the product, then select and apply the upgrade-ready or uninstalled items.

1. Log in to Classic PPM.
2. Click **Administration > Studio > Content Add-ins**.
3. Click the name of the newly installed add-in.
4. Review the existing configurations carefully before you apply the new or changed content.

> [!NOTE]
> Previously configured views are not overwritten during the installation. From this page, you can select which new or updated views to apply. Applying a Studio object overwrites the existing configuration of that Studio object's views.

5. Click the **Items** tab.

> [!NOTE]
> By default, the items that are new or modified are pre-selected. Clear the checkbox for any that you do not want to apply.

6. Select the items that are marked **Upgrade Ready** or **Not Installed** that you want to upgrade to the new version.
7. For all active process instances that display the Upgrade Ready status, cancel and delete the process instances.
8. Click **Install**. A confirmation page displays the list of selected and required dependent items.
9. Click **Yes** to apply the add-in items.

> [!NOTE]
> If a user previously personalized an item that is listed on the confirmation page, publish the item to push the update to all users.

---

## Add-in: CA Application Portfolio Management (APM)

Classic PPM Application and Portfolio Management capabilities allow organizations to track and analyze their application portfolio. Application portfolio management is important for the following reasons:

1. Organizations tend to accumulate applications due to mergers and acquisitions or other purchasing activity. Over time, some of the applications might no longer deliver value.
2. Certain applications might be redundant to each other, meaning that an organization has multiple applications that deliver the same capability.
3. Research tells us that organizations typically have a larger percentage of IT spend aligned to supporting these applications.
4. Organizations have limited budgets and face constraints when funding innovation.

The CA Application Portfolio Management (CA APM) add-in helps you manage your application portfolios. CA APM shares objectives that align with your existing project and portfolio management goals. This add-in helps you invest in people and allocate funds to their maximum value. Application rationalization and risk management help you reduce costs and deliver the most important services.

Organizations that are interested in Application Portfolio Management are concerned with a few key questions:
- Which applications can we retire to save money?
- Which applications can we add to the portfolio?
- How can we better manage the risks in our application portfolio?
- How are our projects performing on key applications?

Use CA APM to rank your applications on mission criticality, risk, business value, and technical value.

This add-in includes new Classic PPM attributes, subobjects, portlets, and the following reports:
- **Application Assessment Analysis**: This report compares mission criticality with risk. Use this report to identify the high-risk critical applications and to determine which actions to take as a result.
- **Application KPI Report**: This report is similar to the KPIs by Project Type report.

> [!TIP]
> Like other add-ins, CA APM is delivered as part of your Classic PPM solution. Your organization can decide whether to install and use this optional functionality.

### APM Add-in Release Notes

Use the Application Portfolio Management (APM) Add-in Release Notes to help your organization plan for this release. This add-in is based on Classic PPM Release 15.1 and applies to higher 15.x releases.

#### What's New in the APM Add-In

The APM add-in includes the following new features:
- Reports and filter options in the Advanced Reporting content are modified to use the new security model in the Data Warehouse.

#### Attributes and the Data Warehouse

Most attributes that are installed by the APM add-in have the **Included in the Data Warehouse** field selected. The APM add-in attribute IDs are renamed when their respective columns are created in the Data Warehouse.

#### View Protection

If you previously used Classic PPM Studio to configure views or you installed another add-in that configured views, these configurations remain as-is when you install CA APM. They are not overwritten by new or changed content during installation. You can decide whether to make manual changes to your existing configurations or to apply the new content that is delivered in the add-in.

(On-premise only) To apply the view changes that are installed by this add-in, see Install the APM Add-In.

The following table shows all views that are included with this add-in:

| Object Name | View |
|---|---|
| Application | Application Properties |
| Application | Application List |
| Application | Application Filter |
| Application Assessment | Application Assessment Subobject Filter View |
| Application Assessment | Application Assessment Subobject List View |
| Application Assessment | Application Assessment Subobject Property Views |
| Application Certification | Application Certification Subobject Filter View |
| Application Certification | Application Certification Subobject List View |
| Application Certification | Application Certification Subobject Property Views |

#### APM Certified and Supported Versions

| Clarity Version |
|---|
| 16.x |
| 15.x |
| 14.4 |
| 14.3 |

### Install the APM Add-In

The APM add-in is included with Classic PPM and is ready to install.

#### Prerequisites
- The required version of the PMO Accelerator is a prerequisite for the APM add-in. Upgrade the PMO Accelerator before installing the APM add-in. See the APM Add-in Release Notes for the required version of the add-in for your Classic PPM release.
- (On-Premise only) Verify that you have already installed and configured the Data Warehouse. See Install and Configure the Data Warehouse for details. The APM add-in includes items that are based on the Data Warehouse schema. If the Data Warehouse schema is unavailable, installation of the add-in is unsuccessful.

> [!WARNING]
> We recommend that you back up the existing Classic PPM installation directory and database before you install the add-in. A backup allows you to restore the application to the prior version, if necessary. After you install the add-in, you cannot uninstall it.

#### (On-Premise only) Install the APM Add-In

To enable the APM content, install the APM add-in on your Classic PPM application server.

1. **Stop the services**. Before you install the add-in, stop the Classic PPM application (app) and background (bg) services from Classic PPM System Administration (CSA).
2. **Execute the install script**. The script installs APM lookups, queries, portlets, pages, views, and database objects.
   1. Open a command prompt and navigate to the Classic PPM runtime `bin` directory.
   2. Enter the following command:
      ```
      admin content apm
      ```
      The installation process begins and information displays on the page. The information is captured and stored in the `admin.log` file that is saved in the logs directory. The output files are stored in the `logs/content/xog/apm` directory.
   3. Review the installation process output and the logs for important information after the installation completes.
3. **Start the Services**. After you install the add-in, start the Classic PPM Application (app) and Classic PPM Background (bg) services from CSA.

> [!TIP]
> To learn more about stopping and starting services in CSA, see CSA: Clarity System Administration.

#### Install the APM Add-in Content Items

Install the APM add-in items after you install the APM add-in for the first time.

1. Log in to Classic PPM.
2. Open **Administration**, and from **Studio**, click **Content Add-ins**.
3. Click the List icon for the Application Portfolio Management add-in (ID: `apm`). The Content Add-In Items List page appears.
4. Review the following items in the list and select the items that are **Upgrade Ready**.
- Application Object Filter View
- Application Object List View
- Application Object Property Views

   Use the **Status** filter that is available on this page. The Status indicates if the add-in item is installed in Classic PPM. Values:
- **Not Installed**: Items that are new to the add-in version or items that produced an error upon install. When the APM add-in is not upgraded after upgrading from a previous Classic PPM release, several items show as Not Installed and an alert message instructs you to install the add-in. Install the add-in to change the status of these items.
- **Upgrade Ready**: Items that you installed from a previous add-in version that contain updates to the items in the current add-in version. Also, views that were updated through the add-in that you also modified through Studio.
- **Installed**: Items that are installed. If you previously configured Studio Application object views, the configurations are preserved and are not overwritten during installation. You can decide which views to install by selecting them.

> [!WARNING]
> Consider the configurations that you made to items before you install them. Installing modified items overwrites your configurations.

5. Select the items that you want to install and click **Install**. The items that you selected appear on the Confirm Content Item Installation page. If selected items have dependencies on other items, the dependent items also appear on the page and must be installed.
6. Click **Yes** to update or install the items. If a user previously changed an item that is listed on the confirmation or installation page, publish the item before displaying the update to users. For more information, see Classic PPM Studio Development.

#### Import the Jaspersoft Advanced Reporting Content for APM

You can import the Jaspersoft Advanced Reporting content for APM. This process imports reports, input controls, localization bundles, images, and data sources.

See Upgrade Jaspersoft and Migrate Advanced Reporting Content.

(On-Premise only) This content is imported into the organization name that is specified in the Classic PPM System Administration (CSA) Reporting subtab.

> [!WARNING]
> Verify that the following prerequisites have been met:
> - Specify the organization name, organization ID, and the user in the CSA Reporting subtab before you import the Jaspersoft Advanced Reporting content.
> - Verify that you have upgraded to the required PMO Accelerator for your release. Import the PMO Accelerator Jaspersoft Advanced Reporting content before importing the Jaspersoft Advanced Reporting content that is available with the APM add-in.
> - Set up Advanced Reporting in Jaspersoft and Classic PPM. For more information, see Installing and Upgrading.

The import creates the following items:
- Application Management subfolder under the Reports folder in the organization repository
- Application Management reports
- Entry for the Jaspersoft content in the Install History table (`CMN_INSTALL_HISTORY`)

(On-Premise only) Follow these steps:

1. Open a command prompt and navigate to the Classic PPM runtime `bin` directory.
2. Enter the following command:
   ```
   admin content-jaspersoft apm -userName superuser -password <password>
   ```
   The import process begins and the import information is stored in the `admin.log`. The import process requires the superuser user.
3. Review the `admin.log` for important information after the import completes.
4. Open **Administration**, and from **Studio**, click **Content Add-ins**.
5. Click the Application Portfolio Management add-in (ID: `apm`). The Content Add-In Accelerator: Application Portfolio Management - Properties page appears.
6. Review the Jaspersoft Content Installed Date included in the Versions section of this page.

### APM Add-In Attributes and the Data Warehouse

Most attributes for the APM add-in objects have their **Include in the Data Warehouse** field selected. The APM add-in attribute IDs are renamed when their respective columns are created in the Data Warehouse (DWH).

> [!WARNING]
> Do not unselect the Include in the Data Warehouse field because reports depend upon the attributes.

#### Application Object Attributes

The following table lists the APM attributes and their corresponding Data Warehouse column names for the Application object:

| Attribute | Attribute ID | DWH Enabled | Table Column | Lookup Table | Notes |
|---|---|---|---|---|---|
| Acquisition Date | `apm_acquisition_date` | Yes | `dwh_inv_application apm_acquisition_date` | Not applicable | None |
| Acronym | `apm_acronym` | Yes | `dwh_inv_application apm_acronym` | Not applicable | None |
| Application Source | `apm_app_source` | Yes | `dwh_inv_application apm_app_source_key` | `dwh_lkp_apm_app_source` | None |
| Application Vendor | `apm_app_vendor` | Yes | `dwh_inv_application apm_app_vendor_key` | `dwh_lkp_apm_app_vendor` | None |
| Client Type | `apm_client_type` | Yes | `dwh_inv_application apm_client_type_key` | `dwh_lkp_apm_client_type` | Created without any lookup values. Customers can add their own client types. |
| Contract Due Date | `apm_contr_due_date` | Yes | `dwh_inv_application apm_contr_due_date` | Not applicable | None |
| Installation Type | `apm_install_type` | Yes | `dwh_inv_application apm_install_type_key` | `dwh_lkp_apm_install_type` | None |
| Last Assessment | `apm_last_assessment` | No | Not applicable | Not applicable | Currently not used |
| Mission Critical Level | `apm_m_critical_level` | Yes | `dwh_inv_application apm_m_critical_level` | Not applicable | Aggregated calculated attribute that is based on the application assessment subobject |
| Number of Users | `apm_no_of_users` | Yes | `dwh_inv_application apm_no_of_users` | Not applicable | None |
| Official Application Name | `apm_official_app_nme` | Yes | `dwh_inv_application apm_official_app_nme` | Not applicable | None |
| Retirement Strategy | `apm_retire_strategy` | Yes | `dwh_inv_application apm_retire_strategy_key` | `dwh_lkp_apm_retire_strategy` | None |
| Risk Score | `apm_rsk_assess_score` | Yes | `dwh_inv_application apm_rsk_assess_score` | Not applicable | Aggregated calculated attribute that is based on the application assessment subobject |
| Security Level | `apm_security_level` | Yes | `dwh_inv_application apm_security_level_key` | `dwh_lkp_apm_security_level` | None |
| Software Category | `apm_sw_category` | Yes | `dwh_inv_application apm_sw_category_key` | `dwh_lkp_apm_sw_category` | None |
| Software Sub-Category | `apm_sw_subcategory` | Yes | `dwh_inv_application apm_sw_subcategory_key` | `dwh_lkp_apm_sw_subcategory` | None |
| Tagged for Retirement | `apm_tag_for_retire` | Yes | `dwh_inv_application apm_tag_for_retire` | Not applicable | None |
| Target Retirement Date | `apm_trgt_retire_date` | Yes | `dwh_inv_application apm_trgt_retire_date` | Not applicable | None |
| Technical Score | `apm_tec_assess_score` | Yes | `dwh_inv_application apm_tec_assess_score` | Not applicable | Aggregated calculated attribute that is based on the application assessment subobject |
| Unused Licenses | `apm_unused_licenses` | Yes | `dwh_inv_application apm_unused_licenses` | Not applicable | None |
| Value Score | `apm_val_assess_score` | Yes | `dwh_inv_application apm_val_assess_score` | Not applicable | Aggregated calculated attribute that is based on the application assessment subobject |

#### Application Assessment Object Attributes

The following table lists the APM attributes and their corresponding Data Warehouse column names for the Application Assessment object:

| Attribute | Attribute ID | DWH Enabled | Table Column | Lookup Table | Notes |
|---|---|---|---|---|---|
| Assessment Date | `assessment_date` | Yes | `dwh_inv_apm_app_assess assessment_date` | Not applicable | None |
| Assessment Due Date | `assessment_due_date` | Yes | `dwh_inv_apm_app_assess assessment_due_date` | Not applicable | None |
| Assessment Owner | `assessment_owner` | Yes | `dwh_inv_apm_app_assess assessment_owner_key` | `dwh_res_resource` | None |
| Assessment Status | `assessment_status` | Yes | `dwh_inv_apm_app_assess apm_assess_status_key` | `dwh_lkp_apm_assess_status` | None |
| Comments | `assessment_comments` | Yes | `dwh_inv_apm_app_assess assessment_comments` | Not applicable | None |
| Competitive Advantage | `val_competitive_adv` | Yes | `dwh_inv_apm_app_assess apm_competitive_adv_key` | `dwh_lkp_apm_competitive_adv` | None |
| Created By | `created_by` | No | Not applicable | Not applicable | None |
| Created Date | `created_date` | Yes | `dwh_inv_apm_app_assess clarity_created_date` | Not applicable | None |
| Development Languages | `tech_develop_lang` | Yes | `dwh_inv_apm_app_assess apm_develop_lang_key` | `dwh_lkp_apm_develop_lang` | None |
| Effectiveness | `val_effectiveness` | Yes | `dwh_inv_apm_app_assess apm_effectiveness_key` | `dwh_lkp_apm_effectiveness` | None |
| Enterprise Architecture | `tech_enterprise_arch` | Yes | `dwh_inv_apm_app_assess apm_enterprise_arch_key` | `dwh_lkp_apm_enterprise_arch` | None |
| ID | `code` | Yes | `dwh_inv_apm_app_assess assessment_id` | Not applicable | None |
| Integration Options | `tech_integration_opt` | Yes | `dwh_inv_apm_app_assess apm_integration_opt_key` | `dwh_lkp_apm_integration_opt` | None |
| IT Security | `tech_it_security` | Yes | `dwh_inv_apm_app_assess apm_tec_it_security_key` | `dwh_lkp_apm_tec_it_security` | None |
| Last Updated Date | `last_updated_date` | Yes | `dwh_inv_apm_app_assess clarity_updated_date` | Not applicable | None |
| Mission Critical Level | `mc_critical_level` | Yes | `dwh_inv_apm_app_assess apm_critical_level_key` | `dwh_lkp_apm_critical_level` | None |
| Name | `name` | Yes | `dwh_inv_apm_app_assess assessment_name` | Not applicable | None |
| Organizational Efficiencies | `val_org_efficiencies` | Yes | `dwh_inv_apm_app_assess apm_org_efficiency_key` | `dwh_lkp_apm_org_efficiency` | None |
| Organizational Value Chain | `val_org_value_chain` | Yes | `dwh_inv_apm_app_assess apm_org_value_chain_key` | `dwh_lkp_apm_org_value_chain` | None |
| Partition | `partition_code` | No | Not applicable | Not applicable | None |
| Risk Score | `rsk_assess_score` | Yes | `dwh_inv_apm_app_assess rsk_assess_score` | Not applicable | Calculated attribute that is based on risk questions in this assessment subobject |
| Technical Score | `tech_assess_score` | Yes | `dwh_inv_apm_app_assess tech_assess_score` | Not applicable | Calculated attribute that is based on technical questions in this assessment subobject |
| Technical Skills Available | `rsk_tech_skill_avail` | Yes | `dwh_inv_apm_app_assess apm_tec_skill_avail_key` | `dwh_lkp_apm_tec_skill_avail` | None |
| Updated By | `updated_by` | No | Not applicable | Not applicable | None |
| Value Score | `val_assess_score` | Yes | `dwh_inv_apm_app_assess val_assess_score` | Not applicable | Calculated attribute that is based on value questions in this assessment subobject |
| Vendor Support | `rsk_vendor_support` | Yes | `dwh_inv_apm_app_assess apm_vendor_support_key` | `dwh_lkp_apm_vendor_support` | None |

#### Application Certification Object Attributes

The following table lists the APM attributes and their corresponding Data Warehouse column names for the Application Certification object:

| Attribute | Attribute ID | DWH Enabled | Table Column | Lookup Table | Notes |
|---|---|---|---|---|---|
| Attachment | `cert_attachment` | No | Not applicable | Not applicable | Attributes that are defined with the data type of attachment are not available in the Data Warehouse. |
| Certification Date | `cert_date` | Yes | `dwh_inv_apm_app_cert cert_date` | Not applicable | None |
| Certification Required | `is_cert_required` | Yes | `dwh_inv_apm_app_cert is_cert_required` | Not applicable | None |
| Certification Target Date | `cert_target_date` | Yes | `dwh_inv_apm_app_cert cert_target_date` | Not applicable | None |
| Certification Type | `cert_type` | Yes | `dwh_inv_apm_app_cert apm_cert_type_key` | `dwh_lkp_apm_cert_type` | None |
| Certification Valid Until | `cert_valid_until` | Yes | `dwh_inv_apm_app_cert cert_valid_until` | Not applicable | None |
| Certified | `is_certified` | Yes | `dwh_inv_apm_app_cert is_certified` | Not applicable | None |
| Comments | `cert_comments` | Yes | `dwh_inv_apm_app_cert cert_comments` | Not applicable | None |
| Created By | `created_by` | No | Not applicable | Not applicable | None |
| Created Date | `created_date` | Yes | `dwh_inv_apm_app_cert clarity_created_date` | Not applicable | None |
| ID | `Code` | Yes | `dwh_inv_apm_app_cert certification_id` | Not applicable | None |
| Last Updated Date | `last_updated_date` | Yes | `dwh_inv_apm_app_cert clarity_updated_date` | Not applicable | None |
| Name | `name` | Yes | `dwh_inv_apm_app_cert certification_name` | Not applicable | None |
| Partition | `partition_code` | No | Not applicable | Not applicable | None |
| Updated By | `updated_by` | No | Not applicable | Not applicable | None |

### APM Application Lifecycle

APM allows you to manage applications throughout the application lifecycle using an application methodology. APM helps your organization to optimize application resources and to manage risk.

#### Application Lifecycle Stages

The application lifecycle consists of the following stages:

1. **Proposal**: The application requirements are formally submitted to vendors and vendors respond with a proposal.
2. **Bid-Vendor Selection**: An organization solicits bids and selects an application vendor.
3. **Configure**: A new application is configured to meet the needs of an organization.
4. **Deploy**: A new application is made available to users in a production environment.
5. **Maintain**: An existing application is maintained to meet requirements and continually add value.
6. **Retire**: An existing application is no longer available for use.

#### Application Workflow

The following procedure summarizes the application workflow:

1. Create an application in Classic PPM under **Home > Portfolio Management > Applications**. The assessment score section is populated later in the workflow.
2. Add planned costs to your application using one of the following methods:
- Create a cost plan under **Financial Plans > Cost Plans**. See Create Detailed Financial Plans for details on how to create a cost plan. Some of the portlets and reports in APM show annual planned cost for the current fiscal year.
- Create a financial summary plan under application **Properties > Financial Summary**. Some of the portlets and reports in APM show annual planned cost for the current fiscal year.
3. Add any certifications that apply to your application under application **Properties > Certifications**.
4. Create (typically each year) a new assessment for your application under application **Properties > Assessments** with a status of Draft. In the assessment, select a mission critical level for the application. Also, answer a series of questions pertaining to application value, risk, and technical fit that are used to calculate the value, technical, and risk scores in the methodology.
5. Use the **Assessment Review Dashboard** to manage the assessment process.
6. After the application assessment is complete, change the assessment status to **Final**. The assessment scores roll up to the application level and display on the application properties page, application list view, portlets, and reports.
7. Review and analyze the application portfolio using the **Application Dashboard** and APM reports. Analyze applications periodically to ensure that their costs, risks, and technical fit align with the value that they bring to the organization.
8. Mark applications as potential retirement candidates that are no longer a good fit.
   1. Select the **Tagged for Retirement** check box.
   2. Enter a **Target Retirement Date**.
9. Review the applications that are tagged for retirement to determine if they can be retired, and to select a retirement strategy and target date. Applications that are targeted for retirement appear on the **Retirement** tab of the Application Dashboard.
10. Continue to manage your active applications throughout the application lifecycle and periodically reassess.

#### Retire an Application

You can retire applications using one of the following application retirement strategies:
- **Decommission**: Complete removal of the application within an organization
- **Replace**: Replace the existing application with a new application
- **Consolidate**: Remove an obsolete application and augment a more relevant application to cover any functionality gaps that are caused by removing the obsolete application

### APM Application List View and Properties

The APM add-in adds several new fields to the application. The application list and properties views have been configured to display some of these new fields.

#### Application List View Fields

1. Open **Home**, and from **Portfolio Management**, click **Applications**.
2. Expand the filter area to view the filters.

The following new fields are configured to display on the application list view for APM:
- Application Source
- Installation Type
- Mission Critical Level
- Risk Score
- Software Category
- Software Sub-Category
- Technical Score
- Value Score

The following new filters have been added to the application list view for APM:
- Application Source
- Installation Type
- Software Category
- Software Sub-Category

#### Application Properties View Fields

1. Open **Home**, and from **Portfolio Management**, click **Applications**. The application list view appears.
2. Click an application.

The following new fields are configured to display on the application properties view for APM:
- Acquisition Date
- Acronym
- Application Source
- Application Vendor
- Client Type
- Contract Due Date
- Installation Type
- Last Assessment
- Mission Critical Level
- Number of Users
- Official Application Name
- Retirement Strategy
- Risk Score
- Security Level
- Software Category
- Software Sub-Category
- Tagged for Retirement
- Target Retirement Date
- Technical Score
- Unused Licenses
- Value Score

The following PMO Accelerator fields are configured to display on the application properties view for use by APM:
- Portfolio Category 1
- Portfolio Category 2
- Portfolio Category 3
- Portfolio Category 4

The following out-of-the-box field is configured to display on the application properties view for use by APM:
- Number of Licenses

### APM Application Assessments

APM uses a methodology for application portfolio management that is based on assessments. Periodically (for example, on an annual basis), application portfolio managers create a new assessment that measures and ranks applications based on the following criteria. To determine each score, a series of questions is answered in each of the relevant categories in the assessment. Assessments are initially created with a status of **Draft** and later updated to **Final** after the assessment is complete. Each assessment has a due date to help organizations manage the assessment review process.

The objective of this methodology is to ensure resources are allocated and spent wisely throughout the application lifecycle. Also, the application scores are analyzed to determine which applications are candidates for retirement or future investment.
- **Mission Critical Level**: Applications are assessed based on mission criticality as tactical, mission essential, or mission critical.
- **Value Score**: Applications are assessed based on the value they bring to the organization. A low score represents those applications that bring little value, while a high score represents applications that bring the most value to the organization.
- **Technical Score**: Applications are assessed based on their technical status. A low score represents those applications that are weak technically, while a high score represents applications that have a stronger technical backbone.
- **Risk Score**: Applications are assessed based on their risk to the organization. A high score represents those applications that contain the most risk, while a low score represents applications that have the least risk to the organization.

An Application Assessment subobject for applications allows users to add and manage assessments for an application.

1. Open **Home**, and from **Portfolio Management**, click **Applications**.
2. Click an application.
3. Open **Properties**, and from the Properties menu, click **Assessments**. Click an existing assessment to view the properties page or click **New** to create an assessment.

The following fields apply to the application assessment subobject for APM:
- Assessment Date, Assessment Due Date, Assessment ID, Assessment Name, Comments, Competitive Advantage, Created By, Created Date, Development Languages, Effectiveness, Enterprise Architecture, Integration Options, IT Security, Last Updated Date, Mission Critical Level, Organizational Efficiencies, Organizational Value Chain, Owner, Partition, Risk Score, Status, Technical Score, Technical Skills Available, Updated By, Value Score, Vendor Support

### APM Application Certifications

An APM Application Certification subobject for applications allows you to add and manage certifications for an application.

1. Open **Home**, and from **Portfolio Management**, click **Applications**.
2. Click an application.
3. Open **Properties**, and from the Properties menu, click **Certifications**. Click an existing certification to view the properties page or click **New** to create a new certification.

The following fields have been created on the application certification subobject for APM:
- Attachment, Certification Date, Certification ID, Certification Name, Certification Required, Certification Target Date, Certification Type, Certification Valid Until, Certified, Comments, Created By, Created Date, Last Updated Date, Partition, Updated By

### APM Application Dashboard

The Application Dashboard consists of eight tabs that help users study and manage their application portfolio throughout the application lifecycle. To access this dashboard, click **Home > Dashboards > Application Dashboard**.

The following page filters are available to filter data for each tab in the dashboard:
- **OBS**: Filters applications by an OBS hierarchy.
- **Application Source**: Filters applications by the source of the application.
- **Installation Type**: Filters applications by the type of installation.
- **Application Vendor**: Filters applications by vendor.
- **Software Category**: Filters applications by Software Category.
- **Software Sub-Category**: Filters applications by Software Sub-Category, which is dependent on the Software Category filter.

**Security**: All portlets in this dashboard are prefiltered to show only the applications to which you have access.

#### Categorization Tab

The Categorization tab shows how the application portfolio is distributed across various software categories and subcategories by annual planned cost and number of users. This tab consists of the following portlets:
- **Annual Planned Cost by Application Categorization Portlet**: Displays a three-level tree map graph showing annual planned cost by software category. The rectangle size is based on the category annual planned cost. Clicking a category drills down to the subcategory level, and clicking a subcategory drills down to the application level.
- **Metric**: Annual Planned Cost -- derived from the application Cost Plan of Record under Financial Planning. Costs are displayed for the current fiscal year. If no Cost Plan exists, this amount is derived from the application Financial Summary Planned Cost prorated for the current fiscal year.
- **Number of Users by Application Categorization Portlet**: Displays a three-level tree map graph showing the number of users by software category. Similar drill-down behavior as the Annual Planned Cost portlet.
- **Metric**: Number of Users -- a sum of the Number of Users field from the application properties page.

#### Value Quadrant Tab

The Value Quadrant tab shows how the application portfolio is distributed across the Technical Score and Value Score quadrants. This tab consists of the following portlets:
- **Application Value Quadrant by Annual Planned Cost Portlet**: Displays a bubble graph that plots each application into one of four quadrants based on the application value and technical scores. The bubble size is based on annual planned cost. The X-axis displays the value score and the Y-axis displays the technical score.
- **Good Technical/Poor Value Score Portlet**: Displays applications with a high technical score and a low value score (technical score >= 50, value score < 50).
- **Good Fit Portlet**: Displays applications with both high technical and value scores (both >= 50).
- **Poor Fit Portlet**: Displays applications with both low technical and value scores (both < 50). These are candidates for retirement.
- **Poor Technical/Good Value Score Portlet**: Displays applications with a low technical score and a high value score (technical score < 50, value score >= 50).

Each portlet includes metrics for Value Score, Technical Score, and can be configured to also show Annual Planned Cost, Application ID, Application Vendor, Number of Users, Quadrant, Risk Score, Software Category, and Software Sub-Category.

#### Value Map Tab

The Value Map tab shows the application strategy based on the average value score and average technical score. This tab consists of the following portlets:
- **Value Score by Installation Type and Application Source Portlet**: Displays a heat map graph showing average value score by installation type and application source.
- **Technical Score by Installation Type and Application Source Portlet**: Displays a heat map graph showing average technical score by installation type and application source.
- **Value Map Drill Down Portlet**: Provides application detail and scores including Value Score, Technical Score, Number of Users, Annual Planned Cost, Average Value Score, Average Technical Score, Total Number of Users, and Total Annual Planned Cost.

#### Mission Criticality Tab

The Mission Criticality tab shows key application metrics by mission criticality. This tab consists of the following portlets:
- **Annual Planned Cost by Mission Criticality Portlet**: Displays a pie graph showing annual planned cost by mission criticality.
- **Application Count by Mission Criticality Portlet**: Displays a pie graph showing a count of applications by mission criticality.
- **Number of Users by Mission Criticality and Application Source Portlet**: Displays a three-level tree map graph showing the number of users.
- **Mission Criticality Drill Down Portlet**: Provides application detail and various metrics for all applications within that criticality level.

#### Annual Cost Tab

The Annual Cost tab shows annual planned cost by application source and installation type. This tab consists of the following portlets:
- **Annual Planned Cost by Application Source Portlet**: Displays a donut graph showing annual planned cost by application source.
- **Annual Planned Cost by Installation Type Portlet**: Displays a donut graph showing annual planned cost by installation type.
- **Annual Planned Cost by Installation Type and Application Source Portlet**: Displays a heat map graph showing annual planned cost by installation type and application source.
- **Annual Cost Drill Down Portlet**: Provides application detail and various metrics for all applications within that application source or installation type.

#### Scorecard Tab

The Scorecard tab shows the scoring and key metrics for each application. Clicking an application navigates to the application properties page. This portlet includes:
- Value Score, Technical Score, Risk Score, Number of Users, Number of Licenses, Unused Licenses

> [!NOTE]
> This portlet is based on the Application provider and can be configured accordingly.

#### Lifecycle Tab

The Lifecycle tab shows the application count and annual planned cost for each stage in the lifecycle. This tab consists of the following portlets:
- **Application Lifecycle Portlet**: Displays a heat map graph showing the application count by lifecycle stage.
- **Application Lifecycle by Value Score Portlet**: Displays a heat map graph showing the annual planned cost by lifecycle stage and value score.
- **Lifecycle Drill Down Portlet**: Provides scoring detail and various metrics at the application level.

#### Retirement Tab

The Retirement tab shows applications that have been tagged for retirement. This tab consists of the following portlets:
- **Annual Planned Cost by Retirement Strategy Portlet**: Displays a donut graph showing annual planned cost by retirement strategy.
- **Application Count by Retirement Strategy Portlet**: Displays a donut graph showing a count of applications by retirement strategy.
- **Application Retirement Candidates Portlet**: Displays applications that are tagged for retirement. This portlet is prefiltered to include only those applications that have the Tagged for Retirement attribute checked.

### APM Assessment Review Page and Portlets

The Assessment Review dashboard consists of tabs that let users view and manage their application assessments throughout the assessment cycle. To access this dashboard, open **Home**, and from **Dashboards**, select **Assessment Review**.

The following page filters are available for each tab:
- **OBS**: Filters application assessments by an application OBS hierarchy
- **Application Source**: Filters application assessments by the source of the application
- **Installation Type**: Filters application assessments by the type of application installation
- **Application**: Filters assessments by application
- **Assessment Name**: Filters application assessments by the assessment name
- **Assessment Owner**: Filters application assessments by the assessment owner
- **Assessment Due Date**: Filters application assessments by an assessment due date range

**Security**: All the portlets in this dashboard are pre-filtered to show only those applications to which users have access.

#### APM Assessment Listing

The Assessment Listing tab shows a listing of all application assessments, regardless of their status. Users can view how assessment scores change over time for an application or can use this portlet to view historic assessment data across several applications. Users can click on an application to navigate to the application's properties screen or click on an assessment to navigate to the assessment's properties screen.

This portlet includes the following metrics:
- **Value Score**: From the application's assessment record.
- **Technical Score**: From the application's assessment record.
- **Risk Score**: From the application's assessment record.

Additional configurable fields: Application ID, Application Manager, Application Source, Application Vendor, Assessment Comments, Assessment ID, Installation Type, Software Category, Software Sub-Category, Stage Count, Stage Number.

#### APM Late and Missing Assessments

The Late and Missing Assessments tab shows assessments that are late or missing. Use this page to manage application assessments.

**Late Assessments Portlet**: Displays late assessments. This portlet is pre-filtered to include only the following assessments:
- Status is not equal to Final (including assessments with an empty status field value)
- Due date is earlier than the current date

This portlet includes the metric **Days Late**: Current Date - Assessment Due Date.

**Missing Assessments for Current Year Portlet**: Displays applications that do not have an assessment in the current fiscal year. This portlet is pre-filtered to include only those applications that do not have an assessment (regardless of the assessment status) during the application current fiscal year. The application must have the financial properties populated to display in the portlet because it must link to a fiscal calendar.

### APM Application Reports

Two Application Reports are available in the APM add-in: **Application Assessment Analysis** and **KPIs by Application**. These reports provide visibility into Key Performance Indicators (KPIs). These KPIs include scores for value, technical fit, and risk.

#### Application Assessment Analysis

The Application Assessment Analysis report shows applications by mission criticality and risk score. The report also categorizes applications based on the level of attention that is required.

**Report Prerequisites:**
- The **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must run before you run this report.
- The stoplights, mission criticality, assessment owner, assessment due date, and assessment date are based on the most recent assessment so at least one assessment must be completed on the application.
- The application must have the Number of Users field populated to display the number of users.

**Report Properties:**

| Property | Value |
|---|---|
| Name | Application Assessment Analysis |
| Resource ID | `APM_APP_AssessmentAnalysis` |
| Description | Application Management (APM) |
| Folder | `CA PPM/Reports/Application Management/Application Assessment Analysis` |
| Path | `/ca_ppm/reports/application_management/APM_APP_AssessmentAnalysis` |
| Data Source | CA PPM Data Warehouse Bean Data Source |

**Parameter Options:**

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Application OBS Type | `applicationOBSTypeKey_1` | Single-select query | No | - |
| Application OBS Unit | `applicationOBSUnitKey_1` | Single-select query | No | - |
| Application Manager | `applicationManagerKey_1` | Multiple-select query | No | - |
| Application | `applicationKey_1` | Multiple-select query | No | - |
| Application Status | `applicationStatusKey_1` | Multiple-select query | No | - |
| Application Source | `applicationSourceKey_1` | Multiple-select query | No | - |
| Installation Type | `installationTypeKey_1` | Multiple-select query | No | - |
| Software Category | `softwareCategoryKey_1` | Single-select query | No | - |
| Software Sub-Category | `softwareSubCategoryKey_1` | Single-select query | No | - |
| Mission Criticality | `missionCriticalityKey_1` | Multiple-select query | No | - |
| Assessment Owner | `assessmentOwnerKey` | Multiple-select query | No | - |
| Include Inactive Applications | `includeInactiveApplications` | Boolean | No | Unchecked |
| Database Schema | `ppmDBSchema` | Hidden | Yes | Passed using Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed using Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed using Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed using Classic PPM |

**Parameter Explanations:**
- The **Application OBS Type** is a cascading parameter and determines which units are listed in the Application OBS Unit parameter. This parameter is not used to directly control which applications display in the report.
- The **Application OBS Unit** parameter displays values that are based upon the Application OBS Type you select. When you select an OBS unit in this parameter, the report displays the applications that are attached to that OBS unit and the descendants of the unit.

**Report Fields and Calculations:**

The report chart displays a heat map that shows the mission criticality on the X axis and the risk score range of high, medium, and low on the Y axis. Each segment in the heat map is colored to represent attention that is needed and the metric that is shown in the graph is the application count.

The report listing displays the application name, application source, installation type, mission criticality, value score, technical score, risk score, assessment owner, assessment due date, assessment date, and number of users. This listing is grouped by attention that is required.

The report contains the following calculations:
- **Attention Required**: Determined as follows:
- Green = No Attention Required (Risk Score < 34 and Tactical)
- Yellow = Minimal Attention Required (Risk Score < 34 and Mission Essential or Mission Critical)
- Orange = Attention Required (Risk Score >= 34 and < 68)
- Red = Immediate Attention Required (Risk Score >= 68)
- **Value Score**: Aggregated calculated field on the application, derived from the latest assessment with status Final.
- Red = Low (< 34), Yellow = Medium (>= 34 and < 68), Green = High (>= 68), White = No value score
- **Technical Score**: Aggregated calculated field, derived from the latest assessment with status Final.
- Red = Low (< 34), Yellow = Medium (>= 34 and < 68), Green = High (>= 68), White = No technical score
- **Risk Score**: Aggregated calculated field, derived from the latest assessment with status Final.
- Green = Low (< 34), Yellow = Medium (>= 34 and < 68), Red = High (>= 68), White = No risk score

**Report Security**: The application view rights determine the security for this report.

#### KPIs by Application

The KPIs by Application report lists applications that are grouped by either manager, software category, or mission criticality. The report displays the Key Performance Indicators of value score, technical score, and risk score with the number of users and the annual planned cost for each application.

**Report Prerequisites:**
- The report is grouped by either manager, software category, or mission criticality on the application. For the groupings to be relevant, the applications must have these fields populated.
- The stoplights are based on the most recent assessment so at least one assessment must be completed on the application.
- The application must have the Number of Users field populated to display the number of users.
- The application must have one of the following defined to calculate annual planned cost:
- A cost plan of record under financial planning that includes amounts for the current fiscal year.
- The financial summary Planned Cost field populated for the application. This amount is prorated for the current fiscal year.

**Report Properties:**

| Property | Value |
|---|---|
| Name | KPIs by Application |
| Resource ID | `APM_APP_KPIsByApplication` |
| Description | Application Management (APM) |
| Folder | `CA PPM/Reports/Application Management/KPIs by Application` |
| Path | `/ca_ppm/reports/application_management/APM_APP_KPIsByApplication` |
| Data Source | CA PPM Bean Data Source |

**Report Parameter Options:**

| Prompt Text | Parameter Name | Type | Mandatory | Default Value |
|---|---|---|---|---|
| Application OBS Type | `applicationOBSTypeKey_1` | Single-select query | No | - |
| Application OBS Unit | `applicationOBSUnitKey_1` | Single-select query | No | - |
| Application Manager | `applicationManagerKey_1` | Multiple-select query | No | - |
| Application | `applicationKey_1` | Multiple-select query | No | - |
| Application Status | `applicationStatusKey_1` | Multiple-select query | No | - |
| Application Source | `applicationSourceKey_1` | Multiple-select query | No | - |
| Installation Type | `installationTypeKey_1` | Multiple-select query | No | - |
| Software Category | `softwareCategoryKey_1` | Single-select query | No | - |
| Software Sub-Category | `softwareSubCategoryKey_1` | Single-select query | No | - |
| Mission Criticality | `missionCriticalityKey_1` | Multiple-select query | No | - |
| Group By | `groupSwCategoryMissionManager` | Not applicable | Yes | Software Category |
| Include Inactive Applications | `includeInactiveApplications` | Boolean | No | Unchecked |
| Database Schema | `ppmDBSchema` | Hidden | Yes | Passed using Classic PPM |
| UI Theme | `ppmUserUITheme` | Hidden | Yes | Passed using Classic PPM |
| Language | `ppmUserLanguage` | Hidden | Yes | Passed using Classic PPM |
| User ID | `ppmUser` | Hidden | Yes | Passed using Classic PPM |

**Parameter Lookup Values:**

The following lookup values are available for the **Group By** parameter:
- Software Category
- Mission Criticality
- Application Manager
