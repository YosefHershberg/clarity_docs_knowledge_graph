---
title: XOG Object Reference Details
tags:
  - dev
  - reference
canonical: true
audience: dev
domain: development
---
# XOG Object Reference Details

Source: Clarity 16.4.1 PDF, p4286–4470

Related: [[_MOC Development]] | [[Object API]] | [[Object Reference]] | [[Governor Node Limit]]

## Overview

This note covers the detailed schema mappings, attributes, prerequisites, business rules, read filters, and error handling for all XOG objects. Use this in conjunction with [[Object API]] for the general read/write patterns.

For the complete list of objects and their support for read/write, see [[Object Reference]].

---

## Base XOG Objects

These base objects are foundational and support multiple actions:

| Object | Write (In) | Read (Out) | Scope |
|--------|-----------|-----------|-------|
| Process | Yes | Yes | Master System — multiple actions, step-level escalations, multiple objects |
| Content Pack | Yes | Yes | Classic PPM |
| customObjectInstance | Yes | Yes | |
| group | Yes | Yes | |
| User | Yes | Yes | |
| Location | Yes | Yes | |
| Resource | Yes | Yes | |

---

## Stock XOG Objects: Custom Object Instance Extensions

These use the `CustomObjectInstances` base XOG object with the `customObjectInstance.xsd` schema.

**Business Alignment**
- Read XML: `custom_object_instances_read.xml`
- Write XML: `custom_object_instances_write.xml`
- Prerequisites: Referenced project/proposal instances must exist
- Rules: Existing business alignment instances are not deleted
- Read Filters: `objectCode` (Studio object ID), `instanceCode` (Studio instance ID)
- Errors: Project does not exist; Invalid Lookup value

**Corporate Objectives** (`objectCode = cbi_corp_objectives`)
- Read/Write XML: same pattern as above
- Prerequisites: None
- Rules: Existing instances are not deleted

**Documents** (`objectCode = cbi_documents`)
- Prerequisites: Referenced project/proposal must exist
- Rules: Existing document instances are not deleted

**Status Updates** (`objectCode = cbi_status_report`)
- Prerequisites: Referenced project/proposal must exist
- Rules: Existing instances are not deleted

### Custom Investment Types

Clarity 15.5.1+ allows creating new investment types through XOG. The `Include in Roadmaps` attribute is available for custom investment extension objects.

---

## XOG: Application and Asset

**Schema:** `nikuxog_application.xsd` / `nikuxog_asset.xsd`

**XML Files:**
- `inv_applications_read.xml` / `inv_applications_write.xml`
- `inv_assets_read.xml` / `inv_assets_write.xml`

**Prerequisites:** Same as other Non-Project Investment Objects (NPIO)

**Key Attribute: `disableTSVUpdate`** (Clarity 15.6+)
- `true`: XOG import does not process aggregated TSV values — run Investment Allocation job separately
- `false` or omitted: same behavior as pre-15.6

**Read Filters:** Same as other NPIOs

---

## XOG: Benefit Plan

**Schema:** `nikuxog_benefitPlan.xsd`

**XML Files:** `benefitPlan_read.xml`, `benefitPlan_write.xml`

**Prerequisites:** Investments, Entity, and Time Periods must exist.

**Business Rules:**
- Benefit Plan object is created by setting up default properties first
- Plan details (line items) are added to the benefit plan
- Existing plan detail records are NOT deleted

**Read Filters:** `code`, `name`, `investmentCode`

**Common Errors:**
- Must have plan XOG access rights
- Investment must be associated with an entity before setting up financial plans
- Period date is missing or invalid
- Cannot modify plan periods prior to the freeze date

### BenefitPlan Schema Tag Attributes

