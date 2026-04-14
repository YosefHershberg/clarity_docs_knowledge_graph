---
title: Secure Field Level Access
tags:
  - admin
aliases:
  - Field Level Access
canonical: true
audience: admin
domain: administration
---

# Secure Field Level Access

## Overview

Field Level Security (FLS) allows administrators to control which groups of users can access specific fields or attributes in Clarity. Users who have access to secured attributes can view them in both board and grid views. Although FLS lets you display or hide fields from specific user groups, administrators can always view all attributes when configuring Blueprints.

> [!important]
> - Field level security always takes precedence over Instance, OBS, or Global rights in a project or idea.
> - Field level security is applicable to custom investments, ideas, and projects.
> - Field level security is not applicable to TSV attributes in Clarity (these appear as Per-Period Metric columns or Totals columns).

## Example Scenario

A portfolio manager (Sid) adds an **Estimated Budget Plan** value for an investment and needs to share it with two users:

| User | Role | Group | Access Needed |
|------|------|-------|---------------|
| Susan | Chief Information Officer | CIO Financials | Access Edit + Access View |
| Jennifer | Product Manager | PMO Investment Financials | Access View only |

Sid works with the System Administrator to assign the appropriate FLS rights so Susan can review and update the field, while Jennifer can only view it.

## Prerequisites

- You must belong to the **PMO System Administrator** group.
- You must have the **Attribute Management - Navigate** right. This allows access to the Attributes management page in Clarity and displays the Attributes tile in the Administration workspace.
- **PMO Persona Group**: Must have FLS-Edit access rights on the Template and Assignment Pool attributes to edit or set a project as a template.
- **End-User Persona Group**: Should have FLS-View access rights on the Template and Assignment Pool attributes to create projects using templates.
- Users without FLS access to Template or Assignment Pool attributes cannot:
  - Set a project as a template
  - Create projects using a template
- **To Convert Idea to Project**: Users must have either View or Edit FLS access to Template attributes. Without access, users cannot convert ideas to projects.

## Configure Secure Attributes

**Follow these steps:**

1. Navigate to **Administration** and click **Attributes**. The Attribute page opens listing all attributes for all objects.
2. Click the checkbox in the **Secure** column to set the corresponding attribute to secure. The following conditions apply:
   - **False**: All users can access this attribute.
   - **True**: Only users who belong to select groups can access the attribute.
   - **True (with no group access set)**: The attribute cannot be accessed by anyone.
3. Select a row and click **Details**. The Details fly-out window opens.
4. Specify the **Access Edit** and **Access View** groups.

All users who belong to the specified group can view or edit the attribute based on the access provided. You can configure access independently for the same attribute on different investment types.

> [!important]
> - If the `is_template` attribute is set to Secure and no access rights are provided, the system will not let you create a project using **New From Template**.
> - A **Non-Securable** column has been added to the Attribute grid so administrators can quickly identify attributes that cannot be secured.
> - A **Prioritize Access Rights over Attribute Level Security** option exists on the System Options page in Classic PPM. When enabled, access rights take priority over FLS configured on the Attributes page.
> - From Clarity 16.1.3, you can use the **All Users** option in the Access View column to allow all users to view an attribute without creating a dedicated access group, while keeping Edit Access restricted to specific groups.

## Objects Supported by Field Level Security

To view the list of supported objects, use the Group By feature on the Attributes page:

1. Navigate to **Administration** and click **Attributes**.
2. Drag the **Object** column header and drop it on the **Group By** bar. The list of objects is displayed.

## Scenarios and Exceptions

### Blueprints

- Blueprint administrators can view all secure and non-secure attributes when configuring Blueprints for Projects, Ideas, or Custom Investment Items.
- If a user has no access rights to any secured fields in Preview mode, the entire section is hidden.
- If a user has access to at least one attribute within a section, the section is displayed in Preview mode.
- If a user does not have access to secured fields within a section, those fields are not visible in Preview mode.

### Details Panel

