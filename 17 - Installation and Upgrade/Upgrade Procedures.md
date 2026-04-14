---
title: Upgrade Procedures
tags:
  - admin
  - howto
  - onprem
aliases:
  - Upgrade Tomcat
  - Upgrade Clustered
canonical: true
audience: admin
domain: installation
parent: "[[_MOC Install Upgrade]]"
---

# Upgrade Procedures (On-Premise)

## (On-Premise only) Upgrade an Apache Tomcat Single Server


Follow these steps:

1. Stop and remove all services:
   ```
   service stop app bg nsa beacon
   service remove app bg nsa beacon
   ```

2. Set up the application server by installing or upgrading needed third-party software.

3. From the command prompt, navigate to the directory where you want to unpack the Clarity installer file.

4. Run the following commands:
   ```
   mkdir temp
   cd temp
   ```

5. Extract `install.jar` from the installation media:
   ```
   jar -xvf <path of the installation media>/install.jar
   ```

6. Run the installation script:

   **UNIX:**
   ```
   chmod +x ./install.sh
   sh ./install.sh
   ```

   **Windows:**
   ```
   install.bat
   ```

7. If your upgrade spans two or more releases, the installer stores the most recent single version of the database as a backup:
   - `upgrade_backup_app.dmp`
   - `upgrade_backup_dwh.dmp`

   Application binary backups are also saved with the release version as a suffix (for example, `C:\clarity_14.4.0.234`).

8. To troubleshoot backup failure, check the `install.log` file. On successful backup, the log shows:
   ```
   7/25/17 10:18 AM (Echo) Application Database version 16.4.1 was backed up successfully.
   7/25/17 10:20 AM (Echo) DataWarehouse Database version 16.4.1 was backed up successfully.
   ```

9. To complete the command-line upgrade, follow the prompts. Upgrade property descriptions:

   | Property | Description |
   |---|---|
   | **Clarity Home Directory** | Directory in which to install Clarity. Created if it does not exist. |
   | **Clarity Temporary Directory** | Temporary directory used to copy shell and node scripts. |
   | **Clarity Target Directory** (upgrade only) | New install directory for the upgrade. Default is the current install directory. |
   | **JDK Home Directory** | The Java JDK home directory. |
   | **Beacon Multicast Address** | Default: `230.0.0.1`. Range: `224.0.0.0` to `239.255.255.255`. Recommend `239.x.x.x` subnet. |
   | **Beacon Multicast Port** | Default: `9090` |
   | **Beacon Client Port** | Server port number that the Beacon service uses. |
   | **Super User Command Prefix** (UNIX only) | Optional command prefix utility, such as `sudo`. |
   | **Super User Name** (UNIX only) | Optional replacement for the root superuser name. |
   | **Install CSA Locally** | Enter `true` for the administration server; `false` for others. |
   | **Tomcat Home Directory** | Apache Tomcat home directory. |
   | **CSA Web Port** | Default: `8090` |
   | **Enter password** | CSA password. Default: `admin` |
   | **Operator User Name** | Stored in the installation log. |
   | **Operator Email Address** | Stored in the installation log. |

10. Start **Clarity System Administration (CSA)**.
11. In the left navigation panel, click **Servers** and select the server.
12. Click each subtab on the **Properties** tab and complete the fields necessary for your configuration.
13. Start all services: click **All Services**, select the services, and click **Start**.
14. Verify that Clarity is accessible at:
    ```
    http://<server name>:<port>/niku/nu
    ```
    Default credentials: `admin/admin`.

---

## (On-Premise only) Upgrade an Apache Tomcat Clustered Server


Follow these steps:

1. Remove all services in the cluster.
2. Set up all servers by installing or upgrading needed third-party software.
3. Open a command prompt on the server and navigate to the directory where you want to unpack the Clarity installer file.
4. Run the following commands:
   ```
   mkdir temp
   cd temp
   ```
5. Extract `install.jar` from the installation media:
   ```
   jar -xvf <path of the installation media>/install.jar
   ```
6. Run the installation script:

   **UNIX:**
   ```
   chmod +x ./install.sh
   sh ./install.sh
   ```

   **Windows:**
   ```
   install.bat
   ```

7. Follow the prompts. See the upgrade property descriptions in the Single Server section above.

8. Start the Clarity System Administration (CSA) application.
9. Update the properties for each server in the cluster.
10. Verify that the database is accessible: open the **Database** subtab for a server and in the **Internal Connection** section, verify that the status is **Available**.
11. Start the **Beacon** service on all servers in the cluster.
12. In the left navigation pane, select **Distribute All**.

    > [!WARNING]
    > The Distribute All process is typically used to upgrade other servers in a cluster. However, if you are upgrading from a version earlier than Release 8.1.1, you are required to upgrade each server individually.

    > [!WARNING]
    > If upgrading from a release earlier than Release 8.1.1: Use FTP or otherwise transfer the `install.jar` file to the other servers.
    > Stop the local Beacon service before installing the new package. Install on each server using the `install.jar` file.
    > Restart the Beacon service when all servers are installed.

13. When the **Distribute All** command completes:
    a. Stop the Beacon service.
    b. Manually copy the following JAR files from the administration server to all remaining servers (replacing existing files in `$CLARITY_HOME/bin` AND `$CLARITY_HOME/lib`):
       ```
       <install_dir>/bin/wrapper.jar
       <install_dir>/lib/commons-logging.jar
       <install_dir>/lib/jgroups-all.jar
       <install_dir>/lib/log4j.jar
       <install_dir>/lib/nsa.jar
       <install_dir>/lib/union.jar
       ```

14. Click **Installation Overview** in the left navigation pane to verify that the installation steps completed successfully.
15. Review the `admin.log` file for general errors or custom Studio Query (NSQL) validation errors.
16. Start all services.
17. Verify that Clarity is accessible at: `http://<server name>/niku/nu`

---


---
**See also:** [[Pre-Upgrade Steps]], [[Post-Upgrade Steps]]
**Parent:** [[_MOC Install Upgrade|Installation and Upgrade]]
