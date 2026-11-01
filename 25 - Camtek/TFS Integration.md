---
title: Camtek TFS Integration
tags:
  - camtek
  - dev
  - integrations
aliases:
  - TFS Integration
  - Azure DevOps Integration
  - Clarity to TFS
canonical: true
client: camtek
audience: dev
domain: client
---

# Camtek TFS (Azure DevOps) Integration

"TFS" in all Camtek material means **Azure DevOps Services**: organisation `AzCamtek`, project `Falcon` (`https://dev.azure.com/AzCamtek/Falcon`). Work items are created and updated by Clarity GEL processes over the Azure DevOps REST API using a personal access token held in the process scripts.

> [!danger] Secrets
> The design document embeds a live PAT in plain text. It is deliberately **not** reproduced in this vault. Treat the spec file as sensitive and rotate the token if it has circulated.

> [!warning] No Azure DevOps sandbox
> There is no dev instance of Azure DevOps; dev Clarity processes hit the **live** Falcon project. Dev has the process *Delete TFS num from project & task - DEV ONLY !* to strip TFS numbers so real items are not touched, and the spec plans a *TFS -Data Cleanup job* to delete test work items. Be careful when testing anything that creates work items from dev.

## Work item types
| Clarity object | Azure DevOps work item type | Relation |
|---|---|---|
| Project (`type_in = 2`) | **Clarity Feature** | parent of its tasks (*Related Work › Child*) |
| Task (`Is Task = Yes`, `Milestone = No`, `delete_task = True`) | **Clarity Task** | child of the feature (*Related Work › Parent*). Title = `<task name> - <feature name>` |

Hammocks and milestones are never sent to TFS. A feature whose `orig_tfs` is set gets a *Duplicate of* link to that work item.

## Field mapping — Clarity Feature (Project → TFS)
| TFS refname | TFS type | Clarity attribute | Notes |
|---|---|---|---|
| `System.Id` | Integer | `unique_code` Project ID | stored back into Clarity `tfs_num` |
| `System.Title` | String | `name` | also prefixed into all child task titles |
| `Clarity.startDate` | DateTime | `schedule_start` | |
| `Clarity.targetDate` | DateTime | `schedule_finish` | |
| `Camtek.ReleaseDate` | String/DateTime | `commitment_date` | spec history: previously `release_date_string`, changed by *Change releaseDate to commitment_date_string TFS* |
| `System.State` | String | `cmtk_feature_status` | **Resolved** when `valid_ready = Yes` and status = In Progress; also pushed to all child tasks |
| `System.Description` | String | `description` | |
| `Clarity.Custumer` / `Camtek.Customer` | String | `customer_camtek` | |
| `Clarity.Territory` / `Camtek.Territory` | String | `territory_cam` | |
| `Clarity.FeaturePriority` / `Microsoft.VSTS.Common.Priority` | String/Integer | `project_priority` | |
| `Camtek.ClarityVersions` / `Camtek.ClarityVersion` | String | `sw_version` | "Target & Version" |
| `System.AssignedTo` | String | `manager_id` Project Manager | blank if user missing in TFS |
| Related Work (Link) | Link | `related_feat` Related Features | |
| Clarity Parent / Area | String | `odf_assoc_parent` Parent, Machine Type | Area set only when previously empty |
| `ClarityProjectRequest` | String | `project_source` | |
| Duplicate of | Link | `orig_tfs` | |

Refnames appear with two spellings in the spec (create vs update tables); the update table is the later one. Verify against the Falcon process template before coding.

## Field mapping — Clarity Task (Task → TFS)
| TFS refname | Type | Clarity attribute | Notes |
|---|---|---|---|
| `System.Title` | String | `prname` + feature name | |
| `Clarity.startDate` | DateTime | `prstart` | |
| `Clarity.targetDate` | DateTime | `prfinish` | |
| Clarity task status | String | `prstatus` | read back by the 10-minute job |
| Clarity percent complete | Number | `prpctcomplete` | |
| `System.State` | String | feature `cmtk_feature_status` | Resolved rule as above |
| `System.AssignedTo` | String | `assigned_resources` (multi) | first/any missing user → blank |
| Task POC | Resource | `task_poc` | |
| `Clarity.TaskPriority` | String | `task_priority` | |
| Description | String | `description` | |
| `Clarity.ReleaseDate` | String | `release_date_string` | |
| `Clarity.ProjectRequest` | String | `project_source` | |
| `Clarity.ReadyForQA` | Boolean | `ready_for_qa_task` | |
| `Clarity.ReadyForValidation` | Boolean | `valid_ready1` | |
| Area | | `machine_type` | via *Machine type update …* processes (tasks with `tool_required`) |

