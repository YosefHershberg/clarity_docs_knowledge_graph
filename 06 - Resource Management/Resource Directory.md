---
title: Resource Directory
tags:
  - howto
aliases:
  - Resource Search
canonical: true
audience: rm, pm
domain: resources
---
# Resource Directory

Manager, up to three levels. To support this enhancement, a new Manager Type section has been added under the View Options > Directory tab. This section includes two options:

Resource and Booking. The respective radio buttons allow you to switch between the Resource Manager view and the Booking Manager view.
Previously, the resource cards (badges) displayed limited information such as name, department, and metrics (number of active investments, team investments, and direct reports).
With the Clarity 16.2.3 release, you can now use drag-and-drop to configure attributes on the Resource card using the new Configure Card functionality.
[{"id":"IPCE_New","title":"Enhancements","type":"use","languages":["en-us"]},{"title":"Enablement Videos","type":"videos","URL":["https://youtu.be/_WOddbl7eTA"],"languages":["en-us"]}, {"id":"4181833","title":"Recommended Courses","type":"courses","languages":["en-us"]}]}
Resource Directory
This section contains the following topics: - Resource Directory - Pre-Requisites - Working with Resource Directory - Setup View Options for Resource Directory - Selecting Hierarchy Layouts Resource Directory: Visualizing Organizational Dynamics through Resource Hierarchy Mapping
The Resource Directory offers a visual hierarchy of the organization's structure, displaying up to three levels of relationships, including managers, peers, and reportees. Key Features:

- Access Rights: The Resource - Directory - Navigate is a global access right that allows users with this permission to access the new Resource Directory workspace.
- Dynamic Hierarchy Visualization: Users can view an interactive three-level hierarchy showcasing their manager, peers, and direct reports. The logged-in user's tile is distinctly highlighted for easy identification.
- Resource Navigator: An intuitive Resource Navigator displays the logged-in user's upward hierarchy and allows for scrolling through additional data if necessary.
- Enhanced Interactivity: Clicking on any user tile within the Resource Directory refreshes the display to show that user's specific hierarchy, including their manager, peers, and direct reports.
- Customization Options: View options include Name Format customization and the ability to change labels on badges to display attributes such as Lookups, Strings, and OBS from the Resource object.
- Tile Badges: Tiles display key metrics such as Name, Role, Number of Active Investments, and Direct Reports, providing at-a-glance information that reflects direct management rather than aggregated data.
- Inactive People Filter: This toggle allows users to include or exclude inactive resources from the display, with distinct visual indicators for active versus inactive personnel.
- Search: Using the search input box, you can search for a person by typing the Resource's First Name, Last Name, ID, or Email.

Each key press generates a matched results dropdown list below the input box, displaying any resources that contain the typed characters.
Activating any result clears the search input and centers the UI on the selected person, displaying their details, including Manager, Peers, and Reportees.
> [!note]
> that you can search for both active and inactive resources. Inactive resources will be displayed even when the Include Inactive People flag is disabled.
- Action Menu Enhancements: Each resource card features an action menu, accessible through hover or right-click, which includes the 'Explore Relationships' option, linking directly to the Relationship Explorer.
- Refresh Job: The Refresh Resource Directory Job ensures the directory reflects the most current data, considering updates to Resource Manager or Booking Manager attributes.

The job also includes functionality to report circular references w.r.t Resource Manager or Booking Manager.
It will generate a report of any circular references detected, providing a downloadable link to a CSV file with the details.
Ensure the refresh job completes successfully after enabling the feature.
However, after a bulk update through XOG or API, the administrator must run this job manually to maintain accurate hierarchy data.
Pre-Requisites - You need to have the following access rights to access the Resource Directory workspace:
- Resource - Directory - Navigate: Allows you to access the Resource Directory workspace. - A Feature Toggle controls the Resource Directory workspace and remains 'Disabled' by default until it is enabled.
Ensure that you have enabled Resource Directory and Relationship Explorer in the Feature Toggles workspace. IMPORTANT Some of the key points to remember are:

- Ensure that you do not have any cyclic references, such as mutual reporting, in the system (Clarity Database).

