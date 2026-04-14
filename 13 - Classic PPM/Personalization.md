---
title: Personalize Classic PPM
tags:
  - howto
  - classic
aliases:
  - Personalization
canonical: true
audience: everyone
domain: classic
---

# Personalize Classic PPM

This section explains how to personalize your account settings, change your password, export data to Excel or CSV, and configure the appearance of application pages. Changes you make are visible only to you.

> [!NOTE]
> The documentation might not match what you see in the product. All access to features, menus, pages, buttons, and objects is determined by your access rights. Your organization can also customize the application. Contact your administrator if you cannot complete any steps described here.

---

## Account Settings

### Manage Location and Language Settings

**Steps:**
1. Click **Home > Personal > Account Settings**.
2. Complete the fields:
   - **Time Zone** — Defines your primary workplace time zone.
   - **Locale** — Controls number and date language formatting. Default: *English (United States)*.
   - **Language** — Language used in the user interface. Default: *English*.
3. Save your changes.

### Change Your Password

**Steps:**
1. Click **Home > Personal > Account Settings**.
2. Complete the requested information in the **Change Password** section.
3. Save your changes.

> [!NOTE]
> The **Change Password** section may not appear if:
> - Your administrator did not grant you the **Account Settings - Navigate** access right.
> - External authentication (LDAP or SSO) is enabled. In that case, contact your administrator.

### Designate Proxies

You can temporarily designate another resource as your action items proxy. The proxy receives your regularly scheduled and urgent action items during the proxy period.

> [!WARNING]
> Verify that the proxy resource has the appropriate access rights for the actions they must perform.

**Steps:**
1. Click **Home > Personal > Account Settings**.
2. Click **Proxy**.
3. Complete the requested information in the **Setup** section.
4. (Optional) Other resources can designate you as their proxy; their names appear in the **Resources** field.
5. Save your changes.

### Set Up Notifications

Certain events in the software can trigger automatic notifications. You can manage the types and methods of notifications you receive.

**Steps:**
1. Click **Home > Personal > Account Settings**.
2. Click **Notifications**.
3. Select the functional areas and methods for notifications. All checkboxes are selected by default.
4. (Optional) Click **Restore Defaults** to reset to the settings your administrator last published.
5. Save your changes.

Notification triggers by functional area:

| Area | Trigger |
|---|---|
| **Action Items** | A new action item is assigned to you or one is due. |
| **Change Request** | You are assigned to a change request. |
| **Escalation** | A process fails or stalls and you are identified as the escalation contact. |
| **Issues** | You are assigned to an issue. |
| **Processes** | You are identified as the contact for a step in a process. |
| **Projects** | A resource is added to or removed from the Participants list. |
| **Reports and Jobs** | A report or job you initiated, scheduled, or are assigned to is completed or failed. |
| **Risks** | You are assigned to a risk. |
| **Timesheets** | A submitted timesheet requires your attention, or a timesheet is overdue or returned. |

### Download Client Software

**Steps:**
1. Click **Home > Personal > Account Settings**.
2. Click **Software Downloads**.
3. Click the **Download** link.
4. Follow the download and installation instructions. Note the folder location where you install the software.

Available downloads:
- **Open Workbench** — Stand-alone desktop project management and scheduling software, or integrated with Classic PPM.
- **Microsoft Project Interface** — Integrates Microsoft Project scheduling functionality.

> [!NOTE]
> Even with appropriate access rights, the software might not be available. Contact your administrator if you cannot download or install client software.

### Set a Default Partition

**Steps:**
1. Click **Home > Account Settings**.
2. Click the **Default Partitions** tab (appears only if your administrator added you to at least one partition unit).
3. Select a partition and click **Save**.

> [!TIP]
> You must set your default partition even if you belong to only one partition. Without this setting, you might not see all relevant data in some areas of the application.

### Set a Home Page

**Steps:**
1. Navigate to the page you want as the home page.
2. In the main menu, click **Home**.
3. At the bottom of the menu, click **Set as Home**.
4. To verify, navigate to another page and click the **Home** icon.
5. (Optional) To reset to the default Overview page: click **Home > Reset Home**.

