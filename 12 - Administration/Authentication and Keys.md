---
title: Authentication and Keys
tags:
  - admin
aliases:
  - Auth Configuration
canonical: true
audience: admin
domain: administration
---

# Authentication and Keys

## Overview

The Authentication and Keys page allows on-premise customers to use credentials issued by an Identity Provider (IdP) that supports SAML 2.0 to log into Clarity. It also provides key-based authentication to generate a personal API key for a specific client based on a user's SSO credentials, access rights, and status settings.

Navigate to **Administration > Authentication and Keys** to access this workspace.

## Configuring to Support SAML 2.0

Clarity allows on-premise customers to use credentials issued by an IdP that supports SAML 2.0 to log in. Key advantages of using SAML-based SSO login include:

- **Seamless integration**: All users can move easily between your organization's intranet and Clarity.
- **Simplified password management**: No need to manage user passwords separately in Clarity — your existing user management system handles this.
- **Simplified certificate management**: Use Clarity to manage various security certificates.

Clarity allows you to perform the following SAML-related activities:

- Import SAML metadata into Clarity
- Manage security certificates
- Export service provider metadata
- Configure multiple Identity Providers

Every Identity Provider that supports SAML 2.0 provides a way to share SAML metadata with other applications. Ask the security administrator in your organization to provide the SAML metadata for your IdP, then import it into Clarity.

### Enable SAML Authentication

The **Enable SAML Authentication** option allows Clarity to accept SAML responses from Identity Providers such as OKTA or Auth0.

> [!note]
> For on-premise SAML configuration details, see the On-Premise SAML Configuration documentation.

### Create a Clarity User Based on SAML Request

Clarity can automatically create a user at runtime if the user exists in the IdP but not yet in Clarity, ensuring a seamless experience.

**Prerequisites:**

- Clarity System Administration (CSA) must be configured to use Single Sign-On.
- In System Options, enable **Enable SAML Authentication**.
- In System Options, enable **Allow Just-In-Time User Creation**.

When Clarity receives a SAML request from the IdP, it checks if the username exists:

1. If the username exists, the user is logged in.
2. If the username does not exist, Clarity checks if the required attributes are included in the SAML message.
   - If attributes are missing, the user receives an error.
   - If attributes are present, a new user is created with Active status.

## Key-Based Authentication

Key-based authentication uses a personal API key that is generated for a specific client based on a user's SSO credentials, access rights, and status settings. Key authentication eliminates the need to generate and pass credentials or tokens for every session.

**Use key authentication in these scenarios:**

- You want to integrate data between Clarity and other client applications. Integration architectures allow users to authenticate through the REST API and accomplish Clarity actions without going into the user interface.
- Your Clarity instance uses SSO for authentication. For example, Rally integration could make webhook calls to read Clarity project data personalized for the current user.

### API Keys and OData

The Enhanced OData API allows you to use both basic authentication and Clarity API Keys to authenticate users accessing the OData environment.

**Syntax for OData access with API Keys:**

- Username: `<Clarity Username>`
- Password: `<API Key>`

> [!note]
> All rules associated with API Keys — such as key expiration — apply when using API Keys for OData authentication. Ensure you are using OData v2 or v4.

## Configure Secure Authentication, User Accounts, and Passwords

Managing authentication is a critical part of your security policy. Administrators configure password policies, lock or unlock users, and reset passwords through **Administration > Organization and Access > Resources**.

### Session Options

Limit the number of invalid login attempts and specify how long user sessions can remain inactive before logout.

| Option | Description | Default |
|--------|-------------|---------|
| **Invalid Login Limit** | Maximum consecutive login attempts before locking the account (0 = Disabled) | 0 |
| **Minutes of Inactivity Until Logout** | Idle minutes before locking the user status (0 = Disabled) | 60 |

> [!tip]
> Synchronize the timeout settings for all applications (Jaspersoft, SSO). The setting with the lowest timeout overrides others. The Jaspersoft User Session Timeout defaults to 70 minutes.

### Password Options

You can configure password policy rules, or define a custom regular expression.

**Default policy rules:**
- The password and username cannot be the same.
- Minimum length is 8 characters, including at least one uppercase, one lowercase, one numeric, and one special character.
- Passwords can be reused after a specified time period and number of consecutive unique passwords.

**Configure password policy:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Change Password Options** section, select **Policy** or **Custom Expression** for the **Password Rules** field.
3. For **Policy**: enter minimum length, uppercase, lowercase, numeric, and special character requirements.
4. For **Custom Expression**: define a regex string in the **Regular Expression** field.
5. Optionally set a custom **Error Message** for invalid passwords.
6. To immediately enforce the new policy, click **Force Password Change**.
7. Save your changes.

**Example — password of 8–16 characters with uppercase, lowercase, and special characters:**

```
^(?=.*[a-z])(?=.*[A-Z])(?=.*[~'!@#$%^&*)(-+=]).{8,16}$
```

**Regex character values:**

| Token | Meaning |
|-------|---------|
| `^` | Beginning of the expression |
| `(?=.*[a-z])` | Lowercase alphanumeric characters allowed |
| `(?=.*[A-Z])` | Uppercase alphanumeric characters allowed |
| `(?=.*[~'!@#$%^&*)(-+=])` | Special characters allowed |
| `.{min,max}$` | Required password length range |
| `$` | End of the expression |

### Set User Account Status

User account status controls whether a user can log in and be assigned to investments.

| Status | Effect |
|--------|--------|
| **Active** | User can log in; can be added to investments |
| **Inactive** | Cannot log in; can still be added to investments via the Staff module |
| **Locked** | Cannot log in; triggered by too many failed login attempts |

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **Resources**.
2. Select one or more resources.
3. Click **Activate**, **Deactivate**, or **Lock** as appropriate.
4. Save your changes.

> [!note]
> If LDAP is running, you can change the status of only one user at a time.

### Reset a User Password

1. Click **Administration**, **Organization and Access**, **Resources**.
2. Open the resource.
3. Enter a temporary password in the **Password** and **Confirm Password** fields.
4. Send the user the temporary password.
5. Select **Force Password Change** so the user must reset it at next login.
6. Save your changes.

> [!note]
> If LDAP is used for authentication, manage password resets through LDAP.

### Force All Users to Reset Their Passwords

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Change Password Options** section, click **Force Password Change**.
3. Save your changes.

## Related

- [[Authentication Methods]]
- [[LDAP SSL SSO]]
- [[_MOC Administration]]

%%Source: p1968%%
