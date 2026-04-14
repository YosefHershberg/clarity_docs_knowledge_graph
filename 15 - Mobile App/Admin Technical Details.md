---
title: Technical Details for Administrators
tags:
  - admin
aliases:
  - Admin Technical Details
canonical: true
audience: everyone
domain: mobile
---

# Technical Details for Administrators

## Overview

This page summarizes administrator-facing technical behavior for the Clarity Mobile app.

> [!note]
> You do not need additional access rights to view the mobile `Settings` page.
>
> If a user's default landing page becomes inaccessible after access-right changes, Clarity automatically opens the first available mobile menu link.

## Supported Authentication Methods

- Direct: Direct Clarity authentication.
- SSO On Premise: Clarity integrated with CA Single Sign-On (on-premise).
- Federated SSO: Clarity SaaS with federated CA SSO authentication.

On-premise SSO and federated SSO customers can configure authentication experience in basic, FCC, or NTLM modes.

Supported IDPs include:

- ADFS
- CA SSO
- Okta
- Azure SSO
- SecureAuth
- Centrify
- PingIdentity

After initial setup, mobile users continue authenticating with the same method. Even users without Clarity REST API rights can sign in to the mobile app. For non-login API calls, the `authToken` header is present.

> [!tip]
> To view details in documentation images, zoom your browser or open images in a new tab.

## Default Administrative Timesheet Options

Timesheet Options in Classic PPM influence mobile behavior.

1. In Review and Approve, the Hours gauge appears when `Display Efforts Gauge` is enabled.
2. `Display Time Errors As a Toast Message On Submit` controls whether errors show as toast messages or as Timesheet Rules errors.
3. `Time Entry Increment` and Decimal Places affect rounding behavior.

> [!note]
> When Totals are populated in a timesheet, values are first distributed by day, then rounded based on settings, and then recomputed into total fields.
>
> Navigate in Classic PPM: `Administration` > `Project Management` > `Timesheet Options`.

> [!important]
> Timesheet Options configured in Classic PPM apply to Classic PPM, Clarity, and Mobile App timesheets.

## Timesheet Rules

When you define Timesheet Rules in Clarity Administration, you can configure custom error messages.

> [!note]
> Users see an error icon at the top-right of the timesheet when submission fails because of a rules violation.

> [!important]
> If you currently use the `Timesheet Hook` add-in, choose either the Hook or Timesheet Business Rules. You cannot use both.

## Mobile Specific URL

The Mobile Specific URL feature allows direct navigation to the Clarity mobile app.

### Key features

1. Direct navigation to mobile using crafted URLs.
2. Broadcom public URL re-routing to customer-specific Clarity URLs.
3. Android and Apple device compatibility.
4. No changes required to out-of-the-box Clarity notifications.
5. Support for prepopulating Clarity URL values.
6. Ability to route users to specific mobile pages.

## Related
- [[_MOC Mobile App]]

%%Source: p2738-2743%%

