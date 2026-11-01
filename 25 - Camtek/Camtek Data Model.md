---
title: Camtek Data Model
tags:
  - camtek
  - reference
aliases:
  - Camtek Attributes
  - Camtek Lookups
  - Camtek Custom Objects
canonical: true
client: camtek
audience: dev
domain: client
---

# Camtek Data Model

All attribute IDs and lookup values below were read from the **dev** environment on 2026-11-01 (Administration › Attributes, filter Object = Project; Task, Custom = Yes: 155 Project + 73 Task custom attributes; Classic › Lookups). Custom attributes live in `odf_ca_project` / `odf_ca_task` (or `odf_ca_inv` for investment-level ones). For SQL against these tables see [[Universal Conventions]].

## 1. Lookups (value → id)

| Lookup ID | Used by | Values |
|---|---|---|
| `INV_TY` Camtek Investment Type | Project `type_in` | 1 Project · 2 Feature · 3 On Going Feature · 4 Bug · 5 On Going Bug · 6 On Going CMM · 7 SW Project · 8 SysCalib |
| `CAMTEK_FEATURE_STATUS` Feature Status - Feature | Project `cmtk_feature_status`, Task `parent_feat_stat` | 1 Backlog · 2 Active · 3 In Progress · 4 Completed · 5 Rejected · 6 Hold |
| `FEATURE_STATUS` Task Phase (for Featuretask) | Task `feature_status` | 2 In Progress · 3 Validation |
| `PHASE_MILESTONE_LOOKUP` Phase Milestone | Task `phase_milestone` | 1 Development Phase End · 2 Validation Phase End |
| `FEATURE_TYPE` | Project `feature_type`, Features `feature_type` | 1 CMM Feature · 2 Configurator · 3 Secs Gem · 4 CMM Bug · 5 DevOnly · 6 AutoTest · 7 Feasibility |
| `FEATURE_SIZE` | Project `feature_size` | 1 S · 2 M · 3 L |
| `MACHINE_TYPE` ("Machine type in TFS") | Project/Task `machine_type` | 1 CAL2 · 2 CAL3 · 3 Flipper · 4 Eagle T · 5 Eagle TP · 6 Eagle G5 · 7 Eagle G5 CSI (TDI) · 8 Cluster tool · 9 Hawk Panel · 10 Hawk · 11 Hawk CSI (TDI) · 12 Eagle Panel · 13 Virtual Machine · 14 HRBSI · 15 EBI · 16 Not required · 17 Any tool · 18 Eagle |
| `SW_VERSION` | Project/Task `sw_version`, Features `proc_sw` | 1 9.4 · 2 10 · 3 11 · 4 9.3 · 5 10.1 · 6 SMG · 7 PRV · 8 EXT |
| `TERRITORY_CAM` Territory - Camtek | Project `territory_cam` | 1 Korea · 2 Singapure · 3 Taiwan · 4 USA · 5 China · 6 Europe · 7 Japan · 8 Israel · 9 SEA |
| `PROJ_STAT` Camtek Project Status | Project `camtek_proj_stat` | `initiated` Initiated · `APPROVED` Approved · `ON_HOLD` On Hold · `Completed` Completed · `REJECTED` Rejected · `Termination` Closure (string ids) |
| `FEATURE_PROJ` Feature Project | ? | 1 Existing Project · 2 New Project |
| `CAMTEK_CUST` Camtek - Customers | Project/Task `customer_camtek` | static list (not enumerated; sample value "Camtek HQ") |
| `FEATURE_APPROVAL`, `FEA_BUG` Feature/Bug, `COMM_REAS` Commitment Change Reason, `DELAY_REAS`, `SUB_TEAM`, `TASK_TYPE`, `MACHINE_JIG` | misc | static, not enumerated |
| `OBJECT_LOOKUP_FEATURES`, `OBJECT_LOOKUP_BACKLOG`, `OBJECT_LOOKUP_COMMITMENT_DATE` | instance lookups | dynamic, over the custom objects |

