# Working with Reporting

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[11 - Reporting/_MOC Reporting|Reporting]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[11 - Reporting/Working with Reports]]
- [[11 - Reporting/Report Designer/Creating Your First Report]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Investment Reports]]
- [[11 - Reporting/Report Designer/Drill Down Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Financial Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/PMO Admin Reports]]
- [[18 - Advanced Reporting/PMO Accelerator Reports/Portfolio Reports]]
- [[11 - Reporting/Exporting Reports]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Audit Grid Limitations (Clarity 16.1.1) (#audit-grid-limitations-clarity-1611)
- H2: Working with Reporting (#working-with-reporting)
- H3: Key Components of the Reporting Workspace (#key-components-of-the-reporting-workspace)
- H3: Prerequisites for the Reporting Workspace (#prerequisites-for-the-reporting-workspace)
- H3: Recent Enhancements to the Reporting Workspace (#recent-enhancements-to-the-reporting-workspace)
- H2: Working with Data Providers (#working-with-data-providers)
- H3: Out-of-the-Box (OOTB) Data Providers (#out-of-the-box-ootb-data-providers)
- H3: Data Provider Creation Process (#data-provider-creation-process)
- H3: Pre-Requisites (#pre-requisites)
- H3: Use Case: Creating a Customized Data Provider for Investments (#use-case-creating-a-customized-data-provider-for-investments)
- H3: Viewing the Data Providers (#viewing-the-data-providers)
- H3: Creating a Data Provider (#creating-a-data-provider)
- H3: Add Calculated Attributes (#add-calculated-attributes)
- H3: Managing Data Providers (#managing-data-providers)
- H3: Key Points to Remember (#key-points-to-remember)
- H3: Exporting Data Providers (#exporting-data-providers)
- H3: Support for a Read-Only Database User (#support-for-a-read-only-database-user)
- H3: Exporting Reports and Data Providers (Beta) (#exporting-reports-and-data-providers-beta)
- H2: Working with Report Designer (#working-with-report-designer)
- H3: Pre-Requisites (#pre-requisites)
- H3: Overview of the Reporting Process (#overview-of-the-reporting-process)
- H3: Introducing System Reports (#introducing-system-reports)
- H3: Viewing Reports (#viewing-reports)
- H3: Per-Period Metric Settings Across Report, Tab, and Widget Levels (#per-period-metric-settings-across-report-tab-and-widget-levels)
- H3: Copy System Reports and Remap Data Providers (#copy-system-reports-and-remap-data-providers)
- H3: Chart Type Switcher (#chart-type-switcher)
- H3: Conditional Formatting (#conditional-formatting)
- H3: Additional Enhancements in 16.4.0 (#additional-enhancements-in-1640)
- H3: New Global Security Rights for Queries in Data Providers (#new-global-security-rights-for-queries-in-data-providers)
- H2: Report Designer: Creating Your First Report (#report-designer-creating-your-first-report)
- H3: Creating a Report (#creating-a-report)
- H3: Select a Data Provider (#select-a-data-provider)
- H3: Tab Settings in Report (#tab-settings-in-report)
- H3: Configure the Report Canvas (#configure-the-report-canvas)
- H3: Configuring Filters (#configuring-filters)
- H3: Add Additional Data Providers (if needed) (#add-additional-data-providers-if-needed)
- H3: Preview and Publish Reports (#preview-and-publish-reports)
- H2: Creating and Managing Widgets (#creating-and-managing-widgets)
- H3: Types of Widgets in Report Designer (#types-of-widgets-in-report-designer)
- H3: Configuring the Setup Tab for Widgets (#configuring-the-setup-tab-for-widgets)
- H3: Configuring the Format Tab for Widgets (#configuring-the-format-tab-for-widgets)
- H3: Configuring the Style Tab for Widgets (#configuring-the-style-tab-for-widgets)
- H3: Configuring the Filter Tab for Widgets (#configuring-the-filter-tab-for-widgets)
- H3: Working with the Number Tile and Progress Ring Widgets (#working-with-the-number-tile-and-progress-ring-widgets)
- H3: Working with Charts in the Report Designer (#working-with-charts-in-the-report-designer)
- H3: Working with the Tables Widget in the Report Designer (#working-with-the-tables-widget-in-the-report-designer)
- H3: Conditional Formatting for Tables (#conditional-formatting-for-tables)
- H3: Configure Attribute Groups (#configure-attribute-groups)
- H3: Conditional Formatting for Per-Period Metrics (#conditional-formatting-for-per-period-metrics)
- H2: Working with Filters (#working-with-filters)
- H3: Report-Level Filters (#report-level-filters)
- H3: Tab-Level Filters (#tab-level-filters)
- H3: Widget-Level Filters (#widget-level-filters)
- H3: Filter Precedence Example (#filter-precedence-example)
- H3: Interactive Filtering in Report Designer (#interactive-filtering-in-report-designer)
- H2: Working with Drill Down Reports (#working-with-drill-down-reports)
- H2: Managing, Editing, and Publishing Reports (#managing-editing-and-publishing-reports)
- H3: Managing Reports (#managing-reports)
- H3: Using Layouts (#using-layouts)
- H3: Editing a Report (#editing-a-report)

## Audit Grid Limitations (Clarity 16.1.1)

In Clarity 16.1.1, the following capabilities are not supported in the Clarity Audit grid:
- Sort using the **Attribute** column.
- Display (total) scalar values (for example, allocations) using configured setting for FTE, Hours, or Days (vs. seconds).
- Ability to configure the Audit module for Plans.
- Include audit information for the stock sub-sub objects (e.g., Assignments, To Dos) and custom sub-sub objects in the Audit module.

> [!NOTE]
> Workaround: View audit details for these objects under **Clarity > Administration > Audit**.

## Working with Reporting

> [!TIP]
> **Experience Clarity Like Never Before** -- New Interactive Simulation Now Live! Explore our latest Simulation Lab, now available on the Broadcom Software Academy. This hands-on, interactive experience guides you step by step through key Clarity features and lets you practice at your own pace.

> [!TIP]
> Continue Learning: Enroll in **Clarity 16.x - Reporting Essentials** to gain a deeper understanding of Clarity's reporting capabilities.

Imagine you must generate a comprehensive report showcasing key performance indicators across your projects, such as budget allocation, progress, and team resource allocations. The Reporting workspace in Clarity, available from Clarity 16.3.0 and higher releases, allows you to define a Data Provider that pulls from various data objects--such as project details, financial metrics, and resource assignments. This flexible workspace allows you to customize reports to focus on specific areas, like active projects only, ensuring your team and stakeholders stay informed on the data that matters most.

The Reporting workspace is designed to streamline the creation, management, and customization of reports within a user-friendly, no-code/low-code environment. This workspace enables users, whether project managers tracking performance or financial analysts assessing cost data, to develop robust, tailored reports that meet their unique needs. With built-in flexibility and control, the Reporting Workspace emphasizes data accuracy, security, and ease of use, making it a valuable tool across roles and departments.

### Key Components of the Reporting Workspace
- **Data Providers**: Data Providers are at the core of the reporting workspace. These are customized data sources for your reports, built from Data Warehouse (DWH) objects and attributes. Data Providers allow you to:
- Select and combine specific data objects from the Data Warehouse.
- Define relationships between objects through joins.
- Apply pre-filters to refine the dataset, ensuring reports display only relevant data.
- Configure security settings to control data visibility, aligning with user access permissions.

  Each Data Provider becomes a reusable data source that can be tailored to capture particular insights--investment summaries, project timelines, or resource utilization. By organizing data at the source, Data Providers simplify report creation and help ensure consistency and accuracy in every report generated.
- **No-Code/Low-Code Design**: The Reporting Workspace is built to accommodate users with varying technical skills. With a no-code/low-code interface, users can design powerful reports without needing extensive database knowledge. The interface includes simple drag-and-drop functionality for selecting objects, configuring joins, and setting filters. This approach reduces the complexity of report development and encourages broader user engagement in data analysis tasks.
- **Interactive Tabs for Data Provider Configuration**: The Reporting Workspace provides a structured, tabbed interface for configuring Data Providers to support a seamless workflow. The steps include:
- **Details**: Set names and descriptions to keep Data Providers organized.
- **Queries Tab**: The Queries tab allows users to create, manage, and execute custom queries within Data Providers. This feature enhances the flexibility of the Reporting Workspace by enabling users to retrieve and manipulate data more precisely.
- **Objects**: Select and view relevant data objects and attributes.
- **Joins**: Define relationships between chosen objects.
- **Pre-Filters**: Apply filtering logic to refine the data set based on defined criteria.
- **Security**: Set access permissions to manage visibility.
- **Preview**: Test and validate data output before finalizing the Data Provider, with an option to view the system-generated SQL query.

  These structured tabs ensure that every aspect of the data source--from its selection to its security settings--is configurable and intuitive.
- **Report Designer**: The Report Designer is where users can create and customize their reports. This interface enables users to select data from the Data Provider, arrange it into tables or charts, and apply additional customization options. The Report Designer supports multiple widgets, allowing users to choose between different chart types (such as bar, line, or pie charts), as well as tabular reports. Key capabilities of the Report Designer include:
- Customizing data presentation using a variety of widgets (for example, tables, pie charts, bar charts).
- Configuring filters and sorting options at the report level for dynamic, on-the-fly data exploration.
- Defining per-period metrics in reports to track changes over time.
- Adjusting the layout, colors, and other visual elements of reports to enhance readability and impact.
- Previewing reports in different layouts before finalizing them.
- **Reports Tile**: The Reports tile in the Reporting workspace lets you view and manage published reports. This tile provides an intuitive interface for users to access a list of all available reports, including those they have created or those shared with them. Users can:
- Filter and search for specific reports based on criteria like report name, date, or category.
- View reports with different layouts, such as grid views or detailed breakdowns.
- Export reports to PDF for sharing and analysis.
- Modify applied filters within reports to explore data dynamically and generate new insights.
- Access report details, including version history and metadata.
- Control access rights to ensure that only authorized users can view, edit, or share specific reports.

### Prerequisites for the Reporting Workspace

Before users start working with the Reporting workspace (Data Providers, Report Designer, and Reports tiles), an administrator must complete the following setup steps. These prerequisites ensure that the Data Warehouse is populated correctly and that users have the right level of access.

#### 1. Prepare the Data Warehouse

As an administrator, make sure the Data Warehouse is set up and refreshed:
- Verify that the Data Warehouse is installed and configured.
- Run the **Load Data Warehouse** job with a **Full Load** and ensure that it completes successfully.
- Run the **Load Data Warehouse Access Rights** job and ensure that it completes. This job ensures that the Reporting workspace honors user security.
- For more information on setting up the data warehouse, see Set Up the Data Warehouse.

#### 2. Configure Data Warehouse Options for Reporting

You must enable SQL curve data and instantaneous synchronization for Reporting:

1. In Classic PPM, navigate to **Administration > System Options > Data Warehouse Options**.
2. In the Data Warehouse options section, enable SQL curves for Reporting by selecting **Include Sql Curve Data**.
3. After you change this option, run the **Load Data Warehouse** job again with a **Full Load** and make sure it completes successfully. This run populates the additional curve data that the Reporting workspace uses for per-period and time-phased information.
4. Return to **Administration > System Options > Data Warehouse Options** and turn on instantaneous synchronization by selecting **Enable Instantaneous Sync**.
5. For more information about these options and the required jobs, see Configure the Data Warehouse.

#### 3. Verify Reporting Access Rights

Verify that users have the required rights to see and use the Reporting workspace. Ensure that the appropriate roles have the following rights.

**Reporting workspace navigate rights** -- These rights control access to the workspace and its tiles:
- `Reporting - Navigate`
- `Reporting - Data Provider - Navigate`
- `Reporting - Reports - Navigate`
- `Reporting - Reports Library - Navigate`
- `Reporting - Available Reports - Navigate`
- `Reporting - Scheduled Reports - Navigate`

**Reporting workspace create rights** -- These rights are required for users who will create and design Reporting definitions:
- `Reporting - Data Provider - Create`
- `Reporting - Query - Create`
- `Reporting - Report Designer - Create`
- `Reporting - Report Schedule - Create`

**Reporting workspace edit rights** -- These rights are required for users who will maintain and update shared Reporting definitions:
- `Reporting - Data Provider - Edit - All`
- `Reporting - Query - Edit - All`
- `Reporting - Report Designer - Edit - All`
- `Reporting - Report Schedule - Edit - All`

**Reporting workspace view rights for report consumers** -- For users who only need to view reports and schedules:
- `Reporting - Report Viewer - View - All`
- `Reporting - Report Schedule - View - All`

**Optional but often useful for administrators and power users:**
- `Reporting - Data Provider - Copy`
- `Reporting - Data Provider - Delete - All`
- `Reporting - Query - Copy`
- `Reporting - Query - Delete - All`
- `Reporting - Report Designer - Copy`
- `Reporting - Report Designer - Delete - All`
- `Reporting - Report Schedule - Delete - All`

After you assign or update these rights, users must log out of Clarity and log back in. Once they sign in again, the Reporting workspace and its tiles are available based on their access rights, and they can start creating and running reports.

### Recent Enhancements to the Reporting Workspace

The Reporting workspace in Clarity has received a range of new features that enhance both reporting creation and consumption.
- The **Data Providers** tile now includes enhancements such as browsing the Data Warehouse schema while writing queries and previewing view options metadata for decimals. These improvements aim to streamline query writing and ensure more consistent data presentation.
- The **Report Designer** tile has also seen significant improvements. Notably, users can now preview reports directly from the Designer, providing a way to validate reports before publication. Interactive filtering has been added, enabling dynamic filtering within the same tab, while content filtering allows for more granular control of data displayed across report tabs. Additionally, the Standard Calendar supports configuring per-period metrics, offering flexibility in period-based reporting, and enhancing report customization for users.
- On the **Reports** tile, the ability to schedule reports directly from the interface now exists, allowing for automated report generation with output in PowerPoint format. This enhancement improves the efficiency of report distribution and ensures that key insights are available regularly without manual intervention. Furthermore, introducing OBS attributes in report filters provides more granular control over report segmentation based on organizational structure.

---

## Working with Data Providers

> [!TIP]
> **Experience Clarity Like Never Before** -- New Interactive Simulation Now Live! Explore our latest Simulation Lab, now available on the Broadcom Software Academy. This hands-on, interactive experience guides you step by step through key Clarity features and lets you practice at your own pace.

> [!TIP]
> Continue Learning: Enroll in **Clarity 16.x - Reporting Essentials** to gain a deeper understanding of Clarity's reporting capabilities.

In Clarity's Reporting workspace, Data Providers are foundational components that allow users to define, customize, and secure data sources for reporting purposes. Each Data Provider serves as a structured source of data, configured by selecting specific objects, defining relationships between them, applying filters, and managing data access. Data Providers can support advanced configurations like query management to retrieve specific data tailored to reporting needs.

These providers allow users to configure complex relationships between objects and attributes, making it easier to perform deep data analysis. Additionally, Per-Period Metrics (TSV) can be updated through Timeslicing jobs, enabling real-time data updates without the need for frequent incremental Data Warehouse loads.

Out-of-the-Box Data Providers, such as those for displaying posted transactions across investments, are also available, providing pre-configured templates that users can copy and customize for more specific reporting needs. Once set up, these Data Providers serve as the foundation for creating customized reports and dashboards, delivering actionable insights that are aligned with organizational goals.

### Out-of-the-Box (OOTB) Data Providers

Clarity offers a set of Out-of-the-Box (OOTB) Data Providers to assist users in getting started quickly. These pre-configured Data Providers include commonly used objects and attributes, covering a range of reporting needs, such as Investments and Project details. OOTB Data Providers can be used as templates, which can be copied and then customized to suit specific reporting requirements. Users can add additional filters, change joins, and adjust security settings based on unique needs while ensuring consistency with standard reporting practices.

### Data Provider Creation Process

The Data Provider creation process typically involves:
- **Details Tab**: The Details tab is the starting point for creating a Data Provider. This tab requires essential information to identify and describe the purpose of the Data Provider:
- **Name**: Enter a unique name to identify the Data Provider.
- **Description**: Optionally, provide a description outlining the purpose or contents, which helps differentiate it from other Data Providers. This tab ensures clear labeling, making Data Providers easily searchable and recognizable in the Reporting workspace.
- **Include Queries Checkbox**: This checkbox allows users to include specific queries when generating the Data Provider. By selecting this, users can ensure that only relevant data queries are included. When selected, the Queries tab appears given the user has applicable security rights. Users can hide the Queries tab by unchecking Include Queries. Note that hidden existing Queries will not be deleted in Data Provider unless the user deletes the Queries.
- **Queries Tab**: The Queries tab allows users to build their own Query Objects in a Data Provider that can be used along with regular Objects to facilitate complex reporting requirements. This tab appears only when the Include Queries checkbox is selected in the Details tab. This tab includes:
- **Selecting Primary and Additional Objects**: Choose a primary object and any related objects necessary for the report.
- **Attribute Selection**: Expand each object to view and select specific attributes that refine the data available for reporting.
- **Add New Queries**: Users can create and manage additional queries in this tab, offering more control over the data being retrieved and included in the report.
- **Objects Tab**: The Objects tab allows you to select the Data Warehouse (DWH)-enabled objects to be included in the Data Provider. This involves:
- **Selecting Primary and Additional Objects**: Choose a primary object and any related objects necessary for the report.
- **Attribute Selection**: Expand each object to view and select specific attributes that refine the data available for reporting. The choice of objects and attributes in this tab determines the overall scope and detail level of data in the Data Provider, ensuring you have the most relevant data points for reporting. Users can also include Data Warehouse attributes such as Data Warehouse Trending Attributes directly in the Data Provider configuration.

  > [!NOTE]
  > Data Providers support Object OBS (Organizational Breakdown Structure) attributes. This feature allows you to integrate OBS attributes like Department for project objects into your Data Providers.
- **Joins Tab**: The Joins tab is where relationships between objects are defined. Clarity can auto-generate joins based on common attributes, but users can also modify these joins as needed:
- **Default Joins**: Automatically created for objects with common keys.
- **Custom Joins**: Add, edit, or remove joins to reflect specific relationships between objects.
- **Filter Conditions on Joins**: Apply conditions within joins to limit data further. This tab is essential for establishing meaningful relationships between data elements, and ensuring accurate query results.
- **Pre-filter Tab**: The Pre-filter tab refines the data set by applying conditions that filter the data before it is processed in the report. These filters are especially useful for:
- **Narrowing Data Scope**: Add filters to limit data, for instance, including only active records or filtering by specific attributes.
- **Grouping Filters**: Create filter groups to control the logic applied to different conditions. Pre-filters help reduce data volume and increase the relevance of report results, ensuring users only see pertinent data.
- **Security Tab**: The Security tab allows administrators and report designers to configure access controls for each Data Provider:
- **Securing Data Access**: Toggle security settings on or off to manage the visibility of sensitive information.
- **Master Object Selection**: Choose a master object, such as Investment or Resource, to apply object-level security, ensuring data is visible only to authorized users. This tab's security settings help enforce role-based access, allowing sensitive data to be managed responsibly and securely within the organization.

  > [!NOTE]
  > If you require specific access rights or additional configurations for security, please consult your system administrator.
- **Preview Tab**: The Preview tab allows users to validate the Data Provider's configuration by providing a sample view of the resulting data output:
- **Data Preview**: Use the preview grid to examine selected attributes and confirm that filters, joins, and other configurations meet reporting requirements.
- **Grid**: The attribute display types are honored in the Data Provider results.
- **View Query**: Click the **View Query** button to review the SQL query generated by the system, offering visibility into the query structure.
- **Partial or Full Data Display**: Adjust the preview to show partial or full data for validation purposes. This tab ensures the Data Provider is configured as intended, providing an essential final check before the Data Provider is published.
- **Publishing the Data Provider**: Once all configurations have been validated, you can publish the Data Provider. Publishing:
- Finalizes the Data Provider settings, making it accessible for reporting within the Reporting workspace.
- Locks the configuration, meaning further edits require the Data Provider to be switched to Edit mode.

By following these steps, you can effectively set up a customized Data Provider tailored to your reporting needs. This Data Provider can now serve as the data foundation for a range of detailed, insightful reports, empowering project managers, financial analysts, and executives with data-driven insights.

> [!TIP]
> Watch the following video to learn how to work with Data Providers.

### Pre-Requisites
- A Feature Toggle controls the **Reporting > Data Providers** workspace and remains **Disabled** by default until it is enabled. Ensure that you have enabled **Reporting: Data Providers** in the Feature Toggles workspace.
- The following access rights are required for you to perform various actions on Data Providers in the Reporting Workspace. Administrators assign these rights based on your role and responsibilities. You can contact your administrator for any additional access.
- `Reporting - Data Providers - Copy`: Allows the user to copy Data Providers in Clarity.
- `Reporting - Data Providers - Create`: Allows users to create Data Providers in Clarity.
- `Reporting - Data Providers - Delete - All`: Allows users to delete all Data Providers in Clarity.
- `Reporting - Data Providers - Edit - All`: Allows users to edit all Data Providers in Clarity.
- `Reporting - Data Providers - Navigate`: Allows users access to the Data Providers tile under Reporting in Clarity. Note: This does not include the `Reporting - Data Providers - View - All` right.
- `Reporting - Data Providers - View - All`: Allows users to view all Data Providers in Clarity.
- `Reporting - Query - Create`: Allows users to create new queries within Data Providers in Clarity.
- `Reporting - Query - Copy`: Allows users to copy queries within Data Providers in Clarity.
- `Reporting - Query - Edit - All`: Allows users to edit existing queries within Data Providers in Clarity.
- `Reporting - Query - Delete - All`: Allows users to delete queries within Data Providers in Clarity.
- `Reporting - Query - View - All`: Allows users to view queries within Data Providers in Clarity.

### Use Case: Creating a Customized Data Provider for Investments

Imagine you are a Project Manager responsible for managing various investments across multiple projects and portfolios within your organization. You're preparing for an upcoming executive review, where you need to present a consolidated view of different investment types, such as Projects, Ideas, and Status Reports. This report needs to highlight key metrics like Cost Type, Investment Type, and Investment Manager to provide insights into resource allocation, budget management, and project progress.

To create this report, you need to:
- Focus on active investments only.
- Pull in relevant attributes from related objects like Projects and Ideas.
- Apply a filter to include only investments categorized as Capital under Cost Type.
- Ensure that data visibility is secure, allowing access only to authorized users within the organization.

Using the Clarity Reporting Workspace, you will achieve this by copying an Out-of-the-Box (OOTB) "Investments" Data Provider and then customizing it by adjusting the filters, joins, and security settings. The final step is to publish this Data Provider, making it available for reporting. This customized Data Provider will serve as the foundation for generating detailed and insightful reports that aid executive decision-making.

#### Step-by-Step Guide

1. **Access the Reporting Workspace**
- Log in to Clarity with your credentials.
- Navigate to the **Reporting** section in the left-hand menu to access the Reporting Workspace.
- In the Reporting Workspace, select **Data Providers** to open the Data Providers grid. Here, you can view, manage, and create new Data Providers.

2. **Copy the OOTB "Investments" Data Provider**
- In the Data Providers grid, locate the **Investments** Data Provider from the list of available OOTB Data Providers.
- Select the checkbox next to the Investments Data Provider and click the **Copy Data Provider** button.
- A duplicate Data Provider is created with a default name, such as "Copy of Investments."

3. **Edit the Copied Data Provider**
- Locate the copied Data Provider in the grid, then click to open it. The Data Provider configuration screen will open, displaying various tabs: Details, Objects, Joins, Pre-Filters, Security, and Preview.
- In the **Details** tab, update the **Name** and **Description** fields to reflect the purpose of the customized Data Provider:
- **Name**: "Customized Investment Data Provider"
- **Description**: "Customized Data Provider for investments, tailored to include specific filters and security settings."
- Save your changes to retain the updated name and description.

4. **Select Objects in the Objects Tab**
- Navigate to the **Objects** tab to select the relevant objects for your Data Provider.
- In the Available list on the left, locate and select any additional objects needed for the report, or verify that the Investment, Project, Idea, and Status Report objects are already in the Selected section.
- Expand each selected object to reveal individual attributes.
- For the **Investment** object, select attributes like Cost Type, Investment Manager, Investment ID, and Investment Type.
- For the **Project** and **Idea** objects, select attributes relevant to your report needs.
- Move selected attributes to the Selected Objects section to include them in the Data Provider.

   > [!NOTE]
   > Choosing only the necessary attributes improves performance by reducing data volume.

5. **Define Joins in the Joins Tab**
- Proceed to the **Joins** tab to configure relationships between the selected objects.
- Review existing joins. The system automatically creates joins based on common keys, such as joining Investment with Project, Idea, and Status Report.
- **Add Additional Joins** (if needed):
- Click **+ Add Join**.
- Select the Left Object and Right Object to be joined.
- Define the Join Condition and Join Type (e.g., Inner, Left).
- Ensure the join aligns with your reporting needs.

   > [!TIP]
   > Use key attributes for efficient joins, ensuring data integrity across linked objects.

6. **Apply Filters in the Pre-Filters Tab**
- Go to the **Pre-Filters** tab to add conditions that refine the data set based on specific criteria.
- By default, the Data Provider includes filters for Active Investments (set to Yes) and Template (set to 0).
- **Add Additional Filters**:
- Click **Add Filter Group** to create a new filter.
- Set **Cost Type = "Capital"** to include only investments categorized as Capital.
- Ensure the filters are logically grouped for precise data selection.
- Save the filters to apply them to the Data Provider.

7. **Configure Security Settings in the Security Tab**
- Navigate to the **Security** tab to control access to the Data Provider.
- Toggle on the option to **Secure this Data Provider**.
- Select **Investment** as the Master Object to enforce object-level security.
- This setting ensures that only authorized users have access to the data from this Data Provider. Contact your system administrator if you require additional security adjustments.

8. **Preview Data in the Preview Tab**
- Open the **Preview** tab to validate the configuration and view sample data.
- Use the Column Picker to choose attributes such as Cost Type, Investment ID, Investment Type, and Investment Manager for display in the preview grid.
- Set **Show Data** to either **Partial** (limited rows) or **Full** to adjust the data view based on your needs.
- Review the data rows to confirm that the configuration aligns with your reporting objectives.
- Click **View Query** to see the SQL query generated by the Data Provider, which helps verify that joins, filters, and selected attributes are correctly applied.

9. **Publish the Data Provider**
- Once the configuration is complete and validated, click the **Publish** button to make the Data Provider available for reporting.
- After publishing, the Data Provider status changes to **Published** and can no longer be edited without switching to Edit Mode.

> [!NOTE]
> Publishing the Data Provider finalizes its settings and makes it accessible for report creation within the Reporting Workspace.

By following this process, you have successfully created a customized Data Provider by copying and modifying an OOTB template. This Data Provider is now optimized for your specific reporting needs, providing a consolidated view of investments filtered by Cost Type and Investment Type. You can now use this Data Provider as the data source for generating detailed, insightful reports to support executive decision-making.

### Viewing the Data Providers

The Data Providers grid displays a list of all available Data Providers, including both custom-built providers and pre-configured Out-of-the-Box (OOTB) Data Providers. Here's what you need to know to navigate and interact with Data Providers:

1. Log in to Clarity.
2. Navigate to **Reporting** from the main menu.
3. Select **Data Providers** to access the list of available Data Providers. The grid displays both custom and Out-of-the-Box (OOTB) Data Providers provided as system-protected templates.
4. **Understand the Data Providers Grid**: The grid displays key information for each Data Provider:
- **Name**: Displays the unique name assigned to each Data Provider.
- **Description**: Briefly describes the purpose or key metrics included within the Data Provider.
- **Status**: Shows whether the Data Provider is in Draft or Published status. Note that updates made to a published Data Provider in "Has Edits" mode may not immediately reflect in this column.
- **Reports**: Displays the associated reports linked to the Data Provider.
- **Published By**: Shows the user who published the Data Provider.
- **Published Date**: Displays the date and time when the Data Provider was published.
- **Last Updated By**: Shows the user who made the last update to the Data Provider.
- **Last Updated Date**: Displays the timestamp of the most recent update made to the Data Provider.
- **Active**: Indicates whether the Data Provider is active and can be used for reporting.
- **Created By**: Displays the user who created the Data Provider.
- **Created Date**: Shows the timestamp of when the Data Provider was first created.
- **ID**: Displays the unique identifier for the Data Provider.
- **Include Query**: Indicates whether a query is included in the Data Provider.
- **Selected Objects**: Lists the objects and queries included in the Data Provider configuration.
- **Starred**: Shows whether the Data Provider has been marked as "starred" for easy access.
- **System**: Indicates if the Data Provider is a system-generated object.

5. **View OOTB Data Providers**:
- Clarity includes 23 OOTB Data Providers as templates for common reporting needs, like the Project Data Provider.
- These templates demonstrate configurations such as object selection, joins, and pre-filters.
- **Viewing OOTB Providers**: OOTB Data Providers are system-protected and cannot be edited or deleted directly. You can view them to understand their setup and structure.
- **Copying OOTB Providers**: To use an OOTB Data Provider as a foundation for a custom report, select the OOTB Provider and click **Copy Data Provider**. This action creates a duplicate that you can modify as needed for specific reporting purposes.

> [!NOTE]
> OOTB Data Providers are system-protected, so they cannot be edited or deleted. However, users can create customized copies of these templates to meet specific reporting requirements.

6. Use the **Column Panel** to adjust the grid display by adding or removing fields based on the information you wish to view.
7. **Viewing Options**:
- **Search and Filter**: Use the search box and filter options at the top of the grid to locate specific Data Providers by name, status, or other criteria.
- **Sort**: Click on column headers (for example, Name, Date, or Status) to organize the Data Providers for easy navigation and access.
8. **Filter the Grid** to narrow down the displayed Data Providers based on your reporting needs.
9. **Apply Group By** to consolidate related rows, which can help with managing and viewing large sets of data.
10. **Export** the Data Providers list or specific grid data to a CSV file for external use or sharing.
11. Modify details for custom Data Providers directly in the grid, or select a Data Provider and open the **Details** layout for in-depth editing.
12. **Save Your View** to retain any custom grid configurations, filters, or sorting applied for easy future access.
13. **View Detailed Configuration**:
- Click the name of any Data Provider to open it in **View Mode**. This view allows you to inspect the Data Provider's configuration without editing:
- **Details**: Lists the name, description, and purpose of the Data Provider.
- **Queries**: Lists the queries associated within the Data Provider. Queries display regardless of whether they are Valid or Invalid. Note that users cannot view Queries in other Data Providers.
- **Objects**: Shows the selected objects and attributes included in the Data Provider.
- **Joins**: Displays the relationships between objects, ensuring data integrity across tables.
- **Pre-Filters**: Details any conditions applied to filter the data before report generation.
- **Security**: Shows security configurations, if any, that control who can access this Data Provider.
- **Preview**: Provides a snapshot of the data within the configuration, allowing you to validate the setup and review included attributes.

### Creating a Data Provider

To create a Data Provider, access the Reporting Workspace and follow the below steps.

1. Log into Clarity and navigate to the **Reporting** section from the main menu.
2. Click on **Data Providers** to open the Data Providers grid. This is where you can view, create, edit, and manage Data Providers.
3. Click the **New Data Provider** button to initiate the creation of a new Data Provider. The New Data Provider modal will appear, allowing you to enter the required details.
4. Enter a unique name for your Data Provider in the **Name** field. Optionally, add a description in the **Description** field that outlines the purpose of the Data Provider.
5. **Details Tab**:
- The Details tab previews the fundamental properties of the Data Provider that you entered in the New Data Provider modal. However, you can update the same if you want to.
- **Name**: Enter a unique name that identifies the purpose or scope of the Data Provider.
- **Description**: Optionally, add a brief description to provide context on what data or metrics are included in the Data Provider.
- Select **Include Queries** to build your own query objects in a data provider. When selected, the Query tab appears for you to create one or more queries.
- Click **Create** to save the initial configuration and proceed to the next steps.

6. **Queries Tab**:
- Appears only when the **Include Queries** checkbox is selected in the Details tab.
- In the Queries tab, click **New Query** to display the create modal, where you can enter the query name and description.
- Click **Create**. The New Queries modal will appear, allowing you to enter the required details.
- The Details tab displays the properties of the Query that you entered in the New Query modal. Navigate to the Query tab within the Data Provider to start creating your query.
- In the Query tab, you can see the Data Warehouse Schema panel on the left with options like Tables, Views, and Functions. You can expand these schema objects to reference them while writing your query using SQL syntax. You can also search across Data Warehouse Tables, Views, and Functions. This Data Warehouse Schema panel helps you build complex queries by directly referencing available schema objects in the query editor.
- Once the query is written, click **Validate** to validate the query. If the query is valid, it will be confirmed and can be saved as part of the Data Provider. Note that only valid queries and their associated attributes can be used in the Data Provider.
- **Invalid Query**:
- When a user clicks **Validate** for an invalid query on the Query Tab, a database error message will be displayed.
- Click the **X** icon to close the error message box.
- Fix the Query to resolve the error. Note that invalid Queries and their attributes will not be visible in other tabs of the Data Provider.
- After fixing the query, click the **Validate** button again to validate the query.
- Navigate to the **Attributes** tab to view the attributes and their properties for valid queries. Here, you can inspect the Data Type, Key, Label (the attribute name to display), and Tooltip.
- **Key Attribute**: Check the property if the attribute is a key used for joining other objects.
- **Populated Attribute Properties**: Labels and Tooltips will flow through to the Report Designer and Reports.
- Lookups and Display Mappings are not available for query attributes.

7. **Objects Tab**:
- In the Objects tab, select the objects and queries from the Data Warehouse (DWH) that will form the core of your Data Provider configuration.
- **Available Objects**: Displays a list of all available DWH objects and queries under separate groups. Available attributes are listed under their relevant objects and queries. To select attributes, use the right arrow to move them to the Selected Box. You can select attributes from multiple Queries and/or Objects. Note that Queries can be used independently, without needing to include regular objects in the Data Provider.
- **Selected Objects**: Displays objects and queries included in the Data Provider, enabling configuration of specific attributes within each object. Note that selected attributes are displayed under their Objects and Queries. Users can select multiple queries and objects as needed.
- **Expand/Collapse**: Expand each object to view and select precise attributes.
- **Calculated attributes**: You can create calculated attributes in the Objects tab to support reporting requirements that are not met by existing attributes.
- Click **+ Add calculated attribute** to open the Add calculated attribute modal.
- Calculated attributes are available only in the Data Provider where you create them.
- No additional security is required to create calculated attributes.
- The **+ Add calculated attribute** button is disabled when the Data Provider contains only query objects.
- After you create a calculated attribute, it appears under **Calculated Dimensions** or **Calculated Metrics** in the Objects list.
- To learn more, see Add Calculated Attributes.
- **Best practices**:
- Select only the attributes necessary for your reporting needs to reduce data volume and improve query performance.
- To proceed to the next steps (Joins, Pre-Filters, and Security), ensure at least one attribute is selected from each chosen object.

8. **Joins Tab**:
- Configure relationships between the selected objects and queries in the Joins tab to define the data connections required for your reporting.
- **Join Type**: Specify the join type (Inner, Left, Right, Full).
- **Left Object**: Choose the primary object or query for the join relationship.
- **Left Attribute**: Select the attribute from the left object or query to use in the join.
- **Join Condition**: Define the condition for the join, such as "Equals" to create a direct match.
- **Right Object**: Choose the secondary object or query for the join relationship.
- **Right Attribute**: Select the attribute from the right object or query to use in the join.
- **Important rules for joins**:
- Use **+ Add Join** to add additional joins as needed.
- Ensure you use key attributes for joins to optimize performance and maintain data accuracy.
- Clarity provides built-in guardrails that validate joins to prevent common errors, ensuring reliable data relationships.
- **Query Objects**: All query objects must be joined with regular objects to maintain data consistency and avoid incomplete results.
- **Key Attributes in Queries**: Key attributes defined in queries are essential for joining, and these show the **Key** icon in the attribute list.

9. **Pre-Filters Tab**:
- The Pre-Filters tab enables you to define criteria to limit the data at the Data Provider level before it is used in reporting.
- **Add Filter Group**: Create filter groups with conditions that refine the dataset, such as limiting data to active projects or specific cost types.
- **All/Any Conditions**: Specify if all conditions within a filter group must be met (AND) or if any condition is sufficient (OR) to include data.
- **Query Pre-Filters**: Queries can also be pre-filtered in the Data Provider Pre-Filter tab.
- Query pre-filters are created similarly to object pre-filters in Data Providers.
- The filter list includes all available Query Attributes, not only the selected attributes.
- Use filters thoughtfully to ensure the dataset is accurate and relevant for reporting.

   > [!TIP]
   > Regularly review and adjust filters to ensure optimal performance and relevance of the report data.

10. **Security Tab**:
- Define row-level security in the Security tab to control user access to sensitive data within the Data Provider.
- **Security Objects**: Choose the security base, typically Investment or Resource, to restrict data at the object level.
- **Master Object**: Set a master object for applying security restrictions.
- **Security for Query Data**: Query data can only be secured when used in conjunction with Investment and/or Resource objects.
- Users must Inner Join the Investment and/or Resource objects to the query.
- Apply security restrictions using the selected Investment and/or Resource object.
- Assign security roles based on user access requirements. These configurations ensure sensitive information remains protected.

    > [!NOTE]
    > Global and instance-level rights provide comprehensive control over access and editing capabilities in Data Providers.

11. **Preview Tab**:
- The Preview tab allows you to validate the Data Provider's configuration by displaying sample data based on your setup.
- **Show Data**: Select either **Partial** (100 rows) or **Full** preview options depending on the data volume you want to review.
- **View Query**: Click the **View Query** button to view the query generated by the Data Provider. This allows you to verify the SQL query structure and ensure that joins, filters, and selected attributes are correctly represented.
- **Export to CSV**: Optionally, export the data preview to a CSV file for further analysis and validation outside of Clarity.
- The Preview Tab is only for testing the configuration of the Data Provider and does not control user data or presentation in reports. Only selected objects and attributes from the Data Provider Objects tab will appear here.
- Review the sample data cautiously to confirm its accuracy. Any discrepancies in the preview indicate that adjustments may be needed in earlier configuration tabs.

12. Once you have finalized and validated your Data Provider configuration in the Preview tab, you can proceed to publish it. Publishing the Data Provider makes it available for use in report creation within the Reporting Workspace.
    1. **Review Configuration**: Ensure that all selections, joins, filters, and security settings are correct.
    2. **Publish**: Click the **Publish** button at the top of the Data Provider configuration screen.
    3. **Confirm Publish**: Confirm the action when prompted. Once published, the Data Provider's status will change to **Published**.

    > [!NOTE]
    > A published Data Provider can no longer be edited directly unless you re-enter Edit Mode.

13. After publishing, the Data Provider becomes accessible for report generation and will appear in the Data Providers grid with a Published status, ready for further use and analysis.

### Add Calculated Attributes

You can create calculated attributes in a Data Provider to derive values that are not available as stock or custom attributes. Calculated attributes are defined at the Data Provider level and are available only within the Data Provider where they are created and in reports that use that Data Provider.

#### Before You Begin
- The Data Provider must be in Edit mode.
- The Data Provider must include at least one regular object.
- The **+ Add calculated attribute** button is disabled when the Data Provider contains only query objects.
- No additional access rights are required beyond the ability to edit the Data Provider.

#### Create a Calculated Attribute

1. In Clarity, go to **Reporting** and select **Data Providers**.
2. Open the Data Provider and click **Edit**.
3. Click the **Objects** tab.
4. Click **+ Add calculated attribute**.
5. In the Add calculated attribute dialog, complete the required fields:
- **Title**: Enter a name for the calculated attribute.
- **Type**: Select **Dimension** or **Metric**.
- **Expression**: Build the calculation logic.
6. Build the expression:
- Type `=` to display the list of supported operations.
- Type `#` to display the list of available attributes.
- Attributes are grouped by object.
- When Type is Dimension, per-period metrics are not available.
- Select an operation and insert attributes as required.
- Click the arrow icon next to an operation to view its syntax and description.
7. Click **Validate** to validate the expression.
8. After successful validation, click **Create** to save the calculated attribute.

> [!IMPORTANT]
> If you close the dialog without clicking **Create**, the calculated attribute is not saved.

#### Create Calculated Attributes Using Per-Period Metrics

When building calculated attributes that use per-period metrics, the following rules apply:
- You cannot combine out-of-the-box and custom per-period metrics in the same expression.
- Supported operations for calculated per-period metrics:
- **Sum**: Supports more than one per-period metric in the expression.
- **Subtract**: Supports two per-period metrics in the expression.
- **Multiply** and **Divide**: Support only one per-period metric in the expression. The second operand must be a numeric value.
- Validation fails if unsupported combinations are used.

#### Create Calculated Attributes Using Date Operations

You can use date operations to derive date-based values.
- Type `=` in the Expression field to select `Now()` for date operations.
- `DateAdd` returns a date by adding or subtracting a specified number of units from a date.
- `DateDiff` returns the numeric difference between two date attributes in the specified unit.

#### Validate and Save Behavior
- Validation is required before a calculated attribute can be created.
- Draft expressions are not saved automatically.
- After creation, changes to calculated attributes require re-validation.
- Changes take effect in reports only after you publish the Data Provider.

#### Where Calculated Attributes Appear

After creation:
- In the **Objects** tab, calculated attributes appear under:
- **Calculated Dimensions**
- **Calculated Metrics**
- In the **Pre-Filters** tab, calculated attributes are available for filtering and are grouped accordingly.
- In the **Preview** tab, calculated attributes are available in filters and the column panel.

#### Where Calculated Attributes Do Not Apply
- Calculated attributes are not available in the **Joins** tab.
- Calculated attributes do not apply to the **Security** tab.

### Managing Data Providers

#### Testing Data Providers -- Preview Tab

To test Data Providers, use the Preview tab:

1. Open the Data Provider in the Reporting Workspace and go to the **Preview** tab.
2. Configure column selection and apply filters as needed to view the data output.

> [!NOTE]
> These configurations are only for testing and do not impact actual Data Provider usage.

3. Use the **Column Panel** to add or remove fields.
- Selected Objects appear in the same order as set in the Objects tab.
- Selected Attributes are listed alphabetically, with per-period metrics grouped at the bottom.
4. Test data display options with **Show Data**:
- **Partial**: Shows up to 100 rows (or 100 rows per group if using Group By). This is the default setting, and export is limited to partial data.
- **Full**: Displays all rows and supports a full export to CSV.
5. Use grid options such as **Wrap Text**, **Search**, and **Export to CSV** as needed for testing.

> [!NOTE]
> The Preview Tab is only for testing the configuration of the Data Provider and does not control user data or presentation in reports. Only objects and attributes from the Data Provider Objects tab will appear here.

#### Troubleshooting Data Providers -- Preview Tab

To troubleshoot Data Provider configurations:

1. Click **View Query** in the Preview tab to see the SQL query generated by the Data Provider.
2. Review the query structure, including joins, filters, and selected attributes.
3. If needed, click **Copy Query** to copy the SQL query to your clipboard. This allows you to run it in a database tool for further testing.

> [!NOTE]
> Query is generated in regular SQL syntax, no syntax changes are necessary for compatibility.

#### Editing Data Providers

To edit an existing Data Provider:

1. Select the Data Provider from the grid.
- Published Data Providers require switching to **Edit Mode** to make changes.
- Unpublished Data Providers remain in Draft status and can be edited directly.
2. Click the **Edit** button to exit View Mode and enter Edit Mode.
- Make necessary updates in each relevant tab (Details, Objects, Joins, etc.).
- Note: Editable fields directly in the grid include Name, Description, Starred, Active, and OBS.
3. If the Data Provider contains missing attributes or objects (due to updates in the Data Warehouse):
- A **Missing Data** popup appears, listing the missing elements.
- Click **Remove** to delete these missing items automatically, or click **Close** to exit without saving changes.
4. Click **Exit** to save changes and exit Edit Mode.
5. To discard changes, click **Discard Edits** to exit Edit Mode without saving.
6. Click **Publish** to save and publish changes when done.

> [!NOTE]
> - **Viewing Unpublished Query Edits in Data Providers**:
>   - For Published Data Providers, users can view all edits made to the Data Provider prior to publishing those edits only while in Edit Mode.
>   - View Mode will display unpublished edits to previously published Data Providers.
>   - For Data Providers that have never been published, all edits are always visible.
>   - Unpublished Data Providers are always in Edit Mode with Draft Status.
> - When viewing or editing Data Providers with missing Query objects or attributes, Data Providers will display an error in the Preview tab if the attribute is disabled or missing from the Data Warehouse. The error message will specify that the column does not exist.

#### Copying Data Providers

To create a duplicate of a Data Provider:

1. Select the Data Provider in the grid and click **Copy**.

> [!NOTE]
> Alternatively, right-click on the Data Provider and select **Copy Action**.

2. In the Copy Modal, enter a new name for the duplicate Data Provider and click **Copy**.
3. A confirmation message will appear. The new copy is created with **Draft** status.
- The configuration from the Preview tab of the Source Data Provider is also copied.
- For previously published Data Providers, unpublished edits are not copied.
- The query and regular object configurations in the Objects, Joins, Pre-Filter, Security, and Preview Tabs of the Source Data Provider are also copied to the target Data Provider.
- Valid Queries will be copied with a Valid status, including all query and attribute values (for example: Labels and Tooltips).
- For Data Providers with any status, the source Data Provider can be copied, and the target Data Provider will not contain unpublished edits, including query edits.

#### Deleting Data Providers

To delete a Data Provider:

1. Select the Data Provider you wish to delete from the grid.
2. Click **Delete** (either from the grid button or the right-click menu).

> [!NOTE]
> Right-click on the Data Provider and select **Delete Row** to delete it.

3. Confirm the deletion in the popup window.

> [!NOTE]
> Data Providers currently in use within reports cannot be deleted.

4. Upon deletion, all references to the Query Object and Attributes will be removed from the Data Provider across all tabs, including Joins, Pre-filters, and Security tabs.
5. A confirmation message will display to confirm the deletion of the Data Provider.

#### Inactivating Data Providers

To inactivate a Data Provider:

1. In the Data Provider grid, locate the Data Provider you wish to deactivate.
2. Uncheck the **Active** checkbox.
- The inactivated Data Provider will appear in italics in the grid.
3. You may still access, copy, edit, or reactivate the inactive Data Provider if needed.

> [!NOTE]
> Inactive Data Providers used in reports can also be reactivated as necessary.

### Key Points to Remember
- **Limitations in Data Provider Grid for Per-Period Metrics**:
- When selecting Per-Period Metrics in View Options within the Preview Tab:
- If more than 100 periods are chosen for any single attribute, an error message will appear: "Maximum 100 periods allowed."
- If the cumulative number of periods across all attributes exceeds 900, an error message will appear: "Maximum 900 periods and metrics allowed."
- **Updating Published Data Providers**: When editing a previously published Data Provider marked with the "Has Edits" tag, note that the Last Updated Date in the Data Provider grid will not reflect the date and time of the latest changes.
- **Instance Security Rights**: Instance security rights for the logged-in user are applied to the results shown in the Preview Tab.
- **Linking and Drilldowns**: Linking or drill-downs within the Data Provider is currently not supported.
- **String Lookups**: Some string lookup fields may not display selectable values (e.g., Name on the Investment object).
- **User's Unit of Measure Settings**: The unit of measure for data displayed in the Data Provider Preview Grid is based on the user's settings, configured under their avatar.
- **Period Types Supported**: Fiscal and Standard Calendar Periods are supported in the Preview Tab's View Options.
- **System Options for SQL Curve Data in Classic**: To display Per-Period Metrics in the Preview Tab, ensure that **Include SQL Curve Data** is enabled under System Options in Classic. Also, run the Data Warehouse Load jobs as required.
- **'Key' Attributes in Data Providers**: Attributes labeled with 'Key' represent hidden internal ID values from Clarity's database (e.g., Investment Key in the Investment object) and are available for developers during testing and troubleshooting.
- **Lookup Attributes Behavior**: Lookup attributes (e.g., Resource in the Assignment object) act as dual-purpose attributes, functioning as keys during query generation (using their IDs) and displaying lookup values in filters and Preview results. These attributes are grouped under Key Attributes because they serve as keys in joins.
- **Data Provider Object Visibility**: The Data Provider object is hidden in Classic Studio and the Modern Attributes module under Administration. Users cannot create custom sub-objects, attributes, or blueprints within Data Providers.
- **OBS Attributes in Data Providers**: Currently, OBS attributes are hidden for all objects within a Data Provider. However, users can still apply OBS-based security to secure Data Provider instances.
- **Editing Published Data Providers**: Once a Data Provider is published, any further edits or viewing of edits must be done in Edit Mode. View Mode does not support these changes.
- **Deleting Data Providers Used in Reports**: Data Providers that are used in reports cannot be deleted.
- **Grid Behavior in Preview Tab**: The Preview Tab grid may sometimes split an object into two groups in the Column Panel, or reorder columns. This is a known issue and is also observed in common grids.
- **Saved Views and Details Flyout**: Saved Views and the Details Flyout are not available in the Data Provider Preview Tab.
- **Database Error Codes**: Upon publication, errors from the database during query generation will be displayed in the Data Provider as toast messages.
- **Viewing Queries**: Users can click the **View Query** button in the Preview Tab to view the SQL query generated by the Data Provider. This query can run in any database tool as there is no special syntax applied.
- **Security in Data Warehouse**: The Data Warehouse supports security only for Investment and Resource master objects. No security is available for other objects in Data Providers.
- **Copying Data Providers with 'Has Edits' Tag**: When copying a Data Provider with the 'Has Edits' tag, note that unpublished edits will not carry over to the new copy.
- **Missing Attributes and Objects in Data Providers**: If an administrator deletes, deactivates, or disables an attribute or object in the Data Warehouse that is present in a Data Provider, a popup message will appear indicating missing attributes. Users can either remove the missing attributes from the Data Provider or exit without changes.
- **Data Warehouse Dependency**: Data Providers are built on Data Warehouse objects, sub-objects, and attributes. They will only include Data Warehouse-enabled items, both stock and custom.
- **Joining Requirements**: All objects within a Data Provider must be joined for proper data retrieval.
- **Objects and Attributes Availability**: Some objects and attributes in Clarity may not yet be available in Data Providers as updates to their availability are ongoing.
- **Calculated Attributes**: Users cannot create new calculated attributes in Data Providers.
- **Lookups with Empty Values**: Some lookups in the Data Warehouse store an internal ID value of 0 for empty fields. When filtering these lookups using **Is Empty** in Data Providers, the results will exclude records where the lookup value is 0. Similarly, using **Is Not Empty** will also be affected.
- **Field-Level Security**: Field-level security is not available in Data Providers.
- **Group By and Language Support**: If using a non-English language setting, users may encounter blank groups when grouping by a lookup attribute in the Preview Tab grid.
- **Dependent Lookup Filters Display**: Attributes with static-dependent lookups will display as a single level when filtering (e.g., Stage on Investment).
- **Query Capabilities**: Queries can be built using tables, views, and functions (including SQL curve functions) in the Data Warehouse database. Users cannot access database objects in the Transactional database.
- **Query Underscores**: Queries generated by the Data Provider add underscores as needed. If a user places a generated query into a Query box in a Data Provider, query validation will fail because additional underscores are added, so they will be doubled. Removing extra underscores (from 2 to 1 or 4 to 2) ensures that the Data Provider query will validate successfully in the Query box.
- **Disabled Attributes in Classic Studio**: In Classic Studio, if an attribute that was previously enabled is later disabled, inactivated, or deleted from the Data Warehouse and is already being used in a valid Data Provider Query, an error will appear in the Data Provider Preview Tab indicating that the attribute no longer exists. The query will remain marked as valid until it is re-validated by the user. Once re-validated, the query will be marked as invalid.
- **Numeric Values in Queries**: Numeric values in Queries do not honor Decimal Settings in View Options.
- **Query User Context**: Queries cannot retrieve and use the logged-in user or their language.
- **Invalid Query Handling**: If a query is valid and displays data in the Preview Tab, but is later edited to become invalid after clicking the Validate button, an error will appear. If the user chooses not to fix the error and exits the Data Provider, the next time they access the Data Provider, a "Missing Objects and Attributes" popup will appear for the Query Object. The user can either close the popup (which will exit the Data Provider without allowing the user to resolve the query issue), or select the **Remove** button to correct the query. If Remove is chosen, all references to the Query Object and its Attributes will be removed from the Data Provider, except in the Query Tab. The user will then need to re-enter and revalidate the Query Object and its Attributes in the Objects, Joins, Pre-Filter, and Preview Tabs.

### Exporting Data Providers

You can now export selected Data Providers along with their metadata into a structured ZIP archive for import into another Clarity environment. It supports migrating Data Provider configurations while streamlining deployment workflows.
- **Eligibility and Selection**: Only non-system, published Data Providers with a defined and unique Migration Key can be exported. Users may export up to 30 Data Providers in a single operation.
- **Export Process**: Selected Data Providers are bundled into a ZIP file containing JSON representations and a manifest file. The archive excludes Studio or Lookup definitions, which require separate migration.
- **Import Process**: Import of Data Providers is supported via the corresponding workspace grid, with an emphasis on creation rather than replacement or merging. Imported Data Providers are published immediately, assuming no conflicts. The import operation requires identical Clarity versions between the source and the destination.
- **Limitations**: Query validation is not performed during import, so manual verification is recommended. Export/import is currently in beta and intended primarily for non-production usage.
- **Notifications and Error Handling**: Export and import completion, including any errors or warnings, is communicated through the Clarity notification system.

> [!NOTE]
> Some key points to remember:
> - Administrators must enable export and import of Data Providers and Reports in the **Actions** workspace.
> - You can export up to 30 data providers at a time.
> - Export package excludes Studio or Lookup definitions. These definitions should be migrated prior to importing.
> - Import Action shown if the user has the Data Provider Create access rights.
> - Only Data Provider Creation is supported, not Replace or Merge.
> - Import of Report Design Files is blocked in the Data Provider Grid.
> - The Clarity version of both the Target and Source Server must be the same.
> - Clarity will not validate queries in data providers to ensure they work on the Target Server.
> - Editing the ZIP file is not supported, and the import action may fail if you do.

### Support for a Read-Only Database User

Clarity now supports a read-only database user to enforce a separation between read-only reporting and transactional update operations. This allows Clarity to safely expose query-driven capabilities to administrators and power users without granting elevated database privileges.

Some key features and capabilities include:
- **ReadOnly Database User**: Clarity introduces support for a dedicated database account with SELECT-only privileges to execute supported queries. This account cannot perform insert, update, delete, or schema-changing operations, helping protect production data integrity and reduce risk.
- **Validation Modal**: When a query is validated or executed in **Administration > Queries** or on the **Reporting > Queries** page, Clarity displays a "Validating query... Please wait" modal dialog. While this modal is active, users cannot navigate to pages or perform actions that depend on the validation outcome, preventing inconsistent states.

> [!NOTE]
> Some key points to remember:
> - Customers must provision a read-only database user in each environment (e.g., development, test, and production) with appropriate SELECT rights on the Clarity schema and no DML or DDL privileges.
> - The readonly user is intended solely for Clarity features that execute database queries (e.g., administrative NSQL or reporting queries) and is not used for transactional processing.
> - If the readonly user is missing, locked, or lacks required privileges, Clarity surfaces a clear error to the administrator or user and logs diagnostic information. The system does not silently fall back to a more privileged account.

### Exporting Reports and Data Providers (Beta)

You can now export reports and data providers from their associated grids. It allows users to share, migrate, or back up reporting assets more efficiently. You can specify a unique migration key for every report or data provider that you export. If Clarity encounters the same migration key while importing a report or data provider on the target server, it will replace the existing reports/data providers. Otherwise, it will create new reports/data providers on the target server.
- **Eligibility and Scope**: Only non-system, published reports and data providers with unique migration keys are exportable. The export supports up to 10 Reports at a time and automatically includes drill-down or sub-reports.
- **Export Package**: Reports are packaged as JSON files in a ZIP archive, along with a manifest. The manifest includes names of reports, data providers, and images in the export package. Administrators can use it to verify report content before importing it into Clarity. You can export and import custom images added to reports using the image widget. The report import file can be up to 50MB and is configured by using the **Maximum reporting package import file size** setting. Clarity also exports the Data provider query attribute metadata information in the report migration package. They include attribute labels, tooltips, and associated lookups.
- **Replace reports and data providers on import**: If the Migration Key matches between the items in the import file and the reporting content on the target server, Clarity will replace existing reports/data providers. If Clarity does not find a matching Migration Key, it will create new reports/data providers on the target server.
- **Import Workflow**: Reports are imported as Drafts, while linked Data Providers are imported as Published. The Import wizard now includes the **Publish report after import** option. If users select this option, Clarity will publish the report after the import process is complete.
- **Error Reporting**: If Clarity encounters an issue during import, it will generate a CSV error file. You can download and review this file for more details on the specific items that caused the error.
- **Export Queries and Metadata**: Clarity also exports the data provider query attribute and metadata information in the report migration package. They include attribute labels, tooltips, and associated lookups.

#### Steps to Export Reports and Data Providers

1. Log in to Clarity and ensure that the Export and Import actions for Report and Data Provider are enabled in the **Actions** workspace. You can click **Administration > Actions** to access the Actions workspace.
2. Click **Reporting** to navigate to the Reporting workspace and click **Data Providers** or **Report Designer** to navigate to the relevant workspace.
3. Identify the relevant asset you want to export and ensure you associate a migration key with it by populating the **Migration Key** attribute.
4. Click **Export**. If you are exporting a report, you can choose from the **Report Design Only** or **Report Design and Data Provider** options.
5. Click **Notifications** and download the package.
6. Navigate to the target service and open the Data Provider or Report Designer workspaces.
7. Click **Actions > Import** to import the asset into Clarity.

> [!NOTE]
> Some key points to remember:
> - A maximum of 10 reports can be exported with or without their data providers at a time.
> - Export package excludes Studio or Lookup definitions. These definitions should be migrated prior to importing.
> - Editing the ZIP file is not supported, and the import action may fail if you do.
> - Existing report schedules do not need to be cancelled if the report or data provider is replaced during import.
> - If you export a report and associated data providers, ensure the data providers have a migration key.
> - When you are importing a report and associated data providers to replace an existing report, ensure that you check the following points to avoid import errors:
>   - The report and the data provider **Status** must be **Published**.
>   - You do not have any edits in a published report.
>   - Prior to the report schedule run, the report library instance will not be impacted.
>   - Upcoming report schedules will not be impacted, assuming the report import has not changed the report schedule filters.
>   - If the report import deletes or modifies report filters that are not valid for the report schedule filters, users will see a warning message when accessing the report schedule filters.
>   - When SQLQuery exceeds 50 attributes, the import to the target system fails. This is a known issue and will be fixed in an upcoming release.

---

## Working with Report Designer

> [!TIP]
> **Experience Clarity Like Never Before** -- New Interactive Simulation Now Live! Explore our latest Simulation Lab, now available on the Broadcom Software Academy. This hands-on, interactive experience guides you step by step through key Clarity features and lets you practice at your own pace.

> [!TIP]
> Continue Learning: Enroll in **Clarity 16.x - Reporting Essentials** to gain a deeper understanding of Clarity's reporting capabilities.

The Report Designer is a dynamic, no-code tool that empowers users to create, customize, and manage reports using data drawn from pre-configured Data Providers. This modern reporting solution is designed to streamline the process for business users, eliminating the need for technical expertise or deep programming skills. With a highly visual interface, the Report Designer enables project managers, financial analysts, and decision-makers to develop robust, tailored reports that provide the granular insights needed to make informed business decisions.

At the core of Report Designer is its flexibility and ease of use. Users can start by selecting data providers--sources that aggregate and structure information from Clarity's rich data ecosystem. Once a data provider is chosen, the interface allows users to build reports by dragging and dropping widgets, configuring tables, and designing charts that highlight the metrics most critical to their organization's goals. Filtering options, interactive layouts, and customizable formatting make it simple to refine report content and visualize key performance indicators in real time.

Additionally, the Report Designer supports multi-tab reports, letting users organize different aspects of data--such as financial details or project statuses--across several views. Each tab can host unique widgets, customizable charts, or tables, all linked to relevant data fields and refined through intuitive filter settings. This modular approach enables comprehensive storytelling with business data, allowing teams to track performance, compare scenarios, and share results with stakeholders flexibly.

### Pre-Requisites

Before accessing Report Designer, ensure that:

1. You have the necessary permissions to access the Reporting Workspace and Report Designer (for example, **Reporting > Navigate** and **Report Designer - Navigate** rights).

| Access Rights | Descriptions |
|---|---|
| Reporting - Report Designer - Copy | Allows the user to copy Report definitions in Clarity. |
| Reporting - Report Designer - Create | Allows users to create Report definitions in Clarity. |
| Reporting - Report Designer - Delete | Allows users to view and delete specific Report definitions in Clarity. |
| Reporting - Report Designer - Edit | Allows users to view and edit specific Report definitions in Clarity. |
| Reporting - Report Designer - Navigate | Allows user access to the Report Designer Tile under Reporting in Clarity. |
| Reporting - Report Designer - View | Allows users to view specific Report definitions in Clarity. |

2. Required Data Providers are configured and published in the Data Providers section.
3. You configure OBS rights for reporting and associate the Report object to the OBS. The system automatically adds a value to the API Attribute ID, which will make the OBS visible in Clarity.
4. The Report Designer feature is enabled under **Feature Toggles** in Clarity by default.

### Overview of the Reporting Process

Report Designer is part of the Reporting Workspace, which centralizes access to reporting features within Clarity. Users can access both Data Providers and Report Designer within the Reporting Workspace, allowing them to select data sources and design custom reports in one unified area.

#### Accessing Report Designer

To begin creating a report, navigate to the Reporting Workspace in Clarity and click on the **Report Designer** tile. This action opens the "Reports" section, displaying all existing reports in a grid view. The Reports grid includes options for creating new reports and editing or managing existing reports.

#### Creating a New Report

In the Reports section, click the **New Report** button to initiate the report creation process. A "New Report" dialog will appear, prompting you to enter a unique name and an optional description for the report. This initial setup step is crucial, as each report name must be unique to distinguish it from others in the Reports grid. After providing these details, click **Create** to proceed. This action saves the basic setup of your report and opens the main Report Designer interface with additional configuration options.

#### Selecting a Data Provider

Once inside the Report Designer interface, the first step is to select a Data Provider, which will supply the data fields available for visualization within the report. Click **+ Data Provider**, which opens a panel to search for and select an active, published Data Provider. Only one Data Provider can be assigned per widget, but you can add multiple widgets--each with its own Data Provider--within a single report. After selecting the desired Data Provider, click **Save** to apply it to your report.

#### Adding Widgets

Report Designer offers a variety of widget types, including charts and tables, which can be added to the report layout. To add a widget, click **+ Add Widgets** and select the desired widget type from the list, such as Pie Chart, Bar Chart, or Table. Once selected, the widget will appear on the report canvas. Each widget can be independently configured with data from the associated Data Provider. You can customize the widget by adjusting settings such as chart type, dimensions, metrics, sorting, and other display options, ensuring the report reflects your data visualization needs.

#### Configuring Filters

Filters allow users to refine the data displayed within individual widgets or across the entire report. To configure filters, click **Filters** to open the filter configuration panel. Filters can be applied at the following levels:
- **Report-Level Filters**: These apply to all widgets across all tabs in the report. Report-level filters help apply global conditions across the entire report.
- **Tab-Level Filters**: Filters applied at the tab level affect all widgets on that specific tab, overriding report-level filters on the same attribute.
- **Widget-Level Filters**: These apply to individual widgets, allowing for fine-grained control over the data displayed within each widget. Note that Widget-level filters override any Tab-level and Report-level filters that apply to the same attribute, providing more granular control over the data displayed in each widget.
- **Interactive Filters**: Users can interact with the report by clicking on chart elements (for example, slices in pie charts or bars in bar charts) to dynamically filter the data in other widgets. This enhances user experience by allowing data exploration directly from the visualization. The different widgets' opacity will be decreased, and the selected dimension will be highlighted, providing a clear visual cue of the filter being applied.

Once filters are configured, they can also be interacted with in the report's Preview mode, allowing end-users to refine the data displayed further.

#### Adjusting Layout

The Layout option in Report Designer allows users to control the report's presentation style. Adjusting the layout will enable you to choose between **Landscape** and **Portrait** page orientations, ensuring that your report format aligns with your intended display or printing needs. The layout can also be set to **Responsive** or **Fixed**, which provides flexibility based on the report's intended viewing environment. Proper layout adjustments help optimize the report's readability and structure for the audience.

#### Previewing and Publishing the Report

Users can preview the report after adding and configuring widgets, filters, and layout options to confirm that it meets their requirements. Use the **Preview** mode to view the report as it will appear to end-users, checking data accuracy, filter functionality, and visual alignment. Once satisfied with the setup, click **Publish** to finalize the report and make it accessible to other users with the appropriate permissions in the Reports grid.

Published reports are readily accessible and can be managed, edited, or shared based on organizational needs. With Report Designer, Clarity users can create interactive, data-driven reports that present information clearly and support data-informed decision-making. The tool's flexibility, combined with widget configuration options, filters, and customizable layout, enables users to design reports that meet diverse reporting requirements across the organization.

### Introducing System Reports

Clarity 16.4.0 introduces a suite of new out-of-the-box (OOTB) reports within the Report Designer, shipping these directly as system-level reports for the new Reporting workspace. These reports provide instant, value-driven reporting capabilities without needing prior customization.

Some key benefits of using these reports:
- Users gain critical resource and financial insights, enabling faster, data-driven decisions.
- New capabilities include responsive and interactive dashboard formats, making it easier to visualize and drill into real-time data.

Some examples of key reports are:
- **Capacity vs. Demand by Resource**: Helps organizations identify overallocation, potential resource bottlenecks, and opportunities for better resource planning--previously available in Jaspersoft as resource utilization reports.
- **Financial Budget vs. Forecast by Period**: Enables accurate comparison of budgeted vs. forecasted spend, allowing finance teams to proactively address variances.
- **KPIs by Project Type Dashboard**: Offers instant analytics on key project metrics, highlighting areas for improvement and allowing continuous delivery optimization.

You can now copy out-of-the-box system reports while allowing report designers to remap data providers.

### Viewing Reports

The Reports grid lists all available reports in Clarity, including custom-built and published reports.

Follow these steps to view the available reports in Clarity:

1. Log in to Clarity.
2. Navigate to **Reporting** from the main menu.
3. Select **Report Designer** to access the list of available reports. The grid displays both custom and published reports, which are configured for organizational use.
4. **Understand the Reports Grid**: The grid displays key information for each report:
- **Name**: Displays the unique name assigned to each report.
- **Description**: Provides a brief description of the report's purpose or key metrics included.
- **Status**: Indicates the report's current status, such as Draft, Published, or Has Edits (when an existing report has modifications that haven't been published yet).
- **Published By**: Shows the user who last published the report.
- **Last Updated**: Displays the timestamp of the most recent update made to the report.
5. **View Published Reports**:
- Clarity allows users to view both published and draft reports.
- **Viewing Published Reports**: Published reports are available for users with appropriate permissions to view, use, and export as needed.
- **Draft Reports**: Reports in the Draft status are accessible only to the creator or those with edit permissions and are not visible to general users until they are published.
6. Use the **Column Panel** to adjust the grid display by adding or removing fields based on the information you wish to view. This allows for a more customized view of report details. You can use the **Type** and **Category** fields to organize your reports. Ensure that you edit the Category (`REPORT_CATEGORY`) and Type (`REPORT_TYPE`) lookups to customize these fields based on your needs.
7. **Viewing Options**:
- **Search and Filter**: Use the search box and filter options at the top of the grid to locate specific reports by name, status, or other criteria.
- **Sort**: Click on column headers (such as Name, Date, or Status) to organize the reports for easy navigation and access.
8. **Filter the Grid** to narrow down the displayed reports based on your reporting needs. Filtering allows you to view only specific types of reports, such as those that are currently published or those in draft status.
9. **Apply Group By** to consolidate related rows, which can help with managing and viewing large sets of reports, making it easier to find reports relevant to specific projects or departments.
10. **Export the Reports List** to a CSV file for external use or sharing, which allows you to keep an external record of report details or share them with others outside of Clarity.
11. **Modify Report Details**:
- Modify details for custom reports directly in the grid, such as updating the description or name.
- For more extensive edits, select a report and open the **Details** layout for in-depth editing of configurations, widgets, and data sources.
12. **Save Your View** to retain any custom grid configurations, filters, or sorting applied for easy future access. This saves your preferred view of the Reports grid for repeated use.
13. **View Report Content**:
- Click the name of any report to open it in **View Mode**. This allows you to inspect the report's contents without entering edit mode:
- **Charts and Tables**: Displays the various widgets used in the report, such as charts and tables, showing visualized data.
- **Filters**: Shows any report-level or widget-specific filters applied to narrow down the data.
- **Layout**: Displays the layout structure chosen for the report, including orientation and widget arrangement.
- **Preview Data**: Provides a preview of the report's data as configured, enabling you to verify data integrity and report structure before sharing or exporting.

### Per-Period Metric Settings Across Report, Tab, and Widget Levels

You can now configure per-period metric settings at the report, tab, and widget levels. This enhancement provides greater flexibility for analyzing time-based data within reports. This helps to control the period range and metric behavior directly from the report interface.

#### Key Enhancements
- **Report-Level Settings**:
- A new toggle, **Show Report-Level Period Selector**, is now available in Report Settings.
- When enabled, the per-period metric selector appears in both Report Designer and Preview modes.
- **Per-Period Component Details**:
- Displays the resulting period range in Start Date - End Date format.
- Opens the standard Per-Period Metric Settings when the selector is clicked.
- Includes Previous and Next controls to navigate between time periods.
- **Tab Settings**:
- Per-period metric options are now available under the **Setup** tab in Tab Settings.
- These options include all standard per-period metric configurations and allow users to control the time-based data displayed at the tab level.
- **Widget Settings**:
- You can now configure per-period metrics at the widget level using the **Setup** tab in Widget Settings.
- This enhancement supports both table and chart widgets, enabling fine-grained period configuration for visual and tabular data displays.
- **Filter Settings in Scheduled Reports**:
- When scheduling reports, per-period metric settings are now available on the **Filter** tab.
- By default, these settings are set to None and inherit configurations from the Report Definition if unchanged.

> [!NOTE]
> **Precedence Rules**: Per-Period Settings follow these precedence rules:
> - Widget-level settings override tab and report-level settings.
> - Tab-level settings override report-level settings.
> - If Widget or Tab settings are set to None, the report-level settings are applied.
> - If all levels are None, grand totals for configured per-period fields are displayed.
> **Apply Button Behavior**: The Apply button becomes active when per-period settings are modified at the tab or widget level. Settings are applied when you:
> - Click **Apply**
> - Close the settings dialog
> - Press **Escape**
> **Export Support**: Per-period metric configurations are fully supported when exporting reports to PDF and PowerPoint formats.

#### Configure Time Reporting Periods

Use the new smart options for time reporting periods to easily configure views and reports around timesheet data. When you set Periods to Days in the Standard Calendar, apply the following Per-Period Metric settings to automate your date ranges:

**Define Start Dates**:
- **Start of current time period**: Set the start date to the beginning of the active period.
- **Start of next time period**: Set the start date to the beginning of the upcoming period.
- **Start of previous time period**: Set the start date to the beginning of the last completed period.

**Define End Dates**:
- **End of current time period**: Set the end date to the conclusion of the active period.
- **End of next time period**: Set the end date to the conclusion of the upcoming period.
- **End of previous time period**: Set the end date to the conclusion of the last completed period.

**Add 'Prior Period' to End Period and 'Next Period' to Start Period**: Configure dynamic date ranges with greater flexibility using the new smart date options. Select Next Period as a start period and Prior Period as an end period to create advanced rolling time windows for your reports and grids.
- **Next Period**: Select Next Period in the Start Date field to look ahead and filter your views starting from the upcoming period. Use this option to forecast future resource allocation.
- **Prior Period**: Select Prior Period in the Finish Date field to cap your data view at the most recently completed period. Use this option to analyze historical performance up to the last closed cycle.

### Copy System Reports and Remap Data Providers

You can now copy out-of-the-box system reports and remap data providers. This enables customers to create personalized copies of system reports without modifying the original system versions, preserving upgradeability and system integrity. This capability is crucial since Clarity-delivered system reports are delivered as examples and templates that may receive ongoing enhancements. You can now utilize, customize, and extend reports freely without upgrade conflicts.

Some key capabilities available in this release include:
- **Data Provider Remapping**: The copy process allows users to either:
- Create a copy of the associated system data provider (which is remapped to the copied report) with a prefix added to ensure uniqueness.
- Map the copied report to an existing non-system data provider that matches attribute compatibility requirements.
- **Attribute and Access Validation**: The system verifies that all referenced attributes, filters, widgets, and localization settings in the original report are present in the remapped data provider before allowing the copy.
- **Publish State**: Copies are created initially in a draft state for review. The system automatically publishes copied data providers. The copied report remains unpublished until the user manually publishes it.
- **Security and Permissions**: Copy operations require the user to have both `Reporting - Report Designer - Copy` rights and `Reporting - Data Provider - Copy` rights. Without these, the copy operation is disabled or inaccessible.

> [!NOTE]
> Some key points to remember:
> - Filters in data-provider joins are not considered when determining compatible remap targets.
> - Virtual attributes such as "Has Assignments" and "Has Subtasks" on task objects behave differently in the data warehouse and may require periodic full data loads to reflect updates accurately.

### Chart Type Switcher

The Report Designer now includes a powerful Chart Type Switcher that lets users seamlessly switch between chart types (such as Line, Bar, Column, Pie, etc.) while preserving the chart's current data configurations and styling settings.

In Clarity 16.4.0, a new Line Chart widget has been introduced to the Report Designer, enabling designers to visualize trends, patterns, and comparisons over time with greater clarity and control. You can now configure the line style and thickness for Line Chart widgets in Report Designer to achieve better visual distinction and readability across multiple data series. You can also customize line style (solid, dashed, dotted, etc.) for each data series.

### Conditional Formatting

Conditional formatting brings dynamic data-driven visual styling to tables in Clarity reports. Users can define rules to automatically apply colors, text effects, and formatting attributes to table cells or whole rows, making key insights stand out for fast analysis.

Clarity now supports applying conditional formatting at the individual period (TSV) level, enhancing visual data analysis for time-phased metrics, not just the totals.

### Additional Enhancements in 16.4.0
- Clarity 16.4.0 introduces a suite of new out-of-the-box (OOTB) reports within the Report Designer, shipping these directly as system-level reports for the new Reporting workspace. These reports provide instant, value-driven reporting capabilities without needing prior customization.
- You can now export reports, including their associated Data Providers, from the Report Designer grid. It allows users to share, migrate, or back up reporting assets more efficiently.
- You can now use table column controls to improve readability, enhance visual consistency, and save configuration time while using tables in the Report Designer.
- You can now use table styling controls to improve readability, enhance visual consistency, and save configuration time while using tables in the Report Designer.
- In Clarity 16.4.0, the Report Designer introduces a new **Add Link** action for Name and ID columns within tables. This enhancement allows report designers to create clickable links that navigate directly to the corresponding record in Clarity. It applies to both Investment and Originating Idea objects, making it easier for users to move seamlessly between summarized reports and detailed item views.
- In Clarity 16.4.0, new enhancements have been introduced for both the Report Designer and Report Viewer to improve how filters are managed and visualized. Designers can now rename and delete saved filters directly in the Report Designer, and viewers can easily identify the number of active filters through the new filter chip counter.

### New Global Security Rights for Queries in Data Providers

New Global Security Rights for Queries in Data Providers have been introduced. To use this feature, administrators must assign the appropriate global rights for Queries. The Rights below control behaviors in the Query Tab and must be used in conjunction with existing Data Provider Security Rights.
- `Reporting - Query - Create`: Create new queries in Data Providers.
- `Reporting - Query - View - All`: View existing queries in the Queries tab.
- `Reporting - Query - Edit - All`: Modify existing queries.
- `Reporting - Query - Delete - All`: Remove unwanted queries.
- `Reporting - Query - Copy`: Duplicate existing queries.

---

## Report Designer: Creating Your First Report

Creating a report begins with naming it, selecting the layout format, and then choosing the desired Data Provider. You then enter the report design interface, where you can add multiple tabs, allowing organization of different aspects or dimensions of the data within a single report. Each tab can hold various widgets, and users can configure widgets to show specific data slices like cost breakdowns or resource allocations. Filters can be applied at both the report and widget level to tailor the data views further. The designer offers a range of formatting options to customize how data is displayed for clearer insights and easier decision-making.

The key topics covered on this page are:
- Creating a Report
- Select a Data Provider
- Tab Settings in Report
- Configure the Report Canvas
- Add Widgets for Data Visualization
- Configure Widgets Using the Toolbar
- Set up Attribute Groups
- Configuring Filters
- Add Additional Data Providers (if needed)
- Preview and Publish Reports

### Creating a Report

To create a report in Clarity, follow the steps below in the Reporting Workspace:

1. Log in to Clarity and navigate to the **Reporting** section from the main navigation pane.
2. Click **Report Designer**. The Report Designer appears for you to create, edit, and manage reports for your organization's reporting needs here.
3. In the Report Designer page, click the **New Report** button to start the report creation process. A New Report modal is displayed for you to enter basic details.
4. **Provide Basic Details**:
- **Name**: Enter a unique name for the report in the Name field. Ensure the name is descriptive and distinguishes this report from others in the grid.
- **Description** (optional): Add a description for the report, explaining its purpose or key metrics included.
- **Layout Format**: Select **Responsive** or **Fixed** as the layout format. Note that you can change the layout at a later time as well.
- **Responsive** (selected by default): This option dynamically adjusts the report for various screen sizes. Note that the responsive layout currently does not support report exporting or scheduling. When Responsive is selected, the Maximum Width dropdown is displayed with options such as:
- HD Display (1920px)
- Laptop (1440px)
- Tablet (1024px)
- **Fixed**: This option provides a static layout with precise content placement, ensuring a consistent presentation. If you select Fixed, the Size and Orientation options will be displayed. You can choose from:
- **Size**: Letter, Legal, A4
- **Orientation**: Landscape, Portrait

> [!NOTE]
> - The Report Scheduling and Export to PPTX functionalities are only currently supported for fixed layouts.
> - When the Fixed layout is selected, the "Fit-to-width" option will be applied automatically.
- **Data Extraction (CSV)**: This option provides a single-pane report layout with a table widget optimized for CSV export.
5. Click **Create** to save and proceed. If you wish to cancel, click **Cancel**.

### Select a Data Provider

Data Providers act as the foundational data sources that define and structure the information available for reporting. They aggregate data from Clarity's Data Warehouse and transform it into a customizable, secure format that report creators can easily use without needing to write SQL queries or other technical scripts.

By selecting a Data Provider, users ensure that the report draws from accurate, relevant, and up-to-date project and portfolio data, tailored to the specific insights they need to analyze and visualize. Moreover, Data Providers enable flexibility and security in report creation. They allow administrators to create or copy customized data sets with predefined joins and filters, which can be reused across multiple reports to maintain consistency and data integrity.

1. After creating the report, the **Select Data Provider** dialog opens.
2. Search or browse through the available data providers. These are pre-configured data sources that you can use in the report.
3. Select the desired data provider by clicking the checkbox next to its name.
4. Click **Save** to link this data provider with your report. You will be directed to a default Untitled tab in the report canvas, where you will structure your report.

> [!NOTE]
> The report designer will not be able to use system data providers to create reports. They will need to make a copy of the system data provider and create a custom data provider, which can be used in reports.

### Tab Settings in Report

In the report canvas, the default Untitled tab will be visible. When you hover over the tab and click the menu icon, you will see the following options:
- **Rename**: Allows you to change the name of the tab.
- **Copy**: Creates a duplicate of the tab.
- **Delete**: Removes the tab from the report.
- **Tab Settings**: Opens the Tab Settings panel, allowing you to select the Report Type. By default, the Report Type is set to **Summary**. The Summary option gives you standard report controls and displays a scrollable report based on data configured within widgets. However, if you wish to add attributes (by clicking on **+ Add widgets > Attribute Group**), you need to select the **Attribute based** option. This option displays a paginated report where each page's data is determined by the attributes added to the report. You can select a Data Provider from the dropdown menu.

> [!NOTE]
> When you want to change the report type or data provider in the current tab, a confirmation message will appear stating that all existing Attribute Containers in the report will be deleted. Click **Confirm** to proceed. For more information, see Configuring Attribute Containers.

### Configure the Report Canvas

The report canvas includes options such as **+ Add Widgets**, **Filters**, **+ Data Provider**, and **Layout**. Use these tools to design the report's structure and presentation.

#### Add Widgets for Data Visualization

Widgets serve as the primary visual building blocks that display specific data insights in easily understandable formats. Widgets can be configured to show different types of visualizations such as number tiles, pie charts, bar graphs, and progress rings. Each widget pulls data from the selected Data Provider and applies aggregation functions like count, sum, or average to present key metrics that summarize and highlight important aspects of the business or project performance.

1. Click **+ Add Widgets** to open the Widgets panel, where you can select from available widget types.
- **Charts**: Choose from chart types such as Pie, Bar, Donut, Number Tile, and Progress Ring to visualize data distributions or trends.
- **Tables**: Use tables to display detailed data rows and attributes from the data provider.
- **Text, Line, Link, and Image**: Use these widgets to personalize and add more information to your report.
- **Attribute Group**: Add an attribute group as a widget, where you can configure attributes and the contents of other widgets. These will be grouped and filtered based on the values in the Attribute Group on the same tab.
2. Click on the desired widget type (for example, Chart, Table, or Attribute Group) to add it to the report canvas.

#### Configure Widgets Using the Toolbar

Each widget needs to be configured to define how it aggregates and presents data, such as choosing the relevant data fields, aggregation types (count, sum, average), and filters to tailor the displayed information.

1. Click each widget and use the **Toolbar** at the top with options for further customization.
2. Select from the following options:
- **Configure**: Opens the properties panel, where you can customize the chart's data provider, dimensions, metrics, and display settings.
- **Add Columns** (Table Widget only): Allows you to add specific columns from the data provider into the table view.
- **Copy**: Creates a duplicate of the chart, useful for reusing chart configurations within the same report.
- **Delete**: Removes the chart from the report canvas.

#### Set up Attribute Groups

Attribute groups organize related attributes into logical sets, making it easier to manage and select relevant data during report creation. By grouping attributes that belong together--such as financial metrics, project details, or resource information--users can quickly locate the necessary fields to include in their reports.

Moreover, attribute groups help maintain consistency and clarity in report design by categorizing attributes based on their purpose or source within the data provider framework. This grouping supports filtering, sorting, and applying business rules uniformly across related attributes, which enhances the accuracy and relevance of the data displayed in the reports.

**Configure Attribute Group:**

1. **Configure the Data Provider**:
   1. After adding the Attribute Container, click on the **Tab Settings** option to configure the Data Provider.
   2. In the Tab Settings panel, select **Attribute Based** as the Report Type.
   3. The Data Provider drop-down will appear, where you can choose the appropriate data provider (such as Investments or Projects).

   > [!NOTE]
   > A confirmation message will appear if you change the data provider, stating that all existing Attribute Containers in the report will be deleted. Click **Confirm** to proceed.

2. **Configure Attribute Group**:
   1. After selecting the data provider, hover over the top-middle border of the attribute container.
   2. Select the **Configure** icon. The Attribute Container Properties panel will appear.
   3. In the Attribute Container Properties panel, enter the **Title** of the container.
   4. Click **+ Add Attributes** and choose the attributes to be included in the container. You can resize and arrange them as needed.

3. **Configure Attribute Widgets within the Group**:
   1. To configure each attribute widget within the container, hover over the attribute widget.
   2. Select the **Configure** icon. The Attribute Properties panel will appear. Use the **Label position** drop-down to modify the position of the attribute label (such as Top or Left).

4. **Interactivity Between Widgets**:
   1. Once configured, the Attribute Group will filter and group the contents of other widgets on the same tab based on the selected attribute values.
   2. As you interact with the container's attributes (such as selecting a Manager), the other widgets will dynamically update to reflect the selection.
   3. This feature provides control over widget filtering and grouping within the report, making it easier to analyze related data across multiple widgets.

> [!NOTE]
> Report Designers can now use the **Add Metrics** option to add numeric attributes without impacting the grouping and filtering of the attribute group. They can rename the numeric attribute based on the report's context and select the relevant operation, such as Maximum, Minimum, Average, etc.

### Configuring Filters

Filters enable users to focus on the most relevant and specific subsets of data within a report. By applying filters, users can define precise conditions that limit the data shown according to criteria such as dates, statuses, project attributes, or financial thresholds.

1. Click **Filters** to open the Filters panel on the right side of the screen.
2. Set filters at different levels:
- **Report-Level Filters**: Apply filters to the entire report to standardize data view across widgets.
- **Tab-Level Filters**: Apply filters at the tab level, which affect all widgets on a specific tab.
- **Widget-Level Filters**: Apply filters to individual widgets if each needs a unique data subset.
3. Define filter logic (for example, **All** or **Any** match) based on how strictly the data should meet conditions.

### Add Additional Data Providers (if needed)

You can add additional Data Providers at the widget level to allow each widget to pull from specific, relevant data sources tailored to its unique visualization needs.

1. If your report requires more than one data source, click **+ Data Provider** again.
2. From the Data Providers panel, click the **Select Data Provider** button.
3. Search for and select additional data providers from the Select Data Providers dialog, and then click **Save**.

### Preview and Publish Reports

Previewing and publishing a report in Broadcom Clarity's Report Designer are key steps to ensure the report meets user requirements and is ready for distribution.

1. Preview the report before publishing to ensure that all elements (widgets, filters, layout) are correctly configured.
2. Make any necessary adjustments to optimize the report's appearance and functionality.
3. When satisfied with the configuration, click the **Publish** button.
4. Confirm the publish action. The report status is updated to **Published**, making it available for other users based on permissions.
5. The published report appears in the Reports tile grid under the **Available Reports** tab, displaying key details like Name, Status, Published By, and Published Date.

---

## Creating and Managing Widgets

Widgets are the fundamental building blocks of Clarity's Report Designer, serving as interactive visual components that transform raw data from Data Providers into meaningful, actionable insights. Each widget acts as a self-contained visualization element that can display data in various formats--from simple numeric displays to complex interactive charts and detailed tables.

The Report Designer offers an extensive library of widget types, each designed to meet specific visualization and data presentation needs. Whether you need to highlight key performance indicators with Number Tiles and Progress Rings, visualize data distributions through Pie and Donut Charts, compare categories using Bar and Column Charts, or provide detailed data inspection through Tables, there's a widget tailored for your purpose.

What makes widgets particularly powerful is their configurability and interconnectedness within the reporting environment. Each widget can be independently configured with its own data source, filtering criteria, formatting options, and display parameters through a consistent four-tab property system (Setup, Format, Style, and Filter). Widgets can interact with each other through dynamic filtering, where selections in one widget automatically update the data displayed in related widgets, creating an engaging and responsive user experience.

### Types of Widgets in Report Designer

| Name | Purpose | Best For | Key Features |
|---|---|---|---|
| Number Tile | Displays a single key metric prominently | KPIs, summary values, dashboard highlights | Simple numeric display with color customization |
| Progress Ring | Shows a metric as a circular progress indicator | Goal completion, percentage achievements, and progress tracking | Circular visualization with customizable colors |
| Pie Chart | Shows data distribution as slices of a circle | Part-to-whole relationships, category distributions | Up to 26 slices, "Others" grouping, interactive filtering |
| Donut Chart | Pie chart with hollow center for modern styling | Same as a pie chart, but with a cleaner appearance | Similar to a pie chart, with a central space for additional information |
| Bar Chart | Displays data using horizontal bars | Comparing categories, rankings, and time-series data | Periods toggle, stacked/clustered grouping, up to 26 bars |
| Column Chart | Displays data using vertical bars | Trend analysis, time-series comparison | Same as a bar chart, but vertical orientation |
| Line Chart | Displays trends and changes by connecting data points with lines | Time-series analysis, monitoring changes over time, comparing multiple series | Can plot multiple series, supports periods toggle, enables interactive filtering, adjustable axes, legend options, and can display data markers at each point for clarity |
| Bubble Chart | Visualizes relationships across three measures using bubble position and size | Portfolio-style analysis (value vs. alignment vs. cost), identifying clusters and outliers across investments | Configure X-dimension, Y-dimension, and Metric (bubble size); supports sorting and Per-Period Metric settings; hover tooltip shows key values |
| Split Packed Bubble Chart | Groups bubbles by an outer category and shows detailed bubbles inside each group | Part-to-whole comparisons across categories (for example, Project Type > Investments) while highlighting top contributors | Configure Dimension (outer group) and Breakdown dimension (inner bubbles); supports Metric aggregation (Sum/Avg/Count); Maximum bubbles and Maximum breakdown bubbles; optional Group others; supports Per-Period Metric settings |
| Gantt Chart | Displays records as timeline bars using start and finish dates | Schedule-focused reporting (investment/project timelines), overlap analysis, and timeline tracking across a selected period | Configure Columns, Start, and Finish; supports Sort by and Sort order; supports Per-Period Metric settings |
| Table | Detailed tabular data display | Detailed data inspection, multiple attributes | AutoFit, pagination, totals row, decimal formatting |
| Attribute Group | Interactive filter container that affects other widgets | Dynamic filtering, guided data exploration | Requires "Attribute Based" report type, filters other widgets on the same tab |
| Line/Link Widget | Creating logical separations in widgets | Can be displayed vertically or horizontally | Can be converted to a link by specifying the relevant URL |
| Text Widget | Adds formatted text content, labels, headers, or explanatory information to reports | Explanatory notes, instructions, contextual information, and executive summaries | Rich text formatting options, customizable fonts and styling, static content that doesn't change with data |
| Image Widget | Embeds static images, logos, charts from external sources, or visual elements | Company logos, decorative elements, external charts/diagrams, branding elements, and visual documentation | Supports standard image formats, offers resizable display, maintains aspect ratios, enhances visual appeal |

### Configuring the Setup Tab for Widgets

The Properties pane in Clarity's Report Designer empowers users to customize each widget fully as they add it to a report. Every widget comes with a dedicated Properties panel, which appears when you click the Settings icon on the widget toolbar. This pane provides a guided, tabbed configuration experience that consolidates all the options you need to refine the widget's behavior, appearance, and interactivity into a single place.

The Setup tab is designed to configure the foundational aspects of a widget, allowing users to select the core data and metrics to be visualized. It allows you to choose a chart type (e.g., Pie or Bar), assign a Data Provider, and define the dimensions or fields that structure the report.

| Name | Description | Associated Widgets |
|---|---|---|
| Chart Type | Allows you to switch between various charts based on your requirements | Number Tile, Progress Ring, All Charts |
| Data Provider | Select the source dataset for the widget | Number Tile, Progress Ring, All Charts, Table, Attribute Group |
| Title | Descriptive name for the widget | Number Tile, Progress Ring, All Charts, Table |
| Metric | Numeric value to display (Sum, Average, Count, etc.) | Number Tile, Progress Ring, All Charts, Table |
| Dimension | Provides the context for your metric values, acting as the "X-axis" in bar/column/line charts or as the groupings/slices in pie/donut charts | All Charts |
| X-dimension | Select the attribute used for the X-axis values | Bubble Chart |
| Y-dimension | Select the attribute used for the Y-axis values | Bubble Chart |
| Period Toggle | Enable time-based dimension | Bar chart, Column chart |
| Sort By | Field to sort the data by | All Charts |
| Sort Order | Ascending or descending sort order | All Charts |
| Breakdown dimension | Select the attribute used to group values within each main dimension group | Split Packed Bubble Chart |
| Breakdown sort by | Field used to sort values within the breakdown dimension | Split Packed Bubble Chart |
| Breakdown sort order | Ascending or descending sort order for the breakdown dimension | Split Packed Bubble Chart |
| Columns | Select the attribute used to group timeline rows | Gantt Chart |
| Start | Select the start date attribute used to plot timeline bars | Gantt Chart |
| Finish | Select the finish date attribute used to plot timeline bars | Gantt Chart |
| Per-Period Metrics | Time-based calculations (None, Periods, Duration) | Number Tile, Progress Ring, All Charts, Table, Attribute Group |
| Label | Content for text widget | Text |
| Make Link | Convert text to a Hyperlink | Text |

### Configuring the Format Tab for Widgets

The Format tab refines the widget's appearance and data structure, focusing primarily on how information is presented to users. This section lets users set the maximum number of slices or data groupings in visualizations, apply grouping logic for smaller data segments ("Group others"), and select metric and legend display preferences.

| Name | Description | Associated Widgets |
|---|---|---|
| Metric Format | Display as Number or Percent | Number Tile, Progress Ring, All Charts |
| Padding | Controls the amount of space between the widget's content and the outer border of the widget container | Number Tile, Progress Ring, All Charts, Table, Image |
| Maximum Slices/Bars | Limit the number of displayed segments (max 26) | All Charts except the Line Chart |
| Group Others | Combine smaller segments into the 'Others' category | All Charts except the Line Chart |
| Legend | Legend position (None, Top, Bottom, Right) | All Charts |
| Axis Setting | X/Y axis visibility and titles | Bar, Column, and Line Charts |
| Maximum bubbles | Limit the number of displayed bubbles | Bubble Chart, Split Packed Bubble Chart |
| Legend display | Choose what to show in the legend (Name, ID, Name and ID) | Bubble Chart |
| Show labels | Show or hide labels | Bubble Chart, Split Packed Bubble Chart |
| Show gridlines | Show or hide gridlines on X-axis and Y-axis | Bubble Chart |
| Money decimal display | Controls money decimal formatting | Gantt Chart |
| Number decimal display | Controls number decimal formatting | Gantt Chart |
| Row height | Controls row height (Compact, Comfortable, Roomy) | Gantt Chart |
| Grid spacing | Controls spacing between grid lines | Gantt Chart |
| AutoFit | Use the AutoFit feature to grow report tables dynamically while maintaining precise widget placement | Table |
| Repeat Column Header | Show headers on each page when AutoFit is enabled | Table |
| Show Total Row | Display totals at the bottom of the table | Table |
| Repeat Total Row | Displays the total row remains visible at the bottom of the table as you navigate through data pages or scroll vertically | Table |
| Auto Expand Group | Controls whether grouped rows in your table widget are automatically expanded when the report loads | Table |
| Show Group Counts | Displays the number of items or rows within each group | Table |
| Show Per Period Metrics Column | Displays per-period metric columns alongside non-period attributes in a row-oriented layout | Table |
| Decimal Display | Money/Number decimal formatting | Table |
| Wrap Text | Turn text wrapping on/off in cells | Table |
| Direction | Horizontal and Vertical arrangement | Line |

### Configuring the Style Tab for Widgets

The Style tab controls the aesthetic elements of widgets, letting users adjust borders, font styles, and slice color schemes. This tab is essential for customizing the look and feel to align with branding or improve readability.

1. Log in to Clarity and click **Reporting**.
2. Click **Report Designer** and select the relevant report to open it.
3. Click **Edit** and select the relevant widget.
4. Click the **Configure (Gear)** icon to open Chart Properties pane.
5. Use the **Style** tab to customize the visual style and branding of your widgets.
6. Select **Display Mapping** if the dimension value has display mappings configured in Clarity Studio. In addition, the display mappings option will only be available for Pie and Donut charts and Bar and Column charts configured with a single metric.

### Configuring the Filter Tab for Widgets

The Filter tab is designed for granular data selection and filtering at the widget level, enabling dynamic data segmentation for reports. Widget-level filters can override broader Tab and Report-level filters, allowing tailored views for each visualization.

| Name | Description | Associated Widgets |
|---|---|---|
| Match Filter | All (AND) or Any (OR) filter logic | Number Tile, Progress Ring, All Charts, Table, Attribute Group |
| Add Filter | Define specific filter conditions | Number Tile, Progress Ring, All Charts, Table, Attribute Group |
| Add filter groups | Create complex filter logic with groups | Number Tile, Progress Ring, All Charts, Table, Attribute Group |

**Steps:**

1. Log in to Clarity and click **Reporting**.
2. Click **Report Designer** and select the relevant report to open it.
3. Click **Edit**, then **Add Widgets** to open the Widgets modal.
4. You can click a widget to add it to the canvas. You can also drag and drop a widget to the canvas to the relevant attribute group.
5. Click a widget to copy it, add drill-down capability, or delete it.
6. Click the **Configure (Gear)** icon to open Chart Properties pane.
7. Use the **Setup** tab to assign your widget's data provider, define key settings such as title, dimensions, metrics, and sorting criteria.
8. Use the **Format** tab to fine-tune how your data is visually represented. Adjust options such as number formatting, axis labels and titles, legend placement, date periods, grouping type (stacked/clustered), and display precision.
9. Use the **Style** tab to customize the visual style and branding of your widgets.
10. Use the **Filter** tab to control which data appears by setting up filtering criteria specific to each widget. Add, group, or layer filters for attributes, and choose logical rules (All/Any) to enable granular, dynamic data refinement.
11. Close the Chart Properties pane.

### Working with the Number Tile and Progress Ring Widgets

The **Number Tile** prominently displays a single metric--such as a KPI, aggregate value, or summary count--in a simple, customizable tile format. This makes it ideal for displaying financial totals, project counts, or targets that need to be monitored at a glance. Users can tailor the tile's colors, display formats, and styling to highlight critical numbers in their reports.

The **Progress Ring** widget shows metrics as a circular progress indicator, visually representing completion rates, goal achievement, or percentage values. It is best used for tracking progress toward goals, percentage achievements, or any scenario where a visual, ring-based format helps users quickly assess performance. The Progress Ring supports custom colors and interactive filtering.

**Steps:**

1. Log in to Clarity and click **Reporting**.
2. Click **Report Designer** and select the relevant report to open it.
3. Click **Edit** and click **Add Widgets** to open the Widgets modal.
4. You can click a widget to add it to the canvas. You can also drag and drop a widget to the canvas to the relevant attribute group.
5. Click a widget to copy it, add drill-down capability, or delete it.
6. Click the **Configure (Gear)** icon to open Chart Properties pane.
7. Use the **Setup** tab to assign your widget's data provider, define key settings such as title, dimensions, metrics, and sorting criteria.
8. Use the **Format** tab to fine-tune how your data is visually represented.
9. Use the **Style** tab to customize the visual style and branding of your widgets.
10. Use the **Filter** tab to control which data appears by setting up filtering criteria specific to each widget.
11. Close the Chart Properties pane.

### Working with Charts in the Report Designer

The chart widgets in the Report Designer provide users with a diverse set of visualization tools to present business and operational data with clarity.
- **Pie Chart**: A classic visualization for showing part-to-whole relationships within categorical data. Pie charts allow users to quickly gauge proportions and distributions--such as market share, departmental contributions, or budget allocations.
- **Donut Chart**: Offers a modern alternative to the pie chart, featuring a hollow center for enhanced visual styling and potentially for additional contextual information.
- **Bar Charts**: Leverage horizontal bars to compare values across categories efficiently. Well-suited for ranking items--such as sales by product, costs by department, or counts by status.
- **Column Charts**: Display data with vertical bars and are functionally similar to bar charts, but are organized for time-series and trend analysis.
- **Line Charts**: Connect data points with lines, making them the preferred choice for visualizing trends and progression over time.
- **Bubble Charts**: Extend comparative analysis by visualizing relationships across multiple measures in a single view.
- **Split Packed Bubble Charts**: Provide a hierarchical view of data by grouping bubbles into larger parent clusters based on a primary dimension, with smaller bubbles inside each group representing a breakdown dimension.
- **Gantt Charts**: Focus on timeline-based visualization, displaying records as horizontal bars plotted against start and finish dates.

**Steps:**

1. Log in to Clarity and click **Reporting**.
2. Click **Report Designer** and select the relevant report to open it.
3. Click **Edit** and click **Add Widgets** to open the Widgets modal.
4. You can click a chart widget to add it to the canvas. You can also drag and drop a widget to the canvas to the relevant attribute group.
5. Click a widget to copy it, add drill-down capability, or delete it.
6. Click the **Configure (Gear)** icon to open Chart Properties pane.
7. Use the **Setup** tab to assign your widget's data provider, define key settings such as title, dimensions, metrics, and sorting criteria.
8. Use the **Format** tab to fine-tune how your data is visually represented.
9. Use the **Style** tab to customize the visual style and branding of your widgets.
10. Use the **Filter** tab to control which data appears by setting up filtering criteria specific to each widget.
11. Close the Chart Properties pane.

### Working with the Tables Widget in the Report Designer

The Table widget is a powerful component for presenting detailed, multi-attribute data in a structured grid format. Unlike visual charts, the Table widget allows users to inspect underlying records, compare multiple fields across rows, and perform granular data analysis without losing sight of the fine details.

Within a Table widget, designers can include multiple columns from any configured Data Provider, allowing stakeholders to sort, paginate, and filter information with ease. Users benefit from features such as grouping rows by one or more attributes, displaying total rows for key metrics, and formatting columns to show numbers, text, or dates clearly.

Tables in Clarity's Report Designer can also interact with the broader dashboard environment: they reflect report-, tab-, and widget-level filters, making it easy to view filtered subsets of data in real time.

**Steps:**

1. Log in to Clarity and click **Reporting**.
2. Click **Report Designer** and select the relevant report to open it.
3. Click **Edit** and click **Add Widgets** to open the Widgets modal.
4. Click the **Table** widget to add it to the canvas.
5. Click the **Configure (Gear)** icon to open Chart Properties pane.
6. Use the **Setup** tab to assign your widget's data provider, define key settings such as title, dimensions, metrics, and sorting criteria.

> [!TIP]
> Manage table columns more efficiently by accessing the **Column Panel** directly from Table Properties. This update removes height limitations found in previous releases, allowing you to view and search all available fields without excessive scrolling, regardless of the table's size.
> Key Enhancements:
> - View updated items selected counts that accurately reflect complex configurations, such as multiple per-period metrics.
> - Drag and drop attributes within the panel to reorder them, or move them directly from the panel onto the table canvas.

7. Use the **Format** tab to fine-tune how your data is visually represented. Adjust options such as Show total row, Auto Expand Groups, Show Group Counts, Show Per Period Metrics column, and display precision.
8. Use the **Style** tab to customize the visual style and branding of your widgets. Some key options users can configure on the Style tab include:
- Table title
- Table header
- Table cells
- Alternate row background color
- Total Row
- Table Group Row
9. Use the **Filter** tab to control which data appears by setting up filtering criteria specific to each widget.
10. Use **Conditional Formatting** to bring dynamic data-driven visual styling to tables.
11. Close the Chart Properties pane.

#### Table Column Controls

You can also use table column controls to improve readability, enhance visual consistency, and save configuration time while using tables in the Report Designer.

Some key options on the hamburger menu include:
- **Wrap Text**: Users can click on the 'Wrap Text' action and set wrapping at a column level for the values in the column. If you set the Wrapped text option as True under the Format tab, it will have precedence over the column-level wrap.
- **Header Alignment**: Users can click on the 'Header Alignment' action and set the alignment to Left, Right, or Center.
- **Header Background**: Users can click the Header Background action to open a submenu and select the corresponding color.
- **Header Text Color**: Users can click the Header Text Color action to open a submenu with a custom font color picker.
- **Hide Icons**: Users can click the Hide Icons action to hide the tooltip icon in the column header.
- **Decimal Display**: Users can click the Decimal Display action to open the submenu and select the relevant option.
- **Cell Alignment**: Users can click the Cell Alignment action to open the submenu and select from Left, Center, and Right.
- **Display Type**: Users can click the Display Type action to open the submenu and select from Value, Range, and Range Description and Value.

### Conditional Formatting for Tables

Conditional formatting brings dynamic data-driven visual styling to tables in Clarity reports. Users can define rules to automatically apply colors, text effects, and formatting attributes to table cells or whole rows, making key insights stand out for fast analysis.

Some key examples of where you can use this capability are:
- Highlight project tasks flagged as "At Risk" or "Late" with bold red backgrounds and an underline, making urgent tasks instantly visible to stakeholders.
- Color-code revenue columns so cells above the target appear green and those below the threshold are strikethrough red, improving quick recognition of financial performance trends.
- Style approval status fields--approved records in bold green, pending in yellow underline, rejected in strikethrough italic red--helping reviewers prioritize actions across large lists.
- Apply conditional formatting at the row level for project health: set the entire row background to blue if all underlying KPIs are on track; otherwise, highlight deviations with cell-level styles.

> [!NOTE]
> Some key points to remember:
> - Conditional formatting is not applied when you access Clarity from mobile devices.
> - Conditional formatting is not applied when you export data to CSV files.
> - You can create up to 20 rules per view.
> - If you copy a view, its conditional formatting will be copied. The rules are copied in the same order, including the disabled rules.
> - Every rule must have at least one valid condition. If a rule has no valid conditions, it will be removed when you apply it.
> - Valid conditions must contain both a Condition and a Condition Value. Clarity will save only valid conditions, even if the rule is disabled. If a rule has multiple valid conditions and one invalid condition, Clarity will save only the valid condition.
> - Condition groups are not available.
> - Multiple conditions based on the same attribute are not supported in a rule.
> - You can set the priority of the rules.
> - The "is Not Between" condition is not supported.
> - The starred attribute is not available for format conditions.
> - You can only change color for boolean attributes.
> - You cannot change the color of grid cells that include links.

To learn more about conditional formatting, see Configure Conditional Formatting.

### Configure Attribute Groups

An Attribute Group is a widget that allows you to configure attributes, grouping and filtering the contents of other widgets based on the values in the Attribute Container on the same tab.

1. **Add the Attribute Container Widget**:
- In Report Designer, select the tab where you want to add and configure the attribute container.
- Click **+ Add Widgets** and then select the **Attribute Group** icon from the widgets menu to add it to the report canvas of the selected tab. You will see a blank attribute container added to the report canvas.

   > [!NOTE]
   > If the Report type is not already set to Attribute Based, the Tab settings button will appear in the newly added Attribute Container.

2. **Configure the Data Provider**:

   > [!NOTE]
   > If you see a blank Attribute Container added to the report canvas, it means that the Report type is already set to Attribute Based and a data provider has already been selected. You can skip to the Configure Attribute Container step.
- After adding the Attribute Group, click on the **Tab Settings** option. The Tab Settings panel appears on the right side.
- In the Tab Settings panel, select **Attribute Based** as the Report Type.

   > [!NOTE]
   > You cannot add an Attribute Group when the Report type is set to Summary.
- The Data Provider dropdown will appear, allowing you to choose the appropriate data provider (for example, Investments or Projects).
- Once you select a data provider or change the data provider, a confirmation message will appear stating that all existing Attribute Containers will be deleted. Click **Confirm** to proceed.

3. **Configure Attribute Container**:
- After selecting the data provider, hover over the top-middle border of the Attribute Container and click the **Configure** icon to open the Attribute Container Properties panel.
- In the panel, enter a **Title** for the container. Note that you cannot change the data provider.
- Click **+ Add Attributes** to select an attribute to include in the container. Once selected, you will see this attribute added as a widget in the container. Note that you can add multiple attributes to a container. You can resize and arrange these attributes as needed.
- Click **+ Add Metrics** to add numeric attributes without impacting the grouping and filtering of the attribute group.

4. **Configure Attribute Widgets within the Container**:
- To configure each attribute widget within the container, hover over the widget and click on the **Configure** icon to open the Attribute Properties panel.
- Use the **Label Position** dropdown to modify the position of the attribute label (for example, Top or Left).

5. **Interactivity Between Widgets**:
- Once the Attribute Container is configured, it will filter and group the contents of other widgets on the same tab based on the selected attribute values.
- As you interact with the container's attributes (such as selecting a Manager), other widgets on the same tab will dynamically update to reflect this selection.
- This interactivity feature provides control over widget filtering and grouping within the report, making it easier to analyze related data across multiple widgets.
- **Multiple Attribute Groups**: You can configure multiple attribute groups within a tab, each of which will filter and group the widgets based on the values inside the group. These groups will execute within the same tab, grouping and filtering the widgets based on the logical AND condition across all attributes within the container.
- **Configuration for Multiple Groups**: If you configure more than one attribute group within a tab, they must all be configured with the same data provider. When configuring two or more attribute groups, the system will default the data provider value to the data provider configured on the first attribute container.

### Conditional Formatting for Per-Period Metrics

Project and portfolio managers often review time-scaled (periodic) data--such as task effort, cost, or resource allocation--across weeks or months. Previously, conditional formatting rules applied only to the overall Totals column, making it difficult to spot anomalies or trends within specific periods.

Clarity now supports applying conditional formatting at the individual period (TSV) level, enhancing visual data analysis for time-phased metrics, not just the totals. You can automatically highlight outliers, exceptions, or patterns in any individual period, such as:
- Resource over-allocation in a particular month.
- Cost overruns appearing in upcoming periods, not just in summary totals.
- Delayed progress in weekly or monthly buckets instantly flags risks before they impact overall project performance.

> [!NOTE]
> Some key points to remember:
> - Conditional formatting rules will only apply if the Unit of Measure in the rule matches the Unit of Measure in the report.
> - Higher rules have priority over lower rules, regardless of what is defined in the "To" field.
> - By design, the condition formatting Unit of Measure will also display all four UOM values. If you have a rule with UOM=Hours and uncheck the "Hours" under Settings UOM, it will not change or affect the conditional formatting rule. It is the designer's responsibility to ensure that, if there is a UOM=Hours rule, the Settings UOM "Hours" is checked. Otherwise, the rule will never get executed.

---

## Working with Filters

Filters in the Report Designer enable users to narrow down data displayed in their reports, offering customization at multiple levels, such as widget-level, tab-level, and report-level. This flexibility ensures precise control over the data presented, making it easier to derive insights from relevant subsets of information.

> [!NOTE]
> You can now leverage the **Is Empty** and **Not Empty** filters to filter data within widgets in the Report Designer. This allows users to quickly identify records that are incomplete, such as assignments without assigned resources, tasks with missing dates, or projects with gaps in data entry. You can also use these filters to ensure charts and reports reflect data of interest, such as only showing assignments where effort has actually been entered.

### Report-Level Filters

Report-level filters apply globally across all widgets and tabs in a report. They provide a comprehensive filtering mechanism to refine the entire dataset.

**Steps:**

1. **Open Report-Level Filters**: In the report canvas, click the **Filters** icon in the top toolbar.
2. **Add Global Rules**: Define filter conditions applicable to all tabs and widgets. For example, set a filter for "Operating Costs > $1,000,000" to be applied across the report.
3. **Preserve Filter in Preview Mode**: Toggle the option **Show filters in the preview mode** if you want the filters visible to end-users in the preview.
4. **Apply Filters**: Save the filters, and verify their effect across the report.
5. **Override Behavior**: Understand that widget-level filters will override these report-level filters for conflicting conditions.

> [!NOTE]
> While viewing a report:
> - End-users can see report-level filters by clicking the Filters icon in the published report.
> - Filters are currently read-only for end-users; however, future releases may introduce editable filters for end-users.

### Tab-Level Filters

Tab-level filters are applied to individual tabs within a report, allowing for more targeted filtering across widgets on a specific tab. Tab-level filters provide an extra layer of control over data displayed in a report, and they override any similar filters set at the report level.

**Steps:**

1. **Open Tab Settings**: In the report canvas, select the tab you wish to add a filter to. Click the **Tab settings** button located at the top-right of the tab to open the tab-level filter settings.
2. **Add Filter Group**: Click **Add filter group** to define filter conditions (for example, filter data by department, region, etc.). Choose whether the filters in the group should apply **All** (AND condition) or **Any** (OR condition).
3. **Apply the Filter**: Click **Apply** to save the filter settings and apply them to the tab.
4. **Override Behavior**: Tab-level filters override any report-level filters for the same attribute within the tab, providing fine-grained control over how data is displayed for the widgets on the tab.

> [!NOTE]
> Tab-level filters do not affect other tabs in the report. They only apply to widgets within the selected tab.

### Widget-Level Filters

Widget-level filters are applied directly to individual widgets like charts or tables, refining the data displayed within them. These filters are specific to a widget and override other filter levels (for example, report-level filters).

**Steps:**

1. **Hover Over the Widget**: In the report canvas, hover over the widget (for example, a chart or table) to expose the widget toolbar.
2. **Open the Widget Properties**: Click the gear icon on the widget toolbar to open the widget properties.
3. **Access the Filter Tab**: Navigate to the **Filter** tab in the widget properties flyout.
4. **Add Match Rules**: Click **Add filter group** to define filter conditions (for example, Planned Operating Costs > $300,000). Use **Match All** (AND) or **Match Any** (OR) rules based on your filtering needs.
5. **Save the Filter**: Once all conditions are configured, click **Apply** to save the filter settings.
6. **Preview the Data**: Check the widget to ensure the applied filters work as intended.

> [!NOTE]
> Widget-level filters take precedence over report-level filters.

### Filter Precedence Example

The Filter Precedence Example demonstrates how different filters applied at various levels (Report-level, Tab-level, and Widget-level) work together and which filter takes precedence when multiple filters are applied to the same attribute.

| Filter Attribute | Report Filter | Tab Filter | Widget Filter | Result |
|---|---|---|---|---|
| Manager | Derrick Joseph, Rosie Miller | None | None | Report Filter is applied |
| Is Role | Yes | No | None | Tab Filter is applied |
| Primary Role | Engineer, QA, Architect | Architect, UX | Engineer, Project Manager | Widget Filter is applied |

**Explanation:**
- In the first row, the Manager filter is applied at the report level, as there are no conflicting filters at the Tab or Widget levels.
- In the second row, the filter applied at the Tab level overrides the report-level filter for the Is Role attribute, resulting in the Tab Filter being applied.
- In the third row, the filter applied at the Widget level overrides both the report-level and tab-level filters for the Primary Role attribute, resulting in the Widget Filter being applied.

> [!NOTE]
> The precedence follows the order: **Widget Filter > Tab Filter > Report Filter**. Widget-level filters take the highest precedence, followed by tab-level filters, and report-level filters are applied last.

### Interactive Filtering in Report Designer

Interactive filtering in Report Designer provides a seamless way to filter data across widgets by simply interacting with a dimension value (e.g., clicking on a specific slice of a chart). It offers users the ability to create dynamic, interactive reports where one widget's selection can influence other widgets' data displayed on the same report.

#### Understanding Interactive Filtering
- Interactive filtering allows you to select a specific value within a widget (e.g., a bar or slice) and automatically filter other widgets based on that selection.
- When selecting a value in a widget (for example, clicking on a specific slice in a Pie chart), all other widgets will be filtered according to that selected value.
- **Visual feedback**: The selected bar or slice will be highlighted, while other options in the widget (bars/slices) will be greyed out, indicating the applied filter.

#### How to Use Interactive Filtering
- **Click to Filter**: For widgets like Pie charts, Bar charts, and Column charts, you can click on a specific segment (e.g., a slice or bar) to initiate filtering.
- **Single Selection**: Only one slice or bar can be selected for interactive filtering at any time. If you want to select another slice or bar, you must first unselect the current one.
- **Target Widgets**: Any widget that is connected via the same data attribute will be filtered when you click a slice/bar in the source widget.

#### What Widgets Support Interactive Filtering
- **Bar/Column charts**: Clicking on a bar will filter based on the corresponding dimension in the x-axis or y-axis.
- **Pie/Donut charts**: Clicking on a slice will filter based on the selected dimension.
- **Number Tiles/Progress Rings**: These will only support interactive filtering if they are already configured with a filter.
- **Tables**: Tables cannot initiate interactive filtering but will respond to filtering criteria applied by other widgets.

#### Interactive Filtering Behavior
- **Interactivity Within Report Tabs**: Interactive filtering only works within the same report tab. Filters applied in one tab will not affect widgets in another tab.
- **Filter Reset**: If you click outside the widget or unselect a value, the interactive filter will be reset.
- **Displayed Results**: When the interactive filter is applied, the widgets will update automatically to reflect the filtered data.

#### Handling Different Period Types

Interactive filtering can be used in reports with time-based data (e.g., Periods, Duration). Here's how it behaves based on the period type:
- **Days**: Clicking on a date will filter the data based on that specific date.
- **Months, Quarters, Years**: Clicking on a month, quarter, or year will filter the data based on the selected period.

#### Interactive Filtering and Attribute Groups
- **AND Logic**: When using interactive filtering with attribute groups, the filtering will work with AND logic, meaning all conditions within the selected attribute group will be applied.
- **Multiple Source Widgets**: Interactive filtering will support multiple source widgets, allowing you to select values across different widgets (e.g., a slice in a Pie chart and a bar in a Bar chart).

#### Visual Feedback and User Experience
- **Tooltip**: For widgets like Number Tiles or Progress Rings, a tooltip or visual indicator will inform users whether the widget supports interactive filtering.
- **Highlighted Dimension**: When you select a value in a widget, the widget dimension will be highlighted, and other dimensions' opacity will be decreased to indicate which value is being filtered.
- **Toggle between Value and Percent** requires a double-click: In widgets like Pie, Donut, Bar/Column charts, Number Tiles, and Progress Rings, you can toggle between showing values and percentages by double-clicking on the widget.

> [!NOTE]
> Below are some key points to remember:
> - Interactive filtering is only available when the report Layout Format is set to **Responsive**.
> - Interactive filtering is disabled for Bar/Column widgets where the toggle Periods=TRUE is enabled.
> - You can only initiate filtering on one dimension value per tab (e.g., one slice or one bar).
> - You can have more than one active interactive filter on a report, but only one per tab.
> - To initiate filtering on another dimension, you must reset or unselect your prior dimension selection for that tab.
> - The interactive filter dimension selection under each tab will be preserved when navigating between tabs in a report.
> - You can only perform interactive filtering when viewing a published report from the Report Viewer or from the Report Designer in Preview mode.

---

## Working with Drill Down Reports

Drill-down Reports allow you to right-mouse on a widget dimension and pass the dimension filter to another report. The drill-down icon displays next to the widget title if the drill-down report is configured on the widget. When selecting a drill-down report, the cursor focuses on the dimension, passing its value to filter the widgets in the report. You can configure up to three drill-down reports per widget.

> [!NOTE]
> Some key points to remember:
> - You can navigate to the top-level report by using the breadcrumb link.
> - Dimensions cannot be configured on Number Tile/Progress Ring. Hence, the drill-down will pass its widget filters to the drill-down report.
> - You need to select data providers for the drill-down report. When you publish a top-level report, it will also publish its drill-down report.
> - If the widget dimension from the top-level is present in the drill-down report widget's data provider, it will be filtered in the drill-down report.
> - You can define up to three drill-down reports per widget.
> - You can only drill down one level.

> [!WARNING]
> In Clarity's Report Designer, you can use the Group Others option in charts to combine smaller segments into an "Others" category. However, when you create drill-down reports for the "Others" category and set the dimension to an OBS attribute, Clarity will not display any data. This is a known issue and will be addressed in upcoming releases.

**Steps:**

1. Log in to Clarity, click **Reporting**, and click **Report Designer**.
2. Click the report you want to add drill-down reports to, and click **Edit**.
3. Select the widget you want to associate with a drill-down report and select the **Add drill-down report** option on the toolbar.
4. Enter the name of the report and click **Create**.
5. Add the relevant widgets to the Canvas and configure them. You can click each widget and use the Properties Panel to configure them. Review Create Your First Report to learn more about configuring reports.
6. Finalize your drill-down report and preview it.
7. When you are ready, use the breadcrumb to navigate back to the parent report and publish it. This will also publish the drill-down report.

> [!NOTE]
> After the report is published, you will see a drill down logo on all widgets that support drill down reports. You can right-click a dimension and click the relevant drill-down report to access it.

---

## Managing, Editing, and Publishing Reports

Managing, editing, and publishing reports in the Report Designer of Broadcom Clarity is a streamlined process designed to give users control and flexibility over their reporting outputs. Once a report is created, users can manage it by revisiting and editing its components--such as widgets, filters, and Data Providers--to ensure that the content continues to meet evolving business needs.

The Report Designer interface supports iterative modifications, allowing users to add or remove tabs, update data visualizations, adjust filter criteria, or fine-tune layouts easily.

Publishing reports in Broadcom Clarity formalizes the delivery of information by making reports accessible to authorized users in a read-only mode through the Reporting workspace. Reports go through distinct states--draft, published, and edited--allowing report creators to make changes in draft mode without impacting the live published version until updates are finalized and republished.

### Managing Reports

Once a report is created and published, you can use the Report Designer to manage, modify, and enhance the report for further insights and usability. This includes customizing chart and table properties, adjusting the layout, adding data providers, and editing both published and unpublished reports.

### Using Layouts

The Layout option enables users to structure the report for optimal viewing and presentation.

**Access the Layout Panel:** In the report canvas, click on the **Layout** button located in the top menu to access the layout configuration panel.

**Configure Page Orientation:**
- **Orientation**: Select between **Landscape** and **Portrait** based on the report's content and intended presentation format.
- **Responsive or Fixed Layout**: Choose **Responsive** for a flexible layout that adapts to various screen sizes or **Fixed** for a stable structure that is consistent across all devices.

**Adjust Widget Placement:**
- Drag and drop widgets on the canvas to organize them in a visually cohesive manner. You can also resize widgets to fit them within the layout.
- Use grid alignment tools to ensure even spacing and proper positioning of charts, tables, and tiles.

**Preview the Layout:** Click the **Preview** button to view how the report will look in the final format, ensuring it aligns with your expectations before publishing.

**Save Layout:** Once you are satisfied with the layout configuration, click **Save** to retain the design.

**Export Layout:**
- If you have selected the **Fixed Layout**, you can export the report directly to PowerPoint/PDF using the **Export to PPTX** / **Export to PDF** feature.
- Note: Exporting to PowerPoint/PDF is not supported in Responsive Layout.

**Fixed Layout Format:**
- The Fixed Layout format offers a static design, ensuring precise content placement for consistent presentation. Reports designed in this format can be exported for PowerPoint presentations, where specific elements must remain within the layout boundaries.
- **Zoom In and Out Control**: The Zoom In and Zoom Out control allows you to magnify the canvas and its widgets to help designers when configuring reports. Note: This doesn't increase the layout size of the report -- it only magnifies the canvas and its content for better visibility within the report designer.
- **Grey UI Treatment**: A Grey UI treatment will be applied to areas outside the layout boundaries, helping designers identify areas where they cannot place widgets when configuring reports to be exported to PowerPoint. Note: You will not be able to place widgets in the grey areas, and the greyed-out areas will not be included in the PowerPoint export.

### Editing a Report

In Report Designer, you can edit both published and unpublished reports. Editing options vary depending on whether the report has been published before.

#### Editing a Report That Has Never Been Published

1. **Open the Draft Report**:
- Access the Reports grid and locate the draft report.
- Click on the report name to open it for editing.
2. **Modify Widgets and Properties**:
- Adjust existing widgets or add new ones as needed.
- Access the widget Properties to configure settings such as metrics, dimensions, and display options.
3. **Update Filters and Layout**:
- Add or modify filters at the widget, tab, or report level.
- Revisit the Layout panel to adjust the orientation or rearrange widgets for optimal presentation.
4. **Save Changes**: Since the report is in draft mode, changes are saved automatically.
5. **Preview and Publish (Optional)**: Click **Preview** to review the report. When ready, click **Publish** to make the report accessible to users.

#### Editing a Report That Has Been Previously Published

1. **Enter Edit Mode**:
- Locate the published report in the Reports grid.
- Click on the report's **Edit** button to open it in Edit Mode. Note: The Edit button is only available for published reports.
2. **Make Necessary Changes**:
- **Modify Widgets**: Add new widgets or edit existing ones.
- **Adjust Filters**: Update filters at various levels (widget, tab, or report) as required.
3. **Save as Draft or Publish Changes**:
- To save the modifications without impacting the live report, choose **Save as Draft**. The report will display **Has Edits** status, allowing further updates.
- **Publish Changes**: If you are ready to apply the edits to the live version, click **Publish**. This updates the published report and replaces the previous version.
4. **Preview the Changes**: Use **Preview** to review the adjustments before finalizing them in the published report.
5. **End Edit Mode**: Exit Edit Mode once the changes are complete, and the report will reflect the latest updates.

### Working with Preview Mode

Preview Mode enables report designers to validate and debug the report, as well as view the report as an end user would see it.

**Steps to Use Preview Mode:**

1. **Access Preview Mode**: Once your report is designed in Report Designer, navigate to the Preview Mode to view the report from an end-user perspective. To activate Preview Mode, click on the **Preview** button located in the report toolbar.

2. **Viewing Filters**: If report filters are enabled, you will be able to view and update the filters while in Preview Mode. This allows you to test different filter configurations and see how they affect the displayed data.

3. **Viewing the Report**: Preview Mode displays the report without the report design tools, giving you a clean view similar to what end-users will see when viewing the report in a published format. You can interact with the report as an end-user would.

4. **Using Pagination**: If your report includes pagination, this feature will be visible in Preview Mode. You can navigate through different pages of the report to ensure the data is being displayed correctly across all pages.

5. **Viewing Attribute Groups**:
- In Edit Mode, you will only see the first record in the attribute group and no pagination bar.
- If the first record does not display the data as needed, you can use the report or tab filter to select another record.
- In Preview Mode, designers can use the pagination bar to step through the records in the attribute group.

6. **Exporting the Report**: In Preview Mode, designers can export the report to PowerPoint (PPTX)/PDF. To export, click **Export > Export to PPTX** / **Export to PDF** located in the toolbar.

7. **Exit Preview Mode**: If you need to make further edits to the report, you can exit Preview Mode by clicking the **Exit Preview** button, returning you to the design interface.

**Additional Features in Preview Mode:**
- **Report Layout**: Preview Mode works with both Responsive and Fixed layout formats. You can toggle between these formats to see how your report will appear in different viewing scenarios.
- **Data Limiting**: A **Show Data** dropdown allows you to limit the number of records displayed in the preview, which is especially useful for large datasets.
- **Export to PPTX**: You can export the report as a PowerPoint presentation while in Preview Mode. This feature is available through the **Export to PPTX** button.
- **Export to PDF**: You can export any fixed-layout report--or a specific tab within the report--to PDF. This feature is available through both the Export menu and report scheduling.

> [!IMPORTANT]
> - Preview Mode works independently of the design features, allowing designers to test and interact with the report as an end-user would.
> - Report Filters and Pagination are fully functional in Preview Mode.

### Associating Report to Menu Icon

After creating and publishing a report, you may want to make it easily accessible to users by associating it with a menu icon in Clarity's main navigation.

1. **Log in to Clarity and Access System Settings**:
- Log in to Clarity.
- Navigate to **Administration** from the main menu.
- In the Administration section, select **System Settings** to access the configuration options.
2. **Navigate to Menu Management**: Within System Settings, locate and open the **Navigation Menu** tab.
3. **Add a New Menu Item**: Click on the **Add Page** button to create a new menu item for your report.
4. **Configure Menu Item Settings**:
- **Name**: Enter the name of the new menu item.
- **Page**: Select the report you want to associate with the menu item.
- **Icon**: Choose an icon to visually represent the report in the menu.
- **Show**: Enable the Show checkbox to make the report visible in the navigation menu.
5. **Assign Permissions**: Ensure that the appropriate view permissions are set for the report.
6. **Save and Apply Changes**: Click **Save** to apply the changes.
7. **Verify Menu Association**: Return to the main navigation menu to verify that the new report menu item is visible and accessible.
8. **Exporting the Report** (Optional): Users can export their report to PPTX/PDF for offline use. To export, navigate to the associated report menu icon, open the report, and click **Export > Export to PPTX** / **Export to PDF**.
9. **Modify or Remove the Menu Icon** (if needed):
- To modify the menu icon configuration, return to **System Settings > Navigation Menu** and locate the specific menu item.
- Select the menu item to edit its properties or uncheck the **Show** box to remove it from the menu without deleting the report.

> [!NOTE]
> Below are some key points to remember:
> - If you do not see data in your widgets, consider these checks:
>   - Ensure the **Load Data Warehouse** job has been run. Reports rely on data from the data warehouse.
>   - If some users can see data in widgets while others cannot, verify that the **Load Data Warehouse Access Rights** job has been executed, as this could be a permissions issue.
>   - If TSV (Time-Scaled Value) information is missing from your widgets, confirm that the **Include SQL Curve Data (BETA)** flag is enabled under System Options. If not, enable the flag and perform a full data warehouse load.
> - If data or configurations are not appearing as expected, try refreshing your browser as there are known refresh issues with the Report Designer.
> - **Active Flags for Reports and Data Providers**:
>   - The Active flag determines whether reports and data providers can be selected for use:
>     - If a data provider is inactivated, existing reports using the data provider will continue to function. However, new reports will not be able to use the inactivated data provider.
>     - If a report is inactivated, existing published reports linked to a menu icon will remain functional. However, if you remove the menu icon, the inactive report cannot be re-assigned to a menu icon.

---

## Working with Reports

> [!TIP]
> **Experience Clarity Like Never Before** -- New Interactive Simulation Now Live! Explore our latest Simulation Lab, now available on the Broadcom Software Academy.

> [!TIP]
> Continue Learning: Enroll in **Clarity 16.x - Reporting Essentials** to gain a deeper understanding of Clarity's reporting capabilities.

The Reports tile in Clarity's Reporting Workspace provides a centralized and organized way to view and work with reports. It is a read-only interface that lists all the reports a user can access, supporting report execution, scheduling, sharing, and export.

Key capabilities of the Reports tile include:
- **Accessing Reports**:
- Open the Reports tile from the **Reporting** section in the left-hand navigation menu.
- Access is controlled by the following global rights: `Reporting > Reports > Navigate` and `Reporting > Report Viewer > View > All`. Without these rights, users cannot see or open the Reports tile.
- **Reports Grid Layout**: The grid contains three tabs:
- **Available Reports**: Lists all reports you can open and run. Columns typically include Report Name, Description, and Last Updated. Click the report name to open it in the report viewer. You can schedule reports from this tab, except for reports with a Responsive layout.
- **Scheduled Reports**: Lists report schedules you can view or manage. Columns include Schedule Name, Report, Status, Next Run, Last Run, Format, Shared to People, Shared to Groups, Language, Locale, Date Display, Unit of Measure, and Job ID. The Language, Locale, and Unit of Measure fields can be edited directly in the grid. You can edit, pause, resume, or delete schedules from this tab.
- Any changes you make to editable columns such as Language, Locale, or Unit of Measure in the Scheduled Reports tab will apply to future runs only and will not affect runs that are already in progress or completed.
- The Export Format for a schedule (PDF, PPTX, or CSV) is locked after the schedule is created and cannot be changed later.
- Responsive layout reports cannot be scheduled.
- **Reports Library**: Stores output from both scheduled runs and on-demand exports from the report viewer. The grid supports search, filters, saved views, conditional formatting, and view options. Columns include Name, Download, Status, Run By, Format, Job ID, and Run ID. You can open the details panel to view run metadata, filters used for the run, and log details if available. Access to this tab is controlled by the `Reporting > Reports Library > Navigate` global right.
- **Filtering Reports**: Use the filter panel or quick filter row to narrow down the list by attributes such as Report Name, Description, Status, and Tags (if configured).
- **Marking Reports as Favorites**: Click the star icon to mark frequently used reports.
- **Exporting the Reports List**: Export the list of reports currently displayed in the grid to a CSV file for analysis or record-keeping.
- **Running Reports and Export Options**:
- When viewing a report in the Report Viewer, export options depend on the report's layout:
- **Fixed layout**: Export to PowerPoint (.pptx) or PDF (.pdf). Exported files retain supported widget formatting, data, and hyperlinks.
- **Data Extraction (CSV) layout**: Export to CSV (.csv) only.
- A progress banner is displayed while the export is processing. Exported files are available from both the Notifications panel and the Reports Library.
- **Report Scheduling**:
- Create one-time or recurring schedules (daily, weekly, or monthly).
- Select the export format based on the report layout.
- Configure language, locale, date display format, and unit of measure for the scheduled output.
- Apply filters to the scheduled report.
- Use the **Email** tab in the schedule modal to send scheduled outputs as attachments or with a link to the Reports Library.
- Use the **Notify** tab to send notifications on completion or failure to selected users or groups.
- **Report Sharing**: Scheduled outputs can be shared with selected users or groups. Recipients do not need direct report access rights to view the output in the Reports Library.

### Pre-Requisites
- **Deploying the Report Service**: To enable report scheduling in the new Clarity Reporting, you must deploy and start the Report service.

> [!NOTE]
> The Report service is a new background (bg) type service that functions as the report scheduler for Clarity Reporting.

Steps to Deploy and Start the Report Service:

1. Add and deploy the service:
   ```
   service add deploy report
   ```
2. Start the service:
   ```
   service start report
   ```

Once deployed and started, the Report service will handle all scheduled report executions within Clarity Reporting.
- A feature toggle called **Reporting: Reports** is available to enable or disable the Reports functionality. It is enabled by default.
- Users will not have access to the Report Designer unless they have the `Reporting > Navigate` and `Report Designer > Navigate` rights.
- Access to the Reports tile is controlled by the following:
- `Reporting - Reports - Navigate`: Required to access the Reports tile in the Reporting workspace.
- `Reporting - Available Reports - Navigate`: Allows user access to the Available Reports tab.
- `Reporting - Scheduled Reports - Navigate`: Allows user access to the Scheduled Reports tab.
- `Reporting - Reports Library - Navigate`: Allows user access to the Reports Library tab.
- `Reporting - Report Viewer - View - All` is required to view reports in the Reports tile.
- **Global Security Rights to manage report scheduling**:
- `Reporting > Report Schedule - Create`: Allows user to create report schedules.
- `Reporting > Report Schedule > Delete - All`: Allows user to delete all report schedules, including those created by other users.
- `Reporting > Report Schedule > Edit - All`: Allows user to edit all report schedules, including pause, resume, and cancel actions.
- `Reporting > Report Schedule > View - All`: Allows user to view all report schedules.
- Administrators have the global security rights to manage report scheduling.
- Instance or OBS security rights are not available for report schedules.
- Report Designer and Report Viewer OBS security rights are assigned on the Report object. To configure OBS rights for reporting, associate the Report object with the OBS. The system automatically adds a value to the API Attribute ID, which will make the OBS visible in Clarity.
- Report Designer and Report Viewer instance security rights are assigned on the Report object.
- To receive Bell notifications for scheduled reports, users must enable the **Report Run Status** notification in **Avatar > Settings > Notifications** in Clarity or in the Notifications tab in Classic.
- When emailing scheduled report output to external recipients, the SMTP configuration must allow sending to external addresses.
- For reports built using the Data Extraction (CSV) layout:
- Only one non-system data provider can be selected.
- The Export tab in the schedule modal will show CSV as the only format, and it is view-only.

### Accessing the Reports Tile

To access the Reports tile in Clarity, navigate to the **Reporting** section in the left-hand menu and select **Reports**. The tile opens in the Reporting workspace and displays reports in three tabs: Available Reports, Scheduled Reports, and Reports Library. The tabs that appear depend on the access rights assigned to you.

### Viewing the Reports Grid

The Reports grid displays the reports you can access in three tabs: Available Reports, Scheduled Reports, and Reports Library.

**Grid Features:**
- **Available Reports tab**: Lists all reports you can open and run. You can schedule reports from this tab using the right-click Schedule action. Reports with a layout format of Responsive cannot be scheduled.
- **Scheduled Reports tab**: Lists report schedules you can view or manage. The Language, Locale, and Unit of Measure columns can be edited directly in the grid. Click the schedule name to open the schedule modal. Changes apply to future runs only.
- **Reports Library tab**: Stores output from scheduled runs and exports made from the report viewer. You can download completed outputs and, where available, view the filters used and run log details.
- **Filter**: Filter by attributes such as name, description, status, and tags (if configured). Filtering supports lookup-based attributes, including "Is Empty" and "Is Not Empty" options.
- **Export**: Export the grid data to a CSV file for use outside Clarity.
- **Favorite Reports**: Add the Starred column from the Columns panel to mark reports as favorites for quick access.

### Viewing Report Details

Click a report name in the grid to open it in the report viewer. The report opens in read-only mode.

**Viewer Actions:**
- **Schedule**: Use the Schedule button to schedule the report.
- **Export**: Use the Export button to export the report. Available formats depend on the report layout:
- **Fixed layout**: Export to Microsoft PowerPoint (.pptx) or PDF (.pdf).
- **Data Extraction (CSV) layout**: Export to CSV (.csv). Export progress is shown in a banner. You can download the file from the Notifications panel or from the Reports Library tab.
- **Pagination**: Use the navigation arrows at the bottom of the viewer to move through pages of the report.
- **Return to grid**: Click the Reports breadcrumb at the top of the page to go back to the Reports grid.

### Filtering Reports

The Reports grid allows you to apply filters to limit the reports displayed.

**Steps to Filter Reports:**

1. Click the **Filter** icon next to the grid title.
2. Select the filter criteria from the available options.
3. The grid updates to display reports that match the selected filter conditions.

### Exporting Reports List from the Grid

You can export the list of reports currently displayed in the grid to a CSV file.

**Steps to Export Reports:**

1. Click the **Export** button at the top-left of the grid.
2. Select **CSV** as the export format.
3. The grid data is downloaded as a CSV file, which can be opened in any spreadsheet application.

### Marking Reports as Favorites

You can mark frequently used reports as favorites to make them easier to find.

**Steps to Mark a Report as Favorite:**

1. In the Reports grid, click the star icon next to the report name.
2. The report is marked as a favorite and will appear when you apply the favorites filter.

### Accessing Published Reports

Published reports are available for viewing by any user with the appropriate permissions. You can access these reports directly from the grid or through the menu icons if configured.

**Draft Reports**: Draft reports are only accessible to the creator and users with edit permissions. They are not visible to general users until they are published.

> [!TIP]
> Watch the following video to learn how to Work with Reports.

### Navigating Between Reports

To navigate between different reports, use the breadcrumb navigation at the top of the page. Clicking on the Reports breadcrumb will return you to the main Reports grid.

**Pagination**: You can navigate between pages of the report using the pagination controls at the bottom of the report.

### Schedule a Report

Scheduling a report allows you to run it automatically at a set time, either once or on a recurring basis. Scheduled reports can include filters, export formats, sharing, emails, and notifications. Outputs are available in the Scheduled Reports tab and the Reports Library.

**Steps to Schedule a Report:**

1. **Open the Reports tile**:
- From Available Reports, select the report to schedule.
- From Scheduled Reports, open an existing schedule to edit.
- Reports with a Responsive layout cannot be scheduled.

2. **Open the Schedule modal**: Click **Schedule** in the report header, or right-click the report name in the grid and choose **Schedule**.

3. **Configure the Schedule modal tabs**:

| Tab | Purpose | Key Fields and Actions |
|---|---|---|
| Schedule | Set when and how often the report runs | Run On, Enable Recurrence (Weekly/Monthly), Repeat On, Ends |
| Filter | Apply or adjust filters for this schedule | Match Filters (All/Any), hidden filters, locked filters, editable filters, Unit of Measure, and Period |
| Export | Define export format and display options | Formats (Fixed: PDF/PPTX, CSV: CSV only), Exclude Tabs, Language, Locale, Date Display, Unit of Measure |
| Share | Share the report output with other users or groups | Add People, Add Groups. Outputs appear in Notifications and Reports Library |
| Email | Email the scheduled output to recipients | To/CC/BCC, Subject, Message, Attachments |
| Notify | Notify users of run completion or failure | Notify on failure (default includes creator), Notify on completion |

**Detailed Tab Information:**

**Schedule tab:**
- **Run On**: Select the date and time when the report should run. Defaults to the current date and time. Selecting a past date/time runs the report immediately.
- **Enable Recurrence**: Turn on to run the report on a repeating schedule.
- **Repeat Every**: Select Week or Month.
- **Repeat On**: For weekly schedules, choose the days of the week (All, Sun-Sat). For monthly schedules, choose the months and enter the dates of the month (comma-separated).
- **Ends**: Choose whether the schedule continues indefinitely (**Never**) or stops on a specified date (**On a Date**).

**Filter tab:**
- Displays all filters applied to the report.
- **Match Filters**: Select **All** to match all conditions or **Any** to match at least one condition.
- **Hidden filters**: Not shown but applied when the report runs.
- **Locked filters**: Show a lock icon and cannot be changed.
- **Editable filters**: Can be modified for this schedule.
- **Unit of Measure**: Allows you to specify how data is represented in the report output. Select one of the following: FTE, Hours, Days, or % Availability.
- **Period**: Defines the reporting time frame for the scheduled run.

**Export tab:**
- **Format**:
- Fixed layout: Choose PDF (.pdf) or PowerPoint (.pptx). PDF is selected by default.
- Data Extraction (CSV) layout: CSV is the only available format and the field is view-only.
- **Exclude Tabs**: Lets you exclude one or more tabs from the scheduled export output. All tabs are included by default. If a report contains only one tab, this field is hidden.
- **Language**: Required; defaults to your user setting but can be changed.
- **Locale**: Defaults to your user setting but can be changed.
- **Date Display**: Defaults to your user setting; select a different display format if needed.
- **Unit of Measure**: Defaults to your user setting; choose from FTE, Hours, Days, or % Availability.

**Share tab:**
- **Add People**: Select individual users to receive the scheduled report.
- **Add Groups**: Select security groups to share the report with. All users in the group receive the scheduled output.
- Shared recipients see the report in their Notifications panel and in the Reports Library.

**Email tab:**
- **To**: Enter one or more email addresses (required to send email). Separate multiple addresses with commas.
- **CC** and **BCC**: Optional.
- **Subject**: Optional; appears in the email subject line.
- **Message**: Optional; appears in the email body.
- **Attachments**:
- **Report as attachment**: Includes the report output in the selected format.
- **Add Reports Library link**: Adds a link to the report in the Reports Library (recipients need Clarity login and rights).
- Emails can be sent to internal and/or external addresses. External delivery requires SMTP configuration to allow it.

**Notify tab:**
- **Notify on failure**: Add people or groups to be notified if the schedule fails. The creator is added by default and can be removed.
- **Notify on completion**: Add people or groups to be notified when the schedule completes successfully.
- Notifications appear in the bell icon and include a link to the run details in the Reports Library.

4. **Save the schedule**: The Save button is enabled once all required fields are completed.
5. **Manage schedules**: Use the Scheduled Reports tab to edit, pause, resume, cancel, or delete schedules.

> [!NOTE]
> Some of the key points to remember:
> - Reports with a Responsive layout cannot be scheduled.
> - Draft or inactive reports cannot be scheduled.
> - Unpublished report edits are not included in scheduled runs.
> - Data Extraction (CSV) layout schedules always export CSV, and the format is view-only in the Export tab.
> - Deleting a schedule also deletes its generated runs from the Reports Library.
> - Reports that return no data are still emailed to all recipients listed in the Email tab.
> - The schedule creator no longer receives a Share bell notification unless they add themselves in the Share tab, but they will still have access to the run in the Reports Library.
> - Email sharing notifications are not sent to any user, including the schedule creator.
> - If a Reports Library link is included in an email, recipients must have Clarity access and the required rights to open it.
> - When emailing scheduled reports to external addresses, the SMTP configuration must allow external delivery.

### Viewing and Editing Report Schedules

You can manage your scheduled reports from the Scheduled Reports tab in the Reports tile. This includes updating schedule details, changing filter values, updating recipients, or modifying notification preferences.

**Steps to View and Edit Report Schedules:**

1. **Navigate to the Reports tile**: Open the Reporting workspace and select the Reports tile. Click the **Scheduled Reports** tab to view all reports you have scheduled.
2. **Locate the report schedule**: Use search or filters in the grid to find the schedule you want to edit.
3. **Open the schedule for editing**: Click the **Schedule Name** in the grid to open the Schedule modal where you can make changes. Right-click > **Open Details** opens a read-only details panel for quick review without editing.
4. **Update schedule details**: In the Schedule modal, you can modify run date/time, recurrence, filters, export options, recipients (Share/Email), and notifications (Notify).
- **Exceptions**: Locked and hidden filters cannot be edited. Some options depend on the report configuration and your access rights.
5. The actions available depend on the schedule's status:
- **Scheduled**: View or edit the schedule.
- **Completed**: View only.
- **Paused**: View or edit the schedule.
- **Cancelled**: View only.
- **Deleted**: No longer visible in the grid.
6. **Save your changes**: Click **Save** to apply updates.
7. **Track schedule status**: In the Scheduled Reports tab, the Status column updates automatically based on scheduled run time and completion.

> [!NOTE]
> Some of the key points to remember:
> - Reports with a Responsive layout cannot be scheduled.
> - Draft or inactive reports cannot be scheduled.
> - Unpublished edits will not appear in the scheduled output; publish changes first.
> - You can Pause, Resume, Cancel, or Delete schedules directly from the right-click menu in the grid.

### Exporting a Report

You can export reports from the Reports tile in formats such as PDF, PPTX, or CSV, depending on the report layout.

**To export a report:**

1. Log in to Clarity and navigate to the **Reporting** section from the main navigation pane.
2. Click **Reports** and open the required report from the **Available Reports** tab or from the **Reports Library** tab.
3. In the report view, click the **Export** control and choose one of the available options:
- **Export to PDF** -- available for reports with a Fixed layout.
- **Export to PPTX** -- available for reports with a Fixed layout.
- **Export to CSV** -- available for reports designed with the Data Extraction (CSV) layout.
4. After you select a format, a banner appears at the top of the page: "Export in Progress. Download will be available in notifications." Use **Cancel** on the banner to stop the export if needed.
5. When the export completes, open the **Notifications** panel to download the file. The output is also available in the Reports Library tab.

> [!NOTE]
> Some of the key points to remember:
> - Fixed layout supports export to PDF and PPTX. The Export options are disabled for Responsive layout reports.
> - Data Extraction (CSV) layout supports export to CSV only.
> - Exported content reflects the data and filters applied at the time of export.
> - Large reports may take longer to export. You can continue working while the export runs in the background.
> - **Handling Timed-Out Widgets in Exports**:
>   - If a widget fails to load within the maximum processing time, a message appears inside the exported file indicating that the widget timed out.
>   - Other widgets continue to display data normally so users can still view partial results.
>   - A banner notification also appears in the Reporting workspace when widgets time out.
> - **Export to CSV -- Display Type Issue**: When exporting Data Extraction (CSV) reports that use the Display Type option in the table column menu, the exported CSV currently shows only the Value instead of the configured Range Description and Value. (Reference: DE178099)
> - **Export to PDF -- Attribute Groups with Images**: Exporting to PDF may fail if an Attribute Group contains an image. (Reference: DE178017)
> - **Table Cell Overflow in Exports**: When table cells contain large amounts of text that extend beyond a single page or slide, the content may appear on the next page rather than continuing from the previous one. (Reference: F58825)
> - **Export Format Limitations**: Users can export to PPTX or PDF only when the report layout type is Fixed. Support for exporting Responsive layout reports and individual table widgets to CSV is planned for a future release.
> - **Report Output Limits**:
>   - When the number of TSV records exceeds 50,000, the exported widget displays the message: "Maximum 50K records. Please add more filters and try again."
>   - When an attribute contains more than 100 periods: "Maximum 100 periods allowed."
>   - When the total number of periods across all attributes exceeds 900: "Maximum 900 periods and metrics allowed."
> - **PPTX/PDF Visual Differences**:
>   - Number Tile widgets may appear rectangular in exported files but square within Clarity reports.
>   - Bar and Column chart legends appear only in English.
>   - Rich Text formatted attributes are not currently supported in exported reports.
> - **Report Notifications for Scheduled Exports**:
>   - The user who creates a schedule does not automatically receive a bell notification.
>   - To receive notifications, add yourself in the Share tab when scheduling.
>   - All users added in the Share tab receive bell notifications when the report completes.
>   - Email notifications are sent only to recipients listed in the Email tab.
> - **Font Rendering in PPTX Exports**: Fonts are rendered within widget boundaries using a 1-pixel-to-0.75-point conversion to maintain consistent sizing and layout.
> - **Page Limits in Exported Reports**: Reports that exceed 500 pages or slides are truncated. The exported file contains the first 500 pages of content and one additional slide displaying the message: "This file only includes 500 pages because this is the maximum supported by the export." (Note: Jaspersoft does not support partial page exports and returns an error instead.)

### Working with the Reports Library

The Reports Library in Clarity lets you view and download report outputs generated from scheduled runs or exports made from the report viewer. Use this tab to retrieve completed reports, review the filters applied during the run, and check execution logs. On-demand exports from the Report Viewer (PDF, PPTX, or CSV) are also automatically saved to the Reports Library.

**Steps to Work with the Reports Library:**

1. **Navigate to the Reports Library**:
- Log in to Clarity.
- Navigate to **Reporting > Reports**.
- Select the **Reports Library** tab.

2. **View the Reports Library grid**: The grid lists completed report outputs. Common columns include:
- **Name**: The name of the generated report output. Click the link to open details.
- **Download**: A download icon to save the file to your local system.
- **Report**: The name of the original report definition.
- **Status**: The run status (for example, Completed).
- **Run By**: The user who executed the report.
- **Format**: The file format (for example, PDF, PPTX, or CSV).
- **Finish**: The date and time when the run completed.
- You can customize the grid by using the Columns panel to add or remove fields, or by using Group By to organize data.

3. **Open report output details**: Click the **Name** link to open the output in a modal window. The modal includes:
- **Filter**: Shows filter values used during the run. If no filters were applied, the page shows "No Filters To Show."
- **Logs**: Displays execution log entries such as Job Started, Message, and Job Completed, with timestamps.

4. **Use the Details panel**: Select a row to display the Details panel on the right. The panel includes:
- **Details**: Shows metadata such as name, source report, status, format, finish date, and a Download link.
- **Logs**: Displays the same execution log information as the modal window.

5. **Download a report**: Click the **Download** icon in the grid or the **Download** link in the Details tab.

> [!NOTE]
> Some of the key points to remember:
> - Access to the Reports Library is controlled by assigned security rights. If you cannot view or download a report, contact your administrator.
> - Completed outputs in the Reports Library include audit information such as applied filters and execution logs.
> - The Reports Library is for viewing outputs. To manage schedules (pause, resume, cancel, delete), use the Scheduled Reports tab.
> - The Details panel provides quick access to report metadata, logs, and actions such as delete or download.
> - **Delete reports from the Reports Library**:
>   - You can delete completed report outputs directly from the Reports Library using the Delete action available in the grid or in the Details panel.
>   - Only the user who created or scheduled the report can delete its associated outputs.
>   - When deleting a scheduled report, a confirmation message appears before deletion: "This action will delete the schedule and all associated report instances in the Reports Library. Do you want to continue?"
>   - Once deleted, the report output is permanently removed from the library and cannot be recovered.
> - **Purge Reports Job**: Administrators can periodically clean up report data using the Purge Reports job. This job permanently removes completed report instances from the Reports Library based on parameters such as creation date or report owner.
>   - **Job Name**: Purge Reports
>   - **Job ID**: `PURGE_REPORTS`
>   - **Purpose**: To remove old or unnecessary report instances from the Reports Library and reduce storage usage.
>   - **Scope**: Deletes selected report instances permanently; cannot be undone.

### Export Enhancements (Clarity 16.4.0)

Clarity 16.4.0 introduces several export enhancements that ensure greater visual and functional consistency between the report layouts seen in the Reporting workspace and the exported PDF or PowerPoint (PPTX) files. These improvements enhance export fidelity by accurately preserving table formatting, widget styling, and conditional formatting configurations.
