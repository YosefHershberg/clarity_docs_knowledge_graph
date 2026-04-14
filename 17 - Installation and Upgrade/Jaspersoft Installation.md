---
title: Install Jaspersoft 8.1.1
tags:
  - admin
aliases:
  - Jaspersoft Installation
canonical: true
audience: admin
domain: installation
---
# Install Jaspersoft 8.1.1

This topic provides all the information you need to install Jaspersoft 8.1.1 for Classic PPM.

> [!WARNING]
> **End of Life Announcement for CA Business Intelligence for Clarity**
> Broadcom is discontinuing support for CA Business Intelligence for Clarity (commonly known as Clarity Advanced Reporting powered by Jaspersoft). To learn more, see the official announcement.

> [!ATTENTION]
> Key things to remember when planning to install Jaspersoft 8.1.1:
> - You need to be on Clarity 16.1.1 and Jaspersoft 7.8 to upgrade to Jaspersoft 8.1.1.
> - Jaspersoft 8.1.1 includes an installation keystore. **Create a backup** of the installation keystore (`<user.home.dir>/.jrsks` and `<user.home.dir>/.jrsksp`). Without this backup, you will not be able to access your data. On Windows, keystores are under `C:\users\<user directory>`.
> - Jaspersoft Advanced Reporting is available in English, Simplified Chinese, and six core languages.
> - Jaspersoft 8.1.1 supports TCPS for the Oracle 19c database.
> - Jaspersoft 8.1.1 does not work on Internet Explorer. Use Chrome, Firefox, or Edge.
> - When exporting content, use the **Legacy Key** option to ensure compatibility with all existing Jaspersoft servers.

> [!NOTE]
> Upgrade to Jaspersoft 8.1.1 on Oracle TCPS/SSL is not supported. However, you can install a fresh instance on Oracle TCPS and migrate content from 7.8 using these admin commands:
>
> Export: `./admin jaspersoft export -fromURL <Jaspersoft 7.8 Server URL> -fromUserName superuser -fromPassword <pwd> orgName <Org Name> -fileName <Export_Filename>.zip`
>
> Import: `./admin jaspersoft import -toURL <Jaspersoft 8.1 Server URL> -toUserName superuser -toPassword <pwd> orgName <Org Name> -fileName <Export_Filename>.zip`

---

## Advanced Reporting Architecture and Components

For best performance, Broadcom recommends the following minimum configuration:

- 20 GB RAM for each JVM
- 32 GB RAM for the OS
- One (1) interactive node
- One (1) scheduler node

For large deployments with over 1,000 simultaneous users, a three-node Jaspersoft cluster is recommended (one interactive node and two scheduler nodes).

**High-Performance Specifications:**

| Server | Specs |
|---|---|
| Clarity App Server | Dual 2.4 GHz Intel Xeon, 8 GB RAM |
| Clarity DB Server | MS SQL 2012, 8 Core 2.4 GHz Intel Xeon, 100 GB RAM |
| DWH/Jaspersoft Reports Server | MS SQL 2012, 6 Core 2.4 GHz Intel Xeon, 14 GB RAM |
| Jaspersoft Tomcat Server | Dual 2.4 GHz Intel Xeon, 8 GB RAM (32 GB recommended), JVM: 20 GB per node |

---

## Review the Prerequisites

- Verify that Classic PPM is installed or upgraded.
- Download the compatible software:
  - AdoptOpenJDK 11.0.15+10
  - Apache Tomcat 9.0.68
- Set `JAVA_HOME` and ensure the correct Java executables are referenced in the PATH:
  - **Windows:** `set PATH=%JAVA_HOME%\bin;%PATH%`
  - **Linux:** `export PATH=$PATH:$JAVA_HOME/bin`
- If this is a second attempt at installation:
  - Delete the Tomcat folder. Extract new content from the Tomcat zip file.
  - Delete the JasperReports Server Database/Schema and recreate it.
  - (Recommended) Extract the installer into a new folder.

**For Oracle 19c with TCPS — certificate steps:**

1. Navigate to the Java bin folder:
   ```
   cd jdk11.x.x/bin
   ```
2. Export the certificate:
   ```
   ./keytool -exportcert -keystore <keystore path> -storepass <keystore password> \
     -storetype <keystore type> -alias <keystore alias> -file <location/certificate name>
   ```
