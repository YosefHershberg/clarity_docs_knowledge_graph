# Getting Started with Clarity Administration

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[12 - Administration/_MOC Administration|Administration]]
- Canonical notes:
- [[12 - Administration/Staffing Administration]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->

With these updates, all style and design decisions made in the Report Designer--such as borders, colors, table styles, and per-period metric formatting are now honored in the exported output.
In Clarity 16.4.0, report schedulers can now choose to exclude one or more report tabs when scheduling reports for export. This enhancement provides greater control when exporting large, multi-tabbed reports and helps users stay within system limits while delivering only the most relevant content.
In Clarity 16.4.0, new capabilities have been introduced to improve report lifecycle management and usability within the Reports Library. These include the ability to delete reports directly from the library, a new job to permanently purge report instances, and a new details flyout to view report information quickly.
Getting Started with Clarity Administration
This section of the documentation focuses on your key responsibilities as an administrator for Clarity. If you want to learn more about administering Classic PPM, see Administering Classic PPM.
Some key actions you are expected to perform while administering Clarity are:
- Setup Clarity for first time use: After you have installed Clarity and setup Classic PPM, you need to enable the New User Experience now rebranded as Clarity. You also need to activate timesheets and setup timesheet attestation. For more information on how to perform these activities, see Setting Up Clarity
- Configure Blueprints: As an application administrator or PMO content designer, you use blueprints to configure layouts for different types of investments. You can copy and configure blueprints that reflect the goals of various stakeholders in your organization. For example, you can create a marketing blueprint that includes the Target Segments and Pilot Launch Date fields and does not include the Staff, Tasks, Financials, and Assignments modules. To learn more about managing blueprints, see Getting Started with Blueprints.
- Setup Field-Level Security: You can implement Field Level Security in Clarity to ensure you provide access to specific attributes or fields for specific user groups in Projects, Ideas, Custom Investment Items, and Custom Objects. Users who have access to the secured attributes can view them in both board and grid views. To learn more about setting up Field-Level Security, see Secure Field Level Access.
- Configure System Settings: You can use the System Settings page to customize Clarity to reflect your organization's branding by updating the header logo, the login logo, and theme colors. To learn more about configuring system settings, see Clarity: System Settings.
- Configure Custom Investments: You can configure custom investment objects with the same capabilities that they already enjoy using for projects and other non-project investments. To learn more about configuring custom investments, see Clarity: Configure Custom Investment Types.
- Set up SAML Authentication and API Keys: You can configure Clarity on-premise to use the credentials issued by an IdP - that supports SAML 2.0. You can also generate an API key based on a user's credentials, access rights, and status settings. Use this method for integrating Clarity with other client applications or if you have SSO implementation for Clarity. To learn more about SAML-Authentication and API Keys, see Clarity: Authentication and Keys.
Business rules in Clarity have been updated to include the following enhancements.
- You can now configure up upto 50 business rules per object, up upto a maximum of 250 per blueprint.
- The business rule name can now be up to 256 characters, up from 80 in previous releases.
- The Source Object attribute has been renamed to Target Object.


Setting Up Clarity: First Time Use
As an administrator, you can configure the features in Clarity to varying degrees. Some configuration options are available in Clarity ; however, many options remain under the Administration menu in Classic PPM. This section contains the following topics:
- Enable
- Enable New Timesheets
- Configure Single Sign-On (SSO) for (On-Premise only)
- Create a Menu Link to Classic PPM
- Configure Modern UX (Clarity)Timesheet Options
Enable As an administrator, see Enable the New User Experience in Configure General System Settings.
TIP Install the PMO Accelerator in Classic PPM before completing the steps for enabling Clarity. Without the accelerator, the options for enabling the Clarity are disabled. See Install the PMO Accelerator Add-In and PMO Sample Data.
Enable New Timesheets While enabling Clarity, you can also choose to enable new timesheets. When you enable the new timesheets, be aware of the following differences between the New and the Classic PPM timesheets:
- With new timesheets, users no longer see the Home, Timesheets menu link previously available in Classic PPM
(although as an administrator you could still navigate back to it with a link format such as http://<server>/niku/ nu#action:timeadmin.timesheetBrowserReturn).
- The Administration, Timesheet Options layout configuration page no longer shows certain fields that are not supported in the new timesheets.
- The new timesheets do not allow incident or indirect time tracking. If you enter incident or indirect time entries in Classic PPM, they do not appear on the new timesheet details.
WARNING When using Clarity (MUX) and XOG, XOG will throw the following error if an attempt is made to create an indirect time entry on a timesheet while the new timesheets functionality is enabled: XOG-2029: Timesheet 5093015 contains indirect time entry while configuration option to disable indirect time entry is set.

For more information on importing timesheets through XOG without generating a Timesheet ID, see KB Article - 27022.
- The data model is the same, so changes you see in one are visible, if supported, in the other.
- Both interfaces support the optional auto-spreading of one total value evenly across entries for multiple days.
- Only Classic PPM timesheets support time entry notes, email links to resources, direct access to timesheet configuration, and the ability to create a task from a timesheet.
- Links in notifications go to the Clarity timesheet instead of Classic PPM timesheets.
- We recommend that you do not attempt to use both old and new at the same time; however, it is technically possible to do so.
- If you had the COPY TIME ENTRIES FROM PREVIOUS TIMESHEET option enabled for use in Classic Timesheets, this gets unchecked when you activate the new timesheets option. This will primarily impact users using Classic Timesheets. See KB: 24960 for more details on the behavior for this option with New Timesheets.
- When enabling New Timesheets, customizations to available columns under Default Content and Layout will be reset. These can be reconfigured after New Timesheets are enabled.
Configure Single Sign-On (SSO) for (On-Premise only) As an administrator, you can configure an SSO server for Clarity see Configure Single Sign-On (SSO) for Clarity in CSA: Security, Passwords, LDAP, SSL, SSO, XSS, and FIPS. If you are using IDP federated SSO and you want your users to access Clarity by default, contact your identity management team. They might need to generate a new link with /pm appended to the URL.
Create a Menu Link to Classic PPM By default, Clarity is not available from Classic PPM. Administrators can use the Classic PPM Studio features to create a menu link using external object actions. Users can click the menu link to access Clarity from inside the Classic PPM user interface. Follow these steps: 1. Log in to the Classic PPM user interface. 2. Click Administration, Studio, Objects. 3. Click the Project object. 4. Click the Actions tab and click New. 5. On the Create Action page, create an external object action.
TIP For the URL, enter http(s)://<cappm_server_name>/pm. To link to the new timesheets, enter http(s):// <cappm_server_name>/pm/#/timesheets. To learn more, see Configure General System Settings. 6. Click Administration, Studio, Menu Manager. 7. In the list, click Application Menu. 8. On the Menu: Application Menu - Menu Hierarchy page, click Add. a. Create a menu link. b. Associate the external object action with the menu link. 9. On the Menu: Application Menu - Create Menu Item page, select the Action Link option, and click Next. 10. On the Menu: Application Menu - Menu Item Properties page, shown in the following image, create the menu link.

11. Log out of Classic PPM and log back in. The new menu link to Clarity appears in your selected Parent Menu Item.
12. Click the menu link to display Clarity. Configure Modern UX (Clarity)Timesheet Options Use these steps to set or change the timesheet options that impact Clarity for all resources in the system. 1. Click Administration, Project Management, Timesheet Options. 2. Select the ALLOW ENTRY OF LINE ITEM TOTALS option allow users to enter an optional single total value (in hours
or days) for a task. That total is divided or spread equally across multiple days. For example, a user enters 40 total hours and the timesheet shows 8 hours per day for five days for that same task.

3. Select the DISPLAY TIME ATTESTATION MESSAGE ON SUBMIT option if you want to prompt the user to confirm an attestation statement for compliance requirements.
4. Select the DISPLAY TIME ATTESTATION MESSAGE ON SUBMIT option if you want to prompt the user to confirm an attestation statement for compliance requirements.
5. Select DISPLAY TIME ERRORS AS A TOAST MESSAGE ON SUBMIT if you are not using Timesheet Rules since the rules display customize error messages.
6. The ALLOW END USER COLUMN CONFIGURATION, DISPLAY EFFORT GAUGE, and DISPLAY PROJECT TIME GAUGE settings determine if these options are available to users when they create Timesheets in Clarity.
7. Select the appropriate value in the Time Entry Increment rounding option to provide real-time data entry adjustments when the user fills out the timesheets. The rounding of values is based on the configuration of the Decimal Places option. The following increments are permitted:
- Any: Entered values are rounded based on the `Decimal Places' setting (0-5 places)
- 0.25*: Entered values are rounded to the nearest quarter number (hours or days). Minimum Decimal Places = 2
- 0.5* = Entered values are rounded to the nearest half number (hours or day). Minimum Decimal Places = 1
- 1* = Entered values are rounded to the nearest whole number (hours or days). Minimum Decimal Places = 0
Getting Started with Blueprints
As an application administrator or PMO content designer, use blueprints to configure layouts for different types of investments. You can copy and configure blueprints that reflect the goals of each business unit in your organization. Let's consider an example where multiple teams in his organization are using the Ideas grid to develop and evaluate new ideas. The Product Development and the Product Architecture teams often contribute a large number of ideas. However, the management team evaluates their ideas on different criteria. The Product Development team is judged on financial details such as planned cost and planned benefit details. The Product Architecture teams are judged on technical details such as architectural fit, technology compliance, and regulatory compliance. You can create different blueprints for these teams so that their management teams can quickly view relevant details and take appropriate actions on the idea.
Some of the key actions you can perform while creating blueprints are:
- Copy a Blueprint: You can view but cannot configure the default blueprint for any investment. However, you can make a copy and then edit your copy. Click the Options menu to copy, rename, or delete a blueprint (you cannot delete the default blueprint). You can also make another blueprint the default blueprint. The default blueprint determines the sections, fields, and modules users can see when they access an investment item.
- Publish Blueprints: You can open a copied blueprint and click Edit. You can define the layout details and modules. When you click Publish, your changes are displayed and they determine the functionality and appearance of current and future investments associated with the blueprint.
- Add Sections and Fields: You can add and remove sections on the project layout. Users can drag a field into a section and drop it near an adjacent field. You can adjust the position and resize the fields for an ideal fit.
- Add Modules: You determine at least one or multiple modules that appear when users open a project.
This section contains the following topics:
- Introducing the Blueprints Grid
- Create a Copy of a Blueprint
- Managing Records By Using the Grid Layout
- Localize Blueprints Configurations
- Review Blueprints for Clarity Objects


Introducing the Blueprints Grid


You can now leverage the Blueprints Grid capability to create and manage blueprints in Clarity. The Blueprint grid provides you with all the capabilities of the Clarity generic grid, such as Search, Filter, Group By, to help you effectively find and manage blueprints. Some key points you need to remember are:
- All common grid functionality is available, except to use the "+" icon to create a new blueprint.
- The Context-sensitive menu allows the user to copy a blueprint or make it default.
- The new blueprint grid will not display "Using" and "Last Used".
- The blueprint grid will allow the administrators to edit the blueprint name and make a blueprint default.
- The changes are reflected in the other area when you update a blueprint in the Blueprint listing page or the Blueprints
grid.
- A new "Status" field indicates if a blueprint is in the Draft or Published status.
- You can multi-select blueprints and perform bulk actions.
Create a Copy of a Blueprint You can view but cannot configure the default Standard blueprint available for various Clarity objects. If you want to edit and make changes to a blueprint, you need to copy it and edit the copy.
Follow these steps:
1. Click Administration. 2. Click Blueprints Grid to see all available blueprints. 3. Select a blueprint and click Copy to create a new blueprint. 4. Enter the name of the new blueprint.

NOTE Some of the key points to remember while copying a blueprint:
- Clarity will only copy blueprints where the Status attribute is set to Draft or Published. If the Status attribute is
set to Has Edits, the Copy option will be disabled.
- You can select the Make Default option to make this blueprint as the default blueprint.
- You can observe that the Group By mode in common grid view disables the copy functionality.
Managing Records By Using the Grid Layout The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to
create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users. REMEMBER To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Details Panel
- Saved Views
- Filters NOTE In addition to those actions, you can also carry out the following actions within Grid:
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the Bulk Delete capability in the Common Grid to delete multiple records.


Localize Blueprints Configurations


You can localize labels associated with Blueprint sections and channels. You can also use mixed cases for the labels. To translate the label, you will need to ensure the following points:
- You have the relevant access rights to edit blueprints.
- Your language needs to be set to the target language. After you associate localized labels, every user who uses the
target label will see the updated labels for blueprints.
NOTE You can also use the Attributes grid in Clarity to create labels for stock and custom attributes. These labels are only applicable in Clarity and do not impact Classic PPM. Suppose you change your language to any of the six supported languages (French, German, Spanish, Brazilian Portuguese, Italian, Japanese). In that case, you can enter the label in that language and use it in Clarity. .
Review Blueprints for Clarity Objects
To learn more about blueprints for various objects, see:
- Configure Blueprints for Projects
- Configure Blueprints for Ideas
- Configure Blueprints for Custom Investments and Custom Objects
- Configure Blueprints for Team Investments
- Configure Blueprints for Hierarchies
- Configure Blueprints for Roadmaps
- Configure Blueprints for Agreements
- Configure Blueprints for Plans
- Configure Blueprints for Pages
- Configure Blueprints for Objectives
- Configure Blueprints for Resources
- Configure Blueprints for Timesheets
- Configure Blueprints for Timesheets
- Configure Blueprints for Staffing Workspace
Business rules in Clarity have been updated to include the following enhancements.
- You can now configure up upto 50 business rules per object, up upto a maximum of 250 per blueprint.
- The business rule name can now be up to 256 characters, up from 80 in previous releases.
- The Source Object attribute has been renamed to Target Object.


Common Capabilities in Blueprints
Clarity includes a set of common capabilities that are used in the blueprints:
- Organize the Properties Module Using Sub Tabs: Organize attributes within the Properties module of a Blueprint by
creating configurable subtabs.
- Configure Modules: Hide or display Modules in the Details Flyout at a Blueprint level for each Sub-Object.
- Control Sub-Object Instance Creation: Customize and display a create Dialog to enforce all the attributes users need
to populate while creating a new record for sub-objects.
- Specify the Fields Needed to Create a Sub-Object Instance: Utilize the Edit Module Details button to build and create a
Dialog for users that can include both required and optional attributes for a Sub-Object (including abstract Investment custom Sub-Object) that will apply to all instances created with the parent blueprint.
- Define a Canvas: Configure (select) which Objects (canvas components) will be available to users when configuring their Investment canvases using a drag/drop list.
- Work with Business Rules: Create business rules in Blueprints to control how end users engage with Clarity.
- Grant and Revoke Access Rights Using Business Rules: Configure a "Security Update" business rule to grant and revoke instance rights.
- Associate Processes with Blueprints: Utilize the Actions tab to associate the relevant processes with the blueprint.
- Use Channels to Embed External Content: Utilize channels to embed content from another source, such as an external site, application, or Classic PPM context-sensitive investment reports, into Clarity.
Organize the Properties Module Using Sub Tabs

Administrators can now organize attributes within the Properties module of a Blueprint by creating configurable subtabs. This allows administrators to group related fields into logical subtabs, thus decluttering the Properties module and reducing excessive scrolling.
NOTE Some key points to remember are:
- You can create a maximum of 25 subtabs within the Properties module. This is defined as a governor limit
(MAX_SUBTABS_PER_BLUEPRINT), which the Administrator can change.
- You can also create sections within each subtab. In addition, you can drag and drop sections from one
subtab to another.
- You can create, delete, rename, and update subtabs. You cannot delete the last subtab remaining on the
Properties page.
- Clarity will move all of your attributes under a General subtab. However, if you have only one subtab, Clarity
will not display the subtab to the end-user or blueprint administration. You will see the General subtab reference if you have business rules to hide sections.
- You can use Business Rules to show and hide subtabs by using the Hide Section business rule action to hide all of the sections. When you hide all of the sections on a subtab, it will hide the subtab.
- You can localize the names of subtabs in various supported languages.
- When only one subtab is configured on the Properties page, Clarity will not display the subtab panel, thus saving the horizontal space.
- If you create a business rule to hide all the attributes on a section, and there is only one section for the subtab, it will hide the section but not hide the subtab. This is a known limitation. Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit.


3. Select the Properties tab. 4. Click Add Subtab to create a new subtab. 5. Enter the name for the new subtab and drag and drop the relevant fields into it.


Configure Modules

This section contains the following topics:
- Configure Modules to be Displayed in the Details Panel
- Configure Properties for OOTB and Custom Sub-Objects in Blueprints
- Enable Sub-Objects of Investment To Display Under Target Object in Status Report Canvas
Configure Modules to be Displayed in the Details Panel
In the Clarity 16.1.0 and higher releases, you can hide or display Modules in the Details Panel at a Blueprint level for each Sub-Object. As an administrator, you can configure each Master Object Blueprint differently to hide or display any Sub-Object Module in the Details Panel. Once configured, the Sub-Object Details Panel will show or hide their Sub-Object Module configurations as defined in the Blueprint.

In parent Investment Blueprints, you can configure the following Sub-Object Details Panel:
- Projects: Tasks, Risks, Issues, Changes, Status, Baselines, and custom Sub-Objects (level 2 only)
- Ideas: Risks, Issues, Changes, Status, and custom Sub-Objects (level 2 only)
- Custom Investments: Tasks, Risks, Issues, Changes, Status, and custom Sub-Objects (level 2 only)
- Status Reports, Objectives, Custom Master Objects (CMOs) Sub-Objects.

Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Select a supported Sub-Object for which you want to hide or display modules in the Details Panel. You can see the
Edit Module Details button under the Configure section. 5. Click Edit Module Details. 6. Drag and drop Attributes from the left pane to the Dialog layout. 7. Click Publish to save your changes.
NOTE Some key points you need to remember are:
- A maximum of 25 tabs (modules) can be added to a Blueprint.
- Capability is available for level 2 Sub-Objects only.
- Abstract Investment custom Sub-Objects are supported.
- Sub-Objects are shown by default in Details Panel.
- As part of this feature, Show in Details Panel in the Blueprint has been changed from a checkbox to a
toggle.
- You may see different Modules in the Details Panel depending on which Modules your administrator
configured for that Sub-Object's Detail Panel in its parent Master Object Blueprint. Configure Properties for OOTB and Custom Sub-Objects in Blueprints In the Clarity 16.1.3 and higher releases, the below enhancements have been introduced to the configuration of SubObject Properties. This provides administrators with greater flexibility and control over the layout and navigation of SubObject Modules.
- Enablement of Properties for Sub-Objects: Properties are now available for both Out-of-the-Box (OOTB) and
Custom Sub-Object Modules. This includes support for various Level 2 Sub-Objects such as Tasks, Staff, Risks, Issues, Changes, Baselines, and Status Report (excluding Status), as well as Custom Sub-Objects of abstract

Investment Object, Projects, Ideas, Custom Investments, Sub-Objects of Custom Master Objects, Key Results SubObject in Objectives Object, and Custom Sub-Objects of Objectives.
- Enabling Properties Navigation: Within Blueprints, a new toggle called Enable Properties Navigation has been introduced. This toggle is OFF by default, allowing administrators to selectively enable or disable Properties Navigation for specific Sub-Objects.
- Configuring Properties Layout for Sub-Objects: Administrators can now configure the Properties layout for SubObjects by clicking the Edit Module Details button for the Sub-Object in Blueprint for the Properties tab. They can easily drag and drop fields from the left panel into the Properties layout and click the Publish button to save changes.
- Configuring Sub-Object Modules in Properties and Details Panel: Further customization is possible by configuring the Sub-Object Modules in both Properties and Details Panel. Administrators can click the Edit Module Details button for the Sub-Object in Blueprint, select the Modules tab, and drag and drop Modules from the left panel into the layout. Changes can be published by clicking the Publish button.
- You can now view properties for OOTB and Custom Sub-Objects, with the ability to enable or disable Properties Navigation in Blueprints, providing links to Properties in the Sub-Object Grid, sharable URLs, and enforcement of business rules, while also controlling the availability of links in specific views like Timeline, Calendar, or Board Views.

If the Enable Properties Navigation toggle is enabled in Blueprints:
- A link to navigate to Properties is available in the Sub-Object Grid, usually on the Name attribute value, with some
exceptions. No link is available in Timeline, Calendar, or Board Views.
- Properties can be shared via a URL link that users can copy/paste.
- Business rules are enforced in Properties to hide Sub-Object Modules and control attribute behavior. If the Enable Properties Navigation toggle is disabled in Blueprints:
- Link to navigate to Properties is available, and you will be navigated to the Sub-Object Grid instead.
NOTE Some key points you need to remember are:
- Administrators cannot configure different Sub-Object Modules in the same Blueprint for Properties and the
Details Panel since they share the same configuration.
- Business Rules have not been impacted or expanded for this capability.
- After the upgrade, the Properties module is not enabled by default for all Sub-Objects.
- Only the Sub-Object Attributes are available to configure in Properties, not Parent Attributes.
- If you want a Sub-Object link in your Notifications, you must toggle Properties On for that Sub-Object.
- Status does not have Properties available.
- Linking to Properties from Board, Timeline, and Calendar Views is not available. Enable Sub-Objects of Investment To Display Under Target Object in Status Report Canvas As an administrator, you can configure status to customize which objects (canvas components) will be available to users when configuring their Status canvas. Some of the key points to remember are:
- Control the order of these objects that appear for users during canvas configuration by drag/drop list order.
- Enable or disable the objects you want for users in the canvas using the Enabled toggle button. Disabled objects are
moved to the bottom of the list and can no longer be dragged. Follow these steps: 1. From the blueprint list, click the name of the required blueprint. 2. From the Modules tab, click Status. 3. Perform the following to configure the status:
a. Enabled: Toggle to enable or disable multiple object widgets. NOTE The following objects are available for Status Canvas:
- Tasks
- Risks/Issues/Changes
- To Dos
- Staff
- Financials - Benefit Plan Details
- Financials - Benefit Plans
- Financials - Budget Plan Details
- Financials - Budget Plans
- Financials - Cost Plan Details
- Financials - Cost Plans
- Custom Objects (second level only)
b. Drag the objects up or down to define the order of the widget display in Canvas. 4. If you are unsure of the changes, click Discard Edits. The edits are deleted, and the blueprint details view reverts to
the published version. 5. Click Publish to save your changes. When you publish a blueprint, all edits in progress for the details and modules are
published at once.
Control Sub-Object Instance Creation

As an administrator, you can customize and display a create Dialog to enforce all the attributes users need to populate while creating a new record for sub-objects. However, to create this sub-object instance of Projects, Ideas, and Custom Investments, you need to use two Enable Quick Create and Enable Create Dialog toggle switches when adding modules to blueprints. The following objects and sub-objects (including abstract Investment custom Sub-Objects) are supported:
- Projects: Tasks, Risks, Issues, Changes, Status, Baselines, and child custom Sub-Objects
- Ideas: Risks, Issues, Changes, Status, and child custom Sub-Objects
- Custom Investments: Tasks, Risks, Issues, Changes, Status, and child custom Sub-Objects Follow these steps:
- Navigate to Administration, Blueprint.
- Click the name of the blueprint that you want to edit and click Edit.
- Select the Modules tab.
- Select a supported sub-object module. You can see the Enable Quick Create and Enable Create Dialog toggles
under the Configure section.
- Enable Quick Create: Turn On to use the + (Quick Create) option while creating Sub-Object instances in the grid,
timeline, and board (including the new card option). If this is turned off, the + option is disabled when creating SubObject instances. By default, the toggle will be set to On. For example, if you select this toggle for the Tasks subobject for the Project object, you can create a new task on the Tasks module by using the + icon.
- Enable Create Dialog: Turn On if you want to have a new button within the Sub-Object called New [Sub-Object]. This new button appears on the Sub-Object grid, timeline, and board (including the new card wherever applicable). If this toggle is turned off, the button will be disabled. When you click the New [Sub-Object] button, a create dialog similar to the Create from Template dialog is displayed. For example, if you select this toggle for the Tasks subobject for the Project object, you can create a new task on the Tasks module by using the New Task button.
- Click Publish to save your changes.
NOTE Some of the key points to remember are:
- The toggles will work in conjunction with existing security access rights and will not modify any access rights
- Sub-Objects may have a different Create Dialog (or experience) when their Master Object Blueprints are
different and their Sub-Object configurations are not the same
- Maximum number of 200 attributes supported in Create Dialog
- A maximum of 6 columns can be added to a Sub-Object Create Dialog Specify the Fields Needed to Create a Sub-Object Instance

As an administrator, you can use the Edit Module Details button to build and create a Dialog for users that can include both required and optional attributes for a Sub-Object (including abstract Investment custom Sub-Object) that will apply to all instances created with the parent blueprint. To configure the layout, drag and drop the attributes from the left pane to the Dialog layout. Follow these steps:
- Navigate to Administration, Blueprint.
- Click the name of the blueprint that you want to edit and click Edit.
- Select the Modules tab.
- Select a supported sub-object module. You can see the Edit Module Details button under the Configure section.
- Click Edit Module Details.
- Drag and drop Attributes from the left pane to the Dialog layout.
- Click Publish to save the changes.

NOTE Some of the key points to remember are:
- If the administrator does not add a Required Attribute to the create Dialog layout, it will automatically be
appended to the Dialog during creation if it does not have a default value or auto-numbering.
- Attributes required in Classic Studio or those with an "Always True" Business Rule in the parent Blueprint will
have an asterisk.
- TSV, Attachment, and Rich Text attributes are not supported.
Define a Canvas
You can now define Canvas as modules using Blueprints. As an administrator, you will have the new capability to configure (select) which Objects (canvas components) will be available to users when configuring their Investment canvases using a drag/drop list. You can now:
- Change the canvas name.
- Define multiple canvases within the same blueprint. Each module can have different options enabled.
- Enable or disable the objects you want for users in the canvas using the Enabled toggle button. Follow these steps: 1. From the blueprint list, click the name of the required blueprint. 2. From the Modules tab, click New Canvas. 3. Perform the following to configure the canvas:
a. Name: Enter the canvas name. b. Enabled: Toggle to enable or disable multiple object widgets.
NOTE Even if the object is disabled in Blueprints, it is not removed from a saved view in Pages. However, if you remove the table object from the save view, you cannot add the same again. IMPORTANT Canvas Objects are sorted alphabetically and customization of the order is not supported. 4. If you are unsure of the changes, click Discard Edits. The edits are deleted, and the blueprint details view reverts to the published version. 5. Click Publish to save your changes. When you publish a blueprint, all edits in progress for the details and modules are published at once. NOTE Some key points to remember are:
- You can set the following objects as Target Objects in Widgets:
- Tasks
- Risks
- Issues
- Changes
- To Dos
- Financials - Benefit Plan Details
- Financials - Benefit Plans
- Financials - Budget Plan Details
- Financials - Budget Plans
- Financials - Cost Plan Details
- Financials - Cost Plans
- Custom Objects (second level only)
- Object-specific attributes
- The Action Items widget is not available as a widget. Action Items are available as a module to be
included in the blueprint
- You can add Canvas to any existing or new pages.
Working with Business Rules
This section contains the following topics:
- Creating and Executing Business Rules
- Working With Business Rules with the View Page Rule Type
- Hide Attributes on the Properties Module
- Use Business Rules to Make a Record Read Only
- Use Business Rules to Make Attributes Read Only
- Hide Process By Using Business Rules
- Trigger Action Items By Using Business Rules
- Configure Rules on Master Objects to Control Editing of Sub Objects
- Configure Sub Object Conditions with Parent Attributes
- Hide Attributes, Modules, and Sections for Second-Level Subobjects
- Enforce Required Attributes in Business Rules
- Create Business Rules for Attribute Updates
- Conditional Required Modal in Rule Type
- Create Business Rules For Custom Sub Objects
- Configure "Staff" as a Target Object in Blueprint Rules
- Create Business Rules for Financial Plans
- Business Rules Execution Scenarios
Creating and Executing Business Rules Administrators can create business rules in Blueprints to control how end users engage with Clarity. When you execute business rules, you can:
- Set the Rule Type as View Page: The action specified in the rule runs every time a user views a page and supports only one complex condition
- Set the Rule Type as Attribute Update: The rule is executed only when a selected attribute is updated and supports multiple condition blocks.
- Security Update: Runs only when a selected resource attribute is updated (Data action only).
- Conditional Required Modal: Runs only when a selected attribute is updated, supports only one condition (UI action
only).
Working With Business Rules with the View Page Rule Type
Let's consider an example where the administrator wants to show the Executive Summary section on the Properties module only when the following conditions are met:
- The user is a member of the PMO portfolio manager group
- The ROI is greater than 200%
- The Corporate Priority is High
- The investment is active
When you define business rules, you need to perform the following key steps:
1. Define a Target Object: Select the relevant object, sub-object, or custom sub-object associated with the business rule. 2. Define the Rule Type: It determines when the actions are executed. The View Page action runs every time a user
views a page and supports only one complex condition. 3. Define a Condition: You use the generic filter to define all the conditions that would trigger the business rule. In this
release, you can specify conditions based on: a. Access Groups: You can specify that a module or a section would only be hidden to members of:
a. Selected groups b. All groups except the selected group
In our example, we will specify the condition that Access Group should not be equal to PMO Portfolio Manager. b. Attributes: You can specify values for one more Clarity attributes. In our example, we will specify the relevant
conditions for the ROI, Corporate Priority, and Active attributes. You can use the Match All or Match Any options to create compound conditions with multiple groups and attributes. 4. Define Actions: Select the relevant action you want to perform when the condition is triggered. In our example, we will use the Hide Sections action. 5. Define Action Targets: The Action targets specify the modules or sections you can hide when the condition is triggered. In our example, we will select the Executive Summary section to hide it.
In our example, we hide the Executive Summary section from all groups except the PMO Portfolio Manager group. Members of this group will only see the section when the ROI is greater than 200% and the Corporate Priority is High.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints. 3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule. 5. In the New Rule window, enter the name and description of the rule. 6. In the Target Object window, select the relevant object or subobject. 7. In the Rule Type section, select View Page. 8. In the Conditions section:
a. Use the drop-down list to specify the condition that would trigger the rule.

b. Turn on the Always True toggle to add a Required Attributes action. This would ensure that Clarity would not allow you to update records if the required attribute is not populated. Asterisk (*) will also be displayed in the Properties or Details flyout screens to designate the required field. NOTE If you select the Always True flag, you cannot specify any other conditions in the Business Rule. You can choose only the Required Attributes action and select the relevant attributes.
9. In the Conditions section, use the drop-down list to specify the condition that would trigger the rule. 10. Use the Match All or Match Any option to finalize the condition. 11. In the Actions section, select the relevant action. 12. Define the action targets by specifying the sections and modules you want to hide. 13. Click Create. If the rule syntax is correct, the rule will be enabled after you click Create. 14. In the Rules tab, ensure that the rule is enabled to apply to all the investments associated with the blueprint. 15. Click Publish to update the changes to the blueprint.
Some scenarios in which you will see error or warning messages for Business Rules are:
- You have defined only one Action, and the Action Target is missing.
- You have defined only one Condition, and the Condition Value is missing.
- An administrator deletes or deactivates an attribute that was used in a rule.
IMPORTANT
- You can now use the Disable Deleting Target Object action to disable instance deletion conditionally for non-
investment objects such as Baseline, Task, Status Report, Risk, Issue, Change Request, and Assignment.
- The action is also available for custom sub-objects.
- This action has precedence over User security rights for deletion.
- If one or more instances selected for deletion are disabled by using business rules, then all instances will
be disabled for the Bulk Delete action.
- Business rules do not apply to the Projects Tiles page.
- You cannot trigger business rules from Classic PPM, XOG, REST APIs, or Processes.
- When you select an attribute in the Conditions section, the following attributes are available:
- Single-Value Lookups (Static and Dynamic)
- Boolean
- Strings
- Number
- Static Dependent Lookups
- Parameterized Lookups
- You can only configure actions for active modules associated with the blueprint.
- After you edit a rule, you must republish it to activate it for end users.
- Blueprint information is cached per user's session. Your end users may need to log in and out, or refresh their browsers, to see any new business rule changes that have been published.
- End-user execution of the rule will not dynamically refresh the UI immediately after the rule is triggered users will need to navigate away and come back or refresh the browser to see the hidden module or section. We will investigate in an upcoming release to provide a dynamic refresh once the rule is triggered.
- If you have implemented field-level security
- The fields will be available to the administrator for setting up business rules.
- The rule will be applied, but field-level security will be evaluated when it is executed.
- When you use Business Rules to hide modules, both custom sub-objects and Clarity modules will be hidden in investments. However, only custom sub-objects will be hidden in the details panel.
- You can configure Disable Editing and Hide Attribute Actions on Rich Text and Long String attributes.
- Whenever a section, module, Clarity group, or custom attribute is deactivated or removed, the administrator should review all rules to ensure they continue to work as expected.
- You can now define 250 business rules within a blueprint and have 50 rules simultaneously active.
- The business rule name can be up to 256 characters.
- When creating a business rule for supported objects and sub-objects to enforce always true required attributes:
- Ensure to turn on the Always True toggle for a selected target sub-object.
- Select Required Attributes from the drop-down under Actions. You can then select the Sub-Object
attributes from the list that appear as required when creating a new sub-object instance.
- You can click Create and then Publish.
- The Business Rule is not enforced during creation in Quick Create +, Board, or Timeline; it is only
enforced during creation in the Create Dialog.
- Boolean data type attributes are not supported. An error message will display "cannot create a rule with
invalid required attributes" when you try to save the rule.
- Virtual attributes are not supported; they are unavailable as a selection attribute in the rule's Required
Attributes list under Actions.
- When creating a conditional required attribute business rule for Master Objects or Sub-Objects to enforce
required attributes during the update:
- For a selected target object or sub-object, select Attributes to be evaluated for Conditions and then build
criteria.
- Select Required Attributes from the drop-down under Actions, and then select the required ones in the
update dialog.
- You can click Create and then Publish.
- This rule is enforced during updating sub-object instances (Required Fields dialog) and not during
creation.
- Sub-object rules must be created in the parent Master Object Blueprint.
- Only Attributes in the Target Object will be available for creating required attributes.
- Business Rules defined on the Department Attribute on an Investment will not be
enforced in the Hierarchy Cross-Investment Grid since the Department is not visible under Hierarchies.
- Business Rules using the Project Financial Properties abstract object will not be enforced on
the Hierarchy Cross-Investment Grid.
- Always True and Conditional Required Attribute Business Rules are ignored during bulk and multi-paste
update operations and fill handle copy.
Hide Attributes on the Properties Module
The Business Rules capability has been enhanced to support the Hide Attributes and Hide All Attributes actions if the conditions set in the business rule are satisfied. The Hide Selected option allows you to hide all selected attributes. The Hide All Except Selected options display the selected attributes and hide all the other attributes. This Hide Attributes and Hide All Attributes action only works on the Properties module of supported Clarity objects. If you hide all the attributes in a section, the whole section will be hidden from the end user.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints.

3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule. 5. In the New Rule window, enter the name and description of the rule. 6. In the Target Object window, select the relevant object or subobject. 7. In the Conditions section, use the drop-down list to specify the condition that would trigger the rule. 8. Use the Match All or Match Any option to finalize the condition. 9. In the Actions section, select Hide Selected or Hide Except Selected options. 10. Define the attributes you want to hide. 11. Click Create. If the rule syntax is correct, the rule will be enabled after you click Create. 12. In the Rules tab, ensure that the rule is enabled to apply to all the investments associated with the blueprint. 13. Click Publish to update the changes to the blueprint.
Use Business Rules to Make a Record Read Only
You can now configure business rules to mark a record as read-only in Clarity if the conditions set in the business rule are satisfied. Consider an example where you want to record to be read-only when the Active attribute is set to No. You can set the relevant condition and the Disable Editing Record action.
IMPORTANT Some key points you need to remember are:
- The business rule only prevents the record from being edited by using Clarity. You can still edit the record by using Classic PPM, XOG, REST APIs, or Processes.
- It's recommended that you add an "Access Group" to your rule condition, just in case if you need certain users to make updates or re-open the record for editing.
- You can show and hide modules associated with a read-only record based on the business rules.
- If a business rule makes a record read-only, even users with FLS Edit access cannot edit it.
- A user with delete access can delete a read-only record.
- If you use the multi-select edit option and select read-only records, they will not be available in the Bulk Edit
dialog box.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints. 3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule. 5. In the New Rule window, enter the name and description of the rule. 6. In the Target Object window, select the relevant object or subobject. 7. In the Conditions section, use the drop-down list to specify the condition that would trigger the rule. 8. Use the Match All or Match Any option to finalize the condition. 9. In the Actions section, select Disable Editing Record. 10. Click Create. If the rule syntax is correct, the rule will be enabled after you click Create. 11. In the Rules tab, ensure that the rule is enabled to apply to all the investments associated with the blueprint. 12. Click Publish to update the changes to the blueprint.
Use Business Rules to Make Attributes Read Only
You can now configure business rules to mark an attribute(s) as read-only in Clarity if the conditions set in the business rule are satisfied.

IMPORTANT Some key points you need to remember are:
- Rules will control the editing of the attributes within the investment. So, you can't edit the field from:
- Board Layout
- Grid Layout
- Detail Panel
- Properties Page
- For the non-editable field, a denial icon will be displayed, and the field will be greyed out.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints. 3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule. 5. In the Target Object window, select the relevant object or subobject. 6. In the New Rule window, enter the name and description of the rule. 7. In the Conditions section, use the drop-down list to specify the condition that would trigger the rule. 8. Use the Match All or Match Any option to finalize the condition. 9. In the Actions section, select Disable Editing Attributes. 10. Select Disable Selected or Disable All Except Selected.
NOTE
- Disable Selected: This option allows defining attributes that should not be editable when conditions are met.
- Disable All Except Selected: This option allows you to define a situation in which all attributes, except the selected ones, are not editable when conditions are met.
11. Add Attributes from the list. 12. Click Create. If the rule syntax is correct, the rule will be enabled after you click Create. 13. In the Rules tab, ensure that the rule is enabled to apply to all the investments associated with the blueprint. 14. Click Publish to update the changes to the blueprint.
Hide Process By Using Business Rules
You can use the Actions tab to associate the relevant processes with the blueprint. You will only be able to associate a process when the following conditions are met:
- The process is active.
- The process is associated with the object, or it includes a custom script (GEL).
- You have access to the process.
The Hide Actions capability enables you to leverage business rules and enforce fine-grained access control capabilities for actions. You can now use the Hide Actions capability that has been introduced to show relevant actions to specific users. You can use the rule to hide actions based on conditions.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints. 3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule. 5. In the New Rule window, enter the name and description of the rule.

6. In the Target Object window, select the relevant object. 7. In the Conditions section, use the drop-down list to specify the condition that would trigger the rule. 8. In the Actions section, select Hide Actions. 9. In the Add Actions drop-down list, select the actions you want to hide for users who will match the condition associated
with the rule. 10. Click Create. If the rule syntax is correct, the rule will be enabled after you click Create. 11. In the Rules tab, ensure that the rule is enabled to apply to all the investments associated with the blueprint. 12. Click Publish to update the changes to the blueprint.
Trigger Action Items By Using Business Rules
You can create a Business Rule in a Blueprint to Trigger Action Items in the Library.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints. 3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule. 5. In the New Rule window, enter the name and description of the rule. 6. In the Target Object window, select the relevant object. 7. In the Rule Type section, select Attribute Update so that the Business Rule will be triggered during the update of the
Target Object based on defined condition(s). 8. From the Target Attribute drop-down, select the Target Attribute that will be evaluated to trigger the rule. 9. Click Add Condition to define the attribute criteria. 10. In the Conditions section, use the drop-down list to specify the condition that would trigger the rule. 11. Under Data Actions, in the Add Actions drop-down list, select Send Action Item from the list. You can select one
or more Action Items for the rule. Only Action Items created in the Action Item Library will be displayed. Note that Process Action Items cannot be triggered by Business Rules. 12. Click Create to save and then click Publish to update the changes to the blueprint.
The Business Rule will notify recipients of newly created action items. They can click the notification to display the Action Item modal and respond to the action item in the modal.
Some key points to remember are:
- Clarity will not send notifications for action items that are in flight prior to the upgrade.
- You don't need to change business rules or action item definitions to enable this functionality.
- The notifications use the base Clarity notification framework. You should configure their "Purge Notifications" job to
clean up old action item notification records.
Configure Rules on Master Objects to Control Editing of Sub Objects
Consider a scenario where you want to ensure that team members cannot edit tasks, risks, and issues when the project status is set to "On Hold." You can now create a business rule that targets the primary object, such as a project, but can enforce rules on relevant sub-objects, such as Tasks. This capability is available for Projects, Ideas, Custom Investment Types, Resources, Objectives, and Custom Master Objects. You can disable adding, editing, or deleting records to the following sub-objects.
- Tasks, Status Reports, Risks, Issues, Changes for Investments
- Custom sub-objects for Investments, Custom Master Objects, Objectives, and Resources
You can also select a second-level sub-object as a target object, disable adding, editing, and deleting child objects on stock, and custom third-level sub-objects for Investment, Resources, Objectives, and Custom Object.

NOTE Some key points to remember are:
- You can use business rules to disable adding, editing, and deleting the entire sub-object. You cannot choose to edit specific attributes of the sub-object.
- Rule conditions should only use attributes from the Target Object in order to use the Disable Adding/Editing/ Deleting Child Object actions.
- You cannot create tasks on Ideas. Hence, if you configure a business rule for tasks on the Idea object, it will not impact Clarity.
- The Disable Adding/Editing/Deleting Child actions are not available for the following Data Actions: Set Attribute, Send Action Item.
- Disable Adding Child Objects Action will not disable in the following areas:
- Create from template for investments.
- Disabling editing for the status report will disable its publication. The Disable Adding Child Objects action will not disable the mechanism whereby a new status report is created as a draft from the just-published status report.
- Tasks under the following conditions:
- The Copy From action in the Tasks timeline.
- The Assignments module under investments.
- Legacy Task List module.
- Assigned Resources" attribute on Tasks to create assignments.
- The sub-object will disabled across all layouts.
Configure Sub Object Conditions with Parent Attributes
Consider a scenario where you want to lock the Task Module when the Financial Status of the project is set to "Closed" so that users cannot add additional tasks to the project. You can configure a business rule for the sub-object (Task) and set it to hide the Task Module when the "Financial Status" attribute (associated with the project object) is set to "Closed."
NOTE Some key points to remember are:
- If you select the Target Object as a 2nd or 3rd-level sub-object, the attributes for conditions will be from the Target Object and from its immediate parent object.
- The following actions are allowed when configuring the parent attribute on sub-object conditions:
- Disable Editing Attributes
- Disable Editing Target Object
- Required Attributes
Hide Attributes, Modules, and Sections for Second-Level Subobjects
You can select a second-level subobject and configure the relevant actions for the Business Rule. The following actions are available:
- Hide Attributes
- Hide Modules
- Hide Sections
- Set Attributes
NOTE Some key points to remember are:
- You can configure rules on modules for second-level subobjects regardless of whether the module is exposed to the blueprint. However, the business rule will only be executed if the module is visible to the end user.
- Clarity will hide modules on the object and the Details panel for both stock and custom sub-objects. For example, if you hide a second-level custom sub-object for the Projects object, you will not see it when you open the project or the Details panel.
- You cannot hide stock modules such as Task, Risks/Issues/Changes for first-level Clarity objects since they are key to the functioning of the product.
Enforce Required Attributes in Business Rules
In previous versions of Clarity, you could require users to populate an attribute while creating a project in Clarity. However, you could not ensure that the attribute would be required every time a user updated the project.
In Clarity 15.9.3 and higher releases, you can use the Always True condition in Business Rules to add a Required Attributes action. This would ensure that Clarity would not allow you to update records if the required attribute is not populated.
If you select the Always True flag, you cannot specify any other conditions in the Business Rule. You can choose only the Required Attributes action and select the relevant attributes.
IMPORTANT Some of the key points you need to remember are:
- The Always True condition in business rules is applicable to master objected and supported sub-objects.
- You cannot select read-only attributes and auto-numbered attributes in the Required Attributes section.
- Ideas with actual or time cannot be flagged as template.
- You cannot select the Blueprint attribute by using business rules.
- If users create a project/idea by using the New From Template option, Clarity will automatically add the
required fields to the New Project/Idea window.
- If users create a project by using the Add Row or Add Card option, Clarity will not force users to populate the
attribute while creating a project.
- When you update a required attribute and it has a non-null value, users cannot change its value to null.
However, if an attribute has a null value before you enforced the business rule, users will not be prompted to add a value till they update the attribute.
- You will not see any asterisk or visual indicator associated with attributes you select in the Required Attributes section, except for custom dates. This applies to the grid layout, board layout, Details panel, and Properties module.
- You cannot enforce this rule on the following data types: Attachments, TSV, Calculated/Aggregated/Formula, Boolean, Read-only studio attributes, Auto Number fields. and Rich Text fields.
Create Business Rules for Attribute Updates
When the Work Status field is set to Complete in a project, you can use a business rule to update the Progress and Go Live Date fields. The rule will only work for projects and can be configured by following these steps:
1. Set the Rule Type to Attribute Update to ensure the rule executes only when the Work Status attribute on a Project object is updated.
2. Set the Target Attribute to Work Status. 3. Select the Progress and Go Live Date fields in the Set Attributes section. 4. Select relevant UI actions such as Hiding modules or Disable Editing of Records.
NOTE
Some important points to remember include:
- Supported data types for Set Attributes data actions include Lookups, Date, Boolean, String, Number, Money, and Percent.
- The following attributes cannot be used with Set Attributes data actions: Auto-numbered, Audit Attributes and attributes marked Read-Only in Classic PPM.
- When defining data actions, you can choose between Set Attributes or Send Action Items, which need to be defined on the Action Items page in Clarity.
- UI actions, such as Hide Actions and Hide Attributes, will be applied after Data Actions.
- If the Target Attribute is deleted or inactivated, the rule will be disabled.
- You cannot configure a Set Attribute value to NULL, Blank, or No Value.
- Set Attribute will always run first regardless of the order of the Data Actions.
- Regardless of whether the Data Actions succeed or fail, the rule will still execute the UI Actions.
- You cannot configure set attribute data action on the Target Attribute of the business rule or trigger another
set attribute rule (rule chaining).
- Creating a new record will not trigger a set attribute rule.
- Set attribute rules for dates will set the date based on the Clarity server time.
- Set attribute rules will not override any Clarity locks on attributes or records (process engine, MSP,
Interactive Grants, etc.).
- Set attribute rules will override attributes configured with read-only attributes and records based on another
business rule.
- Set attribute business rule will set the attribute value even if the attribute is not visible to the end-user (field-
level security).
- If you want to make a REST API call that triggers the set attribute rule, you need to include "x-api-rule-
engine": "ui" in the header of your call.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints. 3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule. 5. In the New Rule window, enter the name and description of the rule. 6. In the Target Object window, select the relevant object. 7. In the Rule Type window, select Attribute Update. 8. In the Target Attribute drop-down list, select the target attribute.
NOTE Clarity supports the following attributes:
- Lookups (SVL and Dynamic Lookups including Parameterized Lookups and Static Dependant lookups). Multi-Value Lookups are not supported.
- Boolean
- Date
- String
- Number
- Percent 9. Select the relevant condition. The condition is generated based on the selected Target Attribute. 10. In the select Data Actions drop-down list, select Send Action Items or Set Attributes. You can only select action items defined on the Action Items page in Clarity. You can select multiple data actions. NOTE Clarity supports the following datatypes for the Set Attributes action:
- Lookups (SVL and Dynamic Lookups including Parameterized Lookups). Multi-Value Lookups are not supported.
- Boolean
- Date
- String
- Number
- Money (no support for currency)
- Percent 11. In the UI Actions section, select the relevant UI action and save your business rule.
Conditional Required Modal in Rule Type
The Conditional Required Modal business rule in Clarity enforces data integrity by requiring users to populate specific attributes based on the value of another attribute. Consider a scenario in which your organization mandates users update project attributes, such as Business Unit and Priority when the project work status is set to "On Hold." In such cases, Clarity administrators have generally relied on user diligence or complex workarounds to meet this mandate. You can now create a Conditional Required Modal business rule and configure it to ensure that every time a user updates the Work Status field to On Hold, a new modal will pop up, allowing the user to populate all the mandatory fields.
NOTE Some key points to remember are:
- The Modal Rule is only triggered when the `Target Attribute' is explicitly updated.
- The modal will display when at least one of the fields on the modal is missing a value.
- The modal will not display when all fields on the modal are already populated.
- Any studio-defined required attributes missing a value will appear on the modal.
- The rule is not triggered when Clarity updates an attribute due to its internal logic.
- If a field is secured and the user does not have access to view and edit the field, the user will be prevented from completing the required fields on the `Conditional Modal' to save the Target Attribute value.
- When there are multiple rules using the same Target Attribute, all relevant fields will be merged into a single modal if multiple rules are triggered.
- If you have defined Set Attribute business rules, they will execute before Conditional Required Modal rules.
- Attributes marked as read-only via another business rule will not be read-only within the conditional required
modal. The user will have the ability to edit the value of that attribute only within the conditional modal.
- Conditional Required Modal business rules cannot be triggered by other business rules, API calls, XOG, or
Classic PPM actions. They are only triggered by changes made by a user in the Clarity user interface.
- Clarity will merge the required attributes into a single modal if multiple models are configured for the same
target attribute.
- Conditional Required Modal rules behave differently during bulk updates:
- Grid Bulk Edit: The preview pane will not reflect the modal-required attributes.
- CSV Import: All model-required attributes must have values in the CSV file.
- Classic PPM does not allow you to set a rich text field and long string attributes as required. You can use the Conditional Required Modal capability to ensure users populate the relevant rich text fields when updating a relevant attribute.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints. 3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule.

5. In the New Rule window, enter the name and description of the rule. 6. In the Target Object window, select the relevant object. 7. In the Rule Type window, select Conditional Required Modal. 8. In the Target Attribute drop-down list, select the relevant attributes. 9. In the If drop-down list, select the relevant value and configure the condition. 10. In the Conditional Required Modal, drag-and-drop values from the fields column to the modal. 11. Click Create to create the business rule.
TIP Watch the following video to learn more about Conditional Required Modal in Rule Type from timestamps 00:00 to 07:00.
Create Business Rules For Custom Sub Objects You can create Business Rules for custom sub-objects in Clarity. This capability is available for projects, ideas, custom investments, and custom master objects. Consider an example where you want to ensure that a Status report becomes read-only after it's published and the "Report Status" attribute is set to "Final." In such scenarios, you can create a business rule and associate it with the Status Report sub-object. You can then use the following configurations to set up your business rule. Condition: "Report Status" = "Final" Action: "Disable Editing Record" Consider another scenario where you want to make the Status Report read-only but want to give the "PMO Portfolio Manager" group the capability to change the value of the "Report Status" field. In such cases, you can set up the business rule to perform the following actions: Condition: "Report Status" = "Final" Access Group"PMO Portfolio Manager" Action: "Disable Editing Attributes" Disable All Except Selected "Report Status"
NOTE Some key points to remember are:
- Administrators can create Business Rules in Blueprints for third-level sub-objects. The stock third-level sub-
objects supported in Clarity are the Assignment Object under the Task object and the Actual Value and Target Value Object under the Key Results object. Clarity also supports custom third-level sub-objects. Clarity does not support the following actions for the third-level subobjects:
- Required Attributes
- Notifications
- Action Items
- When you select a sub-object in the Target Object list, you will only see the Disable Editing Attributes, Disable Editing Record, and Required Attributes options in the drop-down list.
- You can create business rules for custom subobjects associated with projects, ideas, custom investments, and custom master objects.
- Once you create a rule for an object, you cannot edit it and associate it with a subobject. You will have to define a new rule for the subobject.
- When creating a business rule for custom sub-objects to enforce always true required attributes:
- Ensure to turn on the Always True toggle for a selected target sub-object.
- Select Required Attributes from the drop-down under Actions. You can then select the Sub-Object
attributes from the list that appears as required when creating a new sub-object instance.
- You can then click Create and then Publish.
- Business Rule is not enforced during creation in Quick Create +, Board, or Timeline. It is only enforced
during creation in the create Dialog.
- Boolean data type attributes are not supported. An error message will display "cannot create a rule with
invalid required attributes" when you try to save the rule.
- Virtual attributes are not supported; they are not available as a selection attribute in the rule's Required
Attributes list under Actions.
- When creating a conditional required attribute business rule for custom sub-objects to enforce required
attributes during the update:
- For a selected target custom sub-object, select Attributes to be evaluated for Conditions and then build
criteria.
- Select Required Attributes from the drop-down under Actions and then select Attributes that should be
required in the update dialog.
- You can then click Create and then Publish.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints. 3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule. 5. In the New Rule window, enter the name and description of the rule. 6. In the Target Object window, select the relevant object or subobject. 7. In the Conditions section, use the drop-down list to specify the condition that would trigger the rule. 8. Use the Match All or Match Any option to finalize the condition. 9. In the Actions section, select the relevant action. 10. Define the action targets by specifying the sections and modules you want to hide. 11. Click Create. If the rule syntax is correct, the rule will be enabled after you click Create. 12. In the Rules tab, ensure that the rule is enabled so that it's applied to all the investments associated with the blueprint. 13. Click Publish to update the changes to the blueprint.
Configure "Staff" as a Target Object in Blueprint Rules
The business rules capability in Clarity has been extended to support the Staff Object. This allows administrators to give stakeholders more control over editing and visibility of staffing data based on their requirements. Consider a scenario in which you want to make the Staffing module read-only for a certain set of employees for two weeks because the organization is undergoing an intensive planning activity.
In this scenario, you can create and associate a business rule with the Staff object. You can then select "Staff" in the Target object and use the View Page rule type. You can then use a filter with the Work Status attribute and then select the Disable Editing Target Object and Disable Deleting Target Object.
- Business Rule Types Supported: View Page and Attribute Update
- The Available Actions are: Disable Editing Attributes, Disable Editing Target Object, Disable Deleting Target Object,
Hide Attributes, Hide Modules, Hide Sections, and Required Attributes.
- When you create a business rule in an investment object and select the Target Object as Staff, the following areas in
Clarity are impacted.
- The Staff module on the relevant investment
- Canvas tables
- Staffing Workspace
- Hierarchy Staff Module
NOTE Some key points to remember are:
- Business rules will be enforced in a staffing scenario but will not be enforced when a staffing scenario is
published.
- You cannot create rule actions for specific TSV periods.
- TSV scalars will not be applicable for the Disable Editing Attribute rule actions.
- If you create a business rule that prevents users from editing staff records, they can still use the Assignments
module or the Assignment tab on the Details panel. If the administrator wants to prevent edits to the Assignments, they will need to explicitly configure rules on the Assignments object, since disable editing on the Staff records does not implicitly disable the editing of its assignments.
- When you change a resource's booking status, Clarity updates the TSV values. Hence, if you don't want users to edit TSV values, you must use business rules to set both the TSV and Booking Status attributes as read-only.
- You cannot use business rules to set the value of the Request Manager attribute to a non-role record. TIP Watch the following video to learn more about Configure "Staff" as a Target Object in Blueprint Rules from timestamps 07:00 to 25:52.


Create Business Rules for Financial Plans


You can now create business rules for Financial Plans in Clarity. This includes Cost Plans, Budget Plans, Benefit Plans and associated sub-objects such as Cost Plan Details. Some key examples where you can leverage this enhancement include:
- Disable creating cost plans when the Work Status of the investment is "On Hold".
- Disable editing a cost plan when the Work Status of an investment is "Cancelled".
- Disable editing the Cost Plan Details sub-object when the source is a Populate Action, such as Populate from
Allocations.
Three key capabilities have been added to this release.
1. You can select the Cost Plan or the Benefit Plan object as the Target Object for the business rule. This allows you to create filters by using attributes for the Cost Plan object or the associated investment object and define the conditions for the business rule. Since the Cost Plan and the Budget Plan share the same data module, you can use the Plan Type Code attribute in the filter and select Budget to create business rules for Budget Plans.
2. You can select an investment object as the Target Object and use Actions such as Disable Adding/Editing Child Object with the Cost Plan or Benefit Plan to disable the Cost Plan Details or Benefit Plan details pages.
3. You can use the new Disable Actions and Hide Actions capabilities to disable or hide various actions such as Approve Budget, Make Plan of Record, and Populate from Allocations. The Disable Actions and Hide Actions are only available when you select Cost Plan as the Target object.

NOTE
Some key points to remember are:
- When you select Cost Plan or Benefit Plan, you can only create a View Page rule type.
- The business rules are enforced when you are in the "Compare To" mode in the Financials module.
- The business rules are also applicable in the Hierarchy Financials module.
- To create a business rule specifically for the Budget Plan, set the Target Object to Cost Plan and add the
condition "Plan Type Code=Budget".
- To create a business rule specifically for the Cost Plan, set the Target Object to Cost Plan and add the
condition "Plan Type Code=Forecast" in the condition field. Otherwise, without this Plan Type Code condition, the business rule will apply to both the Cost Plan and Budget Plan.

Business Rules Execution Scenarios
Rules do not get applied in any specific order. When applying rules, Clarity reads all the rules and then applies them at one time.
The following table describes how Clarity handles Disable Editing Record, Disable Editing Attributes, and Secure Field Level Access actions.

Sl.No. 01

Disable Editing Record
Yes

Disable Selected

Disable All Except Selected

Field Level Security Result
All attributes are disabled.


A

Attribute A is disabled.


A

All attributes

are disabled, except

'A'.


A

B

All attributes are disabled, except 'B'.


A

A, B

All attributes

are disabled, except

'B'.


A

A

All attributes are disabled.


Rule 01: A,

All attributes are

Rule 02: B

disabled.


Yes

A

A, B

All attributes are disabled.


A

A (Access Edit)

Attribute 'A' is disabled.


A

A (Access View)

All attributes

are disabled.

To learn more about business rules execution scenarios, refer to the following scenarios: Scenario 01: Disable Editing Record

Rule Name Conditions Actions Expected Result

Rule 01 Work Status = Complete Disable Editing Record Clarity makes the particular record read-only when the condition is met.

Scenario 02: Disable Selected Attributes

Rule Name Conditions Actions Expected Result

Rule 01 Work Status = Complete Disable Editing Attributes  Disable Selected (Manager) Clarity makes the Manager field read-only when the condition is met.

Scenario 03: Disable All Except Selected Attributes

Rule Name Conditions Actions Expected Result

Rule 01 Work Status = Not Started Disable Editing Attributes  Disable All Except Selected (Manager) Clarity makes all fields read-only except the Manager field when the condition is met.

Scenario 04: (Disable Selected + Disable All Except Selected) Using Different Attributes

Rule Name Conditions Actions
Expected Result Reason

Rule 01

Rule 02

Manager=Amos Cheryl

Work Status = Complete

Disable Editing Attributes  Disable Selected Disable Editing Attributes  Disable All Except

(Charge Code)

Selected (Work Status)

Clarity makes all fields read-only except the Work Status field when the condition is met.

Rule 02 takes precedence over Rule 01. So, Rule 02 is executed.


Scenario 05: (Disable Selected + Disable All Except Selected) Using Some Common Attributes


Rule Name Conditions Actions
Expected Result Reason

Rule 01

Rule 02

Work Status = Not Started

Work Status = Not Started

Disable Editing Attributes  Disable Selected Disable Editing Attributes  Disable All

(Manager)

Except Selected (Manager, Work Status)

Clarity makes all fields read-only except the Work Status field when the condition is met.

Rule 02 contains Rule 01.
[If common attributes are given in both actions, then precedence is given to Read-only attributes. So, the application removes common attributes from the Disable All Except Selected action before executing the rules.]

Scenario 06: (Disable Selected + Disable All Except Selected) Using All Common Attributes

Rule Name Conditions Actions
Expected Result Reason

Rule 01

Rule 02

Work Status = Complete

Work Status = Complete

Disable Editing Attributes  Disable Selected Disable Editing Attributes  Disable All Except

(Manager)

Selected (Manager)

Clarity makes all the fields read-only when the condition is met.

Union of Rule 01 and Rule 02 [As both the rules make all the fields read-only, this makes the record read-only.]


Scenario 07: Two Disable All Except Selected Actions


Rule Name Conditions Actions
Expected Result Reason

Rule 01

Rule 02

Manager = Amos Cheryl

Work Status = Complete

Disable Editing Attributes  Disable All Except Disable Editing Attributes  Disable All Except

Selected (Manager)

Selected (ETC)

Clarity makes all the fields read-only when the condition is met.

Rule 01 overlaps Rule 02.

Scenario 08: All Three Actions

Rule Name Conditions
Actions
Expected Result Reason

Rule 01

Rule 02

Rule 03

Access Groups = Company Work Status = Complete Manager

Work Status = Complete

Disable Editing Record

Disable Editing Attributes  Disable Disable Editing Attributes  Disable

Selected (Manager)

All Except Selected (Manager, ETC)

Clarity makes the particular record read-only when the condition is met.

Rule 01 takes precedence over Rule 02 and Rule 03.


Scenario 09: Field Level Security (Access Edit) Vs Disable Selected


Disable Editing Attributes

Field Level Security

Rule Name Condition Actions
Expected Result Reason

Rule 01

Attribute Name

Manager

Work Status = Complete

Secure


Disable Editing

Access Edit


Attributes  Disable Selected

(Manager)

Clarity makes the Manager field read-only.

`Read Only' action takes precedence, whether you set up the Read-Only attribute through business rule or field-level security.

Scenario 10: Field Level Security (Access View) Vs Disable All Except Selected

Disable Editing Attributes

Field Level Security

Rule Name Condition Actions
Expected Result Reason

Rule 01

Attribute Name

Manager

Work Status = Complete

Secure


Disable Editing

Access View


Attributes  Disable All Except

Selected (Manager)

Clarity makes all attributes Read-only.

`Read Only' action takes precedence, whether you set up the Read-Only attribute through business rule or field-level security.

Grant and Revoke Access Rights Using Business Rules

Many customers have written custom gel scripts and used other mechanisms to automate the provisioning of access rights when users are added or removed from investments. You can now configure a "Security Update" business rule to grant and revoke instance rights. The rule is triggered when the end user updates the user attribute configured in the business rule.
You can perform two key actions using this rule:
- Use the "Transfer Rights from Previous to New Resource" action to revoke rights from the previous resource and grant
them to a new resource. If the New Resource already has one or more configured rights from the action, the system will grant the remaining rights to the New Resource.
- Use the "Grant Rights to New Resource" and "Revoke Rights from Previous Resource" actions to grant or revoke different rights to previous or new users.
NOTE Some key points to remember are:
- This rule is only available on master objects.
- You will be able to assign 20 rights per rule. Hence, you can configure 20 rights for the "Transfer Rights from
Previous to New Resource" action. You can also configure 20 rights for the "Grant Rights to New Resource" and "Revoke Rights from Previous Resource" actions.
- You can only select a resource or a user lookup in the Target Resource Attribute field.
- The rule will not be triggered when you create a new record. It will only trigger when the user updates the target attribute.
- You can only have one active Security Update rule per blueprint for the same resource/user attribute.
- You cannot use bulk edit capabilities to update the attribute configured in the Target Resource Attribute field. Examples of bulk edit operations include Bulk Update, Copy-and-Paste, and Fill Handle operations on the grid.
- If you select the "Grant Rights to New Resource" or "Revoke Rights from Previous Resource" actions for the same rule, you will not be able to select the "Transfer Rights from Previous to New Resource" action and vice versa.
- You cannot remove instance rights on the 3rd-level sub-object.
- When you create a new custom subobject for the Investment abstract object, Classic PPM will only generate global rights. Hence, you cannot configure security business rules for these types of custom subobjects.

However, if you create a subobject for a concrete investment object, Classic PPM will generate subobject instance rights that can be used in security business rules.
- While Clarity limits the values the end user can select for the Target Resource attribute to 10, there is no limit on the values administrators can remove by using the business rule. The limit of 10 applies to the Clarity web user experience, and tools such as XOG are not impacted.
- You can only select instance rights relevant to Clarity Modern UX in business rules. Some rights, such as Project - View Requisitions and Project - Discussion Manager (Auto), are unavailable. You can contact Broadcom Support for more information.
- The business rule will grant or revoke access rights irrespective of the investment Status (Locked, Active, Inactive).
- If the Target Resource Lookup displays a Role, Team, or Non-Labor value, it will be ignored, and no rights will be granted or revoked for that value. If this concerns you, create a custom Resource lookup and filter out roles, teams, and non-labor in NSQL.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select Blueprints. 3. Select the relevant blueprint to open it and click Edit. 4. Navigate to the Rules tab and select New Rule. 5. In the New Rule window, enter the name and description of the rule. 6. In the Rule Type section, select Security Update. 7. Select the relevant attribute in the Target Resource Attribute drop-down list. When the end user updates this attribute,
the business rule is triggered. 8. Click Add Actions to select the relevant action.
- Select the Transfer Rights from Previous to New Resource action to revoke rights from the previous resource and grant them to a new resource. You can click Add Rights to add the relevant rights to the new user. If the Previous Resource does not have one or any configured rights from the action, Clarity will revoke any remaining configured rights from the Previous Resource. If the New Resource already has one or more configured rights from the action, the system will grant the remaining rights to the New Resource.
- Select the Grant Rights to New Resource action to grant rights to new users. You can click Add Rights to add the relevant rights to the new user.
- Select the Revoke Rights from Previous Resource action to revoke rights to the previous user. You can click Add Rights to add the relevant rights that will be revoked.
9. Click Save. If the rule syntax is correct, the rule will be enabled after you click Save. 10. In the Rules tab, ensure that the rule is enabled to apply to all the objects associated with the blueprint. 11. Click Publish to update the changes to the blueprint.
IMPORTANT Clarity will scan the NSQL for the resource/user lookup used on the Target Resource Attribute to ensure it reads from resource or user tables. The scan will reject a resource/user attribute used in security business rules for security reasons if its compliance cannot be determined. Ensure you follow these recommendations:
- Keep the NSQL on resource/user lookups used for security business rules simple. Avoid using resource/user tables in subqueries.
- Ensure the NSQL OUTER SELECT references a resource or user table.
- The stock resource and user lookups have been validated to work with security business rules. Hence, you
can copy a stock resource/user lookup and use it as a template if you are creating a custom resource/user lookup for security business rules and making minor edits.
Associating Processes with Blueprints

You can use the Actions tab to associate the relevant processes with the blueprint. You will only be able to associate a process when the following conditions are met:
- The process is active.
- The process is associated with the object, or it includes a custom script (GEL).
- You have access to the process. Follow these steps: 1. Open the Administration page in Clarity and select Blueprints. 2. From the blueprint list, click the name of the blueprint that you want to edit. 3. On the Properties page that displays the currently published blueprint layout, click Edit. 4. Select the Actions tab. 5. Click Add Process to view a list of processes available for this blueprint. 6. Select the relevant processes and click Add. 7. Use the Order field to set a manual value for this process. This value will determine the sequence in which the
process is displayed when users want to execute them using the Actions button on the relevant object instance. 8. Click Publish to save your changes.
NOTE The Allocate from Estimates action is configured (enabled) via Project and Custom Investment Blueprints as Actions. You can hide this action using Business Rules.
Use Channels to Embed External Content
Use channels to embed content from another source, such as an external site, application, or Classic PPM contextsensitive investment reports, into Clarity. You can interact with the content and make informed business decisions without leaving an investment in Clarity. As an administrator, you can add a channel to the blueprint and configure a maximum of fifteen (15) channels. After you create a channel, you can find it in the Modules panel. After you publish the blueprint, the newly created channel appears as a tabbed page within the investment (Project, Custom Investment, Ideas) and Custom Objects.
NOTE After you add a channel, you need not drag and drop the new channel to the blueprint layout section, it's automatically added.


After you create 15 channels, you can no longer see the New Channel button.
This section contains the following topics:
- Configure a Channel
- Dynamic Parameters for Channels
- Use Relative Paths in a Generic Channel URL
- Channels That Link to Classic PPM with the Phoenix UI Theme Applied
- SSO Support for Channels
- Video: Hide Navigation and Tool Bar in Channels when Phoenix UI Theme is Applied
- Known Issues for Channels


Configure a Channel
Let's see how you can add a channel and embed content from another source into Clarity.
1. Go to the Blueprint and click Edit. 2. From the Modules tab, click New Channel. 3. Enter information in these fields:
a. Channel Name: Enter the channel name b. Channel URL: Enter the channel URL c. Referrer URLs: Enter one or more comma-separated referrer URLs. Use Referrer URLs when your channel URL
redirects you to another authentication link. For example, specify the authentication URL in the referrer URL if your channel URL requires SSO login. d. Single Sign On URL: Enter the URL that Clarity will invoke when trying to display the channel and when a user is not authenticated. This can be the IdP with a relay state or a third-party application with SPconfigured authentication. e. Check Session Endpoint URL: Enter the URL that Clarity will use to validate that the Clarity user is authenticated against the third party application. If this URL is populated, Clarity will first use it to get a 200 (Success) response code. If Clarity does not receive a 200 response code, it will invoke the "Single Sign On URL". 4. Click Preview to test the channel. Remember, only concrete links can be previewed. 5. Click Publish to publish the blueprint. Your channel is created. Ask your users to refresh the browser session to see the new channel as a tabbed page within the investment.

Dynamic Parameters for Channels
- You can use these parameters to construct dynamic content inside your channels
- project id = ${_internalId}
- projectCode = ${code}
- project name =${name}
- project manager =${manager}
- logged in user =${_userId}
- logged in user's internal user ID 5 million number=${_userInternalId}
- logged in user's internal resource ID 5 million number=${_resourceInternalId}
- Channels also support custom attributes as input parameters, using attribute API Alias value of the following attribute type:
- Number
- String
- Single Value Lookup (Static and NSQL-based)


NOTE
Some key points to remember are:
- Consider a scenario where you want to configure the channel to Clarity to navigate to a specific view in a workspace. In such a scenario, you can click Copy URL to copy the link to the view. The copied URL includes a "?". Hence, the channel URL you construct ends up having two "?" signs. Remember that "?" defines the start of the name-value pairs, and you can only have one "?" in the URL. After the question mark, each name-value pair must be separated by an "&."
- Channels also support context-sensitive content with dynamic parameters. Content with dynamic parameters is not rendered in the Preview mode for channels in blueprints, but users can see them within the investment.

Use Relative Paths in a Generic Channel URL
When adding a channel to link back to Classic PPM, replace the server URL with the HTML dot-dot-slash syntax for relative rather than fixed absolute path references. If the data is restored to another server, your channel continues to function.

Original URL http://my_clarity.ca.com/niku/nu

Generic Channel URL ../../../../../niku/nu

Example 1: In this example, you define a link in a channel to the Classic PPM Project Processes Page:
../../../../../niku/nu#action:projmgr.projectProcessInstances&id=${_internalId}&object_type =project&object_id=${_internalId}&ui.page.space=mainnav.work&ui.page.template=union.appPage

Example 2: A link to Rally investments would appear as follows:
https://rally1.rallydev.com/#/investments

Example 3: The following example shows a link to a Jaspersoft report:
https://clarityserver.ca.com/reportservice/flow.html?_flowId=viewReportFlow&reportUnit= %2Fca_ppm%2Freports%2Fproject_management%2FCSK_PRJ_ProjectStatusSummary &standAlone=true&ParentFolderUri=/ca_ppm/reports/project_management &populateProject=1&projectKey_1=${_internalId}

Channels That Link to Classic PPM with the Phoenix UI Theme Applied
If you create a channel that links to the Classic PPM user interface and the optional Phoenix UI theme is applied, users see two main menus along the left edge of the page. To show just one main menu, follow these steps:
1. Edit the blueprint. 2. Open the channel module. 3. Add the following parameter to the Channel URL field:
&puiFullscreen=on 4. To hide the project-specific menu items, append the following parameter:
&puiHidePPMTabs=on 5. Save and publish your blueprint.


SSO Support for Channels
Channels support accessing external applications that require SSO authentication. You can populate the following parameters while configuring channels for accessing SSO applications.
- Single Sign On URL: This is the URL that Clarity will invoke when trying to display the channel and when a user is not authenticated. This can be the IdP with relay state or third party application with SP configured authentication.
- Check Session Endpoint URL: Clarity will use this URL to validate that the Clarity user is authenticated against the third party application. If this URL is populated, Clarity will first use it to get a 200 (Success) response code. If Clarity does not receive a 200 response code, it will invoke the "Single Sign On URL".
NOTE Some key points you need to remember are:
- Configuring channels to use SSO requires the external application to have a session cookie.
- The session cookie must not have SameSite=strict , so the browser includes the session cookie from other tabs in the request.
- You need to enable pop-ups to ensure SSO authentication for channels is leveraged in your environment. If pop-ups are not enabled, they will not see the IdPlogin window.
Video: Hide Navigation and Tool Bar in Channels when Phoenix UI Theme is Applied
Troubleshooting Tips for Administrators to Configure Channels
- Before you preview a channel, refresh the browser page.
- Advise users to refresh their browser after publishing a blueprint with new or changed channels.
- Avoid spaces, semicolons, and special characters in referrer URLs.
- Referrer URLs must be comma-separated.
Creating Channels to Clarity Workspaces and Instances
In previous releases, you could use channels in Clarity to embed content from another source, such as an external site, application, or Classic PPM context-sensitive areas into Clarity. You can now use channels to navigate to different areas within Clarity without leaving the existing workspace, such as investment or a page. You can use the following parameters to construct dynamic content inside your channels.
- project id = ${_internalId}
- projectCode = ${code}
- project name =${name}
- project manager =${manager}
- logged in user =${_userId}
- logged in user's internal user ID 5 million number=${_userInternalId}
- logged in user's internal resource ID 5 million number=${_resourceInternalId}
Channels also support context-sensitive content with dynamic parameters. Content with dynamic parameters is not rendered in the Preview mode for channels in blueprints, but users can see them within the investment.
NOTE Some key points to remember are:
- You can use the &puiFullscreen=on parameter to hide the left menu, global header, and breadcrumb.
- You can use the &puiHidePPMTabs=on parameter to hide the module tabs.
- You can use the &puiHideHeader=on parameter to hide the header row.
- You need to ensure that when adding the &puiFullscreen=on, &puiHidePPMTabs=on or &puiHideHeader=on
parameters, the first parameter should be preceded by a '?' mark, not an '&' mark.


For Example: http(s)://example.com/pm/#/xxxxxxx/ yyyyyyy?puiFullscreen=on&puiHidePPMTabs=on&puiHideHeader=on


Known Issues for Channels
Mixed Content: You might see the following error if you configure a link with HTTP inside a domain that requires a secure HTTPS connection:
Mixed Content: The page at 'https://MY-PPM-SERVER.ondemand.ca.com/pm/#/admin/blueprints/blueprint/edit/5000043' was loaded over HTTPS, but requested an insecure resource 'http://OTHER-SITE.domain.org'. This request has been blocked; the content must be served over HTTPS.
Your browser might show an alert asking you to confirm before loading unsafe scripts. In Chrome, a security shield icon and prompt appear, asking you to confirm that you want to open an insecure channel.
Resolution:To resolve this condition, edit the channel in the blueprint to use HTTPS and then publish the blueprint, or, if you know the HTTP content is safe, preview the HTTP content in another browser.
TIP
On-premise administrators can also white list a domain using admin system options. See CSA: Service and Admin Command-Line Utilities (near the bottom of that page).

Projects: Configure Blueprints
As an application administrator you can use blueprints to configure layouts for different types of investments and objects. You can copy and configure blueprints that reflect the goals of each business unit in your organization.
You can associate project templates with project blueprints. When users create projects from these templates, the project details from the blueprint appear. The stakeholders for a business unit see only the sections, fields, visuals, and modules that are relevant to their projects.
Depending on your access rights as the application owner, you can configure the blueprinting capabilities in Clarity. Verify that you have the appropriate rights for configuring blueprints. See Clarity Access Rights in the Reference section.
Example: Using Project Blueprints
As an application owner, Ian is onboarding a new Marketing business unit. The new business unit has unique requirements for capturing specific data when planning and executing projects. To facilitate their adoption of the new business unit, Ian copies the Standard Project blueprint to create the Marketing Blueprint. Based on the available options, Ian meets with various stakeholders to finalize the details. He tailors the marketing project details so that only the fields that are relevant to marketing projects appear. For example, Ian includes the Target Segments and Pilot Launch Date fields.
Ian configures the blueprint based on daily meeting results. After a week, Ian finally feels comfortable publishing the blueprint so that he can now associate templates to it. Theresa, a senior project manager, has created several templates for different project types in Classic PPM. Ian associates the Marketing Tradeshow template with the new marketing blueprint. Nicole, the project manager for Marketing, creates a new project from the Marketing Tradeshow template. When Nicole views her new project, the project details show the fields that Ian configured for the type of projects she manages.
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
Feature Highlights: Project Blueprints

Copy a Blueprint: You can view but cannot configure the default Standard Project blueprint; however, you can make a copy and then edit your copy. You can also make another blueprint the default blueprint. The default blueprint determines the sections, fields, visuals, and modules they see. Edit and Publish: Open a copied blueprint and click Edit. You can define the layout details, visuals, and modules. When you click Publish, your changes appear in the templates that determine the functionality and appearance of current and future projects. Sections and Fields: You can add and remove sections on the project layout. In this example, a user drags a field into a section and drops it near an adjacent field. You can adjust the position and resize the fields for an ideal fit. Visuals: You can drag and drop up to three visual gauges that appear on the project tiles.
Modules: You determine at least one or multiple modules that appear when users open a project. The first four modules appear on the project tiles. Rules: You can create business rules in Blueprints to control the modules or sections displayed to end users.
Actions: You can use the Actions tab to associate the relevant processes with the blueprint.


Create from Template: You can use Create From Template tab to configure all the out-of-the-box and custom fields that users need to populate in the New Project window when users create a new project from a template.
Visual Indicators for Blueprint Components The following visual treatments apply to blueprint components (fields, visuals, and modules):
- A white background and black font indicate an active component that is not used in the blueprint.
- A white background and gray font indicate an active component that is used in the blueprint.
- A gray background and black font indicate an inactive component that is not used in the blueprint.
- A gray background and gray font indicate inactive components that are used in the blueprint. The inactive components
are not visible to the users in the project details.
- Asterisks (*) indicate required fields.
Standard Project Blueprint The Standard Project blueprint is the pre-defined system blueprint that you cannot configure or delete. All existing templates are associated with the Standard Project blueprint. Initially, the Standard Project blueprint is also marked as the default blueprint. With the blueprint edit right, you can associate project templates with the Standard Project blueprint. No investment edit rights are required to move or associate a project template under a blueprint. The Standard Project blueprint includes the following visuals:
- Effort Spent
- Budget Spent
- Next Milestone
Set the Default Blueprint Designate a blueprint as the default blueprint for your organization. All existing projects not associated with any blueprint are associated with the current default blueprint. After an upgrade, if a project is marked as a template and does not have a blueprint association, it is associated with the current default blueprint. You can designate the Standard Project blueprint or any other blueprint as the default blueprint. Select the Standard Project blueprint and click Make Default. The Default banner appears next to the blueprint name. Only one blueprint can be a default. When you mark another blueprint as the default, the existing blueprint is no longer the default blueprint.
Copy a Blueprint Create a blueprint by copying the standard project blueprint or another user-defined blueprint. Select the Standard Project blueprint and click Copy to create a new blueprint. The new blueprint is created with a unique identifier through auto-numbering. The copy also includes the details, visuals, and modules from the existing blueprint. You can edit the copy and associate one or more project templates with it, instead of always using the standard blueprint.
Edit a Blueprint You can rename or edit the configuration of a user-defined blueprint. You cannot edit or delete the Standard blueprint for projects. You can rename the Standard blueprint for projects.

Add Project Fields to a Blueprint
You can add attributes to the project object in Classic PPM. The attributes are available for configuration on your project blueprints.
- To configure a blueprint, verify that all required fields are available to the blueprint. For example, to configure a blueprint for marketing projects, verify that all marketing-related fields are added to the Project in Classic PPM.
- Enable the fields for API access by specifying an API Attribute ID in the attribute details. See Classic PPM Studio Objects and Attributes for details.
- You can also add OBS fields to blueprints and enable them for API access. See Configure an Organization Breakdown Structure for details on how to create an OBS and associate to the project object.
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
Add Modules to Blueprints
You can add the required modules to the Project blueprint. If you have created a custom subobject for the Project object, add it as a module in the Project blueprint to make it available in . For more information on custom subobjects, see ClarityClarity Studio Objects and Attributes.
Follow these steps:
1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
IMPORTANT
- Action Items: In the Clarity 16.1.0 and higher releases, you can add the Action Items module that will display Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, and Custom Investments. You need no new security

rights for this module. If you have access to view the Investment, you can view all the Action Items for the investment.
- Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Investment. 5. Click Publish to save your changes and make the changes available to users. 6. Open a project that is using the blueprint that you just edited. You will see the custom objects appear as modules.
Edit Blueprint Details
Follow these steps:
1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available to projects. All projects associated with this blueprint display the new layout.
Edit Blueprint Visuals
Project tiles display visuals in the form of ring charts, date widgets, or icons. For each blueprint, you can show, hide, change, or reorder the visuals that display on the project tiles.
Configure visuals that align with the project goals for a specific business unit or theme.
Examples: An IT department manages complex projects and typically likes to see gauges that reflect traditional cost (Budget Spent) and schedule (Effort Spent) metrics. A Marketing department manages product launches and trade shows and prefers progress-oriented visuals such as Days Remaining.
The following visuals are available:
- % Complete Defines the percentage of the project work that is completed. The chart is based on the % Complete field that you can configure for the project details page.
- Budget Remaining Defines the amount of budget remaining for the project calculated as Total Remaining Cost/Total Budgeted Cost.
- Budget Spent Defines the amount of budget spent for the project calculated as Total Actual Cost/Total Budgeted Cost.
- Days Remaining Defines the number of days remaining on the project. If the current date is before the project start
date, then days remaining are the project finish date minus the project start date. If the current date is past the project

start date but before the project finish date, then days remaining are the project finish date minus the current date. In all other cases, the value is zero.
- Days to Start Defines the number of days until the project starts (project start date - current date provided the project start date is later than the current date. If the current date is past the start date or if the start date is undefined, then the value is zero.
- Effort Remaining Defines the hours remaining on the project calculated as Total Remaining Units/Total Budgeted Units or (EAC - Actual)/EAC. If the estimate at completion (EAC) is zero or null, the effort remaining value is zero. If Actual is greater than EAC, then the effort remaining value is negative.
- Effort Spent Defines the hours spent calculated as Labor Actuals/Total Effort. Labor Actuals is the sum of all actuals posted for labor resources. Total Effort is the total EAC for the project.
- Finish Date Defines the project finish date.
- Next Milestone Displays the next milestone date after today. If no milestones exist or if all milestones are from the past, the product uses the project Finish date.
- Start Date Defines the project start date.
Follow these steps:
1. From the blueprints list, click the name of a blueprint. 2. On the details page, click Visuals. 3. Click Edit to configure visuals for the project tile layout:
- Select at least one and up to three visuals.
- Drag an available visual from the Visuals list and drop it on an existing visual in the project tile to replace that visual.
- Use the Search box to look for specific visuals by label name.
- Drag-and-drop visuals from the project tile back to the list of visuals. You can also click the X on a visual in the
project tile to remove that visual from the tile. The visual goes back to being available.
- Rearrange the visuals with the project tile by dragging and dropping. 4. Discard edits or publish to save your changes.
Edit Blueprint Modules
You can configure up to four (4) blueprint modules to appear as icons on the bottom of each project tile. The icons allow users to go directly to a module such as Conversations or Tasks without having to first navigate a module and then to another module.
When a user clicks an area on the project tile that is not a module link (for example, the banner color or one of the gauges), the product takes the user to the first module that you configure for the blueprint. For example, if you configure the following modules for a blueprint in left to right order, the user lands on the Status Report module for the project:
- Status Report
- Properties
- Financials
- Conversations
Similarly, when a user creates a project in Clarity, after entering the project name, the product navigates them to the first module based on the blueprint configuration.
At least one module is required for displaying on the project tile. A maximum of four modules appears on the project tiles in the order of their configuration. The remaining modules appear as tabs inside a project.
Associate Templates with Blueprints
A template is used to create projects. Project details are displayed to end-users based on the associated blueprint. You can associate a template with only one blueprint.

Initially, all existing templates are associated to the Standard Project blueprint by default. Depending on your business requirements, you can change a template association from one blueprint to another. Existing projects that are associated to a blueprint do not change. Only new projects use the new blueprint association to display details. The Project Templates are always associated with a specific Blueprint. You cannot change the Blueprint field in the Investment to 'None' for a template. If you try to change the blueprint value to 'None' for a template, then Clarity automatically changes it to the Default Blueprint.
TIP For Example: Consider three blueprints for projects in Clarity. 1. Standard Project Blueprint: This is a standard project blueprint. 2. Blueprint for Internal Project: This is marked as the default blueprint. 3. Blueprint for Special Project: This is the latest blueprint. BYOD Management is a non-template project, and the Blueprint field for the project is empty. But, the project uses the default blueprint, i.e., Blueprint for Internal Project.
If you mark BYOD Management as a template, you will see the default blueprint (Blueprint for Internal Project) in the Blueprint field.
You can change the blueprint to Blueprint for Special Project for the template.
If you change the blueprint value to 'None', then Clarity populates the default blueprint (Blueprint for Internal Project).
Publish a Blueprint When you publish a blueprint, all edits in progress for the details, visuals, and modules are published at once. All projects that are associated with the blueprint display the latest layout that is configured for the blueprint.


NOTE Clarity currently supports 50 modules, 25 visuals, and 200 attributes for the project blueprint.


Delete a Blueprint
With the appropriate access rights, you can delete any user-defined blueprint. If you delete a blueprint that is not the default, all templates and projects that are associated with the blueprint are then re-associated with the current default blueprint. If the Standard Project blueprint is the default blueprint, all templates and projects are associated with this blueprint. If you delete a user-defined default blueprint, then the associated templates and projects are also re-associated with the Standard Project blueprint. The Standard Project blueprint becomes the new default blueprint. You cannot delete the Standard Project blueprint.
Configure Help Text in Blueprints
In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.

Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint.

5. Click Publish to save your changes and make the changes available to users. NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties windows, but it remains read-only.
Configure Custom Project Subobjects as Modules You can add a new module to appear as its own tabbed page along with the other project pages. To configure your project pages to accurately reflect your organizational business processes, define custom project subobjects. API-enable the custom subobjects for use with blueprints. When an end-user creates a project using the blueprint, a new tab corresponding to the subobject name appears on the project. Example: Ian, the system administrator receives a request to define a project subobject called Compliance and configure the subobject for display in Clarity. In Classic PPM Studio, Ian creates the subobject and makes it API-enabled. On the

Attributes tab of the subobject, Ian specifies an API Attribute ID so that the attributes are available for selection inClarity. In Clarity, Ian selects a project blueprint and adds the new subobject as a module. He then creates a new project using this blueprint and verifies that the subobject appears as a tab and the grid contains the selected attributes.
NOTE
You can API-enable both new and existing project subobjects. After you API-enable a subobject, you cannot disable it for the API.
Follow these steps:
1. In Classic PPM, click Administration, Studio, Object 2. Create a subobject (for example, Compliance or Opportunities) for the Project master object. 3. Select the API Enabled checkbox for the subobject. When you API-enable a new or existing project subobject,
an API Attribute ID is generated for the subobject using the subobject ID and prefixing it with "cust" (for example "custoOpportunities"). You can see this ID on the objects list page. 4. Create attributes for the subobject. Specify a value for the API Attribute ID for all attributes. The subobject dynamically creates the Compliance module and views in the project blueprints in Clarity. 5. In Clarity, click a project blueprint and navigate to Module. 6. Click Edit. Drag-and-drop the Compliance module to the blueprint modules section. 7. Click Publish. 8. Create a new project based on a template that uses the blueprint you just edited and published. 9. Verify that your new custom subobject module appears as a tab. Click COMPLIANCE to open the new grid layout on its own dedicated page for working with instances and attributes of your custom Compliance subobject.
View Investments Associated with Resources
Currently, investment managers and resource managers must navigate to the dedicated Staffing workspace to view over and under-allocated resources through specialised tabs, such as Allocations by Resource and Allocations by Investment. This creates workflow inefficiencies and context switching that can slow down resource management decisions.
You can now view resource-specific staffing allocation data directly from the Staff tab on an investment (Project, Idea, Custom Investment). You can edit the investment blueprint and add the Investment module as a sub-module for the Staff tab.
Follow these steps:
1. Open and edit the relevant investment blueprint. 2. Click the Staff module and select the Enable Properties Navigation toggle. 3. Click Edit module details. 4. On the left pane, click Modules, and drag and drop the Investments module to the right pane. 5. Click Publish to save your changes.
Review Common Capabilities
To learn more about common capabilities in the project blueprint, see:
- Configure Modules
- Control Sub-Object Instance Creation
- Specify the Fields Needed to Create a Sub-Object Instance
- Define a Canvas
- Work with Business Rules
- Associate Processes with Blueprints
- Use Channels to Embed External Content

NOTE
Some key points to remember while defining the canvas are:
- You can set the following objects as Target Objects in Widgets:
- Tasks
- Risks
- Issues
- Changes
- To Dos
- Financials - Benefit Plan Details
- Financials - Benefit Plans
- Financials - Budget Plan Details
- Financials - Budget Plans
- Financials - Cost Plan Details
- Financials - Cost Plans
- Custom Objects (second level only)
- Object-specific attributes
- The Action Items widget is not available as a widget. Action Items are available as a module to be included in the blueprint
- You can add Canvas to any existing or new project.
Ideas: Configure Blueprints
The Standard Idea blueprint has been introduced in Classic PPM 15.6.1 and allows administrators or PMO content designers to configure layouts for ideas based on different business needs. Configure Custom Idea Subobjects and Attributes to appear in blueprints.
Example: Jason is a Classic PPM administrator. Multiple teams in his organization are using the Ideas grid to develop and evaluate new ideas. The Product Development and the Product Architecture teams often contribute a large number of ideas. However, the management team evaluates their ideas on different criteria. The Product Development team is judged on financial details such as planned cost and planned benefit details. The Product Architecture teams are judged on technical details such as architectural fit, technology compliance, and regulatory compliance. Jason wants to create different blueprints for these teams so that their management teams can quickly view relevant details and take appropriate actions on the idea.
This section contains the following topics:
- Prerequisites
- Explore the Standard Idea Blueprint
- Copy, Edit, and Publish a Blueprint
- Specify the Fields Needed to Create an Idea From Template
- Create a Custom Subobject for an Idea
- Configure Custom Idea Attributes to Appear in Blueprints
- Delete Blueprints
- View Investments Associated with Resources
- Review Common Capabilities
Prerequisites
Depending on your access rights as the application owner, you can configure the blueprinting capabilities in Clarity. Verify that you have the appropriate rights for configuring blueprints. Some of the rights available to you are:
- Blueprint
- Create Copy
- Blueprint
- Delete All
- Blueprint
- Edit All
- Blueprint
- View All
For more information about access rights, see Clarity Access Rights in the Reference section.


Explore the Standard Idea Blueprint
The Standard Idea blueprint has been introduced in Classic PPM 15.6.1. You can copy this blueprint and configure it to match the specific business requirements of various departments. Thus, when end-users create ideas that are based on the configured blueprint, they only see details that are relevant to their new idea.
Follow these steps:
1. Log in to the Clarity. 2. In the main menu, click Administration, Blueprints. 3. Click the Standard Idea blueprint to open it. 4. The following default attributes are included as fields on the standard blueprint for ideas
- Subject
- Idea ID
- Idea Type
- Objective
- Work Status
- Original Requester
- Sponsor
- Manager
- Start Date
- Finish Date 5. Click the Back button to return to the Blueprints page.

Configure Help Text in Blueprints
In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.


Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint
Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.

Copy, Edit, and Publish a Blueprint Create a new blueprint by copying an existing blueprint. Select the standard blueprint and click Copy. When you create a blueprint by copying an existing blueprint, the details and modules from the existing blueprint are copied over. You can tailor the details in the new blueprint for specific ideas that may be associated with different teams or departments.
NOTE You can rename or edit the configuration of user-defined idea blueprints. You cannot edit or delete the Standard Idea blueprint. Example: Jason wants to create a copy of the Standard Idea blueprint. Then, she will customize it to suit the requirements of the product development team. Follow these steps: 1. Log in to the Clarity. 2. In the main menu, click Administration, Blueprints. 3. Select the Standard Idea blueprint and click Copy to create a new blueprint. 4. Click the Rename icon to enter the name of the blueprint. 5. From the blueprint list, click the name of the blueprint that you want to edit. 6. On the details page that displays the currently published blueprint layout, click Edit. 7. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are in the section
also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section. 8. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 9. Click Publish to save your changes and make the new layout available to projects. All projects associated with this blueprint display the new layout.
TIP
When you publish a blueprint, all edits in progress for the details and modules are published at once. All ideas that are associated with the blueprint display the latest layout that is configured for the blueprint.
Standard Idea Modules
The Standard Idea blueprint includes the following modules. The same modules appear as clickable icons on the tile for an idea that is associated with the Standard Idea blueprint.
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
Add Modules to Blueprints
You can add the required modules to the blueprint.
Follow these steps:
1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.

IMPORTANT
- Action Items: In the Clarity 16.1.0 and higher releases, you can add the Action Items module that will
display Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, and Custom Investments. You need no new security rights for this module. If you have access to view the Investment, you can view all the Action Items for the investment.
- Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Investment. 5. Click Publish to save your changes and make the changes available to users.
Specify the Fields Needed to Create an Idea From Template The Idea blueprint includes a Create From Template module. Administrators can use it to configure all the out-of-the-box and custom fields that users need to populate in the New Idea window when users create a new Idea from a template. Some key points to remember while using the Create From Template Module are:
- All mandatory idea fields will be displayed on the screen provided they do not have a default value set or auto-
numbering.
- Administrators cannot remove mandatory fields without default values or auto-numbering from the New Idea section.
- Administrators cannot add the Blueprint field to the New Idea section.
- In this release, you cannot add Timescaled value and Attachment fields to the Create From Template section.
NOTE The New Idea window can display a maximum of 200 fields. Follow these steps: 1. Navigate to the existing idea blueprint to create a copy of the standard blueprint. 2. Open the blueprint and select the Create from Template tab. 3. Click Edit. 4. Locate and add the relevant fields to the New Idea section. 5. Click Publish to save your changes.
Create a Custom Subobject for an Idea You can now configure custom subobject modules for Ideas. The subobject will then be available as a module in the Idea Blueprint. You can then publish the blueprint to ensure that the module is available in Clarity. Follow these steps: 1. Log in to Classic PPM UI. 2. Navigate to Administration, Studio, Objects. 3. Click New. The Create Object Definition page opens. 4. Specify the following details:
- Object Name
- Object ID 5. Select Subobject. 6. In the Master Object field, type Idea, and select the Idea master object that is populated. 7. Select the API Enabled checkbox.

NOTE
- Checking the API Enable checkbox lets you view the subobject in Clarity. You can API enable the already
existing custom subobjects.
- Instance-level access rights do not work on custom sub-objects in Clarity. Global-level access rights are
currently supported in Clarity. 8. Click Save.
Configure an Idea Blueprint to include a Custom Subobject Module Clarity
Follow these steps 1. Log in to Clarity. 2. Navigate to Administration, Blueprints, select an Idea Blueprint. 3. Navigate to the Modules tab. The new subobject is listed in the MODULES panel. 4. Click EDIT, drag and drop the new subobject, and click PUBLISH. The newly created subobject module is now added
to Ideas. After you have API Enabled the subobject in Studio, the subobject is created and will be available as a module in Blueprints in Clarity .
Use the Custom Subobject in an Idea Follow these steps 1. Log in to Clarity. 2. Navigate to Ideas, select an idea from the grid. The new subobject is now available as one of the modules. 3. Click the new subobject module, click the (+) plus icon to add attributes.
TIP The generic grid properties are applicable to the attributes.
Configure Custom Idea Attributes to Appear in Blueprints In case you have created custom idea attributes in Classic PPM, you can ensure their attributes are available in Idea blueprints. Follow these steps: 1. In Classic PPM, select Administration, Objects. 2. In the Object Name field, enter Idea, and select Filter. 3. Click the Idea object and select the Attributes tab to view all the attributes associated with the Idea object. 4. Filter and locate the custom idea attribute that you want to display in the standard and user-defined blueprints. 5. Enter a unique value in the API Attribute ID file and click Save to confirm your changes. 6. Open the blueprint you want to edit. 7. Locate and drag-drop the custom idea attribute in the appropriate section of the blueprint.
Configure the Financials Module for Ideas Using Blueprint If you want to enable the Financials module in Ideas, you can do so using the Blueprint. Ensure that the following rights are provided to the user:
- Idea - Cost Plan - Edit All
- Idea - Cost Plan - View All
- Idea - Cost Plan - Edit
- Idea - Cost Plan - View Follow these steps: 1. Log in to Clarity. 2. Navigate to Administration, Blueprints. 3. Select Idea Default blueprint and make a copy. 4. Edit, rename, and open the new Idea blueprint. 5. Navigate to Modules, click Edit, drag and drop the Financials module, and click Publish. The Financials module is
published and will be available from Ideas. 6. Navigate to Ideas from the main menu and open an idea. The Financials module is visible. 7. Click FINANCIALS. The cost plan list appears in grid layout.
Delete Blueprints With the appropriate access rights, you can delete any user-defined blueprint. If you delete a blueprint that is not the default, all templates and projects that are associated with the blueprint are then re-associated with the current default blueprint. If the Standard Idea blueprint is the default blueprint, all ideas are associated with this blueprint. If you delete a user-defined default blueprint, then the associated templates and projects are also re-associated with the Standard Idea blueprint. The Standard Idea blueprint becomes the new default blueprint. You cannot delete the Standard Project blueprint.
View Investments Associated with Resources Currently, investment managers and resource managers must navigate to the dedicated Staffing workspace to view over and under-allocated resources through specialised tabs, such as Allocations by Resource and Allocations by Investment. This creates workflow inefficiencies and context switching that can slow down resource management decisions. You can now view resource-specific staffing allocation data directly from the Staff tab on an investment (Project, Idea, Custom Investment). You can edit the investment blueprint and add the Investment module as a sub-module for the Staff tab. Follow these steps: 1. Open and edit the relevant investment blueprint. 2. Click the Staff module and select the Enable Properties Navigation toggle. 3. Click Edit module details. 4. On the left pane, click Modules, and drag and drop the Investments module to the right pane. 5. Click Publish to save your changes.
Review Common Capabilities To learn more about common capabilities in the idea blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Configure Modules
- Control Sub-Object Instance Creation
- Specify the Fields Needed to Create a Sub-Object Instance
- Define a Canvas
- Work with Business Rules
- Associate Processes with Blueprints
- Use Channels to Embed External Content
NOTE
Some key points to remember while defining the canvas are:
- You can set the following objects as Target Objects in Widgets:
- Tasks
- Risks
- Issues
- Changes
- To Dos
- Financials - Benefit Plan Details
- Financials - Benefit Plans
- Financials - Budget Plan Details
- Financials - Budget Plans
- Financials - Cost Plan Details
- Financials - Cost Plans
- Custom Objects (second level only)
- Object-specific attributes
- The Action Items widget is not available as a widget. Action Items are available as a module to be included in the blueprint
- You can add Canvas to any existing or new idea.
Custom Investments and Custom Objects: Configure Blueprints
As an application administrator or PMO content designer, use blueprints to configure layouts for different custom investments and custom master objects. You can use blueprints to configure layouts for different types of custom investments in alignment with your organizational goals.
When you create a custom investment or a custom master object, a blueprint is automatically created in Clarity. You can create a copy of the blueprint and edit it to suit your goals. For example, a marketing blueprint may be very different from an engineering blueprint.
The key steps you need to follow while editing blueprints are:
1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant modules to the blueprint. 3. Publish the blueprint. 4. Mark a blueprint as the default blueprint for relevant investment items and custom master objects.
This section contains the following topics:
- Edit Blueprint Details
- Add Modules to Blueprints
- Specify the Fields Needed to Create a Custom Investment
- Associate a Blueprint with an Investment Item or Custom Master Object
- View Investments Associated with Resources
- Review Common Capabilities


Edit Blueprint Details
You can add various stock and custom attributes associated with custom investment items and custom master objects to the Properties module in a blueprint.
Follow these steps:
1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section.
NOTE You can only add a custom attribute to a blueprint if it is API enabled. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available.

Configure Help Text in Blueprints
In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.


Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint
Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.

Add Modules to Blueprints The various subobjects associated with a custom investment or a custom master object are available as modules. You can add these modules to the blueprint to make them available to your users. Follow these steps: 1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
IMPORTANT
- Action Items: In the Clarity 16.1.0 and higher releases, you can add the Action Items module that will
display Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, and Custom Investments. You need no new security rights for this module. If you have access to view the Investment, you can view all the Action Items for the investment.
- Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Investment. 5. Click Publish to save your changes and make the changes available to users.

Standard Custom Investment and Custom Object Modules
The Standard Custom Investment and Standard Custom Object blueprints include the following modules. The same modules appear as clickable icons on the tile for custom investment and custom object that are associated with the Standard Custom Investment and Standard Custom Object blueprints respectively.
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
- Tasks
- To Dos
Specify the Fields Needed to Create a Custom Investment or Custom Master Object
The custom investment or or custom object blueprints includes a Create From Template module. Administrators can use it to configure all the out-of-the-box and custom fields that users need to populate in the New Investment (or Object name) window when users create a new project from a template.
Some key points to remember while using the Create From Template Module are:
- All mandatory project fields will be displayed on the screen provided they do not have a default value set or autonumbering.
- Administrators cannot remove mandatory fields without default values or auto-numbering from the New Investment (or Object name) section.
- Administrators cannot add the Blueprint field to the New Investment (or Object name) section.
- In this release, you cannot add Timescaled value, Multi-value Lookups, and Attachment fields to the Create From
Template section.
- When working with custom objects:
- Custom Master Object support is available for the Template attribute in Process.
- If you enable an Object to be Template Enabled, Clarity will remove all instance data upon deletion.
- Note that XOG currently does not support the Custom Master Object Template attribute.
- If you, as an Admin, update an existing Object to be API enabled, then features such as the Create from Template
tab in Blueprints, new global security right to create from template, New From Template button for creation, and Template and Originating Template Attributes will become available.
- The Create From Template function is unavailable in these Objects: Roadmaps, Hierarchies, Plans, Resources, and Pages.
- When creating "Always True" Required Attribute Business Rules, Boolean data type attributes are not supported, and an error message will display if you try to save the rule. However, you can successfully build and implement a Business Rule using a Boolean data type attribute as part of the Condition evaluation criteria.
- Similarly, virtual attributes are not supported when creating "Always True" Required Attribute Business Rules, and they are not available as a selection attribute in the rule's Required Attributes list under Actions. But you can

successfully build and implement a Business Rule using a virtual attribute as part of the Condition evaluation criteria.
- Note that "Always True" Required Attribute Business Rules are ignored during bulk and multi-paste update operations and fill handle copy.
NOTE The New Investment (or Object name) window can display a maximum of 200 fields. Follow these steps: 1. Navigate to the existing custom investment blueprint to create a copy of the standard blueprint. 2. Open the blueprint and select the Create from Template tab. 3. Click Edit. 4. Locate and add the relevant fields to the New Custom Investment section. 5. Click Publish to save your changes.
Associate a Blueprint with an Investment Item or Custom Master Object You can navigate to the Custom Investments page or the Custom Objects page and add the Blueprint attribute to the grid. You can then select the relevant blueprint to apply it.
View Investments Associated with Resources (Custom Investments) Currently, investment managers and resource managers must navigate to the dedicated Staffing workspace to view over and under-allocated resources through specialised tabs, such as Allocations by Resource and Allocations by Investment. This creates workflow inefficiencies and context switching that can slow down resource management decisions. You can now view resource-specific staffing allocation data directly from the Staff tab on an investment (Project, Idea, Custom Investment). You can edit the investment blueprint and add the Investment module as a sub-module for the Staff tab. Follow these steps: 1. Open and edit the relevant investment blueprint. 2. Click the Staff module and select the Enable Properties Navigation toggle. 3. Click Edit module details. 4. On the left pane, click Modules, and drag and drop the Investments module to the right pane. 5. Click Publish to save your changes.
Review Common Capabilities To learn more about common capabilities in the custom investment and custom object blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Configure Modules
- Specify the Fields Needed to Create a Sub-Object Instance
- Work with Business Rules
- Associate Processes with Blueprints
- Use Channels to Embed External Content
Team Investments: Configure Blueprints

As an application administrator or PMO content designer, use blueprints to configure layouts for different team investments. You can use blueprints to configure layouts for different team investments in alignment with your organizational goals.
When you create a team investment, a blueprint is automatically created in Clarity. You can create a copy of the blueprint and edit it to suit your goals. For example, a marketing blueprint may be very different from an engineering blueprint.
The key steps you need to follow while editing blueprints are:
1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant modules to the blueprint. 3. Publish the blueprint. 4. Mark a blueprint as the default blueprint for relevant investment items and team investments.
This section contains the following topics:
- Edit Blueprint Details
- Configure Help Text in Blueprints
- Add Modules to Blueprints
- Specify the Fields Needed to Create a Custom Investment
- Associate a Blueprint with an Investment Item or Custom Master Object
- Review Common Capabilities
Edit Blueprint Details
You can add various stock and custom attributes associated with team investment items to the Properties module in a blueprint.
Follow these steps:
1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section.
NOTE You can only add a custom attribute to a blueprint if it is API enabled. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available.
Configure Help Text in Blueprints
In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor

guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.
Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint
Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.

Add Modules to Blueprints The various subobjects associated with a team investment are available as modules. You can add these modules to the blueprint to make them available to your users. Follow these steps: 1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
IMPORTANT
- Action Items: In the Clarity 16.1.0 and higher releases, you can add the Action Items module that will
display Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, and Custom Investments. You need no new security rights for this module. If you have access to view the Investment, you can view all the Action Items for the investment.
- Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Investment. 5. Click Publish to save your changes and make the changes available to users. Standard Team Investment Modules The Standard Team Investment blueprints include the following modules. The same modules appear as clickable icons on the tile for team investments that are associated with the Standard Team Investment blueprints.
- Action Items
- Agreements
- Assignments
- Audit
- Changes
- Checklists
- Conversations
- Financials
- Hierarchy
- Issues
- Links
- Properties
- Risks
- Staff
- Status
- Tasks
- To Dos


Specify the Fields Needed to Create a Team Investment
The Team investment blueprint includes a Create From Template module. Administrators can use it to configure all the out-of-the-box and custom fields that users need to populate in the New Investment window when users create a new project from a template.
Some key points to remember while using the Create From Template Module are:
- All mandatory project fields will be displayed on the screen provided they do not have a default value set or autonumbering.
- Administrators cannot remove mandatory fields without default values or auto-numbering from the New Team Investment section.
- Administrators cannot add the Blueprint field to the New Team Investment section.
- In this release, you cannot add Timescaled value, Multi-value Lookups, and Attachment fields to the Create From
Template section.
NOTE The New Team Investment window can display a maximum of 200 fields.
Follow these steps:
1. Navigate to the existing team investment blueprint to create a copy of the standard blueprint. 2. Open the blueprint and select the Create from Template tab. 3. Click Edit. 4. Locate and add the relevant fields to the New Team Investment section. 5. Click Publish to save your changes.

Associate a Blueprint with an Team Investment Item You can navigate to the Team Investments page and add the Blueprint attribute to the grid. You can then select the relevant blueprint to apply it.
Review Common Capabilities To learn more about common capabilities in the team investment blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Configure Modules
- Specify the Fields Needed to Create a Sub-Object Instance
- Work with Business Rules
- Associate Processes with Blueprints
- Use Channels to Embed External Content
You can use blueprints to configure layouts for various investments in Clarity.
Properties: You can add various stock and custom attributes associated with relevant objects to the Properties tab in a blueprint. The sections and the fields you add here will be available in the Properties module in Clarity.
Modules: The various subobjects associated with the relevant object are available as modules for the associated blueprint. You can add these modules to the blueprint to make them available to your users.
Rules: You can create business rules in Blueprints to control the modules or sections displayed to end-users. When you define business rules, you need to perform three key steps namely Define a Condition, Define Actions, Define Action Targets. You can now configure business rules to mark a record as read-only in Clarity if the conditions set in the business rule are satisfied. You can also configure business rules to mark an attribute(s) as read-only in Clarity if the conditions set in the business rule are satisfied.
Actions: You can use the Actions tab to associate the relevant processes with the blueprint. You will only be able to associate a process when the following conditions are met:
- The process is active.
- The process is associated with the object, or it includes a custom script (GEL).
- You have access to the process.
Create From Template: You can use it to configure all the out-of-the-box and custom fields that users need to populate in the New Team Investment window when users create a new team investment from a template.
Channels: You can use channels to embed content from another source, such as an external site, application, or Classic PPM context-sensitive investment reports into Clarity. You can interact with the content and make informed business decisions without leaving an investment in Clarity. As an administrator, you can add a channel to the blueprint, and configure a maximum of fifteen (15) channels. After you create a channel, you can find it in the Modules panel. After you publish the blueprint, the newly created channel appears as a tabbed page within the investment (Project, Custom Investment, Ideas) and Custom Objects.
You can designate a blueprint as the default blueprint for your organization. All existing records not associated with any blueprint are associated with the current default blueprint.
With the appropriate access rights, you can delete any user-defined blueprint.
Some scenarios in which you will see error or warning messages for Business Rules are:
- You have defined only one Action and the Action Target is missing.
- You have defined only one Condition is defined and the Condition Value is missing.
- An administrator deletes or deactivates an attribute that was used in a rule.
No new capabilities were introduced in this release.

Investment and Objective Hierarchy: Configure Blueprints

As an application administrator or PMO content designer, you can use blueprints to configure layouts for investment and objective hierarchies. You can copy and configure blueprints that reflect the goals of each business unit in your organization.
Clarity includes a default Hierarchy and Objective Hierarchy blueprints. You can create a copy of the blueprint and edit it to suit your goals. For example, a marketing blueprint may be very different from an engineering blueprint.
The key steps you need to follow while editing blueprints are:
1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant modules to the blueprint. In the current release, the blueprint includes the Investments and the
Properties modules. Both modules will automatically be included in your blueprint. 3. Publish the blueprint. 4. (Optional): Mark a blueprint as the default blueprint for hierarchies.
This section contains the following topics:
- Edit Blueprint Details
- Standard Hierarchy Modules
- Add Modules to Blueprints
- Introducing Sub Objects as Modules
- Associate a Blueprint with a Hierarchy
- Review Common Capabilities
Edit Blueprint Details
You can add various stock and custom attributes associated with Hierarchies to the Properties module in a blueprint.
Follow these steps:
1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section.
NOTE You can only add a custom attribute to a blueprint if it is API enabled. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available.
Configure Help Text in Blueprints
In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor

guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.
Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint
Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.

Standard Hierarchy Modules The Standard Investment Hierarchy blueprint includes the following modules.
- Audit
- Changes
- Conversations
- Financials
- Investments
- Issues
- Properties
- Risks
- Status
- Staff The standard Objectives Hierarchy blueprint includes the following modules.
- Objectives
- Audit
- Properties
- Key Results
- Conversations
- Canvas

Add Modules to Blueprints You can add the required modules to the blueprint. Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
IMPORTANT
- Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on
the Show in Details Flyout option, you can see Conversations in the Details panel of the Hierarchy.
- Audit Module: The Hierarchy's Audit module capabilities are limited to only the Hierarchy object
attributes enabled for audit. It is is not an audit aggregator for all the investments within the hierarchy. In Classic, enable the desired attributes on the Hierarchy object for audit purposes and select either change, insert, or delete configuration options. 5. Click Publish to save your changes and make the changes available to users. Introducing Sub Objects as Modules
The Hierarchies blueprint now includes a list of all custom sub objects across all investment types. Administrators can configure these sub objects to be displayed as modules in hierarchies. End users with appropriate permissions can then view and edit sub-object module information directly within the module, without having to drill down to the details of the investment.
NOTE Some key points to remember are:
- All sub-objects configured at the Investment object level or those configured for Project, Idea, or Custom Investments objects are available to be configured as modules.
- Like Risks, Issues, Changes and Status modules, users will only see sub-object module information only if the associated investment type has been imported into the hierarchy.
- Field level security and business rules are enforced in the hierarchy grid.
- If a configured module is specific to an Investment Type and there are no instances of the Investment Type in
a hierarchy, the module will not have any data to display.
Associate a Blueprint with a Hierarchy You can navigate to the Hierarchies page and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant hierarchy.
Review Common Capabilities To learn more about common capabilities in the investment and objective hierarchy blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Define a Canvas
- Use Channels to Embed External Content
NOTE Some key points to remember while defining the canvas are:
- The following table widgets are available:
- Investments
- Staff
- Risks
- Issues
- Changes
- Financials
- Cost Plan Details
- Financials
- Budget Plan Details
- Financials
- Benefit Plan Details
- Status
- Custom Sub-objects
- Canvas can be added to any existing or new hierarchy.
Roadmaps: Configure Blueprints
As an application administrator or PMO content designer, you can use blueprints to configure layouts for roadmaps. You can copy and configure blueprints that reflect the goals of each business unit in your organization. Let's consider an example where multiple product management teams in the organization are using roadmaps to achieve different business outcomes. They have created multiple custom attributes. Some attributes are relevant to the New Banking Application Product Management roadmap while others are relevant to the Next-Gen AI roadmap. The administrator can create different blueprints for these teams so each team would only see information relevant to them.hi
Clarity includes a default roadmap blueprint. You can create a copy of the blueprint and edit it to suit your goals. For example, a marketing blueprint may be very different from an engineering blueprint.
The key steps you need to follow while editing blueprints are:
1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields).

2. Add the relevant modules to the blueprint. In the current release, the blueprint includes the Investments and the Properties modules. Both modules will automatically be included in your blueprint.
3. Publish the blueprint. 4. (Optional): Mark a blueprint as the default blueprint for roadmaps.
This section contains the following topics:
- Edit Blueprint Details
- Standard Roadmap Modules
- Add Modules to Blueprints
- Associate a Blueprint with a Roadmap
- Review Common Capabilities
Edit Blueprint Details
You can add various stock and custom attributes associated with Roadmaps to the Properties module in a blueprint.
Follow these steps:
1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section.
NOTE You can only add a custom attribute to a blueprint if it is API enabled. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available.
Configure Help Text in Blueprints
In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.

Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint
Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.

Standard Roadmap Modules The Standard Roadmap blueprint includes the following modules. The same modules appear as clickable icons on the tile for a roadmap that is associated with the Standard Roadmap blueprint.
- Conversations
- Properties
- Roadmap Items Add Modules to Blueprints You can add the required modules to the blueprint. Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
IMPORTANT Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Roadmap. 5. Click Publish to save your changes and make the changes available to users.

Associate a Blueprint with a Roadmap You can navigate to the Roadmap page and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant roadmap.
Review Common Capabilities To learn more about common capabilities in the roadmap blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Define a Canvas
- Use Channels to Embed External Content
NOTE Some key points to remember while defining the canvas are:
- Only Roadmap Items table widget is available in Canvas.
- Canvas can be added to any existing or new roadmap.
Agreements: Configure Blueprints
As an application administrator or PMO content designer, you can use blueprints to configure layouts for the Agreements workspace. You can copy and configure blueprints that reflect the goals of each business unit in your organization. Let's consider an example where multiple product management teams in the organization are using agreements. You can create different blueprints that include custom fields and relevant channels to those stakeholders. Clarity includes a default Agreements blueprint. You can create a copy of the blueprint and edit it to suit your goals. The key steps you need to follow while editing blueprints are: 1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant modules to the blueprint. In the current release, the blueprint includes the Properties and Canvas
modules. 3. Publish the blueprint. 4. (Optional): Mark a blueprint as the default blueprint for agreements.
This section contains the following topics:
- Edit Blueprint Details
- Standard Agreement Modules
- Add Modules to Blueprints
- Associate Blueprint with the Agreement
- Review Common Capabilities
Edit Blueprint Details You can edit a blueprint to include additional fields in the Properties module. Follow these steps: 1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available to projects. All projects associated with this blueprint display the new layout. Configure Help Text in Blueprints In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.

Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint
Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.

Standard Agreement Modules The Standard Agreement blueprint includes the following modules. The same modules appear as clickable icons on the tile for an agreement that is associated with the Standard Agreement blueprint.
- Canvas
- Checklists
- Conversations
- Properties
Add Modules to Blueprints You can add the required modules to the blueprint. Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint.
IMPORTANT Conversations Module: You will see an option Show in Details Flyout for Conversation. If you turn on the Show in Details Flyout option, you can see Conversations in the Details panel of the Agreement. 5. Click Publish to save your changes and make the changes available to users.
Specify the Fields Needed to Create an Agreement The Agreement blueprints includes a Create From Template module. Administrators can use it to configure all the out-ofthe-box and custom fields that users need to populate in the New Agreement window when users create a new agreement from a template. Some key points to remember while using the Create From Template Module are:
- All mandatory project fields will be displayed on the screen provided they do not have a default value set or auto-
numbering.
- Administrators cannot remove mandatory fields without default values or auto-numbering from the
New Agreement section.
- Administrators cannot add the Blueprint field to the New Agreement section.
- In this release, you cannot add Timescaled value, Multi-value Lookups, and Attachment fields to the Create From
Template section. NOTE The New Agreement window can display a maximum of 200 fields.
Follow these steps: 1. Navigate to the existing Agreement blueprint to create a copy of the standard blueprint. 2. Open the blueprint and select the Create from Template tab. 3. Click Edit. 4. Locate and add the relevant fields to the New Agreement section. 5. Click Publish to save your changes.

Associate Blueprint with the Agreement You can navigate to the Agreement workspace and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant agreement.
Review Common Capabilities To learn more about common capabilities in the agreement blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Use Channels to Embed External Content
- Work with Business Rules
- Control Sub-Object Instance Creation
Plans: Configure Blueprints
As an application administrator or PMO content designer, you can use blueprints to configure layouts for the Plans workspace. You can copy and configure blueprints that reflect the goals of each business unit in your organization. Let's consider an example where multiple product management teams in the organization are using plans. You can create different blueprints that include custom fields and channels that are relevant to those stakeholders. Clarity includes a default Plans blueprint. You can create a copy of the blueprint and edit it to suit your goals. The key steps you need to follow while editing blueprints are: 1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant modules to the blueprint. In the current release, the blueprint includes the Properties and Canvas
modules. 3. Publish the blueprint. 4. (Optional): Mark a blueprint as the default blueprint for plans. This section contains the following topics:
- Edit Blueprint Details
- Standard Plan Modules
- Add Modules to Blueprints
- Associate Blueprint with Plans
- Review Common Capabilities
Edit Blueprint Details You can edit a blueprint to include additional fields in the Properties module. Follow these steps: 1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available to projects. All projects associated with this blueprint display the new layout.
Standard Plan Modules The Standard Plans blueprint includes the following modules. The same modules appear as clickable icons on the tile for an agreement that is associated with the Standard Agreement blueprint.
- Plan
- Resources
- Properties
- Investments
- Staff
- Audit
Add Modules to Blueprints You can add the required modules to the blueprint.
Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
Associate Blueprint with Plans You can navigate to the Plan workspace and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant plan.
Review Common Capabilities To learn more about common capabilities in the plan blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Use Channels to Embed External Content
- Work with Business Rules

Pages: Configure Blueprints
As an application administrator or PMO content designer, you can use blueprints to configure layouts and define Canvas as modules for Pages. You can copy and configure blueprints that reflect the goals of each business unit in your organization. Let's consider an example where multiple product management teams in the organization are using pages to access different parts of Classic PPM. Some parts of Classic PPM are relevant to the New Banking Application Product Management team while the Next-Gen AI team accesses different parts of Classic PPM. The administrator can create different blueprints for these teams so each team would only see information relevant to them.
Clarity includes a default Pages blueprint. You can create a copy of the blueprint and edit it to suit your goals. For example, a marketing blueprint may be very different from an engineering blueprint.
The key steps you need to follow while editing blueprints are:
1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant channels and canvas to the blueprint. The Properties modules will automatically be included in your
blueprint. 3. Publish the blueprint. 4. (Optional): Mark a blueprint as the default blueprint for pages.
This section contains the following topics:
- Edit Blueprint Details
- Define a Canvas for Pages
- Review Common Capabilities
Edit Blueprint Details
You can add various stock and custom attributes associated with pages to the Properties module in a blueprint.
Follow these steps:
1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section.
NOTE You can only add a custom attribute to a blueprint if it is API enabled. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available.

Configure Help Text in Blueprints In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.
Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.


Define a Canvas for Pages


From the Clarity 16.0.2 or later releases, you can define Canvas as modules with Pages in Blueprints. At a canvas level in Page Blueprints, as an Admin, you can configure (select) which table widgets (canvas components) will be available to users when configuring their Page canvases using a drag/drop list. You can:
- Control the order of these Widgets that appear for Users during their canvas configuration by the drag/drop list order.
- Change the canvas name.
- Define multiple canvases within the same Page blueprint. Each module can have different options enabled.
- Enable or disable the widgets you want for users in the canvas using the Enabled toggle button. Disabled table widgets
are moved to the bottom of the list and can no longer be dragged. This is an easy way to disable objects that you do not use in Clarity.
Follow these steps:
1. From the blueprint list, click the name of the page blueprint.

2. From the Modules tab, click New Canvas. 3. Perform the following to configure the canvas:
a. Name: Enter the canvas name b. Enabled: Toggle to enable or disable multiple object widgets.
NOTE Even if the object is disabled in Blueprints, it is not removed from a saved view in Pages. However, if you remove the table object from the save view, you cannot add the same again. c. Drag the objects up or down to define the order of widget display in Canvas. 4. If you are unsure of the changes, click Discard Edits. The edits are deleted and the blueprint details view reverts to the published version. 5. Click Publish to save your changes and make the new canvas available to Pages. When you publish a blueprint, all edits in progress for the details and modules are published at once. All Pages that are associated with the blueprint display the latest layout that is configured for the blueprint.
NOTE Some key points to remember are:
- The following table widgets are available:
- Tasks, Risks, Issues, Changes, and To Dos
- Action Items is also available as a widget
- Canvas can be added to any existing or new pages.
Review Common Capabilities To learn more about common capabilities in the page blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Work with Business Rules
- Associate Processes with Blueprints
- Use Channels to Embed External Content You can currently viewing a channel. You can use channels to embed content from another source, such as an external site, application, or Classic PPM context-sensitive investment reports into Clarity. You can interact with the content and make informed business decisions without leaving an investment in Clarity.
As an administrator, you can add a channel to the blueprint, and configure a maximum of fifteen (15) channels. After you create a channel, you can find it in the Modules panel. After you publish the blueprint, the newly created channel appears as a tabbed page within the investment (Project, Custom Investment, Ideas) and Custom Objects.
After you add a channel, you need not drag and drop the new channel to the blueprint layout section, it's automatically added.
After you create 15 channels, you can no longer see the New Channel button.
No new capabilities were introduced in this release.

Objectives: Configure Blueprints

As an application administrator or PMO content designer, you can use blueprints to configure layouts for the Objectives workspace. You can copy and configure blueprints that reflect the goals of each business unit in your organization. Let's consider an example where multiple product management teams in the organization are using Objectives. You can create different blueprints that include custom fields and channels that are relevant to those stakeholders.
Clarity includes a default Objectives blueprint. You can create and edit a copy of the blueprint to suit your goals.
The key steps you need to follow while editing blueprints are:
1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant channels and canvas to the blueprint. The Properties modules will automatically be included in your
blueprint. 3. Publish the blueprint. 4. (Optional): Mark a blueprint as the default blueprint for Objectives.
This section contains the following topics:
- Edit Blueprint Details
- Standard Objective Modules
- Add Modules to Blueprints
- Associate Blueprint with Objectives
- Review Common Capabilities
Edit Blueprint Details
You can add various stock and custom attributes associated with objectives to the Properties module in a blueprint.
Follow these steps:
1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section.
NOTE You can only add a custom attribute to a blueprint if it is API enabled. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available.
Configure Help Text in Blueprints
In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String -

Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.
Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint
Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.

Standard Objective Modules The Standard Objective blueprint includes the following modules. The same modules appear as clickable icons on the tile for an Objective that is associated with the Standard Objective blueprint.
- Key Results
- Audit
- Conversations
- Properties Add Modules to Blueprints You can add the required modules to the blueprint. Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab (for example, Key Results). 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.

Specify the Fields Needed to Create an Objectives The Objectives blueprints includes a Create From Template module. Administrators can use it to configure all the out-ofthe-box and custom fields that users need to populate in the New Objectives window when users create a new Objectives from a template. Some key points to remember while using the Create From Template Module are:
- All mandatory project fields will be displayed on the screen provided they do not have a default value set or auto-
numbering.
- Administrators cannot remove mandatory fields without default values or auto-numbering from the
New Objectives section.
- Administrators cannot add the Blueprint field to the New Agreement section.
- In this release, you cannot add Timescaled value, Multi-value Lookups, and Attachment fields to the Create From
Template section. NOTE The New Objectives window can display a maximum of 200 fields.
Follow these steps: 1. Navigate to the existing Objectives blueprint to create a copy of the standard blueprint. 2. Open the blueprint and select the Create from Template tab. 3. Click Edit. 4. Locate and add the relevant fields to the New Objectives section. 5. Click Publish to save your changes.
Associate Blueprint with Objectives You can navigate to the Objectives workspace and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant objective.
Review Common Capabilities To learn more about common capabilities in the objective blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Configure Modules
- Specify the Fields Needed to Create a Sub-Object Instance
- Define a Canvas
- Work with Business Rules
- Associate Processes with Blueprints
- Use Channels to Embed External Content
NOTE Some key points to remember while defining the canvas are:
- The following table widgets are available:
- Key Results
- Custom Sub-objects
- Canvas can be added to any existing or new hierarchy.
Resources: Configure Blueprints

As an application administrator or PMO content designer, you can use blueprints to configure layouts for the Resources workspace. You can copy and configure blueprints that reflect the goals of each business unit in your organization. Let's consider an example where multiple business units in the organization are using the Resources workspace. One of them may want additional information such as Date of Hire and Availability Rate while another may want to see minimal details. You can create different blueprints with custom fields and relevant channels for those stakeholders. Clarity includes a default Resources blueprint. You can create a copy of the blueprint and edit it to suit your goals. The key steps you need to follow while editing blueprints are: 1. Create a copy of the standard blueprint, rename it, and configure its Details layout (sections and fields). 2. Add the relevant modules to the blueprint. In the current release, the blueprint includes the Properties module. 3. Publish the blueprint.
NOTE
The Resources Blueprint is used to configure layouts for both Resources and Roles. It's recommended that you create separate blueprints for Resources and for Roles. You can then customize these blueprints to display relevant attributes. Finally, you can associate Resources and Roles with their respective blueprints. This section contains the following topics:
- Edit Blueprint Details
- Standard Plan Modules
- Add Modules to Blueprints
- Associate Blueprint with Resources
- Review Common Capabilities

Edit Blueprint Details You can edit a blueprint to include additional fields in the Properties module. Follow these steps: 1. From the blueprint list, click the name of the blueprint that you want to edit. 2. On the details page that displays the currently published blueprint layout, click Edit. 3. Edit the blueprint details:
- Drag-and-drop available fields from the Fields list onto an existing section within the blueprint. Use the Search to look for specific fields by label name. Resize any field in the layout using the shaded triangle that appears in the bottom-right of the field.
- Drag-and-drop fields from a blueprint layout section to another section.
- Drag-and-drop fields from the blueprint layout sections back to the list of fields. You can also click the X on a field in
a section to remove that field. The field goes back to being an available field.
- Delete a section with or without fields. All fields within that section are removed from the layout and are available
again to select from the Fields panel.
- Drag an existing section up or down within the blueprint to rearrange the sections. All fields that are contained in the
section also move to the new location.
- Add a section by clicking Add Section or drag-and-drop the Add Section button to where you want to add a section. 4. If you are unsure of the changes, discard the edits. The edits are deleted and the blueprint details view reverts to the currently published version. 5. Click Publish to save your changes and make the new layout available to projects. All projects associated with this blueprint display the new layout.
Configure Help Text in Blueprints In the Clarity 16.1.3 and higher releases, as an administrator, you can configure Help Text for users on both Create From Template and Properties screens. This enhancement empowers administrators to provide contextual help and tailor guidance to users within Clarity. For this, you can use the Help Text attribute in the blueprint to create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. By allowing the inclusion of rich text, links, tables, and images, the Help Text attribute offers a versatile tool for enhancing user understanding. Whether used to clarify a process, provide additional information, or link to external resources, the Help Text feature adds valuable support to the user experience. This attribute is supported in all Blueprint-enabled Objects that have Create From Template and/or Properties available.

Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select either the Create From Template or Properties tab. 4. Drag and drop the Help Text attribute into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users.
NOTE Some key points to remember are:
- As an admin, you can add new or update content to the Help Text attribute directly within the Blueprint
Create From Template and Properties windows.
- You can reuse multiple times in the same layout within the same area or section.
- You can resize and/or move like other attributes in the layout.
- The display of the Help Text, including its format, location, and size, is determined by
the admin's configuration.
- Help Text is not supported for Sub-Object, Timesheets, or for passing variables and/or parameters.
- The Help Text feature has not been implemented in the Plans Blueprint within the Create From Template
function.
- As a user, you can view the Help Text when accessing both the Create From Template and Properties
windows, but it remains read-only.

Standard Plan Modules The Standard Resources blueprint includes only the Properties module in this release. Add Modules to Blueprints If you have created custom sub objects, you can perform the following steps to add them to the blueprint. Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add them to the blueprint. 5. Click Publish to save your changes and make the changes available to users. Associate Blueprint with Resources You can navigate to the Plan workspace and use the Column Picker to add the Blueprint field to the grid. Then, associate the blueprint with the relevant plan. Review Common Capabilities To learn more about common capabilities in the resource blueprint, see:
- Organize the Properties Module Using Sub Tabs
- Specify the Fields Needed to Create a Sub-Object Instance
- Work with Business Rules
- Use Channels to Embed External Content


Timesheets: Configure Blueprints
As the application administrator, use blueprints to customize timesheet layouts for your organization, quickly adjusting the setup to meet specific needs.
Clarity includes a default Timesheet blueprint. You can create a copy of the blueprint and edit it to suit your goals. The key steps you need to follow while editing blueprints are:
1. Create a copy of the standard blueprint and rename it. 2. Add or remove the modules to/from the blueprint. The blueprint includes the My Timesheet, Review & Approve, and
Timesheets modules. 3. Publish the blueprint. 4. (Optional): Mark a blueprint as the default blueprint for Timesheets.
This section contains the following topics:
- Prerequisites
- Standard Timesheet Blueprint
- Set the Default Blueprint
- Copy a Blueprint
- Edit a Blueprint
- Delete Blueprints
- Add Modules to Blueprints
- Remove Modules from Blueprints
Prerequisites
Ensure you have the following rights to configure blueprints for Timesheets:
- Administration - Navigate: Allows user access to the Administration workspace in Clarity. The user will only be able to access administration tiles for which the user has access.
- Administration - Blueprints - Navigate: Allows user access to the Blueprints Tile under Administration in Clarity. The user will be able to view all Blueprints.
- Blueprint - Create Copy: Allows user to create a copy of an existing Blueprint.
- Blueprint - Delete - All: Allows user to delete all Blueprints except the Standard Blueprint.
- Blueprint - Edit - All: Allows user to edit all Blueprints except the Standard Blueprint.
For more information about access rights, see Clarity Access Rights in the Reference section.
Standard Timesheet Blueprint
The Standard Timesheet blueprint is the pre-defined system blueprint that you cannot configure or delete. Initially, the Standard Timesheet blueprint is marked as the default blueprint.
Set the Default Blueprint
You can designate the Standard Timesheet blueprint or any other blueprint as the default blueprint for Timesheet. Select the Timesheet blueprint and click Make Default. You can see that the Default field will be enabled for the blueprint. Only one blueprint can be a default.


When you mark another blueprint as the default, the existing blueprint is no longer the default blueprint.


Copy a Blueprint
Create a blueprint by copying the standard timesheet blueprint or another user-defined blueprint. Select the Standard Timesheet blueprint and click Copy to create a new blueprint. The new blueprint is created with a unique identifier through auto-numbering. The copy also includes the modules from the existing blueprint.

Edit a Blueprint
You can rename or edit the configuration of a user-defined blueprint. You cannot edit or delete the Standard blueprint for timesheets. You can rename the Standard blueprint for timesheets.

Delete Blueprints
With the appropriate access rights, you can delete any user-defined blueprint. If you delete a user-defined default blueprint, then Timesheets layout is re-associated with the Standard Timesheet blueprint. The Standard Timesheet blueprint becomes the new default blueprint. You cannot delete the Standard Timesheet blueprint.

Add Modules to Blueprints
You can add the modules to the Timesheet blueprint.
Follow these steps:
1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add the module to the blueprint. 5. Click Publish to save your changes.

Remove Modules from Blueprints
You can remove the modules from the Timesheet blueprint.
Follow these steps:
1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Click 'x' on the tile to remove the module from the timesheet. 5. Click Publish to save your changes.

Staffing Workspace: Configure Blueprints


You can now use Blueprints to control the modules available to users in the Staffing Workspace. In previous releases, all users accessing the Staffing workspace could see all four modules irrespective of whether they were using assignments or allocations within their organization. You can now edit the Staffing Blueprint and configure the modules available to users in the Staffing workspace. Clarity includes a default Staffing blueprint. You can create a copy of the blueprint and edit it to suit your goals. The key steps you need to follow while editing blueprints are: 1. Create a copy of the standard blueprint and rename it. 2. Add or remove the modules to/from the blueprint. 3. Publish the blueprint. 4. (Optional): Mark a blueprint as the default blueprint. This section contains the following topics:
- Prerequisites
- Standard Staffing Blueprint
- Set the Default Blueprint
- Copy a Blueprint
- Edit a Blueprint
- Delete Blueprints
- Add Modules to Blueprints
- Remove Modules from Blueprints
- Secure Modules Based on Access Groups Prerequisites Ensure you have the following rights to configure blueprints for the Staffing Workspace:
- Administration - Navigate: Allows user access to the Administration workspace in Clarity. The user will only be able to access administration tiles for which the user has access.
- Administration - Blueprints - Navigate: Allows user access to the Blueprints Tile under Administration in Clarity. The user will be able to view all Blueprints.
- Blueprint - Create Copy: Allows users to create a copy of an existing Blueprint.
- Blueprint - Delete - All: Allows users to delete all Blueprints except the Standard Blueprint.
- Blueprint - Edit - All: Allows users to edit all Blueprints except the Standard Blueprint. For more information about access rights, see Clarity Access Rights in the Reference section.
Standard Staffing Blueprint The Standard Staffing blueprint is the pre-defined system blueprint that you cannot configure or delete. Initially, the Standard Staffing blueprint is marked as the default blueprint.
Set the Default Blueprint You can designate the Standard Staffing blueprint or any other blueprint as the default blueprint for the Staffing workspace. Select the Staffing blueprint and click Make Default. You can see that the Default field will be enabled for the blueprint. Only one blueprint can be a default. When you mark another blueprint as the default, the existing blueprint is no longer the default blueprint.
Copy a Blueprint Create a blueprint by copying the standard blueprint or another user-defined blueprint. Select the Standard Staffing blueprint and click Copy to create a new blueprint. The new blueprint is created with a unique identifier through autonumbering. The copy also includes the modules from the existing blueprint.
Edit a Blueprint You can rename or edit the configuration of a user-defined blueprint. You cannot edit or delete the Standard blueprint. You can rename the Standard blueprint.
Delete Blueprints With the appropriate access rights, you can delete any user-defined blueprint. If you delete a user-defined default blueprint, then the Staffing workspace is re-associated with the Standard Staffing blueprint. The Standard blueprint becomes the new default blueprint. You cannot delete the Standard blueprint.
Add Modules to Blueprints You can add the modules to the blueprint. Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Drag and drop the relevant modules into the blank boxes to add the module to the blueprint. 5. Click Publish to save your changes.
Remove Modules from Blueprints You can remove the modules from the blueprint.


Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Click 'x' on the tile to remove the module. 5. Click Publish to save your changes.
Secure Modules Based on Access Groups


Administrators can now secure modules within the Staffing workspace to ensure various user groups can access modules relevant to them. A typical scenario is given below.
- Members of the Administrators group should have access to all modules.
- Members of the PMO group for business units in your organization using Allocations should have access to the
Allocations by Investment and Allocation by Resource modules.
- Members of the PMO group for business units in your organization using Assignments should have access to the
Assignments by Investment and Assignments by Resource modules.
- All PMO group members can access the Staff module.
- The Executive team can access the Investments module. This allows administrators to streamline workflows and ensure each user only access workspaces and modules that are relevant to their job.

Follow these steps: 1. Navigate to Administration, Blueprint. 2. Click the name of the blueprint that you want to edit and click Edit. 3. Select the MODULES tab. 4. Click the relevant module, and use the Secure Access button to select groups who can access this module. 5. Click Publish to save your changes.
Setting Up Rules for Timesheets
Consider a scenario where you want to enforce an organizational mandate that employees should not work for more than fifty hours a week. You can now use the Timesheets tab on the Administration workspace to define Business Rules in Clarity to enforce such mandates. Whenever users submit a timesheet, Clarity will validate it against the defined business rules. Users can only submit Timesheets after they meet all the requirements defined by using the Business rules.
Some key benefits of using Timesheet rules are:
- Enforcing the business rules early in the timesheet workflow process helps to improve the efficiency of tracking actual
work effort.
- No one likes to keep track of all the various `rules' required by the business for filling out a timesheet, and managers
don't want to spend too much time reviewing and returning timesheets to ensure data is compliant with business needs.
- Administrators can now create rules without having to rely on understanding complex coding and have the ability to quickly edit customized error messages and enable or disable rules.
- Timesheet Users will be guided with customized error messages in their preferred language and learn what data is appropriate and valid based on feedback from the application when they `submit' their timesheet for approval.

IMPORTANT If 'Timesheet Hook' is installed, Clarity will use that instead of the rules defined in Clarity. If Clarity rules are defined and enabled when customized `Hook' files exist, the Clarity rules will be ignored. To use Clarity Timesheet Rules:
- Remove the custom `Hook' files.
- Ensure the `Alias.xml' file has not been customized to point to a custom file.
- Remove any reference to the customized files from the properties.xml file.
This page contains the following sections:
- Managing Records By Using the Grid Layout
- Creating Rules for Timesheets
- Examples of Leveraging Business Rules
- Key Points to Remember
Managing Records By Using the Grid Layout The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to
create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users. REMEMBER To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Details Panel
- Saved Views
- Filters NOTE In addition to those actions, you can also carry out the following action(s) within Grid:
- Use the Bulk Delete capability in the Common Grid to delete multiple records.


Creating Rules for Timesheets


When you define a rule, you need to provide the following information:
- Rule Name and Description that explains the intent of the rule
- Error Message that will be displayed to end users. You can change your language setting and localize the error
message for various target languages.
- Conditions triggering the business rule. You can specify Timesheet Error Conditions and Timesheet Entry Error
conditions.
Follow these steps: 1. Log into Clarity and click Administration, Timesheets (Beta) to open the Timesheets (Beta) workspace. 2. Click New Rule to open the New Rule dialog box. 3. Enter the Rule Name and the appropriate description that will help other administrators understand the purpose of the
rule. 4. Enter the Error Message that should be displayed if all the conditions specified in the Timesheet Error Conditions
and Timesheet Entry Error Conditions are met. 5. In the Timesheet Error Condition section, configure the rules that apply to the entire timesheet. 6. In the Time Entry Error Condition section, configure the rules that apply to individual entries. 7. Click Create to create the rule.
NOTE Some key points to remember are:
- Errors are generated when all conditions within the defined rule are met.
- Each rule is evaluated separately.
- The Timesheet Error Conditions area focuses on rules you can create that apply to the whole timesheet. For
example, you can specify a rule that will not allow you to submit a timesheet where the Timesheet Grand Total exceeds 40 hours.
- The Time Entry Error Conditions area focuses on rules you can create that apply to individual entries. For example, you can specify a rule that will not allow you to submit a timesheet when you enter time for tasks that are locked.
- When you define multiple conditions, the business rule will only execute when all of the conditions are met.
- Task-level rules will not apply when Tasks are created via the Timesheet Integration job as part of Frictionless Accounting. The rules will apply on subsequent updates. Examples of Leveraging Business Rules Here are a few examples of business rules that you can create within your organization. Validating Daily Totals or Grand Totals This is the most straightforward use case for most organizations where they want to implement rules that govern the total time submitted by resources. Let's consider the following examples. Rule 1: You want to ensure that contractors cannot submit timesheets if they enter more than 12 hours per day. Let's examine the necessary conditions for this rule.
- Use the Resource drop-down list to ensure you select the "Contractor" field. This will ensure the rule executes only for contractors.
- Use the Timesheet Total drop-down list to ensure that the rule will execute only when the Timesheet Daily total is more than 12 hours.
Rule 2: You want to ensure that employees cannot submit timesheets for more than 40 hours for future time periods. Let's examine the necessary conditions for this rule.
- Use the Resource drop-down list to ensure you select the "Employee" field. This will ensure the rule executes only for employees.
- Use the Time Period drop-down list to ensure that the rule executes only for future timesheets.
- Use the Timesheet Total drop-down list to ensure that the rule will execute only when the Timesheet Grand total is
more than 40 hours. NOTE The `Timesheet Total' condition cannot be used with any of the `Time Entry Error Conditions'.
Validating the Sum of Entries In this scenario, organizations want to govern the daily totals submitted by the resources. Let's consider the following examples. Rule 1: You want to ensure that Daily Totals for Billable work cannot exceed 8 hours per day. Let's examine the necessary conditions for this rule.
- In the Time Entry Error Conditions section, select Sum of Entries and configure it to ensure that the rule will execute when the Daily Sum is greater than 8 hours.
- In the Where Time Entry option, set the Input Type Code to Billable to ensure the rule executes only when resources enter more than 8 hours of daily billable work.
Rule 2: You want to ensure that contractors cannot submit timesheets with more than 5 hours of non-billable time per timesheet. Let's examine the necessary conditions for this rule.
- Use the Resource drop-down list to ensure you select the "Contractor" field. This will ensure the rule executes only for contractors.
- In the Time Entry Error Conditions section, select Total Sum and configure it to ensure that the rule will execute when the Total Sum is greater than 5 hours.
- In the Where Time Entry option, set the Input Type Code to Non-Billable to ensure the rule executes only when contractors enter more than 85 hours of total non-billable work for the timesheet. NOTE Some key points to remember are:
- When creating this type of rule, if no additional conditions are defined for the `Where' conditions, it produces the same results as the rule using the `Timesheet Total' condition.
- Only one condition can be defined per rule for the `Sum of Entries' - either Daily Sum or Total Sum.
- Other conditions can be defined for Resource, Time Period, Time Entry, Task or Investment
- The `Sum of Entries' condition cannot be used with the `Timesheet Total' condition.
Checking Data Integrity of Fields You can use `Any Entry' when you want a rule that just checks specific properties and are not concerned with checking the Timesheet Total or Sum of Entries totals. Let's consider the following examples. Rule 1: You want to ensure that Tasks from Non-Admin `Miscellaneous Work' investments cannot be submitted for future time periods.
- Use the Time Period drop-down list to ensure that the rule will only execute for future time periods.
- Use the Where Investment drop-down list to ensure that this rule executes only for the Investment type Miscellaneous
Work.
- Use the Where Task drop-down list to ensure that this rule executes for tasks where the charge code is not equal to
out-of-office.
Rule 2: You want to ensure that users cannot submit timesheets if they have not entered the charge code for investments, tasks, and time entry.
- Use the Where Time Entry drop-down list to ensure that the rule will only execute when the charge code is empty.
- Use the Where Investment drop-down list to ensure that the rule will only execute when the charge code is empty.
- Use the Where Task drop-down list to ensure that the rule will only execute when the charge code is empty.
NOTE Some key points to remember are:
- For Any Entry, multiple conditions can be defined on property fields from the Resource, Time Period, Time
Entry, Investment, or Task objects.
- The Any Entry condition cannot be used with the `Timesheet Total' condition.

Checking Time Entry Totals
You can use `Any Entry' when you want a rule that just checks specific properties and are not concerned with checking the Timesheet Total or Sum of Entries totals.
- The "Total" field on the Time Entry Object allows you to check the totals per row.
- The `Total' field on the Time Entry Object allows you to check the totals per ROW.
- The Time Entry `Total' field can be defined using `Any Entry' to check the total amount for any row that matches the
total amount condition and any other property field conditions.
- It is recommended that when using this field in a rule, only use it for the `Any Entry' type; not with the `Sum of Entries'
rule type. Using the Time Entry `Total' field with the `Sum of Entries' condition may not produce the expected results.
Let's consider the following examples.
Rule: You want to ensure that each time entry row must have time entered.
- Select the Any Entry Time Entry Error Condition.
- Use the Where Time Entry drop-down list to ensure that this rule executes only when the Time Entry total is equal to
zero.
The following table describes the various fields available in the Where Time Entry drop-down list.

Time Entry Field Baseline Charge Code (Editable) ETC (Editable)
Start & Finish Input Type Code Number of Notes Posted Actuals Role (Editable) Short Name

Description
Current Baseline from Task
Populated from Task or Investment or prior period
Populated from Assignment
- When actual time is entered, the field displays the
decremented amount down to 0 (original
- actual)
- When the ETC field is directly updated, it becomes `Pending
ETC' (blue color treatment with tooltip)
Populated from Assignment
Populated from Resource properties or prior period
Total number of notes entered for the row
Populated from Assignment
Populated from Assignment or Allocation or Resource or prior timesheet
Populated from Task


Total (Editable)
User Value 1 (Editable) User Value 2 (Editable)

Row Total: Computed sum of Daily Actuals entered The administrator can enable `Total' for editing Lookup Value selected by the user on the Time Entry row Lookup Value selected by the user on the Time Entry row

Key Points to Remember
NOTE Some key points to remember are:
- You need to have the Administration
- Timesheets
- Navigate access right to create rules.
- The Timesheet User does not require any additional access rights to see the new validation error messages.
- If you are currently utilizing the `Timesheet Hook' add-in, you will need to decide if you want to continue to
use the `Hook' or to use Timesheet Business Rules. You cannot use `both'.
- As an administrator, you will define the rules in terms of `Hours' or `Days'. The numerical values entered
on the rules, defined by the Administrator, will be entered with the understanding that they represent either `Hours' or `Days' based on the system Timesheet Display Unit. For example, when the setting is `Hours', the administrator and users are accustomed to working with hourly units of measurement for submitting timesheet actuals. If your Clarity system is set up to display Days, your administrator will naturally think in terms of Days to create the rules. Therefore, when using Timesheet Rules, all users must use the system default 'Display Unit' as defined in the Default Time Entry Options under Timesheet Options. If a user sets a different personal 'Display Unit' (e.g., to Days), the Timesheet Rules will not apply correctly to their timesheet.
IMPORTANT
The administrator can apply the setting to all resources to ensure that all timesheet users are using the default 'Display Unit' (i.e., Hours). To learn more, see Configure Timesheet Options
- The Business Rules modal supports attributes of the following objects and sub-objects:
- Resource, Time Period, Timesheet, Time Entry, Investment, Task
- The Business Rules modal supports the following data types:
- Lookups, Plain Strings, Numbers, Dates
- The Business Rules modal supports the following Smart Filters:
- Current User, Current Date, Time Entry Totals: Sum of Entries, Timesheet Totals: Grand Total, Daily Total


Administer Plans
You can use the Plans tile to select the Investment, Staff, and Resource attributes that would be available in the column panel, when you create a plan from the Investment OBS in Clarity. When you synchronize the plan, Clarity will automatically synchronize the values associated with these attributes and update the plan. You need the Administration Plans - Navigate access right to access the "Plans" tile.
NOTE Some key points to remember are:
- You can only edit the Include and Starred attributes on the Investment Attributes, Staff Attributes, and Resource Attribute tabs.
- You can select a maximum of 50 attributes under each tab. You will see an error message if you select more than 50 attributes in either tab.
- You cannot use the Bulk Edit capability to edit the grids on the Investment Attributes, Staff Attributes, and Resource Attribute tabs.
- When end users create a plan from the investment OBS, they will only see attributes that were selected on the Plans tile.
- The % Availability attribute is not available for selection in the Investment Attributes and Staff Attributes tabs.
- In the Staff Attributes module, you can only select attributes by using the Include flag where "Database
Table=prteam. All other attributes where "Database Table != prteam" will not be visible on the end-user side under the "Staff" tab regardless of the "Include=TRUE." The ETC, Total Usage, Actuals, and Allocations are exceptions to this rule.
- If you change the Include flag associated with a lookup from True to False, users will not be able to create new plan tables with that lookup. Existing plan tables using that lookup will continue to display in plans until the next plan sync.
Steps to Administer Plans
Follow these steps:
1. Log into Clarity and click Administration to open the Administration workspace. 2. Click Plans to open the Plans area. 3. In the Investment Attributes tabs, ensure that the Include column is visible in the grid. If you cannot see it, use the
Columns tab to select it. 4. Select the Include column for all the attributes that should be visible in the Investment module when you create an
Investment OBS-Driven Plans. 5. Navigate to the Staff Attributes tab. Select the Include column for all the attributes that should be visible in the Staff
module when you create an Investment OBS-Driven Plans. 6. Navigate to the Resource Attributes tab. Select the Include column for all the attributes that should be visible when
you create an Investment OBS-Driven Plans.
Managing Records By Using the Grid Layout
The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.

REMEMBER To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Saved Views
- Filters

Administer Staffing
The Staffing Tile allows administrators to perform the following actions:
- Hide attributes in the Staffing workspace, which is essential for simplifying users' views.
- Administer the scenarios capability in the Staffing workspace.
Hide Attributes in the Staffing Workspace
You can use the Investment Attributes, Staff Attributes, and Resource Attributes tabs to select the fields displayed to users in the Staffing Workspace. The tabs include the Label and Secure attributes, which are set by administrators in the Attributes grid.
Some key points to remember are:
- You need the Administration - Staffing - Navigate access right to allow users access to the Staffing tile.
- You can clear the "Include" flag for attributes that you do not want to display in the Staffing workspace.
- The changes you make in the Staffing tile impact:
- Timelines and Staffing Grid
- Columns
- Filtering
- Widgets
- The changes you make in the Staffing tile do not impact the Resource Histogram.
- Clarity now includes a set of fields that must always be available in the Staffing Workspace to function correctly. They include the Finish, Has Staff, and Start fields associated with the Investment object. The Is Staffed field associated with the Resource object and the Default Allocation and Staff Type fields associated with the Team object are also mandatory and cannot be hidden from users.
Follow these steps:
1. Log into Clarity and click Administration to display the Administration workspace. 2. Click Staffing to open the Staffing page. 3. Select the Investment Attributes, Staff Attributes, or Resource Attributes tabs to display various attributes associated
with these objects. 4. Select the check mark associated with the attribute to clear it. This will ensure the attribute is not displayed in the
following areas of the Staffing workspace.
- Timelines and Staffing Grid
- Columns
- Filtering
- Widgets

Administer Scenarios
The Scenarios tab enables you to administer scenarios. This tab displays a list of scenarios for which the user has edit rights. If you want an administrator to access all the scenarios, ensure they have the Staffing Scenario
- Access and the Staffing Scenario - Edit All access rights. You can also provide the Staffing Scenario - Delete All access right to administrators. Some key actions you can perform are:
- Rename scenarios and edit the description.
- Update the owner of a scenario. The new owner can update scenarios and share them with other users.
- Share the scenario with groups and people. The settings in the Actions Framework determine this ability.
NOTE Only the active system groups that are `Enabled for Sharing' will appear for selection.
Follow these steps:
1. Log into Clarity and click Administration to display the Administration workspace. 2. Click Staffing to open the Staffing page. 3. Select Scenarios to open the Scenarios page. 4. Double-click the Scenario name to update it. You can also click the Description cell to update it. 5. Double-click the owner to select the new owner of the scenario. 6. Use the Shared to Groups and Shared to People columns to share the scenario with relevant stakeholders. 7. Right-click a scenario and select Delete Row to delete the scenario.
Managing Records By Using the Grid Layout
The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Edit Data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the + or - option to shift the values in the date field.
- Use the Drag Functionality to populate data.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Use the Bulk Delete capability in the Common Grid to delete multiple records.
- Export the common grid data to a CSV file. The Classic PPM user interface supports the export of up to 25000 rows to
CSV file. In this release Clarity supports the export of up to 250,000 rows to CSV files.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using a series of configurable visual widgets.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.
NOTE To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Widgets
- Details Panel
- Saved Views
- Filters


Secure Field Level Access
You can now secure fields to ensure only specific groups of users can access specific fields or attributes.
As an administrator, you can implement Field Level Security in Clarity to ensure you provide access to specific attributes or fields for specific user groups in various Clarity objects. Users who have access to the secured attributes can view them in both board and grid views. Although the field level security feature lets you display or hide fields from specific user groups, as an administrator, you can view all the attributes when you configure the Blueprints.
Important!
- Field level security always takes precedence over Instance, or OBS, or Global rights in a project or idea.
- Field level security is applicable to custom investments, ideas, and projects.
- Field level security is not applicable to TSV attributes in Clarity. These fields appear as Per-Period Metric columns or
Totals columns for 'Sum of Periods' or 'Grand Totals'.
Example:
Let us consider a scenario.
Sid
- a portfolio manager is responsible for creating, editing, and managing Investment Items for his organization. Sid adds the Estimated Budget Plan value for an investment.

Table 2:

Name Role Group Object Fields

User Details

User 01 Susan Chief Information Officer CIO Financials Estimated Budget Plan

User 02 Jennifer Product Manager PMO Investment Financials Estimated Budget Plan

Requirement:
- Sid wants Susan to review and update the Estimated Budget Plan value for the investment.
- Sid needs to share the Estimated Budget Plan value with Jennifer for assigning the tasks and estimating the timelines.

Solution: Sid works with System Administrator to give:
- The Access Edit and Access View rights for the CIO group. So that, Susan can review and update the Estimated Budget Plan field.
- The Access View rights for the PMO Investment group. So that, Jennifer can view the Estimated Budget Plan field.
This section contains the following topics:
- Prerequisites
- Configure Secure Attributes
- Objects Supported by Field Level Security
- Scenarios and Exceptions
- Impact and Exemptions
Prerequisites
The following rights are required to access secured fields:
- You must belong to the PMO System Administrator group.
- Ensure that you have the Attribute management
- Navigate right. This right allows you access to the Attributes
management page in Clarity. You can view information related to attributes, and configure attribute security using access groups and see the Attributes tile in Administration workspace. The Attributes page displays the Attribute generic grid with all attributes of all objects.
- PMO Persona Group - Must have FLS-Edit access rights on the Template and Assignment Pool attributes to edit or set a project as a template.
- Any other End-User Persona Group - Should have FLS-View access rights on the Template and Assignment Pool attributes to create projects using templates.
- Any End-User or Group who do not have FLS access to Template or Assignment Pool cannot do the following:
- Set a project as a template
- Create projects using a template.
- To Convert Idea to Project
- Users must have either View or Edit access to Template attributes. Without access, users cannot convert ideas to projects.
- If the attribute is set to required and a user has only FLS view access, the user cannot edit the value of the attribute when creating a project or idea instance.
- The system should not allow you to specify the values for required or non-required attributes that have FLS View only access rights while creating a new instance.
- When you are creating a new Custom Investment instance, the system should not allow you to specify the values for required or non-required attributes that have FLS View only access rights.
Configure Secure Attributes
Follow these steps:
1. Navigate to Administration and click Attributes.The Attribute page opens, all the attributes for all objects are listed on this page.
2. Click the checkbox in the Secure column to set the corresponding attribute to secure. The following conditions apply if you set the Secure flag to:
- False - All users can access this attribute.
- True - Only users who belong to select groups can access the attribute.
- True - and if no group access is set, the attribute cannot be accessed by anyone. Note: If you set the Secure flag to true, the system does not set any group automatically.
3. Select a row and click Details. The Details fly-out window opens. 4. Specify the Access Edit and Access view groups.

All users who belong to the specific group can view or edit the attribute based on the access provided. You can configure access independently for the same attribute on different investment types. If an attribute is used in a Project and the same attribute is used in an Idea, or Custom Investment item, the attribute can be configured to secure in just one of the objects.
IMPORTANT Some key points to remember are:
- If the attribute is_template is set to Secure and no access rights are provided, the system will not let you
create a project using the option New From Template.
- A new attribute, "Non-Securable," has been added to the Attribute grid. This allows administrators to filter and
identify the attributes marked as non-securable quickly.
- A new option, "Prioritize Access Rights over Attribute Level Security," has been introduced on the System
Options page in Classic PPM. This option is not enabled by default. When you select this option, access rights will be given priority over Clarity Attribute Level Security configured on the Attributes page.
- From the Clarity 16.1.3 and higher releases, you can use the All Users option in the Access View column lookup to view the attribute without the need to create and manage an access group, while edit access remains limited to specific groups. This gives ability to secure previously restricted attributes like "Active" and "Template," enabling administrators to grant Edit Access selectively while setting View Access to "All Users."
Objects Supported by Field Level Security You can view the list of objects supported by Field Level Security using the Group By option. Follow these steps: 1. Navigate to Administration and click Attributes. The Attribute page opens, all the attributes for all objects are listed
on this page. 2. Drag the Object column header and drop it on the Group By bar. The list of objects is displayed.
Scenarios and Exceptions
- Blueprints
- Details Panel
- Secured Fields in Grid Layout
- Secured Fields in Projects or Ideas Board View After you implement field-level security note the following scenarios and exceptions:
Blueprints
- As a Blueprint administrator, you should be able to view all the secure and non-secure attributes when you configure
the Blueprint for Projects, Ideas, or Custom Investment Items.
- If a user does not have any access rights to all the secured fields in Preview mode, hide the section from Blueprint.
- If a user has access to at least one of the attributes within the section, then the section should be displayed in Preview
mode.
- If a user has access to secured fields in a section, the user should be able to view the fields.
- If a user does not have access to secured fields within a section, the user cannot view the secured fields in Preview
mode.

Details Panel
- If a user has access to secure fields, the user should have access to the fields from the Details panels as well.
- If a user does not have access to secure fields, the user should not have access to the fields from the Details panel as
well.
- If a user does not have access to secure fields, the user should not be able to view them in the Details Page. A blank
label is displayed.
- If a user does not have access to secure fields, the user should not be able to fetch the secure fields using REST API
GET/POST/PATCH calls.

Secured Fields in Grid Layout
Users can either view or edit the secured fields from the Projects, Ideas, Custom Investments, or Custom Objects grid based on their access rights. The following conditions apply:

Functionality Grid Layout Grid Filter
Group By
Column Panel Export to CSV

Users with access to secured fields
Secure fields are accessible from the grid layout.

Users without access to secured fields
Secured fields are inaccessible from grid layout.

Users can filter the secured fields from the grid filter.

Users cannot access the secured fields from the grid filter. If users open a saved view with a filter that contains a secured field, they can only see an unsaved view.

Users can view the grid data that is grouped by a secured field from a saved view.

Users cannot view data from a saved view that is grouped by a secured field. The user sees an unsaved view.

Users can view the secured fields from the Secured fields are not visible from the

column panel.

column panel.

Users should be able to export the CSV file Users cannot view the secured attributes to

with secure attributes.

download the related CSV file.

Secured Fields in Board View The following conditions apply basis the access provided to users for secured fields in projects or ideas board view:

Functionality Saved View

Users with access to secured fields User can view the saved view.

Card Title - The card title for a saved view that contains a secured field.
Column - If a column is set to secure

User can view the card. User can view the column.

Column Tab

User can view the column tab.

Color By Card Fields Card Metrics

User can view the secured field in the set color. User can view the fields in the card.
User can view the card metrics.

Users without access to secured fields A message appears indicating that a field is unavailable and displays an unsaved view.
User can view the card, the title of the card displays blank.
The column title is cleared and set to none. The `None' column appears with the data.
The Column tab on the right side of the page is not visible as there are no columns to hide or show. The view option for color by is cleared out and set to none.
The view option for the card fields is cleared out.
The view option for the card metrics is cleared out.


Functionality
View
- If a view is changed and contains secured fields.

Users with access to secured fields User can view the secured fields.

Users without access to secured fields
A message appears and the view changes into an unsaved view (without the secured fields).

NOTE Consider a scenario where you have saved a view in a Project, Idea, Custom Investment, and Custom Objects then your administrator secures some of the fields. If you do not have access to the secured fields and open the saved view, a message appears and Clarity displays an unsaved view.

Impact and Exemptions
This topic describes all the exemptions and impacts when you apply field-level security in Ideas, Projects, or Custom Investment Items.
- Attribute Exceptions
- Non-Impacted Areas
- Third-Party Integration

Attribute Exceptions
The following attributes are exceptions where field level security cannot be implemented:
- Custom Investment Object:
- Name
- ID
- Name
- Start Date
- Finish Date
- Blueprint Active ID
- Custom Master Object
- Name
- ID
- Blueprint Active ID
- Custom Sub Object
- Name
- ID
- Idea Object:
- Subject
- ID
- Start Date
- Finish Date
- Blueprint Active ID
- Financial(Cost/Budget) Plan Object:
- Name
- Code
- Start Period
- End Period
- Grouping Attributes
- Plan of Record
- Period Type
- Financial(Benefit) Plan Object:
- Name
- Code
- Start Period
- End Period
- Plan of Record
- Period Type
- Project Object:
- Name
- Investment ID
- Start
- End
- Blueprint Active ID
- Resource
- Full Name
- Resource ID
- Blueprint Active ID
- Is Staffed
- Is Team
- Primary Role
- Is Role
- Risk/Issue/Change
- ID
- Name
- Include In Status Reporting
- Status Report
- Overall Status
- Report Date
- Report Status
- Project Name
- Attachment
- Team
- TSV Attributes
- To-Do Object
- Name
- ID
Non-Impacted Areas
The following areas are not impacted if you implement field-level security:

Clarity - 16.4.1 1903
- Classic PPM UI
- Studio
- Objects
- Views
- Portlet Pages (Including secure sub-pages)
- Portlets
- Queries and Data Providers
- Reports and Jobs
- Audit Trail
- Open Work Bench (OWB)
- Microsoft Project (MSP)
- XML Open Gateway (XOG)
- GEL Script that do not call REST APIs
- Processes
- Data Warehouse and HDP


Third-Party Integration
The following integrations are impacted if you implement field-level security:
- Rally - Field-level security is applicable and can be implemented with Rally. If you have access to secure attributes, you can pass the attributes and their value to Rally.
- GEL Script calling REST APIs - Any integration should have access to the attributes either view or edit so that the REST APIs can communicate with the third party application or software.
NOTE For any third-party integrations, the integration user should have access to relevant secured attributes. In case of any failures, please contact the Administrator to find the details in the log files.
Secure Attributes for Edit Access only
Prior to this release, securing an attribute for editing purposes required administrators to create and manage an access group, explicitly specifying it for View Access. With the Clarity 16.1.3 release, the Enhanced Field Level Security (FLS) infrastructure has been enhanced to secure attributes for editing purposes without restricting them for View Access.


Create New Labels

Create New Labels for Stock and Custom Attributes in Clarity
You can use the Attributes grid in Clarity to create or edit labels for stock and custom attributes. This functionality allows you to use labels relevant to your organization and make sense to your employees versus using generic Clarity labels. These labels are only applicable in Clarity and do not impact Classic PPM. Suppose you change your language to any of the six supported languages (French, German, Spanish, Brazilian Portuguese, Italian, Japanese). In that case, you can enter the label in that language and use it in Clarity.


NOTE To update a label for a target language, ensure that the Account Settings associated with your username are set to the same language. IMPORTANT Some key points to remember are:
- Supported Objects on Attributes Grid: Labels can only be provided for objects that are supported on the
attributes grid. The simplest way to validate supported objects is to add an Object filter and view the list of available objects.
- Custom Labels for Specific Investment Types: You can set a unique label for specific Investment objects, such as Projects, Ideas, Custom Investments, or Teams. This label will override any label defined on the common 'Investment' object for that field.
- Clearing Labels: To remove a label from all associated investment object types, clear it from the common 'Investment' object. This will ensure the label is removed from other objects that inherited it.
- Default Label Inheritance: If the label fields are left blank for a specific investment type, and a label is set on the common 'Investment' object, that label will be applied to all investment types once the list of attributes is refreshed. Example of Label Inheritance: When a label is set on the common 'Investment' object (Label: Investment Manager), it is inherited by other investment objects (like Ideas and Custom Investment - Business Case), unless a specific label is defined for those individual types (like Project and Team Investment).
NOTICE Clarity will not apply the new labels to the following scenarios:
- When you create a cost plan in the Financials and Financial Plans Modules, the grouping attribute will not
display the changed labels.
- When using Filter parameters on the Project Tiles and "My Tasks" pages.
- When viewing attribute labels on the cross-object task grid.
- When viewing the Conversation Notification Modal.
- When viewing the Work Progress and Work Stage attributes on Custom Investment Types.
- When viewing the Integration Field Mappings and the Lookup Mapping popover. Follow these steps: 1. Navigate to Administration and click Attributes. 2. Use the column picker to add the Label field to the grid. 3. Enter or update the label for the relevant attributes.

Create Tooltips
Create Tooltips for Stock and Custom Attributes in You can use the Attributes grid to define a tooltip for attributes in Clarity. This functionality allows you to provide additional information about attributes to your users. Any attribute with a tooltip will have an information icon displayed next to it. The tooltip will be available in the grid, Details panel, and Properties module. These tooltips are only applicable in Clarity and do not impact Classic PPM. Suppose you change your language to any of the six supported languages (French, German, Spanish, Brazilian Portuguese, Italian, Japanese). In that case, you can enter the tooltip in that language and use it in Clarity.
IMPORTANT Some key points to remember are:
- You can only provide tooltips for objects that are supported on the attributes grid. The simplest way to
validate the objects supported on this grid is to add an Object filter and view the list of available objects.
- If an attribute is associated with an abstract investment object, you cannot change its value in inherited
objects. For example, you can update the tooltip for Actual Cost in the Financials object and not on the Project object.
- The Tooltip will allow a maximum of 512 characters Follow these steps: 1. Navigate to Administration and click Attributes. 2. Use the column picker to add the Tooltip field to the grid. 3. Enter the tooltips for the relevant fields.
Configure the 'Display Type' Attribute
You can use the Attributes grid to configure how attributes such as Risk Score and Priority are displayed in Clarity. Risk Score and Priority are examples of attributes that have display mappings defined in Classic PPM. You can add the Display Type attribute to the Attributes grid and select from the following values:
- Value
- Range Description
- Range Description and Value Your selection will determine how these attributes are visible in grids, timelines, canvases, and the Properties module.
NOTE Some key points to remember are:
- You can configure Range Description to display based on the end user's language setting.
- Range Description will be displayed when you use the Export to CSV and PDF functionalities.
- Status Report Canvas widgets have been enhanced to support this capability.
- The "Display Type" field can only be changed for inherited attributes on the abstract object.
- For attributes in the Properties and Details panel and Display Type=Range Description, the attribute will
display both Range Description and Value because of a limitation in our attribute widget.
- If the attribute does not have Display Mappings defined in Studio, the Display Type will be read-only on the
Attributes grid.
- Board and Hierarchy Tree Fields will not display Range Description.
- Boolean attributes are not supported to display Range Description.
Investment Parent Mapping
Administrators can restrict allowable Investment Types as a Parent at an Investment Type level for Projects, Ideas, and Custom Investments. This gives the Administrators more control over the formal Investment hierarchy, and they will be able to define allowed Investment Types as Parent for each Investment Type. In addition, administrators will also be able to restrict an Investment Type from having any Parent.

By default, the Parent attribute displays all Investment Types. Adding an Investment Type here allows you to restrict the Investment Types that display in the Parent attribute to only the Parent Types selected. Leaving the Allowed Parent Types blank prevents assigning a parent to investments of that type.
NOTE Some key points to remember are:
- Project, Idea, and Custom Investment Type filters using the Parent attribute will display Investment instances
based on the allowed parent restrictions.
- Hierarchy Investment and Roadmap Item filter using the Parent attribute will display all Investment instances
regardless of defined restrictions.


Define Parent Mappings


Administrators can restrict allowed Parent Types for Investments as follows:
1. Log into Clarity. 2. Click Administration and select Attributes. 3. Click the Add Investment Type button. 4. Under the Investment Type column, select the investment type from the drop-down. This is a required field. 5. Under the Allowed Parent Types column, select the allowed parent type(s) for the selected investment from the drop-
down.
- None is selected by default. It implies that there are no allowable parents for this Investment Type.
- This is a Multi-select list where more than one Investment Types can be selected.
- You can only select parents for Investments as specified in the Allowed Parent Types column for this Investment
Type. 6. You can update this data in either of the columns. 7. You can delete a parent mapping by hovering on the required row and selecting the delete icon displayed on the right.

NOTE Some key points to remember are:
- You cannot select a single investment type for multiple rows. An Error will display if you try to add more than
one row for an Investment Type.
- Users will only see instances of allowed parents for that Investment Type in their selection list for Parent
- Pre-existing data is not evaluated for restrictions. Administrators will be required to update any pre-existing
Investment data that contains Parents that are no longer allowed
- The following areas are supported:
- Projects: Parent
- Ideas: Parent
- Custom Investment Types: Parent
- Hierarchies
- Common Investment: Parent
- Does not apply to Hierarchical: Parent
- Roadmap Items
- Linked To is populated: Parent is restricted based on the linked instance's Investment Type
- Linked To is not populated: Parent is not restricted
- If a Roadmap Item did not previously have a Linked To value but it had a Parent value, once you add a
Linked To value, it will update the Parent with the linked to item's Parent, even if that Parent is blank
Working with the Actions Framework
You can use the Actions framework to exercise administrative control over the following end-user actions in Clarity.
- The objects and users that can leverage the CSV Import capability in Clarity: The Enabled flag allows administrators to
change the availability of the CSV Import action without changing the access configuration. You can also leverage the Secure and Access fields to limit access to the action based on Clarity Groups.
- The users who can share saved views with users, groups, and everyone: The Views--Share with People action allows end-users to share saved views to which recipients have view access. The Views--Share with Groups action allows

end-users to share saved views using Clarity Groups. The Views--Share with Everyone action allows you to share views with everyone.
- The custom investments that support the Convert from Idea capability.
- The Share with Users and Share with Groups actions for Staffing Scenarios You can perform the following actions in this workspace:
- Configure Objects Leveraging the CSV Import Capability
- Share Views With All Clarity Users
- Share Staffing Scenarios with Users and Groups
- Enable Custom Investment Types for Idea Conversion
- Disable Classic PPM for Users Configure Objects Leveraging the CSV Import Capability You can use the Actions framework to configure the objects and users that will use the CSV Import capability in Clarity. The Enabled flag allows administrators to change the availability of the CSV Import action without changing the access configuration. You can also use the Secure and Access fields to limit the action's access based on Clarity Groups.
NOTE Some key points to remember are:
- Action Framework will NOT control the Import from CSV action under Roadmaps.
- All Import from CSV actions will be enabled by default for new customers.
- If you upgrade to this release, Clarity will check the "Enable Generic CSV Import" flag under System Options.
If the value is True, all Imports from CSV actions will be enabled. If it's false, all Imports from CSV actions will be disabled. Follow these steps: 1. Log into Clarity and click Administration. 2. Click the Actions tab to open the Actions workspace. 3. Use the Enabled column to select the objects that will support the CSV Import capability. 4. Leverage the Secure and Access fields to limit access to the action based on Clarity Groups. Review Secure Field Level Access to learn about using the Secure and Access fields.


Share Views With All Clarity Users


The Action framework helps administrators decide who can share views with all users in Clarity. The Views--Share with People action allows end-users to share saved views to which recipients have view access. The Views--Share with Groups action allows end-users to share saved views using Clarity Groups. The Views--Share with Everyone action allows you to share views with everyone.
NOTE Some key points to remember are:
- If any view actions are enabled for end-users, they can only share saved views where they are the owner.
These saved views are available under the "Mine" tab.
- If the view is shared with Groups and/or People, you see the groups and people icons with a corresponding
badge count.
- When users hover on the "Mine" tab, the Share button always appears. When they click the "Share" button,
a sharing modal appears, and end users can share views based on the configuration specified in the Actions workspace.
- In previous releases, Clarity used the term "Private View" to represent a view that was not shared. Clarity no longer uses Private View. Instead, it displays a message stating that the view is not shared.
- You can configure which Clarity groups can share saved views with users by leveraging the Enabled for Sharing flag. This flag is cleared by default, and you must select it for the relevant groups.

Follow these steps: 1. Log into Clarity and click Administration. 2. Click the Actions tab to open the Actions workspace. 3. Use the Enabled column to enable the Views--Share with People, Views--Share with Groups, and Views--Share
with Everyone capabilities. 4. Leverage the Secure and Access fields to limit access to the action based on Clarity Groups. Review Secure Field
Level Access to learn about using the Secure and Access fields. Share Staffing Scenarios with Users and Groups The Action framework helps administrators decide who can share Staffing scenarios in Clarity. The Staffing Scenarios-- Share with People action allows end-users to share saved scenarios with recipients, and the Staffing Scenarios--Share with Groups action allows end-users to share Staffing Scenarios using Clarity Groups. 1. Log into Clarity and click Administration. 2. Click the Actions tab to open the Actions workspace. 3. Use the Enabled column to enable the Staffing Scenarios--Share with People, and Staffing Scenarios--Share with
Groups capabilities. 4. Leverage the Secure and Access fields to limit access to the action based on Clarity Groups. Review Secure Field
Level Access to learn about using the Secure and Access fields. Enable Custom Investment Types for Idea Conversion Administrators can manage which Custom Investment Types are available for idea conversion by enabling and securing the `Convert from Idea' action through the Actions framework in Administration. 1. Log into Clarity and click Administration. 2. Click the Actions tab to open the Actions workspace. 3. Use the Enabled column associated with the custom investment type to turn on the Idea to Custom Investment
conversion capability for the same. 4. Leverage the Secure and Access fields to limit access to the action based on Clarity Groups. Review Secure Field
Level Access to learn about using the Secure and Access fields.


Disable Classic PPM for Users


Administrators can now control which users can access Classic PPM by using the Actions workspace. You can disable the Classic PPM Access action to restrict all Clarity users from accessing Classic PPM, including administrators. You can also secure this action and grant access to specific groups in Clarity. Broadcom recommends creating a new "Classic UI Access" group, adding your administrators to it, and securing the action to this new group. 1. Log in to Clarity and click Administration. 2. Click the Actions tab to open the Actions workspace. 3. Clear the Enabled column associated with the Classic PPM Access action. 4. Leverage the Secure and Access fields to limit access to the action based on Clarity Groups. Review Secure Field
Level Access to learn about using the Secure and Access fields. NOTE Some key points to remember are:
- Users who do not belong to the group that is granted access to Classic PPM will get a 401: Access Denied error.

IMPORTANT The PPM Gantt launched from Clarity will be blocked if the user is not part of the access group.
- Users will not have access to Classic PPM using:
- Classic PPM link in the Clarity menu
- Bookmarks directly to Classic PPM
- Classic PPM Action Items with links to Classic PPM
- The Classic PPM login screen will always be displayed. However, if a user is not part of the group granted access to the "Classic PPM Access" action, then they will get the 401 error after successfully logging into Clarity.
- This action does not control access to Clarity System Administration (CSA).
- The "Force Change Password" flow has been updated to always take the user to the Clarity "Forgot Password" flow. This means if a user's password has expired or been reset by an administrator, they will need a valid email address to get the password change link. Administrators can now control which users can access Classic PPM by using the Actions workspace. You can disable the Classic PPM Access action to restrict all Clarity users from accessing Classic PPM, including administrators. {"URL":["/admin/actions"],"heroDescriptionIdentifier":"IPCE_Description","customCards":[{"id":"CSV","title":"Configure Objects Leveraging the CSV Import Capability","type":"use","languages":["en-us"]},{"id":"SharingViews","title":"Share Views With All Clarity Users","type":"use","languages":["en-us"]},{"id":"StaffingScenarios","title":"Share Staffing Scenarios with Users and Groups","type":"use","languages":["en-us"]},{"title":"Enablement Videos","type":"videos","URL":["https:// youtu.be/n1fx_zj4a38","https://youtu.be/ANM_fQJKczk","https://youtu.be/JVjTCkNleUQ"],"languages":["en-us"]}, {"id":"4181833","title":"Recommended Courses","type":"courses","languages":["en-us"]}]}
Creating Queries to View Data in Transactional Schema (Beta)

Clarity now includes the Queries capability in the Administration workspace. This feature allows administrators to create simple queries to view data within the Transactional Schema. Some key use cases that administrators can accomplish by using the Queries workspace are:
- Quickly examine raw transactional data to identify discrepancies.
- Validate data reported in user issues.
- Use the Customizations Overview system query to compare customizations between environments. You can query
both environments and determine if there are differences.
- Extract specific data combinations not available in standard reports.
- Pull historical data for analysis in external tools (Excel, BI platforms). The Queries workspace enables administrators to:
- Create, view, edit, copy, and delete user-defined queries in the Administration workspace.
- Search and explore tables and fields from the Transactional Schema using an intuitive Schema Browser.
- Validate query syntax with meaningful feedback before execution.
- Preview partial or complete result sets and export data to CSV format.
- Add language-specific labels for query attributes that can be translated via the Language Translator.
- Apply string, number, and date filters; save personalized grid views per query, per user.
- Access the pre-built "Customizations Overview" system query to view all custom content and database objects. This page covers the following topics:
- Accessing the Queries Workspace
- Create a User-Defined Query
- Key Points to Remember
- Scenario: Identifying Users Who Are Not Using the Default Unit of Measurement (UoM) Accessing the Queries Workspace You need to be assigned the Administration - Queries - Navigate access right to access the Queries workspace. After you have access to the workspace, follow these steps: 1. Click Administration, Queries to open the queries workspace. 2. Click the Customizations Overview query to open it and view its details. It is modeled after the existing Jaspersoft
Report that provides a list of custom content created in a customer's environment. This output helps the Administrator identify configuration elements to compare with other environments. Create a User-Defined Query

Let's consider a scenario where you want a list of users who are not using the default Unit of Measure (UoM) general setting. You can perform the following steps to create this query.
1. Click New Query and populate the Query Name and Description fields. 2. Navigate to the Query tab and search the Tables, Views, and Functions in the schema browser to create the relevant
query. NOTE Some key points to remember here are:
- The Clarity Query tool currently supports String, Number, and Date data types.
- Queries are strictly read-only and must start with one of the following keywords (comments are allowed):
- SELECT statements
- WITH statements (Common Table Expressions)
- VALUES statements
- SQL comments (/* */)
- The Queries feature accesses only the Transactional Schema (not the Data Warehouse). Query results return number, date, and string field types. Binary fields, time-varying fields (BLOB), CLOB fields, calculated fields, and aggregated fields can be included in queries but will not display data in the output unless accessed through Clarity-generated database views.
- Use /* Comments */ -- Instead of using the two dashes ( -- ) for comments. It's recommended to use the ( /* */ ) syntax, especially when adding comments at the beginning or end of the query. Otherwise, the query validator may not find the query valid. 3. Click Validate to validate the query. After the query is successfully validated, Clarity will create a list of attributes. 4. Click Attributes and add associated labels to help other stakeholders associate meaning with the attribute. The labels are personalized for the specific user and the specific query. Other users will have to set up their own labels. NOTE If you change the query and revalidate it, the labels and column layout will get reset. 5. Click Preview to preview the query results. Click columns to add relevant attributes to the grid. The layout is personalized per query per user. You can use the filter capability to identify specific records. 6. Click Export to CSV to export your results and share them.
IMPORTANT Some best practices to follow are:
- Building queries can be an iterative process. Sometimes you may want to go back and slightly alter the query before you get the output you desire. Therefore, it is recommended to wait until you are satisfied that the query will not change before you add your personal labels. Personal labels are not required, and you may not really need to use them if your query gives a meaningful alias.
- If you have created a query that you feel is working well and have already added personal labels, it is recommended to `Copy' this query if you want to alter any part of the query. When a query is copied, it copies the query, letting you alter it and work with it, since the new query won't have any personal Attribute labels or Preview layout configurations. Doing this preserves the original personalized configuration and lets you return to the original query, select the labels from the Attributes grid, and copy them into the Attributes grid of the new, copied query if there are similar fields.
- Due to the implementation, which provides a single security access right to fully manage all queries, develop best practices among the few users granted access to look for and manage the queries they have created. Ensure you use the `Copy' action to do your own query analysis.
Key Points to Remember
Ensure you remember the following points while using the Queries workspace:
- Be mindful to grant security access to targeted administrator users. This feature is not meant for the typical user.
- This feature is intended for troubleshooting and is not meant to add extra UI actions. It provides basic functionality for
pulling data for further analysis on the page or for export to CSV.
- Quick Search, Group By, and the ability to create and manage Saved Views are not available.
- The Query Name and Description can be localized by users who display the page in a different language. Making
Localization entries for the Query Name and Description is visible to other users accessing the query in the associated language. If you update the name & description of the query in English, other languages will not be automatically updated. They will still retain the initial query name and description entered when the query was created.
- Each user can enter personal attribute labels in their own language.
- Making any changes in the `Queries' tab and revalidating the query will remove any personalization for the Attribute Labels and the Preview Layout for all users with a personalized configuration.
- Clarity will not copy any personalizations when you copy a query.
- Use /* Comments */ -- Instead of using the two dashes ( -- ) for comments. It's recommended to use the ( /* */ ) syntax, especially when adding comments at the beginning or end of the query. Otherwise, the query validator may not find the query valid.
IMPORTANT Use the following query to track AI consumption in Clarity:
SELECT gh.OBJECT_CODE, gl.created_by, u.full_name, gh.ATTRIBUTE_CODE, gh.STATUS_CODE, gl.PROMPT_TOKEN_COUNT, gl.RESPONSE_TOKEN_COUNT, gl.project, gl.model, gl.integration_url, gl.created_date FROM gen_content_history gh JOIN gen_contents_logs gl ON gl.GEN_HISTORY_ID = gh.id JOIN cmn_sec_users u ON u.id = gl.created_by ORDER BY gl.created_date DESC
Scenario: Identifying Users Who Are Not Using the Default Unit of Measurement (UoM) Derrick, a Resource Manager, wants to understand why different users on his team are seeing availability values displayed in different units--some in hours, some in FTE, and others in percent. He suspects that several team members may have personalized their Unit of Measurement (UoM) setting instead of using the system default.
To verify this, Derrick needs to:
- Identify users who have changed their Unit of Measurement (UoM) from the default setting.
- Determine each user's personalized UoM value.
- Know how to efficiently retrieve this information. Derrick can use the Queries module in Clarity to run a predefined query that returns each user's personalized Unit of Measurement (UoM) value. If needed, he can also run the same query directly against the Clarity database. Queries are available for all supported database platforms, allowing him to quickly identify which users are using customized UoM settings and view each user's personalized value.


The following queries are provided for each supported database platform: PostgreSQL
WITH u AS ( SELECT p.user_id, LOWER(TRIM(p.personalizations::json->>'units')) AS units FROM cmn_ui_personalizations p WHERE p.component = 'general'
) SELECT p.user_id,
r.unique_name AS resource_code, r.full_name, p.last_updated_date, CASE
u.units WHEN 'pct' THEN '% Availability' WHEN 'hours' THEN 'Hours' WHEN 'fte' THEN 'FTE' WHEN 'days' THEN 'Days' ELSE u.units END AS units FROM cmn_ui_personalizations p JOIN srm_resources r ON r.user_id = p.user_id JOIN u ON u.user_id = p.user_id WHERE p.component = 'general' AND u.units IN ('hours', 'fte', 'days', 'pct');
Oracle
SELECT p.user_id, r.unique_name AS resource_code, r.full_name, p.last_updated_date, CASE WHEN u.units = 'pct' THEN '% Availability' WHEN u.units = 'hours' THEN 'Hours' WHEN u.units = 'fte' THEN 'FTE' WHEN u.units = 'days' THEN 'Days' ELSE u.units END AS units
FROM cmn_ui_personalizations p JOIN srm_resources r ON r.user_id = p.user_id CROSS APPLY (
SELECT LOWER( TRIM( JSON_VALUE( p.personalizations, '$.units' RETURNING VARCHAR2(20) NULL ON ERROR NULL ON EMPTY )

Clarity - 16.4.1 1920


) ) AS units FROM dual )u WHERE p.component = 'general' AND u.units IN ('hours', 'fte', 'days', 'pct');
Microsoft SQL
SELECT p.user_id, r.unique_name AS resource_code, r.full_name, p.last_updated_date, CASE WHEN u.units = 'pct' THEN '% Availability' WHEN u.units = 'hours' THEN 'Hours' WHEN u.units = 'fte' THEN 'FTE' WHEN u.units = 'days' THEN 'Days' ELSE u.units END AS units
FROM cmn_ui_personalizations p JOIN srm_resources r ON r.user_id = p.user_id CROSS APPLY (
SELECT LOWER(TRIM(JSON_VALUE(p.personalizations, '$.units'))) AS units ) AS u WHERE p.component = 'general'
AND u.units IN ('hours', 'fte', 'days', 'pct');


Support for a Read-Only Database User
Clarity supports a special read-only database user used internally by the application to run queries in the Queries workspace. This user has only SELECT rights in the database and is never used to log into the Clarity UI. The goal is to reduce risk when Clarity runs technical queries by ensuring that those database calls do not modify data.
Key Points about the read-only use:
- Clarity will add the readOnlyUserName and readOnlyUserPassword parameters to the Properties.xml file.
- It is not a Clarity "application user" and does not appear on the Clarity login screen.
- It cannot perform insert, update, delete, or schemachanging operations, helping protect production data integrity and
reduce risk.
- If administrators want to create a user, they can use the admin db create-ppm-readonly-user command.
When administrators use the Queries workspace, Clarity requests a read-only connection from its connection layer. If the readonly user is configured:
- Clarity connects to the database using the readonly account.
- The operation runs with SELECTonly rights, preventing accidental updates or deletes at the DB level.
This capability has been recently introduced.
Before you begin using the feature, ensure that you have the following permissions:
- Be mindful to grant security access to targeted administrator users. This feature is not meant for the typical user.
- This feature is intended for troubleshooting and is not meant to add extra UI actions. It provides basic functionality for
pulling data for further analysis on the page or for export to CSV.
- Quick Search, Group By, and the ability to create and manage Saved Views are not available.

Audit
Administrators can access audit information for `audit enabled' objects directly from Clarity to comply with auditor requests for detailed audit reports. The Audit grid column names used in Clarity are different from those in Classic. You can filter for all API-enabled Objects but are limited to those that are audit enabled through Classic. The use of the term `record' in Clarity is consistent with the term used for `disable editing record' used in Blueprint Business Rules. The Clarity and Classic audit grid column names are given below.

Clarity Audit Name
Name Object ID Record Parent Changed Date Attribute Attribute ID Changed By Operation Old Value New Value Record ID, Parent ID, Grandparent, and Grandparent ID

Object Name Object * Name Parent Name Date Attribute Attribute Code Changed By Operation Old Value New Value Not visible in Classic

Classic Audit Name

You will get the following key insights from the Audit grid separated into Attributes and Per-Period Metrics tabs. Note that audit metric data is displayed based on your unit of measure setting in Clarity. This ensures consistency in data presentation, making it easier to interpret and analyze audit metrics as per your standard units of measurement.
- Timestamp Display: The Audit grids include a Timestamp within the Changed Date attribute, displaying the time based on the Time Zone of your computing device. This feature is supported in both the Audit module and the Audit tile under Clarity > Administration > Audit.
NOTE
- The displayed time is NOT based upon the Classic setting configured by the end user under Classic > Home > Account Settings >Time Zone.
- The Timestamp within the Changed Date attribute will be available in the grid only.
- Number and Money Decimal Display Options: In Clarity 16.1.1 and later releases, the Audit grids support number
and money decimal display options that you configured within View Options. These settings are applicable in both the Audit module and the Audit tile under Clarity > Administration > Audit.
- Auditing Per-Period Metric Changes: In Clarity 16.1.1 and later releases, the audit capabilities include tracking of per-period metric changes, displaying old and new allocation values for individual resources. You can configure and


save views with period type and relevant start and end periods to track these changes. This enhancement provides detailed visibility into resource allocation changes over specified periods. From View options in the Audit grid, select an old and a new value from the per-period metric section and then select the period type and relevant start and end periods. From the Column panel, select an old and a new value from within the Totals section. Save this configuration in a View that you can use again because other audit views may not include per-period metrics.
NOTE You can see the refresh button when viewing data with groups and after changing a filter condition. It allows you to update total metrics in real-time, which is especially useful when you alter filter conditions while viewing grouped data. This ensures that the information displayed is always current and reflective of the latest inputs.
- Per-Period Assignment Data: In Clarity 16.2.0 and later releases, the audit capabilities include per-period audit data for the Assignment Object. This enables you to view detailed metrics for specific time periods, covering Estimated Time to Complete (ETC), ETC Cost, Actuals (actual work completed), and Actual Cost (associated costs).
- Auditing User Groups: In Clarity 16.1.1 and later releases, the audit grid tracks changes when resources are added or removed from user groups, including changes made through XOG. To enable this feature, ensure that the User Groups attribute is enabled for audit on the User object in Classic. Once enabled, updates to User Groups performed in Clarity are displayed in the Classic Global Audit area and the Audit tile under Clarity > Administration.
- Auditing Assigned Resources: In Clarity 16.1.1 and later releases, the audit grid tracks changes when resources are added or removed from Task assignments, including changes made through XOG. To enable this feature, ensure that, in Classic, you enable the Assigned Resources attribute for audit on the Task object. Once enabled, updates to Task Assigned Resources performed in Clarity will be displayed in the Classic Global Audit area and the Audit module under Clarity > Administration.
- Important: Updates to User Groups (User object) and Assigned Resources (Task Object) attributes performed in Classic PPM will not be visible in the Clarity Audit modules or the Audit tile in Clarity Administration. However, updates to these attributes performed in Clarity will be displayed in the Audit Trail of Classic PPM, the Clarity Audit modules, and the Audit Tile in Clarity Administration.
- Auditing Impersonating As Another User Changes: In Clarity 16.2.2 and later releases, the audit grid tracks the full name of the admin who invoked the API to make a change as another user. This data is captured in the Impersonated By column. The Changed By column captures the name of the user who was impersonated. This section contains the following topics:
- Verify Prerequisites
- Managing Records By Using the Grid Layout
- View Audit Details
Verify Prerequisites Before you begin using the feature, ensure that you have the following permissions:
- You need to have Administration - Audit - Navigate to access the Audit tile.
- Once within Clarity > Administration > Audit, you will also require the "Audit Trail
- Access" right to view audit details
Managing Records By Using the Grid Layout The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.
REMEMBER To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Details Panel
- Saved Views
- Filters
View Audit Details
You can view the Clarity audit information for audit-enabled objects.
Follow these steps:
1. In the main menu, click Administration > Audit. The Audit page with the audit data is displayed. 2. If your administrator has enabled the Separate Audit into 'Attributes' and 'Per Period Metrics' Tabs toggle in
Administration > Feature Toggles, the audit information will be displayed in two tabs: Attributes and Per-Period Metrics. Disabling the feature reverts audit data to a single view, similar to previous releases.
- Attributes: This tab displays audit records for all non-TSV attributes
- Per-Period Metrics: This tab exclusively displays audit records for TSV (Time-Scaled Value) attributes. 3. You can leverage the configurable grid toolset utilized throughout Clarity:
- Column configuration
- Fly-out configuration
- Saved views
- Robust filtering
- Group By
- Export to CSV
IMPORTANT Some key points to remember are:
- The Audit page includes a Standard View with (1) filter for `Changed Date' to improve the overall user experience. You may have very large amounts of audit data, which will require a longer than expected period to return a result set when NO filters are used. You cannot remove this filter. However, you can modify the values.
- Changed Date: = 10 Days Before To Current Date
- Below is the field formatting for the Timesheet Object when audited specifically to the Record field. undefined
- Grid View: The Timesheet audit for the Record field displays as <Resource Full Name>: <Start Period><End Period>
- Details Flyout: The Timesheet audit for the Record field displays as <Resource Full Name>: <Start Period>-<End Period>
- Start Period and End Period honor Global Date setting options.
- You must close and reopen the Details Flyout to apply Global Date setting options to the Record field.
- Behavior is different when comparing how the Parent Object information is presented in Classic PPM
and Clarity. In Clarity, when you filter to display Sub-Object details (for a Risk as an example), the Parent information is populated. However, in Classic, you must select the Parent Object (such as Project), and the sub-object (or Risk) audit information is included.
- Resource Attribute: When enabling the Resource attribute on the Assignment object for Audit, ensure the change, insert, and delete options are configured in Classic. When the proper Audit configuration in place, you can see the Insert and Delete operations indicating a resource has been replaced on an assignment.
- Timestamp in Changed Date Attribute:
- As of Clarity release 16.1.1, Audit grids include a timestamp in the Changed Date attribute.
- The displayed time reflects the time zone of your browser's computing device, not the time zone settings in Classic > Home > Account Settings.
- This timestamp feature is available in both the Audit module and the Audit tile under Clarity > Administration > Audit.
- Incomplete Results with Changed Date Filter:
- Using the Changed Date attribute as a filter might lead to incomplete result sets.
- You might see a different number of records than expected. For example, filtering between July 29 and July 31, 2023, might include records with a changed date of August 1, 2023, due to time zone differences.
- Multiple Units of Measure in Audit Grids:
- Unlike typical grids where each line item uses the same unit of measure, Audit grids might contain multiple units, like Capacity (Work Effort Unit), Capital Cost (TSV Money type), and Capital Cost Number (TSV Number type).
- When using Group by with per-period metrics across different units of measure, the totals may not reflect correctly due to the system attempting to aggregate different types of data.
- Handling Group by and Filtering:
- Group By: For grouping audit records, the Attribute column has been unavailable since the Clarity 16.2.0 release. It is now recommended to use the Attribute ID column to perform the Group by function. This change is geared towards providing a more consistent and logical grouping mechanism in audit reporting.
- Filtering: The Attribute filter has been removed from both the Audit module and Administration > Audit sections since the Clarity 16.2.0 release. Users are encouraged to use the Attribute ID filter as a more effective alternative for narrowing down audit results.
- Team Allocation Audit Metrics and Unit of Measure:
- Team Allocation Audit metrics do not adhere to the User's Settings for Unit of Measure in the record Old Value and New Value columns.
- These metrics will be displayed in seconds, regardless of the user's settings. Administrators can access audit information for `audit enabled' objects directly from Clarity to comply with auditor requests for detailed audit reports. The Audit grid column names used in the Clarity are different from those in Classic. You can filter for all API-enabled Objects but are limited to those that are audit enabled through Classic. The use of the term `record' in the Clarity is consistent with the term used for `disable editing record' used in Blueprint Business Rules. Below are Clarity and Classic audit grid column names. The Clarity 16.2.3 release enhances the Audit capabilities by separating audit data into two distinct tabs: Attributes and Per-Period Metrics. This separation improves performance and usability by organizing audit records based on data type. The new Attributes tab now displays audit records for all non-TSV attributes and the Per-Period Metrics tab exclusively displays audit records for TSV (Time-Scaled Value) attributes. Before you begin using the feature, ensure that you have the following permissions:
- You need to have Administration - Audit - Navigate to access the Audit tile.
- Once within Clarity > Administration > Audit, you will also require the "Audit Trail
- Access" right to view audit details {"URL":["/admin/audit/attributes","/admin/audit/tsv"],"heroDescriptionIdentifier":"HeroID","customCards": [{"id":"IPCE_New","title":"Enhancements","type":"use","languages":["en-us"]},{"title":"Enablement Video","type":"videos","URL":["https://youtu.be/uMJ2CNey_ls"],"languages":["en-us"]}, {"id":"4181833","title":"Recommended Courses","type":"courses","languages":["en-us"]}]}
Skills
Administrators can create, view, and manage a comprehensive skills inventory for resources, roles, and teams. This inventory helps align the right skills with the appropriate resources, facilitating better project staffing decisions and enhancing resource management.
This section contains the following topics:
- Verify Prerequisites
- Managing Records By Using the Grid Layout
- View Skills


Verify Prerequisites
Before you begin using the feature, ensure that you have the following permissions:
- You need to have Administration - Skills - Navigate to access the Skills tile.
Managing Records By Using the Grid Layout
The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.
REMEMBER To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Details Panel
- Saved Views
- Filters
View Skills
Follow these steps:
1. In the main menu, click Administration > Skills. The Skills page is displayed. 2. Review the Skills grid with columns for Name, ID, Description, Active Status, Last Updated By, and Starred. 3. Use the Search bar to find specific skills in the inventory. 4. Manage the skills inventory directly from the grid:
- To add a new skill, click the + button on the left side.
- To update an existing skill, click on the skill's Name to open and edit its details.
- To delete a skill, select the checkbox next to the skill and click Delete.
The Clarity 16.2.3 release introduces an automated color assignment for Skills badges, enhancing the visual organization of skills data across the application. A new Resources: Automatically assign colors to Skills badge feature toggle controls the display of the Skills MVL attribute in grids as colored badges or as a semi-colon separated list. This feature toggle is available in Clarity > Administration > Feature Toggles to enable or disable this functionality, with the default setting being Off.


CSV Import for Skills (Beta)
Customers use Microsoft Excel to manipulate data before entering it into Clarity. You can now use the Generic CSV Import ability to import data into investments in Clarity. Some key points to remember are:
- The CSV file's data must be correctly formatted. Ensure your CSV file includes all the mandatory fields associated with
the Custom Master Object.
- Set the CSV Export format to Export/Import in the General tab of the Settings panel.
- You can import a maximum of 250 records.
- Clarity will not import Business rules on CSV import.
- The import action will fail if you have duplicate lookups in the CSV file. The following data types are supported:
- Number
- Percentage
- Strings
- Dates (Fixed)
- Boolean
- Lookups
- Static Dynamic (SVL/MVL)
- Money (Single currency Clarity System)
- TSV A new Export/Import option has been introduced in Clarity. When you are exporting a CSV in Clarity to import it back again, you need to select this option. Clarity will export the necessary header rows to allow you to import the CSV file into Clarity. When you have to export or import CSV files with dynamic lookups:
- Clarity will only export records that are displayed on the grid.
- End-users can copy and paste lookup labels and IDs from other records to change dynamic lookup values. Some key points you need to remember are:
NOTE
- Business Rules are not enforced during CSV Import.
- Clarity does not compare the values in the CSV import file with the values on the Clarity server before
importing them. Hence, the Last Updated Date and Last Updated By fields for every imported record.
- If you are auto-numbering IDs, leave the ID value blank in the CSV Import file to create a record
- entering
the value of the ID will update the record.
- When using CSV Import, the user must use the same language/locale as the exported CSV file, or incorrect
import results may occur.
- The following data types are not supported: Rich Text/Long String, OBS, Picklist, Attachment, URL,
Parameterized, and Static Dependent Lookups.
- When you Import Updates to MVLs, it will overwrite the existing values. Follow these steps: 1. Click Avatar, Settings, Generic, and select Export/Import. 2. Click any investment in Clarity. 3. Configure the grid with the attributes you want to be populated when you insert. 4. Filter grid for records to use as a template for creating new records 5. Select Actions and click Export to CSV. 6. Update the CSV file with the relevant information. 7. Click Import CSV and select the relevant CSV file. 8. Click Open to complete the import process. 9. You will get an Import Successful message.


Introducing Support for Lookups and OBS


When you export a CSV file from a workspace that includes OBS data associated with an entity, Clarity will not include the forward slash in the CSV export. However, the CSV Import will support the OBS value with or without the forward slash. Enter the full path of the OBS value in your CSV Import file. The Lookup ID format has been enhanced to support curly braces instead of parentheses. Hence, you will now need to enter Berks, Paul {pberks} instead of Berks, Paul (pberks) while adding lookup values to the CSV Import file.
NOTE Some key points to remember are:
- You can now enter the lookup label value for dynamic lookups in the CSV Import file. In previous versions,
you had to enter both the lookup label value and the associated lookup ID. You can continue to use the lookup ID format in case there are duplicate label names. In summary, the following formats are now supported:
- Lookup Label Value
- Lookup Label Value {lookup ID)
- On investments, the "Default Resource OBS Unit" is technically a dynamic lookup, but it is displayed like an OBS. If you Export to CSV and then Import from CSV, the import from this attribute will fail. Users will need to remove path information to only show the base label.

Importing TSV's by using CSV Files Clarity now enables customers to add Time Scaled Values (TSVs) into CSV files and import them into Clarity. You can navigate to the Custom Objects grid and click Export to CSV to download the CSV file. The file includes three-row headers that allow customers to input TSV information.
- First Row - TSV period name
- Second Row - TSV API attribute name
- Third row - TSV attribute name When you upload the CSV file, Clarity uses the first row to determine the period (week/month/quarter/years) and then processes the period value. The CSV import is based on the language and locale of the end users.
NOTE Some key points to remember are:
- TSV Number, Money, and Percentage data types are supported for the CSV import capability.
- TSV Total values are not supported in CSV Import and are ignored during import.
- If Clarity detects duplicate Fiscal Period Names on the default entity, it will abort the CSV Import. You must fix
the duplicate period names to use CSV Import capability.
- TSV Money attributes only support in single currency Clarity instances.
- Clarity will use the system currency defined in Financial Management while processing TSV Money attributes
during the CSV Import.
- You do not need to provide contiguous values in the TSV Import file.
- Clarity allows users to specify TSV Period labels in the language specified in a user's language setting.
Clarity uses the translation specified in the Entity Fiscal Time Periods to match the user's language to the translation.
- You cannot update any attributes using the "Active Currencies" lookup definition via CSV import.
- CSV Import Files does not support TSVs with different period types within the same file.
- Custom master objects only support calendar TSV, but Clarity leverages the fiscal TSV configuration from the default entity when using CSV Import for TSVs.
- Business Rules on custom master objects are not enforced during CSV Import.
Introducing Asynchronous Synchronization

The CSV Import process is now asynchronous to ensure that importing a significant volume of data does not compromise Clarity's performance. You will see a notification indicating the outcome of your import action. You can click the notification to get more details about the outcome of the import action.
- Notifications with a green checkmark mean your CSV Import was successful with no warning or error messages.
- Notifications with a yellow diamond mean your CSV Import records were imported, but one or more of your attribute
columns were not imported and would need to be updated manually. For example, URL datatypes and Starred attributes are not supported for CSV Import.
- Notifications with a red triangle mean some or all of your records in your CSV import had errors and did not import into Clarity. You can download the error CSV file with the records that did not get imported and the reasons why they did not import.
- Notifications with a red blocked symbol mean the system had trouble processing the CSV file, and the import was aborted. An example of this error is that your CSV import file does not have the correct header row at the top of the file or the file has incorrect delimiters separating attribute values.
NOTE Some key points to remember are:
- CSV Import Notifications will display faster when the PPM Broker is enabled.
- Email notifications will not be sent out for CSV Import.
- If an attribute has field level security (FLS) and it is read-only for the user, the CSV Import for that record will
not get imported.
Enhancing CSV Import to Support Business Rules
This CSV Import capability has now been enhanced to support Business Rules defined by Clarity administrators. This enhancement is crucial because administrators define Business Rules based on organizational mandates. Hence, the ability to implement these rules while importing investment data by using CSV files is vital.
NOTE Some key points to remember are:
- Clarity only executes Business rules if you use CSV files to update existing records. Clarity will not enforce business if you use the CSV Import capability to create new records.
- Clarity supports validating the View Page and Attribute Update business rules while importing data from CSV files.
- The View Page type business rule executes every time a user views a page. This rule type supports only one complex condition.
- The Attribute Update business rule executes every time you change the value of a selected attribute.
- If Clarity does not import certain records due to business rule violations, you can download the CSV file from the Notifications area and review the error messages.
- Clarity will ignore Required Rules while importing data from CSV files.
Let's consider an example where a business rule has been defined to ensure that when the Work Status is Active, the Manager attribute is set to read-only. Hence, when you try to import a record where the Works Status changes from Requested to Active, the Manager attribute will automatically become a read-only attribute.
Clarity will compare the attribute value in the system with the CSV file. It will only update attributes if the values differ between CSV File and Clarity. Hence, Clarity will not update a false audit trail by updating a record with the same values.
To learn more about business rules, see Working with Business Rules.
Action Items
- Verify Prerequisites
- View Action Items
- Create Action Items
- Update Action Items
- Delete Action Items
- Responding to Action Items through Email
- Managing Records By Using the Grid Layout The Action Items tile in Adminstration serves as a Library allows you to create Action Items in Clarity without creating them in Classic using processes. Administrators can use the Action Items library to create, update, and delete Action Items that be triggered through Business Rules.
Verify Prerequisites Before you begin using the feature, ensure that you have the following permissions:
- You need to have Administration - Action Items - Navigate to access the Action Items tile.
NOTE In addition to those actions, you can also carry out the following actions within Grid:
- Edit Data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to
personalize each grid.
- Use the Bulk Delete capability in the Common Grid to delete multiple records. View Action Items A part from the Actions Items tile, you can view and respond to Action Items in the Library as follows:
- Action Items Module: Users can view Action Items under the Master Object.
- Page Canvas: Assignees can view and respond in the Action Items Table Widget.
- My Workspace: Assignees can view and respond in the Action Items tab.
- Mobile: Assignees can view and respond to their Action Items.
- Email: Assignees can view and respond to their Action Items via email. See Responding to Action Items through Email.

NOTE Note: When viewing Action Items created in the new Action Item Library, the Triggered By Attribute will be the User who updated Clarity and triggered the Business Rule to be true.
Follow these steps:
1. In the main menu, click Administration > Action Items. The Action Items page is displayed. 2. You can leverage the configurable grid toolset utilized throughout Clarity:
- Column configuration
- Fly-out configuration
- Saved views
- Robust filtering
- Group By
- Export to CSV
Create Action Items
Follow these steps:
1. In the main menu, click Administration > Action Items. The Action Items page is displayed. 2. Click New Action Item. A Create New Action Item window is displayed. 3. At Step 1 of 3:
a. Populate all required attributes before the Next button is enabled. b. Target Object can be updated until Action Item is saved. Once saved, Target Object can no longer be updated. c. Add Attribute buttons are available for variable support in Subject and Message. Following conditions apply:
a. This Button is dependent on Target Object and will appear once Target Object is selected. b. You can select the same variable more than once. c. You must clear out old variable Attributes when changing Target Object. d. Click Next to continue to Step 2. 4. At Step 2 of 3: a. Recipients: a. Select resource attributes from the Resource Attribute drop-down. The Resource Attribute MVL list includes all
Target Object attributes associated to a lookup using the Resource object in its lookup. b. Select required access groups from the Access Group drop-down. The Access Group MVL list includes the
security access groups in Clarity. c. Select resources to be included from the Resource drop-down. The Resource MVL list includes a list of
Resources in Clarity. d. You can successfully save an Action Item without any Recipients. e. Object Roles and System Roles are not supported like processes do. b. Actions: a. Select the actions from the Add Actions drop-down. The Actions Attribute MVL list includes the same lookup
used for Process Action Items for that object. Actions are required and cannot be updated once the Action Item is saved c. Click Next to continue to Step 3. 5. At Step 3 of 3: a. Decision list includes the Action values selected in Step 2. b. Available values for Decision response are "Any Recipients", "All Recipients", and "# of Recipients". c. For each decision, you can select the Require comment checkbox to make user comments mandatory when responding to that decision in Clarity.
- Use this option when you want users to provide a reason for specific outcomes such as Rejected or Approved with Conditions.
- When Require comment is selected, the Add Comment dialog appears automatically in Clarity, and the Save button is disabled until a comment is entered.
- If Require comment is cleared, users can still add optional comments. d. Both Decision response and Recipient criteria for closure must be populated to Save the Action Item. The Save
button will be hidden until then. e. You can create multiple Decision options for Action Item closure. The Add Decision Option button will not display
unless both Decision response and Recipient criteria for closure are populated. f. Once you have defined required decision response and recipient criteria, click Save. You can now see a new
action item entry in the grid.
NOTE Some key points to remember are:
- You must require a new global security right for access: Administration - Action Items - Navigate .
- The admin user (admin) can be added as an Action Item Recipient through a security access group.
However, admin will not receive the Action Item.
- The following Master Objects are supported:
- Investments (Projects, Ideas, and CITs)
- Custom Master Objects
- No Sub-Object support
- Agreement
- Action Items in this Library are triggered via Blueprint Business Rules. They do not use and are not dependent on processes.
- You cannot view the Action Items in this Library in Classic.
- Users cannot create Action Items directly in the Grid (+) .
- You must create closure criteria for every possible Action defined in the Action Item.
- The manager is not currently available in the Resource Attribute Recipient list.
- You can save a variable in the Action Item Subject and Message that does not belong to the Target Object if you change the Target Object multiple times prior to saving the Action Item and do not clear out the variable.
- If you deactivate a lookup action value in Classic after the closure conditions are added to an Action Item, the lookup value from the actions attribute is removed including any closure condition based on the deactivated lookup.
- When an Action Item is deleted that has no in-flight instances and is associated to an active Business Rule, you will get a message stating that a Business Rule is deactivated. However, it is not specified which Business Rules has been deactivated.
- The closure criteria and conditions cannot be viewed or updated in the Grid or Details Flyout.
Update Action Items
Follow these steps:
1. In the main menu, click Administration > Action Items. The Action Items page is displayed. 2. In the Grid, click on the Action Item Name to edit values in Step 1 through Step 3 using the update modal.
Alternatively, you can right-click the Action Item Name and select Edit from the menu to update values in Step 1 through Step 3 using the update modal.
IMPORTANT Some key points to remember are:
- You can bult edit action items by selecting multiple rows and then clicking theEdit button.
- Target Object and Action attributes cannot be updated.
- Action Items to Assignees are created when the Business Rule is triggered and will reflect what is defined
in the Action Item at that time.
- Any update to the Action Item Name, Description, Subject, Priority, or Message attributes will only be
captured for in-flight Action Items if an Action Item was not sent to any Assignees yet.
- Any update to Action Item Recipients will only be captured for in-flight Action Items if an Action Item
was not sent to any Assignees yet.
- Closed Action Items will not reflect any updates.
- Action Item Decisions criteria for closure is evaluated when an Action Item response is received. The criteria that exists at that time will be executed.
- Any update to Action Item closure criteria will be captured for in-flight Action Items if an Action Item
was not closed yet.
- Closed Action Items will not reflect any updates.
Delete Action Items
Follow these steps:
1. In the main menu, click Administration > Action Items. The Action Items page is displayed. 2. In the Grid, select the checkbox for a required Action Item Name and then click Delete. Alternatively, you can right-
click the Action Item Name and select Delete Row from the menu. IMPORTANT Some key points to remember are:
- You can bult delete action items by selecting multiple rows and then clicking theDelete button.
- When deleting an Action Item related to an enabled Business Rule:
- Confirmation popup will display where you can continue or cancel deletion operation.
- No in-flight Action Item instances: Once you confirm delete, the Action Item will be deleted and associated Business Rules will be deactivated.
- With in-flight Action Item instances: Once you confirm delete, an error message will display and deletion will be prevented until all in-flight Action Items are closed.
Responding to Action Items through Email
As an end user, you can respond to Action Items directly from your email without logging into Clarity. This feature streamlines your workflow and lets you quickly take action on important tasks and approvals from your inbox.
Setting Up an Action Item
When Clarity generates an Action Item, you will receive an email notification prompting you to take action. This typically happens when a project manager or another user assigns a task that requires your approval or input.
Follow these steps:
1. Check your inbox for an email from Clarity. The subject line will describe the task or approval request (for example, Approval Request for Project X).
2. Open the email, providing detailed information about the task or approval request. You will see action buttons at the bottom of the email (for example, Approve or Reject).
3. Review the task details and decide which action to take.
Responding to an Action Item through Email

Follow these steps: 1. Click the appropriate action button in the email (for example, Approve, Reject, or another relevant action). 2. A new response email will automatically be created with the necessary information encoded. You do not need to
modify this email. 3. Click Send to submit your response.
a. If you click Approve, Clarity will update the Action Item to reflect your approval. b. If you click Reject, Clarity will update the Action Item to reflect your rejection. 4. Once your response is processed, the status of the Action Item will update in Clarity as though you had responded directly within the platform.
Managing Records By Using the Grid Layout The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to
create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.
REMEMBER To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Details Panel
- Saved Views
- Filters {"URL":["/admin/actionItems"],"heroDescriptionIdentifier":"PreRequisite","customCards": [{"id":"viewauditdetails","title":"View Action Items","type":"use","languages":["en-us"]},{"title":"Enablement Videos","type":"videos","URL":["https://youtu.be/CWxASJedDQQ"],"languages":["en-us"]}, {"id":"4181833","title":"Recommended Courses","type":"courses","languages":["en-us"]}]}
Notifications
You can use Notifications to create, update, and delete `General' Notifications from Clarity that are triggered by Business Rules. You can set your preferences in 'Notifications' under Setting for 'General' type in Clarity. General Notifications support the following objects:
- Investments (Projects, Ideas, and CITs)
- Custom Master Objects
- Tasks
- Staff
- Risks
- Issues
- Change Request
- Status Report
- Agreements
- Custom Sub-Objects
- Objective
- Page


NOTE Clarity's General Notification settings and the Notifications in Classic on the `Notifications Tab under Account Settings' will be in sync regardless of where you make changes. The Notification Settings available in Clarity that will match with Classic are: General (Alert, Email, and SMS). There are two types of `General' Notifications:`Simple' and `Complex'. This section contains the following topics:
- Access Rights
- Managing Records By Using the Grid Layout
- View Notifications
- Create General Notifications


Access Rights Ensure that the following access rights are enabled to access the Notifications tile:
- Administration - Notifications
- Navigate

Managing Records By Using the Grid Layout
The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.
REMEMBER To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Details Panel
- Saved Views
- Filters
NOTE In addition to those actions, you can also carry out the following actions within Grid:
- Edit Data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- Use the Bulk Delete capability in the Common Grid to delete multiple records.

View Notifications You can view Notifications for the supported objects.


Follow these steps: 1. In the main menu, click Administration > Notifications. The Notifications page is displayed. You can see all the
saved notifications definitions in the Notifications grid. 2. You can `Edit' a `Notification' by clicking on the `Notification' name and navigating through definition screens to edit the
definition 3. You can leverage the configurable grid toolset utilized throughout Clarity:
- Column configuration
- Fly-out configuration
- Saved views
- Robust filtering
- Group By
- Export to CSV 4. You can define Grid using `Columns' panel. 5. You can manage `Views' on Notifications Grid. 6. You can `Delete' Notifications definitions. 7. Right-click on the `Notification' Row and select `Delete Row' in the menu to delete. Single or Bulk deleting is available when checkbox is checked using the Delete button. A Confirmation popup will display where you can continue or cancel deletion operation. Key Points to Remember Some key points to remember are:
- General Notifications defined in Clarity are Supported.
- Target Object cannot be changed once the `Notification Definition' is completed. We can edit other parameters of
`Notifications Definition' but cannot edit `Target Object' after creation of `Notification Definition'.
- Recipients list does not support `Read only and MVL' Resource/User type, lookup attributes in `Simple' General
Notification.
- Recipients list does not support `MVL' Resource/User type, lookup attributes in `Complex' General Notification.
- Localization is supported in `General' Notification.
- General Notifications can be deleted by using `Purge Notifications' Job.
- We are planning to hide `Agile Central Investment' from Target Objects list. We suggest not to create notifications using
`Agile Central Investment' as Target Object.
- General Notifications does not support Field Level Security. We display `Secured' icon while displaying the attribute as
part of `Subject', `Message', `Recipients' and `Target Attribute' list.


Create General Notifications


You can create two types of General Notifications:Simple and Complex. Follow these steps: 1. In the main menu, click Administration > Notifications. The Notifications page is displayed. You can see all the
saved notifications definitions in the Notifications grid. 2. Click New Notification. The Create New Notification - Step 1 of 2 screen is displayed. 3. Click Next after entering data in all required fields. The Create New Notification - Step 2 of 2' screen is displayed

NOTE
- All required attributes must be populated before the `Next' button is enabled
- `Target Object' can be updated until 'General Notification' is saved
- `Priority' can be set for a `General Notification'
- Once saved, `Target Object' can no longer be updated 4. At Create New Notification - Step 2 of 2' screen, follow these steps to create a Simple Notification. For a complex notification, skip this step to perform the next. a. By default `Simple' is selected as `Condition Type' b. Select `Resource Attribute (recipient)' c. `Save' button is enabled after you select the `Resource Attribute (recipient)' d. You can click `Back' to go to `Create New Notification - Step 1 of 2' and modify if required. e. You can click `Save' to save the Notification definition' f. For `Simple' notification both `Target' and `Resource Attribute(recipient)' are the same. For example: a. The user selects `Task Owner' as `Recipient'. b. Notification is sent to `Ian Arpel' when the `Task Owner' attribute value for a Task `Planning Phase Gate Complete' is changed to `Ian Arpel' c. User can view the notification by clicking the `Bell' icon. d. User can view the notification on a pop-up by clicking on the `Bell' notification. 5. At the Create New Notification - Step 2 of 3' screen, follow these steps to create a complex notification. a. You can select `Complex' as `Condition Type'. b. Select `Target Attribute' to set `Send Condition'. c. `Target Attribute' displays the list of the attributes associated with `Target Object' selected in Step 1 of `Notification Definition'. d. Select the attribute on which the condition is being set. For example: Status. e. Set the condition on the attribute to send the Notification to Recipients Ex: `Is Equal To' as `Started' f. You can set the condition on multiple values based on the `Target Attribute' selected. For example: You can set the condition as `Status' - `Is Equal To'
- `Started' OR `Not Started' g. Click Next. The Create New Notification - Step 3 of 3' screen is displayed. 6. At the `Create New Notification - Step 3 of 3' screen, a. You can select `Recipients' to whom the Notification will be sent. b. You can select `Recipient' from ` Resource Attribute' List. c. `Resource Attribute' list displays the Resources from both `Parent' and `Target' Object if the `Target Object' is a `Sub-Object' d. You can select multiple values from the `Resource Attribute' list. e. You can select a value or multiple values from `Access Group' list. Access Group MVL list includes the security access groups in Clarity. f. You can select one or multiple resources from `Resource' list. Resource MVL list includes a list of Resources in Clarity. g. You can successfully save a `General' Notification without any Recipients. h. You can click `Save' to save the Complex Notification definition. a. For example, User has built a `Complex' notification for `Task' with `Status' - `Is Equal To'
- `Started' OR `Not Started' and `Recipients', `Access Groups' and `Resources'. A Notification will be sent to `Recipients', `Access Groups' and `Resources'. when a Task status is changed to `Started' or `Not Started'


System Settings
You can use the System Settings page to customize Clarity to reflect your organization's branding by updating the header logo, the login logo, theme colors, custom display message, and default homepage.
You can customize the background color and the foreground colors to reflect your organization's branding. You can also use it to differentiate between various environments, such as development, QA, and production. You can also select the light or dark color scheme for menu icons, text, and login logo.
You can specify a message that every user in your organization would see whenever they log into Clarity. You can also define the homepage based on the User Access groups.
This section contains the following topics:
- Customize Header and Logo
- Customize Theme Colors
- Specify Login Message
- Define User Homepage
- Configure Main Navigation Menu

Customize Header and Logo
You can customize the header logo and login logo for Clarity. You can use this opportunity to customize Clarity to reflect your organization's branding. You can also use it to differentiate between various environments such as development, QA, and production.
Follow these steps:
1. In Clarity, click Administration, and then click System Settings. 2. In the Branding tab, Under Header Logo, click Upload New Logo to upload the new header logo. This logo will appear
on a white background color. Hence, we recommend a dark color logo. The height of your logo should be 24 pixels and it can have a maximum width of 280 pixels. 3. Under Login Logo, click Upload New Logo to upload the new login logo. This logo will appear on a dark background color. We recommend a light color logo. 4. You can also specify the tooltip in the IMAGE TOOLTIP field.
NOTE
Some key points to remember when you update logos are:
- Your change will be visible immediately after you update the logo. If you want to try different options, please use the test or development instances of Clarity.
- You can upload PNG or transparent GIF formats. Clarity will honor all the restrictions imposed by Classic PPM on file types and file size. For more information about allowed file types and size, see Set Document Management Options.
- Clarity includes extra logo space so that you can use it to add classification text to the logo itself.
- If you try to use images, which do not follow these recommendations, you will get an API error.

Customize Theme Colors
You can customize the background color and the foreground colors to reflect your organization's branding. You can also use it to differentiate between various environments, such as development, QA, and production. You can also select the light or dark color scheme for menu icons, text, and login logo.


Clarity supports the following CSS color formats:
- HEX
- RGB
- HSL Follow these steps: 1. In Clarity, click Administration, and then click System Settings. 2. Under Theme colors, select the relevant background color. The background color will appear on the left navigation and
login screen. 3. Under Theme colors, select the relevant foreground color. The foreground color applies to icons and text in the left
navigation menu.
Specify Login Message You can specify a message that every user in your organization would see whenever they log into Clarity. Follow these steps: 1. In Clarity, click Administration, and then click System Settings. 2. Select the Login Message tab. 3. Select the Start and the End dates for the message. 4. In the Type drop-down list, ensure Toast is selected. 5. In the Severity drop-down list, select the relevant option based on the content of your message. This setting controls
the icon and the color of your message. 6. Enter the message text in the body text box. 7. Select the duration for which you want the message to be displayed on the user's screen.
ATTENTION
- The Login message is displayed for:
- Basic authentication login
- SSO authentication login
- Navigating from Classic PPM to Clarity
- Clarity does not support multiple languages for the login message.


Define User Homepage


With the Clarity 16.0.2 release, as an admin, you can configure home pages in Clarity for Clarity security access groups. You can also configure a home page by default if a user's access security group does not have a home page defined. If a security access group has more than one home page defined, the home page navigation will take the user to the first home page specified for their security group. You can:
- Define a new home page entry based on User Access groups. When defining a page for the homepage, any of the following can be selected:
- Any item available in the menu link.
- Pages defined under Clarity Pages.
- Define Clarity menu item or a page from pages.
- Select one or multiple user groups.
- Change the order of the homepage definition by dragging them up or down.
- Delete any defined homepage setting using the Delete icon.
- Edit the Homepage definition by clicking on the Page or the Access Groups field.
IMPORTANT An Administrator with access to Clarity System Settings can define a Homepage where users can land on a custom page defined in the system.
Note: If the Administrator does not have rights to custom pages, the Administrator can't see or configure custom pages in System Settings.
Follow these steps:
1. In Clarity, click Administration, and then click System Settings. 2. Select the Homepage tab. 3. Select the Add Page button. A new row entry with a search option appears in the table. 4. In the Page drop-down list, select a module that you want to set as a homepage. 5. In the Access Groups drop-down list, select one or more access groups for whom you want to set the homepage. 6. Drag-and-drop rows within the table to change the priority.

NOTE Some key points to remember are:
- Any administrator with access to the Clarity system settings page can access the homepage setting page.
- The default home page is set to current functionality where the user will land on the first page in the
menu. This default setting cannot be removed.
- For Custom Investment Types, admins can only define the homepage to the main Investments page and not
to a specific investment. Admins can only define the homepage to the main Custom Master Object page and not to a specific custom object inside.
- Homepage definition is not saved till both the Page and Access Group drop-downs are populated.
- When defining the homepage to a page instance within Pages, the user will land on the first tab within that page.
- Once the homepage is defined then the user will always land on that page when they log into Clarity.
- This will work for basic and SSO-based login.
- The homepage setting does not take effect till the user re-logins to Clarity.
- You can click on the Home link to navigate to the defined homepage at any time.
- User belonging to multiple user groups will get the homepage set to the page defined first on the list (top to bottom).
- If a user is not part of any User Group, the user will be navigated to the default page.
- Each homepage can have one or multiple user groups defined.
- When the homepage is set based on the user group, the respective application is launched when the user logs in or when the Home button is clicked.
- Once a page is set as a homepage then it will not be available in the selection list.
- A maximum of 100-page definitions can be created for homepages. However, in this release, you can only see 25 pages. This limit will be increased in future releases.
- Link to Classic UI will not be available in the homepage definition.
Configure Main Navigation Menu From the Clarity 16.2.0 and higher releases, you can easily customize the main menu to better suit your organizational needs. This guide provides simple steps for administrators to add, remove, and manage menu items, including various custom elements like investments and page instances. By learning to activate or deactivate these items, update their icons, and change their order, you can enhance the user experience. This customization is key to ensuring that the most important tools and features are readily accessible for users, streamlining their navigation within the application.
- Configure the Main Menu in Clarity and Tiles in Workspaces
- Setting New Menu Items as Homepage
- Change Icons of Main Menu Navigation from Icon Library
- Reorder and Remove Menu Items
- Create a Custom Label for the Stock Menu Links with Localization


Configure the Main Menu in Clarity and Tiles in Workspaces


With this release, you can now modify the main menu in a manner that best fits your work practices. That is, you now have the ability to add and remove custom menu items tailored to your role and tasks. Each of these items can be added to the main menu once and will remain accessible in their usual Workspaces.

This includes configuration options for:
- Custom Investments
- Team Investments
- Custom Master Objects
- Page Instances Setting New Menu Items as Homepage Administrators now have the option to configure new menu items as the homepage. This new feature enables administrators to designate the most relevant page as the homepage based on the different roles and groups within the organization. By doing so, users are immediately directed to the most useful and pertinent information tailored to their specific needs. Note that the menu item must be activated before the new homepage setting is operational for users. This allows for configurations to be made without disrupting the current user experience until the changes are ready to be implemented.

Change Icons of Main Menu Navigation from Icon Library You now have the new icon library that provides a refreshed set of visuals for your main menu navigation, making it easier to find and switch to the pages you need. This icon selection process is made user-friendly through the icon library interface, which provides visual previews and file names to facilitate the correct icon choice.


Here are the Icons and their associated names:

Icon

attachment

Name

bug bullseye chart-area chart-line

Icon

briefcase

Name

building cabinet chart-bar chart-pie


Icon

check

Name

clipboard

clipboard-connector cloud connector dashboard-graph database display file globe

Icon

check-list

Name


clipboard-check

clock compass cube dashboard-grid dependency dollars folder hammer


Icon

health

hub

Name

lightbulb

link map page-alarms page-logs page-user report shape-diamond shape-rocket

Icon

hierarchy

Name


key

lightning-bolt

location money page-inspect page-service plans shape-circle shape-flag shape-square


Icon

shape-star

Name

teams

todos

view-tiles

Icon

shape-triangle

Name


ticket

user-edit

NOTE
Some of the key points to remember are:
- You can select new icons from a pre-populated icon library to better represent the functions of your main menu items.
- Note that while custom icons cannot be added to the library, you can reuse any of the existing icons.
- When selecting icons, administrators will see the file names of images, which are not localized, to ensure you
choose the correct visual representation for your menu items.
Reorder and Remove Menu Items
Your main menu can now reflect the way you work, with the ability to reorder and remove items as needed. You can prioritize the menu based on your daily activities, moving the most used items to the forefront for quick access. The removal of items is equally straightforward, offering you the opportunity to maintain a menu that contains only those items that are essential to your work, thus maintaining a focused and uncluttered workspace.
- Menu items can now be dragged and dropped into new positions, allowing you to prioritize the tools and pages you access most frequently.
- Home and Classic PPM menu items are fixed but the Administration Menu Item can be reordered.
- You can also remove any custom menu items that you have added, keeping your menu streamlined and relevant.


Create a Custom Label for the Stock Menu Links with Localization


Administrators can now use the System Settings workspace to customize the labels of the left navigation menu. This will allow them to customize their implementation and give end users a more personalized experience. Administrators can also localize the custom labels for the navigation menu so that users can read the labels in their preferred language.
NOTE Some key points to remember are:
- If the label column is blank, Clarity uses the stock page name.
- The change will apply to any stock or custom non-locked left navigation menu link.
- The administrator can change their language setting to create language-specific labels.
- The Home, Administration, and Classic PPM menu links are locked.
Administrators can now use the System Settings workspace to customize the labels of the left navigation menu. This allows them to customize their implementation and give end users a more personalized experience. Administrators can also localize the custom labels for the navigation menu so that users can read the labels in their preferred language.

Configure Custom Investment Types
The new Investment Types feature provides a way for administrators to create and configure custom investment objects with the same capabilities that they already enjoy using for projects and other non-project investments. However, investment types are not constrained by the traditional boundaries associated with traditional project management.
NOTE Related Topics:
- Clarity: Manage Custom Investment Financials
- Clarity: Create and Edit Custom Investments
This section contains the following topics:
- Prerequisites
- Create an Investment Type
- Access Rights Name Updated When You Rename Custom Investment Types
- Configure Automatic Numbering for Investment IDs
- Create a Custom Subobject for a Custom Investment Type in Studio
- Prerequisite
- Manage Simple Budgets for Custom Investments
- Calculate Financial Metrics
- Data Warehouse Reporting Capabilities for Your Custom Investments
Prerequisites
This feature provides configurable investment functionality for business users in Clarity with a solid administrative foundation inside the Classic PPM Studio object architecture.
- Administrators can create investment types using the Classic PPM Studio interface. In each Clarity environment, create no more than 100 of your own custom investment types.
- Business users can create new instances of these investments in Clarity.
- New investment type objects inherit their attributes from abstract objects through object extensions.
- Investment types leverage the same auto-assignment of access rights that is currently available on non-project
investment objects.
- The appropriate access rights are required to perform the steps described in this article. To create investment type
objects, no new access right is required. If a user already had rights to create a custom object, that user can create an investment type object.
- You cannot set the API Attribute ID (commonly known as the API alias) for new investment types. By default, the application sets your new investment objects to API-enabled and provides a unique API Alias. The application uses the cust prefix and the plural form of the name or abbreviated name of your object ID as the API alias. It also applies additional logic to satisfy uniqueness constraints. For example, if you create a custom investment named demand , the API alias is custDemands . If you create an object named Business Case , the API Attribute ID might be custBcs . If another user attempted to create their Business Case object, the system might give it an API alias of custBs . If API alias generation fails due to naming conflicts, change the object name.

Create an Investment Type
You already know that you can manage blueprints, templates, and projects. Classic PPM also provides pre-defined nonproject investment objects (NPIOs) such as products and applications. However, your organization might want even greater control when managing its own investment types. You want to see your own investment types in the Clarity.
As an administrator, you can create investment types in Classic PPM and manage new instances of those types in Clarity. Investments types represent instances of a unique new abstract master object in Classic PPM. In Clarity, they open the door to an expanded array of possibilities for managing new products, proposals, coordinated work items, and other new business development opportunities.
NOTE
When you create a custom investment type in Classic PPM, a custom investment type blueprint is automatically generated in Clarity. The blueprint uses the same name as the custom investment type. Use the custom investment type blueprints to configure the layouts and details for your investment screens so they accurately reflect your business requirements. See Clarity: Configure Blueprints for Projects and Investments for more information.
Follow these steps:
1. In Classic PPM, click Administration, Studio, Objects and click New. 2. Define your custom investment type:
a. In the Object Name field, enter your investment type. For example, create a custom investment type named Product Demo or Business Case.
b. In the Object Extension field, select Investment Extension. c. You assign a unique object ID. When you save, the system assigns a unique read-only value in the API Attribute
ID field. d. To include the custom investment in hierarchies, select the INCLUDE IN HIERARCHIES button. e. Complete the other required and optional fields. f. Click Save. 3. Verify that the following access rights are enabled for the specific user:
- <investment_type> - Create
- <investment_type> - Edit All
- <investment_type> - Navigate
- <investment_type> - View All
- <investment_type> - XOG Access
- <custom_investment_type>- Cost Plan - Edit All
- <custom_investment_type>- Cost Plan - View All
- <custom_investment_type>- Cost Plan - Edit
- <custom_investment_type>- Cost Plan - View The navigation access right (for example, Product Demo - Navigate) is auto-assigned to the user who created the new investment type. The application also assigns the global create right and instance rights for editing to that user. 4. In Classic PPM, assign the new navigation rights to users individually through instance-level or global-level access rights:
- Users with the <investment_type>- Navigate global access right can navigate to the Investments page in Clarity.
- The custom investment type tiles are shown or hidden based on the system-generated navigation right for each type of custom investment.
- Only the users with the specific navigate right for a custom investment type (for example, Product Demo - Navigate) can view and open the list of those investments.

TIP Investments types are defined in Classic PPM ; however, they are designed for use in Clarity. For this reason, they are hidden in certain places in the Classic PPM user interface.
- Investment type objects are also not available for selection as a master object for another subobject.
- The investment, parent investment, investment roll-up data, and investment object data providers do not
show any of your custom investment types or object instances. Access Rights Name Updated When You Rename Custom Investment Types
When you change the name of Custom Investments, you can use the Push Object Captions icon to update OBS access rights, Instance Rights, Global Rights, and Sub-object master object names to reflect the updated Custom Investment name.
IMPORTANT Some of the key points you need to remember are:
- When you push the object name change, it does not update the "Blueprint" name in Clarity.
- The Object ID and Attribute ID do not get updated when you change the name of the Custom Investment.

Configure Automatic Numbering for Investment IDs
You can configure the application to assign a unique investment identifier for each instance of your new investment type. Without auto-numbering, users are required to enter a unique value in the Investment ID column when they add a new investment.
1. In Classic PPM, click Administration, Studio, Objects. 2. Open your custom investment object. 3. Click Attributes. 4. Select Investment ID. 5. Click Auto-Numbering. 6. Select the Auto-Numbered checkbox. 7. Click Save and Return.
Create a Custom Subobject for a Custom Investment Type in Studio
You can now create custom subobjects for Custom Investment and API Enable it so that users with appropriate access rights can utilize the modules to further define the custom investment and attributes as fields to help determine the financial breakdown in the custom investment.
Prerequisite
Ensure that a custom investment object is created and published before you create a subobject.
As an administrator, you can grant instance access rights to specific Custom Investment Types instead of Global access rights to all Custom Investment Types. The rights are separated to ensure you can offer specific capabilities as needed. For example, do not grant editing financial field edit rights if your users do not edit financial fields.
Example:
Consider a scenario where you create a custom investment CustInv.
Follow these steps:
1. Log in to Classic PPM UI. 2. Navigate to Administration, Studio, Objects. 3. Click New. The Create Object Definition page opens. 4. Specify the following details:
- Object Name
- Object ID 5. Select Subobject. 6. In the Master Object field, type CustInv and select the CustInv master object that is populated. 7. Select the API Enabled checkbox. The API ID is auto-generated. 8. Click Save. 9. The object is created and will be available as a module in Blueprints in Clarity.
NOTE Instance-level access rights do not work on custom sub-objects in Clarity. Global-level access rights are currently supported in Clarity.
Configure a Custom Investment Type Blueprint to include a Custom Subobject Module Follow these steps:
1. Log in to Clarity. 2. Navigate to Administration, Blueprints. 3. Select a Custom Investment blueprint, make a copy, right-click, and select Set as Default.

4. Navigate to Modules. The new subobject is listed in the MODULES panel. 5. Click EDIT, drag and drop the new subobject module, and click PUBLISH. The subobject is now added to the Custom
Investment. NOTE After making any changes to a blueprint log out and log in to Clarity for the changes to appear.
Use the Custom Subobject in a Custom Investment Type Follow these steps: 1. Log in to Clarity. 2. Navigate to Investments, select a Custom Investment, and navigate to a custom investment. The new subobject is
now available as a module. 3. Click the new subobject, click the +(plus) icon to add attributes.
TIP The grid layout properties are applicable to the attributes. For more information about common grid see Common Features: Manage Your Clarity Data in Grids in Getting Started with Clarity Manage Simple Budgets for Custom Investments Clarity Release 15.5.1 introduces the series of simple budget financial fields on both the grid and the Details page (configurable as a blueprint module). For information about how to manage cost plan and cost plan details in Custom Investment see Manage Custom Investment Financials TIP Planned Start and Finish dates are always equal to the Start and Finish dates of the parent custom investment. The custom investment financial fields enforce the same rules as the Classic PPM Financial Summary page for projects and other types of investments:


Clarity - 16.4.1 1963


Financial Field: Planned Operating Cost Planned Cost Planned Cost Start Planned Cost Finish Planned Benefit Planned Benefit Start
Planned Benefit Finish
Planned ROI
Planned Payback Period
Planned NPV
Plannned MIRR
Planned Operating % Planned Capital % Is system value for Total Cost of Capital
Override value for Total Cost of Capital
Initial Investment
Is system value for Reinvestment Rate

Rules:
Editable if you have edit permissions.
Read-only attribute; the sum of Planned Capital and Planned Operating Cost
Read-only attribute; automatically set to the same value as the Start date of the investment instance.
Read-only attribute; automatically set to the same value as the Finish date of the investment instance.
Editable if you have edit permissions.
On create of the custom investment, the value will be set to TODAY. Users with edit permission can change this field as long as the value fall within the Start and Finish dates
On create of the custom investment, the value will be set to TODAY. Users with edit permission can change this field as long as the value fall within the Start and Finish dates
If "Calculate Financial Metrics=TRUE", the system will generate a value. If "Calculate Financial Metrics=FALSE", users with edit permission can manually update this field.
If "Calculate Financial Metrics=TRUE", the system will generate a value. If "Calculate Financial Metrics=FALSE", users with edit permission can manually update this field.
If "Calculate Financial Metrics=TRUE", the system will generate a value. If "Calculate Financial Metrics=FALSE", users with edit permission can manually update this field.
If "Calculate Financial Metrics=TRUE", the system will generate a value. If "Calculate Financial Metrics=FALSE", users with edit permission can manually update this field.
Calculated field that displays the percentage of Planned Operating Cost from the Planned Cost total.
Calculated field that displays the percentage of Planned Capital Cost from the Planned Cost total.
If TRUE, use the system-level total cost of capital for this investment type. If FALSE, use the Override value for total cost of capital value which determines the annual finance on the capital that is borrowed to fund this investment
Determines the annual finance on the capital that is borrowed to fund this investment. Impacts the Financial Metric fields if "Is system value for Total Cost of Capital=FALSE"
Defines the initial cost of the investment that is used in all financial metric calculations. If "Calculate Financial Metrics=TRUE", impact the values for Planned NPV and ROI.
If selected (TRUE), use the system-level reinvestment rate for this investment type. If clear (FALSE), use the Override Reinvestment Rate value which determines the annual interest rate that is used to reinvest positive cash flow for this investment.


Financial Field: Override Value for Reinvestment Rate
Planned Breakeven

Rules:
Determines the annual interest rate that is used to reinvest positive cash flow for this investment. Impacts the Financial Metric fields if Is system value for Reinvestment Rate is cleared (FALSE).
If Calculate Financial Metrics is selected (TRUE), the system generates a value. If Calculate Financial Metrics is clear (FALSE), users with edit rights can update this field.

Calculate Financial Metrics
- If you want the application to calculate certain financial metrics for you, leave the checkbox selected (the default).
- To manually enter your own values, add the Calculate Financial Metrics field to your current grid, and then clear the
checkbox.
NOTE
Be careful here. Any values in those fields are cleared if you select Calculate Financial Metrics.
Calculate Financial Metrics
- At left, the Calculate Financial Metrics field as an attribute of a custom investment object in Classic PPM.
- At the bottom, the Calculate Financial Metrics field has been added to the investment blueprint. For the open
investment, the field is cleared so manual entries can be made.
- At the top right, users can now manually enter values such as 5.45 (or in some locales 5,45) for Planned IRR (rounded
through View Options to 5.5%).


Access Rights
- Typically, administrators could assign rights to users by OBS unit or group. At this time, investment type rights can only
be assigned through global or instance rights.
- The feature includes create, edit, and view rights, but no separate delete right.
- The auto-rights behave the same as they do for standard non-project investment custom objects. Currency and Financials
- The investment type grid does not support multi-currency.
- Custom investments cannot have TSVs.
- You cannot track transaction entries (timesheets or vouchers) against custom investments. The transactions are only
available in the PPA_WIP table and the WIP Adjustment portlet. Reports and Jobs
- Portlets, reports, and add-in content do not display investment type information.
- No data warehouse support for attributes on investment type.
- The Delete Investments job does not delete investment type instances. (In 15.5.1, the Delete Investments job is
renamed to Delete Investments and Time Reporting Periods.)
- The Portfolio Synchronization job does not import investment type data.
- The Investment Allocation job ignores any investment type data.

Administration and Studio
- Lookups: All lookups that query investment tables do not display any investment type instance data.
- Aggregated attributes: As you cannot create subobjects for custom investment types, aggregated attributes are not
available.
- Portfolio Job: The Portfolio Synchronization job does not import investment type data.
- Content Editor: The ability to select investment types from the Content Editor is disabled.
- Data Providers: Investment types have no object data provider in Classic PPM Studio and investment type information
does not appear in the portfolio data providers. TIP Known Issue: The legacy Investment data provider from previous 13.x/14.x/15.x releases is capable of displaying data from the new investment type instances. Users who do not want this data to appear can filter out investment type data using a power filter. A fix is already in progress for this issue.
- Investment types do not support Studio actions or views. The Actions and Views tabs are hidden in Classic PPM Studio.
- The system creates a default portlet page for each new investment type, but the ability to display the default portlet page is disabled.
- You cannot use the Classic PPM Studio Menu Manager to associate an investment type link or investment type portlet page.
- You cannot create a subobject under an investment type object.
- You can enable insert and update audit trail on attributes; however, delete is not available.
- Insert and Update operations can only be viewed via the Global Audit View in Classic PPM
Resource Staffing
- Disabled the ability to staff resources to an investment type (Classic PPM and Clarity)
Data Warehouse Reporting Capabilities for Your Custom Investments When you enable your custom investment object for the data warehouse, the schema creates a matching new dimension table. If any selected attribute requires language translation, a corresponding language table will also be created in the Data Warehouse. An example showing patents as a custom investment object with a primary key appears below.
NOTE Data Warehouse for custom subobject is not supported.

Custom Investment OOTB data will be captured in the Data Warehouse alongside regular Investment data, provided the Custom Investment is selected for the Data Warehouse. Data will populate in these existing Data Warehouse tables:
- DWH_INV_INVESTMENT DWH_INV_INVESTMENT_LN
- DWH_INV_SUMMARY_FACTS
- DWH_INV_PERIOD_FACTS The following existing Data Warehouse security view will also reflect Custom Investments:
- DWH_INV_SECURITY_V
Authentication and Keys
You can use the Authentication and Keys page to allow on-premise customers to use credentials issued by an IdP that supports SAML 2.0 to log into Clarity. You can also use key-based authentication to generate a personal API key for a specific client based on a user's SSO credentials, access rights, and status settings. This section contains the following topics:
- Configuring to Support SAML 2.0
- Key-Based Authentication Configuring to Support SAML 2.0 Clarity allows on-premise customers to use the credentials issued by an IdP - that supports SAML 2.0 - and log into Clarity. Some key advantages of using SAML-based SSO login are:
- Seamless integration between networks and environments: All users can move easily between your organization's intranet and Clarity.
- Simplified password management: No need to manage user passwords separately from Clarity, because your existing user management system handles password management.
- Simplified Certificate management: Use Clarity to manage various security certificates. To learn more about SAML authentication, see On-Premise SAML Configuration.
Key-Based Authentication Key-based authentication uses a personal API key that is generated for a specific client based on a user's SSO credentials, access rights, and status settings. Key authentication eliminates the need to generate and pass credentials or tokens for every session. Use key authentication in the following scenarios:
- You want to integrate data between Clarity and other client applications. Integration architectures can allow users to
authenticate through the REST API and accomplish certain Clarity actions without going into the user interface.
- Your Clarity instance is using SSO for authentication. For example, Rally integration could make webhook calls to read Clarity project data personalized for the current user. For project managers, third-party integration could read and update resource allocation data in Clarity based on external application triggers such as other users updating a JIRA Kanban board. To learn more about key-based authentication, see REST API Authentication. Every Identity Provider that supports SAML 2.0 provides a way to share the SAML metadata with other applications. Please ask the security administrator in your organization to provide you the SAML metadata for your IdP. You can then import the SAML metadata file into Clarity. Clarity allows you to perform the following activities.
- Import SAML metadata into Clarity
- Manage security certificates
- Export service provider metadata
- Configure multiple Identity Providers To learn more about Clarity SAML Authentication, see Configuring Clarity to Support SAML 2.0. No new capabilities were introduced in this release. {"URL":["/admin/apiclients/keys","/admin/apiclients/clients","/admin/apiclients/certificates","/admin/apiclients/ samlconfigs"],"heroDescriptionIdentifier":"hero1","customCards":[{"id":"keybasedauth","title":"Configuring to Support SAML 2.0","type":"use","languages":["en-us"]},{"id":"keybasedauth1","title":"Key-Based Authentication","type":"use","languages": ["en-us"]}]}
Managing Users In Clarity
Administrators can use the Users page in Clarity to create and edit user details such as name, email ID, status, locale, and language. You can also use the User page to edit user groups associated with a user. Finally, you can use the Bulk Edit capability to edit details associated with multiple users simultaneously.

NOTE You need the "Administration
- Authorization" access right to access the Users page in Clarity. This section contains the following topics:
- Create Users in Clarity
- Managing Users in Clarity
- Managing Records By Using the Grid Layout
- View License Type and Last Login Details
- Create a Clarity User Based on SAML Request


Create Users in Clarity


When you create a user, you need to enter all the required fields necessary to create the user. The following fields have been added to the User's grid to facilitate the User Creation process.
- Allow Direct Login when SSO is Enabled
- Employment type
- Force Password Change - Always set to 1 by default.
A labor resource is automatically created in Clarity when you create a new user. The user creation process will fail if administrators create required fields for the resource that do not have default values.
NOTE Users created in the "Users" management grid will be assigned the same default password. Follow these steps: 1. In Clarity, click Administration, and click Users to open the Users grid. 2. Click the Add Row (+) button to enter details in the User grid. You need to populate all the mandatory fields to create a record. 3. When you create a new user, a labor resource is automatically created.
Managing Users in Clarity You can use the Column Panel to add all the attributes associated with users to the grid. If you are looking to edit a specific set of users you can use the filter attribute to identify them and then use the multi-select capability to edit users. Follow these steps: 1. In Clarity, click Administration, and click Users to open the Users grid.

2. Click Columns and add the relevant attributes to the grid. If you are editing user groups, ensure you add the User Groups attribute to the grid.
3. Click the Filter icon to identify relevant users. 4. Select all the relevant users and click Edit. 5. In the Bulk Edit window, update all the relevant fields and click Save.
Managing Records By Using the Grid Layout
The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.
REMEMBER To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Details Panel
- Saved Views
- Filters
NOTE In addition to those actions, you can also carry out the following action(s) within Grid:
- Mark various object and sub-object instances as your favorite by associating a star against them.
View License Type and Last Login Details
Use the License Type and Last Login attributes to monitor user access and activity in Clarity.
TIP You can access the License Type and Last Login attributes directly on the Resource object in Classic PPM. Both attributes are also available in the Resources and Users grids in Clarity.
Update the Attributes in the Grid
01. License Type
- Run the new job Populate User License Type to update license type information in the grids.
- The job runs automatically every day but can also be executed on demand.
- If you run the job without specifying parameters, Clarity automatically fills in missing license types for all users.
- License Type appears blank only when a user has no access rights.

02. Last Login
- Clarity updates the Last Login date automatically when a user logs in or when you impersonate that user.
- If a user has never logged in, the Last Login field does not appear in the grid.
- The displayed time zone reflects the user's browser settings, not Classic PPM time zone settings.
- The field records the user's actual login time and does not change due to impersonation.
NOTE Some of the key points to remember are:
- Use these attributes for filtering and data security in the grids.
- Both attributes are Data Warehouse-enabled and included in the Data Provider, allowing you to create
reports that include license type and last login information. Follow these steps: 1. Log into Clarity. 2. Open the relavent page in Clarity. 3. In the grid, configure the following fields from the Columns panel:
- License Type
- Last Login


Create a Clarity User Based on SAML Request


Clarity allows customers to log in using the credentials issued by an IdP that supports SAML 2.0. Some key advantages of using SAML-based SSO login are:
- Seamless integration between networks and environments
- Simplified password management The capability has now been enhanced to ensure if a user does exist in the IdP but not in Clarity, the user will be created in Clarity at run time to ensure a seamless user experience.
Some key requirements you need to configure before leveraging this capability are:
- Clarity System Administration (CSA) is configured to use Single Sign On to authenticate users.
- In the System Options page, ensure that the "Enable SAML Authentication" option must be enabled.
- In the System Options page, ensure that the "Allow Just-In-Time User Creation" option must be enabled. When Clarity receives a SAML request from the IdP, it checks if the username exists in Clarity:
- If the username exists, the user is logged into Clarity.
- If the username does not exist in Clarity checks if the additional required attributes are included in SAML Message.
- If the attributes are not included, the user receives an error message.
- If the user exists, a new user is created, and the status is set to Active

To learn more, see On-Premise SAML Configuration. Clarity allows customers to log in using the credentials issued by an IdP that supports SAML 2.0. Some key advantages of using SAML-based SSO login are:
- Seamless integration between networks and environments
- Simplified password management The capability has now been enhanced to ensure if a user does exist in the IdP but not in Clarity, the user will be created in Clarity at run time to ensure a seamless user experience. Some key requirements you need to configure before leveraging this capability are:
- Clarity System Administration (CSA) is configured to use Single Sign On to authenticate users.
- In the System Options page, ensure that the "Enable SAML Authentication" option must be enabled.
- In the System Options page, ensure that the "Allow Just-In-Time User Creation" option must be enabled. {"URL":["/admin/users"],"heroDescriptionIdentifier":"herotext","customCards":[{"id":"Create","title":"Create Users in Clarity","type":"use","languages":["en-us"]},{"id":"AutomaticallyCreate","title":"Create a Clarity User Based on SAML Request","type":"use","languages":["en-us"]},{"id":"IPCE_New","title":"Enhancements","type":"use","languages": ["en-us"]},{"title":"Enablement Videos","type":"videos","URL":["https://youtu.be/4vv5oFKhIsI"],"languages":["en-us"]}, {"id":"4181833","title":"Recommended Courses","type":"courses","languages":["en-us"]}]}
Feature Toggles
You can hide or unhide a feature from the new tile
- Feature Toggles
- in Clarity Administration. IMPORTANT You can review recently introduced feature toggles, allowing you to turn them on or off. These toggles will be available in administration for a specified period, after which the feature will be removed. In such cases, the functionality will automatically be available for all users in that release.
As an Administrator, you are responsible for overseeing the user interface of Clarity. Now, you can control the visibility of specific features from Feature Toggles in Clarity Administration. You can customize the user experience and gradually introduce new functionalities to the users. Key Advantages of the Feature Toggles Capability Some key advantages of using Feature Toggles in Clarity Administration are:

Gradual Feature Introduction: The ability to hide and unhide features allows for a phased introduction of new functionalities. Administrators can avoid overwhelming users with sudden changes, ensuring a smoother transition and better adaptation to new tools. Enhanced Security Measures: In the event of a security concern, administrators can quickly hide features using Feature Toggles, providing an additional layer of protection while addressing issues. Efficient Feature Rollbacks: Administrators can quickly hide a new feature using Feature Toggles to address issues or user dissatisfaction until they make necessary adjustments. This page covers the following topics:
- Prerequisite
- Managing Records By Using the Grid Layout
- Setup View Options
- Enable/Disable a Feature
- Enable/Disable a Feature Using the Command Prompt Prerequisite Before you begin using the feature, ensure that you have the following access right:
- Administration - Feature Toggles - Navigate:
Allows user access to Feature Toggles under Administration in the new user experience. The user can enable or disable feature toggles.

Managing Records By Using the Grid Layout The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Use the Column Panel to show or hide columns on the grid.
- Use the Group By capability by dragging up to three column headers. Then, view the data in the grid as rows of logical
groups.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name.
- Use Filters to identify records that match your selection criterion quickly. You can use the advanced filtering capability
to define complex filter conditions.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to
create rules determining the colors and format of various cells or rows in the grid.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users. NOTE To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Details Panel
- Conditional Formatting
- Saved Views
- Filters
Setup View Options You can adjust your view of the page. Follow these steps: 1. Log into Clarity. 2. Navigate to the relevant page. 3. In the layout, click View Options.
- Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off. 4. Click 'X' to close View Options.
Enable/Disable a Feature Follow these steps: 1. In the main menu, click Administration, Feature Toggles.
The Feature Toggles page is displayed. 2. The following fields are available in the grid:
- Name: Shows the title of the feature.
- Description: Provides comprehensive details about the feature, offering users a clear understanding of its purpose
and functionality.
- Introduced In Release: Indicates the Clarity release in which the feature was initially introduced, aiding users in
tracking when the feature was first implemented.
- Expires In Release: Specifies the Clarity release when the feature transitions from a toggleable option to a
standard, always-available feature. It signifies when support for toggling the feature ON/OFF will no longer be provided.
- Enabled: Shows whether the feature is currently enabled or disabled, offering a quick visual indication of its status.
- Last Updated By: Shows the user responsible for the most recent modifications or updates to the feature within the grid.
- Last Updated Date: Indicates the specific date of the last modification or update to the feature.
3. Check the Enabled field to activate the feature. If you uncheck the Enable field, the feature will deactivate in Clarity. Enable/Disable a Feature Using the Command Prompt Follow these steps: 1. Log in to the Clarity Server using the admin user credentials. 2. Open a command prompt and run the following command:
- To enable a feature: admin toggle-feature <feature name> 1
- To disable a feature: admin toggle-feature <feature name> 0 IMPORTANT Some of the key points to remember are:
- Replace <feature name> with the specific feature code provided by Broadcom Support.
- Some features may require a system restart or cache clearing for changes to take effect.

This capability was newly introduced in this release. {"URL":["/admin/featureToggle"],"heroDescriptionIdentifier":"hero1","customCards":[{"id":"advantages","title":"Key Advantages","type":"use","languages":["en-us"]},{"id":"EnableDisableaFeature","title":"Enable/Disable a Feature","type":"use","languages":["en-us"]},{"title":"Enablement Videos","type":"videos","URL":["https://youtu.be/ ANM_fQJKczk"],"languages":["en-us"]},{"id":"4181833","title":"Recommended Courses","type":"courses","languages":["enus"]}]}
Views
You can effectively manage and streamline all Saved Views in Clarity. You will gain centralized control over all Saved Views, ensuring a smoother user experience and efficient organizational management.
Why centralized Saved Views? As users continue to create and share an increasing number of Saved Views, effective management becomes crucial to maintain usability and relevance. This enhancement addresses the challenges associated with View clutter and ownership transfer, ensuring smoother operations and a more organized user experience. Key Features
- Centralized Management: Administrators can now access a dedicated "Views" tile within the Clarity Administration workspace. This tile serves as a hub for viewing and managing all Saved Views across the product.
- Efficient Navigation: A new global right, "Administration - Saved Views - Navigate," has been introduced to control administrators' access to the Views tile.
- Comprehensive Grid Display: The Views grid displays all Saved Views. This grid supports standard functionalities such as filtering, sorting, and grouping for seamless navigation.
- Additional Fields: In addition to the View name, three new fields - Type, Context, and Sub-context are now available in the grid. These fields aid Administrators in quickly identifying and categorizing Views.
- Streamlined Updates: Administrators can now update essential View details directly from the grid, including Name, Owner, Shared, Shared to Groups, and Recommended fields.
- Effortless Deletion: The grid also supports deleting Views, empowering Administrators to manage and clean up obsolete or redundant Views efficiently.
This page contains the following sections:
- Verify Prerequisites
- Managing Records By Using the Grid Layout
- Setup View Options
- View All Saved Views
- Change the Owner and Share with Groups
- Recommended/Unrecommended a View
- Edit View(s)
- Delete View(s)

Verify Prerequisites
Before you begin using the feature, ensure that you have Administration - Saved Views - Navigate to access the Views tile in Clarity Administration.
Managing Records By Using the Grid Layout
The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical
groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications
like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to
define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views
with other users.
REMEMBER To learn more about the grid layout and associated capabilities, see:
- Clarity Grids
- Conditional Formatting
- Details Panel
- Saved Views
- Filters
NOTE In addition to those actions, you can also carry out the following actions within Grid:
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the Bulk Delete capability in the Common Grid to delete multiple records.
Setup View Options
You can adjust your view of the page.
Follow these steps:
1. Log into Clarity. 2. Navigate to the relevant page. 3. In the layout, click View Options.
- Wrap Text: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off. 4. Click 'X' to close View Options.
View All Saved Views Follow these steps:
1. In the main menu, click Administration, Views.


The Views page appears. 2. The following fields are available in the grid:
- Name
- Owner
- Shared
- Shared to Groups
- Last Updated By
- Last Updated Date
- Type
- Context
- Subcontext
- Recommended
- Created By
- Created Date
- Starred
REMEMBER
Some of the key points to remember are:
- You can edit the following fields in the grid:
- Name
- Owner
- Shared
- Shared to Groups
- Recommended
- You can use the following fields to understand the location of the saved view:
- Type: Shows the name of the module/tab
- Context: Shows the name of the main page/workspace
- Subcontext: Shows the name of the sub-page/name of the investment or roadmap


Change the Owner and Share with Groups
Follow these steps:
1. In the main menu, click Administration, Views. 2. Change the Owner Name by selecting the options in the Owner field. 3. Select Specific Groups in Shared. 4. Select a Group from the drop-down list in the Shared to Groups field.

Recommended/Unrecommended a View
Follow these steps:
Method 01:
1. In the main menu, click Administration, Views. 2. Check/Uncheck the Recommended field to Recommend/Unrecommend a view.
Method 02:
1. In the main menu, click Administration, Views. 2. Right-click on a view and select Recommended/Unrecommended from the context menu to Recommend/
Unrecommend a view.


Edit View(s)
You can edit a view:
1. Using the Details Panel 2. Double-click a cell in a row and edit the values
You can edit multiple views on the Grid layout using the Bulk Edit capability.
Follow these steps:
1. Open Views in Clarity. 2. Select the views you want to update. 3. Select the Edit button. 4. In the Bulk Edit window, make the relevant changes to multiple views. 5. Click Save to confirm your changes.
IMPORTANT You can edit only the following fields:
- Name
- Owner
- Shared
- Shared to Groups
- Recommended


Delete View(s)
You can delete a view from the context-sensitive menu or multiple views on the grid using the bulk delete capability.
Delete a view
Steps to delete a view using the context-sensitive menu:
1. Open Views in Clarity. 2. Right-click a cell on a row and select Delete Row. The row will be deleted.
Delete multiple views
Steps to delete multiple views using the bulk delete capability:
1. Open Views in Clarity. 2. Select the views and click Delete. A confirmation pop-up window appears, stating - "Are you sure you want to Delete
'n' items?". 3. Click Delete.
This capablity was newly introduced in Clarity 16.2.2.

Configuring Vaia
ValueOps Artificial Intelligence Agent (Vaia) represents Broadcom's flagship AI assistant designed to transform data into actionable insights for enhanced organizational efficiency. Originally launched as "Clarity Concierge" in version 16.2.1, the


platform was rebranded to Vaia in Clarity 16.3.0 to align with the broader ValueOps ecosystem vision. Vaia stands as the cornerstone of Broadcom's comprehensive AI strategy, designed to integrate seamlessly across all ValueOps products over time, creating a unified intelligent assistant experience for portfolio management, project execution, and strategic decision-making.
The power of Vaia lies in its sophisticated understanding of user needs and preferences, seamlessly integrating into existing workflows to offer contextual support for information processing and data analysis. Rather than simply providing automated assistance, Vaia empowers users with advanced capabilities that enable higher levels of efficiency, making work experiences more streamlined and impactful through intelligent automation and insight generation. At its core, Vaia leverages the comprehensive data model that spans Clarity, Rally, and ValueOps ConnectALL platforms, enabling it to perform complex analysis across investment status, team skills and capacity, historical trends, and financial actuals from integrated systems.
IMPORTANT Disclaimer: By activating, you agree to share some of your Clarity data with a third-party Generative AI service (the Service). The Service uses emerging technology, may generate inaccurate output, and is not designed for or intended to meet your regulatory, legal, or other obligations. Use of the Service requires an account with the Service provider and is subject to the terms of your agreement with the Service provider. Broadcom bears no responsibility or liability for the Service, including its use of shared Customer data. WARNING Clarity displays the AI-generated text as it is returned by the AI Service and its model. The AI models keep changing the text format over time, impacting the result displayed in Clarity. A recent example is when Gemini Pro stopped sending data in the HTML format. Hence, Clarity users started seeing responses with an astrix markup. You can change the model to Gemini Pro Vision to fix this issue for now.
Key Steps to Set Up Vaia 1. Activate the AI Service Enable the core functionality within the Clarity administration site.
- Locate the Flag: Go to System Options and find the Activate Vaia AI Service checkbox.
- Toggle On: Check this box to enable AI.
NOTE For upgrades, this setting is retained if previously enabled; otherwise, it defaults to off.
2. Grant Access Rights Once activated, authorize your team to manage the tool.
- Assign Rights: Assign specific AI configuration access rights to administrators. This allows them to modify Vaia
settings and integrations.
3. Define AI Integrations Connect Clarity to your preferred LLM provider under Integrations.
- Google Gemini: Supports Vertex API (private key) or standard API keys.
- Microsoft Azure and OpenAI: Supported via standard API keys.
4. Configure and Validate AI Models Set up specific models within Modern UX administration.
- Validation: Right-click your configured model and select Validate Model. Clarity runs a test API call to ensure the connection is active.
- File Parameters: If using agents that process documents, define the following:

File Upload URL Max File Size Allowed Extensions

Required for providers like OpenAI. Set limits (defaults apply if left blank). Define supported file types to prevent errors.

5. Configure AI Agents
Define AI behavior within the application in the AI Agents tab.
Define Agent Scope
- Type: Select the object (e.g., Project, Roadmap).
- Context:
- Workspace: Runs across all instances (Output: Chat Panel).
- Object: Runs for one specific instance (Output: Chat Panel).
- Attribute: Runs on a specific field. Output results to the Chat Panel or a Text Field.
Enhance Prompts and Data
- Rich Text Support: Include RTF attributes within prompts.
- Data Sources: Use CSV reports or upload files directly.
- File Referencing: Use the Add File button to embed documents, or use the "+" sign in chat.
Migration and Customization
- Legacy Summaries: Convert old Status Report and Roadmap summaries to Agents. Re-enable Roadmap summaries post-upgrade with a new report source.
- Branding: Upload a custom Avatar/Icon and rename the assistant under the Branding tab.
6. Monitor Consumption
Track costs and usage via the Queries functionality in Modern UX.
- Custom Tracking: Create queries to monitor token usage, service providers, and user activity.
Additional Information
For more information, please review the following:
- Set up Vaia in Clarity
- Configure AI Models
- Configure Vaia Using the Enable AI Page
- Roadmap Summarization
- Status Report Summarization
- Data Generation and Revision
- Data Review
- YouTube Video Playlist
- Value Drive AI Whitepaper
- Vaia Technical Whitepaper
- Value Stream Management Page


Vaia highlights Clarity's first foray into leveraging public AI models to simplify various tasks for users. In this release, you can use Vaia to generate the status report for a project based on the fields you configure in this workspace.
In Clarity 16.4.0, the new AI Agents feature in Vaia introduces intelligent assistants that interact with users and data directly within Clarity. AI Agents operate at the Workspace or Object level, delivering contextual insights, conversational support, and automated responses through the AI Chat Panel.
In previous releases, Clarity's AI capabilities used a standard system icon and name that could not be customized. In Clarity 16.4.0, a new Branding tab in the Vaia tile within Clarity Administration allows organizations to personalize how their AI capability is presented. This enhancement helps create a cohesive, branded experience across Clarity by allowing administrators to set a custom name and logo for AI features.
In Clarity 16.4.0, new configuration options in the AI Model grid allow administrators to fine-tune model output through enhanced Max Tokens and Temperature settings. This improvement provides greater flexibility in controlling response length, creativity, and predictability across AI-driven features.
In Clarity 16.4.0, the Enable AI tab has been enhanced to improve clarity and consistency with other administrative grids. These updates make it easier for administrators to identify and access AI configurations.
{"URL":["/admin/concierge/enableAi"],"customCards":[{"id":"IPCE_Description","title":"Get Started","type":"getStarted","languages":["en-us"]}, {"id":"ipce_troubleshooting","title":"Troubleshooting","type":"troubleshoot","URL":["https://knowledge.broadcom.com/ external/article?articleId=228844"],"masterkb":"https://knowledge.broadcom.com/external/article/216961"}, {"id":"IPCE_New","title":"Whats New","type":"configure","languages":["en-us"]},{"title":"Videos","type":"videos","URL": ["https://youtu.be/RT0X7OKdgOw","https://youtu.be/VcBZ8d3XIAc"],"languages":["en-us"]}, {"id":"IPCE_Admin","title":"Admin","type":"customize","languages":["en-us"]}]}
Impersonate a User
You can now impersonate other users to see exactly what the user can see within Clarity. This helps them troubleshoot user issues and verify that users have relevant access rights to work in Clarity.
You can assign the 'Impersonate a User' access right to view this option, which appears when they click their avatar at the top right corner of the screen. They can then select the relevant user to impersonate their experience of using Clarity.
NOTE Some key points to remember are:
- You will see a banner indicating you are currently impersonating the selected user.
- You can end the impersonation mode by clicking the Logout button or the End Impersonation button.
- The Classic PPM menu link is disabled in the Impersonation Mode.
- In the Impersonation Mode, the administrator views information in the user's language and only has access
to data based on the selected user's rights and permissions.
- If auditing has been enabled for an attribute that the impersonator changes, their name is stored in the
`Impersonated By' field on the Audit Trail record.
Follow these steps:
1. Click the avatar and username at the top right. 2. Click Impersonate a User. 3. Select the relevant user you want to impersonate and perform the relevant actions in Clarity. 4. Click End Impersonation to end the session. You can also log out to end the session.
TIP Watch the following video to learn how to impersonate other users to see exactly what the user can see within Clarity.

Integrating Clarity and Rally
Organizations can use the new and improved Clarity-Rally integration to ensure data flows seamlessly between the two applications. The new and improved Clarity-Rally integration is:
- Easily extensible and configurable: You can map objects and attributes between Clarity and Rally to ensure the
integration meets your specific requirements.
- Simple to maintain: The integration can be set up and maintained by Clarity administrators who have basic Classic
PPM knowledge.
- Validated and Supported by Broadcom: You don't need to perform regression testing after every release.
Let's review some key steps you need to perform to leverage this integration. 1. Complete the relevant prerequisites to configure the integration. 2. Create an Integration Object to integrate Clarity with a specific Rally instance. 3. Create an Integration Mapping. 4. Run the Import Integration Mapping job, to fetch all Rally portfolio item type objects and their associated attributes. 5. Define valid Object mappings. 6. Define valid Lookup Mappings. 7. Define valid Field mappings. 8. Specify a Clarity Investment that would map to an Object in Rally. 9. Specify a Rally object that would map to an investment in Clarity. 10. Execute the Synchronized Mapped Information job to synchronize data between Clarity and Rally. 11. Review the staging tables to understand the changes made in Rally and Clarity.
In Clarity 16.4.0, a new Rally Calculation Method attribute introduces flexibility by allowing teams to choose between Points or Count when calculating FCA metrics. This enhancement better aligns with various Agile practices and improves the accuracy of cost and productivity analysis. {"URL":["/admin/integrations/mapping","/admin/integrations/datatypes","/admin/integrations/ frictionlessaccountmapping"],"heroDescriptionIdentifier":"IPCE_Description","customCards": [{"id":"IPCE_New","title":"Enhancements","type":"use","languages":["en-us"]},{"title":"Enablement Videos","type":"videos","URL":["https://youtu.be/nAanhla2o9k","https://youtu.be/Ji58bbjsSfk"],"languages":["en-us"]}, {"id":"4181833","title":"Recommended Courses","type":"courses","languages":["en-us"]}]}
Setting Up the Clarity-Rally Integration
Integration Prerequisites You need to complete the following steps before you configure the new Clarity-Rally integration. 1. Assign the Integration Mapping - Navigate access right to the administrators who will configure the Clarity-Rally
integration. Users with the Integration Mapping - Navigate right will be able to view and access the Integrations tile on the Administration page. To learn more about this access right, see Access Rights documentation. 2. Ensure the latest version of the PMO-Accelerator content add-in is installed. With the latest version of the PMOAccelerator installed, Clarity will include the `Rally Object ID' and the `Integration Mapping' attributes for configuration in Projects, Ideas, and Custom Investments.


Creating an Integration Object in Classic PPM
You can configure the new Clarity-Rally integration by creating an integration object. You create an integration object from the Integrations page in Classic PPM, which is the one-stop shop to define and maintain all integration information.
The key pieces of information you need to create an integration object are:
- Integration URL
- Integration Instance
- Integration API Key
ATTENTION The user generating the API key in Rally must have at least Workspace Administrator privileges.
Follow these steps:
1. Log in to Classic PPM. 2. Click Administration, General Settings, Integrations. 3. Click New. 4. Complete the following fields and click Save.

Areas Vendor Supplier Integration URL Integration API Key

Field Name

Integration Instance

Description The software application or business area of the vendor (for example, Agile). The company name with which Clarity is integrating (for example, Rally). The company name that is implementing the integration (for example, Broadcom). The URL for the integration instance (for example, the Rally instance URL). The key that is used to access and retrieve data from Rally
IMPORTANT The user generating the API key in Rally must have at least Workspace Administrator privileges.
The Rally workspace ID

IMPORTANT The Clarity-Rally Integration does not support Basic authentication.

Create Mappings in Clarity and Rally

This section contains the following topics:
- Define Object Mappings in Clarity
- Create Lookup Mappings
- Define Field Mappings in Clarity
- Using Field Mapping to Map the Rally Owner Field
Define Object Mappings in Clarity
You can map selected Clarity investments (Projects, Ideas, and Custom Investments) to selected Rally Portfolio items. You can also map objects in Rally to investments in Clarity.


Example 1: Clarity to Rally
Consider an example where an organization has finalized its strategy and used Custom Investments in Clarity to create Themes, Business Epics, and Business Outcomes. These investments can be mapped to Themes, Epics, and Capabilities in Rally. If the organization has created individual projects in Clarity, they can also map them to a relevant portfolio item type such as a project in Rally.
Example 2: Rally to Clarity
Many customers have multiple teams that contribute innovative ideas that help develop the next generation of the product they develop. These teams use Rally to track their day-to-day work and create Rally Portfolio Items for these ideas. You can now use the Clarity-Rally integration to ensure that such portfolio items in Rally can have associated investments (ideas, projects, and custom investments) in Clarity. You can then use planning capabilities in Clarity such as Roadmaps and Hierarchies to understand the relationship between these Rally initiatives and existing investments in the organization.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select the Integrations tab to open the Integrations page. 3. Open the relevant integration mapping and navigate to the Object Mappings tab. 4. Click the Add Row icon and enter the following details
a. Name: Provide the name of the object mapping b. Rally Object: Select the Rally object that you want to map to the Clarity investment c. Clarity Object: Select the Clarity investment type to map to the Rally object. d. Direction: Select Clarity to Rally, Rally to Clarity or Both.
After you define your Object Mapping, you are now ready to map lookups between Clarity and Rally. The Lookup Mapping helps you ensure lookups are synchronized between Clarity and Rally.
Create Lookup Mappings
The Import Integration Mappings job fetches the Milestones, Investment Categories, Date, and Project lookups from Rally and stores them in Clarity. These (4) dynamic lookups are now available as a part of the PMO Accelerator add-in and will be available to you when you install this add-in. The job also populates the Integration Mapping drop-down menu list in Rally.
You can now perform the following actions to map lookups:
- Leverage existing Rally Lookups imported into Clarity: Create custom attributes in Clarity that leverage the Rally Investment Categories, Rally Milestones, Rally Projects, and Rally States lookups. You can then use field mappings to map these custom attributes to the relevant lookups in Rally. For example, you can create a Clarity Project Milestone field that leverages the Rally Milestone lookup. You can then leverage Field Mappings to map the Clarity Project Milestone field to the Rally Milestone field in Rally.
- Use the Lookup Mapping tab to configure other lookups: You can use the Lookup Mapping tab to map single-value lookups in Clarity to custom lookups (also called drop-down lists) in Rally, enabling data synchronization control. Let's consider a scenario where you have a custom lookup in Rally titled Business Risk and want to map it to the Business Operational Risk lookup in Clarity. You can now: a. Create a New Lookup mapping in Clarity to map the values between the Business Operational Risk lookup in Clarity and the Business Risk lookup in Rally. b. Create a field mapping between these lookup fields to ensure data is synchronized. You can specify the direction of the mapping as Clarity to Rally, Rally to Clarity, or Both. IMPORTANT When you update the attribute's value on either system and run the Synchronize Mapped Information job, the field in the other system will be automatically updated.

CAUTION Some key points you need to remember are:
- Clarity now supports all three (Clarity-to-Rally, Rally-to-Clarity, and Both) synchronization options when you
map custom lookup values in Rally with attributes in Clarity.
- Please review the Data Type Compatability table to review the supported mapping options. Clarity currently
only supports mapping to Rally's Drop Down List attribute type. You cannot map to the Drop Down list (MultiValue) and Drop Down List (User) attributes.
- In this release, you cannot map a Clarity number lookup to a Rally custom lookup. You can only map a Clarity string lookup to a Rally custom lookup.
- In the context of the integration, there are six out-of-the-box Rally lookups that ship with the integration:
- RALLY_INVESTMENT_CATEGORIES
- RALLY_MILESTONES
- RALLY_OBJECTIVES
- RALLY_OBJECTIVES_PROJECTS
- RALLY_OBJECTIVES_STATES
- RALLY_PROJECTS
- During any implementation, there is a high probability that Lookup values might change. For this, running the Import Integration Mappings job at regular intervals is recommended to incorporate Lookup value updates. Follow these steps to map the values of lookups in Clarity and Rally: 1. Log into Clarity. 2. Click Administration and select the Integrations tile to open the Integrations page. 3. Open the relevant integration mapping and select the Lookup Mapping tab. 4. Click New Mapping and enter the following details
- Select the relevant Clarity lookup.
- Select the target Rally lookup.
- Enter the Name of the lookup mapping. 5. Click Create to save the new mapping. 6. Select the mapping and click DETAILS to open the Details Panel. 7. Click the Clarity to Rally tab and select the target Rally values for associated Clarity values. 8. Click the Rally to Clarity tab and select the target Clarity values for associated Rally values. 9. After the mapping is complete, close the details panel. IMPORTANT Some of the key points to remember when you leverage the Lookup Mapping capability are:
- The Administrator needs to install the new PMO accelerator to ensure that the four new dynamic lookups are available to Clarity users.
- Administrators need to create dynamic lookups attributes, at either the Clarity Investment, Object, Idea, or Custom Investment levels depending on their requirements.
- If you are creating a static value lookup or multi-value lookup to leverage the four Rally lookups, you need to use the following lookup parameter mappings:
- Lookup Parameter: Im_id_constrain and Inv_code_constrain
- Object Attribute ID: obj_int_mapping and Unique_code
- When you map the Rally Projects, Milestones, States, or Investment Categories lookup to a Clarity custom lookup, the administrator does not need to use the Lookup Mapping tables, but can directly synchronize the values to the target system.
- It is recommended the Rally States, Projects, and Investment categories lookups are associated with a Clarity single-value lookup attribute and the Rally Milestones lookup be associated with a Clarity multi-value lookup attribute.
- If a Clarity parameterized lookup is used for Lookup Mapping, the Clarity to Rally and Rally to Clarity lookup options will not be displayed in the DETAILS panel.
- You can synchronize a single-value Clarity number lookup to a Rally string field. The synchronization will not work if:
- The Clarity number lookup is configured as a multi-value lookup.
- The Clarity number attribute has a comma.
- If a Clarity lookup value is marked inactivate, the following actions are possible:
- If an inactivate value is mapped to a Rally value, the existing Lookup Mapping configuration will not be
modified or updated.
- If an inactivate value is not mapped to a Rally value, the Clarity value will be removed (deleted) from the
existing Lookup Mapping configuration
- If a Rally lookup value is marked inactivate or deleted, Clarity will display the (inactivate or deleted) Rally
value within the Lookup Mapping configuration pages.
You have now mapped the lookups in Clarity and Rally to support data synchronization between both systems. Next, you need to map fields between Rally and Clarity to ensure accurate data synchronization.
NOTE You can synchronize the value of Rally lookups to Roadmap items by using the Sync Linked Items option. To learn more about synchronizing roadmap items, see Clarity Roadmaps.
Define Field Mappings in Clarity
Defined field mappings specify how data is exchanged between Clarity investments/fields and Rally portfolio items/ fields. Field mappings are always associated with an object mapping. Consider the following object and field mapping techniques:
- Specify the direction of data flow when you define the mapping.
- You can define a mapping where data flows from a field in Clarity to a field in Rally
- You can also define a mapping where data flows from a field in Rally to a field in Clarity.
- Bi-directional integration is supported by using the Both option in the Supported direction column. This means that values in Clarity and Rally will be synchronized with data changes in either of the systems. The "Both" option can only be used when you use Update in the Sync Option column.
- You cannot include the same field in multiple mappings.
- Select the relevant Sync Option.
NOTE The integration has been enhanced to support mapping Rich text between Clarity and Rally. If you map Rally's `Text' fields containing images or tables to a rich text field it Clarity, the synchronization job will skip it. The administrator can identify which Clarity and Rally fields were not synchronized using log files.
- In the Clarity 16.1.0 and higher releases, Administrators can map and sync Clarity's ENUM' Lookup Number data type with Rally's Object data type. A supporting Lookup Mapping configuration ensures actual values align with each other in the case of the `Clarity to Rally' or `Rally to Clarity' sync direction. This enables syncing Rally's Preliminary Estimate values, for example: such as `S (20)', `M (40)', with a mapped Clarity

custom lookup to capture the alpha and numeric values. With added support for Clarity's ENUM Lookup Number data type, you can separate alpha characters from numeric values for data aggregation or reporting purposes. Follow these steps: 1. Log into Clarity. 2. Click Administration and select the Integrations tab to open the Integrations page. 3. Open the relevant integration mapping and navigate to the Object Mappings tab. 4. Select the relevant Object Mapping, click DETAILS and select the Field Mappings tab. 5. Click Expand to open the Field Mappings window. 6. Enter the following details: a. Direction - Select Clarity to Rally, Rally to Clarity, both depending on your requirement. b. Clarity Field - Select the relevant Clarity field. This field is associated with the investment you identified during object mapping. c. Rally Field - Select the Rally field to be mapped to the Clarity field. Ensure you are following the Data type compatibility guidelines while mapping the fields. d. Sync Option - Select from the Create, Update, Create and Update options. See Execute the Synchronize Mapped Information Job to learn more about these options. 7. When Clarity validates the field mapping, and the Data Type columns are populated and saved. 8. You will see an error message if: a. The fields being mapped are not compatible b. Either of the fields has an existing mapping ATTENTION Some key points you need to remember are:
- You can map and synchronize to map and synchronize Clarity's Parent field values to Rally's Parent field values. This ensures that whenever you update the parent values in Clarity or Rally the changes are synchronized between both systems. Hence, when you use the Auto-Import Children option in Hierarchies, you can see the latest relationship between various investments in your organization.
- Let's consider an example where you have created a set of Business Outcomes in Clarity and mapped them to Initiatives in Rally. You have also created Projects and mapped them to features in Rally. You need to create a bi-directional field mapping between the Parent fields in Clarity and Rally to ensure whenever you update a parent for a project in either system the change is reflected in both of them.
- Remember that you need to execute the Synchronize Mapped Information job to synchronize the values between both systems.
- When you plan to map objects in Rally to investments in Clarity, ensure you map all the mandatory fields used to create investments in Clarity.
- You can map Rally's Formatted ID field to a string field in Clarity and synchronize it.


Using Field Mapping to Map the Rally Owner Field


You can use the Field Mapping capability, after setting up the Clarity-Rally integration, to synchronize the Rally Owner field to the Clarity Owner field by using a specific Clarity lookup. This ensures that the Clarity and Rally OKR ownership is in sync. The integration detects where ownership changes occur (for example: either in Rally or Clarity) and ensures the systems always reflects current ownership.You need to ensure that the email address of the user are identical in Clarity and Rally for the data to synchronize successfully.
NOTE Some key points you need to remember are:
- Clarity ships with a set of 3 lookups that can be used to sync Owner values between Rally and Clarity. The
following resource lookups support mapping a Clarity resource field to the Rally Owner field.
- BROWSE_PROJMGR_NAME_ONLY: This is the out-of-the-box lookup for the Clarity Manager field.
- SCH_BROWSE_RESOURCE: Administrators creating a custom lookup (such as 'Clarity Owner') are
advised to use this lookup.
- BROWSE_PROJMGR
- The Clarity Rally Owner sync process expects matching email addresses. When a missing resource is detected, the sync process skips the owner sync for the specific record.
- A log file is available to inform the administrator of a list of 'missing resources' that do not have matching email addresses in either Clarity or Rally.
- For example, if Cheryl (cherylAmos@mailserver.com) exists as a Clarity user but not as a Rally user,
Cheryl will be added to the missing resources log.
- For example, Cheryl will be visible as a value in the Clarity Objective "Owner" drop-down, but upon sync
(Clarity to Rally), Cheryl will be added to the 'missing resources' log file, and the Rally Owner field not be updated and viewed as --None-- (or the existing value prior to running the sync job).
- The log file message will indicate in which system the resources are missing.


Review the Data Type Compatibility Grid
Review the Data Type compatibility grid to ensure you are mapping supported field types. The grid is available on the Data Type Compatibility tab and can be accessed from the Integrations page.


Frictionless Cost Accounting Frictionless Cost Accounting is a method that enables organizations to seamlessly capture, track, and post timesheet data in alignment with the work being done in agile project management tools like Rally. It automates the integration between project management and financial systems, allowing work tracked in Rally (such as user stories, tasks, and portfolio items) to be directly linked to financial records and timesheets in Clarity.

Benefits of Frictionless Cost Accounting:
- Save Time: Reduces manual data entry and errors.
- Better Financial Visibility: Gain real-time insights into progress and costs to manage budgets effectively.
- Easier Timesheet Management: Track and approve timesheet entries linked to work in Rally.
- Aligned Financial and Project Data: Ensures financial records in Clarity reflect actual project work.
- Streamlined Integration: Easily sync timesheet data across systems for smoother cross-departmental operations. You can perform the following actions in the Frictionless Accounting Mappings tab: 1. Create a Frictionless Accounting Mapping Instance 2. Activate the Frictionless Accounting Mapping Instance This section covers the following topics:
- Verify Prerequisites
- Create a Frictionless Accounting Mapping Instance
- Activate the Frictionless Accounting Mapping Instance
- Scenario: Implementation of Frictionless Cost Accounting
- Scenario Phases
- 01. Setup Phase
- 02. Configuration Phase
- 03. Synchronization Phase
- 04. Timesheet Integration Phase
- 05. Post Timesheet Phase
- Modifications Required When Using a Custom Investment for Frictionless Cost Accounting
- How Rally Calculates Hours for Financial Work Types
- Conclusion For more information about the specific calculations in Rally, see Frictionless Cost Accounting Calculations.
Verify Prerequisites Ensure that you have completed the following prerequisites:
- Contact Broadcom Support to turn ON the FCA module in Rally
- Create the Rally integration instance in Classic PPM.

IMPORTANT Enter the ObjectID of the Rally instance in the Integration Instance field on the Integrations page. Follow these steps to get the Rally Object ID 1. Log in to the Rally workspace with your credentials. 2. Access the following URL:
https://<Rally_Instance>/slm/webservice/v2.0/workspace?fetch=true
A JSON response appears. 3. Note down the value of ObjectID from the JSON response. The following code shows a sample JSON
response with the ObjectID.
{ "QueryResult": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "Errors": [], "Warnings": [], "TotalResultCount": 1, "StartIndex": 1, "PageSize": 20, "Results": [ { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://<Rally_Instance>/slm/webservice/v2.0/workspace/41529001", "_refObjectUUID": "3497d043-3ea7-4c8a-bf78-069847936c13", "_objectVersion": "1160", "_refObjectName": "Rally", "CreationDate": "2006-11-20T16:28:38.000Z", "_CreatedAt": "Nov 20, 2006", "ObjectID": 41529001, "ObjectUUID": "3497d043-3ea7-4c8a-bf78-069847936c13", "VersionId": "1160", "Subscription": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://<Rally_Instance>/slm/webservice/v2.0/subscription/400059", "_refObjectUUID": "76de2093-5f8d-403d-a2db-fcec9c5c7079", "_refObjectName": "Rally Development 100", "_type": "Subscription" }, "Children": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://<Rally_Instance>/slm/webservice/v2.0/Workspace/41529001/Children", "_type": "Project", "Count": 0 }, "Description": "Primary workspace for planning/tracking Clarity and Rally work along
with a few EPG items", "Name": "Rally",

"Notes": "{QC:{\"URL\":\"vmwin2003qc10:8080\",\"User\":\"alex_qc\",\"Password\": \"RallyDev\",\"Domain\":\"DEFAULT\",\"Project\":\"QualityCenter_Demo\",\"TestUserField\": \"TS_USER_05\",\"DetectUserField\":\"\",\"User\":\"alex_qc\"}",
"Owner": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://<Rally_Instance>/slm/webservice/v2.0/user/78460881116", "_refObjectUUID": "93f419b5-2579-4e22-8caa-9c5dbd716e27", "_refObjectName": "Todd \"No Fun\" Shmalloway", "_type": "User"
}, "Projects": {
"_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://<Rally_Instance>/slm/webservice/v2.0/Workspace/41529001/Projects", "_type": "Project", "Count": 2 }, "SchemaVersion": "d7b33d43", "State": "Open", "Style": "UserStory", "Tags": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://<Rally_Instance>/slm/webservice/v2.0/Workspace/41529001/Tags", "_type": "Tag", "Count": 3980 }, "TypeDefinitions": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://Rally_Instance>/slm/webservice/v2.0/Workspace/41529001/ TypeDefinitions", "_type": "TypeDefinition", "Count": 108 }, "WorkRules": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://<Rally_Instance>/slm/webservice/v2.0/Workspace/41529001/WorkRules", "_type": "WorkRule", "Count": 0 }, "WorkspaceConfiguration": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://<Rally_Instance>/slm/webservice/v2.0/ workspaceconfiguration/41529004", "_refObjectUUID": "b91e4e5f-623f-42b0-9496-ba65f8947977", "_type": "WorkspaceConfiguration" }, "c_CostofDelay": null, "_type": "Workspace"


} ] } }
- Create values under the Financial Work Type (fin_work_type) lookup. NOTE An out-of-the-box (OOTB) Financial Work Type lookup of Static Type is available without values in Classic PPM. The admin should create values in the Financial Work Type lookup.
For Examples:
- New Feature Development
- Research
- QA Testing
- Technical Debt
- Enable the Allow Effort Task Creation option in the Administration, Project Management, Settings page of Classic PPM.
Create a Frictionless Accounting Mapping Instance
Follow these steps:
1. In Clarity, click Administration and click the Integrations tile to open the Integrations page. 2. Click the Frictionless Accounting Mappings tab. 3. Click the Add Row icon and enter the required details:
- Name: Provide a name for Frictionless Accounting Mappings instance.
- Integration: Select the required Rally integration from the drop-down list.
NOTE An Integration can only be selected ONCE. 4. Click the Frictionless Accounting Mappings instance (Rally_FAM). 5. Click + to add Financial Work Type Task Mapping. 6. Complete the following fields:
- Financial Work Type: Select the Financial Work Type lookup values from the drop-down list. You can only select each Financial Work Type once.
- Task ID: Provide an unique ID.
- Cost Type: Select an option (Capital/Operating) from the drop-down list.
- Active: Mark each selected value as active (or uncheck the box to mark it as inactive)
IMPORTANT The following details will not be populated until after executing the Import Integrations job:
- Rally Portfolio Items
- Rally Object ID
Activate the Frictionless Accounting Mapping Instance
Follow these steps:
1. Execute the Import Integrations job after creating a Frictionless Accounting Mapping Instance. IMPORTANT After executing the Import Integrations job, the following details will be populated in the Frictionless Accounting Mappings instance page:
- Rally Portfolio Items
- Rally Object ID 2. In the Frictionless Accounting Mappings instance page, choose the values for Clarity Investment and Rally Portfolio Item for Capital Actuals and Capital Approval:
- Capital Actuals: Defines the investment level for capturing actuals for time entries and transactions.
- Clarity Investment: Represents the list of Clarity Investments (e.g., Project, Custom Investment).
- Rally Portfolio Item: The Portfolio Item level at which an organization captures actuals for time entries and transactions. It represents the lowest-level Portfolio Item from the target Rally system. Best Practice: It should be the Rally Lowest Level Portfolio Item (typically the Feature level).
- Capital Approval: Specifies the investment level for authorizing capital expenditures.
- Clarity Investment: Represents the configured Clarity Investments (e.g., Project, Custom Investment).
- Rally Portfolio Item: The Portfolio Item level at which an organization authorizes capital expenditures. It represents the configured Portfolio Item levels from the target Rally system. Best Practice: It should be higher than a Feature level, but Clarity will not prevent a user from selecting the Feature level.
NOTE
Some of the key points to remember are:
- Ideas, Custom Master Objects, and Team Investments are not supported in the Clarity Investment of Capital Actuals and Capital Approval.
- The Captial Approval attribute will be available on the Clarity relative workspace where the attribute is created in Classic PPM.
- Enable Open for Time Entry and set the Track Mode to PPM for the Clarity investment selected under Capital Actuals and Capital Approval.
3. Turn ON the toggle Enable Frictionless Cost Accounting. This will create a 'Capital Approval' lookup attribute for the selected `Capital Approval' Clarity Investment.
IMPORTANT If you toggle Enable Frictionless Cost Accounting ON without providing the mandatory fields or if no `Active' Financial Work Type Task Mappings exist, an error message will appear: "Valid values for Capital Actuals, Capital Approval attributes, and Financial Work Type Task Mapping are required to enable Frictionless Cost Accounting."
NOTE
What's Next?
1. Frictionless Time: Create Timesheets without Staff or Assignments on Investments 2. Frictionless Time: Create Timesheets from Rally for a Specific Time Period 3. Scenario: Implementation of Frictionless Cost Accounting
Scenario: Implementation of Frictionless Cost Accounting
A product development organization uses Clarity for funding and monitoring investments, and Rally for agile development and execution. The organization aims to integrate these systems to gain real-time visibility into investment execution and delivery information.
To streamline financial data integration between Clarity and Rally, the organization implements Frictionless Accounting Mappings. This feature automates the tracking of financial work types and capital approval data, enhances the accuracy of cost accounting, and reduces the administrative effort involved in maintaining financial records across multiple systems.
The company can improve financial reporting, standardize financial processes, and make more informed decisions with real-time data by connecting Clarity's investment data with Rally's agile work tracking.
Goal:

The goal of Frictionless Accounting Mappings is to seamlessly integrate financial data between Clarity and Rally, ensuring that time entry, financial work types (FWTs), and resource allocations are accurately tracked and aligned across both systems. Actors:
- Ian Arpel (Clarity Administrator): Ian is responsible for setting up and maintaining the integration between Clarity
and Rally.
- Adriana Ramos (End User): Adriana is a project team member who works with Rally and Clarity. She is responsible
for adding user stories in Rally and submitting timesheets in Clarity. Investment Type: 'Project' is the investment type used in this scenario. Scenario Phases

# Prerequisite:
- Contact Broadcom Support to turn ON the FCA module in Rally
- Create the Rally Integration Instance in Classic PPM
Ian configures the integration attributes to define the Rally system he wants to integrate with Clarity. Follow these steps: a. Log into Clarity and open Classic PPM. b. Click Administration, General Settings, Integrations. c. Click New.


d. Update the following fields with the required information:


Field
Integration Name Integration ID Integration URL Integration Instance Integration Key Authentication Type

Rally_Dev RallyDev (Check with your Administrator) (Check with your Administrator) (Check with your Administrator) API Key

Value/Example

NOTE
Ensure that you have entered the ObjectID of the Rally instance in the Integration Instance field.
To learn more, see Verify Prerequisites e. Click Save.
- Define the Financial Work Types in Classic PPM Ian defines the necessary financial work type values in Classic PPM to suit the requirements. Follow these steps: a. Click Administration, Data Administration, Lookups. b. Open Financial Work Type lookup and click Values. c. Click New. d. Complete the following fields:

Field
Lookup Value Name ID (LOOKUP_CODE)
e. Save your changes.

Defect BH4 Fin001

Value/Example
- Enable the toggle - F56773: Enable FCA calculations by count alongside points in Rally.


01. Setup Phase
The Setup Phase involves creating and activating the Frictionless Cost Accounting instance.
1. Create a Frictionless Accounting Mapping Instance Ian goes to the Integrations section in Clarity Administration and creates a Frictionless Accounting Mapping instance. Follow these steps: a. In Clarity, click Administration and click the Integrations tile to open the Integrations page. b. Click the Frictionless Accounting Mappings tab. c. Click the Add Row icon and enter the following details:

Name Integration

Field

Rally_FAM Rally_Dev

Value/Example

d. Click the Frictionless Accounting Mappings instance (Rally_FAM). e. Click + to add Financial Work Type Task Mapping. f. Complete the following fields:

Financial Work Type Task ID Cost Type

Field

Defect BH4 DefectBH4 Capital

Value/Example


Field

Value/Example

Active

#

NOTE An Integration can only be selected ONCE.

2. Execute the Import Integrations Job

Ian runs the Import Integrations job to import Rally Portfolio Items and Teams for Frictionless Cost Accounting.

Follow these steps:

a. In Classic PPM, click Home, Personal, and Reports and Jobs.

b. Click Jobs, Available Jobs.

c. Click the Import Integrations job.

d. Complete the following fields:

Field

Value/Example

Job Name

Import Integrations
- 01

Integration

Rally_Dev

When

Immediately

e. Click Submit. Wait for the job to complete. To learn more, see Import Integration Job.
3. Activate the Frictionless Accounting Mapping Instance Ian enables Frictionless Cost Accounting on the Frictionless Accounting Mapping page. Follow these steps: a. In Clarity, click Administration and click the Integrations tile to open the Integrations page. b. Click the Frictionless Accounting Mappings tab. c. Click the Frictionless Accounting Mappings instance (Rally_FAM). d. Complete the following fields (use the same options for Capital Actuals and Capital Approval):
- Clarity Investment: Project
- Rally Portfolio Item: Feature e. Toggle Enable Frictionless Cost Accounting ON. IMPORTANT

Some of the key points to remember are:
- The "Enable Frictionless Cost Accounting" option is disabled until all sections are completed.
- Enable Open for Time Entry and set the Track Mode to PPM for the Clarity Investment selected under Capital Actuals and Capital Approval.

02. Configuration Phase
In this phase, Ian configures the detailed mappings between Clarity and Rally and adjusts permissions as needed for the attributes.
1. Create an Integration Mapping Instance Ian creates a new Integration Mapping instance to configure how data flows between Clarity and Rally. Follow these steps: a. Click Administration and select the Integrations tile to open the Integrations page. b. Click the Add Row icon and enter the following details.

Field
Name Integration
c. Click Enter.

Rally_IM Rally_Dev

Value/Example


2. Run the Import Integration Mappings Job Ian executes the Import Integration Mappings job to synchronize the mapping data between Clarity and Rally. Follow these steps: a. In Classic PPM, Click Home, Personal, Reports and Jobs. b. Click Jobs, Available Jobs. c. Click the Import Integration Mappings job. d. Complete the following fields:

Field

Value/Example

Job Name

Import Integration Mappings
- 01

Integration Mapping

Rally_IM

When

Immediately

e. Click Submit. Wait for the job to complete. To learn more, see Import Integration Mappings Job. 3. Define Object and Field Mappings in Clarity Ian maps Clarity investments (e.g., Projects) to the selected Rally Portfolio Items and defines field mappings to specify how data is exchanged between the two systems. This ensures that time entry, work types, and financial data align. Follow these steps: a. In Clarity, click the newly created Integration Mapping instance (e.g., Rally_IM). b. Click the Add Row icon and enter the following details:

Field Name Clarity Object

ObjectMap01 Project

Value/Example


Field

Value/Example

Rally Object

Feature

Direction

Clarity to Rally

c. Click Enter. d. Select the newly created object mapping instance and click Details. e. Click Field Mappings in the Details panel. f. Click the Add Row icon and enter the following details:

Field
Direction Sync Option Clarity Field Rally Field
g. Click Enter.

Clarity to Rally Create and Update Project Name Name

Value/Example


4. Unsecure the Frictionless Accounting Attributes Ian unsecured two new attributes to enable smooth integration:
- Frictionless Cost Accounting Mapping: Configures the Clarity Frictionless Accounting Mapping instance.
- Rally Team for Frictionless Cost Accounting: Configures the Rally Frictionless Accounting Mapping instance. NOTE By default, these attributes are secured. Follow these steps: a. Click Administration and open the Attributes tile. b. Apply the following filter: Attribute =Frictionless Cost Accounting Mapping, Rally Team for Frictionless Cost Accounting c. Drag the Object header into the Group By bar in the grid. d. Uncheck Frictionless Cost Accounting Mapping, Rally Team for Frictionless Cost Accounting, and Rally Calculation Method under Project and Team Investment.
03. Synchronization Phase
This phase ensures that Clarity and Rally data are fully synchronized.

NOTE Consider an example: 1. Create a New Team, Doc Team, in the Team Investment Workspace.
Configure the Frictionless Cost Accounting Mapping and the Rally Team for Frictionless Cost Accounting in the Team Investment workspace.

Field
Frictionless Cost Accounting Mapping Rally Team for Frictionless Cost Accounting Rally Calculation Method

Value/Example Rally_FAM Business to Bank Engagement
Points

To learn more, see Frictionless Time: Create Timesheets without Staff or Assignments on Investments. 2. Add a Resource (Adriana Ramos) to the Staff Module under the Doc Team. 3. Allocate Resources to Adriana Ramos for the Current Time Period.
Ensure the Following Configurations Are Set Properly:
- Enable Open for Time Entry and set the Track Mode to PPM for the resource.
- The Team Investment should be active, with the appropriate Start and Finish Dates.
- Ensure that Adriana Ramos has access rights to:
- Project - View Management - All
- Timesheets - Navigate
- Set the Unit of Measure to Hours.
1. Link a Clarity Investment (e.g., Project) to the Integration Mappings instance Ian configures the Projects Workspace to include Integration Mappings, Rally Object, and Rally Formatted ID. Follow these steps:
- In the main menu, click Projects.
- Configure Integration Mappings, Rally Object, and Rally Formatted ID from the Columns Panel.
- For a project (e.g., Acme Managed Service), complete the following fields:

Field
Integration Mappings Active Open for Time Entry Track Mode

Rally_IM # # PPM

Value/Example

REMEMBER The Prevent Unassigned Timesheet Tasks field must be unchecked.


2. Run the Synchronize Mapped Information Job: Ian runs the Synchronize Mapped Information job to sync the configured data between Clarity and Rally. Follow these steps: a. In Classic PPM, click Home, Personal, Reports and Jobs. b. Click Jobs, Available Jobs. c. Select the Synchronize Mapped Information job. d. Complete the following fields:

Field

Value/Example

Job Name

Synchronize Mapped Information
- 01

Integration Mapping

Rally_IM

When

Immediately

e. Click Submit. Wait for the job to complete.

NOTE The Rally Object and Rally Formatted ID fields will be updated in the Projects workspace once the Synchronize Mapped Information job is executed.


04. Timesheet Integration Phase This phase ensures that timesheets accurately reflect work completed on user stories and tasks.
NOTE 1. Copy the Rally Formatted ID(Example: F25713) for the investment. 2. Log in to Rally. 3. Select the required Rally Workspace from the left menu panel. 4. Paste the Rally Formatted ID in the search bar and click Enter. The F25713 feature will open. 1. Create User Stories in Rally: Adriana Ramos creates user stories in Rally with the required details, including story points, Financial Work Types (FWT), and sets the Schedule State to "In Progress." Follow these steps: a. Click Add New. b. Complete the required fields, including the Plan Estimate field to assign story points. c. Click Create.


d. Complete the following fields:

Field

Name

Defect BH4

Plan Estimate


Schedule State

In-Progress

Financial Work Type

Defect

Similarly, another user story can be created.

Value/Example


To learn more, see Creating User Stories in Rally 2. Run the Timesheet Integration Job:
Ian executes the Timesheet Integration job to pull time entries from Rally into Clarity, ensuring that all time spent on tasks mapped with Financial Work Types is tracked. Follow these steps: a. In Classic PPM, click Home, Personal, Reports and Jobs. b. Click Jobs, Available Jobs. c. Select the Timesheet Integration job. d. Complete the following fields:

Field

Value/Example

Job Name

Timesheet Integration
- 01

Integration Type

Rally_Dev

Time Period

Current Period

When

Immediately

e. Click Submit. Wait for the job to complete.

To learn more, see Timesheet Integration Job.

3. Verify and Submit the Timesheet:

Adriana Ramos logs into Clarity to verify that the tasks with Financial Work Types are correctly populated in the timesheet. Once all entries are accurate, she submits the timesheet for manager approval.


Follow these steps: a. Log in as Adriana Ramos. b. In Clarity, click Timesheets from the menu. c. Open the current period in My Timesheet. The user stories entered in Rally appear in My Timesheet. d. Verify the details.
NOTICE When the Timesheet Integration Job runs, the Financial Work Type's Task ID in the Timesheet shows the Financial Work Type Lookup ID values. e. Submit the timesheet What Next? The manager approves Ramos's timesheet.
To learn more, see How Rally Calculates Hours for Financial Work Types 05. Post Timesheet Phase After the timesheet is approved, the system processes the data and reflects it in the respective modules. 1. Run the Post Timesheets Job:
Once the timesheet is approved, Ian runs the Post Timesheets job (after a 6-minute delay) to ensure that the data is accurately processed in both Clarity and Rally. Follow these steps: a. In Classic PPM, click Home, Personal, Reports and Jobs. b. Click Jobs, Available Jobs. c. Select the Post Timesheets job.


d. Complete the following fields:


Field

Value/Example

Job Name

Post Timesheets
- 01

When

Immediately

e. Click Submit. Wait for the job to complete.

To learn more, see Post Timesheets Job.

2. Review the Tasks and Staff Modules of the Investment along with Timesheets:

Once the Post Timesheets job has been executed, Ian verifies that Financial Work Types (FWTs) have been converted into tasks and that users have been correctly assigned to the Staff module for the associated investments, along with the respective Actuals and Actual Cost.

Follow these steps:

a. In the main menu, click Projects.

b. Open the project (e.g., Acme Managed Service).

c. Navigate to the Tasks module. You will observe that Financial Work Types (FWTs) have been converted into tasks.

d. Navigate to the Staff module. You will see that the user (e.g., Ramos) has been assigned in the Staff module.

e. Navigate to the Assignment module. Select the task converted from a FWT, click the Details panel, then the Assignments tab to verify that the Actuals and Actual Cost have been populated for frictionless timesheets.

Also, Ian notices that the Financial Work Type's Task IDs in the Timesheet are updated. When the Post Timesheet job runs, it replaces the Financial Work Type Lookup ID with the Task ID of Financial Work Type defined in the Frictionless Accounting Mappings instance page.

Follow these steps:

a. In the main menu, click Timesheets.

b. Navigate to MyTimesheet.

c. Open a specific period in the My Timesheets tab. The effort tasks with Task IDs are updated.

Task ID (Before running the Post Timesheet Job) Defect BH4(Fin001) New Feature Development BH4(Fin002)

Task ID (After running the Post Timesheet Job) Defect BH4(Defect BH4) New Feature Development BH4(NewBH4)

Modifications Required When Using a Custom Investment for Frictionless Cost Accounting
If you are using a Custom Investment to implement Frictionless Cost Accounting, follow the same steps as in the previous scenario with the following modifications:


NOTICE The following example uses the custom investment type named Features.

Phase Number with Name 01. Setup Phase 02. Configuration Phase 03. Synchronization Phase
04. Timesheet Integration Phase 05. Post Timesheet Phase

Task Activate the Frictionless Accounting Mapping Instance Define Object and Field Mappings in Clarity
Link a Clarity Investment to the Integration Mappings instance
No Change Review the Tasks and Staff Modules of the Investment

Required Modifications in the Field/Workspace
Select Features in Clarity Investment of the Frictionless Accounting Mappings instance page
- Select Features in Clarity Object
of the Object Mapping Instance page
- Select Name in Clarity Field of
Field Mappings
Open an investment (e.g., `Features') in the Investments and then select an Investment Instance (e.g., Security preferences).
Ensure that Adriana Ramos has access rights to:
- Custom Investment - Navigate
- Features - Navigate
- Features - View All
- Follow these steps: 1. In the main menu, click
Investments. 2. Open the Investment (e.g.,
Features) and then click an Investment Instance (e.g., Security preferences). 3. Navigate to the Tasks module. You will observe that Financial Work Types (FWTs) have been converted into tasks.
4. Navigate to the Staff module. You will see that the user (e.g., Ramos) has been assigned in the Staff module.

How Rally Calculates Hours for Financial Work Types
When the Timesheet Integration job runs, Rally converts story points into timesheet hours in three steps:
1. Find & sum work items
- Rally totals the Plan Estimate of every user story that is In Progress or Accepted, carries a valid Financial Work Type, and is not deleted.
2. Derive work ratios
- Those points are grouped by Feature  Financial Work Type; each group's total is divided by the project's overall total to produce a percentage (work ratio).
3. Allocate team-member hours
- Rally multiplies every work ratio by each team member's available hours for the period. The resulting hours flow to Clarity timesheets.
Example
- A Mobile team completes 220 story points in January. Fifty points fall under the "Research" work type for the feature Integrate with Venmo, giving a work ratio of 23 % (50
- 220). A developer with 144 available hours will see 33 h (144
- 0.23) of "Research
- Integrate with Venmo" on her timesheet.


For more information about the specific calculations in Rally, see Frictionless Cost Accounting Calculations.


Conclusion
The Frictionless Cost Accounting process ensures the accurate tracking of time, costs, and resources across both Clarity and Rally systems.
TIP Watch the following video to learn about Frictionless Cost Accounting.

Frictionless Cost Accounting Calculations
The primary objective of the calculations is to analyze the work done within specific Rally Projects, categorized by financial work type, and calculate the proportion of work performed for each financial work type relative to the total work performed in that project. The goal is to understand how effort is distributed across different financial work types within a given project by Feature.
NOTE Rolling up data by portfolio item (Feature) includes the total count or points for all work items (user stories and defects) that are parented to each portfolio item. For a defect to be included in these roll-ups, it must be parented to the portfolio item, rather than being parented to a user story.
Step 1: Find and Sum the Relevant Work Items
The incoming query provides Rally with the following information:
- A list of Rally Projects
- Users allocated to those projects
- User allocation in hours
- Valid Financial Work Types
- A time period
Using this data, we identify all artifacts (User Stories and Defects) that meet the following criteria:
- Either: The artifact was in the In-Progress schedule state in specific projects (project_oid = ANY('{"12345","12346"}')) before the end of the time period. Or: The artifact was accepted between the start and end of the time period.
- The artifact has a Financial Work Type that is included in the list of valid types.
- The artifact contains a Plan Estimate other than NULL.
- The artifact is not in the recycle bin.
NOTE In Rally, Completed is an In-Progress state. Artifacts are not reported as Done until they reach the Accepted state.
The calculation method (specified in Clarity) determines whether the calculations are based on story points or story counts for the identified artifacts. For the story point method, we then create a sum of the Plan Estimate for each project requested. For the story count method, we create a count of all artifacts for each project requested.
Step 2: Calculate the Work Ratios
After the items are grouped by project and a total sum is created, Rally determines the portion of work applied to each Financial Work Type per Feature worked on in the time period.
Rally creates groups of items by Feature and then by Financial Work Type and sums the Plan Estimates for these groups.


Rally then divides these sums by the total sum for the project to determine the ratio for each feature's Financial Work Types.

Example 1 (Points)
This example considers the team (Rally Project) Mobile, and the calculation method uses story points.
- The sum of all work (Plan Estimate / Story points) done by team (Rally Project) Mobile = 220 story points.
- There is a group of work (User Stories / Defects under a Feature) where:
- Financial Work Type = Research
- Feature = Integrate with Venmo
- The sum of this work (Stories) = 50 story points
The work_ratio for this group would be 50 / 220 = 0.23 or 23%.
This means that 23% of the planned work in team (Rally Project) Mobile is attributed to Research work for the Feature, Integrate with Venmo.
Rally multiplies 23% against each team (Rally Project) member's hour allocation to determine the hours worked on Research work for Integrate with Venmo.
As a further example, consider the following two Clarity Team Investments with team member allocations.

Mobile Team (Staff Module)

Resource

Role

Amos, Cheryl Gillian, Erin McCarthy, John Miller, Randyl Total

Engineer Engineer Product Owner UX

Default Allocation 100% 50% 100% 100%

2025-01 Total Allocation Allocation


1,780


2025-02 Allocation
168 84 168 168 588

2025-03 Allocation
168 84 1648 168 588

API Team (Staff Module)

Resource

Role

Gillian, Erin Total

Engineer

Default Allocation
50%

2025-01 Total Allocation Allocation


2025-02 Allocation
84 84

2025-03 Allocation
84 84

NOTE Cheryl Amos is on vacation for 40 hours in January.
Erin Gillian is 50/50 on two teams: Mobile and API.
Rally consumes Clarity Team Investment allocation information, for the specified period, to calculate execution percentages:

Financial Work Type New Feature Development Research Research

Team (Project) Mobile Mobile Mobile

2025-01 Stories/Defects (points) 100 50 30

45% 23% 14%


Technical Debt

Mobile


Defect

Mobile


Total Mobile


Technical Debt

API


Total API


14% 4% 100%
100% 100%

NOTE The Financial Work Type is set at the Story level not the Feature level.
Rally uses the calculated execution percentages and automatically populates Clarity Timesheets: Time Period: 2025-01 Timesheet for: Amos, Chery

Feature (CIT) Integrate with Venmo Integrate with Venmo 2 Factor Authentication Alert Error Messaging Security Preferences Total on Timesheet Total to Allocate to Mobile team

Task (Financial Work Type) New Feature Development Research Research Technical Debt Defect

Time Period: 2025-01 Timesheet for: Gillian, Erin

01/01/2025 - 01/31/2025 65.45 32.73 19.64 19.64 6.55 144.00 144

Mobile Mobile Mobile Mobile Mobile

Feature (CIT) Integrate with Venmo Integrate with Venmo 2 Factor Authentication Alert Error Messaging Security Preferences Capacity Analysis Total on Timesheet Total to Allocate to Mobile team Total to Allocate to API team

Task (Financial Work Type) New Feature Development Research Research Technical Debt Defect Technical Debt

01/01/2025 - 01/31/2025 41.82 20.91 12.55 12.55 4.18 92.00 184.00 92

Mobile Mobile Mobile Mobile Mobile API

NOTE Clarity Team Investment ID and Team Resource ID in Clarity Database for Timesheet and Transactions.

Example 2 (Count) This example considers the team (Rally Project) Mobile, and the calculation method uses story count.
- The sum of all work (Plan Estimate / Story points) done by team (Rally Project) Mobile = 24 stories.
- There is a group of work (User Stories / Defects under a Feature) where:
- Financial Work Type = Research
- Feature = Integrate with Venmo
- The sum of this work (Stories) = 5 story points
The work_ratio for this group would be 5 / 24 = 0.208 or 20.8%.
This means that 20.8 of the planned work in team (Rally Project) Mobile is attributed to Research work for the Feature, Integrate with Venmo.
Rally multiplies 20.8% against each team (Rally Project) member's hour allocation to determine the hours worked on Research work for Integrate with Venmo.
As a further example, consider the following two Clarity Team Investments with team member allocations.

Mobile Team (Staff Module)

Resource

Role

Amos, Cheryl Gillian, Erin McCarthy, John Miller, Randyl Total

Engineer Engineer Product Owner UX

Default Allocation 100% 50% 100% 100%

2025-01 Total Allocation Allocation


1,780


2025-02 Allocation
168 84 168 168 588

2025-03 Allocation
168 84 1648 168 588

API Team (Staff Module)

Resource

Role

Gillian, Erin Total

Engineer

Default Allocation
50%

2025-01 Total Allocation Allocation


2025-02 Allocation
84 84

2025-03 Allocation
84 84

NOTE Cheryl Amos is on vacation for 40 hours in January.
Erin Gillian is 50/50 on two teams: Mobile and API.
Rally consumes Clarity Team Investment allocation information, for the specified period, to calculate execution percentages:

Financial Work Type New Feature Development Research Research Technical Debt Defect
Technical Debt

Team (Project) Mobile Mobile Mobile Mobile Mobile Total Mobile
API Total API

2025-01 Stories/Defects (count) 10 5 4 3 2 24
2 2

41.67% 20.83% 16.67% 12.50% 8.33% 100%
100% 100%


NOTE The Financial Work Type is set at the Story level not the Feature level.
Rally uses the calculated execution percentages and automatically populates Clarity Timesheets: Time Period: 2025-01 Timesheet for: Amos, Chery Total Working Days in January: 23


Feature (CIT)
Integrate with Venmo
Integrate with Venmo 2 Factor Authentication Alert Error Messaging Security Preferences Total on Timesheet Total to Allocate to Mobile team

Task (Financial Work Type)
New Feature Development Research Research Technical Debt Defect

Time Period: 2025-01 Timesheet for: Gillian, Erin

01/01/2025 - 01/31/2025 60.00

Per Day in Hours (Total Hours/Total Days)
60/23=2.61

Projects Mobile

30.00 24.00 18.00 12.00 144.00 144

30/23=1.30 24/23=1.04 18/23=0.78 12/23=0.52

Mobile Mobile Mobile Mobile

Feature (CIT)
Integrate with Venmo
Integrate with Venmo 2 Factor Authentication Alert Error Messaging Security Preferences Capacity Analysis Total on Timesheet Total to Allocate to Mobile team Total to Allocate to API team

Task (Financial Work Type)
New Feature Development Research Research Technical Debt Defect Technical Debt

01/01/2025 - 01/31/2025 38.33

Per Day in Hours (Total Hours/Total Days)

38.33/23=1.67

Mobile

19.17 15.33 11.50 7.67 92.00 184.00 92

19.17/23=0.83 15.33/23=0.67 11.50/23=0.5 7.67/23=0.33 92/23=4

Mobile Mobile Mobile Mobile API


NOTE Clarity Team Investment ID and Team Resource ID in Clarity Database for Timesheet and Transactions. Resource Workload Details
- January 2025 Cheryl Amos Total Working Days: 23 Standard Monthly Hours: 23
- 8 = 184 hours Vacation Taken: 40 hours


Net Available Hours: 184 - 40 = 144 hours Daily Allocation: 144
- 23 = 6.25 hours per day Cheryl Amos is expected to record a total of 144 hours in her January 2025 timesheet, with an average of 6.25 hours per working day after accounting for vacation time. Timesheet for: Cheryl Amos (Engineer) Time Period: Jan 20, 2025
- Jan 26, 2025 Status: Open Total Hours: 31.25 / 40.00

Feature (CIT)
Alert error messaging (FEA00000019) Implement 2 Factor Authentication (FEA00000027) Integrate with Venmo (FEA00000030)
Integrate with Venmo (FEA00000030) Security preferences (FEA00000002) Total (All Tasks)

Task (Financial Work Type)

Input Type Code

Technical Debt Billable (TEC1)

Research (RES1)

Billable

New Feature Development (NFD1)

Billable

Research (RES1)

Billable

Defect (DEF1) Billable

Charge Mon Code 20

Tue 21

Wed 22

Thu 23

Fri 24

Total

Develop 0.78 0.78 0.78 0.78 0.78 3.90

Develop 1.04 1.04 1.04 1.04 1.04 5.20

Develop 2.61 2.61 2.61 2.61 2.61 13.05

Develop 1.30 1.30 1.30 1.30 1.30 6.50 Develop 0.52 0.52 0.52 0.52 0.52 2.60
6.25 6.25 6.25 6.25 6.25

Resource Workload Details
- January 2025 Resource: Erin Gillian Total Working Days: 23 Standard Monthly Hours: 23
- 8 = 184 hours Vacation Taken: None Net Available Hours: 184 hours Daily Allocation: 8 hours per day Erin Gillian is expected to record a total of 184 hours in her January 2025 timesheet, based on a full-time schedule of 8 hours per working day with no planned vacation. Timesheet for: Erin Gillian (Engineer) Time Period: Jan 20, 2025
- Jan 26, 2025 Status: Open


Total Hours: 40.00 / 40.00

Feature (CIT)
Alert error messaging (FEA00000019) Capacity Analysis (FEA00000033) Implement 2 Factor Authentication (FEA00000027) Integrate with Venmo (FEA00000030)
Integrate with Venmo (FEA00000030) Security preferences (FEA00000002) Total (All Tasks)

Task (Financial Work Type)

Input Type Code

Technical Debt Billable (TEC1)

Technical Debt Billable (TEC1)

Research (RES1)

Billable

New Feature Development (NFD1)

Billable

Research (RES1)

Billable

Defect (DEF1) Billable

Charge Mon Code 20

Tue 21

Wed 22

Thu 23

Fri 24

Total

Develop 0.50 0.50 0.50 0.50 0.50 2.50

Develop 4.00 4.00 4.00 4.00 4.00 20.00

Develop 0.67 0.67 0.67 0.67 0.67 3.35

Develop 1.67 1.67 1.67 1.67 1.67 8.35

Develop 0.83 0.83 0.83 0.83 0.83 4.15 Develop 0.33 0.33 0.33 0.33 0.33 1.65
8.00 8.00 8.00 8.00 8.00 40.00


Sync Investments Between Clarity and Rally
This section contains the following topics:
- Select Clarity Investments to Sync with Rally
- Synchronize OKR Interim Targets and Actuals
- Synchronize Individual Investment On Demand
- Select Rally Investments to Sync with Clarity
Select Clarity Investments to Sync with Rally
Now that you have set up the integration and defined the relevant mappings, you can select which specific Clarity investments will sync with Rally. In this release, you can select specific Clarity projects, custom investments, and ideas to sync with Rally.
Follow these steps:
1. Log into Clarity. 2. Navigate to the relevant investment page and select the grid layout. 3. Use the column picker to add the Rally Object and Integration Mapping attributes to the grid. 4. Select the relevant integration mapping that you want to associate with the investment. 5. Execute the Synchronize Mapped Information Job.
After you run the Synchronized Mapped Information job to synchronize the data between Clarity and Rally successfully, the Rally Object field will be auto-populated.


Synchronize OKR Interim Targets and Actuals In the Clarity 16.1.1 and higher releases, you can synchronize interim Actual Values and Target Values between Clarity and Rally. That is:
- Clarity can send interim Key Results Actuals to Rally (Unique Dates with a Value associated with each date).
- Rally can send interim Key Results Actuals and Targets to Clarity (Unique Dates with a Value associated with each
date).
NOTE Some key points to remember are:
- For each Object, configure the integration to map Out of the box and your custom fields. Interim Actual
Values will support the following sync directions:
- Clarity to Rally
- Rally to Clarity
- Both
- Interim Target Values will support the following sync directions:
- Rally to Clarity
- If the added capability to synchronize Clarity and Rally Key Results interim Targets and Actuals is preferred, you must pick a single approach. Clarity's interim Key Results Actuals and Target objects can only serve a single master object.
- Actual Objects, Target Objects, and Fields do not require a mapping configuration. Synchronize Individual Investment On Demand In the Clarity 16.1.0 and higher releases, you can sync (with rally) individual investments on demand or the investment for which you have a responsibility with a click of an Action button. As a Clarity investment manager, you can be confident that your investments contain the most current information from Rally and is no longer dependent on Clarity's Synchronize Integration Mappings job to be executed by the administrator or wait for a scheduled update.

An end user `action' can be configured from a blueprint to sync a single Clarity Investment and its associations (sharing the same integration mappings value) with mapped Rally Portfolio Items.
- The Blueprint Action ties in with a configured process defined in Studio.
- The defined process ties to an investment type (e.g., Product Line).
- The defined process also ties in with the Synchronize Mapped Information job.

The above illustration is an example of the end user initiating an on-demand sync from a Parent Investment in Clarity. 1. The parent investment has a defined integration mappings value. 2. Represent the child investments for which a user is responsible, and each of them shares the same integration
mappings value. 3. Represents the resulting new portfolio items being created in Rally with the same Parent/child relationships having
been established. NOTE Some key points to remember are:
- Clarity end users can sync individual investments with Rally on demand
- Support for Clarity to Rally and Rally to Clarity sync directions are supported in the 16.1.0 release.
- Both sync directions are supported if an Object mapping includes the lowest level of the Rally Portfolio Item hierarchy (e.g., Feature). With this in place, the end-user Action will ensure a successful Parent-Child sync.
- Dependencies:
- A Classic process is configured to execute the Synchronize Mapped Information job.
- The process is configured for specific Integration Mappings and selected job parameters (e.g., Full Load)
- A Blueprint Action, using the defined process, is configured for a specific Investment type for use by end
users from the Investment Properties module. The parent (and child) investments are configured with the same Integration Mappings value.
- Unique Integration Mappings values can be established for Parent (and child) investments.
- A defined process, and associated end-user Action, may be configured for Integration Mappings `alpha'
- In some cases, an Integration Mappings value `beta' can be configured on a Parent (or child) investment. In this case, when the end user selects the Action, the process will initiate the Synchronize Mapped Information job using Integration Mappings `beta and override prior Integration Mappings `alpha' updates.
Select Rally Investments to Sync with Clarity You can create investments in Clarity associated with objects in Rally. Many customers have multiple teams that contribute innovative ideas that help develop the next generation of the product they develop. These teams use Rally to track their day-to-day work and create Rally Portfolio Items for these ideas. You can now use the Clarity-Rally integration to ensure that such portfolio items in Rally can have associated investments (ideas, projects, and custom investments) in Clarity. You can then use planning capabilities in Clarity such as Roadmaps and Hierarchies to understand the relationship between these Rally initiatives and existing investments in the organization. Follow these steps: 1. Log into Rally. 2. Navigate to the relevant Rally Portfolio Item. 3. Ensure you select the relevant mapping in the Integration Mappings drop-down list. 4. Ensure all the fields specified during the Field Mapping are populated. 5. Execute the Synchronize Mapped Information Job. 6. Open the relevant investments area in Clarity to view the newly created investment. The value of the Source field will
be set to Rally and the Rally Object ID field will be automatically populated. IMPORTANT Some key points to remember are:
- Depending upon the configured "Direction" (Rally to Clarity, Clarity to Rally, or Both), the Synchronized Mapped Information will overwrite mapped Clarity or Rally fields every time the job runs.
- All mandatory fields required to create Clarity investments should be included in field mappings.
- The Lookup Mapping object enhancement to support mapping Clarity lookup values with Rally `custom' lookup values is limited to the `Clarity to Rally' sync direction.
Run the Synchronize Mapped Information Job
This section contains the following topics:
- Run the Synchronize Mapped Information Job
- Review the Staging Table in Clarity

Run the Synchronize Mapped Information Job The Synchronize Mapped Information job in Classic PPM enables administrators to synchronize the mapped information between Clarity and Rally. Depending upon the configured direction and Sync Option, the job may perform the following operations:

Direction Both Clarity to Rally Clarity to Rally
Clarity to Rally Rally to Clarity Rally to Clarity
Rally to Clarity

Sync Option Update Create Create and Update
Update Create Create and Update
Update

The job will: 1. Synchronize data for mapped objects and fields when data changes are detected in either syste 2. Populate the respective staging tables.
If the mapped Object does not exist in Rally, this job: 1. Creates and populates mapped Rally objects and fields 2. Populates the To Rally Staging Table 3. Populates mapped Clarity Investments with their respective Rally Object ID.
If the mapped Object does not exist in Rally, this job: 1. Creates and populates mapped Rally objects and fields 2. Populates To Rally Staging Table 3. Updates Rally Objects (and Fields) tables in Clarity. In subsequent runs, this job performs the following actions: 1. Updates mapped Rally objects and fields 2. Populates To Rally Staging Tables 3. Updates Rally Objects (and Fields) tables in Clarity.
If the mapped Object exists in Rally, this job: 1. Updates mapped Rally objects and fields 2. Populates the To Rally Staging Tables 3. Updates Rally Objects (and Fields) tables in Clarity
If the mapped Object does not exist in Clarity this job: 1. Creates mapped objects and fields in Clarity 2. Populates Clarity Staging Tables 3. Populates mapped Clarity Objects with their respective Rally Object ID and records Rally as a s
If the mapped Object does not exist in Clarity, this job performs the same operations defined in the ` 1. Creates mapped objects and fields in Clarity 2. Populates Clarity Staging Tables 3. Populates mapped Clarity Objects with their respective Rally Object ID and records Rally as a s Some key points to remember are:
- When mapped field values are updated in Clarity (e.g., no change in Rally), the sync job updates
- The sync job compares mapped field values in both Clarity and Rally.
- In this scenario field values are not the same, the sync job updates the Clarity field value based
If the mapped Object exists in Clarity, this job 1. Updates mapped Clarity objects and fields 2. Populates the To Clarity staging table 3. Updates Rally Objects (and Fields) tables in Clarity

IMPORTANT You can configure the following parameters for the Synchronize Mapped Information Job to match your requirements:
- You can only process active Clarity Investments.
- Rally's ready state is not considered when syncing or processing Rally Portfolio Items.
- The Synchronized Map Information job includes a FULL LOAD option. If you select this check box, all the
records in Clarity and Rally that are associated with the integration mapping will be synchronized regardless of when both systems were last updated. This option is useful in case both systems are completely out of synchronization and you want to synchronize all records. If you clear the FULL LOAD check box, the job will run as an `Incremental' synchronization job option and process all records for data comparison that have been updated in the last 24 hours.
- You can have immediate feedback that Portfolio Items are successfully created in Rally through Last Sync Status, Last Sync Message, and Rally Formatted ID fields when either Clarity updates Rally or Rally updates Clarity.
- In the Clarity 16.1.1 and higher releases, Rally users have visibility that Portfolio Items or Objectives are originating from Clarity. That is, When Clarity's Synchronize Mapped Information job is executed, the Rally `Source' field' is automatically populated to indicate the items are sourced from Clarity. Note that the Source field is created, in Rally, after running the Import integrations Mapping job.
- In the Clarity 16.3.3 and higher releases, after you configure the mapping and run the Synchronize Mapped Information job, the Rally Formatted ID attribute in Clarity becomes a clickable hyperlink. This enhancement allows users to jump directly from Clarity to the associated Rally Portfolio Item in Rally, streamlining navigation and eliminating the need to manually search or copy/paste IDs. The linking experience is consistent with the Roadmap Name field used in the Roadmaps grid.
- Administrators must manually configure Field Mapping for the Rally Formatted ID in the integration
settings to enable synchronization.
- The hyperlink appears only after a successful synchronization with Rally.
- The sync populates the URL behind the Rally Formatted ID.
- Each subsequent sync refreshes the URL if there are updates.
- You can edit or delete the Rally Formatted ID:
- If edited manually, the underlying URL remains unchanged unless another sync is run.
- If the field is deleted manually, the hyperlink is also removed.
- The link behind the Rally Formatted ID is maintained by the sync job. Manual edits to the field do not affect the hyperlink unless the job is re-run.
- Field-level security behavior:
- If the attribute is set to Secure or Read-only, users cannot edit it (no pencil icon).
- If set to Edit, users can edit the text manually.
- Where you can see the clickable link:
- Grids, Boards, and Gantt views
- Details fly-outs
- Table widget in custom Canvas views
- Staffing workspace: Investments tab, Allocations by Investment, Assignments by Investment
- Hierarchies: grid, board, timeline, and fly-out views
- Project, Idea, Custom Investment Type (CIT), and Team Investment pages
- Other behaviors:
- Filters search on the plain text of the Rally ID, not the hyperlink.
- Exporting to CSV includes the Rally Formatted ID as a full URL next to the text.
- Linking does not apply to Objectives and Key Results (OKRs).
- Rally's Formatted ID is not synchronized automatically--it must be manually mapped by an
administrator in the integration settings.
Follow these steps:
1. Log into Clarity.

2. Click Home, Reports and Jobs, Jobs to open the Jobs tab. 3. Ensure you have selected Available Jobs in the drop-down list and open the Synchronize Mapped Information job. 4. Select the relevant Integration Mapping and click Submit to run the integration immediately.
After this job is successfully executed, Clarity automatically executes the Import Staging Tables job to move the data from the staging table to Clarity.
NOTE You can schedule the Synchronize Mapped Information to run at regular intervals. However, if you manually trigger the Synchronize Mapped Information job then the scheduled jobs will not execute concurrently.
The Clarity-Rally integration has been enhanced to ensure that the Synchronize Mapped Information job executing in a non-production environment will not update and corrupt the Rally production environment.
When you create an integration mapping, you can also define the Internal URL for Clarity. When you execute the job, Clarity will compare the value of the internal URL with the Clarity Server Information stored in the properties file. If Clarity, determines you are executing the job from an internal URL, it will not execute the job.
Review the Staging Table in Clarity Every integration mapping has associated To Rally and To Clarity staging tables in Clarity. The staging tables are only accessible to members of the PMO System Admin group. If you want to manually provide access to the staging table, you can use assign the following access rights to a user or group:
- <Integration Mapping Name> - Create
- <Integration Mapping Name> - Delete All
- <Integration Mapping Name> - Edit All
- <Integration Mapping Name> - View All
- <Integration Mapping Name> - Xog Access
In this release, you can use the Staging table to:
- Review all the data that is copied from Rally to Clarity and Clarity to Rally after the Synchronize Mapping Information job is successfully executed.
- Review the Error messages in case the data synchronization fails
Follow these steps:
1. Log into Clarity. 2. Click Administration and select the Integrations tab to open the Integrations page. 3. Open the relevant integration mapping and navigate to the To Rally or To Clarity tabs. You will only see the records in
this table if you have the relevant access rights. 4. Add the relevant columns to the grid layout to review the status of the records that have been processed. Some key
columns you can add are: a. Job Run ID b. Status c. Clarity Object d. Clarity Object Name e. Rally Object f. Rally Object g. Name h. Error Message

NOTE Some key points to remember are:
- The administrative user must log out and log in to view the Staging Tables.
- The staging table data is removed from Clarity every time the Synchronize Mapped Information job is run.
- After the Synchronize Mapped Information job is run, the user will be auto-granted access to the To Clarity
and To Rally tables.
- The Integration Mapping (view, edit, and delete) Global Access rights are automatically added to the PMO
System Administrator group. This back-end process enables access to the Staging Tables.
Things to Remember
Data Sync Flow for Rally Integration
When you run the Synchronize Mapped Information job after setting up the Rally integration, it checks the associated Clarity investments to see if the Rally Object field is updated.
- The Rally Object field is empty prior to Clarity creating a new Rally portfolio item. When the sync job is run, the Rally Object field for the relevant investment in Clarity is updated. The next time you execute the job, Clarity updates the relevant fields depending on your field mapping. The job also updates the relevant staging tables.
- If the Rally Object field is not empty, Clarity directly updates the relevant fields based on the display mapping. The job also updates the relevant staging tables.
Key Points to Consider While Leveraging the Integration
- Whenever a Clarity field is updated with the value from a mapped Rally field, the user who runs the Synchronized Mapped Information job is listed in the audit log.
- Customers can continue to use both the new Rally integration and the Rally Portfolio Item Hierarchy, Investments, or (Clarity) Timesheet integrations if warranted.
- If a customer has configured an "Agile" integration, there is no impact to that existing integration after the upgrade
- The new jobs (e.g., Import Integration Mappings, Synchronize Mapped Information, & Import Staging Tables) are set as incompatible with the old jobs (e.g., Synchronize Agile Central & Create Agile Central Investments) to prevent them from running simultaneously
- If the Import Integration Mapping job is not run after creating a new Integration Mappings instance, the Clarity and Rally Objects will not be available in their respective pull-downs
- If you create new custom attributes (in either Clarity or Rally), the Import Integration Mapping job must be run to ensure they are available in the field mapping grid
- Rally Fields Not Updating
- If a field in either system is governed by business logic, using that system as the target is not supported.
- Synchronize Mapped Information job only returns changes
- The first time the Synchronize Mapped Information job is run, Clarity and Rally are in sync
- Following the job run, a Clarity user updates the `% Complete' field (which is sourced from Rally)
- From a performance perspective, the next time the Synchronize Mapped Information job is run, since there has been no change in Rally, the system will not update the Clarity `% Complete' field and now Clarity and Rally are no longer in sync
- The Clarity `% Complete' field will be synced only when the mapped portfolio item is updated in Rally
- Until that point, these mapped fields will continue to be out of sync
- You can use the following options to troubleshoot issues synchronization issues:
- You can leverage the job log to troubleshoot Clarity and Rally data exchange.
- You can review the Clarity BG logs.
- You can also check synchronization errors on the staging tables.
- You can consider logging the following packages for troubleshooting:
- com.ca.ppm.integrations.jobs
- com.ca.ppm.integrations.systems
- com.ca.ppm.integrations.http.client


Map and Synchronize OKRs
Many organizations use Clarity as a system of record for maintaining and measuring their performance. This includes setting yearly objectives and documenting key results. Since different departments use different terminologies, so you can use custom objects or investments in Clarity to create and track objectives. You can then create a custom sub-object and use that to capture key results.

Finally, you can use the Clarity Connections to map Objectives and Key results in Clarity with Rally to ensure your business and engineering goals are in sync.
This section contains the following topics:
- Pre-Requisites for Mapping OKRs Between Clarity and Rally
- Create Objectives in Clarity
- Create Key Results in Clarity
- Define Object Mappings in Clarity
- Define Sub Object Mappings in Clarity
- Create Lookup Mappings
- Define Field Mappings in Clarity
- Select Clarity Objectives to Sync with Rally
- Select Rally Objectives to Sync with Clarity
- Run the Synchronize Mapped Information Job
- Review the Staging Table in Clarity

Pre-Requisites for Mapping OKRs Between Clarity and Rally You need to complete the following steps before you start mapping OKRs between Clarity-Rally. 1. Assign the Integration Mapping - Navigate access right to the administrators who will configure the Clarity-Rally
integration. Users with the Integration Mapping - Navigate right can view and access the Integrations tile on the Administration page. To learn more about this access right, see Access Rights documentation. 2. Ensure the latest version of the PMO-Accelerator content add-in is installed. With the latest version of the PMOAccelerator installed, Clarity will include the `Rally Object ID' and the `Integration Mapping' attributes for configuration in Projects, Ideas, and Custom Investments. 3. Ensure you have created an Integration Object in Classic PPM. To learn more about creating an integration object, see Setting Up the Clarity-Rally Integration. 4. Ensure you either have an existing integration mapping you plan to leverage or create a new integration mapping for managing OKRs using the Clarity connections capability. To learn more about integration mappings, see Create Mappings in Clarity and Rally. 5. Run the Import Integration Mapping job. The Import integration mapping job in Classic PPM enables Clarity to retrieve the portfolio item type objects and supported attributes from the configured Rally workspace. It also fetches the Milestones, Investment Categories, State, and Project lookups, and OKR information from Rally. Once imported, the objects and fields are available in the Rally Objects tab in Clarity. The job also populates the Integration Mapping dropdown menu list in Rally. . Create Objectives in Clarity
You can use the Custom Objects or the Custom Investments capability to create relevant objectives for your organization. Since custom objects and custom investments enable you to use your terminology, you can create objectives that are relevant to your organization. You can use the Starred feature to highlight OKRs solely managed for Clarity. To learn more about creating objects, see Create a New Custom Object.


Create Key Results in Clarity


You can use the sub-objects capability to create key results that are relevant for each objective. To learn more about creating key results, see Create Sub Objects in Clarity.
Define Object Mappings in Clarity

You can map selected Clarity custom objects and custom investments associated with your objectives to objectives in Rally. Example 1: Clarity to Rally Consider an example where an organization has finalized its strategy and used Custom Objects in Clarity to create Objectives. You can map these objectives to their counterparts in Rally. Example 2: Rally to Clarity

Many customers have multiple teams that contribute innovative ideas that help develop the next generation of the product they develop. These teams use Rally to track their day-to-day work and create objectives in Rally. You can now use the OKR integration to ensure that such objectives in Rally can have associated objectives in Clarity. Define Sub Object Mappings in Clarity
You can map selected Clarity custom sub objects associated with your objectives to Key Results in Rally. Follow these steps: 1. Log in to Clarity. 2. Click Administration and select the Integrations tab to open the Integrations page. 3. Open the relevant integration mapping and navigate to the Sub Object Mappings tab. 4. Click the Add Row icon and enter the following details
a. Name: Provide the name of the sub object mapping b. Rally Object: You can only see Rally Key Results c. Clarity Object: Select the Clarity Objects with configured custom Sub-Objects.


d. Direction: Select Clarity to Rally, Rally to Clarity or Both.


Create Lookup Mappings
The Import Integration Mappings job fetches the Milestones, Investment Categories, Date, and Project lookups from Rally and stores them in Clarity. These (4) dynamic lookups are now available as a part of the PMO Accelerator add-in and will be available to you when you install this add-in. The job also populates the Integration Mapping drop-down menu list in Rally.
You can now perform the following actions to map lookups:
- Leverage existing Rally Lookups imported into Clarity: Create custom attributes in Clarity that leverage the Rally Investment Categories, Rally Milestones, Rally Projects, and Rally States lookups. You can then use field mappings to map these custom attributes to the relevant lookups in Rally. For example, you can create a Clarity Project Milestone field that leverages the Rally Milestone lookup. You can then leverage Field Mappings to map the Clarity Project Milestone field to the Rally Milestone field in Rally.
- Use the Lookup Mapping tab to configure other lookups: You can use the Lookup Mapping tab to map single-value lookups in Clarity to custom lookups (also called drop-down lists) in Rally enabling data synchronization control. Let's consider a scenario where you have a custom lookup in Rally titled Business Risk and want to map it to the Business Operational Risk lookup in Clarity. You can now: a. Create a New Lookup mapping in Clarity to map the values between the Business Operational Risk lookup in Clarity and the Business Risk lookup in Rally. b. Create a field mapping between these lookup fields to ensure data is synchronized. You can specify the direction of the mapping as Clarity to Rally, Rally to Clarity, or Both.
When you update the value of the attribute on either system and run the Synchronize Mapped Information job, the field in other the other system will be automatically updated.
Define Field Mappings in Clarity
Defined field mappings specify how data is exchanged between Clarity investments/fields and Rally portfolio items/ fields. Field mappings are always associated with an object mapping. Consider the following object and field mapping techniques:
- Review the Data Type compatibility table to ensure you are mapping supported field types.
- The table is available on the Data Type Compatibility tab and can be accessed from the Integrations page.
- Specify the direction of data flow when you define the mapping.
- You can define a mapping where data flows from a field in Clarity to a field in Rally
- You can also define a mapping where data flows from a field in Rally to a field in Clarity.
- Bi-directional integration is supported by using the Both option in the Supported direction column. This means that values in Clarity and Rally will be synchronized with data changes in either of the systems. The "Both" option can only be used when you use Update in the Sync Option column.
- You cannot include the same field in multiple mappings.
- Select the relevant Sync Option.


Select Clarity Objectives to Sync with Rally


Now that you have set up the integration and defined the relevant mappings, you can select which specific Clarity objectives will sync with Rally. In this release, you can select specific Clarity objectives to sync with Rally.
1. Log in to Clarity. 2. Navigate to the objective and ensure you are in the grid layout. 3. Use the column picker to add the Rally Object and Integration Mapping attributes to the grid. 4. Select the relevant integration mapping that you want to associate with the objective. 5. Execute the Synchronize Mapped Information Job.
Select Rally Objectives to Sync with Clarity

You can create objectives in Clarity associated with objectives in Rally. Many customers have multiple teams that contribute innovative ideas that help develop the next generation of the product they develop. These teams use Rally to track their goals and create Rally OKRs for these ideas. You can now use the Clarity-Rally integration to ensure that such OKRs in Rally can have associated objectives in Clarity.

Run the Synchronize Mapped Information Job The Synchronize Mapped Information job in Classic PPM enables administrators to synchronize the mapped information between Clarity and Rally. Review the Staging Table in Clarity
Every integration mapping has associated To Rally and To Clarity staging tables in Clarity. The staging tables are only accessible to members of the PMO System Admin group. If you want to provide access to the staging table manually, you can use assign the relevant access rights to a user or group: In this release, the Staging Tables are updated to capture incoming Rally OKR data or outbound Clarity OKR data before processing and populating mapped Objects and Fields. Some other details captured are:
- Review all the data that is copied from Rally to Clarity and Clarity to Rally after the Synchronize Mapping Information
job is successfully executed.
- Review the Error messages in case the data synchronization fails.
NOTE Some key points to remember are:
- Clarity 16.0.3 does not ship with out-of-box objects or attributes for Objectives and Key Results. Customers
and partners will use Clarity Studio configuration capabilities to create Custom Objects or Custom Investments (and attributes) for Objectives. They can create custom sub-objects for Key Results.
- Rally Objective `State' lookup values may differ across Objective hierarchy levels. A warning message will be displayed if a Clarity user attempts to update all Objective Types with the same Objective `State' value.
- The Create or Create and Update actions support the Clarity to Rally direction. You cannot create new records in Clarity based on Rally fields. This behaviour is consistent for all capabilities associated with the Clarity-Rally integration.
- In some areas, such as Object and Field mappings, you will see the label "External" instead of "Rally." This issue will be fixed in upcoming releases.
- If a Rally text field has images or tables, its data will not be synchronized with Clarity in this release.
