---
title: Resource Management (Classic PPM)
tags:
  - concept
  - classic
  - howto
aliases:
  - Resource Management Classic
source_pages: 2570-2617
---
# Resource Management (Classic PPM)

Classic PPM provides comprehensive resource management capabilities for creating resources and roles, configuring calendars, finding and booking resources to investments, filling requisitions, and managing capacity planning scenarios.

## Create Resources and Roles

As a resource manager or administrator, create roles first as placeholders, then create named resources to fill them.

### Create a Labor Resource or Role

1. As an administrator (optional): Create the user record via **Administration > Organization and Access > Resources** > New
2. As a Resource Manager: Click **Home > Resource Management > Resources** > **New**
3. Set **Resource or Role** = Resource; **Resource Type** = Labor
4. Click **Next** and complete:
   - **Primary Role** — Primary area of expertise
   - **Category** — Area of expertise (e.g., Software Development)
   - **External** — Whether the resource works for an outside company (Default: Cleared)
   - **Availability** — Hours per business day (Default: 8; **required** and must be > 0 for labor)
   - **Input Type Code** — Code for financial transactions
   - **Track Mode** — PPM (timesheets), None (transaction vouchers/external scheduler), Other (third-party import) (Default: PPM)
   - **Open for Time Entry** — Enables timesheet access; auto-assigns/removes Resource - Enter Time access right (Default: Cleared)
   - **Include in Datamart** — Include in datamart for financial portlets/reports (Default: Cleared)
   - **Resource Manager** — Person managing this resource
   - **Booking Manager** — Default booking manager for requisitions
5. Save; then click the **Calendar** tab to define availability
6. (Optional) Click **Properties > Contact Information** to add contact details
7. As administrator: Activate the resource and create an initial login password

> **Note:** Labor resources (users) cannot be deleted — the system preserves history for referential integrity. To deactivate a user who has left, lock their account; create a new resource record if they return.

### Create a Nonlabor Resource or Role

1. Click **Home > Resource Management > Resources** > **New**
2. Set **Resource or Role** = Resource or Role; **Resource Type** = Equipment, Material, or Expense
3. Click **Next** and complete:
   - **Parent Role** — Role one level higher in the hierarchy
   - **Primary Role** — Primary area of expertise
   - **Category** — Area of expertise (e.g., projector, server, truck)
   - **External** — Whether external to the company
   - **Availability** — Hours per business day (required only for Labor type; optional for Material/Equipment)
   - **Resource Manager / Booking Manager**
4. Save; then click the **Calendar** tab and **Financial** properties as needed

### Assign Skills to Labor Resources

1. Open a resource or role > **Skills** tab
2. Click **Add** to open the Select Skills page
3. Select skills from the skills hierarchy and click **Add**
4. For each skill, set:
   - **Proficiency Level** — How well the resource performs the skill
   - **Interest** — How interested the resource is in performing the skill
   - **Weighting** — Tiebreaker when multiple skills have the same proficiency/interest

### Financially Enable a Resource or Role

1. Open the resource or role > **Properties** menu > **Financial**
2. In the **Supplemental** section, set:
   - **Financially Active** — Enable financial management activities
   - **Transaction Class** — Groups transaction types for financial processing
   - **Resource Class** — Category for financially enabled resources/roles
3. For labor resources, also set **Financial Department** and **Financial Location**
4. (Optional) For resources only: set **Target Billing Rate**, **Target Billing Rate Currency**, **Target % Billing**

### Configure Booking Managers by OBS for a Role

1. Open a role > **Booking OBS** tab
2. Click **Add** and select an OBS Unit and Booking Manager for that unit
3. Repeat for each OBS unit/booking manager combination
4. Use **Copy from Role** / **Copy to Role** to replicate mappings

## Configure Base Calendars, Shifts, and Work Days

Base calendars determine FTE and availability calculations for resources.

### Create a Base Calendar

1. Click **Administration > Project Management > Base Calendars**
2. Click **New** and complete:
   - **Calendar Name** — Unique name
   - **Base Calendar** — Parent calendar to base this on (e.g., Standard)
   - **Standard** — Mark as the standard calendar (Default: Cleared)
3. Save

> **Note:** You cannot delete the standard calendar or a calendar that is the parent (base) for another calendar.