| Attribute | Required | Description | DB Column |
|-----------|----------|-------------|-----------|
| Code | Yes | Unique code | CODE |
| FinishPeriod | Yes | Finish time period name | END_PERIOD_ID |
| InvestmentCode | Yes | Investment code | OBJECT_ID |
| InvestmentType | Yes | Investment type | OBJECT_CODE |
| Name | Yes | Benefit plan name | NAME |
| PeriodType | No | Time period type (e.g., monthly) | PERIOD_TYPE_CODE |
| Revision | No (read only) | Revision of budget plan | REVISION |
| StartPeriod | Yes | Start time period name | START_PERIOD_ID |

**Segment Schema Tag attributes:** `start`, `finish`, `value`

---

## XOG: Budget Plan

**Schema:** `nikuxog_budgetPlan.xsd`

**XML Files:** `budgetPlan_read.xml`, `budgetPlan_write.xml`

**Prerequisites:** Investments, Entity, Time Periods, and Details used in the plan must exist.

**Business Rules:**
- A budget plan uses the Cost Plan object internally
- Budget plan structure must match cost plan of record (and latest approved budget, depending on `forceReplace`)
- Existing plan detail records are NOT deleted

**Read Filters:** `code`, `name`, `investmentCode`

### BudgetPlan Schema Tag Key Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| code | Yes | Unique code of the cost plan |
| finishPeriod | Yes | Finish time period name |
| forceReplace | Yes | Whether existing budget structure can differ from latest approved budget |
| investmentCode | Yes | Investment code |
| startPeriod | Yes | Start time period name |
| status | No | Plan status: Submitted, Approved, Rejected |
| periodType | No | Time period type |
| sourceCostPlanCode | No | ID of source cost plan for submitted budget |

**Grouping Attribute Possible Values:** `charge_code_id`, `role_id`, `resource_id`, `department_id`, `location_id`, `transaction_class_id`, `resource_class_id`, `input_type_code_id`, `cost_type_id`, `lov1_id`, `lov2_id`

---

## XOG: Capacity Planning Scenario

**Schema:** `nikuxog_capplanScenario.xsd`

**XML Files:** `caplan_scenarios_read.xml`, `caplan_scenarios_write.xml`

**Prerequisites:**
- Scenario must be created first
- Projects referenced by `SRM_PROJECTS.UNIQUE_NAME` must exist
- Charge codes and projects must be imported before scenarios
- Maximum 10 OBS levels in XOG

**Read Filters:** `ownerID` (valid user CMN_SEC_USERS.ID)

### Scenario Schema Tag Key Attributes

| Attribute | Required | Description | DB Column |
|-----------|----------|-------------|-----------|
| name | Yes | Scenario name | CAP_SCENARIOS.NAME |
| ownerUserName | Yes | Owner user | CAP_SCENARIOS.USER_ID |
| description | No | Description | CAP_SCENARIOS.DESCRIPTION |
| budgetBenefit | No | What-if benefit amount | CAP_SCENARIOS.BDGT_CST_TOTAL |
| budgetCost | No | What-if budget cost | CAP_SCENARIOS.BDGT_REV_TOTAL |

**Member Element:** Sub-element of Scenario, composed of:
- `Expression` — ODF-based power filter expression
- `Investment` — specific investment instance (with Resources and Tasks sub-elements)

**Member Attributes:** `investmentType`, `isExcluded` (0/1), `isActive` (0/1), `isApproved` (0/1), `priority` (0-36), `lastSynchDate`

**Resource Attributes:** `bookingStatus`, `defaultAllocation`, `projectRoleID`, `resourceID`

**Task Attributes:** `duration`, `start`, `finish`, `name`, `milestone` (0/1), `taskID`

**Segment (TSV) Attributes:** `start`, `finish`, `sum`

---

## XOG: Change Request

**Schema:** `nikuxog_change.xsd`

**XML Files:** `change_read.xml`, `change_write.xml`

**Prerequisites:** Referenced objects (project, user, category) must exist.

**Read Filters:** `projectCode`, `Name`, `riskCode`, `statusCode`, `priorityCode`, `ownerCode`

