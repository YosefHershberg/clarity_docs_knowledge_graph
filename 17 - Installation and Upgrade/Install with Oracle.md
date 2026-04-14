---
title: Install Clarity With Oracle
tags:
  - admin
  - onprem
aliases:
  - Install with Oracle
canonical: true
audience: admin
domain: installation
---
# Install Clarity With Oracle

Use the following checklist to assist you with new installations. SaaS administrators can skip the hardware-related configuration items that do not apply.

**Installation Checklist:**
- Clarity Pre Installation
- Configure a Database with Oracle
- Configure the Tomcat Application Server and Java
- Configure Java Environment Variables on the Application Server
- Run the Installation Checker (checkinstall)
- Run the Installation Script
- Post-Install: Additional Setup Configuration
- Post-Install: Complete the Installation
- Post-Install: Verify the Installation
- Install the Data Warehouse

---

## Clarity Pre Installation

### Complete the Pre-Install Steps

**Pre-Install Requirements:**

1. If you are re-installing over a previous fresh install or migrating to a new server, back up your installation directory and database. Otherwise, skip this step and perform a new install.
2. Verify the third-party software supported for this release. See the Hardware and Software Compatibility Specifications page.
3. Verify that you have the required license key information to install some third-party software products.
4. Verify that you have administrator rights for the servers.
5. Disable any custom database triggers, custom unique restraints, or antivirus scanners that can interfere with the installation scripts.
6. Spaces in the PATH variable may cause difficulty on a Windows server. You can escape the entries using quotes. For example, change `;C:\Program Files (x86)\;` to `;"C:\Program Files (x86)\"`. The short name equivalent is `C:\Progra~2\`.

   > [!NOTE]
   > It is best practice to keep Clarity on a simple path like `C:\Clarity`.

7. Verify you can access the installation media and database images. Clarity uses a backup-based database deployment mechanism.
   - Extract `install.jar`
   - Navigate to `install-packages\<clarityversion>\package.jar\database\backups` to get the database images.

8. Verify that you do not install a test or development environment on the same server as a production environment.
9. As a database administrator, install the database software following the related documentation. Verify that the database software is operational before configuring it for Clarity.

### Configure Clarity System Administration

During and after the installation, use **Clarity System Administration (CSA)** to stop, start, and monitor the services in the cluster. The Clarity services include:

- **app** — The application service handles client requests. Always managed.
- **beacon** — Communicates with servers and ensures they are in sync.
- **bg** — Background services. Required to be managed.
- **nsa** — The system administration service. Always managed. One per cluster.

> [!IMPORTANT]
> To deploy a Microservice Broker, see Getting Started with the Microservice Broker.

### Database Backup Images for New Installations

Clarity uses a backup-based database deployment mechanism. The installation media provides pre-built, fully populated database backup base images. Backup images are available for the application and data warehouse databases.

---

## Configure a Database with Oracle

### Configure Oracle

Install Oracle following the third-party documentation. Create a Clarity (formerly `niku`) database, tablespaces, and database user, then import the database schema from the backup file on the Clarity installation media.

1. For extended character handling on an Oracle server, set the NLS language to `AL32UTF8`.

   **UNIX:** Edit the UNIX user profile to add the NLS_LANG variable:
   ```
   NLS_LANG=AMERICAN_AMERICA.AL32UTF8
   EXPORT NLS_LANG
   ```

   **Windows:** Open the registry editor (`regedit`), navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\ORACLE\<Oracle Home>`, and change the value for key `NLS_LANG` to:
   ```
   AMERICAN_AMERICA.AL32UTF8
   ```

2. Set the required parameters for your new database:

   | Parameter | Value |
   |---|---|
   | Character Set | `AL32UTF8` |
   | National Character Set | `UTF8/AL16UTF16` |
   | `nls_date_format` | `YYYY-MM-DD HH24:MI:SS` |
   | `nls_sort` | `BINARY` |
   | `nls_comp` | `BINARY` |
   | `query_rewrite_enabled` | `true` |
   | `Cursor_sharing` | `FORCE` |

3. The recommended parameter settings for Oracle 19c use Automatic Memory Management (AMM). Adjust settings according to your environment.

### Create the Required Oracle Tablespaces (Sample Script)

Use the following script and adjust size as appropriate. The schema in the backup is `NIKU`, and the tablespaces are:

- `INDX_LARGE`
- `INDX_SMALL`
- `USERS_LARGE`
- `USERS_SMALL`

### Set the Database Required Oracle User Privileges

See the sample script file `RequiredPrivileges` for the required privileges for a Clarity schema user.

### Import the Application Database Backup Image (Oracle)

The Oracle database backup contains the complete schema needed for a new installation. The schema in the backup is `NIKU`.

Follow these steps:

1. On the Clarity installation media, locate the Oracle database image in the `<root>/database` folder.
2. Save the database backup to a location on the database server.
3. Initiate a sqlplus session as the system user and create an import directory:

   a. Log in to sqlplus:
   ```
   > sqlplus system/<system_password>
   ```

   b. Run the query to create an import directory:
   ```sql
   SQL> create or replace directory import_directory as '<database backup location>';
   ```

   c. Exit sqlplus.

4. Initiate the import:
   ```
   > impdp system/<system_password> DIRECTORY=import_directory transform=oid:n DUMPFILE=oracle_base.db SCHEMAS=niku LOGFILE=import.log
   ```

   > [!NOTE]
   > If you are using different tablespaces than those provided in the backup image, provide tablespace remapping parameters. See the Oracle documentation for `impdp`.

5. Compile invalid objects from the import. Log in to sqlplus as `sys` (sysdba) and issue:
   ```sql
   SQL> @utlrp.sql
   ```
   The `utlrp.sql` and `utlprp.sql` scripts are located in `$ORACLE_HOME/rdbms/admin`.

6. If Clarity is already configured, compile from the `bin` folder:
   ```
   admin db compile
   ```

### Configure Oracle Database Connectivity and Net Service Name

> [!NOTE]
> You can set up a database connection using SID or Service Name. Using both is optional.

1. Verify that the NLS language setting in the operating system is `AL32UTF-8`.
2. Configure an Oracle net listener service. Start the Oracle Net Configuration Assistant:
   - **UNIX:** `<oracle home>/bin/netca &`
   - **Windows:** Start Menu > Programs > Oracle > Oracle Home > Configuration and Migration Tools > Net Configuration Assistant

To create the TNS listener, use the following options:

| Screen | Option | Value |
|---|---|---|
| Welcome | Local Net Service Name Configuration | Selected |
| Net Service Name Configuration | Service Name | Enter the service name provided during Oracle database installation. Default: `niku` |
| TCP/IP | Host Name | `<database server name>` |

> [!NOTE]
> If you already have a configured TNS Listener on the server, you can skip this step.

---

## Configure Clarity with Oracle Database Encryption (On-Premise Only)

### Configure Oracle Net Encryption

Since June 2013, Net Encryption has been licensed with Oracle Enterprise Edition and does not require Oracle Advanced Security.

> [!TIP]
> For details, see the Oracle documentation for Configuring Data Encryption and Integrity.

Add lines to the `sqlnet.ora` file on both the client and server:

**Client options for `SQLNET.ENCRYPTION_CLIENT`:**

| Value | Description |
|---|---|
| `accepted` | Default. Client accepts secure net traffic if requested. |
| `rejected` | Client rejects any connection requiring secure net traffic. |
| `requested` | Security service is activated if server requests or requires it. |
| `required` | Client accepts connection only if server accepts secure traffic. |

**Server example:**
```
SQLNET.ENCRYPTION_SERVER=required
SQLNET.ENCRYPTION_TYPES_SERVER=<encryption algorithm>
```

**Supported encryption algorithms:**

- `AES256` — AES with a 256-bit key size
- `RC4_256` — RSA RC4 with a 256-bit key size
- `AES192` — AES with a 192-bit key size
- `3DES168` — Three-key 3DES (168-bit effective key)
- `AES128` — AES with a 128-bit key size
- `RCA_128` — RSA RC4 with a 128-bit key size
- `3DES112` — Two-key 3DES (112-bit effective key)
- `RC4_56` — RSA RC4 with a 56-bit key size
- `DES` — DES (56-bit effective key)
- `RC4_40` — RSA RC4 with a 40-bit key size

### Implement Oracle Advanced Security Encryption

Oracle Advanced Security provides:

- **Transparent Data Encryption (TDE)** — Protects data from media theft.
- **Data encryption and integrity** — Ensures privacy of communications.
- **Strong authentication** — Kerberos, PKI, Biometrics, RADIUS-compliant smart cards.

Follow these steps:

