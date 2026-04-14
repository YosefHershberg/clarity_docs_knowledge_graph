# Integrate Clarity with Rally

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[19 - Add-Ins and Integrations/_MOC Integrations|Add-Ins and Integrations]]
- Related domains: [[18 - Advanced Reporting/_MOC Advanced Reporting|Advanced Reporting]]
- Canonical notes:
- [[19 - Add-Ins and Integrations/Rally Integration]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Integrate Clarity with Rally (#integrate-clarity-with-rally)
- H3: Integration Scenario (#integration-scenario)
- H2: Plan for the Integration (#plan-for-the-integration)
- H2: Prepare for the Integration (#prepare-for-the-integration)
- H3: Create a Rally API Key (#create-a-rally-api-key)
- H3: Get the Rally Workspace ID (#get-the-rally-workspace-id)
- H3: Get the Project ID and Owner ID (#get-the-project-id-and-owner-id)
- H3: Get the Portfolio Item Type Ordinals (#get-the-portfolio-item-type-ordinals)
- H2: Configure the Integration (#configure-the-integration)
- H3: Verify Prerequisites (#verify-prerequisites)
- H3: Configure Integration Attributes (#configure-integration-attributes)
- H3: Define the Portfolio Item Hierarchy (Investment-Level Integrations Only) (#define-the-portfolio-item-hierarchy-investment-level-integrations-only)
- H3: Define the Integration Policy (For Portfolio Item Integrations Only) (#define-the-integration-policy-for-portfolio-item-integrations-only)
- H3: Import the Signed Certificate (On-Premise Only) (#import-the-signed-certificate-on-premise-only)
- H3: Define the Agile Integration Owner (#define-the-agile-integration-owner)
- H3: Schedule Background Jobs (#schedule-background-jobs)
- H2: Associate Clarity Projects with Rally and Synchronize Data (#associate-clarity-projects-with-rally-and-synchronize-data)
- H3: Associate a Clarity Project with Rally Investments (#associate-a-clarity-project-with-rally-investments)
- H3: Associate a Clarity Project with Rally Portfolio Items (#associate-a-clarity-project-with-rally-portfolio-items)
- H3: View Synchronized Data in Clarity (#view-synchronized-data-in-clarity)
- H3: Synchronize Tasks in Portfolio Item Integrations (#synchronize-tasks-in-portfolio-item-integrations)
- H3: Synchronize Rally User Stories to Clarity Tasks (#synchronize-rally-user-stories-to-clarity-tasks)
- H3: Synchronize Teams in Portfolio Item Integrations (#synchronize-teams-in-portfolio-item-integrations)
- H3: Link a Clarity Project to an Existing Rally Portfolio Item (#link-a-clarity-project-to-an-existing-rally-portfolio-item)
- H3: Troubleshooting Common Agile Integration Issues (#troubleshooting-common-agile-integration-issues)
- H2: Configure Integration Views (#configure-integration-views)
- H2: Configure the Agile Time Tracking Project Template (#configure-the-agile-time-tracking-project-template)
- H2: Rally Dashboards and Portlets (#rally-dashboards-and-portlets)
- H2: Clarity and Rally Attribute Mapping (#clarity-and-rally-attribute-mapping)
- H2: Clarity and Rally Integration Examples (#clarity-and-rally-integration-examples)
- H2: Integrate Clarity Timesheets in Rally (#integrate-clarity-timesheets-in-rally)
- H2: Integrate Clarity with CA Single Sign-On (SSO) (#integrate-clarity-with-ca-single-sign-on-sso)
- H2: Integrate Clarity with Microsoft Project (MSP) or Open Workbench (OWB) (#integrate-clarity-with-microsoft-project-msp-or-open-workbench-owb)
- H2: Introducing Clarity Cookbooks (#introducing-clarity-cookbooks)
- H2: Clarity Cookbook: Roadmaps that Tell a Story (#clarity-cookbook-roadmaps-that-tell-a-story)
- H2: Clarity Cookbook: Objectives and Key Results (OKRs) (#clarity-cookbook-objectives-and-key-results-okrs)
- H2: Clarity Cookbook: Program Management Made Easy (#clarity-cookbook-program-management-made-easy)
- H2: Clarity Education and Training (#clarity-education-and-training)
- H2: Clarity Support and Services (#clarity-support-and-services)
- H2: Usage Data (Telemetry) (#usage-data-telemetry)
- H2: Documentation Legal Notice (#documentation-legal-notice)

If a baseline exists, then days late is calculated as task finish date minus baseline finish date. A positive number indicates that the task is late according to the baseline. A negative number indicates that it is early according to the baseline. If a baseline exists and the task finish date is the same as the baseline finish date, then the task is considered late if it is not completed and it was due before today's date. In this case, days late is calculated as today's date minus task finish date. If there is no baseline, then days late is calculated if the task is not completed and it was due before today's date. In this case, days late is calculated as today's date minus task finish date.
- **ETC** - Defines the number of hours estimated to complete a task. Once a task is started, ETC reflects the number of remaining hours estimated to complete it.
- **Pending Actuals** - Displays the amount of unposted actuals for the task.
- **Actuals** - Defines the total number of hours submitted and posted for the task.
- **Gantt Schedule** - Displays a Gantt chart that shows the start and finish dates of the assignments. The color of the Gantt bars is based on the schedule percentage as follows:
- Green. The task is ahead of schedule or on schedule.
- Yellow. The task is between one and ten percent late.
- Red. The task is more than ten percent late.
- White. The schedule percentage is undefined.

The following fields are available for this portlet and you can add them using the configure option.
- **Assignment Start** - Displays the start date of the assignment.
- **Assignment Finish** - Displays the finish date of the assignment.
- **Project ID** - Displays the project ID, which is the identifier of the project.
- **Days Late %** - Displays days late as a percentage of the summary task or project timeframe, which is finish date minus start date. If the task has a parent task in the WBS, then the parent task timeframe is used in the calculation. If the task is at the top level of the WBS and does not have a parent task, then the project timeframe is used in the calculation. The calculation takes into account the task status and baseline (if a baseline exists).
- **Schedule** - Displays a stoplight indicating the number of days a task is late, considering the task status and whether or not a baseline exists for the task. The color of the stoplight indicates if the task is on schedule or late. Stoplights:
- Green. The task is ahead of schedule or on schedule.
- Yellow. The task is between one and ten days late.
- Red. The task is more than ten days late.
- White. The schedule is undefined.

## Integrate Clarity with Rally

### Integration Scenario

If your organization is using Clarity to manage investments and their associated funding, and Rally for Agile development and execution, the Clarity-Rally integration helps bridge the informational gap between investment planning and execution. Oftentimes, reports are used to aggregate data from multiple systems, or spreadsheets, to correlate information related to investment planning and execution status. With this integration, you can,
- Align a Rally initiative with a Clarity project. - Associate multiple Rally investments and initiatives with a single Clarity project. - Fund and track execution across multiple Rally teams. - Get work details such as features and user stories, from Rally to Clarity. - Synchronize data bi-directionally to monitor execution activities in either Clarity or Rally. - Track actuals within Clarity against Rally features and user stories.
With the Clarity-Rally integration, you will obtain the following benefits:
- Transparency: At the project or investment-level in Clarity, you have visibility of (but not limited to) execution status, completed work, remaining effort. You will also be able to have an understanding of how the teams' efforts are aligned with the organizational goals.
- Efficiency: Once you have transparency across your organization, you can streamline the work and reduce waste by building the right things at the right time. You can optimize the flow of value, improve quality, align resources to business priorities, and drive continuous improvement.
- Scope management: With the visibility into the project execution details, you are able to better manage the scope of projects. Based on data, you can decide whether you want to adjust the scope to meet the timelines.
- Delivery Tracking: You can now assess whether a project will complete on time or is at risk of spillover. For example, if a project's GA date is in a week and there is one month's worth of work pending, it is unlikely to release on time. You can then decide to either move the delivery timeline or reduce the scope to meet the date.
Integration Scenario Consider a simple scenario. A product development organization uses Clarity for funding and monitoring investments, and Rally for Agile development and execution. The organization wants to integrate these two systems to gain visibility into investment execution and delivery information. After the integration is configured, data between Clarity and Rally flows as follows: - Business units define a Clarity Project for each initiative that they plan to fund. - Once the funding for the given project is approved, the Project Manager associates the project with the Rally
integration process. The integration is not automatically enabled for all Clarity projects. - The Project Manager triggers the synchronization job in Clarity to create a corresponding initiative in Rally. - The Project Manager then notifies the Product Manager about the new initiative in Rally. - The Product Manager creates features under the initiative and assigns teams in Rally.
> [!NOTE]
> The integration can also be configured for bidirectional synchronization. This allows teams to create features in either system and synchronize work items across the two systems. - When the synchronization job runs next time (either scheduled or manually triggered), features and user stories under the Rally initiative are brought over to Clarity as tasks:
- The execution status at the feature-level is also synchronized, providing visibility into the initiative status as shown in the illustration below:
Next Step: - Plan for the Integration

## Plan for the Integration

Depending on how Clarity and Rally are implemented in your organization, determine the integration option that best suits your implementation. The following sections help in the analysis and decision making. - Determine the Integration Type - Determine the Integration Direction Determine the Integration Type The integration type determines whether you want to associate a Clarity project to portfolio items or investments in Rally. The following integration types are supported: - Portfolio Item integration - Investment integration Portfolio Item Integration With this integration type, you will be able to: - Link a single Clarity project to a single parent portfolio item (such as an initiative) in Rally. - Auto-populate the corresponding child portfolio items (such as features) from Rally as tasks in Clarity. - Auto-populate the execution status of the corresponding Rally features to Clarity. - From a Clarity project, monitor the execution status of the linked initiative.
- You can only monitor two levels of portfolio items with this integration type. For example, you can monitor the progress of an initiative and its corresponding features.
- For example, you can track the progress of an initiative and its corresponding features. > [!NOTE]
> If you want to use this integration type, determine the parent portfolio item (such as initiative or epic) that you want to associate with the Clarityproject. The tasks can only be associated with the lowest level portfolio item (such as feature).

Investment Integration With this integration type, you will be able to: - Link a Clarity project to multiple Rally investments.
- The investments can include features from multiple initiatives or any other parent portfolio item such as epic from Rally.
- Auto-populate features from multiple initiatives that are associated with the linked investments, as tasks in Clarity. - Monitor multiple initiatives and multiple levels of portfolio items such as initiative, epic, feature, sub-feature, and so on
from Clarity.
> [!NOTE]
> You can configure both types of integrations (portfolio item and investment) for the same Rally workspace; however, you can associate a Clarity project with only one integration type. With either integration type, user stories associated with features can also be auto-populated as subtasks in Clarity. Only those Clarity projects configured to sync user stories will auto-populate user stories from Rally. Determine the Integration Direction The integration direction determines the system from which the second-level portfolio item will be pulled. Depending on the system that you use for creating portfolio items (such as features), you can choose the integration direction. For example, if you create features in Rally, select the Rally to Clarity direction. NOTE The option of selecting the integration direction is only available for the Portfolio Items integration type. For the Investment integration type, the direction is always from Rally to Clarity. If you are planning to use the Investment integration type, skip this section and proceed to Prepare for the Integration. The following directions are supported for Portfolio Items integration: - Rally to Clarity - Clarity to Rally - BiDirectional

> [!NOTE]
> Irrespective of the direction you choose, the first level (for example, initiative) is always pushed from Clarity to Rally. Similarly, user stories are always pulled from Rally to Clarity. Direction Option 1: Rally to Clarity In this option, data between Clarity and Rally are synchronized as follows: - Clarity projects are created as initiatives in Rally. - Features under the Rally initiatives are created as tasks under the linked Clarity projects. - Status information is imported from the Rally portfolio items into the corresponding Clarity project and tasks.
In this integration direction, the mapping of the Rally portfolio items to Clarity projects does not have to be contiguous to the portfolio items mapped to Clarity tasks. For example, if your portfolio item hierarchy in Rally includes initiatives, epics, and features, then you can map the items as follows: - Rally initiatives to Clarity projects - Rally features to Clarity tasks In this example, you can skip mapping anything to the epic level portfolio item in Rally. Direction Option 2: Clarity to Rally In this option, data between Clarity and Rally are synchronized as follows: - Clarity projects are created as initiatives in Rally. - Selected tasks under the linked Clarity projects are created as corresponding features under the Rally initiatives. - The project manager has access to status information imported from the Rally portfolio items into the corresponding
Clarity project and tasks.

Direction Option 3: Bidirectional In this option, data between Clarity and Rally are synchronized as follows: - Clarity projects are created as initiatives in Rally. - Features under the Rally initiatives are created as corresponding tasks under the linked Clarity projects. - Selected tasks under the linked Clarity projects are created as corresponding features under the Rally initiatives. - The project manager has access to status information imported from the Rally portfolio items into the corresponding
Clarity project and tasks.
At the end of this step, you must have determined the integration type and direction that you want to configure. Next Step: Prepare for the Integration

## Prepare for the Integration

Before you can configure the integration between Clarity and Rally, you need to fetch connection information from Rally. Keep this information handy so that you can provide them while configuring the integration.
Depending on the integration type you choose, obtain the following information:

**Portfolio Item Integration:**
- API Key
- Workspace ID
- Project ID and Owner ID

**Investment Integration:**
- API Key
- Workspace ID
- Portfolio Ordinal Value

### Create a Rally API Key

The Clarity-Rally integration supports two types of authentication - basic and API Key. Skip this procedure if you want to use basic authentication. API key authentication provides additional security and hence allows the integration to securely connect to Rally. The API Key is associated with a Rally user that has the required privileges to update the Rally workspace. Whenever you synchronize information from or to Rally, the updates appear for the Rally user that is associated with the API Key.
Follow these steps to create an API Key:
1. Log in to Rally (https://rally1.rallydev.com/, for example) as an Administrator. 2. Navigate to https://rally1.rallydev.com/login/accounts/index.html#/keys. 3. Click Create New API Key. 4. Enter a Description. 5. Select the Full Access checkbox and click Create. 6. Note down the API Key that you created.

### Get the Rally Workspace ID

Get the ID of the Rally Workspace that you want to use for synchronizing Clarity projects. After the integration is configured, the Clarity projects will be synchronized with the Portfolio Items in this workspace.
Follow these steps:
1. Log in to the Rally workspace (for example, rally1.rallydev.com) with your credentials. 2. Access the following URL: https://rally1.rallydev.com/slm/webservice/v2.0/workspace
A JSON response appears. 3. Note down the value of _refObjectUUID from the JSON response. The following code
shows a sample JSON response with the workspace ID in bold. { "QueryResult": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "Errors": [], "Warnings": [], "TotalResultCount": 1,


"StartIndex": 1, "PageSize": 20, "Results": [ { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/workspace/41529001", "_refObjectUUID": "3497d043-3ea7-4c8a-bf78-069847936c13", "_refObjectName": "Rally", "_type": "Workspace" } ] } }

### Get the Project ID and Owner ID

If you are planning to use the Portfolio Item integration type, you need to get the project ID and owner ID from Rally. After the integration is configured, the synchronization job uses this information to create the following objects in Rally: - Create an Initiative - Create other portfolio items when you select the following integration direction:
- Clarity-Rally - Bi-directional
NOTE For the investment integration type, the project ID and owner ID are not required as investments are not tied to a specific project and neither do they require an owner to be associated.
1. Log in to Rally (rally1.rallydev.com, for example) and switch to the workspace that you want to associate with the integration.
2. Access the following URL: https://rally1.rallydev.com/slm/webservice/v2.0/workspace A JSON response with the high-level attributes of the selected workspace appears.
3. Click the URL in the _ref key as highlighted in bold below: { "QueryResult": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "Errors": [], "Warnings": [], "TotalResultCount": 1, "StartIndex": 1, "PageSize": 20, "Results": [ { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/workspace/41529001", "_refObjectUUID": "3497d043-3ea7-4c8a-bf78-069847936c13", "_refObjectName": "Rally",

"_type": "Workspace" } ] } } A JSON response with details of the selected workspace appears. 4. Search for Owner and note down the value of _refObjectUUID as the Owner ID:
"Owner": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/user/42778241050", "_refObjectUUID":"f8d849a9-1691-44ef-bc90-5fadb8392709", "_refObjectName": "ITC Admin Portfolio Manager", "_type": "User" },
5. Search for Projects in the same JSON response and click the URL as highlighted in bold below:
"Projects": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref":"https://rally1.rallydev.com/slm/webservice/v2.0/Workspace/40681926241/Projects", "_type": "Project", "Count": 20 },
A JSON response with details of all the projects in your current workspace appears. 6. Identify the Rally project that you want to use for the integration using _refObjectName key. 7. Note down the value of the corresponding _refObjectUUID as the Project ID. The following code snippet highlights the
project name and its UUID in bold:
{ "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/project/40681926325", "_refObjectUUID": "c6f9155c-ee45-4fa7-b82f-c04399437c13", "_objectVersion": "80", "_refObjectName":"Acme Corporation", "CreationDate": "2015-08-06T15:57:42.135Z", "_CreatedAt": "Aug 6, 2015", "ObjectID": 40681926325, "ObjectUUID": "c6f9155c-ee45-4fa7-b82f-c04399437c13", "VersionId": "80", "Subscription": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/subscription/32868941812", "_refObjectUUID": "fc3c31fd-4761-401c-9851-d825709e6ec6", "_refObjectName": "Tech Partner - CA Technologies", "_type": "Subscription" },

### Get the Portfolio Item Type Ordinals

If you are planning to use the Investment integration type, obtain the ordinal value of all the portfolio item types in your Rally hierarchy. The ordinals are used for creating and maintaining the hierarchy in Clarity
1. Access the Rally webservice from the following URL: https://rally1.rallydev.com/slm/doc/webservice 2. On the left pane, click typeDefinition under Object Model. 3. On the right pane, enter the following query in the Query String field.
((Parent.Name = "Portfolio Item") and (Creatable = true))
4. Select the Fetch full objects checkbox and click Query. 5. Copy the Ordinal values for each portfolio item type from the JSON response. Note down the _refObjectName and the
corresponding ordinal value for each portfolio item type. Use the same name and ordinal value while configuring the integration. The following snippet shows a sample JSON response with the Ordinal value highlighted for the Feature portfolio item type:
{ "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/typedefinition/4628560478", "_refObjectUUID": "402c5194-9e3f-44ac-95b8-8d8da2826f85", "_objectVersion": "3","_refObjectName": "Feature", "CreationDate": "2012-09-01T06:00:00.000Z", "_CreatedAt": "Sep 1, 2012", "ObjectID": 4628560478, "ObjectUUID": "402c5194-9e3f-44ac-95b8-8d8da2826f85", "VersionId": "3", "Subscription": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/subscription/400059", "_refObjectUUID": "76de2093-5f8d-403d-a2db-fcec9c5c7079", "_refObjectName": "RallyDevelopment 100", "_type": "Subscription" }, "Workspace": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/workspace/41529001", "_refObjectUUID": "3497d043-3ea7-4c8a-bf78-069847936c13", "_refObjectName": "Rally", "_type": "Workspace" }, "Abstract": false, "Attributes": { "_rallyAPIMajor": "2", "_rallyAPIMinor": "0", "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/TypeDefinition/4628560478/Attributes", "_type": "AttributeDefinition", "Count": 154 }, "Copyable": true, "Creatable": true, "Deletable": true, "DisplayName": "Portfolio Item Feature",


"ElementName": "Feature", "IDPrefix": "F", "Name": "Feature", "Note": "Portfolio Item","Ordinal": 0,
After you obtain the connection information, you are ready to configure the integration with Rally. Next Step: Configure the Integration

## Configure the Integration

As a Clarity Administrator, configure the integration between Clarity and Rally to enable Project Managers to associate a Clarity project with Rally.

### Verify Prerequisites

To integrate with Rally, complete the following requirements:
- Install the Agile Add-in Content: a. Navigate to Administration, Studio, Content Add-Ins in Classic PPM. b. Search for Agile Addin. If you do not find the add-in, contact your administrator to install the add-in. For information on installing the add-in, see Add-Ins and Integrations. NOTE If you are a SaaS customer, create a support ticket to request the Agile add-in installation. During the Agile add-in installation, attributes are created in the Project and Task objects. The new attributes are protected and you cannot add, modify, or delete them from the data warehouse. c. Click Agile Addin and check the Status field. If the Status field shows Installed, exit this procedure and move to the next prerequisite. If the Status field shows Upgrade Ready, continue with the next step. d. Click the Items tab. Select Upgrade Ready in the Status field and click Filter The list of content items that are ready to be upgraded is displayed. e. Do one of the following: - If you do not have custom configurations for the Project Properties - General and Project Properties Settings views, select all the content items in the list and click Install. - If you have custom configurations for the Project Properties - General and Project Properties - Settings views, follow these steps: a. Exclude the following content items and install the rest of the items in the list:
- Project Properties - General - Project Agile Integration Settings
WARNING Do NOT install the above content items. If you install them, your custom configurations for the corresponding Project Properties pages will be lost permanently and cannot be retrieved. b. Manually configure the above project properties views in Classic PPM Studio. See Project Views section for information on the changes that you need to configure. f. Wait for the selected items to install. - Enable REST API: The Synchronize Agile Central job uses the Clarity REST APIs to synchronize data between Clarity and Rally: - Navigate to Administration, General Settings, System Options in Classic PPM. - Search for the REST API Status option and ensure that it is Enabled.

### Configure Integration Attributes

The integration attributes define the Rally system that you want to integrate with, the connection parameters, and the data that you want to synchronize between the two systems.
Follow these steps:
1. Click Administration, General Settings, Integrations. 2. Click New. 3. Update the following fields:
- Integration Name and Integration ID: Defines a name and ID for the integration. You can create multiple integrations between Clarity and Rally with different settings - for example, to connect to different workspaces, use different integration types and integration directions. Hence, provide a meaningful name to easily identify it later.
- Integration URL: Specifies the Rally URL that you want to integrate with. - Integration Instance: Defines the integration instance to connect to such as a Rally workspace ID. The
Synchronize Agile Central job uses this ID to synchronize Clarity projects with Rally investments or portfolio items. For information about fetching the Workspace ID, see the Get the Rally Workspace ID section. - Referrer URL Defines the identity provider URL to use for the timesheet integration with Rally. The value in this field is used only if you are not using the same URL as the Integration URL field. See Configure SSO for Clarity Timesheet Integration with Rally. - Authentication Type - Basic: Select this authentication method for legacy integrations with Rally On-Premise (no longer supported).
Provide a username and password to use for authentication. When using this authentication type, do not specify an API key. Though you can use basic authentication with Rally SaaS, we recommend that you use the API key authentication for secure access. - API Key: Select this authentication method to integrate with Rally On Demand. Provide the Rally API Key that maps to the integration record. To create this key, see Create a Rally API Key. We recommend that you create a unique API Key for each Integration record in Clarity. The API Key is associated with a Rally user that has the required privileges to update the Rally workspace. Whenever you synchronize information from Clarity to Rally, the updates appear for the Rally user that is associated with the API Key. Even though the username and password fields appear, values are not needed when using this authentication type. 4. (Optional) To connect to Rally using a proxy server in a Clarity on-premise environment, specify the following proxy server information. If you are accessing Rally through a non-authenticated proxy, provide the proxy server and port details only. If you are accessing Rally through an authenticated proxy, also provide the proxy username and password. After defining the proxy server information, restart the Clarity app and bg services.
- Proxy Server: Defines the name of the proxy server. Provide the full URL starting with http or https. - Proxy Port: Defines the port for the proxy server. - Proxy User Name: Defines the user name for connecting to the proxy server. - Proxy Password: Defines the password for connecting to the proxy server.
If you do not have the proxy server information, contact your network administrator. If the connection to Rally is unsuccessful, review the proxy server logs to make sure the IP address is allowed. 5. Click Save. The Agile Central tab appears. The tab appears only if the Agile add-in is installed. 6. Click the Agile Central tab. For Integration Type, select one of the following options based on your decision in the planning phase: - Select Portfolio Item to integrate Clarity projects with Rally portfolio items and click Save. The Integration Policy tab appears.
- Select Investment to integrate a Clarity project with Rally investments and click Save. The Portfolio Item Hierarchy tab appears.
For more information about the integration types, see Determine the Integration Type. 7. Create the following defaults for tasks:
- Task Open for Time Entry: Specifies that the tasks created in Clarity are open for time entry. If you do not select this option, the default setting from the task object definition takes effect.
- Task Cost Type: Defines the default cost type value to use when a task is created in Clarity. The default value is used only for task creation, not for updates.
- Task Charge Code: Defines the default charge code value to use when a task is created in Clarity. NOTE When a parent Clarity task has actuals, assignments, or both, the integration cannot add a child task under this parent. Instead, the integration adds the child task without a parent. The behavior complies with the rule that summary tasks in Clarity cannot have actuals or assignments. The situation applies when synchronizing user stories or portfolio hierarchy items from Rally to Clarity tasks.
8. Click Save. 9. Depending on the type of integration you create, complete one of the following tasks:
a. To integrate with Rally investments, complete the steps described in the Define the Portfolio Item Hierarchy section.
b. To integrate with Rally portfolio items, complete the steps described in the Define the Integration Policy section.

### Define the Portfolio Item Hierarchy (Investment-Level Integrations Only)

If you are integrating with investments, complete the steps in this section. On the Portfolio Item Hierarchy tab, specify the portfolio items and their hierarchy levels or ordinals that you want to associate with Rally investments. The integration uses the Ordinal field values as follows:
- Associates a portfolio item type with a position in the portfolio item hierarchy. - Determine the type of work item or portfolio item allowed for parents and children.
The Ordinal field value starts with 0 for the lowest level of portfolio item (such as Feature), and increments by 1 for each portfolio item type as you go up in the hierarchy. As an administrator, you are responsible for creating the portfolio hierarchy data in Clarity. For information on getting the ordinal value for each portfolio item type, see the Get the Portfolio Item Type Ordinals section
Follow these steps:
1. Click New to create a row for each level in the portfolio item hierarchy that exists in the Rally workspace. 2. Enter the portfolio item type name such as epic, initiative, or feature. The value must match exactly the portfolio item
type name in the Rally workspace. 3. Enter the portfolio item type hierarchy level or ordinal as it is defined in the workspace. 4. (Optional) Select the Create and Sync Portfolio Items flag to bring the portfolio item level to Clarity as a task
when the synchronization job runs. Select only the levels that are needed. You can skip levels in the hierarchy. 5. Proceed to define an Agile Integration Owner.

### Define the Integration Policy (For Portfolio Item Integrations Only)

If you are integrating with portfolio items, complete the steps in this section. The documentation reflects a Rally portfolio hierarchy that is available and supported by default. Rally allows you to configure up to five levels of portfolio items in the portfolio hierarchy. The lowest level is P1 and the highest level is P5. You can map to a maximum of two portfolio items to Clarity projects. For example, you can map to feature at the P1 level and initiative at the P2 level. In Clarity, the P1 level item is mapped to a task and the P2 level item is mapped to a project.
Keep the following information handy:
- Integration direction to choose - Owner ID and Project ID
Follow these steps:
1. On the Integration Policy tab, specify the following integration policy details: - Portfolio Item Type Map (Project): Defines the portfolio item type that you want to map to Clarity projects (for example, initiative). You can map a project to any level in the portfolio hierarchy except the lowest level. - Portfolio Item Type Map (Task): Defines the portfolio item type that you want to map to Clarity tasks (for example, feature). The portfolio item type must be at the lowest level. For the following integration directions, the portfolio item type has to be contiguous to the portfolio item type that you defined for the Portfolio Item Type Map (Project) field: - Clarity to Rally - Bidirectional For the Rally to Clarity integration direction, the portfolio item type does not have to be contiguous to the portfolio item type that you defined for the Portfolio Item Type Map (Project) field. If the value for the Portfolio Item Type Map for both project and task is the same, then only one task is created in Clarity. The task has the same name as the project and all the details from Rally are rolled up to that task during synchronization. WARNING Do not change the value for the Portfolio Item Type Map fields for projects and tasks after the initial synchronization. Changing either value can break the connection with Rally. - Create and Sync Tasks: Specifies whether to synchronize the Clarity tasks with the Rally portfolio items. - Select the integration direction in the Create Direction field. For more information about the integration direction, see Determine the Integration Direction. - The Create Direction field works with the Synchronize option for tasks in a project that is integrated with Rally. For each task marked as Synchronize, a corresponding portfolio item is created in Rally.
- Create and Sync Team: Specifies whether to synchronize the Clarity project team with the users assigned to Rally portfolio items.
- Team Open for Time Entry: Specifies whether the team members that are synchronized from Rally are open for time entry in Clarity. Select one of the following options for the integration instance: - Yes: All the resources that are added to the Clarity project team from Rally are open for time entry. - No: All the resources that are added to the Clarity project team from Rally are not open for time entry. - Select: The Open attribute value on the Team Object is considered for determining whether the resources that are added to the Clarity project team from Rally are open for time entry.
- Specify the Default Rally Owner ID and Default Rally Project ID that you fetched from Rally. 2. Click Save.
The integration configuration is completed. 3. Proceed to define an Agile Integration Owner.

### Import the Signed Certificate (On-Premise Only)

The following procedure applies only to on-premise integrations of Clarity with Rally SaaS. Customers who install Rally on-premise have the option to generate their own certificate, purchase a certificate from a third party vendor, or use the Rally certificate that is installed by default. On-prem Rally integrations with Clarity are not supported. Clarity on-premise or SaaS integrations are only supported with Rally SaaS edition.
1. If you obtain your signed certificate from a third-party vendor, import it to the Rally on-premise console. See Rally Control Panel.
2. Import the same certificate into the JDK/JRE path for your Clarity environment: a. Navigate to the JDK/JRE file location in the bin directory on your Clarity environment. b. Go to cacerts and insert the signed certificate with the following command:
keytool -import -keystore cacerts -alas <adcert> -file <certificate.cer> -keyalg RSA -trustcacerts storepass changeit
3. Restart services for both Rally and Clarity.
TIP
If the Synchronize Rally job fails with handshake SSL errors, verify both systems are using the same certificate. If the job fails due to an invalid workspace ID or configuration value, verify all the integration property values and enter them again. Complete the remaining setup tasks on this page and run the Synchronize Rally job again.

### Define the Agile Integration Owner

Define a Clarity user as the Agile Integration Owner who can schedule and run the background sync jobs. The jobs synchronize data between Rally investments, portfolio items, and Clarity projects and tasks. The jobs also create investments and other portfolio items in Rally based on Clarity projects.
Assign the required access rights to the Agile Integration Owner so they can update the project and associated team and tasks. If the agile summary pages for the project and tasks are secured, assign the secure subpage rights to the Agile Integration Owner.
Follow these steps:
1. In Classic PPM, click Administration, Project Management, Settings. 2. Select a user as an Agile Integration Owner (for example, admin) and save. 3. Assign the following global access rights to the integration owner:
- API - Access - Projects - Navigate - Resource - Navigate - Project - Edit Management (for specific projects, or for all projects)

4. Assign the following access rights to the integration owner for investment type integrations: - Agile Central Investment - Create - Agile Central Investment - Edit All
5. Assign the following access rights to the integration owner for portfolio item type integrations: - Portfolio Item Type - Create - Portfolio Item Type - Edit All - Portfolio Item Type - View All - Portfolio Item Type - XOG Access
6. Depending on what data you are pulling from Rally to send to Clarity, assign the following additional rights: - Resource - View (for specific resources, or for all resources) - Resource - Hard Book (for specific resources, or for all resources)

### Schedule Background Jobs

Depending on the frequency at which you want to synchronize the data between Clarity and Rally, set up the following jobs to run at scheduled intervals. For information on scheduling jobs, see Run or Schedule a Job. - Create Agile Central Investments: Run this job to create investments in Rally using information from the Clarity
project. Use the job for integrating with Rally investments. - Synchronize Agile Central: Run this job to synchronize projects with Rally portfolio items and investments. Use the
job for integrating with Rally investments and portfolio items. The jobs read through all Clarity projects that have the Synchronize option selected and an Agile System defined in their agile summary. See Jobs Reference for details. Next Step: Associate Clarity Projects with Rally and Synchronize Data

## Associate Clarity Projects with Rally and Synchronize Data

After the integration is configured, Project Managers can associate Clarity projects with Rally and start tracking the execution progress from Clarity.

### Associate a Clarity Project with Rally Investments

As a Project Manager, you can associate a Clarity project with Investments in Rally so that you can track the execution status of work items linked to the project. Ensure that your Clarity administrator has configured the integration with Rally. Obtain the name of the integration system that is of type, investment.

Follow these steps: 1. Click Home, Portfolio Management, Projects. 2. Open the project that you want to synchronize with Rally. 3. Click Properties, Settings. 4. In the Agile Integration section, complete the following information and save:
- Select the Synchronize checkbox to link the Clarity project to Rally investments. - (Optional) Select the Create and Sync Stories checkbox to bring over user stories from Rally into Clarity for time
tracking purposes. - In Agile System, select the Investment integration that your administrator has configured. If you do not select an
agile system, the project is not synchronized. - Select the Integration Type and click Save.
(In the screenshot above, note that you can also use blueprints in the Modern UX to configure these project settings.) 5. Click Properties, Agile Summary. In the Agile Central Investment section, specify the name for the Rally investment in the Create Agile Central Investment field. 6. Run the Create Agile Central Investments job. When the job executes successfully, the investment gets created in Rally with the project start and end dates. The Agile Summary page of the Clarity project is updated with the investment and synchronization details.
NOTE The new investment is stored as the Agile Central Investment master object in Classic PPM under Home, Custom Objects, Agile Central Investments. Do not edit this master object since the system of record for the data is Rally. Rally investment data only flows from Rally to Clarity. 7. In Rally, associate the new investment to portfolio items. 8. Click the Actions drop-drop in the top-right corner and click Synchronize Agile Central. NOTE If the Actions drop-down is not available, contact your administrator. It is possible that the Project Properties - General page is either not upgraded or not updated. For more information, see the Install Agile Add-in Content section. The Synchronize Agile Central job is triggered for the project. The job brings over the corresponding Rally portfolio items into Clarity as tasks. 9. Navigate to the project again and click Tasks, Agile Summary. If the Synchronize Agile Central job completed successfully, the portfolio items from Rally appear as tasks.

### Associate a Clarity Project with Rally Portfolio Items

As a Project Manager, you can associate a project with Portfolio Items in Rally so that you can track the execution status of work items associated with the project. Ensure that your Clarity administrator has configured the integration with Rally. Obtain the following information from your Administrator: - Name of the integration system that is of type, Portfolio Item - Integration direction, such as Clarity to Rally, Rally to Clarity, or Bidirectional

Follow these steps:
1. Click Home, Portfolio Management, Projects. 2. Open the project that you want to synchronize with Rally. 3. Click Properties, Settings. 4. In the Agile Integration section complete the following information:
- Select the Synchronize checkbox to link the Clarity project to the correspondingRally portfolio item. - (Optional) Select the Create and Sync Stories checkbox to bring over user stories from Rally into Clarity for time
tracking purposes. - In Agile System, select the Portfolio Item integration that your administrator has configured. If you do not select an
agile system, the project is not synchronized. - In Integration Type, select Portfolio Item.
If you select an agile system but do not select the integration type, the synchronize job sets the correct integration type based on the selected agile system. 5. Complete the following additional steps for Clarity to Rally and bidirectional integration directions: a. Navigate to the Tasks tab of the project. b. For each task that you want to create as a Rally feature, click task Properties, and select Agile Summary. c. Select the Synchronize checkbox.
NOTE Selecting the Synchronize checkbox for the Rally to Clarity integration direction has no effect. The synchronization job does not create portfolio items in Rally from Clarity task 6. Navigate back to the Project Properties page and click the Actions drop-down in the top-right corner and click Synchronize Agile Central. NOTE If the Actions drop-down is not available, contact your administrator. It is possible that the Project Properties - General page is either not upgraded or not updated. For more information, see the Install Agile Add-in Content section. The Synchronize Agile Central job is triggered for the project. The job synchronizes the data between Rally and Clarity as follows: - When you run this job for the first time on the project, an initiative is created in Rally and the ID is populated in Clarity. From the next time, the synchronization job does the following: - For Rally to Clarity direction, the portfolio items linked to the initiative are brought over as tasks in Clarity. - For Clarity to Rally direction, the tasks configured to be synchronized are created as portfolio items (feature, for example) in Rally - For bidirectional integration, portfolio items are synchronized from Clarity andRally. 7. Navigate to Project Properties, Agile Summary. 8. The initiative ID and the synchronization details are displayed. 9. Proceed to add other work items and effort estimates in Clarity or Rally depending on the integration direction that you have chosen. 10. Run the Synchronize Agile Central job again and check the Agile Summary page to see the updates. 11. Navigate to the Tasks tab of the project and click Properties, Agile Summary. Task-level work items (such as features) are synchronized .
> [!INFO]
> Figure 49: The image shows how the Synchronize Agile Central job updates Clarity projects with status details from Rally

### View Synchronized Data in Clarity

After the Synchronize Agile Central job completes successfully, you can verify whether the data is synchronized. Follow these steps: 1. Click Home, Portfolio Management, Projects. 2. Open an integrated project and select Properties, Agile Summary. 3. Review the following information:
- Last Agile Sync Date: Displays the last time the Rally portfolio items were synchronized with the Clarity project. - Last Agile Sync Status: Displays the status of the Sync job as successful or failed. Even if the job status is
successful, we recommend that you check the job logs to see if there are any warnings. 4. Navitate to the Tasks tab and click Properties, Agile Summary to view the synchronized data at the task-level.

### Synchronize Tasks in Portfolio Item Integrations

The following diagram shows how the Synchronize Agile Central job updates Clarity tasks with the latest status from Rally in all integration directions:
> [!INFO]
> Figure 50: The image shows how the Synchronize Rally job updates Clarity tasks with status details from Rally
The Clarity task start and finish dates are populated based on the actual start and end dates of the corresponding Rally portfolio item. If the actual start and end dates of the Rally portfolio item are not defined, the Clarity task start and finish dates match the planned start and end dates of the portfolio item. If both the actual and planned dates are not defined for the portfolio item, the project start and finish dates are used to define the Clarity task start and finish dates. See Clarity and Rally Integration Examples for details.

### Synchronize Rally User Stories to Clarity Tasks

You can synchronize Rally user stories with tasks in Clarity to reflect the work progress. With user stories available as tasks in Clarity, you can assign team members to the tasks and have them report time against these tasks. Select the Create and Sync Stories checkbox on the project Settings page to bring in user stories to Clarity as tasks. If the parent task has assignments, the story tasks show at the same level as the parent task (not as subtasks) in Clarity. To synchronize user stories to tasks, map the lowest-level item in the Rally portfolio items hierarchy to a Clarity task. The following rules apply to the user story tasks: - The user story dates are used as the task start and finish date. - The user story dates come from the parent portfolio item dates. - If the user stories have child stories, they are also brought in to Clarity as tasks at the same level as the parent stories. See Jobs Reference for details that explain how the Synchronize Agile Central job synchronizes user stories with tasks for each integration direction.

### Synchronize Teams in Portfolio Item Integrations

If you select the Create and Sync Team option for the Portfolio Item integration type, users (or collaborators) who are assigned to initiatives, features, and all child components of features are brought over to Clarity when the Synchronize Agile Central job runs. - If the Rally users already exist as Clarity resources, they show up directly on the project team staff page. - If the Rally users do not already exist in Clarity as resources, they appear listed on the Missing Resources portlet. As an administrator, you can add these users as Clarity resources and run the Synchronize Agile Central job to make them appear on the project team staff page. Users with the same first and last names but different email IDs are listed in the Possible Matching Resources column on the Missing Resources portlet. The administrator can either create new resources for these matching resources or use the existing resources by modifying the email ID. All changes to teams are reflected in Clarity when the Synchronize Agile Central job runs.

NOTE The Missing Resources portlet does not appear by default on any application page. You can configure the Overview: General page or any other page to add the Missing Resources portlet using the Manage my Tabs option. See Personalize Clarity. Once the Rally resources are synchronized with the Clarity project team, they are not removed from Clarity, even if the corresponding resources are removed from the corresponding Rally portfolio items or from Rally. Similarly, once the Rally features are synchronized with the Clarity project task, they are not removed from Clarity, even if the corresponding features are removed from the corresponding Rally portfolio items. TIP You are in the Synchronize a Clarity Project with Rally Portfolio Items section. The documentation in this section applies only to integrations with portfolio items. The following diagram shows how the Synchronize Rally job updates the Clarity project team with the latest user details from Rally in portfolio item integrations in any direction:
> [!INFO]
> Figure 51: The image shows how the Synchronize Rally job updates Clarity project teams with status details from Rally
NOTE If you import a linked Clarity project using XOG, the project remains linked to the Rally portfolio item. To unlink the project from Rally, clear the Synchronize checkbox for the Clarity project.

### Link a Clarity Project to an Existing Rally Portfolio Item

To link an existing Clarity project to an existing Rally portfolio item, update the project Agile External ID attribute with the Rally portfolio item object ID. The Agile External ID attribute is used internally to link Clarity projects to Rally portfolio items. As an administrator, update the custom information element in the Project XOG schema with the following information:
- The object ID of the Rally portfolio item with which the project is synchronizing. - The Rally portfolio item with which the project is synchronizing (for example, initiative or feature). - The ID for the Rally integration instance. - The option to initiate the synchronization with Rally.
See the following example:
<CustomInformation> <ColumnValue name="agl_ext_id">39345976308</ColumnValue> <ColumnValue name="agl_id">I1</ColumnValue> <ColumnValue name="agl_system">rally1</ColumnValue> <ColumnValue name="agl_sync">true</ColumnValue>
</CustomInformation>

### Troubleshooting Common Agile Integration Issues

**Problem:** Unsuccessful integration can indicate one or more of the following issues:
- The Rally connection information is incorrectly defined in the Classic PPM Integration settings under Administration, General Settings.
- The Agile Integration Owner is not set up as a dedicated resource for updating integrated Clarity projects and tasks. - The REST API Status is disabled. Verify that the REST API Status appears Enabled on the System Options page
under Administration. Search REST APIs for more information. - The Rally server is down.
Solution: Try integrating again after entering the correct values or completing the setup, and running the Synchronize Agile Central job. You can also review the project integration status.
Problem: Sometimes an integration error happens because a linked portfolio item (for example, an initiative) is deleted in Rally.
- In this case, an error message appears when you run the Synchronize Agile Central job. - In the Clarity project, the Synchronize checkbox gets unchecked and the sync status indicates a failure in the
synchronization.
Solution: Relink the project to a new Rally portfolio item to renew the connection.
NOTE
Assuming you link Clarity projects to Rally initiatives and Clarity tasks to Rally features, the following behavior is normal. When a Rally feature is moved to a different initiative, the corresponding task in the Clarity project is not deleted. However, the task is no longer synchronized with Rally. A new task is created in the project that now corresponds to the Rally initiative where the feature moved. The new task is created only if the project is enabled to synchronize with Rally. During synchronization, this new task is updated from Rally. The old task remains but never gets updated.

## Configure Integration Views

When you install the Agile add-in, some object views are reinstalled to display information in a different way than the default Clarity installation. If you previously used Classic PPM Studio to configure the default product views, these configurations do not change. They are not overwritten by new or changed content during the Agile add-in installation. Use the information provided in this section to compare the Agile add-in views to your configurations. You can then decide whether to change your existing product configurations or to apply the new Agile add-in content.


NOTE The agile fields listed for the integration, project, and task views in this section are also available in Clarity. To view these fields on your project and task pages in Clarity, configure the applicable project blueprint details. See Clarity: Configure Blueprints for Projects and Investments for details. The following table lists the views that are modified for the Integration object in the Agile add-in.

View Rally Integration Policy
Portfolio Item Hierarchy

Integration Type Both Portfolio Item
Investment

Page ID agl_integration agl_pi_policy
agl_port_item_type

Display Condition
Integration Vendor = Rally Integration Vendor = Rally and Integration Type = Portfolio Item Integration Vendor = Rally and Integration Type = Investment

When you apply the add-in, the following configurations become available for the integration views: Rally (Portfolio Item or Investment) The following table lists the fields on the Rally page for both integration types. See Define the Integration Attributes in this article for details about the fields.

Section General Task - Create Defaults

Field Integration Type Task Open for Time Entry Task Cost Type Task Charge Code

Corresponding Field in Rally

System of Record

N/A

Clarity

N/A

Clarity

N/A

Clarity

N/A

Clarity

Integration Policy (Portfolio Item) The following table lists the fields on the Integration Policy page. See Define the Integration Attributes in this article for details about the fields.

Section Integration Policy
Team - Create Defaults

Field

Corresponding Field in Rally

System of Record

Portfolio Item Type Map

N/A

(Project)

Portfolio Item Type Map (Task) N/A

Clarity Clarity

Create and Sync Tasks

N/A

Clarity

Create Direction

N/A

Clarity

Default Agile Central Owner ID N/A

Clarity

Default Agile Central Project ID N/A

Clarity

Create and Sync Team

N/A

Clarity

Team Open for Time Entry

N/A

Clarity

Portfolio Item Hierarchy (Investment)


The following table lists the fields on the Portfolio Item Hierarchy page for the Investment integration type. See Define the Integration Attributes in this article for details about the fields.

Field Portfolio Item Type Ordinal Create and Sync Portfolio Items

Corresponding Field in Rally Portfolio Item Ordinal N/A

Rally Rally Clarity

System of Record

Project Views The following table shows the views that are modified for the Project object in the Agile add-in.

View
Agile Integration Settings Agile Summary - Portfolio Item Integration Agile Summary - Investment Integration Properties - General

Integration Type Both Portfolio Item
Investment
Both

Page ID

Display Condition

project_agl_integration_settings N/A

agl_integration

Project Integration Type <> investment

agl_inv_integration

Project Integration Type = investment

projectGeneral

Configure the Properties - General view for the Project object to include the Synchronize Agile Central action in the Actions menu. The new action allows users to run the Synchronize Agile Central job at the project instance level.

When you apply the add-in, the following configurations become available for the project views: Project Agile Integration Settings (Portfolio Item or Investment) The following table lists the fields on the Project Properties Main - Settings page for both integration types. See Synchronize a Project with Rally Portfolio Items for details about the fields.

Section Agile Integration

Field Synchronize Create and Sync Stories Agile System Integration Type

Corresponding Field in Rally N/A N/A N/A N/A

Project Agile Summary - Portfolio Item Integration The following table lists the fields on the Project Agile Summary page for the Portfolio Item integration type.

Section General

Field
Portfolio Item ID Agile State Agile Preliminary Estimate

Corresponding Field in Rally ID State Preliminary Estimate

System of Record
Rally Rally Rally

Notes


Section Planning
Schedule Story Metrics
Sync Job Information


Field
Agile Investment Category

Corresponding Field in Rally
Investment Category

System of Record Rally

Agile Value Score Agile Risk Score WSJF Score (SAFe scoring attribute) Agile Planned Start Agile Planned Finish Agile Release Agile Actual Start Agile Actual Finish Agile Milestones Estimated Story Points Accepted Story Points
% Done by Agile Plan Estimate Estimated User Stories Accepted User Stories
% Done by Story Count Last Agile Sync Date

Value Score Risk Score WSJF Score

Rally Rally Rally

Planned Start Date

Rally

Planned End Date

Rally

Release

Rally

Actual Start Date

Rally

Actual End Date

Rally

Milestone

Rally

Total Story Points

Rally

Accepted Leaf Story Points

Rally

% Done by Plan Estimate Rally

Total User Stories Accepted Leaf Story Estimate % Done By Story Count N/A

Rally Rally
Rally Clarity

Notes The attribute is available to all portfolio items in the portfolio hierarchy. You can associate each portfolio item with only one investment category.
See Review Integration Status for Synchronized Projects in this article for details about this field.

Last Agile Sync Status N/A

Clarity

See Review Integration Status for Synchronized Projects in this article for details about this field.

Project Agile Summary - Investment Integration The following table lists the fields on the Project Agile Summary page for the Investment integration type. See Synchronize a Clarity Project with Rally Investments in this article for details about the fields.

Section Rally Investment

Field Create Rally Investment
Last Agile Investment Created Date

Corresponding Field in Rally

System of Record

N/A

Clarity

N/A

Clarity


Section Sync Job Information

Field Last Agile Investment Status Rally Investments Last Agile Sync Date Last Agile Sync Status

Corresponding Field in Rally

System of Record

N/A

Clarity

N/A

Clarity

N/A

Clarity

N/A

Clarity

Task Views The following table shows the views that are modified for the Task object in the Agile add-in.

View Task Agile Summary Task Agile Summary Task Agile Summary Task Agile Summary

Integration Type Portfolio Item Investment Investment Both

Page ID agl_integration agl_inv_integration agl_inv_integrationLowest agl_integrationStory

Display Condition
Task Ordinal = null and Task Story ID = null
Task Ordinal > 0 and Task Story ID = null
Task Ordinal = 0 and Task Story ID = null
Task Story ID IS NOT null

When you apply the add-in, the following configurations become available for the task views: Task Agile Summary (Portfolio Item Integration) The Agile Summary page is organized into the following sections:
- Agile - Planning - Schedule - Story Metrics
The following table lists the fields in the Agile section.

Field Synchronize

Corresponding Field in Rally

System of Record

N/A

Clarity

Portfolio Item ID Parent Portfolio Item ID
Agile State Agile Preliminary Estimate

ID The ID of the parent as displayed in the hierarchy State Preliminary Estimate

Rally Rally
Rally Rally

Notes
When the checkbox is selected, the Clarity task is created in Rally as a portfolio item. This behavior occurs when tasks are configured to synchronize in the Clarity-to-Rally direction or the bidirectional mode (but not when tasks are synchronized in the Rally-to-Clarity direction).


The following table lists the fields in the Planning section.

Field Agile Investment Category

Corresponding Field in Rally

System of Record

Investment Category

Rally

Agile Value Score
Agile Risk Score
WSJF Score (SAFe scoring attribute)

Value Score Risk Score WSJF Score

The following table lists the field in the Schedule section.

Rally Rally Rally

Field Agile Planned Start Agile Planned Finish Agile Release

Corresponding Field in Rally

System of Record

Planned Start Date Planned End Date Release

Rally Rally Rally

Agile Actual Start Agile Actual Finish Agile Milestones

Actual Start Date Actual End Date Milestones

Rally Rally Rally

The following table lists the field in the Story Metrics section.

Field Estimated Story Points
Accepted Story Points
% Done By Agile Plan Estimate Estimated User Stories

Corresponding Field in Rally
Available with Rally API. The value is dynamically calculated by Rally based on user story status.
Available with Rally API. The value is dynamically calculated by Rally based on user story status.
% Done By Plan Estimate
Available with Rally API. The value is dynamically calculated by Rally based on user story status.

Rally
Rally
Rally Rally

Notes A budget or investment area that a portfolio item supports. The attribute is available to all portfolio items in the portfolio hierarchy. You can associate each portfolio item with only one investment category.
Notes
The attribute is available only to the feature portfolio item. You can associate each portfolio item (feature) with only one release.
The attribute is available to all portfolio items in the portfolio hierarchy. You can associate each portfolio item with multiple milestones.
System of Record


Field Accepted User Stories
% Done by Story Count

Corresponding Field in Rally
Available with Rally API. The value is dynamically calculated by Rally based on user story status.
% Done By Story Count

Rally Rally

System of Record

Task Agile Summary (Investment) Depending on the portfolio item hierarchy level (theme, epic, initiative, or feature), the corresponding Agile Summary page appears listing the relevant sections and fields.The following table lists the fields on the Agile Summary page for a portfolio item.

Portfolio Item Hierarchy Level
All (Theme, Epic, Initiative, Feature)

Section General

All (Theme, Epic, Initiative, Feature)

Planning

All (Theme, Epic, Initiative, Feature)

Schedule

Feature

Schedule

Feature

Story Metrics

Field Portfolio Item ID

Corresponding Field in Rally
ID

System of Record Rally

Portfolio Item Type Parent Portfolio Item ID Parent Portfolio Item Type Rally Investments Agile State Agile Preliminary Estimate Agile Investment Category Agile Value Score Agile Risk Score WSJF Score (SAFe scoring attribute) Agile Planned Start

Portfolio Item Parent ID Type
Name State Preliminary Estimate
Investment Category
Value Score Risk Score WSJF Score
Planned Start Date

Rally Rally Rally
Rally Rally Rally
Rally
Rally Rally Rally
Rally

Agile Planned Finish Agile Milestones Agile Actual Start Agile Actual Finish Agile Release Estimated Story Points
Accepted Story Points

Planned End Date

Rally

Milestones

Rally

Actual Start

Rally

Actual Finish

Rally

Release

Rally

Available with Rally API. Rally The value is dynamically calculated by Rally based on user story status.

Available with Rally API. Rally The value is dynamically calculated by Rally based on user story status.


Portfolio Item Hierarchy Level

Section

Field % Done By Agile Plan Estimate Estimated User Stories
Accepted User Stories
% Done By Story Count

Corresponding Field in Rally

System of Record

Percent Done By Story Rally Plan Estimate

Available with Rally API. Rally The value is dynamically calculated by Rally based on user story status.

Available with Rally API. Rally The value is dynamically calculated by Rally based on user story status.

Percent Done by Story Count

Rally

Task Agile Summary (Portfolio Item or Investment) The following table lists the fields on the Agile Summary page for a user story:

Section Agile Schedule
Story Metrics

Field
Story ID Parent Story ID Portfolio Item ID Portfolio Item Type Agile State Agile Release Agile Iteration Agile Status

Corresponding Field in Rally ID (Story) ID (Story) ID Portfolio Item State Release Iteration Status

User Story/ Feature/Both Story Story Both Both Both Both Story Story

Agile Milestones
Estimated Story Points

Milestones Total Story Points

Both Both

System of Record

Notes

Rally Rally Rally Rally Rally Rally Rally Rally
Rally Rally

The status can be ready (green), blocked (red), or none (gray)

## Configure the Agile Time Tracking Project Template
- Recommendations for Creating the Project Template - Example: to Agile Central Integration Direction - Rules for Creating Sub Tasks Created from Templates
WARNING
Support for the Time Tracking Project Template was discontinued in Clarity 15.5.1. We leave this documentation in place for reference for customers who are upgrading from previous releases. The Agile Central tab of the Integration configuration settings in Clarity no longer allows you to select a time tracking template. The Synchronize Agile Central job no longer uses this attribute.


TIP
The time tracking template was superseded by the one-to-many flexibility in 15.5.1 where you can skip levels beyond a one-to-one mapping of portfolio items. Synchronization job performance is also improved with the removal of the legacy time tracking template.
In Release 15.5.0.1 and earlier, you could use the Time Tracking Project Template available with the Agile add-in to integrate Classic PPM with Rally portfolio items. The template contains the following time tracking sub tasks that are automatically generated for any new features imported from Rally or for tasks created within Classic PPM.
- Design - Development - Test/QA - Documentation
With these high-level tasks in place by default, project teams can focus on defining and capturing the actual work using stories and tasks.
Recommendations for Creating the Project Template
- Use the project template included in the Agile add-in as an example when creating additional time tracking project templates. Define only a small number of tasks for the template.
- The charge code and cost type values are not populated for these tasks by default in the template. Select these values for your tasks in the project template before using the template for the integration.
- The template supports a hierarchical work breakdown structure. However, If you need to create a hierarchy, keep the levels at a minimum. A hierarchy with a large number of levels can impact performance.
After the integration is set up and the Synchronize Agile Central job runs for the first time, the following changes are reflected in Classic PPM:
- Agile Central to Clarity or Bidirectional integration: A portfolio item created in Rally is brought in as a new task in Classic PPM, if it is not already there. The new task is created based on the Portfolio Item Type Map (Task) value defined in the integration instance. The tasks from the Agile Time Tracking Project Template are automatically created as sub tasks under the new task in Classic PPM.
- Clarity to Agile Central or Bidirectional integration: The project manager creates a new task in Classic PPM. The tasks from the Agile Time Tracking Project Template are automatically created as sub tasks under the new task.
During subsequent synchronizations, the subtasks are updated to reflect the latest status from the Rally portfolio item.
NOTE
NOTE: Support for the Time Tracking Project Template was discontinued in Clarity 15.5.1. We leave this documentation in place for reference for customers who are upgrading from previous releases. The Agile Central tab of the Integration configuration settings in Clarity no longer allows you to select a time tracking template. The Synchronize Agile Central job no longer uses this attribute.
Example: to Agile Central Integration Direction
An integration instance is setup using the following defaults:
- Classic PPM projects are mapped to initiative portfolio items in Rally - Classic PPM tasks are mapped to feature portfolio items in Rally - The Create and Sync Tasks option is selected.
The following high-level process describes how you synchronize and update the agile projects:
1. In Classic PPM, create and associate a time tracking project template to the integration instance. 2. In Classic PPM, create a project and connect it to Rally.

3. Run the Synchronize Agile Central job to create the Classic PPM project as an initiative in Rally. 4. Create features under the linked initiative in Rally. The next time the Synchronize job runs, it creates tasks in Classic
PPM corresponding to these features. At this point, the tasks in the Agile Time Tracking template are automatically created as sub tasks underneath the feature tasks.
As you create new features for the initiative in Rally, the process repeats. New tasks and sub tasks are created automatically in Classic PPM corresponding to the new features.
Rules for Creating Sub Tasks Created from Templates
The Synchronize Agile Central job creates sub tasks in Classic PPM based on the following rules for name and ID. If the project manager updates the external ID for a task in Classic PPM at a later time, the Synchronize job does not update the existing sub-tasks. Also, sub tasks are created only for the first time the Classic PPM task is synchronized.
Sub Task Name - Starts with the portfolio item ID displayed in parentheses, followed by the task name from the Time Tracking Project
Template. - The name is truncated if it exceeds 150 characters. - The last 5 characters are replaced by '...' indicating that the task name continues. - Shorter task names are recommended when creating a custom template.
Sub Task ID - Starts with the portfolio item ID, followed by the task ID from the Time Tracking Project Template, separated by a dot
("."). - The task ID in the template can follow any task or contain any value including null values. - When the Synchronize job creates the sub task, it does not consider the task ID in the template. - Always formatted regardless of what is defined in the template. - If the portfolio item ID exceeds 12 characters, then it is modified to contain only the first two characters followed by the
task ID number from the template. - Task IDs are limited to 16 characters in Classic PPM. In Rally there are no such limits. - The task number is a counter limited to 999 tasks. However we do not recommend a template with a large number of
tasks as It can impact performance.
Example:
Assuming that the following information is available for an integration instance:
- Portfolio item: Feature A - Portfolio item ID: F123 - Template task name: Design - Template task ID: 001
In this case, the job creates a sub task with the following name and ID in Classic PPM:
- Sub task name: (F123) Design - Sub task ID: F123.001
NOTE
NOTE: Support for the Time Tracking Project Template was discontinued in Clarity 15.5.1. We leave this documentation in place for reference for customers who are upgrading from previous releases. The Agile Central tab of the Integration configuration settings in Clarity no longer allows you to select a time tracking template. The Synchronize Agile Central job no longer uses this attribute.

## Rally Dashboards and Portlets
- Product Roadmap Dashboard - Agile Project Status Dashboard Use the following dashboards to get visibility into your agile projects. Clarity - Agile integrations require at minimum Clarity 15.2 and we recommend 15.5.1 for enhanced functionality. Each dashboard includes portlets that let you view the data using different grouping and filtering options: Product Roadmap Dashboard Use the Product Roadmap dashboard to get visibility into your agile product roadmaps. The portlets in this dashboard only display data for projects with the Portfolio Item integration type in Classic PPM 15.5.1 or newer. To access the Product Roadmap dashboard, click Home, Dashboards, Product Roadmap. The dashboard includes the following portlets: Agile Product Roadmap The Agile Product Roadmap portlet lists linked agile products and their investments in a hierarchy. You can drill down from a product to the investments in the hierarchy. Investments include projects or non-project investments such as products or programs. You can also drill down from a project to its tasks. The portlet only includes projects and tasks that are linked to an Agile system. You get extra visibility and control over investments that are linked to an agile system through metrics such as the number of user stories, story points, and percentage done. Filter the results on the portlet by products that are linked to agile projects. The portlet includes the following fields :
- Product Hierarchy Displays the name of the product, program, project, or task. Click a product hierarchy link to open the properties page of the product, program, project, or task.
- Start Displays the start date of the product, program, project, or task in Classic PPM. - Finish Displays the finish date of the product, program, project, or task in Classic PPM. - Agile Release Displays the release associated to a task populated by the Synchronization job. In Rally, release is a
timebox where work occurs to support the delivery of a system or software version. - Agile Milestones Displays the milestones for a task populated by the Synchronization job. In Rally, milestones are
target dates for events that are important to the business. For example, a milestone can be a market event, a trade show, or an important code deploy. - Agile Value Score Displays the agile value score for a project or a task that is populated by the Synchronization job. In Rally, the value score is a number that indicates the worth of the portfolio item. - Agile Risk Score Displays the agile risk score for a project or a task populated by the Synchronization job. In Rally, the risk score is a number that indicates the chances you will take to market the portfolio item. - Estimated User Stories Displays the number of estimated user stories for a project or a task populated by the Synchronization job. At the product or program level, the value sums up the estimated user stories from the projects in the investment hierarchy. - Accepted User Stories Displays the number of accepted user stories for a project or a task populated by the Synchronization job. At the product or program level, the value sums up the accepted user stories from the projects in the investment hierarchy. - % Done by Story Count Displays the percentage done by story count for a project or a task populated by the Synchronization job. At the product or program level, the value is calculated as a percentage of the total accepted user stories by the total estimated user stories from the projects in the investment hierarchy. - Estimated Story Points Displays the estimated story points for a project or a task populated by the Synchronization job. At the product or program level, the value sums up the estimated story points from the projects in the investment hierarchy. - Accepted Story Points Displays the accepted story points for a project or a task populated by the Synchronization job. At the product or program level, the value sums up the accepted story points from the projects in the investment hierarchy. - % Done by Agile Plan Estimate Displays the percentage done by agile plan estimate for a project or a task populated by the Synchronization job. At the product or program level, the value is calculated as a percentage using the following metrics: Total accepted story points/Total estimated story points from the projects in the investment hierarchy. - Roadmap Displays a Gantt chart that shows the start and finish dates of the product, program, project, or task. The color of the Gantt bars is based on the % Done by Agile Plan Estimate value as follows: - Red (-999 through 25%). The % Done by Agile Plan Estimate is less than 25%. - Yellow (-999 through 25%). The % Done by Agile Plan Estimate is between 25% and 75%. - Green (-999 through 25%). The % Done by Agile Plan Estimate is more than 75%. - White. The % Done by Agile Plan Estimate is undefined.
Users can add the following extra fields to this portlet using the Configure option:
- Agile Planned Start - Agile Planned Finish - Agile Actual Start - Agile Actual Finish - Agile Preliminary Estimate - Agile State - WSFJ Score

Agile Product Roadmap by Milestone
In Rally, milestones are target dates for events that are important to the business. For example, a milestone can be a market event, a trade show, or an important code deploy. The Agile Product Roadmap by Milestone portlet lists linked agile products and their investments in a hierarchy defined in Classic PPM. You can drill down from a product to the investments in the hierarchy. Investments include projects or non-project investments such as products or programs. Also, you can drill down from a milestone to the tasks associated to the milestone. The portlet includes only tasks from projects that are linked to an agile system. The portlet only includes projects and tasks that are linked to an agile system.
You get extra visibility and control over investments that are linked to an agile system through metrics such as the number of user stories, story points, and percentage done. Filter the results on the portlet by products that are linked to agile projects.
The portlet includes the following fields :
- Product Hierarchy Displays the name of the product, program, milestone, or task. Click a product hierarchy link to open the properties for the product, program, or task.
- Start Displays the start date of the product, program, or task in Classic PPM. - Finish Displays the finish date of the product, program, or task in Classic PPM. - Project Displays the project associated to the task in Classic PPM.
- Agile Release Displays the release for a task populated by the Synchronization job. In Rally, a release is a time box where work occurs to support the delivery of a system or software version.
- Agile Value Score Displays the agile value score for a task that is populated by the Synchronization job. In Rally, the value score is a number that indicates the worth of the portfolio item.
- Agile Risk Score Displays the agile risk score number for a task populated by the Synchronization job. In Rally, the risk score is a number that indicates the chances you will take to market the portfolio item.
- Estimated User Stories Displays the estimated user stories for or a task populated by the Synchronization job. At the product or program level, the value sums up the estimated user stories from the projects n the investment hierarchy.
- Accepted User Stories Displays the accepted user stories for a task populated by the Synchronization job. At the product or program level, the value sums up the accepted user stories from the projects in the investment hierarchy.
- % Done by Story Count Displays the percentage done by story count for or a task populated by the Synchronization job. At the product or program level, the value is calculated as a percentage of the total accepted user stories by the total estimated user stories from the projects in the investment hierarchy.
- Estimated Story Points Displays the estimated story points value associated to a project or a task populated by the Synchronization job. At the product or program level, this value sums up the estimated story points from the projects below the investment in the hierarchy.
- Accepted Story Points Displays the accepted story points for a task populated by the Synchronization job. At the product or program level, the value sums up the accepted story points from the projects in the investment hierarchy.
- % Done by Agile Plan Estimate Displays the percentage done by agile plan estimate for a task populated by the Synchronization job. At the product or program level, the value is calculated as a percentage using the following metrics: Total accepted story points/Total estimated story points from the projects in the investment hierarchy.
- Roadmap Displays a Gantt chart that shows the start and finish dates of the product, program, or task. The color of the Gantt bars is based on the % Done by Agile Plan Estimate value as follows: - Red (-999 through 25%). The % Done by Agile Plan Estimate is less than 25%. - Yellow (-999 through 25%). The % Done by Agile Plan Estimate is between 25% and 75%. - Green (-999 through 25%). The % Done by Agile Plan Estimate is more than 75%. - White. The % Done by Agile Plan Estimate is undefined.
Users can add the following extra fields to this portlet using the Configure option:
- Agile Planned Start - Agile Planned Finish - Agile Actual Start - Agile Actual Finish - Agile Preliminary Estimate - Agile State - WSFJ Score


Agile Product Roadmap by Release
In Rally, release is a timebox where work occurs to support the delivery of a system or software version. The Agile Product Roadmap by Release portlet lists linked agile products and their investments in a hierarchy defined in Classic PPM. You can drill down from a product to the investments in hierarchy. Investments include projects or non-project investments such as products or programs. Also, you can drill down from a release to the tasks associated to that release. The portlet only includes tasks from projects that are linked to an agile system. The portlet only includes projects and tasks that are linked to an agile system.
You get extra visibility and control over investments that are linked to an agile system through metrics such as the number of user stories, story points, and percentage done. Filter the results on the portlet by products that are linked to agile projects.
The portlet includes the following fields:
- Product Hierarchy Displays the name of the product, program, milestone, or task. Click a product hierarchy link to open the properties page of the product, program, or task.
- Start Displays the start date of the product, program, or task in Classic PPM. - Finish Displays the finish date of the product, program, or task in Classic PPM. - Project Displays the project associated to the task in Classic PPM. - Agile Milestones Displays the milestones for a task populated by the Synchronization job. In Rally, milestones are
target dates for events that are important to the business. For example, a milestone can be a market event, a trade show, or an important code deploy. - Agile Value Score Displays the agile value score for a task populated by the Synchronization job. In Rally, the value score is a number that indicates the worth of the portfolio item. - Agile Risk Score Displays the agile risk score for a task populated by the Synchronization job. In Rally, the risk score is a number that indicates the chances you will take to market the portfolio item. - Estimated User Stories Displays the estimated user stories for a task populated by the Synchronization job. At the product or program level, the value sums up the estimated user stories from the projects in the investment hierarchy. - Accepted User Stories Displays the accepted user stories for a task populated by the Synchronization job. At the product or program level, the value sums up the accepted user stories from the projects in the investment hierarchy. - % Done by Story Count Displays the percentage done by story count for a task populated by the Synchronization job. At the product or program level, the value is calculated as a percentage of the total accepted user stories by the total estimated user stories from the projects in the investment hierarchy. - Estimated Story Points Displays the estimated story points for a task populated by the Synchronization job. At the product or program level, the value sums up the estimated story points from the projects in the investment hierarchy. - Accepted Story Points Displays the accepted story points for a task populated by the Synchronization job. At the product or program level, the value sums up the accepted story points from the projects in the investment hierarchy. - % Done by Agile Plan Estimate Displays the percentage done by agile plan estimate value for a task populated by the Synchronization job. At the product or program level, this value is calculated as a percentage using the following metrics: Total accepted story points/Total estimated story points from the projects in the investment hierarchy. - Roadmap Displays a Gantt chart that shows the start and finish dates of the product, program, or task. The color of the Gantt bars is based on the % Done by Agile Plan Estimate value as follows:
- Red (-999 through 25%). The % Done by Agile Plan Estimate is less than 25%. - Yellow (-999 through 25%). The % Done by Agile Plan Estimate is between 25% and 75%. - Green (-999 through 25%). The % Done by Agile Plan Estimate is more than 75%. - White. The % Done by Agile Plan Estimate is undefined.
Users can add the following extra fields to this portlet using the configure option:
- Agile Planned Start - Agile Planned Finish - Agile Actual Start - Agile Actual Finish - Agile Preliminary Estimate - Agile State - WSFJ Score


Agile Project Status Dashboard
Use the Agile Project Status dashboard to view the overall picture and performance summary of a Classic PPM project integrated with Rally. The portlets in this dashboard display data for projects with both integration types supported by Clarity 15.5.1 or higher (investment-level and portfolio-item-level). For the investment integration type, the portlets display only those tasks that correspond to the lowest level portfolio items (such as features).
Follow these steps:
1. Click Home, Portfolio Management, Projects. 2. Open a project. 3. Click Properties and select Settings. 4. Click the Dashboard View drop-down menu and select Agile Project Status. 5. Save your view and click Dashboard.
The dasboard includes the following portlets that display accepted features, feature status, project status, and status report indicators for a project:
By default, the amounts from the feature tasks in the project show in the portlets. To view amounts from features associated with a milestone or a release, use the filters at the dashboard level.

Overview
The Overview portlet displays the total estimated story points, total accepted story points, and the percentage done by agile plan estimate for the features in the project. (The portlet provides a quick summary of the feature points included in the project.)

Accepted Features
The Accepted Features portlet displays a bar graph that shows the number of completed story points against the total story points for all features included in the project. The portlet also shows the number of completed stories against the total stories of all features included in the project. A feature is considered accepted when all user stories for the feature are accepted (that is, the % Done By Agile Plan Estimate is 100%). The % Done By Agile Plan Estimate metric is used to calculate completed story points and stories.

Feature Status The Feature Status portlet provides a list of all the features for a project. The portlet includes the following fields:
- Feature Displays the feature name that is the task name. Click a feature name link to open the Agile Summary page for the task.
- Progress Displays a progress bar showing relative progression using the following colors. The grey arrows indicate the completed stages. The current stage is represented by a color based on the % Done By Agile Plan Estimate. The total number of stages is always 10. - Red (-999 through 25%). The % Done by Agile Plan Estimate is less than 25%. - Yellow (-999 through 25%). The % Done by Agile Plan Estimate is between 25% and 75%. - Green (-999 through 25%). The % Done by Agile Plan Estimate is more than 75%. - White. The % Done by Agile Plan Estimate is undefined.
- Agile State Displays the feature state, for example, Defined, In-Progress, or Complete. - Agile Planned Start Displays the feature planned start date. - Agile Planned Finish Displays the feature planned finish date. - Agile Release Displays the release associated to a task populated by the Synchronization job. In Rally, release is a
timebox where work occurs to support the delivery of a system or software version. - Agile Milestones Displays the milestones for a task populated by the Synchronization job. In Rally, milestones are
target dates for events that are important to the business. For example, a milestone can be a market event, a trade show, or an important code deploy. - Estimated Story Points Displays the estimated story points for a task populated by the Synchronization job. - Accepted Story Points Displays the accepted story points for a task populated by the Synchronization job. - % Done By Agile Plan Estimate Displays the percentage done by agile plan estimate for a task populated by the Synchronization job.
Users can add the following extra fields to this portlet using the Configure option:
- Agile Actual Start - Agile Actual Finish - Agile Preliminary Estimate - Estimated User Stories - Accepted User Stories - % Done by Story Count - Agile Risk Score - Agile Value Score - WSFJ Score
Project Status
The Project Status portlet provides a project status summary. You can get a quick update on the project budget and the planned cost. Also, indicators show status trends based on the status report with the most recent report date and a report status of Final.
The portlet includes the following fields:
- Budget Displays the amount of budget for the project. - Planned Cost Displays the amount of planned cost for the project. - Variance Displays the variance between planned cost and budget. - Manager Displays the project manager's name. - Stage Displays the stage of the project. - Start Displays the start date of the project. - Finish Displays the finish date of the project. - Overall Status Trend Displays the following arrows indicating how the project is doing overall. The metric is based on
the Overall Status metric in the status report.
- Up Arrow - Green. The project overall status is better. - Side Arrow - Neutral. The project overall status has no variance. - Down Arrow - Red. The project overall status has a significant variance
- Schedule Trend Displays the following arrows indicating whether or not the project schedule is on track. The metric is based on the Schedule section in the status report. - Up Arrow - Green. The project schedule is better. - Side Arrow - Neutral. The project schedule has no variance. - Down Arrow - Red. The project schedule has a significant variance.
- Scope Trend Displays the following arrows indicating whether or not the project scope is on track. The metric is based on the Scope section in the status report. - Up Arrow - Green. The project scope is better. - Side Arrow - Neutral. The project scope has no variance. - Down Arrow - Red. The project scope has a significant variance.
- Cost and Effort Trend Displays the following arrows indicating whether the project cost and effort are on track. The metric is based on the Cost and Effort section in the status report. - Up Arrow - Green. The project cost and effort are better. - Side Arrow - Neutral. The project cost and effort have no variance. - Down Arrow - Red. The project cost and effort have significant variance.
- Last Report Date Displays the report date for the latest status report.
Status Report List
The Status Report List portlet displays the project status reports, including the status report date and indicators. Use this portlet to compare the overall status, schedule, scope, and cost and effort indicators on the project status reports. The Report Status filter option allows you to include status reports that are not final in the portlet. By default, the filter option is set to Final, so only status reports with a status of Final are included in the portlet.
To display information on this portlet, a project status report must exist.
The portlet includes the following fields:
- Report Date Displays the report date entered for the status report. Click the date to view the status report properties page.
- Overall Status Displays the following stoplights indicating how the project is doing overall. The metric is based on the Overall Status stoplight in the status report. - Green. The overall status of the project is on track. - Yellow. The project overall status has a minor variance. - Red. The project overall status has a significant variance.
- Schedule Displays the following stoplights indicating whether or not the project schedule is on track. The metric is based on the Schedule section in the status report. - Green. The project schedule is on track. - Yellow. The project schedule has a minor variance. - Red. The project schedule has a significant variance.
- Scope Displays the following stoplights indicating whether the project scope is on track. The metric is based on the Scope section in the status report. - Green. The project scope is on track. - Yellow. The project scope has a minor variance. - Red. The project scope has a significant variance.
- Cost and Effort Displays the following stoplights indicating whether the project cost and effort are on track. The metric is based on the Cost and Effort section in the status report.
- Green. The cost and effort of the project are on track. - Yellow. The project cost and effort have a minor variance. - Red. The project cost and effort have significant variance. Users can add the following extra fields to this portlet using the Configure option: - Report Status - Status Report Name Default Status values are based on the PMO Accelerator and include On Track, Needs Help, and At Risk.
NOTE More Information: - Personalize a Portlet - PMO Accelerator (See the 14.4 PMO documentation for an explanation of the status lookup values)

## Clarity and Rally Attribute Mapping

When you create a new Rally Portfolio Item from a Classic PPM project, the following information mapping occurs:
- Portfolio Item Name is based on the project name - Planned Start and End dates are based on the Project Start and Project Finish dates - Owner ID is based on the Default Agile Central Owner ID value from the integration instance that is specified in
the Clarity project, Agile System field. If you leave the Default Agile Central Owner ID field blank while configuring an integration instance, a blank Owner ID appears in the corresponding agile portfolio item in Rally. - Project is based on the Default Agile Central Project ID value from the integration instance that is specified in the Clarity project, Agile System field. If you leave the Default Agile Central Project ID field blank while configuring an integration instance, the Project field of the corresponding portfolio item in Rally is set to the first project in the alphabetical order of the projects of the workspace.
Once the Rally Portfolio Item is created, you can change these values in Rally. When the Synchronize Agile Central job runs, it does not overwrite the recently updated values except for the Portfolio Item Name. The job keeps the Portfolio Item Name synchronized with the PPM project name.
Scrum teams can define features, user stories, and tasks under the Rally Portfolio Item. When you next synchronize with Rally, the status details from the Portfolio Item are updated in the corresponding Clarity project. The agile feature details are brought over as tasks in PPM. The following task fields are populated with default values based on the specified agile system integration record:
- Cost Type - Charge Code - Open for Time Entry
During the agile project life cycle, you can synchronize the projects and tasks with status details from Rally. As a Clarity administrator, you can set up the Synchronize job to run at scheduled intervals.
Project-Level Attribute Mapping
The following Rally Initiative attributes are synchronized back to the Clarity project Agile Summary page. The Agile Summary page is accessible from the Properties menu for a project. Not all status attributes from Rally are synchronized back to the project. See the Rally Help for attribute descriptions.

Rally Attribute (Initiative) State Preliminary Estimate

Classic PPM Project Attribute Agile State Agile Preliminary Estimate

Notes


Rally Attribute (Initiative)
% Done By Plan Estimate % Done By Story Count Investment Category

Classic PPM Project Attribute
% Done By Agile Plan Estimate % Done By Story Count Agile Investment Category

Value Score Risk Score WSJF Score Actual Start Date Actual End Date Release

Agile Value Score Agile Risk Score WSJF Score (SAFE scoring attribute) Agile Actual Start Agile Actual Finish Agile Release

Milestones

Agile Milestones

No specific field. The value is dynamically calculated based on user story status and rolled up to the Classic PPM project.
No specific field. The value is dynamically calculated based on user story status and rolled up to the Classic PPM project.
No specific field. The value is dynamically calculated based on user story status and rolled up to the Classic PPM project.
No specific field. The value is dynamically calculated based on user story status and rolled up to the Classic PPM project.

Estimated Story Points Estimated User Stories Accepted User Stories Accepted Story Points

Notes
A budget or investment area that a portfolio item supports. The attribute is available to all portfolio items in the portfolio hierarchy. You can associate each portfolio item with only one investment category.
A timebox in which work occurs to support the delivery of a system or software version. The attribute is available only to the feature portfolio item. You can associate each portfolio item (feature) with only one release. Target dates for events that are important to the business. For example, a milestone can be a market event, a trade show, or an important code deployment. The attribute is available to all portfolio items in the portfolio hierarchy. You can associate each portfolio item with multiple milestones.

Task-Level Attribute Mapping
The following table lists the Rally Feature attributes that are synchronized back to the Classic PPM task Agile Summary page. The Agile Summary page is accessible from the Properties menu for a project task. Not all status attributes from Rally are synchronized back to the task. See the Rally documentation for descriptions of the Rally attributes.


NOTE
Depending on whether a task in Classic PPM is synchronized with a feature or a user story in Rally, the corresponding Agile Summary page appears for the task with the relevant attributes.

Rally Attribute (Feature) Name ID (feature) ID (story) ID (story) State Status
Preliminary Estimate Plan Est Investment Category
Risk Score Value Score WSJF Score Planned Start Date Planned End Date Milestones
Release
Iteration
Actual Start Date

Classic PPM Task Attribute

User Story/Feature/Both

Task Name Feature ID Story ID Parent Story ID Agile State Agile Status

Both Both Story Story Both Story

Agile Preliminary Estimate Agile Plan Estimate Agile Investment Category

Feature Story Feature

Agile Risk Score Agile Value Score WSJF Score (SAFe scoring attribute) Agile Planned Start Agile Planned Finish Agile Milestones

Feature Feature Feature
Feature Feature Both

Agile Release

Both

Agile Iteration Agile Actual Start

Story Feature

Notes
The status can be ready (green), blocked (red), or none (grey)
A budget or investment area that a portfolio item supports. The attribute is available to all portfolio items in the portfolio hierarchy. You can associate each portfolio item with only one investment category.
Target dates for events that are important to the business. For example, a milestone can be a market event, a trade show, or an important code deployment. The attribute is available to all portfolio items in the portfolio hierarchy. You can associate each portfolio item with multiple milestones. A timebox in which work occurs to support the delivery of a system or software version. The attribute is available only to the feature portfolio item. You can associate each portfolio item (feature) with only one release. An iteration is a single, complete development time box, usually two to four weeks in length.


Rally Attribute (Feature)
Actual End Date Total Story Points Accepted Leaf Story Points % Done by Plan Estimate Total User Stories Accepted Leaf Story Estimate % Done by Story Count

Classic PPM Task Attribute

User Story/Feature/Both

Agile Actual Finish Estimated Story Points Accepted Story Points % Done by Agile Plan Estimate Estimated User Stories Accepted User Stories % Done by Story Count

Feature Both Feature Feature Feature Feature Feature

Notes

## Clarity and Rally Integration Examples
- Example 1: Simple WBS Synchronized with Rally Investment - Example 2: Feature Added to Portfolio Item Hierarchy - Example 3: Compare Portfolio Item and Investment Integrations - Examples for Populating Task Dates in
To integrate Clarity projects with Rally investments, as an administrator, you are responsible for creating the portfolio hierarchy data in Classic PPM. See Define the Portfolio Item Hierarchy in Integrate Clarity with Rally for details.
The portfolio item hierarchy for Rally investments allows you the flexibility to arrange your items as follows:
- Skip levels in the portfolio items hierarchy - Use more than two levels of items in the portfolio hierarchy - Move items around in the portfolio hierarchy
Depending on which portfolio item types you select to synchronize with PPM, the Synchronize job builds the tasks WBS with parent and child tasks in Classic PPM. The WBS hierarchy is based on the portfolio item type hierarchy levels or ordinals that you define in Rally. If a direct parent is skipped from the portfolio item hierarchy, the synchronization assumes its next parent as the direct parent. For example, if your portfolio item hierarchy includes only epics and features and skips the initiative level, then the job creates the feature tasks directly under the epic tasks.
NOTE
When a parent Clarity task has actuals, assignments, or both, the integration cannot add a child task under this parent. Instead, the integration adds the child task without a parent. The behavior complies with the rule that summary tasks in Clarity cannot have actuals or assignments. The situation applies when synchronizing user stories or portfolio hierarchy items from Rally to Clarity tasks.
Example 1: Simple WBS Synchronized with Rally Investment
The following images show how the Synchronize Agile Central job brings in the portfolio item hierarchy from the relevant Rally investment into the Clarity project as tasks:


Clarity - 16.4.1 4845

Example 2: Feature Added to Portfolio Item Hierarchy For a given investment type integration in PPM, New Theme, Epic, and Initiative are selected for synchronizing. The Create and Sync Stories option is selected. - In Rally, none of the features associated with the investments have new themes selected. - One feature has an associated epic and many features are associated to initiatives. When the Synchronize job runs, epic, initiative, and user story tasks are created in Clarity and existing user stories appear under initiatives as shown in the following image.

Before the next synchronization, you also select Feature in the portfolio item hierarchy for bringing over to PPM. All other configurations remain the same in Clarity and Rally. When the job runs again, feature tasks are now created in PPM. The epic, initiative, and user story tasks remain. The user stories are now moved under features as shown in the following image.

Example 3: Compare Portfolio Item and Investment Integrations Available in 15.5.1 and higher, the following image summarizes the difference between portfolio item and investment synchronization. The behavior varies slightly based on whether the synchronization is initated by job or by the action menu command.

Examples for Populating Task Dates in The following examples describe how task dates in Classic PPM are populated based on actual or planned dates of the portfolio items in Rally.

Example 1: In this example, the Classic PPM task start date is May 15, 2015 and the finish date is June 28,2015 based on the Rally actual start and end dates:

Rally Actual Start and End Date Rally Planned Start and End Date Classic PPM Project Start and Finish Date

May 15, 2015 May 10, 2015 March 20, 2015

End or Finish Date June 28, 2015 June 25, 2015 August 5, 2015

Example 2:
In this example, the Classic PPM task start date is May 15, 2015 based on the Rally actual start date. However, the task finish date is June 25, 2015 based on the Rally planned end date because the actual end date is not defined.

Start Date

Rally Actual Start and End Date Rally Planned Start and End Date Classic PPM Project Start and Finish Date

May 15, 2015 May 10, 2015 March 20, 2015

End or Finish Date Null June 25, 2015 August 5, 2015

Example 3:
In this example, the Classic PPM task start date is May 15, 2015 based on the Rally actual start date. The task finish date is August 5, 2015 based on the project finish date because the Rally actual and planned end dates are not defined.

Start Date

Rally Actual Start and End Date Rally Planned Start and End Date Classic PPM Project Start and Finish Date

May 15, 2015 May 10, 2015 March 20, 2015

End or Finish Date Null Null August 5, 2015

Example 4:
In this example, the Classic PPM task start date is March 20, 2015 and the finish date is August 5, 2015. The task dates are based on the project start and finish dates because the Rally actual start date is later than the Classic PPM project finish date.

Start Date

Rally Actual Start and End Date Rally Planned Start and End Date Classic PPM Project Start and Finish Date

October 15, 2015 May 10, 2015 March 20, 2015

End or Finish Date Null Null August 5, 2015


Example 5: In this example, the Classic PPM task start date is March 20, 2015 based on the project start date. The task finish date is June 28, 2015 based on the Rally actual end date.

Start Date

Rally Actual Start and End Date Rally Planned Start and End Date Classic PPM Project Start and Finish Date

Null Null March 20, 2015

End or Finish Date June 28, 2015 June 25, 2015 August 5, 2015

Example 6:
In this example, the Classic PPM task start date is May 10, 2015 based on the Rally planned start date. The task finish date is June 28, 2015 based on the Rally actual end date.

Start Date

Rally Actual Start and End Date Rally Planned Start and End Date Classic PPM Project Start and Finish Date

Null May 10, 2015 March 20, 2015

End or Finish Date June 28, 2015 June 25, 2015 August 5, 2015

## Integrate Clarity Timesheets in Rally
- Complete the Prerequisites - (SaaS Option) Configure SSO for Timesheet Integration with Rally - Configure for the Timesheet Integration - Add and Configure the Timesheet App in - Open Your Timesheet Inside
Users can complete their timesheets directly inside Rally by adding the Timesheet app.
(On-Premise only) Enable https for your Clarity product environment. See Application Server Properties in Clarity System Administration (CSA).
(SaaS only) You can also configure SSO for the timesheet integration between Clarity and Rally SaaS. See Configure SSO for Clarity Timesheet Integration with Rally below.

Complete the Prerequisites
In Classic PPM, complete the following prerequisites.
Follow these steps:
1. Install the Agile add-in and configure the integration with Rally. For more information, see Integrate Clarity with Rally. 2. Click Administration, General Settings, System Options. 3. In the New User Experience section, select the following options:
- Activate New User Experience - Activate Timesheets 4. To allow resources to access their timesheets from Rally, complete the following tasks:: - Grant the Timesheet - Navigate access right to the resource. - Click Home, Resource Management, Resources. Click a resource and select Properties, Settings. Set the
following options for the resource:
- Select the Active checkbox. - Set the Track Mode to PPM. - Select Open for Time Entry. 5. To allow resources to enter time against a project, open the project and go to the Team tab. Enable the following settings in the Properties, Settings page of each resource: - Set the Track Mode to PPM - Select Open for Time Entry
NOTE Users (resources) can complete only their own timesheets. They cannot search, fill, or approve the timesheets for other resources.
(SaaS Option) Configure SSO for Timesheet Integration with Rally You can configure SSO for the timesheet integration in a SaaS environment. Implementing SSO allows the users (for example, developers or product owners) between the two products to access either application without having to log in a second time. For example, Mike, a product owner logs into Rally to review the product backlog and wants to record time while remaining in this application. Mike wants to access the My Timesheets feature in Clarity without having to log in again. Users that have logins for both Rally and Clarity are able to log in to either application using SSO.
WARNING If you are using SSO to authenticate to Clarity, contact your SSO team for the custom URL that they use to access Clarity in a SaaS environment. The following is an example of a custom URL:
https://mycompany.my.idpname.com/run?appkey=12345678-12345678&customerID=XXXXXXXX&relayState=https:// ondemand.ca.com/fedsso?targetUrl=https://cppm1234.ondemand.ca.com
The first part of the URL takes you to your identity provider (IdP) for authentication:
https://mycompany.my.idpname.com/run?appkey=12345678-12345678&customerID=XXXXXXXX
After authentication is complete, the end part of the URL tells you where to land in Clarity (for example, the homepage):
https://cppm1234.ondemand.ca.com
Use the above custom URL to first configure the Referrer URL in Clarity and then the Timesheet Path in Rally.
Configure for the Timesheet Integration The following procedure describes how to configure an integration record for Clarity and Rally. Follow these steps: 1. Click Administration, General Settings, Integrations. 2. Open the existing integration record and verify that the Integration URL field points to the Rally server. For example,
https://rally1.rallydev.com . 3. (SSO Only) In the Referrer URL field, enter the source URL from where the request is coming into PPM. The Referrer
URL can be the same as your IdP URL (for example, https://mycompany.my.idpname.com). Sometimes, the IDP can have another URL that becomes the source before reaching PPM. In this case, enter the other URL as the source URL for the Referrer URL. 4. Verify that the Rally users are created in Clarity and are given the access rights listed in the prerequisites section on this page. Users will use theirClarity credentials while accessing the timesheet in Rally.

Add and Configure the Timesheet App in The following procedure describes how to expose the Clarity timesheet on a Rally page. This integration is enabled by a community app that allows users to enter their Clarity time within Rally. 1. Access the Rally documentation and follow the steps for adding the Timesheet app. 2. From the settings icon of the Timesheet app, select Edit App Settings. 3. Configure the following settings:
- PPM Host Name. In a non-SSO environment, enter the Clarity server URL. In an SSO environment, enter the first part of the URL that takes you to your IdP for authentication. Example: https://<mycompany>.<myidpname>.com
- Port (HTTPS). In a non-SSO environment, enter the Clarity server port number. In an SSO environment, enter the IdP port number
- PPM Host Relative Path (for SSO Only). In a non-SSO environment, you are not required to enter the path. In an SSO environment, enter /pm/integration.html, which is the relative path to the integration URL.
Open Your Timesheet Inside As a team member, you can access your Clarity timesheet directly from Rally after the integration is configured by your administrators. Follow these steps: 1. Log in to Rally. 2. Navigate to the PPM Timesheet app. 3. If you are in a non-SSO environment, enter your Clarity login credentials and click Login. If you are in an SSO
environment, you do not need to log in again. The timesheet appears. 4. You can create, fill-in, and submit your timesheet. The following image shows a user creating their new Clarity
timesheet from inside Rally.

NOTE After you log in to the Clarity timesheet page from Rally, you can only view your timesheet. No other Clarity pages are available.
NOTE
More Information: - Clarity: Enter Hours and Submit a Timesheet - Clarity Timesheet Integration with Rally

## Integrate Clarity with CA Single Sign-On (SSO)
- Integration Points and Functionality - Configure the SSO Token - Configure the Application Bind Address, Port, and Proxy - Configure the Policy Server - Create a Single Sign-On Policy - Agent Properties, LogoffUri, IgnoreExt, and IgnoreUrl - Securing Environments Where SSO is Enabled
CA Single Sign-On provides a centralized security management foundation that enables user authentication and controlled access to web applications and portals. CA Single Sign-On delivers advanced security management capabilities and enterprise-class site administration, enabling greater IT control and security.
CA Single Sign-On provides the following features:
- Single Sign-On (SSO) - Strong Authentication Management - Centralized Policy-Based Authorization and Audit - Identity Federation - Enterprise Manageability
TIP
Organizations can manage single sign-on access to Classic PPM by integrating with CA Single Sign-On. We highly recommend that you consult with Clarity and CA Single Sign-On specialists from Broadcom Service partners before planning or implementing this integration. Contact Broadcom Service partners for assistance with all your CA product integrations. The procedures on this page apply to Classic PPM on-premise environments where the administrator can access CSA.
CA Single Sign-On integrates with industry-leading directory services and user stores, eliminating redundant administration of user information. This integration simplifies administration and provides unique and comprehensive security capabilities. CA Single Sign-On fully leverages existing user directories, from leading LDAP directories and relational databases to mainframe security directories.
Real-time transactional security and integrated web services with CA Single Sign-On rules enable security policies that evaluate dynamic data from a variety of local or external sources. These sources include web services and databases in real time. Cost and complexity are reduced by eliminating advanced security logic from web applications and centralizing it within CA Single Sign-On policies.
Integration with CA Single Sign-On has been available for all Classic PPM components since the release of Classic PPM 8.1.2. For further information about Classic PPM and CA Single Sign-On, refer to the Classic PPM Installation Guide, the Single Sign-On Policy Server installation documentation, and the Single Sign-On Web Agent installation documentation.

Integration Points and Functionality The integration protects the Classic PPM application URIs with CA Single Sign-On by creating several realms, rules, and a policy. A rule identifies and controls access to specific resources that are included in the policy. A CA Single Sign-On policy binds rules and responses to users, groups and roles. The responses in a policy enable the solution to customize the delivery of content for each user. Policies reside in the policy store, which is the data source that contains all of the CA Single Sign-On entitlement information. When a Classic PPM user tries to access the protected URI, that is, /niku/nu, /niku/services, or /niku/ app URIs and is not already authenticated, CA Single Sign-On displays a login window and challenges the user for credentials. The user enters credentials and submits them, and is then authenticated against the CA Single Sign-On Policy server. CA Single Sign-On sets an HTTP Header containing the Single Sign-on token and redirects the request to the Clarity Overview URL, so the Clarity application is available to users to start their work. The following steps provide an overview of how the Classic PPM and CA Single Sign-On integration works: 1. The user attempts to access a protected resource, which is the Clarity web application. 2. The user is challenged for credentials and presents them to the Web Agent. 3. The user credentials are passed to the policy server. 4. The user is authenticated against the appropriate user store (such as LDAP or Active Directory). 5. The user receives access to the secured Clarity web application.
Configure the SSO Token 1. In Clarity System Administration (CSA), navigate to your server Properties page. 2. Click on the Security link. 3. Configure the security properties.
4. Configure the Single Sign-On options:
a. Token Name: Enter the same name that matches the token name in CA Single Sign-On. A custom response is added that sets an HTTP header (named cappmtoken in the examples presented in this document) with the user name from the LDAP Directory used for authentication.
b. Token Type: The Token Type should be set to Header so that Clarity checks the HTTP headers for the Single Sign-On token.
c. Logout URL: Configure the logout URL with the location you would like the end user redirected to when they click the Logout link within Clarity or when either their Clarity or Single Sign-On sessions expire.
d. Authentication Error URL: Configure this URL with the location to redirect the user if any authentication error is encountered.
5. Click Save. 6. Restart the Clarity services.

Configure the Application Bind Address, Port, and Proxy
1. In Clarity System Administration (CSA), navigate to your server Properties page. 2. Click on the Application link. 3. Configure the Apache Tomcat application server. 4. In the app instance settings, select the Use Single Sign-on option. 5. If using mod_proxy (simple HTTP reverse proxy), configure the HTTP Port for the app instance to a non-privileged
port. The 8080 port is used as an example. Configure the Bind Address field for the app instance (not the Tomcat Connector Bind Address) to the loopback address (127.0.0.1) if the Apache HTTP server is on the same host. 6. If setting a proxy from Microsoft IIS or Apache HTTP Server with the Apache Tomcat Connector, the Apache Tomcat Connector requires configuration of the Tomcat Connector Port and Tomcat Connector Bind Address for the Clarity app instance. The Apache Tomcat Connector uses the ajp13 protocol. Configure the connection to the Tomcat Connector Port and not the HTTP Port. a. Set the Tomcat Connector Port to a non-privileged port such as 30001. b. Set the Tomcat Connector Bind Address to the loopback address (127.0.0.1) if the Microsoft IIS or Apache HTTP
server is on the same host. 7. Click Save.
Firewall Considerations for Multiple Host Configuration
If the Microsoft IIS or Apache HTTP server proxy into Clarity resides on a separate physical host other than the Clarity application instance, configure firewall rules (IPtables for Linux, Windows Firewall, or hardware firewall) so that only the HTTP proxy server IP address is permitted to reach the bind address and port chosen in the previous steps. Refer to your operating system documentation for information on firewall rule settings.
Failure to secure Tomcat Application bind address leaves the Clarity application open to attacks that bypass the CA Single Sign-On Web Agent protection. See Chapter 4, Securing SSO-enabled Clarity Environments for more information on the repercussions of properly securing the Single Sign-On/Clarity integrated environment.
LDAP Configuration in for Schedulers
If you use CA Open Workbench or Microsoft Project with Clarity, configure Clarity authentication against the same LDAP directory that is used by CA Single Sign-On for authentication. After a period of inactivity in these scheduler applications, the Clarity session in use will become invalid. When this occurs, Microsoft Project and Open Workbench prompt the user to authenticate before they can continue working. If LDAP is not configured as the authentication source for Clarity, this authentication fails.
Refer to the Clarity documentation for a detailed description of the steps for configuring Clarity to authenticate with LDAP. See Installing and Upgrading.
Configure the Policy Server
In this section, we refer to the following related terms as paths or realms.
- uniform resource identifier (URI) - uniform resource locator (URL) - resource filter - path - realm
Classic PPM 14.x or older included the following paths:
- /niku/app - /niku/nu - /niku/services

To support Clarity, Classic PPM 15.1 and newer added the following two paths: 1. /pm 2. /ppm/rest As an administrator, protect these two new resource paths. Only protect the necessary URIs so that unnecessary calls are not made to the Single Sign-On Policy server. Customers who protect the full root may be required to unprotect additional URIs such as /reportservice. Protecting the full root is not recommended. Authentication Schemes Note that in the examples below the Basic Auth scheme is used. This is just for simplicity of example and there is no requirement that the Basic Auth scheme should be used. In most environments the IWA (Integrated Windows Authentication) scheme is a popular choice. Selection of Authentication Scheme is left as a choice to the CA Single SignOn implementation architect. Single Sign-On Realms Create realms in CA Single Sign-On for Clarity: The following image shows these realms in CA Single Sign-On:
REALM 1: Clarity Legacy Application Clarity still makes use of the legacy URI /niku/app for some browser-based application functionality, especially for the Open Workbench and Microsoft Project scheduler tools. Configure Single Sign-On to protect every URI that does not match the following pattern:
*/niku/app*action=sch*
All other URIs under /niku/app are protected. Scheduling tool (OWB or MSP) URIs are allowed to pass unprotected because they are not capable of handling an SSO authentication challenge. Classic PPM directly authenticates access to these scheduler tools with a username and password. You want to exclude schedulers but protect all other requests to /niku/app. Create a resource rule under the realm that uses the following regular expression:


.*action=(([^s])|(.[^c])|(..[^h])).*


REALM 2: Clarity Application The core functionality in Clarity uses the URI /niku/nu and must be protected.

REALM 3: Clarity Services For each realm, create a rule to protect /niku/services. This realm protects the resources used by the Clarity user interface. These are primarily JSON requests from the web toolkit utilized by Clarity. REALM 4: Clarity Clarity uses the URI /pm and must be protected. This realm is required only if your implementation of Clarity must also support SSO.

WARNING 1. The resource must not have a forward slash (change /* to *). 2. In the Action section, include Delete, Head, and Trace in addition to Get, Post, and Put for the Web Agent actions. REALM 5: Clarity REST API The base URL /ppm/rest of REST APIs of Clarity must to be protected if Clarity will be accessed in SSO enabled Clarity environment. . This realm is required only if Clarity needs to support SSO. WARNING In the Action section, include Delete, Head, and Trace in addition to Get, Post, and Put for the Web Agent actions. REALM 6: Clarity Advanced Reporting This realm and rule are optional. The Advanced Reporting (Japsersoft) in Clarity uses the URI /niku/reportserver. This must be un-protected. This is only necessary for customers who protect the full root, which is not recommended. Realm Idle Timeouts Set the idle session timeout to match the Clarity application session timeout value. Both Clarity and CA Single Sign-On default to 1 hour idle session timeout. The Clarity session timeout is very important because it ensures that old inactive user sessions are removed from the Java heap. Set this for all of the realms that have been defined for Clarity. Create a Single Sign-On Policy After you configure the realms and their rules, create a policy under the Clarity Single Sign-On domain. Include the realms and rules as shown in the following image:

Create Single Sign-On Response To provide a consistent HTTP header token for Clarity to use for SSO, create a response that maps the user name LDAP Directory attribute to the new HTTP header cappmtoken. The Single Sign-On built-in HTTP header for the user name is SM_USER, but when Microsoft IIS is configured with the Apache Tomcat Connector, all of the HTTP header variables have the underscore characters turned into dashes, making it SM-USER. It is easier and more consistent to make a token that does not contain an underscore character. The token name must match the value that has been configured for SSO in Clarity. Follow these steps: 1. Click Create to create a new response named cappmtoken.

2. Create a new attribute within the response, with the following characteristics: Attribute Kind: User Attribute Variable Name: cappmtoken Attribute Name: name of the LDAP user_name attribute The attribute name for the user name field differs between LDAP implementations and configurations: - uid: Use this value for CA Directory or other LDAP RFC compliant directories. - sAMAccountName: Use this value for Microsoft Active Directory. - mail: Use this LDAP value if you configure Clarity to use the email address as the login ID. Illustrations of the response properties and the response attribute details appear below.


Clarity - 16.4.1 4862

3. Associate rules and responses in the Clarity Policy. Map the Clarity Token response (created in step 2) to all of the Single Sign-On rules that you created earlier as shown in the following image:

Agent Properties, LogoffUri, IgnoreExt, and IgnoreUrl Set the CA SSO LogoffUri value to the Clarity logout URI. When a Classic PPM user logs out, the SSO session is also invalidated. 1. Open the CA SSO Agent Configuration settings. 2. Add or Modify the LogoffUri in your Agent Configuration Object (ACO)
a. Parameter Name = logoffUri b. Parameter 1 = /niku/nu#action:security.logoutAction c. Parameter 2 = /ppm/rest/v1/auth/logout d. Note: The Parameter 2 is needed when Clarity will be accessed in SSO enabled Clarity environment.

3. The following changes are needed when the Clarity is accessed in an SSO-enabled Clarity environment. Add or modify the IgnoreExt and IgnoreUrl in your Agent Configuration Object (ACO). Add the Classic PPM Clarity font file extensions to the list of ignored extensions. a. Parameter Name = IgnoreExt b. Add Values = .woff,.svg,.ttf,.eot Separate the extensions with commas. c. Parameter Name = IgnoreUrl d. Add Value = /pm/js/core/layout/logout.html The above parameter values are needed when Clarity will be accessed in SSO enabled Clarity environment.
4. Add or modify the BadUrlChars and BadQueryChars in your Agent Configuration Object (ACO). The rest API URLs consist of sensitive chars such as single quote. To avoid API failure with Forbidden (403), check following properties and change the value accordingly.
- BadUrlChars: If this property exists, check the value and remove single quote if it exists in it. If it does not exist, you may need to add/enable this property but don't give any value.
- BadQueryChars: If this property exists, check the value and remove single quote if it exists in it. If it does not exist, you may need to add/enable this property but don't give any value.

Securing Environments Where SSO is Enabled In order for Single Sign-On SSO to properly protect the Clarity application server instances, ensure that no users are able to bypass the Single Sign-On Web agent layer. The below diagram indicates the potential for attack in a vulnerable SSOenabled Clarity environment:

A typical representation of an SSO-enabled Clarity environment utilizing Single Sign-On Secure Proxy server, great care must be taken to ensure that only the Single Sign-On Secure Proxy server can connect to the Clarity application servers. If the Clarity application ports can be reached directly over the network by anyone (bypassing Single Sign-On), a malicious user may connect to the Clarity application port, supply their own HTTP header value and successfully log into Clarity as any user. In the following possible solution, the Single Sign-On web agent is instead running in an Apache HTTP server that is on the same host as the Clarity application. The server level firewall (Windows Firewall or Linux Iptables firewall) is configured to only allow an end-user to connect to TCP port 80, which is bound to the public IP address by the Apache HTTP Server. The Clarity application is bound to the 127.0.0.1 loopback address (Application bind address is configured via the Clarity CSA) and a non-priviledged port (TCP/8080). The loopback address is only reachable by processes running locally on the server. Users on the network can no longer connect to the Clarity application directly without first being authenticated/authorized by Single Sign-On. We strongly recommend that you test after configuring Clarity for SSO. Determine whether the SSO configuration can be circumvented. Attempt to directly bypass the Single Sign-On web agent and connect directly to the ports bound by the Clarity Application. If these attempts to bypass Single Sign-On enforcement are successful, work with your System Administrator, Network Administrator and Clarity Administrator to reconfigure the environment so that it is secure.
Proxy from a Typical Apache 2.x HTTP Server In order for Single Sign-On SSO to completely protect the Clarity application server instances, Clarity itself must prevent any users from bypassing the Single Sign-On Web agent. A typical configuration for Single Sign-On with Clarity would be to have the Single Sign-On Web Agent running in an Apache HTTP server on the same server that is running the Clarity application instance. In order to prevent users from reaching the Clarity instance directly, bypassing the SSO web agent, Clarity should be bound to the loopback address (127.0.0.1) on a non-privileged port (such as 8080). To do this, go to the Application settings in the CSA (Clarity System Administrator) and adjust the "app" instance HTTP Port and Bind Address entries. The Apache HTTP Server should be bound to a public IP address and a privileged port (80 or 443 if SSL is used). Apache should also be configured either as a reverse proxy with mod_proxy or with the Apache Tomcat Connector to communicate with the Clarity application instance. The typical configuration, documented below, uses the mod_proxy method. In the majority of configurations, mod_proxy is sufficient. The only functionality provided by the Apache Tomcat Connector that mod_proxy does not offer is software load balancing. The configuration of the Apache Tomcat Connector for Apache HTTP Server is not provided in this document, but can be found here: http://tomcat.apache.org/connectors-doc/webserver_howto/apache.html The following diagram illustrates a typical Clarity integration with CA SSO on an Apache server:

The following configuration can be used in an Apache 2.2.x or Apache 2.4.x web server to handle both the reverse proxy and the initial redirects required to land the end user on the Clarity Overview page:

# Initial Clarity redirects for SSO # # NOTE: be sure to uncomment LoadLibrary lines for the following modules: # # proxy_module # proxy_http_module # rewrite_module # RewriteEngine On RewriteRule ^$ http://%{SERVER_NAME}/niku/nu [R] RewriteRule ^/$ http://%{SERVER_NAME}/niku/nu [R] ProxyPass / http://127.0.0.1:8080/ ProxyPassReverse / http://127.0.0.1:8080/

Proxy from Microsoft IIS Microsoft IIS has an additional configuration requirement that is not found in Apache 2.x, because there is no built-in Proxy functionality in IIS. Instead, the Apache/Tomcat Connector must be used. When used with Microsoft IIS, the Apache Tomcat Connector automatically converts the underscore character in HTTP Headers to the dash character. Any SSO Header Token value that contains an underscore character will need to have

the underscore replaced with a dash. In Chapters 2 and 3, the HTTP header token was set to cappmtoken to prevent this issue from occurring. More information can be found on integrating the Apache Tomcat Connector with IIS at: Apache Tomcat Connector IIS How-to. The only major Clarity configuration difference from the mod_proxy proxy method, presented in the previous section, is that the Tomcat Connector Bind Address and Tomcat Connector Port in the CSA Application settings must be set to the loopback address (127.0.0.1) and a non-privileged port (such as 30001) as described above in the reverse proxy Apache example. In addition, for security purposes, the HTTP Port and Bind Address values should still be set to a nonprivileged port (such as 8080) and the loopback address (127.0.0.1) respectively, to prevent end-users from bypassing the Web Agent in IIS. The Apache Tomcat Connector will communicate directly with the Tomcat Connector Port in the Clarity Application instance using the ajp13 protocol (not HTTP). The following diagram illustrates a typical Clarity integration with CA SSO on a Microsoft IIS server:
For this option, install the Apache Tomcat Connector in Microsoft IIS. Follow these steps: 1. Download the ISAPI Redirector (isapi_redirect.dll) file.The Apache Tomcat Connector for IIS has been implemented as
an ISAPI filter DLL. This DLL can be downloaded from: http://tomcat.apache.org/download-connectors.cgi The latest version of the DLL, at the creation date of this document, is 1.2.37. The DLL needed for IIS can be downloaded from the win32/i386/x64 "binaries" section and is named isapi_redirect.dll. For 64-bit Windows 2008 / 2012, use the x86-64 binary (tomcat-connectors-1.2.37-windows-x86_64-iis.zip) 2. Place isapi_redirect.dll in the Tomcat bin directory. The Isapi Redirector DLL files sometimes include their version numbers when downloaded. If the files contain version numbers, you must rename the file from

"isapi_redirect-1.2.XX.dll" to "isapi_redirect.dll" and place it in the "bin" directory of the Apache Tomcat installation (i.e. c:\ca\cappm\apache-tomcat-7.0.42\bin\isapi_redirect.dll). 3. Rename the downloaded DLL to isapi_redirect.dll. 4. Create the workers.properties & uriworkermap.properties files. These files are read by the Isapi Redirector when IIS is started and these files provide configuration information necessary for the Tomcat Connector to reach the Tomcat application server. The workers.properties file describes the hosts and ports used by the workers (Tomcat processes). The information in this file should match the bind address and port information from your Clarity Tomcat configuration. Place this file into the "conf" directory under your Tomcat installation (c:\ca\cappm\apache-tomcat-7.0.42\conf \workers.properties).

# Define 1 real worker using ajp13 worker.list=worker1 # Set properties for worker1 (ajp13) worker.worker1.type=ajp13 worker.worker1.host=127.0.0.1 worker.worker1.port=30001

The uriworkermap.properties file maps the URI patterns to workers. This file will contain one pattern, /*. This file should also be placed into the "conf" directory under your Tomcat installation (c:\ca\cappm\apache-tomcat-7.0.42\conf \uriworkermap.properties).

# pattern for Clarity /*=worker1

5. Configure the ISAPI Redirector. To integrate the ISAPI redirector with IIS, several keys and values must be added to the Windows registry. a. Using "regedit" and being very careful to match the spelling exactly, create a new registry key named HKEY_LOCAL_MACHINE\SOFTWARE\Apache Software Foundation\Jakarta Isapi Redirector\1.0 b. Add a String value with the name extension_uri with a value of /jakarta/isapi_redirect.dll c. Add a String value with the name log_file and a value pointing to the location you wish to have your connector logfile (for example: c:\ca\cappm\apache-tomcat-7.0.42\logs\isapi_redirect.log) d. Add a String value with the name log_level and a value for your log level (valid values are debug, info, error or emerg). When finished with initial testing, be sure to set the level back to error to limit the amount of information logged. e. Add a String value with the name worker_file and a value that is the full path to your workers.properties file (for example c:\ca\cappm\apache-tomcat-7.0.42\conf\workers.properties) f. Add a String value with the name worker_mount_file and a value that is the full path to your uriworkermap.properties file (for example c:\ca\cappm\apache-tomcat-7.0.42\conf\uriworkermap.properties)
6. IIS Web Site Configuration (IIS v7/v7.5 only) a. Ensure that the IsapiFilterModule and IsapiModule are installed in IIS. These will not typically be installed by default. These modules can be installed using the Internet Information Services Manager.

b. Add the ISAPI Redirector to the list of allowed "ISAPI and CGI Restrictions" at the top server level in the IIS Manager. a. Select the machine name in the Connections pane in the IIS Manager. b. Under the "IIS" Section in the main window body, double-click the icon labeled "ISAPI and CGI Restrictions" c. Click Add in the Actions pane and click the "" button. Navigate to the location of the file "isapi_redirect.dll" that was configured earlier and select it. d. Check the box marked Allow extension path to execute. e. Click OK to accept the values.

f. Verify that the ISAPI redirector is now in the list of allowed ISAPI and CGI Restrictions. c. Add the ISAPI Redirector as an ISAPI Filter to the IIS web site (Default Web Site is shown in the example) by
following these steps: a. Select the web site in the left navigation. b. Double-click the ISAPI Filters icon in the window. c. Click Add in the Actions pane. The Filter Name must be jakarta and the Executable value should be the full
path to the isapi_redirector.dll file.
d. Using the IIS Manager, right-click on your web site and select Add Virtual Directory. The name of the virtual directory must be jakarta. Its physical path should be the directory where you placed the file isapi_redirect.dll.
e. Grant execute permissions to the ISAPI-dll Handler Mapping for the new directory. a. Select the Jakarta virtual directory in the left navigation pane and then double-click the"Handler Mappings icon in the main window. b. Right-click the disabled ISAPI-dll entry and select Edit Feature Permissions.

c. In the Edit Feature Permissions dialog, check Execute and click OK. f. Restart IIS Manager and test the ISAPI Redirector by opening the IIS website URL with a browser followed by /
niku/nu. For example: http://localhost/niku/nu g. Configure the root context browser re-direct in IIS. Create a default HTML document with META-REFRESH
directive. IIS redirects SSO users to the Clarity overview landing page when they enter the web server at the root context. a. Create a document in the IIS web document root (typically c:\inetpub\wwwroot) named default.htm. b. Enter the following content into that file:
<html> <head> <meta http-equiv="refresh" content="0;url=/niku/nu"/> </head> <body/> </html>
Proxy Timeouts In order for Clarity to properly operate, idle TCP timeouts must be set correctly throughout the architecture at points that serve as reverse proxies. This includes hardware load balancers (F5 Big IP, Cisco Content Switch, etc.), Single Sign-On Secure Proxy Server, Apache HTTP Server or Microsoft IIS. We recommend setting the idle TCP timeout to 15 minutes. Several actions in Clarity, particularly Reports executed in immediate mode from a browser, can run for up to 10 minutes before Clarity responds back to the user warning them that the report is taking too long to execute. During this 10 minute period, the TCP connection from the browser to Clarity is essentially idle. Any timeouts imposed by a proxy device between the end user and Clarity can result in a misleading error to the end user and do not accurately reflect an error experienced in the Clarity Application.
Apache HTTP Server - mod_proxy: ProxyTimeout 900 In the Apache configuration file, include the following directive to extend the
Proxy timeout from the default to 900 seconds when using mod_proxy. By default under Apache HTTP Server, the ProxyTimeout value automatically assumes the value of the Timeout setting (defaults to 300 seconds). - mod_jk When using mod_jk (Tomcat connector), the default socket_timeout value is 0 and thus timeout is disabled. No configuration for timeout is necessary.

Microsoft IIS Under an IIS website, the "Advanced Settings" for will allow the "Connection time-out" to be changed from the default of 120 seconds to 900 seconds for Clarity.
F5 Big IP Under the F5 TCP Profile, the "Idle Timeout" value should be set to 900 seconds.

Single Sign-On Secure Proxy Server Under CA Single Sign-On Secure Proxy Server, the timeout can be adjusted as part of the Agent settings used by the

## Integrate Clarity with Microsoft Project (MSP) or Open Workbench (OWB)
- Common Client Application Installation Scenarios - Install Client Applications From Classic PPM - Silent Installation of Microsoft Project Interface From Classic PPM - Silent Installation of Open Workbench From Classic PPM - Install Client Applications From the Classic PPM Installation Media - Install Client Applications From a File Server - Install Client Applications Locally or From a Client Workstation - Remove Client Applications You can install optional client applications including CA Open Workbench (OWB) and Microsoft Project (MSP). Common installation scenarios, including silent installations, are included. In previous releases, a silent install for MSP required

administrator access to each client workstation. In 15.1 and higher, silent installs are supported without administrator access.

NOTE
To reduce unexpected behavior or errors, set the same language in the integrated OS, components, and applications. For example, set the same language in Microsoft Project, the MSP interface connector, Microsoft Windows, your web browser, and Classic PPM.

Common Client Application Installation Scenarios
Here are the most common client application installation scenarios:
- Local: Files are installed locally on the user client workstation. - Admin: Files are installed on a network drive for client installation. - Client: Most files remain on a network shared drive (a minimum number of files are installed on the user client
workstation). - Push: A third-party tool, such as Microsoft SMS or IBM Tivoli, is used to distribute the client application as either a
local or client installation.
The following table identifies the installation types that apply to different scenarios:

Installation Scenario
Install Client Applications Yes from Clarity
Install Client Applications Yes from the Clarity Installation Media
Install Client Applications Yes from the File Server

Local

Admin No Yes
No

Client No No
Yes

Push No No
Yes

NOTE
- For more information about configuring and using the Classic PPM Microsoft Project Interface, see MSP: Manage Projects with Microsoft Project.
- For more information about configuring and using CA Open Workbench, see OWB: Manage Projects with Open Workbench.

Install Client Applications From Classic PPM
You can download and install Open Workbench and the Classic PPM Microsoft Project Interface from Classic PPM.
Follow these steps:
1. Log in to Classic PPM. 2. Open Home, and from Personal, click Account Settings. 3. Click Software Downloads. 4. Download one of the following applications:
- Open Workbench - Classic PPM Microsoft Project Interface. Click the download link for Microsoft Project Interface x86 or x64,
depending on your version of Microsoft Project. You need the Software Download - Microsoft Project Interface access right to download the software.


5. You can save the file to a local drive or you can start the installation. If you save the file, continue with the next step. Otherwise, follow the on-screen instructions.
6. To install Open Workbench or the Microsoft Project Interface, run the following command: - Open Workbench:
<download drive>:\<downloadpath>\wbsetup.exe
- Classic PPM Microsoft Project Interface:
<download drive>:\<downloadpath>\mspsetup.exe
Silent Installation of Microsoft Project Interface From Classic PPM You can download and install the Classic PPM Microsoft Project Interface from Classic PPM . The download package includes the Microsoft Project Interface with two installation drivers (new and legacy) and Schedule Connect.
NOTE We recommend that you select the same language for MSP, the MSP interface, Classic PPM, and Microsoft Windows. Follow these steps: 1. Log in to Classic PPM. 2. Open Home, and from Personal, click Account Settings. 3. Click Software Downloads. 4. Click the download link for Microsoft Project Interface (x86) or Microsoft Project Interface (x64), depending on your version of Microsoft Project.
NOTE You can save the file to a local drive or you can start the installation. If you save the file, continue with the next step. Otherwise, follow the on-screen instructions. 5. Run the following command and install the application:
<download drive>:\<downloadpath>\mspsetup.exe
6. Navigate to the %Program Files%\Classic PPM Setups folder. Copy the consetup.exe and mspsetup.exe files in the folder.
7. Log in to the computer where you want to install the Microsoft Project Interface. 8. Copy the consetup.exe and mspsetup.exe files to this computer. 9. Run the following command to install the MSP Interface application:
- 32-bit computer: mspsetup.exe /s /v"/qn - 64-bit computer: mspsetupx64.exe /s /v"/qn 10. (Optional) Run the following command to install the MSP Interface and generate the installation logs in the current directory: - 32-bit computer: mspsetup.exe /s /v"/qn /log mspsetup.log" - 64-bit computer: mspsetupx64.exe /s /v"/qn /log mspsetup.log" 11. (Optional) Run the following command to install the MSP Interface and generate logs in a specific folder: - 32-bit computer: mspsetup.exe /s /v"/qn /log c:\mylogs\mspsetup.log" - 64-bit computer: mspsetupx64.exe /s /v"/qn /log c:\mylogs\mspsetup.log" 12. Enter the appropriate command for your environment from the following list to install the add-in (new or legacy driver):
- New Add-In driver for 32-bit MSP application: msiexec.exe /i "<installdir>\CAClarityAddinXML32.msi" TARGETDIR={INSTALLDIR}\CAClarityAddIn" /qb
- New Add-In driver for 64-bit MSP application: msiexec.exe /i "<installdir>\CAClarityAddinXML64.msi" TARGETDIR="{INSTALLDIR}\CAClarityAddIn" /qb
- Legacy Add-In driver for 32-bit MSP application: msiexec.exe /i "<installdir>\CAClarityAddinLegacy32.msi" TARGETDIR="{INSTALLDIR}\CAClarityAddIn" /qb
- Legacy Add-In driver for 64-bit MSP application: msiexec.exe /i "<installdir>\CAClarityAddinLegacy64.msi" TARGETDIR="{INSTALLDIR}\CAClarityAddIn" /qb
NOTE
<installdir> represents the installation directory where the Add-In driver is located. <%Program Files%CA \PPM\Clarity MSPInterface\addIn> is the default location. 13. Run the following command to install Schedule Connect: - 32-bit computer: consetup.exe /s /v"/qn - 64-bit computer: consetupx64.exe /s /v"/qn
Silent Installation of Open Workbench From Classic PPM
Follow these steps:
1. Log in to Classic PPM. 2. Open Home, and from Personal, click Account Settings. 3. Click Software Downloads. 4. Click the Open Workbench link and download the application.
NOTE You can save the file to a local drive or can start the installation. If you save the file to disk, continue to the next step. Otherwise, follow the on-screen instructions. 5. Run the file and install the application:
<download drive>:\<downloadpath>\wbsetup.exe
6. Navigate to the %Program Files%\Classic PPM Setups folder. Copy the consetup.exe and owbsetup.exe files in the folder.
7. Log in to the computer where you want to install Open Workbench. 8. Copy the .exe files to this computer. 9. Run the following commands to complete any of these steps:
- Install the application. owbsetup.exe /s /v/qn consetup.exe /s /v/qn
- Install the application and generate installation logs in the current directory. owbsetup.exe /s /v"/qn /log owbsetup.log" consetup.exe /s /v"/qn /log owbsetup.log"
The log files are saved in the current directory of the process running the commands. - Install the application and generate logs in a specific folder.
owbsetup.exe /s /v"/qn /log c:\mylogs\owbsetup.log" consetup.exe /s /v"/qn /log c:\mylogs\owbsetup.log"
Install Client Applications From the Classic PPM Installation Media
(On-Premise only)

You can install Open Workbench or the Classic PPM Microsoft Project Interface with Classic PPM Schedule Connect from the Classic PPM installation media.
NOTE We recommend you to install the same MSP language that is set as the Windows user locale.
To install a client application from the Classic PPM installation media, navigate to the following directory: - Open Workbench
<drive containing the downloaded installation media>:\Clients\Open Workbench\owbsetup.exe
- Classic PPM Microsoft Project Interface
<drive containing the downloaded installation media>:\Clients\MSPInterface\Legacy\mspsetup.exe or <drive containing the downloaded installation media>:\Clients\MSPInterface\New\mspsetup.exe
- To install the add-in, run the following file:
<%Program Files%>\CA\PPM\Clarity MSPInterface\addIn\setup.exe
- To reinstall Classic PPM Schedule Connect separately, run the following file:
<drive containing the downloaded installation media>:\Clients\ScheduleConnect\consetup.exe
Install Client Applications From a File Server You can install Open Workbench or the Classic PPM Microsoft Project Interface with Classic PPM Schedule Connect from the file server by creating a network installer. The process extracts all files and copies them to the network location. To remove a file server installation, delete the files from the network drive on which you installed them. - Install each client into its own empty network directory. Select any drive to which you have write access. - No registry settings are changed. No programs are registered as installed on the system. - We recommend that you select the same language for MSP, the MSP interface, Classic PPM, and Microsoft Windows. Before you begin, verify that you downloaded Open Workbench or Microsoft Project Interface (x86) or (x64). Follow these steps: 1. Download the applications from the Classic PPM installation media and create a network installer by running one of
the following installation scripts: - Open Workbench
<drive containing the downloaded installation media>\Clients\Open Workbench\Owbsetup.exe /a
- Classic PPM Microsoft Project Interface
<drive containing the downloaded installation media>\Clients\ MSPInterface\Legacy\mspsetup.exe /a or <drive containing the downloaded installation media>\Clients\ MSPInterface\New\mspsetup.exe /a
- To install the add-in, run the following file:
<%Program Files%>\CA\PPM\Clarity MSPInterface\addIn\setup.exe
1. - Classic PPM Schedule Connect
<drive containing the downloaded installation media>\Clients\ScheduleConnect\scheduleconnectsetup.exe /a
2. The files are extracted and copied to the network folder. 3. Execute the following command:
msiexec /package "Clarity Microsoft Project Interface.msi"/qn INSTALLDIR=p:\yourinstalldir
4. Follow the on-screen instructions. 5. Perform the push client application installation.

Client Application Installation Types
After you install the client applications from the file server, you can install the client applications from the network drive. The file server installation supports the following types of installations:
- Local - Client workstation - Push
Install Client Applications Locally or From a Client Workstation
Before you begin, verify that you downloaded Open Workbench or Microsoft Project Interface (x86) or (x64).
Follow these steps:
1. Start one of the following installation processes: - Open Workbench
\\<fileserver>\clarity\owbsetup.exe
- Classic PPM Microsoft Project Interface
\\<fileserver>\clarity\mspsetup.exe
- To install the add-in, go to the client workstation and run the following file:
<%Program Files%>\CA\PPM\Clarity MSPInterface\addIn\setup.exe
- Classic PPM Schedule Connect
\\<fileserver>\clarity\consetup.exe
2. Specify one of the following installation options:
NOTE You can change this option only when running from an Administrative installation.
- Install Local. Open Workbench or the Classic PPM Microsoft Project Interface is installed locally on your hard drive. - Run from the Network. Open Workbench or the Classic PPM Microsoft Project Interface is installed on the network
or on your workstation. You cannot select this option if you run the installation from the Classic PPM Installation media. 3. If you selected Run From the Network, select Data and indicate where to create the data directory. The data directory specifies where to install the client applications on the local workstation.
NOTE The data directory is always installed locally for Open Workbench, even if you select Run From the Network. 4. Perform any of the following actions: a. To change the default setting from Install Local to Run From the Network:
msiexec /I "Open Workbench.msi" ADDSOURCE=ALL
b. To force the default value to Install Local:
msiexec /I "Open Workbench.msi" ADDLOCAL=ALL
c. To overwrite the default installation directory that is contained in the setup file:
msiexec /I "Open Workbench.msi" INSTALLDIR=C:\DEFAULT\DIR
The default installation directory is overwritten and a different installation directory is used.
Perform Push Client Application Installations
First install your client applications from a file server before performing the push client application installation. Use the command-line properties in the following table, or an .MST file, to modify the .msi setup scripts. You can use an .MST to add or change registry keys including those listed in the following table. This table lists the registry keys that you can use to facilitate a push installation or silent install. This is not intended to be an exhaustive list. The listed registry keys are the primary items that are typically used during a push installation.

Use the values in the following table to set the default values for a push installation. This global approach is often used in place of the Microsoft Transform (MST) solution. Example:
HKEY_CURRENT_USER\Software\Niku\Schedulers\Host="myclarityhost" Registry Group: HKEY_CURRENT_USER\Software\Niku\Schedulers

Registry Key LoginName Host ProxyHost ProxyLoginName ProxyPassword HostPort
ProxyHostPort
UseSSL

Value

Command-Line Property

Classic PPM user name

NIKUUSER

Classic PPM server name

NIKUHOST

Proxy server name

NIKUPROXY

Proxy server user name

NIKUPROXYUSER

Proxy server password

NIKUPROXYPASSWORD

Classic PPM port (defaults to 80 when set NIKUPORT to 0)

Proxy server port (this field is left empty when set to "0")

NIKUPROXYPORT

Use Secure Sockets Layer (0 = False, 1 = NIKUSSL True)

Create a .MST File For these registry keys, string entries are left empty by default; while dword entries are zero (0) by default (except for HostPort, which defaults to 80). You can set each value using the command line during an installation in the same way that you can set the INSTALLDIR property. Example 1
msiexec /I "Clarity Schedule Connect.msi" NIKUHOST=myserver NIKUPORT=8080
Example 2 This example shows quotation marks around the string to pass two properties, NIKUHOST and NIKUPORT.
consetup.exe /v"NIKUHOST=myserver NIKUPORT=8080"
When the user logs in to Classic PPM from Open Workbench for the first time, the server and port addresses contain the correct values. Example 3 To pass a path to a property, consider the following example.
consetup.exe /v"INSTALLDIR=\"d:\My Install Dir\" NIKUHOST=myserver NIKUPORT=8080"
NOTE Enter the quotation marks that contain the path and specify the entire path on one line.
Follow these steps: 1. Make a copy of Open Workbench.MSI and assign it a unique name. 2. Open the new file in a tool, such as Orca, that can modify MSI files. 3. Modify the file to add or change registry settings and to set global properties. 4. Use the Microsoft Windows Installer SDK to create the mst file.


NOTE For details, see your Microsoft Windows Installer SDK documentation.


Remove Client Applications
You can remove any of the following client applications using Add or Remove Programs on the Microsoft Windows Control Panel. For assistance, see the Microsoft Windows online help.
- CA Open Workbench - Clarity Microsoft Project Interface - Clarity Schedule Connect - Clarity XML Open Gateway
NOTE
More Information:
- MSP: Manage Projects with Microsoft Project - OWB: Manage Projects with Open Workbench

## Introducing Clarity Cookbooks

Cookbooks help you learn Clarity by showing a detailed demonstration followed by a step-by-step configuration.
Welcome to the Cooking with Clarity series. Clarity Cookbooks help to break down the complexity of the Clarity product by showing a detailed demonstration of a best practice implementation of key features in Clarity, followed by detailed configuration steps to accomplish the same implementation yourself. Our inaugural Cookbook, Roadmaps That Tell a Story shows you how to configure effective Clarity Roadmaps using all of the valuable visual and technical capabilities available. Our second Cookbook, Objectives and Key Results (OKRs) shows you how to use Value Stream Management (VSM) capabilities offered by Clarity and Rally to create and synchronize Objectives and Key Results (OKRs) across both systems.

## Clarity Cookbook: Roadmaps that Tell a Story

This cookbook helps stakeholders involved in strategic management and planning to focus on creating Roadmaps using Clarity for their organization.

Welcome to the Cooking with Clarity series. Our experts, Kurt Steinle, and Brian Nathanson will walk you through how to maximize your investment in Clarity by effectively leveraging the Roadmaps capability. This is the first of a series of Cooking with Clarity sessions. Each session will have two phases. A product expert will present the finished dish in the first phase and walk us through it. Another expert will show you how to recreate that dish in the second phase.
TIP Free Clarity Training on Broadcom Academy - You can attend FREE Clarity training by registering at the Broadcom Academy.
- The Clarity Cookbook: Roadmaps that Tell a Story training is available in the Academy. - You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom
credentials, simply create a new account and start training. In this series, the finished dish is a roadmap. Our experts will create the finished dish by using a set of four recipes. 1. Add meaning to your story - Use swimlanes, colours, and metrics. 2. Provide context to the story - Use dependencies, events, and visual widgets. 3. Show how the story depends on others - Use Business Agreements. 4. Support constraints-based planning - Use visual widgets.
Add Meaning to Your Story: Swimlanes, Colors, and Metrics
- Setup Portfolio Category 1 and 2 Lookup Options - Setup the Portfolio Category 1 and 2 Color Mappings - Relabel Portfolio Category 1 and 2 Attributes - Create a View for Importing Investments - Create a New Roadmap - Import Projects, Investments, and Ideas from Clarity - Sync Linked Items - Group Roadmap Items into the Swimlanes

How do you turn a complex set of activities into a unified story that is easy for your audience to digest? You can perform the following key activities:
- Set up Swimlanes and colors based on key categorization areas such as Portfolio Category. - Use colors to provide more context and another dimension. - Use metrics to provide additional context. Let's review the various actions you need to perform to work with Swimlanes, Colors, and Metrics.
TIP Free Clarity Training on Broadcom Academy - You can attend FREE Clarity training by registering at the Broadcom Academy.
- To view the finished dish and recipe demo videos, take the Clarity Cookbook: Roadmaps that Tell a Story course in the Broadcom Enterprise Software Academy.
- Watch the Step-by-Step recipe section to watch a video of how these actions can be configured. Note that the finished dish recipes in this documentation give you specific steps to achieve the exact configuration depicted in the video demos.
- You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom credentials, simply create a new account and start training.
Setup Portfolio Category 1 and 2 Lookup Options A lookup is a list of values that you want other users to see in the drop-down and multi-select lists. These can be used in situations where you want to do portfolio categorization, but it is something that you need to tailor for your organization. See Configure Lookups if you want to create your own custom lookups. But for this cookbook demo, follow the below steps to set up out-of-the-box Portfolio Category 1 and Portfolio Category 2 lookup options and add values of your own to these lookups. Follow these steps: 1. Log into Clarity PPM. 2. Click Administration, Data Administration, Lookups. 3. Enter Portfolio Category in the Lookup Name field and then click Filter. You can see Portfolio Category 1 to 4
lookups in the filtered list. You can use all 4 categories if you want to achieve a purpose. But for this recipe, you just have to work with Portfolio Category 1 and 2 lookups. 4. Click Portfolio Category 1 from the filtered list. 5. See Create Static List Lookup Values and add the following lookup values to this category. - Run the Business - Change the Business - Grow the Business
TIP When adding an ID code, be particular in using a specific or generic ID code and not the full name of the lookup value. This is due to the fact that once the lookup value is committed, you cannot change the ID code and you cannot delete it either. You can only deactivate so that this no longer shows. However, it is

possible for you to rename the lookup value name at any point and you may not reflect the same in the ID code anymore. Henceforth, it is recommended to use a generic ID so that you can be able to make rename the value and need not worry that the ID no longer matches the lookup value. 6. Click Return to return to the filtered list. 7. Click Portfolio Category 2 and see Create Static List Lookup Values to add the following lookup values to this category. - Retain Customers - Delight Users - Simplify Onboarding - Improve Technology 8. Click Return. You can now advance to the next recipe to do color mappings.

Setup the Portfolio Category 1 and 2 Color Mappings
Now that the Portfolio Category 1 and 2 lookups have been configured, the next step is to set up the color mappings for their attributes. Since Portfolio Category 1 and 2 are defined in the Investment object, you must go to Administration, Objects and then search for and select Investment.
Follow these steps:
1. Click Administration, Studio, Objects. 2. Enter Investment in the Object Name field and then click Filter. You can see the filtered list with the Investment
keyword. 3. Click Investment from the filtered list and then click the Attributes tab. 4. Enter Portfolio Category in the Attribute Name field and then click Filter. You can see Portfolio Category 1 to 4
attributes in the filtered list. 5. Click Portfolio Category 1 from the filtered list. 6. See Configure Display Mappings for Attributes and set up color mapping as shown in the below table in the Display
Mappings sections.

Color

Description

Value

Yellow

Run the Business

Run the Business

Blue

Change the Business

Change the Business

Green

Grow the Business

Grow the Business

7. Click Save and Return to return to the filtered list. 8. Click Portfolio Category 2 from the filtered list. 9. See Configure Display Mappings for Attributes and set up color mapping as shown in the below table in the Display
Mappings sections.

Color

Description

Value

Red

Improve Technology

Improve Technology

Yellow

Simplify Onboarding

Simplify Onboarding

Blue

Delight Users

Delight Users

Green

Retain Customers

Retain Customers

10. Click Save and Return to return to the filtered list.

11. Click Return.

12. Enter Roadmap in the Object Name field and then click Filter. You can see the filtered list with the Roadmap keyword.


13. Click Roadmap Item from the filtered list and then click the Attributes tab. 14. Repeat steps 4 to 10. You can now advance to the next recipe to rename or relabel the portfolio categories.

Relabel Portfolio Category 1 and 2 Attributes
You can use the Attributes grid in Clarity to create or edit labels for stock and custom attributes. This functionality allows you to use labels relevant to your organization versus using generic Clarity labels. These labels are only applicable in Clarity and do not impact Classic PPM. Here, follow the below steps to rename the Portfolio Category 1 and 2 attributes as Portfolio Impact and Customer Impact respectively in Clarity.
Follow these steps:
1. Log into Clarity. 2. Click Administration and then Attributes. 3. Use the column picker to add the Label field to the grid next to the Attribute ID column. 4. Click Show Filter and from the Add Filter drop-down, select Attribute. 5. Retain operator as Contains and then enter Portfolio Category in the text field. You can see Portfolio Category 1
to 4 attributes in the filtered list. You can also notice that they show up multiple times once for each of your investment types that have those categories including the roadmap item object. 6. Relabel all the Portfolio Category 1 and 2 attributes as Portfolio Impact and Customer Impact respectively in the Label column against the Investment and Roadmap Item object types.
NOTE If you try to relabel one of the sub-investment objects such as an idea or project, you will get a message stating that you cannot update the label for an inherited attribute. 7. Advance to the next recipe to create a view.

Create a View for Importing Investments
When you want to import investments, you may have certain criteria based on which the investments would be added to a roadmap. For example, they are all projects associated with a portfolio or category. You can navigate to the Projects grid and perform the following steps to customize the projects grid layout:
Follow these steps:
1. Click Projects. 2. Use the column picker to add the Portfolio Impact and Customer Impact columns to the grid next to the Finish
column. NOTE In the Columns picker, you need to search for the Portfolio Impact and Customer Impact columns and not Portfolio Category 1 and 2 as you have already relabeled them.
3. Click Show Filter and from the Add Filter drop-down to add the following filters to show the specific projects that are of interest so that you can identify relevant investments that should be imported into a roadmap.

Filter Department
Template Active

Operator Is Equal To
Is Equal To Is Equal To

Value Select the Business Operations checkbox. Select No from the options. Select Yes from the options.

Once the above filters are applied, you should be able to see the filtered list (approx 26 projects of the out-of-the-box data) in the grid.


4. Optional: You can add the Starred column before the Project Name column if you want to mark a certain set of investments so that you can identify these easily when you are importing them into your


roadmap. 5. Use the Bulk Edit capability to update the Portfolio Impact values for the required investments. You can edit multiple
records on the Grid layout. Select multiple records for which you want to update a Portfolio Impact value and click the Edit button. A bulk edit window will be displayed. The window includes all the fields displayed in the grid. As required, select an attribute value from the Portfolio Impact column drop-down to the selected set of investments. Continue until you have assigned all three Portfolio Impact values to all sets of investments. Click Save to commit your changes. 6. Repeat step 5 to assign the Customer Impact values to investments using the Bulk Edit capability.


For this demo, you can bulk assign values as per the below


illustration. 7. Click Save to save this particular view. 8. Advance to create a new roadmap.
Create a New Roadmap
In case you want to create a roadmap manually, you can perform the following steps.
Follow these steps:
1. Log into Clarity and click Roadmaps. 2. Click New Roadmap. 3. Complete the following fields:
- Roadmap Name Enter the name of the roadmap. For example, Cooking Roadmap. - START PERIOD Select a start period from the drop-down. For this demo, select 2021 (Previous Period). Start
Period defines the roadmap start period that is based on what fiscal annual periods you have configured for your default entity. The field shows the next fiscal annual period by default. For example, if the current date is April 15, 2021, the default fiscal period shows 2022, the next annual fiscal period. - DURATION Select a roadmap duration from the drop-down (one year as the default). For this demo, select 3 years. The duration that you can select depends on the corresponding annual fiscal periods that are set up on the default entity. For example, you select 2021 as the start period and there are three annual fiscal periods (2021, 2022, and 2023) set up on the default entity. The duration options that appear include 1 Year, 2 Years, and 3 Years.
IMPORTANT The Other option appears if you have more than five annual periods that are defined in the future. Consider a scenario where you select 2022 as the start period and the default entity has annual fiscal periods that are defined through 2030. In such a scenario the Other option appears. When you select this

option, the system allows you to enter only a number from 6 through 8. You can change the duration after creating a roadmap by updating the Duration attribute. 4. Click CREATE. Your new roadmap appears in the default timeline layout with a unique system-defined ID. If autonumbering is not set up in Classic PPM, enter a unique ID for your roadmap. 5. Advance to import roadmap items to your roadmap in the timeline, board, or grid layout. Import Projects, Investments, and Ideas from Clarity You can create roadmap items by importing active projects, ideas, or custom investments for which you have at least view access rights. When you import projects, ideas, or custom investments as roadmap items, the application creates a link between the roadmap item and the investment object. Each investment object remains linked to the new roadmap item. For this demo, follow the steps below to import the projects from the view that you created earlier.Follow these steps: 1. In the main menu, click Roadmaps. 2. Open a roadmap in the timeline view. 3. Optional: Click Scenarios, and select a scenario. For this demo, you can ignore this step. 4. Click Item Actions and select Import from PPM. 5. To import any investment object, complete the following steps: a. Select Project, Idea, or <custom investment name> from the drop-down menu. For this demo, select Project. The Select From Project page appears. You can observe that the view that you created earlier appears as is in the page. b. ClickSelect All to select all the rows. c. Click Add.

NOTE
Each imported project or investment appears as a roadmap item in the timeline, board, or grid. Roadmap item data remains linked to the original projects and investments. The Linked To and Linked To ID columns on the grid layout show the original project or investment data. The financial data from the cost plans of the imported custom investments is also imported in the roadmap item. d. Optional: To add a roadmap item manually, you can click and drag to draw the item on the timeline to cover the appropriate duration. You can add multiple roadmap items within the same row. Complete the fields in the Details panel. If your administrator has created any mandatory attributes, they will also be added to the Details panel. For this demo, you can skip adding roadmap items manually. 6. Advance to the next step to sync linked items.
Sync Linked Items
Links are created between roadmap items and projects, custom investments, or ideas when you perform the following actions:
- Import projects, ideas, or custom investments into a roadmap. - Link a roadmap item to a project, idea, or custom investment in the grid.
As the roadmap or portfolio manager, you can synchronize your linked roadmap items to existing projects. Synchronizing ensures that the roadmap data reflects the latest system data from the linked projects. You can control which roadmap items, attributes, or attributes groups to synchronize. As a project manager, Nicole should also be able to sync either Allocation based or Assignments based capacity attributes.
Follow these steps:
1. Click Item Actions and select Sync Linked Items. a. Select the roadmap item attributes to synchronize. You can select all attributes, attribute groups, or only specific attributes. For this demo, retain the defaults. b. To sync custom lookup attributes for projects, ideas, custom investments, and multi-valued lookup - strings, select Matching Custom Attributes. c. Click SYNC. Sync in progress appears. You can work on other scenarios or other application pages during the sync operation. Only the current scenario is temporarily locked for editing.
2. After the sync process is complete, the custom attributes are populated in the roadmap item custom attributes. 3. Advance to the next step to group roadmap items into swimlanes using View Options.
Group Roadmap Items into the Swimlanes
Configure the timeline layout to view roadmap items that are grouped in swim lanes by attribute. You can view the items by color and can map those colors back to meaningful values. You can also set the zoom level and select financial metrics that appear as badges on your roadmap items. By default, the timeline swimlane and color settings are set to None. Adjust the settings for your audience. For more information on View Options, see Configure Roadmap Timeline View Options.
Follow these steps:
1. Click View Options. 2. Select the start period for the timeline layout. If you select a Start Period beyond the duration of the timeline, you will
be able to see Roadmap items between your Start and End period. For this demo, select 2021-Q4 from the Start Period drop-down. 3. Close View Options. You can notice that bars are now a little longer on the timeline layout which gives better visibility. Now that the layout is set, you can now group the roadmap items into swimlanes.

4. Click View Options again and select the Portfolio Impact picklist from the Swimlanes drop-down. Once you close View Options, you can notice that the roadmap items are grouped into horizontal swim lanes by the Portfolio Impact picklist values. You can select from the list of default global picklists or can create a custom global picklist. You can also create a local picklist applicable only to this roadmap. TIP At this point, you can compress your roadmap by dragging the roadmap items (up or down) into their respective places or snap the items together when you have multiple items on the same bars. The guidelines will help you to ensure that you keep it on the dates that you want when moving the items. You can certainly make adjustments to make the overall presentation more compact.
5. Click View Options and then select the Customer Impact picklist from the Color By drop-down to add color to your roadmap items based on the display mapping of the picklist values. You can now see the colors that you defined earlier come in as part of the overall field mapping. The colors legend in the bottom right corner of the page shows the value associated with each color. If you collapse the legend, you can reopen it by clicking Legend. By default, roadmap items appear in a blue color when you have not selected a value for Swinlanes or Color By.
6. Select up to three financial metrics (Benefit, Total Cost, and Capacity) from the Metrics drop-down to display as badges on the roadmap items to review them in the timeline. The badges appear on each roadmap item in the same order as you select them. You can also edit the values for the selected metrics for each roadmap item in the timeline. Your selected metrics remain the same for you between sessions in an unsaved view. To keep your settings, save your view. At this point in the demo, your view may look as per the below
illustration. 7. Click the View drop-down and then click Save As. Enter Portfolio & Customer Impact in the View field. 8. Click Save to save the view. This gets to a point in terms of how you can tell the story with roadmap about how each of
these investments are impacting and what contribution is to the overall organization.
Provide Context to Your Story: Dependencies, Events, and Visual Widgets
- Recipe Preparation - Configure "Go Live Date" as an Attribute - Mark Milestones as Key Tasks - Define Go Live Date - Working with Dependencies - Working with Events - Configuring Visual Widgets


Now that you have added meaning to your roadmaps, the next act is to provide context to your story. Here, this recipe here shows us how to tune up your roadmap, and add powerful impact dates and dependencies and some progress into the roadmap.

TIP Free Clarity Training on Broadcom Academy - You can attend FREE Clarity training by registering at the Broadcom Academy.
- The Clarity Cookbook: Roadmaps that Tell a Story training is available in the Academy. - Watch the Step-by-Step recipe section to watch a video of how these actions can be configured. - You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom
credentials, simply create a new account and start training. 1. Milestones and Go-Live Date: We can include Milestones in our Roadmap to indicate the progress of our roadmap
items. Notice several of the milestones are completed (dark diamonds). We can also highlight critical Go-Live impacts by providing a Flag to indicate when a completed investment has a significant impact. 2. Dependencies: Roadmap dependencies are useful in indicating the sequencing of roadmap items. You can define which items need to be delivered before another roadmap item begins. 3. Events provide perspective on how organizational or external events are either impacted by or impact the roadmap itself. You can configure visual indicators to represent events such as milestones or another key (linked) investment dates in the form of a diamond, circle, triangle, square, star, flag, or rocket. For example: a. Star is today b. Triangle - for each planning increment c. Rockets - indicate key customer launches d. Circle - highlights a key User Conference we're providing content for 4. Widgets tie it all together. This helps stakeholders to make decisions not just on each discrete investment or each discrete activity, but on the overall delivery of a roadmap item, and what impact it has on the business. So this is an excellent way to communicate your plans to decision-makers and stakeholders that can really help you from an execution and delivery standpoint. Widgets can give you key discussion points on: a. What you are delivering b. How they are related c. What are the key events? d. How many items impact critical categories (widgets)
Recipe Preparation Let's review some things you can do to prepare for this phase.

Configure "Go Live Date" as an Attribute
Create a Go Live Date date attribute for the investment object to provide a field where users can enter a date or can select a date by clicking a calendar icon.
Follow these steps:
1. Login to Clarity PPM and then select Administration, Studio, Objects. 2. Enter Investment in Object Name and click Filter. 3. Select Investment. and then click Attributes. 4. Click New. 5. Enter Go Live Date as an attribute name and a unique ID. 6. Set the Data Type field to Date. 7. Enter c_goLiveDate in the API Attribute ID field. 8. Save your changes.

Mark Milestones as Key Tasks
In the project, ensure that the milestones are marked as key tasks. Milestones that have the milestone and key task fields marked are called key milestones. Only key milestones can be pulled into the roadmap.
Follow these steps:
1. Login to Clarity and click Projects. 2. Open a project. For example, Learning Portal Optimization. 3. Select Tasks. 4. Use the column picker to add the Milestone and Key Task columns to the grid. 5. Identify which tasks are marked for both Milestone and Key Task. For example, for Initiating Process
Complete, you can notice that both Milestone and Key Task are marked in that row.

Define Go Live Date
In Projects, use the column picker to add Go Live Date column and then assign some go live dates to the projects.
Follow these steps:
1. Click Projects and then click Columns. 2. Search for Go Live Date and drag it to the Projects grid. 3. Assign go-live dates for required projects using the calendar icon. For example, you can assign go-live dates for the
below projects. For a particular project row, hover on the Go Live Date column to use the calendar icon.

Project Name CRM Enhancements Executive Dashboard Visibility Meeting Reservation Portal

Go Live Date May 31, 2023 Mar 31, 2023 Aug 31, 2023

Working with Dependencies
To define dependencies between roadmap items, add dependency lines between the roadmap items. You can add dependency lines from one roadmap item to another or multiple roadmap items. For example, you can connect the CRM 2.0 roadmap item in the Grow the Business swim lane to the SaaS Migration roadmap item in the IT Operations swim lane.


Follow these steps:
1. Click Roadmaps. 2. Open Cooking Roadmap and then click View Options. 3. Ensure that Show Dependencies is toggled on. 4. Enter 2022-Q1 in the Start Period and then enter 2023-Q3 from End Period to tighten up the roadmap. 5. Close View Options. 6. Hover over a source roadmap item (for this demo, Learning Portal Optimization), click the connector icon, and
then drag on to a target roadmap item (Mobile Identity Management Enhancements) to create a dependency line. Dependency lines with arrows show the relationships between roadmap items in the timeline 7. Repeat step 6 to create the following dependencies.

Source Roadmap Item MyLearning Mobile Pilot Mobility Management Services Mobile Time and Approvals

Target Roadmap Item Social Networking Security Upgrade CRM Enhancements Global HR Application Maintenance

8. Optional: To delete a dependency line, click a required dependency line that appears next to each target roadmap item and then click DELETE.
9. Optional: To hide the dependency lines, click View Options and clear the Show Dependencies check box. In the dependency mode, drag-and-drop is disabled for the roadmap items. To edit a roadmap item, click the item to open the DETAILS panel.

TIP
If there is a large distance between roadmap items, the dependency lines are truncated in the timeline. In the grid, add the Predecessor and Successors attributes from the Column Panel to view all dependencies for a particular roadmap item. A maximum of 25 predecessors and 25 successor values appear for a roadmap item. Any changes you make to the dependencies in the timeline are reflected in the grid.

Working with Events
Roadmap Events represent dates such as Today, Roadmap Start, Roadmap Finish, or any configured dates in the form of a diamond, circle, triangle, square, star, flag, or rocket. By default, Today, Roadmap Start, and Roadmap Finish are predefined. You can leverage Manage Roadmap Events to optionally define new or edit existing roadmap visual indicators for Events and also associate the icons with relevant roadmap events.
Item Events represent linked investment dates such as investment start or finish dates, Milestone Tasks or custom date attributes. By default, Key Milestones is already pre-defined. Key Milestones are the tasks that are flagged for key Tasks and Milestone in a project. You can leverage Manage Event Items of Events sub-tab to define item events and also associate the icons with relevant item events. For more information, see Manage Item Events.
Follow these steps:
1. Open a roadmap and click Timeline. For this demo, you have already opened Cooking Roadmap when creating dependencies.
2. Click View Options. 3. Click EVENTS. The list of roadmap events and roadmap item events that are configured appears. 4. Turn on the Show Roadmap Events toggle to see the visual indicators (symbols) and its dedicated Events swim
lane on the timeline based on the selected roadmap events. 5. Under the Roadmap Events section, select the Today check box. You can notice that the associated visual indicator
(the start symbol with a dotted line) appears on the timeline. 6. Optional: If you want to show the outlines of the start and finish of the roadmap, you can select the Roadmap Start
and Roadmap Finish check boxes. You can skip this for this demo. 7. Click Manage Roadmap Events to create and manage roadmap events. You can configure to change the visual
indicators (symbols) and line color of events that are plotted on the timeline layout. The Roadmap Events window appears that allows you to create a new roadmap event or edit an existing event. 8. Click New Event to add more roadmap events. A new row appears for you to enter the required values. 9. Provide the following event details and repeat step 8 after entering details in each row.

Name 2022-Q3 2013-Q1 Customer launch User Conference

Date 8/1/2022 2/5/2023 12/15/2022 4/4/2023

Image Triangle Triangle Rocket Circle

Line None None Orange Purple


10. Optional: To edit an existing event, change the date, image, and line values by moving the choices up or down in respective lists against the required event name. To rename an existing event, click the required event name text box and edit the value. NOTE - You cannot rename or delete the default roadmap event names. However, you can change the date, image, and line values. - To delete an existing event, hover on the required event and click X that appears far right of the respective row.
11. When done, click X Close. You can notice the above entries under the Roadmap Eventssection. By default, these are not selected.
12. Select all four events check boxes created in step 8 to see associated visual indicators on the timeline. 13. Hover over the individual visual indicators (symbols) in the Events swimlane to see the event details. Now that the
Roadmap events are set, advance to creating and managing roadmap item events. 14. Under the Item Events section, select the Key Milestones check box. By default, Key Milestones is already pre-
defined. Key Milestones are the tasks that are flagged for Key Tasks and Milestone in a project. 15. Click Manage Item Events to add new item events, that is, you can select a particular date attribute on the investment
and indicate the dates on the bars. You can also change the images (symbols) for key milestones that are plotted on the bars of any roadmap items with linked investments. The Item Events window appears that allows you to create Item Event or change an image (symbol) against a date attribute. 16. Click New Event to add date attributes. A drop-down list appears for you to select a particular date attribute on the investment. 17. Select a date attribute from the list and then select an image that you want to indicate on the bars.


For this demo, select Go Live Date from the date attributes list and Flag from the image


list.
18. When done, click X Close. You can notice the Go Live Date entry under the Item Events section. By default, it is not selected.
19. Select the Go Live Date check box. You will not notice any changes in the timeline as item events must be synced before they are visible and positioned on a Roadmap Item.
20. Close View Options. 21. Click Item Actions and select Sync Linked Items. 22. Ensure that all check boxes are selected including the Matching Custom Attributes check box and the With Events
radio button.
23. Click Sync. Sync in progress appears. You can work on other scenarios or other application pages during the sync operation. Only the current scenario is temporarily locked for editing.
24. After the sync process is complete, you can see the Key Milestone events and Go Live Date attributes plotted on the roadmap items (bars).
25. At this point, you can save the view as Overall Timeline w Events and advance to the next section.


Configuring Visual Widgets
You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. For more information, see Working with Configurable Widgets in Top-Down Planning with Roadmaps.
The following widgets are available.
- Number Tile Widget: Displays a specific number based on the widget definition and filter criterion. - Pie Widget: Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant
field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category. - Bar Widget: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category. - Progress Ring Widget: Displays a ring with a number based on the widget definition and filter criterion. - Target (only for roadmaps): Displays targets either as goals or constraints on the number and money attributes of the Roadmap Item object.
Follow these steps:
1. Click Show Widgets to display the Widgets toolbar. 2. Click Manage Widgets to open the Add Widget dialog box. 3. Click New Widget to open the New Widget window. 4. Select the Number Tile widget type and then click Next. 5. Enter Retain Cust in the Title field. Note the display on the right indicates how the title is displayed. 6. Select Teal from the Color drop-down. 7. Select Count from the Type drop-down. 8. Select Number under Format. 9. Select Customer Impact from the filter drop-down under the Only Include items where... section. 10. Select Is Equal To as the operator and then select the Retain Customers checkbox from the list. 11. Click anywhere in the New Widget window to cast the filter selection. Else, the filter might not be applied. 12. Optional: Turn on the In Widget Library toggle if you want to make this widget available to others within your
organization. 13. Click Create. You can see the Retain Cust widget in the Add Widgets dialog box. 14. Repeat steps 3 to 13 for creating the remaining Number Tile widgets.

Title Delight Users
Onboarding
Improve Tech

Color Yellow
Orange
Red

Type Count
Count
Count

Format Number
Number
Number

Filter Criteria
Customer Impact = Delight Users
Customer Impact = Simplify Onboarding
Customer Impact = Improve Technology


You now have 4 Number Tile widgets created. Advance to the next steps to create a Progress Ring widget. 15. Click New Widget. 16. Select the Progress Ring widget type and then click Next. 17. Enter In Plan in the Title field. 18. Select Green from the Color drop-down. 19. Select Count from the Type drop-down. 20. Select Percent under Format. 21. Select In Plan from the filter drop-down under the Only Include items where... section. 22. Select Is Equal To as the operator and then select the In Plan check box from the list. This will return only the count
that matches this condition. IMPORTANT Click the lookup so the selected value(s) are saved. Do NOT just click Create after selecting the value in the lookup.
23. (optional) Turn on the In Widget Library toggle if you want to make this widget available to others within your organization.
24. Click Create. You can see the In Plan widget in the Add Widgets dialog box. Advance to the next steps to create a Pie Chart widget.
25. Click New Widget. 26. Select the Pie Chart widget type and then click Next. 27. Enter By Manager in the Title field. 28. Select Count from the Type drop-down. 29. Select Percent under Format. 30. Select Manager from the Group By drop-down. 31. Select Descending under Sort Order. 32. Click Create. You can see the By Manager widget in the Add Widgets dialog box. Advance to the next steps to
create a Bar Chart widget. 33. Click New Widget. 34. Select the Bar Chart widget type and then click Next. 35. Enter Impact Funding in the Title field. 36. Select Sum from the Type drop-down. 37. Select Number under Format. 38. Select Portfolio Impact from the Group By drop-down. 39. Select Total Cost from the Sum drop-down. 40. Select Descending under Sort Order. 41. Click Create. You can see the Impact Funding widget in the Add Widgets dialog box.

If you exit now, none of this will show up in your dashboard. The next step is to add them to your dashboard. Also, you can add them in the order that you want them to appear. 42. Click Add underneath each of your new widgets in the order you want them to appear in the roadmap display (left to right). For this demo, click Add underneath the widgets in the following order. a. Impact Funding b. By Manager c. Retain Cust d. Delight Users e. Onboarding f. Improve Tech g. In Plan 43. When done, click X to close the Add Widgets dialog box.
This gives you the ability to see all of the different focus areas. Here you are spending quite a few initiatives on delighting users. However, the In Plan widget shows 0% as you do not have anything marked in plan. To get a few items in plan, you can use the bulk edit capability that you used earlier in the first recipe, and go ahead and mark a few items in plan. 44. Open the grid view. 45. Select the first seven rows and then click Edit. The Bulk Edit window appears. 46. Under the Make Changes section, select In Plan from the In Plan column and then select Save.

This in turn will update this widget accordingly to show 27% In Plan. When you come back to the timeline, you now
have an overall dashboard.
Show How Your Story Depends on Others: Agreements
- Show How Your Story Depends on Others - Using the Canvas to Manage Agreements - Show How Your Story Depends on Others

The success of any large organization depends on the seamless execution of hundreds of different investments that are loosely or tightly coupled with each other. Most customers struggle to capture and manage agreements between these investments. Generally, the discussions on the dependencies between investments happen in planning meetings, and the decisions are documented in emails which get buried very quickly. Hence, when critical investments in an organization introduce changes that impact their delivery dates, most stakeholders are caught unaware, and the effects are felt both upstream and downstream. When you analyze the root cause of such failures and delays, you identify two key reasons. 1. There is no single place of truth in the organization where stakeholders can review dependencies between
investments. Hence, they are unaware of the impact of making changes that extend the timelines of any investment. 2. Most stakeholders simply don't remember all the investments dependent on them and the ripple effect of introducing
changes. The Business Agreements workspace in Clarity addresses these challenges by enabling you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates.

TIP Free Clarity Training on Broadcom Academy - You can attend FREE Clarity training by registering at the Broadcom Academy.
- The Clarity Cookbook: Roadmaps that Tell a Story training is available in the Academy. - Watch the Step-by-Step recipe section to watch a video of how these actions can be configured. - You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom
credentials, simply create a new account and start training. Show How Your Story Depends on Others 1. Some dependencies are critical to the delivery of this roadmap. Many times, these rely on teams who report to a
different management chain and may have different priorities. 2. We need a formal way to define and manage these agreements so we can ensure we get delivery when we've agreed
to it, so we don't waste resources.

3. The agreement (dotted lines) define: a. WHAT has been agreed to b. WHEN it was committed c. WHO agreed to it d. WHEN it will be delivered
4. A quick look at the Details panel shows us what we've agreed to, and the Get Well Plan. If an agreement is not being met, the Get Well Plan tells us how they will get back on track.
5. Drilling into the Agreement, we can see who the stakeholders are, the related investments, the Deadline and when it's Committed for delivery.
6. Collaboration is available to provide a connection between the stakeholders and the context of the agreement. Using the Canvas to Manage Agreements The Canvas layout provides a simple and visually intuitive interface to help you manage your business agreement. You can click a particular view to open the Canvas layout. The default Canvas layout displays include the Investment Dependences, Conversation, and Stakeholders widgets. The default layout also includes the commitment and deadline fields. Follow these steps: 1. Navigate to the Agreements page. Notice that you are in the standard view. 2. Click the Add Row icon to create a new agreement. 3. Type the name and press Enter to create the agreement. For this demo, type Contact Center dashboard
component is needed and then press Enter. 4. Click the Contact Center dashboard component is needed agreement to open the canvas. 5. Click Configure to add some more fields that your organization may want to capture. 6. Enter Status in the Search box located under the Configure Canvas panel and then drag the Status field onto the
canvas. 7. Repeat step 6 to add the Active, Created By, Created Date, Description, and Get Well Plan fields to the canvas. 8. Resize the Description and Get Well Plan text boxes so that you can see longer texts. 9. Click Done. Advance to populate the details fields to ensure the agreement includes relevant information.

10. Hover over Contributors in the Stakeholders tile and click Edit. 11. Select a contributor(s) from the drop-down located below Contributors. For this demo, select Bauer, Joyce. 12. Hover over Owners in the Stakeholders tile and click Edit. 13. Select an owner(s) from the drop-down located below Owners. For this demo, select Riviera, Alex and Tanner, Paul. 14. Select status from the Status tile. For this demo, select On Track from the drop-down in the Status tile. 15. Pick a date using the calender icon in the Commitment tile. For this demo, select Mar 8, 2022. 16. Pick a date using the calender icon in the Deadline tile. For this demo, select Jun 30, 2022.
TIP You can just stop here if you just want to record the fact that certain key parties have committed. You do not need to add investment dependencies, you can just describe it, and then if there is any get-well plan necessary, you can add that. But for roadmap purposes, what is really beneficial is the ability to show that there are impacts between investments that are subject to the roadmap. For this demo, you can go ahead and add those investments here. 17. Hover on the Predecessors text box in the Investment Dependencies tile, click Add and then select Project. The Select from Project dialog box appears. 18. Select required project and then click Add. For this demo, select CRM Contact Center Development and then click Add. Notice that the selected predecessor investment is added to the Predecessors text box. 19. Click Add above the Successors text box and then select Project. 20. Select required project and then click Add. For this demo, select CRM Enhancements and then click Add. Notice that the selected successor investment is added to the Successors text box. 21. Optional: You can add text in the Description and Get Well Plan files. Also, you can use the Conversation tile to start a conversation and notify the relevant stakeholders about the agreement. 22. Save the view to make this is as a default view.

23. Advance to the next steps. Show How Your Story Depends on Others You can show or hide the link (predecessor and successor relationships) between the agreement owners as a dotted line. You can review existing agreements between investments by turning on the Show Agreements toggle. Turning on the Show Agreements toggle also enables a visual indicator (an agreement icon) at the bottom of the roadmap item line to show dependencies between agreements. Turning off this toggle hides the agreement icon and the link between the agreement owners. Follow these steps: 1. Open a roadmap and click Timeline. For this demo, click Cooking Roadmap. 2. Click View Options. 3. Turn on the Show Agreements toggle. Notice the investments that are subject to agreements have dotted lines drawn
between them automatically as well as icons indicating they are parties to an agreement.

TIP For a better visibility, you can turn off any other toggle switches in View Options so that only Agreements are seen on the timeline. 4. Now that you have done the bread and butter course and soup and salad courses, you are now here for the main entree, which is to add sizzle to the steak. This will allow you to see how you can use target widgets for constraintbased planning.
Add Sizzle to the Steak: Using Visual Widgets for Constraint-Based Planning
- Configure Roadmap Grid View - Set Target Widgets for the Roadmap

You can set target widgets either as goals or constraints on the number and money attributes of the Roadmap Item object. Target widgets can be displayed in the Timeline, Board, and Grid layouts. By adding, moving, or removing roadmap items you can effectively plan the roadmap while meeting the set targets. Calculated-number attributes can now be selected as targets. 1. Grid with Time Scaled Data: The investment grid allows you to "get at the data". This view is configured with
quarterly financial information. We've pinned the Investment name and allow scrolling to see the details of each investment.
2. Financial Targets: Financial Targets have been added to enable constraint-based planning. We can see limits on CapEx /OpEx as well as our goal for Benefits. We use the Group By on In Plan to provide a Waterline view of the approved investments.

3. Labor Targets: We want to understand how much of our capacity is dedicated to each of our main Portfolio Drivers. Here we can do constraint-based labor planning on Change the Business, Grow the Business, etc.
TIP Free Clarity Training on Broadcom Academy - You can attend FREE Clarity training by registering at the Broadcom Academy.
- The Clarity Cookbook: Roadmaps that Tell a Story training is available in the Academy. - Watch the Step-by-Step recipe section to watch a video of how these actions can be configured. - You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom
credentials, simply create a new account and start training.
Configure Roadmap Grid View Follow these steps: 1. Open a roadmap and click the Grid layout. 2. Select Standard View from the View drop-down. Notice the columns you have in the standard view. You may need a
few and a few you may not. You can make the changes to the view easily so as to fit the columns that you may want. 3. Pin a couple of columns to the left. For this demo, hover on the In Plan column, click the menu icon, and then select
Pin Column > Pin Left. 4. Repeat step 3 to pin the Roadmap Item column to left. You can notice that the In Plan and Roadmap Item columns
are now pinned and you will be able to scroll the remaining columns horizontally. 5. Use the column picker to add the Portfolio Impact and Customer Impact columns next to the Must Have column.
REMEMBER The Portfolio Impact and Customer Impact columns are renamed labels for Portfolio Category 1 and 2. 6. Use the column picker to remove a few columns. For this demo, remove the Owner, ROI, Linked To, and Note columns from the view. Advance to set Per-Period Metrics. 7. Click View Options. 8. Select the following metrics from the Per-Period Metrics drop-down. a. Capacity b. Total Cost c. Capital Cost d. Operating Cost e. Benefit 9. Close View Options and in the grid, scroll to the right to see the metrics selected under the Total Cost column. 10. Click View Options. 11. Enter 2022-Q1 in the Start Period field.

12. Enter 2023-Q2 in the End Period field. 13. Define if you want to see Sum of Periods or Grand Totals in the Totals column. If you want to focus the roadmap on
a portion of the investment, that is, to focus on just a particular fiscal year or set of quarters, select Sum of Periods. Selecting the sum of periods will reflect the totals of that year or the period that you have selected. If you select Grand Totals, Clarity will continue to display the Totals for the entire duration of your investment even when you cycle through various periods by using the per-period metrics widget. For this demo, select Sum of Periods. 14. Now that the preparation is done, to add sizzle to the steak, advance to set Target Widgets for constraint-based planning.
Set Target Widgets for the Roadmap
You can set target widgets either as goals or constraints on the number and money attributes of the Roadmap Item object. Target widgets can be displayed in the Timeline, Board, and Grid layouts. By adding, moving, or removing roadmap items you can effectively plan the roadmap while meeting the set targets. Calculated-number attributes can now be selected as targets.
Follow these steps:
1. Click Show Widgets to display the Widgets toolbar. 2. Click Manage Widgets. 3. Click New Widget. 4. Select the Target widget type and then click Next. 5. Enter Benefit in the Title field. Note the display on the right indicates how the title is displayed. 6. Select Goal from the Type drop-down.
TIP For Goal, exceeding amount is good. For Target, exceeding the amount is not good. 7. Select Benefit from the Sum drop-down. 8. Enter Planned in the Label field. 9. Select In Plan from the filter drop-down under the Only Include items where... section. 10. Select Is Equal To as the operator and then select the In Plan checkbox from the list. This will return only the count that matches this condition. NOTE Click the lookup so the selected value(s) are saved. Do NOT just click Create after selecting the value in the lookup. 11. Optional: Turn on the In Widget Library toggle if you want to make this widget available to others within your organization. 12. Click Create. Notice that the Benefit widget appears under the My Widgets section. 13. Click New Widget. 14. Select the Target widget type and then click Next. 15. Enter Total Cost in the Title field. 16. Select Target from the Type drop-down. For Total Cost, exceeding the amount is alarming, hence the Target. 17. Select Total Cost from the Sum drop-down. 18. Enter Planned in the Label field. 19. Select In Plan from the filter drop-down under the Only Include items where... section. 20. Select Is Equal To as the operator and then select the In Plan checkbox from the list. This will return only the count that matches this condition. NOTE Click the lookup so the selected value(s) are saved. Do NOT just click Create after selecting the value in the lookup. 21. (optional) Turn on the In Widget Library toggle if you want to make this widget available to others within your organization.

22. Click Create. Now the Total Cost widget appears under the My Widgets section. 23. Repeat steps 13-22 for Capital Cost and Operating Cost (use Capital Cost and Operating Cost respectively for
step 17 instead of Total Cost). 24. Click Add underneath each of your new widgets in the order you want them to appear in the roadmap display (left to
right). 25. Click Add underneath the In Plan progress ring widget (located under Widget Library) that you created earlier. 26. Click X to close and return to your roadmap. Notice that you can see all the target widgets in the roadmap view. At this
point, you do not see any specific data as goals and targets are not defined. 27. Enter the goal/target into each of the target widgets by clicking on the pencil icon that appears when you hover on that
widget. For this demo, enter the following values.

Target Widget Benefit Total Cost Capital Cost Operating Cost

Goal/Target Value 7000000 6000000 3000000 3000000

Now, you can see that the widgets are changed. Notice that you have a constraint with Capital Cost as it exceeded the target (indicating Red). This gives you the overall variance. Advance to the next steps as to how you can get that capital number down under control by moving things out of plan.
28. Change the In Plan status to Not In Plan for the following roadmap items. That is, for the following roadmap items, click In Plan in the In Plan column and then select Not In Plan from the options. a. Executive Dashboard Visibility
b. Global HR Application Maintenance
c. Mobile Device Management (MDM) Deployment
d. Mobile Identity Management Enhancements
Notice as you change the In Plan status to Not In Plan for the above roadmap items, the Captial Cost and In Plan widgets are adjusted accordingly. Notice that Capital Cost is now under control. This gives a basic idea of constraintbased planning. Go ahead and save this view.
29. Save this view as Financial Targets. Now advance to the next steps to see how to pre-filter them further or predesignate them further to focus on just a particular area.
30. Click Show Widgets to display the Widgets toolbar. 31. Click Manage Widgets. 32. Click Remove underneath each of the widgets from the prior view (including the In Plan progress ring widget located
under Widget Library).
33. Click New Widget. 34. Select the Target widget type and then click Next. 35. Enter Change the Business in the Title field. 36. Select Target from the Type drop-down. 37. Select Capacity from the Sum drop-down. 38. Enter Planned in the Label field. 39. Select In Plan from the filter drop-down under the Only Include items where... section. 40. Select Is Equal To as the operator and then select the In Plan checkbox from the list. 41. Select Portfolio Impact from the filter drop-down under the Only Include items where... section. 42. Select Is Equal To as the operator and then select the Portfolio Impact checkbox from the list 43. (optional) Turn on the In Widget Library toggle if you want to make this widget available to others within your
organization.
44. Click Create.


45. Repeat steps 33 to 44 to create the Run the Business and Grow the Business widgets (use Run the Business and Grow the Business respectively for step 42 instead of Portfolio Impact).
46. Click Add underneath each of your new three widgets that you created above along with the Total Cost widget in the order you want them to appear in the roadmap display (left to right).
47. Click Add underneath the In Plan progress ring widget. 48. Click X to close and return to your roadmap. Notice that you can see all the five widgets in the roadmap view. At this
point, you do not see any specific data as goals and targets are not defined. 49. Enter the goal/target into each of the target widgets by clicking on the pencil icon that appears when you hover on that
widget. For this demo, enter the following values.

Target Widget

Goal/Target Value

Change the Business

35000

Run the Business

50000

Grow the Business

10000

50. Change the Not In Plan status to In Plan for the Mobile Identity Management Enhancements roadmap item. That is, click In Plan in the In Plan column and then select Not In Plan from the options.
Notice as you change the Not In Plan status to In Plan for the roadmap item, the Grow the Business and In Plan widgets are adjusted accordingly. Go ahead and save this view.
51. Save view Labor Targets.
52. You now have two Financial Targets and Labor Targets view for deeper analysis before taking a decision. This gives you the opportunity to see if you can rectify capacity while still maintaining your balance in other areas.

## Clarity Cookbook: Objectives and Key Results (OKRs)

Welcome to the Cooking with Clarity series. Our experts, David Sprague and Brian Nathanson will walk you through how you can use Value Stream Management (VSM) capabilities offered by Clarity and Rally to create and synchronize Objectives and Key Results (OKRs) across both systems. Even the most effective business strategies can be derailed when there is misalignment or friction between you and the delivery or engineering teams responsible for executing your vision. This risk is compounded in fluid markets where pivots need to happen quickly--which is almost every industry today.
Hence, ensuring alignment between business and product teams is key to success. While business leaders strive to create effective strategies and products, development leaders must execute against those strategies in the most efficient way possible. Synchronizing Objectives and Key Results across Clarity and Rally ensure that all stakeholders in the leadership and execution teams are aligned and continuously tracking updates made on both sides of the organization.


In this cookbook, you will learn how to create and track objectives and key results in Clarity and synchronize them with Rally so that development teams can execute against these objectives. You will also see how data across Clarity and Rally is synchronized when teams update objectives and key results.
TIP Free Clarity Training on Broadcom Academy - You can attend FREE Clarity training by registering at the Broadcom Academy.
- The Clarity Cookbook: Objectives and Key Results (OKRs) training is available in the Academy. - You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom
credentials, simply create a new account and start training. Since this is a cookbook focused on creating and managing Objectives and Key Results, you can expect a series of recipes. We have the following four recipes, and each recipe has two phases. In the first phase, Dave will present the end state of the recipe. In the second state, Brian will show you how to recreate the end state that Dave showed.

When you master all four recipes, you will be ready to cook up a storm and implement OKRs in your organization. 1. Motivate and Challenge Stakeholders and Configure Objectives. 2. Measure Progress - Configure Key Results. 3. Add Sizzle to the Steak Using Visual Widgets. 4. Align Business and Engineering Management - Integration Object and Mapping configuration.
Motivate and Challenge Stakeholders: Configure Objectives
- Create a New Custom Object for Objectives - Setup Objectives Attributes and Configure Color Mappings for Confidence Score and Fulfillment (%) - Add Objectives as an Associated Object for Department OBS - Add the Relevant Access Rights To Users - Configure Objectives Blueprint - Working with Objectives in Clarity
Clarity can serve as an organizational system of record for Objectives to track progress, create alignment, and encourage engagement which are all critical success factors for any business. This recipe is about creating objectives to motivate and challenge stakeholders. Hence, we will configure objectives in this recipe. The finished recipe includes the following components: 1. A list of objectives displayed in the Grid Layout

You will be able to see the following attributes for each objective: a. Objective Name b. Owner of the Objective c. Confidence Score d. Fulfillment % e. Period
IMPORTANT Some of the key points to remember: 1. As a best practice, Objectives should be short, inspirational, and engaging - perfect for motivating and
challenging stakeholders. 2. Not all groups contribute to all Objectives, but Clarity provides transparency into the organization's
Objective creating alignment and encouraging engagement. 2. A list of Objectives as cards filtered by OBS:
There are often multiple lenses required to filter OKRs to just those that apply to a given group since not all groups contribute to all OKRs. You can use the Board view to see different perspectives, such as OKRs categorized by Owner. You can also add a Department OBS filter to only display Objectives applicable to a given group or department.

3. Ability to control updates to objectives by using Business Rules Customers want the ability to control when users can update Clarity Objectives. Customers have typically built multiple processes to lock and unlock fields to address this requirement. Business Rules can be used to control updates by end users.
Now that we know what to expect in the finished recipe let's see how to prepare it.


Create a New Custom Object for Objectives
You can use the Custom Objects capability to create relevant objectives for your organization. Since custom objects enable you to use your terminology, you can create objectives that are relevant to your organization. You can use the Starred feature to highlight OKRs solely managed for Clarity.
Follow these steps:
1. Open Administration, Studio, Objects. 2. Click New. 3. You can use the information in the following table to create the object.

Object Name Object ID Content Source Description Master or Subobject Partition Model Subobject Master Object Event Enabled Copy Enabled Export Enabled

Field

Objectives Objectives Customer A Custom Master Object for Objectives in terms of Objectives and Key Resu Select Master Leave Blank Not selected Leave Blank Check Check Check


Field
View All Enabled API Enabled Object Extension 4. Click Save. 5. Select Include in the Data Warehouse. 6. Click Save. See Create a New Custom Object for more information.

Check Check Leave Blank


Setup Objectives Attributes and Configure Color Mappings for Confidence Score and Fulfillment (%) This section covers the following topics: - Set ID to Auto-numbering - Create Attributes of Objectives

Set ID to Auto-numbering You can configure an auto-numbering scheme for a string attribute that consists of one or more segments. For example, the scheme for a project number such as PROJ001 consists of two segments. One segment is for the prefix PROJ. A second segment is for the three-digit number 001. Let's create an Autonumbering scheme for the Objective ID. Follow these steps: 1. Click the Attributes tab of the Objectives object. 2. Click ID. 3. Click the Auto-numbering tab. 4. Check Auto-numbered. 5. In the Schemes section, click Edit to edit an existing scheme. 6. Click New. 7. Select Text in Type of Segment. 8. In Value, enter 'OBJ' for this demo. 9. Click Save And Return. You can see the Next Number as 00000001OBJ. Let's change the order of the segments. 1. Click Reorder. 2. Change the order in the Scheme Segments:
a. Text b. Numeric Counter(Next Value: 00000001) 3. Click Save And Return. Let's make the number segment shorter by reducing the counter length for the ID. 1. Click Numeric Counter. 2. Select '4' in Counter Length. 3. Click Save And Return. Now, you can see the alphanumeric ID (OBJ0001) for Objectives. 4. Click Save And Return. 5. Save your changes.
See Configure an Auto-Numbering Scheme for more information.
Create Attributes of Objectives You can use attributes such as Owner, Confidence Score, and Fulfillment to capture information associated with objectives.


Follow these steps:
1. In Attributes, click New. 2. For this demo, enter an attribute name as "Description" and a unique ID as "description_id". 3. Add the description - "Objective Description". 4. Set the Data Type field to Large String - Rich Text. 5. For this demo, enter the API Attribute ID as "c_objectiveDescription". 6. Check Include in the Data Warehouse. 7. Save your changes. 8. Similarly, create the Owner attribute as shown in the below table.


Field
Attribute Name Attribute ID Description Data Type Lookup API Attribute ID Include in the Data Warehouse 9. Create the Confidence Score attribute as shown in the below table.

Value Owner owner_id Objective Owner Lookup - Number Browse Resource - SCH_BROWSE_RESOURCE c_objectiveOwner

Attribute Name Attribute ID Description Data Type Show as Percent API Attribute ID Include in the Data Warehouse

Field

Confidence Score confidence_score Objective Confidence Score Number  c_ConfidenceScore

See Configure Display Mappings for Attributes and set up color mapping as shown in the below table in the Display Mappings sections.

Value fo

Color

Default Bucket

From

To

Green

G


Yellow

Y


Red

R


10. Click Save and Return.


11. Create the Fulfillment (%) attribute as shown in the below table.

Attribute Name Attribute ID Description Data Type Decimal Places API Attribute ID Include in the Data Warehouse

Field

Value for Fulfillment Fulfillment (%) average_kr_progress Average KR Progress Number 0 c_averageKeyResultsProgess

See Configure Display Mappings for Attributes and set up color mapping as shown in the below table in the Display Mappings sections.

Color

Default Bucket

From

To

Red

R


Yellow

Y


Green

G


12. Click Save and Return.


13. Create the Active attribute as shown in the below table.


Field
Attribute Name Attribute ID Description Data Type API Attribute ID Include in the Data Warehouse 14. Create the Period attribute as shown in the below table.

Active is_active An active Objective Boolean c_isActive

Value for Activ

Field Attribute Name Attribute ID Description Data Type Lookup API Attribute ID Include in the Data Warehouse
See Create Attributes and create the attributes of Objectives.

Value for Pe Period objective_period The period for which the OKR is relevant. Lookup Fiscal Quarters c_objectivePeriod

Add Objectives as an Associated Object for Department OBS
Follow these steps:
1. Click Administration, Organization and Access, OBS. 2. Open the Corporate Department OBS and click Add under the Associated Objects section. 3. Select the Objectives object and click Add. 4. Save your changes.
See Associate Objects with OBS and add Objectives as an Associated Object for Department OBS.


Configure an "API ATTRIBUTE ID" for the Department OBS Attribute


To ensure that the Department OBS Attribute is available in Clarity, ensure you add the API Attribute ID to it. Follow these steps: 1. Open Administration, Studio, Objects. 2. Open the Objectives object. 3. In Attributes, click Department OBS. 4. Set API Attribute ID to 'obs_department'. 5. Save your changes.
Add the Relevant Access Rights To Users The Global, OBS, and Instance rights in Classic PPM are supported for custom objects and custom sub-objects. However, custom sub-objects also include parent-specific rights.All users need the Custom Object - Navigate access right to view the Custom Objects page in Clarity.

Follow these steps: 1. Click Administration, Organization and Access, Groups. 2. Click a group name. For this demo, select Application Administrator. 3. Open the Access Rights menu and click Global. 4. Click Add. 5. Enter "Objectives" in the Access Right field and press Enter. 6. Select the following access rights to assign to the user group:
- Objectives - Create - Objectives - Delete All - Objectives - Edit All 7. Click Add Configure Objectives Blueprint When you create a custom master object, a blueprint is automatically created in Clarity. You can create a copy of the blueprint and edit it to suit your goals. This section covers the following topics: - Filter the Blueprint - Copy the Blueprint - Edit the Blueprint - Publish the Blueprint


Filter the Blueprint You can use the filter option to quickly identify the blueprint. Follow these steps: 1. In Clarity, navigate to Administration, Blueprint. 2. Click the Filter icon. 3. Click Add Filter and select Type in the list. 4. Select Type Is Equal To Objectives. You will see only the Objectives Blueprint in the Grid.
Copy the Blueprint Since you cannot edit the default blueprint, you need to create a copy of it. Follow these steps: 1. In the Blueprint grid, select the Objectives blueprint. 2. Click Copy. 3. Rename the copied blueprint as "Objectives - Default". 4. Press Enter.
Edit the Blueprint We can now edit the blueprint to ensure it matches our business needs. Follow these steps: 1. In the Blueprint grid, click the Objectives - Default blueprint. 2. Click Edit. You can see the Properties, Modules, Rules, and Actions tabs in the blueprint.
Add Fields in Properties Once you edit a blueprint, you can add all the custom attributes you created to the Properties module. Follow these steps: 1. In Properties, drag the following fields and drop them into the workspace:
- Description - Owner - Confidence Score - Fulfillment % - Period - Active - Department OBS
Add Modules to Blueprint Since you want various resources to collaborate, let's add the conversation module to the blueprint. Follow these steps: 1. Click Modules in the blueprint. 2. Drag and drop the Conversations Module in the first place of the workspace.

Clarity - 16.4.1 4932

Use Business Rules to Make Attributes Read Only Administrators can create business rules in Blueprints to control how end users engage with Objectives in Clarity. The following rule will determine when users can update the rule.

Follow these steps:
1. Click Rules in the blueprint. 2. Click New Rule. 3. Create the Business Rule as shown in the below table.

Rule Name Description Target Object Conditions

Field

Actions

4. Click Create.

Value Rule 01-Disable Editing Disable editing if the period is not a current period. Objectives Period Is Not Equal To Current Period (For this demo, select 2022-Q4) Disable Editing Attributes  Disable Selected Select the following attributes to disable them:
- Name - Owner - Confidence Score

Publish the Blueprint To publish the Objectives - Default blueprint, click Publish. You will see the message - "Objectives - Default published successfully."

Working with Objectives in Clarity Now that you have published the blueprint, you are ready to start adding objectives to Clarity.


This section covers the following topics: - Add Fields from Columns - Add New Objectives - Configure the Details Panel - Save Your View - Setup View Options in Board - Use the Filter Locate Relevant Records in Board - Start a Conversation - Verify the Business Rules in Properties Add Fields from Columns Let's start by adding fields to the grid so that it's easy for you to add objectives and associated details. Follow these steps: 1. In the main menu, click Custom Objects. 2. Click Objectives. 3. In Grid, click the Columns panel and select the following fields:
- Name - Owner - Confidence Score - Conversation - Department OBS - Fulfillment (%) - Period 4. Clear ID in Columns.


5. Close Columns. You can resize the column width in the grid.

Add New Objectives You can now ready to start organizational objectives to the grid. Follow these steps: 1. In Grid, click '+' to add a new objective. 2. Create an Objective as shown in the below table.

Field

Value

Name

Accelerate company solution adoption

Owner Confidence Score Fulfillment (%)

Andersson, Peter 60 41

Period

Choose the current period (For this demo, select 2022-Q4)

Start Date

8/1/2022

Finish Date

10/31/2022

3. Click '+' to add another objective. 4. Create an Objective as shown in the below table.

Field

Value

Name

Achieve predictability and consistency of execution

Owner

Arpel, Ian

Confidence Score


Fulfillment (%)


Period

Choose the current period (For this demo, select 2022-Q4)

Start Date

8/1/2022

Finish Date

10/31/2022

5. Click '+' to add another objective. 6. Create an Objective as shown in the below table.

Field

Value

Name

Build a sustainable growth engine

Owner

Barry, Debra

Confidence Score


Fulfillment (%)


Period

Choose the current period (For this demo, select 2022-Q4)

Start Date

8/1/2022

Finish Date

10/31/2022

7. Click '+' to add another objective.

Clarity - 16.4.1 4935


8. Create an Objective as shown in the below table.

Field

Value

Name

Foster Culture of Innovation & Transparency

Owner Confidence Score Fulfillment (%)

Andersson, Peter 60 39

Period

Choose the current period (For this demo, select 2022-Q4)

Start Date

8/1/2022

Finish Date

10/31/2022

9. Click '+' to add another objective. 10. Create an Objective as shown in the below table.

Field

Value

Name

Increase stakeholder engagement to simplify operations & improve execution

Owner

Amos, Cheryl

Confidence Score


Fulfillment (%)


Period

Choose the current period (For this demo, select 2022-Q4)

Start Date

8/1/2022

Finish Date

10/31/2022

11. Click '+' to add another objective.

12. Create an Objective as shown in the below table.

Field

Value

Name
Owner Confidence Score Fulfillment (%) Period Start Date Finish Date

Introduce compelling solutions to increase relevance with CIO/CEO Amos, Cheryl 30 40 Choose the current period (For this demo, select 2022-Q4) 8/1/2022 10/31/2022

NOTE The Department OBS field is auto-populated in the grid.


Configure the Details Panel


The Details Panel is available as a two-column layout and can be resized to take up 75% of the screen. The Details layout allows you to include two fields per row. You can horizontally drag any field to occupy one or both columns of the layout. Lets configure it to ensure you can easily view more information about objectives.
Follow these steps:
1. In Objectives, click the Details panel. 2. Click Configure. 3. Remove all fields in Details. 4. Drag the Description field and drop it into Details. 5. Click Done. 6. Add the description for your objective. We have used the following description in the cookbook. This objective is
designed to: - Obtain reference customers for the integrated solution. - Encourage customers to participate in marketing and sales channels - Drive customers to the most current release. - Improve the product's overall Net Promotor Score. - Increase overall SaaS user adoption in Key accounts. 7. Close the Details panel.
Save Your View
Clarity allows you to save and modify multiple views that help you achieve your business goals.
Follow these steps:
1. In the grid, click View, Save As. 2. Enter the name of a VIEW as "Business Outcomes". 3. Check Share with everyone. 4. Save the view.
To set this view as default, follow these steps:
1. In the grid, click View, Manage. 2. Check Shared.


3. Check Default. 4. Close Manage Views.


Setup View Options in Board
View Options allow you to customize the board to suit your requirements.
Follow these steps:
1. Click the Board layout. 2. Click View Options. 3. Set up view options as shown in the below table:

Under Board Options Columns Color By Under Card Options Title Fields Metrics 4. Close View Options.

Field

Value
Owner -None-
Name ID Confidence Score, Fulfillment (%)

Use the Filter Locate Relevant Records in Board

You can use Filters to quickly identify records that match your selection criterion. Follow these steps: 1. In Board, click the Filter icon. 2. Click Add Filter. 3. Select Department OBS. 4. Select Is Equal To. 5. Select 'Corporate: ARD Business Unit' and Corporate: ARD Business Unit/BusOps' You can click on a card to open the Details panel.

Start a Conversation You can start a conversation or post your comments in a reply message with optional attachments and links. Conversations are a collection of replies to an original theme or question. Conversations provide a collaborative forum for all team members to discuss, document, and solve issues. Follow these steps: 1. In Board, click Accelerate company solution adoption. The Conversations page appears. 2. Type'@' and select Dana Lewis. 3. Type 'Please work with the team to accelerate the process of obtaining five reference customers for the new integrated
solution'. 4. Navigate to the Objectives grid. You can see a tick mark in Conversation for the Objective - Accelerate company
solution adoption.
Verify the Business Rules in Properties You created a business rule in Blueprints to ensure users cannot edit fields in a different time period. Follow these steps: 1. Click Properties. 2. Change the current period to the previous period. For this demo, select 2022-Q3 in the Period field. Attempt to change Name, Confidence Score, or Owner fields when the period is set to 2022-Q3. You can't edit the values in those fields.
NOTE As the business rule (Disable Editing) is enabled in the Objectives Blueprint, the fields (Name, Confidence Score, and Owner) are disabled.
Measure Progress: Configure Key Results
- Recipe Preparation - Comprehensive Step-by-Step Recipe - Create a SubObject for Objectives - Setup Key Results Attributes and Configure Color Mappings for Progress(%) - Access Rights To User - Configure Objectives Blueprint - Working with Key Results in Clarity

Key Results are a set of metrics that are quantitative (value-based) so that the organization can measure progress toward the Objective. As a best practice, there should be no more than two to five Key Results for each objective.
IMPORTANT Some of the key points to remember are: 1. The benefit of an OKR model is that multiple organizational stakeholders can sign up to contribute to a single
objective and, in this case, multiple key results. 2. These contributions increase overall alignment and offer the potential for synergies across organizational
silos (such as between value streams). This recipe is about measuring progress by configuring key results. The finished recipe includes the following components: 1. Objectives List with Key Results in Details:
You can configure the Details panel to show the Key results. It provides quick access to the Key Results Name, Progress (%), a starting metric, the current metric, and the end state target for each key result.
2. Key Results Module Configured the Key Results Module to show the Key Results Name, Progress (%), a starting metric, current metric, and the end state target for each key result.

Recipe Preparation Let's review some things you can do to prepare for this phase.


Comprehensive Step-by-Step Recipe Let's quickly check the instructions to prepare the dish.


Create a SubObject for Objectives


You can use the sub-objects capability to create key results that are relevant to each objective.
Follow these steps:
1. Click Administration, Studio, Objects. 2. Click New. 3. Create a SubObject for Objectives as shown in the below table.

Object Name Object ID Content Source Description Master or Subobject

Field

Value Key Results key_results Customer A Custom Sub-Object for Key Results associated with an Obje Subobject


Field
Master Object Event Enabled Copy Enabled API Enabled 4. Click Save to save your SubObject. See Creating a SubObject for the Custom Object for more information.

Browse and select Objectives

Value

Setup Key Results Attributes and Configure Color Mappings for Progress(%)
This section covers the following topics:
- Set ID to Auto-Numbering - Create Attributes of Key Results - Create the Progress(%) Attribute of Key Results
Set ID to Auto-Numbering
You can configure an auto-numbering scheme for a string attribute that consists of one or more segments. For example, the scheme for a project number such as PROJ001 consists of two segments. One segment is for the prefix PROJ. A second segment is for the three-digit number 001. Let's create an Autonumbering scheme for the ID attribute.
Follow these steps:
1. Click the Attributes tab of Key Results. 2. Click ID. 3. Click the Auto-numbering tab. 4. Check Auto-numbered. 5. In the Schemes section, click Edit to edit an existing scheme. 6. Click New. 7. Select Text in Type of Segment. 8. In Value, enter 'KR' for this demo. 9. Click Save And Return.
You can see the Next Number as 00000001KR. Let's change the order of the segments.
1. Click Reorder. 2. Change the order in the Scheme Segments:
a. Text b. Numeric Counter(Next Value: 00000001) 3. Click Save And Return.
Let's make the number segment shorter by reducing the counter length for the ID.
1. Click Numeric Counter. 2. Select '4' in Counter Length. 3. Click Save And Return.
Now, you can see the alphanumberic ID (KR0001) for Key Results. 4. Click Save And Return. 5. Save your changes.
See Configure an Auto-Numbering Scheme for more information.


Create Attributes of Key Results
See Create Attributes and create the attributes of Key Results.
You can use attributes such as Description, Start Metric, and Current Metric to capture information associated with objectives.
Follow these steps:
1. In Attributes, click New. 2. For this demo, enter an attribute name as "Name" and a unique ID as "name". 3. Add the description - "Name of the Key Results". 4. Set the Data Type field to String. 5. For this demo, enter the API Attribute ID as "name". 6. Check Include in the Data Warehouse. 7. Save your changes. 8. Similarly, create the Start Metric attribute as shown in the below table.

Field

Attribute Name

Start Metric

Attribute ID

start_id

Description

The start value

Data Type

Number

API Attribute ID

c_startMetric

9. Create the Current Metric attribute as shown in the below table.

Value

Field

Attribute Name Attribute ID Description

Current Metric current_id The current value

Data Type

Number

API Attribute ID

c_currentMetric

10. Create the Target Metric attribute as shown in the below table.

Value

Attribute Name Attribute ID Description Data Type API Attribute ID

Field

Target Metric target_id The target value Number c_targetMetric

Value


11. Create the Active attribute as shown in the below table.

Attribute Name Attribute ID Description Data Type Default Value API Attribute ID

Field

Create the Progress(%) Attribute of Key Results Here is the derivation of Progress(%):

Active is_active An active Key Result Boolean  c_isActive

Value


Follow these steps: 1. In Attributes, click New. 2. Create the Progress(%) attribute as shown in the below table.
Field
Attribute Name Attribute ID Description Data Type Result Data Type API Attribute ID 3. Save the changes. 4. Click the Build Calculated Attribute link.

Progress(%) progress_pct The percent attainment Calculated Number c_progress

Value


5. Create the expression as shown in the below table.

Field
Function Argument 1 Sub-expression Argument 2 Constant 6. Click Generate. 7. Create the Sub-expression 01 as shown in the below table.

Multiply Sub-expression subexpr01 Constant 100

Field

Generate Expression for Function Argument 1 Sub-expression Argument 2 Sub-expression 8. Click Generate. 9. Create Sub-expression 02 as shown in the below table.

subexpr01 Divide Sub-expression subexpr02 Sub-expression subexpr03

Value

Field

Generate Expression for

subexpr02

Function

Subtract

Argument 1

Attribute Name (ID)

Attribute Name (ID)

Current Metric (current_id)

Argument 2

Attribute Name (ID)

Attribute Name (ID)

Start Metric (start_id)

10. Click Generate. 11. Create the Sub-expression 03 as shown in the below table.

Value

Field
Generate Expression for Function Argument 1 Attribute Name (ID) Argument 2 Attribute Name (ID) 12. Click Generate. 13. Click Save and Return.

subexpr03 Subtract Attribute Name (ID) Target Metric (target_id) Attribute Name (ID) Start Metric (start_id)

Value

Value

14. See Configure Display Mappings for Progress(%) and set up color mapping as shown in the below table in the Display Mappings sections.

Color

Default Bucket

From

To

Green

G


Yellow

Y


Red

R


15. Click Save and Return.

Access Rights To User Follow these steps: 1. Click Administration, Organization and Access, Groups. 2. Click a group name. For this demo, select Application Administrator. 3. Open the Access Rights menu and click Global. 4. Click Add. 5. Enter "Key Results" in the Access Right field and press Enter. 6. Select the following access rights to assign to the user group:
- Key Results - Create - Key Results - Delete All - Key Results - Edit All 7. Click Add.

Configure Objectives Blueprint Since you have a new custom sub object for the Objectives object, you need to edit the blueprint to ensure the Key Results sub object is available to users. This section covers the following topics: - Add a Module to Blueprint - Publish the Blueprint Add a Module to Blueprint Let's add the Key Results module to the Objectives - Default blueprint. Follow these steps: 1. In Clarity, navigate to Administration, Blueprint. 2. In the Blueprint grid, click the Objectives - Default blueprint. 3. Click Edit. 4. Click Modules in the blueprint. 5. Drag and drop the Key Results Module in the first place of the workspace. 6. Click Key Results and ensure that Show in Details Flyout is checked.


Publish the Blueprint
To publish the Objectives - Default blueprint, click Publish.
NOTE Log out and Log into Clarity to see the changes in Objectives.


Working with Key Results in Clarity
Now that you have published the blueprint, you are ready to start adding key results associated with objectives.
This section covers the following topics:
- View Key Results in Objectives - Add Fields from Columns - Add New Key Results for the Objective - Accelerate company solution adoption - Setup Columns and View Options - Save Your View - Add New Key Results for the Objective - Achieve predictability and consistency of execution - Add New Key Results for the Objective - Build a sustainable growth engine - Add New Key Results for the Objective - Foster Culture of Innovation & Transparency - Add New Key Results for the Objective - Increase stakeholder engagement to simplify operations & improve execution

View Key Results in Objectives
Let's start by viewing the Key Results module.
Follow these steps:
1. In the main menu, click Custom Objects. 2. Click Objectives. 3. In Grid, click Accelerate company solution adoption. You can see the Key Results in the Details panel. 4. Click Accelerate company solution adoption to view the modules in it. You can see the new module - Key Results in
Objectives.

Add Fields from Columns
Let's add fields to the grid so that it's easy for you to add key results and associated details.
Follow these steps:
1. In the Key Results grid, click the Columns panel and select the following fields: - Name - Start Metric - Current Metric - Target Metric - Progress % - Active
2. Deselect ID in Columns. 3. Close Columns. You can resize the column width in the grid.

Add New Key Results for the Objective - Accelerate company solution adoption Let's add key results for another objective.


Follow these steps:
1. In the Key Results module, click '+' to add a key result. 2. Create a key result as shown in the below table.


Name
Start Metric Current Metric Target Metric

Field

Value
Achieve 5 reference customers for the recently introduced integrated solution 0 1 5

NOTE The Progress(%) and Active fields in the grid are auto-populated.
3. Similarly, create another four key results in the grid, as shown in the below table.

Name

Ensure 100% of our customers 0 participate in one marketing and sales channels

Ensure 50% of on-premise


customers are renewing and

are on GA (or GA-1) release.

Improve overall Net Promotor 38 Score (NPS) by +8 (was 38 in FY22)

Increase overall SaaS user


adoption in Key accounts by

20%

Start Metric

Current Metric 40

Target Metric 100


Setup Columns and View Options
Follow these steps:
1. Navigate to Objectives. 2. Select Accelerate company solution adoption, and the Details panel opens. 3. Click the Key Results tab. 4. Click Expand. 5. In Columns, deselect Start Metric, Current Metric, Target Metric, and Active. 6. Close Columns. 7. Click View Options. 8. Turn on Wrap Text. 9. Close View Options.


Save Your View
Follow these steps:
1. In grid, click View, Save As. 2. Enter the name of a VIEW as "Key Results - Flyout". 3. Check Share with everyone. 4. Save the view. 5. Close Flyout.

Add New Key Results for the Objective - Achieve predictability and consistency of execution
Follow these steps:
1. In the Objectives grid, click Achieve predictability and consistency of execution. 2. In the Key Results module, click '+' to add a key result. 3. Create a key result as shown in the below table.

Name
Start Metric Current Metric Target Metric

Field

Value
"Deliver the major solution in the form of an MVP by end of FY2022" 0 10 10

NOTE The Progress(%) and Active fields in the grid are auto-populated.

Add New Key Results for the Objective - Build a sustainable growth engine
Follow these steps:
1. In the Objectives grid, click Build a sustainable growth engine. 2. In the Key Results module, click '+' to add a key result.


3. Create a key result as shown in the below table.


Name Start Metric Current Metric Target Metric

Field

Value Achieve 85% (or higher) customer renewal rate 0 70 85

NOTE The Progress(%) and Active fields in the grid are auto-populated.
4. Similarly, create another three key results in the grid, as shown in the below table.

Name

Deliver 20 enterprise


customers generating $10M

annual book value

Deliver 30% revenue increase 0 moving customers from perpetual to subscription

Generate new and add-on


sales based upon a 20%

increase over the prior forecast

Start Metric

Current Metric 6

Target Metric 20

Add New Key Results for the Objective - Foster Culture of Innovation & Transparency
Follow these steps:
1. In the Objectives grid, click Foster Culture of Innovation & Transparency. 2. In the Key Results module, click '+' to add a key result. 3. Create a key result as shown in the below table.

Name
Start Metric Current Metric Target Metric

Field

Value
Develop implementation collateral and train partners on the integrated solution 0 4 10

NOTE The Progress(%) and Active fields in the grid are auto-populated.
4. Similarly, create another three key results in the grid, as shown in the below table.

Name

Identify the first reference


customer on either the Partner

or Broadcom connector

Improve employee Culture


Survey results with above 80%

favorability

Start Metric

Current Metric 1

Target Metric 10


Name

Start Metric

Record a webinar on the


integrated solution

Current Metric 3

Target Metric 10

Add New Key Results for the Objective - Increase stakeholder engagement to simplify operations & improve execution
Follow these steps:
1. In the Objectives grid, click Increase stakeholder engagement to simplify operations & improve execution. 2. In the Key Results module, click '+' to add a key result. 3. Create a key result as shown in the below table.

Name
Start Metric Current Metric Target Metric

Field

Value
Biweekly PM & UX reviews to exchange ideas and help the team understand decisions 0 12 25

NOTE The Progress(%) and Active fields in the grid are auto-populated.
4. Similarly, create another key result in the grid, as shown in the below table.

Name
Monthly ENG reviews provide 0 transparency for decisions and inspire innovation

Start Metric

Current Metric 4

Target Metric 12

Add Sizzle to the Steak: Using Visual Widgets
- Introduction - Recipe Preparation - Comprehensive Step-by-Step Recipe - Managing Attributes in Objectives - Configure Widgets in Objectives - Configure Widgets in Key Results


Introduction You can review and summarize the OKR metrics by using a series of configurable visual widgets in Clarity. This recipe focuses on Adding Sizzle to the Steak by configuring visual widgets. The finished recipe includes the following components: 1. Objectives with Visual Widgets:
Visualization helps executives quickly scan key OKR metrics to identify risk areas and take corrective action
2. Key Results with Visual Widgets: Use visualization to understand OKR Progress directly from the Key Results module

Recipe Preparation Let's review some things you can do to prepare for this phase.
Comprehensive Step-by-Step Recipe Let's quickly check the instructions to prepare the dish.

Managing Attributes in Objectives This section covers the following topics: - Delete an Attribute in Objectives - Create Attributes in Objectives - Add a New Field to Grid - Add a New Field to Board Delete an Attribute in Objectives The Fulfilment(%) attribute associated with Objectives is currently populated manually. Now that we have key results associated with objectives, we can use the Progress(%) of Key Results to calculate the Fulfilment(%) for an Objective. Hence, we have to delete the Fulfilment(%) attribute and create a new attribute for Fulfilment(%) with an expression.
TIP Ensure to remove the Fulfilment(%) field from the grid and board. Otherwise, an error message will be shown after deleting Fulfilment(%) in Classic PPM. Follow these steps: 1. Log into Classic PPM. 2. Click Administration, Studio, Objects. 3. Click Objectives. 4. Click Attributes. 5. Select Fulfillment(%) and click Delete. You will see a warning message - "Do you want to delete the attribute and items listed below?". 6. Click Yes. The Fulfillment(%) field will be deleted from the Attributes list. Create Attributes in Objectives Let's now create the Fulfillment (%) attribute (aggregated attribute) for the Objective attribute. Follow these steps: 1. In Attributes, click New.


2. Create the Fulfillment(%) attribute as shown in the below table.


Field
Attribute Name Attribute ID Description Data Type Result Data Type Decimal Places API Attribute ID Include in the Data Warehouse 3. Save the changes. 4. Click the Build Aggregate Calculated Attribute link. 5. Create the expression as shown in the below table.

Fulfillment(%) fulfillment_agg Average KR Progress Aggregated Number 0 c_fulfillmentAgg

Value

Field

Value

Function

AGG_Average

Sub Object

Key Results

Attribute

Progress (%)

6. Click Generate. The Expression is auto-populated.
7. Click Save and Return.
NOTE You can add a filter condition to the aggregate calculated attribute(ACA) by using the Define filter condition link (Next to Filter).
8. See Configure Display Mappings for Progress(%) and set up color mapping as shown in the below table in the Display Mappings sections.

Color

Default Bucket

From

To

Green

G


Yellow

Y


Red

R


9. Click Save and Return. 10. Log out.


Add a New Field to Grid Let's add the new attribute to the Objective grid and board layouts. Follow these steps: 1. Log into Clarity. 2. In Clarity Main Menu, click Custom Objects, Objectives. 3. In the Objectives grid, click the Columns panel and select the Fulfillment(%) field. 4. Close Columns. You can see the values in the Fulfillment(%) field that are calculated from the Progress(%) field of Key
Results. NOTE Let us validate the values in the Fulfillment(%) field. 1. Click Accelerate company solution adoption. 2. Open Details and click Key Results. 3. Select the rows in Progress(%) and see the Average value at the bottom of the Details panel. As we have set one decimal place in Fulfillment(%), Clarity rounds up to the nearest number.
Add a New Field to Board Follow these steps: 1. Click Board. 2. Click View Options. 3. Select Fulfillment (%) in Metrics. 4. Close View Options. You can view the Fulfillment (%) on cards. Configure Widgets in Objectives You can create the following widgets in this recipe. Each widget supports distinct operations such as Count, Sum, and Average. You can also specify the color of the widget and select the relevant display format (number or percentage).
- Number Tile Widget: Displays a specific number based on the widget definition and filter criterion. - Pie Widget: Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant
field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas, and the remaining results will be grouped in the Other category. - Bar Widget: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the Group By drop-down list and the Aggregation Type attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas, and the remaining results will be grouped in the Other category. This section covers the following topics: - Create a Calculated Attribute - Create a Pie Chart Widget Type - Owner - Create a Bar Chart Widget Type - Low Confidence - Create a Bar Chart Widget Type - High Fulfillment Create a Calculated Attribute
The aggregated attribute is not supported in Widgets. So, the workaround for this is to create a new calculated attribute, which leverages the existing Fulfillment (%) aggregated calculated attribute.


Follow these steps:
1. In Classic PPM, click Administration, Studio, Objects. 2. Click Objectives. 3. Click Attributes. 4. In Attributes, click New. 5. Create the Fulfillment(%) attribute as shown in the below table.


Field
Attribute Name Attribute ID Description Data Type Result Data Type Decimal Places API Attribute ID 6. Click Save. 7. Click the Build Calculated Attribute link. 8. Create the expression as shown in the below table.

Fulfillment(%) - Widget fulfillment_widget Fulfillment(%) for widget Calculated Number 0 c_fulfillmentwidget

Value

Field
Function
Argument Number
Argument 1
Attribute Name (ID) 9. Click Generate. The calculated expression is generated. 10. Click Save and Return. 11. Click Save and Return. 12. Log out.

Sum 1 Attribute Name (ID) Fulfillment(%) (average_kr_progress)

Value


Create a Pie Chart Widget Type - Owner


Follow these steps:
1. Log in to Clarity, click Custom Objects, Objectives, Grid. 2. In the Objectives grid, click Show Widgets. 3. Click Manage Widgets. 4. ClickNew Widget. 5. Select Pie Chart and click Next. 6. Create a pie chart as shown in the below table:

Field
Title Type Format Group By Sort Order 7. Click Create. 8. Click Add to show the pie chart in the grid. 9. Close Add Widgets.

Owner Count Percent Owner Descending

Create a Bar Chart Widget Type - Low Confidence
Follow these steps:
1. In the Objectives grid, click Show Widgets. 2. Click Manage Widgets. 3. Click New Widget. 4. Select Bar Chart and click Next.

Value


5. Create a bar chart for Low Confidence, as shown in the below table:


Field
Title Type Group By Minimum Sort Order 6. Click Create. 7. Click Add to see the widget in Grid.

Low Confidence Minimum Name Confidence Score Ascending

Value

Create a Bar Chart Widget Type - High Fulfillment
Follow these steps: 1. In Add Widgets, click New Widget. 2. Select Bar Chart and click Next. 3. Create a bar chart for High Fulfillment, as shown in the below table:

Title Type Group By Minimum Sort Order

Field

High Fulfillment Minimum Name Fulfillment(%) - Widget Descending

Value

IMPORTANT
Some of the key points to remember:
1. You can turn on In Widget Library to add your widget to the Widget library. So that, others can use this widget.
2. You need the Widgets - Manage Widget Library access right to add and remove widgets from the widget library.
4. Click Create. 5. Click Add to see the widget in Grid.

Configure Widgets in Key Results
This section covers the following topics:
- Create a Number Tile Widget Type - OBJ Fulfillment (%) - Create a Bar Chart Widget Type - Watch List

Create a Number Tile Widget Type - OBJ Fulfillment (%)
Follow these steps: 1. In the Objectives grid, click Accelerate company solution adoption.


2. In the Key Results grid, click Show Widgets. 3. Click Manage Widgets. 4. Click New Widget. 5. Select Number Tile and click Next. 6. Create a number tile for Objective Fulfillment, as shown in the below table:

Field
Title Color Type Average 7. Click Create. 8. Click Add to see the widget in Grid.

Objective Fulfillment Green Average Progress(%)

Create a Bar Chart Widget Type - Watch List
Follow these steps: 1. Click New Widget. 2. Select Bar Chart and click Next. 3. Create a bar chart for Watch List, as shown in the below table:

Field
Title Type Group By Minimum Sort Order 4. Click Create. 5. Click Add to see the widget in Grid. 6. Close Add Widgets.

Watch List Minimum Name Progress(%) Ascending

Value Value


Align Business and Engineering Management: Integration Object and Mapping Configuration
- Recipe Preparation - Comprehensive Step-by-Step Recipe - Assumption - Create Attributes in Objectives - Create Attributes in Key Results - Integration Mappings - Run the Import Integration Mapping Job in Classic PPM - Define Object Mappings in Clarity - Define Sub-Object Mappings in Clarity - Working with Objectives in Clarity - Working with Key Results in Clarity - Run the Synchronize Mapped Information Job - Review the Staging Table in Clarity - Select Rally Investments to Sync with Clarity - Set Integration Mappings for Engineering Objectives - Run the Synchronize Mapped Information Job - Review the Staging Table in Clarity - Review Objectives in Clarity

Now that you have created and analyzed Objectives and Key Results in Clarity, you need to ensure alignment between business and product teams. Since many project teams use Rally to track their objectives and key results, we can synchronize objectives across these tools to ensure that all stakeholders in the leadership and execution teams are aligned and continuously tracking updates made on both sides of the organization.
IMPORTANT 1. Different parts of the organization will articulate unique objectives and key results related to their respective
roles. 2. Even though OKRs might be viewed through different filters, they can often complement or be aligned with
each other. 3. Clarity-Rally integration helps Business and Engineering management achieve OKR Alignment. In this recipe, we will map Objectives and Key results in Clarity with Rally to ensure your business and engineering goals are in sync. The finished recipe includes the following components: 1. Objectives configured to sync with Rally: Once you set up the integration and define the relevant mappings, you can select which specific Clarity objectives will sync with Rally.

2. Rally Business OKRs created from Clarity: As a result of the field mapping configuration, the Clarity Objectives have been created in Rally with a Name,
Description, Confidence score, and start and finish dates and are synced with Clarity.
3. Update Rally Key Results current values: When you update values in Rally, they will automatically be updated in Clarity.

4. Achieve Business & Engineering management OKR alignment: You can see that Rally has automatically populated Clarity with a new set of Engineering Objectives having originated in Rally.
Recipe Preparation Let's review some things you can do to prepare for this phase.

Comprehensive Step-by-Step Recipe Let's quickly check the instructions to prepare the dish.

Assumption
This recipe assumes the following:
1. The Clarity Integration Object has been created by a Clarity Administrator in Studio. To learn more about the integration, see Clarity-Rally Integration.
2. Rally Objective Hierarchy has been established by the Rally Administrator. To learn more, see Using Objectives and Key Results (OKRs) in Rally.
3. Engineering Objectives will be created in advance in Rally.

Create Attributes in Objectives
When you are integrating Clarity and Rally, you need to ensure the latest version of the PMO-Accelerator content add-in is installed. With the latest version of the PMO-Accelerator installed, Clarity will include a series of attributes for configuration in Projects, Ideas, and Custom Investments. However, since we have created a custom object named Objectives, we have to create a set of fields that will help you synchronize data between Clarity and Rally.
Attribute 01: Integration Mappings
Let's start by creating the Integration Mappings attribute.
Follow these steps:
1. Click Administration, Studio, Objects. 2. Click Objectives. 3. Click Attributes. 4. In Attributes, click New. 5. Create the Integration Mappings attribute as shown in the below table.

Field

Value

Attribute Name

Integration Mappings

Attribute ID

integration_mappings

Description

Integration Mappings between Clarity and Rally

Data Type

Lookup

Lookup

Integration Mappings Lookup

API Attribute ID 6. Click Save and Return.

c_integrationMappings

Attribute 02: Object ID

Next, we will create the Object ID attribute.

Follow these steps:

1. In Attributes, click New. 2. Create the Object ID attribute as shown in the below table.

Attribute Name Attribute ID Description Data Type

Field

Object ID object_id Object ID String

Value


Field
API Attribute ID 3. Click Save and Return. Attribute 03: Source We can create the Source attribute. Follow these steps: 1. In Attributes, click New. 2. Create the Source attribute as shown in the below table.

c_objectID

Field

Attribute Name Attribute ID Description Data Type Default Value Populate Null Values with the Default API Attribute ID 3. Click Save and Return.

Source source Source String Clarity  c_source

Attribute 04: Objective Type

Let's create the Objective Type attribute.

Follow these steps:

1. In Attributes, click New. 2. Create the Objective Type attribute as shown in the below table.

Value

Field
Attribute Name Attribute ID Description Data Type Lookup API Attribute ID 3. Click Save and Return. Attribute 05: Last Sync Message Let's create the Last Sync Message attribute. Follow these steps: 1. In Attributes, click New.

Objective Type type_id Objective Type for Rally Lookup Rally Objectives c_objectiveType

Value


Value


2. Create the Last Sync Message attribute as shown in the below table.

Field

Attribute Name Attribute ID Description Data Type

Last Sync Message lastsync_msg_id Last Sync Message String

Maximum Size API Attribute ID 3. Click Save and Return.

256 c_lastSyncMessage

Attribute 06: Last Sync Status

Let's create the Last Sync Status attribute.

Follow these steps:

1. In Attributes, click New. 2. Create the Last Sync Status attribute as shown in the below table.

Value

Field

Attribute Name

Last Sync Status

Attribute ID

lastsync_stat_id

Description

Last Sync Status

Data Type

Lookup

Lookup

Rally Last Sync Status

API Attribute ID

c_lastSyncStatus

3. Click Save.

4. Set up color mapping as shown in the below table in the Display Mappings sections.

Color

Default Bucket

Green

Success

Red

Fail

5. Click Save and Return.

Attribute 07: Start

Let's create the Start attribute.

Follow these steps:

1. In Attributes, click New. 2. Create the Start attribute as shown in the below table.

Value Successful Failed

Attribute Name Attribute ID Description

Field

Start objective_start Start

Value

Value


Field

Data Type API Attribute ID 3. Click Save and Return.

Date c_objectiveStart

Attribute 08: Finish

Let's create the Finish attribute.

Follow these steps:

1. In Attributes, click New. 2. Create the Finish attribute as shown in the below table.

Value

Field

Attribute Name Attribute ID Description Data Type API Attribute ID 3. Click Save and Return.

Finish objective_finish Finish Date c_objectiveEnd

Attribute 09: Rally Projects

Let's create the Rally Projects attribute.

Follow these steps:

1. In Attributes, click New. 2. Create the Rally Projects attribute as shown in the below table.

Value

Field

Attribute Name Attribute ID Description

Rally Projects projects_id Rally Projects

Data Type

Multi Valued Lookup

Lookup

Rally Objectives Projects

API Attribute ID

c_objectiveProjects

3. Click Save. 4. In Lookup Parameter Mappings, select integration_mappings for im_id_constain. 5. Click Save and Return.

Attribute 10: State

Let's create the State attribute.

Follow these steps:

1. In Attributes, click New.

Value


2. Create the State attribute as shown in the below table.

Field
Attribute Name
Attribute ID
Description
Data Type
Lookup
API Attribute ID 3. Click Save. 4. In Lookup Parameter Mappings:
- Select integration_mappings for im_id_constain. - Select type_id for type_constrain. 5. Click Save and Return.

State objective_state State Lookup Rally Objectives States c_objectiveState

Create Attributes in Key Results
Let's create the Integration Mappings attribute.
Attribute 01: Integration Mappings
Follow these steps:
1. Click Administration, Studio, Objects. 2. Click Key Results. 3. Click Attributes. 4. In Attributes, click New. 5. Create the Integration Mappings attribute as shown in the below table.

Field
Attribute Name Attribute ID Description Data Type Lookup API Attribute ID 6. Click Save and Return. Attribute 02: Object ID Let's create the Object ID attribute. Follow these steps: 1. In Attributes, click New.

Integration Mappings integration_mappings Integration Mappings Lookup Integration Mappings Lookup c_integrationMappings

Value
Value


2. Create the Object ID attribute as shown in the below table.

Field
Attribute Name Attribute ID Description Data Type API Attribute ID 3. Click Save and Return. Attribute 03: Source Let's create the Source attribute. Follow these steps: 1. In Attributes, click New. 2. Create the Source attribute as shown in the below table.

Object ID object_id Object ID String c_objectID

Field

Attribute Name Attribute ID Description Data Type Default Value Populate Null Values with the Default API Attribute ID 3. Click Save and Return.

Source source Source String Clarity  c_source

Attribute 04: Last Sync Message

Let's create the Last Sync Message attribute.

Follow these steps:

1. In Attributes, click New. 2. Create the Last Sync Message attribute as shown in the below table.

Field
Attribute Name Attribute ID Description Data Type Maximum Size API Attribute ID 3. Click Save and Return. Attribute 05: Last Sync Status

Last Sync Message lastsync_msg_id Last Sync Message String 256 c_lastSyncMessage

Value Value

Value


Let's create the Last Sync Status attribute.
Follow these steps: 1. In Attributes, click New. 2. Create the Last Sync Status attribute as shown in the below table.


Field

Attribute Name Attribute ID

Last Sync Status lastsync_stat_id

Description

Last Sync Status

Data Type

Lookup

Lookup

Rally Last Sync Status

API Attribute ID

c_lastSyncStatus

3. Click Save. 4. Set up color mapping as shown in the below table in the Display Mappings sections.

Value

Color Green Red 5. Click Save and Return.

Default Bucket Success Fail

Value Successful Failed

Integration Mappings
We now need to create an integration mapping to connect Clarity and Rally.
Follow these steps:
1. Log into Clarity. 2. Click Administration and select the Integrations tab to open the Integrations page. 3. Click Add Row and enter the name of the integration mapping as Clarity 2 Rally. 4. In the Integration column, select Rally from the list. The Integration Mapping is now available.

Run the Import Integration Mapping Job in Classic PPM
The Import integration mapping job in Classic PPM enables Clarity to retrieve the portfolio item type objects and supported attributes from the configured Rally workspace. It also fetches the Milestones, Investment Categories, State, and Project lookups from Rally. Once imported, the objects and fields are available in the Rally Objects tab in Clarity. The job also populates the Integration Mapping drop-down menu list in Rally.
Follow these steps:
1. In Classic PPM, click Home, Reports and Jobs, Jobs to open the Jobs tab. 2. Ensure you have selected Available Jobs in the drop-down list and open the Import Integration Mappings job. 3. Select Clarity 2 Rally in Integration Mapping. 4. Click Submit.

Define Object Mappings in Clarity
You can map selected Clarity investments (Projects, Ideas, and Custom Investments) to selected Rally Portfolio items. In this scenario, we will map Objectives and Key Results in Clarity with Rally.


Follow these steps:
1. In Clarity, click Administration and select the Integrations tab to open the Integrations page. 2. Click Clarity 2 Rally and navigate to the Object Mappings tab. 3. Click the Add Row icon and enter the following details


Name External Object Clarity Object Direction

Field

Objectives Objectives Objectives Both

The External Object ID and Clarity Object ID are auto-populated in the grid.

Value

Define Field Mappings with Clarity
Field mappings specify how data is exchanged between Clarity investments/fields and Rally portfolio items/fields. Field mappings are always associated with a specific object mapping.
Follow these steps:
1. In the Object Mappings grid, click Details and select the Field Mappings tab. 2. Click Expand to open the Field Mappings window. 3. Enter the following details:

Direction
Both Both Both Both Both Both Both 4. Close the Details panel.

Clarity Field Name Start Finish Description Rally Projects State Confidence Score

External Field Name Start Date Target Date Description Projects State Score

Sync Option Create and Update Create and Update Create and Update Create and Update Update Update Create and Update


Define Sub-Object Mappings in Clarity You can map selected Clarity custom sub-objects associated with your objectives to Key Results in Rally. Follow these steps: 1. From Object Mappings, navigate to the Sub-Object Mappings tab. 2. Click the Add Row icon and enter the following details

Name Clarity Object External Object Direction

Field

Key Results Objectives/Key Results Key Result Both

Value

Define Sub-Field Mappings in Clarity
Follow these steps:
1. In the Sub-Object Mappings grid, click Details and select the Sub Field Mappings tab. 2. Click Expand to open the Sub Field Mappings window. 3. Enter the following details:

Direction
Both Both Both Rally to Clarity 4. Close the Details panel. 5. Log out of Clarity.

Sync Option Create and Update Create and Update Create and Update Create and Update

Clarity Field Name Start Metric Target Metric Current Metric

External Field Name Starting Value Target Value Latest Actual Value


Working with Objectives in Clarity Now that you have set up the integration and defined the relevant mappings, you can select which specific Clarity objectives will sync with Rally. In this release, you can select specific Clarity objectives to sync with Rally. This section covers the following topics: - Personalize the Grid - Save Your View in Objectives - Select Clarity Objectives to Sync with Rally Personalize the Grid Follow these steps: 1. Log into Clarity. 2. In the main menu, click Custom Objects. 3. Click Objectives. 4. In Grid, click the Columns panel and select the following fields:
- Integration Mappings - Object ID - Source - Objective Type - Last Sync Message - Last Sync Status - Start - Finish - Rally Projects - State 5. Close Columns. You can resize the column width in the grid. 6. Pin a couple of columns to the left. For this demo, hover on the Name column, click the menu icon, and then select Pin Column > Pin Left.


Save Your View in Objectives Clarity allows you to save and modify multiple views that help you achieve your business goals. Follow these steps: 1. In the Objectives grid, click View, Save As. 2. Enter the name of a view as "Business and Engineering". 3. Check Share with everyone. 4. Save the view.
Select Clarity Objectives to Sync with Rally
Follow these steps: 1. In the Objectives grid, enter the relevant integration mapping as shown in the table below:


Name

Integration Mappings

Start

Accelerate company solution adoption

Clarity 2 Rally

Aug 1, 2022

Achieve predictability and consistency of execution
Build a sustainable growth engine
Foster Culture of Innovation & Transparency

Clarity 2 Rally Clarity 2 Rally Clarity 2 Rally

Aug 1, 2022 Aug 1, 2022 Aug 1, 2022

Increase stakeholder

Clarity 2 Rally

engagement to simplify

operations & improve execution

Aug 1, 2022

Introduce compelling solutions Clarity 2 Rally to increase relevance with CIO/ CEO

Aug 1, 2022

2. Set Rally Projects and State for Objectives as shown in the table below:

Finish Oct 31, 2022 Oct 31, 2022 Oct 31, 2022 Oct 31, 2022 Oct 31, 2022
Oct 31, 2022

Name
Accelerate company solution adoption Achieve predictability and consistency of execution

Rally Projects Business and Bank Engagement Business and Bank Engagement

Discovering Discovering

State

Working with Key Results in Clarity
This section covers the following topics:
- Personalize the Grid - Save Your View in Key Results - Set Integration Mappings for Key Results


Personalize the Grid
Follow these steps:
1. In the Objectives grid, click Details. 2. Click Key Results. 3. In Grid, click the Columns panel and select the following fields:
- Integration Mappings - Object ID - Source - Last Sync Message - Last Sync Status 4. Close Columns. You can resize the column width in the grid. 5. Pin a couple of columns to the left. For this demo, hover on the Name column, click the menu icon, and then select Pin Column > Pin Left.

Save Your View in Key Results
Follow these steps:
1. In the Key Results grid, click View, Save As. 2. Enter the name of a view as "Key Results Integration". 3. Check Share with everyone. 4. Save the view.

Set Integration Mappings for Key Results Follow these steps: 1. In the Objectives grid, enter the relevant integration mapping as shown in the table below:

Name

Integration Mappings

Achieve 5 reference customers for the recently introduced integrated solution

Clarity 2 Rally

Ensure 100% of our customers Clarity 2 Rally participate in one marketing and sales channels

Ensure 50% of on-premise

Clarity 2 Rally

customers are renewing and are

on GA (or GA-1) release.

Improve overall Net Promotor Score (NPS) by +8 (was 38 in FY22)

Clarity 2 Rally

Increase overall SaaS user adoption in Key accounts by 20%

Clarity 2 Rally

2. Similarly, set the Integration Mappings to Clarity 2 Rally in other Key Results.


Run the Synchronize Mapped Information Job The Synchronize Mapped Information job in Classic PPM enables administrators to synchronize the mapped information between Clarity and Rally. Follow these steps: 1. Navigate to Classic PPM. 2. Click Home, Reports and Jobs, Jobs to open the Jobs tab. 3. Ensure you have selected Available Jobs in the drop-down list and open the Synchronize Mapped Information job. 4. Select Clarity 2 Rally in Integration Mapping. 5. Check Full Load. 6. Click Submit to run the integration immediately.
7. Next, let us check the logs for more details. Click Jobs, Logs. NOTE After this job is successfully executed, Clarity automatically executes the Import Staging Tables job to move the data from the staging table to Clarity.
8. Log out of Clarity. Review the Staging Table in Clarity Review all the data that is copied from Rally to Clarity and Clarity to Rally after the Synchronize Mapping Information job is successfully executed. You can also review the Error messages in case the data synchronization fails.

Follow these steps:
1. Log into Clarity. 2. Click Administration and select the Integrations tab to open the Integrations page. 3. Open Clarity 2 Rally in integration mapping and navigate to the To Rally tab. 4. Add the following columns to the grid layout to review the status of the records that have been processed:
- Clarity Object - Rally Object - Confidence Score - Start - Finish - Start Metric - Target Metric - Status - Error Message
Select Rally Investments to Sync with Clarity
Follow these steps:
1. Log in to Rally. 2. Navigate to the Rally Portfolio Item - Business Objectives. The integration mappings field value is auto-populated
and instructs Rally to use the defined field mapping configuration for ongoing updates back to Clarity.

3. Open Foster Culture of Innovation & Transparency. 4. Click Update Actuals.

Date
Value 5. Click Add 6. Click Done.

Field

Today 3

Value


7. Navigate back to Business Objectives. 8. Open Increase stakeholder engagement to simplify operations and improve execution. 9. Click Update Actuals.

Field
Date
Value 10. Click Add 11. Click Done. 12. Navigate back to Business Objectives.

Today 100

Value

Set Integration Mappings for Engineering Objectives
Follow these steps:
1. In Rally, navigate to Engineering Objectives 2. Set Integration Mappings to Clarity 2 Rally for all Objectives.

Run the Synchronize Mapped Information Job
Follow these steps:
1. Navigate to Classic PPM. 2. Click Home, Reports and Jobs, Jobs to open the Jobs tab. 3. Ensure you have selected Available Jobs in the drop-down list and open the Synchronize Mapped Information job. 4. Select Clarity 2 Rally in Integration Mapping. 5. Check Full Load. 6. Click Submit to run the integration immediately. 7. Next, let us check the logs for more details. Click Jobs, Logs.
NOTE After this job is successfully executed, Clarity automatically executes the Import Staging Tables job to move the data from the staging table to Clarity.


8. Log out of Clarity.


Review the Staging Table in Clarity
Follow these steps:
1. Log into Clarity. 2. Click Administration and select the Integrations tab to open the Integrations page. 3. Open Clarity 2 Rally in integration mapping and navigate to the To Clarity tab. 4. Add the following columns to the grid layout to review the status of the records that have been processed:
- Name - Projects - State - Clarity Object - Rally Object - Score - Name - Starting Value - Latest Actual Value - Target Value 5. Open View Options. 6. Set Number Decimal Display to 0.00. 7. Close View Options.

Review Objectives in Clarity
Follow these steps:
1. In the main menu, click Custom Objects. 2. Click Objectives. In Grid, the Object IDs will be automatically populated. You will see the latest data that is updated
from Rally.

## Clarity Cookbook: Program Management Made Easy
- Scenario - Solution Welcome to the Cooking with Clarity series. Our experts, Kurt Steinle and Brian Nathanson will walk you through how to maximize your investment in Clarity by effectively leveraging the Roadmaps, Hierarchies, and Collaborative Workflow Management capabilities. This is the third series of Cooking with Clarity sessions - Program Management Made Easy. Each session will have two phases. Kurt will present the finished dish in the first phase and walk us through it. Brian will show you how to recreate that dish in the second phase. Watch the following video to learn more about the Program Management Made Easy cookbook.
TIP Free Clarity Training on Broadcom Academy - You can attend FREE Clarity training by registering at the Broadcom Academy.
- The Clarity Cookbook: Program Management Made Easy training is available in the Academy. - You can log into Broadcom Academy using your existing Broadcom credentials. If you don't have Broadcom
credentials, simply create a new account and start training. Scenario In this cookbook, you will see how large organizations use Clarity to manage a global program responsible for migrating the enterprise workload from datacentres to the cloud.

The Cloud Transformation Program involves several different workstreams, such as: 1. Cloud Migration Workstream: The IT Team manages this Workstream. It moves the applications, data, and other
components from on-premises to a cloud-based infrastructure. This team uses the lift-and-shift approach to enable cloud migration. 2. Engineering Workstream: The Engineering Team manages this Workstream. It adds additional capabilities to the applications, such as Single Sign-On(SSO) or automation. 3. Procurement/Legal/GTM Workstream: Different cloud vendors are selected for this program. Hence, Procurement, Legal, and training teams are involved in this program. 4. Security and Cloud Compliance Workstream: The Information Security Team manages this Workstream. It stays at the forefront of innovation by managing risk and compliance effectively. To achieve the desired business outcomes, we must formulate and implement operational strategies in collaboration with the business and technology teams. One of the critical challenges is that different team uses different tools for their dayto-day tasks: 1. IT uses traditional task management to move the applications from the data centers to the cloud. 2. Engineering uses Rally to build the features that prepare the apps for the cloud. 3. Procurement uses its legacy ERP system. 4. InfoSec manages the compliance activities in Jira. 5. The learning team manages activities in a spreadsheet. The program management team is struggling to: 1. Track Progress in a world of hybrid applications 2. Provide simple management tools for your team members so we don't have to disrupt their busy world. 3. Understand the Schedule, Risk, Progress, and Financials of a complex transformation. 4. Communicate the business outcomes to your business stakeholders in terms that make sense to them.
Solution In this series, you will learn about Program Management in Clarity by performing the following actions. 1. Getting the Layer Cake Right - Defining and Using Workstreams and Hierarchies. 2. How We Work Together- Engaging our Team Members. 3. Show Me the Money - Financial Tracking and Control. 4. The Business Conversation- Communicating to Leadership.

Getting the Layer Cake Right: Defining and Using Workstreams & Hierarchies
- Cooking Preparation - Create a New Custom Investment Type - Programs - Set ID to Auto-numbering - Create Attribute for Programs - Create a New Custom Investment Type - Workstreams - Set ID to Auto-numbering - Create Attributes for Workstreams - Add the Relevant Access Rights To Users - Configure Programs Blueprint - Configure Workstreams Blueprint - Configure Hierarchy Blueprint - Comprehensive Step-by-Step Recipe - Using Program and Workstreams in Hierarchy - Associate Investments/Custom Investment Items with Parent Investment - Populate Checklists of To Do's - Configure the To Do's Grid View - Status Report in Hierarchy - Create an Agreement - View Executive Summary

Clarity allows you to continuously plan and prioritize work to fit both customer demands and business needs. To succeed, however, you need a solution that helps you manage the entire value stream - from concept to cash. Cloud Transformation Program has many workstreams to migrate the applications to the Cloud effectively. This recipe is about getting the layer cake right. Hence, we will define and use workstreams and hierarchies in this recipe. The finished recipe includes the following components: 1. Enable Program Control With Workstreams:
You can see how different teams manage their work using Hierarchies in Clarity regardless of tools (traditional projects, Rally, Jira, Excel). Each Workstream Manager maintains: - Readiness Checklists of the activities to be completed by their team - Risks or Issues that may impact delivery or cost and need to be addressed by the program steering committee - Status report for their workstream that the steering committee can consume - Easy financial tracking in the workstream

2. Collaborate With Your Workstream Owners: You need tools to track activities, but you also need tools to help communicate with the broad and disparate team of Workstream Managers. Hierarchy is perfect for collaboration.
For instance: Each Workstream Manager gets a notification for the next readiness review from the program manager. 3. Readiness Checklists:
You can define simple checklists that identify the progress of the workstream against its objectives.

4. Tracking Progress via Readiness Checklist Status: Here is the Readiness Checklist Status readout for the Cloud Migration Workstream. You can observe that: - Each Workstream has Readiness Checklists to identify the activities to be completed before the Workstream is ready to Go Live. - Each Workstream can continue to use whatever tool they need to manage their daily activities (Clarity Project Plans, Rally, Jira, etc.) - A simple Readiness Checklist at each Workstream enables the program manager to understand work status REGARDLESS of the tools being used by the teams.
5. Workstream Status Report: The Workstream provides a unique opportunity to simplify progress reporting and amplify issues that you need the program steering committee to address: - An overall status of the entire Workstream, rather than cluttering the focus with status on each project. - Risks and Issues the steering committee needs to focus on, rather than the myriad of details each team needs to address internally to their Workstream.

6. Program Status Report List: Here is the Status Report list for the program manager. Each project could have a status report. You can simplify this by making each Workstream Manager provide ONE status report for their Workstream. This provides one voice and enables them to focus leadership's attention on what matters most in each Workstream. The projects underneath each Workstream can also have status reports. Still, this level of detail is used to INFORM the Workstream manager and enable them to synthesize ONE VOICE to leadership for their Workstream.
NOTE With a complex program, the Status Report can provide a level of detail that overwhelms the program steering committee. 7. Risk and Issue Management: An individual project could have numerous risks or issues that deal mainly with the inner workings of the project team.

The Workstream Manager should manage Risks and Issues at the Workstream level that impact the overall delivery dates of their Workstream, have a cost impact, or impact benefits that require engagement with the executive team.
Cooking Preparation Now that we know what to expect in the finished recipe let's see how to prepare it.

Create a New Custom Investment Type - Programs
Follow these steps:
1. Open Administration, Studio, Objects. 2. Click New. 3. You can use the information in the following table to create the object.

Object Name Object ID Content Source Description Master or Subobject Partition Model Subobject Master Object

Field

Value
Programs programs Customer A Custom Investment for Program Management. Select Master Leave Blank Not selected Leave Blank


Field

Event Enabled Copy Enabled Export Enabled

Uncheck Uncheck Uncheck

View All Enabled

Uncheck

API Enabled

Check

Object Extension

Select Investment Extension

4. Click Save. By default, Include in Roadmaps will be checked.

5. Check Include in Hierarchies.

6. Click Save.

See Create an Investment Type for more information.

Value

Set ID to Auto-numbering
You can configure an auto-numbering scheme for a string attribute that consists of one or more segments. For example, the scheme for a Investment ID such as PG00000001 consists of two segments. One segment is for the prefix PG. A second segment is for the eight-digit number 00000001. Let's create an Autonumbering scheme for the Objective ID.
Follow these steps:
1. Click the Attributes tab of the Programs object. 2. Click ID. 3. Click the Auto-numbering tab. 4. Check Auto-numbered. 5. In the Schemes section, click Edit to edit an existing scheme. 6. Click New. 7. Select Text in Type of Segment. 8. In Value, enter 'PG' for this demo. 9. Click Save And Return.
You can see the Next Number as 00000001PG. Let's change the order of the segments.
1. Click Reorder. 2. Change the order in the Scheme Segments:
a. Text b. Numeric Counter(Next Value: 00000001) 3. Click Save And Return.
See Configure an Auto-Numbering Scheme for more information.

Create Attribute for Programs
Follow these steps:
1. In Programs, click Attributes, New. 2. For this demo, enter an attribute name as "Narrative" and Attribute ID as "narrative". 3. Add the description - "Program Narrative". 4. Set the Data Type field to Large String - Rich Text. 5. For this demo, enter the API Attribute ID as "c_narrative". 6. Save your changes.


Create a New Custom Investment Type - Workstreams
Follow these steps:
1. Open Administration, Studio, Objects. 2. Click New. 3. You can use the information in the following table to create the object.


Field

Value

Object Name

Workstreams

Object ID Content Source Description

workstreams Customer Another Custom Investment for Program Management.

Master or Subobject Partition Model Subobject

Select Master Leave Blank Not selected

Master Object Event Enabled Copy Enabled

Leave Blank Uncheck Uncheck

Export Enabled View All Enabled API Enabled

Uncheck Uncheck Check

Object Extension

Select Investment Extension

4. Click Save. By default, Include in Roadmaps will be checked.

5. Check Include in Hierarchies.

6. Click Save.

Set ID to Auto-numbering
You can configure an auto-numbering scheme for a string attribute that consists of one or more segments. For example, the scheme for a Investment ID such as WS00000001 consists of two segments. One segment is for the prefix WS. A second segment is for the eight-digit number 00000001. Let's create an Autonumbering scheme for the Objective ID.
Follow these steps:
1. Click the Attributes tab of the Workstreams object. 2. Click ID. 3. Click the Auto-numbering tab. 4. Check Auto-numbered. 5. In the Schemes section, click Edit to edit an existing scheme. 6. Click New. 7. Select Text in Type of Segment. 8. In Value, enter 'WS' for this demo. 9. Click Save And Return.
You can see the Next Number as 00000001WS. Let's change the order of the segments.
1. Click Reorder.


2. Change the order in the Scheme Segments: a. Text b. Numeric Counter(Next Value: 00000001)
3. Click Save And Return.

Create Attributes for Workstreams

Follow these steps:

1. In Workstreams, click Attributes, New.

2.

Field

Attribute Name Attribute ID Description

Workstream Funding ws_funding Workstream Funding

Data Type

Number

API Attribute ID

c_workstreamFunding

3. Save your changes. 4. Similarly, create the Narrative attribute as shown in the below table.

Value

Field
Attribute Name Attribute ID Description Data Type API Attribute ID 5. Save your changes.

Narrative narrative Narrative Large String - Rich Text c_narrative

Value

Add the Relevant Access Rights To Users
The Global, OBS, and Instance rights in Classic PPM are supported for custom investments.
Follow these steps:
1. Click Administration, Organization and Access, Groups. 2. Click a group name. For this demo, select Application Administrator. 3. Open the Access Rights menu and click Global. 4. Click Add. 5. Enter "Programs" in the Access Right field and press Enter. 6. Select all the access rights of Programs. 7. Click Add 8. Enter "Workstreams" in the Access Right field and press Enter. 9. Select all the access rights of Workstreams. 10. Click Add
To learn more, see Clarity Access Rights Reference.

Clarity - 16.4.1 4996

Configure Programs Blueprint When you create a custom investment type, a blueprint is automatically created in Clarity. You can create a copy of the blueprint and edit it to suit your goals. This section covers the following topics: - Filter the Blueprint - Copy the Blueprint - Mark As Default Blueprint - Edit the Blueprint - Publish the Blueprint
Filter the Blueprint You can use the filter option to quickly identify the blueprint. Follow these steps: 1. In Clarity, navigate to Administration, Blueprint. 2. Click the Filter icon. 3. Click Add Filter and select Type in the list. 4. Select Type Is Equal To Programs. You will see only the Programs Blueprint in the Grid.
Copy the Blueprint Since you cannot edit the default blueprint, you need to create a copy of it. Follow these steps: 1. In the Blueprint grid, select the Programs blueprint. 2. Click Copy. 3. Rename the copied blueprint as "Programs - Default". 4. Press Enter.
Mark As Default Blueprint Right click on Programs - Default and select Mark Default.
Edit the Blueprint We can now edit the blueprint to ensure it matches our business needs. Follow these steps: 1. In the Blueprint grid, click the Programs - Default blueprint. 2. Click Edit. You can see the Properties, Modules, Rules, Actions, and Create from Template tabs in the blueprint.
Add Modules to Blueprint Follow these steps: 1. Click Modules in the blueprint. 2. Drag and drop the Status and Hierarchy Modules into the grey box.


3. Remove Assignments. 4. Rearrange the modules in the below order:
- Properties - Staff - Tasks - Status - Financials - Risks - Issues - Changes - Hierarchy - Links
Publish the Blueprint To publish the Programs - Default blueprint, click Publish. You will see the message - "Programs - Default published successfully." To learn more, see Configure Blueprints for Custom Investments and Custom Objects.
Configure Workstreams Blueprint This section covers the following topics: - Copy the Blueprint - Mark As Default Blueprint - Edit the Blueprint - Publish the Blueprint
Copy the Blueprint Follow these steps: 1. In the Blueprint grid, select the Workstreams blueprint. 2. Click Copy. 3. Rename the copied blueprint as "Workstreams - Default". 4. Press Enter.
Mark As Default Blueprint Right click on Workstreams - Default and select Mark Default.
Edit the Blueprint We can now edit the blueprint to ensure it matches our business needs.
Follow these steps: 1. In the Blueprint grid, click the Workstreams - Default blueprint. 2. Click Edit. You can see the Properties, Modules, Rules, Actions, and Create from Template tabs in the blueprint.


Add Modules to Blueprint
Follow these steps:
1. Click Modules in the blueprint. 2. Drag and drop the Status, To Dos and Agreements Modules into the grey box. 3. Remove Links, Financials, Staff, Tasks, and Assignments. 4. Rearrange the modules in the below order:
- Checklists - Status - Agreements - Risks - Issues - Changes - To Dos - Properties


Publish the Blueprint To publish the Workstreams - Default blueprint, click Publish. You will see the message - "Workstreams - Default published successfully."
Configure Hierarchy Blueprint You can use blueprints to configure layouts for hierarchies. This section covers the following topics: - Copy the Blueprint - Mark As Default Blueprint - Edit the Blueprint - Add a Channel - Publish the Blueprint
Copy the Blueprint Follow these steps: 1. In the Blueprint grid, select the Standard Investment Hierarchy blueprint.


2. Click Copy. 3. Rename the copied blueprint as "Standard Investment Hierarchy - Default". 4. Press Enter.


Mark As Default Blueprint Right click on Standard Investment Hierarchy - Default and select Mark Default.

Edit the Blueprint We can now edit the blueprint to ensure it matches our business needs. Follow these steps: 1. In the Blueprint grid, click the Standard Investment Hierarchy - Default blueprint. 2. Click Edit. You can see Properties and Modules in the blueprint.

Add Modules to Blueprint
Follow these steps:
1. Click Modules in the blueprint. 2. Drag and drop the Status, Financials, Risks, Issues, Changes, and Conversations Modules into the grey box.

Add a Channel
Follow these steps:
1. Click New Channel in Modules. 2. Enter the Channel Name - Exec Summary for this demo. 3. Enter the Channel Url - https://app.powerbi.com/view?
r=eyJrIjoiZWMwYjc3NjUtMTU4MS00ZDIzLTlhMjEtMWRmYzkzOTIzMGI4IiwidCI6IjY3NzA5OGVmLWNlNjUtNGEzOS1iMWU for this demo.


Publish the Blueprint To publish the Standard Investment Hierarchy - Default blueprint, click Publish. You will see the message - "Standard Investment Hierarchy - Default published successfully." Comprehensive Step-by-Step Recipe Let's quickly check the instructions to prepare the dish.


Using Program and Workstreams in Hierarchy Now that you have published the related blueprints, you are ready to start adding program and workstreams in Clarity.

Add New Program
Follow these steps:
1. In the main menu, click Investments, Programs. 2. In Grid, click '+' to add a new program. 3. Create a program as shown in the below table.

Field

Name Investment ID Manager

Cloud Transformation Program PG00000001 Arpel, Ian

To learn more, see Create and Edit Custom Investments.

Value

Create Workstreams
Follow these steps:
1. In the main menu, click Investments, Workstreams. 2. In Grid, click '+' to add a workstream.


3. Create workstreams as shown in the below table.


Name Cloud Migration Workstream Engineering Workstream Procurement / Legal / GTM Workstream Security & Cloud Compliance Workstream

WS00000001 WS00000002 WS00000003 WS00000004

Investment ID

Configure Status Report for Cloud Migration Workstream
Follow these steps:
1. In Workstream, click Cloud Migration Workstream. 2. Click Status. 3. Click Configure to open Canvas in edit mode. 4. From the Configure Canvas section, drag and drop the Risks widget to the canvas. 5. Click X to remove the following widgets or fields from the canvas:
- Key Accomplishments - Cost Metrics - Effort Metrics 6. Point the mouse to a corner of the Status Report Update widget and drag horizontally or vertically to change its size. 7. Click Done to save your changes.
Save Your View
Clarity allows you to save and modify multiple views that help you achieve your business goals.
Follow these steps:
1. In Status, click View, Save As. 2. Enter the name of a VIEW as WS Status. 3. Check Share with everyone. 4. Save the view.

Fill the Status Create the status report as shown in the below table:

Schedule Status Scope Status Cost and Effort Status Status Report Update

Field

Value
On Track Needs Help Needs Help Data migration activities are mostly on track, but the data cleansing activities are c for this overall workstream. We may need to bring on additional resources, which overall cost of this workstream.


Publish the Status Report
You can preview and publish the current status report in PDF format. You can download the same PDF and share it with the Investment stakeholders.
Follow these steps:
1. In the Canvas view, click Preview to generate a preview of the current status report. 2. You can control screen size and orientation in the Preview mode. 3. Click Publish to publish the current draft status report.

View the Status Report in Grid To view the current and prior status reports, click Status, Reports.

Update the Status for Engineering Workstream
1. In Workstream, click Engineering Workstream. 2. Click Status. 3. Create the status report as shown in the below table:

Schedule Status Scope Status Cost and Effort Status Status Report Update

Field

Value On Track Needs Help Needs Help Most activities are on track, with a few issues due to resource unavailability.


Publish the Status Report for Engineering Workstream
Follow these steps:
1. In the Canvas view, click Preview to generate a preview of the current status report. 2. You can control screen size and orientation in the Preview mode. 3. Click Publish to publish the current draft status report.
To learn more, see Measure Progress and Publish Project Status Reports.


Associate Investments/Custom Investment Items with Parent Investment
Parent field allows you to define the parent of an investment. You can define a parent for Custom Investments, Ideas, and Projects.
Follow these steps:
1. In Investments, clickWorkstreams. 2. Click Columns and select Parent. 3. Create the parent-child relationship as shown in the table:

Custom Investment Item
Cloud Migration Workstream Engineering Workstream Procurement / Legal / GTM Workstream Security & Cloud Compliance Workstream 4. Navigate to Projects in the main menu and click Grid. 5. Click Columns and select Parent.

Cloud Transformation Program Cloud Transformation Program Cloud Transformation Program Cloud Transformation Program

Parent

Project Name AARD Payments Module Migrate AARD from New York Data Center Payment API Work Cybersecurity ISO27001 Audit Upgrade to DoD IL 4 compliance CI/CD Pipeline for SaaS SaaS SSO Integration

Parent Cloud Migration Workstream Cloud Migration Workstream Cloud Migration Workstream Security & Cloud Compliance Workstream Security & Cloud Compliance Workstream Engineering Workstream Engineering Workstream

Create a Hierarchy
You can use Hierarchies in Clarity to create one or more hierarchies and define the relationship between various investments. Each hierarchy includes a tree with multiple cards. You can then establish a parent-child relationship between cards to help your stakeholders understand the dynamics of the program.
Follow these steps:
1. In the main menu, click Hierarchies. The Hierarchies page is displayed. 2. Click the (+) plus icon to add a new hierarchy to the grid. You can also right-click in the grid and select Insert Row
Below. 3. Enter the hierarchy name as Cloud Transformation Program and hierarchy ID as H001 to create a new hierarchy.


4. Select Investment in Type.
Adding Investments to the Hierarchy Workspace You have to import at least one investment manually for using the Auto-Import Children option. Follow these steps: 1. Click the Cloud Transformation Program Hierarchy. 2. ClickIMPORT to add investments to Hierarchy. 3. Click Programs, Cloud Transformation Program. 4. Click Add. 5. Right-click Cloud Transformation Program and select the Auto-Import Children option.


To learn more, see Create and Edit Hierarchies.
Populate Checklists of To Do's The Checklists module helps to create, edit and track checklists specific to the investments. You can also share Checklists with other Clarity users. Follow these steps: 1. In the main menu, click Projects. 2. Open Checklists Library. 3. Click the Checklist - Cloud Marketing Readiness (GTM) in the left panel. 4. Click Three-dot Action Menu and select Copy. 5. Enter the name of the Checklist as - Cloud Marketing Readiness and click Copy.


Moving a Checklist to Procurement/Legal/GTM Workstream
Follow these steps:
1. Click the Checklist - Cloud Marketing Readiness. 2. Click Three-dot Action Menu and select Move Checklist. 3. SelectWorkstreams, Procurement/Legal/GTM Workstream and click Move.


Copy and Move the Communication Readiness Checklist To Procurement Workstream
Follow these steps:
1. In Checklists Library, click Communication Readiness (GTM). 2. Click Three-dot Action Menu and select Copy. 3. Enter the name of the Checklist as - Communication Readiness and click Copy. 4. Click Three-dot Action Menu and select Move Checklist. 5. SelectWorkstreams, Procurement/Legal/GTM Workstream and click Move.

Copy and Move the End User Training Readiness Checklist To Procurement Workstream
Follow these steps:
1. In Checklists Library, click End User Training Readiness(GTM). 2. Click Three-dot Action Menu and select Copy. 3. Enter the name of the Checklist as - End User Training Readiness and click Copy. 4. Click Three-dot Action Menu and select Move Checklist. 5. Select Workstreams, Procurement/Legal/GTM Workstream and click Move.

Copy and Move the Procurement Readiness Checklist To Procurement Workstream
Follow these steps:
1. In Checklists Library, click Procurement Readiness(GTM). 2. Click Three-dot Action Menu and select Copy. 3. Enter the name of the Checklist as -Procurement Readiness and click Copy. 4. Click Three-dot Action Menu and select Move Checklist. 5. SelectWorkstreams, Procurement/Legal/GTM Workstream and click Move.
To learn more, see Creating and Managing Project Checklists.

Configure the To Do's Grid View
Clarity allows you to create to-do items for an investment a phase, a milestone, for a task to break down the work into smaller activities. The To Dos page displays all the To Dos assigned to you across various investment types in Clarity.
Follow these steps:
1. In the main menu, click To Dos. 2. Click Columns and select the following columns from the list:
- Blocked - Blocked Reason - Status - Link - Related To - Related To Type


Configure Widgets You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity.

Configure Number Tile for Open
The Number Tile Widget displays a specific number based on the widget definition and filter criterion.
Follow these steps:
1. In the To Dos grid, click Show Widgets. 2. Click Manage Widgets. 3. Click New Widget. 4. Select Number Tile and click Next. 5. Create a number tile as shown in the below table:

Field
Title Color Type Format Only Include items where... 6. Click Create. 7. Click Add to show the number Tile in the grid. 8. Close Add Widgets.

Open Green Count Number Status=Open

Value

Configure Number Tile for Blocked
Follow these steps:
1. In the To Dos grid, click Show Widgets. 2. Click Manage Widgets. 3. Click New Widget. 4. Select Number Tile and click Next. 5. Create a number tile as shown in the below table:

Field

Title

Blocked

Color

Red

Type

Count

Format

Number

Only Include items where...

Status=Blocked

6. Click Create. 7. Click Add to show the number Tile in the grid. 8. Close Add Widgets.

Value


Configure Number Tile for Due Date
Follow these steps:
1. In the To Dos grid, click Show Widgets. 2. Click Manage Widgets. 3. ClickNew Widget. 4. Select Number Tile and click Next. 5. Create a number tile as shown in the below table:

Field

Value

Title

Late

Color Type Format

Pink Count Number

Only Include items where...

Due Date Is Before (Current Date)

6. Click Create. 7. Click Add to show the number Tile in the grid. 8. Close Add Widgets.

Configure Progress Ring
The Progress Ring Widget displays a ring with a number based on the widget definition and filter criterion.
Follow these steps:
1. In the To Dos grid, click Show Widgets. 2. Click Manage Widgets. 3. Click New Widget. 4. Select Progress Ring and click Next. 5. Create a Progress ring as shown in the below table:

Title Color Type Format Only Include items where...

Field

Completed Green Count Percent Status = Completed

Value


6. Click Create. 7. Click Add to show the progress ring in the grid. 8. Close Add Widgets.

Configure Bar Chart
The Bar Widget displays a bar graph based on the widget definition and filter criterion.
Follow these steps:
1. In the To Dos grid, click Show Widgets. 2. Click Manage Widgets. 3. Click New Widget. 4. Select Bar Chart and click Next. 5. Create a Bar chart as shown in the below table:

Field
Title Type Group By Sort Order Format Sort Order Only Include items where... 6. Click Create. 7. Click Add to show the bar chart in the grid. 8. Close Add Widgets.

Most Remaining Count Owner Number Number Descending Status = Open

Value


To learn more, see Track and Edit To Dos. Status Report in Hierarchy You can view the status reports associated with all the investments included in your hierarchy. Follow these steps: 1. In the main menu, click Hierarchies. 2. Open Cloud Transformation Program. 3. Click Status in Hierarchy. 4. In Columns, select the following fields:
a. Overall Status b. Report Status c. Latest d. Status Report Update e. Cost And Effort Status f. Scope Status g. Schedule Status 5. Click the Filter icon to add a filter: Latest=Yes to view the latest status reports.
NOTE You can click the link in the Common Investment Name field to navigate to the respective investment page. To learn more, see Manage Status Reports for Hierarchies. Create an Agreement The Business Agreements workspace in Clarity enables you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates.


Follow these steps:
1. In the main menu, navigate to the Agreements page. 2. In Columns, add the Status column. 3. Click the Plus icon to create a new agreement. 4. Create an agreement - Security Commit to SOC 2 Audit by Oct 31. 5. Press Enter.


Configure the Canvas in Agreement
Follow these steps:
1. Open the agreement -Security Commit to SOC 2 Audit by Oct 31. 2. Click Configure. 3. Drag and drop the Description and Get Well Plan fields into the Canvas. 4. Click Done.

Add Information in Agreement
Follow these steps:
1. Click Add in Predecessors. 2. SelectWorkstreams, Security and Cloud Compliance Workstream. 3. Click Add. 4. Click Add in Successors. 5. SelectWorkstreams, Cloud Migration Workstream. 6. Click Add. 7. In the Description, enter the text -"Security Team agrees to ensure SOC 2 audits are reviewed prior to Oct 31 to
allow room for prod deployment" for this demo.
To learn more, see Creating and Managing Business Agreements in Clarity.

View Executive Summary
As you configured a channel in the Hierarchy Blueprint, you can find the new channel - Exec Summary in the Modules panel.
Follow these steps:
1. In the main menu, click Hierarchies. 2. Open the Cloud Transformation Program Hierarchy. 3. Click Exec Summary. You can see the end results of the Cloud Transformation Program.

How We Work Together: Engaging our Team Members
- Cooking Preparation - Create a New User - Comprehensive Step-by-Step Recipe - Working with Checklists - View Danielle's Checklist in My Workspace - Working with Smartlists


Find the right people for the right job right away - and with confidence they will be there when needed. For Cloud Transformation Program, you must collaborate with the different teams using different tools. This recipe is about how we work together. Hence, we will engage the team members in this recipe. The finished recipe includes the following components: 1. How We Work Together (IT - Traditional Tasks)?
You can manage Projects and subprojects within the workstream for teams that require powerful task management capabilities.
2. How We Work Together (My Workspace)? Danielle works with the Procurement, Legal, and GTM Workstream Team. She is a NON-TECHNICAL team member. The Workstream Manager invites her to work on several checklists. Danielle doesn't know anything about Clarity; she

is busy and doesn't want to learn a new system. But, she is familiar with a To Do List and doesn't mind checking her to-dos as long as it's simple.
3. How We Work Together (My To Do's Smartlist)? Danielle could open up each Checklist and find hers To Do's. It is an easier way to do this. She clicks on her Smartlist: "My To Do's". This list pre-filters and show all of her To Do's. She can easily see what's overdue, due now, in a week, and later. She can also open up the completed folder to review what has been completed in her list.
4. How We Work Together (My To Do's Board)? Danielle chooses the board view to see To Do's by status. She got six open To Do's, two completed, and one blocked.

5. How We Work Together (My To Do's Calendar)? Danielle chooses the calendar view to see To Do's by date. It is a simple way for her to determine when things are due.
Cooking Preparation Now that we know what to expect in the finished recipe let's see how to prepare it.


Create a New User
As an administrator, you can create new user accounts. These entries simultaneously serve as records for labor resources.
Follow these steps:
1. Log into Clarity with Admin rights. 2. Click Classic PPM. 3. In Classic PPM, click Administration, Organization and Access, Resources. 4. ClickNEW. 5. Create a new user as shown in the table:

Field

Value

LAST NAME

Dixon

FIRST NAME USER NAME RESOURCE ID

Danielle dd denielleDixon

PASSWORD CONFIRM PASSWORD Force Password Change

Cl@rity123 Cl@rity123 Uncheck

E-MAIL ADDRESS

danielle@mailserver.com

6. ClickSAVE AND CONTINUE.

7. Click Groups.
NOTE You can observe that Danielle is added to a group - Basic group for user access.

To learn more, see Create a New User.

Comprehensive Step-by-Step Recipe Let's quickly check the instructions to prepare the dish.


Working with Checklists This section covers the following topics: 1. Share Checklists With the New User 2. Added Checklist Sharing Group for the New User 3. View Checklist Sharing Group Details Share Checklists With the New User You can share the checklist with other team members as Collaborators. Follow these steps: 1. In Clarity, click Custom Investments, Workstreams, Procurement/Legal/GTM Workstream 2. Click the Cloud Marketing Readiness Checklist that you want to share with Danielle for this demo. 3. Click the Share button. The Share Checklist pop-up window opens. 4. Search by name or e-mail address. For this demo, enter Danielle. 5. Select Danielle to add the user as a collaborator. 6. Click Done. 7. Similarly, share the following checklists with Danielle:
- Communications Readiness - End User Training Readiness - Procurement Readiness

Added Checklist Sharing Group for the New User Users with whom a checklist is shared are automatically added to the Checklist Sharing group. Follow these steps: 1. In Classic PPM, click Administration, Organization and Access, Resources. 2. Search for Danielle. 3. Click Dixon to view the user details. 4. Click Groups. You can observe that a new group (Checklist Sharing) added in the list. View Checklist Sharing Group Details The Checklist Sharing group helps the Administrator to: - Add and remove access rights for the group. - Add and remove users from the group. Follow these steps: 1. Click Administration, Organization and Access, Groups. 2. Click the Checklist Sharing group. 3. Open the Access Rights menu and click Global. You can see the access rights in the Checklist Sharing group. 4. Log out. To learn more, see Creating and Managing Investment Checklists. View Danielle's Checklist in My Workspace After login to Clarity, Danielle can see all To Dos associated with Investments, Tasks, Risks, Issues, Changes, and Checklists in My Workspace where she is assigned as Owner.


Follow these steps: 1. Log in with the following credentials in Clarity:


Field

Username

dd

Password

Cl@rity123

2. The My Workspace page opens.

Value

Assign Danielle for To Dos
Daniella can assign her own To Dos.
Follow these steps:
1. Open My Workspace in Clarity. 2. In the Communications Readiness Checklist, click the Production environment is available To Do to assign a resource. 3. Click Assign Owner. 4. Select Danielle from the list. 5. Similarly, assign the following To Dos to Danielle:

Checklist Communications Readiness End User Training Readiness

To Dos
Infrastructure operations and support for the application are in place (escalation 1. Training Plan and approach developed 2. Participate in Train the Trainer

Working with Smartlists
A Smartlist is a filter. It allows you to configure a list that displays To Dos across the following areas in Clarity:
- Investments - Tasks - Risks, Issues, Changes - Checklists

View My To Dos in Smartlists
Clarity provides a "My To Dos" smartlist for every user. It displays all To Dos across Investments, Tasks, Risks, Issues, Changes, and Checklist for the current user. The "My To Dos" smartlist cannot be deleted, but the current user can modify the condition and rename the "My To Dos" smartlist.
Follow these steps:
1. Open My Workspace in Clarity. 2. Click My To Dos in Smartlists.


Creating a New Smartlist Follow these steps: 1. In Smartlists, click `+' to add a new Smartlist. 2. Enter the name of the smartlist as All Open in Workstreams for this demo. 3. In the Show To Dos where... section, add a filter: Status = Open. 4. Click Create.

View To Dos in Board You can use the Board layout to view To Do Items as cards. You can arrange these cards with drag-and-drop precision on a board layout with columnar swim lanes. Follow these steps: 1. Click Board in the All Open in Workstreams smartlist. 2. Select Owner in Columns.
View To Dos in Calendar The Calendar layout displays To Do items in a weekly or monthly calendar based on their due date. If you do not have a due date assigned to a To Do item, it's available in the Unscheduled section. You can drag and drop a To Do item from the unscheduled section to the relevant due date on the calendar. To view the Calendar view, click Calendar in the All Open in Workstreams smartlist. To learn more, see Collaborative Workflow Management in Clarity.
Show Me the Money: Financial Tracking & Control
- Comprehensive Step-by-Step Recipe - Add Workstream Funding in Workstreams - Create and Manage Custom Metrics - Configure Hierarchy Board Cards - Configure Hierarchy Timeline - Configure Hierarchy Grid - Configure Financials Module in Hierarchy

As a part of the Cloud Transformation Program, you must know how your investments are doing in real-time. Hence, you will learn how to leverage the financial management capabilities of Clarity. The finished recipe includes the following components: 1. Program Timeline:
The Program Timeline shows you a roadmap view of all the work activities in the Cloud Transformation Program. You can see what has begun when work finishes. You can compare the overall Program Budget to the amount of the budget you have allocated to each Workstream and the amount of each Workstream allocated to the underlying projects. You also have visibility into the Amount of the Program Budget Unallocated, as well as actuals and forecasts.
Feedback from customers: Beautiful! This is a great "one-stop shop" view for the Program Manager to get the Big Picture of where we stand in terms of schedule and budget. I like it. 2. Financial Insights - Program Cost Plan: Financial plans at both the program and project levels enable you to track financial performance. This view is the Program Cost Plan.

3. Financial Insights - Program Benefit Plan: Program Benefit Plans enable you to define the financial outcome of delivering on this program.
4. Financial Insights - Project Cost Plans: You can drill into the underlying projects' financial details to analyze each investment's cost and forecast.

5. Financial Insights in the Hierarchy View - Workstream Summary Financials: As a Program Manager, you can allocate a portion of the total Program Budget to each workstream, so you have insight into what was planned for each workstream vs. how the cost plans are currently tracking. This memo cost field provides more detail to the program manager; the actual financial tracking is at the Program and Project levels.
6. Financial Insights in the Grid View - Workstream Summary Financials:

The Program Manager can see the time-phased cost, actuals, benefits, and forecast summarized by investment in this program grid view. A powerful summary and detailed information are available for tracking financial execution.
7. Financial Insights in Channel- Workstream Summary Financials: This example of an at-a-glance view developed using a BI solution helps leadership understand where we are now. These are busy people. You need to be simple and concise when you get an opportunity to report to the leadership team.


Comprehensive Step-by-Step Recipe Let's quickly check the instructions to prepare the dish.


Add Workstream Funding in Workstreams
NOTE As part of the first recipe, you created a new attribute, Workstream Funding. This section will utilize the same attribute.
Follow these steps:
1. In the Clarity main menu, clickCustom Investments, Workstreams. 2. Click Columns and select Workstream Funding. 3. Add the following details in the Workstream Funding column:

Name Cloud Migration Workstream Engineering Workstream Procurement / Legal / GTM Workstream Security & Cloud Compliance Workstream

1,000,000 700,000 500,000 300,000

Workstream Funding

Create and Manage Custom Metrics
Clarity allows you to roll up hierarchy card metrics using either an aggregation or calculation method. Hierarchies include a capability to define Aggregation or Calculation metrics. Hierarchy roll-up is automated when defined metrics are applied to an investment type. While aggregation metrics roll up within the entire hierarchy across all investments, calculation metrics apply to a single investment. Calculation Metrics perform basic mathematical operations on stock attributes, custom attributes, and aggregation metrics and display the value on a hierarchy card.

Create an Aggregation Metric - Amt Distributed Follow these steps: 1. In the main menu, click Hierarchies. The Hierarchies page is displayed.


2. Open Cloud Transformation Program. 3. Click the gear icon (View Options), select Manage Metrics. 4. Below the AGGREGATION tab, click New Metric and enter the name of the metric. In our scenario, we can call it Amt
Distributed. 5. In the Metric Based On field, select the relevant attribute. In our scenario, we can select the Workstream Funding
attribute. 6. In the Aggregation Scope field, select Children Only. 7. Click Create.
Create an Aggregation Metric - Workstream Amt Allocated Follow these steps: 1. Below the AGGREGATION tab, click New Metric and enter the name of the metric. In our scenario, we can call it
Workstream Amt Allocated. 2. In the Metric Based On field, select the relevant attribute. In our scenario, we can select the Planned Cost attribute. 3. In the Aggregation Scope field, select Children Only. 4. Click Create. Create a Calculation Metric Follow these steps: 1. In MANAGE METRICS, click CALCULATION. 2. Click New Metric and enter the name of the metric. In our scenario, we can call it Reserve. 3. In Metric Type, select Standard. 4. In the Metric One list, select the first attribute relevant to the calculation. In our scenario, let us select the Budgeted
Cost attribute. 5. In the Operator list, select the relevant operator. In our scenario, let us select the Subtract attribute.

6. In the Metric Two list, select the second attribute relevant for the calculation. In our scenario, let us select the Amt Distributed attribute.
7. Click Create. 8. Close MANAGE METRICS.
To learn more, see Create and Edit Hierarchies. Configure Hierarchy Board Cards Follow these steps: 1. In View Options, under CARD OPTIONS navigate to Programs. 2. In Metrics, select Budgeted Cost, Amt Distributed, and Reverse. 3. Under CARD OPTIONS navigate toWorkstreams. 4. In Metrics, selectWorkstream Funding and Workstream Amt Allocated. 5. Close View Options.

Configure Hierarchy Timeline You can personalize the Timeline to ensure it meets your business requirements. Follow these steps: 1. In the Cloud Transformation Program Hierarchy, click Investments, Timeline. 2. Click Columns and select the following fields:
- Budgeted Cost - Workstream Funding - Planned Cost - Actual Cost 3. Close Columns To learn more, see Review Investments By Using the Timeline Layout. Configure Hierarchy Grid The grid displays all the investments (projects, ideas, and custom investments) that are a part of your hierarchy. You can use the grid to review common attributes across all investments or specific to individual investments. Follow these steps: 1. In the Cloud Transformation Program Hierarchy, click Investments, Grid. 2. Click Columns and select the following fields: - Parent - Name - Level - Risk Score - Planned Cost 3. Close Columns


4. Click View Options. 5. Setup the view as shown in the table:


Field

Value

Periods

Quarters

Start Period End Period Totals

Start of Current Year End of Current Year Grand Totals

Per-Period Metrics 6. Close View Options.

Planned Cost; Actual Cost; Forecast Cost

To learn more, see Analyze Investments in Hierarchies by Using the Cross-Object Investment Grid.

Configure Financials Module in Hierarchy
The Financials module provides a central place for viewing all Financial Plan details of all the investments in a Hierarchy. It gives insight into how the costs, budgets, and benefits were planned and spent at a detailed level.
Follow these steps:
1. In the Cloud Transformation Program Hierarchy, clickFinancials. 2. Click Columns and select the following fields:
- Common Investment - Name - Cost Plan - Name, ID - Cost Plan Details - Cost Type, Transaction Class - Totals - Cost, Actual Cost, Forecast
NOTE Uncheck the rest of the fields. 3. Close Columns. 4. Click View Options. 5. Setup the view as shown in the table:

Field
Periods Start Period End Period Totals Per-Period Metrics 6. Close View Options.

Months Start of Current Year End of Current Year Sum of Periods Cost; Actual Cost; Forecast

Value


7. Drag the Transaction Class and drop it into the Group By bar. You can view the Cost Plan details by expanding each Class in Group.

Configure Widgets You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity.

Configure Number Tile for Captial
The Number Tile Widget displays a specific number based on the widget definition and filter criterion.
Follow these steps:
1. In the To Dos grid, click Show Widgets. 2. Click Manage Widgets. 3. Click New Widget. 4. Select Number Tile and click Next. 5. Create a number tile as shown in the below table:

Field

Title

Capital

Color Type Format

Green Sum Number

Sum

Cost

Only Include items where...

Cost Type=Capital

6. Click Create. 7. Click Add to show the number tile in the grid.

Value


8. Close Add Widgets.

Configure Number Tile for Operating
Follow these steps:
1. In the To Dos grid, click Show Widgets. 2. Click Manage Widgets. 3. Click New Widget. 4. Select Number Tile and click Next. 5. Create a number tile as shown in the below table:

Field

Title

Operating

Color Type Format

Red Sum Number

Sum

Cost

Only Include items where...

Cost Type=Operating

6. Click Create. 7. Click Add to show the number tile in the grid. 8. Close Add Widgets.

Value

Configure Progress Ring
The Progress Ring Widget displays a ring with a number based on the widget definition and filter criterion.
Follow these steps:
1. In the To Dos grid, click Show Widgets. 2. Click Manage Widgets. 3. Click New Widget. 4. Select Progress Ring and click Next. 5. Create a Progress Ring as shown in the below table:

Field

Title

Actuals

Color

Green

Type

Sum

Format

Percent

Sum

Actual Cost

6. Click Create. 7. Click Add to show the progress ring in the grid. 8. Close Add Widgets.

Value

Configure Bar Chart The Bar Widget displays a bar graph based on the widget definition and filter criterion.


Follow these steps:
1. In the To Dos grid, click Show Widgets. 2. Click Manage Widgets. 3. Click New Widget. 4. Select Bar Chart and click Next. 5. Create a Bar chart as shown in the below table:

Title Type Format Group By Sum Sort Order

Field

Trans Class Sum Number Transaction Class Cost Descending

Value


6. Click Create. 7. Click Add to show the bar chart in the grid. 8. Close Add Widgets. To learn more, see View Financial Plans in Hierarchy.
The Business Conversation: Communicating to Leadership
- Comprehensive Step-by-Step Recipe - Create a New Roadmap - Import Roadmap Items From a CSV File - Set Up View Options - Add Roadmap Events - Create a Picklist - Save Your View


You must communicate with the Leadership team about the progress of the Cloud Transformation Program. So, you can use a roadmap in Clarity to translate the leadership's vision into a guideline for communication with stakeholders. In Roadmap, You can: 1. Show the apps being migrated, grouped by functional area 2. Change the Freeze date as well as a go-live event 3. Highlight the benefits of moving the applications to the cloud This recipe is about business conversation. Hence, we will communicate to leadership team about the progress of cloud transformation program in this recipe using Roadmaps. The finished recipe includes the following components: 1. Communicate Outcomes to the Business:

This roadmap view has been created independently to show the impact of the program's work. The applications are just items on this roadmap; no investments in Clarity are required. 2. Share the Roadmap with Stakeholder: You can share the roadmap with other stakeholders to get visibility into the business outcomes to be achieved by the program.
3. Discussion with Stakeholders You can engage in conversation to provide additional context and record any asks or suggestions for stakeholders.

4. Notification to Stakeholders: Stakeholders are notified that the roadmap has been shared with them. Later, the conversations will be directed to stakeholders.
5. Modify the Roadmap View: You can change the roadmap view to look at Applications by Status and Complexity (High, Medium, and Low). You can collapse a few swimlanes to focus on the "In Trouble" and "Stalled" applications.
You can see several stalled applications and high complexity. So, they need to get some focus from the executive team. 6. Board View in Roadmap: The board view shows the application by owner with their Deployment Status as a color.

You can see that Paula Granger has a few applications with poor status. So, you should meet regularly with her to get an update until these issues are resolved. Comprehensive Step-by-Step Recipe Let's quickly check the instructions to prepare the dish.
Create a New Roadmap In case you want to create a roadmap manually, you can perform the following steps. 1. Log into Clarity and clickRoadmaps. 2. Click New Roadmap.


3. Complete the following fields:


Roadmap Name START PERIOD DURATION 4. Click Create.

Field

App Roadmap 2022(Current Period) 2 Years

Value

Import Roadmap Items From a CSV File
You can import a list of up to 250 roadmap items from a comma-separated values (CSV) file. Your imported roadmap items appear inside a single roadmap scenario.
Follow these steps:
1. In the roadmap - App Roadmap, click Item Actions, Import from CSV. 2. Click Import CSV. 3. Select a CSV file and click Open. You will see a message - Import Successful.

Set Up View Options You can customize the Roadmap view using View Options. Follow these steps: 1. In App Roadmap, click View Options. 2. Complete the following fields:

Periods Start Period End Period Totals Swimlanes Color By 3. Close View Options.

Field

Quarters Roadmap Start Roadmap End Sum of Periods Deployment Deployment Status

Value

Add Roadmap Events
Follow these steps:
1. In App Roadmap, click View Options. 2. Click Events. 3. Click Manage Roadmap Events. 4. Click New Event.


5. Complete the following fields:

Field
Name Date Image Line 6. Similarly, add the other events in Roadmap Events.

Name Date Image Line

Field

LeadGen Cutover Date 06/01/2023 Star Purple

Cash Mgt Freeze Date 02/01/2023 Flag Pink
Value 01

Value
Platform Go Live 07/01/2023 Rocket Orange

7. Close Roadmap Events. 8. In Events, check the following events:
- Cash Mgt Freeze Date - LeadGen Cutover Date - Platform Go Live

9. Turn on Show Roadmap Events. 10. Close View Options. Create a Picklist Create a local picklist to group roadmap items by column or color in a specific roadmap. You can then use the picklist across all the layouts. Follow these steps: 1. Click View Options, Manage Picklist, New Picklist. 2. Type Technical Complexity in the Picklist Name. 3. Click Add Choice. 4. Type High and press Enter. 5. Click None to add color. Select Red. 6. Click Add Choice.

7. Type Medium and press Enter. 8. Click None to add color. Select Yellow. 9. Click Add Choice. 10. Type Low and press Enter. 11. Click None to add color. Select Green. 12. Click Done.
NOTE You can efficiently distribute the roadmap items on the new picklist in the Board layout. 13. Click the Board Layout. 14. Click View Options. 15. In Board Options, select Technical Complexity in Columns. You can drag-and-drop all the roadmap items on the board across and within columns.

Save Your View
Follow these steps:
1. In App Roadmap, clickTimeline. 2. Click Save As. 3. Type -Apps by Functional Area and click Save. 4. Click View Options. 5. Complete the following fields (Setup view options):

Periods Start Period End Period Totals Swimlanes Color By

Field

Quarters Roadmap Start Roadmap End Sum of periods Deployment Status Technical Complexity

Value


6. Close View Options. 7. Click Save As. 8. Click the arrow near to Save. 9. Type - Status and Complexity and click Save. 10. ClickSwimlanes. 11. Check only In Trouble and Stalled. 12. Close Swimlanes. 13. Click the arrow near to Save. 14. Click Save As. 15. Type - Status and Complexity - In Trouble and click Save. To learn more, see Top-Down Planning with Roadmaps.

## Clarity Education and Training

> [!NOTICE]
> Experience Clarity Like Never Before -- New Interactive Simulation Now Live! Explore our latest Simulation Lab, now available on the Broadcom Software Academy. Experience Clarity Like Never Before -- New Interactive Simulation Now Live! Explore our latest Simulation Lab, now available on the Broadcom Software Academy. This hands-on, interactive experience guides you step by step through key Clarity features and lets you practice at your own pace. Click here to start the simulation.
Continue Learning: Enroll in Clarity 16.x - Reporting Essentials to gain a deeper understanding of Clarity's reporting capabilities. This page covers the following topics:
- Free Web-Based Training - Latest Courses on Broadcom Academy
- Enablement Videos Empower Your High-Performance Teams with Broadcom Education: Your Broadcom software investment helps you breakthrough and produce measurable outcomes. Whether you are looking to lower the risk of product failure, improve user adoption and productivity, reduce reliance on external support, or accelerate the ROI of your investment, Broadcom Software Education can help. Free Web-Based Training You can attend FREE Clarity training by registering at Broadcom Academy.
You can log into Broadcom Academy with your existing Broadcom credentials. If you don't have Broadcom credentials, simply provide your official email address and get started with your training.
NOTE The training catalog includes functional and domain-centric training that will help you realize value for your investment in Clarity.


Latest Courses on Broadcom Academy


Course Name Getting Started with Clarity
Clarity 16.x - Reporting Essentials
Clarity 16.2.x: Managing Projects
Clarity: Financial Management Clarity Cookbook: Program Management Made Easy

Course Description
Digital transformation is complex. Executives lack the insight to act, portfolio managers can't track progress, and team members feel disconnected from the business. While 80% of companies are trying to transform digitally, only 14% succeed.
This course introduces Clarity - a simple, usable, and powerful portfolio management solution available on-premises and in the cloud. Manage your business outcomes using Clarity:
- Move beyond traditional project management to strategic portfolio and digital product
management.
- Organize investments your way with configurable types and fiscal periods. - Map your strategy to objectives on road maps. - Prioritize work based on outcomes using our unique must-have ranking. - Empower your people with collaborative work and agile management.
This course provides a structured, hands-on introduction to the Reporting Workspace in Clarity, enabling you to create, manage, and analyze data-driven reports with confidence.
Modern organizations rely on clear, accurate, and accessible reports to make informed decisions. In this course, you'll learn how Clarity's reporting capabilities bring together project, financial, and resource data into meaningful insights that support effective decision-making at all levels.
Personas in Focus
This course is designed for two key personas:
- Report Designer - A power user or PMO analyst who builds reports in the Report Designer.
You will learn how to connect data providers, configure attributes and metrics, and create visually engaging dashboards tailored to business needs.
- Report Consumer - A manager, project sponsor, or executive who consumes reports in
the Reports tile. You will learn how to view, filter, schedule, and export reports for day-to-day decision-making. This course is targeted towards Clarity 16.3.3 and higher releases.
This course will help you understand how you can use Clarity to manage projects within time and budget. The material in this course is based on project management functionality in Clarity 16.2.1.
Course Content:
- Introduction - Project Blueprints and Templates - Creating Projects - Tasks - Scheduling - Assignments - Staffing - Baselines - Risks/Issues/Changes - Financial Plans - Status Report
Clarity: Financial Management provides comprehensive training on leveraging Clarity's robust capabilities to streamline financial operations and enhance organizational efficiency. This course is designed for Business Analysts, Financial Managers, Project Managers, and System Administrators. This course covers essential topics, from setting up financial data and processing to automating financial management tasks.
Welcome to the Cooking with Clarity series. Our experts, Kurt Steinle and Brian Nathanson will walk you through how to maximize your investment in Clarity by effectively leveraging the Roadmaps, Hierarchies, and Collaborative Workflow Management capabilities. This is the third series of Cooking with Clarity sessions - Program Management Made Easy. Each session will have two phases. Kurt will present the finished dish in the first phase and walk us through it. Brian will show you how to recreate that dish in the second phase.


Course Name Clarity Cookbook: Roadmaps that Tell a Story
Clarity 16.2.x: Staffing Investments
Clarity: Administering and Using Timesheets
Clarity 16.x: Ad Hoc Views, Reports, and Dashboards
Clarity 16.2.x: Advanced Reporting Administration

Course Description
Clarity Cookbooks help to break down the complexity of the Clarity product by showing a detailed demonstration of a best practice implementation of key features in Clarity, followed by detailed configuration steps to accomplish the same implementation yourself. Our inaugural Cookbook, Roadmaps That Tell a Story, shows you how to configure effective Clarity Roadmaps using all of the valuable visual and technical capabilities available. This Cookbook provides the definitive recipe for roadmap success broken into four courses:
1. Add Meaning to Your Story: Swimlanes, Colors, and Metrics
2. Provide Context to Your Story: Dependencies, Events, and Visual Widgets
3. Show how Your Story Depends on Others: Agreements
4. Add Sizzle to the Steak: Using Visual Widgets for Constraint-Based Planning
Resource Managers are key personas who leverage Clarity to find the right people for suitable investments in their organizations. It seems like a straightforward task. All they need are the skills required, the number of people needed, and how long they need to be engaged in specific investments. This should be an easy job. However, most resource managers must combine information from multiple sources to make staffing decisions. Employee and contractor details are often stored in different systems. The investment data is spread across a myriad of spreadsheets, and future roadmaps are available over dozens of executive presentations. Suddenly, aligning resources to investments that align with an organization's future roadmap seems more like art than science.
Efficient timesheet management is critical for tracking time, ensuring compliance, and optimizing project outcomes. This interactive course is designed to equip learners with the knowledge and skills needed to manage timesheets effectively using Clarity, Classic PPM, and the Clarity Mobile App. This course goes into detail about how to interact with timesheets in the following roles:
- End user - Project Manager - Clarity Administrator
The course uses an end-to-end timesheet implementation scenario and interactive simulations to teach the concepts that Clarity users need to know.
This course will help you learn about Clarity Advanced Reporting with Jaspersoft, reporting best practices, and the Jaspersoft Community. Advanced Reporting with Jaspersoft allows you to create ad-hoc views of Clarity data. You can save the information as a report, display a dashboard, or share it using different formats. Course Content:
1. Classic PPM Advanced Reporting Components
2. Create and Configure Ad Hoc Views
3. Generate Reports
4. Create Dashboards
This course will help you learn about Clarity Advanced Reporting Administration with Jaspersoft, focusing on empowering users by assigning them appropriate Advanced Reporting access rights tailored to their business reporting requirements. It delves into the intricacies of setting up and managing the Advanced Reporting features, including exploring PMO Advanced Reporting security groups, to ensure a comprehensive understanding of the system's capabilities. Through expert instruction and videos, this course offers a deep dive into optimizing Clarity's reporting functionalities, enabling precise and efficient reporting solutions tailored to your organizational needs.


Course Name

Course Description

Clarity: Introduction to Process Management
Clarity: Introduction to OBS

Processes automate repetitive steps that you perform manually through the user interface. To reproduce real behavior, a process impersonates a user performing the steps. Each process defines its objects, steps, actions, groups of steps, and joins. A process includes a series of steps that end with a specific result. All processes have a start and a finish step. Each step can perform one or more actions. Processes use preconditions and postconditions to connect their steps.
This course introduces the basic concepts of Process Management and helps you understand how to implement it in your organization. The Process Manager module works with other modules to help automate the management of the entire lifecycle of a workflow. This combination provides for unified, cohesive work management, from initiation to selection to implementation. This makes it easier to optimize and standardize processes across the entire organization, resulting in processes that are more automated, cohesive, collaborative, and reusable.
This course introduces the concept of Organizational Breakdown Structure (OBS) and helps you understand how to implement it in your organization. The Organizational Breakdown Structure (OBS) defines your organization's hierarchy through distinct levels and units, where each level represents key elements such as locations, departments, or teams.
OBS can be linked to one or more objects and their instances attached across different units. Access rights are defined to ensure resources can access the relevant object instances. This makes it easier to track progress and monitor resource allocation across different objects and their instances, ultimately enhancing organizational efficiency.

Enablement Videos You can access the Clarity videos on YouTube to leverage all the free enablement videos created for Clarity.

## Clarity Support and Services
- Online Community - Blogs - Webcasts, Success Stories, White Papers, Demos, and More - Social Media - Support Information Broadcom Support and Broadcom Service partners are available when you cannot locate answers in online documentation or other media. The Classic PPM Community, social media channels, blogs, webcasts, customer success stories, and other content are available to help you.
You can open a support case after searching for answers in the documentation, KB articles, and Classic PPM online community. Contact Broadcom Support
Online Community The Clarity Community is the place to share ideas, tips, information, insights, and more with your business peers and Broadcom Technologies experts. The community provides a unique opportunity to network and help you maximize your software investment by tapping into a community of expertise, open 24/7.
Do You Have New Product Ideas? Use the Broadcom ideation process to submit an idea or an enhancement request. The ideation panel discusses all the ideas or enhancement requests on a monthly cadence. The Clarity Idea Site is available only to the organization's voting representative. Submit the Clarity Customer Innovation Panel Form to nominate your voting representative.
Blogs Broadcom Blogs are published regularly to keep you up-to-date and informed about industry trends.
Webcasts, Success Stories, White Papers, Demos, and More Clarity product information is available, including webcasts, success stories, white papers, demos, analyst reports, and more to help you learn how Clarity can help you drive business transformation and operational excellence to accelerate innovation.
Social Media
Twitter (@CAPPM)
Follow @CAPPM on Twitter for updates, insights, and water-cooler conversations.
LinkedIn Write yourself into the family tree of IT innovation. Connect with the Classic PPM community and experts on these Classic PPM -related LinkedIn groups:
- Clarity - Technical & Functional - Classic PPM Unofficial Fanclub - Classic PPM Consultants - Classic PPM OnDemand - Classic PPM User Society


Facebook More than just friends, we're here to keep you updated and engaged with the Classic PPM community. Like us today!

Support Information

Knowledge Base (KB) Articles
Updated Clarity KB Articles are available to help you identify workarounds to popular issues with your implementation.
NOTE For tips on how to search for known Broadcom articles, community posts, and documentation, refer to KB 249645.

End-of-Service and End-of-Life Support Lifecycle Dates
Release and Support Lifecycle Dates (Broadcom Support account required): Find release and support lifecycle dates, including end-of-service (EOS) and end-of-life (EOL) for each release.

Download Software
When appropriate, users can download additional software from inside Classic PPM and administrators can download software for your Broadcom product from our Download Center.

## Usage Data (Telemetry)
- What Data We Collect - How Licensed Metrics Are Calculated - How To Report Data Usage Automatically - How to Report Usage Data Manually
You can configure your product to collect and send telemetry data -- product usage and system configuration data -- to Broadcom. Use the information on this page to learn how to send usage data to Broadcom.
If you are licensed to use this product under a Portfolio License Agreement (PLA) subscription, you must configure it to collect and send product-specific usage data.
Some of the key information you need to know is:

What Data We Collect
The usage data information is securely transmitted to Broadcom. The data includes the number of devices that are being monitored. No Personally Identifiable Information (PII) covered under GDPR is transmitted. The following table describes some of the usage data that your product may send to Broadcom.

Data Transmitted by Telemetry Table Data Transmitted by Telemetry Job Classic PPM sends the following data to Broadcom as a part of the Telemetry capability:

site id

Name

instance_id

product_sku sku_description SaaS environment product version

Description

Source

Specifies your organization's site ID that is listed on the Broadcom Support portal. Maps to the value of Site ID field in the Subscription Compliance Setup section.
Specifies the type of installation instance such as Development, Training, Business Unit, etc.

Provided by customer Provided by customer

Maps to the value of Instance field in the Subscription Compliance Setup section.

Specifies the Stock Keeping Unit (SKU) of Generated by Clarity Clarity

Specifies the description of the SKU of Clarity

Generated by Clarity

Specifies if you are using a SaaS or an On- Generated by Clarity Premise version of Clarity

Specifies the version number of Clarity implemented in your organization
Maps to the value of Product Version field in the Subscription Compliance Setup section

Generated by Clarity


pla_enabled

Name

date_collected monthly_usage
chargeback_id

domain_name

Description

Source

Specifies if your organization has opted

Provided by customer

to participate in the Subscription Portfolio

License Agreement

Maps to the value of PLA Customer field in

the Subscription Compliance Setup section

Specifies the date on which telemetry data Generated by Clarity is sent to Broadcom

Specifies the count of active users in Clarity Generated by Clarity who have Full Function access, Restricted Function access, View Function access

Specifies the name or chargeback ID of a department associated with paying for Clarity usage in your enterprise
Maps to the value of Charge Identifier field in the Subscription Compliance Setup section

Provided by customer

Specifies the Primary App Service HTTP/ HTTPs URL used to access Clarity
Maps to the value of Domain field in the Subscription Compliance Setup section

Generated by Clarity

NOTE
Classic PPM considers a Creator license and a Demo license as a Full license, Participant license as a Restricted license, and the Viewer license as a View Only license while reporting Telemetry data.

How Licensed Metrics Are Calculated
This product is licensed by the number of licenses (Full, Restricted, and View Only licenses) consumed by your organization. To learn more about these license types, see View User Counts by License Type.
NOTE
Classic PPM considers a Creator license and a Demo license as a Full license, Participant license as a Restricted license, and the Viewer license as a View Only license while reporting Telemetry data.

How To Report Data Usage Automatically Follow these steps:
1. Log into Classic PPM as an administrator. 2. Click Administration, General Settings, System Options. 3. In the Subscription Compliance Section, complete the following fields:
- Site ID: (Mandatory) Specifies the enterprise ID that you use to access the Broadcom Support website. The Site ID field is entered once. This field gets locked after populating it. You can use the following syntax to update the value of Site ID:
admin system-options -add TEL_SITE_ID <NEW SITE ID> -force
- Production Environment: Specifies if you are configuring a production instance of Clarity. Select "Yes" for a Production Environment and "No" for other environments. Default: No


The Production Environment field is entered once, only when the value is set to "Yes". This field gets locked after populating it. You can change the Production Environment field from "No" to "Yes". But, you cannot change this field from "Yes" to "No". You can use the following syntax to update the value of Production Environment:
admin system-options -add TEL_IS_PROD_ENV no -force
IMPORTANT These admin commands should be used only if there is a change in site ID. - PLA Customer: Specifies if your organization has opted to participate in the Subscription Portfolio License Agreement. - Charge Identifier: Specifies the name or chargeback ID of a department associated with paying for Clarity usage in your enterprise. - Instance: Specifies the type of installation instance such as Product Development, Enterprise Sales Training, or Product Marketing. - Product Version: (Auto-populated based on the product version installed) Specifies the version number of the product. - Domain Name: (Auto-populated) Specifies the Primary App Service HTTP/HTTPs URL. This information is extracted from the Clarity System Administrator (CSA) application URL field. - Error Notification Email: Specifies the email addresses of users who need to be notified if Clarity is unable to send Telemetry data to Broadcom. Clarity sends telemetry data to Broadcom on a scheduled basis. If Clarity is unable to send Telemetry data, the users listed here will receive an email. You can specify multiple email addresses by using a comma to separate them. - SaaS Environment: (Auto-populated) Specifies if the environment is SaaS or On-Premise. This field is set to "No" if you are using On-Premise Clarity. NOTICE Sending the Product SKU Information:
- If the environment is On-Premise, then Clarity telemetry information sends the same Product SKU to Broadcom.
- If the environment is SaaS and the Serial Number is populated, then the Product SKU is not populated. So, Clarity telemetry information sends the payload based on the serial numbers.
- If the environment is SaaS and the Serial Number is not populated, then the Product SKU is populated. Clarity telemetry information sends the following Product SKU information: a. Clarity SAAS VIEW ONLY USER (1000 Pack) b. Clarity SAAS Restricted User c. Clarity SAAS Full Function User ATTENTION The Clarity URL should be of the domains "broadcom.com", "ca.com" or "moventus.com".
- Use Proxy: Specifies the proxy server settings that can be used to send telemetry data to Broadcom. Clarity OnPremise customers who have not connected their application servers to the internet can use the proxy server to send telemetry data to Broadcom. - Proxy URL: Specifies the URL of the proxy server. - Username: Specifies the username to access the proxy server. - Password: Specifies the password to access the proxy server.
4. Save your changes. NOTE To learn about the license count information for Clarity based on license type review View User Counts by License Type.

IMPORTANT - You can review and export the Telemetry data Clarity sends Broadcom by accessing the Telemetry Data
Export portlet on the License Information page. - Clarity will only send Telemetry data to Broadcom when you use the Production Environment field to
specify that you are configuring a production instance of the product.

How to Report Usage Data Manually You can use the Telemetry Data Export Portlet to manually export Telemetry data. The Telemetry Data Export Portlet provides the following values:

Name Collection Date Site ID Product Version Product SKU Monthly Usage
PLA Enabled
Instance ID
Domain ID Chargeback ID
SKU Description Serial Number

Description

Source

Specifies the date on which telemetry data Generated by Clarity is collected

Specifies your organization's site ID that is As configured under system options by

listed on the Broadcom Support portal

customers

Specifies the version number of Clarity implemented in your organization

Generated by Clarity

Specifies the Stock Keeping Unit (SKU) of Generated by Clarity Clarity

Specifies the count of active users in Clarity Generated by Clarity who have Full Function access, Restricted Function access, View Function access

Specifies if your organization has opted to participate in the Subscription Portfolio License Agreement

As configured under system options by customers

Specifies the type of installation instance such as Development, Training, Business Unit, etc.

Generated by Clarity

Specifies the Primary App Service HTTP/ Generated by Clarity HTTPs URL used to access Clarity

Specifies the name or chargeback ID of a department associated with paying for Clarity usage in your enterprise

As configured under system options by customers

Specifies the description of the SKU of Clarity

Generated by Clarity

Specifies the customer's active contract number along with the line number for the specific license SKU for Broadcom SaaS customers

Generated by Clarity

Follow these steps:
1. Click Administration, Organization and Access, License Information. The license information page appears. 2. Review the information in the portlet. 3. Click Options and use the export options to export the data in this portlet.


NOTE The Telemetry Data Export portlet is not configurable.

## Documentation Legal Notice

This Documentation, which includes embedded help systems and electronically distributed materials, (hereinafter referred to as the "Documentation") is for your informational purposes only and is subject to change or withdrawal by Broadcom at any time. This Documentation is proprietary information of Broadcom and may not be copied, transferred, reproduced, disclosed, modified or duplicated, in whole or in part, without the prior written consent of Broadcom. If you are a licensed user of the software product(s) addressed in the Documentation, you may print or otherwise make available a reasonable number of copies of the Documentation for internal use by you and your employees in connection with that software, provided that all Broadcom copyright notices and legends are affixed to each reproduced copy. The right to print or otherwise make available copies of the Documentation is limited to the period during which the applicable license for such software remains in full force and effect. Should the license terminate for any reason, it is your responsibility to certify in writing to Broadcom that all copies and partial copies of the Documentation have been returned to Broadcom or destroyed. TO THE EXTENT PERMITTED BY APPLICABLE LAW, BROADCOM PROVIDES THIS DOCUMENTATION "AS IS" WITHOUT WARRANTY OF ANY KIND, INCLUDING WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT. IN NO EVENT WILL BROADCOM BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOSS OR DAMAGE, DIRECT OR INDIRECT, FROM THE USE OF THIS DOCUMENTATION, INCLUDING WITHOUT LIMITATION, LOST PROFITS, LOST INVESTMENT, BUSINESS INTERRUPTION, GOODWILL, OR LOST DATA, EVEN IF BROADCOM IS EXPRESSLY ADVISED IN ADVANCE OF THE POSSIBILITY OF SUCH LOSS OR DAMAGE. The use of any software product referenced in the Documentation is governed by the applicable license agreement and such license agreement is not modified in any way by the terms of this notice The manufacturer of this Documentation is Broadcom Inc. Provided with "Restricted Rights." Use, duplication or disclosure by the United States Government is subject to the restrictions set forth in FAR Sections 12.212, 52.227-14, and 52.227-19(c)(1) - (2) and DFARS Section 252.227-7014(b) (3), as applicable, or their successors. Copyright - 2005-2026 Broadcom. All Rights Reserved. The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries. All trademarks, trade names, service marks, and logos referenced herein belong to their respective companies.
