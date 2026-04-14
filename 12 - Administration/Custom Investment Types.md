---
title: Configure Custom Investment Types
tags:
  - admin
aliases:
  - Custom Investment Types
canonical: true
audience: admin
domain: administration
---

# Configure Custom Investment Types

## Overview

The Investment Types feature provides a way for administrators to create and configure custom investment objects with the same capabilities available for projects and other non-project investments. Investment types are not constrained by the traditional boundaries associated with project management.

Custom investment types are defined in Classic PPM Studio and managed in Clarity. When you create a custom investment type in Classic PPM, a custom investment type blueprint is automatically generated in Clarity using the same name.

> [!note]
> In each Clarity environment, create no more than 100 custom investment types.

## Prerequisites

- Administrators create investment types using the Classic PPM Studio interface.
- Business users create new instances of these investments in Clarity.
- New investment type objects inherit attributes from abstract objects through object extensions.
- Investment types leverage the same auto-assignment of access rights as non-project investment custom objects.
- No new access right is required to create investment type objects — if a user can already create a custom object, they can create an investment type object.
- You cannot set the API Attribute ID manually for new investment types. The application sets the object to API-enabled and provides a unique API alias using the `cust` prefix and the plural form of the object name.

## Create an Investment Type

As an administrator, you can create investment types in Classic PPM so that business users can manage new instances of those types in Clarity.

**Follow these steps:**

1. In Classic PPM, click **Administration**, **Studio**, **Objects** and click **New**.
2. Define your custom investment type:
   a. In the **Object Name** field, enter your investment type name (e.g., "Product Demo" or "Business Case").
   b. In the **Object Extension** field, select **Investment Extension**.
   c. Assign a unique Object ID. The system assigns a read-only API Attribute ID when you save.
   d. To include the custom investment in hierarchies, select **INCLUDE IN HIERARCHIES**.
   e. Complete the other required and optional fields.
   f. Click **Save**.
3. Verify that the following access rights are enabled for the specific user:
   - `<investment_type>` - Create
   - `<investment_type>` - Edit All
   - `<investment_type>` - Navigate
   - `<investment_type>` - View All
   - `<investment_type>` - XOG Access
   - `<custom_investment_type>` - Cost Plan - Edit All
   - `<custom_investment_type>` - Cost Plan - View All
   - `<custom_investment_type>` - Cost Plan - Edit
   - `<custom_investment_type>` - Cost Plan - View
4. In Classic PPM, assign the new navigation rights to users individually through instance-level or global-level access rights.

> [!tip]
> Investment types are defined in Classic PPM but designed for use in Clarity. They are hidden in certain places in the Classic PPM user interface. Investment type objects are also not available for selection as a master object for another subobject.

## Access Rights Name Updated When You Rename Custom Investment Types

When you change the name of a Custom Investment, use the **Push Object Captions** icon to update OBS access rights, Instance Rights, Global Rights, and Sub-object master object names to reflect the updated name.

> [!important]
> - Pushing the object name change does not update the "Blueprint" name in Clarity.
> - The Object ID and Attribute ID do not get updated when you rename the Custom Investment.

## Configure Automatic Numbering for Investment IDs

You can configure the application to assign a unique investment identifier for each instance of your new investment type. Without auto-numbering, users must enter a unique value in the Investment ID column when adding a new investment.

**Follow these steps:**

1. In Classic PPM, click **Administration**, **Studio**, **Objects**.
2. Open your custom investment object.
3. Click **Attributes**.
4. Select **Investment ID**.
5. Click **Auto-Numbering**.
6. Select the **Auto-Numbered** checkbox.
7. Click **Save and Return**.

## Create a Custom Subobject for a Custom Investment Type in Studio

You can create custom subobjects for Custom Investment types and API-enable them so that users with appropriate access rights can use the modules to further define the custom investment.

### Prerequisite

A custom investment object must be created and published before you create a subobject.

> [!note]
> Instance-level access rights do not work on custom sub-objects in Clarity. Global-level access rights are currently supported.

**Follow these steps:**

1. Log in to Classic PPM.
2. Navigate to **Administration**, **Studio**, **Objects**.
3. Click **New**.
4. Specify:
   - Object Name
   - Object ID
5. Select **Subobject**.
6. In the **Master Object** field, type your custom investment name and select it.
7. Select the **API Enabled** checkbox (the API ID is auto-generated).
8. Click **Save**. The object is created and will be available as a module in Blueprints in Clarity.

