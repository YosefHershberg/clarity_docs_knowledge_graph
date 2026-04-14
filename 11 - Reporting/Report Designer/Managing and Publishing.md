---
title: Managing, Editing, and Publishing Reports
tags:
  - howto
aliases:
  - Publish Reports
canonical: true
audience: pm, admin
domain: reporting
---

# Managing, Editing, and Publishing Reports

Managing, editing, and publishing reports in the Report Designer gives users full control over reporting outputs. Reports go through distinct states — **Draft**, **Published**, and **Has Edits** — allowing changes to be made in draft mode without impacting the live published version.

## Topics Covered

- [[#Managing Reports]]
- [[#Using Layouts]]
- [[#Editing a Report]]
- [[#Working with Preview Mode]]
- [[#Associating Report to Menu Icon]]

---

## Managing Reports

Once a report is created and published, you can use the Report Designer to manage, modify, and enhance it. This includes customizing chart and table properties, adjusting the layout, adding data providers, and editing both published and unpublished reports.

---

## Using Layouts

The **Layout** option lets you structure the report for optimal viewing and presentation.

### Accessing and Configuring the Layout

1. In the report canvas, click the **Layout** button in the top menu.
2. Configure **Page Orientation**: **Landscape** or **Portrait**.
3. Choose **Responsive** (adapts to screen sizes) or **Fixed** (consistent across all devices).
4. **Drag and drop** widgets to organize them on the canvas. Resize as needed.
5. Use **grid alignment tools** for even spacing and proper positioning.
6. Click **Preview** to validate the layout before publishing.
7. Click **Save** to retain the design.

### Fixed Layout Details

- Enables export directly to **PowerPoint (PPTX)** or **PDF**.
- Export is **not** supported in Responsive layout.
- **Zoom In/Out Control:** Magnifies the canvas for easier design work. Does not increase the actual layout size.
- **Grey UI Treatment:** Areas outside layout boundaries are grayed out. Widgets cannot be placed in grayed areas, and these areas will not be included in PPTX exports.

---

## Editing a Report

### Editing a Report That Has Never Been Published

1. Open the draft report from the Reports grid.
2. Modify widgets, adjust their properties, add/remove filters, and update the layout.
3. Changes are **saved automatically** in draft mode.
4. Click **Preview** to review, then **Publish** when ready.

### Editing a Published Report

1. Locate the published report in the Reports grid.
2. Click **Edit** to open the report in **Edit Mode**.
3. Make necessary changes:
   - Add or modify widgets
   - Adjust filters at widget, tab, or report level
4. Choose how to save:
   - **Save as Draft:** Saves changes without affecting the live report. Status updates to **Has Edits**.
   - **Publish Changes:** Applies edits to the live version, replacing the previous published report.
5. Use **Preview** to review before finalizing.
6. Click **Exit Edit Mode** when done.

---

## Working with Preview Mode

**Preview Mode** lets designers validate and debug the report as an end-user would see it, before publishing.

### How to Use Preview Mode

1. Click the **Preview** button in the report toolbar.
2. Interact with the report as an end-user:
   - View and modify filters (if enabled)
   - Navigate pagination
   - Browse attribute groups using the **pagination bar**
3. To export from Preview Mode, click **Export > Export to PPTX** or **Export to PDF**.
4. To return to design mode, click **Exit Preview**.

### Additional Preview Mode Features

| Feature | Details |
|---------|---------|
| **Report Layout** | Works with both Responsive and Fixed layout formats |
| **Data Limiting** | Use the **Show Data** dropdown to limit records for faster preview of large datasets |
| **Export to PPTX** | Export the report as a PowerPoint presentation |
| **Export to PDF** | Export any fixed-layout report or a specific tab to PDF |
| **Attribute Groups** | In Edit Mode, only the first record is shown. In Preview Mode, use the pagination bar to step through all records |

> [!NOTE]
> Preview Mode operates independently of design features. Report Filters and Pagination are fully functional, allowing you to verify filter behavior before publishing.

---

## Associating Report to Menu Icon

After publishing a report, you can associate it with a navigation menu icon so users can access it directly from Clarity's main navigation pane.

### Steps

1. **Log in and access System Settings:**
   - Navigate to **Administration > System Settings**.

2. **Navigate to Menu Management:**
   - Open the **Navigation Menu** tab in System Settings.

3. **Add a New Menu Item:**
   - Click **Add Page** to create a new menu item.

4. **Configure Menu Item Settings:**

   | Field | Description |
   |-------|-------------|
   | **Name** | Name of the menu item (e.g., "Investment Summary Report") |
   | **Page** | Select the published report from the dropdown |
   | **Icon** | Choose an icon to visually represent the report |
   | **Show** | Enable the **Show** checkbox to make it visible in the navigation |

5. **Assign Permissions:**
   - Ensure appropriate view permissions are set. Only users with the required access rights will see the menu item.

6. **Save and Apply Changes:**
   - Click **Save**. The menu item will appear in the navigation pane for authorized users.

7. **Verify Menu Association:**
   - Return to the main navigation and confirm the new report menu item is visible and accessible.

8. **Export the Report (Optional):**
   - Open the report via the menu icon and click **Export > Export to PPTX** or **Export to PDF**.

9. **Modify or Remove the Menu Icon (if needed):**
   - Return to **System Settings > Navigation Menu**, locate the menu item, and edit its properties or uncheck **Show** to remove it without deleting the report.

---

## Related

- [[_MOC Reporting]]

%%Source: p1759-1766%%
