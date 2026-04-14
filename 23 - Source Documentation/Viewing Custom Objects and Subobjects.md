# Viewing Custom Objects and Subobjects

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[02 - Investments/_MOC Investments|Investments]]
- Related domains: [[16 - Development/_MOC Development|Development]]
- Canonical notes:
- [[16 - Development/Studio/Object Views]]
- [[16 - Development/XOG/Object Reference Details]]
- [[16 - Development/Studio/Objects and Attributes]]
- [[16 - Development/Custom Objects/Viewing and Managing]]
- [[16 - Development/XOG/Object Reference]]
- [[16 - Development/Studio/Stock Objects]]
- [[16 - Development/XOG/Object API]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Create a New Custom Object (#create-a-new-custom-object)
- H2: Creating Custom Attributes Associated with the Custom Object (#creating-custom-attributes-associated-with-the-custom-object)
- H2: Creating a SubObject for the Custom Object (#creating-a-subobject-for-the-custom-object)
- H2: Copy Records for Custom Objects and Custom Sub Objects (#copy-records-for-custom-objects-and-custom-sub-objects)
- H2: Rank and Order Custom Master Objects and Sub-Objects (#rank-and-order-custom-master-objects-and-sub-objects)
- H2: API Enable Custom and Stock Virtual Attributes Using XOG (#api-enable-custom-and-stock-virtual-attributes-using-xog)
- H2: Access Rights Associated with Custom Master Objects and Custom-Sub Objects (#access-rights-associated-with-custom-master-objects-and-custom-sub-objects)
- H3: Access Rights Details (#access-rights-details)
- H2: Configuring Custom Objects (#configuring-custom-objects)
- H2: Working with Custom Objects (#working-with-custom-objects)
- H3: Create a New Custom Object Item (#create-a-new-custom-object-item)
- H3: Setup View Options (#setup-view-options)
- H3: Setup Hierarchical Nested Grids (#setup-hierarchical-nested-grids)
- H3: Sub-Grid Capabilities (#sub-grid-capabilities)
- H3: Managing Records By Using the Grid Layout (#managing-records-by-using-the-grid-layout)
- H3: Managing Records By Using the Board Layout (#managing-records-by-using-the-board-layout)
- H3: Working with Widgets (#working-with-widgets)
- H2: Securing Custom Objects (#securing-custom-objects)
- H3: Execute Processes from Clarity (#execute-processes-from-clarity)
- H2: Access Rights Name Updated When You Rename Custom Objects (#access-rights-name-updated-when-you-rename-custom-objects)
- H2: Introducing Vaia (Beta) - Leveraging AI (#introducing-vaia-beta---leveraging-ai)
- H2: CSV Import for Custom Master Objects (Beta) (#csv-import-for-custom-master-objects-beta)
- H3: Introducing Support for Lookups and OBS (#introducing-support-for-lookups-and-obs)
- H3: Importing TSVs by Using CSV Files (#importing-tsvs-by-using-csv-files)
- H3: Introducing Asynchronous Synchronization (#introducing-asynchronous-synchronization)
- H3: Enhancing CSV Import to Support Business Rules (#enhancing-csv-import-to-support-business-rules)
- H2: Reordering Investment Tiles (#reordering-investment-tiles)
- H3: Access Rights (#access-rights)
- H3: Tile Group and Tile Viewing (#tile-group-and-tile-viewing)
- H3: Create a Tile Grouping (#create-a-tile-grouping)
- H3: Edit Tile Grouping (#edit-tile-grouping)
- H3: Tile Group Reordering (#tile-group-reordering)
- H3: Tile Reordering (#tile-reordering)
- H2: Custom Objects: Conversations (#custom-objects-conversations)
- H3: Conversations About Custom Objects (#conversations-about-custom-objects)
- H3: Mention a User Using the @Sign (#mention-a-user-using-the-sign)
- H3: Conversations and Replies (#conversations-and-replies)
- H3: Attach Files in Conversations (#attach-files-in-conversations)
- H3: Conversation Notifications (#conversation-notifications)
- H3: Access Rights for Conversation-specific Actions In Notifications (#access-rights-for-conversation-specific-actions-in-notifications)
- H2: Custom Objects: Action Items (#custom-objects-action-items)
- H3: View Action Items (#view-action-items)
- H2: Audit Module for Custom Objects (#audit-module-for-custom-objects)
- H3: Audit Column Name Mapping (#audit-column-name-mapping)
- H3: Verify Prerequisites (#verify-prerequisites)
- H3: Setup View Options (#setup-view-options)
- H3: View Audit Details (#view-audit-details)

You can now view custom objects and subobjects that are created in Classic PPM in Clarity by API enabling them.

Consider a scenario where an organization uses Clarity to manage products. They now want to capture Net Promoter Score (NPS) for all their products and save them in Clarity. They also want to ask customers certain questions about the support and services processes. However, they want to save this data separately from the NPS scores. Hence, they create a custom master object in Classic PPM called NPS, and API enable it so that it is available in Clarity. They can then create two sub-objects namely Services and Support, API-enable them, and save the relevant information in these sub-objects.

This section contains the following topics:
- Create a New Custom Object
- Creating Custom Attributes Associated with the Custom Object
- Creating a SubObject for the Custom Object
- Rank and Order Custom Master Objects and Sub-Objects
- Copy Records for Custom Objects and Custom Sub Objects
- API Enable Custom and Stock Virtual Attributes Using XOG
- Access Rights Associated with Custom Master Objects and Custom-Sub Objects
- Configuring Custom Objects
- Setup Hierarchical Nested Grids
- Working with Custom Objects
- Securing Custom Objects
- Introducing Vaia (Beta) - Leveraging AI
- Access Rights Name Updated When You Rename Custom Objects

## Create a New Custom Object

You can create a custom object in Classic PPM if you have administrative privileges.

Follow these steps:

1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click **New**.
3. Enter an object name, a unique ID, and a content source.
4. (Optional) In the **Description** field, enter any details that remind you and other developers of the purpose of the object.
5. Select **Master** for a new parent object.
6. Select the **API Enabled** checkbox.
7. Click **Save** to save your object.

To learn more about creating custom objects, see Clarity PPM Studio Objects and Attributes. When you create a new custom object, a blueprint is automatically created in Clarity.

> [!NOTE]
> In our example, we can create a custom master object NPS and API enable it. You can also API enable existing custom master objects in Classic PPM to make them available in Clarity.

## Creating Custom Attributes Associated with the Custom Object

Attributes store information that is associated with object views on grids. For example, **Start Date** and **End Date** are attributes of the Project object. You can open your custom master object or subobject, navigate to the **Attributes** tab, create a new custom attribute and API enable it. This attribute will then be available in Clarity.

## Creating a SubObject for the Custom Object

A subobject is a child of the master object and includes a subset of information that needs to be categorized and made available within the custom object. When you create a subobject in Classic PPM, it is available as a module in Clarity. You can use blueprints to ensure this module is available to authorized users in Clarity.

> [!NOTE]
> You can only add up to a maximum of 50 custom subobjects to an object's blueprint.

Follow these steps:

1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click **New**.
3. Enter an object name, a unique ID, and a content source.
4. (Optional) In the **Description** field, enter any details that remind you and other developers of the purpose of the object.
5. Select **Subobject** if the object is the child of another object that you specify in the **Master Object** field.
6. Select the **API Enabled** checkbox.
7. Click **Save** to save your object.

> [!NOTE]
> To display the custom subobject as a module in Clarity, you need to configure the master object blueprint. For more information, see Add Modules to Blueprints.

## Copy Records for Custom Objects and Custom Sub Objects

Many companies utilize Custom Objects to track additional activities or information related to their business operations and processes. This could include having a list of customers, vendors, licenses, and other information that is critical to running the business. You can now copy records associated with custom objects and sub objects to add new records with minimal data entry. Clarity will copy the parent record and the sub-level records for which the user has access.

Some key points to remember are:

1. You cannot use Blueprint configuration to show or hide specific fields in the Copy Modal.
2. The term "Copy" is prepended to the Name of the object. If the name of the custom object is already 256 characters, you need to reduce it to ensure "Copy" can be appended.
3. The Copy modal will hide studio-required fields that are empty, and the studio-defined default value is defined.
4. The Copy modal will show studio-required fields that are empty and do not have a studio-defined default value.
5. The ID Auto-Numbered fields are hidden in the Copy modal.
6. In case you have existing records for custom objects and you create a new mandatory field, ensure you specify a default value and select the **Populate Null Values with the Default** check box.

Follow these steps:

1. Open the **Custom Objects** page.
2. Select the relevant custom object to view the various items.
3. Select the relevant record.
4. Click **Copy** to open the Copy Modal.
5. Enter the name of the new record and the associated ID and click **Copy**.

## Rank and Order Custom Master Objects and Sub-Objects

Consider a scenario where your product management team creates a custom object for "Product Features" with various attributes, such as complexity, estimated development time, and customer impact. You can now select the **Drag-and-Drop Order Enabled** attribute in Classic PPM for this object. Clarity will create a virtual **Order** attribute for the associated object, allowing end users to prioritize various features by simply dragging and dropping them into the Product Features grid. You can then select the **Recalculate Order from Sort** option to automatically sort the records based on the value in the Order column.

Some key benefits of ranking and ordering custom objects and subobjects are:
- **Intuitive Visual Prioritization**: The drag-and-drop interface offers a visual and intuitive way to prioritize items.
- **Efficient Collaboration**: Team members can collaborate effectively to decide the order and prioritize options.
- **Consistent Data Organization**: It enables all users across the organization to follow the same process for ranking records, thereby maintaining a central source of truth.

> [!NOTE]
> Some key points to remember are:
> - You can secure the Order column to ensure only relevant users can leverage the drag-and-drop capability. If you don't secure the Order column, Clarity does not enforce any additional security measures on the Order attribute.
> - The **Recalculate Order from Sort** option will trigger the Recalculate Order from Sort job. This job calculates the new value of the Order attribute based on the current sort and applies it to all records.
> - When you access the Custom Objects workspace, where the Recalculate Order from Sort job is currently calculating the new order, you will see a warning message asking you not to update the sort order.
> - The Recalculate Order from Sort option is not supported for objects with more than 100,000 records.
> - Drag-and-Drop Order Enabled is not supported for objects containing more than 100,000 records.

## API Enable Custom and Stock Virtual Attributes Using XOG

You can use XOG to API enable stock and custom virtual attributes in Classic PPM. Custom Virtual attributes are only defined on sub-objects. A virtual attribute is a read-only attribute on the sub-object that is linked to a specific attribute on the master object.

> [!NOTE]
> You cannot use Classic PPM to API enable stock and custom virtual attributes.

## Access Rights Associated with Custom Master Objects and Custom-Sub Objects

The Global, OBS, and Instance rights in Classic PPM are supported for custom objects and custom sub-objects. However, custom sub-objects also include parent-specific rights.

All users need the **Custom Object - Navigate** access right to view the Custom Objects page in Clarity.

### Access Rights Details

| Action | Access Rights |
|--------|-------------|
| **Create** | User has Parent - View instance right (includes Parent - Navigate). Does not automatically grant 'Edit' access. User has one of the following: `<Custom Master Object> Create` global right, or `<Parent> - Create - <subobject>` |
| **View** | User has Parent - View instance right (includes Parent - Navigate). User has one of the following: `<Custom Master Object> View All` global right, `<Custom Master Object> View` instance right, or `<Parent> - View All - <subobject>` |
| **Edit** | User has Parent - View instance right (includes Parent - Navigate). Includes the ability to delete. User has one of the following: `<Custom Master Object> Edit All` global right, `<Custom Master Object> Edit` instance right, or `<Parent> - Edit All - <subobject>` |
| **Copy** | User has Parent - View instance right (includes Parent - Navigate). User has one of the following to copy `<Parent>` instances: `<Parent> - Copy` global access right, or `<Parent> - Copy - <subobject>` OBS/instance access right. This access right allows copying sub-object instances through the parent object. User has one of the following to copy `<subobject>` instances: `<subobject> - Copy` global access right, or `<subobject> - Copy - <subsubobject>` OBS/instance access right. This access right allows copying Level 2 sub-object instances through the Level 1 sub-object. |
| **Delete** | Capability to delete an instance is granted through the 'Edit' access right. It is not a separate right. If a user can Edit an instance, the user will be able to delete the same instance. |

## Configuring Custom Objects

As an application administrator or executive stakeholder, you can use blueprints to configure layouts for custom objects. When you create a custom object and API enable it, a blueprint is automatically created in Clarity. All your API-enabled subobjects associated with the object are available as modules.

You can create a copy of the default blueprint that is created and edit it. You can then configure the Details layout based on your business requirements. You can also add various sub-objects as modules to ensure they are available to authorized users.

To learn more about blueprints, see Custom Investments and Custom Objects: Configure Blueprints.

## Working with Custom Objects

### Create a New Custom Object Item

You can create a new custom object item in one of the following ways:

1. Create a new object item using the **+** button in the Grid layout.
2. Create an object item using the **Insert Row Below** in the Grid layout.
3. Create an object item using the **New Card** button in the Board view.

> [!NOTE]
> Clarity automatically adds the required fields to the grid or the Details panel when creating a custom object item.

### Setup View Options

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
5. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
6. **Show Nested Subobjects**: Turn on the toggle to view and engage with sub-instances across multiple master instances concurrently.
- **Nested Subobject**: You can choose the specific sub-object to display its sub-object instances within the sub-grid.
7. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.

> [!NOTE]
> If you see per-period metric details in the View Options, check out the Complete View Options in Grid section.

### Setup Hierarchical Nested Grids

You can view and manage sub-instances across multiple master instances concurrently.

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the grid layout.
3. In the grid layout, click **View Options**.
4. Turn on the **Show Nested Subobjects** toggle.
5. In **Nested Subobject**, you can choose the specific sub-object to display its sub-object instances within the sub-grid.
6. Master Grid rows show the **Expand** button.
7. Expand the Master Instance to view the Sub-Grid.

You can view the sub-grid under the master instance.

> [!NOTE]
> Some of the key points to remember are:
> - Any configuration modifications to sub-grids, such as filters, columns, and sorting, are implemented across all sub-grids.
> - When accessing a Details panel, choosing a sub-grid will exhibit the specifics of the sub-instance, as anticipated.
> - Adjustments made in the View options, like decimal preferences, per-period metrics, and text wrapping, are implemented in both the master grid and sub-grids.
> - Certain functionalities, including Export to CSV, Creating a new instance, Data Grouping, and Aggregated Totals row, are inaccessible while viewing sub-grids.

### Sub-Grid Capabilities

The sub-grid is a generic grid supporting most Standard grid capabilities.

Some of the key actions you can perform within a sub-grid are:
- You can right-click a cell on a row to view a context-sensitive menu. Using the right-click context menu, you can:
- Open the Details Panel
- Delete the row
- Star various items to mark them as a favorite
- Create a chart using the data in the sub-grid
- You can hover over a column header to display the Column Heading Options menu with choices for pinning, autosizing, and resetting columns.
- You can use the column filter functionality to quickly identify records of a specific column that match your selection criterion. You can also use different operators in your filter criteria to be more specific about the data you want.
- You can use the Column Panel in the hamburger menu of every column to add or remove columns from the sub-grid.

### Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Edit Data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the **Conditional Formatting** dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the **Column Panel** to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the **+** or **-** option to shift the values in the date field.
- Use the **Drag Functionality** to populate data.
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

### Managing Records By Using the Board Layout

You can use the Board layout to view items as cards. You can arrange these cards with drag-and-drop precision on a board layout with columnar swim lanes. Some key features associated with cards are:
- The board layout does not provide the option to create new cards.
- Cards can now display two title fields per card and display the width of the card. If you configure the investment name, it will hyperlink to the relevant investment.
- You can configure a maximum number of six fields across two columns per card.
- You can configure a maximum of six metrics per card, which are configured up to three columns across. Metrics are displayed in an abbreviated format.
- Cards appear in your choice of colors based on the value you select in the **Color** field in View Options. Your color selections are saved with the view.
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

### Working with Widgets

You can review and summarize the health of your business by using a series of configurable visual widgets in Clarity. In this release, the following widgets are available:
- **Number Tile**
- **Pie**
- **Bar**
- **Progress Ring**
- **Target** (Roadmaps and Staffing Workspace)

Some of the key actions you can perform with widgets are:
- Use the **Show Widgets** button to display the widgets toolbar.
- Use the **Manage Widgets** button to open the Add Widgets dialog box to add existing widgets from the My Widgets section and the Widget library.
- Create a **New Widget** from the Add Widgets dialog box.
- Enhance your data analysis by using the **Interactive Filtering** feature on widgets, enabling deeper insights through drill-down capabilities.

You can create the following widgets in this release. Each widget supports distinct operations such as Count, Sum, and Average. You can also specify the color of the widget and select the relevant display format (number or percentage).
- **Number Tile Widget**: Displays a specific number based on the widget definition and filter criterion.
- **Pie Widget**: Displays a pie chart based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- **Bar Widget**: Displays a bar graph based on the widget definition and filter criterion. You can then select the relevant field in the **Group By** drop-down list and the **Aggregation Type** attribute. You will see the top three results or the bottom three results (determined by the Sort Order option) in distinct areas and the remaining results would be grouped in the Other category.
- **Progress Ring Widget**: Displays a ring with a number based on the widget definition and filter criterion.
- **Target** (Roadmaps and Staffing Workspace): Displays targets either as goals or constraints on the number and money attributes of the relevant objects.

> [!NOTE]
> To learn more about Widgets, see Widgets.

## Securing Custom Objects

You can now secure custom object attributes by using Field Level Security (FLS). You can leverage the Clarity common grid to secure attributes. Once an attribute is secure, it will have a secure icon adjacent to it. This icon is displayed in the Grid layout, the Details panel, and the Properties module.

When a user with the View access right tries to edit the attribute in the grid, they will see a denial icon displayed and the field will be greyed out. Users who do not have View or Edit access will not have an option to add the secured attribute to their view. If the user accesses a saved view where a secured attribute is included then the view is presented without that attribute, in an unsaved state.

> [!ATTENTION]
> - You need the **Administration - Access and Attributes Management - Navigate** access right to setup FLS.
> - You can assign access right only to user groups.
> - Clarity Business rules take precedence over FLS.
> - FLS takes precedence over Instance/OBS/Global rights.
> - Field level security is only applicable to Clarity. FLS does not impact Classic PPM views.
> - You can only secure attributes whose REST API aliases are populated.

To learn more about field-level security, see Secure Field Level Access.

### Execute Processes from Clarity

You can execute a process from projects, custom investments, ideas, roadmap items, master objects, and the Business Agreement object in Clarity. Consider a scenario where you have specific custom attributes associated with an object. You want to lock these attributes after updating them so that they cannot be updated till the object instance is ready to be archived.

In previous Clarity releases, you needed to open Classic PPM and execute a process to lock these attributes. You can now execute a process from the Properties module. You can only execute a process from Clarity when the following conditions are met:
- You have the **Process Start** or **Process Manage** access rights.
- The process has been added to the associated blueprint.

Follow these steps:

1. In Clarity, open the relevant object instance.
2. On the **Properties** module:
   a. Select **Actions** and click the relevant process to execute it. The Actions button is available if there is more than one process associated with the investment.
   b. Select the Process if that is the only process associated with that blueprint.

> [!IMPORTANT]
> Some key points you need to remember are:
> - You can only call processes where `Active=TRUE` and `Available for On-Demand Start=Yes`.
> - If you delete a process definition in Classic PPM, it will remove the generic action for all blueprints using that process definition.
> - When you execute a process in Clarity, you will see a message stating that the process has started successfully.
> - The **Actions** button is only available under the Properties module.
> - You can add a maximum of 50 processes to a blueprint.
> - If a process is on hold or disabled, you will get a run time error in Clarity.
> - Processes executed by using the Actions button will NOT enforce any partition logic configured on the process definition. If the user selects that generic action, a runtime error will be displayed.
> - All actions defined on the blueprint will display to the end-user, but the end-user will get a run-time error if the end-user selects an action and does not have the process start or process manage to start that process.
> - The **Hide Actions** capability enables you to leverage business rules and enforce fine-grained access control capabilities for actions.

## Access Rights Name Updated When You Rename Custom Objects

When you change the name of Custom Objects, you can use the **Push Object Captions** icon to update OBS access rights, Instance Rights, Global Rights, and Sub-object master object names to reflect the updated Custom Object name.

> [!IMPORTANT]
> Some of the key points you need to remember are:
> - The "Push Object Captions" functionality is limited to Custom Master Objects and is not available on Custom Sub Objects, nor Custom Sub Sub Objects. Due to this, the custom sub-object and custom sub-object-related rights may still be out of sync with the latest name of those objects. However, the combination rights generated on a Custom Master Object (like `<Master_Object> - Delete All - <Sub_Object>`) will still reference the latest name of the Master Object and the Sub Object once the "Push Object Captions" functionality is used on the Master Object.
> - The Sub Page rights that get generated when the page is secured will also get updated.
> - When you push the object name change, it does not update the "Blueprint" name in Clarity.
> - The Object ID and Attribute ID are not updated when you change the name of the Custom Object.

## Introducing Vaia (Beta) - Leveraging AI

Vaia highlights Clarity's first foray into leveraging public AI models to simplify various user tasks. In this release, you can use Vaia to define Generative AI for any Rich Text Field (RTF) attribute based on the fields you configure in this workspace.

This capability is available for the following objects and sub-objects:
- **Objects**: Projects, Ideas, Custom Investment types (CIT), Hierarchy, Objectives, Plan, Roadmaps and Custom Master Object (CMO)
- **Sub-objects**: Risk, Issue, Change Request, Status Report, and Task

To learn more about configuring Vaia, see Configuring Vaia (Beta).

After you have set up Vaia, you can perform the following actions using the **AI Actions** button:
- Click the **Generate Content** option in the AI Actions button to generate the text for the field.
- If you have already entered some information, the **Revise Content** option will be enabled in the AI Actions. Click **Revise Content** to view the revised content.
- You can use the **Grade Content** option to grade the content in the field. On clicking the Grade Content, the following actions occur:
- The AI displays the grading result in a new pop-up window. Review:
- Previously generated grades.
- Each grade includes a date for reference.
- Specific strengths and areas for improvement.
- Examples illustrating content enhancement.
- Regenerate/Refresh the grade as needed.
- Close the grade pop-up window and reopen it anytime by requesting the Vaia to grade.

> [!NOTE]
> Some key points to remember are:
> - This feature uses a Generative AI service. The Generative AI service uses emerging technology, may provide inaccurate generated output, and is not designed for or intended to meet your regulatory, legal, or other obligations. Always review AI-generated content for accuracy and make adjustments as needed.
> - This feature is toggled off, and you must create a support ticket to toggle it in your environment.
> - Users need a Google Cloud Platform/Open AI service account with appropriate permissions to use this functionality.
> - If the AI API key is not configured correctly, then the end user will see an error message on the screen.
> - If the configuration under "Vaia (Beta)" is disabled, the end user will see the following error message: `API 1019: Could not process the request due to internal error`.
> - The text generated depends on the AI Service Model utilized. It has been observed that AI models can change the text format over time, and the result displayed in Clarity would be impacted.

## CSV Import for Custom Master Objects (Beta)

Customers use Microsoft Excel to manipulate data before entering it into Clarity. You can now use the Generic CSV Import ability to import data into investments in Clarity.

Some key points to remember are:
- The CSV file's data must be correctly formatted. Ensure your CSV file includes all the mandatory fields associated with the Custom Master Object.
- Set the CSV Export format to **Export/Import** in the **General** tab of the **Settings** panel.
- You can import a maximum of 250 records.
- Clarity will not import Business rules on CSV import.
- The import action will fail if you have duplicate lookups in the CSV file.

The following data types are supported:
- Number
- Percentage
- Strings
- Dates (Fixed)
- Boolean
- Lookups
- Static Dynamic (SVL/MVL)
- Money (Single currency Clarity System)
- TSV

A new **Export/Import** option has been introduced in Clarity. When you are exporting a CSV in Clarity to import it back again, you need to select this option. Clarity will export the necessary header rows to allow you to import the CSV file into Clarity.

When you have to export or import CSV files with dynamic lookups:
- Clarity will only export records that are displayed on the grid.
- End-users can copy and paste lookup labels and IDs from other records to change dynamic lookup values.

> [!NOTE]
> Some key points you need to remember are:
> - Business Rules are not enforced during CSV Import.
> - Clarity does not compare the values in the CSV import file with the values on the Clarity server before importing them. Hence, the Last Updated Date and Last Updated By fields for every imported record.
> - If you are auto-numbering IDs, leave the ID value blank in the CSV Import file to create a record -- entering the value of the ID will update the record.
> - When using CSV Import, the user must use the same language/locale as the exported CSV file, or incorrect import results may occur.
> - The following data types are not supported: Rich Text/Long String, OBS, Picklist, Attachment, URL, Parameterized, and Static Dependent Lookups.
> - When you Import Updates to MVLs, it will overwrite the existing values.

Follow these steps:

1. Click **Avatar**, **Settings**, **Generic**, and select **Export/Import**.
2. Click any investment in Clarity.
3. Configure the grid with the attributes you want to be populated when you insert.
4. Filter grid for records to use as a template for creating new records.
5. Select **Actions** and click **Export to CSV**.
6. Update the CSV file with the relevant information.
7. Click **Import CSV** and select the relevant CSV file.
8. Click **Open** to complete the import process.
9. You will get an **Import Successful** message.

### Introducing Support for Lookups and OBS

When you export a CSV file from a workspace that includes OBS data associated with an entity, Clarity will not include the forward slash in the CSV export. However, the CSV Import will support the OBS value with or without the forward slash. Enter the full path of the OBS value in your CSV Import file.

The Lookup ID format has been enhanced to support curly braces instead of parentheses. Hence, you will now need to enter `Berks, Paul {pberks}` instead of `Berks, Paul (pberks)` while adding lookup values to the CSV Import file.

> [!NOTE]
> Some key points to remember are:
> - You can now enter the lookup label value for dynamic lookups in the CSV Import file. In previous versions, you had to enter both the lookup label value and the associated lookup ID. You can continue to use the lookup ID format in case there are duplicate label names. In summary, the following formats are now supported:
>   - Lookup Label Value
>   - Lookup Label Value {lookup ID}
> - On investments, the "Default Resource OBS Unit" is technically a dynamic lookup, but it is displayed like an OBS. If you Export to CSV and then Import from CSV, the import from this attribute will fail. Users will need to remove path information to only show the base label.

### Importing TSVs by Using CSV Files

Clarity now enables customers to add Time Scaled Values (TSVs) into CSV files and import them into Clarity. You can navigate to the Custom Objects grid and click **Export to CSV** to download the CSV file. The file includes three-row headers that allow customers to input TSV information.
- **First Row** - TSV period name
- **Second Row** - TSV API attribute name
- **Third Row** - TSV attribute name

When you upload the CSV file, Clarity uses the first row to determine the period (week/month/quarter/years) and then processes the period value. The CSV import is based on the language and locale of the end users.

> [!NOTE]
> Some key points to remember are:
> - TSV Number, Money, and Percentage data types are supported for the CSV import capability.
> - TSV Total values are not supported in CSV Import and are ignored during import.
> - If Clarity detects duplicate Fiscal Period Names on the default entity, it will abort the CSV Import. You must fix the duplicate period names to use CSV Import capability.
> - TSV Money attributes only support single currency Clarity instances.
> - Clarity will use the system currency defined in Financial Management while processing TSV Money attributes during the CSV Import.
> - You do not need to provide contiguous values in the TSV Import file.
> - Clarity allows users to specify TSV Period labels in the language specified in a user's language setting. Clarity uses the translation specified in the Entity Fiscal Time Periods to match the user's language to the translation.
> - You cannot update any attributes using the "Active Currencies" lookup definition via CSV import.
> - CSV Import Files does not support TSVs with different period types within the same file.
> - Custom master objects only support calendar TSV, but Clarity leverages the fiscal TSV configuration from the default entity when using CSV Import for TSVs.
> - Business Rules on custom master objects are not enforced during CSV Import.

### Introducing Asynchronous Synchronization

The CSV Import process is now asynchronous to ensure that importing a significant volume of data does not compromise Clarity's performance. You will see a notification indicating the outcome of your import action. You can click the notification to get more details about the outcome of the import action.
- Notifications with a **green checkmark** mean your CSV Import was successful with no warning or error messages.
- Notifications with a **yellow diamond** mean your CSV Import records were imported, but one or more of your attribute columns were not imported and would need to be updated manually. For example, URL datatypes and Starred attributes are not supported for CSV Import.
- Notifications with a **red triangle** mean some or all of your records in your CSV import had errors and did not import into Clarity. You can download the error CSV file with the records that did not get imported and the reasons why they did not import.
- Notifications with a **red blocked symbol** mean the system had trouble processing the CSV file, and the import was aborted. An example of this error is that your CSV import file does not have the correct header row at the top of the file or the file has incorrect delimiters separating attribute values.

> [!NOTE]
> Some key points to remember are:
> - CSV Import Notifications will display faster when the PPM Broker is enabled.
> - Email notifications will not be sent out for CSV Import.
> - If an attribute has field level security (FLS) and it is read-only for the user, the CSV Import for that record will not get imported.

### Enhancing CSV Import to Support Business Rules

This CSV Import capability has now been enhanced to support Business Rules defined by Clarity administrators. This enhancement is crucial because administrators define Business Rules based on organizational mandates. Hence, the ability to implement these rules while importing investment data by using CSV files is vital.

> [!NOTE]
> Some key points to remember are:
> - Clarity only executes Business rules if you use CSV files to update existing records. Clarity will not enforce business rules if you use the CSV Import capability to create new records.
> - Clarity supports validating the **View Page** and **Attribute Update** business rules while importing data from CSV files.
>   - The View Page type business rule executes every time a user views a page. This rule type supports only one complex condition.
>   - The Attribute Update business rule executes every time you change the value of a selected attribute.
> - If Clarity does not import certain records due to business rule violations, you can download the CSV file from the Notifications area and review the error messages.
> - Clarity will ignore Required Rules while importing data from CSV files.

Clarity will compare the attribute value in the system with the CSV file. It will only update attributes if the values differ between CSV File and Clarity. Hence, Clarity will not update a false audit trail by updating a record with the same values.

To learn more about business rules, see Working with Business Rules.

## Reordering Investment Tiles

Clarity administrators have the ability to group and reorder Custom Investment and Custom Master Object tiles to enhance usability for easier access to custom investments.

This section contains the following topics:
- Access Rights
- Tile Group and Tile Viewing
- Create a Tile Grouping
- Edit Tile Grouping
- Tile Group Reordering
- Tile Reordering

### Access Rights

To group or reorder investment tiles, ensure that the following access rights are enabled for Custom Investments and Custom Master Objects:

| Supported Objects | Capability | Rights Required |
|------------------|-----------|----------------|
| Custom Investments | Create, Update, Delete, and Reorder Tile Group | Custom Investment - Navigate, Tiles - Administer |
| Custom Investments | Add and Remove Tile from Group | Custom Investment - Navigate, Tiles - Administer, [Custom Investment] - Navigate |
| Custom Investments | Reorder Tile in a Group | Custom Investment - Navigate, Tiles - Administer, [Custom Investment] - Navigate |
| Custom Investments | View Tile Group | [Custom Investment] - Navigate (For at least one Tile in the Tile Group) |
| Custom Investments | View Tile | [Custom Investment] - Navigate |
| Custom Master Object | Create, Update, Delete, and Reorder Tile Group | Custom Object - Navigate, Tiles - Administer |
| Custom Master Object | Add and Remove Tile from Group | Custom Object - Navigate, Tiles - Administer, [Custom Master Object] - Navigate |
| Custom Master Object | Reorder Tile in a Group | Custom Object - Navigate, Tiles - Administer, [Custom Master Object] - Navigate |
| Custom Master Object | View Tile Group | [Custom Object] - Navigate (For at least one Tile in the Tile Group) |
| Custom Master Object | View Tile | [Custom Master Object] - Navigate |

### Tile Group and Tile Viewing

You can View Tile Groups and Tiles as follows:
- You can only see Tile Groups that have Tiles.
- You can see a Tile Group if you have access rights to see at least 1 Tile within that Tile Group. If the User does not have access rights to see any Tiles in a Tile Group, then that Tile Group will be hidden.
- You can see the ungrouped section if you have access rights to see at least 1 Tile within the ungrouped section. If the User does not have access rights to see any Tiles in the ungrouped section, then the ungrouped section will be hidden.
- You can only see Tiles you have access rights for.

### Create a Tile Grouping

Administrators can Create, Update, and Delete Tile Groups.

1. In the Custom Investment or Custom Master Object page, click the **Configure** button to Create, Update, or Delete a Tile Group. Tiles in a Deleted Tile Group are moved to an ungrouped section.
2. Click the **New Group** button to create a new Tile Group.
3. Populate **Group Name** and select a **Color** for the Group. A New Tile Group is added to the top of the Tile Groups. Note that the Tile Group Name has localization support.
4. Click the **Done** button when all Tile configurations are complete. New Tiles (including newly API enabled Objects) are placed in an ungrouped section by default.

### Edit Tile Grouping

Administrators can Add or Remove Tiles from a Group as follows:

1. Click the **Configure** button.
2. Drag and Drop a single Tile in or out of Tile Group or ungrouped section.
3. Click **Done** button when finished.

### Tile Group Reordering

Administrators can Reorder Tile Groups as follows:

1. Click the **Configure** button.
2. Click the **New Group** button to Create a new Tile Group.
3. Drag and Drop Tile Group Drag Handle to desired location.
4. Click **Done** button when finished.

### Tile Reordering

Administrators can Reorder Tiles within Tile Groups as follows:

1. Click the **Configure** button.
2. Drag and Drop Tile Drag Handle to the desired location within the Tile Group. Note that you can also reorder Tiles in the ungrouped section.
3. Drag and Drop Tile Group Drag Handle to desired location.
4. Click **Done** button when finished.

## Custom Objects: Conversations

You can start a conversation or post your comments in a reply message with optional attachments and links. Conversations are a collection of replies to an original theme or question. Conversations provide a collaborative forum for all team members to discuss, document, and solve issues.

This section contains the following topics:
- Conversations About Custom Objects
- Mention a User Using the @Sign
- Conversations and Replies
- Attach Files in Conversations
- Conversation Notifications
- Access Rights for Conversation-specific Actions In Notifications

### Conversations About Custom Objects

Stay in touch with your team, ask questions, and resolve issues using conversations.

> [!NOTE]
> Users need to have the `<Custom Master Object Name> - Navigate` access rights to view the specific custom object page in Clarity.

Follow these steps:

1. Open a custom object item.
2. Click the **Conversations** tab.
3. Enter your message in the **Start a conversation** box and click **Post** or press the **Enter** key. Other users can enter their messages in the Reply box.

### Mention a User Using the @Sign

In conversations, use the @ sign to mention other users. Mentioning someone by name sends a new notification to alert them to reply.

Tips for Using the @Sign:
- You do not have to remember the complete name of the person that you want to mention. After the @ sign, enter the letters of the first or last name. Suggested team members appear.

> [!IMPORTANT]
> You must have the **Resource - View - All** access right to get the list of Clarity users.
- All active and locked team members can be mentioned. Inactive team members do not appear and cannot be mentioned.
- In conversations, up to eleven (11) suggested names appear.
- We recommend you mention no more than 20 users in a single conversation.

### Conversations and Replies

All conversations display the following behavior:
- The most recent conversation appears first; the most recent reply in a conversation appears last.
- Click **Refresh Conversations** to see the two most recent replies in a conversation. If a conversation has more than two replies, click **SHOW ALL** to expand and view the list of remaining replies. Click **SHOW LESS** to view the two most recent replies.
- Only the user who posted a conversation can edit or delete it.

> [!NOTE]
> - When you delete a conversation, the application also deletes all replies. You cannot recover a deleted conversation.
> - A conversation supports up to 200 replies.
> - You can enter a maximum of 1300 characters in a post or reply. Spaces, special characters, line breaks, and @mention strings count toward the 1300-character limit.
> - To add a new line in a comment, press **Shift + Enter**.
> - HTML content is not supported in conversations; however, you can add links to other content. You can copy and paste links or can enter them directly. After you click the Post button, the URL appears as a hyperlink. Users can click a link to view the content in a new browser tab.
> - Conversations support the following URL formats: `www`, `http://`, `https://`, `ftp://`, `sftp://`

> [!TIP]
> Do not enter values inside angle brackets in data fields in Classic PPM or Clarity. For example, avoid typing `<abc>` or `<value1>` using angle brackets for placeholder text. The coupled angle brackets are not a supported special character combination and can produce unexpected results.

### Attach Files in Conversations

You can upload and edit up to five attachments to each comment in a conversation.

Follow these steps:

1. Open a conversation. A **Reply...** prompt appears for the next comment.
2. In the new reply, click **Attach**. To add attachments to a previous comment, click the **Options** menu and select **Edit** and then click **Attach**.
3. Select the file you want to attach. Press and hold down the **Ctrl** key to select up to five files. Click **Open**. Thumbnails of the attached files appear below the comment.
4. Add or edit your reply text. You cannot attach a file without entering an associated comment.
5. Click **Post** or press the **Enter** key. The file attachments are uploaded.
6. (Optional) To delete an attachment, click the **Options** menu and select **Edit**. Click **X Delete**.
- When you delete a reply, the application also deletes any attachments.
- When you delete a custom object, the application also deletes any associated conversations. Even attachments are also deleted.

> [!TIP]
> File attachments follow the same restrictions as project documents. As an administrator, you determine project document settings. For example, the maximum size of an attachment is 20 MB. To limit acceptable file types, you can also set the **Authorized File Extensions** field. See Configure General System Settings.

### Conversation Notifications

Notifications alert you about conversation activity when a user mentions you or your team.
- To view your notifications, click the **notifications bell** icon at the top of all pages in Clarity.
- The number of new notifications appears on the notifications bell. The number disappears when you click the bell.
- The notifications panel displays the avatar of the sender and the first line of their message.
- Scroll up or down to view all notifications on the panel.
- To open a notification, click one in the list. Supporting details about the context of the conversation appear. You can reply, edit, or delete the message. You can also navigate to the specific page from the notification message window. Click **Go to `<Custom Master Object>`**.
- If a user is mentioned more than once in a single message, they are notified only once.
- To delete a specific notification, hover over the notification and click **Delete**. To delete all notifications, click **CLEAR ALL**. The notifications are deleted for the specific user.
- If a conversation is deleted, the notification is also deleted.

> [!TIP]
> - You can personalize the way that you receive notifications. By default, the application sends you conversation notifications by e-mail, SMS text message, and on-screen. See Set Up Notifications in Personalize Clarity: Change Password, Account Settings, Notifications, Export to Excel.
> - As an administrator, you can modify the two notification templates for conversations. These templates define how notifications appear in the application:
>   - Conversation - Mentioned in a conversation
>   - Conversation - Mentioned in reply to a conversation
>   - See Configure Notifications and Notification Templates.

### Access Rights for Conversation-specific Actions In Notifications

| # | Actions | Access Right Needed |

|---|---------|-------------------|
| 01 | To view the message | None |
| 02 | To reply to the message | None |
| 03 | To attach the files | None |
| 04 | To go to the specific Custom Master Object | Custom Master Object - Navigate |

## Custom Objects: Action Items

The Action Items module displays the Process Action Item status and approval details for each Action Item associated with the Master Object. This module is available in Projects, Ideas, CMO, and Custom Investments. You need no new security rights for this module. If you have access to view the Investment, you can view all the Action Items for the investment.

Once you have configured Action Items in the blueprint, you can view the Action Items module in the investment page. The module will display all Action Items for that Investment regardless of whether the User is an Assignee. Users who have access to view the Investment can view all the Action Items for that Investment.

### View Action Items

Action Items assigned to the logged-in User will be displayed except manual actions created in Classic. By default, View History is collapsed. When expanded, the stage and lifecycle history of the Action Item is available for viewing. The Date and Time format will be set in **Settings > General** and displayed in the User's time zone (not the server).

Follow these steps:

1. Open a master object.
2. Click the **Action Items** tab. All Action Items for that Investment, regardless of whether the User is an assignee, are displayed. Each Action Item displays the Subject, Description, Object Type, Object Instance Name, Object Instance Link (for Master Objects only), and Priority that apply to that Action Item. You can see a counter to track the number of Action Items belonging to each state respectively.
- **Open**: Action items that are awaiting the user's action.
- **Pending**: Action Items that have been acted by the user but are pending with other users.
- **Closed**: Actions completed.

> [!NOTE]
> Some key points to remember are:
> - Process Action Items created in Classic and Action Items from the new Library will display grouped by Open Items and Closed Items.
> - Sorted by the most recent initiated Action Item first, ties will then sort alphabetically by Action Item Subject.
> - By default, a summary of Open Items with Closed Items collapsed will display.
> - Summary mode will display Subject, Priority, and the current Stage summary for each Action Item.
> - Module will display all Action Items for that Custom Master Object regardless of whether the User is an Assignee.
> - Users who have access to view the Custom Master Object can view all the Action Items for that Object.
> - Action Item details are displayed in the order they occurred. They will have one of three States during their lifecycle:
>   - **Initiated**: No actions have been taken yet. Triggered By, Initiated Date/Time, Sent To List.
>   - **Decisions**: At least one Assignee responded. For Every Action: Who Responded, Action Taken, Date/Time of Response.
>   - **Closed**: Action Item is completed. Date/Time Action Item was Closed.
> - Date and Time format will be set in User Settings under General displayed in the User's time zone (not the server).
> - While the Sent To Recipient list for each Action Item is displayed, the criteria or number of actions required to close the Action Item is not displayed.
> - The Sent To Recipient list is displayed in alphabetical order. If there is more than one line of Sent To Recipients, you have a link available to Show All or Show Less.
> - Both process Action Items and Action Items are displayed in the Library triggered by Business Rules.
> - Action Items for Sub-Objects are not shown.

## Audit Module for Custom Objects

The Custom Objects workspace in Broadcom Clarity represents a critical component of the platform's extensibility, allowing organizations to create tailored business objects that meet their specific needs beyond standard functionality. The auditing capability for Custom Objects is essential for maintaining organizational control, compliance, and data integrity.

Some key benefits of leveraging auditing in the Custom Objects workspace are:
- **Business Process Customization and Governance**: Custom Objects in Clarity allow organizations to define and manage unique business processes and data structures tailored to their specific requirements. Auditing provides a systematic way to track all changes made to these custom business objects, ensuring that modifications are properly documented and traceable.
- **Data Integrity and Change Management**: The Audit module for Custom Objects provides a detailed, time-stamped record of all changes made to custom objects, including what was changed, when, and by whom.
- **Regulatory Compliance and Accountability**: The audit capability for Custom Objects supports compliance with regulatory requirements by providing comprehensive documentation of all activities related to custom business processes.

The Audit module grid column names used in Clarity are different from those in Classic PPM. You can filter for all API-enabled Objects, but are limited to those that are audit-enabled through Classic PPM.

### Audit Column Name Mapping

| Clarity Audit Name | Classic Audit Name |
|-------------------|-------------------|
| Name | Object Name |
| Object ID | Object |
| Record | Name |
| Parent | Parent Name |
| Changed Date | Date |
| Attribute | Attribute |
| Attribute ID | Attribute Code |
| Changed By | Changed By |
| Operation | Operation |
| Old Value | Old Value |
| New Value | New Value |
| Record ID, Parent ID, Grandparent, and Grandparent ID | Not visible in Classic |

### Verify Prerequisites

Before you begin using the feature, ensure that you have the following permissions:
- You must have **Audit Trail - View - All**, which allows you to view Audit Trail for any object in Classic and Audit for any object in Clarity.
- As an administrator, if you want to grant access rights to the users to access both the Audit tile and the Audit module, then:

| Location | Access Right |
|----------|-------------|
| Administration > Audit tile | Administration - Audit - Navigate |
| Audit Module | Audit Trail - View - All |

### Setup View Options

You can adjust your view of the page to show fiscal or calendar per-period metrics (also known as time-scaled values, or TSVs).

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. In **Periods**, select a unit of time (Weeks, Months, Quarters, Years).
5. In **Type**, specify whether you wish to set up Per-Period Metrics using Periods or Duration:
- **Periods**: Set the Start Period and End Period. The application adjusts the time periods based on the value that you selected for periods.
- **Duration**: Set the Start Period and indicate the number of periods (Duration), with an optional offset from the start.
6. Define if you want to see **Sum of Periods** or **Grand Totals** in the Totals column.
- **Sum of Period** displays the Total (e.g., Actual Cost) for the number of periods in the layout.
- Example: If an Investment has a duration of 12 months; the page is configured to display 6 months. If Sum of Periods is selected then the Totals column will sum up the (e.g., Actual Cost) 6 months displayed in the layout.
- **Grand Total** displays the Total (e.g., Actual Cost) for the duration of the Investment regardless of how many periods are displayed in the layout.
- Example: If an Investment has a duration of 12 months; the layout is configured to display 6 months. If Grand Totals is selected then the Totals column will sum up the (e.g., Actual Cost) for the 12 months of the investment.
7. **Per-Period Metrics** grant you the ability to select specific data from the below options for display within the grid:
- **Total**: Exclusively shows the 'Totals' field without the per-period metric fields in the grid.
- **Periods**: Solely displays the per-period metric fields without the 'Totals' field in the grid.
- **Total and Periods**: Simultaneously presents the per-period metric fields and the 'Totals' field in the grid.

> [!IMPORTANT]
> You have to select the per-period metric attributes from the Column Panel.

8. **Select Total and Period Columns Separately**: Turn on the toggle to get a separate set of Per-Period Metrics for Totals and Periods in the Columns panel. You can configure a separate per-period metrics for Totals and Periods according to your preferences. By default, the value is set to Off.

> [!NOTE]
> When you enable Select Total and Period Columns Separately, Clarity disables the Per-Period Metrics setting in View Options.

> [!IMPORTANT]
> When you switch from ON to OFF for the Select Total and Period Columns Separately option, the following happens:
> - It retains the previously selected values of Per-Period Metrics in View Options and updates the grid accordingly.
> - As previously shown, the Columns panel will only display one set of per-period metrics.

9. **Show Total Row**: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off. You can configure column aggregation using the column header's hamburger menu. To learn more, see Support Aggregation by Datatype for Grid.

The following table shows the different types of aggregation supported for various types of attributes:

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TS |
|------------|----------------------------------|---------|------|---------|-----|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | Yes | Yes | Yes | Yes |
| Min/Max | Yes | | | | |
| None | Yes | Yes | Yes | Yes | Yes |

10. Select the **Show Indicator on Non-Default Values** toggle to display visual indicators when the default values of the following attributes are updated:
- Default allocation percentage
- Grand Totals or Totals column
- Allocation Start and Finish date columns
- Individual allocation per-period metrics

This lets stakeholders quickly determine which records have been explicitly modified and make relevant staffing decisions.

11. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
12. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
13. Click **X** to close the View Options panel. The page applies your settings and shows the financial details that are spread across the time periods.
14. You will also see a scrolling per-period metrics widget in the page. You can click front and back arrows on the widget to quickly cycle through the data for various periods. Your Start Period and End Period settings will update the widget and as you cycle through periods in your widget, the Start Period and End Period will also be updated.

> [!NOTE]
> Some of the key points to remember are:
> - You can secure and relabel the TSV attributes using Field Level Security. While TSV attributes can be relabeled, they cannot be secured.
> - You can use the TSV totals in widgets.
> - You can include the custom TSV data in the page.
> - You can edit the custom TSV data in the page.
> - You cannot add TSV totals to the Details Panel.
> - Forecast data will only be displayed in TSV if a detailed cost plan has been created for the investment.
> - Financial data is read-only in the page.
> - If you are using the board layout, you can configure columns, swimlanes, sort, and color.
> - If you are using the timeline layout, you have the Color By option.

### View Audit Details

The Audit module is available for all Blueprints and all API-enabled Objects. The Audit module is available for:
- Agreements
- Custom Investment Types
- Custom Objects
- Level 3 Sub-Objects: OOTB Sub-Objects and Custom Sub-Objects
- Hierarchies
- Ideas
- Pages
- Projects
- Roadmaps
- Plans
- Cost Plan and Cost Plan Details
- Budget Plan and Budget Plan Details
- Benefit Plan and Benefit Plan Details

Follow these steps:

1. Open the relevant workspace for which the Audit module has been configured in associated blueprint.
2. Click **Audit**. You can leverage the configurable grid toolset utilized throughout Clarity:
- Column configuration
- Fly-out configuration
- Saved views
- Robust filtering
- Group By
- Export to CSV

> [!IMPORTANT]
> Some key points to remember are:
> - The Audit module includes a Standard View with (1) filter for 'Changed Date' to improve the overall user experience. You may have very large amounts of audit data, which will require a longer than expected period to return a result set when NO filters are used. You cannot remove this filter. However, you can modify the values.
>   - Changed Date: = 10 Days Before To Current Date
> - You must close and reopen the Details Flyout to apply Global Date setting options to the Record field.
> - There is a difference in behavior when comparing how the Parent Object information is presented in Classic and Clarity. In Clarity, when you filter to display Sub-Object details (for a Risk as an example), the Parent information is populated. However, in Classic, you must select the Parent Object (such as Project), and the sub-object (or Risk) audit information is included.
> - Resource Attribute: When enabling the Resource attribute on the Assignment object for Audit, ensure the change, insert, and delete options are configured in Classic. When the proper Audit configuration is in place, you can see the Insert and Delete operations indicating a resource has been replaced on an assignment.
> - In Clarity 16.1.1, the following capabilities are not supported in the Clarity Audit grid:
>   - Sort using the Attribute column.
>   - Display (total) scalar values (for example, allocations) using configured setting for FTE, Hours, or Days (vs. seconds).
>   - Ability to configure the Audit module for Plans.
>   - Include audit information for the stock sub-sub objects (e.g., Assignments, To Dos) and custom sub-sub objects in the Audit module. Workaround: View audit details for these objects under Clarity > Administration > Audit.