> [!warning] Spec drift
> The spec's autoschedule table lists On Going Feature = 2 and On Going CMM = 3, and names Backlog as lookup id 5. Dev values above are authoritative. The spec's "Rejected (value id=5/6)" matches dev (5 Rejected, 6 Hold).

## 2. Project attributes used by the feature flow
| Label (dev) | Attribute ID | Type | Role |
|---|---|---|---|
| Camtek Investment Type | `type_in` | lookup INV_TY (odf_ca_inv) | population switch |
| Feature Status | `cmtk_feature_status` | lookup | drives Move / Return / TFS State |
| Feature Type | `feature_type` | lookup | CMM routing, template match |
| Moved To On Going | `move_yn` | boolean (odf_ca_inv) | hammock currently in On Going |
| TFS Number / TFS Link / TFS Created Date / TFS Last Update | `tfs_num` / `linktotfs` / `tfs_crea_date` / `tfs_update` | string / string / date / date | Azure DevOps identity |
| Original TFS Number | `orig_tfs` | string | "duplicate of" relation |
| Original feature id for process | `ori_proc` | string | process helper |
| Ready For Delivery (Month Year) | `release_date_string` | string | derived from `proj_term1` task finish |
| Delivery Finish Date | `delivery_finish_date` | date | finish of the delivery task |
| Original Delivery Date | `original_da` | date | |
| Commitment Date / Commitment Change Reason | `commitment_date` / `comm_reas` | date / lookup | routing to On Going, TFS Release Date |
| Ready for Validation | `valid_ready` | boolean | all In-Progress tasks done |
| Ready For QA | `ready_for_qa` | boolean | |
| Ready For Customer | `cust_ready` | boolean | CMM only |
| Feature Initiator | `feat_init` | resource | default assignee |
| Project Initiator (label) / Project Request | `project_source` | lookup | mirrored to TFS |
| Customer / Customer Territory / Customer Department | `customer_camtek` / `territory_cam` / `department_cam` | lookups | |
| SW Version | `sw_version` | lookup | template match |
| Machine Type | `machine_type` | lookup | template match, copied to tasks |
| Project Priority | `project_priority` | lookup | → task priority |
| Assigned Group | `assigned_group` | lookup | |
| Related Features | `related_feat` | multi | TFS Related Work |
| Feature Size | `feature_size` | lookup | computed nightly from ETC |
| Feature Approval | `feature_approval` | lookup | |
| Feature Requirements, Provide Time Estimation and Allocation, SW Development, SW Development On Tool, SW Integration On tool, QA Validation on Private Branch, SW Validation - Bugs Fixing, SW Merge To Release Version, SW Merge to 10.0 / 11.0 Release version, QA Validation on Rel Branch, SW MS Release | `feature_req`, `prov_time`, `sw_dev`, `sw_devtoo`, `sw_integr`, `qa_validation`, `bug_fix`, `sw_merge`, `merge_10`, `merge_11`, `sw_qa`, `sw_ms` | booleans | one flag per template task name — *inferred*: which tasks a feature includes |
| System / Support / Application Validation on Private Branch | `app_validation` / `sup_validation` / `app_valid` | booleans | template match |
| fleg task tfs | `flegtfs` | boolean (odf_ca_inv) | toggled off/on around On Going autoschedule to mute TFS triggers |
| Fleg send mail validation | `flegsendmailvalid` | boolean | |
| Auto Autoschedule | `auto_auto` | boolean | gates project autoschedule |
| Last Autoschedule Run Date | `last_auto_run` | date | |
| Total Original ETC | `total_original_etc` | number | |
| Reopen | `reopen` | boolean | |
| Population of the Validation - AI | `population_of_va` | string | action-item text |
| Camtek Status | `camtek_proj_stat` | lookup PROJ_STAT | regular-project status |
| Project Type / Project Scale | `project_type` / `project_scale` | lookups | drive blueprint (*Update Blueprint by Project Type*) |
| Success at first time, On Tool, Not On Tool Reason, No V.R Reason, Validation Report | `succ_first`, `on_tool`, `not_tool`, `valid_rep_reas`, `validation_rep` | misc | |
| Test / temp attributes (Hebrew names) | `temp_feature`, `aaaf`, `tfs_temp`, `delha`, `ffffggg`, `bool_test`, `test_resources`, `test_projec_this_nul` | — | migration leftovers, ignore |

