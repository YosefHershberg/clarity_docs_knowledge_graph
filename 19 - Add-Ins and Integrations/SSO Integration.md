﻿---
title: Integrate Clarity with CA Single Sign-On
tags:
  - admin
aliases:
  - SSO Integration
---
# Integrate Clarity with CA Single Sign-On


> [!NOTE]
> After you log in to the Clarity timesheet page from Rally, you can only view your timesheet. No other Clarity pages are available.

> [!TIP]
> Organizations can manage single sign-on access to Classic PPM by integrating with CA Single Sign-On.
> Broadcom highly recommends consulting with Clarity and CA Single Sign-On specialists from Broadcom Service partners before planning or implementing this integration.
> The procedures on this page apply to Classic PPM on-premise environments where the administrator can access CSA.

CA Single Sign-On (SSO) provides a centralized security management foundation that enables user authentication and controlled access to web applications and portals.
It delivers advanced security management capabilities and enterprise-class site administration, enabling greater IT control and security.

**CA Single Sign-On features:**

- Single Sign-On (SSO)
- Strong Authentication Management
- Centralized Policy-Based Authorization and Audit
- Identity Federation
- Enterprise Manageability

CA Single Sign-On integrates with industry-leading directory services and user stores, eliminating redundant administration of user information.
It simplifies administration, leverages existing user directories (LDAP, relational databases, mainframe security directories), and enables real-time transactional security through
integrated web services.

Integration with CA Single Sign-On has been available for all Classic PPM components since release 8.1.2. For further information, refer to the Classic PPM Installation Guide, the Single Sign-On Policy Server documentation, and the Single Sign-On Web Agent documentation.

## Integration Points and Functionality


The integration protects Classic PPM application URIs with CA Single Sign-On by creating several realms, rules, and a policy.

- A **rule** identifies and controls access to specific resources included in the policy
- A **CA SSO policy** binds rules and responses to users, groups, and roles
- **Policies** reside in the policy store, which contains all CA Single Sign-On entitlement information

**How the integration works (step by step):**

1. The user attempts to access a protected resource (the Clarity web application)
2. The user is challenged for credentials and presents them to the Web Agent
3. The user credentials are passed to the policy server
4. The user is authenticated against the appropriate user store (such as LDAP or Active Directory)
5. CA Single Sign-On sets an HTTP Header containing the SSO token and redirects the request to the Clarity Overview URL
6. The user receives access to the secured Clarity web application

**Protected URIs:**

- `/niku/nu`
- `/niku/services`
- `/niku/app`
- `/pm` (added in Classic PPM 15.1+)
- `/ppm/rest` (added in Classic PPM 15.1+)

## Configure the SSO Token


1. In **Clarity System Administration (CSA)**, navigate to your server **Properties** page
2. Click the **Security** link
3. Configure the security properties
4. Configure the **Single Sign-On** options:
   - **Token Name:** Enter the same name that matches the token name in CA Single Sign-On (e.g., `cappmtoken`). A custom response sets an HTTP header with the user name from the LDAP Directory used for authentication.
   - **Token Type:** Set to **Header** so that Clarity checks HTTP headers for the SSO token
   - **Logout URL:** Configure the location to redirect the end user when they click **Logout** or when their session expires
   - **Authentication Error URL:** Configure the location to redirect the user if any authentication error is encountered
5. Click **Save**
6. Restart the Clarity services

## Configure the Application Bind Address, Port, and Proxy


1. In **Clarity System Administration (CSA)**, navigate to your server **Properties** page
2. Click the **Application** link
3. Configure the Apache Tomcat application server
4. In the app instance settings, select the **Use Single Sign-on** option
5. **If using mod_proxy (simple HTTP reverse proxy):**
   - Configure the **HTTP Port** for the app instance to a non-privileged port (e.g., 8080)
   - Configure the **Bind Address** to the loopback address (`127.0.0.1`) if the Apache HTTP server is on the same host
6. **If using Microsoft IIS or Apache HTTP Server with the Apache Tomcat Connector (ajp13 protocol):**
   - Set the **Tomcat Connector Port** to a non-privileged port (e.g., 30001)
   - Set the **Tomcat Connector Bind Address** to the loopback address (`127.0.0.1`) if the proxy server is on the same host
7. Click **Save**

