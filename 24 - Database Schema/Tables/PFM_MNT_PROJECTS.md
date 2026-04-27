---
title: PFM_MNT_PROJECTS
type: db-table
table: PFM_MNT_PROJECTS
columns: 129
audience: dev
domain: development
canonical: true
erds:
  - Portfolios
fk_targets:
  - CMN_SEC_USERS
  - PAC_MNT_PROJECTS
tags:
  - dev
  - schema
  - table
  - erd/portfolios
---

# PFM_MNT_PROJECTS

> [!info] Description
> This table contains data from PAC_MNT_PROJECTS for investments in the portfolio.

## Subject areas (ERDs)
- [[_MOC - Portfolios ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `CHANGEORDER` | NVARCHAR | NULL | The change order code definition. It must be unique to this project. |
| `CURRENTCHANGEORDER` | NUMERIC | NULL | The number of the current change order for this project. Initially, this column is null. |
| `CURRENTREVISION` | NUMERIC | NULL | The current revision number for this project. Initially, this column is null. |
| `CLASS` | NVARCHAR | NULL | The project class to which this project is assigned. |
| `WIPCLASS` | NVARCHAR | NULL | The work in progress (WIP) class for this project. |
| `TITLE` | NVARCHAR | NULL | This column is deprecated and should no longer be used.. |
| `AFFILIATEPROJECT` | NVARCHAR | NULL | Null or the project code of the affiliate project. |
| `STATUS` | NVARCHAR | NULL | The status of the project. Values are: - O = Open - C = Closed - H = Hold |
| `TYPE_` | NVARCHAR | NOT NULL | Project type. Values are: - S = Standard - I = Internal - C = Contract - R = Retainer |
| `LOCATIONID` | NVARCHAR | NULL | The location code where the project is based. It is the home location of the project. |
| `DEPARTCODE` | NVARCHAR | NULL | The department code where the project is based. It is the home department of the project. |
| `CONTRACTDATE` | DATE | NULL | The contract date for the project. |
| `TARGETEDSTARTDATE` | DATE | NULL | The target start date of the project. |
| `STARTDATE` | DATE | NULL | The actual start date. |
| `TARGETEDCOMPLDATE` | DATE | NULL | The target completion date of the project. |
| `COMPLETEDATE` | DATE | NULL | The actual completion date. |
| `TIMEINCREMENT` | NUMERIC | NOT NULL | The minimum time increment defined for the project. |
| `APPLYBILLING` | INTEGER | NULL | Indicates if billing is applied to this entry. Values are: - 0 = No - 1 = Yes |
| `BUDGET` | INTEGER | NULL | Indicates if the project budgeted. Values are: - 0 = Non-budgeted project - 1 = Budgeted project |
| `BURDEN` | INTEGER | NULL | Reserved for internal use only. It indicates if the burden is applicable for this project. |
| `OVERHEAD` | INTEGER | NULL | Reserved for internal use only. This column indicates whether if overhead is applicable for this project. |
| `BURDENLEVEL` | NUMERIC | NULL | Reserved for internal use only. The level at which burden is applied or Null. |
| `APPLYBLABOR` | INTEGER | NULL | Reserved for internal use only. Indicates if burden applies for labor transactions. |
| `APPLYBMATERIALS` | INTEGER | NULL | Reserved for internal use only. Indicates if burden is applied for material transactions. |
| `APPLYBEQUIPMENT` | INTEGER | NULL | Reserved for internal use only. Indicates if burden is applied for equipment transactions. |
| `APPLYBEXPENSES` | INTEGER | NULL | Reserved for internal use only. Indicates if burden is applied for expense transactions. |
| `AWAITINGAPPROVAL` | INTEGER | NULL | Indicates whether this project is waiting for approval. Values are: - 0 = Not waiting for approval - 1 = Waiting for approval |
| `OVERHEADLEVEL` | NUMERIC | NULL | Reserved for internal use only. This column indicates the level at which overhead is applied or is Null. |
| `OVERHEADCODE` | NVARCHAR | NULL | Reserved for internal use only. This column indicates the overhead code for this project or is Null. |
| `APPLYOLABOR` | INTEGER | NULL | Reserved for internal use only. Indicates if overhead is applied for labor transactions. |
| `APPLYOMATERIALS` | INTEGER | NULL | Reserved for internal use only. Indicates if overhead is applied for material transactions. |
| `APPLYOEQUIPMENT` | INTEGER | NULL | Reserved for internal use only. Indicates if overhead is applied for equipment transactions. |
| `APPLYOEXPENSES` | INTEGER | NULL | Reserved for internal use only. Indicates if overhead is applied for expense transactions. |
| `BILLCYCLE` | NVARCHAR | NULL | Reserved for internal use only. The billing cycle of the project. |
| `INVOICETEMP` | NVARCHAR | NULL | Reserved for internal use only. |
| `INPROGRESS` | INTEGER | NULL | Indicates if the project is in progress. Initially, newly defined projects are in progress. Values are: - 0 = Not in progress - 1 = In progress (). |
| `APPROVED` | INTEGER | NULL | Indicates if the project is approved. In order to create a transaction for this project, it must first be approved. Values are: - 0 = Not approved - 1 = Approved |
| `NEEDAPPROVALDATETIME` | DATE | NULL | The date and time when the project was submitted for approval. |
| `APPROVEDDATETIME` | DATE | NULL | The date and time when the project was approved. |
| `BUDGETLEVELLABOR` | NUMERIC | NULL | A number indicating the cost key level or null if not budgeted. |
| `BUDGETRATESOURCELABOR` | NUMERIC | NULL | A number indicating the cost key level of the rate source. This is used when budgeting for labor. If labor is not budgeted, this value is null. |
| `BUDGETCOSTSOURCELABOR` | NUMERIC | NULL | Indicates where the budget retrieves the cost for labor. |
| `BUDGETRATELOCATIONLABOR` | NUMERIC | NULL | A number indicating the cost key level of the rate location used when labor is budgeted or null if it is not budgeted. |
| `TRANSRATESOURCELABOR` | NUMERIC | NULL | The transaction rate source for labor. |
| `TRANSCOSTSOURCELABOR` | NUMERIC | NULL | The transaction cost source used for labor. |
| `TRANSRATELOCATIONLABOR` | NUMERIC | NULL | The transaction rate location used for labor. |
| `PROJECTRATELABOR` | NUMERIC | NULL | This column refers to the bill rate defined for the labor of the project. |
| `PROJECTCOSTLABOR` | NUMERIC | NULL | This column refers to the standard cost defined for the labor of the project. |
| `PROJECTSTDCOSTLABOR` | NUMERIC | NULL | This column refers to the actual cost defined for the labor of the project. |
| `BUDGETLEVELEQUIPMENT` | NUMERIC | NULL | A number indicating the cost key level or null if not budgeted. |
| `BUDGETRATESOURCEEQUIPMENT` | NUMERIC | NULL | The rate source used when budgeting equipment or null if not budgeted. |
| `BUDGETCOSTSOURCEEQUIPMENT` | NUMERIC | NULL | Indicates where the budget retrieves the cost for equipment. |
| `BUDGETRATELOCATIONEQUIPMENT` | NUMERIC | NULL | The rate location used when budgeting equipment or null if not budgeted. |
| `TRANSRATESOURCEEQUIPMENT` | NUMERIC | NULL | The transaction rate source for equipment. |
| `TRANSCOSTSOURCEEQUIPMENT` | NUMERIC | NULL | The transaction cost source to use for equipment. |
| `TRANSRATELOCATIONEQUIPMENT` | NUMERIC | NULL | The transaction rate location used for equipment. |
| `PROJECTRATEEQUIPMENT` | NUMERIC | NULL | This column refers to the bill rate defined for the labor of the project. |
| `PROJECTCOSTEQUIPMENT` | NUMERIC | NULL | This column refers to the actual cost defined for the equipment of the project. |
| `PROJECTSTDCOSTEQUIPMENT` | NUMERIC | NULL | This column refers to the standard actual cost defined for the equipment of the project. |
| `BUDGETLEVELMATERIAL` | NUMERIC | NULL | A number indicating the cost key level or null if not budgeted. |
| `BUDGETRATESOURCEMATERIALS` | NUMERIC | NULL | A number indicating the cost key level for the rate source or null if not budgeted. |
| `BUDGETCOSTSOURCEMATERIALS` | NUMERIC | NULL | Indicates where the budget retrieves the cost for materials. |
| `BUDGETRATELOCATIONMATERIALS` | NUMERIC | NULL | A number indicating the cost key level for the rate location used when material is budgeted or null if material is not budgeted. |
| `TRANSRATESOURCEMATERIALS` | NUMERIC | NULL | The transaction rate source for materials. |
| `TRANSCOSTSOURCEMATERIALS` | NUMERIC | NULL | The transaction cost source used for materials. |
| `TRANSRATELOCATIONMATERIALS` | NUMERIC | NULL | The transaction rate location used for materials. |
| `TRANSRATESOURCEEXPENSES` | NUMERIC | NULL | The transaction rate source used for expenses. |
| `TRANSCOSTSOURCEEXPENSES` | NUMERIC | NULL | The transaction cost source used for expenses. |
| `TRANSRATELOCATIONEXPENSES` | NUMERIC | NULL | The transaction rate location used for expenses. |
| `TRANSRATEOVERRIDEEXPENSES` | INTEGER | NULL | Indicated is the user can override the rate for expenses. Values are: - 0 = Override not allowed - 1 = Override allowed |
| `PROJECTRATEMATERIALS` | NUMERIC | NULL | This column refers to the bill rate defined for the materials of the project. |
| `PROJECTCOSTMATERIALS` | NUMERIC | NULL | This column refers to the actual cost defined for the materials of the project. |
| `PROJECTSTDCOSTMATERIALS` | NUMERIC | NULL | This column refers to the standard actual cost defined for the materials of the project. |
| `BUDGETRATEOVERRIDELABOR` | INTEGER | NULL | Indicates if the budget rate can be overridden for labor. |
| `BUDGETRATEOVERRIDEMATERIALS` | INTEGER | NULL | Indicates if the budget rate can be overridden for materials. |
| `BUDGETRATEOVERRIDEEQUIPMENT` | INTEGER | NULL | Indicates if the budget rate can be overridden for equipment. |
| `TRANSRATEOVERRIDELABOR` | INTEGER | NULL | Indicates if the user can override the rate for labor. Values are: - 1 = Override allowed - 2 = Override not allowed |
| `TRANSRATEOVERRIDEMATERIALS` | INTEGER | NULL | Indicates if the user can override the rate for materials. Values are: - 0 = Override not allowed - 1 = Override allowed |
| `TRANSRATEOVERRIDEEQUIPMENT` | INTEGER | NULL | Indicates if the user can override the rate for equipment. Values are: - 1 = Override allowed - 2 = Override not allowed |
| `DEACTIVATEMILEAGE` | INTEGER | NULL | This column is deprecated and should no longer be used. |
| `DEACTIVATETRAVEL` | INTEGER | NULL | This column is deprecated and should no longer be used. |
| `PROJCLOSEDATETIME` | DATE | NULL | The date and time when the project was closed. This value is set by system when the project is closed. |
| `PROJECTPURGE` | NVARCHAR | NULL | This column refers to the internal flag used during project purge to mark projects for deletion. |
| `PROJREOPENDATETIME` | DATE | NULL | The date and time when the project was re-opened. |
| `AMOUNTBILLED` | NUMERIC | NULL | A running total of the amount billed for the client and project. |
| `UDF3` | NVARCHAR | NULL | A 40-character free-form column containing information about the project. |
| `UDF4` | NVARCHAR | NULL | A 40-character free-form column containing information about the project. |
| `UDF1` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `UDF2` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `HISTORYMODE` | NUMERIC | NULL | Defines how transactions are moved to their history tables when closed. The value 1 indicates that transactions are moved automatically. |
| `HISTORYSUMMARY` | INTEGER | NULL | Reserved for internal use only. |
| `RATEMATRIX` | INTEGER | NULL | When set to 1 indicates that this project is using rate matrix. |
| `COSTPLUS` | INTEGER | NULL | Indicates if rate is calculated by cost plus markup. |
| `TEMPLATE_ONLY` | NUMERIC | NULL | The project used as a template for other projects. |
| `TRANSACTIONSLOCATED` | NUMERIC | NULL | Determines if transactions are stored in history tables or not. |
| `ALLOWCOSTCLASS` | NUMERIC | NULL | Indicates if the budget is based on cost class instead of cost code. The value 1 indicates cost class is used. |
| `NOTES` | NVARCHAR | NULL | The general notes for the project. |
| `GEOCODE_SHIP_FROM` | NUMERIC | NULL | The geographical ship from code. It is used for certain tax methods. |
| `GEOCODE_ORDER_ACCEPTED` | NUMERIC | NULL | The geographical order accepted code. This column is used for certain tax methods. |
| `ALLOW_INDIRECT_APPROVERS` | INTEGER | NULL | Reserved for internal use only. It allows indirect approvers for time and expense reports. |
| `POC_METHOD` | NUMERIC | NOT NULL | The percentage of complete method. |
| `RESOURCE_SCHEDULING_INT` | INTEGER | NULL | This column is deprecated and should no longer be used. |
| `MANAGER` | NVARCHAR | NULL | The project manager. |
| `EX_ALT_DEFAULT_REVIEWER` | NVARCHAR | NULL | Reserved for internal use only. It is used for integration to extensity expenses. |
| `EX_ALLOW_EXPENSES` | NUMERIC | NULL | Reserved for internal use only. It is used for integration to extensity expenses. |
| `EX_BILL_EXPENSES` | NUMERIC | NULL | Reserved for internal use only. It is used for integration to extensity expenses. |
| `BILL_TO_COMPANY_CODE` | NVARCHAR | NULL | The client to bill. (The client defined in the COMPANY_CODE column of this row is billed.) The value is either Null or the code of the client to bill. |
| `COMPANY_CODE` | NVARCHAR | NULL | The client code for a project. |
| `MASTER_PROJECT_CODE` | NVARCHAR | NULL | The project code. |
| `PROJECT_CODE` | NVARCHAR | NULL | This column refers to the project identifier for this change order. |
| `APPROVEDBY_RESOURCE_CODE` | NVARCHAR | NULL | The initials of the user who approved this project. |
| `AWAITAPPRVL_RESOURCE_CODE` | NVARCHAR | NULL | The initials of the user who submitted the project for approval. |
| `RESOURCE_CODE` | NVARCHAR | NULL | The initials of the user who created this project. |
| `BILLING_CURRENCY_CODE` | NVARCHAR | NOT NULL | The billing currency code. |
| `LABOR_EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The labor exchange rate type. |
| `EXPENSE_EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The expense exchange rate type. |
| `MATERIALS_EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The materials exchange rate type. |
| `EQUIPMENT_EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The equipment exchange rate type. |
| `FORECAST` | INTEGER | NOT NULL | Indicates whether the forecast is enabled for the project. This is a Boolean value. |
| `BILLING_PROJECT_ID` | NUMERIC | NULL | The ID of the billing project. This refers to [[PAC_MNT_PROJECTS]].ID. |
| `ALLOCATION_STATUS` | NVARCHAR | NOT NULL | The allocation status. Values are: - 0 = Approved - 1 = Waiting approval (default) - 2 = Reversed |
| `ODF_OBJECT_CODE` | NVARCHAR | NULL |  |
| `IS_FINANCIALLY_ENABLED` | INTEGER | NULL | This indicates if financial transactions exist for this investment. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `COST_TYPE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `BILLING_PROJECT_ID` | [[PAC_MNT_PROJECTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[PFM_APPLICATIONS]], [[PFM_APPLICATIONS_PLAN]], [[PFM_ASSETS]], [[PFM_ASSETS_PLAN]], [[PFM_ATTR_REGISTRY]], [[PFM_BASELINE_DETAILS]], [[PFM_CA_APPLICATION]], [[PFM_CA_APPLICATION_PLAN]], [[PFM_CA_ASSET]], [[PFM_CA_ASSET_PLAN]], [[PFM_CA_FINANCIALS]], [[PFM_CA_IDEA]], [[PFM_CA_IDEA_PLAN]], [[PFM_CA_INV]], [[PFM_CA_INV_PLAN]], [[PFM_CA_NPIOFINPROPERTIES]], [[PFM_CA_OTHER]], [[PFM_CA_OTHER_PLAN]], [[PFM_CA_PRODUCT]], [[PFM_CA_PRODUCT_PLAN]], [[PFM_CA_PROJECT]], [[PFM_CA_PROJECT_PLAN]], [[PFM_CA_SERVICE]], [[PFM_CA_SERVICE_PLAN]], [[PFM_CLOB_CURVES]], [[PFM_CONTENT_FILTERS]], [[PFM_EV_HISTORY]], [[PFM_FINANCIALS]], [[PFM_FLAT_HIERARCHIES]], [[PFM_HIERARCHIES]], [[PFM_IDEAS]], [[PFM_IDEAS_PLAN]], [[PFM_INVESTMENTS]], [[PFM_INVESTMENTS_PLAN]], [[PFM_INV_CONSTRAINT_SUMS]], [[PFM_OTHERS]], [[PFM_OTHERS_PLAN]], [[PFM_PINNED_INVESTMENTS]], [[PFM_PLANS]], [[PFM_PORTFOLIOS]], [[PFM_PRODUCTS]], [[PFM_PRODUCTS_PLAN]], [[PFM_PROJECTS]], [[PFM_PROJECTS_PLAN]], [[PFM_ROLE_CAPACITY]], [[PFM_ROLE_DEMAND]], [[PFM_ROLE_DEMAND_PLAN]], [[PFM_SERVICES]], [[PFM_SERVICES_PLAN]], [[PFM_USER_SELECTED_PLAN]], [[PFM_WEIGHTING_ATTRS]], [[PFM_WEIGHTING_OPTS]], [[PMA_SCENARIO_CONSTRAINTS]], [[PMA_SCENARIO_OPT_PARAMS]], [[SRM_RESOURCES]]