1. Set the `EncryptionLevel` property in the JDBC URL to `accepted`, `requested`, or `required`.
2. Set the `EncryptionTypes` property in the JDBC URL.

**Example JDBC URLs:**

Oracle without encryption:
```
jdbc:oracle:thin:@//<hostname>:<port>/<service_name>
```

Oracle with encryption:
```
jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=*****)(PORT=****))
(CONNECT_DATA=(SERVICE_NAME=***)(SERVER=dedicated))(SECURITY=(ENCRYPTION_CLIENT=requested)
(ENCRYPTION_TYPES_CLIENT=AES256)))
```

Oracle with SSL:
```
jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCPS)(HOST=server.xyz.com)
(PORT=XXXX))(CONNECT_DATA=(SERVICE_NAME=XXXX)(SERVER=dedicated))
(CLARITY_PARAMETERS=(javax.net.ssl.trustStore=/opt/keystore)
(javax.net.ssl.trustStorePassword=XXX)))
```

Oracle load balanced between multiple hosts:
```
jdbc:oracle:thin:@(DESCRIPTION=(RETRY_COUNT=20)(RETRY_DELAY=10)
(ADDRESS_LIST=(LOAD_BALANCE=ON)
(ADDRESS=(PROTOCOL=tcp)(HOST=server1.xyz.com)(PORT=XXXX))
(ADDRESS=(PROTOCOL=tcp)(HOST=server2.xyz.com)(PORT=XXXX)))
(CONNECT_DATA=(SERVICE_NAME=SERVICENAME)))
```

### Configure the JDBC URL in CSA

Modify the JDBC URL in CSA to ensure Clarity can connect with encryption enabled.

> [!TIP]
> The value of the EncryptionLevel property is ignored if set to `rejected`. Separate multiple EncryptionTypes values with commas and enclose the entire set in parentheses.

---

## Configure Multitenancy in Oracle

Oracle Multitenant architectures support next-generation cloud databases with isolation, agility, and scale. A multitenant container database (CDB) can hold many pluggable databases (PDBs).

Follow these steps:

1. As a database administrator, install and configure your Oracle MT enabled database:
   a. Create a container for Clarity 15.3 or higher.
   b. Create your PDB, directory, and permissions.
   c. Query your PDB and resolve any connection issues.
2. Log in to CSA.
3. On the **Overview** page, click the link for your Clarity server instance.
4. Click the **Database** tab.
5. Under **Internal Connection: Niku**, complete the following:
   a. Select the **Specify URL** check box. The JDBC URL field appears.
   b. Change `SID` to `ServiceName`.
   c. Set the `ServiceName` parameter to the name of your PDB.

Example JDBC URL string:
```
jdbc:oracle:thin:@//"hostname":"port"/"service_name"; ServiceName=serviceTNS;
BatchPerformanceWorkaround=true; InsensitiveResultSetBufferSize=0; ServerType=dedicated;
supportLinks=true; AlternateServers=(server2:1115;server3:1115); LoadBalancing=true
```

---

## Configure the Tomcat Application Server and Java

1. Keep your systems up to date with the latest patches.
2. Install the appropriate versions of the following software on each server in the cluster:

   | Service | Required Product |
   |---|---|
   | Database service | Oracle |
   | nsa, app service | Apache Tomcat |
   | bg, Beacon service | AdoptOpenJDK |

3. Some third-party library JAR files (`jgroups-all.jar` and `xinclude.jar`) are shipped separately. The filename format is `thirdparty.libs.<release number>.jar` (for example, `thirdparty.libs.16.4.1.jar`). Retrieve this file from the installation media.

   > [!NOTE]
   > If you place the JAR file in the installation directory, the installer does not prompt you for the location.

4. Install Java. See Hardware and Software Compatibility Specifications for the specific AdoptOpenJDK version supported.

   - **Linux:** Log in as root, navigate to `/usr`, and extract the `OpenJDK11U-jdk_x64_linux_hotspot_x.x.x_x.tar.gz` file. Java is installed in `/usr/` by default.
   - **Windows:** Extract the `OpenJDK11U-jdk_x64_windows_hotspot_x.x.x_x` file to the Java directory on your system.

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

