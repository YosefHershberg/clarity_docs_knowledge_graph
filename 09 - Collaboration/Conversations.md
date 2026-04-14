---
title: Conversations
tags:
  - howto
aliases:
  - Discussions
  - Comments
canonical: true
audience: everyone
domain: collaboration
---

# Conversations in My Workspace

**Conversations** are threaded discussions that provide a collaborative forum for all team members to discuss, document, and solve specific issues. You can view a conversation or post comments in a reply message with optional attachments and links.

Use conversations to:
- Discuss customer feedback or share observations during development.
- Help resource managers and investment coordinators discuss which resources to allocate to an investment.

> [!NOTE]
> You can view and reply to conversations where you are mentioned (`@<YourName>` or `@Staff`) up to the third-level object (for example: Cost Plan Details) in My Workspace Conversations.

## Prerequisites

Ensure you have the following access right:

- **My Workspace - Navigate**: Allows user access to My Workspace pages in Clarity. The user can access checklists to which they have access.

## Panels in Conversations

The Conversations tab has two panels:

### Left Panel

Shows the list of conversations where you are mentioned with `@<YourName>` or `@Staff` (you must be a member of the Staff for the investment). Each conversation card displays:

- The first line of the original conversation for reference.
- An indicator for the type of change:
  - You started a new conversation.
  - You were mentioned.
  - New reply posted.
- An avatar of the user who started the conversation.
- A timestamp showing when the last message was posted.

> [!IMPORTANT]
> Click the **Refresh** icon to view the latest Conversations.

> [!NOTE]
> - New replies display at the top of the list in the left panel.
> - Only one card per conversation thread is shown.
> - Conversations you reply to that are neither started by you nor mention your name will not appear in My Workspace's Conversation list.

### Right Panel

When you click a conversation card in the left panel, the right panel shows the conversation details. The header shows the conversation parent name and the body shows the conversation thread.

From the right panel you can:
- Reply to a conversation.
- Attach a file.
- Edit or delete a conversation.
- Navigate to the parent conversation (if you have the required access rights).

## View Conversations in My Workspace

You can view all conversations where you are mentioned with `@<YourName>`. If you are part of `@Staff`, you can participate in those conversations.

The conversations module includes:
- Conversations you started.
- Conversations where you were mentioned.
- Conversations where you were mentioned in a new reply.

### Steps

1. Open **My Workspace**.
2. Click the **Conversations** tab.
3. Click a conversation in the **Left panel**. The details appear in the **Right panel**.
4. Click **Go to \<Conversation Parent\>** to navigate to the parent conversation page.

> [!NOTE]
> A link on the parent conversation page is available to navigate back to the My Workspace Conversations.

## Mention a User Using the @ Sign

In conversations, use the `@` sign to mention other users. Mentioning someone sends them a notification to alert them to reply.

### Tips for Using the @ Sign

- You do not need to remember the complete name. After the `@` sign, type the first few letters of the first or last name. Suggested team members appear.
- The full name, resource ID, and avatar image appear to confirm the team member's identity.
- All active and locked team members can be mentioned. Inactive team members do not appear and cannot be mentioned.
- We recommend mentioning no more than **20 users** in a single conversation.

> [!IMPORTANT]
> You must have the **Resource - View - All** access right to get the list of Clarity users.

> [!NOTE]
> To mention all users staffed to the investment, including the investment manager, use `@Staff`. `@Staff` is not available for Agreements, Roadmaps, Hierarchies, and Custom Objects.

## Conversations and Replies

All conversations follow these rules:

- The most recent conversation appears first in the right panel.
- If a conversation has more than two replies, click **SHOW ALL** to expand and view all replies. Click **SHOW LESS** to return to the two most recent replies.
- Only the user who posted a conversation can edit or delete it.
- A conversation supports up to **200 replies**.
- You can enter a maximum of **1300 characters** in a post or reply. Spaces, special characters, line breaks, and `@mention` strings count toward this limit.
- To add a new line in a comment, press **Shift + Enter**.
- Conversations do not support HTML content; however, you can add links to other content.

