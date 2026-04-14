# Working with Pages

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[04 - Roadmaps/_MOC Roadmaps|Roadmaps]]
- Related domains: [[05 - Hierarchies/_MOC Hierarchies|Hierarchies]], [[10 - Pages and Objectives/_MOC Pages Objectives|Pages and Objectives]]
- Canonical notes:
- [[10 - Pages and Objectives/Working with Pages]]
- [[10 - Pages and Objectives/Working with Objectives]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Access Rights to Work with Pages (#access-rights-to-work-with-pages)
- H2: Accessing Pages (#accessing-pages)
- H2: Setup View Options (#setup-view-options)
- H2: Configure Canvas to add Table Widgets (#configure-canvas-to-add-table-widgets)
- H2: Configure Widgets in Canvas (#configure-widgets-in-canvas)
- H2: Setup Layout in the Canvas (#setup-layout-in-the-canvas)
- H2: Working with Action Item Widget (#working-with-action-item-widget)
- H3: Action Item Tabs (#action-item-tabs)
- H3: Available Actions (#available-actions)
- H2: Pages Overview for Administrators (#pages-overview-for-administrators)
- H3: To Dos Widget (#to-dos-widget)
- H2: Audit Module for Pages (#audit-module-for-pages)
- H3: Audit Grid Column Names (#audit-grid-column-names)
- H3: Verify Prerequisites (#verify-prerequisites)
- H3: Setup View Options (Audit) (#setup-view-options-audit)
- H3: View Audit Details (#view-audit-details)

The Pages workspace in Broadcom Clarity provides a streamlined, centralized environment where users can access a tailored collection of Clarity or external application pages. Unlike traditional navigation, this workspace allows you to access the information you need without having to drill into individual projects or object instances. By leveraging this flexible structure, organizations can quickly surface relevant content--such as key dashboards, actionable reports, or integrated third-party pages--all from a unified and user-friendly location.

At the core of the Pages workspace is the Canvas functionality, which empowers users to design their workspace experience. Through Canvas, you can add and arrange a variety of widgets--such as tables and charts--to visualize and interact with data from multiple sub-objects, including tasks, risks, issues, or to-do lists, all consolidated on a single page. The layout is easily customizable using drag-and-drop tools, allowing users to create grid-like displays, resize widgets, and adapt the workspace to meet evolving business needs. This flexibility ensures that everyone, from project managers to executives, can access the insights and tools that matter most to their roles, promoting more informed decision-making and efficient workflows.

This section contains the following topics:
- Access Rights to Work with Pages
- Accessing Pages
- Setup View Options
- Configure Canvas to add Table Widgets
- Configure Widgets in Canvas
- Setup Layout in the Canvas
- Working with Action Item Widget

## Access Rights to Work with Pages

Ensure that you have the following access rights to use this feature:
- **Page - Create**: Allows user to create Pages in Clarity.
- **Page - Creator (Auto)**: Allows the Page creator to view, edit and delete the Page in Clarity.
- **Page - Delete**: Allows user to delete specific Pages in Clarity.
- **Page - Delete - All**: Allows user to delete Pages in Clarity.
- **Page - Edit**: Allows user to view and edit specific Pages in Clarity.
- **Page - Edit - All**: Allows user to view and edit all Pages in Clarity.
- **Page - Navigate**: Allows user access to the Pages in Clarity. The user will only be able to view information for Pages to which the user has access.
- **Page - View**: Allows user to view specific Pages in Clarity.
- **Page - View - All**: Allows user to view all Pages in Clarity.

## Accessing Pages

Follow these steps:

1. In Clarity, select **Pages**.
2. Select the relevant page to open it.
3. Select the relevant module on the page to open it.

> [!NOTE]
> Some key points to remember while using Pages are:
> - Every page is associated with a blueprint. To learn more about blueprints for pages, see Pages: Configure Blueprints.
> - Classic PPM includes the new studio object called "Page".
> - Includes Instance, Global, and OBS access rights.
> - Attributes in Page can be secured using Field Level Security.
> - Pages cannot be seen in Classic PPM.
> - You cannot define sub-objects for the Page object.
> - Channels within a blueprint are limited to the same governor limit of 15.
> - In Classic PPM the "Page" object has the event enable flag. This is standard object configuration, but processes will not be supported with the Page object.
> - When setting security you will see two "Page" objects listed. One refers to the Classic PPM portlet page, and the other to the Clarity page.

## Setup View Options

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. **Show Total Row**: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.

The following table shows the different types of aggregation supported for various types of attributes:

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TS |
|---|---|---|---|---|---|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | | | | |
| Min/Max | Yes | | | | |
| None | Yes | | | | |

5. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
6. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
7. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

## Configure Canvas to add Table Widgets

You can configure a Canvas defined in Pages Blueprint to include table-type widgets to view data across multiple sub-objects on a single page. These table widgets allow you to display a grid-like layout based on the selected sub-object. By default, Canvas will be blank and needs to be configured to add widgets.

Using the Canvas layout, you can:
- Add widgets for the following sub-objects in the Canvas layout:
- Tasks
- Risk
- Issues
- Changes
- To Dos
- Modify the canvas by dragging the available widget or field to the canvas. The canvas will display grey shading on the area where the selected widget/field will be dropped.
- Change the Widgets layout at any time, when in configure mode, and save it as part of the saved view.
- Remove widgets from the canvas.
- Resize widgets in the canvas.

Follow these steps:

1. In Clarity, select **Pages**.
2. Select a relevant page to open it.
3. Select the relevant canvas module on the page to open it.
4. Click **Configure**. A list of widgets enabled within the canvas appears under the Configure Canvas panel.
5. Drag and drop the required widgets onto the canvas layout. You can add each table widget multiple times to the same canvas. However, you can only add up to 8 widgets including one Action Items widget.
6. Click **Done** to save the changes. You can now view data across multiple sub-objects on a single page.

> [!NOTE]
> Some of the key points to remember are:
> - Based on the widgets enabled within the canvas, you can drag and add them to the canvas layout.
> - You can add each table widget multiple times to the same canvas. However, the total number of widgets is limited to eight (7 table widgets + 1 Action Item widget). A counter is displayed to track how many times a table widget is added to the canvas. If you want to add more than 8 table widgets, you can create another Canvas.
> - A maximum of 10 columns can be added to a table widget.
> - Table widgets will show up to 25 rows per page.
> - The widgets layout is saved as part of the Saved View.
> - Each widget setting is saved as part of the view.
> - You can modify the canvas by dragging the available widget or field to the canvas. The canvas will display grey shading on the area where you will drop the selected widget/field.
> - You cannot have one filter across all widgets when defining widgets in Canvas. Each widget must have its filter.
> - Sub-object widgets do not show the parent's view.

## Configure Widgets in Canvas

You can configure a table widget that has been added to the canvas by hovering on it. Each widget will have its own Search box and Configure button. Note that the Search box and the Configure button on the table widget are visible only when hovering on the table widget.

For configuring a table widget, you can:
- Configure to add or remove the columns displayed in the table widget. You can add a maximum of 10 columns in a table widget.
- Resize columns in the widgets.
- Edit data in the widgets. When editing data, you can only view objects for which you have permission.
- Review and act on process-based action items using the Action Item widget. For more information, see Process Action Item Widget.

Follow these steps:

1. In Clarity, select **Pages**.
2. Select a relevant page to open it.
3. Select the relevant canvas module on the page to open it.
4. Hover on the required table widget and click the **Configure** button. A dialog is displayed for you to configure the table widget.
5. In the configuration dialog, you can:
   a. Rename the table widget name.
   b. Define widget filter using the **Add Filter** box.
   c. Define widget column layout using the list of available columns in the right panel.
6. Click **Done** to save the changes.

> [!NOTE]
> Some of the key points to remember are:
> - A maximum of 10 columns can be added to a table widget.
> - Table widgets will show up to 25 rows per page.

## Setup Layout in the Canvas

You can configure the column layout in Canvas with the following options:

1. 4-Columns
2. 6-Columns
3. 8-Columns

Follow these steps:

1. Open an investment.
2. Select the relevant canvas module on the investment to open it.
3. Click **Configure**.
4. Click the **Layout** tab in the left panel.
5. Select the column layout based on your requirement:
   a. 4-Columns
   b. 6-Columns
   c. 8-Columns

> [!NOTE]
> When you change the layout in the canvas, the following changes occur:
> 1. If the column size increases, the layout retains the previous column size and adds new columns on the right-hand side.
> 2. If the column size is decreased, the layout adjusts the widgets in the right-most columns below all the other widgets.

> [!NOTE]
> **Known Issue:** The UI text indicates that PDF export is available for 4-column and 6-column layouts. However, Canvas does not offer an export to PDF option. This will be corrected in the upcoming patch of Clarity.

## Working with Action Item Widget

Along with the table-type widgets, you can also add an Action Item widget that can be consumed in the Canvas to track the progress of projects and to help ensure that a project is complete and on time. This capability is already available in Classic PPM.

The Action Item widget displays:
- The process-based reminders about work that you (logged-in user) assign to yourself or others and that others assign to you. These are color-coded based on the action item priority. You can review and act on process-based action items.
- **Object Type** and **Instance Name** it pertains to, regardless of whether it is in the Open, Pending, or Closed tab. Instance Name is linkable for Investments but not to their Sub-Objects. You can use this link to navigate to the first Module of Investment as defined in the Blueprint.

### Action Item Tabs

The Action Item widget has three tabs:
- **Open**: Action items that are awaiting the user's action.
- **Pending**: Action Items that have been acted by the user but are pending with other users.
- **Closed**: Actions completed.

### Available Actions

Actions available are: **Approved**, **Rejected**, and **Approved With Conditions**.

> [!NOTE]
> If only three actions are available, all will be shown as individual buttons. If more than three actions are possible, then the first two are displayed, and the **More** menu will have additional actions. You will see your selected text in the Closed tab instead of the action buttons.

The action item displays the subject and the first two lines of the description. You can click the action item subject to view the remaining description, the selected action, and other users that the action is awaiting. The action item card will also count the number of reviewers.

> [!NOTE]
> Some of the key points to remember are:
> - Acting on the action item will display the toast message with the status change, and the action item card will be removed from the open tab.
> - Action Items card moved to the Closed tab will show the user's action and who took the last action.
> - Action Items that have been acted on by the user but are pending on others will be listed under the Pending tab.
> - The Action Item Instance Name is not linkable for Sub-Objects; it is only linkable for Master Objects. For Sub-Objects, the text will be in black italics.
> - The action item card will display the same information as other tab, along with the action taken by the user.
> - The action button allows the user to change their action if needed.
> - Action Item cards within the widgets cannot be resized.
> - The closed tab of the Action Item widget will display actions up to a year old.
> - Search or sorting capabilities are not available for Action Items.
> - Manually created action items are not displayed in the Action Item widget.
> - The action item does not display the due date.

## Pages Overview for Administrators

Administrators can now define a collection of pages in Clarity. It provides a single place to access desired Clarity or external application pages without being inside an object instance. This allows you to leverage the Channel functionality outside the object instance. Ensure that you have the **Page - Navigate** access right to access this page.

Every page is associated with a blueprint. You can create a copy of the blueprint and edit it to suit your goals. Some other key points you need to remember about pages are:
- Classic PPM includes the new studio object called "Page" which includes Instance, Global, and OBS access rights.
- Attributes in the Page object can be secured using Field Level Security.
- Pages cannot be seen in Classic PPM.
- You cannot define sub-objects for the Page object.
- When defining security you will see two "Page" objects listed. One refers to the Classic PPM portlet page, and the other to the Clarity page.

### To Dos Widget

In this release, you can now add the To Dos widget to the canvas in addition to the existing widgets. You can use the Page Blueprint canvas module to enable the To Dos widget. Once enabled, the new widget will be available in the defined existing blueprints. You can configure a To Dos widget that has been added to the canvas by hovering on it. Configure to add, remove, or rearrange the columns to be displayed in the widget. You can add a maximum of 10 columns.

## Audit Module for Pages

The Pages workspace in Broadcom Clarity allows administrators and users to create, configure, and access collections of pages that present data from Clarity or external sources in a single, customizable interface. These pages can include various widgets, such as tables and charts.

You can now leverage the Auditing capability in Clarity in the Pages workspace. Some key benefits of leveraging auditing in the Pages workspace are:
- **Change Tracking and Accountability**: Users with the appropriate access rights can create, edit, and delete pages. Each of these actions can significantly impact what information is available to users and how it is presented. Auditing provides a detailed record of who made changes, what was changed, and when, ensuring accountability for modifications to shared workspaces.
- **Security and Compliance**: Since Pages can aggregate sensitive or business-critical data from multiple sources, it is important to track any changes for compliance and security purposes. Auditing helps organizations demonstrate control over access and modifications, which is crucial for ensuring regulatory compliance and effective internal governance.
- **Troubleshooting and Error Resolution**: If a page's configuration is changed in a way that disrupts business processes or removes critical data, the audit trail allows administrators to quickly identify what changed and who made the change. This supports faster troubleshooting and restoration of the intended setup.

### Audit Grid Column Names

The Audit module grid column names used in Clarity are different from those in Classic PPM. You can filter for all API-enabled Objects, but are limited to those that are audit-enabled through Classic PPM.

| Clarity Audit Name | Classic Audit Name |
|---|---|
| Name | Object ID |
| Object Name | Object * |
| Record | Name |
| Parent | Parent Name |
| Changed Date | Date |
| Attribute | Attribute |
| Attribute ID | Attribute Code |
| Changed By | Changed By |
| Operation | Operation |
| Old Value | Old Value |
| New Value | New Value |
| Record ID, Parent ID, Grandparent, and Grandparent ID | Not visible in Classic |

This section contains the following topics:
- Verify Prerequisites
- Setup View Options
- View Audit Details

### Verify Prerequisites

Before you begin using the feature, ensure that you have the following permissions:
- You must have **Audit Trail - View - All**, which allows you to view Audit Trail for any object in Classic and Audit for any object in Clarity.
- As an administrator, if you want to grant access rights to the users to access both the Audit tile and the Audit module, then:

| Location | Access Right |
|---|---|
| Administration > Audit tile | Administration - Audit - Navigate |
| Audit Module | Audit Trail - View - All |

### Setup View Options (Audit)

You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
5. In **Type**, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
- **Periods**: Set the Start Period and End Period. The application adjusts the time periods based on the value that you selected for periods.
- **Duration**: Set the Start Period and indicate the number of periods (Duration), with an optional offset from the start.
6. Define if you want to see **Sum of Periods** or **Grand Totals** in the Totals column.
- **Sum of Period** displays the Total (e.g., Actual Cost) for the number of periods in the layout.
- Example: If an Investment has a duration of 12 months and the page is configured to display 6 months, the Totals column will sum up the Actual Cost for the 6 months displayed in the layout.
- **Grand Total** displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout.
- Example: If an Investment has a duration of 12 months and the layout is configured to display 6 months, the Totals column will sum up the Actual Cost for the 12 months of the investment.
7. **Per-Period Metrics** grant you the ability to select specific data from the below options for display within the grid:
- **Total**: Exclusively shows the 'Totals' field without the per-period metric fields in the grid.
- **Periods**: Solely displays the per-period metric fields without the 'Totals' field in the grid.
- **Total and Periods**: Simultaneously presents the per-period metric fields and the 'Totals' field in the grid.

> [!IMPORTANT]
> You have to select the per-period metric attributes from the Column Panel.

8. **Select Total and Period Columns Separately**: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.

> [!NOTE]
> When you enable **Select Total and Period Columns Separately**, Clarity disables the Per-Period Metrics setting in View Options.

> [!IMPORTANT]
> When you switch from ON to OFF for the **Select Total and Period Columns Separately** option, the following happens:
> - It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
> - The Columns panel will only display one set of per-period metrics.

9. **Show Total Row**: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.

The following table shows the different types of aggregation supported for various types of attributes:

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TS |
|---|---|---|---|---|---|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | | | | |
| Min/Max | Yes | | | | |
| None | Yes | | | | |

10. Select the **Show Indicator on Non-Default Values** toggle to display visual indicators when the default values of the following attributes are updated:
- Default allocation percentage
- Grand Totals or Totals column
- Allocation Start and Finish date columns
- Individual allocation per-period metrics

    This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.

11. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.

12. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.

13. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

14. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget to quickly cycle through the data for various periods. Your Start Period and End Period settings will update the widget and as you cycle through periods in your widget, the Start Period and End Period will also be updated.

> [!NOTE]
> Some of the key points to remember are:
> - You can secure and relabel the TSV attributes using Field Level Security. While TSV attributes can be relabeled, they cannot be secured.
> - You can use the TSV totals in widgets.
> - You can include the custom TSV data in the page.
> - You can edit the custom TSV data in the page.
> - You cannot add TSV totals to the Details Panel.
> - Forecast data will only be displayed in TSV if a detailed cost plan has been created for the investment.
> - Financial data is read-only in the page.
> - If you are using the board layout, you can configure columns, swimlanes, sort, and color.
> - If you are using the timeline layout, you have the Color By option.

### View Audit Details

The Audit module is available for all Blueprints and all API-enabled Objects. The Audit module is available for:
- Agreements
- Custom Investment Types
- Custom Objects
- Level 3 Sub-Objects: OOTB Sub-Objects and Custom Sub-Objects
- Hierarchies
- Ideas
- Pages
- Projects
- Roadmaps
- Plans
- Cost Plan and Cost Plan Details
- Budget Plan and Budget Plan Details
- Benefit Plan and Benefit Plan Details
