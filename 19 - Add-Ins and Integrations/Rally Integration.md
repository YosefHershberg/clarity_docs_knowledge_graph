﻿---
title: Integrate Clarity with Rally
tags:
  - admin
  - dev
aliases:
  - Rally Integration
---
# Integrate Clarity with Rally


If your organization uses Clarity to manage investments and their associated funding, and Rally for Agile development and execution, the Clarity-Rally integration helps bridge the informational gap between investment planning and execution.

**Integration benefits:**

- **Transparency:** Visibility of execution status, completed work, and remaining effort at the project or investment level
- **Efficiency:** Optimize flow of value, improve quality, align resources to business priorities, drive continuous improvement
- **Scope management:** Better manage scope of projects based on data from both systems
- **Delivery Tracking:** Assess whether a project will complete on time or is at risk of spillover

**What you can do with the integration:**

- Align a Rally initiative with a Clarity project
- Associate multiple Rally investments and initiatives with a single Clarity project
- Fund and track execution across multiple Rally teams
- Get work details such as features and user stories from Rally to Clarity
- Synchronize data bi-directionally to monitor execution activities in either system
- Track actuals within Clarity against Rally features and user stories

## Integration Scenario


A product development organization uses Clarity for funding and monitoring investments, and Rally for Agile development and execution. After the integration is configured:

1. Business units define a Clarity Project for each initiative they plan to fund
2. Once funding is approved, the Project Manager associates the project with the Rally integration process
3. The Project Manager triggers the synchronization job in Clarity to create a corresponding initiative in Rally
4. The Project Manager notifies the Product Manager about the new initiative in Rally
5. The Product Manager creates features under the initiative and assigns teams in Rally
6. When the synchronization job runs, features and user stories under the Rally initiative are brought over to Clarity as tasks

> [!NOTE]
> The integration can also be configured for bidirectional synchronization, allowing teams to create features in either system and synchronize work items across the two systems.

## Plan for the Integration


### Determine the Integration Type


The integration type determines whether you want to associate a Clarity project to portfolio items or investments in Rally.

**Portfolio Item Integration:**

- Link a single Clarity project to a single parent portfolio item (such as an initiative) in Rally
- Auto-populate corresponding child portfolio items (such as features) from Rally as tasks in Clarity
- Auto-populate the execution status of the corresponding Rally features to Clarity
- Monitor only two levels of portfolio items (e.g., an initiative and its corresponding features)

> [!NOTE]
> Determine the parent portfolio item (such as initiative or epic) you want to associate with the Clarity project. Tasks can only be associated with the lowest level portfolio item (such as feature).

**Investment Integration:**

- Link a Clarity project to multiple Rally investments
- Investments can include features from multiple initiatives or any other parent portfolio item (epic, etc.)
- Auto-populate features from multiple initiatives as tasks in Clarity
- Monitor multiple initiatives and multiple levels of portfolio items from Clarity

> [!NOTE]
> You can configure both types of integrations for the same Rally workspace; however, a Clarity project can only be associated with one integration type. With either type, user stories associated with features can also be auto-populated as subtasks in Clarity.

### Determine the Integration Direction


The integration direction applies only to the **Portfolio Item** integration type. For Investment integration, the direction is always from Rally to Clarity.

**Supported directions for Portfolio Item integration:**

- **Rally to Clarity:** Clarity projects are created as initiatives in Rally; features under the initiatives are created as tasks under the linked Clarity projects; status information is imported from Rally portfolio items into Clarity
- **Clarity to Rally:** Clarity projects are created as initiatives in Rally; selected tasks under linked Clarity projects are created as corresponding features under the Rally initiatives
- **Bidirectional:** Both directions above are combined — portfolio items flow both ways between Clarity and Rally

> [!NOTE]
> Irrespective of the direction, the first level (e.g., initiative) is always pushed from Clarity to Rally. User stories are always pulled from Rally to Clarity.

## Prepare for the Integration


Before configuring the integration, gather the following connection information from Rally:

