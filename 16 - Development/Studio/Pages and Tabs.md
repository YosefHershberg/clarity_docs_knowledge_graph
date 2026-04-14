---
title: Clarity Studio Pages and Tabs
tags:
  - dev
aliases:
  - Pages and Tabs
canonical: true
audience: dev
domain: development
---
# Clarity Studio Pages and Tabs

Portlets are small windows or snapshots into your data (grids, charts, etc.). You can arrange portlets on pages with or without tabs. A portlet page collects and presents information for users with the appropriate access rights.

**Types of portlet pages:**
- **Page without tabs** — Single page with a few portlets (e.g., agile retrospective metrics).
- **Page with tabs** — Multiple tabs grouping related information (e.g., Team, Tasks, Financial Plans for projects).

---

## Portlet Page Prerequisites

Before creating a portlet page:

- Decide whether the page needs tabs.
- Decide whether to place it in the **Home** menu (end users) or **Administration** menu (admins).
- Determine how much control users have over the page. Disable **Personalizable** if you want all users to see the same page and future Studio changes to be reflected automatically.
- Verify that the portlets and page filters you want to display already exist.
- Verify that any user object actions to add already exist.
- Assign the following access rights to users:
  - **Portlet - View**
  - **Portlet - Navigate**
  - **Page - View**

---

## Create a Portlet Page with Tabs

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Click **New**.
3. Complete the requested information:
   - **Content Source:** Where portlet/page data originates. Default: Customer.
   - **Type:** Select **Page with Tabs**.
   - **Layout:** Number of columns per row and their proportions.
   - **Personalizable:** Whether users can make personal changes.
4. Click **Save and Continue**. The **OBS** section appears.
5. If using OBS, select an OBS.
6. To allow users to add tabs, enable **Allow End Users to Add Tabs**.
7. Click **Save and Continue**.
8. Click the **Tabs** tab.
9. Click **New**.
10. Enter a name, ID, content source, and layout for the tab.
11. To allow linking from another page, click the **Linkable** option.
12. Click **Save and Return** to create additional tabs.

---

## Configure a Tab

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Click the name of the portlet page.
3. Click **Tabs**.
4. Click the name of the tab to configure.
5. (Optional) Add a linkable parameter:
   - Click **Link Parameters** > **New**, complete the fields, and click **Save and Return**.
6. (Optional) Add portlets:
   - Click **Content** > **Add**, select portlets, and click **Add**.
7. (Optional) Add a page filter:
   - Click **Page Filters** > **Add**, select the filter, and click **Add**.
8. (Optional) Design the portlet layout:
   - Click **Layout**, place portlets in columns, adjust column count using the **Layout** field, and click **Save and Return**.

---

## Create a Portlet Page Without Tabs

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Click **New**.
3. Complete the requested information:
   - **Content Source:** Where data originates. Default: Customer.
   - **Type:** Select **Page without Tabs**.
   - **Layout:** Number of columns and proportions.
   - **Personalizable:** Whether users can make personal changes.
4. Click **Save and Continue**. The **Linkable** option and OBS section appear.
5. Select **Linkable** if users should be able to link to this page from other pages. This activates the **Link Parameters** tab.
6. (Optional) If using OBS, complete the **Department** and **Location** fields.
7. Save your changes.

---

## Configure a Portlet Page Without Tabs

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Click the name of the portlet page.
3. Click **Content** > **Add**, select portlets, and click **Add**.
4. Click **Save and Continue**. The **Page Filters** tab activates.
5. Click **Add**, select the appropriate filter, and click **Add**.
6. Click **Save and Continue**. The **Layout** tab activates.
7. Place portlets in the desired columns. Adjust column count using the **Layout** field.
8. Click **Save and Return**.

---

## Set Up Link Parameters

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Click the name of the portlet page.
3. Click **Link Parameters**.
4. Click **New** and complete the requested information.
5. Click **Save and Return**.

---

## Assign User Access to the Portlet Page

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Click the name of the portlet page.
3. Open the **Access to this Page** menu and click **Resource**.
4. Click **Add**.
5. Select **Page - View** and click **Add and Continue** (select all access rights if users should also edit).
6. Select the users to grant access to and click **Add**.
7. Click **Return** when done.

