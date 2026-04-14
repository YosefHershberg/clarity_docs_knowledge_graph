---
title: Pages: Configure Blueprints
tags:
  - admin
aliases:
  - Pages Blueprint
---
# Pages: Configure Blueprints

Pages: Configure Blueprints
As an application administrator or PMO content designer, you can use blueprints to configure layouts and define Canvas as modules for Pages.

You can copy and configure blueprints that reflect the goals of each business unit in your organization.

Let's consider an example where multiple product management teams in the organization are using pages to access different parts of Classic PPM.

Some parts of Classic PPM are relevant to the New Banking Application Product Management team while the Next-Gen AI team accesses different parts of Classic PPM.

The administrator can create different blueprints for these teams so each team would only see information relevant to them.
Clarity includes a default Pages blueprint. You can create a copy of the blueprint and edit it to suit your goals. For example, a marketing blueprint may be very different from an engineering blueprint.
The key steps you need to follow while editing blueprints are:
1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields).
2. Add the relevant channels and canvas to the blueprint. The Properties modules will automatically be included in your
3. Publish the blueprint.
4. (Optional): Mark a blueprint as the default blueprint for pages.
This section contains the following topics:
- Edit Blueprint Details - Define a Canvas for Pages - Review Common Capabilities
Edit Blueprint Details
You can add various stock and custom attributes associated with pages to the Properties module in a blueprint.
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
> Some key points to remember are:

- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section. - You can resize and/or move like other attributes in the layout. - The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration. - Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters. - The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function. - As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.

Define a Canvas for Pages

From the Clarity 16.0.2 or later releases, you can define Canvas as modules with Pages in Blueprints.

At a canvas level in Page Blueprints, as an Admin, you can configure (select) which table widgets (canvas components) will be available to users when configuring their Page canvases using a drag/drop list.

You can: - Control the order of these Widgets that appear for Users during their canvas configuration by the drag/drop list order. - Change the canvas name. - Define multiple canvases within the same Page blueprint.

Each module can have different options enabled. - Enable or disable the widgets you want for users in the canvas using the Enabled toggle button. Disabled table widgets
are moved to the bottom of the list and can no longer be dragged. This is an easy way to disable objects that you do not use in Clarity.
Follow these steps:
1. From the blueprint list, click the name of the page blueprint.

## Related
- [[Common Capabilities]]
- [[_MOC Administration]]

%%Source: p1869-1872%%


