---
title: Clarity SaaS Service Description
tags:
  - reference
  - saas
aliases:
  - SaaS Service Description
canonical: true
audience: admin
domain: reference
---
# Clarity SaaS Service Description

> [!NOTE]
> This service description applies to all active releases of Clarity SaaS.

Clarity SaaS is a web-based service that provides subscribers with access to the market-leading project and portfolio management system.

## Modification Guidelines

Customizations are not accepted in Clarity SaaS environments under any circumstances. To reduce the risk of Broadcom denying support for a problem caused by modifications, apply the following guidelines:

- Do not add fields to stock database tables. Create new tables instead to hold custom data that can be joined with the stock table.
- Direct access to stock tables should be read-only. To update stock tables, use the XOG capabilities.
- Triggers should fire conditionally and should be simple and written to avoid deadlocks. Triggers should be disabled during upgrades.
- All custom database objects should be removed prior to product upgrades and then added back afterwards.
- Do not modify source code, including Java, XML, XSL, XBL, PMD, and all other system files provided with the product.

## Service Delivery Standards

### Compliance

- **SSAE 18:** Clarity SaaS is subject to an annual SSAE 18 compliance audit. The resulting SOC Report includes the auditor's opinion on the fairness of the description of controls placed in operation.
- **Section 508:** The nature and extent to which Clarity enables compliance with Section 508 of the Rehabilitation Act of 1973 are detailed in our Voluntary Product Accessibility Template.

### Availability and Monitoring

- Continuous monitoring of all service components (infrastructure and application) is deployed to proactively identify any component trending towards failure or approaching capacity.
- Best-of-breed monitoring solutions are deployed, supplemented with vendor-specific diagnostic tools.
- 24x7 staffed network operation centre (NOC) to analyze and respond to automated monitoring alerts.

### Performance

Service response times are analyzed and archived daily. Upon review of performance data or notification from the client, Broadcom will:

- Work with the client to perform a detailed user-by-user, feature-by-feature review.
- Work with the client to optimize their configuration and identify any network or ISP issues.
- Provide additional infrastructure if required to meet subscription levels.

### Support

Clarity SaaS includes standard 24x7x365 support for critical incidents. The following resources are available:

- **Support Knowledge Base:** Links to user documentation, support policies, and a knowledge base.
- **Documentation:** Access to the product documentation.
- **SaaS Resource Center:** Links to current SaaS-specific policies and delivery standards.
- **Communities Site:** Post questions, share ideas, and information regarding upgrades.

### Maintenance

Maintenance falls into three categories:

1. **Monthly:** Production maintenance windows normally occur the second Saturday of each month during local, data centre non-business hours. A reminder notification is sent 7–10 days prior to these windows.
2. **Emergency or Critical Scheduled:** Minimum 72-hour notice for expected downtime will be provided. Broadcom will provide reasonable accommodations for business needs where possible.
3. **Unplanned:** Unplanned downtime is any loss of availability not noticed more than 72 hours in advance. Notices are sent as soon as the maintenance is scheduled. These downtimes count against the client's uptime SLA.

## Security

Broadcom SaaS implements a defence-in-depth approach which mitigates the impact of any one vulnerability through strong authentication, privileged access management, vulnerability and patch management, segmentation, and security monitoring.

### Security Framework

- Risk management drives policy creation
- Policy shapes architecture
- Architecture drives engineering solutions
- Solutions are sustained by operations and administration
- Performance/compliance test results drive policy improvements

### Architectural Security

- **Auditing:** Security architecture is audited annually under SSAE18 standards.
- **Encryption:** All web traffic is protected by SHA256-bit TLS 1.2 or higher encryption and 2048-bit RSA public keys. Session data is encrypted.
- **Load Balancers:** All internet traffic is terminated at a load balancer.
- **Software:** A suite of security components including threat management, SIEM, IDS, and antivirus are deployed.
- **Firewalls:** Stateful inspection firewalls deny all incoming traffic by default. Application servers reside in a DMZ separated from database servers by a firewall.
- **SQL Injections and XSS:** The application manages illegal SQL injections by enforcing content-validation rules. XSS user input validation and restrictions are enforced.