> [!WARNING]
> If the Microsoft IIS or Apache HTTP server proxy resides on a separate physical host, configure firewall rules (IPtables for Linux, Windows Firewall, or hardware firewall) so
> that only the HTTP proxy server IP address can reach the bind address and port.
> Failure to secure the Tomcat Application bind address leaves Clarity open to attacks that bypass the CA Single Sign-On Web Agent protection.

### LDAP Configuration for Schedulers


If you use **CA Open Workbench** or **Microsoft Project** with Clarity, configure Clarity authentication against the same LDAP directory used by CA Single Sign-On.
After a period of inactivity in these scheduler applications, the Clarity session becomes invalid.
If LDAP is not configured as the authentication source for Clarity, re-authentication will fail.

## Configure the Policy Server


Classic PPM 14.x or older included the following paths:

- `/niku/app`
- `/niku/nu`
- `/niku/services`

Classic PPM 15.1 and newer added:

- `/pm`
- `/ppm/rest`

> [!NOTE]
> Only protect the necessary URIs so that unnecessary calls are not made to the Single Sign-On Policy server. Protecting the full root is not recommended — customers who do so may be required to unprotect additional URIs such as `/reportservice`.

### Authentication Schemes


The examples below use the **Basic Auth** scheme for simplicity. In most environments, **IWA (Integrated Windows Authentication)** is a popular choice. Selection of the Authentication Scheme is left to the CA Single Sign-On implementation architect.

### Single Sign-On Realms


Create the following realms in CA Single Sign-On for Clarity:

**REALM 1: Clarity Legacy Application**
- Protects the URI `/niku/app`
- Scheduling tool (OWB or MSP) URIs are allowed to pass unprotected because they cannot handle an SSO authentication challenge
- Configure Single Sign-On to protect every URI that does not match the pattern `*/niku/app*action=sch*`
- Create a resource rule under the realm using the following regular expression to exclude schedulers but protect all other requests:

```
.*action=(([^s])|(.[^c])|(..[^h])).*
```

**REALM 2: Clarity Application**
- Protects the core functionality URI `/niku/nu`

**REALM 3: Clarity Services**
- Protects `/niku/services`
- Protects resources used by the Clarity user interface (primarily JSON requests from the web toolkit)

**REALM 4: Clarity**
- Protects the URI `/pm`
- Required only if your implementation of Clarity must support SSO

> [!WARNING]
> - The resource must not have a forward slash (change `/*` to `*`)
> - In the **Action** section, include **Delete**, **Head**, and **Trace** in addition to Get, Post, and Put for the Web Agent actions

**REALM 5: Clarity REST API**
- Protects the base URL `/ppm/rest`
- Required only if Clarity needs to support SSO

> [!WARNING]
> In the **Action** section, include **Delete**, **Head**, and **Trace** in addition to Get, Post, and Put for the Web Agent actions.

**REALM 6: Clarity Advanced Reporting (Optional)**
- Protects the URI `/niku/reportserver` used by Advanced Reporting (Jaspersoft)
- This realm must be **un-protected**
- Only necessary for customers who protect the full root (not recommended)

### Realm Idle Timeouts


Set the idle session timeout to match the Clarity application session timeout value. Both Clarity and CA Single Sign-On default to **1 hour idle session timeout**. Set this for all realms defined for Clarity.

## Create a Single Sign-On Policy


After configuring the realms and their rules, create a policy under the Clarity Single Sign-On domain. Include the realms and rules as defined above.

### Create Single Sign-On Response


To provide a consistent HTTP header token for Clarity to use for SSO, create a response that maps the user name LDAP Directory attribute to the new HTTP header `cappmtoken`.

> [!NOTE]
> The SSO built-in HTTP header for the user name is `SM_USER`, but when Microsoft IIS is configured with the Apache Tomcat Connector, all HTTP header variable underscores are converted to dashes, making it `SM-USER`. Using `cappmtoken` (no underscore) avoids this issue.

**Steps:**

1. Click **Create** to create a new response named `cappmtoken`
2. Create a new attribute within the response:
   - **Attribute Kind:** User Attribute
   - **Variable Name:** `cappmtoken`
   - **Attribute Name:** the LDAP user_name attribute name:
     - `uid` — for CA Directory or other LDAP RFC-compliant directories
     - `sAMAccountName` — for Microsoft Active Directory
     - `mail` — if Clarity is configured to use the email address as the login ID
