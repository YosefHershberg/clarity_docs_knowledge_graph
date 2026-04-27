---
title: Joining Recipes
type: reference
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - reference
  - howto
---

# Joining Recipes

Reusable SQL building blocks for the most common Clarity reporting needs. Every recipe links to the participating table notes so an AI agent can verify columns and types before adapting.

## 1. Project → tasks → assignments → resources

```sql
-- Every assignment on every task of every project, with the resource name
select inv.NAME       as project_name,
       inv.CODE       as project_code,
       t.PRNAME       as task_name,
       t.PRWBSSEQUENCE,
       res.FIRST_NAME || ' ' || res.LAST_NAME as resource_name,
       a.PRESTSUM     as etc_total,
       a.PRACTSUM     as actuals_total
  from INV_INVESTMENTS inv
  join INV_PROJECTS    p on p.PRID = inv.ID
  join PRTASK          t on t.PRPROJECTID = inv.ID
  join PRASSIGNMENT    a on a.PRTASKID = t.PRID
  join PRJ_RESOURCES   pr on pr.PRID = a.PRRESOURCEID
  join SRM_RESOURCES   res on res.ID = pr.PRRESOURCEID
 where inv.ODF_OBJECT_CODE = 'project'
   and inv.IS_ACTIVE = 1;
```

Tables: [[INV_INVESTMENTS]] · [[INV_PROJECTS]] · [[PRTASK]] · [[PRASSIGNMENT]] · [[PRJ_RESOURCES]] · [[SRM_RESOURCES]]

## 2. Project team (named resources and roles)

```sql
select inv.NAME as project_name,
       coalesce(res.FIRST_NAME || ' ' || res.LAST_NAME, role.FIRST_NAME) as member,
       team.PRSTART, team.PRFINISH,
       team.PRBOOKINGSTATUS, team.PRSTAFFREQUEST
  from PRTEAM team
  join INV_INVESTMENTS inv on inv.ID = team.PRPROJECTID
  left join SRM_RESOURCES res on res.ID = team.PRRESOURCEID
  left join SRM_RESOURCES role on role.ID = team.PRROLEID
 where inv.ID = :project_id;
```

Tables: [[PRTEAM]] · [[INV_INVESTMENTS]] · [[SRM_RESOURCES]]

## 3. Task dependencies (predecessor / successor)

```sql
select pred.PRNAME as predecessor, succ.PRNAME as successor,
       d.PRLAGTIME, d.PRTYPE
  from PRDEPENDENCY d
  join PRTASK pred on pred.PRID = d.PRPREDTASKID
  join PRTASK succ on succ.PRID = d.PRSUCCTASKID
 where pred.PRPROJECTID = :project_id;
```

Tables: [[PRDEPENDENCY]] · [[PRTASK]]

## 4. Investment → financial plans → cost plan details

```sql
select inv.NAME, fp.NAME as plan_name, fp.PLAN_TYPE_CODE,
       cpd.START_PERIOD, cpd.END_PERIOD,
       cpd.COST, cpd.UNITS
  from INV_INVESTMENTS inv
  join FIN_PLANS fp           on fp.OBJECT_ID = inv.ID
                              and fp.OBJECT_CODE = inv.ODF_OBJECT_CODE
  join FIN_COST_PLAN_DETAILS cpd on cpd.PLAN_ID = fp.ID
 where inv.ID = :investment_id;
```

Tables: [[INV_INVESTMENTS]] · [[FIN_PLANS]] · [[FIN_COST_PLAN_DETAILS]]

## 5. Investment ↔ FIN_FINANCIALS via ODF_OBJECT_INSTANCE_MAPPINGS

```sql
select inv.NAME, ff.*
  from INV_INVESTMENTS inv
  join ODF_OBJECT_INSTANCE_MAPPINGS m
       on  m.PRIMARY_OBJECT_INSTANCE_ID  = inv.ID
       and m.PRIMARY_OBJECT_INSTANCE_CODE = inv.ODF_OBJECT_CODE
       and m.SECONDARY_OBJECT_INSTANCE_CODE = 'financials'
  join FIN_FINANCIALS ff
       on ff.ID = m.SECONDARY_OBJECT_INSTANCE_ID
 where inv.ID = :investment_id;
```

Tables: [[INV_INVESTMENTS]] · [[ODF_OBJECT_INSTANCE_MAPPINGS]] · [[FIN_FINANCIALS]]

## 6. Timesheets → time entries → tasks

```sql
select ts.PRSTART, ts.PRSTATUS, te.PRACTSUM,
       t.PRNAME as task_name, inv.NAME as project_name,
       res.FIRST_NAME || ' ' || res.LAST_NAME as resource_name
  from PRTIMESHEET ts
  join PRTIMEENTRY te  on te.PRTIMESHEETID = ts.PRID
  join PRTASK t        on t.PRID = te.PRTASKID
  join INV_INVESTMENTS inv on inv.ID = t.PRPROJECTID
  join SRM_RESOURCES res on res.ID = ts.PRRESOURCEID
 where ts.PRSTART between :start and :end;
```

Tables: [[PRTIMESHEET]] · [[PRTIMEENTRY]] · [[PRTASK]] · [[INV_INVESTMENTS]] · [[SRM_RESOURCES]]

## 7. Resource skills + skill hierarchy

