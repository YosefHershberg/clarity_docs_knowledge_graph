---
title: Rally Synchronization
tags:
  - admin
  - howto
aliases:
  - Rally Sync
  - Rally OKR Sync
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# Rally Synchronization

## Sync Investments Between Clarity and Rally

### Select Clarity Investments to Sync with Rally

Now that you have set up the integration and defined the relevant mappings, you can select which specific Clarity investments will sync with Rally. You can select specific Clarity projects, custom investments, and ideas to sync with Rally.

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant investment page and select the grid layout.
3. Use the column picker to add the Rally Object and Integration Mapping attributes to the grid.
4. Select the relevant integration mapping to associate with the investment.
5. Execute the Synchronize Mapped Information Job.

After you run the Synchronized Mapped Information job successfully, the Rally Object field will be auto-populated.

### Synchronize OKR Interim Targets and Actuals

In Clarity 16.1.1 and higher, you can synchronize interim Actual Values and Target Values between Clarity and Rally:
- Clarity can send interim Key Results Actuals to Rally (Unique Dates with a Value associated with each date).
- Rally can send interim Key Results Actuals and Targets to Clarity.

> [!note]
> Key points:
> - Interim Actual Values support sync directions: Clarity to Rally, Rally to Clarity, Both.
> - Interim Target Values support: Rally to Clarity only.
> - Clarity's interim Key Results Actuals and Target objects can only serve a single master object.
> - Actual Objects, Target Objects, and Fields do not require a mapping configuration.

### Synchronize Individual Investment On Demand

In Clarity 16.1.0 and higher, you can sync individual investments on demand with a click of an Action button. An end user action can be configured from a blueprint to sync a single Clarity Investment and its associations with mapped Rally Portfolio Items.

- The Blueprint Action ties in with a configured process defined in Studio.
- The defined process ties to an investment type (e.g., Product Line).
- The defined process also ties in with the Synchronize Mapped Information job.

> [!note]
> Key points:
> - Clarity end users can sync individual investments with Rally on demand.
> - Both sync directions (Clarity to Rally and Rally to Clarity) are supported in the 16.1.0 release.
> - Both sync directions are supported if an Object mapping includes the lowest level of the Rally Portfolio Item hierarchy (e.g., Feature).
> - Dependencies: A Classic process configured to execute the Synchronize Mapped Information job; a Blueprint Action configured for a specific Investment type.

### Select Rally Investments to Sync with Clarity

Follow these steps:

1. Log into Rally.
2. Navigate to the relevant Rally Portfolio Item.
3. Ensure you select the relevant mapping in the Integration Mappings drop-down list.
4. Ensure all fields specified during Field Mapping are populated.
5. Execute the Synchronize Mapped Information Job.
6. Open the relevant investments area in Clarity to view the newly created investment. The Source field will be set to Rally and the Rally Object ID field will be automatically populated.

> [!important]
> Key points:
> - Depending upon the configured Direction (Rally to Clarity, Clarity to Rally, or Both), the Synchronized Mapped Information job will overwrite mapped Clarity or Rally fields every time it runs.
> - All mandatory fields required to create Clarity investments should be included in field mappings.
> - The Lookup Mapping object enhancement to support mapping Clarity lookup values with Rally custom lookup values is limited to the Clarity to Rally sync direction.

## Run the Synchronize Mapped Information Job

### Job Behavior by Direction and Sync Option

The Synchronize Mapped Information job in Classic PPM enables administrators to synchronize the mapped information between Clarity and Rally. Depending upon the configured direction and Sync Option, the job performs the following operations:

| Direction | Sync Option | Behavior |
|-----------|-------------|----------|
| Both | Update | Synchronizes data for mapped objects and fields when data changes are detected in either system; populates the respective staging tables |
| Clarity to Rally | Create | Creates and populates mapped Rally objects and fields; populates the To Rally Staging Table; populates mapped Clarity Investments with their Rally Object ID |
| Clarity to Rally | Create and Update | Creates and populates mapped Rally objects and fields; populates To Rally Staging Table; updates Rally Objects and Fields tables in Clarity. In subsequent runs: updates mapped Rally objects and fields, populates To Rally Staging Tables, updates Rally Objects and Fields tables |
| Clarity to Rally | Update | Updates mapped Rally objects and fields; populates the To Rally Staging Tables; updates Rally Objects and Fields tables in Clarity |
| Rally to Clarity | Create | Creates mapped objects and fields in Clarity; populates Clarity Staging Tables; populates mapped Clarity Objects with their Rally Object ID and records Rally as source |
| Rally to Clarity | Create and Update | Creates mapped objects and fields in Clarity; populates Clarity Staging Tables; populates mapped Clarity Objects with their Rally Object ID and records Rally as source |
| Rally to Clarity | Update | Updates mapped Clarity objects and fields; populates the To Clarity staging table; updates Rally Objects and Fields tables in Clarity |

> [!note]
> Key points when mapped field values are updated in Clarity (no change in Rally): the sync job compares mapped field values in both systems, and if field values are not the same, updates the Clarity field value based on Rally.

