---
title: MSP Integration Setup
tags:
  - classic
  - howto
aliases:
  - MSP Install
  - Microsoft Project Setup
canonical: true
audience: everyone
domain: classic
parent: "[[_MOC Classic PPM]]"
---


## Install and Configure the Microsoft Project Interface

### Required Software

Before installing the MSP Interface, verify that you have installed:

- A supported version of Microsoft Project
- A supported version of Microsoft .NET Framework for Windows
- A supported version of Microsoft Visual Studio Tools for Office Runtime

> [!IMPORTANT]
> If upgrading from a previous Clarity release, uninstall and reinstall the Clarity Microsoft Project Interface using the version available after upgrading Clarity (**Account Settings > Software Downloads**). Verify that data populates correctly in Microsoft Project.

### Access Rights

The following Classic PPM access rights are required:

| Purpose | Required Rights |
|---------|----------------|
| Open a project (read-only) | Project - View Management - All |
| Open a project (read/write) | Project - Edit Management - All |
| Create a project | Project - Create |
| Display resources/roles | Resource - Soft Book - All; Resource - Hard Book - All |
| Change resource allocations | Resource - Soft Book or Resource - Hard Book |
| Set a baseline | Project - Edit Management - All + Project - Modify Baseline |

> [!NOTE]
> If granted **Project - Modify Baseline** at instance or OBS level, you are implicitly granted **Project - Edit Management - All**. If granted at the global level, you must explicitly have both rights.

### Configure Internet Explorer (IE 11 Only)

1. In Internet Explorer, select **Tools > Internet Options > Advanced** tab
2. Scroll to the **Security** section
3. Clear the **Do not save encrypted pages to disk** check box
4. Click **OK**

### Configure Windows Explorer

1. In Windows Explorer, click **Organize > Folder and search options**
2. Click **View**
3. Clear the **Hide extensions for known file types** check box
4. Click **OK**

### Set the Trust Center Level in Microsoft Project

1. Open Microsoft Project and select **File > Options**
2. Click **Trust Center > Trust Center Settings > Add-ins**
3. Clear the **Require application add-ins to be signed by trusted publisher** option
4. Return to Trust Center and click **Macro Settings**
5. Select **Enable all macros** (can be changed after installation)

### Install Microsoft Project Interface with Schedule Connect

Schedule Connect provides synchronized communication, improved performance via XML, and SSL/proxy security.

> [!WARNING]
> Set the same language in Microsoft Project, the MSP interface connector, Windows, and Classic PPM to reduce unexpected behavior. Windows Regional Settings must always match the language of your MSP installation.

1. Close all instances of Microsoft Project
2. Download the MSP Interface:
- **From Classic PPM media**: Navigate to `Clients\MSPInterface\New` and run `mspsetup.exe`
- **From Classic PPM UI**: **Home > Personal > Account Settings > Software Downloads** ג€” requires the **Software Download
- Microsoft Project Interface** access right; click the compatible download link for x86 or x64
3. Select your language preference
4. Click **OK** to open the setup wizard
5. Follow the on-screen instructions
6. Click **Finish**

> [!NOTE]
> If an existing installation exists, click **Yes** when prompted to copy files to the same directory.

When upgrading Classic PPM, uninstall all of the following before upgrading:
- Clarity Microsoft Project Interface
- Clarity Schedule Connect
- ClarityAddin
- Open Workbench (if installed)

### Configure Windows Regional Settings

Match your Windows Regional Settings to your MSP language setting. Non-matching settings can cause integration problems with decimal values (% Complete, % Allocation) and errors with successors and predecessors.

1. In Windows 10: **Start > Settings > Time & Language > Region & language**
2. Under **Related settings**, click **Additional date, time, & regional settings**
3. In the **Region** dialog box, change the language to match your MSP language
4. Click **OK**

> [!TIP]
> Do not click **Additional settings** ג€” change only the Format language.

### Set Up the Server Connection

Schedule Connect remembers your settings. When logged in, a session is established and you do not need to log in again for the session.

> [!NOTE]
> If using federated SSO, you must have an open Classic PPM browser session in the environment you are connecting to.

1. Open Microsoft Project and click the **Classic PPM Integration** menu
2. Go to **Open**; enter your Classic PPM user name and password, and click **>>Setup**
3. Complete the connection fields:

| Field | Description |
|-------|-------------|
| **SSL Handling** | Full (all communications), Login (only logins), or None. Default: Full |
| **Clarity Host** | Name of the Classic PPM server (not the full URL). Example: `corpName` |
| **Port** | Port for the Classic PPM server. Example: `80` (use `443` for SSL) |
| **Proxy Host** | Name of your proxy server (required only for authenticating proxies) |
| **Proxy Port** | Port for the proxy server |
| **Proxy User Name / Password** | Credentials for the proxy server |

4. Click **OK**

