# Install Jaspersoft 8.1.1

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[17 - Installation and Upgrade/_MOC Install Upgrade|Installation and Upgrade]]
- Canonical notes:
- [[17 - Installation and Upgrade/Jaspersoft Installation]]
- [[17 - Installation and Upgrade/Install with PostgreSQL]]
- [[17 - Installation and Upgrade/Install with SQL Server]]
- [[17 - Installation and Upgrade/Install with Oracle]]
- [[17 - Installation and Upgrade/Jaspersoft Upgrade]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Advanced Reporting Architecture and Components (#advanced-reporting-architecture-and-components)
- H3: High-Performance Specifications (#high-performance-specifications)
- H2: Review the Prerequisites (#review-the-prerequisites)
- H2: Create the JasperReports Server Schema and Set Permissions (#create-the-jasperreports-server-schema-and-set-permissions)
- H3: Oracle (#oracle)
- H3: SQL Server (#sql-server)
- H3: PostgreSQL (#postgresql)
- H2: Install the JasperReports Server Software (#install-the-jasperreports-server-software)
- H3: Installation Options (#installation-options)
- H3: Database Details (#database-details)
- H2: Configure Clustering (#configure-clustering)
- H3: RMI Based Cache Replication (#rmi-based-cache-replication)
- H3: JMS Based Cache Replication (#jms-based-cache-replication)
- H3: Multicasting and Cache Distributing over RMI (#multicasting-and-cache-distributing-over-rmi)
- H3: Configure Multicasting (Linux) (#configure-multicasting-linux)
- H3: Configure Multicasting (Windows) (#configure-multicasting-windows)
- H3: Configure Cache Distribution over RMI on JasperReport Servers (#configure-cache-distribution-over-rmi-on-jasperreport-servers)
- H3: Configure Cache Distribution with JMS on JasperReport Servers (#configure-cache-distribution-with-jms-on-jasperreport-servers)
- H2: Verify the JasperReports Server Installation (#verify-the-jasperreports-server-installation)
- H2: JasperReports Server Post-Installation Recommendations (#jasperreports-server-post-installation-recommendations)
- H2: JasperReports Server Post-Installation Configuration (#jasperreports-server-post-installation-configuration)
- H3: Configure the JasperReports Server Properties (#configure-the-jasperreports-server-properties)
- H3: Generate the Integration Key Store File (#generate-the-integration-key-store-file)
- H3: Execute the Installation Commands (#execute-the-installation-commands)
- H3: Configure Users for Advanced Reporting (#configure-users-for-advanced-reporting)
- H3: Restart the Classic PPM Services (#restart-the-classic-ppm-services)
- H3: Run the Data Warehouse Jobs (#run-the-data-warehouse-jobs)
- H2: Configure Jaspersoft as a Windows Service (#configure-jaspersoft-as-a-windows-service)
- H2: Restart the JasperReports Server Tomcat Services (#restart-the-jasperreports-server-tomcat-services)
- H2: Uninstall JasperReports Server (#uninstall-jasperreports-server)
- H2: Decoupling Jaspersoft and DWH (#decoupling-jaspersoft-and-dwh)
- H3: Identify Advanced Reporting Access Rights (#identify-advanced-reporting-access-rights)
- H3: Remove Jaspersoft Configuration (#remove-jaspersoft-configuration)
- H3: Remove Access Rights (#remove-access-rights)
- H3: Update the Clarity Application Menu (#update-the-clarity-application-menu)
- H2: Jaspersoft Reports Server Troubleshooting Tips (On-Premise Only) (#jaspersoft-reports-server-troubleshooting-tips-on-premise-only)
- H3: Clarity, Jaspersoft, and ODATA Vulnerability Mitigations (#clarity-jaspersoft-and-odata-vulnerability-mitigations)
- H3: Clarity and Apache Log4j 2 Vulnerability (#clarity-and-apache-log4j-2-vulnerability)
- H3: Configure Scheduler and Non-Scheduler Instances for Jaspersoft (#configure-scheduler-and-non-scheduler-instances-for-jaspersoft)
- H3: Page Limits (#page-limits)
- H3: Set JVM Options for Jaspersoft (#set-jvm-options-for-jaspersoft)
- H3: Restrict Advanced Reporting Notifications to Trusted Email Domains (#restrict-advanced-reporting-notifications-to-trusted-email-domains)
- H3: Check the Installer Version (#check-the-installer-version)
- H3: HTTPS Enabled Jaspersoft (#https-enabled-jaspersoft)
- H3: Jaspersoft Sender Email Address (#jaspersoft-sender-email-address)
- H3: Failed to Update Properties on the Jaspersoft Server (#failed-to-update-properties-on-the-jaspersoft-server)
- H3: java.nio.BufferUnderflowException (#javaniobufferunderflowexception)
- H3: User Not Registered Error on the Advanced Reporting Page (#user-not-registered-error-on-the-advanced-reporting-page)
- H3: Internal Server Error on Advanced Reporting Page (#internal-server-error-on-advanced-reporting-page)
- H3: Memory Leak Errors in Tomcat Logs (#memory-leak-errors-in-tomcat-logs)
- H3: Please Wait Message on the Advanced Reporting Page (#please-wait-message-on-the-advanced-reporting-page)
- H3: Project Storyboard Report Error (#project-storyboard-report-error)
- H3: Custom Attributes Enabled for the Data Warehouse Do Not Appear in Jaspersoft Domains (#custom-attributes-enabled-for-the-data-warehouse-do-not-appear-in-jaspersoft-domains)
- H2: Jaspersoft Server Ehcache Replication with JMS - Active MQ Cluster (#jaspersoft-server-ehcache-replication-with-jms---active-mq-cluster)
- H3: Jaspersoft Server Ehcache Replication with JMS - Active MQ Cluster on Failover Protocol (#jaspersoft-server-ehcache-replication-with-jms---active-mq-cluster-on-failover-protocol)
- H3: Active MQ Cluster (#active-mq-cluster)
- H3: ActiveMQ Master-Slave Configuration (#activemq-master-slave-configuration)
- H3: Configure Jaspersoft Ehcache Replication with ActiveMQ Cluster on Failover Protocol (#configure-jaspersoft-ehcache-replication-with-activemq-cluster-on-failover-protocol)

This topic provides all the information you need to install Jaspersoft 8.1.1 for Classic PPM.

> [!WARNING]
> **End of Life Announcement for CA Business Intelligence for Clarity**
> Broadcom is continually working to improve our software and services to best meet the needs of our customers. To focus our development efforts to help our customer base achieve their strategic business initiatives, we are investing our resources in new technology and software and will be discontinuing support for the CA Business Intelligence for Clarity or commonly known as Clarity Advanced Reporting powered by Jaspersoft.

> [!ATTENTION]
> When you plan to install Jaspersoft 8.1.1, some of the key things you need to remember are:
> - You need to be on Clarity 16.1.1 and Jaspersoft 7.8 to upgrade to Jaspersoft 8.1.1.
> - Jaspersoft 8.1.1 includes an installation keystore. Create a backup of the installation keystore (`<user.home.dir>/.jrsks` and `<user.home.dir>/.jrsksp`) to ensure you can connect to the Jaspersoft database in case of any issues. You will not be able to access your data if you don't have a copy of the keystore files. If you are using a Windows server, the keystores are available under `C:\users\<user directory>`.
> - Jaspersoft Advanced Reporting feature is available in English, Simplified Chinese, and the six core languages and locales that are listed for Clarity. See Hardware and Software Specifications.
> - Jaspersoft 8.1.1 supports TCPS for the Oracle 19c database.

> [!NOTE]
> Upgrade to Jaspersoft 8.1.1 on Oracle TCPS/SSL is not supported. However, you can install a fresh instance of Jaspersoft 8.1.1 on Oracle TCPS and move the content from Jaspersoft 7.8 to the 8.1.1 version using Clarity's admin export and import commands.

Sample admin command to export:

```
./admin jaspersoft export -fromURL <Jaspersoft 7.8 Server URL> -fromUserName superuser -fromPassword <Superuser Password> orgName <Org Name> -fileName <Export_Filename>.zip
```

Sample admin command to import:

```
./admin jaspersoft import -toURL <Jaspersoft 8.1 Server URL> -toUserName superuser -toPassword <Superuser Password> orgName <Org Name> -fileName <Export_Filename>.zip
```

Additional requirements:
- Jaspersoft 8.1.1 supports Microsoft SQL Server 2017 and Microsoft SQL Server 2019.
- Jaspersoft 8.1.1 supports Adopt Open JDK 11.0.15+10 and Tomcat 9.0.68.
- Jaspersoft 8.1.1 requires you to install Google Chrome or Chromium 110 on the server where you plan to install Jaspersoft.
- When you export content from Jaspersoft 8.1.1, use the **Legacy Key** option to ensure you can import content on all existing Jaspersoft servers.
- Jaspersoft 8.1.1 will not work on Internet Explorer. You can use the relevant versions of Chrome, Firefox, and Edge.

> [!IMPORTANT]
> Read this knowledge base article if you face issues exporting Jaspersoft reports.

**Topics in this section:**
- Advanced Reporting Architecture and Components
- Review the Prerequisites
- Create the JasperReports Server Schema and Set Permissions
- Install the JasperReports Server Software
- Configure Clustering
- Verify the JasperReports Server Installation
- JasperReports Server Post-Installation Recommendations
- JasperReports Server Post-Installation Configuration
- Configure Jaspersoft as a Windows Service
- Restart the JasperReports Server Tomcat Services
- Uninstall JasperReports Server

---

## Advanced Reporting Architecture and Components

(On-Premise only) To help you plan for a new installation or upgrade with Advanced Reporting, refer to the deployment architecture examples in the sizing guide for Classic PPM 15.x. See Installing and Upgrading in the English edition of the documentation.

For the best performance, we recommend the following minimum configuration:
- 20 GB RAM for each JVM
- 32 GB RAM for the OS
- One (1) interactive node
- One (1) scheduler node

For large deployments with over 1,000 simultaneous users, we recommend a three-node Jaspersoft cluster with one interactive node and two scheduler nodes.

### High-Performance Specifications

The following section lists a robust setup for Windows Server 2012 for user-acceptance testing or high-performance environments that place a premium on reporting. The Clarity 15.x SaaS platform uses similar specifications in a three-node clustered configuration.

| Component | Specifications |
|---|---|
| Clarity App Server | Dual 2.4 GHz Intel Xeon, RAM: 8 GB |
| Clarity DB Server | MS SQL 2012, 8 Core 2.4 GHz Intel Xeon, RAM: 100 GB |
| DWH/Jaspersoft Reports Server | MS SQL 2012, 6 Core 2.4 GHz Intel Xeon, RAM: 14 GB |
| Jaspersoft Tomcat Server | Dual 2.4 GHz Intel Xeon, RAM: 8 GB (32 GB recommended), JVM: 20 GB per node |

---

## Review the Prerequisites
- Verify that Classic PPM is installed or upgraded.
- Download the compatible Oracle JDK and Apache Tomcat software:
- AdoptOpenJDK 11.0.15+10
- Apache Tomcat 9.0.68
- Set `JAVA_HOME` and ensure that the correct Java executables are referenced in the `PATH` environment variable. For example:
- **Windows:** `set PATH=%JAVA_HOME%\bin;%PATH%`
- **Linux:** `export PATH=$PATH:$JAVA_HOME/bin`
- If this is your second attempt at installation, before starting the install process, do the following:
- Delete the Tomcat folder, if it exists. Extract the new content from the Tomcat zip file that you downloaded from the Broadcom Download Center.
- Delete the JasperReports Server Database/Schema and recreate it. For more information and sample queries for supported vendors, see Create a Jaspersoft Schema and Set Permissions.
- (Recommended) Extract the installer into a new folder.
- Jaspersoft 8.1.1 supports TCPS for the Oracle 19c database. If you plan to use the **Bundled JDK** option, while configuring TCPS, you need to perform the following steps. These steps are critical because when the database administrators install Oracle on TCPS, they generate a private key. This key needs to be imported into AdoptOpenJDK 11.x.x.

  1. Navigate to the Java bin folder that you plan to use while installing Jaspersoft 8.1.1:
     ```
     cd jdk11.x.x/bin
     ```
  2. Use the following command to export the certificate:
     ```
     ./keytool -exportcert -keystore <keystore path> -storepass <keystore password> -storetype <keystore type> -alias <keystore alias> -file <location to export certificate/certificate name>
     ```
     Sample command:
     ```
     ./keytool -exportcert -keystore </fs0/truststore.p12> -storepass <Dummy#1234> -storetype <PKCS12> -alias <clrt-i65702.dummy.test.net_testroot> -file </fs0/oracle78test.cer>
     ```
  3. Use the following command to import the certificate into the CA Certs directory:
     ```
     ./keytool -importcert -keystore <location of cacerts> -storepass <password of cacerts keystore> -alias <keystore alias> -file <location to exported certificate/certificate name>
     ```
     Sample command:
     ```
     ./keytool -importcert -keystore <fs0/ca/jdks/jdk-11.x.x/lib/security/cacerts> -storepass <changeit> -alias <clrt-i65702.dummy.test.net_testroot> -file </fs0/oracle78test.cer>
     ```
  4. When prompted whether you trust this certificate, type **yes** and press **Enter**. You have now added the certificate into AdoptOpenJDK 11.x.x.

> [!NOTE]
> To avoid the "filename is too long" exception, unzip the installer into the root drive (for example, `C:\jaspersoft` or `/fs0/`).

---

## Create the JasperReports Server Schema and Set Permissions

Complete the following steps to create a database user for the JasperReports Server.

### Oracle

1. Create a tablespace for the JasperReports Server:
   ```sql
   CREATE TABLESPACE "[JS User]_PPMJAS"
     DATAFILE '<ORACLE_BASE>\ORADATA\<SID>\PPM_JASPER_TS.DBF'
     SIZE 500M REUSE AUTOEXTEND ON NEXT 25M MAXSIZE 10G
     LOGGING EXTENT MANAGEMENT LOCAL
     SEGMENT SPACE MANAGEMENT AUTO;
   ```
2. Create a database user and set the required permissions:
   ```sql
   CREATE USER [JS User] IDENTIFIED BY [JS Password]
     DEFAULT TABLESPACE [JS User]_PPMJAS
     TEMPORARY TABLESPACE TEMP;

   GRANT CONNECT, RESOURCE, CREATE SESSION TO [JS User];
   GRANT UNLIMITED TABLESPACE, QUERY REWRITE TO [JS User];
   ```

### SQL Server

1. Create a database (for example, `PPM_JASPERSOFT`).
2. Alter database to set `arithabort` on.
3. Alter database to set `ansi_nulls` on.
4. Alter database to set `quoted_identifier` on.

```sql
IF (SELECT (CAST(LEFT(CAST(SERVERPROPERTY('ProductVersion') AS VARCHAR(20)),
    CHARINDEX('.', CAST(SERVERPROPERTY('ProductVersion') AS VARCHAR(20)), 1) - 1)
    AS INTEGER))) = 10
BEGIN
  exec sp_dbcmptlevel 'PPM_JASPERSOFT', @new_cmptlevel=100
END

IF (SELECT (CAST(LEFT(CAST(SERVERPROPERTY('ProductVersion') AS VARCHAR(20)),
    CHARINDEX('.', CAST(SERVERPROPERTY('ProductVersion') AS VARCHAR(20)), 1) - 1)
    AS INTEGER))) = 11
BEGIN
  exec sp_dbcmptlevel 'PPM_JASPERSOFT', @new_cmptlevel=110
END

IF NOT EXISTS (SELECT 'yes' FROM syslogins WHERE LOWER(name) = LOWER('PPM_JASPERSOFT'))
BEGIN
  exec sp_addlogin 'PPM_JASPERSOFT','my_password','PPM_JASPERSOFT','us_english'
END
```

5. Set the isolation level to read the committed snapshot.

> [!NOTE]
> Make sure that the user can access the system views (such as `syslockinfo`, `sysindexes`).

```sql
begin
  exec ('alter database PPM_JASPERSOFT set read_committed_snapshot on')
  exec ('grant VIEW SERVER STATE to PPM_JASPERSOFT')
  exec ('ALTER LOGIN PPM_JASPERSOFT WITH CHECK_POLICY=OFF')
end

USE PPM_JASPERSOFT
```

6. The schema owner is referenced in the code when executing functions in SQL Server and is hard-coded to `PPM_JASPERSOFT`. The login name can be different.

```sql
exec sp_grantdbaccess 'PPM_JASPERSOFT','PPM_JASPERSOFT'
exec sp_defaultdb 'PPM_JASPERSOFT', 'PPM_JASPERSOFT'
exec sp_addrolemember 'db_owner', 'PPM_JASPERSOFT'
```

### PostgreSQL

Please review the Hardware and Software Compatibility guide to check the PostgreSQL version supported for this release.

If you are installing the PostgreSQL database, refer to the following knowledge base articles:
- Installing PostgreSQL for Windows
- Installing PostgreSQL for Linux

After you install the PostgreSQL database, see Setting Up the PostgreSQL Database for information on how to set up the database.

You are not ready to configure the database before installing Jaspersoft.

1. Log in as the postgres user to the database server.
2. Create a tablespace directory for Jaspersoft by using the following command. Ensure you copy the path of this directory. We will be using the path while creating a table space.
   ```bash
   -bash-4.2$ mkdir <directory name>
   ```
   Sample command:
   ```bash
   -bash-4.2$ mkdir jasper_data
   ```
3. Login as a Postgres DB user by using psql:
   ```bash
   -bash-4.2$ psql
   ```
4. Create a role that will be used for installing Jaspersoft:
   ```sql
   create role <name> password <'password'> login nosuperuser nocreaterole nocreatedb connection limit -1;
   ```
   Sample command:
   ```sql
   create role jasper password 'niku' login nosuperuser nocreaterole nocreatedb connection limit -1;
   ```
5. Create a tablespace by using the tablespace directory we created previously:
   ```sql
   create tablespace <name> owner <role> location <location>;
   ```
   Sample command:
   ```sql
   create tablespace jasper_data owner jasper location '/var/lib/pgsql/pgtablespace/jasper_data';
   ```
6. Create the Jaspersoft database:
   ```sql
   create database <name> owner <role> tablespace <name> connection limit -1;
   ```
   Sample command:
   ```sql
   create database jasper owner jasper tablespace jasper_data connection limit -1;
   ```
7. Create a Jaspersoft schema and ensure that the schema name matches the role name:
   ```bash
   -bash-4.2$ psql -d jasper
   ```
   ```sql
   create schema <name> authorization <role>;
   ```
   Sample command:
   ```sql
   create schema jasper authorization jasper;
   ```

You are now ready to install Jaspersoft.

---

## Install the JasperReports Server Software

Complete the following steps to install the JasperReports software on the server.

1. Download the Jaspersoft zip file from Broadcom Support:
- Search on Clarity and locate the latest Jaspersoft download file.
- The Jaspersoft file is often included as part of an ISO image file that you can download and mount or burn to a DVD. For example: `CA BUSINESS INTELLIGENCE JASPER REPORTS SERVER 8.x FOR Clarity Clarity INSTALL MEDIA 16.1.x, DVD MASTER DVDXXXX.iso`
2. Save the ZIP file to a local directory.
3. Extract the contents of the file to a new folder (for example, `/opt/jasperreports` for Linux or `C:\Jasperreports` for Windows).

> [!NOTE]
> To avoid the "filename is too long" exception, unzip the installer into the root drive (for example, `C:\jaspersoft` or `/fs0/`).

4. Open a command prompt and run the following command:
- **Linux:**
     ```bash
     chmod u+x install.sh
     install.sh
     ```
- **Windows:**
     ```
     install.bat
     ```
5. The installer will confirm if you are using AdoptJDK 11.0.15. Select **y** to continue the installation.
6. Use the following table to select relevant options during the installation process.

> [!NOTE]
> The table provides information to help you install Jaspersoft as the Primary Node of a Cluster.

### Installation Options

| Option | Explanation | Selection |
|---|---|---|
| **Installation Type** | 1 = Fresh Installation, 2 = Upgrade | Select 1 |
| **Apache Tomcat Directory** | Enter the location to the Apache Tomcat 9.0.68 directory. If you don't provide a path to the relevant directory, the installation will not proceed further. | Sample: `/home/primaryjsft/tomcat/apache-tomcat-9.0.68j` |
| **Jaspersoft Web App Name** | Specifies the folder name where the JasperReports Server is deployed. In clustered environments, your entry should be in sync with the first instance. | Sample: Press Enter to use "report service" |
| **Jaspersoft Web App Port** | Specifies the port where the JasperReports Server runs. | Sample: Press Enter to use port 8080 |
| **Email Configuration** | Press Y to configure the mail server. To skip, enter N. | Y or N |
| **Mail Server Hostname** | Specifies the hostname of the mail server. | Sample: `mail.localhost.com` |
| **Mail Server Port** | Specifies the port number of the mail server. | Sample: 25 |
| **Sender Email Protocol** | Specifies the protocol (SMTP or SMTPS). | Sample: SMTPS |
| **Sender Email Username** | Specifies the user name of the mail sender. | Sample: Reportadmin |
| **Sender Email Password** | Specifies the password of the mail sender. | Sample: `Rep$rtsserver@123` |
| **Sender Email Address** | Specifies the mail address of the sender. | Sample: `noreply@reportsadmin.com` |
| **Absolute Path to Chrome/Chromium** | Specifies the path to Google Chrome or Chromium browser (version 85+). | Google Chrome: `/opt/google/chrome/google-chrome`, Chromium: `/opt/chrome-linux/chrome` |
| **Installation Mode** | 1 = Standalone, 2 = Cluster | Select 2 |
| **Cluster Node** | 1 = Primary, 2 = Additional (Web App Only Deploy) | Select 1 to set up the primary server |
| **Dedicated Scheduler Instance?** | Whether to have a separate scheduler instance. | Select Yes (typically you would not use the primary cluster node as a report scheduler instance) |
| **Make Current Instance Scheduler-Only?** | If you want to configure your primary node as a report scheduler only instance. | Select No |

### Database Details

| Option | Explanation |
|---|---|
| **Database Type** | 1 = Oracle, 2 = SQL, 3 = PostgreSQL |

#### SQL Server

| Option | Explanation |
|---|---|
| **SQL Server Hostname** | Enter the hostname of the server where SQL Server is installed |
| **Use Named Instance?** | Enter Yes for Named Instance, No for default instance with static port |
| **MSSQL Server Instance Name** | Enter the named instance configured on MS SQL Server |
| **Jaspersoft Database Name** | Enter the JasperReports Server database name (default: `PPM_JASPERSOFT`) |
| **Jaspersoft Database Username** | Enter the JasperReports Server user name (e.g., `PPM_JASPERSOFT`) |
| **Jaspersoft Database Password** | Enter the JasperReports Server password |
| **MSSQL Server Port Number** | Enter the database port (e.g., 1433) |

#### Oracle Standalone

| Option | Explanation |
|---|---|
| **Oracle Database Hostname** | Hostname of the server where Oracle is installed (e.g., localhost) |
| **Oracle Database Port Number** | Database port on which Oracle is running (e.g., 1521) |
| **Jaspersoft Database Username** | JasperReports Server database user name (e.g., `PPM_JASPERSOFT`) |
| **Jaspersoft Database Password** | JasperReports Server password |
| **Oracle SID Name** | Oracle SID (e.g., `<ORACLESID>`) |

#### Oracle Cluster (RAC)

Please refer to the knowledge base article to troubleshoot the ORA-12504 issue you may encounter during installation.

| Option | Explanation |
|---|---|
| **Oracle Database Hostname** | Hostname of the server where Oracle is installed (e.g., localhost or IP address) |
| **Oracle Database Port Number** | Database port where Oracle runs (e.g., 1521) |
| **Jaspersoft Database Username** | JasperReports Server database user name (e.g., `PPM_JASPERSOFT`) |
| **Jaspersoft Database Password** | JasperReports Server password |
| **Oracle Service Name** | Oracle service name (e.g., `<SERVICENAME>`) |

#### PostgreSQL

| Option | Explanation |
|---|---|
| **PostgreSQL Database Hostname** | Hostname of the server where PostgreSQL is installed |
| **PostgreSQL Database Port Number** | Database port number where PostgreSQL runs |
| **Jaspersoft Database Name** | Jaspersoft database name created in PostgreSQL |
| **Jaspersoft Database Username** | Jaspersoft database role |
| **Jaspersoft Database Password** | Jaspersoft database password |

#### JDBC Protocol Type

| Option | Explanation | Selection |
|---|---|---|
| **JDBC Protocol Type** | 1 = TCP, 2 = TCPS | Sample: Select 2 for TCPS. TCPS is officially supported only for Oracle 19c. |
| **TrustStore Location Type** (Oracle 19c Only) | 1 = Bundled with JDK, 2 = Custom Truststore File Path | Sample: Select 1 for Bundled with JDK |
| **TCPS Oracle Net SSL Version** (optional) | SSL version | Sample: 1.2 (Clarity supports SSL 1.2) |
| **TCPS Oracle Net SSL Cipher Suites** (optional) | Cipher suite used by your organization | Select the cipher being used |
| **TCPS Oracle Net SSL Server DN Match** (optional) | Server DN match setting | Sample: false |
| **SSL TrustStore Type** (Custom Path) | 1 = PKCS12, 2 = JKS | Sample: Select 1 |
| **SSL TrustStore Location** | Path to truststore file | PKCS12: `/fs0/truststore.p12`, JKS: `/fs0/truststore.jks` |
| **SSL TrustStore Password** | TrustStore password | |
| **Confirm Your Configuration** | Allows you to validate the selections | Sample: y |

> [!IMPORTANT]
> When you are setting up a cluster installation, ensure that:
> - You copy the keystores created for the primary instance to the `<user.home>` directory of the secondary instance. The keystores are available at `<user.home.dir>/.jrsks` and `<user.home.dir>/.jrsksp` on the primary server. If you are using a Windows server, the keystores are available under `C:\users\<user directory>`.
> - The password in the `context.xml` file should be the same between the two servers in the cluster. To learn more, see KB 257255.

> [!WARNING]
> The JasperReports Server can be deployed as a standalone application or in a cluster for high concurrency. Clustered JasperReports Server instances use thread-safe access to their private repository database. As a result, any number of JasperReports Server instances can share the same repository and present the same environment to users.
> When the JasperReports Server is deployed in a cluster, we advise you to dedicate one or more JasperReports Server instances in the cluster to process the execution of scheduled reports. The dedicated instances share the same repository. However, they are not part of the load balancer to serve web requests such as executing reports through the user interface or exploring data through ad hoc views.
> For a standalone deployment where only a single instance of the JasperReports Server is available, the instance processes report scheduling. The instance also serves normal web requests such as report execution through the user interface and exploring data through ad hoc views.

You must select the appropriate option during the installation to have the installer make the instance either a scheduler or a non-scheduler instance. You only see this option when you select Yes in the previous step. All of the scheduler nodes should be removed from the load balancer configuration. When you do this, the web requests are not served by scheduler nodes. The only purpose of scheduler nodes is to run scheduled reports.

> [!IMPORTANT]
> You can select Standalone mode in case you do not want to use Cluster installation. You can then use the table given above to choose the options that are relevant to your installation.

When you want to install the secondary node for a cluster, select **Additional - Web App Only Deploy** and follow the relevant prompts.

---

## Configure Clustering

In a clustered setup of the Jaspersoft Server, a distributed cache is useful and you want these Jaspersoft Servers to share the data in the cache. You want the other Jaspersoft Servers to know if elements from the cache have been changed by one of the processes. To provide cache replication across Jaspersoft Server nodes, EhCache is used. EhCache holds a local copy of the data, and replication messages (adding elements, removing, and so forth) are sent from one Jaspersoft Server node to the others when a modification in the cache occurs.

The Jaspersoft Server EhCache implementation uses the following two mechanisms for replicating a cache across multiple nodes:

### RMI Based Cache Replication

EhCache provides replicated caching using RMI. To set up RMI replicated caching, do the following:

1. Configure the CacheManager with a PeerProvider and a CacheManagerPeerListener.
2. For each cache that will be replicated, add one of the RMI cache event listener types to propagate messages.
3. (Optional) Configure a cache to bootstrap from other caches in the cluster.

> [!NOTE]
> If your infrastructure does not support multicast, you can use JMS replication to ensure cache replication between multiple nodes.

### JMS Based Cache Replication

JMS can be used as the underlying mechanism for replication operations in EhCache. The EhCache jmsreplication module lets enterprises with a message queue investment leverage it for caching. Replication between cache nodes using a replication topic is provided, pushing of data directly to cache nodes from external topic publishers, and a JMSCacheLoader, which sends cache load requests to a queue.

### Multicasting and Cache Distributing over RMI

Multicast is a method of sending IP packets to a group of interested receivers. These packets are only sent to the members of a multicast group with the help of a multicast router. A multicast group is assigned Class D addresses (`224.0.0.0` - `239.255.255.255`). The first 4 bits of a multicast address should be 1110 and the remaining 28 bits represent different groups.

> [!NOTE]
> All of the Jaspersoft Server nodes should be in the same network subnet to enable multicasting.

In some cases, Linux distributions do not have multicast enabled by default and the `/etc/hosts` file does not include the IP address that is associated with the server hostname. As a result, you may encounter the "hostname associated with the localhost in `/etc/hosts`" error. Associate the hostname in `/etc/hosts` with the IP address that is set to the server network interface or to the external static NAT IP address of the server.

Verify that `/etc/hosts` has the IP address together with `127.0.0.1` and does not contain the entry for loopback address `127.0.1.1`:

```
$ cat /etc/hosts
127.0.0.1 localhosthost.localdomain localhost
```

### Configure Multicasting (Linux)

1. Enable multicast on the eth0 interface:
   1. Log in as a root user on all the instances in the cluster where JasperReports Server is installed.
   2. Run the following command to enable multicasting on eth0:
      ```bash
      $ /sbin/ifconfig eth0 multicast
      ```

> [!NOTE]
> All the instances should be in the same network subnet.

   3. Run the following command to verify that your network interface supports multicast:
      ```bash
      $ /sbin/ifconfig -a
      ```
      The Multicast attribute is present in the fourth line of the eth0 properties only if the kernel complies with the multicast support.

2. To configure the map network interface to send multicast traffic, add a default route for multicast traffic to the specific NIC. For example:
   ```bash
   $ route add -net 224.0.0.0 netmask 240.0.0.0 dev eth0
   ```

> [!NOTE]
> To check if multicast routing is configured, run: `$ /sbin/route -n`

3. Run the following command to display the multicast group membership information:
   ```bash
   netstat -g
   ```
   Once the route add command is run on all servers, ping the multicast IP:
   ```bash
   Ping -c10 "multicast address IP, which is generally 224.0.0.1"
   ```

> [!NOTE]
> Ping on multicast address may not be enabled in a few operating systems. In such scenarios, run: `echo 0 > /proc/sys/net/ipv4/icmp_echo_ignore_broadcasts`

All the IP addresses that are available in the current configured multicast environment appear.

### Configure Multicasting (Windows)

Reference the following Microsoft TechNet articles and learn how to set up multicast on Windows:
- Appendix A - IP Multicast
- Configure IP Multicast Support
- Enabling IP multicast

### Configure Cache Distribution over RMI on JasperReport Servers

1. Navigate to `D:\apache-tomcat-x.x.x\webapps\reportservice\WEB-INF` and paste the files which are attached in the `ehcache9.0-rmi.zip` file.
2. Windows explorer will mention that you are trying to replace files. Proceed with the replacement.
3. When you get a multicast address from your network team, open the following files:
- `D:\apache-tomcat-9.x.x\webapps\reportservice\WEB-INF\ehcache.xml`
- `D:\apache-tomcat-9.x.x\webapps\reportservice\WEB-INF\classes\ehcache_hibernate.xml`
4. Edit the relevant tags to incorporate the multicast address and port provided by the network team.
5. Verify that the 40011 and 40012 cache replication ports are open on the network end. You can change them to any specific ports which are deemed open by the network team. Make any changes in all members of the cluster.
6. The primary instance has a page limit of 500 by default. To increase that to 1000:
   1. Navigate to: `D:\apache-tomcat-9.x.x\webapps\reportservice\WEB-INF\classes\`
   2. Edit the `jasperreports.properties` file.
   3. Search for the `net.sf.jasperreports.governor.max.pages` property.
   4. Change its value to 1000.
7. After completing all your configuration changes, start services on all the instances.

### Configure Cache Distribution with JMS on JasperReport Servers

Two open-source message queues are available: Open MQ and Active MQ. This example uses Active MQ.

1. Set up Active MQ:
   1. Download the Active MQ server from Apache ActiveMQ. We recommend Active MQ 5.5.10 (`apache-activemq-5.5.10`).
   2. Extract Active MQ.
   3. Go to the following path: `apache-activemq-<x.x.x>-incubator\bin`
   4. Log in using the admin credentials for Active MQ server.

> [!NOTE]
> The default port for Active MQ is 61616. You can access the ApacheMQ admin panel through port 8161:
> - URL: `http://<activemq-machine-name>:8161/admin`
> - Login Username: admin
> - Login Password: admin

2. Stop the Jaspersoft Tomcat server.
3. Go to the root drive of the installer (`C:\jaspersoft` or `/fs0/`).
4. Go to the folder: `<jaspersoft-installer-folder>\overlay\ehcache\jms`
5. Copy the `WEB-INF` folder to `<tomcat>/webapps/<jaspersoftwebcontext-folder>`. When the operating system asks you if it can override the existing files, click **Yes**.
6. Go to: `<tomcat>/webapps/<jaspersoftwebcontext-folder>/WEB-INF`.
7. Open the file `ehcache_hibernate.xml` in edit mode.
8. Search for `providerURL=tcp://localhost:61616`. When found, replace `localhost` with the actual IP or hostname of the ActiveMQ server.
9. Go to: `<tomcat>/webapps/<jaspersoftwebcontext-folder>/WEB-INF/classes`.
10. Open the file `ehcache_hibernate.xml` in edit mode.
11. Search for `providerURL=tcp://localhost:61616`. When found, replace `localhost` with the actual IP or hostname of the ActiveMQ server.
12. Repeat the steps for all of the Jaspersoft instances that are available in the cluster.
13. Before you start Jaspersoft Tomcat, do the following:
- Delete the Tomcat temp directory.
- Delete the `work/Catalina/localhost` directory.

> [!NOTE]
> If you use a standalone ActiveMQ server, there is a high possibility of failure. Hence, we recommend you create a cluster of ActiveMQ servers to support cache high availability. To learn more about setting up an ActiveMQ cluster, see Active MQ Cluster with Failover Protocol.

---

## Verify the JasperReports Server Installation

Complete the following steps to verify that the installation was successful.

1. Start the JasperReports Server if it has not already started.
2. Go to the Jaspersoft Tomcat bin directory (`<Jaspersoft-Tomcat-Root>/bin`), and run the following command:
- **Linux:**
     ```bash
     chmod u+x ./startup.sh
     ./startup.sh
     ```
- **Windows:**
     ```
     startup.bat
     ```
3. Open `http://<domain_name>:<portnumber>/<jasperwebcontext>/`.
4. Verify that you can open the JasperReports Server login page.
5. Log in to the JasperReports Server using the superuser credentials.
6. Review the `install.log` for any errors. This file is available in the folder where you unzipped the contents of the JasperReports Server installation file.

> [!TIP]
> During the installation, the Jaspersoft license file is copied to the installation directory and appropriate user folder automatically.

---

## JasperReports Server Post-Installation Recommendations
- Create a backup of the installation keystore (`<user.home.dir>/.jrsks` and `<user.home.dir>/.jrsksp`) to ensure you can connect to the Jaspersoft database in case of any issues. You will not be able to access your data if you don't have a copy of the keystore files. If you are using a Windows server, the keystores are available under `C:\<users>\user`.
- If you use Oracle, run the following query after the JasperReports Server installation to improve the overall performance of the system:
  ```sql
  exec DBMS_STATS.GATHER_SCHEMA_STATS(
    ownname => USER,
    degree => DBMS_STATS.AUTO_DEGREE,
    estimate_percent => 100,
    cascade => true,
    method_opt => 'FOR ALL COLUMNS SIZE 1'
  );
  ```
  We recommend that you run this query frequently.
- The **Output to Host File System** option saves the report output to a specified folder on the JasperReports Server host server. This option is disabled by default. For information about enabling this option, see the Jaspersoft documentation.
- The governor limit on the JasperReports Server database connection has a timeout set to 15 minutes (900000 milliseconds). Report queries running longer than 15 minutes close and an error appears indicating the timeout. You can change the setting in the following location:
  ```
  webapps/<jasperwebcontext>/WEB-INF/classes/jasperreports.properties
  net.sf.jasperreports.governor.timeout.enabled=true
  net.sf.jasperreports.governor.timeout=900000
  ```

> [!TIP]
> For better performance and to relieve stress on the database, do not change this setting.
- The governor limit on the JasperReports Server pages is set to 500. This limit applies to all output formats. You can change this setting in the following location:
  ```
  <tomcatDirectory>/webapps/<jasperwebcontext>/WEB-INF/classes/jasperreport.properties
  net.sf.jasperreports.governor.max.pages.enabled=true
  net.sf.jasperreports.governor.max.pages=500
  ```
  Setting this limit requires a restart of the JasperReports Server.

---

## JasperReports Server Post-Installation Configuration

After you complete and verify the JasperReports Server installation, complete the following steps to configure the JasperReports Server to work with Classic PPM. The Advanced Reporting content includes domains for use with the data warehouse.

### Configure the JasperReports Server Properties

Set the server properties for the JasperReports Server in Classic PPM System Administration (CSA).

1. Log in to CSA. The default login URL for CSA is `http://<hostname>:8090/niku/app`.
2. Click **Servers** in the left navigation pane, and click the name of the local server in the list.
3. With the **Properties** tab selected, click the **Reporting** subtab.
4. In the **Report Server: Jaspersoft** section, complete the following fields:
- **Vendor:** Specifies the report vendor. For this section, only Jaspersoft is available.
- **Status:** Indicates whether the JasperReports Server is available. If the server status is unavailable either because it is down, the URL is incorrect, or there is a network issue, provide a valid Web URL for the JasperReports Server.
- **Web URL:** Specifies the web URL for the JasperReports Server (for example, `http://<jaspersoft-hostname>:8080/<jasperwebcontext>`).
- **User:** Specifies the JasperReports Server user name who performs system tasks that require administrator access. The default user is `ppmjasperadmin`. You can change the default user name before you import Advanced Reporting content. The import creates the user. Do not change the user name after you import the Advanced Reporting content.
- **Database ID:** Not applicable.
- **Organization Name:** Specifies the organization name (tenant name) that is created on the JasperReports Server.
- **Organization ID:** Specifies the organization ID (tenant ID) that is created on the JasperReports Server.

> [!NOTE]
> If the Report Server: Jaspersoft section is not available, configure the following tag in the `<clarityInstallFolder>/properties.xml` file:
> ```xml
> <reportServer id="jaspersoft"
>   webUrl="http://<serverName>:<portnumber>/<jaspersoftwebcontext>"
>   context="/<jaspersoftwebcontext>" home=""
>   serviceUrl="http://<serverName>:<portnumber>"
>   volumeName="" username="ppmJasperAdmin" vendor="jaspersoft"
>   databaseId="Niku" jndiName="jdbc/clarity" dwJndiName="jdbc/dwh"
>   orgName="<orgname>" orgId="<orgID>" />
> ```

5. Click **Save**.

### Generate the Integration Key Store File

To authenticate Classic PPM and the JasperReports Server, the administrator needs to generate a trusted key store for each organization.

> [!NOTE]
> If you are upgrading your product release, use the following procedure to regenerate the keys, and copy the key store files.

1. Go to `<clarity_home>/bin`.
2. Run the following command to generate a key store from CSA:
   ```
   admin jaspersoft keystore
   ```
   To specify the key and password:
   ```
   admin jaspersoft keystore [-key <key> -password <password>]
   ```
   This command generates the following files in `<install>/config/` and `<install>/META-INF/reporting/store`:
- `<orgname>.jks` (key store file)
- `<orgname>.properties` (information about the key)
3. Copy these files to `<Tomcat>/webapps/<jasperwebcontext>/WEB-INF/config` where Jaspersoft is installed. Example: `<Tomcat>/webapps/reportservice/WEB-INF/config`

> [!NOTE]
> For clustered environments, copy these files in the same location on each of the nodes in the cluster.

4. Start the Tomcat service where the JasperReports Server is deployed.

> [!NOTE]
> The Advanced Reporting content cannot be imported without starting the reporting service.

5. (Optional) Repeat the steps to regenerate the key or change the organization.
6. Complete the previous steps successfully to ensure that the import of the Advanced Reporting content does not fail.

### Execute the Installation Commands

Before you run the installation commands, verify that you have completed the following tasks:
- Data Warehouse status is set to **Available**. To confirm, refer to the **Status** field in the Data Warehouse section of CSA.
- The Data Warehouse database link is created. To confirm, refer to the **Clarity Database Link** field in the Data Warehouse section of CSA.
- The Organization Name and Web URL are defined. To confirm, refer to the **Organization Name** and **Web URL** fields in the Reporting section of CSA.

1. Open a command prompt and navigate to the Classic PPM runtime bin directory.
2. Run the following command:
   ```
   admin content csk
   ```
   The installation process begins and information displays on the screen. The information is captured and stored in the `admin.log` file that is located in the logs directory. The output files are stored in the `logs/content/xog/csk` directory.
3. Run the following command using the superuser credentials to import the Advanced Reporting content:
   ```
   admin content-jaspersoft csk -userName superuser -password <password>
   ```
4. Review the screen output and the logs for important information after the installation completes.

> [!NOTE]
> If you have used the TCPS protocol option while installing Jaspersoft, you need to perform the following additional steps:
> 1. Create a copy of the PKCS12 or JKS truststore that you used while installing Jaspersoft and copy it to the `<Tomcat>/webapps/<jasperwebcontext>/WEB-INF/config/tcps-truststores` folder.
> 2. If you have used the Bundled JDK option for installation, copy and place the relevant keystore to the `<Tomcat>/webapps/<jasperwebcontext>/WEB-INF/config/tcps-truststores` folder.
> 3. Navigate to `<clarity_home>/bin` and run the following command:
> ```
> ./admin jaspersoft secureDBParams add -isCustom true -fileName <name of truststore> -fileType <truststore type (.p12 or .jks)> -password <password> -sslCipherSuites <ciphername used while installing Jaspersoft> -sslVersion 1.2 -sslServerDNMatch false
> ```
> Sample command:
> ```
> ./admin jaspersoft secureDBParams add -isCustom true -fileName truststore.p12 -fileType PKCS12 -password Dummy#1234 -sslCipherSuites TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 -sslVersion 1.2 -sslServerDNMatch false
> ```
> 4. You can also use the following command to view the configuration:
> ```
> ./admin jaspersoft secureDBParams list
> ```
> 5. You can also use the following command to delete the configuration:
> ```
> ./admin jaspersoft secureDBParams remove
> ```

### Configure Users for Advanced Reporting

To set up Advanced Reporting with Jaspersoft, configure users for Advanced Reporting.

1. Assign the required Advanced Reporting access rights to the report users. See Advanced Reporting Access Rights.
2. Run the **Create and Update Jaspersoft Users** job to synchronize the Classic PPM users with assigned access rights to their corresponding Jaspersoft users and roles.

> [!NOTE]
> The PMO Accelerator add-in includes additional roles (CSK roles) that set permissions for repository items (such as reports and domains). To configure users for CSK roles, see Advanced Reporting Roles and Permissions.

### Restart the Classic PPM Services

1. Log in to Classic PPM System Administration.
2. Under **Home**, click **All Services**.
3. Select the checkboxes next to the **Classic PPM Application (app)** and **Classic PPM Background (bg)** services.
4. Click **Start**.

### Run the Data Warehouse Jobs

Always run the jobs in order as listed.

1. Run the **Create and Update Jaspersoft Users** job: This job synchronizes Clarity users with assigned access rights to their corresponding Jaspersoft users and roles.
2. Run the **Time Slicing** job: This job splits time-varying data into a relational format.
3. Run the **Load Data Warehouse** job: This ETL job extracts the data from the database, transforms the data, and loads the data into the data warehouse. This job also updates the domains.
4. Decide which data to include: Open the properties for any custom object or attribute that you want to include and select the **Include in the Data Warehouse** option. This option must be selected for custom objects or attributes to be populated in the data warehouse. Run the Load Data Warehouse job again. Schedule this job to run in full and incremental modes with the other jobs according to a strategy that you define.
5. Run the **Load Data Warehouse Access Rights** job: This job loads the access privileges for resources and investments from the database to the data warehouse. This job is initially disabled. Enable this job before you run it.

> [!WARNING]
> - After installation, to populate the data warehouse, always run the Load Data Warehouse job with the **Full Load** option selected. The first run of this job can take a substantial amount of time.
> - The following events require you to run the Load Data Warehouse job again; however, you can run it in incremental mode:
>   - Deleting an attribute or clearing the Include in the Data Warehouse option for the attribute in Clarity Studio.
>   - Changing the data type of an attribute.
> - The following events require you to run the Load Data Warehouse job with the **Full Load** option selected again:
>   - Adding a language to the data warehouse.
>   - Changing a timeslice date to include a larger timeframe.

> [!NOTE]
> When the Load Data Warehouse and Load Data Warehouse Access Rights jobs run, they write standard messages to the jobs logs and detailed messages to the data warehouse logs. The default data warehouse log files are `bg-dwh.log` and `bg-ca.log`. To review the detailed data warehouse log messages, navigate to the data warehouse logs (under the standard Jobs logs) in Classic PPM System Administration. You can enable more logging by changing the Kettle Log Level. Click **Servers**, **Logs**, **Edit Configuration**. Use detailed messages to monitor job progress and to analyze data warehouse load failures.

---

## Configure Jaspersoft as a Windows Service

1. Download Tomcat 8 from the Tomcat Website: `https://tomcat.apache.org/download-80.cgi`. (This will not work if you use the TOMCAT provided with Clarity Jasper ISO.)
2. Reference the Java executables in the `PATH` environment variable. The Clarity 15.5 application and earlier uses Java 8, 15.5.1 and higher uses Java 11, but Jaspersoft for all releases still uses Java 8.
3. Navigate to the bin folder inside the Tomcat folder. For example, navigate to `%TOMCAT_HOME%\bin` using command prompt.
4. To create the service, enter the following command:
   ```
   service install <name_of_your_reporting_service>
   ```
   For example:
   ```
   service install JasperReports
   ```
5. Enter the following command in the same directory:
   ```
   tomcat8w.exe //ES//JasperReports
   ```
6. In the resulting **Apache Tomcat 8.5 JasperServer Properties** window, click the **Java** tab.
7. To edit the JVM configuration, add the following JVM parameters under the **Java Options** section:
   ```
   -XX:+UseG1GC
   -XX:+CMSClassUnloadingEnabled
   -XX:MetaspaceSize=256m
   -Duser.home=C:\Users\Administrator
   ```

> [!TIP]
> The first line (`-XX:+UseG1GC`) determines the Java garbage collector method for Jaspersoft. The last line refers to the home folder of the user account for the user who installed Jaspersoft.

8. Specify values for **Initial Memory Pool** and **Maximum Memory Pool**. The value for **Thread stack size** remains at 2048 KB.
9. Apply your changes.
10. Launch the service from the Windows services console.

---

## Restart the JasperReports Server Tomcat Services

Complete the following steps to stop or start JasperReports Server.

1. Navigate to the `<tomcathome>/bin` directory.
2. To stop, run one of the following files:
- **Linux:** `shutdown.sh`
- **Windows:** `shutdown.bat`
3. To restart, run one of the following files:
- **Linux:** `startup.sh`
- **Windows:** `startup.bat`

---

## Uninstall JasperReports Server

1. Stop the Tomcat service where the JasperReports Server is deployed.
2. Rename the existing `<jasperwebcontext>` folder.
3. Back up the JasperReports Server database.
4. Delete the JasperReports Server database from the database server.

> [!NOTE]
> **More Information:**
> - Advanced Reporting Access Rights
> - Export, Import, or Migrate Advanced Reporting Content
> - Run or Schedule a Job
> - Jobs Reference

---

## Decoupling Jaspersoft and DWH

Broadcom is continually working to improve its software and services to best meet the needs of our customers. To focus our development efforts to help our customer base achieve their strategic business initiatives, we are investing our resources in new technology and software, and will be discontinuing support for the CA Business Intelligence for Clarity, commonly known as Clarity Advanced Reporting powered by Jaspersoft.

As part of this transition, on-premise customers must remove their legacy Jaspersoft configuration while ensuring that core Clarity processes, especially the **Load Data Warehouse** job, continue to run successfully. Historically, the Load Data Warehouse job not only populated and refreshed the Clarity Data Warehouse schema but also pushed structural updates to the Jaspersoft server, including domains, metadata, and other reporting artifacts at the end of each run. This meant the job depended on a valid Jaspersoft configuration in the `properties.xml` file and would attempt to connect to the report server every time it executed. By removing the reportServer (Jaspersoft) configuration from `properties.xml`, the job no longer attempts to synchronize domains or update Jaspersoft content, allowing it to run purely as a data load. Once this decoupling is in place, you can retire Jaspersoft-specific rights and menu entries and instead point users to the Reporting workspace.

> [!NOTE]
> You can review the Clarity Reporting Workspace documentation to learn more about the new Reporting Workspace.

### Identify Advanced Reporting Access Rights

Run the **Jaspersoft-User Access Rights** report to identify the security rights associated with Jaspersoft.

### Remove Jaspersoft Configuration

The `properties.xml` file is the central server-side configuration file for an on-premise Broadcom Clarity environment, generated and maintained by the Classic PPM System Administration (CSA) tool. It stores key runtime settings such as database connection parameters, filestore locations, temporary directories, and integrations like the Jaspersoft report server or Report Service, and Clarity reads these values at service startup. The `reportServer` element in `properties.xml` defines the URL, credentials, and other metadata for the legacy Jaspersoft server. If misconfigured, jobs that interact with Jaspersoft (such as Load Data Warehouse with domain updates enabled) can fail with "could not log in to the report server" errors.

Updating or blanking this section is the supported way to change or disconnect the report server, which in turn allows the Load Data Warehouse job to run purely as a data load without attempting to update Jaspersoft, supporting a move toward the newer Reporting workspace.

1. Navigate to the `CLARITY_HOME/config` directory and locate the `properties.xml` file.
2. Create a backup copy of the file.
3. Edit the file to remove the entire `reportServer` section:
   ```xml
   <reportServer id="jaspersoft"
     webUrl="http://<my_reportserver>/reportservice"
     context="/reportservice" home=""
     serviceUrl="http://localhost:8000" volumeName=""
     username="ppmjasperadmin" vendor="jaspersoft"
     databaseId="Niku" jndiName="jdbc/clarity"
     dwJndiName="jdbc/dwh" orgName="" orgId=""/>
   ```
4. Save your changes and restart all services.

### Remove Access Rights

Now that you have disconnected the Jaspersoft server, use the results of the Jaspersoft-User Access Rights report to remove access rights from individual users and groups.

### Update the Clarity Application Menu

The Advanced Reporting link is removed when the Advanced Reporting rights are removed, but the Reports and Jobs link still shows the Reports link.

1. In Classic PPM, select **Administration**, **Studio**, **Menu Manager**, **Application Menu**.
2. Click **Reports and Jobs** to open it.
3. Update the name to **Jobs** and save your changes.

---

## Jaspersoft Reports Server Troubleshooting Tips (On-Premise Only)

The following information can help you with the implementation, management, and troubleshooting of your JasperReports Server installation.

### Clarity, Jaspersoft, and ODATA Vulnerability Mitigations

Clarity is not vulnerable to CVE-2022-22963 and CVE-2022-22965 as Clarity does not use Spring Framework. Data Warehouse OData Service (SaaS) is not vulnerable to CVE-2022-22963 and CVE-2022-22965 as ODATA SaaS used Java 8. See Knowledge Base article for mitigations.

### Clarity and Apache Log4j 2 Vulnerability

A critical vulnerability within the Apache Log4j 2 Security Vulnerability CVE-2021-45046 and its impacts with Clarity, Jaspersoft, and ODATA (Clarity SaaS). See Knowledge Base article for mitigations.

### Configure Scheduler and Non-Scheduler Instances for Jaspersoft

The JasperReports Server can be deployed as a standalone application or in a cluster for high-concurrency. Clustered JasperReports Server instances use thread-safe access to their private repository database. As a result, any number of JasperReports Server instances can share the same repository and present the same environment to users.
- When the JasperReports Server is deployed in a cluster, we advise you to dedicate one or more JasperReports Server instances in the cluster to process the execution of scheduled reports. The dedicated instances share the same repository. However, they are not part of the load balancer to serve web requests such as executing reports through the user interface and exploring data through ad hoc views.
- For a standalone deployment where only a single instance of the JasperReports Server is available, the instance processes report scheduling. The instance also serves normal web requests such as report execution through the user interface and exploring data through ad hoc views.

Classic PPM provides a mechanism to set dedicated JasperReports Server instances as scheduler instances. The instances are part of the load balancer to serve web requests for non-scheduler instances. During the Classic PPM installation of Jaspersoft 9.0, you are asked if you want a separate scheduler instance. If you answer yes, you are asked if you want to make the current instance a scheduler instance:
- **Yes:** The installer performs all of the necessary configuration changes to make the current instance a scheduler instance.
- **No:** The installer performs all of the necessary configuration changes to make the current instance a non-scheduler instance. To take full advantage of this configuration, ensure that the non-scheduler instances are part of the load balancer.

> [!NOTE]
> Select the appropriate option during the installation to make the instance a scheduler or a non-scheduler instance. If you are running only a single instance of the JasperReports Server, choose No when you are asked about separating the scheduler instance as a dedicated instance.

### Page Limits

When you have a non-scheduler instance in a clustered environment (standalone node), the maximum number of pages, by default, that can appear on the user interface is limited to 500 pages. When the limit is exceeded, you receive an error. If you need more than 500 pages to appear, you can schedule a report. When you have a Scheduler node, the maximum page limit is 1000.

### Set JVM Options for Jaspersoft

The JasperReports Server is supported on Java 17 Java Virtual Machine (JVM). Runtime parameters typically need to be explicitly set so that the memory settings have values that are larger than the default settings.

**Windows:**

1. Using Notepad or a similar application, open `<tomcat>/bin/setenv.bat` for editing.
2. Find the line: `Set JAVA_OPTS=%JAVA_OPTS% -Xms1024m -Xmx2048m -XX:MetaspaceSize=32m`
3. Update the line to increase the maximum heap size from 2048 (2 GB) to 4096 (4 GB). For example: `-Xmx4096m`.

**Linux/Unix:**

1. Open `vim <tomcat>/bin/setenv.sh` for editing.
2. Find the line: `export JAVA_OPTS="$JAVA_OPTS -Xms1024m -Xmx2048m -XX:MetaspaceSize=32m"`
3. Update the line to increase the maximum heap size from 2048 (2 GB) to 4096 (4 GB). For example: `-Xmx4096m`.
4. You might experience the following error while importing or exporting content, or while starting Tomcat:
   ```
   java.lang.UnsatisfiedLinkError: /usr/java/jdk17.x.x/jre/lib/amd64/libawt_xawt.so:
   libXtst.so.6: cannot open shared object file: No such file or directory
   ```
   To prevent these errors, add this parameter for JVM for Jaspersoft: `-Djava.awt.headless=true`

> [!TIP]
> Consult Broadcom Service partners for help in sizing your JVM heap size based on your implementation.

### Restrict Advanced Reporting Notifications to Trusted Email Domains

In Advanced Reporting, users can email reports either as hyperlinks to the report page or as attachments. When scheduling the reports, they can specify the email addresses for sending the reports and job status notifications. As an administrator, you can specify trusted email domains so that notifications do not go out to email addresses outside these domains.

> [!NOTE]
> If you do not specify a list of trusted email domains, then report emails and job status notifications are sent to all email addresses that the user specifies when scheduling reports. Alternatively, you can disable the email notifications capability so no report or job status notifications are sent out.

You can configure the notification restrictions at the organization level specified for a particular Classic PPM instance. Invoke the following commands from the Classic PPM command-line interface:
- **Add trusted email domains** (the list cannot exceed 1200 characters):
  ```
  admin jaspersoft email -addDomains <comma_separated_list_of_trusted_domains>
  ```
- **Display existing trusted email domains:**
  ```
  admin jaspersoft email listDomains
  ```
- **Remove email domains from the existing list:**
  ```
  admin jaspersoft email -removeDomains <comma_separated_list_of_domains_to_remove>
  ```
- **Disable report emails and job status notifications:**
  ```
  admin jaspersoft email disableNotifications
  ```
- **Re-enable report emails and job status notifications:**
  ```
  admin jaspersoft email enableNotifications
  ```

### Check the Installer Version

For information about the installer version, check the following files:
- The installer README file
- `version.html` file that is created after you install JasperReports Server. You can also check this file using the following example URL:
  ```
  http://<servername>:<portNumber>/<reportservice>/version.htm
  ```

### HTTPS Enabled Jaspersoft

Complete the following steps if the JasperReports Server is HTTPS enabled.

1. Use a browser to download and save the certificate from the JasperReports Server URL. For example, save it as `SETI_JAAS_CER.cer`.
2. From the command prompt, navigate to `JDK_HOME` on the server where Classic PPM is installed.
3. Navigate to `jre\lib\security`. Example: `C:\jdks\jdk17.x.x\jre\lib\security>`
4. Run the following command:
   ```
   keytool -importcert -keystore cacerts -alias tomcat9 -storepass changeit -file SETI_JAAS_CER.cer -trustcacerts
   ```
5. Restart Classic PPM.

> [!NOTE]
> To delete an entry from the key store, run the following command:
> ```
> keytool -delete -keystore cacerts -alias tomcat9 -storepass changeit
> ```
> The downloaded certificate is deleted from the certificate store.

### Jaspersoft Sender Email Address

The sender email address is the address that appears when JasperReports Server sends an email notification for a scheduled report. JasperReports Server lets you set the sender email address at the JasperReports Server level, but not at the tenant (organization) level. The default sender email address value for on-premise implementations is:

```
do-not-reply@your_domain.com
```

To change the default address after the installation:

1. Locate and open the `js.quartz.properties` file in a text editor.
2. Edit the `report.scheduler.mail.sender.from` property to include your sender email address and save the file.
3. Restart the JasperReports Server.

### Failed to Update Properties on the Jaspersoft Server

While saving the Data Warehouse properties in Classic PPM System Administration (CSA), you may receive the following error message: "Failed to update properties on the Jaspersoft server."

This error can be the result of one of the following reasons:
- The key store file was deleted or the Classic PPM CSA Jaspersoft administrator user (ClarityJasperAdmin) was changed, which resulted in the key store expiration.
  **Resolution:** Regenerate the key store file and copy it to the `<JasperReportsServerTomcat>/config` folder.
- The Advanced Reporting content was reimported without first deleting the existing organization/tenant.
  **Resolution:** Delete the tenant from the JasperReports Server UI directly or execute the following command from the Classic PPM install directory:
  ```
  jaspersoft delete [-properties propertiesFile] -userName username -orgName orgId[,<orgId>..] -url jsUrl -password password
  ```

### java.nio.BufferUnderflowException

Oracle Version 12.1.0.2.0 to 12.2.0.0.0 has a known issue that causes this error. Please review the Knowledge Base article to resolve this issue.

### User Not Registered Error on the Advanced Reporting Page

When you access the Advanced Reporting page, you may receive the error: "Error 401 User Not Registered."

This error can be the result of one of the following reasons:
- The key store file was not copied to the `<JasperReportsServerTomcat>/config` folder.
  **Resolution:** Locate the generated key store file and copy it from `C:\<clarity_runtime>\config\` to `<JasperReportsServerTomcat>\webapps\<jasperwebcontext>\WEB-INF\config\`.
- The user does not exist on the JasperReports Server, but the Classic PPM database shows that the user status is synchronized to JasperReports Server.
  **Resolution:** Execute the **Create and Update Jaspersoft Users** job with the **Full Sync** option.

### Internal Server Error on Advanced Reporting Page

When you access the Advanced Reporting page, you may receive the error: "Error 500 - Internal Server Error."

This error can occur if the key store file was not copied to the `<JasperReportsServerTomcat>/config` folder.

**Resolution:**

1. Locate the generated key store file and its information for organization name: ca, organization Id: ca in `C:\<clarity_runtime>\config\`.
2. Copy the key store file and organization information to `<JasperReportsServerTomcat>\webapps\<jasperwebcontext>\WEB-INF\config\`.

### Memory Leak Errors in Tomcat Logs

Occasionally, you may see memory leak error messages in Tomcat, especially when restarting the JasperReports Servers as a result of maintenance. These errors have been reported on the Linux platform, although they may also be seen in Windows. Related to these errors, you may notice that the Tomcat process does not exit gracefully or that Advanced Reporting is not accessible even though the port is available.

**Resolution:**

1. Verify that the JasperReports Server Tomcat process is not present after performing a shutdown (for example, `ps -ef | grep tomcat`).
2. If the process is present, kill the process gracefully (for example, `kill -9 <ProcessID>`).
3. Start up the Tomcat process again.

### Please Wait Message on the Advanced Reporting Page

When you access the Advanced Reporting page, you may see the "Please Wait" message that does not go away.

1. See KB article KB000004562 for details including workarounds to resolve the issue.
2. Advise users to clear their browser cookies and temporary cache files.

### Project Storyboard Report Error

When publishing the Project Storyboard report for the first time after an upgrade to 15.x, you see an error. The logs show:

```
java.sql.SQLSyntaxErrorException: ORA-00904: "SC51564DDWH"."DWH_INV_REMAINING_ALLOC_FCT": invalid identifier
```

**Resolution:** After upgrading, run the following jobs in the listed order:

1. **Load Data Warehouse** (select the Full Load option)
2. **Load Data Warehouse Access Rights**

The Load Data Warehouse job is required to populate the Status Report object in the data warehouse for Advanced Reporting.

### Custom Attributes Enabled for the Data Warehouse Do Not Appear in Jaspersoft Domains

After an upgrade, you might observe that custom fields checked for the data warehouse do not appear in Jaspersoft domains where users create their ad hoc queries.

**Resolution:**

1. Run the following command:
   ```
   admin content-jaspersoft csk restoreDomains -userName superuser -password superuser
   ```
2. Wait for this command to finish.
3. Run the **Load Data Warehouse** job in **Full** (not incremental) mode.

---

## Jaspersoft Server Ehcache Replication with JMS - Active MQ Cluster

When you set up a Jaspersoft cluster you need to support node to node replication. When you use JMS cache replication, you use the ActiveMQ message server to replicate caches across Jaspersoft nodes. If there is a standalone ActiveMQ server, there is a high possibility of failure. Hence, we need to create a cluster of ActiveMQ servers to support cache high availability.

### Jaspersoft Server Ehcache Replication with JMS - Active MQ Cluster on Failover Protocol

Apache ActiveMQ supports a number of clustered modes of operation. The master-slave failover mode is most widely used by customers. A master-slave failover mechanism uses a shared storage approach. In our scenario, the shared storage can be an NFS file system which is running the KahaDB persistence layer. Two or more Active MQ systems compete for the lock on a shared filestore. The broker that gets the lock is the master and the remaining brokers are the slaves. Only the master broker will accept network connections from clients.

The roles in the cluster will only change if the current master fails, in which case a slave will promote itself to master by taking control of the lock which the previous master released. The simplest way to test failover is to use a `failover:` URL with a static list of candidate broker URLs:

```
failover:(tcp://host1:port1,tcp://host2:port2...)?options
```

### Active MQ Cluster

Download ActiveMQ version v6.1.2. You must have two instances of ActiveMQ running namely master and slave. It is recommended to host these instances on separate machines. You also need an NFS server in order to share data between these instances.

After you set up your NFS server, you need to configure the NFS client.

#### Configuring the NFS Client (CentOS)

1. Install NFS packages using yum:
   ```bash
   yum install nfs-utils
   ```
2. Create the NFS directory mount point(s):
   ```bash
   mkdir /datastore/activemq-data
   ```
3. Mount the directory:
   ```bash
   mount -t nfs "nfs-server-ip":"configured-nfs-directory" /datastore/activemq-data
   ```
4. Verify the NFS mount:
   ```bash
   df -kh
   ```
   After executing this command, you should see a list of file systems including the NFS configured by you.

#### Setting up a Permanent NFS Mount

You will have to remount all your NFS directories after every reboot. To make sure it is available upon reboot:

1. Open the fstab file:
   ```bash
   vi /etc/fstab
   ```
2. Add the following line:
   ```
   "nfs-server-ip":"configured-nfs-directory" datastore/activemq-data nfs defaults 0 0
   ```

### ActiveMQ Master-Slave Configuration

#### Install ActiveMQ on Two Separate Systems

Unpack the ActiveMQ 6.1.2 zip bundle on two systems into relevant directories. Do not update the default configurations. The only changes you need to make are:
- Ensure that the ActiveMQ Broker port is 61616 on both systems in the `transportConnector` section of `activemq.xml` file in the conf directory.
- Ensure that the HTTP Web Console port is 8161 for both systems in the `jetty.xml` file located in the conf directory.

#### Test That the Broker Instances Can Be Started Together

The broker instances would not start as a cluster if they do not start separately. Starting them separately ensures there are no remaining port conflicts. It is recommended you run ActiveMQ in the foreground:

```bash
[amq61616]$ ./bin/activemq console
```

#### Master-Slave Configuration

Ensure you make these changes after shutting down the two broker instances on both systems.

Configure each broker instance to use the same directory to store its message log. In `activemq.xml` file within the conf directory, edit the `persistenceAdapter` entry:

```xml
<kahaDB directory="/datastore/activemq-data/kahadb"/>
```

> [!NOTE]
> You don't have to use the `/datastore/activemq-data/kahadb` directory. However, the directory must be the same for each broker, and on a filesystem that supports locking.

Configure the master and slave instances by adding complementary network connectors. On the broker listening on port 61616, edit the `activemq.xml` file in the conf directory. Navigate to the `persistenceAdapter` setting and add the following code:

```xml
<networkConnectors>
  <networkConnector duplex="true"
    uri="masterslave:(tcp://<amqserver1>:61616,tcp://<amqserver2>:61616)"/>
</networkConnectors>
```

Conversely, create a network connector to the broker on port 61616 from the `activemq.xml` of the other broker. Now, start both brokers in separate consoles again.

#### Check that the Brokers are Listening as Expected

Of the two broker ports, only one should currently be listening for incoming connections, even though both brokers are running:

```bash
$ netstat -anp|grep 6161|grep LISTEN
```

Which port is open depends on which broker started up first. If the non-listening instance's console shows the following message, the cluster is working correctly:

```
INFO | Database /tmp/mq/lock is locked... waiting 10 seconds for the database to be unlocked.
Reason: java.io.IOException: File '/tmp/mq/lock' could not be locked.
```

### Configure Jaspersoft Ehcache Replication with ActiveMQ Cluster on Failover Protocol

1. Stop the Tomcat server.
2. If you are using Jaspersoft 9.0, download and unzip the `ehcache_Jasper9.0_jms.zip` file to extract its contents to a new folder.
3. Navigate to the newly created folder and open the `ehcache.xml` and `ehcache_hibernate.xml` files in the text editor.
4. Search for XML attribute `providerURL` in the files and give the value of your ActiveMQ broker URL. Remember to provide addresses of all the brokers you have configured as comma-separated values. You have to update the provider URL in multiple locations in both these files.

> [!NOTE]
> For every `cacheManagerPeerProviderFactory` and `cacheLoaderFactory` XML element, the `propertySeparator` should be configured to the `~` character. Ideally, `propertySeparator` is configured to comma (`,`). In the `providerURL`, the broker details are separated by comma. Hence, to avoid confusion the `,` was changed to `~` for the `propertySeparator` value.

5. Save and close the `ehcache.xml` and `ehcache_hibernate.xml` files.
6. Navigate to the `tomcat/webapps/reportservice/WEB-INF` folder and paste the edited `ehcache.xml` and `ehcache_hibernate.xml` files.
7. Navigate back to the folder where you unzipped files and open the `classes` directory.
8. Open the `ehcache.xml` and `ehcache_hibernate.xml` files in the text editor.
9. Specify the failover URL of the ActiveMQ cluster. Search for XML attribute `providerURL` and update with all broker addresses as comma-separated values in multiple locations.
10. Navigate to the `tomcat/webapps/reportservice/WEB-INF/classes` folder and paste the edited files.
11. The configurations listed above need to be done on all the instances of Jaspersoft that are available in the cluster.
12. Before starting the Tomcat, delete the following directories:
- Tomcat temp directory
- `work/Catalina/localhost`
