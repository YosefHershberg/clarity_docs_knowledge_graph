---
title: Integrate with MSP or Open Workbench
tags:
  - admin
aliases:
  - MSP and OWB Integration
canonical: true
audience: admin, dev
domain: integrations
---
# Integrate with MSP or Open Workbench

You can install optional client applications including **CA Open Workbench (OWB)** and **Microsoft Project (MSP)**. Common installation scenarios, including silent installations, are included.

> [!NOTE]
> To reduce unexpected behavior or errors, set the same language in the integrated OS, components, and applications. For example, set the same language in Microsoft Project, the MSP interface connector, Microsoft Windows, your web browser, and Classic PPM.

## Common Client Application Installation Scenarios

| Installation Scenario | Local | Admin | Client | Push |
|---|---|---|---|---|
| Install Client Applications from Clarity | Yes | No | No | No |
| Install Client Applications from the Clarity Installation Media | Yes | Yes | No | No |
| Install Client Applications from the File Server | Yes | No | Yes | Yes |

**Installation types:**

- **Local** — Files are installed locally on the user client workstation
- **Admin** — Files are installed on a network drive for client installation
- **Client** — Most files remain on a network shared drive; a minimum number of files are installed on the user client workstation
- **Push** — A third-party tool (such as Microsoft SMS or IBM Tivoli) distributes the client application as either a local or client installation

> [!NOTE]
> - For more information about configuring and using the Classic PPM Microsoft Project Interface, see MSP: Manage Projects with Microsoft Project
> - For more information about configuring and using CA Open Workbench, see OWB: Manage Projects with Open Workbench

## Install Client Applications From Classic PPM

You can download and install Open Workbench and the Classic PPM Microsoft Project Interface directly from Classic PPM.

**Steps:**

1. Log in to **Classic PPM**
2. Open **Home**, and from **Personal**, click **Account Settings**
3. Click **Software Downloads**
4. Download one of the following applications:
   - **Open Workbench**
   - **Classic PPM Microsoft Project Interface** — click the download link for Microsoft Project Interface **x86** or **x64**, depending on your version of Microsoft Project (requires the **Software Download - Microsoft Project Interface** access right)
5. Save the file to a local drive or start the installation immediately
6. To install, run the appropriate command:
   - **Open Workbench:**
     ```
     <download drive>:\<downloadpath>\wbsetup.exe
     ```
   - **Classic PPM Microsoft Project Interface:**
     ```
     <download drive>:\<downloadpath>\mspsetup.exe
     ```

## Silent Installation of Microsoft Project Interface From Classic PPM

The download package includes the Microsoft Project Interface with two installation drivers (new and legacy) and Schedule Connect.

> [!NOTE]
> Select the same language for MSP, the MSP interface, Classic PPM, and Microsoft Windows.

**Steps:**

1. Log in to **Classic PPM**
2. Open **Home**, and from **Personal**, click **Account Settings**
3. Click **Software Downloads**
4. Click the download link for **Microsoft Project Interface (x86)** or **(x64)**, depending on your version of Microsoft Project
5. Run the command to install the application:
   ```
   <download drive>:\<downloadpath>\mspsetup.exe
   ```
6. Navigate to the `%Program Files%\Classic PPM Setups` folder and copy `consetup.exe` and `mspsetup.exe`
7. Log in to the computer where you want to install the Microsoft Project Interface
8. Copy the `consetup.exe` and `mspsetup.exe` files to that computer
9. Run the command to install the MSP Interface application:
   - **32-bit computer:**
     ```
     mspsetup.exe /s /v"/qn
     ```
   - **64-bit computer:**
     ```
     mspsetupx64.exe /s /v"/qn
     ```
10. (Optional) Install and generate logs in the current directory:
    - **32-bit:** `mspsetup.exe /s /v"/qn /log mspsetup.log"`
    - **64-bit:** `mspsetupx64.exe /s /v"/qn /log mspsetup.log"`
11. (Optional) Install and generate logs in a specific folder:
    - **32-bit:** `mspsetup.exe /s /v"/qn /log c:\mylogs\mspsetup.log"`
    - **64-bit:** `mspsetupx64.exe /s /v"/qn /log c:\mylogs\mspsetup.log"`
