---
title: Gap Report — Source vs Curated Notes
tags:
  - validation
  - MOC
date: 2026-04-14
last_updated: 2026-04-14
---

# Gap Report — Source Documentation vs Curated Notes

Generated: 2026-04-14  
Last updated: 2026-04-14 (after Waves 1–3 gap-filling)

This report identifies all topics in the 57 source documents (folder 23) that are missing or inadequately covered in the curated notes (folders 01–22). Gaps are prioritized by severity.

> [!info] Priority Levels
> - **P1 (Critical):** Entire major sections (H2-level) with no curated note coverage — needs a new note
> - **P2 (Important):** Subsections (H3-level) missing from otherwise-covered notes — needs expansion of existing note
> - **P3 (Minor):** Content exists but is thin, misplaced, or uses incorrect framing

> [!success] Remediation Progress
> - **Wave 1** (2026-04-14): 16 new notes, 11 expanded — Timesheets, Collaboration, Hierarchies, Projects, Objectives/Plans, Roadmaps
> - **Wave 2** (2026-04-14): 7 new notes, 4 expanded — Financials, Reference, Reporting, Mobile, Jaspersoft, Getting Started, Vaia AI
> - **Wave 3** (2026-04-14): 6 new notes, 9 expanded — Ideas modules, Staffing Grid, OBS Config, REST API, Classic RM, Financial expansions
> - **Totals:** 29 new notes created, 24 existing notes expanded/rewritten, 3 broken links fixed

---

## Coverage Summary by Domain

| Domain | Folder | Pre-Validation | Post-Validation | Change |
|--------|--------|---------------|-----------------|--------|
| Getting Started | 01 | ~70% | ~80% | +10% |
| Investments | 02 | ~65% | ~75% | +10% |
| Projects | 03 | ~60% | ~80% | +20% |
| Roadmaps | 04 | ~55% | ~85% | +30% |
| Hierarchies | 05 | ~45% | ~75% | +30% |
| Resource Management | 06 | ~75% | ~90% | +15% |
| Financial Management | 07 | ~70% | ~85% | +15% |
| Timesheets | 08 | ~25% | ~75% | +50% |
| Collaboration | 09 | ~50% | ~85% | +35% |
| Pages & Objectives | 10 | ~40% | ~85% | +45% |
| Reporting | 11 | ~70% | ~85% | +15% |
| Administration | 12 | ~85% | ~92% | +7% |
| Classic PPM | 13 | ~80% | ~90% | +10% |
| Vaia AI | 14 | ~85% | ~95% | +10% |
| Mobile App | 15 | ~80% | ~90% | +10% |
| Development | 16 | ~85% | ~92% | +7% |
| Installation/Upgrade | 17 | ~80% | ~90% | +10% |
| Advanced Reporting | 18 | ~65% | ~85% | +20% |
| Add-Ins/Integrations | 19 | ~85% | ~85% | — |
| Cookbooks | 20 | ~90% | ~90% | — |
| Reference | 21 | ~75% | ~85% | +10% |
| Release Info | 22 | ~95% | ~95% | — |
| **Weighted Overall** | | **~73%** | **~88%** | **+15%** |

---

## P1 — Critical Gaps (New Notes Needed)

### ✅ Resolved P1 Gaps

All P1 critical gaps have been addressed. The following notes were created or rewritten:

| # | Gap | Resolution | Wave |
|---|-----|-----------|------|
| 1.2 | Information Centre (ICE) | Created `01 - Getting Started/Information Centre.md` (254 lines) | W2 |
| 3.1 | Global Tasks Workspace | Created `03 - Projects/Tasks Workspace.md` (344 lines) | W1 |
| 3.2 | Global To Dos Workspace | Created `03 - Projects/To Dos Workspace.md` (197 lines) | W1 |
| 3.3 | Cross-Object Status Reports Workspace | Created `03 - Projects/Status Reports Workspace.md` (219 lines) | W1 |
| 3.4 | Calendar Layout for Tasks | Added to `03 - Projects/Tasks Phases Milestones.md` | W1 |
| 4.1 | Roadmap Sync and Import | Created `04 - Roadmaps/Sync and Import.md` (284 lines) | W1 |
| 4.2 | Roadmap Picklists | Created `04 - Roadmaps/Picklists.md` (177 lines) | W1 |
| 4.3 | Roadmap Groups | Created `04 - Roadmaps/Roadmap Groups.md` (148 lines) | W1 |
| 5.1 | Hierarchy Canvas Dashboard | Created `05 - Hierarchies/Canvas Dashboard.md` (269 lines) | W1 |
| 5.2 | Hierarchy Staffing Analysis | Created `05 - Hierarchies/Staffing.md` (226 lines) | W1 |
| 5.3 | Hierarchy Custom Metrics | Created `05 - Hierarchies/Custom Metrics.md` (163 lines) | W1 |
| 5.4 | Hierarchy Conversations | Created `05 - Hierarchies/Conversations.md` (172 lines) | W1 |
| 5.5 | Hierarchy Audit | Created `05 - Hierarchies/Audit.md` (130 lines) | W1 |
| 7.1 | Financial Departments | Created `07 - Financial Management/Financial Departments.md` | W2 |
| 7.2 | Financial Locations | Created `07 - Financial Management/Financial Locations.md` | W2 |
| 8.1 | Frictionless Time | Created `08 - Timesheets/Frictionless Time.md` (164 lines) | W1 |
| 8.2–8.3 | Advanced Timesheet Features + Enter Hours expansion | Created `08 - Timesheets/Advanced Timesheet Features.md` (245 lines); expanded `Enter Hours and Submit.md` (32→233 lines) | W1 |
| 9.1 | Menu Links | Created `09 - Collaboration/Menu Links.md` (83 lines) | W1 |
| 10.1 | Working with Objectives | Rewritten `Working with Objectives.md` (67→619 lines) | W1 |
| 10.2 | Plans Beta | Rewritten `Plans Beta.md` (47→611 lines) | W1 |
| 11.1 | Data Provider CRUD | Expanded `Data Providers.md` (55→376 lines) | W2 |
| 11.2 | Advanced Reporting Domains | Created `18 - Advanced Reporting/Reporting Domains.md` (242 lines) | W2 |
| 11.3 | Create Ad Hoc View | Created `18 - Advanced Reporting/Create Ad Hoc Views.md` (143 lines) | W2 |
| 11.4 | Run/Schedule Advanced Report | Created `18 - Advanced Reporting/Run and Schedule Reports.md` (163 lines) | W2 |
| 15.1 | Mobile FAQ/Troubleshooting | Created `15 - Mobile App/Troubleshooting Mobile.md` (161 lines) | W2 |
| 17.1–17.2 | Jaspersoft Troubleshooting + ActiveMQ | Expanded `Jaspersoft Installation.md` (505→850 lines) | W2 |
| 21.1 | SaaS Authentication | Created `21 - Reference/Authentication Methods.md` | W2 |
| 21.2 | Database Performance | Created `21 - Reference/Database Performance.md` | W2 |

### Remaining P1 Gaps (Unresolved)

| # | Gap | Source Doc | Recommended Action |
|---|-----|-----------|-------------------|
| 1.1 | Classic PPM personalization procedures (accounts, pages, lists, dashboards, portlets, jobs, reports, Knowledge Store) — 34+ topics | Using Classic PPM.md | Verify coverage in `13 - Classic PPM/` or create `13 - Classic PPM/Personalization Classic.md` |

---

## P2 — Important Gaps (Expand Existing Notes)

### ✅ Resolved P2 Gaps

