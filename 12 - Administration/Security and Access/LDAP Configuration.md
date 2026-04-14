---
title: LDAP Configuration
tags:
  - admin
  - howto
aliases:
  - LDAP
  - Lightweight Directory Access Protocol
  - LDAP Synchronization
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# LDAP Configuration

## Integrate with Lightweight Directory Access Protocol (LDAP)

A Lightweight Directory Access Protocol (LDAP) interface to authorize access across all applications can be beneficial. A central directory server controls access so that users can have one username and password for all applications.

**Supported LDAP options:**
- LDAP v2 (simple) protocol: uses a small subset of LDAP functionality including authentication (clear text or SSL), binding, and searching.
- LDAP v3 control for paged-results as defined in RFC 2696.

**Benefits of LDAP integration:**
- Simplification of username and password administration. IT only has to manage one username/password pair per user.
- Authentication support. IT only has to support one place where users can have authentication problems.
- Improved usability. Users only have to remember one username and password.
- Improved user management. Username and email information can be stored in LDAP.
- Security enhancement. Using one username and password makes it easier to use complex passwords and to change them more often.

To synchronize users between your directory server and Classic PPM, users are fetched from the directory server in a batch. The LDAP configuration settings of Classic PPM specify the batch size.

**Important notes about LDAP behavior:**
- Classic PPM does not verify whether a user in a group or in a search that CSA specifies is active or inactive in LDAP. Classic PPM only checks whether a user is present in a Classic PPM group.
- Classic PPM does not recognize nested groups in LDAP.
- Users in groups nested inside the LDAP Classic PPM group are not checked when LDAP synchronization jobs run.
- A user who is deactivated on the LDAP server is deactivated in Classic PPM the next time the synchronization job runs. If a user is reactivated on the LDAP server, the user is not automatically reactivated in Classic PPM; you must reactivate the resource manually.

> [!warning]
> Before you implement LDAP, select a compatible LDAP server. Set up Classic PPM for LDAP authentication on each server that is running an application service. If you have a cluster of Classic PPM servers, repeat these steps on each server in the cluster.

Follow these steps:
1. Create a resource as the test user you can use to access Classic PPM as an LDAP user.

> [!warning]
> The test user must have the same user ID in Classic PPM as the user LDAP sAMAccountName in Microsoft Active Directory or the UID for other LDAP implementations.

2. Decide how to define the LDAP users who are granted access to Classic PPM. You can enable group authentication by specifying a group, or by creating an attribute/value combination on the LDAP, or both. You can define this setting from the security Server: Properties page in CSA.
3. Define the LDAP server properties.
4. Set up Classic PPM to authenticate.
5. Stop and restart all Classic PPM services.

### Define the LDAP Server Properties

Follow these steps:
1. Log in to CSA.
2. Click the Properties icon of the server you want to set up.
3. Click the Security tab.
4. In the LDAP Server section, complete the fields:
   - **URL:** Defines the LDAP server URL. If your LDAP server is SSL-enabled, use the LDAPS protocol in the URL.
   - **Root Context:** Defines the LDAP naming context. Example: `ou=People, dc=niku, dc=com`
   - **Search User:** Defines the user name with the appropriate credentials for binding to the LDAP server.
   - **Password:** Defines the password.
   - **Search Filter:** Defines the search filter string (as defined in RFC 2254).
   - **Date/Time Format:** Defines the date and time format that the LDAP server uses.
   - **Group Name:** Enables group authentication. Enter the group name and at the Group Identifier field, enter the group ID.
   - **Allow non-LDAP users:** Indicates that access to Classic PPM is allowed using alternate authentication methods.
   - **Use Group Memberships:** Select this check box (clear by default) if you need to improve performance with the LDAP - Synchronize Obsolete Users job. The job uses group memberships in the synchronization and requires a reverse relationship from users to groups in your LDAP. The default value is `memberOf`.
   - **Group Identifier on Users:** If you need to specify another value besides the default `memberOf` attribute, enter the group identifier supported by your LDAP here.

> [!tip]
> Use Group Memberships and Group Identifier on Users are available in the 15.5.1.1 patch.

5. Click Save.
6. Stop and restart all Classic PPM services:
   a. Click Home, All Services.
   b. Click the Select All icon to select the check box next to each service, and click Stop.
   c. Click the Select All icon to select the check box next to each service, and click Start.
7. Click Save.
8. In CSA, click the Application tab.
9. In the Application Server section, select Use LDAP, and click Save.

## LDAP Synchronization

The following LDAP synchronization jobs work together to synchronize Classic PPM with LDAP:

**LDAP - Synchronize New and Changed Users job:**
This job synchronizes LDAP records with Classic PPM records by synchronizing users added to the LDAP Classic PPM group and making them active on the Classic PPM server. It stores the last date and time the job ran successfully in the `CMN_DIRECTORY_SERVERS` database table. The job synchronizes only recently created or changed user entries where the timestamp is greater than the `CMN_DIRECTORY_SERVERS.LAST_SYNC_DATE` value.

