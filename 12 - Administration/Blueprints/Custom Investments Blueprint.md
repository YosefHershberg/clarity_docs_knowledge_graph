---
title: Custom Investments: Configure Blueprints
tags:
  - admin
aliases:
  - Custom Investments Blueprint
---
# Custom Investments: Configure Blueprints

- Organize the Properties Module Using Sub Tabs - Configure Modules - Control Sub-Object Instance Creation - Specify the Fields Needed to Create a Sub-Object Instance - Define a Canvas - Work with Business Rules - Associate Processes with Blueprints - Use Channels to Embed External Content
> [!note]
> Some key points to remember while defining the canvas are:
> - You can set the following objects as Target Objects in Widgets: - Tasks - Risks - Issues - Changes - To Dos - Financials - Benefit Plan Details - Financials - Benefit Plans - Financials - Budget Plan Details - Financials - Budget Plans - Financials - Cost Plan Details - Financials - Cost Plans - Custom Objects (second level only) - Object-specific attributes - The Action Items widget is not available as a widget. Action Items are available as a module to be included in the blueprint
> - You can add Canvas to any existing or new idea.
> Custom Investments and Custom Objects: Configure Blueprints
> As an application administrator or PMO content designer, use blueprints to configure layouts for different custom investments and custom master objects. You can use blueprints to configure layouts for different types of custom investments in alignment with your organizational goals.
> When you create a custom investment or a custom master object, a blueprint is automatically created in Clarity. You can create a copy of the blueprint and edit it to suit your goals. For example, a marketing blueprint may be very different from an engineering blueprint.
> The key steps you need to follow while editing blueprints are:
> 1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant modules to the blueprint. 3. Publish the blueprint. 4. Mark a blueprint as the default blueprint for relevant investment items and custom master objects.
> This section contains the following topics:

- Edit Blueprint Details - Add Modules to Blueprints - Specify the Fields Needed to Create a Custom Investment - Associate a Blueprint with an Investment Item or Custom Master Object - View Investments Associated with Resources - Review Common Capabilities

Edit Blueprint Details
You can add various stock and custom attributes associated with custom investment items and custom master objects to the Properties module in a blueprint.
Follow these steps:
1. From the blueprint list, click the name of the blueprint that you want to edit.
2. On the details page that displays the currently published blueprint layout, click Edit.
3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section. - Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field. - Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel. - Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location. - Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section.
> [!note]
> You can only add a custom attribute to a blueprint if it is API enabled. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available.

Configure Help Text in Blueprints
In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens.

This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity.

For this, you can use the Help Text attribute in the blueprint to create a Large String - Rich Text attribute to permit users to enter large text in rich text format.

By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding.

Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience.

This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.

1. Navigate to Administration, Blueprint.
2. Click the name of the blueprint that you want to edit and click Edit.
3. Select either the Create From Template or Properties tab.
4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint.
5. Click Publish to save your changes and make the changes available to users.
> [!note]
> Some key points to remember are: - As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint
> Create From Template and Properties windows. - You can reuse multiple times in the same layout within the same area or section. - You can resize and/or move like other attributes in the layout. - The display of the Help Text, including its format, location, and size, is determined by
> the admin's configuration. - Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters. - The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
> function. - As a user, you can view the Help Text when accessing both the Create From Template and Properties
> windows, but it remains read-only.

1. From the blueprint list, click the name of the blueprint that you want to edit.
2. On the details page that displays the currently published blueprint layout, click Edit.
3. Select the MODULES tab.
4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
> [!important]
> - Action Items: In the Clarity 16.1.0 and higher releases, you can add the Action Items module that will
> display Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, and Custom Investments. You need no new security rights for this module. If you have access to view the Investment, you can view all the Action Items for the investment. - Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Investment. 5. Click Publish to save your changes and make the changes available to users.

Standard Custom Investment and Custom Object Modules
The Standard Custom Investment and Standard Custom Object blueprints include the following modules.

The same modules appear as clickable icons on the tile for custom investment and custom object that are associated with the Standard Custom Investment and Standard Custom Object blueprints respectively.
- Agreements - Assignments - Changes - Checklists - Conversations - Financials - Issues - Links - Properties - Risks - Staff - Status - Tasks - To Dos
Specify the Fields Needed to Create a Custom Investment or Custom Master Object
The custom investment or or custom object blueprints includes a Create From Template module. Administrators can use it to configure all the out-of-the-box and custom fields that users need to populate in the New Investment (or Object name) window when users create a new project from a template.
Some key points to remember while using the Create From Template Module are:
- All mandatory project fields will be displayed on the screen provided they do not have a default value set or autonumbering.
- Administrators cannot remove mandatory fields without default values or auto-numbering from the New Investment (or Object name) section.
- Administrators cannot add the Blueprint field to the New Investment (or Object name) section. - In this release, you cannot add Timescaled value, Multi-value Lookups, and Attachment fields to the Create From
Template section. - When working with custom objects:
- Custom Master Object support is available for the Template attribute in Process. - If you enable an Object to be Template Enabled, Clarity will remove all instance data upon deletion.

- Note that XOG currently does not support the Custom Master Object Template attribute. - If you, as an Admin, update an existing Object to be API enabled, then features such as the Create from Template
tab in Blueprints, new global security right to create from template, New From Template button for creation, and Template and Originating Template Attributes will become available.

- The Create From Template function is unavailable in these Objects: Roadmaps, Hierarchies, Plans, Resources, and Pages.

- When creating "Always True" Required Attribute Business Rules, Boolean data type attributes are not supported, and an error message will display if you try to save the rule.

However, you can successfully build and implement a Business Rule using a Boolean data type attribute as part of the Condition evaluation criteria.

- Similarly, virtual attributes are not supported when creating "Always True" Required Attribute Business Rules, and they are not available as a selection attribute in the rule's Required Attributes list under Actions.

But you can

## Related
- [[Common Capabilities]]
- [[_MOC Administration]]

%%Source: p1844-1848%%


