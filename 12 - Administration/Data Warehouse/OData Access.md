---
title: Configure OData Access to the Data Warehouse
tags:
  - admin
aliases:
  - OData Access
canonical: true
audience: admin
domain: administration
---
# Configure OData Access to the Data Warehouse

## Overview

SaaS customers can access the data warehouse and develop analytics dashboards and reports using REST (OData) endpoints. A Data Warehouse OData Service server in the Classic PPM environment connects to the data warehouse and exposes OData endpoints for data warehouse entities.

As a report developer or business user, you can use a business intelligence tool (for example, Microsoft Power BI or Tableau) to access the OData endpoints, then create your own dashboards and reports.

## Data Warehouse Query Example

The data warehouse queries are simpler than queries against the Classic PPM transactional database:
- No need to join to lookup tables.
- The joins between tables are consistent. The key is always the resource ID.
- The column names are consistent between tables.
- The table names follow a standard naming convention.

**Example: Team query**

```sql
SELECT i.investment_manager, i.investment_name, t.resource_name, t.role_name,
       tl.booking_status, tl.request_status, p.period_start_date,
       tf.alloc_hours, tf.alloc_cost
FROM dwh_inv_team t
INNER JOIN dwh_inv_team_ln tl ON t.team_key = tl.team_key
INNER JOIN dwh_inv_investment i ON t.investment_key = i.investment_key
INNER JOIN dwh_inv_team_period_facts tf ON t.team_key = tf.team_key
INNER JOIN dwh_cmn_period p ON tf.period_key = p.period_key
WHERE SYSDATE BETWEEN p.year_start_date AND p.year_end_date
AND p.period_type_key = 'MONTHLY'
AND tl.language_code = 'en'
```

## Referential Integrity

To improve data accuracy, tables use primary and foreign keys:
- Language tables (ending in `_ln`) have foreign keys to the master table.
- Fact tables have foreign keys to the master tables.
- Foreign key constraints end with `FK1`.
- Primary key constraints end with `PK`.

This convention reduces errors and eliminates orphan records (detail records without a header). When a record is deleted, any records in other tables that have a foreign key to the current record are automatically deleted.

## Provide Access to the Data Warehouse OData Service

Follow these steps:
1. Verify that you are using the SaaS edition of Clarity 15.4 or higher.
2. Log in to Classic PPM.
3. Click Administration, Organization and Access, Resources:
   a. Grant the **Data Warehouse OData Service - Navigate** access right to administrators responsible for managing access to the OData connection.
   b. Grant **OData - Access** to access Clarity OData and act on behalf of other users as a trusted connection.
4. Click Administration, General Settings, Data Warehouse OData Service. The following information appears:
   - **Data Warehouse OData v2 EndPoint URL:** The OData URL for Classic PPM 15.4 or newer, used for external authentication with OData v2. Example: `http://<host:port>/api/odata/ppm_dwh_datasource_v2`
   - **Data Warehouse OData v4 EndPoint URL:** The OData URL used for external authentication with OData v4. Example: `http://<host:port>/api/odata4/ppm_dwh_datasource_v4`
   - **OData Authenticator:** The qualifier to use when accessing OData endpoints with Classic PPM user credentials.
5. Share the OData URL (v2 or v4) and the authentication string with report developers and users.

## Access OData Endpoints Using Clarity Credentials

Follow these steps:
1. As a Classic PPM administrator, grant report users access to the OData endpoints:
   a. For existing users, assign the **Data Warehouse OData Service - Navigate** access right.
   b. For new report users, create them as resources in Classic PPM and assign this access right.
2. As a user with the necessary rights, access the OData service using your Classic PPM credentials:
   - Enter the username suffixed with a pipe symbol (`|`) followed by the OData Authenticator: `<Clarity_USER>|<ODATA_AUTHENTICATOR>`
   - Example: if the Classic PPM Username is `PPMODataUser` and the OData Authenticator is `PPMOData`, enter: `PPMODataUser|PPMOData`

Additional notes:
- Create specific report users in Classic PPM. You can re-use existing product users, provided they do not have the External Authentication option checked in resource properties. If checked, create new report users.
- Set up a password for these users in Classic PPM so they can use it for accessing the Data Warehouse OData endpoints.

## Support for Clarity API Keys to Access OData

The Enhanced OData API allows you to use both basic authentication and Clarity API Keys to authenticate users.

