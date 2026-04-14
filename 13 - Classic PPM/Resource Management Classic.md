---
title: Resource Management (Classic PPM)
tags:
  - concept
  - classic
  - howto
aliases:
  - Resource Management Classic
source_pages: 2570-2617
canonical: true
audience: everyone
domain: classic
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

> [!NOTE]
> Labor resources (users) cannot be deleted — the system preserves history for referential integrity. To deactivate a user who has left, lock their account; create a new resource record if they return.

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

### Configure Teams

Release 15.5 introduced the concept of a **team resource** — a defined team that can stand alone as a new type of resource, but also be populated by roles and named labor resources. Teams are created in Clarity and edited in Classic PPM with the following access rights:

| Access Right | Scope | Purpose |
|---|---|---|
| Resource - Navigate | Global | Access the Resource List in Classic PPM |
| Resource - Edit | Global / Instance / OBS | Edit team resource general properties |
| Resource - Edit Financial | Global / Instance / OBS | Edit team financial properties |

**Navigate:** In the main menu, click **Administration** > **Teams**.

**Open a Team:** Click **NEW TEAM** to create, or click a team name to open an existing one.

**Staff a Team:** After creating a team, add resources and roles. Required access rights for allocation:
- **Resource - Soft Book** / **Resource - Hard Book** — to allocate a team to an investment
- **Resource - View** — to add a team as a task owner

**Team Time Tracking:** Enable time tracking for an entire team. Required access rights:
- **Resource - Time Entry** — enter timesheets for a team
- **Resource - Approve Time** — approve timesheets for a team

**Team Financial Properties:** A team resource can be financially enabled with its own cost rate in the rate matrix. Team actuals posted in the financial module appear in financial plans and in the Posted Transaction Review.

> [!NOTE]
> The team resource has a reduced set of properties compared to a human labor resource. Team data can be populated into a cost plan using the population action from Project Allocations or Assignments.

## Configure Base Calendars, Shifts, and Work Days

Base calendars determine FTE and availability calculations for resources.

### Create a Base Calendar

1. Click **Administration > Project Management > Base Calendars**
2. Click **New** and complete:
   - **Calendar Name** — Unique name
   - **Base Calendar** — Parent calendar to base this on (e.g., Standard)
   - **Standard** — Mark as the standard calendar (Default: Cleared)
3. Save

> [!NOTE]
> You cannot delete the standard calendar or a calendar that is the parent (base) for another calendar.

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

### Deactivate a Resource or Role Profile

When a resource or role is no longer needed, you can deactivate it. Other users cannot assign deactivated resources or roles to tasks. The inactive resource or role continues to appear in the resource list unless you filter it out.

> [!WARNING]
> Labor resources (users) cannot be deleted — the system preserves history for referential integrity. To deactivate a user who has left, lock their account. If the user returns, create a new resource record.

Follow these steps:

1. Open **Home > Resource Management > Resources**
2. Open the resource or role
3. Clear the **Active** check box and click **Save**

## Fill Resource Requisitions

As a resource manager, fill project staffing requests (requisitions) submitted by project managers.

### Requisition Routing and Notification

When a requisition is created, it is routed to the appropriate booking manager based on the following logic:
- If a default booking manager is defined for the resource or role, the requisition is routed to that booking manager.
- If no default booking manager is defined, the staffing requirement OBS is combined with the role to determine the booking manager.
- If no mapping exists for the specific role and OBS, the application looks up the OBS role chain until a manager is found.
- Both the project manager (requisition creator) and booking manager are notified of status changes.

The following table shows who is notified when the requisition status changes:

| Requisition Status Change | Requested By | Booking Manager |
|---|---|---|
| From New to Open | Notified | Notified |
| From Open to Propose | Notified | Notified |
| From Proposed to Booked | Notified | — |
| From Open to Book (no approval required) | Notified | — |
| Booking Manager changes | — | New and old BMs notified |
| Closed | Notified | — |
| Deleted | Notified | — |

