---
title: Configure Notification Templates
tags:
  - admin
aliases:
  - Notification Templates
canonical: true
audience: admin
domain: administration
---

# Configure Notification Templates

## Overview

You can enable and disable notifications for all users at the system level. You can also configure notification templates and modify the design of the default email notification format. Notification templates contain object attribute tags in the subject and message body that act as placeholders.

Topics covered:

- Publish or Save Notification Default Settings
- Configure a Notification Template
- Configure a Process Notification Template
- Add Attribute Variables to a Notification Template Subject
- Add Attribute Variables to a Notification Template Body
- Add Hyperlinks to a Notification Template
- Preview a Notification Template
- Restore Defaults for a Notification Template
- Configure Your Own Branded Default Email Notification Format

## Publish or Save Notification Default Settings

You can enable and disable notifications for all users at the system level. You can also update settings only for users created after you last published or saved, and for users who have not updated their own notification settings.

- **Publish** — Overwrites the notification settings for all users, including any individual user overrides.
- **Save** — Updates settings only for users created after the last publish/save and for users who have not configured their own settings. Does not apply to users who modified their own notification settings.

> [!tip]
> If users want to change notification settings after you Publish, they can enable or disable settings only for themselves. Users go to **Home > Account Settings > Notifications**.

**Follow these steps:**

1. Click **Administration > Data Administration > Notifications**.
2. On the **Notification Default Settings** tab, modify the settings to match your business needs.
3. Click **Publish** to apply the new settings to all users.
4. Click **Save** to apply settings to users created after the last publish/save and to existing users who had not updated their own settings.
5. Click **Reset** to revert to the last published or saved settings.

## Configure a Notification Template

Notification templates correspond to specific functional areas such as action items, escalations, and processes. When a message is sent through an alert, email, or SMS, an instance of the notification template is created automatically. Attribute tags in the template are replaced with actual attribute values when the message is delivered.

For example, `<project.name>` in a notification template for the Project functional area is replaced with the actual project name when delivered.

> [!note]
> - Use the **notification properties page** to edit the notification template subject and body.
> - Use the **notification templates page** to view the list of templates.
> - Modified notification templates display in the list with a **yellow check mark icon** in the Modified column.

**Follow these steps:**

1. Click **Administration > Data Administration > Notifications**. The Notification Templates page appears.
2. Select your filter criteria:
   - **Functional Area** — Defines the functional area (e.g., Timesheets).
   - **Notification Name** — Defines a unique name for the template.
   - **Description** — Specifies the template description.
   - **Modified** — Specifies if the contents are modified from the default settings.
3. Click **Filter**.
4. Click the name of a template to modify its properties:
   - Edit the notification template subject and body.
   - Click **Preview** to examine the appearance of your changes.
5. Click **Save and Return**.

## Configure a Process Notification Template

You can modify process notification templates at both the system level and the process definition level.

- Changes at the **system level** automatically apply to corresponding notification templates at the process definition level (except those explicitly configured at the process level).
- Changes at the **process definition level** automatically apply to the notification template at the system level and to all corresponding process notification template instances for that process.

> [!note]
> If you are exporting process information using the XML Open Gateway, any instance-level process template modifications are not exported with the process information. Use the process notification read and write XML files to export and import notification information separately.

## Add Attribute Variables to a Notification Template Subject

The Notification Subject field defines what displays in the subject line of a notification.

**Follow these steps:**

1. Open the notification template.
2. Click the **Browse** icon next to the **Notification Subject** field. The variable selection page appears.
3. Select the attribute variables to add.
4. Click **Add**. The selected attribute variables append to the text in the field.
5. Save the changes.

## Add Attribute Variables to a Notification Template Body

The Notification Body field defines what displays in the body of a notification.

**Follow these steps:**

1. Open the notification template.
2. Click the **Browse** icon next to the **Notification Body** field. The variable selection page appears.
3. Select the attribute variables to add.
4. Click **Add**. The selected attribute variables append to the text in the field.
5. Click **Save**.

## Add Hyperlinks to a Notification Template

Add hyperlinks to display in the body of notifications.

**Follow these steps:**

1. Open the notification template.
2. Click the **Browse** icon next to the **Notification Body** field. The attribute variables or links page appears.
3. Click **Links**.
4. Select the link to add and choose one of the following options:
   - **Leave the default text** in the Link Text field to display the default text as the hyperlink. For example: "To access this action item, click here."
   - **Clear the Link Text field** to use the standard URL as the hyperlink. For example: "To access this action item, click: `<URL>`."
   - **Clear and replace the default text** with custom display text. For example, enter "service document" to display: "To access this action item, click service document."
5. Click **Add**. The added hyperlink appends to the text in the field.
6. Save the changes.

## Preview a Notification Template

You can preview the appearance of a notification template before it is sent to recipients.

**Follow these steps:**

1. Open the notification template.
2. Click **Preview**.
3. Close the preview window.

> [!note]
> The preview approximates the final notification. The actual appearance may vary by email client.

## Restore Defaults for a Notification Template

You can restore modified notification templates to their default system values. Modified templates are indicated with a checkmark in the **Modified** column of the Notification Templates page.

**Follow these steps:**

1. Open the notification template.
2. Click **Restore Defaults**.

## Configure Your Own Branded Default Email Notification Format

Administrators can replace the default Broadcom logo with their own logo and apply custom styling to all Clarity email notifications.

**Follow these steps:**

1. In Classic PPM, click **Administration > Data Administration > Notifications**.
2. On the **Notification Templates** tab, configure templates for your functional areas.
3. On the **Notification Default Settings** tab, select the **Email** checkbox for at least one functional area.
4. On the **Notification Format** tab, configure the available settings:
5. In the **Company Email Logo** field, click **Choose File** and select an image file.
   - Click **Download** to view the current logo.
   - Click **Remove** to remove your custom logo.
6. Configure the optional **Message Header**:
   - Enter your custom message in the **Email Header** field (text only).
   - Adjust font, size, and bold style options.
7. Configure the **Message Body** formatting:
   - Adjust font, size, and bold style for notification text.
   - Adjust font, size, and bold style for hyperlinks.
8. Configure the **Message Footer**:
   - Enter your custom message in the **Email Footer** field (text only).
   - Adjust font, size, and bold style options.
9. Click **Save**.

### Custom Notification Feature Highlights

| Element | Description |
|--------|-------------|
| **Logo and Header** | Upload a logo file to appear in email notifications. The image is always centered above the greeting. An optional header message with custom font/size/bold is also supported. |
| **Message Body Text** | Configure default font, size, and bold styling for text in the notification email message. |
| **Hyperlink Styling** | Configure default font, size, and bold styling for hyperlinks. |
| **Message Footer** | Enter optional footer text with custom font/size/bold styling. |
| **Notification Properties** | Content of email messages varies by functional area and can be modified via notification templates. |

> [!tip]
> Test your new notification format settings with a test user account in a test environment with different supported browsers, email clients, and operating systems before going live in production.

### Custom Notification Limitations

> [!warning]
> - There is **no restore option** to reset the default notification format.
> - Notification formatting applies **only to email notifications**.

## Related

- [[_MOC Administration]]

%%Source: p3165-3172%%