## Sync rules
### Clarity → TFS (real time, trigger processes)
| Situation | Process (dev, Active) | Preconditions |
|---|---|---|
| Feature created from template | *Create task from feature template to project feature V1* → calls create | `type_in = 2` |
| Create TFS for existing feature (action) | *Tfs create feature in project object* (Draft in dev; the spec's action "Create: Clarity > TFS") | `tfs_num` empty |
| Feature attribute changed | *TFS update project type feature and change name &status task v1* | `tfs_num` filled |
| Task created / changed / copied — feature stage | *Update task - tfs project type feature new triger v3 include also copy task*, *create task - tfs project type feature* | `delete_task = True`, `tfs_tasknum`, feature `tfs_num`, `type_in = 2`, `move_yn = No`, `admin_tfs = True` |
| Task created / changed / copied / moved — On Going stage | *Update task - tfs project type On going new trigert v3*, *create task - tfs project type On going* | `delete_task = True`, `tfs_tasknum`, `tfs_parent`, `Is Task = Yes`, `type_in ∈ {3,6}` |
| Task set Non Active | *TFS - delete task from project type feature* / *… On Going* | `tfs_tasknum` filled |
| Status changed vs other field | all update processes | Status change → copy **all** mapped fields; other change → copy all **except** Status |
| Copy of a task | update processes | `tfs_tasknum` cleared, `tfs_parent` taken from target feature/hammock, then normal create |
| Machine type / tool required | *Machine type update from project object*, *Machine type update from task object - TFS* | |
| Assigned resources batch | *Update assigned_resources from task to TFS - JOB* (On Hold; scheduled 12:43) | |
| ETC | *update etc from clarity to tfs* (On Hold; scheduled 11:00) | |

### TFS → Clarity (scheduled)
*Change status from TFS to clatiry task of project On Going- JOB* — every 10 minutes (spec). For each Clarity Task work item whose *Changed Date* is after the last run: compare TFS "Clarity Status" with Clarity `prstatus`. If different: set `delete_task = False` (mutes the outbound trigger), apply the change — Not Started → status only; Started from Not Started → status + 1 % + `prstart = today`; Completed → status + 100 % + `prfinish = today` — then set `delete_task = True`. The job also clears `admin_tfs` on all tasks. A Draft process *TFS - update prcomplete from tfs* would also pull % complete.

### Reconciliation / one-offs
*Adjustments in the TFS system : Title & State / Duplicate* (fix titles, states, duplicate links), *Create Project type feature in tfs by ID - loop* (backfill features missing in TFS), *Delete work items from TFS* (Excel-driven delete), *Update work item Tfs from clarity tasks* (Draft, weekly reconciliation), *Insert Area field to TFS - tifuli*, *Update link tfs on project*, *Update Retro TFS Tasks*.

## Implementation notes
- Trigger scoping is done by **listing excluded attributes in the GEL start condition**; add any new Task attribute to that list or it will fire the sync on every edit (spec).
- Mapped attributes must remain in the **Audit Trail**.
- Resource lookups to TFS users are by display name; unknown users leave `System.AssignedTo` blank rather than failing.
- The process stamps `tfs_update` (Clarity → TFS) and `tfsto_update` (TFS → Clarity) for troubleshooting.
- For *calling REST from GEL inside Clarity*, the vault's binding pattern is [[Calling REST from GEL]]; for calling **Azure DevOps** from GEL use its PAT over Basic auth as the scripts already do.

Related: [[Feature Lifecycle]] · [[Camtek Data Model]] · [[Process and Job Catalog]]
