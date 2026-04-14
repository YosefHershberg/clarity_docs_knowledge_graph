---
title: Administration Access Rights
tags:
  - reference
  - admin
aliases:
  - Administration Rights
canonical: true
audience: everyone
domain: reference
---
# Administration Access Rights

Assign administrative access rights to grant a resource (user) more advanced permissions to pages, portlets, processes, and jobs. Audit trail, API, software download, license information, resource capacity planning, process, and portfolio access rights are also listed.

## Clarity Administration Access Rights

The following access rights are available to manage Clarity administrative tasks:

| Right Name | Description | Scope |
|---|---|---|
| Administration - Navigate | Allows user access to the Administration workspace in Clarity. The user will only be able to access administration tiles for which they have access | Global |
| Administration - Action Items - Navigate | Allows user access to Action Items under Administration in Clarity | Global |
| Administration - Actions - Navigate | Allows user access to the Actions tile under Administration in Clarity | Global |
| Administration - Attributes - Navigate | Allows user access to the Attributes management page under Administration in Clarity. The user will be able to view information related to attributes and configure attribute security via access groups | Global |
| Administration - Audit - Navigate | Allows user access to Audit under Administration in Clarity | Global |
| Administration - Authentication & Keys - Navigate | Allows user access to the Authentication & Keys tile under Administration in Clarity. The user will be able to manage keys, clients and certificates | Global |
| Administration - Blueprints - Navigate | Allows user access to the Blueprints tile under Administration in Clarity. The user will be able to manage blueprints to which they have access. Optional: Administrators with additional Blueprint access rights can create, edit or delete custom blueprints | Global |
| Administration - Feature Toggles - Navigate | Allows user access to Feature Toggles under Administration in Clarity. The user can enable or disable feature toggles | Global |
| Administration - Integrations - Navigate | Allows user access to Integrations under Administration in Clarity | Global |
| Administration - Notifications - Navigate | Allows user access to Notifications under Administration in Clarity | Global |
| Administration - Plans - Navigate | Allows user access to the Plans tile under Administration in Clarity | Global |
| Administration - Saved Views - Navigate | Allows user access to the Saved Views tile under Administration in Clarity. The user can view/edit information related to saved views and share them with specific users and groups | Global |
| Administration - Skills - Navigate | Allows user access to Skills under Administration in Clarity | Global |
| Administration - Staffing - Navigate | Allows user access to the Staffing tile under Administration in Clarity. The user must also have the Staffing Scenario - Access right to access the Scenarios tab within the Staffing tile | Global |
| Administration - System Settings - Navigate | Allows user access to the System Settings tile under Administration in Clarity | Global |
| Administration - Timesheets - Navigate | Allows user access to the Timesheets tile under Administration in Clarity | Global |
| Administration - Users - Navigate | Allows user access to the Users tile under Administration in Clarity | Global |
| Administration - Vaia - Navigate | Allows user access to the Vaia tile under Administration in Clarity | Global |
| Views - Administer | Allows a user to create and edit Recommended Views, share them with groups and individuals, and delete existing views created by others in Clarity pages where the user has access. This permission overrides the Actions configuration in the Clarity | Global |

## Classic PPM Administration Access Rights

The following access rights are available to manage administrative tasks:

| Right Name | Description | Scope |
|---|---|---|
| Administration - Access | Allows the user to access the Administration menu. Users need additional rights to perform individual administrative actions | Global |
| Administration - Application Setup | Allows users to edit the following options: Classic PPM system options and settings, including Organization and Access menu; Timesheet options, and to create, close, and mark time reporting periods for deletion; Data Administration menu and General Settings menu. Users with this access right can also run the Health Report under the Administration, Security and Diagnostics menu. Includes: Administration - Access to access the Administration menu | Global |
| Administration - Authorization | Allows users to manage resources and groups. Includes: Administration - Access | Global |
| Administration - Partition Models | Allows users to manage partition models. Requires: Administration - Access | Global |
| Administration - Resources | Allows users to navigate to the administration pages for viewing and editing resources. Requires: Resource - Edit Administration right to view individual resources | Global |
| Administration - Studio | Allows user to access Classic PPM Studio pages. This right allows the user to create, edit, and delete UI Themes. The user can view queries, portlets, and portlet pages. To manage portlets, the user requires the appropriate instance or global rights as listed in the Portlets Access Rights section. To manage objects, the user requires the object Administration right | Global |
| Administration - XOG | Allows users to import and export information through the XML Open Gateway interface | Global |

