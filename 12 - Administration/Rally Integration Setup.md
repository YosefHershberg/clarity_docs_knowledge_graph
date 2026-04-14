---
title: Rally Integration Setup
tags:
  - admin
  - howto
aliases:
  - Rally Setup
  - Rally Mapping
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# Integrating Clarity and Rally

## Overview

Organizations can use the Clarity-Rally integration to ensure data flows seamlessly between the two applications. The integration is:

- **Easily extensible and configurable:** You can map objects and attributes between Clarity and Rally to ensure the integration meets your specific requirements.
- **Simple to maintain:** The integration can be set up and maintained by Clarity administrators who have basic Classic PPM knowledge.
- **Validated and Supported by Broadcom:** You don't need to perform regression testing after every release.

In Clarity 16.4.0, a new Rally Calculation Method attribute introduces flexibility by allowing teams to choose between Points or Count when calculating FCA metrics. This enhancement better aligns with various Agile practices and improves the accuracy of cost and productivity analysis.

## Integration Workflow

At a high level, the integration setup follows these steps:

1. Complete the relevant prerequisites to configure the integration.
2. Create an Integration Object to integrate Clarity with a specific Rally instance.
3. Create an Integration Mapping.
4. Run the Import Integration Mapping job to fetch all Rally portfolio item type objects and their associated attributes.
5. Define valid Object mappings.
6. Define valid Lookup Mappings.
7. Define valid Field mappings.
8. Specify a Clarity Investment that would map to an Object in Rally.
9. Specify a Rally object that would map to an investment in Clarity.
10. Execute the Synchronize Mapped Information job to synchronize data between Clarity and Rally.
11. Review the staging tables to understand the changes made in Rally and Clarity.

## Setting Up the Clarity-Rally Integration

### Integration Prerequisites

Complete the following steps before configuring the Clarity-Rally integration:

1. Assign the **Integration Mapping - Navigate** access right to administrators who will configure the integration. Users with this right can view and access the Integrations tile on the Administration page.
2. Ensure the latest version of the PMO-Accelerator content add-in is installed. With this installed, Clarity includes the `Rally Object ID` and `Integration Mapping` attributes for Projects, Ideas, and Custom Investments.

### Create an Integration Object in Classic PPM

You can configure the Clarity-Rally integration by creating an integration object from the Integrations page in Classic PPM, which is the one-stop shop to define and maintain all integration information.

The key pieces of information needed are:
- Integration URL
- Integration Instance
- Integration API Key

> [!important]
> The user generating the API key in Rally must have at least Workspace Administrator privileges. The Clarity-Rally Integration does not support Basic authentication.

Follow these steps:

1. Log in to Classic PPM.
2. Click Administration, General Settings, Integrations.
3. Click New.
4. Complete the following fields and click Save:

| Field | Description |
|-------|-------------|
| Areas | The software application or business area of the vendor (for example, Agile) |
| Vendor | The company name with which Clarity is integrating (for example, Rally) |
| Supplier | The company name implementing the integration (for example, Broadcom) |
| Integration URL | The URL for the integration instance (for example, the Rally instance URL) |
| Integration API Key | The key used to access and retrieve data from Rally |
| Integration Instance | The Rally workspace ID |

## Create Mappings in Clarity and Rally

### Define Object Mappings in Clarity

You can map selected Clarity investments (Projects, Ideas, and Custom Investments) to selected Rally Portfolio items, and vice versa.

**Example 1: Clarity to Rally**

An organization has finalized its strategy and used Custom Investments in Clarity to create Themes, Business Epics, and Business Outcomes. These investments can be mapped to Themes, Epics, and Capabilities in Rally. Individual projects in Clarity can also be mapped to a relevant portfolio item type such as a project in Rally.

**Example 2: Rally to Clarity**

Teams use Rally to track day-to-day work and create Rally Portfolio Items for ideas. You can use the Clarity-Rally integration to ensure portfolio items in Rally have associated investments (ideas, projects, and custom investments) in Clarity. You can then use planning capabilities in Clarity such as Roadmaps and Hierarchies to understand the relationship between these Rally initiatives and existing investments.