> [!NOTE]
> Users must have access rights to both the portlet data and the portlet page.

---

## Add a Portlet Page to Menu Manager

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Menu Manager**.
2. Click a menu. The menu hierarchy appears.
3. Click **Add**.
4. Select **Page Link** and click **Next**.
5. Complete the fields:
   - **Link Name:** Display label in the menu.
   - **Page Name:** Target page.
   - **Parent Menu Item:** Menu section for the link.
6. Click **Save and Return**.
7. Open the menu and verify the link navigates to the correct page.

> [!NOTE]
> If your changes are not reflected in the menu, click **Refresh**.

---

## Configure a Portlet Page Tab Set

The following actions are available for different portlet page types:

| Action | Custom Tabbed Page | Default Object Page | Project Default Layout |
|--------|-------------------|--------------------|-----------------------|
| Add/delete custom tabs | Yes | Yes | Yes |
| Reorder tabs | Yes | Yes | Yes |
| Activate/deactivate tabs | No | Yes | Yes |
| Set default tab | No | Yes | Yes |
| Add object actions to tab menu | No | No | Yes |

### Create a Tab

**Follow these steps:**
1. With the portlet page open, click **Tabs**.
2. Click **New**.
3. Complete the fields:
   - **Tab Name:** Display name for users.
   - **Tab ID:** Unique alphanumeric identifier.
   - **Content Source:** Data origin. Default: Customer.
   - **Description:** Purpose of the tab.
   - **Layout:** Column configuration.
   - **Personalizable:** Whether users can make personal changes.
   - **Linkable:** Whether the tab can be linked from another page.
4. Save your changes.

### Reorder Tabs

**Follow these steps:**
1. With the tabbed portlet page open, click **Tabs**.
2. Click **Reorder**. Fixed default tabs that cannot be reordered appear above the list.
3. Select the tabs to move and use the arrow keys to set their order.
4. Save your changes.

### Activate or Deactivate Tabs

**Follow these steps:**
1. With the tabbed portlet page open, click **Tabs**.
2. Select the **Active** option to show a tab or clear it to hide it.
3. Select the **Default** option to specify the tab that displays when the page first opens.
4. Save your changes.

### Select User Object Actions for a Tab Menu

**Follow these steps:**
1. With the tabbed portlet page open, click **Configure Tabs**.
2. Click **Actions** for the tab to configure.
3. In the **Default** column, select the object actions for the tab menu.
4. Click **Save**.

### Set Multilingual Names for a Tab

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Open the portlet page and click **Tabs**.
3. Click the **Translate** icon next to the tab name.
4. Enter the new tab name in the appropriate language(s) and click **Save and Return**.
5. Click **Properties**, then click **Publish** to make changes visible to other users.

---

## Add Subpages to a Portlet Page Tab

You can display multiple subpages on a custom portlet page tab using a **custom properties view** (custom objects only; not applicable to stock objects).

### Create a Custom Object Properties View

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Open a custom object.
3. Click the **Views** tab.
4. Click **New**. Enter a name and unique ID for the new properties view.
5. Click **Save**.
6. To use the new view: open **Administration > Studio > Portlet Pages**.
7. Open the default layout for the custom object and click the **Tabs** tab.
8. Click **New**.
9. In the **Layout** field, select **Properties** or **Subtabs**.
10. In the **View** field, select the custom object view you created.
11. Click **Save and Return**.

> [!NOTE]
> Only the **Layout:Edit** option is available for custom properties views. The **Copy**, **View All**, and **Export to XML** options are not available.

### Add Subpages to a Custom Properties View

**Follow these steps:**
1. With the custom object open, click **Views**.
2. Locate the custom properties view and click **[Layout:Edit]** in the **Setup** column.
3. Enter a name and ID for each subpage and click **Save and Return**.
4. Populate the subpages with sections and attributes; set up display conditions if needed.

> [!NOTE]
> You can add up to five subpages at a time. The total number of subpages is unlimited.

### Move a Subpage Between Properties Views

**Follow these steps:**
1. With the custom object open, click **Views**.
2. Locate the custom properties view and click **[Layout:Edit]**.
3. Select the checkboxes next to the subpages to move and click **Move**.
4. Select the destination properties view and click **Move**.
5. Click **Return**, then open the destination view to verify the moved subpages.

