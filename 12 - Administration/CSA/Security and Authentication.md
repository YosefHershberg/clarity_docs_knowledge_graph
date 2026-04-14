---
title: CSA - Security, Passwords, LDAP, SSL, SSO, XSS, and FIPS
tags:
  - admin
  - classic
  - onprem
aliases:
  - CSA Security
  - Classic PPM LDAP
  - Classic PPM SSL
  - Classic PPM SSO
  - FIPS Clarity
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# CSA: Security, Passwords, LDAP, SSL, SSO, XSS, and FIPS (On-Premise Only)

> [!info] On-Premise Only
> All security configuration described here is performed via CSA. See [[CSA Overview]] and [[LDAP SSL SSO]].

## Topics Covered

- Manage Database Server Passwords
- Encrypt Server Passwords
- Change Database Server Passwords
- Configure SSL on Apache Tomcat
- Configure Clarity to Use HTTPS
- Integrate with LDAP
- Configure Single Sign-On (SSO) for Classic PPM and Clarity
- Set Options for XSS Vulnerabilities
- External URLs
- Enable FIPS in Clarity

---

## Manage Database Server Passwords

Use a server password to secure each server. The server password does not grant access to other servers in a cluster.

Best practice: Periodically change the password on each server.

1. Change the database server password (see your database documentation)
2. Change the password for CSA
3. Restart services after changing the database server password

---

## Encrypt Server Passwords

Three options are available in CSA under **Security > Encrypt Passwords**:

| Option | Security Level | Description |
|--------|----------------|-------------|
| No encryption | None | Passwords in clear text (default) |
| Using System Key | Low | Uses a hidden internal hardcoded key shared across all Classic PPM implementations |
| Using Custom Key File | High | Passwords stored using a separate key file only required at server startup |

> [!warning]
> If you encrypt with a custom key file and then change the key file, your passwords are lost and cannot be decrypted. You must re-enter all passwords.

### Steps to Encrypt Passwords

1. Log in to CSA > **Home > Servers** > click the server name
2. Click the **Security** tab
3. Choose an encryption option and click **Save**

---

## Change Database Server Passwords

1. Change the database password on the database server itself
2. Stop the **app** and **bg** services in CSA (**Home > All Services**)
3. Go to **Home > Servers** > click Properties > **Database** tab
4. In the **Internal Connection: Niku** section, update **Password** and **Confirm Password**
5. Click **Save** and restart **bg** and **app** services

---

## Configure SSL on Apache Tomcat

SSL (HTTPS) encrypts data moving between client applications and the server using public/private key cryptography.

### Generate a Public and Private Key Pair

```
keytool -genkey -keystore /<Clarity Home Directory>/config/.keystore -keyalg RSA -storepass keystore
```

Key parameters:
- `-genkey` — generates a keystore if one does not exist
- `-keyalg RSA` — specifies the RSA algorithm
- `-storepass` — password protecting the keystore (minimum 6 characters)

> [!tip]
> For a self-signed certificate, export the .cer file from the generated private key and skip the CSR step.

### Create a Certificate Signing Request (CSR)

For production systems, obtain a certificate from a Certificate Authority (CA):

```
keytool -certreq -keystore /<Clarity Home Directory>/config/.keystore -keyalg RSA -file ca_ppm.csr
```

### Install Certificates

```
keytool -import -keystore /<Clarity Home Directory>/config/.keystore -keyalg RSA -file Clarity-Source.cer -trustcacerts
```

### Distribute the Keystore File to All Application Servers

1. Log in to CSA > Stop all services
2. Click **Distribute > Distribute All**
3. Check all servers and click **Distribute**
4. Restart all services

### Set the Keystore File Location and Password

For each server in the cluster:

1. CSA > server Properties > **Security** tab
2. Set **SSL Keystore** path (default: `<Clarity Home Directory>/config/.keystore`)
3. Set **SSL Password** (default: `keystore`) and **Confirm Password**
4. Save and restart all services

---

## SSL Handling Options

The **SSL Handling** field in the Application Server section controls SSL behavior:

| Option | Description |
|--------|-------------|
| Derive from Port Settings (implied) | Emulates pre-v13.0 SSL behavior based on enabled/disabled web server ports |
| SSL is used but processed externally | Load balancer or prior endpoint terminates SSL outside the app server |
| Switch to HTTPS only for sensitive pages (hybrid) | Classic PPM actively switches between HTTP and HTTPS |
| Support both HTTP and HTTPS without switching (both) | Both protocols enabled; no switching attempted |
| Support only HTTPS (full) | All traffic encrypted; switch to SSL if necessary |
| Support only HTTP (none) | No SSL; everything in clear text |

---

## Enable a Secure JDBC Connection with SSL

For environments requiring SSL between the application and database servers (AWS, Azure, etc.):

1. Install the SSL certificate on Oracle or SQL Server
2. In the database element of `properties.xml`, add:
   - `useURL="true"`
   - `encryptionmethod=SSL` in the JDBC URL
