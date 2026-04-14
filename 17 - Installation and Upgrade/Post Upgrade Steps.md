﻿---
title: Post Upgrade Steps
tags:
  - admin
aliases:
  - Post Upgrade Steps
---
# Post Upgrade Steps


Perform the following steps after a new installation or upgrade to Clarity.

**Post-Upgrade Checklist:**
- Install Add-ins and Connectors
- Verify Upgraded Users Can Access the Necessary Reports
- Jaspersoft Sender Email Address
- Enable or Disable Features
- Review and Update Access Rights
- Clear Your Browser Cache
- Update Client Applications
- Run or Schedule the Required Jobs
- Data Warehouse Required
- Access Optional Integrated GEL Scripts
- Run a Health Report
- Conduct Your Own UAT and Regression Testing

---

## Install Add-ins and Connectors


The PMO Accelerator is required. Your organization can extend the product with optional add-ins and connectors.

- To install PMO, run the command:
  ```
  admin content csk
  ```

- After the installation completes, in Classic PPM, navigate to **Administration > Studio > Content Add-Ins** to review the content that has to be applied.

> [!IMPORTANT]
> If you don't apply the Views, then Clarity resets to default.

- Once the system is up, you can add other add-ins and connectors. The Release Notes provide the supported add-in versions that are compatible with new installations or upgrades to each release.

---

## Verify Upgraded Users Can Access the Necessary Reports


No action is required; however, verify user access to the necessary reports.

---

## Jaspersoft Sender Email Address


The sender email address is the address that appears when Jaspersoft sends an email notification for a scheduled report. Jaspersoft lets you set the sender email address at the Jaspersoft Reporting Server (JRS) level, but not at the tenant (organization) level.

- **SaaS Environments:** The default sender email address for Clarity SaaS implementations is:
  ```
  do-not-reply-ondemand@saas.broadcom.com
  ```

- **On-Premise Environments:** The default sender email address for on-premise implementations is:
  ```
  do-not-reply@your_domain.com
  ```

For information about changing this default value during installation, see the installation documentation.

**(On-Premise only)** To change the default value after installation:

1. Locate and open the `js.quartz.properties` file in a text editor.
2. Edit the `report.scheduler.mail.sender.from` property to include your sender email address and save the file.
3. Restart the JRS.

---

## Enable or Disable Features


- In Classic PPM, configure portlets and portlet pages as appropriate to expose or hide the features your organization would like to use.
- In Clarity, configure blueprints and access rights to provide users with the appropriate sections, fields, visuals, modules, and permissions to access application pages and functionality.

---

## Review and Update Access Rights


Update the access right assignments for users, groups, objects, and OBS instances with new or updated access rights that are introduced in each release. See Clarity Access Rights Reference.

**New Installations:** By default, all new users in a typical setup of Clarity with timesheets are granted the following minimal set of access rights:

- Resource - Enter Time
- Resource - Self (Auto)
- User Favorites Menu - Edit

They are also members of a group named **Basic group for user access**, which should be populated with at least the following three default global access rights:

- Account Settings - Navigate
- Organizer - Access
- Projects - Navigate

**Upgrades:** The application preserves all the access right assignments from the previous release.

---

## Clear Your Browser Cache


After an upgrade or after changing their access rights, users could encounter a blank page until they clear their browser cache, cookies, and history files. The steps vary by web browser.

> [!NOTE]
> If you see different results in Google Chrome incognito mode, that generally indicates you can clear your browser cache to achieve the same results for the user in normal mode.

- Be careful not to clear passwords or other sensitive data if you normally store this data in your browser.
- Also try logging out and then logging back in again to reset your permissions.

---

## Update Client Applications


- Advise XOG users to install the newest version of the XOG client.
- If your users run the Schedule Connect clients, Microsoft Project (MSP) or Open Workbench (OWB), each user needs to verify their version of MSP or OWB with the specified minimum
  supported client software in the release notes.
  Do not automatically update MSP or OWB — sometimes the newest version is not compatible.