3. Associate rules and responses in the Clarity Policy: map the Clarity Token response to all of the Single Sign-On rules created earlier

## Agent Properties, LogoffUri, IgnoreExt, and IgnoreUrl


Set the CA SSO **LogoffUri** value to the Clarity logout URI so that when a Classic PPM user logs out, the SSO session is also invalidated.

**Steps:**

1. Open the CA SSO **Agent Configuration** settings
2. Add or modify the **LogoffUri** in your Agent Configuration Object (ACO):
   - **Parameter Name:** `logoffUri`
   - **Parameter 1:** `/niku/nu#action:security.logoutAction`
   - **Parameter 2:** `/ppm/rest/v1/auth/logout` (required when Clarity is accessed in an SSO-enabled environment)

3. Add or modify **IgnoreExt** and **IgnoreUrl** in your Agent Configuration Object (ACO):
   - **Parameter Name:** `IgnoreExt`
   - **Add Values:** `.woff,.svg,.ttf,.eot` (separate with commas)
   - **Parameter Name:** `IgnoreUrl`
   - **Add Value:** `/pm/js/core/layout/logout.html`

4. Add or modify **BadUrlChars** and **BadQueryChars** in your ACO to avoid API failure (403 Forbidden) caused by single quotes in REST API URLs:
   - **BadUrlChars:** If this property exists, remove the single quote from its value. If it does not exist, add/enable this property without a value.
   - **BadQueryChars:** If this property exists, remove the single quote from its value. If it does not exist, add/enable this property without a value.

## Securing Environments Where SSO is Enabled


> [!WARNING]
> Great care must be taken to ensure that only the Single Sign-On Secure Proxy server can connect to the Clarity application servers.
> If Clarity application ports can be reached directly over the network (bypassing Single Sign-On), a malicious user may connect to the Clarity application port, supply their own
> HTTP header value, and successfully log into Clarity as any user.

**Recommended configuration:**

- Run the Single Sign-On web agent in an Apache HTTP server on the **same host** as the Clarity application
- Bind the Clarity application to the `127.0.0.1` loopback address on a non-privileged port (TCP/8080)
- Configure the server-level firewall (Windows Firewall or Linux Iptables) to allow end-users to connect only to TCP port 80, which is bound to the public IP address by the Apache HTTP Server

After configuring Clarity for SSO, strongly recommended:
test by attempting to directly bypass the Single Sign-On web agent and connect directly to the ports bound by the Clarity Application.
If bypass attempts succeed, work with your System Administrator, Network Administrator, and Clarity Administrator to reconfigure the environment.

## Proxy from Apache HTTP Server


In the typical configuration, the Single Sign-On Web Agent runs in an Apache HTTP server on the same server as the Clarity application instance.

- Bind Clarity to the loopback address (`127.0.0.1`) on a non-privileged port (e.g., 8080)
- Bind Apache HTTP Server to a public IP address on a privileged port (80 or 443 for SSL)
- Configure Apache as a reverse proxy with `mod_proxy` or with the Apache Tomcat Connector

> [!NOTE]
> `mod_proxy` is sufficient for most configurations. The Apache Tomcat Connector provides software load balancing, which `mod_proxy` does not. For `mod_jk` (Tomcat Connector) configuration, see: http://tomcat.apache.org/connectors-doc/webserver_howto/apache.html

**Apache 2.2.x / 2.4.x configuration** (handles reverse proxy and initial redirects):

```apache
# Initial Clarity redirects for SSO
# NOTE: be sure to uncomment LoadLibrary lines for the following modules:
#   proxy_module, proxy_http_module, rewrite_module

RewriteEngine On
RewriteRule ^$ http://%{SERVER_NAME}/niku/nu [R]
RewriteRule ^/$ http://%{SERVER_NAME}/niku/nu [R]
ProxyPass / http://127.0.0.1:8080/
ProxyPassReverse / http://127.0.0.1:8080/
```

## Proxy from Microsoft IIS


Microsoft IIS requires the **Apache Tomcat Connector** because IIS has no built-in proxy functionality. The Tomcat Connector automatically converts underscores in HTTP Headers to dashes. Using `cappmtoken` (no underscore) avoids this issue.

