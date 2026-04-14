# Administration

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[12 - Administration/_MOC Administration|Administration]]
- Canonical notes:
- [[12 - Administration/Staffing Administration]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: CSA: Classic PPM System Administration (On-Premise Only) (#csa-classic-ppm-system-administration-on-premise-only)
- H3: Clarity Server/URL Contexts (#clarity-serverurl-contexts)
- H3: Classic PPM System Administration Server Properties (#classic-ppm-system-administration-server-properties)
- H3: System Properties (#system-properties)
- H3: Database Server Properties (#database-server-properties)
- H3: Application Server Properties (#application-server-properties)
- H3: Documents and Search Properties (#documents-and-search-properties)
- H2: Server Reporting Properties (#server-reporting-properties)
- H2: Data Warehouse Server Properties (#data-warehouse-server-properties)
- H3: Oracle Only (#oracle-only)
- H3: Connection Details (#connection-details)
- H3: Data Warehouse Governor Limits (#data-warehouse-governor-limits)
- H2: Server Security Properties (#server-security-properties)
- H3: Encryption Section (#encryption-section)
- H3: LDAP Server Section (#ldap-server-section)
- H3: LDAP Attribute Mapping Section (#ldap-attribute-mapping-section)
- H3: Single Sign-On Section (#single-sign-on-section)
- H2: Background Properties (#background-properties)
- H2: Microservice Broker Properties (#microservice-broker-properties)
- H2: Getting Started with the Microservice Broker (#getting-started-with-the-microservice-broker)
- H3: Introduction to Microservice Broker (#introduction-to-microservice-broker)
- H3: Deploy the PPMBroker Service (#deploy-the-ppmbroker-service)
- H3: Redeploy the Application (#redeploy-the-application)
- H3: Validate Deployment of the PPMBroker Service (#validate-deployment-of-the-ppmbroker-service)
- H3: Example: Enhancing Real-Time Updates in Staffing with the Microservice Broker (#example-enhancing-real-time-updates-in-staffing-with-the-microservice-broker)
- H2: Getting Started with the Report Service (#getting-started-with-the-report-service)
- H3: Key Benefits (#key-benefits)
- H3: Configuration Overview (#configuration-overview)
- H3: Deployment Methods (#deployment-methods)
- H3: Recommended Hardware Configuration (#recommended-hardware-configuration)
- H3: Logs and Monitoring (#logs-and-monitoring)
- H3: Functional Behavior (#functional-behavior)
- H3: Example Configuration Scenarios (#example-configuration-scenarios)
- H3: Recommendations and Limitations (#recommendations-and-limitations)
- H2: CSA: Maintain and Monitor Classic PPM (On-Premise Only) (#csa-maintain-and-monitor-classic-ppm-on-premise-only)
- H3: Start and Stop Services (#start-and-stop-services)
- H3: Open Server Ports (#open-server-ports)
- H3: IGMP Snooping (#igmp-snooping)
- H3: Run Health Reports (#run-health-reports)
- H3: Check Log Files (#check-log-files)
- H3: Edit the Logger Configuration (#edit-the-logger-configuration)
- H3: User-Specific Logging (#user-specific-logging)
- H3: Action Tracing (#action-tracing)
- H3: Back up an Installation (#back-up-an-installation)
- H3: Restore a Classic PPM Installation (#restore-a-classic-ppm-installation)
- H3: Compile and Analyze Existing Oracle Database Objects (#compile-and-analyze-existing-oracle-database-objects)
- H3: Set File Directory Size (#set-file-directory-size)
- H3: Set GEL Tag Restrictions (#set-gel-tag-restrictions)
- H2: CSA: Document Index, Search, Storage, and File Scanning (On-Premise Only) (#csa-document-index-search-storage-and-file-scanning-on-premise-only)
- H3: Select the Method to Index Documents (#select-the-method-to-index-documents)
- H3: Recreate the Search Index (#recreate-the-search-index)
- H3: Migrate the Filestore to the Database (#migrate-the-filestore-to-the-database)
- H3: Set Up File Scanning (#set-up-file-scanning)
- H2: CSA: Security, Passwords, LDAP, SSL, SSO, XSS, and FIPS (On-Premise Only) (#csa-security-passwords-ldap-ssl-sso-xss-and-fips-on-premise-only)
- H3: Manage Database Server Passwords (#manage-database-server-passwords)
- H3: Encrypt Server Passwords (#encrypt-server-passwords)
- H3: Change Database Server Passwords (#change-database-server-passwords)
- H3: Configure Secure Sockets Layer (SSL) on Apache Tomcat (#configure-secure-sockets-layer-ssl-on-apache-tomcat)
- H2: SSL Keystore Distribution (#ssl-keystore-distribution)
- H3: Set the Keystore File Location and Password (#set-the-keystore-file-location-and-password)

As an administrator, you configure the application for users. Manage user access rights, security, organizational breakdown structures (OBS), the data warehouse, the datamart, and time slices. You can also configure options for processes, lookups, jobs, and other system settings.

The following image shows the **Administration** menu where you perform many common administrative tasks. Menu options vary by release and by access rights. Your menu options might vary.

> [!TIP]
> Before engaging with the online community or Broadcom Support, administrators can generate a system health report. See **Health Report**, **Job Monitor**, **Governor Settings**, and **Data Warehouse Audit Dashboard**. Many of the support issues analyzed for data warehouse failures are caused by errors or omissions in basic setup information. For example, database configuration, DBLINK, entity or time slice setup, time zone mismatch between the application and database servers, and `SQLNET.ORA` parameters.

**Customer Success Story: Fiat Chrysler Automobiles (FCA)**

`https://www.broadcom.com/case-studies/business-managment/fiat-chrysler-automobiles-optimizes-ict-expenditure-withclarity-ppm-saas`
- **Business:** The seventh-largest car manufacturer in the world, Fiat Chrysler Automobiles (FCA) manufactures and markets cars, commercial vehicles, parts, and engines worldwide.
- **Challenge:** To support its advanced ICT budgeting process, FCA Italy needed a solution to improve efficiency and reduce processing time, while boosting ICT staff productivity.
- **Solution:** FCA implemented Clarity SaaS to manage its dynamic ICT budgeting process. Clarity is used by 200 staff members to process 8,000 budget change requests every year.
- **Benefit:** The IT budgeting process is now far more responsive, enabling FCA to combine business agility and ICT savings. Transparency and collaboration have also improved.

---

## CSA: Classic PPM System Administration (On-Premise Only)

Use Classic PPM System Administration (CSA) to install, upgrade, configure, monitor, and verify the health of a cluster. To ensure that all servers are accessible, verify that the Beacon service is running on each server. The Beacon service enables remote, distributed management and allows you to do the following tasks:
- View and modify remote server properties
- Stop, start, and verify the status of services in the cluster
- Read remote server log files
- Run remote server health checks
- Distribute user interface customizations and product updates such as patches, fixes, and upgrades

Log in to CSA with the password that you created during installation. The following default login URL is for CSA on servers running Apache Tomcat:

`http://<hostname>:8090/niku/app`

Refer to this information when changing the configurable application server properties in Classic PPM System Administration (CSA). The Classic PPM properties are described, and specify which properties must be identical across all servers and which properties when changed, require services to be restarted. You can modify application server properties either for the local application server or a remote server.
- Clarity Server/URL Contexts
- Classic PPM System Administration Server Properties
- System Properties
- Database Server Properties
- Application Server Properties
- Documents and Search Properties
- Server Reporting Properties
- Data Warehouse Server Properties
- Server Security Properties
- Background Properties
- Microservice Broker Properties

### Clarity Server/URL Contexts
- `/niku` is the main Clarity application context.
- `/ppm` is the REST web services context.
- `/pm` is the context for Clarity.
- `/reportservice` is the Jaspersoft report server context.

---

### Classic PPM System Administration Server Properties

Use the Classic PPM System Administration server properties page to configure system options such as the server multicast address and port. To view this page, click the **CSA** sub tab on the server properties page.

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Multicast Address** | The multicast address that the Beacon and Classic PPM System Administration use for service discovery. Each Classic PPM cluster requires a unique IP address. The multicast address must be in the Class address range from `224.0.0.0` through `239.255.255.255`. Each server within a cluster must use the same address and port. Default: `230.0.1.1`. We recommend an IP address in the `239.x.x.x` subnet. | Yes | beacon |
| **Multicast Port** | Multicast port used with the multicast address. Must be a unique port on a machine. The multicast address that the Beacon and Classic PPM System Administration use for service discovery. Each Classic PPM cluster requires a unique IP address. Each server within a cluster must use the same address and port. Default: `9090` | Yes | beacon |
| **Bind Address** | (Apache Tomcat) Optional IP address or name specifying a local network interface. This option is useful when more than one network interface is present and one specific interface must be chosen, or when you have a clustered installation. If there are multiple NICs in the server, specify the IP address of the interface through which multicast traffic is to flow. When you use IPv6 Link Local addresses, the zone ID used must be the same for all addresses in a cluster of servers. | No | beacon |

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Auto Start Service** | Specifies whether startup is automatic or manual for a Windows application server. If the check box is selected, startup is automatic. If the check box is cleared, startup is manual (default). | No | beacon |
| **Service User** | Specifies the Windows service property, Log on Account. Possible values: **LocalSystem** (the service runs as the standard local system account, default). `.\<username>` (the service runs as a local user, where `<username>` is the local account; the period backslash `.\` syntax is required by Windows to specify a local machine account). `<domain>\<username>` (the service runs as a domain user, where `<domain>` is the domain name, and `<username>` is the domain user). | No | beacon |
| **Service Password** | Defines the password for the user who is specified in the **Service User** field for Windows. The field is optional and empty by default. | No | beacon |
| **Beacon Service Name** | The unique name of the Beacon service. On Windows systems, this is the name of the Windows Service. | No | beacon |
| **Beacon Port** | Controller port that is used by the Beacon service on each server. | No | beacon |

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Network Address Cache TTL** | The Java virtual machine (JVM) caches DNS name lookups. When the JVM resolves a hostname to an IP address, it caches the IP address for a specified period of time, known as the time-to-live (TTL). Because resources use DNS name entries that occasionally change, we recommend that you configure your JVM with a TTL value of no more than 60 seconds. This ensures that when a resource's IP address changes, your application will be able to receive and use the resource's new IP address by requerying the DNS. On some Java configurations, the JVM default TTL is set so that it will never refresh DNS entries until the JVM is restarted. Thus, if the IP address for a Clarity resource changes while your application is still running, it won't be able to use that resource until you manually restart the JVM and the cached IP information is refreshed. In this case, it's crucial to set the JVM's TTL so that it will periodically refresh its cached IP information. If a security manager is installed, then set Network Address Cache TTL to FOREVER. If a security manager is NOT installed then set Network Address Cache TTL to 30 seconds. | No | All Services |
| **Use JDBC Ping** | This allows optional implementation of JDBC-based messaging at the database level using JGROUPS JDBC ping discovery protocol. To know more, see **CSA: Configure JDBC Ping As An Alternative to Multicast (On-Premise Only)**. | No | All Services |

---

### System Properties

Use the system server properties page to set up the server's system options, such as setting up Classic PPM to support multiple currencies. To view this page, log in to Classic PPM System Administration and click the **System** sub tab on the server properties page.

#### Operating System Users and Groups

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **User** | The application operating system (OS) user, referred to in this document as the niku user. The default value is `niku`. | No | All except db and beacon |
| **Group** | The OS group association with the application OS user. | No | All except db and beacon |
| **Root User** | The OS root user. This user must be defined in one of the following ways: the root user, or a root user with the right to switch to any other OS user and initialize ports under 1024 (for example, port 80). The default value is `root`. | No | All except db and beacon |
| **Database User** | The database OS user. This name is used to install and manage the database server. The default value is `oracle`. | No | db |
| **Database Group** | The OS group that is associated with the OS user. | No | db |
| **Command Prefix** | An optional command to prefix any command Classic PPM executes that requires special privileges. For example, `sudo` can be used to specify a user other than root who has been given some super user privileges on a system. | No | None |

#### Java Section

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Java Home Directory** | The location of the Java JDK. The default values are: `D:\jdk1.7.0_55` (Windows), `/usr/jdk1.7.0_55` (Linux) | No | beacon, app, and bg |
| **Java VM** | The desired Java VM to use when launching the application and background services. Default: `Server` | No | beacon, app, and bg |
| **preferIPv4Stack** | For pure IPv4 environments, this property must be set to `true`. For pure IPv6 and mixed IPv4/IPv6 environments, this property must be set to `false`. The default is `true`. | No | beacon, nsa, app, and bg |

#### General Section

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Multi-currency Enabled** | Determines if support for multiple currencies is enabled in this Classic PPM installation. Please review the "Clarity 15.6.1 Changes: Classic PPM Administrative Features" section in Change Impact and Upgrade to review how you can enable multi-currency. The default value is Cleared. | Yes | app |
| **License Types** | A Classic PPM contract includes a license naming convention. Select the license naming convention that is used in your contract. The naming convention setting does not change the behavior of the access rights. This setting affects only the labels that appear in the administration licensing portlets. All Classic PPM access rights are associated with a license type value. License Types determine the level of license that is associated with users. Access rights determine the license type that is assigned to each user. If users have access rights for multiple license types, these users are assigned the highest license type. | Yes | app, bg, nsa |
| **Check for configuration changes every (seconds)** | Determines how often running services check for changes to common configuration files, for example, `properties.xml`. | Yes | app, nsa, and bg |
| **Check tenant database health every (seconds)** | This setting is not presently used. | N/A | N/A |

#### Mail Server Section

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Hostname** | The name of the mail server host. The default value is `localhost`. | No | app and bg |
| **Default Sender Email Address** | The from address to use when sending email messages. For example: `Classic PPM @mycorp.com` | Yes | app and bg |
| **Use Authentication** | Determines whether the username and password are used to authenticate to the given mail server. | No | app and bg |
| **Enable StartTLS** | Enhances the security of email communications by upgrading an initially insecure connection to a secure one using encryption protocols like Transport Layer Security (TLS). | No | app and bg |
| **User** | Mail server username. For example: `Classic PPM`. | No | app and bg |
| **Password** | Mail server user's password. | No | app and bg |

> [!NOTE]
> **Do you want Classic PPM generated emails to always come from the same address?**
> In CSA, you use the **Default Sender Email Address** field to specify the from address to use when sending email messages. If you want all Classic PPM generated emails to always come from the same address, add the `alwaysUseDefaultSenderAddress=true` attribute to the `properties.xml` file.

#### Operating System Users and Groups Section (Unix Platforms Only)

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **User** | The application OS user, referred to in this document as the niku user. The default value is `niku`. | No | all except db and beacon |
| **Group** | The OS group that is associated with the application OS user. The default value is `staff`. | No | all except db and beacon |
| **Root User** | The OS root user. This user must either be the root user or a root user with the rights to switch to any other OS user, and initialize network ports under 1024 (for example, port 80). The default value is `root`. | No | db and beacon |
| **Database User** | The database OS user that is used to install and manage the database service. The default value is `oracle`. | No | db |
| **Database Group** | The OS group that is associated with the database OS user. The default value is `staff`. | No | db |
| **Command Prefix** | An optional command to prefix any command executed by Classic PPM requiring special privileges. For example, `sudo` can be used to specify a user other than root, who has been given some super user privileges on a given system. | No | None |

---

### Database Server Properties

Use the database server properties page to set up the server's database options, such as changing the application server's database password. To view this page, click the **Database** subtab on the server properties page.

#### Database Server Section

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Vendor** | The target database vendor. Options are: `oracle`, `mssql`, `postgreSQL` | Yes | app and bg |
| **Fetch Size** | Gives the JDBC driver a hint as to the number of rows that should be fetched from the database when more rows are needed. The number of rows that are specified affects only result sets created using this statement. If the value specified is zero, then the hint is ignored. Default: `60` | Yes | app and bg |

#### Oracle Only

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Home Directory** | The home installation directory of the database server. For example: `/oracle/home` (Oracle/Unix), `D:\oracle\ora11` (Oracle/Windows) | No | None |
| **Use Multilingual Sorting** | (Oracle only) If this field is selected, the sort sequence `GENERIC_M` is used if no multilingual sort sequence is defined for the user's language in `i18n.xml`. For example, the German umlaut sorts after the English U rather than after the English Z. | Yes | app and bg |
| **Sys Password** | The system password for this database server. (Oracle 11g only - used to start and stop db. Password is required only if the database is managed as a Classic PPM service.) Default: `change_on_install` | Yes | None |
| **Large Table Tablespace** | Used during schema installation to select a specific tablespace for tables with potentially large data sets. Default: `USERS_LARGE` | No (Classic PPM application server only) | None |
| **Small Table Tablespace** | Used during schema installation to select a specific tablespace for tables with potentially small data sets. Default: `USERS_SMALL` | No (Classic PPM application server only) | None |
| **Large Index Tablespace** | Used during schema installation to select a specific tablespace for indices with potentially large data sets. Default: `INDX_LARGE` | No (Classic PPM application server only) | None |
| **Small Index Tablespace** | Used during schema installation to select a specific tablespace for indices with potentially small data sets. Default: `INDX_SMALL` | No (Classic PPM application server only) | None |
| **High-Volatility Table Parameters** | Used as input parameters during schema installation when creating tables that are transactional in nature and change frequently. (Oracle only) Default: `PCTFREE 20 PCTUSED 60` | No (Classic PPM application server only) | None |
| **Low-Volatility Table Parameters** | Used as input parameters during schema installation when creating tables that are non-transactional in nature and change infrequently. (Oracle only) Default: `PCTFREE 5 PCTUSED 80` | No (Classic PPM application server only) | None |

#### Database Connections

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Id** | Unique identifier for this connection. | Yes | app and bg |
| **Vendor** | The target database vendor. This field is editable only for new database connections. The standard Classic PPM database connection's vendor is taken from the vendor that is defined for the database server. Options are: `oracle`, `mssql` | Yes | app and bg |
| **Specify URL** | Whether to specify a different JDBC URL than the default. Required when an Oracle RAC is being used. | Yes | app and bg |
| **JDBC URL** | If **Specify URL** is selected, this is the JDBC URL to access the database. This is primarily useful for connecting to an Oracle RAC cluster. A RAC URL must contain a JDBC prefix followed by the full TNS entry for the cluster. For example: `jdbc:oracle:thin:@(DESCRIPTION = (ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = NODE1)(PORT = 1521)) (ADDRESS = (PROTOCOL = TCP)(HOST = NODE2)(PORT = 1521)) (LOAD_BALANCE = yes)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = Classic PPM)))` | Yes | app and bg |
| **Hostname** | The IP address or hostname of the target database server. | Yes | app and bg |
| **Port** | The JDBC port of the target database server. The default values are: `1521` (Oracle), `1433` (MSSQL) | Yes | app and bg |
| **Instance Name** (MSSQL only) | The name of the instance for the target database. This is an optional argument, enabling multiple MS SQL instances on the same machine. The JDBC port is optional if a valid instance name is provided instead. | Yes | app and bg |
| **Service Name** | The name of the service or datasource for this database connection. For Oracle, this equates to the TNS name. For Microsoft SQL (MSSQL), this equates to the ODBC datasource name. To learn more about creating TNS names, see "Configure an Oracle Net Service Name". | Yes | app and bg |
| **Service ID** (Oracle only) | The service ID of the desired database on the target Oracle database server. | Yes | app and bg |
| **Database Name** (MSSQL only) | The name of the database on the target MSSQL database server. | Yes | app and bg |
| **Schema Name** (MSSQL only) | The name of the database user that owns the schema on the target database server. This is editable only on new database connection definitions. It is always `niku` on the internal Classic PPM connection. | Yes | app and bg |
| **Login Name** | The name of the login user for the target database. | Yes | app and bg |
| **Password** | The password of the login user for the target database. | Yes | app and bg |

---

### Application Server Properties

Use the application server properties page to set up the server's application options, such as enabling SSL for all pages. To view this page, click the **Application** sub tab on the server properties page.

#### Application Server Section

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Vendor** | Classic PPM supports integration with Apache Tomcat application server only. Integration with Generic J2EE is a legacy option and is not supported. | Yes | app |
| **Home Directory** (Apache Tomcat only) | Apache Tomcat installation directory. Default value: `apache-tomcat-7` (Unix), `D:\apache-tomcat-7` (Windows) | No | app |
| **Use LDAP** | Determines whether LDAP is used when authenticating users at login. If you select this option and you restart the app servers, you cannot maintain users through the application nor can you change or maintain passwords for Classic PPM users. Instead, use the LDAP server to perform Classic PPM user maintenance. Changes made on the LDAP server to Classic PPM users can be imported to Classic PPM by enabling the background job that is named **LDAP Synchronize New and Changed Users**. The default value is cleared. | Yes | app |
| **Disable REST API Access** | Allows the enabling or disabling of the API Infrastructure. If you select this option, the API feature is switched off. Users cannot access the APIs and any subsequent API requests receive a "403 Forbidden" status in response. Other applications that use the REST APIs (for example, the Rally Synchronization job or the interactive API Documentation) depend on the REST API status being enabled. | Yes | None |
| **Maximum rows for Export to Excel** | Determines the limit for the number of rows that a user can set for Export to Excel using the setting available on the **System Options** page. Limiting the maximum number of rows available ensures that users cannot overwhelm application resources by exporting unlimited amounts of data. | Yes | app |
| **Global Session Timeout** | This setting overrides the Session Timeout setting that appears in the application **System Options** page. When **Global Session Timeout** is specified, the **Minutes of Inactivity Until Logout** system option becomes read only. | Yes | app |
| **Global Tenant Timeout** | This setting is not presently used. | N/A | N/A |
| **Load on Startup** | Specifies whether the application should initialize when the application server starts up, or whether to delay initialization until the first page hit. The default value is selected. | No | None |
| **Scheduler Entry URL** | The full URL used by the scheduler, such as Open Workbench and Microsoft Project, to access the Classic PPM server. This is required only when the schedulers must connect to a URL other than the regular application entry URL. If you are using a port other than 80, the port must be specified. For example: `http://app.mycorp.com`, `http://asia_app.mycorp.com:8080` | Yes | app |
| **Internal URL** | The Internal URL is used for export to PDF functionality. This Internal URL is only for the app service. | N/A | Restart All Services |

> [!NOTE]
> Exporting to PDF doesn't work if you use:
> - DMZ Environment
> - Legacy SSO Application
> The Internal URL can be populated using a NonSSO URL or an internal system URL to make PDF export work. This Internal URL exists behind firewalls. It can be accessed without SSO or SSL while performing Export to PDF in Clarity.
> Ensure that the Internal URL is considered 'internal' and not accessible from outside the organization's network. To learn more, see the knowledge base article **Preview PDF needs an option for Non SSO URL to be used**.

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Clarity PPM Productivity Accelerator URL** | This field is reserved for future use. Do not modify this field unless instructed to do so by Broadcom Technical Support. | N/A | N/A |
| **Internal Broker URL** | The Internal Broker URL defines a URL into the PPMBroker that Clarity uses to invoke services without SSO or SSL. Ensure that the Internal Broker URL is considered 'internal' and not accessible from outside the organization's network. | N/A | Restart All Services |
| **SSL Handling** | See **Enable SSL for Clarity Servers**. | Yes | app |

##### Directories

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Shared Directory** | This field is reserved for future use. Do not modify this field unless instructed to do so by Broadcom Technical Support. | N/A | N/A |

#### Application Instance Section (for Application (app) and System Administration (nsa) Services)

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Service Name** (Apache Tomcat only) | The unique name of this application service. On Windows, this is the service name. | No | app |
| **Auto Start Service** | Specifies whether startup is automatic or manual for a Windows application server. If the check box is selected, startup is automatic. If the check box is cleared, startup is manual (default). | No | app |
| **Service User** | Specifies the Windows service property, Log on Account. Possible values: **LocalSystem** (the service runs as the standard local system account, default). `.\<username>` (the service runs as a local user). `<domain>\<username>` (the service runs as a domain user). | No | app |
| **Service Password** | Defines the password for the user who is specified in the **Service User** field for Windows. The field is optional and empty by default. | No | app |
| **RMI Port** (Apache Tomcat only) | The unique port used by the application service for RMI (Java Remote Method Invocation). | No | app |
| **Maximum Threads** | The maximum amount of threads allowed in the HTTP thread pool available to service HTTP (or HTTPS) requests from clients. The default value is `200`. You can change this default value. This does not affect non-HTTP threads elsewhere in the application. | No | app |
| **Java VM Parameters** (Apache Tomcat only) | The VM parameters to pass to the Java executable when launching the service. VM parameters are passed on the command line prior to classpath and program parameters. This includes memory settings. The default value is `-Xmx2048m`. You should add additional JVM tuning parameters as needed, depending on your platform. Best Practice: For HotSpot JVMs, the recommended parameters are: `-XX:+UseParallelGC` and `-XX:NewRatio=2`, in addition to large enough minimum and maximum heap settings. For more information, search for HotSpot VM Tuning. | No | app |
| **Program Parameters** (Apache Tomcat only) | The program parameters to pass to the Java executable when launching the service. These parameters appear at the end of the command line. The default value is cleared. | Yes | app |
| **Distributed** | This setting determines whether this application service should act as a member of a distributed server farm. Setting to `true` ensures that the service cooperates with other services in the cluster and operates as a stateless service, guaranteeing proper fault tolerance. If more than one application services are load-balanced in a cluster, this must be set to `true`. The default value is cleared. | Yes | app |
| **Run Job Scheduler** | Specify whether to run a Job Scheduler in this application instance. Job Scheduler process instances may be run in any background or application servers. The default value is cleared. | No | app |
| **Maximum Concurrent Jobs** | Specifies the maximum number of jobs to be run at any given time. Additional jobs above this amount are queued. The default value is `10`. | No | app |
| **Run Process Engine** | Specify whether to run a Process Engine in this application instance. Process Engine instances may be run in any background or application servers. We recommend that you run the process engine in the background service to prevent performance problems on the application service. The default value is cleared. | No | app |
| **HTTP Enabled** | Specifies whether to enable the standard insecure HTTP port. If this field is cleared, then the secure HTTPS port should be enabled in its place. The default value is selected. | Yes | app |
| **HTTP Port** (Apache Tomcat only) | Specifies the HTTP port to use in Apache Tomcat. This is required only when the HTTP port is enabled. The default value is `80`. | No | app |
| **HTTP Entry URL** | The full URL used to access the application. This is required only when the HTTP port is enabled. In a cluster, this is the URL of the front-end load balancer. If using a port other than 80, it must be specified. For example: `http://app.mycorp.com`, `http://asia_app.mycorp.com:8080` | Yes | app and bg |

> [!WARNING]
> If you are using Jaspersoft with Classic PPM, verify the following requirements for Advanced Reporting to work seamlessly:
> - The value for this field cannot be `localhost`.
> - The base URL used to access Classic PPM is the same as the **HTTP Entry URL**.
> - If using the default port (that is, no port is specified in the URL), the **HTTP Entry URL** does not end with a slash (`/`). See the following example:
>   - Clarity URL: `http://ppm-avg-1420`
>   - HTTP Entry URL: `http://ppm-avg-1420` (without the `/` at the end)

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Enable HTTPS Port** | Specifies whether to enable the secure HTTPS port. If this field is cleared, then the HTTP port should be enabled in its place. If both the HTTPS and the HTTP port are enabled, the application will secure only password-sensitive pages. If only the HTTPS port is enabled, the application will secure all pages. The default value is cleared. | Yes | app |
| **HTTPS Port** (Apache Tomcat only) | Specifies the HTTPS port to use in Apache Tomcat. This is required only when the HTTPS port is enabled. The default value is `8043`. | No | app |
| **HTTPS Entry URL** | The secure HTTPS URL used to access the application. This is required only when the HTTPS port is enabled. In a cluster, this is the secure URL of the front-end load balancer. If you are using a port other than 443, it must be specified. For example: `https://app.mycorp.com`, `https://asia_app.mycorp.com:8043` | Yes | app and bg |

> [!WARNING]
> If you are using Jaspersoft with Classic PPM, the value for this field cannot be `localhost`.

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Document Root** (Apache Tomcat only) | The document root of the application server. You can leave this field cleared. | No | app |
| **Bind Address** (Apache Tomcat only) | Optional hostname or address to which the server socket using the HTTP port is bound. It is useful on servers with two or more network adapters, to bind different app services to different adapters. If you leave this field empty, all network interfaces are used. | No | app |
| **Tomcat Connector Port** | Used to specify the connector port for Apache Tomcat. It is possible to connect various Web Servers, primarily Apache, to Tomcat. | No | app |
| **Tomcat Connector Bind Address** | Used to specify the connector bind address, if necessary. It is possible to connect various Web Servers, primarily Apache, to Tomcat. | No | app |
| **Exception Run Interval** | During an exception retry, the process engine processes the events raised but not yet processed. These include object events (used by condition evaluation) and user events (process abort, error retry, error skip, etc.). This field allows you to control how often this occurs (less often, normal, more often). If you select **Custom**, you can set this value in minutes. | No | app |
| **Run Microservice Broker** | Enable the PPMBroker microservice that has been introduced in Clarity to offload real-time processing of long-running requests or portions of requests from the Clarity application server. | No | app |
| **Message Time to Live** | A process engine event message will expire if the message server does not pick it up after a set interval. This field controls that expiration time in minutes. | No | app |
| **Message Receiver Interval** | A message server is awakened by incoming messages. However, you can also force the message receiver to check its incoming queue by setting this field in minutes. | No | app |
| **Use Single Sign-On** | When this option is enabled, Classic PPM delegates login authentication to an external authority. See **Single Sign-On (SSO)** for details about configuring SSO. | Yes | app |
| **Maximum XML Nodes** | Specifies the number of XML nodes that can be imported or exported. The default value is `150,000`. | No | NA |
| **Rest Context** | The context for the Classic PPM REST API URL. For example, in the following REST API URL, the rest context is `ppm`: `https://samplehost:8080/ppm/rest/v1/projects`. The default value is `ppm`. | Yes | app |

> [!NOTE]
> **pushServiceLivenessInterval** - A push service to Clarity
> You can use the `pushServiceLivenessInterval` parameter in the `properties.xml` file to specify the interval after which Clarity can terminate orphaned web socket connections. It's recommended to set this parameter to 180 seconds. Don't set this parameter for less than 30 seconds to avoid application issues.

---

### Documents and Search Properties

Use the documents and search server properties page to set up the server's documents and search options, such as determining whether to index documents as they are checked in or to index documents as a scheduled job.

> [!WARNING]
> If you do not use the database as the document store, select a directory location for the filestore that is outside the directory where Classic PPM is installed. In addition, verify that the index directory is outside the installation directory. If you are upgrading from a version earlier than Service Pack 13.0.1, move the filestore before you begin the upgrade process. For complete information, see **Change Impact and Upgrade**.

To view this page, click the **Documents and Search** sub tab on the server properties page.

#### Search Server Section

| Field Name | Description | Synchronized in Cluster? | Services to Restart |
|---|---|---|---|
| **Use Synchronous Indexing** | Specifies whether uploaded documents are to be indexed immediately in-process, or whether they are to be queued for indexing by the asynchronous background indexer. The default value is selected. | Yes | app and bg |
| **Store Files in Database** | Specifies whether to store files in the database. Normally, files are stored in the filestore on disk. In the case of an upgrade where files are currently stored on disk, this property must be set before the upgrade to move existing files to the database, if such is desired. The default value is cleared. | Yes | app |
| **Index Directory** | Directory where the document store is indexed. Verify that this location is outside the installation directory. | Yes | app and bg |
| **Filestore Directory** | Directory location of the filestore. Verify that this location is outside the installation directory. | Yes | app and bg |

#### Document Manager Section

| Field Name | Description | Synchronized in Cluster? | Services to Restart |
|---|---|---|---|
| **File Scanning Executable** | Defines the full path to the executable that scans documents for viruses. For example: `/Classic PPM/filescanner.sh`. | Yes | app and bg |
| **File Store Directory Size Limit** | Defines the file storage size limit for a directory. Setting the directory size limit does not affect the size of pre-existing folders. | Yes | None |
| **File Upload Size Limit** | Defines the size limit for uploaded documents (in megabytes) to the file directory. The default limit is 20 MB. When this size limit is reached, a new file directory is created. | Yes | app and bg |

## Server Reporting Properties

Use the reporting server properties page to set up the Jaspersoft reporting options. To view this page, click the **Reporting** sub tab on the server properties page.

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Vendor** | The vendor name of the reporting tool (Jaspersoft). | Yes | app |
| **Status** | Indicates whether the Jaspersoft server is available. | | |
| **Web URL** | The web URL for the Jaspersoft server. For example: `http://<jaspersoft-hostname>:8080/<jasperwebcontext>`. | | |
| **Clarity Data Source JNDI Name** | | Yes | app |
| **Data Warehouse Data Source JNDI Name** | | | |
| **User** | The Jaspersoft user name who performs system tasks that require administration access. The default user is `ppmjasperadmin`. You can change the default user name before you import Jaspersoft Advanced Reporting content. The import creates the user. Do not change the user name after you import the Advanced Reporting content. | Yes | app and bg |
| **Database ID** | | | |
| **Organization Name** | Specifies the organization name (tenant) that is created on the Jaspersoft server. | Not Applicable | |
| **Organization ID** | Specifies the organization ID (tenant) that is created on the Jaspersoft server. | | |

---

## Data Warehouse Server Properties

Use the Data Warehouse server properties page to set up the connection details for the Data Warehouse database. To view this page, click the **Data Warehouse** sub tab on the server properties page.

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Vendor** | The target database vendor. Options are: `oracle`, `mssql`, `postgreSQL` | Yes | app and bg |
| **Fetch Size** | Gives the JDBC driver a hint as to the number of rows that should be fetched from the database when more rows are needed. The number of rows specified affects only result sets created using this statement. If the value specified is zero, then the hint is ignored. Default: `240` | Yes | app and bg |

### Oracle Only

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Sys Password** | The system password for this database server. (Oracle 11g only - used to start and stop db. Password is required only if the database is managed as a Classic PPM service.) Default: `Change on install`. | Yes | None |
| **Dimension Table Tablespace** | Used during schema installation to select a specific tablespace for dimension tables for the Data Warehouse schema. Default: `DWH_PPM_DATA_DIM` | No | None |
| **Fact Table Tablespace** | Used during schema installation to select a specific tablespace for fact tables for the Data Warehouse schema. Default: `DWH_PPM_DATA_FACT` | No | None |
| **Dimension Index Tablespace** | Used during schema installation to select a specific tablespace for dimension indices for the Data Warehouse schema. Default: `DWH_PPM_INDX_DIM` | No | None |
| **Fact Index Tablespace** | Used during schema installation to choose a specific tablespace for fact indices for the Data Warehouse schema. Default: `DWH_PPM_INDX_FACT` | No | None |

### Connection Details

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Status** | Indicates whether the Server is available. | | |
| **Specify URL** | Whether to specify a different JDBC URL than the default. Required when an Oracle RAC is being used. | Yes | app and bg |
| **Hostname** | The IP address or hostname of the target database server. | Yes | app and bg |
| **Port** | The JDBC port of the target database server. The default values are: `1521` (Oracle), `1433` (MSSQL) | Yes | app and bg |
| **Instance Name** (MSSQL only) | The name of the instance for the target database. This is an optional argument, enabling multiple MS SQL instances on the same machine. The JDBC port is optional if a valid instance name is provided instead. | Yes | app and bg |
| **Service Name** | The name of the service or datasource for this database connection. For Oracle, this equates to the TNS name. For Microsoft SQL (MSSQL), this equates to the ODBC datasource name. To learn more about creating TNS names, see "Configure an Oracle Net Service Name". | Yes | app and bg |
| **Service ID** (Oracle only) | The service ID of the desired database on the target Oracle database server. | Yes | app and bg |
| **Database Name** (MSSQL only) | The name of the database on the target MSSQL database server. | Yes | app and bg |
| **Schema Name** (MSSQL only) | The name of the database user that owns the schema on the target database server. This is editable only on new database connection definitions. It is always `niku` on the internal Classic PPM connection. | Yes | app and bg |
| **Login Name** | The name of the login user for the target database. | Yes | app and bg |
| **Password** | The password of the login user for the target database. | Yes | app and bg |
| **Custom Database Link** | Indicates whether the database link is custom or the default: `PPMDBLINK`. | | |
| **PPM Database Link** | The database link to the Classic PPM database, either custom or default (`PPMDBLINK`). | | |

### Data Warehouse Governor Limits

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **ETL Job Timeout** | Indicates the number of minutes that the ETL Job can run without completing before it is stopped. Default: `600` minutes | | |

---

## Server Security Properties

Use the security server properties page to set up the server's security options. To view this page, click the **Security** tab on the server properties menu.

### Encryption Section

| Field Name | Description | Synchronized in Cluster? | Services to Restart |
|---|---|---|---|
| **SSL Keystore** | Optional path to the certificate keystore file on this server. | No | app |
| **SSL Password** | Password for the certificate keystore. The Java JDK requires that the keystore and certificate passwords must match. | No | app |
| **Confirm Password** | Confirm the password by entering it again in this field. | No | app |
| **Keystore Format** | Set the value of Keystore Format, either **Java Keystore Format** or **Bouncy Castle Keystore Format**, that you created while configuring FIPS in Clarity. To enable FIPS in Clarity, see **Enable FIPS in Clarity**. | No | beacon, app, and bg |
| **FIPS 140-2 Mode Enabled** | FIPS 140-2 is a standard that describes U.S. Federal government requirements for encrypting sensitive data. If your application server vendor is Apache Tomcat, selecting this check box causes Classic PPM to use a FIPS 140-2 compliant encryption module for encryption operation used during server operation. Examples are using the SSL protocol and encrypting passwords, as defined on the Security Server: Properties page. | No | beacon, app, and bg |
| **Encrypt Passwords** | Determines if passwords in the Classic PPM properties file are encrypted. Choices are: **No encryption** (passwords display in clear text, default). **Using System Key** (uses a hidden internal hardcoded key to encrypt passwords; this same key is used across all Classic PPM implementations. If an attacker learns this key and the encryption mechanism, and has access to the properties file, the attacker can decode the passwords. This option is only useful when you want to prevent casual observers from seeing passwords in the properties file). **Using Custom Key** (this is the most secure option where passwords are stored in another file. The custom key file is only required when the server starts and must be secured by some method other than Classic PPM). | No | beacon, app and bg |

### LDAP Server Section

| Field Name | Description | Synchronized in Cluster? | Services to Restart |
|---|---|---|---|
| **URL** | URL of the LDAP server. For example: `ldap://localhost:389`. If your LDAP server is SSL-enabled, use the LDAPS protocol in the URL (rather than the default LDAP protocol). For example: `ldaps://localhost:489` | Yes | app and bg |
| **Root Context** | Identifies the root LDAP naming context. For example: `ou=People,dc=niku,dc=com` | Yes | app and bg |
| **Search User** | The name of the user that performs any of the directory searches (bind operations). You must enter a user name that is a fully qualified distinguished name (FQDN) of the LDAP user with read rights. For example: `uid=nikusearch,dc=niku,dc=com` | Yes | app and bg |
| **Password** | Enter the search user's password. | Yes | app and bg |
| **Confirm Password** | Confirm the search user's password by entering it again in this field. | Yes | app and bg |
| **Batch Size** | Identifies the total number of results that Classic PPM limits for every search call it makes with a directory server. Set the batch size less than or equal to the same number that is set for your directory server. For example, by default, Active Directory restricts the total number of results that are returned from an LDAP search to 1000. In this situation, you should set the batch size to any number less than 1000 and greater than 0. | Yes | app and bg |
| **Object Class** | Identifies the LDAP object class name. Each entry in LDAP belongs to object classes that identify the type of data that is represented by the entry. Provide the object class name that your LDAP server is configured with. The default object class that is provided is `Person`. | Yes | app and bg |
| **Search Filter** | Optional LDAP search filter string. Specifying a value in this field enables you to define search criteria and to provide more efficient and effective searches. Default value is `(employeetype=niku)`. For example: To select a user whose first name is Babs Jensen, enter: `(cn=Babs Jensen)`. To select a user whose first name is not Tim Howes, enter: `(!(cn=Tim Howes))`. To select entries from LDAP of type Person and whose last name is Jensen or first name is like Ben J*, enter: `(&(objectClass=Person)(|(sn=Jensen)(cn=Ben J*)))`. Broadcom supports the LDAP search filters as defined in RFC 2254. These search filters are represented by Unicode strings. See `http://www.faqs.org/rfcs/rfc2254.html` for details. | Yes | app and bg |
| **Date/Time Format** | Identifies the date and time format of the vendor's directory server. For example, for Novell eDirectory and iPlanet, use: `yyyyMMddHHmmss'Z'`. For Microsoft Active Directory use: `yyyyMMddHHmmss'.0Z'` | Yes | app and bg |
| **Group Name** | Identifies the name of the group that holds all the LDAP users that are to be synched with Classic PPM. If specified, authentication and synchronization of users are done against all the users that are found in this group. You must enter a group name that is a fully qualified distinguished name (FQDN) of the LDAP. For example: `cn=QA,ou=Engineering,dc=niku,dc=com` | Yes | app and bg |
| **Group Identifier** | Identifies the ID of the group that is specified in the **Group Name** field, if present. The name of the attribute that signifies that an entity is a group. Different LDAP servers use different attribute names. For example, for Novell eDirectory and iPlanet, use `uniquemember`. For Microsoft Active Directory, use `member`. | Yes | app and bg |
| **Allow non-LDAP users** | Select this check box to access Classic PPM using alternate authentication methods. | | app |

### LDAP Attribute Mapping Section

| Field Name | Description | Synchronized in Cluster? | Services to Restart |
|---|---|---|---|
| **Username** | User attribute mapping. For example, for Novell eDirectory and iPlanet, use `uid`. For Microsoft Active Directory, use `sAMAccountName`. | Yes | app and bg |

> [!IMPORTANT]
> You must always map the **Username** field to a unique LDAP attribute value.

| Field Name | Description | Synchronized in Cluster? | Services to Restart |
|---|---|---|---|
| **First Name** | First Name attribute mapping. Default value is `givenName`. | Yes | app and bg |
| **Last Name** | Last Name attribute mapping. The default value is `sn`. | Yes | app and bg |
| **Full Name** | Full Name attribute mapping. The default value is `cn`. | Yes | app and bg |
| **Email Address** | Email Address attribute mapping. The default value is `mail`. | Yes | app and bg |
| **Modify Time Stamp** | Modify Time Stamp attribute mapping. The default value is `modifyTimeStamp`. | Yes | app and bg |

### Single Sign-On Section

| Field Name | Description | Synchronized in Cluster? | Services to Restart |
|---|---|---|---|
| **Token Name** | The name of the token (HTTP cookie, HTTP header, or HTTP parameter) that contains the username of the user whose session is to be initialized. | Yes | app |
| **Token Type** | The type of HTTP token. Values are `cookie`, `header`, or `parameter`. | Yes | app |
| **Logout URL** | The URL where you are taken to when you log out of Classic PPM. For example: `http://www.yourbiz.com/exit.html`. | Yes | app and bg |
| **Authentication Error URL** | The URL where you are taken to when authentication errors occur. | Yes | app |
| **Timeout URL** | The URL users would be taken in the event of a timeout. | Yes | Yes |
| **Signon URL** | The URL users would be taken to when they don't have a session cookie or SAML data. Typically, administrators would provide the link to the IdP. | Yes | Yes |

---

## Background Properties

Use the background server properties page to set up the server's background options, such as adjusting the memory on the background server. To view this page, click the **Background** tab on the server properties menu.

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Java VM Parameters** | Defines the VM parameters to pass to the Java executable when launching the Classic PPM Background (bg) service. VM parameters are passed on the command line prior to classpath and program parameters. This includes memory settings. Default: `-Xmx2048m` | No | bg |
| **Temporary Directory** | Specifies a temporary directory used to copy shell and node scripts during the bulk export of the status report. Clarity generates this temporary directory automatically and uses it as the default location. By default, the temporary file has read and write permissions. You can also define a new path to copy the status report scripts other than the default path. | No | bg |
| **Program Parameters** | Specifies whether to pass the program parameters to the Java executable when launching the Classic PPM Background (bg) service. These parameters appear at the end of the command line. | Yes | bg |
| **Background Instance Service Name** | Defines the unique friendly name of this service instance. This value is used on Windows as the NT service name. Default: `Classic PPM Background Server`. | No | bg |
| **Auto Start Service** | Specifies whether startup is automatic or manual for a Windows server. If the check box is selected, startup is automatic. If the check box is cleared, startup is manual (default). | No | bg |
| **Service User** | Specifies the Windows service property, Log on Account. Possible values: **LocalSystem** (the service runs as the standard local system account, default). `.\<username>` (the service runs as a local user). `<domain>\<username>` (the service runs as a domain user). | No | bg |
| **Service Password** | Defines the password for the user who is specified in the **Service User** field for Windows. The field is optional and empty by default. | No | bg |
| **Run Job Scheduler** | Specifies whether to run a Job Scheduler in this background server. Job Scheduler processes instances may be run in any background or application servers. Default: Selected | No | bg |
| **Maximum Concurrent Jobs** | Defines the maximum number of jobs to be run at any given time. Additional jobs above this amount are queued. Default: `10` | No | app |
| **Run Process Engine** | Specifies whether to run a process engine in this background server. Process engine instances may be run in any background or application servers. We recommend that you run the process engine in the background service to prevent performance problems on the application service. Default: Selected. | No | app |
| **Exception Run Interval** | During an exception retry, the process engine processes the events raised but not yet processed. These include object events (used by condition evaluation) and user events (process abort, error retry, error skip, etc.). This field allows you to control how often this occurs (less often, normal, more often). If you select **Custom**, you can set this value in minutes. Default: `Normal` | No | app |
| **Message Time to Live (in minutes)** | Defines the time in minutes the process engine's event message will expire if the message server does not pick it up after a set interval. | No | app |
| **Message Receiver Interval (in minutes)** | Defines the time in minutes you want the message receiver to check its incoming queue of process engine event messages if the message server is not already awakened by incoming messages. | No | app |

---

## Microservice Broker Properties

Use the Microservice Broker properties page to enable Clarity Microservice Broker.

PPMBroker is a microservice that has been introduced in Clarity to off-load real-time processing of long running requests or portions of requests from the Clarity application server.

| Field Name | Description | Synchronize in Cluster? | Services to Restart |
|---|---|---|---|
| **Service Name** | The unique name of this Microservice. | No | ppmbroker |
| **Enable Service** | Check **Enable Service** to activate the Microservice. | No | ppmbroker |
| **Auto Start Service** | Specifies whether startup is automatic or manual for a Windows application server. If the check box is selected, startup is automatic. If the check box is cleared, startup is manual (default). | No | ppmbroker |
| **Service User** | Specifies the Windows service property, Log on Account. Possible values: **LocalSystem** (the service runs as the standard local system account, default). `.\<username>` (the service runs as a local user). `<domain>\<username>` (the service runs as a domain user). | No | ppmbroker |
| **Service Password** | Defines the password for the user who is specified in the **Service User** field for Windows. The field is optional and empty by default. | No | ppmbroker |
| **RMI Port** | The unique port used by the Microservice for RMI (Java Remote Method Invocation). This RMI Port should be different from the RMI port in the Application Tab. | No | ppmbroker |
| **Java VM Parameters** | The VM parameters to pass to the Java executable when launching the service. VM parameters are passed on the command line prior to classpath and program parameters. This includes memory settings. The default value is `-Xmx2048m`. You should add additional JVM tuning parameters as needed, depending on your platform. Best Practice: For HotSpot JVMs, the recommended parameters are: `-XX:+UseParallelGC` and `-XX:NewRatio=2`, in addition to large enough minimum and maximum heap settings. | No | ppmbroker |
| **Maximum Threads** | The maximum amount of threads allowed in the HTTP thread pool available to service HTTP (or HTTPS) requests from clients. The default value is `200`. You can change this default value. This does not affect non-HTTP threads elsewhere in the microservice. | No | ppmbroker |
| **Program Parameters** | The program parameters to pass to the Java executable when launching the service. These parameters appear at the end of the command line. The default value is cleared. | Yes | ppmbroker |
| **HTTP Enabled** | Specifies whether to enable the standard insecure HTTP port. If this field is cleared, then the secure HTTPS port should be enabled in its place. The default value is selected. | Yes | ppmbroker |
| **HTTP Port** | Specifies the HTTP port to use in Apache Tomcat. This is required only when the HTTP port is enabled. The default value is `9000`. | No | ppmbroker |
| **HTTP Entry URL** | The full URL used to access the microservice. This is required only when the HTTP port is enabled. In a cluster, this is the URL of the front-end load balancer. If using a port other than 9000, it must be specified. For example: `http://app.mycorp.com`, `http://asia_app.mycorp.com:9000`. When scaling Microservice Broker, you may use the Load Balancer URL in the HTTP Entry URL. | Yes | ppmbroker and bg |
| **HTTPS Enabled** | Specifies whether to enable the secure HTTPS port. If this field is cleared, then the HTTP port should be enabled in its place. If both the HTTPS and the HTTP port are enabled, the microservice will secure only password-sensitive pages. If only the HTTPS port is enabled, the microservice will secure all pages. The default value is cleared. | | ppmbroker |
| **HTTPS Port** | Specifies the HTTPS port to use in Apache Tomcat. This is required only when the HTTPS port is enabled. The default value is `9003`. | No | ppmbroker |
| **HTTPS Entry URL** | The secure HTTPS URL used to access the microservice. This is required only when the HTTPS port is enabled. In a cluster, this is the secure URL of the frontend load balancer. If you are using a port other than 9003, it must be specified. For example: `https://app.mycorp.com`, `https://asia_app.mycorp.com:9003`. When scaling Microservice Broker, you may use the Load Balancer URL in the HTTPS Entry URL. | Yes | ppmbroker and bg |
| **Tomcat Connector Port** | Used to specify the connector port for Apache Tomcat. It is possible to connect various Web Servers, primarily Apache, to Tomcat. This Tomcat Connector Port should be different from the Tomcat Connector Port in the Application tab. | No | ppmbroker |

To learn more about microservice brokers, see **Getting Started with the Microservice Broker**.

---

## Getting Started with the Microservice Broker

This page contains the following topics:
- Introduction to Microservice Broker
- Deploy the PPMBroker Service
- Start Microservice Broker
- Validate Deployment of the PPMBroker Service
- Example: Enhancing Real-Time Updates in Staffing with the Microservice Broker

### Introduction to Microservice Broker

PPMBroker is a microservice introduced in Clarity to offload the real-time processing of long-running requests or portions of requests from the Clarity application server. The ppmbroker microservice does not replace or engage with the Background server, which is used to schedule and execute processes.

The ppmbroker microservice handles requests that are intended to be short in duration (smaller than a Job, larger than a query). However, the requests are complex enough to burden the application server if they are executed as part of an API request from the client.

Some examples of requests handled by the ppmbroker microservice are:
- Update the ETC/Actuals curve for the Team
- Update Resource curves for the Assignments
- Update Allocation Curves for the Resource
- Deletion of BLOB Slices

### Deploy the PPMBroker Service

You can either set up a separate Virtual Machine for the PPMBroker service or leverage an existing server running another service, depending on your infrastructure and resource availability.

**Follow these steps:**

1. Open the `properties.xml` file using the following path:
   `$<Clarity_Home_Directory>/config/properties.xml`
2. Set `enableBroker="true"` in the `properties.xml` file.
- Alternative Method: If you deploy ppmbroker from CSA, ensure to check the **Enable Service** option in the **MicroService Broker** tab of Properties.
3. Add a new service called ppmbroker by running the following commands:
   ```
   service add ppmbroker
   service deploy
   start ppmbroker
   ```

> [!NOTE]
> Ensure the service has sufficient memory and is properly configured within the cluster, with the necessary ports open in the firewall.

**Key Considerations:**
- This option is better suited for larger production environments where real-time staffing updates are crucial.
- Typically, one dedicated service per cluster is recommended.
- Web socket ports must be externally available and open in the firewall.

### Redeploy the Application

**Follow these steps:**

1. Run the command:
   ```
   service add deploy ppmbroker
   ```
2. Enable the service once deployed using one of the methods:
- **Method 01:** If you deploy ppmbroker from CSA, ensure to check the **Enable Service** option in the **MicroService Broker** tab of Properties.
- **Method 02:** If you are using `properties.xml` to deploy ppmbroker, set `enableBroker="true"` in `properties.xml`.
3. Start the service:
   ```
   service start ppmbroker
   ```

> [!ATTENTION]
> It is recommended to deploy the PPMBroker service for optimal performance. It does not affect the functionality if you choose not to deploy the PPMBroker service at this time. The existing Clarity Services (App and BG) will continue to work as usual.

### Validate Deployment of the PPMBroker Service

When Clarity starts up, it will "see" the `ppmbroker.war` file in the webapps folder and load that as a separate web application. You can use the **Health Report** in Clarity to verify that the broker is running in the app.

Alternatively, you can use the following URL to check the status of the broker. The host:port are the host and port of the Clarity application:

`http://host:port/ppmbroker/mercury/status`

Verify the broker is working by executing the following action from Clarity:

`http://host:port/niku/nu#action:security.servicePing`

### Example: Enhancing Real-Time Updates in Staffing with the Microservice Broker

When organizations require real-time updates on resource availability in Clarity, the Microservice Broker can significantly enhance efficiency. Leveraging web sockets enables real-time communication between Clarity and resource managers, ensuring that availability updates are instantly reflected when allocations change.

**Common Challenges:**
- **Enhancing Real-Time Updates:** Clarity is a robust system, and organizations continually seek to optimize the speed at which resource availability updates are reflected when allocations change. The goal is to ensure that staffing decisions are always based on the most current and accurate information.
- **Optimizing System Performance:** Organizations strive to minimize performance impacts when calculating remaining availability, particularly during periods of high activity involving multiple resource managers. This includes exploring methods to distribute the load on the Clarity application server more efficiently.
- **Improving Communication and Notifications:** Organizations aim to ensure that resource managers can coordinate effectively and resolve staffing conflicts promptly through real-time updates.

**Benefits of Using the Microservice Broker:**
- **Real-Time Availability Updates:** Recalculates Resource availability instantly when allocations change.
- **Reduced System Load:** Offloads processing from the Clarity application server, improving overall performance.
- **Optimized Resource Allocation:** Helps managers make informed, data-driven staffing decisions based on real-time availability.
- **Enhanced Collaboration:** Facilitates better communication and coordination among resource managers.

By implementing the Microservice Broker, organizations can streamline their staffing processes, enhance efficiency, and improve overall system performance.

---

## Getting Started with the Report Service

Starting with the Clarity 16.3.2 release, Clarity supports a separate BG-like service for report execution, known as the **Report Service**. This service runs independently of the main BG service and handles only report execution from the Clarity Reporting workspace, allowing for better scalability, performance, and workload management. Administrators can configure and manage this service separately to optimize system performance.

> [!NOTE]
> The existing BG service continues to support jobs, processes, and Jaspersoft reports.

### Key Benefits
- **Improved Performance:** Report execution is handled by a dedicated service, reducing load on the main background service.
- **Better Scalability:** Multiple report services can be deployed for large environments or high workloads.
- **Administrative Flexibility:** Administrators can enable or disable the report service in each environment as needed.

### Configuration Overview

Administrators can configure the Report Service using the Clarity Service Administration (CSA) interface. They can verify and modify parameters in the `properties.xml` configuration file.

Configure the Report Service instance parameters in `properties.xml`:

```xml
<jobSchedulerInstance id="report"
  serviceName="Clarity PPM Report Server"
  maxConcurrentJobs="10"
  runReports="true"
  runJobScheduler="false"
  runProcessEngine="false"
  runDWHSynchronizer="false"
  runSearchSynchronizer="false"
  messageTimeToLive="120"
  messageReceiverInterval="5"
  exceptionRunInterval="normal"
  maxThreadsForParallelProcessor="10"
  jvmParameters="-Xmx8192m -Xms512m"/>
```

> [!NOTE]
> If a dedicated Report Service is not configured, the main BG service can still execute native reports by enabling the `runReports` attribute in its configuration.

### Deployment Methods

You can deploy the Report Service using either command-line operations or directly through the CSA interface.

#### Using Command Line

Use the following commands to manage the service:

```
service deploy report
service start report
service stop report
service clone report
```

#### Using CSA

In the CSA interface, you can start or stop the report service and configure system-level parameters such as CPU, RAM, and JVM settings.

**Example: Viewing the Report Service in CSA**

The following example shows the **Clarity PPM Report Server** entry listed under **Background Services** in the CSA. This confirms that the Report Service is deployed and active.

**Example: Configuring the Report Service Instance**

You can edit the **Job Scheduler Instance: report** to define parameters such as **Maximum Concurrent Jobs**, **Java VM Parameters**, and **Run Reports**. Ensure that **Run Reports** is selected to enable report execution.

### Recommended Hardware Configuration

| Component | Recommended Value |
|---|---|
| **CPU** | 8 cores |
| **RAM** | 8 GB or higher |
| **JVM Parameters** | `-Xms2048m -Xmx8192m` |

### Logs and Monitoring

All Report Service logs are generated under the runtime logs directory.
- **Location:** `<runtime>/logs/report*`
- **Example:** `report-ca.log`

These logs record report execution activity and can help diagnose issues related to scheduling, job execution, or performance.

### Functional Behavior
- The Report Service executes reports from the **Reporting Workspace** only.
- The main BG service continues to run processes, jobs, and Jaspersoft reports.
- When report exports complete successfully or fail, Clarity sends bell notifications to the user.

### Example Configuration Scenarios

| Environment | BG Service Role |
|---|---|
| **Non-Production** | Executes both jobs and native reports |
| **Production** | Executes jobs, processes, and Jaspersoft reports (optional: dedicated Report Service executes native reports) |

### Recommendations and Limitations
- Ensure the Report Service is correctly configured to avoid overlapping with existing background jobs.
- Do not disable all service attributes (`runReports`, `runProcessEngine`, etc.) simultaneously; otherwise, no report or job execution will occur.

---

## CSA: Maintain and Monitor Classic PPM (On-Premise Only)

Start and stop services, open server ports, disable IGMP snooping, run a health report, check log files, back up and restore your Classic PPM installation, compile Oracle database objects, set the file directory size, and set GEL tag restrictions.
- Start and Stop Services
- Open Server Ports
- IGMP Snooping
- Run Health Reports
- Check Log Files
- Back up an Installation
- Restore an Installation
- Compile and Analyze Existing Oracle Database Objects
- Set File Directory Size
- Set GEL Tag Restrictions

### Start and Stop Services

**Follow these steps:**

1. Log in to CSA.
2. Click **Home**, **All Services**.
3. Select the check box next to each service that you want to start or stop.
4. To start the services, click **Start**.
5. To stop the services, click **Stop**.

### Open Server Ports

Classic PPM requires several open network ports for client-to-server and server-to-server communications. Ports are often closed by default or are blocked by firewalls for security reasons. Any ports that you select during the installation or configuration must be open. Open the necessary ports using the documentation that is provided for your operating system or firewall.

> [!NOTE]
> In UNIX systems, port numbers below 1024 are typically reserved for the root user.

> [!TIP]
> **Best Practice:** If you are using a software firewall, provide an exception at the executable level instead of the port level. This action ensures the dynamic ports that get allocated are open for the proper multicast communication. See ephemeral ports in the following list for more information.

The following information lists the default value, type, and description for each port that is used in Classic PPM:
- **80 or 443** - Defines the HTTP or HTTPS port number that the default Classic PPM Application (app) service uses. Type: Client to the Classic PPM application server.
- **8090** (Apache Tomcat application server only) - Defines the HTTP port number that CSA uses. Type: Client to the Classic PPM application server.
- **1433** (MS-SQL) or **1521** (Oracle) - Defines the JDBC port number that is used to communicate with the database. Type: Server to Database Server.
- **23791** (Apache Tomcat application server only) - Defines the RMI port number that the Classic PPM Application (app) service uses. Type: Server to the Classic PPM application server.
- **23792** (Apache Tomcat application server only) - Defines the RMI port number that CSA uses. Type: Server to the Classic PPM application server.
- **9090** - Defines the Multicast port number that CSA uses. Type: Server to the Classic PPM application server.
- **9091** - Defines the RMI port number that the Beacon service uses. Type: Server to Server.
- **Ephemeral Ports** - Defines the ephemeral (short-lived) port range. All operating systems specify an ephemeral port range by default. The traditional BSD range is 1024 through 4999, though the IANA suggests 49152 through 65535. The range varies between operating systems, and it is possible to disable. You can use any range values in Classic PPM. However, you must enable a range. This port is primarily for multicasting to function. Type: Server to Server.

### IGMP Snooping

For multicast traffic to be delivered properly with Cisco Catalyst Ethernet switches, disable IGMP Snooping (or enable both IGMP Snooping and IGMP Querier) for the VLAN to which the Classic PPM servers belong.

Previously, IP multicast was treated much the same as IP broadcast, and Ethernet switches flooded multicast traffic to every interface. By default, Cisco Catalyst switches take the opposite approach and do not flood multicast traffic to all interfaces. With IGMP snooping, layer 2 switches can make intelligent multicast forwarding decisions by examining the contents of each frame layer 3 IP header. The switch maintains a multicast group list so that it only delivers multicast packets to interfaces belonging to a particular group.

### Run Health Reports

The legacy CSA health report tabs, buttons, and options were removed in release 15.3. See **Run a Health Report**.

### Check Log Files

Check log files when an installation, upgrade, or usage issue arises to find an explanation and to troubleshoot. By default, Classic PPM writes only error messages to the log files. If Broadcom Technical Support helps you with an issue, you may be asked to configure the system to display detailed debugging messages.

The log files are stored by default in the `logs` directory under the Classic PPM home directory. Each server has its own logs directory. You can also select an alternate logs directory in CSA. You can use a text editor to view the log files.

If you have a cluster of Classic PPM servers, the log files for each server apply only to that server. You can configure the logs to add more detail or to update or remove entries. You can have the log file configuration changes take effect immediately. Otherwise, you must restart the Classic PPM Application (app) and Classic PPM Background (bg) services before the changes take effect.

> [!NOTE]
> Each cloned instance of a service has its own log files. For example, app2, bg3, and so forth, have a matching set of log files delineated by id. The initial app and bg instance does not have an id.

The following table contains the list of default and common log files:

| Log File Name | Format | Contents |
|---|---|---|
| `admin.log` | Plain text | A record of administrative activities. These activities are driven through the admin command or an equivalent CSA operation. |
| `app{id}-access-{date}.log` | Plain text | Session activity (http/s requests) for the foreground service. |
| `app{id}-bootstrap-ca.log` | Plain text | ODF Bootstrap activities, typically occurring during an upgrade and patch operation. |
| `app{id}-ca.log` | Plain text | The primary log for all activities in the foreground service. |
| `app{id}-dwh.log` | Plain text | Data warehouse-specific activity in the foreground service. |
| `app{id}-process-engine.log` | Plain text | Events that are recorded by the Process Engine Monitor in the foreground service. |
| `app{id}-system.log` | Plain text | System-level output that is written directly to the console (STDOUT) for the foreground service. This output is typically service start-up messages or OS messages. |
| `beacon-system.log` | Plain text | System-level output that is written directly to the console (STDOUT) for the beacon service. This output is typically service start-up messages or OS messages. |
| `bg{id}-bootstrap-ca.log` | Empty | This file is automatically generated, but is typically empty. |
| `bg{id}-ca.log` | Plain text | The primary log for all activities from the background service. |
| `bg{id}-dwh.log` | Plain text | Data warehouse-specific activity in the background service. |
| `bg{id}-process-engine.log` | Plain text | Events that are recorded by the Process Engine Monitor in the background service. |
| `bg{id}-system.log` | Plain text | System-level output that is written directly to the console (STDOUT) for the background service. This output is typically service start-up messages or OS messages. |
| `completion.log` | Properties | A record of installation or upgrade steps that have been completed for each component. Do not modify this log without the assistance of Broadcom Support. |
| `dbtools-bootstrap-ca.log` | Empty | This file is automatically generated, but is typically empty. |
| `dbtools-ca.log` | Plain text | Activity from DBTools. DBTools is the tool that modifies database entities and data during an upgrade or patch process. |
| `dbtools-dwh.log` | Empty | This file is automatically generated, but is typically empty. |
| `dbtools-process-engine.log` | Empty | This file is automatically generated, but is typically empty. |
| `nsa-access-{date}.log` | Plain text | Session activity (http/s requests) for the system administration service. |
| `nsa-bootstrap-ca.log` | Empty | This file is automatically generated, but is typically empty. |
| `nsa-ca.log` | Plain text | The primary log for all activities from the system administration service. |
| `nsa-dwh.log` | Empty | This file is automatically generated, but is typically empty. |
| `nsa-process-engine.log` | Empty | This file is automatically generated, but is typically empty. |
| `nsa-system.log` | Plain text | System-level output that is written directly to the console (STDOUT) for the system administration service. This output is typically service start-up messages or OS messages. |
| `odf-bootstrap-bootstrap-ca.log` | Empty | This file is automatically generated, but is typically empty. |
| `odf-bootstrap-ca.log` | Empty | This file is automatically generated, but is typically empty. |
| `odf-bootstrap-dwh.log` | Empty | This file is automatically generated, but is typically empty. |
| `odf-bootstrap-process-engine.log` | Empty | This file is automatically generated, but is typically empty. |
| `upgrade-bootstrap-ca.log` | Empty | This file is automatically generated, but is typically empty. |
| `upgrade-ca.log` | Plain text | Messages from individual Classic PPM upgrade scripts that are executed during an upgrade process. |
| `update-dwh.log` | Empty | This file is automatically generated, but is typically empty. |
| `upgrade-process-engine.log` | Empty | This file is automatically generated, but is typically empty. |
| `xogAdmin-bootstrap-ca.log` | Empty | This file is automatically generated, but is typically empty. |
| `xogAdmin-ca.log` | Plain text | Activity from the XOG Admin client. XOG Admin client is the tool that inserts or modifies data during an upgrade or patch process. |
| `xogAdmin-dwh.log` | Empty | This file is automatically generated, but is typically empty. |
| `xogAdmin-process-engine.log` | Empty | This file is automatically generated, but is typically empty. |

### Edit the Logger Configuration

The primary log files are the `ca` log files. Most information that the product logs goes to one of these files. This information includes system errors and information messages such as debug messages. You can configure which log messages appear in the `ca` log files.

Two important log message attributes include:
- **Category** - Indicates the location in the product from which the message was logged.
- **Level** - Indicates the severity of the message.

You can adjust the logger configuration to filter log messages that are based on the category and level. The product reports all messages that fall under the `com.ca` category with level **error** or above (**Fatal**). You can add extra categories with information, or can add debug levels to get more information when troubleshooting a problem.

If you have more than one Classic PPM Background (bg) service running and have enabled debugging to troubleshoot a Classic PPM Background (bg) service issue, it is useful to turn off all services except the one that is configured for debugging. This process ensures that all jobs or processes go through this Classic PPM Background (bg) service and generate the desired debug messages. Restart the Classic PPM Background (bg) service so that the changes take effect, and then check the log file (`bg-ca.log`).

**Follow these steps:**

1. Log in to CSA.
2. Click **Home**, **Servers**.
3. To edit the log information, click the **Properties** icon for the server.
4. Click the **Logs** tab.
5. Click the **Edit Configuration** sub tab.
6. In the **Properties** section, complete the following fields:
- **Detect Log Configuration Changes Automatically** - Indicates if the log configuration changes take effect immediately. Select this check box to have changes you make take effect immediately. This option applies to Classic PPM Background (bg) and Classic PPM Application (app) services that are running in Apache Tomcat.

> [!WARNING]
> If you select this option, restart any affected services to ensure that the change takes effect.
- **Alternate Logs Directory** - Defines the alternate logs directory for this server. This path must be a valid absolute path to a directory on the server. For example, `/niku/logs` (Unix) or `E:\logs` (Windows).

> [!NOTE]
> Some key points you need to remember:
> - If you specify an alternate directory, certain log files such as `admin.log`, `bootstrap.xml`, `scriptmetrics.xml`, `completion.log` will not be saved in the alternate directory. These files will continue to be saved in the default log directory.
> - You need to redeploy services after configuring the alternate log directory.
- **Default Trace Threshold (Seconds)** - Specifies the basic threshold over which trace information for a given request is written. This value overrides the `logger.xml` category levels.

7. In the **System Logging** section, complete the following fields:
- **Maximum number of system logs (per service)** - Indicates the number of system log files that you want to keep for each service. Changing this value requires restarting the services. The default value is five.
- **Maximum size of each system log** - Indicates the size of the system log files for each service in megabytes. Changing this value requires restarting the services. The default value is 5 MB.

8. In the **Kettle Logging** section, complete the following field:
- **Kettle Log Level** - Indicates the level of log activity that you want to see when the **Load Data Warehouse** and the **Load Data Warehouse Access Rights** jobs run. The log data is stored in the Data Warehouse logs in CSA. Values: `Nothing`, `Error`, `Minimal`, `Basic`, `Detailed`, or `Row level`.

9. In the **Process Engine Persistence Logging** section, complete the following field:
- **Process Engine Persistence Log Level** - Indicates the level of log activity that you see if you include the `<gel:log>` tag in your process GEL script. Select from the following values to configure what type of messages you see on the **Home**, **Organizer**, **Initiated - Processes** page:
- **Error** - The default value indicates that only messages with `<gel:log level=ERROR>` display as messages on the UI. We recommend this setting to keep the size of the `BPM_ERRORS` table small.
- **Warn** - The value indicates that messages with `<gel:log level=ERROR>` or `<gel:log level=WARN>` display as messages on the UI.
- **Info** - The value indicates that all messages, including the ones without any log level, display as messages on the UI.

10. In the **Trace Thresholds** section, click **Add Threshold**, and complete the following fields:
- **Threshold (Seconds)** - Specifies the number of seconds after which the actions that are identified by the action patterns are traced. A value of `-1` means no threshold is set for the given actions. This value is useful for disabling thresholds for long-running actions.
- **Patterns** - Identifies the actions that are traced when the threshold is exceeded. Enter the pattern in a comma-delimited format. For example: `webRequest/npt.overview`, `xogRequest/XOG::project::read`, or `serviceRequest/*`.

11. In the **Categories** section, complete the following fields:
- **Name/Other Name** - Defines the category for adding or changing. Select from the drop-down. To enable a category that is not listed in this list, enter the category in the **Other Name** text field.
- **Appender** - Directs logging output to a different destination. To direct a category to a separate file, add a STDOUT appender with a unique file name and associate the category with the new appender.
- **Priority** - Defines the debug level. The higher the level, the higher the priority. Values:
- **Fatal** - Indicates that a critical service is not running.
- **Error** - Indicates a problem that can restrict system functions.
- **Warn** - Indicates that Classic PPM encountered a problem, but continues to run.
- **Info** - Indicates the system status (such as service start) and does not always indicate a problem.
- **Debug** - Displays detailed information that helps you or Broadcom Technical Support resolve a problem.
- **Trace** - Displays low-level technical information. This level produces large volumes of data. Use this value only when requested by Broadcom Technical Support.
- **All** - Displays all messages.
- **Additive** - Indicates if new messages are appended to the logs. To append messages, select this check box. If this check box is clear, logs are occasionally overwritten with new information.

12. Save the changes.

13. Restart the affected services.

> [!WARNING]
> Logging can decrease system performance, especially higher priorities such as Debug and Trace. Only enable the additional logging when it is necessary or when you are instructed to do so by Broadcom Technical Support. Disable the additional logging as soon as it is no longer required.

### User-Specific Logging

You can enable some logging categories for specific users. To enable logging for a specific user, append the user name to the end of the standard logging category.

For example, `trace.server.user.jsmith` enables the server-side performance logging for the user `jsmith`. The `user` keyword indicates that the last category segment is the user name. The user name is used as a filter for logging events on the category (in this case, the `trace.server` category).

Changes to SQL logging settings for a specific user only take effect when the user logs in. Therefore, the user must log in again after each user-specific logging configuration change.

### Action Tracing

Perform Action Tracing (previously known as SQL trace) only at the request of and with the guidance of Classic PPM Technical Support. Only perform this activity for short amounts of time to troubleshoot particular actions. Action Tracing must then be disabled.

> [!TIP]
> **Video: SQL Trace Activation** - The following video is provided by Broadcom. To play this video in full screen, click the YouTube logo to the right of Settings at the bottom of the video.

### Back up an Installation

Whenever you plan a significant update to the production system, back up the current system so that you can restore it. To store the database backup, use the backup directory.

**Follow these steps:**

1. Log in to CSA, and verify that all services are stopped except the database. If the database service is not installed, do not be concerned.
2. Open a command line on the CSA application server, and issue the following command:
   ```
   admin backup
   ```
3. To accept the default values, press **Enter**. The backup command copies the Classic PPM installation directory into a backup directory.

#### Back up an Oracle Database

**Follow these steps:**

1. From the database server command line, use the Oracle Database Export utility `expdp`. See the Oracle documentation for the detailed steps to use this utility. The following example shows an export command:
   ```
   expdp clarity/password FULL=y DIRECTORY=data_pump_dir DUMPFILE=clarity.dmp LOGFILE=myclarityexp.log SCHEMAS=clarity
   ```
2. Copy the `.dmp` and the `init<SID>.ora` files to the backup directory that the backup command created.

#### Back up a Microsoft SQL Server Database

Back up a Microsoft SQL database using the SQL Server Enterprise Manager. See the Microsoft documentation for details.

### Restore a Classic PPM Installation

The operation to restore an installation uses the backup of the file system and database that was made before the upgrade process was started.

> [!TIP]
> **Best Practice:** Only restore a Classic PPM installation after you have exhausted all other options.

**Follow these steps:**

1. From the command line, stop all services:
   ```
   service stop all
   ```
2. Restore the database using your standard database management tools and the backup that was taken before you started the upgrade process.
3. Restore Classic PPM using the restore script from the backup directory:
- Windows: `restore.bat`
- Unix: `restore.sh`

> [!NOTE]
> See **Back up a Classic PPM Installation**.

4. When complete, restart all services:
   ```
   service start all
   ```
5. (Optional) Reinstall older reports.

> [!NOTE]
> See **Installing and Upgrading** that corresponds to the version for which you installed reports.

### Compile and Analyze Existing Oracle Database Objects

Compile and analyze the database in the following circumstances:
- When you export and import the database to another server to perform test upgrades
- When you reorganize the database on your production server

Compiling and analyzing ensures that all database objects are valid. If database objects are not compiled before upgrading the Classic PPM schema, upgrade failures can occur.

**Follow these steps:**

Open a command line on the CSA application server, and issue the following commands:

```
admin db compile
admin db analyze
```

The database objects are compiled and analyzed.

### Set File Directory Size

In CSA, you can specify a file storage size limit at the directory level. If a limit is specified, a new sibling directory is automatically created for storing subsequent files once the limit is reached. The size limit also applies to documents that you import into Classic PPM using the XML Open Gateway (XOG). Setting the directory size limit does not affect the size of pre-existing folders.

**Follow these steps:**

1. Log in to CSA.
2. Open **Home**, and click **Servers**.
3. Click a server name.
4. Click the **Documents and Search** sub tab.
5. In the **Document Manager Options** section, in the **File Store Directory Size Limit** field, specify the file storage size limit for a directory.

### Set GEL Tag Restrictions

To control the GEL tag restriction, use the following commands:

```
admin general restrict-gel-tags
```

Sets the value of the `gelTagRestriction` property to `on`.

```
admin general allow-gel-tags
```

Sets the value of the `gelTagRestriction` property to `off`.

The property `gelTagRestriction` is referenced to determine whether gel tags are restricted. The property is on the system element. The element is optional. Use the values `on` or `off` to set GEL tag restrictions for the environment. Specifying any value other than `off` enables the GEL tag restriction. GEL tag restrictions are off by default.

> [!NOTE]
> Altering GEL tag restrictions requires that you restart the app and bg services.

**Examples:**

`properties.xml` file with no GEL tag restriction:

```xml
<system online="true" multiCurrency="false" licenseTypes="old" singleTenantMode="true"/>
```

```xml
<system online="true" multiCurrency="false" licenseTypes="old" singleTenantMode="true"
  gelTagRestriction="off"/>
```

`properties.xml` file with GEL tags restricted:

```xml
<system online="true" multiCurrency="false" licenseTypes="old" singleTenantMode="false"
  gelTagRestriction="on"/>
```

---

## CSA: Document Index, Search, Storage, and File Scanning (On-Premise Only)

Use Classic PPM System Administration (CSA) to index documents, recreate the search index, migrate the filestore to the database, and set up file scanning.
- Select the Method to Index Documents
- Recreate the Search Index
- Migrate the Filestore to the Database
- Set Up File Scanning

### Select the Method to Index Documents

You can index documents that are checked in through the Knowledge Store or Document Manager, make them searchable, and migrate them to the database. When users check-in documents from the Knowledge Store or Document Manager, the documents must be indexed before users can search for them.

The following methods are available to index documents:
- **Synchronous** - The CSA indexes in-process as documents are checked in. Use this method when you want to have documents indexed for searching immediately after they are checked into the Knowledge Store or Document Manager.
- **Asynchronous** - The **Index contents and documents for searches** job indexes the documents on a predefined schedule. By default, this job runs every hour. Use this method to index documents with a delay to achieve faster check-in performance.

**Follow these steps:**

1. Log in to CSA.
2. Open **Home**, and click **Servers**.
3. Click the **Properties** icon to configure the server. The properties page for the server appears.
4. Select the **Documents and Search** sub tab.
5. In the **Search Server** section, do one of the following:
- To index documents as they are checked in, leave the **Use Synchronous Indexing** check box selected.
- To index documents as a scheduled job, clear the **Use Synchronous Indexing** check box. This field specifies whether uploaded documents are indexed immediately in-process, or whether they are to be queued for indexing by the asynchronous background indexer.
6. Click **Save**.
7. Open **Home**, and click **All Services**.
8. Restart all services by checking the box next to each service, and clicking **Start**.

> [!NOTE]
> If you are using a cluster setup, please store your files on a NAS storage.

### Recreate the Search Index

You typically do not need to recreate the search index during a Classic PPM installation. Recreate the index only when the instructions that are provided with a Classic PPM upgrade, patch, or hotfix release advises you to do so. Recreating the search index is a lengthy process that should be run only as an overnight job.

Follow this step:

Execute the following commands from the command line:

```
admin search recreate-index-files
admin search recreate-index-data
```

### Migrate the Filestore to the Database

Migrating the filestore is a lengthy process. Only run this process as an overnight job. During migration, document links within Classic PPM do not work. As a best practice, shut down the Classic PPM application server until the migration process completes.

**Follow these steps:**

1. Log in to CSA.
2. Click the **Properties** icon for the server to which you want to migrate filestores. The properties page for the server appears.
3. Click the **Documents and Search** subtab.
4. Complete the following field, and save:
- **Store Files in Database** - Defines whether to store files in the database. Verify that this check box is selected. Typically, files are stored in the filestore on disk. For an upgrade where files are currently stored on disk, this property must be set before the upgrade to move existing files to the database, if such is desired.
5. Restart the services:
   a. Open **Home**, and click **All Services**.
   b. Select the check boxes next to the **Clarity Application (app)** and **Clarity Background (bg)** services.
   c. Click **Start**.
6. From the command line, issue the following command:
   ```
   admin search migrate
   ```
   The documents are migrated from the filestore to the database.
7. Use a text editor to open the `admin.log` and see that the files were successfully moved to the database.

### Set Up File Scanning

You can set default virus scanning for all documents that are uploaded using the Document Manager or a Studio attachment data type. When this option is enabled, all uploaded documents are scanned for viruses. If a virus is found, the document is rejected and a warning appears on the resulting page. Documents that are uploaded using XOG are not scanned for virus.

You must set up file scanning to scan documents for viruses.

**Follow these steps:**

1. Run the file scanning program and complete the following actions:
   a. Verify that the file virus program returns the following status codes:
- `-1`: an error was encountered when running the virus program
- `0`: success; no virus was found
- `1`: a virus was found in the uploaded file

> [!NOTE]
> If the file virus program does not return these codes, create a wrapper around the virus program to return these status codes.

   b. Set the `JAVA.IO.TMPDIR` in the JVM. Using the login that Classic PPM uses, ensure the executable file that is specified is able to run as:
      `/full_path/someChecker /JAVA.IO.TMPDIR/someFile`
      where `/JAVA.IO.TMPDIR/someFile` is a full path argument that is passed on the command line specifying a file in the Java temp directory.

2. Set file scanning for documents:
   a. Set a path to virus scan executable.
   b. Select the file scanning option.

#### Set Path to Virus Scanner Executable

**Follow these steps:**

1. Log in to CSA.
2. Open **Home**, and click **Servers**.
3. Click the server name.
4. Click the **Documents and Search** sub tab.
5. In the **Document Manager** section, enter the path to the executable that will scan documents for virus in the **File Scanning Executable** field.
6. Save the changes.

#### Enable File Scanning

To enable virus scanning, set the file scanning option in Classic PPM.

**Follow these steps:**

1. Log in to Classic PPM.
2. Open **Administration**, and from **General Settings**, click **System Options**.
3. In the **Document Manager Options** section, select the **Enable File Scanning of Documents** check box to scan the documents that are uploaded. If this check box is clear, uploaded documents are not scanned.
4. Save the changes.

---

## CSA: Security, Passwords, LDAP, SSL, SSO, XSS, and FIPS (On-Premise Only)

Use Clarity System Administration (CSA) to manage security, set database server passwords, enable SSL, integrate with LDAP servers, configure SSO, and manage external URLs.
- Manage Database Server Passwords
- Encrypt Server Passwords
- Change Database Server Passwords
- Configure Secure Sockets Layer (SSL) on Apache Tomcat
- Configure Clarity to Use HTTPS
- Integrate with Lightweight Directory Access Protocol (LDAP)
- Configure Single Sign-On (SSO) for Classic PPM
- Configure Single Sign-On (SSO) for Clarity
- Set Options for Cross-Site Scripting (XSS) Vulnerabilities
- External URLs
- Enable FIPS in Clarity

### Manage Database Server Passwords

Use a server password to secure each server. If the server is in a cluster, the server password does not grant access to other servers in the cluster.

To minimize the risk of unauthorized access, periodically change the password on each server.

1. Change the password for the database server. See your third-party database documentation for more information.
2. Change the password for CSA.
3. Restart the services after you change the database server password.

### Encrypt Server Passwords

To protect a server password file, you can encrypt it. You can enable AES encryption of server passwords through the `properties.xml` file. This encryption method requires that you use a separate password (key) when encrypting the passwords in `properties.xml`. Keep this unencrypted key secure.

The advantage of server-side encryption is that you only have to secure one key, which is stored in a file accessible by the server. The key is only required at server startup. After Classic PPM is running, you can further secure the key file with another layer of encryption. If the file resides on removable storage, you can detach and lock the file in a safe.

When you enable the server password encryption, any clear-text passwords in `properties.xml` are encrypted the next time Classic PPM accesses the file. If you enable encryption and you edit `properties.xml` directly, you can enter passwords in clear text. The next time that the file is accessed (for example, when a service is deployed or started) the clear-text passwords are encrypted.

To encrypt server passwords, create a valid key file that is accessible to the server and that contains the properties file. Each server must have access to either the key file (over the network) or a copy of it (on the server local disk).

**Follow these steps:**

1. Log in to CSA.
2. Click **Home**, **Servers**.
3. Click the name of the server.
4. Click the **Security** tab.
5. Choose one option and click **Save**:
- To enable encryption using a system key, select the **Using System Key** option on the **Encrypt Passwords** field. This option uses a hard-coded key that ships with the product. This option is the less secure of the two options. If the key for one Clarity installation becomes known, the key for all installations is known. This option discourages casual observers. If an employee is looking at the system key for innocent reasons, the employee does not see any passwords. However, an intruder trying to gain access to the system who has already gained access to files on the server can probably decrypt the passwords.
- To enable encryption using a custom key file, select the **Using Custom Key File** option. Enter the full path and file name to your custom key file in the **Key File** field. This option requires that you create a key file and make it accessible to all servers running Classic PPM. The key file is properly secured so an intruder would be faced with the practically impossible task of decrypting the passwords without a key.

> [!WARNING]
> If you encrypt passwords with a custom key file, change the custom key file. Otherwise, your passwords are lost (cannot be decrypted). In this case, you must re-enter the passwords.

### Change Database Server Passwords

**Follow these steps:**

1. Change your database server password on the database.

> [!NOTE]
> See your third-party database documentation for more information.

2. Change the database server password in CSA to the new password that you entered. Log in to CSA.
3. Stop the **Clarity Application (app)** and **Clarity Background (bg)** services by completing the following actions:
   a. Click **Home**, **All Services**.
   b. Select the check boxes next to **Clarity Application** and **Clarity Background**, and click **Stop**. The services are stopped.
4. Click **Home**, **Servers**.
5. Click **Properties** and then click the **Database** tab.
6. In the **Internal Connection: Niku** section, complete the following fields:
- **Password** - Enter a new password.
- **Confirm Password** - Enter the password again.
7. Click **Save**.
8. Restart the **Clarity Background (bg)** and **Clarity Application (app)** services:
   a. Click **Home**, **All Services**.
   b. Select the check boxes next to **Clarity Background (bg)** and **Clarity Application (app)**, and click **Start**.

### Configure Secure Sockets Layer (SSL) on Apache Tomcat

SSL is a protocol for transmitting data between nodes. The protocol uses a cryptographic method to protect data from unauthorized access that is based on two keys: a public key that is known to everyone and a private (secret) key that is known only to the message recipient.
- Because the steps in this section refer to third-party components, support is limited.
- Decide where you are going to install SSL. For example, to improve performance, use another server and not the application server.
- The Java `keytool` command represents one popular way of creating and managing SSL certificates. Other tools and commands are available.
- The listed steps apply to many, but not all environments. Moreover, the steps might even be incorrect in some environments. In particular, you might use self-signed certificates (not purchased from a certified vendor such as Verisign or Thawte). These certificates might require multiple installations before installing the real certificate. The names for these certificates vary.
- Follow the instructions from your SSL certificate vendor instead of relying solely on the steps on this page. Vendors might require you to modify specific steps or commands.
- For testing purposes, use the private key that is included with Classic PPM.

> [!TIP]
> When HTTP is used with SSL, it is referred to as HTTPS.

When SSL is enabled on the application service, all data moving between client applications (such as a web browser or Open Workbench) is encrypted. The data is encrypted before it is sent and decrypted before it is received. Without the SSL encryption, an unauthorized entity could read the data and could steal sensitive information such as user names and passwords.

The steps on this page apply only when you first install Classic PPM. You can also install a renewed certificate when an old one expires.
- Generate a Public and Private Key Pair
- Create a Certificate Signing Request (CSR)
- Install Certificates
- Distribute the Keystore File to Application Servers
- Set the Keystore File Location and Password
- Enable SSL on Each Server
- Enable SSL for Password-Protected Pages
- Enable a Secure JDBC Connection Between the Clarity Application and Database Servers on Separate Hosts with SSL
- Configure Classic PPM to Work with SSL Off-Loaders
- XSS: User Input Validation
- XSS: User Input Restrictions
- XSS: Restriction Option
- XSS: URL Attribute Value Option
- XSS: Site Links Option
- XSS: Common XSS Patterns Option

#### Generate a Public and Private Key Pair

Use the Java `keytool` command to generate a public and private key pair, and to create a certificate signing request (CSR).

> [!NOTE]
> The steps on this page provide only the required Java parameters. For complete information about all parameters for the Java commands, see the Oracle documentation website.

Before you place a system into production, create a keystore file for your private key and distribute the file to all application servers. If you already have another keystore file, you can also use the file with Classic PPM.

**Follow these steps:**

1. Open the Classic PPM application server, open a command prompt, and generate a public and private key pair by issuing the following command:
   ```
   keytool -genkey -keystore /<Clarity Home Directory>/config/.keystore -keyalg RSA -storepass keystore
   ```
2. Define the following values:
- `-genkey` - This option generates a keystore if one does not exist. The keystore contains the public and dummy public key.
- `keystore` - Specifies the path and filename of the keystore file. By default the keystore is named `.keystore` and is located in the `/<Clarity Home Directory>/config/` directory.
- `keyalg` - Specifies the algorithm that you use when generating the key pair (RSA in this example).
- `storepass` - The password that is used to protect the keystore (which must be at least six characters). This password is provided to all commands that access the keystore.
3. When prompted, enter the appropriate information about your organization.
4. Press **Enter** when prompted to enter the key password. The key password and the keystore password must be the same.

> [!NOTE]
> For a self-signed certificate, export the `.cer` file from the private key you have generated and skip the next procedure. Do not create a certificate signing request (CSR). A CSR is not required in this case. To export the file, use the following command:
> ```
> keytool -export -file <file_name.cer> -keystore <ClarityHome/config/.keystore> -storepass keystore
> ```

#### Create a Certificate Signing Request (CSR)

For production systems, replace the test certificate with a real, certified certificate. To obtain a certified certificate, create a certificate signing request (CSR) and send it to a certificate authority. The certificate authority generates a real certificate that authenticates your public key.

The CSR is a request for a real SSL certificate based on the information for your system. You don't install the CSR. You install the real certificate provided by your SSL provider in response to your CSR. Always follow instructions from your SSL provider. Specific commands are often required to install root or intermediate certificates. Vendors might require the installation of other certificates.

**Follow these steps:**

1. On the Classic PPM application server, open a command prompt, and issue the following command:
   ```
   keytool -certreq -keystore /<Clarity Home Directory>/config/.keystore -keyalg RSA -file ca_ppm.csr
   ```
2. When prompted for a password, enter the default password (`keystore`).
3. Define the following values:
- `-certreq` - Generates a certificate signing request (CSR).
- `keystore` - Specifies the path and filename of the keystore file. By default the keystore is named `.keystore` and is located in the `<Clarity Home Directory>/config/` directory.
- `keyalg` - Specifies the algorithm (RSA) to use when generating the key pair.
- `file` - Specifies the name (`ca_ppm.csr`) of the generated certificate request file.
4. In a web browser, open your certificate authority website, and provide the contents of the CSR file you generated. Use the process that your certificate authority specifies. Your CSR is provided to you by your certificate authority.
5. Copy the new certificate (for example, `ca_ppm.cer`) provided by your SSL provider on the Classic PPM application server.

> [!NOTE]
> Your private key remains unaffected.

6. Backup the keystore file by copying it to another volume. While you wait for the real certificate, do not modify the keystore file. Any changes can cause problems when you import the real certificate. If you cannot import the real certificate or someone changes the file, you can start over again. Do not generate a new CSR or wait for a new copy of the real certificate. You save time by having the backup copy of the keystore file.

#### Install Certificates

If you have received a certificate from your SSL vendor, import the reply from the certificate authority and replace your self-signed certificate with a chain of certificates. At the bottom of the chain is the certificate that the certificate authority issues to authenticate your public key. The next certificate in the chain is one that authenticates the certificate authority public key.

You import certificates to create a chain of certificates. For self-signed certificates or certificates created on your own certificate servers, the creator provides the certificates. As creator, you set up the trusts/chains to make SSL work seamlessly like certificates that you purchase from SSL vendors. Import any root, intermediate, other certificates, and the real certificate provided by your SSL provider in response to your CSR.

Use these steps to create a keystore file containing your private key which is paired with the signed certificate from your certificate authority.

**Follow these steps:**

1. Open the Classic PPM application server, open a command prompt, and issue the following command:
   ```
   keytool -import -keystore /<Clarity Home Directory>/config/.keystore -keyalg RSA -file Clarity-Source.cer -trustcacerts
   ```

> [!NOTE]
> You may be required to import your certificate authority root intermediate certificate into your keystore file before you import your certificate. See your certificate authority third-party documentation for more information.

2. Enter the keystore password and press **Enter**.
3. Enter `yes`.

#### Distribute the Keystore File to Application Servers

## SSL Keystore Distribution

If you have more than one server with application services, distribute the keystore to all servers.

****Follow these steps:****

1. Log in to CSA.
2. Stop all services by completing the following actions:
   a. Click **Home**, **All Services**.
   b. Select all the services and click **Stop**.
3. Click **Distribute**, **Distribute All**.
4. Check the box next to all servers and click **Distribute**.
5. Restart all services by completing the following actions:
   a. Click **Home**, **All Services**.
   b. Select all the services and click **Start**.

The keystore file is distributed to the servers with application services.

### Set the Keystore File Location and Password

Repeat these steps for each server in the cluster.

****Follow these steps:****

1. Log in to CSA.
2. To change the server, click the **Properties** icon.
3. Click the **Security** tab.
4. Complete the following fields, and save:
- **SSL Keystore**: Enter the location of the keystore file. If you leave the field empty, the default value of `<Clarity Home Directory>/config/.keystore` is used.
- **SSL Password**: Enter the keystore password (the default value is `keystore`).
- **Confirm Password**: Enter the keystore password again.
5. Stop and restart all services by completing the following actions:
   a. Open **Home**, and click **All Services**.
   b. Click the **Select All** icon to select all services, and click **Stop**.
   c. Click the **Select All** icon to select all services, and click **Start**.

### Enable SSL on Each Server

The **SSL Handling** setting determines how the application behaves regarding SSL. The setting contains the following options:
- **Derive from Port Settings (implied)**: Derived from whether web server ports are enabled or disabled. This setting emulates SSL behavior from earlier releases (before Version 13.0).
- **SSL is used but processed externally (external)**: Specifies that the load balancer or other prior endpoint terminates the SSL outside of the app server.
- **Switch to HTTPS only for sensitive pages (hybrid)**: Specifies that Classic PPM actively switches between HTTP and HTTPS for secure and nonsecure pages.
- **Support both HTTP and HTTPS without switching (both)**: Specifies both HTTP and HTTPS are enabled. Do not try to switch between the two.
- **Support only HTTPS (full)**: Specifies all SSL. Everything is encrypted. Switch to SSL if necessary.
- **Support only HTTP (none)**: Specifies no SSL. Everything is in the clear.

> [!NOTE]
> These steps explain how to set up the SSL handling with the option **Support only HTTPS**. If you select **Derived from Port Settings** as your SSL Handling option, the following extra field settings for each application instance are required:
> - **HTTP Enabled**: Clear the check box.
> - **HTTPS Enabled**: Select the check box.

To enable SSL, complete these steps for each server:

****Follow these steps:****

1. Log in to CSA.
2. Click **Home**, **Servers**.
3. Click the name of the server that you want to configure.
4. Click the **Properties** tab.
5. Click the **Application** tab.
6. In the **Application Server** section, complete the following field:
- **SSL Handling**: Select the option that is named **Support only HTTPS**.
7. In each **Application Instance** section that is associated with the server, complete the following fields:
- **HTTPS Port**: Enter the port that you want to use for the HTTPS traffic.
- **HTTPS Entry URL**: Enter the HTTPS URL (including the port). Example:
     ```
     https://ca_ppm.mycompany.com:8443
     ```
8. Save your changes.
9. Stop and restart the application services by completing the following actions:
   a. Click **Home**, **All Services**.
   b. Select each service that you want to stop, and click **Stop**.
   c. Select each service that you want to restart, and click **Start**.

### Enable SSL for Password-Protected Pages

You can enable SSL for only those pages that contain user passwords. With this configuration, users are automatically redirected between secure and insecure pages in the application. The redirection is made possible by enabling HTTP and HTTPS simultaneously.

With this configuration, both ports on the UNIX operating systems must be greater than 1024. As an exception, you can use the regular port numbers if you use a SUDO command to launch the services with root-like permissions. This exception does not apply when using load balanced or proxied installations. In those cases, use custom port ranges. In non-production environments, you can still choose not to use a load balancer (with optional SSL offloading). You could still use the traditional ports less than 1024.

****Follow these steps:****

1. Log in to CSA.
2. Click **Home**, **Servers**.
3. Click the **Properties** icon of the server you want to configure.
4. Click the **Application** tab.
5. In the **Application Server** section, complete the following field:
- **SSL Handling**: Select the option **Switch to HTTPS only for sensitive pages**.
6. In each **Application Instance** section that is associated with the server, complete the following fields:
- **HTTP Enabled**: Select the check box.
- **HTTPS Enabled**: Select the check box.
- **HTTPS Port**: Enter the port that you want for HTTPS traffic.

> [!WARNING]
> For UNIX, the HTTP and HTTPS port numbers must be greater than 1024 unless you use a SUDO command.
- **HTTP Entry URL**: Enter the HTTP URL (including port). Example: `http://ca_ppm.mycompany.com:8080`
- **HTTPS Entry URL**: Enter the HTTPS URL (including port). Example: `https://ca_ppm.mycompany.com:8443`

7. Configure more servers.
8. Stop and restart each application service:
   a. Click the **Services** tab.
   b. Select each service that you want to stop, and click **Stop**.
   c. Select each service that you want to restart, and click **Start**.

### Enable a Secure JDBC Connection Between the Application and Database Servers on Separate Hosts with SSL

For compliance with information security policies and other frameworks, you might need to encrypt applications such as Clarity moving to AWS, Azure, and other cloud servers at the application and database level.

You can define certain parameters in the database connection string in the Clarity property file to enable SSL.

1. Follow the steps above to install the SSL certificate on the Oracle or SQL Server.
2. Add the following attributes in the database element of the Clarity property file:
   a. Add `useURL="true"`
   b. In the `url` attribute, add `encryptionmethod=SSL` as shown below:

```xml
<database id="Niku" vendor="mssql" serviceName="niku" password="xxxxxx"
  upgradeStatus="upgradeNotNeeded" schemaName="niku" username="xxxxxxx"
  host="sqlservere.clarity.com"
  url="jdbc:sqlserver://sqlserver.clarity.com:1433;DatabaseName=NNNNN_STAGE;InsensitiveResultSetBufferSize=0;ProgramName=Clarity;encryptionmethod=SSL"
  driver="com.ca.clarity.jdbc.sqlserver.SQLServerDriver" instanceName=""
  serviceId="NNNNN_STAGE" jndiDatabaseId="jdbc/NikuDS" useURL="true"/>
```

3. Oracle network encryption is also supported. Add the following parameter in your JDBC URL: `DataIntegrityLevel=required`
4. Open the `sqlnet.ora` file and confirm that it contains the following parameter settings:

```
SQLNET.ENCRYPTION_SERVER = required
SQLNET.CRYPTO_CHECKSUM_SERVER = required
```

   The `required` setting enables the encryption or integrity service and disallows the connection if the client side is not enabled for the security service. This is the default setting for database deployments on Database Cloud Service.

5. Restart the services.

> [!TIP]
> To verify that the network connection is SSL encrypted, run a wireshark packet trace and filter for the SQL Server DB IP Address and port number defined in your connection string.

### Configure to Work with SSL Off-Loaders

On an SSL application service, data moving between client applications is encrypted before being sent, and the data is decrypted before being received. SSL packet encryption can cause slower performance on application servers. To handle SSL, use a load-balancer or proxy server instead of the application servers.

If an external SSL off-loader such as a load balancer or a reverse proxy is used, the SSL off-loader encrypts HTTP traffic for Classic PPM. The off-loader communicates with the client using HTTPS. This setup can provide a performance improvement but requires some configuration in both the off-loader device and in Classic PPM.

Ensure that any SSL off-loader that you use has a URL-rewriting function that is enabled.

****Follow these steps:****

1. Log in to CSA.
2. Click **Home**, **Servers**.
3. Click the **Properties** icon for the server that you want to configure.
4. Click the **Application** tab.
5. In the **Application Server** section, complete the following field:
- **SSL Handling**: Select the option that is named **SSL is used but processed externally**.
6. For each application instance other than the Classic PPM application server instance, complete the following settings:
- **HTTP Enabled**: Specifies that HTTP is used to communicate. Select the check box.
- **HTTP Entry URL**: Indicates the URL that you want to use for traffic between Classic PPM and a client. An SSL off-loader becomes the front end to Classic PPM similar to the way a load balancer is the front end in a multiple-server environment. Because the SSL off-loader URL is secure, enter an HTTPS URL in this field using the following format: `https://<hostname>:CA Portal`.
- **HTTPS Enabled**: This check box does not apply when you are using an SSL off-loader. Clear this check box.
7. Save the changes.

### Configure to Use HTTPS

The following steps are for a non-clustered Clarity environment. In this procedure, you generate a keystore and a certificate request. After importing the certificates, make adjustments in CSA.

> [!TIP]
> For a load-balanced architectural implementation, enable SSL by installing the certificate on the load balancer and not on the application servers. On the **Application** tab, change the **SSL Handling** field value to **SSL is used but processed externally**.

****Follow these steps:****

1. Log in to the server that hosts Clarity.
2. Navigate to a directory for storing your private key. For example: `C:\ppm150101`
3. Prepare answers to the prompts in Step 5 now, in advance.
4. Generate a keystore with the following command:

```
keytool -genkey -keystore C:\ppm15101\keystore.jks -keyalg RSA -storepass changeit
```

   Note that `Keystore.jks` is the name of the keystore, with a password `changeit`. Change the password to a stronger one when you run this command.

5. Several prompts appear to fill-in server and organization details. Use the information that you prepared in Step 3. The certification authorities can provide you with all the necessary details. Contact them if you cannot answer all the prompts on your own.
6. When prompted for first and last name, enter the complete name of the server without `http://` or `https://` in the name.
7. Generate a certification request:

```
keytool -certreq -keystore C:\ppm15101\keystore.jks -keyalg RSA -file myRequest0.cer
```

8. To obtain a certificate for your server, send this file to the Certification Authority.
9. Verify that you have these certificates ready before importing into the keystore:
   a. server certificate
   b. intermediate certificate
   c. root certificate (Check with the Certification Authority for Root and Intermediate certificates)
10. Import the root certificate (replacing the keystore name, path, certificate name and path, and other parameters):

```
keytool -import -keystore C:\ppm15101\keystore.jks -keyalg RSA -file root.cer -trustcacerts -alias root
```

11. Import the intermediate certificate:

```
keytool -import -keystore C:\ppm15101\keystore.jks -keyalg RSA -file intermediate.cer -trustcacerts -alias intermediate
```

12. Import the server certificate:

```
keytool -import -keystore C:\ppm15101\keystore.jks -keyalg RSA -file server.cer -trustcacerts -alias server
```

#### Make Changes in CSA

1. Log in to CSA and click the **Security** tab.
2. In **SSL Keystore** field, enter the fully-qualified path to your keystore.
3. Complete the **SSL Password** and **Confirm Password** fields.
4. Click the **Application** tab.
5. Change **SSL Handling** to **Support both HTTP and HTTPS without switching**.
6. In the **Application Instance: app** section, select **HTTPS Enabled**.
7. Change **HTTPS Port** to a number allotted to the Clarity Application (this is organization dependent). For example, the Port number could be `8043`.
8. Change **HTTPS Entry URL** to the exact server name that was provided during keystore generation.
9. Restart the Application Service.
10. Verify that HTTPS is working by navigating using HTTPS (use the right port number and url). For example, the URL could be `https://servername.organization.com:8043/`.
11. Change the **SSL Handling** to **Support only HTTPS**.
12. Restart the Application service again.

If you imported a certificate the wrong way, and want to delete it, a command such as this can be used:

```
keytool -keystore c:\ppm15101\keystore.jks -alias root -delete
```

Another very useful command to list all the certificates in a keystore is:

```
keytool -keystore c:\ppm15101\keystore.jks -list
```

To turn verbose on, use:

```
keytool -keystore c:\ppm15101\keystore.jks -list -v
```

Finally, the paths mentioned here are for a Windows operating system. Change them to the path specifying convention of Linux if the application is built on that operating system. Everything other than the paths remains the same.

## Integrate with Lightweight Directory Access Protocol (LDAP)

A Lightweight Directory Access Protocol (LDAP) interface to authorize access across all applications can be beneficial. A central directory server controls access so that users can have one user name and password for all applications. The following options are supported:
- **LDAP v2 (simple)** protocol uses a small subset of LDAP functionality including authentication (clear text or SSL), binding, and searching.
- **LDAP v3** control for paged-results as defined in RFC 2696.

To synchronize users between your directory server and Classic PPM, users are fetched from the directory server in a batch. The LDAP configuration settings of Classic PPM specify the batch size.

Cookies that are session-based carry a token that is used to access session data. The token is persisted in the cache for single application environments or in a database for clustered environments. The user web browser must accept cookies from Classic PPM, which are session-based, so they are not written to disk. When the user logs out, session information in the database and cache that correspond to the cookie are deleted.

When you integrate Classic PPM with an LDAP server, you get the following benefits:
- Simplification of the user name and password administration. IT only has to manage one user name and password pair for a user.
- Authentication support. IT only has to support one place where users can have authentication problems.
- Improvement in the usability. Users only have to remember one user name and password.
- Improvement in the user management. The user name and email information can be stored in LDAP.
- Security enhancement. Using one user name and password makes it easier to use complex passwords and to change them more often. The likelihood of choosing a familiar password is reduced when there is only one password to remember.

The **LDAP - Synchronize New and Changed Users** job synchronizes LDAP entries. The job then stores the last date and time the job ran successfully and stores information in the `MN_DIRECTORY_SERVERS` database table. During the next background job run, the job synchronizes entries. The job synchronizes only recently created or changed user entries where the timestamp is greater than the value found in the `CMN_DIRECTORY_SERVERS.LAST_SYNC_DATE` property.
- Classic PPM does not verify whether a user in a group or in a search that CSA specifies is active or inactive in LDAP. Classic PPM checks only whether a user is present in a Classic PPM group or whether an attribute being searched for is present in Classic PPM.
- Classic PPM does not recognize nested groups in LDAP. Before you run the **LDAP - Synchronize New and Changed Users** job or the **LDAP - Synchronize Obsolete Users** job, ensure that your users are associated with a Clarity group that the CSA search can find. Users in groups that are nested inside the LDAP Classic PPM group are not checked when the LDAP synchronization jobs are run.
- A user who is deactivated on the LDAP server is deactivated in Classic PPM the next time the synchronization job runs. If a user is reactivated on the LDAP server, the user is not reactivated in Classic PPM; you are required to reactivate the resource.

> [!WARNING]
> Before you implement LDAP, select a compatible LDAP server. Set up Classic PPM for LDAP authentication on each server that is running an application service. To complete these steps, configure an LDAP server. If you have a cluster of Classic PPM servers, repeat these steps on each server in the cluster.

****Follow these steps:****

1. Create a resource as the test user you can use to access Classic PPM as an LDAP user.

> [!WARNING]
> The test user must have the same user ID in Classic PPM as the user LDAP `sAMAccountName` in Microsoft Active Directory or the `UID` for other LDAP implementations.

2. Decide how to define the LDAP users who are granted access to Classic PPM. You can enable the group authentication by specifying a group, or by creating an attribute/value combination on the LDAP, or both. You can define this setting from the security **Server: Properties** page in CSA.
3. Define the LDAP server properties.
4. Set up Classic PPM to authenticate.
5. Stop and restart all Classic PPM services.

### Define the LDAP Server Properties

You can define the LDAP server properties in CSA.

****Follow these steps:****

1. Log in to CSA.
2. Click the **Properties** icon of the server you want to set up.
3. Click the **Security** tab.
4. In the **LDAP Server** section, complete the fields:
- **URL**: Defines the LDAP server URL. If your LDAP server is SSL-enabled, use the LDAPS protocol in the URL (rather than the default LDAP protocol).
- **Root Context**: Defines the LDAP naming context, for example: `ou=People, dc=niku, dc=com`.
- **Search User**: Defines the user name with the appropriate credentials for binding to the LDAP server.
- **Password**: Defines the password and confirms it in the **Confirm Password** field.
- **Search Filter**: Defines the search filter string (as defined in RFC 2254).
- **Date/Time Format**: Defines the date and time format that the LDAP server uses.
- **Group Name**: Enables the group authentication. Enter the group name and at the **Group Identifier** field, enter the group ID.
- **Allow non-LDAP users**: Indicates that access to Classic PPM is allowed using alternate authentication methods.
- **Use Group Memberships**: Select this check box (clear by default) if you need to improve performance with the **LDAP - Synchronize Obsolete Users** job. The job uses group memberships in the synchronization and requires a reverse relationship from users to groups in your LDAP. The default value is `memberOf`; however, you can specify another value in the next field.
- **Group Identifier on Users**: If you need to specify another value besides the default `memberOf` attribute, enter the group identifier supported by your LDAP here.

> [!TIP]
> **Use Group Memberships** and **Group Identifier on Users** are available in the 15.5.1.1 patch.

5. Click **Save**.
6. Stop and restart all Classic PPM services by completing the following actions:
   a. Click **Home**, **All Services**.
   b. Click the **Select All** icon to select the check box next to each service, and click **Stop**.
   c. Click the **Select All** icon to select the check box next to each service, and click **Start**.
7. Click **Save**.
8. In CSA, click the **Application** tab.
9. In the **Application Server** section, select **Use LDAP**, and click **Save**.

### LDAP Synchronization

The following LDAP synchronization jobs work together to synchronize Classic PPM with LDAP:
- **LDAP - Synchronize New and Changed Users job**: This job synchronizes LDAP records with Classic PPM records by synchronizing the users that you add to the LDAP Classic PPM group. The job also makes the users active on the Classic PPM server. If you use the search filter option and you change an attribute to one used by Classic PPM, the user is activated on the Classic PPM server. The activation occurs the next time that the job runs. The job then stores the last date and time the job ran successfully in the `CMN_DIRECTORY_SERVERS` database table. The job synchronizes only recently created or changed user entries. For the synchronization, the timestamp has to be greater than the value found in the `CMN_DIRECTORY_SERVERS.LAST_SYNC_DATE` field.
- **LDAP - Synchronize Obsolete Users job**: This job inactivates users that you remove from the LDAP Classic PPM group on the LDAP server or whose record no longer contains the chosen search attribute. This job does not verify whether a user found in the LDAP Classic PPM group or in the search that CSA specifies is active or inactive in LDAP. To inactivate users in Classic PPM using the job, remove the users from the LDAP Classic PPM group or remove the search attribute that is specified in CSA. These synchronization jobs function properly if you have correctly configured the LDAP Server and LDAP Attribute Mapping sections in CSA.

You are required to select a schedule for each job.

**Best Practice:** Run these jobs nightly.

> [!NOTE]
> To synchronize the database with the directory server, delete all rows from `CMN_DIRECTORY_SERVERS` database table and run the background job again. You can also run the job for a specific group so that only the records for those users are affected.

#### Force the LDAP - Synchronize New and Changed Users Job to Perform a Full Synchronization

You may need to override the behavior of the **LDAP - Synchronize New and Changed Users** job, and you can force a full synchronization.

****Follow these steps:****

1. Delete the row from `CMN_DIRECTORY_SERVERS` database table.
2. Run (or schedule) the job again.

### Troubleshoot LDAP

Here are some common LDAP issues and the ways to address them:
- To debug the LDAP authentication process, enable debug messages that the security component logs. Stop all background services except the one on which you are enabling debug messages. Restart the background service so that the changes take effect and see the log file (`bg-ca.log`).
- When you review the Classic PPM logs for error messages, LDAP-specific error codes can display.

> [!NOTE]
> See your third-party LDAP documentation for descriptions of LDAP-specific error codes.
- If you cannot log in to Classic PPM using an LDAP user name and password, consider this information:
- Are you using an active LDAP account that also exists as an active account in Classic PPM?
- Have you enabled the LDAP configuration by selecting the **Use LDAP** field on the application server properties page in the CSA?
- Did you enter the correct user ID in the **Search User** field and the correct password in the **Password** field on the security server properties page in the CSA?
- Refer to the log files for more specific messages.
- Processing time for the **LDAP - Synchronize Obsolete Users** job and the **LDAP - Synchronize New and Changed Users** job depends on the number of users that are loaded from the directory service into Classic PPM. Specifically, large numbers can slow processing times.

### Troubleshoot LDAP Sync Jobs

When an LDAP synchronization job or authentication process does not work as expected, do any of the following tasks:
- Check the LDAP synchronization log files in the `/niku/Clarity/logs/ldapsync` directory.
- Check the `*users*.xml` file. This file contains a list of user names that are extracted from the LDAP server. If this file is missing, the communication between Classic PPM and the LDAP server was unsuccessful.
- Check the `*sync*.xml` file. This file contains the results from a gateway user import session. If this file is missing, the communication between Classic PPM and the gateway was unsuccessful.
- Enable debug messages in the security component by completing the following steps:
  a. Edit `bg-logger.xml` and add the `com.niku.security` category.
  b. Set the priority to debug.
  c. Restart the Clarity background (bg) service so that the changes take effect.
  d. Check the `bg-ca.log` file.
  e. If you have multiple bg services in your cluster, shut down all but one. Having only one bg service ensures that the job is running on the server that you are debugging. You can also enable debugging on all the services individually.

#### Check the LDAP Synchronization Logs

Check the LDAP synchronization transaction logs in the following directory:

```
<Clarity Home Directory>/logs/ldapsync
```

Log files that are related to **New and Changed Users** jobs are:
- `ldapusers_nm_*.xml`: List of users that are found in the directory server to be synchronized with Classic PPM.
- `ldapsync_nm_*.xml`: List of the Success/Error/Warning messages for this sync job.

Log files that are related to the **LDAP - Synchronize Obsolete Users** job are:
- `ldapusers_ia_*.xml`: List of the users to be inactivated in Classic PPM.
- `ldapsync_ia_*.xml`: List of the Success/Error/Warning messages for this sync job.

#### Enable Debugging Messages

The security component logs debugging messages. Stop all Clarity Background (bg) services in your implementation except the one on which you are enabling debug messages. Restart the Clarity Background (bg) service so that the changes take effect and see the log file (`bg-niku.log`).

****Follow these steps:****

1. Log in to CSA.
2. Click **Home**, **Servers**.
3. Click the **Logs** icon for the server you want to enable debugging messages.
4. Click the **Edit Configuration** sub tab.
5. In the **Categories** section, click **Add Category**.
6. Enter the following value for the new line item:
- **Name**: Enter `com.niku.security`.
- **Priority**: Select **Debug** from the drop-down.
7. Save the changes. The debugging messages are enabled.

### Configure LDAP and SSL

When an LDAP server is running with the Secure Socket Layer (SSL), you are required to configure LDAP and SSL. The Classic PPM administrator installs the trusted security certificate for the LDAP server on the computer that is running the Clarity Background (bg) services. To install the certificate, use the keytool that ships with the Java 7 JDK. Issue the following commands from the command prompt:

```
keytool -import -v -trustcacerts -alias <alias> -file <certificate file name> -keystore cacerts
```

Example:

```bash
$cd $JAVA_HOME/jre/lib/security
$keytool -import -v -trustcacerts -alias NikuLdapServer -file TrustedRootCert.der -keystore cacerts
```

## Configure Single Sign-On (SSO) for Classic PPM

Single sign-on (SSO) is an authentication process that allows users access to multiple systems using a single username and password. With SSO, once the server uses LDAP directory information to authenticate a user identity, it allows access to the requested information according to the user access privileges.

You can set up SSO to integrate Classic PPM with the internal portal application to which the user authenticates. SSO takes away the need for users to enter their username and password repeatedly when switching between applications. The portal application has links (URLs) to other internal applications. Once the portal application is invoked, users are not prompted with authentication dialogs but are taken directly into the application. The portal application has an SSO plug-in that directs users to log in to the portal, then takes them to the appropriate application. This way, users cannot bookmark a page and then later return to it without first logging in.

SSO provides the following benefits:
- **Username/Password Administration**: IT only has to manage one username/password for a user.
- **Authentication Support**: IT only has to support one place where users can have authentication problems.
- **Usability**: Users only have to remember one username and password, and only have to log in once.
- **Security**: One username and password make it easier to use complex passwords and to change them more often. The chance of a user choosing a familiar password is reduced when there is only one password to remember.

> [!WARNING]
> **Best Practice:** If you are using CA SiteMinder or other SSO software, set the configuration to allow angle bracket characters (`<` and `>`) in the URL. For example, if you are using SiteMinder, disable CssChecking. Otherwise, a URL that contains angle brackets produces an error when Classic PPM passes it. Angle brackets can appear in a URL, possibly created by a process that uses conditions such as `<`, `<=`, `>`, or `>=`.

****Follow these steps:****

1. Configure your SSO server and proxy server to point at Classic PPM and to have it pass an authentication token that contains a valid Classic PPM username. Configure the SSO server so that the entry URL is:
   ```
   http://<server>/niku/nu#action:npt.overview
   ```
2. Log in to CSA, and click **Home**, **Servers**.
3. Click the name of the server you want to set up.
4. Click the **Application** sub tab.
5. To use LDAP, in the **Application Server** section, select the **Use LDAP** checkbox. If LDAP is enabled, nonbrowser clients use the same user name and password.
6. In the **Application Instance** section, select the **Use Single Sign-On** checkbox, and click **Save**.
7. Click the **Security** tab.
8. In the **Encryption** section, complete the following fields:
- **SSL Keystore**: Defines the path to the keystore file. Example: `<pathtokeystore>/server.keystore`
- **SSL Password**: Defines the keystore password. Once entered, confirm at the **Confirm Password** field.
9. In the **LDAP Server** section, complete the following fields:
- **URL**: Defines the LDAP server URL.
- **Root Context**: Defines the LDAP server naming context, for example: `ou=People, dc=niku, dc=com`.
- **Search User**: Defines the user name with the appropriate credentials for binding to the LDAP server.
- **Password**: Defines the LDAP server password. Once entered, confirm it again at the **Confirm Password** field.
- **Batch Size**: Enables the synchronous operation. Set the batch size using the following criteria:
- **0**: Allows all results that are received from the server as they are generated.
- **A non-zero number**: Messages are blocked until n messages are received from the server. The enumeration proceeds while more messages are queued.
- The default batch size is **1**. An enumeration of search results from a synchronous search operation returns messages as they are received from the server.
- **Search Filter**: Defines the search filter string (as defined in RFC 2254).
- **Date/Time Format**: Defines the date and time format that is used on the LDAP server.
- **Group Name**: Defines the group that is enabled for the group authentication.
- **Group Identifier**: Specifies the group ID for the group that is enabled for the group authentication.
- **Allow non-LDAP users**: Indicates if non-LDAP users are allowed to access the application using an alternative authentication method.
10. In the **LDAP Attribute Mapping** section, complete the following fields:
- **Username**: Specifies the attribute for the user name.
- **First Name**: Specifies the attribute for the first name.
- **Last Name**: Specifies the attribute for the last name.
- **Full Name**: Specifies the attribute for the full name.
- **Email Address**: Specifies the attribute for the email address.
- **Modify Time Stamp**: Specifies the attribute for the modification of the time stamp.
11. In the **Single Sign-on** section, complete the following fields:
- **Token Name**: Specifies the HTTP cookie that Classic PPM accepts as a valid authentication token for initiating a user session.
- **Token Type**: Specifies the token type. Values are:
- **Cookie**: The token is contained in a cookie.
- **Header**: The token is contained in the message header.
- **Parameter**: The token is provided in a parameter.
- **Logout URL**: Defines the fully qualified URL that displays when the user logs out.
- **Authentication Error URL**: Defines the fully qualified URL that displays when the user cannot be authenticated.
12. Save the changes.
13. Restart the application, and log in to Classic PPM as an application administrator. The system settings page appears.

### Configure Single Sign-On (SSO) for Clarity

To enable SSO implementation for Clarity, configure your SSO server as described in the following procedure. The examples provided for the configuration settings are applicable to the SiteMinder SSO server. The settings can be different for you depending on the SSO server that you are using.

> [!WARNING]
> Before configuring your SSO server for Clarity, verify that SSO is enabled for Classic PPM. See Configure SSO for Classic PPM for details. If SSO is not configured for Classic PPM, SSO for Clarity will not work.

****Follow these steps:****

1. Protect the following URLs for Clarity:
- `https://<server:port>/pm*`
- `https://<server:port>/ppm/rest/*`

   **SiteMinder Example:** In the existing domain that has the Classic PPM realm, create two new realms:

   Create a realm that includes a rule to protect the REST APIs:
- **Name**: Clarity REST API Rule
- **Description**: Rule to protect the Classic PPM Rest APIs
- **Attributes, Resource**: `ppm/rest/*`
- **Action, Web Agent Action list box**: Select Get, Post, Put, Delete, and Head

   Create a realm that includes a rule to protect Clarity:
- **Name**: Classic PPM New UI Rule
- **Description**: Rule to protect Clarity
- **Attributes, Resource**: `pm*`
- **Action, Web Agent Action list box**: Select Get, Post, Put, Delete, and Head

   After defining the rules, go to the **Rules** tab and add the existing response from Classic PPM SSO to each new rule. The response defines the name of the username cookie and the value format that Classic PPM SSO expects.

2. Configure the following properties for the Web Agent:
   a. Add the following URL to the existing logoff URL list: `https://<server:port>/ppm/rest/v1/auth/logout`
   b. Add following URL to the ignore URL list: `https://<server:port>//pm/js/core/layout/logout.html`
   c. Add following file extensions to the list of ignored extensions:
- `.woff`
- `.svg`
- `.ttf`
- `.eot`
   d. Remove single quote (if the value exists) from the **Bad URL characters** list.
   e. Remove single quote (if the value exists) from the **Bad Query character** list.

   **SiteMinder Example:** Modify the following agent properties:
- **IgnoreExt**: Add `.woff`, `.svg`, `.ttf`, and `.eot` file extensions to the list of ignored extensions.
- **IgnoreUrl**: Add `/pm/js/core/layout/logout.html` to the list of ignored URLs.
- **LogoffUri**: Add `/ppm/rest/v1/auth/logout` to the logoff URI list.
- **BadUrlChars**: Remove the single quote value if it exists.
- **BadQueryChars**: Remove the single quote value if it exists.

### Use LDAP with SSO

You can use LDAP with Single Sign-On (SSO).

**Best Practice:** While SSO does not require LDAP to be enabled, use LDAP with SSO for the following reasons:
- Nonbrowser clients get most of the SSO benefits.
- With SSO only, user information such as names and email must still be managed within Classic PPM. With LDAP, this data is kept in the directory server.

### Use LDAP without SSO

SSO gives little extra benefit over LDAP. Users must enter their username and password to log in to Classic PPM, but every other benefit still applies with LDAP. The system configuration is much simpler for LDAP alone. With LDAP, there is no need for a proxy or SSO server, and only one Classic PPM instance is required.

## Set Options for Cross-Site Scripting (XSS) Vulnerabilities

Cross-Site Scripting (XSS) attacks insert malicious scripts into otherwise trusted web sites. An XSS attacker uses a web application to send malicious code, generally in the form of a browser side script, to an end user. These attacks succeed when a web application includes user input data in the output it generates without first validating or encoding the input data.

The end-user browser cannot determine whether the script is malicious. Because the malicious script appears to originate from a trusted source, the browser executes the code. The code can access cookies, session tokens, and other sensitive information.

To address XSS vulnerabilities, all user-supplied input that is sent back to the browser should be verified as safe through input validation. User input should be properly escaped before it is included in the output page. Proper output encoding ensures that the user input is always treated as text in the browser, instead of active content that can be executed.

As a safeguard against XSS vulnerabilities, beginning with Release 14.1 and 14.2, the application handles user input validation and restrictions (escaping). To request changes to the default restriction settings or for other assistance with XSS security issues, contact `support.broadcom.com`.

### XSS: User Input Validation

Clarity and Classic PPM validate that all user input that is sent back to the browser is safe from XSS. The product compares the user input to a set of string patterns that are commonly used for XSS. If any part of the user input matches one of the common patterns, Clarity and Classic PPM restrict (escape) the XSS string in the user input.

The product restricts the XSS string by placing escape characters before and after the string. These characters are visible to the end user. The escape characters instruct the browser to ignore any script or HTML tag that is attached to the user input.

> [!WARNING]
> By default, the XSS detection is turned on. URL attributes and site links are exempt from this check. For more information about changing these settings, see Set XSS User Input Restrictions.

### XSS: User Input Restrictions

The user input that contains one of the common XSS patterns must be escaped before it is included in the output page. This output encoding ensures that the user input is treated as text and not active content that can be executed. Administrative options allow you to turn XSS restrictions (escaping) on or off.

To change the setting for any option, you execute database SQL statements.

****Follow these steps:****

1. Access the `CMN_OPTION_VALUES` database table.
2. Update the table entry for the particular option. For information about each option, see the option descriptions.
3. Flush the cache.

#### XSS: Restriction Option

This option restricts the XSS string in the user input if the string matches a pattern in the `CMN.XSS.PATTERNS` option. This system option applies to Clarity and Classic PPM, except the URL attributes and site links. You can set restrictions for URL attributes and site links through separate options.
- **RESTRICT.APP.XSS** Values = True (restrictions are on), False (restrictions are off) Default = True

> [!NOTE]
> The HtmlPortlet content is not restricted (escaped). HTML portlets execute any script in HTML content, which is the expected behavior.

To change the `RESTRICT.APP.XSS` option, update the `CMN_OPTION_VALUES` database table using the following SQL statement:

```sql
update cmn_option_values set value='false|true' where option_id = (select id from cmn_options where option_code='RESTRICT.APP.XSS')
```

**Security Notes:** Applying this update command does not prevent an HTML portlet from being coded with Javascript in it, and having that Javascript run on the client machine. As an administrator, your concern is going to be on servers and protecting them from Meltdown and Spectre. You are not as concerned about potentially malicious Javascript on client machines because you do not have as much control over them.

To initiate a more serious attack, the attacker must be able to run code on the victim's processor. In order to render modern web sites, any web JavaScript engine must allow untrusted JavaScript code to run on the user's processor. Any Javascript that is part of an HTML portlet is executed on the client machine in the browser and not on the server. Clarity does not execute server-side Javascript.

The XSS restrictions filter out parameters inside form posts and URLs that might contain malicious Javascript that, if sent back to the client's browser, would execute and potentially cause harm on the client machine. These restrictions are handled by filters in the web app that work on a request sent from the client to the server with the hope that the response to the client will execute or redirect in such a way that the client is uncompromised. An HTML portlet that is coded by a user with Javascript doesn't go through these filters. It's a response to an action that Clarity was asked to perform, for example, to display a portlet. Responses don't go through the filter. So a user that codes an HTML portlet and puts Javascript in it will only have the Javascript executed on their own client machine.

#### XSS: URL Attribute Value Option

This option restricts the URL attribute value (that you created with Studio) if the value matches a pattern in the `CMN.XSS.PATTERNS` option.
- **RESTRICT.URL.ATTR.XSS** Values = True (restrictions are on), False (restrictions are off) Default = False

To change the `RESTRICT.URL.ATTR.XSS` option, update the `CMN_OPTION_VALUES` database table using the following SQL statement:

```sql
update cmn_option_values set value='false|true' where option_id = (select id from cmn_options where option_code='RESTRICT.URL.ATTR.XSS')
```

#### XSS: Site Links Option

This option restricts the Site Links entry value if the value matches a pattern in the `CMN.XSS.PATTERNS` option.
- **RESTRICT.SITE.LINKS.XSS** Values = True (restrictions are on), False (restrictions are off) Default = False

To change the `RESTRICT.SITE.LINKS.XSS` option, update the `CMN_OPTION_VALUES` database table using the following SQL statement:

```sql
update cmn_option_values set value='false|true' where option_id = (select id from cmn_options where option_code='RESTRICT.SITE.LINKS.XSS')
```

#### XSS: Common XSS Patterns Option

This option defines the string patterns that are commonly used for XSS. You can add values to this option to include more string patterns.
- **CMN.XSS.PATTERNS** String patterns:

```
</script>
<script(.*?)>
<script>(.*?)</script>
alert(.*?)
eval\\((.*?)\\)
expression\\((.*?)\\)
javascript:
onerror(.*?)=
onload(.*?)=
src[\r\n]*=[\r\n]*\\\"(.*?)\\\"
src[\r\n]*=[\r\n]*\\\'(.*?)\\\'
```

To add patterns, access the `CMN_OPTION_VALUES` database table and include the new patterns in the `CMN.XSS.PATTERNS` option.

**Example:** Add the new pattern "onfocus" to the `CMN.XSS.PATTERNS` option:

**Oracle:**

```sql
CMN_OPTION_VALUES_INS_SP('CMN.XSS.PATTERNS','true','true','onfocus(.*?)=',1);
```

**MSSQL:**

```sql
EXEC CMN_OPTION_VALUES_INS_SP 'CMN.XSS.PATTERNS','true','true','onfocus(.*?)=',1
```

#### Security Response Headers: X-XSS-Protection and X-Content-Type-Options

Web browsers have two security response headers enabled by default for an additional layer of protection.
- **X-XSS-Protection**: The X-XSS-Protection header forces the XSS filter into Enable mode, even if it is disabled. Supported by Internet Explorer, Chrome, and Safari browsers, this response header stops pages from loading when the browser detects reflected XSS attacks. This header is not required in modern browsers when applications implement a strong Content-Security-Policy (CSP) that disables the use of unsafe inline JavaScript. Even though Clarity security is strong in this regard, the application still provides this protection for users of older web browsers that don't yet support CSP.
- **X-Content-Type-Options**: The X-Content-Type-Options header is a marker used by the server to prevent any changes to the MIME types advertised in the Content-Type headers.

Although unlikely, if you encounter issues, you can disable the individual headers or all headers in the network response with the following SQL commands:

To disable **X-Content-Type-Options: nosniff**:

```sql
delete from cmn_option_values where option_id in (select id from cmn_options where option_code like 'ENABLED_RESPONSE_HEADERS%') and value like 'X-Content-Type%'
```

To disable **X-XSS-Protection: 1; mode=block**:

```sql
delete from cmn_option_values where option_id in (select id from cmn_options where option_code like 'ENABLED_RESPONSE_HEADERS%') and value like 'X-XSS-Protection%'
```

To disable all headers:

```sql
call CMN_OPTION_VALUES_DEL_SP('ENABLED_RESPONSE_HEADERS');
```

### External URLs

The `externalUrl` property is an optional application setting that provides support for external or federated authentication schemes in notification messages. When `externalUrl` is not specified, Classic PPM notification messages that contain URLs use the standard `entryUrl` property. The standard `entryUrl` property points directly to the Classic PPM server.

The `externalUrl` property causes the request to first route to an external server which provides the login authentication for the session. The external server redirects the original request back to Classic PPM using Single Sign-On (SSO). This method ensures that the user does not have to log in to Classic PPM directly. When the user clicks a notification link, the external authentication happens and the request is forwarded to Classic PPM. If the user is already logged in, the request is forwarded automatically without any interruption.

The external URL does not replace the standard entry URL; rather, it works with the standard entry URL. The two URLs build a compound URL that includes external and internal addresses, encoded to ensure that embedded URLs are passed correctly. The authentication route can include multiple servers so, generally, URLs include query parameters that tell each server where to redirect after processing the request.

The `externalUrl` property supports the following macros:
- `${entryurl}` -- Inserts the current `entryUrl` configuration property.
- `replace(regex,replacement,text)` -- Replaces all instances of 'regex' with 'replacement' in 'text'.
- `encode()` -- Replaces the text with UTF-8 encoded text. Macros can be combined and nested.

> [!WARNING]
> Specify the restricted XML characters such as ampersands using the equivalent entity name (`&amp;`). Failure to do this can prevent all Classic PPM services from starting.

#### Example: Building an External URL

The authentication route for a particular environment determines the `externalUrl`. The authentication route includes specifically the addresses of each server in the route and the parameters that each server requires. Before you set this value, determine your route by gathering the information.

For example, consider the following environment:
- **Server 1**
- **Purpose**: External Authentication Server
- **Address**: `http://auth.somecompany.com`
- **Required Parameters**: REDIRECT
- **Description**: Authenticates (invoking login if necessary), then redirects to the address specified in the REDIRECT parameter.
- **Server 2**
- **Purpose**: Internal Authentication Server
- **Address**: `http://sso.mycompany.com`
- **Required Parameters**: TARGET
- **Description**: Invokes internal Single Sign On then routes the request to the address specified in the TARGET parameter.
- **Server 3**
- **Purpose**: Classic PPM Application Server
- **Address**: `http://ca_ppm.mycompany.com`
- **Required Parameters**: All standard Classic PPM parameters
- **Description**: Address specified in `entryUrl`.

To summarize, requests go first to `http://auth.somecompany.com`, which is the external identity management system. Then the requests go to the internal Single Sign On server at `http://sso.mycompany.com`, and finally requests go to the server at `http://ca_ppm.mycompany.com`.

****Follow these steps:****

1. The construction of the external URL starts when you add the first stop, the external authentication server:

   ```
   externalUrl=http://auth.somecompany.com
   ```

   This server requires one parameter, REDIRECT, which tells the server where to route the request after processing. In this example, the request is to go to the Internal Authentication Server:

   ```
   externalUrl=http://auth.somecompany.com?REDIRECT=http://sso.mycompany.com
   ```

2. The internal SSO server requires one parameter, TARGET, which contains the standard Classic PPM entry URL. The `${entryurl}` macro automatically expands to the current `entryUrl` setting when notifications are sent:

   ```
   externalUrl=http://auth.somecompany.com?REDIRECT=http://sso.mycompany.com?TARGET=${entryurl}
   ```

3. The external URL is almost complete, but there is one remaining step. The REDIRECT parameter for Server 1 contains characters that must be UTF-8 encoded so that they can be passed on a query string safely. The `encode` macro addresses that:

   ```
   externalUrl=http://auth.somecompany.com?REDIRECT=encode(http://sso.mycompany.com?TARGET=${entryurl})
   ```

   Server 2 also has a parameter that must be encoded:

   ```
   externalUrl=http://auth.somecompany.com?REDIRECT=encode(http://sso.mycompany.com?TARGET=encode(${entryurl}))
   ```

   The `encode()` macros are nested. The nesting causes the inner one to be double-encoded, which means the UTF-8 encoded text is encoded a second time. This double encoding is necessary because Server 1 decodes the entire REDIRECT parameter on the first stop, and Server 2 expects a UTF-8-encoded parameter. The encoding macro can be nested as many times as is necessary to ensure that the final parameter has the correct encoding.

#### The Request Lifecycle

When a new Classic PPM email notification is generated, the `externalUrl` and `entryUrl` properties are used to generate an appropriate click-through URL for the event. The standard URL (without using `externalUrl`) can look like:

```
http://ca_ppm.mycompany.com/niku/nu#action:timeadmin.currentTimesheet
```

With `externalUrl` enabled as in this example, the generated URL would look like:

```
externalUrl=http://auth.somecompany.com?REDIRECT=http%3A%2F%2Fsso.mycompany.com%3FTARGET%3Dhttp%253A%252F%252Fca_ppm.mycompany.com%252Fniku%252Fnu%2523action%253Atimeadmin.currentTimesheet
```

The previous example is a URL that points to Server 1, and a single parameter with the Server 2 and Server 3 addresses and properties UTF-8 encoded (the entry URL twice). When a user clicks this URL, the request is sent to Server 1 (`http://auth.somecompany.com`). Server 1 decodes the parameter (all of the text after `REDIRECT=`) into:

```
http://sso.mycompany.com?TARGET=http%3A%2F%2Fca_ppm.mycompany.com%2Fniku%2Fnu%23action%3Atimeadmin.currentTimesheet
```

Server 1 uses the URL to redirect to Server 2. The parameter string for Server 2 is still encoded even though the entire query string was decoded by Server 1. That example shows the effect of the double encoding. Server 2, in turn decodes the TARGET parameter to produce:

```
http://ca_ppm.mycompany.com/niku/nu#action:timeadmin.currentTimesheet
```

The preceding URL is the final. The URL is decoded and ready for Classic PPM to process. Along the way, Server 1 and Server 2 performed their authentication duties. When the request finally reaches Classic PPM, it contains the appropriate Single Sign On authentication token to identify the user. Aside from generating the correct URL when the notification is produced, Classic PPM has no involvement in the authentication process.

#### Troubleshooting External URLs

The key to troubleshooting a problematic external URL is understanding the values each server in the chain expects. Once you know, you can ensure that the URLs and parameters are properly encoded at each point. You can manually verify a given notification URL using the following steps.

****Follow these steps:****

1. Obtain a UTF-8 decoding utility. A simple utility can be downloaded.
2. Generate a notification email using the current external URL setting.
3. Examine the URL and verify that the first part of the URL points to Server 1. The first part of the URL includes everything up to the first question mark character.
4. Discard everything up to and including the first question mark, leaving the parameter string that was passed to Server 1.
5. Decode the remaining string once using the UTF-8 decoding utility. The decoded string represents the parameters that are passed to Server 1. Verify that the parameters are correct.
6. Discard the parameter name (REDIRECT in our example), and verify that the first part of the URL points to Server 2. Again, everything up to the question mark is included in the first part of the URL.
7. Once again, discard everything up to the question mark and then decode the remaining string once.
8. Verify the following points:
- The first part of the URL points to the Classic PPM server.
- The remaining query string contains standard Classic PPM parameters.
- The parameters are not encoded.

#### User Session FAQs

**How does Classic PPM track user sessions?**

A session-based cookie carries a token that is used to access the session data that is persisted in the following locations:
- Cache (for a single app environment)
- Database (for a clustered environment)

**Does this place any limitations on our environment?**

The end-user web browser must accept cookies from the Classic PPM application. The cookies are session-based, so they are not written to disk.

**Are load balancers or clusters influenced by this technique?**

Load balancing and clustering work fine with this technique. Many companies load-balance and cluster Classic PPM.

**Can a session be hijacked inadvertently or deliberately?**

To steal a user session maliciously, one would have to either snoop the HTTP traffic to pick out the headers containing the authentication cookie. This token, however, is valid only while the real user is logged in. Once the user logs out, session information in the database/cache that Classic PPM corresponds to the cookie value is deleted.

#### How to Keep Session IDs Out of Logs

As a security measure, you can configure Classic PPM to prevent session ID values from appearing in your log files. To prevent these values from appearing, edit the `logger.xml` file. Replace the log pattern `(%u:%s:%a)` with the pattern `(%U:%a)`.

The following examples show the results of using both log patterns in the `logger.xml` file.

**Example: `(%u:%s:%a)`**

This line of code shows how the pattern to display the session ID value appears in the `logger.xml` file:

```xml
<param name="ConversionPattern" value="%-5p %d{ISO8601} [%t] %c{2} (%u:%s:%a) %m\r\n"/>
```

This pattern produces records in a log file with the session ID value. The following record from the `app-ca.log` shows the session ID value (bolded):

```
DEBUG 2014-08-18 19:52:02,949 [http-bio-80-exec-3] odf.view (ca_ppm:admin:5077018__8DF3B2A0-F398-4A4B-BC35-E9A012065CE0:npt.overview) Adding view FILTER_VIEW_LOADER::USER:NIKU.ROOT to transient cache
```

**Example: `(%U:%a)`**

This line of code shows how the pattern to prevent the session ID value appears in the `logger.xml` file:

```xml
<param name="ConversionPattern" value="%-5p %d{ISO8601} [%t] %c{2} (%U:%a) %m\r\n"/>
```

This pattern produces a record in a log file without the session ID value:

```
DEBUG 2014-08-18 19:52:02,494 [http-bio-80-exec-3] in.service (admin:npt.overview)
```

Classic PPM supports the additional logging patterns in the following table if the layout is set to `NikuLayout` in the `logger.xml` for an appender.

| Pattern Option | Purpose |
|---|---|
| `u` | Creates the user ID with the tenant ID in the log. Example: `(%u)` creates the output `(clarity:admin)` in the log. |
| `U` | Creates the user ID in the log. Example: `(%U)` creates the output `(admin)` in the log. |
| `s` | Creates the session ID in the log. Example: `(%s)` creates the output `(5077018__8DF3B2A0-F398-4A4B-BC35-E9A012065CE0)` in the log. |
| `a` | Creates the action ID in the log. Example: `(%a)` creates the output `(npt.overview)` in the log. |

For more information about log4j version 1.2 supported patterns, see the API documentation for Class PatternLayout at `https://logging.apache.org`.

## Enable FIPS in Clarity

FIPS 140-2 is a standard that describes U.S. federal government requirements for encrypting sensitive data. If your Clarity application (app) server vendor is Apache Tomcat, you can enable Clarity to operate in a FIPS 140-2 compliant mode. This operating mode uses a FIPS 140-2 compliant encryption module that is used for encryption operations during the server operation. Examples are using the SSL protocol and encrypting passwords, as defined on the security server properties page.

### Creating Keystore using HTTPS

**Creating Keystore in Bouncy Castle Format:**

```
keytool -genkey -keyalg RSA -alias selfsigned -sigalg SHA256withRSA -keystore <path_to_keystore>\mykeystore.bcfks -keypass <key_password> -storepass <store_password> -validity 365 -keysize 2048 -storetype BCFKS -provider org.bouncycastle.jcajce.provider.BouncyCastleFipsProvider -providerpath <path_to_fips_provider_jar>\bc-fips.jar
```

**Creating Keystore in Java Keystore Format:**

```
keytool -genkey -keyalg RSA -alias selfsigned -sigalg SHA256withRSA -keystore <path_to_keystore>\mykeystore.jks -keypass <key_password> -storepass <store_password> -validity 365 -keysize 2048
```

> [!IMPORTANT]
> Here the Java keytool is used to generate the key. You can use any other tool such as OpenSSL to generate the key.

### Steps for Using Bouncy Castle as FIPS Provider

1. In Java, navigate to the directory `$JAVA_HOME/conf/security` and modify `java.security`.
2. Add the following providers on the top and re-number the providers in order:

```
security.provider.1=BCFIPS
security.provider.2=BCJSSE fips:BCFIPS
```

**Before adding the providers:**

```
security.provider.1=SUN
security.provider.2=SunRsaSign
security.provider.3=SunEC
security.provider.4=SunJSSE
security.provider.5=SunJCE
security.provider.6=SunJGSS
security.provider.7=SunSASL
security.provider.8=XMLDSig
security.provider.9=SunPCSC
security.provider.10=JdkLDAP
security.provider.11=JdkSASL
security.provider.12=Apple
security.provider.13=SunPKCS11
```

**After adding the providers:**

```
security.provider.1=BCFIPS
security.provider.2=BCJSSE fips:BCFIPS
security.provider.3=SUN
security.provider.4=SunRsaSign
security.provider.5=SunEC
security.provider.6=SunJSSE
security.provider.7=SunJCE
security.provider.8=SunJGSS
security.provider.9=SunSASL
security.provider.10=XMLDSig
security.provider.11=SunPCSC
security.provider.12=JdkLDAP
security.provider.13=JdkSASL
security.provider.14=Apple
security.provider.15=SunPKCS11
```

3. Modify the entry in `java.security` file:
- From: `ssl.KeyManagerFactory.algorithm=SunX509`
- To: `ssl.KeyManagerFactory.algorithm=PKIX`

   (As specified in the section "3 Using the BCJSSE Provider" of Bouncy Castle: Java (D)TLS API and JSSE Provider User Guide)

### Steps to Enable FIPS in CSA

1. Log in to CSA.
2. Click the **Properties** icon.
3. Click the **Security** tab.
4. Enter the **SSL Keystore**.
5. Enter the password in the **SSL Password** and **Confirm Password** fields.
6. Set the value of **Keystore Format** based on the Keystore Format that you created using HTTPS/Bouncy Castle as FIPS Provider.
7. Check **FIPS 140-2 Mode Enabled**.
8. In **Encrypt Passwords**, select **Using System Key** or **Using Custom Key File**.
9. Click **Save**.
10. Stop the services from `<install_dir>/bin`.
11. Deploy the services from `<install_dir>/bin`.
12. Start the services from `<install_dir>/bin`.

After enabling FIPS in CSA, you will see the message "Bouncy Castle/Java Keystore Secured" in the **About** page of Clarity.

> [!IMPORTANT]
> **Upgrade Impact:**
> - The minimum password length must be 14 characters due to the updated FIPS requirement.
> - When operating in FIPS mode, Clarity users will be forced to change their password if it doesn't meet the above restriction.

## CSA: Application Servers, Clusters, Multicast Messaging, and Load Balancers (On-Premise Only)

Set up multicast messaging, load balancers, and session persistence (sticky sessions). CSA also helps you scale, share disks, distribute files to servers, and manage multiple application or background service instances. You can also configure dedicated reporting databases, perform Oracle database clustering, and tune OpenJDK HotSpot JVMs.
- Scale Classic PPM
- Multicast Messaging
- Load Balancers and Session Persistence (Sticky Sessions)
- Share Disks
- Distribute Files to Servers in a Cluster
- Multiple Application or Background Service Instances
- Configure a Dedicated External Data Source
- Oracle Database Clustering
- Tune OpenJDK HotSpot JVMs

### Scale Classic PPM

Scaling describes the complex activity of deciding which services to run and which computers to run them. When scaling up or down, you want to balance performance with reliability. Even the smallest Classic PPM installations have more than one computer involved. For example, an installation typically has the following configuration:
- One server for the database and another for everything else, or
- One computer for Classic PPM, which connects to a data center owned by a group that externally manages the database.

Medium-to-large Classic PPM installations, depending on performance and reliability requirements, usually have redundant services running on several dedicated computers.

### Multicast Messaging

Classic PPM uses multicast messaging extensively in a cluster. The Beacon is a bootstrapping service running on all managed machines in a cluster. The Beacon is used to manage and monitor the Classic PPM services on each box. The Beacon is also used to apply the patches and upgrades that are delivered from the Classic PPM application server.

The Beacon services employ a dynamic discovery mechanism using multicast. Each beacon sends a discovery message every 5 seconds telling any server listening in the cluster that it exists. Classic PPM System Administration listens for these Beacon discovery messages, using them to register the active cluster nodes. Upon receiving a Beacon discovery message, Classic PPM System Administration verifies the Beacon password against its own. If the verification is successful, Classic PPM System Administration adds the server to its list of servers.

Classic PPM System Administration also pings each Beacon directly every ten (10) seconds to determine whether the Beacon is alive. The ping is a TCP (unicast) message, so one message for each registered beacon is sent over the network. Here is the advantage of multicast: a multicast message is sent once over the network and received multiple times by interested parties. Given that it is UDP (as opposed to TCP), it is a lighter-weight message. The unicast message must be sent out over the network once for each interested party. Therefore, multicasting is perfect for dynamic discovery and monitoring applications like the Beacon.

The Beacon is not the only service to use multicasting. In addition to the Beacons, the cache management services within the application and background servers broadcast their own messages to maintain the cache consistency. These messages contain no actual data. They only inform remote servers when resident data is stale and must be reloaded from the database. We refer to this process as flushing the cache. Whenever a cache is flushed on a given server in a cluster, a message is sent over the network. All other app and bg services receive the message that informs them to flush their own caches of the data.

Classic PPM uses a session monitor thread to keep sessions on disparate servers from timing out prematurely. This thread broadcasts every 5 minutes with a longer message containing active session ids. When a session is no longer active on one server, it is flushed from all servers. When a session remains active, it is marked as such on all other servers to keep them from logging out the user.

The servers in a Classic PPM cluster must be able to send and receive multicast messages. In a normal subnet, this activity is allowed by default.

> [!TIP]
> As a best practice, keep all servers in the same subnet. If you are forced to use servers in different locations with different subnets, create a multicast bridge between them.

This practice could seem like extra UDP traffic. However, when you compare the amount of data traveling between the database, reporting server, application servers, and clients, the cluster messaging is inconsequential. The extra traffic is a small percentage of overall network traffic. Often, people hear broadcast and think their networks are overloaded. The fact is, all network traffic is broadcast. All TCP (unicast) messages on a subnet touch every node in the subnet, exactly like UDP (multicast). The difference is, the TCP messages are two to three times larger than UDP messages. Because the TCP messages are guaranteed to arrive, they require several handshakes per packet. This process means that TCP messages are larger. Furthermore, these multicast messages in Classic PPM are tiny compared to the average database request. With multiple application, background, and reporting servers on a high-performance system, hundreds of such database requests per second are made. The tiny UDP messages firing per-server every 5 seconds are nothing in comparison.

Clarity introduced JGroups into the architecture to control multicast messaging within the application tier. You could run the application tier without multicasting previously, but now it is much more involved with the background and process engine. These two services would likely not perform as expected. Clarity 14.x and newer releases typically require multicast to be active at the router layer so that the Clarity cluster services correctly communicate.

### Load Balancers and Session Persistence (Sticky Sessions)

Classic PPM supports hardware or software load balancers. Classic PPM is truly stateless and designed to function with round-robin and other distribution models. However, it is most efficient in terms of memory and performance when a user session remains on one server. By adding more application servers you gain performance.

Session persistence is required in a load-balanced environment. Session persistence is required regardless of the algorithm that is used or the number of resources that are contained on the server.

To illustrate, consider a load balancing algorithm that spreads the individual requests for a single user session across five application servers. In this case, each server loads and caches that user session data. You use five times more memory than you would use with Session Persistence enabled so that the user session remains on one server.

> [!TIP]
> We recommend that you enable the Session Persistence option on the load balancer.

Configure the load balancer to use soft session persistence. Soft session persistence sends requests from the same user session to the same server. If that server is overloaded or another server is idle, it moves the stickiness from the overloaded server to the idle one. Because Classic PPM is stateless, it supports this process. Furthermore, if an overloaded server goes down, those sessions are not lost. Presuming the load balancer correctly detects the downed server and redirects requests to another one, those user sessions are fully available on the new server.

### Share Disks

In a Classic PPM cluster, multiple app and bg services must use the same disk for search indexing. Unless the files are stored in the database, the services must also use the same disk for document storage. In Classic PPM System Administration, ensure that each server with application or background services points the **Search Index Directory** property to the same shared disk. Unless you store files in the database, the **File Store Directory** property must also point to the same shared disk. You can most effectively share disks using a Storage Area Network or Network Attached Storage solution. Unix NFS or Windows file sharing is also acceptable.

### Distribute Files to Servers in a Cluster

Distribute updated files to all servers in the cluster. The updated files include files on the application server that get updated through customizing UI themes or installing a hot fix, patch, or upgrade. You can also view the status of the distribution by clicking **NSA Logs** and choosing `nsa-ca.log`. When complete, the status window closes and the parent page appears. The distribution page shows the latest distributed date and version.

****Follow these steps:****

1. Log in to Classic PPM System Administration (CSA).
2. Open **Distribution**, and click **Distribute All**. This option distributes all updated files under the Classic PPM home directory.
3. Select one or more servers, and click **Distribute**.

### Multiple Application or Background Service Instances

If you use big-iron machines with large amounts of available physical memory, run multiple app and bg service instances on those machines. From the Classic PPM perspective, it is no different from running services on two different computers. You can use the full power of a computer, with the benefits of increased performance and reliability that come from multiple services. CSA makes multiple instances easy by providing a **Clone** action. This action creates a copy of the desired app or bg service with incremented, available ports and service names to avoid collisions.

> [!NOTE]
> After you clone a service, you can start, stop, and otherwise manage the new service instance as you would the original.

****Follow these steps:****

1. Log in to CSA.
2. Open **Home**, and click **All Services**.
3. Select the check box for the service type you want to clone, and click **Clone**.
4. If necessary, navigate to the server on which you created a service and modify the cloned settings.

### Configure a Dedicated External Data Source

You can configure Classic PPM to use a secondary database to execute reports. Ensure that a secondary database is reasonably synchronized with your production Classic PPM database. When the reporting database is too far behind the production database, you can encounter problems. For example, users or instance data to be included in the report do not exist in the reporting database.

When a report is configured as shown in the following procedure, the report runs solely against the reporting database. All tables required by the report, including user and security tables, must be synchronized. If you synchronize a subset of the production database tables, select the correct tables to support your reports.

****Follow these steps:****

1. Log in to CSA, and from **Home**, click **Servers**.
2. Click the **Properties** icon of the server you want to configure.
3. Click the **Database** sub tab.
4. In the **Internal Connection: Niku** section, click **New External Connection**.
5. Complete the appropriate properties for your reporting database:
- **ID**: Defines the ID that is used to identify this connection later.
- **Service Name**: Refers to a valid TNS entry (Oracle) or ODBC entry (MS SQL Server) on the reporting server.
6. Save the changes.
7. Click the **Reporting** sub tab.
8. Complete the following field:
- **Database ID**: The Classic PPM database ID used to retrieve database information when executing reports. This ID corresponds to IDs of database connections that are defined on the database **Server: Properties** page. Values: Niku and System. Default: Niku. Required: No.
9. Save the changes.
10. Repeat the preceding steps for all servers in your Classic PPM cluster.
11. Restart all Classic PPM Application (app) and Classic PPM Background (bg) services in your cluster.
12. On each reporting server in your cluster:
    a. Create a TNS entry (Oracle) or ODBC entry (SQL Server) with the appropriate connection properties that points to your dedicated reporting database server.
    b. Ensure that the name you select matches the service name for your external connection in Classic PPM System Administration.
13. Install reports.

In Release 14.4 and older, you could use these steps to install the reports, the Classic PPM universe, and other reporting content on the BusinessObjects Enterprise report server. In 15.1 and newer releases, you might use these steps to set up a parallel transactional database to run reports instead of, or in addition to, using the data warehouse schema. The steps apply for adding any additional data source to on-premise editions of Clarity. For example, add a replicated transaction schema, external data warehouse, or any third-party application schema that resides in an Oracle or MS-SQL database.

### Oracle Database Clustering

Classic PPM supports using an Oracle cluster to provide higher scalability, redundancy, and failover than is possible with a single Oracle server.

****Follow these steps:****

1. If necessary, export your existing single-server Oracle database from the single node instance and import it into the cluster.
2. Log in to CSA.
3. Open **Home**, and click **Servers**.
4. Click the **Properties** icon for the server for which you want to edit properties.
5. Select the **Database** sub tab.
6. Edit the following properties for the database connection:
- **Specify URL**: Selected.
- **JDBC Url**: Fully qualified Oracle cluster JDBC URL. This URL is a jdbc prefix followed by the full TNS specification. The JDBC URL must contain the `ServiceName` parameter referencing a TNS entry on the specified Oracle host with the desired RAC configuration.

   **Examples:**

   Oracle URL without Encryption:
   ```
   jdbc:oracle:thin:@//<hostname>:<port>/<service_name>
   ```

   Oracle URL with Encryption:
   ```
   jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=*****)(PORT=****))(CONNECT_DATA=(SERVICE_NAME=***)(SERVER=dedicated))(SECURITY=(ENCRYPTION_CLIENT=requested)(ENCRYPTION_TYPES_CLIENT=AES256)))
   ```

   Oracle URL with SSL:
   ```
   jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCPS)(HOST=server.xyz.com)(PORT=XXXX))(CONNECT_DATA=(SERVICE_NAME=XXXX)(SERVER=dedicated))(CLARITY_PARAMETERS=(javax.net.ssl.trustStore=/opt/keystore)(javax.net.ssl.trustStorePassword=XXX)))
   ```

   Oracle URL Load Balanced between Multiple Hosts:
   ```
   jdbc:oracle:thin:@(DESCRIPTION=(RETRY_COUNT=20)(RETRY_DELAY=10)(ADDRESS_LIST=(LOAD_BALANCE=ON)(ADDRESS=(PROTOCOL=tcp)(HOST=server1.xyz.com)(PORT=XXXX))(ADDRESS=(PROTOCOL=tcp)(HOST=server2.xyz.com)(PORT=XXXX)))(CONNECT_DATA=(SERVICE_NAME=SERVICENAME)))
   ```

> [!NOTE]
> For more information, see Oracle documentation for RAC and DataGuard setup, SCAN, and services setup.

7. Save the changes.
8. To validate the database settings, run a system health report for each server. See Run a Health Report.
9. For the Apache Tomcat application servers, restart all services in Classic PPM System Administration.

### Tune OpenJDK HotSpot JVMs

This information applies only to environments with OpenJDK HotSpot JVMs.

Proper tuning of the OpenJDK HotSpot JVM is an important task when configuring and maintaining Classic PPM. While proper tuning is important for the background service, it is more important for any application services running in the cluster. This article focuses on the application.

Many options are available for tuning a HotSpot JVM.

**Best Practice:** At a minimum, use the following values:
- **Maximum Heap** `-Xmx<size>m`: The maximum heap setting determines the most memory that the local operating system gives to the Java VM. The local operating system does not allocate this much memory immediately on startup, but it can do so as the process runs. As a best practice, set this value to at least `2048m` (2 GB), even for small installations. For improved performance and fewer out-of-memory errors, set this value to 4 GB or 8 GB for larger datasets. For example, `-Xms1024m -Xmx4096m`.
- **Minimum Heap** `-Xms<size>m`: The minimum heap setting is important to avoid wasted effort by the VM when expanding the heap as the application is ramped up. Specify the minimum heap as close to reality as possible. If the application typically uses 1.2 GB of RAM, set the minimum heap setting to `1200m`. You can set the minimum and maximum heap sizes to be equal. This results in a simpler task for the VM garbage collector. These settings also make the JVM process allocate the full maximum heap from the operating system at startup, which is more consistent. This process requires you to measure true memory allocation requirements on your server.
- **Parallel Garbage Collector** `-XX:+UseParallelGC`: The Parallel Garbage collector is recommended for any servers with two or more CPUs. The parallel garbage collector is safe to set on all servers. Any servers with fewer than two CPUs ignore this setting.
- **New Ratio** `-XX:NewRatio=<size>`: The HotSpot VM segregates objects into New and Old Spaces based on the ages of objects in memory. The short-lived objects tend to stay in the New (or Eden) Space and are collected before going elsewhere. The longer-lived objects are migrated to the Old (or Tenured) Space. The New Ratio setting does not actually define the explicit size of the New Space, but rather a ratio between the old and the new. A setting of `-XX:NewRatio=3` translates to a ratio of 1 to 3, where the New generation is 1/3 the size of the Old generation. Applications that create and destroy many short-lived temporary objects quickly, as in a server-side application like Classic PPM, require a larger-than-average New Space. Otherwise, the New Space is overflowing while the Old Space is under populated. The default for New Ratio varies by platform. To avoid problems in Classic PPM, regardless of the platform, set the New ratio to 1 to 2, which means `-XX:NewRatio=2`.

## CSA: Configure JDBC Ping As An Alternative to Multicast (On-Premise Only)

As an alternative to network multicast, Clarity allows the optional implementation of JDBC-based messaging at the database level using JGROUPS JDBC ping discovery protocol. JDBC ping uses a common shared database to store information about cluster nodes used for discovery.

> [!NOTE]
> The JDBC ping option is only available and supported on Clarity Release 15.3 or higher.

Ideally, all cluster nodes can access the same database. When a node starts, it queries information about existing members from the database, determines the coordinator, and asks the Clarity nodes to join the cluster. Each node also inserts information about itself into the table, so other node members can find it. Messages are delivered just like they are in multicast, except JDBC is now handling them.

> [!NOTE]
> Jaspersoft cannot use JDBC ping. Clustered Jaspersoft environments must continue to use multicast. Single-server Jaspersoft instances use a direct JDBC database connection to PPM.
- JDBC Ping: Prerequisites
- JDBC Ping: Configuration
- JDBC Ping: Verify JDBC Ping Messaging is Enabled
- Clarity Hybrid Cloud Migrations
- Configure Replicated Caching for JasperReports Server with JMS

> [!TIP]
> The new abbreviation for Clarity System Administration (CSA) sometimes still appears by its legacy abbreviation (NSA).

### JDBC Ping: Prerequisites

1. Verify all settings in a non-production environment such as dev or test before going live in a production system.
2. Verify that your configuration of Clarity is using either multicast or JDBC PING. You cannot mix these options.
3. If using JDBC PING, verify that all Clarity services are configured to use JDBC PING.
4. Verify that all NSA passwords on all servers are set to the same value. One common password is shared across all NSA services by all members of the cluster. This password is used to validate multicast packets sent by the various cluster nodes. If a reset is necessary, run `admin password`.
5. If a server has multiple IP addresses (multiple NICs), configure the Beacon to bind to a single specific IP address. Redeploy Beacon Service after making any changes.
6. Verify that all services are in the same subnet.
- To confirm on Windows use `ipconfig`.
- To confirm on Linux, use `ifconfig`.

### JDBC Ping: Configuration

> [!NOTE]
> Make your entries in CSA and the `properties.xml` file carefully. A single net mask configuration mistake while provisioning the server can result in services not communicating with each other.

****Follow these steps:****

1. Open CSA by navigating to `http://<ca_ppm_server>:<port>`. For example, `http://ppm_server.my.org:8090`.
2. Click **Home**, **All Services**. Stop all Clarity Services before making any changes.
3. Click **Home**, **Servers**.
4. Repeat these steps for each server in the application cluster:
   a. Click the server. The server name appears as a link. For example, `my_ca_ppm:<port> (local)`. The Properties page appears.
   b. In the **Multicast Address** field, to satisfy the required field, leave the default IP.
   c. In the **Multicast Port** field, leave the previous value or enter a standard port value such as `8090` or `9090` to satisfy the required field.
   d. In the **Bind Address** field, enter the IP address for the application server. A bind address is a local network interface IP that ensures all machines are using the same IP interface on the same subnet. If you have multiple servers, each server should have the correct bind/IP address for that server. If a server has multiple NICs and, therefore, multiple IPs, specify the IP that you want Clarity to use for network communication.

> [!TIP]
> Unlike multicast, JDBC PING does not require that all servers belong to the same subnet.

   e. Click **Save**.

5. Open the `properties.xml` file on each server.
   a. In the NSA section, add the `useJDBCPing="true"` parameter as shown in the following example:

```xml
<nsa bindAddress="###.###.###.###" multicastAddress="###.###.###.###" multicastPort="9191" clientPort="9288" serviceName="CA PPM Beacon 123" useJDBCPing="true" autoDiscovery="true" />
```

   Replace `#` with your IP node values.

   b. If you did not already set the Bind Address field values in CSA, you can manually set them in the `properties.xml` file. The `bindAddress` property should use the IP address associated with the given application server.
   c. Repeat these steps for each server.

> [!TIP]
> If the server has multiple IP addresses (NICs) then configure the Beacon to bind to a single specific IP address. This step is not required; however, if the Beacons are not configured correctly, the servers are not visible in CSA. After you make any changes, stop, remove, add, and deploy the Beacon service.

   Ensure that the ETC Hosts file has valid IP addresses. To learn more, review the multicast configuration documentation.

6. In CSA, click **Home**, **All Services**. Start all Clarity services.
7. Verify that the beacon services started successfully on all servers in the cluster. On each application server, run the following command: `service start beacon`.
8. Confirm that the beacon service remains active. On each application server, run the following command: `service status beacon`.

### JDBC Ping: Verify JDBC Ping Messaging is Enabled

After JDBC ping is enabled, the Clarity database creates a table named `CMN_JGROUPS_PING`.
- JDBC ping address information is stored in this table.
- Nodes in a cluster are also registered in this table.

****Follow these steps:****

1. Access the database with permissions to view this table.
2. Verify that information about all Clarity services is populated in the `CMN_JGROUPS_PING` database table. The table contains the following columns:
- **CREATED**: The date and time of the most recent posted message.
- **CLUSTER_NAME**: The topic name of the parent cluster for each member server.
- **PING_DATA**: The message content.
- **UUID**: The unique identifier for each server consisting of an application instance ID and topic name. In this example, the topic name is set to `CLRTY` in all cases.
3. When JGroups is using JDBCPing, the discovery of the nodes in the cluster is done using the database. Once discovered, the protocol between the nodes is TCP and should be peer-to-peer.
   a. Update the `my/etc/hosts` file to point to `127.0.0.1` to use `$HOSTNAME`.
   b. Use a telnet or nc command to test the port connectivity.
   c. Verify that the communication on the beacon port is open.

> [!TIP]
> Switching to JDBC ping requires no additional steps for Clarity integrations with SSO.

> [!WARNING]
> When you refresh your database from production to testing, run the following command to remove existing entries from the `CMN_JGROUPS_PING` table. If you do not perform this step, you will not be able to start any Clarity services on the refreshed database server.
> ```sql
> truncate table CMN_JGROUPS_PING
> ```

### Clarity Hybrid Cloud Migrations

Broadcom provides Clarity SaaS and other Broadcom cloud solutions. We also recognize that some customers might deploy and manage a customized AWS or Microsoft Azure configuration. As a Clarity administrator, you can take the following high-level steps:

1. After you upgrade, switch to JDBC ping. Multiple Clarity app services can communicate with each other using JDBC ping.
2. Single-server Jaspersoft environments can communicate with the Clarity database server using a direct JDBC connection.

> [!TIP]
> At this time, we do not support clustered Jaspersoft configurations in Azure, AWS, or any other public, private, or hybrid cloud environments. However, we recognize the demand for this functionality. Limited support is available for replicated caching using JMS.

### Configure Replicated Caching for JasperReports Server with JMS

On Azure, AWS, Google Cloud, and other public clouds where multicast is disabled and JDBC ping is enabled, support for clustered Jaspersoft configuration was previously not supported. Limited support is now available for using Java Message Service (JMS) for Jaspersoft server ehcache replication.

JMS is a mechanism for interacting with message queues. Open source options for Linux and Windows include Apache ActiveMQ and Oracle Open MQ. With JasperReports 6.1.0 or higher, Ehcache replication over JMS is now available and supported. (In our tests and in this documentation, we used ActiveMQ 5.12.1.)

With the Ehcache JMS replication module, your organization can leverage your message queue investment for caching:
- Each cache node subscribes to a predefined topic, configured as the `<topicBindingName>` in `ehcache.xml`.
- Each replicated cache publishes cache Elements to that topic. Replication is configured per cache in accordance with the Ehcache standard replication mechanism.
- Data is pushed directly to cache nodes from external topic publishers in any language. After the data is sent to the replication topic, it is automatically picked up by the cache subscribers.
- JMSCacheLoader sends cache load requests to one of the following queue types before sending a response:
- Ehcache cluster node
- External queue receiver

****Follow these steps:****

1. Verify that you have already installed a supported release of Clarity with JasperReports server in a cluster.
2. Verify that all JasperReports server nodes point to a single database node.
3. Install and configure the ActiveMQ server instance. To download and install ActiveMQ, see `http://activemq.apache.org/version-5-getting-started.html`.
4. Verify that the default ActiveMQ broker port is accessible.
5. Start the ActiveMQ server.
6. Download zip file. Configuration is done in the `ehcache.xml` file.
7. Each cluster needs to use a fixed topic name for replication. By default, ActiveMQ supports auto creation of destinations.
8. Configure a `JMSCacheManagerPeerProviderFactory` globally for a `CacheManager`. Perform this step once per CacheManager (once per `ehcache.xml` file).
9. For each cache configuration that you want to replicate, add the `JMSCacheReplicatorFactory` to the cache.

> [!TIP]
> All the above-mentioned configurations are already available in the `ehcache.xml` distributed with JasperReports server 6.1.0. Follow the instructions below for configuring cache distribution using JMS. Multicasting is supported on RMI, JMS, and AWS. In our testing, we follow the RMI mechanism.

10. Stop your tomcat server.
11. Go to `<tomcat>/webapps/reportservice/WEB-INF` and open the `ehcache_hibernate.xml` file in an editor.
12. Comment out or remove the following section of the file in between the `***NO CLUSTERING***` and `***END of NO CLUSTERING***` comments:

```xml
<!-- *********************** NO CLUSTERING ************************* -->
<!-- <cache name="defaultRepoCache"
    maxElementsInMemory="10000" eternal="false" overflowToDisk="false"
    timeToIdleSeconds="36000" timeToLiveSeconds="180000"
    diskPersistent="false" diskExpiryThreadIntervalSeconds="120"
    statistics="true">
</cache>
<cache name="aclCache" maxElementsInMemory="10000" eternal="false"
    overflowToDisk="false" timeToIdleSeconds="360000"
    timeToLiveSeconds="720000" diskPersistent="false">
</cache>-->
<!-- ******************** END of NO CLUSTERING ****************** -->
```

13. Uncomment the `***JMS***` and `***END OF JMS***` sections by removing the `<!-- START` and `END -->` lines. As a result, you are enabling Ehcache replication over JMS.

14. Specify the broker URL of the ActiveMQ instance. Search for the `providerURL` attribute in the XML file and provide the value of your ActiveMQ broker URL. Update the `providerURL` attribute in five (5) different places in the `ehcache.xml` file. For example: `providerURL=tcp://EXAMPLE_SERVER-I154330:61616`.

15. Save the file.
16. Repeat the same configuration changes in the following locations:
- `<tomcat>/webapps/reportservice/WEB-INF/ehcache_hibernate.xml`
- `<tomcat>/webapps/reportservice/WEB-INF/classes/ehcache_hibernate.xml`
17. Repeat the same configuration (all steps) on all JasperReports server instances available in the cluster.
18. Delete or otherwise clean the following directories:
- tomcat temp
- `work/Catalina/localhost`
19. Start your tomcat server.

### Configure ActiveMQ for JasperReports on Windows Server

1. Download ActiveMQ server from Apache at `http://activemq.apache.org/activemq-5158-release.html`.
2. Extract the Zip file for Windows.
3. Install Java JDK 1.7 and above. In this doc we are using JDK 11.
4. Set `JAVA_HOME` environment variable on the server.
5. Navigate to the directory where ActiveMQ is extracted. In this example it's `E:\activemq\bin`.
6. Run the command `activemq start` to start the ActiveMQ server:
   ```
   E:\activemq\bin>activemq start
   ```
7. After the server is started we can access the Admin console on port 8161. Open a browser and enter `http://hostname:8161/admin`. Default username/password is `admin`.

### Configure JasperReports Server with ActiveMQ

1. Stop Jasper service.
2. Navigate to `%TOMCAT_HOME%/webapps/reportservice/WEB-INF`.
3. Edit the file named `ehcache_hibernate.xml`.
4. Comment out the lines between **RMI** and **END OF RMI** sections.
5. Uncomment the lines between **JMS** and **END OF JMS** sections.
6. Replace the `ProviderURL` value from `tcp://localhost:61616` to `tcp://hostname:61616` where hostname refers to the FQDN of ActiveMQ server. Between the above sections there are 5 places where this needs to be changed.
7. Copy the `ehcache_hibernate.xml` to classes folder under `%TOMCAT_HOME%/webapps/reportservice/WEB-INF` folder.
8. Start jasper service.
9. If you login to ActiveMQ admin page we should see two cache providers `ehcacheQueue` and `ehcacheMQueue`.

### Monitor the ActiveMQ Console

1. Download, install, and configure the ActiveMQ server instance. See `http://activemq.apache.org/version-5-getting-started.html`.
2. Access the web console from `http://localhost:8161/admin`. Replace `localhost` with the server IP to access the ActiveMQ web console remotely.
3. To verify the total number of Jaspersoft instances connected to this ActiveMQ instance, navigate to the **Queues** tab. For example, `http://localhost:8161/admin/queues.jsp`. The table on this page shows how many Jaspersoft instances are connected to the ActiveMQ server instances.
4. To verify the list of Jaspersoft instances connected to ActiveMQ, navigate to the **Connections** tab. For example, `https://localhost:8161/admin/connections.jsp`.

### Change the Default ActiveMQ 'admin' Password

1. Look at the file `<activemq-installer>/conf/jetty-realm.properties`.
2. Notice the format is: `username:password,rolename`. Default values are: `admin:admin,admin`
3. Change the second value to update the password to: `admin:<new-password>,admin`

## CSA: Service and Admin Command-Line Utilities (On-Premise Only)

To start, stop, or manage services outside Classic PPM System Administration (CSA), use the command-line utilities. You can use the command-line utilities in scripts to automate various system administration tasks.
- Service Command
- Admin Command
- Enable the System-Option Commands for CORS

### Service Command

Use the `service` command to manage services from the command line. This command has the following format:

```
service start|stop|status|add|clone|remove|deploy|destroy {all|service name} [-info] [-verbose] [-help]
```

| Option | Description |
|---|---|
| `start` | Starts all or specified services. Examples: `service start nsa`, `service start nsa bg` |
| `stop` | Stops all or specified services. You can use this option with the start option to stop and then restart one or more services. Examples: `service stop beacon`, `service stop start beacon`, `service stop app bg nsa beacon` |
| `status` | Displays the status of all or specified services. Example: `service status all` |
| `add` | Activates all or specified services on a local server. |
| `clone` | Creates a copy of the app or bg service on the same server as the original. Ports, service names, and other properties of the service can be incremented to avoid a collision. Example: `service clone app` |
| `remove` | Deactivates all or specified services on a local server. Example: `service remove app bg nsa beacon` |
| `deploy` | Disperses the settings to servers in the cluster. |
| `destroy` | Removes and destroys a previously cloned service. The original service cannot be destroyed. |

**{all | service name}** -- Indicates if the task is performed on all services or on one of the following services: `app`, `beacon`, `nsa`, `db`, `bg`, `reports` (not available in Classic PPM 14.4 and higher releases).

| Flag | Description |
|---|---|
| `-info` | Displays informational messages. |
| `-verbose` | Displays detailed messages. |
| `-help` | Displays command Help for all or a specified option. Example: `service -help`, `service stop -help` |

> [!TIP]
> You can combine commands. For example, the following combination can be used to restart the app and bg services:
> ```
> service stop start app bg
> ```
> The following commands stop and remove all services on the current single or clustered server:
> ```
> service stop remove all
> ```

### Admin Command

Use the `admin` command-line utilities to perform the following database, index, and system tasks:
- Prepare the system before and after an upgrade.
- Analyze, export, and import databases.
- Read the XDM metadata and generate new files and resources.
- Package Clarity System Administration archive files.
- Create and recreate the search index.
- Migrate the documents from the file system to the database.

This command has the following format:

```
admin xdm|search|package|[-info] [-verbose] [-help]
```

#### xdm option

Processes the Classic PPM XDM. This command is available only on upgraded systems that use the XDM before upgrading. Here are the available XDM options:
- **install**: Applies configuration changes.
- **validate**: Validates the XDM configuration.
- **gen-glossary**: Generates the glossary file.
- **apply-glossary**: Applies glossary changes.
- **force**: Completes processing even if errors are encountered. If this option is not specified, an error stops the processing.
- **all**: Applies XDM definition changes.

#### search option

Manages the index. The following options are available:
- **migrate**: Migrates the documents from the file system to the database.
- **recreate-index-files**: Recreates the files in the filestore.
- **recreate-index-data**: Recreates the index for all relational data in the `cscoll` collection.
- **index**: Immediately indexes files and all relational data in the queues.

#### package {app | bg}

Packages the Clarity Application (app) or Clarity Background (bg) service in an archive file. The resulting package is named `app.ear` or `bg.ear`.

#### db option

Manages database objects on the application server. Here are the available options:
- **compile**: Compiles all valid database objects (Oracle only).
- **analyze**: Analyzes the database scheme (Oracle only).
- **upgrade**: Upgrades the database schema from version 13.0 or higher to the current release.
- **compare** `-Dreport.file=<report file path>`: Compares the database against the specified XML schema (Oracle only). The default file is `installdir/logs/compare-report.txt`.
- **compare-any** `params`: Compares the database against another XML schema. For detailed information about the required parameters, display the command-line Help (`admin db compare-any -help`).
- **post-install**: Performs the database post-install procedures.

#### backup

When prompted, provide the target directory for the backup file.

#### general option

Manages configuration files and the file ownership. Here are the available options:
- **view-config**: Displays the configuration file version that is in the database.
- **upload-all-config**: Uploads all the needed configuration files to the database. The files include `properties.xml`, `tenants.xml`, `hosts.xml`, `logger.xml`, and `components.xml`.
- **upload-config**: Uploads the `properties.xml` file to the database.
- **upload-config** `-Dfile=<config filename>`: Uploads the configuration file to the database. For example, `logger.xml`.
- **download-config**: Downloads the `properties.xml` file from the database.
- **download-config** `-Dfile=<config filename>`: Downloads the configuration file from the database. For example, `hosts.xml`.
- **apply-ownership**: Applies the correct user and group owner to all files in the specified directory (Unix only).

#### system-options option

The following command options, available in 15.3.0.5, 15.4.1.1, 15.5, and newer releases, let you add or delete system options and values:

```
admin system-options -add <option code> <option value>
```
- **-add**: Adds a new system option entry and value.
- **-multi**: Adds multiple option values for a single new system option entry.
- **-force**: Deletes and re-creates the option entry and value. The `-force` flag does not work with `-multi`.
- **-list**: Lists the option values.
- **-delete**: Deletes a system option entry and value using the following syntax: `-delete <option code> <option value>`

**Example 1:** The following command adds a new `ca.com` option value for the `CONTENT_SECURITY_DOMAINS` setting in the `cmn_option_values` table:

```
admin system-options -add CONTENT_SECURITY_DOMAINS ca.com -multi
```

**Example 2:** The first command deletes all current domains and seed data, and then the remaining lines add all the given domains:

```
admin system-options -delete CONTENT_SECURITY_DOMAINS
admin system-options -add CONTENT_SECURITY_DOMAINS "'self'" -multi
admin system-options -add CONTENT_SECURITY_DOMAINS cppmxxxx.ca.com -multi
admin system-options -add CONTENT_SECURITY_DOMAINS ca.com -multi
admin system-options -add CONTENT_SECURITY_DOMAINS docops.ca.com -multi
admin system-options -add CONTENT_SECURITY_DOMAINS fonts.googleapis.com -multi
```

**Example 3:** The following command adds a new `ca.com` option value for the `CONTENT_SECURITY_DOMAINS` setting in the `cmn_option_values` table:

```
admin system-options -add CONTENT_SECURITY_DOMAINS ca.com -multi
```

**Example 4:** The following command lists option values for the `CONTENT_SECURITY_DOMAINS` setting in the `cmn_option_values` table:

```
admin system-options -list CONTENT_SECURITY_DOMAINS
```

> [!TIP]
> After issuing the commands, refresh or flush all caches especially `systemOptions` and `securityDomains`.

### Enable the System-Option Commands for CORS

> [!NOTE]
> The following information applies only to 15.3.0.5, 15.4.1.1, 15.5, or 15.5.1. If you have Clarity 15.6 or higher, CORS is supported and this section no longer applies. See REST API in the Reference section of the English edition of the documentation.

The `admin system-options` command allows CORS for the REST API (not yet supported, available exclusively for Broadcom Service partners integrations). Other applications can then make direct API calls into Clarity. For example, CA Agile Central can read Clarity project data. These options are not enabled by default.
- If you plan to use the new blueprint channel feature, Clarity has a built-in ability to whitelist a domain after you define it in the channel. Whitelisting allows Clarity to display external applications in the Clarity framework, provided the other application does not have CORS restrictions built-in since Clarity cannot overwrite an external security policy.
- If you have existing content pointing to other domains, you could implement one or more channels as a replacement. If you want to continue using HTML portlets and other links to third-party applications, and do not use channels in the Clarity, enable CORS with the following database update command for system options:

```sql
DECLARE option_exists INTEGER;
FEATURE_EXISTS INTEGER;
BEGIN
  cmn_feature_delete_sp('CORS_ENABLEMENT_F18624');
  cmn_feature_ins_sp('CORS_ENABLEMENT_F18624', 'CORS Enablement', 'This is the toggle for the CORS Enablement feature for rest api', 1);
END;
```

## CSA: Memory and Performance Tracking (On-Premise Only)

Monitor system performance, manage physical memory allocations on each server in a cluster, and analyze the database servers for optimal database performance.
- Monitor System Performance
- Manage Memory
- Optimize Database Performance

### Monitor System Performance

You can track system performance using CSA. You can collect and store data on Classic PPM servers until it is analyzed and moved to Classic PPM.

#### How Performance Tracking Sessions Work
- When a session is started, calls to a Classic PPM server or servers from user workstations are tracked and recorded. Analysis is done on the data after the session is complete. The analysis results can be accessed from the performance tracking page that lists the individual sessions.
- For each call, the analysis provides the response times in milliseconds and data volumes in bytes.
- You can start a new session immediately, start it later on demand, or schedule it to start at a designated time.
- You can define the duration of the session.
- Only one session at a time can be started and in Collecting Data status.
- All services in a cluster are included in the performance tracking session. During the session, you can abort the tracking on individual services.
- Once a session starts, you cannot restart it, even if the session is stopped or has completed the analysis. You can use the **Save As** button on the session property page to save its settings to a new session name, then start the new session.
- You can record and track data for individual users. Tracking a high number of users can affect performance in the system itself.
- You can track data from levels 1 through 10. Each successive level provides information at a deeper level in the system. If you select to track performance at the most detailed level (10), performance for the system itself can be affected.

#### Create Performance Tracking Sessions

****Follow these steps:****

1. Log in to CSA.
2. Under **Performance**, click **Performance Tracking**.
3. Click **New**.
4. Complete the following fields:
- **Session Name**: Defines the name of the session.
- **Description**: Defines the description of the session. This information appears in the list of sessions on the performance tracking page.
- **Start Options**: Specifies when the session starts. If you select **Scheduled**, use the Date Picker to select the start date. Select the start time in hours and minutes. Values: Immediately, On Demand, or Scheduled.
- **Duration**: Specifies the length of time the session is to last. You can use the fields in combination to indicate the exact duration. Fields: Days, Hours, and Minutes.
- **Tracking Level**: Select a number from 1 to 10 to indicate the level of detail you want to track. If you select the lowest level (1), only the name of the call is listed in the analysis data for a session. The data that is presented for the call listing (response times and data volume) are not affected by the level selected. If you want to view the call listing's data at a more detailed level, select a higher tracking level to collect and display more detail. For each additional tracking level selected, another level is added to the treeview available for each call. Tracking level 10 is equal to all available levels. The information that appears in the treeview for any specific call can vary according to the complexity of the call. A higher tracking level collects more performance detail but consumes more resources.
- **Track Individual Users**: Indicates if information is recorded about individual users and the actions they take in Classic PPM.
- **Analyze Data Immediately After Completion**: Indicates that the start the analysis of the data immediately after the session ends.
- **Response Time Percentile**: Defines the percentile for which the slowest response times are displayed. For example, if you indicate 90 percent, only the response times that fall below the 90th percentile are displayed. The 10 percent of responses that are faster than the 90th percentile are not processed.
5. Save the changes.

#### Stop Performance Tracking Sessions

An administrator with the appropriate rights can stop a session manually at any time. You do not have to be the one who created or started a session to stop it.

****Follow these steps:****

1. Log in to CSA.
2. Open **Performance**, and click **Performance Tracking**.
3. In the row that contains the session, click **Stop**.

#### Stop a Performance Tracking Session for a Service

An administrator with the appropriate rights can stop a performance tracking session manually at any time for a service without stopping the session.

****Follow these steps:****

1. Log in to CSA.
2. Open **Performance**, and click **Performance Tracking**.
3. Click the name of the session.
4. In the **Services** section, locate the service whose session you want to terminate, and click the **Abort** link located in the row.

#### View Session Results

You can view the results for a performance tracking session after the session is analyzed. Data response times and data volumes for each call to the server are listed. The amount of information that appears in the listing depends on the tracking level that you select. You can expand a call in the list to view additional information.

****Follow these steps:****

1. Log in to CSA.
2. Open **Performance**, and click **Performance Tracking**.
3. In the row that contains the session, click **View Results**. The results page appears. The **Overview** tab shows the properties set for the session initially and the statistics for a selected service.
4. If you have multiple services running, select the service whose results you want to view in the **Service** field.
5. Click the **Analysis** tab.

#### Compare Sessions

You can compare the results of any two sessions in the list. Comparisons can be made for different sessions on the same service or on different services. The analysis of the first session is shown on the **Analysis** tab in the standard format. The comparison of the second session is shown as a percentage of increase or decrease immediately following each data statistic that is shown for the first session.

****Follow these steps:****

1. Log in to CSA.
2. Open **Performance**, and click **Performance Tracking**.
3. In the list of sessions, select the two sessions you want to compare, and click **Compare**. The comparison page appears.

The **Sessions** section of the page indicates which session is the base and which is the comparison. To select a service other than the default for a session, click the drop-down list in the **Service** column.

4. Click **Reverse Comparison** to change the order of the base and comparison sessions.
5. Use the list filter in the **Performance Analysis Filter** section to limit the data that displays in the list.

### Manage Memory

It is important to allocate sufficient physical memory to each server in a Classic PPM cluster. The amount of physical memory that is required depends on how the cluster is configured, what services are running, and how many users the cluster supports.

> [!WARNING]
> There must be more physical memory installed in the server than is actually used by Classic PPM. Do not rely on virtual memory because performance degrades due to the operating system needing to swap memory with disk, causing a significant slowdown of the system.

#### Monitor Memory Consumption and Performance

You can monitor the memory consumption on Unix for each process, or the server overall, with commands such as `top` or `prstat`.

In Microsoft Windows environments, use the Windows Task Manager. Navigate to the **Processes** tab to see the memory consumption for each process or use the **Performance** tab to see the memory configuration and consumption for the entire server.

> [!NOTE]
> For more information about using the Task Manager, see the Microsoft Windows Task Manager Help.

#### Maintain Sufficient Memory

As with any other application, allocate sufficient physical memory to each server in a Classic PPM cluster. The amount of physical memory that is required depends on how the cluster is configured. For example, consider what services are running on which server and how large of an implementation must be supported. Follow this rule: There must be more physical memory installed in the server than is actually used by Classic PPM. Do not rely on virtual memory because performance degrades due to the operating system needing to swap memory with disk, causing a significant slowdown of the application.
- Memory consumption on Unix for each process, or the server overall, can be checked with commands such as `top` or `prstat`.
- In Microsoft Windows environments, use the Windows Task Manager. Navigate to the **Process** tab to see the memory consumption for each process or use the **Performance** tab to see the memory configuration and consumption for the entire server.

To modify the memory allocation for other services such as Oracle and Microsoft SQL Server, refer to the administration documentation for each product.

> [!NOTE]
> Before you change the memory settings, shut down the service and restart it after you modify the memory settings.

****Follow these steps:****

1. Log in to CSA.
2. Select the respective server using **Cluster - Servers**.
3. Do one of the following:
- To adjust the memory on the application server, select the **Application** tab.
- To adjust the memory on the background server, select the **Background** tab.
4. Enter the new memory allocation in the **Java VM Parameters** field, and save.
5. Select the **Services** tab.
6. Restart the app and bg services.

#### Restrict the Microsoft SQL Server Memory Consumption

Over time, Microsoft SQL Server consumes the entire available physical system memory, and more. As a result, operating system-level paging significantly slows down the database operations. As a best practice, you should restrict the amount of memory that is required for Microsoft SQL Server to allocate.

Depending on the version, you might be able to reserve about 200 MB of memory for the OS. Assume that Microsoft SQL Server is the only application running. Allocate 90 percent of the remaining system memory to Microsoft SQL Server. For example, your system has 2 GB of memory. After you allocate the OS memory, you have about 1.8 GB available. Allocate about 1.6 GB (90 percent of 1.8) to Microsoft SQL Server.

****Follow these steps:****

1. Open the Microsoft SQL Server Enterprise Manager application, right-click the server, and select **Properties**.
2. Select the **Memory** tab. Adjust the slider bar in the **Dynamically Configure SQL Server Memory** section to the computed maximum setting.
3. Click **OK** to confirm the changes.

> [!NOTE]
> For more information about the Microsoft SQL Server system configuration, search the Microsoft TechNet website.

#### Adjust Memory Allocation

Before adjusting the memory that is allocated to Classic PPM or a background service, first stop the service. After adjusting the memory, restart the service. To modify the memory allocation for other services such as Oracle and Microsoft SQL Server, see the respective administration documentation.

****Follow these steps:****

1. Log in to CSA.
2. Open **Home**, and click **Servers**.
3. Click the name of the server for which you want to adjust memory.
4. Click the **Services** tab.
5. Select the check box next to any service you want to change, then click **Stop**.
6. To change the memory settings for Classic PPM, follow these steps:
   a. Click the **Properties** tab.
   b. Click the **Application** sub tab.
   c. In the **Java VM Parameters** field, change the memory allocation, and save.
7. To change memory settings for the background service, follow these steps:
   a. Click the **Properties** tab.
   b. Click the **Background** sub tab.
   c. In the **Java VM Parameters** field, change the memory allocation, and save.
8. Click the **Services** tab.
9. Select the check box next to any service you changed, and click **Start**.

#### Ensure Adequate Disk I/O Throughput

Classic PPM is a mixed environment with the following wide range of activities:
- **Online Transactional Processing (OLTP)**: Entering time sheets, entering financial transactions, collaborating on documents, and capacity planning.
- **Batch processing**: Post Transactions to Financials, Data Mart Extraction, and Import Financial Actuals.
- **Data analysis**: Reports, Queries, Graphs, and Grids.

Most of these activities present a fair amount of read/write load on the database server. As a best practice, allow for maximum throughput of these operations. Configure your database server with a RAID 0+1 disk configuration. This configuration provides striping of disks and the appropriate failover mechanism for disk failures.

### Optimize Database Performance

Use these techniques to analyze the database servers and ensure optimal database performance.

#### Analyze the Oracle Database Schema

You can use one of the following methods to analyze the database schema:
- Use the **Oracle Table Analyze** job. To schedule this job, you must have the following permissions:
- You must have access rights to run this job, or be part of the **Report and Job Administrator** group.
- You must be part of the **Job Users** group to get access to the reports and jobs page.

> [!TIP]
> As a best practice, run this job at least once a week during a period of lower user activity, such as on a weekend night.
- Use the `admin db analyze` command-line utility. Typically, there is no need to use this method over the job. This method performs the same analyze command that the scheduled job performs. However, during a Classic PPM hot fix or patch release application, it might be necessary to analyze the database without having Classic PPM up and running.
- **Direct and Asynchronous I/O**: I/O operations in UNIX and Linux systems typically go through the file system cache. Although this does not represent a problem in itself, this extra processing requires resources. Bypassing the file system cache reduces CPU requirements, and frees up the file system cache for other non-database file operations. Operations against raw devices automatically bypass the file system cache. When a synchronous I/O request is submitted to the operating system, the writing process blocks until the write is complete before continuing processing. With asynchronous I/O, processing continues while the I/O request is submitted and processed. This allows asynchronous I/O to bypass some of the performance bottlenecks that are associated with I/O operations. Oracle can take advantage of direct I/O and asynchronous I/O on supported platforms using the `FILESYSTEMIO_OPTIONS` parameter. Possible values are:
- **ASYNCH**: Enabled asynchronous I/O where possible.
- **DIRECTIO**: Enabled direct I/O where possible.
- **SETALL**: Enabled both direct I/O and asynchronous I/O where possible.
- **NONE**: Disabled both direct I/O and asynchronous I/O.

  **Best Practice:** SETALL
- **Analyze AWR report**: Generate an AWR or Statspack report from Oracle and analyze the report. Look for how PGA and SGA are sized and adjust their sizes as appropriate. Look at the number of redo log switches and the best practice is to have 2 to 3 redo log switches per hour.

#### Set CPU Speed to Improve Oracle 11g Performance

The optimizer in Oracle 11g uses both CPU and reads to determine the cost of a query. In addition, it uses system load characteristics to attempt to reduce the overall load. If the CPU speed setting is not set, the optimizer performs poorly. To set the CPU speed, run the gather system stats as follows:

```sql
execute dbms_stats.gather_system_stats('Start');
-- <some time delay while the database is under a typical workload>
execute dbms_stats.gather_system_stats('Stop');
```

#### Set Additional Oracle 11g Parameters to Improve Performance

The following parameter has been shown to have a positive performance gain when running Classic PPM on Oracle 11g. These parameters are meant to be optional tuning parameters and should be used to achieve adequate database performance.

**CURSOR_SHARING=FORCE** (Oracle init parameter)

By setting this parameter to FORCE, Oracle is essentially rewriting the executed queries to and replacing any literals with bind values. If the queries executed are the same (though values are different), only one shared query is created and is shareable and used for all sessions. This turns a hard parse into a soft parse. A soft parse will lock (or latch) the shared pool less than a hard parse and, thus, provide a performance gain. Watch the Oracle AWR for excessive query parsing to determine if this is a setting you should attempt to use.

#### Analyze the Microsoft SQL Server Database Schema

Similar to Oracle, Microsoft SQL Server needs table and index statistics to efficiently execute SQL statements. As a SQL Server DBA, you must create a SQL Server job for updating statistics and reindexing and run it on a regular basis.

#### Enable the Datamart Parallel Option

The datamart extraction is I/O intensive as it needs to detect incremental changes in the transactional tables and then write them to the Datamart reporting tables. In a typical customer environment, there is sufficient CPU power available to launch multiple parallel processes that access the disks in parallel, thereby minimizing the overall Datamart runtimes.

#### Ensure Optimal Database Server File Layout

Both Oracle and Microsoft SQL Server perform significantly better when their table files are separated from the index files. Separate the log files from the other two. Use these steps to ensure optimal database server file layout:

1. Place the Oracle table tablespace data files on separate disks from the index tablespace data files.
2. Create separate file groups for tables and indexes and place them on different disks.
3. Migrate the indexes to a new index file group.

**Oracle Tablespace Datafiles:** We recommend the use of Automatic Segment Space Management (ASSM) with autoextend on to improve and automate the space management within segments. ASSM offers manageability and performance advantages over the Freelist-based space management. For more information about ASSM, see your Oracle documentation.

**SQL Server Tablespace Datafiles:** Create separate file groups for tables and indexes and place them on different disks. Place the transaction logs on another set of disks.

#### Migrate Indexes to New Index File Group

****Follow these steps:****

1. Open Microsoft SQL Server Enterprise Manager.
2. Back up the Classic PPM database.
3. Right-click on the Classic PPM database, and click **Properties**.
4. Click the **Data Files** tab.
5. Click in to the new row below the Classic PPM_Data file name and enter the following information:
- `Classic PPM_Idx` as the file name.
- The correct second disk location for the file named `Classic PPM_Idx_Data.NDF`.
- A value for **Space Allocated** (the value should be at least 50 percent of the primary data file allocation).
- `IDX` next to **Filegroup Name**. The name that you use must not be a Microsoft SQL Server keyword such as INDEX.

> [!NOTE]
> Do not change any of the other default settings.

6. To create the new data file and the new filegroup, when all values are entered, click **OK**.
7. To verify that the data file and filegroup are created, right-click the Classic PPM database.
8. Click the **Data Files** tab and verify that the new data file is created. Verify that all the values you entered are present and correct.
9. Click the **Filegroups** tab and verify that the new filegroup entered exists. The default filegroup should be PRIMARY.
10. Connect to the Classic PPM database using SQL Query Analyzer as the niku db user.
11. Execute the stored procedure `CMN_MIGRATE_MSSQL_INDEXES_SP` with the new filegroup as a parameter:

```sql
EXECUTE CMN_MIGRATE_MSSQL_INDEXES_SP 'IDX'
```

When this stored procedure is run, all the indexes from the PRIMARY filegroup are moved to the IDX filegroup on the second disk. Executing this stored procedure might take a significant amount of time depending on the size of the database.

## CA On Demand Portal Administration (On-Demand Only)

> [!NOTE]
> This online document supersedes all previous PDF editions of the CA On Demand Portal Administration Guide, version 2.0 or higher. As of June 15, 2018, because the content applies to other products and not just Classic PPM SaaS, this content has been moved here: CA On Demand Portal Documentation.

## Health Report, Job Monitor, Governor Settings, and Data Warehouse Audit Dashboard

A system health report, log analysis portlets, currently running jobs monitor, and data warehouse audit dashboard are available to support the security and diagnostics needs of administrators.
- The health report shows system status for the application, database, and data warehouse.
- The health report also detects any non-compliant governor settings (maximum data limits).
- A related discovery analysis report detects system customizations.
- The Log Analysis page includes system statistics, daily page or XOG views, and log data.
- A Job Monitor page shows the currently running jobs.
- In 15.6 and higher, a new Data Warehouse Audit dashboard shows the latest progress of the Load Data Warehouse job.

### Required Access Rights
- To run the Health Report, verify that you have the **Administration - Application Setup** global access right.
- To view the Log Analysis portlets, verify that you have the **Administration** access right and that you are assigned to the **Log Analysis Access** group.
- To run the tomcat access logs, verify that you have the **Jobs - Access** right. Also verify that you have the following instance level job definition access right: **Job - Run** on **Tomcat access log import/analyze**.

### View or Download a Clarity System Health Report

System health including the Classic PPM application servers, database, and data warehouse is important. As an administrator, application support engineer, or help desk technician, you want to maintain operations and minimize downtime. Before contacting other support professionals or engaging with the online community, you want a quick assessment of Classic PPM system health.

****Follow these steps:****

1. Log in to Classic PPM with administrative access rights.
2. Click the **Administration** menu. Under **Security and Diagnostics**, select **Health Report**.
3. Select one of the following tabs:
- **Summary**: This tab lists the health status and completion percentage for the application, database, and data warehouse. The **% Completed** value calculates the total number of settings that require a value during a new install or upgrade. The health report summary shows you what portion those required settings have a value. For example, 88% Complete indicates that you are still missing valid values for the remaining 12 percent of all settings. When the report shows **Setup Complete** and a green status icon, the health for that category is good. When setup is not complete, a red icon appears. Click **Details** to view one of the three other tabs.
- **Application**: This tab shows application server details. Settings include file locations, URLs, Java version, JVM, LDAP, SSO, SSL, and ports. You also see instance-specific configurations for CSA, background (bg), and beacon services.
- To verify settings for Clarity, expand **Application Instance (app)**, **New User Experience**. The `ppm-ux` attribute appears with a red icon when a newer version is available but is not deployed. The Clarity features are delivered and updated through a separate Java WAR file. WAR files should have a `META-INF` folder.
- To verify settings for governor limits, expand **Governor Limits**.
- To switch the status of the on-the-fly RateMatrix property, click **Enable** or **Disable**. When enabled, the application applies the `PRJ_RT_RATES_EXTRACTION` rate matrix options. This setting is disabled by default.
- **Database**: This tab provides information about database connectivity, table spaces, database options, and server parameters.
- **Data Warehouse**: This tab provides information about data warehouse connectivity, table spaces, data warehouse options, and server parameters. Settings include JDBC URL, database timezone mismatch, database size, and ETL job timeout for the Load Data Warehouse job. This tab also includes setup information for time slices and other application settings for the data warehouse.

> [!TIP]
> Click the **Fix It** link to navigate to the application page where you can fix the non-compliant setting. For example, a red icon and **Fix It** link appear to help you set up entities or time slices. Remember that the 'From Date' and 'Number of Periods' have to match the records in the Data Warehouse for each type of period.

4. To view the recommended values for each setting on the Database and Data Warehouse tabs:
   a. The **Recommended** field provides the required values to achieve compliance and improve system health. If no exact value is recommended, the field remains empty.
   b. Hover your mouse over the **Status** icon to view a recommendation to fix the listed item.
   c. As an Oracle database administrator, you might have permissions to `V_$PARAMETER`. If you do, expand **Database Parameters** to view the health of your database and data warehouse parameters. If you do not have permissions, hover over the status icon to show the command to grant access.
5. To export the complete health report to Excel, click the **Download Health Report** button on the **Summary** tab. Open the `HealthReport.xlsx.zip` file to view the `HealthReport.xlsx` file in Excel.

> [!NOTE]
> The previously available health check in CSA is no longer available in this release. Use the new health report tabbed pages, download a health report to Excel, or run the command line health report instead.

### Command Line Health Report

To run the health report from a command line, enter the following command:

```
admin healthreport
```

### Health Report Exclusions

In SaaS and FedRAMP environments, the health report database and data warehouse tabs do not list the following items:
- JDBC URL
- Database parameters
- SQLNET parameters

### Governor Settings (Maximum Data Limits)

Governor settings optimize performance by enforcing maximum limits on specific data. For example, the maximum size allowed for an uploaded document is 20 megabytes and the maximum number of rows you can export to Excel is 25,000. These limits help prevent a minority of users from degrading the performance of the majority of other users.

In the current release of Clarity, administrators can override a default limit, up to the given critical limit.

The following table lists the recommended and enforced governor settings:

| Name | Governor Field | Description | Default Limit | Critical Limit | Units |
|---|---|---|---|---|---|
| Document Size | `DMS_DOCUMENT_MAX_SIZE` | Maximum file size for a document during initial upload. (Any pre-existing document that exceeds the setting is not validated by the governor.) | 20 | 50 | MB |
| Export to Excel | `E2E_MAX_ROWS` | Maximum number of rows that you can export to Excel from Classic PPM. | 25,000 | 75,000 | rows |
| Objects/NSQL Limit | `MAX_FETCH_LIMIT` | Maximum number of rows that can be fetched by NSQL in a list view or grid portlet. (Only applies if you configure aggregation on the list view or grid portlet.) | 50,000 | 100,000 | rows |
| SQL GEL Rows | `MAX_SQL_GEL_ROWS` | Maximum number of SQL query rows that you can retrieve by running a GEL script.* | 100,000 | 120,000 | rows |
| CSV GEL Rows | `MAX_CSV_GEL_ROWS` | Maximum GEL CSV rows allowed | 25,000 | 50,000 | rows |
| Timesheet Tasks | `MAX_TIMESHEET_TASKS` | Maximum number of tasks in a timesheet. | -- | 300 | tasks |
| Max XML Nodes | `MAX_XML_NODES` | Maximum number of nodes that you can read or write through XOG. | 150,000 | 400,000 | nodes |
| Max Investment Attributes | `PFM_LIMITS_MAX_INV_ATTRS` | Maximum number of attributes in a portfolio. | -- | 700 | attributes |
| PFM Limit on Roles | `PFM_LIMITS_MAX_ROLES` | Maximum number of roles in a portfolio. | -- | 100 | roles |
| Export to Excel (App) | `E2E_MAX_ROWS_APP` | Maximum rows for Export to Excel, application level setting | 25,000 | 75,000 | rows |
| Export to Excel Timer | `E2E_TIMER` | Maximum time for an export to Excel before ending the export. | -- | 720 | seconds |
| Max To-Do Items for a Task | `MAX_TODOS_PER_TASK` | Maximum number of to-do items for a task. | 25 | 40 | to-do items |
| Max documents | `DMS_MAX_DOCUMENTS` | Maximum documents allowed in a single upload session. | 5 | -- | files |
| Max attachments | `ODF_MAX_ATTACHMENTS` | Maximum conversation attachments allowed for ODF object | -- | -- | files |
| CSV Import Limit | `CSV_IMPORT_LIMIT` | Maximum records allowed for CSV import processing | 25,000 | -- | rows |
| CSV Export Limit | `E2CSV_MAX_ROWS` | Maximum records allowed for CSV export | -- | 75,000 | rows |
| Export to CSV Timer | `E2CSV_TIMER` | Timer for Export to CSV | 1,800 | 2,000 | seconds |
| Maximum request parameters | `MAX_REQUEST_PARAMETER_COUNT` | Maximum request parameters allowed | 1,800 | 1,800 | parameters |

*In 15.5.1, the same limit for Excel is enforced for CSV with `MAX_CSV_GEL_ROWS=25000`. Do not confuse this limit with `MAX_SQL_GEL_ROWS=100000`. Until you upgrade to 15.5.1 or newer, avoid creating GEL scripts that attempt to read, run, or append records in a very large CSV file. Out-of-memory errors and application outages can occur.

> [!WARNING]
> The approved defaults are enforced to optimize or maintain performance. We recommend that on-premise administrators do not adjust these settings.

The following limits are not set by the governor settings but are hard-coded in Clarity:

| Setting | Maximum | Units |
|---|---|---|
| Maximum number of columns in a board layout. | 100 | columns |
| Maximum rows to export to CSV. | 250,000 | rows |
| Maximum number of fields in a configurable Details panel | 200 | fields |

### Clarity 15.6.1 Governor Limits Stored in the Database

Governor limits are now stored in the database for you after upgrading or installing 15.6.1 or newer.
- New installations are set to the recommended values shown above.
- Upgrades preserve your previous settings.

#### New API for Managing Governor Limits

1. Server setting required for the API calls to work: `<accessToServerStatus allow="ALL" />`
2. Navigate to the following API landing page: `http(s)://<server>:<port>/niku/serverstatus/governorlimits`
3. To view the response in HTML format use the following URL: `http(s)://<server>:<port>/niku/serverstatus/governorlimits?run=html`
4. To get the results of the violators use the following URL: `http(s)://<server>:<port>/niku/serverstatus/governorlimits?type=violators`

#### New Admin Commands

A series of `admin governors` commands are available for on-premise administrators to extend the governor limits up to the critical limit only (not recommended, but permitted by the system).
- These commands are the exclusive method allowed and supported for temporarily bypassing the governor limits up to the established critical limits.
- Critical limits were determined based on the max numbers set across all SaaS customers.
- The only way to bypass the critical limits is through a direct database update (not supported or recommended).

The commands support set, unset (also known as reset or restore defaults), and list options:

```
admin governors -set <governorKey> <governorValue>
admin governors -list <governorKey|all|violated>
admin governors -unset <governorKey|all>    # set to default and enables governor

```

**Example:**

```
C:\Windows\System32>admin governors -list MAX_SQL_GEL_ROWS
Code: MAX_SQL_GEL_ROWS
Current Limit: 110000
Critical Limit: 120000
Default Limit: 100000
Active: true
```

### Download a Customization Discovery Analysis Report

This report was designed for Broadcom Global Delivery teams, Broadcom Support, and advanced administrators when preparing to migrate an on-premise environment to a SaaS environment. Some customizations allowed in an on-premise environment might not be permitted in a SaaS environment. Non-compliant objects and other factors determine an estimated level of complexity on the report cover page.

****Follow these steps:****

1. Log in to Classic PPM with administrative access rights.
2. Click the **Administration** menu. Under **Security and Diagnostics**, select **Health Report**.
3. Below the **Summary** tab, click the **Download Discovery Analysis Report** button. The output contains about 20 tabs of data including non-compliant objects, data sources, and grid portlets. Discuss these customizations before upgrading or changing environments.
4. (Optional) For large deployments, the Discovery Analysis report is also available as a job for your convenience. To prepare this report, select the **Active** check box for the **Clarity Customization Discovery Analysis** job. The job produces an Excel spreadsheet which can also be e-mailed to the recipient that is specified in the job parameters at the time of execution.

> [!NOTE]
> See **Clarity Customization Discovery Analysis Job** in Jobs Reference in the English edition of the documentation.

### View System Statistics and Log Data

Use the Log Analysis portlets to examine system performance. These portlets automate the process of parsing the application server log files and storing them in the database for visual analysis. Use these portlets to identify performance bottlenecks, frequently accessed features, response times, peak hours, and more.

****Follow these steps:****

1. Log in to Classic PPM with administrative access rights.
2. Refer to the Required Access Rights section at the start of this document. To refresh the data in these portlets, you first run a job to export the data from the server and import it into the application database.
3. Click the **Administration** menu. Under **Security and Diagnostics**, select **Log Analysis**.
4. Select one of the following tabs:
   a. **System Stats by Hour/Day**: Use this tab to view average server response times, total sessions, and a list of the slowest actions performed for a specific day.
   b. **System Stats by Month**: Use this tab to view monthly page views and XOG requests for all servers or grouped by server. You can also view monthly session counts.
   c. **Daily Page/XOG Views**: Use this tab to analyze the top 20 slowest pages. For example, you could troubleshoot the slowest pages and then optimize them for improved performance. This tab includes page views by service or server, daily page views, average response times by day, XOG requests by service or server, their average response times, and the total number of XOG calls by day.
5. Enter your filter criteria:
   a. Select a **Date**.
   b. Select an **Environment** such as All or local.
   c. Select a **Hostname** such as All or a specific application server.
   d. Click **Filter**.
6. To export the data, click the **Log Data Export** tab. Specify the Environment and the date range for the exported data. Each row of exported data shows the date, total page views by all users, the average page response time in seconds, the total number of XML Open Gateway (XOG) requests, the average XOG response time, and the unique session count for that day.
7. To configure any of the portlets on these tabs, click **Configure** if available. To export the data to Excel or PowerPoint, click **Export to Excel** or **Export to PowerPoint**. Not all portlets support these options.

The associated username for a session ID helps you trace user activity in the system. For example, after user_01 deleted a custom object in Studio, user_02 began to notice delays and slower performance on another page indicated in the URL column.

> [!NOTE]
> When a user logs in to the application, a trigger records their username and associated session ID cookie value.

### Jobs Monitor

As an administrator, view the Jobs Monitor to identify the background jobs that are currently running on each server.

****Follow these steps:****

1. Log in to Classic PPM with administrative access rights.
2. Select **Administration**, **Security and Diagnostics**, **Jobs Monitor**. The following information appears:
- **Job Name**: The instance of the job that is currently running.
- **Run ID**: The instance ID for the currently running job.
- **Job ID**: The ancestor or parent ID for the running job.
- **Job Definition Name**: The ancestor or parent job name.
- **Job Definition ID**: The ancestor or parent job definition.
- **Description**: An optional description of the job.
- **Scheduler Server**: The server that queued the job process and that is now running the job. For example, `bg@job_server1.xx.yyy`

### View the Data Warehouse Audit Dashboard

Available in Clarity 15.6.

****Follow these steps:****

1. Log in to Classic PPM with administrative access rights.
2. Click **Administration**, **Security and Diagnostics**, **Data Warehouse**.
3. (Optional) To search the audit data, click **+ Expand Filter**, enter your filter criteria, and click **Filter**.
4. The **Data Warehouse Audit** portlet displays the following fields:
- Data Warehouse Table Name
- Update Date
- Load Start Date-Time Stamp
- Load End Date-Time Stamp
- Duration (seconds)
- Row Count
5. Examine the audit data. For example, sort by row count or duration to examine the heaviest table loads.
6. If any errors occurred, the companion **Data Warehouse Error** portlet displays the following fields:
- Data Warehouse Table Name
- Error Message
- Error Number
- SQL Command
7. (Optional) Click **Options** to configure the audit or errors portlet. You can also export the data. For example, export an offending SQL command to a CSV file and send to your troubleshooting team.

## Configure the Data Warehouse and Advanced Reporting

Use Advanced Reporting to create ad hoc views of Classic PPM data and save the views as reports. You can then email the reports, export them, display them on a dashboard, or consume them as is. To create ad hoc views, report builders can select from a set of advanced reporting domains that contain default product data. The domains are the metadata layer to the Classic PPM data warehouse (DWH). You need the PMO Accelerator add-in with Jaspersoft Advanced Reporting content to view domains and reports. See the PMO Accelerator Release Notes for more information.

> [!IMPORTANT]
> This section contains the following topics:
> - Configure the Data Warehouse
> - Configure the Advanced Reporting
> - Clarity Data Warehouse (DWH) Conventions
> - Configure OData Access to the Data Warehouse (SaaS Only)

### Configure the Data Warehouse

#### Clarity Data Warehouse

The data warehouse (DWH) is the main data source for the advanced reporting solution. Advanced Reporting lets you create both ad hoc reports and Jaspersoft Studio reports that you can display on a dashboard. The data warehouse schema is optimized specifically for reporting and analytics. The schema includes the investment, resource, portfolio, timesheet, and project objects.

The following five (5) jobs update the data warehouse:
- **Load Data Warehouse**: This job loads the data incrementally or in full.
- **Load Data Warehouse Access Rights**: This job loads user permissions.
- **Create Data Warehouse Trend**: This job creates new data warehouse trending information.
- **Update Data Warehouse Trend**: This job updates selected trending tables with the latest information.
- **Delete Data Warehouse Trend**: This job removes selected trends from the data warehouse.

The DWH schema is populated at scheduled intervals by the **Load Data Warehouse** and the **Load Data Warehouse Access Rights** jobs. These two ETL jobs extract the relevant data from the PPM database, transform the data, and load it into the data warehouse.

A standard set of table prefixes, lookups, fact tables, and queries are used in the data warehouse to work with any reporting tool. See Clarity Data Warehouse (DWH) Conventions. The data warehouse can be extended to include custom objects and attributes.

The PMO Accelerator add-in includes Jaspersoft Studio reports. These SQL reports are written directly against the data warehouse. A few of these reports are written against the Classic PPM database.

> [!TIP]
> For better performance, write your reports against a data source and not against the domain layer. We also recommend that you write all reports against the data warehouse data source. Use the PPM database as your data source only if the required data is not available in the data warehouse. Performance is better when you use the data warehouse data source.

> [!NOTE]
> To write more sophisticated reports directly against the data warehouse or the database, download a client tool such as Jaspersoft Studio. For information about Jaspersoft Studio, see the Jaspersoft Community.

#### View Objects and Attributes Included in the Data Warehouse

Only the most commonly used stock objects and attributes in the product are included in the data warehouse by default. These same objects and attributes are visible in the domains. To identify these objects and attributes, use the following procedure:

****Follow these steps:****

1. Click **Administration**, **Studio**, **Objects**.
2. In the Objects list, a check mark appears in the **Data Warehouse** column to identify the included objects. You can also open the object and view the **Include in the Data Warehouse** check box.
3. Select an object and click the **Attributes** tab.
4. In the Attributes list, a check mark appears in the **Data Warehouse** column to identify the included attributes. You can also open the attribute and view the **Include in the Data Warehouse** check box.

> [!NOTE]
> Certain object attributes that are automatically included in the data warehouse do not have the **Data Warehouse** field selected. These attributes are also visible in the domains.

The following object attributes are included in the data warehouse. However, the **Data Warehouse** field does not appear selected for these attributes.

**Project:** % Complete, % Expended Actuals, Actuals for Labor Resources, Actuals Sum for Labor Resources, ACWP, Alignment, BAC, Baseline Cost, Baseline Usage, BCWP, BCWP Override, BCWS, Budgeted Benefit, Budgeted Capital Cost, Budgeted Capital %, Budgeted Cost, Budgeted IRR, Budgeted MIRR, Budgeted NPV, Budgeted Operating %, Budgeted Operating Cost, Budgeted ROI, Cost Variance %, CPI, Current Baseline for Labor Resources, Current Baseline Sum for Labor Resources, Current Baseline Variance for Labor Resources, Current Baseline Variance Sum for Labor Resources, CV, Detailed Budget Actual Benefit, Detailed Budget Benefit, Detailed Budget Capital Cost, Detailed Budget Cost, Detailed Budget Operating Cost, Detailed Forecast Cost, Detailed Planned Actual Benefit, Detailed Planned Benefit, Detailed Planned Capital Cost, Detailed Planned Cost, Detailed Planned Operating Cost, EAC, EAC(AT), EAC(T), EAC for Labor Resources, EAC Sum for Labor Resources, ETC, ETC(AT), ETC(Cost), ETC for Labor Resources, ETC Sum for Labor Resources, Initial Investment, Override Value for Reinvestment Rate, Override Value for Total Cost of Capital, Planned Benefit, Planned Capital %, Planned Capital Cost, Planned Cost, Planned IRR, Planned MIRR, Planned NPV, Planned Operating %, Planned Operating Cost, Planned ROI, Projected Cost Variance, Projected Cost Variance %, Projected Effort Variance, Projected Effort Variance %, Schedule to Baseline, Schedule Variance %, SPI, Total Effort, Total Labor Effort

**Task:** % Complete, % Expended Actuals, ACWP, BAC, Baseline Cost, Baseline Duration, Baseline Usage, Baseline Variance, BCWP, BCWP Override, BCWS, Cost Variance %, CPI, CV, EAC, EAC(AT), EAC(T), ETC, ETC(AT), ETC(Cost), ETC(T), Finish Variance, Schedule Variance %, SPI, Total Effort

**Benefit Plan:** Total Actual Benefit, Total Benefit, Total Billing Benefit

**Benefit Plan Detail:** Actual Benefit, Benefit, Billing Benefit, Percentage, Total Actual Benefit, Total Benefit, Total Billing Benefit, Variance

**Cost Plan:** Total Cost, Total Revenue, Total Units

**Cost Plan Detail:** Actual Cost, Actual Revenue, Actual Units, Billing Cost, Billing Cost Total, Billing Revenue, Billing Revenue Total, Cost, Cost Total, Cost Variance, Revenue, Revenue Total, Revenue Variance, Units, Units Total

**Team:** Actuals, Allocation, Allocation Cost, Baseline Cost, Baseline Usage, Baseline Variance, ETC, Hard Allocation, Hard Allocation Cost, Incident Actuals, Total Actuals, Total Usage

**Portfolio:** Distributed Benefits, Distributed Benefits (Total), Distributed Capital Cost, Distributed Capital Cost (Total), Distributed Cost, Distributed Cost (Total), Distributed Operating Cost, Distributed Operating Cost (Total), Distributed Overall Roles, Distributed Overall Roles (Total), Target Benefits, Target Capital Cost, Target Operating Cost, Target Overall Roles, Target Total Cost, Target Total Roles

**Assignment:** % Complete, % Expended, Actual Cost, Actuals, Actuals (Compare To), Baseline Cost, Baseline Usage, ETC, ETC (Compare To), ETC Cost, Max % Load, Pending Actuals, Proposed ETC, Total Effort

#### Configure the Data Warehouse

Over time, you can configure the data warehouse settings to adjust to your changing business needs. For example, you initially set up the data warehouse for English but later decide to add more languages for localization.

> [!NOTE]
> Whenever you change the data warehouse configuration, run the **Load Data Warehouse** job with the **Full Load** option selected.

Specify the languages, entity for fiscal periods, and other options that allow you to eliminate unused slice periods. The settings help reduce the number of fact records stored and the processing time for populating the Data Warehouse.

> [!WARNING]
> After modifying the fields that are described in the following procedure, run the **Load Data Warehouse** job with **Full Load** selected. Changes to the field **Entity for Fiscal Periods** result in a resource-intensive operation because all fiscal fields within the data warehouse are recalculated.

****Follow these steps:****

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Data Warehouse Options** section, complete the following fields:
- **Languages**: Specifies the language localizations that are included in the Data Warehouse. Multiple languages result in increased storage requirements on the Data Warehouse server. Note: Always select English. Otherwise, the Load Data Warehouse job fails.
- **Entity for Fiscal Periods**: Specifies the entity that is used to determine the fiscal periods for use in all Data Warehouse fiscal period data calculations. Setting the entity for the first time or updating the entity creates Data Warehouse time slice requests. Hence, the initial run or any subsequent runs (after updating the entity) of the Time Slicing job takes longer than normal. Initially, setting an entity or updating it also updates the fiscal entity and fiscal period type for the Data Warehouse fiscal time slice requests. Do not set or change the entity when a time slice rollover is in progress. If you do, an error message appears. Wait until the rollover completes and then set the entity.

> [!NOTE]
> The entity must have Monthly (or 13 period) fiscal time periods set up to cover the time range of the time slice requests. Otherwise, the time slice requests are ignored when the Time Slicing job runs. If both Monthly and 13 Periods fiscal time periods per year exist, Monthly takes priority.

   Select at least one period data (Weekly, Monthly, or Fiscal). If you do not select the period data, the Load Data Warehouse job for both full and incremental loads fail with an error message.
- **Include Weekly Period Data**: Specifies if you want to look at the data by week. When selected, facts are loaded in weekly increments.
- **Include Monthly Period Data**: Specifies if you want to look at the data by months. When selected, facts are loaded in monthly increments.
- **Include Fiscal Period Data**: Specifies if you want to look at the data by fiscal time periods. When selected, facts are loaded in fiscal time periods. The fiscal time period is determined by the value set in the **Entity for Fiscal Periods** field.
- **Consistent Fiscal Periods Across Entities**: Specifies if the fiscal time period dates are consistent across the entities.

> [!TIP]
> Leave this option unchecked unless you experience performance issues with the Load Data Warehouse job.

> [!NOTE]
> If you experience performance issues, please check this option. With this option checked, ensure that cost plan data is entered in the same per-period metrics as the plan itself. For instance, if the cost plan is a monthly plan, ensure you enter per-period metrics as monthly (not annual or other period types). Otherwise, all period facts will not be in the data warehouse.
- **Include Only Financial Plan of Record**: Specifies whether to include all financial plans (cost plans, budget plans, and benefit plans) or only the current budget plan and the cost plan of record in the Data Warehouse. By default, only the current budget plan, the cost plan of record, and associated benefit plans are included in the Data Warehouse. To report on only the current budget plan or the cost plan of record, keep the option selected. To compare old plans with current plans on investments, uncheck this option. Unchecking this option can impact the Data Warehouse performance. You might notice a significant difference in the load time for large data sets.
- **Include SQL Curve Data**: When selected creates SQL Curve tables in the data warehouse schema to support time-varying attributes, replacing the need for Fact tables. These tables are essential for Object-based Data Providers to display Per-Period Metrics in the new reporting experience. When activated, the Data Warehouse schema is updated during the Data Warehouse Load job to include the SQL Curve tables. This option must be enabled to display Per-Period Metrics for reporting in Data Providers.
- **Enable Instantaneous Sync**: When enabled, most updates to the data warehouse occur in near real-time when Clarity data is modified. SQL Curve tables will be updated, but the Fact tables will not be affected. For more information, see Instantaneous Sync of Data Between Clarity and Data Warehouse.

3. Save your changes.
4. Run the following jobs in the listed order:
- Time Slicing
- Load Data Warehouse
- Load Data Warehouse Access Rights

#### Configure the Data Warehouse Time Slices

Time slices with the Data Warehouse option selected determine the ranges for the Data Warehouse facts. Data Warehouse time slice requests are system requests and cannot be deleted. The Data Warehouse time slice requests default to the following time periods, which are based on the database server system date:
- One year back and forward for **Daily**. The From Date of the slice request is one year before the system date.
- One year back and forward for **Weekly**. The From Date is one year before the system date. The From Date is the same day as the **First Day of Work Week** defined under **Administration**, **Project Management Settings**.
- Three years back and forward for **Monthly**. The From Date is three years before the system date and is always the first day of the month.
- Three years back and forward for **Fiscal**. The From Date is three years before the system date. The From Date is the start date of the fiscal period for the entity that is selected for the Data Warehouse. The fiscal period that is referenced is of type Monthly or 13 Period, whichever is set for the entity.

> [!WARNING]
> The entity must have Monthly (or 13 Period) fiscal time periods set up to cover the range of the time slice requests. Otherwise, the time slice requests are ignored when the Time Slice job runs. Verify that the ranges work for your business needs. To update the From Date and Number of Periods, open a time slice and change the properties.

##### Rules for Setting the From Date and Number of Periods

> [!WARNING]
> By default, the Data Warehouse time slice requests are set consistently for each slice period (Daily, Weekly, Monthly, Fiscal). If you edit these slice requests, set the From Date and Number of Periods to be the same for each slice period type. If the From Date and Number of Periods are not set correctly, the data in the Data Warehouse is inconsistent.

Follow these rules when setting the From Date and Number of Periods for the Data Warehouse time slice requests:
- Verify that there is only one daily time slice request.
- For all weekly time slice requests, the From Date must be the same day as the **First Day of the Work Week** in the Project Management settings. For example, if the First Day of the Work Week is a Monday, then set all weekly time slice requests with a From Date that is a Monday.
- For all monthly time slice requests, the From Date must always be the first of a month.
- For all fiscal time slice requests, the From Date must correspond to the start date of a Monthly (or 13 Period) fiscal period type.
- The time slice ranges must include the start and finish dates of the investments on which you regularly report. For example, if you have two-year investments, set the time slices to cover two years back and forward to include all relevant data in the Data Warehouse.

#### Enable Custom Objects and Attributes for the Data Warehouse

To view any preexisting custom objects and attributes in the domains, explicitly enable them for inclusion in the Data Warehouse. Depending on their permissions, report users only see the data in the domains that is Data Warehouse-enabled by their system administrators. Verify that the custom objects and attributes that you want to enable for the Data Warehouse exist in the product. For more information about objects and attributes, see Classic PPM Studio Development.

> [!WARNING]
> Enable a custom master object for the Data Warehouse before enabling a custom sub object of the master object. Otherwise, the option to include the sub object in the data warehouse appears disabled. Similarly, enable an object for the Data Warehouse first, before enabling the custom attributes of that object.

****Follow these steps:****

1. Click **Administration**, **Studio**, **Objects**.
2. To enable a custom object for the Data Warehouse, complete the following steps:
   a. Click the object name to open its properties.
   b. Select the **Include in the Data Warehouse** check box and save.
3. To enable each custom attribute for the Data Warehouse, complete the following steps:
   a. With the object open, click **Attributes**.
   b. Click the attribute name to open its properties.
   c. Select the **Include in the Data Warehouse** check box and save. To enable multiple custom attributes at once, select them on the object attributes list page and then select **Include in Data Warehouse**.
4. Click **Save and Return**.
5. Run the **Load the Data Warehouse** job to include the custom objects and attributes in the Data Warehouse and domains. See Run or Schedule a Job.
6. Check the **Custom Master Objects** domain to verify that your custom object appears in the domain. Check the other domains to verify that your custom attributes appear in the respective domains. For information about what custom attributes are included in which domains, see Advanced Reporting Domains in this article.

#### Update Calculated and Number Custom Attributes Included in the Data Warehouse

You can update the formulas or decimal places for any custom attributes (calculated or number) that are included in the Data Warehouse. We recommend that you build and validate the formulas for the calculated attributes before including the attributes in the Data Warehouse.

****Follow these steps:****

1. Deselect the **Include in the Data Warehouse** check box for the attribute to disable it for the Data Warehouse.
2. Run the **Load Data Warehouse** job to remove the attribute from the Data Warehouse and domains.
3. Build the new formula that is associated with the custom calculated attribute and validate. Or, change the decimal places for the number custom attribute.
4. Select the **Include in the Data Warehouse** check box for the attribute to enable it for the Data Warehouse.
5. Rerun the **Load Data Warehouse** job to add back the attribute to the Data Warehouse and domains.

#### Disable Custom Objects and Attributes from the Data Warehouse

****Follow these steps:****

1. Disable all the custom sub objects for that master object. Next, disable the custom master object from the Data Warehouse. Disabling the master object also disables the custom attributes for the master and sub objects from the Data Warehouse.
2. Run the **Load Data Warehouse** job for the changes to take effect. Verify that the **Full Load** option is selected when running the job. Run the job at least once before re-enabling an object or attribute for the Data Warehouse.

> [!WARNING]
> Do not delete or disable any attribute available from an add-in because doing so can break reporting functionality. Before disabling custom objects or attributes from the Data Warehouse, verify that those objects and attributes are not used in any views or reports. We recommend that you notify all users to remove those objects or attributes from any views or reports that are currently using them. If the users do not remove those objects or attributes from the views or reports, they cannot create views and reports. The existing views and reports become unusable. A system error appears when they try to access the existing views or reports.

##### Workaround

You can work around the system error and can allow users access to the previously saved views and reports.

****Follow these steps:****

1. Re-enable the disabled or deleted objects or attributes for the Data Warehouse.
2. Read the custom objects and attributes to the Data Warehouse and domains by running the **Load the Data Warehouse** job.
3. Access the ad hoc views and reports that use the re-enabled objects or attributes. Manually remove the appropriate objects or attributes from the ad hoc views and reports and save.
4. Disable the custom objects or attributes from the Data Warehouse by deselecting the **Include in the Data Warehouse** check box.
5. Run the **Load the Data Warehouse** job to remove the custom objects and attributes from the Data Warehouse and domains.

> [!TIP]
> You can disable multiple custom attributes at once by selecting them on the attributes list page and then selecting **Exclude from Data Warehouse**.

### Instantaneous Sync of Data Between Clarity and Data Warehouse

The Instantaneous Sync feature enables near real-time synchronization of data between Clarity and the Data Warehouse. With this functionality, changes made in Clarity--such as object instance modifications (insert, update, delete) and schema updates (new objects or attributes enabled for the Data Warehouse)--are automatically reflected in the Data Warehouse without requiring a manual Load Data Warehouse job. This reduces the dependency on incremental or full load jobs and ensures that reports and dashboards always reflect the most up-to-date information.

Administrators can enable or disable this feature using the **Enable Instantaneous Sync** checkbox in **Administration** > **System Options** > **Data Warehouse Options**. By default, the option is turned off. Instantaneous Sync uses SQL Curves instead of fact tables for efficiency, and it tracks both schema changes and object modification events. While it offers broad coverage, some areas such as fiscal time periods, baselines, and certain investment attributes still require a manual Load Data Warehouse job.

#### Key Highlights
- **Near Real-Time Sync of Data Warehouse**: Changes made in Clarity are reflected almost immediately in the Data Warehouse, minimizing data refresh wait times.
- **Instantaneous Sync for Data Warehouse**:
- **Schema Changes**: Tracks changes to both out-of-the-box and custom objects/attributes, including adding, modifying, deactivating, or deleting attributes in Classic Studio.
- **Object Inclusion and Exclusion**: Syncs when objects or attributes are enabled or disabled for the Data Warehouse in Classic Studio.
- **Historical Data Sync**: When an object/attribute is newly enabled for the Data Warehouse, existing values are backfilled via a historical sync.
- **Instance Data Updates**: Insert, update, and delete operations on object instances are synchronized across both Clarity and Classic PPM interfaces.
- **XOG and REST Coverage**: Supported for most objects. For more information, see Recommendations and Limitations for Instantaneous Sync.
- **Timesheet Integration**: All timesheet updates are captured by Instantaneous Sync during the Timesheet Posting job, except assignment updates, which remain excluded.
- **Timesheet Synchronization**: Updates made during the Timesheet Posting job are automatically synchronized with the Data Warehouse. Assignment-level updates are not included.
- **Timeslicing and TSV**: Updates from Time Slicing and Timeslice Sync jobs are captured, including SQL Curves, per-period TSV metrics, resource availability, and total usage.
- **SQL Curve Table Support**: If SQL Curve tables are enabled in System Options, they are updated in near real time. Fact tables are not updated by Instantaneous Sync and still require the Load Data Warehouse job.
- **Background Service Execution**: Runs as part of Clarity Background Services (BG); the PPM Broker service is not required.
- **Supported Databases**: Oracle, PostgreSQL, and MSSQL.

#### Pre-Requisites

To enable Instantaneous Sync, administrators must complete the following steps:
- **DB Link Creation**: Execute the command `admin db create-db-link` to establish a database link between Clarity and the Data Warehouse schema.
- **System Option**: In **Administration** > **System Options** > **Data Warehouse Options**, select the **Enable Instantaneous Sync** checkbox.
- **Initial Full Load**: Run a full **Load Data Warehouse** job at least once before enabling synchronization to initialize metadata tables.
- **SQL Curves (Optional)**: If the Data Warehouse SQL Curves option is enabled, SQL Curve tables are updated in near real time with Instantaneous Sync. Fact tables still require the Load Data Warehouse job.

#### System Behavior
- **Toggled Off by Default**: Administrators must enable Instantaneous Sync in **Administration** > **System Options** > **Data Warehouse Options**.
- **Leverages Background Services (BG)**: The synchronization process runs as part of Clarity Background Services (BG); the PPM Broker service is not required.
- **Security**: No additional access rights are required.

#### Instantaneous Sync Logging for Data Warehouse

Instantaneous Sync activity is recorded in the `BG-CA.log` and `App-CA.log` files. Administrators can review these logs to monitor synchronization and troubleshoot issues.

**Enable Debug Logging**: To capture detailed information, update the `Logger.xml` file with the following configuration:

```xml
<Logger additivity="false" level="debug" name="com.niku.union.interfaces.DWHSynchronizer">
  <AppenderRef ref="STDOUT"/>
</Logger>
```

**Enable Debug Logging (Data Warehouse Level)**: Additional diagnostic control is available directly in the Data Warehouse schema.
- A `IS_SYNC_IN_DEBUG_MODE` column is available in the `DWH_CFG_SETTINGS` table.
- By default, this column is set to `0` (disabled).
- When set to `1`, detailed log entries are recorded in the `DWH_SYNC_DEBUG_MESSAGE` table.
- This allows administrators to view synchronization debug information directly from the Data Warehouse for faster issue analysis and troubleshooting.

> [!NOTE]
> Some Key Points to Remember:
> - **System Setup**: Ensure that the required system options are enabled and the `admin db create-db-link` command is executed before using Instantaneous Sync.
> - **Data Tracking**: Changes are recorded in `DWH_ODF_INST_CHANGES` and `DWH_ODF_SCHEMA_CHANGES` tables, ensuring accurate synchronization.
> - **Archiving**: Processed records are moved to `DWH_ODF_INST_CHANGES_ARCHIVE` to prevent data overflow.
> - **Database Maintenance**: Regular database cleanup ensures optimal system performance.
> - **Fact Tables Are Not Updated**: Instantaneous Sync applies only to SQL Curve tables. Fact tables still require a manual Load Data Warehouse job.
> - **Support in REST API and XOG**: The REST API and XML Open Gateway (XOG) synchronize newly inserted or modified user, resource, and investment data, enabling seamless integration with Clarity's data flow processes.
> - **Performance Considerations**: Large data volumes may introduce short delays.

#### Recommendations and Limitations for Instantaneous Sync

The Instantaneous Sync feature reduces dependency on the Load Data Warehouse job by synchronizing most schema and data changes in near real time. However, there are some limitations to be aware of. While this reduces reliance on scheduled Data Warehouse jobs, it does not eliminate them. The following recommendations and limitations will help administrators configure their environments effectively.

##### Recommendations for Job Scheduling

**Load Data Warehouse (Full Load)**
- It is recommended that this job continues to be scheduled in the same way as before Instantaneous Sync was enabled.
- Instantaneous Sync is mutually incompatible with the Load Data Warehouse job. This is managed by the system, so it is not displayed as an "Incompatible Job."
- A full load must be run at least once before enabling Instantaneous Sync in an environment.
- Ensure that the DBLINK between Clarity and the Data Warehouse schema is properly configured before the first full load.

> [!NOTE]
> You can view incompatible jobs in Classic PPM by navigating to **Administration** > **Data Administration** > **Reports and Jobs** and selecting the **Incompatible Jobs** tab. Instantaneous Sync incompatibilities are managed by the system, so they do not appear in this list.

**Load Data Warehouse (Incremental Load)**
- It is recommended that the incremental load job also continues to be scheduled in the same way as before Instantaneous Sync was enabled.
- Instantaneous Sync is mutually incompatible with the Load Data Warehouse job, and this restriction is managed by the system.
- Incremental load jobs remain important to process data that is not covered by Instantaneous Sync.

**Load Data Warehouse Access Rights**
- It is important and required that this job continues to be scheduled in the same way as before Instantaneous Sync was enabled.
- Instantaneous Sync does not synchronize security; therefore, this job must continue to run to ensure access rights are correctly reflected in the Data Warehouse.

**When the Include SQL Curve Data Option is Enabled**
- The **Include SQL Curve Data** option became available in release 16.3.0.
- After enabling or re-enabling this option, it is necessary to run a full load once to initialize the SQL Curve tables.
- Enabling this option is independent of Instantaneous Sync. SQL Curve data is required for per-period metrics in the reporting solution.
- SQL Curve data is populated both by the Load Data Warehouse job (full and incremental) and during Instantaneous Sync. Instantaneous Sync is not required for SQL Curve data to be enabled.
- It is recommended that the Load Data Warehouse jobs (full or incremental) continue to be scheduled in the same way as before, regardless of whether the SQL Curve option is enabled.

##### Instantaneous Sync Processing

The synchronization leverages Clarity Background Services (BG). The PPM Broker service is not required.

Before enabling Instantaneous Sync for the first time, it is recommended that the Load Data Warehouse job be run in full load mode if it has never been executed in the environment.

Instantaneous Sync captures schema and data changes for objects and attributes enabled for the Data Warehouse, including:
- Schema changes for out-of-the-box and custom objects and attributes (add, modify, deactivate, or delete in Classic Studio).
- Inclusion and exclusion of objects and attributes in the Data Warehouse.
- Historical synchronization of existing data when objects or attributes are newly enabled.
- Changes made in ODF.
- Object and attribute instance updates (insert, update, delete) across both Classic PPM and Clarity.
- Some updates made through XOG.

##### Current Limitations

Instantaneous Sync does not process or update the following in the Data Warehouse:
- All fact tables (for example, `DWH_INV_SUMMARY_FACTS`).
- Security.
- Fiscal time periods.
- Time reporting periods.
- Latest attribute in the Status Report object.
- Calendar periods.
- Baseline object.
- Scalars and metrics.
- OBS creation.
- Data updated through jobs, except:
- The Timesheet Posting job updates the timesheet status but does not update assignment data.
- Attributes stored in multiple Data Warehouse dimension tables or updated based on other attributes. For example: Investment Name stored in `DWH_RDM_ROADMAP_ITEM.LINKED_TO` is not updated when the Investment Name changes in Clarity.
- Updates made through GEL scripts or direct database updates using XOG.
- Certain out-of-the-box attributes with inconsistent metadata between Clarity and the Data Warehouse (for example, Banner Color).
- Updates to Jaspersoft domains.

##### Areas Under Review

The following areas are under review for expanded coverage in future releases and are not validated for this release. They may already be partially processed by Instantaneous Sync, but further validation is required:
- TSV updates from the Time Slicing and Timeslice Sync jobs.
- XOG using ODF for the following objects:
- Entity
- Department
- Location
- Charge Code
- Transaction Class
- Investment Class
- WIP Class
- Resource Class
- Vendor
- Portfolio
- Company

> [!TIP]
> Watch the following video to learn about Instantaneous Sync of Data Between Clarity and Data Warehouse.

## Configure the Advanced Reporting

This section contains the following topics:
- Advanced Reporting Data Components
- Manage Security for Advanced Reporting
- Advanced Reporting Domains
- Manage User Interface (UI) Themes
- Advanced Reporting and Database Link
- Improve Reporting Performance with Jaspersoft Governor Settings
- Advanced Reporting User Parameters

### Advanced Reporting Data Components

The following diagram shows the advanced reporting data components. The data warehouse and the advanced reporting domains form the foundation of the reporting architecture. For data warehouse schema and domain field definitions, see the Advanced Reporting and Database Schema Index.

### Manage Security for Advanced Reporting

To manage security for advanced reporting, manage the following key areas:
- **Advanced reporting users and roles**: Keep the user information synchronized between Classic PPM and Jaspersoft.
- **User and Shared folders**: To control the sharing of content, manage the folder structure.
- **Repository content items**: Manage access to the folder contents.

> [!NOTE]
> Classic PPM users access the Jaspersoft user interface by selecting the **Advanced Reporting** option from the **Home** menu. Token-based authentication is used to auto-authenticate Classic PPM users for Jaspersoft without requiring separate login. When successfully authenticated, the Classic PPM users can access the advanced reporting home page in the Jaspersoft application.

#### Verify Prerequisites

Verify that you have completed the following requirements:
- The PMO Accelerator add-in with Jaspersoft Advanced Reporting content is available. See the PMO Accelerator Release Notes.
- A list of users with advanced reporting access rights or groups exist in Classic PPM. See Configure User Accounts, Skills, and Access Rights.
- You have the administration access right to assign the Advanced Reporting access rights to Classic PPM users or groups.

#### Assign Access Rights to Users

Grant the appropriate Advanced Reporting access rights to the Classic PPM users. For example, to allow users to run reports, assign the following access rights:
- **Advanced Reporting - Navigate**
- **Advanced Reporting - Report Create**

For detailed descriptions of the advanced reporting access rights, see Advanced Reporting Access Rights under Access Rights Reference in the English edition of the documentation.

For information about how to view the access rights that are assigned to each license type, see View User Counts by License Type.

#### Synchronize Users Between Classic PPM and Jaspersoft

Synchronize the users between Classic PPM and Jaspersoft using one of the following methods:
- **Synchronize interactively** to ensure that whenever user properties are updated in Classic PPM, they also get updated in Jaspersoft. The update is triggered when the user clicks the **Advanced Reporting** link in Classic PPM.
- **Run the Create and Update Jaspersoft Users job** in incremental mode (with the **Full Sync** option unselected). Selects the delta and updates the properties and roles or permissions of the new or updated users in Classic PPM.

##### Synchronize Users Interactively

The interactive synchronization method synchronizes user properties (user name, user ID, or email) from Classic PPM to Jaspersoft. The system uses this method for synchronizing user properties for only the logged in user in the following cases:
- There is a change in the user properties.
- The user is accessing Jaspersoft for the first time.

The system checks the `CMN_JASPER_SYNCED_USERS` table for any changes to the user properties since the last sync date. The user is not synchronized again with Jaspersoft if there are no changes to the user properties.

****Follow these steps:****

1. Log in to Classic PPM with the credentials of the user that you want to synchronize with Jaspersoft.
2. Click **Home**, **Personal**, **Advanced Reporting**. A new user is created in Jaspersoft.

Whenever a user accesses advanced reporting from Classic PPM, the user login parameters (theme, locale, or time zone) are passed to Jaspersoft. If during a session, any of these parameters change, the updates are applied in the next session.

##### Run or Schedule the Create and Update Jaspersoft Users Job

Run or schedule the **Create and Update Jaspersoft Users** job to synchronize the following information from Classic PPM to Jaspersoft for all new and existing users:
- User roles that are based on Classic PPM advanced reporting access rights.
- User profile attributes such as theme, language, locale, and time zone.

****Follow these steps:****

1. Click **Home**, **Personal**, **Reports and Jobs**.
2. Click **Jobs** and run the **Create and Update Jaspersoft Users** job.
3. (Optional) Schedule the job to run at a recurring interval. For more information about running or scheduling jobs, see Run or Schedule a Job.

##### Recommendations for Running the Create and Update Jaspersoft Users Job

We recommend that you run the job as opposed to interactively synchronizing the users in the following situations:
- As part of initial data setup between Classic PPM and Jaspersoft, when you create or update users in bulk.
- You have inactivated or locked a user or a group of users in Classic PPM. You want to inactivate these users in Jaspersoft too. In this case, running the job is the only way to inactivate these users in Jaspersoft.
- The Jaspersoft Reporting server goes down while updating user properties in Classic PPM. In this case, you cannot interactively synchronize the users. When the Jaspersoft server is back up, run the job to update the user properties.
- An active Classic PPM user with Advanced Reporting access rights is disabled in Jaspersoft by the Jaspersoft superuser. The next run of the job makes the user active again in Jaspersoft.

Run the job with the **Full Sync** option selected in the following situations:
- To synchronize all the Classic PPM active Advanced Reporting users with Jaspersoft.
- To remove all empty user-specific folders under the **Users** folder that have names corresponding to Classic PPM resource IDs.
- To remove all the inactive or locked Classic PPM Advanced Reporting users from Jaspersoft.

The user-specific folders and their content remain intact even after the users are removed from Jaspersoft. The Jaspersoft administrator must manually delete the user-specific folders and their content.

If you do not select the **Full Sync** option, the job synchronizes only the Classic PPM active Advanced Reporting users with Jaspersoft. The job does not perform any removal-related actions.

##### Automatic Completion of Tasks

Run the **Create and Update Jaspersoft Users** job with or without the Full Sync mode to automatically complete the following tasks:
- Create advanced reporting users in Jaspersoft provided the following conditions are true:
- The users do not already exist in Jaspersoft.
- The users are active in Classic PPM and are assigned any of the advanced reporting access rights.
- Pass user properties from Classic PPM to Jaspersoft. Also, update the properties whenever they are updated in Classic PPM.
- Assign users appropriate roles in Jaspersoft. The roles are based on the advanced reporting access rights that are assigned in Classic PPM.
- Update the license type counts in Classic PPM based on the advanced reporting access rights that are assigned to users.
- Reactivate a valid Classic PPM user in Jaspersoft who has been disabled or deleted by the Jaspersoft superuser. The user must be still active in Classic PPM.
- Update corresponding roles in Jaspersoft when advanced reporting access rights are updated for users in Classic PPM. For example, if all the advanced reporting access rights are revoked for a user in Classic PPM, the corresponding user role is revoked in Jaspersoft. The user remains active in both Classic PPM and Jaspersoft. The license types are also updated in Classic PPM based on the updated access rights.

#### Assign Roles to Users, and Allow Access to the Repository

The **Synchronize Jaspersoft Roles** job assigns users to appropriate roles in Jaspersoft that are based on their advanced reporting access rights. The advanced reporting roles determine the blocks that appear on the advanced reporting home page. For example, users who are assigned to the `ROLE_ADHOC_DESIGNER` role can view the **Ad Hoc Views** block, and so on. The `ROLE_USER` does not view any blocks on the home page. Users can navigate to the repository folders to see the content that they can access.

The following list describes the default advanced reporting roles. The designer roles can create content but cannot change the default repository content. The administrator role can change the default repository content and the user role has no access to the repository content.
- **ROLE_USER**: Allows read only access to the Users folder so they can see the folder but cannot delete it. Assigns execute access to the Themes folder for out-of-the-box Classic PPM themes.
- **ROLE_ADHOC_DESIGNER**: Allows the right to create ad hoc views from a domain and save them. They can edit, copy, or delete ad hoc views that they create, create reports from ad hoc views, and delete existing ad hoc views.
- **ROLE_REPORT_DESIGNER**: Allows the right to create and view reports, create a report from an ad hoc view or a query, or from Jaspersoft Studio. They can save a report, edit the definition of a Jaspersoft report in the repository, and copy or delete an existing report. The role also allows view access to the Public folder.
- **ROLE_DASHBOARD_DESIGNER**: Allows the right to view dashboards and reports, create a dashboard from a report, and save a dashboard. They can edit, copy, or delete their existing dashboards.
- **ROLE_ADMINISTRATOR**: Allows full access on SHARED folder and its sub folders. They can delete the SHARED folder and have administer access to the Users folders. They have read-only access to the Themes folder and the Public folder.
- **ROLE_DATASOURCE_DESIGNER**: Allows the right to define connections between Jaspersoft and their database or other data source referenced by their reports and domains. They can create, edit, and delete data sources.
- **ROLE_DOMAIN_DESIGNER**: Allows permission to create, edit, and delete domains.

> [!NOTE]
> The advanced reporting roles that are assigned based on the advanced reporting access rights only provide create privileges, not view or edit privileges. To run a report, an advanced reporting user needs additional PMO roles that provide view access to the repository content. They either need a PMO role that has access to a specific report or a PMO role that has access to all reports. You need the PMO Accelerator add-in with Jaspersoft Advanced Reporting content to access additional advanced reporting roles. See PMO Accelerator Advanced Reporting Content for more information.

****Follow these steps:****

1. In Classic PPM, grant the users the required advanced reporting access rights. Alternately, assign the users to the PMO Advanced Reporting access groups that automatically assign the group rights to the users. For example, to allow a user to access all the project management reports, assign the user to the **PMO Advanced Reporting Project Management** access group. For information about which Clarity access groups correspond to which Jaspersoft roles, see Advanced Reporting Roles and Permissions in the English edition of the documentation.
2. Click **Home**, **Personal**, **Reports and Jobs**. Click **Jobs** and run the **Synchronize Jaspersoft Roles** job. The job assigns the advanced reporting roles to the users based on their access group assignment in PPM. For example, the job assigns the `CSK_ROLE_PROJECT_MANAGEMENT` in Jaspersoft to the users in the PMO Advanced Reporting Project Management access group. For more information about the Synchronize Jaspersoft Roles job, see Jobs Reference in the English edition of the documentation.
3. Click **Home**, **Personal**, **Advanced Reporting**. The Advanced Reporting home page opens in the Jaspersoft application.

If you are not satisfied with the permissions available to each role by default or through the PMO roles, create custom roles. Create the custom roles under the **Users** and **Shared** folders in Jaspersoft. Next, grant the required permissions to the custom roles for access to the repository content. The custom roles are not overwritten by the Synchronize job or during upgrade.

> [!NOTE]
> For information about creating roles and assigning permissions, access the Jaspersoft Community web site and click the Documentation link or Docs link. On the Documentation page, select the version of Jaspersoft that corresponds to your Classic PPM release. Then click the link for the JasperReports Server Administration Guide. See the Classic PPM Release Notes for the Jaspersoft version that corresponds to your Classic PPM release.

#### Manage User and Shared Repository Folders

The repository folders maintain the access to the advanced reporting content.

> [!NOTE]
> To get a Classic PPM folder structure in your repository with the default advanced reporting content, install the PMO Accelerator add-in with Jaspersoft Advanced Reporting content. See PMO Accelerator Advanced Reporting Content for more information.

Administrators can see all repository folders and the items within these folders.

The **Shared** folder includes the following sub folders that are empty by default:
- Ad Hoc Components (includes Ad Hoc Reports)
- Dashboards
- Reports

All users with advanced reporting access rights have read, write, and delete permissions to the Shared folder. They can add content to this folder and can create custom folders under this folder. However, they cannot delete the folders or their content. Only the Jaspersoft administrator can delete this folder, its sub folders, and their content. The custom folders and their content remain unchanged during an upgrade.

The content of the Shared folder also remains intact on upgrade. Once deleted, this folder is recreated only on upgrade without any content inside it.

> [!WARNING]
> The **Users** folder is read-only and appears grayed-out. Users cannot create folders under the Users folder. The Jaspersoft administrator can create user-specific folders under the Users folder and can assign administrative rights to the users for their specific folders. The Jaspersoft administrator can follow any naming convention for the user-specific folders. However, when the **Create and Update Jaspersoft Users** job runs in Full Sync mode, any empty user-specific folders under Users are deleted provided the folder names correspond to Classic PPM resource IDs.

To make your folder structure more granular, or to control the sharing of content more, create your own folders under Shared. We recommend that you do not create any custom folders or content in the Classic PPM folder or its sub folders. Any content in the Classic PPM folder or its sub folders is overwritten during an upgrade.

> [!NOTE]
> For information about creating folders, access the Jaspersoft Community web site and click the Documentation link or Docs link. On the Documentation page, select the version of Jaspersoft that corresponds to your Classic PPM release. Then click the link for the JasperReports Server Administration Guide. See the Classic PPM Release Notes for the Jaspersoft version that corresponds to your Classic PPM release.

#### Manage Repository Content Items

Repository content items include domains, reports, ad hoc views, and dashboards. Install the PMO Accelerator add-in with Jaspersoft Advanced Reporting content to access the Clarity folder structure with default content.

We recommend that you do not change the default permissions for the following roles:
- `ROLE_ADHOC_DESIGNER`
- `ROLE_ADMINISTRATOR`
- `ROLE_DASHBOARD_DESIGNER`
- `ROLE_DATASOURCE_DESIGNER`
- `ROLE_DOMAIN_DESIGNER`
- `ROLE_REPORT_DESIGNER`
- `ROLE_USER`

The permissions are associated with the folders in the Clarity folder structure. Any changes to the permissions may get overwritten by an upgrade or patches. The PMO accelerator add-in includes a set of "CSK_" roles. See Advanced Reporting Roles and Permissions for more information about these roles. You can use these roles to secure the Clarity folder content. The "CSK_" role permissions may get overwritten during an upgrade or patches. However, any users who are assigned to these roles are preserved. Alternatively, you can create your own custom roles to secure the Clarity folder structure. The custom roles permissions are not overwritten by an upgrade or patches.

> [!NOTE]
> For information about setting folder permissions, visit the Jaspersoft Community and click the Documentation or Docs link. Then click the link for the JasperReports Server Administration Guide. On the Documentation page, select the supported version of Jaspersoft for your Classic PPM release (see the Release Notes).

### Advanced Reporting Domains

The advanced reporting domains provide business representations of the Classic PPM Data Warehouse, enabling you to interact with your data. Create ad hoc views and reports by selecting fields from a list of domains. By default, the domains contain the most frequently used product data and are dynamically updated whenever the Load Data Warehouse and Load Data Warehouse Access Rights jobs refresh the Data Warehouse. If you add custom objects or attributes to the product, you can flag these custom objects and attributes to be included in the Data Warehouse and the domains.

> [!WARNING]
> To view out-of-the-box domains and reports, you need the PMO Accelerator add-in with Jaspersoft Advanced Reporting content. See the PMO Accelerator Release Notes and PMO Accelerator Add-in Setup for more information.

Report builders use an interactive web-based designer to create ad hoc views. Ad hoc views are charts, tables, and cross tabs that let you analyze data from the domains. They can also use the ad hoc views to generate ad hoc reports which they can share or output in the following ways:
- Single standalone report
- Multiple related reports on a dashboard
- Word, PDF, Excel, PowerPoint documents, or other formats
- Email attachment

#### Domain Content

Domain fields are organized into sets and items. The sets act like folders that you can expand to view the items in that set. For example, the Investments set in the Investment Management domain includes the following items or fields that are generic to all investment types:
- Investment Name
- Investment ID
- Investment Type
- Description
- Investment Manager
- Start Date
- Finish Date

> [!NOTE]
> For detailed information about the domain fields, see Advanced Reporting Domain Field Descriptions on the Advanced Reporting and Database Schema Index.

Each domain also includes any custom sub objects and attributes that you add to the Classic PPM objects. For example, custom attributes that you add to the Investment object show up in the Custom set under the Investment set in the Investment Management domain. Custom attributes that you add to the Team object show up in the Custom set under the Team set in the Investment Management domain, and so on.

Custom sub objects that you add to the Classic PPM objects show up under the Custom set for the objects. They appear in their own sub object set having the name of the sub object. For example, if you add a custom "Country" sub object to the Investment object, this sub object appears in the Custom set for the Investment object under a set named "Country".

#### Domain Permissions

Any item level security that is defined in the product for projects, investments, and resources are utilized in the domains. For example, if you have access to view specific projects in the product, you can view the same projects in the domains.

The project and investment view rights in the product secure the following domains. Users can view the projects and investments in these domains to which they have access in the product:
- Idea Management
- Application Management
- Investment Management
- Project Management
- Financial Management

The resource view rights in the product secure the following domains. Users can view the resources and timesheets in these domains to which they have access in the product:
- Resource Management
- Time Management

If you have the PMO Accelerator add-in with Jaspersoft Advanced Reporting content, extra advanced reporting roles and corresponding domain permissions are available to you.

#### Application Management Domain

The Application Management domain includes summary information about the application investment. The domain also includes financial summary data for applications but not detailed financial planning data. For information about detailed financial planning data for applications, see the Financial Management domain.

The portfolio attributes included in this domain are primarily for filtering applications by portfolios.

The domain includes data from the following Classic PPM objects:
- Investment
- Team
- Financials
- Application

The object data is further broken down into the following high-level sets of items:
- Investments: General, OBS, Portfolio, Program, Team, Financial, Investment Totals, Weekly Periods, Calendar Periods, Fiscal Periods, Settings, Internal ID

**Custom Fields**: This domain is updated if you add custom sub objects or fields to the following objects in the product: Investment, Team, Application, and Financials.
- If you add a custom field to the **Investment** object and it is Data Warehouse-enabled, the custom field appears in the Application Management domain under the Application set in a Custom folder.
- If you add a custom field to the **Team** object and it is Data Warehouse-enabled, the field appears under the Team set in a Custom folder.
- If you add a custom field to the **Application** object and it is Data Warehouse-enabled, the custom field appears under the Application set in a Custom folder.
- If you add a custom field to the **Financials** object and it is Data Warehouse-enabled, the custom field appears under the Financial set in a Custom folder.

If you have custom sub objects as children of the Investment or Application objects, the sub objects appear as their own sets under the Custom folder in this domain.

#### Custom Master Objects Domain

The Custom Master Objects domain includes custom master objects data and the child sub object data. The custom master objects are not related to any of the Classic PPM out-of-the-box objects. You can only look at one custom master object and its sub objects at a time in the ad hoc viewer.

> [!NOTE]
> To include custom master objects in this domain, first enable these objects for the Data Warehouse. For more information, see Enable Custom Objects and Attributes for the Data Warehouse.

**Example: Adding a Custom Object**

The Documentation Management company is considering renovating its conference rooms across all the offices in the country. To help figure out the cost, they gather information about all the conference rooms in the various offices. The company creates the following custom data and enables it for the Data Warehouse so they can view and analyze it using the ad hoc viewer:

A custom master object named **Offices** with the following custom attributes:
- Location
- Square Feet
- Number of Employees

A custom sub object named **Conference Rooms** for the Offices master object with the following custom attributes:
- Has Video Conferencing
- Available Seating
- Room Number

#### Financial Management Domain

The Financial Management domain includes detailed financial planning data from cost, budget, and benefit plans for investments. The financial planning data appears broken down by charge codes, cost types, and other grouping attributes, in fiscal time periods only (not calendar or weekly periods). The domain also includes work-in-process transaction data at the transaction level.

Summary investment-level financial data is not part of this domain. For summary level financial data, see the Investment Management domain.

> [!NOTE]
> The domain displays data for financial users. If you are not using Financial Management, you can see the domain fields but there will not be any data for the fields.

The domain includes data from the following Classic PPM objects:
- Financials
- Benefit Plan
- Benefit Plan Details
- Cost Plan
- Cost Plan Detail

The object data is broken down into the following high-level sets of items: OBS, Investments, Internal IDs.

**Custom Fields**: This domain is updated if you add custom sub objects or fields to the following objects: Financials, Cost Plan, Cost Plan Detail, Benefit Plan, and Benefit Plan Detail.
- If you add a custom field to the **Financials** object and it is Data Warehouse-enabled, the custom field appears under the Financials set in a Custom folder.
- If you add a custom field to the **Cost Plan** object and it is Data Warehouse-enabled, the field appears under the Cost Plan set in a Custom folder.
- If you add a custom field to the **Cost Plan Details** object and it is Data Warehouse-enabled, the custom field appears under the Cost Plan Detail set in a Custom folder.
- If you add a custom field to the **Benefit Plan** object and it is Data Warehouse-enabled, the custom field appears under the Benefit Plan set in a Custom folder.
- If you add a custom field to the **Benefit Plan Detail** object and it is Data Warehouse-enabled, the custom field appears under the Benefit Plan Detail set in a Custom folder.

If you have custom sub objects as children of the Financials object, the sub objects appear as their own sets under the Custom folder in this domain.

#### Idea Management Domain

The Idea Management domain includes summary information about the idea investment. The domain also includes team and high-level financial information for ideas. The portfolio attributes included in this domain are used primarily for filtering ideas by portfolios.

> [!NOTE]
> Incidents are not included in this domain. They are only included in the Time Management domain.

The domain includes data from the following Classic PPM objects:
- Investment
- Team
- Financials
- Idea

The object data is further broken down into the following high-level sets of items: Investments, General, OBS, Portfolio, Program, Team, Financial, Investment Totals, Weekly Periods, Calendar Periods, Fiscal Periods, Settings, Internal IDs.

**Custom Fields**: This domain is updated if you add custom fields to the following objects: Investment, Team, Ideas, and Financials.
- If you add a custom field to the **Investment** object and it is Data Warehouse-enabled, the custom field appears in the Idea Management domain under the Idea set in a Custom folder.
- If you add a custom field to the **Team** object and it is Data Warehouse-enabled, the field appears under the Team set in a Custom folder.
- If you add a custom field to the **Idea** object and it is Data Warehouse-enabled, the field appears under the Idea set in a Custom folder.
- If you add a custom field to the **Financials** object and it is Data Warehouse-enabled, the field appears under the Financial set in a Custom folder.

If you have custom subobjects as children of the Investment or Idea objects, the subobjects appear as their own sets under the Custom folder in this domain.

#### Investment Management Domain

The Investment Management domain includes summary information about all investment types and their teams. This domain only includes information that is common to all investment types (project, asset, application, and so on). For example, no information about assignments is included because some investments do not have assignments.

The portfolio attributes included in this domain are used primarily for filtering investments by portfolios. The domain also includes financial summary data for investments, but not detailed financial planning data. For information about detailed financial planning data, see the Financial Management domain.

The Investment Management domain includes data from the following objects:
- Investment
- Team
- Financials

The object data is further broken down into the following high-level sets of items: Investments, General, OBS, Portfolio, Program, Team, Financial, Investment Totals, Weekly Periods, Calendar Periods, Fiscal Periods, Settings, Internal IDs.

> [!NOTE]
> For detailed information about the sets and the items included in each set, see Advanced Reporting Domain Field Descriptions on the Advanced Reporting and Database Schema Index on CA Support Online.

**Custom Fields**: This domain is updated if you add custom fields to the following objects: Investment, Team, and Financials.
- If you add a custom field that is Data Warehouse-enabled to the **Investment** object, the custom field appears under the Investment set in a Custom folder.
- If you add a custom field to the **Team** object and it is Data Warehouse-enabled, the field appears under the Team set in a Custom folder.
- If you add a custom field to the **Financials** object and it is Data Warehouse-enabled, the field appears under the Financials set in a Custom folder.

If you have custom sub objects as children of the Investment or Team objects, the sub objects appear as their own sets under the Custom folder in this domain.

#### Project Management Domain

The Project Management domain includes attributes that apply specifically to the Project investment such as programs, tasks, teams, assignments, risks, issues, and change requests. The portfolio attributes included in this domain are used primarily for filtering projects by portfolios. You can see which projects are covered under which portfolios. The financial attributes in this domain are only at the project summary level and not at the plan detail level. For detailed financial planning attributes, see the Financial Management domain.

The Project Management domain includes the following objects:
- Investment
- Project
- Team
- Financials
- Task
- Assignment
- Issue
- Risk
- Change Request

The object data is further broken down into the following high-level sets of items: Projects, Custom, General, OBS, Portfolio, Program, Team, Tasks, Financial, Project Totals, Weekly Periods, Calendar Periods, Fiscal Periods, Issues, Risks, Change Requests, Internal IDs.

**Custom Fields**: The domain is updated if you add custom fields to the following objects: Investment, Team, Project, Financials, Task, Assignments, Issues, Risks, and Change Requests.
- If you add a custom field to the **Investment** object and it is Data Warehouse-enabled, the custom field appears under the Project set in a Custom folder.
- If you add a custom field to the **Team** object and it is Data Warehouse-enabled, the field appears under the Team set in a Custom folder.
- If you add a custom field to the **Project** object and it is Data Warehouse-enabled, the field appears under the Project set in a Custom folder.
- If you add a custom field to the **Financials** object and it is Data Warehouse-enabled, the field appears under the Financials set in a Custom folder.
- If you add a custom field to the **Task** object and it is Data Warehouse-enabled, the field appears under the Task set in a Custom folder.
- If you add a custom field to the **Assignments** object and it is Data Warehouse-enabled, the field appears under the Assignments set in a Custom folder.
- If you add a custom field to the **Issues** object and it is Data Warehouse-enabled, the field appears under the Issues set in a Custom folder.
- If you add a custom field to the **Risks** object and it is Data Warehouse-enabled, the field appears under the Risks set in a Custom folder.
- If you add a custom field to the **Change Requests** object and it is Data Warehouse-enabled, the field appears under the Change Requests set in a Custom folder.

The custom fields and sub objects for the Investment and Project objects are not differentiated and appear randomly in a Custom set under the General set.

#### Resource Management Domain

The Resource Management domain includes investment, team, assignment, and task data from a resource perspective.

The domain includes data from the following objects:
- Resource
- Team
- Assignment

The custom attributes for these objects, any custom sub objects, and the attributes for the sub objects also appear in this domain.

The object data is further broken down into the following high-level sets of items: Resources, General, OBS, Investments, Financial, Weekly Periods, Calendar Periods, Fiscal Periods, Settings, Internal IDs.

**Custom Fields**:
- If you add a custom field to the **Resource** object and it is Data Warehouse-enabled, the custom field appears under the Resource set in a Custom folder.
- If you add a custom field to the **Team** object and it is Data Warehouse-enabled, the field appears under the Team set in a Custom folder.
- If you add a custom field to the **Assignment** object and it is Data Warehouse-enabled, the field appears under the Assignment set in a Custom folder.

If you have custom sub objects as children of the Investment or Resource objects, the sub objects appear as their own sets under the Custom folder in this domain.

#### Time Management Domain

The Time Management domain includes actual timesheets and missing time information for users who are managing timesheets or keeping time. The domain provides timesheet detail at the date worked level. The domain does not include any rolled up data. For summary timesheet data, see the Investment Management domain.

Timesheets that were never created appear under Missing Time. Missing time for existing timesheets appear under Time Sheets. The domain also includes incidents data.

> [!NOTE]
> If you are not using the Timesheets component of the product for timekeeping, you can see the domain fields but there will not be any data for the fields.

The domain data is broken down into the following high-level sets of items: OBS, Resources, Missing Time, Time Sheets, Internal IDs.

> [!NOTE]
> This domain does not include any custom objects or attributes.

### Manage User Interface (UI) Themes

The **Themes** folder is one of the repository folders in Jaspersoft that includes the default Classic PPM user interface themes. Each sub folder under the Themes folder corresponds to a default Classic PPM user interface theme. As a user with `ROLE_ADMINISTRATOR` privileges, you can view the default themes in the folders. You can set a user interface theme if necessary, but you cannot delete any of the default themes.

When the users access Advanced Reporting, the user interface theme in Jaspersoft changes to match the user interface theme setting in Classic PPM.

> [!NOTE]
> The "default" user interface theme folder always appears highlighted in Jaspersoft. For example, you set a Blue user interface theme in Classic PPM. Later, when you access Advanced Reporting, you get the look-and-feel based on the Blue user interface theme in Classic PPM. However, the "default" user interface theme folder appears highlighted in Jaspersoft. This behavior is true for all default user interface themes in Classic PPM.

> [!WARNING]
> When a user accesses advanced reporting, the selected user interface theme during that user session is saved as a profile attribute for that user in Jaspersoft. If the user interface theme changes later, the user must log out and back in to reflect the change in their profile attribute.

If a custom user interface theme is set in Classic PPM, this custom theme does not appear automatically in Jaspersoft. In addition, the custom theme is not automatically available to the out-of-the box reports or the ad hoc reports.

To display a corresponding custom theme in Jaspersoft and use it to display the out-of-the box reports and the ad hoc reports, complete the following tasks:
- Create a custom theme in Jaspersoft corresponding to the Clarity theme.
- Create a corresponding custom report style template for the out-of-the-box reports.
- Create a corresponding custom ad hoc report template for the ad hoc reports.

For more information about creating style templates, see the Jaspersoft Studio tutorials on the Jaspersoft community web site.

#### Create a Custom User Interface Theme

Create a custom theme in Jaspersoft corresponding to a custom theme in Classic PPM so the advanced reporting users can have a seamless experience.

> [!NOTE]
> We recommend that a person with adequate knowledge of style sheets edit the `.css` files to reflect the correct styles for a custom theme.

****Follow these steps:****

1. In Classic PPM, click **Home**, **Personal**, **Advanced Reporting**.
2. From the submenu, click **View**, **Repository** and inside your organization folder (for example, corporate), expand the **Themes** folder.
3. Right-click the `ca_ppm_default` folder and select **Download the Theme**. A zip file named `ca_ppm_default.zip` is downloaded to your local machine.
4. Open the zip file, edit the following style sheets based on your requirements, and zip the style sheets again into a new zip file (for example, `ca_ppm_modified.zip`):
- `overrides_custom.css`
- `overrides_ie8.css`
- `pageSpecific.css`
   Name the modified zip file anything that you want. Remember to include the `.css` files directly under the zip file.
5. In the Repository, right-click the **Themes** folder and select **Upload a Theme**.
6. In the pop-up window, complete the following fields:
- **Theme Name**: Defines the custom theme name. Follow the naming convention: `ca_ppm_<custom theme id in Clarity>` to name your custom theme. For example, if a custom theme in Classic PPM has the ID `aruba`, you can name the custom theme in Jaspersoft `ca_ppm_aruba`. Name your theme correctly in Jaspersoft. An incorrectly named theme does not work.
- **Select File (.zip)**: Specifies the zip file containing the style sheets for the custom theme. Browse and select the modified zip file that you created.
7. Click **Upload**.
8. Verify that a `ca_ppm_aruba` folder appears under the Themes folder. When you select this folder, all the `.css` files that are included in the folder appear listed.

#### Create a Custom Report Style Template

All reports refer to the styles included in the default report style template. Add new styles or modify the properties of the default report style template. Do not remove any of the predefined styles or change their names.

We recommend using Jaspersoft Studio to edit the `.jrtx` file to reflect the correct styles for a custom report style template.

> [!WARNING]
> To run the reports using a custom user interface theme, create a custom report style template. An error message appears if you try to run a stock report without creating a custom report style template.

****Follow these steps:****

1. In Jaspersoft Studio, connect to the JasperReports server from the Repository Explorer view. The repository folder structure opens in the Jaspersoft Studio application.
2. Expand the **Classic PPM** folder and navigate to the **Templates** folder.
3. Right-click the **Report Style Template (Default)** template and select **Download to File**. A file named `reportStyleTemplate_ca_ppm_default.jrtx` is downloaded to your local machine.
4. Rename the template file keeping the `reportStyleTemplate_ca_ppm_` prefix. For example, rename the template file to `reportStyleTemplate_ca_ppm_aruba.jrtx`.
5. In Jaspersoft Studio, right-click the **Templates** folder and select **New**. The Add Resource wizard appears.
6. Select **Template** and click **Next**.
7. In the pop-up window, complete the requested information. The following fields require explanation:
- **Name**: Defines the report style template name. Name the report style template anything that you want.
- **ID**: Defines the report style template ID. Follow the naming convention: `reportStyleTemplate_ca_ppm_<custom theme id in Classic PPM>` for your report style template ID. For example, if a custom theme in Classic PPM has the ID `aruba`, name the report style template ID in Jaspersoft as: `reportStyleTemplate_ca_ppm_aruba`.
8. Click **Next**. Click **Upload\Download Resource** and select **Upload from File System**.
9. Select the report style template file that you created on your local machine.
10. Verify that the new report style template appears under the Templates folder.
11. Right-click the new report style template and select **Open In Editor**.
12. Modify any styles by clicking the styles on the Styles node, in the Outline view, changing their properties, and saving.
13. Right-click the new report style template and select **Properties**. Do not select Open In Editor before uploading your new report style template. If you do, you can lose your changes.
14. Click **Upload\Download Resource** and select **Upload from Workspace**. The new report style template is available in Jaspersoft.

#### Create a Custom Ad Hoc Report Template

All ad hoc reports refer to the styles that are included in the default ad hoc report template. Add new styles or modify the properties of the default ad hoc report template. Do not remove any of the predefined styles or change their names.

We recommend that you use Jaspersoft Studio to edit the `.jrxml` file to reflect the correct styles for a custom ad hoc report template.

> [!WARNING]
> To run the ad hoc reports using a custom user interface theme, create a custom ad hoc template. An error message appears if you try to run an ad hoc report without creating a custom ad hoc report template.

****Follow these steps:****

1. In Jaspersoft Studio, connect to the JasperReports server from the Repository Explorer view. The repository folder structure opens in the Jaspersoft Studio application.
2. Expand the **Classic PPM** folder and navigate to the **Templates** folder.
3. Right-click the **Ad Hoc Report Template (Default)** JRxml and select **Download to File**. A file named `adHocReportTemplate_ca_ppm_default.jrxml` is downloaded to your local machine.
4. Rename the template file keeping the `adHocReportTemplate_ca_ppm_` prefix. For example, rename the template file to `adHocReportTemplate_ca_ppm_aruba.jrxml`.
5. In Jaspersoft Studio, right-click the **Templates** folder and select **New**. The Add Resource wizard appears.
6. Select **JRxml** and click **Next**.
7. In the pop-up window, complete the requested information. The following fields require explanation:
- **Name**: Defines the ad hoc report template name. You can name the ad hoc report template anything that you want.
- **ID**: Defines the ad hoc report template ID. Follow the naming convention: `adHocReportTemplate_ca_ppm_<custom theme id in Classic PPM>` to name your ad hoc report template ID. For example, if a custom theme in Classic PPM has the ID `aruba`, name the ad hoc report template ID in Jaspersoft as: `adHocReportTemplate_ca_ppm_aruba`.
8. Click **Next**. Click **Upload\Download Resource** and select **Upload from File System**.
9. Select the ad hoc report template file that you created on your local machine.
10. Verify that your new ad hoc report template appears under the Templates folder.
11. Right-click the new ad hoc report template and select **Open In Editor**.
12. Modify the styles by clicking the styles on the Styles node, in the Outline view, changing their properties, and saving.
13. Publish your changes to the server. The new ad hoc report template is available in Jaspersoft.

### Advanced Reporting and Database Link

As part of the Data Warehouse installation, a Database Link (Oracle) or a Linked Server (MSSQL) to the Classic PPM schema is created. The link lets you query the Classic PPM schema from the Data Warehouse schema.

> [!WARNING]
> If you do not use the Database Link (Oracle) or Linked Server (MSSQL) properly, system performance is impacted significantly. Do not use the links to query large volumes of data. If querying large volumes of data from the Classic PPM schema using a link, we recommend that you query the Classic PPM schema directly to get all the data instead of linking from the Data Warehouse. Test the performance of both before deciding on the best option.

Use the Database Link in Jaspersoft Studio reports through parameters. The following examples provide sample syntax for use with Oracle or MSSQL:

**Oracle Example:**

```sql
TABLE_NAME@$P!{dwhDBLink}
```

Where `TABLE_NAME` is the Classic PPM table or view name.

**MSSQL Example:**

```sql
[$P!{dwhDBLink}].$P!{dwhDBName}.niku.TABLE_NAME
```

Where `TABLE_NAME` is the Classic PPM table or view name.

### Improve Reporting Performance with Jaspersoft Governor Settings

The following Jaspersoft Governor settings ensure better reporting performance and relieve stress on the database:
- The governor limit on the Jaspersoft reports database connection has a timeout set to 15 minutes (900000 milliseconds). Report queries running longer than 15 minutes close and the user receives an error indicating the timeout. We recommend that users filter their report data so it runs within 15 minutes.
- By default, the governor limit on the Jaspersoft report pages is set to 500. The report output cannot exceed this limit. This limit applies to all output formats.

### Advanced Reporting User Parameters

Advanced Reporting lets you create ad hoc views of Classic PPM data, save the views as reports, display the reports on a dashboard, and run and schedule the reports. Advanced Reporting uses the Jaspersoft application to manage ad hoc views, reports, and dashboards. The reporting solution passes user parameters from Classic PPM to Jaspersoft. As an administrator or report developer, use these parameters to compare user properties in Jaspersoft for existing users with the properties in Classic PPM.

> [!WARNING]
> Manage user properties from Classic PPM. If you change user properties in Jaspersoft only, those user properties are overwritten with the properties set in Classic PPM the next time the user logs in to Advanced Reporting.

When a Classic PPM user accesses Advanced Reporting for the first time, the user is automatically created in Jaspersoft and certain parameters are passed to Jaspersoft. If you later update Advanced Reporting access rights for the user in Classic PPM, the corresponding roles for this user are automatically updated in Jaspersoft. Similarly, if you update certain user properties in Classic PPM, the corresponding Jaspersoft properties are also updated. The user status is also controlled from Classic PPM. For example, if a user is designated inactive or locked in Classic PPM, the user also becomes inactive or locked in Jaspersoft.

The following table shows how the user properties are mapped between the applications. These parameters are defined at the user level (that is, you have different parameter values for each user). You can use the information in this table to compare user properties in Classic PPM with the properties in Jaspersoft.

| Field | Classic PPM Example | Attribute Name | Jaspersoft Location | Parameter Type |
|-------|-------------------|----------------|-------------------|----------------|
| User Name | cuser | User ID | Properties | Native to Jaspersoft. Must populate from Classic PPM. |
| User Login Name | Carol User | User Name | Properties | Native to Jaspersoft. Must be populated from Classic PPM. |
| User Locale | en_US | Locale | Login | Native to Jaspersoft. Must be populated from Classic PPM. |
| User Time Zone | (GMT-05:00) Eastern Time | Time Zone | Login | Native to Jaspersoft. Must be populated from Classic PPM. |
| User Email Address | caroluser@mail.com | Email | Properties | Native to Jaspersoft. Must be populated from Classic PPM. |
| User Language | en | ppmUserLanguage | Profile Attribute | Custom attribute. Must be populated from Classic PPM to Jaspersoft. |
| UI Theme | default | ppmUserUITheme | Profile Attribute | Custom attribute. Must be populated from Classic PPM to Jaspersoft. |

## Data Warehouse Table Naming Conventions

The Data Warehouse schema uses the prefixes in the following table in its table naming convention.

| Prefix | Table Description |
|---|---|
| DWH_CFG | Configuration tables that are used to supply log and audit information |
| DWH_CMN | Common database objects that are used across most areas |
| DWH_CMP | Company database objects |
| DWH_FIN | Financial management database objects |
| DWH_INV | Investment management database objects |
| DWH_LKP | Lookup database objects |
| DWH_META | Metadata tables that help determine the DWH structure |
| DWH_ODF | Customer-specific database objects |
| DWH_PFM | Portfolio management database objects |
| DWH_RES | Resource management database objects |
| DWH_RIM | Risk and Issue management database objects |
| DWH_TME | Time management database objects |
| DWH_X | Internal database objects that are used to help populate the fact tables |

### Data Warehouse Static Lookup Standards

In the Data Warehouse, each lookup has its own table. The lookup values are stored separately in the selected languages for the Data Warehouse. For example, if the Data Warehouse is stored in English and Spanish, two records exist for each lookup value.

The following table shows the structure of a static lookup in the schema.

| Column | Data Type | Description |
|---|---|---|
| `[LOOKUP_NAME]_key` | number or varchar(30) | The key value of the lookup. If the hidden key in Classic PPM is lookup_enum, the key in the Data Warehouse is populated with the lookup_enum. Same for lookup_code. Example: `investment_status_key`. |
| `LANGUAGE_CODE_KEY` | number | Number ID from the Classic PPM languages table. |
| `LANGUAGE_CODE` | varchar(30) | Unique language code from the Classic PPM languages table. |
| `[LOOKUP_NAME]` | varchar(255) | Descriptive name of the lookup; for example: `investment_status` |
| `SORT_ORDER` | number | The order in which the user wants to see the values |
| `IS_ACTIVE` | number | Indicates whether the current lookup value is active |
| `CLARITY_UPDATED_DATE` | date | The last time the record was updated in Classic PPM. |
| `DW_UPDATED_DATE` | date | The last time the record was updated in the Data Warehouse. |

### Data Warehouse Dynamic Lookup Standards

Each dynamic lookup has its own table. Each table structure can be different depending on the lookup. If the lookup is language-dependent, the `language_code_key` and `language_code` are stored. Otherwise, there is one record for each value.

The following table shows the structure of a dynamic lookup in the schema.

| Column | Data Type | Description |
|---|---|---|
| `[lookup_name]_key` | ... | The key value of the dynamic lookup. The value depends on the NSQL hidden value. |
| `Language_code_key` | number | Number ID from the Classic PPM languages table, if applicable. |
| `Language_code` | varchar(30) | Unique language code from the Classic PPM languages table, if applicable. |
| `[lookup_name]` | ... | Descriptive name of the lookup. Example: `investment_status`. |
| ... | ... | Miscellaneous columns specific to the lookup. |
| `Clarity_updated_date` | date | The last time the record was updated in Classic PPM. |
| `DW_updated_date` | date | The last time the record was updated in the Data Warehouse. |

### Data Warehouse Fact Tables

In the data warehouse, fact tables use the following conventions:
- Fact table names end with the suffix `_FACTS`.
- Tables with `_PERIOD_` in the name store facts by defined periods.
- Tables with `_SUMMARY_` in the name store summarized facts. Summary tables exist for many of the facts. If you are matching summary numbers to period facts, qualify the period facts by a period type.
- Tables with a `DWH_X_` in the name are internal fact tables. These tables are used to populate the period and summary fact tables in the most efficient way. These tables are not available to users.
- The fact table keys all have referential integrity.
- Calculated facts are stored in the tables for consistency.
- Summary rollups exist in the Data Warehouse. Assignments roll up to tasks and tasks roll up to assignments.
- Hidden time slices aggregate the data into weekly, monthly, and fiscal periods.

The following table includes examples of fact tables.

| Fact Description | Fact Table Name | Aggregation |
|---|---|---|
| Financial Transaction | `DWH_FIN_TRANSACTION_FACTS` | Daily |
| Time Entry | `DWH_TME_ENTRY_FACTS` | Daily |
| Financial Benefit | `DWH_FIN_BENEFIT_PERIOD_FACTS` | Fiscal |
| Financial Plan | `DWH_FIN_PLAN_PERIOD_FACTS` | Fiscal |
| Task Assignment | `DWH_INV_ASSIGN_PERIOD_FACTS` | Fiscal, Weekly, Monthly |
| Investment Task | `DWH_INV_TASK_PERIOD_FACTS` | Fiscal, Weekly, Monthly |
| Investment Team | `DWH_INV_TEAM_PERIOD_FACTS` | Fiscal, Weekly, Monthly |
| Investment | `DWH_INV_PERIOD_FACTS` | Fiscal, Weekly, Monthly |
| Resource | `DWH_RES_PERIOD_FACTS` | Fiscal, Weekly, Monthly |

The following four period types are used for storing facts:
- Daily
- Weekly
- Monthly
- Fiscal Period

#### Summary Fact Table Names

The following table includes examples of summary fact table names.

| Fact Description | Fact Table Name |
|---|---|
| Financial Benefit | `DWH_FIN_BENEFIT_SUMMARY_FACTS` |
| Financial Plan | `DWH_FIN_PLAN_SUMMARY_FACTS` |
| Task Assignment | `DWH_INV_ASSIGN_SUMMARY_FACTS` |
| Investment Task | `DWH_INV_TASK_SUMMARY_FACTS` |
| Investment Team | `DWH_INV_TEAM_SUMMARY_FACTS` |
| Investment | `DWH_INV_SUMMARY_FACTS` |

### Data Warehouse Query Example

The Data Warehouse queries are simpler than the queries against the Classic PPM transactional database in the following ways:
- No need to join to lookup tables.
- The joins between tables are consistent. The key is always the resource ID.
- The column names are consistent between tables.
- The table names are named according to a standard naming convention.

The following example shows a new team query.

```sql
SELECT i.investment_manager, i.investment_name, t.resource_name, t.role_name,
       tl.booking_status, tl.request_status, p.period_start_date,
       tf.alloc_hours, tf.alloc_cost
FROM dwh_inv_team t
  INNER JOIN dwh_inv_team_ln tl ON t.team_key = tl.team_key
  INNER JOIN dwh_inv_investment i ON t.investment_key = i.investment_key
  INNER JOIN dwh_inv_team_period_facts tf ON t.team_key = tf.team_key
  INNER JOIN dwh_cmn_period p ON tf.period_key = p.period_key
WHERE SYSDATE BETWEEN p.year_start_date AND p.year_end_date
  AND p.period_type_key = 'MONTHLY'
  AND tl.language_code = 'en'
```

### Referential Integrity

To improve data accuracy, tables use primary and foreign keys.
- Language tables (ending in `_ln`) have foreign keys to the master table.
- Fact tables have foreign keys to the master tables.
- Foreign key constraints end with `FK1`.
- Primary key constraints end with `PK`.

This convention reduces errors and eliminates orphan records (detail records without a header). When a record gets deleted, any records in other tables that have a foreign key to the current record are automatically deleted.

## Configure OData Access to the Data Warehouse (SaaS Only)

SaaS customers can access the data warehouse and develop analytics dashboards and reports using REST (OData) endpoints. A Data Warehouse OData Service server in the Classic PPM environment connects to the data warehouse and exposes OData endpoints for data warehouse entities. As a report developer or business user, you can use a business intelligence tool (for example, Microsoft Power BI or Tableau) to access the OData endpoints. Using the OData endpoints as data sources, you can create your own dashboards and reports.

**Topics in this section:**
- Provide Access to the Data Warehouse OData Service
- Access OData Endpoints Using Clarity Credentials
- Support for Clarity API Keys to Access OData
- Enable Custom Content for the Data Warehouse
- Refresh the OData Endpoints
- Verify the OData Connection
- Connect Your BI Tool to the Data Warehouse OData Service
- Connect to OData Using Microsoft Power BI Desktop
- Using OData with Custom Scripts
- Connect to OData Using Microsoft Excel
- Connect to OData Using Tableau Desktop
- Implement Row Level Security for BI Reports
- Supported Clarity Data Warehouse Functions

### Provide Access to the Data Warehouse OData Service

As a system administrator, open the OData Service page to view the OData v2 or v4 endpoint URLs. Provide the URL and OData authentication string to your report users. Using their Classic PPM credentials, report users can configure their BI tool to connect to the OData service.

****Follow these steps:****

1. To access the data warehouse using OData, verify that you are using the SaaS edition of Clarity 15.4 or higher.
2. Log in to Classic PPM.
3. Click **Administration**, **Organization and Access**, **Resources**.
   a. Grant the **Data Warehouse OData Service - Navigate** access right to the administrators responsible for managing access to the OData connection. With this right, administrators can open the Data Warehouse OData Service page in the next step.
   b. Grant **OData - Access** to access Clarity OData and act on behalf of other users as a trusted connection.
4. Click **Administration**, **General Settings**, **Data Warehouse OData Service**. The following information appears:
- **Data Warehouse OData v2 EndPoint URL** - Defines the OData URL for the Classic PPM 15.4 or newer instance which exposes the data warehouse to the customer. Use this URL for external authentication with OData v2. Example: `http://<host:port>/api/odata/ppm_dwh_datasource_v2`
- **Data Warehouse OData v4 EndPoint URL** - Defines the OData URL for the Classic PPM 15.4 or newer instance which exposes the data warehouse to the customer. Use this URL for external authentication with OData v4. Example: `http://<host:port>/api/odata4/ppm_dwh_datasource_v4`
- **OData Authenticator** - Defines the qualifier to use when accessing the OData endpoints with Classic PPM user credentials.
5. Share the OData URL (v2 or v4) and the authentication string with the report developers and users so they can access the OData endpoints.

### Access OData Endpoints Using Clarity Credentials

With the necessary access rights and their Classic PPM credentials, report users can access the OData service.

****Follow these steps:****

1. As a Classic PPM administrator, grant report users access to the OData endpoints as follows:
   a. For existing users, assign the **Data Warehouse OData Service - Navigate** access right.
   b. For new report users, create the users as resources in Classic PPM and assign the **Data Warehouse OData Service - Navigate** access right.
2. As a user with the necessary rights, access the OData service using your Classic PPM credentials as follows:
- Enter the user name suffixed with a pipe symbol (`|`) followed by the OData Authenticator as follows: `<Clarity_USER>|<ODATA_AUTHENTICATOR>`. For example, if the Classic PPM Username is `PPMODataUser` and the OData Authenticator is `PPMOData`, then enter the following username: `PPMODataUser|PPMOData`.
- Enter the Classic PPM password.

> [!NOTE]
> Users cannot access the data warehouse OData endpoints using their SSO login. To allow access to the Data Warehouse OData Endpoint URL in these environments, complete the following steps:
> 1. Create specific report users in Classic PPM. You can re-use existing product users provided they do not have the **External Authentication** option checked in the resource properties under Administration. If the option is checked, create new report users.
> 2. Set up a password for these users in Classic PPM so that they can use it for accessing the Data Warehouse OData Endpoints.

### Support for Clarity API Keys to Access OData

The Enhanced OData API allows you to use both basic authentication and Clarity API Keys to authenticate users who can access the OData environment. You can use the following syntax:
- **Basic Authentication:**
- Username: `<Clarity Username>|<Odata-Authenticator>`
- Password: `<Password defined in Clarity>`
- **API Keys:**
- Username: `<API Client ID>|<Clarity Username>|<Odata-Authenticator>`
- Password: `<API Keys>`

> [!NOTE]
> - The enhanced API works with OData v2 and v4.
> - All the rules associated with API Keys such as key expiration will be applied.
> - Existing OData access right is still needed to access OData.
> - Administrators will need to enable APIs in their environment and create an API Client that end-users should use to generate API keys.
> - When refreshing non-production from a production environment the API keys for the non-production environment will be overwritten with the production values as the API keys are stored in the database.

**Upgrade Impact:** After you upgrade to this release, you will be able to use the API Keys feature for OData authentication. Ensure you are using OData v2 or v4.

To learn more about API Keys, see Authentication and Keys.

### Enable Custom Content for the Data Warehouse

Any data that you want available in the Data Warehouse, you must first add them in the product. Also, you must specifically enable the data for the Data Warehouse. For example, to view your custom project attributes in reports, add the attributes to the Project object in Classic PPM Studio. Also, enable the attributes for the Data Warehouse by selecting the **Include in the Data Warehouse** checkbox. See Enable Custom Objects and Attributes for the Data Warehouse in the parent topic above (Configure the Data Warehouse and Advanced Reporting Domains).

### Refresh the OData Endpoints

As new tables and columns are added in the data warehouse, the OData endpoints can get outdated. Run or schedule the following jobs in the listed order to update the OData endpoints with latest changes from the data warehouse. This procedure ensures that your reports reflect the most current data available. See Jobs Reference for additional details about the jobs.

1. **Load Data Warehouse** - Run this job immediately after configuring Classic PPM for OData. The job copies the data from the Classic PPM tables and views to the data warehouse schema.
2. **Load Data Warehouse Access Rights** - The job extracts the access rights for investments and resources from the Classic PPM database and loads them into the data warehouse. Run the job anytime the user access rights are changed. Also, run this job after running the Load Data Warehouse job using the full load option.
3. **Refresh Data Warehouse OData Model** - Run this job only when there is a change to the data warehouse schema such as a new object or attributes. The job creates the OData endpoints for both v2 and v4 based on the data warehouse schema. The OData connector can use the endpoints for report building. Run the Refresh job at least once after configuring Classic PPM for OData.

> [!NOTE]
> Read-only user access to the updated data warehouse can vary due to the sequence of required load and refresh jobs. The full sequence of updates can occur in a few minutes or up to two hours. For example, any new custom objects are loaded in Step 1 when you run the Load Data Warehouse job. Completely automated for you, a separate Refresh Grant database job creates and updates permissions and synonyms for these new database objects, now in the data warehouse. The automated Refresh Grant database job is scheduled to run every 2 hours. Your new custom objects are not visible as OData endpoints for reporting tools until the Refresh Grant job has completed and you have run the Refresh Data Warehouse OData Model job again.

### Verify the OData Connection

Complete the following steps to verify that you are connected to the OData service.

1. Open a web browser.
2. Depending on your OData version (v2 or v4), copy and paste the OData End-Point URL that you noted from Classic PPM.
3. Enter the username and password for accessing the OData service and try to connect.
- If the connection is successful, you see an XML formatted OData output.
- If you do not see this output, contact Broadcom Support.

### Connect Your BI Tool to the Data Warehouse OData Service

As a report developer, connect your existing BI tool to the OData data source. The OData objects are exposed and you can start building reports for your end users.

The procedures in this section are only recommendations. Refer to the documentation for your specific BI tool for configuration instructions on the following tasks:
- Connect and build reports using OData feed.
- Retrieve only sample data when establishing an OData connection.
- Retrieve limited data when building reports to improve performance.

Work with your BI tool administrator to resolve any connection issues that you may encounter.

### Using OData with Custom Scripts

Developers can implement custom scripts that automatically retrieve specific metrics and dimensions from Clarity, process this data according to business requirements, and integrate it with other data sources to create comprehensive analytical datasets. Some key points to remember are:
- Ensure that you use the `$top=100` parameter to reduce dataset processing time during test runs by limiting payload sizes. Retrieving the full dataset in testing environments will create computational overhead.
- XML pagination link example:
  ```xml
  <link rel="next" href="https://<ClarityHostName>/api/odata/autobotssamlds/DWH_INV_INVESTMENT?%24id=913ab781f8d54af4b3c8623d1e79e257&%24page=1"/>
  ```
- JSON pagination link example:
  ```json
  "@odata.nextLink": "https://<ClarityHostName>/api/odata4/autobotssamldsV4/DWH_INV_INVESTMENT?%24id=02828ebc93e54d3ca2cb32cbf4d1b71b&%24page=1"
  ```

### Connect to OData Using Microsoft Power BI Desktop

If you are currently using Power BI, follow these high-level steps to connect to OData.

****Follow these steps:****

1. From the Power BI main menu, select **Get Data**, **OData Feed**.
2. In the OData Feed window, enter the Data Warehouse OData End-Point URL (v2 or v4) that you noted from Classic PPM.
3. Click **OK**.
4. Select **Basic**.
5. Enter the username and password that you noted from Classic PPM for accessing the OData service.
6. Click **Connect**. On a successful connection, you see a list of data warehouse tables that you can use to build your reports.

### Connect to OData Using Microsoft Excel

> [!WARNING]
> Clarity exposes OData and you can use third-party tools like Microsoft Excel to consume OData. However, Clarity does not officially support any OData consumption with any third-party tool. You can use the information provided in this knowledge base article to connect to OData using Microsoft Excel.

> [!NOTE]
> We do not recommend Excel for reporting. For building reports, we recommend that you use a reporting tool such as Power BI. Power BI renders the data faster using caching and offers better data security and control. Excel provides no convenient way to map the report users to the Classic PPM users.

### Connect to OData Using Tableau Desktop

When connecting to OData using Tableau, you must specify individual OData entities (tables).

1. Under **Connect**, **To a Server**, select **OData** as the data source.
2. In the OData window, in the **Server** field, enter the Data Warehouse OData End-Point URL (v2 or v4) that you noted from Classic PPM. Use the following format: `http://<host>:<port>/api/odata/datasource/<entity>` where `<entity>` specifies the name of the data warehouse table.
3. Select **use a specific username and password**. Specify the username and password for accessing the OData service.
4. Click **Sign in**.
5. Repeat the steps in this procedure to connect to additional data warehouse tables.

> [!NOTE]
> OData v4 is not supported by Tableau; it supports only v2. Microsoft Power BI supports both.

### Implement Row Level Security for BI Reports

> [!WARNING]
> Work with your information security organization to review the data access and storage information. Determine the compatibility of the information with your data security standards. Data Warehouse OData Service does not leverage the users, groups, or OBS security model available in Classic PPM. Your BI report developer can use the data warehouse security tables to restrict the data visible to the report users.

Before your users generate reports, implement row-level security to secure the data. Enable investment and resource row level security in the BI reports. Only the relevant resources and investments are visible to the end-users based on their access rights.

**Example:** User A has access to investment 1 and investment 2. User B has access to investment 1 and investment 4. When User A logs in to their reporting environment, the investment reports show only the rows for investments 1 and 2. User B sees only rows for investments 1 and 4.

To enable row level security for reports, use the **BI User ID** attribute to map the Classic PPM users to the report users in your BI tool. The BI User ID attribute is included in the Resource object and installed by the PMO Accelerator. See Install the PMO Accelerator add-in. The attribute is not configured to appear in the resource views by default. Also, the attribute is enabled for the data warehouse by default. However, the **Include in Data Warehouse** option is not selected and is read-only for the security attribute.

#### Configure Row-Level Security in Clarity

Complete the following steps in Classic PPM as an administrator:

1. Configure the resource views to add the **BI User ID** attribute. See Clarity Studio Objects and Attributes for details.
2. Populate the **BI User ID** attribute value for all report users with their BI security login value. For example, map the Classic PPM user (User A) to the BI User ID value, `userA@<company_name>.org`.

#### Configure Row-Level Security in Your BI Tool

> [!NOTE]
> 1. Report developers using any BI tool can use the Data Warehouse security to implement row-level security as described by their vendors. The following procedure provides high-level generic steps using Power BI as an example. Refer to your BI tool documentation for instructions about implementing row-level security in your BI tool. For example, see the Microsoft Power BI Documentation for instructions about implementing row-level security in Power BI to restrict access to reporting data.
> 2. To populate BI User ID to `DWH_INV_SECURITY_V` and `DWH_RES_SECURITY_V`, run the **Load Data Warehouse Access Rights** job.

****Follow these steps:****

1. Load the following tables in the Power BI Desktop to populate the report data:
- **DWH_INV_INVESTMENT** - If you are reporting on investments, the table populates the investments data. This table is commonly used with the investment security. Depending on the use case, you can also use other tables containing the investment key.
- **DWH_RES_RESOURCE** - If you are reporting on resources, the table populates the resource data. This table is commonly used with the resource security. Depending on the use case, you can also use other tables containing the resource key.
- **DWH_INV_SECURITY_V** - The view populates the access rights information for investments. The view includes the `BI_User_ID` column which is the user ID of your BI tool and it reflects the value as populated in Classic PPM.
- **DWH_RES_SECURITY_V** - The view populates the access rights information for resources. The view includes the `BI_User_ID` column which is the user ID of your BI tool and it reflects the value as populated in Classic PPM.
2. Create relationships between the tables and views.
3. Define a where condition to restrict the data to a specific user. For example, in Power BI, navigate to **Modeling**, **Manage Roles**, **Create Role**, and create a DAX expression on the BI_User ID attribute as shown below:
   ```
   [BI_USER_ID] = USERNAME()
   ```
4. Save and publish the report.

### Supported Clarity Data Warehouse Functions

The following data warehouse functions are supported in OData v4:
- `DWH_CAL_CURRENT_DATE_FCT`
- `DWH_CAL_DATE_ADD_FCT`
- `DWH_CAL_DATEDIFF_FCT`
- `DWH_CAL_DATEFORMAT_FCT`
- `DWH_CAL_DATELABEL_FCT`
- `DWH_CAL_DIFF_IN_SECONDS_FCT`
- `DWH_CAL_END_OF_MONTH_FCT`
- `DWH_CAL_PERIOD_START_FCT`
- `DWH_CAL_STARTDATE_FCT`
- `DWH_CAL_TRUNC_DATE_FCT`
- `DWH_CHART_COLOR_MAP_FCT`
- `DWH_CONVERT_CURRENCY_FCT`
- `DWH_DAYS_LATE_PCT_FCT`
- `DWH_DISPLAY_MAPPING_FCT`
- `DWH_GET_RETAIN_PRECISION_FCT`
- `DWH_INV_REMAINING_ALLOC_FCT`
- `DWH_NULL_DATE_FCT`
- `DWH_NULL_NUMBER_FCT`
- `DWH_NULL_VARCHAR_FCT`
- `DWH_START_DAYS_LATE_FCT`
- `DWH_START_DAYS_LATE_PCT_FCT`
- `DWH_TO_CHAR_FCT`

OData v4 functions are supported; however, the following exceptions are **not** supported:
- Function imports
- Functions that return primitive types
- Functions that return complex types or entities
- Functions that are bound to entities
- Functions with OUT or INOUT parameters
- Functions with parameter aliases
- Functions invoked by the OData `$filter`, `$select`, or `$orderby` options
- Functions invoked by parameter values including URL query parameters
- Built-in functions
- Overloaded functions
- Unbound functions (static operations)

> [!NOTE]
> RU views such as `DWH_INV_TEAM_RU_PER_FACTS_M_V` are not exposed as OData.

OData v2 does not support any functions. Even the data warehouse functions are not supported by v2.

> [!NOTE]
> See Clarity Advanced Reporting and Database Schema Index for more information.

## Configure Secure Authentication, User Accounts, and Passwords

Configure a password policy, lock or unlock users, and reset passwords. Managing authentication is an important part of your security policy. As an administrator, you want to prevent unauthorized users from accessing system resources or sensitive information.

Use the following global user account options to configure session and password behavior for all users:

### Session Options

You can limit the number of invalid login attempts and specify how long user sessions can remain inactive before logging users out. For example, set a value of 3 for the number of times a user can enter an invalid login and set the minutes of inactivity to 30.

### User Account Status Options

Specifies the status of one or more users as Active, Inactive, or Lock. For example, a user takes a leave of absence. You can set their status to Inactive. Inactive users cannot log in and managers cannot assign them to investments. When the user returns, set their status to active again.

### Password Options

You can adjust the following default password policy rules:
- The password and user name cannot be the same.
- Minimum password length is eight characters including a minimum of one uppercase, one lowercase, one numeric, and one special character.
- You can reuse a password, but only after it meets certain conditions. For example, you can reuse a password after allowing 60 days and after assigning four other consecutive unique passwords.

You can also overwrite the default password policy rules by selecting the **Custom Expression** option and specifying your own regular expression for a password.

**Topics in this section:**
- Review the Prerequisites for Managing Authentication
- Configure General Session Limits
- Configure General Password Options
- Set the Status of a User Account
- Reset a User Password
- Force a User to Reset Their Password
- Force All Users to Reset Their Passwords

### Review the Prerequisites for Managing Authentication

As an administrator, you manage authentication for users. A resource represents a user who performs work in the application for one or more investments. Resources are added to investment teams by their resource or investment manager.
- To view users, accounts, passwords, and access rights, click **Administration**, **Organization and Access**, **Resources**.
- To view resources, skills, allocations, calendars, click **Home**, **Resource Management**, **Resources**.

For example, a resource is assigned to several tasks in two investments. This person logs in weekly (as a user) to complete their timesheet (as a resource). The user forgets their password and requests a reset. You reset their password by updating the Resource page under the Administration menu.

As an administrator, to complete the procedures in this article, complete the following prerequisites:
- Assign yourself the following access rights:
- Administration - Access
- Administration - Application Setup
- Administration - Authorization
- Administration - Resources
- Resource - Edit - All
- Click **Administration**, **Organization and Access**, **Resources** and create one or more users.
- Ensure that users set their Web browsers on their client PCs to accept cookies for session tracking.

### Configure General Session Limits

Specify the limits for all user sessions to prevent access by unauthorized users. For example, define how many times a user can enter an invalid password before being locked out.

****Follow these steps:****

1. Click **Administration**, and from **General Settings**, click **System Options**.
2. In the **Session Options** section, complete the following fields and save your changes:
- **Invalid Login Limit** - Defines the maximum number of consecutive login attempts before locking the user account. Enter a number higher than 0 to enable this option. Limits: 0-99. Default: 0 (Disabled)
- **Minutes Of Inactivity Until Logout** - Defines the idle minutes before changing the status of a user to Lock. Enter 0 to disable the option. Limits: 0-999. Default: 60 (Enabled). We recommend that you synchronize the following timeout settings. If you do not synchronize the timeout settings for all the applications, then the setting with the lowest timeout overrides the other settings.
- **Jaspersoft User Session Timeout** - Impacts Advanced Reporting users. To change the Jaspersoft user session timeout, see the Jaspersoft Server documentation on the Jaspersoft Community. By default, the Jaspersoft User Session Timeout is set to 70 minutes.
- **Single Sign-On (SSO) User Session Timeout** - Impacts users who are using SSO with the product. The SSO system can use a session timeout that expires the product user session.

### Configure General Password Options

Configure password options to help ensure that unauthorized users cannot easily identify passwords. For example, you can set a rule that passwords have at least eight characters with at least one capital letter and one numeric value.

****Follow these steps:****

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Change Password Options** section, select a value for the **Password Rules** field. You can manage password rules by **Policy** or by **Custom Expression**.
3. To set password rules by policy, click **Policy** and enter values for the minimum password length, uppercase, lowercase, numeric and special character requirements. For **Minimum Password Length**, enter the minimum number of characters between 5 and 40 for a password. The application prompts users to change their passwords if they violate a rule.
4. To set password rules by expression, click **Custom Expression** and define an expression string for all passwords in the **Regular Expression** field. The password that a user creates must comply with one or more of the following character values:
- `^` -- Indicates the beginning of the expression.
- `(?=.*[a-z])` -- Any lowercase alphanumeric characters are allowed.
- `(?=.*[A-Z])` -- Any uppercase alphanumeric characters are allowed.
- `(?=.*[~'!@#$%^&*)(-+=])` -- Any special characters are allowed.
- `.{min,max}$` -- The required password length, where `min` indicates the minimum number of characters that are required and `max` the maximum. To indicate only the minimum length, omit the maximum number. To indicate only the maximum length, omit the minimum number. For example, enter `.{8,}$` to specify a minimum eight-character password.
- `$` -- Indicates the end of the expression.
5. For custom expressions, you can also set up a message in the **Error Message** field. Users who do not enter properly formatted passwords see the custom error message. For example: `Invalid password. Enter a valid password with at least 8 characters, 1 uppercase letter, and 1 number.`
6. To immediately enforce the new password policy, click **Force Password Change**. The application forces all users to change their password during the next login.
7. Save your changes.

**Expression Example:** Set a rule that specifies a password can include any lowercase or uppercase alphanumeric or special characters, and must be 8-16 characters in length.

```
^(?=.*[a-z])(?=.*[A-Z])(?=.*[~'!@#$%^&*)(-+=]).{8,16}$
```

### Set the Status of a User Account

Use the resource **Status** property to specify whether a user can log in and can access the application.
- When a resource is set to **Active**, they can log in, and investment managers or resource managers can add them to investments.
- When a resource is set to **Inactive**, they cannot log in. However, inactive resources can still be added to investments via the Staff module in Clarity. This is possible because the Add Staff action uses the Resource workspace grid, which allows the selection of inactive resources.

> [!NOTE]
> Allocating inactive resources to investment provides flexibility for users to add newly created resources that are initially set to inactive. If you want to restrict this behavior, revoke Booking Rights for inactive resources. Clarity will then prevent unauthorized users from adding them to investments. Please refer to the Knowledge Base article for more information.
- When multiple failed login attempts occur, Clarity automatically locks the user account to prevent continued access attempts. Administrators can unlock and reactivate accounts if needed.

You can change access for one or more users at a time.

> [!NOTE]
> If LDAP is running, you can change the status of only one user at a time. For more information about authentication and LDAP, see the Installation content or contact your LDAP administrator.

****Follow these steps:****

1. Click **Administration**, **Organization and Access**, **Resources**.
2. Select one or more resources and click one of the following buttons:
- **Activate** - Activates one or more users so that they can be added to investments.
- **Deactivate** - Deactivates one or more users, prevents them from logging in, and prevents investment or managers from adding them as resources to investments.
- **Lock** - Locks one or more users and prevents them from logging in.
3. Save your changes.

> [!TIP]
> Before Release 15.3, a user received confirmation on the Login page when they locked themselves out of their account by entering the wrong password too many times. The following message appeared:
> `CMN-10003: Invalid login information. Your account has been locked.`
> In 15.3 and higher, as a security best-practice, the following message appears:
> `CMN-01002: User name and password invalid. Note that the password is case-sensitive.`
> As is often the case with security issues, the change represents a trade-off. Unauthorized attempts or forced lockouts no longer result in the unintended confirmation of the user account identity. However, users no longer know for certain when they have exceeded an Invalid Login Limit, locking their account.

### Reset a User Password

Reset a user password when the user has lost or compromised their password. For example, if a user forgets the password, you can provide a temporary password. The user can then change it during the next login. Due to failed authentication attempts, a user can find themselves locked out of the application. As an administrator, you can reactivate them, assign a new temporary password, and then force the user to define a new password during their next login.

> [!NOTE]
> If you use LDAP for authentication, use LDAP to manage password resets. For more information about authentication and LDAP, see the Installation content or contact your LDAP administrator.

****Follow these steps:****

1. Click **Administration**, **Organization and Access**, **Resources**.
2. Open a resource.
3. Enter a temporary password in the **Password** and **Confirm Password** fields.
4. Send the user an email message with the temporary password.
5. To ensure that the user resets the temporary password during their next login, select the **Force Password Change** check box.
6. Save your changes.

### Force a User to Reset Their Password

Force a user to reset their old password with a new password when their credentials have become compromised.

> [!NOTE]
> If you use LDAP for authentication, use LDAP to manage password resets. For more information about authentication and LDAP, see the Installing and Upgrading content or contact your LDAP administrator.

****Follow these steps:****

1. Click **Administration**, **Organization and Access**, **Resources**.
2. Open a resource.
3. Select **Force Password Change**.
4. Save your changes. During their next login, the user must authenticate with their current credentials before choosing a new password.

### Force All Users to Reset Their Passwords

You can prompt all users to reset their passwords the next time they log in. For example, as part of a security policy change, you increase the password character length from six to eight characters. After the change, you can force all users to change their passwords to meet the new requirement.

****Follow these steps:****

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Change Password Options** section, click **Force Password Change**.
3. Save your changes.

## Configure User Accounts, Skills, and Access Rights

As an administrator, you can configure user accounts and access rights. When you create an account for a new user, their resource manager can open their matching resource profile. Typically, you create the user account and a resource manager continues to define the properties for that user as a labor resource. As an administrator, you can also define skills in a formal hierarchy.

**Topics in this section:**
- Create a New User (Resource)
- (SaaS only) Change the Email Address for an On Demand Portal User
- Change the Status of a Resource
- Add Skills for a Resource
- Video: Build a Skills Hierarchy
- Scope of Access Rights
- Enable and Disable OBS Access Rights
- Grant User Access Rights by OBS Unit
- Grant User Access Rights to Object Instances in OBS Units
- Grant Instance-Level Access Rights to a User

### Create a New User (Resource)

As an administrator, you can create new user accounts. These entries simultaneously serve as records for labor resources.

****Follow these steps:****

1. Click **Administration**, **Organization and Access**, **Resources**.
2. Click **New**.
3. Complete the fields on the page:
- **Last Name** - Defines the last name for the resource. On the personal information page, displays the last name.
- **User Name** - Defines the user name that the resource uses to log in. Limits: 80 characters.
- **Resource ID** - Defines the unique identifier for the resource. On list pages and in portlets, displays the ID of the resource.

> [!NOTE]
> The application uses the language that is selected for the computer operating system and browser to display the login window in the correct language. For example, you add a resource with a non-English native language and require a password change at first login. The window for the new password can appear in English, rather than the language selected by the resource. The information about a new resource, including language, is not stored until the initial login has been completed with the new password.
- **Email Address** - Defines the accurate email address for notifications and other communications with the resource.
- **External** - Specifies whether the resource works for an outside company.
- **Status** - Defines the status for the resource.
- **Active** (Default) - Activates and enables the resource for assignment to projects.
- **Inactive** - Deactivates and prevents the resource from being assigned to projects unless the filter is set to display inactive resources.
- **Lock** - Prevents the resource from logging in to Classic PPM.
- **Time Zone** - Defines the primary workplace time zone.
- **Locale** - Defines your work locale. The locale controls the number and date language formatting in the product. Default: English (United States)
- **Language** - Defines the language to use in the product. When the user clicks Help, if documentation is available in this language, it appears at docops.ca.com. Default: English

> [!NOTE]
> A change in the language can take a few minutes to reflect. You can wait or log in later to see the changes.
- **Home Page** - Defines your home page. Default: System Default or User Configured
- **Set to Current Timesheet** - Indicates if the home page is set to the current timesheet. The current timesheet is used for the most recent period, but not saved. Default: Cleared
- **Resource Manager** - Identifies the name of the resource that is designated as the resource manager. You can select a different resource manager, if necessary.
- **Screen Reader Optimized UI** - Determines whether the user interface is optimized so that a screen reader can better recognize the features. Select this check box for any visually impaired user who is using a screen reader. Default: Cleared
- **High Contrast Color Mode** - Determines whether a specific UI theme to assist color-deficient users is used. If selected, the user sees the High Contrast UI theme. Default: Cleared
- **Action Tracing** - Enables the diagnostic tracing of system actions for this resource (user). Use this feature under the direction of Broadcom Support. Tracing expires and reverts back to Trace Off after 5 days. When System Action Tracing is disabled at the system-level, this resource-level setting no longer applies. After enabling Action Tracing on the resource, the user will need to logout and login again. See the output file `app-trace.xml` in `<Clarity Home>/logs/`.
4. Click **Save and Continue**. The OBS and partitions page appears. The Organizational Breakdown Structures section displays the partition membership that belongs to a resource.
5. Click **Save and Continue**. The Groups page appears.
6. Click **Add** and select the groups to which this user belongs. Click the **Group** check box at the top of each field to select all groups on that page.
7. Click **Add** or **Add and Select More**. The group appears in the list.
8. Click **Continue**. The resource access rights page appears. The auto-assigned access rights for the user are:
- Resource - Self (Auto)
- User Favorites Menu - Edit
9. Open the Resource's **Access Rights** menu and click **Global**. The global access rights page appears. The global option gives you the most access rights to select.
10. Click **Add** and select the access rights to grant to this resource. Click the **Access Right** check box on the top of each field to select all access rights on that page.
11. Click **Add** or **Add and Select More**.

> [!NOTE]
> You cannot delete users (labor resources) because the system maintains their history to preserve referential integrity. If a user leaves your organization, you can lock their user account. If a user comes back, you can unlock their user account. If a user account defined as a labor resource leaves and comes back, we recommend creating a new resource record instead of reactivating the old one. Creating a new record preserves the history of the old record. Leave the old resource record in an inactive status.

### (SaaS only) Change the Email Address for an On Demand Portal User

In most environments, the email address for each user also serves as their username. You can change the email address for a single user. Contact Broadcom Support if you need to update the email address for many users.

1. Access the On Demand portal using tenant administrator privileges.
2. Open the control panel and click **users** in the portal navigation menu.
3. Locate the user that needs to be modified and click **Actions**, **Deactivate**.
4. Update the user record in each environment where the user with the changed email address has access.
   a. Log in to Clarity as an administrator with access rights to manage users.
   b. Click **Administration**, **Organization and Access**, **Resources**.
   c. Apply filters to search for the user. For Status, filter on All since the user is deactivated at this point in all Clarity instances.
   d. Open the user and clear the **External Authentication** check box.
   e. Save the user. The username is now editable.
   f. Edit the user name and email fields to the new email address. Enter the username in lowercase.
   g. Select the **External Authentication** check box and click **Save**. The user is still Inactive. Do not activate the user here; activation occurs in the On Demand portal.
5. Access the On Demand portal using tenant administrator privileges.
6. Open the control panel and click **users** in the portal navigation menu.
7. Locate the deactivated user. The old email address still appears.
8. Click **Actions** and select **Edit**.
9. Enter the new email address in the **Email Address** field.
10. Click on **Password** and enter password info.
11. Click **Save**.
12. Activate the user in the portal. Click **Actions**, **Activate**. The user is activated in the portal and in all assigned applications.

### Change the Status of a Resource

Creating a resource activates it by default. After you create a resource, it appears on the resource list even if you set the status to Inactive. Project managers can only assign a resource with an Active status to projects.

****Follow these steps:****

1. Open the resource. The properties page appears.
2. Complete the following information, and save:

   **Status** - Defines the status for the resource.
- **Active** - Activates and enables the resource for project assignments.
- **Inactive** - Deactivates and prevents the resource from being assigned to projects unless the filter is set to display inactive resources.
- **Lock** - Prevents the resource from logging in.

   Default: Active

### Add Skills for a Resource

Skills describe the talent that is used to complete project tasks, or investment-related talent that a resource has already processed. Examples of skills are Java, HTML, domain experience, and clerical. You can create individual skills, or optionally create a skills hierarchy for managers to select skills from a list as they work with resource profiles. When you organize skills into a hierarchy, you can quickly associate skills with a resource.

> [!NOTE]
> **Best Practice:** As you create skills, you can associate them to a parent skill. Create skills that appear at the top of the skill hierarchy first to select them as you create the lower-level skills. You can change but cannot delete skills.

****Follow these steps:****

1. Click **Administration**, **Data Administration**, **Skills Hierarchy**.
2. Click **New**.
3. Complete the following fields and save your changes:
- **Skill Code** - Defines the unique code that identifies the skill.
- **Active** - Specifies whether the skill is active or not. When active, users can use the skill. Default: Selected

### Video: Build a Skills Hierarchy

The following video is provided by Broadcom.

> [!TIP]
> To play this video in full screen, click the YouTube logo to the right of Settings at the bottom of the video.

### Scope of Access Rights

Access rights allow users access to features and functions. Learn here how to manage various levels of access rights and how to build and manage organizational breakdown structures (OBS). You can assign access rights to enable widespread access within the organization. You can also limit the scope of access for a specific object instance to a specific resource.

The following table describes the scope of access rights.

| Scope of Access Rights | Granted Using | Scope |
|---|---|---|
| All projects, reports, and resources instances | Access role | Broad |
| Projects, reports, and resources that belong to a specific OBS level | Access role | Broad |
| Projects, reports, and resources that belong to certain OBS units | Item-level access rights for a resource | Limited |
| Specific project, report, or resource instances | Item-level access rights for a resource or group | Very Limited |

### Enable and Disable OBS Access Rights

Enable access rights if the OBS requires managing access rights for objects, such as resources, pages, and investments. Disable access rights to delete the OBS.

OBS types automatically become access rights-enabled when associated with a financial entity. Once the OBS and entity association occurs, you cannot disable access rights.

****Follow these steps:****

1. Click **Administration**, **Organization and Access**, **OBS**. The organizational breakdown structure list page appears.
2. Select the check box next to each OBS to enable or disable access rights.
3. Click **Use for Access Rights** to enable, or click **Remove Use for Access Rights** to disable.
4. Click **Yes** on the confirmation page.

### Grant User Access Rights by OBS Unit

Grant resources who are members of an OBS unit access to specific object instances, to object instances in specific OBS units, or globally. For example, to grant a resource access to an object instance, use the OBS Unit: Instance Access Rights page. Enable the OBS for access rights.

****Follow these steps:****

1. Open the OBS type. The properties page appears.
2. Click **Units** and select the OBS unit to grant access.
3. Select one of the following from **Access Rights for Unit**:
- **Instance** - Grants access to specific object instances in the selected OBS unit.
- **OBS Unit** - Grants access to object instances in other OBS units.
- **Global** - Grants access to any object instance.
4. Click **Add**.
5. For instance access, do the following:
   a. Select the object to grant access and click **Next**.
   b. Select the check box for each access right to grant and click **Next**.
   c. Select the check box for each instance to access.
6. For OBS Unit access, do the following:
   a. Select the check box next to each access right to grant to the OBS and click **Next**.
   b. Select the OBS to grant the access right, its association mode, and OBS unit.
7. For Global access, select the check box next to each access right to grant globally, and click **Next**.
8. Click **Add**.

### Grant User Access Rights to Object Instances in OBS Units

****Follow these steps:****

1. Open the resource. The properties page appears.
2. Open the **Access to this Resource** menu, and click **OBS Unit**. The OBS units with access page appear.
3. Click **Add**. The step 1 of 2 page appears.
4. Filter the access rights that are meant for the resource, select the check box next to each access right to grant, and click **Add and Continue**. The step 2 of 2 page appears.
5. Select the OBS from the **Show OBS** list.

> [!NOTE]
> If the OBS is not listed, verify that at least one object is shared with Any Unit.

6. Select the default association mode:
- **Unit only** - Resource is granted rights to object instances in the selected OBS unit.
- **Default. Unit and descendants** - Resource is granted rights to object instances in the selected OBS unit and its descendants.
- **Unit and ancestors** - Resource is granted rights to object instances in the selected OBS unit and its ancestors.
- **Unit, descendants, and ancestors** - Resource is granted rights to object instances anywhere in the OBS.
7. Navigate to the OBS unit from which object instance rights are granted. Select the check box next to each OBS unit to grant the rights, and click **Add**.
8. Save the changes.

### Grant Instance-Level Access Rights to a User

You can give a resource instance-level access rights to a specific object, such as to a page or project.

****Follow these steps:****

1. Open the resource. The properties page appears.
2. Open the **Resource Access Rights** menu and click **Instance**. A list of instance rights that are associated with the user appears.
3. Click **Add**.
4. Select the object from the **Object** drop-down list and click **Next**.
5. Select the access rights that you want to assign to the user and click **Add and Continue**.
6. Select the specific instances that you want to give the user permission to access and click **Add**.

> [!NOTE]
> **More Information:**
> - Create Resources and Roles
> - Clarity User Accessibility Features

## View User Counts by License Type

Classic PPM assigns a license type to each named user to represent their consumption of product features and functionality. Access rights determine the license type that is assigned to each user. As an administrator, you do not assign license types to users. Instead, you assign access rights to each named user and those rights determine which license is applied to that user.

As an administrator, you have great control over the rights that you can assign to users at the instance, group, OBS, or global levels. The application can also automatically assign a right to a user based on the actions that you allow them to perform. For example, if you give a user the right to create a project, they will likely expect the right to view it later. See Clarity Access Rights Reference in the English edition of the documentation.

You can use the **License Information** page to view license information including the license types and the number of users who are assigned to each license. You can also view the Telemetry data that is generated by Classic PPM.

> [!TIP]
> The application associates a user with only one license type. As an administrator, you can adjust user access rights to change the total counts for each license type.

**Topics in this section:**
- License Types
- View License Information
- View User Count by License Type
- View Access Rights by License Type
- View User List by License Type
- View Agile Capitalization Teams
- View Telemetry Data
- Core Product License Functionality
- User Status
- Functionality by User License Type

### License Types

The application examines user access rights to classify each named user into one of the following license types:
- **Full** - Full use of the functionality and any licensed options. These users typically configure the application and can create object instances such as projects. They can manage portfolios, projects, and resources.
- **Restricted** - Functionality is limited. These users typically enter time, update tasks, and view information.
- **View Only** - Potentially unlimited viewing of information; however, typically viewing is limited.
- **Other** - The Other license type is used to associate users to other licensing that is not specific to the product.

If users have access rights that map to multiple license types, the highest license type prevails. For example, a user has the Project - Edit Assigned Tasks right (typically counted as a restricted license). That same user also has the Project Create right (a full license type). The application includes that user in the full license type count.

### View License Information

View the license Information to verify that your organization complies with your current Classic PPM licensing agreement. Use license information to accomplish the following goals:
- View the license types and the number of users who are assigned to each license.
- Determine if new licenses are required.
- Identify the types of users consuming certain license types to analyze why certain license types are used more than others.

You can view license information from the following portlets:
- **User Count by License Type** - Lists the number of licensed users for a particular license type.
- **Rights by License Type** - Lists all the access rights that are assigned to each license type for each user. Review the Rights by User portlet for specific users to determine what is inflating the total Full license count.
- **User List by License Type** - Lists the users and their details for a particular license type. Review the User List by License Type portlet to see if any users are incorrectly associated with the license type.
- **Rights by User** - Lists all the rights for each license type that is associated with a user.

The license information does not count inactive and locked users. You can install Classic PPM on the same instance with another Broadcom product. In multiple product environments, the license portlets show four license types (Full, Restricted, View Only, and Other). The license type is the highest in the license hierarchy.

### View User Count by License Type

You can view the number of licensed users and their license type from the License Information portlet.

****Follow these steps:****

1. Open **Administration**, and from **Organization and Access**, click **License Information**. The license information page appears.
2. Review the **User Count by License Type** portlet to get the user count for each license type.
3. Click each license type to view the list of resources that are assigned to the license type. The **User List by License Type** portlet shows each resource, their license, and their last login time.
4. Click each user to view the list of access rights that are assigned to that user. The **Rights by User** portlet lists all the rights that are associated with the users and their license types. The access rights list includes rights that are directly granted to the user through groups and OBS.

### View Access Rights by License Type

You can view the access rights that are assigned to each license type from the **Rights by License Type** portlet. You can use the list as a reference when granting access rights to end users.

****Follow these steps:****

1. Open **Administration**, and from **Organization and Access**, **License Information**. The license information page appears.
2. In the **Rights by License Type** portlet, view the access rights that are assigned to each license type. Sort the access rights list by each license type to view the associated rights.
3. Optionally, click the **Export to Excel** icon to export your results to an Excel spreadsheet.

### View User List by License Type

You can use the **View User List by License Type** portlet to review if any users are incorrectly associated with the license type. This portlet is not available in the default view of the License Information page.

****Follow these steps:****

1. Log into Classic PPM as an Administrator.
2. Select **Administrator**, **Portlet Pages**.
3. Filter and locate the **License Information** page.
4. Click the **License Information** page to open it.
5. Select the **Content** tab.
6. Click the **Add** button to add new content to the page.
7. On the title page, enter the name of the portlet you want to add.
8. Select the portlet and click the **Add** button to add it.

> [!TIP]
> You can use the **Add and Select More** button to add multiple portlets to a page.

9. Click the **Save** button to finalize your changes.
10. Open **Administration**, and from **Organization and Access**, click **License Information**. The license information page appears.
11. Review the information displayed in the portlet:
- **User Status** - Indicates the user's "Status."
- **Sub License Type** - Indicates the conditions that resulted in counting the user under the Restricted license type. This column will only have value when reviewing "Restricted" license count details. The following values will be displayed under this field:
- **User with restricted access:**
- All 'Active' users that have been granted 'Restricted' access rights without any 'Full' access rights are listed and counted in the portlet.
- If you have an 'Inactive' or 'Locked' Restricted user that does not have any Posted Timesheets or any Financial Transactions within the current calendar month, the user is not listed and not counted in the portlet.
- **User in transaction tables:**
- Any 'Inactive' or 'Locked' Restricted user that has any Financial Transactions within the current calendar month is listed and is counted in the portlet.
- Any 'Active' user granted 'View Only' access rights with any Financial Transactions within the current calendar month is listed as a 'Restricted' user and does not appear in that month's 'View Only' list.
- **User with Posted Timesheet:**
- Any 'Inactive' or 'Locked' Restricted user with posted timesheets within the current calendar month is listed and counted in the portlet.
- Any 'Active' user granted 'View Only' access rights with any Posted Timesheets within the current calendar month is listed as a 'Restricted' user and does not appear in that month's 'View Only' list.

> [!NOTE]
> Users will need to manually configure their view to include the above columns.

12. Click **Options** and use the export options to export the data in this portlet.

> [!NOTE]
> - Clarity will consider all auto-assigned rights as "View Only." The user license type changes from View Only to Restricted under the following conditions:
>   - Users are included in either the Clarity transactions or posted timesheets within the calendar month, regardless of their status.
> **IMPORTANT:** To enable this dynamic update of the License Type and Sub License Type, ensure you update the 'User List By License Type' item in Content Add-Ins. To learn more, see Install the APM Add-in Content Items.

> [!NOTE]
> - The following changes are updated while creating a new Clarity user:
>   - Clarity will no longer auto-assign Resource - Enter Time on the user instance.
>   - You can now view the following auto-assigned access rights for the newly created user:
>     - Resource - Self (Auto)
>     - User Favorites Menu - Edit
>   - The license type for these two access rights is View Only. So, the newly created user will only consume the View Only license type.

> [!NOTE]
> - The following changes are updated in Custom Sub-object License Type:
>   - A user with View access rights to a custom sub-object will continue to be tracked as "View Only" license type.
>   - A user with Create, Delete, Edit, and XOG access rights to a custom sub-object will be tracked as "Restricted" instead of "Full" license type.

> [!NOTE]
> You can perform the same steps to add the **Rights by User** portlet to the License Information page and review the information in the portlet.

### View Agile Capitalization Teams

The **Agile Capitalization Teams Summary** portlet provides details about each team configured for Agile Capitalization. It helps you monitor staffing levels, licensing limits, and integration readiness.

#### Prerequisites

Ensure the following setup is complete before viewing the Agile Capitalization Teams Summary portlet:
- Manually upgrade the **License Information** item from the Content Add-Ins page to display the Agile Capitalization Teams Summary portlet.
- Define Rally as the integration vendor on the Integrations page.
- Configure **Frictionless Cost Accounting Mapping** and **Rally Team for Frictionless Cost Accounting** for each team in the Team Investments workspace.

****Follow these steps:****

1. In Classic PPM, navigate to **Administration** > **License Information**.
2. Click **Agile Capitalization Teams**.

You will see the following details for each team:
- **Team Investment Name**
- **Team Investment ID**
- **Team Members Count**

> [!WARNING]
> Teams with more than 15 labor resources are considered overstaffed, based on the governor's limit for Agile Capitalization licensing. These teams are highlighted on the Agile Capitalization Teams page.

> [!NOTE]
> - Inactive teams are excluded from the Agile Capitalization Teams Summary.
> - Only labor-type resources are included in the Team Members Count. Roles and non-labor resources (for example, equipment) are excluded.

### View Telemetry Data

Telemetry is a capability that is integrated into Clarity to collect active user counts and minimal basic customer site information. No usage or other configuration data is collected. The **Telemetry Data Export** portlet allows you to view and export all the telemetry data that is saved in Classic PPM.

> [!NOTE]
> To learn more about Telemetry, see Configure General System Settings.

The Telemetry Data Export Portlet provides the following values:

| Name | Description | Source |
|---|---|---|
| **Collection Date** | Specifies the date on which telemetry data is collected | Generated by Clarity |
| **Site ID** | Specifies your organization's site ID that is listed on the Broadcom Support portal | As configured under system options by customers |
| **Product Version** | Specifies the version number of Clarity implemented in your organization | Generated by Clarity |
| **Product SKU** | Specifies the Stock Keeping Unit (SKU) of Clarity | Generated by Clarity |
| **Monthly Usage** | Specifies the count of active users in Clarity who have Full Function access, Restricted Function access, View Function access | Generated by Clarity |
| **PLA Enabled** | Specifies if your organization has opted to participate in the Subscription Portfolio License Agreement | As configured under system options by customers |
| **Instance ID** | Specifies the type of installation instance such as Development, Training, Business Unit, etc. | Generated by Clarity |
| **Domain ID** | Specifies the Primary App Service HTTP/HTTPs URL used to access Clarity | Generated by Clarity |
| **Chargeback ID** | Specifies the name or chargeback ID of a department associated with paying for Clarity usage in your enterprise | As configured under system options by customers |
| **SKU Description** | Specifies the description of the SKU of Clarity | Generated by Clarity |
| **Serial Number** | Specifies the customer's active contract number along with the line number for the specific license SKU for Broadcom SaaS customers | Generated by Clarity |

****Follow these steps:****

1. Click **Administration**, **Organization and Access**, **License Information**. The license information page appears.
2. Review the information in the portlet.
3. Click **Options** and use the export options to export the data in this portlet.

> [!NOTE]
> The Telemetry Data Export portlet is not configurable.

### Core Product License Functionality

The following key functionality is available in the core product license:
- Advanced Earned Value Management
- Advanced Reporting with Jaspersoft
- Application Portfolio Management
- Asset Portfolio Management
- Collaboration
- Configuration and Administration
- Demand Management
- Document Management
- Idea and Incident Submittals
- Idea-to-launch Management
- Integration through the XML Open Gateway
- Integration with Microsoft Project and Open Workbench
- Integration with Microsoft SharePoint
- IT Financial Management
- IT Service Portfolio Management
- PMBOK Best Practices Content
- PMO Best Practices Content
- PRINCE2 Best Practices Content
- Processes and Workflow
- Product Portfolio Management
- Program Management
- Project Financial Management
- Project Management
- Project Portfolio Management
- Requirements Planning
- Resource Management
- Unlimited Amount of Named Users Viewing Access

### User Status

Users are named and are non-concurrent. Below is the possible status of a user:

| Status | Description |
|---|---|
| **Active** | Users can log in to the Clarity application. |
| **Locked** | Users can be created in the system and assigned within the application under various places, such as project manager, task owner, etc. However, these users cannot log into the application. |
| **Inactive** | Users can be created in the system but cannot be assigned to anything, and cannot log in to the application. |

#### How Do We Calculate the User License Types Within Clarity?

Based on the following conditions, the Clarity User will be counted as Full/Restricted/View License Type:

| Sl. No. | User Status | What Is the Highest License Type Assigned to the User? | Is the User in a Transaction or Posted Timesheet? |
|---|---|---|---|
| 1 | Active | Full | Not Applicable |
| 2 | Active | Restricted | Not Applicable |
| 3 | Active / Locked / Inactive | View | Yes |
| 4 | Active | View | No |

Consider the following scenarios to understand how user license types are calculated within Clarity:

**Scenario 01: Transition from View Only to Restricted License Type**
When a user classified as View Only has an unposted transaction, executing the Post to WIP job changes the license type to Restricted based on the transaction history.

**Scenario 02: Transition from Restricted Access to Posted Timesheet in Sub License Type**
If a user's status changes from Active to Inactive, but they have a posted timesheet, the Post Timesheet job updates the Sub License Type from 'User with Restricted Access' to 'User with Posted Timesheet'.

### Functionality by User License Type

The following table lists the key functional capabilities and the authorized user license types. Use this table to determine whether a user license is Full, Restricted, or View only.

> [!NOTE]
> All references to Studio pertain to Classic PPM Studio and not Jaspersoft Studio nor other products that use Studio in their name.

#### IT Portfolio Management

Includes portfolio management functionality for services, assets, and applications.

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Establish a hierarchy of IT services | Yes | No | No |
| View the aggregate labor and costs | Yes | No | No |
| Create a hierarchy to capture department-level work, budgets, cost recovery, portfolio and capacity planning, service descriptions, and delivery | Yes | No | No |
| View services, view departments, and subscribe to a service | Yes | Yes | Yes |
| Create multiple portfolios (applications, products, assets, and services) | Yes | No | No |
| Create and edit portfolio analysis criteria | Yes | No | No |
| View portfolio scorecards | Yes | Yes | Yes |
| Conduct portfolio analysis | Yes | No | No |
| Create and manage portfolio plans | Yes | No | No |
| Run portfolio plans through Capacity Planning | Yes | No | No |
| Communicate portfolio decisions through workflow | Yes | No | No |
| Create portfolio fields in Studio | Yes | No | No |
| Create portfolio portlets in Studio | Yes | No | No |

#### IT Financial Management

**Financial Planning**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Set up and view budgets and forecasts using simple budgets | Yes | No | No |
| Define detailed forecasts using cost plans | Yes | No | No |
| Conduct what-if analysis | Yes | No | No |
| Ability to create and modify plans and budgets by Cost Type | Yes | No | No |
| Ability to view plans and budgets by Cost Types | Yes | Yes | Yes |

**Chargeback Allocations**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Charge back IT costs per service to subscribers | Yes | No | No |
| Define a system of rules that are used to generate chargebacks, debit transactions, and accounting credits | Yes | No | No |
| View a customer invoice preview and expandable line items as charges accumulate | Yes | Yes | Yes |
| View cost recovery statements contrasting incurred costs with chargeback costs for services that are provided to a customer | Yes | Yes | Yes |
| Allocate costs to overhead and chargeback accordingly | Yes | No | No |
| Reverse any past chargeback allocations, either partially or in full | Yes | No | No |
| Allocate chargebacks to a selected fiscal period or split an allocation over multiple periods | Yes | No | No |

**Cost and Rate Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create multiple rate rules by investment, department, project, or client | Yes | No | No |
| Mark up costs by a specified percentage | Yes | No | No |

**Internal Chargeback**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create internal invoices | Yes | No | No |
| Review pro forma invoices | Yes | No | No |

#### Project Portfolio Management

Includes portfolio management functionality for projects, programs, and other work.

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and edit portfolio analysis criteria | Yes | No | No |
| View portfolio scorecards | Yes | Yes | Yes |
| Conduct portfolio analysis | Yes | No | No |
| Create and manage portfolio scenarios | Yes | No | No |
| Run portfolio scenarios through Capacity Planning | Yes | No | No |
| Compare portfolio plans | Yes | Yes | Yes |
| Edit portfolio target data | Yes | No | No |
| View Portfolio target data | Yes | Yes | Yes |
| View portfolio data in a waterline format | Yes | Yes | Yes |
| Configure Waterline view | Yes | No | No |
| Create portfolio fields in Studio | Yes | No | No |
| Create portfolio portlets in Studio | Yes | No | No |

#### Product Portfolio Management

Includes portfolio management functionality for products.

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and edit product portfolio analysis criteria | Yes | No | No |
| View product portfolio scorecards | Yes | Yes | Yes |
| Conduct product portfolio analysis | Yes | No | No |
| Create and manage product portfolio plans | Yes | No | No |
| Run product portfolio plans through Capacity Planning | Yes | No | No |
| Communicate product portfolio decisions through workflow | Yes | No | No |
| Create product portfolio fields in Studio | Yes | No | No |
| Create product portfolio portlets in Studio | Yes | No | No |

#### Idea-to-Launch Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Stage Review | Yes | No | No |
| Gate Review | Yes | No | No |
| Gate Scoring | Yes | No | No |

#### Requirements Planning

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and edit Requirements | Yes | No | No |
| Create and edit Releases | Yes | No | No |
| Create and edit Release Plans | Yes | No | No |
| View Requirements, Releases, and Release Plans | Yes | Yes | Yes |

#### Project Management

Includes planning and management functionality for projects, programs, and time tracking.

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create projects and WBS | Yes | No | No |
| Create projects and WBS from predefined templates | Yes | No | No |
| Add tasks or subtasks to existing projects (Clarity only) | Yes | Yes | No |
| Create and update tasks and conversations (Clarity only) | Yes | Yes | No |
| Create and update To Do items (Clarity only) | Yes | Yes | No |
| Create and update project details and status reports (Clarity only) | Yes | Yes | Yes |
| Add unplanned tasks to projects through timesheets | Yes | No | No |
| Access guidelines for projects | Yes | No | No |
| Profile a project | Yes | No | No |
| Enter time against projects (Web or Mobile) | Yes | Yes | No |
| Approve time sheets (Web or Mobile) | Yes | No | No |
| Approve all time sheets (Web or Mobile) | Yes | No | No |
| View key project status, tasks, milestones, WBS, and resources | Yes | Yes | Yes |
| Update task status and complete deliverables | Yes | Yes | Yes |
| Create and edit plans in Open Workbench using Schedule Connect | Yes | No | No |
| Create and edit plans in Microsoft Project using Schedule Connect | Yes | No | No |
| Baseline a project | Yes | No | No |
| Create project workflows and processes in Process Manager | Yes | No | No |
| Create new project fields in Studio | Yes | No | No |
| Create new project management portlets in Studio | Yes | No | No |
| Capture time on nonproject investments | Yes | No | No |

**Resource Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Identify resource roles | Yes | No | No |
| Search for resources to staff projects | Yes | No | No |
| Save searches for resources | Yes | No | No |
| Assign resources to projects | Yes | No | No |
| Manage resource availability calendars | Yes | Yes | No |

**Methodology Authoring**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create project templates | Yes | No | No |
| Utilize project templates to create projects | Yes | No | No |
| Develop forms for profiling projects | Yes | No | No |
| Create guidelines for completing tasks and deliverables | Yes | No | No |

**Program Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and manage programs | Yes | No | No |
| View programs | Yes | Yes | Yes |

**Custom Investments (Clarity)**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and manage custom investments | Yes | No | No |
| View custom investments | Yes | Yes | Yes |

**Administration and Configuration (Clarity)**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create, configure, and view project blueprints | Yes | No | No |
| Configure project teams | Yes | No | No |

**Roadmaps (Clarity)**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create, import, and manage roadmaps, roadmap items, scenarios, and views | Yes | No | No |
| View roadmaps | Yes | Yes | Yes |

#### Risk, Issue, and Change Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create risks, issues, and change requests | Yes | Yes | No |
| View risks, issues, and change requests | Yes | Yes | Yes |
| Promote risks to issues and issues to changes | Yes | No | No |

#### Budgeting, Forecasting, and Actuals

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create budgets and forecasts with duration using simple budgets | Yes | No | No |
| Create detailed cost plans by role with the option to populate from staff plan using roles with budget approval and revision of benefit plans | Yes | No | No |
| Calculate costs for budgets and forecasts using the default rate matrix based on roles | Yes | No | No |

#### Resource Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| View resource dashboards and portlets | Yes | Yes | Yes |
| View resource reports | Yes | Yes | Yes |
| Create new resource fields in Studio | Yes | No | No |
| Create new resource portlets in Studio | Yes | No | No |

**Capacity Planning**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and view what-if scenarios | Yes | No | No |
| Evaluate capacity as opposed to demand | Yes | No | No |
| Manage resource supply and demand | Yes | No | No |

**Skills Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create skills database | Yes | No | No |
| Manage all resource skills | Yes | No | No |
| Manage own skills | Yes | Yes | No |
| Find resources by skills | Yes | No | No |

**Resource Requisitions**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create resource requisitions | Yes | No | No |
| Fulfill resource requisitions | Yes | No | No |
| Create resource requisition processes in Process Manager | Yes | No | No |
| Create new resource requisition form fields in Studio | Yes | No | No |

#### Project Financial Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Define detailed budgets and forecasts using cost plans with any available plan-by types; set up budget approval and revision; set up benefit plans | Yes | No | No |
| Track actual project costs | Yes | No | No |
| Manage resource costs and rate matrices | Yes | No | No |
| Manage Financial Organizational Breakdown Structure | Yes | No | No |
| Setup multiple currencies and conversions | Yes | No | No |
| View project cost accounting reports | Yes | Yes | Yes |

**Project Chargeback Allocations**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create chargeback accounts | Yes | No | No |
| Assign chargeback allocation rates | Yes | No | No |
| Generate chargebacks | Yes | No | No |
| Reverse chargebacks | Yes | No | No |
| Maintain and review audit trail | Yes | No | No |

#### Demand Management

**Idea Creation and Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Enter new ideas | Yes | Yes | Yes |
| View status of submitted ideas | Yes | Yes | Yes |
| Set up idea review and approval processes | No | No | Yes |
| Approve or reject submitted ideas | Yes | No | No |
| Receive and respond to action items sent through a process that is defined on the idea object | Yes | Yes | Yes |
| Create idea fields in Studio | Yes | No | No |
| Create idea portlets in Studio | Yes | No | No |
| Convert an idea to a project | Yes | No | No |
| Track time against an idea | Yes | Yes | Yes |
| Enter budget for an idea | Yes | Yes | Yes |

**Incident Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Enter new incidents | No | Yes | Yes |
| View status of submitted incidents | No | Yes | Yes |
| Receive and respond to action items sent through a process that is defined on the incident object | Yes | Yes | No |
| View incident statistics | Yes | Yes | Yes |
| Assign incidents to resources | Yes | No | No |
| Update incident status | Yes | Yes | Yes |
| Record time against incidents | Yes | Yes | No |
| Set up incident workflows and processes in Process Manager | Yes | No | No |
| Create incident fields in Studio | Yes | No | No |
| Create incident portlets in Studio | Yes | No | No |

#### Process Management (Workflow and Processes)

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Receive notifications | Yes | Yes | No |
| Receive and respond to action items | Yes | Yes | No |
| Create and edit process workflows | Yes | No | No |
| Set up and deploy phase-gate processes | Yes | No | No |
| View graphical workflow status | Yes | No | No |
| Manage process instances and track metrics | Yes | No | No |

#### Earned Value Management

**Contract Work Breakdown Structure Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create contracts and agencies | Yes | No | No |
| Define the CWBS hierarchy | Yes | No | No |
| Create Summary Level Planning Packages | Yes | No | No |
| Create Control Accounts | Yes | No | No |
| Create Work Packages | Yes | No | No |

## Product Functionality by License Type (Continued)

### Product Functionality Matrix

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| **Link Work Packages to Projects or Project Tasks** | Yes | No | No |
| **Baseline a Contract** | Yes | No | No |
| **Create the CWBS Dictionary** | Yes | No | No |
| **View Contract Pricing costs** | Yes | No | No |
| **View Contract, CWBS, and Control Account dashboards** | Yes | No | No |
| **Update Earned Value Totals for Contracts** | Yes | No | No |
| **Update Earned Value History for Contracts** | Yes | No | No |
| **Generate CPR Data for Contracts** | Yes | No | No |
| **View CPR Reports (Formats 1-5)** | Yes | No | No |
| **View CWBS Dictionary report** | Yes | No | No |
| **View CWBS Index report** | Yes | No | No |
| **View Responsibility Assignment Matrix report** | Yes | No | No |

### Burdening Matrix

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| **Define Burdening Classes** | Yes | No | No |
| **Define Burdening Matrix with unlimited burdening levels** | Yes | No | No |
| **Burdening escalation tables** | Yes | No | No |
| **Associate Burdening Matrix to Project** | Yes | No | No |

### Configuration Using Classic PPM Studio

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| **Add custom fields, manage objects with PowerMods** | Yes | No | No |
| **Create portlets with graphs, charts, grids, tables, and custom HTML** | Yes | No | No |
| **Build custom pages and dashboards** | Yes | No | No |
| **Configure menu items** | Yes | No | No |
| **Modify application look-and-feel** | Yes | No | No |
| **Create and manage local configurations through system partitions** | Yes | Yes | No |
| **Build user-defined objects (including custom investment types for consumption in Clarity)** | Yes | No | No |
| **End users create or edit new custom objects** | Yes | No | No |
| **End users view custom objects** | Yes | Yes | Yes |
| **Manage content packages** | Yes | No | No |

### Integration with Desktop Scheduling Tools

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| **Access Open Workbench for desktop scheduling** | Yes | No | No |
| **Access Microsoft Project for desktop scheduling** | Yes | No | No |

### Collaboration

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| **Utilize document management** | Yes | Yes | No |
| **Manage events and To Do items in calendars** | Yes | No | No |
| **Create threaded discussion topics** | Yes | No | No |
| **Participate in threaded discussions** | Yes | Yes | Yes |
| **Participate in workflow processes** | Yes | Yes | No |
| **Create and edit workflows and processes using Process Manager** | Yes | No | No |
| **Receive and respond to action items** | Yes | Yes | Yes |
| **Search documents and discussions** | Yes | Yes | Yes |
| **Receive notifications** | Yes | Yes | Yes |
| **View project documents in Classic PPM** | Yes | Yes | No |
| **View project documents in SharePoint** | Yes | Yes | No |

### Advanced Reporting with Jaspersoft

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| **Run reports** | No | No | No |
| **View report output** | No | No | No |
| **Access report repository** | No | No | No |
| **Create and update ad hoc views and dashboards** | No | No | No |
| **Create custom reports with Jaspersoft Studio** | Yes | No | No |
| **Create and update domains** | Yes | No | No |
| **Create data sources** | Yes | No | No |
| **Administer Advanced Reporting** | Yes | No | No |

### Best Practice Accelerators

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| **PMO Accelerator - Load best-practice content** | Yes | No | No |
| **PMO Accelerator - Enable portlets, dashboards, and processes** | Yes | No | No |
| **PMO Accelerator - Modify portlets and dashboards in Studio** | Yes | No | No |
| **PMO Accelerator - Modify workflows and processes** | Yes | No | No |
| **PMO Accelerator - View portlets and dashboards** | Yes | Yes | Yes |
| **PRINCE2 Accelerator - Load best-practice content** | Yes | No | No |
| **PRINCE2 Accelerator - Enable portlets, dashboards, and processes** | Yes | No | No |
| **PRINCE2 Accelerator - Modify portlets and dashboards in Studio** | Yes | No | No |
| **PRINCE2 Accelerator - Modify workflows and processes** | Yes | No | No |
| **PRINCE2 Accelerator - View and edit PRINCE2 subobjects** | Yes | No | No |
| **PRINCE2 Accelerator - View PRINCE2 portlets and dashboards** | Yes | Yes | Yes |

### Creating and Running Integrations

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| **XML Open Gateway (XOG) - Run XOG processes** | Yes | No | No |
| **Create, edit, and manage GEL scripts** | Yes | No | No |

### System Administration

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| **Create and manage the Organizational Breakdown Structure (OBS)** | Yes | No | No |
| **Manage users and groups** | Yes | No | No |
| **Manage security and privileges** | Yes | No | No |
| **Setup fiscal and time reporting periods** | Yes | No | No |
| **Setup GL accounts and charge codes** | Yes | No | No |
| **Configure the datamart** | Yes | No | No |
| **Schedule reports and jobs** | Yes | No | No |

---

## Configure an Organizational Breakdown Structure

An Organizational Breakdown Structure (OBS) is a hierarchical representation of your company that you can use to align resources, projects, and investments. With an OBS, you can perform these tasks:
- Categorize objects for filtering and reporting purposes.
- Associate groups of resources with partitions.
- Grant access rights to users for object instances based on their OBS membership.

You can define the Type, Level, and Units of each OBS.
- **OBS Type**: Specifies the type of OBS. For example, an OBS named Location defines an OBS type for geographical locations.
- **OBS Levels**: Specifies the structure of the OBS hierarchy. For example, a location OBS can have Country as level 1, State as level 2, and City as level 3.
- **OBS Units**: Specifies a unit in the OBS hierarchy. For example, a location OBS can use the names of countries, states or regions, and cities as OBS units. An OBS unit can be an ancestor, descendant, or both in relationship to other OBS units.

> [!NOTE]
> OBS unit, department, and location names cannot contain the following special characters:
> - Slash (`/`)
> - Colon (`:`)
> - Double quotes (`"`)
> - Less than (`<`)
> - Greater than (`>`)

### OBS Example

The following image shows a location OBS with levels and units in each level.

> [!INFO]
> Figure 29: Image showing a location OBS with levels and units in each level
As shown in the following table, you can set up a financial or non-financial OBS.

### Set Up a Financial OBS

**Follow these steps:**

1. Review the Prerequisites.
2. Create Department and Location OBS.
3. Associate Objects with the OBS.
4. Create the OBS Units.
5. Create an Entity.
6. Associate the Departments with the Locations.
7. Associate the Locations with the Departments.
8. (Optional) Configure the OBS Attribute.

### Set Up a Non-Financial OBS

**Follow these steps:**

1. Review the Prerequisites.
2. Create an OBS.
3. Associate Objects with the OBS.
4. Create the OBS Units.
5. (Optional) Configure the OBS Attribute.

---

## Set Up a Financial OBS

### Review the Prerequisites for Creating a Financial OBS

To complete the steps in this article, you need the following access rights:
- Administration - Access
- Administration - Application Setup
- Financial Maintenance - Financial Organizational Structure
- Department - Create
- Location - Create
- Object Administration
- Administration - XOG

### Video: Why Are Attributes Deleted When Creating a Financial OBS?

> [!TIP]
> To play this video in full-screen mode, click the YouTube logo at the bottom.

### Create Department and Location OBS

Create an OBS to define levels and units that are associated with the organization. The following OBS types are used for financial planning:
- **Department OBS** which represents an organizational chart. Classic PPM administrators define the Department OBS type and its OBS levels. Department managers are primarily responsible for creating departments. When a department manager creates a department, an OBS unit is also created in the OBS hierarchy. The hierarchy is based on the selected entity and, optionally, a parent department.
- **Location OBS** which represents the geographical location of a department within an organization. A financial administrator is responsible for creating locations as part of the financial setup. When a location is created during the financial setup, an OBS unit is created in the OBS based on the selected entity.

In this article, create a financial Department OBS and a financial Location OBS with two levels. For example, create a financial Department OBS named Dept with Department at level 1 and Team at level 2. Similarly, create a financial Location OBS named Loc with Country at level 1 and State at level 2.

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **OBS**.
2. Click **New**.
3. Complete the fields in the **General Information** section. Give the OBS a descriptive name that indicates how you plan to use it.
4. Enter labels in the **Levels** section.
5. Perform one of the following steps:
- To associate objects with the OBS, click **Save**.
- To create another OBS, click **Save and Return**.

### Associate Objects with OBS

Associate objects with OBS to enable the OBS capabilities, such as security or reporting for that object. Although you can associate a custom object with the Department or Location OBS, you cannot use these objects for time entry or financial transactions.

When you associate an object with a financial Department OBS, the following actions happen:
- The associated object appears as a hyperlink under the **Associated Objects** section on the OBS Properties page. Click the hyperlink to view the attribute that is created on the Object Attribute page. On this page, you can set the Default value and also make the OBS field Read-Only.
- An attribute that is named **Department OBS** of OBS Entity - Lookup Data Type is created on the associated Object Attribute page. This Data Type is reserved only for the OBS attribute and is not available for the custom attribute creation.

> [!NOTE]
> The hyperlink and the Department OBS attribute are not created for the following objects: Company, Incident Category, Job/Report, Page, Portfolio, Portlet, Process Definition, Release, Release Plan, and Requirement.
> The Department OBS attribute is created only on the first association of an object with the financial Department OBS and not for the subsequent associations. As a result, you have only one Department OBS attribute in the attributes list of the associated object.

When you associate an object with the Location OBS, the associated object does not have a hyperlink. The attribute is not created in the attributes list of the associated object.

The following table represents the Financial OBS attribute data that is created after the association:

| Field | Dept | Loc |
|---|---|---|
| **OBS Name** | Dept | Loc |
| **Object Name** | Project | Project |
| **Attribute Name** | Department OBS | Not Applicable |
| **Attribute ID** | `odf_obs_fin_dept` | Not Applicable |
| **Data Type** | OBS Entity - Lookup | Not Applicable |

> [!NOTE]
> In addition to a project, other object types are acceptable in the Object Name column. However, the object cannot be a company, incident category, job, report, page, portfolio, portlet, process definition, release, release plan, or requirement.

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **OBS**.
2. Open the OBS and click **Add** under the **Associated Objects** section.
3. Select the objects to associate with the OBS and click **Add**. For example, associate the project object with the Dept and Loc OBS units.
4. Select **Association Mode** to select the OBS units present at all levels or only the ones that are present at the lowest level. Values:
- **Any Unit**: If an OBS has multiple levels, all units from all levels are available for selection.
- **Lowest Unit**: If an OBS has multiple levels, only units in the lowest level are available for selection.

You cannot change the Association Mode of an object that is associated with the Department OBS from Any Unit to Lowest Unit if any instance of the associated object has the department unit set to any value which is not at the lowest level.

If the default, override default, or both are set to any value other than the Lowest Unit, then the values for both these fields become blank when you change the Association Mode from Any Unit to Lowest Unit.
- If any instance of the associated object has a unit which is not set to Lowest Unit, an error message appears.
- When the read-only and mandatory fields are set and you change the Association Mode from Any Unit to Lowest Unit, an error message appears.

If the Association Mode for any associated object is set to Lowest Unit, you cannot add sub-departments after the lowest level.

When you disassociate an object from a financial OBS, the Department OBS attribute is deleted. If the object is associated with more than one financial OBS, then the Department OBS attribute is deleted only after the object is disassociated from the last OBS.

### Create the OBS Units

You can create OBS units at each level. For example, create a unit that is named IT at level 1 and Development and QA as child units at level 2 for Dept OBS. Similarly, create units for the Loc OBS. You can move OBS and the descendants to other branches or levels without losing any access to objects and resources when you reorganize your organization.

You cannot create or delete units from an OBS that is linked to an entity. Instead, create the OBS units before associating the OBS with an entity.

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **OBS**.
2. Open an OBS and click **Units**.
3. Click **New** and complete the fields to create units at level 1.
4. To create child units for the existing units, select the **Parent** field. To create multiple units at once, use **Quick Create**.
5. To attach an instance of the associated object, click **Save and Continue**. You can attach an object instance to an OBS unit to control the resources that have access to the instance using the **Attached Instances** tab. You can select instances of any object that is associated with the OBS.
6. To add more OBS units, click **Save And Return**.

### Create an Entity

You can create financial plans and can establish costs for investments after you define an entity. Each entity has its own set of locations and departments and is associated with only one Department OBS and Location OBS. To establish the financial boundary, associate entities with a geographical OBS for locations and an organizational OBS for departments.

When you create an entity, the selected Department and Location OBS get converted to financial OBS and the nonfinancial OBS attributes are deleted from the associated objects. A financial OBS attribute that is named Department OBS is created in the objects that are associated with the Department OBS. However, the OBS attribute is not created for the following objects: Company, Incident Category, Job/Report, Page, Portfolio, Portlet, Process Definition, Release, Release Plan, and Requirement.

If you are setting up financial management for the first-time, first create the Department and Location OBS, and then create an entity. When you associate an OBS with an entity, the OBS automatically enables access rights management. The OBS cannot be deleted and their structure cannot be edited directly from the OBS.

When you create an entity, the default values are populated if you have previously defined system defaults. For example, Investment Class, Company Class, and WIP Class are populated by default. If a cost/rate matrix exists for resources (labor, material, equipment, and expense), by default all transactions for these resources use the matrix to determine costs and rates. You can override this default by entering a different cost and rate in the transaction properties.

> [!NOTE]
> You cannot create the OBS units from the OBS Units page after an entity is created.

In this article, create an entity that is named Entity by associating with the Dept and Loc OBS.

**Follow these steps:**

1. Click **Administration**, **Finance**, **Setup**.
2. Click **Entities** and click **New**.
3. Complete the fields in the **General** section:
- **Fiscal Period Type**: Defines the fiscal time period type for the entity. This value sets the default fiscal time period type for all new cost plans created for the entity. You can change this default in the cost plan. Values: Monthly, Quarterly, Annually, Weekly, Semi Monthly, 13 Periods
- **Home Currency**: Defines the home currency for the entity. You cannot update this field after the entity is created. You can only select currencies if the currency option is selected when the product is installed.
- **Default Billing Currency**: Defines the default billing currency for viewing cost plans.
- **Reporting Currency**: Defines the default currency for reporting. You cannot update this field after the entity is created.
- **Location OBS**: Defines the existing Location OBS to be associated with the entity.
- **Department OBS**: Defines the existing Department OBS to be associated with the entity.
- **Default**: Defines the default entity for the system. The field appears only after you save the required information for the entity. If this is the first entity you are creating, it is automatically set as the default one. You can undo the default setting by clearing the field. If you have multiple entities, you can only set one entity as the default.

> [!TIP]
> The Default field is not required but if you do not set a default entity, it impacts the Staffing and Roadmaps capabilities in Clarity.

4. Complete the fields in the **Defaults** section:
- **Investment Class**: Categorizes work logically within an organization. For example, you can use investment classes to categorize investments.
- **Company Class**: Defines the default company class. A Company class categorizes clients, vertical markets, or lines of business within your financial organization and is required when financially enabling a company.
- **WIP Class**: Categorizes companies and investments. WIP is also used to indicate methods of revenue recognition. You can use the WIP class to define the rates and costs for transactions, and to group transactions for posting to the general ledger. You can also use them to calculate recognized revenue for projects.

5. Complete the fields in the **Labor Rate and Cost Defaults**, **Material Rate and Cost Defaults**, **Equipment Rate and Cost Defaults**, and **Expense Rate and Cost Defaults** sections:
- **Rate Source**: Defines the cost or rate matrix that is used to calculate the benefit amount of the transaction entry.
- **Cost Source**: Defines the cost or rate matrix that is used to calculate the cost amount of the transaction entry.
- **Source Location**: Defines the source for the rate and cost as coming from either the resource location or project location. The value that you select here controls the cost plan population for the department and location grouping attributes. For example, select Resource as the source location for your entity for both labor and non-labor resources. Later, you auto-populate a cost plan from investment team or task assignment and group the details by department, location, and resource. Then, all the resources (labor and non-labor) show their department and location values based on the resource financial properties (not the project financial properties).
- **Exchange Rate Type**: Defines the exchange rate type for project transactions and is displayed only when multiple currencies are available. When the project is approved, you cannot modify the exchange rate type. Values:
- **Average**: The blended derived rate over a period: weekly, monthly, or quarterly.
- **Fixed**: The fixed rate that does not change over a defined period.
- **Spot**: The variable rate that changes frequently, say daily.

6. Save your changes.

### Associate the Departments and the Locations

You can associate the Department and Location OBS units with each other. The association helps in defining which department belongs to which location.

You can associate a department with multiple locations. The locations must be from the same entity as the department. You can view these locations and can add a location to a department. You can remove the locations from a department only if the location is not used in any instance.

**Follow these steps:**

1. Click **Home**, **Organization**, **Departments**.
2. Open the department that you want to associate with the locations.
3. Click the **Properties** tab and click **Locations**.
4. Click **Add** to display the locations.
5. Select the locations to associate and click **Add**.

### Associate the Locations with the Departments

You can associate a location with one or more departments. First verify that you have created departments and associated them to the same entity as the location.

**Follow these steps:**

1. Click **Administration**, **Finance**, **Setup**.
2. Click **Locations** in the Organizational Structure section.
3. Open the location that you want to associate with the departments.
4. Open the **Properties** menu, and from **Main**, click **Departments**.
5. Click **Add** to display the departments.
6. Select the departments to associate and click **Add**.

### (Optional) Configure the OBS Attribute

After the OBS attribute is created, you can configure it like other existing attributes. Here are some examples of how you can configure the OBS attributes:
- Make the OBS field mandatory.
- Make the OBS field read-only.
- Set the OBS field so that the value is entered only once.
- Set the default value for the OBS field.
- Set the override default value for the OBS field.
- Hide the OBS field.
- Change the label for the OBS field.
- Move the OBS section to another subpage or a secured subpage.
- Rename the OBS section.
- Delete the OBS section.
- Move the OBS fields out of the OBS section to any other section.
- Configure the OBS attributes on the list page.
- Use inline editing.
- Enable audit trail for the OBS attributes.
- Use auto-suggest for the OBS fields.
- Use language translation for the OBS fields.
- Use an OBS field in the system or manual action of a process definition.

> [!NOTE]
> The OBS section can be deleted like other existing section. If you reassociate an object with any OBS section, the OBS section reappears on the General Properties page of the object only with the OBS with which the object is reassociated.
> You cannot update an attribute value that is read-only from the user interface. However, when the Department attribute is updated on the financial subpage, the Department OBS attribute gets updated even if it is read-only. This behavior happens because the Department OBS and the Department attribute values should remain in sync.

#### Video: Why the OBS Section Appears When Deleted from Views

> [!TIP]
> To play this video in full screen, click the YouTube logo to the right of Settings at the bottom of the video.

---

## Set Up a Non-Financial OBS

### Review the Prerequisites for Creating a Non-Financial OBS

To complete all tasks in this article, you need the following access rights:
- Administration - Application Setup
- Administration - XOG
- Object Administration

### Create an OBS

You can create an OBS to represent departments or locations that are not used for financial planning. Create an OBS to define the levels and units that are associated with the organization. You can name the OBS with a qualifier to indicate that the OBS is used for purposes other than entity association. For example, an OBS named Geographies defines an OBS type for geographical location.

In this article, create an OBS named Resource Pool with two levels. For example, Country at level 1 and State at level 2.

**Follow these steps:**

1. Open **Administration**, and from **Organization and Access**, click **OBS**.
2. Click **New**.
3. Complete the fields in the **General Information** section. Best Practice: Name the OBS with a descriptive name that describes how you plan to use the OBS.
4. Enter labels in the **Levels** section.
5. Save your changes.

### Associate Objects with the OBS

Associate the objects with an OBS to enable OBS capabilities, such as security or reporting for that object. When you associate an object with the OBS, the following actions happen:
- The associated object appears as a hyperlink under the **Associated Objects** section on the OBS Properties page. Click the hyperlink to view the attribute that is created on the Object Attribute page. On this page, you can set the Default value and also make the OBS field Read-Only.
- An attribute with the OBS name and OBS - Lookup Data Type is created on the associated Object Attribute page.

> [!NOTE]
> The hyperlink and the OBS attribute are not created for the following objects: Company, Incident Category, Job/Report, Page, Portlet, and Process Definition.

The following table represents the attribute that is created after the object-OBS association:

| Field | Value |
|---|---|
| **OBS Name** | Resource Pool |
| **Object Name** | Project |
| **Attribute Name** | Resource Pool |
| **Attribute ID** | `odf_<first four valid characters of OBS_ID>_<#code of the OBS ID>` |
| **Data Type** | OBS - Lookup |

> [!NOTE]
> In addition to a project, other object types are acceptable in the Object Name column. However, the object cannot be an incident category, job, report, page, portlet, or process definition. By default, the OBS Name, and Attribute Name are the same when the object is associated with a non-financial OBS.

In this article, associate the Project object with the Resource Pool OBS.

**Follow these steps:**

1. Open **Administration**, and from **Organization and Access**, click **OBS**.
2. Open the OBS and click **Add** under the **Associated Objects** section.
3. Select the objects to associate with the OBS and click **Add**.
4. Select **Association Mode** to select the OBS units present at all levels or only the ones that are present at the lowest level. Values:
- **Any Unit**: If an OBS has multiple levels, all units from all levels are available for selection.
- **Lowest Unit**: If an OBS has multiple levels, only units in the lowest level are available for selection.
5. Save your changes.

You cannot change the Association Mode of an object that is associated with the Department OBS from Any Unit to Lowest Unit, if any instance of the associated object has the department unit set to any value which is not at the lowest level.

If the default, override default, or both are set to any value other than Lowest Unit, the values for both these fields become blank when you change the Association Mode from Any Unit to Lowest Unit. When the read-only and mandatory fields are set and you change the Association Mode from Any Unit to Lowest Unit, an error message appears.

When you disassociate an object from an OBS, the OBS attribute is deleted with all the related information such as views, database tables, and instance level data. After the dissociation, the objects do not appear on the OBS Properties page.

### Create the OBS Units

In this article, create the OBS units at each level. For example, create a unit that is named United States at level 1 and California and Texas as child units at level 2.

**Follow these steps:**

1. Open **Administration**, and from **Organization and Access**, click **OBS**.
2. Open the OBS for which you want to add the units and click **Units**.
3. Click **New** and complete the fields to create units at level 1.

> [!NOTE]
> Select the **Parent** field to create child units for the existing units. Use **Quick Create** to create multiple units at once.

4. To attach an instance of the associated object, click **Save and Continue**. You can attach an object instance to an OBS unit to control the resources that have access to the instance using the **Attached Instances** tab. You can select instances of any object that is associated with the OBS. To add more OBS units, click **Save And Return**.

### Configure the OBS Attribute

After the OBS attribute is created, you can configure it like other existing attributes. Here are some examples of how you can configure the OBS attributes:
- Make the OBS field mandatory or read-only.
- Set the OBS field so that the value is entered only once.
- Set the default value for the OBS field.
- Set the override default value for the OBS field.
- Hide the OBS field.
- Change the label for the OBS field.
- Move the OBS section to another subpage or a secured subpage. You can move an OBS and the descendants to other branches or levels without losing any access to objects and resources when you reorganize your organization.
- Rename the OBS section.
- Delete the OBS section. The OBS section can be deleted like any other existing section. If you reassociate an object with any OBS section, the OBS section reappears on the General Properties page of the object only with the OBS with which the object is reassociated.
- Move the OBS fields out of the OBS section to any other section.
- Configure the OBS attributes on the list page.
- Use inline editing.
- Enable audit trail for the OBS attributes.
- Use auto-suggest for the OBS fields.
- Use language translation for the OBS fields.
- Use an OBS field in the system or manual action of a process definition.

---

## Upgrade Impacts on OBS Properties

The following changes happen after you upgrade to this release:
- Any occurrence of the braces `{}` symbol in the OBS name changes to the parentheses `()` symbol.
- The pre-installation check fails while upgrading if the OBS name contains any of the following special characters:
- Slash (`/`)
- Colon (`:`)
- Quotation marks (`" "`)
- Less than (`<`) and greater than (`>`)

## Constraints on the Audit Trail-Enabled OBS Attributes

From this release, you can leverage an audit trail for the OBS attributes. However, you cannot delete an OBS attribute that is audit trail-enabled. If you attempt to delete the OBS attributes, you receive an error.

Here are some actions that you cannot perform when the OBS attribute is audit trail-enabled:
- Delete a non-financial OBS
- Disassociate the objects from the OBS
- Create an entity
- Delete an entity

## Configure the OBS Section

You can configure, move, or delete an OBS section like any existing section. When you associate an object with an OBS for the first time, an OBS section is created with the OBS attribute in the Create View and Edit View of the object. For every subsequent association, an OBS attribute is added to the Selected column of this section.

When you reassociate an object with any OBS section after you delete an OBS section, the OBS section reappears on the General Properties page of the object only with the OBS with which the object is reassociated.

You can move the OBS section to any subpage and can use **Restore Defaults** to move the section back to the original location. When you restore the default, the OBS section moves back to the General Properties subpage with all of the OBS attributes in the Selected column.

> [!NOTE]
> The System Partition can have only one OBS section at any time.

Consider the actions in the following table to understand the result of the Restore Defaults action:

| Action | Result |
|---|---|
| The administrator has not configured the OBS section and the user is using the default view configuration. | No changes in the OBS section views. The user sees the same OBS section view with attributes on the General Properties page. |
| The administrator configures the OBS section by moving either some of the OBS attributes or the entire section to another subpage. The object is associated with a partition model. | The OBS section moves back to the General Properties subpage. All the OBS attributes are added back to the Selected column in the order in which they were created. |
| The partition model is disassociated from the object after the OBS section is configured. | The changes in the OBS section are removed and the configuration of the parent partition is restored. No impact on the OBS section view for its ancestor. The view reflects the OBS section that is configured for the System Partition. No changes to the instances that were created when the partition model was associated with the object. |

### XOG Impact

You can move the OBS section to any subpage like other existing sections using XOG. When you XOG in an OBS with the associated objects, attributes are created in the objects and they are added to the OBS section. When you XOG out the object views, the OBS section appears in the XOG output like other sections. The OBS section has an attribute named code with the value `ODF_OBS_SECTION`.

When you XOG in, the views in the XOG source file replace the views on the target system. If the version attribute value (representing the product release number) in the XOG file is less than 13.2, the OBS section on the target system is preserved because there was no OBS section in earlier releases. If the version attribute value is 13.2 or higher, and the OBS section is not present in the XOG file, the OBS section is deleted on the target system.

You can copy an OBS section multiple times for a particular view in the XOG file. The XOG in happens only for the last instance of the OBS section in the XOG file as there can be only one OBS section in the System Partitioned view. However, you can XOG in multiple OBS sections to other partitions.

#### Add-ins XOG

If the version attribute value (representing the product release number) in the XOG file is less than 13.2, the OBS section on the target system is preserved after add-ins XOG. If the version attribute value in the XOG file 13.2 or higher, and if the OBS section is not present in the source file of the add-ins, then the OBS section is deleted on the target system.

To preserve the OBS section, a new attribute named `complete` with a default value of `false` is added in the Property Views XOG. If the value is set to `preserveOBS` in the XOG file, the OBS section is preserved irrespective of the version attribute value in the XOG file. The following snippet shows the complete attribute and the section code in the XOG file:

```xml
<property code="custCreate" componentId="odf" complete="preserveOBS" objectCode="cust" partitionCode="NIKU.ROOT" type="create">
  <section code="ODF_OBS_SECTION" currentState="collapsed" sequence="3">
    ...
  </section>
</property>
```

#### Entity XOG

The entity XOG behavior is the same for the configurable OBS. When you XOG out an entity from the source system and XOG in to the target system, an entity is created on the target system.

### Delete OBS Types

You can delete OBS types. If you enabled an OBS for access rights, remove the access rights association before you can delete the OBS. An OBS associated with a financial entity cannot be deleted.

**Follow these steps:**

1. Open **Administration**, and from **Organization and Access**, click **OBS**.
2. Select the check box next to each OBS, and click **Delete**.
3. Click **Yes** on the confirmation page.

---

## GDPR: Protect Personally Identifiable Information

To help your organization protect the personally identifiable information (PII) of resources, Classic PPM includes data protection features. The availability of these new features coincides with the May 2018 General Data Protection Regulation (GDPR) in the European Union. GDPR is also included in the United Kingdom Data Protection Act. Compliance is required from any international firm with ties to data in the European Union.

GDPR data protection laws were enacted to provide EU citizens in all member states with greater control over their personal data. Businesses that compromise or misuse personal data are subject to possible fines. To mitigate these risks, including hacking, data breaches, and other cyber threats, Classic PPM allows administrators to anonymize (randomize or scramble) specific PII data for inactive resources.

> [!NOTE]
> CAUTION: This feature permanently protects certain data by scrambling it. Access to original data is irretrievably lost. As an administrator, it is your responsibility to make a secure backup, if permitted by your security policies, before using this feature.

### GDPR: Feature Highlights
- **Installation**: Install the new content items for personally identifiable information (PII) from the PMO Accelerator. Installation is handled for SaaS customers. On-premise customers can decide when to install the content, or to decline.
- **Configuration**: To organize the subset of attributes subject to protection, add any new attributes that you create for resource anonymization to this list. By default, the application is configured to anonymize the following attributes for inactive resources that you select: resource ID, resource full name, resource first name, resource last name, resource email address, and username. The complete list of obfuscated data appears further down this page.
- **New Protected Attributes**: You can create a custom attribute on the Resource object in Studio. Click **Administration**, **Studio**, **Objects** and filter the object list to open the Resource object. For example, create an attribute for the last four digits of a personal ID number or a five-digit pin. Then click **Home**, **Custom Attributes**, **PII Attributes**. Add your new attribute to the Personally Identifiable Information (PII) Attribute List page.
- **User Access**: Configure the personal attributes on a page where other authorized users can access them. We recommend that you keep them together for easy access.
- **Manage Protection**: Authorized users, for example resource managers, can select the **Anonymize Personally Identifiable Information (PII)** check box to flag this resource for protection. The next time an administrator runs the Anonymize Personally Identifiable Information (PII) job, the Resource Settings page will show the date in the **PII Last Anonymized Date** field. Unless you plan on anonymizing all resources, to apply protections you must clear the **Active** check box. Typically, only inactive resources are subject to anonymization.
- **Administration**: The lead system administrator configures the availability of the Anonymize Personally Identifiable Information (PII) job. They answer the following important questions: Who can run this job? Can those authorized users anonymize only inactive resources who are flagged for protection? Can those authorized users anonymize all resources? Do the data protection policies in place at my organization warrant such use? To anonymize all resources, the system administrator clears the read-only constraint on the parameter appropriately named **WARNING! Anonymize ALL Resources**. The administrator makes an optional secure backup.
- **Administration**: The administrator runs the Anonymize Personally Identifiable Information (PII) job with the following check box selected: **Anonymize Only Inactive Resources with Anonymize PII Selected**. The job scrambles only the personal attributes of the inactive resources that also have their Anonymize Personally Identifiable Information (PII) check box selected.
- **Protection**: After all these levels of security, the designated resources show a serialized coded value to protect their original data which is now obfuscated forever.

> [!WARNING]
> Verify that you have backed up all your resource data before you run the Anonymize Personally Identifiable Information (PII) job. When you run this job, the resource data is permanently obfuscated. You cannot undo this operation. Broadcom Support and Broadcom Service partners cannot help retrieve lost data unless you made a reliable backup.

> [!IMPORTANT]
> Anonymize Personally Identifiable Information (PII) is not active by default, even after installing the PII add-in items.

### Install the PII Content Items

The PMO Accelerator add-in is required. The content items for on-premise customers are automatically installed in new environments when you install the PMO Accelerator; however, upgrading customers can choose when to perform these steps.

**Follow these steps:**

1. Log in to Classic PPM as an administrator.
2. Click **Administration**, **Studio**, **Content Add-ins**.
3. Open the **Accelerator - Program Management Office** add-in and click the **Items** tab.
4. In the **Content Item Name** filter field, enter `*pii*`. The following content items appear:
- Anonymize PII - Job
- PII Attribute - Lookup
- PII Attribute Filter View - View
- PII Attribute List View - View
- PII Attribute Object - Object
- PII Attribute Property Views - View
- PII Attributes - Menu
5. Select all seven items and click **Install**. The items show a Status of Installed.

### Create Custom Attributes for Personally Identifiable Information

You can create a custom attribute on the Resource object in Studio.

1. Click **Administration**, **Studio**, **Objects**.
2. Filter the object list to open the Resource object.
3. Click the **Attributes** tab.
4. Create an attribute. For example, create an attribute for the last four digits of a personal ID number or a five-digit pin. Anonymization supports the following custom attribute types: string, large string, number, date, and URL. Custom object attachments are not included.
5. Click **Home**, **Custom Attributes**, **PII Attributes**. Add your new attribute to the Personally Identifiable Information (PII) Attribute List page.

> [!TIP]
> You can also use the XOG to import custom attributes in bulk.

> [!TIP]
> After you anonymize a resource, you do not have to continue to mark them for repeated scrambling. Anonymized resources are automatically re-anonymized when you add a new custom attribute to the list of protected data.

### Add Personally Identifiable Information Fields to a Page Layout

You can organize the personal information in one convenient place.

1. Click **Administration**, **Studio**, **Objects**.
2. Filter the object list and open the Resource object.
3. Click the **Views** tab.
4. Click **[Layout-Edit]** setup for the Resource Labor view.
5. Choose **Settings**, **General** page or, for stronger security, use a secure subpage.

> [!TIP]
> We recommend that you add the personal data attributes to a subpage and set access rights to protect the subpage.

6. Click the **Properties and Layout** icon.
7. Add the **Anonymize Personally Identifiable Information (PII)** and **PII Last Anonymized Date** fields.
8. Click **Save and Return**.

### Select the Protected Resources

Advise resource managers and other users with access rights that they can now flag one or more resources for protection.

1. Click **Home**, **Resource Management**, **Resources**.
2. Open a labor resource. You can anonymize only resources of type labor.
3. Click **Properties**, **Settings**.
4. The resource manager can select the **Anonymize Personally Identifiable Information (PII)** check box to flag this resource for protection.
5. The **PII Last Anonymized Date** shows `1/1/1900` by default. After you run the Anonymize Personally Identifiable Information (PII) job, the PII Last Anonymized Date field displays the date. The Anonymize Personally Identifiable Information (PII) check box is cleared.
6. In the future, you can select the check box again. For example, you add a new attribute with personal data and would like to anonymize it for the selected resource.

> [!NOTE]
> Seeded admin resources are not anonymized. The system does not allow you to anonymize the admin and csk.admin (PMO Accelerator) users.

### Run the Job to Scramble the Data

As a prerequisite, set up DBLINK. The job fails without DBLINK.

> [!WARNING]
> Verify that you have backed up all your resource data before you run the Anonymize Personally Identifiable Information (PII) job. When you run this job, the designated personal resource data is permanently obfuscated. You cannot undo this operation. Broadcom Support and Broadcom Service partners cannot help you retrieve lost data unless you made a reliable secure backup.

1. Click **Home**, **Reports and Jobs**, and click the **Jobs** tab.
2. Run or schedule the **Anonymize Personally Identifiable Information (PII)** job. The Resource Settings page shows the updated PII Last Anonymized Date.
3. To anonymize the same data in the data warehouse, run the **Load Data Warehouse** job in full mode. An incremental load is not sufficient for pushing out the changes in resource data.

### Attachments for Anonymized Resources

The feature handles any attachments on the resource object. However, attachment custom attributes for the resource object or subobjects are not available for selection in the PII Attribute object lookup. Instead of scrambling data in attachments, they are deleted. Attachments include any files that the user uploaded, even their personal avatar image.
- The Anonymize Personally Identifiable Information (PII) job flags resource custom attributes defined as attachments to be purged.
- The **Purge Documents** job purges these documents for all anonymized resources. The job purges the attachments of all protected resources whenever it runs. The job parameters you select for projects or other criteria do not limit this behavior.
- **Exception**: Any attachments in custom attributes for resource subobjects are not flagged or purged.

### Database and Data Warehouse Fields With Personal Data

The following schema tables and fields are subject to obfuscation. In other words, these attributes can be protected by replacing the original data with an encoded serialized number.

**CMN_AUDITS**
- `value_before`
- `value_after`
- `raw_value_before`
- `raw_value_after`

**CMN_SEC_USERS**
- `user_name`
- `first_name`
- `middle_name`
- `last_name`
- `email_address`
- `sms_email_addresss`
- `photo_file`
- `full_name`
- `bo_user`
- `user_uid`
- `favorite_photo`

**NBI_PROJECT_CURRENT_FACTS**
- `ae_last_name`
- `ae_first_name`
- `manager_last_name`
- `manager_first_name`

**NBI_RESOURCE_CURRENT_FACTS**
- `manager_last_name`
- `manager_first_name`
- `resource_code`
- `last_name`
- `first_name`

**NBI_RT_FACTS**
- `resource_code`
- `last_name`
- `first_name`
- `manager_last_name`
- `manager_first_name`

**NMC_CONVERSATIONS**
- `resource_name`

**NMC_INTEGRATIONS**
- `user_name`
- `proxy_user_name`

**ODF_CA_RESOURCE**
- `obj_bi_user_id`

**PAC_MNT_PROJECTS**
- `resource_code`
- `approvedby_resource_code`
- `awaitapprvl_resource_code`

**PAC_MNT_RESOURCES**
- `resource_code`
- `reportsto_resource_code`

**PPA_BILLING**
- `resource_code`
- `entry_resource_code`
- `lastupdtdby_resource_code`

**PPA_MATRIXVALUES**
- `value1`...`value10`

**PPA_POSTINGBATCH**
- `post_resource_code`

**PPA_TRANSBILL**
- `resource_code`
- `entry_resource_code`
- `lastupdtdby_resource_code`

**PPA_TRANSCONTROL**
- `resource_code`
- `entry_resource_code`
- `lastupdtdby_resource_code`

**PPA_TRANSWIPADJUST**
- `resource_code`
- `entry_resource_code`
- `lastupdtdby_resource_code`

**PPA_WIP**
- `resource_code`
- `entry_resource_code`
- `lastupdtdby_resource_code`

**PROJSTAFF**
- `resource_code`

**PROJREVISION**
- `approvedby_resource_code`
- `awaitapprvl_resource_code`
- `resource_code`

**SRM_CONTACTS**
- `job_title`
- `address1`
- `address2`
- `address3`
- `city`
- `state_province`
- `country_id`
- `postal_code`
- `phone_home`
- `phone_work`
- `phone_cell`
- `phone_fax`
- `phone_pager`
- `url`

**SRM_RESOURCES**
- `unique_name`
- `first_name`
- `middle_name`
- `last_name`
- `full_name`
- `email`
- `sms_email`

> [!NOTE]
> Disclaimer: Broadcom is not responsible for protecting data that you anonymize and later decide you want to retrieve.

---

## Configure Earned Value Management

The earned value reporting period defines the frequency and the interval for the Update Earned Value History job. The job takes historical earned value snapshots of performance and saves them in the earned value history table. When using earned value methodologies to analyze project performance, the job uses the earned value reporting period to take the snapshot. It saves the snapshot that is based on the project association to the period. The project manager associates the project to the appropriate period.

When tracking for compliance with ANSI/EIA-748-A earned value management requirements, the project manager must associate all projects and contracts to a reporting period. Some United States Federal regulations specify that for any particular reporting period, execute, and produce the contract performance reports. These reports must record your performance to date and for the current period.

As a best practice, associate a project, comprising tasks and associated with a contract, to the same earned value reporting period as the contract.

Setting up reporting periods defines the time intervals that are used to save earned value (EV) data, such as weekly or monthly. The periods are used to store and calculate historical earned value.

### Create Earned Value Reporting Periods

Create the earned value reporting periods that project managers use for earned value analysis (EVA). Defining the reporting period also defines how often the report runs. Use the frequency field to specify the recurrence.

Project managers associate the following to defined reporting periods:
- **Projects**: The reporting period is the basis for the historical earned value snapshots of project performance.
- **Contracts**: For more information, see Earned Value Manager (EVM) Add-In.

#### Example: Weekly Frequency

For the reporting period recurrence to occur every week, enter 1 as the frequency. To set it for every other week, then enter 2. To set the recurrence to twice a year, enter 26. Or, for once a year, enter 52.

**Follow these steps:**

1. Open **Administration**, and from **Earned Value Management**, click **EV Reporting Periods**.
2. Click **New**.
3. Complete the following general fields:
- **Name**: Defines the reporting period name.
- **ID**: Defines the reporting period unique identifier.
- **Description**: Specifies the reporting period description.
- **Active**: Indicates if the reporting period is active. When the reporting period is active, project managers can associate projects to it. Default: Selected
4. Select one of the following as the period type: Values: Weekly, Monthly, Quarterly, Annually
5. Define the recurrence for the selected period type:
- **Weekly Frequency**: Defines the weekly interval (range 1-52) and the day of the week (Sunday through Saturday) on which the period starts. Default: Weekly on Sundays starting this Sunday.
- **Monthly Frequency**: Defines the monthly interval on which the period is to start. Have the recurrence start on a specific day (range 1-31) each month. Or, have the recurrence start at monthly intervals (First, Second, Third, Fourth, or Last) on a specific day of the week (Sunday to Saturday). Default: Monthly starting on the first day of the month.
- **Quarterly - First Quarter Starts**: Defines the month (January through December) when the first quarter of the period starts. **Frequency**: Defines the quarterly interval on which the period is to start. Default: Quarterly starting on January 1.
- **Annually - Every**: Defines the month (January through December) when the period starts. **Frequency**: Defines the annual interval on which the period is to start. Default: Annually starting on January 1.
6. Click **Save and Return**. The new reporting period is created and displays in the list.

### View a List of Earned Value Reporting Periods

View a list of earned value reporting periods on the Earned Value Reporting Periods list page. Open **Administration**, and from **Earned Value Management**, click **EV Reporting Period**.

---

## Configure General System Settings

As an administrator, you can configure system settings to enable Clarity. You can also manage settings for passwords, documents, advanced reporting, and custom chart colors. Add site links for convenient access by users. Enter translated text for field labels and error messages. Other settings include data warehouse fiscal time period data, consistent chart colors, company name, TSV links for Export to Excel, GZip HTML encoding, and Mail Service.

### Enable Clarity

Enable Clarity for project managers, resource managers, and team members.

> [!NOTE]
> Before you can enable Clarity, install the PMO Accelerator. Without the accelerator, the options for Clarity are disabled. See Install the PMO Accelerator Add-In and PMO Sample Data.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **New User Experience** section, select **Activate New User Experience**. This option provides a global switch that controls whether Clarity is accessible to users. If you do not activate this option and a user tries to access Clarity using the following URL, they are redirected to Classic PPM: `http(s)://<servername>/pm`
3. To enable the new timesheet user interface, select **Activate Timesheets** and click **Save**. This option provides a global switch that controls whether the new timesheets are accessible to users. To activate the new timesheets, first activate Clarity. When you activate the new timesheets, the following changes occur:
- The timesheet menu link and Current Timesheet icon are removed from the Classic PPM user interface.
- In **Administration**, **Project Management**, **Timesheet Options** - Default Content and Layout section, the following columns remain in the Available Columns field (these fields are not needed to configure the new timesheets as the data is automatically incorporated):
- Investment
- Investment ID
- Phase
- The following columns no longer appear in the Available Columns field:
- Task ID
- Short Name
- Parent
- Parent ID
- Phase ID
- Start
- Finish
- Posted Actuals
- Baseline
- Role
- Incident Category
- Notes Icon
- Default columns such as Input Type Code and Charge Code are added to Selected Columns (if not already set in your configuration). You can reconfigure the layout after activation of the New Timesheets.
- In **Timesheet Options** - Default Time Entry Options section, the following fields are removed:
- Default Sorting
- Disable Indirect Time Entries
- Enable Note Date
- The remaining fields are reset to stock default values. It is important to revisit this section again after activating the new timesheets.
- Timesheet notifications are sent from Clarity.
- Users can create timesheets in Clarity only.

> [!TIP]
> - We recommend that teams use either the new timesheets or the Classic PPM timesheets. Do not switch between both.
> - Provide your users with the URL or a menu link to Clarity. For more information, see Getting Started with Clarity.
> - New timesheet notification links automatically go to the specific timesheet for a specific team member. For example: `https://<servername>/pm/#/timesheets/timesheet?resourceId=5003033&timeperiodId=5004050`

4. To prioritize access rights over Clarity Attribute Level Security configured on the Attributes page, check **Prioritize Access Rights over Attribute Level Security** and click **Save**. The default value is unchecked.

> [!NOTE]
> **When Field Level Security (FLS) is used and 'Prioritize Access Rights over Attribute Level Security' is NOT ENABLED**: FLS to edit a field overrides the user's access rights granted to view the field. This means if the user can only VIEW the field based on access rights granted, the user CAN EDIT the field (overrides user rights to only view) with FLS EDIT configuration.
> **Example 01**: A user has Investment-View access. The user is a member of the group granted FLS Edit Access on the Investment 'Description' field. The user is allowed to edit the 'Description' field.
> **When 'Prioritize Access Rights over Attribute Level Security' is ENABLED**: The user access rights are used and FLS for editing a field is ignored. This means if the user can only VIEW the field based on access rights granted and FLS is set for the user with 'Edit Access', the user CANNOT EDIT (FLS 'edit' setting is ignored for the user).
> **Example 02**: When 'Prioritize Access Rights over Attribute Level Security' is enabled, the same user in Example 01 will NOT have the ability to edit the 'Description' field.

5. To set the report date to the current date in the Preview mode of Status Reports, check **Set Report Date to Current Date on Preview** and click **Save**. When you enable this option, the draft status reports in the grid will be set to the current date. The default value is unchecked.

6. To disable the **Create Detail Row** option in the right-click context menu of a Cost/Budget Plan Details, check **Disable child row creation for cost plan details**. The default value is unchecked.

### Hide Availability and Remaining Availability for Roles

Project managers typically use roles to create a staffed allocation work request for upcoming or current investments. That's why roles are referred to as placeholders for demand in Clarity. When investment managers analyze the demand and compare it to the capacity of named resources, roles are not included in aggregated availability. Hence, administrators can now use the **Display Availability and Remaining Availability Amounts for Roles** system option to ignore non-zero values in the Availability and Remaining Availability fields for roles within the Roles workspace and Staffing workspaces.

> [!NOTE]
> This field is selected by default when you upgrade to preserve how Clarity behaved before the upgrade. Broadcom recommends that you clear this field after upgrading to make the best use of the Staffing workspace and the Roles workspace.

### Delete Unsaved Views

Many customers use Recommended Views to ensure their end users see a specific view when they navigate to relevant workspaces in Clarity. These end users add columns, widgets, and other elements to the Recommended View, and all these changes are maintained in the Recommended View as unsaved views even when users log out of Clarity. Hence, when administrators change the original Recommended views, end users cannot see them since they are still working on the Unsaved Recommend view.

Clarity administrators can now use the **Delete Unsaved Views on Logout** option in System Options to ensure that Clarity deletes unsaved views when a user logs out. This will ensure the user gets the latest saved view configurations configured by the Clarity administrator.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **New User Experience** section, select **Delete Unsaved Views on Logout**.

### Activate Vaia (Beta)

Vaia highlights Clarity's first foray into leveraging public AI models to simplify various tasks for users. You need to create a ticket with Broadcom Support to activate this capability in your environment. After this capability is activated, you can select **ACTIVATE VAIA AI SERVICE** to enable this option in your environment.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **New User Experience** section, select **ACTIVATE VAIA AI SERVICE**. Ensure you read the disclaimer below this option before turning on this capability for your organization.

You need to give users the **Administration-Vaia - Navigate** access right to ensure they can see the Vaia (Beta) tile on the Administration workspace in Clarity.

> [!IMPORTANT]
> By activating, you are agreeing to share some of your Clarity data with a third party Generative AI service (the Service). The Service uses emerging technology, may generate inaccurate output, and is not designed for or intended to meet your regulatory, legal, or other obligations. Use of the Service requires an account with the Service provider and is subject to the terms of your agreement with the Service provider. Broadcom bears no responsibility or liability for the Service, including its use of shared Customer data.

### Set Document Management Options

You can set options that determine how attachments and uploaded documents are accessed by other users. Settings include file scanning and download options.

You can also limit the file extensions that are authorized when users upload documents. After you specify the file extensions, a message appears listing the supported extensions whenever users upload a document. Unauthorized file types cannot be uploaded and a warning appears. If you do not specify a file extension list, you can upload any file.

> [!NOTE]
> These options apply to both the Classic PPM interface and Clarity. The file extension restrictions do not apply to documents that users upload using XOG.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. Configure the following fields:
- **Authorized File Extensions**: Leave this field empty (the default) to allow users to upload all file types. To restrict file types, enter a list of file extensions that you want to allow users to upload. Separate each file extension with a comma and no spaces. For example, you enter `doc,docx,pdf,xls,xlsx,ppt,pptx,jpg,gif`. You are now prohibiting any other file types that are not listed. The authorized file extensions apply to the document management system, avatar images, Studio attachment attributes, project status reports (PDF), and in Classic PPM and Clarity. The file extensions do not apply to documents that you upload using XOG.
- **Enable File Scanning of Documents**: Select the check box to scan the uploaded documents. You can specify a virus scanning command-line program for all uploaded documents in CSA. Default: Cleared
- **Allow Non-Participants to Access Documents**: This setting applies globally as the default value for all future documents that users upload. The setting can be changed for each document.
- **Enable Document Download**: Adds the **Download All** and **Incremental Download** actions on the Collaboration tab.
- **Maximum File Size for Document Download**: Specify a limit for the total file sizes in the Download All or Incremental Download actions. The software won't allow users to download documents when their total size exceeds this limit.
- **Warning File Size for Document Download**: Specify a limit that is lower than the maximum allowed. When the total uncompressed file size exceeds this limit, users receive a warning. They can cancel the download or continue. The actual size of the compressed ZIP file can be lower than the warning limit.
3. Click **Save**.

### Set Other System Options

You can set other system options, such as company name, graph formats, document download, and file compression.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Other** section, complete the following fields and save your settings:
- **Company Name**: Defines your company name that is displayed on the About page. Limit: 80 characters
- **Chart Colors**: Specifies custom colors for use with charts. To enter the name and hexadecimal RGB values for a new color, click the **Color Palette** link.
- **Use Consistent Chart Colors**: Defines whether you want to use consistent chart colors. Default: Cleared. Select the check box.
- **Use GZip HTML Encoding**: Specifies the use of compression for HTML pages. Default: Selected

### Enable SAML Authentication

The **Enable SAML Authentication** option allows Clarity to accept SAML responses from Identity Providers such as OKTA or Auth0.

> [!WARNING]
> - **On-Premise Customers**: This option is currently not applicable to Clarity On-Premise customers. If you select this option, users will experience authentication issues.
> - **SaaS Customers**: Please do not make any changes to this option. This setting governs the authentication mechanism of your Clarity SaaS environment. If you update this option, users will face authentication issues.

### How To Report Data Usage Automatically

Telemetry is a capability that is integrated into Clarity to send product usage and system configuration data to Broadcom. This data helps Broadcom gain insights into customers' product usage, understand their software needs, and focus on the features and platforms that are most commonly used.

Telemetry DOES NOT collect any personally identifiable information (PII). It is MANDATORY to enter your Site ID when you are configuring the Subscription Compliance Setup section.

> [!NOTE]
> Telemetry is disabled for the Federal Risk and Authorization Management Program (FedRAMP) environments.

**Follow these steps:**

1. Log into Classic PPM as an administrator.
2. Click **Administration**, **General Settings**, **System Options**.
3. In the **Subscription Compliance** section, complete the following fields:
- **Site ID** (Mandatory): Specifies the enterprise ID that you use to access the Broadcom Support website. The Site ID field is entered once. This field gets locked after populating it. You can use the following syntax to update the value:
     ```
     admin system-options -add TEL_SITE_ID <NEW SITE ID> -force
     ```
- **Production Environment**: Specifies if you are configuring a production instance of Clarity. Select "Yes" for a Production Environment and "No" for other environments. Default: No. This field is entered once, only when the value is set to "Yes". You can change from "No" to "Yes" but not from "Yes" to "No". Use the following syntax to update:
     ```
     admin system-options -add TEL_IS_PROD_ENV no -force
     ```

> [!IMPORTANT]
> These admin commands should be used only if there is a change in site ID.
- **PLA Customer**: Specifies if your organization has opted to participate in the Subscription Portfolio License Agreement.
- **Charge Identifier**: Specifies the name or chargeback ID of a department associated with paying for Clarity usage in your enterprise.
- **Instance**: Specifies the type of installation instance such as Product Development, Enterprise Sales Training, or Product Marketing.
- **Product Version** (Auto-populated): Specifies the version number of the product.
- **Domain Name** (Auto-populated): Specifies the Primary App Service HTTP/HTTPs URL. This information is extracted from the Clarity System Administrator (CSA) application URL field.
- **Error Notification Email**: Specifies the email addresses of users who need to be notified if Clarity is unable to send Telemetry data to Broadcom. You can specify multiple email addresses by using a comma to separate them.
- **SaaS Environment** (Auto-populated): Specifies if the environment is SaaS or On-Premise.

> [!NOTE]
> - If the environment is On-Premise, then Clarity telemetry information sends the same Product SKU to Broadcom.
> - If the environment is SaaS and the Serial Number is populated, then the Product SKU is not populated.
> - If the environment is SaaS and the Serial Number is not populated, then the Product SKU is populated with: Clarity SAAS VIEW ONLY USER (1000 Pack), Clarity SAAS Restricted User, Clarity SAAS Full Function User.

> [!ATTENTION]
> The Clarity URL should be of the domains `broadcom.com`, `ca.com`, or `moventus.com`.
- **Use Proxy**: Specifies the proxy server settings that can be used to send telemetry data to Broadcom.
- **Proxy URL**: Specifies the URL of the proxy server.
- **Username**: Specifies the username to access the proxy server.
- **Password**: Specifies the password to access the proxy server.

4. Save your changes.

> [!NOTE]
> To learn about the license count information for Clarity based on license type, review View User Counts by License Type.

> [!IMPORTANT]
> - You can review and export the Telemetry data Clarity sends Broadcom by accessing the Telemetry Data Export portlet on the License Information page.
> - Clarity will only send Telemetry data to Broadcom when you use the Production Environment field to specify that you are configuring a production instance of the product.

### Identify Your Site ID Using the Broadcom Support Website

**Follow these steps:**

1. On your web browser, navigate to `https://support.broadcom.com/`.
2. Click **Sign In** and enter your username and password.
3. Click **MY ACCOUNT**, **SITE ACCESS REQUEST** to open the Site Access Request page.
4. Click **Admin Access** to view the User Administration Access Request page.
5. Your organization's name and Site ID are displayed.

### Import SSL Certificate into the Java TrustStore (On-Premise only)

You need to import an SSL Certificate into the Java TrustStore only if you are:
- Using a proxy to send telemetry data to Broadcom

AND
- Using a self-signed SSL Certificate on the proxy.

While self-signed SSL Certificates will encrypt your data, they are not honored by most web browsers and JAVA because the certificate is not issued by a trusted certificate authority.

**Follow these steps:**

1. Locate your X.509 SSL Certificate. They are generally `.CER` files.
2. Place the certificate file in the `Java/jre/lib/security` directory.

> [!NOTE]
> If you have multiple versions of Java on your system, ensure you select the version that was installed with Classic PPM. You can review that by checking the value of the `JAVA_HOME` environment variable.

3. Open the command prompt and navigate to the `JAVA_HOME/lib/security` folder.
4. Execute the following command:
   ```
   keytool -importcert -keystore cacerts -file "certificate name" -alias "alias name"
   ```

> [!NOTE]
> Ensure that you remember the alias name you provide in this step. You will need it if you want to delete the certificate from the Java TrustStore.

5. Enter the keystore password. The default password of the keystore is `changeit`.
6. When you are prompted to trust the certificate, type `yes` and press Enter.

### Troubleshoot Telemetry Issues

If Classic PPM encounters an issue with Telemetry, it creates an entry in the `bg-ca.log` file. A few issues that customers can encounter are:
- **Mandatory data such as Site ID, Production Environment, and PLA Customer is missing**: You will encounter this issue if you have not completed the Configure Subscription Compliance Setup section on the System Options page. You will see the following message in the `bg-ca.log` file: "Subscription Compliance Setup is incomplete. Please contact your system administrator to complete this under System Options".
- **Post to Telemetry data to Broadcom is not successful**: You will see an error message in the `bg-ca.log` file. If you have provided relevant email addresses in the Error Notification Email field, those users would receive an email from Classic PPM.

### Data Transmitted by Telemetry

Classic PPM sends the following data to Broadcom as a part of the Telemetry capability:

| Name | Description | Source |
|---|---|---|
| `site_id` | Specifies your organization's site ID that is listed on the Broadcom Support portal. Maps to the value of Site ID field in the Subscription Compliance Setup section. | Provided by customer |
| `instance_id` | Specifies the type of installation instance such as Development, Training, Business Unit, etc. Maps to the value of Instance field in the Subscription Compliance Setup section. | Provided by customer |
| `product_sku` | Specifies the Stock Keeping Unit (SKU) of Clarity | Generated by Clarity |
| `sku_description` | Specifies the description of the SKU of Clarity | Generated by Clarity |
| `SaaS environment` | Specifies if you are using a SaaS or an On-Premise version of Clarity | Generated by Clarity |
| `product version` | Specifies the version number of Clarity implemented in your organization. Maps to the value of Product Version field. | Generated by Clarity |
| `pla_enabled` | Specifies if your organization has opted to participate in the Subscription Portfolio License Agreement. Maps to the value of PLA Customer field. | Provided by customer |
| `date_collected` | Specifies the date on which telemetry data is sent to Broadcom | Generated by Clarity |
| `monthly_usage` | Specifies the count of active users in Clarity who have Full Function access, Restricted Function access, View Function access | Generated by Clarity |
| `chargeback_id` | Specifies the name or chargeback ID of a department associated with paying for Clarity usage. Maps to the value of Charge Identifier field. | Provided by customer |
| `domain_name` | Specifies the Primary App Service HTTP/HTTPs URL used to access Clarity. Maps to the value of Domain field. | Generated by Clarity |

> [!NOTE]
> Classic PPM considers a Creator license and a Demo license as a Full license, Participant license as a Restricted license, and the Viewer license as a View Only license while reporting Telemetry data.

### View and Configure Advanced Reporting Options

You can view Advanced Reporting fields in the **Advanced Reporting** section. This section includes the following fields:
- Advanced Reporting Server URL
- Organization ID
- Classic PPM Database Schema name
- Data Warehouse Database Schema name

Use this information to create a server connection for Jaspersoft Studio Professional if you are using this tool for report development and domain creation.

To govern the synchronization of Jaspersoft Advanced Reporting roles from Classic PPM, select the **Allow Jaspersoft Role synchronization** option. The option when selected allows the Jaspersoft advanced reporting roles to synchronize with corresponding Classic PPM access groups using the Synchronize Jaspersoft Roles job.

A Jaspersoft role is synchronized, provided the following conditions are true:
- The role has the same ID as a Classic PPM access group.
- The user assigned to the Jaspersoft role exists in Jaspersoft.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**. The system options page appears.
2. In the **Advanced Reporting** section, view the Advanced Reporting field values.

### Create Custom Chart Colors

You can create a chart color palette at the system level that allows the system to assign colors to a created chart. The palette applies even when you have selected the **Use Consistent Chart Colors** option. If you do not create a chart color palette, the system assigns chart colors using the default color palette.

You can add an unlimited number of colors to a color palette. When you add a color to the color palette, your custom color palette replaces the out-of-the-box color palette. To reset the default palette, remove or empty the custom palette. Only one color palette can be active at a time.

When you create a custom chart color palette, you can also change the order in which a color picks from the palette. The consistent color key (selected at the chart level) uses this order to distribute colors in the chart.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Other** section of the System Options page, click the **[Color Palette]** link for the **Chart Colors** field.
3. Click **New** on the Chart Colors page.
4. Complete the following fields:
- **Name**: Defines a name for your color.
- **RGB**: Specifies the hexadecimal value that represents a color for your chart. Example: `0000FF` specifies the color Blue.
5. Save the changes. The chart colors page appears.
6. Click **Order**. The chart color order page appears.
7. Define the order for assigning colors in the color palette, and save.

### Select Consistent Chart Colors

You can set consistent chart colors at the system level. By default, this setting is not active. After you configure this system option, you can use the colors in a chart portlet.

The **Use Consistent Chart Colors** option specifies whether to assign colors to charts based on the consistent color key that is defined at the chart portlet level. When you select this option, the **Consistent Color Key** and **Use Consistent Colors** fields appear on the Options page when you or other users configure the chart portlet.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Other** section of the System Options page, select **Use Consistent Chart Colors**.
3. Save the changes.
4. Configure a chart portlet to use consistent colors. See Configure Consistent Colors for Studio Chart Portlets in Clarity Studio Reference for details.

### Change a Company Name

You can change the company name that appears on the Classic PPM About page.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **Other** section of the System Options page, complete the following field:
- **Company Name**: Defines the name that displays as your company name on the Classic PPM about page. Limits: 80 characters
3. Save the changes.

### Enable the TSV Links (Export to Microsoft Excel)

Select the **Enable TSV links for the Export to Excel** option to export both the TSV data and the TSV links to Excel. Only the permissible number of TSV links are displayed. Disable this option to export only the TSV data and not the TSV links.

> [!NOTE]
> Microsoft Excel supports up to 65,530 hypertext references (HREF). When exporting data from Classic PPM to Microsoft Excel, hyperlinked cells do not appear as links when the row count exceeds that limit. If the number of TSV links exceed this limit, an error message appears to alert you.

### Add Site Links

You can add, change, and delete site links that appear in the **Site Links** section of the overview pages. By default, this section displays the Favorite Photo section on the right side of the page. If you no longer require a link, delete the link.

> [!NOTE]
> You can test the link by viewing page links from the Site Links section of the overview page.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **Site Links**. The page links page appears.
2. Click **New**.
3. Complete the following fields, and then click **Save**:
- **Link Name**: Defines the name of the page link that displays on the overview page. Limit: 32 characters
- **URL**: Defines the web address that is used to display the page when you click the page link. Enter the correct URL link because Classic PPM does not validate the URL. Limit: 240 characters.

### Mail Service

The Mail Service in Classic PPM enables automated email processing, allowing users to respond to Action Items directly from their inbox without logging into Clarity. By integrating with external email services such as Gmail and Microsoft Outlook using secure OAuth 2.0 authentication, Classic PPM ensures that communication remains both efficient and secure.

This feature is handy for users who are involved in project approvals or task assignments but do not regularly access Clarity, offering a streamlined approach to managing Action Items through email. With OAuth 2.0, administrators can configure Classic PPM to connect with email services while ensuring secure access to user accounts.

Once configured, the Mail Service automatically polls the connected email account at regular intervals, retrieving responses to Action Items and updating the system accordingly.

**Follow these steps:**

1. Click **Administration**, **General Settings**, **Mail Server**. The Mail Service page appears.
2. Populate the **Incoming Server Configuration** section:

| Field | Description |
|---|---|
| **Configuration Name** | Enter a name to identify the mail service configuration. For example: Microsoft Azure: "Azure mail"; Google: "Gmail service" |
| **Host Name** | Enter the mail server host name. For example: Microsoft Azure: `outlook.office365.com`; Google: `imap.gmail.com` |
| **Port** | Enter the port number for a secure connection using IMAP over SSL. For example: `993` |
| **Active** | Select the Active checkbox to enable the mail configuration. |
| **Enable Tracing** | Select to enable detailed logging for the mail service for troubleshooting. |
| **Prefer StartTLS** | Select if your mail server supports StartTLS to secure the email connection. |
| **Mail Reader Protocol** | Select **IMAP** from the dropdown. |
| **Encryption Type** | Select **SSL** from the dropdown. |

3. In the **Mail Account Configuration** section:

| Field | Description |
|---|---|
| **Email Address** | Enter the email address of the account Clarity will connect to. For example: Microsoft Azure: `<clarityuser>.onmicrosoft.com`; Google: `<clarityuser>@gmail.com` |
| **Password** | If required, enter the password. Disabled when using OAuth. |
| **Authentication Type** | Select **Basic** (standard username and password) or **OAuth** (token-based authentication). |
| **Mail Polling Interval** | Enter the interval (in minutes) at which Clarity will check the inbox for new emails. |

4. In the **OAuth Configuration** section:

| Field | Description |
|---|---|
| **Provider** | Select **Microsoft Azure** or **Google** from the dropdown. |
| **Client ID** | Enter the Client ID obtained from the OAuth provider. |
| **Client Secret** | Enter the Client Secret generated during the OAuth application registration. |
| **Tenant ID** | (Microsoft Azure only) Enter the Tenant ID of the Azure Active Directory. |
| **Access Token Generated** | Automatically selected once the OAuth access token is generated. |
| **Reset Token Generated** | Automatically selected when the reset token is generated. |
| **Redirect URL** | Automatically populated. Format: `https://<clarity-url>/niku/oAuthCallback` |
| **Scope** | Enter the scopes that define the permissions. Microsoft Azure: `https://outlook.office.com/IMAP.AccessAsUser.All offline_access`; Google: `https://mail.google.com/ offline_access` |

5. Click **Save** after entering all the details.
6. Click **Generate OAuth Token** after saving the configuration. This will redirect you to the OAuth provider to authenticate.
7. Once you successfully log in, the **Access Token Generated** and **Reset Token Generated** checkboxes will be selected.
8. Once the email authentication is configured, the **Poll Mail Service** job will be able to poll the configured email account at regular intervals and process actions based on the incoming emails.

### Configuring StartTLS for Email in Clarity

StartTLS is a security protocol that upgrades a standard SMTP connection to an encrypted connection. Enabling StartTLS ensures that emails sent from Clarity are transmitted securely.

#### 01. Prerequisites - Email Server

Before configuring Clarity, ensure your email server meets the following requirements:
- **SMTP with StartTLS support**: The server must support StartTLS and offer the STARTTLS command after the initial connection.
- **Recommended port**: Use the StartTLS-secured SMTP port, for example `587`.
- **Optional port**: `25` (Standard SMTP) for legacy/internal servers.
- **SSL/TLS certificate**:
- Install a valid certificate from a trusted Public Certificate Authority (CA).
- If using an internal CA or self-signed certificate, it must be manually trusted on the Clarity application server.
- The certificate's CN or SAN must match the email server hostname (FQDN) used by Clarity.
- Ensure the full certificate chain (server, intermediate, root) is correctly installed.
- **Authentication credentials**: If the server requires authentication, provide a valid username and password.
- **Network connectivity**:
- The email server must be reachable from the Clarity application server.
- Firewall rules must allow outgoing connections to the SMTP port (typically `587` or `25`).
- **Relaying permissions**: Configure the server to allow email relaying from the Clarity server IP or authenticated user account.

#### 02. Prerequisites and Configuration - Clarity
- **Clarity version**: Ensure your version supports StartTLS.
- **Java truststore**:
- Clarity runs on Java; the JRE must trust the email server's certificate.
- Public CA certificates are usually trusted by default.
- For self-signed or internal CA certificates, import the email server certificate or its CA into the Java cacerts truststore: `<JAVA_HOME>/lib/security/cacerts`
- Use the `keytool` utility for importing.
- **Network check**: Verify connectivity from the Clarity application server to the email server on the SMTP port using `telnet` or `openssl s_client -starttls smtp`.
- **Restart services**: After updating the truststore or Clarity mail settings, restart both Clarity Application (app) and Background (bg) services.

#### Enabling StartTLS in Clarity

**Follow these steps:**

1. Log in to CSA.
2. Click the **System** sub tab on the server properties page.
3. Navigate to the **Mail Server** tab.
4. Check the **Enable StartTLS** option.
5. Save the configuration and restart services if not already done.

> [!NOTE]
> If email delivery fails after configuration, enable debug logs via the `com.niku.union.notification` class for detailed information.

### Setting Up Microsoft Azure OAuth for Classic PPM Mail Service

Clarity lets you connect to external email services securely using OAuth 2.0. By setting up OAuth 2.0 in Azure and configuring it within Clarity Mail Service, you can enable automated email retrieval and interaction through protocols like IMAP or POP3.

**Follow these steps:**

1. Go to the **Microsoft Azure Portal** and log in with your credentials. Select **Azure Active Directory** from the left-hand menu.
2. Navigate to **App registrations** and click **New registration**.
   a. Enter a name for your application.
   b. Leave the default option selected: **Accounts in this organizational directory only (Microsoft only - Single tenant)**.
   c. In the **Redirect URI** section, select **Web** as the platform and enter the Redirect URI from Clarity's Mail Service page: `https://<clarity-url>/niku/oAuthCallback`.
   d. Click **Register**.
3. After registration, navigate to **Certificates & Secrets** under the registered app.
   a. Under **Client secrets**, click **New client secret**.
   b. Provide a description and set the expiration duration.
   c. Copy the **Client Secret** from the Value field and store it securely.
4. Go to **App registrations** and select your application.
   a. Navigate to **API permissions** and click **Add a permission**.
   b. In the **APIs my organization uses** tab, search and select **Office 365 Exchange Online**.
   c. Choose **Delegated permissions**, expand the **Mail** group, select **Mail.ReadWrite**, and click **Add permissions**.
5. Grant the necessary permissions by selecting **Grant admin consent** for all configured permissions.
6. Go to the **Overview** section and copy the **Client ID** and **Tenant ID**.
7. Log in to Clarity as an Administrator and navigate to **Administration**, **Mail Service**.
   a. Set **Authentication Type** to **OAuth**.
   b. Select **Microsoft Azure** as the provider and enter the Client ID, Client Secret, and Tenant ID.
   c. Define the scopes:
- For IMAP: `https://outlook.office.com/IMAP.AccessAsUser.All offline_access`
- For POP3: `https://outlook.office.com/POP.AccessAsUser.All offline_access`
- The `offline_access` scope is mandatory.
8. Click **Save**.
9. Click **Generate OAuth Token**. Log in with the associated email account.
   a. When successful, the **Access Token Generated** and **Reset Token Generated** fields will be checked.
10. Once complete, Clarity will begin polling the mail inbox. The **Poll Mail Service** job will automatically run every 5 minutes.

### Setting Up Google OAuth 2 Authentication for Classic PPM Mail Service

If you wish to enable Google OAuth 2 authentication for your email connection, you will need to configure it in the Google Developer Console and Clarity.

**Follow these steps:**

1. Go to the **Google Cloud Console** and sign in. Select **Select a Project** (create a new project if needed).
2. Click the hamburger menu, find **APIs & Services**, and select **OAuth consent screen**.
   a. Choose **External** as the user type.
   b. Complete the necessary fields (App name, Support email). Click **Save and continue**.
3. On the **Scopes** screen, add the required scope: `https://mail.google.com/`. Click **Save and continue**.
4. Navigate to **APIs & Services > Credentials**.
   a. Click **Create Credentials** and select **OAuth client ID**.
   b. Set **Application Type** to **Web application**.
   c. In **Authorized redirect URIs**, enter: `https://<clarity-url>/niku/oAuthCallback`.
   d. Click **Create**.
5. Download the credentials file containing the **Client ID** and **Client Secret**.
6. Log in to Clarity as an Administrator and navigate to **Administration**, **Mail Service**.
   a. Set **Authentication Type** to **OAuth**.
   b. Enter the **Client ID** and **Client Secret** from the credentials file.
7. In the **Scope** field, enter `https://mail.google.com/`. If multiple scopes are needed, ensure they are comma-separated.
8. Click **Save**.
9. Click **Generate OAuth Token** and authenticate with the Gmail account.
   a. When successful, the **Access Token Generated** and **Reset Token Generated** fields will be checked.
10. Once complete, the **Poll Mail Service** job will start polling the Gmail inbox every 5 minutes.

### Email Sent to all Assignees

Once the connection is established, an email is sent to all assignees requesting an action item:
- Clarity Process Engine will send the email.
- The email will be sent to the Assignee's Clarity User Account Email Address.
- Assignees will receive a separate email for each Action Item.
- Assignees can respond to their Action Item directly in the email by clicking on an Action Button.
- Action Item emails will be sent regardless of the email Notifications setting.

### Email Response from Assignee

As an assignee, you must send the email response to update Clarity. Before any response, you will be authenticated for Email Address and Valid Assignee for Action Item. Failures will receive a failure email. However, there is no email sent to confirm success.

> [!NOTE]
> Some key points to remember are:
> - Only process Action Items are supported.
> - Success emails are not sent to Assignees, only failure emails.
> - The Action Item email sent to Assignees does not show line breaks in the Action Item Message Description. It is displayed as a single body of text.
> - The background Clarity job that polls the Email Service account for Assignee email responses cannot be configured and is not visible in Clarity. It will run in the background every 5 minutes.
> - You are required to create an Email Service Account in your Email Client to support this feature.
> - Assignees should not update the encoded section in their response email.
> - Forwarded Action Item emails to Others will not update Clarity because the authentication will fail.
> - There is no Notification Template defined in Classic for the Action Item email. Consequently, the email format cannot be configured.

### Localize to Support Languages No Longer Supported by Broadcom

You can use the Localization feature to localize Clarity and Classic PPM interface, in languages no longer officially supported by Broadcom. The list of these languages is:
- Czech
- Danish
- Finnish
- Hungarian
- Dutch
- Norwegian
- Polish
- Russian
- Swedish
- Turkish
- Chinese - Simplified
- Chinese - Traditional
- Korean
- Catalan

You can use the Localization feature to perform the following actions:

1. Export Clarity captions, for a selected language, to a zip file that is downloaded to your local system.
2. Edit the various files needed to localize Clarity captions.
3. Zip the updated files, for the selected language, and upload them into Clarity to apply specified caption changes.
4. Reset your captions, for a selected language, if you have made unintentional changes or you want to revert to out of the box captions.

> [!NOTE]
> You cannot override captions for any of the officially supported languages: English, German, Spanish, French, Italian, Japanese, Brazilian Portuguese.

**Follow these steps:**

1. Log in to Classic PPM as an administrator and select **Administration**, **General Settings**, **Localization**. If you don't see the Localization option, ensure you communicate with the Clarity support team to enable this feature in your environment.
2. Select your target language and click **EXPORT CAPTIONS**. A zip file will be downloaded to your system.
3. Open the zip files to view a list of files that include the captions used in Clarity.
4. Use a source code editor such as Notepad++ to locate the relevant properties file that you wish to modify. For example, the `ppm_ux_global.properties` file includes captions used in the generic grid across multiple areas throughout Clarity.
5. Replace the English captions with the localized captions and save your changes.

> [!NOTE]
> You need to update the name and description in `captions_<lang_code>.properties` file to update a caption.

6. After completing all your changes, zip the files and navigate back to the Localization page.
7. Select the target language and use the **Choose File** option to upload the zip file.
8. Click **UPLOAD CAPTIONS** to upload the zip file. Once the upload is complete, all users whose Account Settings are set to the target language will see the updated captions in Clarity. You will need to perform a hard refresh to refresh your browser cache and view the localized captions.

> [!NOTE]
> - You will not see validation messages for successful upload/download of language packs.
> - Uploading the properties files (with different changes) multiple times requires a hard refresh for the strings to reflect in Clarity.

### Manage Field Text Translation

You can provide different language localizations for selected field text on the Administration pages. You can include the translations for different languages, which are based on your company requirements. The translation function is available if you see the Translate icon next to a field.

**Follow these steps:**

1. Click the **Translate** icon next to any field that supports this option.

> [!NOTE]
> For example, the Translate icon appears with the **Action Name** field. Click **Administration**, **Data Administration**, **Processes** and select a process (or create a new process). Click **Start Step** and select one of the Actions (or create and save a new action). The Action Name field shows the Translate icon.

2. Enter the field text localization for each language that you require.
3. Click **Save and Return**.

---

## Configure Third-Party Product Integrations

As an administrator, you can configure third-party product integrations with Classic PPM. For example, you can configure the product to integrate with third-party systems such as an agile planning system.

### Integration Setup

If you are new to Classic PPM, you can look up any existing integrations that are already defined for your product instance. Use the Integrations page as a one-stop shop to define and maintain all integration information for the product.

For example, you can define the following integrations with Rally (CA Agile Central), an agile project planning system:
- Configure an integration from a single Classic PPM system to one or more Rally instances or workspaces.
- Create or update integration instances using the REST APIs.

You require the following access rights:
- API - Access
- Administration - Application Setup

> [!NOTE]
> Install the Agile add-in before creating an agile system integration such as with Rally. Installing the add-in allows you to save the integration information and populate the default integration values. See Integrate with Rally for more information.

**Follow these steps:**

1. Log in to Clarity.
2. Click **Administration**, **General Settings**, **Integrations**.
3. Click **New**.
4. Complete the following fields:
- **Areas**: Defines the software application or business area of the vendor (for example, Agile).
- **Vendor**: Defines the company name with which the product is integrating (for example, Rally).
- **Supplier**: Defines the company name that is implementing the integration (for example, Broadcom).
- **Integration URL**: Defines the URL for the integration instance (for example, the Rally instance URL).
- **Integration API Key**: Defines the username and password combination that is used to access and authorize for the remote system.
- **Integration Instance**: Defines the integration instance to connect to, for example, the Rally workspace ID.
5. Click **Save**. A new tab appears next to General.
6. Define the integration information specific to the third-party system.
7. Save your changes.

### Create an Integration

We recommend that you apply the following best practices when creating a custom product integration:
- Use the standard default integration attributes as much as possible.
- Create a subpage on the Integration object for the integration attributes.
- Add a display condition to show the subpage only for the specific Integration instance.

> [!TIP]
> See Clarity Studio Object Views in the Reference section for information about how to add object subpages and create display conditions.

### Integration Architecture

The following diagram shows a basic integration architecture between Clarity SaaS or on-premise and CA Agile Central (Rally) SaaS. Integrations with on-premise editions of Rally are not supported. An essential component in the integration, the Synchronize Agile Central job runs in the background to access the Clarity API and Agile Central WebService API through HTTP calls.

> [!INFO]
> Figure 30: CA_PPM_RALLY_INTEGRATION_ARCHITECTURE
---

## Configure Lookups

A lookup is a list of values that you want other users to see in drop-down and multi-select lists. Create and configure lookups in custom fields, reports, queries, and in list or chart portlet filters.

For example, a custom field named Document Status can contain a drop-down with lookup values such as Draft, Review, or Approved. Auto-suggest displays a list of possible matching values when the user enters the first few characters in a static list, dynamic query, or parameterized lookup data source.

### Partitions and Lookups

Partitions help you create different views of a page for different users. Typically, the underlying structures of the item are object attributes and lookup values.
- You cannot partition static dependent list or dynamic query lookup values.
- You can create static list lookups that contain partitioned values.

For more information, see Classic PPM Studio Development in the Reference section.

### Lookup Types

You can create and use the following types of lookups:
- **Static Lists**: Use this type of lookup when you want a standard set of choices to appear as a drop-down list of values for a field.
- **Static Dependent Lists**: Use this type of lookup to create a hierarchy of lookups and values. Items that appear in the second and subsequent lists depend on a previously selected value in an initial field. Example: The user selects USA from a country list, then a list of states appears.
- **Dynamic Queries**: Use this type of lookup to fetch data from the database in real-time to populate the drop-down. These lookups provide the most up-to-date values possible. Create dynamic NSQL queries to provide parameterized lookups.

> [!TIP]
> You can nest a static lookup inside a dynamic query lookup. You cannot nest a static dependent list lookup inside a dynamic query lookup. Auto-suggest does not work with static dependent lists.

The following table describes how each type of lookup can be edited or deleted:

| Lookup Type | Edit | Delete |
|---|---|---|
| **System-restricted lookups** | You can only change the labels and layout. No. All stock dynamic query lookups are system-restricted. | No |
| **System lookups** | You can add and deactivate values. You cannot deactivate the default values provided with the application. | No |
| **User-defined lookups** | You can add and deactivate values. Use your own lookups to extend the stock lookups. | Yes |

### Create Static List Lookups

**Follow these steps:**

1. Click **Administration**, **Data Administration**, **Lookups**.
2. Click **New**.
3. Complete the following fields:
- **Lookup Name**: Defines the unique name for the lookup.
- **Lookup ID**: Defines the unique ID for the lookup. Typically entered in uppercase letters. Example: `LOOKUP_ACTION_STATUS`.
- **Content Source**: Specifies the data source for the lookup. Values: Customer, FM Stock Reports, CPIC Accelerator, PMO Accelerator, Clarity Stock Reports. Default: Customer
4. Complete the following fields from the **Source** field:
- **Static List**: Select when working with a standard set of choices. Specify a sort order:
- **Alphanumeric**: Displays items in alphanumeric order. You cannot reorder alphanumeric list lookups.
- **Manual**: Allows you to determine and change the sort order. Default: Alphanumeric
- **Static Dependent Lists**: Select to create a hierarchy of lookups and values. Specify sort order (same options as above).
- **Dynamic Query**: Select to fetch data from the database in real time.
- **Description**: Specifies a brief description of the lookup.
5. Save the changes. The parent window appears for the new list lookup.

### Create Static List Lookup Values

You can create and edit the values that appear in lookups. You can create any number of values for a lookup.

**Follow these steps:**

1. Open a static list lookup and click **Values**.
2. Click **New**.
3. Complete the following fields:
- **Lookup Value Name**: Defines the name for the lookup value.
- **ID (LOOKUP_CODE)**: Defines the ID for the lookup value. Can be a number or string depending on the configuration of the Hidden Key on the Parent Window page.
- **Partition**: Defines the partition for a lookup value. If partitioning is not enabled, System is the default value.
- **Partition Association Mode**: Defines the level for users to view the partition. Values:
- Partition, ancestors, and descendants
- Partition and ancestors
- Partition and descendants
- Partition only
     Default: Partition, ancestors, and descendants
- **Description**: Specifies additional information about the purpose of the lookup value.
- **Active**: Specifies if the value is visible on the page when displayed to the users. Default: Selected
4. Save your changes.

### Manually Reorder Static List Lookup Values

Use a manual sort order when you first create your static list lookup. You can then reorder the way that the values display in the drop-down.

**Follow these steps:**

1. With the static list lookup open, click **Reorder Values**.
2. Click the name of the value and use the arrows to move the value up and down in the list.
3. Save the changes.

### Static Dependent List Lookups

A static dependent list (SDL) lookup consists of a hierarchy of levels and values. To create the lookup, create the levels of the hierarchy, and then the values that can be available for selection at each level. Plan your hierarchy carefully. You cannot move the levels and values up or down in the structure.

#### Create or Edit Static Dependent List Lookups

**Follow these steps:**

1. Click **Administration**, **Data Administration**, **Lookups**.
2. Click **New** to create a new lookup, or click the lookup name to edit.
3. For the **Source**, select **Static Dependent Lists** and complete the following fields:
- **Lookup Name**: Defines the unique name for the lookup.
- **Lookup ID**: Defines the unique ID for the lookup. Example: `LOOKUP_ACTION_STATUS`.
- **Content Source**: Specifies the data source. Values: Customer, FM Stock Reports, CPIC Accelerator, PMO Accelerator, Clarity Stock Reports. Default: Customer
- **Description**: Specifies a brief description of the lookup.
4. Save the changes.

#### Create Dependency Levels for Static Dependent List Lookups

**Follow these steps:**

1. Open the static dependent list lookup.
2. Click **Levels**.
3. Click **New**.
4. Complete the following fields:
- **Lookup Name**: Defines the name for the lookup level.
- **Lookup ID**: Defines the unique ID for the lookup level.
- **Description**: Defines a brief description of the lookup level.
5. Save the changes.

#### Create Lookup Values for Static Dependent Lists

**Follow these steps:**

1. Open a static dependent list lookup and click **Values**.
2. Click **New**.
3. Complete the following:
- **Lookup Value Name**: Defines the name for the lookup value.
- **Lookup Value ID**: Defines the unique ID for the lookup value.
- **Description**: Defines a brief description of the lookup value.
- **Active**: Specifies if the value is visible. Default: Selected
4. Save the changes.

### Dynamic Query Lookups

A dynamic query lookup contains a list of items that are displayed in a drop-down. Use Classic PPM version of SQL, named NSQL, to create queries for dynamic lookups.

> [!NOTE]
> You cannot modify the NSQL query for a dynamic query lookup if the lookup is associated with an object attribute.

#### Create or Edit Dynamic Query Lookups

**Follow these steps:**

1. Click **Administration**, **Data Administration**, **Lookups**.
2. Click **New** to create a lookup, or click the lookup name to edit.
3. Complete the following fields:
- **Lookup Name**: Defines the unique name for the lookup.
- **Lookup ID**: Defines the unique ID for the lookup. Example: `LOOKUP_ACTION_STATUS`.
- **Content Source**: Specifies the data source. Values: Customer, FM Stock Reports, CPIC Accelerator, PMO Accelerator, Clarity Stock Reports. Default: Customer
4. Select **Dynamic Query** for the Source and complete:
- **Object**: If you want the hidden key value to return the primary key value of an object, select the object.
- **Description**: Enter a brief description of the lookup.
5. Save the changes.

You can use dynamic lookups in Classic PPM while using the Browse functionality and the AutoSuggest functionality. Clarity always leverages dynamic lookups in the AutoSuggest functionality by passing the `searchText` filter parameter.

> [!WARNING]
> Some key points to remember:
> - The dynamic lookup attribute works in Clarity only when the underlying NSQL contains `@SELECT@` tag on select fields/columns.
>   ```sql
>   SELECT @SELECT:I.ID:ID@, @SELECT:I.CODE:CODE@ from INV_INVESTMENTS I
>   ```
> - Adding `ORDER BY` in the NSQL of dynamic lookup is redundant. Clarity adds the default ORDER BY clause dynamically based on the Default Sorting Column and Default Sort Order configurations in the lookup definition.

> [!IMPORTANT]
> Here are examples that work in Browse functionality but do not work in Auto-suggest functionality:
> **Use Case 1**: `@SELECT@` is missing on select fields:
> ```sql
> SELECT I.ID,I.NAME,I.CODE FROM INV_INVESTMENTS I where I.IS_ACTIVE = 1
> and UPPER(I.odf_object_code) = 'PROJECT'
> and (select COUNT(1) as INV_COUNT from INV_HIERARCHIES H where H.PARENT_ID = I.ID) > 1
> ```
> **Correct code**:
> ```sql
> SELECT @SELECT:I.ID:I.ID@,@SELECT:I.NAME:I.NAME@,@SELECT:I.CODE:I.CODE@
> FROM INV_INVESTMENTS I where I.IS_ACTIVE = 1
> and UPPER(I.odf_object_code) = 'PROJECT'
> and (select COUNT(1) as INV_COUNT from INV_HIERARCHIES H where H.PARENT_ID = I.ID) > 1
> ```
> **Use Case 2**: When the query has an ORDER BY clause - remove the ORDER BY clause to ensure the query works in all cases.

### Create Dynamic Lookups and Export Configurations

If the purpose of a dynamic lookup is to link an object to a unique instance of another object or record, we recommend the following approach:
- Use the internal ID that the Classic PPM environment generates as the hidden key.
- Add the user-defined ID/unique code as the column `UNIQUE_CODE` in the query select clause.

Include the NSQL query column `UNIQUE_CODE` to prevent the XOG from exporting the lookup attribute using the literal hidden key value. For example:

```sql
SELECT @SELECT:r.id:id@
  ,@SELECT:r.full_name:full_name@
  ,@SELECT:r.unique_name:unique_name@
  ,@SELECT:r.unique_name:unique_code@
  ,@SELECT:r.last_name:last_name@
  ,@SELECT:r.first_name:first_name@
FROM srm_resources r
WHERE 1=1 AND @FILTER@
```

When the data is imported, the Classic PPM architecture uses the `UNIQUE_CODE` value to query the system and store the `SRM_RESOURCES.ID` for the lookup value.

### Include Dynamic Query Lookup Attributes in the Data Warehouse

To include an attribute that uses a dynamic query lookup in the Data Warehouse:

1. Create the dynamic query lookup definition with specific coding rules described below.
2. Create an attribute of the data type "lookup" and enable it for the Data Warehouse. See Configure the Data Warehouse for more information.
3. Run the **Load Data Warehouse** job with the **Full Load** option selected.

#### Rules for Creating Dynamic Query Lookups for the Data Warehouse
- Always include a select column named `LAST_UPDATED_DATE`
- Set the alias or column field name to `LAST_UPDATED_DATE`
- Verify that `LAST_UPDATED_DATE` is a date field populated with a valid date

Example:

```sql
@SELECT:tp.PRMODTIME:LAST_UPDATED_DATE@
```

#### Rules for Including Language Translations in the Data Warehouse

Not all query tables have language translations. Adding language translations is optional. Use the following rules:
- Always include a select column named `LANGUAGE_CODE`
- Always include a select column named `LANGUAGE_ID`
- Always include the following statement in the WHERE clause:
  ```sql
  @WHERE:PARAM:LANGUAGE@
  ```

Example:

```sql
SELECT @SELECT:a.name:country_name@,
  @SELECT:c.currency_code:currency_code@,
  @SELECT:c.currency_code || ' (' || c.currency_symbol || ')':currency_name@,
  @SELECT:c.LAST_UPDATED_DATE:LAST_UPDATED_DATE@,
  @SELECT:LANG.LANGUAGE_CODE:LANGUAGE_CODE@,
  @SELECT:LANG.ID:LANGUAGE_ID@
FROM cmn_countries b, cmn_captions_nls a, cmn_currencies c, CMN_LANGUAGES LANG
WHERE a.table_name = 'CMN_COUNTRIES'
  AND @FILTER@
  AND a.pk_id = b.id
  AND a.language_code = @WHERE:PARAM:LANGUAGE@
  AND b.currency_id = c.id
  AND LANG.LANGUAGE_CODE=a.LANGUAGE_CODE
```

### Define Queries

Use the Query tab of a lookup to define lookup queries. Classic PPM only supports a special version of SQL statements named NSQL.

> [!WARNING]
> We recommend that you always include the phrase `@FILTER@` in the WHERE clause of the query.

**Example NSQL Statement:**

```sql
SELECT @SELECT:c.currency_code:currency_code@,
  @SELECT:c.currency_code:currency_name@
FROM cmn_currencies c
WHERE c.is_active = 1
  AND @FILTER@
```

#### Create Query Statements

**Follow these steps:**

1. If the Query page for a lookup does not display, select the desired dynamic query lookup, and click **Query**.
2. In the **Niku Query** field, enter NSQL statements.
3. Save the changes.

#### BROWSE-ONLY Construct for Dynamic Query Lookups

For dynamic query lookups, when you display a record in Classic PPM, the value may not appear in the lookup field if no match exists between the stored value and the list value. To retain inactivated values in the record, change the lookup query definition to include the `@BROWSE-ONLY` construct.

Syntax:

```sql
@BROWSE-ONLY: /* include SQL statement here to look at active results only */ :BROWSE-ONLY@
```

Example:

```sql
SELECT... FROM... WHERE @FILTER@ @BROWSE-ONLY: AND IS_ACTIVE = 1 :BROWSE-ONLY@
```

### Define Browse Window Characteristics for Dynamic Query Lookups

> [!TIP]
> Do not include an ORDER BY clause on a dynamic query that is used in a lookup. The Browse Window tab already includes a **Default Sorting Column** field.

**Follow these steps:**

1. Open a dynamic query lookup and click **Browse Window**.
2. In the **Filter Layout** section, select the fields to display in the Available Filter Fields list.
3. Click the right arrow to move them to the Selected Filter Fields list.
4. In the Selected Filter Fields list, use the up and down arrows to set the field order.
5. In the **List Layout** section, use the arrow keys to select and arrange the list columns.
6. Click **Apply** to update and prepare the next two fields.
7. Select a default sorting column from the **Default Sorting Column** field.
8. Select either **Ascending** (default) or **Descending** in the **Default Sort Order** field.
9. Click **Preview** to preview the browse window.
10. Perform one of the following:
- If the lookup does not contain pull-down values, click **Save and Exit**.
- If the lookup contains pull-down values, click **Save**. Click **Lookup Filters** on the top menu and associate the filter with the appropriate lookup.

### Define Lookup Filters for Dynamic Query Lookups

If you specified a pull-down list for the **Field Element Type** field:

**Follow these steps:**

1. With the dynamic query open, click **Lookup Filters**.
2. For each field, click the **Browse** icon in the Lookup column to select and associate the lookup with that filter.
3. Click **Exit**.

### Set Filter Options for Browse Lookups

**Follow these steps:**

1. With the lookup open, click **Browse Window**.
2. In the **Filter Options** section, select one of the following:
- **Automatically show results**: Displays all results for the lookup immediately.
- **Do not show results until I filter**: Only displays results after the user specifies filter options.
3. Save the changes.

### Create Parameterized Lookups

Parameterized lookups are based on dynamic query lookups. They provide the ability to control the results that display in a dynamic query based on other values entered in a view.

> [!NOTE]
> For a parameterized lookup, you cannot use a multi-value lookup as the source that determines the display in the secondary target lookup. Use a single-value lookup for the source.

Use the following process to create parameterized lookups:

1. Create a dynamic query lookup.
2. Create an NSQL query with lookup parameters in the Where clause that references attributes in the object.
3. Create a parameterized lookup attribute on the object and map the NSQL query lookup parameters to the appropriate object attributes.

Whenever you update the source field, Clarity will perform the following actions:
- If the current value in the parameterized lookup is valid and the source is changed, Clarity will not clear the lookup. If the value is invalid, Clarity will clear the lookup.
- If the parameterized lookup is read-only and the source attribute is changed, Clarity will clear the parameterized lookup.
- If the parameterized lookup is secured using FLS (View only or not visible) and the source attribute is changed, Clarity will clear the parameterized lookup.
- If the parameterized lookup is a required attribute and the source is changed, Clarity will not clear the lookup if the value is relevant. Otherwise, it will clear the values and display a modal for the user to enter the updated value.

> [!NOTE]
> Key points to remember:
> - Bulk edit, copy-paste, and fill handle operations for source attributes for required parameterized lookups are disabled.
> - If CSV Import changes a source attribute for a required parameterized lookup, the source attribute and parameterized lookup could be left with an invalid combination.
> - For parameterized lookups with a date source attribute, there are limitations when dragging-and-dropping cards on the calendar layout.
> - In the Calendar layout, if a source attribute is a date and you have a required parameterized lookup, drag-and-dropping cards will not display a modal; the changes will be applied in the database.
> - If you use business rules to set attributes on a parameterized lookup or its source attribute, set both the source and parameterized lookup attributes in the set attribute rule.
> - If the parameterized lookup is required and you are using the quick create + button in the grid, use the create template modal instead.
> - The maximum horizontal width is set to 280 pixels.

### Define Parent Window Characteristics for Lookups

**Follow these steps:**

1. With a dynamic query lookup open, click **Parent Window**.
2. Complete the requested information:
- **Internal Name**: Displays the internal name value.
- **Hidden Key**: Displays the hidden key value.
- **Display Attribute**: Specifies a display attribute value.
3. Save the changes.

### Configure Auto-Suggest Settings for Lookups

Auto suggest displays a list of values that match the characters that a user enters in lookup text fields. By default, auto suggest is enabled for all system lookups and any new lookups that you create.

The following lookup sources work with auto suggest:
- Static List
- Dynamic Query
- Parameterized

Auto suggest does not work with Static Dependent List lookup sources.

You can perform the following actions to configure auto suggest:
- Enable or disable auto suggest
- Specify the search values for the lookup
- Specify the values that display in the suggestion list for the lookup
- Indicate the number of items to display in the suggestion list

**Follow these steps:**

1. With the lookup open, click **Auto Suggest**.
2. Complete the following fields, and save:
- **Auto Suggest Enabled**: Indicates if auto suggest is enabled. Default: Selected
- **Number of displayed suggestions**: Defines the number of auto suggest results to display. Default: 20
- **Attribute Search Keys**: Specifies the search keys based on attributes to use when the user enters text. If you add multiple keys, auto suggest uses an OR expression. Default: Name
- **Attribute Suggestion List Display**: Specifies the keys that display in the suggestion list. If you specify multiple values, they display separated by the pipe (`|`) character (for example, `Bob Smith | Employee`). Default: Name
3. Select the attribute from the Attributes Available list and add it to the Attributes Selected list.

### Create Dynamic Lookups Directly Against the Data Warehouse

You can create lookup queries against the data warehouse instead of the application database. Classic PPM includes a default datasource for creating lookups against the data warehouse.

The following conditions apply:
- As a best practice, use these lookups only for creating report parameters. Data warehouse lookups are not available for attribute creation using Studio portlets or objects.
- This option is only available for creating dynamic lookup queries for Jaspersoft reports. Static lookups are not supported.
- Clarity DB Link is not supported for creating dynamic lookup queries using the Data Warehouse source.
- Lookups created using the Data Warehouse source are not available for selection while creating an attribute of type lookup.

> [!NOTE]
> The default security clause (`@security@`) is not supported with the default data warehouse data source. To implement your own security, create your query with all the required WHERE clauses.

**Lookup NSQL query examples:**

Language Code Parameter (`PARAM:LANGUAGE`):

```sql
SELECT DISTINCT @SELECT:lkp.investment_status_key:investment_status_key@,
  @SELECT:lkp.investment_status:investment_status@,
  @SELECT:lkp.sort_order:sort_order@
FROM dwh_lkp_investment_status lkp
  INNER JOIN dwh_inv_investment i ON i.investment_status_key = lkp.investment_status_key
WHERE lkp.is_active = 1
  AND i.investment_type_key = 'project'
  AND lkp.language_code = @WHERE:PARAM:LANGUAGE@
  AND @FILTER@
```

USER ID Parameter (`PARAM:USER_ID`):

```sql
SELECT DISTINCT @SELECT:r.resource_key:resource_key@,
  @SELECT:r.resource_id:resource_id@,
  @SELECT:r.resource_name:resource_name@
FROM dwh_res_resource r
  INNER JOIN dwh_res_resource rm ON r.resource_key = rm.resource_manager_key
WHERE r.is_role = 0 AND r.is_active = 1
  AND EXISTS (SELECT 1 FROM dwh_res_security_v
    WHERE user_key = @WHERE:PARAM:USER_ID@
    AND resource_key = r.resource_key)
  AND @FILTER@
```

USER_DEF Parameter (`PARAM:USER_DEF`):

```sql
SELECT @SELECT:PHASE.TASK_ID:PHASE_INT_ID@,
  @SELECT:PHASE.TASK_NAME:PHASE_NAME@,
  @SELECT:PHASE.WBS_SEQUENCE:PHASE_WBS_SEQUENCE@
FROM DWH_INV_TASK PHASE
WHERE PHASE.WBS_LEVEL = 1
  AND (@WHERE:PARAM:USER_DEF:INTEGER:PROJECT_ID_CONSTRAIN@ IS NULL
    OR @WHERE:PARAM:USER_DEF:INTEGER:PROJECT_ID_CONSTRAIN@ = PHASE.INVESTMENT_KEY)
  AND @FILTER@
```

NVL Function (`ISNULL`/`NVL`):

```sql
SELECT @SELECT:'T'+ team.TEAM_KEY:UNIQUE_KEY@,
  @SELECT:@NVL@(team.REQUIREMENT_NAME,1):NAME@,
  @SELECT:team.DW_UPDATED_DATE:last_updated_date@
FROM dwh_inv_team team
WHERE 1=1 AND @FILTER@
```

---

## Rules for Changing Lookups

### General Lookup Rules

| Lookup Type | Rule |
|---|---|
| **System-restricted** | You can only change labels. |
| **User-defined** | You can change any field. |
| **System lookup** | You can add values. You cannot deactivate system lookups. You can activate and deactivate the values that you add. |

### Static List Lookups

| Function | System-restricted | User-defined |
|---|---|---|
| Change Lookup Name and Description | Yes | Yes |
| Change Sort Order | No | Yes |
| Change Content Source | No | No |
| Deactivate or Activate Lookup | No | No |
| Delete Lookup | No | No |
| Change Lookup Value Name and Description | Yes | Yes |
| Change Parent Window Display Attribute | No | No |
| Change Partition and Partition Associations | No | No |
| Deactivate and Activate Lookup Values | No | No |
| Reorder Manual Lookup Values | Yes | Yes |
| Change Auto Suggest Settings | Yes | Yes |

### Static Dependent List Lookups

The following table summarizes the rules that apply when changing static dependent list lookups:

| Function | System-restricted | System | User-defined |
|---|---|---|---|
| Change Lookup Name and Description | Yes | Yes | Yes |
| Change Sort Order | No | Yes | Yes |
| Change Content Source | No | Yes | Yes |
| Deactivate or Activate Lookup | No | Yes | Yes |
| Delete Lookup | No | Yes | Yes |
| Change Lookup Value Name and Description | Yes | Yes | Yes |
| Change Parent Window Display Attribute | Not Applicable | Not Applicable | Not Applicable |
| Deactivate and Activate Lookup Values | No | Yes | Yes |
| Reorder Manual Lookup Values | Yes | Yes | Yes |

### Dynamic Niku Query Lookups

| Function | System-restricted | System | User-defined |
|---|---|---|---|
| Change Lookup Name and Description | Yes | Not Applicable | Yes |
| Edit Query | No | Not Applicable | Yes |
| Change Parent Window Display Attribute | No | Not Applicable | Yes |
| Change Browse Window Name and Label fields | Yes | Not Applicable | Yes |
| Change Browse Window Field Element Type | No | Not Applicable | Yes |
| Change Browse Window Selected Filter and List fields | No | Not Applicable | Yes |
| Change Browse Window Filter field, List Column Order | Yes | Not Applicable | Yes |
| Change Browse Window Default Sort Column/Order | Yes | Not Applicable | Yes |
| Change Auto Suggest Settings | Yes | Not Applicable | Yes |

### Resource Lookups for Action Items

Classic PPM provides the following stock lookups for use with the Action Item Assignees functionality:
- Resource Browse (`SCH_BROWSE_RESOURCE`)
- All Resources Browse (`LOOKUP_RESOURCES_ALL`)

The lookup definitions contain the following general properties:
- Object = Resource and the Parent Window
- Hidden Key = ID value from `SRM_RESOURCES` table

The Classic PPM process Action Item Assignees functionality expects the internal record ID for a Resource record, which is stored on the `SRM_RESOURCES` table. The functionality does not expect a user record ID. You can create a custom attribute that uses a stock Resource Browse lookup type, or you can create your own dynamic query lookup definition.

The most commonly used system-supplied lookup that meets this criteria is `SCH_BROWSE_RESOURCE`.

> [!NOTE]
> Do not confuse the Resource Browse lookups with similarly named resource or user lookups.

### Activate and Deactivate Lookups

Lookups are activated by default when you create them. A lookup must be active before you can use it in reports or other objects. You can deactivate the lookups that you created, but cannot deactivate system or system-restricted lookups.

**Follow these steps:**

1. Open the lookup.
2. Complete the following field, and save:
- **Active**: Specifies if the value is visible on the page when displayed to the users. Clear the check box to hide the value from view. Default: Selected

### Activate and Deactivate Lookup Values

Lookup values are activated by default when you create them. A lookup value must be active to appear in a lookup. You can activate or deactivate user-defined static list and static dependent list values. But you cannot deactivate dynamic query values.

**Follow these steps:**

1. Open the lookup that contains the values to activate or deactivate.
2. Click **Values**.
3. Select the check box next to the values to activate or deactivate.
4. Click **Activate** or **Deactivate**. A check mark appears in the Active column for the active values.

### Apply Filters to Find Lookups

Use the lookup filter to find a specific lookup or family of lookups.

**Follow these steps:**

1. Click **Administration**, **Data Administration**, **Lookups**.
2. Use any of the following parameters to define search criteria:
- **Lookup Name**: Specifies all or part of the lookup name. For example, `Active Resources` or `Active*`.
- **Lookup ID**: Specifies all or part of the Lookup ID.
- **Description**: Specifies all or part of the lookup description.
- **Source**: Specifies the lookup source. Values: Static List, Static Dependent List, Dynamic Query, or All.
- **System Type**: Specifies the lookup type. Values: System, System-restricted, User-defined, or All.
- **Status**: Indicates if you want to search for active or inactive lookups.
- **Object**: Indicates whether the search is by object (for Dynamic queries only).
3. Click **Filter**.

> [!TIP]
> Filters support your use of wildcard characters.

### Limit the OBS Types That Appear in OBS Browse Lists

Use the **Hide Financial OBS** option to filter and limit the number of organizational breakdown structure (OBS) types that appear in the OBS browse lists. The option is useful for businesses with many OBS entries in the browse lookup lists. Applying the option removes the OBS listings that are financial (Department or Location types) from the OBS browse lists.

#### Hide Financial OBS Option

The option to filter the OBS browse lists affects the following lookup IDs:
- `OBS_BROWSE_FLT_ALL`
- `OBS_BROWSE_FLT_BPM_DEF_PROCESSES`
- `OBS_BROWSE_FLT_CMP`
- `OBS_BROWSE_FLT_CMN_PAGES`
- `OBS_BROWSE_FLT_CMN_PORTLETS`
- `OBS_BROWSE_FLT_CMN_SCH_JOB_DEFINITIONS`
- `OBS_BROWSE_DMART_FLT_RES`
- `OBS_BROWSE_DMART_FLT_PRJ`
- `OBS_BROWSE_FLT_INV_APPLICATION`
- `OBS_BROWSE_FLT_INV_ASSET`
- `OBS_BROWSE_FLT_INV_OTHER`
- `OBS_BROWSE_FLT_INV_PRODUCT`
- `OBS_BROWSE_FLT_PRJ`
- `OBS_BROWSE_FLT_RES`

The option affects filtering of the following areas:
- **Reports**: Reports using OBS Unit as a filter do not provide the Financial OBS drill-down within the Show OBS dropdown list.
- **Resource List**: The Resource filter does not provide the Financial OBS drill-down.
- **Investment Filter**: Investments associated with a financial OBS cannot be filtered using the Show OBS dropdown list.
- **OBS Access Rights**: Associate access rights through the OBS Unit for nonfinancial OBS types. Access rights for financial OBS types must be handled through a separate security OBS.

#### Set the Hide Financial OBS Option

**Follow these steps:**

1. Click **Administration**, **Finance**, **Processing**.
2. Select the **Hide Financial OBS** check box in the OBS Filter section.
3. Click **Save**.

---

## Configure Reports and Jobs

As an administrator, you configure which reports and jobs are active for other users to run. A report or job definition consists of the following items:
- General properties.
- Parameters to filter report data or to specify the scope of a job.
- Incompatible reports and jobs that cannot run concurrently with the selected report or job.
- Associated categories to identify groups of similar reports and jobs.
- Access rights to define the resources, OBS units, or groups of users who can run or manage the report or job.

> [!TIP]
> As an administrator, you select **Administration**, **Data Administration**, **Reports and Jobs**, to make configuration changes. To view available reports and jobs, users select **Home**, **Personal**, **Reports and Jobs**.

### Video: Data Extraction

The following video is provided by CA Technologies.

> [!TIP]
> To play this video in full screen, click the YouTube logo to the right of Settings at the bottom of the video.

### Create a Job Definition

Use the Job Definitions page to view a list of all available report and job definitions. You can edit only user-defined report and jobs.

**Follow these steps:**

1. Open **Administration**, and from **Data Administration**, click **Reports and Jobs**.
2. Click **New**.
3. In the **Executable Type** field, specify the method for running the report or job. Select one of the following executable types:
- **Report**: Executes a Jaspersoft report stored on your Jaspersoft server.
- **Java**: Executes queries. Use when you cannot implement the business logic XBL. Example: `com.niku.calendar.scheduler.CalendarBackgroundProcess`
- **Persistent Meta Data (PMD)**: Executes a set of queries at regular intervals. Example: `itl.incidentCostCalc`
- **SQL Stored Procedure**: Implements business logic as a stored procedure when operations are data intensive. Example: `cmn_job_logs_delete_sp`
- **Extensible Business Language (XBL)**: Implements business logic and executes queries. Examples: `postTimesheets.xql`, `blobcrack#blobcrack.xbl`
- **Extract, Transform, and Load (ETL)**: Executes an ETL extraction, structured data transformation, and loads the transformed data tables.

4. In the **Executable Name** field, enter a name for the report or job. Examples by type:
- **Report**: `/ca_ppm/reports/investment_management/CSK_INV_TimeAndEstimate`
- **Java**: `com.myorg.projmgr.service.staffing.job.InvestmentAllocationJob`
- **PMD**: `itl.incidentCostCalc`
- **SQL Stored Procedure**: `IMM_ASSIGN_INCIDENT`
- **XBL**: `projmgr#projects/purgeProjects.xbl`
- **ETL**: Enter the ETL job filename.
5. Save your changes.

### Define the Report or Job Parameters

Report or job parameters enable users to filter data or to specify the scope.

**Follow these steps:**

1. Open **Administration**, and from **Data Administration**, click **Reports and Jobs**.
2. Open the report or job definition.
3. Click **Parameters**, and then click **New**.
4. Complete the requested information:
- **Bind Parameter Code**: Defines the parameter bind code.
- **Type**: Specifies the parameter field type. Values:
- **Text**: Displays a text field.
- **Checkbox**: Displays Boolean values (true or false).
- **Pull-down**: Displays a list of values from a drop-down.
- **Browse**: Displays a long list of values that users can browse.
- **Date**: Displays date parameters with calendar selection.
- **Relative Date**: Allows selection of a date relative to the day the job runs.
- **Time Period**: Allows selection of a time period relative to the day the job runs.

> [!NOTE]
> Save changes to set default values for browse or pull-down parameter types.
- **Default**: Indicates the read-only value of the parameter.
- **Read-only**: Indicates if the parameter is read-only. If selected, provide a value in the Default field.
5. Save your changes.

### Use the UNIX Crontab to Schedule Jobs

The UNIX cron format is used to specify time while scheduling jobs in Clarity. You can use the **Set Recurrence** link on the Job Properties page to open the Job-Recurrence window.

The parameters are:
- 1st argument: minutes of the hour (0-59)
- 2nd argument: hour of the day (0-23)
- 3rd argument: day of the month (1-31)
- 4th argument: month of the year (1-12)
- 5th argument: day of the week (0-6)

> [!IMPORTANT]
> The Clarity application uses formatting similar to the UNIX Crontab formatting but is NOT exactly using all aspects of the formatting rules:
> - Do NOT use the hyphen symbol (`-`) to define the format of arguments.
> - The application does not check for hyphens. If you use this, your schedule may have unpredictable results.
> - If you want to define a range for a specific argument, you must specify the numbers separated by commas with no spaces between the numbers and commas.
> - Spaces are only used as the delimiters between the arguments.

**Follow these steps:**

1. In Classic PPM, click **Home**, **Reports and Jobs**, and select the **Jobs** tab.
2. Select the relevant job.
3. Select the **Set Recurrence** link (available in the When tab below the Recurrence field).
4. In the Recurrence window, enter the relevant parameters in the **Use UNIX crontab entry format** field.
5. Click **Save and Return** to save your changes.

### Reorder Report or Job Definition Parameters

Parameters are displayed in the order in which you add them. The order is important for SQL Stored Procedure jobs.

**Follow these steps:**

1. Open **Administration**, and from **Data Administration**, click **Reports and Jobs**.
2. Open the report or job definition to reorder parameters.
3. Select **Parameter Order**.
4. Select the parameter and use the arrows to move it up or down the list.
5. Save your changes.

### Identify Incompatible Report or Job Definitions

Some reports or jobs cannot run simultaneously. Use the Incompatible Jobs page to identify the jobs that cannot run simultaneously as the selected job.

**Follow these steps:**

1. Open **Administration**, and from **Data Administration**, click **Reports and Jobs**.
2. Open the report or job definition that you want to edit.
3. Click **Incompatible Jobs**, and click **Add**.
4. Select the check box next to the report or job that cannot run with this report or job and click **Add**.

### Associate Report or Job Definitions with Categories

Use the set of categories included with the product to group reports or jobs in meaningful ways.

**Follow these steps:**

1. Open **Administration**, and from **Data Administration**, click **Reports and Jobs**.
2. Open the report or job definition, and click **Associated Categories**.
3. Click **Add**.
4. Select the category to associate with the report or job, and click **Add**.

System

User-defined Yes
Yes Yes Yes Yes Yes
Yes
Yes
Yes
Yes Yes

Static Dependent List Lookups The following table summarizes the rules that apply when changing static dependent list lookups:

Function

System-restricted

Change Lookup Name and

Yes

Yes

Description

Change Sort Order

No

Yes

Change Content Source

No

No

Deactivate or Activate Lookup No

No

Delete Lookup

No

No

System

User-defined Yes
Yes Yes Yes Yes


Function

System-restricted

Change Lookup Value Name Yes and Description
Change Parent Window Display Not Applicable Attribute
Deactivate and Activate Lookup No Values
Reorder Manual Lookup Values Yes

System Yes Not Applicable Yes Yes

User-defined Yes Not Applicable Yes Yes

Dynamic Niku Query Lookups The following table summarizes the rules that apply when changing dynamic Niku query lookups:

Function

System-restricted

Change Lookup Name and

Yes

Description

Edit Query

No

Change Parent Window Display No Attribute

Change Browse Window Name Yes and Label fields

Change Browse Window Field No Element Type

Change Browse Window

No

Selected Filter and List fields

Change Browse Window Filter Yes field, List Column Order

Change Browse Window Default Yes Sort Column/Order

Change Auto Suggest Settings Yes

System Not Applicable Not Applicable Not Applicable Not Applicable Not Applicable Not Applicable Not Applicable Not Applicable Yes

User-defined Yes Yes Yes Yes Yes Yes Yes Yes Yes

Resource Lookups for Action Items
Classic PPM provides the following stock lookups for use with the Action Item Assignees functionality:
- Resource Browse (SCH_BROWSE_RESOURCE) - All Resources Browse (LOOKUP_RESOURCES_ALL)
The lookup definitions contain the following general properties:
- Object = Resource and the Parent Window - Hidden Key = ID value from SRM_RESOURCES table
The Classic PPM process Action Item Assignees functionality expects the internal record ID for a Resource record, which is stored on the SRM_RESOURCES table. The functionality does not expect a user record ID. You can create a custom attribute that uses a stock Resource Browse lookup type, or you can create your own dynamic query lookup definition.
The most commonly used system-supplied lookup that meets this criteria is the Lookup ID = SCH_BROWSE_RESOURCE. Using this lookup, you can create your own dynamic lookup that returns the SRM_RESOURCE.ID value as the hidden key value in the lookup.


NOTE Do not confuse the Resource Browse lookups with similarly named resource or user lookups.


Activate and Deactivate Lookups
Lookups are activated by default when you create them. A lookup must be active before you can use it in reports, or other objects. You can deactivate the lookups that you created, but cannot deactivate system or system-restricted lookups.
**Follow these steps:**
1. Open the lookup. 2. Complete the following field, and save:
- Active: Specifies if the value is visible on the page when displayed to the users. Clear the check box to hide the value from view. Default: Selected

Activate and Deactivate Lookup Values
Lookup values are activated by default when you create them. A lookup value must be active to appear in a lookup. You can activate or deactivate user-defined static list and static dependent list values. But you cannot deactivate dynamic query values.
**Follow these steps:**
1. Open the lookup that contains the values to activate or deactivate. 2. Click Values. 3. Select the check box next to the values to activate or deactivate. 4. Click Activate or Deactivate. A check mark appears in the Active column of the lookups page for the active values.

Apply Filters to Find Lookups
Use the lookup filter to find a specific lookup or family of lookups.
**Follow these steps:**
1. Click Administration, Data Administration, Lookups. 2. Use any of the following parameters to define search criteria for lookups:
- Lookup Name: Specifies all or part of the lookup name. For example, you can enter Active Resources or Active* .
- Lookup ID: Specifies all or part of the Lookup ID. - Description: Specifies all or part of the lookup description. - Source: Specifies the lookup source. Values: Static List, Static Dependent List, Dynamic Query, or All. - System Type: Specifies the lookup type. Values: System, System-restricted, User-defined, or All. - Status: Indicates if you want to search for active or inactive lookups. - Object: Indicates whether the search is by object (for Dynamic queries only) if you selected an object while
creating the lookup. 3. Click Filter.
> [!TIP]
> Filters support your use of wildcard characters.

Limit the OBS Types That Appear in OBS Browse Lists
Use the Hide Financial OBS option to filter and limit the number of organizational breakdown structure (OBS) types that appear in the OBS browse lists. The option is useful for businesses with many OBS entries in the browse lookup lists,


owing to many entities. Applying the option removes the OBS listings that are financial (Department or Location types) from the OBS browse lists.
The option is applied in addition to any existing customization for a browse. You can see different results than you expect for some customized browses. A List Filter view of a custom object, by default, contains the OBS Unit attribute. The enhancement affects a browse on this attribute.
Hide Financial OBS Option
The option to filter the OBS browse lists affect the following lookup IDs:
- OBS_BROWSE_FLT_ALL - OBS_BROWSE_FLT_BPM_DEF_PROCESSES - OBS_BROWSE_FLT_CMP - OBS_BROWSE_FLT_CMN_PAGES - OBS_BROWSE_FLT_CMN_PORTLETS - OBS_BROWSE_FLT_CMN_SCH_JOB_DEFINITIONS - OBS_BROWSE_DMART_FLT_RES - OBS_BROWSE_DMART_FLT_PRJ - OBS_BROWSE_FLT_INV_APPLICATION - OBS_BROWSE_FLT_INV_ASSET - OBS_BROWSE_FLT_INV_OTHER - OBS_BROWSE_FLT_INV_PRODUCT - OBS_BROWSE_FLT_PRJ - OBS_BROWSE_FLT_RES
The option affects filtering of the following areas:
- Reports: Reports using OBS Unit as a filter do not provide the Financial OBS drill-down within the Show OBS dropdown list. To run a report against an investment that is assigned to a financial OBS, use different filter options. For example, Project Manager, or leave the OBS filter option empty.
- Resource List: The Resource filter, within the resource list or within Project Team, does not provide the Financial OBS drill-down within the Show OBS drop-down list. To search for resources to assign to a financial OBS and cannot display, use different filter options. For example, part of the resource name. In most cases, resources are assigned to an enterprise OBS and the impact is minimal.
- Investment Filter: Investments that are associated with a financial OBS cannot be filtered using the Show OBS dropdown list. Use other filter options to reduce the list.
- OBS Access Rights: Associate access rights through the OBS Unit for nonfinancial OBS types. Access rights for financial OBS types on portlets, objects, processes, or other items must be handled through a separate security OBS. You can also temporarily turn off the Hide Financial OBS option.
Set the Hide Financial OBS Option
**Follow these steps:**
1. Click Administration, Finance, Processing. 2. Select the Hide Financial OBS check box in the OBS Filter section. 3. Click Save.
Configure Reports and Jobs
As an administrator, you configure which reports and jobs are active for other users to run. A report or job definition consists of the following items:
- General properties. - Parameters to filter report data or to specify the scope of a job. - Incompatible reports and jobs that cannot run concurrently with the selected report or job. - Associated categories to identify groups of similar reports and jobs. For example, finance-related jobs can be grouped
in the financial processing category. - Access rights to define the resources, OBS units, or groups of users who can run or manage the report or job.
> [!TIP]
> As an administrator, you select Administration, Data Administration, Reports and Jobs, to make configuration changes. To view available reports and jobs, users select Home, Personal, Reports and Jobs.
- Video: Data Extraction - Create a Job Definition - Create a Report Definition - Create a Job - Update Investments Created Before Classic PPM Release 13.2 to Display Capital and Operating Expenses
Video: Data Extraction
The following video is provided by CA Technologies.
> [!TIP]
> To play this video in full screen, click the YouTube logo to the right of Settings at the bottom of the video.
Create a Job Definition
Use the Job Definitions page to view a list of all available report and job definitions. You can edit only user-defined report and jobs.
**Follow these steps:**
1. Open Administration, and from Data Administration, click Reports and Jobs. 2. Click New. 3. In the Executable Type field, specify the method for running the report or job. The method is based on the job
listener. Select one of the following executable types: - Report: Executes a Jaspersoft report stored on your Jaspersoft server. For the product to be aware of reports,
definition files refer to the executable by name. The executable name stores the file on the Jaspersoft server. - Java: Executes queries. Use when you cannot implement the business logic XBL. Java is considered a super-
set of XBL and PMD. For example, the following Java statement performs the calendar background process: com.niku.calendar.scheduler. CalendarBackgroundProcess - Persistent Meta Data (PMD): Executes a set of queries at regular intervals. PMD does not contain business logic. For example, the following PMD statement executes the Post Incident Financials job: itl.incidentCostCalc - SQL Stored Procedure: Implements business logic as a stored procedure when operations are data intensive. For data intensive operations, a SQL stored procedure is selected over Java for implementing business logic. For example, the following stored procedure executes the Remove Job Logs job: cmn_job_logs_delete_sp - Extensible Business Language (XBL): Implements business logic and executes queries. XBL is considered a super-set of PMD. For example, the following XQL/XBL statements execute the Post Timesheets and Time Slicing jobs, respectively: postTimesheets.xql blobcrack#blobcrack.xbl - Extract, Transform, and Load (ETL): Executes an ETL extraction, structured data transformation, and loads the transformed data tables. For example, the Load Data Warehouse job extracts data from the Classic PPM database. This ETL job transforms that data into a denormalized format and then loads it into the data warehouse.

4. In the Executable Name field, enter a name for the report or job. The naming convention depends on the executable type. Refer to the following examples: - Report: The report name on the JasperReports server. For example, /ca_ppm/reports/investment_management/ CSK_INV_TimeAndEstimate. - Java: Enter the class path. For example, com.myorg.projmgr.service.staffing.job.InvestmentAllocationJob or com.company.security.CleanUserSessionListener. - PMD: Enter a descriptive name using dot syntax; for example, itl.incidentCostCalc. - SQL: Stored Procedure: Enter a descriptive name using underscores; for example, IMM_ASSIGN_INCIDENT. - XBL: For example, projmgr#projects/purgeProjects.xbl - ETL: Enter the ETL job filename.
5. Save your changes.
Define the Report or Job Parameters
Report or job parameters enable users who run reports or jobs to filter data or to specify the scope of the report or job. For example, you add a parameter, make an existing one mandatory, or delete a parameter from a report or job definition.
Define all report or job parameters for passing on to the server from Classic PPM. Define the parameters whether the report or job is executed directly from the product, or indirectly from a link in another report or job.
**Follow these steps:**
1. Open Administration, and from Data Administration, click Reports and Jobs. 2. Open the report or job definition. 3. Click Parameters, and then click New. 4. Complete the requested information. The following fields require explanation:
- Bind Parameter Code Defines the parameter bind code. For example, the job executable type is an SQL stored procedure and the SQL stored procedure parameter name is "P_JOB_RUN_ID". The bind parameter code is "P_JOB_RUN_ID."
- Type Specifies the parameter field type that is displayed to users when they select parameters to run their job. Values: - Text: Displays a text field to users who run jobs. - Checkbox: Displays Boolean values (true or false). - Pull-down: Displays a list of values that users can select from a drop-down. Users click the Browse icon to select a single value from the lookup that appears. - Browse: Displays a long list of values that users can browse. Users click the Browse icon to select a single value from the lookup that appears. - Date: Displays date parameters. Users who run jobs can either enter a date or select a date from a calendar. - Relative Date: Displays a field to allow users to select a date relative to the day the job runs. The relative dates exist in a drop-down of calendar periods. - Time Period: Displays a field from which users can select a time period relative to the day the job runs. The drop-down provides system-defined periods.
> [!NOTE]
> Save changes to set default values for browse or pull-down parameter types. - Default: Indicates the read-only value of the parameter. Required: If you selected the Read-only field. - Read-only: Indicates if the parameter is read-only when the field is selected. If you select Read-only, provide a value for the parameter in the Default field. 5. Save your changes.

Use the UNIX Crontab to Schedule Jobs The UNIX cron format is used to specify time while scheduling jobs in Clarity. You can use the Set Recurrence link on the Job Properties page to the Job-Recurrence window. You can then specify the parameters in the Use UNIX crontab entry format box.
The parameters are listed below: - The 1st argument denotes the minutes of the hour. (0 - 59) - The 2nd argument denotes the hour of the day. (0 - 23) - The 3rd argument denotes the day of the month. (1 - 31) - The 4th argument denotes the month of the year. (1 - 12) - The 5th argument denotes the day of the week. (0-6).
> [!IMPORTANT]
> The Clarity application uses formatting similar to the UNIX Crontab formatting but is NOT exactly using all aspects of the formatting rules: - Do NOT use the hyphen symbol (-) to define the format of arguments.
- The application does not check for hyphens. If you use this, your schedule may have unpredictable results.
- If you want to define a range for a specific argument, you must specify the numbers separated by commas with no spaces between the numbers and commas.
- Spaces are only used as the delimiters between the arguments. **Follow these steps:**
1. In Classic PPM, click. Home, Reports and Jobs, and select the Jobs tab. 2. Select the relevant job. 3. Select the Set Recurrence link. It's available in the When tab below the Recurrence field. 4. In the "Job-Name" - Recurrence window, enter the relevant parameters in the Use UNIX crontab entry format field. 5. Click Save and Return to save your changes.
> [!NOTE]
> See the following Knowledge Base article to learn more about using the UNIX Crontab to schedule jobs in Clarity.
Reorder Report or Job Definition Parameters Parameters are displayed in the order in which you add them to the report or job definition. The order of parameters is important for SQL Stored Procedure jobs. To reorder the definition parameters, at least one parameter must be defined.
**Follow these steps:** 1. Open Administration, and from Data Administration, click Reports and Jobs. 2. Open the report or job definition to reorder parameters. 3. Select Parameter Order. 4. Select the parameter and use the arrows to move the parameter up or down the list. 5. Save your changes.
Identify Incompatible Report or Job Definitions Some reports or jobs or instances of the same report or job cannot run simultaneously. For example, you cannot concurrently run a job with the Datamart Extraction job if they depend on data resulting from the datamart extraction.

Use the Incompatible Jobs page to identify the jobs that cannot run simultaneously as the selected job. If jobs become compatible, delete jobs from the list. Delete reports and jobs if they become compatible. For example, you schedule to run an incompatible report or job listed. The scheduled run time of the incompatible report or job is postponed until the running report or job completes. Use these steps to compile a list of reports or jobs that cannot run concurrently.
**Follow these steps:** 1. Open Administration, and from Data Administration, click Reports and Jobs. 2. Open the report or job definition that you want to edit. 3. Click Incompatible Jobs, and click Add. 4. Select the check box next to the report or job that cannot run with this report or job and click Add.
Associate Report or Job Definitions with Categories Use the set of categories that are included with the product to group reports or jobs in meaningful ways. Categories help to filter reports or jobs. No new categories can be created or deleted. Use the Associated Categories page of report or job definition to add or remove jobs from categories.
**Follow these steps:** 1. Open Administration, and from Data Administration, click Reports and Jobs. 2. Open the report or job definition, and click Associated Categories. 3. Click Add. 4. Select the category to associate with the report or job, and click Add.
Report and Job Notifications As an administrator, you can advise users to set up notifications if they want to know when a report or job is finished or fails. Recipients can receive notifications by an alert, email, or SMS text message. You can configure the subject and body of report and job notifications to meet your organization requirements. For example, email can indicate the reason for a failed job.
Provide the following steps to users or give them a link to Personalize Classic PPM Notifications: 1. Click Home, Personal, Account Settings. 2. Click Notifications. 3. Select the check box next to each notification and method you want to receive. 4. Save your changes.
Activate or Deactivate a Report or Job Activate report or jobs to run them. Inactive reports or jobs display on the definitions page, but the check box in the Active column is not selected.
**Follow these steps:** 1. Open Administration, and from Data Administration, click Reports and Jobs. 2. Select Job Definitions. 3. Complete one of the following steps:
- Select the inactive report or job, and click Activate. - Select the active report or job, and click Deactivate.
Cancellable Jobs You can cancel currently running jobs. You may still cancel scheduled jobs (e.g. those that will run in the future as a result of recurrences, etc.).


**Follow these steps:**
1. Open Administration, and from Data Administration, click Reports and Jobs. 2. Click a Job and observe the following details:
- If the Cancellable field is checked then job can be cancelled. - If the Cancellable field is unchecked then job cannot be cancelled.
The following jobs (in running state) are only allowed to be cancelled.


Sl. No.
1 2 3 4 5 6 7 8 9 10 11 12 13 14

Job Name
Time Slicing Escalation Delete Investments and Time Reporting Periods Post Timesheets Autoschedule Project Convert Mixed Booking Status Purge Picklist Data Sync SaaS Users Export to CSV Job Time Slicing Sync Update Earned Value and Cost Totals Bulk PDF Export Populate Timesheets Timesheet Integration

Any other running job, when attempted to be cancelled, would result in an error with message - NJS-0137: Job job name cannot be cancelled

Create a Report Definition
Define Jaspersoft Studio reports in Clarity so that end-users can run these reports directly from the product under Home, Personal, Reports & Jobs. You can also run Jaspersoft Studio reports from Advanced Reporting. See Advanced Reporting with Jaspersoft, Run or Schedule an Advanced Report.
Use the Job Definitions page to view a list of all available report definitions. You can create and edit only user-defined reports.
**Follow these steps:**
1. Click Administration, Data Administration, Reports and Jobs. 2. Click New and enter the following information:
- Job Definition Name: Defines the report name as it appears in Jaspersoft. For example, KPIs by Project Type as shown for the Name field in the following image.
- Job Definition ID: Defines the Resource ID for the report as specified in Jaspersoft. Navigate to Advanced Reporting and select the Edit option for the report. The Resource ID appears on the Setup the Report page as shown in the following image:
- Content Source: Defines the source for the report content. Select Customer for user-defined reports. - Description: Describes the report. For example, the KPI by Project Type report is described as a project management
(PMO Accelerator) report. - Active: Specifies whether the report is available to run for end-users. Activate the report to make it visible in Clarity
from Home, Personal, Reports and Jobs. Verify that the report is also visible in Jaspersoft. - Executable Type: Specifies the method for running the report based on the listener. Select Report to execute a
Jaspersoft Studio report that is stored on your Jaspersoft Server. For the product to be aware of reports, definition files refer to the executable by name. The Executable Name field stores the path to the file on the Jaspersoft server. - Executable Name: Defines the path to the repository folder where the report is stored in Jaspersoft. Complete the following steps to specify the path accurately: a. In Advanced Reporting, use the the repository folders navigate to the report. b. Right-click the report name and select Properties to see the full path to the report. c. Use the same casing as shown for Path. The following example shows the executable name for the KPIs by
Project Type report:

3. Click Save and Continue.The Parameters tab is selected. Proceed to define parameters for the report. Define the Report Parameters Report parameters allow users to filter data or to specify the scope of the report. For example, you add a parameter, make an existing one mandatory, or delete a parameter from a report definition. We recommend that you add the parameters one at a time rather than all at once. If there is a problem, you can then use the process of elimination to keep progressing incrementally. You must define a parameter for each input control that exists for the report in Jaspersoft. Also, you must define the parameters in the same order as the input controls.
> [!NOTE]
> Some parameters such as OBS type are dependent lookups in Jaspersoft. When you select an OBS type, it also shows an OBS unit. In PPM, you can use the OBS browse to filter on an OBS unit. You do not need to create a parameter for a dependent lookup. You can also skip mapping parameters for the "populate" input controls. These input controls appear in Jaspersoft as check boxes on the report for performance reasons. For example, the "populateProject" input control appears for the KPIs by Project Type report. When you check the input control, the report is prepopulated with projects. Example: The following image shows how the parameters labels in Clarity map to the Jaspersoft input controls for the KPIs by Project Type report. There is no parameter mapping for the projectOBSTypekey_1 input control because it is a dependent lookup. Also, the "populate" input controls are skipped.

Prerequisite When associating a parameter to a field type that is a lookup, verify that the lookup attribute exists in PPM. The lookup in Clarity must mirror the behavior of the Jaspersoft input control as they are both being used for the same parameter. **Follow these steps:** 1. Click Parameters, New. 2. Enter the following information:
- Parameter Label: Defines the parameter label that users see when they run the report. Verify that the label corresponds to the input control in Jaspersoft. For example, for the KPIs by Project Type report, the Project Type parameter corresponds to the Project Type label in Jaspersoft.
- Bind Parameter Code: Binds the parameter to the input control. The field determines how the Clarity parameter is passed as an input control to Jaspersoft. The bind parameter code for a parameter must exactly match the input control ID. For example, for the KPI by Project Type report, the bind parameter code for the Project Type parameter, is projectTypeKey_1.
- Type: Specifies the parameter field type that users see when they select the parameter to run the job. The type should match the data type for the report in Jaspersoft. Values: - Text: Displays a text field. - Checkbox: Displays Boolean values (true or false). - Pull-down: Displays a list of values that users can select from a drop-down. If you select this type, also select the following options:
- Lookup Style. Select Single-select or Multiple-select depending on what style is selected for the corresponding input control in Jaspersoft.
- Pull-Down. Browse and select a lookup to display for the field. - Browse: Displays a long list of values that users can browse. Users click the Browse icon to select a single
value from the lookup that appears. If you select this type, also select the following options: - Lookup Style. Select Single-select or Multiple-select depending on what style is selected for the
corresponding input control in Jaspersoft. - Browse. Browse and select a lookup to display for the field. - Date: Displays date parameters. Users can either enter a date or select a date from a calendar. - Relative Date: Displays a field to allow users to select a date relative to the day the report runs. The relative dates exist in a drop-down of calendar periods. - Time Period: Displays a field from which users can select a time period relative to the day the job runs. The drop-down provides system-defined periods. - Default: Specifies a default value for the parameter. Provide a default value only if a default is available for the corresponding input control in Jaspersoft.
> [!TIP]
> In PPM, if you do not specify a default, no default value appears for the report parameter. In Jaspersoft, the first value in a list of values is always selected and appears like a default value. This is true even if no default value is defined for the input control. 3. Specify if the parameter requires a value and if it is read-only. 4. After creating and saving all report parameters, click Save and Return. 5. Click Parameter Order. Specify the order in which to display the parameters in the report. Follow the same order as that of the input controls in the Jaspersoft report. 6. Click Save and Continue.
Define Report Incompatibility
You must specify if your report is incompatible to run simultaneously with any other reports or jobs. Also specify if multiple instances of the same report cannot run simultaneously.
**Follow these steps:**
1. Click Incompatible Jobs. 2. Select Report from Executable Type. 3. Add the following information for your report definition as applicable:
a. Any reports or jobs that cannot run simultaneously with the report. b. Another instance of the same report. 4. Click Return when done.
Associate a Report Category
You can associate your report definition to existing categories to help with filtering. Verify that the categories match the ones associated with the report in Jaspersoft. For example, the KPIs by Project Type report is associated with the Project Management category. See Associate Report or Job Definitions with Categories for detailed instructions.
Define Report Access
As a prerequisite, you must have already set up report users in Clarity with the required Advanced Reporting access rights. The access rights map to corresponding Jaspersoft roles. See Advanced Reporting Access Rights. Specify the users, groups, or OBS units that can access and run your report and the type of access they have.
For example, the the KPIs by Project Type report is accessible to the following Clarity access groups:
- PMO Advanced Reporting Project Management - PMO Advanced Reporting All Reports and Domains These access groups map to the CSK_ROLE_PROJECT_MANAGEMENT role in Jaspersoft. **Follow these steps:** 1. Click Access to this Report. 2. Add the resources, groups, or OBS units to provide them either run or view and edit access to the report. 3. Click Return when done. See Jobs Reference, Synchronize Jaspersoft Roles job description for details on how roles are synchronized.

Create a Job
The software includes a list of stock jobs. If the included jobs do not meet your requirements, you can create new jobs. For a list of the access rights that are required to manage jobs (jobs access rights), see Access Rights Reference.
With programming experience writing queries, statements, procedures, and Java classes, you can create new jobs, .
**Follow these steps:**
1. Select a method that best addresses the job to create. 2. Write the queries, statements, or procedures for the new job using Java and SQL. 3. Deploy the executable. 4. Create a job definition by referencing the executable type and name of the method.
To enable the background scheduler to clean up all processing jobs at startup, set the isPrimary attribute on the jobSchedulerInstance element in properties.xml to true. Setting this attribute to true is useful when the background server shuts down and restarts while a job is executing.

SQL Stored Procedure Guidelines
When you create a job using SQL stored procedures, pass the P_JOB_RUN_ID and P_JOB_USER_ID parameters. The parameter order for SQL stored procedures is important on SQL Server and Oracle. Read and follow these recommendations when writing stored procedure for SQL server and for Oracle:

SQL Server Recommendations The stored procedure must start as follows:

CREATE PROCEDURE OR REPLACE PROCEDURE <my new job> (

@P_JOB_RUN_ID

NUMERIC,

@P_JOB_USER_ID

NUMERIC,

)

Oracle Recommendations The stored procedure must start as follows:
CREATE OR REPLACE PROCEDURE <my new job> ( P_JOB_RUN_ID IN NUMBER, P_JOB_USER_ID IN NUMBER, ) AS <procedure body>
Other parameters are passed in the order that they are listed in the Parameters page of job definition.


Java Guidelines
If you select Java as the executable type, use the following steps to create the Java class, deploy, and register it.
**Follow these steps:**
1. Create a Java class that performs the background processing.This class must implement the com.niku.union.interfaces.SchedulerListener interface. You only implement the scheduledEventFired() method of this interface.
2. Implement the Java class using the scheduledEventFired() method of the following interface: com.niku.union.interfaces.SchedulerListener
3. Compile the Java class. Verify that the compiler CLASSPATH is aware of the following: $NIKU_HOME/lib/union.jar
> [!NOTE]
> See the Oracle website for more information about creating a JAR file. For example, the following JAR command creates a JAR file from a Java class jar cf myBackgroundJob.jar myBackgroundJob.class 4. Deploy the class by placing the executable (for example, myBackgroundJob.class) in the $NIKU_HOME/customlib directory. 5. Register this job by creating a job definition. For the executable name, enter one of the following: - Valid class name. For example, myBackgroundJob. - Fully qualified class name if this class is made a part of a package. For example, com.myserver.jobs.background.myBackgroundJob.
Java Class Background Jobs (Sample Code)
import com.niku.union.interfaces.JobSchedulerContext; import com.niku.union.interfaces.SchedulerListener; /** * Kicks off a background process. * This class is primarily used by the Job Scheduler. * @author Ken Chen */ public class myBackgroundJob implements SchedulerListener {
/** * Constructor for the myBackgroundJob object */
public myBackgroundJob() { } /**
- Kicks off the background processing. * * @param jobContext_ Contains information required by job. * @exception Exception */ public void scheduledEventFired(JobSchedulerContext jobContext_) throws Exception { /** * The JobSchedulerContext parameter contains the Job definition ( * jobContext_.getJob() ) and the Job definition contains the value of the * OutputPath parameter. * * String outputPath = jobContext_.getJob().getRunOutputPath(); * File f = new File(outputPath, "myoutput.txt"); */


if(jobContext_ == null) { throw new Exception("Invalid JobContext"); } try { doSomeWork(); } catch (Exception e) { throw new Exception("Cannot doSomeWork()::" + e); }
} private void doSomeWork(JobSchedulerContext jobContext_) throws Exception
{ } // Write your background processing logic here. // One important and useful thing you can get out of // jobContext_ is the SecurityIdentifier. // SecurityIdentifier gives you handle to current user // information under which job is executed. // The user who often schedules the job. // is "scheduler". String userName = jobContext_.getSecurityIdentifier().getUsername(); // // userName = "scheduler" // String sessionId = jobContext_.getSecurityIdentifier().getSessionId(); // // sessionId is the unique identifier for the job. // Every time job is invoked, sessionId is different. // ...job does its work. }


Update Investments Created Before Classic PPM Release 13.2 to Display Capital and Operating Expenses
If you have investments that were created before Release 13.2, you can update the investments to display both capital and operating expenses. To update your investments run the following jobs in this order:
- Enable Capitalization - Copy Cost Type Plan of Record Charge Code with Cost Type
If you are processing investments with large amounts of data, limit the number of investments for a job run. When all of your investments have been successfully processed to show capital and operating expenses, we recommend deactivating the jobs. The statistics of a job execution are printed in a BG log file for the job. You can open and read the log file. The log file contains information such as the number of investments that were processed, skipped, or failed.
> [!NOTE]
> For more information about the jobs, see Jobs Reference.
Configure Notifications and Notification Templates
You can enable and disable notifications for all users at the system level. You can also configure notification templates and modify the design of the default email notification format.
- Publish or Save Notification Default Settings - Configure a Notification Template - Configure a Process Notification Template - Add Attribute Variables to a Notification Template Subject - Add Attribute Variables to a Notification Template Body - Add Hyperlinks to a Notification Template - Preview a Notification Template - Restore Defaults for a Notification Template - New! Configure Your Own Branded Default Email Notification Format


Publish or Save Notification Default Settings
You can enable and disable notifications for all users at the system level. You can also update the notification settings only for users who were created after you last published or saved and also for users who did not update their notification settings.
For example, you can configure timesheet notifications only through email and then click Publish. Publish overwrites the notification settings, if any, that individual users set for themselves. The Save button updates the notification settings only for users who were created after you last published or saved and for users who did not configure their notification settings at the resource level. Save does not apply to users who modified their notification settings.
**Follow these steps:**
1. Click Administration, Data Administration, Notifications. 2. On the Notification Default Settings tab, modify the settings to match your business needs. 3. Click Publish to apply the new settings to all users. 4. Click Save to apply the new settings to users who were created after you last published or saved and also to existing
users who had not updated their own notification settings. 5. Click Reset to change the settings back to the last published or saved settings.
> [!TIP]
> If users want to change notification settings after you complete the Publish function, they can enable or disable the notification settings only for themselves. Users can click Home, select Account Settings, and then Notifications.

Configure a Notification Template
Notification templates contain object attribute tags in the subject and message body that act as placeholders. Notification templates correspond to specific functional areas, such as action items, escalations, and processes. When you send a message to a recipient through an alert, email, or SMS, an instance of the notification template is created automatically. If the notification template contains attribute tags, the new tags replace the old tags with the respective attribute value in the notification instance.
For example, <project.name> appears in the subject or description of a notification template in the Project functional area. Your entry replaces the placeholder with the project name when the message is delivered.
You can configure notification templates by adding and removing attribute tags and links to the subject and message body of the notification template.
- Use the notification properties page to edit the notification template subject and body. - Use the notification templates page to view the list of notification templates. - Modified notification templates display in the list with a yellow check mark icon in the Modified column.


**Follow these steps:**
1. Click Administration, Data Administration, Notifications. The Notification Templates page appears. 2. Select your filter criteria:
- Functional Area: Defines the functional area of the product to which the notification pertains (for example, Timesheets).
- Notification Name: Defines a unique name for the notification template. - Description: Specifies the notification template description. - Modified: Specifies if the notification template contents are modified from the template default settings. 3. Click Filter. 4. Click the name of a template to modify its properties. a. You can edit the notification template subject and body. b. Click Preview to examine the appearance of your changes. 5. Click Save and Return.
Configure a Process Notification Template
You can modify process notification templates at the system level and at the process definition level. If you modify a template at the system level, these changes apply automatically to the corresponding notification templates at the process definition level. The changes do not apply to the notification templates that you have explicitly configured. If you modify a template at the process definition level, these changes apply automatically to the notification template at the system level. The changes also apply to all corresponding process notification template instances for that process.
> [!NOTE]
> If you are exporting process information using the XML Open Gateway, any instance-level process template modifications are not exported with the process information. Use the process notification read and write XML files to export and import notification information separately.
Add Attribute Variables to a Notification Template Subject
The Notification Subject field defines what displays in the subject line of a notification for a resource.
**Follow these steps:**
1. Open the notification template. 2. Click the Browse icon next to the Notification Subject field to add an attribute variable. The variable selection page
appears. 3. Select the attribute variables to add to the notification template. 4. Click Add. The selected attribute variables append to the text in the field. 5. Save the changes.
Add Attribute Variables to a Notification Template Body
The Notification Body field defines what displays in the body of a notification for a resource.
**Follow these steps:**
1. Open the notification template. 2. Click the Browse icon next to the Notification Body field to add an attribute variable. The variable selection page
appears. 3. Select the attribute variables to add to the notification template. 4. Click Add. The selected attribute variables append to the text in the field. 5. Click Save.

Add Hyperlinks to a Notification Template Add hyperlinks to display in the body of notifications for a resource. **Follow these steps:** 1. Open the notification template. 2. Click the Browse icon next to the Notification Body field. The attribute variables or links page appears. 3. Click Links. 4. Select the link to add to the notification template body and do one of the following:
- Leave the default text in the Link Text field to display this text as the hyperlink. For example, by default, the option displays "To access this action item, click here" in the notification template body.
- Clear the Link Text field to use the standard URL as the hyperlink. For example, the option displays "To access this action item, click: <URL>" in the notification template body.
- Clear the default text from the Link Text field. Enter the display text to appear as the hyperlink. For example, enter "service document" as the display text for an action item notification template. The "To access this action item, click service document" text displays in the notification template body.
The window closes. Your changes apply to the notification template body. The added hyperlink appends to the text in the field by default. 5. Click Add. 6. Save the changes. Preview a Notification Template You can preview the appearance of the notification template that a resource receives. **Follow these steps:** 1. Open the notification template. 2. Click Preview. 3. Close the preview window. The preview approximates the final notification. As seen by recipients, the actual appearance of the traditional default email notification appears as follows:

Restore Defaults for a Notification Template You can restore modified notification templates to their default system values. The Notification Templates page indicates modified notification templates with a checkmark in the Modified column. **Follow these steps:** 1. Open the notification template. 2. Click Restore Defaults. New! Configure Your Own Branded Default Email Notification Format In 15.6.1 and newer releases, administrators can replace the default CA Technologies (now a Broadcom company) logo with their own logo in email notifications that the system sends to inform users. After applying additional font styling and

inserting custom text headers and footers, your end-users receive future notifications in a more responsive modern style that aligns with your corporate branding and communication standards. As an administrator, you can adjust the settings on the new Notification Format page. Your settings define the cascading style sheet (CSS) that the system applies to the templates for all your Clarity email notifications. **Follow these steps:** 1. In the Classic PPM main menu, click Administration, Data Administration, Notifications. 2. On the Notification Templates tab, configure the templates for the functional areas that are recognized by your
organization. 3. On the Notification Default Settings tab, select the Email checkbox for at least one functional area. (Why? This
procedure explains how to modify the email template formatting that is applied only if your organization is using email notifications.) 4. On the Notification Format tab, configure the available settings to replace the system format with your own logo, text, and style options. 5. In the Company Email Logo field, click Choose File. a. Select an appropriate image file. b. In the future, administrators might not remember which file was selected or exactly how it looked. To view the
current logo, click Download. c. To remove your custom logo, click Remove. 6. Configure the optional Message Header: a. In the Email Header field, enter your custom message (text only). b. You can also adjust the font, size, and bold style options for the header. 7. Configure the Message Body formatting: a. You can adjust the font, size, and bold style options for the text in the notification. b. You can adjust the font, size, and bold style options for the hyperlink in the notification.
> [!TIP]
> The text represents a label for the variable data. In this release, the variable data takes on the appearance of the text. The Classic PPM hyperlink styling now takes on a more modern look and feel. With reverse text on a shaded background, it takes on the appearance of a button. To build your mental model for these concepts, refer to the following image:
8. Configure the Message Footer: a. In the Email Footer field, enter your custom message (text only).


b. You can also adjust the font, size, and bold style options for your optional email footer text. 9. When finished, click Save.


Custom Notification Feature Highlights
The following image highlights the essential capabilities provided with this new feature and also shows related legacy features:


Logo and Header: Choose a logo file to appear in email notifications. This image sets the tone and branding for your Clarity communications with business users. The same image constraints for user avatar photos apply. Your image could span the full width of the email body and appear more like a banner. Although the example image above shows the logo image to the left of the greeting (Hi <username>) to reduce vertical height; your image is always centered above the greeting in the final layout. You can also enter an optional header message and set its font, size, and bold style. Message Body Text and Hyperlink: You can configure the default font, size, and bold styling of text and hyperlinks in the notification email message. The content of the message varies by functional area and can also be modified.

Message Footer: You can also enter an optional footer message and set its font, size, and bold style. Notification Properties: The content of the email messages that your users receive varies by functional area and can also be modified. This capability is not new; Classic PPM provided configurable notification templates since 13.x. The Preview shows the general arrangement of text and variable data; however, it does not show the new format styling options. Tip: Test your new notification format settings with a test user account in a test environment with different supported browsers, email web and desktop client applications, and operating systems before going live in a production environment. Custom Notification Limitations
- There is no restore option to reset the default notification format. - Notification formatting is only for email notifications.
Configure Processes
Processes automate repetitive steps that you perform manually through the user interface. To reproduce real behavior, a process impersonates a user when performing the steps. Each process defines its objects, steps, actions, groups of steps, and joins. A process includes a series of steps that end with a specific result. All processes have a start and a finish step. Each step can perform one or more actions. Processes use preconditions and postconditions to connect their steps. You can create processes to act on any object type.
- Process Example: Conditional Automatic Approval - Processes and Object Types - Process Flow Diagrams - Process Object Roles - Process Objects and Partitions - Process Roles - Process Groups - View Available Processes - Monitor a Process Instance - Cancel a Process Instance - Cancel a Subprocess Instance - Run a Process - Start a Process - Modify a Process - Copy a Process - Process Step Actions - Process Flow Splits and Joins - Create a Process - Process-Level Escalations - What Triggers a Change to the 'Is Escalated' Column in the Action Item List? - Process Validation and Runtime Errors - Process Access Rights - Monitor Process Engines - Process Definition Notification Templates


Process Example: Conditional Automatic Approval
Classic PPM includes a sample process named Conditional Automatic Approval. This process sends a notification to the project manager when a resource submits a timesheet. The project manager must have the Resource - Approve Time instance access right for the resource. This process automatically starts when a resource submits their timesheet.
This sample process is not active by default. You must manually activate it. You can also customize this sample with more business rules and approvals.

Processes and Object Types
A process can work with the following types of objects:
- Primary. You can add only one primary object to a process, but you can add multiple linked objects to a process. A project is an example of a primary object.
- Linked. Linked objects, which create links in the product, are objects which the specific attributes of a primary object reference. Use linked objects to access data between two objects when building rules, or action item messages for step conditions and actions. Some examples of linked objects are object lookups, parent objects, or grandparent objects. Before you can add a linked object to a process, associate a primary object with the linked object in Studio. Then, while defining a process, you can access a list of available linked objects for a primary object. After you add a linked object to the objects list, the manual and system actions and conditions can use the linked object attributes in steps.
> [!NOTE]
> When adding linked objects to a primary object, you cannot select Multi-Valued Lookup (MVL) attributes. In addition, you can only link a linked object to the primary object or a top-level linked object. When deleting the primary object, all linked objects that are associated with the primary object are also deleted.
- Implied. An implied object is a type of linked object that is added to the process list automatically due to a direct relationship with the primary object. Other parts of the process definition reference an implied object, such as when using the Object Mapping or the Object Conversion APIs. You cannot add or delete an implied object.
Process Flow Diagrams Process flow diagrams show each step in a process and the relationship to previous and next steps. If subprocesses are included, the initiated process appears hierarchical and the subprocesses display with their completion modes. - You can expand the hierarchy to view information about a specific subprocess. - Click a subprocess in the flow diagram to navigate to its properties page. - If an error or warning appears, it is propagated to the top-level (master) process so you can investigate and
troubleshoot the subprocess. The following image shows a sample process flow diagram for the Project Manager Approval process:
> [!TIP]
> Do not remove the MS Gothic font from your operating system. Process flow diagrams in Classic PPM require this system font. On Linux, you might encounter the following error when you click on a process flow diagram:
Unable to process request - Server or Network error.
This appears to occur when the Gothic font is not installed. As a workaround provided "as-is" without warranty, you could install the traditional core Windows system fonts on Linux. See https://help.accusoft.com. All process flow diagrams have the following characteristics: - An element description appears when you hover over an element. - A square-bordered plus sign identifies a subprocess. - All action items are included with angle braces ( < > ). - All subprocesses are included within square braces ( [ ] ). - All steps appear in tan color and the actions within those steps appear in red, yellow, or green color depending on their status. - When a step is running, the action item boxes are red, yellow, or green and the space around the action item boxes is tan. - When a step is completed successfully, the action item boxes are tan and the space around the action item boxes is green. - When you click in a step, you see the step properties.

When you drill down from a run-time process flow diagram, the run-time instance of the process appears. If the process flow diagram settings are configured to show actions, a drill-down on the action takes you to the action page. When a process is active, the following colors indicate the status of each step:
- Green: Complete - Yellow: In process - Red: A problem exists - Blue: Ready to start, but waiting for a preceding action - White: Not yet started
Configure Process Flow Diagram Settings
When you configure the process flow diagram settings, the new settings apply to all the available processes. At any time, you can click Restore Defaults to overwrite your changes and restore the default settings.
**Follow these steps:**
1. Open a process and click Process Flow Diagram. 2. In the upper right corner, click Settings. 3. Specify the process flow diagram settings. 4. Click Save and Continue.
Process Object Roles
When you create a manual step action, you can select object roles, system roles, groups, resources, or resource fields. This step action helps to send notifications about action items to which the object role is assigned. A step action has zero, one, or many object roles that are associated with the process. The list of roles depends on the associated object. If a process has more than one associated object, you can select object roles for each of the objects.
Project Object Roles
The following roles are available for the Project object:
- All Child Managers - All Parent Managers - Immediate Child Managers - Immediate Parent Managers - Manager - Participants - Staff
Process Objects and Partitions
You can assign an object to a partition model in Studio. If you use this object in a new process definition, you can configure a partition and a partition association mode on that object. The partitions determine what process definitions are available to which users from the user interface. Depending on whether you defined a partition model for an object in Studio, you can perform the following actions when creating a process:
- Select no partitions, or select from different partitions, for a primary object. If you assigned a primary object to a partition model, select a partition and a partition association mode for that object.
- Select no partitions, or select from different partitions, for a linked object. - Add a linked object to the process through parent or grandparent relationship to the primary object. The association
with the process displays the partition of the linked object as the partition of the primary object. If an implied object automatically appends to the process, the product determines its partition. If an implied object appends through object

conversion, the conversion API or the object mapping determines the partition of the implied object. You cannot configure partition association mode for a linked or implied object. - Use only the object attributes visible for the selected partition. - Use the partition association mode to configure process start conditions. For start conditions based on primary objects, the available attributes follow the partition and association mode that is defined on the primary object. Start conditions can be based on linked or implied objects. In this case, only those attributes exist in the linked and implied objects that match the partition of the primary object. - Restrict what process definitions are available to a particular user based on the partition and partition association mode on the process definition. For example, you create the California Project Approval Process with project and the following partition information. The process is accessible only to users in the California partition on these project instances: - Partition: California - Partition association mode: Partition only When users open a project in the California partition, they see only processes where project is a primary object in the partition. If the association mode is a Partition and Descendant, the process is available in both the California partition and the descendant partitions of California. - Change the partition and partition association mode of an object in an active process. You can validate and reactivate the process.
Process Roles
You can assign access rights for processes through the resources or the object on which they are supporting. The following roles typically work with processes:
- Process Administrators. Create, copy, delete, modify, and monitor, or maintain processes that are started by other users. The Process Administrators require the Process - Manage - All access right.
- Process Creators. Create processes for objects to which they have access. Start, copy, modify, or delete processes that they have created.
- Process Initiators. Start processes on objects for which they have access. Modify or address errors on processes that they have started.
- Process Editors. Modify processes for objects to which they have access. However, cannot create, start, copy, or delete processes.
- Process Participants. Have no specific access rights to processes. Instead, they participate in an existing process by receiving and acting on action items.
Process Groups
A group is a collection of steps with the following requirements:
- A hard requirement completes before the process can advance to the next step. - A soft requirement does not prevent the process from advancing to the next step.
View Available Processes
On both available processes and initiated processes lists, template processes that are copied from a project template are linked with the template process in a hierarchical structure. Processes that are copied from a template process are shown as indented children of the master template process.
**Follow these steps:**
1. Open Administration, and from Data Administration, click Processes. The available processes list appears displaying processes that you created and are available globally.
2. Click Initiated to view the list of process instances.

3. (Optional) Filter the list of processes by clicking a field name. You can use wildcard characters for filtering. Entries are not case-sensitive. For example, "Acme", "acme", and "ACME" return the same results. Complete the requested information. The following fields require explanation:
- Primary Object: Specifies the primary object type for the process. - Instances Initiated: Indicates if you want to display the already running processes. Values: All, Yes, or No
Monitor a Process Instance To view process instance comments from the initiated processes page, click the Comments icon next to the process. **Follow these steps:** 1. Open Administration, and from Data Administration, click Processes. 2. Click Initiated. 3. Click the process ID to monitor. 4. Click the step name to view the step details.
Cancel a Process Instance Start a process instance before you can cancel it. When you cancel a process instance, all actions in the process instance are no longer active. They are removed from each process participant. When you restart the process, a new instance of the process is created. The process starts from the start step (not from the step that was active when the process instance was canceled). **Follow these steps:** 1. From the Initiated Processes page, select the process instance. 2. Click Cancel Process.
Cancel a Subprocess Instance At runtime, you can view the subprocess instances in the rows below the master process instance. Each subprocess instance is represented with an icon and shows its state. You can also view the process definition, flow, status, and current step in progress. You can abort independent subprocess instances explicitly. When you abort a master process, the application also aborts any synchronous or asynchronous subprocess instances.
Activate a Process Before you can initiate a process, the process must be activated. **Follow these steps:** 1. Open the process to activate. 2. Click Save.
Run a Process The processes that you can view, initiate, and filter are based on the partition of the object instance. For example, the object instance partition is within the range of the partitions of the primary object, which is defined by its partition and partition association mode. You can then view and initiate the processes that are based on that object instance. When you start a process, a process instance is created. All process instances to which you have access and processes are displayed. You can start processes manually or automatically (event-driven). Before you start a process manually, verify this information:
- You have Process - Manage or Process - Start access right to the specific process. - You have explicit access rights to the specific object. - Actions, post-conditions, and preconditions are correctly specified. - Steps are connected and the status is Validated and Active.


Start a Process
**Follow these steps:**
1. Open Home, and from Personal, click Organizer. 2. Open the Processes menu, and click Available. 3. Select the process and click Start.

Modify a Process
**Follow these steps:**
1. Open the process. 2. Modify the process as follows:
- Edit the process properties. - Add, edit, or delete primary or linked objects. - Edit the start options. - Edit steps by renaming, deleting, adding conditions, or altering actions. - Add, remove, reorganize, or rename groups. 3. Save the changes. 4. Validate the process.
> [!NOTE]
> - You cannot edit a process if it is running or has a status of Active. - Before you can modify a process, the process status must be Draft or On Hold. To update a process with
content from an add-in or Studio content package, set the process to On Hold. Running instances are not disturbed. The process definition is updated when the content add-in is applied on the target system. Then, set the updated process back to Active. - If a process is not currently running, you can delete it. If the process is running, cancel before you delete it.

Copy a Process
You can copy processes even if the process mode is Active. If you have an existing process, open and save a copy to create another process.
**Follow these steps:**
1. Open the process that you want to copy. 2. Click Save As. 3. Complete the following fields:
- Process Name: Defines the name for the new process. - Process ID: Defines the unique ID for the process. - Content Source: Specifies the content source for the process. - Description: Defines a brief description of the process. 4. Click Save and Continue.


Process Step Actions To take a process from beginning to end, define a series of steps. A step action is a task which a process executes. These steps include: - A start step (required) - One or more intermediate steps - A finish step (required). Each step can consist of multiple actions.
The following actors can perform an action: - An assignee (manual action) - The system (system action) - A job - A script - A subprocess You can add actions when you create a process or you can add them to existing processes. Use the Actions section in the step details page to create step actions.
Step actions can be used in several ways. - Notifications and approvals. You can use a step action to either send notifications or receive approvals. For
example, you can use system actions to call API functions, set attributes, and lock attributes. When you build a process, you can supply parameters to a stock system action or API, and then add them to process steps. To use a system action in a process, add a step to the process and then supply parameters to the system action for that step. - Steps without actions. A step can have no actions or multiple actions. An action in a step can depend on the results of previous actions in the same step. For example, in the following two steps, the actions are independent of each other: - Action A1 (manual action): Send action item Approve Cost Plan. - Action A2 (system action): Set status of the project to Open. - Chained-together actions. Actions can also be chained together so that the execution of an action depends on the completion of others. The results of one action can be input parameters for the next action.
Example: Create a Project Using a Template Process Create a project template process to create a new project that is based on a specific template. Add the following system actions to the template process to copy over WBS and staff from the template to the new project: - Copy WBS from Template. The system action copies WBS tasks and any staff that is assigned to those tasks. - Copy Staff from Template. Copies all staff from the template (regardless of whether the staff members are assigned to
WBS tasks).
> [!NOTE]
> For dependent actions, maintain the dependencies after deleting or reordering actions.
Process Step Action Types A process can have the following step action types: - Manual action. Sends action items to resources, groups, roles, or profiles to which they must act upon for the process
to continue. With manual actions, you can associate variables with the subject and body of action item messages. These actions provide users and process designers with relevant context information about the action items to review.

They also provide flexibility in defining context within an action item. Manual actions use attribute information from multiple objects and incorporate it in the action item. - System action. All these system actions are available for all objects in the process (including primary, linked, implied objects; action item objects): - Attribute setters. For example, you can set budgeted benefit, set the department manager, and so on. - Lock or unlock selected or all attributes edit them or make them display-only. - System Operations.
For example, you can copy a financial plan from a template, copy staff from a template, and so on. - Object conversion that uses a mapping code to map the attributes from the source object to the target object. - Run job. This type runs jobs in the background on a scheduled basis. Jobs can run in synchronous or asynchronous mode. If you call a SQL job from a process, pass the following required parameters in order: P_PROCESS_INSTANCE_ID, P_STEP_ACTION_ID, P_STEP_INSTANCE_ID - Custom script. Executes to import or export data from an external system. Custom scripts can run in synchronous or asynchronous mode. - Subprocess. Sub processes are invoked as embedded processes within the context of the current process. By embedding sub processes within a process, you can model complex workflows. When adding a sub process as an action item, you can only add active sub processes that are primary, linked, or implied to the master process. The sub processes require the same partition as the primary object. A sub process does not follow the partition association mode that is defined on the primary object of the process. You can add system and manual actions to a process only if you define a primary object.
Process Flow Splits and Joins A process flow pattern, which is composed of splits or joins, is a condition that is assigned to an action. These splits or joins determine the process flow. A split branches processing into multiple directions. A join consolidates the process flow.
Process Flow Splits A post-condition split is where the outcome of a process is used to determine the process flow. Four types of splits are supported: - Serial split. A serial split is a step which activates only when another step in the same process completes. For
example: - A step sends a bill only after the completion of the step that sends the order. - A step adds air miles only after the completion of a step that books a flight. - Parallel split. A parallel split is a workflow event where a thread splits into multiple steps. The steps can execute in parallel or simultaneously. For example, a payment step can execute three steps: - Ship an order. - Send the customer a notification that the order has shipped. - Adjust inventory. The following image shows how a split is used in a process flow:
> [!INFO]
> Figure 31: Image showing how a split is used in a process flow
- Decision Point split. An exclusive choice (XOR-split) is a point in a workflow where one of several branches executes based on either decision or control data. For example, a credit-card processing step can branch into one of the following two steps:
- If a credit card transaction is approved, ship the order. - If a credit card transaction is denied, inform the customer.
With exclusive choice splits, the system evaluates the post conditions in the order that is listed until a condition evaluates to true. The corresponding step activates and ignores all other remaining conditions and steps. Exclusive choice does not cause parallelism as only one branch activates.
- Multi-choice split. A multi-choice split (OR-split) describes a point in the workflow at which the system can select from several branches, which are based on decision or control data. For example, after executing the Evaluate Damage activity, the Contact Fire Department and Contact Insurers activities can both execute. With this type of split, more than one condition can be true, leading to execution of more than one other actions. The system evaluates all post conditions in the order listed. A thread of execution can start for any condition that evaluates as true.

Process Flow Joins
A join describes the merging of two or more steps into a single process flow. The following table provides a summary of the matching patterns between splits and joins:

Split Type Sequence Parallel Exclusive Choice Split

Matching Join Type No join needed Rendezvous (AND) Merge (XOR)


Multiple Choice (OR)

Wait and Merge First in Line Multi-Thread (Multi-Merge)

Rendezvous (AND) Statement
A rendezvous (an AND statement) is a simple join type. At the point where the threads join, the flow stops until all parallel threads are complete. Then, a single thread of execution continues. Here are some examples of rendezvous activities:
- Send Tickets and Receive Payment steps complete, and then the Archive step executes. - Policy Verification and Damage Assessment steps complete, and then the Evaluates Insurance Claims step executes.
The following image shows how a Rendezvous join type is used in a process flow.
> [!INFO]
> Figure 32: Image showing how a Rendezvous join type is used in a process flow

Merge (XOR) A merge is type of join in which multiple processes converge into a single thread. At the point where the threads join, all active threads synchronize. If only one path emerges, alternative branches converge again without synchronization. After synchronization, the next step activates and a single thread of execution continues. A primary consideration is when to synchronize and when to merge. The timing of thread activation is important. With a merge, once a branch activates, it cannot be reactivated while the merge awaits the completion of other branches. For example, after the steps that contact the fire department and insurance company are complete, run and save the report. The following image shows how a Merge join type is used in a process flow.
> [!INFO]
> Figure 33: Image showing how a Merge join type is used in a process flow


Wait and Merge Wait and merge describes a join where two or more alternate branches converge without synchronizing. Synonyms for simple merge include XOR-join, asynchronous join, and merge. The wait and merge pattern assumes that alternative branches do not execute in parallel. The wait and merge type of process consists of multiple branches (as opposed to multiple threads) that transition into a single step. Only one of the many branches activates. For example, the Pay Damage or Contact Customer steps execute, then the Archive Claim step. Alternatively, the car is delivered to the customer only after the customer pays or is granted credit. The following image shows how and Wait and Merge join type is used in a process flow.
> [!INFO]
> Figure 34: Image showing how a Wait and Merge join type is used in a process flow


Multi-Thread Multi-thread describes a join in which two or more branches reconverge without synchronization. If more than one branch activates, possibly concurrently with the other, the step following the merge starts for all activations of each incoming branch. The next step starts when an incoming branch completes. Then, all other branches that reach the merge point start a new copy of the next step. You can use a multi-thread join when two or more parallel branches share the same end-step (that is, no steps are replicated). The following image shows how a Multi-Thread join type is used in a process flow.
> [!INFO]
> Figure 35: Image showing how a Multi-Thread join type is used in a process flow


First-in-Line A First-in-line join waits for one of multiple branches to complete before starting a subsequent step. A discriminator waits for the remaining branches to complete but ignores them. Once execution of all incoming branches begins, the discriminator resets itself so that it can retrigger later. For example, to improve query response time, you can send a complex search to two databases. The first search which generates a result triggers the workflow to proceed. The second result is ignored.
Create a Process Consider what you want to accomplish and how the process can do it. Monitor your business processes and apply iterative improvements to streamline your operations. The following steps provide an overview of the tasks that you perform to define and run processes: 1. Define process properties. 2. (Optional) Add objects to the process. 3. Define step actions. 4. Create step-level escalation. 5. (Optional) Create process groups. 6. Validate processes and steps. 7. Activate processes. 8. Run processes.

Define Process Properties
**Follow these steps:**
1. Open Administration, and from Data Administration, click Processes. 2. Click New. 3. Complete the requested information. The following fields require explanation:
- Mode: Displays the current mode of the process. Values: - Active - Draft - On Hold
4. Complete the following fields In the Organizational Breakdown Structure section: - Department: Defines the financial department and entity that is associated with the process. The department requires belonging to the same entity as the location. - Location: Defines the location of the financial department that is associated with the process. The location requires belonging to the same entity as the department.
5. Save the changes.
Add Objects to a Process
In this step, you can add objects to a process. This step is optional. Add objects to your process only if you define manual actions, system actions, or sub processes within your process steps. If you add a schedule to your process, to run it as a job or a custom script, do not assign a process to an object. You can add the following types of objects to a process:
- A primary object - One or more linked objects
> [!NOTE]
> If you add Project as the primary object to your process, you can also select a template to be associated with the project process. In addition, you can specify a key (Template Key) that provides a reference to the template used in the process.
You can manually add a linked object to a process. Sometimes, the system adds it automatically. Create the linked object in Studio as an attribute of the primary object using a data type. The object is then available for adding in processes. For example, to assign an application lookup to every instance of an object, create an attribute that is named Application on the original object. Use this information for reference:
- Attribute Name: Application After you create the Application attribute, add the attribute to the Create and Edit views of the object.
- Attribute ID: application - Data Type: Lookup - Lookup: Application Browse
**Follow these steps:**
1. With the process open, click Objects. 2. Click Add Primary Object. 3. Complete the requested information. The following fields require explanation:
- Object Type: Defines the object type that is associated with the process. If the object is associated with a partition model, select a partition and a partition association mode for the object.
- Associated Template: Defines the template that is associated with the object. This field appears if the primary object is project.
- Available for On-demand Start: Specifies if you can start the process on demand from an object instance.

Values: - Yes. Users can start the process on-demand from the Processes tab of an object instance. The process is
included in the available sub processes list and can be invoked at runtime as a sub process. If the process is set to auto-start, the process starts automatically when the start condition (if any) is satisfied. - No. Users cannot start the process on-demand from the Processes tab of an object instance. The process is included in the available sub processes list and can be invoked at runtime as a sub process. If the process is set to auto-start, the process starts automatically when the start condition (if any) is satisfied. 4. Click Save and Continue. 5. Add any linked objects for the primary object: a. Select the primary object to add a linked object, and click Add Linked Object. b. From the Attribute drop-down, select the linked object. Based on the selected linked object, the Attribute Object Type field is automatically populated. c. Select an attribute partition code. This option appears only if a partition model was defined for the attribute in Studio. d. Enter the linked object key in the Object Key field. e. Click Save and Continue. The process definition objects page appears listing the newly added linked object under the primary object. From this page, you can add additional linked objects, remove objects, or exit the current process. 6. Click Continue.
Partition and Partition Association Mode
If a partition model exists for an object in Studio, then the Partition and Partition Association Mode drop-down appears on the primary object properties page. The list of partitions varies according to the partition model assigned to the object. The following modes are available:
- Partition only. All processes are available to users assigned to this specific partition. For example, you select the following values for partition and partition association mode for an object. This selection allows only users that are associated with the Corporate IT partition level to access the processes for the object: - Partition: Corporate IT - Partition association mode: Partition Only Users who are associated with the IT Organization partition, an ancestor level, or the Corporate IT-New York partition, a descendant level, cannot access these processes.
- Partitions, ancestors, and descendants. All processes are available to users assigned to this specific partition, and to users assigned to the ancestor or descendant of this partition. For example, you select the following partition values for an object. This selection allows users who are assigned to the Corporate IT partition and its ancestor and descendant partitions to access the object processes: - Partition: Corporate IT - Partition association mode: Partition, ancestors, and descendants
- Partitions and ancestors. All processes are available to users assigned to this partition, and to users assigned to the ancestor of this partition.
- Partitions and descendants. All processes are available to users assigned to this partition, and to users assigned to the descendant of this partition.
You can change the partition values for an object at any time.
> [!NOTE]
> When you change partition values, the process is deactivated. Revalidate and reactivate the process.

Add Linked Objects to a Process
After adding a primary object to a process, you can add a linked object to the primary object. The option to select an attribute partition code appears only if a partition model is defined for the linked object in Studio.
**Follow these steps:**
1. With the process open, click Objects. 2. Select the primary object to add a linked object, and click Add Linked Object. 3. Complete the requested information. The following fields require explanation:
- Attribute: Defines the link object. 4. Click Save and Continue.
The objects page appears listing the newly added linked object under the primary object. From the page, add additional linked objects, remove objects, or exit the current process. 5. Click Continue to proceed to the process start options page to specify a start option for the process.
Define a Process Start Option
You can define a process start condition for all primary and linked objects and their parent or grandparent objects. On the Process Start Options page, you can select from the following start options:
- On-demand. If you select this option, you can activate this process manually. Go to Processes for the primary object included in this process. From the available processes page, select this process and click Start.
- Auto-start. You can auto start a process only if its primary object has been event-enabled in Studio (that is, when the object is defined in Studio, the Event Enabled check box is selected). If you select the option, the process activates automatically when the start conditions are met. Select a start event and set start conditions to define the conditions to auto start the process.
**Follow these steps:**
1. With the process open, click Start Options. 2. Click Auto-start. 3. Complete the following fields:
- Start Event: Defines the start event to auto start the process. The list displays all the events that are registered in Classic PPM for the selected process objects. Typically, for all Classic PPM objects, the start event options are Create, Update, and Create and Update. If you select Update or Create and Update as the start event, a check box appears. If you select the check box, only one running process instance is allowed to auto start for each object instance at any given time.
- Start Condition: Defines the start condition to auto start the process. If you select Create and Update as the start event, you can set start conditions for both the Create event and the Update event in the same process. Check states between attributes to use object attributes that are defined in the selected partition to build start conditions. Example: You want to send a notification to your manager when your Project status changes. This status can change at two stages - when the Project Instance is created and when the Project instance is updated. In this case, process start conditions apply for Create and Update events.
Set a Start Condition
You can add a start condition to a process. Before you begin, set a start condition to auto-start a process. The auto-start option must be selected on the start options page. If you select the Create start event on this page, you can only select the current attribute value for an object when building the condition. You cannot select previous and current values for an object create event. The same applies if you select a linked object (including parent and grandparent objects).
**Follow these steps:**
1. With the process open, click Start Options. 2. Click the Set Condition link.

> [!NOTE]
> If you selected Create and Update as the start event, you can set start conditions for both the create event and the update event in the same process. 3. Select the object on which you want to configure a rule. 4. Specify the left parameters of the condition by selecting an option button and then selecting an attribute value (current or previous) for the selected object. 5. Specify the right parameters of the condition by specifying an operator and a constant or by selecting an object and an attribute value. 6. Click Add to add and evaluate the expression in the Expression field. 7. Define additional or alternative start conditions using the And or Or operations. 8. Click Save and Continue.
> [!NOTE]
> Multi-Valued Lookup (MVL) and Organizational Breakdown Structure (OBS) attributes are not supported for start conditions.
Process Conditions Cannot Include Virtual Attributes or ACAs
Previous releases from 14.3 to 15.3 allowed process designers to include potentially problematic attributes in their processes. Virtual attributes such as Baseline Start and aggregated calculated attributes (ACAs) were available to select in process start conditions. If a process built around the Task or Project primary object included a virtual attribute or ACA in its start condition, the user could no longer use Autoschedule. Selecting these attributes and running the process also caused issues in other areas. For example, the application could prevent you from saving tasks, task assignments, or team member records.
Beginning with Release 15.4, a Task or Project object process condition cannot include a virtual attribute or aggregated calculated attribute. These attributes are no longer available for users to select in the expression builder when defining a process condition.
> [!NOTE]
> An upgraded or imported process with derived virtual or aggregated calculated attributes will throw a validation error only if the step containing the attribute is evaluated again and the entire process is validated. See the 15.4 Change Impact and Upgrade documentation.
If you did not already remove these invalid attributes pre-upgrade, remove them post-upgrade from conditions for processes that are based on the Task object or the Project object. After an upgrade to 15.4 or higher, the application enforces the removal of these problematic attributes for you when you define a new process condition. However, only you can remove them from your legacy processes. To validate the correct behavior, follow these steps in Classic PPM 15.4 or higher after the upgrade:
1. Log in to Classic PPM and click Administration, Data Administration, Processes. 2. Create a new process or open your legacy process. 3. Examine the primary object (Task or Project). 4. Select Auto-Start as the Start Option. 5. Select Update for the Start Event. Click Save. 6. Click the Set Condition link. 7. On the Start Condition Builder page, select the Task or Project object. 8. Click on the Attribute Value field. You can no longer select virtual attributes (such as Baseline Start and Baseline
Finish) or ACAs. Because you are excluding these attributes from your start conditions, it is possible that the behavior of your process also changes. For example, the process could be triggered to run more or less often. 9. On the process Validation tab, select all steps and click Validate or click Validate All and Activate. If your process does not validate, remove any virtual attributes that were upgraded.

The following behavior might occur if the following scenario applies to you:
1. In your previous release, before an upgrade to 15.4, you configured one or more processes to start when virtual attribute values on a task change, such as the task Baseline Start or Baseline Finish date.
2. While troubleshooting this process, you can no longer publish your Autoschedule tentative dates. You get a system error; however, the user interface and the logs do not indicate that the error message is due to the process conditions that you created.
3. Even if you put the process on hold, you may still need to restart services to get Autoschedule working again. As a SaaS customer, you may have to contact Broadcom Support to schedule a safe time to restart services.
> [!TIP]
> - Classic PPM suppresses the unsupported attributes from the lookup that is used in the expression builder when creating or updating a process condition.
- This change impacts only the process condition builder and does not have any impact on other expression builders including power filters and existing process definitions.
- Your existing processes might continue to work after an upgrade. You only need to review and revalidate the conditions that use these types of attributes if your process no longer works post-upgrade.
- For your XOG process definitions, we recommend that you verify each process condition. - Any existing active process that is upgraded remains active. If you experience issues with virtual attributes in
the process, remove the virtual attributes in the condition builder.
Define Step Actions
When defining actions in steps, all action item attributes are available in the Condition Builder for building conditions. When the number of action items increase, you can verify the status of each action item. Manual and system actions begin once the step condition is met. Define context within a manual action item by using attribute tags (from multiple objects) within the Subject and Description fields of the action item. When you send an action item, the process engine replaces the attribute tags with the values in the object instance. The action item assignees are better able to respond to action items using the more relevant content.
The attribute tags allow process designers to incorporate data from multiple objects within the action item. You can assign manual action items to the following items:
- Object Roles: To assign the action item to a role based on object ownership. - System Roles: To assign the action item to a resource based on a system role. - Groups: To assign the action item to a resource based on group membership. - Resources: To assign the action item to a resource based on resource name. - Resource Fields: To assign the action item to a resource based on a resource field. - Template Object Roles: To assign the action item to a resource based on the template object. This tab only appears
if a project template exists in the process.
Define Steps and Conditions
Start and end steps are always required and are automatically created even if you do not explicitly define them. You can add and define intermediate steps. Each step can consist of multiple actions, with each step performed by an assignee or the product. You can create custom actions that include custom GEL scripts. The start and the end steps can be contained in a group.
Define Start and Finish Step General Properties
**Follow these steps:**
1. With the process open, click one of the following options:
- Start Step to create a starting step. - Finish Step to create an ending step. 2. Complete the requested information, and save. The following fields require explanation: - Raise a Warning After: If the step fails to run, specifies the time period post which to raise a warning. Select the
time period and enter the number for the period. Example: 2 Days
Define Intermediate Step General Properties **Follow these steps:** 1. With the process open, click Steps. 2. Click New Step. 3. Complete the requested information, and save. The following fields require explanation: :
- Group: Defines the group name that is associated to this step. - Raise a Warning After: If the step fails to run, specifies the time period post which to raise a warning. Select the
time period and enter the number for the period. Example: 2 Days
Define Step Preconditions When defining a precondition to a step, you can use attributes from multiple objects added to the process. For example, you can create preconditions that: - Verify the status of action items - Verify between object attribute values - Wait for a sub process to complete before joining the master process You can apply the precondition joins to intermediate and end steps only and not to a start step. To set up a precondition using Previous Value of certain attributes, enable audit trail for these attributes in Studio.
> [!NOTE]
> For object attributes with a Multi-Valued Lookup (MVL) data type, you cannot create step conditions that check for previous and current attribute values.
**Follow these steps:** 1. Open the process. 2. Open the start, intermediate, or finish step that you want to edit. 3. If this step is joining previous steps that were split, select a join type in the Preconditions section. You can define a join
type without a precondition, and vice versa. 4. Click New to specify a precondition to trigger the step to start. 5. Define a precondition by building the left and right parameters using objects and their attribute values.
For example, you can have the following precondition: After a day of the Start step, trigger Step 2. The precondition starts step 2. 6. Evaluate the expression and use And/ Or operators to add additional or alternative preconditions. 7. Save the changes.
Define Step Post-Conditions After defining the preconditions to trigger a step, define post-conditions that will connect this step to the next step, or the end step. For example, you can create post conditions that do the following:
- Verify the status of action items. - Verify between object attributes values (except for MVL attributes). - Wait for a sub process to complete before joining the master process.
When you set up a postcondition using "Previous Value" of certain attributes, enable audit trail for these attributes in Studio.
> [!NOTE]
> For object attributes with a Multi-Valued Lookup (MVL) data type, you cannot create step conditions that check for previous and current attribute values.
**Follow these steps:**
1. Open the process. 2. Open the start, intermediate, or finish step to edit. 3. If the step is branching off the process into multiple directions in the Post-conditions section, select a split type. 4. Under the If...column, click Build Conditions to define the If condition that leads to the next step. 5. Complete the following fields:
- Object: Specifies the step to use for the right side of the If expression. If you select the Object field and select a value, a second field appears for you to select the value to use in the expression.
- Field: Specifies the left parameters of the If condition. Values: - Days elapsed since step began. The number of days that have passed since the step began. You can specify the value as a fraction. For example, for a day and a half, the value is 1.5. - Duration of completed step. The number of days elapsed since the step was completed. You can specify this value as a fraction. The value for the duration of the completed step is not defined until a step is complete. The duration of completed step for a step cannot be used as a postcondition for the same step. - Number of times repeated. The number of times the step will loop. For example, after completing steps 1, 2, 3, and 4, you can have a postcondition in step 5. Step 5 takes the process back to step 2. If the number of times repeated value is 3, then step 5 goes through the loop three times. After that, the process takes another path that is based on what is defined in the condition.
- Operator: Specifies the operation to perform to evaluate the If expression. Values: =, !=, >, >=, <, <= - Constant: Specifies a constant value to include in the right part of the evaluated If expression.
Example: If days elapsed since step began=2. 6. Click Add to evaluate the expression and use the And/ Or operators to add additional or alternative preconditions. 7. Click Save and Continue. 8. In the Post-conditions section, under the Then Go To column, click Select Step to select the step that triggers next
once the If condition in this step is satisfied. 9. Click New to add and build additional post-conditions (if necessary). 10. Save the changes.
Create a Manual Step Action
**Follow these steps:**
1. Open the process and the step. 2. In the Actions section, click New. 3. Select Manual Action and click Next. 4. Complete the requested information in the General section. 5. In the Actions section, select an available action and move it to the Selected list.
- You can choose and move multiple actions from the list by holding the Control (Ctrl) key and selecting multiple actions.
- Click Save to confirm your selected actions. 6. After saving, the same actions appear in the Require Comment (New User Experience Only) list.
- Use this list to specify which decision actions require a mandatory user comment when responding to the Action Item in Clarity.
- To define multiple actions that require comments, press and hold the Control (Ctrl) key and select each applicable action in the list.
- Click Save to apply your selection. - When an action is configured to require a comment, users in Clarity will see the Add Comment dialog
automatically. The Save button remains disabled until a comment is entered. 7. Complete the following fields in the Action Item Message section:
- Subject: Defines the name for this action item. You can enter a subject or can select attribute variables from the object that is attached to the process. The attribute is substituted with a value when the action item is processed.
- Description: Defines the description of the action item. You can enter a subject or can select attribute variables from the object that is attached to the process. The attribute is substituted with a value when the action item is processed.
- Priority: Specifies the priority level of the action item. Values: Low, Medium, or High - Enter Assignees: Defines the assignees for the action. Enter one or more user IDs and click Quick Add
Assignees to add them to the Assignees field. - Make Action Item Available to Other Steps: Specifies if this action item is available for use by other steps. - Only Display Assignee Status for the Current User: Specifies whether only the current name and status for the
user can be seen when viewing an action item, or whether all assignee statuses can be seen. Default: Cleared 8. Complete the following fields in the Notification section, and save:
- Send Notification: Specifies the event occurring before the notification is sent. - Values: - When Step is started. - When Step is completed. - When Step is in error.
- Enter Recipients: Defines the names of the recipients of the notification. Click Quick Add Recipients to add recipients to the Send Notification To field.
- Send Notification To: Defines the object roles to notify about the action. - Notify Owner: Specifies if you want to be notified about the action.
Default: Cleared
Create a System Step Action
You can set actions that are defined for an object to complete during a step.
**Follow these steps:**
1. Open the process and the step. 2. In the Actions section, click New. 3. Select System Action, and click Next. 4. Complete the following fields in the System Action section, and save:
- Object: Defines the object that is attached to the system action. - Action: Defines the action for the system action. The choices that appear to define the action depend upon the
action you select.

Create Run Jobs
**Follow these steps:**
1. Open the process and the step. 2. In the Actions section, click New. 3. Select Run Job and click Next. 4. Select a job type and click Next. 5. Complete the requested information to configure properties. The following fields require explanation:
- Job Name: Defines the job that runs as part of this action. If the Parameters section displays, enter any parameters that are required for the job. The parameters that display, if any, depend upon the job you select.
- Completion Mode: Defines the job completion mode. Values: - Synchronous - Asynchronous
6. In the Notifications section, enter notification details. 7. In the Notify section, select the resource or group to receive notifications about the job. 8. In the Sharing section, select the resource or group to share this job with. 9. Save the changes.
Create a System Action to Run a Subprocess
**Follow these steps:**
1. Open the process and the step. 2. In the Actions section, click New. 3. Select Subprocess and click Next. 4. Complete the requested information. The following fields require explanation:
- Subprocess: Specifies the subprocess to use in the action. You can select from all valid and active processes whose primary objects and partitions match the objects and partitions of the master process.
- Initiating Object: Displays the object to us at runtime to initiate the sub process. - Subprocess Object Key: Defines the sub process ID to use as a reference when building conditions. - Completion Mode: Defines the sub process completion mode.
Values: - Synchronous: After the sub process is invoked, the master process is paused until the sub process completes.
You cannot terminate a synchronous sub process because terminating the sub process intervenes with the master process. - Asynchronous: The sub process runs asynchronously with the master process, but can join the master process at a future step or action. The sub process state is visible to the master process. The master process does not complete until the asynchronous sub process completes. You cannot terminate an asynchronous sub process because terminating the sub process intervenes with the master process. - Independent: The sub process runs independently from the master process. After a sub process is invoked from a step action, its state is not visible to the master process. If the execution of a sub process does not intervene with its master process, you can set the mode of the sub process to independent. The master process can complete even if the independent sub process is still running. You can terminate an independent sub process because terminating the sub process does not affect the master process. Similarly, terminating the master process does not affect the sub process. 5. Click Save and Continue.

Create a Step-Level Escalation Step-level escalations can only be invoked when you define an action item within a step. If a step is not complete, escalations can execute an action item and can notify a specific resource or group. At runtime, whenever an action item is open, it can be escalated using certain predefined escalation rules. You can use step escalation rules or process default escalation rules, regardless of the scope of the action item. Step escalation only works if the action is on that step. You can define an escalation rule for each step in a process. When you have not defined an escalation rule at the step level, the text "There is no escalation rule setup to display" appears in the Escalation section of the process definition step page. Once you have defined a rule, a short summary of the rule appears in the Escalation section as a link. If you have not defined an escalation for the step, process-level escalation defaults are used, if there are any. For step level escalations to work, first define a manual action for the step. **Follow these steps:** 1. With the process open, click Steps. 2. Open the step. 3. In the Escalation section, click New. 4. Complete the attributes:
- Escalation Type: Defines the escalation rules for this process. Values: - None: No escalation rules exist for this process. - OBS Hierarchy: Escalate through the OBS hierarchy. - Resource Manager Hierarchy: Escalate through a hierarchy of resource managers. - Specific Resource: Escalate to a specific resource.
- Levels: Specifies the number of levels to escalate. Select No Limit to escalate indefinitely. - Initial Grace Period: Specifies the amount of time to wait before escalating the action item (the number of
minutes, days, weeks, or months). - Subsequent Grace Period: If no action occurs, specifies the amount of wait before escalating again. - Active: Select to activate this escalation. 5. In the Additional Notification section, complete the requested information to set up additional escalation notifications. 6. Save the changes.
Set Up Step-Level Process Notifications You can set up a notification for a step and for each step action. You can send notifications when the step or action is performed, and can specify notification recipients for the specific step or action. To set up notifications for a step action, first create the step action.
> [!NOTE]
> The method by which a recipient receives notifications depends on the notification method you specify on the account settings: notifications page. Notifications can be an alert, email, or SMS. **Follow these steps:** 1. With the process open, click Steps, and open the step that you want to set a notification on. 2. In the Notifications section, complete and save the following settings: - Send Notification: Specifies the event occurring before the notification is sent.
- Values: - When Step is started. - When Step is completed. - When Step is in error. - Enter Recipients: Defines the names of the recipients of the notification. Click Quick Add Recipients to add recipients to the Send Notification To field. - Send Notification To: Defines the type of resource you want to notify about this step. - Values: - Object Role. Notify a role that is based upon object ownership. The list of roles varies depending on the object. - System Role. Notify a resource that is based upon a system role. - Groups. Notify a resource that is based upon group membership that is defined under Organization and Access. - Resources. Notify a resource that is based upon resource name. - Resource Fields. Notify a resource that is based upon resource fields. - Template Object Roles. Notify a resource that is based upon the template object. The option is available only if a
project template is attached to the process. - Notify Owner: Specifies if you want to be notified about the action. Default: Cleared
Create a Process Group
Use process groups to categorize steps that represent larger segments of the process. To create process groups, first create a placeholder group and then associate process steps to that group. You can reorder the steps within the group and can update the group from time to time.
**Follow these steps:**
1. With the process open, click Steps. 2. Click New Group. 3. Complete the requested information. 4. Click Save and Continue.
Associate a Step with a Process Group
After creating a placeholder group, associate it with steps from the process.
**Follow these steps:**
1. With the process open, click Steps. The steps page appears listing all the steps and groups included in the process. 2. Open the step to associate with a group. 3. In the General section, click the Group drop-down, and select the group to associate this step. 4. Click Save and Continue. The steps page appears displaying the step as a part of the group. 5. Repeat, as needed, to add more steps in the group. 6. To move the steps or groups, click Reorder, and use the up and down arrows. 7. To update a process group, click the group name, and edit any fields. 8. Click Save and Continue.
Process-Level Escalations
You can create escalations to execute an action item and notify one or more resources when a process step is not completed. Classic PPM supports step-level escalation. You can define an escalation rule for each step in a process. The action item due date is used to start the escalation. As a best practice, if you plan to use escalations in processes, make Due Date a required field for the Action Item object.


NOTE The method in which a recipient receives notifications depends on the notification method that the resource specifies on the account settings: notifications page. For example, recipients can receive process notifications through an alert, email, or SMS.


View the Escalation Job Status
In the Escalation Job Status section, view the following information for all active escalation jobs:
- The name of the escalation job - The actual start date and time of the escalation job - The end date and time of the escalation job (only if the job has ended) - The scheduled date of the escalation job. - The status of the escalation job. For example, Pending" or Completed.

Filter Escalation Objects
Use the Escalation Object Filter section to filter on escalation jobs by object name and ID. You can use both parent and linked objects. To view the page from the processes list page, click Escalations.

Add Process-Level Escalation Defaults
**Follow these steps:**
1. With the process open, click Escalation Defaults. 2. In the General section, complete the following fields:
- Escalation Type: Defines the escalation rules for this process. - Values: - None: No escalation rules exist for this process. - OBS Hierarchy: Escalate through the OBS hierarchy. - Resource Manager Hierarchy: Escalate through a hierarchy of resource managers. - Specific Resource: Escalate to a specific resource.
- Levels: Specifies the number of levels to escalate. Select No Limit to escalate indefinitely. - Initial Grace Period: Specifies the amount of time to wait before escalating the action item (the number of
minutes, days, weeks, or months). - Subsequent Grace Period: If no action occurs, specifies the amount of wait before escalating again. - Active: Select to activate this escalation. 3. In the Additional Notification section, complete the requested information, and save.

Monitor Process Escalations
Process escalations occur through jobs. Use the Escalation Job Status section to view a list of escalation jobs and monitor their status. You can also view and edit the rules of escalation objects.
When an escalation occurs, you can determine the object, the process name, and the process instance ID. You can also determine when the escalation started, next escalation occurrence, and completion details. For example, a resource has finally acted on the step.
**Follow these steps:**
1. From the available processes page, click Escalations. 2. In the Escalation Job Status section, review the following fields:
- Name: Displays the escalation job name. - Start Date: Displays when the job last started. - End Date: Displays when the job last completed. - Schedule Date: Displays when the job next runs. - Status: Displays the escalation job status. 3. Click an Object Type link to view and update escalation rule properties.


What Triggers a Change to the 'Is Escalated' Column in the Action Item List?
No settings on the Action Item menu help you make the column change. You can use a custom process to change it, but users often want to know what other settings or process can change it automatically.
Process escalation due dates are controlled by the settings for the Due Date attribute on the Action Item object.
For testing purposes, you can use the specific date option and set a date/time that is few minutes in the future. However for a process that is put into production, you need to use a Rolling Date because this setting will apply to all process action items (including escalation processes).
Process Escalation Behavior
The behavior of "is escalated" is complex. Process Escalations are always based on the action item due date by default. You can find the due date you have set by going to the Action Item object and looking at the Due Date attribute. The first escalation will occur at the Action Item due date. Additional escalations will occur based on the Subsequent grace period. The initial grace period is ignored. There is a way where you can change the behavior of the escalations on a per process basis using xog. This procedure will change the escalation behavior so that the first escalation occurs at Action Item Due Date + Initial Grace period and then subsequent escalations occur according to the interval indicated under subsequent grace period.If you want an escalation date for a particular process to be the action item due date plus initial grace period, a very easy workaround is to XOG the process definition out of Clarity, modify the XOG input so that:
aiWDueDateAction="ESC_ACTION_DUE_DATE_PLUS_IWP"
And then XOG the process definition back into Clarity. This will make the escalation dates work the way you want.The following sql update statement can be used to update the escalation rules for all process action items in this example:
UPDATE ESC_DEF_RULES
SET ai_w_due_date_action_code = 'ESC_ACTION_DUE_DATE_PLUS_IWP'
WHERE object_type_code = 'actionitem'
AND parent_object_type_code = 'process'
This will cause the first escalation to occur after the action item due date + the initial grace period have passed. The action item due date for processes is the default due date that is set for your Action Item Object Due Date field.

Process Validation and Runtime Errors
Use the process validations page to monitor the latest validation statuses and errors at the step and process level. To open the process validations page, open the process and click Validation.

Process Runtime Errors
On the initiated processes page, you can view a list of those process instances that you started. From this page, you can drill down to the initiated process messages page and can get detail information about an error. Any errors or warnings appear in the following order of precedence:
- System Errors occur in the process management infrastructure. - Application Errors occur in the product and affect process management. - Warnings occur for exceptions that require corrective action.


Errors can often stop a process. Warnings do not prohibit a process from continuing.


Validation States
The Status field in the General section of the step details page reflects the validation status of the step. Here are the possible validation states:
- Green diamond = Validated. Indicates that the validation object (step or process) is valid. - White diamond = Not Validated. Indicates that the validation object has not been validated or there are validation
errors at the specific validation level. - Yellow diamond = Revalidation Required. Indicates revalidate the validation object for changes that are made to the
process after the last validation. - Red diamond = Errors Encountered. Errors were detected in the validation object during validation.

Validate a Process
You can validate the process and all included steps from the process validation page. Clicking a step on the page takes you to the step details page to view the details of that step. Clicking the Process link takes you to the process properties. If an error displays during validation, correct it and run the validation process again. Activate a process after validating it.
**Follow these steps:**
1. With the process open, click Validation. 2. Select each step to validate, and click Validate. 3. Select the process and click Validate. The entire process is validated by executing all incomplete validations at all
levels. 4. Select the process and click Activate Process. 5. To validate all steps in the process and activate the process at once, click Validate All and Activate.

Revalidate a Process
Any changes to the process definition invalidate the process at certain levels, and requires validating the process partially again. For example, you change the split-type in step S2 of process P1 from Serial to Parallel Split (AND). Validate step S2 again, and execute the process-level validation for P1.
> [!NOTE]
> If you modify a validated process, the process becomes invalidated. It is not necessary to validate the entire process again. You can execute again certain validations only. For example, if you modify a post condition of a step, you revalidate only the specific step.
The following table shows the types of repeat validations for specific changes that are made to objects:

Object Step

Change
Any changes that are made to a step, including: Join Type Precondition Split Type Split-condition

Revalidations
The step becomes invalidated. All steplevel validation rules must be reapplied. The process becomes invalidated. All process-level validation rules must be reapplied.


Process Object
Object Attribute

Delete an object (primary, linked, or implied) Delete an object
Delete an object attribute

All steps referring the object become invalidated. Step-level validation rules, object references, and condition expressions must be reapplied to all affected steps.
You can either delete an object from the Objects sub page or delete it indirectly by deleting a step action that creates an implied object.
All steps referring to the object become invalidated. Step-level validation rules, object references, and condition expressions must be reapplied to all affected steps.
If there are initiated process instances of the process definitions that contain steps referring the deleted object:
The process definitions become invalidated and deactivated.
The initiated process instances are marked to be aborted.
After the process engine aborts these initiated instances, you can edit the process definitions. You can modify and fix the problem, and then validate and activate the process again. You can also delete the aborted process instances using a batch job or delete the invalidated and deactivated process definitions.
All steps referring the object attribute become invalidated. Step-level validation rule and condition expressions to be reapplied to all affected steps.
If there are initiated process instances of the process definitions that contain steps referring the deleted object attribute:
The process definitions become invalidated and deactivated.
The initiated process instances are marked to be aborted.
After the process engine aborts these initiated instances, you can edit the process definitions. You can modify and fix the problem, and validate again and activate the process. You can also delete the aborted process instances using a batch job or delete the invalidated and deactivated process definitions.

Process Validation Rules
Validation rules are grouped as process-level or step-level.
Process-Level Validation Rules. Process-level validation rules are used to validate inter-step transitions. Usually, these validation rules are applied after all steps are validated. However, to validate the structure of a process, you can opt


to execute these validation rules before all steps are validated. The following rules are enforced during the validation process:
- Each postcondition matches a precondition (except when a decision point split type is used in a negotiation loop). - Serial split types contain only one condition with an evaluated expression and connect to only one step. - Parallel split types match with a rendezvous join type. - Decision point split types:
- Contain two or more conditions with evaluated expressions, each of which connects to only one step. - Match with a merge join type. - Multi-choice split types: - Contain two or more conditions with evaluated expressions, each of which connects to only one step. - Match with a wait and merge, multi-thread, or first in line join type. - Processes can be nested. - Each condition contains an evaluated expression to complete the step. - No arbitrary loops exist. The process flow cannot be transferred inside a loop or outside a loop. - Start and End steps are defined. - Island nodes do not exist. - There exists a path from Start step to any other step. A path exists from any other step to End step. - The number of splits and the number of joins match. - No nested cycles exist. Only one entry point to the cycle exists. - A cycle and a split-join block cannot be nested. - No step exists with a "None" joining type but two joining steps. No step with a AND/OR joining type but none joining steps. - If you change the process mode from Active to Draft or On Hold, or if you delete the process, all processes that invoke this process as a sub process are invalidated. - If an active process with no running process instances becomes invalid, its mode changes to Draft (from Active). - If an active process with running process instances becomes invalid, its mode changes to On Hold (from Active).
Step-Level Validation Rules. Step-level validation rules are used to validate the inner properties of a step. If a subprocess is not validated and activated, its master process cannot be validated and activated. The invalid sub processes require separate validation. The following rules are enforced during the step validation process:
- Objects that are referenced in the step exist. Object names are unique within a step context. - Precondition expressions are valid (that is, the syntax is correct and the objects and object attributes that are
referenced in the expression exist). - Postcondition expressions are valid (that is, the syntax is correct and the objects and object attributes that are
referenced in the expression exist). - Postcondition expressions are not empty when there are multiple conditions. - The number of post conditions and the number of go-to steps are consistent with the split type. - The sub process that is invoked from a step action is valid and active. - If the step has a manual action, a postcondition that is based on the elapsed time of the action item is preferred. - A non-empty expression has a corresponding go-to step. - The object that is referenced in a system action exists (that is, if an object is deleted from a process, or from Studio,
the steps containing the system action are invalidated). - The object operation in a system action is valid (that is, if an object attribute is deleted from Studio, the steps
containing system actions that reference the object attribute are invalidated).

View and Correct Runtime Errors **Follow these steps:** 1. Open the Processes menu and click Initiated. 2. In the Messages column, hover over the icon to view a description of the error for each process instance. 3. Select the error icon. 4. Read the error message and resolve the problem as follows:
- To rerun a step, select the step and click Retry. - To skip the step that is associated with an error or warning, select the step and click Skip Problem.
> [!NOTE]
> When you skip a runtime error, you can get unexpected results. For example, the process can take another path and not complete as you expected. Alternatively, the process cannot continue because the next step in the process is waiting for this step to complete. - To delete the runtime error or warning, select the step that is associated with the error or warning, and click Delete. - To cancel the process without fixing any errors, click Cancel Process.
Error Handling at the Action Level When steps have multiple actions, and an error occurs at runtime, the system identifies the error at the action level. You can handle the error in the following ways: - You can fix the error. - You can retry the action from the messages page of initiated process. The action with the error executes again on the
new assignees of the action item. - You can skip the action instance that contains the error. The system skips the action with an error and executes the
next action on the list.
Process Access Rights
View Process Access Rights for a Resource **Follow these steps:** 1. Open the process. 2. Open the Access to the Process menu, and click Full View. 3. View the resources with access to the process.
Grant Process Access Rights to a Resource **Follow these steps:** 1. Open the process. 2. Open the Access to the Process menu, and click OBS Unit.
The OBS units with access page appears, listing resources with access rights to the process. 3. Click Add and select the access rights to assign to the resource. 4. Click Add and Continue. 5. Select the resources to grant access rights. 6. Click Add.


Grant Process Access Rights to a Group
**Follow these steps:**
1. Open the process. 2. Open the Access to the Process menu, and click Group.
The groups with access page appears, displaying groups with access rights to the process. 3. Click Add, and select the access rights to assign to the group. 4. Click Add and Continue. 5. Select the group to grant access rights. 6. Click Add or Add and Select More.


Grant Process Access Rights to an OBS Unit
**Follow these steps:**
1. Open the process. 2. Open the Access to the Process menu, and click OBS Unit. 3. Click Add. 4. Select the access rights to assign to the OBS unit, and click Add and Continue. 5. Select the OBS unit to grant access rights. 6. Click Exit.

Monitor Process Engines
If a particular area of the process engine needs further investigation, you can view pipeline data to evaluate its performance.
**Follow these steps:**
1. Open Administration, and from Data Administration, click Process Engines. 2. Review the metrics that appear in the following fields:
- Name: Process engine name. Click the name to view pipeline details for the process engine. - Active Processes: Number of active processes. Click the value to drill down and view a list of all initiated process
instances running on this engine. - Completed Processes: Number of completed processes. Completed processes provide insight to the
effectiveness and activity of this engine. Click the value to drill down and view a list of all completed process instances running on this engine. - Last Heart Beat Date and time of the last heartbeat indicating if the process engine instance is active and running. - Start Date/End Date: Date and time the process engine instance started and when it terminated or stopped. - Process Errors: Number of process errors that occurred on all process instances of a process engine. Click the value to drill down and view the list of process instances that have errors running on this engine. - Status: Indicates whether the process engine instance is running, stopped, or cannot be determined. - Total Load: Percentage of engine time that is used for processing. - Last load Snapshot: Percentage of engine time in the last time window that is used for processing. A time window is a variable time slice that is driven by many factors, such as load on each engine. - Pre Condition/Post Condition/Action Execution: Queue length for preconditions, post-conditions, and action pipelines and the total load for pipelines. This value gives insight on how busy each pipeline is.
> [!TIP]
> When monitoring a process engine for bottlenecks, look at the queue length of pipelines. Observe the time that it takes to process steps between pipelines. Processes in the pipeline queue refresh every 30 seconds.


Video: Process Engine Monitoring
The following video is provided by Broadcom. Process Engine Monitoring is a lightweight framework that tracks periodic queries looking for problematic processes running in an environment. In this video, you will learn about the Process Engine Monitoring feature of Classic PPM.
> [!TIP]
> To play this video in full screen, click the YouTube logo to the right of Settings at the bottom of the video.
Process Engine Pipeline Types
Process engines use the following pipeline types:
- Processes Loaded. Displays the number of active processes that are currently loaded on this process engine. Active processes include processes with a status of Running, Error, and Aborting, but not with a status of Completed or Aborted. This pipeline appears only in the Engine Internal Queues section.
- Event Wait List. Displays the number of step instances that are currently waiting for events, such as a user action to save a change in the product. For registered events on the Event Wait list, the step instances are pushed to either the precondition queue, or postcondition transition queue. Process engines register only for events they are interested in. For example, the engine is processing a postcondition for an active project to go to the next step. The engine registers for the Project Update event. The pipeline appears only in the Engine Internal Queues section.
- Retry Wait List. Displays the number of step instances that are waiting to be retried. When a process engine processes a step instance, the engine can run into database deadlocks. When database deadlocks occur, the engine places these step instances on the Retry Wait List. This pipeline appears only in the Engine Internal Queues section.
- Precondition. Displays the queue length as the number of step instances in the state Ready to Evaluate Precondition. A precondition pipeline processes the step instances.
- Action Execution. Displays the queue length as the number of step instances in the state Ready to Execute Action. An Action Execution pipeline must process these step instances.
- Postcondition Transition. Displays the queue length as the number of step instances in the state Ready to Execute Postcondition. The post conditions are waiting to proceed through a Postcondition Transition pipeline.
View Process Engine Internal Queues
The Engine Internal Queues page gives the states of internal queues and the number of pipelines (if applicable) for a process engine. Engine internal queues can have the following states:
- Run status icons. Indicates if the process engine is working. - Total Load. Displays the percentage of processing load across all internal queues. - Last Load Snapshot. Displays the percentage of engine time in the last time window that was used for processing. A
time window is a variable time slice that is driven by many factors, such as load on each engine. - Start Time. Specifies the time when the engine started. - Total Processing Time. Specifies the total time that the engine used for processing from the engine start time. - Queue Types. Displays the names of the queue types in the process management infrastructure. The only queue
types that you can configure are the precondition, action, and postcondition queues. - Queue Length. Displays the number of requests that are currently pending for this queue type. - Number of Pipelines. Displays the number of configured pipelines for every queue type.
Manage the Number of Pipelines in Queues
You can add more pipelines to reduce bottlenecks in pipeline queues, or remove pipelines from each queue. You can have up to five pipelines per queue.


**Follow these steps:**
1. Open the process engine to add pipelines. 2. Click Configure Pipelines. 3. Select the number of pipelines for each of the following pipeline queue types:
- Number of Precondition Pipelines - Number of Action Execution Pipelines - Number of Postcondition Pipelines 4. Click Save and Continue.


Run Process Steps Waiting for Events
You can immediately run process steps waiting in the Event Wait list queue.
**Follow these steps:**
1. Open the process engine. 2. Click Run Event-Waiting Steps. The waiting process steps are placed in either the Pre Condition Pipeline queue, or
the PB Cost Condition Transition Pipeline queue.

View Process Event Messages
The events page lets you view systemwide event messages across all process engines. You can view event messages that are received or sent. An example of an event is when you create, or update an object.
**Follow these steps:**
1. Open Administration, and from Data Administration, click Process Engines. 2. Click Events. 3. View the following information about the last 20 sent or received events:
- Event Type: Type of event. Example: Object - Create or Object - Update.
- Event Category: Process component where the event is happening such as a step, a step action, or the process properties.
- Event Initiator: Process system area where the event was initiated. The initiator can be a process, a process template, or any other area in the product.
- Received/Sent: Date and time the event was received or sent. - Resource: Resource that is involved in the event. For example, the process initiator, the resource retrying a step
instance, an approver of an action item. - Process Engine: Process engine for viewing event messages.

Process Definition Notification Templates
Use the process definition notification templates page to view a list of the process notification templates. You can edit the following types of process definition notification templates:
- Process Escalations - System Actions - Manual Actions - Script Actions - Subprocess Actions - Job Actions - Step Escalations


**Follow these steps:**
1. With the process open, click Notifications. 2. Review the following notification fields:
- Name: Defines the unique name of the notification template. - Description: Defines the description for the notification template. - Modified: Specifies if the notification template contents are modified from the template default settings. Modified
notification templates are displayed in the list with a yellow checkmark icon.
Configure a Notification Template
You can configure notification templates by adding and removing attribute tags and links to the subject and message body of the notification template. Use the notification properties page to edit the notification template subject and body.
You can modify process notification templates at the system level and at the process definition level. If you modify a template at the system level, these changes apply automatically to the corresponding notification templates at the process definition level. The changes do not apply to the notification templates that you have explicitly configured. If you modify a template at the process definition level, these changes apply automatically to the notification template at the system level. The changes also apply to all corresponding process notification template instances for that process.
> [!NOTE]
> If you are exporting process information using the XML Open Gateway, any instance-level process template modifications are not exported with the process information. Use the process notification read and write XML files to export and import notification information separately.
Add Attribute Variables to the Process Notification Template Subject
You can edit the Notification Subject and Notification Body fields to change the text which the product displays for these fields.
**Follow these steps:**
1. With the process open, click Notifications. 2. Click the notification template name. 3. Select and add attribute variables to either the Notification Subject or Notification Body fields. 4. Save the changes.
Add Links to the Process Notification Template Body
You can add a hyperlink to display in the body of a notification by modifying the process notification template.
> [!NOTE]
> You cannot add the following special characters to hyperlink text: $ [ ] @
**Follow these steps:**
1. With the process open, click Notifications, then click the notification template name. 2. In the Notification Body field, click the Browse icon, then click Links. 3. Select and add the link in the process notification template body as follows:
- Leave the default text in the Link Text field to display the text as the hyperlink in the template body. For example, "To access this process, click here".
- Clear the Link Text field to use the standard URL as the hyperlink in the template body. For example, "To access this process, click on: <URL>".
- Clear the default text from the Link Text field and enter the display text to display as the hyperlink in the template body. For example, "To access this process, click on: approval process".
The added hyperlink is appended to the text in the field.


4. Save the changes.


Preview a Process Notification Template
You can preview how an instance of the process notification template appears when a resource receives it.
**Follow these steps:**
1. With the process open, click Notifications. 2. Click the notification template name. 3. Click Preview. 4. (Optional) You can restore modified notification templates to their default values. The Notification Templates page
indicates modified notification templates with a check mark in the Modified column. To restore the notification template, open it and click Restore Defaults.
Configure the Datamart
Configure the Datamart for the successful execution of the Datamart Extraction job. The job is required to run on a regular schedule for the successful operation of Classic PPM. As a business user, you can also write custom reports against the Datamart schema.
The Datamart supports the following types of reporting information and services:
- Fiscal or annual calendar periods. - Easily understood roll-up tables. - Alerts (stoplights) and trending analysis. - Protection from transaction database schema changes (when you customize reports or implement business
intelligence applications). - Multiple OBS types that enable multiple views of resource and project data (combined or viewed individually).
Examples: Extracting Data by OBS
- The default OBS location type is the USA unit. If a project is not associated with any OBS location, USA is used in the datamart extraction. If a project is associated with another OBS location type (for example, the Germany OBS location), then that OBS location type is used in the datamart extraction.
- You can also specify a default OBS unit to use for projects and resources that are not assigned to an OBS type.
- Verify the Prerequisites - (Optional) Enable Parallel Processing for the Datamart (Microsoft SQL Server) - Configure the Datamart Settings - Set Up Time Slices for the Datamart - Schedule and Run the Datamart Extraction Job - Datamart Jobs - Datamart Stoplights - Create Datamart Stoplights

Verify the Prerequisites Complete the following prerequisites before setting up the Datamart:
- Verify that you have an understanding of the Datamart and what it includes. - Verify that you have read a description of the Datamart Extraction job and understand the requirements and restrictions
for running this job. - Set up a financial entity to associate with the Datamart. The Datamart uses the monthly fiscal time periods that are
defined for the entity. - Set up the system currency. For a multi-currency setup, set up all supported currencies. - Verify that the "Include in Datamart" setting is selected for resources and roles that must be included in the Datamart
extraction. The setting is selected by default when you create the resources or roles. - For the Datamart Extraction job to complete successfully, define at least one OBS associated with the Project and
Resource objects.
If you are using Financial Management and you want to see accurate data within the Datamart, complete the following tasks:
- Update time slices for the successful population of various types of sliced data such as actuals, estimates, allocations. - Set up the Rate Matrix Extraction job to populate the financial tables of the Datamart. - Set up Timesheets because actuals come from posted timesheets.
(Optional) Enable Parallel Processing for the Datamart (Microsoft SQL Server)
Enabling parallel processing can improve the performance of portions of the Datamart by setting them up to run in parallel. If the database server has more than one CPU available, you can use Microsoft SQL Server Enterprise Manager to start a Microsoft SQL Server Agent process.
The Datamart extraction is extremely I/O intensive because it detects incremental changes in the transactional tables and then writes those changes to the Datamart reporting tables. In a typical customer environment, there is enough CPU power to launch multiple parallel processes to access the disks in parallel, therefore minimizing the overall Datamart runtimes.
**Follow these steps:**
1. Use the system administration account to log into Microsoft SQL Server Enterprise Manager and expand the submenu item of Management.
2. To start the Microsoft SQL Server Agent process, right-click SQL Server Agent and select Start. If desired, you can set additional options using the Properties palette. However, the Datamart does not rely on options that are contained in the Palette.
Configure the Datamart Settings
Verify the following settings for the Datamart, before running it the first time:
- Datamart currency and entity - OBS types - Data extraction options
**Follow these steps:**
1. Open Administration, and from Data Administration, click Datamart Settings. 2. In the Datamart Currency section, complete the following field and save:
- Datamart Currency: Specifies the currency for the financial data in the Datamart. 3. In the Datamart Entity section, complete the following field, and save:
- Datamart Entity: Defines the name of the Datamart entity. The Datamart Extraction job uses the active monthly fiscal time periods that are associated with the entity.
4. In the Customization of Datamart Extraction section, select the appropriate options:
- Extract project management time facts and summary: Indicates if project management time facts and summary information is extracted when the Datamart Rollup - Time Facts and Time Summary job runs.
- Extract financial management time facts and summary: Indicates if financial management time facts and summary information are extracted when the Datamart Rollup - Time Facts and Time Summary job runs.
- Extract resource time facts and summary: Indicates if resource time facts and summary information are extracted when the Datamart Rollup - Time Facts and Time Summary job runs.
5. Create a project and resource OBS mapping. In the Project Organizational Breakdown Structure Mapping, or the Resource Organizational Breakdown Structure Mapping section, click New.
> [!NOTE]
> Select at least one OBS unit for both the Project and Resource objects for the Datamart Extraction job to complete successfully. 6. On the Organizational Breakdown Structure Mapping page, complete the following fields: - Order: Displays the order in which the OBS units are configured in the Datamart settings. - OBS: Displays the OBS type that is selected for the OBS configurations. You can select one OBS unit for each OBS type that is associated with the project and resource objects. The maximum number of OBS types that you can select for configuration on the Datamart settings is five. - Default OBS Unit: Defines the default OBS unit. Provides a "holding bucket" for all those projects and resources that do not have the respective OBS type assigned. The field displays the full path of the OBS unit that you selected.
Set Up Time Slices for the Datamart
Before you run a Datamart job, define the time slices that indicate increments of data.
Each time slice request that you define specifies the objects and fields, the slicing frequency, and the granularity to store the data. Once defined, the Time Slicing job extracts data and displays a readable flat table that is based on the defined criteria. You can then query the time slice to run reports.
The following default time slices are used in the Datamart:
- DAILYRESOURCEACTCURVE (ID=2) - DAILYRESOURCEESTCURVE (ID=3) - DAILYRESOURCEAVAILCURVE (ID=1) - DAILYRESOURCEBASECURVE (ID=11) - DAILYRESOURCEALLOCCURVE (ID=10)
> [!NOTE]
> Although you do not need to create new slice definitions, verify that the default slice definitions are set up properly. For example, you can edit an existing time slice to ensure that the date ranges are applicable. Also, set the From Date of the slice definition to the first day of the month and at least a minimum of three months before the current month.
Schedule and Run the Datamart Extraction Job
For successful operation of the product, execute the Datamart Extraction job on a regular schedule. The job executes a stored procedure to populate the tables that are needed for:
- OBS references - All non-fiscal time-scaled varying (TSV) grids - All fiscal TSV grids and financial processing
The Datamart rollup job depends on the successful extraction of data by the Datamart Extraction job.

Best Practice: Run the job daily and schedule it to run during off-peak hours. Based on the volume of data to extract, the time and system resources that are required to process the request can be significant.
**Follow these steps:**
1. Open Home, and from Personal, click Reports and Jobs. 2. Open the Jobs menu, and click Available Jobs. 3. Click the Datamart Extraction job. 4. Complete the requested information. The following sections require explanation:
- General: Edit the job name. For scheduled runs, you can change the name to distinguish each instance of a run. For submitted scheduled job entries, a read-only job ID and status are displayed.
- Parameters: Set the parameters as desired. Click Save Parameters to save the defined set of parameters for reuse. The saved parameters display in the list on the Available Jobs list page below the job type from which it is based.
- When: Defines the interval at which the job runs. Select Scheduled to run the job later. To run the job at a recurring time, click the Set Recurrence link. You can also set the recurrence of a scheduled job using the UNIX Crontab. To use crontab, select Use UNIX Crontab Entry Format and enter the schedule. For example, the following entry indicates that the job runs at midnight on the 1st and 15th of every month. 0 0 1,15 * * You can use the Crontab option on Windows, Linux, and UNIX operating systems where the Classic PPM instance is running. When you use this option, the scheduled configuration takes the time of the server system running the Classic PPM instance.
5. Submit your changes.
Datamart Jobs
The Datamart extracts project, financial, and resource management data from Classic PPM. The Datamart delivers a number of stock high-performance reports. Datamart reports provide excellent performance when compared to other reports because of the reduced query complexity and flattened table structures. You can also write reports against the Datamart schema.
The Datamart provides the following:
- Project and resource data points - Data based on fiscal or calendar periods and OBS - Data that is aggregated and stored in an easily understood roll-up tables - Support for alerts (stoplights) and trending analysis - Protection from transaction database schema changes (when you customize reports or implement business
intelligence applications)
The Datamart also:
- Extracts data from the transactional system into the NBI_DIM% dimension tables - Extracts project, financial, and resource management data from the transactional system into the NBI% Datamart
tables - Rolls up project and resource data into the NBI%TIME_SUMMARY summary tables
> [!ATTENTION]
> You need to execute the Datamart Extraction job daily to ensure you can use Clarity effectively in your organization. The job should run with the Extract Only OBS and Extract Only Calendar options selected. The Datamart Extraction job updates the OBS and CALENDAR tables in the database.
- The NBI_DIM_OBS and NBI_DIM_OBS_FLAT tables are needed for OBS references. - The NBI_DIM_CALENDAR_TIME tables are needed for all non-fiscal time-scaled varying (TSV) grids in
Classic PPM. - The NBI_DIM_FISCAL_TIME tables needed for all fiscal TSV grids and financial processing in Classic PPM.

The three tables mentioned above are the only tables you need to populate to run Clarity effectively in your organization. All the other NBI tables are not used in stock reports and the data warehouse.
Custom Portlets and Reports
If you have any custom portlets or reports which use the Datamart and/or the Datamart Rollup tables, you need to run the Datamart Extraction job without selecting the parameters. The job will update all the extraction tables. If you use the Datamart Rollup tables:
- You will need need to run the Datamart Extraction job without any parameters. - Run the Datamart Rollup job.
All the other NBI tables are not required for successfully running Clarity.
The Datamart Extraction job uses many system resources. For best results, run the job once daily during periods of low, or no user activity and avoid peak system hours.
The Datamart has the following jobs:
- Rate Matrix Extraction: Extracts rate matrix data. Run the job each time you change the rate matrix or a project financial properties. Frequency: Optional or run daily before the Datamart Extraction job
- Datamart Extraction: Extracts data from transactional database tables and stores them in reporting tables. The tables are the foundation of most stock reports and some custom reports. The job should run with the Extract Only OBS and Extract Only Calendar options selected. The Datamart Extraction job updates the OBS and CALENDAR tables in the database. Frequency: Daily
- Datamart Rollup - Time Facts and Time Summary: The time facts and summary job display in the following time tables: - NBI_PM_PT_FACTS - NBI_FM_PT_FACTS - NBI_RT_FACTS - NBI_PM_PROJECT_TIME_SUMMARY - NBI_FM_PROJECT_TIME_SUMMARY - NBI_RESOURCE_TIME_SUMMARY For best results, run the job after the Datamart Extraction job. Also, run it when a custom report depends on the output of any of the time tables. Frequency: Daily. For best results, schedule the Time Slicing job before you run the Datamart Extraction job. The Datamart extraction gets data from the time slice table.

Datamart Table Descriptions
The following table contains high-level descriptions of the Datamart tables. The tables do not capture historical changes in resource, project, and task properties. All data is captured with current property values. For example, if a resource department OBS is changed, the next time you run the Datamart jobs, the tables are populated with the currently saved department OBS value for all periods.

Table (T) or View (V) T: NBI_PRT_FACTS V: NBI_PROJECT_RES_TASK_FACTS T: NBI_PROJECT_CURRENT_FACTS
T: NBI_PM_PT_FACTS V: NBI_PM_PROJECT_TIME_FACTS

Description
Resource, project, and task information (including resource ID, project ID, task ID) available per day.
Project management and accounting information available as-oftoday.
Project management time-sliced information (including the project ID) available for calendar weeks and months.


Table (T) or View (V) T: NBI_FM_PT_FACTS V: NBI_FM_PROJECT_TIME_FACTS T: NBI_PM_PROJECT_TIME_SUMMARY
T: NBI_FM_PROJECT_TIME_SUMMARY
T: NBI_R_FACTS V: NBI_RESOURCE_FACTS T: NBI_RT_FACTS V: NBI_RESOURCE_TIME_FACTS NBI_RESOURCE_TIME_SUMMARY
NBI_DIM_CALENDAR_TIME

Description
Financial management and time-sliced information (including project ID) available for fiscal months only.
Project management and roll-up information (OBS and calendar hierarchy, no project IDs) available by calendar weeks, months, quarters, and years.
Financial management and roll-up information (OBS and fiscal calendar hierarchy, no project IDs) available by fiscal periods, quarters, and years.
Roll up resources (including resource ID) information available per day.
Resource time-sliced information (including the resource ID) available for calendar weeks and months.
Roll-up resource information (excluding resource ID) available for calendar week, months, quarters, and years. Summary information grouped by Datamart resource OBS unit. Count of internal and external resources. Totals for available hours, actual hours, baseline hours, ETC hours, and allocated hours.
Calendar information that sets up the weekly periods to start on a Monday. See support KB article: 27248 for more information

Datamart Stoplights
Stoplights let you flag projects that meet certain criteria. For example, use a red stoplight to flag all projects with actual hours that are greater than or equal to budgeted hours. You can store up to 15 stoplights in the NBI_PROJECT_CURRENT_FACTS (STOPLIGHT_1 through STOPLIGHT_15) table.
> [!NOTE]
> Datamart Stoplights is only used when you want to develop custom portlets or reports using the Datamart Extraction tables. Most customers don't use this functionality because they use the Clarity Datawarehouse and Jaspersoft.
Stoplight values are as follows:
- one (1) = green - two (2) = yellow - three (3) = red
Stoplight conditions are defined using ANSI SQL and include only columns that are provided in the NBI_PROJECT_CURRENT_FACTS table.
Examples
- A project that is less than 90 percent complete:
PCT_COMPLETE < 90
- More than 50 tasks remain open:
PCT_COMPLETE < 90
- Actual hours are 95 percent of budgeted hours or greater:
ACTUAL_HOURS > (0.95 * BUDGET_HOURS)
- Actual equipment costs exceed labor cost:
COST_ACT_EQUIP > COST_ACT_LAB


Create Datamart Stoplights
You can create datamart stoplights to flag projects that meet certain criteria.
**Follow these steps:**
1. Open Administration, and from Data Administration, click Datamart Stoplights. 2. Click New. 3. Complete the following fields, and save
- Name: Defines the name for the stoplight. Examples: Project on Target, Project Over Budget, or Resource Overbooked.
- Description: Defines the description for the stoplight. Limits: 256 characters - Red SQL Rule: Defines the SQL formula that defines the red stoplight. - Yellow SQL Rule: Defines the SQL formula that defines the yellow stoplight.
> [!NOTE]
> No green SQL rule exists. A stoplight is green when both the red and yellow stoplights evaluate to false.
Configure Time Slices
A time slice is a flat table that contains data that is derived from a sliced binary large object (BLOB). A BLOB is a collection of binary data that is stored as a single entity in a database. You can use a BLOB to store curve and calendar data.
The data model contains several BLOBs that most reporting tools cannot read. Configure a time slice request to specify the objects and fields, the slicing frequency, and the granularity to store the data. After you define the Time Slicing job, it extracts data. This job displays a readable flat table that is based on the criteria you set in the time slice request. You can then query the time slice to run reports. For more information, see Clarity Studio Development.
- Objects That Require Time Slices - Create a Time Slice Request - Query Time Slices to Run Reports - Daily Time Slices - Allocation Time Slices - Fiscal Time Slices - Deadlock Errors in bg-ca.logs
Objects That Require Time Slices
The following objects require time slicing:
- prAllocCurve The percentage of a resource availability that is allocated for a project (as a rate curve). Source table: PRTeam
- prActCurve Actuals posted to an assignment. Database Column: prExtension Source table: PRAssignment
- prEstCurve Estimates for an assignment. Database Column: prExtension Source table: PRAssignment
- prBaseCurve Baselines for an assignment.

Database Column: prExtension Source table: PRAssignment - prAvailCurve The resource availability (as rate curve). Source table: PRResource - prValue Work time information, such as shifts, days off, and holidays. While this table calculates resource availability and allocation, you cannot select the table for time slicing. Source table: PRCalendar - prAllocCurve Values on timesheet time entries. Source Table: PRTimeentry
Create a Time Slice Request The initial time slicing process can take several minutes. Once you write time-slice data, the next time the job runs, it only checks for updated objects. The time slice updates whenever the content of an object changes. For example, adding ETC to an assignment.
Between the time that you create a time slice request and then refresh it, many database transactions can occur. To preserve systems resources, disable temporarily transaction logging. Verify with your database administrator before changing a time slice request or anything that can cause a large number of database transactions to occur.
**Follow these steps:** 1. Open Administration, and from Data Administration, click Time Slices. 2. Click New. 3. Complete the following fields:
- Time Slice Name Defines the name for time slice request. - Rollover Interval Defines the frequency that the From Date updates for processing an updated time slice request.
Define the option when doing ongoing reports, such as end-of-month reports. Values: - Daily: Updates the time slice every calendar day. - Weekly: Updates the time slice every week. - Bi-Weekly: Updates the time slice every 14 calendar days. - Monthly: Updates the time slice every calendar month (recommended frequency). - Bi-Monthly: Updates the time slice every two calendar months. - Quarterly: Updates the time slice every three calendar months. - Semi-Annually: Updates the time slice every six calendar months. - Yearly: Updates the time slice every year. - None: The time slice never updates. Default: Daily For ad-hoc reporting: None - From Date: Defines the date from when the time slice period begins. Example: To have time slice data start the first day of each month, enter the first day of the month. Then, select Monthly as the slice period. - Slice Period: Specifies the period to use for each time slice request. Values:
- Daily - Weekly: Seven calendar days. - Bi-Weekly: 14 calendar days. - Monthly: One calendar month. - Bi-Monthly: Two calendar months. - Quarterly: Three calendar months. - Semi-Annually: Six calendar months. - Yearly: 12 calendar months - None - Number of Periods: Defines the number of periods for each time slice request. Examples: 12 (months), 52 (weeks), 5 (years) - Item: Defines the object, or data element, to time slice. Values: - Actuals: Defines the hourly time posted for an assignment on a project. The element sets up by default. - Estimates: Defines the hourly estimate for an assignment on a project. The element sets up by default. - Baseline: Defines the baseline (in hours) for a project assignment. The element sets up by default. - Availability: Defines the hours per day that a resource is available to work on a project. The element sets up by
default. - Allocation: Defines the percentage time that a resource allocates to a project. The element sets up by default. - Time Entries: Defines the time entry value for a timesheet. - Current: Data identified for the current baseline. For example, when you have multiple baselines, select the
baseline to consider the current baseline for each project. - Non-Current: Data not identified for the current baseline. - Expiration Date: Use the field for ad-hoc reports. Specifies the date when data gets deleted from the database. The date automatically displays for rollover time slices. 4. Save the changes.The new time slice request records and time slicing begins immediately.
> [!TIP]
> After you make any changes, always resume or unpause the Time Slicing job to allow it to regenerate your new data.
Query Time Slices to Run Reports
**Follow these steps:**
1. Create the time slice request. 2. Schedule the Time Slicing job. 3. After the Time Slicing job performs time slicing, you can query the time slice to run reports.
- Each record in the time slice table contains an object ID that corresponds to a data element. - The report writer uses the object IDs to identify the resource that is associated with the slice record.
Daily Time Slices
Based on the amount of data and the reporting needs of each implementation, the time slices need to be configured properly.
- Limit the number of DAILY slices to create fewer records for reporting historical data within the recommended configurations.
- Do not define any daily slices that cover a range of over 2 years, especially the team slices. - If you need past historical data to be sliced for dates further back than what is recommended here, consult our
Broadcom Service partners for advice on alternative configurations or use MONTHLY time slices.


Configure the following recommended DAILY time slice IDs:


TIME SLICE:
Estimates (1-year range) DAILYRESOURCEESTCURVE
Actuals (2-year range) DAILYRESOURCEACTCURVE
Baseline (2-year range) DAILYRESOURCEBASECURVE
Availability (2-year range) DAILYRESOURCEAVAILCURVE
Allocation (2-year range) DAILYRESOURCEALLOCCURVE

FROM DATE:
Start of the current month. No need to slice estimates far in the past. Start of the current month. Going back one (1) year. Start of the current month. Going back one (1) year. Start of the current month. Going back one (1) year. Start of the current month. Going back one (1) year.

NUMBER OF PERIODS: 400 days 740 days 740 days 740 days 740 days

> [!TIP]
> When a resource has a Hire Date or Termination Date, the Availability slices are bound for the resource within this date range.

Allocation Time Slices
If your organization is not maintaining allocation at the project level, you may have no need to maintain slice data for allocation. Allocation is by far the largest portion of slice data, and if it is not entirely valid it can be dramatically reduced. We recommend that if you do not set project-level allocations you should set the Number of Periods to four (4) for the Allocation slice request. This will minimize the amount of data that is being stored for allocation slices and populated in the datamart or data warehouse tables.
If you are truly using this allocation data it should also be in the same range as your baseline and availability time slice definitions. We recommend that you enforce setting project allocations company-wide and zero out any remaining or unused allocations. When allocations are set properly on active projects, only valid data is stored in timeslices, dramatically reducing the amount of records needed to maintain allocations.
We also recommend that you zero out Remaining Allocation as seen on the Project Team page (or project roster), for inactive and closed projects.
To zero out the remaining allocation for resources, set the allocation finish date to the last date the resource worked on the project.
- Remaining Allocation takes into account the last date the actuals were tracked by the resource. This date should be set as the allocation finish date if the resource is no longer working on the project.
- Zeroing out any unnecessary Remaining Allocation reduces the amount of data stored in the timeslice and makes your data more realistic.
> [!TIP]
> Tip: As a shortcut, you can also set ETC to zero (0) and then click the Allocate From Estimates button on the Team page. Although this method is somewhat less accurate, it is the easiest way to release unused resource allocation.


Fiscal Time Slices Configure the following recommended FISCAL time slice IDs:


TIME SLICE:
Fiscal (7-year range) DAILYRESOURCEESTCURVE

FROM DATE:
Start of the current month. Going back one (1) year.

NUMBER OF PERIODS: 72 months

> [!TIP]
> After you make any changes, always resume or unpause the Time Slicing job to allow it to regenerate your new data.

Deadlock Errors in bg-ca.logs
The bg-ca.logs might show the following deadlock error when a large amount of XOG activity takes place while the Time Slicing job is running.
Error processing slices com.niku.union.persistence.PersistenceDeadlockException: SQL error code: 60
Error message: [CA Clarity][Oracle JDBC Driver] [Oracle]ORA-00060: deadlock detected while waiting for resource
The failure is not critical. The job recovers and processes the records the next time it runs. As a rule, pause the Time Slicing job or set the process calling XOG, as there is such a large amount of XOG activity that needs to be processed by the Time Slicing job, which is typically set to run every minute.
Configure Timesheet Reporting Periods
Users can submit their timesheets in Classic PPM or Clarity mobile apps. As an administrator, configure time reporting periods and other timesheet options.
- Create Time Reporting Periods - Close Time Reporting Periods - Mark and Delete Time Reporting Periods - Configure Timesheet Options

Create Time Reporting Periods
Create time reporting periods for users to track time for their assignments using timesheets. The time periods can cover varying durations such as few days, a week, a month, and so on. The time periods must be consecutive and cannot overlap an exiting time period.
**Follow these steps:**
1. Click Administration, Project Management, Time Reporting Periods. 2. Click New. 3. Select the scale and specify the duration. 4. Click Save and Return. 5. Create additional time reporting periods.


Close Time Reporting Periods You can close time reporting periods to prevent users from creating or updating timesheets for those periods. Later, depending on your business needs, you can delete the closed time periods when they are no longer needed. Before closing a time reporting period, verify that all associated time entries and financials have been posted and processed. After closing, you can filter on the closed time periods and mark them for deletion. **Follow these steps:** 1. Click Administration, Project Management, Time Reporting Periods. 2. Select the reporting periods and click Close.
The closed time periods are no longer listed with the open time periods. 3. To display the closed time periods, select Closed from the Status drop-down and click Filter.
Mark and Delete Time Reporting Periods You can mark time reporting periods that are in Closed status for deletion. Marking allows you to identify and review the time periods before executing the Delete Investments and Time Reporting Periods job. It allows you to govern and manage the process of deletion. The Marked for Deletion flag appears checked for the closed and marked time reporting periods on the list page. When the Delete Investments and Time Reporting Periods job runs, it deletes the regular and incident time entries for all timesheets in the marked time periods. **Follow these steps:** 1. Click Administration, Project Management, Time Reporting Periods. 2. Filter by Status for all Closed reporting periods. 3. Select the reporting periods and click Mark for Deletion. 4. Confirm the deletion.
The Marked for Deletion flag appears checked for the time period. 5. Run the Delete Investments and Time Reporting Periods job. Before running the job, you can cancel the deletion using one of the following options: - Select the reporting period and click Cancel Deletion. - Reopen the closed period to cancel the deletion automatically.
Configure Timesheet Options Use these steps to set or change the timesheet options for all resources in the system. **Follow these steps:** 1. Click Administration, Project Management, Timesheet Options. 2. Specify the default sorting column and sorting order. 3. In the Default Time Entry Options section, select all options that you want for automatically populating a new
timesheet. - Populate assigned tasks: Enables the Add Assigned Tasks option in the Add Tasks button of Clarity
Timesheets.
- Populate assigned tasks(with ETC): Enables the Add Assigned Tasks(with ETC) option in the Add Tasks button of Clarity Timesheets.
- Copy time entries from previous timesheet: Automatically populates a new timesheet with the task entries from the previous timesheet. TIP The KB article Clarity: Timesheet Population - What Determines Tasks To Display on a Timesheet? explains the required conditions for tasks on timesheets.
- Include actuals from previous timesheet: Automatically includes the actual hours from the previous timesheet (actuals are not copied for incidents). Actuals for one-time time entries, such as vacation or sick time, are not copied.
- Display Unit: Indicates the measure of time entries by hours or days. The setting is used for timesheets in both Classic PPM and Clarity.
- Decimal Places: Indicates the number of decimal places for the selected time entry display unit. - Enable Note Date: Enables note date in the Clarity Timesheets. - Allow posting of future Timesheets: Allows user to submit and post timesheets for future periods, not just current
or past ones. 4. Save the changes. 5. Click Apply to All Resources. 6. Click Yes to confirm.
Configure Modern UX (Clarity) Options Use these steps to set or change the timesheet options that impact Clarity for all resources in the system. 1. Click Administration, Project Management, Timesheet Options. 2. Select the Allow submission of timesheets with no tasks option to enable the submission of empty timesheets.
When this option is enabled, the Submit button will be active even if the timesheet has no tasks. 3. Select the Allow entry of line item totals option allow users to enter an optional single total value (in hours or days)
for a task. That total is divided or spread equally across multiple days. For example, a user enters 40 total hours and the timesheet shows 8 hours per day for five days for that same task. 4. Select the Display time attestation message on submit option if you want to prompt the user to confirm an attestation statement for compliance requirements. 5. Select Display time errors as a toast message on submit if you are not using Timesheet Rules since the rules display customize error messages.

6. The Allow end user column configuration, Display effort gauge, and Display project time gauge settings determine if these options are available to users when they create Timesheets in Clarity.
7. Select the appropriate value in the Time entry increment rounding option to provide real-time data entry adjustments when the user fills out the timesheets. The rounding of values is based on the configuration of the Decimal Places option. The following increments are permitted: - Any: Entered values are rounded based on the `Decimal Places' setting (0-5 places) - 0.25*: Entered values are rounded to the nearest quarter number (hours or days). Minimum Decimal Places = 2 - 0.5* = Entered values are rounded to the nearest half number (hours or day). Minimum Decimal Places = 1 - 1* = Entered values are rounded to the nearest whole number (hours or days). Minimum Decimal Places = 0 NOTE
To enable the Time Entry Increment feature in Clarity Timesheet:
1. Ensure you have the Administration - Feature Toggles - Navigate access right to access the Feature Toggles tile in Clarity Administration.
2. Navigate to Clarity Administration and click Feature Toggles. 3. Check the Enabled field for Time Entry Decimal Precision and Increments.
If Time Entry Decimal Precision and Increments feature is disabled in the Feature Toggles workspace, then the Time Entry Increment option disappears in the Timesheet Options. 8. Select the Timesheet actual costs will use resource rates, not team rates, for team assignments option to ensure that actual costs for timesheets are calculated using individual resource rates instead of team rates for team assignments. For Example: When an individual resource (Cheryl Amos) manually enter time on a task assigned to a team (e.g., Mobile Team as the Assignment Resource ID): - Planned Cost Rate is derived from the rate of the Mobile Team. - Actual Cost Rate is calculated using your individual rate from the rate matrix (e.g., Cheryl's rate).
Configure a Global Audit Trail
The global audit trail provides a log of all audit records for all objects that are configured for auditing. The log is a record of additions, deletions, and changes for audited objects. The records for an instance of an audited object remain in the global audit trail, even after you delete the instance. In addition, the system keeps a record of the individual who deleted the instance.
You need the Audit Trail - View - All access right to view the global audit trail.
> [!NOTE]
> For more information about setting up an audit trail, see the following topic in the English edition of the documentation:
1. Switch to the English documentation. 2. Expand the Reference section. 3. Log in to view all content. 4. Navigate to Classic PPM Studio Development, Classic PPM Studio Objects and Attributes, Audit an Object.
**Follow these steps:**
1. Open Administration, and from Data Administration, click Audit Trail. 2. Search for the object instance that you want to view. You can use any or all of the following parameters (and wildcard
characters) as search criteria: - Object: Specifies the object for which audit trail information is requested. For example, Task or Project. Only the
objects that are configured for auditing appear in the selection list.

> [!NOTE]
> We recommend that you select a value for this field to limit the number of objects that are searched and to make your search faster. - Object ID: Specifies the object ID of the specific instance of the object. For example, a specific project ID or task ID. - Object Name: Specifies the name of the specific instance of the object. For example, the name of a specific project or a task. - Changed by: Specifies the name of the user who created the records. - Date range: Specifies a time period for the records you want to view. To select the start and finish dates for the date range, click the Date icon. - Operation: Specifies the action that was performed on an object. Values: Insert, Update, Delete, or All. 3. Click Filter to view the audit records.
