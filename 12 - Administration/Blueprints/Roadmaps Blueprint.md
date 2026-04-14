---
title: Roadmaps: Configure Blueprints
tags:
  - admin
aliases:
  - Roadmaps Blueprint
---
# Roadmaps: Configure Blueprints

- All sub-objects configured at the Investment object level or those configured for Project, Idea, or Custom Investments objects are available to be configured as modules.
- Like Risks, Issues, Changes and Status modules, users will only see sub-object module information only if the associated investment type has been imported into the hierarchy.
- Field level security and business rules are enforced in the hierarchy grid. - If a configured module is specific to an Investment Type and there are no instances of the Investment Type in
a hierarchy, the module will not have any data to display.
Associate a Blueprint with a Hierarchy You can navigate to the Hierarchies page and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant hierarchy.
Review Common Capabilities To learn more about common capabilities in the investment and objective hierarchy blueprint, see: - Organize the Properties Module Using Sub Tabs - Define a Canvas - Use Channels to Embed External Content
> [!note]
> Some key points to remember while defining the canvas are: - The following table widgets are available:
> - Investments - Staff - Risks - Issues - Changes - Financials - Cost Plan Details - Financials - Budget Plan Details - Financials - Benefit Plan Details - Status - Custom Sub-objects - Canvas can be added to any existing or new hierarchy.
> Roadmaps: Configure Blueprints
> As an application administrator or PMO content designer, you can use blueprints to configure layouts for roadmaps. You can copy and configure blueprints that reflect the goals of each business unit in your organization. Let's consider an example where multiple product management teams in the organization are using roadmaps to achieve different business outcomes. They have created multiple custom attributes. Some attributes are relevant to the New Banking Application Product Management roadmap while others are relevant to the Next-Gen AI roadmap. The administrator can create different blueprints for these teams so each team would only see information relevant to them.hi
> Clarity includes a default roadmap blueprint. You can create a copy of the blueprint and edit it to suit your goals. For example, a marketing blueprint may be very different from an engineering blueprint.
> The key steps you need to follow while editing blueprints are:
> 1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields).

2. Add the relevant modules to the blueprint. In the current release, the blueprint includes the Investments and the Properties modules. Both modules will automatically be included in your blueprint.
3. Publish the blueprint.
4. (Optional): Mark a blueprint as the default blueprint for roadmaps.
This section contains the following topics:
- Edit Blueprint Details - Standard Roadmap Modules - Add Modules to Blueprints - Associate a Blueprint with a Roadmap - Review Common Capabilities
Edit Blueprint Details
You can add various stock and custom attributes associated with Roadmaps to the Properties module in a blueprint.
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
> Configure Help Text in Blueprints
> In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String - Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.

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

1. Navigate to Administration, Blueprint.
2. Click the name of the blueprint that you want to edit and click Edit.
3. Select the MODULES tab.
4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
> [!important]
> Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Roadmap. 5. Click Publish to save your changes and make the changes available to users.

## Related
- [[Common Capabilities]]
- [[_MOC Administration]]

%%Source: p1859-1862%%


