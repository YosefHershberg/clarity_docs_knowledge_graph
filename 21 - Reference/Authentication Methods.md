---
title: Clarity Authentication Methods
tags:
  - admin
  - reference
  - saas
  - onprem
aliases:
  - Authentication Methods
  - SSO
  - SAML
  - LDAP Authentication
  - Federated SSO
canonical: true
audience: admin
domain: administration
---
# Clarity Authentication Methods

> [!IMPORTANT]
> Broadcom is migrating its Federated SSO support for all SaaS offerings from Okta to the Broadcom **VIP AuthHub** (VIP) service. The SaaS team will migrate customers' current Okta configuration to minimize impact, but customers must adjust their IDP setup to complete the migration. See [[#Migrating to the VIP Auth Hub]] below.

This note describes authentication methods (SSO, LDAP, SAML) available for on-premise and SaaS editions of Clarity PPM. Use this guide to decide the right authentication method for your organization.

> [!TIP]
> Best practice: configure the **Username** field as an email address for each user. This is required for true SSO and is the only supported username format for the SaaS environment.

---

## Authentication Options Comparison

| Authentication Model | Environment | Advantages | Disadvantages |
|---------------------|-------------|------------|---------------|
| **Standard Authentication** | OP or SaaS | Simple configuration; no integration setup required; fully supported by Broadcom. | SSO not enabled; must use Clarity Login page; multiple passwords to manage. |
| **LDAP Authentication** | OP only | Single enterprise passwords; mixed-mode LDAP/internal support per user. | SSO not enabled; must use Classic PPM login page; limitations with multiple directories/forests/domains. Not available for SaaS. |
| **SSO with CA Single Sign-On** | OP only | Fully tested and supported; single enterprise passwords; optional portal. No custom code required. | Customers must implement CA SSO (not included). Moderate complexity. |
| **SSO — SaaS Federated SAML 2.0** | SaaS only | Only supported SSO method for SaaS; single enterprise passwords; supports SAML 2.0. | Customers must support IdP including SAML. Only SAML 2.0 supported (OAuth/OpenID not supported). |
| **SSO with third-party SAML 2.0** | OP only | Seamless integration; simplified password management. | Usernames must match between Clarity and IDP. |

---

## Authentication Methods Detail

### 1. Standard Authentication (OP/SaaS)

Presents the out-of-the-box login page. All user passwords are encrypted and stored in the Clarity database. Password management settings (expiration, history, rules) are configured under **Administration > General Setting**. This is the **default** authentication method.

### 2. LDAP Authentication (OP Only)

Clarity presents its login page but queries a customer's LDAP v3-compliant directory server to authenticate users. Supported directories include: CA Directory, Microsoft Active Directory, Novell eDirectory, Oracle Directory Server, Sun One Directory.

Key characteristics:
- LDAP passwords are never stored in the Clarity database.
- SSL-enabled LDAP (LDAPS) is supported.
- Configured in the Clarity System Administration (CSA).
- Supports **mixed mode**: set `Allow non-LDAP users` in CSA to allow some users to authenticate via LDAP and others via standard internal authentication.

> [!NOTE]
> LDAP is not SSO-enabled. However, it provides centralized password management.

### 3. SSO — On-Premise with CA Single Sign-On (OP Only)

On-premise customers can use CA Single Sign-On (formerly CA SiteMinder). The CA SSO implementation handles user authentication; Clarity does not challenge users. Relies on an SSO web agent on Apache or Microsoft IIS HTTP proxy. Does not use SAML, as Clarity is on-premise within the organization's network.

### 4. SSO — SaaS Federated Identities (SAML 2.0) (SaaS Only)

The only supported SSO method for SaaS customers. Creates a trusted relationship between Clarity SaaS and your organization's identity management solution.

Benefits:
- Seamless integration between your intranet and Clarity SaaS.
- Simplified password management via your existing enterprise user management.
- Dedicated Broadcom support organization.

Clarity SaaS supports **IdP-initiated SAML 2.0 with HTTP-POST Binding**. SP-initiated SSO can be enabled with limitations:
- Favorite browser links can be used (double-click).
- Broadcom does not generate a SAML assertion — user is redirected to the IdP URL.

> [!NOTE]
> Recommended approach: use IdP-initiated SSO with Clarity SaaS.

### 5. SSO with Third-Party SAML 2.0 (OP Only)

Available in Clarity 15.8.1 and later. Allows on-premise customers to use credentials from any IdP that supports SAML 2.0.

