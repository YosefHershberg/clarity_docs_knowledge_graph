---
title: Resources: Configure Blueprints
tags:
  - admin
aliases:
  - Resources Blueprint
---
# Resources: Configure Blueprints

Specify the Fields Needed to Create an Objectives The Objectives blueprints includes a Create From Template module.

Administrators can use it to configure all the out-ofthe-box and custom fields that users need to populate in the New Objectives window when users create a new Objectives from a template.

Some key points to remember while using the Create From Template Module are: - All mandatory project fields will be displayed on the screen provided they do not have a default value set or auto-
numbering. - Administrators cannot remove mandatory fields without default values or auto-numbering from the
New Objectives section. - Administrators cannot add the Blueprint field to the New Agreement section. - In this release, you cannot add Timescaled value, Multi-value Lookups, and Attachment fields to the Create From
Template section. NOTE The New Objectives window can display a maximum of 200 fields.
1. Navigate to the existing Objectives blueprint to create a copy of the standard blueprint.
2. Open the blueprint and select the Create from Template tab.
3. Click Edit.
4. Locate and add the relevant fields to the New Objectives section.
5. Click Publish to save your changes.
Associate Blueprint with Objectives You can navigate to the Objectives workspace and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant objective.
Review Common Capabilities To learn more about common capabilities in the objective blueprint, see: - Organize the Properties Module Using Sub Tabs - Configure Modules - Specify the Fields Needed to Create a Sub-Object Instance - Define a Canvas - Work with Business Rules - Associate Processes with Blueprints - Use Channels to Embed External Content
> [!note]
> Some key points to remember while defining the canvas are: - The following table widgets are available:
> - Key Results - Custom Sub-objects - Canvas can be added to any existing or new hierarchy.
> Resources: Configure Blueprints

1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields).
2. Add the relevant modules to the blueprint. In the current release, the blueprint includes the Properties module.
3. Publish the blueprint.
> [!note]
> The Resources Blueprint is used to configure layouts for both Resources and Roles. It's recommended that you create separate blueprints for Resources and for Roles. You can then customize these blueprints to display relevant attributes. Finally, you can associate Resources and Roles with their respective blueprints. This section contains the following topics: - Edit Blueprint Details - Standard Plan Modules - Add Modules to Blueprints - Associate Blueprint with Resources - Review Common Capabilities

1. From the blueprint list, click the name of the blueprint that you want to edit.
2. On the details page that displays the currently published blueprint layout, click Edit.
3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section. - Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field. - Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel. - Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version.
5. Click Publish to save your changes and make the new layout available to projects. All projects associated with this blueprint display the new layout.
Configure Help Text in Blueprints In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens.

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

1. Navigate to Administration, Blueprint.
2. Click the name of the blueprint that you want to edit and click Edit.
3. Select the MODULES tab.
4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
5. Click Publish to save your changes and make the changes available to users. Associate Blueprint with Resources You can navigate to the Plan workspace and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant plan. Review Common Capabilities To learn more about common capabilities in the resource blueprint, see:

## Related
- [[Common Capabilities]]
- [[_MOC Administration]]

%%Source: p1877-1881%%


