---
title: Manage Requisitions (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2299-2314
---
# Manage Requisitions (Classic PPM)

Requisitions are formal requests to staff a project with specific resources or roles. Each requisition is associated with a single staffing requirement. Requisitions provide routing, notification, a review and approval process, and a history of staffing requests.

## Requisition Types

| Type | Purpose |
|------|---------|
| Request Resources | Create new requisitions to fill staffing requirements |
| Unbook Resources | Create requisitions to release hard-booked time |
| Replace Resources | Unbook and replace a hard-booked resource |

## Fulfill Project Staffing Through Requisitions

The typical workflow:

1. **Project Manager** defines staffing requirements by adding soft-booked resources or roles as project team members
2. **Project Manager** creates requisitions based on the staffing requirements
3. **Project Manager** submits requisitions (changes status to Open) — routed to the appropriate booking managers
4. **Resource Manager** addresses requisitions by proposing resources (or declining)
5. **Project Manager** reviews proposed allocations:
   - **Rejects** → requisition reopened; resource manager notified to modify and resubmit
   - **Accepts** → resource is hard-booked to the project

## Constraints

- A staffing requirement can have only one outstanding requisition at a time (status: New, Open, or Proposed)
- A single requisition cannot staff multiple projects
- If a requisition cannot be created for any selected staffing requirement, the create operation fails for all

## Create Requisitions

**Two creation methods:**
- **Create (New status)** — Allows editing requisition details before submission
- **Create and Open (Open status)** — Quickly submits all requisitions when no editing is needed

### Steps

1. Open the project and click **Team**
2. Select the check box for a soft-booked resource or role
3. Open **Actions** menu > **Create Requisitions**
4. Select the requisition type: Request Resources, Unbook Resources, or Replace Resources
5. Select a booking manager for each resource or role (auto-populated if a default is defined)
6. Click **Create** (New status) or **Create and Open** (Open status)

## Edit Requisition Requests

You can edit requisition requests only when the status is **New**.

1. From the project **Team** tab, view the **Request Status** field
2. Click the requisition to open it
3. Edit the requested allocation amount or other details
4. Change the status to **Open** when ready for resource manager review

> **Note:** After a requisition is submitted (Open), avoid changes while the resource manager is already proposing resources.

## Review and Book Proposed Allocations

When a resource manager proposes resources, the project manager is notified.

1. Open the project > **Team** tab > **Requisitions**
2. Review proposed allocations
3. Do one of the following:
   - **Accept (Book)** → Resource is hard-booked; requisition status changes to Booked
   - **Reject** → Requisition status returns to Open; resource manager is notified to resubmit

## Unbook Hard-Booked Resources Using Requisitions

1. As Project Manager:
   - Set the planned allocation for the team member to 0% for the unbook period
   - Save (booking status changes to Mixed)
   - Select team member > **Actions** > **Create Requisitions** > **Unbook Resources**
   - Click **Create and Open**
2. As Resource Manager:
   - Open **Home > Resource Management > Resource Requisitions**
   - Find the unbook requisition (check mark in the Unbook column)
   - Click **Unbook** — removes or updates future hard allocation to match planned allocation

## Replace Unbooked Resource Requisitions

Used when you want to simultaneously unbook and replace a resource.

1. As Project Manager: **Create Requisitions** > **Replace Resources**
2. As Resource Manager:
   - Open the requisition > **Resources** tab > **Add**
   - Find a replacement resource
   - If you have access rights, click **Replace** to book the replacement and unbook the original

## Request Additional Bookings and Book Already-Booked Resources

For already hard-booked resources or additional bookings, the process mirrors the standard requisition flow. Select the resource on the team and create a new requisition.

## Requisition Status Lifecycle

| Status | Description |
|--------|-------------|
| **New** | Initial status; only the owner can change it to Open |
| **Open** | Active and requires fulfillment; booking manager is notified |
| **Proposed** | Booking manager has proposed resources; project manager reviews |
| **Booked** | Project manager accepted the resource; hard-booked to project |
| **Closed** | No more work required; set by requestor or automatically when booking manager declines |

## Routing and Notification

- Requisitions are routed to the booking manager defined for the resource or role
- If no booking manager is defined, the staffing OBS + role determine routing
- Both project manager and booking manager are notified of status changes
- The booking manager field can be changed at any time to reroute

## Related Notes

- [[Resource Assignments]] — Manage assignments after booking
- [[Resource Management Classic]] — Resource manager perspective on requisitions
- [[Projects Teams Tasks]] — Staffing projects generally
- [[_MOC Classic PPM]]
