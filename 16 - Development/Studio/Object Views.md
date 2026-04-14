---
title: Clarity Studio Object Views
tags:
  - dev
aliases:
  - Object Views
canonical: true
audience: dev
domain: development
---
# Clarity Studio Object Views

Configure the default views in Studio to determine how object information appears on a page. The following default views appear for any object:

- **Properties View** — Allows users to enter information about an object instance (create or edit).
- **List View** — Displays object instances in rows and columns.
- **Filter View** — Appears as a section at the top of a list; allows users to search for information.

---

## Prerequisites

Review and complete the applicable prerequisites:

- Enable the following access rights:
  - **Administration - Studio**
  - **Object - Create Definition**
  - **Object Administration**
- Enable applicable global object rights to work with object instances (e.g., Retrospective - Edit All, View All, Navigate, XOG Access).
- Create the attributes you want to add to the view in advance.

---

## Configure the Properties View

The properties view defines which attributes display on create or edit pages and how they are arranged.

### Add Attributes to a View

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of an object.
3. Click **Views**.
4. In the **Category** column, locate the **Properties** view and click one of the following links in the **Setup** column:
   - **[Layout:Create]** — Adds attributes to the create-instance page.
   - **[Layout:Edit]** — Adds attributes to the edit-instance page.
5. In the property layout, select the section and click the **Properties and Layout** icon.
6. In the **Available** list, select the attributes and move them to the **Selected** list. You can place fields in the left or right column.
7. Save your changes.

> [!NOTE]
> Static lookups configured as **Pull-Down** can automatically change to **Browse** when the number of lookup values exceeds 20 (after an additional value is added on an editable list view). The display type for OBS, dynamic, and dependent lookups on editable list views is always **Browse**.

To manually change the display type:
1. On the **Views** tab, in the **General** row, click **[Fields]**.
2. Click the **Properties** icon for the lookup attribute.
3. In the **Display Type** field, select **Pull-Down** or **Browse**.
4. Click **Save and Return**.

### Add Sections to a View

Group related attributes into named sections on a properties page.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**.
4. In the **Category** column, locate the **Properties** view and click **[Layout:Create]** or **[Layout:Edit]**.
5. Open a subpage.
6. In the property layout, click **Create Sections**.
7. In the **Section Names** field, enter the name for each new section.
8. Save your changes.

### Add a Subpage to a View

Group specific information on its own subpage (e.g., a Finance subpage for financial data).

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of an object, then click **Views**.
3. In the **Category** column, locate the **Properties** view. Click **Layout:Edit** in the **Setup** column.
4. In the property layout, click **Create Subpages** and complete the required information:
   - **Subpage Name:** Display name for the subpage link in the object menu.
   - **Subpage ID:** Unique ID (automatically assigned if left blank).
5. Click **Save and Return**.
6. (Optional) Add sections to the subpage:
   - In the property layout, click the subpage name.
   - Click **Create Sections**, enter up to five section names, and click **Save and Return**.
   - Click the **Properties and Layout** icon next to a section to add attributes.
7. Define subpage properties:
   - Click the **Properties and Layout** icon for the subpage.
   - **Sections** — Set display order using arrows.
   - **Linkable** — Whether the subpage can be linked from other pages.
   - **Secure** — Whether access rights (view and edit) are generated for the subpage.
   - (Optional) Define display conditions under **Display Conditions**.
   - Click **Save and Return**.

---

## Configure the List View

The list view appears when users select an object from the Home menu. It displays all created instances of the object.

> [!NOTE]
> - Static dependent list lookups configured as multivalue lookups are not supported in list views.
> - Autosuggest is not supported for static dependent lists.

### Configure Attributes and Options

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**.
4. In the **Category** column, locate the desired **List** view and click **[Layout]** in the **Setup** column.
5. In the **Available Columns** list, select attributes and move them to the **Selected Columns** list.
6. Click **Save and Return**.
7. Click **[Options]** in the **Setup** column for the List view and complete:
   - **Secondary Value Display** — How secondary values display in a grid cell: Mouseover only, Mouseover and redline text, or Show Null Secondary Values.
   - **Allow Configuration** — Whether users can change the page appearance.
   - **Allow Label Configuration** — Whether users can change page labels.
   - **Attribute Value Protection (AVP)** — Whether attributes are protected or displayed.
8. Save your changes.

> [!NOTE]
> Protected views are not automatically updated when a new content package add-in is installed. You can upgrade individual views when new views are available.

### Attribute Value Protection (AVP)

AVP settings control how attribute values are displayed or protected:

1. Use display conditions and secured subpages to protect attribute values.
2. Use only secured subpages to protect attribute values.
3. Display all attribute values.