### Security Scans

Broadcom contracts with an independent, third-party vendor for ongoing security evaluation:

- **Vulnerability Scans:** Performed weekly in the production system. Patches and updates are scanned prior to deployment.
- **Penetration Scans:** Performed upon significant service updates, but no less than annually.

### Physical Data Center Security

- Secure perimeter defence systems, comprehensive camera coverage, biometric authentication, and 24/7 guard staff.
- No public visitor access. All access is logged for no less than one year.
- A robust enterprise risk management program is in place.

### Logical Security

- **Hacker Monitoring:** Systems are monitored 24x7x365 by an enterprise IDS. Audit logs are reviewed by a SIEM solution.
- **Virus Protection:** All servers are protected by commercial Anti-Virus/Anti-Malware software. Files uploaded to the service are scanned before saving.
- **Ports:** Only port 443 is open for application data traffic.
- **Server Patching:** Security patches are applied monthly; critical patches within 72 hours.
- **Data Sanitization:** Storage devices are sanitized or destroyed per DoD standards when retired.

## Data Management

Broadcom SaaS performs daily backups of all customer data and configurations to create service recovery points.

### Service Backup and Restore

- **Recurring backups:** A recovery point is generated every 24 hours (full backup).
- **Retention period:** Recurring backups are retained for 7 days.
- **Storage policies:** Backups reside only on network storage within an authorized Broadcom data centre. Removable media is not used.
- **Customer defined recovery points:** Customers may define up to 5 additional recovery points with standard retention periods of 30, 60, or 90 days.
- **Restore requests:** All restore requests are processed as a complete environmental restore. Selective data restores cannot be requested.

### Non-Production Data Refresh

Customers may periodically request that production data and configuration be refreshed to a non-production sandbox instance via a ticketed support request. As with restore requests, refreshes are processed as a complete environmental restore.

### JasperSoft Reporting Content

JasperSoft content backups are restored only in the event of a system recovery due to failure or disaster recovery event. JasperSoft content migration can be performed in a self-service manner.

### SFTP Data Storage and Retention

SFTP folders are supported to temporarily store XML files or flat file formats. Files stored in SFTP folders are **not** covered under service backup and disaster recovery policies. Clients are responsible for archiving processed files.

> [!WARNING]
> Broadcom may delete any file stored in an SFTP folder that is older than 30 days or to conform to the storage limit specified in the Service Listing.

### Disaster Recovery and Business Continuity

In a force majeure event, Broadcom SaaS will recover the service to a cold standby alternate data centre. See the regional SaaS listing for Recovery Point and Recovery Time Objectives.

### Data Delivery at Termination

Terminating clients have the following options to receive their data:

- API data extractions via HTTPS producing XML formatted flat files (XOG).
- Database dump file containing only tables with client data.
- Database data pump generated file of the entire Clarity database schema (requires a valid on-premise license).

## Application

Clarity SaaS is based on a J2EE application with the following architectural details:

- Runs on multiple Apache Tomcat application servers connecting to back-end databases.
- Utilizes load balancing between a minimum of two Linux application containers using hardware-based SSL acceleration.
- The underlying J2EE application server controls web, integration, business logic, and persistence services.
- The service is accessed through a secure web interface.
- Data compression reduces network resources consumed; the browser decompresses using built-in gzip functionality.

### Client Access

User access requires only a supported web browser. Additional client workstation technologies include:

- **XML Open Gateway (XOG):** A Clarity Web service for data import and export via HTTPS.
- **REST APIs:** Web-based and interactive API documentation to execute API commands.
- **Microsoft Project / Open Workbench:** Scheduling tools for two-way interface of project plan data.

> [!NOTE]
> Direct access to Broadcom SaaS environment servers using VPN, remote desktop, or any other connection method is not permitted.

## Upgrade

New product releases with key features are released every quarter. Patches are released approximately monthly.

### Upgrade Policies

