---
title: Coverage Matrix — Source to Curated Notes
tags:
  - validation
  - MOC
date: 2026-04-14
last_updated: 2026-04-14
---

# Coverage Matrix — Source Documentation vs Curated Notes

Generated: 2026-04-14  
Last updated: 2026-04-14 (after Waves 1–3 gap-filling)

For each of the 57 source documents, this matrix shows the coverage status against curated notes. See [[gap_report]] for the full prioritized gap list with recommended actions.

> [!tip] Legend
> - **Coverage %** = approximate percentage of source H2/H3 headings that have corresponding curated content
> - **Status**: Excellent (85%+), Good (70-84%), Partial (50-69%), Thin (25-49%), Stub (<25%)

---

## Batch 1 — Getting Started (Folders 01, 13)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Getting Started with Clarity.md | ~70% | Good | `[[_MOC Getting Started]]`, `[[First Time Login]]`, `[[Roles and Personas]]`, all Common Components | Plans workspace, ICE/Custom Help Content, user profile settings |
| Using Classic PPM.md | ~5% | Stub | `[[Classic PPM Getting Started]]` | 34+ procedures entirely missing (personalization, dashboards, portlets, lists, jobs, reports) — most belong in folder 13 |

## Batch 2 — Investments (Folder 02)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Using Clarity - Custom Investments.md | ~65% | Partial | All `Custom Investments/` notes | AI Chat Panel, Effort Task, Mark for Deletion, Unlock, email-based actions, allocation values, subprojects, % Complete |
| Capture Develop and Approve New Ideas.md | ~55% | Partial | All `Ideas/` notes | Conversion Impact Table, financial plan sub-topics, To Dos module, Hierarchy Module, Agreements, Conversations, Audit for Ideas |
| Working with Team Investments.md | ~65% | Partial | All `Team Investments/` notes | Admin settings table, Rally FCA, CSV import details (lookups, TSV, async), allocation values, staffing business rules |
| Viewing Custom Objects and Subobjects.md | ~30% | Thin | `[[Getting Started]]`, `[[Create and Edit]]` | Most content belongs in folder 16 (Studio/dev); nested grids, securing custom objects missing from folder 02 |

## Batch 3 — Projects (Folder 03)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Managing Projects.md | ~65% | Partial | All `03 - Projects/` notes | Deactivate/Delete/Lock projects, AI Chat Panel, Tiles page filters, sub-objects, View Options details, external dependencies |
| Manage Status Reports.md | ~50% | Partial | `[[Status Reports]]` | Cross-object Status Reports workspace, bulk PDF export, Latest attribute, right-click context menu |
| Track Tasks Across Investments.md | ~45% | Thin | `[[Tasks Phases Milestones]]` | Global Tasks workspace, Calendar layout, Associated Objects Grid, Board swimlanes/card config |
| Track and Edit To Dos.md | ~20% | Stub | `[[Tasks Phases Milestones]]` (brief) | Global To Dos workspace, access rights, attachments, To-Dos-specific business rules |

## Batch 4 — Roadmaps / Hierarchies / Pages & Objectives (Folders 04, 05, 10)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Top-Down Planning with Roadmaps.md | ~55% | Partial | `[[Top-Down Planning]]`, layout notes, `[[Canvas Dashboard]]`, `[[Checklists]]` | CSV import, multi-currency, sync, picklists, groups, custom attributes, FLS, processes, Rally, Vaia, events, conversations, audit |
| Create and Edit Hierarchies.md | ~45% | Thin | `[[Create and Edit]]`, `[[Objectives Hierarchy]]`, `[[Cross-Object Investment Grid]]`, `[[Timeline Layout]]`, `[[Tasks in Hierarchy]]`, `[[Financial Plans in Hierarchy]]` | Canvas dashboard, staffing analysis, custom metrics, conversations, audit, card navigation/config, agreements, FLS, processes |
| Working with Plans (Beta).md | ~10% | Stub | `[[Plans Beta]]` | Nearly everything — Resource-Driven Actuals Plan, versioning, publishing, commit, OBS security, sync, hierarchy |
| Working with Pages.md | ~85% | Excellent | `[[Working with Pages]]` | Minor: To Dos widget, detailed audit view options |
| Working with Objectives.md | ~15% | Stub | `[[Working with Objectives]]` | Access rights, board/grid layouts, quick create, templates, nested grids, audit, canvas, widgets, agreements, Vaia |

