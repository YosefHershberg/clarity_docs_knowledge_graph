---
title: Clarity Release Notes
tags:
  - reference
aliases:
  - Release Notes
canonical: true
audience: admin
domain: reference
---
# Clarity Release Notes

This section provides the following information specific to this release:

- **Release Notes** — new features, enhancements to existing features, resolved issues, known issues, and third-party software agreements
- **Change Impact and Upgrade** — changes, their impacts, and required actions for your upgrade
- **Known and Resolved Issues** — identified challenges or glitches and the status of their resolution
- **Third-Party Software Agreements** — terms and conditions governing third-party software use and distribution
- **Release Comparison** — side-by-side view of features across active releases
- **Hardware and Software Compatibility Specifications** — hardware, software requirements, and supported third-party component versions
- **Clarity and Jaspersoft Cumulative Patch Readme File** — patch summary and installation/uninstallation instructions

> [!NOTE]
> Clarity Policies:
> - Customer-Reported Defect Resolution Policy
> - Accessibility
> - Modification Policy
> - Clarity SaaS Service Description (SaaS Only)
> - Clarity for FedRAMP

## Introducing Enhancements to Vaia

- [[#Announcing General Availability of Vaia]]
- [[#Define AI Agents for Attribute Context]]
- [[#Configure AI Agents to Generate Revise and Review Content]]
- [[#Summarize Status Reports using Standard Reporting Artifacts]]
- [[#Use Files as Data Sources for AI Agents]]
- [[#Validate AI Model Configuration]]
- [[#View Actual AI Error Messages]]
- [[#Include Rich Text Attributes in AI Prompts]]
- [[#Connect via Gemini API]]
- [[#Review AI Consumption Data]]

### Announcing General Availability of Vaia

In Clarity 16.4.1, Vaia transitions from Beta to **General Availability (GA)**.

**Key Enhancements:**

- The "Beta" tag is removed from the Vaia module in Clarity Administration
- Vaia is available for configuration immediately upon upgrade
- Enable the **Activate Vaia AI Service** toggle in **System Options** to use the feature
- Ensure you have the **Administration - Vaia - Navigate** access right to configure Vaia
- Configure a supported AI service (e.g., Gemini, OpenAI) within Clarity to enable functionality

**Upgrade Impact:** After you upgrade, Vaia is available as a General Availability feature. Administrators must enable the **Activate Vaia AI Service** toggle in System Options and configure a supported AI service provider.

### Define AI Agents for Attribute Context

You can now define AI Agents with a specific **"Attribute"** context, allowing you to target individual fields for generation or review, and enabling simultaneous execution of multiple agents on a single page.

**Key Enhancements:**

- **Attribute Context:** A new **Attribute** context option is available when creating a new agent, restricting availability to a specific field within the object instance
- **Flexible Output Locations:**
  - **Text Field** — directs the AI response to populate the selected attribute (only editable when Context is set to Attribute)
  - **Chat Panel** — displays responses in the chat flyout panel; ideal for reviews or summaries that should not overwrite field data
- **Target Selection:** A new **Attribute** dropdown lets you select the specific field where the AI Agent will be available
- **Simultaneous Execution:** Unlike Workspace or Object context agents, Attribute context agents can run concurrently across multiple fields on the same page

**Upgrade Impact:** After you upgrade, any existing AI actions targeting specific attributes are automatically converted to AI Agents with the Attribute context preserved.

### Configure AI Agents to Generate, Revise, and Review Content

In Clarity 16.4.1, the **"Enable AI"** tab has been removed and all content operations are consolidated under the **AI Agents** tab. You can now use a single framework to configure agents that generate new content, revise existing text, or provide reviews.

**Key Enhancements:**

- **Unified Configuration:** The Enable AI tab is removed; navigate directly to the AI Agents tab to manage all GenAI capabilities
- **Content Generation:** Configure agents to generate content for Large String - Rich Text attributes; define Output Location as **Text Field** to populate the response directly
- **Content Review and Revision:**
  - **Revise** — configure agents to rewrite text (e.g., "Make professional") and update the field directly
  - **Review** — configure agents to analyze content and provide feedback in the Chat Panel without altering the source attribute
- **Expanded Prompt Context:** Include Large String - Rich Text attributes and uploaded files (PDF, CSV, etc.) as data sources in agent prompts

**Upgrade Impact:** After you upgrade, all previously defined AI actions are moved to the AI Agents tab.

- **Naming Convention:** Converted agents are renamed using the format: `<Action Mode> <Attribute Name> in <Object Name>`
- **Cleanup:** Any legacy AI Action missing required attributes will be removed from the system
- **Prompt Updates:** Migrated prompts will include the instructions Clarity previously added automatically; review and remove redundant instructions as needed

### Summarize Status Reports using Standard Reporting Artifacts

The status report summarization logic has been moved to a standard query-based data provider and report. You can now fully customize the data sent to the AI for status report summaries.

**Key Enhancements:**

- **New Seeded Data Provider:** A new data provider called **Status Summary Artifacts** has been added, using a query to retrieve the same artifacts as the legacy AI Action
- **New Sample Report:** A report called **Status Summary Artifact (Sample)** is included, displaying the investment key, status report key, and relevant artifacts
- **Customizable Data Source:** Copy the default data provider and report to modify artifacts collected, tailoring data used for AI summarization to your specific needs

**Upgrade Impact:** After you upgrade, any existing AI Action for status report summarization is automatically converted to an AI Agent.

- **Automatic Configuration:** The new **Status Summary Artifact (Sample)** report is automatically added as a data source mapping to the converted agent
- **Action Required:** Review the report content and the agent prompt to ensure they meet your requirements

### Use Files as Data Sources for AI Agents

The AI Agent definition is expanded to allow using documents as a data source. You can now use files to provide specific context to your AI models.

**Key Enhancements:**

- **Agent Configuration:**
  - Use the new **Attachment** option on the Agent configuration page to upload up to 10 documents
  - Use the button below the prompt to specify which documents to send during execution
  - Uploading a document does not automatically send it with the prompt; all uploaded documents are available to the end user to reference during AI interaction
- **Model Configuration:**
  - **File Upload URL** — configure the API endpoint to upload documents for LLMs that require documents as a separate payload
  - **File Upload Maximum Size (MB)** — set the maximum upload size for documents and the prompt
  - **Supported File Extension** — define which document types (e.g., txt, pdf, csv) users can upload; separate multiple extensions with commas
- **End User Experience:**
  - Access uploaded documents included in the agent configuration during analysis
  - Type "+" in the follow-up prompt text area to open a document list and select a specified document
  - Click on a document in the text panel to view or download it

**Upgrade Impact:** After you upgrade, if you configure an agent with files and the **File Upload URL** is not populated, the user will receive an error message when executing the AI Agent.

### Validate AI Model Configuration

You can now validate the model configuration directly from the **AI Models** administration page, providing immediate feedback on connection status and configuration validity.

**Key Enhancements:**

- **New Context Menu Option:** A new **Validate Model** option is available within the context menu of the AI Models tab, allowing you to trigger a validation call without leaving the administration grid
- **Validation Logic:**
  - The option is only available for rows where the **Integration** value is populated
  - Clicking the option initiates a call to the AI provider and displays a toast message indicating success or a specific error
- **Performance:** Validation may take some time to receive a response from the LLM

**Upgrade Impact:** After you upgrade, you can immediately use the **Validate Model** action on the AI Models page. No additional configuration is required.

### View Actual AI Error Messages

You can now view the specific error message provided by the Large Language Model (LLM) directly in the user interface, enhancing transparency and speeding up troubleshooting.

**Key Enhancements:**

- **Expanded Error Handling:** The system captures and displays specific error text returned by the LLM (e.g., "File extension 'jpg' is not supported")
- **Actionable Feedback:** Allows users to resolve issues where possible (such as correcting file formats); detailed technical information remains available in the Clarity log file

**Upgrade Impact:** After you upgrade, end users will automatically see detailed LLM error messages when AI Agent execution fails. No configuration is required.

### Include Rich Text Attributes in AI Prompts

You can now include **Rich Text** attributes as part of the prompt context when defining AI Agents, allowing you to leverage formatted data within your AI content generation strategies.

**Key Enhancements:**

- **Rich Text Support:** AI Agents now support the selection of **Large String - Rich Text** attributes within the prompt definition
- Include these attributes alongside standard string attributes to provide a richer context to the AI model

**Upgrade Impact:** After you upgrade, you can update existing AI Agents or create new ones that utilize Rich Text attributes in their prompts.

### Connect via Gemini API

You can now support the **Gemini API** endpoint in addition to the existing Vertex API, providing flexible authentication options and expanded model support.

**Key Enhancements:**

- **Gemini API Support:** Support added for the Gemini API endpoint, complementing existing Vertex API support
- **Authentication:** The Gemini API integration supports API key authentication
- **Model Selection:** Specify the model directly in the Gemini URL, for example:
  ```
  https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent
  ```

**Upgrade Impact:** After you upgrade, the new Gemini API integration option is available on the AI Models page. You can configure new models using this endpoint immediately.

### Review AI Consumption Data

You can now review detailed AI consumption data using a standard database query, allowing you to track usage costs and monitor system activity.

**Key Enhancements:**

- **Consumption Logging:** Clarity captures each AI request in a log table, recording the AI model used and the execution date
- **Token Counting:** Token count is captured for Gemini and OpenAI
- **Vertex Specifics:** For Vertex API calls, the GCP Project name is captured to assist with cloud billing reconciliation
- **Tracking Query:** Use the following query to check AI Consumption in Clarity:

```sql
SELECT gh.OBJECT_CODE, gl.created_by, u.full_name, gh.ATTRIBUTE_CODE,
       gh.STATUS_CODE, gl.PROMPT_TOKEN_COUNT, gl.RESPONSE_TOKEN_COUNT,
       gl.project, gl.model, gl.integration_url, gl.created_date
FROM gen_content_history gh
JOIN gen_contents_logs gl ON gl.GEN_HISTORY_ID = gh.id
JOIN cmn_sec_users u ON u.id = gl.created_by
ORDER BY gl.created_date DESC
```

**Upgrade Impact:** After you upgrade, the system automatically begins logging detailed consumption data for all AI Agent executions. Run the provided consumption query to view historical data generated after the upgrade.

---

## Introducing Clarity Registration

### Register Clarity Instances

Administrators must complete a one-time registration for each Clarity installation to establish a connection with Broadcom. Registration must be done once per Clarity instance and repeated for each Clarity instance you install or manage.

**Registration Notifications:**

- **For Administrators:** If your instance is unregistered, a banner displays: "Your Clarity instance has not been registered with Broadcom. Please click here to complete the registration process."
- **For Non-Administrators:** Users without administrative privileges see: "Your Clarity instance has not been registered with Broadcom. Please contact your administrator to complete the registration process."

**Upgrade Impact:** After you upgrade, Clarity automatically checks your instance's registration status. If the instance is not registered, a notification banner appears for all users. Administrators must complete the registration process to remove the notification.

---

## Common Grid Enhancements

### Instantaneous Aggregation of Calculated Attributes

In Clarity 16.4.1, any Aggregate Calculated Attributes (ACAs) now automatically refresh on the parent object instantly when changes are made to child records, ensuring real-time data consistency without manual intervention.

**Key Enhancements:**

- **Automatic Refresh:** Clarity triggers an automatic refresh of ACAs on the parent object when a sub-object record is created, updated, or deleted
- This refresh logic applies across multiple hierarchical scenarios, including updates from second-level and third-level sub-objects
- Supports all combinations of stock and custom objects across supported levels (Master, 2nd Level, 3rd Level)
- **Supported Views:** Grid, Nested Grid, Board, and Timeline views; also applies to updates made via the Details flyout, "Expand All", and widget pane updates
- **Supported Objects:** Projects, Ideas, Resources, Agreements, Custom Master Objects (CMOs), and Custom Investment Types (CITs)

> [!NOTE]
> Hierarchies, Roadmaps, and Plans (Beta) do not support sub-objects and are excluded from this feature.

**Upgrade Impact:** After you upgrade, existing objects with aggregated values will automatically utilize this instant refresh capability. No additional configuration is required.

---

## General Enhancements

### Filter Audit Records by Attribute Name

Clarity enhances the **Audit** capability by allowing users to filter audit records using the **Attribute display name**, in addition to existing Attribute ID-based filtering. This enhancement also supports relabeled attributes and localized labels.

**Key Enhancements:**

- **User-friendly attribute filtering:** Filter audit records using the Attribute display name instead of internal Attribute ID
- **Support for relabeled attributes:** The filter honors customized attribute labels defined in administration
- **Localization support:** Attribute labels displayed in the filter respect the user's language and localization settings
- **Broad availability:** The Attribute filter is available in:
  - Administration > Audit
  - Investment Audit modules (when enabled via Blueprint)
  - Resource Audit modules (when enabled via Blueprint)

> [!NOTE]
> - Attribute Name filtering affects only how audit records are filtered and displayed; underlying audit data and capture logic remain unchanged
> - If an attribute is relabeled, the system uses the relabeled display name; otherwise, it uses the attribute name defined in Studio
> - The filter applies to both Attributes and Per-Period Metrics displayed in the Audit module

**Upgrade Impact:** After you upgrade, the Attribute Name filter is available immediately in all supported Audit modules. No configuration changes are required.

### Use 'Prior Period' for End Period and 'Next Period' for Start Period

Configure dynamic date ranges with greater flexibility using new smart date options. Select **Next Period** as a start period and **Prior Period** as an end period to create advanced rolling time windows for your reports and grids.

**Key Enhancements:**

- **Next Period (Start Date):** Select **Next Period** in the Start Date field to look ahead and filter views starting from the upcoming period — useful for forecasting future resource allocation
- **Prior Period (End Date):** Select **Prior Period** in the Finish Date field to cap your data view at the most recently completed period — useful for analyzing historical performance up to the last closed cycle

> [!NOTE]
> If the End Period resolves to a date earlier than the Start Period, Clarity prevents the action and displays the error: "End Period cannot be prior to Start Period."

**Upgrade Impact:** After you upgrade, access the new **Next Period** and **Prior Period** options directly in the View Options. No additional configuration is required.

### Enhancements to Search in the Users Workspace

The **Search** capability in the Users workspace has been enhanced to support searching by **First Name**, **Last Name**, and **User Name**. In previous releases, search was limited to First Name only.

**Upgrade Impact:** After you upgrade, you can search by First Name, Last Name, and User Name in the Users workspace.

---

## Financial Enhancements

### View Forecast % of Budget Cost in Cost Plan Details and Investment Workspaces

Track your financial variances more effectively by monitoring how forecasted costs align with your budget over time. You can now view the **Forecast % of Budget** cost directly in your Cost Plan Details and Investment workspaces.

**Key Enhancements:**

- **New Variance TSV Field:** Add the new **Forecast % of Budget Time-Scaled Value (TSV)** field to your grid views to analyze financial variances dynamically across different time periods
- **Monitor Financial Health:** Track exactly what percentage of your allocated budget is consumed by your current forecast at any given point in your project lifecycle

**Upgrade Impact:** After you upgrade, access the new **Forecast % of Budget TSV** field directly in your view configuration options for Cost Plan Details and Investments. No additional configuration is required.

---

## Report Designer — Charts and Widgets Enhancements

### Use Breakdown Dimensions for Line, Column, and Bar Charts

You can now configure **Breakdown Dimensions** for Bar, Column, and Line charts even when Periods are turned off, enabling categorical analysis directly within charts.

**Key Enhancements:**

- **Breakdown without periods:** Bar, Column, and Line charts now support Breakdown Dimensions when the Periods toggle is set to off
- **Single-metric requirement:** Breakdown Dimensions are available only when a single metric is configured; if multiple metrics are added, the Breakdown option is not displayed
- **Consistent chart behavior:**
  - Bar and Column charts support stacked visualizations based on the selected Breakdown Dimension
  - Line charts support categorical breakdowns without relying on time-based periods
- **Controlled data density:** Limit the number of values displayed for the primary dimension and breakdown series; remaining values can be grouped under an **Others** category to improve readability

> [!NOTE]
> - Breakdown Dimensions are supported only for Bar, Column, and Line chart types
> - The Breakdown option is available only when a single metric is configured
> - Turning Periods off enables categorical analysis using Breakdown Dimensions
> - Existing period-based Breakdown behavior remains unchanged

**Upgrade Impact:** After you upgrade, this capability is available immediately for supported chart types. Existing charts are not impacted unless you update their configuration.

### Introducing the Bubble Chart Type

Clarity introduces a new **Bubble chart** type in Report Designer, enabling report designers to visualize relationships across multiple metrics within a single chart for comparative and distribution-based analysis.

**Key Enhancements:**

- **New Bubble chart type:** A new **Bubble** option is available in the Chart Type selector
- **Multi-metric configuration:**
  - One metric configured for the X-axis
  - One metric configured for the Y-axis
  - One metric configured to control Bubble Size
- **Dimension-based grouping:** Configure a Dimension to define how data is grouped into individual bubbles
- **Legend configuration:** Configure legend position and display values (Name, ID, or Name and ID)
- **Display and formatting options:** Configure axis titles, labels, gridlines, background, padding, and overall chart layout
- **Bubble coloring:** Colors can be assigned automatically or based on display mappings when configured
- **Controlled data density:** Limit the number of bubbles displayed to improve readability
- **Interactive behavior:** Hovering over a bubble displays contextual details; drill-down is supported for a single object instance
- **Image export support:** Bubble charts can be downloaded as PNG from designer and preview views

> [!NOTE]
> - Bubble charts are designed for comparative and distribution analysis and are not intended for time-series visualization
> - Sorting is supported for Number and Date attributes; TSV (Total) attributes are not supported for sorting
> - Bubble charts are not supported in PDF or PPTX exports — they are marked as "not supported" if included

**Upgrade Impact:** After you upgrade, report designers can immediately create Bubble charts in Report Designer. Existing reports are not impacted unless updated.

### Introducing the Split Packed Bubble Chart Type

Clarity introduces a new **Split Packed Bubble** chart type in Report Designer, enabling report designers to visualize grouped or hierarchical distributions by packing bubbles into distinct clusters based on a selected dimension.

**Key Enhancements:**

- **New chart type:** A new **Split Packed Bubble** option is available in the Chart Type selector
- **Group-based bubble packing:** Bubbles are grouped into clusters based on the selected Dimension, with each cluster representing a unique dimension value
- **Metric-driven sizing:** A metric controls the size of the inner bubbles; supports Sum, Average, and Count aggregation methods
- **Legend support:** The legend reflects grouped dimension values and can be positioned using standard legend options
- **Interactive behavior:** Hovering over a bubble displays contextual details; drill-down is supported for a single object instance

> [!NOTE]
> - Split Packed Bubble charts are intended for distribution and composition analysis rather than time-series analysis
> - Not supported in PDF or PPTX exports; marked as "not supported" if included

**Upgrade Impact:** After you upgrade, report designers can immediately create Split Packed Bubble charts. Existing reports are not impacted unless updated.

### Introducing the Gantt Chart Widget

Clarity introduces the **Gantt chart** as a new chart type in the Reporting workspace, enabling report designers to visualize start and finish dates directly within Report Designer.

**Key Enhancements:**

- **New chart type:** Report designers can add a Gantt chart from the widget library in Report Designer
- **Timeline visualization:** Display records using start and finish date attributes on a timeline
- **Flexible configuration:** Configure data provider, title, columns, start date, finish date, sorting, and sort order
- **Per-period metrics:** Use per-period metric settings such as Duration or Periods with fiscal or standard calendars
- **Filtering support:** Apply standard widget-level, tab-level, and report-level filters
- **OBS display behavior:** When using OBS attributes, only the display value is shown without the full hierarchy path
- **Accessibility and localization:** WCAG requirements are supported; locale-specific formats (dates, numbers) are honored

> [!NOTE]
> Gantt charts do not support:
> - Exporting to PDF or PPTX
> - Drill-down functionality
> - AutoFit functionality
> - Sub-object links (tasks, to-dos, or financial sub-objects)
> - When OBS attributes are used, grouping is not supported

**Upgrade Impact:** After you upgrade, report designers can immediately use the Gantt chart when creating or editing reports in Report Designer.

### Enhancements to Pie and Donut Charts

Pie and Donut charts now support displaying **minimum**, **maximum**, and **average** values for selected metrics, in addition to the previously available sum and count options. The charts also now support **negative values**, using absolute values to calculate proportions.

> [!NOTE]
> Calculating an average with a negative numerator or denominator yields a negative result, which can produce confusing visuals. Understand your data before modeling it for reports.

**Upgrade Impact:** After you upgrade, Pie and Donut charts now support displaying minimum, maximum, and average values.

---

## Report Designer — General Enhancements

### Enhancements to Attribute Groups

The **Attribute Group** widget now includes the following enhancements:

- When the container for the attribute group is resized, it automatically snaps to the nearest symmetrical size to ensure all attributes are displayed clearly
- Clarity resizes the container to display all attributes, even if the user resizes it to hide a few at the edges
- The position of individual attributes within the group is preserved during export
- The process of dragging and dropping widgets into the Attribute Group widget has been streamlined

**Upgrade Impact:** After you upgrade, you will see improved performance in attribute groups.

### Hide Object Grouping Labels in Reporting Table Headers

Clarity improves the readability of table widgets by hiding **object grouping labels** from table headers, reducing visual clutter, particularly when working with grouped data and calculated attributes.

**Key Enhancements:**

- **Cleaner table headers:** Object grouping labels are no longer displayed in the header of reporting table widgets
- **Improved clarity for calculated attributes:** Calculated dimensions and metrics are displayed without redundant object context in the header
- **Consistent behavior:** The updated header display applies to the Report Designer, Preview, and Viewer
- **Export support:** The updated header behavior is honored in PDF and PPTX exports

> [!NOTE]
> - This enhancement is controlled by an administrative feature toggle that is enabled by default after upgrade
> - The change affects only the visual display of table headers; grouping, aggregation, and data results remain unchanged
> - Per-period metrics displayed in columns continue to show period and total labels
> - Data Extraction layouts and CSV exports are not impacted

**Upgrade Impact:** After you upgrade, reporting table widgets automatically use the updated header display. No configuration changes are required unless administrators choose to disable the feature toggle.

### Manage Columns Using Table Properties

Access the **column panel** directly from the **Table Properties** to manage table columns efficiently, even when working with short or small tables. The previous limitation where column picker height was restricted by table height has been removed.

**Key Enhancements:**

- **Access Columns via Table Properties:** Use the new **Columns** lookup in Table Properties to search for, select, and manage attributes
- **Full Functionality Retained:**
  - Expand or collapse attribute sections
  - Search for specific fields
  - View attribute metadata (data type icons)
  - Check or uncheck boxes to instantly add or remove columns
- **Updated Item Counts:** View the number of items selected at the top of the panel

> [!NOTE]
> - Drag and drop columns within the panel to reorder them; also drag from the panel directly onto the report table to a specific position
> - When you add a new table, the canvas now displays: "Add columns from the table properties." The in-table **Add Columns** button is no longer available.

**Upgrade Impact:** After you upgrade, access the relocated column panel directly in the Report Designer Table Properties. No additional configuration is required.

### Apply OBS Display Options Across Tables, Charts, and Attributes

You can now control how **Organizational Breakdown Structure (OBS)** data is displayed across tables, charts, and attribute groups in Report Designer, rather than always displaying the full hierarchical path.

**Key Enhancements:**

- **OBS display options:** Configure how OBS values are displayed using:
  - **Full Path**
  - **Attached Unit** (with optional parent)
  - **Selected Levels**
- **Tables:** Configure OBS display from the column menu for OBS attributes in table widgets
- **Charts:** When an OBS attribute is used as a dimension, configure OBS display options from chart properties
- **Attribute groups:** Configure OBS display options when OBS attributes are used in attribute groups
- **Grouping and aggregation:** Data is grouped and aggregated based on the selected OBS display level
- **Independent filtering:** OBS filtering remains independent of OBS display and grouping options

> [!NOTE]
> - OBS display options apply only to OBS attributes
> - OBS display selections are honored in report exports
> - OBS display options do not change which records are included; they only affect how OBS values are displayed
> - For Gantt charts, OBS values always display the full path

**Upgrade Impact:** After you upgrade, existing reports continue to display OBS values using the full path by default. You can update reports to use the new OBS display options as needed.

### View Resource Availability and Allocations in a Single Grid

You can now report on **resource-level availability**, **allocation**, and **remaining capacity** together in a single table grid, enabling report designers to build capacity versus demand reports by combining resource availability and investment staff allocations.

**Key Enhancements:**

- **Unified grid view:** Display resource availability, allocation, and remaining capacity alongside investment staff allocations in a single table
- **Flexible grouping:** Group the grid by multiple attributes (such as resource manager and resource) to analyze capacity at different levels
- **Group-level aggregations:** Define different value aggregation methods for metrics at each group level when grouped by more than one attribute
- **Metric visibility control:** Hide or show availability, allocation, and remaining metrics independently at group and detail levels
- **Cleaner metric labels:** Optionally hide aggregation method labels (e.g., Max or Sum) from metric headers

> [!NOTE]
> - Group-level aggregation settings apply only when the grid is grouped by more than one attribute
> - Hiding metrics at a group or detail level affects only the display and does not change the underlying data
> - The ability to hide aggregation method labels applies to grouped table views only

**Upgrade Impact:** After you upgrade, you can immediately build resource capacity versus demand reports using the enhanced table configuration options.

### Manage Multiple Tables, Charts, and Attribute Groups with AutoFit

Use **AutoFit** to grow tables dynamically based on data volume without breaking your report structure. This enhancement ensures all report elements retain their intended positions on the canvas, providing a stable layout for complex status reports.

**Key Enhancements:**

1. **Stabilized Browser Layouts:**
   - Enable AutoFit on tables within attribute containers or grid stacks without risking widget displacement
   - Maintain precise coordinates of surrounding widgets while data grows dynamically

2. **Optimized Canvas Space:**
   - Suppress unnecessary trailing rows in preview mode for a tighter visual layout
   - Minimize vertical white space below grids to stack multiple tables more efficiently

3. **Consistent Grid Behavior:**
   - Ensure tables grow only to the extent of the data present
   - Maintain grid stack integrity so container sizes remain predictable during data fluctuations

> [!NOTE]
> Export your newly stabilized reports to PDF. Clarity honors the exact layout shown in the browser preview, correctly rendering all attribute groups and AutoFit tables.

**Upgrade Impact:** After you upgrade, all existing and new reports will automatically utilize the improved layout rendering engine. No additional configuration is required.

---

## Report Designer — Filter and View Enhancements

### Save and Reuse Filters as a Report Viewer

Report viewers can save their filter selections and reuse them when viewing reports, allowing report consumers to quickly return to commonly used filter combinations without reapplying filters each time.

**Key Enhancements:**

- **Save viewer filters:** Report viewers can save their current filter selections while viewing a report
- **Reuse saved filters:** Saved filters can be applied later to view the report with the same filter criteria
- **Manage saved filters:** Report viewers can rename or delete their saved filters without affecting designer-provided filters
- **Viewer-specific behavior:** Saved filters are personal to the viewer and do not impact other users or the report design

> [!NOTE]
> - Saved filters are available only to the user who created them
> - Saved filters are grouped separately from designer-recommended filters
> - Viewer saved filters do not change the underlying report or its published filters
> - Viewer saved filters are also available when scheduling reports

**Upgrade Impact:** After you upgrade, report viewers can immediately start saving, managing, and reusing filters. No configuration changes are required.

### Compare Dates Using Date Fields

You can now compare **date attributes using date fields** directly in filters, allowing report designers and viewers to configure filters that compare one date attribute against another date attribute or against smart date options.

**Key Enhancements:**

- **Compare date attributes:** Configure a filter to compare a date attribute with another date attribute
- **Smart options in date comparison:** Use smart date filter options within the same filter
- **Availability:** Available in Report Designer and Report Viewer
- **Filter scope:** Configure date comparisons in report-level, tab-level, and widget-level filters
- **Scheduling support:** Available in report scheduling
- **Timestamp handling:** The date's timestamp is excluded in the comparison

> [!NOTE]
> - The **Is Empty** and **Is Not Empty** operators are not supported for date comparisons
> - Date comparison filters are not available in: Data Provider pre-filters, Data Provider preview filters, or Conditional formatting rules
> - Comparison logic is not supported in Data Provider join conditions

**Upgrade Impact:** After you upgrade, you can immediately compare date attributes using date fields in supported filters.

### Use New Smart Options for Time Reporting Periods

Use new **smart options for time reporting periods** to easily configure views and reports around timesheet data. Date ranges automatically adjust based on the current time reporting period.

**Key Enhancements:**

- **New Smart Options for Start Dates:**
  - Start of current time period
  - Start of next time period
  - Start of previous time period
- **New Smart Options for End Dates:**
  - End of current time period
  - End of next time period
  - End of previous time period

> [!NOTE]
> - Apply the new smart options at the Report Level, Tab Level, and Widget Level
> - Use this feature across various data providers, including the Investments and Timesheets Data Providers

**Upgrade Impact:** After you upgrade, the new time reporting period smart options are available in per-period metric settings. No additional configuration is required.

---

## Reporting — Data Provider Enhancements

### Create Calculated Dimensions and Metrics in the Data Provider

You can now define **calculated dimensions** and **calculated metrics** directly within a data provider, centralizing business logic at the data-provider level for consistency across all reports.

**Key Enhancements:**

- **Calculated dimensions:** Define derived dimensional values using expressions that can be reused across reports
- **Calculated metrics:** Create reusable calculated measures based on existing numeric attributes and metrics
- **Provider-level reuse:** Calculations defined once in the data provider are available to all reports referencing it
- **Improved maintainability:** Changes to calculation logic are automatically reflected in all dependent reports

> [!NOTE]
> - Existing reports are not impacted unless they are updated to use the new calculated fields

**Upgrade Impact:** After you upgrade, you can immediately create and use calculated dimensions and metrics in new or existing data providers.

### Use Variables to Filter Queries

You can now use **additional variables** in data provider queries that resolve based on the logged-in user, allowing report designers to dynamically filter query results without manual input.

**Key Enhancements:**

- **Logged-in user variables:** Data provider queries now support variables for the logged-in user, including: language, locale, resource ID, user ID, user name, and user UID
- **Dynamic filtering:** Use these variables in query filters and expressions to automatically tailor results for the logged-in user
- **Reusable queries:** Build a single data provider that adapts to different users without creating multiple versions
- **Reduced hardcoding:** Eliminate the need to hardcode values such as language codes directly in queries

> [!NOTE]
> - Variables resolve at runtime based on the logged-in user
> - You can use multiple variables and reuse the same variable within a single query
> - Existing queries are not impacted unless the new variables are explicitly used

**Upgrade Impact:** After you upgrade, the new logged-in user variables are immediately available for use in data provider queries.

### Associate Lookups with Query Attributes for Filtering

You can now associate **lookups** directly with data provider query attributes to improve filtering usability, ensuring that filters display meaningful lookup values while maintaining consistent behavior across reports.

**Key Enhancements:**

- **Lookup association:** Associate a lookup with a query attribute when configuring the data provider
- **User-friendly filtering:** Filters display lookup values instead of raw codes, making it easier to select the correct filter criteria
- **Consistent behavior:** Lookup associations are honored across report-level, tab-level, widget-level, and interactive filters
- **Reusable configuration:** Lookup associations defined in the data provider are reused by all reports that reference it

> [!NOTE]
> - Lookup associations affect how filter values are displayed and selected; they do not change the underlying query logic
> - Existing data providers and reports are not impacted unless a lookup is explicitly associated with a query attribute

**Upgrade Impact:** After you upgrade, you can associate lookups with query attributes in new or existing data providers without requiring changes to existing reports.

### Configure the Standard Calendar Per-Period Metric View Options in Preview

Configure the **Standard Calendar (January-December)** to preview per-period metrics within the **Data Provider Preview** tab, aligning the preview experience with the Report Designer.

**Key Features:**

- **Standard Calendar Support:** Select the Standard Calendar as the calendar type in the Data Provider View Options of the Preview Tab
- **Supported Period Types:** Days, Weeks, Months, Quarters, Years
- **Smart Date Options:** Use the smart option pull-down to select dynamic Start and Finish dates based on the selected period type

**Upgrade Impact:** After you upgrade, access the new standard calendar view options directly in the Data Provider Preview tab. No additional configuration is required.

---

## Reporting — Data Warehouse Enhancements

### Access New Data Warehouse Attributes

Clarity now includes the following attributes in the Data Warehouse:

- **Investment Object:**
  - Originating Idea
  - Has Staff
- **Task Object:**
  - Parent Name
  - Parent ID
  - Phase Name
  - Phase ID
  - Status Code
- **Cost Plan:**
  - Plan Revision
  - Status Code

**Upgrade Impact:** After you upgrade, new attributes will be available in the Data Warehouse.

### Apply Row-Level Security to Roadmaps, Hierarchies, and Custom Master Objects

**Row-level security (RLS)** has been implemented in the Data Warehouse for **Roadmaps**, **Hierarchies**, and **Custom Master Objects (CMOs)**, ensuring OData users can securely access data while respecting Clarity access rights.
RLS automatically filters results based on user or group permissions, enabling seamless integration with reporting tools and AI agents.

**Upgrade Impact:** After you upgrade, row-level security is available in Data Warehouse for Roadmaps, Hierarchies, and CMOs.

### Enable Instantaneous Sync for Assignment Updates in the Timesheet Posting Job

The **Instantaneous Sync** capability has been enhanced to extend near real-time updates during the **Post Timesheets** job. Assignment data can now be updated via Instantaneous Sync, improving the freshness of Assignment-related reporting data immediately after timesheets are posted.

> [!NOTE]
> - Instantaneous Sync applies only to supported Data Warehouse data
> - Scheduled Data Warehouse jobs are still required for data not covered by Instantaneous Sync

**Upgrade Impact:** After you upgrade, Assignment updates from the Post Timesheets job are reflected through Instantaneous Sync automatically. No configuration changes are required.

---

## Reporting — Export Enhancements

### Exclude Placeholder Tabs in Report Scheduling

You can now control whether **placeholder tabs** are included in scheduled report outputs using the new **Exclude tab placeholders** toggle.

**Key Enhancements:**

- **New scheduling toggle:** The **Exclude tab placeholders** toggle is available on the **Export** tab of the **Report Schedule** modal
- **Cleaner scheduled outputs:** When enabled, placeholder tabs are excluded from scheduled report exports
- **Default behavior preserved:** The toggle is set to **OFF** by default
- **Schedule-level control:** The setting applies per report schedule and does not affect report design or interactive viewing

> [!NOTE]
> - This option applies only to scheduled report exports
> - Excluding placeholder tabs does not affect how the report appears when viewed interactively
> - Existing report schedules continue to include placeholder tabs unless the toggle is explicitly enabled

**Upgrade Impact:** After you upgrade, existing report schedules are not modified. You can enable the **Exclude tab placeholders** option when creating or editing a report schedule.

---

## Reporting — OData Service Enhancements

### Support OData with Row-Level Security

OData services now support **Row-Level Security (RLS)** to ensure that data returned through OData respects Clarity access rights.

**Key Enhancements:**

- **Row-Level Security enforcement:** OData queries apply RLS based on the authenticated user
- **Permission-aware data access:** Users receive only the data they are permitted to access in Clarity
- **Consistent security behavior:** OData security is aligned with other secured data access mechanisms in Clarity
- **Secure integrations:** External integrations using OData automatically honor Clarity access rights

> [!NOTE]
> - RLS is enforced at runtime based on the authenticated user's access to investments, resources, or their own user data
> - Data Warehouse access rights must be loaded for RLS to be enforced correctly
> - Existing OData integrations continue to work, with data visibility now governed by Clarity access rights

**Upgrade Impact:** After you upgrade, OData queries automatically enforce Row-Level Security. Users and integrations may see reduced data visibility if they do not have permission to access certain records.

---

## Reporting — Report Migration Enhancements

### Enhancements to Migrating Reports and Data Providers

The following enhancements have been introduced to report migration in this release:

- **Replace on import:** If the Migration Key matches between the import file and the target server, Clarity will replace existing reports/data providers. If no match is found, new reports/data providers are created
- **Publish after import:** The Import wizard now includes a **Publish report after import** option
- **Export and Import of Images:** Clarity now supports export and import of custom images added to reports via the image widget. The report import file can be up to **50MB**, configured using the **Maximum reporting package import file size** setting
- **Enhanced Manifest File:** The manifest includes names of reports, data providers, and images in the export package for pre-import verification
- **Enhanced Error Reporting:** If an import issue is encountered, a CSV error file is generated for download and review
- **Export Queries and Metadata:** Data provider query attribute metadata (attribute labels, tooltips, associated lookups) is included in the report migration package

> [!NOTE]
> - Existing report schedules do not need to be cancelled if the report or data provider is replaced during import
> - When importing to replace an existing report, ensure: the report and data provider **Status** is **Published**; there are no edits in the published report
> - When SQLQuery exceeds 50 attributes, the import to the target system fails (known issue to be fixed in an upcoming release)

**Upgrade Impact:**

- Report export zip files from prior releases will not work in this release; importing a zip file from a prior release will abort the import
- After import, administrators should validate upcoming report schedule filters to ensure they remain valid
- If an import adds a new attribute, users who have the report open may need to refresh their browsers

---

## Reporting — Scheduling and Sharing Enhancements

### Improve Usability for Publishing Schedules, Sharing, and Access Rights

Several usability improvements have been introduced to simplify how reports are published, scheduled, shared, and secured.

**Key Enhancements:**

- **Improved publishing flow:** Clearer feedback on report status and readiness
- **Clearer scheduling experience:** Scheduling options are easier to understand and configure
- **Simplified sharing:** Sharing options are more intuitive
- **Better access-right visibility:** Improvements clarify how access rights affect report visibility and availability
- **Reduced configuration errors:** Updated validations and messaging guide users through publishing, scheduling, and sharing actions

> [!NOTE]
> - These enhancements focus on usability and do not change the underlying report execution or security model
> - Existing reports, schedules, and sharing configurations continue to work as before

**Upgrade Impact:** After you upgrade, the improved usability is available automatically. No changes are required to existing reports or schedules.

### Copy Report Schedules

You can now **copy an existing report schedule** to create a new schedule more efficiently, reducing repetitive configuration and helping ensure consistency when managing multiple report schedules.

**Key Enhancements:**

- **Copy existing schedules:** Create a new report schedule by copying the configuration of an existing schedule
- **Faster schedule setup:** Reuse schedule details such as frequency, delivery options, and filters
- **Reduced errors:** Minimize configuration mistakes by starting from a known, working schedule
- **Independent schedules:** The copied schedule can be edited without affecting the original

> [!NOTE]
> - Copied schedules are created as separate schedules with their own lifecycle
> - Access to copy report schedules is governed by existing report scheduling access rights

**Upgrade Impact:** After you upgrade, you can immediately copy existing report schedules. No changes are required to existing schedules.

---

## Task Management Enhancements

### Introducing Smart Task Creation

Administrators can now select the **Set New Task Start and Finish Dates Using Parent or Investment Dates** option to enable Smart Task Creation. This allows new tasks to override Default Start and Default Finish dates in Classic PPM.

**Behavior by Creation Method:**

- **New Task button or (+) button:** Creates a new task at Level 1 of the WBS and inherits the investment dates
- **Insert Row Below button (Flat grid action):** Creates a new task at Level 1 of the WBS and inherits the investment dates in a flat grid list
- **Insert Sibling Task (Timeline or Expandable Tree Grid):** Creates a new task at the same level as the source task and inherits dates from the source task's parent
- **Insert Child Task (Timeline or Expandable Tree Grid):** Creates a new task at one level below the source task and inherits the source task's dates, making the source task the Parent Task

> [!NOTE]
> - Administrators must select the **Set New Task Start and Finish Dates Using Parent or Investment Dates** option to enable Smart Task Creation
> - Ensure the **Default Date** is set for the Task Start and Finish Date attributes in Classic PPM for Smart Task Creation to work properly
> - Moving the task bar forward or backward, or changing task dates, may push the Investment Start or Finish Date out. Use the Duration field to adjust the task before changing the Start Date.

### Introducing Per-Period Metrics for Actuals, ETC, and Total Usage

Clarity extends **per-period metrics (time-scaled values / TSV)** to the following critical labor resource attributes:

- **Actuals** — time already worked
- **Estimate to Complete (ETC)** — remaining effort
- **Total Usage** — Actuals + ETC

These per-period metrics are now available in the **Investment Tasks Module**, **Tasks Workspace**, **Hierarchy Tasks Module**, and **Reporting** workspace.

> [!NOTE]
> - The Actuals, ETC, and Total Usage fields are **read-only** aggregation attributes whose values are rolled up from assignments; you cannot edit these per-period metrics at the task level
> - The existing ETC "scalar" field allows for top-down editing to spread the Grand Total amount down into individual assignments, proportional to existing assignments
> - Existing scalar ETC, Actuals, and Total Usage fields only aggregate labor resources
> - Use the **"Is Task = Yes"** filter to avoid double-counting parent task rollup aggregations
> - The roll-up does not include amounts from external task dependencies or subprojects

---

## Administrative Enhancements

### Enhancements to the Time Slicing Sync Job

The **Time Slicing Sync** job synchronizes and rebuilds SQLcurve data that underpins timephased views in Clarity. Existing job parameters have been changed and new parameters introduced.

| Parameter | Purpose | Default Value | Optimized Value | Guidance |
|---|---|---|---|---|
| Parallel Processing Thread Count | Controls concurrency | 1 Thread | 2–3 Threads | Increase only if the database server has ample CPU/Memory. Going beyond 3 risks diminishing returns and table locking. |
| Process Number of Rows per Batch | Balances memory usage vs. speed | 100 rows | 500 rows | Increase to 500 for large datasets. Revert to 100 if you experience "Out of Memory" errors, table locking, or database timeouts. |
| Maximum Runtime (minutes) | Ensures the job yields results after a set time | Blank (no restriction) | 10–30 minutes | Schedule the job frequently (e.g., every 15 minutes) with a short runtime cap rather than once a day with no cap. Max: 480 minutes (8 hours). |
| Number of Prior Months for Limiting Investment Data | Replaces 'Earliest Investment Finish'; relative date N months before current month. | 60 months | 36–60 months | Curves: prassignment, fin_cost_plan_details, inv_investments, prteam. |
| Number of Prior Months for Limiting Timesheet Data | New separate parameter; N months before current date. E.g. Jan 2026 + 84 = Finish >= Jan 1, 2019. Blank defaults to 24; >84 causes failure. | 24 months | 12–24 months | Curves: prtimeentry. |

> [!NOTE]
> - To process curves, the investment must be Active and have a Finish Date on or after the date of the relevant parameter
> - You now have separate parameters for investment data and timesheet data, enabling relative date determination
> - Existing sliced SQLCurves that do not fall within the parameter limitations are not processed, removed, or updated
> - If you set the parameter to 0, the system will process Timesheet Entries or Active Investments with a Finish Date >= 1st day of the current month

**Upgrade Impact:** After you upgrade, the Time Slicing Sync job's upcoming schedule is canceled. Review and update the parameters for the enhanced job definition, and create a new schedule for it.

### Enhancements to Just-in-Time User Creation

Clarity's **SAML-based Single Sign-On (SSO)** with Just-In-Time (JIT) provisioning now includes the following enhancements:

- **User Group Synchronization:** Clarity updates a user's group membership based on user groups sent from the Identity Provider (IdP). The mandatory "Basic group for user access" is always retained; existing groups not listed in the SAML request are removed.
- **Resource Attribute Synchronization:** Clarity populates or updates resource fields (such as **Date of Hire** or **Date of Termination**) when those attributes are included in the SAML response
- **Backward Compatibility:** Current SAML implementations continue to work; the additional fields are optional and do not affect existing authentication flows

**Upgrade Impact:** After you upgrade, Clarity will update a user's group membership and fields such as Date of Hire and Date of Termination based on SAML responses.

### Support for a Read-Only Database User

Clarity supports a special **read-only database user** used internally by the application to run queries in the **Queries workspace**. This user has only SELECT rights in the database and is never used to log into the Clarity UI.

**Key Points:**

- Clarity will add the `readOnlyUserName` and `readOnlyUserPassword` parameters to the `properties.xml` file
- It is not a Clarity "application user" and does not appear on the Clarity login screen
- Cannot perform insert, update, delete, or schema-changing operations
- Administrators can create the user using the command: `admin db create-ppm-readonly-user`
- When the read-only user is configured, Clarity connects using the readonly account for Queries workspace operations

**Upgrade Impact:** After you upgrade, Clarity will create a read-only user in the database, which will be used when you access the Queries workspace.

### Enhancements to SQL Curves

The underlying **SQL Curve** implementation has been optimized so that queries that retrieve per-period metrics from SQL Curves now execute more quickly, especially for large portfolios or long date ranges.

**Upgrade Impact:** After you upgrade, you will experience improvements in areas such as the Staffing Workspace and Financial grids.

### Introducing the Database Optimization and System Maintenance Jobs

The legacy **DB Maintenance** job has been replaced by two new jobs:

- **Database Optimization job** — Performs database maintenance activities such as database cleanup. Key parameters:
  - Clean Orphaned Instance Rights
  - Clean Orphaned Instance Rights (Limit)
  - Delete Orphaned Captions
  - Clean Page Instances
  - Clean Page Instances (Limit)

- **System Maintenance job** — Performs system maintenance activities. Key parameters:
  - Maintain PPM Broker Service
  - PPM Broker Data Retention (days)
  - Clean Data Warehouse Tracker Logs
  - Data Warehouse Tracker Logs Retention (days)
  - Clean Process Error Logs
  - Process Error Log Retention (days)
  - Clean Orphaned Process Error Logs
  - Clean Orphaned Process Error Logs (Limit)

**Upgrade Impact:** After you upgrade, the legacy DB Maintenance job is removed and replaced by the new **Database Optimization** and **System Maintenance** jobs.

### Enhancements to Blueprint Copy Capability

The **Copy** facility with Blueprints has been enhanced. Clarity will only copy blueprints where the **Status** attribute is set to **Draft** or **Published**.
If the Status is set to **Has Edits**, the Copy option will be disabled.
This ensures users copy the latest blueprints, which include all business rules and configurations that have been successfully implemented and tested.

---

## Accessibility Improvements

- **Accessibility Remediation:** This release addresses multiple customer-reported issues and findings from the May 2024 (Clarity 16.2.2) accessibility audit. Updates ensure compliance with various WCAG success criteria.
- **Increased Compliance for User Adoption:** Accessibility improvements drive adoption by meeting organizations' demands for compliance with accessibility standards.

For detailed WCAG remediation information, see [[Accessibility]].

## Related
- [[_MOC Release Info]]

%%Source: p23-72%%