Since release 14.3, the default for new deployments changed from option (1) to option (2) to improve performance. Existing deployments preserve their prior setting after upgrade.

> [!NOTE]
> Heavy use of secure subpages combined with AVP on large object list views (such as the Project List) can reduce performance. Minimize use of the "Use display conditions and secured subpages" option.

### Configure Sorting

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**.
4. Locate the **List** view and click **[Layout]** in the **Setup** column.
5. In the **Column Sorting** section, select the primary sort attribute in the **First Field** row.
6. Select **Ascending** or **Descending**.
7. Select additional sort attributes for secondary and tertiary sort.
8. Save your changes.

### Configure Appearance

You can represent data visually using:

- **Colors** — Represent data ranges with different colors.
- **Icons** — Represent value ranges using standard icons (colored checkmarks, discussion bubbles, etc.).
- **Bar or Column Charts** — Display numeric/money attributes as horizontal or vertical charts.

Rules for graphics in list views:
- Virtual columns (Gantt charts, progress bars, time-sliced values, virtual images) cannot display graphics.
- Only **number** data type attributes can display graphics.
- Changes apply only to the specific view — different views can have different display options for the same attribute.

#### Display an Attribute as a Bar or Column Chart

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of an object.
3. Click **Views**.
4. Locate the **List** view and click **[Fields]** in that row.
5. Click the **Properties** icon for the attribute to change.
6. Complete the requested information:
   - **Display Type:** Type of chart (Number, Percent, Calculated Percent, Column Graph, Bar Graph — options depend on attribute data type).
   - **Secondary Value:** Attribute value shown as secondary on mouseover of the primary bar.
   - **Length Scaling:** Controls bar proportions:
     - **Relative to Same Column** — Proportional to other bars in the column.
     - **Relative to Same Row** — Proportional to other bars in the row.
     - **Relative to Entire Table** — Proportional to all bars of the same type in the table.
     - **No Scaling** — All bars drawn to maximum length (useful for progress bars).
   - **Color / Threshold Line Attribute / Over-threshold Color** — Visual indicators for threshold values.
   - **Stacked Attribute** — Attribute to represent as a stacked bar.
   - **Link** — Page to display when the user clicks the bar.
7. Save your changes.

#### Display a Progress Bar

> [!NOTE]
> Progress bars are not available for custom objects.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**, then locate the **List** view and click **[Fields]**.
4. Click **New**.
5. Click **Progress Bar**, then click **Next**.
6. Complete the requested information:
   - **Current Stage Name:** Field value for each stage in the progress bar.
   - **Current Stage Number:** Field value for the current stage.
   - **Number of Stages:** Total number of stages.
   - **Show Label:** Whether the current stage name is shown in the bar.
   - **Column Width:** Percentage of row width allocated to the progress bar column.
7. Save your changes.

#### Configure Display Mappings

Use display mappings to visually represent value ranges using icons or colors.

> [!NOTE]
> Only attributes with the **number** data type can be displayed as graphics.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Attributes**.
4. Click the attribute for which you want to display a graphic.
5. In the **Display Mapping** section:
   - Select **Color** or **Icon** in the **Type** field.
   - For each range, select the appropriate color or icon, enter a description, and specify **From** and **To** values.
6. Repeat for additional ranges.
7. Save your changes.

#### Display a Gantt Chart

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**, locate the **List** view, and click **[Fields]**.
4. Click **New**.
5. Select **Gantt** and click **Next**.
6. Complete the requested information:
   - **Start Date / Time Scale / Number of Time Periods / Time Period Offset**
   - **Show Group Header Row** — Shows timescale above the Gantt bar.
   - **Item Name Attribute** — Content displayed in the Gantt bar.
   - **Start Date Attribute / Finish Date Attribute**
   - **Milestone Attribute** — Designates milestone tasks.
   - **Progress Through Date Attribute** — Length of black overlay showing completed work (overrides Progress Percent if set).
   - **Progress Percent Attribute** — Percentage to move the progress line relative to bar length.
   - **Label for Bar / Additional Information Attribute / Show Mouseover**
   - **Show Dates on Primary Bar**
   - **Secondary Bar** — Optional second bar for comparison.
7. Save your changes.

#### Display an Image Link

Add a clickable image link to navigate to another page.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**, locate the **List** view, and click **[Fields]**.
4. Click **New**.
5. Select **Image** and click **Next**.
6. Complete the requested information:
   - **Image:** The image to display in the grid column.
   - **Link:** The target page when the image is clicked.
   - **Open as Pop-up:** Whether the target page opens as a pop-up.
   - **Disable Link Attribute:** Disables the image link.
7. Save your changes.

### Add Aggregation Rows

Add aggregation rows to a list view for numeric or monetary attributes.

