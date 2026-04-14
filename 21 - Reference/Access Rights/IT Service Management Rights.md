---
title: IT Service Management Access Rights
tags:
  - reference
  - admin
aliases:
  - ITSM Rights
  - Service Rights
canonical: true
audience: everyone
domain: reference
---
# IT Service Management Access Rights

## Service Access Rights

Before working with services, you must have the necessary access rights. Contact your Classic PPM administrator for access to additional modules.

| Right Name | Type | Description |
|---|---|---|
| Service - Approve All | Global | Allows resource to approve all instances of this object type. |
| Service - Create | Global | Lets the resource create service. Includes the right to navigate to service pages. |
| Service - Edit | Instance | Lets the resource edit only selected service. Includes ability to delete the service. |
| Service - Edit - All | Global | Lets the user edit all Services. Includes ability to delete Services and Service - View - All. |
| Service - Edit Access Rights | Instance | Allows resource to edit only selected service access rights. |
| Service - Edit Access Rights - All | Global | Lets the user edit the access rights for all Services. Does not include Service - Navigate or Service - View. |
| Service - Edit Allocation Information | Instance | Allows resource to edit chargeback rules only for selected service. |
| Service - Edit Chargebacks Information | Instance | Allows user to edit chargeback rules for service. |
| Service - Edit Chargebacks Information All | Global | Allows user to edit chargeback rules for all services. |
| Service - Modify Baseline | Instance | Allows resource to create and update baselines for a specific Service. Requires Service - Edit. |
| Service Investment - Modify Baseline - All | Global | Allows resource to create and update baselines for all service investments. Requires Service - Edit. |
| Service - Navigate | Global | Lets the user navigate to Service pages. Additional access rights required to view individual Services. |
| Service - Reverse Charges | Instance | Allows resource to reverse charges only for selected service. |
| Service - View | Instance | Lets the resource view only the selected service. |
| Service - View - All | Global | Lets the user view all Services. Includes Service - Navigate. |
| Service - View Allocations | Instance | Allows resource to view allocations only for selected service. |
| Service - View Allocations - All | Global | Allows resource to access chargebacks for all services. |
| Service - View Chargebacks Information | Instance | Allows user to view chargeback rules for service. |
| Service - View Chargebacks Information All | Global | Allows user to view chargeback rules for service. |

## Role-Based Access Right Sets

### Customer Department Manager

| Right Name | Type |
|---|---|
| Department - Edit | Instance |
| Department - Navigate | Global |
| Department - View Chargeback Information | Instance |
| Ideas - Create | Global |
| Ideas - Navigate | Global |
| Page Viewer - All | Global |
| Portlet Viewer - All | Global |
| Resource - Approve Ideas - All | Global |
| Service - Edit | Instance |
| Service - View | Instance |

### IT Manager

| Right Name | Type |
|---|---|
| Department - Edit | Instance |
| Department - Navigate | Global |
| Department - View Chargeback Information | Instance |
| Ideas - Navigate | Global |
| Page Viewer - All | Global |
| Portlet Viewer - All | Global |
| Service - Create | Global |
| Service - Edit - All | Global |
| Service - Edit Access Rights - All | Global |
| Service - Navigate | Global |
| Service - View - All | Global |
| Service Investment - Modify Baseline - All | Global |

### Service Manager

| Right Name | Type |
|---|---|
| Timesheets - Navigate | Global |
| Department - View | Instance |
| Department - View Chargeback Information | Instance |
| Page Viewer - All | Global |
| Portlet Viewer - All | Global |
| Service - Edit | Instance |
| Service - Navigate | Global |
| Service - View | Instance |

### Provider Department Manager

| Right Name | Type |
|---|---|
| Department - Edit | Instance |
| Department - Navigate | Global |
| Department - View Chargeback Information | Instance |
| Page Viewer - All | Global |
| Portlet Viewer - All | Global |
| Service - Edit | Instance |
| Service - Navigate | Global |
| Service - View | Instance |

## Related
- [[Overview]]
- [[Demand Management Rights]]
- [[Financial Rights]]
- [[_MOC Reference]]

%%Source: p3636-3639%%
