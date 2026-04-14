---
title: Install Clarity With PostgreSQL
tags:
  - admin
  - onprem
aliases:
  - Install with PostgreSQL
canonical: true
audience: admin
domain: installation
---
# Install Clarity With PostgreSQL

Use the following checklist to assist you with new installations:

- Configure a Database with PostgreSQL
- Configure the Tomcat Application Server and Java
- Configure Java Environment Variables on the Application Server
- Run the Installation Checker (checkinstall)
- Run the Installation Script
- Post-Install: Complete the Installation
- Post-Install: Verify the Installation
- Install the Data Warehouse
- Configure the Data Warehouse Database with PostgreSQL

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

7. Verify you can access the installation media and database images. Clarity uses a backup-based database deployment mechanism.
   - Extract `install.jar`
   - Navigate to `install-packages\<clarityversion>\package.jar\database\backups` to get the database images.

8. Verify that you do not install a test or development environment on the same server as a production environment.
9. As a database administrator, install the database software. Verify that it is operational before configuring it for Clarity.

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

## Configure a Database with PostgreSQL

> [!NOTE]
> Please review the Hardware and Software Compatibility guide to check the PostgreSQL version supported by this release.

### Preparing the Database

> [!NOTE]
> Set the PostgreSQL database locale to **US English** when installing or setting up the PostgreSQL database.

1. After installing the PostgreSQL database, initialize it:
   ```
   /usr/pgsql-14/bin/postgresql-14-setup initdb
   ```

2. Enable and start the PostgreSQL service:
   ```
   systemctl enable postgresql-14
   systemctl start postgresql-14
   ```

3. Change the host authentication from `ident` to `md5` to enable password-based authentication. Navigate to `/var/lib/pgsql/14/data/pg_hba.conf` and update:

   | Field | Original | Updated |
   |---|---|---|
   | `host all all 127.0.0.1/32` | `ident` | `md5` |

4. Add a line at the bottom of the file to enable remote connections:
   ```
   host    all    all    0.0.0.0/0    md5
   ```

5. If Clarity and PostgreSQL are on the same server, also update:
   ```
   host    all    all    ::1/128    md5
   ```
   (Change `ident` to `md5`)

6. Modify `/var/lib/pgsql/14/data/postgresql.conf` and change:
   ```
   listen_addresses = 'localhost'
   ```
   to:
   ```
   listen_addresses = '*'
   ```

### Create Tablespaces, Schemas, and Roles

Follow these steps:

1. Create a directory for tablespaces (outside the data directory):
   ```
   mkdir pgtablespace
   ```

2. Create a tablespace folder for Clarity:
   ```
   mkdir /var/lib/pgsql/pgtablespace/clarity
   ```

3. Create roles for the Clarity database:
   ```sql
   postgres=# create role ppmdb password 'niku' login nosuperuser nocreatedb nocreaterole connection limit -1;
   ```

4. Create a tablespace for Clarity:
   ```sql
   postgres=# create tablespace ppmdb_data owner ppmdb location '/var/lib/pgsql/pgtablespace/clarity';
   ```

5. Create the Clarity database:
   ```sql
   postgres=# create database ppmdb owner ppmdb tablespace ppmdb_data connection limit -1;
   ```

   > [!NOTE]
   > The role name and the database name should be the same.

6. Access the database and create a schema:
   ```
   -bash-4.2$ psql -d ppmdb
   ```
   ```sql
   create schema clarity authorization ppmdb
   ```

   > [!NOTE]
   > When you create the schema, ensure it is always named `clarity`. After importing the database, rename the schema to match the database name and the role name.

7. Import the database dumps provided by Broadcom:
   ```
   pg_restore -U postgres -d ppmdb --role ppmdb --no-owner --verbose --no-tablespaces \
     --schema "clarity" /var/lib/pgsql/14/backups/postgres_base_xxx.db
   ```

8. Rename the schema to match the database name and role name:
   ```
   -bash-4.2$ psql -d ppmdb
   alter schema clarity rename to ppmdb
   ```

9. You are now ready to install Clarity.

