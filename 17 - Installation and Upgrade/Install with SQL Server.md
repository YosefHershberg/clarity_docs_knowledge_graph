---
title: Install Clarity With Microsoft SQL
tags:
  - admin
  - onprem
aliases:
  - Install with SQL Server
canonical: true
audience: admin
domain: installation
---
# Install Clarity With Microsoft SQL

Use the following checklist to assist you with new installations. SaaS administrators can skip the hardware-related configuration items that do not apply.

**Installation Checklist:**
- Clarity Pre Installation
- Configure a Database with Microsoft SQL Server
- Review the Imported SQL Server Database Options
- Configure the Tomcat Application Server and Java
- Configure Java Environment Variables on the Application Server
- Implement Microsoft SQL Advanced Security Encryption
- Run the Installation Checker (checkinstall)
- Run the Installation Script
- Post-Install: Complete the Installation
- Post-Install: Verify the Installation
- Install the Data Warehouse

---

## Clarity Pre Installation

### Pre-Install Requirements

1. If you are re-installing over a previous fresh install or migrating to a new server, back up your installation directory and database. Otherwise, skip this step and perform a new install.
2. Verify the third-party software supported for this release. See the Hardware and Software Compatibility Specifications page.
3. Verify that you have the required license key information to install some third-party software products.
4. Verify that you have administrator rights for the servers.
5. Disable any custom database triggers, custom unique restraints, or antivirus scanners that can interfere with the installation scripts.
6. Spaces in the PATH variable may cause difficulty on a Windows server. You can escape entries using quotes. For example, change `;C:\Program Files (x86)\;` to `;"C:\Program Files (x86)\"`. The short name equivalent is `C:\Progra~2\`.

   > [!NOTE]
   > It is best practice to keep Clarity on a simple path like `C:\Clarity`.

7. Verify you can access the installation media and database images. The installation media contains the following base images:
   - Extract `install.jar`
   - Navigate to `install-packages\<clarityversion>\package.jar\database\backups`

8. Verify that you do not install a test or development environment on the same server as a production environment.
9. As a database administrator, follow the Microsoft SQL Server documentation to install the database software. Verify that it is operational before configuring it for Clarity.

### Configure Clarity System Administration

During and after the installation, use **Clarity System Administration (CSA)** to stop, start, and monitor the services in the cluster. The Clarity services include:

- **app** — The application service handles client requests. Always managed.
- **beacon** — Communicates with servers and ensures they are in sync.
- **bg** — Background services. Required to be managed.
- **nsa** — The system administration service. Always managed. One per cluster.

### Database Backup Images for New Installations

Clarity uses a backup-based database deployment mechanism. The installation media provides pre-built, fully populated database backup base images for both the application and data warehouse databases.

---

## Configure a Clarity Database with Microsoft SQL Server

After you install SQL Server, complete the following tasks to import and configure the database for use with Clarity:

1. Set up valid login credentials for Clarity. This login name and password are the values you specify in CSA to log in to the database.
2. Set the Microsoft SQL Server Database Schema name to `niku`. This name must be the Default Schema for the login user you created.
3. Import the database backup image. On the Clarity installation media, locate the MSSQL database image in the `<root>/database` folder.
4. Save the database backup to a temporary location on the database server.
5. Use the **Restore Database** tool in Microsoft SQL Server Management Studio to restore the base image:
   - **To database:** `niku`
   - **From device:** `c:\<temporary location>\mssql_base.db`
6. Verify the import. Remove the temporary folder and its contents.
7. Associate the imported database with your SQL server security user by running the following as the `sa` user:
   ```sql
   USE niku
   ALTER USER niku WITH LOGIN=<your security user>
   ```
8. Grant the `VIEW SERVER STATE` permission:
   ```sql
   GRANT VIEW SERVER STATE to <your security user>
   ```

---

## Review the Imported SQL Server Database Options

> [!WARNING]
> Mixed collation settings are not supported. If you change the server-level default from `SQL_Latin1_General_CP1_CI_AS` to another collation, create a new SQL Server instance with the correct collation before creating the Clarity database.

The import procedure creates the database with the following options:

| Option | Value / How to Apply |
|---|---|
| `ARITHABORT` | `ON` — `ALTER DATABASE <database> SET ARITHABORT ON` |
| `ANSI NULLS` | `ON` — `ALTER DATABASE <database> SET ANSI_NULLS ON` |
| `QUOTED IDENTIFIER` | `ON` — `ALTER DATABASE <database> SET QUOTED_IDENTIFIER ON` |
| Compatibility level | MS SQL 2017: `140` — `EXEC SP_DBCMPTLEVEL <database>, 140`; MS SQL 2019: `150` — `EXEC SP_DBCMPTLEVEL <database>, 150` |
| Database Schema Name | `niku` — The login name can be anything, but the default schema name for the login user must be `niku` |
| Database user roles | `db_owner` — The user must be able to alter the Clarity schema and otherwise own the database |
| `READ COMMITTED SNAPSHOT` | `ON` — `ALTER DATABASE <database> SET READ_COMMITTED_SNAPSHOT ON` |
| `VIEW_SERVER_STATE` | Granted to database user — `GRANT VIEW SERVER STATE to niku` |
| `REMOTE QUERY TIMEOUT` | `sp_configure 'remote query timeout',0 reconfigure with override` |

---

## Configure the Tomcat Application Server and Java

1. Keep your systems up to date with the latest patches.
2. Install the appropriate versions of the following software on each server in the cluster:

   | Service | Required Product |
   |---|---|
   | Database service | Microsoft SQL |
   | nsa, app service | Apache Tomcat |
   | bg, Beacon service | AdoptOpenJDK |

3. Some third-party library JAR files (`jgroups-all.jar` and `xinclude.jar`) are shipped separately. The filename format is `thirdparty.libs.<release number>.jar` (for example, `thirdparty.libs.16.4.1.jar`). Retrieve this file from the installation media.

   > [!NOTE]
   > If you place the JAR file in the installation directory, the installer does not prompt you for the location.

4. Install Java. See Hardware and Software Compatibility Specifications for the specific AdoptOpenJDK version supported.

   - **Linux:** Log in as root, navigate to `/usr`, and extract the `OpenJDK11U-jdk_x64_linux_hotspot_x.x.x_x.tar.gz` file.
   - **Windows:** Extract the `OpenJDK11U-jdk_x64_windows_hotspot_x.x.x_x` file using tools such as Winzip.

5. Set or update the environment variables (`JAVA_HOME` and `PATH`) to point to the new Java.

---

## Configure Java Environment Variables on the Application Server

**Linux:** Edit the user `.profile` file and add or modify:

```
JAVA_HOME=/<Java home directory>
export JAVA_HOME

