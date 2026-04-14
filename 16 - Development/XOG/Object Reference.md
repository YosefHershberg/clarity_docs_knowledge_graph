---
title: XOG Object Reference
tags:
  - dev
  - reference
aliases:
  - Object Reference
canonical: true
audience: dev
domain: development
---
# XOG Object Reference

This reference covers the XOG objects available for reading and writing data in Classic PPM. For detailed schema attributes, business rules, error handling, and read filter documentation for each object, see [[Object Reference Details]].

---

## Base XOG Objects

These foundational objects support multiple actions and are available to all XOG implementations:

| Object | Write (In) | Read (Out) | Scope | Master System |
|--------|-----------|-----------|-------|---------------|
| Process | Yes | Yes | Multiple actions, step-level escalations, multiple objects, sub-processes | Classic PPM |
| Content Pack | Yes | Yes | Portlets, reports, queries, pages | Classic PPM |
| customObjectInstance | Yes | Yes | Custom object instance data | None |
| group | Yes | Yes | Groups | None |
| User | Yes | Yes | Basic user properties, OBS association | Enterprise systems |
| Location | Yes | Yes | Location properties, department associations | Classic PPM |
| Resource | Yes | Yes | Basic and non-labor resource properties, management, financial, contact properties | Enterprise systems |

---

## Stock XOG Object Summary

| Object or Transaction | Write (In) | Read (Out) | Scope | Master System |
|-----------------------|-----------|-----------|-------|---------------|
| Benefit Plan | Yes | Yes | Financial benefit plans | Accounting systems |
| Budget Plan | Yes | Yes | Financial budget plans | Accounting systems |
| Capacity Planning Scenario | Yes | Yes | Public or private scenarios with project members | Enterprise systems |
| Cost Plan | Yes | Yes | Financial cost plans | Accounting systems |
| Department | Yes | Yes | Department properties | Classic PPM |
| Entity | Yes | Yes | Basic entity properties | Classic PPM |
| Financial Transaction | Yes | Yes | Financial transactions | Accounting systems |
| General Ledger Account | Yes | Yes | Standard GL allocation rules and credit rules; investment-specific GL debit rules | Accounting systems |
| General Ledger Allocation Rule | Yes | Yes | GL periods | Enterprise systems |
| General Ledger Period | No | Yes | GL periods | — |
| General Ledger Transaction | Yes | Yes | GL transactions | Accounting systems |
| Inbound Transaction | Yes | None | Financial transactions | None |
| Investment | Yes | Yes | Import and export of investment objects (asset, application, project, etc.) | Classic PPM |
| Invoices | Yes (status) | Yes | Invoice processing | Enterprise systems |
| Non-Project Investment | Yes | Yes | Asset, application, product, and other non-project investments | None |
| Outbound Transaction | No | Yes | Exports financial transactions from other systems | None |
| Portfolio | Yes | Yes | Import and export portfolios | None |
| Project | Yes | Yes | Project data, tasks, assignments, custom fields, management/financial properties, OBS association | ERP, timesheet, Oracle Financials, Accounting |
| Requisition | Yes | Yes | Import and export requisitions | None |
| Role | Yes | Yes | Basic role information, non-labor roles | Enterprise systems |
| Skill | Yes | Yes | Skills hierarchy | None |
| Type Code | Yes | Yes | Type codes | None |

---

## Enable a Custom Object for Data Warehouse

Using XOG, you can enable or disable a custom object or attribute for the Data Warehouse. Use the `dwEnabled` boolean attribute on both custom objects and custom attributes.

```xml
<object code="customobject" dwEnabled="true" ...>
  <customAttribute code="customattribute" dwEnabled="true" ...>
```

**Rules:**
- You can enable or disable custom objects or custom attributes.
- Enable a custom attribute only when its associated object is enabled.
- Enable a custom subobject only when its parent or master object is enabled.
- Disable a master object only when all its subobjects are disabled.

