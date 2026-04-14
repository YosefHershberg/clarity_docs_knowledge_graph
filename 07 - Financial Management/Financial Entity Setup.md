---
title: Set Up a Financial Entity
tags:
  - admin
aliases:
  - Financial Entity
canonical: true
audience: finance, pm
domain: financials
---
# Set Up a Financial Entity

- Modify existing rows - Generate duplicate rows - Overlap existing dates - If you include existing dates with the new ones, a message will alert you that the row already exists.
1. Click Administration, Finance, Manage Matrix.
2. Click Locked Matrices.
3. Select the matrix that you want to unlock.
4. Click Unlock.
Set Up a Financial Entity
Creating a financial entity is the first step in setting up financial management. You can define as many entities as you need.

Each entity owns a unique set of locations and departments for which the entities are financially aware.
To establish this financial boundary, associate the entities with a geographical OBS for locations and an organizational OBS for departments.
Once an entity is defined, you can create financial plans and can establish costs for investments.
Financial controllers can set up defaults at the entity level to suggest the recommended cost plan structure for the organization.
For example, they can predefine the fiscal time period type and the grouping attributes for all cost plans.
The default values are automatically populated for individual investment cost plans at the time you create them.
The project managers can change these defaults for their specific investments.
- Example: Set Up an Entity for Financial Planning - Complete the Prerequisites - Create Financial Classes - Create Fiscal Time Periods - Activate Fiscal Time Periods - Create Plan Defaults
To enable and use financial management, first set up an entity to define the internal financial framework of your organization. Setting up the entity provides the following benefits: - A standardized financial planning process for all investments. - Visibility to how investment costs are tracked.
Example:

Set Up an Entity for Financial Planning The financial manager at an IT corporation sets up a financial entity to provide the investment managers the basic framework for building detailed financial plans.
The financial manager defines the following financial classes to categorize the organizational information to process financially:
- Resource classes to differentiate the offshore and local resources. - Transaction classes to categorize consulting, development, and sales labor transaction types.
To allow cost planning that is based on monthly periods, the financial manager selects a monthly fiscal time period type spanning from January 1 to December 31.
The financial manager then selects the following grouping attributes to drive the structure of all investment cost plan line items:

- Resource - Role - Transaction Class

## Complete the Prerequisites
Before you set up a financial entity, complete these prerequisites:
Financial Management Concepts
Verify that you understand the following financial management concepts:
- Cost planning as opposed to actuals, fiscal calendar cycles, fiscal time periods and how they are defined in your organization.
- The desired outcomes for any type of configuration. After you start using the configured data to create instance data, you cannot change the configuration.

For example, you cannot delete fiscal time periods, department or location OBS units, or financial classifications that the application is using.
- How you want to set up your organizational structure using entity, and the location and department organizational breakdown structure (OBS) units. Organization is important because when you use the application or you generate reports, information groups by the outcome desired.
- How your configurations, classifications, and definitions affect the data flow to your third-party integrations and chargebacks processing.
Create the OBS and Entity
Verify that you have setup the following items:
- A multi-currency setup with an activate system currency. - A financial location and financial department OBS. - An entity associated with the financial location and financial department OBS. - Department and location OBS units for the entity that are associated with each other.
Grouping Attributes
Determine the criteria to group your financial planning data. Establish grouping attributes for cost plan line item details.
Example: Grouping Attributes
- Cost Type: Includes separate line items for operating and capital costs. - Charge Code: Includes different types of operating or capital costs such as fixed or variable operating costs.

## Create Financial Classes
To process financial information by categorizing resources, investments, and transactions, create the following financial classes:
- Resource Classes: Differentiate the different types of resources for reporting. Allow you to apply different costs and rates for resources such as employees and contractors.
- Company Classes: Describe clients or companies within the organization such as internal customers and external customers.
- WIP Classes: Use as columns in a matrix to determine the rates and costs of actual transactions or planned costs. For example, use WIP classes to differentiate between investment types or sizes (Critical Application, SOP Application,

Legacy Product) and provide matching cost and rates. You can also use WIP classes for financial reporting purposes or for grouping billable and non-billable resources.