> [!WARNING]
> When you delete a conversation, the application also deletes all replies. **You cannot recover a deleted conversation.**

### Supported URL Formats

Conversations support the following URL formats. After you click **Post**, the URL appears as a hyperlink:

- `www`
- `http://`
- `https://`
- `ftp://`
- `sftp://`

> [!TIP]
> Do not enter values inside angle brackets in data fields in Classic PPM or Clarity. For example, avoid typing `<abc>` or `<value1>`. Coupled angle brackets are not a supported special character combination and can produce unexpected results.

## Attach Files in Conversations

You can upload and edit up to **five attachments** per reply in a conversation. Team members can download and view the attached files.

### Steps

1. Open a conversation. A **Reply...** prompt appears for the next comment.
2. In the new reply, click **Attach**. To add attachments to a previous comment, click the **Options** menu and select **Edit**, then click **Attach**.
3. Select the file you want to attach. Press and hold **Ctrl** to select up to five files. Click **Open**. Thumbnails of the attached files appear below the comment.
4. Add or edit your reply text. You cannot attach a file without entering an associated comment.
5. Click **Post** or press **Enter**. The file attachments are uploaded.
6. (Optional) To delete an attachment, click the **Options** menu and select **Edit**. Click **X Delete**.

> [!NOTE]
> - When you delete a reply, the application also deletes any attachments.
> - When you delete an investment, task, risk, issue, change request, agreement, roadmap, hierarchy, or custom object, the application deletes any associated conversations, including attachments.

> [!TIP]
> File attachments follow the same restrictions as project documents. As an administrator, you control the maximum size (default: **20 MB**) and permitted file types via the **Authorized File Extensions** field. See **Configure General System Settings**.

## Conversation Notifications

When a user mentions you or your team, notifications alert you about conversation activity.

- To view your notifications, click the **notifications bell** icon at the top of all pages in Clarity.
- The number of new notifications appears on the bell. The number disappears when you click the bell.
- The notifications panel displays the avatar of the sender and the first line of their message.
- Scroll up or down to view all notifications in the panel.
- To open a notification, click it in the list. Supporting context appears and you can reply, edit, or delete the message. Click **Go to \<Conversation Parent\>** to navigate to the specific page.
- If a user is mentioned more than once in a single message, they are notified only once.
- If `@Staff` is mentioned in an investment conversation, a notification is sent to all team members, including the investment manager.
- To delete a specific notification, hover over it and click **Delete**. To delete all notifications, click **CLEAR ALL** (deletes notifications for that user only).
- If a conversation is deleted, the notification shows: "This message has been deleted."

> [!TIP]
> - You can personalize how you receive notifications. By default, the application sends conversation notifications by e-mail, SMS text message, and on-screen. See **Set Up Notifications** in *Personalize Clarity: Change Password, Account Settings, Notifications, Export to Excel*.
> - As an administrator, you can modify the two notification templates for conversations:
>   - **Conversation - Mentioned in a conversation**
>   - **Conversation - Mentioned in reply to a conversation**
>
>   See **Configure Notifications and Notification Templates**.

## Conversations vs. Notifications: Access Rights

| # | Action | Conversations (My Workspace) | Notifications |
|---|--------|------------------------------|---------------|
| 1 | Access the feature | **My Workspace - Navigate** | None required |
| 2 | View message and parent details | Required access right | Available without access right |
| 3 | Reply to the message | Required access right | Not available |
| 4 | Attach files | Required access right | Not available |
| 5 | Navigate to the parent conversation | Required access right (for parent) | Not available |
| 6 | Delete a conversation | Required access right | Not available |
| 7 | Delete a notification / Clear All | N/A — conversations remain after deleting notifications | No access right needed; deleting notification removes it from the list |

## Related

- [[Collaborative Workflow]]
- [[_MOC Collaboration]]

%%Source: p785-789%%
