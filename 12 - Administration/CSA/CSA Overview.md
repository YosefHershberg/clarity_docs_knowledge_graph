---
title: CSA - Classic PPM System Administration Overview
tags:
  - admin
  - classic
  - onprem
aliases:
  - CSA
  - Classic PPM System Administration
---

# CSA: Classic PPM System Administration (On-Premise Only)

> [!warning] On-Premise Only
> Classic PPM System Administration (CSA) is available only for on-premise Clarity installations. SaaS customers do not have access to CSA.

## What Is CSA?

Use Classic PPM System Administration (CSA) to install, upgrade, configure, monitor, and verify the health of a cluster. CSA provides a web-based interface accessible at:

```
http://<hostname>:8090/niku/app
```

Log in with the password created during installation.

## The Beacon Service

To ensure that all servers are accessible, the **Beacon service** must be running on each server. The Beacon service enables remote, distributed management and allows you to:

- View and modify remote server properties
- Stop, start, and verify the status of services in the cluster
- Read remote server log files
- Run remote server health checks
- Distribute user interface customizations and product updates (patches, fixes, upgrades)

## Clarity Server URL Contexts

| Context | Purpose |
|---------|---------|
| `/niku` | Main Clarity application context |
| `/ppm` | REST web services context |
| `/pm` | Context for Clarity |
| `/reportservice` | Jaspersoft report server context |

## Configurable Server Properties

CSA exposes the following property groups:

- **CSA Server Properties** — Multicast address, port, Beacon settings, JDBC Ping
- **System Properties** — OS users, Java settings, multi-currency, mail server
- **Database Server Properties** — Vendor, connections (Oracle, MSSQL, PostgreSQL)
- **Application Server Properties** — Tomcat settings, SSL, LDAP, SSO, session, REST API
- **Documents and Search Properties** — Index method, filestore, file scanning
- **Reporting Properties** — Jaspersoft connection and configuration
- **Data Warehouse Properties** — DWH database connection, tablespaces
- **Security Properties** — SSL keystore, FIPS, LDAP, SSO, password encryption
- **Background Properties** — Background service memory and scheduler settings
- **Microservice Broker Properties** — PPMBroker configuration

## Services in a Classic PPM Installation

| Service | Description |
|---------|-------------|
| `app` | Clarity Application server (foreground) |
| `bg` | Clarity Background server (jobs, processes) |
| `beacon` | Beacon service for cluster discovery |
| `nsa` | Classic PPM System Administration service |
| `db` | Database service (if managed by Classic PPM) |
| `ppmbroker` | Microservice Broker (optional, for real-time processing) |

## Key CSA Sub-Topics

- [[Microservice Broker]] — PPMBroker for offloading real-time processing
- [[Report Service]] — Dedicated report execution service (new in 16.3.2)
- [[Maintain and Monitor]] — Start/stop services, ports, logs, backup/restore
- [[Document Index and Storage]] — Indexing, filestore, file scanning
- [[Security and Authentication]] — Passwords, LDAP, SSL, SSO, XSS, FIPS
- [[Application Servers and Clusters]] — Scaling, multicast, load balancers
- [[JDBC Ping Configuration]] — Alternative to multicast for cluster discovery
- [[CLI Utilities]] — Service and admin command-line utilities
- [[Memory and Performance]] — Memory management and performance tracking

## Related Notes

- [[_MOC Administration]]
- [[LDAP SSL SSO]]
- [[Health Report]]
- [[Configure DWH]]

## Source

Clarity 16.4.1 documentation, pages 2902–2903.