To enable:
1. Import the SAML Metadata for your IDP using REST APIs.
2. Configure Clarity to enable SAML authentication.

Clarity supports SAML via a virtual object and REST APIs for uploading SAML metadata files. Additional REST endpoints allow modifying and examining configured metadata.

---

## Clarity SaaS Authentication in the Google Cloud Platform

### Broadcom's Okta User Groups

Broadcom creates user groups in Okta that map to provisioned Clarity environments. Naming convention:

```
ClarityPPM.tenant_name.tenant_domain.Clarity_instance_type
```

**Example:** Tenant "MyBank" with domain "cppm4758" and two environments:
- `ClarityPPM.MyBank.cppm4758.dev`
- `ClarityPPM.MyBank.cppm4758.prod`

A single user can belong to multiple groups to access multiple environments.

### User Management (Three Systems)

For a user to access Clarity SaaS, their information must exist in:

1. **IdP (Identity Provider)** — Created by your SSO team. Used to authenticate before granting access.
2. **Clarity** — Created by your Clarity administrator. Username **must be in email format**; otherwise, Okta will deny access.
3. **Broadcom's Okta** — System of record for all Broadcom GCP SaaS users.

**Federated SSO users**: Broadcom's Okta "Just-In-Time" (JIT) user creation automatically creates users in Okta when a SAML request is received. No manual Okta creation needed.

**Non-Federated users**: The **SaaS User Sync job** synchronizes Clarity users with Broadcom Okta:
- Checks if user exists in Okta.
- Skips users whose username is not in email format.
- Creates users in Okta if they don't exist.
- Adds users to appropriate Okta user groups.
- If a Clarity user is **Inactive**, the job removes them from the Okta group, revoking access.

### Syncing Users Between Clarity and Okta

- **Federated SSO users**: Use Broadcom's Okta JIT provisioning. Users must first be defined in Clarity.
- **Non-Federated users**: Run the SaaS User Sync job. In Clarity 15.9.1+, no need to log in to Okta as tenant admin.

> [!ATTENTION]
> In Clarity 15.9.1+, you can specify a **secondary email address** for test users in Clarity. This allows test users with invalid primary email to receive Okta activation information via the secondary email.

### Revoking User Access to Clarity

1. For federated users: manage access in your IdP.
2. Change user status in Clarity to **Inactive**.
3. Your Okta tenant admin removes the user from the Broadcom Okta user group:
   a. Log into Okta as tenant administrator.
   b. Complete multi-factor authentication.
   c. Select **People** under the **Directory** menu.
   d. Search for the user and click their name.
   e. Navigate to the **Groups** tab and remove the relevant groups.

### Accessing Clarity via XOG

XOG (XML Open Gateway) does **not** support SSO. XOG transactions require a Clarity username and password directly. The user will be authenticated using Clarity authentication.

### Common Questions

| Question | Answer |
|----------|--------|
| User exists in IdP but not in Clarity? | User is presented with the Clarity login page. Clarity received a SAML request for a user it could not identify. |
| Limit non-federated user to non-production only? | Yes — tenant admin adds the user to only the non-production Okta user group. |
| Must all environments use Federated SSO? | Yes — Broadcom requires Federated SSO for all Clarity environments. Cannot enable for just one. |

---

## Federated SSO With Clarity SaaS

### Requirements to Enable Federated SSO

1. Customers must implement an Identity Management (IdP) solution.
2. The IdP solution must support **SAML 2.0**.
3. Customers must create IdP artifacts passing required information to Clarity SaaS.
4. Federated SSO will be enabled for **all** Clarity SaaS environments.
5. All Clarity usernames must be in **valid email format**.

### Information Needed to Enable Federated SSO

Create a Broadcom Support ticket requesting Federated SSO setup. Include:

| Information Needed | Summary |
|-------------------|---------|
| Clarity environment information | URLs for all environments (Test, Dev, Prod). |
| SSO Solution Tenant Admin | Name, email, phone. |
| Name of Identity Management Solution | IdP application name (ADFS, Okta, PingFederate, etc.). |
| Email domains restricted to IdP | If user email is not in these domains, access will be denied. |
| Clarity landing page | Modern UX or Classic PPM page upon successful login. |
| Restrict authentication to Federated SSO only? | Yes = SP-initiated only. No = Okta credentials also allowed. |
| SAML IdP Issuer ID | Unique per environment. |
| SSO Service URL for IdP | IdP URL, unique per environment. |
| Signer Certificate | Certificate used to sign SAML assertions. |
| Logout URL | URL shown when user logs out of Clarity. |

