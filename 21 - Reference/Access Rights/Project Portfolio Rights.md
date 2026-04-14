---
title: Project and Portfolio Management Access Rights
tags:
  - reference
  - admin
aliases:
  - Project Portfolio Rights
canonical: true
audience: everyone
domain: reference
---
# Project and Portfolio Management Access Rights

The following access rights are required for users to work with projects, programs, timesheets, earned value, and portfolio management.

- Earned Value Definition Rights
- Program Access Rights
- Project Access Rights
- Project Hierarchy Access Rights
- Timesheets Access Rights
- Portfolio Management Access Rights

## Earned Value Definition Rights

The following access rights are available for users who work with earned value definitions:

| Right Name | Description | Scope |
|---|---|---|
| Earned Value Definition - Create | Allows users to create a new earned value definition | Global |
| Earned Value Definition - Edit Access Rights - All | Allows users to edit the access rights for all earned value definitions. Requires: Earned Value Definition - Navigate right or Earned Value Definition - View right | Global |
| Earned Value Definition - Edit All | Allows users to edit any earned value definition | Global |
| Earned Value Definition - Navigate | Allows users to access any earned value definition pages | Global |
| Earned Value Definition - View All | Allows users to view any earned value definition | Global |

## Program Access Rights

The following access rights are available for users who create and edit programs and subprojects:

| Right Name | Description | Scope |
|---|---|---|
| Management - Programs | Allows the user to navigate to Programs and access the programs to which they have access. This right is dependent on the user having project view or edit rights to the programs and subprojects | Global |
| Project - Approve | Allows the user to approve a specific project. This right includes the Project - Edit access right | Instance |

## Project Access Rights

The following access rights are available for users who work with projects.

> [!note]
> The billing access rights are deprecated. Billing functionality has been discontinued in the product.

