---
title: Advanced Reporting Access Rights
tags:
  - reference
  - admin
aliases:
  - Advanced Reporting Rights
---
# Advanced Reporting Access Rights

All Advanced Reporting access rights are **Global** type. They map to Jaspersoft roles.

| Right Name | Description | Jaspersoft Role Assigned |
|---|---|---|
| Advanced Reporting - Navigate | Allows the resource to navigate to the Advanced Reporting page. | ROLE_USER |
| Advanced Reporting - Report Create | Allows the resource to create reports. Requires: Advanced Reporting - Navigate. | ROLE_REPORT_DESIGNER |
| Advanced Reporting - Administer | Allows the resource to administer Advanced Reporting. Requires: Advanced Reporting - Navigate. | ROLE_ADMINISTRATOR |
| Advanced Reporting - Dashboard Create | Allows the resource to create dashboards. Requires: Advanced Reporting - Navigate. | ROLE_DASHBOARD_DESIGNER |
| Advanced Reporting - Ad Hoc Create | Allows the resource to create ad hoc views. Requires: Advanced Reporting - Navigate. | ROLE_ADHOC_DESIGNER |
| Advanced Reporting - Data Source Create | Allows the resource to create data sources. Requires: Advanced Reporting - Navigate. | ROLE_DATASOURCE_DESIGNER |
| Advanced Reporting - Domain Create | Allows the resource to create domains. Requires: Advanced Reporting - Navigate. | ROLE_DOMAIN_DESIGNER |

## Notes

- All rights are Global type.
- The Navigate right is a prerequisite for all other Advanced Reporting rights.
- Each right maps the user to a specific Jaspersoft role which determines their capabilities within the Jaspersoft reporting environment.

## Related
- [[Overview]]
- [[_MOC Reference]]
- [[_MOC Advanced Reporting]]

%%Source: p3626%%
