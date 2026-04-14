---
title: Projects: Configure Blueprints
tags:
  - admin
aliases:
  - Projects Blueprint
canonical: true
audience: admin
domain: administration
---
# Projects: Configure Blueprints

## Overview

As an application administrator you can use blueprints to configure layouts for different types of investments and objects. You can copy and configure blueprints that reflect the goals of each business unit in your organization. You can associate project templates with project blueprints. When users create projects from these templates, the project details from the blueprint appear. The stakeholders for a business unit see only the sections, fields, visuals, and modules that are relevant to their projects.

Depending on your access rights as the application owner, you can configure the blueprinting capabilities in Clarity. Verify that you have the appropriate rights for configuring blueprints. See Clarity Access Rights in the Reference section.

**Example: Using Project Blueprints**

As an application owner, Ian is onboarding a new Marketing business unit with unique requirements for capturing specific data when planning and executing projects. To facilitate their adoption, Ian copies the Standard Project blueprint to create the Marketing Blueprint. Based on the available options, Ian meets with various stakeholders to finalize the details. He tailors the marketing project details so that only the fields relevant to marketing projects appear — for example, the Target Segments and Pilot Launch Date fields. Ian configures the blueprint based on daily meeting results. After a week, Ian finally feels comfortable publishing the blueprint so that he can now associate templates to it.

Theresa, a senior project manager, has created several templates for different project types in Classic PPM. Ian associates the Marketing Tradeshow template with the new marketing blueprint. Nicole, the project manager for Marketing, creates a new project from the Marketing Tradeshow template. When Nicole views her new project, the project details show the fields that Ian configured for the type of projects she manages.

This section contains the following topics:

- Feature Highlights: Project Blueprints
- Standard Project Blueprint
- Set the Default Blueprint
- Copy a Blueprint
- Edit a Blueprint
- Add Modules to Blueprints
- Edit Blueprint Details
- Edit Blueprint Visuals
- Edit Blueprint Modules
- Associate Templates with Blueprints
- Publish a Blueprint
- Delete a Blueprint
- Configure Custom Project Subobjects as Modules
- View Investments Associated with Resources
- Review Common Capabilities

## Feature Highlights: Project Blueprints

- **Copy a Blueprint:** You can view but cannot configure the default Standard Project blueprint; however, you can make a copy and then edit your copy. You can also make another blueprint the default blueprint. The default blueprint determines the sections, fields, visuals, and modules users see.
- **Edit and Publish:** Open a copied blueprint and click Edit. You can define the layout details, visuals, and modules. When you click Publish, your changes appear in the templates that determine the functionality and appearance of current and future projects.
- **Sections and Fields:** You can add and remove sections on the project layout. You can drag a field into a section and drop it near an adjacent field. You can adjust the position and resize the fields for an ideal fit.
- **Visuals:** You can drag and drop up to three visual gauges that appear on the project tiles.
- **Modules:** You determine at least one or multiple modules that appear when users open a project. The first four modules appear on the project tiles. Rules: You can create business rules in Blueprints to control the modules or sections displayed to end users.
- **Actions:** You can use the Actions tab to associate the relevant processes with the blueprint.
- **Create from Template:** You can use the Create From Template tab to configure all the out-of-the-box and custom fields that users need to populate in the New Project window when users create a new project from a template.

### Visual Indicators for Blueprint Components

The following visual treatments apply to blueprint components (fields, visuals, and modules):

- A white background and black font indicate an active component that is not used in the blueprint.
- A white background and gray font indicate an active component that is used in the blueprint.
- A gray background and black font indicate an inactive component that is not used in the blueprint.
- A gray background and gray font indicate inactive components that are used in the blueprint. The inactive components are not visible to users in the project details.
- Asterisks (*) indicate required fields.

## Standard Project Blueprint

The Standard Project blueprint is the pre-defined system blueprint that you cannot configure or delete. All existing templates are associated with the Standard Project blueprint.

Initially, the Standard Project blueprint is also marked as the default blueprint. With the blueprint edit right, you can associate project templates with the Standard Project blueprint. No investment edit rights are required to move or associate a project template under a blueprint.

The Standard Project blueprint includes the following visuals:

- Effort Spent
- Budget Spent
- Next Milestone

## Set the Default Blueprint

