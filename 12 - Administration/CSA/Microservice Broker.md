---
title: CSA - Getting Started with the Microservice Broker
tags:
  - admin
  - classic
  - onprem
aliases:
  - PPMBroker
  - ppmbroker
  - Microservice Broker
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# Getting Started with the Microservice Broker

> [!info] On-Premise Only
> The Microservice Broker is configured via CSA on on-premise installations. See [[CSA Overview]].

## Introduction to the Microservice Broker

**PPMBroker** is a microservice introduced in Clarity to offload the real-time processing of long-running requests (or portions of requests) from the Clarity application server. It does **not** replace or engage with the Background server, which schedules and executes processes.

The ppmbroker handles requests that are:
- Shorter than a Job, but larger than a query
- Complex enough to burden the application server if executed as part of a standard API request

**Examples of requests handled by PPMBroker:**
- Update the ETC/Actuals curve for the Team
- Update Resource curves for Assignments
- Update Allocation Curves for a Resource
- Deletion of BLOB Slices

## Benefits of Using the Microservice Broker

- **Real-Time Availability Updates** — Recalculates resource availability instantly when allocations change
- **Reduced System Load** — Offloads processing from the Clarity application server
- **Optimized Resource Allocation** — Enables informed, data-driven staffing decisions
- **Enhanced Collaboration** — Facilitates better coordination among resource managers

## Deploy the PPMBroker Service

You can set up a separate VM for the PPMBroker or leverage an existing server running another service.

### Method 1: Via properties.xml

1. Open: `$<Clarity_Home_Directory>/config/properties.xml`
2. Set `enableBroker="true"` in properties.xml
3. Add and deploy the service:
```
service add ppmbroker
service deploy start ppmbroker
```

### Method 2: Via CSA

1. Open CSA > Server Properties > MicroService Broker tab
2. Check **Enable Service**
3. Configure the properties below and save

> [!tip] Key Considerations
> - One dedicated PPMBroker service per cluster is recommended for production
> - Web socket ports must be externally available and open in the firewall
> - Better suited for larger production environments where real-time staffing updates are crucial

### Redeploy the Application

```
service add deploy ppmbroker
service start ppmbroker
```

## CSA: Microservice Broker Properties

| Field | Description | Cluster Sync? |
|-------|-------------|--------------|
| Service Name | Unique name for the microservice | No |
| Enable Service | Check to activate the microservice | No |
| Auto Start Service | Automatic or manual startup (Windows) | No |
| Service User / Password | Windows service account settings | No |
| RMI Port | Must differ from the Application tab RMI port | No |
| Java VM Parameters | JVM settings; default `-Xmx2048m` | No |
| Maximum Threads | HTTP thread pool size; default 200 | No |
| Program Parameters | Additional parameters passed to Java executable | Yes |
| HTTP Enabled | Enable standard HTTP port; default selected | Yes |
| HTTP Port | Default: 9000 | No |
| HTTP Entry URL | Full URL including load balancer in cluster | Yes |
| HTTPS Enabled | Enable secure HTTPS port | Yes |
| HTTPS Port | Default: 9003 | No |
| HTTPS Entry URL | Secure URL including load balancer in cluster | Yes |
| Tomcat Connector Port | Must differ from Application tab connector port | No |

> [!tip] JVM Best Practice
> For HotSpot JVMs, recommended parameters: `-XX:+UseParallelGC` and `-XX:NewRatio=2`, in addition to appropriate heap settings.

## Validate Deployment

When Clarity starts up, it detects `ppmbroker.war` in the webapps folder. Verify via:

**Health Report URL:**
```
http://host:port/ppmbroker/mercury/status
```

**Service Ping:**
```
http://host:port/niku/nu#action:security.servicePing
```

You can also use the Clarity Health Report to verify the broker is running.

> [!note]
> Deploying PPMBroker is recommended for optimal performance, but not deploying it does not break existing functionality. The App and BG services continue to work as usual.

## Run Microservice Broker from the Application Service

To enable PPMBroker from the Application properties in CSA, check the **Run Microservice Broker** field under the Application Instance section. This option is configured independently per server.

## Related Notes

- [[CSA Overview]]
- [[Application Servers and Clusters]]
- [[CLI Utilities]]

## Source

Clarity 16.4.1 documentation, pages 2935–2941.
