---
title: Pre-Upgrade Steps
tags:
  - admin
  - howto
aliases:
  - Pre-Upgrade
  - Upgrade Preparation
canonical: true
audience: admin
domain: installation
parent: "[[_MOC Install Upgrade]]"
---


## Clear Your Browser Cache


After an upgrade or after changing access rights, you may encounter a blank page until you clear the browser cache, cookies, and history files. The steps vary by web browser.

> [!NOTE]
> If you see improved results in Google Chrome incognito mode, that generally indicates you can clear your browser cache to achieve the same results in normal mode. Also try logging out and then logging back in again to reset your permissions.

---

## How Long Does It Take to Upgrade?


For SaaS customers, from the day a ticket is placed to request an upgrade, the entire process requires approximately 2 to 4 days for non-production and 4 to 7 days for production environments (10 to 15 days combined).

1. All non-production upgrades are processed in batches which start every week on Monday or Tuesday.
2. Each SaaS upgrade ticket shows when the new live environment is ready. The customer contact also receives an email notification.

> [!TIP]
> To start a non-production SaaS upgrade, enter a ticket. When your team is finished testing, open a new ticket titled "Testing Complete, Upgrade Production" to request the production upgrade.

3. Allow 5 to 7 business days of lead time for receiving and scheduling your production upgrade request.
4. Production upgrades typically start on the next available Friday after the close of business and finish by the end of the next day (Saturday).

> [!NOTE]
> If you require immediate assistance with a major issue in your post-upgrade production environment, open a Severity 1 ticket. If a rollback is necessary, the whole process restores all your original pre-upgrade data.

---

## (On-Premise only) Important Notes for Customers Planning to Upgrade


> [!NOTE]
> - Clarity uses AdoptOpenJDK. You need to install Adopt JDK and point your `JAVA_HOME` variable to the Adopt JDK directory.
> - **Oracle Installations Only:** You cannot upgrade on Oracle until your `dbms_obfuscation_toolkit.md5` package is enabled.
> Enable and grant explicit permissions to `dbms_obfuscation_toolkit.md5`.
> Optionally contact your DBA or Oracle to obtain the advanced security license (OAS) required for `DBMS_CRYPTO`.
> - After upgrading to 16.0.2, ensure all client-side components like XOG, OWB, and Schedule Connect are installed again.
> - After upgrading to 16.0.2, install procedures are not written in the `install.log` file. Refer to KB-241353.

---

## Pre-Upgrade Steps


### (On-Premise and SaaS) Pre-Upgrade Checklist


Follow these steps:

1. Verify that a standard base calendar exists in your Clarity application before upgrading. If you deleted the shipped calendar named **Standard**, create it before upgrading. Contact Broadcom Support if your instance is missing the Standard base calendar.
2. Process all in-progress transactions into WIP:
   - Verify that `imp_transactionimport` and `ppa_transcontrol` are clear.
   - Verify that WIP adjustments are approved.
   - Review and fix all invalid transactions.
3. Review Time Slices. Verify that the table is slicing out only the data that is required. If extra data is getting sliced, the database size increases and affects performance.
4. Complete and put all processes on hold.
5. Remove or delete process history, notifications, jobs, or logs. Look for items that you do not need to keep.
6. Pause all scheduled jobs. Take special note of the **Time Slicing** job — pause it before stopping Clarity services.

> [!TIP]
> Only on-premise customers can run a checkinstall utility before starting their upgrade. As a SaaS administrator, this process is performed for you by CA SaaS Operations.
> Clarity SaaS Ops runs the checkinstall utility for your environment a few days in advance of the scheduled installation date.
> If a validation error is found, a Support case is opened under your customer site ID.

---

### (On-Premise and SaaS) Pre-Upgrade: Custom Processes, Scripts, and Other Customizations


Clarity cannot upgrade any unsupported customized content. Customizations must be disabled and may need to be redesigned and re-implemented to work with changing product functionality.

> [!WARNING]
> After an upgrade, unless you disable them, your customizations might result in errors or fail to work as expected.

Follow these steps:

1. Identify your custom content in your current release. For example, custom processes with custom GEL scripts that modify timesheet status attributes.
2. Acknowledge the customizations and recognize that the upgrade scripts might not support the custom content.
3. As an on-premise administrator, the checkinstall script provides a warning for customizations it detects pre-upgrade. The following example message illustrates the types of customizations that can negatively impact your upgrade experience:
   ```
   WARNING: Possible schema customizations have been found.
   Any customizations to the system are the responsibility of the customer
   to maintain and are not supported by Broadcom. To upgrade successfully,
   all customizations must be reviewed, changed, or removed as needed before
   the upgrade. After a successful upgrade, the customizations may be added
   back to the system. The possible customizations found are listed in the
   following log files:
     check-logs/database_customization_triggers.txt
     check-logs/database_customization_indexes.txt
     check-logs/database_customization_tables.txt
     check-logs/database_customization_constraints.txt
   ```