3. Import the certificate into the CA Certs directory:
   ```
   ./keytool -importcert -keystore <location of cacerts> -storepass <password of cacerts keystore> \
     -alias <keystore alias> -file <location/certificate name>
   ```
4. When prompted, type `yes` to trust the certificate.

> [!NOTE]
> To avoid the "filename is too long" exception, unzip the installer into the root drive (for example, `C:\jaspersoft` or `/fs0/`).

---

## Create the JasperReports Server Schema and Set Permissions

### Oracle

```sql
CREATE TABLESPACE "[JS User]_PPMJAS"
  DATAFILE '<ORACLE_BASE>\ORADATA\<SID>\PPM_JASPER_TS.DBF'
  SIZE 500M REUSE AUTOEXTEND ON NEXT 25M MAXSIZE 10G
  LOGGING EXTENT MANAGEMENT LOCAL SEGMENT SPACE MANAGEMENT AUTO;

CREATE USER [JS User] IDENTIFIED BY [JS Password]
  DEFAULT TABLESPACE [JS User]_PPMJAS TEMPORARY TABLESPACE TEMP;

GRANT CONNECT, RESOURCE, CREATE SESSION TO [JS User];
GRANT UNLIMITED TABLESPACE, QUERY REWRITE TO [JS User];
```

### SQL Server

```sql
CREATE DATABASE PPM_JASPERSOFT;
ALTER DATABASE ppm_jaspersoft SET ARITHABORT ON;
ALTER DATABASE ppm_jaspersoft SET ANSI_NULLS ON;
ALTER DATABASE ppm_jaspersoft SET QUOTED_IDENTIFIER ON;

-- Set isolation level
ALTER DATABASE PPM_JASPERSOFT SET READ_COMMITTED_SNAPSHOT ON;
GRANT VIEW SERVER STATE to PPM_JASPERSOFT;
ALTER LOGIN PPM_JASPERSOFT WITH CHECK_POLICY=OFF;

-- Schema owner is hard-coded to PPM_JASPERSOFT
exec sp_grantdbaccess 'PPM_JASPERSOFT','PPM_JASPERSOFT'
exec sp_defaultdb 'PPM_JASPERSOFT', 'PPM_JASPERSOFT'
exec sp_addrolemember 'db_owner', 'PPM_JASPERSOFT'
```

> [!NOTE]
> Make sure that the user can access system views (such as `syslockinfo`, `sysindexes`).

### PostgreSQL

Follow these steps:

1. Log in as the postgres user to the database server.
2. Create a tablespace directory:
   ```
   -bash-4.2$ mkdir jasper_data
   ```
3. Log in as a Postgres DB user:
   ```
   -bash-4.2$ psql
   ```
4. Create a role:
   ```sql
   create role jasper password 'niku' login nosuperuser nocreaterole nocreatedb connection limit -1;
   ```
5. Create a tablespace:
   ```sql
   create tablespace jasper_data owner jasper location '/var/lib/pgsql/pgtablespace/jasper_data';
   ```
6. Create the Jaspersoft database:
   ```sql
   create database jasper owner jasper tablespace jasper_data connection limit -1;
   ```
7. Create a schema (name must match the role name):
   ```
   -bash-4.2$ psql -d jasper
   create schema jasper authorization jasper;
   ```

---

## Install the JasperReports Server Software

Follow these steps:

1. Download the Jaspersoft zip file from Broadcom Support.
2. Save the ZIP file to a local directory.
3. Extract the contents to a new folder:
   - **Linux:** `/opt/jasperreports`
   - **Windows:** `C:\Jasperreports`
4. Open a command prompt and run the installer:

   **Linux:**
   ```
   chmod u+x install.sh
   install.sh
   ```

   **Windows:**
   ```
   install.bat
   ```

