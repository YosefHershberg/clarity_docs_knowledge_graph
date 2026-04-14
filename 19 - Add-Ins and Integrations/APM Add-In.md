---
title: CA Application Portfolio Management Add-In
tags:
  - admin
aliases:
  - APM Add-In
canonical: true
audience: admin, dev
domain: integrations
---
# CA Application Portfolio Management Add-In

> [!TIP]
> Like other add-ins, CA APM is delivered as part of your Classic PPM solution. Your organization can decide whether to install and use this optional functionality.

Classic PPM Application and Portfolio Management capabilities allow organizations to track and analyze their application portfolio. The **CA Application Portfolio Management (CA APM) add-in** helps you manage your application portfolios.

**Why application portfolio management matters:**

- Organizations tend to accumulate applications due to mergers and acquisitions or other purchasing activity; over time, some may no longer deliver value
- Certain applications might be redundant — multiple applications delivering the same capability
- Organizations typically have a large percentage of IT spend aligned to supporting applications
- Organizations have limited budgets and face constraints when funding innovation

**Key questions CA APM helps answer:**

- Which applications can we retire to save money?
- Which applications can we add to the portfolio?
- How can we better manage the risks in our application portfolio?
- How are our projects performing on key applications?

**CA APM helps you rank applications on:**

- Mission criticality
- Risk
- Business value
- Technical value

**Included reports:**

- **Application Assessment Analysis** — compares mission criticality with risk; identifies high-risk critical applications
- **Application KPI Report** — similar to the KPIs by Project Type report

## APM Add-In Release Notes

The APM add-in is based on Classic PPM Release 15.1 and applies to higher 15.x releases.

**What's New:** Reports and filter options in Advanced Reporting content are modified to use the new security model in the Data Warehouse.

**APM Certified and Supported Versions:**

| Clarity Version | Supported |
|---|---|
| 16.x | Yes |
| 15.x | Yes |
| 14.4 | Yes |
| 14.3 | Yes |

### Attributes and the Data Warehouse

Most attributes installed by the APM add-in have the **Include in the Data Warehouse** field selected. APM add-in attribute IDs are renamed when their respective columns are created in the Data Warehouse.

### View Protection

If you previously configured views in Classic PPM Studio or installed another add-in that configured views, those configurations are not overwritten when you install CA APM. You can decide whether to make manual changes to your existing configurations or apply the new content.

**Views included with this add-in:**

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

## Install the APM Add-In

### Prerequisites

- The required version of the **PMO Accelerator** is a prerequisite for the APM add-in. Upgrade the PMO Accelerator before installing the APM add-in.
- (On-Premise only) Verify that you have already installed and configured the **Data Warehouse**. If the Data Warehouse schema is unavailable, installation of the add-in is unsuccessful.

> [!WARNING]
> Back up the existing Classic PPM installation directory and database before installing the add-in. A backup allows you to restore the application to the prior version if necessary. After you install the add-in, you cannot uninstall it.

### (On-Premise only) Install the APM Add-In

1. **Stop the services** — stop the Classic PPM application (app) and background (bg) services from Classic PPM System Administration (CSA) before installing the add-in

2. **Execute the install script:**
   - Open a command prompt and navigate to the Classic PPM runtime `bin` directory
   - Enter the following command:
     ```
     admin content apm
     ```
   - The installation process begins; information is captured and stored in the `admin.log` file saved in the `logs` directory; output files are stored in the `logs/content/xog/apm` directory
   - Review the installation process output and logs after installation completes

3. **Start the Services** — start the Classic PPM Application (app) and Background (bg) services from CSA

> [!TIP]
> To learn more about stopping and starting services in CSA, see CSA: Clarity System Administration.

### Install the APM Add-in Content Items

Install the APM add-in items after you install the APM add-in for the first time.

1. Log in to **Classic PPM**
2. Navigate to **Administration > Studio > Content Add-ins**
3. Click the **List icon** for the Application Portfolio Management add-in (ID: `apm`)
4. Review the content items and select those with **Upgrade Ready** status:
   - Application Object Filter View
   - Application Object List View
   - Application Object Property Views

   **Status values:**
   - **Not Installed** — new items or items that produced an error during install
   - **Upgrade Ready** — items from a previous version that contain updates
   - **Installed** — currently installed items