> [!NOTE]
> To disable a master object, disable all its subobjects by setting `dwEnabled="false"` in the same XOG file. Warning messages appear in the XOG output when these rules are not met.

---

## Nested OBS Units in XOG Files

Pay special attention when performing OBS import operations using the XOG. If you are changing the level of one or more OBS units, maintain all the existing child units in your XML.

**Rules:**
- If you skip a unit, the depth for the missed unit can change in unexpected ways.
- Create and move OBS units together.
- Incomplete XML structure for the root unit you move can also move child units.

**Example:** To move unit3 under unit2 and add a child unit3333x under unit333, you must include the full hierarchy — including existing unchanged units like `/unit3333` — to prevent their levels from changing indirectly.

---

## XOG Custom Content Objects

The `CustomObjectInstances` XOG service enables communication with instances of custom objects. Instances represent data in custom objects, not their definitions.

The following content objects are included with Classic PPM:

| Content Object | objectCode | Description |
|----------------|-----------|-------------|
| Business Alignment | `cbi_biz_alignment` | Business alignment instances for existing projects and proposals |
| Corporate Objectives | `cbi_corp_objectives` | Corporate objectives instances |
| Documents | `cbi_documents` | Document instances for existing projects and proposals |
| Status Updates | `cbi_status_report` | Status update instances for existing projects and proposals |

**Read/Write XML Files (all):**
- `custom_object_instances_read.xml`
- `custom_object_instances_write.xml`

**Read Filters (all):**
- `objectCode` — Studio object ID
- `instanceCode` — Studio instance ID

---

## Custom Investment Types

Clarity 15.5.1+ supports creating new investment types through XOG. The **Include in Roadmaps** attribute is available for custom investment extension objects.

> [!NOTE]
> When upgrading from 15.5.0 to 15.5.1, all custom investment objects are moved to the upgraded version. By default, **Include in Roadmaps** is unchecked and enabled is set to `0`. If you XOG out from a previous version and XOG in a custom investment object, this capability is not added by default.

---

## XOG Object Quick Reference

For detailed schema tag attributes, business rules, prerequisites, and error handling for each object, see [[Object Reference Details]].

