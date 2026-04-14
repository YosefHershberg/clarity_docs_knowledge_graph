---
title: Impersonate a User
tags:
  - admin
aliases:
  - Impersonate User
canonical: true
audience: admin
domain: administration
---

# Impersonate a User

## Overview

Administrators can impersonate other users to see exactly what a user can see within Clarity. This helps troubleshoot user issues and verify that users have the relevant access rights to work effectively in Clarity.

The **Impersonate a User** access right must be assigned to administrators before this option becomes visible. Once assigned, the option appears when the administrator clicks their avatar at the top right corner of the screen.

## Key Points

> [!note]
> - A banner is displayed indicating you are currently impersonating the selected user.
> - You can end the impersonation mode by clicking the **Logout** button or the **End Impersonation** button.
> - The Classic PPM menu link is disabled in Impersonation Mode.
> - In Impersonation Mode, the administrator views information in the user's language and only has access to data based on the selected user's rights and permissions.
> - If auditing has been enabled for an attribute that the impersonator changes, the impersonator's name is stored in the `Impersonated By` field on the Audit Trail record. The `Changed By` column captures the name of the user who was impersonated.
> - Clarity updates the **Last Login** date automatically when a user logs in or when you impersonate that user.

## How to Impersonate a User

**Follow these steps:**

1. Click the **avatar and username** at the top right of the Clarity interface.
2. Click **Impersonate a User**.
3. Select the relevant user you want to impersonate and perform the relevant actions in Clarity.
4. Click **End Impersonation** to end the session. You can also log out to end the session.

## Auditing Impersonation Changes

In Clarity 16.2.2 and later releases, the audit grid tracks the full name of the admin who invoked the API to make a change as another user. This data is captured in the **Impersonated By** column. The **Changed By** column captures the name of the user who was impersonated.

## Related

- [[_MOC Administration]]

%%Source: p1986%%