- **Service Versions:** All Clarity SaaS subscribers are required to be running the current version. Clients receive at least 30 days notice for their production upgrade. Critical blocking issues discovered during non-production testing will be triaged via the support process.
- **Patches:** Applied as required to resolve identified issues. For critical security or stability issues, patches may be required for all clients.

## Integration

The Broadcom approach to integration is through a toolkit consisting of:

- RESTful APIs
- XOG XML Web Services
- GEL Scripting via process management
- Simple Object Access Protocol (SOAP) and WSDL
- SFTP drop-off/pickup combined with GEL
- SAML 2.0 Federated single sign-on

> [!NOTE]
> SFTP is intended to support legacy integrations where direct integration methods are not possible. Direct integration is preferred where possible.

## Customizations

Broadcom SaaS solutions are delivered as a standardized service. Certain design principles are enforced to limit customization that may cause instabilities.

### Application Customizations

Customization of the Clarity application layer or alterations/insertions of any files on the application servers is not compatible with Clarity. Prohibited customizations include:

- Custom Java code
- Alterations to the base Clarity code set including XSL and Java files
- Placement of any file into the directory structure of a server

### Database Customizations

Customization of the Clarity database schema is not permitted. Prohibited customizations include:

- Triggers
- Stored procedures
- Custom tables or schemas
- Functions

## Clarity SaaS Upgrade

### SaaS Upgrade Process

A typical upgrade follows a three-week timeline:

| Week | Activities |
|---|---|
| Week 1 | Non-production upgrade begins; Broadcom validation testing starts; production upgrade schedule is confirmed |
| Week 2 | Customer testing continues; bottleneck issues are reported and resolved |
| Week 3 | Overall testing is completed; issues are resolved; production upgrade |

### Configuration Stability During Upgrade Cycle

A stable configuration is recommended during the upgrade cycle to minimize risk. Complete all configuration changes and migrate to production before the upgrade cycle begins.

> [!NOTE]
> Any significant configuration change during the upgrade cycle may result in unexpected issues in the production environment.

### Non-Production Validation

- **Scheduling:** You will receive a maintenance notification at least 1 week in advance.
- **Non-Production Upgrade:** The upgrade requires approximately 24 hours to complete.
- **Testing Best Practices:** Test new features, expected bug resolutions, custom reports, data integrations, custom processes, and add-in packages.

### Production Upgrade

You will receive a second notification at least 1 week before the scheduled production upgrade. The production upgrade typically begins Friday after business hours and completes by end of Saturday.

> [!NOTE]
> Create a Severity 1 ticket if you identify a major issue with your post-upgrade production environment. If a major defect is unresolvable within the upgrade timeline, a rollback to the previous version state can be processed.

### SaaS Upgrade Responsibilities

**Broadcom Upgrade Team:**
- Physical upgrade of customer environment
- System testing and validation
- Resolution of any system or environment issues

**Customer:**
- Understand and manage the upgrade process
- Create and execute the upgrade plan
- Perform unit, regression, and user acceptance testing
- Identify and resolve non-standard component compatibility issues
- Update personalized training materials
- Track, manage, and perform post-upgrade tasks

### SaaS Upgrade Checklist

**Suggested Pre-Upgrade Preparation Tasks:**
- Finalize development, promote to production, and avoid further significant changes
- Request refresh of production to non-production environment(s)
- Review the upgrade process and Release Notes for changes
- Assess impacts on Components, Reports, Portlets, Processes, Jobs, Interfaces, Training Materials, and Add-Ins

**Non-Production Environment Tasks:**
- Perform Regression Testing as needed
- Update non-standard components and resolve issues
- Apply selected add-ins as applicable
- Perform UAT testing
- Create a migration plan and post-production upgrade checklist

**Pre-Production Upgrade Tasks:**
- Finalize training material updates and schedule training if needed
- Validate that resources are available and all blocking issues are resolved
- Create a short interval schedule for the upgrade

## Related
- [[_MOC Release Info]]

%%Source: p212-223%%