12. Install the add-in driver using the appropriate command:

    | Driver Type | Architecture | Command |
    |---|---|---|
    | New Add-In driver | 32-bit MSP | `msiexec.exe /i "<installdir>\CAClarityAddinXML32.msi" TARGETDIR="{INSTALLDIR}\CAClarityAddIn" /qb` |
    | New Add-In driver | 64-bit MSP | `msiexec.exe /i "<installdir>\CAClarityAddinXML64.msi" TARGETDIR="{INSTALLDIR}\CAClarityAddIn" /qb` |
    | Legacy Add-In driver | 32-bit MSP | `msiexec.exe /i "<installdir>\CAClarityAddinLegacy32.msi" TARGETDIR="{INSTALLDIR}\CAClarityAddIn" /qb` |
    | Legacy Add-In driver | 64-bit MSP | `msiexec.exe /i "<installdir>\CAClarityAddinLegacy64.msi" TARGETDIR="{INSTALLDIR}\CAClarityAddIn" /qb` |

    > [!NOTE]
    > `<installdir>` represents the Add-In driver installation directory. The default location is `%Program Files%\CA\PPM\Clarity MSPInterface\addIn`.

13. Run the command to install **Schedule Connect**:
    - **32-bit:** `consetup.exe /s /v"/qn`
    - **64-bit:** `consetupx64.exe /s /v"/qn`

## Silent Installation of Open Workbench From Classic PPM

**Steps:**

1. Log in to **Classic PPM**
2. Open **Home**, and from **Personal**, click **Account Settings**
3. Click **Software Downloads**
4. Click the **Open Workbench** link and download the application
5. Run the file to install the application:
   ```
   <download drive>:\<downloadpath>\wbsetup.exe
   ```
6. Navigate to the `%Program Files%\Classic PPM Setups` folder and copy `consetup.exe` and `owbsetup.exe`
7. Log in to the computer where you want to install Open Workbench
8. Copy the `.exe` files to that computer
9. Run the appropriate commands:

   **Install the application:**
   ```
   owbsetup.exe /s /v/qn
   consetup.exe /s /v/qn
   ```

   **Install and generate logs in the current directory:**
   ```
   owbsetup.exe /s /v"/qn /log owbsetup.log"
   consetup.exe /s /v"/qn /log owbsetup.log"
   ```

   **Install and generate logs in a specific folder:**
   ```
   owbsetup.exe /s /v"/qn /log c:\mylogs\owbsetup.log"
   consetup.exe /s /v"/qn /log c:\mylogs\owbsetup.log"
   ```

## Install Client Applications From the Classic PPM Installation Media

> [!NOTE]
> On-Premise only. Broadcom recommends installing the same MSP language that is set as the Windows user locale.

Navigate to the following directories on the installation media:

- **Open Workbench:**
  ```
  <drive>:\Clients\Open Workbench\owbsetup.exe
  ```
- **Classic PPM Microsoft Project Interface:**
  ```
  <drive>:\Clients\MSPInterface\Legacy\mspsetup.exe
  ```
  or
  ```
  <drive>:\Clients\MSPInterface\New\mspsetup.exe
  ```
- **Add-In:**
  ```
  %Program Files%\CA\PPM\Clarity MSPInterface\addIn\setup.exe
  ```
- **Classic PPM Schedule Connect:**
  ```
  <drive>:\Clients\ScheduleConnect\consetup.exe
  ```

## Install Client Applications From a File Server

You can install Open Workbench or the Classic PPM Microsoft Project Interface with Classic PPM Schedule Connect from a file server by creating a network installer.

**Key points:**

- Install each client into its own empty network directory
- No registry settings are changed; no programs are registered as installed on the system
- Select the same language for MSP, the MSP interface, Classic PPM, and Microsoft Windows
- To remove a file server installation, delete the files from the network drive

**Steps:**

1. Create a network installer by running one of the following installation scripts:

   - **Open Workbench:**
     ```
     <drive>\Clients\Open Workbench\Owbsetup.exe /a
     ```
   - **Classic PPM Microsoft Project Interface (Legacy):**
     ```
     <drive>\Clients\MSPInterface\Legacy\mspsetup.exe /a
     ```
   - **Classic PPM Microsoft Project Interface (New):**
     ```
     <drive>\Clients\MSPInterface\New\mspsetup.exe /a
     ```
   - **Add-In:**
     ```
     %Program Files%\CA\PPM\Clarity MSPInterface\addIn\setup.exe
     ```
   - **Classic PPM Schedule Connect:**
     ```
     <drive>\Clients\ScheduleConnect\scheduleconnectsetup.exe /a
     ```

