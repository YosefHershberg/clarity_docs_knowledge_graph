# Configure Resources, Roles, and Team Resources

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[06 - Resource Management/_MOC Resources|Resource Management]]
- Related domains: [[12 - Administration/_MOC Administration|Administration]]
- Canonical notes:
- [[06 - Resource Management/Configure Resources Roles Teams]]
- [[12 - Administration/Blueprints/Team Investments Blueprint]]
- [[12 - Administration/Blueprints/Resources Blueprint]]
- [[06 - Resource Management/Resource Directory]]
- [[12 - Administration/Data Warehouse/Configure DWH]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: View License Type and Last Login Details (#view-license-type-and-last-login-details)
- H3: Update the Attributes in the Grid (#update-the-attributes-in-the-grid)
- H2: Secure Attributes Associated with the Resource Object (#secure-attributes-associated-with-the-resource-object)
- H2: API Enable Second and Third-Level Custom Sub-Objects (#api-enable-second-and-third-level-custom-sub-objects)
- H3: Calendar Module for Resources (#calendar-module-for-resources)
- H2: Edit Resources and Roles (#edit-resources-and-roles)
- H3: Setup View Options (#setup-view-options)
- H3: Managing Records By Using the Grid Layout (#managing-records-by-using-the-grid-layout)
- H3: View Investments Associated with Resources (#view-investments-associated-with-resources)
- H3: Editing the Resource Property Fields (#editing-the-resource-property-fields)
- H3: Working with Widgets (#working-with-widgets)
- H2: Manage Resource Availability Calendars (#manage-resource-availability-calendars)
- H3: Overview of Base Calendar (#overview-of-base-calendar)
- H3: Overview of the Calendar Module (#overview-of-the-calendar-module)
- H3: Setting up the Calendar Layout (#setting-up-the-calendar-layout)
- H3: Terminology of the Resource Calendar Module (#terminology-of-the-resource-calendar-module)
- H3: Update a Single Day Using the Details Panel (#update-a-single-day-using-the-details-panel)
- H3: Update Multiple Days By Using the Right-Click Action Menu (#update-multiple-days-by-using-the-right-click-action-menu)
- H3: Update Working Day Shifts Using the Actions Menu (#update-working-day-shifts-using-the-actions-menu)
- H3: Update Working Day to Non-Working Day (#update-working-day-to-non-working-day)
- H3: Update Non-Working Day to Working Day (#update-non-working-day-to-working-day)
- H3: Reset to Base Calendar (#reset-to-base-calendar)
- H3: Overview of Access Rights (#overview-of-access-rights)
- H2: View Team Resources (#view-team-resources)
- H3: Prerequisites (#prerequisites)
- H3: View the List of Team Resources (#view-the-list-of-team-resources)
- H3: Edit a Team Resource (#edit-a-team-resource)
- H3: Setup View Options (#setup-view-options)

The Resources workspace in Clarity serves as a comprehensive hub for managing your organization's most valuable asset--your people. This centralized workspace empowers project managers, resource managers, and stakeholders to effectively view, edit, and optimize Resources, Roles, and Team Resources within a unified interface that streamlines workforce planning and allocation decisions.

> [!ATTENTION]
> Resources must be created in Classic PPM to be visible in the Resource Workspace.

The Resources workspace delivers robust capabilities for resource management, including advanced filtering, conditional formatting, and interactive widgets that provide real-time insights into resource availability, allocation patterns, and capacity planning. The workspace supports sophisticated time-scaled value (TSV) metrics, enabling you to analyze resource allocation across fiscal or calendar periods. This helps you make data-driven staffing decisions with configurable views for weeks, months, quarters, or years.

Whether you're tracking individual contributor availability, managing role-based assignments, or coordinating team resource deployments, the Resources workspace provides the tools and visibility needed to optimize your workforce utilization while maintaining the flexibility to adapt to changing project demands.

To learn more about editing Resources and Roles, see Edit Resources and Roles in Clarity. To learn more about Team Resources, see View Teams Resources.

This section contains the following topics:
- View License Type and Last Login Details
- Secure Attributes Associated with the Resource Object
- API Enable Second and Third-Level Custom Sub-Objects

## View License Type and Last Login Details

Use the **License Type** and **Last Login** attributes to monitor user access and activity in Clarity.

> [!TIP]
> You can access the License Type and Last Login attributes directly on the Resource object in Classic PPM. Both attributes are also available in the Resources and Users grids in Clarity.

### Update the Attributes in the Grid

1. **License Type**
- Run the new job **Populate User License Type** to update license type information in the grids.
- The job runs automatically every day but can also be executed on demand.
- If you run the job without specifying parameters, Clarity automatically fills in missing license types for all users.
- License Type appears blank only when a user has no access rights.

2. **Last Login**
- Clarity updates the Last Login date automatically when a user logs in or when you impersonate that user.
- If a user has never logged in, the Last Login field does not appear in the grid.
- The displayed time zone reflects the user's browser settings, not Classic PPM time zone settings.
- The field records the user's actual login time and does not change due to impersonation.

> [!NOTE]
> Some of the key points to remember are:
> - Use these attributes for filtering and data security in the grids.
> - Both attributes are Data Warehouse-enabled and included in the Data Provider, allowing you to create reports that include license type and last login information.

Follow these steps:

1. Log into Clarity.
2. Open the relevant page in Clarity.
3. In the grid, configure the following fields from the Columns panel:
- **License Type**
- **Last Login**

## Secure Attributes Associated with the Resource Object

You can secure the attributes associated with the Resource object by using the **Attributes Grid**. The administrator can use the Attributes grid to grant and revoke edit/view access at the group level. Administrators can also use the Attributes grid to modify the attribute names and associate tooltips with the attribute.

## API Enable Second and Third-Level Custom Sub-Objects

You can now API-enable second and third-level custom sub-objects for the Resource object to make them available in Clarity. You can then API-enable custom attributes associated with the custom sub-objects. After you API-enable the objects and attributes, they are available in the:
- Resource Blueprint configuration
- Attributes grid

### Calendar Module for Resources

Clarity now includes a Calendar module for resources, enabling administrators and resource managers to view and manage resource calendars directly within the new user experience. This enhancement eliminates the need to navigate back to Classic PPM for calendar management, streamlining workflows, and improving visibility into resource availability.

The Calendar module brings comprehensive calendar management capabilities to Clarity, allowing users to:
- View resource calendars in an intuitive monthly view with interactive navigation.
- Change base calendars and manage resource-specific exceptions.
- Configure working days, non-working days, and shift schedules.
- Visualize availability with multiple display options.
- Reset calendars to base calendar settings.

## Edit Resources and Roles

The Resources workspace allows you to view and edit Resources and Roles. Remember that users must have proper rights to view or edit resources. Also, users cannot create or delete resources. You can continue to leverage Classic PPM to create new resources.

You can also add Totals and per-period metrics (TSVs) for **Availability**, **Resource Remaining Availability**, and **Resource Total Allocation** attributes to the Resources and Roles pages. To learn more about creating and editing teams, see Create Teams in Clarity.

This section contains the following topics:
- Setup View Options
- Editing the Resource Property Fields
- Managing Records By Using the Grid Layout
- Working with Widgets

### Setup View Options

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
- Example: If an Investment has a duration of 12 months; the page is configured to display 6 months. If Sum of Periods is selected then the Totals column will sum up the 6 months displayed in the layout.
- **Grand Total** displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout.
- Example: If an Investment has a duration of 12 months; the layout is configured to display 6 months. If Grand Totals is selected then the Totals column will sum up the 12 months of the investment.
7. **Per-Period Metrics** grant you the ability to select specific data from the below options for display within the grid:
- **Total**: Exclusively shows the 'Totals' field without the per-period metric fields in the grid.
- **Periods**: Solely displays the per-period metric fields without the 'Totals' field in the grid.
- **Total and Periods**: Simultaneously presents the per-period metric fields and the 'Totals' field in the grid.

> [!IMPORTANT]
> You have to select the per-period metric attributes from the Column Panel.

8. **Select Total and Period Columns Separately**: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. By default, the value is set to Off.

> [!NOTE]
> When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.

> [!IMPORTANT]
> When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
> - It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
> - The Columns panel will only display one set of per-period metrics.

9. **Show Total Row**: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu.

The following table shows the different types of aggregation supported for various types of attributes:

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TS |
|------------|----------------------------------|---------|------|---------|-----|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | Yes | Yes | Yes | Yes |
| Min/Max | Yes | | | | |
| None | Yes | Yes | Yes | Yes | Yes |

10. Select the **Show Indicator on Non-Default Values** toggle to display visual indicators when the default values of the following attributes are updated:
- Default allocation percentage
- Grand Totals or Totals column
- Allocation Start and Finish date columns
- Individual allocation per-period metrics

This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.

11. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
12. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
13. Click **X** to close the View Options panel.
14. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget to quickly cycle through the data for various periods.

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

### Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Edit Data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the **Conditional Formatting** dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the **Column Panel** to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the **+** or **-** option to shift the values in the date field.
- Use the **Drag Functionality** to populate data.
- Drag up to three column headers to use the **Group By** capability.
- Use the out-of-the-box charting experience directly embedded within Clarity.
- Use the **Bulk Delete** capability in the Common Grid to delete multiple records.
- Export the common grid data to a CSV file (up to 250,000 rows).
- Use the **Search** bar to filter values based on the name or ID.
- Use **Filters** to quickly identify records that match your selection criterion.
- Use the **Details Panel**, available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using configurable visual widgets.
- Save and modify multiple views and share them with other users.

> [!NOTE]
> To learn more about the grid layout and associated capabilities, see:
> - Clarity Grids
> - Conditional Formatting
> - Widgets
> - Details Panel
> - Saved Views
> - Filters

### View Investments Associated with Resources

You can now view resource-specific staffing allocation data directly from the Investments module on the Resources workspace. You can add the investment module to the Resource blueprint. You can then click a resource in the Resources Workspace and use the Investment tab to view investments associated with the resource.

Some key benefits of viewing resource-specific allocation data directly from the Staff tab and Resources workspace are:
- **Unified Resource View**: Resources can be viewed alongside their investment allocations, eliminating the need to switch between the Resources and Staffing workspaces.
- **Streamlined Decision Making**: Managers can make informed resource allocation decisions with immediate access to the investment context and its financial implications.

> [!NOTE]
> Some key points to remember are:
> - Administrators need to add the Investments module to the Resource blueprint to ensure users can view investments associated with each resource.
> - Users can utilise the Resource Summary mode to view allocations or usage for the resource as histograms. These histograms utilise colour thresholds to indicate whether a resource is over-allocated, under-allocated, or operating within optimal capacity.
> - You can click a resource in the Staff tab and view investment allocations on the Investments tab in the Details panel. You can expand the tab and use the Resource Summary mode.
> - The Resource Manager does not automatically have access to all investments allocated to the Resource. You need the following access rights to view investment information in the Resources workspace:
>   - Resource - Management - Navigate
>   - Resource - View
>   - Project, Idea, Custom Investment, or Team Investment - View
> - When you click a user in the Resource Directory, you will automatically land on the Investments module configured for the Resources blueprint. If the module is not configured, the user will land on the first tab within the Blueprint.

### Editing the Resource Property Fields

Clarity now includes new fields that let you edit users' financial properties and resource calendars without having to navigate to Classic PPM.

#### Resource Property Attributes

| Attributes | Resource | Note |
|-----------|----------|------|
| Base Calendar | Resource | Editable on the Resource Properties with `Resource - Edit`. Restrict access through Field Level Security (FLS) |
| Last Login | Resource | Read-Only. Available for Data Warehouse. Not available for Audit Trail |
| License Type | Resource | Read-Only. Available for Data Warehouse. Not available for Audit Trail. Run a Job: Set the License Type attribute on Resources based on their access rights and security group memberships. Recommended to run after any changes to access rights or group memberships. |
| Financially Active, Financial Department, Financial Location, Transaction Class, Resource Class, Vendor, Target Billing Rate, Target Billing Rate Currency, Target % Billing, Expense Reimbursement Currency | Resource (Financial fields) | Available for Audit Trail, Data Warehouse, and Blueprint Rules. Not listed in Classic PPM, Object: Resource - Attributes page. Need `Resource - Edit` access right to update fields. Restrict access through Field Level Security (FLS) or Blueprint Rules |
| Employee Country Code, Job Title, Street 1, Street 2, Street 3, City, State, Postal Code, Home Phone Number, Work Phone Number, Mobile Phone Number, Fax, Pager, URL | Resource (Contact Information fields) | Available for Audit Trail, Data Warehouse, and Blueprint Rules. Not listed in Classic PPM, Object: Resource - Attributes page. Need `Resource - Edit` access right to update fields. Restrict access through Field Level Security (FLS) or Blueprint Rules |

> [!NOTE]
> Some key points to remember are:
> - The Standard Resource module has been updated. After you upgrade, you will need to edit custom blueprints to add the relevant fields.
> - Clarity now includes new system rules in the Standard blueprint, which are automatically added to the custom blueprints. These rules mimic Classic functionality related to different types of resources and data relationships.

### Working with Widgets

You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. In this release, the following widgets are available:
- **Number Tile**
- **Pie**
- **Bar**
- **Progress Ring**
- **Target** (Roadmaps and Staffing Workspace)

Some of the key actions you can perform with widgets are:
- Use the **Show Widgets** button to display the widgets toolbar.
- Use the **Manage Widgets** button to open the Add Widgets dialog box to add existing widgets from the My Widgets section and the Widget library.
- Create a **New Widget** from the Add Widgets dialog box.
- Enhance your data analysis by using the **Interactive Filtering** feature on widgets, enabling deeper insights through drill-down capabilities.

> [!NOTE]
> To learn more about Widgets, see Widgets.
> The Filter Widgets don't work when you have Resource OBS in the filter. A banner message appears: "Some widgets cannot be displayed because some attributes are unavailable."

## Manage Resource Availability Calendars

Clarity now includes a Calendar module for resources, enabling administrators and resource managers to view and manage resource calendars directly within the new user experience. This enhancement eliminates the need to navigate back to Classic PPM for calendar management, streamlining workflows, and improving visibility into resource availability.

Some key benefits that the Calendar module provides over Classic PPM are:
- **Visual clarity**: Icons clearly indicate which days differ from the base calendar, making exceptions immediately visible. You can also get visibility into shifts across all working days in the calendar. In Classic PPM, you had to drill into each day to see the shifts.
- **Flexible display options**: Three display modes (None, Changes Only, All) allow users to focus on relevant information.
- **Contextual workflow**: Right-click context menus provide focused, task-oriented actions.
- **Modern interface**: Responsive design with docked panels and persistent state improves usability.

### Overview of Base Calendar

A base calendar in Clarity serves as a foundational template that defines the standard working and non-working days, work shifts, and holidays for an organization. It establishes the core schedule from which other calendars, such as resource and role calendars, inherit default values.

This calendar is critical for calculating full-time equivalent (FTE) availability, resource capacity, demand, and allocation within the system. The base calendar can be customized to reflect different working patterns for countries, departments, or seasons, and it influences how resource availability and project scheduling are managed in Clarity.

You need to associate each base calendar with a resource to set default availability based on working-day shifts and non-working days for time off by using the **Base Calendar** attribute. You need to have the **Resource - Edit** access right to edit the Base Calendar field for non-expense Resources and Roles. This is enforced by a system business rule on the Resources blueprint.

### Overview of the Calendar Module

The Calendar module brings comprehensive calendar management capabilities to Clarity, allowing users to:
- View resource calendars in an intuitive monthly view with interactive navigation.
- Change base calendars and manage resource-specific exceptions.
- Configure working days, non-working days, and shift schedules.
- Visualize availability with multiple display options.
- Reset calendars to base calendar settings.

> [!NOTE]
> In Clarity, the 'Base Calendar' field is controlled through Resource - Edit access. It's recommended that you place the user in a group with Secure Edit Access (FLS) for the field on the Clarity Administration Attributes page.

### Setting up the Calendar Layout

You can use the following options to set up the calendar layout to meet your requirements.
- **Show Weekend**: Determines whether to show weekends in the layout.

> [!NOTE]
> The Show Weekend toggle controls whether weekends are displayed on the resource calendar. The Locale Setting for a user will impact the first day of the week in the new Resource Monthly Calendar. The first day of the week, based on locale settings, varies significantly across different regions and cultures.
- **Display Data**:
- **All** - Displays all Base Calendar, Resource Exceptions, and Resource Calendar workday Shifts and the 'Non-Working Day' Category label.
- **Changes only** - Displays only the Resource Exceptions and Resource Calendar workday Shifts and non-working days that are 'changed' from the Base Calendar setting.
- **None** - Does not display the 'Non-Working Day' Category label and workday Shifts from the associated Base Calendar, or from changes for Resource Exceptions and Resource Calendar settings.

### Terminology of the Resource Calendar Module

When updating resource calendar details in the Resource Calendar module, be aware of the following terminology.

| Term | Description | Visual Impact |
|------|-------------|--------------|
| **Category** | Indicates if the day is a working day or a non-working day. Working days have shifts that are used to compute availability. | Working days = White, Non-Working Days = Grey |
| **Resource Exception** | A 'Resource Exception' change occurs when the configuration differs from the Resource's associated Base Calendar configuration for a specific date. This applies to Shifts or when the working date differs from the non-working date. | An orange diamond with a warning sign |
| **Resource Calendar Changes** | A 'Resource Calendar' change occurs when the configuration differs from the Resource's associated Base Calendar configuration for a weekday, such as changing shifts or marking all Fridays as non-working days across all months (past and future). | A yellow circle with a warning sign |

### Update a Single Day Using the Details Panel

You can use the Details panel to update a resource's calendar for a single day. You can edit any date shown on the page for the prior month, the current month, and the next month, since you are only changing one date.

Some key actions you can perform are:
- Change the category to a non-working day
- Update shifts for the user for that day
- Reset all changes so that you revert to the base calendar

Follow these steps:

1. Click **Resources**, select a resource, and click **Calendar** to open the Calendar module.
2. Click the relevant date and click **Details** to open the Details panel. You can also right-click the date and select **Open Details** to open the Details panel.
3. Click **Category** to switch between Working and Non-Working days.
4. Update the shift details for this day if needed.
5. Click **Reset to Base** if you want to revert to the base calendar.

### Update Multiple Days By Using the Right-Click Action Menu

You can perform the following actions by using the right-click action menu:
- **Open Details Panel**: This action is enabled for any date shown on the page for the prior month, current month, and next month. Changes made in the Details panel are classified as a 'Resource Exception' for that specific date.
- **Update Shifts**: This action is enabled for a working day within the current month. Clarity displays a modal with options to create 'Resource Exceptions' for specific dates within the current month or to create general 'Resource Calendar' changes for a weekday across the calendar (past and future).
- **Change to Non-Working Day**: Action enabled for a working day within the current month.
- **Change to a Working Day**: Action enabled for a non-working day within the current month.
- **Reset to Base**: Action enabled for any date within the current month.

Follow these steps:

1. Click **Resources**, select a resource, and click **Calendar** to open the Calendar module.
2. Right-click the relevant date, then select the option that best meets your requirements.

### Update Working Day Shifts Using the Actions Menu

You can use the **Update Shifts** option to display a modal with options to create 'Resource Exceptions' for specific dates within the current month or to create general 'Resource Calendar' changes for a weekday across the calendar (past and future).

When you apply shift changes to **Resource Exceptions**, you can:
- Make the shift changes for discrete dates within the current month only
- Apply the shift changes to only the selected date
- Apply the shift changes to the same day of the week for only the current month
- Apply the shift changes to all working days only within the current month

When you apply shift changes to the **Resource Calendar**, you can:
- Make the shift changes across the entire resource's calendar
- Apply the shift changes across the same day of the week for the entire calendar, past and future dates
- Apply the shift changes across all working days for the resource's entire calendar, past and future dates

Follow these steps:

1. Click **Resources**, select a resource, and click **Calendar** to open the Calendar module.
2. Right-click the relevant date, then select **Update Shifts**.
3. Update the shift details.
4. In the **Apply to** drop-down list, select from **Resource Exceptions** or **Resource Calendar**, and select the relevant radio button to specify the scope of change.
5. Click **Save** to save your changes.

### Update Working Day to Non-Working Day

You can use the **Change to Non-Working Day** option to display a modal with options to create 'Resource Exceptions' for specific dates within the current month or to create general 'Resource Calendar' changes for a weekday across the calendar (past and future).

When you apply changes to **Resource Exceptions**, you can:
- Change the category from a working day to a non-working day for specific dates within the current month only
- Set the category to a non-working day to only the selected date
- Set the category to a non-working day to the same day of the week for only the current month
- Set the category to a non-working day to all working days only within the current month

When you apply shift changes to the **Resource Calendar**, you can:
- Change the category from a working day to a non-working day across the entire resource's calendar
- Set the category to a non-working day across the same day of the week for the entire calendar, past and future dates

Follow these steps:

1. Click **Resources**, select a resource, and click **Calendar** to open the Calendar module.
2. Right-click the relevant date, then select **Change to Non-Working Day**.
3. In the **Apply to** drop-down list, select from **Resource Exceptions** or **Resource Calendar**, and select the relevant radio button to specify the scope of change.
4. Click **Save** to save your changes.

### Update Non-Working Day to Working Day

You can use the **Change to Working Day** option to display a modal with options to create 'Resource Exceptions' for specific dates within the current month or to create general 'Resource Calendar' changes for a weekday across the calendar (past and future).

When you apply changes to **Resource Exceptions**, you can:
- Change the category from a non-working day to a working day for specific dates within the current month only
- Set the category to a working day to only the selected date
- Set the category to a working day to the same day of the week for only the current month
- Set the category to a working day to all working days only within the current month

When you apply shift changes to the **Resource Calendar**, you can:
- Change the category from a non-working day to a working day across the entire resource's calendar
- Set the category to a working day across the same day of the week for the entire calendar past and future dates
- Set the category to a working day across all non-working days for the resource's entire calendar past and future dates

Follow these steps:

1. Click **Resources**, select a resource, and click **Calendar** to open the Calendar module.
2. Right-click the relevant date, then select **Change to Working Day**.
3. In the **Apply to** drop-down list, select from **Resource Exceptions** or **Resource Calendar**, and select the relevant radio button to specify the scope of change.
4. Click **Save** to save your changes.

### Reset to Base Calendar

You can use the **Reset to Base** option to display a modal with options to create 'Resource Exceptions' for specific dates within the current month or to create general 'Resource Calendar' changes. Regardless of the date this modal was launched, you can revert all changes.

When you apply changes to **Resource Exceptions**, you can:
- Clear all 'Resource Exception' type of changes for only the selected date
- Clear all 'Resource Exception' type of changes for the same day of the week for only the current month
- Clear all 'Resource Exception' type of changes only within the current month

When you apply shift changes to the **Resource Calendar**, you can:
- Clear all 'Resource Calendar' type of changes across the same day of the week for the entire calendar past and future dates
- Clear all 'Resource Exception' type of changes across all working days for the resource's entire calendar past and future dates

Follow these steps:

1. Click **Resources**, select a resource, and click **Calendar** to open the Calendar module.
2. Right-click the relevant date, then select **Reset to Base**.
3. In the **Apply to** drop-down list, select from **Resource Exceptions** or **Resource Calendar**, and select the relevant radio button to specify the scope of change.
4. Click **Save** to save your changes.

### Overview of Access Rights

The following summarizes the key access rights you need to use the calendar module and edit resource calendars.

| Access Right(s) Granted | Classic PPM 'Calendar' tab | Clarity 'Calendar' Module | Clarity Resource attribute |
|------------------------|--------------------------|--------------------------|--------------------------|
| Resource - Navigate | | | |
| Resource - Edit (Includes permission to edit calendar) | EDIT: 'Base Calendar' field, EDIT: Resource's calendar | EDIT: Resource's calendar | EDIT: 'Base Calendar' field |
| Resource - View PLUS Resource - Edit Calendar (No Global access, Only OBS or Instance) | EDIT: 'Base Calendar' field, EDIT: Resource's calendar | EDIT: Resource's calendar | VIEW: 'Base Calendar' field |
| Resource - View | VIEW: 'Base Calendar' field, VIEW: Resource's calendar | VIEW: Resource's calendar | VIEW: 'Base Calendar' field |
| Resource - Self (Auto) (Does NOT include permission to edit calendar) | VIEW: 'Base Calendar' field, VIEW: Resource's calendar | VIEW: Resource's calendar | VIEW: 'Base Calendar' field |

> [!NOTE]
> Some key points to remember are:
> - The Locale Setting for a user will impact the first day of the week in the new Resource Monthly Calendar.
> - Base Calendars are created and managed by administrators. Create base calendars that represent common working patterns in your organization (regional holidays, shift patterns, departments). Align resources to appropriate base calendars to reduce the need for resource-specific exceptions.
> - Administrators can associate any 'Base Calendar' with a resource to set default availability based on working-day shifts and non-working days for time off. Users with `Resource - Edit` access rights can update the 'Base Calendar' field for non-expense Resources and Roles within the Resources workspace.
> - Clarity now includes a standard Business Rule that will allow the user with `Resource - Edit` access to update the 'Base Calendar' field for Non-Expense Resources and Roles. If only specific roles should change the base calendars, configure FLS to restrict the Base Calendar field to those roles.
> - Use the **Audit Trail** feature to track base calendar changes for compliance and analysis.
> - Distinguish between users who can view calendars and those who can edit them using the `Resource - Edit Calendar` permission. You can also use business rules to hide the calendar module.

## View Team Resources

You can use the **Teams** tab in the Resources to access the team resource information. You can quickly search through your teams by the team name or resource ID. You can update team resources as well.

This section contains the following topics:
- Prerequisites
- View the List of Teams
- Update a Team Resource
- Setup View Options
- Managing Records By Using the Grid Layout
- Working with Widgets

### Prerequisites

Ensure that you have the following access rights to use this feature: **Resource Management - Navigate** allows users access to the Resource management page in Clarity. The user will only be able to view information for teams to which they have access.

### View the List of Team Resources

You can view a list of team resources by navigating to the Resources workspace and opening the Teams tab.

Follow these steps:

1. In Clarity, click **Resources** to open the Resources workspace.
2. Click the **Teams** tab to view the list of existing team resources.
3. Click a record and use the **Details** panel to learn more about the team.

### Edit a Team Resource

You cannot add or remove the team resources. However, you can edit the team resource information such as properties, certifications, and resource calendar.

Follow these steps:

1. In the main menu, click **Resources**. The Resources page is displayed.
2. Click the **Teams** tab to open the Team Resources page.
3. Click a specific team resource from the grid to open it.
4. You can navigate to relevant tabs to edit the information.

### Setup View Options

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. **Show Total Row**: Turn on the toggle to show total row. By default, the value is set to Off.

The following table shows the different types of aggregation supported for various types of attributes:

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TS |
|------------|----------------------------------|---------|------|---------|-----|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | Yes | Yes | Yes | Yes |
| Min/Max | Yes | | | | |
| None | Yes | Yes | Yes | Yes | Yes |

5. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
6. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
7. Click **X** to close the View Options panel.