---

## Personalize Important Information

- **Home > Personal > General** — The default home page (Overview). Contains portlets for action items, notifications, project links, favorite links, and photos.
- **Home > Personal > Organizer** — Personal organizer for tasks, action items, and processes.

### Create an Action Item

Action Items are non-task work items you assign to yourself or receive from others. You can create personal action items from the **Organizer** page and project-related action items from within a project.

**Steps:**
1. Click **Home > Personal > Organizer**.
2. Click **New**.
3. Complete the **General** section:
   - **Recurring** — Whether the action item repeats at regular intervals.
   - **Frequency** — How often it recurs. Example: Enter `1` for weekly.
   - **Until** — Last date for recurrence.
4. Complete the **Notify** section:
   - **Notify Assignees** — Whether a notification is sent.
   - **Send Reminder** — Whether a reminder email is sent when the item is due.
   - **Time Before Reminder** — Amount of time before due that the reminder fires (e.g., `15` with **Minutes**).
   - **Units** — Time unit for the reminder.
5. Enter the resource name in the **Assignees** section and save your changes.

### Open an Action Item from Notifications

Alert notifications appear on the **Overview** page (Notifications portlet) and the **Organizer** page (Notifications tab).

**Steps:**
1. Open **Home > Personal > Organizer**.
2. Click **Notifications**.
3. Click the link in the **Message** column or the **Properties** icon next to the alert.

### Manage Processes

From the **Organizer**, you can view:
- **Initiated** — Process instances you started or have view access to.
- **Available** — Processes available for you to start or edit.

> [!NOTE]
> Processes are not explicitly marked as complete. Completeness depends on the status of all steps. When the **Finish** step completes, the process instance ends. To view all global processes, process administrator access is required.

**Steps:**
1. Click **Home > Personal > Organizer**.
2. Click **Processes**.
3. Perform one of the following:

**Start a process:**
1. Click **Available**.
2. Select the check box next to the process and click **Start**.

**Modify a process:**
1. Click **Available**.
2. Click the process name.
3. Modify generic attributes, steps (add, rename, delete, add conditions, alter actions), groups, and escalation properties.
4. Click **Validation** to validate. Fix any errors and revalidate. Click **Exit** when no errors remain.

**Cancel a process:**
1. Click **Initiated**.
2. Select the process instance and click **Cancel Process**.
3. Click **Yes** to confirm.

### Update Tasks

You can view and update personal and assigned tasks from the **Organizer**.

**Steps:**
1. Click **Home > Personal > Organizer**.
2. Click **Tasks**.
3. Open a task and update its properties:

| Field | Description |
|---|---|
| **Task** | Name of the task (limit: 64 characters). |
| **Investment** | Name of the associated project. |
| **Start** | Date the task assignment begins. Default: task start date. Read-only if actuals exist. |
| **Finish** | Date the task assignment completes. Default: task completion date. |
| **Actuals** | Total work units posted to the task. |
| **Pending Actuals** | Hours entered on a timesheet with Open, Saved, Submitted, or Approved status. |
| **ETC** | Estimated hours to complete the task. Click to edit. |
| **Assignment Status** | *Not Started*, *Started* (auto, when time is posted), or *Completed* (auto, when ETC = 0 and status = Completed). |

4. Save your changes.

---

## Avatar Image

Your avatar appears as a circular icon in the Classic PPM header and in Clarity.

> [!TIP]
> Use initials for contractors, photos for personalized staff accounts, and color-coded graphics for special teams.

**Steps:**
1. Capture or obtain your photo using a smartphone, webcam, scanner, or digital camera.
2. Edit the image file per these requirements:
   - File size: 250 KB or smaller (maximum 2 MB; smaller is better for performance).
   - Dimensions: square, minimum 40 × 40 pixels (80 × 80 pixels at 72 dpi recommended).
   - Supported formats: `.png`, `.jpg`, `.gif`, `.ico`.
