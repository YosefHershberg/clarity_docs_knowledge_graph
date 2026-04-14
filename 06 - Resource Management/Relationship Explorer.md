---
title: Relationship Explorer
tags:
  - howto
aliases:
  - Resource Relationships
canonical: true
audience: rm, pm
domain: resources
---
# Relationship Explorer

> [!important]
> Some of the key points to remember are: - After a bulk update through XOG or API, the administrator must manually run the Refresh Resource
Directory job to maintain accurate hierarchy data. - The system utilizes the ODF_HIERARCHIES table to store resource hierarchies, with each hierarchy
specified as 'resource' in the 'type' column and distinguished by 'odf_object_code', set to 'odf_sys_hierarchy' for resource hierarchies. - Caution:

The presence of any cyclic references, such as mutual reporting, in the system (Clarity Database) prevents resource display.
A "No Resources" message is displayed until such references are resolved and the refresh job is executed.
For example, if you have a reference where Ian Arpel is reporting to Ray Fowler and Ray Fowler is reporting to Ian Arpel, you must correct this cyclic reference data and run the Refresh Resource Directory job for the respective resources displayed in the Resource Directory.
- Resource metrics on tiles depend on available data; the absence of data results in blank metrics.
For example, if the user does not have direct reportees, the Reportees metric will be blank.
- A Feature Toggle controls the Resource Directory workspace and remains 'Disabled' by default until it is enabled.
Relationship Explorer
This section contains the following topics: - Relationship Explorer - Working with Relationship Explorer - Setup View Options for Relationship Explorer
Relationship Explorer (Beta):

Exploring Interconnections between Investment Managers and Resources Complementing the Resource Directory is the Relationship Explorer, which extends the capabilities of the Resource Directory by providing an in-depth analysis of the relationships between Investment Managers and their teams.
It highlights shared resources across investments, identifies potential bottlenecks, and offers insights for workload rebalancing.
Users can navigate from the Resource Directory to explore these relationships further, with customizable filters and views for detailed analysis. Key Features:

- Visualization of Relationships: This tool graphically maps out the connections between resources and investment managers, highlighting shared resources to understand project interdependencies better.
- Relationship Explorer Filters: Users can apply specific criteria through filters to refine the display of relationships, making it easier to focus on particular areas of interest or concern.
- Customizable View Options: It offers flexibility in how information is displayed, including the ability to adjust labels and choose how allocation metrics are presented, enabling users to tailor the interface to their preferences.
- Resource Tile: Enhances user interaction by providing a concise overview of individual resources directly within the Relationship Explorer, including their project engagements and allocation status.
- Allocation and Assignment Insights: The feature includes an 'Allocation Indicator' that gives a comprehensive overview of a resource's involvement across all investments, aiding in identifying over- or under-allocated resources.
- Navigational Flexibility: Enhanced navigational tools such as zooming and dragging facilitate the exploration of complex relationship networks, with additional functionality to delve into detailed interactions between investment managers for in-depth analysis.
1. Log into Clarity.
2. From the main menu, click Resource Directory. The Resource Directory screen is displayed.
3. Right-click on a required tile bage and select Explore Relationships from the action menu to see the relationships
between Investment Managers and their teams. 4. A tutorial message appears on the 'Relationship Explorer' screen, offering guidance and an option to hide future
messages by selecting 'Do not show this again'. Familiarize yourself with the interface, which shows the visual network of resource allocations and relationships. 5. Under Perspective: - Set your perspective by selecting Investment Manager to see the people involved in the investments you manage.
- Use the Filter Relationships to define the relationship layers you wish to view, from direct relationships to extended networks.

In "Relationships," you have three tiers to select: - First Relationship:
Allows a choice between 'none' and 'Shared People.' When you select Shared People as the first relationship, the Relationship Explorer displays resources tied to your investments as nodes, including those shared with other investments.
For example, if Ian Arpel selects 'Shared People,' all resources under his investments and those shared with other investments are displayed. This includes Resource Teams.
- Second Relationship: Allows 'none' and 'Investment Managers' as options.
When you select Investment Managers as the second relationship, the Relationship Explorer displays all the Investment Managers that share resources with logged-in users.
You can see the connected indicators showing the number of shared

resources.