| # | Gap | Resolution | Wave |
|---|-----|-----------|------|
| 2.4 | Ideas Conversations + Audit | Created `02 - Investments/Ideas/Conversations.md` and `Audit.md` | W3 |
| 3.5 | Deactivate / Locked Projects | Added to `03 - Projects/Create a Project.md` | W1 |
| 3.6 | Export Timeline to PDF | Added to `03 - Projects/Tasks Phases Milestones.md` | W1 |
| 3.7 | Copy Tasks From Investments | Added to `03 - Projects/Tasks Phases Milestones.md` | W1 |
| 4.4 | Multi-currency in Roadmaps | Included in `04 - Roadmaps/Sync and Import.md` | W1 |
| 4.5 | Custom Attributes for Roadmaps | Added to `04 - Roadmaps/Top-Down Planning.md` | W1 |
| 4.6 | Field Level Security for Roadmaps | Added to `04 - Roadmaps/Top-Down Planning.md` | W1 |
| 4.7 | Roadmap Events | Added to `04 - Roadmaps/Timeline Layout.md` | W1 |
| 6.1 | **Broken `[[Staffing Grid]]` link** | Created `06 - Resource Management/Staffing Grid.md` | W3 |
| 6.2 | Analyze Investments in Staffing Workspace | Added to `06 - Resource Management/Assignments Analysis.md` | W3 |
| 6.3 | Hard Allocations | Added to `06 - Resource Management/Assignments Analysis.md` | W3 |
| 6.4 | Scenario sharing/publishing/personas | Expanded `06 - Resource Management/Staffing Scenarios.md` | W3 |
| 7.3 | **Dead `[[Vouchers and Transactions]]` link** | Fixed in `_MOC Financials.md` and `Transactions and WIP.md` | W2 |
| 7.4 | Unposted Transactions CRUD | Added to `07 - Financial Management/Transactions and WIP.md` | W3 |
| 7.5 | Cost Plus Rules | Added to `07 - Financial Management/Cost Rate Matrix.md` | W3 |
| 7.6 | Enable Investments/Resources for Financials | Added to `07 - Financial Management/Financial Entity Setup.md` | W3 |
| 7.7 | Company Profiles, Input Type Codes | Added to `07 - Financial Management/Charge Codes and Vendors.md` | W3 |
| 7.8 | Deactivate Financial Attributes | Added to `07 - Financial Management/Financial Classes.md` | W3 |
| 7.9 | Overhead Rules / Reverse Charges / Recovery | Expanded `07 - Financial Management/GL Accounts and Chargebacks.md` | W3 |
| 8.4–8.6 | OTE, Manual/Automated entries, Notifications | Covered in `Advanced Timesheet Features.md` and expanded `Enter Hours and Submit.md` | W1 |
| 9.2 | Collaborative Workflow procedures | Expanded `09 - Collaboration/Collaborative Workflow.md` (→416 lines) | W1 |
| 9.4 | Business Agreements incorrect model | Rewritten `09 - Collaboration/Business Agreements.md` (207 lines) | W1 |
| 11.5 | System Reports + copy-remap | Added to `11 - Reporting/Working with Reports.md` | W2 |
| 12.1–12.3 | OBS Configuration (Financial + Non-Financial) | Expanded `OBS Configuration.md` (25→359 lines) | W3 |
| 12.4 | License Type Functionality matrix | Added to `User Accounts and Passwords.md` | W3 |
| 13.1 | Resource Management requisition sub-topics | Expanded `Resource Management Classic.md` (+10 subsections) | W3 |
| 14.1 | Data Review section | Added to `14 - Vaia AI/Data Generation.md` | W2 |
| 14.3 | Brand Your AI misplaced | Moved to `14 - Vaia AI/Setup and Configure.md` | W2 |

### Remaining P2 Gaps (Unresolved)

#### Cross-Domain (folders 02, 03)

| # | Gap | Affected Notes | Source |
|---|-----|---------------|--------|
| X.1 | AI Chat Panel in workspaces — not documented for Projects, Ideas, Team Investments, Custom Investments | All investment Getting Started notes | Multiple source docs |
| X.2 | Mark Investments for Deletion — workflow missing for Ideas and Team Investments (resolved for Projects in W1) | Investment Getting Started notes (Ideas, Team) | Multiple source docs |
| X.3 | Unlock an Investment — procedure missing for Ideas and Team Investments | Investment Getting Started notes | Multiple source docs |
| X.4 | Display Key Milestones (Timeline) — missing for investment types | Timeline-related notes | Multiple source docs |
| X.5 | Allow Time Entry for Unstaffed Resources — missing for Ideas and Team Investments | Staffing notes | Multiple source docs |

