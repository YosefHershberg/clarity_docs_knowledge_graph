---
title: Configure General System Settings
tags:
  - admin
aliases:
  - General System Settings
canonical: true
audience: admin
domain: administration
---

# Configure General System Settings

## Overview

As an administrator, you can configure system settings to enable Clarity and manage settings for passwords, documents, advanced reporting, and custom chart colors. Add site links for convenient access by users. Enter translated text for field labels and error messages. Other settings include data warehouse fiscal time period data, consistent chart colors, company name, TSV links for Export to Excel, GZip HTML encoding, and Mail Service.

All settings are accessed via **Administration**, **General Settings**, **System Options**.

## Enable Clarity

Enable Clarity for project managers, resource managers, and team members.

> [!note]
> Before you can enable Clarity, install the PMO Accelerator. Without the accelerator, the options for Clarity are disabled. See Install the PMO Accelerator Add-In and PMO Sample Data.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **New User Experience** section, select **Activate New User Experience**. This provides a global switch controlling whether Clarity is accessible. If not activated, users who navigate to `http(s)://<servername>/pm` are redirected to Classic PPM.
3. To enable the new timesheet UI, select **Activate Timesheets** and click **Save**. When you activate new timesheets, the following changes occur:
   - The timesheet menu link and Current Timesheet icon are removed from the Classic PPM UI.
   - In **Administration**, **Project Management**, **Timesheet Options** - Default Content and Layout section, the following columns remain in Available Columns (not needed for new timesheets): Investment, Investment ID, Phase.
   - The following columns no longer appear in Available Columns: Task ID, Short Name, Parent, Parent ID, Phase ID, Start, Finish, Posted Actuals, Baseline, Role, Incident Category, Notes Icon.
   - In **Timesheet Options** - Default Time Entry Options section, the following fields are removed: Default Sorting, Disable Indirect Time Entries, Enable Note Date. The remaining fields reset to stock default values.
   - Timesheet notifications are sent from Clarity. Users can create timesheets in Clarity only.

> [!tip]
> - Broadcom recommends that teams use either new timesheets or Classic PPM timesheets — do not switch between both.
> - New timesheet notification links automatically go to the specific timesheet for a specific team member. Example: `https://<servername>/pm/#/timesheets/timesheet?resourceId=5003033&timeperiodId=5004050`

4. To prioritize access rights over Clarity Attribute Level Security, check **Prioritize Access Rights over Attribute Level Security** and click **Save**. Default value: unchecked.

> [!note]
> **When FLS is used and 'Prioritize Access Rights over Attribute Level Security' is NOT ENABLED**: FLS to edit a field overrides the user's access rights. Example: A user has Investment-View access and is a member of the group with FLS Edit Access on the 'Description' field — the user IS allowed to edit the field.
> **When 'Prioritize Access Rights over Attribute Level Security' IS ENABLED**: User access rights take priority and FLS Edit settings are ignored. Example: The same user will NOT have the ability to edit the 'Description' field.

5. To set the report date to the current date in the Preview mode of Status Reports, check **Set Report Date to Current Date on Preview** and click **Save**. Default: unchecked.
6. To disable the **Create Detail Row** option in the right-click context menu of Cost/Budget Plan Details, check **Disable child row creation for cost plan details**. Default: unchecked.

## Hide Availability and Remaining Availability for Roles

Administrators can use the **Display Availability and Remaining Availability Amounts for Roles** system option to ignore non-zero values in the Availability and Remaining Availability fields for roles within the Roles workspace and Staffing workspaces.

> [!note]
> This field is selected by default when you upgrade to preserve prior behavior. Broadcom recommends clearing this field after upgrading to make the best use of the Staffing workspace and the Roles workspace.

## Delete Unsaved Views on Logout

Clarity administrators can use the **Delete Unsaved Views on Logout** option in System Options to ensure Clarity deletes unsaved views when a user logs out. This ensures users see the latest saved view configurations configured by the administrator, even if they previously accumulated unsaved view changes.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **New User Experience** section, select **Delete Unsaved Views on Logout**.

## Activate Vaia (Beta)

Vaia is Clarity's AI capability powered by public AI models. You need to create a support ticket with Broadcom to activate it in your environment first.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **New User Experience** section, select **ACTIVATE VAIA AI SERVICE**. Read the disclaimer before enabling.