## Batch 5 — Resource Management (Folder 06)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Analyze Resource Allocation and Staffing.md | ~75% | Good | `[[Assignments Analysis]]`, `[[Allocations Analysis]]`, `[[Staffing Scenarios]]` | Broken `[[Staffing Grid]]` link, Hard Allocations, Invest analysis in Staffing, scenario sharing/publishing/personas |
| Configure Resources Roles and Team Resources.md | ~80% | Good | `[[Configure Resources Roles Teams]]`, `[[Availability Calendars]]` | License Type/Last Login, Secure Attributes, API Enable Sub-Objects, Widgets in resource edit |
| People-Centric Planning.md | ~80% | Good | `[[People-Centric Planning]]`, `[[Resource Directory]]`, `[[Relationship Explorer]]` | Interactive Filtering on Widgets, Persistent Filter Panel, Manager Type/Configure Card enhancements |

## Batch 6 — Financial Management (Folder 07)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Financial Management.md | ~70% | Good | All `07 - Financial Management/` notes | Financial Departments, Financial Locations, Cost Plus Rules, Enable Investments/Resources for Financials, Company Profiles, Input Type Codes, Deactivate Financial Attributes, Overhead/Reverse Charges |
| Manage Vouchers and Transactions.md | ~70% | Good | `[[Transactions and WIP]]`, `[[Benefit Plans]]` | Unposted Transactions CRUD, dead `[[Vouchers and Transactions]]` link, cross-investment view |

## Batch 7 — Timesheets (Folder 08)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Enter Hours and Submit a Timesheet.md | ~25% | Thin | `[[Enter Hours and Submit]]`, `[[Review and Approve]]`, `[[Grid Layout Management]]` | Frictionless Time (7 topics), Enter for Others/Team, attestation, ETC, spread total, charge codes, OTE impact, notifications, non-working days, adjust posted |
| Submit a Timesheet (Classic).md | ~35% | Thin | `[[Enter Hours and Submit]]` | Classic-specific configure layout, populate button, indirect categories, charge codes |

## Batch 8 — Collaboration (Folder 09)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Collaborative Workflow Management.md | ~30% | Thin | `[[Collaborative Workflow]]`, `[[To Dos]]`, `[[Action Items]]`, `[[Conversations]]` | All checklist CRUD ops, section management, To Do CRUD, collaborator sharing, Smartlists, common search (Conversations and Action Items are excellent) |
| Creating and Managing Business Agreements.md | ~25% | Thin | `[[Business Agreements]]` | Incorrect model (Provider/Consumer vs Predecessor/Successor), Canvas management, View Options, Blueprint association, Additional Capabilities |
| Create Edit and Delete Menu Links.md | 0% | Missing | — | Entire topic has no curated note |

