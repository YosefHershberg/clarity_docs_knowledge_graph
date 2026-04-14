---
title: CSA - Memory and Performance Tracking
tags:
  - admin
  - classic
  - onprem
aliases:
  - Performance Tracking
  - Classic PPM Memory
  - JVM Memory Classic PPM
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# CSA: Memory and Performance Tracking (On-Premise Only)

> [!info] On-Premise Only
> Memory management and performance tracking are configured and monitored via CSA. See [[CSA Overview]].

## Topics Covered

- Monitor System Performance
- Manage Memory
- Optimize Database Performance

---

## Monitor System Performance

You can track system performance using CSA. Performance data is collected and stored on Classic PPM servers until it is analyzed and moved to Classic PPM.

### How Performance Tracking Sessions Work

- When a session is started, calls to a Classic PPM server or servers from user workstations are tracked and recorded
- Analysis is done on the data after the session is complete
- For each call, the analysis provides **response times** (in milliseconds) and **data volumes** (in bytes)
- Only **one session at a time** can be in "Collecting Data" status
- All services in a cluster are included in a performance tracking session

### Create Performance Tracking Sessions

1. Log in to CSA
2. Under **Performance**, click **Performance Tracking**
3. Click **New**
4. Complete the following fields:

| Field | Description |
|-------|-------------|
| Session Name | Name for the session |
| Description | Appears in the list of sessions on the performance tracking page |
| Start Options | `Immediately`, `On Demand`, or `Scheduled` (use Date Picker for scheduled start) |
| Duration | Length of the session in Days, Hours, and Minutes |
| Tracking Level | 1 (least detail) to 10 (maximum detail). Higher levels collect more data but consume more resources |
| Track Individual Users | Records data about individual users and their actions |
| Analyze Data Immediately After Completion | Starts analysis automatically when the session ends |
| Response Time Percentile | Defines which response times are displayed. E.g., 90% shows only the slowest 90% of responses |

> [!warning]
> A higher tracking level (especially level 10) can affect system performance itself. Use level 10 only when necessary.

### Stop Performance Tracking Sessions

Any administrator with appropriate rights can stop a session at any time.

1. Log in to CSA > **Performance > Performance Tracking**
2. In the row containing the session, click **Stop**

To stop tracking for a specific service without stopping the entire session:

1. Click the name of the session
2. In the **Services** section, locate the service and click the **Abort** link

### View Session Results

After a session is analyzed:

1. Log in to CSA > **Performance > Performance Tracking**
2. In the row containing the session, click **View Results**
3. The **Overview** tab shows session properties and statistics for a selected service
4. Select the service in the **Service** field
5. Click the **Analysis** tab to view detailed results

### Compare Sessions

Compare the results of any two sessions:

1. Log in to CSA > **Performance > Performance Tracking**
2. Select the two sessions to compare, then click **Compare**
3. The base session appears in standard format; the comparison session appears as a percentage of increase or decrease
4. Click **Reverse Comparison** to change the order of base and comparison sessions
5. Use the **Performance Analysis Filter** to limit displayed data

---

## Manage Memory

Allocate sufficient physical memory to each server in a Classic PPM cluster.

> [!warning]
> There must be **more physical memory installed** in the server than is actually used by Classic PPM. Do **not** rely on virtual memory — operating system paging causes significant performance degradation.

### Monitor Memory Consumption

- **Unix/Linux**: Use `top` or `prstat` to monitor per-process or server-wide memory consumption
- **Windows**: Use Windows Task Manager — **Processes** tab for per-process memory, **Performance** tab for server-wide memory

### Adjust Memory Allocation

JVM memory is configured via the **Java VM Parameters** field in CSA (using standard JVM flags).

> [!note]
> Stop the service before adjusting memory settings; restart after modifying.

1. Log in to CSA > **Home > Servers**
2. Click the server name > **Services** tab
3. Stop the service you want to modify
4. Click the **Properties** tab:
   - For the application server: click **Application** sub tab > **Java VM Parameters**
   - For the background server: click **Background** sub tab > **Java VM Parameters**
