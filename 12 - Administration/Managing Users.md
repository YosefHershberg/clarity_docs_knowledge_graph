---
title: Managing Users in Clarity
tags:
  - admin
aliases:
  - User Management
canonical: true
audience: admin
domain: administration
---

# Managing Users in Clarity

## Overview

Administrators can use the Users page in Clarity to create and edit user details such as name, email ID, status, locale, and language. You can also use the User page to edit user groups associated with a user. The Bulk Edit capability lets you edit details associated with multiple users simultaneously.

> [!important]
> You need the **Administration - Authorization** access right to access the Users page in Clarity.

## Create Users in Clarity

When you create a user, you must populate all required fields. The following fields are available in the User grid to facilitate the creation process:

- **Allow Direct Login when SSO is Enabled**
- **Employment Type**
- **Force Password Change** — Always set to 1 by default

> [!note]
> A labor resource is automatically created in Clarity when you create a new user. The user creation process will fail if administrators create required fields for the resource that do not have default values. Users created in the Users management grid are assigned the same default password.

**Follow these steps:**

1. In Clarity, click **Administration**, and click **Users** to open the Users grid.
2. Click the **Add Row (+)** button to enter details in the User grid. Populate all mandatory fields to create a record.
3. When you create a new user, a labor resource is automatically created.

## Managing Users in Clarity

You can use the Column Panel to add all attributes associated with users to the grid. Use the filter attribute to identify a specific set of users, then use the multi-select capability to edit them.

**Follow these steps:**

1. In Clarity, click **Administration**, and click **Users** to open the Users grid.
2. Click **Columns** and add the relevant attributes to the grid. If editing user groups, ensure you add the **User Groups** attribute.
3. Click the **Filter** icon to identify relevant users.
4. Select all relevant users and click **Edit**.
5. In the **Bulk Edit** window, update all the relevant fields and click **Save**.

## View License Type and Last Login Details

Use the **License Type** and **Last Login** attributes to monitor user access and activity in Clarity.

> [!tip]
> You can access the License Type and Last Login attributes directly on the Resource object in Classic PPM. Both attributes are also available in the Resources and Users grids in Clarity.

### License Type

- Run the job **Populate User License Type** to update license type information in the grids.
- The job runs automatically every day but can also be executed on demand.
- If you run the job without specifying parameters, Clarity automatically fills in missing license types for all users.
- License Type appears blank only when a user has no access rights.

### Last Login

- Clarity updates the Last Login date automatically when a user logs in or when you impersonate that user.
- If a user has never logged in, the Last Login field does not appear in the grid.
- The displayed time zone reflects the user's browser settings, not Classic PPM time zone settings.
- The field records the user's actual login time and does not change due to impersonation.

> [!note]
> Both attributes are Data Warehouse-enabled and included in the Data Provider, allowing you to create reports that include license type and last login information.

**Follow these steps:**

1. Log into Clarity.
2. Open the relevant page in Clarity.
3. In the grid, configure the following fields from the **Columns** panel:
   - License Type
   - Last Login

## Create a Clarity User Based on SAML Request

Clarity allows customers to log in using credentials issued by an IdP that supports SAML 2.0. Key advantages include:

- Seamless integration between networks and environments
- Simplified password management

If a user exists in the IdP but not in Clarity, the user will be created in Clarity at run time to ensure a seamless user experience.

### Prerequisites

Before leveraging this capability, configure the following:

- Clarity System Administration (CSA) is configured to use Single Sign-On to authenticate users.
- In System Options, enable the **"Enable SAML Authentication"** option.
- In System Options, enable the **"Allow Just-In-Time User Creation"** option.

### SAML Login Flow

When Clarity receives a SAML request from the IdP, it checks if the username exists in Clarity:

1. If the username exists → user is logged in.
2. If the username does not exist → Clarity checks if additional required attributes are included in the SAML message.
   - If attributes are not included → user receives an error message.
   - If required attributes are present → a new user is created with status set to **Active**.

## Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to perform the following actions:

- **Conditional Formatting** — Format cells or rows to help analyze data quickly.
- **Column Panel** — Show or hide columns on the grid.
- **Group By** — Drag up to three column headers to group data in the grid as rows of logical groups.
- **Charting** — Use the out-of-the-box charting experience embedded within Clarity.
- **Export to CSV** — Export grid data to a CSV file.
- **Search Bar** — Filter values based on name or ID.
- **Filters** — Use advanced filtering to define complex filter conditions.
- **Details Panel** — Available as a two-column layout to edit fields.
- **Saved Views** — Save, modify, and share multiple views to achieve business goals.
- **Favorites** — Mark object and sub-object instances as favorites using a star icon.

## Related

- [[Authentication and Keys]]
- [[_MOC Administration]]

%%Source: p1969-1974%%