> [!NOTE]
> Numeric attributes must already exist and be added to the list view before adding aggregation rows.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**, locate the **List** view, and click **[Aggregation]** in the **Setup** column.
4. Click **Add**.
5. Complete the requested information:
   - **Label:** Name for the aggregation row.
   - **Show:** Whether to display the aggregation row name.
   - **Attribute:** Field value to aggregate.
   - **Function:** Aggregation function (e.g., Sum, Average, Count).
6. Save your changes.

---

## Configure the Filter View

The filter view appears on list pages and allows users to filter displayed items. You can specify whether the filter is collapsed (showing only the filter field) or expanded (showing all filter options). You can also add a **Build Power Filter** link for advanced queries.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**, locate the **Filter** view, and click **[Layout]** in that row.
4. In the **Available** list, select filter attributes and move them to the **Selected** list.
5. Complete the requested information:
   - **Section Title:** Text at the top of the filter section.
   - **Default Filter State:** Whether the filter starts expanded or collapsed.
   - **Allow Power Filter:** Whether advanced search features are available.
6. Save your changes.

---

## Verify Views for Custom Objects

By default, all custom objects are added to the **Custom Objects** menu item in the Application menu. To make the views accessible, move the object to the appropriate menu location.

> [!NOTE]
> If you are configuring views for an existing object, you do not need to move it in the menu.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Menu Manager**.
2. Click **Application Menu**. The menu hierarchy appears.
3. Scroll to the **Custom Objects** menu item.
4. Select the custom object and click **Move**.
5. Select the new menu item and click **Save and Return**.
6. Open **Home** and click the custom object name from the appropriate menu.

> [!NOTE]
> If your changes are not reflected in the menu, click **Refresh**.

7. Create object instances and verify the configured views.

> [!NOTE]
> Some fields are read-only when creating an object and become editable only on the edit page. For example, when creating a new Idea, the **Planned Cost Start** and **Planned Cost Finish** fields are read-only and become editable after saving.

---

## Optional: Apply Changes to Object Views

### Edit an Attribute Label

Labels in views do not have to match the attribute name. The same attribute can display with different labels in different views.

**Follow these steps:**
1. With the object open, click **Views**.
2. Locate the view and click **[Fields]** in the same row.
3. Locate the attribute and enter a new label.
4. Save your changes.

### Override an Attribute Default Value

Define a different default value for an attribute in a specific view or partition.

> [!NOTE]
> If the attribute is already visible on the object Create view, you do not need to add it to a section layout — go directly to overriding the default value.

**Follow these steps:**
1. In **Studio**, open the object and click **Attributes**. Note the current default value.
2. Click **Views**.
3. Select a partition for the view if applicable.
4. Next to the **Properties** view, click **Layout: Create**.
5. Click the **Properties and Layout** icon for the section to configure.
6. Add the attribute to the selected list and click **Save and Return**.
7. Next to the **Properties** view, click **[Fields]**.
8. Find the attribute and click its **Properties** icon.
9. In the **Override Default** field, select a new default value and click **Save**.
10. Create an instance in the target partition and verify the new default value appears.

### Edit Field Properties for Attributes

**Follow these steps:**
1. With the object open, click **Views**.
2. Locate the view and click **[Fields]** in the same row.
3. Locate the attribute and click its **Properties** icon.
4. Edit the following properties:
   - **Property Label** — Display name for the attribute.
   - **Display Type** — How the field appears (Pull-Down, Browse, etc.).
   - **Hint / Hint Position** — Hint text and placement.
   - **Tooltip** — Tooltip text displayed on hover.
   - **Override Default** — New default value.
   - **Value Required** — Whether a value is required.
   - **Enter Once** — Attribute can only be set at creation; cannot be changed afterwards.
   - **Hidden** — Hides the attribute from users (commonly used for filter defaults).
5. Save your changes.

### Publish Changes to List and Filter Views

Publishing overwrites personalized views for users who have customized their view layout.

> [!NOTE]
> Users who have not personalized a view see changes immediately after saving. Users with personalized views only see changes after publishing.

**Follow these steps:**
1. Click the **Administration** menu and select **Views** from the **Studio** menu.
2. Select the views to publish and click **Publish**.
3. Click **Yes** on the Confirmation page.

### Restore Defaults for Object Views

Restores properties, list, and filter views to original defaults for all users. Any personalized changes are overwritten.

**Follow these steps:**
1. Click the **Administration** menu and select **Objects** from the **Studio** menu.
2. Select an object.
3. Click **Views**.
4. Click **Restore Defaults**.

### Restore Defaults for Selected Views

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Views**.
2. Select one or more views.
3. Click **Restore Defaults**.

---

## Related
- [[_MOC Development]]

%%Source: p4047-4060%%