| Right Name | Description | Scope |
|---|---|---|
| Project - Approve | Allows users to approve a specific project. Includes: Project - Edit right to edit the project | Instance |
| Project - Approve - All | Allows users to approve all projects. Includes: Project - Edit - All right to edit all projects | Global |
| Project - Benefit Plan - Edit | Allows users to edit the benefit plans for a specific project | Instance |
| Project - Benefit Plan - Edit - All | Allows users to edit the benefit plans for all projects | Global |
| Project - Benefit Plan - View | Allows users to view the benefit plans for a specific project | Instance |
| Project - Benefit Plan - View - All | Allows users to view the benefit plans for all projects | Global |
| Project - Budget Plan - Approve | Allows users to approve the budget plans for a specific project | Instance |
| Project - Budget Plan - Approve All | Allows users to approve the budget plans of any project | Global |
| Project - Budget Plan - Edit | Allows users to edit the budget plans for a specific project | Instance |
| Project - Budget Plan - Edit All | Allows users to edit the budget plans of any project | Global |
| Project - Budget Plan - View | Allows users to view the budget plans for a specific project | Instance |
| Project - Budget Plan - View All | Allows users to view budget plans for all projects | Global |
| Project - Cost Plan - Edit | Allows users to edit the cost plans for a specific project | Instance |
| Project - Cost Plan - Edit All | Allows users to edit cost plans for all projects | Global |
| Project - Cost Plan - View | Allows users to view the cost plans for a specific project | Instance |
| Project - Cost Plan - View All | Allows users to view cost plans for all projects | Global |
| Project - Create | Allows you to create new projects and define the general properties. Includes: Project - Create from Template right to create a project using a template | Global |
| Project - Create from Template | Allows user to create a new project by using only templates | Global |
| Project - Delete | Allows users to mark specific inactive projects for deletion or to cancel the Marked for Deletion flag before the Delete Investments job runs. Requires: Project - View to view the project | Instance |
| Project - Delete - All | Allows users to mark any inactive project for deletion or to cancel the Marked for Deletion flag before the Delete Investments job runs | Global |
| Project - Edit | Allows the user to edit all parts of a project including project financial settings, cost type, capitalization % on staff record, and view and manage the Project Hierarchy | Instance |
| Project - Edit Access Rights - All | Allows users to manage access rights for project. Requires: Project - Edit Management right to manage access rights for all projects | Global |
| Project - Edit Assigned Tasks | Allows the user to edit assigned tasks on a specific project | Instance |
| Project - Edit Assigned Tasks - All | Allows the user to edit assigned tasks on all projects | Global |
| Project - Edit Enable Financial | Allows user to edit financial properties on the project Settings page including Company Name, Affiliated Project, Department, Location, WIP Class, Investment Class, Cost Type value at the project and task level, and Capitalization % for project staff. Requires: Project - View and Project - View Management or Project - Manager | Global |
| Project - Edit Financial | Allows user to edit the general and management properties, roster and key tasks. This right also allows a user to edit Cost Type value at the project and task level and Capitalization % for project staff | Instance |
| Project - Edit Financial - All | Allows users to view and edit the general properties, processes, and financial information about all projects. This right also allows the user to enable financial projects and secure the default and custom attributes available on the financial settings subpage in Classic PPM. Also allows editing Cost Type value and Capitalization % | Global |
| Project - Edit Management | Allows users to edit general and management properties, to add staff, create tasks, and create and manage processes for the specific project. This right includes the ability to add subprojects and to edit the project in a project scheduler, such as Microsoft Project | Instance |
| Project - Edit Management - All | Allows the user to edit general and management properties for all projects. This right allows you to add staff and create tasks. This right also includes the right to add subprojects to the project and edit the project in an integrated scheduler | Global |
| Project - Edit Project Plan | Allows users to add unplanned tasks to a specific project when completing their timesheets when they are a team member on the project | Instance |
| Project - Edit Project Plan - All | Allows users to add unplanned tasks to any project when completing their timesheets when they are a team member of those projects | Global |
| Project - Financial Plan - Submit for Approval | Allows users to submit the financial plans for approval for a specific project | Instance |
| Project - Manager (Auto) | Allows the user to view and edit general and management properties for the projects and programs to which they have access | Instance |
| Project - Modify Baseline | Allows user to baseline a project. The right also allows a resource to edit the general project properties and processes | Instance |
| Project - Modify Baseline All | Allows resource to create and update baselines for all Projects. Requires the user to have the Project - Edit access right | Global |
| Project - Risk, Issue, Change Request - Create | Allows users to create Project risks, issues, and change requests in Clarity | Global |
| Project - Risk, Issue, Change Request - Create/Edit | Allows users to create and edit risks, issues, and changes for a specific project | Instance |
| Project - Risk, Issue, Change Request - Delete | Allows users to delete risks, issues, and changes for a specific project on which they are a staff member | Instance |
| Project - Risk, Issue, Change Request - Delete - All | Allows you to delete risks, issues, and change requests for all projects | Global |
| Project - Risk, Issue, Change Request - Edit - All | Allows you to create and edit risks, issues, and change requests for any project | Global |
| Project - Risk, Issue, Change Request - View | Allows users to view all risks, issues, and change requests for a specific project | Instance |
| Project - Risk, Issue, Change Request - View - All | Lets you view all risks, issues, and change requests for a specific project | Global |
| Project - Schedule in Browser | Allows user to auto-schedule a project in the Gantt view. Auto-scheduling a project is restricted to users with the Project - Edit Management access right | Global |
| Project - View | Allows users to view management properties, roster, and key tasks of a specific project. This right also allows users to view the project in a project scheduler, such as Microsoft Project or OWB. This right also includes financial view rights for the project | Instance |
| Project - View Access Rights - All | Allows users to view access rights for a project. In the Home menu, this right implies that users also have the Project - View access right to the project. In the Administration menu, users must also have the Resource - Edit Administration right | Global |
| Project - View All Fields | Allows users to view all the general properties and custom defined fields for a specific project. This access right serves as a minimal foundation right and can be used in combination with other access rights | Instance |
| Project - View Base | Allow user to view the project overview and properties for the project. This access right serves as a minimal foundation right and can be used in combination with other access rights | Instance |
| Project - View Financial | Allows users to view the general and financial properties for a specific project | Instance |
| Project - View Financial - All | Allows users to view the general and financial properties, and processes on all projects. This right does not include the Project - Budget Plan - View All access right | Global |
| Project - View Management | Allows users to view management properties, roster, and key tasks of a specific project. This right also allows users to view the project in a project scheduler, such as Microsoft Project. To open a master project in an external project scheduler, the user also requires view or edit access to each sub-project | Instance |
| Project - View Management - All | Allows users to view management properties and processes on any project that has been enabled for management. This right allows users to view (read-only) the project in an integrated scheduler. To open a master project in an external project scheduler, the user also requires view or edit access to each sub-project | Global |
| Project - View Tasks | Allows users to view all tasks for a specific project. This access right is dependent on the resource having the Project - View Base access right | Instance |
| Project - View Tasks - All | Allows users to view tasks and work breakdown structure for any project the user has been granted access | Global |
| Projects - Navigate | Allows users to navigate to the Projects list page and to the My Projects portlet in Classic PPM | Global |