10. Log in to CSA and populate the required fields on the **Database** tab:

    - **Vendor** — PostgreSQL
    - **Hostname**
    - **Port**
    - **Database name**
    - **Schema name**
    - **Login name** — Role created in PostgreSQL
    - **Table Tablespace** and **Index Tablespace** — Tablespace created in PostgreSQL

    > [!NOTE]
    > You can also specify a URL instead of using the Hostname. Sample URL: `jdbc:postgresql://lvnprod019863.bpc.broadcom.net:5432/clarity1593_ppm`

11. After configuring the NSA, restart CSA:
    ```
    ./service stop start nsa
    ```

12. Create a loopback DB link for PostgreSQL stored procedures. Navigate to the `bin` folder where CSA is installed and execute:
    ```
    ./admin db create-db-link -Dtype=app -Dsysusername=postgres -Dsyspassword=xxxxx
    ```

    > [!NOTE]
    > The `-Dsysusername` can be any PostgreSQL user that has the superuser role.

**Key PostgreSQL configuration points to consider:**

- `Max_connections` (depends on memory)
- `Shared_Buffers` (depends on memory)
- `Max_worker_processes` (depends on CPU/memory)
- `Max_parallel_workers_per_gather` (depends on CPU/memory)
- `effective_cache_size` (depends on memory)

---

## Configure the Tomcat Application Server and Java

1. Keep your systems up to date with the latest patches.
2. Install the appropriate versions of the following software on each server in the cluster:

   | Service | Required Product |
   |---|---|
   | Database service | PostgreSQL |
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

### Configure the Data Warehouse Database with PostgreSQL

After installing Clarity, create roles and tablespaces for the Data Warehouse.

#### Create Tablespaces, Schemas, and Roles

Follow these steps:

1. Create a directory for tablespaces:
   ```
   mkdir pgtablespace
   ```

2. Create a tablespace folder for the DWH:
   ```
   mkdir /var/lib/pgsql/pgtablespace/clarity_dwh
   ```

3. Create roles for the DWH database:
   ```sql
   postgres=# create role dwhdb password 'niku' login nosuperuser nocreatedb nocreaterole connection limit -1;
   ```

4. Create a tablespace for the DWH:
   ```sql
   postgres=# create tablespace dwhdb_data owner dwhdb location '/var/lib/pgsql/pgtablespace/clarity_dwh';
   ```

5. Create the DWH database:
   ```sql
   postgres=# create database dwhdb owner dwhdb tablespace dwhdb_data connection limit -1;
   ```

   > [!NOTE]
   > The role name and the database name should be the same.

6. Access the database and create a schema:
   ```
   -bash-4.2$ psql -d dwhdb
   create schema ppm_dwh authorization dwhdb
   ```

7. Import the database dumps provided by Broadcom:
   ```
   pg_restore -U postgres -d dwhdb --role dwhdb --no-owner --verbose --no-tablespaces \
     --schema "ppm_dwh" /var/lib/pgsql/14/backups/dwh_postgres_base_xxx.db
   ```

8. Rename the schema:
   ```
   -bash-4.2$ psql -d dwhdb
   alter schema ppm_dwh rename to dwhdb
   ```

9. Create a foreign data wrapper to create a DB link:
   ```
   -bash-4.2$ psql -d dwhdb
   ```
   ```sql
   create extension postgres_fdw;
   grant usage on foreign data wrapper postgres_fdw to dwhdb;
   ```

10. After installing the Data Warehouse, log into CSA and populate the required details.

11. After configuring the NSA, restart CSA:
    ```
    ./service stop start nsa
    ```

12. Create a loopback DB link:
    ```
    ./admin db create-db-link
    ```

> [!NOTE]
> **What's Next?**
> - [[Data Warehouse Setup]]
> - [[Post Upgrade Steps]]
> - Install PMO Accelerator Add-In and PMO Sample Data

---

> [!NOTE]
> You can revoke the user privileges for MSSQL (`ALTER ANY LOGIN TO PPM_DWH` and `ALTER ANY LINKED SERVER TO PPM_DWH`) after you successfully create the DBLINK and run the Load Data Warehouse job. However, if you need to create a new DBLINK later, grant the privileges again.

## Related
- [[_MOC Install Upgrade]]

%%Source: p2788-2800%%