### Broadcom Setup (Okta Settings)

| Setting | Value |
|---------|-------|
| SAML Binding | SAML 2.0 HTTP-POST |
| Skew time | 2 minutes |
| NameId | OKTA/Clarity username in email format |
| Assertion Encrypted? | No — only signing is supported |
| Session Timeout | 2 hours |

Once setup is complete, Broadcom provides the customer:
- **RelayState** instructions for each environment.
- **Federation Metadata File** (Service Provider metadata).

### Customer Setup

**SSO team actions**: Create a new IdP artifact for each Clarity environment with:
- NameID = Clarity username in email format.
- SAML Attributes in assertion: `firstName`, `lastName`, `Email`.
- Minimum signature algorithm: SHA-256.

**Okta tenant admin actions** (after receiving Broadcom setup email):
1. Select the link in the email to register in Okta.
2. Set up a new password.
3. Set up multi-factor authentication.

**Post-setup**: Test non-production environments first, then go live on production.

### Authorization Flows

#### IdP-Initiated Flow (Recommended)

1. Users navigate to the organization's IdP URL.
2. Users authenticate via the IdP.
3. Users see application tiles including each Clarity environment.
4. Users select the target Clarity environment.
5. Users land on the defined Clarity landing page.

#### SP-Initiated Flow

1. Users navigate directly to the Clarity URL.
2. If no valid session, routed to IdP authentication page.
3. Users authenticate via IdP.
4. Users select the Clarity environment (if multiple tiles shown).
5. Users land on the defined Clarity landing page.

### Create a Clarity User Based on SAML Request (JIT User Creation)

**Prerequisites** in System Options:
- Enable SAML Authentication.
- Enable Allow Just-In-Time User Creation.

When Clarity receives a SAML request:
- If username exists → user is logged in.
- If username does not exist → checks for required SAML attributes → creates user if present.

**Required SAML Attributes:**

| SAML Attribute | Can Default | Notes |
|---------------|-------------|-------|
| LastName | No | Last name of user to create |
| FirstName | No | First name of user to create |
| Login | No | Clarity username (email format) |
| ResourceID | Yes (defaults to username) | Resource ID in Clarity |
| Email | No | Email address |

**Optional SAML Attributes:**

| Attribute | Description |
|-----------|-------------|
| TimeZone | Must exist in `i18n.xml` |
| EmploymentType | 300 = Employee, 301 = Contractor |
| Language | One of 21 language codes |
| Locale | Validated against `i18n.xml` |
| ResourceManager | Username of a Clarity user |
| UserGroups | Comma-separated list of Clarity User Group IDs |

---

## Migrating to the VIP Auth Hub

Broadcom is migrating Federated SSO support from Okta to the **Broadcom VIP AuthHub (VIP)** service for all SaaS offerings.

### Migration Timeline Overview

1. Receive scheduling notices via the Service Status system (same system used for upgrades/maintenance).
2. A support ticket is opened with non-production metadata and cutover dates.
3. Update your IDP configuration with the new metadata. Two weeks provided for this step.

   > [!NOTE]
   > Steps 2–3 will temporarily interrupt non-production access until cutover is complete.

4. On Broadcom's cutover date, the Clarity team completes the non-production cutover interactively.
5. A new support ticket is created for Production migration with a scheduled cutover date.
6. On the production cutover date, the Clarity team completes the cutover interactively.
7. Process complete upon Production cutover.

### Guidelines for Customers Using Azure

1. Back up current configuration (Entity ID, ACS URL, certificate).
2. Locate the Enterprise SSO application (currently pointing to okta-sandbox).
3. Click **Edit Basic SAML Configuration**.
4. Update **Identifier (Entity ID)** from the new metadata.
5. Edit **Reply URL (Assertion Consumer Service URL)**.
6. Click **Save**.

> [!NOTE]
> If your IDP has Verification Certificates set to Yes, import the SP cert from Broadcom VIP Auth Hub metadata.

### Guidelines for Customers Using Okta

Update the following values in your current SAML Okta application:
- Single Sign-On URL
- Recipient URL
- Destination URL
- Remove the current relay state (leave empty).

### FAQ

