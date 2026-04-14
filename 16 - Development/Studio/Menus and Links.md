---
title: Clarity Studio Menus and Links
tags:
  - dev
aliases:
  - Menus and Links
canonical: true
audience: dev
domain: development
---
# Clarity Studio Menus and Links

Users can navigate using menus and links. You can configure the main menu and the object action menus. You can also create object links to the following types of pages:

- A subpage of the object page
- A web page accessed via URL
- A properties page of an object instance record (usable internally or from external applications)

---

## Customize the Actions Menu

The **Actions** menu appears on the list and properties views of most pages. It provides quick access to actions a user can take directly from the page. As a developer, you can modify the list of options under the **General** submenu, or create additional submenus with options.

The Actions menu is specific to an object. For example, to add options to the Actions menu for projects:
1. Create the options for the Project object in Studio.
2. Add the options to the Projects list view and properties view.

> [!NOTE]
> The following page types do not support an Actions menu:
> - Pages that do not have a view
> - Pages that have one or more portlets (e.g., dashboards)
> - Pages that combine a view and portlets

### Prerequisites

Before customizing the Actions menu, review the following:

- Assign the **Administration - Studio** access right.
- Determine which tasks or locations a user needs access to from the page.
- Verify that users have access rights to view any target pages for internal links. The option only displays when users have the required rights.
- Provide a return link so users can navigate back to the source page.
- Assign access rights to the job or process definition for users to run a job or process.
- Jobs and process options must be **active**.
- You can only map job and process parameters to value attributes inside the partition to which the object view belongs.
- When you place an option in a submenu, it is immediately visible to all users, even users with personalized views.
- An option can be placed in a submenu on any page that corresponds to a view in the object definition.

### Create a Job Option

Create a job option to let users run a job directly from the Actions menu.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Open the object and click **Actions**.
3. Click **New**.
4. Complete the requested information:
   - **Type:** Select **Job**.
   - **Select Job:** Specifies the job launched from the Actions menu.
   - **Alert users before running the job:** Alerts the user before the job runs.
   - **Scope:** Controls whether the action is global or instance-specific:
     - **Global** — User can run the action without selecting a specific instance. Also makes the action available to any view within any object and to the Home menu.
     - **Instance-specific** — User must select a specific instance first. Can only be added to views for the object where it was created. Cannot be added to the Home menu.
5. In the **Attribute Mapping** section, complete:
   - **Parameters** — Parameter fields that appear when running an instance-specific action.
   - **Default Values** — Global default values for parameters of an instance-specific action.
   - **Object Attribute Overrides** — Object attributes that override default values. Map only attributes of the same data type as the Parameter field.
6. Save your changes.

### Create a Process Option

Create a process option to let users start a process directly from the Actions menu.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Open the object and click **Actions**.
3. Click **New**.
4. Complete the requested information:
   - **Type:** Select **Process**.
   - **Alert users before running the process:** Select the checkbox to alert the user.
5. (Optional) In the **Define Primary Object** section, map to an attribute if running this option outside the primary object view. For example, to run an "Approve Risk" option from the Project object view, map to a Project object attribute.
6. Save your changes.

### Create an Internal Link Option

Create an internal link option to navigate to a specific page from the current page.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Open the object and click **Actions**.
3. Click **New**.
4. Complete the requested information:
   - **Type:** Select **Internal Link**.
   - **Select Link:** Specifies the page that opens. The list includes all links on the **Linking** tab for the object.
5. Save your changes.

### Create an External Link Option

Create an external link option to navigate to a URL outside of the product. The external link opens in a pop-up page.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Open the object and click **Actions**.
3. Click **New**.
4. Complete the requested information:
   - **Type:** Select **External Link**.
   - **Scope:** Select **Global** or **Instance-specific** (see Job Option above for definitions).
   - **Enter URL:** Defines the URL (e.g., `https://support.broadcom.com/`).
5. If the scope is **Instance-specific**, complete the **Define URL Arguments** section:
   - **Number of Arguments:** Number of name/value pairs to append as parameters.
   - **Argument #:** The name in the name/value pair.
   - **Argument # - Value:** Whether the value is a constant or instance-specific. Select an object attribute for instance-specific values.
6. Save your changes.

### Create a Submenu

Create submenus to group related menu options on the Actions menu.

> [!NOTE]
> If you want a submenu to appear on both the list and properties views, create a menu for each view separately.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Open the object and click **Views**.
3. Click **Actions Menu** in the **Setup** column of the appropriate view.
4. Click **New**.
5. Enter the menu name, menu code, and description.
6. Move the appropriate menu options to the **Selected Actions** list box. Use the arrows to set the correct order.
7. Click **Save and Return**. The new menu appears in the Actions menu list.
8. Click **Menu Layout**. The list of submenus appears in display order.
9. Move the submenus into the appropriate order using the arrows.
10. Save your changes.

### Update a Submenu

Update existing submenus to add or remove options (e.g., add options to the default **General** submenu).

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Open the object and click **Views**.
3. Click **Actions Menu** in the **Setup** column of the appropriate view.
4. Click the name of the menu you want to update.
5. Move the appropriate options into the **Selected Actions** list box.
6. Save your changes.

### Verify the Actions Menu

Navigate to the page with the updated Actions menu and verify:

