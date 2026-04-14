---
title: Post-Upgrade Steps
tags:
  - admin
  - howto
aliases:
  - Post-Upgrade
  - Post-Upgrade Oracle
canonical: true
audience: admin
domain: installation
parent: "[[_MOC Install Upgrade]]"
---

# Post-Upgrade Steps

## (On-Premise only) Recover and Restore from a Backup


The file `install.log` provides information on where the upgrade failed. To restore from the last successful backup:

1. Find the last successful backup message in `install.log`.
2. Look for the corresponding application binaries (for example, `c:\clarity_14.4.0.234`).
3. Delete the current installation directory.
4. Rename the identified application binary to the install directory (for example, rename `c:\clarity_14.4.0.234` to `c:\clarity`).
5. After the application binary has been restored, restore the database:
   a. Create the database user.
   b. Grant permissions (including new ones for db export).
   c. Restore the database from the backup created by the upgrade script.

---

## (On-Premise only) Troubleshoot Upgrade Problems


### Recover from Upgrade Failure


- When upgrading PPM, if an intermediate install is 14.2, the attribute "home" for the element "applicationServer" is set to Tomcat 8. If the upgrade install fails on 14.2, on restoring it, make sure to modify the entry to the Tomcat 7 home directory location.
- After restoring a database, make sure to reset the password as specified in `properties.xml` and provide privileges as mentioned above.
- Ensure that services (beacon, nsa) are added and deployed.

### Configuring External Release Overrides Directory


When a Clarity upgrade fails or a specific artifact (JAR, XML, or DB script) is provided by the Clarity upgrade team, place the artifact in the Release Overrides directory.

Follow these steps:

1. Navigate to the Release Overrides directory:
   ```
   <Version Installer folder>/upgrade/release-overrides
   ```

2. Create a new folder with the current version (for example, `16.1.3`):
   ```
   1613 Installer folder/upgrade/release-overrides/16.1.3
   ```

3. Copy the artifact provided by the Clarity Upgrade team into that version directory.

4. If placing the artifact at an external location, when prompted for the **External Release Overrides Directory**, provide the specific path (for example, `/fs0/clarity1613upgrade`).

5. Proceed with the Clarity application upgrade.

6. After completing the upgrade, verify the reported issues are resolved.

> [!IMPORTANT]
> You can check the log file for the following message confirming the external release overrides were applied:
> ```
> is_valid_release_overrides: External release overrides path: ../../release-overrides
> load-external-release-overrides: Applied chmod to `n' files and `m' directories.
> Copying `x' files to /fs0/clarity_<version>
> ```

---

## Post-Upgrade: Additional Configuration for Oracle Deployments


Perform the following additional steps for Oracle deployments only.

1. Grant required privileges. Connect to the Oracle database as the `sys` user (`sysdba`) and execute:
   ```sql
   GRANT CREATE ANY CONTEXT, DROP ANY CONTEXT TO <Clarity_database_user>;
   ```

2. Grant package execution rights. Still connected as `SYSDBA`:
   ```sql
   GRANT EXECUTE ON SYS.DBMS_SESSION TO <Clarity_database_user>;
   ```

   > [!IMPORTANT]
   > The required privileges and package execution rights are mandatory for Clarity functionality and must not be revoked after the upgrade or at any later time.

3. After upgrading:
   a. Enable the feature toggle (with Clarity services running):
      ```
      admin toggle-feature IMPERSONATEDBY_SESSION_CONTEXT_VARIABLE_DE168694 1
      ```
   b. Run database bootstrap:
      ```
      admin db db-bootstrap-odf -Dodf.triggers=true -Dodf.force=false -Dodf.restoreNonCustomizedViews=false
      ```
   c. Restart the services.

---

## Post-Upgrade: Optimize Oracle 19c Performance


If you have local installations of Oracle 19c R1 or R2, you might detect a regression issue when the ORDERED hint is used in structured queries. Apply the following fix:

1. For systems using Oracle 19c, run:
   ```sql
   ALTER SYSTEM SET OPTIMIZER_FEATURES_ENABLE='19.1.0.2' SCOPE=BOTH;
   ```

> [!NOTE]
> Adjust memory management parameters based on your environment.

---

## Post-Upgrade: Trending Data Backups


After the upgrade, if you use the new trending jobs to generate custom analytics data, make specific backups.
A common troubleshooting technique for on-premise administrators involves dropping the data warehouse schema. Data warehouse data can be restored;
however, without a backup, your custom trending data would be lost.

---

