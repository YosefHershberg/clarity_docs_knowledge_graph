---
title: Ideas: Configure Blueprints
tags:
  - admin
aliases:
  - Ideas Blueprint
canonical: true
audience: admin
domain: administration
---
# Ideas: Configure Blueprints

## Overview

The Standard Idea blueprint was introduced in Classic PPM 15.6.1 and allows administrators or PMO content designers to configure layouts for ideas based on different business needs. You can configure Custom Idea Subobjects and Attributes to appear in blueprints.

**Example:** Jason is a Classic PPM administrator. Multiple teams in his organization use the Ideas grid to develop and evaluate new ideas. The Product Development and Product Architecture teams often contribute a large number of ideas, but management evaluates them on different criteria. The Product Development team is judged on financial details such as planned cost and planned benefit details. The Product Architecture team is judged on technical details such as architectural fit, technology compliance, and regulatory compliance. Jason wants to create different blueprints for these teams so that their management teams can quickly view relevant details and take appropriate actions on the idea.

This section contains the following topics:

- Prerequisites
- Explore the Standard Idea Blueprint
- Copy, Edit, and Publish a Blueprint
- Specify the Fields Needed to Create an Idea From Template
- Create a Custom Subobject for an Idea
- Configure Custom Idea Attributes to Appear in Blueprints
- Configure the Financials Module for Ideas Using Blueprint
- Delete Blueprints
- View Investments Associated with Resources
- Review Common Capabilities

## Prerequisites

Depending on your access rights as the application owner, you can configure the blueprinting capabilities in Clarity. Verify that you have the appropriate rights for configuring blueprints. Some of the rights available to you are:

- Blueprint - Create Copy
- Blueprint - Delete All
- Blueprint - Edit All
- Blueprint - View All

For more information about access rights, see Clarity Access Rights in the Reference section.

## Explore the Standard Idea Blueprint

The Standard Idea blueprint has been introduced in Classic PPM 15.6.1. You can copy this blueprint and configure it to match the specific business requirements of various departments. When end-users create ideas based on the configured blueprint, they only see details that are relevant to their new idea.

**Follow these steps:**

1. Log in to Clarity.
2. In the main menu, click Administration, Blueprints.
3. Click the Standard Idea blueprint to open it.
4. The following default attributes are included as fields on the standard blueprint for ideas:
   - Subject
   - Idea ID
   - Idea Type
   - Objective
   - Work Status
   - Original Requester
   - Sponsor
   - Manager
   - Start Date
   - Finish Date
5. Click the Back button to return to the Blueprints page.

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

## Copy, Edit, and Publish a Blueprint

Create a new blueprint by copying an existing blueprint. Select the standard blueprint and click Copy. When you create a blueprint by copying an existing blueprint, the details and modules from the existing blueprint are copied over. You can tailor the details in the new blueprint for specific ideas that may be associated with different teams or departments.

> [!note]
> You can rename or edit the configuration of user-defined idea blueprints. You cannot edit or delete the Standard Idea blueprint.

**Example:** Jason wants to create a copy of the Standard Idea blueprint and customize it to suit the requirements of the product development team.

**Follow these steps:**

1. Log in to Clarity.
2. In the main menu, click Administration, Blueprints.
3. Select the Standard Idea blueprint and click Copy to create a new blueprint.
4. Click the Rename icon to enter the name of the blueprint.
5. From the blueprint list, click the name of the blueprint that you want to edit.
6. On the details page that displays the currently published blueprint layout, click Edit.
7. Edit the blueprint details:
   - Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle in the bottom-right of the field.
   - Drag-and-drop fields from a blueprint layout section to another section.
   - Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in a section to remove that field. The field goes back to being an available field.
   - Delete a section with or without fields. All fields within that section are removed from the layout and are available again to select from the Fields panel.
   - Drag an existing section up or down within the blueprint to rearrange the sections along with all fields in the section.
8. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version.
9. Click Publish to save your changes and make the new layout available to projects. All projects associated with this blueprint display the new layout.

> [!tip]
> When you publish a blueprint, all edits in progress for the details and modules are published at once. All ideas that are associated with the blueprint display the latest layout that is configured for the blueprint.

## Standard Idea Modules

The Standard Idea blueprint includes the following modules. The same modules appear as clickable icons on the tile for an idea associated with the Standard Idea blueprint:

- Agreements
- Assignments
- Changes
- Checklists
- Conversations
- Financials
- Issues
- Links
- Properties
- Risks
- Staff
- Status
- To Dos

## Add Modules to Blueprints

You can add the required modules to the blueprint.

**Follow these steps:**

1. Navigate to Administration, Blueprint.
2. Click the name of the blueprint that you want to edit and click Edit.
3. Select the MODULES tab.
4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.

> [!important]
> **Action Items:** In Clarity 16.1.0 and higher releases, you can add the Action Items module that will display Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, and Custom Investments. You need no new security rights for this module. If you have access to view the Investment, you can view all the Action Items for the investment.
>
> **Conversations Module:** You will see an option "Show in Details Flyout" for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Investment.

5. Click Publish to save your changes and make the changes available to users.