5. Confirm you are using AdoptJDK 11.0.15 by selecting `y`.
6. Use the following table to select installation options:

   | Option | Explanation | Selection |
   |---|---|---|
   | Installation Type | Fresh or Upgrade | Select `1` (Fresh Installation) |
   | Apache Tomcat Directory | Location of Apache Tomcat 9.0.68 | Enter the Tomcat path |
   | Jaspersoft Web App Name | Folder name where JRS is deployed | Press Enter for `report service` |
   | Jaspersoft Web App Port | Port where JRS runs | Press Enter for `8080` |
   | Email Configuration | Configure mail server | `Y` to configure, `N` to skip |
   | Installation Mode | Standalone vs Cluster | Select `2` for Cluster |
   | Cluster Node | Primary or Additional | Select `1` for Primary |
   | Dedicated Scheduler Instance | Separate scheduler node? | Select `Yes` |
   | Scheduler-only Instance | Make current instance scheduler only? | Select `No` |

   > [!WARNING]
   > For cluster installations, copy the primary instance keystores (`<user.home.dir>/.jrsks` and `.jrsksp`) to the secondary instance's `<user.home>` directory. The password in `context.xml` must be the same between servers.

   **Database details — MSSQL:**

   | Prompt | Value |
   |---|---|
   | SQL Server Hostname | Hostname of SQL Server |
   | Named instance? | Yes for named instance, No for default port |
   | Jaspersoft Database Name | Default: `PPM_JASPERSOFT` |
   | Jaspersoft Database Username | e.g., `PPM_JASPERSOFT` |
   | Jaspersoft Database Password | Password |
   | MSSQL Server Port Number | e.g., `1433` |

   **Database details — Oracle (Standalone):**

   | Prompt | Value |
   |---|---|
   | Oracle Database Hostname | e.g., `localhost` |
   | Oracle Database Port Number | e.g., `1521` |
   | Jaspersoft Database Username | e.g., `PPM_JASPERSOFT` |
   | Jaspersoft Database Password | Password |
   | Oracle SID Name | e.g., `<ORACLESID>` |

   **Database details — PostgreSQL:**

   | Prompt | Value |
   |---|---|
   | PostgreSQL Database Hostname | e.g., `localhost` |
   | PostgreSQL Database Port Number | e.g., `5432` |
   | Jaspersoft Database Name | Database name created in PostgreSQL |
   | Jaspersoft Database Username | Jaspersoft database role |
   | Jaspersoft Database Password | Password |

   **JDBC Protocol (Oracle 19c TCPS):**

   | Option | Description |
   |---|---|
   | `1` TCP | Standard connection |
   | `2` TCPS | SSL/TLS connection |

   For TCPS with Custom TrustStore:
   - **SSL TrustStore Type:** `1` PKCS12 or `2` JKS
   - **SSL TrustStore Location:** e.g., `/fs0/truststore.p12`
   - **SSL TrustStore Password**

> [!IMPORTANT]
> You can select Standalone mode if you do not want Cluster installation.

---

## Configure Clustering

### RMI-Based Cache Replication

Follow these steps:

1. Navigate to `D:\apache-tomcat-x.x.x\webapps\reportservice\WEB-INF` and paste the files from `ehcache9.0-rmi.zip`.
2. Open the following files and edit the multicast address and port:
   - `...\WEB-INF\ehcache.xml`
   - `...\WEB-INF\classes\ehcache_hibernate.xml`
3. Verify that ports `40011` and `40012` are open.
4. To increase the page limit to 1000 (default is 500), edit `jasperreports.properties` and change:
   ```
   net.sf.jasperreports.governor.max.pages=1000
   ```
5. Start services on all instances.

### Configure Multicasting (Linux)

```bash
$ /sbin/ifconfig eth0 multicast
$ route add -net 224.0.0.0 netmask 240.0.0.0 dev eth0
$ netstat -g
```

> [!NOTE]
> All Jaspersoft Server nodes should be in the same network subnet.

### JMS-Based Cache Replication (Active MQ)

Follow these steps:

1. Download and set up Active MQ 5.5.10. Default port: `61616`.
2. Stop the Jaspersoft Tomcat server.
3. Copy the `WEB-INF` folder from `<jaspersoft-installer-folder>\overlay\ehcache\jms` to `<tomcat>/webapps/<jaspersoftwebcontext-folder>`.
4. In `ehcache_hibernate.xml` (in both `WEB-INF` and `WEB-INF/classes`), replace `localhost` in `providerURL=tcp://localhost:61616` with the actual ActiveMQ hostname.
5. Repeat for all Jaspersoft instances.
6. Before starting Jaspersoft Tomcat, delete the Tomcat temp directory and `work/Catalina/localhost` directory.

---

## Verify the JasperReports Server Installation