| Integration Type | Required Information |
|---|---|
| Portfolio Item | API Key, Workspace ID, Project ID, Owner ID |
| Investment | API Key, Workspace ID, Portfolio Item Type Ordinals |

### Create a Rally API Key


The Clarity-Rally integration supports **Basic** and **API Key** authentication. API key authentication is recommended for secure access.

**Steps:**

1. Log in to Rally (e.g., https://rally1.rallydev.com/) as an Administrator
2. Navigate to: https://rally1.rallydev.com/login/accounts/index.html#/keys
3. Click **Create New API Key**
4. Enter a **Description**
5. Select the **Full Access** checkbox and click **Create**
6. Note down the API Key that was created

### Get the Rally Workspace ID


**Steps:**

1. Log in to the Rally workspace (e.g., rally1.rallydev.com)
2. Access the following URL: `https://rally1.rallydev.com/slm/webservice/v2.0/workspace`
3. A JSON response appears; note down the value of `_refObjectUUID` — this is the Workspace ID

**Sample JSON response (Workspace ID highlighted):**
```json
{
  "QueryResult": {
    "Results": [
      {
        "_ref": "https://rally1.rallydev.com/slm/webservice/v2.0/workspace/41529001",
        "_refObjectUUID": "3497d043-3ea7-4c8a-bf78-069847936c13",
        "_refObjectName": "Rally",
        "_type": "Workspace"
      }
    ]
  }
}
```

### Get the Project ID and Owner ID


Required for the **Portfolio Item** integration type only.

**Steps:**

1. Log in to Rally and switch to the workspace you want to associate with the integration
2. Access: `https://rally1.rallydev.com/slm/webservice/v2.0/workspace`
3. Click the URL in the `_ref` key to get workspace details
4. In the response, find `Owner` and note down the `_refObjectUUID` as the **Owner ID**
5. Find `Projects` in the same response and click its URL to get all projects in the workspace
6. Identify the desired project using `_refObjectName`
7. Note down the corresponding `_refObjectUUID` as the **Project ID**

### Get the Portfolio Item Type Ordinals


Required for the **Investment** integration type. The ordinals define position in the portfolio item hierarchy.

**Steps:**

1. Access the Rally webservice: https://rally1.rallydev.com/slm/doc/webservice
2. In the left pane, click **typeDefinition** under Object Model
3. Enter the following query in the Query String field:
   ```
   ((Parent.Name = "Portfolio Item") and (Creatable = true))
   ```
4. Select **Fetch full objects** and click **Query**
5. Copy the `Ordinal` values for each portfolio item type from the JSON response

> [!NOTE]
> The ordinal value starts with `0` for the lowest level portfolio item (such as Feature), and increments by 1 as you go up in the hierarchy.

## Configure the Integration


### Verify Prerequisites


1. **Install the Agile Add-in Content:**
   - Navigate to **Administration > Studio > Content Add-Ins** in Classic PPM
   - Search for **Agile Addin** and verify the **Status** field
   - If Status shows **Installed**, proceed to the next prerequisite
   - If Status shows **Upgrade Ready**, click the **Items** tab, filter for **Upgrade Ready** items, and install them

   > [!WARNING]
   > Do NOT install the **Project Properties - General** or **Project Agile Integration Settings** content items if you have custom configurations for these views. Installing them will permanently overwrite your customizations.

   > [!NOTE]
   > If you are a SaaS customer, create a support ticket to request the Agile add-in installation.

2. **Enable REST API:**
   - Navigate to **Administration > General Settings > System Options** in Classic PPM
   - Verify that the **REST API Status** option is set to **Enabled**

### Configure Integration Attributes


1. Click **Administration > General Settings > Integrations**
2. Click **New**
3. Complete the following fields:
   - **Integration Name and Integration ID** — provide a meaningful name; multiple integrations can be created with different settings
   - **Integration URL** — the Rally URL to integrate with
   - **Integration Instance** — the Rally workspace ID (from the Get the Rally Workspace ID section)
   - **Referrer URL** — the identity provider URL for the timesheet integration with Rally (only if different from the Integration URL)
   - **Authentication Type:**
     - **Basic** — for legacy integrations (not recommended for Rally SaaS)
     - **API Key** — recommended for Rally On Demand; provide the Rally API Key

4. (Optional) To connect via a **proxy server** (on-premise only):
   - **Proxy Server** — full URL starting with http or https
   - **Proxy Port**
   - **Proxy User Name** and **Proxy Password** (for authenticated proxy)
   - After defining proxy server information, restart the Clarity app and bg services

5. Click **Save** (the Agile Central tab appears)
6. Click the **Agile Central** tab and select the **Integration Type** (Portfolio Item or Investment)
7. Configure **Task Create Defaults:**
   - **Task Open for Time Entry** — specifies that tasks created in Clarity are open for time entry
   - **Task Cost Type** — default cost type value used when a task is created
   - **Task Charge Code** — default charge code value used when a task is created

   > [!NOTE]
   > When a parent Clarity task has actuals, assignments, or both, the integration cannot add a child task under this parent. Instead, the integration adds the child task without a parent. This complies with the rule that summary tasks in Clarity cannot have actuals or assignments.

8. Click **Save**

### Define the Portfolio Item Hierarchy (Investment-Level Integrations Only)


On the **Portfolio Item Hierarchy** tab, specify the portfolio items and their hierarchy levels (ordinals) to associate with Rally investments.

**Steps:**

1. Click **New** to create a row for each level in the portfolio item hierarchy
2. Enter the portfolio item type name exactly as it appears in the Rally workspace (e.g., epic, initiative, feature)
3. Enter the portfolio item type ordinal
4. (Optional) Select **Create and Sync Portfolio Items** to bring the portfolio item level to Clarity as a task when the synchronization job runs
5. Proceed to define an Agile Integration Owner

### Define the Integration Policy (Portfolio Item Integrations Only)


On the **Integration Policy** tab, configure the following:

1. **Portfolio Item Type Map (Project)** — the portfolio item type to map to Clarity projects (e.g., initiative); can be any level except the lowest
2. **Portfolio Item Type Map (Task)** — the portfolio item type to map to Clarity tasks (e.g., feature); must be at the lowest level

   > [!WARNING]
   > Do not change the Portfolio Item Type Map values after the initial synchronization. Changing either value can break the connection with Rally.

3. **Create and Sync Tasks** — specifies whether to synchronize Clarity tasks with Rally portfolio items
4. **Create Direction** — select the integration direction (Rally to Clarity, Clarity to Rally, or Bidirectional)
5. **Create and Sync Team** — specifies whether to synchronize the Clarity project team with users assigned to Rally portfolio items
6. **Team Open for Time Entry** — controls whether synchronized team members are open for time entry:
   - **Yes** — all resources added from Rally are open for time entry
   - **No** — all resources added from Rally are not open for time entry
   - **Select** — uses the Open attribute value on the Team Object
7. **Default Rally Owner ID** and **Default Rally Project ID** — fetched from Rally in the preparation steps
8. Click **Save**

### Import the Signed Certificate (On-Premise Only)


Applies only to on-premise Clarity integrations with Rally SaaS.

> [!NOTE]
> On-premise Rally integrations with Clarity are not supported. Clarity on-premise or SaaS integrations are only supported with Rally SaaS.

**Steps:**

1. If you obtain your signed certificate from a third-party vendor, import it to the Rally on-premise console
2. Import the same certificate into the JDK/JRE path for your Clarity environment:
   ```
   keytool -import -keystore cacerts -alias <adcert> -file <certificate.cer> -keyalg RSA -trustcacerts -storepass changeit
   ```
3. Restart services for both Rally and Clarity

> [!TIP]
> If the Synchronize Rally job fails with handshake SSL errors, verify both systems are using the same certificate. If the job fails due to an invalid workspace ID or configuration value, verify all integration property values and re-enter them.

### Define the Agile Integration Owner


Define a Clarity user as the **Agile Integration Owner** who can schedule and run the background sync jobs.

**Steps:**

1. In Classic PPM, click **Administration > Project Management > Settings**
2. Select a user as the **Agile Integration Owner** and save
3. Assign the following **global access rights** to the integration owner:
   - API - Access
   - Projects - Navigate
   - Resource - Navigate
   - Project - Edit Management (for specific projects or all projects)
4. For **investment type integrations**, also assign:
   - Agile Central Investment - Create
   - Agile Central Investment - Edit All
5. For **portfolio item type integrations**, also assign:
   - Portfolio Item Type - Create
   - Portfolio Item Type - Edit All
   - Portfolio Item Type - View All
   - Portfolio Item Type - XOG Access
6. As needed, also assign:
   - Resource - View
   - Resource - Hard Book

### Schedule Background Jobs


Set up the following jobs to run at scheduled intervals:

- **Create Agile Central Investments** — run this job to create investments in Rally using information from the Clarity project (for Rally investment integrations)
- **Synchronize Agile Central** — run this job to synchronize projects with Rally portfolio items and investments (for both integration types)

## Associate Clarity Projects with Rally and Synchronize Data


### Associate a Clarity Project with Rally Investments


**Steps:**

1. Click **Home > Portfolio Management > Projects**
2. Open the project you want to synchronize with Rally
3. Click **Properties > Settings**
4. In the **Agile Integration** section:
   - Select the **Synchronize** checkbox
   - (Optional) Select **Create and Sync Stories** to bring over user stories from Rally into Clarity for time tracking
   - In **Agile System**, select the Investment integration configured by your administrator
   - Select the **Integration Type** and click **Save**
5. Click **Properties > Agile Summary**; in the **Agile Central Investment** section, enter a name for the Rally investment in the **Create Agile Central Investment** field
6. Run the **Create Agile Central Investments** job; when successful, the investment is created in Rally with the project start and end dates
7. In Rally, associate the new investment to portfolio items
8. Click the **Actions** drop-down in the top-right corner and click **Synchronize Agile Central** to trigger the Synchronize job for the project

   > [!NOTE]
   > The new investment is stored as the Agile Central Investment master object in Classic PPM under **Home > Custom Objects > Agile Central Investments**. Do not edit this master object — the system of record for the data is Rally.

9. Navigate to the project and click **Tasks > Agile Summary** to verify the portfolio items from Rally appear as tasks

### Associate a Clarity Project with Rally Portfolio Items


**Steps:**

1. Click **Home > Portfolio Management > Projects**
2. Open the project you want to synchronize with Rally
3. Click **Properties > Settings**
4. In the **Agile Integration** section:
   - Select the **Synchronize** checkbox
   - (Optional) Select **Create and Sync Stories**
   - In **Agile System**, select the Portfolio Item integration configured by your administrator
   - In **Integration Type**, select **Portfolio Item**
5. For **Clarity to Rally** and **Bidirectional** directions: navigate to the **Tasks** tab, open each task's **Properties > Agile Summary**, and select the **Synchronize** checkbox

   > [!NOTE]
   > Selecting the Synchronize checkbox for the Rally to Clarity direction has no effect — the job does not create portfolio items in Rally from Clarity tasks.

6. Click **Synchronize Agile Central** from the Actions drop-down. The job synchronizes data as follows:
   - **First run:** An initiative is created in Rally and the ID is populated in Clarity
   - **Subsequent runs:**
     - Rally to Clarity: portfolio items linked to the initiative are brought over as tasks in Clarity
     - Clarity to Rally: tasks configured to synchronize are created as portfolio items in Rally
     - Bidirectional: portfolio items are synchronized from Clarity and Rally
7. Navigate to **Properties > Agile Summary** to review the initiative ID and synchronization details

### View Synchronized Data in Clarity


**Steps:**

1. Click **Home > Portfolio Management > Projects**
2. Open an integrated project and select **Properties > Agile Summary**
3. Review:
   - **Last Agile Sync Date** — when Rally portfolio items were last synchronized with the Clarity project
   - **Last Agile Sync Status** — status of the sync job (successful or failed)
4. Navigate to the **Tasks** tab and click **Properties > Agile Summary** to view synchronized data at the task level

### Task Date Synchronization Logic


Clarity task dates are populated based on Rally portfolio item dates using the following priority:

1. Rally **Actual Start and End** dates (highest priority)
2. Rally **Planned Start and End** dates (if actual dates are not defined)
3. **Project Start and Finish** dates (if neither actual nor planned Rally dates are defined)

If the Rally actual start date is later than the Clarity project finish date, the project dates are used instead.

**Date population examples:**

| Example | Rally Actual Start | Rally Actual End | Rally Planned Start | Rally Planned End | Project Start | Project Finish | Task Start | Task Finish |
|---|---|---|---|---|---|---|---|---|
| 1 | May 15 | Jun 28 | May 10 | Jun 25 | Mar 20 | Aug 5 | May 15 | Jun 28 |
| 2 | May 15 | Null | May 10 | Jun 25 | Mar 20 | Aug 5 | May 15 | Jun 25 |
| 3 | May 15 | Null | May 10 | Null | Mar 20 | Aug 5 | May 15 | Aug 5 |
| 4 | Oct 15 | Null | May 10 | Null | Mar 20 | Aug 5 | Mar 20 | Aug 5 |
| 5 | Null | Jun 28 | Null | Jun 25 | Mar 20 | Aug 5 | Mar 20 | Jun 28 |
| 6 | Null | Jun 28 | May 10 | Jun 25 | Mar 20 | Aug 5 | May 10 | Jun 28 |

### Synchronize Rally User Stories to Clarity Tasks


Select the **Create and Sync Stories** checkbox on the project Settings page to bring in user stories to Clarity as tasks. The following rules apply:

- User story dates are used as the task start and finish date
- If user stories have child stories, they are also brought into Clarity as tasks at the same level
- If the parent task has assignments, story tasks appear at the same level as the parent (not as subtasks)
- To synchronize user stories to tasks, map the lowest-level item in the Rally portfolio items hierarchy to a Clarity task

### Synchronize Teams in Portfolio Item Integrations


If you select **Create and Sync Team**, users assigned to initiatives, features, and all child components are brought over to Clarity when the Synchronize Agile Central job runs.

- If Rally users already exist as Clarity resources, they appear directly on the project team staff page
- If Rally users do not exist in Clarity, they appear on the **Missing Resources** portlet
- Users with the same first and last names but different email IDs are listed in the **Possible Matching Resources** column

> [!NOTE]
> The Missing Resources portlet does not appear by default on any application page. Configure the Overview: General page to add the Missing Resources portlet using the **Manage my Tabs** option.
>
> Once Rally resources are synchronized with the Clarity project team, they are not removed from Clarity, even if the corresponding resources are removed from Rally.
> Similarly, once Rally features are synchronized as Clarity tasks, they are not removed from Clarity even if the features are removed from Rally.

### Link a Clarity Project to an Existing Rally Portfolio Item


Update the project **Agile External ID** attribute with the Rally portfolio item object ID using XOG:

```xml
<CustomInformation>
  <ColumnValue name="agl_ext_id">39345976308</ColumnValue>
  <ColumnValue name="agl_id">I1</ColumnValue>
  <ColumnValue name="agl_system">rally1</ColumnValue>
  <ColumnValue name="agl_sync">true</ColumnValue>
</CustomInformation>
```

Where:
- `agl_ext_id` — the object ID of the Rally portfolio item
- `agl_id` — the Rally portfolio item ID (e.g., I1)
- `agl_system` — the ID for the Rally integration instance
- `agl_sync` — set to true to initiate synchronization

## Troubleshooting Common Agile Integration Issues


**Problem: Unsuccessful integration**

Possible causes:
- Rally connection information is incorrectly defined in **Administration > General Settings > Integrations**
- Agile Integration Owner is not set up as a dedicated resource
- REST API Status is disabled (verify in **Administration > General Settings > System Options**)
- The Rally server is down

**Solution:** Enter correct values and run the Synchronize Agile Central job again. Review the project integration status.

**Problem: Linked portfolio item (e.g., initiative) was deleted in Rally**

An error message appears when you run the Synchronize Agile Central job; the Synchronize checkbox gets unchecked and sync status indicates failure.

**Solution:** Relink the project to a new Rally portfolio item.

> [!NOTE]
> When a Rally feature is moved to a different initiative, the corresponding task in the Clarity project is not deleted but is no longer synchronized with Rally. A new task is created in the project corresponding to the new Rally initiative. The old task remains but never gets updated.

## Configure Integration Views


When you install the Agile add-in, some object views are reinstalled. If you previously configured the default product views in Classic PPM Studio, your configurations are not overwritten.

> [!NOTE]
> The agile fields listed for the integration, project, and task views are also available in Clarity. To view these fields on your project and task pages in Clarity, configure the applicable project blueprint details.

### Integration Object Views


| View | Integration Type | Page ID | Display Condition |
|---|---|---|---|
| Rally Integration Policy | Both | `agl_integration` | Integration Vendor = Rally |
| Integration Policy | Portfolio Item | `agl_pi_policy` | Integration Vendor = Rally AND Integration Type = Portfolio Item |
| Portfolio Item Hierarchy | Investment | `agl_port_item_type` | Integration Vendor = Rally AND Integration Type = Investment |

### Project Views


| View | Integration Type | Page ID | Display Condition |
|---|---|---|---|
| Agile Integration Settings | Both | `project_agl_integration_settings` | N/A |
| Agile Summary - Portfolio Item | Portfolio Item | `agl_integration` | Project Integration Type <> investment |
| Agile Summary - Investment | Investment | `agl_inv_integration` | Project Integration Type = investment |
| Properties - General | Both | `projectGeneral` | Configure to include the Synchronize Agile Central action in the Actions menu |

**Project Agile Integration Settings fields:**

| Section | Field |
|---|---|
| Agile Integration | Synchronize, Create and Sync Stories, Agile System, Integration Type |

**Project Agile Summary — Portfolio Item fields:**

| Section | Field | System of Record |
|---|---|---|
| General | Portfolio Item ID, Agile State, Agile Preliminary Estimate | Rally |
| Planning | Agile Investment Category, Agile Value Score, Agile Risk Score, WSJF Score | Rally |
| Schedule | Agile Planned Start, Agile Planned Finish, Agile Release, Agile Actual Start, Agile Actual Finish, Agile Milestones | Rally |
| Story Metrics | Estimated Story Points, Accepted Story Points, % Done by Agile Plan Estimate, Estimated/Accepted User Stories, % Done by Story Count | Rally |
| Sync Job Information | Last Agile Sync Date, Last Agile Sync Status | Clarity |

### Task Views


| View | Integration Type | Page ID | Display Condition |
|---|---|---|---|
| Task Agile Summary | Portfolio Item | `agl_integration` | Task Ordinal = null and Task Story ID = null |
| Task Agile Summary | Investment | `agl_inv_integration` | Task Ordinal > 0 and Task Story ID = null |
| Task Agile Summary | Investment (lowest) | `agl_inv_integrationLowest` | Task Ordinal = 0 and Task Story ID = null |
| Task Agile Summary (Story) | Both | `agl_integrationStory` | Task Story ID IS NOT null |

## Clarity and Rally Attribute Mapping


### Project-Level Attribute Mapping


| Rally Attribute (Initiative) | Classic PPM Project Attribute | Notes |
|---|---|---|
| State | Agile State | |
| Preliminary Estimate | Agile Preliminary Estimate | |
| % Done By Plan Estimate | % Done By Agile Plan Estimate | |
| % Done By Story Count | % Done By Story Count | |
| Investment Category | Agile Investment Category | Budget or investment area; one per portfolio item |
| Value Score | Agile Value Score | |
| Risk Score | Agile Risk Score | |
| WSJF Score | WSJF Score (SAFe scoring attribute) | |
| Actual Start Date | Agile Actual Start | |
| Actual End Date | Agile Actual Finish | |
| Release | Agile Release | Timebox for work delivery; available only to feature portfolio items |
| Milestones | Agile Milestones | Target dates for important business events; available to all portfolio items; multiple allowed |
| Total Story Points | Estimated Story Points | Dynamically calculated by Rally based on user story status |
| Accepted Leaf Story Points | Accepted Story Points | Dynamically calculated by Rally |
| Total User Stories | Estimated User Stories | Dynamically calculated by Rally |
| Accepted Leaf Story Estimate | Accepted User Stories | Dynamically calculated by Rally |

### Task-Level Attribute Mapping


| Rally Attribute (Feature) | Classic PPM Task Attribute | User Story/Feature/Both | Notes |
|---|---|---|---|
| Name | Task Name | Both | |
| ID (feature) | Feature ID | Both | |
| ID (story) | Story ID | Story | |
| ID (story) | Parent Story ID | Story | |
| State | Agile State | Both | |
| Status | Agile Status | Story | Ready (green), Blocked (red), or None (grey) |
| Preliminary Estimate | Agile Preliminary Estimate | Feature | |
| Plan Est | Agile Plan Estimate | Story | |
| Investment Category | Agile Investment Category | Feature | One per portfolio item; available to all portfolio items |
| Risk Score | Agile Risk Score | Feature | |
| Value Score | Agile Value Score | Feature | |
| WSJF Score | WSJF Score (SAFe scoring attribute) | Feature | |
| Planned Start Date | Agile Planned Start | Feature | |
| Planned End Date | Agile Planned Finish | Feature | |
| Milestones | Agile Milestones | Both | Multiple milestones allowed per portfolio item |
| Release | Agile Release | Both | Available only to feature portfolio items |
| Iteration | Agile Iteration | Story | Single, complete development time box (usually 2–4 weeks) |
| Actual Start Date | Agile Actual Start | Feature | |
| Actual End Date | Agile Actual Finish | Feature | |
| Total Story Points | Estimated Story Points | Both | Dynamically calculated by Rally |
| Accepted Leaf Story Points | Accepted Story Points | Feature | Dynamically calculated by Rally |
| % Done by Plan Estimate | % Done by Agile Plan Estimate | Feature | |
| Total User Stories | Estimated User Stories | Feature | |
| Accepted Leaf Story Estimate | Accepted User Stories | Feature | |
| % Done by Story Count | % Done by Story Count | Feature | |

## Rally Dashboards and Portlets


### Product Roadmap Dashboard


Use the **Product Roadmap Dashboard** to get visibility into agile product roadmaps. Portlets display data for projects with the Portfolio Item integration type in Classic PPM 15.5.1 or newer.

To access: **Home > Dashboards > Product Roadmap**

**Included portlets:**

- **Agile Product Roadmap** — lists linked agile products and their investments in a hierarchy; includes metrics (user stories, story points, % done); supports drill-down from product to investments to tasks
- **Agile Product Roadmap by Milestone** — lists linked agile products grouped by milestone; supports drill-down from product to milestone to tasks
- **Agile Product Roadmap by Release** — lists linked agile products grouped by release; supports drill-down from product to release to tasks

**All three portlets include:**

| Field | Description |
|---|---|
| Product Hierarchy | Name of the product, program, project/milestone/release, or task. Click to open properties. |
| Start / Finish | Start and finish dates in Classic PPM |
| Agile Release | Release associated with the task (from Synchronization job) |
| Agile Value Score / Risk Score | Value and risk scores populated by the Synchronization job |
| Estimated / Accepted User Stories | Number of user stories; sums up from projects in the investment hierarchy at higher levels |
| % Done by Story Count | Percentage of accepted user stories vs. total estimated |
| Estimated / Accepted Story Points | Story points; sums up from projects in the investment hierarchy at higher levels |
| % Done by Agile Plan Estimate | Total accepted story points / Total estimated story points |
| Roadmap | Gantt chart: Red (<25%), Yellow (25–75%), Green (>75%), White (undefined) |

### Agile Project Status Dashboard


Use the **Agile Project Status Dashboard** to view the overall picture and performance summary of a Classic PPM project integrated with Rally. Displays data for both integration types in Clarity 15.5.1 or higher.

To access: Open a project, click **Properties > Settings**, select **Agile Project Status** from the Dashboard View drop-down, then click **Dashboard**.

**Included portlets:**

| Portlet | Description |
|---|---|
| Overview | Total estimated story points, total accepted story points, and % done by agile plan estimate for features in the project |
| Accepted Features | Bar graph showing completed story points vs. total story points; also shows completed stories vs. total stories |
| Feature Status | List of all features with: Feature, Progress bar, Agile State, Agile Planned Start/Finish, Agile Release, Agile Milestones, Estimated/Accepted Story Points, % Done By Agile Plan Estimate |
| Project Status | Budget, Planned Cost, Variance, Manager, Stage, Start, Finish, and trend arrows (Overall Status, Schedule, Scope, Cost and Effort) |
| Status Report List | Project status reports with date and indicators (Overall Status, Schedule, Scope, Cost and Effort stoplights) |

## Integrate Clarity Timesheets in Rally


Users can complete their timesheets directly inside Rally by adding the **Timesheet app**.

> [!NOTE]
> On-premise only: Enable HTTPS for your Clarity environment before proceeding. SaaS environments can optionally configure SSO for the timesheet integration.

### Complete the Prerequisites


1. Install the Agile add-in and configure the integration with Rally
2. Click **Administration > General Settings > System Options**
3. In the **New User Experience** section, select:
   - **Activate New User Experience**
   - **Activate Timesheets**
4. For each resource, grant the **Timesheet - Navigate** access right and configure:
   - Select the **Active** checkbox
   - Set **Track Mode** to **PPM**
   - Select **Open for Time Entry**
5. For each project, configure each resource on the **Team** tab:
   - Set **Track Mode** to **PPM**
   - Select **Open for Time Entry**

> [!NOTE]
> Users (resources) can complete only their own timesheets. They cannot search, fill, or approve timesheets for other resources.

### (SaaS Option) Configure SSO for Timesheet Integration with Rally


SSO allows users to access either application without logging in a second time. For SaaS environments, use the custom URL from your SSO team to configure:

**Steps:**

1. Click **Administration > General Settings > Integrations**
2. Open the existing integration record and verify the **Integration URL** field points to the Rally server (e.g., https://rally1.rallydev.com)
3. (SSO Only) In the **Referrer URL** field, enter the source URL from where the request is coming into PPM (e.g., your IdP URL)
4. Verify that Rally users are created in Clarity and have the required access rights

> [!WARNING]
> If you are using SSO to authenticate to Clarity, contact your SSO team for the custom URL they use to access Clarity in a SaaS environment.

### Add and Configure the Timesheet App in Rally


1. Access the Rally documentation and follow the steps for adding the Timesheet app
2. From the settings icon of the Timesheet app, select **Edit App Settings**
3. Configure the following settings:
   - **PPM Host Name** — In a non-SSO environment, enter the Clarity server URL; in an SSO environment, enter the first part of the URL that takes you to your IdP
   - **Port (HTTPS)** — In a non-SSO environment, enter the Clarity server port; in an SSO environment, enter the IdP port number
   - **PPM Host Relative Path (SSO Only)** — Enter `/pm/integration.html` (the relative path to the integration URL)

### Open Your Timesheet Inside Rally


1. Log in to Rally
2. Navigate to the **PPM Timesheet app**
3. In a non-SSO environment, enter your Clarity login credentials and click **Login**; in an SSO environment, you do not need to log in again
4. Create, fill in, and submit your timesheet directly from within Rally

## Related
- [[_MOC Integrations]]

%%Source: p4802-4853%%
