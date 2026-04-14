---
title: SSL Configuration
tags:
  - admin
  - howto
  - onprem
aliases:
  - SSL
  - Secure Sockets Layer
  - HTTPS Configuration
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# SSL Configuration

## Overview

Use Clarity System Administration (CSA) to manage security, set database server passwords, enable SSL, integrate with LDAP servers, configure SSO, and manage external URLs. These settings are for on-premise deployments only.

**Topics covered:**
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

## Enable File Scanning of Documents

To enable virus scanning of uploaded documents in Classic PPM:
1. Log in to Classic PPM.
2. Open Administration, and from General Settings, click System Options.
3. In the Document Manager Options section, select the Enable File Scanning of Documents check box.
4. Save the changes.

## Manage Database Server Passwords

Use a server password to secure each server. If the server is in a cluster, the server password does not grant access to other servers in the cluster. To minimize the risk of unauthorized access, periodically change the password on each server.

1. Change the password for the database server. See your third-party database documentation for more information.
2. Change the password for CSA.
3. Restart the services after you change the database server password.

## Encrypt Server Passwords

To protect a server password file, you can encrypt it. You can enable AES encryption of server passwords through the `properties.xml` file.

This encryption method requires that you use a separate password (key) when encrypting the passwords in `properties.xml`. Keep this unencrypted key secure.

The advantage of server-side encryption is that you only have to secure one key, which is stored in a file accessible by the server. The key is only required at server startup.

After Classic PPM is running, you can further secure the key file with another layer of encryption. If the file resides on removable storage, you can detach and lock the file in a safe.

When you enable the server password encryption, any clear-text passwords in `properties.xml` are encrypted the next time Classic PPM accesses the file.

If you enable encryption and edit `properties.xml` directly, you can enter passwords in clear text. The next time the file is accessed (for example, when a service is deployed or started), the clear-text passwords are encrypted.

To encrypt server passwords, create a valid key file that is accessible to the server and contains the properties file. Each server must have access to either the key file (over the network) or a copy of it (on the server local disk).

Follow these steps:
1. Log in to CSA.
2. Click Home, Servers.
3. Click the name of the server.
4. Click the Security tab.
5. Choose one option and click Save:
   - **Using System Key:** Uses a hard-coded key that ships with the product. This is the less secure option. If the key for one Clarity installation becomes known, the key for all installations is known. This option discourages casual observers, but an intruder who has already gained access to server files can probably decrypt the passwords.
   - **Using Custom Key File:** Enter the full path and file name to your custom key file in the Key File field. This option requires that you create a key file and make it accessible to all servers running Classic PPM. The key file is properly secured so an intruder would face the practically impossible task of decrypting the passwords without a key.

> [!warning]
> If you encrypt passwords with a custom key file, do not then change the custom key file. Changing the key file makes your passwords inaccessible (they cannot be decrypted). In this case, you must re-enter all passwords.

## Change Database Server Passwords

Follow these steps:
1. Change your database server password on the database. See your third-party database documentation for more information.
2. Change the database server password in CSA to the new password.
3. Stop the Clarity Application (app) and Clarity Background (bg) services:
   a. Click Home, All Services.
   b. Select the check boxes next to Clarity Application and Clarity Background, and click Stop.
4. Click Home, Servers.
5. Click Properties and then click the Database tab.
6. In the Internal Connection: Niku section, complete the following fields:
   - **Password:** Enter the new password.
   - **Confirm Password:** Enter the password again.
7. Click Save.
8. Restart the Clarity Background (bg) and Clarity Application (app) services:
   a. Click Home, All Services.
   b. Select the check boxes next to Clarity Background (bg) and Clarity Application (app), and click Start.

## Configure Secure Sockets Layer (SSL) on Apache Tomcat

SSL is a protocol for transmitting data between nodes. The protocol uses a cryptographic method to protect data from unauthorized access, based on two keys: a public key that is known to everyone and a private (secret) key that is known only to the message recipient.

**Before you begin, note the following:**
- Because the steps in this section refer to third-party components, support is limited.
- Decide where you are going to install SSL. For example, to improve performance, use another server and not the application server.
- The Java keytool command represents one popular way of creating and managing SSL certificates. Other tools and commands are available.
- The listed steps apply to many, but not all environments. Some environments may require different steps, particularly if you use self-signed certificates.
- Follow the instructions from your SSL certificate vendor instead of relying solely on the steps on this page.
- For testing purposes, use the private key that is included with Classic PPM.

