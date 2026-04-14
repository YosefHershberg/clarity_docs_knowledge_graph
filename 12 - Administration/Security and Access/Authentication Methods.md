---
title: Clarity Authentication Methods
tags:
  - admin
  - reference
aliases:
  - Auth Methods
  - SSO
  - SAML
canonical: true
audience: admin
domain: administration
---
# Clarity Authentication Methods

## Overview

This guide describes the authentication methods available for Clarity PPM — Standard Authentication, LDAP, SSO, and SAML 2.0 — for both on-premise and SaaS deployments. Use this guide to decide the right authentication method for your organization. In general, Broadcom recommends centralized authorization and password management using single sign-on (SSO).

> [!important]
> Broadcom will migrate its Federated SSO support for all of its SaaS offerings from Okta to the Broadcom VIP AuthHub (VIP) service. The SaaS team will migrate customers' current Okta configuration to VIP to minimize the impact, but customers will need to make adjustments to their IDP setup to complete the migration. To learn more, see Migrating to the VIP Auth Hub.

SSO reduces IT costs because fewer credentials to manage means fewer calls to the help desk for lockouts and resets. SSO is also more secure because it centralizes authorization policies. Because users only need to remember one strong password, they no longer write them down — a common security risk.

**Key questions this guide answers:**
- Which authentication methods enable SSO?
- Are third-party SSO solutions required?
- Which SSO options are supported?
- Will Clarity support federated SSO? If so, what type?

**On-Premise SSO Options:** Clarity 15.8.1 and higher releases allow on-premise customers to use the credentials issued by an IDP that supports SAML 2.0. Review On-Premise SAML Configuration for more information.

**On-Demand (SaaS) SSO Options:** Classic PPM includes two options:
- The Standard Clarity login page.
- Federated SAML SSO to provide a trusted integration between your enterprise directory and the Broadcom network.

> [!tip]
> Best practice for new and existing customers in on-premise or SaaS environments: configure the Username field (seen on the Resources page under the Administration menu) as the email address for each user. This step is required for true single sign-on (SSO) and resolves conflicts with duplicate domain accounts. The email format is the only supported username format for SSO in the CA SaaS environment.

## Authentication Options Table

| Authentication Model | Environment | Advantages | Disadvantages |
|---|---|---|---|
| Standard Authentication | OP or SaaS | Simple configuration; no integration setup required; fully supported by Broadcom | Single sign-on is not enabled; must use Clarity login page; multiple passwords to manage |
| LDAP Authentication | OP only | Configuration inside Clarity with CSA; single enterprise passwords; mixed-mode support | SSO not enabled; must use Classic PPM login page; limitations with multiple directories/forests; not available for SaaS |
| SSO - On-Premise with CA Single Sign-On | OP | Fully tested and supported; single enterprise passwords; optional portal; no custom code required | Customers must implement CA Single Sign-On (not provided with Clarity); moderate complexity |
| SSO - Clarity SaaS using Federated Identities (SAML 2.0) | SaaS | Only supported SSO method for SaaS; fully supported by Broadcom; single enterprise passwords | Customers must support their side of federation including SAML; only SAML 2.0 is supported (not OAuth or OpenID) |
| SSO with a third-party SAML 2.0 solution | OP | Seamless integration between networks; simplified password management | Usernames need to match for Clarity and IDP |

## Authentication Methods

### 1. Standard Authentication (OP/SaaS)

Classic PPM presents an out-of-the-box login page to users. When a user logs out of Clarity they are sent back to the Clarity login page. All user passwords are encrypted and stored in the Clarity database.

Password management settings like password expiration, history, and other rules are configured in Clarity under Administration and General Settings. This is the default authentication method for Clarity.

### 2. LDAP Authentication (OP Only)

Clarity presents the out-of-the-box login page to users, however Clarity queries the customer's LDAP v3-compliant directory servers to authenticate users. Supported LDAP systems include: CA Directory, Microsoft Active Directory, Novell eDirectory, Oracle Directory Server, and Sun One Directory.

The passwords stored in the Clarity database are not used in this configuration. LDAP passwords are never stored in the Clarity database. SSL-enabled LDAP (LDAPS) is supported.

The Clarity configuration for LDAP is contained in CSA. Note: this configuration is not SSO-enabled, however centralized password management is obtained.