Designate a blueprint as the default blueprint for your organization. All existing projects not associated with any blueprint are associated with the current default blueprint.

After an upgrade, if a project is marked as a template and does not have a blueprint association, it is associated with the current default blueprint.

You can designate the Standard Project blueprint or any other blueprint as the default blueprint. Select the Standard Project blueprint and click Make Default. The Default banner appears next to the blueprint name. Only one blueprint can be a default. When you mark another blueprint as the default, the existing blueprint is no longer the default blueprint.

## Copy a Blueprint

Create a blueprint by copying the Standard Project blueprint or another user-defined blueprint. Select the Standard Project blueprint and click Copy to create a new blueprint.

The new blueprint is created with a unique identifier through auto-numbering. The copy also includes the details, visuals, and modules from the existing blueprint. You can edit the copy and associate one or more project templates with it, instead of always using the standard blueprint.

## Edit a Blueprint

You can rename or edit the configuration of a user-defined blueprint. You cannot edit or delete the Standard blueprint for projects. You can rename the Standard blueprint for projects.

### Add Project Fields to a Blueprint

You can add attributes to the project object in Classic PPM. The attributes are available for configuration on your project blueprints.

- To configure a blueprint, verify that all required fields are available to the blueprint. For example, to configure a blueprint for marketing projects, verify that all marketing-related fields are added to the Project in Classic PPM.
- Enable the fields for API access by specifying an API Attribute ID in the attribute details. See Classic PPM Studio Objects and Attributes for details.
- You can also add OBS fields to blueprints and enable them for API access. See Configure an Organization Breakdown Structure for details on how to create an OBS and associate it to the project object.

The following project attributes are not available to appear on the blueprint Fields list:

- % Complete Calculation Method
- Actual Cost
- Approved
- Blueprint Active ID
- Budgeted Capital Cost
- Budgeted Cost Finish (date)
- Budgeted Cost Start (date)
- Budgeted Cost Total
- Budgeted Operating Cost
- Currency Code
- EAC Sum for Labor Resources
- ETC Sum for Labor Resources
- Investments Using
- Last Used
- Page Layout
- Planned Cost Total
- Priority
- Progress
- Project Category
- Status
- Template

## Add Modules to Blueprints

You can add the required modules to the Project blueprint. If you have created a custom subobject for the Project object, add it as a module in the Project blueprint to make it available in Clarity. For more information on custom subobjects, see Clarity Studio Objects and Attributes.

**Follow these steps:**

1. Navigate to Administration, Blueprint.
2. Click the name of the blueprint that you want to edit and click Edit.
3. Select the MODULES tab.
4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.

> [!important]
> **Action Items:** In Clarity 16.1.0 and higher releases, you can add the Action Items module that will display Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, and Custom Investments. You need no new security rights for this module.

5. Click Publish to save your changes and make the changes available to users.
6. Open a project that is using the blueprint that you just edited. You will see the custom objects appear as modules.

## Edit Blueprint Details

**Follow these steps:**

1. From the blueprint list, click the name of the blueprint that you want to edit.
2. On the details page that displays the currently published blueprint layout, click Edit.
3. Edit the blueprint details:
   - Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle in the bottom-right of the field.
   - Drag-and-drop fields from a blueprint layout section to another section.
   - Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in a section to remove that field. The field goes back to being an available field.
   - Delete a section with or without fields. All fields within that section are removed from the layout and are available again to select from the Fields panel.
   - Drag an existing section up or down within the blueprint to rearrange the sections. All fields contained in the section also move to the new location.
4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version.
5. Click Publish to save your changes and make the new layout available to projects. All projects associated with this blueprint display the new layout.

## Edit Blueprint Visuals

Project tiles display visuals in the form of ring charts, date widgets, or icons. For each blueprint, you can show, hide, change, or reorder the visuals that display on the project tiles. Configure visuals that align with the project goals for a specific business unit or theme.

**Examples:**
- An IT department manages complex projects and typically likes to see gauges that reflect traditional cost (Budget Spent) and schedule (Effort Spent) metrics.
- A Marketing department manages product launches and trade shows and prefers progress-oriented visuals such as Days Remaining.

The following visuals are available:

| Visual | Description |
|--------|-------------|
| % Complete | Defines the percentage of the project work that is completed. The chart is based on the % Complete field configured for the project details page. |
| Budget Remaining | Defines the amount of budget remaining for the project calculated as Total Remaining Cost / Total Budgeted Cost. |
| Budget Spent | Defines the amount of budget spent for the project calculated as Total Actual Cost / Total Budgeted Cost. |
| Days Remaining | Defines the number of days remaining on the project. If the current date is before the project start date, then days remaining = project finish date minus project start date. If the current date is past the start date but before the finish date, then days remaining = finish date minus current date. In all other cases, the value is zero. |
| Days to Start | Defines the number of days until the project starts (project start date - current date), provided the project start date is later than the current date. If the current date is past the start date or if the start date is undefined, then the value is zero. |
| Effort Remaining | Defines the hours remaining on the project calculated as Total Remaining Units / Total Budgeted Units or (EAC - Actual) / EAC. If the estimate at completion (EAC) is zero or null, the effort remaining value is zero. If Actual is greater than EAC, then the effort remaining value is negative. |
| Effort Spent | Defines the hours spent calculated as Labor Actuals / Total Effort. Labor Actuals is the sum of all actuals posted for labor resources. Total Effort is the total EAC for the project. |
| Finish Date | Defines the project finish date. |
| Next Milestone | Displays the next milestone date after today. If no milestones exist or if all milestones are from the past, the product uses the project Finish date. |
| Start Date | Defines the project start date. |

**Follow these steps:**

1. From the blueprints list, click the name of a blueprint.
2. On the details page, click Visuals.
3. Click Edit to configure visuals for the project tile layout:
   - Select at least one and up to three visuals.
   - Drag an available visual from the Visuals list and drop it on an existing visual in the project tile to replace that visual.
   - Use the Search box to look for specific visuals by label name.
   - Drag-and-drop visuals from the project tile back to the list of visuals. You can also click the X on a visual in the project tile to remove it. The visual goes back to being available.
   - Rearrange the visuals within the project tile by dragging and dropping.
4. Discard edits or publish to save your changes.

## Edit Blueprint Modules

You can configure up to four (4) blueprint modules to appear as icons on the bottom of each project tile. The icons allow users to go directly to a module such as Conversations or Tasks without having to first navigate to another module.

When a user clicks an area on the project tile that is not a module link (for example, the banner color or one of the gauges), the product takes the user to the first module configured for the blueprint.

For example, if you configure the following modules for a blueprint in left-to-right order, the user lands on the Status Report module for the project:

1. Status Report
2. Properties
3. Financials
4. Conversations

Similarly, when a user creates a project in Clarity, after entering the project name, the product navigates them to the first module based on the blueprint configuration. At least one module is required for displaying on the project tile. A maximum of four modules appears on the project tiles in the order of their configuration. The remaining modules appear as tabs inside a project.

## Associate Templates with Blueprints

A template is used to create projects. Project details are displayed to end-users based on the associated blueprint. You can associate a template with only one blueprint.

Initially, all existing templates are associated to the Standard Project blueprint by default. Depending on your business requirements, you can change a template association from one blueprint to another. Existing projects that are associated to a blueprint do not change. Only new projects use the new blueprint association to display details.

The Project Templates are always associated with a specific Blueprint. You cannot change the Blueprint field in the Investment to 'None' for a template. If you try to change the blueprint value to 'None' for a template, Clarity automatically changes it to the Default Blueprint.

> [!tip]
> **Example:** Consider three blueprints for projects in Clarity:
> 1. Standard Project Blueprint (system default)
> 2. Blueprint for Internal Project (marked as the default blueprint)
> 3. Blueprint for Special Project (the latest blueprint)
>
> BYOD Management is a non-template project, and the Blueprint field for the project is empty. But the project uses the default blueprint — Blueprint for Internal Project. If you mark BYOD Management as a template, you will see the default blueprint (Blueprint for Internal Project) in the Blueprint field. You can change the blueprint to Blueprint for Special Project for the template. If you change the blueprint value to 'None', Clarity populates the default blueprint (Blueprint for Internal Project).

## Publish a Blueprint

When you publish a blueprint, all edits in progress for the details, visuals, and modules are published at once. All projects that are associated with the blueprint display the latest layout that is configured for the blueprint.

> [!note]
> Clarity currently supports 50 modules, 25 visuals, and 200 attributes for the project blueprint.

## Delete a Blueprint

With the appropriate access rights, you can delete any user-defined blueprint.