> [!tip]
> When HTTP is used with SSL, it is referred to as HTTPS. When SSL is enabled on the application service, all data moving between client applications (such as a web browser or Open Workbench) is encrypted before it is sent and decrypted before it is received.

The steps on this page apply only when you first install Classic PPM, or when installing a renewed certificate when an old one expires.

### Generate a Public and Private Key Pair

Use the keytool Java command to generate a public and private key pair, and to create a certificate signing request (CSR).

> [!note]
> The steps below provide only the required Java parameters. For complete information about all parameters for the Java commands, see the Oracle documentation website.

Before you place a system into production, create a keystore file for your private key and distribute it to all application servers.

Follow these steps:
1. On the Classic PPM application server, open a command prompt and generate a public and private key pair:
   ```
   keytool -genkey -keystore /<Clarity Home Directory>/config/.keystore -keyalg RSA -storepass keystore
   ```
2. Define the following values:
   - `-genkey`: Generates a keystore if one does not exist. The keystore contains the public and dummy public key.
   - `keystore`: Specifies the path and filename of the keystore file. By default, the keystore is named `.keystore` and is located in the `/<Clarity Home Directory>/config/` directory.
   - `keyalg`: Specifies the algorithm that you use when generating the key pair (RSA in this example).
   - `storepass`: The password used to protect the keystore (must be at least six characters).
3. When prompted, enter the appropriate information about your organization.
4. Press Enter when prompted to enter the key password. The key password and the keystore password must be the same.

> [!note]
> For a self-signed certificate, export the .cer file from the private key you have generated and skip the next procedure. A CSR is not required for a self-signed certificate. To export the file, use the following command:
> ```
> keytool -export -file <file_name.cer> -keystore <ClarityHome/config/.keystore> -storepass keystore
> ```

### Create a Certificate Signing Request (CSR)

For production systems, replace the test certificate with a real, certified certificate. To obtain a certified certificate, create a CSR and send it to a certificate authority. The certificate authority generates a real certificate that authenticates your public key.

Always follow instructions from your SSL provider. Specific commands are often required to install root or intermediate certificates.

Follow these steps:
1. On the Classic PPM application server, open a command prompt and issue the following command:
   ```
   keytool -certreq -keystore /<Clarity Home Directory>/config/.keystore -keyalg RSA -file ca_ppm.csr
   ```
2. When prompted for a password, enter the default password (keystore).
3. Define the following values:
   - `-certreq`: Generates a certificate signing request (CSR).
   - `keystore`: Specifies the path and filename of the keystore file.
   - `keyalg`: Specifies the algorithm (RSA).
   - `file`: Specifies the name of the generated certificate request file (`ca_ppm.csr`).
4. In a web browser, open your certificate authority website and provide the contents of the CSR file you generated, using the process that your certificate authority specifies.
5. Copy the new certificate (for example, `ca_ppm.cer`) provided by your SSL provider to the Classic PPM application server.

> [!note]
> Your private key remains unaffected. Backup the keystore file by copying it to another volume while you wait for the real certificate. Do not modify the keystore file while waiting. Any changes can cause problems when you import the real certificate. If you cannot import the real certificate, you can start over with the backup copy.

### Install Certificates

If you have received a certificate from your SSL vendor, import the reply from the certificate authority and replace your self-signed certificate with a chain of certificates.

Use these steps to create a keystore file containing your private key paired with the signed certificate from your certificate authority.

Follow these steps:
1. On the Classic PPM application server, open a command prompt and issue the following command:
   ```
   keytool -import -keystore /<Clarity Home Directory>/config/.keystore -keyalg RSA -file Clarity-Source.cer -trustcacerts
   ```

> [!note]
> You may be required to import your certificate authority root/intermediate certificate into your keystore file before importing your certificate. See your certificate authority documentation for more information.

2. Enter the keystore password and press Enter.
3. Enter yes.

### Distribute the Keystore File to Application Servers

If you have more than one server with application services, distribute the keystore to all servers.

Follow these steps:
1. Log in to CSA.
2. Stop all services:
   a. Click Home, All Services.
   b. Select all the services and click Stop.
3. Click Distribute, Distribute All.
4. Check the box next to all servers and click Distribute.
5. Restart all services:
   a. Click Home, All Services.
   b. Select all the services and click Start.

### Set the Keystore File Location and Password

Repeat these steps for each server in the cluster.

Follow these steps:
1. Log in to CSA.
2. To change the server, click the Properties icon.
3. Click the Security tab.
4. Complete the following fields and save:
   - **SSL Keystore:** Enter the location of the keystore file. If you leave the field empty, the default value of `<Clarity Home Directory>/config/.keystore` is used.
   - **SSL Password:** Enter the keystore password (the default value is `keystore`).
   - **Confirm Password:** Enter the keystore password again.