PATH=/<clarity home>/bin:$JAVA_HOME/bin:$PATH
export PATH
```

**Windows:** Open **Control Panel** and add or modify:

- **JAVA_HOME** — Example: `<Java home directory>`

  > [!NOTE]
  > The JAVA_HOME value cannot contain a semi-colon (`;`). If the value has a trailing backslash (`\`), the checkinstall script skips all scripts.

- **PATH** — Add to the beginning of the existing PATH: `<clarity home>\bin;%JAVA_HOME%\bin;%PATH`

---

## Implement Microsoft SQL Advanced Security Encryption

Clarity supports Microsoft SQL Database Encryption. You can implement it by following the steps outlined by Microsoft.

> [!NOTE]
> Depending on the configuration of SQL Server TDE, you may or may not need to modify the JDBC driver with new parameters.

**Example JDBC URL — MSSQL with SSL and Encryption:**
```
jdbc:sqlserver://server.xyz:1433;DatabaseName=niku;
trustServerCertificate=false;encrypt=true;trustStore=c:/foo;trustStorePassword=XXX
```

---

## Run the Installation Checker (checkinstall)

Run the Installation Checker on the designated server. Although this utility runs automatically at the start and end of installations and upgrades, you can also run it as a standalone utility.

Follow these steps:

1. Extract the Clarity installer to the Clarity application server.
2. Open a command prompt and navigate to the `checkinstall` directory.
3. Invoke the checkinstall command:

   **Linux:**
   ```
   sh checkinstall.sh
   ```

   **Windows:**
   ```
   checkinstall.bat
   ```

   > [!NOTE]
   > You are asked for the **Operator Username** and **Operator Email**. This information is stored as a record in the installation log.

4. If an unexpected end of file error occurs on Linux:
   ```
   dos2unix ./checkinstall.sh
   sh ./checkinstall.sh
   ```
   Or use:
   ```
   perl -i -pe 'y|\r||d' checkinstall.sh
   ```

5. Verify the results. The results include warnings, errors, and customizations.

**Result codes:**

| Code | Description |
|---|---|
| `INFO` | Check was successful. No potential problems detected. |
| `WARNING` | Potential problem. Address before running installation or upgrade. |
| `ERROR` | Serious problem. The installation or upgrade process does not continue. |

---

## Run the Installation Script

If you are installing a cluster, run the installation script on each server. When the script finishes, the installation process is not yet complete — finish using CSA.

> [!NOTE]
> Key points:
> 1. Record the CSA password created during the installation.
> 2. During install/upgrade, stop all Clarity services, and ensure there is no active database session.

> [!WARNING]
> During Apache Tomcat installation, you are asked if you want to install CSA locally. Enter `true` for the administration server only. Enter `false` for other servers in the cluster.

Follow these steps:

1. Navigate to the directory where you want to unpack the installer file:
   ```
   mkdir temp
   cd temp
   ```

2. Extract `install.jar` from the installation media:
   ```
   jar -xvf <path of the installation media>/install.jar
   ```

3. Run the installation script:

   **Linux:**
   ```
   chmod +x ./install.sh
   sh ./install.sh
   ```

   **Windows:**
   ```
   install.bat
   ```

4. Follow the on-screen instructions. Installation property descriptions:

   - **Third Parties Libraries Jar Directory** — Directory for the `thirdparty.libs.16.4.1.jar` file.
   - **Clarity Home Directory** — Directory to install Clarity.
   - **Clarity Temporary Directory** — Temporary directory used to copy shell and node scripts.
   - **JDK Home Directory** — Java JDK home directory.
   - **Beacon Multicast Address** — Default: `230.0.0.1`. Range: `224.0.0.0` to `239.255.255.255`. Recommend `239.x.x.x` subnet.

     > [!NOTE]
     > If multicast is disabled (common in public cloud), use JDBC ping instead.

   - **Beacon Multicast Port** — Default: `9090`.
   - **Beacon Client Port** — Default: `9091`.
   - **Super User Command Prefix** (UNIX only) — Command prefix utility, such as `sudo`.
   - **Super User Name** (UNIX only) — Replacement for the root superuser name.
   - **Install CSA** (Apache Tomcat only) — Enter `true` for the administration server, `false` for others.
   - **Tomcat Home Directory** (Apache Tomcat only) — Apache Tomcat home directory.
   - **CSA Web Port** (Apache Tomcat only) — Default: `8090`.
   - **Enter password** (Apache Tomcat only) — CSA password. Default: `admin`.
   - **Operator User Name** — Stored in the installation log.
   - **Operator Email Address** — Stored in the installation log.

---

## Post-Install: Complete the Installation

Follow these steps:

1. Verify that Clarity is accessible at: `http://<server name>:<port>/niku/nu`
   The default user ID and password are `admin/admin`.