- If necessary, install or update the JRE available from Oracle.

---

## Run or Schedule the Required Jobs


Run the required jobs as listed in Jobs Reference. Resume any scheduled jobs that you paused before your upgrade. For any new jobs, review and schedule them accordingly.

At minimum, repopulate the required datamart tables:

- **Datamart Extraction** job
- **Datamart Rollup** job

**(On-Premise only)** Run the **Oracle Table Analyze** job after the upgrade is done to gather schema statistics. The expected time for this job to complete depends on the size of your database. Run this job right after the upgrade and at off-peak hours thereafter.

> [!NOTE]
> If you use a custom statistics job, refer to the updated Oracle Table Analyze Job procedure in the Clarity schema in Release 15.x (`CMN_JOB_ANALYZE_SP`) and make necessary corrections in the custom statistics job.

---

## Data Warehouse Required


Installation of the Clarity data warehouse is required.

- SaaS environments already include this integrated system component.
- As an on-premise administrator, if you have not already done this step, deploy the data warehouse.
- After the upgrade is completed, run the **Load Data Warehouse** job and use the "full load" option.

You can configure it for reporting, lookup queries, and trending, or even decide not to use it. However, it must be installed and working in all environments — on-premise and SaaS.

---

## Access Optional Integrated GEL Scripts


This item typically applies after a SaaS upgrade; however, on-premise customers can also review this item if they have similar GEL integrations in place.

If you have developed integrations that leverage a shared directory that can be called in GEL scripts, the following required code illustrates the proper GEL syntax to use with the integration location:

```xml
GelParams: <gel:parameter var="ShareFolder" default="/fs0/clarity1/share"/>
```

The `ShareFolder` parameter is the same folder that is accessed through your SFTP account associated with your environment folder. You can create optional subdirectories in the GEL parameter.

When using GEL with the XML Open Gateway (XOG) using the `<soap:invoke>` tag, instead of hard-coding the endpoint to a specific host URL, you may specify:

```xml
<soap:invoke endpoint="internal">
```

This allows GEL to automatically determine the correct SOAP URL for the local environment and prevents situations where a database restored from production into a non-production environment has XOG URLs that still specify the production environment.

For any GEL scripts where the `NIKU_HOME` variable is hard-coded, use the following syntax to dynamically retrieve this information:

```xml
<core:invokeStatic className="java.lang.System" method="getenv" var="NIKU_HOME">
  <core:arg value="NIKU_HOME"/>
</core:invokeStatic>
<gel:parse file="${NIKU_HOME}/config/properties.xml" var="properties"/>
```

---

## Run a Health Report


All supported releases of Clarity include a System Health Report. Run the **System Health Report** after the upgrade.

---

## Conduct Your Own UAT and Regression Testing


Once an upgraded non-production environment has been provided by your SaaS or on-premise upgrade team, familiarize yourself with the new features, test any expected bug fixes, and complete your unit, regression, and user acceptance testing.

Your testing should cover the following:

- Testing scripts developed during your initial implementation
- Applicable bug fixes
- New functionality you plan to deploy
- Custom reports
- Data integrations
- Custom Processes with GEL scripting
- Custom Portlets with NSQL data providers
- Add-In packages and related configurations
- Global Delivery (GD) components

> [!TIP]
> Complete your post-upgrade review and testing within 45 to 60 days, if not sooner. If your testing exceeds 90 days, due to new releases, service packs, and patches, we recommend that you validate a new upgrade against new production data.
>
> If testing reveals any issues, questions, or concerns about the delivered environment, open a new ticket specific to each issue to ensure the appropriate attention and expertise are applied in a timely manner. Do not update the original upgrade ticket with post-upgrade issues.

---

## Related
- [[_MOC Install Upgrade]]

%%Source: p2807-2810%%