- Investment Classes: Differentiate the services that an organization provides its clients such as administrative or maintenance.
Other examples include investment types such as projects, assets, applications, or project types such non-profit, major project, government project. - Transaction Classes:
Categorize the type of work that resources record and differentiates costs, such as internal or contract labor.
> [!note]
> Initially, associate a resource class to the labor resource type and a transaction class to the labor transaction type only. You can create the other resource and transaction type classes (material, equipment, and expenses) once financial management is configured.
Follow these steps:
1. Click Administration, Finance, Setup. The financial organizational structure appears.
2. In the Classifications section, click the link name for a class.
3. Click New.
4. Complete the fields on the page and click Save.
> [!tip]
> When creating a resource class, select the Active check box to make the resource class available for new references on resources, cost plans, and transactions.
> Create Fiscal Time Periods
> Define active fiscal time periods for an entity as units for reporting and financial processing.

Based on these time periods, investment managers can create detailed financial plans or chargeback rules.
For example, if you plan by weekly periods, configure and activate weekly fiscal periods for the entity.
The period, year, and date range you select automatically creates a series of time periods.
Once you activate and start using a fiscal time period, you cannot modify the dates or deactivate the time period.
> [!note]
> Fiscal time periods are required for the following capabilities in Clarity:
- Staffing (Resource Management) telescopic calendar in Clarity 15.2 or higher - Roadmaps in Clarity 15.4 or higher (roadmaps require annual fiscal time period types)
Follow these steps:
1. Click Administration, Finance, Setup. The financial organization structure appears.
2. In the Organizational Structure section, click Entities.
3. Select an entity.
4. Click Fiscal Time Periods.
5. Click New and complete the fields on the page.
- Period Type: Specifies the period type, such a monthly or quarterly. Once you create a time period, you cannot change this value.
- Start Date: Specifies the start date for the period or range of time periods. - Finish Date: Specifies the ending date for the time period or range of time periods. 6. Click Save.
> [!tip]
> Once the time periods are active, you cannot edit the start and finish dates. You can edit the start and finish dates only for inactive periods.

To prevent overlapping periods or gaps in dates for a given type (for example, monthly or quarterly), edit the Start Date in only the first fiscal time period and edit the Finish Date in only the

last fiscal time period. If you attempt to edit dates on any other periods that fall between the first and last period, an error message indicates that you cannot create gaps.
> [!tip]
> When defining monthly fiscal periods types, we recommend that you include the current month in the date range to ensure successful execution of the Datamart Extraction job.
> Activate Fiscal Time Periods
> All fiscal time periods within the date range are created with a status of Inactive.

To allow investment managers to use the time periods in detailed financial plans, activate the time periods.
For example, if you create monthly fiscal time periods for one year, you can optionally activate some or all of the periods.
Once active, you can create detailed financial plans for them or can use them in the datamart settings.
> [!note]
> Some of the key points to remember are:
1. If a time period is actively used in financial planning, transactions, and invoices, you cannot delete it.
2. The Start Period and End Period in the Clarity View Options display active and inactive fiscal periods
defined for the Default Entity.
Follow these steps:
1. Click Administration, Finance, Setup.
2. In the Organizational Structure section, click Entities.
3. Select an entity.
4. Click Fiscal Time Periods.
5. Select each fiscal time period to be activated.
6. In the Actions menu, click General, Activate.
7. Click Save.
Create Plan Defaults
To create the following types of defaults for detailed financial plans for all investments, use plan defaults:
- Grouping attributes. Groups financial planning data by specific criteria. For example, to see the project cost breakdown by different departments and locations, select Department and Location as the default grouping attributes for all financial plans.
- Fiscal time period type. Breaks down financial planning data by specific time period type.

