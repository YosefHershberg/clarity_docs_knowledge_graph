---
title: CSA - Document Index, Search, Storage, and File Scanning
tags:
  - admin
  - classic
  - onprem
aliases:
  - Document Index
  - File Scanning
  - Filestore
  - Search Index
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# CSA: Document Index, Search, Storage, and File Scanning (On-Premise Only)

> [!info] On-Premise Only
> Use Classic PPM System Administration (CSA) to manage document indexing, filestore, and file scanning.

## Topics Covered

- Select the Method to Index Documents
- Recreate the Search Index
- Migrate the Filestore to the Database
- Set Up File Scanning

---

## Select the Method to Index Documents

Documents checked into the Knowledge Store or Document Manager must be indexed before users can search for them.

### Available Indexing Methods

| Method | Description | Use When |
|--------|-------------|----------|
| **Synchronous** | CSA indexes in-process as documents are checked in | You want documents searchable immediately after check-in |
| **Asynchronous** | The "Index contents and documents for searches" job indexes on a predefined schedule (default: every hour) | You want faster check-in performance and can tolerate a delay |

### Configure Indexing Method

1. Log in to CSA > **Home > Servers**
2. Click the Properties icon for the server
3. Click the **Documents and Search** sub tab
4. In **Search Server** section:
   - Leave **Use Synchronous Indexing** selected for synchronous indexing
   - Clear **Use Synchronous Indexing** for asynchronous indexing
5. Click **Save**
6. Restart all services

> [!note]
> If you are using a cluster setup, store your files on NAS storage.

---

## Recreate the Search Index

> [!caution]
> Recreate the index only when advised to do so by a Classic PPM upgrade, patch, or hotfix release. This is a lengthy process that should run only as an overnight job.

```bash
admin search recreate-index-files
admin search recreate-index-data
```

---

## Migrate the Filestore to the Database

> [!warning]
> Migration is a lengthy process. Run only as an overnight job. During migration, document links within Classic PPM do not work. Best practice: shut down the Classic PPM application server until migration completes.

1. Log in to CSA > Click the Properties icon for the server
2. Click the **Documents and Search** sub tab
3. Select the **Store Files in Database** check box and save
4. Restart the **app** and **bg** services
5. From the command line:
   ```
   admin search migrate
   ```
6. Open `admin.log` to confirm that files were successfully moved to the database

---

## Documents and Search Properties Reference

### Search Server Section

| Field | Description | Cluster Sync? |
|-------|-------------|--------------|
| Use Synchronous Indexing | Index in-process on check-in vs. queued async. Default: selected | Yes |
| Store Files in Database | Store files in DB instead of disk filestore. Default: cleared | Yes |
| Index Directory | Directory where documents are indexed. Must be outside the installation directory | Yes |
| Filestore Directory | Directory location of the filestore. Must be outside the installation directory | Yes |

### Document Manager Section

| Field | Description | Cluster Sync? |
|-------|-------------|--------------|
| File Scanning Executable | Full path to the executable that scans documents for viruses | Yes |
| File Store Directory Size Limit | File storage size limit per directory. New directory created when limit is reached | Yes |
| File Upload Size Limit | Size limit for uploaded documents (in MB). Default: 20 MB | Yes |

> [!warning]
> If you do not use the database as the document store, select a directory **outside** the Classic PPM installation directory for the filestore. Verify that the index directory is also outside the installation directory.

---

## Set Up File Scanning

You can enable default virus scanning for all documents uploaded using the Document Manager or a Studio attachment data type.

> [!note]
> Documents uploaded using XOG are **not** scanned for viruses.

### Step 1: Prepare the Virus Scanner

The file virus program must return the following status codes:
- `-1` — an error was encountered when running the virus program
- `0` — success; no virus was found
- `1` — a virus was found in the uploaded file

If the program does not return these codes, create a wrapper script that returns them. The executable must be runnable as:

```
/full_path/someChecker /JAVA.IO.TMPDIR/someFile
```

### Step 2: Set the Path to the Virus Scanner Executable in CSA

1. Log in to CSA > **Home > Servers**
2. Click the server name > **Documents and Search** sub tab
3. Enter the path to the virus scanner in the **File Scanning Executable** field
4. Save the changes

### Step 3: Enable File Scanning in Classic PPM

1. Log in to Classic PPM
2. Open **Administration > General Settings > System Options**
3. In **Document Manager Options**, select **Enable File Scanning of Documents**
4. Save the changes

---

## Related Notes

- [[CSA Overview]]
- [[Maintain and Monitor]]
- [[Security and Authentication]]

## Source

Clarity 16.4.1 documentation, pages 2953–2955.