LDAP authentication is compatible with standard internal authentication in mixed mode when `Allow non-LDAP users` is enabled in CSA. This allows externally authenticated users to authenticate against LDAP while other users use standard internal authentication.

### 3. SSO - On-Premise with CA Single Sign-On

On-premise customers may leverage Clarity in conjunction with CA Single Sign-On. Organizations may configure this solution with or without their own corporate login and logout portal page.

CA Single Sign-On handles user authentication; Clarity will not challenge users for authentication in this mode. This is the only supported and tested SSO solution for on-premise Clarity.

This configuration relies on an SSO Web Agent installed on an Apache or Microsoft IIS HTTP proxy server. Note: this configuration does not leverage SAML, as the Clarity application is on-premise within the organization's own network.

### 4. SSO - SaaS using Federated Identities (SAML 2.0)

Federated SSO integration creates a trusted relationship between Clarity SaaS and your organization's identity management solution. Benefits:

- **Seamless integration**: All users can move easily between your organization's intranet and Clarity SaaS.
- **Simplified password management**: Your existing user management system handles password management.
- **Broadcom Supported**: A dedicated Broadcom support organization is available for technical support.

Clarity SaaS supports federated single sign-on using SAML 2.0. This integration creates a trusted relationship between Broadcom's SaaS infrastructure and your organization's existing enterprise user management system.

For more information, see Clarity SaaS Authentication in the Google Cloud Platform.

### 5. SSO with a Third-Party Solution (OP Only)

Clarity 15.8.1 and higher releases allow on-premise customers to use credentials issued by an IDP that supports SAML 2.0. Key advantages:

- Seamless integration between networks and environments.
- Simplified password management — your existing user management system handles passwords.

Clarity supports SAML using a virtual object and REST APIs that allow SAML metadata to be uploaded as a file into Clarity. After the file is uploaded, a REST API call provides the SAML metadata from Clarity that can be used by the IDP to complete its connection.

**Two key actions to enable SAML 2.0 in Clarity:**
1. Import the SAML Metadata for your IDP using REST APIs.
2. Configure Clarity to enable SAML authentication.

Review On-Premise SAML Configuration for more information.

> [!note]
> More Information (On-Premise): On-Premise SAML Configuration, CSA: Security Passwords LDAP SSL SSO XSS and FIPS, CA Single Sign-On Documentation.
> More Information (SaaS): Clarity SaaS Authentication in GCP, CA Single Sign-On Documentation.

## Clarity SaaS Authentication in the Google Cloud Platform

### Broadcom's Okta User Groups

Broadcom creates user groups in Okta that map to a provisioned Clarity environment. A single user can be part of multiple user groups, allowing them to access multiple Clarity SaaS environments.

The Broadcom Okta user groups follow this naming convention:

```
ClarityPPM.tenant_name.tenant_domain.Clarity_instance_type
```

**Example:** A tenant named MyBank provisioned on Clarity GCP infrastructure with tenant domain "cppm4758" will have these two groups:
- `ClarityPPM.MyBank.cppm4758.dev`
- `ClarityPPM.MyBank.cppm4758.prod`

Clarity administrators define users in each Clarity environment. Users defined in the non-production environment are added to the `.dev` group; users in the production environment are added to the `.prod` group.

### User Management

For a user to access Clarity in SaaS, their information must exist in multiple systems.

**User Creation in Clarity:** The organization's Clarity administrator creates and manages users directly within Clarity. When defining users in Clarity, the username must be in the form of an email address. If the username is not an email address, the user will not match Broadcom's Okta user definition and access will be denied.

**User Creation in Broadcom's Okta:** Broadcom uses Okta as the system of record for all users accessing Broadcom products in the GCP SaaS infrastructure. Every user accessing Clarity must be a user in Broadcom's Okta tenant. User groups within Okta determine the products and environments a user can access.

Customers using a Federated SSO solution do not need to additionally create users in Okta. Broadcom's Okta "Just in Time" (JIT) user creation automatically creates users in Okta when a SAML request is received:
- If the user exists in Okta, they are navigated directly to the target Clarity environment.
- If the user does not exist, they are automatically created in Okta, added to the Okta user group, and navigated to the target environment.

