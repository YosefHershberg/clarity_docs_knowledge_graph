﻿---
title: Export Import or Migrate Advanced Reporting Content
tags:
  - howto
  - admin
aliases:
  - Export Import Content
---

# Export Import or Migrate Advanced Reporting Content


You can move your Jaspersoft reporting content from a development environment to a test or production environment. You can also move content from one Jaspersoft reports server to a newer version after an upgrade, or migrate content from multiple tenants across servers.

---

## Topics


- [[#Prerequisites]]
- [[#Export Content]]
- [[#Import Content]]
- [[#On-Premise Export Using the Command Line]]
- [[#On-Premise Import Using the Command Line]]
- [[#On-Premise Migrate Jaspersoft Advanced Reporting Content]]
- [[#On-Premise Synchronize the Context with Jaspersoft]]
- [[#View Database Schema Differences]]
- [[#Update Domain Schema]]
- [[#Update Domain Schema in Jaspersoft 9.0]]

---

## Prerequisites


- **Access Rights:** This functionality is available only to users with the **Advanced Reporting — Administer** access right. Migration does not require access to the system where the server is installed.
- **Review Dependencies:** Jaspersoft Studio reports and views often have dependencies on other resources (data sources, domains, input controls, queries, language bundles,
  images).
  An exported report includes all dependencies even if they are stored in folders not selected during export.
  The migration of content with dependencies creates the same folder structure on the target server. Imported content replaces any existing resources on the target server.

---

## Export Content


You can export individual resources or an entire folder of the repository.

**Follow these steps:**

1. Log in to the Classic PPM source environment.
2. Click **Home**, **Personal**, **Advanced Reporting**.
3. Select **View**, **Repository**.
4. To select more than one resource, press the **Ctrl** key. When viewing the repository, you can select an entire folder in the left panel.
5. Right-click the selected folder or resources and select **Export**. The **Export Resources** dialog appears.
6. (Optional) Change the default name of the zip file.
7. The export provides the following options:

| Option | Description |
|---|---|
| **Include report jobs** | Includes scheduled report jobs with any reports in your repository selection |
| **Include repository permissions** | Includes explicit permissions on all items. Clear this if you want exported items to inherit the permissions of the target repository. |
| **Include dependencies** | (Jaspersoft 6.4.2+) Includes dependencies. Clear this to export resources without full paths or dependencies so organization admins can import the resulting catalog. In Jaspersoft 6.2.1, the export.zip always contains all dependencies. |

8. Click **Export**. The server generates the zip file and your browser prompts you to save it. Depending on the size of your repository and the selected options, it might take several minutes to generate.

> [!warning]
> Resources are exported with their dependencies, even if the dependencies are not included in your selection.
> The export can be large and might take a long time to generate and download. During this time, the export operation can affect server performance.
> We do not recommend exporting large amounts of data.

---

## Import Content


After you export, you can import the exported zip file.

**Follow these steps:**

1. Log in to the Classic PPM target environment.
2. Click **Home**, **Personal**, **Advanced Reporting**.
3. Select **Manage**, **Organizations**.
4. In the left panel, right-click the target organization and select **Import**. The **Import** dialog appears.
5. Click **Browse** to select the zip file to import. The dialog allows only the zip archive format. You can only import files created by the export.
6. The import provides the following options:

| Option | Description |
|---|---|
| **Update** | Imports only resources that are new to the current organization (different URI) |
| **Skip user updates** | Keeps the current definition of any users that also exist in the imported organization |
| **Include themes** | Imports any themes that exist in the imported organization |

7. Click **Import**. The server uploads the zip file and imports its contents into the organization. If there are broken dependencies in the catalog, the server displays a message with three choices:

| Choice | Description |
|---|---|
| **Skip** | Does not import the resource with the broken dependency, but continues importing other resources |
| **Include** | Attempts to import the resource with the broken dependency. Succeeds if the dependency already exists in the destination; otherwise the resource is skipped and import continues. |
| **Cancel** | Stops the import operation |

8. (Optional) You can import into a different organization. If the source organization has a different ID than the target organization, the import merges the content into the selected organization. The following message appears:

```
The file being imported contains a top-level organization name that does not match the currently selected organization

Import file: <source organization ID>
Selected organizations: <target organization ID>
Content is merged into <target organization ID>
```

9. Click **Continue Import** to start the import.
   When merging organizations with the update option, the contents of the import override the target organization for any resource with the same name and location.
   The import might take a long time to upload and process. For this reason we do not recommend importing large amounts of data.

---

## On-Premise Export Using the Command Line


Jaspersoft super users and tenant administrators can use the export command to export all Jaspersoft Advanced Reporting content from the JasperReports server (the same or a
different instance).
Exported content can include tenant level data, folders, reports, domains, input controls, roles, users, server settings, or the public folder.

> [!note]
> Partial export of the Jaspersoft content is not supported with this command.

> [!warning]
> Do not use the `admin jaspersoft export` command to create a content zip file for use in upgrading Jaspersoft.
> Export the tenant-level data from the Jaspersoft server using either the Jaspersoft UI (**Manage**, **Server Settings**, **Export**) or the Jaspersoft export command
> (`js-export.bat` in `<JaspersoftInstaller>/buildomatic/`).

**Follow these steps:**

1. Stop the Jaspersoft server before using the export command.
2. Review any resource dependencies outside of the organization that can block the operation.
3. Open a command prompt and go to `install directory/bin`.
4. Execute the following command:

```
admin jaspersoft export [-orgName t1,t2,t3,...,tn] [-fileName zipfile name]
  [-includePublic=true] | [-includeServerSettings=true]
  -fromUserName <superuser> -fromPassword <superuser_password>
  -fromUrl <JSURL> -allOrgs -properties -overwrite
```

**Parameter descriptions:**

| Parameter | Description |
|---|---|
| `-orgName` | Organization IDs of the tenants to export (comma-separated). Omit to export only the public folder or server settings without any tenants. |
| `-fileName` | Name of the zip file for the export. You can specify a target directory path. |
| `-includePublic` | (Optional) Exports the public folders at the global level from the server. |
| `-includeServerSettings` | (Optional) Exports the server settings at the global level from the server. |
| `-fromUserName` | Super user Jaspersoft user name. |
| `-fromPassword` | Password for the Jaspersoft super user. |
| `-fromUrl` | URL of the source server. |
| `-allOrgs` | Exports all organizations from the Jaspersoft report server. |
| `-properties` | Name of a properties file containing the export command parameters. |
| `-overwrite` | Overwrites a previously created export zip file if it already exists. |

**The export command fails in the following cases:**

- Required parameters are missing.
- The include option folder name is not `public` (e.g., you specify `-includeTemp` instead of `-includePublic`).
- User credentials are not for the Jaspersoft super user.
- The `-orgName` parameter is included in the command, but tenants are not specified.

---

## On-Premise Import Using the Command Line


Jaspersoft super users and tenant administrators can use the import command to import all Jaspersoft Advanced Reporting content to the JasperReports server (the same or a different instance).

> [!warning]
> 1. You can only import the content if the organization IDs match between the export and import servers. You cannot import content exported from an organization with a different organization ID.
> 2. You can only import a content zip file that was exported using the command-line export command.

**Follow these steps:**

1. Stop the Jaspersoft Server.
2. Open a command prompt at `install directory/bin`.
3. Execute the following command:

```
admin jaspersoft import [-orgName t1,t2,t3,...,tn] [-fileName zipfile name]
  -toUserName <superuser> -toPassword <superuser_password>
  -toUrl <JSURL> -silent
```

**Parameter descriptions:**

| Parameter | Description |
|---|---|
| `-orgName` | Organization IDs of the tenants to import (comma-separated). If not specified, all tenants in the zip file are imported. |
| `-fileName` | Name of the zip file to import. If not specified, help information is displayed. |
| `-toUserName` | Super user Jaspersoft user name. |
| `-toPassword` | Password for the Jaspersoft super user. |
| `-toUrl` | URL of the target server. |
| `-silent` | Permits silent creation of tenants on the destination Jaspersoft report server. Without this parameter, you are prompted to create tenants. |

If the tenant names in the `-orgName` parameter and zip file do not match, the following prompt appears:

```
Tenant doesn't exist do you want to create? Y/N
```

- Enter **Y** to create new tenants and continue with the import.
- Enter **N** to cancel the import and exit.

> [!note]
> Partial import of Jaspersoft content is not supported with this command.

**The import command fails in the following cases:**

- Required parameters are missing.
- User credentials are not for the Jaspersoft super user.
- The content zip file is corrupted.
- An incorrect zip file (exported using the Jaspersoft UI or `js-export.bat` utility) is used for the import.

---

## On-Premise Migrate Jaspersoft Advanced Reporting Content


As a Jaspersoft administrator, you can export and import Jaspersoft Advanced Reporting content including views, reports, custom domains, dashboards, and their dependencies.
You can also migrate tenant level data, folders, reports, jobs, domains, input controls, roles, and users.
These migration options are helpful when moving custom advanced reporting content between test and production environments.

> [!note]
> To use these migration features and to update domain schema, apply Jaspersoft server cumulative patch 6.2.1_5.2.1.2.6.

The migrate command moves the Jaspersoft Advanced Reporting content to a different Jaspersoft server.

> [!warning]
> You can only migrate Jaspersoft Advanced Reporting content if the source and destination servers have matching organization IDs. You cannot migrate content between organizations that have different organization IDs.

### Migration Example


You have an environment with a single Jaspersoft Reports Server shared by multiple Classic PPM instances (tenants).
When the server needs to be updated to a newer version, all organizations and tenants on that server are upgraded. However, not all organizations may be ready to upgrade.
In this case, you can install Jaspersoft with the newer version on a different server, and then migrate selected organizations from the existing server to the new server.

**Follow these steps:**

1. Open a command prompt in the `install directory/bin` and execute the following command:

```
admin jaspersoft migrate [-orgName t1,t2,t3,...,tn] [-fileName zipfile name]
  [-includePublic=true] | [-includeServerSettings=true]
  -fromUserName <source user name> -fromPassword <source_password>
  -fromUrl <sourceURL> -toUrl <destination url>
  [-toUserName <destination user name>] [-toPassword <destination password>]
  -allOrgs -silent
```

**Parameter descriptions:**

| Parameter | Description |
|---|---|
| `-orgName` | Organization IDs of the tenants to migrate (comma-separated). Omit to migrate only the public folder or server settings. Use `-allOrgs` instead to migrate all tenants. |
| `-includePublic` | (Optional) Migrates the public folders at the global level from the server. |
| `-includeServerSettings` | (Optional) Migrates the server settings at the global level from the server. |
| `-fromUserName` | Super user Jaspersoft user name for the source tenant. |
| `-fromPassword` | Password for the Jaspersoft super user for the source tenant. |
| `-fromUrl` | URL of the source server. |
| `-toUrl` | URL of the target server. |
| `-toUserName` | Super user Jaspersoft user name for the destination tenant. |
| `-toPassword` | Password for the Jaspersoft super user for the destination tenant. |
| `-allOrgs` | Migrates all tenants from the Jaspersoft report server. |
| `-silent` | Permits silent creation of tenants on the destination server. Without this parameter, you are prompted to create tenants. |

If the tenant names do not match, the following prompt appears: `Tenant doesn't exist do you want to create? Y/N`

- Enter **Y** to create new tenants and continue the migration.
- Enter **N** to cancel the migration and exit.

2. Update the `properties.xml` file with the following information:
   - Destination Jaspersoft URL
   - Organization ID

3. The exported set of folders and files includes resources in the repository, such as reports and their dependencies, compressed in a single zip archive file.

> [!warning]
> The content of the zip file is not intended for external access. The zip file contains files in several private formats. The XML syntax is not publicly available and the data files are not meant to be accessed externally.

---

## On-Premise Synchronize the Context with Jaspersoft


After you migrate (or import) content to a target tenant, you can change the user profile attributes or the domain schema name for the Jaspersoft administrator user.
When content is moved from one Jaspersoft server to another in a different environment, the underlying Classic PPM server and database are also different.

This command adjusts the Jaspersoft configuration so that reports and other content work seamlessly.
It synchronizes the Classic PPM server and database details to the targeted Jaspersoft tenant, and updates the target tenant with user profile attributes and the domain schema name
from the source Classic PPM context for the Jaspersoft administrator user.

**Follow these steps:**

1. Update the `properties.xml` file for the Classic PPM instance that connects to the targeted Jaspersoft server or tenant with the following information:
   - Destination Jaspersoft URL
   - Organization ID

2. Select the target tenant name and user profile attribute values from the `properties.xml` file.
3. If you did not already generate the key store file, do it now before running the `syncPPMContext` command.
4. Run the following command from the Classic PPM target system after you import or migrate the tenant content:

```
admin jaspersoft syncPPMContext -userName <username> -password <password>
```

- `-userName`: Super user Jaspersoft user name for the Jaspersoft report server.
- `-password`: Password for the Jaspersoft super user.

> [!note]
> The migrate command fails if you include the `syncPPMContext` option and the credentials are not for the Jaspersoft super user.

---

## View Database Schema Differences


Organization IDs and database schema names in the source environment are typically different from the target environment. You can view information about the organization ID and database schema names.

1. Log in to Classic PPM.
2. Select **Administration**, **General Settings**, **System Options**.
3. View the **Advanced Reporting** section.

---

## Update Domain Schema


When resources are imported to a target server where database schema names are different from the source server, the resources do not work as expected.
This behavior occurs when domains are imported or included as a dependency. Domains keep references to the database schema from the source server.
We recommend updating the target server domain schema to eliminate any schema mismatch.

**Follow these steps:**

1. Log in to Clarity.
2. Click **Home**, **Personal**, **Advanced Reporting**.
3. Select **Manage**, **Update Domain Schema**.
4. Select the **Domain Name** from the target server that requires an update.
5. Select the **Domain Schema** corresponding to the database accessed by the domain:
   - **Clarity Database Schema:** For domains accessing the Clarity transactional database.
   - **Data Warehouse Database Schema:** For domains accessing the Data Warehouse database. Select this option for all out-of-the-box domains included in the Advanced Reporting content.
6. Click **Update**.

---

## Update Domain Schema in Jaspersoft 9.0


When exporting and importing a report or dashboard between two different servers, follow these steps:

1. From **Server A**, export the report with dependencies and Legacy Key.
2. Edit the Dependent Domain, export the Domain Design, and save the XML file.
3. In **Server B**, navigate to **Home** > **Manage** > **Organization** > **Import**.
4. Choose the exported file from Step 1 with Legacy Key.
5. Navigate to **Domains** and edit the Domain.
6. **Edit Domain** shows the Server A DWH schema, which is broken. Click **Confirm and delete items**.
7. Click **Import Design**, select the XML file saved in Step 2, and then click **Upload**.

---

## Jaspersoft Studio Error Troubleshooting


### "Operation cancelled" in the Dataset and Query Dialog


This message appears when the Dataset and Query Dialog is still searching for or retrieving metadata from the current data adapter while you select a different data adapter. The dialog often does not refresh the metadata from the new selection.

**Resolution:** Click **OK** to close the Dataset and Query Dialog, verifying that the desired data adapter is selected. Reopen the Dataset and Query Dialog. If you experience performance degradation, restart Jaspersoft Studio.

### `java.sql.SQLRecoverableException: IO Error: The Network Adapter could not establish the connection`


This message appears when the Advanced Reporting server is not available.

**Resolution:** Contact your system administrator to verify if the system is not running or if there is a network issue.

### `java.lang.NullPointerException` in the Data Preview Tab


This message appears in the following situations:

- An invalid class type is defined for one or more fields.
- The report query references parameters using Groovy built-in functions but the report language is not defined as Groovy.

**Resolution:** Verify that all fields have valid class types. If you are using Groovy built-in functions, verify that the report language is set to Groovy. In some cases, close and reopen Jaspersoft Studio.

---

## Related

- [[_MOC Advanced Reporting]]

%%Source: p3278-3287%%
