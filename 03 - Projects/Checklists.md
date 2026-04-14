---
title: Project Checklists
tags:
  - howto
aliases:
  - Checklists
  - Project Checklist
  - Quality Checklist
  - Gate Checklist
canonical: true
audience: pm
domain: projects
---

# Project Checklists

**Checklists** in Clarity PPM provide a structured way to track quality gates, stage-gate criteria, or repeatable processes within a project. Each checklist contains items that can be checked off as they are completed, with optional assignment to a responsible resource.

%%Source: p1081-1094%%

---

## Overview

Checklists are project-level artifacts — they live in the **Checklists** module of a project. They are distinct from **To-Dos** (which are task-level) and **Risks/Issues** (which are logged problems).

**Common use cases:**
- Stage-gate review criteria ("Has the business case been approved?")
- Pre-launch quality checklists ("Have all environments been tested?")
- Compliance verification lists
- Project closure checklists

> [!note] The Checklists module must be enabled in the project's **Blueprint** by an administrator before it appears in the project navigation. See [[_MOC Administration]].

---

## Navigating to Checklists

1. Open a project.
2. In the left navigation panel, click **Checklists**.
3. The Checklists module opens, showing all checklists for this project.

---

## Creating a Checklist

### Steps
1. In the Checklists module, click **+ New Checklist**.
2. Fill in the checklist header fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | Descriptive name (e.g., "Phase 1 Gate Review") |
| **Description** | No | Purpose or instructions for the checklist |
| **Due Date** | No | Target completion date for the whole checklist |
| **Assigned To** | No | Resource responsible for this checklist overall |
| **Status** | Yes | Not Started / In Progress / Complete |

3. Click **Save** (or **Save and Add Items** to proceed immediately to item entry).

---

## Adding Checklist Items

Each checklist contains one or more **items** (individual check-off entries).

### Adding Items Manually
1. Open the checklist.
2. Click **+ Add Item**.
3. Fill in the item fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | The item text (e.g., "Business case reviewed by sponsor") |
| **Description** | No | Additional detail or instructions |
| **Assigned To** | No | Individual responsible for this item |
| **Due Date** | No | When this item should be completed |
| **Status** | Yes | Not Started / In Progress / Complete / N/A |
| **Notes** | No | Comments or evidence of completion |

4. Click **Save** or **Add Another** to continue adding items.

### Adding Items from a Template
If checklist templates have been configured by your administrator:

1. Click **Add from Template** (if available).
2. Select the template from the list.
3. Items from the template are added to the checklist.
4. Modify as needed and save.

> [!tip] Administrators can create **checklist templates** in the Administration section to ensure consistency across projects. Ask your admin to set up templates for recurring gate reviews.

---

## Completing Checklist Items

### Mark an Item Complete
- Click the **checkbox** next to an item, or
- Open the item and change **Status** to **Complete**.

### Mark as Not Applicable
- Open the item and set **Status** to **N/A**.
- N/A items do not count against completion percentage.

### Checklist Completion Percentage
The checklist header shows an overall **% Complete** calculated as:

```
% Complete = (Completed items / Total active items) × 100
```

N/A items are excluded from the count.

---

## Editing a Checklist

1. Open the checklist from the Checklists module.
2. Click **Edit** (pencil icon) on the checklist header or on individual items.
3. Make changes.
4. Click **Save**.

> [!warning] Deleting a checklist item permanently removes it. There is no undo — consider setting Status to **N/A** instead of deleting if you want to preserve history.

---

## Deleting a Checklist

1. In the Checklists module, find the checklist row.
2. Click the **More (...)** menu.
3. Select **Delete**.
4. Confirm the deletion.

> [!warning] Deleting a checklist also deletes all its items. This action cannot be undone.

---

## Checklist Grid View

The Checklists module shows all checklists in a **grid** with these columns:

| Column | Description |
|--------|-------------|
| **Name** | Checklist name; click to open |
| **Status** | Overall checklist status |
| **% Complete** | Calculated from items |
| **Due Date** | Target completion date |
| **Assigned To** | Responsible resource |
| **Items** | Count of total items |
| **Completed Items** | Count of completed items |

---

## Filtering Checklists

Use the **Filter** panel to narrow checklists by:
- Status
- Due Date range
- Assigned To
- % Complete range

---

## Checklists vs. To-Dos vs. Risks

| Feature | Checklists | To-Dos | Risks |
|---------|:----------:|:------:|:-----:|
| Level | Project | Task or Project | Project |
| Has multiple items | Yes | Each is standalone | Each is standalone |
| Tracks completion % | Yes | No (each is binary) | No |
| Template support | Yes (admin) | No | No |
| Use case | Gate reviews, quality | Small work items | Potential problems |

---

## Related Notes
- [[Tasks Phases Milestones]] — To-Dos on tasks vs. Checklists
- [[Risks Issues Changes]] — For problems that arise (not quality criteria)
- [[_MOC Administration]] — Blueprint configuration for checklists
- [[_MOC Projects]]
