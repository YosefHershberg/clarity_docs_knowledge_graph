---
title: Clarity Studio Content Packages
tags:
  - dev
aliases:
  - Content Packages
canonical: true
audience: dev
domain: development
---

# Clarity Studio Content Packages

## Overview

Use content packages to deploy multiple versions of content between development, test, and production environments.
Content packages help you collect, export, and distribute custom content to internal teams or external third parties.
They provide an easy mechanism for importing and exporting Classic PPM content.

**What content packages enable:**
- Developers can import the package and continue development.
- Administrators can import the package as a content add-in, making it available to users.

**Example use case:** Develop a series of pages, portlets, and queries at one site and continue development at another site. You can include resources and roles in packages. Add or modify content and use versions to track multiple builds.

> [!NOTE]
> (SaaS only) Clarity in FedRAMP compliant environments does not support the creation or editing of HTML or interactive portlets from content packages or any other method. The **Add Content** and **Auto-Populate** options on the Details tab are not supported.

---

## Content Package Prerequisites

- Requires the **Content Package - Administer** and **Administration - Access** global access rights.
- To build and view content package JAR files, the Document Management System must be installed and configured.
- Content packages **do not support custom partition models** for content items. Only the default system partition configuration is migrated. To move content items from custom partitions, use the XOG.

---

## Create a Content Package

**Follow these steps:**
1. Open **Administration**, and from **Studio**, select **Content Packages**.
2. Click **New**.
3. Enter a **Name** and unique **Identifier** for the content package.
4. Select a **Status** field value to track your development stage (informational only, not used by any process).
5. In the **Version** field, enter the initial version in `xx.x.x` format (e.g., `1.0.0`). Use `1.0.1` for incremental updates, `1.1.0` for minor versions, and `2.0.0` for major versions.
6. In the **Content Provider Details** section:
   - Enter the **Contact Name** (owner or source of the content add-in).
   - Enter the **Email Address** for support contact.
   - (Optional) Enter a **Contact Phone Number**.
7. Click **Save**.

---

## Add Content Items to a Package

**Follow these steps:**
1. Open **Administration > Studio > Content Packages**.
2. Open a content package.
3. Click the **Details** tab and select **List** or **Hierarchy**.
4. Click the **Add Content** menu and select a content type:
   - Pages, Portlets, Queries, Resources or Roles, Lookups, Processes, Objects, Views
5. To add content by name, enter the name and select from matching entries. Click **Add**.
   - Select **Item** to add only the selected item.
   - Select **Item and descendants** to add the selected item plus all descendants.
6. To add by browsing, click **Browse**. Filter or click **Show All**, select checkboxes, and click **Add** or **Add and Select More**.
7. To auto-populate by ID, Name, or Source, click the **Auto Populate** menu. Use `*` as a wildcard. For example:
   ```
   *region*
   ```

> [!NOTE]
> - You **cannot** add references to System Restricted Lookups and Restricted Portlets. However, if an item refers to them and is added with descendants, the reference is included.
> - As a best practice, apply consistent naming conventions (e.g., `pj2.MyPortlet`, `pj2.MyQuery`) to make Auto Populate searches precise.

**To remove content items:** Click the **Details** tab, select **List**, select checkboxes, and click **Remove**. Original objects remain in the system and can be re-added.

---

## Include or Exclude Item References in Packages

Icons in the **Included** column indicate inclusion status:
- **No icon** - Always included; cannot be excluded (e.g., master objects, parent portlet pages).
- **Green check mark** - Included in the content package.
- **Red circle with white x** - Excluded from the content package.

**To exclude an item:**
1. Open **Administration > Studio > Content Packages**, click the **Hierarchy** icon.
2. Expand an entry to view descendants.
3. Select the item's checkbox and click **Exclude**.

**To include an item:**
1. Select the item's checkbox and click **Include**. The item and its ancestors are included.

> [!NOTE]
> When you change the inclusion status of an item, a check mark appears in the **Modified** column on the Package Details - List page.

---

## Build a New Instance of a Content Package

Building creates a JAR file with XML files for the selected content.