**Common Errors:** Assessor/Approved By/Owner/Resolved By does not exist; Project does not exist; various status/priority/category codes invalid; Task does not exist for the given project

### Change Request Schema Tag Key Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| name | Yes | Name of the change request |
| code | Yes | Unique identifier |
| projectCode | Yes | Associated project code |
| ownerCode | Yes | Assigned resource |
| approvedBy | No | Approver resource name |
| approvedDate | No | Approval date |
| benefits | No | Benefits description |
| categoryTypeCode | No | Category |
| effectOnCost | No | Cost change (Money) |
| effectOnSchedule | No | Schedule effect in days |
| priorityCode | No | Priority lookup |
| targetResolutionDate | No | Target close date |

---

## XOG: Investment (Abstract Base)

The Investment XOG object is an abstract base. You read/write investments using their specific type (application, asset, project, etc.). The abstract Investment object itself cannot be directly read from or written to.

**Prerequisites:** Referenced resources (e.g., `managerName`) must exist.

**Read Filters:** `objectID`, `managerUserName`, `lastUpdatedDate`

**Performance Note (Clarity 15.6+):** Include `disableTSVUpdate="true"` in write files for large resource imports to skip TSV curve regeneration. Run the Investment Allocation job afterward.

### Investment Schema Tag — Key Attributes

| Attribute | Required | Description | DB Table |
|-----------|----------|-------------|----------|
| ID | Yes | Unique ID | PROJCLASS.ID |
| investmentClass | Yes | Investment class | PROJCLASS.PROJCLASS |
| name | Yes | Investment name | INV_INVESTMENTS.NAME |
| objectID | No | Code (autonumber if absent) | INV_INVESTMENTS.CODE |
| status | No | Unapproved/Approved/Rejected/Cancelled (Ideas also: Submitted For Approval, Incomplete, Converted) | INV_INVESTMENTS.STATUS |
| priority | No | 0 (highest) – 36 (lowest) | INV_INVESTMENTS.PRIORITY |
| managerUserName | No | Investment manager | INV_INVESTMENTS.MANAGER_ID |
| chargeCodeExtID | No | Charge code | INV_INVESTMENTS.CHARGECODEID |
| entityCode | No | Entity association | INV_INVESTMENTS.ENTITY_CODE |
| openForTimeEntry | No | Open for time entry | INV_INVESTMENTS.IS_OPEN_FOR_TE |
| start/finish | No | Schedule dates | INV_INVESTMENTS |
| trackMode | No | Time tracking mode | INV_INVESTMENTS.TRACK_MODE |
| requiredForScenarios | No | Required for scenarios | |
| disableTSVUpdate | No | Skip TSV regeneration (15.6+) | Virtual attribute |

**Financial attributes** map to `FIN_FINANCIALS` (planned/budget/forecast cost/revenue/NPV/ROI) and `PAC_MNT_PROJECTS` (rate sources, cost sources, location, department, WIP class).

### Investment Sub-Elements

- **Allocations** — Financial allocations for organizational tracking. Key attributes: `allocationCode`, `entityCode`, `locationCode`, `departmentCode`, `resourceClassCode`, `cbkType`, `cbkSubtype`
- **scenarioDependencies** — Links to scenario dependencies; warnings logged if dependency not found
- **InvestmentAssociations** — Parent/child investment hierarchies with percentage allocations
- **InvestmentBaselines** — Baseline revisions with cost and usage curves
- **UsageCurve/CostCurve** — TSV segments with `start`, `finish`, `sum`
- **InvestmentResources** (Team) — Resources on the investment team. Key attributes: `resourceID`, `bookingStatus`, `defaultAllocation`, `projectRoleID`, `isProjectManager`, `availFrom`, `availTo`
- **InvestmentTasks** — Task WBS with assignments

---

## XOG: Resource

**Schema:** `nikuxog_resource.xsd`

**XML Files:** `rsm_resources_read.xml`, `rsm_resources_write.xml`