> [!important]
> You can configure the following parameters for the Synchronize Mapped Information Job:
> - You can only process active Clarity Investments.
> - Rally's ready state is not considered when syncing or processing Rally Portfolio Items.
> - The **FULL LOAD** option synchronizes all records in Clarity and Rally associated with the integration mapping, regardless of when both systems were last updated. This is useful when both systems are completely out of sync. If FULL LOAD is cleared, the job runs as an Incremental synchronization and processes all records updated in the last 24 hours.
> - You can have immediate feedback that Portfolio Items are successfully created in Rally through Last Sync Status, Last Sync Message, and Rally Formatted ID fields.
> - In Clarity 16.1.1 and higher, Rally users have visibility that Portfolio Items or Objectives are originating from Clarity. The Rally Source field is automatically populated when Clarity's Synchronize Mapped Information job is executed.
> - In Clarity 16.3.3 and higher, the Rally Formatted ID attribute in Clarity becomes a clickable hyperlink after a successful sync. This allows users to jump directly from Clarity to the associated Rally Portfolio Item. Administrators must manually configure Field Mapping for the Rally Formatted ID to enable synchronization.

### Run the Job

Follow these steps:

1. Log into Clarity.
2. Click Home, Reports and Jobs, Jobs to open the Jobs tab.
3. Ensure you have selected Available Jobs in the drop-down list and open the Synchronize Mapped Information job.
4. Select the relevant Integration Mapping and click Submit to run the integration immediately.

After this job is successfully executed, Clarity automatically executes the Import Staging Tables job to move the data from the staging table to Clarity.

> [!note]
> You can schedule the Synchronize Mapped Information job to run at regular intervals. However, if you manually trigger the job, the scheduled jobs will not execute concurrently.
>
> The Clarity-Rally integration is enhanced to ensure the job executing in a non-production environment will not update and corrupt the Rally production environment. When you create an integration mapping, you can define the Internal URL for Clarity. When the job executes, Clarity compares the internal URL with the Clarity Server Information stored in the properties file and will not execute the job if it determines you are executing from an internal URL.

### Review the Staging Table in Clarity

Every integration mapping has associated To Rally and To Clarity staging tables in Clarity. The staging tables are only accessible to members of the PMO System Admin group. To provide manual access, assign the following access rights to a user or group:

- `<Integration Mapping Name>` - Create
- `<Integration Mapping Name>` - Delete All
- `<Integration Mapping Name>` - Edit All
- `<Integration Mapping Name>` - View All
- `<Integration Mapping Name>` - Xog Access

In this release, use the Staging table to:
- Review all data copied from Rally to Clarity and Clarity to Rally after the Synchronize Mapping Information job is successfully executed.
- Review error messages if data synchronization fails.

Follow these steps:

1. Log into Clarity.
2. Click Administration and select the Integrations tab to open the Integrations page.
3. Open the relevant integration mapping and navigate to the To Rally or To Clarity tabs.
4. Add the relevant columns to the grid layout to review the status of records:
   a. Job Run ID
   b. Status
   c. Clarity Object
   d. Clarity Object Name
   e. Rally Object
   f. Rally Object Name
   g. Error Message

> [!note]
> Key points:
> - The administrative user must log out and log in to view the Staging Tables.
> - The staging table data is removed from Clarity every time the Synchronize Mapped Information job is run.
> - After the Synchronize Mapped Information job is run, the user will be auto-granted access to the To Clarity and To Rally tables.
> - The Integration Mapping (view, edit, and delete) Global Access rights are automatically added to the PMO System Administrator group.

### Things to Remember

**Data Sync Flow for Rally Integration:**

When you run the Synchronize Mapped Information job:
- If the Rally Object field is empty prior to Clarity creating a new Rally portfolio item, the sync job updates the Rally Object field for the relevant investment. The next time you execute the job, Clarity updates the relevant fields depending on your field mapping.
- If the Rally Object field is not empty, Clarity directly updates the relevant fields based on the display mapping.

**Key Points to Consider:**

- Whenever a Clarity field is updated with the value from a mapped Rally field, the user who runs the Synchronized Mapped Information job is listed in the audit log.
- Customers can continue to use both the new Rally integration and the Rally Portfolio Item Hierarchy, Investments, or Timesheet integrations if warranted.
- If a customer has configured an "Agile" integration, there is no impact to that existing integration after the upgrade.
- The new jobs (Import Integration Mappings, Synchronize Mapped Information, Import Staging Tables) are set as incompatible with the old jobs (Synchronize Agile Central, Create Agile Central Investments) to prevent them from running simultaneously.
- If the Import Integration Mapping job is not run after creating a new Integration Mappings instance, the Clarity and Rally Objects will not be available in their respective pull-downs.
- If you create new custom attributes in either Clarity or Rally, the Import Integration Mapping job must be run to ensure they are available in the field mapping grid.

**Troubleshooting:**