> [!note]
> If you allocate the Project - View Tasks - All access right to a user, they will see all the tasks for all projects in Clarity. If you want users to access only tasks allocated to them, please use instance rights.

## Project Hierarchy Access Rights

The following access rights are available for the project hierarchy:

| Right Name | Description | Scope |
|---|---|---|
| Project - Hierarchy - Financial Rollup - Edit | Allows user to edit the financial rollup hierarchy for the project | Instance |
| Project - Hierarchy - Financial Rollup - Edit - All | Allows users to edit the financial rollup hierarchy for any project for which they have access rights | Global |
| Project - Hierarchy - Financial Rollup - View | Allows user to view the financial rollup hierarchy for the project | Instance |
| Project - Hierarchy - Financial Rollup - View - All | Allows user to view the financial rollup hierarchy for any project for which they have access rights | Global |
| Project - Hierarchy - Financial Rollup - Add | Allows user to add investments to the financial rollup hierarchy for the project | Instance |
| Project - Hierarchy - Financial Rollup - Add - All | Allows user to add investments to financial rollup hierarchy for any project for which they have access rights | Global |
| Project - Hierarchy - Parents - Add | Allows user to add investments to the parent hierarchy for the project | Instance |
| Project - Hierarchy - Parents - Add - All | Allows users to add investments to the parent hierarchy for any project for which they have access rights | Global |
| Project - Hierarchy - Parents - Edit | Allows user to edit the parent hierarchy for the project | Instance |
| Project - Hierarchy - Parents - Edit - All | Allows users to edit the parent hierarchy for any project for which they have access rights | Global |

## Timesheets Access Rights

The following access rights are available for timesheets:

| Right Name | Description | Scope |
|---|---|---|
| Timesheets - Navigate | Allows you to navigate to timesheet pages | Global |
| Timesheets - Edit All | Allows users to edit all timesheets | Global |
| Timesheets - Approve All | Allows users to approve all submitted timesheets | Global |
| Resource - Enter Time | Allows users to complete and submit timesheets for a specific resource | Instance |
| Project - Edit Project Plan | Allows users to add unplanned tasks to a specific project when completing their timesheets when they are a team member on the project | Instance |

## Additional Global Rights

| Right Name | Description | Scope |
|---|---|---|
| Other Work - Create | Allows resources to create other work | Global |
| Other Work - Navigate | Allows resources access to the other work management pages | Global |
| Product - Create | Allows users to create products. Includes the Product - Navigate right | Global |
| Product - Navigate | Allows users to navigate to product pages. Users need additional rights to view individual products | Global |
| Resource - Create | Allows users to create a resource or role, and edit properties. The right allows users to create labor and nonlabor resources. Requires: Resource - Navigate right | Global |
| Resource - Navigate | Allows users to access resource management pages | Global |
| Timesheets - Navigate | Allows you to navigate to timesheet pages | Global |

## Related
- [[Overview]]
- [[_MOC Reference]]

%%Source: p3711-3717%%