5. Stop and restart all services:
   a. Open Home, and click All Services.
   b. Click the Select All icon to select all services, and click Stop.
   c. Click the Select All icon to select all services, and click Start.

### Enable SSL on Each Server

The SSL Handling setting determines how the application behaves regarding SSL:

- **Derive from Port Settings (implied):** Derived from whether web server ports are enabled or disabled. Emulates SSL behavior from earlier releases (before Version 13.0).
- **SSL is used but processed externally (external):** Specifies that the load balancer or other prior endpoint terminates the SSL outside of the app server.
- **Switch to HTTPS only for sensitive pages (hybrid):** Specifies that Classic PPM actively switches between HTTP and HTTPS for secure and non-secure pages.
- **Support both HTTP and HTTPS without switching (both):** Both HTTP and HTTPS are enabled, without switching between the two.
- **Support only HTTPS (full):** All SSL. Everything is encrypted. Switch to SSL if necessary.
- **Support only HTTP (none):** No SSL. Everything is in the clear.

> [!note]
> The steps below explain how to set up SSL handling with the option "Support only HTTPS." If you select "Derived from Port Settings" as your SSL Handling option, the following extra field settings for each application instance are required:
> - HTTP Enabled: Clear the check box.
> - HTTPS Enabled: Select the check box.

Follow these steps for each server:
1. Log in to CSA.
2. Click Home, Servers.
3. Click the name of the server that you want to configure.
4. Click the Properties tab.
5. Click the Application tab.
6. In the Application Server section, for SSL Handling, select "Support only HTTPS."
7. In each Application Instance section associated with the server, complete the following fields:
   - **HTTPS Port:** Enter the port that you want to use for HTTPS traffic.
   - **HTTPS Entry URL:** Enter the HTTPS URL (including the port). Example: `https://ca_ppm.mycompany.com:8443`
8. Save your changes.
9. Stop and restart the application services:
   a. Click Home, All Services.
   b. Select each service that you want to stop, and click Stop.
   c. Select each service that you want to restart, and click Start.

### Enable SSL for Password-Protected Pages

You can enable SSL for only those pages that contain user passwords. With this configuration, users are automatically redirected between secure and insecure pages in the application.

With this configuration, both ports on UNIX operating systems must be greater than 1024. You can use regular port numbers if you use a SUDO command to launch services with root-like permissions. This exception does not apply when using load-balanced or proxied installations. In non-production environments, you can still choose not to use a load balancer with optional SSL offloading.

Follow these steps:
1. Log in to CSA.
2. Click Home, Servers.
3. Click the Properties icon of the server you want to configure.
4. Click the Application tab.
5. In the Application Server section, for SSL Handling, select "Switch to HTTPS only for sensitive pages."
6. In each Application Instance section associated with the server, complete the following fields:
   - HTTP Enabled: Select the check box.
   - HTTPS Enabled: Select the check box.
   - HTTPS Port: Enter the port that you want for HTTPS traffic.

> [!warning]
> For UNIX, the HTTP and HTTPS port numbers must be greater than 1024 unless you use a SUDO command.

   - HTTP Entry URL: Enter the HTTP URL (including port). Example: `http://ca_ppm.mycompany.com:8080`
   - HTTPS Entry URL: Enter the HTTPS URL (including port). Example: `https://ca_ppm.mycompany.com:8443`

7. Configure more servers if applicable.
8. Stop and restart each application service:
   a. Click the Services tab.
   b. Select each service that you want to stop, and click Stop.
   c. Select each service that you want to restart, and click Start.

### Enable a Secure JDBC Connection Between Application and Database Servers with SSL

For compliance with information security policies, you might need to encrypt connections between Clarity and database servers (for example, moving to AWS, Azure, or other cloud servers).

You can define certain parameters in the database connection string in the Clarity property file to enable SSL.

1. Follow the steps above to install the SSL certificate on the Oracle or SQL Server.
2. Add the following attributes in the database element of the Clarity property file:
   a. Add `useURL="true"`
   b. In the url attribute, add `encryptionmethod=SSL` as shown below:
   ```xml
   <database id="Niku" vendor="mssql" serviceName="niku" password="xxxxxx"
     upgradeStatus="upgradeNotNeeded" schemaName="niku" username="xxxxxxx"
     host="sqlserver.clarity.com"
     url="jdbc:sqlserver://sqlserver.clarity.com:1433;DatabaseName=NNNNN_STAGE;
     InsensitiveResultSetBufferSize=0;ProgramName=Clarity;encryptionmethod=SSL"
     driver="com.ca.clarity.jdbc.sqlserver.SQLServerDriver"
     instanceName="" serviceId="NNNNN_STAGE" jndiDatabaseId="jdbc/NikuDS" useURL="true"/>
   ```