5. Select the items you want to install and click **Install**
6. Click **Yes** to update or install the items

> [!WARNING]
> Consider any configurations you have made to items before installing. Installing modified items overwrites your configurations. If a user previously changed an item listed on the confirmation page, publish the item before displaying the update to users.

### Import the Jaspersoft Advanced Reporting Content for APM

You can import the Jaspersoft Advanced Reporting content for APM. This process imports reports, input controls, localization bundles, images, and data sources.

> [!WARNING]
> Before importing, verify that:
> - The organization name, organization ID, and the user are specified in the CSA Reporting subtab
> - You have upgraded to the required PMO Accelerator for your release
> - PMO Accelerator Jaspersoft Advanced Reporting content is imported before importing APM Jaspersoft Advanced Reporting content

**The import creates:**

- Application Management subfolder under the Reports folder in the organization repository
- Application Management reports
- Entry for the Jaspersoft content in the Install History table (`CMN_INSTALL_HISTORY`)

**(On-Premise only) Steps:**

1. Open a command prompt and navigate to the Classic PPM runtime `bin` directory
2. Enter the following command:
   ```
   admin content-jaspersoft apm -userName superuser -password <password>
   ```
3. Review the `admin.log` for important information after the import completes
4. Navigate to **Administration > Studio > Content Add-ins**
5. Click the Application Portfolio Management add-in (ID: `apm`)
6. Review the **Jaspersoft Content Installed Date** in the Versions section

## APM Add-In Attributes and the Data Warehouse

Most attributes for the APM add-in objects have their **Include in the Data Warehouse** field selected.

> [!WARNING]
> Do not unselect the **Include in the Data Warehouse** field because reports depend upon the attributes.

### Application Object Attributes

| Attribute | Attribute ID | DWH Enabled | Table Column | Lookup Table | Notes |
|---|---|---|---|---|---|
| Acquisition Date | `apm_acquisition_date` | Yes | `dwh_inv_application.apm_acquisition_date` | Not applicable | None |
| Acronym | `apm_acronym` | Yes | `dwh_inv_application.apm_acronym` | Not applicable | None |
| Application Source | `apm_app_source` | Yes | `dwh_inv_application.apm_app_source_key` | `dwh_lkp_apm_app_source` | None |
| Application Vendor | `apm_app_vendor` | Yes | `dwh_inv_application.apm_app_vendor_key` | `dwh_lkp_apm_app_vendor` | None |
| Client Type | `apm_client_type` | Yes | `dwh_inv_application.apm_client_type_key` | `dwh_lkp_apm_client_type` | Created without lookup values; customers can add their own |
| Contract Due Date | `apm_contr_due_date` | Yes | `dwh_inv_application.apm_contr_due_date` | Not applicable | None |
| Installation Type | `apm_install_type` | Yes | `dwh_inv_application.apm_install_type_key` | `dwh_lkp_apm_install_type` | None |
| Last Assessment | `apm_last_assessment` | No | Not applicable | Not applicable | Currently not used |
| Mission Critical Level | `apm_m_critical_level` | Yes | `dwh_inv_application.apm_m_critical_level` | Not applicable | Aggregated calculated attribute based on the application assessment subobject |
| Number of Users | `apm_no_of_users` | Yes | `dwh_inv_application.apm_no_of_users` | Not applicable | None |
| Official Application Name | `apm_official_app_nme` | Yes | `dwh_inv_application.apm_official_app_nme` | Not applicable | None |
| Retirement Strategy | `apm_retire_strategy` | Yes | `dwh_inv_application.apm_retire_strategy_key` | `dwh_lkp_apm_retire_strategy` | None |
| Risk Score | `apm_rsk_assess_score` | Yes | `dwh_inv_application.apm_rsk_assess_score` | Not applicable | Aggregated calculated attribute based on the application assessment subobject |
| Security Level | `apm_security_level` | Yes | `dwh_inv_application.apm_security_level_key` | `dwh_lkp_apm_security_level` | None |
| Software Category | `apm_sw_category` | Yes | `dwh_inv_application.apm_sw_category_key` | `dwh_lkp_apm_sw_category` | None |
| Software Sub-Category | `apm_sw_subcategory` | Yes | `dwh_inv_application.apm_sw_subcategory_key` | `dwh_lkp_apm_sw_subcategory` | None |
| Tagged for Retirement | `apm_tag_for_retire` | Yes | `dwh_inv_application.apm_tag_for_retire` | Not applicable | None |
| Target Retirement Date | `apm_trgt_retire_date` | Yes | `dwh_inv_application.apm_trgt_retire_date` | Not applicable | None |
| Technical Score | `apm_tec_assess_score` | Yes | `dwh_inv_application.apm_tec_assess_score` | Not applicable | Aggregated calculated attribute based on the application assessment subobject |
| Unused Licenses | `apm_unused_licenses` | Yes | `dwh_inv_application.apm_unused_licenses` | Not applicable | None |
| Value Score | `apm_val_assess_score` | Yes | `dwh_inv_application.apm_val_assess_score` | Not applicable | Aggregated calculated attribute based on the application assessment subobject |

