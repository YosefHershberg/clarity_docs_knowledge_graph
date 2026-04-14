# Install Clarity

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[17 - Installation and Upgrade/_MOC Install Upgrade|Installation and Upgrade]]
- Canonical notes:
- [[17 - Installation and Upgrade/Install with SQL Server]]
- [[17 - Installation and Upgrade/Install with PostgreSQL]]
- [[17 - Installation and Upgrade/Install with Oracle]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->



## AI Outline

- H2: Install Clarity With Oracle (#install-clarity-with-oracle)
- H3: Clarity Pre Installation (#clarity-pre-installation)
- H3: Configure a Database with Oracle (#configure-a-database-with-oracle)
- H3: Configure the Tomcat Application Server and Java (#configure-the-tomcat-application-server-and-java)
- H3: Configure Java Environment Variables on the Application Server (#configure-java-environment-variables-on-the-application-server)
- H3: Run the Installation Checker (checkinstall) (#run-the-installation-checker-checkinstall)
- H3: Run the Installation Script (#run-the-installation-script)
- H3: Post-Install: Additional Setup Configuration (#post-install-additional-setup-configuration)
- H3: Post-Install: Complete the Installation (#post-install-complete-the-installation)
- H3: Post-Install: Verify the Installation (#post-install-verify-the-installation)
- H3: Install the Data Warehouse (#install-the-data-warehouse)
- H2: Install Clarity With Microsoft SQL (#install-clarity-with-microsoft-sql)
- H3: Clarity Pre Installation (#clarity-pre-installation)
- H3: Configure a Clarity Database with Microsoft SQL Server (#configure-a-clarity-database-with-microsoft-sql-server)
- H3: Review the Imported SQL Server Database Options (#review-the-imported-sql-server-database-options)
- H3: Configure the Tomcat Application Server and Java (#configure-the-tomcat-application-server-and-java)
- H3: Implement Microsoft SQL Advanced Security Encryption (#implement-microsoft-sql-advanced-security-encryption)
- H3: Run the Installation Checker (checkinstall) (#run-the-installation-checker-checkinstall)
- H3: Run the Installation Script (#run-the-installation-script)
- H3: Post-Install: Complete the Installation (#post-install-complete-the-installation)
- H3: Post-Install: Verify the Installation (#post-install-verify-the-installation)
- H3: Install the Data Warehouse (#install-the-data-warehouse)
- H2: Install Clarity With PostgreSQL (#install-clarity-with-postgresql)
- H3: Clarity Pre Installation (#clarity-pre-installation)
- H3: Configure a Database with PostgreSQL (#configure-a-database-with-postgresql)
- H3: Configure the Tomcat Application Server and Java (#configure-the-tomcat-application-server-and-java)
- H3: Configure Java Environment Variables on the Application Server (#configure-java-environment-variables-on-the-application-server)
- H3: Run the Installation Checker (checkinstall) (#run-the-installation-checker-checkinstall)
- H3: Run the Installation Script (#run-the-installation-script)
- H3: Post-Install: Complete the Installation (#post-install-complete-the-installation)
- H3: Post-Install: Verify the Installation (#post-install-verify-the-installation)

## Install Clarity With Oracle

Before you install Clarity, plan the installation and all environment details. Repeat the configuration planning process for the pilot, test, QA, training, and production environments.


> [!TIP]
> The following resources help you plan your installation or upgrade:
- Release Information
- Database Connectivity Diagrams
- Database Performance Whitepapers
Use the following checklist to assist you with new installations:
> [!INFO]`r`n> Figure 20: This diagram shows the steps for a new installation of Clarity


SaaS administrators can skip the hardware-related configuration items that do not apply.
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

### Clarity Pre Installation
- Complete the Pre-Install Steps
- Pre-Install Requirements
- Configure Clarity System Administration
- Database Backup Images for New Installations

#### Complete the Pre-Install Steps

Here is a sample pre-check results page: precheck-results file.

#### Pre-Install Requirements

1. If you are re-installing over a previous fresh install or migrating to a new server, you can backup your installation directory and database. Otherwise, skip this step and perform a new install.
2. Verify the third-party software that is supported for this release. See the Hardware and Software Compatibility Specifications page.
3. Verify that you have the required license key information to install some third-party software products. See the documentation or readme file on the installation media.
4. Verify that you have administrator rights for the servers. 5. Disable any custom database triggers, custom unique restraints, or antivirus scanners that can interfere with the
installation scripts. 6. Spaces in the PATH variable may cause difficulty on a Windows server. You can escape the entries using quotes.
Another option is to replace the entries with their short 8.3 file names. For example, to escape the spaces, change the entry ;C:\Program Files (x86)\; to ;"C:\Program Files (x86)\"; In this example, the spaces can also be avoided with the short name C:\Progra~2\:
> [!NOTE]
> It is best practice to keep clarity to a simple path like C:\Clarity. To determine short file names for a path, see the Microsoft Windows documentation. 7. Verify you can access the installation media and database images. Clarity uses a backup-based database deployment mechanism. Instead of building the database during the installation, a pre-built, fully populated database backup base image is provided on the installation media. The image contains everything that a new installation requires. a. Extract install.jar b. Navigate to install-packages\<clarityversion>\package.jar\database\backups. You will get the database images. 8. Verify that you do not install a test or development environment on the same server as a production environment. 9. As a database administrator, follow the related Database Server documentation to install the database software. Verify that the database software is operational before you configure it for Clarity.

#### Configure Clarity System Administration

During and after the installation, use Clarity System Administration (CSA) to stop, start, and monitor the services in the cluster. The Jaspersoft and database servers are unmanaged, a standard practice for most organizations.

Clarity is comprised of the server services that run on the application server. By default, all services are managed. A managed service is one that is started, stopped, and monitored from CSA using local beacon services running on each system. Most of the services can be left unmanaged, if desired. An unmanaged service operates the same as a managed service with one difference: The CSA application cannot control or monitor an unmanaged service. The database server, the reports server, and the application server (in some instances) can be unmanaged.

The Clarity services include:
- **app**: The application service handles client requests. You can use one or more app services for each cluster. You can configure multiple instances for each server. The app service is always managed.
- **beacon**: Beacon service communicates with servers and ensures that all servers are in sync.
- **bg**: You can use one or more background services for each cluster. You can configure multiple instances for each server. You are required to manage bg services.
- **nsa**: The system administration service is always managed. You can use one nsa service for each cluster.

> [!IMPORTANT]
> To deploy a Microservice Broker, see Getting Started with the Microservice Broker.

#### Database Backup Images for New Installations

Clarity uses a backup-based database deployment mechanism. The installation media provides pre-built, fully populated database backup base images. The base images contain everything that a new installation requires. Backup images are available for the application and data warehouse databases.

### Configure a Database with Oracle
- Configure Oracle
- Create the Required Oracle Tablespaces (Sample Script)
- Set the Clarity Database Required Oracle User Privileges
- Import the Clarity Application Database Backup Image (Oracle)
- Configure Oracle Database Connectivity and Net Service Name
- Configure Clarity with Oracle Database Encryption (On-Premise Only)
- Configure Multitenancy in Oracle

#### Configure Oracle

Install Oracle. Follow the third-party documentation. We do not recommend the default Oracle feature where it attempts to automatically install and configure a database for you. Create a Clarity (formerly niku) database, Clarity tablespaces, and database user. Then import the database schema from the database backup file on the Clarity installation media. Complete the following tasks in the order presented to configure Oracle for use with Clarity. 1. For extended character handling on an Oracle server, set the NLS language to AL32UTF8.
a. UNIX: Edit the UNIX user profile to add the NLS_LANG variable:
NLS_LANG=AMERICAN_AMERICA.AL32UTF8 EXPORT NLS_LANG

b. Windows: Start the registry editor: a. From the Start menu, select Run, and enter regedit . b. Go to HKEY_LOCAL_MACHINE\SOFTWARE\ORACLE\<Oracle Home> and change the value for key NLS_LANG to: AMERICAN_AMERICA.AL32UTF8
2. Set the required parameters in the following table for your new database:

Name

Value

Character Set National Character Set nls_date_format

AL32UTF8 UTF8/AL16UTF16 YYYY-MM-DD HH24:MI:SS

nls_sort nls_comp query_rewrite_enabled

BINARY BINARY true

Cursor_sharing

FORCE

3. The following initNIKU.ora file uses Automatic Memory Management (AMM). The following sample is the recommended parameter settings. However, you can adjust the settings according to your environment.

Oracle 19c: Init.ora file.

#### Create the Required Oracle Tablespaces (Sample Script)

To create the required tablespaces for Clarity to work with Oracle, use the following script and adjust the size as appropriate. The Oracle software and database instance must already be created.
The schema in the backup is NIKU, and the tablespaces are shown in the following example:
- INDX_LARGE
- INDX_SMALL
- USERS_LARGE
- USERS_SMALL
Here is the syntax for creating tablespaces:Syntax
Example: Creating Tablespaces
Use the script in the file to create the tablespaces and adjust the size as required: CreatingTablespaces

#### Set the Database Required Oracle User Privileges

The sample script in the file shows the required privileges for a Clarity schema user: RequiredPrivileges

#### Import the Application Database Backup Image (Oracle)

The Oracle database backup that Clarity provides contains the complete schema that is needed for a new installation. The schema in the backup is NIKU, and the tablespaces are:
- INDX_LARGE
- INDX_SMALL
- USERS_LARGE
- USERS_SMALL
If you need a schema or tablespace remapping, use the Datapump options. For complete information about database import operations and the available options for using the Oracle Datapump, search the Oracle website.


Follow these steps: 1. On the Clarity installation media, locate the Oracle database image in the <root>/database folder. 2. Save the database backup to a location on the database server. 3. Initiate a sqlplus session as the system user and create an import directory:
a. To log in to sqlplus, enter the following command: > sqlplus system/<system_password>
b. In sqlplus, run the query to create an import directory. SQL> create or replace directory import_directory as '<database backup location>';
c. Exit sqlplus. 4. To initiate the import, issue the following command:
> impdp system/<system_password> DIRECTORY=import_directory transform=oid:n DUMPFILE=oracle_base.db SCHEMAS=niku LOGFILE=import.log An import.log is generated in the same location as the database backup. Import errors are expected as there are dependencies between the imported items. Once the import has completed, you can recompile the database to resolve invalid objects.
> [!NOTE]
> If you are using different tablespaces than the ones provided in the backup image, provide tablespace remapping parameters. For information about tablespace remapping parameters, see the Oracle documentation for impdp. 5. To compile invalid objects from the import, log in to sqlplus as the sys user (sysdba) and issue the following command: SQL> @utlrp.sql The utlrp.sql and utlprp.sql scripts are provided by Oracle to recompile all invalid objects in the database. They are located in the $ORACLE_HOME/rdbms/admin directory. 6. If Clarity is already configured then you can go to bin and compile using the following command: admin db compile

#### Configure Oracle Database Connectivity and Net Service Name

On Windows servers, the Database Configuration Assistant automatically creates the Clarity service. If the service name is sufficient, you can skip this step.
> [!NOTE]
> You can either set up a database connection using SID or Service Name. Using both SID and Service Name is optional 1. Verify that the NLS language setting in the operating system is AL32UTF-8. 2. Configure an Oracle net listener service. During Oracle installation, the Oracle Net Configuration Assistant is typically launched automatically to create the default listener. If necessary, start the Oracle Net Configuration Assistant for UNIX or Windows using the appropriate command:
- UNIX: <oracle home>/bin/netca &
- Windows: Click the Start Menu, and choose Programs, Oracle, Oracle Home, Configuration and Migration Tools, Net Configuration Assistant


To create the TNS listener, use the information in the following table:

Oracle Net Configuration Assistant Screen
Welcome Net Service Name Configuration
TCP/IP

Option Local Net Service Name Configuration Service Name
Host Name

Value
Selected Enter the service name provided during the Oracle database installation. Default: niku <database server name>

> [!NOTE]
> If you already have a configured TNS Listener on the server, you can skip is step.

#### Configure Clarity with Oracle Database Encryption (On-Premise Only)

As a database administrator, you can configure Clarity custom JDBC URL settings when you set up Oracle to accept only encrypted connections.
- Configure Oracle Net Encryption
- Implement Oracle Advanced Security Encryption
- Configure the JDBC URL in CSA

**Configure Oracle Net Encryption**

Since June 2013, Net Encryption has been licensed with Oracle Enterprise Edition and does not require Oracle Advanced Security.
> [!TIP]
> For details see the Oracle documentation for Configuring Data Encryption and Integrity
Add several lines to the sqlnet.ora file on both the client and server:
1. Client: Add a line for SQLNET.ENCRYPTION_CLIENT= and choose one of the following values (for example, SQLNET.ENCRYPTION_CLIENT=accepted) .

SQLNET.ENCRYPTION_CLIENT=

Description:

accepted This is the default value. Accepted tells the server that the client accepts secure net traffic if requested.

rejected The client rejects any connection requiring secure net traffic.

requested The security service is activated if the server requests or requires it.

required The client accepts the connection only if the server accepts secure traffic.
2. Server: Add one or more server lines (different combinations of lines and values are acceptable). For example, you might add:

SQLNET.ENCRYPTION_SERVER=required SQLNET.ENCRYPTION_TYPES_SERVER=<encryption algorithm>
The following tested encryption algorithms are supported by Oracle:
- AES256: AES with a 256-bit key size
- RC4_256: RSA RC4 with a 256-bit key size
- AES192: AES with a 192-bit key size
- 3DES168: Three-key 3DES (with an effective key size of 168 bit)
- AES128: AES with a 128-bit key size
- RCA_128: RSA RC4 with a 128-bit key size
- 3DES112: Two-key 3DES (with an effective key size of 112 bit)
- RC4_56: RSA RC4 with a 56-bit key size
- DES: DES (with an effective key size of 56 bit)
- RC4_40: RSA RC4 with a 40-bit key size
- Verify the encryption status meets your requirements. The encryption status derived from your client and server
parameter values is summarized in the following table:
> [!NOTE]
> ORA-12660 is the error returned by Oracle for the given scenario.
**Implement Oracle Advanced Security Encryption**

Oracle Advanced Security provides the following features:
- Transparent Data Encryption (TDE) protects information in the database from media theft by encrypting sensitive data
on disk.
- Data encryption and integrity to ensure the privacy of communications over any protocol into the Oracle database.
- Strong authentication services such as Kerberos, PKI, Biometrics, and RADIUS-compliant smart cards. Follow these steps: 1. Set the EncryptionLevel property in the JDBC URL to accepted, requested, or required 2. Set the EncryptionTypes property in the JDBC URL to one or multiple algorithms. Oracle Advanced Security
provides the Advanced Encryption Standard (AES), DES, 3DES, and RC4 symmetric cryptosystems for protecting the confidentiality of network traffic. Examples Oracle URL without Encryption: jdbc:oracle:thin:@//<hostname>:<port>/<service_name>/<service_name>
Oracle URL with Encryption: jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=*****)(PORT=****)) (CONNECT_DATA=(SERVICE_NAME=***)(SERVER=dedicated))(SECURITY=(ENCRYPTION_CLIENT=requested) (ENCRYPTION_TYPES_CLIENT=AES256)))

Oracle URL with SSL: jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCPS)(HOST=server.xyz.com) (PORT=XXXX))(CONNECT_DATA=(SERVICE_NAME=XXXX)(SERVER=dedicated)) (CLARITY_PARAMETERS=(javax.net.ssl.trustStore=/opt/keystore) (javax.net.ssl.trustStorePassword=XXX)))
Oracle URL Load Balanced between Multiple Hosts: jdbc:oracle:thin:@(DESCRIPTION=(RETRY_COUNT=20)(RETRY_DELAY=10) (ADDRESS_LIST= (LOAD_BALANCE=ON) (ADDRESS=(PROTOCOL=tcp)(HOST=server1.xyz.com) (PORT=XXXX)) (ADDRESS=(PROTOCOL=tcp)(HOST=server2.xyz.com)(PORT=XXXX))) (CONNECT_DATA=(SERVICE_NAME=SERVICENAME)))
**Configure the JDBC URL in CSA**

Database encryption is completely transparent to Clarity; however, you need to modify the JDBC URL to ensure Clarity can connect to the database. Refer to the examples in the Implement Oracle Advanced Security Encryption section to modify the JDBC URL.
> [!TIP]
> The value of this property is ignored if the EncryptionLevel property is set to rejected. > [!NOTE] More Configuration Tips:
- Separate multiple values with commas and enclose the entire set of values in parentheses.
- If multiple values are specified and Oracle Advanced Security encryption is enabled using the
EncryptionLevel property, the database server determines which algorithm is used based on how it is configured.
- If unspecified, a list of all possible values is sent to the database server. The database server determines which algorithm is used based on how it is configured.
- Consult your Oracle administrator to verify the data encryption settings of your Oracle server

#### Configure Multitenancy in Oracle

Oracle Multitenant architectures for next-generation cloud databases deliver isolation, agility, and scale. A multitenant container database can hold many pluggable databases. An existing database can simply be adopted with no application changes required. Oracle Multitenant fully complements Oracle Real Application Clusters, Oracle Active Data Guard, and other options. Follow these steps: 1. As a database administrator, install and configure your Oracle MT enabled database. No support from Broadcom is
available or required for these steps: a. You can create a container in a test environment for Clarity 15.3 or higher. b. Create your PDB, directory, and permissions. c. Query your PDB and resolve any connection issues. 2. Log in to CSA. 3. On the Overview page, click the link for your Clarity server instance. 4. Click the Database tab.

5. Under Internal Connection: Niku, CSA shows your PDB status as Unavailable until you complete the following configuration steps. a. Select the Specify URL check box. The JDBC URL field appears with default values that include an SID assignment. > [!TIP] Refer to the examples in the Implement Oracle Advanced Security Encryption section to modify the JDBC URL. b. Change SID to ServiceName. c. Set the ServiceName parameter to the name of your PDB.
The following image shows a new configuration example:
The following JDBC URL string shows another example:
jdbc:oracle:thin:@//"hostname":"port"/"service_name"; ServiceName=serviceTNS; BatchPerformanceWorkaround=true; InsensitiveResultSetBufferSize=0; ServerType=dedicated; supportLinks=true; AlternateServers=(server2:1115;server3:1115); LoadBalancing=true

### Configure the Tomcat Application Server and Java

1. Keep your systems up to date with the latest patches. See your vendor documentation for more information.
2. Install the appropriate versions of the following software on each server that you plan to include in a cluster. The products that you install on a server depending on the services the server runs. Please review the Hardware and Software Compatibility Specifications for information on the specific Java and Tomcat versions supported in this release.

| Service | Required Product |
|---------|-----------------|
| Database service | Oracle |
| Clarity System Administrator service (nsa), Clarity Application (app) service | Apache Tomcat |
| Clarity Background service (bg), Beacon service | AdoptOpenJDK |

3. Some third-party library JAR files (currently, jgroups-all.jar and xinclude.jar) are shipped separately from the image. The install.jar image does not contain third-party files. Any install packages for a previous version of Clarity that are included in the install.jar also exclude the JAR files. For each release, the files are bundled into a thirdparty JAR library file. The filename uses the following format: thirdparty.libs.<release number>.jar (for example, thirdparty.libs.16.4.1.jar). To make the files available, retrieve the thirdparty.libs.<release number>.jar file from the installation media. Place the file in a location that is accessible to the installer.

> [!NOTE]
> If you place the JAR file in the installation directory, the installer does not prompt you for the location of the file.
4. Install Java. Please review the Hardware and Software Compatibility Specifications for information on the specific Java and Tomcat versions supported in this release. Navigate to the installation media that you downloaded and open the Java folder.
a. On Linux, log in to the server as root and go to the cd /usr directory. Extract the OpenJDK11Ujdk_x64_linux_hotspot_x.x.x_x.tar.gz file. By default, Java is installed in /usr/ path.
b. On Windows, extract the OpenJDK11U-jdk_x64_windows_hotspot_x.x.x_x file using tools such as Winzip to the Java directory on your system.
5. Set or update the environment variables (JAVA_HOME and PATH) to point to the new Java.

### Configure Java Environment Variables on the Application Server

**Linux:** To update the environment variables on Linux, edit the user (.profile) file and add or modify the following system variables:
- **JAVA_HOME**: Shell scripts use this variable to locate the correct Java home directory. For example:
  `JAVA_HOME=/<Java home directory>`
  `export JAVA_HOME`
- **PATH**: Locates the command-line utilities. Add the following information to the beginning of the existing PATH system variable:
  `PATH=/<clarity home>/bin:$JAVA_HOME/bin:$PATH`
  `export PATH`

**Windows:** To update the environment variables on Windows, open the Control Panel and add or modify the following system variables:
- **JAVA_HOME** - Specifies the Java home directory only, and is not a path variable. Therefore, only the home directory can be present in the JAVA_HOME value. Value: `<Java home directory>`

> [!NOTE]
> The JAVA_HOME value cannot contain the semi-colon (;) character. If the value has a trailing backslash (\) at the end, the checkinstall script skips all scripts.
- **PATH** - Locates the command-line utilities. Add the following information to the beginning of the existing PATH system variable. Value: `<clarity home>\bin;%JAVA_HOME%\bin;%PATH`

### Run the Installation Checker (checkinstall)

Run the Installation Checker (checkinstall) on the designated server for a new installation or upgrade. Although this utility runs automatically at the start and end of installations and upgrades, you can also run it as a standalone utility to verify that your system is ready for installation.
Follow these steps:
1. Extract the Clarity installer to the Clarity application server. 2. Open a command prompt and navigate to the checkinstall directory located in the directory to which you extracted the
installer. 3. Invoke the checkinstall command: LINUX:
sh checkinstall.sh
Windows:
checkinstall.bat
> [!NOTE]
> You are asked for the Operator Username and Operator Email. This information refers to the user who is upgrading or installing and the email of the user. This information is stored as a record in the installation log. 4. When you run checkinstall.sh on Linux, an unexpected end of file error might occur. As a workaround, convert the script with dos2unix and then run it again.
dos2unix ./checkinstall.sh dos2unix: converting file ./checkinstall.sh to Unix format ...
sh ./checkinstall.sh
(Optional) You can also use the following perl script to run checkinstall:
perl -i -pe 'y|\r||d' checkinstall.sh
5. Verify the results. The results include any warnings and errors, and also indicate customizations made to the application. Review the customizations and make adjustments for the upgrade as necessary.
Watch the video to know the use of Checkinstaller Utility.
> [!TIP]
> To play this video in full-screen mode, click the YouTube logo at the bottom of the video.
The Checkinstaller Utility detects and produces a report. You can review the report, and reach out to Broadcom support if required.
The Installation Checker can help you assess a new installation or upgrade before you start the actual process. The Installation Checker runs automatically after an upgrade to validate the success or failure of the upgrade process. The utility produces a zipped report archive file that can help you plan an installation or upgrade.
When the Installation checker is invoked as a standalone utility or automatically at the end of an upgrade attempt, a zipped report archive is created. The archive contains the following files:
- precheck-results.xml and precheck-results.html.
- postcheck-results.xml and postcheck-results.html. These files are present only if the Installation Checker is invoked
through the upgrade process.
- install.log (if available).
- checkinstall.log.
- database output customization files (if present).
- admin.log from the target directory (if present).
- install.properties (if present).
- checkinstall.properties (if present).
- checkinstall-version.properties.

The archive has a timestamp encoded name (for example, checkinstall-results_2018-04-17_16-48-31.zip). The file is located in the checkinstall/check-logs directory, and if possible, the file is copied into the <target runtime dir>/logs/ checkinstall directory. Each individual check produces one of the result codes in the following table with a diagnostic message.

INFO > [!WARNING] ERROR

Code

Description
Indicates that the check was successful and no potential problems were detected. Specific advice can be present to aid in planning the installation or upgrade.
Indicates a potential problem. Details are contained in the message. Address the problem before running the installation or upgrade.
Indicates a serious installation or upgrade problem. Details are contained in the message. The installation or upgrade process does not continue when one or more error conditions exist.

Here is a sample post-check results page: postcheck-results file.

### Run the Installation Script

If you are installing a cluster, run the installation script on each server that you plan to include in the cluster. When the installation script finishes, the installation process is not yet complete. Finish the installation tasks and configuration using the Clarity System Administration application.
> [!NOTE]
> Some key points to remember are:
1. Record the Clarity System Administration password that is created during the installation. The password is required to log in to Clarity System Administration and complete the installation.
2. During install/upgrade, you should stop all the clarity services, and there is no active database session.
> [!WARNING]
> During the Apache Tomcat installation, you are asked if you want to install Clarity System Administration locally. Enter true for the administration server only. For other servers in the cluster, enter false.
Follow these steps:
1. From the command prompt, navigate to the directory where you want to unpack the installer file, and type the following commands:
mkdir temp cd temp
2. From the directory, run the JAR command to extract install.jar from the installation media:
jar -xvf <path of the installation media>/install.jar
3. Run the installation script using the following commands: LINUX:
chmod +x ./install.sh sh ./install.sh
Windows:
install.bat
4. To complete the command-line installation, follow the on-screen instructions. The workflow and instructions for an installation appear in a single phase at the beginning. See the following list for installation property descriptions:
- Third Parties Libraries Jar Directory Specifies the directory where the installer can find the thirdparty.libs.16.4.1.jar file when the file is not in the current directory.
- Clarity Home Directory Specifies the directory in which to install Clarity. This directory is created if it does not exist.
- Clarity Temporary Directory Specifies a temporary directory used to copy shell and node scripts during the bulk export of the status report. Clarity generates this temporary directory automatically and uses it as the default location. By default, the temporary file has read and write permissions. You can also define a new path to copy the status report scripts other than the default path. In such a case, when prompted for the location of the temporary directory under "Clarity Temporary Directory", provide the exact path to which the script should be copied.
- JDK Home Directory Please review the Hardware and Software Compatibility Specifications for information on the specific AdoptOpenJDK version supported in this release.
- Beacon Multicast Address The multicast address that the Beacon and Clarity System Administration use for service discovery. Each Clarity cluster requires a unique IP address. The multicast address must be in the Class address range between 224.0.0.0 and 239.255.255.255. Each server within a cluster must use the same address and port. Default value: 230.0.0.1 We recommend an IP address in the 239.x.x.x subnet. > [!NOTE] Generally, the multicast is disabled if you are running in a public cloud. So, it is recommended to use JDBC ping. To learn more, see CSA: Configure JDBC PING as an Alternative to Multicast.
- Beacon Multicast Port The port that the Beacon and Clarity System Administration use for service discovery. Each Clarity cluster requires a unique IP address. Each server within a cluster must use the same address and port. Default value: 9090
- Beacon Client Port Defines the server port number that the Beacon service uses. Default value: 9091
- Super User Command Prefix (UNIX only) The optional command prefix utility, such as sudo, to execute root-
level commands. For example, you can implement a root-level command when choosing a socket port below 1024 because root-level access is required to allocate it.
- Super User Name (UNIX only) The optional replacement for the root superuser name. This name can be used alone or with the superuser command prefix. For example, if used with sudo, specify the user to which sudo rights are given here. If you are not using sudo, set this value to the user name of the user installing and running Clarity. If you are not running Clarity as root, set this value to the user name of the user who runs Clarity services.
- Install Clarity System Administration (CSA) (Apache Tomcat only) Specifies whether to install Clarity System Administration on the current server. Enter one of the following values:
- If you are installing Clarity System Administration on this server, enter true.
- Otherwise, enter false.
- Tomcat Home Directory (Apache Tomcat only) Defines the Apache Tomcat home directory.
- CSA Web Port (Apache Tomcat only) Defines the web port number that Clarity System Administration uses in a UNIX system. This value must be greater than 1024; otherwise, the service must run as root. Default value: 8090
- Enter password (Apache Tomcat only) Specifies the Clarity System Administration password. Default value: admin
- Operator User Name Specifies the user name of the operator who is running the installation script. This information is kept as a record in the installation log.
- Operator Email Address Specifies the email address of the operator who is running the installation script. This information is kept as a record in the installation log.
- Acknowledge reviewing Install Guide and Change Impact & Upgrade Guide This prompt records a response from installing users that they have read both Installing and Upgrading and Change Impact and Upgrade.

### Post-Install: Additional Setup Configuration

Perform the following additional steps for Oracle deployments only:
1. Grant required privileges a. Connect to the Oracle database as the sys user (sysdba)

b. Execute the following SQL statement:
GRANT CREATE ANY CONTEXT, DROP ANY CONTEXT TO <Clarity_database_user>;
c. Replace <Clarity_database_user> with the actual username of your Clarity database user. 2. Grant package execution rights
a. Still connected as SYSDBA, execute the following SQL statement:
GRANT EXECUTE ON SYS.DBMS_SESSION TO <Clarity_database_user>;
b. Again, replace <Clarity_database_user> with the actual Clarity database username. > [!IMPORTANT] The required privileges and package execution rights are mandatory for Clarity functionality and must not be revoked after the upgrade or at any later time.
3. After completing a new Clarity installation, follow these steps: a. Enable the feature toggle a. With Clarity services running, connect to the Clarity server b. Run the following command:
admin toggle-feature IMPERSONATEDBY_SESSION_CONTEXT_VARIABLE_DE168694 1
b. Run database bootstrap a. On the Clarity server, run the following command:
admin db db-bootstrap-odf -Dodf.triggers=true -Dodf.force=false Dodf.restoreNonCustomizedViews=false
c. Restart the services

### Post-Install: Complete the Installation

These steps explain how to complete the Clarity installation in a configuration running the Apache Tomcat application server.
Follow these steps:
1. To verify that Clarity is accessible from a browser, connect using the configured Entry URL value. The Entry URL is configured in CSA on the Application subtab. If you have multiple application servers, the Entry URL points to the load balancer. If you have only one server installed, the Entry URL points to the application server. The Entry URL has the following format: http://<server name>:<port>/niku/nu The default user ID and password are admin/admin. If the default HTTP port value of 80 is used, you do not have to specify the <port> value.
2. Change your default password. 3. Install PMO Accelerator add-in that you intend to use with this release. See Add-in: PMO Accelerator . 4. Update access rights for users, groups, or OBS instances with new or updated security rights that are introduced in
this release. Click Administration, Resources and add most if not all global access rights to the admin user. See Access Rights Reference.

### Post-Install: Verify the Installation

Follow these steps:
1. Log in to Clarity System Administration (CSA). 2. View the log files in CSA for the servers in a cluster:
a. Click Servers in the left navigation pane. b. Click the server name and click Logs. c. In the Log File field, select the log file that you want to view and click Go. Limit the amount of data by selecting a
value in the Max Size field. d. (Optional) To download the file, click Download and specify a target location.

> [!WARNING]
> In Classic PPM, check the System Health Report and verify the time settings. The server time is the same (preferable, down to the nanosecond) on the Clarity application server, Clarity database server, and Data Warehouse database server. To learn more, see Health Report. > [!NOTE] Continue configuring your new installation with CSA. See CSA: Clarity System Administration.

### Install the Data Warehouse

The data warehouse (abbreviated as DWH) is optimized specifically for reporting and analytics. The data warehouse is installed on a separate schema from the Clarity database schema, and is populated at scheduled intervals by the Load Data Warehouse job.
> [!TIP]
> We recommend that you set up the data warehouse before installing the Jaspersoft reporting server. The data warehouse includes data on the following Clarity items:
- Investments, ideas, projects, programs, applications, assets, other work, products, services
- Teams, tasks, financial plans, hierarchies, risks/issues/change requests, status reports (PMO Accelerator)
- Timesheets and notes, time entries and notes
- Financial transactions
- Resources
- OBS and portfolio filters The data warehouse consists of a set of dimension tables and fact tables. Dimension Tables store the following data:
- Fields by which you want to view the data.
- Major objects and subobjects in Clarity.
- Dimension and localized dimension tables Fact Tables store the following data:
- Numerical data that you view or aggregate by dimension
- Summary and period fact tables The following image shows how data is transferred from the Clarity database to the data warehouse.
> [!INFO]`r`n> Figure 21: Data_Warehouse_Architecture


The data warehouse has the following characteristics:
- The database is modeled on the STAR schema and includes the Investment, Resource, Portfolio, Timesheet, and
Project objects.
- Consistent naming conventions, formats, and encoding structures are used throughout.
- The database is nonvolatile because it is a separate schema from the Clarity database.
- Predefined time slices that can be configured are included. To know more, please refer the following sections:
- (On-Premise only) Configure the Data Warehouse Database (Oracle)
- (On-Premise only) Set Up a Database Link for the Data Warehouse

#### (On-Premise only) Configure the Data Warehouse Database (Oracle)

Complete the following tasks to configure Oracle for use with the Data Warehouse:
- Set the required Data Warehouse Oracle database parameters
- Init.ORA Parameter File Samples with Recommended Settings
- Estimate the Data Warehouse Size
- Create the required Data Warehouse Oracle tablespaces.
- Set the required Data Warehouse Oracle user privileges.
- Import the Data Warehouse database backup image.
- Configure database connectivity to Oracle.

#### (On-Premise only) Set the Required Data Warehouse Oracle Database Parameters

Set the required parameters in the following table for your new database:


Character Set National Character Set nls_date_format nls_sort nls_comp query_rewrite_enabled Cursor_sharing

Name

Value AL32UTF8 UTF8/AL16UTF16 YYYY-MM-DD HH24:MI:SS BINARY BINARY true FORCE

#### (On-Premise only) Init.ORA Parameter File Samples with Recommended Settings

The following init.ora file uses Automatic Memory Management (AMM). The following samples are the recommended parameter settings, but you can adjust the settings according to your environment. If OLTP and the Data Warehouse schema are on the same database server, consider setting up a different TEMP tablespace for the Data Warehouse.
Windows:Init.ora-Windows.txt
Linux:Init.ora-Linux.txt

#### (On-Premise only) Estimate the Data Warehouse Size

The following view is provided in the Clarity schema to facilitate estimating the approximate size for the Data Warehouse schema. We recommend that you run this query after setting an Entity and the Timeslice job is run on Clarity . The estimate is also provided at the end of an upgrade in the postcheck-results.html file.
SELECT ESTIMATED_DWH_SIZE_IN_GB FROM DWH_ESTIMATE_SIZE_V

#### (On-Premise only) Create the Required Data Warehouse Oracle Tablespaces (Sample Script)

To create the required tablespaces for the Data Warehouse to work with Oracle, use the following script and adjust the size as appropriate. We recommend that you closely monitor the amount of disk space. The Oracle software and database instance must already be created. You can add data files to each tablespace. See the Oracle documentation to create larger block size tablespaces for the Data Warehouse.
The schema in the backup is PPM_DWH, and the tablespaces are shown in the following example:
- DWH_PPM_DATA_DIM
- DWH_PPM_DATA_FACT
- DWH_PPM_INDX_DIM
- DWH_PPM_INDX_FACT Here is the syntax for creating the data warehouse oracle tablespaces: Syntax.txt
Here is an example for creating the data warehouse oracle tablespaces: Example.txt

#### (On-Premise only) Set the Required Data Warehouse Oracle User Privileges

The sample script shows the required privileges for a Clarity schema user. (DEFAULT TABLESPACE DWH_PPM_DATA_DIM): Sample.txt

#### (On-Premise only) Import the Data Warehouse Oracle Database Backup Image (Oracle)

The Oracle database backup that is provided with the Data Warehouse contains the complete schema that is needed for a new installation. The schema in the backup is PPM_DWH, and the tablespaces are:
- DWH_PPM_DATA_DIM (default)
- DWH_PPM_DATA_FACT
- DWH_PPM_INDX_DIM
- DWH_PPM_INDX_FACT If a schema or tablespace remapping is desired, use the Datapump options. For complete information about database import operations and the available options for using the Oracle Datapump, search the Oracle website.
Follow these steps: 1. In the Clarity installation media, locate the Oracle PPM_DWH database image in the <root>/database folder. 2. Save the database backup to a location on the database server. 3. Initiate a sqlplus session as the system user and create an import directory by completing these steps:
a. To log in to sqlplus, enter the following command: > sqlplus system/<system_password>
b. In sqlplus, run the query to create an import directory. SQL> create or replace directory import_directory as '<database backup location>';
c. Exit sqlplus. 4. To initiate the import, issue the command:
> impdp system/<system_password> DIRECTORY=import_directory transform=oid:n DUMPFILE=dwh_oracle_base.db SCHEMAS=ppm_dwh LOGFILE=ppm_dwh_import.log A ppm_dwh_import.log is generated in the same location as the database backup. Import errors are expected as there are dependencies between the imported items. Once the import has completed, you can recompile the database to resolve invalid objects.
> [!NOTE]
> If you are using different tablespaces than the ones provided in the backup image, provide tablespace remapping parameters. For information about tablespace remapping parameters, see the Oracle documentation for impdp. 5. To compile invalid objects from the import, log in to sqlplus as the sys user as sysdba and issue the command: SQL> @utlrp.sql The utlrp.sql and utlprp.sql scripts are provided by Oracle to recompile all invalid objects in the database. They are located in the $ORACLE_HOME/rdbms/admin directory. Or To recompile invalid objects from the Clarity Install bin folder, run the following command: admin db compile -Ddb.id=Datawarehouse

#### (On-Premise only) Configure the Oracle Database Connectivity

To configure the database connectivity to Oracle, complete the following actions:
- Configure an Oracle net listener.
- Configure an Oracle net manager service name.

#### (On-Premise only) Configure an Oracle Net Listener Service

During an Oracle installation, the Oracle Net Configuration Assistant is typically launched automatically to create the default listener. If you already have a configured TNS Listener on the server, you can skip this procedure.

Follow these steps: 1. Start the Oracle Net Configuration Assistant for UNIX or Windows using the appropriate command: UNIX
<oracle home>/bin/netca &
Windows Start Menu, Programs, Oracle, Oracle Home, Configuration and Migration Tools, Net Configuration Assistant 2. To create the TNS listener, use the information in the following table:

Screen Welcome Listener Configuration, Listener Listener Configuration, Listener Name

Option Listener Configuration Add Listener Name

Value/Choice Selected Selected <choose a name>

#### (On-Premise only) Configure an Oracle Net Manager Service Name

Follow these steps:
1. Launch the Oracle Net Manager for UNIX or Windows using the appropriate command: UNIX
<oracle home>/bin/netasst &
Windows Start Menu, Programs, Oracle, Oracle Home, Configuration and Migration Tools, Net Manager 2. Use the information in the following table to create the Oracle Net Manager service name.

Oracle Net Configuration Assistant Screen
Net Service Name Wizard Protocol Protocol Settings Protocol Settings Service

Option
Service Name Protocol Host Name Port Service Name

Value
clarity TCP/IP Server IP Address or DNS Hostname Server Port clarity

#### (On-Premise only) Set Up a Database Link for the Data Warehouse

Create a Database Link (Oracle) to the Clarity Schema from the Data Warehouse schema as part of the deployment. The link can be used to refer to tables and views on the remote database by appending @dblink to the table or view names. The link gives access to remote tables and views. You can use any SELECT, INSERT, UPDATE, or DELETE statement for the Data Warehouse schema to query against the Clarity schema. Database links are created to support having the Data Warehouse schema on a dedicated database server or on the same database server as the Clarity schema.
Clarity System Administration (CSA) contains options to enter the information that is related to DBLINKS for Oracle. The default link name is PPMDBLINK, and the name is created during the Save action on the Data Warehouse tab in CSA. The DBLINKs are currently used ONLY during the ETL job that is used to populate the Data Warehouse.
The following user privileges are required to create a database link:
Oracle
CREATE DATABASE LINK TO PPM_DWH
> [!NOTE]
> You can revoke the user privileges for Oracle (DATABASE LINK TO PPM_DWH) and ALTER ANY LINKED SERVER TO PPM_DWH) after you successfully create the DBLINK and run the Load Data Warehouse job. However, if you try to create a new DBLINK and run the Load Data Warehouse job after you revoke these


privileges, you receive errors. To resolve the errors, grant the privileges again. Then create the new DBLINK and run the Load Data Warehouse job.
More information about DBLINK can be found in the documentation available on the Oracle websites. DBLINK is a required parameter for running the Data Warehouse job from Clarity. DBLINK gets created during the SAVE action after the required information is completed on the Data Warehouse tab in CSA. The default Clarity Database Link is named PPMDBLINK. The link is created using the EZCONNECT method that is available with Oracle. For more information about EZCONNECT, refer to http://www.orafaq.com/wiki/EZCONNECT. If you create DBLINK using a method other than EZCONNECT, complete the following fields on the Data Warehouse tab in CSA:
- Custom Database Link. Specifies that the database link is custom. This check box must be selected.
- Custom Database Link. Specifies the name of your custom database link. CSA gives an error if the custom database
link does not exist in the database. Common procedures can be used to create DBLINK for Oracle from Clarity. The procedures can be called directly from the Data Warehouse schema if necessary.
CMN_DBLINK_SP( P_DB_LINK_NAME VARCHAR2, P_CLARITY_DB_HOST_NAME VARCHAR2, P_CLARITY_DB_PORT NUMBER, P_CLARITY_DB_SERVICE_NAME VARCHAR2, P_CLARITY_SCHEMA_NAME VARCHAR2, P_CLARITY_PASSWD VARCHAR2 )
Example: Oracle DBLINK Creation
EXEC CMN_DBLINK_SP ('PPMDBLINK','<hostname>',1521,'CLARITY','NIKU','NIKU');
The default procedure in the Data Warehouse schema can be used to create the DBLINK for both RAC and Non-RAC databases. The procedure does support both RAC and NON-RAC database and services. In RAC, the following example creates the DBLINK from the Data Warehouse schema to a Clarity Schema using the PERF_SERVICE:
EXEC CMN_DBLINK_SP ('PPMDBLINK','hostname',1521,'PERF_SERVICE','niku','niku');

#### (On-Premise only) Verify that the EZCONNECT Method is Enabled

The Oracle EZCONNECT method allows you to create an Oracle database link to the Clarity Schema from the Data Warehouse schema. Follow these steps: 1. Navigate to the following folder:
- $ORACLE_HOME\network\admin 2. Open the sqlnet.ora file and verify that EZCONNECT is shown in the DIRECTORY_PATH:
- NAMES.DIRECTORY_PATH= (TNSNAMES, EZCONNECT) 3. Add EZCONNECT if it is not shown and save the file.

#### Troubleshooting the Data Warehouse Link

These steps explain how to troubleshoot if the Data Warehouse database link fails.

**Oracle**

Follow these steps: 1. Verify that the following privilege is granted to PPM_DWH user:
CREATE DATABASE LINK TO PPM_DWH
2. Verify that EZCONNECT is configured on Oracle. 3. Verify that sqlnet.ora shows EZCONNECT in the DIRECTORY_PATH:
NAMES.DIRECTORY_PATH= (TNSNAMES, EZCONNECT)
4. To verify that PPMDBLINK is working, execute the following query from PPM_DWH schema:
SELECT count(1) FROM SRM_RESOURCES@PPMDBLINK
If the link works, data is returned.

#### (On-Premise only) Default Database Link Does Not Work

If for some reason the default database link does not work, a custom database link can be created from the Data Warehouse schema. Possible Errors:
NSA-0132: Database link could not be created successfully. Please verify the Database and Data Warehouse connection details. ORA-12514: TNS:listener does not currently know of service requested in connect descriptor.
Possible Causes:
- Verify that EZCONNECT is configured and the sqlnet.ora file shows EZCONNECT in the DIRECTORY_PATH: NAMES.DIRECTORY_PATH= (TNSNAMES, EZCONNECT)
- SID and Service_Name are different.
- Global_names parameter is set to true. Solution: Create a custom database link in the Data Warehouse schema and specify the link in CSA. See the Oracle documentation to create database links. Example: CREATE DATABASE LINK <LINK_NAME> CONNECT TO <CLARITY_USER_NAME> IDENTIFIED BY <CLARITY_USER_PWD> USING `<SERVICE_NAME>'; If you create DBLINK using a method other than EZCONNECT, complete the following fields on the Data Warehouse tab in CSA:
- Custom Database Link (check box) Specifies that the database link is custom. This check box must be selected.
- Custom Database Link Specifies the name of your custom database link. CSA gives an error if the custom database
link does not exist in the database.
> [!WARNING]
> If you experience performance issues while Clarity with Oracle 19c, you will need to work with the Oracle and Broadcom support teams to install the following patches:
- Patch 30858919: LG* PROCESS HAS MEMORY LEAK
- Patch 30381614: SESSIONS BLOCKED WAITING FOR GC WAITS FOR A LONG TIME
- Pre-requisite for both patches: Patch 30557433: DATABASE RELEASE UPDATE 19.6.0.0.0


> [!NOTE]
> What's Next?
- Configure the Data Warehouse
- Post Upgrade Steps
- Install and PMO Accelerator Add-In and PMO Sample Data

## Install Clarity With Microsoft SQL

Use the following checklist to assist you with new installations:
> [!INFO]`r`n> Figure 22: This diagram shows the steps for a new installation of Clarity


SaaS administrators can skip the hardware-related configuration items that do not apply.
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

### Clarity Pre Installation
- Requirements
- Pre-Install Requirements
- Configure Clarity System Administrator
- Database Backup Images for New Installations

#### Complete the Pre-Install Steps

Here is a sample pre-check results page: precheck-results file.

#### Pre-Install Requirements

1. If you are re-installing over a previous fresh install or migrating to a new server, you can backup your installation directory and database. Otherwise, skip this step and perform a new install.
2. Verify the third-party software that is supported for this release. See the Hardware and Software Compatibility Specifications page.
3. Verify that you have the required license key information to install some third-party software products. See the documentation or readme file on the installation media.
4. Verify that you have administrator rights for the servers. 5. Disable any custom database triggers, custom unique restraints, or antivirus scanners that can interfere with the
installation scripts. 6. Spaces in the PATH variable may cause difficulty on a Windows server. You can escape the entries using quotes.
Another option is to replace the entries with their short 8.3 file names. For example, to escape the spaces, change the entry ;C:\Program Files (x86)\; to ;"C:\Program Files (x86)\"; In this example, the spaces can also be avoided with the short name C:\Progra~2\:
> [!NOTE]
> It is best practice to keep clarity to a simple path like C:\Clarity. To determine short file names for a path, see the Microsoft Windows documentation. 7. Verify you can access the installation media and database images. Clarity uses a backup-based database deployment mechanism. Instead of building the database during the installation, a pre-built, fully populated database backup base image is provided on the installation media. The image contains everything that a new installation requires. The installation media contains the following base images:
- Extract install.jar
- Navigate to install-packages\<clarityversion>\package.jar\database\backups. 8. Verify that you do not install a test or development environment on the same server as a production environment.


9. As a database administrator, follow the Microsoft SQL Server documentation to install the database software. Verify that the database software is operational before you configure it for Clarity.

#### Configure Clarity System Administration

During and after the installation, use Clarity System Administration (CSA) to stop, start, and monitor the services in the cluster. The Jaspersoft and database servers are unmanaged, a standard practice for most organizations.

Clarity is comprised of the server services that run on the application server. By default, all services are managed. A managed service is one that is started, stopped, and monitored from CSA using local beacon services running on each system. Most of the services can be left unmanaged, if desired. An unmanaged service operates the same as a managed service with one difference: The CSA application cannot control or monitor an unmanaged service. The database server, the reports server, and the application server (in some instances) can be unmanaged.

The Clarity services include:
- **app**: The application service handles client requests. You can use one or more app services for each cluster. You can configure multiple instances for each server. The app server is always managed.
- **beacon**: Beacon service communicates with servers and ensures that all servers are in sync.
- **bg**: You can use one or more background services for each cluster. You can configure multiple instances for each server. You are required to manage bg services.
- **nsa**: The system administration service is always managed. You can use one nsa service for each cluster.

#### Database Backup Images for New Installations

Clarity uses a backup-based database deployment mechanism. The installation media provides pre-built, fully populated database backup base images. The base images contain everything that a new installation requires. Backup images are available for the application and data warehouse databases.

### Configure a Clarity Database with Microsoft SQL Server

After you install SQL Server, complete the following tasks to import and configure the database for use with Clarity. 1. Set up valid login credentials for Clarity. This login name and password are the values that you specify in CSA to log in
to the database. The login name and password can be any combination. 2. Set the Microsoft SQL Server Database Schema name to niku. This name must be the Default Schema for the login
user you created on the Microsoft SQL server. 3. Import the database backup image. On the Clarity installation media, locate the MSSQL database image in the
<root>/database folder. 4. Save the database backup to a temporary location on the database server. 5. Use the Restore Database tool in Microsoft SQL Server Management Studio to restore the base image. To database:
niku From device: c:\<temporary location you saved the database image to> \mssql_base.db 6. Verify the import. Remove the temporary folder and its contents. 7. Associate the imported database with your SQL server security user by running the following pl/sql as the sa user:
USE niku ALTER USER niku WITH LOGIN=<your security user>
8. To grant the VIEW SERVER STATE permission to the <your security user> user, use the following command:
GRANT VIEW SERVER STATE to <your security user>

### Review the Imported SQL Server Database Options

> [!WARNING]
> Mixed collations settings are not supported. If you change the server-level default from SQL_Latin1_General_CP1_CI_AS to another collation, create a new SQL Server instance with the correct collation SQL_Latin1_General_CP1_CI_AS before creating the Clarity database.
The import procedure creates the database with the options in the following table. Review these options to verify that they meet your requirements.

Option ARITHABORT ANSI NULLS QUOTED IDENTIFIER
Compatibility level
Database Schema Name Database user roles
READ COMMITTED SNAPSHOT
VIEW_SERVER_STATE REMOTE QUERY TIMEOUT

Value
ON To apply, execute: ALTER DATABASE <database> SET ARITHABORT ON ALTER DATABASE <database> SET ANSI_NULLS ON ALTER DATABASE <database> SET QUOTED_IDENTIFIER ON
MS SQL 2017: 140 To apply, execute: EXEC SP_DBCMPTLEVEL <database>, 140 MS SQL 2019: 150 To apply, execute: EXEC SP_DBCMPTLEVEL <database>, 150
niku The login name can be anything, but the default schema name for the login user must be niku.
db_owner
The database user must be able to alter the Clarity -schema and otherwise own the database.
ON To apply, execute: ALTER DATABASE <database> SET READ_COMMITTED_SNAPSHOT ON
Granted to database user. To apply, execute:
GRANT VIEW SERVER STATE to niku
sp_configure 'remote query timeout',0 reconfigure with override

### Configure the Tomcat Application Server and Java

1. Keep your systems up to date with the latest patches. See your vendor documentation for more information.
2. Install the appropriate versions of the following software on each server that you plan to include in a cluster. The products that you install on a server depending on the services the server runs. Please review the Hardware and Software Compatibility Specifications for information on the specific Java and Tomcat versions supported in this release.

| Service | Required Product |
|---------|-----------------|
| Database service | Microsoft SQL |
| Clarity System Administrator service (nsa), Clarity Application (app) service | Apache Tomcat |
| Clarity Background service (bg), Beacon service | AdoptOpenJDK |


3. Some third-party library JAR files (currently, jgroups-all.jar and xinclude.jar) are shipped separately from the image. The install.jar image does not contain third-party files. Any install packages for a previous version of Clarity that are included in the install.jar also exclude the JAR files. For each release, the files are bundled into a thirdparty JAR library file. The filename uses the following format: thirdparty.libs.<release number>.jar (for example, thirdparty.libs.16.4.1.jar). To make the files available, retrieve the thirdparty.libs.<release number>.jar file from the installation media. Place the file in a location that is accessible to the installer.
> [!NOTE]
> If you place the JAR file in the installation directory, the installer does not prompt you for the location of the file. 4. Install Java. Please review the Hardware and Software Compatibility Specifications for information on the specific Java and Tomcat versions supported in this release. Navigate to the installation media that you downloaded and open the Java folder. a. On Linux, log in to the server as root and go to the cd /usr directory. Extract the OpenJDK11Ujdk_x64_linux_hotspot_x.x.x_x.tar.gz file. By default, Java is installed in /usr/ path. b. On Windows, extract the OpenJDK11U-jdk_x64_windows_hotspot_x.x.x_x file using tools such as Winzip to the Java directory on your system. 5. Set or update the environment variables (JAVA_HOME and PATH) to point to the new Java.
Configure Java Environment Variables on the Application Server Linux: To update the environment variables on Linux, edit the user (.profile) file and add or modify the following system variables:
- JAVA_HOME: Shell scripts use this variable to locate the correct Java home directory. For example:
JAVA_HOME=/<Java home directory>
export JAVA_HOME
- PATH: Locates the command-line utilities. Add the following information to the beginning of the existing PATH system variable: PATH=/<clarity home>/bin:$JAVA_HOME/bin:$PATH export PATH
Windows: To update the environment variables on Windows, open the Control Panel and add or modify the following system variables:
- JAVA_HOME Specifies the Java home directory only, and is not a path variable. Therefore, only the home directory can be present in the JAVA_HOME value. Value: <Java home directory>
> [!NOTE]
> The JAVA_HOME value cannot contain the semi-colon (;) character. If the value has a trailing backslash (\) at the end, the checkinstall script skips all scripts.
- PATH Locates the command-line utilities. Add the following information to the beginning of the existing PATH system variable: Value: <clarity home>\bin;%JAVA_HOME%\bin;%PATH

### Implement Microsoft SQL Advanced Security Encryption

Clarity supports Microsoft SQL Database Encryption. You can implement it by following the steps outlined by Microsoft.
> [!NOTE]
> Depending on the configuration of SQL Server TDE, you may or may not need to modify the JDBC driver with new parameters.
Example of URL: MSSQL with SSL and Encryption
jdbc:sqlserver://server.xyz:1433; DatabaseName=niku;


trustServerCertificate=false; encrypt=true; trustStore=c:/foo; trustStorePassword=XXX

### Run the Installation Checker (checkinstall)

Run the Installation Checker (checkinstall) on the designated server for a new installation or upgrade. Although this utility runs automatically at the start and end of installations and upgrades, you can also run it as a standalone utility to verify that your system is ready for installation.
Follow these steps:
1. Extract the Clarity installer to the Clarity application server. 2. Open a command prompt and navigate to the checkinstall directory located in the directory to which you extracted the
installer. 3. Invoke the checkinstall command: LINUX:
sh checkinstall.sh
Windows:
checkinstall.bat
> [!NOTE]
> You are asked for the Operator Username and Operator Email. This information refers to the user who is upgrading or installing and the email of the user. This information is stored as a record in the installation log. 4. When you run checkinstall.sh on Linux, an unexpected end of file error might occur. As a workaround, convert the script with dos2unix and then run it again.
dos2unix ./checkinstall.sh dos2unix: converting file ./checkinstall.sh to Unix format ...
sh ./checkinstall.sh
(Optional) You can also use the following perl script to run checkinstall:
perl -i -pe 'y|\r||d' checkinstall.sh
5. Verify the results. The results include any warnings and errors, and also indicate customizations made to the application. Review the customizations and make adjustments for the upgrade as necessary.
Watch the video to know the use of Checkinstaller Utility.
> [!TIP]
> To play this video in full-screen mode, click the YouTube logo at the bottom of the video.
The Checkinstaller Utility detects and produces a report. You can review the report, and reach out to Broadcom support if required.
The Installation Checker can help you assess a new installation or upgrade before you start the actual process. The Installation Checker runs automatically after an upgrade to validate the success or failure of the upgrade process. The utility produces a zipped report archive file that can help you plan an installation or upgrade.
When the Installation checker is invoked as a standalone utility or automatically at the end of an upgrade attempt, a zipped report archive is created. The archive contains the following files:
- precheck-results.xml and precheck-results.html.
- postcheck-results.xml and postcheck-results.html. These files are present only if the Installation Checker is invoked
through the upgrade process.
- install.log (if available).
- checkinstall.log.
- database output customization files (if present).
- admin.log from the target directory (if present).
- install.properties (if present).
- checkinstall.properties (if present).
- checkinstall-version.properties.
The archive has a timestamp encoded name (for example, checkinstall-results_2018-04-17_16-48-31.zip). The file is located in the checkinstall/check-logs directory, and if possible, the file is copied into the <target runtime dir>/logs/ checkinstall directory.
Each individual check produces one of the result codes in the following table with a diagnostic message.

INFO > [!WARNING] ERROR

Code

Description
Indicates that the check was successful and no potential problems were detected. Specific advice can be present to aid in planning the installation or upgrade.
Indicates a potential problem. Details are contained in the message. Address the problem before running the installation or upgrade.
Indicates a serious installation or upgrade problem. Details are contained in the message. The installation or upgrade process does not continue when one or more error conditions exist.

Here is a sample post-check results page: postcheck-results file.

### Run the Installation Script

If you are installing a cluster, run the installation script on each server that you plan to include in the cluster. When the installation script finishes, the installation process is not yet complete. Finish the installation tasks and configuration using the Clarity System Administration application.
> [!NOTE]
> Some key points to remember are:
1. Record the Clarity System Administration password that is created during the installation. The password is required to log in to Clarity System Administration and complete the installation.
2. During install/upgrade, you should stop all the clarity services, and there is no active database session.
> [!WARNING]
> During the Apache Tomcat installation, you are asked if you want to install Clarity System Administration locally. Enter true for the administration server only. For other servers in the cluster, enter false.
Follow these steps:
1. From the command prompt, navigate to the directory where you want to unpack the installer file, and type the following commands:
mkdir temp
cd temp


2. From the directory, run the JAR command to extract install.jar from the installation media:
jar -xvf <path of the installation media>/install.jar
3. Run the installation script using the following commands: LINUX:
chmod +x ./install.sh sh ./install.sh
Windows:
install.bat
4. To complete the command-line installation, follow the on-screen instructions. The workflow and instructions for an installation appear in a single phase at the beginning. See the following list for installation property descriptions:
- Third Parties Libraries Jar Directory Specifies the directory where the installer can find the thirdparty.libs.16.4.1.jar file when the file is not in the current directory.
- Clarity Home Directory Specifies the directory in which to install Clarity. This directory is created if it does not exist.
- Clarity Temporary Directory Specifies a temporary directory used to copy shell and node scripts during the bulk export of the status report. Clarity generates this temporary directory automatically and uses it as the default location. By default, the temporary file has read and write permissions. You can also define a new path to copy the status report scripts other than the default path. In such a case, when prompted for the location of the temporary directory under "Clarity Temporary Directory", provide the exact path to which the script should be copied.
- JDK Home Directory Please review the Hardware and Software Compatibility Specifications for information on the specific AdoptOpenJDK version supported in this release.
- Beacon Multicast Address The multicast address that the Beacon and Clarity System Administration use for service discovery. Each Clarity cluster requires a unique IP address. The multicast address must be in the Class address range between 224.0.0.0 and 239.255.255.255. Each server within a cluster must use the same address and port. Default value: 230.0.0.1 We recommend an IP address in the 239.x.x.x subnet. > [!NOTE] Generally, the multicast is disabled if you are running in a public cloud. So, it is recommended to use JDBC ping. To learn more, see CSA: Configure JDBC PING as an Alternative to Multicast.
- Beacon Multicast Port The port that the Beacon and Clarity System Administration use for service discovery. Each Clarity cluster requires a unique IP address. Each server within a cluster must use the same address and port. Default value: 9090
- Beacon Client Port Defines the server port number that the Beacon service uses. Default value: 9091
- Super User Command Prefix (UNIX only) The optional command prefix utility, such as sudo, to execute rootlevel commands. For example, you can implement a root-level command when choosing a socket port below 1024 because root-level access is required to allocate it.
- Super User Name (UNIX only) The optional replacement for the root superuser name. This name can be used alone or with the superuser command prefix. For example, if used with sudo, specify the user to which sudo rights are given here. If you are not using sudo, set this value to the user name of the user installing and running Clarity. If you are not running Clarity as root, set this value to the user name of the user who runs Clarity services.
- Install Clarity System Administration (CSA) (Apache Tomcat only) Specifies whether to install Clarity System Administration on the current server. Enter one of the following values:
- If you are installing Clarity System Administration on this server, enter true.
- Otherwise, enter false.
- Tomcat Home Directory (Apache Tomcat only) Defines the Apache Tomcat home directory.
- CSA Web Port (Apache Tomcat only) Defines the web port number that Clarity System Administration uses in a UNIX system. This value must be greater than 1024; otherwise, the service must run as root. Default value: 8090
- Enter password (Apache Tomcat only) Specifies the Clarity System Administration password. Default value: admin
- Operator User Name Specifies the user name of the operator who is running the installation script. This information is kept as a record in the installation log.
- Operator Email Address Specifies the email address of the operator who is running the installation script. This information is kept as a record in the installation log.
- Acknowledge reviewing Install Guide and Change Impact & Upgrade Guide This prompt records a response from installing users that they have read both Installing and Upgrading and Change Impact and Upgrade.

### Post-Install: Complete the Installation

These steps explain how to complete the Clarity installation in a configuration running the Apache Tomcat application server.
Follow these steps:
1. To verify that Clarity is accessible from a browser, connect using the configured Entry URL value. The Entry URL is configured in CSA on the Application subtab. If you have multiple application servers, the Entry URL points to the load balancer. If you have only one server installed, the Entry URL points to the application server. The Entry URL has the following format: http://<server name>:<port>/niku/nu The default user ID and password are admin/admin. If the default HTTP port value of 80 is used, you do not have to specify the <port> value.
2. Change your default password. 3. Install PMO Accelerator add-in that you intend to use with this release. See Add-in: PMO Accelerator . 4. Update access rights for users, groups, or OBS instances with new or updated security rights that are introduced in
this release. Click Administration, Resources and add most if not all global access rights to the admin user. See Access Rights Reference.

### Post-Install: Verify the Installation

Follow these steps:
1. Log in to Clarity System Administration (CSA). 2. View the log files in CSA for the servers in a cluster:
a. Click Servers in the left navigation pane. b. Click the server name and click Logs. c. In the Log File field, select the log file that you want to view and click Go. Limit the amount of data by selecting a
value in the Max Size field. d. (Optional) To download the file, click Download and specify a target location.
> [!WARNING]
> In Classic PPM, check the System Health Report and verify the time settings. The server time is the same (preferable, down to the nanosecond) on the Clarity application server, Clarity database server, and Data Warehouse database server. To learn more, see Health Report.
> [!NOTE]
> Continue configuring your new installation with CSA. See CSA: Clarity System Administration.

### Install the Data Warehouse

The data warehouse (abbreviated as DWH) is optimized specifically for reporting and analytics. The data warehouse is installed on a separate schema from the Clarity database schema, and is populated at scheduled intervals by the Load Data Warehouse job.
> [!TIP]
> We recommend that you set up the data warehouse before installing the Jaspersoft reporting server. The data warehouse includes data on the following Clarity items:
- Investments, ideas, projects, programs, applications, assets, other work, products, services
- Teams, tasks, financial plans, hierarchies, risks/issues/change requests, status reports (PMO Accelerator)
- Timesheets and notes, time entries and notes
- Financial transactions
- Resources
- OBS and portfolio filters The data warehouse consists of a set of dimension tables and fact tables. Dimension Tables store the following data:
- Fields by which you want to view the data.
- Major objects and subobjects in Clarity.
- Dimension and localized dimension tables Fact Tables store the following data:
- Numerical data that you view or aggregate by dimension
- Summary and period fact tables The following image shows how data is transferred from the Clarity database to the data warehouse.
> [!INFO]`r`n> Figure 23: Data_Warehouse_Architecture

The data warehouse has the following characteristics:
- The database is modeled on the STAR schema and includes the Investment, Resource, Portfolio, Timesheet, and
Project objects.
- Consistent naming conventions, formats, and encoding structures are used throughout.
- The database is nonvolatile because it is a separate schema from the Clarity database.
- Predefined time slices that can be configured are included. To learn more, please refer the following section:
- (On-Premise only) Configure the Data Warehouse Database (Microsoft SQL Server)
- (On-Premise only) Set Up a Database Link for the Data Warehouse

#### (On-Premise only) Configure the Data Warehouse Database (Microsoft SQL Server)

After you install Microsoft SQL Server (SQL Server), complete the following tasks to configure the Data Warehouse for use with Clarity:
- Set up a login for Clarity
- Import the SQL Server database backup image
- Review the Imported SQL Server Database Options

#### (On-Premise only) Set Up a Login Name

Set up a valid login name for use by Clarity. This login name and password are the values that you specify in Clarity System Administration to log in to the database. The login name and password can be any combination. Set the Microsoft SQL Server Database Schema name as niku. This name must be the Default Schema for the login user that you created in the Microsoft SQL Server.

#### (On-Premise only) Import the Data Warehouse Database Backup Image

Follow these steps: 1. In the Clarity installation media, locate the MSSQL PPM_DWH database image in the <root>/database folder. 2. Save the database backup to a temporary location on the database server. 3. Use the Restore Database tool in Microsoft SQL Server Management Studio to restore the base image. To database:
ppm_dwh From device: c:\<temporary location you saved the database image to> \dwh_mssql_base.db 4. Verify the import, and remove the temporary folder and its contents. 5. Associate the imported database with your organization's SQL server security user by running the following pl/sql as
the sa user:
USE ppm_dwh ALTER USER ppm_dwh WITH LOGIN=<your security user>
6. To grant the VIEW SERVER STATE to the <your security user> user, use the following command:
GRANT VIEW SERVER STATE to <your security user>

#### (On-Premise only) Review the Data Warehouse Imported Database Options

> [!WARNING]
> Mixed collations settings are not supported. If you change the server-level default from SQL_Latin1_General_CP1_CI_AS to another collation, create a new SQL Server instance with the correct collation SQL_Latin1_General_CP1_CI_AS before creating the Clarity database.

The import procedure creates the database with the options in the following table. Review the options to verify that they meet your requirements.

Option ARITHABORT ANSI NULLS QUOTED IDENTIFIER Compatibility level
Database Schema Name Database user roles
READ COMMITTED SNAPSHOT
VIEW_SERVER_STATE REMOTE_QUERY_TIMEOUT

Value
ON To apply, execute: ALTER DATABASE <database> SET ARITHABORT ON ALTER DATABASE <database> SET ANSI_NULLS ON ALTER DATABASE <database> SET QUOTED_IDENTIFIER ON
MS SQL 2017: 140 To apply, execute: EXEC SP_DBCMPTLEVEL <database>, 140 MS SQL 2019: 150 To apply, execute: EXEC SP_DBCMPTLEVEL <database>, 150
ppm_dwh The login name can be anything, but the default schema name for the login user must be ppm_dwh.
db_owner The database user must be able to alter the Clarity-schema and otherwise own the database. The following privileges are required: GRANT ALTER ANY LOGIN TO PPM_DWH GRANT ALTER ANY LINKED SERVER TO PPM_DWH
ON To apply, execute: ALTER DATABASE <database> SET READ_COMMITTED_SNAPSHOT ON
Granted to database user. To apply, execute: GRANT VIEW SERVER STATE to ppm_dwh
sp_configure 'remote query timeout',0 reconfigure with override

#### (On-Premise only) Set Up a Database Link for the Data Warehouse

Create a Linked Server (MSSQL) to the Clarity Schema from the Data Warehouse schema as part of the deployment. The link can be used to refer to tables and views on the remote database by appending @dblink to the table or view names. The link gives access to remote tables and views. You can use any SELECT, INSERT, UPDATE, or DELETE statement for the Data Warehouse schema to query against the Clarity schema. Database links are created to support having the Data Warehouse schema on a dedicated database server or on the same database server as the Clarity schema.
Clarity System Administration (CSA) contains options to enter the information that is related to DBLINKS for Microsoft SQL Server. The default link name is PPMDBLINK, and the name is created during the Save action on the Data Warehouse tab in CSA. The DBLINKs are currently used ONLY during the ETL job that is used to populate the Data Warehouse.
The following user privileges are required to create a database link:
MSSQL
GRANT ALTER ANY LOGIN TO PPM_DWH
GRANT ALTER ANY LINKED SERVER TO PPM_DWH


> [!NOTE]
> You can revoke the user privileges for MSSQL (ALTER ANY LOGIN TO PPM_DWH and ALTER ANY LINKED SERVER TO PPM_DWH) after you successfully create the DBLINK and run the Load Data Warehouse job. However, if you try to create a new DBLINK and run the Load Data Warehouse job after you revoke these privileges, you receive errors. To resolve the errors, grant the privileges again. Then create the new DBLINK and run the Load Data Warehouse job.
More information about DBLINK and Linked Server can be found in the documentation available on the Microsoft websites. DBLINK is a required parameter for running the Data Warehouse job from Clarity. DBLINK gets created during the SAVE action after the required information is completed on the Data Warehouse tab in CSA.
- Custom Database Link. Specifies that the database link is custom. This check box must be selected. If you created the
link from the database and not in CSA.
- Custom Database Link. Specifies the name of your custom database link. CSA gives an error if the custom database
link does not exist in the database. Common procedures can be used to create DBLINK for Microsoft SQL from Clarity. The procedures can be called directly from the Data Warehouse schema if necessary. MSSQL
CMN_DBLINK_SP @P_DB_LINK_NAME VARCHAR(30), @P_CLARITY_DB_HOST_NAME VARCHAR(30), @P_CLARITY_SCHEMA_NAME VARCHAR(30), @P_CLARITY_USER VARCHAR(30), @P_CLARITY_PASSWD VARCHAR(30)
Example: Microsoft SQL DBLINK Creation
CMN_DBLINK_SP 'PPMDBLINK','<hostname>','NIKU','NIKU','NIKU'

#### Troubleshooting the Data Warehouse Link

These steps explain how to troubleshoot if the Data Warehouse database link fails.

**MSSQL**

Follow these steps: 1. Verify that the following privileges are granted to the PPM_DWH schema:
GRANT ALTER ANY LOGIN TO PPM_DWH GRANT ALTER ANY LINKED SERVER TO PPM_DWH
2. To verify that PPMDBLINK is working, run the following query from the PPM_DWH schema:
SELECT count(1) FROM PPMDBLINK.niku.niku.srm_resources
If the link works, data is returned. > [!NOTE] What's Next?
- Configure the Data Warehouse
- Post Upgrade Steps
- Install and PMO Accelerator Add-In and PMO Sample Data

## Install Clarity With PostgreSQL


Use the following checklist to assist you with new installations:
> [!INFO]`r`n> Figure 24: This diagram shows the steps for a new installation of Clarity
- Configure a Database with PostgreSQL
- Configure the Tomcat Application Server and JavaL
- Configure Java Environment Variables on the Application Server
- Run the Installation Checker (checkinstall)
- Run the Installation Script
- Post-Install: Complete the Installation
- Post-Install: Verify the Installation
- Install the Data Warehouse
- Configure the Data Warehouse Database with PostgreSQL

### Clarity Pre Installation
- Complete the Pre-Install Steps
- Pre-Install Requirements
- Configure Clarity System Administration
- Database Backup Images for New Installations

#### Complete the Pre-Install Steps

Here is a sample pre-check results page: precheck-results file.

#### Pre-Install Requirements

1. If you are re-installing over a previous fresh install or migrating to a new server, you can backup your installation directory and database. Otherwise, skip this step and perform a new install.
2. Verify the third-party software that is supported for this release. See the Hardware and Software Compatibility Specifications page.
3. Verify that you have the required license key information to install some third-party software products. See the documentation or readme file on the installation media.
4. Verify that you have administrator rights for the servers. 5. Disable any custom database triggers, custom unique restraints, or antivirus scanners that can interfere with the
installation scripts. 6. Spaces in the PATH variable may cause difficulty on a Windows server. You can escape the entries using quotes.
Another option is to replace the entries with their short 8.3 file names. For example, to escape the spaces, change the entry ;C:\Program Files (x86)\; to ;"C:\Program Files (x86)\"; In this example, the spaces can also be avoided with the short name C:\Progra~2\:
> [!NOTE]
> It is best practice to keep clarity to a simple path like C:\Clarity. To determine short file names for a path, see the Microsoft Windows documentation. 7. Verify you can access the installation media and database images. Clarity uses a backup-based database deployment mechanism. Instead of building the database during the installation, a pre-built, fully populated database backup base image is provided on the installation media. The image contains everything that a new installation requires. a. Extract install.jar b. Navigate to install-packages\<clarityversion>\package.jar\database\backups. You will get the database images. 8. Verify that you do not install a test or development environment on the same server as a production environment. 9. As a database administrator, follow the related Database Server documentation to install the database software. Verify that the database software is operational before you configure it for Clarity.

#### Configure Clarity System Administration

During and after the installation, use Clarity System Administration (CSA) to stop, start, and monitor the services in the cluster. The Jaspersoft and database servers are unmanaged, a standard practice for most organizations.

Clarity is comprised of the server services that run on the application server. By default, all services are managed. A managed service is one that is started, stopped, and monitored from CSA using local beacon services running on each system.
Most of the services can be left unmanaged, if desired. An unmanaged service operates the same as a managed service with one difference: The CSA application cannot control or monitor an unmanaged service. The database server, the reports server, and the application server (in some instances) can be unmanaged.

The Clarity services include:
- **app**: The application service handles client requests. You can use one or more app services for each cluster. You can configure multiple instances for each server. The app service is always managed.
- **beacon**: Beacon service communicates with servers and ensures that all servers are in sync.
- **bg**: You can use one or more background services for each cluster. You can configure multiple instances for each server. You are required to manage bg services.
- **nsa**: The system administration service is always managed. You can use one nsa service for each cluster.


> [!IMPORTANT]
> To deploy a Microservice Broker, see Getting Started with the Microservice Broker.

#### Database Backup Images for New Installations

Clarity uses a backup-based database deployment mechanism. The installation media provides pre-built, fully populated database backup base images. The base images contain everything that a new installation requires. Backup images are available for the application and data warehouse databases.

### Configure a Database with PostgreSQL
- Preparing the Database
- Create Tablespaces, Schemas, and Roles

Please review the Hardware and Software Compatibility guide to check the PostgreSQL version supported by this release.

#### Preparing the Database

> [!IMPORTANT]
> Set the PostgreSQL database locale to US English when installing or setting up the PostgreSQL database.
After installing the PostgreSQL database, you can initialize it by using the following command:
/usr/pgsql-14/bin/postgresql-14-setup initdb

Next, you can enable and start the PostgreSQL service by using the following commands:

systemctl enable postgresql-14 systemctl start postgresql-14

The final step you need to perform to set up the database is to change the Host authentication from ident to md 5. This enables password-based authentication from the Clarity server to the PostgreSQL database. To update the authentication, navigate to the /var/lib/pgsql/14/data/pg_hba.conf file and change ident parameter to md5.
Original Value

host all

all

127.0.0.1/32

ident

Updated Value

host all

all

127.0.0.1/32

md5

Add one more line at the bottom of the file to enable remote connections.

host all

all

0.0.0.0/0

md5

Before

> [!NOTE]
> If you have installed Clarity and PostgreSQL on the same server, please update the following line in the pg_hba.conf file.

host all

all

::1/128

ident

After

host all

all

::1/128

md5

Modify the /var/lib/pgsql/14/data/postgresql.conf file and change the listen_addresses = 'localhost' to listen_addresses = '*'.

#### Create Tablespaces, Schemas, and Roles

After you have prepared the database, you need to create roles and tablespaces. Perform the following steps:
1. Create a directory for tablespaces. Ensure that the directory is outside the data directory. Use the following command:
mkdir <directory name>
A sample command is given below:
mkdir pgtablespace
2. Create a tablespace folder for Clarity within the tablespace folder you recently created. Use the following commands:
mkdir <folder name>
A sample command is given below:
mkdir /var/lib/pgsql/pgtablespace/clarity
3. Create Roles for the Clarity database. Use the following commands:
postgres=# create role <role name>password <'password'> login nosuperuser nocreatedb nocreaterole connection limit -1;

The sample command is given below:
postgres=# create role ppmdb password 'niku' login nosuperuser nocreatedb nocreaterole connection limit -1;

4. Create a tablespace for Clarity by using the following command
postgres=# create tablespace <tablespace name> owner <owner name> location <location>;

The sample command is given below:
postgres=# create tablespace ppmdb_data owner ppmdb location '/var/lib/pgsql/pgtablespace/clarity';

5. Create the Clarity database by using the following command
postgres=# create database <database name> owner <owner name> tablespace <tablespace name> connection limit -1;

Sample command
postgres=# create database ppmdb owner ppmdb tablespace ppmdb_data connection limit -1;
> [!NOTE]
> The role name and the database name should be the same. 6. Let's create a schema for the database we previously created. Use the following command to access the database.
-bash-4.2$ psql -d <database name>
Sample command:
-bash-4.2$ psql -d ppmdb
Now use the following command to create a schema.
create schema clarity authorization <rolename>
The sample command is given below
create schema clarity authorization ppmdb
> [!NOTE]
> When you create the schema, ensure it's always named Clarity. If you give it a different name, you will not be able to import the Clarity database. After you import the database, you need to rename the schema to match the database name and the role name. 7. Save the database dumps provided by Broadcom and then import them by using the following command.
pg_restore -U postgres -d <database name> --role <role name> --no-owner --verbose --no-tablespaces -schema "clarity" <path>
The sample commands are given below:
pg_restore -U postgres -d ppmdb --role ppmdb --no-owner --verbose --no-tablespaces --schema "clarity" / var/lib/pgsql/14/backups/postgres_base_xxx.db
8. Rename the database schema for Clarity to ensure it matches the database name and the role name. Use the following commands
-bash-4.2$ psql -d <database name>

alter schema clarity rename to <schema name>
The sample commands are given below:
-bash-4.2$ psql -d ppmdb alter schema clarity rename to ppmdb
9. You are now ready to install Clarity. To learn more about installing Clarity, see Install Clarity. 10. Log into the Clarity System Administration and populate various details. To learn more about CSA, see CSA: System
Administration. > [!NOTE] The following fields on the Database tab need to be populated when you are using PostgreSQL as the database.
- Vendor - PostgreSQL
- Hostname
- Port
- Database name
- Schema name
- Login name - Role created in PostgreSQL
- Table Tablespace and Index Tablespace - Tablespace you created in PostgreSQL > [!NOTE] You can also specify a URL instead of using the Hostname. A sample URL is jdbc:postgresql:// lvnprod019863.bpc.broadcom.net:5432/clarity1593_ppm. 11. After you configure the NSA, the status will be displayed as Unavailable. Ensure you restart the CSA by using the following command:
./service stop start nsa
12. You now need to create a loopback DB link to ensure PostgreSQL can work with stored procedures in Clarity. Navigate to the bin folder where CSA is installed and execute the following command.
./admin db create-db-link -Dtype=app -Dsysusername=postgres -Dsyspassword=xxxxx
> [!NOTE]
> The -Dsysusername can be any PostgreSQL user that has the superuser role.
> [!NOTE]
> You can use the Clarity 16.4.1 PostgreSQL.conf and Clarity 16.4.1 pg_hba.conf files to review the sample PostgreSQL database configuration. The pg_hba.conf file enables password authentication.
Some key points to note are:
- Max_connections (Depends on Memory)
- Shared_Buffers (Depends on Memory)
- Max_worker_processes (Depends on CPU/Memory)
- Max_parallel_workers_per_gather (Depends on CPU/Memory)
- effective_cache_size (Depends on Memory)
Broadcom currently uses 32 CPUs and 120GB of memory on our production servers.

### Configure the Tomcat Application Server and Java

1. Keep your systems up to date with the latest patches. See your vendor documentation for more information.
2. Install the appropriate versions of the following software on each server that you plan to include in a cluster. The products that you install on a server depending on the services the server runs. Please review the Hardware and Software Compatibility Specifications for information on the specific Java and Tomcat versions supported in this release.

| Service | Required Product |
|---------|-----------------|
| Database service | PostgreSQL |
| Clarity System Administrator service (nsa), Clarity Application (app) service | Apache Tomcat |
| Clarity Background service (bg), Beacon service | AdoptOpenJDK |

3. Some third-party library JAR files (currently, jgroups-all.jar and xinclude.jar) are shipped separately from the image. The install.jar image does not contain third-party files. Any install packages for a previous version of Clarity that are included in the install.jar also exclude the JAR files. For each release, the files are bundled into a thirdparty JAR library file. The filename uses the following format: thirdparty.libs.<release number>.jar (for example, thirdparty.libs.16.4.1.jar). To make the files available, retrieve the thirdparty.libs.<release number>.jar file from the installation media. Place the file in a location that is accessible to the installer.

> [!NOTE]
> If you place the JAR file in the installation directory, the installer does not prompt you for the location of the file.
4. Install Java. Please review the Hardware and Software Compatibility Specifications for information on the specific Java and Tomcat versions supported in this release. Navigate to the installation media that you downloaded and open the Java folder.
a. On Linux, log in to the server as root and go to the cd /usr directory. Extract the OpenJDK11Ujdk_x64_linux_hotspot_x.x.x_x.tar.gz file. By default, Java is installed in /usr/ path.
b. On Windows, extract the OpenJDK11U-jdk_x64_windows_hotspot_x.x.x_x file using tools such as Winzip to the Java directory on your system.
5. Set or update the environment variables (JAVA_HOME and PATH) to point to the new Java.

### Configure Java Environment Variables on the Application Server

**Linux:** To update the environment variables on Linux, edit the user (.profile) file and add or modify the following system variables:
- **JAVA_HOME**: Shell scripts use this variable to locate the correct Java home directory. For example:
  `JAVA_HOME=/<Java home directory>`
  `export JAVA_HOME`
- **PATH**: Locates the command-line utilities. Add the following information to the beginning of the existing PATH system variable:
  `PATH=/<clarity home>/bin:$JAVA_HOME/bin:$PATH`
  `export PATH`

**Windows:** To update the environment variables on Windows, open the Control Panel and add or modify the following system variables:
- **JAVA_HOME** - Specifies the Java home directory only, and is not a path variable. Therefore, only the home directory can be present in the JAVA_HOME value. Value: `<Java home directory>`

> [!NOTE]
> The JAVA_HOME value cannot contain the semi-colon (;) character. If the value has a trailing backslash (\) at the end, the checkinstall script skips all scripts.
- **PATH** - Locates the command-line utilities. Add the following information to the beginning of the existing PATH system variable. Value: `<clarity home>\bin;%JAVA_HOME%\bin;%PATH`

### Run the Installation Checker (checkinstall)

Run the Installation Checker (checkinstall) on the designated server for a new installation or upgrade. Although this utility runs automatically at the start and end of installations and upgrades, you can also run it as a standalone utility to verify that your system is ready for installation.
Follow these steps:
1. Extract the Clarity installer to the Clarity application server. 2. Open a command prompt and navigate to the checkinstall directory located in the directory to which you extracted the
installer. 3. Invoke the checkinstall command: LINUX:
sh checkinstall.sh
Windows:
checkinstall.bat
> [!NOTE]
> You are asked for the Operator Username and Operator Email. This information refers to the user who is upgrading or installing and the email of the user. This information is stored as a record in the installation log. 4. When you run checkinstall.sh on Linux, an unexpected end of file error might occur. As a workaround, convert the script with dos2unix and then run it again.
dos2unix ./checkinstall.sh dos2unix: converting file ./checkinstall.sh to Unix format ...
sh ./checkinstall.sh
(Optional) You can also use the following perl script to run checkinstall:
perl -i -pe 'y|\r||d' checkinstall.sh
5. Verify the results. The results include any warnings and errors, and also indicate customizations made to the application. Review the customizations and make adjustments for the upgrade as necessary.
Watch the video to know the use of Checkinstaller Utility.
> [!TIP]
> To play this video in full-screen mode, click the YouTube logo at the bottom of the video.
The Checkinstaller Utility detects and produces a report. You can review the report, and reach out to Broadcom support if required.
The Installation Checker can help you assess a new installation or upgrade before you start the actual process. The Installation Checker runs automatically after an upgrade to validate the success or failure of the upgrade process. The utility produces a zipped report archive file that can help you plan an installation or upgrade.
When the Installation checker is invoked as a standalone utility or automatically at the end of an upgrade attempt, a zipped report archive is created. The archive contains the following files:
- precheck-results.xml and precheck-results.html.
- postcheck-results.xml and postcheck-results.html. These files are present only if the Installation Checker is invoked
through the upgrade process.
- install.log (if available).
- checkinstall.log.
- database output customization files (if present).
- admin.log from the target directory (if present).
- install.properties (if present).
- checkinstall.properties (if present).
- checkinstall-version.properties.

The archive has a timestamp encoded name (for example, checkinstall-results_2018-04-17_16-48-31.zip). The file is located in the checkinstall/check-logs directory, and if possible, the file is copied into the <target runtime dir>/logs/ checkinstall directory. Each individual check produces one of the result codes in the following table with a diagnostic message.

INFO > [!WARNING] ERROR

Code

Description
Indicates that the check was successful and no potential problems were detected. Specific advice can be present to aid in planning the installation or upgrade.
Indicates a potential problem. Details are contained in the message. Address the problem before running the installation or upgrade.
Indicates a serious installation or upgrade problem. Details are contained in the message. The installation or upgrade process does not continue when one or more error conditions exist.

Here is a sample post-check results page: postcheck-results file.

### Run the Installation Script

If you are installing a cluster, run the installation script on each server that you plan to include in the cluster. When the installation script finishes, the installation process is not yet complete. Finish the installation tasks and configuration using the Clarity System Administration application.
> [!NOTE]
> Some key points to remember are:
1. Record the Clarity System Administration password that is created during the installation. The password is required to log in to Clarity System Administration and complete the installation.
2. During install/upgrade, you should stop all the clarity services, and there is no active database session.
> [!WARNING]
> During the Apache Tomcat installation, you are asked if you want to install Clarity System Administration locally. Enter true for the administration server only. For other servers in the cluster, enter false.
Follow these steps:
1. From the command prompt, navigate to the directory where you want to unpack the installer file, and type the following commands:
mkdir temp cd temp
2. From the directory, run the JAR command to extract install.jar from the installation media:
jar -xvf <path of the installation media>/install.jar
3. Run the installation script using the following commands: LINUX:
chmod +x ./install.sh sh ./install.sh
Windows:
install.bat
4. To complete the command-line installation, follow the on-screen instructions. The workflow and instructions for an installation appear in a single phase at the beginning. See the following list for installation property descriptions:
- Third Parties Libraries Jar Directory Specifies the directory where the installer can find the thirdparty.libs.16.4.1.jar file when the file is not in the current directory.
- Clarity Home Directory Specifies the directory in which to install Clarity. This directory is created if it does not exist.
- Clarity Temporary Directory Specifies a temporary directory used to copy shell and node scripts during the bulk export of the status report. Clarity generates this temporary directory automatically and uses it as the default location. By default, the temporary file has read and write permissions. You can also define a new path to copy the status report scripts other than the default path. In such a case, when prompted for the location of the temporary directory under "Clarity Temporary Directory", provide the exact path to which the script should be copied.
- JDK Home Directory Please review the Hardware and Software Compatibility Specifications for information on the specific AdoptOpenJDK version supported in this release.
- Beacon Multicast Address The multicast address that the Beacon and Clarity System Administration use for service discovery. Each Clarity cluster requires a unique IP address. The multicast address must be in the Class address range between 224.0.0.0 and 239.255.255.255. Each server within a cluster must use the same address and port. Default value: 230.0.0.1 We recommend an IP address in the 239.x.x.x subnet. > [!NOTE] Generally, the multicast is disabled if you are running in a public cloud. So, it is recommended to use JDBC ping. To learn more, see CSA: Configure JDBC PING as an Alternative to Multicast.
- Beacon Multicast Port The port that the Beacon and Clarity System Administration use for service discovery. Each Clarity cluster requires a unique IP address. Each server within a cluster must use the same address and port. Default value: 9090
- Beacon Client Port Defines the server port number that the Beacon service uses. Default value: 9091
- Super User Command Prefix (UNIX only) The optional command prefix utility, such as sudo, to execute root-
level commands. For example, you can implement a root-level command when choosing a socket port below 1024 because root-level access is required to allocate it.
- Super User Name (UNIX only) The optional replacement for the root superuser name. This name can be used alone or with the superuser command prefix. For example, if used with sudo, specify the user to which sudo rights are given here. If you are not using sudo, set this value to the user name of the user installing and running Clarity. If you are not running Clarity as root, set this value to the user name of the user who runs Clarity services.
- Install Clarity System Administration (CSA) (Apache Tomcat only) Specifies whether to install Clarity System Administration on the current server. Enter one of the following values:
- If you are installing Clarity System Administration on this server, enter true.
- Otherwise, enter false.
- Tomcat Home Directory (Apache Tomcat only) Defines the Apache Tomcat home directory.
- CSA Web Port (Apache Tomcat only) Defines the web port number that Clarity System Administration uses in a UNIX system. This value must be greater than 1024; otherwise, the service must run as root. Default value: 8090
- Enter password (Apache Tomcat only) Specifies the Clarity System Administration password. Default value: admin
- Operator User Name Specifies the user name of the operator who is running the installation script. This information is kept as a record in the installation log.
- Operator Email Address Specifies the email address of the operator who is running the installation script. This information is kept as a record in the installation log.
- Acknowledge reviewing Install Guide and Change Impact & Upgrade Guide This prompt records a response from installing users that they have read both Installing and Upgrading and Change Impact and Upgrade.

### Post-Install: Complete the Installation

These steps explain how to complete the Clarity installation in a configuration running the Apache Tomcat application server.

Follow these steps:
1. To verify that Clarity is accessible from a browser, connect using the configured Entry URL value. The Entry URL is configured in CSA on the Application subtab. If you have multiple application servers, the Entry URL points to the load balancer. If you have only one server installed, the Entry URL points to the application server. The Entry URL has the following format: http://<server name>:<port>/niku/nu The default user ID and password are admin/admin. If the default HTTP port value of 80 is used, you do not have to specify the <port> value.
2. Change your default password. 3. Install PMO Accelerator add-in that you intend to use with this release. See Add-in: PMO Accelerator . 4. Update access rights for users, groups, or OBS instances with new or updated security rights that are introduced in
this release. Click Administration, Resources and add most if not all global access rights to the admin user. See Access Rights Reference.

### Post-Install: Verify the Installation

Follow these steps:
1. Log in to Clarity System Administration (CSA). 2. View the log files in CSA for the servers in a cluster:
a. Click Servers in the left navigation pane. b. Click the server name and click Logs. c. In the Log File field, select the log file that you want to view and click Go. Limit the amount of data by selecting a
value in the Max Size field. d. (Optional) To download the file, click Download and specify a target location.
> [!WARNING]
> In Classic PPM, check the System Health Report and verify the time settings. The server time is the same (preferable, down to the nanosecond) on the Clarity application server, Clarity database server, and Data Warehouse database server. To learn more, see Health Report.
> [!NOTE]
> Continue configuring your new installation with CSA. See CSA: Clarity System Administration.
Install the Data Warehouse
The data warehouse (abbreviated as DWH) is optimized specifically for reporting and analytics. The data warehouse is installed on a separate schema from the Clarity database schema, and is populated at scheduled intervals by the Load Data Warehouse job.
> [!TIP]
> We recommend that you set up the data warehouse before installing the Jaspersoft reporting server.
The data warehouse includes data on the following Clarity items:
- Investments, ideas, projects, programs, applications, assets, other work, products, services
- Teams, tasks, financial plans, hierarchies, risks/issues/change requests, status reports (PMO Accelerator)
- Timesheets and notes, time entries and notes
- Financial transactions
- Resources
- OBS and portfolio filters The data warehouse consists of a set of dimension tables and fact tables.
Dimension Tables store the following data:
- Fields by which you want to view the data.
- Major objects and subobjects in Clarity.
- Dimension and localized dimension tables
Fact Tables store the following data:
- Numerical data that you view or aggregate by dimension
- Summary and period fact tables
The following image shows how data is transferred from the Clarity database to the data warehouse.
> [!INFO]`r`n> Figure 25: Data_Warehouse_Architecture


The data warehouse has the following characteristics:
- The database is modeled on the STAR schema and includes the Investment, Resource, Portfolio, Timesheet, and
Project objects.
- Consistent naming conventions, formats, and encoding structures are used throughout.
- The database is nonvolatile because it is a separate schema from the Clarity database.
- Predefined time slices that can be configured are included.

#### Configure the Data Warehouse Database with PostgreSQL

After you have installed Clarity, you need to create roles and tablespaces.

#### Create Tablespaces, Schemas, and Roles (Data Warehouse)

Perform the following steps:

1. Create a directory for tablespaces. Ensure that the directory is outside the data directory. Use the following command:
`mkdir <directory name>`
A sample command is given below:
`mkdir pgtablespace`

2. Create a tablespace folder for Clarity within the tablespace folder you recently created. Use the following commands:
`mkdir <folder name>`
A sample command is given below:
`mkdir /var/lib/pgsql/pgtablespace/clarity_dwh`
3. Create Roles for the Datawarehouse database. Use the following commands:
postgres=# create role <role name>password <'password'> login nosuperuser nocreatedb nocreaterole connection limit -1;

The sample command is given below:
postgres=# create role dwhdb password 'niku' login nosuperuser nocreatedb nocreaterole connection limit -1;

4. Create a tablespace for the DataWarehouse by using the following command
postgres=# create tablespace <tablespace name> owner <owner name> location <location>

The sample command is given below:
postgres=# create tablespace dwhdb_data owner dwhdb location '/var/lib/pgsql/pgtablespace/clarity_dwh'

5. Create the Clarity database by using the following command
postgres=# create database <database name> owner <owner name> tablespace <tablespace name> connection limit -1

Sample command
postgres=# create database dwhdb owner dwhdb tablespace dwhdb_data connection limit -1;
> [!NOTE]
> The role name and the database name should be the same. 6. Let's create a schema for the database we previously created. Use the following command to access the database.
-bash-4.2$ psql -d <database name>
Sample command:
-bash-4.2$ psql -d dwhdb
Now use the following command to create a schema.
create schema ppm_dwh authorization <rolename>
The sample command is given below
create schema ppm_dwh authorization dwhdb
> [!NOTE]
> When you create the schema, ensure it's always named Clarity. If you give it a different name, you will not be able to import the Clarity database. After you import the database, you need to rename the schema to match the database name and the role name. 7. Save the database dumps provided by Broadcom and then import them by using the following command.
pg_restore -U postgres -d <database name> --role <role name> --no-owner --verbose --no-tablespaces -schema "ppm_dwh" <path>
The sample commands are given below:
pg_restore -U postgres -d dwhdb --role dwhdb --no-owner --verbose --no-tablespaces --schema "ppm_dwh" / var/lib/pgsql/14/backups/dwh_postgres_base_xxx.db
8. Rename the database schema for Clarity to ensure it matches the database name and the role name. Use the following commands
-bash-4.2$ psql -d <database name> alter schema ppm_dwh rename to <role name>
The sample commands are given below:
-bash-4.2$ psql -d dwhdb alter schema ppm_dwh rename to dwhdb
9. Create a foreign data wrapper to create a DB link. Use the following commands:
-bash-4.2$ psql -d <database name>
create extension postgres_fdw

grant usage on foreign data wrapper postgres_fdw to <role name>
The sample commands are given below:
-bash-4.2$ psql -d dwhdb
create extension postgres_fdw;
grant usage on foreign data wrapper postgres_fdw to dwhdb
10. You are now ready to review some key prerequisites for installing the DataWarehouse. To learn more about installing the Datawarehouse, see Review PreRequisites.
11. After you install the DataWarehouse, log into the Clarity System Administration and populate various details. To learn more about CSA, see CSA: System Administration. > [!NOTE] The DWH schema name option is not available in the CSA. You need to modify the properties.xml and update the schema name for DWH database.
12. After you configure the NSA, the status will be displayed as Unavailable. Ensure you restart the CSA by using the following command:
./service stop start nsa
13. You now need to create a loopback DB link to ensure PostgreSQL can work with stored procedures in Clarity. Navigate to the bin folder where CSA is installed and execute the following command.
./admin db create-db-link
NOTE
What's Next?
- Configure the Data Warehouse
- Post Upgrade Steps
- Install and PMO Accelerator Add-In and PMO Sample Data
Set Up the Data Warehouse
After you install the database, complete the following tasks to set up the Data Warehouse for use with Classic PPM:
- (SaaS and On-Premise) Review the Prerequisites
- (SaaS and On-Premise) Set the Language and Fiscal Periods for the Data Warehouse
- (SaaS and On-Premise) Configure the Data Warehouse Server Credentials
- (SaaS and On-Premise) Populate the Data Warehouse with Data
- (On-Premise only) Monitor the Data Warehouse Job
- (On-Premise only) Rebuild the Data Warehouse
(SaaS and On-Premise) Review the Prerequisites
Review the following information before you set up the Data Warehouse:
- Determine whether you want to install the Data Warehouse on a separate physical server or as a separate instance on the same server. Where you install the Data Warehouse depends on your business needs.
- Verify that the server times that are set for the Clarity app server, product database server, and Data Warehouse database server are all in synch.
- Only standard Clarity objects and attributes are automatically populated in the Data Warehouse by default.
- The following attribute types are supported: Boolean, String, Large String, Number, Money, Date, Calculated, Formula,
Lookup, Multivalued Lookup, URL, and Time-Varying.
- For any custom objects and custom attributes that you want to include in the Data Warehouse, follow these steps:
a. Open Administration and from Studio, click Objects.

b. To include a custom object, click the name, select the Include in the Data Warehouse check box, and click Save. c. To include custom attributes for an object, complete the following steps:
a. Click the Attributes tab. b. Select the custom attributes that you want to include. You can identify custom attributes by a check box in the
left column of the attributes list. c. Click Include in Data Warehouse. d. Save your changes.
> [!NOTE]
> Also look for custom attributes on standard Clarity objects.
- Time slices with the Data Warehouse option selected determine the ranges for the Data Warehouse facts. The default ranges are:
- Three years back and forward for Months
- One year back and forward for Weeks
- One year back and forward for Daily
- Three years back and forward for Fiscal Verify that the ranges work for your business needs. If necessary, you can update the From Date and Number of Periods by opening a time slice and making the changes on the properties page. All Monthly time slices should have the same From Date and Number of Periods. The same is true for Weekly, Daily, Fiscal, and so on.
- To help ensure the correct functionality and accuracy of data in Clarity and all jobs, including the Load Data Warehouse Job, verify the following:
- The server time is the same (preferable, down to the second) on the Clarity application server, Clarity database server, and Data Warehouse database server.
- The timezone, date, and time is the same on the Clarity application server and database servers in the same environment. Do not have any differences.
This synchronization is necessary because the Load Data Warehouse job imports data into the Data Warehouse database based on the last_updated_date field on the object's instances. If the date and time on the servers do not match, data may not be loaded into the Data Warehouse. For other jobs, if the date and time do not match, the job may not start. Or, the job may start later than expected, leading to inaccurate data.
(SaaS and On-Premise) Set the Language and Fiscal Periods for the Data Warehouse
To set the languages and the entity for fiscal periods for the Data Warehouse, use the System Options page in Classic PPM.
> [!WARNING]
> Modifying the fields that are described in the following procedure, requires you to run the Load Data Warehouse job with the option Full Load selected. Changes to the field Entity for Fiscal Periods result in a resource-intensive operation because all fiscal fields within the Data Warehouse are recalculated.
Follow these steps:
1. Open Administration and from General Settings, click System Options. 2. In the Data Warehouse Options section, complete the following fields:
- Languages Specifies the language localizations that are included in the Data Warehouse. Multiple languages result in increased storage requirements on the Data Warehouse server.
- Entity for Fiscal Periods Specifies the entity that is used to determine fiscal periods. The fiscal periods that are associated with the selected entity are used for all Data Warehouse fiscal period data calculations. Setting the entity for the first time creates new Data Warehouse time slice requests. Therefore, the initial run of the Time Slicing job takes significantly longer than normal. Initially setting an entity or updating it also updates the fiscal entity and fiscal period type for the Data Warehouse fiscal time slice requests. Do not set or change the entity when a time slice rollover is in progress. If you do, an error message appears. Wait until the rollover completes and then set the

entity. To determine which slices requests are in the rollover, check the expiration date on the time slices. A slice request with an expiration date that is blank, earlier than the current date, or the same as the current date is in the rollover. Allow the slice request to complete processing before setting the entity.
> [!NOTE]
> The entity must have Monthly (or 13 period) fiscal time periods set up to cover the time range of the time slice requests. Otherwise, the time slice requests are ignored when the Time Slicing job runs. 3. Save your changes. (SaaS and On-Premise) Configure the Data Warehouse Server Credentials The Data Warehouse schema can be on the same physical server as the Clarity database as a separate instance. The Data Warehouse schema can also be on a different physical server depending on the size of the Clarity database. > [!WARNING] The HTTP and HTTPS Entry URL fields completed for the Clarity server in Clarity System Administration (CSA) cannot be localhost when Jaspersoft is integrated with Clarity. When you use Jaspersoft, the URLs must be explicitly entered on the Application subtab of the Properties tab for the Clarity server. For example: HTTP Entry URL: http://<server name>:<port> HTTPS Entry URL: https://<server name>:<port> Follow these steps: 1. Open the Clarity System Administration application using the following URL: http://<hostname>:8090 Note: If you specified a Clarity System Administration port number other than the one indicated, use that value instead in the URL. 2. Log in using the password that you created during the initial installation. 3. In the left navigation panel, click Servers and click the name of the server. 4. On the Properties tab, click the Data Warehouse subtab and complete the fields necessary for your configuration.
- Vendor Specifies the Database system: Oracle (default) or Microsoft SQL Server.
- Sys Password Specifies the system password for this database server. For Oracle 11g only this password is used
to start and stop the database. The password is required only if the database is managed as a Clarity service.
- Dimension Table Tablespace Used during the schema installation to select a specific tablespace for dimension
tables for the Data Warehouse schema. The default is DWH_PPM_DATA_DIM.
- Fact Table Tablespace Used during the schema installation to select a specific tablespace for fact tables for the
Data Warehouse schema. The default is DWH_PPM_DATA_FACT.
- Dimension Index Tablespace Used during the schema installation to select a specific tablespace for dimension
indices for the Data Warehouse schema. The default is DWH_PPM_INDX_DIM.
- Fact Index Tablespace Used during the schema installation to select a specific tablespace for fact indices for the
Data Warehouse schema. The default is DWH_PPM_INDX_FACT.
- Fetch Size Specifies a hint for the JDBC driver as to the number of rows to be fetched from the database when
more rows are needed. The number of rows that are specified affects only result sets created using this statement. If the value specified is zero, then the hint is ignored.
- Status Indicates whether the Data Warehouse server is available.
- Specify URL Specifies a different JDBC url than the default. Required when an Oracle RAC is being used.
- Hostname The IP address or hostname of the database server.
- JDBC URL If Specify URL is selected, the JDBC URL to access the database displays. This information is primarily useful for connecting to an Oracle RAC cluster.
- Instance Name (Microsoft SQL Server only) Specifies the name of the Microsoft SQL Server instance when it is not the default instance.
- Port Specifies the port that is used for database traffic. Default value: 1521 (Oracle) or 1433 (Microsoft SQL Server).
- Database Name (Microsoft SQL Server) Specifies the name of the Microsoft SQL Server database.
- Service ID (Oracle only) Specifies the name of the Oracle database Service ID.
- Service Name Specifies the name of the Oracle database service (Oracle) or the ODBC connection name (Microsoft SQL Server).
- Login Name Specifies the schema login name.
- Password Specifies the schema login password.
- Custom Database Link Specifies whether the database link is the default (ppmdblink) or a custom database link. To indicate a custom link, select the check box.
- Clarity Database Link Specifies the name of a custom database link.
- ETL Job Timeout Specifies the length of time before an ETL job stops when it has not completed. The default setting is 600 minutes. 5. Save your changes.
(SaaS and On-Premise) Populate the Data Warehouse with Data
To populate the Data Warehouse with data from the Clarity database, run the following jobs in the order provided:
- Time Slicing This job splits time varying data into a relational format.
> [!NOTE]
> The first run of this job can take substantial time.
- Load Data Warehouse This job extracts the data from the Clarity database, transforms the data, and loads the data into the Data Warehouse. This job is initially disabled. Enable this job before you run it. Before you run this job, open the properties for any custom object or attribute that you want to include and select the Include in the Data Warehouse option. This option must be selected for custom objects or attributes to be populated in the Data Warehouse. Note: Verify that the DBLINK was created correctly. The Load Data Warehouse job fails if the DBLINK is not valid.

> [!WARNING]
> If you are running this job for the first time to populate the Data Warehouse, select the Full Load parameter. Also, if you had a failed run of the Load Data Warehouse job and you corrected the problem, select Full Load the first time that you run this job after the failure. For subsequent runs, you can run an incremental load by leaving the Full Load parameter unselected.
> [!WARNING]
> The following actions require you to rerun the Load Data Warehouse job after the initial population:
- Deleting an attribute or clearing the Include in the Data Warehouse option for the attribute in Studio.
- Changing the data type of an attribute.
- Adding a language to the Data Warehouse.
- Changing a timeslice date to include a larger timeframe.
- Changing a system setting. A Full Load of the Data Warehouse is required.
For example, if you change the system Risk Threshold in Administration, Risk Settings, execute the Full Load of the Data Warehouse. Otherwise, a mismatch occurs between the transactional database tables and Data Warehouse tables, which results in a data mismatch.
- Instantaneous Sync: Provides near real-time synchronization of the Data Warehouse with changes made in Clarity.
- Enable the Enable Instantaneous Sync checkbox in Administration > System Options > Data Warehouse Options. The option is off by default.
- Run a Full Load at least once to initialize metadata tables before relying on Instantaneous Sync. Ensure the DBLINK between Clarity and the Data Warehouse schema is configured.
- Most updates are processed automatically by Background Services (BG). The PPM Broker service is not required.
- SQL Curve tables are updated in near real time. Fact tables are not updated and still require the Load Data Warehouse job.
- Supported databases: Oracle, PostgreSQL, and MSSQL.
- Covers:
- Object instance CRUD operations
- Schema inclusion/exclusion with historical backfill for newly enabled attributes
- XOG/REST updates for Projects and related data (Tasks, Team, Assignments, Risks, Issues, Changes)
- Ideas, Custom Investment Types (CITs), NPIOs, Cost Plan XOG, and Benefit Plan XOG
- Timesheets (Clarity)
- Updates from Time Slicing and Time Slicing Sync jobs (TSV/per-period metrics, resource availability, and usage) when SQL Curves are enabled
- Limitations:
- Does not update lookup definitions (for example, renaming a static lookup value). Instance-level values are synced, but an incremental load is required to refresh definitions.
- Does not update fact tables, fiscal time periods, time reporting periods, baselines, scalars/metrics, OBS creation, or security data.
- Excludes certain attributes with inconsistent metadata (for example, Banner Color) and updates made through GEL scripts or direct XOG database updates.
- Load Data Warehouse Access Rights This job loads the access privileges for resources and investments from the Clarity database to the Data Warehouse. This job is initially disabled. Enable this job before you run it.
> [!NOTE]
> When the Load Data Warehouse Access Rights and Load Data Warehouse jobs run, the jobs write standard messages to the Jobs logs and detailed messages to the Data Warehouse logs. The default Data Warehouse log files are bg-dwh.log and bg-ca.log. To review the detailed Data Warehouse log messages, navigate to the Data Warehouse logs (under the standard Jobs logs) in CSA. You can enable more logging by changing the Kettle Log Level in CSA (Logs, Edit Configuration). Use the detailed messages to monitor job progress and to analyze Data Warehouse load failures.

Data Warehouse Enable Plan Actuals Toggle for Financial Period Plan Facts The Enable Plan Actuals toggle feature helps to improve Clarity performance. Enable Plan Actuals is added to Load Data Warehouse to address the following issues: 1. The loading of the data warehouse is slow, both incrementally and fully. 2. The Financial Period Plan Facts tables contain errors.
For example: ERROR: ENCOUNTERED EXCEPTION WHILE INSERTING FROM DWH_X_PLAN_ACT_PER_FACTS. The duplicate key value violates unique constraint "dwh_x_plan_act_per_facts_u3" 3. The table DWH_X_PLAN_ACT_PER_FACTS is hung or locked/bloated.
If you need to toggle ON the Enable Plan Actuals feature, execute the following query:
update dwh_settings set enable_plan_actuals = 1;
If you need to toggle OFF the Enable Plan Actuals feature and use the fiscal time slice instead, execute the following query:
update dwh_settings set enable_plan_actuals = 0;
> [!IMPORTANT]
> Oracle and Postgres support the Enable Plan Actuals toggle. However, MS SQL does not support this feature. See support KB article - Data Warehouse Enable Plan Actuals Toggle for Financial Period Plan Facts for more information.
(On-Premise only) Monitor the Data Warehouse Job You can monitor the status of the Load Data Warehouse job using the following database view, which is available in the Classic PPM Data Warehouse schema:
SELECT TABLE_NAME, TABLE_TYPE, COMPLETED_FLAG, POPULATION_TIME_SEC, DW_LOAD_START_DATE, DW_LOAD_END_DATE FROM DWH_RUN_STATUS_V
If the Completed_Flag is equal to 1, the load is complete. If the Completed_Flag is equal to 0, the load is not complete yet. The following database view helps you monitor the status of the last load run. This view also provides information about the number of rows that were brought into the Data Warehouse schema and the load time for each table.
SELECT TABLE_NAME, RECORD_COUNT, POPULATION_TIME_SEC FROM DWH_GATHER_METRICS_V WHERE TABLE_NAME NOT IN
('DWH_CFG_LOG','DWH_CFG_TABLE_AUDIT','DWH_FK_PK_EXCEPTIONS','DWH_META_COLUMNS','DWH_META_INDEXES','DWH_META_TABLES') ORDER BY TABLE_NAME
(On-Premise only) Rebuild the Data Warehouse If the Load Data Warehouse job fails, the configuration might be corrupt. You might have to rebuild the data warehouse database. 1. To verify that the application and data warehouse databases match, run the following queries:
select * from cmn_install_history order by installed_date desc select * from cmn_dwh_install_history order by installed_date desc
2. Missing views or tables can also result in a mismatch between the application and data warehouse metadata. To verify the schema, run the following queries:

select a.dwh_table_name, a.dwh_column_name, a.attr_type, a.attr_data_type, a.attr_data_size, a.is_deleted, a.js_processed from DWH_META_COLUMNS a order by 1,2
select b.dwh_table, b.dwh_column, b.attribute_type, b.attribute_data_type from DWH_META_COLUMNS b order by 1,2
3. To rebuild the DWH schema, schedule the following steps: a. Locate the default initial database file: dwh_oracle_base.db: import using the Oracle datapump utility dwh_mssql_base.db: restore using MS SQL Server Management Studio b. Run the following command on the Classic PPM application server to have it match the version PPM:
admin db dwh-upgrade -Dupgrade.phase=maintenance
Post Upgrade Steps
Perform the following steps after a new installation or upgrade to Clarity.
- Install Add-ins and Connectors
- Verify Upgraded Users Can Access the Necessary Reports
- Jaspersoft Sender Email Address
- Enable or Disable Features
- Review and Update Access Rights
- Clear Your Browser Cache
- Update Client Applications
- Run or Schedule the Required Jobs
- Data Warehouse Required
- Access Optional Integrated GEL Scripts
- Run a Health Report
- Conduct Your Own UAT and Regression Testing
Install Add-ins and Connectors The PMO Accelerator is required. Your organization can extend the product with optional add-ins and connectors.
- To install PMO, run the command:
admin content csk
- After the installation completes, in Classic PPM, navigate to Administration, Studio, Content Add-Ins to review the content that has to be applied. > [!IMPORTANT] If you don't apply the Views, then Clarity resets to default.
- Once the system is up, you can add other add-ins and connectors. The Release Notes provide the supported add-in versions that are compatible with new installations or upgrades to each release.


Verify Upgraded Users Can Access the Necessary Reports No action is required; however, verify user access to the necessary reports.


Jaspersoft Sender Email Address
The sender email address is the address that appears when JasperSoft sends an email notification for a scheduled report. JasperSoft lets you set the sender email address at the JasperSoft Reporting Server (JRS) level, but not at the tenant (organization) level.
- SaaS Environments: The following address is the default sender email address value for the JasperSoft reporting server for Clarity SaaS implementations:
do-not-reply-ondemand@saas.broadcom.com
- On-Premise Environments: The following address is the default sender email address value for the JasperSoft reporting server for on-premise implementations:
do-not-reply@your_domain.com

(On-Premise only) For information about changing this default value during installation, see Installing. (On-Premise only) To change the default value after installation, perform the following steps: a. Locate and open the js.quartz.properties file in a text editor. b. Edit the report.scheduler.mail.sender.from property to include your sender email address and save the
file. c. Restart the JRS.

Enable or Disable Features
- In Classic PPM, configure portlets and portlet pages as appropriate to expose or hide the features your organization would like to use.
- In Clarity, configure blueprints and access rights to provide users with the appropriate sections, fields, visuals, modules, and permissions to access application pages and functionality.

Review and Update Access Rights
Update the access right assignments for users, groups, objects, and OBS instances with new or updated access rights that are introduced in each release. See Clarity Access Rights Reference.
- New Installations: By default, all new users in a typical setup of Clarity with timesheets are granted the following minimal set of access rights: Resource - Enter Time Resource - Self (Auto) User Favorites Menu - Edit They are also members of a group named Basic group for user access, which we recommend you populate with at least the following three (3) default global access rights to get all users started:
- Account Settings - Navigate
- Organizer - Access
- Projects - Navigate
- Upgrades: The application preserves all the access right assignments from the previous release.
Clear Your Browser Cache
After an upgrade or after changing their access rights, users could encounter a blank page until they clear their browser cache, cookies, and history files. The steps vary by web browser. If you see different results in Google Chrome incognito mode, that generally indicates you can clear your browser cache to achieve the same results for the user in normal mode.
- Be careful not to clear passwords or other sensitive data if you normally store this data in your browser
- Also try logging out and then logging back in again to reset your permissions.


Update Client Applications
- Advise XOG users to install the newest version of the XOG client.
- If your users run the Schedule Connect clients, Microsoft Project (MSP) or Open Workbench (OWB), each user needs
to verify their version of MSP or OWB with the specified minimum supported client software in the release notes. Do not automatically update MSP or OWB. Sometimes the newest version is not compatible.
- If necessary, install or update the JRE available from Oracle.
Run or Schedule the Required Jobs Run the required jobs as listed in Jobs Reference. Resume any scheduled jobs that you paused before your upgrade. For any new jobs, review and schedule them accordingly. At minimum, repopulate the required datamart tables:
- Datamart Extraction job
- Datamart Rollup job (On-Premise only) Run the Oracle Table Analyze job after the upgrade is done to gather schema statistics. The expected time for this job to complete depends on the size of your database. We recommend that you run this job right after the upgrade and at off-peak hours thereafter. If you use a custom statistics job, refer to the updated Oracle Table Analyze Job procedure in the Clarity schema in Release 15.x (CMN_JOB_ANALYZE_SP) and make necessary corrections in the custom statistics job.
Data Warehouse Required Installation of the Clarity data warehouse is required.
- SaaS environments already include this integrated system component.
- As an on-premise administrator, if you have not already done this step, deploy the data warehouse.
- After the upgrade is completed, run the Load Data Warehouse job and use the "full load" option.
You can configure it for reporting, lookup queries, and trending, or even decide not to use it. However, it must be installed and working in all environments, on-premise and SaaS.
Access Optional Integrated GEL Scripts This item typically applies after a SaaS upgrade; however, on-premise customers can also review this item if they have similar GEL integrations in place. If you have developed integrations that leverage a shared directory that can be called in GEL scripts, the following required code illustrates the proper GEL syntax to use with the integration location:
GelParams: <gel:parameter var="ShareFolder" default="/fs0/clarity1/share"/>
The ShareFolder parameter is the same folder that is accessed through your SFTP account associated with your environment folder. You can create optional subdirectories in the GEL parameter. When using GEL with the XML Open Gateway (XOG) using the <soap:invoke> tag, instead of hard-coding the endpoint to a specific host URL, you may specify <soap:invoke endpoint="internal"> to allow GEL to automatically determine the correct SOAP URL for the local environment. This convention prevents situations where a database restored from production into a non-production environment has XOG URLs that still specify the production environment. For any GEL scripts where the NIKU_HOME variable is hard-coded, use the following syntax to dynamically retrieve this information:


Clarity - 16.4.1 <core:invokeStatic className="java.lang.System" method="getenv" var="NIKU_HOME"> <core:arg value="NIKU_HOME"/> </core:invokeStatic> <gel:parse file="${NIKU_HOME}/config/properties.xml" var="properties"/>
Run a Health Report All supported releases of Clarity include a new System Health Report. Run the System Health Report. Conduct Your Own UAT and Regression Testing Once an upgraded non-production environment has been provided by your SaaS or on-premise upgrade team, familiarize yourself with the new features, test any expected bug fixes, and complete your unit, regression, and user acceptance testing. Your testing should cover the following:
- Testing scripts developed during your initial implementation
- Applicable bug fixes
- New functionality you plan to deploy
- Custom reports
- Data integrations
- Custom Processes with GEL scripting
- Custom Portlets with NSQL data providers
- Add-In packages and related configurations
- Global Delivery (GD) components
> [!TIP]
> Complete your post-upgrade review and testing within 45 to 60 days, if not sooner. If your testing exceeds 90 days, due to new releases, service packs, and patches, we recommend that you validate a new upgrade against new production data. If testing reveals any issues, questions, or concerns about the delivered environment, open a new ticket specific to each issue to ensure the appropriate attention and expertise are applied in a timely manner. Do not update the original upgrade ticket with post-upgrade issues.