## API Access Rights

The following access rights are required for REST API access and product integrations:

| Right Name | Description | Scope |
|---|---|---|
| API - Access | Allows the user to create API Token Keys for creating connections in application that uses the REST APIs. In addition, you need the appropriate application rights to view or update specific functional areas in the product. Users can create API Token Keys with this access right by navigating to their Avatar, API keys page. The system must be enabled for using API Keys | Global |
| API Integration capabilities | Allows specific capabilities for the API integration user, like the ability to update readonly custom attributes through REST APIs | Global |

## Audit Trail Access Rights

The following access rights are available for audit:

| Right Name | Description | Scope |
|---|---|---|
| Audit Trail - Access | Allows users to access audit page | Global |
| Audit Trail - View - All | Allows users to view any audit page | Global |

## Jobs Access Rights

The following access rights are available for managing jobs:

| Right Name | Description | Scope |
|---|---|---|
| Jobs - Access | Allows users to access job pages. Additional rights such as the Jobs - Run - All right or instance level rights such as the Job - Run right, Job - View Output right, or Job - Edit Properties right are required | Global |
| Job - Edit Properties | Allows users to view and edit the job properties for specific jobs. This right also lets users reschedule jobs and view output | Global |
| Job - Run | Allows users to access and run jobs, edit job properties, and view job output. Requires: Jobs - Access access right. Some jobs may not require additional rights for successful execution. See Jobs Reference to review specific job parameters and requirements | Instance |
| Jobs - Run - All | Allows users to run any job. This right also allows users to schedule any job, edit properties for any job, and view the output of any job. Requires: Jobs - Access access right | Global |
| Jobs - View Output | Allows users to view the output of the jobs to which they have access. Requires: Jobs - Access right | Global |
| Jobs - View Output - All | Allows users to view the output of any job. Requires: Jobs - Access right | Global |
| Jobs - Administrator | Allows you to manage job definitions and job categories | Global |
| Jobs - Administrator Access | Allows users to view job definitions. With this right, users can also view jobs categories | Global |
| Jobs - Create Definition | Allows users to create, edit, and view job definitions. Requires: Jobs - Administrator Access right | Global |
| Jobs - Edit Definition | Allows users to view and change job definitions. Requires: Jobs - Administrator right | Instance |
| Jobs - Edit Definition - All | Allows users to edit any job definition. Requires: Jobs - Administrator Access right | Global |

## Integration Mapping Access Rights

| Right Name | Description | Scope |
|---|---|---|
| `<Integration Mapping>` - Delete All | Allows Clarity user to delete all `<Integration Mapping>` objects | Global |
| `<Integration Mapping>` - Edit All | Allows Clarity user to edit all `<Integration Mapping>` objects. This includes the page navigate right | Global |
| `<Integration Mapping>` - View All | Allows Clarity user to view all `<Integration Mapping>` objects. This includes the page navigate right | Global |

## Hierarchy Access Rights

| Right Name | Description | Scope |
|---|---|---|
| Hierarchy - Create | Allows users to create Hierarchy in Clarity. The creator of the Hierarchy automatically becomes the Manager and can edit or delete the Hierarchy | Global |
| Hierarchy - Delete - All | Allows users to view and delete all Hierarchies in Clarity | Global |
| Hierarchy - Edit - All | Allows users to view and edit all Hierarchies in Clarity | Global |
| Hierarchy - Navigate | Allows user access to the Hierarchies pages in Clarity. The user will only be able to view information for Hierarchies to which the user has access | Global |
| Hierarchy - View - All | Allows users to view all Hierarchies in Clarity | Global |
| Hierarchy - Manage Metrics | Allows users to create, update, and delete Hierarchy Metrics | Global |

## Menu Links Access Rights

| Right Name | Description | Scope |
|---|---|---|
| Menu Links - Create | Allows users to create new section and new links in Clarity. Includes Menu Links - View - All global access right | Global |
| Menu Links - Delete - All | Allows user to delete sections and links in Clarity. Includes Menu Links - View - All global access right | Global |
| Menu Links - Edit - All | Allows user to edit the sections and links in Clarity. Includes Menu Links - View - All global access right | Global |
| Menu Links - Navigate | Allows user to access the Menu Links page in the Clarity | Global |
| Menu Links - View - All | Allows user to view all sections and links in Clarity | Global |