### Application Assessment Object Attributes

| Attribute | Attribute ID | DWH Enabled | Table Column | Lookup Table | Notes |
|---|---|---|---|---|---|
| Assessment Date | `assessment_date` | Yes | `dwh_inv_apm_app_assess.assessment_date` | Not applicable | None |
| Assessment Due Date | `assessment_due_date` | Yes | `dwh_inv_apm_app_assess.assessment_due_date` | Not applicable | None |
| Assessment Owner | `assessment_owner` | Yes | `dwh_inv_apm_app_assess.assessment_owner_key` | `dwh_res_resource` | None |
| Assessment Status | `assessment_status` | Yes | `dwh_inv_apm_app_assess.apm_assess_status_key` | `dwh_lkp_apm_assess_status` | None |
| Comments | `assessment_comments` | Yes | `dwh_inv_apm_app_assess.assessment_comments` | Not applicable | None |
| Competitive Advantage | `val_competitive_adv` | Yes | `dwh_inv_apm_app_assess.apm_competitive_adv_key` | `dwh_lkp_apm_competitive_adv` | None |
| Created By | `created_by` | No | Not applicable | Not applicable | None |
| Created Date | `created_date` | Yes | `dwh_inv_apm_app_assess.clarity_created_date` | Not applicable | None |
| Development Languages | `tech_develop_lang` | Yes | `dwh_inv_apm_app_assess.apm_develop_lang_key` | `dwh_lkp_apm_develop_lang` | None |
| Effectiveness | `val_effectiveness` | Yes | `dwh_inv_apm_app_assess.apm_effectiveness_key` | `dwh_lkp_apm_effectiveness` | None |
| Enterprise Architecture | `tech_enterprise_arch` | Yes | `dwh_inv_apm_app_assess.apm_enterprise_arch_key` | `dwh_lkp_apm_enterprise_arch` | None |
| ID | `code` | Yes | `dwh_inv_apm_app_assess.assessment_id` | Not applicable | None |
| Integration Options | `tech_integration_opt` | Yes | `dwh_inv_apm_app_assess.apm_integration_opt_key` | `dwh_lkp_apm_integration_opt` | None |
| IT Security | `tech_it_security` | Yes | `dwh_inv_apm_app_assess.apm_tec_it_security_key` | `dwh_lkp_apm_tec_it_security` | None |
| Last Updated Date | `last_updated_date` | Yes | `dwh_inv_apm_app_assess.clarity_updated_date` | Not applicable | None |
| Mission Critical Level | `mc_critical_level` | Yes | `dwh_inv_apm_app_assess.apm_critical_level_key` | `dwh_lkp_apm_critical_level` | None |
| Name | `name` | Yes | `dwh_inv_apm_app_assess.assessment_name` | Not applicable | None |
| Organizational Efficiencies | `val_org_efficiencies` | Yes | `dwh_inv_apm_app_assess.apm_org_efficiency_key` | `dwh_lkp_apm_org_efficiency` | None |
| Organizational Value Chain | `val_org_value_chain` | Yes | `dwh_inv_apm_app_assess.apm_org_value_chain_key` | `dwh_lkp_apm_org_value_chain` | None |
| Partition | `partition_code` | No | Not applicable | Not applicable | None |
| Risk Score | `rsk_assess_score` | Yes | `dwh_inv_apm_app_assess.rsk_assess_score` | Not applicable | Calculated attribute based on risk questions in this assessment subobject |
| Technical Score | `tech_assess_score` | Yes | `dwh_inv_apm_app_assess.tech_assess_score` | Not applicable | Calculated attribute based on technical questions in this assessment subobject |
| Technical Skills Available | `rsk_tech_skill_avail` | Yes | `dwh_inv_apm_app_assess.apm_tec_skill_avail_key` | `dwh_lkp_apm_tec_skill_avail` | None |
| Updated By | `updated_by` | No | Not applicable | Not applicable | None |
| Value Score | `val_assess_score` | Yes | `dwh_inv_apm_app_assess.val_assess_score` | Not applicable | Calculated attribute based on value questions in this assessment subobject |
| Vendor Support | `rsk_vendor_support` | Yes | `dwh_inv_apm_app_assess.apm_vendor_support_key` | `dwh_lkp_apm_vendor_support` | None |

