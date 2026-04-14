---
title: Database Performance Whitepapers
tags:
  - reference
  - admin
  - onprem
aliases:
  - Database Performance
  - Performance Benchmarks
  - Load Testing
canonical: true
audience: admin
domain: administration
---
# Database Performance Whitepapers

This note presents the database performance load testing and analysis whitepaper for Oracle, Microsoft SQL, and PostgreSQL (Containers and non-Containers) environments of Clarity **16.4.1**.

> [!IMPORTANT]
> **Disclaimer:** This document is not a sizing guide or recommendation guide. It portrays possible user loads given a particular Clarity configuration. Customer requirements and environments differ. Broadcom does not recommend that customers acquire hardware based on this document. Seek sizing expertise from Broadcom technical pre-sales and professional services. Test environments do not account for reporting, process engine, background service, or failover requirements.

---

## Executive Summary

The Clarity software engineering team conducted a series of performance benchmark tests for Clarity 16.4.1 in a clustered Linux environment.

Key test parameters:
- **User concurrency**: 2,400–2,450 virtual users (simulating 24,500 registered users at 10% concurrency).
- **Background process**: XOG project export running approximately 600 times per hour during the test.
- **Instant sync**: Enabled on all load tests.
- **Test duration**: 180 minutes including ~60-minute ramp-up.

Test objectives:
- Demonstrate the product's ability to serve 24,000 users on Intel-based hardware with Oracle, SQL Server, or PostgreSQL.
- Establish performance benchmarks on AMD-based hardware in a Linux clustered environment.

---

## Performance Test Methodology

- **Tool**: Apache JMeter v4.0.
- **Virtual users**: 2,450 virtual users simulating peak usage for 24,500 registered users.
- **Wait times**: 3 to 45 seconds depending on action type (interaction delays only, not idleness).
- **Infrastructure**: Single database server, four application servers, one background server instance.
- **All platforms**: Oracle, MS SQL, PostgreSQL — all running on virtual machines.

> [!NOTE]
> 10% concurrency rate means: 2,450 / 0.10 = 24,500 registered users. This is typical for peak usage periods.

---

## Performance Test Results

### Summary of Test Results (New UI)

| Metric | Oracle | MS SQL | PostgreSQL (SaaS) | PostgreSQL (Containers) |
|--------|--------|--------|-------------------|------------------------|
| Avg Transaction Response Time (sec) | **0.4** | **0.98** | **0.48** | **0.45** |
| Avg Hits per second | 56.32 | 58.3 | 65.85 | 66.06 |
| Avg DB Server CPU Utilization | 32.49% | 52.35% | 47.14% | 32.44% |
| Avg App Server 1 CPU | 10% | 7.8% | 7.2% | 8.8% |
| Avg App Server 2 CPU | 9.4% | 8.1% | 7.4% | 9.2% |
| Avg App Server 3 CPU | 8.4% | 9.2% | 7.6% | 9.5% |
| Avg App + Background Server 4 CPU | 8.8% | 8.8% | 7.7% | 8.3% |

### Performance Test Conclusion

After comparing average response times between 16.4.1 and the previous release (16.4.0), 16.4.1 performance is **equal** to the previous version.

| Database | 16.4.0 Avg Response | 16.4.1 Avg Response | % Change |
|----------|-------------------|-------------------|----------|
| Oracle | 0.4s | 0.41s | -2.5% (slight increase) |
| MS SQL | 0.98s | 0.96s | +2.0% (improvement) |
| PostgreSQL (SaaS) | 0.48s | 0.48s | 0% (no change) |
| PostgreSQL Containers | 0.45s | 0.45s | 0% (no change) |

---

## Database Performance Comparison by Release

### Total Average Response Time

| Functional Area | 16.4.0 Oracle | 16.4.1 Oracle | 16.4.0 MSSQL | 16.4.1 MSSQL | 16.4.0 PostgreSQL |
|---|---|---|---|---|---|
| **Total Avg Response Time** | 0.4 | 0.41 | 0.98 | 0.96 | 0.48 |

### Comparison by Functional Area (Oracle vs. MSSQL)