4. Turn off the customizations before the upgrade. After the upgrade, reintroduce and test them.
5. In addition to database objects, also evaluate attribute values. Review the Oracle and Microsoft SQL database and data warehouse changes. Validate if any customizations depend on dropped, changed, or new attributes.

> [!TIP]
> Some customers have experienced errors with legacy custom content.
> After disabling the custom process, script, or other legacy custom content, Clarity provided the functionality with no net loss to end users.
> Perform an analysis comparing the value of Clarity features in a complete COTS/SaaS solution against the value of developing unsupported customizations.

---

### (On-Premise only) Pre-Upgrade: Review the Requirements


Address the following important points before you begin the upgrade:

- Weeks or months in advance, run a health report and examine any customizations that could interfere with a future upgrade.
- A user account with administrator rights is required for the server(s) on which you intend to install.
- Back up the existing installation directory and database. Verify that you have sufficient disk space.

> [!TIP]
> Depending on the size of your database, each release backup can potentially take several hours. Perform an initial upgrade with backups in a sandbox or test environment. After resolving any issues, upgrade the production environment and skip the backups since you already have them.

- Run the **Delete Process Instance** job. A series of full scans on the `BPM_ERRORS` table can slow performance in Oracle and Microsoft SQL databases.
- Read the Change Impact and Upgrade information for each release between the one you are currently using and the target release.
- Verify that you are following a recommended upgrade path.
- License key information is required to install some third-party software products.
- Disable any custom database triggers or antivirus scanners that can interfere with the upgrade scripts.
- Upgrade the following third-party software (as needed):
  - AdoptOpenJDK 11.0.3+7
  - Apache Tomcat (application server)

> [!NOTE]
> For information about the versions of third-party software that this release supports, see the Clarity 16.4.1 Release Notes.

- Verify that a Standard base calendar exists.
- Turn off auditing on all objects before you start the upgrade process.
- Process all in-progress transactions into WIP.
- Review Time Slices. Verify that the table is slicing out only the required data.
- Clear the Datamart and recreate the data post-upgrade to improve the processing time of the upgrade.

> [!NOTE]
> The Datamart is automatically cleared for Oracle. Use `NBI_Clean_Datamart_sp` to clear the Datamart. The script does not clear the configuration tables (`NBI_CFG%`) or time facts tables with historical information (`NBI_PM_PT_FACTS` and `NBI_FM_PT_FACTS`).

- Complete and put all processes on hold. Remove or delete process history, notifications, jobs, or logs.
- Pause all scheduled jobs. Take special note of the **Time Slicing** job.
- Run the Health Report to verify all components are installed and functioning.
- Remove all Clarity services before running the upgrade:
  ```
  service remove all
  ```
- Verify that no files or folders in the installation folder are in use.
- Verify that only one command line prompt is open, and that it is running as administrator.

**Oracle only — Grant permissions for automatic backups:**

```sql
GRANT CREATE ANY DIRECTORY TO <app schema user>;
GRANT SELECT ON DBA_DATAPUMP_JOBS TO <app schema user>;

GRANT CREATE ANY DIRECTORY TO <dwh schema user>;
GRANT SELECT ON DBA_DATAPUMP_JOBS TO <dwh schema user>;
```

> [!NOTE]
> In some environments where the application and database are on the same server, running `service stop all` also stops the listener. To check listener status, enter `lsnrctl status`. If this returns error code 61, issue `lsnrctl start`.

> [!TIP]
> The installer asks you to review the checkinstall results before you proceed. If you are not ready, type `N` at the Y/N prompt.

---

### (On-Premise only) Pre-Upgrade: Run Checkinstall


The Installation Checker (checkinstall) utility assesses any installation or upgrade.
The utility runs automatically at the start of an installation or upgrade and at the end of an upgrade attempt. You can also run it manually.
The utility produces a report results file (`precheck-results.html`) in the `<install-root>/checkinstall/check-logs` directory.

Follow these steps:

1. Extract the Clarity installer to the Clarity application server.
2. Open a command prompt and navigate to the `checkinstall` directory.
3. Invoke the checkinstall command:

   **UNIX:**
   ```
   sh checkinstall.sh
   ```

   **Windows:**
   ```
   checkinstall.bat
   ```

   > [!NOTE]
   > You are asked for the **Operator Username** and **Operator Email**. This information is stored as a record in the installation log.