### Application Certification Object Attributes

| Attribute | Attribute ID | DWH Enabled | Table Column | Lookup Table | Notes |
|---|---|---|---|---|---|
| Attachment | `cert_attachment` | No | Not applicable | Not applicable | Attachment data types are not available in the Data Warehouse |
| Certification Date | `cert_date` | Yes | `dwh_inv_apm_app_cert.cert_date` | Not applicable | None |
| Certification Required | `is_cert_required` | Yes | `dwh_inv_apm_app_cert.is_cert_required` | Not applicable | None |
| Certification Target Date | `cert_target_date` | Yes | `dwh_inv_apm_app_cert.cert_target_date` | Not applicable | None |
| Certification Type | `cert_type` | Yes | `dwh_inv_apm_app_cert.apm_cert_type_key` | `dwh_lkp_apm_cert_type` | None |
| Certification Valid Until | `cert_valid_until` | Yes | `dwh_inv_apm_app_cert.cert_valid_until` | Not applicable | None |
| Certified | `is_certified` | Yes | `dwh_inv_apm_app_cert.is_certified` | Not applicable | None |
| Comments | `cert_comments` | Yes | `dwh_inv_apm_app_cert.cert_comments` | Not applicable | None |
| Created By | `created_by` | No | Not applicable | Not applicable | None |
| Created Date | `created_date` | Yes | `dwh_inv_apm_app_cert.clarity_created_date` | Not applicable | None |
| ID | `Code` | Yes | `dwh_inv_apm_app_cert.certification_id` | Not applicable | None |
| Last Updated Date | `last_updated_date` | Yes | `dwh_inv_apm_app_cert.clarity_updated_date` | Not applicable | None |
| Name | `name` | Yes | `dwh_inv_apm_app_cert.certification_name` | Not applicable | None |
| Partition | `partition_code` | No | Not applicable | Not applicable | None |
| Updated By | `updated_by` | No | Not applicable | Not applicable | None |

## APM Application Lifecycle

APM allows you to manage applications throughout the application lifecycle using an application methodology.

### Application Lifecycle Stages

1. **Proposal** — application requirements are formally submitted to vendors
2. **Bid-Vendor Selection** — an organization solicits bids and selects an application vendor
3. **Configure** — a new application is configured to meet organizational needs
4. **Deploy** — a new application is made available to users in a production environment
5. **Maintain** — an existing application is maintained to meet requirements and continually add value
6. **Retire** — an existing application is no longer available for use

### Application Workflow

1. Create an application in Classic PPM under **Home > Portfolio Management > Applications**
2. Add planned costs using either of the following methods:
   - Create a cost plan under **Financial Plans > Cost Plans**
   - Create a financial summary plan under application **Properties > Financial Summary**
