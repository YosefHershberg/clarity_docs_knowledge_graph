---
title: CSA - Application Servers, Clusters, Multicast Messaging, and Load Balancers
tags:
  - admin
  - classic
  - onprem
aliases:
  - Classic PPM Clustering
  - Classic PPM Load Balancer
  - Classic PPM Multicast
  - Scale Classic PPM
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# CSA: Application Servers, Clusters, Multicast Messaging, and Load Balancers (On-Premise Only)

> [!info] On-Premise Only
> Cluster configuration is managed via CSA. See [[CSA Overview]].

## Topics Covered

- Scale Classic PPM
- Multicast Messaging
- Load Balancers and Session Persistence (Sticky Sessions)
- Share Disks
- Distribute Files to Servers in a Cluster
- Multiple Application or Background Service Instances
- Configure a Dedicated External Data Source
- Oracle Database Clustering
- Tune OpenJDK HotSpot JVMs

---

## Scale Classic PPM

Scaling describes the activity of deciding which services to run and on which computers. Balance performance with reliability.

**Typical small installation:**
- One server for the database
- One server for everything else (or one server connected to an externally managed database)

**Medium-to-large installations** — redundant services running on several dedicated computers, depending on performance and reliability requirements.

---

## Multicast Messaging

Classic PPM uses multicast messaging for cluster service discovery (the Beacon service). Key properties:

| Property | Description |
|----------|-------------|
| Multicast Address | Class D IP range 224.0.0.0 through 239.255.255.255. Default: `230.0.1.1`. Must be unique per cluster. Recommended: 239.x.x.x subnet |
| Multicast Port | Must be unique on each machine. Default: 9090 |
| Bind Address | Specify a local network interface IP when multiple NICs are present |

> [!note]
> As an alternative to multicast, see [[JDBC Ping Configuration]] for JDBC-based cluster discovery.

---

## Load Balancers and Session Persistence (Sticky Sessions)

When using a load balancer in front of multiple application servers:

- In a cluster with multiple app services, set **Distributed** to `true` for each app instance in CSA
- This ensures the service cooperates with other services in the cluster and operates as a stateless service (fault tolerant)
- In the **HTTP Entry URL** field, enter the URL of the front-end load balancer, not the individual server URL
- Load balancers typically use sticky sessions (session persistence) to ensure a user's requests always go to the same server

> [!tip]
> For a load-balanced architecture, enable SSL by installing the certificate on the load balancer (not on the application servers). Set SSL Handling to **SSL is used but processed externally**.

---

## Share Disks

In a cluster, all application servers must share access to:
- The **filestore directory** (document storage)
- The **index directory** (search index)

Use NAS (Network Attached Storage) for shared disk access in a cluster environment.

---

## Distribute Files to Servers in a Cluster

To distribute configuration updates or UI customizations to all servers:

1. Log in to CSA
2. Click **Distribute > Distribute All**
3. Select the servers to distribute to
4. Click **Distribute**

The Beacon service enables this remote, distributed management.

---

## Multiple Application or Background Service Instances

You can clone the `app` or `bg` service to run multiple instances on the same server. When cloning:
- Ports, service names, and other properties are incremented to avoid collisions

```
service clone app
```

To remove a previously cloned service:

```
service remove app2
```

> [!note]
> The original service cannot be destroyed with the `destroy` command — only cloned services can be destroyed.

---

## Application Server (app) Key Properties

| Field | Description | Cluster Sync? |
|-------|-------------|---------------|
| Distributed | Set to `true` for clustered/load-balanced installations. Enables stateless operation and fault tolerance | Yes |
| Run Job Scheduler | Whether to run a Job Scheduler in this app instance | No |
| Maximum Concurrent Jobs | Max jobs running simultaneously. Default: 10 | No |
| Run Process Engine | Whether to run a Process Engine in this instance. Recommended: run in BG service instead | No |
| Run Microservice Broker | Enable PPMBroker in this app instance | No |
| Maximum Threads | HTTP thread pool size. Default: 200 | No |
| Java VM Parameters | JVM settings including memory. Default: `-Xmx2048m` | No |
| HTTP Port | Default: 80 | No |
| HTTP Entry URL | Full URL for HTTP access; use load balancer URL in cluster | Yes |
| HTTPS Port | Default: 8043 | No |
| HTTPS Entry URL | Full URL for HTTPS access; use load balancer URL in cluster | Yes |
| Exception Run Interval | How often the process engine retries unprocessed events | No |

---

## Tune OpenJDK HotSpot JVMs

Recommended JVM parameters for HotSpot JVMs (set in **Java VM Parameters** fields):

### Maximum Heap (`-Xmx<size>m`)

The maximum memory the JVM can allocate. Set this to the maximum amount of memory you want Classic PPM to use.

### Minimum Heap (`-Xms<size>m`)

Set as close to actual typical usage as possible. Avoids wasted effort expanding the heap as the application ramps up. Setting minimum and maximum heap to the same value results in simpler garbage collection behavior.

### Parallel Garbage Collector (`-XX:+UseParallelGC`)

Recommended for any server with two or more CPUs. Safe to set on all servers — servers with fewer than two CPUs ignore this setting.

### New Ratio (`-XX:NewRatio=<size>`)

Controls the ratio between New (Eden) Space and Old (Tenured) Space. For server-side applications like Classic PPM that create and destroy many short-lived objects:

- Setting `-XX:NewRatio=2` means the Old generation is twice the size of the New generation
- This is the recommended setting for Classic PPM regardless of platform

**Example recommended JVM parameters:**

```
-Xmx2048m -Xms2048m -XX:+UseParallelGC -XX:NewRatio=2
```

---

## Oracle Database Clustering (RAC)

To connect to an Oracle RAC cluster, use a custom JDBC URL:

In CSA Database properties, select **Specify URL** and enter a RAC URL:

```
jdbc:oracle:thin:@(DESCRIPTION =
  (ADDRESS_LIST =
    (ADDRESS = (PROTOCOL = TCP)(HOST = NODE1)(PORT = 1521))
    (ADDRESS = (PROTOCOL = TCP)(HOST = NODE2)(PORT = 1521))
    (LOAD_BALANCE = yes))
  (CONNECT_DATA =
    (SERVER = DEDICATED)
    (SERVICE_NAME = ClassicPPM)))
```

---

## Configure Replicated Caching for JasperReports Server with JMS

For cloud environments (Azure, AWS, Google Cloud) where multicast is disabled and JDBC ping is enabled, Jaspersoft clusters can use JMS (Java Message Service) for ehcache replication via Apache ActiveMQ.

> [!note]
> This is limited support. Clustered Jaspersoft on public cloud is not fully supported, but JMS replication is available.

Key steps:
1. Install and configure Apache ActiveMQ (download from http://activemq.apache.org)
2. Configure `ehcache_hibernate.xml` in the JasperReports Server Tomcat installation:
   - Comment out the NO CLUSTERING section
   - Uncomment the JMS section
   - Update `providerURL` with the ActiveMQ broker URL (5 locations in the file)
3. Copy configuration to the `classes` subfolder
4. Repeat on all JasperReports Server instances in the cluster
5. Start the ActiveMQ server and Jasper service

---

## Related Notes

- [[CSA Overview]]
- [[JDBC Ping Configuration]]
- [[Security and Authentication]]
- [[Memory and Performance]]

## Source

Clarity 16.4.1 documentation, pages 2981–2995.