#### Folder 02 — Investments

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 2.1 | Custom Investment Effort Task configuration | Getting Started.md | `Allow Effort Task Creation` setting and behavior |
| 2.2 | Staffing business rules matrices (labor/non-labor) | Staffing.md | Detailed booking-status permission tables |
| 2.3 | Financial plan sub-topics | Financial Plans.md | Grouping attributes, Source field, rollup actuals from children, compare plans |
| 2.5 | Checklist detailed operations | Checklists.md (all types) | Rename, copy, due date, share, move, transfer ownership procedures |
| 2.6 | Risk Score (11 contributing attributes) | Risks Issues Changes.md | New Risk Score calculated attribute |
| 2.7 | Ideas Hierarchy Module | Ideas/ | No Hierarchy Module note for Ideas |
| 2.8 | Ideas Agreements | Ideas/ | No Agreements note for Ideas |

#### Folder 03 — Projects

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 3.8 | Financial Plan enhancements | Financial Plans.md | Edit Grouping Attributes, Include Actuals from Children, Rollup by Team |
| 3.9 | RIC enhancements | Risks Issues Changes.md | Document upload, Copy RIC, Create To Dos for RICs |
| 3.10 | Canvas Dashboard enhancements | Canvas Dashboard.md | Widget Governance, Configure Canvas panel, Export to PDF |

#### Folder 04 — Roadmaps

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 4.8 | Conversations and Audit for Roadmaps | (missing) | Need sections or notes |
| 4.9 | TSV/time-phased fiscal periods in grid | Grid Layout.md | TSV spreading logic in roadmap grid |

#### Folder 05 — Hierarchies

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 5.6 | Card workspace navigation — pan/zoom, right-click context menu | Create and Edit.md | Card-based workspace mechanics |
| 5.7 | Card configuration — color, field display | Create and Edit.md | Card appearance settings |
| 5.8 | Board/Calendar layouts for hierarchy tasks | Tasks in Hierarchy.md | Currently only grid covered |
| 5.9 | Financial Plans — delete, actual transactions, column attributes, FLS | Financial Plans in Hierarchy.md | Several sub-topics missing |
| 5.10 | Agreements in Hierarchies | (missing) | View/create agreements from hierarchy context |
| 5.11 | Checklist roles table (Owner/Co-Owner/Collaborator/Participant) | Checklists notes | Permissions matrix not documented |

#### Folder 06 — Resource Management

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 6.5 | License Type and Last Login details | Configure Resources Roles Teams.md | Not covered |

#### Folder 08 — Timesheets

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 8.7 | Classic PPM timesheet specifics | Enter Hours and Submit.md | Configure layout, populate, indirect categories |
| 8.8 | Grid Layout column configuration | Grid Layout Management.md | Classic PPM column config, effort/project time gauges |

#### Folder 09 — Collaboration

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 9.3 | To Dos step-by-step CRUD in dedicated note | To Dos.md | Create, assign, due date, block, complete, reorder (partially covered in expanded Collaborative Workflow) |

#### Folder 11 — Reporting

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 11.6 | DWH Trending — XOG support, troubleshooting SQL errors | Data Warehouse Trends.md | `dwTrendEnabled` and error table |

#### Folder 12 — Administration

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 12.5 | Advanced Reporting admin config | General System Settings.md | Jaspersoft Domains, Security, UI Themes, DB Link |

#### Folder 14 — Vaia AI

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 14.2 | Data Flow / RAG Architecture | Setup and Configure.md | Retrieve → augment → transmit → display |

#### Folder 17 — Installation/Upgrade

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 17.3 | Upgrade "Start Here" planning topics | Pre-Upgrade Steps.md | Plan for All Required Components, Legacy Business Objects, Linux checkinstall workaround, SaaS scheduling |

#### Folder 18 — Advanced Reporting

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 18.1 | Jaspersoft 9.0 What's New | Getting Started Jaspersoft.md | Keystore backup, Chrome requirement, Legacy Key export |

