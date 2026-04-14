---
title: Notifications
tags:
  - admin
aliases:
  - Notifications
canonical: true
audience: admin
domain: administration
---

# Notifications

## Overview

Clarity's Notifications feature allows administrators to create, update, and delete **General Notifications** that are triggered by Business Rules. Users can set their preferences in **Notifications** under Settings for the "General" type in Clarity.

General Notifications support the following objects:

- Investments (Projects, Ideas, and Custom Investment Types)
- Custom Master Objects
- Tasks
- Staff
- Risks
- Issues
- Change Requests
- Status Reports
- Agreements
- Custom Sub-Objects
- Objectives
- Pages

> [!note]
> Clarity's General Notification settings and the Notifications in Classic (under **Notifications Tab in Account Settings**) stay in sync regardless of where you make changes. The Notification Settings that sync are: General (Alert, Email, and SMS).

## Notification Types

There are two types of General Notifications:

- **Simple** — The target and recipient are the same object attribute.
- **Complex** — You define specific conditions on a target attribute to determine when the notification is sent, and select separate recipients.

## Access Rights

Ensure the following access right is enabled to access the Notifications tile:

- **Administration - Notifications - Navigate**

## View Notifications

**Follow these steps:**

1. In the main menu, click **Administration > Notifications**. The Notifications page is displayed, showing all saved notification definitions in the grid.
2. Click on a Notification name to **Edit** it — navigate through the definition screens to make changes.
3. Use the configurable grid toolset:
   - Column configuration
   - Fly-out configuration
   - Saved views
   - Robust filtering
   - Group By
   - Export to CSV
4. Define the grid layout using the **Columns** panel.
5. Manage **Views** on the Notifications grid.
6. **Delete** notification definitions by right-clicking on a row and selecting **Delete Row**. Bulk deletion is available when checkboxes are selected. A confirmation popup will appear before deletion.

## Create General Notifications

### Simple Notification

**Follow these steps:**

1. In the main menu, click **Administration > Notifications**. The Notifications page is displayed.
2. Click **New Notification**. The **Create New Notification - Step 1 of 2** screen is displayed.
3. Enter data in all required fields and click **Next**.

> [!note]
> - All required attributes must be populated before the **Next** button is enabled.
> - The **Target Object** can be updated until the General Notification is saved. Once saved, it can no longer be changed.
> - A **Priority** can be set for a General Notification.

4. On the **Step 2 of 2** screen:
   - By default, **Simple** is selected as the Condition Type.
   - Select a **Resource Attribute (recipient)**.
   - The **Save** button is enabled after selecting the recipient.
   - For Simple notifications, both the target and recipient are the same attribute. For example, selecting **Task Owner** as recipient means the notification is sent to whoever is assigned as Task Owner when that value changes.

### Complex Notification

**Follow these steps:**

1. In the main menu, click **Administration > Notifications**. Click **New Notification**.
2. Complete **Step 1 of 3** and click **Next**.
3. On the **Step 2 of 3** screen:
   - Select **Complex** as the Condition Type.
   - Select a **Target Attribute** to set the Send Condition. This list shows attributes associated with the Target Object.
   - Set the condition. For example: **Status** - **Is Equal To** - **Started**.
   - You can set conditions on multiple values. For example: Status **Is Equal To** "Started" **OR** "Not Started".
   - Click **Next**.
4. On the **Step 3 of 3** screen:
   - Select **Recipients** to receive the notification from the **Resource Attribute** list.
   - The Resource Attribute list displays resources from both the parent and target object if the target object is a sub-object.
   - Optionally select **Access Groups** (supports security access groups in Clarity).
   - Optionally select individual **Resources** from the Resource list.
   - You can save a General Notification without any recipients.
   - Click **Save** to save the Complex Notification definition.

## Key Points to Remember

> [!important]
> - General Notifications defined in Clarity are supported.
> - The Target Object **cannot be changed** once the Notification Definition is completed.
> - The Recipients list does **not** support read-only or MVL Resource/User type lookup attributes in Simple notifications.
> - The Recipients list does **not** support MVL Resource/User type lookup attributes in Complex notifications.
> - Localization is supported in General Notifications.
> - General Notifications can be deleted by using the **Purge Notifications** job.
> - General Notifications do **not** support Field Level Security. A "Secured" icon is displayed when the attribute appears in Subject, Message, Recipients, or Target Attribute lists.

## Related

- [[_MOC Administration]]

%%Source: p1937-1943%%
