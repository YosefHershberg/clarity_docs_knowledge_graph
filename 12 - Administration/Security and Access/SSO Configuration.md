---
title: SSO Configuration
tags:
  - admin
  - howto
aliases:
  - SSO
  - Single Sign-On
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# Single Sign-On (SSO) Configuration

## Configure Single Sign-On (SSO) for Classic PPM

Single sign-on (SSO) is an authentication process that allows users access to multiple systems using a single username and password. With SSO, once the server uses LDAP directory information to authenticate a user identity, it allows access to the requested information according to the user access privileges.

**SSO provides the following benefits:**
- Username/Password Administration: IT only has to manage one username/password for a user.
- Authentication Support: IT only has to support one place where users can have authentication problems.
- Usability: Users only have to remember one username and password and only have to log in once.
- Security: One username and password makes it easier to use complex passwords and to change them more often.

> [!warning]
> Best Practice: If you are using CA SiteMinder or other SSO software, set the configuration to allow angle bracket characters (< and >) in the URL. For example, if you are using SiteMinder, disable CssChecking. Otherwise, a URL that contains angle brackets produces an error when Classic PPM passes it. Angle brackets can appear in a URL created by a process that uses conditions such as <, <=, >, or >=.

Follow these steps:
1. Configure your SSO server and proxy server to point at Classic PPM and to have it pass an authentication token containing a valid Classic PPM username. Configure the SSO server so that the entry URL is: `http://<server>/niku/nu#action:npt.overview`
2. Log in to CSA, and click Home, Servers.
3. Click the name of the server you want to set up.
4. Click the Application sub tab.
5. To use LDAP, in the Application Server section, select the Use LDAP checkbox. If LDAP is enabled, non-browser clients use the same username and password.
6. In the Application Instance section, select the Use Single Sign-On checkbox, and click Save.
7. Click the Security tab.
8. In the Encryption section, complete the following fields:
   - **SSL Keystore:** Defines the path to the keystore file. Example: `<pathtokeystore>/server.keystore`
   - **SSL Password:** Defines the keystore password.
9. In the LDAP Server section, complete the following fields:
   - **URL:** Defines the LDAP server URL.
   - **Root Context:** Defines the LDAP server naming context. Example: `ou=People, dc=niku, dc=com`
   - **Search User:** Defines the user name with the appropriate credentials for binding to the LDAP server.
   - **Password:** Defines the LDAP server password.
   - **Batch Size:** Enables synchronous operation. Set using the following criteria:
     - 0: Allows all results received from the server as they are generated.
     - A non-zero number: Messages are blocked until n messages are received from the server. The enumeration proceeds while more messages are queued.
     - The default batch size is 1.
   - **Search Filter:** Defines the search filter string (as defined in RFC 2254).
   - **Date/Time Format:** Defines the date and time format used on the LDAP server.
   - **Group Name:** Defines the group enabled for group authentication.
   - **Group Identifier:** Specifies the group ID for the group enabled for group authentication.
   - **Allow non-LDAP users:** Indicates if non-LDAP users are allowed to access the application using an alternative authentication method.
10. In the LDAP Attribute Mapping section, complete the following fields.
11. In the Single Sign-on section, complete the following fields:
    - **Token Name:** Specifies the HTTP cookie that Classic PPM accepts as a valid authentication token for initiating a user session.
    - **Token Type:** Specifies the token type. Values: Cookie (token in a cookie), Header (token in the message header), Parameter (token provided in a parameter).
    - **Logout URL:** Defines the fully qualified URL that displays when the user logs out.
    - **Authentication Error URL:** Defines the fully qualified URL that displays when the user cannot be authenticated.
12. Save the changes.
13. Restart the application, and log in to Classic PPM as an application administrator.

## Configure Single Sign-On (SSO) for Clarity

To enable SSO implementation for Clarity, configure your SSO server as described in the following procedure. The examples provided are applicable to the SiteMinder SSO server. Settings may differ depending on the SSO server you are using.

> [!warning]
> Before configuring your SSO server for Clarity, verify that SSO is enabled for Classic PPM. See Configure SSO for Classic PPM for details. If SSO is not configured for Classic PPM, SSO for Clarity will not work.

Follow these steps:
1. Protect the following URLs for Clarity:
   - `https://<server:port>/pm*`
   - `https://<server:port>/ppm/rest/*`

   **SiteMinder Example:** In the existing domain that has the Classic PPM realm, create two new realms:
   - A realm to protect the REST APIs: Name: "Clarity REST API Rule", Resource: `ppm/rest/*`, Action: Get, Post, Put, Delete, Head.
   - A realm to protect Clarity: Name: "Classic PPM New UI Rule", Resource: `pm*`, Action: Get, Post, Put, Delete, Head.
   After defining the rules, go to the Rules tab and add the existing response from Classic PPM SSO to each new rule. The response defines the name of the username cookie and the value format that Classic PPM SSO expects.