**Non-Federated User Creation in Okta:** The SaaS User Sync job enables Clarity SaaS customers to synchronize Clarity users with Broadcom Okta and assign them to the appropriate Okta groups. Administrators should manually schedule this job to run regularly.

The SaaS User Sync job:
- Checks if the Clarity user exists in Okta.
- Skips users whose usernames are not in email format.
- Adds users to the appropriate Okta group if they exist but are not in the group.
- Creates the user and adds them to the group if they don't exist in Okta.
- Removes inactive Clarity users from the Okta user group.

### Syncing Users Between Clarity and Okta

Using JIT functionality, the system automatically creates users in Broadcom's Okta based on the SAML request. Users must be defined in Clarity to leverage JIT.

> [!important]
> In Clarity 15.9.1 and higher releases, you can specify a secondary email address for a user in Clarity. This is intended for SaaS customers who want to create test user accounts. You can create a test user where the username and primary email are invalid and the secondary email is valid. You can use the same secondary email address for all test accounts. After creating the new user, use the SaaS User Sync job to update details in Okta for non-federated users.

### Revoking User Access to Clarity

1. Federated users authenticating via your IdP should be managed in your IdP.
2. Change the user status in Clarity to "Inactive."
3. Your Okta tenant admin should remove the user from the Broadcom Okta user group:
   a. Log into Okta as a tenant administrator and navigate to the Admin link.
   b. Complete the multi-factor authentication.
   c. Select People under the Directory menu.
   d. Search for the resource and click their name.
   e. Navigate to the Groups tab and remove the relevant groups.

> [!note]
> Ensure you remove access to the Development group if you don't want resources to access the development environments.

### Accessing Clarity via XOG

The XML Open Gateway (XOG) is a Clarity web service interface used by partners and system administrators to import/export data or move configuration data. XOG uses XML and web services to perform these functions.

> [!note]
> XOG will not support SSO. The XOG transaction is achieved by specifying the Clarity username and password for the user who has authorization to perform the requested XOG. The user will be authenticated using Clarity authentication.

### Common Questions

**What happens if a user is defined in the IdP system, but not defined in Clarity?**
If the user logs into the IdP and navigates to Clarity but the user does not exist in Clarity, they will be presented with the Clarity login page. Clarity received a SAML request for a user it could not identify.

**Can I provide non-federated users access only to the Clarity non-production environment?**
Yes, the tenant administrator can limit non-federated user access to the non-production environment by only adding this user to the non-production Okta user group.

**If we want to enable Federated SSO access to Clarity SaaS, are we required to configure all Clarity environments with Federated SSO?**
Yes, Broadcom requires Federated SSO for all Clarity environments. You cannot set up Federated SSO for only one environment.

> [!important]
> More Information: Federated SSO With Clarity SAAS, Non-federated SSO With Clarity SAAS.

## Federated SSO With Clarity SaaS

Federated SSO integration creates a trusted relationship between Clarity SaaS and your organization's identity management solution. Clarity SaaS currently supports IdP-initiated SAML version 2.0 with HTTP-POST Binding. SP-initiated SSO can be enabled with the following limitations:
- A user's favorite links saved in the browser can be used if the user double-clicks the link.
- In this scenario, Broadcom does not generate a SAML assertion from its servers; the user is simply redirected to the IdP URL.

> [!note]
> The recommended solution is to use IdP-initiated SSO with Broadcom's Clarity SaaS.

**Prerequisites:**
1. Customers must implement an Identity Management (IdP) solution for user management.
2. The customer's IdP solution must support SAML 2.
3. Customers must create IdP artifacts passing the required information to Clarity SaaS.
4. Federated SSO will be enabled for all Clarity SaaS environments.
5. All Clarity usernames must be defined in a valid email format.

### Information Needed to Enable Federated SSO

Submit a Broadcom Support ticket to request Federated SSO setup. Include the following:

| Information Needed | Summary |
|---|---|
| Clarity environment information | Provide Clarity URLs for all environments (Test, Dev, Prod) |
| SSO Solution Tenant Admin (Name, Email, Phone) | Identify one account |
| Name of Identity Management Solution | The IdP application that will issue SAML requests (e.g., ADFS, Okta, PingFederate) |
| Email domains your IdP is restricted to | If a user email is not in these domains, access is denied |
| Clarity landing page | Default is Modern UX |
| Restrict to Federated SSO only? (Yes/No) | If yes, SP-initiated authentication is set up |
| SAML IdP Issuer ID | Unique for each environment |
| SSO Service URL for your IdP | Needed for all Clarity environments |
| Signer Certificate | Certificate used to sign SAML assertions |
| Logout URL | URL end-user sees when logging out |