**Configuration differences from mod_proxy:**

- Set the **Tomcat Connector Bind Address** to `127.0.0.1` and **Tomcat Connector Port** to a non-privileged port (e.g., 30001)
- Also set **HTTP Port** to a non-privileged port (e.g., 8080) and **Bind Address** to `127.0.0.1` to prevent end-users from bypassing the Web Agent in IIS
- The Apache Tomcat Connector communicates with the Tomcat Connector Port using the **ajp13 protocol** (not HTTP)

**Steps to install the Apache Tomcat Connector in Microsoft IIS:**

1. **Download the ISAPI Redirector (`isapi_redirect.dll`)** from: http://tomcat.apache.org/download-connectors.cgi
   - For 64-bit Windows 2008/2012, use the x86-64 binary

2. **Place `isapi_redirect.dll` in the Tomcat `bin` directory**
   - If the downloaded file contains a version number (e.g., `isapi_redirect-1.2.XX.dll`), rename it to `isapi_redirect.dll`

3. **Create `workers.properties` and `uriworkermap.properties`** in the Tomcat `conf` directory

   `workers.properties`:
   ```properties
   # Define 1 real worker using ajp13
   worker.list=worker1
   # Set properties for worker1 (ajp13)
   worker.worker1.type=ajp13
   worker.worker1.host=127.0.0.1
   worker.worker1.port=30001
   ```

   `uriworkermap.properties`:
   ```properties
   # pattern for Clarity
   /*=worker1
   ```

4. **Configure the ISAPI Redirector** by adding registry keys under:
   `HKEY_LOCAL_MACHINE\SOFTWARE\Apache Software Foundation\Jakarta Isapi Redirector\1.0`
   - `extension_uri` (String) = `/jakarta/isapi_redirect.dll`
   - `log_file` (String) = full path to your connector log file (e.g., `c:\ca\cappm\apache-tomcat-7.0.42\logs\isapi_redirect.log`)
   - `log_level` (String) = `error` (use `debug` during initial testing only)
   - `worker_file` (String) = full path to `workers.properties`
   - `worker_mount_file` (String) = full path to `uriworkermap.properties`

5. **Configure IIS Web Site (IIS v7/v7.5+):**
   - Ensure **IsapiFilterModule** and **IsapiModule** are installed in IIS
   - Add the ISAPI Redirector to the list of allowed **ISAPI and CGI Restrictions** at the top server level
   - Add the ISAPI Redirector as an **ISAPI Filter** to the IIS web site (filter name must be `jakarta`)
   - Add a **Virtual Directory** named `jakarta` pointing to the directory containing `isapi_redirect.dll`
   - Grant execute permissions to the **ISAPI-dll Handler Mapping** for the new directory

6. **Restart IIS** and test by opening the IIS website URL followed by `/niku/nu`

7. **Configure root context redirect in IIS** by creating `default.htm` in the IIS web document root (`c:\inetpub\wwwroot`):

   ```html
   <html>
   <head>
     <meta http-equiv="refresh" content="0;url=/niku/nu"/>
   </head>
   <body/>
   </html>
   ```

## Proxy Timeouts


Idle TCP timeouts must be set correctly throughout the architecture at all points that serve as reverse proxies (hardware load balancers, SSO Secure Proxy Server, Apache HTTP Server, or Microsoft IIS). Broadcom recommends setting the idle TCP timeout to **15 minutes (900 seconds)**.

> [!NOTE]
> Several actions in Clarity, particularly Reports executed in immediate mode, can run for up to 10 minutes before Clarity responds back to the user. Any proxy timeouts shorter than this can result in misleading errors to the end user.

**Timeout configuration by component:**

| Component | Setting | Value |
|---|---|---|
| Apache HTTP Server (mod_proxy) | `ProxyTimeout` directive in Apache config | 900 |
| Apache HTTP Server (mod_jk) | `socket_timeout` (default is 0 = disabled) | No configuration necessary |
| Microsoft IIS | **Connection time-out** under Advanced Settings for the IIS website | 900 seconds |
| F5 Big IP | **Idle Timeout** under the F5 TCP Profile | 900 seconds |

## Related
- [[_MOC Integrations]]

%%Source: p4854-4874%%