> [!important]
> By activating, you agree to share some of your Clarity data with a third-party Generative AI service. The Service uses emerging technology, may generate inaccurate output, and is not designed for regulatory, legal, or other obligations. Broadcom bears no responsibility or liability for the Service.

Users also require the **Administration - Vaia - Navigate** access right to see the Vaia (Beta) tile in the Administration workspace.

## Set Document Management Options

You can set options that determine how attachments and uploaded documents are accessed by other users, including file scanning and download options. You can also limit which file extensions users are permitted to upload.

> [!note]
> These options apply to both the Classic PPM interface and Clarity. File extension restrictions do not apply to documents uploaded using XOG.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. Configure the following fields:
   - **Authorized File Extensions**: Leave empty (default) to allow all file types. To restrict, enter a comma-separated list with no spaces (example: `doc,docx,pdf,xls,xlsx,ppt,pptx,jpg,gif`). Applies to document management, avatar images, Studio attachment attributes, and project status reports.
   - **Enable File Scanning of Documents**: Select to scan uploaded documents via a virus scanning command-line program configured in CSA. Default: Cleared.
   - **Allow Non-Participants to Access Documents**: Global default value for all future uploaded documents. Can be changed per document.
   - **Enable Document Download**: Adds the **Download All** and **Incremental Download** actions on the Collaboration tab.
   - **Maximum File Size for Document Download**: Limit for total file sizes in Download All or Incremental Download actions.
   - **Warning File Size for Document Download**: Lower limit — when exceeded, users receive a warning and can cancel or continue.
3. Click **Save**.

## Set Other System Options

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Other** section, complete the following fields and save:
   - **Company Name**: Defines your company name displayed on the About page. Limit: 80 characters.
   - **Chart Colors**: Specifies custom colors for use with charts. Click the **Color Palette** link to enter name and hexadecimal RGB values.
   - **Use Consistent Chart Colors**: Defines whether to use consistent chart colors. Default: Cleared.
   - **Use GZip HTML Encoding**: Specifies compression for HTML pages. Default: Selected.

## Enable SAML Authentication

The **Enable SAML Authentication** option allows Clarity to accept SAML responses from Identity Providers such as OKTA or Auth0.

> [!warning]
> - **On-Premise Customers**: This option is currently not applicable. If you select this option, users will experience authentication issues.
> - **SaaS Customers**: Do not make any changes to this option. If you update it, users will face authentication issues.

## Configure Telemetry (Subscription Compliance)

Telemetry sends product usage and system configuration data to Broadcom to help improve the product. Telemetry does NOT collect any personally identifiable information (PII). It is MANDATORY to enter your Site ID when configuring the Subscription Compliance Setup section.

> [!note]
> Telemetry is disabled for FedRAMP environments.

**Follow these steps:**

1. Log into Classic PPM as an administrator.
2. Click **Administration**, **General Settings**, **System Options**.
3. In the **Subscription Compliance** section, complete the following fields:

| Field | Description |
|---|---|
| **Site ID** (Mandatory) | Your enterprise ID from the Broadcom Support website. Locked after being entered. |
| **Production Environment** | Yes for production, No for other environments. Default: No. Can change from No to Yes but not back. |
| **PLA Customer** | Whether your organization participates in the Subscription Portfolio License Agreement. |
| **Charge Identifier** | Name or chargeback ID of a department associated with paying for Clarity usage. |
| **Instance** | Type of installation instance (e.g., Product Development, Enterprise Sales Training). |
| **Product Version** | Auto-populated with the version number. |
| **Domain Name** | Auto-populated Primary App Service HTTP/HTTPS URL from CSA. |
| **Error Notification Email** | Email addresses (comma-separated) for Telemetry error notifications. |
| **SaaS Environment** | Auto-populated: SaaS or On-Premise. |
| **Use Proxy** | Proxy server settings for sending telemetry data to Broadcom. |

4. Save your changes.

### Data Transmitted by Telemetry

| Name | Description |
|---|---|
| `site_id` | Your organization's site ID |
| `instance_id` | Type of installation instance |
| `product_sku` | Stock Keeping Unit (SKU) of Clarity |
| `SaaS environment` | SaaS or On-Premise indicator |
| `product version` | Version number of Clarity |
| `pla_enabled` | PLA Customer participation flag |
| `date_collected` | Date telemetry data is sent |
| `monthly_usage` | Count of active users by license type (Full Function, Restricted, View) |
| `chargeback_id` | Charge Identifier |
| `domain_name` | Primary App Service URL |