**Business Rules:**
- Set up financial properties (Transaction Class, Resource Class) BEFORE importing financially active resources
- Vendor association is optional; if vendor is missing, resource imports without it (warning posted)
- `defaultStaffOBSUnitPath` attribute provides the full OBS unit path for disambiguation when multiple units have the same name (fixes DE60354/DE55248)

### Personal Information Schema Tag — Key Attributes

| Attribute | Required | Type | Description |
|-----------|----------|------|-------------|
| resourceId | Yes | String | Unique resource ID (`SRM_RESOURCES.UNIQUE_NAME`) |
| isActive | No | Boolean | Active status. Default: 1 |
| resourceType | No | String | LABOR, MATERIAL, EQUIPMENT, EXPENSE. Default: LABOR |
| employmentType | No | String | employee or contractor. Default: employee |
| firstName/lastName | No/Yes(Labor) | String | Name fields |
| displayName | No | String | Display name |
| emailAddress | No | String | Email |
| hireDate/terminationDate | No | Date | Employment dates |
| managerUserName | No | String | Resource manager |
| isExternal | No | Boolean | External resource. Default: 0 |
| forecastRate | No | Double | Hourly forecast rate |

### Contact Information Schema Tag

Fields: `companyName`, `jobTitle`, `address1-3`, `city`, `state`, `postalCode`, `countryId`, `homePhone`, `workPhone`, `mobilePhone`, `fax`, `pager`, `webAddress` — all optional, mapped to `SRM_CONTACTS`.

### Management Information Schema Tag

Key fields: `category`, `trackMode` (Clarity/None/Other), `openForTimeEntry`, `primaryRoleId`, `inputTypeCode`, `userText1-4`, `userFlag1-2`, `userNumber1-2`

### Financial Information Schema Tag (PAC_MNT_RESOURCES)

| Attribute | Required | Description |
|-----------|----------|-------------|
| FinancialCode | Yes | Equal to Resource ID |
| location | No | Location association |
| department | No | Department association |
| resourceClass | Yes | Resource class |
| transactionClass | Yes | Transaction class |
| vendorCode | No | Vendor association |
| Active | No | Status (0/1). Default: 1 |

### Expenses Schema Tag

- `reimbursementCurrency` — ISO code for reimbursement currency
- `employeeCountryCode` — reimbursement country code

### Rates and Costs Schema Tag

- `targetbillingRate` — Target billing rate (Float)
- `targetPercentageBillable` — Billable percentage (Float)

### OBS Associations Schema Tag

`<OBSAssocs complete="false">` wraps `<OBSAssoc>` elements.
- `complete=true`: existing associations not in the import are deleted
- `id`: OBS association ID (Required)
- `unitPath`: slash-delimited path e.g., `CAN/BC/VAN` (Required)

### SkillAssocs Schema Tag

- `complete`: if true, replaces all existing skills
- SkillAssoc element: `skillCode` (Required), `interestLevel` (Optional), `proficiencyLevel` (Optional), `weight` (Optional)

### Team Definition Support (Clarity 15.5+)

Resources that are team definitions include the `teamDefinitionId` attribute on `<Resource>` and `<TaskLabor>` elements. When importing team definitions, the following fields are NOT updated even if different: ID, Full Name, Availability, Active flag.

---

## XOG: Resource Class

**Schema:** `nikuxog_resourceclass.xsd`

**XML Files:** `resourceclass_read.xml`, `resourceclass_write.xml`

**Read Filters:** `resource_class`, `Resource_type`, `description`, `active`

**Resource Class Schema Tag Attributes:**

| Attribute | Required | Description | DB Column |
|-----------|----------|-------------|-----------|
| id | Yes | Unique resource ID | PAC_FOS_RESOURCE_CLASS.ID |
| resource_class | Yes | Unique resource class name | PAC_FOS_RESOURCE_CLASS.Resource_Class |
| resource_type | Yes | Q, L, X, or M | PAC_FOS_RESOURCE_CLASS.RESOURCE_TYPE |
| description | Yes | Description | PAC_FOS_RESOURCE_CLASS.DESCRIPTION |
| active | Yes | Status: 0 or 1 | PAC_FOS_RESOURCE_CLASS.ACTIVE |

