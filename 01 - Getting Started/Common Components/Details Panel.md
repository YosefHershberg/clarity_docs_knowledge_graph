---
title: Details Panel
tags:
  - howto
aliases:
  - Side Panel
  - Slide-in Panel
  - Record Details
  - Quick Edit Panel
canonical: true
audience: everyone
domain: ui
---

# Details Panel

The **Details Panel** is a slide-in panel in Clarity PPM 16.4.1 that opens on the right side of the screen when you click on a record row in a grid or a card on a board.
It provides a quick way to view and edit a record's full field set without leaving the list or navigating to the record's full detail page.

---

## What is the Details Panel?

The Details Panel is designed to improve productivity by reducing context-switching.
Instead of clicking into a record, waiting for the page to load, making changes, and navigating back, you can edit key fields directly in the panel while keeping the list visible.

- Left side: grid or board list context remains visible
- Right side: details panel with editable fields (status, manager, dates, budget, description)
- Panel actions: close panel, navigate to previous/next record, and **Open Full Record**

---

## Opening the Details Panel

- **Click on a record row** in a grid - the Details Panel slides in from the right.
- **Click on a card** in Board Layout - the panel opens with that card's details.
- Alternatively, click the **expand arrow** or **details icon** on the record row.

> [!tip]
> The Details Panel opens without changing your URL or losing your place in the grid. This is ideal for quickly checking or updating a record's details while browsing a long list.

---

## Navigating Between Records in the Panel

Once the Details Panel is open:
- Use the **up/down arrow buttons** in the panel header to move to the previous/next record in the list without closing the panel.
- The grid highlights the currently selected row as you navigate.

This makes it efficient to review records one-by-one - for example, reviewing all at-risk projects to update their status.

---

## Editing in the Details Panel

Most fields visible in the Details Panel are **inline editable**:

1. Click on a field value to activate it.
2. The field becomes an input (text box, dropdown, date picker, etc.).
3. Enter the new value.
4. Click elsewhere or press **Tab** to move to the next field.
5. Changes are **auto-saved** as you move between fields (no explicit Save button needed for most fields).

> [!warning] Required Fields
> If a required field is cleared or invalid, the panel will show a validation error. The record cannot be saved in an invalid state.

> [!note] Field Availability
> The fields shown in the Details Panel are controlled by the **Blueprint** configuration for that investment type. Administrators configure which sections and fields appear. If a field you need is not visible, ask your administrator to add it to the Blueprint layout.

---

## Sections in the Details Panel

The Details Panel may be organized into **collapsible sections** (depending on Blueprint configuration):

| Section (typical) | Content |
|-------------------|---------|
| **Summary** | Key fields: Name, Status, Manager, Dates, Budget |
| **Financial** | Budget, Cost, Benefit, Variance |
| **Team** | Manager, Sponsor, OBS Unit |
| **Custom Fields** | Organization-specific fields |
| **Description** | Long-text description field |

Click a section header to expand or collapse it.

---

## Opening the Full Record Page

The Details Panel shows a **subset** of all available information. For the complete record with all tabs (Tasks, Team, Financials, Risks, etc.):

- Click **Open Full Record** (or the arrow/expand icon) at the top of the Details Panel.
- This navigates to the full investment/project detail page.
- Use the browser **Back** button to return to the grid with your previous filter and position.

---

## Closing the Details Panel

- Click the **X** button in the panel header.
- Press **Escape** on the keyboard.
- Click anywhere outside the panel on the grid.

---

## Details Panel vs. Full Record Page

| Feature | Details Panel | Full Record Page |
|---------|--------------|-----------------|
| Quick field edits | Yes | Yes |
| View all tabs (Tasks, Team, etc.) | No | Yes |
| Stay in list view | Yes | No |
| Navigate between records | Yes (arrow keys) | No |
| See financial sub-tabs | No (summary only) | Yes |

---

## Related

- [[Common Components/Grids]] - The grid from which the Details Panel is opened
- [[Common Components/Board Layout]] - Also supports the Details Panel
- [[Common Components/Filters]] - Filter the grid to control which records you navigate through in the panel
- [[_MOC Projects]] - Project detail pages (full record view)
- [[_MOC Investments]] - Investment detail pages (full record view)

%%Source: p292-293%%
