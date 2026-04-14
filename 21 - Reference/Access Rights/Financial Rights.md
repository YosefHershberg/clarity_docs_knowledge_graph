---
title: Financial Management Access Rights
tags:
  - reference
  - admin
aliases:
  - Financial Rights
canonical: true
audience: everyone
domain: reference
---
# Financial Management Access Rights

You require the following financial management access rights to work with this category:
- Financial Administration
- Financial Management
- Financial Planning
- Financial Departments
- Financial Locations

## Financial Administration

Users must be granted the following access rights if they are responsible for setting up structures:

| Right Name | Description | Scope |
|---|---|---|
| Administration - Access | Allows the user to access the Administration menu | Global |
| Financial Maintenance - Financial Organizational Structure | Allows user to configure financial setup and Chargebacks. This includes the ability to set up financial processing and setup, WIP settings, GL accounts, standard rules, credit rules, overhead rules, and messages. This right is dependent on the Administration - Access right being granted. This right does not include the Location - Navigate right to manage locations. Required: Administration - Navigate | Global |

## Financial Management

Users must be granted the following access rights to set up financial data, process and monitor transactions, and process and monitor the financial cost/rate matrix:

| Right Name | Description | Scope |
|---|---|---|
| Financial Maintenance - Financial Management | Allows users to access financial management setup features in the Administration menu | Global |
| Financial Maintenance - Define Matrix | Allows user to define financial cost plus codes. This right is dependent on the Administration - Access right being granted | Global |
| Financial Maintenance - Manage Matrix | Allows user to define financial cost or rate matrices. This right allows user to create, edit, and view cost or rate matrices; configure matrix columns; and enter rows to create matrix rules. The right also includes the capability to copy, delete, and lock or unlock matrices. This right is dependent on the Administration - Access right being granted | Global |

## Financial Planning

Users must be granted the following access rights to manage cost, benefit, and budget financial plans for any investment type:

| Right Name | Description | Scope |
|---|---|---|
| `<Investment>` - Benefit Plan - Edit | Allows the user to edit the benefit plans for a specific instance of the selected investment type | Instance |
| `<Investment>` Benefit Plan - Edit All | Allows the user to edit all benefit plans for the specified investment type | Global |
| `<Investment>` - Benefit Plan - View | Allows the user to view the benefit plans for a specific instance of the selected investment type | Instance |
| `<Investment>` Benefit Plan - View All | Allows the user to view all benefit plans for the specified investment type | Global |
| `<Investment>` - Budget Plan - Approve | Allows the user to approve the budget plans for a specific instance of the selected investment type | Instance |
| `<Investment>` Budget Plan - Approve All | Allows the user to approve all budget plans for the specified investment type | Global |
| `<Investment>` - Budget Plan - Edit | Allows the user to edit the budget plans for a specific instance of the selected investment type | Instance |
| `<Investment>` Budget Plan - Edit All | Allows the user to edit all budget plans for the specified investment type | Global |
| `<Investment>` - Budget Plan - View | Allows a resource to view the budget plans for a specific instance of the selected investment type | Instance |
| `<Investment>` Budget Plan - View All | Allows the user to view all budget plans for the specified investment type | Global |
| `<Investment>` - Cost Plan - Edit | Allows the user to edit the cost plans for a specific instance of the selected investment type | Instance |
| `<Investment>` Cost Plan - Edit All | Allows the user to edit all cost plans for the specified investment type | Global |
| `<Investment>` - Cost Plan - View | Allows the user to view the cost plans for a specific instance of the selected investment type | Instance |
| `<Investment>` Cost Plan - View All | Allows the user to view all cost plans for the specified investment type | Global |
| Cost Plan - XOG Access | Allows the user to import and export cost plan instances using the XML Open Gateway interface | Global |
| Budget Plan - XOG Access | Allows the user to import and export budget plan instances using the XML Open Gateway interface | Global |
| Benefit Plan - XOG Access | Allows the user to import and export benefit plan instances using the XML Open Gateway interface | Global |

## Financial Departments

Users must be granted the following access rights to work with departments:

| Right Name | Description | Scope |
|---|---|---|
| Department - Create | Allows users to create departments. Includes: Department - Navigate right | Global |
| Department - Edit | Lets the user edit and delete specific departments. Includes: Department - View access right. Requires: Department - Navigate right | Instance |
| Department - Edit - All | Allows users to edit and delete all departments. Includes: Department - View - All right | Global |
| Department - Edit Access Rights | Allows users to edit the access rights for a specific department. Requires: Department - Navigate right and Department - View right | Instance |
| Department - Edit Access Rights - All | Allows users to edit access rights for all departments. Requires: Department - Navigate right and Department - View right | Global |
| Department - Navigate | Lets the user navigate to department pages. Requires: Department - View - All right | Global |
| Department - View | Allows users to view specific departments. Requires: Department - Navigate right | Instance |
| Department - View - All | Allows users to view all departments. Includes: Department - Navigate right | Global |

## Financial Locations

Users must be granted the following access rights to work with locations:

| Right Name | Description | Scope |
|---|---|---|
| Location - Create | Allows users to create locations | Global |
| Location - Edit | Allows users to edit specific locations | Instance |
| Location - Edit - All | Allows users to edit all locations | Global |
| Location - Navigate | Allows users to navigate to location pages. This right is dependent on the Financial Maintenance - Financial Organizational Structure and the Administration - Access access rights being granted. To view or administer locations, the user requires the Location - View - All or the Location - Edit - All right access rights | Global |
| Location - View | Allows users to view specific locations | Instance |
| Location - View - All | Allows users to view all locations | Global |

## Related
- [[Overview]]
- [[_MOC Reference]]

%%Source: p3633-3635%%