## Batch 9 — Reporting (Folders 11, 18)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Working with Reporting.md | ~70% | Good | All `11 - Reporting/` notes | Data Provider CRUD, System Reports, DWH options config, enhancements log, chart type switcher |
| Advanced Reporting with Jaspersoft.md | ~60% | Partial | `[[Getting Started Jaspersoft]]`, `[[Ad Hoc Views]]`, `[[Data Warehouse Schema]]`, `[[Studio Reports]]`, `[[Export Import Content]]` | 7 domain descriptions, Ad Hoc View creation procedure, Run/Schedule report, Jaspersoft 9.0 What's New, domain terminology |
| Resource Management Reports.md | 100% | Excellent | `[[Resource Reports]]` | No gaps |
| Time Management Reports.md | 100% | Excellent | `[[Time Reports]]` | No gaps |
| Financial Management Reports.md | 100% | Excellent | `[[Financial Reports]]` | No gaps |
| Program Management Reports.md | 100% | Excellent | `[[Program Reports]]` | No gaps |
| Portfolio Management Reports.md | ~95% | Excellent | `[[Portfolio Reports]]`, `[[PMO Admin Reports]]`, `[[Data Warehouse Trends]]` | XOG Support for Trending, Troubleshooting SQL Errors |

## Batch 10 — Administration (Folder 12)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Administration.md | ~85% | Excellent | 68 notes across `12 - Administration/` subfolders | On Demand Portal Admin, Product Functionality by License Type, Financial/Non-Financial OBS Setup, OBS Configuration thin, Advanced Reporting admin config |
| Getting Started with Clarity Administration.md | ~95% | Excellent | `[[First Time Setup]]`, all Blueprint notes, `[[Field Level Access]]` | Narrative-only source; all key topics covered |

## Batch 11 — Classic PPM (Folder 13)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Demand Management.md | ~90% | Excellent | `[[Demand Management]]` | Notifications list view, Capacity Planning Scenarios detail |
| IT Service Management.md | ~93% | Excellent | `[[IT Service Management]]` | Review Processed Transactions, Change Staff Member Roles |
| Portfolio Management.md | ~85% | Excellent | `[[Portfolio Management]]` | Save/Discard Pending Edits, named examples |
| Project Management.md | ~95% | Excellent | 12+ Classic PM notes | View/Edit Resource Roles from project, hierarchy financial rollup |
| Resource Management.md | ~85% | Excellent | `[[Resource Management Classic]]`, `[[Requirements Planning]]` | Requisitions sub-topics (routing, discussions, automated, audit, deactivate, reduce allocations) |

## Batch 12 — Vaia AI + Mobile (Folders 14, 15)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Using Clarity Vaia (AI).md | ~85% | Excellent | All `14 - Vaia AI/` notes | Data Review section (3 topics), Data Flow/RAG architecture, Brand Your AI misplaced, Monitor Consumption detail |
| Using Clarity Mobile App.md | ~80% | Good | All `15 - Mobile App/` notes | FAQ/Troubleshooting (10 entries), Settings page, 3.3.1 key updates, first-time login two methods |

## Batch 13 — Development (Folder 16)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| REST API Reference.md | ~80% | Good | All `REST API/` notes, `[[Performance and Load Testing]]`, `[[Enhancements]]` | OBS Attribute Filtering, Static Dependent Lookups, Parameterized Dynamic Lookups, TSV Attributes API, Financials API, User Profile endpoint |
| Clarity Studio Development.md | ~95% | Excellent | All `Studio/` notes | Studio Access Rights (consolidated table) |
| XML Open Gateway (XOG) Development.md | 100% | Excellent | All `XOG/` notes | No gaps — curated notes exceed source |

## Batch 14 — Installation / Upgrade (Folder 17)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Install Clarity.md | ~98% | Excellent | `[[Install with Oracle]]`, `[[Install with SQL Server]]`, `[[Install with PostgreSQL]]` | No significant gaps |
| Upgrade Clarity.md | ~80% | Good | `[[Pre-Upgrade Steps]]`, `[[Upgrade Clarity]]`, `[[Upgrade Procedures]]`, `[[Post Upgrade Steps]]` | "Start Here" planning topics (6 items), Linux checkinstall workaround, SaaS scheduling |
| Install Clarity OData Service on Linux.md | 100% | Excellent | `[[OData Service Linux]]` | No gaps |
| Install Clarity OData Service on Windows.md | 100% | Excellent | `[[OData Service Windows]]` | No gaps |
| Install Jaspersoft.md | ~70% | Good | `[[Jaspersoft Installation]]` | Troubleshooting (14 sub-sections), ActiveMQ Cluster (4 sub-sections), Windows multicasting, cache distribution config |
| Upgrade Jaspersoft.md | ~90% | Excellent | `[[Jaspersoft Upgrade]]` | Apply Cumulative Patch steps, Memory Leak Errors |