2. Files are extracted and copied to the network folder
3. Execute the following command:
   ```
   msiexec /package "Clarity Microsoft Project Interface.msi" /qn INSTALLDIR=p:\yourinstalldir
   ```
4. Follow the on-screen instructions
5. Perform the push client application installation

### Client Application Installation Types

After installing from the file server, the following installation types are supported:

- **Local**
- **Client workstation**
- **Push**

## Install Client Applications Locally or From a Client Workstation

**Steps:**

1. Start one of the following installation processes:
   - **Open Workbench:** `\\<fileserver>\clarity\owbsetup.exe`
   - **Classic PPM Microsoft Project Interface:** `\\<fileserver>\clarity\mspsetup.exe`
   - **Add-In:** `%Program Files%\CA\PPM\Clarity MSPInterface\addIn\setup.exe`
   - **Classic PPM Schedule Connect:** `\\<fileserver>\clarity\consetup.exe`

2. Specify one of the following installation options:

   > [!NOTE]
   > You can change this option only when running from an Administrative installation.

   - **Install Local** — Open Workbench or the Classic PPM Microsoft Project Interface is installed locally on your hard drive
   - **Run from the Network** — Open Workbench or the Classic PPM Microsoft Project Interface is installed on the network or on your workstation (not available if running from the Classic PPM Installation media)

3. If you selected **Run From the Network**, select **Data** and indicate where to create the data directory

   > [!NOTE]
   > The data directory is always installed locally for Open Workbench, even if you select **Run From the Network**.

4. Optional MSI commands:

   | Action | Command |
   |---|---|
   | Change default to Run From the Network | `msiexec /I "Open Workbench.msi" ADDSOURCE=ALL` |
   | Force default to Install Local | `msiexec /I "Open Workbench.msi" ADDLOCAL=ALL` |
   | Overwrite default installation directory | `msiexec /I "Open Workbench.msi" INSTALLDIR=C:\DEFAULT\DIR` |

## Perform Push Client Application Installations

First install your client applications from a file server before performing the push client application installation. Use the command-line properties in the following table, or an **.MST file**, to modify the `.msi` setup scripts.

**Registry group:** `HKEY_CURRENT_USER\Software\Niku\Schedulers`

| Registry Key | Value | Command-Line Property |
|---|---|---|
| `LoginName` | Classic PPM user name | `NIKUUSER` |
| `Host` | Classic PPM server name | `NIKUHOST` |
| `ProxyHost` | Proxy server name | `NIKUPROXY` |
| `ProxyLoginName` | Proxy server user name | `NIKUPROXYUSER` |
| `ProxyPassword` | Proxy server password | `NIKUPROXYPASSWORD` |
| `HostPort` | Classic PPM port (defaults to 80 when set to 0) | `NIKUPORT` |
| `ProxyHostPort` | Proxy server port (left empty when set to "0") | `NIKUPROXYPORT` |
| `UseSSL` | Use Secure Sockets Layer (0 = False, 1 = True) | `NIKUSSL` |

> [!NOTE]
> String entries are left empty by default; dword entries are zero (0) by default, except for HostPort which defaults to 80.

**Command-line examples:**

Example 1 — Set server and port:
```
msiexec /I "Clarity Schedule Connect.msi" NIKUHOST=myserver NIKUPORT=8080
```

Example 2 — Pass two properties using `consetup.exe`:
```
consetup.exe /v"NIKUHOST=myserver NIKUPORT=8080"
```

Example 3 — Pass a path property (include quotation marks around the path):
```
consetup.exe /v"INSTALLDIR=\"d:\My Install Dir\" NIKUHOST=myserver NIKUPORT=8080"
```

### Create a .MST File

1. Make a copy of `Open Workbench.MSI` and assign it a unique name
2. Open the new file in a tool that can modify MSI files (such as **Orca**)
3. Modify the file to add or change registry settings and to set global properties
4. Use the **Microsoft Windows Installer SDK** to create the `.mst` file

## Remove Client Applications

Remove any of the following client applications using **Add or Remove Programs** in the Microsoft Windows Control Panel:

- CA Open Workbench
- Clarity Microsoft Project Interface
- Clarity Schedule Connect
- Clarity XML Open Gateway

## Related
- [[_MOC Integrations]]

%%Source: p4875-4882%%