## License Information Access Group Rights

To view license information, you must either be associated with the License Information Access group or be assigned each of the access rights. This access group allows users to view and navigate license information pages and portlets and includes the following access rights:

| Right Name | Description | Scope |
|---|---|---|
| Page - View | Allows users to view a general page in Classic PPM. For instance pages (such as portfolio pages), this right is not required | Instance |
| Portlet - View | Allows users to view a specific portlet | Instance |

## Page Access Rights

The following access rights are available for pages:

| Right Name | Description | Scope |
|---|---|---|
| Page - Create | Allows users to create Pages in the Clarity | Global |
| Page - Delete - All | Allows users to delete Pages in the Clarity | Global |
| Page - Edit - All | Allows users to view and edit all Pages in the Clarity | Global |
| Page - Navigate | Allows users access to the Pages in the Clarity. The user will only be able to view information for Pages to which the user has access | Global |
| Page - View | Allows users to view a general page in Classic PPM. For instance pages (such as portfolio pages), this right is not required | Instance |
| Page Definition Editor | Allows users to edit, view, and delete the definition of a specific page. Required: Administration - Studio access right to access the Classic PPM Studio menu | Instance |
| Page Definition Editor - All | Allows users to edit, view, and delete the definition of all pages. Required: Administration - Studio access right to access the Classic PPM Studio menu | Global |
| Page Definition Viewer | Allows the user to view the definition of a specific page. Required: Administration - Studio access right to access the Classic PPM Studio menu | Instance |
| Page Definition Viewer - All | Allows the user to view the definition of all pages. Required: Administration - Studio access right to access the Classic PPM Studio menu | Global |
| Page Viewer - All | Lets the user view any configured portlet page. Before the users can view them, link the portlet pages to a menu. The user requires the rights to navigate the menu. For example, if a page links to the Administration menu, the users require the Administration - Access right | Global |

## Portlet Access Rights

The following access rights are available for portlets:

| Right Name | Description | Scope |
|---|---|---|
| Portlet - Create | Allows user to create new portlets in the application | Global |
| Portlet - Edit All | Allows user to view and edit the definition of all user defined portlets in application | Global |
| Portlet - Navigate | Allows user to navigate to Portlet configuration pages | Global |
| Portlet Definition Editor | Allows the user to edit and view the definition of a specific portlet. Requires: Administration - Studio to access the Studio menu | Instance |
| Portlet Definition Editor - All | Allows a user to edit and view the definitions of all portlets available from Studio. Requires: Administration - Access to access the Administration and Studio menus | Global |
| Portlet - View | Allows users to view a specific portlet | Instance |
| Portlet Viewer - All | Lets you view and add stock portlets to portlet pages. The right helps add a stock portlet to a personal dashboard | Global |

## Portfolio Access Rights

The following access rights are available to resources, groups, and OBS units to create, view, and edit a portfolio:

| Right Name | Description | Scope |
|---|---|---|
| Portfolio - Navigate | Allows users to access the Portfolio Management menu | Global |
| Portfolio - Create | Allows users to create portfolios. Includes: Portfolio - Navigate to access Portfolio Management menu | Global |
| Portfolio - Create Scenarios | Allows user to create scenarios for a specific portfolio. Requires: Portfolio - Navigate to access the Portfolio Management menu and Portfolio - View to view a specific portfolio | Instance |
| Portfolio - Edit | Allows users to view, edit, and delete specific portfolios. This right also lets users change the portfolio layout and attach, modify, or delete a scenario. With this right, users can view investments, scenarios, and portlets in the portfolio to which they have access. Requires: Portfolio - Navigate to access the Portfolio Management menu | Instance |
| Portfolio - Edit - All | Allows users to view, edit, and delete all portfolios. Users can see only the investments, scenarios, and portlets to which they have access. Requires: Portfolio - Navigate to access the Portfolio Management menu | Global |
| Portfolio - Edit Access Rights | Allows users to view, edit, and delete the access rights for portfolios to which they have access. Requires: Portfolio - Navigate to access the Portfolio Management menu | Instance |
| Portfolio - Edit Access Rights - All | Allows users to view, edit, and delete the access rights for any portfolio to which they have access. Required: Portfolio - Navigate to access the Portfolio Management menu | Global |
| Portfolio - Manager - Auto (Automatic) | Automatically assigned when users create an investment or are assigned as the manager of an investment. This right allows users to view, edit, and delete the portfolios that they create. The Portfolio - Navigate right is required. Equivalent to the Portfolio - Edit access right; includes Portfolio - Read, Portfolio - Edit, Portfolio - Delete, and Portfolio - Navigate. If you reassign the portfolio manager, this access right transfers to the new manager | Instance |
| Portfolio - View | Allows you to view a specific portfolio. Required: Portfolio - Navigate to access the Portfolio Management menu | Instance |
| Portfolio - View Access Rights - All | Allows users to view the access rights for all Portfolios. Does not include the Portfolio - Navigate or Portfolio - View rights. Requires: Portfolio - Navigate to access the Portfolio Management menu | Global |
| Portfolio - View - All | Allows users to view all portfolios. Users can view only investments, scenarios, and portlets in the portfolio to which they have access. Requires: Portfolio - Navigate to access the Portfolio Management menu | Global |

