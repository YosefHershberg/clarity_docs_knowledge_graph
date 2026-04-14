---
title: CSA - Service and Admin Command-Line Utilities
tags:
  - admin
  - classic
  - onprem
aliases:
  - service command
  - admin command
  - Classic PPM CLI
  - command-line utilities
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# CSA: Service and Admin Command-Line Utilities (On-Premise Only)

> [!info] On-Premise Only
> Use these command-line utilities to manage services and perform administrative tasks outside of the CSA web interface. You can also use them in scripts to automate system administration tasks.

## Topics Covered

- Service Command
- Admin Command
- Enable the System-Option Commands for CORS

---

## Service Command

Use the `service` command to manage services from the command line.

### Syntax

```
service start|stop|status|add|clone|remove|deploy|destroy {all|service name} [-info] [-verbose] [-help]
```

### Commands

| Command | Description |
|---------|-------------|
| `start` | Starts all or specified services |
| `stop` | Stops all or specified services |
| `status` | Displays the status of all or specified services |
| `add` | Activates all or specified services on a local server |
| `clone` | Creates a copy of the `app` or `bg` service on the same server. Ports, service names, and properties are incremented to avoid collisions |
| `remove` | Deactivates all or specified services on a local server |
| `deploy` | Disperses settings to servers in the cluster |
| `destroy` | Removes and destroys a previously cloned service. The **original** service cannot be destroyed |

### Service Names

| Name | Service |
|------|---------|
| `app` | Classic PPM Application server |
| `beacon` | Beacon service (cluster discovery) |
| `nsa` | Classic PPM System Administration |
| `db` | Database service |
| `bg` | Classic PPM Background server |
| `ppmbroker` | Microservice Broker |
| `report` | Report Service (new in 16.3.2) |

### Flags

| Flag | Description |
|------|-------------|
| `-info` | Displays informational messages |
| `-verbose` | Displays detailed messages |
| `-help` | Displays command Help for all or a specified option |

### Examples

```bash
# Start a specific service
service start nsa
service start nsa bg

# Stop specific services, then restart
service stop start beacon

# Stop multiple services
service stop beacon
service stop app bg nsa beacon

# Check status of all services
service status all

# Clone the app service
service clone app

# Remove services
service remove app bg nsa beacon

# Stop and remove all services on the current server
service stop remove all

# Deploy settings to cluster
service deploy

# Restart app and bg services (combined commands)
service stop start app bg
```

---

## Admin Command

Use the `admin` command to perform database, index, and system administration tasks:

- Prepare the system before and after an upgrade
- Analyze, export, and import databases
- Read XDM metadata and generate new files and resources
- Package Clarity System Administration archive files
- Create and recreate the search index
- Migrate documents from the file system to the database

### Syntax

```
admin xdm|search|package|db|backup|general|system-options [-info] [-verbose] [-help]
```

---

### xdm Option

Processes the Classic PPM XDM (only available on upgraded systems using XDM before upgrading):

| Option | Description |
|--------|-------------|
| `install` | Applies configuration changes |
| `validate` | Validates the XDM configuration |
| `gen-glossary` | Generates the glossary file |
| `apply-glossary` | Applies glossary changes |
| `force` | Completes processing even if errors are encountered |
| `all` | Applies XDM definition changes |

---

### search Option

Manages the document search index:

| Option | Description |
|--------|-------------|
| `migrate` | Migrates documents from the file system to the database |
| `recreate-index-files` | Recreates the files in the filestore |
| `recreate-index-data` | Recreates the index for all relational data in the `cscoll` collection |
| `index` | Immediately indexes files and all relational data in the queues |

```bash
# Recreate the search index (run as overnight job only)
admin search recreate-index-files
admin search recreate-index-data

# Migrate filestore to database
admin search migrate
```

---

### package Option

Packages the Clarity Application (app) or Clarity Background (bg) service in an archive file. The resulting package is named `app.ear` or `bg.ear`.

```bash
admin package app
admin package bg
```

---

### db Option

Manages database objects on the application server:

| Option | Description |
|--------|-------------|
| `compile` | Compiles all valid database objects (Oracle only) |
| `analyze` | Analyzes the database schema (Oracle only) |
| `upgrade` | Upgrades the database schema from version 13.0 or higher to the current release |
| `compare -Dreport.file=<path>` | Compares the database against the specified XML schema (Oracle only). Default file: `installdir/logs/compare-report.txt` |
| `compare-any` | Compares the database against another XML schema |
| `post-install` | Performs database post-install procedures |

```bash
# Compile and analyze Oracle database objects
admin db compile
admin db analyze
```

---

### backup Option

Creates a backup of the Classic PPM installation:

```bash
admin backup
```

When prompted, provide the target directory for the backup file. The backup command copies the Classic PPM installation directory into a backup directory.

---

### general Option

Manages configuration files and file ownership:

| Option | Description |
|--------|-------------|
| `view-config` | Displays the configuration file version in the database |
| `upload-all-config` | Uploads all needed configuration files (properties.xml, tenants.xml, hosts.xml, logger.xml, components.xml) to the database |
| `upload-config` | Uploads the `properties.xml` file to the database |
| `upload-config -Dfile=<filename>` | Uploads a specific configuration file (e.g., `logger.xml`) |
| `download-config` | Downloads `properties.xml` from the database |
| `download-config -Dfile=<filename>` | Downloads a specific configuration file (e.g., `hosts.xml`) |
| `apply-ownership` | Applies correct user and group ownership to all files in a directory (Unix only) |
| `restrict-gel-tags` | Sets `gelTagRestriction` property to `on` |
| `allow-gel-tags` | Sets `gelTagRestriction` property to `off` |

---

### system-options Option

Available in release 15.3.0.5, 15.4.1.1, 15.5, and newer. Lets you add or delete system options and values:

```bash
# Add a new system option value
admin system-options -add <option code> <option value>

# Add multiple values for a single option entry
admin system-options -add <option code> <option value> -multi

# Force-delete and re-create option entry
admin system-options -add <option code> <option value> -force

# List option values
admin system-options -list <option code>

# Delete a system option entry and value
admin system-options -delete <option code> <option value>
```

**Example — Configure CORS domains for the REST API:**

```bash
# Delete all current domains and seed data
admin system-options -delete CONTENT_SECURITY_DOMAINS

# Add allowed domains
admin system-options -add CONTENT_SECURITY_DOMAINS "'self'" -multi
admin system-options -add CONTENT_SECURITY_DOMAINS cppmxxxx.ca.com -multi
admin system-options -add CONTENT_SECURITY_DOMAINS ca.com -multi
admin system-options -add CONTENT_SECURITY_DOMAINS docops.ca.com -multi
admin system-options -add CONTENT_SECURITY_DOMAINS fonts.googleapis.com -multi

# List current values
admin system-options -list CONTENT_SECURITY_DOMAINS
```

> [!tip]
> After issuing system-options commands, refresh or flush all caches, especially `systemOptions` and `securityDomains`.

---

## Related Notes

- [[CSA Overview]]
- [[Maintain and Monitor]]
- [[JDBC Ping Configuration]]
- [[Microservice Broker]]

## Source

Clarity 16.4.1 documentation, pages 2996–3000.