---

## XOG: Risk

**Schema:** `nikuxog_risk.xsd`

**XML Files:** `risk_read.xml`, `risk_write.xml`

**Prerequisites:** Referenced objects (projects, users, categories) must exist.

**Read Filters:** `projectCode`, `name`, `riskCode`, `statusCode`, `priorityCode`, `ownerCode`

**Common Errors:** Same as Change Request (assessor/project/status/priority/approach code validation)

### Risk Schema Tag Key Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| name | Yes | Risk name |
| code | Yes | Unique risk code |
| projectCode | No | Associated project code |
| ownerCode | No | Assigned resource |
| statusCode | No | Risk status lookup |
| priorityCode | No | Priority lookup |
| probabilityCode | No | Probability code (number) |
| impactCode | No | Impact lookup |
| approachCode | No | Response type lookup |
| targetResolutionDate | No | Target resolution date |
| resolvedDate | No | Date resolved |
| resolvedBy | No | Resource who resolved |

**Sub-elements:** `associatedTasks`, `associatedRisks`, `associatedIssues`, `residualRisks`, `responseStrategies`

---

## XOG: Role

**Schema:** `nikuxog_role.xsd`

**XML Files:** `roles_read.xml`, `roles_write.xml`

**Prerequisites (Financial Properties):**
- **Transaction Class** — Required if financially active
- **Resource Class** — Required if financially active
- **Vendor** — Optional

**Read Filters:** `active` (Active/Inactive), `resourceId`

**Error Handling:** If parent role or standard calendar does not exist, XOG displays an error and does not import.

### Role Schema Tags

**PRJ_RESOURCES Tag:** `category` (Optional), `availability` (Required — stored as blob)

**SRM_RESOURCES Tag:**

| Attribute | Required | Description |
|-----------|----------|-------------|
| name | Yes | Must be unique |
| resourceId | Yes | Unique name |
| active | No | Boolean |
| forecastRate | No | Hourly rate (export-only if has value) |

**PRJ_ROLES_FLAT Tag:** `parentRole` — parent role ID stored as `branch_role_id`

**Financial Information Tag:** `Active` (Yes), `resourceClass` (Yes), `transactionClass` (Yes), `vendorCode` (Optional)

**SkillAssocs Tag:** Same structure as Resource SkillAssocs

---

## XOG: Skill

**Schema:** `nikuxog_skill.xsd`

**XML Files:** `rsm_skills_read.xml`, `rsm_skills_write.xml`

**Read Filters:** `skillName`, `isActive`

**Skill Schema Tag Attributes:**

| Attribute | Required | Description | DB Column |
|-----------|----------|-------------|-----------|
| skillCode | Yes | Unique identifier | SKILL_CODE |
| name | No | Skill name | SKILL_NAME |
| description | No | Description | DESCRIPTION |
| isActive | No | Status | IS_ACTIVE |

---

## XOG: Subproject (Program)

**Schema:** `nikuxog_project.xsd`

**XML Files:** `prj_programs_read.xml`, `prj_programs_write.xml`

**Business Rules:**
- When importing a subproject: updated if exists, created if not
- Only the read-only field is supported during updates
- When creating a subproject, a proxy task is created in the WBS of the master project
- Removing a subproject also removes the proxy task
- Importing a proxy task increments WBSSequence for all subsequent tasks

**isProgram Read Filter:**
- Commented out: all programs and projects exported
- `isProgram=1`: programs only
- `isProgram=0`: projects only

### PRSubproject Schema Tag Attributes

