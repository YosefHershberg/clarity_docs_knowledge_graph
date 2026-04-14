---
title: Other Access Rights
tags:
  - reference
  - admin
aliases:
  - Other Access Rights
canonical: true
audience: everyone
domain: reference
---
# Other Access Rights

This page covers additional Clarity PPM access rights for scenario management, software downloads, advanced reporting, demand management, IT service management, and add-in accelerators.

- [[#Scenario Access Rights]]
- [[#Software Download Access Rights]]
- [[#Advanced Reporting Access Rights]]
- [[#Demand Management Access Rights]]
  - [[#Idea Access Rights]]
  - [[#Resource Access Rights (Idea)]]
  - [[#Financial Access Rights for Ideas]]
  - [[#Incident Access Rights]]
- [[#Earned Value Manager (EVM) Add-In Access Rights]]
- [[#Financial Management Access Rights]]
- [[#IT Service Management Access Rights]]
- [[#New Product Development (NPD) Accelerator Access Rights]]
- [[#PMBOK Guide Accelerator Access Rights]]
- [[#PMO Accelerator Access Groups]]

---

## Scenario Access Rights

| Right Name | Description | Scope |
|---|---|---|
| Scenario - Navigate | Allows users to view the Scenario toolbar on capacity planning scenario-enabled pages and create new scenarios | Global |
| Scenario - View | Allows users to view a specific scenario. Requires: Portfolio - Navigate or Portfolio - View | Instance |

> [!note]
> In Clarity 16.2.3, the names and descriptions of the Scenario access rights were updated while the functionality remains unchanged.

---

## Software Download Access Rights

The following access rights are available for downloading software:

| Right Name | Description | Scope |
|---|---|---|
| Software Download - Microsoft Project Interface | Allows users to download the Classic PPM Microsoft Project Interface | Global |
| Software Download - Open Workbench | Required to download Open Workbench | Global |

---

## Advanced Reporting Access Rights

You require the following global access rights to work with Advanced Reporting (Jaspersoft):

| Right Name | Description | Scope |
|---|---|---|
| Advanced Reporting - Navigate | Allows the resource to navigate to the Advanced Reporting page. Assigns the ROLE_USER Jaspersoft role | Global |
| Advanced Reporting - Report Create | Allows the resource to create reports. Assigns the ROLE_REPORT_DESIGNER Jaspersoft role. Requires: Advanced Reporting - Navigate | Global |
| Advanced Reporting - Administer | Allows the resource to administer Advanced Reporting. Assigns the ROLE_ADMINISTRATOR Jaspersoft role. Requires: Advanced Reporting - Navigate | Global |
| Advanced Reporting - Dashboard Create | Allows the resource to create dashboards. Assigns the ROLE_DASHBOARD_DESIGNER Jaspersoft role. Requires: Advanced Reporting - Navigate | Global |
| Advanced Reporting - Ad Hoc Create | Allows the resource to create ad hoc views. Assigns the ROLE_ADHOC_DESIGNER Jaspersoft role. Requires: Advanced Reporting - Navigate | Global |
| Advanced Reporting - Data Source Create | Allows the resource to create data sources. Assigns the ROLE_DATASOURCE_DESIGNER Jaspersoft role. Requires: Advanced Reporting - Navigate | Global |
| Advanced Reporting - Domain Create | Allows the resource to create domains. Assigns the ROLE_DOMAIN_DESIGNER Jaspersoft role. Requires: Advanced Reporting - Navigate | Global |

---

## Demand Management Access Rights

Demand management includes access rights for ideas, incidents, and related resources.

### Idea Access Rights

The following access rights are required to work with ideas:

| Right Name | Description | Scope |
|---|---|---|
| Idea - Approve | Allows user to approve a specific idea | Instance |
| Idea - Approve - All | Lets you approve all ideas | Global |
| Ideas - Create | Allows you to create instances of the idea object. Includes: Ideas - Navigate access | Global |
| Idea - Edit | Allows user to edit a specific idea. Includes: Idea - View access right and ability to delete a specific idea. Does not include Ideas - Navigate | Instance |
| Idea - Edit - All | Lets you edit all ideas. Includes: Idea - View access and ability to delete all ideas | Global |
| Idea - Edit Access Rights | Allows user to edit the access rights for a specific idea. Does not include Ideas - Navigate or Idea - View access rights | Instance |
| Idea - Edit Access Rights - All | Lets you edit the access rights for all ideas. Does not include Ideas - Navigate or Idea - View access | Global |
| Idea - Hierarchy - Parents - Add | Allows users to add investments to the Parent Hierarchy for a specific idea | Instance |
| Idea - Hierarchy - Parents - Add - All | Lets you add investments to the Parent Hierarchy for any idea | Global |
| Idea - Hierarchy - Parents - Edit | Allows users to edit investments in the Parent Hierarchy for a specific idea | Instance |
| Idea - Hierarchy - Parents - Edit - All | Lets you edit investments in the Parent Hierarchy for any idea | Global |
| Idea - Hierarchy - Parents - View | Allows user to view investments in the Parent Hierarchy for a specific idea | Instance |
| Idea - Hierarchy - Parents - View - All | Lets you view investments in the Parent Hierarchy for any idea | Global |
| Idea - Initiator (Auto) | Automatically granted to the Originating Requestor when an idea is created if no Idea Manager is specified. Automatically revoked when an Idea Manager is specified | Instance |
| Idea - Manager (Auto) | Automatically granted to the Idea Manager. Allows editing general properties, Links, and Conversations. Allows viewing the Idea's parents in the Hierarchy tab in Classic PPM. Additional rights are needed for staffing, Risks/Issues/Changes, and financials | Instance |
| Ideas - Navigate | Lets the user navigate to the Ideas pages, including the right to view the Ideas link | Global |
| Idea - View | Allows user to view a specific idea. Does not include Ideas - Navigate access right | Instance |
| Idea - View - All | Lets you view all ideas. Includes: Ideas - Navigate access | Global |
| Idea Management - Navigate | Allows user access to the Idea Management page in Clarity. The user can only view ideas to which they have access | Global |

#### Resource Roles (Idea)

No idea-specific roles exist in Classic PPM. You can add the appropriate roles based on instance and global access rights provided. Example roles:

- **Manager**: The idea manager has implicit access rights to ideas they create
- **Approver**: The approver has access to approve or reject ideas, or to set ideas as incomplete

### Resource Access Rights (Idea)

The following resource rights are also available when managing ideas:

| Right Name | Description | Scope |
|---|---|---|
| Resource - Approve Ideas | Allows the user to approve Ideas for a specific Resource. Includes: Resource - Edit Ideas access right | Instance |
| Resource - Approve Ideas - All | Lets the user approve Ideas for all Resources. Includes: Resource - Edit Ideas All access right | Global |
| Resource - Edit Ideas | Allows the user to edit and delete ideas for a specific Resource. Includes: Resource - View Ideas access right but not Ideas - Navigate | Instance |
| Resource - Edit Ideas - All | Allows the user to edit and delete ideas for all resources. Includes: Resource - View Ideas All access right | Global |
| Resource - Enter Time | Allows the user to complete, submit, and reject timesheets for a resource. The Timesheets link appears on the Personal page | Instance |
| Resource - Self (Auto) | Automatically granted to the resource. Includes: Resource - Edit Ideas access right | Instance |
| Resource - View Ideas | Allows the user to view ideas for a specific resource. Includes the ability to delete ideas, but does not include Ideas - Navigate | Instance |
| Resource - View Ideas - All | Allows the user to view ideas for all resources. Includes the ability to delete ideas and the Ideas - Navigate access right | Global |

### Financial Access Rights for Ideas

You require the following access rights to work with financial plans for ideas:

| Right Name | Description | Scope |
|---|---|---|
| Idea - View Financial Information All | Allows resources to view financial properties of all ideas | Global |
| Idea - Edit Financial Information All | Allows resources to edit financial properties of all ideas. Allows viewing the Financial subpage only for ideas the resource has access to. Does not allow viewing all ideas | Global |
| Idea - Benefit Plan - Edit All | Allows resource to edit all Idea benefit plans | Global |
| Idea - Benefit Plan - View All | Allows resource to view all Idea benefit plans | Global |
| Idea - Budget Plan - Approve All | Allows resource to approve all Idea budget plans | Global |
| Idea - Budget Plan - Edit All | Allows resource to edit all Idea budget plans | Global |
| Idea - Budget Plan - View All | Allows resource to view all Idea budget plans | Global |
| Idea - Cost Plan - Edit All | Allows resource to edit all Idea cost plans | Global |
| Idea - Cost Plan - View All | Allows resource to view all Idea cost plans | Global |
| Idea - Financial Plan - Submit All for Approval | Allows resource to submit all Idea financial plans for approval | Global |

### Incident Access Rights

Incidents are typically short-lived. Access rights to incidents are governed from incident categories — you can see only incidents mapped to categories to which you have access rights. Your administrator can assign access rights to incidents, or the Incident Manager can assign access rights within the incident instance.

The following access rights are required to work with incidents and incident categories:

| Right Name | Description | Scope |
|---|---|---|
| Incidents - Access | Allows the user to access the incident pages | Global |
| Incidents - Administrate | Allows the user to access incident administration pages, and administer the category-investment mapping, category-group mapping, and priority setup | Global |
| Incidents - Create | Allows the user to create and edit incidents, giving limited access to incident properties. Includes: Incidents - Access | Global |
| Incident - Create/Edit | Allows the user to create new incidents and edit a specific incident | Instance |
| Incidents - Create/Edit - All | Allows the user to create and edit incidents on the incident pages. Includes: Incidents - Access and Incidents - Select Category - All | Global |
| Incidents - Manage Category Incidents | Allows the user to manage incidents mapped to a specific category. Includes: Incidents - Select Category | Instance |
| Incidents - Override Priority | Allows the user to override the priority of the incident to which the user has access. Resources can view the Override Priority field on the Incident Properties page | Global |
| Incidents - Select Category | Allows a resource to select a specific incident category | Instance |
| Incidents - Select Category - All | Allows the user to select all categories on incident pages. Includes: Incidents - Access | Global |

#### Resource Roles (Incident)

No default incident-specific roles exist. Example roles that can be set up based on instance and global access rights:

| Role | Description |
|---|---|
| IT Administrator | Responsible for setting up, administering, and assigning investments to incident categories. Determines which incident categories are used |
| IT Manager | Responsible for assigning incidents. Can manage incidents within their group |
| IT Worker | Responsible for working on and resolving incidents. Default view shows incidents assigned to them. Can flag an incident for conversion |
| Requestor | Responsible for logging new incidents. Has a limited view of incident properties. Can view and track their own logged incidents |

---

## Earned Value Manager (EVM) Add-In Access Rights

You require the following Earned Value Manager (EVM) access rights to work with this add-in.

### EVM Create, Edit, View, and Delete Access Rights

| Right Name | Description | Scope |
|---|---|---|
| Agency - Create | Allows you to create agencies. Includes: page navigation right | Global |
| Agency - Edit | Allows you to edit a specific agency. Does not include Agency - Navigate | Instance |
| Agency - Edit Access Rights | Allows you to edit access rights for a specific agency. Does not include Agency - Navigate or Agency - View | Instance |
| Agency - Edit - All | Allows you to edit all agencies. Includes: Agency - View - All | Global |
| Agency - Navigate | Allows you to navigate to agency pages. Additional rights required to view individual agencies | Global |
| Agency - View | Allows you to view a specific agency. Does not include Agency - Navigate | Instance |
| Agency - View Access Rights | Allows you to view access rights for a specific Agency. Does not include Agency - Navigate or Agency - View | Instance |
| Agency - View Access Rights - All | Allows you to view access rights for all agencies. Does not include Agency - Navigate or Agency - View | Global |
| Agency - View - All | Allows you to view all agencies. Includes: Agency - Navigate | Global |
| Contract - Baseline Delete | Allows you to delete baselines for a specific contract. Requires: Contract - Edit | Instance |
| Contract - Baseline Delete - All | Allows you to delete baselines for all contracts. Requires: Contract - Edit | Global |
| Contract - Baseline Edit | Allows resources to create and update baselines for a specific contract. Requires: Contract - Edit | Instance |
| Contract - Baseline Edit - All | Allows resources to create and update baselines for all contracts. Requires: Contract - Edit | Global |
| Contract - Create | Allows you to create contracts. Includes: page navigation right | Global |
| Contract - Edit | Allows you to edit a specific contract. Does not include Contract - Navigate. Includes ability to edit and delete CWBS elements, control accounts, SLPPs, and work packages | Instance |
| Contract - Edit - All | Allows you to edit all contracts. Includes: ability to delete contracts and Contracts - View - All. Includes ability to edit and delete CWBS elements, control accounts, SLPPs, and work packages | Global |
| Contract - Edit Access Rights | Allows you to edit access rights for a specific contract. Does not include Contract - Navigate or Contract - View | Instance |
| Contract - Edit Access Rights - All | Allows you to edit access rights for all contracts. Does not include Contract - Navigate or Contract - View | Global |
| Contract - Edit only | Allows you to edit but not delete a specific contract. Does not include Contract - Navigate. Includes ability to edit but not delete CWBS elements, control accounts, SLPPs, and work packages | Instance |
| Contract - Edit only - All | Allows you to edit but not delete all contracts. Includes: Contracts - View - All. Includes ability to edit but not delete CWBS elements, control accounts, SLPPs, and work packages | Global |
| Contract - Manager (Auto) | Automatically granted to the manager of a specific contract. Includes ability to edit and delete CWBS elements, control accounts, SLPPs, and work packages | Instance |
| Contract - Navigate | Allows you to navigate to Contract pages. Additional rights required to view individual contracts | Global |
| Contract - View | Allows you to view a specific contract. Does not include Contract - Navigate | Instance |
| Contract - View - All | Allows you to view all contracts. Includes: Contract - Navigate | Global |
| Contract - View Access Rights | Allows you to view access rights for a specific contract. Does not include Contract - Navigate or Contract - View | Instance |
| Contract - View Access Rights - All | Allows you to view access rights for all contracts. Does not include Contract - Navigate or Contract - View | Global |
| Control Account - Create | Allows you to create control accounts. Includes: ability to create work packages | Global |
| Control Account - Edit | Allows you to edit a specific control account. Does not include Control Account - Navigate. Includes: ability to edit and delete work packages | Instance |
| Control Account - Edit - All | Allows you to edit all control accounts. Includes: Control Account - View All and ability to edit and delete all work packages | Global |
| Control Account - Edit Access Rights | Allows you to edit access rights for a specific control account. Does not include Control Account - Navigate or Control Account - View | Instance |
| Control Account - Edit Access Rights - All | Allows you to edit access rights for all control accounts. Does not include Control Account - Navigate or Control Account - View | Global |
| Control Account - Manager (Auto) | Automatically granted to the manager of a specific control account. Includes: ability to create, edit, and delete work packages | Instance |
| Control Account - Navigate | Allows you to navigate to control account pages. Additional rights required to view individual control accounts | Global |
| Control Account - View | Allows you to view a specific control account. Does not include Control Account - Navigate. Includes: ability to view work packages | Instance |
| Control Account - View Access Rights | Allows you to view access rights for a specific control account. Does not include Control Account - Navigate or Control Account - View | Instance |
| Control Account - View Access Rights - All | Allows you to view access rights for all control accounts. Does not include Control Account - Navigate or Control Account - View | Global |
| Control Account - View - All | Allows you to view all control accounts. Includes: Control Account - Navigate and ability to view all work packages | Global |

### EVM Job Access Rights

To manage any EVM job, you must have the following access rights:

| Right Name | Description | Scope |
|---|---|---|
| Jobs - Access | Allows users access to jobs pages. Additional rights such as Jobs - Run - All or instance level rights are required | Global |
| Job - Edit Properties | Allows users to view and edit the job properties for specific jobs. Also lets users reschedule jobs and view output | Global |
| Job - Run | Allows users to access and run jobs, edit job properties, and view job output. Requires: Jobs - Access | Instance |
| Jobs - Run - All | Allows users to run any job. Also allows scheduling any job, editing properties for any job, and viewing output of any job. Requires: Jobs - Access | Global |
| Jobs - View Output | Allows users to view the output of jobs to which they have access. Requires: Jobs - Access | Global |
| Jobs - View Output - All | Allows users to view the output of any job. Requires: Jobs - Access | Global |
| Jobs - Administrator Access | Allows users to view job definitions and job categories | Global |
| Jobs - Create Definition | Allows users to create, edit, and view job definitions. Requires: Jobs - Administrator Access | Global |
| Jobs - Edit Definition | Allows users to view and change job definitions. Requires: Jobs - Administrator | Instance |
| Jobs - Edit Definition - All | Allows users to edit any job definition. Requires: Jobs - Administrator Access | Global |

---

## Financial Management Access Rights

> [!note]
> These access rights are also covered in the Financial Rights reference file. They are repeated here in the context of other add-in configurations.

### Financial Administration

Users must be granted the following access rights if they are responsible for setting up structures:

| Right Name | Description | Scope |
|---|---|---|
| Administration - Access | Allows the user to access the Administration menu | Global |
| Financial Maintenance - Financial Organizational Structure | Allows user to configure financial setup and Chargebacks, including WIP settings, GL accounts, standard rules, credit rules, overhead rules, and messages. Requires: Administration - Navigate. Does not include Location - Navigate | Global |

### Financial Management

| Right Name | Description | Scope |
|---|---|---|
| Financial Maintenance - Financial Management | Allows users to access financial management setup features in the Administration menu | Global |
| Financial Maintenance - Define Matrix | Allows user to define financial cost plus codes. Requires: Administration - Access | Global |
| Financial Maintenance - Manage Matrix | Allows user to define financial cost or rate matrices, create/edit/view matrices, configure matrix columns, and enter rows. Includes: copy, delete, lock/unlock matrices. Requires: Administration - Access | Global |

### Financial Planning

Users must be granted the following access rights to manage cost, benefit, and budget financial plans for any investment type:

| Right Name | Description | Scope |
|---|---|---|
| `<Investment>` - Benefit Plan - Edit | Allows the user to edit the benefit plans for a specific instance of the selected investment type | Instance |
| `<Investment>` - Benefit Plan - Edit All | Allows the user to edit all benefit plans for the specified investment type | Global |
| `<Investment>` - Benefit Plan - View | Allows the user to view the benefit plans for a specific instance of the selected investment type | Instance |
| `<Investment>` - Benefit Plan - View All | Allows the user to view all benefit plans for the specified investment type | Global |
| `<Investment>` - Budget Plan - Approve | Allows the user to approve the budget plans for a specific instance of the selected investment type | Instance |
| `<Investment>` - Budget Plan - Approve All | Allows the user to approve all budget plans for the specified investment type | Global |
| `<Investment>` - Budget Plan - Edit | Allows the user to edit the budget plans for a specific instance of the selected investment type | Instance |
| `<Investment>` - Budget Plan - Edit All | Allows the user to edit all budget plans for the specified investment type | Global |
| `<Investment>` - Budget Plan - View | Allows a resource to view the budget plans for a specific instance of the selected investment type | Instance |
| `<Investment>` - Budget Plan - View All | Allows the user to view all budget plans for the specified investment type | Global |
| `<Investment>` - Cost Plan - Edit | Allows the user to edit the cost plans for a specific instance of the selected investment type | Instance |
| `<Investment>` - Cost Plan - Edit All | Allows the user to edit all cost plans for the specified investment type | Global |
| `<Investment>` - Cost Plan - View | Allows the user to view the cost plans for a specific instance of the selected investment type | Instance |
| `<Investment>` - Cost Plan - View All | Allows the user to view all cost plans for the specified investment type | Global |
| Cost Plan - XOG Access | Allows the user to import and export cost plan instances using the XML Open Gateway interface | Global |
| Budget Plan - XOG Access | Allows the user to import and export budget plan instances using the XML Open Gateway interface | Global |
| Benefit Plan - XOG Access | Allows the user to import and export benefit plan instances using the XML Open Gateway interface | Global |

### Financial Departments

| Right Name | Description | Scope |
|---|---|---|
| Department - Create | Allows users to create departments. Includes: Department - Navigate | Global |
| Department - Edit | Lets the user edit and delete specific departments. Includes: Department - View. Requires: Department - Navigate | Instance |
| Department - Edit - All | Allows users to edit and delete all departments. Includes: Department - View - All | Global |
| Department - Edit Access Rights | Allows users to edit the access rights for a specific department. Requires: Department - Navigate and Department - View | Instance |
| Department - Edit Access Rights - All | Allows users to edit access rights for all departments. Requires: Department - Navigate and Department - View | Global |
| Department - Navigate | Lets the user navigate to department pages. Requires: Department - View - All | Global |
| Department - View | Allows users to view specific departments. Requires: Department - Navigate | Instance |
| Department - View - All | Allows users to view all departments. Includes: Department - Navigate | Global |

### Financial Locations

| Right Name | Description | Scope |
|---|---|---|
| Location - Create | Allows users to create locations | Global |
| Location - Edit | Allows users to edit specific locations | Instance |
| Location - Edit - All | Allows users to edit all locations | Global |
| Location - Navigate | Allows users to navigate to location pages. Requires: Financial Maintenance - Financial Organizational Structure and Administration - Access. To view or administer locations, the user also requires Location - View - All or Location - Edit - All | Global |
| Location - View | Allows users to view specific locations | Instance |
| Location - View - All | Allows users to view all locations | Global |

---

## IT Service Management Access Rights

### Service Access Rights

Before working with services, you must have the necessary access rights. The following access rights are available to access, view, or edit services:

| Right Name | Description | Scope |
|---|---|---|
| Service - Approve All | Allows resource to approve all instances of this object type | Global |
| Service - Create | Lets the resource create a service. Includes: right to navigate to service pages | Global |
| Service - Edit | Lets the resource edit only selected service. Includes: ability to delete the service | Instance |
| Service - Edit - All | Lets the user edit all Services. Includes: ability to delete Services and Service - View - All | Global |
| Service - Edit Access Rights | Allows resource to edit only selected service access rights | Instance |
| Service - Edit Access Rights - All | Lets the user edit the access rights for all Services. Does not include Service - Navigate or Service - View | Global |
| Service - Edit Allocation Information | Allows resource to edit chargeback rules only for selected service | Instance |
| Service - Edit Chargebacks Information | Allows user to edit chargeback rules for a specific service | Instance |
| Service - Edit Chargebacks Information All | Allows user to edit chargeback rules for all services | Global |
| Service - Modify Baseline | Allows resource to create and update baselines for a specific Service. Requires: Service - Edit | Instance |
| Service Investment - Modify Baseline - All | Allows resource to create and update baselines for all service investments. Also allows viewing general properties and processes | Global |
| Service - Navigate | Lets the user navigate to Service pages. Additional rights required to view individual Services | Global |
| Service - Reverse Charges | Allows resource to reverse charges only for selected service | Instance |
| Service - View | Lets the resource view only the selected service | Instance |
| Service - View - All | Lets the user view all Services. Includes: Service - Navigate | Global |
| Service - View Allocations | Allows resource to view allocations only for selected service | Instance |
| Service - View Allocations - All | Allows resource to access chargebacks for all services | Global |
| Service - View Chargebacks Information | Allows user to view chargeback rules for a specific service | Instance |
| Service - View Chargebacks Information All | Allows user to view chargeback rules for all services | Global |

### Customer Department Manager Access Rights

The following access rights are required for a Customer Department Manager:

| Right Name | Description | Scope |
|---|---|---|
| Department - Edit | Lets the user edit and delete specific departments. Includes: Department - View. Requires: Department - Navigate | Instance |
| Department - Navigate | Lets the user navigate to department pages. Requires: Department - View - All | Global |
| Department - View Chargeback Information | Lets the user view invoices and recovery statements of specific departments | Instance |
| Ideas - Create | Allows you to create instances of the idea object. Includes: Ideas - Navigate access | Global |
| Ideas - Navigate | Lets the user navigate to the Ideas pages to include the right to view the Ideas link | Global |
| Page Viewer - All | Lets the user view any configured portlet page | Global |
| Portlet Viewer - All | Lets you view and add stock portlets to portlet pages | Global |
| Resource - Approve Ideas - All | Lets the user approve Ideas for all Resources. Includes: Resource - Edit Ideas - All | Global |
| Service - Edit | Lets the resource edit only selected service. Includes: ability to delete the service | Instance |
| Service - View | Lets the resource view only the selected service | Instance |

### IT Manager Access Rights

The following access rights are required for an IT Manager:

| Right Name | Description | Scope |
|---|---|---|
| Department - Edit | Lets the user edit and delete specific departments. Includes: Department - View. Requires: Department - Navigate | Instance |
| Department - Navigate | Lets the user navigate to department pages. Requires: Department - View - All | Global |
| Department - View Chargeback Information | Lets the user view invoices and recovery statements of specific departments | Instance |
| Ideas - Navigate | Lets the user navigate to the Ideas pages to include the right to view the Ideas link | Global |
| Page Viewer - All | Lets the user view any configured portlet page | Global |
| Portlet Viewer - All | Lets you view and add stock portlets to portlet pages | Global |
| Service - Create | Lets the resource create a service. Includes: right to navigate to service pages | Global |
| Service - Edit - All | Lets the user edit all Services. Includes: ability to delete Services and Service - View - All | Global |
| Service - Edit Access Rights - All | Lets the user edit the access rights for all Services. Does not include Service - Navigate or Service - View | Global |
| Service - Navigate | Lets the user navigate to Service pages. Additional rights required to view individual Services | Global |
| Service - View - All | Lets the user view all Services. Includes: Service - Navigate | Global |
| Service Investment - Modify Baseline - All | Allows resource to create and update baselines for all Services. Requires: Service - Edit | Global |

### Service Manager Access Rights

The following access rights are required for a Service Manager:

| Right Name | Description | Scope |
|---|---|---|
| Timesheets - Navigate | Allows you to navigate to timesheet pages | Global |
| Department - View | Allows users to view specific departments. Requires: Department - Navigate | Instance |
| Department - View Chargeback Information | Lets the user view invoices and recovery statements of specific departments | Instance |
| Page Viewer - All | Lets the user view any configured portlet page | Global |
| Portlet Viewer - All | Lets you view and add stock portlets to portlet pages | Global |
| Service - Edit | Lets the resource edit only selected service. Includes: ability to delete the service | Instance |
| Service - Navigate | Lets the user navigate to Service pages. Additional rights required to view individual Services | Global |
| Service - View | Lets the resource view only the selected service | Instance |

### Provider Department Manager Access Rights

The following access rights are required for a Provider Department Manager:

| Right Name | Description | Scope |
|---|---|---|
| Department - Edit | Lets the user edit and delete specific departments. Includes: Department - View. Requires: Department - Navigate | Instance |
| Department - Navigate | Lets the user navigate to department pages. Requires: Department - View - All | Global |
| Department - View Chargeback Information | Lets the user view invoices and recovery statements of specific departments | Instance |
| Page Viewer - All | Lets the user view any configured portlet page | Global |
| Portlet Viewer - All | Lets you view and add stock portlets to portlet pages | Global |
| Service - Edit | Lets the resource edit only selected service. Includes: ability to delete the service | Instance |
| Service - Navigate | Lets the user navigate to Service pages. Additional rights required to view individual Services | Global |
| Service - View | Lets the resource view only the selected service | Instance |

---

## New Product Development (NPD) Accelerator Access Rights

The NPD Accelerator uses the following user groups. Each group has a defined set of Instance Rights, Global Rights, and Portlet Pages (dashboards):

- Executive User Group
- Marketing Manager User Group
- Non-Clarity User Group
- Product Portfolio Manager User Group
- Project Portfolio Manager User Group
- Team Member User Group

### Executive User Group

Provides security rights for users at executive or director level who need insight into portfolios of projects, products, and ideas, and who participate in gate scoring.

**Instance Rights:**
- Page - View
- Process - Start (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Gate Scoring - View All
- Idea - Hierarchy - Parents - View - All
- Idea - View All
- Ideas - Create
- Portfolio - Navigate
- Portfolio - View All
- Portlet Viewer - All
- Product - View All
- Product - View Chargebacks Information All
- Product - View Financial Information All
- Product - Benefit Plan - View All
- Project Budget Plan - View All
- Project - Cost Plan - View All
- Project - Edit Management - All
- Project - Hierarchy - Financial Rollup - View - All
- Project - Risk, Issue, Change Request - View - All
- Project - View Financial - All
- Project - View Management - All
- Project - View Requisitions - All
- Project - View Tasks - All
- Project Benefit Plan - View All
- Resource - View All
- Resource - View Book - All
- Resource - View Financial - All

**Portlet Pages:** Executive Dashboard

### Marketing Manager User Group

Provides security rights for users that manage ideas and facilitate movement of ideas into the scoring process.

**Instance Rights:**
- Page - View
- Process - Cancel (on each NPD Accelerator process)
- Process - Start (on each NPD Accelerator process)
- Process - View Definition (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Gate Scoring - Navigate
- Idea - Hierarchy - Parents - Add - All
- Ideas - Create
- Portlet Viewer - All
- Resource - Navigate
- Resource - View All
- Timesheets - Navigate

**Portlet Pages:** Idea Management Dashboard

### Non-Clarity User Group

Provides security rights for users that infrequently access Classic PPM but still need to submit product ideas.

**Instance Rights:**
- Page - View
- Process - Start (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Ideas - Create
- Portlet Viewer - All

**Portlet Pages:** Idea Management Dashboard: Overview and Idea Vault

### Product Portfolio Manager User Group

Provides security rights for users that manage products and portfolios and participate in gate scoring.

**Instance Rights:**
- Page - View
- Portfolio - Create Scenarios (on Product Master)
- Portfolio - Edit (on Product Master)
- Process - Cancel (on each NPD Accelerator process)
- Process - Start (on each NPD Accelerator process)
- Process - View Definition (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Department - View - All
- Gate Scoring - Navigate
- Idea - Hierarchy - Parents - Add - All
- Ideas - Create
- Portfolio - Create
- Portfolio - View - All
- Portlet - Viewer - All
- Product - Benefit Plan - Edit All
- Product - Budget Plan - Edit All
- Product - Cost Plan - Edit All
- Product - Create
- Resource - Navigate
- Resource - Soft Book All
- Resource - View - All
- Timesheets - Navigate

**Portlet Pages:** Idea Management Dashboard, Executive Dashboard

### Project Portfolio Manager User Group

Provides security rights for users that manage projects and portfolios and participate in gate scoring.

**Instance Rights:**
- Page - View
- Portfolio - Create Scenarios (on Project Master)
- Portfolio - Edit (on Project Master)
- Process - Cancel (on each NPD Accelerator process)
- Process - Start (on each NPD Accelerator process)
- Process - View Definition (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Department - View - All
- Gate Scoring - Navigate
- Ideas - Create
- Portfolio - View - All
- Portlet Viewer - All
- Project - Benefit Plan - Edit All
- Project - Budget Plan - Edit All
- Project - Cost Plan - Edit All
- Project - Create
- Project - Create from Template
- Project - Risk, Issue, Change Request - Delete - All
- Project - Risk, Issue, Change Request - Edit - All
- Resource - External - Access
- Resource - Navigate
- Resource - Soft Book - All
- Resource - View All
- Timesheets - Navigate

**Portlet Pages:** Idea Management Dashboard, Portfolio Management Dashboard

### Team Member User Group

Provides security rights for users who are assigned as resources to projects and products. Users primarily enter timesheets and upload documents.

**Instance Rights:**
- Page - View
- Process - Start (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Ideas - Create
- Portlet Viewer - All
- Project - View Tasks - All
- Timesheets - Navigate

**Portlet Pages:** Idea Management Dashboard: Overview and Idea Vault

---

## PMBOK Guide Accelerator Access Rights

The PMBOK Guide Accelerator includes four access groups. Each group grants access to secured Classic PPM pages, dashboards, portlets, and documents.

### PBK Administrator Group

Members set up Classic PPM and the PMBOK Guide Accelerator so the project team can begin working with their projects.

#### PMBOK Guide Accelerator Access Rights for Administrator Group

| Right Name | Description | Scope |
|---|---|---|
| Lessons Learned - Create | Allows the resource to create lessons learned documents. Includes: page navigation right | Global |
| Lessons Learned - Edit All | Allows the resource to edit all lessons learned documents. Includes: page navigation right | Global |
| Lessons Learned - View All | Allows resource to view all lessons learned documents. Includes: page navigation right | Global |
| Lessons Learned - XOG Access | Allows the user to import and export lessons learned data using XOG | Global |
| Product Description - Create | Allows the resource to create product description documents. Includes: page navigation right | Global |
| Product Description - Edit All | Allows the user to edit all product description documents | Global |
| Product Description - View All | Allows the user to view all product description documents | Global |
| Product Description - XOG Access | Allows the user to import and export product description documents using XOG | Global |
| Project Charter - Create | Allows the resource to create project charter documents. Includes: page navigation right | Global |
| Project Charter - Edit All | Allows the resource to edit all project charter documents. Includes: page navigation right | Global |
| Project Charter - View All | Allows resource to view all project charter documents. Includes: page navigation right | Global |
| Project Charter - XOG Access | Allows the user to import and export project charter documents using XOG | Global |
| Project Closure - Create | Allows the resource to create project closure documents. Includes: page navigation right | Global |
| Project Closure - Edit All | Allows the resource to edit all project closure documents | Global |
| Project Closure - View All | Allows resource to view all project closure documents. Includes: page navigation right | Global |
| Project Closure - XOG Access | Allows the user to import and export project closure documents using XOG | Global |
| Project Conversion - Create | Allows the resource to create project conversion objects. Includes: page navigation right | Global |
| Project Conversion - Edit All | Allows the resource to edit all project conversion objects. Includes: page navigation right | Global |
| Project Conversion - Navigate | Allows the resource to navigate to project conversion pages | Global |
| Project Conversion - View All | Allows the resource to view all project conversion objects. Includes: page navigation right | Global |
| Project Conversion - XOG Access | Allows the resource to import and export project conversion instances using XOG | Global |
| Project Report - Create | Allows the resource to create project reports. Includes: page navigation right | Global |
| Project Report - Edit All | Allows the resource to edit all project report documents | Global |
| Project Report - View All | Allows the user to view all project report documents | Global |
| Project Report - XOG Access | Allows the user to import and export project reports using XOG | Global |
| Project Scope Statement - Create | Allows the resource to create project scope statements. Includes: page navigation right | Global |
| Project Scope Statement - Edit All | Allows the resource to edit all project scope statements. Includes: page navigation right | Global |
| Project Scope Statement - View All | Allows the user to view all project scope statement documents | Global |
| Project Scope Statement - XOG Access | Allows the user to import and export project scope statements using XOG | Global |
| Quality Management Plan - Create | Allows the resource to create quality management plan documents. Includes: page navigation right | Global |
| Quality Management Plan - Edit All | Allows the resource to edit all quality management plan documents. Includes: page navigation right | Global |
| Quality Management Plan - View All | Allows the user to view all quality management plan documents | Global |
| Quality Management Plan - XOG Access | Allows the user to import and export quality management plan documents using XOG | Global |
| Risk Identification - SWOT Analysis - Create | Allows the resource to create risk identification - SWOT analysis documents. Includes: page navigation right | Global |
| Risk Identification - SWOT Analysis - Edit All | Allows the resource to edit all risk identification - SWOT analysis documents. Includes: page navigation right | Global |
| Risk Identification - SWOT Analysis - View All | Allows the user to view all risk identification - SWOT analysis documents | Global |
| Risk Identification - SWOT Analysis - XOG Access | Allows the user to import and export risk identification - SWOT analysis documents using XOG | Global |
| Scope Management Plan - Create | Allows the resource to create scope management plan documents. Includes: page navigation right | Global |
| Scope Management Plan - Edit All | Allows the user to edit all scope management plan documents. Includes: page navigation right | Global |
| Scope Management Plan - View All | Allows resource to view all scope management plan documents. Includes: page navigation right | Global |
| Scope Management Plan - XOG Access | Allows the user to import and export scope management plan documents using XOG | Global |

The Administrator Group also receives instance-level rights on specific PMBOK project templates (PMBOK Guide Project Planning Checklist Template and PMBOK Guide Project Template) for all project document subpages (Create, Edit All, View All) and for standard project rights (Approve, Edit, View Management, etc.).

#### Classic PPM Access Rights for Administrator Group

| Right Name | Description | Scope |
|---|---|---|
| Administration - Access | Allows the user to access the Administration menu | Global |
| Audit Trail - View - All | Allows users to view any audit page | Global |
| Custom Objects Editor | Allows users to edit the definition of a custom object | Global |
| Jobs - Access | Allows users access to jobs pages | Global |
| Jobs - Run - All | Allows users to run any job | Global |
| Jobs - View Output - All | Allows users to view the output of any job. Requires: Jobs - Access | Global |
| Knowledge Store - View All | Allows resources to view all documents in the knowledge store | Global |
| Menu Definition Editor - All | Allows a user to edit and view the definitions of all menu items for the Navigator or Administration menu | Global |
| Object - Create Definition | Allows a user to create a custom object | Global |
| Object Administration | Allows a user to administer all custom objects | Global |
| Object Mapping - XOG Access | Allows the resource to import and export object mapping instances using XOG | Global |
| Page Definition Editor | Allows users to edit, view, and delete the definition of a specific page. Requires: Administration - Studio | Instance |
| Page Definition Editor - All | Allows users to edit, view, and delete the definition of all pages. Requires: Administration - Studio | Global |
| Page Definition Viewer | Allows the user to view the definition of a specific page. Requires: Administration - Studio | Instance |
| Page Viewer - All | Lets the user view any configured portlet page | Global |
| Page - View | Allows users to view a general page in Classic PPM. Not required for instance pages | Instance |
| Portlet Definition Editor | Allows the user to edit and view the definition of a specific portlet. Requires: Administration - Studio | Instance |
| Portlet Definition Editor - All | Allows a user to edit and view the definitions of all portlets. Requires: Administration - Access | Global |
| Portlet Viewer - All | Lets you view and add stock portlets to portlet pages | Global |
| Portlet - View | Allows users to view a specific portlet | Instance |
| Process - Cancel | Allows users to cancel process instances from a specific process definition | Instance |
| Process - Cancel - All | Allows users to cancel all process instances | Global |
| Process - Create Definition | Allows users or OBS unit to create or change processes for any object type to which they have access | Global |
| Process - Delete | Allows users to delete process instances from a specific process definition | Instance |
| Process - Delete - All | Allows users to delete a process instance from any process definition | Global |
| Process - Edit Definition | Allows users to edit a specific process definition. Cannot start process instances | Instance |
| Process - Edit Definition - All | Allows users to edit all process definitions | Global |
| Process - Manage | Allows users to start a process instance automatically, start new instances, delete instances, or cancel instances | Instance |
| Process - Manage - All | Allows users to start any process automatically. Can change processes they create and start processes for objects to which they have access | Global |
| Process - Start | Allows users to start a new process instance from a specific process definition | Instance |
| Process - Start - All | Allows users to start all process instances | Global |
| Process - View Definition | Allows users or OBS unit to view process definitions for objects they have access to | Instance |
| Process - View Definition - All | Allows users to view all process definitions | Global |
| Process View Instance - All | Allows users to view all process instances | Global |
| Resource - Edit - All | Allows users to view and edit general information, contact, financial, skills, and calendar for all resources. Requires: Resource - Navigate | Global |
| Resource - External Access | Allows users access to the Resources, Resource Finder, and Resource Requisitions menus in Classic PPM | Global |
| Resource - Navigate | Allows users to access resource management pages | Global |
| Resource - Soft Book - All | Allows users to soft book any resource for investments to which they have view or edit rights | Global |
| Resource - View - All | Allows users to view information, except the financial properties, of all resources | Global |
| Resource - View Book - All | Allows users to view bookings for all resources | Global |
| Resource - View Financial - All | Allows users to view financial properties for all resources. Requires: Resource - Navigate | Global |
| Timesheets - Approve All | Allows users to approve all submitted timesheets | Global |
| Timesheets - Edit All | Allows users to edit all timesheets | Global |
| Timesheets - Navigate | Allows you to navigate to timesheet pages | Global |

### PBK Executive Group

Members monitor the progress of their projects and manage change in scope. They review and approve documents and review project plan updates. Add this group to resources assigned as document reviewers or change control board members.

#### PMBOK Guide Accelerator Access Rights for Executive Group

| Right Name | Description | Scope |
|---|---|---|
| Lessons Learned - Edit All | Allows the resource to edit all lessons learned documents. Includes: page navigation right | Global |
| Lessons Learned - View All | Allows resource to view all lessons learned documents. Includes: page navigation right | Global |
| Product Description - Edit All | Allows the user to edit all product description documents | Global |
| Product Description - View All | Allows the user to view all product description documents | Global |
| Project Charter - Edit All | Allows the resource to edit all project charter documents. Includes: page navigation right | Global |
| Project Charter - View All | Allows resource to view all project charter documents. Includes: page navigation right | Global |
| Project Closure - Edit All | Allows the resource to edit all project closure documents | Global |
| Project Closure - View All | Allows resource to view all project closure documents. Includes: page navigation right | Global |
| Project Report - Edit All | Allows the resource to edit all project report documents | Global |
| Project Report - View All | Allows the user to view all project report documents | Global |
| Project Scope Statement - Edit All | Allows the resource to edit all project scope statements. Includes: page navigation right | Global |
| Project Scope Statement - View All | Allows the user to view all project scope statement documents | Global |
| Quality Management Plan - Edit All | Allows the resource to edit all quality management plan documents. Includes: page navigation right | Global |
| Quality Management Plan - View All | Allows the user to view all quality management plan documents | Global |
| Risk Identification - SWOT Analysis - Edit All | Allows the resource to edit all risk identification - SWOT analysis documents. Includes: page navigation right | Global |
| Risk Identification - SWOT Analysis - View All | Allows the user to view all risk identification - SWOT analysis documents | Global |
| Scope Management Plan - Edit All | Allows the user to edit all scope management plan documents. Includes: page navigation right | Global |
| Scope Management Plan - View All | Allows resource to view all scope management plan documents. Includes: page navigation right | Global |

The Executive Group also receives Global-scope rights on PMBOK project template subpages (Edit All and View All for all document types).

#### Classic PPM Access Rights for Executive Group

| Right Name | Description | Scope |
|---|---|---|
| Knowledge Store - View All | Allows resources to view all documents in the knowledge store | Global |
| Page - View | Allows users to view a general page in Classic PPM | Instance |
| Page Viewer - All | Lets the user view any configured portlet page | Global |
| Portlet - View | Allows users to view a specific portlet | Instance |
| Portlet Viewer - All | Lets you view and add stock portlets to portlet pages | Global |
| Project - Approve - All | Allows users to approve all projects. Includes: Project - Edit - All | Global |
| Project - Budget Plan - View All | Allows users to view budget plans for all projects | Global |
| Project - Cost Plan - View All | Allows users to view cost plans for all projects | Global |
| Project - Hierarchy - Financial Rollup - View - All | Allows the resource to view the financial rollup for all projects | Global |
| Project - Risk, Issue, Change Request - View - All | Lets you view all risks, issues, and change requests for a specific project | Global |
| Project - View Financial - All | Allows users to view the general and financial properties, and processes on all projects | Global |
| Project - View Management - All | Allows users to view management properties and processes on any project that has been enabled for management | Global |
| Project - View Tasks - All | Allows the user to view tasks and work breakdown structure for any project the user has been granted access | Global |
| Resource - Navigate | Allows users to access resource management pages | Global |
| Resource - View - All | Allows users to view information, except the financial properties, of all resources | Global |
| Resource - View Book - All | Allows users to view bookings for all resources | Global |
| Resource - View Financial - All | Allows users to view financial properties for all resources. Requires: Resource - Navigate | Global |

### PBK Project Manager Group

Members are project managers concerned with direction and performance of their investments and projects. They create, monitor, review, model, and approve portfolios, manage schedule, resources, tasks, risks, and issues.

#### PMBOK Guide Accelerator Access Rights for Project Manager Group

| Right Name | Description | Scope |
|---|---|---|
| Lessons Learned - Create | Allows the resource to create lessons learned documents. Includes: page navigation right | Global |
| Lessons Learned - Edit All | Allows the resource to edit all lessons learned documents. Includes: page navigation right | Global |
| Lessons Learned - View All | Allows resource to view all lessons learned documents. Includes: page navigation right | Global |
| Lessons Learned - XOG Access | Allows the user to import and export lessons learned data using XOG | Global |
| Product Description - Create | Allows the resource to create product description documents. Includes: page navigation right | Global |
| Product Description - Edit All | Allows the user to edit all product description documents | Global |
| Product Description - View All | Allows the user to view all product description documents | Global |
| Product Description - XOG Access | Allows the user to import and export product description documents using XOG | Global |
| Project Charter - Create | Allows the resource to create project charter documents. Includes: page navigation right | Global |
| Project Charter - Edit All | Allows the resource to edit all project charter documents. Includes: page navigation right | Global |
| Project Charter - View All | Allows resource to view all project charter documents. Includes: page navigation right | Global |
| Project Charter - XOG Access | Allows the user to import and export project charter documents using XOG | Global |
| Project Closure - Create | Allows the resource to create project closure documents. Includes: page navigation right | Global |
| Project Closure - Edit All | Allows the resource to edit all project closure documents | Global |
| Project Closure - View All | Allows resource to view all project closure documents. Includes: page navigation right | Global |
| Project Closure - XOG Access | Allows the user to import and export project closure documents using XOG | Global |
| Project Report - Create | Allows the resource to create project reports. Includes: page navigation right | Global |
| Project Report - Edit All | Allows the resource to edit all project report documents | Global |
| Project Report - View All | Allows the user to view all project report documents | Global |
| Project Report - XOG Access | Allows the user to import and export project reports using XOG | Global |
| Project Scope Statement - Create | Allows the resource to create project scope statements. Includes: page navigation right | Global |
| Project Scope Statement - Edit All | Allows the resource to edit all project scope statements. Includes: page navigation right | Global |
| Project Scope Statement - View All | Allows the user to view all project scope statement documents | Global |
| Project Scope Statement - XOG Access | Allows the user to import and export project scope statements using XOG | Global |
| Quality Management Plan - Create | Allows the resource to create quality management plan documents. Includes: page navigation right | Global |
| Quality Management Plan - Edit All | Allows the resource to edit all quality management plan documents. Includes: page navigation right | Global |
| Quality Management Plan - View All | Allows the user to view all quality management plan documents | Global |
| Quality Management Plan - XOG Access | Allows the user to import and export quality management plan documents using XOG | Global |
| Risk Identification - SWOT Analysis - Create | Allows the resource to create risk identification - SWOT analysis documents. Includes: page navigation right | Global |
| Risk Identification - SWOT Analysis - Edit All | Allows the resource to edit all risk identification - SWOT analysis documents. Includes: page navigation right | Global |
| Risk Identification - SWOT Analysis - View All | Allows the user to view all risk identification - SWOT analysis documents | Global |
| Risk Identification - SWOT Analysis - XOG Access | Allows the user to import and export risk identification - SWOT analysis documents using XOG | Global |
| Scope Management Plan - Create | Allows the resource to create scope management plan documents. Includes: page navigation right | Global |
| Scope Management Plan - Edit All | Allows the user to edit all scope management plan documents. Includes: page navigation right | Global |
| Scope Management Plan - View All | Allows resource to view all scope management plan documents. Includes: page navigation right | Global |
| Scope Management Plan - XOG Access | Allows the user to import and export scope management plan documents using XOG | Global |

The Project Manager Group also receives instance-level rights on PMBOK project templates for all project document subpages, plus Edit and View rights on the templates themselves.

#### Classic PPM Access Rights for Project Manager Group

| Right Name | Description | Scope |
|---|---|---|
| Page Definition Editor | Allows users to edit, view, and delete the definition of a specific page. Requires: Administration - Studio | Instance |
| Page Definition Viewer | Allows the user to view the definition of a specific page. Requires: Administration - Studio | Instance |
| Page - View | Allows users to view a general page in Classic PPM | Instance |
| Portlet Viewer - All | Lets you view and add stock portlets to portlet pages | Global |
| Portlet - View | Allows users to view a specific portlet | Instance |
| Process - Cancel | Allows users to cancel process instances from a specific process definition | Instance |
| Process - Start | Allows users to start a new process instance from a specific process definition | Instance |
| Process - View Definition | Allows users or OBS unit to view process definitions for objects they have access to | Instance |
| Project - Benefit Plan - View | Allows users to view the benefit plans for a specific project | Instance |
| Project - Budget Plan - View | Allows users to view the budget plans for a specific project | Instance |
| Project - Cost Plan - Edit All | Allows users to edit cost plans for all projects | Global |
| Project - Cost Plan - View | Allows users to view the cost plans for a specific project | Instance |
| Project - Cost Plan - View All | Allows users to view cost plans for all projects | Global |
| Project - Create | Allows you to create new projects and define the general properties | Global |
| Project - Create from Template | Allows you to create new projects using project templates | Global |
| Project - Edit Chargebacks Information All | Allows the resource to edit chargeback rules for all projects | Global |
| Project - Edit Financial - All | Allows users to view and edit the general properties, processes, and financial information about all projects | Global |
| Project - Hierarchy - Financial Rollup - View | Allows the resource to view the financial rollup for a specific project | Instance |
| Project - Hierarchy - Financial Rollup - View - All | Allows the resource to view the financial rollup for all projects | Global |
| Project - Reverse Charges - All | Allows the user to reverse charges for any project | Global |
| Project - Risk, Issue, Change Request - View - All | Lets you view all risks, issues, and change requests for a specific project | Global |
| Project - Risk, Issue, Change Request - Edit - All | Allows you to create and edit risks, issues, and change requests for any project | Global |
| Project - Risk, Issue, Change Request - View | Allows the resource to view risks, issues, and changes for a specific project | Instance |
| Project - View | Allows users to view the general, management, financial properties, roster, tasks, and subprojects for a specific project | Instance |
| Project - View Financial - All | Allows users to view the general and financial properties, and processes on all projects | Global |
| Project - View Management | Allows users to view management properties, roster, and key tasks of a specific project | Instance |
| Project - View Requisitions | Allows the user to view requisitions and the requisition resources | Global |
| Project - View Tasks | Allows users to view all tasks for a specific project | Instance |
| Resource - Hard Book - All | Allows users to soft and hard book all resources for investments to which they have view or edit rights | Global |
| Resource - Edit - All | Allows users to view and edit general information, contact, financial, skills, and calendar for all resources. Requires: Resource - Navigate | Global |
| Resource - External Access | Allows users access to the Resources, Resource Finder, and Resource Requisitions menus in Classic PPM | Global |
| Resource - Navigate | Allows users to access resource management pages | Global |
| Resource - Soft Book - All | Allows users to soft book any resource for investments to which they have view or edit rights | Global |
| Resource - View - All | Allows users to view information, except the financial properties, of all resources | Global |
| Resource - View Book - All | Allows users to view bookings for all resources | Global |
| Resource - View Financial - All | Allows users to view financial properties for all resources. Requires: Resource - Navigate | Global |
| Timesheets - Approve All | Allows users to approve all submitted timesheets | Global |
| Timesheets - Edit All | Allows users to edit all timesheets | Global |
| Timesheets - Navigate | Allows you to navigate to timesheet pages | Global |

### PBK Team Member Group

Members complete their assigned tasks on schedule. They review project tasks, schedules, reports, and documents and log time using Timesheets.

#### PMBOK Guide Accelerator Access Rights for Team Member Group

| Right Name | Description | Scope |
|---|---|---|
| Lessons Learned - View All | Allows resource to view all lessons learned documents. Includes: page navigation right | Global |
| Product Description - View All | Allows the user to view all product description documents | Global |
| Project Charter - View All | Allows resource to view all project charter documents. Includes: page navigation right | Global |
| Project Closure - View All | Allows resource to view all project closure documents. Includes: page navigation right | Global |
| Project Report - View All | Allows the user to view all project report documents | Global |
| Project Scope Statement - View All | Allows the user to view all project scope statement documents | Global |
| Quality Management Plan - View All | Allows the user to view all quality management plan documents | Global |
| Risk Identification - SWOT Analysis - View All | Allows the user to view all risk identification - SWOT analysis documents | Global |
| Scope Management Plan - View All | Allows resource to view all scope management plan documents. Includes: page navigation right | Global |

The Team Member Group also receives Global-scope View All rights on PMBOK project template subpages for all document types.

#### Classic PPM Access Rights for Team Member Group

| Right Name | Description | Scope |
|---|---|---|
| Page - View | Allows users to view a general page in Classic PPM. Not required for instance pages | Instance |
| Portlet - View | Allows users to view a specific portlet | Instance |
| Project - View Tasks - All | Allows users to view tasks and work breakdown structure for any project the user has been granted access | Global |
| Timesheets - Navigate | Allows you to navigate to timesheet pages | Global |

---

## PMO Accelerator Access Groups

The PMO Accelerator includes access groups. Each group has global and instance-level access rights. When you add resources to these groups, the resources automatically inherit the group rights. Groups are designed to be used in a matrix fashion — a resource may belong to more than one group to obtain all required rights.

> [!note]
> Access rights for the Lookup Mapping object are only assigned to the PMO System Administrator group. When necessary, your administrator can add these rights to another group.

The following access groups are included with the PMO Accelerator add-in:

- PMO Executive Viewer
- PMO Executive Viewer Extended
- PMO Financial Administrator
- PMO Idea Creator
- PMO Idea Reviewer
- PMO Investment Creator
- PMO Investment Viewer Extended
- PMO Portfolio Manager
- PMO Program Manager
- PMO Project Creator
- PMO Project Manager
- PMO Project Manager Extended
- PMO Project Viewer
- PMO Resource Administrator
- PMO Resource Manager
- PMO Resource Manager Extended
- PMO System Administrator
- PMO Team Member
- PMO Timesheet Administrator
- PMO Vendor Management
- PMO Roadmap Creator
- PMO Roadmap Viewer
- PMO Roadmap Editor

### PMO Executive Viewer

Members view all roadmaps, project properties, status reports, schedules, and resource allocations; run project and resource capacity reports.

**Global Rights:**
- Account Settings - Navigate
- Organizer - Access
- Projects - Navigate
- Project Management - Navigate
- Project Management - Tiles Navigate
- Project - View Management - All
- Project - View Financial - All
- Project - Cost Plan - View All
- Project - Budget Plan - View All
- Project - Benefit Plan - View All
- Project - Risk, Issue, Change Request - View - All
- Status Report - View All
- Resource - View - All
- Resource - View Book - All
- Project - View Requisitions - All
- Roadmap - Navigate
- Roadmap - View - All
- Tasks - Navigate

**Instance Rights (Page - View):**
- Resource Planning Page and Tabs
- Status Report Review Page and Tabs
- Timesheet Overview Page
- Timesheet Review Page and Tab
- PMO-Project Storyboard Page

**Instance Rights (Portlet - View):**
- Resource Planning Page Portlets
- Status Report Review Page Portlets
- Timesheet Overview Page Portlets
- Timesheet Review Page Portlets
- PMO-Project Status Portlets
- PMO-Project Storyboard Portlets
- Project Default Layout Portlets
- Other Portlets - Classic PPM

### PMO Executive Viewer Extended

Members view all roadmaps, project properties, status reports, schedules, resource allocations, baselines, and financials; run project, resource capacity, and financial reports.

**Global Rights** (in addition to PMO Executive Viewer rights):
- Project - View Financial - All
- Project - Cost Plan - View All
- Project - Budget Plan - View All
- Project - Benefit Plan - View All

**Instance Rights (Page - View):**
- All pages from PMO Executive Viewer
- Capacity Planning Overview Page

**Instance Rights (Portlet - View):**
- All portlets from PMO Executive Viewer
- Capacity Planning Overview Portlets
- Other Portlets - PMO Accelerator

Portlet examples include: Sponsor PM Alerts, Schedule Performance Drill Down, Current Issues Drill Down, Staffing Outlook Drill Down, Project Dashboard Issues and Risks, Role Capacity Histogram, Resource Workloads, Allocation Discrepancy, Unfilled Requirements, Booking Status, Capacity Overview, Status Report Listing, Late and Missing Status Reports, Investment Timesheet Summary, Project Indicators, Upcoming Milestones, Project Baselines, Team Utilization, Late Tasks and Milestones, Project Lifecycle Review, Resource Utilization Percentage by Month.

### PMO Financial Administrator

Members manage functionality related to project financial plans, including creating and editing any financial plan, approving budgets, and creating/editing financial transactions against any project.

**Global Rights:**
- All project management financial rights (Cost Plan, Budget Plan, Benefit Plan — Edit/View All)
- Resource Management rights
- Financial Management rights
- Tasks - Navigate

**Instance Rights (Page - View):**
- Posted Transaction Review Page

**Instance Rights (Portlet - View):**
- Posted Transaction Review Page Portlets
- PMO-Project Status Portlets
- PMO-Project Storyboard Portlets
- Project Default Layout Portlets
- Other Portlets - Classic PPM

### PMO Idea Creator

Members create and view new ideas.

**Global Rights:**
- Account Settings - Navigate (General)
- Project management navigation rights
- Idea Management rights
- Resource Management navigation

**Instance Rights (Portlet - View):**
- Other Portlets - Classic PPM

---

## Related
- [[Overview]]
- [[_MOC Reference]]

%%Source: p3625-3710%%
