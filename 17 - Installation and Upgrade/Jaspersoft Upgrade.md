﻿---
title: Upgrade Jaspersoft
tags:
  - admin
aliases:
  - Jaspersoft Upgrade
---
# Upgrade Jaspersoft


> [!WARNING]
> **End of Life Announcement for CA Business Intelligence for Clarity**
> Broadcom is discontinuing support for CA Business Intelligence for Clarity (Clarity Advanced Reporting powered by Jaspersoft).
> Upgrading and patching Jaspersoft is important — Jaspersoft 9.0 includes critical security fixes.
> Falling too far behind can increase risk exposure and compound maintenance time and cost.

---

## Jaspersoft Support Matrix


You must be on Clarity 16.2.1 and Jaspersoft 8.1.1 to upgrade to Jaspersoft 9.0.

| Jaspersoft Version | Supported Clarity Versions |
|---|---|
| 9.0.0 Patch 1 & 2 | 16.2.1 and above |
| 9.0.0 | 16.2.1 and above |
| 8.1.1 | 16.1.1 to 16.2.2 |
| 7.8.0 | 16.1.1, 16.1.0, 16.0.0, 15.9.3, 15.9.2, 15.9.1 |

> [!NOTE]
> To view the steps to upgrade Jaspersoft, see the "Upgrade to Jaspersoft 9.0" section below.

---

## Deploying the Jaspersoft Patch


Use this section to deploy Jaspersoft 9.0 Patch 2 on an already-installed Jaspersoft 9.0 environment.

> [!IMPORTANT]
> Jaspersoft 9.0 Patch 2 (`9.0.0_6.6.x.x`) serves as a full installer for Jaspersoft 9.0. If you are currently using Jaspersoft 9.0 GA or Jaspersoft 9.0 Patch 1, upgrade by running `install.bat deploy-web-app` or `install.sh deploy-web-app` from the extracted patch folder.

### Pre-Requisites for Deploying the Patch


Back up the following before installing the patch:

- The Jaspersoft Web Deployment folder in Jaspersoft Tomcat (e.g., `reportservice` in Tomcat 9.0.98).
- The Clarity-Jaspersoft integration keystore: `<Jaspersoft tomcat>/webapps/reportservice/WEB-INF/config`.
- The config folder (Oracle TCPS users): `<Jaspersoft tomcat>/webapps/reportservice/WEB-INF/config`.
- The Jaspersoft installer keystores in the Home folder (Windows: `cd %userprofile%`).
- The `default_master_xxxx_xxxx.properties` file from `<Jaspersoft 9.0 Installer folder>/buildomatic/`.

### Deploying the Patch


Follow these steps:

1. Download the Jaspersoft 9.0 Patch 2 installer archive (`clarity_jaspersoft_9.0.0_6.6.x.x.zip`) from the Broadcom Support site.
2. Extract the zip to a relevant location.
3. Shut down the Jaspersoft 9.0 Tomcat application server:
   - **Windows:** `shutdown.bat`
   - **Linux:** `./shutdown.sh`
4. **Important:** Delete the `reportservice` folder in `Tomcat/webapps`.
5. Copy the `default_master_xxxx_xxxx.properties` file you previously backed up to `<Unzipped patch artifact>/buildomatic`.
6. Rename it to `default_master.properties`.
7. Verify the values in `default_master.properties` (ensure the Tomcat version is correct).
8. Navigate to the location where you unzipped the patch and run:
   - **Windows:** `install.bat deploy-web-app`
   - **Linux:** `install.sh deploy-web-app`

### Post Deployment Steps


1. Navigate to `<Jaspersoft tomcat>/webapps/reportservice/WEB-INF/config`. Copy the backed-up Clarity-Jaspersoft integration keystores and paste them here.
2. If you are an Oracle TCPS user, restore the truststore to the `tcps-truststores` folder.
3. Delete the temporary folders in the `<Jaspersoft tomcat>` folder.
4. Start the Jaspersoft service:
   - **Windows:** `startup.bat`
   - **Linux:** `./startup.sh`
5. Ensure that the Jaspersoft integration is working.
6. Verify the Jaspersoft version shows Jaspersoft 9.0.0 Patch 2 (version `9.0.0_6.6.x.x`).

### Update JVM Arguments for Jaspersoft 9.0 Patch 2


After applying Jaspersoft 9.0 Patch 2, append the following JVM arguments in your Tomcat configuration (e.g., in the `jvmArgs` setting):

```
jvmArgs: -Xms2048m -Xmx4096m -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+UseStringDeduplication
-Doracle.jdbc.defaultNChar=true -Djava.awt.headless=true -Dcom.jaspersoft.stats.config=stats.properties
-Dlog4j2.formatMsgNoLookups=true
```

