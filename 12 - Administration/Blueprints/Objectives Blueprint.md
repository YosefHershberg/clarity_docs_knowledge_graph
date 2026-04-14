---
title: Objectives: Configure Blueprints
tags:
  - admin
aliases:
  - Objectives Blueprint
canonical: true
audience: admin
domain: administration
---
# Objectives: Configure Blueprints

## Overview

As an application administrator or PMO content designer, you can use blueprints to configure layouts for the Objectives workspace. You can copy and configure blueprints that reflect the goals of each business unit in your organization.

For example, multiple product management teams in the organization are using Objectives. You can create different blueprints that include custom fields and channels that are relevant to those stakeholders.

Clarity includes a default Objectives blueprint. You can create and edit a copy of the blueprint to suit your goals.

The key steps you need to follow while editing blueprints are:

1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields).
2. Add the relevant channels and canvas to the blueprint. The Properties modules will automatically be included.
3. Publish the blueprint.
4. (Optional) Mark a blueprint as the default blueprint for Objectives.

This section contains the following topics:

- Edit Blueprint Details
- Configure Help Text in Blueprints
- Standard Objective Modules
- Add Modules to Blueprints
- Associate Blueprint with Objectives
- Review Common Capabilities

## Edit Blueprint Details

You can add various stock and custom attributes associated with objectives to the Properties module in a blueprint.

**Follow these steps:**

1. From the blueprint list, click the name of the blueprint that you want to edit.
2. On the details page that displays the currently published blueprint layout, click Edit.
3. Edit the blueprint details:
   - Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle in the bottom-right of the field.
   - Drag-and-drop fields from a blueprint layout section to another section.
   - Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in a section to remove that field. The field goes back to being an available field.
   - Delete a section with or without fields. All fields within that section are removed from the layout and are available again to select from the Fields panel.
   - Drag an existing section up or down within the blueprint to rearrange the sections. All fields contained in the section also move to the new location.
   - Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section.

> [!note]
> You can only add a custom attribute to a blueprint if it is API enabled.

4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version.
5. Click Publish to save your changes and make the new layout available.

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

## Add Modules to Blueprints

**Follow these steps:**

1. Navigate to Administration, Blueprint.
2. Click the name of the blueprint that you want to edit and click Edit.
3. Select the MODULES tab (for example, Key Results).
4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
5. Click Publish to save your changes and make the changes available to users.

### Define a Canvas

You can configure canvas widgets as part of Objectives blueprints.

**Follow these steps:**

1. From the Modules tab, click New Canvas.
2. Perform the following to configure the canvas:
   - **Name:** Enter the canvas name.
   - **Enabled:** Toggle to enable or disable multiple object widgets.
   - Drag the objects up or down to define the order of widget display in Canvas.
3. If you are unsure of the changes, click Discard Edits. The edits are deleted and the blueprint details view reverts to the published version.
4. Click Publish to save your changes and make the new canvas available to Pages. When you publish a blueprint, all edits in progress for the details and modules are published at once. All Pages associated with the blueprint display the latest layout that is configured for the blueprint.

> [!note]
> Some key points to remember about Canvas:
> - The following table widgets are available: Tasks, Risks, Issues, Changes, To Dos, and Action Items.
> - Canvas can be added to any existing or new pages.

> [!note]
> Even if the object is disabled in Blueprints, it is not removed from a saved view in Pages. However, if you remove the table object from the saved view, you cannot add the same again.

## Review Common Capabilities

To learn more about common capabilities in the page blueprint, see:

- Organize the Properties Module Using Sub Tabs
- Work with Business Rules
- Associate Processes with Blueprints
- Use Channels to Embed External Content

Channels allow you to embed content from another source — such as an external site, application, or Classic PPM context-sensitive investment reports — into Clarity. You can interact with the content and make informed business decisions without leaving an investment in Clarity.

As an administrator, you can add a channel to the blueprint and configure a maximum of fifteen (15) channels. After you create a channel, you can find it in the Modules panel. After you publish the blueprint, the newly created channel appears as a tabbed page within the investment (Project, Custom Investment, Ideas) and Custom Objects.

After you add a channel, you need not drag and drop the new channel to the blueprint layout section — it is automatically added. After you create 15 channels, you can no longer see the New Channel button.

## Related
- [[Common Capabilities]]
- [[_MOC Administration]]

%%Source: p1873-1876%%
