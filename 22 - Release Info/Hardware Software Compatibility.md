---
title: Hardware and Software Compatibility
tags:
  - reference
  - admin
  - onprem
aliases:
  - Hardware Software Compatibility
canonical: true
audience: admin
domain: reference
---
# Hardware and Software Compatibility

## Downloads

- **Feature Functional Comparison Report:** Download the Clarity 16.4.1 Feature Functional Comparison Report. Use the filter option to filter against the Module and the Release columns.
- **Summary Report:** Download the Summary report for a high-level review of key features introduced in various releases. This summary is for informational purposes only. If there is a conflict between this summary and detailed documentation, the detailed documentation is the guiding authority.

## Hardware and Software Compatibility Specifications

Formerly known as product architecture stack (PAS) requirements.

> [!TIP]
> This release supports the minimum versions of third-party software listed on this page. When third-party software receives upgrades, compatibility is likely but cannot be guaranteed.
> For example, if this release supports version 1.1, you may be able to apply 1.1.1 or 1.2 without incident; however, 1.3 and 2.0 might fail and require a rollback.

### Specifications: Hardware Requirements (On-Premise Only)

See **Clarity Architecture and Sizing Recommendations** in Installing and Upgrading.

### Specifications: Application Server Operating System (On-Premise Only)

The following table specifies the minimum supported 64-bit operating systems for application and background servers. Only the patches, service packs, and updates for the specified versions are also supported.

- **Certified platforms** are fully tested and supported.
- **Compatible platforms** are partially tested, tested in prior releases, or noted as a downstream compatible distribution.

| Operating System | Minimum Version | Support Type |
|---|---|---|
| Microsoft Windows Server | Windows Server 2022 | Certified |
| Microsoft Windows Server | Windows Server 2019 | Certified |
| Red Hat Enterprise Linux 64-bit | 8u8 | Certified |
| Red Hat Enterprise Linux 64-bit | 9u2 | Compatible |
| Rocky Linux | 8u10 (LTS) | Certified |

### Specifications: Clarity Components

| Component | Version |
|---|---|
| Virtualization | See Support Statement for Virtualization |
| Database | Oracle Standard/Enterprise 19c+; Oracle 19c multi-tenant; PostgreSQL 16.4; SQL Server 2022 Enterprise; SQL Server 2019 Enterprise CU 32 |
| Database Interface | Microsoft SQL JDBC 11.2.0.0; Oracle JDBC 19.3.0.0.0; PostgreSQL Native JDBC 42.7.7 |
| Java Application Server | Adoptium Temurin 17.0.17+10 or higher; Apache Tomcat 9.0.113 (64-bit) or higher |
| Report Server | JasperReports Server 9.0.0 or 8.1.1 |
| Mail Server | Any SMTP/IMAP/POP3 mail server |

> [!NOTE]
> Support for conversion between database vendors is not provided. Customers performing such conversions do so at their own risk. You may need to upgrade to a temporary intermediary release of Clarity before upgrading your database.

**Key notes on database support:**

- Oracle RAC, Oracle encryption, and multi-tenancy are supported.
- SQL Server Named Instances is supported. SQL Server Clustering is supported with manual intervention. SQL Server Always On is **not** supported.
- Any SQL Server deployment exceeding 20,000 users must be approved. Oracle is recommended for large high-throughput environments.
- For better performance in virtual environments, use RHEL or OEL.

### Specifications: Products Included With Clarity (On-Premise Only)

| Component | Notes |
|---|---|
| Java Application Server | Adoptium Temurin JDK for all supported operating systems; Apache Tomcat for all supported operating systems |
| Report Server | Jaspersoft Server 9.0.0 |

### Specifications: JasperReports Server Operating System

| OS | Version | Support Type |
|---|---|---|
| Windows Server 64-bit | Windows Server 2019 | Certified |
| Windows Server 64-bit | Windows Server 2022 | Compatible |
| Red Hat (RHEL) 64-bit | 2017 Standard or Datacenter | Compatible |
| Red Hat (RHEL) 64-bit | 2016 Standard or Datacenter | Compatible |
| Red Hat (RHEL) 64-bit | 8.0 or 8.2 | Certified |
| Rocky Linux | 7u6 | Compatible |
| Oracle Enterprise Linux (OEL) 64-bit | 6u10 | Compatible |
| Oracle Enterprise Linux (OEL) 64-bit | 8u10 (LTS) | Compatible |
| Google Chrome or Chromium | 115 Onwards | Compatible |

> [!NOTE]
> - Only the listed versions and configurations of Jaspersoft integrated with Clarity are supported.
> - Jaspersoft on RHEL, OEL, or CentOS connecting to a SQL Server database is not currently supported.
> - Windows Server 2022 is supported for Jaspersoft 9.0.0.

### Specifications: Jaspersoft Components

