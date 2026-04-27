---
title: NAMEOPTIONS
type: db-table
table: NAMEOPTIONS
columns: 151
audience: dev
domain: development
canonical: true
erds:
  - Financial Administration
fk_targets:
  - COSTPLUS
  - DEPARTMENTS
  - LOCATIONS
  - PPA_MATRIX
tags:
  - dev
  - schema
  - table
  - erd/financial-administration
---

# NAMEOPTIONS

> [!info] Description
> This table stores the CA Clarity PPM-wide options for financial processing.

## Subject areas (ERDs)
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `VOUCHER` | INTEGER | NOT NULL | Indicates if the transaction entry through vouchers is enabled. Values are: - 0 = No - 1 = Yes |
| `EXPENSES` | INTEGER | NOT NULL | Indicates if the expense processing is active in CMS. Values are: - 0 = No - 1 = Yes. The expense entry menu is enabled. |
| `MATERIALS` | INTEGER | NOT NULL | Indicates if material's processing is active in CMS. Values are: - 0 = No - 1 = Yes |
| `COSTVARIANCES` | INTEGER | NOT NULL | Indicates if cost variances are enabled in CMS. Values are: - 0 = No - 1 = Yes |
| `MULTIPLIERS` | INTEGER | NOT NULL | Indicates if multipliers are used. Value are: - 0 = No multipliers are not used - 1 = Yes multipliers are used |
| `BURDEN` | INTEGER | NOT NULL | The default burden amount. |
| `OVERHEAD` | INTEGER | NOT NULL | This column refers to the default overhead for transactions. |
| `SKILLS` | INTEGER | NOT NULL | Indicates if the employee skill processing is enabled in CMS. Values are: - 0 = No - 1 = Yes |
| `BATCH` | INTEGER | NOT NULL | Reserved for internal use only. Used for batch transaction entry. |
| `TARGETPERCENTBILLABLE` | INTEGER | NOT NULL | The percentage of time resources can target as billable. |
| `TARGETBILLRATE` | INTEGER | NOT NULL | The target bill rate used in reporting. |
| `DEFAULTPROJECT` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `CHARGEMILEAGE` | INTEGER | NOT NULL | Indicates if mileage charge processing is active in CMS. Values are: - 0 = No - 1 = Yes |
| `CHARGETRAVEL` | INTEGER | NOT NULL | Indicates if the travel charge processing is active in CMS. Values are: - 0 = No - 1 = Yes |
| `STANDARDORPERCENT` | INTEGER | NOT NULL | A flag that indicates whether to use the standard rate of percent. |
| `RATEDEFAULT` | NVARCHAR | NULL | Indicates what drives the rate default for financial processing. Values are: - 0 = C - Client - 1 = P - Project - 2 = S - Cost - 3 = R - Employee - 4 = O - Override |
| `DFLTPERCENTBILLABLE` | FLOAT | NULL | This column indicates the default percent billable, if the percent billable is active. |
| `DFLTBILLRATE` | NUMERIC | NULL | This column indicates the default bill rate, if bill rate is active. |
| `TIMEINCREMENT` | NUMERIC | NULL | The default time increment for the project. Used in project profile. |
| `DEFAULTPROJECTCODE` | NVARCHAR | NULL | The default project code if default project is active. |
| `DEFAULTHOURSWORKED` | NUMERIC | NULL | The default number of hours worked each week. |
| `MINIMUMCHARGE` | NUMERIC | NULL | The minimum amount that can be charged. |
| `WRITEOFFAMOUNT` | NUMERIC | NULL | The minimum write-off amount. |
| `DEFAULTENTITY` | NVARCHAR | NULL | The default financial entity for financial defaults. This refers to entity in ENTITY table. |
| `DEFAULTBILLINGENTITY` | NVARCHAR | NULL | The default entity used when billing. This refers to entity in the ENTITY table. |
| `DEFAULTLOCATION` | NVARCHAR | NULL | The default location code. This refers to the [[LOCATIONS]].LOCATIONID. |
| `DEFAULTDEPARTMENT` | NVARCHAR | NULL | The default department code. This refers to [[DEPARTMENTS]].DEPARTCODE. |
| `DEFAULTPROJCLASS` | NVARCHAR | NULL | The default project class used. This refers to projclass in PROJCLASS table. |
| `STANDARDRATE` | NUMERIC | NULL | The standard rate that is applied if the travel charge is active and standard percent is 1. |
| `PERCENTOFBILLING` | NUMERIC | NULL | Indicates the percent of the bill if the travel charge is active and the standard percent is 0. |
| `TRAVCOSTCODE` | NVARCHAR | NULL | The cost code used for travel changes. This refers to [[COSTPLUS]].COSTPLUSCODE. |
| `MILECOSTCODE` | NVARCHAR | NULL | The mileage cost. This refers to [[COSTPLUS]].COSTPLUSCODE. |
| `ONETIMECLIENTID` | NVARCHAR | NULL | The client ID. |
| `ALLOWNONCHARGEABLEOVERRIDE` | INTEGER | NOT NULL | Indicates if the override of the chargeable or non-chargeable bit is allowed during transaction entry. Values are: - 0 = No - 1 = Yes |
| `INTERNALWIP` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `HOLDWIP` | INTEGER | NOT NULL | Lets users put projects on hold. |
| `EVENTS` | INTEGER | NOT NULL | Enables users to create project events. |
| `UNIONS` | INTEGER | NOT NULL | Enables union support. Values are: - 0 = Does not allow union support - 1 = Enables union support |
| `DFLTBUDGETACTIVE` | INTEGER | NOT NULL | The default for projects that indicates whether projects are budgeted. Value are: - = No, default is not used - = Yes, default is used |
| `DFLTBURDENACTIVE` | INTEGER | NOT NULL | The default burden. |
| `DFLTOVERHEADACTIVE` | INTEGER | NOT NULL | Indicates if the overhead is active in CMS. Values are: - 0 = No - 1 = Yes |
| `GLINTEGRATION` | INTEGER | NOT NULL | Indicates whether GL (general ledger) integration is allowed. Values are: - 0 = No - 1 = Yes |
| `DFLTBUDGETLEVELLBR` | NUMERIC | NULL | The default cost key level number if the budget is active. This refers to [[COSTPLUS]].COSTPLUSCODE. |
| `DFLTBUDGETRATESRCLBR` | NUMERIC | NULL | The default budget rate matrix for labor transactions. This refers to the PPA_MATRIX table. |
| `DFLTBUDGETCOSTSRCLBR` | NUMERIC | NULL | The default budget cost matrix for labor transactions. This refers to the PPA_MATRIX table. |
| `DFLTBUDGETRATELOCLBR` | NUMERIC | NULL | The default budget rate for location. |
| `DFLTBUDGETLEVELMTL` | NUMERIC | NULL | The default budget level for material associated with projects. |
| `DFLTBUDGETRATESRCMTL` | NUMERIC | NULL | The default budget rate matrix for material transactions. This refers to PPA_MATRIX. |
| `DFLTBUDGETCOSTSRCMTL` | NUMERIC | NULL | The default budget cost matrix for material transactions. This refers to the PPA_MATRIX table. |
| `DFLTBUDGETRATELOCMTL` | NUMERIC | NULL | The default budget rate for the location. |
| `DFLTBUDGETLEVELEQUIP` | NUMERIC | NULL | The default budget level for equipment. |
| `DFLTBUDGETRATESRCEQUIP` | NUMERIC | NULL | The default rate matrix for equipment transactions. This table refers to the PPA_MATRIX table. |
| `DFLTBUDGETCOSTSRCEQUIP` | NUMERIC | NULL | The default cost matrix for equipment transactions. This refers to the PPA_MATRIX table. |
| `DFLTBUDGETRATELOCEQUIP` | NUMERIC | NULL | The default equipment location for projects. |
| `DFLTBUDGETRATEALLOWOVRDLBR` | INTEGER | NOT NULL | The default indicating if the rate override is allowed. Values are: - 0 = No - 1 = Yes |
| `DFLTBUDGETRATEALLOWOVRDMTL` | INTEGER | NOT NULL | If budgeting is active, the default indicating whether the rate override is allowed for material transactions if budgeting is active. Values are: - 0 = No - 1 = Yes |
| `DFLTBUDGETRATEALLOWOVRDEQUIP` | INTEGER | NOT NULL | If budgeting is active, the default indicating whether the rate override is allowed for equipment transactions. Values are: - 0 = No - 1 = Yes |
| `TRANSRATEALLOWOVRDLBR` | INTEGER | NOT NULL | The default indicating whether the rate override is allowed for labor transactions. Values are: - 0 = 0 No - 1 = 1 Yes |
| `TRANSRATEALLOWOVRDMTL` | INTEGER | NOT NULL | The default indicating whether the rate override is allowed for material transactions. Values are: - 0 = No - 1 = Yes |
| `TRANSRATEALLOWOVRDEQUIP` | INTEGER | NOT NULL | The default indicating whether the rate override is allowed for equipment transactions. Values are: - 0 = No - 1 = Yes |
| `TRANSRATEALLOWOVRDEEXPENSE` | INTEGER | NOT NULL | The default indicating whether the rate override is allowed for expense transactions. Values are: - 0 = No - 1 = Yes |
| `TRANSRATESRCLBR` | NUMERIC | NULL | The default transaction rate source for labor. This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `TRANSCOSTSRCLBR` | NUMERIC | NULL | The default transaction cost source for labor. This refers [[PPA_MATRIX]].MATRIXKEY. |
| `TRANSRATELOCLBR` | NUMERIC | NULL | The default location source for labor transactions. Values are: - 0 = 1 from company - 1 = 2, 3 from project - 2 = 4 from resource |
| `TRANSRATESRCMTL` | NUMERIC | NULL | The default transaction rate source for materials This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `TRANSCOSTSRCMTL` | NUMERIC | NULL | The default transaction cost source for materials. This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `TRANSRATELOCMTL` | NUMERIC | NULL | The default rate location for materials. This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `TRANSRATESRCEQUIP` | NUMERIC | NULL | The default transaction rate source for equipment. Refers to [[PPA_MATRIX]].MATRIXKEY. |
| `TRANSCOSTSRCEQUIP` | NUMERIC | NULL | The default transaction cost source for equipment. This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `TRANSRATELOCEQUIP` | NUMERIC | NULL | The default location source for equipment transactions. Values are: - 0 = 1 From company - 1 = 2, 3 From project - 2 = 4 From resource |
| `TRANSRATESRCEXPENSE` | NUMERIC | NULL | The default transaction rate source for expenses. This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `TRANSCOSTSRCEXPENSE` | NUMERIC | NULL | The default transaction cost source for expenses. This refers [[PPA_MATRIX]].MATRIXKEY. |
| `TRANSRATELOCEXPENSE` | NUMERIC | NULL | The default location source for expenses transactions. Values are: - 0 = 1 From company - 1 = 2, 3 From project - 2 = 4 From resource |
| `SHOWRATE` | INTEGER | NOT NULL | The default for displaying the rate during transaction entry. Value are: - 0 = No - 1 = Yes |
| `DEFAULTCLNT` | INTEGER | NOT NULL | Indicates if the default client is active. It is used in transaction entry. Values are: - 0 = No - 1 = Yes |
| `THRESHOLDBILLING` | INTEGER | NOT NULL | Indicates if the threshold billing is active. It is used during billing. Values are: - 0 = No - 1 = Yes |
| `USEWIPRESERVE` | INTEGER | NOT NULL | Indicates if the use of WIP (work in progress) reserve active. Values are: - 0 = No - 1 = Yes |
| `DISPLAYCOSTS` | INTEGER | NOT NULL | Indicates if the cost of the transaction will be displayed. Values are: - 0 = No - 1 = Yes |
| `TRACKCOSTS` | INTEGER | NOT NULL | Indicates whether the costs will be tracked. Values are: - 0 = No - 1 = Yes |
| `EMPLOYEEOVERRIDEDEFAULT` | INTEGER | NOT NULL | Indicates if the employee override is enabled during transaction entry. Values are: - 0 = No - 1 = Yes |
| `PROJCHGORDERSEP` | NVARCHAR | NOT NULL | The separator character used when creating a change order. |
| `DEFAULTCLNTCODE` | NVARCHAR | NULL | This column is used during transaction entry. If default client is active, the default client code. |
| `DFLTBURDENLEVEL` | NUMERIC | NULL | The default cost key level from which burden is obtained. |
| `DFLTBURDENCODE` | NVARCHAR | NULL | The default burden code used for burden. |
| `DFLTOVERHEADLEVEL` | NUMERIC | NULL | The default cost key level from which overhead is obtained. |
| `DFLTOVERHEADCODE` | NVARCHAR | NULL | The default burden code used for overhead. |
| `AGEBRACKET1` | NUMERIC | NULL | The lower threshold for the first WIP (work in progress) aging level. |
| `BRACKETDESCRIPTION1` | NVARCHAR | NULL | The description for the first WIP (work in progress) aging level. |
| `AGEBRACKET2` | NUMERIC | NULL | The lower threshold for the second WIP (work in progress) aging level. |
| `BRACKETDESCRIPTION2` | NVARCHAR | NULL | The description for the second WIP (work in progress) aging level. |
| `AGEBRACKET3` | NUMERIC | NULL | The lower threshold for the third WIP (work in progress) aging level. |
| `BRACKETDESCRIPTION3` | NVARCHAR | NULL | The description for the third WIP (work in progress) aging level. |
| `AGEBRACKET4` | NUMERIC | NULL | The lower threshold for the fourth WIP (work in progress) aging level. |
| `BRACKETDESCRIPTION4` | NVARCHAR | NULL | The description for the fourth WIP (work in progress) aging level. |
| `AGEBRACKET5` | NUMERIC | NULL | The lower threshold for the fifth WIP (work in progress) aging level. |
| `BRACKETDESCRIPTION5` | NVARCHAR | NULL | The description for the fifth WIP (work in progress) aging level. |
| `WIPRESERVE` | NVARCHAR | NULL | If WIP (work in progress) reserve is active, it is the basis for WIP reserve. Values are: - 0 = W WIP class - 1 = P Project |
| `SOURCEFIELDENTITY` | NVARCHAR | NULL | The source for the entity. Values are: - 0 = Client project - 1 = Employee |
| `SOURCEFIELDLOCATION` | NVARCHAR | NULL | The source for location. Values are: - 0 = Client - 1 = Project - 2 = Employee - 3 = Cost code - 4 = Rates |
| `SOURCEFIELDDEPARTMENT` | NVARCHAR | NULL | The source for the department. Values are: - 0 = Client - 1 = Project - 2 = Employee - 3 = Cost Code - 4 = Rates |
| `LASTUPDATE` | DATE | NULL | The last time the table was updated. |
| `LASTUPDTDBY_RESOURCE_CODE` | NVARCHAR | NULL | The user who last updated the table. |
| `ALLOWMULTIPLELOGONS` | INTEGER | NOT NULL | Indicates if a resource is allowed if multiple logins in CMS. Values are: - 0 = No - 1 = Yes |
| `ENFORCEPROJECTSTARTDATE` | INTEGER | NOT NULL | Indicates if the project start date a required column. Values are: - 0 = No - 1 = Yes |
| `HISTORYMODE` | NUMERIC | NOT NULL | The default history mode that is used when creating a new project. |
| `HISTORYSUMMARY` | NUMERIC | NOT NULL | The default history summary that is used when creating a new project. |
| `ALLOW_USE_OF_RATEMATRIX` | INTEGER | NOT NULL | Enables the rate matrix in the system. |
| `ALLOW_USE_OF_COSTPLUS` | INTEGER | NOT NULL | Enables cost plus in the system. |
| `RATEMATRIX` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `COSTPLUS` | INTEGER | NOT NULL | The default cost plus that is used when creating a new project. |
| `BATCHBILL` | INTEGER | NOT NULL | Indicates whether batch billing is allowed in the system. values are: - 0 = No - 1 = Yes |
| `DFLTBILLINGLOCATION` | NVARCHAR | NULL | The default location value used when billing. This refers to the LOCATIONS table. |
| `ATEREMOTEPROFILES` | NVARCHAR | NOT NULL | The directory where advanced time and expense remote profiles are stored. |
| `USEADMINCHARGES` | INTEGER | NOT NULL | Indicates whether to apply administrative charges to billing records. Values are: - 0 = Administrative charges are not applied - 1 = Administrative charges are applied |
| `INTEGRATION_DB` | NVARCHAR | NULL | The Sun database with which project accounting (PA) is integrating. |
| `USECHANGEORDERS` | INTEGER | NOT NULL | Indicates whether to use change orders. Values are: - 0 = Disables change orders - 1 = Enables change orders |
| `MAXHRSPERDAY` | NUMERIC | NOT NULL | The maximum hours allowed for entry per day by each employee. |
| `GL_NOMATCH_FLAG_D` | INTEGER | NOT NULL | Indicates whether to mark GL (general ledger) unmatched transactions as D for no post. |
| `TAX_TYPE` | NUMERIC | NOT NULL | The tax type to use. Values are: - 0 = None - 1 = CA taxes |
| `ALLOW_PARTIAL_POST_OF_DIST` | INTEGER | NOT NULL | Allows the user to post distributions. |
| `EXP_RPTS_THROUGH_AP` | INTEGER | NOT NULL | Indicates if the system can send expense reports to Accounts Payable (AP) and cut a check for the resource. 1 means the system can send expense reports to AP. |
| `ALLOW_TIME_PURGE` | INTEGER | NOT NULL | Allows resources to purge their submitted time transactions. |
| `MILEAGE_RATE` | NUMERIC | NOT NULL | The current reimbursement rate for mileage in expense report system. |
| `MILEAGE_EXPENSE_TYPE` | NUMERIC | NOT NULL | The mileage expense type. |
| `TIME_APPROVALS_REQUIRED` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `EXPENSE_APPROVALS_REQUIRED` | INTEGER | NOT NULL | Indicates if approvals are required for expense reports. Values are: - 0 = No - 1 = Yes |
| `DTE_TYPE` | NUMERIC | NOT NULL | Reserved for internal use only. It is used for distributed time entry integration. |
| `DTE_SUBMIT_MODE` | NUMERIC | NOT NULL | Reserved for internal use only. Used for distributed time entry integration. |
| `RATE_MATRIX_EXCLUSIVE` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `GLOBAL_EXPENSE_TYPE_COST_CODES` | INTEGER | NOT NULL | Indicates of the expense type cost codes apply to all users. A value of 1 means that the expense type cost codes apply to all users. |
| `TIME_EXPENSE_SHOW_RATE` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `POC_BUDGET` | INTEGER | NOT NULL | The budget percentage of completion. |
| `POC_CONTRACT` | INTEGER | NOT NULL | The contract percentage of completion. |
| `POC_MILESTONE` | INTEGER | NOT NULL | The milestone percentage of completion. |
| `SHOW_NONCHARGEABLES` | INTEGER | NOT NULL | Flag to determine whether to show non-chargeables in browsers for budgeted projects. Values are: - 0 = No - 1 = Yes |
| `DEFAULTCLNTCLASS` | NVARCHAR | NULL | The default client used when creating customers. This refers to the CLNTCLASS table. |
| `DEFAULTWIPCLASS` | NVARCHAR | NULL | The default work-in-progress (WIP) class used when creating customers. Refers to the WIPCLASS table. |
| `DEFAULTBATCHCYCLE` | NVARCHAR | NULL | The default batch cycle to use for new projects. This refers to the BATCHSETTINGS table. |
| `LABOR_EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The labor exchange rate type. Values are: - 0 = AVERAGE - 1 = FIXED - 2 = SPOT |
| `EXPENSE_EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The expense exchange rate type. Values are: - 0 = AVERAGE - 1 = FIXED - 2 = SPOT |
| `MATERIALS_EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The materials exchange rate type. Values are: - 0 = AVERAGE - 1 = FIXED - 2 = SPOT |
| `EQUIPMENT_EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The equipment exchange rate type. Values are: - 0 = AVERAGE - 1 = FIXED - 2 = SPOT |
| `ALLOW_ADJUST_ALREADY_BILLED` | INTEGER | NULL | Allows the transaction import to adjust transactions that have already been billed. |
| `ALLOW_NEGATIVE_INVOICES` | INTEGER | NOT NULL | Indicates whether net negative invoices are allowed in the system. It is a Boolean column. Values are: - 0 = No - 1 = Yes |
| `PROJECT_FORECASTING` | INTEGER | NOT NULL | This column indicates whether forecasting is enabled for the system or not. It is a Boolean column. Values are: - 0 = No - 1 = Yes |
| `ALLOW_AUTOPOPBILL` | INTEGER | NOT NULL | Allows the automatic population of billing values from actuals. Values are: - 0 = No - 1 = Yes |
| `ENTITY_SECURITY` | INTEGER | NULL | The level of entity security. |
| `ALLOCATIONS` | INTEGER | NOT NULL | Indicates if the general ledger (GL) allocations are enabled in the system. Values are: - 0 = 0 No - 1 = 1 Yes (the default) |
| `FISCAL_PERIOD_NAME` | NVARCHAR | NULL | The name of the default fiscal period. This refers to the BIZ_COM_PERIODS table. |
| `FILTER_FINANCIAL_OBS` | INTEGER | NOT NULL |  |
| `RES_FIN_EDIT_RIGHT_AUTO` | INTEGER | NOT NULL | This column indicates whether resource managers have the access right: Resource - Edit Financial. Values are: - 0 = No - 1 = Yes |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `DEFAULTLOCATION` | [[LOCATIONS]].`LOCATIONID` | |
| `DEFAULTDEPARTMENT` | [[DEPARTMENTS]].`DEPARTCODE` | |
| `TRAVCOSTCODE` | [[COSTPLUS]].`COSTPLUSCODE` | |
| `MILECOSTCODE` | [[COSTPLUS]].`COSTPLUSCODE` | |
| `DFLTBUDGETLEVELLBR` | [[COSTPLUS]].`COSTPLUSCODE` | |
| `TRANSRATESRCLBR` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANSCOSTSRCLBR` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANSRATESRCMTL` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANSCOSTSRCMTL` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANSRATELOCMTL` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANSRATESRCEQUIP` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANSCOSTSRCEQUIP` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANSRATESRCEXPENSE` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANSCOSTSRCEXPENSE` | [[PPA_MATRIX]].`MATRIXKEY` | |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PROJCLASS]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]