3. Add any certifications under application **Properties > Certifications**
4. Create a new assessment under application **Properties > Assessments** with a status of **Draft**; select a mission critical level and answer questions pertaining to application value, risk, and technical fit
5. Use the **Assessment Review Dashboard** to manage the assessment process
6. After the assessment is complete, change the assessment status to **Final**; assessment scores roll up to the application level
7. Review and analyze the application portfolio using the **Application Dashboard** and APM reports
8. Mark applications as potential retirement candidates:
   - Select the **Tagged for Retirement** checkbox
   - Enter a **Target Retirement Date**
9. Review applications tagged for retirement to determine if they can be retired and to select a **Retirement Strategy** and target date
10. Continue to manage active applications throughout the lifecycle and periodically reassess

### Retire an Application

**Application retirement strategies:**

- **Decommission** — complete removal of the application within an organization
- **Replace** — replace the existing application with a new application
- **Consolidate** — remove an obsolete application and augment a more relevant application to cover functionality gaps

## APM Application List View and Properties

The APM add-in adds several new fields to the application.

**Application List View — new fields displayed:**

- Application Source, Installation Type, Mission Critical Level, Risk Score
- Software Category, Software Sub-Category, Technical Score, Value Score

**Application List View — new filters:**

- Application Source, Installation Type, Software Category, Software Sub-Category

**Application Properties View — new APM fields:**

- Acquisition Date, Acronym, Application Source, Application Vendor, Client Type
- Contract Due Date, Installation Type, Last Assessment, Mission Critical Level
- Number of Users, Official Application Name, Retirement Strategy, Risk Score
- Security Level, Software Category, Software Sub-Category, Tagged for Retirement
- Target Retirement Date, Technical Score, Unused Licenses, Value Score

**PMO Accelerator fields also displayed:**

- Portfolio Category 1, Portfolio Category 2, Portfolio Category 3, Portfolio Category 4

**Out-of-the-box field also displayed:**

- Number of Licenses

## APM Application Assessments

Periodically (for example, on an annual basis), application portfolio managers create a new assessment. Assessments are initially created with a status of **Draft** and later updated to **Final** after the assessment is complete.

**Scoring methodology:**

- **Mission Critical Level** — assessed as Tactical, Mission Essential, or Mission Critical
- **Value Score** — low score = little value; high score = most value to the organization
- **Technical Score** — low score = weak technically; high score = stronger technical backbone
- **Risk Score** — high score = most risk; low score = least risk to the organization

**To work with assessments:**

1. Navigate to **Home > Portfolio Management > Applications**
2. Click an application
3. Click **Properties > Assessments** (click an existing assessment or click **New** to create one)

**Assessment subobject fields:**

- Assessment Date, Assessment Due Date, Assessment ID, Assessment Name, Comments
- Competitive Advantage, Created By, Created Date, Development Languages, Effectiveness
- Enterprise Architecture, Integration Options, IT Security, Last Updated Date
- Mission Critical Level, Organizational Efficiencies, Organizational Value Chain
- Owner, Partition, Risk Score, Status, Technical Score, Technical Skills Available
- Updated By, Value Score, Vendor Support

## APM Application Certifications

**To work with certifications:**

1. Navigate to **Home > Portfolio Management > Applications**
2. Click an application
3. Click **Properties > Certifications** (click an existing certification or click **New** to create one)

**Certification subobject fields:**

- Attachment, Certification Date, Certification ID, Certification Name, Certification Required
- Certification Target Date, Certification Type, Certification Valid Until, Certified, Comments
- Created By, Created Date, Last Updated Date, Partition, Updated By

## APM Application Dashboard

The **Application Dashboard** consists of eight tabs that help users study and manage their application portfolio throughout the application lifecycle.

To access: **Home > Dashboards > Application Dashboard**

**Dashboard-level page filters (apply to all tabs):**

- **OBS** — filters by OBS hierarchy
- **Application Source** — filters by source of the application
- **Installation Type** — filters by type of installation
- **Application Vendor** — filters by vendor
- **Software Category** — filters by Software Category
- **Software Sub-Category** — filters by Software Sub-Category (dependent on Software Category filter)

> [!NOTE]
> All portlets in this dashboard are pre-filtered to show only the applications to which you have access.

### Categorization Tab