Other Project custom attributes in dev (not feature-flow): Rally/integration (`obj_int_*`), objective alignment factors (`obj_align_factor1-6`, `obj_alignment`), stakeholders (`obj_stakeholder1-3`), portfolio categories, EV variances, Delivery Compliance/Deviation, Demo flags, ECO, SO Number, PR Number (`catalog_number`), MRD/MRK dates, Regulatory, Risk score, Samples, Prototype, Budget Tracking Number, Linked Products, Master Parent (`mas_par`), Notes, Project Summary, Project Folder Path.

## 3. Task attributes (all 73 custom)
| Label | Attribute ID | Type | Role |
|---|---|---|---|
| Feature Internal Link | `feat_int` | number | **feature project internal id — the hammock ⇄ feature key** |
| Parent Link | `parent_link` | string | URL of the feature |
| Feature Status | `parent_feat_stat` | lookup | copy of feature status |
| Task Phase | `feature_status` | lookup FEATURE_STATUS | In Progress / Validation |
| Phase Milestone | `phase_milestone` | lookup | marks the two locked milestones |
| TFS Number / TFS Parent / TFS Link | `tfs_tasknum` / `tfs_parent` / `linktotfs` | string | Azure DevOps identity |
| TFS Active/Non Active | `delete_task` | boolean | False → delete work item; toggled by status-sync job |
| TFS Last Update / Last Update From TFS | `tfs_update` / `tfsto_update` | date | |
| Admin TFS monitoring | `admin_tfs` | boolean | precondition flag for update trigger, cleared by sync job |
| Original TFS Number | `orig_tfstask` | string | |
| Release Date | `release_date_string` | string | copy of feature value |
| Commitment Date | `commitment_date` | date | |
| SW Version / Machine Type / Customer | `sw_version` / `machine_type` / `customer_camtek` | lookups | |
| Task Priority / Feature Task Priority | `task_priority` / `feature_priority` | lookups | |
| Ready For Validation / Ready For QA / Ready For Customer | `valid_ready1` / `ready_for_qa_task` / `cust_ready1` | booleans | |
| Ready For Delivery / Ready For Delivery Feature | `proj_term1` / `proj_term2` | booleans | the delivery task marker (feature Gantt / hammock) |
| Feature Initiator / feature initiator for process | `feat_init1` / `init_proc` | resource / boolean | |
| Project Request | `project_source` | lookup | |
| Parent | `parentest_` | number | copy of feature parent |
| Assigned Group | `assigned_group` | lookup | |
| Assigned Resource for Feature / Assigned Resource Filter | `ass_res_feature` / `ass_res_filter` | multi-resource | filterable copies of assignments (hammock = union) |
| Task POC | `task_poc` | resource | |
| For Status | `for_sta` | boolean | excluded from "In Progress" detection when Yes |
| Original ETC / Saving ETC / ETC TFS | `original_etc` / `etc_save` / `etc_tfs` | numbers | completion logic |
| Is Private Branch | `is_private_branch` | boolean | drives Ready For QA |
| Tool Required | `tool_required` | boolean | machine type sync to TFS |
| Hold Task | `hold_task` | boolean | |
| On Leave / On Leave ID | `on_leave` / `leave_id` | string | On Leave object link |
| Task Type / Task Tab / Version / Sprint / Sprint Phases | `task_type` / `to_include` / `version` / `spr_in` / `spri_pha` | misc | |
| Description / User Story Description | `description` / `desc_user` | string / rich text | mirrored to TFS Description |
| Reason for Delay / Delay Reason / Reason for delay flag | `delay_reas` / `delay_reas_s` / `delay_flag` | | |
| Current Phase – Mark | `current_phase_new_` | string | regular-project gates |
| Count predecssor / Cross Dependency Count | `predecssor_` / `cross_deps` | numbers | computed by jobs |
| Original Finish / Original Duration / Calculated Finish / Remaining Days | `origin_fin` / `origin_dur` / `calculated_finish` / `remain_day` | | |
| Current Date / Current Date + 28 / calc date | `now_date` / `curren_plus` / `calc_date` | dates | helper fields |
| Baseline Auto Save, Connect, Attachment, Include in Status Reporting, Related Risk, ECO\DCR Number, FRT - TFS link, Nextplus Link, F/B, Schedule/Cost Variance % | `baseline_save`, `connect_task`, `task_attach`, `odmd_rpting`, `related_risk`, `eco_dcr_number`, `frt_tfs_link`, `nextplus_link`, `fea_bug`, `obj_ev_*` | | |