## Process Access Rights

The following access rights are available to work with processes:

| Right Name | Description | Scope |
|---|---|---|
| Process Access | Allows the user to access the process pages | Global |
| Process - AutoStart - All | Allows resource to auto start a new process instance from any of the process definitions in the system | Global |
| Process - Cancel | Allows users to cancel process instances from a specific process definition | Instance |
| Process - Cancel - All | Allows users to cancel of all process instances | Global |
| Process - Create Definition | Allows users or OBS unit to create or change processes for any object type to which they have access. Users with this right can modify, copy, or start any process that they create | Global |
| Process - Delete | Allows users to delete process instances from a specific process definition | Instance |
| Process - Delete - All | Allows users to delete a process instance from any process definition | Global |
| Process - Edit Definition | Allows users to edit a specific process definition, but cannot start any process instances | Instance |
| Process - Edit Definition - All | Allows users to edit all process definitions. Typically, this right is given to administrators and senior executives. Users with this right cannot start processes | Global |
| Process - Manage | Allows users to start automatically a process instance for the process definition to which they have access. Users can also start a new process instance, delete a process instance, or cancel a process instance | Instance |
| Process - Manage - All | Allows users to start automatically any process. This right is typically given to administrators and senior executives. Users with this right can change processes that they create and can start processes for objects to which they have access. This access right also allows users to start a new process instance, delete a process instance, or cancel a process instance | Global |
| Process - Start | Allows users to start a new process instance from a specific process definition | Instance |
| Process - Start - All | Allows users to start (that is, initiate) of all process instances | Global |
| Process - View Definition | Allows users to view the process definition from the objects to which they have access. Users with this right cannot start processes | Instance |
| Process - View Definition - All | Allows users to view all process definitions. Typically, this right is administrators and senior executives. Users with this right cannot start processes | Global |
| Process Engine Monitoring | Allows users to navigate to process engine monitoring and administration | Global |
| Process Notification - XOG Access | Allows users to import and export Process Notification instances using the XML Open Gateway interface | Global |
| Process View Instance - All | Allows users to view all process instances | Global |

## Scenario Access Rights (Capacity Planning)

> [!tip]
> Capacity planning scenarios are designed for you to view a subset of all resources or investments. Limit resources or investments through a security OBS or through instance-level resource access rights. A more manageable amount of data displays for those resources and investments you manage. Additionally, avoid accessing capacity planning scenarios as a Classic PPM administrator or as a user with global access rights to all resources.

The following access rights are available to work with capacity planning scenarios:

| Right Name | Description | Scope |
|---|---|---|
| Scenario - Edit | Allows users to edit and delete a specific scenario. Includes: Scenario - View and the ability to delete the scenario. Requires: Portfolio - Navigate | Instance |
| Scenario - Edit Access Rights | Allows users to edit access rights for a specific scenario. Requires: Portfolio - Navigate, Portfolio - View, or Scenario - View | Instance |
| Scenario - Manager - Automatic | When you create a scenario, access is automatically assigned. The access allows you to view, edit, and delete scenarios that you own. You can also view, edit, and delete access for that scenario | Instance |

## Related
- [[Overview]]
- [[_MOC Reference]]

%%Source: p3618-3625%%