> [!NOTE]
> Schedule Connect can connect to only one server at a time. To switch servers, update the connection settings and the Proxy server setting if needed.

### Configure Microsoft Project Options

1. Open Microsoft Project and select **File > Options > Schedule**
2. Set the **Calculation** option:
- **On**: MSP auto-schedules every time you open a project or tab out of a field
- **Off**: Manual calculation mode (fields like summary task roll-ups are not auto-updated)
3. Still on **Schedule**, verify the calendar options match Classic PPM:
- **Week starts on**
- **Fiscal year starts in**
4. Click **Advanced** and clear **Show links between projects dialog on open** in the Cross project linking section (incompatible with Classic PPM external dependencies)

### Configure Default Settings in Microsoft Project

These settings prevent scheduling inconsistencies after saving and reopening a project.

**Enable the following options** (**Tools > Options > Schedule**):

- Split in-progress tasks
- Tasks will always honor their constraint dates
- Calculate project after each edit
- (Optional) Show that scheduled tasks have estimated durations
- Select **Auto Scheduled** for **New tasks created**
- Select **Project Start Date** for **Auto scheduled tasks scheduled on**
- Select **Days** for **Duration is entered in**

**Disable the following options**:

- **New tasks are effort driven** (when a resource is added to a task, Classic PPM calculates ETC on new assignments independently)
- **Updating Task status updates resource status** (disable for projects using timesheets)
- (Optional) Inserted projects are calculated like summary tasks
- (Optional) Actual costs are always calculated by Project

> [!NOTE]
> If you set a task to 100% complete, remaining work is moved to actual work regardless of the Update Task Status setting.

### Configure Project Properties in Microsoft Project

**File > Info > Project Information > Summary tab** ג€” verify field mappings to Classic PPM:

| Microsoft Project Field | Classic PPM Field | Required |
|------------------------|-------------------|----------|
| Title | Project Name | Required |
| Manager | Project Manager | Required |
| Hyperlink Base | Guidelines | Required |
| Company | Department | Not required |
| Subject / Author / Category / Keywords / Comments | Optional | Not required |

> [!NOTE]
> Do not edit the **Title**, **Manager**, or **Hyperlink Base** fields directly.

### Configure Resource Leveling in Microsoft Project

1. Select **Tools > Resource Leveling** in Microsoft Project
2. Set **Leveling calculations** to **Manual**
3. (Optional) Set **Look for overallocations** on a **Day by Day** basis
4. (Optional) Set **Leveling order** to **Standard**
5. Disable **Leveling can create splits in remaining work**

---

Upgrades from the Legacy Interface to the New XML Driver

### New Microsoft Project Task Type Attribute

Clarity 15.5 introduced the **Microsoft Project Task Type** (`msp_task_type`) attribute on the Task object. Valid lookup values:

| Value | Task Type |
|-------|-----------|
| 0 | Fixed Units |
| 1 | Fixed Duration |
| 2 | Fixed Work |

The attribute is available in Classic PPM, Clarity, MSP, and the XOG.

### Support for Fixed Work Task Types

Previous releases supported only **Fixed Duration** and **Non-Fixed Duration** (using the Boolean `prIsFixed` attribute). The new XML driver delivers:

- A new Task Type attribute synchronized with the legacy Fixed Duration Boolean attribute
- An upgrade script that reads existing MPP files and populates the new Task Type field for projects saved with the legacy OLE driver
- Template support: project templates carry the MSP Task Type attribute into new projects

**Synchronization rules between Fixed Duration and msp_task_type:**

- If **Fixed Duration** is selected ג†’ MSP Task Type is set to Fixed Duration
- If **Fixed Duration** is false ג†’ MSP Task Type resets to Fixed Units
- If **MSP Task Type** is Fixed Duration ג†’ Fixed Duration check box is set to true
- If **MSP Task Type** is Fixed Units or Fixed Work ג†’ Fixed Duration is set to false
- If both attributes are set simultaneously, the legacy Fixed Duration attribute takes precedence

> [!NOTE]
> If no value is set in Clarity tasks for `msp_task_type`, the default task type defined in Microsoft Project is used when the task is opened.

**New attribute details:**

- **Attribute Name**: Microsoft Project Task Type
- **Attribute ID**: `msp_task_type`
- **API Attribute ID**: `mspTaskType`
- **Default Value**: No default value recommended
- **Lookup**: MSP_TASK_TYPE

### Upgrading Projects from Legacy OLE Driver

When opening a project saved with the legacy OLE driver using the new XML driver:

1. The XML driver temporarily opens the legacy MPP to read task types
2. The task types are merged into the new XML file
3. Any task type values from the legacy file are preserved
4. The temporary legacy MPP open is expected behavior

---


---
**See also:** [[MSP Synchronization]], [[MSP Field Mappings]]
**Parent:** [[_MOC Classic PPM|Classic PPM]]