## Specify the Fields Needed to Create an Idea From Template

The Idea blueprint includes a Create From Template module. Administrators can use it to configure all the out-of-the-box and custom fields that users need to populate in the New Idea window when users create a new Idea from a template.

Some key points to remember while using the Create From Template Module are:

- All mandatory idea fields will be displayed on the screen provided they do not have a default value set or auto-numbering.
- Administrators cannot remove mandatory fields without default values or auto-numbering from the New Idea section.
- Administrators cannot add the Blueprint field to the New Idea section.
- In this release, you cannot add Timescaled value and Attachment fields to the Create From Template section.

> [!note]
> The New Idea window can display a maximum of 200 fields.

**Follow these steps:**

1. Navigate to the existing idea blueprint to create a copy of the standard blueprint.
2. Open the blueprint and select the Create from Template tab.
3. Click Edit.
4. Locate and add the relevant fields to the New Idea section.
5. Click Publish to save your changes.

## Create a Custom Subobject for an Idea

You can configure custom subobject modules for Ideas. The subobject will then be available as a module in the Idea Blueprint. You can then publish the blueprint to ensure that the module is available in Clarity.

**Follow these steps:**

1. Log in to Classic PPM UI.
2. Navigate to Administration, Studio, Objects.
3. Click New. The Create Object Definition page opens.
4. Specify the following details:
   - Object Name
   - Object ID
5. Select Subobject.
6. In the Master Object field, type Idea, and select the Idea master object that is populated.
7. Select the API Enabled checkbox.

> [!note]
> - Checking the API Enable checkbox lets you view the subobject in Clarity. You can API enable already existing custom subobjects.
> - Instance-level access rights do not work on custom sub-objects in Clarity. Global-level access rights are currently supported in Clarity.

8. Click Save.

### Configure an Idea Blueprint to Include a Custom Subobject Module

**Follow these steps:**

1. Log in to Clarity.
2. Navigate to Administration, Blueprints, select an Idea Blueprint.
3. Navigate to the Modules tab. The new subobject is listed in the MODULES panel.
4. Click EDIT, drag and drop the new subobject, and click PUBLISH. The newly created subobject module is now added to Ideas. After you have API Enabled the subobject in Studio, the subobject is created and will be available as a module in Blueprints in Clarity.

### Use the Custom Subobject in an Idea

**Follow these steps:**

1. Log in to Clarity.
2. Navigate to Ideas, select an idea from the grid. The new subobject is now available as one of the modules.
3. Click the new subobject module, click the (+) plus icon to add attributes.

> [!tip]
> The generic grid properties are applicable to the attributes.

## Configure Custom Idea Attributes to Appear in Blueprints

If you have created custom idea attributes in Classic PPM, you can ensure their attributes are available in Idea blueprints.

**Follow these steps:**

1. In Classic PPM, select Administration, Objects.
2. In the Object Name field, enter Idea, and select Filter.
3. Click the Idea object and select the Attributes tab to view all the attributes associated with the Idea object.
4. Filter and locate the custom idea attribute that you want to display in the standard and user-defined blueprints.
5. Enter a unique value in the API Attribute ID field and click Save to confirm your changes.
6. Open the blueprint you want to edit.
7. Locate and drag-drop the custom idea attribute in the appropriate section of the blueprint.

## Configure the Financials Module for Ideas Using Blueprint

If you want to enable the Financials module in Ideas, you can do so using the Blueprint. Ensure that the following rights are provided to the user before proceeding.

**Follow these steps:**

1. Log in to Clarity.
2. Navigate to Administration, Blueprints.
3. Select Idea Default blueprint and make a copy.
4. Edit, rename, and open the new Idea blueprint.
5. Navigate to Modules, click Edit, drag and drop the Financials module, and click Publish. The Financials module is now enabled.
6. Navigate to Ideas from the main menu and open an idea. The Financials module is visible.
7. Click FINANCIALS. The cost plan list appears in grid layout.

## Delete Blueprints

With the appropriate access rights, you can delete any user-defined blueprint.

If you delete a blueprint that is not the default, all templates and projects that are associated with the blueprint are then re-associated with the current default blueprint.

If the Standard Idea blueprint is the default blueprint, all ideas are associated with this blueprint.

If you delete a user-defined default blueprint, then the associated templates and projects are also re-associated with the Standard Idea blueprint. The Standard Idea blueprint becomes the new default blueprint.

You cannot delete the Standard Idea blueprint.

## View Investments Associated with Resources

You can view resource-specific staffing allocation data directly from the Staff tab on an investment. Edit the investment blueprint and add the Investments module as a sub-module for the Staff tab.

**Follow these steps:**

1. Open and edit the relevant investment blueprint.
2. Click the Staff module and select the Enable Properties Navigation toggle.
3. Click Edit module details.
4. On the left pane, click Modules, and drag and drop the Investments module to the right pane.
5. Click Publish to save your changes.

## Review Common Capabilities

To learn more about common capabilities in the idea blueprint, see:

## Related
- [[Common Capabilities]]
- [[_MOC Administration]]

%%Source: p1836-1843%%