3. Log in to Classic PPM as the resource you want to update.
4. Click the current avatar image or initials at the top of the page.
5. Click **Choose File** and select the image file. A preview appears.
6. Click **Return**.
7. (Optional) To revert to the default avatar, click the avatar, select **Remove Image**, and click **Return**.

> [!NOTE]
> As an administrator, you can restrict allowed file types via **Administration > System Options**. Only extensions listed in the authorized set will be accepted system-wide.

---

## Personalize a Page

You can personalize pages to show only the content relevant to your tasks. Personalization is visible only to you and requires sufficient access rights.

> [!NOTE]
> If the owner changes and publishes the original item, your personal changes are lost. The page must have **Allow End Users to Add Tabs** or **Personalizable** enabled in Studio.

### Add or Remove Portlets

**Steps:**
1. Click the **Personalize** icon at the top right of the page.
2. Click **Add** and select portlets from the **Select Content** dialog.
3. Click **Add** or **Add and Select More** to continue.
4. Click **Return** to save and go back to the page.
5. To remove portlets or restore defaults, use the **Remove** or **Restore Defaults** buttons.

### Add a Page Filter

**Steps:**
1. Click the **Personalize** icon.
2. Select the **Page Filters** tab.
3. Click **Add** and select a filter.
4. Click **Add**.
5. (Optional) Set:
   - **Persist** — Filter values persist when navigating between pages using the same filter portlet.
   - **Default** — Sets this as the default page filter.
6. Save your changes.

### Personalize Page Layouts

**Steps:**
1. Click the **Personalize** icon.
2. Select the **Layout** tab.
3. Select a layout template (each option shows columns and percentage widths; **Row Layout** scales by number of portlets per row).
4. Use the arrow keys to reorder portlets.
5. Save your changes.

### Add a New Tab to a Page

**Steps:**
1. Click the **Manage My Tabs** icon on your current page.
2. Click **New**.
3. Enter a **Tab Name** and **Description**, then click **Save and Continue**.
4. Add and manage page content for the new tab, then click **Continue**.
5. Add a page filter and click **Continue**.
6. Configure the layout and click **Save and Return**.

### Edit a Tab

> [!NOTE]
> You can only edit tabs you created. System default tabs and PMO Accelerator tabs cannot be edited.

**Steps:**
1. Click the **Manage Project Tabs** icon on your current page.
2. On the **Manage Tabs** page, click the name of the tab to edit.
3. Edit page properties, content, layout, and filters.
4. Save the changes.

> [!NOTE]
> Changes made in **Manage My Tabs** for a specific project affect all users with access to that project — they are project-specific, not user-specific. For changes that apply across all projects, make them in Studio.

### Present a Page as a Pop-up

**Steps:**
1. Open the list page you want to configure.
2. Click the **Options** icon and click **Configure**.
3. Open the **List Column Section** menu and click **Fields**.
4. Locate the **Name** attribute and click the associated **Properties** icon.
5. Select **Open as Pop-up** and click **Save and Return**.
6. Click **Return**.

> [!NOTE]
> Setting any item to appear in a pop-up applies to all list items on that page.

---

## Personalize a List

### List Options Toolbar

- **Filter** — Filter the list using criteria you select. Double-click the toolbar or use the `+`/`-` icons to expand/collapse.
- **Options Menu** — Access portlet-specific options:
  - **Configure** — Modify list and filter fields, layout, aggregations, display options, Gantt settings, and time-period settings.
  - **Multisort** — Sort by multiple columns.
  - **Export to Excel (Data Only)** — Exports the list without charts.

### Filter a List

**Steps:**
1. Open the list page.
2. Click the **Expand Filter** icon if the filter is not open.
3. Enter filter criteria and click **Save Filter**.
4. Enter a name for the filter.
5. Select **Default** to make this filter the default for this list page.
6. Save your changes.

> [!NOTE]
> When a filter is applied to a hierarchical list, expanded items collapse. Filtered results include parent and higher-level items, all shown collapsed.

### Build a Power Filter