## 4. Custom objects (Classic Studio, dev)
| Object | ID | API id | Role |
|---|---|---|---|
| **Features** | `features` | `custFeaturess` | custom **investment** object holding the 64 task templates; nav item "Features"; view *(Copy) תצוגת הקמת תבניות*; columns Clarity Feature ID, Feature Name, SW version for process, System/Application/Support Validation On Private Branch, Camtek Investment Type, Feature Type |
| **Commitment Date** | `commitment_date` | `custCommitmentDates` | 6 instances named 1–6 (ids 1731–1736); spec: each has start, finish and `comm_date`; used to route hammocks and as a dynamic lookup |
| Feature Backlog | `backlog` | `custBacklogs` | backlog items (processes *Feature Backlog*, *Feature Backlog new*) |
| Customers | `customers` | `custCustomerss` | customer master |
| Products | `products_camtek` | `custProductsCamteks` | product master, drives Product Owner |
| On Leave | `on_leave` | `custOnLeaves` | resource absences; tasks named/completed by jobs |
| Project Manager Calculation | `projcalc` | `custProjcalcs` | PM availability % |
| Prototype Order | `prototype` | `custPrototypes` | sub-object of Project |
| Samples | `samples` | `custSampless` | sub-object of Project |
| Milestones | `cmn_event_milestone` | | stock event milestones |
| itd AE * | `pl_itd_ae_*` | | itdesign Advanced Resource Planning add-in |

## 5. Assignment-level fields (spec only)
The completion logic writes **Camtek Actual** on the Assignment object (copied from ETC) and **Original ETC** on the task. The assignment attribute id was not harvested (Attributes grid was filtered to Project/Task). Verify under Administration › Attributes, Object = Assignment.

## 6. Mapping spec names → dev IDs
| Spec wording | Dev attribute |
|---|---|
| `Delete_Task` TFS Active/Non Active | `delete_task` |
| `tfs_num` (task) in Move tables | task `tfs_tasknum`; `tfs_num` is the Project attribute |
| Feature Status on Task `parent_feat_stat` | ✓ |
| Task Phase "feature_status" | ✓ (`FEATURE_STATUS` lookup) |
| `phase_meilestone` | `phase_milestone` |
| `assigned_resources`, `prfinish`, `prstart`, `prname`, `prpctcomplete`, `prexternalid`, `prislocked`, `prismilestone` | stock Task attributes |
| `Schedule_Start`, `Schedule_Finish`, `inv_percent_complete`, `manager_id`, `odf_assoc_parent`, `unique_code`, `is_active` | stock Project/Investment attributes |
| "Release Date" on Project | `release_date_string` (labelled **Ready For Delivery** in dev) |

Related: [[Camtek Overview]] · [[TFS Integration]] · [[Lookups Configuration]] · [[Custom Investment Types]]