- Users with access to secured fields can access them from the Details panel.
- Users without access to secured fields cannot see them in the Details panel (a blank label is displayed).
- Users without access cannot fetch secure fields using REST API GET/POST/PATCH calls.

### Secured Fields in Grid Layout

| Functionality | Users WITH Access | Users WITHOUT Access |
|---|---|---|
| Grid Layout | Secure fields are accessible | Secured fields are inaccessible |
| Grid Filter | Can filter on secured fields | Cannot access secured fields in filter; saved views with secured filters show as unsaved |
| Group By | Can view data grouped by a secured field from a saved view | Cannot view data from a saved view grouped by a secured field; sees an unsaved view |
| Column Panel | Can view secured fields in the column panel | Secured fields are not visible in the column panel |
| Export to CSV | Can export CSV files including secure attributes | Cannot view or download secured attributes in CSV |

### Secured Fields in Board View

| Functionality | Users WITH Access | Users WITHOUT Access |
|---|---|---|
| Saved View | Can view the saved view | Message appears indicating a field is unavailable; shows an unsaved view |
| Card Title | Card title displays correctly | Card title displays blank |
| Column | Can view the column | Column title is cleared and set to None; the None column appears with data |
| Column Tab | Column tab is visible | Column tab is not visible (no columns to hide/show) |
| Color By | Can view the secured field color | Color by option is cleared and set to None |
| Card Fields | Can view the fields in the card | Card fields option is cleared |
| Card Metrics | Can view card metrics | Card metrics option is cleared |

> [!note]
> If you saved a view containing secured fields and then your administrator secures those fields after the fact, opening the saved view will show a message and Clarity will display an unsaved view (without the secured fields) if you lack access.

## Impact and Exemptions

### Attribute Exceptions

The following attributes cannot have field level security implemented:

- **Custom Investment Object**: Name, ID, Name, Start Date, Finish Date, Blueprint Active ID
- **Custom Master Object**: Name, ID, Blueprint Active ID
- **Custom Sub Object**: Name, ID
- **Idea Object**: Subject, ID, Start Date, Finish Date, Blueprint Active ID
- **Financial (Cost/Budget) Plan Object**: Name, Code, Start Period, End Period, Grouping Attributes, Plan of Record, Period Type
- **Financial (Benefit) Plan Object**: Name, Code, Start Period, End Period, Plan of Record, Period Type
- **Project Object**: Name, Investment ID, Start, End, Blueprint Active ID
- **Resource**: Full Name, Resource ID, Blueprint Active ID, Is Staffed, Is Team, Primary Role, Is Role
- **Risk/Issue/Change**: ID, Name, Include In Status Reporting
- **Status Report**: Overall Status, Report Date, Report Status, Project Name
- **Attachment**, **Team**, **TSV Attributes**
- **To-Do Object**: Name, ID

### Non-Impacted Areas

Field level security does not affect the following areas:

- Classic PPM UI (Studio, Objects, Views, Portlet Pages, Portlets, Queries and Data Providers, Reports and Jobs)
- Audit Trail
- Open Work Bench (OWB)
- Microsoft Project (MSP)
- XML Open Gateway (XOG)
- GEL Scripts that do not call REST APIs
- Processes
- Data Warehouse and HDP

### Third-Party Integration

- **Rally**: Field-level security is applicable and can be implemented with Rally. If you have access to secure attributes, you can pass the attributes and their values to Rally.
- **GEL Script calling REST APIs**: Any integration must have View or Edit access to the attributes so that REST APIs can communicate with the third-party application.

> [!note]
> For any third-party integrations, the integration user must have access to the relevant secured attributes. In case of failures, contact the Administrator to review the log files.

### Secure Attributes for Edit Access Only

From Clarity 16.1.3, the Enhanced FLS infrastructure allows administrators to secure attributes for editing purposes without restricting View Access. Previously, securing an attribute for editing required explicitly creating and managing an access group for View Access as well.

## Related

- [[_MOC Administration]]

%%Source: p1898-1909%%
