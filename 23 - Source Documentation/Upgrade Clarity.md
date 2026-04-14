# Upgrade Clarity

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[17 - Installation and Upgrade/_MOC Install Upgrade|Installation and Upgrade]]
- Canonical notes:
- [[17 - Installation and Upgrade/Upgrade Clarity]]
- [[17 - Installation and Upgrade/Post Upgrade Steps]]
- [[17 - Installation and Upgrade/Jaspersoft Upgrade]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Start Here (#start-here)
- H3: Plan for All Required Components (#plan-for-all-required-components)
- H3: Upgrade Large Data Sets (#upgrade-large-data-sets)
- H3: Legacy Business Objects Reports (#legacy-business-objects-reports)
- H3: Avoid Making Configuration Changes During the Upgrade (#avoid-making-configuration-changes-during-the-upgrade)
- H3: Run the Installation Checker (#run-the-installation-checker)
- H3: Checkinstall Script Workaround for Linux (#checkinstall-script-workaround-for-linux)
- H3: Make Third-Party JAR Files Accessible to the Installer (#make-third-party-jar-files-accessible-to-the-installer)
- H3: Schedule a Production Data Refresh (Backup) (SaaS) (#schedule-a-production-data-refresh-backup-saas)
- H3: Schedule a Second Upgrade If Your UAT Window Exceeds 90 Days (#schedule-a-second-upgrade-if-your-uat-window-exceeds-90-days)
- H2: Upgrade Clarity (#upgrade-clarity)
- H3: Clear Your Browser Cache (#clear-your-browser-cache)
- H3: How Long Does It Take to Upgrade? (#how-long-does-it-take-to-upgrade)
- H3: Pre Upgrade Steps (#pre-upgrade-steps)
- H3: (On-Premise and SaaS) Pre-Upgrade Steps (#on-premise-and-saas-pre-upgrade-steps)
- H3: (On-Premise and SaaS) Pre-Upgrade: Custom Processes, Scripts, and Other Customizations (#on-premise-and-saas-pre-upgrade-custom-processes-scripts-and-other-customizations)
- H3: Upgrade Assessment Utility (On-Premise only) (#upgrade-assessment-utility-on-premise-only)
- H3: (On-Premise only) Pre-Upgrade: Review the Requirements (#on-premise-only-pre-upgrade-review-the-requirements)
- H3: (On-Premise only) Pre-Upgrade: Run Checkinstall (#on-premise-only-pre-upgrade-run-checkinstall)
- H3: (On-Premise only) Pre-Upgrade: Installation and Upgrade Dependencies (#on-premise-only-pre-upgrade-installation-and-upgrade-dependencies)
- H3: (On-Premise only) Pre-Upgrade: Make Third-Party JAR Files Accessible to the Installer (#on-premise-only-pre-upgrade-make-third-party-jar-files-accessible-to-the-installer)
- H3: (On-Premise only) Pre-Upgrade: Override Default Memory Settings (Large Data Sets) (#on-premise-only-pre-upgrade-override-default-memory-settings-large-data-sets)
- H3: (On-Premise only) Pre-Upgrade: Overview for a Typical Upgrade (#on-premise-only-pre-upgrade-overview-for-a-typical-upgrade)
- H3: (On-Premise only) Pre-Upgrade: MS SQL Server Database Compatibility Level (#on-premise-only-pre-upgrade-ms-sql-server-database-compatibility-level)
- H3: (On-Premise only) Pre-Upgrade: Oracle Database Only PRJ_BLB_SLICES Table (#on-premise-only-pre-upgrade-oracle-database-only-prj_blb_slices-table)
- H3: (On-Premise only) Pre-Upgrade: Custom Processes, Scripts, and Other Customizations (#on-premise-only-pre-upgrade-custom-processes-scripts-and-other-customizations)
- H3: (On-Premise only) Pre-Upgrade: Preserve Your File Directory Customizations (#on-premise-only-pre-upgrade-preserve-your-file-directory-customizations)
- H3: (On-Premise only) Upgrade an Apache Tomcat Single Server (#on-premise-only-upgrade-an-apache-tomcat-single-server)
- H3: (On-Premise only) Upgrade an Apache Tomcat Clustered Server (#on-premise-only-upgrade-an-apache-tomcat-clustered-server)
- H3: (On-Premise only) Recover and Restore from a Backup (#on-premise-only-recover-and-restore-from-a-backup)
- H3: (On-Premise only) Troubleshoot Upgrade Problems (#on-premise-only-troubleshoot-upgrade-problems)
- H2: (On-Premise and SaaS) Complete the Post-Upgrade Steps (#on-premise-and-saas-complete-the-post-upgrade-steps)
- H3: Additional Configuration for Oracle Deployments (#additional-configuration-for-oracle-deployments)
- H3: Post-Upgrade: Optimize Oracle 19c Performance (#post-upgrade-optimize-oracle-19c-performance)
- H3: (On-Premise and SaaS) Post-Upgrade: Trending Data Backups (#on-premise-and-saas-post-upgrade-trending-data-backups)
- H3: (On-Premise only) Post-Upgrade: Final Steps to Complete Your Upgrade (#on-premise-only-post-upgrade-final-steps-to-complete-your-upgrade)
- H3: (On-Premise and SaaS) Post-Upgrade: Verify NSQL Queries (#on-premise-and-saas-post-upgrade-verify-nsql-queries)

## Start Here

You can set up instances of Clarity on-premise for development and testing, and upgrade those non-production environments, before upgrading and cutting over to production. As an administrator, follow these steps:
- Plan for All Required Components
- Upgrade Large Data Sets
- Legacy Business Objects Reports
- Avoid Making Configuration Changes During the Upgrade
- Run the Installation Checker
- Checkinstall Script Workaround for Linux
- Make Third-Party JAR Files Accessible to the Installer

### Plan for All Required Components

The install and upgrade scripts require the installation or upgrade of certain system components.

**Required Action:** All new installs and upgrades require that you perform the following steps. Plan ahead to include these steps before you consider your upgrade complete:
- Install and Configure the Data Warehouse
- Run the Load Data Warehouse Job
- Install the PMO Accelerator add-in (required for Clarity and if using the optional APM add-in). For best performance and value, we recommend installing the PMO Accelerator and the PMO Accelerator Advanced Reporting content for all installations and upgrades, 14.x or 15.x, whether you plan to use Clarity, or both.

### Upgrade Large Data Sets

If your upgrade processes a large volume of data, we recommend that you override the default memory settings that are used by the upgrade.

**Recommended Action:**

1. Create your own `memory.properties` file and place it in the `$cappm/config` directory.
2. Set the desired memory values in that file. Default pre-upgrade values:

```properties
defaultScriptMaxMem=1024m
defaultScriptPermGenMem=128m
```

3. The following settings represent examples that you might add to your `memory.properties` file:

```properties
defaultScriptMaxMem=2560m
defaultScriptPermGenMem=512m
```

### Legacy Business Objects Reports

If upgrading from Release 14.4 or older to a newer 15.x release, no legacy SAP Business Objects or Xcelsius functionality is supported. All legacy Business Objects content is removed as part of the upgrade process for both on-premise and SaaS environments.

**Recommended Action:** Migrate any legacy SAP Business Objects content that you want to keep before you start the upgrade process.

> [!WARNING]
> In a SaaS upgrade from 14.x to 15.x, any legacy Business Objects reporting content is permanently destroyed.

> [!TIP]
> As a reminder, new releases of Clarity include Advanced Reporting dashboards, views, and trending capabilities.

### Avoid Making Configuration Changes During the Upgrade

In an effort to minimize risk and adhere to best practices, a stable configuration is recommended during the upgrade cycle.

**Required Action:**

1. If possible, all configuration changes should be completed and migrated to the Production environment prior to starting the upgrade cycle.
2. No significant configuration changes should be made to the Production system during the upgrade cycle.
3. If a critical need arises that requires a change during the upgrade, notify your upgrade team. As a SaaS administrator, contact Broadcom support and enter a new ticket to see what can be done. Do not make any changes yourself.

As an administrator for an on-prem environment, in addition to the steps above, follow these additional steps:

### Run the Installation Checker

The Installation Checker (`checkinstall`) utility assesses an installation or an upgrade.
- The utility runs automatically at the start of an installation or upgrade and at the end of an upgrade attempt.
- You can also run it manually.
- The utility produces a report results file (`precheck-results.html`) in the `<install-root>/checkinstall/check-logs` directory.

For best results, run the Installation Checker before starting the full installation or upgrade process. Carefully evaluate and resolve warnings before proceeding.

**Required Action:**

1. Extract the Clarity installer to the Clarity application server.
2. Open a command prompt and navigate to the `checkinstall` directory located in the directory to which you extracted the installer.
3. Invoke the checkinstall command:
- **UNIX:** `sh checkinstall.sh`
- **Windows:** `checkinstall.bat`

> [!NOTE]
> You are asked for the **Operator Username** and **Operator Email**. This information refers to the user who is upgrading or installing and the email of the user. This information is stored as a record in the installation log.

4. Verify the results. The results contain any warnings and errors and also indicate any customizations that you have made.
5. Review the customizations and make adjustments as necessary before you start the upgrade.

### Checkinstall Script Workaround for Linux

The Checkinstall script for Linux contains DOS end of file characters and does not execute correctly. Before planning an upgrade, we recommend that you run the checkinstall script to verify that all the pre-upgrade requirements are met. When you run `checkinstall.sh` on a Linux system, the script does not execute and produces an unexpected end of file syntax error.

**Workaround: Convert the Script to Unix Format**

1. Convert the `checkinstall.sh` script to Unix format by running `dos2unix`:

```bash
dos2unix ./checkinstall.sh
```

2. Run checkinstall again:

```bash
sh ./checkinstall.sh
```

Alternately, you can use the following perl script to run checkinstall successfully:

```bash
perl -i -pe 'y|\r||d' checkinstall.sh
```

### Make Third-Party JAR Files Accessible to the Installer

Because of licensing restrictions for some third-party library JAR files (`jgroups-all.jar` and `xinclude.jar`), these files are shipped separately from the Clarity ISO installer image. The `install.jar` image does not contain the files mentioned. Any install packages for a previous version included in the `install.jar` also exclude the JAR files.

**Required Action:** For each release of Clarity, the JAR files are bundled into a folder on the installation media containing the third-party libraries JAR file. For example, for Clarity Release 15.x, the file is named `thirdparty.libs.15.x.0.jar`.

1. Retrieve the `thirdparty.libs.15.x.0.jar` file from the installation media.
2. Place the JAR file in a location in your file system so that it is accessible to the installer.

> [!TIP]
> To prevent the installer from prompting you for the file location, place the JAR file in the installation root directory. If you place the JAR file in another directory, the installer prompts you for the file location.

### Schedule a Production Data Refresh (Backup) (SaaS)

As an administrator for a SaaS instance or environment, in addition to the steps above, follow these additional steps:

Non-production environments are upgraded using existing data. In order to minimize risk and ensure a successful production upgrade, it is strongly recommended that your organization request a backup of production data by refreshing it into the first non-production environment scheduled for upgrade.

**Recommended Action:** At least 2 or 3 business days before the scheduled non-production upgrade, open a Broadcom Support ticket requesting a production data refresh into the first upgraded non-production environment.

> [!TIP]
> A refresh requires that both environments are on the same SaaS release version.

### Schedule a Second Upgrade If Your UAT Window Exceeds 90 Days

If your testing efforts take more than 90 days to complete, we recommend an additional upgrade of production data before your original production environment is upgraded.

**Recommended Action:**

1. Upgrade an additional non-production environment, if your organization subscribes to one.
2. Or, upgrade the same non-production environment again. Option 2, called a re-upgrade, purges any data or configuration settings on the environment and replaces it with new production data and configuration settings.

> [!TIP]
> **Upgrade Tips:**
> - To maximize productivity and minimize compatibility issues, always upgrade to the newest available release and apply the latest patch.
> - Identify any non-standard product customizations, such as triggers, custom JAR files, and database customization. Customizations often result in the biggest challenge for upgrades.
> - Plan ahead for environmental upgrade delays, production size requirements, OCM, and training.
> - Do not mix additional custom enhancement goals with your upgrade plan. Focus only on the upgrade before you attempt to expand into other planned changes.

---

## Upgrade Clarity

The following image shows how an administrator upgrades a Clarity installation for single and clustered servers. As a SaaS administrator, you do not execute the upgrade steps yourself; however, you still need to perform pre-upgrade and post-upgrade steps.

**Topics covered:**
- Clear Your Browser Cache
- Pre Upgrade Steps
- (On-Premise and SaaS) Pre-Upgrade: Custom Processes, Scripts, and Other Customizations
- Upgrade Assessment Utility
- (On-Premise only) Pre-Upgrade: Review the Requirements
- (On-Premise only) Pre-Upgrade: Run Checkinstall
- (On-Premise only) Pre-Upgrade: Installation and Upgrade Dependencies
- (On-Premise only) Pre-Upgrade: Make Third-Party JAR Files Accessible to the Installer
- (On-Premise only) Pre-Upgrade: Override Default Memory Settings (Large Data Sets)
- (On-Premise only) Pre-Upgrade: Overview for a Typical Upgrade
- (On-Premise only) Pre-Upgrade: MS SQL Server Database Compatibility Level
- (On-Premise only) Pre-Upgrade: Oracle Database Only PRJ_BLB_SLICES Table
- (On-Premise only) Pre-Upgrade: Custom Processes, Scripts, and Other Customizations
- (On-Premise only) Pre-Upgrade: Preserve Your File Directory Customizations
- (On-Premise only) Upgrade an Apache Tomcat Single Server
- (On-Premise only) Upgrade an Apache Tomcat Clustered Server
- (On-Premise only) Recover and Restore from a Backup
- (On-Premise only) Troubleshoot Upgrade Problems
- (On-Premise and SaaS) Complete the Post-Upgrade Steps
- Additional Configuration for Oracle Deployments
- Post-Upgrade: Optimize Oracle 19c Performance
- (On-Premise and SaaS) Post-Upgrade: Trending Data Backups
- (On-Premise only) Post-Upgrade: Final Steps to Complete Your Upgrade
- (On-Premise and SaaS) Post-Upgrade: Verify NSQL Queries

### Clear Your Browser Cache

After an upgrade or after changing their access rights, you may encounter a blank page until you clear the browser cache, cookies, and history files. The steps vary by the web browser. If you see improved results in Google Chrome incognito mode, that generally indicates you can clear your browser cache to achieve the same results in normal mode.

Also, try logging out and then logging back in again to reset your permissions.

### How Long Does It Take to Upgrade?

From the day our SaaS customers place a ticket to request an upgrade, the entire process only requires approximately 2 to 4 days to be completed, plus 4 to 7 days for production environments, for a combined time of about 10 to 15 days.

1. All non-production upgrades are processed in batches which start every week on a Monday or Tuesday.
2. Each SaaS upgrade ticket shows when the new live environment is ready for your users. The customer contact person on the upgrade ticket also receives an email notification.

> [!TIP]
> To start a non-production SaaS upgrade, enter a ticket. When your team is finished testing, open a new ticket titled "Testing Complete, Upgrade Production" to request the production upgrade.

3. Allow 5 to 7 business days of lead time for receiving and scheduling your production upgrade request.
4. Production upgrades typically start on the next available Friday after the close of business and typically finish by the end of the next day (Saturday).
5. Each SaaS upgrade ticket shows when the new live environment is ready for your users.

> [!NOTE]
> If you require immediate assistance with a major issue in your post-upgrade production environment, open a Severity 1 ticket. If a rollback to the prior version is necessary, the whole process restores all your original pre-upgrade data.

> [!NOTE]
> **(On-Premise only) Important Notes for Customers Planning to Upgrade to this Release:**
> - Clarity uses AdoptOpenJDK. You need to install Adopt JDK and point your Java Home variable to the Adopt JDK directory.
> - **Oracle Installations Only:** You cannot upgrade on Oracle until your `dbms_obfuscation_toolkit.md5` package is enabled. Enable and grant explicit permissions to `dbms_obfuscation_toolkit.md5`.
> - After upgrading to 16.0.2, ensure all your client-side components like XOG, OWB, and Schedule Connect are installed again.
> - After upgrading to 16.0.2, install procedures are not written in the `install.log` file. Please refer to the article KB-241353 for more information.

### Pre Upgrade Steps

**(SaaS only)** As a Clarity user, you enjoy seamless automated upgrades in the cloud. SaaS administrators can prepare for an upgrade, review the new features, and perform any required or optional changes post-upgrade.

#### Pre-Upgrade: Review the Requirements

Address the following important points before you begin an upgrade:
- Days or weeks in advance, you can run a health report and examine any customizations that could interfere with a future upgrade.
- Review the Release Information including the Release Notes and Change Impact and Upgrade documentation.
- Verify that you are following a recommended upgrade path.
- Run the **Delete Process Instance** job in your current environment.
- License key information is required to install some third-party software products.
- Disable any custom database triggers or antivirus scanners that can interfere with the upgrade or installation scripts.
- Check any third-party software you might also be upgrading.
- Verify that a standard calendar exists in the product.
- Process all In progress transactions into WIP. Review and fix all invalid transactions. Verify:
- `imp_transactionimport` and `ppa_transcontrol` are clear.
- WIP adjustments are approved.
- Review time slices. Verify that the table is slicing out only the data that is required.
- (Optional) Clear the Datamart and recreate the data post-upgrade. After the upgrade, run the following jobs:
- Datamart Extraction job
- Datamart Rollup job
- Complete and put all processes on hold.
- Remove or delete process history, notifications, jobs, or logs.
- Pause all scheduled jobs. Take special note of the **Time Slicing** job.
- Turn off auditing on all objects before you start the upgrade process.

> [!TIP]
> Only on-premise customers can run a checkinstall utility before starting their upgrade. As a SaaS administrator, be advised that Clarity SaaS Ops runs the checkinstall utility for your On Demand Clarity instance a few days in advance of the scheduled installation date.

### (On-Premise and SaaS) Pre-Upgrade Steps

1. You must have the standard base calendar available in your Clarity application before you upgrade.
2. Process all In progress transactions into WIP.
   a. Verify: `imp_transactionimport` and `ppa_transcontrol` are clear; WIP adjustments are approved.
   b. Review and fix all invalid transactions.
3. Review Time Slices. Verify that the table is slicing out only the data that is required.
4. Complete and put all processes on hold.
5. Remove or delete process history, notifications, jobs, or logs.
6. Pause all scheduled jobs. Take special note of the **Time Slicing** job.

### (On-Premise and SaaS) Pre-Upgrade: Custom Processes, Scripts, and Other Customizations

Clarity cannot upgrade any unsupported customized content. Customizations must be disabled and may need to be redesigned and re-implemented to work with changing product functionality.

> [!WARNING]
> After an upgrade, unless you disable them, your customizations might result in errors or fail to work as expected.

**Follow these steps:**

1. Identify your custom content in your current release.
2. Acknowledge the customizations and recognize that the upgrade scripts might not support the custom content.
3. As an on-premise administrator, the checkinstall script provides a warning for customizations that it detects pre-upgrade. The following example message provides insight into the types of customizations that can negatively impact your upgrade experience:

> WARNING: Possible schema customizations have been found. Any customizations to the system are the responsibility of the customer to maintain and are not supported by Broadcom. The possible customizations found are listed in the following log files:
> - `check-logs/database_customization_triggers.txt`
> - `check-logs/database_customization_indexes.txt`
> - `check-logs/database_customization_tables.txt`
> - `check-logs/database_customization_constraints.txt`

4. Turn off the customizations before the upgrade. After the upgrade, reintroduce the customizations and test them in the Clarity interface.
5. In addition to database objects, also evaluate attribute values.

> [!TIP]
> Some customers have experienced errors with legacy custom content. After disabling the custom process, script, or other legacy custom content, Clarity provided the functionality with no net loss to end users. We recommend that you perform an analysis comparing the value of Clarity features in a complete COTS/SaaS solution against the value of developing your own unsupported customizations.

### Upgrade Assessment Utility (On-Premise only)

Video: Clarity Upgrade Assessment Utility - Learn how to use the Upgrade Assessment Utility to make upgrading Clarity simple and quick.

### (On-Premise only) Pre-Upgrade: Review the Requirements

Address the following important points before you begin the upgrade:
- Weeks or months in advance, you can run a health report and examine any customizations that could interfere with a future upgrade.
- A user account with administrator rights is required for the server or servers on which you intend to install PPM.
- Backup the existing installation directory and database. Verify that you have a consistent back-up of the database schema. Verify that you have sufficient disk space available on the server.

> [!TIP]
> Depending on the size of your database, each release backup can potentially take several hours. We recommend that you perform an initial upgrade with backups in a sandbox or test environment.
- Run the **Delete Process Instance** job.
- Read the Change Impact and Upgrade information for each release between your current and target releases.
- License key information is required to install some third-party software products.
- Disable any custom database triggers or antivirus scanners.
- Verify the configuration settings on the Clarity database server.
- Upgrade the following third-party software (as needed):
- AdoptOpenJDK 11.0.3+7
- Apache Tomcat (application server)

> [!NOTE]
> For information about the versions of third-party software that this release supports, see the Clarity 16.4.1 Release Notes.
- Verify that a standard calendar exists in the product.
- If XDM was part of a previous version, ensure that XDM is distributed to the other servers in the cluster after the upgrade step.
- Turn off auditing on all objects before you start the upgrade process.
- Process all In progress transactions into WIP.
- Review Time Slices.
- Clear the Datamart and recreate the data post-upgrade.

> [!NOTE]
> The Datamart is automatically cleared for Oracle. Use `NBI_Clean_Datamart_sp` to clear the Datamart. The script does not clear the configuration table (`NBI_CFG%`) or time facts tables (`NBI_PM_PT_FACTS` and `NBI_FM_PT_FACTS`).
- Complete and put all processes on hold.
- Pause all scheduled jobs.
- Run the Health Report.
- Remove all Clarity services using: `service remove all`
- Verify that no files or folders in the installation folder are in use.
- Turn off auditing on all objects.
- The following step applies on Oracle databases only. To permit the upgrade to make automatic backups:

```sql
GRANT CREATE ANY DIRECTORY TO <app schema user>;
GRANT SELECT ON DBA_DATAPUMP_JOBS TO <app schema user>;

GRANT CREATE ANY DIRECTORY TO <dwh schema user>;
GRANT SELECT ON DBA_DATAPUMP_JOBS TO <dwh schema user>;
```
- In some environments where the application and database are on the same server, running the `service stop all` command also stops the listener.
  a. To check the status of the listener: `lsnrctl status`
  b. If this returns error code 61: `lsnrctl start`
- To avoid errors, when selecting a backup directory, verify that it is on the same server as the Oracle home directory.

> [!TIP]
> The installer asks you to review the checkinstall results before you proceed with the upgrade. If you are not ready, you can type N at the Y/N prompt.

### (On-Premise only) Pre-Upgrade: Run Checkinstall

The Installation Checker (`checkinstall`) utility assesses any installation or upgrade. The utility runs automatically at the start of an installation or upgrade and at the end of an upgrade attempt.

**Upgrade Action:** For best results, run the Installation Checker before starting the full installation and upgrade process.

1. Extract the Clarity installer to the Clarity application server.
2. Open a command prompt and navigate to the `checkinstall` directory.
3. Invoke the checkinstall command:
- **UNIX:** `sh checkinstall.sh`
- **Windows:** `checkinstall.bat`

> [!NOTE]
> You are asked for the **Operator Username** and **Operator Email**. This information is stored as a record in the installation log.

4. Verify the results. Review the customizations and make adjustments for the upgrade as necessary.

### (On-Premise only) Pre-Upgrade: Installation and Upgrade Dependencies

The install and upgrade scripts in this release introduce the following dependencies:

| Install/Upgrade of This Component | Requires This Component |
|---|---|
| Upgrade Clarity | Data Warehouse Configured; Load Data Warehouse Job Completed |
| Install PMO or APM add-ins | Data Warehouse Configured; PMO Accelerator Add-in |

### (On-Premise only) Pre-Upgrade: Make Third-Party JAR Files Accessible to the Installer

For Release 16.4.1, the file is named `thirdparty.libs.16.4.1.jar`.

**Upgrade Action:** Retrieve the `thirdparty.libs.16.4.1.jar` file from the installation media. Place the JAR file in a location accessible to the installer.

> [!TIP]
> To keep the installer from prompting you for the file location, place the JAR file in the installation root directory.

### (On-Premise only) Pre-Upgrade: Override Default Memory Settings (Large Data Sets)

If your Clarity upgrade processes a large volume of data, we recommend that you override the default memory settings.

1. Create a `memory.properties` file.
2. Place it in the `$cappm/config` directory.
3. Set the desired memory values. A typical upgrade uses the following default values:

```properties
defaultScriptMaxMem=1024m
defaultScriptPermGenMem=128m
```

Example new settings:

```properties
defaultScriptMaxMem=2560m
defaultScriptPermGenMem=512m
```

### (On-Premise only) Pre-Upgrade: Overview for a Typical Upgrade

1. Perform the pre-upgrade requirements.
   a. Install the prerequisite third-party software.
   b. Create a full backup of your database, file systems, and customizations.
   c. Remove customer-added database triggers, stored procedures, indexes, views, and constraints before upgrading.

> [!WARNING]
> As a result of the database schema changes for this release, most custom triggers, indexes, and constraints can cause the upgrade to fail. We recommend removing, not disabling, customer-added triggers.

2. Perform the remaining pre-upgrade steps and then start the upgrade.
3. Some important changes include:
- The upgrade prompts you for current and target Clarity folders.
- The HTTP and HTTPS Entry URL fields cannot be `localhost` when Jaspersoft is integrated with Clarity.
4. Complete the initial post-upgrade steps:
   a. Verify that all installation steps completed successfully.
   b. Review the Clarity System Administration server `admin.log` and `install.log` for errors.
   c. Reapply any database and file system customizations.
   d. Run the **Oracle Table Analyze Job** from Clarity after the upgrade.
5. Upgrade your Advanced Reporting content or configure Advanced Reporting for the first time.
6. Install and upgrade your choice of add-ins and connectors.

> [!WARNING]
> Consider the configurations that you have made to items before applying them. Applying modified items overwrites your configurations.

**Best Practice:** If you modified stock Clarity content, copy the modified content before upgrading. Then, apply the new incoming stock Clarity content, and retrofit the modifications to the new content.

7. Review the Studio views and system content and manually upgrade as needed.
- The **Last Version** column identifies changes to stock views in Release 16.4.1.
- If a view was automatically upgraded, a checkmark appears in the **Upgraded** column.
- If a view was not upgraded due to pre-existing configurations, decide whether to apply the changed view.
8. Verify your NSQL queries. Results are captured in the `postcheck-results.html` file. Correct any invalid NSQL queries.
9. Save the Upgrade Check Install Results Package. The files are zipped into an archive (for example, `checkinstallresults_2018-08-17_16-48-31.zip`).

### (On-Premise only) Pre-Upgrade: MS SQL Server Database Compatibility Level

If you are using SQL Server 2014, set the compatibility level to 120:

```sql
EXEC SP_DBCMPTLEVEL <database>, 120
```

If you are using SQL Server 2016, set the compatibility level to 130:

```sql
EXEC SP_DBCMPTLEVEL <database>, 130
```

If you are using SQL Server 2017, set the compatibility level to 140:

```sql
EXEC SP_DBCMPTLEVEL <database>, 140
```

> [!NOTE]
> If you face performance issues in Clarity, we recommend you alter the compatibility level to 110 for optimal performance after upgrade.

### (On-Premise only) Pre-Upgrade: Oracle Database Only PRJ_BLB_SLICES Table

The `ID`, `UNIT`, `LAST_UPDATED_DATE` and `LAST_UPDATED_BY` columns in the `PRJ_BLB_SLICES` table have been dropped. If you are using Oracle, the table is replicated before the columns are dropped. The replication requires you to verify that the tablespace is large enough.

**Upgrade Action:** To determine if the tablespace can deal with this condition, have your database administrator (as sysdba) run the following query (change the schema owner to the owner of the Clarity schema):

```sql
SELECT SLC.owner, SLC.table_name, SLC.TABLESPACE_NAME,
       SLC.MB MB_NEEDED, TBSPC.MB_FREE MB_FREE,
       SIZING.MAX_MB, SIZING.MB_USED, EXT.AUTOEXTENSIBLE
FROM (SELECT owner, table_name,
             NVL(ROUND((num_rows * avg_row_len) / (1024 * 1024)), 0) MB,
             TABLESPACE_NAME
      FROM all_tables
      WHERE owner = 'CLARITY'
        AND table_name = 'PRJ_BLB_SLICES') SLC
INNER JOIN (SELECT df.tablespace_name,
                   (df.totalspace - tu.totalusedspace) "MB_FREE"
            FROM (SELECT tablespace_name, ROUND(SUM(bytes) / 1048576) TotalSpace
                  FROM dba_data_files GROUP BY tablespace_name) df,
                 (SELECT ROUND(SUM(bytes) / (1024 * 1024)) totalusedspace, tablespace_name
                  FROM dba_segments GROUP BY tablespace_name) tu
            WHERE df.tablespace_name = tu.tablespace_name) TBSPC
  ON (SLC.TABLESPACE_NAME = TBSPC.TABLESPACE_NAME)
INNER JOIN (SELECT DISTINCT(autoextensible), tablespace_name
            FROM dba_data_files) EXT
  ON (SLC.tablespace_name = EXT.tablespace_name)
INNER JOIN (SELECT tablespace_name, COUNT(*) AS no_of_data_files,
                   SUM(MAXBYTES) / (1024 * 1024) * COUNT(*) AS MAX_MB,
                   SUM(user_bytes) / (1024 * 1024) MB_USED,
                   ROUND((SUM(user_bytes) / (1024 * 1024)) / (SUM(MAXBYTES) / (1024 * 1024)) * 100, 2) PERCENT_USED
            FROM dba_data_files GROUP BY tablespace_name) SIZING
  ON (SLC.TABLESPACE_NAME = SIZING.TABLESPACE_NAME);
```

**Example query results:**

| OWNER | TABLE_NAME | TABLESPACE_NAME | MB_NEEDED | MB_FREE | MAX_MB | MB_USED | AUTOEXTENSIBLE |
|---|---|---|---|---|---|---|---|
| CLARITY | PRJ_BLB_SLICES | USERS_LARGE | 1306 | 5020 | 90000 | 15997 | YES |
- **If AUTOEXTENSIBLE is YES:** The tablespace can grow automatically up to the MAX_MB value. Ensure that MAX_MB is higher than MB_NEEDED + MB_USED.
- **If AUTOEXTENSIBLE is NO:** Ensure that MB_NEEDED is less than MB_FREE. If not, the database administrator can allocate extra data files.

> [!TIP]
> We recommend increasing the tablespace at least 20 percent more than is needed.

### (On-Premise only) Pre-Upgrade: Custom Processes, Scripts, and Other Customizations

The product cannot upgrade any unsupported customized content.

> [!WARNING]
> After an upgrade, unless you disabled them, your customizations might result in errors or fail to work as expected.

**Follow these steps:**

1. Identify your custom content.
2. Acknowledge the customizations and recognize that the upgrade scripts might not support the custom content.
3. The checkinstall script provides a warning for customizations. The possible customizations are listed in:
- `check-logs/database_customization_triggers.txt`
- `check-logs/database_customization_indexes.txt`
- `check-logs/database_customization_tables.txt`
- `check-logs/database_customization_constraints.txt`
4. Turn off the customizations before the upgrade. After the upgrade, reintroduce and test them.
5. Also evaluate attribute values.

> [!TIP]
> - We recommend performing an analysis comparing the value of Clarity features against the value of developing your own unsupported customizations.
> - The upgrade script reveals all potential customizations. Remove the customizations that you created. Broadcom Support recommends that you remove all known customizations.

### (On-Premise only) Pre-Upgrade: Preserve Your File Directory Customizations

During the upgrade, you are prompted for the target installation directory. New pre-upgrade and post-upgrade steps let you copy files to and from the Clarity directory using ant-based scripting.

Templates are provided in release-specific upgrade folders: `preprocess-upgrade.xml` and `postprocess-upgrade.xml`.

**Example `preprocess-upgrade.xml` script:**

```xml
<project name="content" default="upgrade" basedir=".">
  <target name="upgrade">
    <echo>Preserving customer specified files prior to upgrade from install.dir = ${install.dir}</echo>
    <if fileexists="${install.dir}" not="true">
      <fail>Install dir not specified = ${install.dir}</fail>
    </if>
    <delete dir="upgrade_temp"/>
    <mkdir dir="upgrade_temp" />
    <!-- Uncomment the copy below and list the files to be included for preservation -->
    <!--<copy todir="upgrade_temp">
      <fileset dir="${install.dir}" >
        <include name="myfiles/my*.*"/>
        <include name="abb/*01.jar"/>
        <include name="a*01.jar"/>
      </fileset>
    </copy>-->
  </target>
</project>
```

**Example `postprocess-upgrade.xml` script:**

```xml
<project name="content" default="upgrade" basedir=".">
  <target name="upgrade">
    <echo>Restoring customer specified files after upgrade to install.dir = ${install.target.dir}</echo>
    <if fileexists="${install.target.dir}" not="true">
      <fail>Install dir not specified = ${install.target.dir}</fail>
    </if>
    <!-- Uncomment the copy task below and list the files to be restored -->
    <!--<copy todir="${install.target.dir}">
      <fileset dir="upgrade_temp" >
        <include name="myfiles/my*.*"/>
        <include name="abb/*01.jar"/>
        <include name="a*01.jar"/>
      </fileset>
    </copy>-->
  </target>
</project>
```

### (On-Premise only) Upgrade an Apache Tomcat Single Server

**Follow these steps:**

1. Stop and remove all services:

```bash
service stop app bg nsa beacon
service remove app bg nsa beacon
```

2. Set up the application server by installing or upgrading needed third-party software.
3. From the command prompt, navigate to the directory where you want to unpack the Clarity installer file.
4. Run the following commands:

```bash
mkdir temp
cd temp
```

5. Extract `install.jar` from the installation media:

```bash
jar -xvf <path of the installation media>/install.jar
```

6. Run the installation script:
- **UNIX:**
     ```bash
     chmod +x ./install.sh
     sh ./install.sh
     ```
- **Windows:**
     ```
     install.bat
     ```

7. If your upgrade spans two or more releases, the installer can store the most recent single version of the database as a backup. The file names are:
- `upgrade_backup_app.dmp`
- `upgrade_backup_dwh.dmp`

8. (Optional) If the automated backup fails, the upgrade continues. You can elect to resume from the last successful backup.

9. To troubleshoot backup failure, check log entries such as: `DataWarehouse Database version 16.4.1 backup failed.`

10. Follow the prompts to complete the command-line upgrade.

11. During the upgrade, default values from the existing Clarity installation are automatically entered. Key properties include:
- **Clarity Home Directory** - Directory in which to install Clarity
- **Clarity Temporary Directory** - Temporary directory for shell and node scripts
- **Clarity Target Directory** (upgrade only) - New install directory for the upgrade
- **JDK Home Directory** - Java JDK home directory
- **Beacon Multicast Address** - Default: `230.0.0.1` (recommend `239.x.x.x` subnet)
- **Beacon Multicast Port** - Default: `9090`
- **Beacon Client Port** - Server port number for the Beacon service
- **Super User Command Prefix** (UNIX only)
- **Super User Name** (UNIX only)
- **J2EE Server Vendor** - Apache Tomcat (default)
- **Install CSA Locally** - Enter `true` or `false`
- **Tomcat 8 Home Directory**
- **CSA Web Port**
- **Enter password** - Default: `admin`
- **Operator User Name**
- **Operator Email Address**

12. Start the Clarity System Administration application.
13. Update the properties of the server.
14. In the left navigation panel, click **Servers** and select the server.
15. Click each subtab on the **Properties** tab and complete the fields.

> [!NOTE]
> For complete information about all fields on the subtabs, see Clarity System Administration (CSA).

16. Start all services.
17. Click **All Services**.
18. Select the services and click **Start**.
19. To verify that Clarity is accessible from a browser, connect using the configured Entry URL:

```
http://<server name>:<port>/niku/nu
```

The default user ID and password are `admin/admin`.

### (On-Premise only) Upgrade an Apache Tomcat Clustered Server

**Follow these steps:**

1. Remove all services in the cluster.
2. Set up all servers by installing or upgrading needed third-party software.
3. Open a command prompt and navigate to the unpack directory.
4. Run:

```bash
mkdir temp
cd temp
```

5. Extract `install.jar`:

```bash
jar -xvf <path of the installation media>/install.jar
```

6. Run the installation script:
- **UNIX:** `chmod +x ./install.sh` then `sh ./install.sh`
- **Windows:** `install.bat`

7. Follow the prompts (same properties as single server upgrade).
8. Start the Clarity System Administration (CSA) application.
9. Update the properties for each server in the cluster.
10. In the left navigation panel, click **Servers** and select the server.
11. Click each subtab and complete the fields.

> [!NOTE]
> For complete information about all fields, see CSA: Clarity System Administration.

12. Verify that the database is accessible (check the **Database** subtab, **Internal Connection** status).
13. Start the **Beacon** service on all servers in the cluster.
14. In the left navigation pane, select **Distribute All**.

> [!WARNING]
> The Distribute All process is typically used to upgrade other servers in a cluster. However, if you are upgrading from a version earlier than Release 8.1.1, you are required to upgrade each server individually.

> [!WARNING]
> If upgrading from a release earlier than Release 8.1.1, use FTP or otherwise transfer the `install.jar` file to other servers. Stop the local Beacon service before installing the new package, install on each server, and restart the Beacon service.

15. When the Distribute All command completes:
- Stop the Beacon service.
- Manually copy the following jar files from the administration server to all remaining servers in the `$CLARITY_HOME/bin` AND `$CLARITY_HOME/lib` directories:
- `<install_dir>/bin/wrapper.jar`
- `<install_dir>/lib/commons-logging.jar`
- `<install_dir>/lib/jgroups-all.jar`
- `<install_dir>/lib/log4j.jar`
- `<install_dir>/lib/nsa.jar`
- `<install_dir>/lib/union.jar`
16. Click **Installation Overview** to verify the installation steps.
17. Review the `admin.log` file for errors.
18. Start all services.
19. Verify Clarity is accessible:

```
http://<server name>/niku/nu
```

### (On-Premise only) Recover and Restore from a Backup

Recovery/restore requires a few checks. The file `install.log` provides information on where the upgrade failed.

1. Find the last successful backup message in the log.
2. Look for the corresponding application binaries (e.g., `c:\clarity_14.4.0.234`).
3. Delete the current installation directory.
4. Rename the identified application binary to the install directory (e.g., `c:\clarity_14.4.0.234` to `c:\clarity`).
5. After the application binary has been restored, restore the database:
   a. Create the database user.
   b. Grant permissions (including new ones for db export).
   c. Restore the database from the backup created by the upgrade script.

### (On-Premise only) Troubleshoot Upgrade Problems

#### Recover from Upgrade Failure
- When upgrading PPM, if an intermediate install is 14.2, then the attribute `home` for the element `applicationServer` is set to Tomcat 8. If the upgrade install fails on 14.2 then on restoring it, make sure to modify the entry to Tomcat 7 home directory location.
- After restoring a database, make sure to reset the password as specified in `properties.xml` and provide privileges.
- Ensure that services (beacon, nsa) are added and deployed. They should be shut down if running (except db).

#### Configuring External Release Overrides Directory

When a Clarity upgrade fails, a specific artifact (JAR, XML, or DB script) will be provided by the Clarity upgrade team. The artifact has to be placed in the Release Overrides directory to address upgrade-related problems.

**Prerequisites:**
- The Clarity application is installed and operational.
- You have received a release override artifact (a zip folder) from the Clarity Upgrade team.

**Follow these steps:**

1. Navigate to Release Overrides Directory:

```
<Version Installer folder>/upgrade/release-overrides
```

2. Create a folder with the current version (e.g., `16.1.3`) in the `release-overrides` folder.

> [!NOTE]
> The path should look like: `1613 Installer folder/upgrade/release-overrides/16.1.3`

3. Place the artifact provided by the Clarity Upgrade team in the version directory.
4. **Specify an External Release-Override Folder (Optional):** If you prefer to place the artifact at an external location, provide the path when prompted (e.g., `/fs0/clarity1613upgrade`).
5. Proceed with the Clarity application upgrade.
6. Complete upgrade by following the prompts.

> [!IMPORTANT]
> You can check the log file for messages such as:
> `is_valid_release_overrides: External release overrides path: ../../release-overrides`
> `load-external-release-overrides: Applied chmod to 'n' files and 'm' directories.`

7. **Post-upgrade Verification:** Ensure the reported issues have been resolved and the artifact is copied to the correct Clarity runtime folder.

---

## (On-Premise and SaaS) Complete the Post-Upgrade Steps

### Additional Configuration for Oracle Deployments

Perform the following additional steps for Oracle deployments only:

1. **Grant required privileges:**
   a. Connect to the Oracle database as the sys user (sysdba).
   b. Execute:

```sql
GRANT CREATE ANY CONTEXT, DROP ANY CONTEXT TO <Clarity_database_user>;
```

2. **Grant package execution rights:**

```sql
GRANT EXECUTE ON SYS.DBMS_SESSION TO <Clarity_database_user>;
```

> [!IMPORTANT]
> The required privileges and package execution rights are mandatory for Clarity functionality and must not be revoked after the upgrade or at any later time.

3. After upgrading, follow these steps:
   a. **Enable the feature toggle** (with Clarity services running):

```bash
admin toggle-feature IMPERSONATEDBY_SESSION_CONTEXT_VARIABLE_DE168694 1
```

   b. **Run database bootstrap:**

```bash
admin db db-bootstrap-odf -Dodf.triggers=true -Dodf.force=false -Dodf.restoreNonCustomizedViews=false
```

   c. Restart the services.

### Post-Upgrade: Optimize Oracle 19c Performance

If you have local installations of Oracle 19c R1 or R2, you might detect a regression issue when `ORDERED` hint is used in structured queries.

1. For systems using Oracle 19c, run:

```sql
ALTER SYSTEM SET OPTIMIZER_FEATURES_ENABLE='19.1.0.2' SCOPE=BOTH;
```

2. Verify your parameters appear similar to the following example:

```
*._cursor_obsolete_threshold=300
*._optimizer_use_feedback=FALSE
*.audit_file_dest='/fs0/oracle/admin/niku/adump'
*.audit_trail='DB'
*.compatible='19.0.0'
*.cursor_sharing='FORCE'
*.db_block_size=8192
*.nls_comp='BINARY'
*.nls_date_format='YYYY-MM-DD HH24:MI:SS'
*.nls_language='AMERICAN'
*.nls_sort='BINARY'
*.open_cursors=1000
```

Adjust the memory management parameters based on your environment.

### (On-Premise and SaaS) Post-Upgrade: Trending Data Backups

After the upgrade, if you use the new trending jobs to generate your own custom analytics data, we recommend that you make specific backups. A common troubleshooting technique involves dropping the data warehouse schema. Without a backup, your custom trending data would be lost.

### (On-Premise only) Post-Upgrade: Final Steps to Complete Your Upgrade

**Required steps:**

1. Apply your upgraded add-ins and connectors.
   a. Request a backup before installing each add-in.
   b. Apply the Upgrade Ready content for items you are actively using.

> [!WARNING]
> Consider the configurations that you have made to items before applying them. Applying modified items overwrites your configurations.

**Best Practice:** If you modified stock Clarity content, copy the modified content before upgrading. Then apply the new stock content and retrofit your modifications.

   c. Read the PMO Accelerator Release Notes.
   d. Review the System: Clarity Content add-in for upgrade ready content.

2. Review the Studio views and system content and manually upgrade as needed.
   a. The **Last Version** column identifies changes to stock views.
   b. If a view was automatically upgraded, a checkmark appears in the **Upgraded** column.
   c. Look for views with Last Version=16.4.1 and Upgraded=unchecked.

3. The XML Open Gateway (XOG) client requires the JRE until Clarity 15.5.1 which uses Java 11. For 15.5.1 and higher, no JRE is necessary.

4. Register any Portfolio Investment attributes that you want to display in portfolio pages.

5. If you use a custom statistics job, refer to the updated Oracle Table Analyze Job procedure (`CMN_JOB_ANALYZE_SP`).

6. Verify compatible versions of MSP and OWB before updating.

> [!NOTE]
> Review all of the following steps after installing a patch to verify any changes in functionality.
- If upgrading with XDM, ensure that XDM is distributed to other servers in the cluster.
- Run the **Oracle Table Analyze Job** from Clarity after the upgrade.
- Verify the following performance metrics files in the Logs folder:
- `ScriptMetrics.xml`
- `Bootstrap.xml`
- Ensure server time synchronization between the Clarity application server, database server, and Data Warehouse database server.
- Review the post upgrade report (`checkinstall-results_<timestamp>.zip`).
- Verify that Beacon is always running.
- Ask your functional experts to review your upgraded test system side-by-side with a working pre-upgrade system.
- Review `app-ca.log` after functional testing.
- Review any customizations: customer-added database triggers, custom indexes and constraints, file system changes, and custom interfaces.
- Review system log file sizes (default: 5 MB with five rolling logs).
- Register any Portfolio Investment attributes.
- Remove the **Resource - Edit Financial** access right (if company policy requires it).
- Run a post installation script to:
  a. Remove the **Resource - Edit Financial** access right from all current resource managers.
  b. Clear the setting for the financial option that automatically grants the access right.
  c. Navigate to the `<clarity_home>/bin` directory.
  d. Refer the knowledge base article to disable the access right.
- Run the **Health Report** to verify all components are installed and functioning.

### (On-Premise and SaaS) Post-Upgrade: Verify NSQL Queries

During the post-upgrade process, the CheckInstall utility automatically runs the NSQL validator script. The validator writes the results to the `admin.log` file and `check-results.html` file inside the `checkinstall-results.zip` file.

Look for the following information in the log:
- Query name
- Query ID
- Content Source
- Query ID from `CMN_NSQL_QUERIES` of the query that failed validation

**Typical log output:**

```
[04:15:30] : [exec] Validating 181 NSQL grid/graph queries...
[04:15:47] : [exec] Error validating NSQL
[04:15:47] : [exec] Query name=Schedule Performance : Query ID=cop.schedulePerformance :
             Content Source=csk.niku.com : cmn_nsql_queries.id=5018009
[04:15:47] : [exec] Query name=Upcoming Milestones : Query ID=cop.upcomingMilestones :
             Content Source=csk.niku.com : cmn_nsql_queries.id=5018010
[04:15:47] : [exec] Query name=Open Milestones : Query ID=cop.openMilestonesLinkable :
             Content Source=csk.niku.com : cmn_nsql_queries.id=5018032
[04:15:47] : [exec] You must correct invalid NSQL queries.
```

Correct any invalid custom NSQL queries. If a query is associated with a portlet, clear the **Available for User Portlets** check box to edit the query.

**Follow these steps:**

1. Click **Administration**, **Studio**, **Queries**.
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
> 4. Preview and verify the query.

> [!NOTE]
> Some NSQL queries are delivered with add-ins. Applying an update for an add-in makes fixes for the NSQL queries available for an update on the server.
