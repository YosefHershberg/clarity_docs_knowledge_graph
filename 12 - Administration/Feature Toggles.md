---
title: Feature Toggles
tags:
  - admin
aliases:
  - Feature Flags
canonical: true
audience: admin
domain: administration
---

# Feature Toggles

## Overview

Feature Toggles allow administrators to control the visibility of specific features from the **Feature Toggles** tile in Clarity Administration. You can customize the user experience and gradually introduce new functionalities to users.

Navigate to **Administration > Feature Toggles** to manage toggles.

> [!important]
> Feature toggles are available in administration for a specified period, after which the feature is removed from the toggle list and automatically becomes available to all users in that release.

## Key Advantages

| Advantage | Description |
|-----------|-------------|
| **Gradual Feature Introduction** | Hide and unhide features to phase in new functionality, avoiding sudden changes that overwhelm users |
| **Enhanced Security** | Quickly hide features in the event of a security concern while addressing issues |
| **Efficient Feature Rollbacks** | Quickly hide a new feature to address problems or user dissatisfaction until necessary adjustments are made |

## Prerequisite

You must have the following access right to access the Feature Toggles tile:

- **Administration - Feature Toggles - Navigate**: Allows user access to Feature Toggles under Administration in the new user experience. The user can enable or disable feature toggles.

## Enable/Disable a Feature

**Follow these steps:**

1. In the main menu, click **Administration**, **Feature Toggles**. The Feature Toggles page is displayed.
2. Review the available fields in the grid:

   | Field | Description |
   |-------|-------------|
   | **Name** | Shows the title of the feature |
   | **Description** | Provides comprehensive details about the feature's purpose and functionality |
   | **Introduced In Release** | Indicates the Clarity release in which the feature was initially introduced |
   | **Expires In Release** | Specifies the Clarity release when the feature transitions from a toggleable option to a standard always-available feature |
   | **Enabled** | Shows whether the feature is currently enabled or disabled |
   | **Last Updated By** | Shows the user responsible for the most recent modification |
   | **Last Updated Date** | Indicates the date of the last modification |

3. Check the **Enabled** field to activate the feature. Uncheck to deactivate it in Clarity.

## Enable/Disable a Feature Using the Command Prompt

For server-side control, administrators can toggle features via the command line.

**Follow these steps:**

1. Log in to the Clarity Server using admin user credentials.
2. Open a command prompt and run one of the following commands:
   - **To enable a feature**: `admin toggle-feature <feature name> 1`
   - **To disable a feature**: `admin toggle-feature <feature name> 0`

> [!important]
> - Replace `<feature name>` with the specific feature code provided by Broadcom Support.
> - Some features may require a system restart or cache clearing for changes to take effect.

## Managing the Grid Layout

The Feature Toggles page uses the standard Clarity Grid, which supports the following actions:

- Use the **Column Panel** to show or hide columns.
- Drag up to three column headers to use the **Group By** capability, viewing data as rows of logical groups.
- Export grid data to a **CSV** file.
- Use the **Search** bar to filter values based on the name.
- Use **Filters** to identify records that match a selection criterion, including advanced filter conditions.
- Use **Conditional Formatting** to format cells or rows for quick analysis.
- Use the **Details Panel** (two-column layout) to edit fields.
- Save and share multiple views to achieve your business goals.

## Setup View Options

**Follow these steps:**

1. Log into Clarity.
2. Navigate to the Feature Toggles page.
3. In the layout, click **View Options**.
   - **Wrap Text**: Turn on the toggle to wrap text for all attributes on the grid. Default: Off.
4. Click **X** to close View Options.

## Related

- [[_MOC Administration]]

%%Source: p1975-1978%%