2. Change your default password.
3. Install the PMO Accelerator add-in. See Add-in: PMO Accelerator.
4. Update access rights for users, groups, or OBS instances. Navigate to **Administration > Resources** and add the required global access rights to the admin user.

---

## Post-Install: Verify the Installation

Follow these steps:

1. Log in to Clarity System Administration (CSA).
2. View the log files:
   a. Click **Servers** in the left navigation pane.
   b. Click the server name and click **Logs**.
   c. In the **Log File** field, select the log file and click **Go**.
   d. (Optional) Click **Download** to download the file.

> [!ATTENTION]
> In Classic PPM, check the System Health Report and verify time settings. The server time should be the same (preferably down to the nanosecond) on the Clarity application server, Clarity database server, and Data Warehouse database server.

---

## Install the Data Warehouse

The data warehouse (DWH) is optimized specifically for reporting and analytics. It is installed on a separate schema from the Clarity database schema and populated at scheduled intervals by the **Load Data Warehouse** job.

> [!TIP]
> Set up the data warehouse before installing the Jaspersoft reporting server.

**Data warehouse contents:**
- Investments, ideas, projects, programs, applications, assets, other work, products, services
- Teams, tasks, financial plans, hierarchies, risks/issues/change requests, status reports (PMO Accelerator)
- Timesheets and notes, time entries and notes
- Financial transactions, resources, OBS and portfolio filters

