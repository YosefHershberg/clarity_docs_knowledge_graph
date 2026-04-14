---
title: Change Impact and Upgrade
tags:
  - reference
  - admin
aliases:
  - Change Impact and Upgrade
canonical: true
audience: admin
domain: reference
---
# Change Impact and Upgrade

> [!IMPORTANT]
> This page highlights significant changes, required actions, known issues, and recommended options for customers upgrading from previous releases to Clarity 16.4.1.
> - For new features and their upgrade impact, review [[Release Notes]].
> - For compatibility information, see [[Hardware Software Compatibility]].
> - For installation and upgrade information, see Installing and Upgrading.

## Supported Accessibility Combinations

| Operating System | Browser | Screen Reader |
|---|---|---|
| Windows | Chrome, Firefox, and Edge | JAWS and NVDA |
| MacOS | Safari, Chrome | VoiceOver |

> [!NOTE]
> Screen reader support is limited to the combinations above. Visual and keyboard navigation requirements are also supported for both Mac and Windows users.

## Clarity 16.4.1: AI Agent Migration and Configuration

### Review AI Action Migration

During the upgrade, all previously defined AI Actions are automatically moved to the new **AI Agents** tab. Conversion rules:

- **Mandatory Attributes:** Any AI Action missing required attributes (including the "Attribute" attribute) will be removed during the upgrade.
- **Naming Convention:** Converted agents are renamed using the format: `<Action Mode> <Attribute Name> in <Object Name>`. Users can modify these names after the upgrade.
- **Prompt Consolidation:** Multiple actions defined for a single attribute are each converted into a separate AI Agent.
- **Instruction Cleanup:** Migrated prompts now include the hidden instructions previously added by Clarity. Users should review and remove any redundant system instructions.

### Update Specific AI Features

Certain specialized actions require manual intervention following the upgrade:

1. **Reconfigure Roadmap Summarization**
   - The legacy "Roadmap Summarization" action is disabled upon upgrade.
   - To restore, build a roadmap-specific report, attach it to a new AI Agent, and manually enable it.

2. **Review Status Report Summary**
   - If a status report summary action existed prior to the upgrade, it will be converted to an AI Agent.
   - The out-of-the-box report will be automatically added with all artifacts.
   - **Action Required:** Review the report content and the agent prompt to ensure they meet specific business requirements.

### Post-Upgrade AI Action Conversion Example

| Name (16.4.0) | Type | Attribute | Action Mode | Prompt |
|---|---|---|---|---|
| Generate Contents Project | Project | Objective | Generate, Revise | Generate a 200 word ##project.c_objective## for the ##project## called $[project.name]. Rewrite the following text to a professional tone. |

**Becomes in 16.4.1:**

| Name | Type | Attribute | Output Location | Prompt |
|---|---|---|---|---|
| Generate Objective in Project | Project | Objective | Text Field | Generate a 200 word ##project.c_objective## for the ##project## called $[project.name]. Generate output using markdown syntax. |
| Revise Objective in Project | Project | Objective | Text Field | Rewrite the following text to a professional tone. Content to rewrite: $[project.c_objective]. Generate output using markdown syntax. |

## End of Life: CA Business Intelligence for Clarity

Broadcom is discontinuing support for **CA Business Intelligence for Clarity** (Clarity Advanced Reporting powered by Jaspersoft). See the official announcement for details.

## New Fields Introduced in Clarity 16.4.0

The following additional fields are now available in Clarity 16.4.0:

- Investment (Financials)
- Budget/Cost Plan Details
- Roadmaps
- Staff and Resource

> [!IMPORTANT]
> These attributes are also available in the Data Warehouse. Download the **Clarity 16.4.0 Attributes Added in the Data Warehouse** file for detailed information.

## Oracle-Only: Additional Configuration for Upgrade to Clarity 16.3.3

Perform the following additional steps for Oracle deployments only:

1. **Grant required privileges**
   - Connect to the Oracle database as the sys user (sysdba).
   - Execute the following SQL statement:
     ```sql
     GRANT CREATE ANY CONTEXT, DROP ANY CONTEXT TO <Clarity_database_user>;
     ```
   - Replace `<Clarity_database_user>` with the actual username.

2. **Grant package execution rights**
   - Still connected as SYSDBA, execute:
     ```sql
     GRANT EXECUTE ON SYS.DBMS_SESSION TO <Clarity_database_user>;
     ```

> [!IMPORTANT]
> These privileges are mandatory for Clarity functionality and must not be revoked after the upgrade.

3. **After upgrading to Clarity 16.3.3:**
   - Enable the feature toggle:
     ```
     admin toggle-feature IMPERSONATEDBY_SESSION_CONTEXT_VARIABLE_DE168694 1
     ```
   - Run database bootstrap:
     ```
     admin db db-bootstrap-odf -Dodf.triggers=true -Dodf.force=false -Dodf.restoreNonCustomizedViews=false
     ```
   - Restart the services.

## Prerequisites for Using the Staffing Workspace

Clarity recommends clearing the **Display Availability and Remaining Availability Amounts for Roles** system option in Classic PPM. This field is selected by default after upgrade to preserve previous behavior.
Broadcom recommends clearing it after upgrading to make the best use of the Staffing and Roles workspaces.

## Configure Revenue and Actual Revenue as Per-Period Metrics

The following new Per-Period fields are available in Investment workspaces (exclusive to Clarity, not available in Classic PPM):

- Planned Revenue
- Planned Actual Revenue
- Budget Revenue
- Budget Actual Revenue

## Enhancements to Parameterized Lookups

In this release, Clarity provides improved handling of parameterized lookups:

- If the current value is **valid** and the source is changed, Clarity will not clear the lookup.
- If the value is **invalid**, Clarity will clear the lookup.
- If the parameterized lookup is **read-only** (Studio or Business Rule) and the source changes, Clarity will clear the lookup.
- If secured via FLS (view-only or not visible) and the source changes, Clarity will clear the lookup.
- If the parameterized lookup is **required** and the source changes, Clarity will not clear the lookup if the value is valid; otherwise it will clear the value and display a modal.

> [!NOTE]
> - Bulk edit, copy-paste, and fill-handle operations for source attributes for required parameterized lookups are disabled.
> - For calendar layout drag-and-drop when the source attribute is a date and the lookup is required, the modal will not display; refresh the workspace to see updates.
> - When using business rules to set parameterized lookup attributes, set both the source and parameterized lookup in the same rule to ensure a correct combination.

## Utilize Release Override During Upgrade to Clarity 16.2.3

Using release override during upgrade to Clarity 16.2.3 resolves critical issues encountered with:

- Clarity 16.2.3 Upgrade Fails on `PREUPGRADE_KEY_RESULTS_VALUE_TYPE.xml`
- Clarity 16.2.3 Upgrade Fails on a Post Step With `POSTUPGRADE_NEW_AUDITS_VIEWS_PERSONALIZATION.xml`

## Updated Names for Existing Scenario Rights

> [!IMPORTANT]
> In Clarity 16.2.3, only the name and description of Scenario access rights were updated; functionality remains unchanged.

| Sl. No. | Old Name | New Name |
|---|---|---|
| 01 | Scenario - Navigate | Scenario - Navigate (retained) |
| 02 | Scenario - Edit Access Rights | Scenario - Edit Access Rights (retained) |
| 03 | Scenario - Manager - Automatic | Staffing Scenario - Creator (Auto) |
| 04 | Scenario - Edit | Staffing Scenario - Edit |
| 05 | Scenario - View | Staffing Scenario View |

> [!NOTE]
> A newly added access right is **Scenario - XOG Access**, which allows import and export of Scenario instances using the XML Open Gateway interface.

## Upgraded yFile HTML Library for Hierarchies