| Component | Version |
|---|---|
| Database | Oracle 19c; SQL Server 2019 CU-32; SQL Server 2017 CU-31; PostgreSQL 14.4 |
| Java Runtime | Adoptium Temurin 17.0.16+8 or higher |
| Application Server | Apache Tomcat 9.0.107 (64-bit) or higher |
| Report Server | JasperReports Server 9.0.0 or 8.1.1 |
| Mail Server | Any SMTP mail server |
| Web Browser | Google Chrome or Chromium 115+ |

### Specifications: Integrated Servers

| Software | Version |
|---|---|
| Single Sign-On Server | CA Single Sign-On 12.52 SP01 CR01; CA Single Sign-On 12.51 CR05 |
| LDAP Server | Any LDAP v3 compliant directory (CA Directory, Microsoft Active Directory, NetIQ eDirectory, Oracle Internet Directory). Multiple domains are not supported. |
| Agile Applications | Rally SaaS Enterprise or Unlimited (WSAPI 3.0+). On-premise Rally editions are no longer supported. |

### Specifications: Client-Side Components

| Software | Microsoft Windows | Apple Mac OS | Desktop Linux |
|---|---|---|---|
| OS | Windows 10, 11 (all editions) | Mac OS X Release 12.x | Any vendor with supported browser |
| Web Browsers | Firefox 147.0.1+; Chrome 141.0.3537.92+; Edge Chromium 141.0.3537.92+ | Safari 26.2; Chrome 141.0.3537.92+ | Firefox 147.0.1+; Chrome 141.0.3537.92+; Edge Chromium 141.0.3537.92+ |
| Client Applications | Microsoft Windows 10/11; Microsoft Office 2022; Microsoft 365 (C2R); Microsoft Project Online Desktop 2021/2024 (32/64-bit); CA Open Workbench 2.1.2; Adobe Acrobat Reader 10+ | Microsoft 365 for Mac OS; Adobe Acrobat Reader 10+ | No Excel Export; No MSP or OWB support |
| Client Reporting Tools | Jaspersoft 7.9 with CA JDBC Adapter | Jaspersoft 7.9 with CA JDBC Adapter | Jaspersoft 7.9 with CA JDBC Adapter |
| SOAP Integration Toolkits | Microsoft Visual Studio 2013 (.NET 4.5.1) or 2017 (.NET 4.6) | Not Applicable | Not Applicable |
| Connectors | Microsoft Project Interface; Schedule Connect | Not Applicable | Not Applicable |

> [!TIP]
> Starting with Clarity 15.4.1, all web applications, integrations, browsers, OS, and network settings must support TLS 1.2.

### Specifications: Mobile Apps

| App | Supported OS |
|---|---|
| Clarity Mobile App 3.3.1 | Apple iOS 18.0 or higher |
| Clarity Mobile App 3.3.1 | Google Android OS 12 or higher |

### Specifications: AI Service Providers

- Google Gemini
- OpenAI
- Microsoft Azure

### Specifications: Compatible Add-Ins

| Add-in, Accelerator, or Connector | Version |
|---|---|
| PMO Accelerator | 16.4.1 |
| Application Portfolio Management (APM) Add-in | 16.4.1 |
| Agile Add-In | 16.4.1 |
| Earned Value Manager | End of Life |
| Accelerator for PRINCE2 | End of Life |
| Accelerator for the PMBOK | End of Life |
| Accelerator for New Product Development | End of Life |
| Clarity SaaS Integration Adaptor | End of Life |

### Specifications: Summary of Changes in Clarity

| Component | Description |
|---|---|
| Java | Updated support for Adoptium Temurin 17.0.17+10 (Clarity Only) |
| OS | No changes |
| Products Included | Adoptium Temurin 17.0.16+8; PostgreSQL 14.4 for Jaspersoft |
| Integrated Servers | No changes |
| Mobile OS for Clarity Mobile App 3.3.1 | No changes |
| Database Server | Dropped support for Microsoft SQL Server 2017 |
| Application Server | Tomcat 9.0.113 |
| Report Server | Jaspersoft 9.0.0 |
| Client Browsers | Updated support for new releases of Firefox, Edge, and Chrome |
| Client Applications | No changes |

## International Support

The English version of Clarity is localized in these six core languages:

- French
- German
- Spanish
- Brazilian Portuguese
- Italian
- Japanese

> [!NOTE]
> Documentation will be available in localized languages 60–75 days after the Clarity General Availability announcement.

Jaspersoft Advanced Reporting is available in English, Simplified Chinese, and the six core languages above. Jaspersoft Studio is available in English or Italian only.

### Language Support Matrix

| S.No | Language | Classic PPM | Clarity | Online Help |
|---|---|---|---|---|
| 1 | Brazilian Portuguese | Yes | Yes | Yes |
| 2 | Catalan | No | No | No |
| 3 | Czech | No | No | No |
| 4 | Danish | No | No | No |
| 5 | Dutch | No | No | No |
| 6 | English | Yes | Yes | Yes |
| 7 | Finnish | No | No | No |
| 8 | French | Yes | Yes | Yes |
| 9 | German | Yes | Yes | Yes |

## Related
- [[_MOC Release Info]]

%%Source: p93-100%%