Follow these steps:

1. Start the JasperReports Server. Navigate to `<Jaspersoft-Tomcat-Root>/bin` and run:

   **Linux:** `./startup.sh`
   **Windows:** `startup.bat`

2. Open `http://<domain_name>:<portnumber>/<jasperwebcontext>/`.
3. Verify that you can open the JasperReports Server login page.
4. Log in using the superuser credentials.
5. Review `install.log` for any errors.

> [!TIP]
> During the installation, the Jaspersoft license file is copied to the installation directory and appropriate user folder automatically.

---

## JasperReports Server Post-Installation Recommendations

- **Back up the installation keystore** (`<user.home.dir>/.jrsks` and `.jrsksp`).
- If you use Oracle, run the following query after installation to improve performance (run frequently):
  ```sql
  exec DBMS_STATS.GATHER_SCHEMA_STATS (ownname => USER, degree => DBMS_STATS.AUTO_DEGREE,
    estimate_percent => 100, cascade => true, method_opt => 'FOR ALL COLUMNS SIZE 1');
  ```
- The governor timeout is set to 15 minutes (900000 ms). To change, edit `jasperreports.properties`:
  ```
  net.sf.jasperreports.governor.timeout.enabled=true
  net.sf.jasperreports.governor.timeout=900000
  ```
- The governor page limit is set to 500. To change, edit `jasperreport.properties`:
  ```
  net.sf.jasperreports.governor.max.pages.enabled=true
  net.sf.jasperreports.governor.max.pages=500
  ```
  A restart of the JasperReports Server is required after changing this setting.

---

## JasperReports Server Post-Installation Configuration

### Configure the JasperReports Server Properties in CSA

Follow these steps:

1. Log in to CSA at `http://<hostname>:8090/niku/app`.
2. Click **Servers** in the left navigation pane, and click the name of the local server.
3. With the **Properties** tab selected, click the **Reporting** subtab.
4. In the **Report Server: Jaspersoft** section, complete the following fields:
   - **Vendor** — `Jaspersoft`
   - **Status** — Indicates whether the JasperReports Server is available
   - **Web URL** — e.g., `http://<jaspersoft-hostname>:8080/<jasperwebcontext>`
   - **User** — Default: `ppmjasperadmin`
   - **Organization Name** — Tenant name
   - **Organization ID** — Tenant ID
5. Click **Save**.

### Generate the Integration Key Store File

Follow these steps:

1. Navigate to `<clarity_home>/bin`.
2. Generate a key store:
   ```
   admin jaspersoft keystore [-key <key> -password <password>]
   ```
   This generates `<orgname>.jks` and `<orgname>.properties` in `<install>/config/` and `<install>/META-INF/reporting/store`.
3. Copy these files to `<Tomcat>/webapps/<jasperwebcontext>/WEB-INF/config`.

   > [!NOTE]
   > For clustered environments, copy these files to the same location on each node.

4. Start the Tomcat service where the JasperReports Server is deployed.

### Execute the Installation Commands

**Prerequisites:**
- Data Warehouse **Status** is set to **Available** in CSA.
- **Clarity Database Link** is created (visible in CSA).
- **Organization Name** and **Web URL** are defined in the Reporting section of CSA.

Follow these steps:

1. Navigate to the Classic PPM runtime `bin` directory.
2. Run PMO content:
   ```
   admin content csk
   ```
3. Import Advanced Reporting content:
   ```
   admin content-jaspersoft csk -userName superuser -password <password>
   ```
4. Review the screen output and logs.

**If you used TCPS protocol, also run:**

```
./admin jaspersoft secureDBParams add -isCustom true \
  -fileName <truststore name> -fileType <PKCS12|JKS> \
  -password <password> -sslCipherSuites <ciphername> \
  -sslVersion 1.2 -sslServerDNMatch false
```

To view configuration: `./admin jaspersoft secureDBParams list`
To delete configuration: `./admin jaspersoft secureDBParams remove`

### Configure Users for Advanced Reporting

1. Assign Advanced Reporting access rights to report users.
2. Run the **Create and Update Jaspersoft Users** job to synchronize users.

### Restart the Classic PPM Services

1. Log in to Classic PPM System Administration.
2. Under **Home**, click **All Services**.
3. Select **app** and **bg** services. Click **Start**.