| Question | Answer |
|----------|--------|
| Who needs to be involved? | Clarity Administrator(s), internal IT team, and IdP administrator who manages SSO. |
| Impact on end-user experience? | No change — users continue using current credentials and login method. |
| Impact on integrations? | Integrations not anticipated to be impacted. Test all integrations post-migration. |
| Change usernames/passwords for federated users? | No — SSO credentials remain in your IdP. |
| Using both Federated and Non-Federated SSO? | Both continue to work. New non-federated users post-migration are provisioned via support ticket. Existing non-federated users must reset passwords post-migration. |
| Reset passwords for non-federated users? | See Non-Federated Access in VIP AuthHub section below. |
| SP and IdP-initiated logins? | Yes, VIP supports both. |
| Is there a charge? | No — Clarity Support manages the migration at no charge. |
| How to initiate? | Broadcom initiates. A Status Page notice will provide scheduling details. |

---

## Non-Federated Access in VIP AuthHub

### Provisioning Non-Federated Users

To provision non-federated users, submit a support ticket with the following information:
- First Name
- Last Name
- Email Address (used as the username)
- Clarity Environments required (Prod, Dev, Test, etc.)

> [!IMPORTANT]
> For multiple users, provide the information in Excel format. Tenant Admin privileges to provision user accounts directly are **no longer available**.

Follow these steps:

1. Open a support ticket with the user list.
2. Broadcom provisions the user accounts.
3. Users receive an activation email.
4. Users set up local credentials on Broadcom VIP and confirm password setup.

### Accessing Clarity as a Non-Federated User

After setting up a password, non-federated users can access Clarity even if SSO is enabled, by using the PPMSSO URL.

1. Navigate to the appropriate PPMSSO URL for your region (see table below).
2. Enter your username.
3. Enter your password.
4. The PPMSSO Dashboard appears (or direct redirect if user belongs to a single group).

> [!NOTE]
> If locked, inactive, or not provisioned in Clarity, you are redirected to the default page.

### PPMSSO URLs by Region

| Clarity Domain | Region | PPMSSO URL |
|---------------|--------|------------|
| `cppm****.ondemand.ca.com` | US | `https://cppmssousah02.ondemand.ca.com/ppmsso/csso` |
| `cppm****.clarityppm.saas.broadcom.com` | US | `https://cppmssousah01.clarityppm.saas.broadcom.com/ppmsso/csso` |
| `cppm****.ondemand.ca.com` | EU | `https://cppmssoeuah02.ondemand.ca.com/ppmsso/csso` |
| `cppm****.clarityppm.saas.broadcom.com` | EU | `https://cppmssoeuah01.clarityppm.saas.broadcom.com/ppmsso/csso` |
| `cppm****.ondemand.ca.com` | AU | `https://cppmssoauah02.ondemand.ca.com/ppmsso/csso` |
| `cppm****.clarityppm.saas.broadcom.com` | AU | `https://cppmssoauah01.clarityppm.saas.broadcom.com/ppmsso/csso` |
| `cppm****.ondemand.ca.com` | Canada | `https://cppmssocaah02.ondemand.ca.com/ppmsso/csso` |
| `cppm****.clarityppm.saas.broadcom.com` | Canada | `https://cppmssocaah01.clarityppm.saas.broadcom.com/ppmsso/csso` |

### Non-Federated User Access with MFA Enabled

If MFA is enabled:
1. Enter credentials.
2. Choose an MFA option:
   - Email a security code
   - Use biometrics
   - Use a code from a mobile app
3. Complete the MFA challenge.

### Migrating Existing Non-Federated Users from Okta to VIP

All existing non-federated users are migrated automatically. To activate after migration:

1. Enter your username on the login page.
2. If you see "Your account is locked", click **Unlock Account**.
3. Click the **Email** link to receive a password reset email.
4. Open the email with subject "Reset Password" and click the link.
5. Enter and confirm your new password.
6. Click **Reset Password**. Confirmation message appears.
7. Log in to the PPMSSO URL using the new password.

### Non-Federated Access Summary

- Tenant Admin access to provision/manage non-federated users in VIP is **unavailable**. Submit a Support Ticket for all user provisioning.
- SSO user provisioning uses JIT, same as before.
- All non-federated users need access to the region-specific PPMSSO URL.

---

## Related

- [[_MOC Reference]] — Reference section overview
- [[_MOC Administration]] — Administration configuration
- [[XOG Rights]] — XOG access rights (note: XOG does not support SSO)
- [[Administration Rights]] — Administration - Authentication & Keys access right

%%Source: Reference PDF — Authentication Methods, SaaS GCP Auth, Federated SSO, VIP AuthHub Migration, Non-Federated Access%%