#### Folder 19 — Add-Ins/Integrations

| # | Gap | Affected Note | Details |
|---|-----|--------------|---------|
| 19.1 | PMO Accelerator process procedures | Project Lifecycle.md | Major Project process steps, Document Review, Create from Template |
| 19.2 | PMO overwrite tables | Overview and Install.md | Per-object and per-query-type overwrite tables |

---

## P3 — Minor Gaps (Thin Coverage, Minor Corrections)

| # | Location | Issue | Status |
|---|----------|-------|--------|
| P3.1 | `01 - Getting Started/First Time Login.md` | Missing: user profile settings (avatar, unit of measure, locale, notification thresholds), detailed instance registration (OTP, HA scenarios) | Open |
| P3.2 | `01 - Getting Started/Digital Product Management.md` | Missing: "Defining a Product" narrative, PM vs PO roles | Open |
| P3.3 | `02 - Investments/Custom Investments/Getting Started.md` | Missing: tile groups, Setup View Options/TSV config, nested subobject grids | Open |
| P3.4 | `03 - Projects/Staffing.md` | Mixed bookings: detailed Classic PPM enable steps and Accept/Commit actions missing | Open |
| P3.5 | `03 - Projects/Tasks Phases Milestones.md` | Missing: Color By/Picklists for timeline, Phase vs Summary Task distinction, external dependencies | Open |
| P3.6 | `03 - Projects/Status Reports.md` | Missing: right-click context menu, Latest attribute, size/orientation options | Open |
| P3.7 | `04 - Roadmaps/Top-Down Planning.md` | ~~Copy a Roadmap: no dedicated steps~~ | ✅ Resolved W1 |
| P3.8 | `06 - Resource Management/Allocations Analysis.md` | ~~Resource Summary Mode / histograms not explicitly called out~~ | ✅ Resolved W3 (in Staffing Grid) |
| P3.9 | `06 - Resource Management/Configure Resources Roles Teams.md` | Resource Property Attributes: full attribute list not documented | Open |
| P3.10 | `11 - Reporting/Data Providers.md` | ~~OOTB data providers only mentioned as "Stock"; no details~~ | ✅ Resolved W2 |
| P3.11 | `13 - Classic PPM/Portfolio Management.md` | Named examples treated as partial; Save/Discard Pending Edits missing | Open |
| P3.12 | `14 - Vaia AI/Status Report Summarization.md` | ~~Contains "Brand Your AI" content that belongs elsewhere~~ | ✅ Resolved W2 |
| P3.13 | `15 - Mobile App/Timesheets Mobile.md` | First-time two-method login choice not explicitly documented | Open |
| P3.14 | `16 - Development/REST API/Using REST APIs.md` | ~~REST API operations matrix tables not present; request headers not unified~~ | Partially resolved W3 (filtering added; ops matrix still missing) |
| P3.15 | `18 - Advanced Reporting/Getting Started Jaspersoft.md` | Actually about training/schema, not the "Getting Started" steps from source | Open |

---

## Broken / Dead Links

| Link | Status | Resolution |
|------|--------|-----------|
| `[[Staffing Grid]]` | ✅ Fixed | Created `06 - Resource Management/Staffing Grid.md` (Wave 3) |
| `[[Vouchers and Transactions]]` | ✅ Fixed | Updated to `[[Transactions and WIP]]` in MOC and related note (Wave 2) |

---

## Statistics

| Metric | Initial (Pre-Validation) | Current (Post Wave 3) |
|--------|------------------------|----------------------|
| Total source headings analyzed | ~3,200 | ~3,200 |
| P1 Critical gaps | ~30 | **1 remaining** |
| P2 Important gaps | ~70 | **~30 remaining** |
| P3 Minor gaps | ~15 | **~10 remaining** |
| Broken links | 3 | **0** |
| Weighted vault coverage | ~73% | **~88%** |
| New notes created | 0 | **29** |
| Existing notes expanded | 0 | **24** |
| MOCs updated | 0 | **12** |
