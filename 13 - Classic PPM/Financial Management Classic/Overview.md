---
title: Financial Management Overview (Classic PPM)
tags:
  - classic
  - reference
  - "#concept"
source_pages: 2121-2122
---
# Financial Management Overview (Classic PPM)

Enterprise program management offices and financial managers use Classic PPM's financial management capabilities to manage long-term forecasts, short-term cost plans and budgets, and interface with legacy ERP systems and financial tools.
Financial management capabilities span the entire lifecycle of a project, application, and service.

Use Cases

- Submit project requests with high-level budgets or detailed cost-benefit analyses
- Capture actual costs as work is executed
- Revisit forecasts to track performance against the budget
- Separate capitalized expenditures from expenses for financial reporting and compliance
- Map and allocate chargebacks for equitable distribution of project costs across business units and departments

## Setup Order

Complete these steps to set up financial management (see Access Rights Reference before beginning):

1. Set Up Currencies and Foreign Exchange Rates
2. Set Up a Financial Entity and Fiscal Time Periods
3. [[Financial Locations|Set Up Financial Locations]]
4. [[Financial Departments|Set Up Financial Departments]]
5. Set Up Financial Classes
6. Set Up a Financial Cost and Rate Matrix
7. [[Cost Plus Codes|Enable Cost Plus Codes]]
8. Set Up Financial Defaults, Charge Codes, Vendors, and WIP Settings

## Key Jobs

These jobs are typically used for financial management:

- Import Financial Actuals
- Post Timesheets
- Rate Matrix Extraction
- Generate Invoices
- Post Incident Financials
- Post Transactions to Financial
- Post to WIP (optional alternative to the Post to WIP page)

For chargebacks and invoice generation:
- Update Aggregated Data
- Purge Temporary Aggregated Data

## Automating Financial Tasks

You can create processes to automate certain financial management tasks:

- Approval or rejection of budget plans associated with cost plans
- Notification of assigned action items to project managers and team members

**Best Practices:**
- Define start conditions clearly for auto-starting transaction line-related processes; a vague start condition can accidentally launch several unwanted processes
- Defining a process to set the partition of a cost plan is not necessary ג€” cost plans inherit the partition of the investment

## Standardizing Financial Processing Rules

Navigate to **Administration > Finance > Processing** and configure:

- **Allow Chargeable Override** ג€” Whether resources can change the chargeable status of a cost code during transaction entry
- **Use Multi-Currency** ג€” Enables tracking of multiple currency codes and foreign exchange rates. **Cannot be reverted once enabled**
- **Apply Currency Precision for rate/cost** ג€” Whether currency precision is applied to rate or cost before calculations
- **Entity Based Security** ג€” Security type for financial processing:
- *None* ג€” No security
- *Strict* ג€” Access allowed only to specified financial entity objects and transactions
- *Parent* ג€” Access allowed to specified entity, its parent, and children
- **Hide Financial OBS** ג€” Hides Department and Location OBS types from OBS browse lists

## Related Notes

- [[Financial Summaries]] ג€” High-level planned/budget metrics
- [[Detailed Financial Plans]] ג€” Cost plans, benefit plans, budget plans
- [[Cost Plus Codes]] ג€” Mark-up rules
- [[Financial Processing Setup]] ג€” Enable investments, resources, roles
- [[Financial Departments]] ג€” Set up departments
- [[Financial Locations]] ג€” Set up locations
- [[_MOC Classic PPM]]