- **JAVA_HOME** — Specifies the Java home directory. Example: `<Java home directory>`

  > [!NOTE]
  > The JAVA_HOME value cannot contain the semi-colon (`;`) character. If the value has a trailing backslash (`\`), the checkinstall script skips all scripts.

- **PATH** — Add to the beginning of the existing PATH: `<clarity home>\bin;%JAVA_HOME%\bin;%PATH`

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

4. If an unexpected end of file error occurs on Linux, convert the script with `dos2unix` and run it again:
   ```
   dos2unix ./checkinstall.sh
   sh ./checkinstall.sh
   ```
   Or use this alternative:
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

The checker produces a zipped report archive: `checkinstall-results_<timestamp>.zip` located in `checkinstall/check-logs`.

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
   - **Clarity Home Directory** — Directory to install Clarity. Created if it does not exist.
   - **Clarity Temporary Directory** — Temporary directory used to copy shell and node scripts.
   - **JDK Home Directory** — Java JDK home directory.
   - **Beacon Multicast Address** — Multicast address for service discovery. Default: `230.0.0.1`. Must be in range `224.0.0.0` to `239.255.255.255`. We recommend an address in the `239.x.x.x` subnet.

     > [!NOTE]
     > If multicast is disabled (common in public cloud), use JDBC ping instead.

   - **Beacon Multicast Port** — Port for service discovery. Default: `9090`.
   - **Beacon Client Port** — Server port for the Beacon service. Default: `9091`.
   - **Super User Command Prefix** (UNIX only) — Command prefix utility, such as `sudo`.
   - **Super User Name** (UNIX only) — Replacement for the root superuser name.
   - **Install CSA** (Apache Tomcat only) — Enter `true` for the administration server, `false` for others.
   - **Tomcat Home Directory** (Apache Tomcat only) — Apache Tomcat home directory.
   - **CSA Web Port** (Apache Tomcat only) — Web port for CSA. Default: `8090`.
   - **Enter password** (Apache Tomcat only) — CSA password. Default: `admin`.
   - **Operator User Name** — User name stored in the installation log.
   - **Operator Email Address** — Email address stored in the installation log.

---

## Post-Install: Additional Setup Configuration

Perform the following additional steps for Oracle deployments only:

1. Grant required privileges:
   a. Connect to the Oracle database as the `sys` user (sysdba).
   b. Execute:
   ```sql
   GRANT CREATE ANY CONTEXT, DROP ANY CONTEXT TO <Clarity_database_user>;
   ```

2. Grant package execution rights:
   a. Still connected as SYSDBA, execute:
   ```sql
   GRANT EXECUTE ON SYS.DBMS_SESSION TO <Clarity_database_user>;
   ```

   > [!IMPORTANT]
   > These privileges are mandatory for Clarity functionality and must not be revoked after the upgrade.

3. After completing a new Clarity installation:
   a. Enable the feature toggle:
   ```
   admin toggle-feature IMPERSONATEDBY_SESSION_CONTEXT_VARIABLE_DE168694 1
   ```
   b. Run database bootstrap:
   ```
   admin db db-bootstrap-odf -Dodf.triggers=true -Dodf.force=false -Dodf.restoreNonCustomizedViews=false
   ```
   c. Restart the services.

---

## Post-Install: Complete the Installation

Follow these steps:

1. Verify that Clarity is accessible from a browser at: `http://<server name>:<port>/niku/nu`
   The default user ID and password are `admin/admin`. If the default HTTP port 80 is used, omit the `<port>` value.
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
- Modeled on the STAR schema (includes Investment, Resource, Portfolio, Timesheet, and Project objects)
- Consistent naming conventions, formats, and encoding structures
- Nonvolatile (separate schema from the Clarity database)
- Predefined configurable time slices

### (On-Premise only) Configure the Data Warehouse Database (Oracle)

**Required tasks:**
- Set the required Data Warehouse Oracle database parameters
- Estimate the Data Warehouse Size
- Create the required Data Warehouse Oracle tablespaces
- Set the required Data Warehouse Oracle user privileges
- Import the Data Warehouse database backup image
- Configure database connectivity to Oracle

**Required Oracle database parameters:**

| Parameter | Value |
|---|---|
| Character Set | `AL32UTF8` |
| National Character Set | `UTF8/AL16UTF16` |
| `nls_date_format` | `YYYY-MM-DD HH24:MI:SS` |
| `nls_sort` | `BINARY` |
| `nls_comp` | `BINARY` |
| `query_rewrite_enabled` | `true` |
| `Cursor_sharing` | `FORCE` |

**Estimate the Data Warehouse Size:**

```sql
SELECT ESTIMATED_DWH_SIZE_IN_GB FROM DWH_ESTIMATE_SIZE_V
```

Run this query after setting an Entity and the Timeslice job has run on Clarity.

**Data Warehouse tablespaces** (schema in backup is `PPM_DWH`):
- `DWH_PPM_DATA_DIM`
- `DWH_PPM_DATA_FACT`
- `DWH_PPM_INDX_DIM`
- `DWH_PPM_INDX_FACT`

**Import the Data Warehouse Oracle Database Backup Image:**

1. Locate the Oracle PPM_DWH database image in `<root>/database` on the installation media.
2. Save the database backup to a location on the database server.
3. Create an import directory in sqlplus:
   ```
   > sqlplus system/<system_password>
   SQL> create or replace directory import_directory as '<database backup location>';
   ```
4. Initiate the import:
   ```
   > impdp system/<system_password> DIRECTORY=import_directory transform=oid:n DUMPFILE=dwh_oracle_base.db SCHEMAS=ppm_dwh LOGFILE=ppm_dwh_import.log
   ```
5. Compile invalid objects:
   ```sql
   SQL> @utlrp.sql
   ```
   Or from the Clarity Install `bin` folder:
   ```
   admin db compile -Ddb.id=Datawarehouse
   ```

### (On-Premise only) Set Up a Database Link for the Data Warehouse

Create a Database Link (Oracle) to the Clarity Schema from the Data Warehouse schema.

**Required privilege:**
```sql
CREATE DATABASE LINK TO PPM_DWH
```

> [!NOTE]
> You can revoke this privilege after successfully creating the DBLINK and running the Load Data Warehouse job. However, you must grant it again if you need to create a new DBLINK later.

**Default link name:** `PPMDBLINK` (created during Save on the Data Warehouse tab in CSA using the EZCONNECT method)

**Create DBLINK using the procedure:**
```sql
CMN_DBLINK_SP(
  P_DB_LINK_NAME VARCHAR2,
  P_CLARITY_DB_HOST_NAME VARCHAR2,
  P_CLARITY_DB_PORT NUMBER,
  P_CLARITY_DB_SERVICE_NAME VARCHAR2,
  P_CLARITY_SCHEMA_NAME VARCHAR2,
  P_CLARITY_PASSWD VARCHAR2
)
```

Example:
```sql
EXEC CMN_DBLINK_SP ('PPMDBLINK','<hostname>',1521,'CLARITY','NIKU','NIKU');
```

For RAC databases, use the service name:
```sql
EXEC CMN_DBLINK_SP ('PPMDBLINK','hostname',1521,'PERF_SERVICE','niku','niku');
```

**Verify EZCONNECT is enabled:**

1. Navigate to `$ORACLE_HOME\network\admin`.
2. Open `sqlnet.ora` and verify:
   ```
   NAMES.DIRECTORY_PATH= (TNSNAMES, EZCONNECT)
   ```
3. Add `EZCONNECT` if not present and save the file.

**Troubleshooting the Data Warehouse Link:**

1. Verify the privilege is granted to `PPM_DWH`:
   ```sql
   CREATE DATABASE LINK TO PPM_DWH
   ```
2. Verify EZCONNECT is configured in `sqlnet.ora`.
3. Test the DBLINK:
   ```sql
   SELECT count(1) FROM SRM_RESOURCES@PPMDBLINK
   ```

**If the default database link does not work:**

Create a custom database link:
```sql
CREATE DATABASE LINK <LINK_NAME>
  CONNECT TO <CLARITY_USER_NAME> IDENTIFIED BY <CLARITY_USER_PWD>
  USING '<SERVICE_NAME>';
```

Then in CSA's **Data Warehouse** tab:
- Check **Custom Database Link** checkbox
- Enter the link name in **Custom Database Link** field

> [!ATTENTION]
> If you experience performance issues with Clarity on Oracle 19c, work with Oracle and Broadcom support to install the following patches:
> - Patch 30858919: LG* PROCESS HAS MEMORY LEAK
> - Patch 30381614: SESSIONS BLOCKED WAITING FOR GC WAITS FOR A LONG TIME
> - Pre-requisite for both: Patch 30557433: DATABASE RELEASE UPDATE 19.6.0.0.0

## Related
- [[_MOC Install Upgrade]]

%%Source: p2754-2775%%