> [!NOTE]
> - Values for `-Xms` and `-Xmx` must be set based on your environment and sizing requirements.
> - The `-Dcom.jaspersoft.stats.config=stats.properties` argument disables Jaspersoft telemetry collection.

### Update Catalina Options


To ensure stable handling of HTTP request objects, add the following to Catalina options in your `values.yml` (or equivalent Tomcat configuration):

```
catalinaOpts: -Dorg.apache.catalina.connector.RECYCLE_FACADES=false
```

---

## Upgrade to Jaspersoft 9.0 and Migrate Advanced Reporting Content


Clarity SaaS customers receive an automatic upgrade to the latest release of JasperReports (9.0). On-premise customers can decide to upgrade now or defer until a future Clarity upgrade.

> [!ATTENTION]
> Key things to remember when planning to install Jaspersoft 9.0:
> - You must be on Clarity 16.2.1 (or later) and Jaspersoft 8.1.1 to upgrade. Jaspersoft Studio 7.9 is supported with the Jaspersoft 9 Server.
> - **Back up the installation keystore** (`<user.home.dir>/.jrsks` and `.jrsksp`) before upgrade. On Windows, keystores are under `C:\users\<user directory>`.
> - The superuser password is encrypted with installer key stores — if you forget your credentials, you cannot retrieve them.
> - Jaspersoft 9.0 supports TCPS for Oracle 19c. Upgrade on Oracle TCPS/SSL is not supported — install fresh on TCPS and migrate content using admin export/import commands.
> - Jaspersoft 9.0 supports Microsoft SQL Server 2019.
> - Requires AdoptOpenJDK 17.0.12+7 and Tomcat 9.0.98.
> - Requires Chrome/Chromium 124 or higher installed on the server.
> - When exporting content, use the **Legacy Key** option.
> - Jaspersoft 9.0 does not work on Internet Explorer. Use Chrome, Firefox, or Edge.

> [!ATTENTION]
> Key points for cluster upgrades:
> - Back up keystore files and the Jaspersoft 8.1.1 database before the upgrade.
> - Upgrade using the same OS user used for installing Jaspersoft 8.1.1.
> - During the upgrade, the old keystore from 8.1.1 is upgraded to the new keystore for Jaspersoft 9.0.
> - When upgrading a cluster, upgrade the primary instance first. Copy the upgraded keystores from the primary server to the relevant user directory on all secondary servers. Then upgrade the secondary servers using the same user.

---

## Jaspersoft 9.0 Advanced Reporting and Analytics


Clarity 16.2.1 and higher releases include support for Jaspersoft 9.0. For on-premise customers, the installer prompts for an installation type.

**Upgrade type prompts:**

```
Select Installation Type:
1) Fresh Installation
2) Upgrade

Select Upgrade Method:
1) New DB Upgrade - New Jaspersoft Report Server database will be used
2) Same DB (in-place) Upgrade - Existing database will be upgraded to 9.0
```

> [!TIP]
> A Same DB upgrade can fail if:
> - You are running an unsupported release of Jaspersoft (minimum version for Same DB upgrade is 8.1.1).
> - You are running an unsupported release of Tomcat (for Jaspersoft 9.0, use Tomcat 9.0.98).
> - You are attempting to upgrade on a server with an unsupported release of Oracle or MS-SQL.
> - Same DB upgrades require Oracle 19c or Microsoft SQL Server 2019.

---

## Jaspersoft and UI Themes


Jaspersoft theme CSS updates are included in the Clarity Studio user interface themes.

**Upgrade Action:** No action required unless you applied customizations. Review any modified or custom themes after every major release.

Theme behavior:
- Selecting a default Clarity Studio UI theme also applies to Advanced Reporting pages.
- Editing a default UI theme: changes are not visible in Advanced Reporting until log out and back in.
- Configuring a new custom UI theme in Clarity Studio: the theme does not exist in Jaspersoft, so Advanced Reporting pages continue in the default UI theme.

---

## Upgrade the Jaspersoft Server: New Database Option


Follow these steps:

1. Verify that JasperReports Server 8.1.1 is configured before attempting to upgrade to 9.0.
2. Verify that Clarity 16.2.1 or higher is installed and the JasperReports Server is associated with it.
3. Verify that the csk content was imported onto the server.
4. Export server-level data: in the JRS still on the previous release, go to **Manage > Server Settings > Export**. A `<content>.zip` file appears in the specified folder.
5. Download AdoptOpenJDK 17.0.12+7 and Apache Tomcat 9.0.98. Set `JAVA_HOME` and PATH:
   - **Windows:** `set PATH=%JAVA_HOME%\bin;%PATH%`
   - **Linux:** `export PATH=$PATH:$JAVA_HOME/bin`