If you delete a blueprint that is not the default, all templates and projects that are associated with the blueprint are then re-associated with the current default blueprint.

If the Standard Project blueprint is the default blueprint, all templates and projects are associated with this blueprint.

If you delete a user-defined default blueprint, then the associated templates and projects are also re-associated with the Standard Project blueprint. The Standard Project blueprint becomes the new default blueprint.

You cannot delete the Standard Project blueprint.

## Configure Help Text in Blueprints

In Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both the Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity.

You can use the Help Text attribute in the blueprint to create a Large String - Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience.

This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.

**Follow these steps:**

1. Navigate to Administration, Blueprint.
2. Click the name of the blueprint that you want to edit and click Edit.
3. Select either the Create From Template or Properties tab.
4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint.
5. Click Publish to save your changes and make the changes available to users.

> [!note]
> Some key points to remember about Help Text:
> - As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint Create From Template and Properties windows.
> - You can reuse it multiple times in the same layout within the same area or section.
> - You can resize and/or move it like other attributes in the layout.
> - The display of the Help Text, including its format, location, and size, is determined by the admin's configuration.
> - Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
> - The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template function.
> - As a user, you can view the Help Text when accessing both the Create From Template and Properties windows, but it remains read-only.

## Configure Custom Project Subobjects as Modules

You can add a new module to appear as its own tabbed page along with the other project pages. To configure your project pages to accurately reflect your organizational business processes, define custom project subobjects and API-enable them for use with blueprints. When an end-user creates a project using the blueprint, a new tab corresponding to the subobject name appears on the project.

**Example:** Ian, the system administrator, receives a request to define a project subobject called Compliance and configure the subobject for display in Clarity. In Classic PPM Studio, Ian creates the subobject and makes it API-enabled. On the Attributes tab of the subobject, Ian specifies an API Attribute ID so that the attributes are available for selection in Clarity. In Clarity, Ian selects a project blueprint and adds the new subobject as a module. He then creates a new project using this blueprint and verifies that the subobject appears as a tab and the grid contains the selected attributes.

> [!note]
> You can API-enable both new and existing project subobjects. After you API-enable a subobject, you cannot disable it for the API.

**Follow these steps:**

1. In Classic PPM, click Administration, Studio, Object.
2. Create a subobject (for example, Compliance or Opportunities) for the Project master object.
3. Select the API Enabled checkbox for the subobject. When you API-enable a new or existing project subobject, an API Attribute ID is generated for the subobject using the subobject ID prefixed with "cust" (for example, "custoOpportunities"). You can see this ID on the objects list page.
4. Create attributes for the subobject. Specify a value for the API Attribute ID for all attributes. The subobject dynamically creates the Compliance module and views in the project blueprints in Clarity.
5. In Clarity, click a project blueprint and navigate to Module.
6. Click Edit. Drag-and-drop the Compliance module to the blueprint modules section.
7. Click Publish.
8. Create a new project based on a template that uses the blueprint you just edited and published.
9. Verify that your new custom subobject module appears as a tab. Click COMPLIANCE to open the new grid layout on its own dedicated page for working with instances and attributes of your custom Compliance subobject.

## View Investments Associated with Resources

Currently, investment managers and resource managers must navigate to the dedicated Staffing workspace to view over and under-allocated resources through specialized tabs such as Allocations by Resource and Allocations by Investment. This creates workflow inefficiencies and context switching that can slow down resource management decisions.

You can now view resource-specific staffing allocation data directly from the Staff tab on an investment (Project, Idea, Custom Investment). You can edit the investment blueprint and add the Investments module as a sub-module for the Staff tab.

**Follow these steps:**

1. Open and edit the relevant investment blueprint.
2. Click the Staff module and select the Enable Properties Navigation toggle.
3. Click Edit module details.
4. On the left pane, click Modules, and drag and drop the Investments module to the right pane.
5. Click Publish to save your changes.

## Review Common Capabilities

To learn more about common capabilities in the project blueprint, see:

- Configure Modules
- Control Sub-Object Instance Creation
- Specify the Fields Needed to Create a Sub-Object Instance
- Define a Canvas
- Work with Business Rules
- Associate Processes with Blueprints
- Use Channels to Embed External Content

## Related
- [[Common Capabilities]]
- [[_MOC Administration]]

%%Source: p1826-1835%%