2. Configure the following properties for the Web Agent:
   a. Add the following URL to the existing logoff URL list: `https://<server:port>/ppm/rest/v1/auth/logout`
   b. Add the following URL to the ignore URL list: `https://<server:port>//pm/js/core/layout/logout.html`
   c. Add the following file extensions to the list of ignored extensions: `.woff`, `.svg`, `.ttf`, `.eot`
   d. Remove single quote (if the value exists) from the Bad URL characters list.
   e. Remove single quote (if the value exists) from the Bad Query character list.

   **SiteMinder Example:** Modify the following agent properties:
   - `IgnoreExt`: Add `.woff`, `.svg`, `.ttf`, and `.eot` extensions.
   - `IgnoreUrl`: Add `/pm/js/core/layout/logout.html`.
   - `LogoffUri`: Add `/ppm/rest/v1/auth/logout`.
   - `BadUrlChars`: Remove the single quote value if it exists.
   - `BadQueryChars`: Remove the single quote value if it exists.

## Use LDAP with SSO

You can use LDAP with Single Sign-On (SSO).

**Best Practice:** While SSO does not require LDAP to be enabled, use LDAP with SSO for the following reasons:
- Non-browser clients get most of the SSO benefits.
- With SSO only, user information such as names and email must still be managed within Classic PPM. With LDAP, this data is kept in the directory server.

## Use LDAP without SSO

SSO gives little extra benefit over LDAP. Users must enter their username and password to log in to Classic PPM, but every other benefit still applies with LDAP. The system configuration is much simpler for LDAP alone. With LDAP, there is no need for a proxy or SSO server, and only one Classic PPM instance is required.

## Set Options for Cross-Site Scripting (XSS) Vulnerabilities

Cross-Site Scripting (XSS) attacks insert malicious scripts into otherwise trusted web sites. An XSS attacker uses a web application to send malicious code (generally a browser-side script) to an end user.

These attacks succeed when a web application includes user input data in the output it generates without first validating or encoding the input data. The end-user browser cannot determine whether the script is malicious. Because the malicious script appears to originate from a trusted source, the browser executes the code, which can access cookies, session tokens, and other sensitive information.

As a safeguard against XSS vulnerabilities, beginning with Release 14.1 and 14.2, the application handles user input validation and restrictions (escaping). To request changes to the default restriction settings or for other assistance with XSS security issues, contact support.broadcom.com.

### XSS: User Input Validation

Clarity and Classic PPM validate all user input sent back to the browser as safe from XSS. The product compares user input to a set of string patterns commonly used for XSS. If any part of the user input matches one of the common patterns, Clarity and Classic PPM restrict (escape) the XSS string in the user input by placing escape characters before and after the string.

> [!warning]
> By default, the XSS detection is turned on. URL attributes and site links are exempt from this check. For more information about changing these settings, see Set XSS User Input Restrictions.

### XSS: User Input Restrictions

To change the setting for any XSS option, execute database SQL statements.

Follow these steps:
1. Access the `CMN_OPTION_VALUES` database table.
2. Update the table entry for the particular option.
3. Flush the cache.

### XSS: Restriction Option

This option restricts the XSS string in the user input if the string matches a pattern in the `CMN.XSS.PATTERNS` option. Applies to Clarity and Classic PPM, except URL attributes and site links.

- `RESTRICT.APP.XSS` Values: True (restrictions are on), False (restrictions are off). Default: True.

> [!note]
> The HtmlPortlet content is not restricted (escaped). HTML portlets execute any script in HTML content, which is the expected behavior.

To change the `RESTRICT.APP.XSS` option, update the `CMN_OPTION_VALUES` database table using the following SQL statement:
```sql
update cmn_option_values set value='false|true'
where option_id = (select id from cmn_options where option_code=' RESTRICT.APP.XSS')
```

### XSS: URL Attribute Value Option

This option restricts the URL attribute value (created with Studio) if the value matches a pattern in the `CMN.XSS.PATTERNS` option.

- `RESTRICT.URL.ATTR.XSS` Values: True (restrictions are on), False (restrictions are off). Default: False.

```sql
update cmn_option_values set value='false|true'
where option_id = (select id from cmn_options where option_code=' RESTRICT.URL.ATTR.XSS')
```

