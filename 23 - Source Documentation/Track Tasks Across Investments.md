# Track Tasks Across Investments

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[03 - Projects/_MOC Projects|Projects]]
- Canonical notes:
- [[03 - Projects/Tasks Phases Milestones]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Multicurrency Transaction Example (#multicurrency-transaction-example)
- H3: Process (#process)
- H3: Benefits for Hedmoral Bank (#benefits-for-hedmoral-bank)
- H2: Track Tasks Across Investments (#track-tasks-across-investments)
- H2: Standard Features Across the Grid, Board, and Calendar Layouts (#standard-features-across-the-grid-board-and-calendar-layouts)
- H3: Collaborate with Stakeholders on Tasks (#collaborate-with-stakeholders-on-tasks)
- H3: Create To-Do Items for Tasks (#create-to-do-items-for-tasks)
- H3: Add Staff Members to Tasks (#add-staff-members-to-tasks)
- H3: Add Helpful Links to Tasks (#add-helpful-links-to-tasks)
- H3: Working with Widgets (#working-with-widgets)
- H2: Using the Board Layout on the Tasks Page (#using-the-board-layout-on-the-tasks-page)
- H3: Setup View Options for the Board Layout (#setup-view-options-for-the-board-layout)
- H2: Using the Calendar Layout on the Tasks Page (#using-the-calendar-layout-on-the-tasks-page)
- H3: Setup View Options for the Calendar Layout (#setup-view-options-for-the-calendar-layout)
- H3: Using the Task Workspace Calendar (#using-the-task-workspace-calendar)
- H2: Using the Associated Objects Grid on the Tasks Page (#using-the-associated-objects-grid-on-the-tasks-page)
- H2: Managing Records Using the Grid Layout (#managing-records-using-the-grid-layout)
- H3: Setup View Options (#setup-view-options)
- H2: Managing Records Using the Timeline Layout (#managing-records-using-the-timeline-layout)
- H2: Editing Tasks (#editing-tasks)

## Multicurrency Transaction Example
- **Transaction Currency** (entered): USD
- **Billing Currency** (for client invoicing): AUD
- **Reporting Currency** (for consolidation): JPY
- **Home (Investment) Currency**: GBP

### Process

1. The team enters the transaction in USD in the Unposted Transactions object.
2. When the transaction is posted, Clarity automatically converts the USD amount using the effective exchange rates configured for the transaction date:
- GBP (Home/Investment Currency)
- AUD (Billing Currency)
- JPY (Reporting Currency)
3. Each currency field in the Posted Transactions grid displays the converted value.

### Benefits for Hedmoral Bank
- Project managers can see actual costs in the local currency of the project team (USD) and compare them with billing amounts (AUD).
- Finance analysts can consolidate costs and revenue in JPY for corporate reporting.
- Executives can track investment performance in GBP, the bank's base currency, ensuring consistent financial visibility across regions.
- Reduces manual currency conversions and improves reporting accuracy for global projects.

This capability allows Hedmoral Bank to manage multicurrency investments efficiently, maintain consistent reporting, and improve financial decision-making across international operations.

Follow these steps:

1. Log in to Clarity.
2. Navigate to the relevant page.
3. Configure the required currency fields using **Columns**.
4. View the transactions in different currencies directly in the grid.

---

## Track Tasks Across Investments

The Tasks workspace in Clarity empowers organizations to efficiently manage and monitor tasks across all their investments from a single, centralized workspace. This comprehensive capability provides users with the flexibility to view, organize, and interact with tasks through multiple intuitive layouts including Grid, Board, Calendar, and Timeline views, each designed to suit different work styles and management preferences. With robust collaboration features, stakeholders can engage in conversations, create detailed to-do items, assign resources, and add helpful links directly within the task context, enabling seamless coordination across distributed teams and complex investment portfolios.

You can view tasks across the Grid, Board, and Calendar layout.

This section contains the following topics:
- Standard Features Across the Grid, Board, and Calendar Layouts
- Using the Board Layout on the Tasks Page
- Using the Calendar Layout on the Tasks Page
- Using the Timeline Layout on the Tasks Page
- Using the Associated Objects Grid on the Tasks Page
- Editing Tasks

## Standard Features Across the Grid, Board, and Calendar Layouts

The following features are available across Grid, Board, and Calendar layouts in Clarity:
- Collaborate with Stakeholders on Tasks
- Create To Do items for task
- Assign Staff Members to tasks
- Add Links to Tasks
- Widget Types

### Collaborate with Stakeholders on Tasks

You can start conversations with the team members to collaborate on a particular task. You can use these conversations to record discussions and decisions related to the task or to request a team member to perform an activity for the task.

Follow these steps:

1. Navigate to a Tasks page, and open the **Details** panel.
2. Click the **Conversations** tab, and add your comment. Use `@resource name` to address a specific team member and post your conversation.

> [!NOTE]
> The mentioned user will get the notification when they click the **Notification** bell icon in Clarity.

### Create To-Do Items for Tasks

Create to-do items for a task to break down the work into smaller activities. For example, the Plan Database Upgrade task can include the following to-do items:
- Receive Management Approval
- Schedule DBA Resource

You can create a maximum of 25 to-do items for a task. The status of the to-do list items does not affect the status of the parent task. You decide when the task is complete. You can expand and collapse the Open and Completed sections for to-do items.

Follow these steps:

1. Navigate to the **Tasks** tab.
2. In Calendar, Board, or Grid layout, select a task. The Details layout is displayed in the right pane.
3. Click the **To Do** tab.
4. In the Open section, click **NEW TO DO** and enter a short description (up to 256 characters) in the **Add a To Do** field, and press **Enter**.
5. Click the date picker to add an optional due date. The due date must fall within the start and end date of the parent object, such as a project or investment item.
6. Click **Assign** to select an optional owner for the to-do item. You can select any active labor resource, role, or team for which you have at least the **Resource - View** access right. Resources, roles, and teams that are available for the task owner are also available for the to-do items. You can update the owner or due date at any time for both open and completed items.
7. To mark an open to-do item completed, select the empty circle icon next to its name.
8. The item moves to the Completed section with a checkmark icon to indicate its completed status.
9. To reopen a to-do item, click the checkmark, and the item moves back to the Open status.

### Add Staff Members to Tasks

Assign work at the task level when you want specific resources, roles, or teams to work on a task. For example, Sid, the Project Manager, wants to assign an Architect, a developer, and a UX Designer to the Research and Development task so that they all work in tandem to complete the R&D work with the desired outcome.

Follow these steps:

1. Click the **Tasks** page.
2. Click on the task that you want to assign resources to. In this example, click the Research and Development task.
3. Click the **DETAILS** panel.
4. Click on the **Assignments** tab.
5. Add the resources, teams, or roles that you want to assign to the task. The selected staff are assigned to the task. You can modify or delete the assignments until any actuals are posted for the assignment.
6. Click **Expand** to use some key capabilities of the common grid, such as Views, Group-by, Filter, and Export to CSV.

### Add Helpful Links to Tasks

You can add helpful links to external sites that might help the task owner to complete their work. For example, a financial task might include a link to a financial index, and a construction task might include a link to a site that captures important weather and environmental data.

Follow these steps:

1. Click the **Tasks** page.
2. Click on the task to which you want to add links.
3. Click the **DETAILS** panel.
4. Click the **Links** tab.
5. Click **NEW LINK**.
6. Enter a URL to an external link.
7. Enter a user-friendly **LINK NAME**.

### Working with Widgets

You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. The following widgets are available:
- **Number Tile**
- **Pie**
- **Bar**
- **Progress Ring**
- **Target** (Roadmaps and Staffing Workspace)

Some of the key actions you can perform with widgets are:
- Use the **Show Widgets** button to display the widgets toolbar.
- Use the **Manage Widgets** button to open the Add Widgets dialog box to add existing widgets from the My Widgets section and the Widget library.
- Create a **New Widget** from the Add Widgets dialog box.
- Enhance your data analysis by using the Interactive Filtering feature on widgets, enabling deeper insights through drill-down capabilities.

You can create the following widgets in this release. Each widget supports distinct operations such as Count, Sum, and Average. You can also specify the color of the widget and select the relevant display format (number or percentage).
- **Number Tile Widget**: Displays a specific number based on the widget definition and filter criterion.
- **Pie Widget**: Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- **Bar Widget**: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- **Progress Ring Widget**: Displays a ring with a number based on the widget definition and filter criterion.
- **Target** (Roadmaps and Staffing Workspace): Displays targets either as goals or constraints on the number and money attributes of the relevant objects.

> [!NOTE]
> To learn more about Widgets, see Widgets.

## Using the Board Layout on the Tasks Page

You can use the Board layout to view items as cards. You can arrange these cards with drag-and-drop precision on a board layout with columnar swim lanes.

Some key features associated with cards are:
- The board layout does not provide the option to create new cards.
- Cards can now display two title fields per card and display the width of the card. If you configure the investment name, it will hyperlink to the relevant investment.
- You can configure a maximum number of six fields across two columns per card.
- You can configure a maximum of six metrics per card, which are configured up to three columns across. Metrics are displayed in an abbreviated format.
- Cards appear in your choice of colors based on the value you select in the **Color** field in **View Options**. Your color selections are saved with the view.
- Card titles default to the **Name** field. If you configure a default value for the Name field in Studio, Clarity uses that value when creating cards. Without a default value, new cards show "New Item" as their default name.
- You can double-click a card to edit its name. You are not limited to using the default name.

You can interact with records on the board to perform the following actions:
- Use the **Search** bar available to filter values based on the name or ID.
- Use **Filters** to identify records that match your selection criterion quickly. You can use the advanced filtering capability to define complex filter conditions.
- Use the **Details Panel**, which is available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using a series of configurable visual widgets.
- Save and modify multiple views that help you achieve your business goals.

> [!NOTE]
> To learn more about the board layout and associated capabilities, see:
> - Clarity Boards
> - Widgets
> - Details Panel
> - Saved Views
> - Filters

### Setup View Options for the Board Layout

The View Options capability allows you to customize the Board layout.

Follow these steps:

1. Navigate to the relevant page in Clarity.
2. Click the **Board** layout.
3. Click **View Options**.
4. Use **Columns** to specify attributes whose values will display as columns horizontally.
5. Use **Swimlanes** to specify attributes whose values will display as swimlanes that collapse vertically.
6. Use **Sort** to select an attribute to sort the cards within a column only.
7. Use **Color** to select a lookup attribute. If display mapping colors are configured for the attribute, it will display the color as a vertical bar on the left side of the card.
8. Use **Show Labels** to show or hide labels.
9. Use **Configure Card** to configure various options that will be displayed on the card.

## Using the Calendar Layout on the Tasks Page

The Calendar layout displays tasks in a weekly or monthly calendar based on their Finish date. If you do not have a Finish date assigned to a task, it's available in the Unscheduled section. You can drag and drop a task from the unscheduled section to the relevant Finish date on the calendar.

Some key features associated with the Calendar layout are:
- Tasks that do not have a finish date are available in the Unscheduled state.
- You can change the calendar display to monthly or weekly.
- You can use a toggle to view weekends in the calendar.
- You can quickly cycle through time periods to view Tasks.
- You can sort by Date, Name, or Owner attributes.
- If you are viewing the weekly layout, you can scroll to display all tasks for that date. If you view the monthly calendar, you can click the **More** button to view the overflow popover.
- You can drag and drop Tasks from one date to another. However, you cannot drag a task from a calendar to the unscheduled state.
- You can right-click a Task to edit or delete it.

### Setup View Options for the Calendar Layout

The View Options capability allows you to customize the Calendar layout.

Follow these steps:

1. Navigate to the **Tasks** page in Clarity.
2. Click the **Calendar** layout.
3. Click **View Options**.
4. Use **Range** to view the calendar by week or month.
5. Use **Date** to configure any date field and will plot the task on the calendar based on the date value.
6. Use **Sort** to select an attribute to sort the cards within each day in the Week or Month range.
7. Use **Color** to select a lookup attribute. Clarity will display the color as a vertical bar on the left side of the card on the Week range. For the Month range, the whole taskbar will be filled with the color.
8. Use **Show Weekend** to hide or show weekends in the Week or Month range.

### Using the Task Workspace Calendar

You can view tasks in a Weekly or Monthly view. If you select the Weekly display, the task card will display the avatar resources, the Task Name, the Investment Name, and the Task Status. If you select the Month Card display, you can see the Task Name and avatar of assigned resources. The remaining avatars are displayed on the Overflow counter. In this release, you cannot edit the fields on the task card.

Follow these steps:

1. Navigate to the **Tasks** page in Clarity.
2. Click the **Calendar** layout.
3. Click **View Options** and configure the calendar layout.
4. Use the Calendar Carousel to select the appropriate time period.
5. You can select a card and use the **Details** tab to update the task. To learn more, see Standard Features Across the Grid, Board, and Calendar Layouts.
6. You can right-click a card to delete it or open the Details panel.
7. You can drag and drop cards to update their finish dates.
8. If you are in the Month view, click the **"+ More"** link to display Overflow Popover to list the remaining tasks that cannot be displayed within a month cell.
9. You can drag and drop Overflow Popover around in the calendar. You can drop tasks from the Overflow Popover to a day in the calendar.

> [!NOTE]
> - Infinite scrolling allows users to scroll through a large number of records in the Calendar layout.
> - Editing Tasks in the flyout or the drag-and-dropping of tasks may be restricted because of existing task rules. Some examples of these rules are:
>   - Not able to set a task status to completed if ETC is not zero
>   - Moving the Start/Finish dates if actuals are posted
>   - If "% Completed" is not 100%, you will not be able to set "Task Status=Completed"

## Using the Associated Objects Grid on the Tasks Page

The Tasks grid leverages the associated objects grid because, while the grid is primarily associated with viewing and editing Tasks, you can also use it to view information such as investment details that would help you accurately plan and complete work. You can use the Tasks grid to review common attributes across all investments or specific to individual investments.

Consider an example where you have multiple tasks assigned to you across projects and custom investments. In such a scenario, you can add the following fields to the grid to help you make the right decisions:
- Attributes associated with Tasks such as Name, % Complete, ETC
- Attributes associated with the Common Investment object such as Corporate Priority and Manager
- Attributes associated with all the investments (Projects and Custom Investments) where you have Tasks

> [!NOTE]
> The cross-object workspaces do not support Aggregated Calculated Attributes (ACA), Calculated Attributes nor Formula Attributes.

## Managing Records Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Edit Data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the **Conditional Formatting** dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the **Column Panel** to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the `+` or `-` option to shift the values in the date field.
- Use the Drag Functionality to populate data.
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

### Setup View Options

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. **Show Total Row**: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off.

You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.

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

## Managing Records Using the Timeline Layout

You can now use the Timeline Layout to execute investments seamlessly. Some key actions you can perform on the Timeline Layout are:
- Edit investment data by using the configurable grid or the Details panel.
- Drag the investment bars horizontally to adjust start and end dates.
- Add Widgets to view investment data graphically.
- Use the **Color By** option to determine the color of investment bars.
- You can now copy tasks within investments to duplicate them.
- You can use the **Show Today** toggle for the Tasks module to view your current position as of today in the overall plan. Today is displayed as a star and a dotted line that cuts across various tasks displayed on the Timeline.

> [!NOTE]
> Some key points you need to remember are:
> - The rows of the Timeline are presented in alphanumeric sort by Investment name.
> - You cannot create dependency lines between investments on the Investment timeline.
> - Timeline investment bars can be moved horizontally (to change investment start and end dates) but not vertically. When the investment bar is moved, the underlying business logic for assignments, tasks, and staff is applied.
> - The Investment Timeline view supports fiscal periods.
> - When using the "+" button to create a new investment, the Details flyout will automatically open for the user to input required fields that do not have a default value.
> - You can now see key milestones and their status on the Timeline layout for projects and custom investments.
> - Mark various tasks as Key Tasks on the Tasks module associated with a project or custom investment.
> - Select the **Key Milestones** check box on the View Options pane for the Timeline layout on the Projects page and the Custom Investments page.
> - Hover your mouse over a milestone to view its name and finish date. If the diamond associated with a milestone is filled, it means the milestone status is complete.

## Editing Tasks

If you have the relevant permissions, you can directly edit tasks on the Tasks Workspace by:
- Adding the relevant fields from the **Column Panel** to the workspace and editing them.
- Adding the relevant fields to the **Details** panel and editing them.
- Editing To Dos, Assignments, Links, and Conversations on the Details panel.

To learn more about using the Details panel to edit tasks, see Working with the Details Panel.

When users work with task schedulers in investments, Clarity can lock an investment if they create a tentative schedule, have unsaved changes in PPM Gantt, or open the investment in Open Workbench or Microsoft Project. The following users can open a locked investment using the **Unlock** button on the top-right corner:
- Lock owner
- Investment Manager
- Administrator with **Administration - Application Setup** access right

You need the **Tasks - Navigate** access right to access this page. You can personalize the tasks on the My Tasks page.

To learn more about the Tasks page, see Track Tasks Across Projects.