6. Back up the existing JasperReports Server instance (WebApp) and database.
7. Shut down the existing Tomcat services.
8. Create a JasperReports Server database schema with a new name before starting the upgrade.
9. If this is a second attempt at an upgrade:
   - Delete the `<Tomcat9.0.98>/<WebApp>` folder:
     - **Windows:** `rmdir <Tomcat9.0.98>\webapps\<reportservice>`
     - **Linux:** `rm -rf <Tomcat9.0.98>/webapps/<reportservice>`
   - Delete the JasperReports Server schema/database and recreate it.
10. For cluster upgrades:
    - **Primary node:** Select Upgrade and point to the content zip from the previous JRS instance.
    - **Secondary nodes:** Select New, then Cluster mode, Additional (Web-app deploy Only).

   > [!WARNING]
   > Provide the Primary node database details when prompted.

11. Use a new and clean Tomcat 9.0.98 for the upgrade.
12. Log in to Broadcom Support Online, navigate to the Classic PPM Product Support download page. Search for `ca_ppm_jaspersoft_9.x_.zip`. Save to a local directory.
13. Unzip to a new folder (e.g., `/opt/jasperreports` or `C:\Jasperreports`).

    > [!NOTE]
    > Unzip into the root drive to avoid the "file name is too long" exception (e.g., `C:\jaspersoft` or `/fs0/`).

14. Run the installer:
    - **Linux:** `chmod u+x install.sh && install.sh`
    - **Windows:** `install.bat`

15. Select **Upgrade** for Installation Type.
16. Select **New DB Upgrade**.
17. Select the existing Jaspersoft version.
18. Enter the Apache Tomcat 9.0.98 directory.
19. Enter Jaspersoft web app name and port.
20. (Optional) Configure mail settings.
21. Enter the absolute path to Chrome or Chromium browser.
22. Select Installation Mode:
    - **Standalone** for standalone servers
    - **Cluster** for cluster deployments (Primary or Additional node)

   > [!WARNING]
   > If deploying an additional node, provide the database details for the Primary Node.

23. For the dedicated scheduler instance decision:
    - **Yes** — If you do not want a separate scheduler instance.
    - **No** — If you want a separate scheduler instance.

   > [!WARNING]
   > A separate scheduler node is only applicable in Cluster installation mode.

24. For Installation Keystore Override (visible when existing keystores are found):
    - **Yes** — New keystores created; old keystores backed up to `jaspersoft_keystore_backup`.
    - **No** — Existing 8.1.1 keystores are used.
25. Provide the absolute path of the Jaspersoft content zip file exported from the previous Jaspersoft.
26. Verify the properties entered and wait for the installation to complete.
27. After installation, copy the tenant-level keystores from `<old-tomcat>/webapps/reportservice/WEB-INF/config/*` to `<new-tomcat>/webapps/reportservice/WEB-INF/config/`.

---

## Upgrade the Jaspersoft Server: Same Database Option


> [!NOTE]
> Same (in-place) DB is only supported from Jaspersoft 8.1.1 to 9.0. Older versions (5.6.1, 6.1.0, 6.4.2, 7.1.0, 7.1.3, 7.8) do not support Same DB upgrades.

**Requirements:**
- Use a fresh and clean Apache Tomcat 9.0.98 server.
- Same DB upgrade applies to all tenants/organizations in the Jaspersoft setup.
- The CA Jaspersoft installer does not make any backup — make all backups before triggering the upgrade.
- Certified for Oracle 19c, PostgreSQL 14, and Microsoft SQL Server 2019.
- Make a backup of the tenant-level keystores from `<old-tomcat>/webapps/reportservice/WEB-INF/config/*`.


1. Verify that JasperReports Server 8.1.1 is configured.
2. Verify that Clarity 16.2.1 or higher is installed.
3. Verify that the csk content was imported.
4. Export server-level data from the old JRS: **Manage > Server Settings > Export**.
5. Download AdoptOpenJDK 17.0.12+7 and Tomcat 9.0.98. Set `JAVA_HOME` and PATH.
6. Back up the existing JasperReports Server instance (WebApp) and database.
7. Shut down the Tomcat services.
8. If this is a second attempt, delete the previous `<Tomcat 9.0.98>/<WebApp>` folder.
9. For cluster upgrades, same approach as New DB (Primary then Additional nodes). Provide Primary node database details when prompted.
10. Use a new and clean Tomcat for the upgrade.
11. Download `clarity_jaspersoft_9.x` from Broadcom Support. Unzip to a new folder.
12. Run the installer:
    - **Linux:** `chmod u+x install.sh && install.sh`
    - **Windows:** `install.bat`