> [!NOTE]
> Configure your notification format, message layout, and delivery method from **Account Settings > Notifications**.

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

### Reduce Resource Allocations

After opening a requisition, if a resource is over-allocated, you can reduce their allocation.

Follow these steps:

1. Open **Home > Resource Management > Resource Requisitions**
2. Edit the allocation fields on the page
3. Reduce the allocation amount to eliminate over-booking (red shading disappears; yellow = new booking amount, green = other project bookings)
4. Save the new allocation amount

Alternatively, from an open resource:

1. Click the **Properties** icon to the left of the resource name
2. Edit existing allocation segments and add any new ones
3. Click **Save and Return**

### Participate in Requisition Discussions

Exchange messages about a requisition with other stakeholders.
- A discussion thread begins with the first reply under the original message.
- Subsequent messages appear in descending order by date and time.
- Only users with access to the requisition can participate.

Follow these steps:

1. Open **Home > Resource Management > Resource Requisitions**
2. Open a requisition and click **Discussions**
3. Click the message icon or **Expand**:
   - To start a discussion: click **New**
   - To reply: click the subject line of the message
4. Complete:
   - **Subject** — Subject of the message
   - **Message Text** — Body of the message
   - **Attachments** — Click Browse to attach a document
   - **Notify Participants** — Send email notifications (Default: Selected)
5. Click **Save and Return**

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

### Set a Default Booking Manager for Resources

As a resource manager, you can define a default booking manager for each resource and role so that requisitions are routed automatically without intervention from the project manager.

> [!NOTE]
> Defining the booking manager is optional. If undefined, the project manager can set it at the requisition level or leave it blank. If left blank, the access rights of available resource managers determine allocation.

Follow these steps:

1. Open **Home > Resource Management > Resources**
2. Click a resource name to open the resource properties
3. Specify the **Booking Manager** for the resource in the **General** section
4. Save your changes

### Modify and Resubmit Proposals

When you receive a notification that the project manager has rejected the proposed resources on a requisition, you can modify and resubmit it.

Follow these steps:

1. Open **Home > Resource Management > Resource Requisitions**
2. Click the requisition link
3. Click **Discussions** to see the reason behind the rejection
4. Select and propose the resource that best matches the request; delete the other resources
5. The Resource Requisitions page refreshes the requisition status to **Proposed**

### Manage an Automated Requisition Process

You can configure an automated notification process to identify different stages in a requisition lifecycle and avoid notification uncertainty when new requisitions remain in **New** status.

> [!NOTE]
> A process created within a requisition is available only for that requisition. An administrator can create a global requisition process available to all requisitions (global access rights required).

Follow these steps:

1. Open **Home > Resource Management > Resource Requisitions**
2. Select a requisition and click the **Processes** tab
3. To view running process instances, click **Initiated** (the default)
4. To view local and global processes available to this requisition, click **Available**:
   - To define a new process, click **New** and save
5. To start a process manually, select the check box and click **Start**
6. To set the object for the requisition process, click **Add Linked Object**

### Audit Requisitions

The Requisition Audit Trail page records when specific fields were changed, and by whom. Use it to track changes by resource and date.

Follow these steps:

1. Open **Home > Resource Management > Resource Requisitions**
2. Click a requisition and click **Audit**
3. Filter the list to view the audit fields for that requisition

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

### Include Resources To-Be-Hired in Capacity Planning Portlets

Use the **To-Be-Hired** resource attribute to include future hires in current and future capacity views.

1. Open **Home > Resource Management > Resources**
2. Define one or more labor resources with a primary role and a hire date in the future
3. Navigate to **Resource Planning** or **Capacity Overview**
4. Select a value in the **Include To-Be-Hired Resources** filter field:
   - **No** — View capacity and demand of current employees only
   - **Yes** — Include future hires under consideration

> [!NOTE]
> These portlets only include resources with an assigned primary role. Resources with no primary role do not appear.

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
