---
title: Create a Project
tags:
  - howto
aliases:
  - Creating a Project
  - New Project
  - Copy Project
  - Import Projects CSV
---

# Create a Project

There are three ways to create a project in Clarity PPM:
1. **Create from scratch** — fill in a new project form
2. **Copy an existing project** — duplicate a project and its configuration
3. **Import via CSV** — bulk-create projects from a spreadsheet

%%Source: p1002-1010%%

---

## Method 1: Create a Project from Scratch

### Steps
1. Go to **Projects** in the left navigation.
2. Click the **+ New Project** button (top-right of the projects list).
3. The **New Project** panel slides open on the right.
4. Fill in the required fields:

| Field | Required | Notes |
|-------|----------|-------|
| **Name** | Yes | Must be unique within the instance |
| **ID** | Yes | Auto-generated or manually entered; cannot be changed after save |
| **Status** | Yes | Default: Active |
| **Start Date** | Yes | Planned project start |
| **Finish Date** | Yes | Planned project end |
| **Manager** | Yes | Defaults to current user |
| **Blueprint** | Yes | Determines available fields and modules |
| **Investment OBS** | Conditional | Required if your instance enforces OBS |
| **Description** | No | Free-text project description |

5. Click **Create** (or **Create and Open** to go directly into the project).

> [!tip] The **Blueprint** selection is critical — it determines which modules (tasks, financials, risks, etc.) appear in the project. Contact your administrator if you are unsure which blueprint to use. See [[_MOC Administration]].

> [!warning] The **Project ID** cannot be changed after the project is saved. Plan your ID naming convention carefully.

---

## Method 2: Copy an Existing Project

Copying a project creates a new project with the same configuration, custom field values, and optionally the same tasks and team.

### Steps
1. From the **Projects list**, find the project you want to copy.
2. Click the **More (...)** menu on the project row.
3. Select **Copy**.
4. The **Copy Project** dialog opens. Configure:

| Option | Description |
|--------|-------------|
| **New Name** | Name for the copied project |
| **New ID** | ID for the copied project |
| **Copy Tasks** | Include phases, milestones, and tasks |
| **Copy Team** | Include the existing team/staff records |
| **Copy Financial Plans** | Include cost plans and budget plans |
| **Copy Risks/Issues** | Include the risk and issue logs |
| **Shift Dates** | Offset all dates by a number of days from a new start date |

5. Click **Copy** to create the new project.

> [!note] When copying with **Shift Dates**, all task and milestone dates shift relative to the new project start date, preserving duration and lag relationships.

> [!tip] Use project copying to implement **project templates** — create a master template project and copy it for each new initiative.

---

## Method 3: Import Projects via CSV

Bulk-create multiple projects by uploading a CSV file.

### Prepare the CSV
The CSV must include these columns (column headers are case-sensitive):

| Column | Required | Notes |
|--------|----------|-------|
| `name` | Yes | Project name |
| `id` | No | If omitted, auto-generated |
| `status` | No | Defaults to Active |
| `start` | Yes | Format: YYYY-MM-DD |
| `finish` | Yes | Format: YYYY-MM-DD |
| `manager` | No | Username of the manager |
| `description` | No | Plain text |

> [!warning] Date format must be **YYYY-MM-DD** (ISO 8601). Other formats will cause import errors.

### Import Steps
1. Go to **Projects** list.
2. Click the **Import** button (or find it in the **More** menu at the top of the list).
3. Select **Import from CSV**.
4. Click **Browse** and select your CSV file.
5. The system displays a **field mapping** screen — map CSV columns to Clarity fields if headers differ.
6. Review the **validation summary** — errors are highlighted in red.
7. Click **Import** to create the projects.

> [!note] The CSV import creates projects but does not import tasks, team members, or financial data. Use the import for bulk project creation, then configure each project individually — or use XOG for full data imports. See [[_MOC Development]] for XOG documentation.

---

## After Creating a Project

Once a project is created, proceed to:

- [[Staffing]] — Add resources to the project team
- [[Tasks Phases Milestones]] — Build the work breakdown structure
- [[Financial Plans]] — Set up cost and budget plans
- [[Canvas Dashboard]] — Configure the project overview dashboard

---

## Project Fields Reference

### Standard Fields Available on All Projects

| Field | Description |
|-------|-------------|
| **Name** | Project display name |
| **ID** | Unique identifier |
| **Status** | Active / Inactive / other configured values |
| **Priority** | Numeric priority (1 = highest) |
| **Manager** | Responsible project manager |
| **Start / Finish** | Planned dates |
| **% Complete** | Rolled up or manually set |
| **Investment OBS** | Organizational unit |
| **Goals** | Free-text or structured goal statement |
| **Risks** | Risk rating (High/Medium/Low) |
| **Alignment** | Strategic alignment rating |
| **Budget** | High-level budget figure |
| **Benefit** | Expected benefit value |

### Blueprint-Controlled Fields
Additional fields are added by the Blueprint assigned to the project. See [[_MOC Administration]] for blueprint configuration.

---

## Related Notes
- [[Getting Started]]
- [[Staffing]]
- [[Tasks Phases Milestones]]
- [[Financial Plans]]
- [[_MOC Administration]]
- [[_MOC Projects]]