Follow these steps:

1. Log into Clarity.
2. Click Administration and select the Integrations tab to open the Integrations page.
3. Open the relevant integration mapping and navigate to the Object Mappings tab.
4. Click the Add Row icon and enter the following details:
   a. **Name:** Provide the name of the object mapping.
   b. **Rally Object:** Select the Rally object to map to the Clarity investment.
   c. **Clarity Object:** Select the Clarity investment type to map to the Rally object.
   d. **Direction:** Select Clarity to Rally, Rally to Clarity, or Both.

### Create Lookup Mappings

The Import Integration Mappings job fetches the Milestones, Investment Categories, Date, and Project lookups from Rally and stores them in Clarity. These four dynamic lookups are available as part of the PMO Accelerator add-in.

You can perform the following actions to map lookups:

- **Leverage existing Rally Lookups imported into Clarity:** Create custom attributes in Clarity that leverage the Rally Investment Categories, Rally Milestones, Rally Projects, and Rally States lookups. You can then use Field Mappings to map these custom attributes to the relevant lookups in Rally.
- **Use the Lookup Mapping tab to configure other lookups:** Map single-value lookups in Clarity to custom lookups (drop-down lists) in Rally, enabling data synchronization control.

For example, to map a custom Rally lookup titled "Business Risk" to the "Business Operational Risk" lookup in Clarity:

a. Create a New Lookup mapping in Clarity to map values between the Business Operational Risk lookup in Clarity and the Business Risk lookup in Rally.
b. Create a field mapping between these lookup fields to ensure data is synchronized. You can specify the direction as Clarity to Rally, Rally to Clarity, or Both.

> [!important]
> When you update the attribute's value on either system and run the Synchronize Mapped Information job, the field in the other system will be automatically updated.

> [!warning]
> Some key points to remember:
> - Clarity supports all three synchronization options (Clarity-to-Rally, Rally-to-Clarity, and Both) when mapping custom lookup values.
> - Review the Data Type Compatibility table to review supported mapping options.

Follow these steps:

1. Log into Clarity.
2. Click Administration and select the Integrations tile to open the Integrations page.
3. Open the relevant integration mapping and select the Lookup Mapping tab.
4. Click New Mapping and enter the following details:
   - Select the relevant Clarity lookup.
   - Select the target Rally lookup.
   - Enter the Name of the lookup mapping.
5. Click Create to save the new mapping.
6. Select the mapping and click DETAILS to open the Details Panel.
7. Click the Clarity to Rally tab and select the target Rally values for associated Clarity values.
8. Click the Rally to Clarity tab and select the target Clarity values for associated Rally values.
9. After the mapping is complete, close the details panel.

> [!important]
> Key points when leveraging the Lookup Mapping capability:
> - The Administrator needs to install the new PMO accelerator to ensure the four new dynamic lookups are available.
> - Administrators need to create dynamic lookup attributes at the Clarity Investment, Object, Idea, or Custom Investment levels.
> - For static value or multi-value lookups leveraging the four Rally lookups, use the following lookup parameter mappings:
>   - Lookup Parameter: `Im_id_constrain` and `Inv_code_constrain`
>   - Object Attribute ID: `obj_int_mapping` and `Unique_code`
> - When mapping Rally Projects, Milestones, States, or Investment Categories to a Clarity custom lookup, you can directly synchronize values without using Lookup Mapping tables.
> - It is recommended that Rally States, Projects, and Investment Categories be associated with a Clarity single-value lookup attribute; Rally Milestones be associated with a Clarity multi-value lookup attribute.
> - If a Clarity parameterized lookup is used for Lookup Mapping, the Clarity to Rally and Rally to Clarity lookup options will not be displayed in the DETAILS panel.
> - You can synchronize a single-value Clarity number lookup to a Rally string field. The synchronization will not work if the Clarity number lookup is configured as a multi-value lookup or if the Clarity number attribute has a comma.
> - If a Clarity lookup value is marked inactive:
>   - If mapped to a Rally value, the existing Lookup Mapping configuration will not be modified.
>   - If not mapped to a Rally value, the Clarity value will be removed from the existing Lookup Mapping configuration.
> - If a Rally lookup value is marked inactive or deleted, Clarity will display the (inactive or deleted) Rally value within the Lookup Mapping configuration pages.