### Define Work Shifts

1. Click **Administration > Project Management > Base Calendars**
2. Click the calendar name
3. Select a month, then select the check boxes for days with the same shift
4. Click **Set Shifts** and enter start/end times for up to four shifts
5. Save

> Default base calendar: two 4-hour shifts with 1-hour lunch = 8 total work hours.

### Define Work Days

1. Click the calendar name > select a month
2. Use check boxes next to days of the week, then click **Make Workday** or **Make Non-Workday**
3. When changing a non-workday back to workday, the application automatically looks for a shift pattern to apply

### Edit Resource Availability in a Calendar

1. Click **Home > Resource Management > Resources**
2. Open a resource or role > **Calendar** tab
3. Add working days, nonworking days, and shifts specific to this resource

### Change or Delete a Base Calendar

1. Click **Base Calendars** > click a calendar name
2. Click **Edit Calendar Properties**
3. Change the **Base Calendar** field to assign a new parent
4. Save

### Reset Base Calendar Shifts

1. Click **Base Calendars** > click the calendar name
2. Select dates to reset
3. Click **Reset to Base** — the base calendar shift is restored for those days

## Find, Book, and Allocate Resources

### Find and Book a Labor Resource

1. Open **Home > Resource Management > Resource Finder**
2. Click **Expand Filter** and set criteria:
   - **OBS Unit / OBS Unit - Filter Mode** — Filter by organizational unit
   - **Role / Filter Mode** — Filter by role (exact or including descendants)
   - **Availability** — Required availability by percent, hours, days, or FTE in date ranges
   - **Availability Threshold** — Minimum availability percentage
   - **Include Soft-booked Resources** — Include or exclude soft-booked resources
   - **Skills / Skills Threshold** — Match by skills hierarchy with minimum match percentage
3. Click **Filter**
4. Select resources and click **Book**
5. Select an investment and click **Book**

### Change the Default Resource Allocation

1. Open **Home > Resource Management > Resources**
2. Open the resource > **Allocations**
3. Click the **Properties** icon for the investment
4. Change the **Default % Allocation** field
5. Create rows in the **Planned Allocation** and **Hard Allocation** sections for deviations from the default
6. Save

### Add/Remove Investments from Resource Workloads

**Add:**
1. Open the resource > **Allocations** > click **Add**
2. Select the investment and click **Add**

**Remove:**
1. Open the resource > **Allocations**
2. Select an investment and click **Remove** > **Yes**

> If a project is locked, you cannot remove it from the resource's workload.

### Edit Investment Allocations (Weekly Detail)

1. Open the resource > **Allocations > Detail**
2. Click in a field to edit weekly allocations
3. Save and confirm the Aggregation section (red bar = overbooked, yellow = no over-allocation)

### Shift a Resource Allocation

Move all or a portion of resource allocations forward or backward in time.

1. Open the resource > **Allocations**
2. Select the investment
3. Open **Actions** > **Shift Allocation**
4. Complete:
   - **Start / Finish Dates** — Period boundaries
   - **Shift to Date** — New beginning date for the shifted data
   - **Shift Cut-off Date** — Last date for shifting
   - **Scale Allocation % By** — Percentage change in allocation during the shift
5. Save

### Replace a Role with a Named Resource

1. Open a project > **Team** tab
2. For the soft-booked role row, click **Resource Finder**
3. Review the **Availability Match** column
4. Select one or more resources and click **Replace**
5. Review the **Remaining Availability** on the Booking Confirmation page
6. Click **Yes** to book, or click **Overallocate** / **Remaining Only** if over-allocated
7. Transfer ETC from the generic role to the named resource:
   - Open **Task** tab > **Assignments**
   - Filter for tasks assigned to the generic role
   - Reassign them to the named resource

### Replace Resources on Investments

Replacing a resource transfers remaining ETC but not actuals, pending actuals, or baseline data.

1. Open **Home > Resource Management > Resources** > open the resource > **Allocations**
2. Select the investment and click **Replace**
3. Select the replacement resource/role
4. Confirm the replacement

## Fill Resource Requisitions

As a resource manager, fill project staffing requests (requisitions) submitted by project managers.

### Find Resources to Fill Role Requests