> [!NOTE]
> If a subpage is associated with a subobject, it cannot be deleted — only moved.

### Delete a Custom Properties View

Rules for deletion:
- Subpages linked to a subobject must be moved to another view before deletion.
- Cannot delete a view associated with a custom tab (remove all associations first).
- Can only delete from the **System** partition (deletion propagates to child partitions).

**Follow these steps:**
1. With the custom object open, click **Views**.
2. Select the checkbox for the custom properties view and click **Delete**.

### Restore Defaults for a Custom Properties View

Click **Restore Defaults** to reinstate the original view properties for all users. This overwrites any personalized changes.

> [!NOTE]
> The **Restore Defaults** button does not appear if the custom properties view is associated with a portlet page tab.

---

## Display Custom Subpage Links on a Tab

### Display as Menu Options

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Portlet Pages**.
2. Click the name of the default custom portlet page.
3. Click **Tabs** > **New**.
4. Complete the fields: Tab Name, Tab ID, Content Source.
5. In the **Layout** field, select **Properties**. The **View** field appears.
6. In the **View** field, select the custom view with subpages. The selected subpage is the default displayed when the tab is clicked.
7. Save your changes.

### Display as Submenu Options

**Follow these steps:**
1. Click **Portlet Pages** from the **Studio** menu.
2. Click the name of the default custom portlet page.
3. Click **Tabs** > **New**.
4. Complete: Tab Name, Tab ID, Content Source.
5. In the **Layout** field, select **Subtabs**. The **View** field appears.
6. In the **View** field, select the custom view with subpages.
7. Click **Save and Continue**. The **Content** tab activates.
8. Click **New** to add submenu options. For each submenu:
   - Enter a name and unique identifier in the **Subtab** field.
   - Select a property view in the **View (Subpage)** field.
   - Click **Save**.
9. Click **Return** and verify changes in the application.

---

## Personal Portlets and Dashboards

Users can create their own portlets and pages using the same functionality available in Studio. A personal dashboard is a type of portlet page. End users can share dashboards with other users.

Dashboard export is limited to pages of type **Page with Tabs** or **Page Without Tabs**. The **Fit to page** option exports all portlets for a tab to one page.

> [!TIP]
> Configure the portlet **Chart Section** with **Datapoint Labels** and **Mouseover Labels**. These labels and values appear when exported to Excel or PowerPoint.

### Access Rights for Personal Dashboards

**Administrator access rights:**

| Access Right | Purpose | Scope |
|---|---|---|
| Portlet Definition Editor | Edit a portlet | Global/OBS/Instance |
| Page Definition Editor | Manager access to a dashboard | Global/OBS/Instance |

**User access rights:**

| Access Right | Purpose | Scope |
|---|---|---|
| Dashboard - Navigate | Shows the Dashboards link in the Home menu | Global |
| Portlet - Navigate | Shows the Portlets link in the Home menu | Global |
| Dashboard - Create | Allows creating a dashboard | Global |
| Portlet - Create | Allows creating a portlet | Global |
| Portlet - View | Allows viewing a portlet | Global/OBS/Instance |
| Page - View | Allows viewing a dashboard | Global/OBS/Instance |

### Administrator Access to User Portlets

- In **Classic PPM Studio**: An administrator can view all user portlets, make changes, and publish them.
- **In the application**: An administrator can view only portlets they created or that have been shared.

### Personal Dashboard Operations by User Type

| Dashboard Function | Studio Administrator | Dashboard Manager | Dashboard Viewer |
|--------------------|---------------------|-------------------|-----------------|
| Share | Yes | Yes | No |
| Edit properties | Yes | Yes | No |
| Publish | Yes | Yes | No |
| Personalize | No | Yes | Yes |
| Export | No | Yes | Yes |

### Relabel Attribute Names for User Portlet Data Providers

To provide user-friendly attribute names in portlet data provider selection:

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Queries**.
2. Select a query.
3. Click **Attributes**.
4. Click the name of the attribute to relabel.
5. Click the **Translate** icon next to the **Attribute Name** field.
6. Enter the user-friendly name and save your changes.

---

## Related
- [[_MOC Development]]

%%Source: p4089-4100%%