### Run the Data Warehouse Jobs (in order)

1. **Create and Update Jaspersoft Users**
2. **Time Slicing**
3. **Load Data Warehouse** (first run: use **Full Load** option)
4. **Load Data Warehouse Access Rights** (enable before running)

> [!WARNING]
> - The first run of Load Data Warehouse must use the **Full Load** option.
> - Adding a language or changing a timeslice date to include a larger timeframe also requires **Full Load**.

---

## Configure Jaspersoft as a Windows Service

1. Navigate to the Tomcat `bin` folder: `%TOMCAT_HOME%\bin`.
2. Create the service:
   ```
   service install <name_of_your_reporting_service>
   ```
3. Run:
   ```
   tomcat8w.exe //ES//JasperReports
   ```
4. In the **Java** tab, add these JVM parameters under **Java Options**:
   ```
   -XX:+UseG1GC
   -XX:+CMSClassUnloadingEnabled
   -XX:MetaspaceSize=256m
   -Duser.home=C:\Users\Administrator
   ```
5. Specify **Initial Memory Pool** and **Maximum Memory Pool** values.
6. Apply changes and launch the service from the Windows services console.

---

## Restart the JasperReports Server Tomcat Services

Navigate to `<tomcathome>/bin`:

- **Stop:** `./shutdown.sh` (Linux) or `shutdown.bat` (Windows)
- **Start:** `./startup.sh` (Linux) or `startup.bat` (Windows)

---

## Uninstall JasperReports Server

1. Stop the Tomcat service.
2. Rename the existing `<jasperwebcontext>` folder.
3. Back up the JasperReports Server database.
4. Delete the JasperReports Server database from the database server.

---

## Decoupling Jaspersoft and DWH

As Jaspersoft is being discontinued, remove the legacy Jaspersoft configuration from `properties.xml` so the **Load Data Warehouse** job runs purely as a data load without attempting to connect to Jaspersoft.

### Remove Jaspersoft Configuration

Follow these steps:

1. Navigate to `CLARITY_HOME/config` and locate `properties.xml`.
2. Create a backup copy of the file.
3. Remove the entire `reportServer` section:
   ```xml
   <reportServer id="jaspersoft" webUrl="http://<my_reportserver>/reportservice"
     context="/reportservice" home="" serviceUrl="http://localhost:8000"
     volumeName="" username="ppmjasperadmin" vendor="jaspersoft"
     databaseId="Niku" jndiName="jdbc/clarity" dwJndiName="jdbc/dwh"
     orgName="" orgId=""/>
   ```
4. Save your changes and restart all services.

### Remove Access Rights

Use the **Jaspersoft-User Access Rights** report to identify and remove access rights from users and groups.

### Update the Clarity Application Menu

1. In Classic PPM, navigate to **Administration > Studio > Menu Manager > Application Menu**.
2. Click **Reports and Jobs** to open it.
3. Update the name to `Jobs` and save your changes.

---

## Troubleshooting Tips (On-Premise Only)

The following information can help with implementation, management, and troubleshooting of your JasperReports Server installation.

### Clarity, Jaspersoft, and OData Vulnerability Mitigations

Clarity is **not vulnerable** to CVE-2022-22963 and CVE-2022-22965, as Clarity does not use Spring Framework. The Data Warehouse OData Service (SaaS) is also not vulnerable, as OData SaaS uses Java 8. See the Broadcom Knowledge Base article for mitigation details.

### Clarity and Apache Log4j 2 Vulnerability

A critical vulnerability exists within the Apache Log4j 2 Security Vulnerability CVE-2021-45046 that impacts Clarity, Jaspersoft, and OData (Clarity SaaS). See the Broadcom Knowledge Base article for mitigation steps.

### Configure Scheduler and Non-Scheduler Instances for Jaspersoft

JasperReports Server can be deployed standalone or in a cluster for high-concurrency.

- **Clustered deployment:** Dedicate one or more JasperReports Server instances to process **scheduled reports**. These dedicated scheduler instances share the same repository but are **not** part of the load balancer for interactive web requests.
- **Standalone deployment:** The single instance handles both report scheduling and normal web requests.

During Jaspersoft installation, you are asked:

> **"Do you want a separate scheduler instance?"**
> - **Yes → Make current instance scheduler?**
>   - **Yes:** The installer configures the current instance as a scheduler instance.
>   - **No:** The installer configures the current instance as a non-scheduler instance. Add non-scheduler instances to your load balancer for best results.

> [!NOTE]
> If you are running only a single JasperReports Server instance, choose **No** when asked about separating the scheduler instance.

### Page Limits

| Instance Type | Default Maximum Pages |
|---|---|
| Non-Scheduler (standalone node) | 500 pages |
| Scheduler node | 1,000 pages |

When the page limit is exceeded, an error is returned. To display more pages, **schedule the report** rather than running it interactively.

### Set JVM Options for Jaspersoft

JasperReports Server runs on **Java 17 JVM**. Memory settings must be explicitly configured to exceed default values.

**Windows:**

1. Open `<tomcat>/bin/setenv.bat` in a text editor.
2. Locate: `Set JAVA_OPTS=%JAVA_OPTS% -Xms1024m -Xmx2048m -XX:MetaspaceSize=32m`
3. Increase the maximum heap size to at least 4 GB: `-Xmx4096m`

**Linux/Unix:**

1. Open `<tomcat>/bin/setenv.sh` in a text editor.
2. Locate: `export JAVA_OPTS="$JAVA_OPTS -Xms1024m -Xmx2048m -XX:MetaspaceSize=32m"`
3. Increase the maximum heap size to at least 4 GB: `-Xmx4096m`
4. If you encounter the following error during import/export or Tomcat startup:
   ```
   java.lang.UnsatisfiedLinkError: .../libawt_xawt.so: libXtst.so.6: cannot open shared object file: No such file or directory
   ```
   Add this JVM parameter: `-Djava.awt.headless=true`

> [!TIP]
> Consult Broadcom Service partners for help sizing your JVM heap based on your implementation.

### Restrict Advanced Reporting Notifications to Trusted Email Domains

Users can email reports as hyperlinks or attachments when scheduling. As an administrator, you can restrict notifications to trusted email domains.

> [!NOTE]
> If no trusted domains are specified, notifications go to all addresses users provide. Alternatively, disable notifications entirely.

Use these CLI commands from the Classic PPM command line:

```bash
# Add trusted email domains (list cannot exceed 1200 characters)
admin jaspersoft email -addDomains <comma_separated_list_of_trusted_domains>

# Display existing trusted email domains
admin jaspersoft email listDomains

# Remove email domains from the existing list
admin jaspersoft email -removeDomains <comma_separated_list_of_domains_to_remove>

# Disable all report emails and job status notifications
admin jaspersoft email disableNotifications

# Re-enable report emails and job status notifications
admin jaspersoft email enableNotifications
```

### Check the Installer Version

To verify the installer version:
- Check the installer **README** file.
- Check the `version.html` file created after installation:
  ```
  http://<servername>:<portNumber>/<reportservice>/version.htm
  ```

### HTTPS Enabled Jaspersoft

If the JasperReports Server is HTTPS-enabled, import its SSL certificate into the Classic PPM JDK truststore.

1. Download and save the certificate from the JasperReports Server URL (e.g., save as `SETI_JAAS_CER.cer`).
2. From the command prompt, navigate to `JDK_HOME` on the Classic PPM server.
3. Navigate to `jre\lib\security` (e.g., `C:\jdks\jdk17.x.x\jre\lib\security`).
4. Run:
   ```
   keytool -importcert -keystore cacerts -alias tomcat9 -storepass changeit -file SETI_JAAS_CER.cer -trustcacerts
   ```
5. Restart Classic PPM.

> [!NOTE]
> To delete the certificate entry: `keytool -delete -keystore cacerts -alias tomcat9 -storepass changeit`

### Jaspersoft Sender Email Address

The sender email address appears in notifications from JasperReports Server for scheduled reports. The default on-premise value is:

```
do-not-reply@your_domain.com
```

**To change the default address:**

1. Open `js.quartz.properties` in a text editor.
2. Edit the `report.scheduler.mail.sender.from` property.
3. Save the file and restart JasperReports Server.

### Failed to Update Properties on the Jaspersoft Server

**Symptom:** When saving Data Warehouse properties in Classic PPM System Administration (CSA), you receive: *"Failed to update properties on the Jaspersoft server."*

**Possible causes and resolutions:**