1. Open **Home > Resource Management > Resource Requisitions**
2. Click the requisition name > **Resources**, or click the Person with List icon
3. Click **Add** and search for eligible resources
4. Select a resource and click **Add**
5. If multiple resources are proposed, expand each to edit allocation amounts
6. Click **Propose** — requisition status changes to Proposed

### Review Resource Requisitions

1. Open **Home > Resource Management > Resource Requisitions**
2. Use the Requisition Filter to locate requisitions by name, ID, project, status, or priority
3. Click the requisition link to review:
   - **Properties** tab — Requisition details from the requestor
   - **Resources** tab — Find and add resources
   - **Discussions** tab — Exchange messages with stakeholders
   - **Processes** tab — Create and track requisition processes
   - **Audit Trail** tab — Track field changes (if auditing enabled)

### Propose Allocations

1. Open the requisition > click **Resources**
2. Click **Propose** to submit the resource
3. If multiple resources: expand each and edit allocation amounts individually
4. Review the histogram:
   - Yellow = hours needed on this project
   - Green = time on other projects
   - Red = over-allocation
5. If requisition approval is not required, a **Book** button appears instead of **Propose**

### Decline a Requisition

1. Open the requisition
2. Set the status to **Closed**
3. (Optional) Post a note in Discussions explaining your reason

### Unbook a Requisition

1. Find the unbook requisition (check mark in **Unbook** column)
2. Click **Unbook** — removes future hard allocation to match planned allocation

### Types of Requisition Status

| Status | Meaning |
|--------|---------|
| New | Initial; owner must change to Open |
| Open | Active; booking manager is notified |
| Proposed | Resource manager proposed resources; project manager reviews |
| Booked | Project manager accepted; resource is hard-booked |
| Closed | No further action; set by requestor or when booking manager declines |

## Manage Resource Capacity Planning Scenarios

Use scenarios to influence resource capacity planning decisions based on workload, allocation, and investments.

### Configure Settings for Resource Planning

1. Assign access rights:
   - Resource - View - All, Page - View, Portlet - View
   - Investment-type view rights (Application, Asset, Other Work, Products, Program, Project - View - All)
2. Define Resource OBS levels
3. Associate resources/roles with OBS units in their Resource Properties
4. Assign a primary role to all resources
5. For open team roles: set the **Staff OBS Unit** on the Team Detail page
6. Run the **Datamart Extraction** job

### View High-Level Capacity Planning Information

1. Click **Home > Resource Management > Capacity Overview**
2. Set the **Resource OBS** filter and OBS Filter Mode (Unit only / Unit and Ancestors / Unit and Descendants)
3. Set additional filters and click **Filter**
4. Click **Options > Configure** to add columns:
   - **Capacity** — Resources assigned to the OBS unit
   - **Allocation** — Demand allocation based on Staff OBS at team level
   - **Hard-booked Staff / Soft-booked Staff / Unfilled Roles**
   - **Capacity - Allocation** (bandwidth)
   - **Actuals** — Posted work effort

### View Detailed Capacity Planning Information

From the Capacity Overview page, click icons to drill into:
- **Resources icon** → Staff Allocation portlet (named resources matching the filter OBS)
- **Roles icon** → Unfilled Roles portlet
- **Investment icon** → Investment Demand portlet

### View Resource Planning Portlets

From **Home > Resource Management > Resource Planning**, available tabs and portlets:

| Tab | Portlets |
|-----|---------|
| Capacity | Role Capacity Histogram, Role Capacity |
| Organizational Demand | OBS Resource Aggregation, OBS Investment Aggregation |
| Top Down Planning | Top Down Planning by Investment |
| Workloads | Resource Workloads |
| Allocations | Weekly Detail, Allocation Discrepancy |
| Unfilled Allocations | Unfilled Requirements |
| Bookings | Booking Status |

### Capacity Planning Scenarios

Use scenarios to model what-if changes to resource allocations before committing changes to the live project schedule. Access scenarios from the **Scenario** menu on department or resource planning pages.

## Related Notes

- [[Requisitions]] — Project manager perspective on requisitions
- [[Resource Assignments]] — Assignment-level management
- [[Time Recording]] — Timesheet management
- [[Financial Processing Setup]] — Financially enable resources
- [[_MOC Classic PPM]]
