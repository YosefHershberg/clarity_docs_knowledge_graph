---
title: Set Up Charge Codes and Vendors
tags:
  - admin
aliases:
  - Charge Codes
  - Vendor Management
canonical: true
audience: finance, pm
domain: financials
---

# Set Up Charge Codes and Vendors

Configure financial defaults, charge codes, vendors, input type codes, and company profiles. These defaults enable investment managers and business users to perform financial management tasks.

## Add Vendors

Define your vendors to track purchases to a specific supplier of products or services.

Follow these steps:

1. Open **Administration**, and from **Finance**, click **Setup**
2. Click **Vendors**
3. Click **New**
4. Complete the requested information
5. Click **Save**

## Create Company Profiles

Create company profiles to associate with investments when integrating with third-party billing systems so you can classify the data.

> [!NOTE]
> Selecting a financial location and financial department for a company automatically populates the WIP class, investment class, and company class with default values.

Follow these steps:

1. Open **Home**, and from **Financial Management**, click **Companies**
2. Click **New**
3. Complete the requested information and click **Save**
4. Open the **Properties** menu and click **Financial**
5. Complete the requested financial fields:

| Field | Description |
|---|---|
| **Financial Status** | **Active**: Can create financially enabled investments for the company. **Inactive**: Cannot create. **No New Business**: Existing investments remain, but no new ones can be created. |
| **Financial Location** | The financial location of the company |
| **Financial Department** | The department that owns the company |
| **WIP Class** | Financial transaction category for the company |
| **Investment Class** | Investment class assignment |
| **Company Class** | Company class assignment |
| **Date Opened** | Effective date the company was financially enabled |

6. Save the changes
7. Click **Billing Addresses** and provide billing address information
8. (Optional) Open **Properties > Supplemental** to add web address, stock ticker symbol, and account manager
9. Save your changes

## Create Input Type Codes

To classify resources, control whether a transaction is chargeable, and differentiate costs and rates, create input type codes.

Follow these steps:

1. Open **Administration**, and from **Project Management**, click **Input Type Codes**
2. Click **New**
3. Complete the requested information. Key field:
   - **Chargeable**: Indicates if the input type code can be used in chargeable calculations
4. Save the changes

## Create Charge Codes

To process financial transactions and timesheets, support financial planning, and differentiate costs and rates by type of work, create charge codes.

Follow these steps:

1. Open **Administration**, and from **Project Management**, click **Charge Codes**
2. Click **New**
3. Complete the requested information. Key field:
   - **Open for Time Entry**: Specifies if the resource can use timesheets to track time on task assignments. When cleared, the charge code cannot be selected for investments, time entries, or financial transactions. Default: Selected
4. Save the changes

> [!NOTE]
> If the project management setting **Enable Investment-specific Charge Codes** is selected, an additional **Investment Name** field appears. The new charge code is then used only with that specific project for tracking time entries and financial transactions.

## Set System Defaults

Set system-level defaults for financial classes, cost/rate matrices, and other financial management settings. These can be overridden at the entity level or investment level (investment-level defaults take precedence).

Follow these steps:

1. Open **Administration**, and from **Finance**, click **Setup**
2. Click the **Defaults** link
3. In the **File Maintenance** section, select default values for entity, location, department, and financial classes
4. In the **Project** section, click **Project Transaction Entry Defaults**
5. In the **Labor** section, set: **Rate Source**, **Cost Source**, **Source Location**, **Exchange Rate Type**
6. In the **Material**, **Equipment**, and **Expense** sections, set **Rate Source**, **Source Location**, **Exchange Rate Type**
7. Click **Save and Return**
8. In the **General** section, complete:
   - **Annual Total Cost of Capital %**
   - **Annual Reinvestment Rate %**
   - **Ignore Non-Labor Roles/Resources in Cost Plan Population**
9. Save the changes

## Specify WIP Settings

WIP transactions let you adjust and review transactions before invoicing. Specify WIP settings to classify financial data in chargebacks, posted transactions, and cost plans.

> [!IMPORTANT]
> Verify that you select the same value for entity, location, and department:
> | Configuration Option | Entity | Location | Department |
> |---|---|---|---|
> | Option 1 | Project Entity | Project Location | Project Department |
> | Option 2 | Client Entity | Client Location | Client Department |
> | Option 3 | Employee Entity | Employee Location | Employee Department |
> Mismatched values can produce unexpected results in WIP transactions.

Follow these steps:

1. Open **Administration**, and from **Finance**, click **WIP Settings**
2. Complete the following fields:
   - **Entity**: Defines the entity that determines how financial data is classified
   - **Location**: Defines the location that determines how financial data is classified
   - **Department**: Defines the department that determines how financial data is classified
   - **WIP Aging Levels in Days**: Defines the number of days for each WIP level
3. Click **Save**

## Related
- [[GL Accounts and Chargebacks]]
- [[Financial Entity Setup]]
- [[_MOC Financials]]

%%Source: p2170-2175%%
