---
title: Agreements: Configure Blueprints
tags:
  - admin
aliases:
  - Agreements Blueprint
---
# Agreements: Configure Blueprints

Associate a Blueprint with a Roadmap You can navigate to the Roadmap page and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant roadmap.
Review Common Capabilities To learn more about common capabilities in the roadmap blueprint, see: - Organize the Properties Module Using Sub Tabs - Define a Canvas - Use Channels to Embed External Content
> [!note]
> Some key points to remember while defining the canvas are: - Only Roadmap Items table widget is available in Canvas. - Canvas can be added to any existing or new roadmap.
> Agreements: Configure Blueprints
> As an application administrator or PMO content designer, you can use blueprints to configure layouts for the Agreements workspace. You can copy and configure blueprints that reflect the goals of each business unit in your organization. Let's consider an example where multiple product management teams in the organization are using agreements. You can create different blueprints that include custom fields and relevant channels to those stakeholders. Clarity includes a default Agreements blueprint. You can create a copy of the blueprint and edit it to suit your goals. The key steps you need to follow while editing blueprints are: 1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant modules to the blueprint. In the current release, the blueprint includes the Properties and Canvas
> modules. 3. Publish the blueprint. 4. (Optional): Mark a blueprint as the default blueprint for agreements.
> This section contains the following topics: - Edit Blueprint Details - Standard Agreement Modules - Add Modules to Blueprints - Associate Blueprint with the Agreement - Review Common Capabilities
> Edit Blueprint Details You can edit a blueprint to include additional fields in the Properties module. Follow these steps: 1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:

- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section. - Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field. - Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel. - Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version.
5. Click Publish to save your changes and make the new layout available to projects. All projects associated with this blueprint display the new layout. Configure Help Text in Blueprints In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String - Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.

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

Standard Agreement Modules The Standard Agreement blueprint includes the following modules. The same modules appear as clickable icons on the tile for an agreement that is associated with the Standard Agreement blueprint. - Canvas - Checklists - Conversations - Properties
1. Navigate to Administration, Blueprint.
2. Click the name of the blueprint that you want to edit and click Edit.
3. Select the MODULES tab.
4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
> [!important]
> Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Agreement. 5. Click Publish to save your changes and make the changes available to users.
> Specify the Fields Needed to Create an Agreement The Agreement blueprints includes a Create From Template module. Administrators can use it to configure all the out-ofthe-box and custom fields that users need to populate in the New Agreement window when users create a new agreement from a template. Some key points to remember while using the Create From Template Module are: - All mandatory project fields will be displayed on the screen provided they do not have a default value set or auto-
> numbering. - Administrators cannot remove mandatory fields without default values or auto-numbering from the
> New Agreement section. - Administrators cannot add the Blueprint field to the New Agreement section. - In this release, you cannot add Timescaled value, Multi-value Lookups, and Attachment fields to the Create From
> Template section. NOTE The New Agreement window can display a maximum of 200 fields.
> Follow these steps: 1. Navigate to the existing Agreement blueprint to create a copy of the standard blueprint. 2. Open the blueprint and select the Create from Template tab. 3. Click Edit. 4. Locate and add the relevant fields to the New Agreement section. 5. Click Publish to save your changes.

## Related
- [[Common Capabilities]]
- [[_MOC Administration]]

%%Source: p1863-1866%%


