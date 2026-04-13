---
title: Saved Views
tags:
  - howto
aliases:
  - Views
  - Grid Views
  - Saved View
  - Custom Views
---

# Working with Saved Views

**Saved Views** in Clarity PPM 16.4.1 allow users to save and recall a specific combination of grid columns, filters, sort order, grouping, and layout (grid/board/chart). Views can be personal (for your own use) or shared with all users who have access to that object.

%%Source: p299-303%%

---

## What is a Saved View?

A Saved View captures the current state of a grid or board configuration, including:

| Component | Example |
|-----------|---------|
| **Columns** | Name, Status, Manager, Budget, Finish Date |
| **Column widths and order** | Name (wide), Status (narrow), etc. |
| **Active filters** | Status = Active AND Department = IT |
| **Sort order** | Sort by Finish Date ascending |
| **Grouping** | Grouped by Manager |
| **Layout** | Grid / Board / Chart |
| **Conditional formatting rules** | Red if Status = At Risk |
| **Rows per page** | 50 rows |

> [!tip]
> Think of Saved Views as "presets" for your grid. Create one view for executive reporting (fewer columns, grouped by status) and another for detailed editing (many columns, sorted by priority).

---

## Accessing Views

The **View dropdown** in the grid toolbar shows all available views for the current context:

- **Default View** — The system default configuration
- **My Views** — Views you have created and saved
- **Shared Views** — Views shared by other users or administrators

Click any view in the dropdown to apply it instantly.

---

## Creating a Saved View

1. Configure your grid as desired:
   - Add/remove columns
   - Apply filters
   - Set sort order
   - Set grouping
   - Switch layout (grid/board/chart)
   - Apply conditional formatting
2. Click **View** dropdown → **Save As New View** (or **Save Current View As...**).
3. Enter a **Name** for the view.
4. Set **Visibility**:
   - **Private** — Only you can see and use it
   - **Shared** — All users with access to this grid can see it
5. Optionally set it as your **Default View** for this grid.
6. Click **Save**.

> [!note]
> Only users with sufficient access rights can create **Shared** views. Administrators can restrict who can create shared views.

---

## Editing a Saved View

1. Apply the view you want to edit from the **View** dropdown.
2. Make your desired changes (columns, filters, etc.).
3. Click **View** dropdown → **Save** (to update the current view) or **Save As** (to create a copy).

> [!warning]
> If you edit a **Shared** view, your changes will be visible to all users who use that view. Consider saving as a new personal copy if you don't want to affect others.

---

## Deleting a Saved View

1. Click the **View** dropdown.
2. Find the view you want to delete.
3. Click the **trash/delete icon** next to the view name.
4. Confirm deletion.

> [!note]
> You can only delete views you own. Administrators can delete any view, including shared views created by others.

---

## Setting a Default View

The Default View is the configuration that loads automatically when you navigate to a grid.

1. From the **View** dropdown, hover over the view you want as default.
2. Click **Set as Default** (star icon or menu option).

> [!tip]
> Set a default view that matches your most common work context. For example, if you primarily manage active projects, set a default view filtered to **Status = Active** with your preferred columns.

---

## Sharing Views with Teams

Shared views are visible to all users with access to the same grid. They appear under a **Shared** section in the View dropdown.

### Best Practices for Shared Views
- Name shared views clearly (e.g., "IT Portfolio - Executive Summary" not "My View 1")
- Document the purpose of the view in a team wiki or this note
- Avoid over-filtering shared views — let users apply additional personal filters
- Designate a view owner who is responsible for keeping it up to date

---

## Views and Blueprints

The fields available for columns and filters in a view are controlled by the **Blueprint** for that investment/object type. If a column you need is not available, your administrator may need to add the field to the Blueprint.

---

## View Switching Shortcut

Quickly switch between views using the keyboard:

- In the **View** dropdown, type to search for a view by name.
- Arrow keys navigate the list.
- Press **Enter** to apply the selected view.

---

## Related Notes

- [[Common Components/Grids]] — The grid that views configure
- [[Common Components/Filters]] — Filters saved as part of a view
- [[Common Components/Board Layout]] — Board layout saved in views
- [[Common Components/Charts]] — Chart configuration saved in views
- [[Common Components/Conditional Formatting|Grids#Conditional Formatting]] — Formatting rules saved in views
