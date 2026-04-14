# Creating and Managing Business Agreements

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[09 - Collaboration/_MOC Collaboration|Collaboration]]
- Related domains: [[12 - Administration/_MOC Administration|Administration]]
- Canonical notes:
- [[09 - Collaboration/Business Agreements]]
- [[12 - Administration/Blueprints/Agreements Blueprint]]
- [[12 - Administration/Managing Users]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Introducing the Agreement Object (#introducing-the-agreement-object)
- H2: Configuring the Agreement Blueprint (#configuring-the-agreement-blueprint)
- H2: Associate Blueprint with Agreement (#associate-blueprint-with-agreement)
- H2: Creating an Agreement (#creating-an-agreement)
- H2: Setup View Options (#setup-view-options)
- H2: Using the Canvas to Manage Agreements (#using-the-canvas-to-manage-agreements)
- H2: Setup Layout in the Canvas (#setup-layout-in-the-canvas)
- H2: Working with Widgets (#working-with-widgets)
- H2: Additional Capabilities for the Agreement Object (#additional-capabilities-for-the-agreement-object)
- H3: Create Processes for the Business Agreement Object (#create-processes-for-the-business-agreement-object)
- H3: Create Custom Sub-Objects for the Agreement Object (#create-custom-sub-objects-for-the-agreement-object)
- H3: Create Business Rules for the Agreements Object (#create-business-rules-for-the-agreements-object)
- H3: Create Notifications for the Agreement Object (#create-notifications-for-the-agreement-object)
- H3: Create Action Items for the Agreement Object (#create-action-items-for-the-agreement-object)

The success of any large organization depends on the seamless execution of hundreds of different investments that are loosely or tightly coupled with each other. Most customers struggle to capture and manage agreements between these investments. Generally, the discussions on the dependencies between investments happen in planning meetings, and the decisions are documented in emails which get buried very quickly.

Hence, when critical investments in an organization introduce changes that impact their delivery dates, most stakeholders are caught unaware, and the effects are felt both upstream and downstream. When you analyze the root cause of such failures and delays, you identify two key reasons:

1. There is no single place of truth in the organization where stakeholders can review dependencies between investments. Hence, they are unaware of the impact of making changes that extend the timelines of any investment.
2. Most stakeholders simply don't remember all the investments dependent on them and the ripple effect of introducing changes.

The **Business Agreements** workspace in Clarity addresses these challenges by enabling you to define and manage agreements between investments in Clarity. Stakeholders can review these agreements before conducting the next roadmap planning activity or making decisions that impact the investment dates.

This section contains the following topics:
- Introducing the Agreement Object
- Configuring the Agreement Blueprint
- Associate Blueprint with Agreement
- Creating an Agreement
- Setup View Options
- Using the Canvas to Manage Agreements
- Setup Layout in the Canvas
- Working with Widgets

---

## Introducing the Agreement Object

The Agreement object is available in Classic PPM. This object will only be visible in Clarity and includes a default blueprint that administrators can customize. To learn more about the blueprint, see Business Agreement Blueprint.

Some key points to remember while using the Agreement object are:
- You can secure the attributes associated with the Agreement object by using field-level security.
- The object does not support XOG or processes.
- The object supports the creation of business agreements between projects, ideas, and custom investments.
- You can assign an OBS to agreements.
- The **Agreement - Create**, **Agreement - Delete**, **Agreement - Edit**, **Agreement - Navigate**, and **Agreement - View** instance and global access rights are available.

Some key attributes associated with the Agreement object are:
- **Owners**: One or multiple resources that own the agreement.
- **Contributors**: One or multiple resources that will contribute to meeting the agreement.
- **Predecessors**: Investments that will need to deliver something to the successor.
- **Successors**: Investments that will consume the output from the predecessors.
- **Deadline**: Date by when the successor needs the deliverable.
- **Commitment**: Date by when the predecessor can deliver the commitment.

---

## Configuring the Agreement Blueprint

As an application administrator or PMO content designer, you can use blueprints to configure layouts for the Agreements workspace. To learn more see Configure Blueprints for Agreements.

---

## Associate Blueprint with Agreement

You can navigate to the Agreement workspace and use the **Column Picker** to add the **Blueprint** field to the grid. Then, associate the blueprint with the relevant agreement.

---

## Creating an Agreement

You can create a business agreement between investments on the **Agreements** page. After you create the agreement it will be available at the following locations:
- On the **Agreements** page where it can be viewed and edited by users with the appropriate access rights.
- On the **Agreements** module for the investments that are a part of the investment. You can view the agreements if the administrator has added the module as a part of your blueprint.
- On the **Roadmaps Timeline** layout where you can see the agreements between various investments.

Follow these steps:

1. Navigate to the **Agreements** page.
2. Click the **Add Row** icon to create a new agreement.
3. Type the name and press **Enter** to create the agreement.
4. After creating the agreement, populate the **predecessor**, **successor**, **commitment**, and **deadline** fields to ensure the agreement includes relevant information.
5. Select the agreement and click **Details** to open the Details panel.
6. Click **Conversations** and notify the relevant stakeholders about the agreement.

> [!NOTE]
> You can use the **Template** attribute to select relevant agreements as a template. When you use the **Create from Template** option in the Agreements module for various investments, you will be able to select from the various templates that have been selected in this workspace.

---

## Setup View Options

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. **Show Total Row**: Turn on the toggle to show the total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to **Off**. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.

The following table shows the different types of aggregation supported for various types of attributes:

| Aggregation Type | Number, Money, Calculated, Integer | Percent | Date | Boolean | TSV |
|---|---|---|---|---|---|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | | | | |
| Min/Max | Yes | | | | |
| None | Yes | | | | |

5. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
6. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to **Off**.
7. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

---

## Using the Canvas to Manage Agreements

The Canvas layout provides a simple and visually intuitive interface to help you manage your business agreement. You can click a particular view to open the Canvas layout. The default Canvas layout displays include the **Investment Dependencies**, **Conversation**, and **Stakeholders** widgets. The default layout also includes the commitment and deadline fields.

You can configure the layout to add or remove widgets and attributes. Some key points to remember are:
- You can modify the canvas by dragging the available widget or field to the canvas.
- The canvas will display grey shading on the area where the selected widget/field will be dropped.
- You can resize widgets and fields.
- You can configure the data in six columns on the canvas.
- You can include all supported data types except TSVs.
- You can edit data on the canvas.
- When you are editing data, you can only view objects for which you have permission.
- You can use the `@` symbol to notify users while using the Conversations widget.

Follow these steps:

1. Navigate to the **Agreements** page.
2. Click the relevant agreement to open the canvas.
3. Click **Configure** to open the Canvas in editable mode.
4. From the **Configure Canvas** section, drag and drop the relevant fields and widgets to the canvas.
5. Click **Remove** to remove any widgets and fields from the canvas.
6. Point the mouse to a corner of a widget or field and drag horizontally or vertically to change its size.
7. Click **Done** to save your changes.

---

## Setup Layout in the Canvas

You can configure the column layout in Canvas with the following options:

1. 4-Columns
2. 6-Columns
3. 8-Columns

Follow these steps:

1. Navigate to the **Agreements** page.
2. Click the relevant agreement to open the canvas.
3. Click **Configure** to open the Canvas in editable mode.
4. Click the **Layout** tab in the left panel.
5. Select the column layout based on your requirement:
   a. 4-Columns
   b. 6-Columns
   c. 8-Columns

> [!NOTE]
> When you change the layout in the canvas, the following changes occur:
> 1. If the column size increases, the layout retains the previous column size and adds new columns on the right-hand side.
> 2. If the column size is decreased, the layout adjusts the widgets in the right-most columns below all the other widgets.

> [!NOTE]
> **Known Issue**: The UI text does not indicate that PDF export is available for 8-column layouts. However, Canvas allows you to export to PDF using 8-columns. This will be corrected in an upcoming patch of Clarity.

> [!IMPORTANT]
> Some key points to remember while using agreements:
> - When defining predecessors or successors, users can only select projects, ideas, and custom investment types.
> - You cannot include templates while defining predecessors or successors.
> - You cannot include roles, non-labor, teams, or inactive resources in the contributors and owner fields.
> - You can create agreements within the "Agreements" object. You cannot create agreements from investment objects.
> - The canvas will only allow a maximum of 500 items.
> - The Agreements modules for investment objects will not be automatically added to the default blueprint. Administrators will need to manually add the Agreements modules to the relevant blueprints.
> - The canvas supports field-level security.
> - The predecessor and successor fields support field-level security. However, you can only update the Access Edit column. The Access View column will always be set to **All Users**.

---

## Working with Widgets

You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. The following widgets are available:
- Number Tile
- Pie
- Bar
- Progress Ring
- Target (Roadmaps and Staffing Workspace)

Some of the key actions you can perform with widgets are:
- Use the **Show Widgets** button to display the widgets toolbar.
- Use the **Manage Widgets** button to open the **Add Widgets** dialog box to add existing widgets from the **My Widgets** section and the **Widget Library**.
- Create a **New Widget** from the Add Widgets dialog box.
- Enhance your data analysis by using the **Interactive Filtering** feature on widgets, enabling deeper insights through drill-down capabilities.

You can create the following widgets in this release. Each widget supports distinct operations such as **Count**, **Sum**, and **Average**. You can also specify the color of the widget and select the relevant display format (number or percentage).
- **Number Tile Widget**: Displays a specific number based on the widget definition and filter criterion.
- **Pie Widget**: Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the **Sort Order** option) in distinct areas and the remaining results would be grouped in the **Other** category.
- **Bar Widget**: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the **Sort Order** option) in distinct areas and the remaining results would be grouped in the **Other** category.
- **Progress Ring Widget**: Displays a ring with a number based on the widget definition and filter criterion.
- **Target (Roadmaps and Staffing Workspace)**: Displays targets either as goals or constraints on the number and money attributes of the relevant objects.

> [!NOTE]
> To learn more about Widgets, see Widgets.

---

## Additional Capabilities for the Agreement Object

### Create Processes for the Business Agreement Object

You can now create and execute processes for the Business Agreement Object and perform actions.

### Create Custom Sub-Objects for the Agreement Object

Custom sub-objects extend the functionality of the Agreements object by allowing organizations to capture more granular, specialized information that the standard object does not accommodate.

### Create Business Rules for the Agreements Object

Business rules in Clarity are created to control how end-users interact with the system and to automate specific actions based on predefined conditions. You can now create business rules for the Agreements.

### Create Notifications for the Agreement Object

The Agreements object has been enhanced to support notifications.

### Create Action Items for the Agreement Object

You can now create action items for the Business Agreements object in Clarity, significantly enhancing the management and execution of agreements between investments.