**Inbound and Outbound:**
- `projectID` (Required): UNIQUE_NAME of project becoming the subproject
- `TaskID` (Optional): prExternalID of task representing WBS portion
- `succeedingTaskID` (Optional): prExternalID of task following the subproject
- `ReadOnly` (Optional): False for partial subprojects

**Inbound Only:**
- `delete` (Optional): When present, deletes the sub-project link and associated proxy

---

## XOG: Subscription

**Schema:** `nikuxog_subscription.xsd`

**XML Files:** `subscription_read.xml`, `subscription_write.xml`

**Prerequisites:** Entity, department, and service must exist.

**Read Filters:** `departmentId`

**Subscription Element Attributes:** `sla_violations`, `sla_violations_th`, `incidents`, `incidents_threshold`, `change_orders`, `charges`, `cust_satisfaction`, `total_users`, `active_users`, `page_hits`, `entityId` (Required), `departmentId` (Required), `serviceId` (Required)

**keymetrics Tag:** Contains `keymetric` elements with `metrics_code`, and optional `targetCurve`/`actualCurve` (Segment objects)

---

## XOG: Time Period and Time Slice

### Time Slice

**Schema:** `nikuxog_sliceRequest.xsd` | **Read schema:** `nikuxog_read.xsd`

### Time Period

**Schema:** `nikuxog_timeperiod.xsd` | **XML File:** `olts_timeperiods_read.xml`

**Read Filters:** `isPublic` (1 or 0), `ownerID`, `Start Date`, `resourceID`, `postedInTimePeriodStart`

**Time Period Creation:** Set `create="true"` on the TimePeriod element. No overlapping time periods allowed.

### TimePeriod Schema Tag Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| start/finish | Yes | DateTime |
| openForTimeEntry | No | Boolean |
| create | No | Boolean — creates if does not exist |
| scale | No | Time period scale if being created |
| timeReportingPeriodType | No | annually, semi_annually, monthly, quarterly, daily, weekly, bi_weekly |
| postedTime | No | DateTime |

### PRTimeEntry Schema Tag Attributes

For existing assignments: use `projectID + taskID` OR `assignmentID`
For new assignments: use `projectID + internalTaskID`

| Attribute | Required | Description |
|-----------|----------|-------------|
| totalActuals | No | Total actuals in hours |
| taskID | No | Task external ID |
| projectID | No | Project unique name |
| internalTaskID | No | Task internal numeric ID |
| assignmentID | No | Assignment ID |
| actualDate | Yes | Date for each day with actuals |
| amount | No | Hours for that date |

---

## XOG: Transaction Class

**Schema:** `nikuxog_transactionclass.xsd`

**XML Files:** `transactionclass_read.xml`, `transactionclass_write.xml`

**Read Filters:** `transclass`, `transtype`, `description`, `shortdesc`

**Transaction Class Schema Tag Attributes:**

| Attribute | Required | Description |
|-----------|----------|-------------|
| transactionclass | Yes | Unique transaction class name |
| transactiontype | Yes | Q, L, X, or M |
| description | Yes | Description |
| shortdesc | Yes | Short description |

---

## XOG: Type Code

**Schema:** `nikuxog_typecode.xsd`

**XML Files:** `prj_typecodes_read.xml`, `prj_typecodes_write.xml`

**Type Code Schema Tag Attributes:**

| Attribute | Required | Description |
|-----------|----------|-------------|
| typeCodeID | Yes | External unique identifier |
| name | Yes | Type code name |
| openForTimeEntry | No | Open for timesheet use |
| isChargeable | No | Chargeable in financial systems |

---

## XOG: UI Themes

**Schema:** `nikuxog_uitheme.xsd`

**XML Files:** `cmn_ui_themes_read.xml`, `cmn_ui_themes_write.xml`

**Business Rules:** The last imported UI theme with `default=true` becomes the system default.

**Read Filters:** `uiThemeID`

### UITheme Schema Tag