Shows how the application portfolio is distributed across software categories and subcategories by annual planned cost and number of users.

**Portlets:**

- **Annual Planned Cost by Application Categorization** — three-level tree map graph: category → subcategory → application; rectangle size = annual planned cost; costs are from the application Cost Plan of Record for the current fiscal year
- **Number of Users by Application Categorization** — three-level tree map graph: category → subcategory → application; rectangle size = number of users

### Value Quadrant Tab

Shows how the application portfolio is distributed across Technical Score and Value Score quadrants.

**Portlets:**

- **Application Value Quadrant by Annual Planned Cost** — bubble graph plotting each application into one of four quadrants based on value and technical scores; bubble size = annual planned cost; X-axis = value score; Y-axis = technical score
- **Good Technical/Poor Value Score** — applications with technical score ≥ 50 and value score < 50 (upper left quadrant)
- **Good Fit** — applications with technical score ≥ 50 and value score ≥ 50 (upper right quadrant)
- **Poor Fit** — applications with technical score < 50 and value score < 50 (lower left quadrant)
- **Poor Technical/Good Value Score** — applications with technical score < 50 and value score ≥ 50 (lower right quadrant)

All grid portlets can be configured to add: Annual Planned Cost, Application ID, Application Vendor, Number of Users, Quadrant, Risk Score, Software Category, Software Sub-Category.

### Value Map Tab

Shows the application strategy based on average value score and average technical score by installation type and application source.

**Portlets:**

- **Value Score by Installation Type and Application Source** — heat map graph; heat map color = average value score; drill down to the Value Map Drill Down portlet
- **Technical Score by Installation Type and Application Source** — heat map graph; heat map color = average technical score; drill down to the Value Map Drill Down portlet
- **Value Map Drill Down** — grid portlet with application detail and scores (Value Score, Technical Score, Number of Users, Annual Planned Cost, averages, and totals)

### Mission Criticality Tab

Shows key application metrics for the application portfolio by mission criticality.

**Portlets:**

- **Annual Planned Cost by Mission Criticality** — pie graph showing annual planned cost by mission criticality; drill down to the Mission Criticality Drill Down portlet
- **Application Count by Mission Criticality** — pie graph showing count of applications by mission criticality; drill down to the Mission Criticality Drill Down portlet
- **Number of Users by Mission Criticality and Application Source** — three-level tree map graph; drill down from mission critical level → application source → individual applications
- **Mission Criticality Drill Down** — grid portlet with application detail and metrics (Value Score, Technical Score, Risk Score, Number of Users, Annual Planned Cost, totals)

### Annual Cost Tab

Shows annual planned cost by application source and installation type.

**Portlets:**

- **Annual Planned Cost by Application Source** — donut graph; drill down to Annual Cost Drill Down
- **Annual Planned Cost by Installation Type** — donut graph; drill down to Annual Cost Drill Down
- **Annual Planned Cost by Installation Type and Application Source** — heat map graph comparing SaaS vs. On Premise and purchased vs. in-house/open source; heat map color = annual planned cost
- **Annual Cost Drill Down** — grid portlet with application detail and metrics (Value Score, Technical Score, Risk Score, Number of Users, Annual Planned Cost, totals)

### Scorecard Tab

Shows the scoring and key metrics for each application. Click an application to navigate to the application properties page.

**Metrics displayed:**

- Value Score, Technical Score, Risk Score, Number of Users, Number of Licenses, Unused Licenses

### Lifecycle Tab

Shows the application count and annual planned cost for each stage in the lifecycle.

**Portlets:**

- **Application Lifecycle** — heat map graph showing application count by lifecycle stage
- **Application Lifecycle by Value Score** — heat map graph showing annual planned cost by lifecycle stage and value score
- **Lifecycle Drill Down** — grid portlet with application detail and metrics (Value Score, Technical Score, Risk Score, Number of Users, Annual Planned Cost, totals)

### Retirement Tab

Shows applications that have been tagged for retirement.

**Portlets:**