- Menu options display and launch correctly.
- For missing options, verify that the user has the appropriate access rights.
- For options that do not launch correctly, verify the option properties.
- For job or process options that do not work, verify the parameter settings.
- For external links that do not work, verify the URL.
- For internal links that do not work, verify the link settings.
- Submenus display in the correct order and location.

---

## Customize the Main Menu

You can configure the **Home** and **Administration** menus to simplify navigation by role. Supported changes:

- Add a link to a page or a user action
- Add a section
- Remove and reorder a section or link

Use the **Menu Manager** in Studio:
- To configure the **Administration** menu: use the **Administration Tool** menu.
- To configure the **Home** menu: use the **Application** menu.

> [!NOTE]
> You can also use the **Favorites** menu to store links to any page for easy access.

### Prerequisites

Required access rights:
- **Administration - Access**
- **Administration - Studio**
- **Administration - Partition Models**
- **Menu Definition Viewer - All**

Determine:
- Which menu to customize (Home or Administration)
- How to display the menu item: as a section, page link, or action link
- That the menu item you want to add already exists

### Add a Page Link

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Menu Manager**.
2. Click the menu name you want to configure. The menu hierarchy page appears.
3. Click **Add**.
4. Select **Page Link** and click **Next**.
5. Enter the information:
   - **Link Name:** Display name for the link in the menu.
   - **Page Name:** Target destination page.
   - **Parent Menu Item:** The section where the link appears.
6. Save your changes.

> [!NOTE]
> Log out and log in again to see the new menu item.

### Add an Action Link

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Menu Manager**.
2. Click the menu name you want to configure.
3. Click **Add**.
4. Select **Action Link** and click **Next**.
5. Complete the requested information:
   - **Link Name:** Display name for the link.
   - **Action Name:** The action triggered when the link is clicked.
   - **Parent Menu Item:** The parent section where this link appears.
6. Save your changes.

### Add a Section

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Menu Manager**.
2. Click the menu name you want to configure.
3. Click **Add**.
4. Select **Section** and click **Next**.
5. Complete the requested information.
6. Save your changes.

### Reorder a Section or Link

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Menu Manager**.
2. Click the menu name you want to reorder.
3. Click **Reorder**.
4. Select the menu item and use the arrows to move it to a new position.
5. Save your changes.

> [!NOTE]
> If changes are not reflected in the menu, click **Refresh**.

### Remove a Section or Link

You can only remove sections or links that you created — default sections and links cannot be removed. Users currently viewing the item will not see the change until their next login.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Menu Manager**.
2. Select the menu on the **Menu Manager** page.
3. Select the checkbox next to the section or link and click **Remove**. The **Confirm Menu Item Delete** page appears.
4. Click **Yes**.

### Verify the Menu

**Follow these steps:**
1. Log in to Classic PPM.
2. Verify that the link appears in the menu.
3. Click the link to verify it navigates to the correct page.

---

## Customize Page Links

### Link from an Object Page to a Subpage

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of an object.
3. Click **Linking**.
4. Click **New** and complete the fields:
   - **Link Name:** Display label for the page link.
   - **Link ID:** Unique alphanumeric identifier.
   - **Description:** Purpose of the link.
   - **Action:** The page that appears when the link is clicked. Both objects must share common attribute values for linking to work.
5. Click **Save and Return**.

### Link to a Web Page

To add a link to an external website on an object Properties view:

1. Create a **URL Link Attribute**.
2. Add the attribute to the **Object Properties View**.

#### Create a URL Link Attribute

A URL link attribute can provide a link to a web page or reference a virtual attribute (e.g., progress bars, Gantt charts, or calculated values).

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Attributes**.
4. Click **New**.
5. Enter an attribute name and a unique ID.
6. Set the **Data Type** field to **URL**.
7. Complete any remaining fields.
8. Save your changes.

#### Add Attributes to the Object Properties View

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**.
4. In the **Category** column, locate the **Properties** view and click the **[Layout:Create]** link in the **Setup** column.
5. In the property layout, select a section and click the **Properties and Layout** icon.
6. In the **Available** list, select the attributes and move them to the **Selected** list using the arrows.
7. Click **Save and Return**.
8. Click **Return** to go back to the list of views.
9. Locate the **Properties** view again and click **[Layout:Edit]** to make further changes.
10. Repeat as needed.
11. Save your changes.

### Link to Properties Pages from External Applications

You can link to the properties page of an object instance record from an external application using any unique attribute value to identify the instance.

**Example: Link to a project stock object:**
```
http://my_ppm.somebiz.com/niku/app?action=odf.customObjectInstance&odf_code=project&unique_code=myproject
```

- `odf_code=project` — The stock object ID defined in Administration. `project` is the code for the Project stock object.
- `unique_code=myproject` — Identifies the object instance via the unique attribute on the object.

**Example: Link to a custom object:**
```
http://my_ppm.somebiz.com/niku/app?action=odf.customObjectInstance&odf_code=custom_workflow&release=1.0.1A
```

- `odf_code=custom_workflow` — The custom object definition ID defined in Studio.
- `release=1.0.1A` — A custom string attribute identifying the instance.

URLs with properly encoded parameter values are also valid:
```
...name=My%20Custom%20Page
```

---

## Related
- [[_MOC Development]]

%%Source: p4101-4110%%