3. For Oracle network encryption, add `DataIntegrityLevel=required` to the JDBC URL
4. Confirm `sqlnet.ora` parameters:
   - `SQLNET.ENCRYPTION_SERVER = required`
   - `SQLNET.CRYPTO_CHECKSUM_SERVER = required`
5. Restart all services

---

## Configure Classic PPM to Work with SSL Off-Loaders

When a load balancer or reverse proxy handles SSL externally:

1. CSA > server Properties > **Application** tab
2. Set **SSL Handling** to **SSL is used but processed externally**
3. For each application instance:
   - **HTTP Enabled**: checked
   - **HTTP Entry URL**: enter the HTTPS URL of the SSL off-loader (e.g., `https://<hostname>:CA Portal`)
   - **HTTPS Enabled**: cleared (does not apply when using an SSL off-loader)
4. Save the changes

---

## Integrate with LDAP

LDAP integration allows Classic PPM to authenticate users via an LDAP directory server.

### Enable LDAP in CSA

In the **Application** properties, set **Use LDAP** to selected. After restarting:
- You cannot maintain users through Classic PPM
- Use the **LDAP Synchronize New and Changed Users** background job to import changes

### Key LDAP CSA Fields

| Field | Description |
|-------|-------------|
| URL | LDAP server URL. For SSL-enabled LDAP use `ldaps://localhost:489` |
| Root Context | Root LDAP naming context (e.g., `ou=People,dc=niku,dc=com`) |
| Search User | FQDN of LDAP user with read rights |
| Batch Size | Results limit per search call. Must be <= directory server limit (Active Directory default: 1000) |
| Object Class | LDAP object class name. Default: `Person` |
| Search Filter | Optional LDAP filter. Default: `(employeetype=niku)` |
| Date/Time Format | Vendor date format (e.g., `yyyyMMddHHmmss'.0Z'` for Active Directory) |
| Group Name | FQDN of group holding all LDAP users to sync with Classic PPM |
| Group Identifier | Attribute for groups (e.g., `uniquemember` for eDirectory, `member` for Active Directory) |
| Allow non-LDAP users | Allows alternate authentication methods alongside LDAP |

### LDAP Attribute Mapping

| Classic PPM Field | Default LDAP Attribute |
|-------------------|------------------------|
| Username | `uid` (eDirectory) or `sAMAccountName` (Active Directory) |
| First Name | `givenName` |
| Last Name | `sn` |
| Full Name | `cn` |
| Email Address | `mail` |
| Modify Time Stamp | `modifyTimeStamp` |

> [!tip]
> The Username field must always map to a **unique** LDAP attribute value.

---

## Configure Single Sign-On (SSO)

When SSO is enabled, Classic PPM delegates login authentication to an external authority. Enabled via the **Use Single Sign-On** field in Application properties.

### SSO Fields in CSA (Security Tab)

| Field | Description |
|-------|-------------|
| Token Name | Name of the HTTP cookie, header, or parameter containing the username |
| Token Type | `cookie`, `header`, or `parameter` |
| Logout URL | URL navigated to on logout (e.g., `http://www.yourbiz.com/exit.html`) |
| Authentication Error URL | URL navigated to when authentication errors occur |
| Timeout URL | URL navigated to on session timeout |
| Signon URL | URL for users without a session cookie or SAML data (typically the IdP login URL) |

---

## Server Security Properties Reference

| Field | Description | Cluster Sync? |
|-------|-------------|---------------|
| SSL Keystore | Path to the certificate keystore file | No |
| SSL Password | Password for the certificate keystore | No |
| Confirm Password | Repeat keystore password | No |
| Keystore Format | Java Keystore Format or Bouncy Castle Keystore Format | No |
| FIPS 140-2 Mode Enabled | Enable FIPS 140-2 compliant encryption module | No |
| Encrypt Passwords | Password encryption method for properties file | No |

---

## Enable FIPS in Clarity

FIPS 140-2 is a U.S. Federal government standard for encrypting sensitive data. When enabled on Apache Tomcat, Classic PPM uses FIPS 140-2 compliant encryption for SSL and password operations.

> [!warning] Password Length Requirement
> When FIPS is enabled, the minimum password length is 14 characters. Users will be forced to change passwords that do not meet this restriction upon login.

### Steps to Enable FIPS in CSA

1. Log in to CSA > click the **Properties** icon
2. Click the **Security** tab
3. Enter the **SSL Keystore** path
4. Enter **SSL Password** and **Confirm Password**
5. Set the **Keystore Format** (Java Keystore or Bouncy Castle)
6. Check **FIPS 140-2 Mode Enabled**
7. In **Encrypt Passwords**, select **Using System Key** or **Using Custom Key File**
8. Click **Save**
9. Stop, deploy, and start services from `<install_dir>/bin`

After enabling FIPS, the message "Bouncy Castle/Java Keystore Secured" appears on the Clarity About page.

---

## Related Notes

- [[CSA Overview]]
- [[LDAP SSL SSO]]
- [[Application Servers and Clusters]]

## Source

Clarity 16.4.1 documentation, pages 2956–2985.
