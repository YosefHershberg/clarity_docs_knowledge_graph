---
title: PMO Administration Reports
tags:
  - reference
  - admin
aliases:
  - Admin Reports
  - PMO Admin Reports
---
# PMO Administration Reports


The Administration reports provide visibility into license distribution, user activity, access rights, database schemas, and customizations. They help administrators audit users, understand the database structure, and identify custom content.

> Source: Clarity 16.4.1 documentation, pp. 3572–3596

## Reports Included


| Report Name | Resource ID | Data Source |
|---|---|---|
| Data Warehouse Schema | CSK_ADM_DataWarehouseSchema | DWH Bean |
| Clarity Schema | CSK_ADM_PPMSchema | Classic PPM Bean |
| User License and Activity | CSK_USR_LicenseActivity | Classic PPM Bean |
| User License and Activity Detail | CSK_USR_LicenseActivityDetail | Classic PPM Bean |
| User Access Rights | CSK_USR_AccessRights | Classic PPM Bean |
| User Access Rights Detail | CSK_USR_AccessRightsDetail | Classic PPM Bean |
| Database Connection Check to Clarity and DWH | (CSK_ADM_DBConnectionCheck) | DWH Bean |
| Customizations Overview | CSK_ADM_Customizations | Classic PPM Bean |

**Folder location:** `Clarity /Reports/Administration/`

---

## Data Warehouse Schema


**Description:** Displays the columns of tables and views in the Data Warehouse (DWH) schema. Includes column data types, nulls constraints, and comments. Grouped by database table or view. Includes custom fields/objects marked as DWH-enabled.

**Prerequisites:**
- **Load Data Warehouse** job must be run (if DWH is not populated, report shows no records and parameter shows no options)

**Key Parameters:** Data Warehouse Table (multiple-select query, optional)

**Key Fields:** Column name, definition (data type), nulls constraint (Yes = NOT NULL), comments

**Key Behaviors:**
- Nulls column: "Yes" when NOT NULL constraint is specified; otherwise "No"
- Includes custom attributes enabled for the DWH

**Security:** No security check inside the report

---

## Clarity Schema


**Description:** Displays the columns of tables and views in the Classic PPM (transactional) schema. Includes column data types, nulls constraints, and comments. Grouped by database table or view.

**Prerequisites:** None

**Key Parameters:** Clarity Table (multiple-select query, optional)

**Key Fields:** Column name, definition, nulls constraint, comments

**Security:** No security check inside the report

---

## User License and Activity


**Description:** Displays the license type and usage frequency of each resource. Shows general resource information. Groupable by:
No Grouping, Resource Manager, Primary Role, Employment Type, License Type, Usage Frequency, and OBS Level. Includes two pie charts:
user count by license type and user count by last login date (usage frequency). Drills down to User License and Activity Detail.

**Prerequisites:**
- User must have "Active" status to display (Inactive and Lock status users do not display, even if active flag is checked)

**Key Parameters:** Resource OBS Type/Unit (required), Resource Manager, Primary Role, Resource, Employment Type, License Type, Usage Frequency, Sort By, Group By (No Grouping/Resource Manager/Primary Role/Employment Type/License Type/Usage Frequency/OBS Level), Show Graphs (boolean)

**Key Fields:** Resource name, license type, last login date, usage frequency, primary role, resource manager, employment type

**Drill-Down:** Click resource name → User License and Activity Detail (access rights contributing to license type)

**Security:** Administration access required (no per-resource security)

---

## User License and Activity Detail


**Description:** Detail-level companion to User License and Activity. Displays the access rights that contribute to each resource's license type. Useful for understanding why a resource has a particular license.

**Prerequisites:** Same as User License and Activity (user must be Active)

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Resource, License Type, Employment Type

**Key Fields:** Resource name, license type, access right name, access right scope (Global/Instance/OBS Unit)

**Security:** Administration access required

---

## User Access Rights


**Description:** Provides a summary view of access rights assigned to users. Shows rights granted directly or through groups and OBS units. Grouped by user with configurable OBS level display.

