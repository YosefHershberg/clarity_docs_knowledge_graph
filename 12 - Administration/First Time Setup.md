---
title: Setting Up Clarity First Time Use
tags:
  - admin
  - howto
aliases:
  - Initial Setup
canonical: true
audience: admin
domain: administration
---

# Setting Up Clarity: First Time Use

Initial configuration steps for a new Clarity installation. Configure essential settings, create initial users, and set up core infrastructure.

## Overview

As an administrator, you can configure the features in Clarity to varying degrees. Some configuration options are available in Clarity itself; however, many options remain under the **Administration** menu in Classic PPM.

Key first-time setup tasks include:

- **Enable Clarity**: After installing Clarity and setting up Classic PPM, you need to enable the New User Experience (now rebranded as Clarity).
- **Enable New Timesheets**: Activate the new timesheet UI alongside Clarity.
- **Configure Single Sign-On (SSO)**: For on-premise installations only.
- **Create a Menu Link to Classic PPM**: So users can navigate between Clarity and Classic PPM.
- **Configure Timesheet Options**: Set timesheet behavior for all resources.

## Enable Clarity

See **Enable the New User Experience** in [[General System Settings]].

> [!tip]
> Install the PMO Accelerator in Classic PPM before completing the steps for enabling Clarity. Without the accelerator, the options for enabling Clarity are disabled. See Install the PMO Accelerator Add-In and PMO Sample Data.

## Enable New Timesheets

While enabling Clarity, you can also choose to enable new timesheets. When you enable new timesheets, be aware of the following differences from Classic PPM timesheets:

- With new timesheets, users no longer see the **Home, Timesheets** menu link previously available in Classic PPM.
- The **Administration, Timesheet Options** layout configuration page no longer shows certain fields that are not supported in the new timesheets.
- The new timesheets do not allow incident or indirect time tracking. If you enter incident or indirect time entries in Classic PPM, they do not appear on the new timesheet details.

> [!warning]
> When using Clarity (MUX) and XOG together, XOG will throw the following error if an attempt is made to create an indirect time entry on a timesheet while the new timesheets functionality is enabled:
> `XOG-2029: Timesheet 5093015 contains indirect time entry while configuration option to disable indirect time entry is set.`

Additional notes on enabling new timesheets:

- The data model is the same, so changes visible in one interface are visible in the other (if supported).
- Both interfaces support the optional auto-spreading of one total value evenly across entries for multiple days.
- Only Classic PPM timesheets support time entry notes, email links to resources, direct access to timesheet configuration, and the ability to create a task from a timesheet.
- Links in notifications go to the Clarity timesheet instead of Classic PPM timesheets.
- If you had **COPY TIME ENTRIES FROM PREVIOUS TIMESHEET** enabled for Classic Timesheets, this gets unchecked when you activate new timesheets.
- When enabling New Timesheets, customizations to available columns under Default Content and Layout will be reset and can be reconfigured afterward.

> [!tip]
> Broadcom recommends that teams use either the new timesheets or the Classic PPM timesheets — do not switch between both.

## Configure Single Sign-On (SSO) (On-Premise Only)

As an administrator, you can configure an SSO server for Clarity. See **Configure Single Sign-On (SSO) for Clarity** in CSA: Security, Passwords, LDAP, SSL, SSO, XSS, and FIPS.

If you are using IDP federated SSO and you want your users to access Clarity by default, contact your identity management team. They might need to generate a new link with `/pm` appended to the URL.

## Create a Menu Link to Classic PPM

By default, Clarity is not available from Classic PPM. Administrators can use Classic PPM Studio features to create a menu link using external object actions. Users can click the menu link to access Clarity from inside the Classic PPM user interface.

**Follow these steps:**

1. Log in to the Classic PPM user interface.
2. Click **Administration**, **Studio**, **Objects**.
3. Click the **Project** object.
4. Click the **Actions** tab and click **New**.
5. On the Create Action page, create an external object action.

> [!tip]
> - For the URL, enter `http(s)://<cappm_server_name>/pm`
> - To link to the new timesheets, enter `http(s)://<cappm_server_name>/pm/#/timesheets`

6. Click **Administration**, **Studio**, **Menu Manager**.
7. In the list, click **Application Menu**.
8. On the Menu: Application Menu - Menu Hierarchy page, click **Add**.
   - Create a menu link.
   - Associate the external object action with the menu link.
9. On the Menu: Application Menu - Create Menu Item page, select the **Action Link** option, and click **Next**.
10. On the Menu: Application Menu - Menu Item Properties page, create the menu link.
11. Log out of Classic PPM and log back in. The new menu link to Clarity appears in your selected Parent Menu Item.
12. Click the menu link to display Clarity.

## Configure Timesheet Options

Use these steps to set or change the timesheet options that impact Clarity for all resources in the system.

**Follow these steps:**

1. Click **Administration**, **Project Management**, **Timesheet Options**.
2. Select the **ALLOW ENTRY OF LINE ITEM TOTALS** option to allow users to enter an optional single total value (in hours or days) for a task. That total is divided evenly across multiple days. For example, a user enters 40 total hours and the timesheet shows 8 hours per day for five days.
3. Select the **DISPLAY TIME ATTESTATION MESSAGE ON SUBMIT** option if you want to prompt the user to confirm an attestation statement for compliance requirements.
4. Select **DISPLAY TIME ERRORS AS A TOAST MESSAGE ON SUBMIT** if you are not using Timesheet Rules (since rules display customized error messages).
5. The **ALLOW END USER COLUMN CONFIGURATION**, **DISPLAY EFFORT GAUGE**, and **DISPLAY PROJECT TIME GAUGE** settings determine if these options are available to users when they create Timesheets in Clarity.
6. Select the appropriate value in the **Time Entry Increment** rounding option to provide real-time data entry adjustments when users fill out timesheets. Permitted increments:

| Increment | Behavior |
|-----------|----------|
| **Any** | Entered values are rounded based on the Decimal Places setting (0-5 places) |
| **0.25** | Entered values are rounded to the nearest quarter number (hours or days). Minimum Decimal Places = 2 |
| **0.5** | Entered values are rounded to the nearest half number (hours or days). Minimum Decimal Places = 1 |
| **1** | Entered values are rounded to the nearest whole number (hours or days). Minimum Decimal Places = 0 |

## Related

- [[General System Settings]]
- [[Managing Users]]
- [[_MOC Administration]]

%%Source: p1781-1783%%
