---
title: CSA - Maintain and Monitor Classic PPM
tags:
  - admin
  - classic
  - onprem
aliases:
  - Maintain Classic PPM
  - Monitor Classic PPM
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# CSA: Maintain and Monitor Classic PPM (On-Premise Only)

> [!info] On-Premise Only
> All tasks described here are performed via CSA. See [[CSA Overview]].

## Topics Covered

- Start and Stop Services
- Open Server Ports
- IGMP Snooping
- Run Health Reports
- Check Log Files
- Back Up and Restore an Installation
- Compile and Analyze Oracle Database Objects
- Set File Directory Size
- Set GEL Tag Restrictions

---

## Start and Stop Services

1. Log in to CSA
2. Click **Home > All Services**
3. Select the check box next to each service to start or stop
4. Click **Start** or **Stop**

---

## Open Server Ports

Classic PPM requires the following open network ports:

| Port | Type | Description |
|------|------|-------------|
| 80 or 443 | Client to App Server | HTTP or HTTPS for the Classic PPM Application (app) service |
| 8090 | Client to App Server | HTTP port for CSA (Apache Tomcat only) |
| 1433 (MSSQL) or 1521 (Oracle) | Server to DB | JDBC port for database communication |
| 23791 | Server to App Server | RMI port for Classic PPM Application (app) service (Apache Tomcat only) |
| 23792 | Server to App Server | RMI port for CSA (Apache Tomcat only) |
| 9090 | Server to App Server | Multicast port for CSA |
| 9091 | Server to Server | RMI port for the Beacon service |
| Ephemeral | Server to Server | Short-lived port range required for multicast. Range varies by OS (IANA suggests 49152–65535) |

> [!tip]
> If you are using a software firewall, provide an exception at the executable level instead of the port level — this ensures dynamic ports for multicast communication remain open.

---

## IGMP Snooping

For multicast traffic to be delivered properly with Cisco Catalyst Ethernet switches, **disable IGMP Snooping** (or enable both IGMP Snooping and IGMP Querier) for the VLAN to which Classic PPM servers belong.

- With IGMP snooping, layer-2 switches make intelligent multicast forwarding decisions based on IP header contents
- The switch maintains a multicast group list and delivers multicast packets only to interfaces belonging to a specific group

---

## Run Health Reports

The legacy CSA health report tabs, buttons, and options were removed in release 15.3. See the [[Health Report]] note for the current approach.

---

## Check Log Files

Log files are stored by default in the `logs` directory under the Classic PPM home directory. Each server has its own logs directory. You can also select an alternate logs directory in CSA.

> [!note]
> Each cloned instance of a service has its own log files (e.g., app2, bg3, etc.).

### Key Log Files

| Log File | Format | Contents |
|----------|--------|----------|
| `admin.log` | Plain text | Record of administrative activities driven through the `admin` command or CSA |
| `app{id}-access-{date}.log` | Plain text | Session activity (HTTP/S requests) for the foreground service |
| `app{id}-ca.log` | Plain text | Primary log for all activities in the foreground service |
| `app{id}-dwh.log` | Plain text | Data warehouse-specific activity in the foreground service |
| `app{id}-process-engine.log` | Plain text | Events recorded by the Process Engine Monitor in the foreground service |
| `app{id}-system.log` | Plain text | System-level output (STDOUT) for the foreground service |
| `beacon-system.log` | Plain text | System-level output for the Beacon service |
| `bg{id}-ca.log` | Plain text | Primary log for all activities from the background service |
| `bg{id}-process-engine.log` | Plain text | Events from the Process Engine in the background service |
| `bg{id}-system.log` | Plain text | System-level output for the background service |
| `completion.log` | Properties | Record of installation/upgrade steps completed per component |
| `nsa-ca.log` | Plain text | Primary log for all activities from the system administration service |
| `upgrade-ca.log` | Plain text | Messages from individual Classic PPM upgrade scripts |
| `xogAdmin-ca.log` | Plain text | Activity from the XOG Admin client |

### Edit the Logger Configuration

1. Log in to CSA > **Home > Servers**
2. Click the Properties icon for the server
3. Click the **Logs** tab > **Edit Configuration** sub tab
4. Configure:
   - **Detect Log Configuration Changes Automatically** — for immediate effect
   - **Alternate Logs Directory** — absolute path; note that `admin.log`, `bootstrap.xml`, `scriptmetrics.xml`, `completion.log` always remain in the default directory
   - **Default Trace Threshold (Seconds)**
5. In **System Logging**: set max number and size of log files (default: 5 files, 5 MB each)
6. In **Kettle Logging**: set Kettle Log Level (Nothing / Error / Minimal / Basic / Detailed / Row level)
7. In **Process Engine Persistence Logging**: set level (Error / Warn / Info)
8. In **Categories**: set Name, Appender, Priority (Fatal > Error > Warn > Info > Debug > Trace > All)

> [!warning]
> Logging can decrease system performance, especially at Debug and Trace levels. Only enable additional logging when necessary and disable it as soon as it is no longer required.

### User-Specific Logging

Append the username to a standard logging category to enable user-specific logging:

```
trace.server.user.jsmith
```

---

## Back Up a Classic PPM Installation

Always back up before significant updates.

```
admin backup
```

Accept default values when prompted. The backup command copies the Classic PPM installation directory into a backup directory.

### Back Up an Oracle Database

```
expdp clarity/password FULL=y DIRECTORY=data_pump_dir DUMPFILE=clarity.dmp LOGFILE=myclarityexp.log SCHEMAS=clarity
```

Copy the `.dmp` and `init<SID>.ora` files to the backup directory.

### Back Up a Microsoft SQL Server Database

Use SQL Server Enterprise Manager. See Microsoft documentation for details.

---

## Restore a Classic PPM Installation

> [!caution]
> Only restore after exhausting all other options.

1. Stop all services: `service stop all`
2. Restore the database using standard database tools
3. Run the restore script from the backup directory:
   - Windows: `restore.bat`
   - Unix: `restore.sh`
4. Restart all services: `service start all`
5. (Optional) Reinstall older reports

---

## Compile and Analyze Oracle Database Objects

Run when:
- Exporting and importing the database to another server for test upgrades
- Reorganizing the database on a production server

```
admin db compile
admin db analyze
```

---

## Set File Directory Size

Set a file storage size limit at the directory level. When the limit is reached, a new sibling directory is automatically created.

1. Log in to CSA > **Home > Servers**
2. Click a server name
3. Click the **Documents and Search** sub tab
4. In **Document Manager Options**, set the **File Store Directory Size Limit**

---

## Set GEL Tag Restrictions

```bash
# Enable GEL tag restriction
admin general restrict-gel-tags

# Disable GEL tag restriction
admin general allow-gel-tags
```

GEL tag restrictions are **off** by default. Restart `app` and `bg` services after changing this setting.

**Example — properties.xml with GEL tags restricted:**
```xml
<system online="true" multiCurrency="false" licenseTypes="old" singleTenantMode="false" gelTagRestriction="on"/>
```

---

## Related Notes

- [[CSA Overview]]
- [[Health Report]]
- [[CLI Utilities]]
- [[Document Index and Storage]]

## Source

Clarity 16.4.1 documentation, pages 2945–2952.