**Prerequisites:** Load Data Warehouse and Load Data Warehouse Access Rights jobs

**Key Parameters:** Resource OBS Type/Unit, Resource Manager, Resource, Access Right

**Access Right Assignment Methods:**
- **Direct:** Access right assigned directly to the resource
- **Group:** Access right assigned to a group the resource belongs to
- **OBS Unit:** Access right assigned to an OBS unit (with "Used for Access Rights" option enabled). Resources belonging to the unit inherit the rights depending on OBS association mode (ancestor, descendant, or direct unit)

**Security:** Administration access required

---

## User Access Rights Detail


**Description:** Provides a detailed listing of access rights with investment-level or resource-level scope information. Complements User Access Rights by showing the specific objects to which rights apply.

**Prerequisites:** Load Data Warehouse and Load Data Warehouse Access Rights jobs

**Security:** Administration access required

---

## Database Connection Check


**Description:** Verifies the connection between the Jaspersoft server and the Clarity Data Warehouse Bean Data Source. Displays a green bulb gauge showing "Normal" when the connection is successful. Reports the data source name, DB vendor (Oracle or MS SQL Server), DB schema, and DB link.

**Prerequisites:** None

**Key Parameters:** DB Vendor (hidden, passed through Classic PPM), DB Schema (hidden), DB Link (hidden)

**Key Fields:**
- Data Source: Classic PPM DWH BEAN
- DB Vendor: Oracle or Microsoft SQL Server
- DB Schema: DWH schema name
- DB Link: DWH database link name (from CSA configuration)

**On Error:** "The server has encountered an error. Excuse the inconvenience." — indicates DWH Bean Data Source connection issue.

**Security:** None

---

## Customizations Overview


**Description:** Lists all content that is NOT included out-of-the-box with Clarity, allowing administrators to quickly identify custom content.
Covers database objects (tables, views, functions, etc.) and Clarity content (Studio objects/attributes, NSQL queries, GEL scripts, reports, jobs).
Grouped by "Database Objects" or "Clarity" and sub-grouped by content type.

**Prerequisites:** None

**Key Parameters:**
- **Content Type** (multiple-select, optional): Attribute, Custom Script, Object, Query, Report, Job, Function, Index, Package, Package Body, Stored Procedure, Table, Trigger, View
- **Content Item** (text, optional): Partial name match (case-insensitive, no wildcards needed)
- **Content Item ID** (text, optional): Partial ID match (case-insensitive)
- **Include SQL Query** (boolean): If checked, displays NSQL query code in SQL Query/Script Text column
- **Include Script Text** (boolean): If checked, displays GEL script code in SQL Query/Script Text column

**Content Type Details:**
| Content Type | Description |
|---|---|
| Attribute | Custom attributes created in Studio Objects |
| Custom Script | Custom GEL scripts in processes |
| Object | Custom Studio objects |
| Query | Custom NSQL queries |
| Report | Custom report definitions |
| Job | Custom job definitions |
| Function | Functions in the Clarity schema |
| Index | Indexes in the Clarity schema |
| Package | Packages in the Clarity schema |
| Package Body | Package body definitions |
| Stored Procedure | Stored procedures in the Clarity schema |
| Table | Tables in the Clarity schema |
| Trigger | Triggers in the Clarity schema |
| View | Views in the Clarity schema |

**Exclusions:** Items registered in CMN_DB_HISTORY_TABLE, NSQL queries from Agile Addin/APM/PMO Accelerator add-ins, Studio objects/attributes from those same add-ins, system
attributes (not custom), non-GEL custom scripts, jobs that are not SQL Stored Procedure type, reports/jobs from APM and PMO Accelerator add-ins.

**Custom GEL Script Listing Includes:** Process name, process code, step name, and step code.

**Security:** No security check in the report query

---

## Related

- [[_MOC Advanced Reporting]]
- [[PMO Accelerator Setup]]
- [[Roles and Permissions]]
- [[Getting Started Jaspersoft]]

%%Source: p3572-3596%%