A power filter is a custom expression-based filter. Only one power filter can be created per list page.

Example expression (active projects):
```
project.is_active == 1
```

**Steps:**
1. With a list page open, expand the filter.
2. Click **Build Power Filter**.
3. Complete the fields to build the left part of the expression.
4. Select an operator.
5. Complete the fields for the right part of the expression.
6. Click **Add**. The expression appears in the **Expression** field.
7. (Optional) To add multiple clauses, select from the **And/Or** field, build the additional clause, and click **Add**.
8. Use the available buttons:
   - **Evaluate** — Validates the expression syntax. **INVALID** appears if syntax is incorrect.
   - **Add Parenthesis** — Surrounds the expression with parentheses.
   - **Negate Expression** — Negates the expression with `!()`.
   - **Clear** — Clears the expression.
9. Save your changes.

### Sort a List

- Click a **column header** to sort by that column. Click again to reverse the sort order.
- Use **Multisort** (via the **Options** menu) to sort by multiple columns.

**Multisort Steps:**
1. Open a list page.
2. Click the **Options** icon and select **Multisort**.
3. Select columns and sort directions for the first through fourth fields.
4. Click **Save**.

### Edit a List

Click anywhere in a field to enter edit mode for the entire list. A flag indicates unsaved changes. Press **Esc** to discard.

> [!NOTE]
> If the list includes a time-scaled value column, save any other changes before editing time-scaled information.

**Steps:**
1. Open a list page.
2. Select the check box or click a row to insert a new row below it.
3. Click **New**.
4. Edit the required fields and save your changes.

### Export a List to Excel or CSV

**Steps:**
1. Ensure you are exporting the returned results (no pagination applied).
2. Open the list page and click the **Export to Excel** icon.
3. Open as a spreadsheet or save to your desktop.

> [!NOTE]
> Exported data may appear differently in Excel due to format settings. Exported dates appear in `MM-DD-YYYY` format (locale settings are not applied for Excel; CSV preserves your locale format).

**Export Rules for Excel:**
- The list must display the **Export to Excel** icon; otherwise, the list is restricted.
- Only one active export at a time.
- Filtered results only if a filter is applied.
- Only first-level items are exported.
- Only displayed fields are exported.
- Only items on the current page are exported (export multiple pages independently).
- Maximum of 300 items for exports containing charts.

**Export Rules for Excel (Data Only) and CSV:**
- Only one active export at a time.
- Up to 25,000 rows without charts.
- Fields with hyperlinks use the Excel `=HYPERLINK()` formula.

**Troubleshoot Export Timeouts:**

If an export exceeds the system time limit (default: 600 seconds), Classic PPM stops the operation and produces an empty spreadsheet with a timeout message. To resolve:
- Apply a filter to reduce data volume and retry.
- Use a custom report for longer lists.

If Excel shows a warning about mismatched file format when opening a `.xls` file from Classic PPM, the file is safe to open. Click **Yes**.

---

## Favorites Menu

### Add Your Favorite Links

Use the **Favorites** menu to store frequently used links. To save the current page as a favorite, open the **Favorites** menu and click **Add Current**.

### Add a Favorites Page Link

**Steps:**
1. Open **Favorites** and click **Configure**.
2. Click **Add**.
3. Select **Page Link** and click **Next**.
4. Complete the fields:
   - **Link Name** — Label for the page link in the Favorites menu.
   - **Description** — Purpose of the section or link.
   - **Page Name** — Page that opens when this link is clicked.
   - **Parent Menu Item** — Submenu under Favorites where this link appears.
5. Save your changes.

### Add a Favorites Action Link

**Steps:**
1. Open **Favorites** and click **Configure**.
2. Click **Add**.
3. Select **Action Link** and click **Next**.
4. Complete the fields:
   - **Link Name** — Name of the link displayed in the menu.
   - **Action Name** — Action that occurs when the link is clicked.
   - **Parent Menu Item** — Section where the link appears.
5. Save your changes.

---

## Related

- [[_MOC Classic PPM]]

%%Source: p2038-2053%%