4. Verify the results. The results contain warnings, errors, and information about any customizations you have made. Review the customizations and make adjustments for the upgrade as necessary.

---

### (On-Premise only) Pre-Upgrade: Installation and Upgrade Dependencies


The install and upgrade scripts introduce the following dependencies in chronological order:

| Install/Upgrade of This Component | Requires This Component |
|---|---|
| Upgrade Clarity | Data Warehouse Configured; Load Data Warehouse Job Completed |
| Install PMO or APM add-ins | Clarity; Data Warehouse Configured; PMO Accelerator Add-in |

---

### (On-Premise only) Pre-Upgrade: Make Third-Party JAR Files Accessible to the Installer


Because of licensing restrictions, some third-party library JAR files (`jgroups-all.jar` and `xinclude.jar`) are shipped separately from the Clarity image on the installation media. For Release 16.4.1, the file is named `thirdparty.libs.16.4.1.jar`.

Retrieve the `thirdparty.libs.16.4.1.jar` file from the installation media and place it in a location accessible to the installer.

> [!TIP]
> To keep the installer from prompting you for the file location, place the JAR file in the installation root directory.

---

### (On-Premise only) Pre-Upgrade: Override Default Memory Settings (Large Data Sets)


If your Clarity upgrade processes a large volume of data, override the default memory settings.

1. Create a `memory.properties` file.
2. Place it in the `$cappm/config` directory.
3. Set the desired memory values:

A typical upgrade uses the following default values:
```
defaultScriptMaxMem=1024m
defaultScriptPermGenMem=128m
```

Example of new settings in the `memory.properties` file:
```
defaultScriptMaxMem=2560m
defaultScriptPermGenMem=512m
```

---

### (On-Premise only) Pre-Upgrade: Overview for a Typical Upgrade


Follow these steps:

1. Perform the pre-upgrade requirements:
   a. Install prerequisite third-party software.
   b. Create a full backup of your database, file systems, and customizations (if applicable). Take a cold backup to keep sequences in line.
   c. Remove customer-added database triggers, stored procedures, indexes, views, and constraints before upgrading.

   > [!WARNING]
   > As a result of database schema changes for this release, most custom triggers, indexes, and constraints can cause the upgrade to fail. We recommend removing, not disabling, customer-added triggers.

2. Perform the remaining pre-upgrade steps and then start the upgrade.

3. Some important changes during the upgrade process:
   - The upgrade prompts you for current and target Clarity folders. You can specify the same folder or different folders. If you specify the same folder for both, the existing folder is renamed.
   - The HTTP and HTTPS Entry URL fields in CSA cannot be `localhost` when Jaspersoft is integrated with Clarity. Enter complete URLs on the **Application** subtab of the **Properties** tab.

4. Complete the initial post-upgrade steps:
   a. Verify that all installation steps completed successfully by reviewing the post-upgrade report.
   b. Review the Clarity System Administration `admin.log` and `install.log` for errors.
   c. Reapply any database and file system customizations.
   d. Run the **Oracle Table Analyze** job after the upgrade to gather schema statistics.

5. Upgrade your Advanced Reporting content:
   a. Set up the Data Warehouse database and populate it with Clarity data.
   b. Install Jaspersoft and import the domain information for reporting.

6. Install and upgrade your choice of add-ins and connectors.

   > [!WARNING]
   > Consider the configurations that you have made to items before applying them. Applying modified items overwrites your configurations.

7. Review the Studio views and system content and manually upgrade as needed. The upgrade preserves all preexisting Studio view configurations. If an existing view has configurations or if the object for the view is partitioned, the system does not automatically upgrade the view or the partition.

   - The **Last Version** column identifies changes to stock views in Release 16.4.1.
   - If a view was automatically upgraded, a checkmark appears in the **Upgraded** column. No further action is required.
   - For views with **Last Version = 16.4.1** and **Upgraded = unchecked**, decide whether to apply the changed view.

8. Verify your NSQL queries. During the upgrade, the checkinstall utility automatically verifies NSQL queries. Results are captured in the `postcheck-results.html` file of the `checkinstall-results.zip` file. To fix invalid NSQL queries in Studio:
   a. Go to the **NSQL** tab for each failing query.
   b. Click the **Preview** button.
   c. Review the errors.
   d. Repair the broken query constructs or fields.
   e. Click **Preview** and confirm the NSQL query is valid.