| Cause | Resolution |
|---|---|
| Key store file was deleted, or the ClarityJasperAdmin user was changed, causing key store expiration | Regenerate the key store file and copy it to `<JasperReportsServerTomcat>/config` |
| Advanced Reporting content was reimported without first deleting the existing organization/tenant | Delete the tenant from the JasperReports Server UI, or run: `jaspersoft delete [-properties propertiesFile] -userName username -orgName orgId[,<orgId>..] -url jsUrl -password password` |

### java.nio.BufferUnderflowException

Oracle versions 12.1.0.2.0 through 12.2.0.0.0 have a known issue that causes this exception. Review the Broadcom Knowledge Base article for the resolution.

### User Not Registered Error on the Advanced Reporting Page

**Symptom:** Accessing Advanced Reporting shows *"Error 401 User Not Registered."*

**Possible causes and resolutions:**

| Cause | Resolution |
|---|---|
| Key store file was not copied to the Jaspersoft config folder | Copy key store from `C:\<clarity_runtime>\config\` to `<JasperReportsServerTomcat>\webapps\<jasperwebcontext>\WEB-INF\config\` |
| User does not exist on JasperReports Server but Classic PPM database shows status as synchronized | Run the **Create and Update Jaspersoft Users** job with the **Full Sync** option |

### Internal Server Error on Advanced Reporting Page

**Symptom:** Accessing Advanced Reporting shows *"Error 500 - Internal Server Error."*

**Cause:** The key store file was not copied to the Jaspersoft config folder.

**Resolution:**

1. Locate the generated key store file (organization name: `ca`, organization ID: `ca`) in `C:\<clarity_runtime>\config\`.
2. Copy the key store file and organization information to `<JasperReportsServerTomcat>\webapps\<jasperwebcontext>\WEB-INF\config\`.

### Memory Leak Errors in Tomcat Logs

**Symptom:** Memory leak error messages appear in Tomcat logs, especially during restarts. The Tomcat process may not exit gracefully, or Advanced Reporting becomes inaccessible even though the port is available. Reported primarily on Linux but may occur on Windows.

**Resolution:**

1. Verify that the JasperReports Server Tomcat process is not present after shutdown:
   ```bash
   ps -ef | grep tomcat
   ```
2. If the process is still present, kill it:
   ```bash
   kill -9 <ProcessID>
   ```
3. Start the Tomcat process again.

### Please Wait Message on the Advanced Reporting Page

**Symptom:** After accessing Advanced Reporting, a "Please Wait" message appears and does not go away.

**Resolution:**
1. See Broadcom Knowledge Base article KB000004562 for details and workarounds.
2. Advise users to clear their **browser cookies and temporary cache files**.

### Project Storyboard Report Error

**Symptom:** After upgrading to 15.x, publishing the Project Storyboard report for the first time shows an error. Logs show:

```
java.sql.SQLSyntaxErrorException: ORA-00904: "SC51564DDWH"."DWH_INV_REMAINING_ALLOC_FCT": invalid identifier
```

**Resolution:** Run the following jobs in order after upgrading:

1. **Load Data Warehouse** (select **Full Load** option)
2. **Load Data Warehouse Access Rights**

The Load Data Warehouse job populates the Status Report object in the data warehouse for Advanced Reporting.

### Custom Attributes Do Not Appear in Jaspersoft Domains

**Symptom:** After an upgrade, custom fields that are checked for the data warehouse do not appear in Jaspersoft domains used for ad hoc queries.

**Resolution:**

1. Run the following command:
   ```
   admin content-jaspersoft csk restoreDomains -userName superuser -password superuser
   ```
2. Wait for the command to complete.
3. Run the **Load Data Warehouse** job in **Full** (not incremental) mode.

---

## Ehcache Replication with JMS — ActiveMQ Cluster

When you set up a Jaspersoft cluster, you need to support node-to-node cache replication. JMS cache replication uses the ActiveMQ message server to replicate caches across Jaspersoft nodes. To avoid a single point of failure with a standalone ActiveMQ server, configure an ActiveMQ cluster for cache high availability.

### Overview: Failover Protocol

Apache ActiveMQ supports a **master-slave failover** mode. Two or more ActiveMQ instances compete for a lock on a shared file store (e.g., NFS with KahaDB). The broker that acquires the lock becomes the **master**; remaining brokers are **slaves**. Only the master accepts client connections.

When the master fails, a slave promotes itself by acquiring the lock. The failover URL pattern is:

```
failover:(tcp://host1:port1,tcp://host2:port2...)?options
```

### Active MQ Cluster — Setup

**Requirements:**
- ActiveMQ version v6.1.2
- Two ActiveMQ instances (master and slave), ideally on separate machines
- An NFS server for shared data storage

**Configuring the NFS Client (CentOS):**

1. Install NFS packages:
   ```bash
   yum install nfs-utils
   ```
2. Create the mount point:
   ```bash
   mkdir /datastore/activemq-data
   ```
3. Mount the NFS directory:
   ```bash
   mount -t nfs "<nfs-server-ip>:<configured-nfs-directory>" /datastore/activemq-data
   ```
4. Verify the mount:
   ```bash
   df -kh
   ```

**Permanent NFS Mount (persists across reboots):**

Edit `/etc/fstab` and add:
```
"nfs-server-ip":"configured-nfs-directory" datastore/activemq-data nfs defaults 0 0
```

### ActiveMQ Master-Slave Configuration

**Install ActiveMQ on Two Separate Systems:**

1. Unpack the ActiveMQ 6.1.2 zip bundle on both systems.
2. In the `activemq.xml` file (`conf` directory), ensure the **Broker port is 61616** on both systems in the `transportConnector` section.
3. In the `jetty.xml` file (`conf` directory), ensure the **HTTP Web Console port is 8161** on both systems.

**Test broker instances can start:**

Run ActiveMQ in the foreground on each system to confirm no port conflicts:
```bash
./bin/activemq console
```

**Configure shared KahaDB persistence (both systems):**

In `activemq.xml`, edit the `persistenceAdapter` entry to point to the shared NFS path:
```xml
<kahaDB directory="/datastore/activemq-data/kahadb"/>
```

> [!NOTE]
> The directory must be the same on each broker and must be on a filesystem that supports file locking.

**Add network connectors (master broker):**

In `activemq.xml` for the primary broker (port 61616), add after `persistenceAdapter`:
```xml
<networkConnectors>
  <networkConnector duplex="true"
    uri="masterslave:(tcp://<amqserver1>:61616,tcp://<amqserver2>:61616)"/>
</networkConnectors>
```

Add a complementary network connector in the other broker's `activemq.xml`, then start both brokers.

**Verify master-slave operation:**

Only one broker should be listening for connections. Check with:
```bash
netstat -anp | grep 6161 | grep LISTEN
```

The non-listening (slave) console will show:
```
INFO | Database /tmp/mq/lock is locked... waiting 10 seconds for the database to be unlocked.
```

This confirms the cluster is working correctly.

### Configure Jaspersoft Ehcache Replication with ActiveMQ Cluster

1. Stop the Tomcat server.
2. Download and unzip the `ehcache_Jasper9.0_jms.zip` file (for Jaspersoft 9.0).
3. Open `ehcache.xml` and `ehcache_hibernate.xml` from the extracted folder.
4. Find the XML attribute `providerURL` and set it to your ActiveMQ broker URLs as comma-separated values. Update all occurrences in both files.

> [!NOTE]
> For every `cacheManagerPeerProviderFactory` and `cacheLoaderFactory` element, the `propertySeparator` must be `~` (not `,`). This avoids ambiguity with the comma-separated broker URLs in `providerURL`.

5. Save and close both files.
6. Copy the edited `ehcache.xml` and `ehcache_hibernate.xml` to:
   ```
   tomcat/webapps/reportservice/WEB-INF/
   ```
7. Open the `classes` directory from the unzipped folder.
8. Open both `ehcache.xml` and `ehcache_hibernate.xml` and update `providerURL` with the failover URL (all broker addresses comma-separated) in multiple locations.
9. Copy the updated files to:
   ```
   tomcat/webapps/reportservice/WEB-INF/classes/
   ```
10. Repeat steps 1–9 on **all Jaspersoft instances** in the cluster.
11. Before starting Tomcat, delete:
    - The Tomcat `temp` directory
    - `work/Catalina/localhost`

---

## Related
- [[_MOC Install Upgrade]]
- [[Jaspersoft Upgrade]]

%%Source: p2853-2884, p2885-2920%%