### XSS: Site Links Option

This option restricts the Site Links entry value if the value matches a pattern in the `CMN.XSS.PATTERNS` option.

- `RESTRICT.SITE.LINKS.XSS` Values: True (restrictions are on), False (restrictions are off). Default: False.

```sql
update cmn_option_values set value='false|true'
where option_id = (select id from cmn_options where option_code=' RESTRICT.SITE.LINKS.XSS')
```

### XSS: Common XSS Patterns Option

This option defines the string patterns commonly used for XSS. You can add values to this option to include more string patterns.

- `CMN.XSS.PATTERNS` Default string patterns:
```
</script>
<script(.*?)>
<script>(.*?)</script>
alert(.*?)
eval\((.*?)\)
expression\((.*?)\)
javascript:
onerror(.*?)=
onload(.*?)=
src[\r\n]*=[\r\n]*\"(.*?)\"
src[\r\n]*=[\r\n]*\'(.*?)\'
```

To add patterns, access the `CMN_OPTION_VALUES` database table and include the new patterns in the `CMN.XSS.PATTERNS` option.

**Example:** Add the new pattern "onfocus" to the `CMN.XSS.PATTERNS` option:

Oracle:
```sql
CMN_OPTION_VALUES_INS_SP('CMN.XSS.PATTERNS','true','true','onfocus(.*?)=',1);
```

MSSQL:
```sql
EXEC CMN_OPTION_VALUES_INS_SP 'CMN.XSS.PATTERNS','true','true','onfocus(.*?)=',1
```

### Security Response Headers: X-XSS-Protection and X-Content-Type-Options

Web browsers have two security response headers enabled by default for an additional layer of protection:

- **X-XSS-Protection:** Forces the XSS filter into Enable mode. Supported by Internet Explorer, Chrome, and Safari browsers; this response header stops pages from loading when the browser detects reflected XSS attacks. Not required in modern browsers when applications implement a strong Content-Security-Policy (CSP).
- **X-Content-Type-Options:** A marker used by the server to prevent any changes to the MIME types advertised in the Content-Type headers.

Although unlikely, if you encounter issues, you can disable the individual headers or all headers in the network response with the following SQL commands:

Disable X-Content-Type-Options:
```sql
delete from cmn_option_values where option_id in
  (select id from cmn_options where option_code like 'ENABLED_RESPONSE_HEADERS%')
  and value like 'X-Content-Type%'
```

Disable X-XSS-Protection:
```sql
delete from cmn_option_values where option_id in
  (select id from cmn_options where option_code like 'ENABLED_RESPONSE_HEADERS%')
  and value like 'X-XSS-Protection%'
```

Disable all headers:
```sql
call CMN_OPTION_VALUES_DEL_SP('ENABLED_RESPONSE_HEADERS');
```

## External URLs

The `externalUrl` property is an optional application setting that provides support for external or federated authentication schemes in notification messages.

When `externalUrl` is not specified, Classic PPM notification messages that contain URLs use the standard `entryUrl` property, which points directly to the Classic PPM server.

The `externalUrl` property causes the request to first route to an external server which provides the login authentication for the session. The external server redirects the original request back to Classic PPM using Single Sign-On (SSO). This method ensures that the user does not have to log in to Classic PPM directly.

The `externalUrl` property supports the following macros:
- `${entryurl}`: Inserts the current `entryUrl` configuration property.
- `replace(regex,replacement,text)`: Replaces all instances of "regex" with "replacement" in "text".
- `encode()`: Replaces the text with UTF-8 encoded text. Macros can be combined and nested.

> [!warning]
> Specify the restricted XML characters such as ampersands using the equivalent entity name (e.g., `&amp;`). Failure to do this can prevent all Classic PPM services from starting.

### Example: Building an External URL

Consider the following environment:
- **Server 1 (External Authentication):** `http://auth.somecompany.com`, Parameter: `REDIRECT` (routes to address specified in REDIRECT parameter)
- **Server 2 (Internal Authentication / SSO):** `http://sso.mycompany.com`, Parameter: `TARGET` (routes to address specified in TARGET parameter)
- **Server 3 (Classic PPM):** `http://ca_ppm.mycompany.com`

Follow these steps to construct the external URL:
1. Start with the external authentication server:
   `externalUrl=http://auth.somecompany.com?REDIRECT=http://sso.mycompany.com`
2. Add the standard Classic PPM entry URL via the `${entryurl}` macro:
   `externalUrl=http://auth.somecompany.com?REDIRECT=http://sso.mycompany.com?TARGET=${entryurl}`
