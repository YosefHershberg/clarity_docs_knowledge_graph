---
title: Clarity Administration
tags:
  - MOC
aliases:
  - Administration
  - Admin
  - System Configuration
---

# Clarity Administration

## Notes in This Section

### Setup
- [[First Time Setup]] — Setting up Clarity for first time use
- [[System Settings]] — Configure system-level settings
- [[Managing Users]] — User management
- [[Authentication and Keys]] — Authentication configuration
- [[Feature Toggles]] — Enable/disable features

### Blueprints
- [[Common Capabilities]] — Common blueprint capabilities
- [[Projects Blueprint]] — Projects blueprint configuration
- [[Ideas Blueprint]] — Ideas blueprint
- [[Custom Investments Blueprint]] — Custom investments blueprint
- [[Team Investments Blueprint]] — Team investments blueprint
- [[Hierarchies Blueprint]] — Hierarchies blueprint
- [[Roadmaps Blueprint]] — Roadmaps blueprint
- [[Agreements Blueprint]] — Agreements blueprint
- [[Pages Blueprint]] — Pages blueprint
- [[Objectives Blueprint]] — Objectives blueprint
- [[Resources Blueprint]] — Resources blueprint
- [[Timesheets Blueprint]] — Timesheets blueprint
- [[Staffing Blueprint]] — Staffing workspace blueprint

### Configuration
- [[Timesheet Rules]] — Timesheet rules and settings
- [[Staffing Administration]] — Staffing workspace admin
- [[Field Level Access]] — Secure field-level access
- [[Actions Framework]] — Configure actions
- [[Queries Transactional Schema]] — Query builder (Beta)
- [[Skills Management]] — Skills and CSV import
- [[Notifications]] — Notification configuration
- [[Custom Investment Types]] — Configure custom investment types
- [[Views Configuration]] — View management
- [[Vaia AI Configuration]] — Configure AI features
- [[Impersonate User]] — User impersonation
- [[Rally Integration]] — Clarity-Rally integration (hub)
  - [[Rally Integration Setup]] — Overview, workflow, setup, and field mappings
  - [[Rally Cost Accounting]] — Frictionless cost accounting and calculations
  - [[Rally Synchronization]] — Sync investments, run sync jobs, map OKRs

### Security and Access
- [[Authentication Methods]] — Authentication methods reference
- [[User Accounts and Passwords]] — User account management
- [[OBS Configuration]] — Organizational Breakdown Structure
- [[GDPR and PII]] — Data protection and privacy
- [[LDAP SSL SSO]] — LDAP, SSL, and SSO configuration (hub)
  - [[SSL Configuration]] — SSL/HTTPS setup, database passwords
  - [[LDAP Configuration]] — LDAP integration and synchronization
  - [[SSO Configuration]] — Single Sign-On for Classic PPM and Clarity

### Data Warehouse
- [[Configure DWH]] — Data warehouse configuration
- [[DWH Conventions]] — Data warehouse conventions
- [[OData Access]] — OData access configuration
- [[Datamart Configuration]] — Datamart setup

### System Monitoring
- [[Health Report]] — System health monitoring
- [[Job Monitor]] — Job monitoring
- [[Governor Settings]] — Performance governor
- [[Audit Trail]] — Global audit trail

### Other Configuration
- [[Processes Configuration]] — Process design and management
- [[Lookups Configuration]] — Configure lookup values
- [[Reports and Jobs Config]] — Report and job configuration
- [[Notification Templates]] — Notification template design
- [[Time Slices]] — Configure time slices
- [[Timesheet Reporting Periods]] — Configure reporting periods
- [[Earned Value Management]] — EVM configuration
- [[General System Settings]] — General settings

### CSA: Classic PPM System Administration (On-Premise Only)

> [!note] On-Premise Only
> CSA is the web-based administration tool for on-premise Clarity installations. Access at `http://<hostname>:8090/niku/app`.

- [[CSA/CSA Overview|CSA Overview]] — Introduction to Classic PPM System Administration, the Beacon service, URL contexts, and all server property groups
- [[CSA/Microservice Broker|Microservice Broker]] — PPMBroker microservice for offloading real-time processing (staffing, ETC/actuals curves)
- [[CSA/Report Service|Report Service]] — Dedicated report execution service separate from the main BG service (new in 16.3.2)
- [[CSA/Maintain and Monitor|Maintain and Monitor]] — Start/stop services, open ports, IGMP snooping, log files, backup/restore, GEL tag restrictions
- [[CSA/Document Index and Storage|Document Index and Storage]] — Document indexing methods, search index, filestore migration, file scanning
- [[CSA/Security and Authentication|Security and Authentication]] — Passwords, SSL, LDAP, SSO, XSS, FIPS 140-2 configuration
- [[CSA/Application Servers and Clusters|Application Servers and Clusters]] — Scaling, multicast messaging, load balancers, sticky sessions, JVM tuning
- [[CSA/JDBC Ping Configuration|JDBC Ping Configuration]] — JDBC-based alternative to multicast for cluster discovery (cloud-friendly)
- [[CSA/CLI Utilities|CLI Utilities]] — `service` and `admin` command-line utilities for scripted administration
- [[CSA/Memory and Performance|Memory and Performance]] — Performance tracking sessions, memory allocation, database optimization

## Related
- [[_MOC Install Upgrade]]
- [[_MOC Development]]
- [[_MOC Reference]]

<!-- SOURCE_COVERAGE_START -->
## Source Documentation Coverage
These source files provide the canonical long-form context for this domain:
- [[23 - Source Documentation/Administration]]
- [[23 - Source Documentation/Analyze Resource Allocation and Staffing]]
- [[23 - Source Documentation/Collaborative Workflow Management]]
- [[23 - Source Documentation/Configure Resources Roles and Team Resources]]
- [[23 - Source Documentation/Create Edit and Delete Menu Links]]
- [[23 - Source Documentation/Creating and Managing Business Agreements]]
- [[23 - Source Documentation/Getting Started with Clarity Administration]]
- [[23 - Source Documentation/People-Centric Planning]]
<!-- SOURCE_COVERAGE_END -->
