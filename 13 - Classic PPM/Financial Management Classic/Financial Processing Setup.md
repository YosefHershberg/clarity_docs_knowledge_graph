---
title: Financial Processing Setup — Enable Investments, Resources, Roles (Classic PPM)
tags:
  - classic
  - howto
  - admin
source_pages: 2156-2176
---
# Enable Investments, Resources, and Roles for Financial Processing (Classic PPM)

To use financial management and process actual costs against investments, define the financial properties for both investments and the resources/roles assigned to them.

## Enable Investments for Financials

Financially enabling investments ensures that actual costs from posted transactions appear on cost plans, reports, portfolios, and other areas. Setting financial status to "Open" without completing required financial setup causes errors during transaction processing.

### Steps

1. Open **Home > Portfolio Management > Projects** (or other investment type)
2. Open the investment
3. Open **Properties** menu > **Settings**
4. In the **Financial** section, complete:
   - **Company Name** — Company sponsoring the project
   - **Affiliated Project** — Project financially tied to this investment (for consolidated invoicing)
   - **Department** — Department used during transaction processing and cost/rate matrix matching
   - **Location** — Location for debit/credit rules and cost/rate matrix matching
   - **Financial Status**:
     - *Open* — All transactions can be fully processed
     - *Hold* — No new transactions can accumulate
     - *Closed* — No new transactions; investment closed for financial processing
   - **Type**:
     - *Standard* — Transactions accumulate; can be charged back at any time
     - *Internal* — Tracks transactions not meant for chargebacks (recommended unless exporting to third-party billing)
   - **WIP Class** — Used to match with cost/rate matrices and for reporting
   - **Investment Class** — Used to match with cost/rate matrices and for reporting
   - **Cost Type** — Capital or Operating (Default: Operating)
   - **Billing Currency** — Currency for chargebacks and financial transactions (cannot change after transactions are processed or financial plans exist)
5. In the **Labor / Material / Equipment / Expense Transaction Matrix** sections, configure:
   - **Rate Source** — Cost/rate matrix for calculating charge (billing) rate
   - **Cost Source** — Cost/rate matrix for calculating cost amount
   - **Exchange Rate Type** — Average, Fixed, or Spot (displayed only in multicurrency systems; cannot modify after project approval)
6. Save changes

## Enable Resources and Roles for Financials

Financially enabling resources ensures that actual costs from posted transactions appear on cost plans, reports, and portfolios.

> **Note:** Not all properties described below appear for roles (vs. named resources).

### Steps

1. Open **Home > Resource Management > Resources**
2. Open the resource or role
3. Open **Properties** menu > **Financial** (under Properties)
4. Complete the **Supplemental** section:
   - **Financially Active** — Enables financial management activities for this resource/role
   - **Target % Billable** — Target percentage of billing rate that is billable (informational/custom reporting)
   - **Financial Department** — Financial department (cost center) for the resource
   - **Financial Location** — Financial location of the resource
   - **Transaction Class** — User-defined value grouping transaction types for financial processing
   - **Resource Class** — Category for the financially enabled resource/role
   - **Target Billing Rate** — Targeted billing rate (informational/custom reporting)
5. Save changes

## Set Up Cost/Rate Matrix

A financial cost and rate matrix determines planned costs and billing rates for financial transactions.

### Prerequisites

1. Understand cost planning concepts: fiscal calendars, fiscal time periods, desired outcomes
2. Have a financial entity set up with location and department OBS
3. Have an active system currency configured
4. Gather information for matrix planning (role, resource, charge code, etc.)
5. Activate currencies needed for the matrix
6. (Optional) Set up cost plus codes for mark-ups

### Create a Cost and Rate Matrix

1. Click **Administration > Finance > Manage Matrix**
2. Click **New** and complete:
   - **Matrix Name** — Unique identifier
   - **Matrix Type** — Cost/Rate (default)
   - **Matrix Default Currency** — Displayed only in multicurrency systems
   - **Location** — Location OBS related to entity (leave blank to avoid unmatched rates)
   - **Entity** — Financial entity (leave blank to avoid unmatched rates)
   - **Private** — Restrict matrix to specific users
3. Click **Save and Continue**

### Assign Columns to Matrix

Columns determine the criteria for matching rates and costs to transactions. Evaluation proceeds left to right.

1. Select a matrix from **Administration > Finance > Manage Matrix**
2. Select columns from the **Available** list and click **Add**
3. Order the columns using the up/down arrows (up = left in matrix)
4. Click **Save and Continue**

### Add Rows to Matrix

Each row defines a unique combination of criteria and the associated rates/costs.

1. Select a matrix > click **Edit Matrix Rows**
2. Click **New** and complete:
   - **From Date / To Date** — Effective date range (rows must not overlap)
   - Column values (e.g., Role, Transaction Class, Location)
   - **Rate** — Billing rate for matching transactions (minimum 0.00)
   - **Standard Cost** — Standard cost for custom reporting
   - **Actual Cost** — Actual cost for custom reporting
   - **Currency** — Currency for the row (multicurrency only)
   - **Cost Plus Code** — Cost plus code for mark-ups
3. Click **Save and Return**

### Additional Matrix Operations

| Action | Steps |
|--------|-------|
| Edit current rate | Select matrix > Edit Matrix Rows > click Properties icon for row > update > Save and Return |
| Copy current rate | Select matrix > Edit Matrix Rows > check box for row > Copy > edit as needed > Save and Return |
| Rate increase | Select matrix > check row > Rate Increase > set Rate %, Standard Cost %, Actual Cost %, date ranges > Preview > Submit |
| Unlock matrices | Administration > Finance > Manage Matrix > Locked Matrices > select > Unlock |

## Related Notes

- [[Detailed Financial Plans]] — Cost plans using rate matrices
- [[Cost Plus Codes]] — Mark-up rules for matrices
- [[Financial Departments]] — Department setup
- [[Financial Locations]] — Location setup
- [[Overview]] — Full financial setup order
- [[_MOC Classic PPM]]
