---
title: CSA - Configure JDBC Ping as Alternative to Multicast
tags:
  - admin
  - classic
  - onprem
aliases:
  - JDBC Ping
  - JDBCPing
  - CMN_JGROUPS_PING
---

# CSA: Configure JDBC Ping As An Alternative to Multicast (On-Premise Only)

> [!info] Available Since Clarity 15.3
> JDBC Ping is only available and supported on Clarity Release 15.3 or higher.

## Overview

As an alternative to network multicast, Clarity allows optional implementation of **JDBC-based messaging** at the database level using the **JGroups JDBC Ping discovery protocol**.

- JDBC Ping uses a common shared database to store information about cluster nodes for discovery
- Messages are delivered just like multicast, except JDBC handles delivery instead of multicast packets
- Ideal for cloud environments (AWS, Azure, Google Cloud) where multicast is disabled or restricted

> [!warning]
> Jaspersoft **cannot** use JDBC Ping. Clustered Jaspersoft environments must continue to use multicast. Single-server Jaspersoft instances use a direct JDBC database connection to PPM.

> [!tip]
> The abbreviation NSA (formerly Niku System Administration) is sometimes still used in documentation and files. NSA and CSA refer to the same tool.

---

## How JDBC Ping Works

When a node starts:
1. It queries the shared database for information about existing cluster members
2. It determines the coordinator
3. It asks existing Clarity nodes to join the cluster
4. It inserts its own information into the `CMN_JGROUPS_PING` table

Unlike multicast, **JDBC Ping does not require all servers to be on the same subnet**.

---

## JDBC Ping: Prerequisites

1. Verify all settings in a non-production environment (dev or test) before using in production
2. Ensure your configuration uses **either** multicast **or** JDBC Ping — you cannot mix them
3. If using JDBC Ping, ensure **all** Clarity services are configured to use JDBC Ping
4. Verify that all NSA passwords on all servers are set to the **same value**. Reset with:
   ```
   admin password
   ```
5. If a server has multiple IP addresses (multiple NICs), configure the Beacon to bind to a single specific IP address. Redeploy the Beacon service after any changes.
6. Verify that all services are in the same subnet (check with `ipconfig` on Windows or `ifconfig` on Linux)

---

## JDBC Ping: Configuration

> [!warning]
> Make entries in CSA and `properties.xml` carefully. A single net mask configuration mistake while provisioning a server can result in services not communicating with each other.

### Step 1: Stop All Services

1. Open CSA at `http://<ca_ppm_server>:<port>` (e.g., `http://ppm_server.my.org:8090`)
2. Click **Home > All Services** > Stop all services before making changes

### Step 2: Configure Each Server in CSA

For each server in the application cluster:

1. Click **Home > Servers** > click the server name
2. In the **Multicast Address** field: leave the default IP (required field)
3. In the **Multicast Port** field: leave the previous value or enter a standard port (e.g., 8090 or 9090)
4. In the **Bind Address** field: enter the IP address for this specific application server
   - A bind address is a local network interface IP ensuring all machines use the same IP interface on the same subnet
   - If a server has multiple NICs, specify the IP you want Clarity to use for network communication
5. Click **Save**

### Step 3: Edit properties.xml on Each Server

In the NSA section of `properties.xml`, add `useJDBCPing="true"`:

```xml
<nsa bindAddress="###.###.###.###"
     multicastAddress="###.###.###.###"
     multicastPort="9191"
     clientPort="9288"
     serviceName="CA PPM Beacon 123"
     useJDBCPing="true"
     autoDiscovery="true" />
```

Replace `###` with your actual IP node values. If you did not set the Bind Address in CSA, set `bindAddress` manually in `properties.xml` using the IP address for that specific server.

### Step 4: Start Services and Verify

1. In CSA, click **Home > All Services** > Start all Clarity services
2. Verify that Beacon services started successfully on all servers:
   ```
   service start beacon
   ```
3. Confirm the Beacon service remains active:
   ```
   service status beacon
   ```

---

## JDBC Ping: Verify JDBC Ping Messaging is Enabled

After JDBC Ping is enabled, the Clarity database creates a table named **`CMN_JGROUPS_PING`**.

- JDBC Ping address information is stored in this table
- Nodes in a cluster are registered in this table

### Verification Steps

1. Access the database with permissions to view this table
2. Verify that information about all Clarity services is populated in `CMN_JGROUPS_PING`

The table contains these columns:

| Column | Description |
|--------|-------------|
| CREATED | Date and time of the most recent posted message |
| CLUSTER_NAME | Topic name of the parent cluster for each member server |
| PING_DATA | Message content |
| UUID | Unique identifier for each server (application instance ID + topic name) |

### Test Connectivity

When JGroups is using JDBC Ping, node discovery uses the database; communication between nodes is TCP (peer-to-peer):

```bash
# Update /etc/hosts to point to 127.0.0.1 for $HOSTNAME
# Test port connectivity
telnet <server> <beacon_port>
# or
nc -zv <server> <beacon_port>
```

> [!tip]
> Switching to JDBC Ping requires no additional steps for Clarity integrations with SSO.

> [!warning]
> When you refresh your database from production to testing, run the following command to remove existing entries from the JDBC Ping table. If you do not, you will not be able to start Clarity services on the refreshed database server:
> ```sql
> truncate table CMN_JGROUPS_PING
> ```

---

## Clarity Hybrid Cloud Migrations

Broadcom supports Clarity SaaS and customer-managed AWS or Microsoft Azure deployments. High-level steps for administrators:

1. After upgrading, switch to JDBC Ping — multiple Clarity app services communicate with each other using JDBC Ping
2. Single-server Jaspersoft environments communicate with the Clarity database server using a direct JDBC connection

> [!note]
> Clustered Jaspersoft configurations in Azure, AWS, or other public/private/hybrid cloud environments are not fully supported. Limited support is available for replicated caching using JMS. See [[Application Servers and Clusters]] for JMS configuration details.

---

## Related Notes

- [[CSA Overview]]
- [[Application Servers and Clusters]]
- [[CLI Utilities]]

## Source

Clarity 16.4.1 documentation, pages 2986–2995.