3. Oracle network encryption is also supported. Add the following parameter in your JDBC URL: `DataIntegrityLevel=required`
4. Open the `sqlnet.ora` file and confirm that it contains the following parameter settings:
   ```
   SQLNET.ENCRYPTION_SERVER = required
   SQLNET.CRYPTO_CHECKSUM_SERVER = required
   ```
   The `required` setting enables the encryption or integrity service and disallows the connection if the client side is not enabled for the security service.
5. Restart the services.

> [!tip]
> To verify that the network connection is SSL encrypted, run a Wireshark packet trace and filter for the SQL Server DB IP Address and port number defined in your connection string.

### Configure Classic PPM to Work with SSL Off-Loaders

Follow these steps:
1. Log in to CSA.
2. Click Home, Servers.
3. Click the Properties icon for the server that you want to configure.
4. Click the Application tab.
5. In the Application Server section, for SSL Handling, select "SSL is used but processed externally."
6. For each application instance other than the Classic PPM application server instance, complete the following settings:
   - **HTTP Enabled:** Select the check box.
   - **HTTP Entry URL:** Enter an HTTPS URL using the format: `https://<hostname>:CA Portal`. The SSL off-loader URL is secure, so enter an HTTPS URL.
   - **HTTPS Enabled:** This check box does not apply when using an SSL off-loader. Clear this check box.
7. Save the changes.

## Configure Clarity to Use HTTPS

The following steps are for a non-clustered Clarity environment. You generate a keystore and a certificate request, import the certificates, and then make adjustments in CSA.

> [!tip]
> For a load-balanced architectural implementation, enable SSL by installing the certificate on the load balancer and not on the application servers. On the Application tab, change the SSL Handling field value to "SSL is used but processed externally."

Follow these steps:
1. Log in to the server that hosts Clarity.
2. Navigate to a directory for storing your private key. For example: `C:\ppm150101`
3. Prepare answers to the prompts in Step 5 now, in advance.
4. Generate a keystore with the following command:
   ```
   keytool -genkey -keystore C:\ppm15101\keystore.jks -keyalg RSA -storepass changeit
   ```
   Note: `keystore.jks` is the name of the keystore, with a password `changeit`. Change the password to a stronger one when you run this command.
5. Several prompts appear to fill in server and organization details. Use the information prepared in Step 3.
6. When prompted for first and last name, enter the complete name of the server without `http://` or `https://`.
7. Generate a certification request:
   ```
   keytool -certreq -keystore C:\ppm15101\keystore.jks -keyalg RSA -file myRequest0.cer
   ```
8. Send this file to the Certification Authority to obtain a certificate.
9. Verify that you have these certificates ready before importing into the keystore:
   a. server certificate
   b. intermediate certificate
   c. root certificate (check with the Certification Authority for Root and Intermediate certificates)
10. Import the root certificate:
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

### Make Changes in CSA

1. Log in to CSA and click the Security tab.
2. In the SSL Keystore field, enter the fully-qualified path to your keystore.
3. Complete the SSL Password and Confirm Password fields.
4. Click the Application tab.
5. Change SSL Handling to "Support both HTTP and HTTPS without switching."
6. In the Application Instance: app section, select HTTPS Enabled.
7. Change HTTPS Port to the number allotted to the Clarity Application (organization dependent; for example, 8043).
8. Change HTTPS Entry URL to the exact server name that was provided during keystore generation.
9. Restart the Application Service.
10. Verify that HTTPS is working by navigating using HTTPS (use the correct port number and URL, for example: `https://servername.organization.com:8043/`).
11. Change the SSL Handling to "Support only HTTPS."
12. Restart the Application service again.

**Useful keytool commands:**
- Delete a certificate: `keytool -keystore c:\ppm15101\keystore.jks -alias root -delete`
- List all certificates in a keystore: `keytool -keystore c:\ppm15101\keystore.jks -list`
- Verbose list: `keytool -keystore c:\ppm15101\keystore.jks -list -v`

Note: The paths in these examples are for Windows. Change them to the Linux path convention if the application is built on Linux. Everything other than the paths remains the same.


---
**See also:** [[LDAP Configuration]], [[SSO Configuration]]
**Parent:** [[_MOC Administration|Administration]]