### Configure a Custom Investment Type Blueprint to Include a Custom Subobject Module

1. Log in to Clarity.
2. Navigate to **Administration**, **Blueprints**.
3. Select a Custom Investment blueprint, make a copy, right-click, and select **Set as Default**.
4. Navigate to **Modules**. The new subobject is listed in the MODULES panel.
5. Click **EDIT**, drag and drop the new subobject module, and click **PUBLISH**.

> [!note]
> After making any changes to a blueprint, log out and log in to Clarity for the changes to appear.

### Use the Custom Subobject in a Custom Investment Type

1. Log in to Clarity.
2. Navigate to **Investments**, select a Custom Investment instance.
3. Click the new subobject module.
4. Click the **+** (plus) icon to add attributes.

## Manage Simple Budgets for Custom Investments

The following financial fields are available on both the grid and the Details page for custom investments.

| Financial Field | Rules |
|-----------------|-------|
| Planned Operating Cost | Editable if you have edit permissions |
| Planned Cost | Read-only; sum of Planned Capital and Planned Operating Cost |
| Planned Cost Start | Read-only; automatically set to the investment Start date |
| Planned Cost Finish | Read-only; automatically set to the investment Finish date |
| Planned Benefit | Editable if you have edit permissions |
| Planned Benefit Start | Set to TODAY on create; editable within Start/Finish range |
| Planned Benefit Finish | Set to TODAY on create; editable within Start/Finish range |
| Planned ROI | System-calculated if Calculate Financial Metrics = TRUE; otherwise manually editable |
| Planned Payback Period | System-calculated if Calculate Financial Metrics = TRUE; otherwise manually editable |
| Planned NPV | System-calculated if Calculate Financial Metrics = TRUE; otherwise manually editable |
| Planned MIRR | System-calculated if Calculate Financial Metrics = TRUE; otherwise manually editable |
| Planned Operating % | Calculated; percentage of Planned Operating Cost from Planned Cost total |
| Planned Capital % | Calculated; percentage of Planned Capital Cost from Planned Cost total |
| Is system value for Total Cost of Capital | If TRUE, use system-level total cost of capital |
| Override value for Total Cost of Capital | Determines annual finance on borrowed capital when system value is FALSE |
| Initial Investment | Defines initial cost used in all financial metric calculations |
| Is system value for Reinvestment Rate | If TRUE, use system-level reinvestment rate |
| Override Value for Reinvestment Rate | Determines annual interest rate used to reinvest positive cash flow when system value is FALSE |
| Planned Breakeven | System-calculated if Calculate Financial Metrics = TRUE; otherwise manually editable |

### Calculate Financial Metrics

- Leave **Calculate Financial Metrics** selected (default) to have the application calculate ROI, NPV, Payback Period, and MIRR automatically.
- To enter values manually, add the **Calculate Financial Metrics** field to your grid and clear the checkbox.

> [!warning]
> Any values in those fields are cleared if you re-select Calculate Financial Metrics.

## Access Rights

- At this time, investment type rights can only be assigned through global or instance rights (not OBS unit).
- The feature includes create, edit, and view rights, but no separate delete right.
- The auto-rights behave the same as for standard non-project investment custom objects.

## Currency and Financials Limitations

- The investment type grid does not support multi-currency.
- Custom investments cannot have TSVs.
- You cannot track transaction entries (timesheets or vouchers) against custom investments.

## Reports and Jobs Limitations

- Portlets, reports, and add-in content do not display investment type information.
- No data warehouse support for attributes on investment types.
- The Delete Investments and Time Reporting Periods job does not delete investment type instances.
- The Portfolio Synchronization job does not import investment type data.
- The Investment Allocation job ignores investment type data.

## Data Warehouse Reporting Capabilities

When you enable your custom investment object for the data warehouse, the schema creates a matching new dimension table. Custom Investment OOTB data is captured alongside regular Investment data in these existing Data Warehouse tables:

- `DWH_INV_INVESTMENT`
- `DWH_INV_INVESTMENT_LN`
- `DWH_INV_SUMMARY_FACTS`
- `DWH_INV_PERIOD_FACTS`

The following existing Data Warehouse security view also reflects Custom Investments:

- `DWH_INV_SECURITY_V`

> [!note]
> Data Warehouse for custom subobjects is not supported.

## Related

- [[_MOC Administration]]

%%Source: p1958-1967%%
