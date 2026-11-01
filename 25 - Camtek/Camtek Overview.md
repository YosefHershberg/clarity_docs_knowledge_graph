---
title: Camtek Overview
tags:
  - camtek
  - concept
aliases:
  - Camtek Architecture
  - Feature Management Architecture
canonical: true
client: camtek
audience: dev
domain: client
---

# Camtek Overview

## What Camtek manages in Clarity
Two populations share the **Project** object, told apart by the custom attribute **Camtek Investment Type** (`type_in`, lookup `INV_TY`):

| `type_in` | Value | What it is |
|---|---|---|
| 1 | Project | Regular R&D / hardware projects (blueprints *Camtek Project - Option*, *Integrated Option*, *Internal R&D*, *Feasibility*, *Production Support*, …) |
| 2 | **Feature** | A software feature. One Project instance per feature, blueprint **Features Camtek** (BP5511) |
| 3 | **On Going Feature** | A single master project (CL00001708, internal id 5183026) whose Gantt holds the hammocks of all active features |
| 4 | Bug | Bug-type feature (same mechanics as Feature) |
| 5 | On Going Bug | Master project for bugs (lookup value exists; no live project seen in dev) |
| 6 | **On Going CMM** | Master project (CL00001705) for features whose Feature Type is *CMM Feature* or *CMM Bug* |
| 7 | SW Project | Software projects outside the feature flow |
| 8 | SysCalib | System calibration projects |

Source: dev (lookup values). The spec's autoschedule table lists On Going Feature as 2 and On Going CMM as 3 — that is wrong; use the IDs above.

## The core idea: a feature lives in two places
```
Feature project (type 2)                         On Going master project (type 3 or 6)
┌──────────────────────────────┐   Active →      ┌──────────────────────────────────────┐
│ Properties: status, dates,   │ ─────────────►  │ Hammock task  = feature name          │
│ TFS number, customer, SW ver │   gantt moved   │   ├─ Feature Requirements   [In Prog] │
│ Gantt: (empty while active)  │                 │   ├─ SW Development         [In Prog] │
│ + 2 locked milestones kept   │ ◄─────────────  │   ├─ QA Validation …        [Valid.]  │
│   (Dev Phase End, Val. End)  │ Completed/Hold/ │   └─ SW MS Release          (milestone)│
└──────────────────────────────┘ Non-Active      └──────────────────────────────────────┘
          ▲  ▼ real-time attribute propagation (feat_int link)            ▲  ▼
      Azure DevOps "Clarity Feature" work item  ◄──── children ────►  "Clarity Task" work items
```

1. **Create** a feature from template → a process copies tasks from a matching template in the custom investment object **Features** (`features`, 64 templates) and creates the Feature + Task work items in Azure DevOps. See [[Feature Lifecycle]] stage A.
2. **Activate** (Feature Status → Active) → *Move Gant to On Going* moves the whole Gantt into the matching master project as a **hammock** (ערסל, a summary task named after the feature) and deletes it from the feature. Which master: Feature Type ∈ {CMM Feature, CMM Bug} → On Going CMM, otherwise On Going Feature, then matched on Commitment Date. See [[On Going Feature Project]].
3. **Work** happens on the hammock's tasks inside the master project. Task changes sync to Azure DevOps in real time; Azure DevOps status comes back every 10 minutes; feature-level attributes propagate down to tasks; dates and % complete roll back up to the feature. Custom autoschedule jobs run nightly.
4. **Close / Hold / Deactivate** → the hammock is copied back to the original feature and deleted from the master project.

## Why it is built this way
- Managers want **one Gantt** of everything in progress (the master project) with resource filtering and cross-feature dependencies, while each feature keeps its own record, status and TFS identity.
- Azure DevOps is the developers' system; Clarity is the planning system. Clarity is the **source for everything except task status**, which flows back from TFS.
- Hammocks let a feature's tasks move between masters (Feature Type change) and back home without losing identity: the link is the task attribute **Feature Internal Link** (`feat_int`) = the feature project's internal ID.

## Key identifiers to remember
| Thing | ID |
|---|---|
| Feature status lookup | `CAMTEK_FEATURE_STATUS`: 1 Backlog, 2 Active, 3 In Progress, 4 Completed, 5 Rejected, 6 Hold |
| Task phase lookup | `FEATURE_STATUS` (attr `feature_status` on Task): 2 In Progress, 3 Validation |
| Phase milestone lookup | `PHASE_MILESTONE_LOOKUP` (attr `phase_milestone`): 1 Development Phase End, 2 Validation Phase End |
| Feature ↔ hammock link | Task `feat_int` = Feature project internal id; Task `parent_link` = URL of the feature |
| Moved flag | Project `move_yn` ("Moved To On Going") |
| TFS ids | Project `tfs_num`, Task `tfs_tasknum`, Task `tfs_parent` (= feature's TFS id), `linktotfs` on both |

## Blueprints (dev)
Features Camtek (BP5511), On Going (BP5541), On Going CMM (BP5547), plus 16 *Camtek Project - …* blueprints for regular projects and Standard Project. Feature properties page shows: Feature Status, Original TFS Number, TFS Number, Feature Approval, Start/Finish, Project Request, Project Manager, Feature Initiator, Feature Type, % Complete, Project Priority, Assigned Group, Commitment Date, Delivery Finish Date, Ready For Delivery, Customer, Machine Type, Customer Territory, Customer Department, SW Version, Feature Size, Parent, Ready For QA, Ready for Validation, Moved To On Going, Description, Last Autoschedule Run Date. Action on the page: *Creating Dependencies Between Tasks*. The On Going blueprint exposes an *Autoschedule On In Going* action.

## Left navigation (new UX, dev)
Home · Project Tiles · Projects · Pages · Custom Objects · Camtek MNG Report · My Workspace · Tasks · To Dos · Hierarchies · Roadmaps · Teams · Resources · Staffing · Reporting · Customers · Products · Project Manager Calculation · Administration · **Features** (the template object) · Classic PPM.

See also: [[Camtek Data Model]], [[TFS Integration]], [[Process and Job Catalog]].
