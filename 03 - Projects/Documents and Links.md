---
title: Documents and Links
tags:
  - howto
aliases:
  - Project Documents
  - Project Links
  - Attachments
  - File Attachments
---

# Documents and Links

The **Documents** module in a project allows you to attach files and external URLs to keep all project-related resources accessible in one place. Documents and links are stored at the project level and are visible to all team members with access to the project.

%%Source: p1115-1121%%

---

## Overview

The Documents module serves as a lightweight document repository within Clarity. It is not a full document management system (DMS) — for enterprise DMS integration, see your administrator. Its primary purpose is to provide quick access to:

- Project charters and kick-off documents
- Requirements or specification files
- Meeting minutes or decision logs
- External tools, dashboards, or SharePoint pages
- Reference URLs (standards, guidelines, vendor portals)

> [!note] The Documents module must be enabled in the project's **Blueprint** to appear in project navigation. Contact your administrator if it is missing.

---

## Navigating to Documents

1. Open the project.
2. Click **Documents** in the left navigation panel.
3. The Documents module opens with tabs for **Files** and **Links** (or a unified list depending on configuration).

---

## Attaching a File

### Steps
1. In the Documents module, click **+ Upload** or **+ Attach File**.
2. A file picker dialog opens.
3. Select the file from your local drive.
4. After upload, fill in the document record fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | Display name in Clarity (defaults to filename) |
| **Description** | No | Brief description of the document's purpose |
| **Category** | No | Classification (admin-configured lookup) |
| **Version** | No | Version label (e.g., "v1.0", "Draft") |

5. Click **Save**.

> [!tip] Use the **Category** field to organize documents (e.g., "Charter", "Requirements", "Meeting Notes") so team members can quickly find the right type of document.

> [!warning] Check your instance's **file size limit** before uploading large files. The limit is set by your administrator in system settings. Very large files (videos, large datasets) should be stored in SharePoint or a shared drive and linked instead.

### Supported File Types
Clarity accepts most common file types including:
- Office documents: `.docx`, `.xlsx`, `.pptx`, `.pdf`
- Images: `.png`, `.jpg`, `.gif`
- Text: `.txt`, `.csv`
- Archives: `.zip`

Restrictions on executable files (`.exe`, `.bat`, `.ps1`) are typically enforced for security.

---

## Adding an External Link

External links point to URLs outside Clarity — SharePoint pages, Confluence wikis, Azure DevOps boards, vendor portals, etc.

### Steps
1. In the Documents module, click **+ Add Link**.
2. Fill in the link fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | Descriptive label for the link |
| **URL** | Yes | Full URL including `https://` |
| **Description** | No | What the link points to and why it is relevant |
| **Category** | No | Classification for organizing links |

3. Click **Save**.

> [!tip] Name links descriptively — "Sprint Board" is more useful than "https://dev.azure.com/..."

---

## Viewing and Downloading Documents

- In the Documents module, click a **file name** to download or preview it.
- Click a **link name** to open the URL in a new browser tab.
- The list shows name, category, description, upload date, and uploader.

---

## Editing Document Records

1. Find the document or link in the list.
2. Click the **More (...)** menu on the row.
3. Select **Edit**.
4. Update fields as needed.
5. Click **Save**.

> [!note] Editing the document **record** (name, description, category) does not replace the underlying file. To replace a file, delete the old record and upload the new version.

---

## Deleting Documents and Links

1. Click the **More (...)** menu on the row.
2. Select **Delete**.
3. Confirm.

> [!warning] Deleting a document record from Clarity also removes the stored file from the Clarity file store. This cannot be undone.

---

## Document Grid Columns

| Column | Description |
|--------|-------------|
| **Name** | Document or link display name |
| **Type** | File or Link |
| **Category** | Admin-configured classification |
| **Description** | Brief summary |
| **Added By** | User who uploaded/added it |
| **Added On** | Date of upload or creation |
| **Size** | File size (files only) |
| **Version** | Version label |

---

## Filtering Documents

Use the **Filter** panel to narrow by:
- Type (File / Link)
- Category
- Date range (Added On)
- Added By (uploader)

---

## Access and Permissions

| Right | What It Allows |
|-------|---------------|
| **Project - View** | View and download documents |
| **Project - Edit** | Upload files, add links, edit/delete document records |

All project team members with **Project - View** rights can see documents. Only users with **Project - Edit** rights can upload, edit, or delete.

---

## Best Practices

> [!tip] Establish a **naming convention** for documents (e.g., `[ProjectID]_[DocType]_[Version]`) to make documents searchable and organized.

> [!tip] Use **Links** for large files stored in SharePoint or other systems, rather than uploading large binaries to Clarity.

> [!tip] Add a **project charter** or **statement of work** as the first document when a project is created, so the team always has context.

---

## Related Notes
- [[Create a Project]] — Set up the project before adding documents
- [[Checklists]] — Track completion of deliverables
- [[_MOC Administration]] — Blueprint and file size configuration
- [[_MOC Projects]]
