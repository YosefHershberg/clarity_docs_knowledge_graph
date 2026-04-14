---
title: Share and Search Documents
tags:
  - howto
  - classic
aliases:
  - Documents
canonical: true
audience: everyone
domain: classic
---

# Share and Search Documents

You can share and search for policies, procedures, project artifacts, drafts, requirements, guides, contracts, and other documents from two repositories:

- **Knowledge Store** — For generic documents accessible across the organization.
- **Document Manager** — For project or program-related documents.

You can also attach documents (such as a resume or application form) to a resource profile.

Access to specific documents and folders varies by permissions. Users with appropriate permissions can create folders, add documents, and edit both documents and folders.

To open the Knowledge Store: open **Home**, and from **Organization**, click **Knowledge Store**. If the link is not visible, contact your administrator.

> [!NOTE]
> Administrators can assign access rights at the Knowledge Store level and permissions at the folder and document levels.

---

## Access Rights

### Knowledge Store Access Rights

| Access Right | Description |
|---|---|
| **Knowledge Store - Administrate** | Access to all folders and documents. Only users with this right can create folders at the top level of the Knowledge Store tree. |
| **Knowledge Store - Access** | Create, edit, and view documents and folders you have access to. Delete folders you created and documents you added. |
| **Knowledge Store - View All** | View all documents. |

### Knowledge Store and Document Manager Permissions

When creating or administering a folder or document, you must identify users who need access and assign them a permission level. All Document Manager participants automatically receive **Read** permission.

| Permission | Description |
|---|---|
| **Read** | Open and check out current and prior versions of a document. |
| **Read/Write** | Open, read, copy, and move documents; check in/out; view history and versions; modify properties and permissions; attach processes; add new folders and documents. |
| **Read/Write/Delete** | All read/write permissions, plus move and delete documents and folders. |

---

## Folders

Folders can stand alone or serve as top-level containers for subfolders. Both can contain documents. To view folder actions, click the **Actions** menu on a Knowledge Store or Document Manager page.

When you create a subfolder, participants from the top-level folder automatically receive read/write access to it.

### Create a Folder for a Project or Program

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Projects** or **Programs**.
2. Open the project or program and click **Collaboration**.
3. Select **New Folder** from the folder **Actions** menu.
4. Complete the requested information and save your changes.

### Create a Folder for a Resource

**Steps:**
1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Open the resource or role and click **Document Manager**.
3. Select **New Folder** from the folder **Actions** menu.
4. Complete the requested information and save your changes.

---

## Manage a Folder

### Add a Document to a Folder

> [!NOTE]
> You can add a maximum of five files to a folder at one time.

**Steps:**
1. Open the Knowledge Store or Document Manager page.
2. Open the **Actions** menu for the folder and click **Add Documents**.
3. Select the files and complete the fields:
   - **Enable Check Out** — Allows resources with appropriate access to check out and edit the file.
   - **Enable Versioning** — Allows resources with appropriate access to create additional versions.
4. Click **Add**.

### Download Files from Folders

Use **Download All** or **Incremental Download** to download files from a folder to a local zip file. If these options do not appear in the **Actions** menu, you do not have the required permissions.

> [!WARNING]
> Enable the **Enable Document Download** setting before downloading files.

**Download All Files**

**Steps:**
1. Open the Knowledge Store or Document Manager page.
2. Open the **Actions** menu for the folder and click **Download All**.

> [!NOTE]
> If the file size exceeds your administrator's maximum, download a subset instead.

3. Save the zip file.

**Download Files Incrementally**

Downloads only files that have changed since your last download plus files not yet downloaded.

**Steps:**
1. Open the Knowledge Store or Document Manager page.
2. Open the **Actions** menu for the folder and click **Incremental Download**.

> [!NOTE]
> If the size exceeds the download maximum, download one file at a time.

3. Save the zip file.

### Edit Folder Properties or Permissions

Resources added to a folder are automatically grouped as participants with read/write access. The folder creator automatically receives read, write, and delete access.

**Steps:**
1. Open the Knowledge Store or Document Manager page.
2. Open the **Actions** menu for the folder and do one of the following:
   - Click **Properties** to edit folder properties.
   - Click **Permissions** to edit folder permissions.

> [!NOTE]
> Select **Cascade Permissions** to transfer rights to all documents and subfolders within the current folder.

3. Save your changes.

---

## Manage Documents

### Check Out Documents

To edit a document, check it out. When finished, check it back in. If versioning is enabled, a new version is created automatically.

**Steps:**
1. Open the Knowledge Store or Document Manager page.
2. Locate the document and from the document **Actions** menu, click **Check Out**.
3. Save the document to your desktop and select a location.
4. Click **OK**.
5. (Optional) To undo a check out, select **Undo Check Out** from the document **Actions** menu. Only the user who checked out the document can undo it. This unlocks the document for others.
6. To check back in with changes, click **Check In** from the document **Actions** menu and browse for the updated file.

