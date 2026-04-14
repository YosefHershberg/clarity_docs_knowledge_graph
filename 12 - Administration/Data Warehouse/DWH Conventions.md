---
title: Clarity Data Warehouse Conventions
tags:
  - admin
aliases:
  - DWH Conventions
---
# Clarity Data Warehouse Conventions

administrator or report developer, use these parameters to compare user properties in Jaspersoft for existing users with the properties in Classic PPM.
> [!warning]
> Manage user properties from Classic PPM. If you change user properties in Jaspersoft only, those user properties are overwritten with the properties set in Classic PPM the next time the user logs in to Advanced Reporting.
> When a Classic PPM user accesses Advanced Reporting for the first time, the user is automatically created in Jaspersoft and certain parameters are passed to Jaspersoft. If you later update Advanced Reporting access rights for the user in Classic PPM, the corresponding roles for this user are automatically updated in Jaspersoft. Similarly, if you update certain user properties in Classic PPM, the corresponding Jaspersoft properties are also updated. The user status is also controlled from Classic PPM. For example, if a user is designated inactive or locked in Classic PPM, the user also becomes inactive or locked in Jaspersoft.
> The following table shows how the user properties are mapped between the application. These parameters are defined at the user level (that is, you have different parameter values for each user). You can use the information in this table to compare user properties in Classic PPM with the properties in Jaspersoft.

Field User Name

Classic PPM Example
cuser

User Login Name (appears in upper right corner of all pages)
User Locale

Carol User en_US

User Time Zone User Email Address

(GMT-05:00) Eastern Time
caroluser@mail.com

User Language

en

UI Theme

default

Attribute Name User ID User Name Locale Time Zone Email ppmUserLanguage ppmUserUITheme

Jaspersoft

Jaspersoft Location

Parameter Type

Properties

Native to Jaspersoft. Must populate from Classic PPM.

Properties

Native to Jaspersoft. Must be populated from Classic PPM.

Login

Native to Jaspersoft. Must be populated from Classic PPM.

Login

Native to Jaspersoft. Must be populated from Classic PPM.

Properties

Native to Jaspersoft. Must be populated from Classic PPM.

Profile Attribute

Custom attribute. Must be populated from Classic PPM to Jaspersoft.

Profile Attribute

Custom attribute. Must be populated from Classic PPM to Jaspersoft.

Clarity Data Warehouse (DWH) Conventions
Use the following Data Warehouse (DWH) standards and conventions to generate reporting data using your preferred reporting tools:

- Data Warehouse Table Prefixes - Data Warehouse Static Lookup Standards - Data Warehouse Dynamic Lookup Standards - Data Warehouse Fact Tables - Data Warehouse Query Example - Referential Integrity
Data Warehouse Table Prefixes
The Data Warehouse schema uses the prefixes in the following table in its table naming convention.

DWH_CFG
DWH_CMN DWH_CMP DWH_FIN DWH_INV DWH_LKP DWH_META DWH_ODF DWH_PFM DWH_RES DWH_RIM DWH_TME DWH_X

Prefix

Table Description
Configuration tables that are used to supply log and audit information Common database objects that are used across most areas Company database objects Financial management database objects Investment management database objects Lookup database objects Metadata tables that help determine the DWH structure Customer-specific database objects Portfolio management database objects Resource management database objects Risk and Issue management database objects Time management database objects Internal database objects that are used to help populate the fact tables

Data Warehouse Static Lookup Standards
In the Data Warehouse, each lookup has its own table. The lookup values are stored separately in the selected languages for the Data Warehouse. For example, if the Data Warehouse is stored in English and Spanish, two records exist for each lookup value.
The following table shows the structure of a static lookup in the schema.

Column [LOOKUP_NAME]_key
LANGUAGE_CODE_KEY

Data Type number or varchar(30)

