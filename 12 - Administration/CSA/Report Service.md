---
title: CSA - Getting Started with the Report Service
tags:
  - admin
  - classic
  - onprem
aliases:
  - Report Service
  - Clarity Report Service
---

# Getting Started with the Report Service

> [!info] Available Since Clarity 16.3.2
> The dedicated Report Service was introduced in Clarity 16.3.2 as an on-premise-only feature managed via CSA.

## Overview

Starting with Clarity 16.3.2, Clarity supports a separate Background-like service for report execution, known as the **Report Service**. This service:

- Runs independently of the main BG service
- Handles report execution from the **Clarity Reporting workspace** only
- Allows better scalability, performance, and workload management

> [!note]
> The existing BG service continues to support jobs, processes, and Jaspersoft reports.

## Key Benefits

- **Improved Performance** — Report execution is handled by a dedicated service, reducing load on the main background service
- **Better Scalability** — Multiple report services can be deployed for large environments or high workloads
- **Administrative Flexibility** — Administrators can enable or disable the report service in each environment as needed

## Configuration via properties.xml

Add or modify the Report Service instance parameters in `properties.xml`:

```xml
<jobSchedulerInstance id="report"
  serviceName="Clarity PPM Report Server"
  maxConcurrentJobs="10"
  runReports="true"
  runJobScheduler="false"
  runProcessEngine="false"
  runDWHSynchronizer="false"
  runSearchSynchronizer="false"
  messageTimeToLive="120"
  messageReceiverInterval="5"
  exceptionRunInterval="normal"
  maxThreadsForParallelProcessor="10"
  jvmParameters="-Xmx8192m -Xms512m"/>
```

> [!note]
> If a dedicated Report Service is not configured, the main BG service can still execute native reports by enabling the `runReports` attribute in its configuration.

## Deployment Methods

### Using Command Line

```
service deploy report
service start report
service stop report
service clone report
```

### Using CSA

In the CSA interface, you can:
- Start or stop the report service
- Configure system-level parameters (CPU, RAM, JVM settings)
- Edit the Job Scheduler Instance for the report service
- Ensure **Run Reports** is selected to enable report execution

## Recommended Hardware Configuration

| Component | Recommended Value |
|-----------|-----------------|
| CPU | 8 cores |
| RAM | 8 GB or higher |
| JVM Parameters | `-Xms2048m -Xmx8192m` |

## Logs and Monitoring

All Report Service logs are generated in the runtime logs directory.

**Location:** `<runtime>/logs/report*`
**Example:** `report-ca.log`

These logs record report execution activity and help diagnose issues related to scheduling, job execution, or performance.

## Functional Behavior

| Environment | BG Service Role | Report Service Role |
|-------------|----------------|---------------------|
| Non-Production | Executes both jobs and native reports | Optional |
| Production | Executes jobs, processes, and Jaspersoft reports | Executes native reports from Reporting Workspace |

## Recommendations and Limitations

- Ensure the Report Service is correctly configured to avoid overlapping with existing background jobs
- Do not disable all service attributes simultaneously — otherwise no report or job execution will occur
- When report exports complete successfully or fail, Clarity sends bell notifications to the user

## Related Notes

- [[CSA Overview]]
- [[Maintain and Monitor]]
- [[CLI Utilities]]

## Source

Clarity 16.4.1 documentation, pages 2942–2944.