**Follow these steps:**
1. Open **Administration > Studio > Content Packages**.
2. Open the content package and verify the version. Update the **Version** field for a new version.
3. Click the **Details** tab.
4. Click the **Package** button. The **Processes** tab appears.
5. (Optional) Monitor the export progress or let it continue in the background.
6. Click the **Properties** tab, then click the **Package file** link. Package files follow this naming structure:
   ```
   <content_package_ID>_<version>_<datetime_stamp>.jar
   ```
   For example: `MyPackage1_2.0.1_20150929163055.jar`
7. To localize strings:
   - Download the Extracted Language File (`<content_package_ID>_nls.jar`).
   - Unjar it, translate the target language file strings, and create a JAR with updated strings.
   - Upload the **Translated Language File** by clicking **Choose File**, then click **Save**.
   - Click **Package** again to repackage with the new translated language file.
8. Right-click the package JAR file, select **Save link as**, choose a folder, and click **Save**.

> [!NOTE]
> In the exported XML, the version appears as a 4-digit number in the `revision` attribute. For example, version `12.0.3` appears as `revision="1203"`.

---

## Modify a Content Item in a Package

**Follow these steps:**
1. Open the content package and update the version number in sequence.
2. Change one or more content items.
3. Click **Details**, select **List**.
4. Select the modified items and click **Modifications > Set**. Check marks appear in the **Modified** column.

> [!NOTE]
> If no check mark appears, the item is new and was not present in the original baseline package.

---

## Migrate a Content Package for Development

Import content from packages developed internally or by third parties to continue development in another environment.

**Follow these steps:**
1. Build a new instance of the package.
2. Upload it as an add-in (see Upload a Content Package as an Add-in).

> [!WARNING]
> Select **Install in Migration Mode** to force all content items in the package to install and upgrade any existing content from a previous version. New content items overwrite old ones on the target system. After installation, all content items display the **Installed** status.

3. Open **Administration > Studio > Content Packages**, click **Upload Package**.
4. On the Upload Content Package page, click **Choose File**, select the JAR file, and click **Save**.
5. Click the **Properties** tab, verify the **Status** and **Version** fields, and click **Save**.
6. Verify content by navigating to known pages or portlets and logging in with different user roles.

---

## Upload a Content Package as an Add-in for Users

> [!NOTE]
> Requires the **Content Add-Ins - Administer** and **Administration - XOG** global access rights.

**Follow these steps:**
1. Open **Administration > Studio > Content Add-ins**.
2. Click **Upload Content Package**.
3. Click **Choose File** and select the JAR file.
4. (Optional) Select **Install in Migration Mode** to force installation and upgrade existing content.
5. Click **Save**. The **Processes** tab appears.
6. Monitor progress in the **Steps in Progress**, **Status**, **Start Date**, and **Finish Date** columns.
7. Click the **Properties** tab and verify:
   - **Status** shows **Installed**.
   - Version information is correct.
8. Click the **Items** tab to review installed content items. Check the **Status** field:
   - **Upgrade Ready** - A new version is available. Select items and click **Install** to apply.
   - **Not Installed** - New item not yet installed.
   - **Upgrade Pending** - Requires an application upgrade (legacy add-ins).

> [!TIP]
> The system cannot update an **Active** process via add-in. Set the process to **On Hold** before installing the add-in. Running instances are not disturbed. Then set the updated process back to **Active**.

---

## Content Add-in Version Information

| Field | Description |
|-------|-------------|
| Content Add-in Base Version | Original version when first installed |
| Clarity Base Version | Classic PPM version when first installed |
| Content Add-In Installed Version | Current installed version (differs from base if upgraded) |
| Clarity Installed Version | Classic PPM version active when the add-in was last installed |
| Content Add-In Installed Date | Date and time when installed |
| Sample Data Installed Date | Date when optional PMO add-in sample data was installed |

---

## Troubleshoot: Dependent Items Are Missing

**Symptom:**
```
...installation might fail because some of the dependent items are missing.
For more information, click 'Show Details' button.
```

**Cause:** One or more descendants for items in the package are missing from the export (e.g., a portlet without its associated query).

**Solution:**
1. Wait for the export status to appear as **Completed**.
2. In the **Messages** column, click the warning flag icon.
3. Click **Show Details**.
4. Identify the parent item in the **Message** column and the missing child in the **Exception** column.
5. Add the parent item and all its descendants to the package again and rebuild.

---

## Related
- [[_MOC Development]]

%%Source: p4137-4145%%