## Batch 15 — Add-Ins / Integrations (Folder 19)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Add-Ins and Integrations.md | ~95% | Excellent | `[[APM Add-In]]`, `[[Overview and Install]]` | No significant gaps |
| PMO Accelerator.md | ~80% | Good | `[[Overview and Install]]`, `[[PMO Accelerator Setup]]`, `[[Object Views]]`, `[[Project Lifecycle]]`, all PMO report notes | Overwrite tables, Major Project process steps, Document Review procedure, Create from Template |
| Integrate Clarity with Rally.md | ~95% | Excellent | `[[Rally Integration]]`, `[[Rally Integration Examples]]`, `[[SSO Integration]]`, `[[MSP and OWB Integration]]` | Agile Time Tracking template config detail, Telemetry |

## Batch 16 — Reference / Release Info (Folders 21, 22)

| Source Document | Coverage | Status | Primary Curated Notes | Key Gaps |
|----------------|----------|--------|----------------------|----------|
| Reference.md | ~85% | Excellent | All `21 - Reference/Access Rights/` notes, `[[Jobs Reference]]`, `[[Portlets Reference]]`, `[[Connectivity Diagrams]]`, `[[Database Schema Changes]]`, `[[Authentication Methods]]`, `[[Database Performance]]` | On-Premise SAML detail (partially covered) |
| Release Information.md | ~95% | Excellent | `[[Release Notes]]` | No significant gaps |
| Review Archived Documentation.md | 100% | Excellent | `[[_MOC Release Info]]` | Informational pointer only |

---

## Overall Statistics

| Metric | Pre-Validation | Post Wave 3 |
|--------|---------------|-------------|
| Total source documents analyzed | 57 | 57 |
| Source docs with Excellent coverage (85%+) | 27 (47%) | **40 (70%)** |
| Source docs with Good coverage (70-84%) | 12 (21%) | **11 (19%)** |
| Source docs with Partial coverage (50-69%) | 8 (14%) | **3 (5%)** |
| Source docs with Thin coverage (25-49%) | 6 (11%) | **2 (4%)** |
| Source docs with Stub/Missing coverage (<25%) | 4 (7%) | **1 (2%)** |
| **Weighted overall coverage** | **~73%** | **~88%** |

### Most Improved Source Documents (Post-Validation)

| Source Document | Before | After | Change |
|----------------|--------|-------|--------|
| Working with Plans (Beta).md | ~10% | ~85% | +75% |
| Working with Objectives.md | ~15% | ~85% | +70% |
| Enter Hours and Submit a Timesheet.md | ~25% | ~75% | +50% |
| Create Edit and Delete Menu Links.md | 0% | ~90% | +90% |
| Collaborative Workflow Management.md | ~30% | ~85% | +55% |
| Creating and Managing Business Agreements.md | ~25% | ~80% | +55% |
| Track and Edit To Dos.md | ~20% | ~70% | +50% |
| Track Tasks Across Investments.md | ~45% | ~80% | +35% |
| Top-Down Planning with Roadmaps.md | ~55% | ~85% | +30% |
| Create and Edit Hierarchies.md | ~45% | ~75% | +30% |

### Remaining Worst-Covered Source Documents

1. **Using Classic PPM.md** — ~5% (stub orientation note; most content belongs in folder 13)
2. **Viewing Custom Objects and Subobjects.md** — ~30% (cross-domain; most content belongs in folder 16)
3. **Submit a Timesheet (Classic).md** — ~40% (Classic-specific procedures still thin)