The yFile HTML library for Hierarchies has been upgraded in this release.

## Beta Tag Removed from Capabilities

The following capabilities are now generally available:

- **Action Framework**
- **Timesheets (Business Rules)**

## Localization Capability Generally Available

You can now use the **Localization** feature to localize Clarity and Classic PPM interfaces in languages no longer officially supported by Broadcom. Previously, you needed to contact Broadcom Support to toggle this on. To learn more, see Configure General System Settings.

## Leveraging PDF Capability in SSO Environments

If you use Single Sign-On or custom cookies with the Load Balancing URL, you may encounter issues with the Export to PDF capability. Populate the `internalURL` property in the `webServer` tag of `properties.xml` with the non-SSO HTTP URL:

```xml
<webServer schedulerUrl="" capaUrl="" internalUrl="http://xx.xxx.xxx.xxx" sessionTimeout="" tenantTimeout="1440" sslType="implied" enableBroker="false">
```

## Microsoft Project Integration Upgrade Details

Uninstall and upgrade your Clarity Microsoft Project Integration software using the version available in **Account Settings > Software Downloads** after upgrading Clarity. The bit level of the MSP Interface installed should match that of Microsoft Project:

- Microsoft Project Interface (x86) for 32-bit Microsoft Project
- Microsoft Project Interface (x64) for 64-bit Microsoft Project

## Review Cancelled Jobs After Upgrade

Review any Clarity jobs in the **Canceled** state after your upgrade is complete. Pay special attention to any canceled jobs that were previously recurring, as job parameters may have changed during the upgrade.

## Installation and Upgrade Dependencies

| Install/Upgrade of This Component | Requires This Component |
|---|---|
| Upgrade Classic PPM | Data Warehouse Configured; Load Data Warehouse Job Completed |
| Clarity Install PMO or APM add-ins | PMO Accelerator Add-in Installed; Data Warehouse Configured |

## Supported Upgrade Paths for Clarity

| Clarity Version | Minimum Supported Version for Direct Upgrade |
|---|---|
| 16.4.1 | 16.3.3 |
| 16.4.0 | 16.3.3 |
| 16.3.3 | 16.2.3 |
| 16.3.2 | 16.2.3 |
| 16.3.1 | 16.2.3 |
| 16.3.0 | 16.2.3 |
| 16.2.3 | 16.1.3 |
| 16.2.2 | 16.1.3 |
| 16.2.1 | 16.1.3 |
| 16.2.0 | 16.1.3 |
| 16.1.3 | 16.0.3 |
| 16.1.2 | 16.0.3 |
| 16.1.1 | 16.0.3 |
| 16.1.0 | 16.0.2 |
| 16.0.3 | 15.9.3 |

> [!WARNING]
> You might experience issues if you attempt to upgrade directly from an unsupported patch level. For best results, follow a supported upgrade path.

> [!TIP]
> The installer detects how many incremental upgrade steps are required and prompts you to decide whether to save automated backups at each step.

## Pre-Upgrade: Run the Installation Checker (On-Premise Only)

The **checkinstall** utility assesses any installation or upgrade and produces a `precheck-results.html` file.

**Follow these steps:**

1. Extract the Clarity installer to the Clarity application server.
2. Open a command prompt and navigate to the `checkinstall` directory.
3. Invoke the checkinstall command:
   - UNIX: `sh checkinstall.sh`
   - Windows: `checkinstall.bat`
4. Verify the results. The results contain warnings, errors, and any customizations detected.

## Make Third-Party JAR Files Accessible to the Installer (On-Premise Only)

Due to licensing restrictions, certain JAR files (`jgroups-all.jar`, `xinclude.jar`) are shipped separately from the Clarity image. For Release 15.x, these are bundled into `thirdparty.libs.15.x.0.jar` on the installation media.

**Upgrade Action:** Retrieve the file from the installation media. Place it in the installation root directory to prevent the installer from prompting you for the location.