### Broadcom Okta Settings

| Setting | Value | Description |
|---|---|---|
| SAML Binding | SAML2.0 HTTP-POST | Broadcom SaaS supported binding type |
| Skew time | 2 Minutes | Default |
| Target Page | Clarity URL | Configured based on customer information |
| NameId | Email format | NameID should contain Okta/Clarity username |
| Is Assertion Encrypted? | No | Only signing of assertion is supported |
| Assertion Consumer Service | Customer-specific | Service Provider metadata provided after setup |
| Session Timeout on OKTA | 2 hrs | — |

### Authorization Flows

**IdP-Initiated Flow:**
1. End users navigate to the organization's IdP solution URL.
2. End users authenticate via the organization's IdP.
3. End users select the Clarity environment tile (if multiple environments are available).
4. End users land on the defined Clarity landing page.

**SP-Initiated Flow:**
1. End users navigate to the Clarity environment.
2. If a valid Clarity session exists, they land on the defined Clarity page.
3. If no valid session exists, they are routed to the IdP authentication page.
4. End users authenticate using the organization's IdP.
5. End users select the Clarity environment (if multiple tiles are presented) and land on the landing page.

### Create a Clarity User Based on SAML Request

When Clarity receives a SAML request from the IdP, it checks if the username exists:
- If the username exists, the user is logged into Clarity.
- If the username does not exist, Clarity checks if the required attributes are in the SAML message.
  - If attributes are missing, the user receives an error.
  - If attributes are present, a new user is created with Active status.

**Required SAML attributes:**

| SAML Attribute | Can Default | New or Existing |
|---|---|---|
| LastName | No | New |
| FirstName | No | New |
| Login | No | Existing |
| ResourceID | Yes, defaults to User Name | New |
| Email | No | New |

**Optional attributes:** TimeZone, EmploymentType, Language, Locale, ResourceManager, UserGroups.

> [!note]
> This functionality is only available in Clarity instances enabled for SSO authentication. When checking if Clarity is enabled for SSO, the "useSSO" attribute on the app element in properties.xml must be set to `true`.

## Migrating to the VIP Auth Hub

Broadcom will migrate its Federated SSO support for all SaaS offerings from Okta to the Broadcom VIP AuthHub (VIP) service. Customers will need to make adjustments to their IDP setup to complete the migration.

### Migration Timeline

1. You will receive scheduling notices from the Service Status system providing dates and times for each environment's migration.
2. A support ticket will be opened on your behalf with non-production metadata, cutover dates, and environmental details.
3. Update your existing IDP configuration with the metadata provided in the support ticket and validate the updated SSO connection. Two weeks are provided to complete this step.

> [!note]
> Step 3 will interrupt your users' access to your non-production environment until the cutover is completed.

4. On the Broadcom-provided cutover date, the Clarity team will work interactively to complete the cutover.
5. A new Support ticket will be created for the Production environment migration.
6. On the Production cutover date, the Clarity team completes the cutover.

### Guidelines for Customers Using Azure

- Locate the Enterprise SSO application currently pointing to okta-sandbox.
- Click Edit Basic SAML Configuration and update the Identifier (Entity ID) from the metadata.
- Edit the Reply URL (Assertion Consumer Service URL).
- Click Save.

> [!note]
> If your IDP has Verification Certificates (optional) set to Yes, import the SP cert from Broadcom VIP Auth Hub metadata.

### Guidelines for Customers Using Okta

Update the following values for the current SAML Okta application:
- Single Sign-On URL
- Recipient URL
- Destination URL
- Remove the current relay state and keep it as an empty value.

### Non-Federated Access in VIP AuthHub

#### Provisioning Non-Federated Users

Submit a support ticket with the following information for each user:
- First Name, Last Name, Email Address (used as username), Clarity Environments required (Prod, Dev, Test, etc.)

> [!important]
> For multiple users, provide information in Excel format. Tenant Admin privileges to provision user accounts directly are no longer available.

