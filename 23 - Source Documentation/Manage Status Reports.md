# Manage Status Reports

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[03 - Projects/_MOC Projects|Projects]]
- Canonical notes:
- [[03 - Projects/Status Reports]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Audit Module (#audit-module)
- H2: Overview (#overview)
- H2: Verify Prerequisites (#verify-prerequisites)
- H2: View and Edit the Status Reports (#view-and-edit-the-status-reports)
- H2: Setup View Options (#setup-view-options)
- H2: Right-click Context Menu (#right-click-context-menu)
- H2: Latest Attribute in the Report Grid (#latest-attribute-in-the-report-grid)
- H2: Managing Records By Using the Grid Layout (#managing-records-by-using-the-grid-layout)
- H2: Bulk Export of Status Reports (#bulk-export-of-status-reports)
- H2: Working with Widgets (#working-with-widgets)

## Audit Module

**Follow these steps:**

1. Open the relevant workspace for which the Audit module has been configured in associated blueprint.
2. Click **Audit**. You can leverage the configurable grid toolset utilized throughout Clarity:
- Column configuration
- Fly-out configuration
- Saved views
- Robust filtering
- Group By
- Export to CSV

> [!IMPORTANT]
> Some key points to remember are:
> - The Audit module includes a Standard View with (1) filter for `Changed Date` to improve the overall user experience. You may have very large amounts of audit data, which will require a longer than expected period to return a result set when NO filters are used. You cannot remove this filter. However, you can modify the values.
>   - Changed Date: = 10 Days Before To Current Date
> - You must close and reopen the Details Flyout to apply Global Date setting options to the Record field.
> - There is a difference in behavior when comparing how the Parent Object information is presented in Classic and Clarity. In Clarity, when you filter to display Sub-Object details (for a Risk as an example), the Parent information is populated. However, in Classic, you must select the Parent Object (such as Project), and the sub-object (or Risk) audit information is included.
> - **Resource Attribute**: When enabling the Resource attribute on the Assignment object for Audit, ensure the change, insert, and delete options are configured in Classic. When the proper Audit configuration is in place, you can see the Insert and Delete operations indicating a resource has been replaced on an assignment.
> - In Clarity 16.1.1, the following capabilities are not supported in the Clarity Audit grid:
>   - Sort using the Attribute column.
>   - Display (total) scalar values (for example, allocations) using configured setting for FTE, Hours, or Days (vs. seconds).
>   - Ability to configure the Audit module for Plans.
>   - Include audit information for the stock sub-sub objects (e.g., Assignments, To Dos) and custom sub-sub objects in the Audit module. Workaround: View audit details for these objects under Clarity > Administration > Audit.

## Overview

For an investment manager, investment status reporting is one of the most critical components of effective investment management. By reporting investment status on a periodic basis, you can ensure that your teams stay focused on their work and also ensure the success of investments throughout the entire investment lifecycle.

Investment status reporting:
- Facilitates effective communication
- Establishes a repeatable process on what has been accomplished
- Measures how the team is performing
- Documents what actions are necessary to implement and mitigate risk
- Highlights where the team should focus on correcting problems and should maintain the progress necessary to meet or exceed customer expectations

The **Status Reports** module provides you with a cross-object workspace that gives the flexibility to manage Status Reports for all investment types (projects, ideas, and custom investments) in Clarity. The workspace gives you the ability to edit or delete status report attributes from this workspace, provided you have the appropriate access rights. You can configure the columns to retrieve data from all objects where the status report is created. You can preview and publish multiple status reports in PDF format. You can download the same PDF and share it with the Investment stakeholders. All the business rules defined on the parent object blueprint are honored.

This section contains the following topics:
- Verify Prerequisites
- View and Edit the Status Reports
- Setup View Options
- Right-click Context Menu
- Latest Attribute in the Report Grid
- Managing Records By Using the Grid Layout
- Bulk Export of Status Reports
- Working with Widgets

## Verify Prerequisites

Before you begin using the feature, ensure that your administrator implements the following configuration details:
- Ensure that your administrator has configured the **STATUS** module using blueprints.
- You need to have **Status Reports - Navigate** to access the Status Reports workspace along with Status Reports global rights.

## View and Edit the Status Reports

You can view and edit the status reports associated with all the investments in the Status Reports workspace.

**Follow these steps:**

1. In the main menu, click **Status Reports**. The Status Reports page is displayed.
2. Click the **Name** of the Investment to navigate to the respective investment.

> [!NOTE]
> On the Investment page, a link will be available to navigate back to the Status Reports.

3. Click the **Status** module to view the status reports.
4. Except for read-only fields, you can edit the fields in the grid based on the access rights provided. Automatically, the values will be updated in the Reports tab of the Investment.
5. Click **Report** to view the list of current and prior status reports.
6. Except for read-only fields, you can edit the fields in the grid based on the access rights provided.

> [!IMPORTANT]
> Some key points to remember are:
> - Based on your Investment access rights, you can either view, edit, or delete status reports directly from the Status Reports Workspace.
> - Object names will appear in the Columns flyout only if at least one status report is created in one of the object's instances.
> - The cross-object workspaces do not support Aggregated Calculated Attributes (ACA), Calculated Attributes, Formula Attributes, and Virtual Attributes.
>   - However, **Overall Status** (as a calculated attribute) is an exception and WILL be available in both the Column Panel and Configurable Filtering.

## Setup View Options

**Follow these steps:**

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. **Show Total Row**: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu.

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

## Right-click Context Menu

You can right-click a cell on a row to view a context-sensitive menu. You can use this context-sensitive menu to:
- **Open Details**: Opens the details fly-out.
- **Delete Row**: The selected row gets deleted from the grid.

> [!NOTE]
> When you delete a row (or status report) from the grid, the specific status report will be deleted in the respective investment.
- **Star**: You can star various investments to mark them as a favorite.
- **Chart Range (beta)**: Clarity creates a chart using the data in the grid. To learn more about using the Chart Range (beta) option in the grid, see Create a Chart.

## Latest Attribute in the Report Grid

The Reports tab includes a `Latest` check box attribute to indicate the most recent record, where `Report Status` has been set to `Final` in Clarity.

> [!NOTE]
> The `Latest` attribute does not dynamically update. You have to refresh the page to apply field edits within the Reports tab.

## Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- **Edit Data** in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- **Format** a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the **Column Panel** to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the **+** or **-** option to shift the values in the date field.
- Use the **Drag Functionality** to populate data.
- Drag up to three column headers to use the **Group By** capability. Then, view the data in the grid as rows of logical groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Use the **Bulk Delete** capability in the Common Grid to delete multiple records.
- Export the common grid data to a CSV file. The Classic PPM user interface supports the export of up to 25,000 rows to CSV file. In this release Clarity supports the export of up to 250,000 rows to CSV files.
- Use the **Search** bar available to filter values based on the name or ID.
- Use **Filters** to quickly identify records that match your selection criterion. The advanced filtering capability allows you to define complex filter conditions.
- Use the **Details Panel**, which is available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using a series of configurable visual widgets.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views with other users.

> [!NOTE]
> To learn more about the grid layout and associated capabilities, see:
> - Clarity Grids
> - Conditional Formatting
> - Widgets
> - Details Panel
> - Saved Views
> - Filters

## Bulk Export of Status Reports

You can select and export multiple status reports to a PDF file so that you can share it with the investment stakeholders. All selected status reports are included in a single PDF file, and each status report will start on a new page. The single PDF output file can contain Status Reports (with report status Draft, Final, or Latest) from Projects, Ideas, and Custom Investments.

**Follow these steps:**

1. In the main menu, click **Status Reports**. The Status Reports page is displayed.
2. Select the checkboxes against the status reports that you want to export.
3. Click **Export to PDF**. The combined status report is displayed.
4. Select the size of the PDF output. Following are the available options:
- Letter
- Legal
- Tabloid
- A4
- HD Display (1920 pixels)
- Laptop (1440 pixels)
- Tablet (1024 pixels)
- Fit to Content
5. Select the orientation of the PDF output:
- Portrait
- Landscape
6. Select a view from the **View** drop-down.

> [!NOTE]
> If a default view is in an unsaved state, the view drop-down will not be populated in the PDF preview mode. Views listed in the preview mode of bulk export for status reports will only include views that are saved and recommended.

7. Click **Download** to start the export operation. The export activity will start, and you can see a banner while the export operation is running.

> [!NOTE]
> - The bulk export operation runs in the background and is executed by the job called **Bulk PDF Export**.
> - Job detail provides information about which status reports were exported, report setting, and any failed report information.

8. Once the PDF is ready, you can download the file using the notification icon. Click the notification icon and then click the file to save the PDF file on your local system or open it by using the relevant readers/browsers.

## Working with Widgets

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

You can create the following widgets in this release. Each widget supports distinct operations such as Count, Sum, and Average. You can also specify the color of the widget and select the relevant display format (number or percentage).
- **Number Tile Widget**: Displays a specific number based on the widget definition and filter criterion.
- **Pie Widget**: Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- **Bar Widget**: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- **Progress Ring Widget**: Displays a ring with a number based on the widget definition and filter criterion.
- **Target (Roadmaps and Staffing Workspace)**: Displays targets either as goals or constraints on the number and money attributes of the relevant objects.

> [!NOTE]
> To learn more about Widgets, see Widgets.
