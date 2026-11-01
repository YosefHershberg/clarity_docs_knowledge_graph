---
title: Camtek Overview (MOC)
tags:
  - MOC
  - camtek
aliases:
  - Camtek
  - Camtek MOC
  - קמטק
canonical: true
client: camtek
audience: dev
domain: client
---

# Camtek — Client Configuration Map

Camtek (semiconductor inspection equipment, Israel) runs Clarity SaaS with a heavily customized **Feature Management** flow built on the Project object. This section documents *their* configuration, not Clarity product behaviour. Product docs live in folders `01`–`24`; everything here is client-specific.

> [!info] Environments
> - **Dev**: `https://cppm10245-dev.clarityppm.saas.broadcom.com` (Microsoft SSO, Camtek tenant)
> - **Prod**: `https://cppm10245.clarityppm.saas.broadcom.com` (seen in Parent Link URLs copied from prod data)
> - **Azure DevOps ("TFS")**: org `AzCamtek`, project `Falcon` — `https://dev.azure.com/AzCamtek/Falcon`
> - Implementation partner account: **PPM Proceed** (creator of most processes). Camtek admins seen: Amit Shinar, Maya Dagan.

## Start here
1. [[Camtek Overview]] — the architecture in one page: Feature projects, hammocks, the On Going master projects, TFS mirroring.
2. [[On Going Feature Project]] — **the object most work happens on**: structure of the master project, how hammocks get in and out, what runs on it.
3. [[Feature Lifecycle]] — stages A–G of the spec (ניהול פיצ'רים), process by process.

## Reference
- [[Camtek Data Model]] — every custom attribute on Project and Task with attribute IDs, all lookups with value IDs, the custom objects (Features templates, Commitment Date).
- [[TFS Integration]] — Clarity ⇄ Azure DevOps field mappings and sync rules.
- [[Process and Job Catalog]] — all 232 process definitions with mode (Active / On Hold / Draft) and the 36 scheduled jobs.
- [[Custom Autoschedule]] — the eight preparation steps and schedules per investment type.
- [[Task Completion and Actuals]] — ETC → Camtek Actual logic on 100 % completion.
- [[Camtek Glossary]] — Hebrew ⇄ English terms used in the spec and in process names.

## Provenance
Two sources, marked throughout:
- **spec** — the Hebrew design document *ניהול פיצ'רים - קמטק* (`.docx`, 1822 paragraphs, 7 stages). Describes intended behaviour; some IDs and names drift from what is deployed.
- **dev** — verified in the dev environment on 2026-11-01 (attribute IDs, lookup values, process list, scheduled jobs, blueprints, live hammocks).

Where spec and dev disagree, **dev wins** and the discrepancy is called out with a `> [!warning]` callout.

## Related product notes
[[Projects Blueprint]] · [[Tasks Phases Milestones]] · [[Autoschedule]] · [[Processes Configuration]] · [[Lookups Configuration]] · [[Custom Investment Types]] · [[Calling REST from GEL]]