Description
The key value of the lookup. If the hidden key in Classic PPM is lookup_enum, the key in the Data Warehouse is populated with the lookup_enum. Same for lookup_code. Example: investment_status_key.
Number ID from the Classic PPM languages table.

Column LANGUAGE_CODE [LOOKUP_NAME] SORT_ORDER IS_ACTIVE CLARITY_UPDATED_DATE DW_UPDATED_DATE

Varchar(30)

Data Type

Varchar(255)

Number

Date

Description
Unique language code from the Classic PPM languages table.
Descriptive name of the lookup; for example: investment_status
The order in which the user wants to see the values
Indicates whether the current lookup value is active
The last time the record was updated in Classic PPM.
The last time the record was updated in the Data Warehouse.

Data Warehouse Dynamic Lookup Standards
Each dynamic lookup has its own table. Each table structure can be different depending on the lookup. If the lookup is language-dependent, the langage_code_key and language_code are stored. Otherwise, there is one record for each value.
The following table shows the structure of a dynamic lookup in the schema.

Column [lookup_name]_key Language_code_key Language_code [lookup_name] ... Clarity_updated_date DW_updated_date

Data Type ... Number Varchar(30) ... ... Date Date

Description
The key value of the dynamic lookup. The value depends on the NSQL hidden value.
Number ID from the Classic PPM languages table, if applicable.
Unique language code from the Classic PPM languages table, if applicable.
Descriptive name of the lookup. Example: investment_status.
Miscellaneous columns specific to the lookup.
The last time the record was updated in Classic PPM.
The last time the record was updated in the Data Warehouse.

Data Warehouse Fact Tables In the data warehouse, fact tables use the following conventions:

- Fact table names end with the suffix _FACTS. - Tables with _PERIOD_ in the name store facts by defined periods. - Tables with _SUMMARY_ in the name store summarized facts. Summary tables exist for many of the facts. If you are
matching summary numbers to period facts, qualify the period facts by a period type. - Tables with a DWH_X_ in the name are internal fact tables. These tables are used to populate the period and summary
fact tables in the most efficient way. These tables are not available to users. - The fact table keys all have referential integrity. - Calculated facts are stored in the tables for consistency.

- Summary rollups exist in the Data Warehouse. Assignments roll up to tasks and tasks roll up to assignments. - Hidden time slices aggregate the data into weekly, monthly, and fiscal periods.
The following table includes examples of fact tables.

Fact Description Financial Transaction Time Entry Financial Benefit Financial Plan Task Assignment Investment Task Investment Team Investment Resource

Fact Table Name DWH_FIN_TRANSACTION_FACTS DWH_TME_ENTRY_FACTS DWH_FIN_BENEFIT_PERIOD_FACTS DWH_FIN_PLAN_PERIOD_FACTS DWH_INV_ASSiGN_PERIOD_FACTS DWH_INV_TASK_PERIOD_FACTS DWH_INV_TEAM_PERIOD_FACTS DWH_INV_PERIOD_FACTS DWH_RES_PERIOD_FACTS

The following four period types are used for storing facts:
- Daily - Weekly - Monthly - Fiscal Period

Aggregation Daily Daily Fiscal Fiscal Fiscal, Weekly, Monthly Fiscal, Weekly, Monthly Fiscal, Weekly, Monthly Fiscal, Weekly, Monthly Fiscal, Weekly, Monthly

Example: Summary Fact Table Names The following table includes examples of summary fact table names.

Financial Benefit Financial Plan Task Assignment Investment Task Investment Team Investment

Fact Description

Fact Table Name DWH_FIN_BENEFIT_SUMMARY_FACTS DWH_FIN_PLAN_SUMMARY_FACTS DWH_INV_ASSIGN_SUMMARY_FACTS DWH_INV_TASK_SUMMARY_FACTS DWH_INV_TEAM_SUMMARY_FACTS DWH_INV_SUMMARY_FACTS

## Related
- [[_MOC Administration]]

%%Source: p3048-3051%%


