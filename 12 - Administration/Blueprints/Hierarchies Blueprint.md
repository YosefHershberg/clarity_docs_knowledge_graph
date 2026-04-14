---
title: Investment and Objective Hierarchy: Configure Blueprints
tags:
  - admin
aliases:
  - Hierarchies Blueprint
---
# Investment and Objective Hierarchy: Configure Blueprints

- Organize the Properties Module Using Sub Tabs - Configure Modules - Specify the Fields Needed to Create a Sub-Object Instance - Work with Business Rules - Associate Processes with Blueprints - Use Channels to Embed External Content
You can use blueprints to configure layouts for various investments in Clarity.
Properties: You can add various stock and custom attributes associated with relevant objects to the Properties tab in a blueprint. The sections and the fields you add here will be available in the Properties module in Clarity.
Modules: The various subobjects associated with the relevant object are available as modules for the associated blueprint. You can add these modules to the blueprint to make them available to your users.
Rules: You can create business rules in Blueprints to control the modules or sections displayed to end-users.

When you define business rules, you need to perform three key steps namely Define a Condition, Define Actions, Define Action Targets.

You can now configure business rules to mark a record as read-only in Clarity if the conditions set in the business rule are satisfied.

You can also configure business rules to mark an attribute(s) as read-only in Clarity if the conditions set in the business rule are satisfied.
Actions: You can use the Actions tab to associate the relevant processes with the blueprint. You will only be able to associate a process when the following conditions are met:
- The process is active. - The process is associated with the object, or it includes a custom script (GEL). - You have access to the process.
Create From Template: You can use it to configure all the out-of-the-box and custom fields that users need to populate in the New Team Investment window when users create a new team investment from a template.
Channels: You can use channels to embed content from another source, such as an external site, application, or Classic PPM context-sensitive investment reports into Clarity.

You can interact with the content and make informed business decisions without leaving an investment in Clarity.

As an administrator, you can add a channel to the blueprint, and configure a maximum of fifteen (15) channels. After you create a channel, you can find it in the Modules panel.

After you publish the blueprint, the newly created channel appears as a tabbed page within the investment (Project, Custom Investment, Ideas) and Custom Objects.
You can designate a blueprint as the default blueprint for your organization. All existing records not associated with any blueprint are associated with the current default blueprint.
With the appropriate access rights, you can delete any user-defined blueprint.
Some scenarios in which you will see error or warning messages for Business Rules are:
- You have defined only one Action and the Action Target is missing. - You have defined only one Condition is defined and the Condition Value is missing. - An administrator deletes or deactivates an attribute that was used in a rule.
No new capabilities were introduced in this release.
Investment and Objective Hierarchy: Configure Blueprints

As an application administrator or PMO content designer, you can use blueprints to configure layouts for investment and objective hierarchies. You can copy and configure blueprints that reflect the goals of each business unit in your organization.
Clarity includes a default Hierarchy and Objective Hierarchy blueprints. You can create a copy of the blueprint and edit it to suit your goals. For example, a marketing blueprint may be very different from an engineering blueprint.
The key steps you need to follow while editing blueprints are:
1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields).
2. Add the relevant modules to the blueprint. In the current release, the blueprint includes the Investments and the
3. Publish the blueprint.
4. (Optional): Mark a blueprint as the default blueprint for hierarchies.
This section contains the following topics:
- Edit Blueprint Details - Standard Hierarchy Modules - Add Modules to Blueprints - Introducing Sub Objects as Modules - Associate a Blueprint with a Hierarchy - Review Common Capabilities
Edit Blueprint Details
You can add various stock and custom attributes associated with Hierarchies to the Properties module in a blueprint.
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
> In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor

guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String - Rich Text attribute to permit users to enter large text in rich text format.

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

Standard Hierarchy Modules The Standard Investment Hierarchy blueprint includes the following modules.

- Audit - Changes - Conversations - Financials - Investments - Issues - Properties - Risks - Status - Staff The standard Objectives Hierarchy blueprint includes the following modules.

- Objectives - Audit - Properties - Key Results - Conversations - Canvas

1. Navigate to Administration, Blueprint.
2. Click the name of the blueprint that you want to edit and click Edit.
3. Select the MODULES tab.
4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
> [!important]
> - Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on
> the Show in Details Flyout option, you can see Conversations in the Details panel of the Hierarchy. - Audit Module: The Hierarchy's Audit module capabilities are limited to only the Hierarchy object
> attributes enabled for audit. It is is not an audit aggregator for all the investments within the hierarchy. In Classic, enable the desired attributes on the Hierarchy object for audit purposes and select either change, insert, or delete configuration options. 5. Click Publish to save your changes and make the changes available to users. Introducing Sub Objects as Modules
> The Hierarchies blueprint now includes a list of all custom sub objects across all investment types. Administrators can configure these sub objects to be displayed as modules in hierarchies. End users with appropriate permissions can then view and edit sub-object module information directly within the module, without having to drill down to the details of the investment.
> NOTE Some key points to remember are:

## Related
- [[Common Capabilities]]
- [[_MOC Administration]]

%%Source: p1854-1858%%