**Authentication syntax:**
- **Basic Authentication:**
  - Username: `<Clarity Username>|<Odata-Authenticator>`
  - Password: `<Password defined in Clarity>`
- **API Keys:**
  - Username: `<API Client ID>|<Clarity Username>|<Odata-Authenticator>`
  - Password: `<API Keys>`

> [!important]
> Key points to remember:
> - The enhanced API works with OData v2 and v4.
> - All rules associated with API Keys (such as key expiration) apply.
> - Existing OData access rights are still needed to access OData.
> - Administrators must enable APIs in their environment and create an API Client that end-users use to generate API keys.
> - When refreshing non-production from a production environment, the API keys for the non-production environment will be overwritten with the production values, as API keys are stored in the database.

After upgrading to this release, you can use the API Keys feature for OData authentication. Ensure you are using OData v2 or v4.

## Enable Custom Content for the Data Warehouse

Any data you want available in the Data Warehouse must first be added in the product and specifically enabled for the Data Warehouse. For example, to view custom project attributes in reports, add the attributes to the Project object in Classic PPM Studio, then enable them by selecting the Include in the Data Warehouse checkbox.

See Enable Custom Objects and Attributes for the Data Warehouse (in Configure the Data Warehouse).

## Refresh the OData Endpoints

As new tables and columns are added in the data warehouse, the OData endpoints can get outdated. Run or schedule the following jobs in the listed order to update the OData endpoints:

1. **Load Data Warehouse:** Run this job immediately after configuring Classic PPM for OData. The job copies data from Classic PPM tables and views to the data warehouse schema.
2. **Load Data Warehouse Access Rights:** Extracts access rights for investments and resources and loads them into the data warehouse. Run anytime user access rights are changed, and also after running the Load Data Warehouse job using the full load option.
3. **Refresh Data Warehouse OData Model:** Run this job only when there is a change to the data warehouse schema (new object or attributes). The job creates OData endpoints for both v2 and v4 based on the data warehouse schema. Run the Refresh job at least once after configuring Classic PPM for OData.

> [!note]
> Read-only user access to the updated data warehouse can vary due to the sequence of required load and refresh jobs. The full sequence of updates can occur in a few minutes or up to two hours. New custom objects are loaded in Step 1 when you run the Load Data Warehouse job. A separate Refresh Grant database job (scheduled to run every 2 hours) creates and updates permissions and synonyms for new database objects. Your new custom objects are not visible as OData endpoints until the Refresh Grant job has completed and you have run the Refresh Data Warehouse OData Model job again.

## Verify the OData Connection

Follow these steps:
1. Open a web browser.
2. Depending on your OData version (v2 or v4), copy and paste the OData End-Point URL noted from Classic PPM.
3. Enter the username and password for accessing the OData service and try to connect.
   - If the connection is successful, you see an XML formatted OData output.
   - If you do not see this output, contact Broadcom Support.

## Connect Your BI Tool to the Data Warehouse OData Service

As a report developer, connect your existing BI tool to the OData data source. The OData objects are exposed and you can start building reports for your end users.

The procedures in this section are recommendations only. Refer to your specific BI tool documentation for configuration instructions on:
- Connect and build reports using OData feed.
- Retrieve only sample data when establishing an OData connection.
- Retrieve limited data when building reports to improve performance.

### Connect to OData Using Microsoft Power BI Desktop

1. From the Power BI main menu, select Get Data, OData Feed.
2. In the OData Feed window, enter the Data Warehouse OData End-Point URL (v2 or v4).
3. Click OK.
4. Select Basic.
5. Enter the username and password for accessing the OData service.
6. Click Connect. On a successful connection, you see a list of data warehouse tables you can use to build reports.

### Using OData with Custom Scripts

Developers can implement custom scripts that automatically retrieve specific metrics and dimensions from Clarity, process data according to business requirements, and integrate it with other data sources.

Key points:
- Use the `$top=100` parameter to reduce dataset processing time during test runs by limiting payload sizes.
- For XML pagination: `<link rel="next" href="https://<ClarityHostName>/api/odata/..."/>`
- For JSON pagination: `"@odata.nextLink": "https://<ClarityHostName>/api/odata4/..."`

### Connect to OData Using Microsoft Excel

> [!warning]
> Clarity exposes OData and you can use third-party tools like Microsoft Excel to consume OData. However, Clarity does not officially support any OData consumption with any third-party tool.

