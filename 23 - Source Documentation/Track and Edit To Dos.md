# Track and Edit To Dos

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[03 - Projects/_MOC Projects|Projects]]
- Canonical notes:
- [[03 - Projects/Audit]]
- [[03 - Projects/Autoschedule]]
- [[03 - Projects/Baselines]]
- [[03 - Projects/Canvas Dashboard]]
- [[03 - Projects/Checklists]]
- [[03 - Projects/Create a Project]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Accessing the New To Do's Page (#accessing-the-new-to-dos-page)
- H2: Overview of the To Dos Workspace (#overview-of-the-to-dos-workspace)
- H2: Using the Associated Objects Grid on the To Dos Page (#using-the-associated-objects-grid-on-the-to-dos-page)
- H2: Managing Attachments for a To Do (#managing-attachments-for-a-to-do)
- H3: Upload an Attachment (#upload-an-attachment)
- H3: View an Attachment (#view-an-attachment)
- H3: Delete an Attachment (#delete-an-attachment)
- H2: Setup View Options (#setup-view-options)
- H2: Managing Records By Using the Grid Layout (#managing-records-by-using-the-grid-layout)
- H2: Working with Widgets (#working-with-widgets)

Clarity's revamped Track and Edit To Dos capability centralizes every actionable item assigned to you -- across projects, custom investments, tasks, risks, issues, and change requests -- into a single, filterable workspace. By combining the power of Clarity's dynamic grid, granular access rights, and new visual widgets, the feature streamlines personal work management and provides at-a-glance insight into workload, priorities, and progress metrics.

This section contains the following topics:
- Accessing the New To Do's Page
- Overview of the To Dos Workspace
- Using the Associated Objects Grid on the To Dos Page
- Managing Attachments for a To Do
- Setup View Options
- Managing Records By Using the Grid Layout
- Working with Widgets

## Accessing the New To Do's Page

Clarity has introduced the following global access rights in this release:
- **To Do - Navigate**
- **To Do - Create - All**
- **To Do - Delete - All**
- **To Do - Edit - All**
- **To Do - View - All**

> [!NOTE]
> These access rights are assigned to the Viewer license type in Clarity.

You need to have the **To Do - Navigate** right to see the new To Dos page. You will then be able to see all the To Do's that have been assigned to you across all the investments in Clarity.

## Overview of the To Dos Workspace

The To Do Workspace now has the following pages:
- **All**: Shows all the To Dos except personal checklists
- **Investments**: Shows all the To Dos associated with investments
- **Tasks**: Shows all the To Dos associated with Tasks
- **Risks, Issues, Changes**: Shows all the To Dos associated with Risks, Issues, and Changes

## Using the Associated Objects Grid on the To Dos Page

The To Dos grid is also referred to as the associated objects grid because, while the grid is primarily associated with viewing and editing To Do's, you can also use it to view information such as tasks and investment details that would help you accurately plan and complete work. You can use the To Do's grid to review common attributes across all investments or specific to individual investments.

Let's consider an example where you have multiple To Dos assigned to you across projects and custom investments. In such a scenario, you can add the following fields to the grid to help you make the right decisions:
- Attributes associated with To Dos such as **Name**, **Due Date**, **Owner**, and **Completed**.
- Attributes associated with Tasks such as **% Complete**, **ETC**
- Attributes associated with the Common Investment object such as **Corporate Priority** and **Manager**.
- Attributes associated with all the investments (Projects and Custom Investments) where you have To Dos.

## Managing Attachments for a To Do

### Upload an Attachment

**Follow these steps:**

1. Open **To Dos** in Clarity.
2. In **Columns**, check the **Attachment** field.
3. Click the **Edit** icon in the Attachment column for a To Do.
4. Click the **Upload File** icon in Attachment.
5. Select a file from the local machine and click **Open**.

> [!NOTE]
> You can only upload ten files for a To Do. If you try to upload more than ten files, an error message appears: "Uploading more than 10 files is not allowed".

> [!WARNING]
> You can only upload one file at a time for a To Do.

### View an Attachment

**Follow these steps:**

1. Open **To Dos** in Clarity.
2. Click the **Edit** icon in the Attachment column for a To Do.
3. Click on the uploaded file name to download and view it.

### Delete an Attachment

**Follow these steps:**

1. Open **To Dos** in Clarity.
2. Click the **Edit** icon in the Attachment column for a To Do.
3. Click the **Delete** icon in Attachments to remove the uploaded file from the list.

## Setup View Options

**Follow these steps:**

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

**Remember:** Some of the key points to remember while using the grid are:
- You can use the **Assigned Resources** filter to view To Dos for specific users.
- To Dos are implemented as a Studio Object but cannot be leveraged in Classic PPM.
- The Data Warehouse uses the new To Dos tables.
- To Dos stock attributes are **Name**, **ID**, **Owner**, **Due Date**, and **Completed**.
- The To Dos ID field supports auto-numbering.
- The To Dos object does not support the ability to create Sub-Objects.
- You can star various To Do's to mark them as a favourite.
- You can create custom attributes for the To Dos object in Clarity.
- The To Dos Object is not enabled for use with BPM processes.
- You cannot create To Dos from this page.
- The To Dos Due Date has no limitations and can fall outside an investment's Start and Finish Dates.
- When a To Dos is copied over from a template, Clarity populates the To Dos Due Date with whatever is in the Due Date field (e.g., blank or actual) before copy.
- You can secure attributes such as **Agile Planned Start** associated with the abstract investment object. Since this attribute is shared between the abstract investment object and concrete investment object (project, custom investments), you need to:
- Secure it as the abstract investment object level (Investment Abstract object and Financial Abstract object)
- Secure it for individual concrete investment objects
- If you secure the Agile Planned Start for the abstract financial object and projects but don't secure it for custom investments, you will see the Agile Planned Start for custom investments in the grid.

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