```sql
select res.FIRST_NAME, res.LAST_NAME, sk.NAME as skill,
       parent.NAME as parent_skill, sa.PROFICIENCY_LEVEL
  from RSM_SKILLS_ASSOCIATIONS sa
  join SRM_RESOURCES res on res.ID = sa.OBJECT_ID
                        and sa.OBJECT_CODE = 'resource'
  join RSM_SKILLS sk     on sk.ID = sa.SKILL_ID
  left join RSM_SKILLS parent on parent.ID = sk.PARENT_SKILL_ID;
```

Tables: [[RSM_SKILLS]] · [[RSM_SKILLS_ASSOCIATIONS]] · [[SRM_RESOURCES]]

## 8. Resource requisitions and proposed resources

```sql
select req.NAME as requisition,
       team.PRSTAFFREQUEST,
       proposed_res.FIRST_NAME || ' ' || proposed_res.LAST_NAME as proposed
  from RSM_REQ_REQUISITIONS req
  join PRTEAM team on team.REQUIREMENT_ID = req.ID
  left join RSM_REQ_RESOURCES rr on rr.REQUISITION_ID = req.ID
  left join SRM_RESOURCES proposed_res on proposed_res.ID = rr.RESOURCE_ID;
```

Tables: [[RSM_REQ_REQUISITIONS]] · [[RSM_REQ_RESOURCES]] · [[PRTEAM]] · [[SRM_RESOURCES]]

## 9. OBS units associated with an arbitrary record

```sql
-- Which OBS units is a project assigned to?
select ot.NAME as obs_type, ou.NAME as obs_unit
  from PRJ_OBS_ASSOCIATIONS oa
  join PRJ_OBS_UNITS ou on ou.ID = oa.UNIT_ID
  join PRJ_OBS_TYPES ot on ot.ID = ou.TYPE_ID
 where oa.TABLE_NAME = 'SRM_PROJECTS'    -- discriminator
   and oa.RECORD_ID  = :project_id;
```

Tables: [[PRJ_OBS_ASSOCIATIONS]] · [[PRJ_OBS_UNITS]] · [[PRJ_OBS_TYPES]]

## 10. Portfolio plan investments

```sql
select pf.NAME as portfolio, pl.NAME as plan_name,
       inv.NAME as investment, pip.IS_PINNED
  from PFM_PORTFOLIOS pf
  join PFM_PLANS      pl  on pl.PORTFOLIO_ID = pf.ID
  join PFM_INVESTMENTS_PLAN pip on pip.PLAN_ID = pl.ID
  join INV_INVESTMENTS inv on inv.ID = pip.INVESTMENT_ID;
```

Tables: [[PFM_PORTFOLIOS]] · [[PFM_PLANS]] · [[PFM_INVESTMENTS_PLAN]] · [[INV_INVESTMENTS]]

## 11. Chargeback transactions joined to GL allocations

```sql
select t.TRANSACTION_DATE, t.AMOUNT, t.TRANSACTION_SOURCE,
       acct.NAME as gl_account, dept.NAME as department
  from CBK_GL_TXNS t
  join CBK_GL_ACCOUNT acct on acct.ID = t.GL_ACCOUNT_ID
  join DEPARTMENTS dept on dept.ID = t.DEPARTMENT_ID
 where t.TRANSACTION_SOURCE in ('A','W')   -- A = billings, W = WIP
   and t.TRANSACTION_DATE between :start and :end;
```

Tables: [[CBK_GL_TXNS]] · [[CBK_GL_ACCOUNT]] · [[DEPARTMENTS]]

## 12. Project hierarchy (parent / child investments)

```sql
-- Direct hierarchy (one level)
select parent.NAME as parent, child.NAME as child
  from INV_HIERARCHIES h
  join INV_INVESTMENTS parent on parent.ID = h.PARENT_ID
  join INV_INVESTMENTS child  on child.ID = h.CHILD_ID;

-- Flattened hierarchy (all ancestors / descendants)
select root.NAME as ancestor, descendant.NAME as descendant, fh.LEVEL
  from INV_FLAT_HIERARCHIES fh
  join INV_INVESTMENTS root        on root.ID = fh.FROM_INV_ID
  join INV_INVESTMENTS descendant  on descendant.ID = fh.TO_INV_ID;
```

Tables: [[INV_HIERARCHIES]] · [[INV_FLAT_HIERARCHIES]] · [[INV_INVESTMENTS]]

## 13. Notes / links on any object

```sql
-- Notes on a resource
select n.PRNAME, n.PRDESC
  from PRNOTE n
 where n.PRTABLENAME = 'PRResource'
   and n.PRRECORDID  = :resource_id;
```

Tables: [[PRNOTE]] · [[PRLINK]]

## 14. Action items by assignee

```sql
select ai.NAME, ai.DUE_DATE, ai.STATUS,
       inv.NAME as related_investment,
       res.FIRST_NAME || ' ' || res.LAST_NAME as assignee
  from CAL_ACTION_ITEMS ai
  join CAL_ACTION_ITEM_ASSIGNEES ass on ass.CAL_ACTION_ITEM_ID = ai.ID
  join SRM_RESOURCES res on res.USER_ID = ass.PROXY_RESOURCE_ID
  left join INV_INVESTMENTS inv on inv.ID = ai.OBJECT_ID;
```

Tables: [[CAL_ACTION_ITEMS]] · [[CAL_ACTION_ITEM_ASSIGNEES]] · [[INV_INVESTMENTS]] · [[SRM_RESOURCES]]