| Functional Area | 16.4.0 Oracle | 16.4.1 Oracle | 16.4.0 MSSQL | 16.4.1 MSSQL |
|---|---|---|---|---|
| Agreements | 1.67 | 0.46 | 1.45 | 1.31 |
| Blueprints | 0.52 | 0.59 | 1.79 | 1.79 |
| Financial Management | 0.76 | 1.06 | 1.02 | 1.17 |
| General Navigation | 0.24 | 0.25 | 0.45 | 0.42 |
| Hierarchies | 1.07 | 1.49 | 5.03 | 6.55 |
| OBA / Custom Investments | 1.75 | 2.18 | 3.14 | 2.69 |
| Portfolio Management | 0.25 | 0.26 | 0.34 | 0.33 |
| Project Management | 0.80 | 0.89 | 2.62 | 1.95 |
| Resource Management | 1.37 | 1.87 | 7.40 | 8.39 |
| Roadmaps | 0.69 | 0.83 | 1.88 | 1.71 |
| Timesheets and Approvals | 0.49 | 0.59 | 1.82 | 2.96 |
| To Dos | 2.36 | 2.69 | 7.31 | 8.14 |

> [!NOTE]
> Increases in numbers may be due to addition of new test scripts or re-grouping of existing scripts — not necessarily performance regressions.

---

## Database Performance Test Environment

### Application and Background Server Software

| Component | Value |
|-----------|-------|
| OS | ROCKY Linux 9.3 |
| Java | AdoptOpenJDK 17.0.17+10 |
| App Server | Apache Tomcat 9.0.113 |
| JVM Xms | 1024m |
| JVM Xmx | 6144m |

### Application and Background Server Hardware

| Component | Value |
|-----------|-------|
| CPU | AMD EPYC 7B12 @ 2.20 GHz |
| CPU Cores | 8 (2 cores/socket × 4 sockets) |
| RAM | 16 GB |

### Database Server Software

| Component | Oracle | MS SQL | PostgreSQL |
|-----------|--------|--------|------------|
| OS | ROCKY Linux 9.3 | ROCKY Linux 9.3 | ROCKY Linux 9.3 |
| Database Version | Oracle 19.29.0.0.251021 | SQL Server 2022 64-bit CU22 (16.0.4225.2) | PostgreSQL 16.4 |

### Database Server Hardware

| Component | Oracle | MSSQL | PostgreSQL |
|-----------|--------|-------|------------|
| CPU | AMD EPYC 7B12 @ 2.20 GHz | AMD EPYC 7B12 @ 2.20 GHz | AMD EPYC 7B12 @ 2.20 GHz |
| CPU(s) | 32 | 32 | 32 |
| Cores/socket | 16 | 16 | 16 |
| Sockets | 2 | 2 | 2 |
| RAM | 120 GB | 120 GB | 120 GB |

### MS SQL Parameters

| Parameter | Value |
|-----------|-------|
| System Memory | 120 GB |
| Processors | 32 |
| Min Server Memory | 5 GB |
| Max Server Memory | 100 GB |
| Max Worker Threads | 10,000 |
| Cost Threshold for Parallelism | 50 |
| Max Degree of Parallelism | 0 (unlimited) |
| Connection Timeout | 0 (no timeout) |
| Max Concurrent Connections | 0 (unlimited) |

---

## Database Size Details

### Oracle

| Entity | Count |
|--------|-------|
| Projects | 20,313 |
| Resources | 55,526 |
| Teams | 457,370 |
| Assignments | 5,125,685 |
| Tasks | 1,478,406 |

### MSSQL

| Entity | Count |
|--------|-------|
| Projects | 14,726 |
| Resources | 47,448 |
| Teams | 314,368 |
| Assignments | 961,123 |
| Tasks | 707,460 |
| Timesheets | 2,514 |

### PostgreSQL (SaaS)

| Entity | Count |
|--------|-------|
| Projects | 20,478 |
| Resources | 55,601 |
| Teams | 458,462 |
| Assignments | 5,127,325 |
| Tasks | 1,477,049 |
| Timesheets | 1,045,767 |
| Timesheet Entries | 2,002,141 |
| DB Size | 2.5 GB |

