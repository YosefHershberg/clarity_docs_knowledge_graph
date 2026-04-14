# Release Information

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[22 - Release Info/_MOC Release Info|Release Info]]
- Canonical notes:
- [[22 - Release Info/Release Notes]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->

Release Information
ccppmop1612 HID_release_info_top_page This section provides the following information specific to this release: - The Release Notes outlines the new features, enhancements to existing features, resolved issues, known issues,
and third-party software agreements. - The Change Impact and Upgrade helps you learn about the changes, identify their impacts, and discover the required
actions for your upgrade. - Known and Resolved Issues serve as a formal channel for communicating any identified challenges or glitches with
our product or service and the status of their resolution. - Third-Party Software Agreements outline the terms and conditions governing third-party software use, reproduction,
and distribution, as the corresponding license agreements stipulate. - The Release Comparison compares the key features in all active releases. - Hardware and Software Compatibility Specifications is a central source of information for hardware and software
requirements, supported versions of third-party components, and add-ins to implement Clarity. - Clarity and Jaspersoft Cumulative Patch Readme File contains the patch summary, and information about how to
install and uninstall the patch.
NOTE Clarity Policies - Customer-Reported Defect Resolution Policy - Accessibility - Modification Policy - Clarity SaaS Service Description (SaaS Only) - Clarity for FedRAMP
Clarity Release Notes
NOTICE Experience Clarity Like Never Before -- New Interactive Simulation Now Live! Explore our latest Simulation Lab, now available on the Broadcom Software Academy. This hands-on, interactive experience guides you step by step through key Clarity features and lets you practice at your own pace. Click here to start the simulation.

Continue Learning: Enroll in Clarity 16.x - Reporting Essentials to gain a deeper understanding of Clarity's reporting capabilities. This page covers the following topics: - Introducing Enhancements to VAIA - Announcing General Availability of Vaia - Define AI Agents for "Attribute" Context - Configure AI Agents to Generate, Revise, and Review Content - Summarize Status Reports using Standard Reporting Artifacts - Use Files as Data Sources for AI Agents - Validate AI Model Configuration - View Actual AI Error Messages - Include Rich Text Attributes in AI Prompts - Review AI Consumption Data - Introducing Clarity Registration
- Register Clarity Instances - Common Grid Enhancements
- Instantaneous Aggregation of Calculated Attributes - General Enhancements
- Filter Audit Records by Attribute Name - Use `Prior Period' for End Period and `Next Period' for Start Period in Per-Period Settings - Enhancements to the Search Capability in the Users Workspace - Financial Enhancements - View Forecast % of Budget Cost in Cost Plan Details and Investment Workspaces - Report Designer - Charts and Widgets Enhancements - Use Breakdown Dimensions for Line, Column, and Bar Charts - Introduce the Bubble Chart Type - Introduce the Split Packed Bubble Chart Type - Introducing the Gantt Chart Widget - Enhancements to Pie and Donut Charts - Report Designer - General Enhancements - Enhance Attribute Group Capabilities - Hide Object Grouping Labels in Reporting Table Headers - Manage Columns Using Table Properties - View Resource Availability and Allocations in a Single Grid - Manage Multiple Tables, Charts, and Attribute Groups with AutoFit - Report Designer - Filter and View Enhancements - Save and Reuse Filters as a Report Viewer - Compare Dates Using Date Fields - Use New Smart Options for Time Reporting Periods - Reporting - Data Provider Enhancements - Create Calculated Dimensions and Metrics in the Data Provider - Use Variables to Filter Queries - Associate Lookups with Query Attributes for Filtering - Configure the Standard Calendar Per-Period Metric View Options in Preview - Reporting - Data Warehouse Enhancements - Access New Data Warehouse Attributes - Apply Row-Level Security to Roadmaps, Hierarchies, and Custom Master Objects - Enable Instantaneous Sync for Assignment Updates in the Timesheet Posting Job - Reporting - Export Enhancements - Exclude Placeholder Tabs in Report Scheduling - Reporting - OData Service Enhancements - Support OData with Row-Level Security - Reporting - Report Migration - Enhancements to Migrating Reports and Data Providers - Reporting - Scheduling and Sharing Enhancements - Improve Usability for Publishing Schedules, Sharing, and Access Rights - Copy Report Schedules - Task Management Enhancements - Introducing Smart Task Creation - Introducing Per-Period Metrics for Actuals, ETC, and Total Usage Attributes - Administrative Enhancements

Clarity - 16.4.1 25
- Enhancements to the Time Slicing Sync Job - Enhancements to Just-in-Time User Creation - Support for a Read-Only Database User - Enhancements to SQL Curves - Introducing the Database Optimization and System Maintenance Jobs - Enhancements to Blueprint Copy Capability - Accessibility Improvements
Introducing Enhancements to VAIA
- Announcing General Availability of Vaia - Define AI Agents for "Attribute" Context - Configure AI Agents to Generate, Revise, and Review Content - Summarize Status Reports using Standard Reporting Artifacts - Use Files as Data Sources for AI Agents - Validate AI Model Configuration - View Actual AI Error Messages - Include Rich Text Attributes in AI Prompts - Connect via Gemini API - Review AI Consumption Data
Announcing General Availability of Vaia
In Clarity 16.4.1, Vaia transitions from Beta to General Availability (GA).


Key Enhancements: - The "Beta" tag is removed from the Vaia module in Clarity Administration. - Vaia is available for configuration immediately upon upgrade. - To use the feature, enable the Activate Vaia AI Service toggle in System Options. - Ensure you have the Administration - Vaia - Navigate access right to configure Vaia. - You must configure your supported AI service (e.g., Gemini, OpenAI) within Clarity to enable functionality. To learn more, see Using Clarity Vaia (AI). Upgrade Impact: After you upgrade, Vaia is available as a General Availability feature. To utilize it, administrators must enable the Activate Vaia AI Service toggle in System Options and configure a supported AI service provider. Define AI Agents for "Attribute" Context In Clarity 16.4.1, you can now define AI Agents with a specific "Attribute" context. This capability allows you to target individual fields for generation or review and enables the simultaneous execution of multiple agents on a single page.
Key Enhancements - Attribute Context: A new Context option called Attribute is available when creating a new agent. This restricts the
agent's availability to a specific field within the object instance. - Flexible Output Locations:
- Text Field: Directs the AI response to populate the selected attribute. This option is only editable when Context is set to Attribute.
- Chat Panel: Displays responses in the chat flyout panel; ideal for reviews or summaries that should not overwrite field data.
- Target Selection: A new Attribute dropdown allows you to select the specific field where the AI Agent will be available. - Simultaneous Execution: Unlike agents configured for Workspace or Object contexts, agents configured for the
Attribute context can run concurrently across multiple fields on the same page. To learn more, see Configure AI Agents in Vaia.

Upgrade Impact: After you upgrade, any existing AI actions targeting specific attributes are automatically converted to AI Agents with the Attribute context preserved. You can immediately configure new agents for specific fields without requiring additional system-level changes. Configure AI Agents to Generate, Revise, and Review Content In previous releases, users navigated to the "Enable AI" tab to configure generation, revision, and review capabilities, often treating them as distinct action types. In Clarity 16.4.1, the "Enable AI" tab has been removed, and all content operations are consolidated under the AI Agents tab. You can now use a single framework to configure agents that generate new content, revise existing text, or provide reviews.
Key Enhancements - Unified Configuration: The Enable AI tab is removed. You now have to navigate directly to the AI Agents tab to
manage all GenAI capabilities. - Content Generation: Configure agents to generate content for Large String - Rich Text attributes. Define the Output
Location as Text Field to directly populate the response. - Content Review and Revision:
- Revise: Configure agents to rewrite text (e.g., "Make professional") and update the field directly. - Review: Configure agents to analyze content and provide feedback in the Chat Panel without altering the source
attribute. - Expanded Prompt Context: You can now include Large String - Rich Text attributes and uploaded files (PDF, CSV,
etc.) as data sources in your agent prompts. To learn more, see Configure AI Agents in Vaia. Upgrade Impact: After you upgrade, all previously defined AI actions are moved to the AI Agents tab.
- Naming Convention: Converted agents are renamed using the format: <Action Mode> <Attribute Name> in <Object Name>.
- Cleanup: Any legacy AI Action missing required attributes will be removed from the system. - Prompt Updates: Migrated prompts will include the instructions Clarity previously added automatically. You can
update these prompts to remove those instructions if desired. Summarize Status Reports using Standard Reporting Artifacts In previous releases, the AI action for status report summarization relied on a hardcoded set of artifacts, limiting flexibility for customers who wanted to include custom data. In Clarity 16.4.1, the status report summarization logic has been moved to a standard query-based data provider and report. You can now fully customize the data sent to the AI for status report summaries.
Key Enhancements - New Seeded Data Provider: A new data provider called Status Summary Artifacts has been added to the system. It
uses a query to retrieve the same artifacts as the legacy AI Action. - New Sample Report: A report called Status Summary Artifact (Sample) is included, which displays the investment
key, status report key, and relevant artifacts. - Customizable Data Source: You can copy the default data provider and report to modify the artifacts collected,
allowing you to tailor the data used for AI summarization to your specific needs. To learn more, see Working with Report Designer.

Upgrade Impact: After you upgrade, any existing AI Action for status report summarization is automatically converted to an AI Agent. - Automatic Configuration: The new Status Summary Artifact (Sample) report is automatically added as a data source
mapping to the converted agent. - Action Required: Review the report content and the agent prompt to ensure they meet your requirements. Use Files as Data Sources for AI Agents In Clarity 16.4.1, the AI Agent definition is expanded to allow using documents as a data source. You can now use files to provide specific context to your AI models, subject to the configured model's constraints.
Key Enhancements - Agent Configuration:
- Use the new Attachment option on the Agent configuration page to upload up to 10 documents. - Use the button below the prompt to specify the documents to send during execution. - Note that uploading a document does not automatically send it with the prompt. However, all uploaded documents
are available to the end user to reference during the AI interaction. - Model Configuration
- File Upload URL: Configure the API endpoint to upload documents for LLMs that require documents to be sent as a separate payload.
- File Upload Maximum Size (MB): Set the maximum upload size for documents and the prompt. If left blank, the value defaults to the Clarity file-upload size limit.
- Supported File Extension: Define which document types (for example: txt,pdf,csv) users can upload with the agent. Multiple extensions are listed, separated by commas.
- End User Experience - Access uploaded document(s) included in the agent configuration during analysis. - Type "+" in the follow-up prompt text area to open a document list and select a specified document. - Click on the document in the text panel to view or download it.

To learn more, see Configure AI Agents in Vaia. Upgrade Impact: After you upgrade, if you configure an agent with files and the File Upload URL If a required field is not populated, the user will receive a reactive error message when executing the AI Agent. Validate AI Model Configuration In previous releases, administrators typically had to run an AI action to verify if an AI model configuration was valid, making troubleshooting time-consuming. In Clarity 16.4.1, you can now validate the model configuration directly from the AI Models administration page. This capability provides immediate feedback on connection status and configuration validity.
Key Enhancements - New Context Menu Option
- A new Validate Model option is available within the context menu of the AI Models tab. - The option enables you to trigger a validation call to the configured AI service without leaving the administration
grid. - Validation Logic
- The Validate Model option is only available for rows where the Integration value is populated. - Clicking the option initiates a call to the AI provider and displays a toast message indicating either success or a
specific error. - Performance
- Occasionally, the validation process may take some time to receive a response from the LLM. To learn more, see Configure AI Models. Upgrade Impact: After you upgrade, you can immediately use the Validate Model action on the AI Models page to verify that your integrations are configured correctly. No additional configuration is required to enable this feature. View Actual AI Error Messages In previous releases, error messages displayed during AI execution were often generic, requiring administrators to review logs to identify the root cause. In Clarity 16.4.1, you can now view the specific error message provided by the

Large Language Model (LLM) directly in the user interface. This capability enhances transparency and speeds up troubleshooting.
Key Enhancements - Expanded Error Handling:
- The system now captures and displays the specific error text returned by the LLM (e.g., "File extension 'jpg' is not supported").
- Actionable Feedback - This visibility allows you to resolve issues yourself where possible (such as correcting file formats) or provides administrators with the specific cause reported by the AI service. - While the UI displays a Toast Message, detailed technical information remains available in the Clarity log file.
To learn more, see Configure AI Agents in Vaia. Upgrade Impact: After you upgrade, end users will automatically see detailed LLM error messages when AI Agent execution fails. No configuration is required. Include Rich Text Attributes in AI Prompts In previous releases, you could not include "Large String - Rich Text" attributes when defining the prompt for an AI Agent. In Clarity 16.4.1, you can now include Rich Text attributes as part of the prompt context. This capability allows you to leverage formatted data within your AI content generation strategies.

Key Enhancements - Rich Text Support
- AI Agents now support the selection of Large String - Rich Text attributes within the prompt definition. - You can include these attributes alongside standard string attributes to provide a richer context to the AI model. To learn more, see Configure AI Agents in Vaia. Upgrade Impact: After you upgrade, you can update existing AI Agents or create new ones that utilize Rich Text attributes in their prompts. Connect via Gemini API In previous releases, Clarity supported Gemini models only via the Vertex API endpoint. In Clarity 16.4.1, you can now support the Gemini API endpoint in addition to the Vertex API. This capability provides flexible authentication options and expanded model support.

Key Enhancements - Gemini API Support:
- Support has been added for the Gemini API endpoint, complementing existing Vertex API support. - Authentication
- The Gemini API integration supports API key authentication. - Model Selection
- You can select the specific model you want to use by specifying it directly in the Gemini URL (e.g., https:// generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent)
To learn more, see Configure AI Models. Upgrade Impact: After you upgrade, the new Gemini API integration option is available on the AI Models page. You can configure new models using this endpoint immediately. Review AI Consumption Data In previous releases, visibility into AI token consumption and specific model usage was limited or required external monitoring. In Clarity 16.4.1, you can now review detailed AI consumption data using a standard database query. This capability allows you to track usage costs and monitor system activity effectively.

Key Enhancements - Consumption Logging:
- Clarity captures each AI request in a log table, recording the AI model used and the execution date. - Token Counting
- Token count is only captured for Gemini and OpenAI - Vertex Specifics
- For Vertex API calls, the system captures the GCP Project name to assist with cloud billing reconciliation. - Tracking Query
- You can use the following query to check the AI Consumption in Clarity:
SELECT gh.OBJECT_CODE, gl.created_by, u.full_name, gh.ATTRIBUTE_CODE, gh.STATUS_CODE, gl.PROMPT_TOKEN_COUNT, gl.RESPONSE_TOKEN_COUNT, gl.project, gl.model, gl.integration_url, gl.created_date
FROM gen_content_history gh JOIN gen_contents_logs gl ON gl.GEN_HISTORY_ID = gh.id JOIN cmn_sec_users u ON u.id = gl.created_by
ORDER BY gl.created_date DESC

To learn more, see Creating Queries to View Data in Transactional Schema (Beta). Upgrade Impact: After you upgrade, the system automatically begins logging detailed consumption data for all AI Agent executions. You can run the provided consumption query to view historical data generated after the upgrade. Introducing Clarity Registration - Register Clarity Instances Register Clarity Instances Administrators must complete a one-time registration for each Clarity installation to establish a connection with Broadcom. Registration must be done once per Clarity instance. You must repeat the registration process for each Clarity instance that you install or manage for your organization.
- Registration Notifications: - For Administrators: If your instance is unregistered, you will see the following message with a clickable button: " Your Clarity instance has not been registered with Broadcom. Please click here to complete the registration process." - For Non-Administrators: Users without administrative privileges will see the following message: " Your Clarity instance has not been registered with Broadcom. Please contact your administrator to complete the registration process."
To learn more, see Register your Clarity Instance.

Upgrade Impact: After you upgrade, Clarity automatically checks your instance's registration status. If the instance is not registered, a notification banner appears for all users. Administrators must complete the registration process to remove the notification.
Common Grid Enhancements - Instantaneous Aggregation of Calculated Attributes
Instantaneous Aggregation of Calculated Attributes In previous releases, updating a custom aggregate calculated attribute (ACA) from a sub-object often required a hard refresh to see the updated value on the master object. In Clarity 16.4.1, any ACAs now automatically refresh on the parent object instantly when changes are made to child records. This enhancement ensures real-time data consistency without manual intervention.
Key Enhancements - Automatic Refresh
- Clarity now triggers an automatic refresh of any Aggregate Calculated Attributes on the parent object when a subobject record is created, updated, or deleted.
- This refresh logic applies to multiple hierarchical scenarios, including updates to master objects from second-level sub-objects and updates to second-level objects from third-level sub-objects.
- The functionality supports all combinations of stock and custom objects across supported levels (Master, 2nd Level, 3rd Level).
- Supported Views - The auto-refresh feature works consistently across key layouts, including Grid, Nested Grid, Board, and Timeline views. - It specifically supports updates made via the Details flyout (sub-object grid), "Expand All" on the Details flyout, and widget pane updates.
- Supported Objects - This enhancement is available for Projects, Ideas, Resources, Agreements, Custom Master Objects (CMOs), and Custom Investment Types (CITs) (including Team CITs and Event CITs).
To learn more, see Create and Edit Custom Investments. Upgrade Impact: After you upgrade, existing objects with aggregated values will automatically utilize this instant refresh capability. No additional configuration is required.

Note: Hierarchies, Roadmaps, and Plans (Beta) do not support sub-objects and are therefore excluded from this feature. General Enhancements - Filter Audit Records by Attribute Name - Use `Prior Period' for End Period and `Next Period' for Start Period in Per-Period Settings - Enhancements to the Search Capability in the Users Workspace Filter Audit Records by Attribute Name
With this Clarity 16.4.1 release, Clarity enhances the Audit capability by allowing users to filter audit records using the Attribute display name, in addition to the existing Attribute ID-based filtering. This enhancement also supports relabeled attributes and localized labels. This improvement makes it easier to review and analyze audit data by focusing on specific fields that were changed, improving traceability and usability for administrators and auditors. Key Enhancements
- User-friendly attribute filtering: You can now filter audit records using the Attribute display name instead of relying only on the internal Attribute ID.
- Support for relabeled attributes: The filter honors customized attribute labels defined in administration. - Localization support: Attribute labels displayed in the filter respect the user's language and localization settings. - Broad availability: The Attribute filter is available in:
- Administration > Audit - Investment Audit modules (when enabled via Blueprint) - Resource Audit modules (when enabled via Blueprint)
NOTE Some key points to remember are: - Attribute Name filtering affects only how audit records are filtered and displayed. - The underlying audit data and audit capture logic remain unchanged. - If an attribute is relabeled, the system uses the relabeled display name; otherwise, it uses the attribute name
defined in Studio. - The filter applies to both Attributes and Per-Period Metrics displayed in the Audit module. To learn more, see Clarity: Audit. Upgrade Impact: After you upgrade, the Attribute Name filter is available immediately in all supported Audit modules. No configuration changes are required. Use `Prior Period' for End Period and `Next Period' for Start Period in Per-Period Settings Configure dynamic date ranges with greater flexibility using the new smart date options. Select Next Period as a start period and Prior Period as an end period to create advanced rolling time windows for your reports and grids.

Key Enhancements - Next Period (Start Date): Select Next Period in the Start Date field to look ahead and filter your views starting from the
upcoming period. Use this option to forecast future resource allocation. - Prior Period (End Date): Select Prior Period in the Finish Date field to cap your data view at the most recently
completed period. Use this option to analyze historical performance up to the last closed cycle. NOTE Some key points to remember are: - Access these new options across various areas in Clarity. - Select valid date combinations. If the End Period resolves to a date earlier than the Start Period, Clarity prevents the action and displays the following error message: End Period cannot be prior to Start Period.

To learn more, see Managing Projects. Upgrade Impact: After you upgrade, access the new Next Period and Prior Period options directly in the View Options. No additional configuration is required. Enhancements to the Search Capability in the Users Workspace The Search capability in the User's workspace has been enhanced to ensure you can search by First Name, Last Name, and User Name. In previous releases, you could only search on First Name. To learn more about the Users workspace, see Managing Users In Clarity. Upgrade Impact: After you upgrade, you can search by First Name, Last Name, and User Name in the Users workspace. Financial Enhancements - View Forecast % of Budget Cost in Cost Plan Details and Investment Workspaces View Forecast % of Budget Cost in Cost Plan Details and Investment Workspaces Track your financial variances more effectively by monitoring how your forecasted costs align with your budget over time. You can now view the Forecast % of Budget cost directly in your Cost Plan Details and Investment workspaces.
Key Enhancements - View the New Variance TSV Field: Add the new Forecast % of Budget Time-Scaled Value (TSV) field to your grid
views. Use this field to analyze financial variances dynamically across different time periods. - Monitor Financial Health: Track exactly what percentage of your allocated budget is consumed by your current
forecast at any given point in your project lifecycle. To learn more, see Working with Cost Plans. Upgrade Impact: After you upgrade, access the new Forecast % of Budget TSV field directly in your view configuration options for Cost Plan Details and Investments. No additional configuration is required.


Report Designer - Charts and Widgets Enhancements
- Use Breakdown Dimensions for Line, Column, and Bar Charts - Introducing the Bubble Chart Type - Introducing the Split Packed Bubble Chart Type - Introducing the Gantt Chart Widget - Enhancements to Pie and Donut Charts


Use Breakdown Dimensions for Line, Column, and Bar Charts
With this Clarity 16.4.1 release, you can now configure Breakdown Dimensions for Bar, Column, and Line charts even when Periods are turned off. This enhancement enables categorical analysis directly within charts, without requiring timebased periods.
Key Enhancements
- Breakdown without periods: Bar, Column, and Line charts now support Breakdown Dimensions when the Periods toggle is set to off.
- Single-metric requirement: Breakdown Dimensions are available only when a single metric is configured in the chart. If multiple metrics are added, the Breakdown option is not displayed.
- Consistent chart behavior: - Bar and Column charts support stacked visualizations based on the selected Breakdown Dimension. - Line charts now support categorical breakdowns without relying on time-based periods.
- Controlled data density: You can limit the number of values displayed for the primary dimension and breakdown series. Remaining values can be grouped under an Others category to improve readability.
NOTE
Some key points to remember are:
- Breakdown Dimensions are supported only for Bar, Column, and Line chart types. - The Breakdown option is available only when a single metric is configured. - Turning Periods off enables categorical analysis using Breakdown Dimensions. - Existing period-based Breakdown behavior remains unchanged.
To learn more, see Working with Report Designer.
Upgrade Impact: After you upgrade, this new capability is available immediately for supported chart types. Existing charts are not impacted unless you update their configuration.

Introducing the Bubble Chart Type
With this Clarity 16.4.1 release, Clarity introduces a new Bubble chart type in the Report Designer. This chart type enables report designers to visualize relationships across multiple metrics within a single chart, supporting comparative and distribution-based analysis.


Bubble charts allow you to analyze data using position, size, and optional grouping, making it easier to identify patterns, outliers, and relative performance across categories. Key Enhancements - New Bubble chart type: A new Bubble option is available in the Chart Type selector when configuring a chart widget. - Multi-metric configuration:
- One metric is configured for the X-axis. - One metric is configured for the Y-axis. - One metric is configured to control Bubble Size. - Dimension-based grouping: You can configure a Dimension to define how data is grouped into individual bubbles. - Legend configuration: You can configure the legend position and display values (Name, ID, or Name and ID). - Display and formatting options: - Configure axis titles, labels, gridlines, and background. - Control padding and overall chart layout. - Bubble coloring: - Bubble colors can be assigned automatically or based on display mappings when configured. - Controlled data density: - You can limit the number of bubbles displayed to improve readability. - Interactive behavior: - Hovering over a bubble displays contextual details for the underlying object instance. - Drill-down is supported for a single object instance. - Image export support: - Bubble charts can be downloaded as an image (PNG) from the designer and preview views.
NOTE Some key points to remember are:
- Bubble charts are designed for comparative and distribution analysis and are not intended for time-series visualization.
- Sorting is supported for Number and Date attributes; TSV (Total) attributes are not supported for sorting. - Bubble charts are not supported in PDF or PPTX exports. If included in an export, the chart is marked as not
supported. - Available dimensions, metrics, and display options depend on the selected data provider. To learn more, see Working with Report Designer. Upgrade Impact: After you upgrade, report designers can immediately create Bubble charts in the Report Designer. Existing reports are not impacted unless updated. Introducing the Split Packed Bubble Chart Type With this Clarity 16.4.1 release, Clarity introduces a new Split Packed Bubble chart type in the Report Designer. This chart type enables report designers to visualize grouped or hierarchical distributions by packing bubbles into distinct clusters based on a selected dimension.
The Split Packed Bubble chart helps you compare relative sizes and distributions across groups, making it easier to analyze composition, concentration, and proportional relationships within complex datasets. Key Enhancements - New chart type: A new Split Packed Bubble option is available in the Chart Type selector when configuring a chart
widget. - Group-based bubble packing:
- Bubbles are grouped into clusters based on the selected Dimension. - Each cluster represents a unique dimension value. - Metric-driven sizing: - A metric controls the size of the inner bubbles, enabling relative comparison within and across groups. - The metric supports Sum, Average, and Count aggregation methods. - Legend support:
- The legend reflects grouped dimension values and can be positioned using standard legend options. - Consistent configuration experience:
- The Split Packed Bubble chart uses the same configuration panels, interactions, and layout behavior as other chart types in the Report Designer.
- Interactive behavior: - Hovering over a bubble displays contextual details for the underlying object instance. - Drill-down is supported for a single object instance. NOTE Some key points to remember are: - Split Packed Bubble charts are intended for distribution and composition analysis rather than time-series analysis. - Available dimensions, metrics, and aggregation options depend on the selected data provider. - Split Packed Bubble charts are not supported in PDF or PPTX exports. If included in an export, the chart is marked as not supported.
To learn more, see Working with Report Designer. Upgrade Impact: After you upgrade, report designers can immediately create Split Packed Bubble charts in the Report Designer. Existing reports are not impacted unless updated. Introducing the Gantt Chart Widget With this release, Clarity introduces the Gantt chart as a new chart type in the Reporting workspace. You can now add a Gantt chart to reports to visualize start and finish dates directly within Report Designer. The Gantt chart helps report designers present timeline-based data in a visual format, making it easier to review schedules, overlaps, and progress across investments or other objects.
Key Enhancements
- New chart type: Report designers can add a Gantt chart from the widget library in Report Designer. - Timeline visualization: Display records using start and finish date attributes on a timeline. - Flexible configuration: Configure the data provider, title, columns, start date, finish date, sorting, and sort order. - Per-period metrics: Use per-period metric settings such as Duration or Periods with fiscal or standard calendars. - Filtering support: Apply standard widget-level, tab-level, and report-level filters. - OBS display behavior: When using OBS attributes, only the display value is shown without the full hierarchy path. - Accessibility and localization: WCAG requirements are supported, and locale-specific formats such as dates and
numbers are honored. NOTE Some key points to remember are: - Gantt charts do not support: - Exporting to PDF or PPTX is not supported. - Drill-down functionality. - Autofit functionality. - Sub-object links such as tasks, to-dos, or financial sub-objects. - When OBS attributes are used, grouping is not supported, and only the selected OBS display value is shown.
To learn more, see Working with Report Designer. Upgrade Impact: After you upgrade, report designers can immediately use the Gantt chart when creating or editing reports in Report Designer.
Enhancements to Pie and Donut Charts The Pie and Donut charts now support displaying minimum, maximum, and average values for selected metrics. In the previous releases, you could only use the sum and count options. Consider a scenario where you want to view the average capital cost of investments for a particular department or the minimum capital required per department. All such visualizations are possible by selecting the Maximum, Minimum, and Average options alongside the relevant metric. The chart also supports negative values in pie and donut charts. Clarity uses absolute values to calculate proportions and displays negative values in charts as needed. In some cases, calculating an average with a negative numerator or denominator yields a negative result. This can produce visuals that could be confusing. Hence, it's critical to understand your data before modeling it for reports. To learn more, see Creating and Managing Widgets. Upgrade Impact: After you upgrade, Pie and Donut charts now support displaying minimum, maximum, and average values for selected metrics.
Report Designer - General Enhancements - Enhancements to Attribute Groups - Hide Object Grouping Labels in Reporting Table Headers - Manage Columns Using Table Properties - Apply OBS Display Options Across Tables, Charts, and Attributes - View Resource Availability and Allocations in a Single Grid - Manage Multiple Tables, Charts, and with AutoFit

Enhancements to Attribute Groups
In previous releases, Clarity introduced the Attribute Group widget, which bundles related attributes and metrics into a single, structured widget. You can use it to present key descriptive fields (such as project name, status, manager, dates, or classification attributes) alongside numeric metrics that summarize performance or financial data. The Attribute Group widget now includes the following enhancements:
- When the container for the attribute group is resized, it automatically snaps to the nearest symmetrical size to ensure all attributes are displayed clearly.
- Clarity resizes the container to display all attributes, even if the user resizes it to hide a few at the edges. - The position of individual attributes within the group will be preserved during export to ensure they remain easily visible
in the output. - The process of dragging and dropping widgets into the Attribute Group widget has been streamlined to improve
usability.
To learn more, see Creating and Managing Widgets.
Upgrade Impact: After you upgrade, you will see improved performance in attribute groups.
Hide Object Grouping Labels in Reporting Table Headers
With this Clarity 16.4.1 release, Clarity improves the readability of table widgets in the Report Designer by hiding object grouping labels from table headers.
This enhancement reduces visual clutter and makes table-based reports easier to read, particularly when working with grouped data and calculated attributes.
Key Enhancements - Cleaner table headers: Object grouping labels are no longer displayed in the header of reporting table widgets. - Improved clarity for calculated attributes: Calculated dimensions and metrics are displayed without redundant
object context in the header. - Consistent behavior across views: The updated header display applies to the Report Designer, Preview, and
Viewer. - Export support: The updated header behavior is honored in PDF and PPTX exports.
NOTE
Some key points to remember are:
- This enhancement is controlled by an administrative feature toggle that is enabled by default after upgrade. - The change affects only the visual display of table headers; grouping, aggregation, and data results remain
unchanged. - Per-period metrics displayed in columns continue to show period and total labels. - Data Extraction layouts and CSV exports are not impacted.
To learn more, see Working with Report Designer.
Upgrade Impact: After you upgrade, reporting table widgets automatically use the updated header display. No configuration changes are required unless administrators choose to disable the feature toggle.
Manage Columns Using Table Properties
Manage table columns efficiently, even when working with short or small tables. In previous releases, the column picker height was limited by the table height, which required excessive scrolling to view desirable fields. Now, access the column panel directly from the Table Properties. This enhancement prevents the column panel from blocking your view of smaller grids and removes height limitations.

Key Enhancements - Access Columns via Table Properties: Use the new Columns lookup in the Table Properties to search for, select,
and manage your attributes. - Retain Full Functionality: Experience the exact same rich functionality you used in previous releases.
- Expand or collapse attribute sections. - Search for specific fields. - View attribute metadata, such as data type icons. - Check or uncheck boxes to instantly add or remove columns from your table. - View Updated Item Counts: View the number of items selected at the top of the panel rather than columns selected. This label change accurately reflects configurations that contain multiple per-period metrics.
NOTE Some of the key points to remember are: - Drag and drop columns within the panel to reorder them. You can also drag a column directly from the panel
and drop it into a specific position on the report table. - View clear instructions directly on the report canvas. When you add a new table, the system now displays the
message: Add columns from the table properties. The in-table "Add Columns" button is no longer available. To learn more, see Working with Report Designer. Upgrade Impact: After you upgrade, access the relocated column panel directly in the Report Designer Table Properties. No additional configuration is required.

Apply OBS Display Options Across Tables, Charts, and Attributes In previous releases, OBS attributes were always displayed using the full hierarchical path, which could make reports harder to read and less flexible for analysis. In Clarity 16.4.1, you can now control how Organizational Breakdown Structure (OBS) data is displayed across tables, charts, and attribute groups in Report Designer. This enhancement allows report designers to tailor OBS presentation by displaying only the relevant OBS levels while still supporting grouping, aggregation, and filtering. Key Enhancements - OBS display options: Configure how OBS values are displayed using one of the following options:
- Full Path - Attached Unit (with optional parent) - Selected Levels
- Tables: Configure OBS display from the column menu for OBS attributes in table widgets.
- Charts: When an OBS attribute is used as a dimension, configure OBS display options from the chart properties.
- Attribute groups: Configure OBS display options when OBS attributes are used in attribute groups.
- Grouping and aggregation: Data is grouped and aggregated based on the selected OBS display level. - Independent filtering: OBS filtering remains independent of OBS display and grouping options.
NOTE Some key points to remember are: - OBS display options apply only to OBS attributes. - OBS filtering continues to support existing filter options such as units, units and antecedents, and units and
descendants. - OBS display selections are honored in report exports. - OBS display options do not change which records are included in the report; they only affect how OBS
values are displayed. - For Gantt charts, OBS values always display the full path. To learn more, see Working with Report Designer.

Upgrade Impact: After you upgrade, existing reports continue to display OBS values using the full path by default. You can update reports to use the new OBS display options as needed.
View Resource Availability and Allocations in a Single Grid In previous releases, reporting on resource availability and investment allocations required separate views or additional post-processing to analyze capacity versus demand at the resource level. In Clarity 16.4.1, you can now report on resource-level availability, allocation, and remaining capacity together in a single table grid. This enhancement enables report designers to build capacity versus demand reports by combining resource availability and investment staff allocations in one grid, with improved aggregation control and display flexibility when grouping data. Key Enhancements - Unified grid view: Display resource availability, allocation, and remaining capacity alongside investment staff
allocations in a single table. - Flexible grouping: Group the grid by multiple attributes, such as resource manager and resource, to analyze capacity
at different levels. - Group-level aggregations: Define different value aggregation methods for metrics at each group level when the grid
is grouped by more than one attribute. - Metric visibility control: Hide or show availability, allocation, and remaining metrics independently at group and detail
levels. - Cleaner metric labels: Optionally hide aggregation method labels (for example, Max or Sum) from metric headers to
improve readability. NOTE Some key points to remember are: - Group-level aggregation settings apply only when the grid is grouped by more than one attribute. - Hiding metrics at a group or detail level affects only the display and does not change the underlying data. - The ability to hide aggregation method labels applies to grouped table views only.
To learn more, see Working with Report Designer. Upgrade Impact: After you upgrade, you can immediately build resource capacity versus demand reports using the enhanced table configuration options in Report Designer.
Manage Multiple Tables, Charts, and Attribute Groups with AutoFit Clarity 16.4.1: Report AutoFit and Layout Stability In previous releases, tables set to AutoFit could displace adjacent widgets--such as text areas, charts, and attribute containers--pushing them to the bottom of the report. In Clarity 16.4.1, use AutoFit to grow tables dynamically based on data volume without breaking your report structure. This enhancement ensures all report elements retain their intended positions on the canvas, providing a stable layout for complex status reports.

Key Enhancements 01. Stabilized Browser Layouts - Enable AutoFit: Apply AutoFit to tables within attribute containers or grid stacks without risking widget displacement. - Maintain Precision: View dynamic data growth while the system maintains the precise coordinates of surrounding
widgets. 02. Optimized Canvas Space
- Suppress Trailing Rows: Experience a tighter visual layout as the system suppresses unnecessary trailing rows in preview mode.
- Reduce White Space: Minimize vertical white space below grids to stack multiple tables more efficiently within a single report.
03. Consistent Grid Behavior - Dynamic Growth: Ensure tables grow only to the extent of the data present to prevent empty tables from occupying
excessive vertical real estate. - Control Grid Stacks: Maintain grid stack integrity to ensure container sizes remain predictable during data
fluctuations. NOTE Export your newly stabilized reports to PDF. Clarity honors the exact layout shown in the browser preview, correctly rendering all attribute groups and auto-fit tables.
To learn more, see Working with Report Designer. Upgrade Impact: After you upgrade, all existing and new reports will automatically utilize the improved layout rendering engine. No additional configuration is required.
Report Designer - Filter and View Enhancements - Save and Reuse Filters as a Report Viewer - Compare Dates Using Date Fields - Use New Smart Options for Time Reporting Periods
Save and Reuse Filters as a Report Viewer
With this Clarity 16.4.1 release, report viewers can save their filter selections and reuse them when viewing reports. This enhancement allows report consumers to quickly return to commonly used filter combinations without reapplying filters each time they access a report. Key Enhancements - Save viewer filters: Report viewers can save their current filter selections while viewing a report. - Reuse saved filters: Saved filters can be applied later to view the report with the same filter criteria. - Manage saved filters: Report viewers can rename or delete their saved filters without affecting designer-provided
filters. - Viewer-specific behavior: Saved filters are personal to the viewer and do not impact other users or the report design. - Improved usability: Reduces repetitive filter configuration for frequently accessed reports.

NOTE Some key points to remember are: - Saved filters are available only to the user who created them. - Saved filters are grouped separately from designer-recommended filters. - Viewer saved filters do not change the underlying report or its published filters. - Viewer saved filters are also available when scheduling reports. To learn more, see Working with Reports. Upgrade Impact: After you upgrade, report viewers can immediately start saving, managing, and reusing filters when viewing or scheduling reports. No configuration changes are required. Compare Dates Using Date Fields
In previous releases, date filters allowed you to select a date value or a date range, but you could not compare one date attribute with another date attribute within the same filter. In Clarity 16.4.1, you can now compare date attributes using date fields directly in filters. This enhancement allows report designers and report viewers to configure filters that compare one date attribute against another date attribute or against smart date options. The comparison logic is applied consistently across report design, viewing, and scheduling. Key Enhancements - Compare date attributes: Configure a filter to compare a date attribute with another date attribute. - Smart options in date comparison: When comparing date attributes in a filter, you can use smart date filter options
within the same filter. - Availability: The capability is available in Report Designer and Report Viewer. - Filter scope: You can configure date comparisons in report-level, tab-level, and widget-level filters. - Scheduling support: The capability is available in report scheduling. - Timestamp handling: When comparing dates, the date's timestamp is excluded in the comparison.
NOTE Some key points to remember are:
- The Is Empty and Is Not Empty operators are not supported for date comparisons. - Date comparison filters are not available in:
- Data Provider pre-filters - Data Provider preview filters - Conditional formatting rules - Comparison logic is not supported in Data Provider join conditions. To learn more, see Working with Report Designer. Upgrade Impact: After you upgrade, you can immediately compare date attributes using date fields in supported filters in Report Designer and Report Viewer. Use New Smart Options for Time Reporting Periods Use the new smart options for time reporting periods to easily configure views and reports around timesheet data. This capability streamlines report design by automatically adjusting date ranges based on the current time reporting period.
Key Enhancements - New Smart Options for Start Dates:
- Start of current time period - Start of next time period - Start of previous time period - New Smart Options for End Dates: - End of current time period - End of next time period - End of previous time period
NOTE Some of the key points to remember are: - Apply the new smart options at the Report Level, Tab Level, and Widget Level. - Use this feature across various data providers, including the Investments and Timesheets Data Providers. - Export to PDF to ensure the final document honors the configured time reporting periods and maintains the
specific date ranges and layout from your preview. To learn more, see Working with Report Designer. Upgrade Impact: After you upgrade, you will have access to the new time reporting period smart options in per-period metric settings. No additional configuration is required. Reporting - Data Provider Enhancements - Create Calculated Dimensions and Metrics in the Data Provider - Use Variables to Filter Queries - Associate Lookups with Query Attributes for Filtering - Configure the Standard Calendar Per-Period Metric View Options in Preview Create Calculated Dimensions and Metrics in the Data Provider In previous releases, calculated logic was typically applied at the report level, limiting reuse across multiple reports. In Clarity 16.4.1, you can now define calculated dimensions and calculated metrics directly within a data provider.

This enhancement allows report designers to centralize business logic at the data-provider level, ensuring consistency across all reports that use the provider and reducing duplication of calculations.
Key Enhancements
- Calculated dimensions: Define derived dimensional values using expressions that can be reused across reports. - Calculated metrics: Create reusable calculated measures based on existing numeric attributes and metrics. - Provider-level reuse: Calculations defined once in the data provider are available to all reports that reference it. - Improved maintainability: Changes to calculation logic are automatically reflected in all dependent reports.
NOTE Some key points to remember are: - Calculated dimensions and metrics are evaluated as part of the data provider query. - Calculations defined in a data provider do not require duplication at the report level. - Existing reports are not impacted unless they are updated to use the new calculated fields. To learn more, see Working with Data Providers. Upgrade Impact: After you upgrade, you can immediately create and use calculated dimensions and metrics in new or existing data providers. No migration is required. Use Variables to Filter Queries In previous releases, data provider queries had limited awareness of the logged-in user, often requiring hardcoded values or separate reports to personalize results. In Clarity 16.4.1, you can now use additional variables in data provider queries that resolve based on the logged-in user.
This enhancement allows report designers to dynamically filter query results based on the logged-in user's information, such as language or user identity, without requiring manual input. Key Enhancements
- Logged-in user variables: Data provider queries now support variables for the logged-in user, including language, locale, resource ID, user ID, user name, and user UID.
- Dynamic filtering: Use these variables in query filters and expressions to automatically tailor results for the logged-in user.
- Reusable queries: Build a single data provider that adapts to different users without creating multiple versions. - Reduced hardcoding: Eliminate the need to hard-code values such as language codes directly in queries.
NOTE Some key points to remember are: - The variables resolve at runtime based on the logged-in user. - You can use multiple variables and reuse the same variable within a single query. - Existing queries are not impacted unless the new variables are explicitly used. To learn more, see Working with Data Providers. Upgrade Impact: After you upgrade, the new logged-in user variables are immediately available for use in data provider queries. No migration is required. Associate Lookups with Query Attributes for Filtering
In previous releases, filtering query attributes that stored coded values often required users to work with internal codes rather than business-friendly labels. In Clarity 16.4.1, you can now associate lookups directly with data provider query attributes to improve filtering usability. This enhancement ensures that filters display meaningful lookup values while maintaining consistent behavior across reports that use the same data provider. Key Enhancements - Lookup association: Associate a lookup with a query attribute when configuring the data provider. - User-friendly filtering: Filters display lookup values instead of raw codes, making it easier for users to select the
correct filter criteria. - Consistent behavior: Lookup associations are honored across report-level, tab-level, widget-level, and interactive
filters. - Reusable configuration: Lookup associations defined in the data provider are reused by all reports that reference it.

NOTE Some key points to remember are: - Lookup associations affect how filter values are displayed and selected; they do not change the underlying
query logic. - Existing data providers and reports are not impacted unless a lookup is explicitly associated with a query
attribute. - This capability works with existing interactive filtering and drill-down behavior. To learn more, see Working with Data Providers. Upgrade Impact: After you upgrade, you can associate lookups with query attributes in new or existing data providers without requiring changes to existing reports. Configure the Standard Calendar Per-Period Metric View Options in Preview Configure the Standard Calendar (January-December) to preview per-period metrics within the Data Provider Preview tab. This enhancement aligns the preview experience with the Report Designer, enabling you to accurately validate data using standard calendar structures before building your final output.
Key Features
- Standard Calendar Support: Select the Standard Calendar as the calendar type in the Data Provider View Options of Preview Tab.
- Supported Period Types: View and validate your data across multiple time intervals, including: - Days - Weeks - Months - Quarters - Years
- Smart Date Options: Use the smart option pull-down to select dynamic Start and Finish dates based on the selected period type.
To learn more, see Working with Data Providers.
Upgrade Impact: After you upgrade, access the new standard calendar view options directly in the Data Provider Preview tab. No additional configuration is required.
Reporting - Data Warehouse Enhancements
- Access New Data Warehouse Attributes - , Hierarchies, and Custom Master Objects - Enable Instantaneous Sync for Assignment Updates in the Timesheet Posting Job
Access New Data Warehouse Attributes
Clarity now includes the following attributes in the Data Warehouse:
- Investment Object - Originating Idea - Has Staff
- Task Object - Parent Name - Parent ID - Phase Name - Phase ID - Status Code
- Cost Plan - Plan Revision - Status Code
Upgrade Impact: After you upgrade, new attributes will be available in the Data Warehouse.
To learn more, see Configure the Data Warehouse.
Apply Row-Level Security to Roadmaps, Hierarchies, and Custom Master Objects
Row-level security (RLS) has been implemented in the Data Warehouse for Roadmaps, Hierarchies, and Custom Master Objects (CMOs) to ensure OData users can securely access data for these objects while respecting Clarity access rights. Row-Level Security automatically filters results based on user or group permissions, enabling seamless integration with reporting tools and AI agents without requiring custom coding.
Upgrade Impact: After you upgrade, row-level security is available in Data Warehouse for Roadmaps, Hierarchies, and CMOs.
To learn more, see Configure the Data Warehouse.

Enable Instantaneous Sync for Assignment Updates in the Timesheet Posting Job In previous releases, certain updates in Clarity required scheduled Data Warehouse jobs to complete before changes were reflected in reporting and analytics. In Clarity 16.4.1, the Instantaneous Sync capability has been further enhanced to extend near real-time updates during the Post Timesheets job. Assignment data can now be updated via Instantaneous Sync. This enhancement improves the freshness of Assignment-related reporting data immediately after timesheets are posted.
NOTE Some key points to remember are: - Instantaneous Sync applies only to supported Data Warehouse data. - Scheduled Data Warehouse jobs are still required for data that is not covered by Instantaneous Sync. - This enhancement builds on the existing Instantaneous Sync functionality delivered in earlier releases. To learn more, see Configure the Data Warehouse. Upgrade Impact: After you upgrade, Assignment updates from the Post Timesheets job are reflected through Instantaneous Sync automatically. No configuration changes are required.
Reporting - Export Enhancements - Exclude Placeholder Tabs in Report Scheduling
Exclude Placeholder Tabs in Report Scheduling With this Clarity 16.4.1 release, you can control whether placeholder tabs are included in scheduled report outputs. A new Exclude tab placeholders toggle is available on the Export tab of the Report Schedule modal, positioned after the Exclude tabs option. This toggle allows you to exclude placeholder tabs when generating scheduled report exports. Key Enhancements - New scheduling toggle: Use the Exclude tab placeholders toggle on the Export tab of the Report Schedule modal
to control inclusion of placeholder tabs. - Cleaner scheduled outputs: When enabled, placeholder tabs are excluded from scheduled report exports. - Default behavior preserved: The Exclude tab placeholders toggle is set to OFF by default, maintaining existing
behavior. - Schedule-level control: The setting applies per report schedule and does not affect the report design or interactive
viewing experience. NOTE Some key points to remember are: - This option applies only to scheduled report exports. - Excluding placeholder tabs does not affect how the report appears when viewed interactively. - Existing report schedules continue to include placeholder tabs unless the toggle is explicitly enabled.
To learn more, see Working with Reports. Upgrade Impact: After you upgrade, existing report schedules are not modified. You can enable the Exclude tab placeholders option when creating or editing a report schedule.
Reporting - OData Service Enhancements - Support OData with Row-Level Security

Support OData with Row-Level Security With this Clarity 16.4.1 release, OData services now support Row-Level Security (RLS) to ensure that data returned through OData respects Clarity access rights. This enhancement ensures that users and integrations accessing data through OData can retrieve only the records they are authorized to view in Clarity, aligning OData behavior with Clarity's security model. Key Enhancements - Row-Level Security enforcement: OData queries apply Row-Level Security based on the authenticated user. - Permission-aware data access: Users receive only the data they are permitted to access in Clarity. - Consistent security behavior: OData security is aligned with other secured data access mechanisms in Clarity. - Secure integrations: External integrations using OData automatically honor Clarity access rights.
NOTE Some key points to remember are: - Row-Level Security is enforced at runtime based on the authenticated user's access to investments,
resources, or their own user data. - Data Warehouse access rights must be loaded for Row-Level Security to be enforced correctly. - This enhancement applies only to OData services. - Existing OData integrations continue to work, with data visibility now governed by Clarity access rights. Upgrade Impact: After you upgrade, OData queries automatically enforce Row-Level Security. Users and integrations may see reduced data visibility if they do not have permission to access certain records. Reporting - Report Migration - Enhancements to Migrating Reports and Data Providers Enhancements to Migrating Reports and Data Providers

In the previous release, Clarity introduced the capability to export reports, including their associated Data Providers, from the Report Designer grid. This allows users to share, migrate, or back up reporting assets more efficiently.
The following enhancements have been introduced in this release:
- Replace reports and data providers on import: If the Migration Key matches between the items in the import file and the reporting content on the target server, Clarity will replace existing reports/data providers. If Clarity does not find a matching Migration Key, it will create new reports/data providers on the target server.
- Publish the report after import: The Import wizard now includes the Publish report after import option. If users select this option, Clarity will publish the report after the import process is complete.
- Support for Export and Import of Images: Clarity now allows you to export and import custom images that are added to reports by using the image widget. The report import file can be up to 50MB and is configured by using the Maximum reporting package import file size setting.
- Enhanced Manifest File: The manifest includes names of reports, data providers, and images in the export package. Administrators can use it to verify report content before importing it into Clarity.
- Enhanced Error Reporting: If Clarity encounters an issue during import, it will generate a CSV error file. You can download and review this file for more details on the specific items that caused the error.
- Export Queries and Metadata: Clarity also exports the Data provider query attribute metadata information in the report migration package. They include attribute labels, tooltips, and associated lookups.
NOTE Some key points to remember are:
- Existing report schedules do not need to be cancelled if the report or data provider is replaced during import. - When you are importing a report and associated data providers to replace an existing report, ensure that you
check the following points to avoid import errors: - The report and the data provider "Status" must be "Published". - You do not have any edits in a published report. - Prior to the report schedule run, the report library instance will not be impacted. - Upcoming report schedules will not be impacted, assuming the report import has not changed the report schedule filters. - If the report import deletes or modifies report filters that are not valid for the report schedule filters, users will see a warning message when accessing the report schedule filters. - When SQLQuery exceeds 50 attributes, the import to the target system fails. This is a known issue and will be fixed in an upcoming release.
Upgrade Impact: After you upgrade, remember the following key points:
- Report export zip files from prior releases will not work in this release. - Importing a zip file from a prior release will abort the import. - After you import a report, administrators should validate the upcoming report schedule filters to ensure they remain
valid. - If you perform an import replace and the import adds a new attribute to the data provider or report, users who have the
report open in their browsers may need to refresh their browsers, as the prior configuration may still be cached.
To learn more, see Exporting Reports and Data Providers (Beta).
Reporting - Scheduling and Sharing Enhancements
- Improve Usability for Publishing Schedules, Sharing, and Access Rights - Copy Report Schedules

Improve Usability for Publishing Schedules, Sharing, and Access Rights In previous releases, publishing reports, managing schedules, and configuring sharing and access rights required navigating multiple dialogs and understanding dependencies between options. In Clarity 16.4.1, several usability improvements have been introduced to simplify how reports are published, scheduled, shared, and secured. These enhancements make it easier for report designers and administrators to understand report status, configure access, and manage schedules with clearer guidance and fewer errors. Key Enhancements - Improved publishing flow: The publishing experience provides clearer feedback on report status and readiness. - Clearer scheduling experience: Scheduling options are easier to understand and configure. - Simplified sharing: Sharing options are more intuitive, helping users grant appropriate access. - Better access-right visibility: Improvements clarify how access rights affect report visibility and availability. - Reduced configuration errors: Updated validations and messaging guide users through publishing, scheduling, and
sharing actions. NOTE Some key points to remember are: - These enhancements focus on usability and do not change the underlying report execution or security model. - Existing reports, schedules, and sharing configurations continue to work as before. - Access to publishing, scheduling, and sharing actions is still governed by existing Clarity access rights.
To learn more, see Working with Report Designer. Upgrade Impact: After you upgrade, the improved usability for publishing, scheduling, sharing, and access rights is available automatically. No changes are required to existing reports or schedules. Copy Report Schedules In previous releases, creating a new report schedule required configuring all schedule settings manually, even when the new schedule closely resembled an existing one. In Clarity 16.4.1, you can now copy an existing report schedule to create a new schedule more efficiently.

This enhancement reduces repetitive configuration and helps ensure consistency when managing multiple report schedules. Key Enhancements - Copy existing schedules: Create a new report schedule by copying the configuration of an existing schedule. - Faster schedule setup: Reuse schedule details such as frequency, delivery options, and filters instead of re-entering
them. - Reduced errors: Minimize configuration mistakes by starting from a known, working schedule. - Independent schedules: The copied schedule can be edited without affecting the original schedule.
NOTE Some key points to remember are: - Copied schedules are created as separate schedules with their own lifecycle. - You can modify the copied schedule before saving it. - Access to copy report schedules is governed by existing report scheduling access rights. To learn more, see Working with Reports. Upgrade Impact: After you upgrade, you can immediately copy existing report schedules. No changes are required to existing schedules.
Task Management Enhancements - Introducing Smart Task Creation - Introducing Per-Period Metrics for Actuals, ETC, and Total Usage Attributes
Introducing Smart Task Creation You can now use the Smart Task Creation capability to create new tasks that override the Default Start and Default Finish dates in Classic PPM. In previous releases, when you created a new task in an investment, Clarity automatically applied the default start and finish dates. If these dates were outside the existing investment start or finish dates, Clarity automatically shifted the investment dates. Clarity administrators can now select the Set New Task Start and Finish Dates Using Parent or Investment Dates option. Clarity will enforce the following behaviours when users create tasks. - New Task button or (+) button: Creates a new task at Level 1 of the WBS and inherits the investment dates. - Insert Row Below button(Flat grid action): Creates a new task at Level 1 of the WBS and inherits the investment dates
in a flat grid list. - Insert Sibling Task (Timeline or Expandable Tree Grid Action): Creates a new task at the same level as the source task
and inherits its dates from the source task's parent. - Insert Child Task (Timeline or Expandable Tree Grid Action): Creates a new task at one level below the source task
and inherits the source task's dates, making the source task the Parent Task for the newly created task. NOTE Some key points to remember are: - Administrators must select the "Set New Task Start and Finish Dates Using Parent or Investment Dates" option to enable Smart Task Creation. - Ensure administrators have selected the Default Date for the Task Start and Finish Date attributes to ensure the Smart Task Creation feature works properly. If either the Task Start date or Finish date field does not

have a Default Date set in Classic PPM, not all actions for creating a new task will pull in the Parent or Investment Dates. - Moving the task bar forward or backward, or changing task dates, may push the Investment Start or Finish Date out, depending on the change or the task's duration. Use the Duration field to adjust the task before changing the Start Date. Change the Finish Date to an earlier date to reduce the Duration before changing the Start Date.
Introducing Per-Period Metrics for Actuals, ETC, and Total Usage Attributes Per-period metrics, also known as time-scaled values (TSV), aggregate and display key data--such as costs, hours, or effort--broken down by specific time periods, weeks, months, quarters, or fiscal years), rather than showing only cumulative totals. Clarity now extends per-period metrics to the following critical labor resource attributes - Actuals (time already worked) - Estimate to Complete (ETC, remaining effort) - Total Usage (Actuals + ETC)
Actuals, ETC, and Total Usage provide essential visibility into labor resource consumption patterns, tracking completed work, remaining forecasts, and complete demand--critical for capacity planning, earned value analysis, and ensuring resources align with project timelines and budgets.
Since you can now view these attributes as per-period metrics, you can get period-specific trends such as early-month actuals delays, mid-quarter ETC spikes indicating scope changes, or Total Usage peaks that signal upcoming capacity constraints, enabling proactive staffing and schedule adjustments.
These per-period metrics for Actuals, ETC, and Total Usage are now available in the Investment Tasks Module, the Tasks Workspace, the Hierarchy Tasks Module, and the Reporting workspace.
NOTE Some key points to remember are: - The Actuals, ETC, and Total Usage fields are read-only aggregation attributes whose values are rolled up
from assignments. You cannot edit these per-period metrics at the task level. - The existing ETC `scalar' field allows for top-down editing to spread the `Grand Total' amount down into the
individual assignments, proportional to existing assignments. This 'scalar' field can be secured to disable or allow editing at the task level. - Existing `scalar' ETC, Actuals, and Total Usage fields only aggregate labor resources. This is why the new Task Curve fields only aggregate labor resources. Non-labor resources typically don't have estimated work effort, and non-labor actuals usually reflect money spent, not effort. - Ensure you use the "Is Task = Yes" filter to avoid double-counting parent task rollup aggregations. - The roll-up does not include amounts from external task dependencies or subprojects.
Administrative Enhancements - Enhancements to the Time Slicing Sync Job - Enhancements to Just-in-Time User Creation - Support for a Read-Only Database User - Enhancements to SQL Curves - Introducing the Database Optimization and System Maintenance Jobs - Enhancements to Blueprint Copy Capability


Enhancements to the Time Slicing Sync Job
The Time Slicing Sync job synchronizes and rebuilds the SQLcurve data that underpins timephased views in Clarity, such as perperiod cost, work, allocation, and availability. The existing job parameters have been changed, and new parameters have been introduced to provide greater usability and control to the Clarity Administrator.

Parameter

Purpose

Default Value

Optimized Value

Guidance

Parallel Processing Thread Count

Controls concurrency

1 Thread

2-3 Threads

Increase this only if your database server has ample CPU/Memory available. While higher thread counts process data faster, going beyond 3 risks diminishing returns and table locking.

Process Number of Rows Balances memory usage 100 rows

per Batch

versus speed

500 rows

Increase to 500 to speed up processing for large datasets. If you experience "Out of Memory" errors, table locking, or database timeouts, revert to using 100 for this parameter.

Maximum Runtime (minutes)

Ensures the job yields Blank restricted 10 to 30 minutes Schedule the job to run more frequently

results after a set time, runtime -

scheduled

(e.g., every 15 minutes) with a short

allowing greater control in process all

for frequent

runtime cap, rather than once a day with

overall scheduling

source curves runs (Max: 480 no cap.

based on job

minutes = 8

parameter inputs hours)

Number of Prior Months for Limiting Investment Data

This parameter replaces 60 months the `Earliest Investment Finish' parameter. Now, instead of using a specific date in the parameter, the new parameter uses a relative date based on the current date when running the job. This parameter determines the 1st day of the month specified prior to the current month. Example: If the current month is January 2026, using the default of 60 months, the job will select and process Active Investments with a Finish Date >= January 1, 2021.

36 to 60 months The parameter processes the following curves: Assignments (prassignment), Cost Plan Details (fin_cost_plan_details), Investments (inv_investments), and Staffing (prteam)


Parameter

Purpose

Default Value

Optimized Value

Number of Prior Months for Limiting Timesheet Data

This is a new, separate 24 months parameter that determines a relative date as the 1st day of the month specified prior to the current date when running the job. Example: If the current month is January 2026, using the default of 84 months, the job will select and process Timesheet Entries with a Finish Date >= January 1, 2019.

12-24 months

Date Calculation to Determine which Active Investments or Timesheet Data is processed

A `blank' value for the parameter will process all Active Investments without limits.

Guidance
The parameter processes the following curves: Timesheet Entries (prtimeentry). If a `blank' value is entered, the code will process the default of 24 months. If a value >84 is entered, the job will fail with a log message indicating that 84 is the maximum number of months allowed.

NOTE Some key points to remember are:
- To process curves, the investment must be Active and have a Finish Date on or after the date of the relevant parameter.
- In previous releases, the `Earliest Investment Finish' parameter was used to limit both investment and timesheet data to a specific date. You now have separate parameters for investment data and timesheet data, enabling relative date determination. Both parameters determine a relative date that begins on the 1st of the determinative month and are used to select which records the job processes. Existing sliced SQLCurves that do not fall within the parameter limitations are not processed, not removed, not updated. If you set the parameter to 0, the system will process Timesheet Entries or Active Investments with a Finish Date >= 1st day of the current month.
Upgrade Impact: After you upgrade, the Time Slicing Sync job's upcoming schedule is canceled. Review and update the parameters for the enhanced job definition, and create a new schedule for it.

Enhancements to Just-in-Time User Creation
Clarity supports SAML-based Single Sign-On (SSO) to streamline user access management by allowing authentication through an organization's Identity Provider (IdP). This integration ensures secure, centralized user authentication across enterprise systems. In Clarity 16.3.1, SAML SSO was enhanced to automatically create users in Clarity during the SAML authentication process --a feature known as JustInTime (JIT) provisioning. This eliminated the need for administrators to manually add users before granting SSO access.
Some key features include:
- User Group Synchronization: Clarity updates a user's group membership based on the user groups sent from the IdP. The mandatory "Basic group for user access" is always retained, while any existing groups not listed in the SAML request are removed.
- Resource Attribute Synchronization: Clarity populates or updates resource fields, such as Date of Hire or Date of Termination, when those attributes are included in the SAML response.
- Backward Compatibility: Current SAML implementations continue to work. The additional fields are optional and do not affect existing authentication flows.
This enhancement allows organizations to manage user identity and access policies in a single central system--the IdP-- with those changes automatically reflected in Clarity during each SSO login. Upgrade Impact: After you upgrade, Clarity will update a user's group membership and fields such as Date of Hire and Date of Termination. To learn more, see On-Premise SAML Configuration.
Support for a Read-Only Database User Clarity supports a special read-only database user used internally by the application to run queries in the Queries workspace. This user has only SELECT rights in the database and is never used to log into the Clarity UI. The goal is to reduce risk when Clarity runs technical queries by ensuring that those database calls do not modify data. Key Points about the read-only use: - Clarity will add the readOnlyUserName and readOnlyUserPassword parameters to the Properties.xml file. - It is not a Clarity "application user" and does not appear on the Clarity login screen. - It cannot perform insert, update, delete, or schemachanging operations, helping protect production data integrity and
reduce risk. - If administrators want to create a user, they can use the admin db create-ppm-readonly-user command.
When administrators use the Queries workspace, Clarity requests a read-only connection from its connection layer. If the readonly user is configured: - Clarity connects to the database using the readonly account. - The operation runs with SELECTonly rights, preventing accidental updates or deletes at the DB level.
Upgrade Impact: After you upgrade, Clarity will create a read-only user in the database, which will be used when you access the Queries workspace. To learn more, see Creating Queries to View Data in the Transactional Schema.
Enhancements to SQL Curves Clarity introduced SQL Curves to provide a faster, more flexible way to store and query timephased (perperiod) data, such as monthly costs, allocations, and other perperiod metrics. Instead of relying only on traditional timeslice fact tables, SQL Curves store this information in special curve structures that SQL can access more efficiently for reporting and analytics. With this enhancement, the underlying SQL Curve implementation has been optimized to ensure that Queries that retrieve perperiod metrics from SQL Curves now execute more quickly, especially for large portfolios or long date ranges. Upgrade Impact: After you upgrade, you will experience improvements in areas such as the Staffing Workspace and the Financial grids, which use SQL curves.

Introducing the Database Optimization and System Maintenance Jobs In previous releases, Clarity included the DB Maintenance job, a system/administration job that cleans up and optimizes database data to maintain performance over time. This job removes or archives old, transient, or logtype records (e.g., process engine history, session/log tables, temporary or staging data) to prevent core tables from growing unchecked and slowing queries. In this release, Clarity has replaced the DB Maintenance job with the following jobs: - Database Optimization job: Performs database maintenance activities such as database cleanup. Some key
parameters are: - Clean Orphaned Instance Rights - Clean Orphaned Instance Rights (Limit) - Delete Orphaned Captions - Clean Page Instances - Clean Page Instances (Limit) - System Maintenance job: Performs system maintenance activities according to specified parameters - Maintain PPM Broker Service - PPM Broker Data Retention (days) - Clean Data Warehouse Tracker Logs - Data Warehouse Tracker Logs Retention (days) - Clean Process Error Logs Process - Error Log Retention (days) - Clean Orphaned Process Error Logs - Clean Orphaned Process Error Logs (Limit) To learn more, see Clarity Jobs Reference. Upgrade Impact: After you upgrade, the legacy DB Maintenance job is removed and replaced by the new Database Optimization and System Maintenance jobs.


Enhancements to Blueprint Copy Capability


The Copy facility with Blueprints has now been enhanced. Clarity will only copy blueprints where the Status attribute is set to Draft or Published. If the Status attribute is set to Has Edits, the Copy option will be disabled. This ensures that users copy the latest blueprints, which include all business rules and other configurations that have been successfully implemented and tested. To learn more, see Getting Started with Blueprints.
Accessibility Improvements Here are the accessibility improvements in this release: - Accessibility Remediation: This release addresses multiple customer-reported issues and findings from the May
2024 (Clarity 16.2.2) accessibility audit. Updates were made to ensure compliance with various WCAG success criteria, enhancing accessibility for all users. - Increased Compliance for User Adoption: Accessibility improvements drive adoption by meeting organizations' demands for compliance with accessibility standards, ensuring users have appropriate tools to view and access company-specific information.


Supported Accessibility Combinations


Operating System Windows MacOS

Browser Chrome, Firefox, and Edge Safari, Chrome

Screen Reader JAWS and NVDA VoiceOver

NOTICE The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users.
To learn more, see Accessibility - 16.4.1 Remediation Details.

Change Impact and Upgrade
IMPORTANT The Change Impact and Upgrade page highlights significant changes, required actions, known issues, and recommended options for customers upgrading from the previous releases to Clarity 16.4.1. If you want to review changes introduced by the new features and their upgrade impact, please review the Release Notes.
For compatibility-related information, see, Hardware and Software Compatibility Specifications.
For installation and upgrade-related information, see Installing and Upgrading.
To prepare for an upgrade to Clarity 16.4.1, review the supported upgrade paths, features, enhancements, and required upgrade actions. The following information summarizes how the new changes introduced in this release impact your upgrade experience.
This page includes the following sections:
- Clarity 16.4.1: AI Agent Migration and Configuration - End of Life Announcement for CA Business Intelligence for Clarity - New Fields Introduced in Clarity 16.4.0 - Oracle-Only: Additional Configuration for Upgrade to Clarity 16.3.3 - Prerequisites for Using the Staffing Workspace - Configure Revenue and Actual Revenue as Per-Period Metrics - Enhancements to Parameterized Lookups - Utilize Release Override During the Upgrade to Clarity 16.2.3 - Updated Names and Descriptions for Existing Scenario Rights - Upgraded yFile HTML library for Hierarchies - Beta Tag Removed from Capabilities - Localization Capability Generally Available - Leveraging PDF Capability in SSO Environments - Review Cancelled Jobs After Upgrade - Installation and Upgrade Dependencies - Supported Upgrade Paths for Clarity - Pre-Upgrade: Run the Installation Checker (On-Premise Only) - Make Third-Party JAR Files Accessible to the Installer (On-Premise Only) - Upgrade Large Data Sets (On-Premise Only) - Custom Processes, Scripts, and Other Customizations - Pre-and-Post-Upgrade: Preserve Your File Directory Customizations (On-Premise Only) - Data Warehouse Changes for Reporting - Data Warehouse Changes for Time Entry Actuals


Clarity 16.4.1: AI Agent Migration and Configuration
Review the impact of the upgrade to ensure AI functionality remains operational:
Review AI Action Migration
During the upgrade, all previously defined AI Actions are automatically moved to the new AI Agents tab. Note the following conversion rules:
- Mandatory Attributes: Any AI Action missing required attributes (including the "Attribute" attribute) will be removed from the system during the upgrade.
- Naming Convention: Converted agents are renamed using the format: <Action Mode> <Attribute Name> in <Object Name>. Users can modify these names after the upgrade is complete.
- Prompt Consolidation: If multiple actions were defined for a single attribute, each is converted into a separate AI Agent. The original prompts are migrated directly to the new agent.
- Instruction Cleanup: Migrated prompts will now include the hidden instructions previously added by Clarity. Users should review and update prompts to remove any redundant system instructions.
Update Specific AI Features
Certain specialized actions require manual intervention or specific review following the upgrade:
01. Reconfigure Roadmap Summarization - The legacy "Roadmap Summarization" action is disabled upon upgrade. - To restore this, users must build a roadmap-specific report, attach it to a new AI Agent, and manually enable it.
02. Review Status Report Summary - If a status report summary action existed prior to the upgrade, it will be converted to an AI Agent. - The out-of-the-box report will be automatically added with all artifacts. - Action Required: Users should review the report content and the agent prompt to ensure they meet specific business
requirements.
Post-Upgrade Examples
Clarity will transform old AI actions into the new structured format as shown below:
Clarity 16.4.0 - AI Action (and prior)

Name

Type

Generate Contents Project

Attribute Objective

AI Agent in Clarity 16.4.1

Action Mode

Prompt

Generate, Revise

Generate a 200 word ##project.c_objective## for the ##project## called $[project.name]. Rewrite the following text to a professional tone.

Name
Generate Objective in Project

Type Project

Attribute Objective

Revise Objective in Project

Project

Objective

Output Location

Prompt

Text Field Text Field

Generate a 200 word ##project.c_objective## for the ##project## called $[project.name]. Generate output using markdown syntax.

Rewrite the following text to a professional tone. Content to rewrite: $[project.c_objective]. Generate output using markdown syntax.


End of Life Announcement for CA Business Intelligence for Clarity Broadcom is continually working to improve our software and services to best meet the needs of our customers. To focus our development efforts to help our customer base achieve their strategic business initiatives, we are investing our resources in new technology and software and will be discontinuing support for the CA Business Intelligence for Clarity or commonly known as Clarity Advanced Reporting powered by Jaspersoft. To learn more, see this announcement. New Fields Introduced in Clarity 16.4.0 The following additional fields are now available in the Clarity 16.4.0: - Investment (Financials)
- Budget/Cost Plan Details
- Roadmaps
- Staff and Resource
IMPORTANT These additional attributes are also available in the Data Warehouse. You can download the Clarity 16.4.0 Attributes Added in the Data Warehouse file for detailed information.

Oracle-Only: Additional Configuration for Upgrade to Clarity 16.3.3 Perform the following additional steps for Oracle deployments only: 1. Grant required privileges
a. Connect to the Oracle database as the sys user (sysdba) b. Execute the following SQL statement:
GRANT CREATE ANY CONTEXT, DROP ANY CONTEXT TO <Clarity_database_user>;
c. Replace <Clarity_database_user> with the actual username of your Clarity database user. 2. Grant package execution rights
a. Still connected as SYSDBA, execute the following SQL statement:
GRANT EXECUTE ON SYS.DBMS_SESSION TO <Clarity_database_user>;
b. Again, replace <Clarity_database_user> with the actual Clarity database username. IMPORTANT The required privileges and package execution rights are mandatory for Clarity functionality and must not be revoked after the upgrade or at any later time.
3. After upgrading to Clarity 16.3.3, follow these steps: a. Enable the feature toggle a. With Clarity services running, connect to the Clarity server b. Run the following command:
admin toggle-feature IMPERSONATEDBY_SESSION_CONTEXT_VARIABLE_DE168694 1
b. Run database bootstrap a. On the Clarity server, run the following command:
admin db db-bootstrap-odf -Dodf.triggers=true -Dodf.force=false Dodf.restoreNonCustomizedViews=false
c. Restart the services
Prerequisites for Using the Staffing Workspace Clarity recommends clearing the Display Availability and Remaining Availability Amounts for Roles system option in Classic PPM. This enables Clarity to ignore non-zero values in the `Availability' and Remaining Availability' fields for roles within the Roles workspace and Staffing workspaces. This field is selected by default when you upgrade to preserve how Clarity behaved before the upgrade. Broadcom recommends that you clear this field after upgrading to make the best use of the Staffing workspace and the Roles workspace.
Configure Revenue and Actual Revenue as Per-Period Metrics The following new Per-Period fields are available in Investment workspaces: - Planned Revenue - Planned Actual Revenue - Budget Revenue - Budget Actual Revenue

These per-period metrics are exclusive to Clarity and are not available in Classic PPM. You can secure these Per-Period Metrics and control user access to these per-period metrics on the Attributes page.
NOTE The Post Actuals to Investment Job is enhanced to aggregate revenue data at the investment level, ensuring that revenue metrics are calculated accurately. Upgrade Impact: After upgrading to this release, you can: - View the new per-period metrics in the Investment Workspace. - Secure these metrics in Administration Attributes, giving control over who can access these fields. - Populate Actual Revenue Values for existing investments when the Post Actuals to Investment Job runs To learn more, see Clarity Jobs Reference. Enhancements to Parameterized Lookups Parameterized lookups in Clarity allow us to dynamically query data based on user input or selections from other fields. Consider the example of a project where the source field is Project Type, which is linked to a parameterized lookup Project Category. In previous versions, wherever customers updated the source field, Clarity did not prompt users to consistently update their selection in the parameterized lookups across all components such as grids, Properties tab, Details panel, and Create modals. This led to data integrity issues. In this release, whenever you update the source field, Clarity will perform the following actions:
- If the current value in the parametrized lookup is valid and the source is changed, Clarity will not clear the lookup. If the value is invalid, Clarity will clear the lookup.
- If the parameterized lookup is read-only (Studio or Business Rule) and the source attribute is changed, Clarity will clear the parameterized lookup.
- If the parameterized lookup is secured using FLS, where the attribute is View only or is not visible to the user and the source attribute is changed, Clarity will clear the parameterized lookup.
- If the parameterize lookup is a required attribute and the source is changed, Clarity will not clear the lookup if the value is relevant. Otherwise, it will clear the values in the Clarity UI and the database and display a modal for the user to enter the updated value.
NOTE Some key points to remember are:
- Bulk edit, copy-paste, and fill handle operations for source attributes for required parameterized lookups are disabled.
- Suppose the parameterized lookup is required, and CSV Import changes a source attribute. In that case, the source attribute will be changed, and the source attribute and parameterized lookup could be left with an invalid combination.
- If a parameterized lookup that has source attribute that is a date, you have the following limitations when you drag-n-drop cards on the calendar layout: - For non-required parameterized lookups, the parameterized lookup will be cleared when the source attribute changes or the combo is invalid. Still, it will not be reflected in the UI immediately--it will display correctly when the workspace is refreshed. - Changing the date via calendar layout via drag-n-drop will not display the required modal for required parameterized lookups, and the source attribute is a date.
- In the Calendar layout, if a source attribute is a date and you have a required parameterized lookup, dragand-dropping cards in the calendar will not display a modal; the changes will be applied in the database. You can refresh the workspace to see the updated information.
- Suppose you use business rules to set attributes on a parameterized lookup or its source attribute. In that case, you need to set both the source and parameterized lookup attributes in the set attribute rule to ensure the correct combination is set.
- When you select attribute values for parameterized lookup, and its source attributes, the business rules admin screens will not filter out the values in the parameterized lookup based on the source attribute. You will see all of the values in the parameterized lookup. The Clarity administrator must ensure that the source and parameterized lookup values are a valid combination.
Utilize Release Override During the Upgrade to Clarity 16.2.3
During the upgrade to Clarity 16.2.3, using release override resolves critical issues encountered with:
- Clarity 16.2.3 Upgrade Fails on PREUPGRADE_KEY_RESULTS_VALUE_TYPE.xml - Clarity 16.2.3 Upgrade Fails on a Post Step With POSTUPGRADE_NEW_AUDITS_VIEWS_PERSONALIZATION.xml
Updated Names and Descriptions for Existing Scenario Rights
IMPORTANT
In Clarity 16.2.3, only the name and description of the Scenario access rights are updated; the functionality remains unchanged. Functional updates will be included in the next release.


The following are the updated names and descriptions for the existing Scenario Rights:


Sl. No.

Old Name

New Name

Old Description

New Description

01.

Scenario - Navigate Scenario - Navigate Allows users to view the Scenario Navigate to the Scenario pages in

[Retained as is]

toolbar on capacity planning

Classic.

scenario-enabled pages and create

new scenarios.

02.

Scenario - Edit Access Scenario - Edit Access Allows users to edit access rights Allows user to edit the access

Rights

Rights

for a specific scenario.

rights for a specific Scenario in

[Retained as is]

Classic. Does not include access

to navigate or view Portfolios or

Scenarios.

03.

Scenario - Manager - Staffing Scenario -

When you create a scenario,

Allows Scenario Creator to view,

Automatic

Creator (Auto)

access is automatically assigned. edit and delete their own scenarios

The access allows you to view, edit, in the Staffing workspace in the

and delete your own scenarios.

Clarity and in Classic. In Classic,

You can also view, edit, and delete this right also includes Scenario -

access for that scenario.

Edit Access Rights.

04.

Scenario - Edit

Staffing Scenario - Edit Allows users to edit and delete a specific scenario.
Includes: Scenario - View and the ability to delete the Scenario

Allows user to edit a specific Scenario in the Staffing workspace in the Clarity and in Classic.

05.

Scenario - View

Staffing Scenario View

Allows users to view a specific scenario.

Allows user to view a specific Scenario in the Staffing workspace in the Clarity and in Classic.

REMEMBER A newly added access right is Scenario - XOG Access. The description for this access right is: Allows user to import and export Scenario instances in Classic and the Clarity using the XML Open Gateway interface.

Upgraded yFile HTML library for Hierarchies The yFile HTML library for Hierarchies has been upgraded in this release.

Beta Tag Removed from Capabilities
The following capabilities are now generally available since the BETA tag is no longer attached to them.
- Action Framework - Timesheets (Business Rules)

Localization Capability Generally Available
You can use the Localization feature to localize Clarity and Classic PPM interface in languages no longer officially supported by Broadcom. In previous releases, you needed to contact Broadcom Support to toggle on this capability. It is now generally available to all customers. To learn more, see Configure General System Settings.

Leveraging PDF Capability in SSO Environments
If you use Single Sign On or custom cookies to access the Load Balancing URL, you may run into issues while using the Export to PDF capabilities. In such scenarios, you need to populate the internalURL property in the webServer tag of the properties.xml file. You can enter the non-sso HTTP URL as the internalURL parameter.


<webServer schedulerUrl="" capaUrl="" internalUrl="http://xx.xxx.xxx.xxx" sessionTimeout="" tenantTimeout="1440" sslType="implied" enableBroker="false">
Microsoft Project Integration Upgrade Details You should uninstall and upgrade your Clarity Microsoft Project Integration software using the version available after upgrading Clarity in Account Settings-> Software Downloads. Note that the Microsoft Project Interface bit level installed should match that of Microsoft Project. Microsoft Project Interface (x86) should be installed for 32 bit versions of Microsoft Project and Microsoft Project Interface (x64) version should be installed for 64 bit versions of Microsoft Project.

Availability of Localized Documentation For a few months after release, help will be available only in English. The Help link will automatically redirect you to the English site. However, the help link currently defaults to the localized site and displays a blank page since the content is not localized. Broadcom will fix this issue in future releases.

Review Cancelled Jobs After Upgrade
Please review any Clarity jobs that are in the Canceled state after your upgrade is complete. Please pay special attention to any canceled jobs that were previously recurring. Sometimes, after an upgrade, job parameters change, and the jobs move to a canceled state. If you don't proactively review canceled jobs, you will only notice them after you receive escalations from the business.

Installation and Upgrade Dependencies The install and upgrade scripts in this release introduce the following dependencies in the listed chronological order:

Install/Upgrade of This Component: Upgrade Classic PPM
Clarity Install PMO or APM add-ins

Requires This Component:
- Data Warehouse Configured - Load Data Warehouse Job Completed - PMO Accelerator Add-in Installed
- Data Warehouse Configured

Supported Upgrade Paths for Clarity
Please review the table to identify the minimum supported release from which you can upgrade to the latest version of Clarity.

16.4.1 16.4.0 16.3.3 16.3.2 16.3.1 16.3.0 16.2.3 16.2.2 16.2.1

Clarity Version

Minimum Supported Version for Direct Upgrade 16.3.3 16.3.3 16.2.3 16.2.3 16.2.3 16.2.3 16.1.3 16.1.3 16.1.3


16.2.0 16.1.3 16.1.2 16.1.1 16.1.0 16.0.3 16.0.2 16.0.1 16.0.0 15.9.3

Clarity Version

Minimum Supported Version for Direct Upgrade 16.1.3 16.0.3 16.0.3 16.0.3 16.0.2 15.9.3 15.9.0 15.9.0 15.8.1 15.8.0
- Review Clarity Release and Support Lifecycle Dates to learn more about the supported Clarity version. - You cannot upgrade to Release 16.4.1 directly from Release 14.2 with Jaspersoft 5.6.1 or from Release 14.3 with
Jaspersoft 6.1.0. The Jaspersoft 6.4.2 or 7.1 upgrade does not support those configurations. Your indirect upgrade is still supported. For example, upgrade to 14.3 and Jaspersoft 6.4.2 first. Then upgrade to 15.8 and upgrade to Jaspersoft 7.1. - You can upgrade from a previous release even if you have no Jaspersoft reports environment configured. The data warehouse is required; however, reporting is not required. You can elect to upgrade from 14.x and perform a fresh installation of your reports environment. - To upgrade from earlier 13.x releases, it often helps to upgrade to 14.3 or 14.4 first and skip the Advanced Reporting component. This approach simplifies the troubleshooting and restart process if an upgrade step fails. Then, from 14.x, you can upgrade to 15.6 and install Jaspersoft 7.1 for Advanced Reporting.
TIP
The installer detects how many incremental upgrade steps are required to update your installation to the latest release. If two or more, you are prompted to decide if you would like the installer to save automated backups at each step. For example, from 15.4 to 15.5, from 15.5 to 15.5.1, from 15.5.1 to 15.6, from 15.6 to 15.6.1, from 15.6.1 to 15.7, from 15.7 to 15.7.1, from 15.7.1 to 15.8, from 15.8 to 15.8.1, and from 15.8.1 to 16.4.1.
If you have installed any patches on the base version, verify that you applied the latest supported cumulative patch before and after you upgrade. Patch maintenance before and after upgrades is important for troubleshooting, security fixes, and general system health.
Follow these steps:
1. See the Clarity and Jaspersoft Cumulative Patches page. 2. Select your current release from the Versions menu at the top right of that help page. For example, select 15.1 and
verify you installed the 15.1.0.9 patch or select 15.3 and verify that you installed the 15.3.0.5 patch before starting your upgrade to 15.8. After the upgrade, install the latest 15.8 patch.
WARNING You might experience issues if you attempt to upgrade directly from an unsupported patch level. For best results, follow a supported upgrade path. To learn more, contact Broadcom Support. You can also visit the Clarity Community to collaborate with other community members about your specific questions.


Pre-Upgrade: Run the Installation Checker (On-Premise Only) The Installation Checker (checkinstall) utility assesses any installation or upgrade. The utility runs automatically at the start of an installation or upgrade and at the end of an upgrade attempt. You can also run it manually. The utility produces a report results file (precheck-results.html) in the <install-root>/checkinstall/check-logs directory. Upgrade Action: For best results, run the Installation Checker before starting the full installation and upgrade process. Carefully evaluate and resolve warnings before proceeding. Follow these steps: 1. Extract the Clarity installer to the Clarity application server. 2. Open a command prompt and navigate to the checkinstall directory located in the directory to which you extracted the
installer. 3. Invoke the checkinstall command: UNIX:
sh checkinstall.sh
Windows:
checkinstall.bat
NOTE You are asked for the Operator Username and Operator Email. This information refers to the user who is upgrading or installing and the user's email. This information is stored as a record in the installation log. 4. Verify the results. The results contain any warnings and errors and also indicate any customizations that you have made. Review the customizations and make adjustments for the upgrade as necessary.
Make Third-Party JAR Files Accessible to the Installer (On-Premise Only) Because of licensing restrictions for some third-party library JAR files (currently the jgroups-all.jar and the xinclude.jar), changes were made in how these files ship. The JAR files are shipped separately from the Clarity image in the installation media. The install.jar image does not contain the files mentioned. Any install packages for a previous version included in the install.jar also exclude the JAR files. For each release of Clarity, the JAR files are bundled into a folder on the installation media containing third-party libraries JAR file. For Release 15.x, the file is named thirdparty.libs.15.x.0.jar. Upgrade Action: Retrieve the thirdparty.libs.15.x.0.jar file from the installation media. Place the file in a location in your file system so that it is accessible to the installer. Tip: To keep the installer from prompting you for the file location, place the JAR file in the installation root directory. If you place the file in another directory, the installer prompts you for the file location.
Upgrade Large Data Sets (On-Premise Only) If your Clarity upgrade processes a large volume of data, we recommend that you override the default memory settings that are used by the upgrade. You can override the default memory settings this release. Create a memory.properties file and place it in the $cappm/ config directory. Set the desired memory values in that file. Here are the default values that the upgrade uses:
defaultScriptMaxMem=1024m defaultScriptPermGenMem=128m
Here are some sample settings in the memory.properties file:
defaultScriptMaxMem=2560m defaultScriptPermGenMem=512m

Custom Processes, Scripts, and Other Customizations
Clarity You cannot upgrade any unsupported customized content. To accommodate changing product functionality, customizations must be disabled and may need to be redesigned and re-implemented.
WARNING
After an upgrade, your customizations might result in errors or fail to work as expected unless you disable them.
Follow these steps:
1. Identify your custom content. For example, you have one or more custom processes with custom GEL scripts that modified timesheet status attributes in a previous release.
2. Acknowledge the customizations and recognize that the upgrade scripts might not support the custom content. Even if the custom content is upgraded, it may no longer work as expected. For example, your custom process references an object or attribute that has changed in the new release.
3. As an on-premise administrator, the checkinstall script provides a warning for customizations that it detects preupgrade. You can see these warnings or the referenced logs for insight into the types of customizations that can negatively impact your upgrade experience. For example:
WARNING: Possible schema customizations have been found. Any customizations to the system are the responsibility of the customer to maintain and are not supported. To upgrade, all customizations must be reviewed, changed, or removed as needed before the upgrade. After a successful upgrade, the customizations may be added back to the system. The possible customizations found are listed in the following log files:
check#logs/database_customization_triggers.txt check#logs/database_customization_indexes.txt check#logs/database_customization_tables.txt checklogs/database_customization_constraints.txt
4. As a SaaS administrator, you do not see these warnings or the referenced logs. These example messages provide insight into the types of customizations that can negatively impact your upgrade experience.
5. In on-premise or SaaS environments, turn off your customizations before the upgrade. After the upgrade, reintroduce the customizations and test them in the Classic PPM interface. Optionally, verify the impact of the customization behavior on Clarity.
6. In addition to database objects, also evaluate attribute values. Review the Oracle and Microsoft SQL database and data warehouse changes (see the Reference section in the English documentation). Validate if any of your customizations depend on any dropped, changed, or new attributes.
TIP
Some customers have experienced errors with legacy custom content. After disabling the custom process, script, or other legacy custom content, Clarity provided the functionality with no net loss to end-users. We recommend that you perform an analysis comparing the value of Clarity features in a complete COTS/SaaS solution against the value of developing your own unsupported customizations.
Pre-and-Post-Upgrade: Preserve Your File Directory Customizations (On-Premise Only)
During the upgrade, you are prompted for the target installation directory. New pre-upgrade and post-upgrade steps let you copy files to and from Clarity directory using ant-based scripting. Use ant scripts to automate preserving and restoring customization in Clarity directories.
Templates are provided in release-specific upgrade folders that are located in the installer root directory (at the same level as the install.bat file). The templates are: preprocess-upgrade.xml and postprocess-upgrade.xml.
Example of preprocess-upgrade.xml script
<project name="content" default="upgrade" basedir=".">

<target name="upgrade"> <echo>Preserving customer specified files prior to upgrade from install.dir = ${install.dir}</echo> <if fileexists="${install.dir}" not="true">
<fail>Install dir not specified = ${install.dir}</fail> </if> <delete dir="upgrade_temp"/> <mkdir dir="upgrade_temp" /> <!-- Uncomment the copy below and list the files to be included for preservation --> <!--<copy todir="upgrade_temp">
<fileset dir="${install.dir}" > <include name="myfiles/my*.*"/> <include name="abb/*01.jar"/> <include name="a*01.jar"/> </fileset>
</copy>-->
</target> </project>
Example of postprocess-upgrade.xml script
<project name="content" default="upgrade" basedir="."> <target name="upgrade"> <echo>Restoring customer specified files after upgrade to install.dir = ${install.target.dir}</echo> <if fileexists="${install.target.dir}" not="true">
<fail>Install dir not specified = ${install.target.dir}</fail> </if> <!-- Uncomment the copy task below and list the files to be restored that were preserved in the preprocess-upgrade.xml script.--> <!--<copy todir="${install.target.dir}">
<fileset dir="upgrade_temp" > <include name="myfiles/my*.*"/> <include name="abb/*01.jar"/> <include name="a*01.jar"/>
</fileset> </copy>-->
</target> </project>
Data Warehouse Changes for Reporting Below are the key changes made to the Data Warehouse to enhance the Reporting Workspace in Clarity: New Data Warehouse Configuration Setting A new configuration setting named "Include SQL Curve Data" is available in System Options under Administration in Classic PPM. New SQL Curve tables and columns are created and populated in the Data Warehouse for Reporting when enabled. This feature allows Data Providers to retrieve Per-Period Metric data from the Data Warehouse using SQL Curve functions, which are more efficient than Fact Tables.

Modified Data Warehouse Tables and Views The following Data Warehouse tables and views have been updated to improve reporting capabilities: - DWH_CMN_HIERARCHY - DWH_CMN_HIERARCHY_NODE - DWH_RPT_HIERARCHY_V - DWH_RPT_HIERARCHY_NODE_V - DWH_FIN_PLAN - DWH_INV_STATUS_REPORT SQL Curves for Enhanced Reporting Performance SQL Curves are designed to perform better when retrieving Per-Period Metric data than Fact Tables. A new configuration setting in the Data Warehouse allows users to control whether SQL Curves are enabled or disabled. New SQL Curve Functions When enabled, the following new SQL Curve functions are created to assist in Reporting: - New Common Functions: DWH_CMN_JULIAN_TO_DATE_FCT, DWH_CMN_DATE_TO_JULIAN_FCT, etc. - New SQL Curve Functions: DWH_CRV_CALENDAR_FCT, DWH_CRV_CUSTOM_CALENDAR_FCT,
DWH_CRV_SUM_DATE_FCT, etc. - New Internal Functions: For internal use only (DWH_X_CRV_CONVERT_FCT, etc.).

These functions are available to enhance data queries within Reporting and help manage time-scaled data more effectively. New SQL Curve Tables If enabled, the following new SQL Curve tables are created in the Data Warehouse: - Tables include DWH_INV_FACTS, DWH_TEAM_COST, DWH_RES_ROLE, etc. - These tables contain columns designed to store detailed SQL Curve data, such as CRV_ACTUAL_COST,
CRV_ETC_COST, CRV_TOTAL_VAR.
New SQL Curve Columns in Existing Tables Several existing Data Warehouse tables now include new SQL Curve columns to enhance data availability for Reporting: - For example, the DWH_INV_INVESTMENT table now includes columns like CRV_ACTUAL_COST,
CRV_TOTAL_COST, etc. These updates support new SQL Curve functions in queries against the Data Warehouse.

Hierarchy Changes Hierarchy-related tables and views have undergone the following changes: - Table Changes:
- Columns like MANAGERS_KEY, STAKEHOLDERS_KEY were removed from DWH_CMN_HIERARCHY as they were not populated and were placeholders.
- New columns such as OBJECT_INSTANCE_KEY were added to DWH_CMN_HIERARCHY_NODE. - View Changes:
- Changes were made to DWH_RPT_HIERARCHY_V and DWH_RPT_HIERARCHY_NODE_V to improve performance and simplify data structures for hierarchy nodes.
Financial Plan Changes The DWH_FIN_PLAN table in the Data Warehouse now includes a BUDGET_DETAIL_KEY column to link Budget Details to Cost Plan Details, providing improved financial analysis.

Status Report Changes The DWH_INV_STATUS_REPORT table now includes a new column called COP_IS_LATEST, a Boolean field indicating the latest status of an investment.

NOTE Some key points to remember are: - SQL Curves must be enabled in Classic System Options to view Per-Period Metrics in Data Providers. SQL
Curve data is populated during the Load Data Warehouse job. - Enabling the "Include SQL Curve Data" setting creates new SQL Curve tables and columns in the Data
Warehouse. Disabling this setting will remove these components. Data Warehouse Changes for Time Entry Actuals In this release, the Actuals column has been removed from the DWH_TIME_ENTRY table to maintain consistency across the product. If you previously queried this column, you must now use alternative options to retrieve time entry actuals. Impact: Queries referencing DWH_TIME_ENTRY.Actuals will fail after the upgrade. You must update queries to use one of the supported options listed below. Action Required:
- Use the DWH_TME_ENTRY_FACTS table to retrieve time entry actuals. - Enable SQL Curves in System Options (Classic PPM) to access per-period metrics from the
DWH_TIME_ENTRY.dw_actuals column. - Run the Time Slicing Sync job to populate the SQL Curve data for time entries. After running this job, execute a full
Load Data Warehouse job to ensure the curve data is available in the Data Warehouse. - Instantaneous Sync will update new actuals data from Clarity into the Data Warehouse when enabled. Reporting and Data Providers: - The Actuals field previously available in the Time Entry object data provider has been removed. - The new SQL Curve attribute Actuals is available as a per-period metric in Reporting Data Providers and in the Report
Designer. - No upgrade script is required for existing reports. Reports that used the deprecated fields will continue to function, but
you should transition to using the new Actuals metric.
Alpha and Beta Features in Clarity
ALPHA - An alpha feature that reflects functionality, which is actively under development and may contain bugs, errors, and/or other issues. It is being made available as a courtesy to allow familiarity with the feature prior to potential future release; use of this feature is entirely optional. This feature is provided "AS IS, WITH NO WARRANTIES." Broadcom does not guarantee the availability of this alpha feature, and any outages or downtime of the alpha feature will not count towards service credits pursuant to Broadcom's service level agreement. There is no guarantee, representation, or obligation that the alpha feature will ever be made generally available in future releases of the product. Material changes to the functionality may be made with or without notice prior to general availability. BETA - A beta feature that may contain bugs, errors, and/or other issues. This feature is provided "AS IS, WITH NO WARRANTIES." Broadcom does not guarantee the availability of this beta feature, and any outages or downtime of

the beta feature will not count towards service credits pursuant to Broadcom's service level agreement. There is no guarantee, representation, or obligation that the beta feature will ever be made generally available in future releases of the product. Material changes to the functionality may be made with or without notice prior to general availability. Here are the Beta Features in this release: - Global Search (Beta) - Chart Range (Beta) - Import from CSV (Beta) - Plans (Beta) - Queries (Beta) - Exporting Reports and Data Providers (Beta)
Known and Resolved Issues
This page contains the following sections: - Known Issues - Resolved Defects
Known Issues Here is the known issue in this release: DE181565: When the SQL Query Exceeds 50 Attributes, the Import to the Target System Fails. For more details, download the PDF Clarity 16.4.1 Known Issue
Resolved Defects To view the customer reported defects that are resolved in Clarity 16.4.1, see the Clarity 16.4.1 Resolved Issues list.
Third-Party Software Agreements
Clarity 16.4.1 uses third-party software in accordance with the terms and conditions for use, reproduction, and distribution as defined by the applicable license agreements. Download the Clarity 16.4.1 TPSR's to read the license agreements.
Clarity and Jaspersoft Cumulative Patch README Files
Cumulative patches for Clarity and Jaspersoft for Clarity are periodically available. Before applying a patch, see the README for important information.
TIP Although they are technically not patches, we list the Jaspersoft installers for Clarity on this page because they behave like patches for existing Clarity customers with Advanced Reporting environments. - SaaS Customers: Broadcom will deploy the same for all customers and notifications will be sent. - On-premise Customers: To install a patch or update reporting content, download the patch from Support and follow the README instructions on this page.
Release Comparison

Download the Feature Functional Comparison Report Download the Clarity 16.4.1 Feature Functional Comparison Report. Use the filter option to filter against the Module and the Release columns.
Download the Summary Report Download the Summary report for a high-level review of key features introduced in various releases. This summary is for informational purposes only. While we work tirelessly to achieve 100% accuracy, there may be instances when there is a conflict between this summary and the detailed documentation. If you see conflicting information, detailed documentation should be considered the guiding authority.
Hardware and Software Compatibility Specifications
- Hardware and Software Compatibility Specifications - Specifications: Hardware Requirements (On-Premise only) - Specifications: Application Server Operating System (OS) (On-Premise only) - Specifications: Components - Specifications: Products Included With Clarity (On-Premise only) - Specifications: JasperReports Server Operating System - Specifications: Jaspersoft Components - Specifications: Integrated Servers - Specifications: Client-Side Components - Specifications: Mobile Apps - Specifications: AI Service Providers - Specifications: Compatible Add-Ins - Specifications: Summary of Changes in Clarity - International Support
Hardware and Software Compatibility Specifications Formerly known as product architecture stack (PAS) requirements.
TIP This release supports the minimum versions of third-party software listed on this page. When the third-party software receives upgrades, there is a strong likelihood for compatibility; however, new third-party software cannot be guaranteed to remain compatible. For example, let's assume this release of Clarity supports version 1.1 of third-party software. Three weeks later, you might be able to apply 1.1.1 or 1.2 without incident; however, 1.3 and 2.0 might fail and require that you roll back to 1.2 or apply a workaround while waiting for a third-party patch.
Specifications: Hardware Requirements (On-Premise only) See Clarity Architecture and Sizing Recommendations in Installing and Upgrading.
Specifications: Application Server Operating System (OS) (On-Premise only) The following table specifies the minimum supported 64-bit operating system (OS) versions for application and background servers. Clarity is supported on any localized version of the supported operating systems. Only the patches, service packs, and updates for the specified versions are also supported.
- Certified platforms are fully tested and supported. - Compatible platforms are partially tested, tested in prior releases, or noted as a downstream compatible distribution.

Operating System Microsoft Windows Server
Red Hat Enterprise Linux 64-bit Rocky Linux

Minimum Version
Microsoft Windows Server 2022 Microsoft Windows Server 2019 8u8 9u2 8u10 (LTS)

Certified Certified Certified Compatible Certified

Support Type

Specifications: Clarity Components The following table specifies the supported components for this release of Clarity.

Virtualization(1) Database(1)

Component

Database Interface
Java Application Server(2) Report Server(3) Mail Server

Version
See Support Statement for Virtualization.
- Oracle Standard/Enterprise Edition 19c or higher patch level - Oracle 19c multi-tenant - PostgreSQL 16.4 (higher patch levels are supported but not
tested)
- Microsoft SQL Server 2022 Enterprise - Microsoft SQL Server 2019 Enterprise CU 32
Support for conversion of Clarity installations between database vendors are not provided by Broadcom. Customers performing such conversions do so at their own risk.
Tip: You might also need to upgrade to a temporary intermediary release of Claritybefore you can upgrade your database. See the sample scenarios in Upgrade Enhancements in the Change Impact and Upgrade Guide.
Microsoft SQL JDBC Driver 11.2.0.0
Oracle JDBC Driver 19.3.0.0.0
PostgreSQL Native JDBC Driver 42.7.7
Adoptium Temurin 17.0.17+10 or higher patch level
Apache Tomcat 9.0.113 (64-bit) or higher patch level (64-bit) (Certified)
JasperReports Server 9.0.0 JasperReports Server 8.1.1
Any SMTP/IMAPI/POP3 mail server can be used. Clarity does not explicitly support any one vendor.

Table Notes:Databases can be run on any vendor-supported platform. Production databases are only supported on virtualized architectures that are supported by Oracle and Microsoft product architecture stacks. Customers who use


architecture platforms that are not specified by Oracle or Microsoft have limited support. Some of the key points to remember are:
1. Clarity Support determines which problems on an unsupported platform are repeatable on a supported platform and which problems are already defined as known problems. Here are the details: a. Oracle Real Application Cluster (RAC), Oracle encryption, and multi-tenancy are supported. b. SQL Server Named Instances is supported. SQL Server Clustering is supported with manual intervention after a database failure to restart failed background processes. Microsoft SQL Server Always On mode is not supported. c. Any Microsoft SQL Server deployment that expands beyond 20,000 users must be approved. Due to Microsoft SQL Server online transaction processing (OLTP) scale limitations with products like Clarity, we recommend Oracle. d. Customers in large high-throughput environments with virtualized architectures might observe possible performance issues. For better performance in virtual environments, use RHEL or OEL.
2. Clarity is supported on any localized version of the supported application servers. 3. Clarity does not support Jaspersoft Flash charts. Jaspersoft Enterprise includes OLAP server but does not support
OLAP server. 4. You cannot use the FTP/SFTP options while scheduling a report.

Specifications: Products Included With Clarity (On-Premise only)
The following table specifies the third-party software that is licensed and shipped with Clarity. The following software is included on the Clarity Install Media, DVD Master that is available in the Support Download Center.

Java Application Server Report Server

Component

Notes Adoptium Temurin JDK for all supported operating systems. Apache Tomcat for all supported operating systems. Jaspersoft Server 9.0.0

NOTE To learn more about third-party components, select Third-Party Components.

Specifications: JasperReports Server Operating System
The following table specifies the minimum supported OS for application and background servers running the Jaspersoft report server software.
- Certified platforms are fully tested and supported. - Compatible platforms are partially tested, tested in prior releases, or noted as a downstream compatible distribution.

OS Windows Server 64-bit
Red Hat (RHEL) 64-bit Rocky Linux

Version Windows Server 2019 Windows Server 2022 2017 Standard or Datacenter 2016 Standard or Datacente 8.0 or 8.2 7u6 6u10 8u10 (LTS)

Certified Compatible Compatible Compatible Certified Compatible Compatible Compatible

Support Type


OS Oracle Enterprise Linux (OEL) 64-bit Google Chrome or Chromium

7u6 115 Onwards

Version

Compatible Compatible

Support Type

*Both are supported. We support only the listed versions and configurations of Jaspersoft integrated with Clarity.
- No other configurations, including Jaspersoft versions and configurations that are supported directly by TIBCO, are supported.
- Jaspersoft is supported on localized versions of supported operating systems. - Jaspersoft on RHEL, OEL or CentOS connecting to a Microsoft SQL Server database is not currently supported. - Future patches, service packs, and updates of the listed versions are supported; however, certain updates may no
longer be compatible. We cannot guarantee third-party compatibility for future updates. - Windows Server 2022 is supported for Jaspersoft 9.0.0.

Specifications: Jaspersoft Components
The following table lists the supported databases, Java runtime environments, application servers, report servers, and mail servers for Jaspersoft.

Database (1)

Component

Java Runtime (2) Application Server (3)
Report Server (4) Mail Server Web Browser (5)

Version
- Oracle Standard/Enterprise Edition 19c - Microsoft SQL Server 2019 Enterprise (CU-32) - Microsoft SQL Server 2017 Enterprise (CU-31) - PostgreSQL 14.4 (On-Premise and SaaS) (higher patch levels
are supported but not tested)
- Adoptium Temurin 17.0.16+8 or higher patch level
- Apache Tomcat 9.0.107 (64-bit) or higher patch level (64-bit)
JasperReports Server does not work with Apache Tomcat 9.0.67 due to Tomcat bug 66277.
- Apache Tomcat 9.0.83 (64-bit) or higher patch level (64-bit)
(Only if you have installed Clarity 16.2.0 - Patch 1)
- JasperReports Server 9.0.0 - JasperReports Server 8.1.1
- Any SMTP mail server can be used. Jaspersoft does not
explicitly support any one vendor.
- Google Chrome or Chromium 115 Onwards

Table Notes:
1. Databases can be run on any vendor-supported platform. Production databases are only supported on virtualized architectures that are supported by Oracle and Microsoft product architecture stacks. Customers who use architecture platforms that are not specified by Oracle or Microsoft will have limited support. Our Support team determines whether a problem on an unsupported platform is either reproducible on a supported platform or already defined as a known problem. a. Future patch levels might work but are not inherently supported. b. Only SQL Server Named Instances with dynamic ports are supported. SQL Server Clustering is supported with manual intervention after a database failure to restart failed background processes.
2. We recommend running the latest patch level. 3. Clarity does not support Jaspersoft flash charts. Jaspersoft Enterprise includes OLAP Server but Clarity does not
support OLAP Server.


4. You need to install Chrome or Chromium before you install Jaspersoft.


Specifications: Integrated Servers The following table specifies the supported software for servers integrating with Clarity.

Single Sign-On Server

Software

LDAP Server

Agile Applications

Version
CA Single Sign-On 12.52 SP01 CR01 CA Single Sign-On 12.51 CR05
Supports any LDAP v3 compliant directory servers such as CA Directory, Microsoft Active Directory, NetIQ eDirectory, Oracle Internet Directory, and Oracle Directory Server. (We do not support LDAP Active Directory with multiple domains.)
Rally SaaS Enterprise or Unlimited
Enterprise edition is supported only when you purchase Portfolio Manager and only with WSAPI 3.0 or higher. Integrations with onpremise editions of Rally are no longer supported.

Specifications: Client-Side Components
The following table specifies the minimum supported software for client computers accessing Clarity. All software supports 32-bit or 64-bit architectures, unless otherwise stated.

Software OS
Web Browsers

Microsoft Windows

Apple Mac OS

Desktop Linux
- Windows 10, all editions - Windows 11, all editions
- Mac OS X; Release 12.x
- Any vendor or version with
support for browsers listed
under the Web Browsers
section
- Firefox 147.0.1 or higher (2) - Safari 26.2
- Google
- Google Chrome 147.0.1 or

(21623.1.14.11.9) (7)

Chrome 141.0.3537.92 or

higher (2)
- Google

higher (2)
- Microsoft Edge
Chromium 141.0.3537.92

Chrome 141.0.3537.92 or higher (2)
- Firefox 147.0.1 or higher (2)
- Microsoft Edge

Chromium 141.0.3537.92


Software

Microsoft Windows

Apple Mac OS

Desktop Linux

Client Applications(1)
- Microsoft Windows 10,11 all - Microsoft 365 for Mac OS - Adobe Acrobat Reader 10

editions
- Microsoft Office 2022

(8)
- Microsoft 365 (Windows 10, - Adobe Acrobat Reader 10

11 and Mac) (C2R only)

(8)
- No Excel Export support - No Microsoft Project support
- Microsoft Project Online
- No Microsoft Project support - No Open Workbench

Desktop Client 2021, 2024 - No Open Workbench

support

(32 and 64-bit) Standard and support

Professional (4)
- Microsoft Office 2022 all

editions (Win)
- Microsoft Office 2022 (Mac)
- Adobe Acrobat Reader 10 or

higher
- CA Open Workbench 2.1.2

(Win)
- Jaspersoft Studio Designer

7.9

Client Reporting Tools
- Jaspersoft 7.9 with CA
JDBC Adapter
- Jaspersoft 7.9 with CA
JDBC Adapter
- Jaspersoft 7.9 with CA
JDBC Adapter

Third-party SOAP Integration - Microsoft Visual Studio 2013 - Not Applicable

Toolkits

(.NET Framework 4.5.1) or Microsoft Visual Studio 2017

(.NET Framework 4.6)
- Not Applicable

Connectors
- Microsoft Project Interface - Schedule Connect
- Not Applicable
- Not applicable

Table Notes
1. Using multiple versions of third-party software concurrently is not supported and can cause out-of-sync and compatibility issues. We support only the versions of third-party software that the vendor supports.
2. New Firefox, Chrome, and Microsoft Edge releases might be supported with minimal testing after being released. 3. CA JDBC Adapter is required for report developers to connect to the Clarity transactional or data warehouse database
without a VPN connection. 4. Microsoft Project Online browser-based version of Microsoft Project is not supported. 5. Support Type of Compatible. 6. To view reports that are exported in PDF format. 7. The following limitation applies to users of Excel Online. In a Clarity list or portlet, you cannot use the Export to Excel
(Data Only) option. Office365 and Excel Online cannot read the XLS output file. Users might see the following Excel Online error: There is something in your workbook that we don't understand. Use Export to Excel instead of Export to Excel (Data Only). If you require Export to Excel (Data Only), use the Excel client application Save As command to save the file as XLS, XLSX, or CSV and then post to OneDrive or SharePoint. Excel Online can now open the file. 8. Open Workbench is supported on Windows 10; however, mobile devices, tablets, and hybrid devices such as Surface Pro are not supported due to screen resolution constraints.
TIP
Starting with Clarity 15.4.1, web applications, integrations, browsers, OS, and network settings for access to Clarity SaaS must support TLS 1.2. All browser requirements for Clarity already meet this minimum standard. Only the currently supported browsers will be required for TLS 1.2 support.


Specifications: Mobile Apps exclusively The following table specifies the mobile operating system (OS) platforms that are supported for the following mobile apps.

Clarity Mobile App 3.3.1

Apple iOS 18.0 or higher

Google Android OS 12 or higher
- Mobile OS support is only for these named mobile apps. The robust enterprise feature-set of Clarity (Classic PPM + Clarity) does not fully support mobile operating systems. However, we are aware of some customers using some of the new features on mobile devices with limited or no support available.
- Update your mobile device to the latest supported OS. For example, your mobile tablet might support Android OS 6.0.1 while your phone supports Android OS 8.1. If a new update for iOS or Android OS is available for your device, install it to protect your device with the latest security fixes.
- Compatible for use with Clarity but not certified or supported by CA (Broadcom); this app is provided by TIBCO, makers of Jaspersoft.

Specifications: AI Service Providers
Here is the list of AI service providers.
- Google Gemini - OpenAI - Microsoft Azure

Specifications: Compatible Add-Ins The following add-ins, accelerators, and connector versions are compatible with this release:

Add-in, Accelerator, or Connector
PMO Accelerator Application Portfolio Management (APM) Add-in Agile Add-In Earned Value Manager Accelerator for PRINCE2 Accelerator for the PMBOK Accelerator for New Product Development Clarity SaaS Integration Adaptor

16.4.1 16.4.1 16.4.1 End of Life End of Life End of Life End of Life End of Life

Version

Specifications: Summary of Changes in Clarity

Server Java

Component

OS Products Included

Integrated Servers

Description
- Updated support for Adoptium Temurin 17.0.17+10 (Clarity
Only)
- No changes
- Adoptium Temurin 17.0.16+8 - PostgreSQL 14.4 for Jaspersoft - No changes


Component Mobile OS for Clarity Mobile App 3.3.1 Database Server Application Server Report Server Client Browsers
Client Applications

Description
- No Changes - Dropped support for Microsoft SQL Server 2017 - Tomcat 9.0.113
- Jaspersoft 9.0.0 - Updated support for new releases of Firefox, Edge, and
Chrome browsers
- No changes

International Support
An internationalized product is an English language product with an architecture that supports operation on local language versions of the required operating system and required third-party products, and that supports local language data for input and output. Internationalized products also support the ability to specify local language conventions for date, time, currency, and number formats. A translated product (sometimes referred to as a localized product) is an internationalized product that includes local language support for the user interface of the product and local language default settings for date, time, currency, and number formats.
The English version of Clarity is now localized in these six core languages:
- French - German - Spanish - Brazilian Portuguese - Italian - Japanese
NOTE The documentation will be available in these languages 60-75 days after the Clarity General Availability announcement of the associated release.
Jaspersoft Advanced Reporting feature is available in English, Simplified Chinese, and the six core languages and locales that are listed for Clarity.
Jaspersoft Studio is available only in English or Italian.
Clarity, Classic PPM user interface, and online help documentation are available in the following languages:

S.No 1 2 3 4 5 6 7 8 9

Language Brazilian Portuguese Catalan Czech Danish Dutch English Finnish French German

Classic PPM
yes no no no no yes no yes yes

Clarity
yes no no no no yes no yes yes

Online Help
yes no no no no yes no yes yes


S.No
10 11 12 13 14 15 16 17 18 19 20 21

Language
Hungarian Italian Japanese Korean Norwegian Polish Russian Simplified Chinese Spanish Swedish Traditional Chinese Turkish

Classic PPM
no yes yes no no no no no yes no no no

Clarity
no yes yes no no no no no yes no no no

Online Help
no yes yes no no no no no yes no no no

The localized online help is a subset of the full English documentation. No login is required to view the public portion of online help for business users. The full documentation set is only available in English and requires that users register and log in to view all content (public and restricted).

Customer-Reported Defect Resolution Policy
- Criteria Used to Assign Technical Severity to Defects - Standard Delivery Methods for Defect Resolution - Service Level Objective for Delivery of Customer Reported Defects
Broadcom's defect resolution policy applies to all actively supported Clarity releases, including on-premise or SaaS editions and secondary applications such as CA Open Workbench and the Clarity Mobile app.
This document provides a standard resolution policy for customer-reported defects. Resolutions are prioritised by assigning a relative severity and priority to each defect. This document describes the criteria for assigning severity, methods for delivering fixes, and service level objectives (SLOs).

Criteria Used to Assign Technical Severity to Defects After Broadcom Support verifies an issue, it is referred to the Clarity software development team to determine if the behaviour is a product defect. If the issue is determined to be a product defect, the issue is assigned a technical severity and reviewed to determine if and when a fix will be delivered. If a defect is to be resolved, the fix is delivered in a defined package according to its technical severity level and complexity. The technical severity levels are defined as follows:
S1: Critical A severity 1 (S1) defect pertains to a system crash, major memory leak, unrecoverable data corruption or loss, major functional deficiency without a workaround, failure of application installation or upgrade prevention of further feature testing within the same area, or items considered offensive in the software, UI, or documentation.
S2: High A severity 2 (S2) defect pertains to a major functional deficiency, recoverable data corruption or loss, documentation or error messages that could cause users to take incorrect actions, significant performance degradation, localization or


globalization issue that makes features unusable by non-English speakers, and web application security vulnerabilities through which hackers can exploit application data. Severity 2 issues may or may not have a workaround.
S3: Medium A severity 3 (S3) defect pertains to feature deficiency with a reasonable workaround, minor documentation errors, usability or accessibility issue causing minor inconvenience, non-significant performance degradation, incomplete/ incorrect un-installation of the application, or incorrect error messages.
S4: Low A severity 4 (S4) defect pertains to an issue that does not impact the application's day-to-day use, such as minor low visibility cosmetic errors or inconsistencies.
Standard Delivery Methods for Defect Resolution The delivery method for a resolved defect depends on its technical severity and the feasibility of a fix. Determination is made based on complexity, risk, and technical severity. Three methods are available for the delivery of fixes for customerreported defects. A fix for a resolved defect is delivered in the next: - release; or - service pack; or - maintenance patch (for critical issues). In some cases, a defect cannot be addressed outside of a release. Typically, product enhancements are not delivered in patches but are instead reserved for releases and service packs.
Product Releases Quality is important to us. Product releases are typically produced every twelve (12) months, and an emphasis is made on resolving customer-reported defects as part of those releases. Our main delivery mechanism for customer-reported defects is through our product release cycle. Product releases include marquee features, enhancements, and fixes for customer-reported defects. By providing fixes along with enhancements, we ensure that we deliver a high-quality, well-tested product for our customers. During a product release cycle, particular focus is given to S2 and high-impact S3 issues. A high-impact S3 defect impacts multiple customers or includes a workaround that might not be readily consumable. Broadcom will make a reasonable effort to address low-impact S3 defects even if a workaround is available. In some cases, based upon a review of the defect and the customers impacted, a determination may be made not to fix the defect. Low-severity (S4) product defects will be considered for resolution on a case-by-case basis once the issue has been confirmed as a defect. Any cases that are linked to S4 defects will be closed once the issue has been confirmed. S4 defects will be reviewed for releases only, and Broadcom will make reasonable commercial efforts to incorporate them into a given product release. Based on customer reports, area of functionality, and other considerations, we might decide that a defect will not be fixed. In this case, the customer will be notified through our standard Support process or the online community website.
Service Packs As part of our effort to continually improve customer experience, service packs will be released quarterly until the next major product release. Service packs typically include new features, enhancements to existing functionality, and fixes to customer-reported defects. Service packs follow the same methodology for including defects as product releases.

Patch Releases Patches address a specific set of critical issues that impact our customers and cannot technically wait to be delivered in the next release.
Scope If an issue is critical (S1 or High-Impact S2), the delivery of a fix for that issue may be considered for a patch. Patches will be available for the latest service pack of the current version and the previous version ("GA" and "GA - 1") of Clarity. For example, with the release of 16.4.1, we will only patch 16.3.3, which is the latest Service Pack that represents GA-1. Similarly, with the future major release of 16.4.2, we will only patch the latest service pack, 16.3.3, which would constitute GA-1, and 16.4.2, which is the latest service pack that represents GA. This approach allows us to focus on creating high-quality patches that will ensure success for our customers' implementations. Fixes that are delivered through patches will be included in future Service Packs and/or major product releases.
For On-Premise customers, we recommend upgrading to the GA version once per quarter. If customers cannot keep up with this recommended frequency, then we recommend upgrading to the XX.XX.3 service pack versions as they have the most extended supported cycle.
Exclusions Some fixes that otherwise meet the criteria for resolution in a patch may not be feasible to deliver in this way due to complexity, risk, and impact on other customers. In addition, defects in the following areas are not candidates for a patch and are reserved for releases or service packs. - Defects that require a schema change - Updates to client applications such as OWB, MSP, or Clarity Mobile Application - Defects that would require a major user interface change - Defects for integrations such as Rally (formerly known as CA Agile Central) and connectors such as Microsoft Project - Product Architecture Stack (Compatibilities) and localization changes - Custom applications built using our REST APIs - Defects for beta functionality (beta functionality is not supported in production environments)
Other areas may also fall into this no patch category.
NOTE For the GA and GA-1 releases, we will evaluate which client-side fixes are included in patches once per quarter. The standard fix criteria for risk and complexity are applied.
SaaS Customer-reported defects would be delivered via upgrades to major product releases and service packs per the SaaS upgrade schedule published here.
Cadence Broadcom determines patch release cadence.
Quality Patches are intended to resolve a specific issue or issues and will include fixes rolled up from previous patches (patches are cumulative). All patches go through QA testing, but the scope of testing is limited only to:
- Verification of the specific fix resolved in the patch - Regression and integration test coverage limited only to the impacted product areas Broadcom does not perform full regression and performance tests on each patch. Patches are cumulative, however, if there is enough content to warrant full regression and performance testing, or there is a specific defect that warrants special testing, we will conduct additional testing as appropriate. Extended QA validation includes regression testing, performance testing, and selective PAS testing as needed. Any patch that has been performance and regression tested will be noted in the patch README.
Customers should be aware that a software patch could potentially have unintended adverse consequences with respect to the performance or functionality of the software in the customer environment.
Customers should not apply software patches directly to production systems without first verifying them in a test environment that represents their production system in terms of configuration and data volumes.
Third-Party Product Defects For products like Microsoft Project (MSP), we perform high-level tests on newly released updates once every two months with the best effort goal to test monthly. Based on these tests' outcomes, we may or may not recommend a certain update level be applied for use with the application.
If we encounter a defect in the MSP update which impacts our integration and does not deliver a quality experience for our customers, we will neither recommend nor support that update level for use with the released product. We will provide an updated list of supported MSP updates on the Broadcom Support website.
For Jaspersoft, patch dates are more prone to variance due to many factors; however, we generally plan for a quarterly patch cadence.
Service Level Objective for Delivery of Customer Reported Defects Defects fixed as part of a patch will also be included in the next available upcoming release or service pack. Details will be published as part of the Release Notes for a given version, including the included patch-level fixes. The delivery method varies by severity: - S1: patch - S2: patch or product release - S3: future product release or closed - S4: possible future product release or closed
Accessibility
Broadcom is committed to ensuring all customers can successfully use its products and supporting documentation to accomplish business tasks. Classic PPM provides standard user assistance features. The software also selectively inherits the accessibility features of the operating system, browser, and device that you are using. When screen reader and text magnification software is used with the Mozilla Firefox browser, the Classic PPM user interface in Release 15.5.1 and higher is generally considered compliant in meeting the majority of the Clarity VPAT guidelines for Section 508 compliance. At this time, based on feedback from our user community, the Microsoft Edge browser is not recommended due to compatibility issues with third-party assistance technologies such as ZoomText and JAWS.
The following section provide more information about the accessibility features in Classic PPM and Clarity: - Accessibility Features in Classic PPM - Accessibility Features in Clarity
Accessibility Features in Clarity

The Clarity product team is committed to ensuring support for the WCAG 2.1 AA standard. From release 15.9.1, Accessibility enhancements will be released incrementally to help organizations increase adoption and help users with accessibility requirements to experience Clarity seamlessly. The following table lists the accessibility improvements addressed in this release:

What is it about? Visual design Responsive design Keyboard navigation
Screen reader support

Who is it for?

What's the change?

Users with color blindness

Color contrast and visible focus

Users with limited vision or partial blindness Popup windows, text areas, and the browser zoom

Users with mobility impairments

Key input, tab order, focus
Note: Screen Reader keyboard shortcut key combinations are not supported in this release

Users with partial or complete blindness Semantics, hierarchy, page structure

IMPORTANT To learn more about Clarity accessibility compliance, download the VPAT Report for Clarity, which indicates conformance with:
- Section 508 - the main accessibility act for the US - WCAG 2.0, 2.1 AND 2.2, levels A and AA success criteria - EN 301549 Standards, which is the European Standard for Digital Accessibility, and - European Accessibility Act (EAA) (Directive (EU) 2019/882)
This page lists the accessibility features supported in Clarity. For information on accessibility features supported in Classic PPM, see Accessibility Features in Classic PPM.

Getting Started with Accessibility in Clarity
This page covers the following topics:
- Supported Platforms - Supported Components - Color Consolidation and Mapping - Changes to the Visual Design
Supported Platforms
Operating System: Windows
Browsers: Chrome, Firefox, Edge
Screen Reader: JAWS, NonVisual Desktop Access (NVDA)
IMPORTANT Clarity's grids contain significant functional density and do not incorporate semantic elements required for screen reader shortcuts. When using screen readers with My Timesheet or configurable grids, users should consider leveraging Clarity's supported grid keyboard shortcuts. To learn more, see Keyboard Shortcuts for Clarity Grid Navigation.


Supported Components
The following components support 4 aspects of accessibility - visual, responsive design, keyboard navigation, and screen reader support:
- Text Box - Text Area - Single-Value Lookup - Multi-Value Lookup - Check Box * - Radio Group - Date Picker - Button - File Attachment * - Color Picker Component * - Main Left Navigation Menu - View Options
- Money and Number decimal display - Per-Period Metrics - Periods - Start Period - End Period - Totals Columns - Saved Views - Item Action Bar (multi-select grid) - Select All, Deselect All, Edit, Mark for Deletion, Clear Deletion - Color Picker - Pick List Color - Toast Message - Generic Filter - Layout Switch (Board, Grid, Timeline) - Attachment (Grid) - Search
NOTE * In limited instances, these components may not meet color contrast, keyboard, or screen reader accessibility. This limitation will be addressed in a future release. For example, the Color Picker meets color contrast requirements but it will be updated in a future release to use the single-value lookup component to support keyboard navigation and screen reader.
Color Consolidation and Mapping
Clarity is introducing a new color palette to improve the overall visual experience for all users including those with accessibility requirements. In previous releases, different sets of color palettes were used for the following elements:
- Project banner and Documents tags - Custom picklists - Classic display - Sequential colors
As part of the upgrade, the previously selected colors are mapped to the new colors and are automatically updated. The following screenshots compare colors used in older releases to the new color palette::


Color Mapping for Project Banner and Document Tags


Color Mapping for Custom Picklists

Color Mapping for Classic Display

Color Mapping for Sequential Colors Sequential colors represent those that are sequentially applied by the system(for example, per-period metrics in a grid view). The sequence maximizes the visual difference between adjacent colors.

Changes to the Visual Design The following sections include images that indicate changes to the design and appearance of the supported components to meet the visual design aspect.
- Text Box and Text Area Component - Single-Value Lookup Component - Multi-Value Lookup Component - Check Box Component - Radio Group Component - Date Picker Component - Button Component - File Attachment Component - Color Picker Component - Main Left Navigation Menu Text Box and Text Area Component
Single-Value Lookup Component

Clarity - 16.4.1 111


Multi-Value Component Checkbox and Radio Button Components


Date Picker Component


Button Component


File Attachment Component Color Picker Component


Color Picker - Custom Picklist Main Menu Navigation


Clarity 16.4.1: Accessibility and Usability Improvements
Accessibility Enhancements
- Accessibility Remediation: This release addresses multiple issues reported by customers and findings from the May 2024 (Clarity 16.2.2) accessibility audit. Updates were made to ensure compliance with various WCAG success criteria, enhancing accessibility for all users.
- Increased Compliance for User Adoption: Accessibility improvements drive adoption by meeting organizations' demands for compliance with accessibility standards, ensuring users have appropriate tools to view and access company-specific information.
Supported Accessibility Combinations

Operating System Windows MacOS

Browser Chrome, Firefox, and Edge Safari, Chrome

Screen Reader JAWS and NVDA VoiceOver

NOTICE The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users.

Accessibility - 16.4.1 Remediation Details

WCAG (Level) 1.3.1 (A) 1.3.1 (A) 1.3.1 (A) 1.3.1 (A) 1.3.1 (A) 2.4.3 (A) 2.5.3 (A)
4.1.2 (A)

Issue Description

Impact Area

Remediation

Certain ARIA roles must contain children.

Timesheets (grid)

Resolved following an AG-GRID upgrade:
The role was changed from 'list box' to 'presentation', this newly assigned role need not contain children.

Text should not be marked as a heading.

Project Milestone Timeline

Corrected the issue to enable the screen reader to properly announce each milestone Name and Date as a element of a (Milestone Timeline) Group.

Unnecessary table structure is defined for the 'https....' link.

Saved Views - Copy Link

Removed the unnecessary table structure which impedes accessibility for users, particularly those reliant on assistive technologies like screen readers.

Empty table header (for Copy Link, Saved Views - Share, and Delete actions) is defined Manage Views in the table.

Updated the impacted area to the current architectural componentry, removing the empty table header to properly support screen reader announcement.

'To' combo box doesn't use associated label.

Grid - Conditional Formatting

Correct field name announced by the screen reader when focus lands on the 'To' combo box.

Keyboard navigation was not operating as expected within the column header hamburger menu.

Grid column menu options

Corrected the issue so that keyboard navigation operates as expected within the column header hamburger menu.

Visual text is not included for the

Saved Views - Copy - Updated the visible text to include the

'Copy link' control programmatically. Link

programmatic name for 'Copy link' by using

aria-label="Copy link".
- This improves the user experience because the

labels accounced by the screen reader match

the visible text labels on the screen.

Elements must only use supported ARIA attributes.

Grid columns rows - Corrected the issue related to the row-level check

check box

box cell 'state' of checked or unchecked to ensure

it is correctly announced by the screen reader.


WCAG (Level) 4.1.2 (A) 4.1.2 (A)
4.1.2 (A) 4.1.2 (A) 4.1.2 (A) 4.1.2 (A) 4.1.2 (A) 4.1.2 (A) 4.1.3 (AA)

Issue Description

Impact Area

Remediation

Role is not defined for the checkboxes e.g., 'Starred' in the table. Required ARIA attributes must be provided.
ARIA attributes must conform to valid values. Role is not defined for the 'Format' control. Incorrect name is defined for the expand / collapse button.

Grid columns rows - Corrected the issue related to the row-level check

Starred

box cell 'state' of starred or not starred to ensure it

is correctly announced by the screen reader.

Common Drop-down menu shared across multiple pages

Corrected the issue by applying missing yet required ARIA attribute 'aria-controls' to support screen reader announcement in the following areas:
- Investment workspace > Tile groups >
Configure > Color dropdown
- Roadmap > Item Actions > Configure Sync
Schedule > Days; Time dropdown
- Reporting workspace > Report Designer > Unit
of Measure dropdown
- Reporting workspace > Report Viewer > Report
scheduling dropdown
- Reporting workspace > Report Viewer > Period
Carousel dropdown
- Reporting workspace > Report Designer >
Saved Filters dropdown
- Staffing workspace > Scenario and Compare To
dropdown
- Administration workspace > Vaia > Searchable
dropdown
- All pages > Configurable filtering > Filter
dropdown

Avatar - Settings

Corrected the issue by replacing invalid ARIA attribute value: aria-posinset="0" to valid ARIA attribute value: aria-posinset="1"

Grid - Conditional Formatting

Corrected the issue ensuring Format options (e.g., Bold, Italics, Underline, etc...) are properly announced by the screen reader.

Grid - Conditional Formatting
- Corrected the issue ensuring the name
announced when focus is established on the
'expand/collapse' button.
- Screen reader correctly announced as 'Expand
button' or 'Collapse button' based on the button
'state'.

The Filters button does not convey its expanded/collapsed state to screen reader users.
Focus is lost when a user collapses the Actions dropdown.
The selected or pressed state of the 'Match Filters' All or Any toggle button is not conveyed to screen reader users.
Status message not automatically announced.

Custom Objects - Filters

Corrected the issue ensuring the Filters button expanded or collapsed state is properly announced to screen reader users.

Custom Objects Properties

Keyboard focus returns to the Actions dropdown when a user closes it using the Escape key.

Custom Objects - Filters
- Correct name announced when focus is
established on the 'Match Filters' All or Any
toggle button.
- Screen reader correctly announces All or Any
toggle button as selected.

Grid - View Options Corrected the issue whereby visually displayed
- Nested Grid option status message is also announced by the screen

enabled

reader automatically.


WCAG (Level) 4.1.3 (AA)

Issue Description
Status message not automatically announced.

4.1.3 (AA)

Status message not automatically announced.

Impact Area

Remediation

Grid column menu options - Filter
Investment Properties - Lookup fields

Corrected the issue whereby visually displayed status message is also announced by the screen reader automatically.
Corrected the issue whereby visually displayed status message is also announced by the screen reader automatically.

Clarity 16.4.0: Accessibility and Usability Improvements
Accessibility Enhancements
- Accessibility Remediation: This release addresses multiple issues reported by customers and findings from the May 2024 (Clarity 16.2.2) accessibility audit. Updates were made to ensure compliance with various WCAG success criteria, enhancing accessibility for all users.
- Increased Compliance for User Adoption: Accessibility improvements drive adoption by meeting organizations' demands for compliance with accessibility standards, ensuring users have appropriate tools to view and access company-specific information.
Supported Accessibility Combinations

Operating System Windows MacOS

Browser Chrome, Firefox, and Edge Safari, Chrome

Screen Reader JAWS and NVDA VoiceOver

NOTICE The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users.


Accessibility - 16.4.0 Remediation Details


WCAG (Level) 2.4.3 (A)
2.4.3 (A) 2.4.6 (AA) 3.3.1 (A)
4.1.2 (A)

Issue Description

Impact Area

Remediation
- While navigating the card

Hierarchy or Board

attribute list items, the keyboard Card configuration

user could not input search

criteria and filter the list.
- In addition, the keyboard user

cannot return to the search field,

from while navigating the card

attribute list using a standard

keyboard pattern.

Implemented the following solution within the Card configuration attribute listing:
- With focus on the 'Search' field, select the
down arrow to move focus to the first list item, pressing any alphanumeric key will apply the selected alphanumeric key into the 'Search' field and simultaneously filter the list.
- Press the down arrow again, to navigate further
down the filtered list, pressing an alphanumeric key will append the search criteria and filter the list again.
- Use the down arrow to continue navigating
the attribute list and use SHIFT+Tab to return the keyboard user to the Search box to insert additional alphanumeric keys as needed.

Keyboard navigation and screen

Grid column rows

reader output is not operating as

expected within the grid column rows

and their configured or available

icons such as Required (asterisk);

Locked (lock); Secured (shield); and

Tooltip (caption bubble).

Corrected the issue so that keyboard navigation and screen reader output operates as expected within the grid column rows and their configured or available icons.

From within the column panel, code Grid column panel snippets are incorrectly displayed and announced by the screen reader when column names are marked as Required (asterisk) or Secured (shield).

Keyboard user was not properly informed to the fact that there were no additional or available card locations to accept the selected attribute.

Hierarchy or Board Card configuration

Corrected the issue so that Required and Secured columns are displayed and announced by the screen reader without any code snippets.
- Keyboard user are properly informed that there
are no additional or available card locations to accept a new attribute.
- The error messages are now context aware:
1. If the case the selected datatype does not match, a message: '{{label}}, unable to move, datatype does not match' is displayed.
2. If the case where no location is available, a message: '{{label}}, unable to move, no empty locations'Notify.error('translated message') is displayed.

The "Actions" and "Add Filter" buttons do not reflect whether the menu is expanded or collapsed.

Page-level actions, Corrected the issue where the elements maintain Configurable Filtering aria-expanded attributes, which were set to
"undefined." These attributes have been updated to dynamically set to "true"/"false" depending on the menu's state.


WCAG (Level) 4.1.2 (A)
4.1.2 (A)

Issue Description

Impact Area
- The link lists within the

Links Module

accordion elements are not

programmatically marked as

such.
- Currently the Links are a 'list of

dom nodes' which does convey a

list of items to the screen reader

user.
- The Financial Module 2-level

Financial Module

tab widgets (Cost Plans,

Budgets, Benefit Plans, Actual

Transactions) were missing the

selected attribute.
- When the user navigates through

the left / right arrow keys and

focuses on the tab widgets, the

selected state is conveyed for

each tab widget.
- Due to this, the currently selected

tab widget in the tab list is not

conveyed appropriately for the

screen reader user.

Remediation
- These have been converted to use unordered
list (ul) elements and list items (li) for screen reader usability. The Screen reader will now announce 'List of items' when focus is established on the first menu item.
- Updated the underlying Links component to
indicate ul and li elements are applied.
Corrected the issue by applying the aria-selected attribute with the following four ARIA roles: gridcell, option, row, tab for the Financial Module 2-level tab widgets for Cost Plans, Budgets, Benefit Plans, Actual Transactions.

Clarity 16.3.2 was evaluated against WCAG 2.0, 2.1, and 2.2 - level A, AA
The current Clarity VPAT, based on Clarity 16.2.2, includes evaluation against WCAG 2.0, 2.1 and 2.2
There are (6) new criteria in WCAG 2.2:
- 3.2.6 Consistent Help (Level A 2.2 only) - 3.3.7 Redundant Entry (Level A 2.2 only) - 2.4.11 Focus Not Obscured (Minimum) (Level AA 2.2 only) - 2.5.7 Dragging Movements (Level AA 2.2 only) - 2.5.8 Target Size (Minimum) (Level AA 2.2 only) - 3.3.8 Accessible Authentication (Minimum) (Level AA 2.2 only)
NOTE Clarity was evaluated 16.3.2 against WCAG 2.0, 2.1, 2.2, EN 301 549, US Section 508, and the European Accessibility Act (EAA) (Directive (EU) 2019/882)
- EN 301 549 still calls for WCAG 2.1 Level A/AA, and US Section 508 is still referencing WCAG 2.0 Level A and AA

Clarity 16.3.3: Accessibility Improvements
Accessibility Improvements:
- Accessibility Remediation: This release addresses multiple issues reported by customers and findings from the May 2024 accessibility audit. Updates were made to ensure compliance with various WCAG success criteria, enhancing accessibility for all users.
- Increased Compliance for User Adoption: Accessibility improvements drive adoption by meeting organizations' demands for compliance with accessibility standards, ensuring users have appropriate tools to view and access company-specific information.


From an accessibility perspective, the combinations below are the supported platforms for Clarity (release 16.3.2 and higher):

Operating System Windows MacOS

Browser Chrome, Firefox, and Edge Safari, Chrome

Screen Reader JAWS and NVDA VoiceOver

NOTICE The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users.

Accessibility - 16.3.3 Remediation Details

WCAG 1.3.1 (A) 1.3.1 (A) 1.3.1 (A)
1.4.1 (A)
1.4.4 (AA) 2.4.3 (A) 2.4.6 (AA) 2.5.8 (AA)

Issue Description

Impact Area

Content should be in a data table but is Date picker not

Visual heading text is not marked as heading

Custom Investments - Tiles Page

Keyboard navigation functions as expected. However, the screen reader announces the tab name but does not indicate the total number of tabs or the current tab's position within the set

Details Fly-Out

Color alone is used to identify error(s) Properties - Date Picker

Content is lost at 200% zoom

Details Fly-Out View Options panel

Keyboard navigation is not functioning as expected within the column header hamburger menu

Grid column menu options

Controls have same name but different Properties - Date Picker actions

All touch targets must be 24px large, or Date Picker leave sufficient space

Remediation
Corrected rendering of days, months, years using gridcell, rowgroup, row roles respectively.
Updated the headings on the Custom Investment Tiles page visual heading text to be marked as `heading'.
Corrected the issue for the screen reader to properly announce the tab name and indicate the total number of tabs or the current tab's position within the set. For example, the screen reader can now specify the tab name and the tab position "1 of 12."
In addition to color, an update was applied to the visual display and screen reader to support announcing 'invalid date format' error message. The field name is intentionally not included in the Aria label.
Corrected the issue so that the fly-out and View Options panels remain readable and functional when the browser zoom is set to 200% of its default size.
Corrected the issue so that keyboard navigation functions as expected within the column header hamburger menu.
Updated the calendar icon button label so the screen reader can announce unique actions (e.g., Start or Finish).
Corrected the issue by changing the calendar icon button width from 21px to 24px.


WCAG 3.3.1 (A) 4.1.2 (A) 4.1.2 (A)
4.1.2 (A) 4.1.2 (A) 4.1.3 (AA) 4.1.3 (AA)

Issue Description

Impact Area

Remediation

Form field with error not identified

Properties - Date Picker

Updated the visual display and screen reader to support announcing 'invalid date format' error message. The field name is intentionally not included in the Aria label.

Elements must only use supported ARIA attributes

Custom Investments - Tiles Page

Corrected the issue by removing unsupported aria attributes (e.g., ariaposinset="1" and aria-setsize="4"),

Screen readers (e.g. NVDA, JAWS) could not detect or announce the notification panel label per the defined by aria-label

Notifications panel (Bell icon) Corrected the issue so that when the user enters the notification panel, the screen reader announces: 'To Delete Any Notification, Press delete or backspace key' for each entry in the panel.

The alternative texts and

Date Picker

programmatically stored texts within the

date-picker widget are in English

Corrected the issue so that the alternative text adapts to the primary language of the application.

Some of the extension buttons in the areas display English alternative text

My Workspace

Corrected the issue so that the alternative text adapts to the primary language of the application.

Status message not automatically announced

Properties - Date Picker

Updated the visual display and screen reader to support announcing 'invalid date format' error message. The field name is intentionally not included in the Aria label.

Status message are not automatically Toast Message banners announced

Corrected the issue so that all Toast messages (banners) are announced by the Screen Reader.

Clarity 16.3.2 was evaluated against WCAG 2.0, 2.1, and 2.2 - level A, AA
The current Clarity VPAT, based on Clarity 16.2.2, includes evaluation against WCAG 2.0, 2.1 and 2.2
There are (6) new criteria in WCAG 2.2:
- 3.2.6 Consistent Help (Level A 2.2 only) - 3.3.7 Redundant Entry (Level A 2.2 only) - 2.4.11 Focus Not Obscured (Minimum) (Level AA 2.2 only) - 2.5.7 Dragging Movements (Level AA 2.2 only) - 2.5.8 Target Size (Minimum) (Level AA 2.2 only) - 3.3.8 Accessible Authentication (Minimum) (Level AA 2.2 only)
NOTE Clarity was evaluated 16.3.2 against WCAG 2.0, 2.1, 2.2, EN 301 549, US Section 508, and the European Accessibility Act (EAA) (Directive (EU) 2019/882)
- EN 301 549 still calls for WCAG 2.1 Level A/AA, and US Section 508 is still referencing WCAG 2.0 Level A and AA

Clarity 16.3.2: Accessibility Improvements
Accessibility Improvements:
- Accessibility Remediation: This release addresses multiple issues reported by customers and findings from the May 2024 accessibility audit. Updates were made to ensure compliance with various WCAG success criteria, enhancing accessibility for all users.
- Increased Compliance for User Adoption: Accessibility improvements drive adoption by meeting organizations' demands for compliance with accessibility standards, ensuring users have appropriate tools to view and access company-specific information.
From an accessibility perspective, the combinations below are the supported platforms for Clarity (release 16.1.3 and higher):
- Operating System: Windows - Browser: Chrome, Firefox, and Edge - Screen Reader: JAWS and NVDA
NOTICE The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users.

Accessibility - 16.3.2 Remediation Details

WCAG 1.3.1 (A)

Issue Description
Certain ARIA roles must be contained by particular parents

Impact Area My Timesheet

1.3.2 (A)

Hidden content is readable with a screen reader

Action Bar - Show/Hide Widgets Button

2.1.1 (A)
2.1.1 (A) 4.1.2 (A) 4.1.2 (A)

As a keyboard user, when selecting the Notes menu item from the 3-dot action menu, the page takes over 30 seconds to display

My Timesheet - Notes

As a keyboard user, using the Tab key My Timesheet resulted in inconsistent navigation.

Elements must only use supported ARIA attributes

Timesheets - Modules

Elements must only use supported ARIA attributes

Timesheets - Column Filtering

4.1.2 (A)

ARIA roles used must conform to valid My Timesheet values

Remediation
The parent element lacked a valid ARIA role to contain a child element with role="gridcell". The structure has been updated to ensure compliance.
Corrected the issue so that content meant to be hidden from all users, such as error messages or hidden submenus or dialogs or alerts, is still not available to screen reader users.
Corrected the issue so that the keyboard user, after selecting the Notes menu item from the 3-dot action menu, is presented with the page in the same amount of time as a mouse user.
Corrected the issue for the keyboard user, using the Tab key to follow the designed Tab-stop pattern
Corrected the issue by applying supported aria attributes to the Timesheet modules tabs (e.g., My Timesheet, Review and Approve, and Timesheet)
Corrected the issue by applying the aria attribute of 'role=button' to the button visible in the grid column header, indicating filtering is in use for the column attribute and is selectable.
An element was incorrectly using role="undefined", which is invalid. The structure has been corrected to role="cell", which is appropriate for the context.


WCAG 4.1.2 (A)
4.1.2.a (A) 4.1.3. (AA) 3.3.2 (AA)


Issue Description

Impact Area

Screen Reader announces single letters, for previous and next time period, which appear completely random
Screen Reader does not announce the Time Period component in page Read Mode
The status message is not automatically announced

My Timesheet - Period Carousel
My Timesheet
My Timesheet - Input Type Code

The Input Type code is not associated with the Investment Name and Task Name

My Timesheet - Input Type Code & Charge Code fields

Remediation
Updated the aria labels to enable the Screen reader to announce both the next and previous period selected for the current time period complete date
Corrected the issue enabling the Screen Reader to announce the Time Period component in page Read Mode.
Corrected the issue so that the Input Type Code status message is automatically announced by the screen reader.
- Updated horizontal (left/right) keyboard
navigation whereby the screen reader will announce only the column header information (including the Totals like it does now)
- Updated vertical (up/down) keyboard
navigation whereby the screen reader will announce only row header content Example: Investment Name, Investment ID, Task name, ID, PLUS configured columns Input Type Code and Charge code

Clarity 16.3.0: Usability and Accessibility Improvements

Usability and Adoption
Usability Enhancements:
Reduce whitespace consumed in the Widgets tray:
- Optimized Widget Tray Space: To save space, the user experience to `Manage Widgets' was changed by removing a dedicated row.
- Widget Size Reduction: The size of a Widget was incrementally reduced to save space. - Whitespace Optimization: Incremental improvements to whitespace usage in various page-level components (e.g.,
Widgets, Filters, Page Header, Action Bar) provide more usable space, enhancing the user's focus on main content areas like Timeline, Grid, and Board.
Accessibility Improvements:
- Accessibility Remediation: This release addresses multiple issues reported by customers and findings from the May 2023 accessibility audit. Updates were made to ensure compliance with various WCAG success criteria, enhancing accessibility for all users.
- Increased Compliance for User Adoption: : Accessibility improvements drive adoption by meeting organizations' demands for compliance with accessibility standards, ensuring users have appropriate tools to view and access company-specific information.
From an accessibility perspective, the combinations below are the supported platforms for Clarity (release 16.1.3 and higher):
- Operating System: Windows - Browser: Chrome, Firefox, and Edge - Screen Reader: JAWS and NVDA


NOTICE The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users. Here are the updates in this release: - Reduced Whitespace in Widgets Tray Through Streamlined User Controls - Enhanced Keyboard Navigation and Improved Time Entry Cell Interactions - Accessibility - 16.3.0 Remediation Details Reduced Whitespace in Widgets Tray Through Streamlined User Controls
Enhanced Keyboard Navigation and Improved Time Entry Cell Interactions Clarity 16.3.0 introduces enhanced keyboard navigation and improved time entry cell interactions to support accessibility and meet WCAG standards. 1. Keyboard Navigation
- Press Tab to move through interactive elements on the page. - When focus reaches the time entries table, use the arrow keys to move between cells.
NOTICE Screen readers will announce relevant information as you navigate.

2. Interact with Time Entry Cells Time entry cells now support two modes: - Read Mode: Default mode when the grid loads. - Edit Mode: Activate by double-clicking, pressing Enter, or starting to type a number. The following are the Keyboard Controls used in Edit Mode: - Press Tab to move to the next editable cell across rows. - Use the arrow keys to move between characters within the current cell. NOTE Click outside the table to return to read mode.


Accessibility - 16.3.0 Remediation Details


WCAG

Issue Description

Impact Area

Remediation

1.3.1.a (A) Certain ARIA roles must contain My Timesheet Corrected the issue to ensure that all elements with a WAI-ARIA role

children

include the required child roles.

1.4.13.a (AA)

Additional content not dismissible

My Timesheet - -

Corrected the issue to allow the user to dismiss the 3-dot 'Actions' menu tooltip without having to move the mouse pointer from the tooltip.
Corrected the issue to allow the user to dismiss the Prior Period and Next Period button tooltip without having to move the mouse pointer from the tooltip.

1.4.13.a (AA)

Grid column resizing capability is not keyboard accessible

My Timesheet - - -

Resolved following AG-GRID upgrade. Grid column resizing is now supported via keyboard. Windows: Shift + <-- or -->; Mac: Option + <-- or -->

2.4.3 (A)

User cannot use Shift + Tab to

My Timesheet Corrected the issue enabling users to return to the left navigation

navigate to the left navigation

menu with focus on the My Timesheet module. (This issue impacts all

menu from My Timesheets module

workspace navigation)

3.3.2 (A)

The input type code is not associated with the Investment and task name

My Timesheet Updated the aria-describedby attribute and added association for input type code.

4.1.2.a (A) Button: Button does not have a role

My Timesheet - -

Corrected the issue enabling the screen reader to announce the Time Period component.
Corrected the issue enabling the screen reader to announce the Time Entry component.

4.1.2.a (A) The screen reader does not announce the Investment name when the Investment expand / collapse button is activated

My Timesheet Updated the aria-label; associate the Investment name with the Investment expand / collapse button (e.g., aria-label="Access Controls
Provisioning (9232) Press enter to collapse the Investment")

4.1.2.a (A) The Task ID is not associated with My Timesheet Updated the aria-label to include the Task ID (e.g. aria-

the Task Name link

label="Investment Name Access Controls Provisioning Open task

Audit (z_2301)").

4.1.2.a (A) Screen Reader does not announce My Timesheet Corrected the issue enabling the Screen Reader to announce the

the Time Period component on

Time Period component in page Read Mode.

page Read Mode

4.1.2.a (A) Screen Reader does not announce My Timesheet Corrected the issue enabling the Screen Reader to announce a Time

a Time Entry cell as interactive

Entry cell as interactive (editable).

(editable)

4.1.2.b (A) Elements must only use permitted My Timesheet Corrected the issue by using a valid Aria Row label. ARIA attributes

4.1.2.b (A) Ensure all elements with a Role attribute use a valid value

All pop-over Corrected the issue by using a valid Aria Role value. items

4.1.2.b (A) Aria describeby and labelby updatesProperties module

Corrected the issue where several elements on the page have been given an aria- describedby attribute that references a non-existent ID.

Clarity 16.2.3: Usability and Accessibility Improvements

Usability and Adoption From a usability perspective, the following updates are in this release:
- Users can now remove a column from the grid by dragging and dropping it with the mouse. - The user experience for the non-searchable drop-down component has been enhanced to automatically adjust its
horizontal size based on its content. From an accessibility perspective, the following remediations are included in this release: - This release remediates numerous customer-reported issues and findings from the May 2023 accessibility audit that
impact multiple WCAG success criteria. - Accessibility improvements are needed to drive adoption because organizations demand compliance with accessibility
standards to ensure their users have the proper tools to view and access company-specific details. From an accessibility perspective, the combinations below are the supported platforms for Clarity (release 16.1.3 and higher): - Operating System: Windows - Browser: Chrome, Firefox, and Edge - Screen Reader: JAWS and NVDA
NOTICE The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users. REMEMBER NVDA does not read the colon (:) while JAWS reads it. Here are the updates in this release: - Auto-Sizing Non-Searchable Drop-Downs for Improved Usability - Drag and Drop to Remove Columns from Grid - Accessibility - 16.2.3 Remediation Details Auto-Sizing Non-Searchable Drop-Downs for Improved Usability Previously, non-searchable dropdown components in Clarity did not auto-size based on content, leading to inconsistent user experience. With the Clarity 16.2.3 release, non-searchable dropdowns will now automatically expand (horizontal width) to fit their content, matching the behavior of searchable dropdowns.

To support this enhancement: - The non-searchable dropdown component has been updated to auto-size based on its content, ensuring full visibility
without requiring mouse hover. - This update applies to various pages, including Actions dropdowns in Investment lists, Properties pages, Timeline
views, and other non-searchable Action menus across Clarity.
Drag and Drop to Remove Columns from Grid With the Clarity 16.2.3 release, you can use the drag-and-drop functionality to remove columns from the Grid view. The Columns panel automatically updates when columns are removed.

REMEMBER Some of the key points to remember related to drag-and-drop functionality to remove columns are: - It can also be used in hierarchical nest grids. - It doesn't work in Bulk Edit and Staffing workspace. To learn more, see Edit Data in Grids.

Accessibility - 16.2.3 Remediation Details

WCAG

Issue Description

2.1.1.a (A) 2.1.1.a (A)

The "Delete" control is not keyboard-only reachable and operable
Scrollable region must have keyboard access (multiple remediations)

Impact Area Conversation module
Timesheets Tab

Remediation
Corrected the issue so that the "Delete(X)" control is reachable and operable for keyboardonly users.
- Resolved following AG-GRID upgrade. - Scrollable region has keyboard access.


WCAG

Issue Description

2.1.1.a (A) Grid column resizing capability is not keyboard accessible

Impact Area All grid views

3.3.2.a (A) Label is not persistent

Column Panel

4.1.2.a (A) The pressed state of a button is not Action Menu conveyed to screen reader users

4.1.2.a (A) Screen reader incorrectly announces Task page Actions menu items as "Clickable"

Tasks Actions button

4.1.2.a (A) The expand/collapse state of a Column Header menu button is missing or is used incorrectly.

Column Header menu button

Remediation
- Resolved following AG-GRID upgrade. - Grid column resizing is now supported by
the keyboard.
- Windows: Shift +  or ; Mac:
Option +  or
- Resolved following AG-GRID upgrade. - Corrected the issue so that the "Search..."
text remains visible and the label is programmatically associated with the form fields via the expected ARIA attributes.
Corrected the issue to ensure the `Timeline, Board, and Grid' buttons are using the correct aria-pressed attribute to convey a pressed or unpressed state.
- Corrected the issue by wrapping the options
container as a menu(role="menu") and each item (e.g., "PPM Gantt") as a menu-item (role="menuitem").
- Also, provided aria-has popup="menu" to the
"Actions" button
- Confirmed the Column Header menu button
(a.k.a. hamburger menu) is not a collapse/ expand button; rather, it is a button to invoke a popup menu.
- No remediation is required.

Clarity 16.2.2: Usability and Accessibility Improvements

Usability and Adoption
From a usability perspective, the following updates are in this release:
- Updated user experience for the Auto-Suggest drop-down to include visible column header labels - With visible column headings included, end users can easily ascertain the meaning of the displayed data. - The new visible header labels expose necessary information and will help remove potential barriers associated with customer adoption. - Improve Timesheets usability by relieving multiple user pain points. All or most of the delivered enhancements are direct customer requests.
From an accessibility perspective, the following remediations are included in this release:
- My Timesheets has undergone an architectural update to improve the overall user experience for keyboard and screen reader users.
- This release remediates numerous customer-reported issues and findings from the May 2023 accessibility audit that impact multiple WCAG success criteria.
- Accessibility improvements are needed to drive adoption because organizations demand compliance with accessibility standards to ensure their users have the proper tools to view and access company-specific details.
The Clarity product team has determined the combinations below are the supported platforms from an accessibility perspective:
- Operating System: Windows - Browser: Chrome, Firefox, and Edge - Screen Reader: JAWS and NVDA The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users. Here are the updates in this release: - Auto-suggest Column Header Labels - Improved My Timesheet Accessibility in Clarity - Improved Usability of Timesheets - Accessibility - 16.2.2 Remediation Details - Clarity 16.2.2 Evaluated Against WCAG 2.1 and 2.2 Standards (A, AA Levels) Auto-suggest Column Header Labels In Clarity 16.2.1, when multiple attributes are set to display in the auto-suggest format, the dropdown values appear in multiple columns. However, it can be unclear to users what each column represents. In the updated version, 16.2.2, the user experience for the Auto-Suggest dropdown has been improved. Now, visible column headings are included, making it easier for end users to understand the meaning of the displayed data at a glance. This enhancement enhances usability and clarity, leading to a smoother user experience overall.
IMPORTANT A Feature Toggle controls the auto-suggest column header label improvements and remains 'Disabled' by default until it is enabled. Ensure that you have enabled 'Drop Down List Column Labels' in the Feature Toggles workspace. WARNING Some of the key points to remember are: - In some cases, when this capability is enabled, the out of the box dynamic lookups may display column
header labels that are not translated as expected. - If a lookup contains only a single column, a visible column header label will not be displayed. Workaround: There is no impact on functionality. Customers can translate column heading labels.


Improved My Timesheet Accessibility in Clarity My Timesheet - Accessibility Improvements You can tab through the Notes Panel and Exit when Clicking X to close.
NOTE As a secondary capability, you can tab through a single line in Edit Mode.


Accessibility behavior improvements as follows: - Focus remains in the Notes Panel until the User Selects `X' to Close the panel. You can Tab to navigate to all fields in
the Note Panel, including the Edit and Delete icons. - After the Note is Saved, the Focus is directed back to an empty Note Input box. - Focus available for new Time Period Calendar Date Picker. - Investment and Task row changed to a 'row group' and announced by Screen Reader as a 'row group'. - The screen reader announces Message, Cancel, and Submit Buttons.
- Column Panel supports Up/Down Arrow navigation and no longer supports Tab navigation.
- Tab navigation can be used to Approve or Reject Timesheets in the Resource Timesheet - Detail modal accessed through either:
- New Link on Resource Name in Timesheets Grid - Details Flyout Review link in Timesheets Grid


IMPORTANT This feature is governed by the Feature Toggles workspace in Clarity. You can use the workspace to monitor when the toggle expires, and the feature will be available to all users. To learn more, see Feature Toggles. Improved Usability of Timesheets 01. My Timesheet and Review & Approve - Time Period Selection Changed The time period selection is now a date picker. You can easily choose time periods by using the dropdown arrow without scrolling. Your selected time period will stay during your session, but when you log back in, it shows the current time period by default.

NOTE You can select the year you want by clicking on the name of the month in the date picker. 02. My Timesheet and Review & Approve - Format Changes to Status Status is now a badge in the relevant position for both Timesheet Status and Time Period Status.

03. My Timesheet and Review & Approve - Ability to View, Add, Edit, and Delete Time Entry Notes in the Global Notes Panel You can View, Add, Edit, and Delete Time Entry Notes in the Global Notes Panel.
NOTE Clicking the Notes button in My Timesheet and Review & Approve will also display the Time Entry Notes. Previously, only Timesheet Notes were displayed when clicking the Notes button.

The new Save and Cancel buttons are added in the Notes section. 04. My Timesheet - Ability to View, Add, Modify, and Delete Time Entry Notes In My Timesheet, you can manage time entry notes by viewing, adding, editing, and deleting them. Here are the details: - To view, add, modify, or delete time entry notes, click on 'Notes' in the three-dot action menu of a time entry. - If a time entry already has notes, click on the notes icon within the time entry to access the notes panel for editing or
deletion. - When hovering over a note, icons for editing (pencil) and deleting (trashcan) will appear. - Notes accessed from within a time entry will not display timesheet-wide notes.

05. My Timesheet - Format Changes to Project and Task Details The formatting of Projects and Tasks in My Timesheet has been updated as follows: - Project: Project names are now displayed in bold font. - Task Name: Task names are no longer bolded, and task details are indented for improved clarity and organization.
06. My Timesheet - Search Box in Add Tasks Enhanced When adding tasks in My Timesheet, the search functionality within the Select Tasks Modal has been improved. Now, you can search not only by Task Name and Task ID but also by Investment Name and Investment ID, enhancing the search capabilities and making it easier to find specific tasks within the modal.

07. My Timesheet - Task Name Contains Hyperlink to Task You will now find a link on the Task Name within My Timesheet. This link allows you to easily navigate back to the Task Properties.
NOTE If the Task Properties feature is not Blueprint enabled, the navigation will redirect users to the Task grid instead.

08. Timesheets Grid - Resource Hyperlink to Timesheet Detail Available In the Timesheets grid, you will see a link on the Resource Name to view the Resource Timesheet - Detail modal.
NOTE The link is only available for Timesheets in the Submitted Status.

09. Timesheets Grid - Vendor Attribute Available You will now have the Vendor Attribute from Resource Properties for use in Timesheets grid. You can use it to filter the data in the grid.


IMPORTANT This feature is governed by the Feature Toggles workspace in Clarity. You can use the workspace to monitor when the toggle expires, and the feature will be available to all users. To learn more, see Feature Toggles.

Accessibility - 16.2.2 Remediation Details

WCAG Multiple (AA)

Issue Description

Impact Area

My Timesheet is not keyboard and My TImesheet screen reader accessible

1.3.1.f (A) 1.4.10.a.(AA)

<ul> and <ol> must only directly contain <li>, <script> or <template> elements
Content overlaps other content at a 320px width equivalent

Fly-out Milestone

1.4.13.a (AA) Additional content (e.g., Tool Tip) Fly-out > Tool Tip is not dismissible

1.4.13.a (AA) 2.1.1.a (A)

The dropdown remains sticky while scrolling

Drop-down menu

Device-dependent event handlers Milestone are used

Remediation
My Timesheet has undergone an architectural update to improve the overall user experience for keyboard and screen reader users.
Enabled screen reader to announce pronouncing/ displaying visual tabs as 'tab' instead of 'link'.
This component is refactored and moved into the page, and it no longer 'sits' on the boundary between the application header and the page. The new header row positions the milestone component with the page and wraps in situations where the page title is too long.
Clarity does not support using the Esc key to close the tooltip. Users are expected to defocus or de-hover the item that opens the tooltip. Once the popover is migrated from angular (to Stencil) this decision may be revisited.
Ensure that the combo box does not follow the user as they navigate the page.
With the new Header and Breadcrumb user experience, the milestone component is accessible via keyboard.


WCAG 2.1.2 (A)
2.1.2 (A) 2.4.1 (A) 2.4.6.b (AA) 2.4.7 (AA) 3.2.2.a (A) 3.3.2 (A)
4.1.1.d (A) 4.1.2.a (A) 4.1.2.b (A) 4.1.2.b (A)
4.1.2.b (A)

Issue Description

Impact Area

Remediation

If keyboard focus can be moved Main (left) navigation -

to a component of the page using

a keyboard interface, then focus

can be moved away from that

component using only a keyboard
- interface, and, if it requires more

than unmodified arrow or tab keys

or other standard exit methods,
- the user is advised of the method

for moving focus away.

Corrected the issue and delivered the "Expand/ Collapse' button as a unique tab stop that is NOT accessible via up/down arrow keys from the other 'left navigation' menu items listing.
The "Expand' function uses an aria-label of 'button' and the screen reader will announce the "Expand" function as a Button.
The "Collapse' function uses an aria-label of 'button' and the screen reader will announce the "Collapse" function as a Button.

Keyboard focus does not move to Custom Objects the intended target

Ensured keyboard focus followed a natural flow pattern. The update applies to the Fly-out tab order throughout the application.

'Skip to main content' button

All pages

should present itself on all pages

Updated the capability to ensure the 'skip to main content' mechanism, which bypasses repeated blocks of content, is available on all pages.

Programmatic label does not convey the purpose of control

Fly-out

Updated the Flyout and Canvas configuration 'Done' buttons to display the Tool Tip and enable the screen reader to announce it as 'Done Configuring'.

Focus not placed on the grid as expected

All grid views

Corrected the issue so that visible focus is established on the first cell in the grid.

Form field causes the unexpected View Options change

Updated the Flyout to ensure the focus remains on the selected radio button.

When the user selects the `log out' option from the Avatar menu, they are taken back to the login page, and nothing is set to be announced to let them know that logout has been successful.

Login page

Corrected the issue so that the screen reader announces (Enter credentials) in the Login page. This makes it clear that the user is on the login page after logout.

id attribute value must be unique Fly-out

Updated the id attribute value to be unique

Custom checkbox does not have a Check box role and/or state

Corrected the issue so that the Checkbox has the proper role so that the screen reader users will know the functionality of the element.

Required ARIA attributes must be Fly-out provided

Corrected the issue where the wrong ARIA attributes were used.

Required ARIA attributes must be Filters provided

Applied the correct ARIA attributes so that when the keyboard user selects the 'Show filters' button, the screen reader announces the number of filters currently in place. When the keyboard user selects the '+ Add filter' button, the screen reader announces the number of available filter options When the keyboard user selects a filter option, the screen reader announces the number of available options.

Tooltip content is not accessible to All grid views screen readers

With the new Header and Breadcrumb user experience, the milestone component and the tooltips associated with each milestone are accessible via keyboard.

Clarity 16.2.2 Evaluated Against WCAG 2.1 and 2.2 Standards (A, AA Levels)
The current VPAT for Clarity version 16.2.2 reflects an accessibility evaluation based on the criteria in both WCAG 2.1 and WCAG 2.2 standards.


There are six new criteria introduced in WCAG 2.2, which include: - 3.2.6 Consistent Help (Level A, WCAG 2.2 only) - 3.3.7 Redundant Entry (Level A, WCAG 2.2 only) - 2.4.11 Focus Not Obscured (Minimum) (Level AA, WCAG 2.2 only) - 2.5.7 Dragging Movements (Level AA, WCAG 2.2 only) - 2.5.8 Target Size (Minimum) (Level AA, WCAG 2.2 only) - 3.3.8 Accessible Authentication (Minimum) (Level AA, WCAG 2.2 only)
IMPORTANT Some of the key points to remember are: - Deque evaluated Clarity 16.2.2 against WCAG 2.1, WCAG 2.2, as well as the latest EN 301 549 and US
Section 508 standards. - EN 301 549 continues to call WCAG 2.1 Level A/AA compliance, while US Section 508 currently references
WCAG 2.0 Level A/AA.
Clarity 16.2.1: Usability and Accessibility Improvements
Introduction From a usability perspective, the following updates are included in this release: - A new breadcrumb navigation user experience and page header layout have been implemented. - With this capability enabled, all Clarity pages will showcase the new breadcrumb and header layout. - Administrators can turn this new capability on or off using the newly introduced Toggle Management feature. - Clarity's Cascading Style Sheets (CSS) have been updated to ensure appropriate capitalization of 'button' text in
English and other supported languages, such as French. The Clarity product team has determined the combinations below are the supported platforms from an accessibility perspective: - Operating System: Windows - Browser: Chrome, Firefox, and Edge - Screen Reader: JAWS and NVDA The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users.
REMEMBER Clarity's My Timesheet grid contains significant functional density and does not incorporate semantic elements required for screen reader shortcuts. Users should consider leveraging Clarity's supported grid keyboard shortcuts when using screen readers with My Timesheet or configurable grids.
New Breadcrumb Navigation User Experience and Page Header Layout The enhanced breadcrumb provides users with better visibility regarding their navigation within Clarity, allowing them to track their path and return to previously visited pages easily. For instance, when users move from a Roadmap to a linked Investment associated with a selected Roadmap Item, they can see the originating Roadmap and navigate back seamlessly.
NOTE The new header offers an improved visual design by exposing page-level information and available actions.


Breadcrumb and Header - Navigate to a 1st-level object instance


Toggle - Enabled (Default)

Toggle - Disabled

Single click to navigate to the previous page

Single click to navigate to the previous page

Navigation link is positioned above the new header row

Navigation link is positioned within the global header

The new header row includes the object instance Name & ID, Status, and configured Banner color

The global header includes the object instance Name & ID, and Status are centrally aligned

The Milestone Timeline is positioned in the right side of the header The Milestone Timeline spans the global header, and the Banner

row.

color is consumed in the Module row

Breadcrumb and Header - Navigate to a 2nd-level object instance

Toggle - Enabled (Default)

Toggle - Disabled

A single click to navigate to the Objective list view
Navigation link(s) positioned above the new header row The new header row includes the 2nd-level object instance Name and ID.

A single link to return to the previous page (e.g., Objective instance)
Navigation link positioned within the global header
The global header includes the centrally aligned 2nd-level object instance Name and ID.


Breadcrumb and Header - Navigate to a 3rd-level object instance


Toggle - Enabled (Default)

Toggle - Disabled

Single click to navigate to the Custom Object Tile page

Single link to return to the previous page (e.g., Vendor instance)

Navigation link(s) positioned above the new header row

Navigation link positioned within the global header

The new header row includes 3rd level object instance Name and The global header includes 3rd-level object instance Name and ID

ID

are centrally aligned

NOTE
The Project's 'milestone timeline' is technically integrated into the global header, just above the Banner color visual border. It encompasses visual indicators for Tasks.
Although Ideas do not accommodate Tasks, they will exhibit a subtle blank line within the Global header. There is no functional impact on the end user. When the new breadcrumb and header are enabled, this artifact remains indiscernible.

REMEMBER If you don't refresh the browser, Clarity does not automatically return to the Global Header layout format. For example, In the Projects, you can view the Banner Colour applied to the Modules and the header row.

After refreshing the browser, Clarity will return to the Global Header layout format.
Clarity's Cascading Style Sheets (CSS) Have Been Updated for Button Text Clarity's Cascading Style Sheets (CSS) have been updated to ensure proper capitalization of button text in English and other supported languages like French. Examples:


Clarity - 16.4.1 150

IMPORTANT There may be a few examples where multiple words of button text are capitalized in English but not in other languages (this is by design).

English

Language

16.2.0 Button Text

16.2.1 Button Text

French

Criteria to Capitalize a Word in Button
Generally, Clarity capitalizes the first word in a sentence (or button text, etc.) and proper names (e.g., names of Clarity objects, or specific terminology and actions).
Examples: "New from Template" and "New Plan from OBS"

Accessibility - 16.2.1 Remediation Details

WCAG 1.4.1.a (A)

Issue Description

Impact Area

Color alone is used to Configurable Widgets convey info

1.4.10.a (AA) 1.4.11.c (AA) 1.4.13.a (AA)

Content does not reflow to fit 320px width equivalent

Saved Views

Active user interface Configurable Widgets component lacks 3 to 1 contrast ratio

Additional content not - Saved Views

dismissible
- View Options

2.1.1.a (A)

Function cannot be performed by keyboard alone
- Date Picker - Saved Views

Remediation
- Provided a visually redundant method of conveying the
same information as is conveyed by color.
- In addition, provided a screen reader accessible method of
conveying the same information as is conveyed by color. Ensured content is viewable without scrolling horizontally when the viewport is set to 320-pixel width equivalent.
Adjusted the user interface to at least 3 to 1.
Ensured tooltips, when displayed on mouse hover or keyboard focus, can be dismissible by moving the pointer hover or keyboard focus Ensured the keyboard can use the component.


WCAG 2.4.1 (A)
2.4.2.a (A) 2.4.3.a (A)
2.4.6.b (AA)
2.4.7 (AA) 3.1.1.a. (A) 4.1.1.d (A) 4.1.2.a (A) 4.1.2.b (A)

Issue Description

Impact Area

A mechanism is available to bypass blocks of content that are repeated on multiple Web pages

Custom (Master) Objects

Documents must

All pages

have <title> element
- Modal is closed, - Saved Views

focus is not
- Skip to Main Content

returned to trigger button
- Keyboard focus - Custom (Master)

does not move to

Objects

intended target
- Buttons have
- Saved Views

same name but - Configurable Widgets
different actions
- Programmatic

label does not

convey purpose of

control

Keyboard focus

Custom (Master) Objects

does not move to the

intended target

Keyboard focus does Custom (Master) Objects not move to intended target

id attribute value must - Configurable Widgets

be unique
- View Options

Button pressed state Date Picker is not conveyed
- Elements must - Date Picker only use allowed - View Options
ARIA attributes
- Required ARIA
attributes must be
provided
- Tab widget
is missing
appropriate roles
and/or attributes

Remediation
Ensured mechanism is available to bypass blocks of content.
Ensured pages have a non-empty <title> element to aid in navigation.
- Placed focus back on the element that triggered the modal
dialog.
- When the button is activated, ensure the focus moves
directly to the "+" button.
- Ensured keyboard focus followed a natural flow pattern.
Update applies to Fly-out tab order throughout the application
- Ensured the Screen reader identified the Share and Copy
Link buttons with reference to the View that is being shared or copied.
- Ensured the programmatic label, for the control, correctly
conveys the purpose of the control.
Ensured keyboard focus followed a natural flow pattern. The update applies to the Fly-out tab order throughout the application. Ensured keyboard focus followed a natural flow pattern. The update applies to the Fly-out tab order throughout the application. Ensured each widget has unique drop-down ID's.
Applied the correct ARIA attributes so buttons convey the pressed or unpressed state. Corrected the issue where the wrong ARIA attributes were used

Clarity 16.2.0: Usability and Accessibility Improvements

Introduction From an accessibility perspective, the following updates or remediations are included in this release - Configuring a Board card using the keyboard and screen reader alone
- The keyboard (accessibility) user requires a well-understood pattern to navigate into and out of frequently used Clarity pages. - The keyboard paradigm provides users with a pattern to perform typical drag-and-drop actions used by mouse users. - This same keyboard paradigm will be expanded in other areas of the application, such as Canvas and Dashboard configuration.
- Reported issues across multiple WCAG success criteria have been remediated in this release - Accessibility improvements are needed to drive adoption because organizations demand compliance with accessibility standards to ensure their users have the proper tools to view and access company-specific details.
The Clarity product team has determined the combinations below are the supported platforms from an accessibility perspective:
- Operating System: Windows - Browser: Chrome, Firefox, and Edge - Screen Reader: JAWS and NVDA
The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users.
REMEMBER
Clarity's My Timesheet grid contains significant functional density and does not incorporate semantic elements required for screen reader shortcuts. Users should consider leveraging Clarity's supported grid keyboard shortcuts when using screen readers with My Timesheet or configurable grids.

Accessibility - Clarity 16.2.0 Remediation Details

WCAG 1.3.1.d (A) 1.3.1.f (A) 1.3.1.e (A)
1.3.5.a (AA) 1.4.11.a (AA) 2.1.1.a (A)

Issue Description

Impact Area

Remediation
- Group of form controls not - Custom Object /
- In the new group controls, the legend was wrongly

associated with a group

Custom Investment

coded. It included all the content within the field set,

label

Tiles

which was incorrect.
- List or list item is not marked - Investment Header - The content was not a list but was incorrectly

up properly

conveyed as a list to screen reader users.
- Visual heading text is not
- The text was a heading but was not conveyed as

marked as heading

such for the screen reader users. Headings help the

users to understand the content of the page.

Identify input purpose not accurately

Login page

Applied the correct autocomplete attribute.

Active user interface component - Flyout field borders Adjusted the user interface to at least 3 to 1.

lacks 3 to 1 contrast ratio
- Column Divider lines
- Drag and drop feature is not - Board Cards
- Ensured drag and drop functions can be completed

keyboard accessible
- Bell Notifications -

using the keyboard.
- Function cannot be

Delete
- Ensured the keyboard can use the component.

performed by keyboard alone
- Main left navigation - "The "<" or ">" buttons for Previous and Next

menu

buttons are provided ONLY for mouse users.
- Custom Object /
Custom Investment

Keyboard users can simply use the left/right arrow keys to navigate the entire menu structure without

Tiles

the need to access the Previous and Next buttons.
- Investment |
Modules Tabs

The screen reader does not need to recognize the Previous and Next buttons either.

Navigation button


WCAG 2.4.3.a (A) 2.4.6.b (AA) 3.3.1.b (A) 3.3.2.a. (A) 3.3.2.b. (A) 4.1.1.b. (A) 4.1.2.a (A)
4.1.2.b (A)
4.1.3.a (AA)


Issue Description

Impact Area

Remediation

Keyboard focus is lost or misplaced due to user interaction or content update

Custom Object / Custom Investment Tiles

Explicitly placed focus on an element when content is removed, refreshed, or added.

Buttons have the same name but different actions

Custom Object / Custom Investment Tiles

Applied a more meaningful label.

Form field with error not identified

Custom Object / Custom Investment Tiles

Updated the 'required field' message so that it could be identified by assistive technologies.
- Instructions are inaccurate
or incomplete for assistive technology users
- Visible label missing
- Check box
- Ensured instructions for an element MUST be
- Custom Object /

available as programmatically discernible text.

Custom Investment - Ensured users can understand the purpose of the

Tiles

field without a visible name.

Certain ARIA roles must contain - To Dos
- Ensured ARIA roles include required children's

particular children
- Custom Object /

elements

Custom Investment - Corrected the issue where the wrong ARIA

Tiles

attributes were used.
- When the user navigates
to an active tab among the set of tabs, its state is not exposed as selected to screen reader users.
- Checkbox does not have a
role and/or state
- Form field is not labeled - Button pressed state is not
conveyed
- ARIA hidden element must
not be focusable or contain focusable elements
- Selected state of the
element is missing or incorrect
- Investment | Module -

Tabs
- Check box
- Resources | Teams -
- Investment Name

field
- Buttons
- Custom Object /
- Custom Investment

Tiles
- Applied the correct ARIA attributes so screen readers properly understand an active vs inactive tab state.
Applied the proper ARIA tags required for assistive technologies
Ensured fields have the correct ARIA attribute.
Ensured fields have an accessible name.
Applied the correct ARIA attribute, so buttons convey the pressed or unpressed state.
Ensured an ARIA hidden element was not focusable.
Ensured the proper ARIA tags are in place for assistive technologies.
When a selected state of the tab is visually indicated, the same information is conveyed to the screen reader user.
- Instructions are inaccurate
or incomplete for assistive
technology users
- Required ARIA attributes
must be provided
- Elements must only use
allowed ARIA attributes
- ARIA attributes must
conform to valid values
- Check box
- Ensured instructions for an element are available as
- Resources

programmatically discernible text.
- To Dos
- Corrected the issue where required ARIA attributes
- Roadmap grids

are now available.
- Buttons
- Corrected the issue where the wrong ARIA
- Custom Object / Custom Investment
- attributes were used Applied the correct ARIA attributes to conform to

Tiles

valid values.
- Investment | Module - Elements only use allowed ARIA attributes.

Tabs

Status message not automatically announced
- Check box
- Applied the proper ARIA tags so the screen reader
- Custom Object /

can announce the status message for the number of

Custom Investment

items selected in the grid.

Tiles
- The error message that appears on the screen is

now automatically announced by the screen reader.


Clarity 16.1.3: Usability and Accessibility Improvements
From a usability perspective, the following updates are in this release: - `Large String - Rich Text' attribute of Clarity has been extended to include support for Tables and Images. From an accessibility perspective, the following updates or remediations are in this release: - A single Tab stop now supports keyboard access in and out of the (configurable) grid. - When Saved Views are in use, screen reader output is improved to inform the user:
- A page refresh is occurring. - A (new) count of records has been returned to the page.
IMPORTANT The Clarity product team has determined the combinations below are the supported platforms from an accessibility perspective: - Operating System: Windows - Browser: Chrome, Firefox, and Edge - Screen Reader: JAWS and NVDA The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users. REMEMBER Clarity's My Timesheet grid contains significant functional density and does not incorporate semantic elements required for screen reader shortcuts. Users should consider leveraging Clarity's supported grid keyboard shortcuts when using screen readers with My Timesheet or configurable grids. Here are the updates in this release: - Usability Focus - Accessibility Focus - Clarity Rich Text Attribute Updates Related To Tables and Images - Clarity Grid - Keyboard Access Using a Single Tab Stop - Accessibility - 16.1.3 Remediation Details
Usability Focus Clarity's Large String-Rich Text formatting component supports for Tables and Images. - Clarity and Rally users are accustomed to inserting Images and Tables to certain fields on a given page. - This update provides a modern experience for users that work in Clarity but also provides a consistent experience for
users that work in Clarity and Rally.
Accessibility Focus Here are the accessibility focus updates: - Keyboard access in and out of the (configurable) grid is now supported by a single tab stop.
- The keyboard (accessibility) user requires a well-understood pattern to navigate into and out of frequently used Clarity pages.
- When Saved Views are in use, screen reader output is improved to inform the user of a page refresh and a new count of records have been returned.
- When page results are dynamically updated, the screen reader can now provide more descriptive information to the user.
- Reported issues across (6) WCAG success criteria have been remediated in this release. - Accessibility improvements are needed to drive adoption because organizations demand compliance with accessibility standards to ensure their users have the proper tools to view and access company-specific details.
Clarity Rich Text Attribute Updates Related To Tables and Images
The `Large String - Rich Text' attribute of Clarity has been extended to include support for Tables and Images.
- When configured, the RTF attribute, with all its capabilities, is consumed in the Grid, Fly-out, Canvas, and/or Properties pages.
- @mention is targeted to be supported in the FY23-Q4 (16.2.0) release.

Upgrade Impact
01. Rich Text - restricted image file size (2MB)
- In this release, image file size inserted into a Rich Text Formatting (RTF) field will be limited to 2MB. - The product team evaluated multiple file size image uploads, to the RTF field, with different sizes. Refer to the Image
Upload Response chart below:

Image Size

Upload time

800 KB

1.5

1 MB

1.95

2 MB

2.34

3 MB

2.91

4 MB

3.3

5 MB

4.5

7 MB

6.2

10 MB

7.4
- Upload time increased proportional to the size of the image. - Any upload with a size >2MB results shows an error on top as shown in the image below. Key points that are worth
calling out.
- The team landed on keeping the limit 2 MB. Even if a user uploads images >2 MB the browser won't crash. - Users can upload more than one image in the same RTF field which may result in poor performance while rendering
the RTF field with these images.
- The RTF field is not governed by system options which default to a limit is 20 MB.

02. Rich Text - Insert Image via URL Is Not Supported


Clarity's rich text editor does not support inserting an image using the 'insert image via URL' capability.


If an image URL is supplied, the image will not render in Clarity's Rich Text field.
Workaround: The user can insert an image using copy/paste.
IMPORTANT In the context of the Clarity and Rally integration, should a Rally field include an image inserted using the 'insert image via URL' capability, only that field will be skipped during the sync process and captured in the logs.
03. Rich Text - Export to CSV Doesn't Support Table Formatting
If a Rich Text field contains tables, its table formatting will not be rendered when export to CVS is used.

NOTE Essentially, rendering a table inside an Excel cell is not part of the Clarity roadmap.

Clarity Grid - Keyboard Access Using a Single Tab Stop With Single Tab Stop in grid: 1. From the "+" button, press the Tab key to navigate directly into the grid. 2. Once within the grid, press arrow keys (   ) and supported shortcuts to navigate cells to review information or
make updates as needed. 3. The new capability supports navigating from anywhere in the grid, by pressing the Tab key to navigate directly to the
pagination component.
Before Single Tab Stop in grid: 1. From the "+" button, press the Tab key to navigate directly into the grid. 2. Once within the grid, press arrow keys (   ) and supported shortcuts to navigate cells to review information or
make updates as needed. 3. Press arrow keys (   ) to navigate to the lower right grid cell.
NOTE Earlier, multiple keystrokes were required to navigate to the upper left or lower right grid cell to exit the grid. Now, this step has been removed. 4. Press the Tab key to navigate to the pagination component.


Accessibility - 16.1.3 Remediation Details


WCAG 1.3.1a (A) 1.3.1b (A)
2.4.3.a (A) 2.4.3.1 (A) 4.1.2.a (A)
4.1.2.b (A) 4.1.3 (AA)

Issue Description

Impact Area

Remediation
- Grid column menu
- Grid column filter button
- Corrected access to grid

(hamburger) button is added - Relationships between the

column filter button *

via CSS pseudo selector but

configurable grid header
- Corrected grid column

is not available when CSS is cells and data cells

header and row header

turned off
- Data table has missing
- Relationships between the

associations *

configurable grid header
- Corrected cross object grid

or incomplete header cell

cells and data cells in the

column header and row

markup

context of a cross object grid header associations *
- Complex table headers-id

association is incorrect
- Hidden or empty element - Empty cells in the grid

receives focus

header
- Keyboard focus is lost due - Sort order icon in grid

to user interaction or content column header

update
- Corrected the issue so that
empty cells in grid header
are no longer focusable *
- Explicitly placing focus on a
logical element *
- Button does not have a role - Resource and Roadmap grid - Corrected the issue
- Button is missing a role and

header elements

associated with grid column

a name
- Grid column filter button

name cells that function like
- Expand/Collapse state of the
element is missing

buttons, but were missing the proper role attribute *
- Included aria-expanded

notation in the grid column

menu icon to indicate the

context menu popup state *
- Aria input fields must have - Multiple input fields
an accessible name
- Applied ARIA accessible
names to multiple input field
- Consider using the live
region to expose the result
to screen reader users
- Save Views
- Improved screen reader
output to 1) inform user a page refresh is occurring, and 2) a (new) count of records has been returned to the page
- AG-grid upgrade resolved the reported issue

Clarity 16.1.2: Usability and Accessibility Improvements
The following updates have been included in this release: From a usability perspective, the following updates are in this release: - Large String - Rich Text Formatting (RTF) component has been updated and uses the same tooling as Rally. - A visual indicator identifies an unsaved state for a new row in the grid. - Wrap text capability has been updated to break between words for both column headers and grid cell content. From an accessibility perspective, the following updates or remediations are in this release: - When configurable filtering is in use, screen reader output is improved to inform the user:
- Page refresh occurs. - A (new) count of records has been returned to the page. - Links and Conversations modules are now accessible via keyboard and screen reader. - Configurable Widgets are now accessible via keyboard and screen reader. - Ensure grid content can be viewed at 200% or higher. - Drop-down menus (MVL, SVL, picklists) comply with WCAG success criteria 4.1.1.b (Level A) Nested According to Specification. Here are the updates in this release: - Large String - Rich Text Formatting (RTF) Component Update - Visual Indicator Identifying an Unsaved State for a New Row in the Grid - Wrap Text Update to Break Between Words - Screen Reader Enhancement Large String - Rich Text Formatting (RTF) Component Update Large String - Rich Text attribute in Clarity has been updated and is now available in the Grid, Fly-out, Canvas, and Properties pages.
NOTE Some of the key points to remember are: - End user capabilities remain the same - mainly a UX styling change. - From an integration perspective, Clarity technology is now the same as Rally. Upgrade Impact: Rich Text - Color Options The color palette options in the rich text component are available in Clarity 16.1.2, and the options differ from Clarity 16.1.1. Clarity 16.1.2 has 15 options for text and background colors. In contrast, there were 35 options for text and background colors in Clarity 16.1.1.

If existing large string-rich text fields use a color option (text or background) not supported in 16.1.2, the color (text or background) will be rendered in Black upon upgrade. Upgrade impact: Rich Text - Font Choices The font choices in the rich text component are available in Clarity 16.1.2, and the options differ from Clarity 16.1.1. In Clarity 16.1.2, there are nine font choices, whereas there were 12 font choices in Clarity 16.1.1.

Clarity 16.1.2 does not support Comic Sans MS, Monospace, and Helvetica. The font listing does not include Open Sans, but it is Clarity's default font style. Any font without explicit font mention will be rendered in Open Sans. Upgrade impact: Rich Text - Restricted HTML The rich text component in Clarity 16.1.2 does not support restricted HTML tags.
If existing large string-rich text fields include restricted HTML tags, you are not immediately alerted of a Cross-Site Scripting (XSS) validation condition upon upgrade. However, when you attempt to edit the field, a toast message alerts you about the Cross-Site Scripting (XSS) condition. Workaround: Remove the offending restricted HTML tags from the large string-rich text field.


Visual Indicator Identifying an Unsaved State for a New Row in the Grid


Wrap Text Update to Break Between Words
Screen Reader Enhancement Previously, when a screen reader (for example, VoiceOver) was in use, the user was on the Idea list page and entered any input (for example, Idea ID values) in the Search field, the screen reader (for example, VoiceOver) announced only the actual values (for example, number) that are being inserted into the Search field (for example, 31, 29, etc.,) which does not make sense to the user. With the Clarity 16.1.2 release, when configurable filtering is in use, the screen reader has been updated to announce the following:
- A page refresh is occurring: "Loading Data.. Please Wait" (Grid Overlay Component) - A (new) count of records has been returned to the page: Number of records returned - after filtering (for example,
"1 - 51 of 100")
NOTE Some key points to remember are:
- The use of the VoiceOver screen reader for the Mac: - Voice-over does not announce the loading message - "Loading Data.. Please Wait". However, Voice-over does announce the number of records returned. - Voice-over only announces the "Loading Data..." message when the user explicitly clicks the "x" icon to remove the filter chip.
- Screen reader support will be limited to the following combination: - Operating System: Windows - Browser: Chrome, Firefox, and Edge - Screen Reader: JAWS and NVDA - However, visual and keyboard navigation is also supported for Mac and PC users. - Clarity's My Timesheet grid contains significant functional density and does not incorporate semantic elements required for screen reader shortcuts. Users must consider leveraging Clarity's supported grid keyboard shortcuts when using screen readers with My Timesheet or configurable grids.
- Keyboard users can navigate between modules (e.g., My Timesheet, Review & Approve, Timesheets) using arrow keys ( ) and observe focus is established on the respective module or page tab. However, with the NVDA screen reader, keyboard arrow keys (  ) are not behaving as expected: - This behavior exists throughout the Clarity modules and is not limited to Timesheets. - This behavior is limited to NVDA. - With NVDA, use the combination of "Alt" + keyboard arrow keys ( ) to navigate between modules as a workaround.
- The new rich text component does not support restricted HTML tags. If existing large string - rich text fields include restricted HTML tags, upon upgrade, you are not immediately alerted of a Cross-Site Scripting (XSS) validation condition. However, when you attempt to edit the field, a toast message alerts you to the CrossSite Scripting (XSS) condition. Remove the offending restricted HTML tags from the large string-rich text field as a workaround.
- Tables and Images will be supported in the upcoming releases.
Clarity 16.1.1: Usability and Accessibility Improvements
The following updates have been included in this release:
1. From a usability perspective: Decouple the `Navigate' right from View-All, Create, and Edit-All Custom Objects (CMO) permissions.
2. From an accessibility perspective: Reported issues across (10) WCAG success criteria have been remediated in this release.
IMPORTANT
The Clarity product team has determined the combinations below are the supported platforms from an accessibility perspective:
- Operating System: Windows - Browsers: Chrome, Firefox, Edge - Screen Readers: JAWS, NVDA

The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users.
Clarity's grids contain significant functional density and do not incorporate semantic elements required for screen reader shortcuts. When using screen readers with My Timesheet or configurable grids, users should consider leveraging Clarity's supported table grid keyboard shortcuts To learn more, see Keyboard Shortcuts for Clarity Grid Navigation.
Here are the updates in this release:
- Decouple the `Navigate' Right from the View-All, Create, and Edit-All Custom Objects (CMO) Permissions - Known Issue in Clarity 16.1.1 Regarding Accessibility - Remediation: Screen Reader Repeatedly Announces the Task Name - Broadcom Responses: Reported Issues Related to My Timesheets and Its Use With Screen Readers

Decouple the `Navigate' Right from the View-All, Create, and Edit-All Custom Objects (CMO) Permissions
Organizations now have more control over the personnel that can navigate to CMO instances, the Clarity Customer (master) Objects Tile page, and the Classic Home menu links.
In Clarity 16.1.0, the 'Navigate' capability is granted automatically to a user when they are granted CMO 'View', 'Create', or 'Edit' access. In other words, the 'Navigate' right is embedded with the CMO 'View', 'Create', or 'Edit' access right and provides access to the MUX Tile page, and the Classic Home menu links.
In this release, the `Navigate' capability has been removed from the CMO View, Edit, or Create access rights. This change ensures users will not automatically have access to all CMO instances.
NOTE
Custom Objects (CMO) 'Navigate' rights need to be removed by administrators as needed.
Upgrade Impact: You will maintain your existing CMO View, Edit, or Create access rights, and will have been automatically granted the CMO - Navigate access right when you upgrade to this release. This means that all users having either CMO View, Edit, or Create access rights before the upgrade will have the same experience after the upgrade.

Clarity 16.1.1 - Access Rights with Description The following table shows the access rights and their description in 16.1.1 and 16.1.0:

Access Right

Description in 16.1.1

Global <Master> Create
Global <Master> Edit All
Global <Master> View - All
Global <Master> Navigate

Allows resource to create <Master> objects. Allows resource to edit all <Master> objects. Allows resource to view all <Master> objects. Allows resource to navigate to <Master> object pages

Allows resource to Allows resource to Allows resource to


Decouple the Custom Objects (CMO) `Navigate' Right Some of the key points to remember while working with Custom Objects (CMO) `Navigate' right:


Sl. No. 01. 02. 03.
04.

Access RIghts

D

If you have `CMO - Navigate' global access right

You can access the corresponding links in the Classic PP

If you have 'CMO - Navigate' right, AND instances of CMO through rights You can access the instances through links in the Classic such as Create, Edit, or View (at any level; Global, Instance, or OBS Unit) AND defined Classic PPM Portlets, Clarity Links (URL-ba

If you have access to CMO instances through rights such as Create, Edit, You can access the CMO instance ONLY through defined or View (at any level; Global, Instance, or OBS Unit) but is NOT granted and Clarity Channels.
the `CMO - Navigate' global right

Point #02 and Point# 03 also apply to Custom Sub-object (CSO) instances
- The `CMO Navigate' global right is no longer being ch - The `CMO Navigate' global right is not checked when

NOTE
The `GET, PUT, PATCH' APIs of CMO and CSO no longer check for the `CMO - Navigate' right. For the 'GET, POST, PATCH' APIs of Projects, Ideas, and Custom investments to be functional, you need the 'Navigate' right.

Known Issue Timesheets Grid: Keyboard `Delete' Operation Removes Group By Chip A keyboard user hits the Enter key to remove the Group By chip. In Clarity 16.1.1, the `Delete' key removes the Group By chip. Keyboard users may find this counterintuitive.

The product team continues to review the best action to remediate this issue. Remediation: Screen Reader Repeatedly Announces the Task Name Situation:

As the user navigates (horizontally) through the time periods cells in Clarity (My Timesheet), the screen reader repeatedly announces the task name for each cell.
NOTE User accesses My Timesheet using JAWS 2022 Some users would prefer that the screen reader does not repeatedly announce the task name as they navigate (horizontally) through the time periods. Resolution options: Option 01: Clarity Code Change Change Clarity's current behavior, which may impact JAWS, NVDA, and VoiceOver. It may not be acceptable for all users. Option 02: JAWS configuration change JAWS should be configured to not announce the Task Name every time, but to establish focus on a date cell in each row of Tasks. Solution: Broadcom recommends the user investigate the following JAWS configuration change. There is a setting to change how JAWS reads column and row headers. Follow these steps: 1. Press INSERT+V to open the JAWS Quick Settings dialog box while the Tables page is still in the foreground. 2. Type table titles in the edit box. 3. Move to the item Table Titles in the tree view. If you want to avoid having the first column treated as a row header, change this to Table Titles - Column.


Broadcom Responses: Reported Issues Related to My Timesheets and Its Use With Screen Readers

Sl. No. 01.
02.
03. 04. 05.

Issue Description

Expectation

The screen reader announces `edit' when using screen The screen reader announces `edit <row name,

reader shortcuts to navigate day-of-week cells.

column>'.

Clarity's grids contai elements required fo Timesheet or configu supported grid keybo

Task Action (3-dot) menu purpose not obvious

With a focus established on the Action menu, the screen reader is expected to announce user action and read out menu <task name> when the menu is open.

This issue is fixed in

The screen reader loses focus when the user selects Focus the screen reader on the Task Action (3- This issue is fixed in

'escape' with the Task Action (3-dot) menu open.

dot) menu button.

The screen reader shortcuts do not announce user context related to a page location

The screen reader shortcuts announce user context related to a page location

Reference response

The screen reader shortcuts do not support the ability of the end user to navigate quickly through multiple tasks and cells.

The screen reader shortcuts help the end user to Reference response navigate quickly through multiple tasks and cells.


Sl. No. 06. 07. 08.
09. 10.
11.


Issue Description

Expectation

The screen reader does not announce non-working days (e.g., holidays)

The visual treatment indicating a holiday should This issue is fixed in also be announced by the screen reader

The searchable drop-down 'User Value 1' is not understood

The screen reader announces a searchable drop-down with meaningful information

Users should take a Secondly, reference

The screen reader shortcuts (Ctrl + Alt +    ) do The screen reader shortcuts allow the user to

not allow the user to navigate the grid.

navigate the grid.

Clarity's grids contai elements required fo Timesheet or configu supported grid keybo

Arrow keys do not provide navigation between the table and other content.

Arrow keys should provide navigation between The Timesheet grid

the table and other content.

the following image

When the grid is in Group By' mode, the user cannot remove the Group By or expand a collapsed section.

The user should be able to remove the `Group By' chip and/or expand a section with the use of the keyboard.

Refer to the respons delete a `group by' c keyboard users. The to remove a `group b

The screen reader is not announcing checkbox column The screen reader announces checkbox column Refer to the respons

names when in `group by' mode and reads the nearby names and indicates if the checkbox is selected

column values instead.

when in `group by' mode.

Clarity 16.1.0: Usability and Accessibility Improvements
The following updates have been included in this release: From a usability perspective:
- User option to display the configurable Fly-out either on the right side of the page (current behavior) or the bottom of the page in a horizontal position
- Configure to set Project banner color to `none' to comply with Corporate branding standards - Improved navigation experience where Clarity maintains (or remembers) item selection as a user navigates away from
a page and returns (within a session) From an accessibility perspective: Reported issues across (12) WCAG success criterion have been remediated in this release
IMPORTANT The Clarity product team has determined the combinations below are the supported platforms from an accessibility perspective: - Operating System: Windows - Browsers: Chrome, Firefox, Edge - Screen Readers: JAWS, NVDA The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users. Clarity's grids contain significant functional density and do not incorporate semantic elements required for screen reader shortcuts. When using screen readers with My Timesheet or configurable grids, users should consider leveraging Clarity's supported table grid keyboard shortcuts To learn more, see Keyboard Shortcuts for Clarity Grid Navigation. Here are the updates in this release: - Configurable Fly-out Positioning - Project Banner With No Color Option - Clarity Remembers Selections as a User Navigates Away From a Page and Returns Configurable Fly-out Positioning There is a new user option to display the Fly-out either on: 1. Right side of the page (which is the current behavior) or 2. Bottom of the page in a horizontal position

You can use the drag handle to increase screen real estate for the fly-out or the main content portion of the page. TIP The horizontal view is very useful if the user works with grids or sub-objects with multiple columns of data such that the fly-out positioned on the right side of the page or a vertical position forces the user to scroll and possibly lose context.
Project Banner With No Color Option There is an additional color option - --None-- is added for the Project banner.
NOTE When --None-- selected, the Banner has the same UX treatment as Ideas, Custom Investments, and Custom Objects.

Clarity Remembers Selections as a User Navigates Away From a Page and Returns Clarity has improved the end-user navigation experience such that Clarity maintains (or remembers) item selection as a user navigates away from a page and returns (within a session).
In this example, When a user navigates between: 1. Start from a Project, selects the Task module, and open the Task assignments in the fly-out [to] 2. Navigate to the Risks module and opens To Dos in the fly-out view for the selected Risk [to] 3. Navigate to the Issues module and opens the Issues Details in fly-out view [to] 4. Navigate to a Custom Object (in the form of an Objective) and open the Key Results for the selected Objective in the
fly-out and end. Clarity remembers these user selections as the user navigates from one page to the other and returns to either of these pages.
Clarity 16.0.3: Usability and Accessibility Improvements
The following updates have been included in this release: From a usability perspective: - Foundational work improving the behavior of the searchable pull-down menu
- Convert the searchable pull-down menu (from a list) to a `container' vs. the current list. - Position the search field within the container. - With the above in place, visible column header labels will be added (in a future release) to improve usability and
enable screen readers to announce column names to the user. From an accessibility perspective: Reported issues across (10) WCAG success criterion have been remediated in this release

IMPORTANT The Clarity product team has determined the combinations below are the supported platforms from an accessibility perspective: - Operating System: Windows - Browsers: Chrome, Firefox, Edge - Screen Readers: JAWS, NVDA The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users. Searchable dropdown improvements Previously, the searchable drop-down input field has two functions: - Display the selected value (Single-Value Lookup) or delimited list of values (Multi-Value Lookup), and - Search for the list of items. With the Clarity 16.0.3 release, the searchable drop-down input field is refactored to display the selected input in the field, while the search field is moved to the top of the list.
Clarity 16.0.2: Usability and Accessibility Improvements
The following updates have been included in this release: From a usability perspective: - Reordered View Options page content to maintain consistent across Timeline, Board, and Grid - Improved user experience to replace the `Name' of a Saved View or (Hierarchy) Metric - Improved user experience for discovering the Details panel with the addition of a right-click action from within Timeline,
Board, and Grid views From an accessibility perspective:
- Banner messages are accessible via keyboard and screen reader - Pop-Over confirmations are accessible via keyboard and screen reader
IMPORTANT The Clarity product team has determined the combinations below are the supported platforms from an accessibility perspective: - Operating System: Windows - Browsers: Chrome, Firefox, Edge - Screen Readers: JAWS, NVDA The screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and Windows users. Here are the updates in this release: - Reordered View Options Page Content - Improved User Experience To Open The Details Panel - Banner Message Content Is Accessible - Pop-Over Confirmation Content Is Accessible Reordered View Options Page Content The View Options page content has been reordered to be consistent across Timeline, Board, and Grid.
Improved User Experience To Open The Details Panel The user experience for discovering the Details flyout has been improved with the addition of a right-click action. The right-click `Open Detail' action is available to the Timeline, Board, and Grid views.

NOTE The right-click `Open Detail' action is a global change implemented throughout Clarity. Banner Message Content Is Accessible In this release, `Banner' message content is keyboard and screen reader accessible. The screen reader announces Banner content. Focus is established on Banner actions using keyboard.
Pop-Over Confirmation Content Is Accessible In this release, `Pop-Over confirmations' content is keyboard and screen reader accessible. The screen reader announces Pop-Over content. Focus established on Pop-Over actions using keyboard.

Clarity 16.0.1: Usability and Accessibility Improvements
The drop-down menu component has undergone a styling update from a usability perspective. The drop-down menu with its dark background is used in various pages such as: - Properties page action menu - Right-click menus - Roadmap Item - Investment page action menus These menus/items have been converted to the lighter-themed pull-down menu. From an accessibility perspective, the following updates have been included in the Clarity 16.0.1 release: - Drop-down Menu Component - Button Tool Tips Displayed on Keyboard Focus - Application-level Header - Page Title - Canvas Accessibility
REMEMBER The Clarity product team has determined the combinations below are the supported platforms from an accessibility perspective: - Operating System: Windows - Browsers: Chrome, Firefox, Edge - Screen Readers: JAWS

Note: Screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are also supported for both Mac and PC users. Drop-down Menu Component The following menus have been updated: - Actions menus for: - Benefit Plan Detail - Board Cards - Conversations - Cost Plan Detail - Documents - Roadmap - Manage Scenarios - Tasks module - Roadmap & Hierarchy - Import-Staff module - Add Staff - Timeline view - right-click menu - User pull-down

Button Tool Tips Displayed on Keyboard Focus In Clarity 16.0 and earlier releases, button tooltips were presented on mouse hover but not Keyboard focus. In this release, Button tooltips are displayed on Keyboard focus with or without a screen reader in use. The focus of this release is `icon' buttons.

Application-level Header - Page Title Help users find the content and orient themselves by ensuring each application page has a descriptive title. Titles identify the current location without requiring users to read or interpret page content. In cases where the page is an application, the name of the document or web application is sufficient to describe the purpose of the page. It is not required to use the name of the application. This capability also benefits people with mobility impairments whose mode of operation relies on audio when navigating between Web pages. Browser history becomes useful by displaying descriptive page titles having been visited.

Canvas Accessibility The Canvas capability used in Agreements and Status Reports is accessible.

NOTE Any new feature work mandates accessibility be "designed in" and part of the definition of done, aligned with the four key accessibility tenants noted below.
Clarity 16.0.0: Accessibility Improvements
The following lists the accessibility improvements addressed in this release:
- Accessibility Platform Support - Main (Left) Navigation - Accessibility


Accessibility Platform Support
Given the overwhelming evidence, the product team has determined the combinations below are the supported platforms, for the Clarity 16.0 release, from an accessibility perspective.

NOTE
Screen reader support is limited to the combination above. However, visual and keyboard navigation requirements are supported for both Mac and PC users as well. Clarity's grids contain significant functional density and do not incorporate semantic elements required for screen reader shortcuts. When using screen readers with My Timesheet or configurable grids, users should consider leveraging Clarity's supported grid keyboard shortcuts. To learn more, see Keyboard Shortcuts for Clarity Grid Navigation.
Operating System
- Operating system data was detected from the system used to complete the survey. - Respondents without disabilities were almost 6 times more likely to use Apple than respondents with disabilities,
whereas users with disabilities were more likely to respond using iOS devices.


Primary browser - Chrome usage among respondents nearly tripled in the last 22 months, making it the most popular browser. - Firefox usage decreased sharply. - Internet Explorer usage continued to decline, but it is still used by 14.5% of respondents, making it more commonly
used than Safari (9.8%).

Primary screen reader - Respondents with disabilities are more likely to use JAWS and NVDA and less likely to use VoiceOver as their primary
screen reader than respondents without disabilities - Respondents employed full or part-time were more likely to use JAWS than other respondents. - NVDA users reported higher levels of screen reader proficiency than users of other screen readers.

Main (Left) Navigation - Updates to ensure the screen reader announces each workspace using their respective naming conventions.
- The screen reader informs the user if the workspace has been previously "visited", if it is the current page, button type, and the name of the workspace.
- Improved vertical scroll & keyboard navigation support should the page be maximized or minimized. - A horizontal scroll bar is introduced when needed. - A new right-click action, from the main navigation, provides an ability to open the selected workspace in a new tab or new window.

Accessibility - Object, URL, or Attachment "Link" navigation
- Keyboard option to navigate directly to an Object, URL, or Attachment using the interactive LINK within the selected cell.
- Alternative keyboard option to edit the Object, URL, or Attachment NAME within the selected cell.

NOTE Clarity 15.9.3 - keyboard user only had the ability to edit the Object, URL, or Attachment NAME within the selected cell. No ability to navigate was available. Accessibility - My Timesheet - All elements of visual design, responsive design, keyboard navigation, & screen reader support have been considered including: - The period carousel - Submit, Notes, & Add / Remove Tasks buttons - Expand & Collapse All controls - Expand & Collapse controls for individual Investment Task grouping - Copy & Delete action button - Searchable drop-downs (e.g., Input Type Code, Charge Code, User Value 1, User Value 2) - Text boxes for hours or days entry

NOTE Clarity's grids contain significant functional density and do not incorporate semantic elements required for screen reader shortcuts. When using screen readers with My Timesheet or configurable grids, users should consider leveraging Clarity's supported grid keyboard shortcuts. To learn more, see Keyboard Shortcuts for Clarity Grid Navigation. - My Timesheet | Notes Tab is compliant - All elements of visual & responsive design, keyboard navigation, and screen reader support have been considered.

Accessibility - Financials - The Financials module is compliant
- In addition to this module's associated (common) grid compliance, this release delivers keyboard navigation and screen reader support for Cost Plans, Budgets, Benefit Plans, & Actuals Transactions menu options.

Accessibility - Miscellaneous items - All elements of visual & responsive design, keyboard navigation, and screen reader support have been considered.
Clarity 15.9.3: Accessibility Improvements
The following lists the accessibility improvements addressed in this release:
- Accessibility - Login Page - Accessibility - Skip Link - Icons - Improved Visual Contrast and Inclusivity - Accessibility - Toast Messages - Banner - UX Styling Updates
Accessibility - Login Page


Accessibility - Skip Link
A skip (navigation) link provides a way for users of assistive technology to skip what can often be many navigation links. A skip link provides an accessibility structure that allows users to have immediate access to pertinent content.


NOTE In the context of Clarity, the skip link navigates the user directly to the grid and focuses on the "+" button.


Icons - Improved Visual Contrast and Inclusivity


Accessibility - Toast Messages


Banner - UX Styling Updates


Clarity 15.9.2: Changes to the Visual Design
The following sections include images that indicate changes to the design and appearance of the supported components to meet the visual design aspect. - Accessibility - Toast Messages - Accessibility - Color Picker - Accessibility - Icons - Banner - Styling - Grid Column Panel - Expand and Collapse All
Accessibility - Toast Messages


Accessibility - Color Picker Accessibility - Icons

Clarity - 16.4.1 196


Banner - Styling Grid Column Panel - Expand and Collapse All


Keyboard Shortcuts
This page covers the following topics:
- Clarity Timesheet Navigation - Screen Reader Keyboard Shortcuts - Keyboard Shortcuts for Clarity Grid Navigation
- Repositioning Widgets Using the Keyboard - Configure Safari To Move Around a Web Page Using Tab - Keyboard Shortcuts and Gestures in Safari Related to Tab and Option-Tab
Clarity Timesheet Navigation
01. My Timesheet Tab in Read Mode


02. My Timesheet Tab in Edit Mode


03. Timesheets Tab

Clarity - 16.4.1 199


Screen Reader Keyboard Shortcuts - Timesheets
NOTE
Some of the key points to remember are:
- Screen readers provide convenience shortcuts for tables when semantic elements are used. - From a technical point of view, Clarity's My Timesheet grid contains significant functional density and does
not incorporate semantic elements: - The use of semantic elements limits Clarity's ability to meet robust functional requirements. - As an alternative, when using screen readers with Clarity's My Timesheet, users should consider leveraging Clarity's supported grid keyboard shortcuts.
Here is the screen reader key combination list:

Screen Reader Key Combination Shift + T Ctrl + Alt +  Ctrl + Alt +  Ctrl + Alt +  Ctrl + Alt +  Ctrl + Alt + Home Ctrl + Alt + End Ctrl + Alt + Num Pad 5 Ctrl + Alt + Shift +  Ctrl + Alt + Shift +  Ctrl + Alt + Shift +  Ctrl + Alt + Shift +

JAWS
Next (previous) Table Move cell right Move cell left Move cell down Move cell up First cell Last cell Say current cell Last cell in row First cell in row Last cell in column First cell in column

NVDA
Next (previous) Table Move cell right Move cell left Move cell down Move cell up N/A N/A N/A N/A N/A N/A N/A

Clarity 16.2.2 and Higher
Supported Supported Supported Supported Supported Supported Supported Supported Supported Supported Supported Supported

Screen Reader Keyboard Shortcuts Screen Reader Keyboard Shortcuts for: - Basics - Reading Text - Forms - Other Commands
Basics

Reading

Topic

Activate

Task

Stop reading

Control

Start reading continuously from this point on

Insert +

Read next item


Read next focusable item (e.g., link, button) Tab

Link

Enter

Command


Headings

Topic

Landmarks Main Elements list
Tables
Lists
Graphics Links

Navigate

Virtual PC Cursor Go backward
Dropdown List in the Action Menu Button (Screen Reader OFF)

Dropdown List in the Action Menu Button (Screen Reader ON)

Task

Command

Button

Enter or Space Bar

Go to the next heading

H

Show list of all headings

Insert + F6

Go to the next heading of level [1-6]

1-6

Go to the next landmark/region

R

Go to the main content region

Q

Show a list of all buttons, frames, graphics, Insert + F3 lists, links, etc.

Go to the next table

T

Navigate table cells

Ctrl + Alt +  or  or  or

Go to the next list

L

Go to the next list item

I

Go to the next graphic

G

List all links

Insert + F7

Go to next unvisited link

U

Go to next visited link

V

Toggle between: Radio buttons, <select> list items, Tabs (ARIA widget), Tree view items (ARIA widget), Menu items (ARIA widget)

 or  or  or

Toggle Virtual PC Cursor

Insert + Z

To previous heading, landmark, table, focusable item, etc.

Shift + [H, R, T, Tab, etc.]

Dropdown list renders

ENTER

Navigate through the list Select an option in the list Exit the dropdown list (upon exit, the focus remains on the Action Menu Button) Exit the dropdown menu

 or  ENTER ESC
Press the ESC key TWICE

Reading Text

Topic Line

Say prior line Say next line Say current line Say to cursor

Task

Command   Insert +  Insert + Home


Character

Topic

Word Sentence Spelling

Fast forward

Task
Say from cursor Say prior character Say next character Say character Say character phonetically Say prior word Say next word Say word Say prior sentence Say next sentence Say current sentence Spell word Spell current line Spell to cursor Spell from cursor Forward during a say all Rewind during a say all

Command Insert + Page Up   Numpad 5 Numpad 5 twice quickly Insert +  Insert +  Insert + Numpad 5 Alt +  Alt +  Alt + Numpad 5 Insert + Numpad 5 twice quickly Insert +  twice quickly Insert + Home twice quickly Insert + Page Up twice quickly

Forms

Form elements Navigate

Topic

Checkboxes Combo boxes (<select>)
Radio buttons Forms mode*

Task
List all form elements Next focusable item Next form field Next button Next checkbox Select and deselect Open combo box Browse/select options Select multiple options Toggle selection Enter forms mode Exit forms mode (enter browse mode)

Command
Insert + F5 Tab F B X Space Bar or Enter Alt +   or the First letter Shift +  (or ) /  Enter (when the focus is on a form field) Numpad Plus (+)
- "Forms mode" allows you to enter data into form fields. Browse mode allows you to navigate the page using standard screen reader shortcuts (e.g. to navigate headings, landmarks, links, etc.)


Other Commands

Task

Search for a word or a phrase
Refresh Screen, i.e., repaints all the currently displayed items on the screen
Reformat documents, i.e., reformats multiple column pages to be more readable with speech.
Help with the current element

Ctrl + F Insert + Esc
Insert + F5
Insert + F1

Keyboard Shortcuts for Clarity Grid Navigation

Command


Navigation In general, use the arrow keys (   ) to move focus up, down, left, and right within the grid.

Shortcuts

Task Move directly to the far-left cell Move directly to the far-right cell Move directly to the bottom cell Move directly to the top cell

Ctrl +  Ctrl +  Ctrl +  Ctrl +

Command

Cell Editing In general, pressing the Enter key on a cell will put the cell into edit mode if editing is allowed on the cell.

Row Selection
- Pressing the Space key on a cell will select the cell's row or deselect the row if it has already been selected. - If multi-select is enabled, the selection will not remove any previous selections.

Column Resizing
Follow these steps:
1. Place focus on the column header cell of the grid. 2. Use the following keyboard shortcuts to expand or reduce the column width:
- Mac: Option +  /  - Windows: Alt +  /
NOTE Certain Windows environments require Alt + Shift +  /  instead of Alt +  / .


Column Sorting
- Single Column - With a focus on a column header cell, use either  or  to move focus to the desired position in the column header row and use Enter key to sort the column.
- Multiple columns - Repeat the steps above, focus on a second column header, and then press SHIFT + Enter to toggle multi-sort for that column.

Column Menu The keys used in the Hamburger/Column Menu are:

Sl.No. 01. 02. 03. 04. 05. 06. 07. 08.

Keys Ctrl+Shift+Enter Tab Shift+Tab Ctrl+Enter  or   or  Esc Spacebar

Tasks Select the column menu from the column header Navigate to the next focusable item Move focus backward through the focusable items Open the menu for the focused header Move focus to the desired position within the column header row Select the next tab in the column menu when the focus is on the menu Close the column menu Select/Deselect the currently focused item in the list

TIP To learn more about Screen Reader Keyboard Shortcuts and Grid Navigation, please refer the links: - Basic Keyboard Shortcuts - Grid Navigation - Keyboard Shortcuts Repositioning Widgets Using the Keyboard Customize your workspace by reordering widgets within the Widget Tray using keyboard shortcuts.

By default, your screen reader operates in Browse Mode (Virtual Cursor Mode). When focus moves to an interactive component, switch to Form Mode (Focus/Interaction Mode) to allow the application to receive and process keyboard shortcuts.
1. Enable Form Mode Before repositioning a widget, ensure you are in Form Mode.
- Mac: Press Control + Option + Shift +  - Windows: Press Insert + Space 2. Reposition Widgets Use Tab to move focus to the desired widget in the Widget Tray. With the widget in focus, use the following keyboard shortcuts to reposition it:

Operating System Mac Windows

Move Left Command +  Ctrl +

Move Right Command +  Ctrl +

NOTE The widget moves one position per key press. When the widget reaches the far-left or far-right edge of the tray, it stops moving because it has reached the boundary of the container.

Configure Safari To Move Around a Web Page Using Tab
Follow these steps:
1. Open Safari on your Mac. 2. Navigate to Safari, Settings and click the Advanced tab. 3. Check Press Tab to highlight each item on a webpage.

IMPORTANT If you press Option-Tab, you can only select the text fields and pop-up menus. 4. Close Settings.


Keyboard Shortcuts and Gestures in Safari Related to Tab and Option-Tab Current Web Pages


Action Highlight the next field or pop-up menu on a web page
Highlight the next field, pop-up menu or clickable item (such as a link) on a web page

Shortcut or gesture
Tab Tab also highlights buttons and other controls if Keyboard Navigation is turned on in Keyboard settings.
Option-Tab Option-Tab also highlights buttons and other controls if Keyboard Navigation is turned on in Keyboard settings. To swap the behavior of Tab and Option-Tab, turn on Press Tab to highlight each item on a web page in the Advanced pane of Safari settings.

TIP
To learn more about Keyboard shortcuts and gestures in Safari on Mac, please refer the Keyboard and other shortcuts link.

Accessibility Features in Classic PPM
- Configure User Accessibility Options for Classic PPM - Usability Enhancements Available in Release 15.5.1 - Display - Sound - Keyboard - Mouse - Chart Colors
We are committed to addressing user accessibility (Section 508) in the development of our products and documentation to help all customers accomplish vital business tasks. Classic PPM provides user accessibility features including support for screen readers, high contrast mode, and keyboard shortcuts.
NOTE
The following information applies to the Classic PPM user interface (Classic PPM ) as seen on Windows and Apple computers. Java applications on other host operating systems might already have assistive technologies available to them. For these existing assistive technologies to provide access to programs written in JPL, they need a bridge between themselves in their native environments and the Java Accessibility support that is available in the Java virtual machine (or Java VM). This bridge has one end in the Java VM and the other on the native platform. Each bridged platform varies including JPL, Windows, and Apple OS.

Configure User Accessibility Options for Classic PPM
To enable accessibility options, contact your administrator. As an administrator, you can enable the UI optimization setting for screen readers for a specific user. You can also set their UI theme to High Contrast. By default, these options are not activated for users.
Follow these steps:
1. Click Administration, Organization and Access, Resources. 2. Click the name of a resource. 3. Select the appropriate Accessibility checkboxes:
- Screen Reader Optimized UI Determines whether the user interface is optimized so that a screen reader can better recognize the features. Select this check box for any visually impaired user who is using a screen reader. Verify that the screen reader software is running on the user's computer.
- High Contrast Color Mode Determines whether a specific UI theme to assist color-deficient users is used. If selected, the user sees the High Contrast UI theme.
4. Save your changes. 5. If the user is logged in to Classic PPM, instruct the user to log out and log back in.
Usability Enhancements Available in Release 15.5.1 In this release, the following enhancements identified by a gap assessment, are available: - JAWS and other screen reader technologies can identify the expand or collapse state of user interface controls. A
common example is the expandable filter section above list and chart portlets.
Display To increase visibility on your computer or device screen, you can adjust the following display options: - Font style, color, and size of items: Defines font color, size, and other visual combinations. - Screen resolution: Defines the pixel count to enlarge objects on the screen. - Cursor width and blink rate: Defines the cursor width or blink rate, which makes the cursor easier to find or minimize
its blinking. - Icon size: Defines the size of icons. You can make icons larger for visibility or smaller for increased screen space. - High contrast schemes: Defines color combinations. You can select colors that are easier to see.
Sound Use sound as a visual alternative or to make computer events easier to distinguish. You can adjust the following options: - Volume: Sets the computer sound volume up or down. - Text-to-Speech: Sets the computer hear command and text read aloud options. - Warnings: Defines visual warnings. - Notices: Defines the aural or visual cues when accessibility features are turned on or off. - Schemes: Associates computer sounds with specific system events. - Captions: Displays captions for speech and sounds.
Keyboard You can make the following keyboard adjustments: - Repeat Rate: Defines how quickly a character repeats when a key is struck. - Tones: Defines tones when pressing certain keys. - Sticky Keys: Defines the modifier key, such as Shift, Ctrl, Alt, or the Windows Logo key, for shortcut key combinations.
Sticky keys remain active until another key is pressed. You can also save time by using keyboard shortcuts to invoke the most common supported commands.


Keyboard Shortcuts: Common to Most Pages The following table shows the keyboard shortcuts for basic features available on most application pages:

Home Menu Administration Menu Favorites Menu Back Home Page Refresh Search History Help Cut Copy Paste

Feature

Key Combination
Ctrl+Alt+H Ctrl+Alt+A Ctrl+Alt+F Ctrl+Alt+B or Alt+Left Arrow Ctrl+Alt+Home Ctrl+Alt+F5 Ctrl+Alt+S Ctrl+Alt+V F1 Ctrl+X Ctrl+C Ctrl+V

Keyboard Shortcuts: Actions The following table shows keyboard shortcuts for actions on pages:

Action Activate a field editor (for example, a date picker). Close a popup. Open a tab menu. Move left, right, up, or down in a menu.
Select a highlighted menu item. Open a link in a list page. Select or clear a check box. Note: Focus must be on the check box. Expand a hierarchical list. Note: Focus must be on the + in the hierarchical list.

Key Combination Enter or Alt+Enter Esc or Shift+Esc Enter or Alt+Enter Left Arrow or Alt+Up Arrow Right Arrow or Alt+Down Arrow Up Arrow or Alt+Up Arrow Down Arrow or Alt+Down Arrow Enter or Alt+Enter Ctrl+Enter Space Bar
Space Bar


Keyboard Shortcuts: Lists The following table shows the keyboard shortcuts for lists:


Action
Switch between edit and display mode in a Display, Edit list. Move from cell to cell through a list (grid). Display

Mode

Move to different areas within a list: portlet Display icons, column headers, body of list, buttons.

Switch to display mode.

Edit

Move left or right within a cell.

Edit

Move from cell to cell.

Edit

Move to the end of a row.

Edit

Note: If the action is on a TSV row, repeat

the keyboard combination to leave the TSV

section.

Move to the beginning of a row.

Edit

Page up or down.

Display, Edit

Move to the top or bottom of a list.
Note: If the action is in a TSV cell, repeat the keyboard combination to leave the TSV section.

Display, Edit

Open a drop-down list or a date selector. Edit

Move through selection items in a drop- Edit down.

Select a highlighted value in a drop-down or Edit a date selector.

Highlight a date in a date selector.

Edit

Add a line in a long text area.

Edit

Enter

Keyboard Combination

Left Arrow Right Arrow Up Arrow Down Arrow Tab (Forward) Shift+Tab (Back) Esc or Enter Left Arrow Right Arrow Tab (Forward) Shift+Tab (Back) Ctrl+Right Arrow

Ctrl+Left Arrow Ctrl+Alt+Up Arrow Ctrl+Alt+Down Arrow Ctrl+Up Arrow Ctrl+Down Arrow
Enter Up Arrow Down Arrow Enter
Down Arrow Ctrl+Enter

Keyboard Shortcuts: Time-Scaled Value Cells The following table shows the keyboard shortcuts for time-scaled value cells in a list:

Select a TSV row. Select a TSV column.

Action

Key Combination Shift+Ctrl+Right Arrow Shift+Ctrl+Down Arrow


Action Select a single cell to the left or right of the current cell.
Select a single row above or below the current cell.
Cut a TSV cell. Copy a TSV cell. Paste a TSV cell. Undo a cut, copy, or paste operation. Copy from Excel and Paste to a TSV cell.

Shift+Right Arrow Shift+Left Arrow Shift+Up Arrow Shift+Down Arrow Ctrl+X Ctrl+C Ctrl+V Ctrl+Z Ctrl+C and Ctrl+V

Key Combination

Mouse You can use the following options to make your mouse faster and easier to use:
- Click Speed: Defines how fast to click the mouse button to make a selection. - Click Lock: Sets the mouse to highlight or drag without holding down the mouse button. - Reverse Action: Sets the reverse function that is controlled by the left and right mouse keys. - Blink Rate: Defines how fast the cursor blinks or if it blinks at all. - Pointer Options: Allows you to set the following options:
- Hide the pointer while typing - Show the location of the pointer - Set the speed that the pointer moves on the screen - Choose the pointer size and color for increased visibility - Move the pointer to a default location in a dialog
NOTE More Information: - Personalize Clarity: Change Password, Account Settings, Notifications, Export to Excel - VPAT Report.
Chart Colors Classic PPM charts include 19 colors. The following image shows the HEX and RGB values for the colors.


Modification Policy
This modification policy letter describes the difference between Classic PPM product configurations and customizations and the scope of technical support regarding both.
NOTE This policy applies to all active releases of Classic PPM On-Premise and Classic PPM SaaS including 15.x, 14.x, 13.x, and older releases.
Configurations Configurations are the use of documented features to modify the behavior of the as-shipped product. Examples of documented features you can use to create configurations are: process flows, Studio portlets, and XOG integrations. Documented features are supported by CA, but the related configurations themselves are not. For example, the Studio feature used to build a graph portlet is supported, but the particulars of the underlying NSQL code to supply data to the portlet is not. In these situations, Broadcom will verify that documented features are operating as expected, given the specific configuration change, but Broadcom will not troubleshoot the configuration itself. In addition to NSQL, other examples of configuration changes not supported are GEL scripts, changes made to the Business Objects universes, domains, or reporting attributes, and custom XOG integrations, which may/may not result in performance issues. Broadcom will work with the customer to isolate problems experienced when using documented features to confirm that they are a result of incorrectly performing product features (and not incorrectly designed or implemented configurations).
Customizations Customizations are the use of undocumented means to modify product behavior. Examples of customizations include database schema additions, triggers, and code modifications. All code customizations should be prefixed with Z_ to assist both the customer and Broadcom identify where customizations exist in the system. The customer should understand that, whereas configurations will upgrade from version to version with the modifications intact (insofar as they are still valid in the new version), customizations will not. Customizations must be at least reapplied to upgraded systems and, in many cases, may need to be redesigned and re-implemented to work with changing product functionality. Broadcom will support a customized system excluding only the portions that are directly impacted by the customizations. Support will commonly ask the customer to remove customization for diagnostic reasons when it is potentially contributing to, or obscuring, the product issue being diagnosed. The customer must comply with this request to receive product support.

Broadcom may, at its discretion, review customizations and may recommend alternatives; in some cases, Support may inform the customer that they will not support the system at all if that customization is used. Customizations are not accepted in Clarity Software-as-a-Service (SaaS) environments under any circumstances.
Modification Guidelines To reduce the risk of CA denying support for a particular problem caused by modifications, apply the following guidelines: - Do not add fields to stock database tables. Instead, create new tables to hold custom data that can be joined with the
stock table. - Direct access to stock tables should be read-only; to update stock tables, use the XOG capabilities. - Triggers should fire conditionally, and the conditions should be uncommon. Triggers should only read stock data. They
should be simple and be written to avoid deadlocks. Triggers should be disabled during upgrades. - All custom database objects should be removed prior to product upgrades and then added back afterwards. - Do not modify source code, including Java, XML, XSL, XBL, PMD, and all other such system files provided with the
product.
Clarity SaaS Service Description
NOTE This service description applies to all active releases of Clarity SaaS. Clarity SaaS is a web-based service that provides subscribers with access to the market-leading project and portfolio management system. - Service Delivery Standards - Security - Data Management - Application - Upgrade - Integration - Customizations
Service Delivery Standards
Compliance The components of Clarity SaaS are compliant with various standards as follows: - SSAE 18 compliant: Clarity SaaS is subject to an annual SSAE 18 compliance audit. The resulting Service
Organization Controls (SOC) Report includes the auditor's opinion on the fairness of the presentation of the Broadcom description of controls that have been placed in operation and the suitability of the design of the controls to achieve the specified control objectives and the auditor's opinion on whether the specific controls were operating effectively during the period under review. To view Broadcom SaaS Audits and Compliance Reports, see Compliance Audit Reports. Statement on Standards for Attestation Engagements (SSAE) No. 18, Reporting on Controls at a Service Organization, was finalized by the Auditing Standards Board of the American Institute of Certified Public Accountants (AICPA) in May 2017. SSAE 18 effectively replaces SSAE 16 as the authoritative guidance for reporting on service organizations. - Section 508: The nature and extent to which Clarity application enables compliance with the requirements of Section 508 of the Rehabilitation Act of 1973 are detailed in our Voluntary Product Accessibility Template, available at the end of the Clarity Accessibility section on Broadcom documentation site.

Availability and Monitoring:
- Continuous monitoring of all service components (infrastructure and application) is deployed to proactively identify any component or service trending towards failure or approaching capacity. - Best-of-breed monitoring solutions are deployed. - Supplemented with vendor-specific diagnostic tools where appropriate.
- 24x7 staffed network operation centre (NOC) to analyze and respond to automated monitoring alerts.
Performance:
Service response times are analyzed and archived daily. This data is used to identify clients that require detailed performance reviews.
Upon review of performance data or notification from the client of performance concerns, Broadcom will:
- Work with the client and perform a detailed user by user, feature by feature review to determine any areas of concern. - Work with the client to optimize their configuration. - Work with the client to identify any issues within their network or ISP. - Should additional infrastructure be required to meet the customer's subscription levels, Broadcom will provide as part
of the service.
Support:
Clarity SaaS includes standard 24x7x365 support for critical incidents. The welcome email sent to current Clarity SaaS customers providing service URLs contains information on how to obtain a Broadcom Support login. This login can be used to obtain support for any issues or service related questions. The following web sites provide access to detailed information on Clarity Clarity SaaS:
- Support Knowledge Base: Links to user documentation, support policies, and a knowledge base of documents related to the service.
- Documentation: Access to the product documentation. - SaaS Resource Center: Links to current SaaS specific policies and SaaS listings providing current delivery standards
for Broadcom SaaS offerings. - Communities Site: Post questions, share ideas and information regarding upgrades on Clarity SaaS, in general.
Maintenance:
Maintenance falls into three categories:
- Monthly: Our monthly production maintenance calendar is published at least 30 days or more in advance and the maintenance windows normally occur the second Saturday of each month. Production maintenance windows are scheduled during local, data centre non-business hours. Service interruptions and/or performance degradation may be noted during these windows and accordingly all jobs and interfaces should be paused and no critical activities planned during these windows. There is limited client input over these scheduled windows as the infrastructure and operating system level maintenance that is performed during these periods may impact multiple or all clients. A reminder notification will be sent 7-10 days prior to these maintenance windows.
- Emergency or Critical Scheduled: Periodically, an emergency or critical scheduled maintenance involving security or system stability may be required. Minimum 72-hour notice for expected downtime will be provided to customers for these activities. Broadcom will provide reasonable accommodations for business needs for these types of maintenance periods where possible.
- Unplanned: Unplanned: Unplanned downtime is any loss of production system availability that is not noticed more than 72 hours in advance and initiated by Broadcom. These downtimes are generally system fault type issues but can also be proactive emergency maintenance performed to prevent a system failure from occurring. Notices will be sent as soon as the maintenance is scheduled or Broadcom's monitoring process has determined a client's system is unavailable. These types of downtime count against the client's uptime SLA and, therefore, are infrequent.

Security Broadcom SaaS implements a defence-in-depth approach to the security of our environments which mitigates the impact of any one vulnerability. We leverage strong authentication, privileged access management, vulnerability and patch management, segmentation, and security monitoring to prevent or detect any malicious activity.
Security Framework Broadcom SaaS continuously improves the security framework by doing the following: - Risk management drives policy creation - Policy shapes architecture - Architecture drives engineering solutions - Solutions are sustained by operations and administration. - Operations and administration efforts are monitored for performance and compliance (depending on risk) - Performance/compliance test results drive policy improvements
Architectural Security - Auditing: Clarity SaaS security architecture is comprised of controls and security measures across the facility,
network, and server infrastructure which are audited annually under SSAE18 standards. Refer to the previous Certification and Compliance section for further SSAE18 details. - Encryption: All web traffic is protected by SHA256 bit TLS 1.2 or higher encryption and 2048 bit RSA public keys. The Clarity SaaS application encrypts user session data. Clarity SaaS email services support opportunistic TLS encryption. - Load Balancers: All internet traffic is terminated at a load balancer. - Software: A suite of security software components are deployed including threat management, SIEM, IDS, and antivirus to provide server security. - Firewalls: In addition, "stateful" inspection firewalls are in place; these firewalls deny by default all incoming traffic, analyze it, and prevent standard internet attacks. Application servers are located in a demilitarized zone (DMZ), which is separated from the service database servers by a firewall. Only the necessary ports are opened between the DMZ and the internal trusted network. - SQL Injections and XSS: The application manages illegal SQL injections by enforcing content-validation rules and Web use prepared statements exclusive to the application itself almost exclusively in Clarity application. Clarity also enforces XSS user input validation and XSS user input restrictions.
Security Scans Broadcom contracts with an independent, third-party vendor to evaluate and validate the security of our service on an ongoing basis. Critical and high risks are identified, validated, and remediated before production systems are made available. Medium risks are evaluated and resolved on a priority basis. Ongoing scans are performed to ensure that no new risks have been introduced. Two types of scans are performed: - Vulnerability Scans: Vulnerability tests are performed weekly in the production system. Patches and updates are
scanned prior to deployment to production - Penetration Scans: Penetration tests are performed upon significant service updates but no less than annually.
Application Security and User Management - Data integrity: Clarity Clarity SaaS customers are deployed in a stateless application environment. With failover at
the application tier, the application data model is designed to guarantee data integrity by modelling data transactions

into transaction units that are saved (committed) to the database in one batch. In the event a database instance goes offline, the pending transactions resume once the database is restored. - Data segregation: Customer data is segregated in separate databases schemas that may reside on the same physical database server. All customer configurations and customer data are stored in the database. - Authentication: Customer may utilize the standard Multi-Factor Authentication (MFA) utilizing a username, password, and a selected factor (email, SMS, soft token, or push to a smart device. Optionally a federated single sign-on (FedSSO) authentication is available for customers with the capability of producing SAML authentication packages; refer to the Integration section for more details. Federated SSO allows for greater customer control for authentication rules. - Authorization: Within the Clarity SaaS application, individual rights/roles/groups can be used to secure application functionality and data records. Additionally, standard audit trail functionality can be configured for most objects and attributes to capture creation, edits, and deletions of selected data records or attributes.
Session Management The Clarity SaaS service uses a session-based cookie that carries a token for accessing the session data that is transient in the cache (for a single application environment), or in the database (for a clustered environment). The only data that is kept in the cookie is the authentication token, which is a value in the database. Session data that is keyed off the cookie includes the user's profile (username, language choice, locale choice, and time zone), global access rights of the user, and other shopping cart-like data.
Data Center Security Broadcom contracts with world-class data centres that provide multiple levels of security to protect customer information. This protection includes physical and logical security measures.
PHYSICAL SECURITY All data centres have highly restricted access and use the following physical security measures: - Systems and Monitoring: Secure perimeter defence systems, comprehensive camera coverage, biometric
authentication, and a 24/7 guard staff is utilized to ensure a secure environment. - Access: No public visitor access is permitted. Data centres enforce strict access and security policy and ensure the
staff is fully trained. All-access is logged for audit purposes and retained for no less than one year. - Testing: Security teams run year-round testing to ensure that teams are always prepared to respond to any situation. - Risk Management: A robust enterprise risk management program is in place to proactively assess and mitigate any
risks to the data centres.
LOGICAL SECURITY The following security methods are employed:
- Hacker Monitoring: Systems are monitored 24x7x365 by an enterprise network intrusion detection solution (IDS). Audit logs are sent to a centralized log system and are continually reviewed to ensure that there is no unusual activity by a SIEM solution.
- Virus Protection: All Broadcom SaaS servers are protected by commercial Anti-Virus/Anti-Malware software. The environment undergoes regular vulnerability scans to protect against both internal and external network threats. Files being uploaded to the service are scanned for threats before being saved. Signatures are updated hourly.
- Ports: Only specific ports are opened for data traffic. Application data, including interface data, is directed through port 443.
- Application Security: During the development, QA, and deployment stages, the application undergoes security review and testing.
- Server Hardening: All servers are hardened in accordance with industry best practices. By running only the necessary services, Broadcom reduces its exposure to operating-system-level security issues. Servers undergo weekly vulnerabilities scans and standard quarterly maintenance.
- Server Patching: Security patches are applied monthly and critical patches are applied within 72 hours. - Segregated Customer Data: Data is currently segregated within dedicated schema instance and security is enforced
at the database level so that no cross schema access is available. Customers do not have logical access to database servers. - Protection Controls: Unauthorized access to servers and changes to the operating system are monitored. - Data Sanitization: Data storage and processing devices are sanitized or securely destroyed per DoD standards when the hardware is retired or otherwise removed from the data centre. Customer data is only stored on-network data storage, so there is no process necessary for removable media (for example, tape, USB, CD, DVD.
Data Management
Broadcom SaaS performs daily backups of all customer data and configurations to create service recovery points. These recovery points can be utilized, along with additional client requested recovery points, to restore the service to a previous state upon client request.
Service Backup and Restore
Service backups are managed as follows:
- Recurring backups: A recovery point is automatically generated every 24 hours and consists of a full backup of all customer data and configuration.
- Retention period: Recurring backups are retained for 7 days. Backups past the retention period are programmatically deleted.
- Storage policies: - Backups reside only on network storage within an authorized Broadcom data centre - Removable media is not used to store backup files - Backup copies cannot be provided to customers or other third parties
- Customer defined recovery points: Customers may define additional recovery points as needed. Customer defined recovery points can be retained for as long as required; the standard retention periods for these recovery points, in days, are 30, 60, or 90. Broadcom will maintain up to 5 customers defined recovery points in addition to the recurring backups defined above.
- Customer restore requests: Customers may request a restore to any recovery point within the retention period or any available customer-defined recovery point. All restore requests are processed as a complete environmental restore; restores of selective data instances cannot be requested as part of the standard service. When a customer requests a recovery, the restored system will be unavailable for a predetermined amount of time, which will be communicated to the customer.

Non-Production Data Refresh
Customers may periodically request that current production data and configuration be refreshed to one or more of their non-production sandbox instances via a ticketed support request. As with restore requests, refreshes are processed as a complete environmental restore and the target non-production system(s) will be unavailable for a predetermined amount of time, which will be communicated to the customer.
JasperSoft Reporting Content
JasperSoft content backups are restored to customer instances only in the event of a system recovery due to failure or disaster recovery event. Broadcom does not routinely update JasperSoft content as part of restore or refresh requests. JasperSoft content migration can be performed in a self-service manager. To learn more, see Export Import or Migrate Advanced Reporting Content.
SFTP Data Storage and Retention
SFTP folders are supported to temporarily store XML files or other flat file formats when exchanging data into and out of the service. Files stored in SFTP folders are not covered under the service backup and disaster recovery policies, therefore, only derived data that can be recreated should be stored in these folders. Clients are responsible for archiving files once they have been processed and deleting them.
Broadcom may delete any file that is stored in an SFTP folder and is older than 30 days or to reduce the amount of storage utilized to conform to the limit specified in the Service Listing.
Disaster Recovery and Business Continuity
In a force majeure event that results in a disaster being declared by Broadcom, Broadcom SaaS will recover the service to a cold standby, alternate data centre with a replicated copy of production data and configuration. See the regional SaaS listing for Recovery Point and Recovery Time Objectives.
For most hardware or software failure recovery scenarios, minimal or no customer action is required. Because of high availability and redundancy, there should be zero loss of data in these scenarios, but in rare cases, data may be lost up to the last available recovery point. Broadcom SaaS uses all commercially reasonable efforts to recover from any system failure.
Data Delivery at Termination
As noted above, ongoing client data retrieval is provided for via a web-based user interface (including reports and dashboards) or WSDL-based API's. Terminating clients have the following options to receive their data: - API data extractions via HTTPS producing XML formatted flat files. See the user guide XOG Developer Guide for technical details. - Database dump file containing only tables with client data. - Database data pump generated file of the client's entire Clarity database schema. This option requires a valid, Clarity on-premise license.
Application
Clarity SaaS is based on a J2EE application and has the following architectural details:
- To ensure high performance and availability, the application runs on multiple Apache Tomcat application servers connecting to back-end databases.
- The application utilizes load balancing between a minimum of two Linux application containers using hardware-based SSL acceleration.
- The underlying J2EE application server controls web, integration, business logic and persistence services providing common application functions such as caching, security, globalization, configuration, and workflow.
- The service is accessed through a secure web interface. - Customers are deployed in a stateless application. With failover at the application tier, the data model is designed
to guarantee data integrity. Data transactions are modelled into transaction units that are saved (or committed) to

the database in one batch. In the event a database instance goes offline, the pending transactions resume once the database is restored. - The application limits the number of network resources consumed by compressing the data sent to the browser from the server using Java compression functionality. The browser can then uncompress the data stream using built-in gzip functionality.
Data Integrity and Management
Data between the client and database may be interrupted when an application server fails and the session is lost. Transactions complete if they are submitted before the application server goes down. If the database goes offline, the transactions complete once the database is restarted. The Clarity SaaS application data model was designed to guarantee data integrity by modelling data transactions into transaction units that are saved (committed) to the database in one batch. All jobs and tasks that were cut off during the failure resume once the servers are activated.
Client Access
User access to Clarity SaaS requires only a supported web browser as noted in the current release notes. Depending on processing requirements, there are additional client workstation technologies that customers can use:
- XML Open Gateway (XOG): A Clarity Web service used for data import and export between external systems and Clarity SaaS via HTTPS. Direct WSDL calls may also be initiated to service using a client developed SOAP call.
- REST APIs: Web-based and interactive API documentation to execute API commands against a Clarity instance. - Microsoft Project/Open Workbench: These scheduling tools allow for a two-way interface of project plan data that is
created or edited offline and subsequently uploaded to Clarity SaaS.
Direct access to Broadcom SaaS environment servers using a VPN, remote desktop, or any other connection method is not permitted.
Upgrade
New product releases that deliver key features are released every quater. Patches are released approximately monthly or as needed for the remediation of identified defects and vulnerabilities. Scheduled dates for new service versions and patches are published well in advance to provide clients adequate time to plan.
Technical upgrades to Clarity SaaS are included as part of the base subscription. For details of the upgrade process, see Clarity SaaS Upgrade Guide.
Upgrade Policies - Service Versions: All Clarity SaaS subscribers are required to be running the current version of the service. Before
the published release date, clients will receive notification of their assigned upgrade dates giving them at least 30 days notice for their production upgrade. Critical, blocking issues discovered during non-production upgrade testing will be triaged via the support process to provide a patch prior to upgrading the production instance. New versions may include new or altered functionality which may require clients utilizing that functionality to execute their change management process. Clients are responsible for testing their business processes prior to each of their assigned production upgrade dates. - Patches: Patches: are applied, as required, to resolve identified issues. Clients that have reported issues that a patch resolves will be scheduled to receive the patch. In the case of a critical security or stability issue, patches may be required for all clients. The same notification and issue resolution policies for version upgrades apply to patch application.
Integration
The Broadcom approach to integration is through the supply of an integration toolkit that enables field integrations to be performed easily. This toolkit consists of the RESTful APIs, XOG XML Web Services interface and GEL Scripting

capabilities of the process management functionality. Clients may build integrations themselves, engage Broadcom Service partners to build integrations for them, or deploy any of the standard integrations described in the user guides; the work to build, deploy, or configure integrations is not part of the Clarity SaaS subscription. The following are the different integration methodologies provided:
- Simple Object Access Protocol (SOAP) and WSDL - XML Open Gateway (XOG) client - REST APIs - SFTP drop-off/pickup combined with GEL (Generic Execution Language) enabled processes - SAML 2.0 Federated single sign-on (user authentication)
NOTE Note: The option to utilize SFTP is intended to support legacy integrations where the use of a direct integration method such as WSDL via HTTPS is not possible. Where possible, direct integration is the preferred method.
Customizations Broadcom SaaS solutions are delivered as a standardized service. This standardization allows Broadcom to deliver highquality services in a repeatable and cost-effective manner. To achieve this standardization, certain design principles are enforced to limit customization that may cause instabilities in the delivery of the service. Allowing only supported configurations ensures the security, stability, and maintainability of the service for all clients.
Application Customizations Customization of the Clarity application layer or alterations/insertions of any files on the application servers is not compatible with Clarity. Clarity leverages a uniform code base and, therefore, cannot support application customization. Customization under this policy includes, but is not limited to, the following:
- Custom Java code - Alterations to the base Clarity code set including XSL and JAVA files - Placement of a parameter or any other file into the directory structure of a server.
Database Customizations Customization of the Clarity database schema is not permitted. However, Clarity SaaS solution allows and supports all configurations done through Clarity Studio. Prohibited customizations under this policy include, but are not limited to the following:
- Triggers - Stored procedures - Custom tables or schemas - Functions
Clarity SaaS Upgrade
- SaaS Upgrade Process - Other Service Changes and Considerations - Frequently Asked Questions - SaaS Upgrade Responsibilities Overview This section provides information about the upgrade process, planning considerations, and service changes. Review the following documents to prepare for the upgrade:
- Release Notes: Describes new enhancements, changes to third-party software support, and other information specific to the release
- Change Impact and Upgrade Guide: Provides technical information specific to the release and highlights user actions. Also provides insights for the upgrade, training, and roll-out efforts.
You can post questions, share ideas, and information regarding upgrades on Clarity Community.
Contents
- SaaS Upgrade Process - Other Service Changes and Considerations - Frequently Asked Questions (FAQ) - Responsibilities Overview - SaaS Upgrade Checklist

SaaS Upgrade Process Let's look at the average timeline and high-level process to complete an upgrade.

Week 1

Week 2

Week 3
- Non-production upgrade
- Customer testing continues - Overall testing is completed

begins
- Bottleneck issues are

and any issues are resolved
- Broadcom validation testing

reported and resolved
- Production upgrade
- Customer testing

schedule is confirmed
- Process and Best Practices for Upgrades - Non-Production Validation - Production Upgrade

Process and Best Practices for Upgrades
- Configuration Stability During Upgrade Cycle - Non-Production Environment Refreshes - Testing and Issue Remediation Duration

Configuration Stability During Upgrade Cycle
A stable configuration is recommended during the upgrade cycle to minimize risk and adhere to best practices. Prior to the upgrade cycle, complete all the configuration changes and migrate to the production environment. It is recommended you don't make significant configuration changes to the production system during the upgrade cycle.
NOTE Any significant configuration change during the upgrade cycle may result in unexpected issues in the production environment.
Non-Production Environment Refreshes
You can upgrade the non-production environments using existing data. In order to minimize risk and ensure a successful production upgrade, it is recommended that your organization creates a support ticket and requests the production data to be refreshed into the non-production environment scheduled for the upgrade. It may take at least 2 business days of lead time for the refresh requests to complete.


NOTE Failure to upgrade the non-production environment may result in unexpected and blocking issues in the production environment upgrade.
Testing and Issue Remediation Duration You can remediate the blocking issues encountered during testing to ensure there are no open issues prior to the scheduled production upgrade.
Non-Production Validation - Scheduling - Non-Production Upgrade - Testing Best Practices - Reporting and Resolving Issues
Scheduling You will receive a maintenance notification at least 1 week in advance of the scheduled upgrade date. Non-Production upgrades are scheduled on weekdays. To review the scheduled releases, see Upgrade Schedule for Clarity SaaS.
Non-Production Upgrade Upon completion, you will receive an email confirming the delivery of your upgraded non-production environment. The upgrade requires approximately 24 hours to be completed.
Testing Best Practices Use the upgraded non-production environment to get familiarized with the new features, test any expected bug resolutions, and update or create the test scripts to perform unit, regression, and user acceptance testing. It is recommended you test the new or changed functionalities. You can refer the following testing guidelines and recommendations: - Test scripts developed during the initial implementation - Applicable bug fixes - New functionality you plan to deploy - Custom reports - Data integrations Custom Processes with GEL scripting - Custom Portlets with NSQL data providers - Add-in packages and related configurations
Reporting and Resolving Issues Create a support ticket to log any issues encountered during testing and ensure appropriate resolution is provided. Mention in the support ticket explicitly if the issue is an upgrade blocking issue. All the blocking issues will be resolved prior to the scheduled production upgrade.
Production Upgrade You will receive a second notification email at least 1 week in advance of the scheduled upgrade date. Typically, the production environment upgrade begins on a Friday after the business hours and completes by the end of the next day (Saturday). You will receive an email notification that the environment is ready for testing and use after the production environment upgrade is completed. Create a Severity 1 ticket if you identify a major issue with your post-upgrade

production environment and require immediate assistance. If you encounter a major defect during an upgrade or subsequent testing, and it is unresolvable within the upgrade timeline, a rollback to the previous version state is processed. The rollback contains all the data and configuration prior to the production upgrade.
Other Service Changes and Considerations - New User Interface - Clarity Add-in Impact
New User Interface Once enabled, you can access the Clarity new user interface from the URL: https://<servername>.ondemand.ca.com/pm
NOTE If you are utilizing the IDP federated single sign-on and you want your users to access the new UI by default, your company's identity management team may need to generate a new link such that the "/pm" is appended to the target URL.
Clarity Add-In Impact As part of the upgrade, all the previously installed add-ins are upgraded. However, the updates are not applied to preserve the existing view configurations. You can review the upgraded add-ins and apply them using the Add-In Details page in Clarity Studio. For each add-in, review the Add-Ins section and Integrations section to decide which upgraded views should be applied and which ones should be adjusted manually.
NOTE Applying a view overwrites the configuration of the existing view. The only way to restore overwritten views a complete environment is to restore or manually recreate the view.
Frequently Asked Questions To quickly get answers to the most common questions, see Frequently Asked Questions (FAQ).
SaaS Upgrade Responsibilities Broadcom Upgrade Team - Physical upgrade of customer environment - System testing and validation - Resolution of any system or environment issue Customer - Understand and manage the upgrade process - Create and execute the upgrade plan - Perform unit testing, regression testing, and user acceptance testing - Identify and resolve non-standard component compatibility issues - Update personalized training materials - Track, manage and perform post-upgrade tasks


SaaS Upgrade Checklist
- Suggested Pre-Upgrade Preparation Tasks - Non-Production Environment Tasks - Pre-Production Upgrade Tasks - Production Upgrade Tasks


Suggested Pre-Upgrade Preparation Tasks
- Finalize development, promote to production, and avoid further significant changes - Request refresh of production to the non-production environment(s)
- Required to refresh the Non-Production Environment and is strongly suggested - Necessary in order to test Production dataset upgrade on your non-Production environment(s) - File a Support Ticket for each non-Prod environment requesting the refresh - Note that reporting content is not copied by this process and should be moved manually if necessary - Review the upgrade process - Provides guidance on what to expect during the upgrade - Provides high-level timeline - Review Release Notes for changes to assess impacts - Components - Reports, Portlets, Processes, Jobs or Interfaces - Training Materials - Manuals, Guides, On-Line - Add-Ins - New or Updated Components

Non-production Environment Tasks
- Perform Regression Testing (as needed) - Execute regression testing to fully test any updated functionality that you utilize as per the Release Notes and Change and Impact guide. - Keep a list of additional issues or changes
- Update non-standard components and other issues - Engage appropriate resources to update custom components (reports, interfaces, extracts...) if needed - Keep a list of all fixes that have been applied - Resolve any other issues identified
- Apply selected add-Ins, as applicable - Perform UAT testing
- Run UAT scripts to validate the upgrade - Have users try out the new version and give feedback - Create a migration plan and post-production upgrade checklist - List all updates done in Non-Production for implementation post the Production upgrade - Identify any testing or validation that needs to be done post the Production upgrade

Pre-production Upgrade Tasks
- Training and Change Management - Finalize any training material updates if needed - Schedule training if needed
- Validate readiness for the production upgrade date provided - Validate that your resources are available - Validate all reported blocking issues are resolved
- Create a short interval schedule for upgrade
- Needed if several components need to be updated after upgrade - Ensures that the right people are available to perform the task or for validation


Production Environment Tasks
- Once the upgrade is complete, test and perform post-Production tasks you documented from your Non-Production testing
- Perform final environment validation - Report any blocking issues via a severity 1 support ticket and resolve any such issues prior to releasing the upgraded
environment to your end-users
NOTE For any environmental issues needing resolution, open a new, separate support ticket for each issue
Clarity for FedRAMP
- FedRAMP Overview - Broadcom General Support System (GSS) for FedRAMP - Commercial vs. FedRAMP Feature Differences and Alternatives - UnSupported GEL/CORE Tags in FedRAMP - Frequently Asked Questions
Announcing Clarity for FedRAMP: CA Technologies, a Broadcom Company successfully achieved its sponsor-endorsed authorization to operate (ATO) status for federal agencies and departments procuring cloud services. Clarity is FedRAMP authorized.

FedRAMP Overview
- Security: Provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services. Federal and government-based agencies are required to use highly secure cloud-based solutions that adhere to stringent levels of security while meeting U.S. government compliance regulations.
- Mandatory: All federal agencies and departments are required to use FedRAMP authorized cloud services. FedRAMP is mandatory for Federal Agency cloud deployments and service models at the low, moderate, and high-risk impact levels. Agencies must submit a quarterly report showing any of their cloud services that do not meet FedRAMP requirements with the appropriate rationale and proposed resolutions for achieving compliance. Private cloud deployments intended for single organizations and implemented fully within federal facilities are the only exception.
- Value: The do-once, use-many-times framework saves cost, time, and staff required to conduct redundant agency security assessments.
The Federal Risk and Authorization Management Program (FedRAMP) program provides a standard approach to security assessment, authorization, and continuous monitoring for cloud products and services. This approach uses an efficient framework saving time and costs previously associated with performing redundant agency security assessments.

Broadcom General Support System (GSS) for FedRAMP
As an enterprise software company, CA Technologies, a Broadcom Company, has implemented a General Support System (GSS) to host Broadcom FedRAMP SaaS offerings. The GSS is currently hosted on the Microsoft Azure Government SaaS cloud and could be expanded to include other FedRAMP-authorized government cloud offerings.
The GSS implements common policies and procedures, tools, and authentication services that may be consumed by the SaaS offerings. Hosted in the U.S. and operated by U.S. citizens employed by Broadcom, the GSS empowers our SaaS offerings to inherit greater than 70 percent of the 325 FedRAMP moderate baseline security controls for initial authorization, continuous monitoring, and run/operate costs.


On April 16, 2019, Clarity officially obtained its sponsor agency Authorization to Operate (ATO) designation from a major international healthcare and research organization. GSS is FedRAMP authorized as of July 09, 2019.
NOTE Leading the Way: Clarity is the first Broadcom SaaS offering to be hosted on the GSS. The following image shows the core components in the GSS:
Commercial vs. FedRAMP Feature Differences and Alternatives The table below lists notable Clarity commercial capabilities and the Clarity FedRAMP differences or alternatives:


NOTE In FedRAMP environments, HTML portlets are not supported.


Sl. No. 1
3 4

Commercial Capability

FedRAMP Alternatives

Remediation Targets(3)

XOG, GEL, and NSQL Support - -
- Jaspersoft Studio(2), CA
- JDBC Adapter, and TIBCO

JasperMobile app for use with

Clarity
- Use either XOG, GEL, or N/A NSQL
Application administrators must include the "@WHERE:SECURITY:" clause in their NSQL queries
GEL scripts cannot use "sql:update" tag with read/ write sql statements
GEL scripts can use the "nsql" tag to read data

Use out-of-box Jaspersoft reporting capabilities in Clarity for ad-hoc reports, views, tables, and to schedule reports
Use the stock reports provided with Clarity.
Use the PMO Accelerator and PMO Advanced Reporting content.
Develop portlets and dashboards in Classic PPM
Extend the default fields for projects, resources, and other domains with custom attributes or sub-objects created in Clarity.

No target: Jaspersoft client tools, integrated with Clarity, does not support SSO with multi-factor authentication directly to Jaspersoft.

OData access to the Data Warehouse
Third-party integrations and external XML Open Gateway (XOG) Support (4)

Clarity FedRAMP supports OData. To learn more, see Configure OData Access to the Data Warehouse (SaaS Only).

You need to raise a support ticket to request the adoption of the FedRAMP service.
- FedRAMP environments

This capability is a Clarity

support integrations using SFTP as the commercial product; therefore, data exchange using flat-file drop and retrieval is supported.

FedRAMP roadmap item being considered for a future release. Contact your Clarity account director for details.
- In a secure boundary, place

a file on the SFTP server

for the flat-file drop, which

authenticates using the

key exchange. To learn

more, see Key-based

Authentication.
- Perform XOG import/export

using GEL scripts


Sl. No. 5
6 7

Commercial Capability

FedRAMP Alternatives

Remediation Targets(3)

Direct Database Access
- No workaround due to GEL No target
script restrictions for SQL tags (VPN access is also not available)
- NSQL tags are supported
where application administrators include the "@WHERE:SECURITY:"
- VPN access is also not
available

Clarity Integration with CA
- Open WorkBench (OWB) and
Microsoft Project (MSP) client -

tools

Obtain authorization to implement this configuration
Native Clarity Scheduler, Gantt view, WBS, and task management capabilities

This capability is a Clarity FedRAMP roadmap item being considered for a future release. Contact your Clarity account director for details

Clarity Integration with Rally

Rally(SaaS) is FedRAMP certified.

(2) Jaspersoft Studio is used to develop more advanced customer-specific reports. (3) Remediation target dates are subject to change at any time, with or without notice. (4) OWB and MSP clients cannot authenticate with Clarity without a valid SSO session. Agency authorization is required because OWB and MSP client users must enter their username and password to authenticate without SSO. With agency authorization, Broadcom provides a Clarity OData endpoint to enable SSO authentication; users can launch OWB or MSP clients from Clarity.

UnSupported GEL/CORE Tags in FedRAMP
The following GEL tags are unsupported due to possible unauthorized data access or environmental concerns. The FedRAMP SaaS operations team will work directly with agencies or services partners to identify needed GEL tags for a Clarity implementation for compliance.

FedRAMP FedRAMP

Location

com.niku.pmo.gel.tags.BPAUpgrade org.apache.commons.jelly.tags.sql.QueryTag

Frequently Asked Questions
Q1: How Do SaaS FedRAMP differ from SaaS Commercial?
A1: Clarity is available in multiple commercial releases with overlapping support lifecycles. The application can be deployed in on-premise environments, SaaS environments, and hosted environments with dev, test, and prod configurations. Our FedRAMP ATO does not transfer to on-premise deployments. To meet strict FedRAMP security requirements, some Clarity commercial features are disabled in Clarity FedRAMP environments. See Clarity Commercial vs. FedRAMP Feature Differences and Alternatives above.
Q2: Is FedRAMP Preferred or Required?
A2: Both. Cloud services are preferred due to their reduced infrastructure costs, better scalability, Disaster Recovery (DR) features, and other technological benefits. They are also required. In 2010, the Office of Management and Budget (OMB) established a Cloud First policy for federal departments. The original requirements have resulted in a significant


shift toward using authorized cloud offerings. Today, all federal departments and agencies are required to use FedRAMPauthorized cloud services.
Q3: Why Would a SaaS Commercial Customer Switch to the FedRAMP Service? A3: Clarity commercial customers with Federal contract requirements to protect controlled unclassified information should consider the FedRAMP service. For example, an aerospace firm is looking to expand their jet engine business to include military aircraft. DFARS requires protecting controlled unclassified mission-oriented information for weapon systems (to meet 125 controls).
Q4: To What Extent Do Broadcom and Support My FedRAMP Needs? A4: Broadcom is committed to offering FedRAMP authorized solutions. You can rely on robust support from Broadcom and the GSS. Clarity has achieved FedRAMP authorized status with an official FedRAMP Moderate Impact Agency ATO. See the top of this page to learn more.
Q5: How is My Data Encrypted in the FedRAMP Service? A5: All data in transit and at rest is encrypted using FIPS 140-2 validated encryption modules.
Q6: Does the FedRAMP Service Accept Native PIV/CAC card access? A6: Yes, the Clarity FedRAMP service does accept SAML assertions from an identity provider. Agencies are required to implement proper authentication strategies to support PIV/CAC card access.
Q7: We Are Not Sure We Need FedRAMP, But Must Check the Box on FISMA; What Can We Do? A7: You could request and use FedRAMP SSP as guidance for on-premise SSP. However, the Clarity FedRAMP ATO is not transferable to on-premise environments.
Q8: Is the Mobile App supported? A8: Yes. Clarity mobile can be used in a FedRAMP environment in concert with the SSO Login option.
Q9: Do FedRAMP contracts have separate SaaS Service Listing documentation? A: Yes, FedRAMP SaaS Service Listing documentation is available upon request.
Q10: Is Section 508 Compliant? Clarity performs accessibility validation on every major release and completes the requisite VPAT. To learn more about the results of an accessibility audit conducted by Deque, download the VPAT Report for Clarity.
Q11: How Do I gain access FedRAMP system security package (SSP) Documentation? A: Please visit the FedRAMP marketplace. Complete the Package Access Request Form.
Q12: Does FedRAMP limit concurrent user sessions? A: Not at this time; however, this capability is a Clarity FedRAMP roadmap item being considered for a future release.
Q13: Does FedRAMP support Unicode? Yes. Clarity supports UTF8.


Q14: Does FedRAMP support the Modern User Experience? Yes. The Modern User Experience is now supported for Clarity FedRAMP.


Q15: Does FedRAMP support REST APIs?
Yes. Clarity FedRAMP supports REST APIs. However, agencies need to use API keys in Clarity. To learn more about using API keys, see Key-based Authentication.


Clarity - 16.4.1 230


Clarity FedRAMP Transition to stackArmor Managed Environment FAQ
Broadcom has decided to move the Clarity FedRAMP SaaS offering from a Broadcom-managed service to a partnermanaged service. The new FedRAMP offering will be hosted by stackArmor and maintained by Winmill Software. Once this migration is completed, your data will be stored in a new data center, representing a change to a material subcontractor utilized in the provision of the Clarity FedRAMP offering. As such, it is recommended that you provide this information to your security and compliance teams for their review.
The Clarity FedRAMP data center migration is tentatively scheduled to begin as early as May 2025 and be completed by the end of May 2025. This FAQ document is intended to answer the most commonly asked questions regarding this transition project.
This document is current as of the publication date indicated on the title page. Broadcom will continue to update this document as we progress through the data center transition project and if other relevant questions are raised that should be captured. The descriptions listed here were accurate at the date of publication but are subject to change without notice. This document will not modify or be considered to supplement any warranties, service level descriptions, or other provisions contained in your agreement with Broadcom or Carahsoft relating to the Clarity FedRAMP service.

Glossary The following are frequently used acronyms in this document:

DR SA SFTP URL VPN GCP

Component

Version
Disaster Recovery Service Availability Secure File Transfer Program Uniform Resource Locator (i.e. a https web address) Virtual Private Network Google Cloud PlatformTM

General Questions
Q1. What is happening?
Broadcom has decided to move the Clarity FedRAMP SaaS offering from a Broadcom-managed service to a partnermanaged service. The new FedRAMP offering will be hosted by stackArmor and maintained by Winmill Software. Broadcom, and its partners, will perform all transition activities ensuring minimal to no impact on the Clarity FedRAMP service functionality.
Q2. Why is my service being migrated to another data center?
Broadcom is migrating the Clarity FedRAMP service to be hosted in stackArmor's `The Armory' which is a dedicated environment for the purpose of delivering software to government customers as a FedRAMP service within Google's Public Sector Cloud.
Q3. What are the impacts of this transition?
Our objective is to minimize agency customer impacts and disruptions through detailed transition planning and scheduling. The transition process has been thoroughly tested and documented as part of our operational readiness testing processes. Upgrades will continue to be performed on a predefined schedule by Winmill Software approximately twice yearly. There will be no changes to the existing terms of services, including SLAs, DR, support, etc. There will be


no changes to existing FedRAMP Moderate software license pricing. There will be no changes to existing contracts. However, upon renewal, agency customers will contract directly with Carahsoft. The technical impacts for the transition are only related to the hosting change and impact mainly integrations and SSO. Specific technical areas impacted include: - Service URL - SFTP host - Federated SSO - OData URL For more technical information about the transition, please reference the Transition Questions section.
Q4. What is the timeline for executing this transition? Yes, we expect the OData service to be available at the end of June 2025.
Q5 Will OData be supported? The Clarity FedRAMP data center migration is tentatively scheduled to begin as early as May 2025 and be completed by the end of May 2025. Broadcom will define a detailed customer transition schedule and communicate the schedule to give you enough time to get answers to your questions, address any concerns, and undertake any preparation that may be necessary in your environment. Q6. Will my application URL change after the transition? Yes, customers will utilize new URL's to access the service after the transition. The following is an example of how your URL will change where "####" is your unique ID number: - Current URL Domain: cppmfed####.gov.saas.broadcom.com - Post Migration URL Domain: cppmfed####.clarity.thearmory.cloud IP addresses will be updated as part of the transition. If you are utilizing IP addresses and/or ranges for whitelisting or other purposes, please request the new IP addresses via a Support ticket now. IP's will be available for request when your migration schedule is provided. New URLs for SSO (if applicable), Jaspersoft, OData (if applicable, available end of June 2025), and SFTP (if applicable) will be provided and available as soon as the sandbox environment is established. Q7. Will I be provided additional environments as part of the transition? No. During the transition, Broadcom will first migrate your non-production environment(s). The environment(s) will be unavailable for up to 48 hours while the transition is performed. After the successful transition of the non-production environment(s), the same process will be followed for the production environment.
NOTE Transitioned environment(s) will no longer be available in the current data center after the transition to the partner-managed service.
Q8Is any functionality deprecated as part of the transition? No
Q9Is any functionality added as part of the transition? No
Q10 Is there a cost for this data center transition?

No. There is no charge for the transition activities performed by Broadcom and its partners. Customers, however, are responsible for changes required in their environments and any testing/compliance activities that they choose to perform.
Q11 How will I be notified of the transition schedule? Broadcom has defined a transition schedule and each customer will be notified via email.
Q12Who do I need to contact for more questions on the transition? Please contact your Broadcom account representative or open a ticket with Broadcom Support to answer or obtain the necessary information regarding the transition.
Q13 When should I stop development activities in our production environment? Customers should apply all development changes, in the production environment, before the non-production scheduled transition to the GCP data center. All development activities in your non-production environment should be paused while the transition to the GCP data center is in progress and until the transition of all environments is completed.
Q14 Is there any stop date as to when new customers can receive environments? Broadcom will stop provisioning new Clarity FedRAMP customers in the current data center and start provisioning new Clarity FedRAMP customers in the partner-managed data center starting June 2025.
Q15 Can I upgrade to a GA release, in the current data center, before my scheduled transition date? No, Broadcom's partners will continue the current process of pushing scheduled upgrades to customers in the current data center. There is no need to schedule an upgrade.
Data Center Questions Q16 Who is managing the new data center? The new data center will be managed by stackArmor with support from Winmill Software
Q17 Will the new data center facility continue to meet the same FedRAMP security compliance standards? Yes, stackArmor will continue to meet the same FedRAMP security standards in the new partner-managed data center. Refer to the security questions section for more details.
Q18 How does this transition impact Disaster Recovery (DR)? There is no impact to the current DR objectives.
Security & Compliance Questions Q19 Will there be an updated ATO for the new stackArmor based service before it is placed in service? As part of the operational readiness testing process, the Clarity FedRAMP service will follow the existing FedRAMP Significant Change Request Policies and Procedures to update the ATO for the Clarity FedRAMP stackArmor based service. No additional ATO approvals are required by agencies.
Q20 Are any compliance policies that exist in Broadcom's current data center going to be removed or degraded in stackArmor? No, the same or enhanced compliance standards currently in place will be established for the stackArmor-based service.
Q21 Where will the stackArmor data centers be located?

Clarity software will continue to be hosted in GCP under stackArmor's management. Specifically, we will be hosting environments and DR in the following locations:
- United States only
Q22 When will Security Assessment Reporting (SAR) documentation be available?
Working in partnership with the National Cancer Institute (NCI), serving as Clarity's FedRAMP sponsor, our auditor, Schellman, and stackArmor, the collective has agreed on the strategy to proceed with the customer migrations by the end of May 2025, with the SAR delivery following in mid-June 2025. In addition, Broadcom will provide NCI with weekly status reports as the assessment progresses to conclusion.
Transition Questions
Q23 What pre-transition activities does Broadcom recommend?
Broadcom SaaS will notify all Clarity FedRAMP customers about the overall transition program to allow our customers to begin planning. Subsequent notifications will be sent before the scheduled transition period with additional information specific to the transition schedule for all your environments. The following pre-transition activity is recommended, as appropriate, for your configuration and usage of the service:
1. Plan for testing resources to be available during the transition of your environments. The list of resources involved will depend on the functional and technical area to be tested.
2. Please be prepared and aware of the following: - You have approximately two (2) weeks allotted for testing of your non-production environment(s) upon handoff. - You should be prepared to execute your testing strategy and scripts immediately upon the handoff of the migrated non-production environment(s). - You should have reviewed this entire Clarity FedRAMP transition FAQ document prior to the transition.
3. Recommended testing checklist: - Functional Testing: These tests should be similar to what you perform as part of an upgrade - Additional testing (this list will be different for each customer): a. Integration between third-party applications and Clarity b. SFTP usage c. OData usage (if applicable, available end of June 2025) d. SSO Implementation - Upon request, provide your SSO IDP (Identity Manager Application) name and setup information (e.g., URL). - Work with your Security team to update service provider metadata for the new URL.
4. All development activities including creating or enhancing custom components such as reports, GEL scripts, and any other custom code should be paused during the transition process.
5. Update your organization's firewall, if any IP address filtering is configured, with the new IP information that will be furnished prior to the scheduled transition.
6. Ensure that you have the ability to reach the stackArmor-manageddatacenter from your business network by performing the following test: a. Links will be shared, please access those links from the systems utilized by your organization.
Q24 What process will Broadcom follow to transition my environments?
1. Your data and configuration will be backed up and transitioned to the new stackArmor GCP data center without impacting functionality.
2. All data and configuration will be transferred to stackArmor using a secure channel. 3. The transitioned data and configuration will be restored to the new environment. 4. Following the successful transition of each environment, Broadcom Operations will release the environment to the
customer.

5. A new URL will be provided for your non-production environment and will be pointed to the new stackArmor environment.
6. Broadcom will notify you that the non-production environment is ready for your testing along with the following information: a. Clarity URL b. Jaspersoft URL (if applicable) c. SFTP location (if applicable) d. SSO information e. OData URL (if applicable, available end of June 2025)
7. Broadcom Support and its partners will work with you to triage and report issues and submit them for resolution. 8. Environments and related data in the previous datacenter are deleted 30 days after the successful transition of the
environment. With the exception of backups required for NARA compliance purposes.
Q25 What post-transition activities does Broadcom recommend? Once you are informed via email that your transitioned environment is ready for testing, you should perform the following:
1. Validate the new and updated URLs provided post transition. 2. If you are leveraging key exchange for SFTP authentication, existing keys will be migrated by Broadcom to the new
SFTP service. Please validate their functionality. 3. The following client tools will need to be updated with the new information provided:
a. Jaspersoft Studio Client connection information (if applicable) b. BI tools leveraging the OData service (if applicable, available end of June 2025) c. SFTP Clients and integrations (if applicable) 4. Complete the recommended testing activities. 5. For SSO authentication, test your user authentication.
Q26 How are issues with the transition reported and resolved? Any customer issues encountered during the transition are to be reported via a Broadcom Support ticket for triage and resolution.
Q27 When will I know when our environment will be or has been transitioned? An email notification will be sent to your support contacts on file.
Q28 If a major issue is encountered after the transition, how do I roll back the transition? Transition roll-back procedure - Typical steps to be performed are:
NOTE This will not be possible after the data is permanently deleted from Broadcom GCP, which is a maximum of 30 days after the production transition.
1. The customer opens a severity 1 Support issue detailing the issue the roll back is being requested in response to. 2. If a rollback is required, then the newly created instance is taken offline. 3. The original instance will be brought online in the current Broadcom data center and you will be notified of its
availability. 4. The issues causing the rollback will be initially reviewed by Broadcom, followed by Broadcom and the customer. 5. The transition is rescheduled, after reviewing with the customer, to a later date and time.
Q29 How will you manage my data during the transition? All data and configuration files will be migrated via a secure channel between source and target data centers.

Q30 Will integrations or custom components be impacted? It depends on the specific custom component and integrations. Please test all your integrations post migration. Q31 What will happen to the old instances and our data? All Broadcom GCP environments and data will be permanently deleted once a customer notifies Broadcom that the instances are no longer needed or 30 days after the customer's production environment is migrated, whichever is sooner. Q32 What if a customer's subscription includes additional environments (e.g., Dev, Test, Train)? If a customer's subscription includes additional environments, these will be migrated on a separately provided schedule. Q33 What will happen to all the files in the SFTP folder? SFTP folder is provided as a temporary folder for our customers to be leveraged for transition or integration. Any data in the SFTP folder (in the current Data Center) will not be migrated and it is up to the customer to backup any content located in the SFTP folder prior to the transition. All SFTP content will be deleted after a successful transition. Q34 Will there be a change to the SSO implementation? Yes. Broadcom and its partners will work with your security team to cut over to the stackArmor-managed Clarity FedRAMP SSO solution. Additional details will be made available before your transition.
