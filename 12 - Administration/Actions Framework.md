---
title: Working with the Actions Framework
tags:
  - admin
  - dev
aliases:
  - Actions Framework
canonical: true
audience: admin
domain: administration
---

# Working with the Actions Framework

## Overview

The Actions Framework gives administrators control over specific end-user actions in Clarity. You can use it to govern which objects and users leverage the CSV Import capability, who can share saved views and staffing scenarios, which custom investment types support idea conversion, and which users can access Classic PPM.

Navigate to **Administration > Actions** to open the Actions workspace.

## What the Actions Framework Controls

- **CSV Import**: The Enabled flag allows administrators to change the availability of the CSV Import action without changing the access configuration. The Secure and Access fields limit access based on Clarity Groups.
- **View Sharing**: Controls whether users can share saved views with other people, groups, or everyone.
- **Staffing Scenarios**: Controls whether users can share staffing scenarios with specific people or groups.
- **Idea Conversion**: Controls which custom investment types are available for conversion from an Idea.
- **Classic PPM Access**: Controls which users can access Classic PPM.

> [!note]
> The Actions Framework does NOT control the Import from CSV action under Roadmaps. All Import from CSV actions are enabled by default for new customers. If you upgrade to this release, Clarity checks the "Enable Generic CSV Import" flag under System Options — if True, all CSV import actions are enabled; if False, all are disabled.

## Configure Objects Leveraging the CSV Import Capability

Use the Actions framework to configure the objects and users that use the CSV Import capability in Clarity.

**Follow these steps:**

1. Log into Clarity and click **Administration**.
2. Click the **Actions** tab to open the Actions workspace.
3. Use the **Enabled** column to select the objects that will support the CSV Import capability.
4. Use the **Secure** and **Access** fields to limit access to the action based on Clarity Groups.

## Share Views With All Clarity Users

The Actions framework determines who can share views with all users in Clarity.

- **Views -- Share with People**: Allows end-users to share saved views to which recipients have view access.
- **Views -- Share with Groups**: Allows end-users to share saved views using Clarity Groups.
- **Views -- Share with Everyone**: Allows sharing views with all users.

> [!note]
> - Users can only share saved views where they are the owner (available under the "Mine" tab).
> - When users hover on the "Mine" tab, the Share button always appears.
> - In previous releases, Clarity used the term "Private View" for an unshared view. Clarity now displays a message stating the view is not shared.
> - You can configure which Clarity groups can share saved views by leveraging the **Enabled for Sharing** flag (cleared by default).

**Follow these steps:**

1. Log into Clarity and click **Administration**.
2. Click the **Actions** tab to open the Actions workspace.
3. Use the **Enabled** column to enable the **Views -- Share with People**, **Views -- Share with Groups**, and **Views -- Share with Everyone** capabilities.
4. Use the **Secure** and **Access** fields to limit access based on Clarity Groups.

## Share Staffing Scenarios with Users and Groups

The Actions framework determines who can share Staffing scenarios in Clarity.

- **Staffing Scenarios -- Share with People**: Allows end-users to share saved scenarios with specific recipients.
- **Staffing Scenarios -- Share with Groups**: Allows end-users to share Staffing Scenarios using Clarity Groups.

**Follow these steps:**

1. Log into Clarity and click **Administration**.
2. Click the **Actions** tab to open the Actions workspace.
3. Use the **Enabled** column to enable the **Staffing Scenarios -- Share with People** and **Staffing Scenarios -- Share with Groups** capabilities.
4. Use the **Secure** and **Access** fields to limit access based on Clarity Groups.

## Enable Custom Investment Types for Idea Conversion

Administrators can manage which Custom Investment Types are available for idea conversion by enabling and securing the **Convert from Idea** action through the Actions framework.

**Follow these steps:**

1. Log into Clarity and click **Administration**.
2. Click the **Actions** tab to open the Actions workspace.
3. Use the **Enabled** column associated with the custom investment type to turn on the Idea to Custom Investment conversion capability.
4. Use the **Secure** and **Access** fields to limit access based on Clarity Groups.

## Disable Classic PPM for Users

Administrators can control which users can access Classic PPM. You can disable the **Classic PPM Access** action to restrict all Clarity users from accessing Classic PPM, including administrators. You can also secure this action and grant access to specific groups.

> [!tip]
> Broadcom recommends creating a new "Classic UI Access" group, adding your administrators to it, and securing the action to this new group.

**Follow these steps:**

1. Log into Clarity and click **Administration**.
2. Click the **Actions** tab to open the Actions workspace.
3. Clear the **Enabled** column associated with the **Classic PPM Access** action.
4. Use the **Secure** and **Access** fields to limit access based on Clarity Groups.

> [!note]
> - Users who do not belong to the access group will receive a 401: Access Denied error.
> - Users will not have access to Classic PPM via the Classic PPM link in the Clarity menu, direct bookmarks, or Classic PPM Action Items with links.
> - The Classic PPM login screen will always be displayed; however, unauthorized users will receive the 401 error after logging into Clarity.
> - This action does not control access to Clarity System Administration (CSA).

> [!important]
> The PPM Gantt launched from Clarity will be blocked if the user is not part of the access group.

## Related

- [[_MOC Administration]]

%%Source: p1910-1914%%