**LDAP - Synchronize Obsolete Users job:**
This job inactivates users removed from the LDAP Classic PPM group on the LDAP server or whose record no longer contains the chosen search attribute. This job does not verify whether a user found in the LDAP group is active or inactive in LDAP. To inactivate users in Classic PPM using this job, remove the users from the LDAP group or remove the search attribute specified in CSA.

Both jobs function properly if you have correctly configured the LDAP Server and LDAP Attribute Mapping sections in CSA. A schedule is required for each job.

> [!note]
> Best Practice: Run these jobs nightly.

> [!note]
> To synchronize the database with the directory server, delete all rows from the `CMN_DIRECTORY_SERVERS` database table and run the background job again. You can also run the job for a specific group so that only the records for those users are affected.

### Force the LDAP - Synchronize New and Changed Users Job to Perform a Full Synchronization

Follow these steps:
1. Delete the row from the `CMN_DIRECTORY_SERVERS` database table.
2. Run (or schedule) the job again.

## Troubleshoot LDAP

Common LDAP issues and how to address them:

- To debug the LDAP authentication process, enable debug messages that the security component logs. Stop all background services except the one on which you are enabling debug messages. Restart the background service so that the changes take effect and see the log file (bg-ca.log).
- When you review the Classic PPM logs for error messages, LDAP-specific error codes can display.

> [!note]
> See your third-party LDAP documentation for descriptions of LDAP-specific error codes.

**If you cannot log in to Classic PPM using an LDAP username and password, check:**
- Are you using an active LDAP account that also exists as an active account in Classic PPM?
- Have you enabled the LDAP configuration by selecting the Use LDAP field on the application server properties page in CSA?
- Did you enter the correct user ID in the Search User field and the correct password in the Password field on the security server properties page in CSA?
- Refer to the log files for more specific messages.

Note: Processing time for the LDAP synchronization jobs depends on the number of users loaded from the directory service. Large numbers of users can slow processing times.

### Troubleshoot LDAP Sync Jobs

When an LDAP synchronization job or authentication process does not work as expected:
- Check the LDAP synchronization log files in the `/niku/Clarity/logs/ldapsync` directory.
- Check the `*users*.xml` file. This file contains a list of user names extracted from the LDAP server. If this file is missing, the communication between Classic PPM and the LDAP server was unsuccessful.
- Check the `*sync*.xml` file. This file contains the results from a gateway user import session. If this file is missing, the communication between Classic PPM and the gateway was unsuccessful.
- Enable debug messages in the security component:
  a. Edit `bg-logger.xml` and add the `com.niku.security` category.
  b. Set the priority to debug.
  c. Restart the Clarity background (bg) service so that the changes take effect.
  d. Check the `bg-ca.log` file.
  e. If you have multiple bg services in your cluster, shut down all but one to ensure the job runs on the server you are debugging.

### Check the LDAP Synchronization Logs

Check the LDAP synchronization transaction logs in: `<Clarity Home Directory>/logs/ldapsync`

**Log files for New and Changed Users jobs:**
- `ldapusers_nm_*.xml`: List of users found in the directory server to be synchronized with Classic PPM.
- `ldapsync_nm_*.xml`: List of Success/Error/Warning messages for this sync job.

**Log files for the Synchronize Obsolete Users job:**
- `ldapusers_ia_*.xml`: List of users to be inactivated in Classic PPM.
- `ldapsync_ia_*.xml`: List of Success/Error/Warning messages for this sync job.

### Enable Debugging Messages

Follow these steps:
1. Log in to CSA.
2. Click Home, Servers.
3. Click the Logs icon for the server you want to enable debugging messages.
4. Click the Edit Configuration sub tab.
5. In the Categories section, click Add Category.
6. Enter the following value for the new line item:
   - Name: `com.niku.security`
   - Priority: Select Debug from the drop-down.
7. Save the changes. The debugging messages are enabled.

## Configure LDAP and SSL

When an LDAP server is running with SSL, you are required to configure LDAP and SSL together. The Classic PPM administrator installs the trusted security certificate for the LDAP server on the computer that is running the Clarity Background (bg) services.

To install the certificate, use the keytool that ships with the Java 7 JDK. Issue the following commands from the command prompt:

```
keytool -import -v -trustcacerts -alias <alias> -file <certificate file name> -keystore cacerts
```

**Example:**
```
$cd $JAVA_HOME/jre/lib/security
$keytool -import -v -trustcacerts -alias NikuLdapServer -file TrustedRootCert.der -keystore cacerts
```


---
**See also:** [[SSL Configuration]], [[SSO Configuration]]
**Parent:** [[_MOC Administration|Administration]]
