# People-Centric Planning

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[06 - Resource Management/_MOC Resources|Resource Management]]
- Related domains: [[12 - Administration/_MOC Administration|Administration]]
- Canonical notes:
- [[06 - Resource Management/People-Centric Planning]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Interactive Filtering on Widgets (#interactive-filtering-on-widgets)
- H2: Persistent Filter Panel State (#persistent-filter-panel-state)
- H2: Add Multiple Instances of the Same Attribute in Filters (#add-multiple-instances-of-the-same-attribute-in-filters)
- H2: Working with To Dos (#working-with-to-dos)
- H2: People-Centric Planning (#people-centric-planning)
- H3: Resource Directory (#resource-directory)
- H3: Relationship Explorer (#relationship-explorer)
- H2: Use Case: Optimizing Project Management with Resource Directory and Relationship Explorer (#use-case-optimizing-project-management-with-resource-directory-and-relationship-explorer)
- H3: Manager Type Enhancement (16.2.3) (#manager-type-enhancement-1623)
- H3: Configure Card Enhancement (16.2.3) (#configure-card-enhancement-1623)
- H2: Resource Directory (#resource-directory)
- H3: Resource Directory: Visualizing Organizational Dynamics through Resource Hierarchy Mapping (#resource-directory-visualizing-organizational-dynamics-through-resource-hierarchy-mapping)
- H3: Pre-Requisites (#pre-requisites)
- H3: Working with Resource Directory (#working-with-resource-directory)
- H3: Setup View Options for Resource Directory (#setup-view-options-for-resource-directory)
- H3: Working with Card Configurator (#working-with-card-configurator)
- H3: Selecting Hierarchy Layouts (#selecting-hierarchy-layouts)
- H2: Relationship Explorer (#relationship-explorer)
- H3: Relationship Explorer (Beta): Exploring Interconnections between Investment Managers and Resources (#relationship-explorer-beta-exploring-interconnections-between-investment-managers-and-resources)
- H3: Working with Relationship Explorer (#working-with-relationship-explorer)
- H3: Setup View Options for Relationship Explorer (#setup-view-options-for-relationship-explorer)

## Interactive Filtering on Widgets

Enhance your data analysis with the Interactive Filtering on Widgets feature, enabling detailed drill-down capabilities to explore data with deeper insight. Clicking on any widget dynamically updates the grid view to display data relevant to the selected widget element.

> [!NOTE]
> To learn more about Widgets, see Widgets.

## Persistent Filter Panel State

Previously, Clarity did not retain the open or closed state of the Filters panel, requiring users to reopen or close the panel each time they navigated back to a page. This led to additional clicks and disrupted the continuity of user experience.

## Add Multiple Instances of the Same Attribute in Filters

Previously, when users needed to filter on the same attribute with different conditions in Clarity, they were required to create multiple filter groups and replicate all other filter criteria within each group. This process was time-consuming and complicated, as it required duplicating attributes just to apply different conditions to the same attribute.

## Working with To Dos

Some key points you need to remember while using To Dos are:
- To Dos support the Navigate, Create, Edit, Delete, and View access rights.
- To Dos are implemented as a Studio Object but cannot be leveraged in Classic PPM.
- The Data Warehouse uses the new To-Dos tables.
- To Dos stock attributes are Name, ID, Owner, Due Date, and Completed.

---

## People-Centric Planning

Clarity's People-Centric Planning revolutionizes resource management by shifting the focus from merely funding work to fundamentally empowering people. This approach provides greater transparency into organizational operations, fosters better decision-making based on real context, and enables earlier identification of bottlenecks and risks. By aligning everyone toward common business goals, People-Centric Planning facilitates improved collaboration and drives stronger outcomes across projects.

The workspace dedicated to this initiative features two essential tools: the **Resource Directory** and the **Relationship Explorer**.

### Resource Directory

The Resource Directory offers a comprehensive, visual hierarchy of your organization, displaying up to three levels of relationships such as managers, peers, and direct reports. This intuitive interface enables managers and investment owners to view not only their immediate teams but also connections across the entire company. Each resource tile provides essential details, including name, department, number of direct reports, and active investments, helping to highlight potential stress points or underutilized capacity. The directory is interactive--users can filter by view options, adjust label visibility, and include inactive resources as needed, all while ensuring the displayed data remains relevant and actionable.

### Relationship Explorer

Complementing the Resource Directory, the Relationship Explorer extends resource visualization by mapping the intricate web of relationships between investment managers and their teams. This tool graphically displays how resources are shared across investments, enabling users to identify bottlenecks, pinpoint individuals who are over- or under-allocated, and rebalance workloads efficiently. With customizable filters, users can dive deeply into layers of resource connections, analyze allocation indicators, and focus on shared people between managers. Navigational aids, such as zoom and drag, help users explore complex organizational networks, while allocation metrics provide actionable insights for rebalancing and enhancing organizational agility.

## Use Case: Optimizing Project Management with Resource Directory and Relationship Explorer

In this use case, we follow Ian Arpel, an Investment Manager at a mid-sized tech firm, as he navigates Clarity's Resource Directory and Relationship Explorer. The goal is to optimize resource allocations within his projects to address potential overloads and underutilization.

1. **Logging into Clarity**: Ian enters his credentials on the Clarity login page and accesses the main dashboard, his gateway to the project management tools.
2. **Accessing the Resource Directory**: Ian clicks on the **Resource Directory** workspace from the navigation panel, which displays his organization's resource hierarchy in a visual format.
3. **Interpreting the Organizational Chart**: Ian's profile is highlighted in the center, with his manager Ray Fowler above and his reportees below. He hovers over each tile to see detailed metrics.
4. **Analyzing Resource Tiles**: Each tile reveals the number of direct reports and active investments. Ian notes these figures, particularly looking for high numbers that might indicate stress points.
5. **Using 'Show More' for Extensive Lists**: For resources with many reportees, Ian clicks **Show More** to ensure he's not missing any hidden allocations.
6. **Adjusting 'View Options'**: Ian modifies the **View Options** to adjust how names are displayed and what information is visible on each tile, ensuring clarity.
7. **Activating the 'Explore Relationships' Feature**: Ian selects this feature from his tile to transition to the Relationship Explorer, intent on delving deeper into resource relationships.
8. **Navigating the 'Relationship Explorer' Screen**: Ian encounters a network diagram on this screen that maps the relationships between resources and projects. He uses mouse actions to explore the diagram fully.
9. **Applying Relationship Explorer Filters**: Ian filters the view to show only **Shared People** and **Investment Managers**, streamlining the network to reflect his area of focus.
10. **Deciphering Resource Allocations**: He examines the allocation indicators on each resource tile within the explorer, which provides insights into whether resources are over- or under-allocated.
11. **Examining Connector Indicators**: Ian clicks on connector indicators showing shared resource counts between managers, offering insights into potential reallocation opportunities.
12. **Exploring Bubbles for Detailed Analysis**: By clicking on individual bubbles, Ian reviews detailed allocation information in modal windows that appear, giving him an in-depth understanding of each resource's commitments.
13. **Implementing Resource Reallocations**: With this information, Ian coordinates with other managers to discuss and implement changes to resource allocations, striving for a balanced workload distribution.

### Manager Type Enhancement (16.2.3)

Previously, as a logged-in user, you could view the resource hierarchy in the Resource Directory based only on the Resource Manager. With the Clarity 16.2.3 release, you can now view the resource hierarchy based on the **Booking Manager**, up to three levels. To support this enhancement, a new **Manager Type** section has been added under **View Options > Directory** tab. This section includes two options: **Resource** and **Booking**. The respective radio buttons allow you to switch between the Resource Manager view and the Booking Manager view.

### Configure Card Enhancement (16.2.3)

Previously, the resource cards (badges) displayed limited information such as name, department, and metrics (number of active investments, team investments, and direct reports). With the Clarity 16.2.3 release, you can now use drag-and-drop to configure attributes on the Resource card using the new **Configure Card** functionality.

## Resource Directory

This section contains the following topics:
- Resource Directory
- Pre-Requisites
- Working with Resource Directory
- Setup View Options for Resource Directory
- Selecting Hierarchy Layouts

### Resource Directory: Visualizing Organizational Dynamics through Resource Hierarchy Mapping

The Resource Directory offers a visual hierarchy of the organization's structure, displaying up to three levels of relationships, including managers, peers, and reportees.

**Key Features:**
- **Access Rights**: The **Resource - Directory - Navigate** is a global access right that allows users with this permission to access the new Resource Directory workspace.
- **Dynamic Hierarchy Visualization**: Users can view an interactive three-level hierarchy showcasing their manager, peers, and direct reports. The logged-in user's tile is distinctly highlighted for easy identification.
- **Resource Navigator**: An intuitive Resource Navigator displays the logged-in user's upward hierarchy and allows for scrolling through additional data if necessary.
- **Enhanced Interactivity**: Clicking on any user tile within the Resource Directory refreshes the display to show that user's specific hierarchy, including their manager, peers, and direct reports.
- **Customization Options**: View options include Name Format customization and the ability to change labels on badges to display attributes such as Lookups, Strings, and OBS from the Resource object.
- **Tile Badges**: Tiles display key metrics such as Name, Role, Number of Active Investments, and Direct Reports, providing at-a-glance information that reflects direct management rather than aggregated data.
- **Inactive People Filter**: This toggle allows users to include or exclude inactive resources from the display, with distinct visual indicators for active versus inactive personnel.
- **Search**: Using the search input box, you can search for a person by typing the Resource's First Name, Last Name, ID, or Email. Each key press generates a matched results dropdown list below the input box, displaying any resources that contain the typed characters. Activating any result clears the search input and centers the UI on the selected person, displaying their details, including Manager, Peers, and Reportees. Note that you can search for both active and inactive resources. Inactive resources will be displayed even when the Include Inactive People flag is disabled.
- **Action Menu Enhancements**: Each resource card features an action menu, accessible through hover or right-click, which includes the **Explore Relationships** option, linking directly to the Relationship Explorer.
- **Refresh Job**: The Refresh Resource Directory Job ensures the directory reflects the most current data, considering updates to Resource Manager or Booking Manager attributes. The job also includes functionality to report circular references w.r.t Resource Manager or Booking Manager. It will generate a report of any circular references detected, providing a downloadable link to a CSV file with the details. Ensure the refresh job completes successfully after enabling the feature. However, after a bulk update through XOG or API, the administrator must run this job manually to maintain accurate hierarchy data.

### Pre-Requisites
- You need to have the following access rights to access the Resource Directory workspace:
- **Resource - Directory - Navigate**: Allows you to access the Resource Directory workspace.
- A Feature Toggle controls the Resource Directory workspace and remains **Disabled** by default until it is enabled. Ensure that you have enabled Resource Directory and Relationship Explorer in the Feature Toggles workspace.

> [!IMPORTANT]
> Some of the key points to remember are:
> - Ensure that you do not have any cyclic references, such as mutual reporting, in the system (Clarity Database). If you have any, it prevents resource display, and a "No Resources" message is displayed until such references are resolved and the refresh job is executed. For example, if you have a reference where Ian Arpel reports to Ray Fowler and Ray Fowler reports to Ian Arpel, you must correct this cyclic reference data.
> - Ensure the Refresh Resource Directory job has completed at least once to display the respective resources in the Resource Directory.

### Working with Resource Directory

Follow these steps:

1. Log into Clarity.
2. From the main menu, click **Resource Directory**. The Resource Directory screen is displayed. On the Resource Directory screen:
- The **Resource Navigator** displays the resource list, including the logged-in user, their manager (Resource manager or booking manager), peers, and direct reports, showcasing the upward hierarchy.
- The highlighted tile on this screen represents the logged-in user, showing their manager, peers, and direct reports for clarity. For instance, if Ian Arpel logs in, his tile is highlighted accordingly.
- Clicking on any user tile updates the display to highlight that user, showing their manager, peers, and direct reports, enhancing user interaction and information accessibility.
- A row displays up to 10 tile badges; an 11th card labeled **Show More** reveals additional resources, facilitating easy navigation through extensive data.
- Resources without a set manager in the system are excluded from display to maintain clarity and relevance.
- Tile badges provide key details: Name, Department, and Metrics (number of active investments, teams managed, and direct reports). Note that if the data is not available/absent, then the respective metric will not be displayed, ensuring only relevant information is presented.
3. You can right-click on a required tile badge and select **Explore Relationships** to see the relationships between Investment Managers and their teams. For more information, see Working with Relationship Explorer.

### Setup View Options for Resource Directory

Follow these steps:

1. Log into Clarity.
2. Navigate to **Resource Directory** and click **View Options**.
3. In the **Directory** section:
- **Periods**: You can specify the time frame for data display by selecting periods, and then choosing between **Periods** or **Duration** from Type, and specifying the relevant Start Period and End Period time frames.
- **Manager type**: You can use the **Resource** and **Booking** options to switch between the Resource Manager hierarchy and the Booking Manager hierarchy.
- **Demand**: Adjust the **Allocation Indicator** on resource tiles based on **Allocations** or **Assignments**:
- Allocations show the percentage of a resource's allocation across various investments.
- Assignments indicate the total usage of a resource.
- **Include Inactive People**: The toggle is off by default, showing only active resources. Turning this toggle on displays inactive resources, managers, and peers.

> [!NOTE]
> On inactive resource tiles, the only available action is Explore Relationships. Inactive managers and resources will be visible in the Resource Navigator.
- **Show Labels**: You can toggle off or on the attribute labels on the resource cards.
- **Configure Card**: Click to add more fields and metrics to Resource Cards. A Card Configurator dialog appears, allowing you to customize your choice of attributes and Avatar types to be displayed on the Card. You can drag and drop resource fields or metrics into designated slots. This feature enables you to configure 6 metrics and 4 fields per resource card, ensuring a tailored view of critical resource information.

> [!NOTE]
> The avatar card has two slots: Fields and Metrics.
> - Numeric resource fields can be dragged to either the Field slot or the Metric slot.
> - Non-numeric resource fields can only be dragged to the Field slot.

### Working with Card Configurator

Follow these steps:

1. Log into Clarity.
2. Navigate to **Resource Directory** and click **View Options**.
3. Under the **Directory** tab, click **Configure Card**. The Card Configurator dialog is displayed.
   a. On the top-right side, you have options to select the avatar size.
   b. At the center, you have the preview of avatar card with designated slots for adding fields and metrics.
   c. From the left panel, you have the attribute list grouped under the **Count** and **Resource** sections.
- **Count**: Displays the existing counts: Direct Reports, Investments, Team Investments.
- **Resource**: Displays various resource fields like Active, Availability Rate, Department, etc.
4. On the top-right side, choose how the avatar will be displayed:
   a. **Large**: Centered avatar with options to show over/under allocations and person type.
   b. **Small**: Smaller avatar to make room for more fields or metrics.
   c. **None**: Hides the avatar entirely.
5. From the left pane, drag and drop Fields and Metrics to the designated slots on the avatar card. You can configure up to 6 metrics and 4 fields per resource card.
   a. **Fields**: Non-numeric resource fields.
   b. **Metrics**: Numeric resource fields (can also be added to the Field slot).
6. In the avatar card, adjust the Fields and Metrics as needed.
7. Once configured, click **Apply** to save the changes. The visual hierarchy will be refreshed to reflect the updated changes in the resource cards.

### Selecting Hierarchy Layouts

Clarity enables you to select from these five layouts: Horizontal, Vertical, Tree, Double-line, and Compact. Your selection will be saved as part of your saved view for each instance.

Follow these steps:

1. Log into Clarity.
2. Navigate to **Resource Directory** and click **View Options**.
3. Click **Layout**.
4. Select the relevant layout from the available options.

> [!IMPORTANT]
> Some of the key points to remember are:
> - After a bulk update through XOG or API, the administrator must manually run the Refresh Resource Directory job to maintain accurate hierarchy data.
> - The system utilizes the `ODF_HIERARCHIES` table to store resource hierarchies, with each hierarchy specified as 'resource' in the 'type' column and distinguished by 'odf_object_code', set to 'odf_sys_hierarchy' for resource hierarchies.
> - The presence of any cyclic references, such as mutual reporting, in the system (Clarity Database) prevents resource display. A "No Resources" message is displayed until such references are resolved and the refresh job is executed. For example, if you have a reference where Ian Arpel is reporting to Ray Fowler and Ray Fowler is reporting to Ian Arpel, you must correct this cyclic reference data and run the Refresh Resource Directory job for the respective resources displayed in the Resource Directory.
> - Resource metrics on tiles depend on available data; the absence of data results in blank metrics. For example, if the user does not have direct reportees, the Reportees metric will be blank.
> - A Feature Toggle controls the Resource Directory workspace and remains 'Disabled' by default until it is enabled.

## Relationship Explorer

This section contains the following topics:
- Relationship Explorer
- Working with Relationship Explorer
- Setup View Options for Relationship Explorer

### Relationship Explorer (Beta): Exploring Interconnections between Investment Managers and Resources

Complementing the Resource Directory is the Relationship Explorer, which extends the capabilities of the Resource Directory by providing an in-depth analysis of the relationships between Investment Managers and their teams. It highlights shared resources across investments, identifies potential bottlenecks, and offers insights for workload rebalancing. Users can navigate from the Resource Directory to explore these relationships further, with customizable filters and views for detailed analysis.

**Key Features:**
- **Visualization of Relationships**: This tool graphically maps out the connections between resources and investment managers, highlighting shared resources to understand project interdependencies better.
- **Relationship Explorer Filters**: Users can apply specific criteria through filters to refine the display of relationships, making it easier to focus on particular areas of interest or concern.
- **Customizable View Options**: It offers flexibility in how information is displayed, including the ability to adjust labels and choose how allocation metrics are presented, enabling users to tailor the interface to their preferences.
- **Resource Tile**: Enhances user interaction by providing a concise overview of individual resources directly within the Relationship Explorer, including their project engagements and allocation status.
- **Allocation and Assignment Insights**: The feature includes an **Allocation Indicator** that gives a comprehensive overview of a resource's involvement across all investments, aiding in identifying over- or under-allocated resources.
- **Navigational Flexibility**: Enhanced navigational tools such as zooming and dragging facilitate the exploration of complex relationship networks, with additional functionality to delve into detailed interactions between investment managers for in-depth analysis.

### Working with Relationship Explorer

Follow these steps:

1. Log into Clarity.
2. From the main menu, click **Resource Directory**. The Resource Directory screen is displayed.
3. Right-click on a required tile badge and select **Explore Relationships** from the action menu to see the relationships between Investment Managers and their teams.
4. A tutorial message appears on the Relationship Explorer screen, offering guidance and an option to hide future messages by selecting **Do not show this again**. Familiarize yourself with the interface, which shows the visual network of resource allocations and relationships.
5. Under **Perspective**:

#### Investment Manager Perspective

Set your perspective by selecting **Investment Manager** to see the people involved in the investments you manage.

Use the **Filter Relationships** to define the relationship layers you wish to view, from direct relationships to extended networks. In "Relationships," you have three tiers to select:
- **First Relationship**: Allows a choice between **none** and **Shared People**. When you select Shared People as the first relationship, the Relationship Explorer displays resources tied to your investments as nodes, including those shared with other investments. For example, if Ian Arpel selects 'Shared People,' all resources under his investments and those shared with other investments are displayed. This includes Resource Teams.
- **Second Relationship**: Allows **none** and **Investment Managers** as options. When you select Investment Managers as the second relationship, the Relationship Explorer displays all the Investment Managers that share resources with logged-in users. You can see the connected indicators showing the number of shared resources. For example, for Ian Arpel connected with nodes, the connector indicator number (8) displays the shared resources between the investment managers, Ian Arpel and Dana Lewis.
- **Additional Relationship**: Allows options for **none** and **Repeat one more level**, requiring selections in the first and second tiers to activate. When you select Repeat one more level, the Relationship Explorer displays all the Investment Managers that share resources with the second relationship investment manager. You can see the connected indicators with Shared Resources details between Second Relationship Investment Managers and Other Investment Managers.

#### Resource Manager Perspective

Set your perspective by selecting **Resource Manager** to see the Resources who report to the Resource Manager and Resource Teams managed by the Resource Manager.

Use the **Filter Relationships** to define the relationship layers you wish to view, from direct relationships to extended networks. In "Relationships," you have two tiers to select:
- **First Relationship**: Allows a choice between **All People** and **Overallocated People**.
- When you select **All People**, you can view both Resources who report to the Resource Manager and Resource Teams managed by the Resource Manager.
- When you select **Overallocated People**, you can view the overallocated resources and overallocated resource teams associated with the Resource Manager.
- **Second Relationship**: Allows **Team Investment Managers** and **Investment Managers** as options.

#### Use Case 01: All People + Investment Managers

When you select **Investment Managers** as Second Relationship, the Relationship Explorer displays all the Investment Managers and the Team Investment Managers connected with the Resource Manager.

> [!NOTE]
> Some of the key points to remember are:
> - The connector indicator displays the number of resources working with these managers. Clicking on the connector reveals a bubble containing the Resources or Resource Teams.
> - Click a resource in the bubble to view the investments managed by the Investment Manager.
> - The Unstaffed Node shows the resources that are not assigned to any investment and resource team with no resources.

Example: Ian is connected with 12 Investment Managers.

> [!NOTE]
> Ian serves as both a Resource Manager and an Investment Manager.

#### Use Case 02: All People + Team Investment Managers

When you select **Team Investment Managers** as the second relationship, the Relationship Explorer displays only the Team Investment Manager nodes connected with the Resource Manager along with Unstaffed and Non-Team Investments nodes.

> [!NOTE]
> Non-Team Investments node shows resource team and resources who are working on Non-Team Investments such as:
> - Projects
> - Ideas
> - Custom Investments

Example: Arun and Rosie, as Team Investment Managers, are connected with Ian. Ian also serves as a Team Investment Manager.

#### Use Case 03: Overallocated People + Investment Managers

The Relationship Explorer will display the Investment Managers and Team Investment Managers associated with the overallocated resources.

Example: Ian is connected with 11 Investment Managers who are associated with overallocated resources. You can see Cheryl is overallocated for the investment managed by Dana.

#### Use Case 04: Overallocated People + Team Investment Managers

When you select **Team Investment Managers** as the second relationship, the Relationship Explorer will only show the Team Investment Managers connected to the overallocated resources, along with the Non-Team Investments node.

Example: Ian is connected with three Team Investment Managers who are associated with overallocated resources or resource team:

1. Ian
2. Rosie
3. Arun

> [!IMPORTANT]
> The Additional Relationship is inactive from the Resource Manager's perspective.

6. Click on a resource node to see an **Allocated Investments** dialog displaying details like the number of investments and other investments associated with the Investment Manager. For example, when you select Tom Morris as a resource node, the detailed dialog window opens, listing both Ian Arpel's investments and those managed by others that Tom is allocated to, complete with allocation percentages and investment details.
- **Investment Cards** display the % of allocation or assignment, Investment name, Investment ID, and Investment Type.
- The **Resource tile badge** includes indicators for Person Type, Allocation (showing over or under allocation), and active investments, providing a comprehensive overview of resource engagement.
7. For deeper analysis, you can click any **Connector Indicator** between investment managers to see the number of shared resources, facilitating insights into collaborative resource utilization.
8. Use the zoom and drag functions to adjust your view of the relationship map.

### Setup View Options for Relationship Explorer

Follow these steps:

1. Log into Clarity.
2. From the main menu, click **Resource Directory**. The Resource Directory screen is displayed.
3. Right-click on a required tile badge and select **Explore Relationships** from the action menu to see the relationships between Investment Managers and their teams.
4. Click **View Options**.
5. In the **Explorer** section:
- **Periods**: You can specify the time frame for data display by selecting periods, and then choosing between **Periods** or **Duration** from Type, and specifying the relevant Start Period and End Period time frames.
- **Perspective Label**: You can customize the perspective label by selecting attributes from Lookups, Strings, and OBS on the Resource object, displaying only the last unit of OBS.
- **Relationship Label**: You can customize the relationship/node label by selecting attributes from Lookups, Strings, and OBS on the Resource object, displaying only the last unit of OBS.
- **Demand**: Adjust the **Allocation Indicator** on resource tiles based on **Allocations** or **Assignments**.