> [!note]
> Creator and Demo licenses are counted as Full licenses; Participant licenses as Restricted; Viewer licenses as View Only.

### Identify Your Site ID

1. Navigate to `https://support.broadcom.com/`.
2. Click **Sign In** and enter your credentials.
3. Click **MY ACCOUNT**, **SITE ACCESS REQUEST** to open the Site Access Request page.
4. Click **Admin Access** to view the User Administration Access Request page. Your organization's name and Site ID are displayed.

## Configure Advanced Reporting Options

The **Advanced Reporting** section of System Options includes:
- Advanced Reporting Server URL
- Organization ID
- Classic PPM Database Schema name
- Data Warehouse Database Schema name

Use this information to create a server connection for Jaspersoft Studio Professional.

To govern synchronization of Jaspersoft Advanced Reporting roles from Classic PPM, select the **Allow Jaspersoft Role synchronization** option. A Jaspersoft role is synchronized when:
- The role has the same ID as a Classic PPM access group.
- The user assigned to the Jaspersoft role exists in Jaspersoft.

## Create Custom Chart Colors

You can create a chart color palette at the system level. If you do not create a custom palette, the system assigns colors using the default palette.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Other** section, click the **[Color Palette]** link for the **Chart Colors** field.
3. Click **New** on the Chart Colors page.
4. Complete the following fields:
   - **Name**: Defines a name for the color.
   - **RGB**: Specifies the hexadecimal value (example: `0000FF` for Blue).
5. Save the changes.
6. Click **Order** and define the order for assigning colors in the palette.

## Add Site Links

You can add, change, and delete site links that appear in the **Site Links** section of overview pages.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **Site Links**. The page links page appears.
2. Click **New**.
3. Complete the following fields and click **Save**:
   - **Link Name**: Name of the page link displayed on the overview page. Limit: 32 characters.
   - **URL**: Web address for the page link. Limit: 240 characters. Classic PPM does not validate the URL.

## Configure Mail Service

The Mail Service enables automated email processing, allowing users to respond to Action Items directly from their inbox without logging into Clarity. It integrates with Gmail and Microsoft Outlook using secure OAuth 2.0 authentication.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **Mail Server**.
2. Populate the **Incoming Server Configuration** section:

| Field | Description |
|---|---|
| **Configuration Name** | Name to identify the mail service configuration |
| **Host Name** | Mail server host name (e.g., `outlook.office365.com` or `imap.gmail.com`) |
| **Port** | Port for secure IMAP over SSL (e.g., `993`) |
| **Active** | Select to enable the mail configuration |
| **Enable Tracing** | Select for detailed logging for troubleshooting |
| **Prefer StartTLS** | Select if your mail server supports StartTLS |
| **Mail Reader Protocol** | Select **IMAP** |
| **Encryption Type** | Select **SSL** |

3. In the **Mail Account Configuration** section:

| Field | Description |
|---|---|
| **Email Address** | Email address Clarity will connect to |
| **Password** | If required. Disabled when using OAuth. |
| **Authentication Type** | **Basic** (username/password) or **OAuth** (token-based) |
| **Mail Polling Interval** | Interval (in minutes) to check the inbox |

4. In the **OAuth Configuration** section:

| Field | Description |
|---|---|
| **Provider** | **Microsoft Azure** or **Google** |
| **Client ID** | Client ID from the OAuth provider |
| **Client Secret** | Client Secret from OAuth application registration |
| **Tenant ID** | (Azure only) Tenant ID of Azure Active Directory |
| **Redirect URL** | Auto-populated: `https://<clarity-url>/niku/oAuthCallback` |
| **Scope** | Azure IMAP: `https://outlook.office.com/IMAP.AccessAsUser.All offline_access`; Google: `https://mail.google.com/ offline_access` |

5. Click **Save**.
6. Click **Generate OAuth Token** — this redirects you to the OAuth provider to authenticate.
7. Once successfully logged in, the **Access Token Generated** and **Reset Token Generated** checkboxes will be selected.
8. The **Poll Mail Service** job will poll the configured email account at regular intervals.

## Related

- [[_MOC Administration]]

%%Source: p3109-3132%%