For example, for Ian Arpel connected with nodes, the connector indicator number - 8 displays the shared resources between the investment managers, Ian Arpel and Dana Lewis.
- Additional Relationship Allows options for 'none' and 'Repeat one more level,' requiring selections in the first and second tiers to activate.
When you select Repeat one more level as an additional relationship, the Relationship Explorer displays all the Investment Managers that share resources with the second relationship investment manager.
You can see the connected indicators with `Shared resources' details between `Second Relationship' Investment Managers and `Other' Investment Managers.
- Set your perspective by selecting Resource Manager to see the Resources who report to the Resource Manager and Resource Teams managed by the Resource Manager.
- Use the Filter Relationships to define the relationship layers you wish to view, from direct relationships to extended networks. In "Relationships," you have two tiers to select:
- First Relationship: Allows a choice between `All People' and `Overallocated People'. When you select All People as First Relationship, you can view both:
- Resources who report to the Resource Manager - Resource Teams managed by the Resource Manager When you select Overallocated People as the first relationship, you can view the overallocated resources and overallocated resource teams associated with the Resource Manager.
- Second Relationship: Allows 'Team Investment Managers' and 'Investment Managers' as options. Use case 01:
First Relationship as `All People' and Second Relationship as `Investment Managers' When you select `Investment Managers' as Second Relationship, the Relationship Explorer displays all the Investment Managers and the Team Investment Managers connected with the Resource Manager.
> [!note]
> Some of the key points to remember are: - The connector indicator displays the number of resources working with these managers.
Clicking on the connector reveals a bubble containing the Resources or Resource Teams. - Click a resource in the bubble to view the investments managed by the Investment Manager. - The Unstaffed Node shows the resources that are not assigned to any investment and resource
team with no resources.
Example: Ian is connected with 12 Investment Managers.

> [!note]
> Ian serves as both a Resource Manager and an Investment Manager. Use case 02:

First Relationship as `All People' and Second Relationship as `Team Investment Managers' When you select `Team Investment Managers' as the second relationship, the Relationship

Explorer displays only the Team Investment Manager nodes connected with the Resource Manager along with Unstaffed and Non-Team Investments nodes.
> [!note]
> Non-Team Investments node shows resource team and resources who are working on Non-Team Investments such as: - Projects - Ideas - Custom Investments
Example: Arun and Rosie, as Team Investment Managers, are connected with Ian. Ian, who also serves as a Team Investment Manager. Use case 03:

First Relationship as `Overallocated People' and Second Relationship as `Investment Managers' The Relationship Explorer will display the Investment Managers and Team Investment Managers associated with the overallocated resources.

Example: Ian is connected with 11 Investment Managers who are associated with overallocated resources. You can see Cheryl is overallocated for the investment managed by Dana.

Use case 04:
First Relationship as `Overallocated People' and Second Relationship as `Team Investment Managers' When you select 'Team Investment Managers' as the second relationship, the

Relationship Explorer will only show the Team Investment Managers connected to the overallocated resources, along with the Non-Team Investments node.
Example: Ian is connected with three Team Investment Managers who are associated with overallocated resources or resource team: 1. Ian

2. Rosie
3. Arun
> [!important]
> The Additional Relationship is inactive from the Resource Manager's perspective.

6. Click on a resource node to see an Allocated Investments dialog displaying details like the number of investments and other investments associated with the Investment Manager.

For example, when you select Tom Morris as a resource node, the detailed dialog window opens, listing both Ian Arpel's investments and those managed by others that Tom is allocated to, complete with allocation percentages and investment details.
- Investment Cards display the % of allocation or assignment, Investment name, Investment ID, and Investment Type - The Resource tile badge includes indicators for Person Type,

Allocation (showing over or under allocation), and active investments, providing a comprehensive overview of resource engagement.
7. For deeper analysis, you can click any Connector Indicator between investment managers to see the number of shared resources, facilitating insights into collaborative resource utilization.
8. Use the zoom and drag functions to adjust your view of the relationship map.
Setup View Options for Relationship Explorer
Follow these steps:
1. Log into Clarity.
2. From the main menu, click Resource Directory. The Resource Directory screen is displayed.
3. Right-click on a required tile bage and select Explore Relationships from the action menu to see the relationships
4. Click View Options.
5. In the Explorer section:
- Periods: You can specify the time frame for data display by selecting periods, and then choosing between 'Periods' or 'Duration' from Type, and specifying the relevant Start Period and End Period time frames.
- Perspective Label: You can customize the perspective label by selecting attributes from Lookups, Strings, and OBS on the Resource object, displaying only the last unit of OBS.
- Relationship Label: You can customize the relationship/node label by selecting attributes from Lookups, Strings, and OBS on the Resource object, displaying only the last unit of OBS.
- Demand: Adjust the 'Allocation Indicator' on resource tiles based on 'Allocations' or 'Assignments':

## Related
- [[Resource Directory]]
- [[People-Centric Planning]]
- [[_MOC Resources]]

%%Source: p1538-1543%%