### Edit the Document Properties or Permissions

**Steps:**
1. Open the Knowledge Store or Document Manager page.
2. Open the **Actions** menu for the document:
   - Click **Properties** to edit document properties.
   - Click **Permissions** to edit document permissions.
3. Save your changes.

### Copy or Move a Document

**Steps:**
1. Open the Knowledge Store or Document Manager page.
2. Locate the document and from the document **Actions** menu, click **Copy** or **Move**.
3. Select the destination folder in the **Select Placement** section.
4. Select the **Notify Resources/Groups** check box to notify users with access about the action.
5. Click **Copy**.

### Work with Document Versions

When versioning is enabled, a new version is saved each time the document is checked in. You can open previous versions (read-only) or copy a specific version to another folder.

**Steps:**
1. Open the Knowledge Store or Document Manager page.
2. Locate the document and from the document **Actions** menu, click **Versions**.
3. Open the document version **Actions** menu and select **Open** or **Copy**.

### Work with Document Processes

Document processes are useful for routing documents through an approval process. A process can link to an associated project or program and send notifications and action items to project roles and resources.

- **Available Processes** — Lists all document-related processes your administrator created. Use this page to start or delete a process.
- **Initiated Processes** — Lists in-progress or completed processes. Use this page to cancel a process.

**Steps:**
1. Open the Knowledge Store or Document Manager page.
2. Locate the document and from the document **Actions** menu, click **Processes**.
3. Click **Available**.
4. Select the process and click **Start** or **Delete**.

---

## Search for Documents

### Basic Global Search

Use the **Global Search** tool on the global toolbar to search for documents at any time.

> [!NOTE]
> By default, 5 minutes elapse before newly added information can be searched. Your administrator can change this interval.

Search behavior:
- Do not use a wildcard character (`*` or `?`) as the first character of your search.
- Search is not case-sensitive.
- Without quotation marks, the application searches for documents containing any of the words in any order.
- With quotation marks (e.g., `"Resource Profile List"`), only exact matches are returned.
- Do not use these characters in basic searches: `@ = [] {} <>`
- Results include only items you have rights to view.

### Refine a Search with Advanced Criteria

Click the **Search** icon, then click **Advanced** to set additional criteria. The **mode** field controls how words are matched:
- **All Words** — Documents matching all search words in any order.
- **Any Words** — Documents matching any search word.
- **Exact Phrase** — Documents matching all words in the specified order.

---

## Search Tips

### Use Wildcard Characters

| Wildcard | Usage | Example |
|---|---|---|
| `?` (single character) | Matches one character | `te?t` matches *text* or *test* |
| `*` (multiple characters) | Matches zero or more characters | `test*` matches *test*, *tests*, *tester* |

You can also use wildcards in the middle of a term: `te*t`

### Use Boolean Operators

Enter Boolean operators in **ALL CAPS**.

| Operator | Description | Example |
|---|---|---|
| `OR` or `\|\|` | Default; matches either term | `"jakarta apache" OR "jakarta"` |
| `AND` or `&&` | Matches documents containing both terms | `"jakarta apache" AND "jakarta CAPPM"` |
| `+` (required) | Term must exist in the document | `+"jakarta CAPPM"` |
| `NOT` or `!` | Excludes documents containing the term | `"jakarta apache" NOT "jakarta CAPPM"` |
| `-` (prohibit) | Excludes documents containing the term | `"jakarta apache" - "jakarta CAPPM"` |

> [!NOTE]
> The `NOT` operator cannot be used with a single term — `NOT "jakarta apache"` returns no results.

### Form Subqueries

Use parentheses to control Boolean logic:

```
("jakarta" OR "apache") AND "website"
```

This finds documents containing "website" and either "jakarta" or "apache."

### Escape Special Characters

Use a backslash (`\`) before special characters. For example, to search for `(1+1):2`:

```
\(1\+1\)\:2
```

---

## Running Jaspersoft Reports Inside Classic PPM

You can run, schedule, share, check status, and view Jaspersoft Studio reports inside Classic PPM via **Home > Reports and Jobs**.

> [!NOTE]
> In Advanced Reporting, some input controls appear to have default values when they are just the first items in a list. In Classic PPM, these same filters display correctly without apparent default values.

### Schedule Reports with Date-Based Filters

Use relative date expressions to schedule reports based on a date range relative to the current system date. Format: `<Keyword>+/-<Number>`

- `<Keyword>` — Time span: `DAY`, `WEEK`, `MONTH`, `QUARTER`, `SEMI`, `YEAR`
- `+` or `-` — Before or after the selected date
- `<Number>` — Number of time spans to include

**Examples:**
- Previous month: `MONTH-1`
- Next month: `MONTH+1`

---

## Related

- [[_MOC Classic PPM]]

%%Source: p2079-2086%%
