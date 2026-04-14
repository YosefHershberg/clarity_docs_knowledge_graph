---
title: Staffing a Project
tags:
  - howto
  - concept
aliases:
  - Project Staffing
  - Team Members
  - Add Resources
  - Project Team
canonical: true
audience: pm
domain: projects
---

# Staffing a Project

Staffing is the process of adding resources (people or roles) to a project team and defining how much of their time is allocated to the project. Clarity supports **named resources**, **generic roles**, and **mixed booking** combinations.

%%Source: p1018-1040%%

---

## Concepts

### Resources vs. Roles
| Type | Description | Use When |
|------|-------------|----------|
| **Named Resource** | A specific person (linked to a user or resource record) | You know exactly who will do the work |
| **Generic Role** | A placeholder role (e.g., "Senior Developer") | Planning before specific resources are identified |

### Booking Types
| Type | Description |
|------|-------------|
| **Hard Booking** | Firm commitment; counts against the resource's availability |
| **Soft Booking** | Tentative; does not consume confirmed capacity |
| **Mixed Booking** | A staff record that has both hard and soft portions |

> [!note] Booking type visibility and editability depend on your **access rights** and the **Resource Management** configuration. See [[_MOC Resources]].

### Allocation
- **Allocation** defines what percentage (or absolute hours) of a resource's time is dedicated to this project during the staffing period.
- Allocation is expressed as a percentage of working hours per day, per week, or as a total.
- Default allocation is typically **100%** unless the system default is configured differently.

---

## Adding Staff to a Project

### Via the Team Layout
1. Open the project and navigate to the **Team** module (left nav).
2. Click **+ Add** (top-right of the team list).
3. In the **Add Team Member** dialog:
   - Search by **name**, **role**, or **OBS unit**.
   - Select one or more resources or roles.
   - Set the **Booking Type** (Hard / Soft).
   - Set the **Start** and **Finish** dates for the staffing period.
   - Set the **Allocation** (percentage).
4. Click **Add**.

> [!tip] You can add multiple resources at once by selecting several from the search results before clicking Add.

### Via a Task Assignment
When you assign a resource to a task in [[Tasks Phases Milestones]], Clarity automatically adds them to the project team if they are not already there.

---

## Modifying Staff Records

### Changing Allocation
1. In the **Team** layout, click the resource row to open the detail panel.
2. Edit the **Allocation %** field.
3. If using the **allocation curve**, open the **Curve** view to set period-by-period allocation values.
4. Click **Save**.

> [!tip] The **Allocation Curve** allows you to ramp up or ramp down a resource's involvement over the project timeline — useful for specialists who work intensively at the start or end of a project.

### Changing Dates
- Adjust **Start** and **Finish** on the staff record to change the active period.
- Dates on the staff record should align with or fall within the project dates.

### Changing Booking Type
- Open the staff record and change the **Booking Type** field.
- Switching from Soft to Hard moves the allocation into the resource's confirmed capacity.

---

## Replacing a Resource

If a resource leaves or a role needs to be filled by a specific person:

1. In the **Team** layout, find the staff record to replace.
2. Click the **More (...)** menu on that row.
3. Select **Replace**.
4. Search for the replacement resource.
5. Choose whether to:
   - Transfer **task assignments** from the old resource to the new one.
   - Transfer the **allocation** values.
6. Click **Replace**.

> [!warning] Replacing a resource also replaces them on any task assignments within this project. Review task assignments after replacement to ensure the correct workload is reflected.

---

## Removing Staff

1. In the **Team** layout, find the staff record to remove.
2. Click the **More (...)** menu.
3. Select **Delete**.
4. Confirm the deletion.

> [!warning] Deleting a staff record removes the resource from all task assignments within this project. Actuals (logged time) are not deleted but will no longer be associated with a current team member.

---

## Mixed Bookings

A **mixed booking** is a single staff record that contains both a Hard and a Soft portion of the total allocation.

**Example:** A resource is allocated 80% Hard (confirmed) and 20% Soft (tentative) — total 100%.

### Configuring a Mixed Booking
1. Open the staff record.
2. Set **Hard Allocation %** in one field.
3. Set **Soft Allocation %** in the other field.
4. The two values are tracked separately against resource capacity.

> [!note] Mixed bookings require the **Mixed Booking** feature to be enabled by an administrator in Resource Management settings.

---

## Allocation Values in Detail

Allocation can be viewed and edited in several ways:

| View | Description |
|------|-------------|
| **Flat %** | Single percentage applied uniformly across all periods |
| **Curve (Period-by-Period)** | Different allocation % for each time period (weekly/monthly) |
| **Hours** | Total hours for the staffing period |

### Period-by-Period Allocation (Curve)
1. Open the staff record.
2. Click **Edit Curve** or the curve icon.
3. A calendar-style grid opens showing the allocation by period.
4. Edit values directly in each period cell.
5. Click **Save**.

> [!tip] Use period-by-period allocation when a resource works part-time early in the project and full-time later, or vice versa.

---

## Access Rights for Staffing

| Right | What It Allows |
|-------|---------------|
| **Project - Edit** | Add/edit/remove team members on projects you manage |
| **Resource - Soft Book** | Add resources with Soft booking type |
| **Resource - Hard Book** | Add resources with Hard booking type |
| **Resource - Edit Allocation** | Modify allocation percentages |
| **Resource Management - Navigate** | View and use the Resource Management module |

> [!warning] If you cannot add a resource, you may lack the **Resource - Hard Book** right, or the resource may not be in an OBS unit you have access to. Contact your administrator.

---

## Team Layout Columns

| Column | Description |
|--------|-------------|
| **Resource / Role** | Name of the person or placeholder role |
| **Booking Type** | Hard, Soft, or Mixed |
| **Allocation %** | Total allocation percentage |
| **Start / Finish** | Staffing period dates |
| **Role** | The resource's primary role |
| **OBS Unit** | Resource's OBS unit |
| **Skills** | Skills associated with the resource |
| **ETC** | Estimate to complete (hours remaining) |
| **Actuals** | Hours logged against this project |

---

## Related Notes
- [[Tasks Phases Milestones]] — Assign staff to specific tasks
- [[Financial Plans]] — Allocation drives labor costs in cost plans
- [[_MOC Resources]] — Resource management, availability, and planning
- [[_MOC Financials]] — How staff costs flow into financial plans
- [[_MOC Projects]]