| Object | Schema File | Read XML | Write XML |
|--------|-------------|----------|-----------|
| Application / Asset | `nikuxog_application.xsd` / `nikuxog_asset.xsd` | `inv_applications_read.xml` / `inv_assets_read.xml` | `inv_applications_write.xml` / `inv_assets_write.xml` |
| Benefit Plan | `nikuxog_benefitPlan.xsd` | `benefitPlan_read.xml` | `benefitPlan_write.xml` |
| Budget Plan | `nikuxog_budgetPlan.xsd` | `budgetPlan_read.xml` | `budgetPlan_write.xml` |
| Capacity Planning Scenario | `nikuxog_capplanScenario.xsd` | `caplan_scenarios_read.xml` | `caplan_scenarios_write.xml` |
| Change Request | `nikuxog_change.xsd` | `change_read.xml` | `change_write.xml` |
| Charge Code | `nikuxog_chargeCode.xsd` | `chargeCodes_read.xml` | `chargeCodes_write.xml` |
| Company | `nikuxog_company.xsd` | `biz_companies_read.xml` | `biz_companies_write.xml` |
| Content Pack | `nikuxog_contentPack.xsd` | `contentPack_read.xml` | `contentPack_write.xml` |
| Cost Plan | `nikuxog_costPlan.xsd` | `costPlan_read.xml` | `costPlan_write.xml` |
| Currency | `nikuxog_currency.xsd` | `currencies_read.xml` | `currencies_write.xml` |
| Custom Object Instance | `nikuxog_customObjectInstance.xsd` | `custom_object_instances_read.xml` | `custom_object_instances_write.xml` |
| Department | `nikuxog_department.xsd` | `departments_read.xml` | `departments_write.xml` |
| Entity | `nikuxog_entity.xsd` | `entities_read.xml` | `entities_write.xml` |
| Financial Transaction | `nikuxog_financialTransaction.xsd` | `financial_transactions_read.xml` | `financial_transactions_write.xml` |
| GL Account | `nikuxog_glAccount.xsd` | `gl_accounts_read.xml` | `gl_accounts_write.xml` |
| GL Allocation Rule | `nikuxog_glAllocRule.xsd` | `gl_alloc_rules_read.xml` | `gl_alloc_rules_write.xml` |
| GL Period | `nikuxog_glPeriod.xsd` | `gl_periods_read.xml` | — |
| GL Transaction | `nikuxog_glTransaction.xsd` | — | `gl_transactions_write.xml` |
| Group | `nikuxog_group.xsd` | `groups_read.xml` | `groups_write.xml` |
| Idea | `nikuxog_idea.xsd` | `ideas_read.xml` | `ideas_write.xml` |
| Incident | `nikuxog_incident.xsd` | `incidents_read.xml` | `incidents_write.xml` |
| Investment | `nikuxog_investment.xsd` | `investment_read.xml` | `investment_write.xml` |
| Invoice | `nikuxog_invoice.xsd` | `invoices_read.xml` | `invoices_write.xml` |
| Location | `nikuxog_location.xsd` | `locations_read.xml` | `locations_write.xml` |
| Menu | `nikuxog_menu.xsd` | `menus_read.xml` | `menus_write.xml` |
| OBS | `nikuxog_obs.xsd` | `obs_read.xml` | `obs_write.xml` |
| Outbound Transaction | `nikuxog_outboundTransaction.xsd` | `outbound_transactions_read.xml` | — |
| Portfolio | `nikuxog_portfolio.xsd` | `portfolios_read.xml` | `portfolios_write.xml` |
| Process | `nikuxog_process.xsd` | `processes_read.xml` | `processes_write.xml` |
| Product | `nikuxog_product.xsd` | `inv_products_read.xml` | `inv_products_write.xml` |
| Project | `nikuxog_project.xsd` | `prj_projects_read.xml` | `prj_projects_write.xml` |
| Rate Matrix | `nikuxog_matrix.xsd` | `rateMatrix_read.xml` | `rateMatrix_write.xml` |
| Requisition | `nikuxog_requisition.xsd` | `requisitions_read.xml` | `requisitions_write.xml` |
| Resource | `nikuxog_resource.xsd` | `rsm_resources_read.xml` | `rsm_resources_write.xml` |
| Role | `nikuxog_role.xsd` | `roles_read.xml` | `roles_write.xml` |
| Service | `nikuxog_service.xsd` | `inv_services_read.xml` | `inv_services_write.xml` |
| Skill | `nikuxog_skill.xsd` | `skills_read.xml` | `skills_write.xml` |
| Studio Object | `nikuxog_object.xsd` | `objects_read.xml` | `objects_write.xml` |
| Time Entry | `nikuxog_timeEntry.xsd` | `timeEntry_read.xml` | `timeEntry_write.xml` |
| Timesheet | `nikuxog_timesheet.xsd` | `timesheets_read.xml` | `timesheets_write.xml` |
| Transaction Class | `nikuxog_transactionClass.xsd` | `transaction_classes_read.xml` | `transaction_classes_write.xml` |
| Type Code | `nikuxog_typecode.xsd` | `typecodes_read.xml` | `typecodes_write.xml` |
| UI Theme | `nikuxog_theme.xsd` | `themes_read.xml` | `themes_write.xml` |
| User | `nikuxog_user.xsd` | `users_read.xml` | `users_write.xml` |
| Vendor | `nikuxog_vendor.xsd` | `vendor_read.xml` | `vendor_write.xml` |
| WIP Class | `nikuxog_wipclass.xsd` | `wipClass_read.xml` | `wipClass_write.xml` |

---

## Related
- [[_MOC Development]]
- [[Object Reference Details]]
- [[Object API]]
- [[Governor Node Limit]]

%%Source: p4286-4470%%