- Rally Fields Not Updating: If a field in either system is governed by business logic, using that system as the target is not supported.
- Synchronize Mapped Information job only returns changes: The first time the job is run, Clarity and Rally are in sync. If a Clarity user subsequently updates a field sourced from Rally, the next job run will not update it since there has been no change in Rally. The field will be synced only when the mapped portfolio item is updated in Rally.
- To troubleshoot synchronization issues:
  - Leverage the job log to troubleshoot Clarity and Rally data exchange.
  - Review the Clarity BG logs.
  - Check synchronization errors on the staging tables.
  - Consider logging the following packages for troubleshooting:
    - `com.ca.ppm.integrations.jobs`
    - `com.ca.ppm.integrations.systems`
    - `com.ca.ppm.integrations.http.client`

## Map and Synchronize OKRs

Many organizations use Clarity as a system of record for maintaining and measuring their performance, setting yearly objectives and documenting key results. Since different departments use different terminologies, you can use custom objects or investments in Clarity to create and track objectives. You can then create a custom sub-object to capture key results.

You can use the Clarity Connections to map Objectives and Key results in Clarity with Rally to ensure your business and engineering goals are in sync.

### Pre-Requisites for Mapping OKRs

1. Assign the Integration Mapping - Navigate access right to administrators who will configure the Clarity-Rally integration.
2. Ensure the latest version of the PMO-Accelerator content add-in is installed.
3. Ensure you have created an Integration Object in Classic PPM.
4. Ensure you have an existing integration mapping or create a new integration mapping for managing OKRs.
5. Run the Import Integration Mapping job. This job retrieves portfolio item type objects and supported attributes from the configured Rally workspace, fetches the Milestones, Investment Categories, State, and Project lookups, and OKR information from Rally.

### Create Objectives in Clarity

You can use the Custom Objects or Custom Investments capability to create relevant objectives for your organization. Use the Starred feature to highlight OKRs solely managed in Clarity.

### Create Key Results in Clarity

You can use the sub-objects capability to create key results relevant to each objective.

### Define Object Mappings for OKRs

You can map selected Clarity custom objects and custom investments associated with your objectives to objectives in Rally.

**Example 1: Clarity to Rally**

An organization uses Custom Objects in Clarity to create Objectives. These can be mapped to their counterparts in Rally.

**Example 2: Rally to Clarity**

Teams use Rally to create objectives and track their goals. You can use the OKR integration to ensure Rally objectives have associated objectives in Clarity.

### Define Sub Object Mappings in Clarity

1. Log in to Clarity.
2. Click Administration and select the Integrations tab to open the Integrations page.
3. Open the relevant integration mapping and navigate to the Sub Object Mappings tab.
4. Click the Add Row icon and enter the following details:
   a. **Name:** Provide the name of the sub object mapping.
   b. **Rally Object:** You can only see Rally Key Results.
   c. **Clarity Object:** Select the Clarity Objects with configured custom Sub-Objects.
   d. **Direction:** Select Clarity to Rally, Rally to Clarity, or Both.

### Create Lookup Mappings for OKRs

The process for creating Lookup Mappings for OKRs follows the same steps as described in the Create Lookup Mappings section above.

### Define Field Mappings for OKRs

Consider the following techniques:
- Review the Data Type Compatibility table to ensure you are mapping supported field types.
- Specify the direction of data flow when defining the mapping.
- Bi-directional integration is supported using the Both option. The "Both" option can only be used with Update in the Sync Option column.
- You cannot include the same field in multiple mappings.

### Select Clarity Objectives to Sync with Rally

1. Log in to Clarity.
2. Navigate to the objective and ensure you are in the grid layout.
3. Use the column picker to add the Rally Object and Integration Mapping attributes to the grid.
4. Select the relevant integration mapping to associate with the objective.
5. Execute the Synchronize Mapped Information Job.

### Select Rally Objectives to Sync with Clarity

You can create objectives in Clarity associated with objectives in Rally. Teams use Rally to track their goals and create Rally OKRs. You can use the Clarity-Rally integration to ensure Rally OKRs have associated objectives in Clarity.

### Run the Synchronize Mapped Information Job for OKRs

The process is the same as described in the Sync Investments section. The Staging Tables are updated to capture incoming Rally OKR data or outbound Clarity OKR data before processing and populating mapped Objects and Fields.

> [!note]
> Key points:
> - Clarity 16.0.3 does not ship with out-of-box objects or attributes for Objectives and Key Results. Customers and partners use Clarity Studio to create Custom Objects or Custom Investments (and attributes) for Objectives, and custom sub-objects for Key Results.
> - Rally Objective State lookup values may differ across Objective hierarchy levels. A warning message displays if a Clarity user attempts to update all Objective Types with the same Objective State value.
> - The Create or Create and Update actions support the Clarity to Rally direction. You cannot create new records in Clarity based on Rally fields.
> - In some areas, such as Object and Field mappings, you will see the label "External" instead of "Rally." This will be fixed in upcoming releases.
> - If a Rally text field has images or tables, its data will not be synchronized with Clarity.


---
**See also:** [[Rally Integration Setup]], [[Rally Cost Accounting]]
**Parent:** [[_MOC Administration|Administration]]