3. Encode the parameters so they can be passed safely on a query string:
   `externalUrl=http://auth.somecompany.com?REDIRECT=encode(http://sso.mycompany.com?TARGET=encode(${entryurl}))`

The encoding macros are nested. The nesting causes the inner one to be double-encoded. The double encoding is necessary because Server 1 decodes the entire REDIRECT parameter on the first stop, and Server 2 expects a UTF-8-encoded parameter.

## Session Security

**How does Classic PPM track user sessions?**
A session-based cookie carries a token that is used to access session data persisted in the cache (single app environment) or database (clustered environment). The end-user web browser must accept cookies from the Classic PPM application. The cookies are session-based, so they are not written to disk. When the user logs out, session information in the database/cache is deleted.

**Load balancers and clusters:** Load balancing and clustering work fine with this technique.

**Can a session be hijacked?** To steal a user session maliciously, an attacker would have to snoop the HTTP traffic to pick out the headers containing the authentication cookie. This token, however, is valid only while the real user is logged in. Once the user logs out, session information is deleted.

**How can I keep session IDs out of logs?**
Edit the `logger.xml` file and replace the log pattern `(%u:%s:%a)` with the pattern `(%U:%a)`.

**Classic PPM log patterns:**

| Pattern Option | Purpose |
|---|---|
| `u` | Creates the user ID with the tenant ID in the log. Example: `(%u)` creates output `(clarity:admin)` |
| `U` | Creates the user ID in the log. Example: `(%U)` creates output `(admin)` |
| `s` | Creates the session ID in the log. |
| `a` | Creates the action ID in the log. Example: `(%a)` creates output `(npt.overview)` |

## Enable FIPS in Clarity

FIPS 140-2 is a standard that describes U.S. federal government requirements for encrypting sensitive data. If your Clarity application (app) server vendor is Apache Tomcat, you can enable Clarity to operate in a FIPS 140-2 compliant mode.

This operating mode uses a FIPS 140-2 compliant encryption module for encryption operations during server operation, such as using the SSL protocol and encrypting passwords.

**Creating a Keystore using Bouncy Castle FIPS Provider:**
```
keytool -genkey -keyalg RSA -alias selfsigned -sigalg SHA256withRSA
  -keystore <path_to_keystore>\mykeystore.bcfks
  -keypass <key_password> -storepass <store_password>
  -validity 365 -keysize 2048 -storetype BCFKS
  -provider org.bouncycastle.jcajce.provider.BouncyCastleFipsProvider
  -providerpath <path_to_fips_provider_jar>\bc-fips.jar
```

**Creating a Keystore in Java Keystore Format:**
```
keytool -genkey -keyalg RSA -alias selfsigned -sigalg SHA256withRSA
  -keystore <path_to_keystore>\mykeystore.jks
  -keypass <key_password> -storepass <store_password>
  -validity 365 -keysize 2048
```

> [!important]
> Here the Java keytool is used to generate the key. You can use any other tool such as OpenSSL to generate the key.

**Steps when using Bouncy Castle as FIPS Provider:**
1. In Java, navigate to the directory `$JAVA_HOME/conf/security` and modify `java.security`.
2. Add the following providers on the top and re-number the providers in order:
   ```
   security.provider.1=BCFIPS
   security.provider.2=BCJSSE fips:BCFIPS
   ```
3. Modify the entry in `java.security`:
   - From: `ssl.KeyManagerFactory.algorithm=SunX509`
   - To: `ssl.KeyManagerFactory.algorithm=PKIX` (as specified in the Bouncy Castle JSSE Provider User Guide)

**Follow the steps to enable FIPS in CSA:**
1. Log in to CSA.
2. Click the Properties icon.
3. Click the Security tab.
4. Enter the SSL Keystore.
5. Enter the password in the SSL Password and Confirm Password fields.
6. Set the value of Keystore Format based on the Keystore Format you created.
7. Check FIPS 140-2 Mode Enabled.
8. In Encrypt Passwords, select Using System Key or Using Custom Key File.
9. Click Save.
10. Stop the services from `<install_dir>/bin`.
11. Deploy the services from `<install_dir>/bin`.
12. Start the services from `<install_dir>/bin`.

After enabling FIPS in CSA, you will see the message "Bouncy Castle/Java Keystore Secured" in the About page of Clarity.

## Related
- [[Authentication Methods]]
- [[_MOC Administration]]

%%Source: p2956-2980%%

---
**See also:** [[SSL Configuration]], [[LDAP Configuration]]
**Parent:** [[_MOC Administration|Administration]]
