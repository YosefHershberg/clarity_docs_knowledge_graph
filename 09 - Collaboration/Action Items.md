---
title: Action Items
tags:
  - howto
aliases:
  - My Action Items
canonical: true
audience: everyone
domain: collaboration
---

# Action Items in My Workspace

In My Workspace, you can use the **Action Items** tab to view all Action Items assigned to you, except manual Action Items created in Classic PPM. Both **Process** and **Library** Action Items are displayed in this tab.

Action Items are grouped by **Open**, **Pending**, and **Closed**, sorted by the most recently initiated Action Item first. You can take actions directly from this tab using the available action buttons, add comments, and view the decision history for each Action Item.

> [!NOTE]
> No additional access rights are required to view this tab. All users who have access to My Workspace can see the Action Items assigned to them.

## Viewing and Responding to Action Items

Action Items assigned to you are displayed in the **Action Items** tab. The **View History** panel is collapsed by default. When expanded, it shows the stage, decision, and lifecycle history of the Action Item along with any user comments.

> [!NOTE]
> The Date and Time format is set in **Settings > General** and displayed in the user's time zone (not the server time zone).

### Steps to View and Respond

1. Open **My Workspace**.
2. Click the **Action Items** tab.
   - **Right panel**: displays the list of Action Items. Each item shows the **Subject**, **Description**, **Object Type**, **Object Instance Name**, **Object Instance Link** (for Master Objects only), **Priority**, and available action buttons.
   - **Left panel**: shows the **Open**, **Pending**, and **Closed** states with counters for each:
     - **Open**: Action Items awaiting your response.
     - **Pending**: Action Items you have acted on but are waiting for other recipients to respond.
     - **Closed**: Action Items that are completed.
3. For each Action Item, you can perform the following actions:
   - Click an action button such as **Approve**, **Reject**, or **Acknowledge** to respond.
   - If the selected decision requires a comment, the **Add Comment** dialog appears automatically. Enter your comment and click **Save** to complete the action.
   - If the decision does not require a comment, you can still add an optional comment by clicking **Add Comment**.
   - You can edit or delete your own comment while the Action Item is in **Open** or **Pending** status.
   - Once the Action Item is closed, comments can no longer be modified or deleted.
   - Expand **View History** to see the full decision and comment history for that Action Item. Comments include the author name and timestamp.

## Comment Rules

> [!NOTE]
> Key points about comments on Action Items:
> - The **Add Comment** dialog appears automatically when a decision is configured to **Require Comment**. You must enter a comment before the system allows you to save the decision.
> - Each user can add only one comment per Action Item.
> - Required comments cannot be deleted.
> - Optional comments can be added, edited, or deleted only when the Action Item is in **Open** or **Pending** state.
> - Comments added in Clarity are also visible when viewing the same Action Item in Classic PPM, and vice versa.
> - The **Require Comment** configuration is defined by administrators in the process definition.

## Action Item States

| State | Description |
|-------|-------------|
| **Open** | Displays action buttons and the **Add Comment** option. Action is required from you. |
| **Pending** | Displays decision details and comment history. You have acted; waiting on others. |
| **Closed** | Read-only. Displays full decision and comment history. |

## Additional Notes

- Supported Master Objects: Projects, Ideas, CITs, and Custom Master Objects.
- Process Action Items display for supported Sub-Objects.
- Action Items are grouped by Open, Pending, and Closed, sorted by the most recently initiated first.
- The **Object Instance Link** is available only for Master Objects (such as Projects, Ideas, or Custom Investments), not Sub-Objects.

## Search and Attachments

- Use the **search bar** in My Workspace to filter Action Items by name. The search bar clears if you navigate away and return.
- The **Attachments** attribute is available in the Action Items workspace. It is system-defined and not customizable.
- The three-dot action menu includes an **Attachments** option for uploading files.

> [!NOTE]
> You can enter a maximum of **1333 characters** in the **Note** field.

## Layout Constraints

> [!WARNING]
> - The calendar layout supports field-level security but does not support custom keyboard navigation (508 compliance) in this release.
> - If you enable FLS on the **Due Date** attribute, the calendar will display blank.
> - You cannot drag a To Do item from a calendar to the unscheduled state.
> - You can view a maximum of **500 cards** in all Smartlist layouts.
> - The **Attachment** option is not available in the Calendar layout.

## Related

- [[Collaborative Workflow]]
- [[_MOC Collaboration]]

%%Source: p782-784%%
