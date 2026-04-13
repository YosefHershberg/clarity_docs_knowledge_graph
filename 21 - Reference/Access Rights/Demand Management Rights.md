---
title: Demand Management Access Rights
tags:
  - reference
  - admin
aliases:
  - Demand Management Rights
---
# Demand Management Access Rights

Access rights for Demand Management cover Ideas and Incidents (IT Service Management requests).

## Idea Access Rights

| Right Name | Type | Description |
|---|---|---|
| Idea - Approve - All | Global | Lets you approve all ideas. |
| Idea - Approve | Instance | Allows user to approve a specific idea. |
| Ideas - Create | Global | Allows creating idea instances. Includes Ideas - Navigate. |
| Idea - Edit - All | Global | Lets you edit all ideas. Includes Idea - View and ability to delete. |
| Idea - Edit | Instance | Allows editing a specific idea. Includes Idea - View and ability to delete that idea. |
| Idea - Edit Access Rights - All | Global | Lets you edit access rights for all ideas. Does not include Ideas - Navigate or Idea - View. |
| Idea - Edit Access Rights | Instance | Allows editing access rights for a specific idea. |
| Idea - Hierarchy - Parents - Add - All | Global | Lets you add investments to Parent Hierarchy for any idea. |
| Idea - Hierarchy - Parents - Add | Instance | Allows adding investments to the Parent Hierarchy for a specific idea. |
| Idea - Hierarchy - Parents - Edit - All | Global | Lets you edit investments in the Parent Hierarchy for any idea. |
| Idea - Hierarchy - Parents - Edit | Instance | Allows editing investments in the Parent Hierarchy for a specific idea. |
| Idea - Hierarchy - Parents - View - All | Global | Lets you view investments in the Parent Hierarchy for any idea. |
| Idea - Hierarchy - Parents - View | Instance | Allows viewing investments in the Parent Hierarchy for a specific idea. |
| Idea - Initiator (Auto) | Instance | Automatically granted to the Originating Requestor when an idea is created if no Idea Manager is specified. Revoked when Idea Manager is assigned. |
| Idea - Manager (Auto) | Instance | Automatically granted to the Idea Manager. Allows edit of general properties, Links, and Conversations. |
| Ideas - Navigate | Global | Lets the user navigate to the Ideas pages. |
| Idea - View | Instance | Allows viewing a specific idea. Does not include Ideas - Navigate. |
| Idea - View - All | Global | Lets you view all ideas. Includes Ideas - Navigate. |
| Idea Management - Navigate | Global | Allows access to the Idea Management page in Clarity. |

## Resource Access Rights (Idea)

| Right Name | Type | Description |
|---|---|---|
| Resource - Approve Ideas | Instance | Allows approving Ideas for a specific Resource. Includes Resource - Edit Ideas. |
| Resource - Approve Ideas - All | Global | Lets the user approve Ideas for all Resources. Includes Resource - Edit Ideas - All. |
| Resource - Edit Ideas | Instance | Allows editing and deleting ideas for a specific Resource. Includes Resource - View Ideas. |
| Resource - Edit Ideas - All | Global | Allows editing and deleting ideas for all resources. |
| Resource - Self (Auto) | Instance | Automatically granted to the resource. Includes Resource - Edit Ideas. |
| Resource - View Ideas | Instance | Allows viewing ideas for a specific resource. |
| Resource - View Ideas - All | Global | Allows viewing ideas for all resources. Includes Ideas - Navigate. |

## Financial Access Rights for Ideas

| Right Name | Type | Description |
|---|---|---|
| Idea - View Financial Information All | Global | Allows resources to view financial properties of all ideas. |
| Idea - Edit Financial Information All | Global | Allows resources to edit financial properties of all ideas. |
| Idea - Benefit Plan - Edit All | Global | Allows resource to edit all Idea benefit plans. |
| Idea - Benefit Plan - View All | Global | Allows resource to view all Idea benefit plans. |
| Idea - Budget Plan - Approve All | Global | Allows resource to approve all Idea budget plans. |
| Idea - Budget Plan - Edit All | Global | Allows resource to edit all Idea budget plans. |
| Idea - Budget Plan - View All | Global | Allows resource to view all Idea budget plans. |
| Idea - Cost Plan - Edit All | Global | Allows resource to edit all Idea cost plans. |
| Idea - Cost Plan - View All | Global | Allows resource to view all Idea cost plans. |
| Idea - Financial Plan - Submit All for Approval | Global | Allows resource to submit all Idea financial plans for approval. |

## Incident Access Rights

Incidents are governed from incident categories. You can see only incidents mapped to categories you have access to.

| Right Name | Type | Description |
|---|---|---|
| Incidents - Access | Global | Allows the user to access the incident pages. |
| Incidents - Administrate | Global | Allows access to incident administration pages and administer category-investment mapping, category-group mapping, and priority setup. |
| Incidents - Create | Global | Allows the user to create and edit incidents with limited access to incident properties. Includes Incidents - Access. |
| Incident - Create/Edit | Instance | Allows the user to create new incidents and edit a specific incident. |
| Incidents - Create/Edit - All | Global | Allows the user to create and edit incidents on incident pages. Includes Incidents - Access and Incidents - Select Category - All. |
| Incidents - Manage Category Incidents | Instance | Allows managing incidents mapped to a specific category. Includes Incidents - Select Category. |
| Incidents - Override Priority | Global | Allows the user to override the priority of incidents they have access to. |
| Incidents - Select Category | Instance | Allows a resource to select a specific incident category. |
| Incidents - Select Category - All | Global | Allows the user to select all categories on incident pages. Includes Incidents - Access. |

## Suggested Incident Roles

| Role | Description |
|---|---|
| IT Administrator | Sets up, administers, and assigns investments to incident categories. |
| IT Manager | Responsible for assigning incidents. |
| IT Worker | Works on and resolves incidents; sees incidents "Assigned to Me". |
| Requestor | Logs new incidents with limited view of incident properties. |

## Related
- [[Overview]]
- [[IT Service Management Rights]]
- [[Financial Rights]]
- [[_MOC Reference]]

%%Source: p3626-3629%%