Follow these steps:
1. Open a support ticket and provide the list of users.
2. Broadcom provisions the user accounts.
3. Users receive an email to activate their accounts.
4. Users set up local credentials on Broadcom VIP and confirm the password.

#### Accessing Clarity as a Non-Federated User

After setting up their password, non-federated users can access Clarity environments by navigating directly to the PPMSSO URL:

1. Navigate to the PPMSSO URL for your region (see table below).
2. Enter your username.
3. Enter your password.
4. Upon successful login, the PPMSSO Dashboard appears. Select the specific Clarity URL to access Clarity.

> [!note]
> If you belong to a single group mapped to one Clarity tenant, you will not see the PPMSSO Dashboard and will be redirected directly to Clarity.

#### PPMSSO URLs by Region

| Region | Clarity Domain | PPMSSO URL |
|---|---|---|
| US | cppm\*\*\*\*.ondemand.ca.com | https://cppmssousah02.ondemand.ca.com/ppmsso/csso |
| US | cppm\*\*\*\*.clarityppm.saas.broadcom.com | https://cppmssousah01.clarityppm.saas.broadcom.com/ppmsso/csso |
| EU | cppm\*\*\*\*.ondemand.ca.com | https://cppmssoeuah02.ondemand.ca.com/ppmsso/csso |
| EU | cppm\*\*\*\*.clarityppm.saas.broadcom.com | https://cppmssoeuah01.clarityppm.saas.broadcom.com/ppmsso/csso |
| AU | cppm\*\*\*\*.ondemand.ca.com | https://cppmssoauah02.ondemand.ca.com/ppmsso/csso |
| AU | cppm\*\*\*\*.clarityppm.saas.broadcom.com | https://cppmssoauah01.clarityppm.saas.broadcom.com/ppmsso/csso |
| Canada | cppm\*\*\*\*.ondemand.ca.com | https://cppmssocaah02.ondemand.ca.com/ppmsso/csso |
| Canada | cppm\*\*\*\*.clarityppm.saas.broadcom.com | https://cppmssocaah01.clarityppm.saas.broadcom.com/ppmsso/csso |

> [!note]
> Non-federated users should use the URL specific to the region where they are hosted.

#### Migrating Existing Non-Federated Users from OKTA to VIP

As part of the migration, all existing non-federated users will be migrated automatically.

Follow these steps to activate your account after migration:
1. Enter your username on the login page.
2. If you see the error message "Your account is locked," click Unlock Account.
3. Click the Email link to receive an unlock email containing a password reset link.
4. Open the email with the subject "Reset Password" and click the provided link.
5. Enter and confirm your new password.
6. Click Reset Password. A confirmation message appears.
7. Log in to the PPMSSO URL using your new password to access Clarity.

### FAQ

**Who needs to be involved?**
The Clarity SaaS Team will work with your Clarity Administrators, your internal IT team, and your IdP administrator who manages SSO configurations.

**How does this affect end-user experience?**
Once transitioned to VIP, there should be no change in how users access Clarity. Users continue to initiate a login either at their company's IdP or at Clarity.

**Are integrations affected?**
Integrations are not anticipated to be impacted, but should be tested to ensure functionality post-migration.

**Do we need to change usernames and passwords for federated users?**
No. SSO usernames and passwords continue to be stored and managed by your own IdP.

**What if we use both Federated SSO and Non-Federated SSO?**
Both authentication methods continue to be available. For new non-federated users post-migration to VIP, Broadcom will process creation and management via ticketed support requests. Existing Okta administrative user access will be removed. Post-migration passwords for non-federated users must be reset.

**Can we set up SP and IdP-initiated logins?**
Yes, VIP supports both IdP and SP-initiated logins.

**Is there a charge for this migration?**
No. Clarity Support manages this migration at no charge.

**How do I get support after hours?**
Contact Clarity Support.

## On-Premise SAML Configuration

Clarity allows on-premise customers to use credentials issued by an IdP that supports SAML 2.0.

Key advantages:
- Seamless integration between networks and environments.
- Simplified password management.

Two key actions to enable SAML 2.0:
1. Import the SAML Metadata for your IDP using REST APIs.
2. Configure Clarity to enable SAML authentication.

For detailed configuration steps, review On-Premise SAML Configuration documentation.

## Related
- [[LDAP SSL SSO]]
- [[_MOC Administration]]

%%Source: p3820-3870%%
