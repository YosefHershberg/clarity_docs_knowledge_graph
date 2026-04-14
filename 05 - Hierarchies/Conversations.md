---
title: Conversations in Hierarchies
tags:
  - howto
  - hierarchies
aliases:
  - Hierarchy Conversations
  - Hierarchy Comments
  - Hierarchy Collaboration
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Conversations in Hierarchies

The **Conversations** module in Hierarchies provides a collaborative forum for all team members to discuss, document, and resolve issues related to a hierarchy. You can start conversations, post replies, @mention teammates, attach files, and receive notifications — all within the context of the hierarchy workspace.

---

## Prerequisites

> [!info] Setup Required
> Your administrator must:
> 1. Ensure you have **view access** to the hierarchy.
> 2. Associate the hierarchy with a **blueprint that includes the Conversations module**.
>
> To make conversations visible in the Details panel, the administrator must also turn on the **Show in Details Flyout** option under the Conversations module in the Blueprint.

**User access right required**:
- **Hierarchy - Navigate**: Required to view the specific hierarchy page in Clarity.
- **Resource - View - All**: Required to get the list of users when using the @mention feature.

---

## Starting a Conversation

Stay in touch with your team, ask questions, and resolve issues using conversations.

Follow these steps:

1. In the main menu, click **Hierarchies**. The Hierarchies page is displayed.
2. Select the hierarchy you want to open.
3. Click the **Conversations** tab.
4. Enter your message in the **Start a conversation** box.
5. Click **Post** or press **Enter** to submit.

Other users can enter their responses in the **Reply** box within your conversation thread.

---

## Mentioning Users with @

Use the **@** sign to mention specific users in a conversation. This sends a notification to alert them.

> [!tip] @Mention Tips
> - You do not need to remember the complete name. After typing `@`, enter the first few letters of a first or last name — suggested team members appear in a dropdown.
> - Up to **11 suggested names** appear in the mention list.
> - Recommend mentioning no more than **20 users** in a single conversation.

> [!important] @Mention Requirements
> - You must have the **Resource - View - All** access right to get the list of Clarity users.
> - **Active and locked** team members can be mentioned. Inactive team members do not appear and cannot be mentioned.

---

## Conversations and Replies: Behavior Rules

All conversations in Clarity follow these display and behavior rules:

| Behavior | Detail |
|----------|--------|
| **Order** | The most recent conversation appears first; the most recent reply appears last within a thread |
| **Refresh** | Click **Refresh Conversations** to see the two most recent replies |
| **Expand** | If a conversation has more than two replies, click **SHOW ALL** to expand; **SHOW LESS** to collapse |
| **Edit / Delete** | Only the user who **posted** a conversation can edit or delete it |
| **Delete cascades** | Deleting a conversation also deletes all of its replies — this cannot be undone |
| **Reply limit** | A conversation supports up to **200 replies** |
| **Character limit** | Maximum **1,300 characters** per post or reply (includes spaces, special characters, line breaks, and @mention strings) |
| **New line** | Press **Shift + Enter** to add a new line within a comment |
| **HTML** | HTML content is not supported; however, URLs are supported and display as hyperlinks after posting |
| **URL formats** | Supported: `www`, `http://`, `https://`, `ftp://`, `sftp://` |

> [!warning]
> Do not enter values inside angle brackets (e.g., `<abc>`) in conversations or other Clarity data fields. Coupled angle brackets are not a supported special character combination and can produce unexpected results.

---

## Attaching Files to Conversations

You can attach up to **five files** per comment in a conversation.

Follow these steps:

1. Open a conversation. A **Reply...** prompt appears for the next comment.
2. Click **Attach**.
   - To add attachments to a **previous comment**: click the **Options** menu → **Edit** → **Attach**.
3. Select the file(s) you want to attach. Hold **Ctrl** to select up to five files. Click **Open**. Thumbnails appear below the comment text area.
4. Add or edit your reply text.

> [!important]
> You **cannot** attach a file without entering an associated comment — a text entry is required.

5. Click **Post** or press **Enter**. Files are uploaded and attached.
6. (Optional) To delete an attachment: click the **Options** menu → **Edit** → click **X Delete** next to the file.

**Deletion cascades**:
- Deleting a **reply** also deletes its attachments.
- Deleting the **hierarchy** also deletes all associated conversations and their attachments.

> [!tip] Attachment Size and File Type Limits
> File attachments follow the same rules as project documents. The default maximum attachment size is **20 MB**. Administrators can restrict acceptable file types by setting the **Authorized File Extensions** field in General System Settings. See [[System Settings]] for details.

---

## Conversation Notifications

Notifications alert you to conversation activity when a user mentions you or your team.

### Receiving Notifications

- Click the **notifications bell icon** at the top of any Clarity page to view notifications.
- The **number** on the bell indicates new notifications; it clears when you click the bell.
- The notifications panel shows the sender's avatar and the first line of their message.
- Scroll to view all notifications.

### Acting on a Notification

1. Click a notification in the list to open the full conversation context.
2. From the notification window, you can: **reply**, **edit**, or **delete** the message.
3. Click **Go to Hierarchy** to navigate directly to the relevant hierarchy page.

### Managing Notifications

| Action | How |
|--------|-----|
| Delete a single notification | Hover over it and click **Delete** |
| Delete all notifications | Click **CLEAR ALL** |
| Duplicate mentions | If mentioned more than once in a single message, the user is notified **only once** |
| Deleted conversations | If a conversation is deleted, its associated notifications are also deleted |

> [!tip] Personalizing Notification Delivery
> By default, Clarity sends conversation notifications by **email**, **SMS text message**, and **on-screen**. You can personalize your notification preferences under **Personalize Clarity → Set Up Notifications**.
>
> As an administrator, you can modify the two notification templates:
> - *Conversation - Mentioned in a conversation*
> - *Conversation - Mentioned in reply to a conversation*
>
> See **Configure Notifications and Notification Templates** in the Administration section.

---

## Access Rights for Conversation-Specific Actions

The following table summarizes which conversation actions require specific access rights:

| # | Action | Access Right Required |
|---|--------|-----------------------|
| 01 | View the message | Yes — Hierarchy - Navigate |
| 02 | Reply to the message | Yes — Hierarchy - Navigate + view access |
| 03 | Attach files | Yes — Hierarchy - Navigate + view access |
| 04 | Navigate to the specific hierarchy from a notification | Yes — Hierarchy - Navigate |

---

## Related Notes

- [[Create and Edit Hierarchies]] — Hierarchy setup and access rights
- [[_MOC Hierarchies]] — Back to the Hierarchies MOC
- [[System Settings]] — Attachment size and authorized file extension configuration

%%Source: p1650–1763%%
