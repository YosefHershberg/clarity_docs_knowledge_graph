---
title: Set Up GL Accounts and Process Chargebacks
tags:
  - admin
  - howto
aliases:
  - General Ledger
  - Chargebacks
canonical: true
audience: finance, pm
domain: financials
---

# Set Up GL Accounts and Process Chargebacks

Chargebacks represent inter-department account transfers of investment or service costs. A chargeback is a debit or charge to departments for their shared cost of investments or services delivered during a specified period.

**Prerequisites before setting up chargebacks and GL accounts:**
- Financial entity with defined fiscal time periods
- Financial departments and locations
- Financial classes
- Financially enabled investments or services
- Financially enabled team members
- Appropriate user access rights

## Set Up General Ledger Accounts

GL accounts are combinations of main account codes and subaccount codes used to categorize accounts.

> [!NOTE]
> Before you set up GL accounts, verify that a financial entity exists.

Follow these steps:

1. Open **Administration**, and from **Finance**, click **GL Accounts**
2. Click **New**
3. Complete the requested information:

| Field | Description |
|---|---|
| **Main Account ID** | First part of the natural account number |
| **Sub Account ID** | Second part of the natural account number |
| **Is Active** | Whether this account is active |
| **Overhead** | Whether this account charges costs to designated departments |
| **Capital Expense** | Whether this account is used for capital expense |
| **Noncash Expense** | Whether this account is used for noncash expense |

4. Click **Save**

## Set Up Chargeback Rules

Rules drive chargebacks and credits for investment and service costs. The following chargeback rule types are supported:

| Rule Type | Purpose |
|---|---|
| **Investment-specific Debit Rules** | Determines how to debit departments for the cost of a specific investment or service |
| **Standard Debit Rules** | A standard set of debit rules usable globally within an entity |
| **Credit Rules** | Determines which departments are credited for the cost of investments or services |
| **Overhead Rules** | Determines how to charge remaining or overhead costs |

### Create Overhead Rules

Follow these steps:

1. Open **Administration**, and from **Chargebacks**, click **Overhead Rules**
2. Click **New**
3. Enter the following information:
   - **Entity**: Defines the entity that is associated with the rule
   - **GL Account**: Defines the GL account that is associated with the rule
   - **Department**: Defines the department that is associated with the rule
4. Save changes
5. Define the overhead rule details (percentage, time periods)

## Set Investment Chargeback Options

Follow these steps:

1. Open an investment or service
2. Open the **Chargebacks** menu and click **Options**
3. Complete:
   - **Chargeback Type**: Standard or Investment
   - **Bill Expense Type**: Capital expense (charged for invoicing) or Depreciation (not charged for invoicing)
4. Save the changes

## Reverse Charges on Transactions

If you find errors in processed chargeback transactions, you can reverse charges on selected or all listed transactions.

Follow these steps:

1. Open the investment or service
2. Open the **Chargebacks** menu and click **Transactions**
3. Filter for the fiscal period
4. Review the transactions
5. If transactions are incorrect:
   - Select each transaction and click **Reverse Selected Charges**
   - Or click **Reverse Filtered Charges** to reverse all listed transactions

> [!IMPORTANT]
> Reversals are available only for transactions that have not been invoiced and approved. Once a reversal is made, the adjusted amount appears on the next unlocked or future invoice.

## View Department Recovery Statements

A recovery statement tells departments how much of their incurred costs can be recovered. Only departments that provide services can view department recovery statements.

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**
2. Click a department link to open the department
3. Click **Recovery Statement**
4. Filter for recovery information
5. Review the recovery information

## Submit and Approve Department Invoices

Each department that is charged receives an invoice for each time period.

**Invoice Approval Workflow:**

1. The **Generate Invoice** job creates the invoice (Status: **Proforma**)
2. Finance manager submits the invoice → Status changes to **Submitted** (invoice is locked)
3. Department manager **Approves** or **Rejects**:
   - Approved → Status: **Approved** (no further changes possible)
   - Rejected → WIP adjustments can be made; re-submit after corrections

> [!NOTE]
> If a recalculation affects multiple invoices and any affected invoice is locked, the recalculation is ignored. Run the **Update Aggregated Data** job before regenerating invoices to ensure hierarchy data is current.

## Related
- [[Charge Codes and Vendors]]
- [[Transactions and WIP]]
- [[Financial Entity Setup]]
- [[_MOC Financials]]

%%Source: p2181-2195%%