| Attribute | Required | Description |
|-----------|----------|-------------|
| id | Yes | Unique UI theme code |
| active | Yes | Active status. Default: True |
| default | No | System default theme. Default: False |

**NLS Tag:** `Name` (Required), `Description` (Required), `languageCode` (Optional)

**CSS Tag:** Required. Content should always be in a CDATA section.

> **Tip:** If a UI theme XOG import fails, copy/paste the CSS into Studio editor to see validation problems.

---

## XOG: User

**Schema:** `nikuxog_user.xsd`

**XML Files:** `cmn_users_read.xml`, `cmn_users_write.xml`

**Business Rules:**
- A labor resource is automatically created for every imported user
- Password defaults to `2000`; user must reset on first login
- Company ID validated against `SRM_COMPANIES`; if not found, user is posted without company (warning)
- If `userType` not provided, defaults to Internal

**Read Filters:** `User Status` (Active/Inactive/LOCK), `User Type` (Internal/External)

### Personal Information Schema Tag Key Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| firstName | Yes | First name |
| lastName | Yes | Last name |
| userName | Yes | Unique primary key |
| userType | No | Internal/External. Default: Internal |
| userStatus | Yes | Active/Inactive/LOCK |
| emailAddress | Yes | Email |
| userLanguage | Yes | English/German/Spanish/French |
| userLocale | No | Java Locale e.g., en_US |
| userTimezone | No | Java TimeZone e.g., Europe/London |
| resource | No | Associated resource (1:1 relationship) |
| companyId | No | Company association |
| externalSource | Yes (schema) | Originating system ID |
| externalId | Yes (schema) | Originating unique identifier |

### Other User Schema Tags

- **OBSAssocs** — Same structure as Resource OBS Associations (`complete`, `id`, `name`, `unitPath`)
- **Group Assignments** — `complete` attribute; `Group` element with `id` (Required)
- **GlobalRights** — `complete` attribute; `Right` element with `id` (Required)
- **InstanceRights** — Same structure as GlobalRights
- **InstanceOBSRights** — Same structure; `Right` element with `id`
- **InstanceObject** — Mapped to SRM_RESOURCES, SRM_PROJECTS, BPM_DEF_PROCESSES, CMN_PAGES, CMN_PORTLETS, etc. Attributes: `id` (Required), `name` (Optional), `type` (Required)
- **Language Support (nls)** — `name`, `description`, `languageCode`

---

## XOG: Vendor

**Schema:** `nikuxog_vendor.xsd`

**XML Files:** `vendor_read.xml`, `vendor_write.xml`

**Read Filters:** `code`, `name`, `status`

### Vendor Schema Tag Attributes

| Attribute | Required | Description | DB Column |
|-----------|----------|-------------|-----------|
| code | Yes | Unique vendor code | VENDOR_CODE |
| name | Yes | Vendor name | ADDRESS_NAME |
| status | Yes | Active/Inactive/No New Business | STATUS_TYPE |
| affiliation | No | Affiliated vendor code | AFFILIATED_VEND_CODE |
| address1–6 | No | Address lines | ADDR1–ADDR6 |
| attentionName/Phone | No | Attention contact | |
| contactName/Phone | No | Primary contact | |

---

## XOG: WIP Class

**Schema:** `nikuxog_wipclass.xsd`

**XML Files:** `wipClass_read.xml`, `wipClass_write.xml`

**Read Filters:** `wipclass`, `description`, `shortdesc`

**WIP Class Schema Tag Attributes:**

| Attribute | Required | Description |
|-----------|----------|-------------|
| wipclass | Yes | Unique WIP class name |
| description | Yes | Description |
| shortdesc | Yes | Short description |

---

## Related Notes

- [[Object API]] — General XOG read/write patterns, schemas, examples
- [[Object Reference]] — Summary table of all XOG objects
- [[Governor Node Limit]] — Node limits for XOG import/export
- [[Schema and XML]] — XSD schema structure
- [[GEL Scripting]] — GEL integration with XOG objects