**Characteristics:**
- Modeled on the STAR schema
- Consistent naming conventions, formats, and encoding structures
- Nonvolatile (separate schema from the Clarity database)
- Predefined configurable time slices

### (On-Premise only) Configure the Data Warehouse Database (Microsoft SQL Server)

**Required tasks:**
- Set up a login for Clarity
- Import the SQL Server database backup image
- Review the Imported SQL Server Database Options

**Set up a login name:** Set a valid login name and password in CSA. Set the Microsoft SQL Server Database Schema name to `niku` (this must be the Default Schema for the login user).

**Import the Data Warehouse Database Backup Image:**

1. Locate the MSSQL PPM_DWH database image in `<root>/database` on the installation media.
2. Save the database backup to a temporary location on the database server.
3. Use the **Restore Database** tool to restore the base image:
   - **To database:** `ppm_dwh`
   - **From device:** `c:\<temporary location>\dwh_mssql_base.db`
4. Verify the import, and remove the temporary folder.
5. Associate the imported database with your SQL server security user:
   ```sql
   USE ppm_dwh
   ALTER USER ppm_dwh WITH LOGIN=<your security user>
   ```
6. Grant `VIEW SERVER STATE`:
   ```sql
   GRANT VIEW SERVER STATE to <your security user>
   ```

**Review the Data Warehouse Imported Database Options:**

> [!WARNING]
> Mixed collation settings are not supported. Create a new SQL Server instance with collation `SQL_Latin1_General_CP1_CI_AS` if needed.

| Option | Value |
|---|---|
| `ARITHABORT` | `ON` |
| `ANSI NULLS` | `ON` |
| `QUOTED IDENTIFIER` | `ON` |
| Compatibility level | MS SQL 2017: `140`; MS SQL 2019: `150` |
| Database Schema Name | `ppm_dwh` |
| Database user roles | `db_owner` — requires `GRANT ALTER ANY LOGIN TO PPM_DWH` and `GRANT ALTER ANY LINKED SERVER TO PPM_DWH` |
| `READ COMMITTED SNAPSHOT` | `ON` |
| `VIEW_SERVER_STATE` | `GRANT VIEW SERVER STATE to ppm_dwh` |
| `REMOTE_QUERY_TIMEOUT` | `sp_configure 'remote query timeout',0 reconfigure with override` |

### (On-Premise only) Set Up a Database Link for the Data Warehouse

Create a Linked Server (MSSQL) to the Clarity Schema from the Data Warehouse schema.

**Required privileges:**
```sql
GRANT ALTER ANY LOGIN TO PPM_DWH
GRANT ALTER ANY LINKED SERVER TO PPM_DWH
```

> [!NOTE]
> You can revoke these privileges after successfully creating the DBLINK and running the Load Data Warehouse job. However, you must grant them again if you need to create a new DBLINK later.

> [!NOTE]
> **What's Next?**
> - [[Data Warehouse Setup]]
> - [[Post Upgrade Steps]]
> - Install PMO Accelerator Add-In and PMO Sample Data

## Related
- [[_MOC Install Upgrade]]

%%Source: p2776-2787%%