13. Select **Upgrade**, then **Same DB (In-Place) Upgrade**.
14. Select the existing Jaspersoft version.
15. Enter the Apache Tomcat directory.
16. Enter Jaspersoft web app name and port.
17. (Optional) Configure mail settings.
18. Enter the absolute path to Chrome or Chromium.
19. Select Installation Mode and scheduler options.
20. Select the Database Server Type and provide the required information.
21. Press `1` to select TCP as the JDBC Protocol Type.
22. For Installation Keystore Override:
    - **Yes** — New keystores created; old keystores backed up.
    - **No** — Existing 8.1.1 keystores are used.
23. Verify properties and wait for installation to complete.
24. After installation, copy the tenant-level keystores from the older Tomcat service to the newer Tomcat 9.0.98.

---

## Verify the JasperReports Server Installation


1. Start the JasperReports Server if it has not already started.
2. Open `http://<domain_name>:<portnumber>/<jasperwebcontext>/`.
3. Verify that you can open the JasperReports Server login page.
4. Log in using the superuser credentials.
5. Review `install.log` for any errors.

> [!TIP]
> Jaspersoft Upgrade Tips:
> - The **Create and Update Jaspersoft Users** job **Full Sync** option deletes all user folders with no content.
> - Create a small amount of custom Jaspersoft folders for each team.
> - For better performance, do not create more than 500 user folders.

---

## Post Installation Configuration


1. Navigate to the Classic PPM runtime `bin` directory.
2. Run to verify you have the latest CSK changes:
   ```
   admin content csk
   ```
3. Import the Jaspersoft Advanced Reporting content:
   ```
   admin content-jaspersoft csk -userName superuser -password <password> upgrade
   ```
4. Review the screen output and logs.

### Generate the Key Store File


> [!NOTE]
> Skip this step if you already copied the tenant-level keystores from the older Tomcat 9 service to the newer Tomcat 9.0.98 service.


1. Navigate to `<clarity_home>/bin`.
2. Generate a key store:
   ```
   admin jaspersoft keystore
   ```
   Or to specify a key and password:
   ```
   admin jaspersoft generate [-key <key> -password <password>]
   ```
3. Copy the generated `<orgname>.jks` and `<orgname>.properties` files to `<Tomcat>/webapps/<jasperwebcontext>/WEB-INF/config`.
4. Start the Tomcat service.

### Update Profile Attributes


After the JasperReports Server version upgrade and key store file regeneration:

```
admin update jasperParameters
```

This updates profile attributes so they can be re-encrypted.

> [!IMPORTANT]
> **Post-Upgrade Requirements — Three key actions after upgrading to Jaspersoft 9.0:**
> 1. **Run the Restore Domains job** — Imports the out-of-the-box domains available with Jaspersoft 8.1.1.
> 2. **Run the Load Data Warehouse job** — Adds all custom attributes and customizations into Jaspersoft domains.
> 3. **Update the Domain Schema** — For custom domains from out-of-the-box domains: navigate to **Home > Advanced Reporting > Manage > Update Domain Schema** and select the relevant Domain Name and Domain Schema.

---

## Upgrade Advanced Reporting Content


Follow these steps:

1. Open a command prompt in `install directory/bin`.
2. Execute:
   ```
   admin content-jaspersoft <contentPackId> upgrade [-userName <user name>] [-password <password>] [-force]
   ```

   - **ContentPackId** — Add-in ID to associate with the Advanced Reporting content installation.
   - **userName** — Super user Jaspersoft user name.
   - **password** — Password for the Jaspersoft super user.
   - **force** (optional) — Re-import the upgrade content only (use after a previous upgrade with data inconsistency).

---

## Restore Domains after Upgrading Advanced Reporting Content


The domains imported during the Advanced Reporting content upgrade can become corrupt, leading to incorrect data, missing data, or reports that do not run correctly.

Follow these steps:

1. Open a command prompt in `install directory/bin`.
2. Execute:
   ```
   admin content-jaspersoft <contentPackId> restoreDomains [-userName <userName>] [-password <password>]
   ```

---

## UI Customizations During Upgrade (OP/SaaS)


New releases of Clarity attempt to provide backward compatibility. However, Clarity cannot ensure that all customizations from a previous release still apply.

> [!NOTE]
> Review your customized theme after every major release. If necessary, modify and update your customized theme.

---

## Post-Upgrade Folder Level and User Level Security (OP/SaaS)


After the upgrade, the folder-level or user-level security can get reset by the installer.

Follow these steps:

1. Log in to Clarity Advanced Reporting with an account that does not have administrative access.
2. Test reports by clicking **Home > Reports and Jobs** and launching any default report.
3. If you encounter the **RPT-0023** error, folder-level access permissions have been reset.
4. To fix, change the folder-level access for `ROLE_USER` from **No Access** to **Read Only**.

---

## Related
- [[_MOC Install Upgrade]]

%%Source: p2884-2901%%