If you have any, it prevents resource display, and a "No Resources" message is displayed until such references are resolved and the refresh job is executed.
For example, if you have a reference where Ian Arpel reports to Ray Fowler and Ray Fowler reports to Ian Arpel, you must correct this cyclic reference data.
- Ensure the Refresh Resource Directory job has completed at least once to display the respective resources in the Resource Directory.
1. Log into Clarity.
2. From the main menu, click Resource Directory. The Resource Directory screen is displayed. On the Resource
Directory screen: - The Resource Navigator displays the resource list, including the logged-in user, their manager (Resource
manager or booking manager), peers, and direct reports, showcasing the upward hierarchy. - The highlighted tile on this screen represents the logged-in user, showing their manager, peers, and direct reports
for clarity. For instance, if Ian Arpel logs in, his tile is highlighted accordingly. - Clicking on any user tile updates the display to highlight that user, showing their manager, peers, and direct reports,
enhancing user interaction and information accessibility. - A row displays up to 10 tile badges; an 11th card labeled Show More, reveals additional resources, facilitating easy
navigation through extensive data. - Resources without a set manager in the system are excluded from display to maintain clarity and relevance. - Tile badges provide key details: Name, Department, and Metrics (number of active investments, teams managed,
and direct reports). Note that if the data is not available/absent, then the respective metric will not be displayed, ensuring only relevant information is presented. 3.

You can right-click on a required tile bage and select Explore Relationships to see the relationships between Investment Managers and their teams.
For more information, see Working with Relationship Explorer.
1. Log into Clarity.
2. Navigate to Resource Directory and click View Options.
3. In the Directory section:
- Periods: You can specify the time frame for data display by selecting periods, and then choosing between 'Periods' or 'Duration' from Type, and specifying the relevant Start Period and End Period time frames.
- Manager type: You can use the Resource and Booking options to switch between the Resource Manager hierarchy and the Booking Manager hierarchy.
- Demand: Adjust the 'Allocation Indicator' on resource tiles based on 'Allocations' or 'Assignments':

- Allocations show the percentage of a resource's allocation across various investments. - Assignments indicate the total usage of a resource. - Include Inactive People:

The toggle is off by default, showing only active resources. Turning this toggle on displays inactive resources, managers, and peers.
> [!note]
> On inactive resource tiles, the only available action is Explore Relationships. Inactive managers and resources will be visible in the Resource Navigator. - Show Labels:

You can toggle off or on the attribute labels on the resource cards. - Configure Card: Click to add more fields and metrics to Resource Cards.
A Card Configurator dialog appears, allowing you to customize your choice of attributes and Avatar types to be displayed on the Card.
You can drag and drop resource fields or metrics into designated slots.
This feature enables you to configure 6 metrics and 4 fields per resource card, ensuring a tailored view of critical resource information. NOTE The avatar card has two slots:
Fields and Metrics.
- Numeric resource fields can be dragged to either the Field slot or the Metric slot. - Non-numeric resource fields can only be dragged to the Field slot.
Working with Card Configurator
Follow these steps:
1. Log into Clarity.
2. Navigate to Resource Directory and click View Options.
3. Under the Directory tab, click Configure Card. The Card Configurator dialog is displayed.
a. On the top-right side, you have options to select the avatar size. b. At the center, you have the preview of avatar card with designated slots for adding fields and metrics. c. From the left panel, you have the attribute list grouped under the Count and Resource sections.
4. On the top-right side, choose how the avatar will be displayed: a. Large: Centered avatar with options to show over/under allocations and person type. b. Small: Smaller avatar to make room for more fields or metrics. c. None: Hides the avatar entirely.
5. From the left pane, drag and drop Fields and Metrics to the designated slots on the avatar card. You can configure up to 6 metrics and 4 fields per resource card. a. Fields: Non-numeric resource fields. b. Metrics: Numeric resource fields (can also be added to the Field slot).
6. In the avatar card, adjust the Fields and Metrics as needed.
7. Once configured, click Apply to save the changes. The visual hierarchy will be refreshed to reflect the updated changes in the resource cards.
Selecting Hierarchy Layouts
Clarity enables you to select from these five layouts: Horizontal, Vertical, Tree, Double-line, and Compact. Your selection will be saved as part of your saved view for each instance.
1. Log into Clarity.
2. Navigate to Resource Directory and click View Options.
3. Click Layout.
4. Select the relevant layout from the available options.

## Related
- [[People-Centric Planning]]
- [[Relationship Explorer]]
- [[_MOC Resources]]

%%Source: p1534-1537%%