> [!note]
> You can synchronize the value of Rally lookups to Roadmap items by using the Sync Linked Items option.

### Define Field Mappings in Clarity

Defined field mappings specify how data is exchanged between Clarity investments/fields and Rally portfolio items/fields. Field mappings are always associated with an object mapping.

Key techniques:
- Specify the direction of data flow when you define the mapping (Clarity to Rally, Rally to Clarity, or Both).
- Bi-directional integration is supported using the Both option in the Sync Option column. The "Both" option can only be used when you use Update in the Sync Option column.
- You cannot include the same field in multiple mappings.

> [!note]
> The integration supports mapping Rich text between Clarity and Rally. If you map Rally Text fields containing images or tables to a rich text field in Clarity, the synchronization job will skip it. Use log files to identify which fields were not synchronized.
>
> Administrators can map and sync Clarity's ENUM Lookup Number data type with Rally's Object data type (Clarity 16.1.0 and higher). A supporting Lookup Mapping configuration ensures actual values align.

Follow these steps:

1. Log into Clarity.
2. Click Administration and select the Integrations tab to open the Integrations page.
3. Open the relevant integration mapping and navigate to the Object Mappings tab.
4. Select the relevant Object Mapping, click DETAILS and select the Field Mappings tab.
5. Click Expand to open the Field Mappings window.
6. Enter the following details:
   a. **Direction:** Select Clarity to Rally, Rally to Clarity, or Both.
   b. **Clarity Field:** Select the relevant Clarity field associated with the investment identified during object mapping.
   c. **Rally Field:** Select the Rally field to map to the Clarity field, following Data Type compatibility guidelines.
   d. **Sync Option:** Select from Create, Update, or Create and Update options.
7. When Clarity validates the field mapping, the Data Type columns are populated and saved.
8. You will see an error message if the fields being mapped are not compatible, or if either field has an existing mapping.

> [!important]
> Key points to remember:
> - You can map and synchronize Clarity's Parent field values to Rally's Parent field values. This ensures whenever you update parent values in either system, changes are synchronized.
> - When you plan to map objects in Rally to investments in Clarity, ensure you map all mandatory fields used to create investments in Clarity.
> - You can map Rally's Formatted ID field to a string field in Clarity and synchronize it.

### Using Field Mapping to Map the Rally Owner Field

You can synchronize the Rally Owner field to the Clarity Owner field using a specific Clarity lookup. This ensures Clarity and Rally OKR ownership is in sync. You need to ensure email addresses of users are identical in Clarity and Rally for data to synchronize successfully.

> [!note]
> Key points:
> - Clarity ships with 3 lookups for syncing Owner values between Rally and Clarity:
>   - **BROWSE_PROJMGR_NAME_ONLY:** Out-of-the-box lookup for the Clarity Manager field.
>   - **SCH_BROWSE_RESOURCE:** Recommended for administrators creating a custom lookup (such as "Clarity Owner").
>   - **BROWSE_PROJMGR**
> - The Clarity Rally Owner sync process expects matching email addresses. When a missing resource is detected, the sync process skips the owner sync for that specific record.
> - A log file informs the administrator of "missing resources" that do not have matching email addresses in either system.

### Review the Data Type Compatibility Grid

Review the Data Type Compatibility grid to ensure you are mapping supported field types. The grid is available on the Data Type Compatibility tab, accessible from the Integrations page.


---
**See also:** [[Rally Cost Accounting]], [[Rally Synchronization]]
**Parent:** [[_MOC Administration|Administration]]