## (On-Premise only) Post-Upgrade: Final Steps to Complete Your Upgrade


The following post-upgrade steps are required:

1. Apply your upgraded add-ins and connectors.
   - Back up your Clarity installation before installing each add-in.
   - Apply the Upgrade Ready content for those items you are actively using.

   > [!WARNING]
   > Consider the configurations that you have made to items before applying them. Applying modified items overwrites your configurations.

   - Read the PMO Accelerator Release Notes for important information about what has changed.
   - Review the **System: Clarity Content** add-in for upgrade ready content (for example, the Role Capacity portlet). To accept the upgraded content, apply the changes.

2. Review Studio views and system content and manually upgrade as needed.
   - The **Last Version** column identifies changes to stock views in this release.
   - If a view was automatically upgraded, a checkmark appears in the **Upgraded** column.
   - For views with **Last Version = 16.4.1** and **Upgraded = unchecked**, decide whether to apply the changed view.

3. If you use the XOG client: Beginning with Clarity 15.5.1 (Java 11), the JRE is no longer required. For 15.5 and earlier, direct users to download JRE (Version 8) from `www.java.com`.

4. Register any Portfolio Investment attributes that you want to display in portfolio pages.

5. If you use a custom statistics job, refer to the updated Oracle Table Analyze Job procedure in the Clarity schema (`CMN_JOB_ANALYZE_SP`) and make necessary corrections.

6. For Schedule Connect clients (MSP, OWB, XOG client), use the Compatibilities section of the Change Impact and Upgrade to verify compatible versions. Do not automatically update MSP and OWB.

> [!NOTE]
> Review all of the following steps after installing a patch to verify any changes in functionality.

- If you are upgrading with XDM, ensure that XDM is distributed to the other servers in the cluster.
- Run the **Oracle Table Analyze** job after the upgrade is done to gather schema statistics.
- Performance metrics are collected during upgrade and written to the `Logs` folder:
  - `ScriptMetrics.xml`
  - `Bootstrap.xml`
- To verify correct functionality, ensure that:
  - The server time is the same (down to the second) on the Clarity application server, Clarity database server, and Data Warehouse database server.
  - The timezone, date, and time is the same on the Clarity application server and database servers.
- Review the post-upgrade report that the checkinstall utility generates. The file is located in the `checkinstall/check-logs` directory.
- Verify that Beacon is always running to manage services and view logs.
- Ask your functional experts to review your upgraded test system side-by-side with a working pre-upgrade system.
- Review `app-ca.log` after the functional experts have used the test environment.
- Review any customizations: customer-added database triggers, custom indexes and constraints, file system changes, and custom interfaces.
- Register any Portfolio Investment attributes that you want to display in portfolio pages.
- Run the **Resource - Edit Financial** access right removal script if your company policy does not allow resource managers access to the Financial Properties subpage.
- Run the **Health Report** to verify that all components are installed and functioning after the upgrade.

---

## Post-Upgrade: Verify NSQL Queries


During the post-upgrade process, the CheckInstall utility automatically runs the NSQL validator script. Results are written to `admin.log` and `check-results.html` inside `checkinstall-results.zip`.

Look for the following information in the log:
- Query name
- Query ID
- Content Source
- Query ID from `CMN_NSQL_QUERIES` of the query that failed validation

Database schema changes can also impact your custom portlets. Correct any invalid custom NSQL queries.

Follow these steps to fix invalid queries in Studio:

1. Click **Administration > Studio > Queries**.
2. Open each failing query and click the **NSQL** tab.
3. Clear the **Available for User Portlets** check box.
4. Click **Save and Continue**.
5. Review the errors and repair the broken query constructs or fields.
6. Click the **Preview** button.
7. Confirm that the NSQL query is valid.
8. Click the **General** tab.
9. Select the **Available for User Portlets** checkbox.
10. Click **Save and Return**.

> [!TIP]
> If the query is in use by active portlets and cannot be edited in Studio, use the XML Open Gateway (XOG):
> 1. Export the failing query.
> 2. Correct the broken query constructs or fields.
> 3. Use XOG to import the corrected query.
> 4. Preview and verify the query in Studio.

> [!NOTE]
> Some NSQL queries are delivered with add-ins. Applying an update for an add-in makes fixes for the NSQL queries that pertain to the add-in available for an update on the server.

---


---
**See also:** [[Pre-Upgrade Steps]], [[Upgrade Procedures]]
**Parent:** [[_MOC Install Upgrade|Installation and Upgrade]]