For example, to see a monthly breakdown of cost values by default, select a monthly time period type for all cost plans.
You can only edit the data for the selected time period type. You can view the data for the other time period types but cannot edit the data.
- Starting and ending periods. Specifies the date range for creating manual financial plans. For example, to default the start and end periods of all financial plans within a range, specify, for example, January 1 at the start date and December 31 as the end date.
- Locked plans. Locks financial plans to prevent managers from changing the grouping attributes at the investment level.
- Freeze date. Governs the time periods. For example, enter December 31 to prevent the time periods for detailed financial plans from being changed before this date.
Follow these steps:
1. Click Administration, Finance, Setup.
2. In the Organizational Structure section, click Entities.
3. Select an entity.
4. Click Plan Defaults.

## Enable Investments for Financials

Financially enabling investments ensures that actual costs from posted transactions appear on cost plans, reports, portfolios, and other product areas.

> [!WARNING]
> Setting the financial status of an investment to **Open** without completing the required financial setup causes error messages when processing actual transactions.

> [!NOTE]
> The following procedure uses "projects" as a sample investment type. The same steps apply to other investment types.

Follow these steps:

1. Open **Home**, and from **Portfolio Management**, click **Projects**
2. Open the project
3. Open the **Properties** menu and click **Settings** from Properties
4. In the **Financial** section, complete the required fields:

| Field | Description |
|---|---|
| **Company Name** | Company sponsoring the project or receiving its benefits |
| **Affiliated Project** | A financially active project that is financially tied to this one |
| **Department** | Department used during chargeback transaction processing |
| **Location** | Location used to match the project with debit/credit rules |
| **Financial Status** | **Open**: Fully processes transactions. **Hold**: No new transactions. **Closed**: No new transactions. |
| **Type** | **Standard**: Transactions accumulate over a cycle. **Internal**: Tracks non-chargeback transactions. |
| **WIP Class** | WIP class for matching the project with cost/rate matrices |
| **Investment Class** | Investment class for matching with cost/rate matrices |
| **Cost Type** | Scheduled capital or operating cost (Default: Operating) |
| **Billing Currency** | Currency used to process chargebacks and financial transactions |

5. In the **Labor**, **Material**, **Equipment**, and **Expense Transaction Matrix** sections, enter:
   - **Rate Source**: Cost/rate matrix used to calculate the chargeable rate
   - **Cost Source**: Cost/rate matrix used to calculate the cost amount
   - **Exchange Rate Type**: Average, Fixed, or Spot (displayed only when multi-currency is enabled)
6. Save the changes

## Enable Resources and Roles for Financials

Financially enabling resources ensures that actual costs from posted transactions appear on cost plans, reports, and portfolios. You can also access pages providing visibility into resource transaction entries.

> [!NOTE]
> If you are defining financial properties for roles, not all of the properties below will appear.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**
2. Open the resource or role
3. Open the **Properties** menu and click **Financial** from Properties
4. Complete the fields in the **Supplemental** section:

| Field | Description |
|---|---|
| **Financially Active** | Enables financial management activities against an investment |
| **Target % Billable** | Percentage of the targeted billing rate that is billable (stock attribute for custom reporting) |
| **Financial Department** | Financial department (cost center) of the resource |
| **Financial Location** | Financial location of the resource |
| **Transaction Class** | User-defined values grouping transaction types for financial processing |
| **Resource Class** | Category for the financially enabled resource or role |
| **Target Billing Rate** | Targeted billing rate (stock attribute for custom reporting) |

5. Save your changes

> [!NOTE]
> For labor resources, you must complete the **Financial Department** and **Financial Location** fields before you can mark the resource as **Financially Active**.

## Related
- [[Cost Rate Matrix]]
- [[Charge Codes and Vendors]]
- [[GL Accounts and Chargebacks]]
- [[_MOC Financials]]

%%Source: p2163-2166%%