---

## Database Performance Use Cases

The same use cases apply to Oracle, MS SQL, and PostgreSQL environments.

### Use Case Distribution by Functional Area

| Functional Area | Use Cases |
|----------------|-----------|
| Project Management | 1, 7, 8, 9, 10, 13, 22–25, 27, 29, 32, 33, 38–40, 42–44, 46–47, 49–53, 56–59 |
| Resource Management | 12, 18–21, 35, 37, 38, 44–45, 50, 54–56 |
| Financial Management | 2–6, 14, 28, 34 |
| General Navigation | 11, 36 |
| Timesheets and Approvals | 15, 26, 30, 41, 48 |
| Portfolio | 16, 17 |

### Use Cases List

| Use Case | Description |
|----------|-------------|
| 1 | Administration — All Page Script (Classic) |
| 2 | PM Financial Planning — View and Edit Cost Plan (Classic) |
| 3 | PM Financial Planning — Cost Plan 2 (Classic) |
| 4 | PM Financial Planning — Cost Plan 3 (Classic) |
| 5 | PM Financial Planning — Cost Plan 4 (Classic) |
| 6 | PM Financial Planning — Cost Plan 5 (Classic) |
| 7 | Gantt Toolbar (Classic) |
| 8 | Gantt WBS List (Classic) |
| 9 | Interactive Gantt Chart (Classic) |
| 10 | Auto-Schedule (Classic) |
| 11 | General UI Behavior (Classic) |
| 12 | Departments (Classic) |
| 13 | Navigator — All Page Script (Classic) |
| 14 | PM Rate Matrix (Classic) |
| 15 | Approve Timesheet (Classic) |
| 16 | New Portfolio (Classic) |
| 17 | New Portfolio (Classic) |
| 18 | PM Resource Management — Working with resources (Classic) |
| 19 | PM Resource Management — Hard book and staff a resource |
| 20 | PM Resource Management — Request a role from ItoR view |
| 21 | PM Role Management — Search, change booking status, replace allocation |
| 22 | Roadmaps (a: Create/Update Items; b: Custom Global/Local Picklists) |
| 23 | Tasks Board |
| 24 | Create Projects (Classic) |
| 25 | Create Projects |
| 26 | Timesheets — Submit/Approve |
| 27 | PM Projects — Project Tiles; Create Project from Template (Classic) |
| 28 | PM Financial Transactions (Classic) |
| 29 | Conversations |
| 30 | Timesheet Grid, Approve Timesheets |
| 32 | Secure Attributes |
| 33 | FLS Consumption |
| 34 | Idea Financials — TSV Aggregate |
| 35 | Project Staff — TSV Aggregate |
| 36 | Navigate to Custom Objects and Sub-Sub Objects |
| 37 | Resource Management Group By |
| 38 | Hierarchies |
| 39 | Blueprints — Rule Engine |
| 40 | Rule Engine Data Retrieval |
| 41 | Retrieve Todos — global and instance rights |
| 42 | Status Reports |
| 43 | Tasks Workspace |
| 44 | Custom Investments — Navigate |
| 45 | Staffing Grid |
| 46 | Global ToDo Widgets |
| 47 | Roadmap Widgets |
| 48 | Timesheet Widgets |
| 49 | OBA Status Reports |
| 50 | Canvas Widgets Hierarchy |
| 51 | Agreements |
| 52 | Task Bulk Edit |
| 53 | Project Rules |
| 54 | Staffing Workspace |
| 55 | Staffing Custom APIs |
| 56 | OBA Investments |
| 57 | Project Nested Grids |
| 59 | Project Rules — Grant/Revoke Rights |

> [!NOTE]
> There is a waiting time of 5 seconds for each step in Clarity test cases.

---

## Related

- [[_MOC Reference]] — Reference section overview
- [[Database Schema Changes]] — Database schema changes between versions
- [[Connectivity Diagrams]] — Oracle and SQL connectivity diagrams
- [[Jobs Reference]] — Background jobs used during performance tests (Post Timesheets, Rate Matrix Extraction, etc.)

%%Source: Reference PDF — Database Performance Whitepapers and Use Cases%%