5. Change the memory allocation and save
6. Return to **Services** tab > restart the service

### Recommended JVM Parameters (HotSpot)

See [[Application Servers and Clusters]] for full JVM tuning guidance. Key settings:

| Parameter | Example | Purpose |
|-----------|---------|---------|
| Maximum Heap | `-Xmx2048m` | Maximum memory for the JVM |
| Minimum Heap | `-Xms2048m` | Starting memory allocation; set close to actual usage |
| Parallel GC | `-XX:+UseParallelGC` | Recommended for servers with 2+ CPUs |
| New Ratio | `-XX:NewRatio=2` | Sets Old:New generation ratio. Value of 2 recommended for Classic PPM |

### Restrict Microsoft SQL Server Memory Consumption

SQL Server can over-consume available system memory, causing OS-level paging and significant slowdowns.

**Best practice**: Allocate about 90% of available system memory (after reserving ~200 MB for the OS) to SQL Server.

1. Open SQL Server Enterprise Manager > right-click the server > **Properties**
2. Click the **Memory** tab
3. Adjust the slider in **Dynamically Configure SQL Server Memory** to the computed maximum
4. Click **OK**

---

## Ensure Adequate Disk I/O Throughput

Classic PPM involves a wide range of activities presenting significant read/write load on the database server:

- **OLTP**: Timesheets, financial transactions, document collaboration, capacity planning
- **Batch processing**: Post Transactions to Financials, Data Mart Extraction, Import Financial Actuals
- **Data analysis**: Reports, queries, graphs, and grids

**Best practice**: Configure the database server with a **RAID 0+1** disk configuration (striping + failover).

---

## Optimize Database Performance

### Analyze the Oracle Database Schema

Use one of these methods (run at least once a week during low-activity periods):

1. **Oracle Table Analyze job** in Classic PPM (requires Report and Job Administrator access rights and Job Users group membership)
2. **Command line**:
   ```
   admin db analyze
   ```

### Oracle Direct and Asynchronous I/O

Use the Oracle `FILESYSTEMIO_OPTIONS` parameter to bypass the file system cache:

| Value | Description |
|-------|-------------|
| `ASYNCH` | Enable asynchronous I/O where possible |
| `DIRECTIO` | Enable direct I/O where possible |
| `SETALL` | Enable both (recommended) |
| `NONE` | Disable both |

### Oracle 11g Performance Parameters

Set CPU speed for the query optimizer:

```sql
execute dbms_stats.gather_system_stats('Start');
-- wait while database is under typical workload
execute dbms_stats.gather_system_stats('Stop');
```

For additional performance gain on Oracle 11g:

```
CURSOR_SHARING=FORCE
```

This rewrites executed queries to use bind variables instead of literals, enabling shared query plans (soft parse instead of hard parse). Monitor Oracle AWR for excessive query parsing before enabling.

### Analyze Microsoft SQL Server Database Schema

Create a SQL Server job for updating statistics and reindexing, and run it on a regular basis.

### Ensure Optimal Database Server File Layout

- Place Oracle table tablespace data files on **separate disks** from index tablespace data files
- Separate the transaction log files from table and index files
- Create separate file groups for tables and indexes in SQL Server and place them on different disks

### Enable the Datamart Parallel Option

The datamart extraction is I/O intensive. In typical customer environments, sufficient CPU is available to launch multiple parallel processes, minimizing overall Datamart runtimes.

### Oracle Tablespace Datafiles

Use **Automatic Segment Space Management (ASSM)** with `autoextend on` to improve and automate space management within segments. ASSM provides manageability and performance advantages over Freelist-based space management.

### SQL Server Tablespace Datafiles

- Create separate file groups for tables and indexes and place them on different disks
- Place transaction logs on another set of disks

---

## Related Notes

- [[CSA Overview]]
- [[Application Servers and Clusters]]
- [[Maintain and Monitor]]
- [[Health Report]]

## Source

Clarity 16.4.1 documentation, pages 3001–3007.
