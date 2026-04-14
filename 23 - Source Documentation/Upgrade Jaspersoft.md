# Upgrade Jaspersoft

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[17 - Installation and Upgrade/_MOC Install Upgrade|Installation and Upgrade]]
- Canonical notes:
- [[17 - Installation and Upgrade/Jaspersoft Upgrade]]
- [[17 - Installation and Upgrade/Jaspersoft Installation]]
- [[17 - Installation and Upgrade/Post Upgrade Steps]]
- [[17 - Installation and Upgrade/Upgrade Clarity]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Jaspersoft Support Matrix (#jaspersoft-support-matrix)
- H2: Deploying the Jaspersoft Patch (#deploying-the-jaspersoft-patch)
- H3: Pre-Requisites for Deploying the Patch (#pre-requisites-for-deploying-the-patch)
- H3: Deploying the Patch (#deploying-the-patch)
- H3: Post Deployment Steps (#post-deployment-steps)
- H3: Update JVM Arguments for Jaspersoft 9.0 Patch 2 (#update-jvm-arguments-for-jaspersoft-90-patch-2)
- H3: Update Catalina Options (#update-catalina-options)
- H2: Upgrade to Jaspersoft 9.0 and Migrate Advanced Reporting Content (#upgrade-to-jaspersoft-90-and-migrate-advanced-reporting-content)
- H3: Jaspersoft and UI Themes (#jaspersoft-and-ui-themes)
- H2: Upgrade the Jaspersoft Server: New Database Option (#upgrade-the-jaspersoft-server-new-database-option)
- H2: Upgrade the Jaspersoft Server: Same Database Option (#upgrade-the-jaspersoft-server-same-database-option)
- H2: Verify the JasperReports Server Installation (#verify-the-jasperreports-server-installation)
- H2: Post Installation Configuration (#post-installation-configuration)
- H3: Generate the Key Store File (#generate-the-key-store-file)
- H3: Update Profile Attributes (#update-profile-attributes)
- H3: Memory Leak Errors in Tomcat Logs (#memory-leak-errors-in-tomcat-logs)
- H2: Upgrade Advanced Reporting Content (#upgrade-advanced-reporting-content)
- H3: Restore Domains Job (#restore-domains-job)
- H3: Apply the JasperReports Server Cumulative Patch (#apply-the-jasperreports-server-cumulative-patch)
- H3: Restore Domains after Upgrading Advanced Reporting Content (#restore-domains-after-upgrading-advanced-reporting-content)
- H2: UI Customizations During Upgrade (OP/SaaS) (#ui-customizations-during-upgrade-opsaas)
- H2: Post-Upgrade Folder Level and User Level Security (OP/SaaS) (#post-upgrade-folder-level-and-user-level-security-opsaas)

> [!WARNING]
> **End of Life Announcement for CA Business Intelligence for Clarity**
> Broadcom is discontinuing support for CA Business Intelligence for Clarity (commonly known as Clarity Advanced Reporting powered by Jaspersoft). To learn more, see the official announcement.

Upgrading and patching your Clarity environment including Jaspersoft is very important. Jaspersoft 9.0 includes critical security fixes and it is highly advisable to upgrade. Falling too far behind can increase your risk exposure and compound maintenance time and cost.

---

## Jaspersoft Support Matrix

You need to be on Clarity 16.2.1 and on Jaspersoft 8.1.1 to upgrade to Jaspersoft 9.0.

| Jaspersoft Version | Supported Clarity Versions |
|---|---|
| 9.0.0 Patch 1 & 2 | 16.2.1 and above |
| 9.0.0 | 16.2.1 and above |
| 8.1.1 | 16.1.1 to 16.2.2 |
| 7.8.0 | 16.1.1, 16.1.0, 16.0.0, 15.9.3, 15.9.2, 15.9.1 |

> [!NOTE]
> To view the steps to upgrade Jaspersoft, see Upgrade to Jaspersoft 9.0 and Migrate Advanced Reporting Content.

---

## Deploying the Jaspersoft Patch

Use this section to deploy Jaspersoft 9.0 Patch 2 on an already installed Jaspersoft 9.0 environment. If you are currently on Jaspersoft 9.0 GA or Patch 1, you can apply this patch without reinstalling Clarity.

> [!IMPORTANT]
> Jaspersoft 9.0 Patch 2 (`9.0.0_6.6.x.x`) serves as a full installer for Jaspersoft 9.0. If you are currently using Jaspersoft 9.0 GA or Patch 1, you can upgrade by running the `install.bat deploy-web-app` or `install.sh deploy-web-app` commands from the extracted patch folder.

### Pre-Requisites for Deploying the Patch

Ensure that you backup the following folders before installing the patch:
- The Jaspersoft Web Deployment folder in Jaspersoft Tomcat (e.g., `reportservice` in Tomcat 9.0.98)
- The Clarity-Jaspersoft integration keystore: `<Jaspersoft tomcat>/webapps/reportservice/WEB-INF/config`
- The config folder (Oracle TCPS users): `<Jaspersoft tomcat>/webapps/reportservice/WEB-INF/config`
- The Jaspersoft installer keystores in the Home folder (Windows: `cd %userprofile%`)
- The `default_master_xxxx_xxxx.properties` file from `<Jaspersoft 9.0 Installer folder>/buildomatic/`

### Deploying the Patch

1. Download the Jaspersoft 9.0 Patch 2 installer archive (`clarity_jaspersoft_9.0.0_6.6.x.x.zip`) from the Broadcom Support site.
2. Extract the zip at the relevant location.
3. Shut down the Jaspersoft 9.0 Tomcat application server using `shutdown.bat` or `./shutdown.sh`.

> [!IMPORTANT]
> Delete the `reportservice` folder in `Tomcat/webapps` folder.

4. Copy the backed-up `default_master_xxxx_xxxx.properties` file to the unzipped patch location (`<Unzipped patch artifact>/buildomatic` folder).
5. Rename `default_master_xxxx_xxxx.properties` to `default_master.properties`.
6. Verify the values in `default_master.properties` (ensure correct Tomcat version).
7. Navigate to the patch location and run:
- **Windows:** `install.bat deploy-web-app`
- **Linux:** `install.sh deploy-web-app`

### Post Deployment Steps

1. Navigate to `<Jaspersoft tomcat>/webapps/reportservice/WEB-INF/config`. Copy the backed-up Clarity-Jaspersoft integration keystores and paste here.
2. If you are an Oracle TCPS user, restore the backed-up truststore to the `tcps-truststores` folder.
3. Delete the temporary folders in the `<Jaspersoft tomcat>` folder.
4. Start the Jaspersoft service using `startup.bat` or `./startup.sh`.
5. Ensure the Jaspersoft integration is working.
6. Verify the Jaspersoft version shows `Jaspersoft 9.0.0 Patch 2 (version 9.0.0_6.6.x.x)`.

### Update JVM Arguments for Jaspersoft 9.0 Patch 2

After applying Patch 2 (`9.0.0_6.6.0.2.6`), update the JVM arguments for both scheduler and non-scheduler Jaspersoft Tomcat instances:

```
jvmArgs: -Xms2048m -Xmx4096m -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+UseStringDeduplication -Doracle.jdbc.defaultNChar=true -Djava.awt.headless=true -Dcom.jaspersoft.stats.config=stats.properties -Dlog4j2.formatMsgNoLookups=true
```

> [!NOTE]
> - The `-Xms` and `-Xmx` values must be set based on your environment and sizing requirements.
> - The `-Dcom.jaspersoft.stats.config=stats.properties` argument disables Jaspersoft telemetry collection.

### Update Catalina Options

To address defect DE172103, add the following to Catalina options:

```
catalinaOpts: -Dorg.apache.catalina.connector.RECYCLE_FACADES=false
```

---

## Upgrade to Jaspersoft 9.0 and Migrate Advanced Reporting Content

Clarity SaaS customers enjoy an automatic upgrade. Clarity on-premise customers can decide to upgrade now or defer. On-premise customers must use the Clarity Jaspersoft installer (a customized wrapper written on top of the original third-party installer).

> [!ATTENTION]
> Key points when planning to install Jaspersoft 9.0:
> - You must be on Clarity 16.2.1 (or later) and Jaspersoft 8.1.1 to upgrade. Jaspersoft Studio 7.9 is supported with the Jaspersoft 9 Server.
> - Jaspersoft 9.0 includes an installation keystore. **Back up the keystore files** (`.jrsks` and `.jrsksp` in `<user.home.dir>`) before upgrade. On Windows: `C:\users\<user directory>`.
> - The superuser password is encrypted with installer keystores. If you forget your credentials, you will not be able to retrieve them.
> - Jaspersoft Advanced Reporting is available in English, Simplified Chinese, and the six core languages. Jaspersoft Studio is available only in English or Italian.
> - Jaspersoft 9.0 supports TCPS for the Oracle 19c database.
> - Jaspersoft 9.0 supports Microsoft SQL Server 2019.
> - Jaspersoft 9.0 supports Adopt Open JDK 17.0.12+7 and Tomcat 9.0.98.
> - Jaspersoft 9.0 requires Chrome/Chromium 124 or higher on the server.
> - When exporting content from Jaspersoft 9.0, use the **Legacy Key** option.
> - Jaspersoft 9.0 will not work on Internet Explorer. Use Chrome, Firefox, or Edge.

> [!NOTE]
> Upgrade to Jaspersoft 9.0 on Oracle TCPS/SSL is not supported. However, you can install a fresh instance and migrate content using Clarity's admin export and import commands:
> - Export: `./admin jaspersoft export -fromURL <8.1.1 Server URL> -fromUserName superuser -fromPassword <Password> -orgName <Org> -fileName <Export>.zip`
> - Import: `./admin jaspersoft import -toURL <9.0 Server URL> -toUserName superuser -toPassword <Password> -orgName <Org> -fileName <Export>.zip`

> [!ATTENTION]
> **Key Points to Remember During Upgrade:**
> - Backup the keystore files before upgrade.
> - Backup the Jaspersoft 8.1.1 database before the upgrade.
> - Upgrade Jaspersoft 9.0 using the same operating system user used for installing 8.1.1.
> - During upgrade, the old keystore will be upgraded to the new keystore.
> - When upgrading a Jaspersoft cluster, upgrade the primary instance first, then use the same user to upgrade other instances. Copy the upgraded keystores to all secondary servers.

### Jaspersoft and UI Themes

Jaspersoft theme CSS updates are included in the Clarity Studio UI themes. No action is required unless you applied customizations. Review modified or custom themes after every major release.

Theme behavior:
- Selecting a default Clarity Studio UI theme also applies to Advanced Reporting.
- Editing a theme requires logout/login for Advanced Reporting to reflect changes.
- Custom themes not in the Jaspersoft admin repository will show the default theme in Advanced Reporting.

---

## Upgrade the Jaspersoft Server: New Database Option

This upgrade process requires exporting server-level content from the previous release, then providing the content zip during the upgrade.

1. Verify JasperReports Server 8.1.1 is configured.
2. Verify Clarity 16.2.1 or higher is installed.
3. Verify csk content was imported onto the server.
4. Export server-level data: **Manage, Server Settings, Export**.
5. Download AdoptOpenJDK 17.0.12+7 and Apache Tomcat 9.0.98. Set `JAVA_HOME` and `PATH`.
6. Back up the existing JasperReports Server instance and database.
7. Shut down existing Tomcat services.
8. Create a new JasperReports Server database schema.
9. If this is a second attempt: delete the `<Tomcat9.0.98>/<WebApp>` folder and recreate the database schema.
10. For cluster upgrades: select Upgrade for the primary node; for secondary nodes, select New with Cluster mode and Additional (Web-app deploy Only).

> [!WARNING]
> Provide the Primary node database details when prompted for secondary nodes.

11. Use a new and clean Tomcat 9.0.98.
12. Download `ca_ppm_jaspersoft_9.x_.zip` from Broadcom Support.
13. Unzip to a new folder.

> [!NOTE]
> Unzip the installer into the root drive to avoid "file name is too long" exceptions (e.g., `C:\jaspersoft` or `/fs0/`).

14. Run the installer:
- **Linux:** `chmod u+x install.sh` then `install.sh`
- **Windows:** `install.bat`
15. For Installation Type, select **Upgrade**.
16. For Upgrade Method, select **New DB Upgrade**.
17. Select the existing Jaspersoft version.
18. Enter the Apache Tomcat 9.0.98 directory.
19. Enter the Jaspersoft web app name and port.
20. (Optional) Configure mail settings (hostname, port, protocol, username, password, sender address).
21. Enter the absolute path to Chrome or Chromium browser.
22. Select Installation Mode: Standalone or Cluster (Primary Node / Additional Node).
23. Configure scheduler instance options (if applicable).
24. Select Database Server Type and provide required information:

| Database | Key Prompts |
|---|---|
| **MSSQL** (Named Instance) | Hostname, Instance Name, Database Name, Username, Password |
| **MSSQL** (Default Port) | Hostname, Port, Database Name, Username, Password |
| **Oracle (Standalone)** | Hostname, Port, Username, Password, SID |
| **Oracle Cluster (RAC)** | Hostname, Port, Username, Password, Service Name |
| **PostgreSQL** | Hostname, Port, Database Name, Username, Password |

25. Press 1 to select TCP as the JDBC Protocol Type.
26. Installation Keystore Override (if existing keystores found):
- **Yes:** New keystores created; old ones backed up to `jaspersoft_keystore_backup`.
- **No:** Existing 8.1.x keystores will be used.
27. Provide the absolute path to the Jaspersoft content zip file.
28. Verify properties and wait until installation completes.
29. After installation, copy tenant-level keystores from the older Tomcat to the newer Tomcat 9.0.98 config folder.

---

## Upgrade the Jaspersoft Server: Same Database Option

Same (in-place) DB upgrade is only supported from Jaspersoft 8.1.1 to 9.0. Older versions require a new database installation or a fresh installation followed by the Clarity admin migrate command.

> [!NOTE]
> - Use a fresh and clean Apache Tomcat 9.0.98 server.
> - The existing Jaspersoft schema will be upgraded (no need to create a new schema).
> - Same DB upgrade applies to all tenants/organizations.
> - Same DB upgrade is certified for Oracle 19c, PostgreSQL 14, and Microsoft SQL Server 2019.

> [!IMPORTANT]
> - Back up tenant-level keystores from the older Tomcat.
> - The installer does not make any backup of the tomcat reportservice WAR file or DB schema. Make all backups before triggering the upgrade.

Follow the same steps as the New Database Option with these differences:
- For Upgrade Method, select **Same DB (In-Place) Upgrade**.
- No need to create a new database schema.
- The same database details and keystore handling apply.

> [!TIP]
> A Same DB upgrade can fail if you are running an unsupported release of Jaspersoft (minimum 8.1.1), Tomcat (recommend 9.0.98), or database (requires Oracle 19c, MS SQL 2019, or PostgreSQL 14).

---

## Verify the JasperReports Server Installation

1. Start the JasperReports Server.
2. Open `http://<domain_name>:<portnumber>/<jasperwebcontext>/`.
3. Verify the login page opens.
4. Log in using superuser credentials.
5. Review the `install.log` for errors.

> [!TIP]
> **Jaspersoft Upgrade Tips:**
> - The **Create and Update Jaspersoft Users** job Full Sync option deletes all user folders with no content.
> - Create a small number of custom Jaspersoft folders for each team.
> - For better performance, do not create more than 500 user folders.

---

## Post Installation Configuration

1. Open a command prompt and navigate to the Classic PPM runtime bin directory.
2. Run: `admin content csk`
3. Navigate to the Classic PPM runtime bin directory.
4. Run: `admin content-jaspersoft csk -userName superuser -password <password> upgrade`
5. Review the screen output and logs.

### Generate the Key Store File

> [!NOTE]
> Skip this step if you already copied tenant-level keystores during upgrade.

1. Navigate to `<clarity_home>/bin`.
2. Run: `admin jaspersoft keystore`
   Or to specify a key and password: `admin jaspersoft generate [-key <key> -password <password>]`
3. Copy the generated files (`.jks` and `.properties`) to `<Tomcat>/webapps/<jasperwebcontext>/WEB-INF/config`.
4. For clustered environments, copy to all nodes.
5. Start the Tomcat service.

### Update Profile Attributes

Run: `admin update jasperParameters`

This command updates the profile attributes so they can be re-encrypted.

> [!NOTE]
> **Post-Upgrade Requirements:**
> - Run the **Restore Domains** job to import out-of-the-box domains.
> - Run the **Load Datawarehouse** job to add custom attributes and customizations.
> - Update the Domain Schema if you have created custom domains from OOTB domains: Classic PPM > **Home, Advanced Reporting** > **Manage, Update Domain Schema**.

### Memory Leak Errors in Tomcat Logs

Occasionally you may see `WebappClassLoader checkThreadLocalMapForLeaks` errors in Tomcat when restarting the JasperReports Server. These have been reported on Linux but may appear on Windows.

**Resolution:** Verify the Tomcat process is not present after shutdown (e.g., `ps -ef | grep tomcat`). If present, kill the process gracefully (`kill -9 <ProcessID>`), then restart.

---

## Upgrade Advanced Reporting Content

You must generate the key store file before upgrading Advanced Reporting content.

Run:

```
admin content-jaspersoft <contentPackId> upgrade [-userName <user name>] [-password <password>] [-force]
```
- **ContentPackId:** The add-in ID associated with the content installation.
- **force:** (Optional) Re-import upgrade content only. Use after a previous upgrade with data inconsistencies.

### Restore Domains Job

Run the Restore Domains job to restore OOTB domains and dynamically update them with custom objects and attributes.

**Command line option:**

```
admin content-jaspersoft <contentPackId> restoreDomains [-userName <userName>] [-password <password>]
```

### Apply the JasperReports Server Cumulative Patch

This patch and the CA JDBC Adapter allow access to Jaspersoft Studio without VPN.

**Pre-Installation:**

1. Shut down the Tomcat service.
2. Back up the JasperReports Server database schema.
3. Zip the webapp folder and move to a backup location.

### Restore Domains after Upgrading Advanced Reporting Content

Domains imported during upgrade can become corrupt, showing incorrect data, missing data, or non-functioning reports.

Run:

```
admin content-jaspersoft <contentPackId> restoreDomains [-userName <userName>] [-password <password>]
```

---

## UI Customizations During Upgrade (OP/SaaS)

The JasperReports Server UI is customizable using CSS. New releases attempt to provide backward compatibility, but previous customizations may no longer apply.

> [!NOTE]
> Review your customized theme after every major release. Modify and update as necessary.

---

## Post-Upgrade Folder Level and User Level Security (OP/SaaS)

After upgrade, folder-level or user-level security can get reset by the installer.

1. Log in to Clarity Advanced Reporting with a non-administrative account.
2. In Release 15.3 or higher, test by clicking **Home, Reports, and Jobs** and launching any default report.
3. If you encounter the RPT-0023 error, folder-level access permissions have been reset.
4. To fix: change the folder-level access for **ROLE_USER** from **No Access** to **Read Only**.
