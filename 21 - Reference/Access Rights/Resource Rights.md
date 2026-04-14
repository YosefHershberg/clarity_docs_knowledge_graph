---
title: Resource Management Access Rights
tags:
  - reference
  - admin
aliases:
  - Resource Rights
canonical: true
audience: everyone
domain: reference
---
# Resource Management Access Rights

This page lists the required access rights for resource management, requisitions, and capacity planning scenarios.

- Resource Access Rights
- Additional Access Rights for Requisitions
- Scenario Access Rights (Capacity Planning)

## Resource Access Rights

The following access rights allow you to create, view, and edit resource properties:

| Right Name | Description | Scope |
|---|---|---|
| Administration - Resources | Allows users to navigate to the administration pages for viewing and editing resources. Requires: Resource - Edit Administration right to view individual resources | Global |
| Resource - Approve Timesheet | Allows users to approve and reject timesheets for a specific resource. The right does not include the Resource - Enter Time right | Instance |
| Resource - Create | Allows users to create a resource or role, and edit properties. The right allows users to create labor and nonlabor resources. Requires: Resource - Navigate right | Global |
| Resource - Delete - All | Allows user to delete inactive resources or roles (but not teams). Includes the Resource View - All global access right | Global |
| Resource - Edit | Allows users to view and edit general information, contact information, financial information, skills, and the calendar for a resource. Requires: Resource - Navigate right | Instance |
| Resource - Edit - All | Allows users to view and edit general information, contact information, financial information, skills, and calendar for all resources. Requires: Resource - Navigate right | Global |
| Resource - Edit Access Rights | Allows users to grant or revoke access rights for a specific resource. Requires: The Resource - Edit Administration right and either the Resource - View or the Resource - View - All right | Instance |
| Resource - Edit Administration | Allows users to edit a specific resource from administration pages. Requires: Administration - Resources right | Instance |
| Resource - Edit Calendar | Allows users to edit their own calendar. Requires: Resource - Navigate right | Instance |
| Resource - Edit Financial - All | Allows users to view general and financial properties, and to edit only the financial properties for all resources. Requires: Resource - Navigate right | Global |
| Resource - Edit General | Allows users to view and edit general information, contact information, skills, and the calendar of a resource. Requires: Resource - Navigate right | Instance |
| Resource - Edit General - All | Allows users to view and edit properties for a resource: general information, contact details, skills, and their calendar. Requires: Resource - Navigate right | Global |
| Resource - Enter Time | Allows users to complete and submit timesheets for a specific resource | Instance |
| Resource - External Access | Allows users access to the Resources, Resource Finder, and Resource Requisitions menus and property pages under Resource Management in Classic PPM. Controls user read/write access to data on these pages by setting the instance and global access rights for resources, projects, and requisitions | Global |
| Resource - Hard Book | Allows users to soft and hard book a specific resource for investments to which they have view or edit rights | Instance |
| Resource - Hard Book - All | Allows users to soft and hard book all resources for investments to which they have view or edit rights | Global |
| Resource - Navigate | Allows users to access resource management pages | Global |
| Resource - Soft Book | Allows users to soft book a specific resource or role to an investment to which they have edit rights | Instance |
| Resource - Soft Book - All | Allows a user to soft book resources to investments for which the user has project management edit rights (Project - Edit Management) or investment edit rights. The right also allows the user to edit or remove any soft-booking for the specified resource | Global |
| Resource - Update Skills | Allows users to create, edit, and view the skills for a specific resource. This right also allows users to view information about the resource. Requires: Resource - View right for the resource | Instance |
| Resource - Update Skills - All | Allows users to create, edit, and view the skills of all resources. The right also allows users to view general information of resources. Requires: Resource - View right | Global |
| Resource - View | Allows users to view all of information for a specific resource, except for financial information | Instance |
| Resource - View - All | Allows users to view information, except the financial properties of all resources. This right is also required for an advanced user or manager to mark a resource or role for deletion in the system | Global |
| Resource - View Access Rights | Allows users to view access rights for a specific resource. Requires: Resource - View right or Resource - Edit Administration right | Instance |
| Resource - View Book | Allows users to view bookings for a specific resource | Instance |
| Resource - View Book - All | Allows users to view bookings for all resources | Global |
| Resource - View Financial | Allows users to view general and financial information for a specific resource. Required: Resource - Navigate right | Instance |
| Resource - View Financial - All | Allows users to view financial properties for all resources. Required: Resource - Navigate right | Global |
| Resource Management - Navigate | Allows user access to the resource management pages in Clarity. The user can only view resource information for resources to which the user has access | Global |
| Team - Delete - All | Allows user to delete teams in Clarity. Includes the Team - View - All global access right | Global |

> [!note]
> The 'Resource - Edit Administration' right is only available as an OBS Unit or Instance access right. Hence, you can use a combination of the Global 'Administration - Resources' access right and control access through OBS Unit or Instance rights to control which users can be managed in Administration. The 'Administration - Authorization' global access right allows users to update any resource in the system without additional access rights.

## Additional Access Rights for Requisitions

In addition to the Resource access rights, you may need the following rights to manage requisitions:

| Right Name | Description | Scope |
|---|---|---|
| Project - Attach Requisitions Entry Resources - All | Lets you attach resources to requisition entries and includes adding, editing, proposing, or deleting resources from the request results page. This right lets users change project status to Proposed and Booked. This right includes the Project - View Requisitions access right | Global |
| Project - Create/Edit Requisitions - All | Allows you to create new requisitions, edit existing requisitions, and delete requisitions. Also, allows you to view the requisition resources and change a requisition status at any time. With this access right, if you also have the Project - Edit rights, then you can also accept requisitions | Global |
| Project - View Requisitions - All | Allows the user to view requisitions and the requisition resources | Global |
| Process - Create Definition | Allows you to create new process definitions for a requisition | Global |
| Process - Initiate | Allows you to start a new process instance for a requisition | Global |

## Scenario Access Rights (Capacity Planning)

> [!tip]
> Capacity planning scenarios are designed for you to view a subset of all resources or investments. Limit resources or investments through a security OBS or through instance-level resource access rights. A more manageable amount of data displays for those resources and investments you manage. Additionally, avoid accessing capacity planning scenarios as a Classic PPM administrator or as a user with global access rights to all resources.

| Right Name | Description | Scope |
|---|---|---|
| Scenario - Edit | Allows users to edit and delete a specific scenario. Includes: Scenario - View and the ability to delete the scenario. Requires: Portfolio - Navigate | Instance |
| Scenario - Edit Access Rights | Allows users to edit access rights for a specific scenario. Requires: Portfolio - Navigate, Portfolio - View, or Scenario - View | Instance |
| Scenario - Manager - Automatic | When you create a scenario, access is automatically assigned. The access allows you to view, edit, and delete scenarios that you own. You can also view, edit, and delete access for that scenario | Instance |

## Related
- [[Overview]]
- [[_MOC Reference]]

%%Source: p3721-3723%%