## Upgrade Large Data Sets (On-Premise Only)

Create a `memory.properties` file in the `$cappm/config` directory to override default memory settings.

Default values:
```
defaultScriptMaxMem=1024m
defaultScriptPermGenMem=128m
```

Sample overrides:
```
defaultScriptMaxMem=2560m
defaultScriptPermGenMem=512m
```

## Custom Processes, Scripts, and Other Customizations

> [!WARNING]
> After an upgrade, your customizations might result in errors or fail to work as expected unless you disable them first.

**Follow these steps:**

1. Identify your custom content.
2. Acknowledge that upgrade scripts may not support custom content. Even if upgraded, it may no longer work as expected.
3. As an on-premise administrator, the `checkinstall` script provides warnings for detected customizations.
4. Turn off your customizations before the upgrade. After the upgrade, reintroduce and test them.
5. Evaluate attribute values. Review Oracle and Microsoft SQL database and data warehouse changes to validate if customizations depend on dropped, changed, or new attributes.

## Pre- and Post-Upgrade: Preserve File Directory Customizations (On-Premise Only)

Use ant-based scripts to automate preserving and restoring customizations in Clarity directories. Templates provided in release-specific upgrade folders:

- `preprocess-upgrade.xml` — preserves files before upgrade
- `postprocess-upgrade.xml` — restores files after upgrade

## Data Warehouse Changes for Reporting

### New Configuration Setting

A new setting **"Include SQL Curve Data"** is available in **System Options** under **Administration** in Classic PPM. When enabled, new SQL Curve tables and columns are created and populated in the Data Warehouse.

### Modified Data Warehouse Tables and Views

- `DWH_CMN_HIERARCHY`
- `DWH_CMN_HIERARCHY_NODE`
- `DWH_RPT_HIERARCHY_V`
- `DWH_RPT_HIERARCHY_NODE_V`
- `DWH_FIN_PLAN`
- `DWH_INV_STATUS_REPORT`

### New SQL Curve Functions

When enabled:

- **Common Functions:** `DWH_CMN_JULIAN_TO_DATE_FCT`, `DWH_CMN_DATE_TO_JULIAN_FCT`, etc.
- **SQL Curve Functions:** `DWH_CRV_CALENDAR_FCT`, `DWH_CRV_CUSTOM_CALENDAR_FCT`, `DWH_CRV_SUM_DATE_FCT`, etc.
- **Internal Functions:** `DWH_X_CRV_CONVERT_FCT`, etc.

### New SQL Curve Tables

- `DWH_INV_FACTS`, `DWH_TEAM_COST`, `DWH_RES_ROLE`, etc.

### Hierarchy Changes

- Columns `MANAGERS_KEY` and `STAKEHOLDERS_KEY` were removed from `DWH_CMN_HIERARCHY`.
- New column `OBJECT_INSTANCE_KEY` was added to `DWH_CMN_HIERARCHY_NODE`.

### Financial Plan Changes

The `DWH_FIN_PLAN` table now includes a `BUDGET_DETAIL_KEY` column to link Budget Details to Cost Plan Details.

### Status Report Changes

The `DWH_INV_STATUS_REPORT` table now includes a new column `COP_IS_LATEST`, a Boolean field indicating the latest status of an investment.

> [!NOTE]
> - SQL Curves must be enabled in Classic System Options to view Per-Period Metrics in Data Providers.
> - Enabling "Include SQL Curve Data" creates new SQL Curve tables and columns. Disabling this setting will remove these components.

## Data Warehouse Changes for Time Entry Actuals

The **Actuals** column has been removed from the `DWH_TIME_ENTRY` table to maintain consistency across the product.

> [!IMPORTANT]
> **Action Required:** Queries referencing `DWH_TIME_ENTRY.Actuals` will fail after the upgrade. Update queries to use one of the supported alternative options.

## Related
- [[_MOC Release Info]]

%%Source: p73-90%%