- **Annual Planned Cost by Retirement Strategy** — donut graph showing annual planned cost by retirement strategy
- **Application Count by Retirement Strategy** — donut graph showing count of applications by retirement strategy
- **Application Retirement Candidates** — grid portlet showing applications with the **Tagged for Retirement** attribute checked; includes Value Score, Technical Score, Risk Score, Number of Users, Annual Planned Cost

Configurable additional fields: Application ID, Application Vendor, Business Alignment, Software Sub-Category, Stage, Stage Count, Stage Number.

## APM Assessment Review Page and Portlets

The **Assessment Review** dashboard helps users view and manage their application assessments throughout the assessment cycle.

To access: **Home > Dashboards > Assessment Review**

**Dashboard-level page filters:**

- OBS, Application Source, Installation Type, Application, Assessment Name, Assessment Owner, Assessment Due Date

> [!NOTE]
> All portlets are pre-filtered to show only those applications to which users have access.

### Assessment Listing Tab

Shows a listing of all application assessments, regardless of status. Users can view how assessment scores change over time or review historic assessment data across several applications.

**Metrics included:**

- Value Score, Technical Score, Risk Score (all from the application's assessment record)

**Configurable additional fields:** Application ID, Application Manager, Application Source, Application Vendor, Assessment Comments, Assessment ID, Installation Type, Software Category, Software Sub-Category, Stage Count, Stage Number.

### Late and Missing Assessments Tab

**Late Assessments Portlet** — displays assessments where Status is not Final AND Due Date is earlier than the current date. Includes a Days Late metric (Current Date - Assessment Due Date).

**Configurable additional fields:** Application ID, Application Manager Email, Application Source, Application Vendor, Assessment Date, Assessment ID, Assessment Owner Email, Installation Type, Software Category, Software Sub-Category.

**Missing Assessments for Current Year Portlet** — displays applications that do not have an assessment in the current fiscal year. The application must have financial properties populated (must link to a fiscal calendar).

**Filters available:** OBS, Application Source, Installation Type, Application, Application Vendor, Software Category.

**Configurable additional fields:** Application ID, Application Manager Email.

## APM Application Reports

Two Application Reports are available:

### Application Assessment Analysis

Shows applications by mission criticality and risk score, categorizing applications based on the level of attention required.

**Prerequisites:**

- The **Load Data Warehouse** and **Load Data Warehouse Access Rights** jobs must run before running this report
- At least one assessment must be completed on the application with the greatest assessment date
- The application must have the **Number of Users** field populated

**Report Properties:**

| Property | Value |
|---|---|
| Name | Application Assessment Analysis |
| Resource ID | `APM_APP_AssessmentAnalysis` |
| Folder | CA PPM/Reports/Application Management/Application Assessment Analysis |
| Data Source | CA PPM Data Warehouse Bean Data Source |

**Report calculations:**

- **Attention Required:** Green = No Attention (Risk < 34 and Tactical); Yellow = Minimal Attention (Risk < 34 and Mission Essential/Critical); Orange = Attention Required (Risk ≥ 34 and < 68); Red = Immediate Attention (Risk ≥ 68)
- **Value Score stoplight:** Red = Low (< 34); Yellow = Medium (34–67); Green = High (≥ 68); White = No score
- **Technical Score stoplight:** Red = Low (< 34); Yellow = Medium (34–67); Green = High (≥ 68); White = No score
- **Risk Score stoplight:** Green = Low (< 34); Yellow = Medium (34–67); Red = High (≥ 68); White = No score

### KPIs by Application

Lists applications grouped by manager, software category, or mission criticality, displaying Key Performance Indicators (value score, technical score, risk score) with number of users and annual planned cost.

**Prerequisites:**

- Applications must have grouping fields populated; applications without values display in a section named "Undefined"
- At least one assessment must be completed for stoplights to populate
- Application must have **Number of Users** field populated
- Application must have either a Cost Plan of Record or Financial Summary Planned Cost populated for the current fiscal year

**Report Properties:**

| Property | Value |
|---|---|
| Name | KPIs by Application |
| Resource ID | `APM_APP_KPIsByApplication` |
| Folder | CA PPM/Reports/Application Management/KPIs by Application |
| Data Source | CA PPM Bean Data Source |

## Related
- [[_MOC Integrations]]

%%Source: p4559-4601%%