9. Save the Upgrade Check Install Results Package. The upgrade process produces a zipped file that contains all artifacts created during the upgrade (for example, `checkinstall-results_2018-08-17_16-48-31.zip`). This file is located in the `checkinstall/check-logs` directory.

---

### (On-Premise only) Pre-Upgrade: MS SQL Server Database Compatibility Level


Set the compatibility level to match your SQL Server version before upgrading:

| SQL Server Version | Compatibility Level | Command |
|---|---|---|
| SQL Server 2014 | 120 | `EXEC SP_DBCMPTLEVEL <database>, 120` |
| SQL Server 2016 | 130 | `EXEC SP_DBCMPTLEVEL <database>, 130` |
| SQL Server 2017 | 140 | `EXEC SP_DBCMPTLEVEL <database>, 140` |

> [!NOTE]
> If you face performance issues in Clarity after upgrade, alter the compatibility level to 110 for optimal performance.

---

### (On-Premise only) Pre-Upgrade: Oracle Database Only — PRJ_BLB_SLICES Table


The `ID`, `UNIT`, `LAST_UPDATED_DATE`, and `LAST_UPDATED_BY` columns in the `PRJ_BLB_SLICES` table have been dropped. The table is replicated before the columns are dropped. Verify that the tablespace is large enough to accommodate the temporary size increase.

Have your database administrator run the following query as `sysdba` (change the schema owner to the owner of the Clarity schema):

```sql
SELECT SLC.owner, SLC.table_name, SLC.TABLESPACE_NAME,
       SLC.MB MB_NEEDED, TBSPC.MB_FREE MB_FREE,
       SIZING.MAX_MB, SIZING.MB_USED, EXT.AUTOEXTENSIBLE
FROM (
  SELECT owner, table_name,
         NVL(ROUND((num_rows*avg_row_len)/(1024*1024)),0) MB,
         TABLESPACE_NAME
  FROM all_tables
  WHERE owner = 'CLARITY' AND table_name = 'PRJ_BLB_SLICES'
) SLC
INNER JOIN (
  SELECT df.tablespace_name,
         (df.totalspace - tu.totalusedspace) "MB_FREE"
  FROM (SELECT tablespace_name, ROUND(SUM(bytes) / 1048576) TotalSpace
        FROM dba_data_files GROUP BY tablespace_name) df,
       (SELECT ROUND(SUM(bytes)/(1024*1024)) totalusedspace, tablespace_name
        FROM dba_segments GROUP BY tablespace_name) tu
  WHERE df.tablespace_name = tu.tablespace_name
) TBSPC ON (SLC.TABLESPACE_NAME = TBSPC.TABLESPACE_NAME)
INNER JOIN (
  SELECT DISTINCT(autoextensible), tablespace_name
  FROM dba_data_files
) EXT ON (SLC.tablespace_name = EXT.tablespace_name)
INNER JOIN (
  SELECT tablespace_name,
         COUNT(*) AS no_of_data_files,
         SUM(MAXBYTES)/(1024*1024)*COUNT(*) AS MAX_MB,
         SUM(user_bytes)/(1024*1024) MB_USED,
         ROUND((SUM(user_bytes)/(1024*1024))/(SUM(MAXBYTES)/(1024*1024))*100,2) PERCENT_USED
  FROM dba_data_files GROUP BY tablespace_name
) SIZING ON (SLC.TABLESPACE_NAME = SIZING.TABLESPACE_NAME)
```

**Interpreting the results:**

- If **AUTOEXTENSIBLE = YES:** Ensure that the `MAX_MB` value is higher than `MB_NEEDED + MB_USED`.
- If **AUTOEXTENSIBLE = NO:** Ensure that `MB_NEEDED` is less than `MB_FREE`. If not, the DBA can allocate or extend extra data files to the tablespace.

> [!TIP]
> Increase the tablespace at least 20 percent more than is needed to accommodate standard data growth and the temporary replication.

---

### (On-Premise only) Pre-Upgrade: Preserve Your File Directory Customizations


During the upgrade, you are prompted for the target installation directory. New pre-upgrade and post-upgrade steps let you copy files to and from the Clarity directory using ant-based scripting.

Templates are provided in release-specific upgrade folders in the installer root directory:
- `preprocess-upgrade.xml`
- `postprocess-upgrade.xml`

**Example `preprocess-upgrade.xml`:**

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

**Example `postprocess-upgrade.xml`:**

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

---


---
**See also:** [[Upgrade Procedures]], [[Post-Upgrade Steps]]
**Parent:** [[_MOC Install Upgrade|Installation and Upgrade]]