> [!note]
> We do not recommend Excel for reporting. For building reports, we recommend using a reporting tool such as Power BI. Power BI renders data faster using caching and offers better data security and control. Excel provides no convenient way to map report users to Classic PPM users.

### Connect to OData Using Tableau Desktop

When connecting to OData using Tableau, you must specify individual OData entities (tables):
1. Under Connect, To a Server, select OData as the data source.
2. In the OData window, in the Server field, enter the Data Warehouse OData End-Point URL using the format: `http://<host>:<port>/api/odata/datasource/<entity>` where `<entity>` is the name of the data warehouse table.
3. Select use a specific username and password. Specify the username and password for accessing the OData service.
4. Click Sign in.
5. Repeat the steps to connect to additional data warehouse tables.

> [!note]
> OData v4 is not supported by Tableau; it supports only v2. Microsoft Power BI supports both v2 and v4.

## Implement Row Level Security for BI Reports

> [!warning]
> Work with your information security organization to review the data access and storage information. Determine the compatibility of the information with your data security standards. Data Warehouse OData Service does not leverage the users, groups, or OBS security model available in Classic PPM. Your BI report developer can use the data warehouse security tables to restrict the data visible to report users.

Before users generate reports, implement row-level security. Enable investment and resource row-level security in the BI reports so that only the relevant resources and investments are visible based on access rights.

**Example:** User A has access to investments 1 and 2; User B has access to investments 1 and 4. When User A logs in to their reporting environment, investment reports show only rows for investments 1 and 2.

To enable row-level security, use the BI User ID attribute to map Classic PPM users to report users in your BI tool. The BI User ID attribute is included in the Resource object and installed by the PMO Accelerator. The attribute is enabled for the data warehouse by default, but the Include in Data Warehouse option is not selected and is read-only for the security attribute.

### Configure Row-Level Security in Clarity

1. Configure the resource views to add the BI User ID attribute.
2. Populate the BI User ID attribute value for all report users with their BI security login value. For example, map Classic PPM user (User A) to BI User ID value `userA@<company_name>.org`.

### Configure Row-Level Security in Your BI Tool

> [!note]
> The following procedure provides high-level generic steps using Power BI as an example. Refer to your BI tool documentation for instructions about implementing row-level security in your specific tool.

Follow these steps:
1. Load the following tables in Power BI Desktop:
   - **DWH_INV_INVESTMENT:** Populates investments data; commonly used with investment security.
   - **DWH_RES_RESOURCE:** Populates resource data; commonly used with resource security.
   - **DWH_INV_SECURITY_V:** Populates access rights information for investments, including the BI_User_ID column.
   - **DWH_RES_SECURITY_V:** Populates access rights information for resources, including the BI_User_ID column.
2. Create relationships between the tables and views.
3. Define a WHERE condition to restrict the data to a specific user. For example, in Power BI, navigate to Modeling, Manage Roles, Create Role, and create a DAX expression: `[BI_USER_ID] = USERNAME()`
4. Save and publish the report.

> [!note]
> To populate BI User ID to DWH_INV_SECURITY_V and DWH_RES_SECURITY_V, run the Load Data Warehouse Access Rights job.

## Supported Clarity Data Warehouse Functions

The following data warehouse functions are supported in OData v4:

```
DWH_CAL_CURRENT_DATE_FCT
DWH_CAL_DATE_ADD_FCT
DWH_CAL_DATEDIFF_FCT
DWH_CAL_DATEFORMAT_FCT
DWH_CAL_DATELABEL_FCT
DWH_CAL_DIFF_IN_SECONDS_FCT
DWH_CAL_END_OF_MONTH_FCT
DWH_CAL_PERIOD_START_FCT
DWH_CAL_STARTDATE_FCT
DWH_CAL_TRUNC_DATE_FCT
DWH_CHART_COLOR_MAP_FCT
DWH_CONVERT_CURRENCY_FCT
DWH_DAYS_LATE_PCT_FCT
DWH_DISPLAY_MAPPING_FCT
DWH_GET_RETAIN_PRECISION_FCT
DWH_INV_REMAINING_ALLOC_FCT
DWH_NULL_DATE_FCT
DWH_NULL_NUMBER_FCT
```

## Related
- [[_MOC Administration]]

%%Source: p3052-3058%%
