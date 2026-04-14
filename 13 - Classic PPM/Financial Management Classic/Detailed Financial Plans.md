---
title: Detailed Financial Plans (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2129-2155
canonical: true
audience: everyone
domain: classic
---
# Create Detailed Financial Plans (Classic PPM)

Detailed financial planning allows you to estimate funding for investments using cost plans, get approval via budget plans, and associate cost plans with benefit plans.

## Prerequisites

- Active fiscal time periods set up in a financial entity
- Financially enabled investment
- Appropriate access rights (see Access Rights Reference)

## Financial Plan Views

| View | Description |
|------|-------------|
| **Investment Currency View** | Default view — shows data for selected cost/budget plan in investment home currency, no child data |
| **Billing Currency View** | Same as Investment Currency but shows billing currency; applies in multicurrency systems |

To switch views:
1. Open an investment > **Financial Plans** > **Cost Plans** (or Benefit/Budget Plans)
2. Click the plan name to open details
3. Select the view from the **Show** drop-down

## Cost Plans

Cost plans are alternatives to financial summaries for detailed plans spanning multiple fiscal time periods. They track planned costs, actual costs, and variances.

### Plan of Record (POR)

The POR is the cost plan designated as the basis for the budget plan. The first cost plan created becomes the POR by default. You can change the POR at any time.

### Manually Define Cost Plans

1. Open the investment
2. Open **Financial Plans** menu > **Cost Plans**
3. Click **New Manual Plan**
4. Complete the fields:
   - **Plan Name / Plan ID** — Unique name and identifier
   - **Period Type** — 13 Periods, Weekly, Semi Monthly, Monthly, Quarterly, Annually (Default: entity plan default)
   - **Plan Start Period / Plan End Period** — Fiscal start and end periods
   - **Benefit Plan** — Associated benefit plan (optional)
   - **Plan of Record** — Mark as POR (Default: first plan is POR)
   - **Grouping Attributes** — Categories for line item structure
5. Save and click **Detail**
6. Click **Add** to select grouping attribute values
7. A line item detail row is created for each unique combination of selected grouping attribute values
8. Enter Unit, Cost, and Revenue values for each time period
9. Save changes

### Automatically Populate Cost Plans

Auto-populate from team or task assignments to save time. Setup:
1. Define plan defaults in the entity (period type and grouping attributes)
2. Define costs and rates in the cost/rate matrix
3. Financially enable the investment and associate a cost/rate matrix
4. Financially enable resources/roles

**Auto-populate steps:**
1. Open **Financial Plans** > **Cost Plans**
2. Open **Actions** menu > **New from Investment Team** or **New from Task Assignments**
3. Enter plan name, ID, description
4. Save — line item details are automatically populated
5. (Optional) Re-populate later via **Actions > Populate from Investment Team** or **Populate from Task Assignments**

### Edit Cost Plans

1. Open the cost plan
2. Use left/right arrows to navigate time periods
3. Edit **Units**, **Cost**, **Revenue** fields
4. Save changes (only periods outside the freeze date can be edited)

### Set Plan of Record

1. Open **Financial Plans** > **Cost Plans**
2. Click the **Set Plan of Record** icon next to the desired plan

### Display Capital and Operating Costs

- **From Investment Team:** Set capitalization percentage on team member properties
- **From Task Assignments:** Set Cost Type (Capital or Operating) at investment or task level
- Select **Cost Type** as a grouping attribute in the cost plan to see the breakdown

## Benefit Plans

Benefit plans estimate investment benefits. They can be associated with cost plans to calculate ROI and NPV. A benefit plan can link to unlimited cost plans, but a cost plan can have only one benefit plan.

### Create a Benefit Plan

1. Open the investment
2. Open **Financial Plans** > **Benefit Plans**
3. Click **New** and complete:
   - **Period Type** — Time period unit
   - **Plan Start Period / Plan End Period** — Date range
4. Save changes

### Add Line Item Details to Benefit Plans

1. With the benefit plan open, click **Add**
2. Enter benefit plan details in the **Detail** field
3. Save — for each detail, enter:
   - **Benefit** — Planned benefit for the period
   - **Actual Benefit** — Actual benefit for the period
   - **Variance** — Difference between actual and planned (calculated)

### Associate Benefit Plans with Cost Plans

1. Open the cost plan > click **Properties**
2. Select a benefit plan in the **Benefit Plan** field
3. Save

### Associate Benefit Plans with Submitted Budgets

1. Open the submitted budget plan > click **Properties**
2. Select a benefit plan in the **Benefit Plan** field
3. Save (once approved, the benefit plan association cannot be changed)

## Budget Plans

When a cost plan is approved, it becomes the budget plan. You can submit a portion of a cost plan for approval by varying start/end dates.

**Rules:**
- Only one budget plan can be submitted or approved at a time
- When submitted, an approved budget becomes the POR
- You can edit a submitted budget; you cannot edit an approved budget

### Submit Cost Plan as Budget Plan

1. Open the investment > **Financial Plans** > **Cost Plans**
2. Copy the plan ID
3. Open **Actions** menu > **Submit Plan of Record for Approval**
4. Complete:
   - **Plan ID** — Paste the copied ID
   - **Plan Start Period / Plan End Period** — Modify to submit a portion
   - **Submit Options** — Merge (add/update) or Replace (delete line items or change structure)
5. Click **Submit for Approval**

### Approve or Reject Submitted Budget Plans

1. Open the investment > **Financial Plans** > **Budget Plans**
2. Open the submitted budget plan
3. (Optional) Edit fields in the Unit, Cost, Revenue Details section
4. Click **Approve** or **Reject**

### Budget Revisions

Two types of revision:

| Type | Use When |
|------|----------|
| **Merged** | Adding/updating line items or time periods; merge changes with existing budget |
| **Replacement** | Deleting line items; changing grouping attributes or period types |

**To submit a replacement:** If grouping attributes or period types differ from the existing budget, **Replace** is the only option available.

## Copy Financial Plans

**Rules:**
- Period type and grouping attributes default to source plan values (cannot be changed)
- Process instances from source plan are not copied
- Budget plans cannot be copied (only cost and benefit plans)

### Copy Cost Plans

1. Open **Financial Plans** > **Cost Plans**
2. Select the cost plan to copy
3. Open **Actions** > **Copy Cost Plan**
4. Configure:
   - **Start Period / End Period** — Which portion of the source to copy
   - **Scale By %** — Percentage to increase/decrease dollar values (Default: 0%)
   - **Target Plan Name, ID, Start Period, End Period, Grouping Attributes**
5. Save — new plan appears in the cost plans list

### Copy Benefit Plans

1. Open **Financial Plans** > **Benefit Plans**
2. Select the benefit plan to copy
3. Open **Actions** > **Copy Benefit Plan**
4. Configure source copy range, scale by %, and target plan properties
5. Save

## Related Notes

- [[Financial Summaries]] — High-level financial summaries
- [[Financial Processing Setup]] — Enable investments for financial processing
- [[Overview]] — Financial management setup steps
- [[_MOC Classic PPM]]
