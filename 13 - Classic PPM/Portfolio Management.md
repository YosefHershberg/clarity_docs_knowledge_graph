---
title: Portfolio Management
tags:
  - concept
  - classic
aliases:
  - Portfolio Management
---

# Portfolio Management

Using portfolio management, portfolio managers and stakeholders can create and review a collection of investments. Once you create a portfolio, the product creates a snapshot of your investment data for management and reporting.
You can set a cadence for refreshing this snapshot and create alternate plans to explore what-if scenarios.

A portfolio is a collection of investments. You can create portfolios based on:
- **Investments** (e.g., PMO projects, IT applications, new product development lines)
- **Specific investments** (e.g., all active projects)
- **Organization** (e.g., IT plan of record, marketing initiatives)
- **Interest** (e.g., green initiatives, merger and acquisition proposals)

> [!NOTE]
> The documentation may not match what you see in the product. All access to features, menus, pages, buttons, and objects is determined by your access rights. Contact your administrator if you cannot complete any steps.

---

## Evaluate Your Portfolio Requirements

Before creating a portfolio, evaluate what business goals you want to accomplish:

- **Monitor investments** ג€” Configure portfolio views to display the investment data you care about (e.g., current status, planned costs for the next year).
- **Prioritize investments** ג€” Use ranking rules or manual dragging to set investment priority order.
- **Plan and manage using targets** ג€” Set high-level cost, resource, and benefit constraints.
- **Explore alternatives** ג€” Create plans and what-if scenarios within the portfolio.

> [!NOTE]
> The **Waterlines**, **Plans**, **Investments**, and **Targets** views are available as part of core portfolio management. Additional portfolio views require the **PMO Accelerator** add-in.

---

## Prepare to Use Portfolios

### Set Up Monitoring Criteria

The portfolio provides a snapshot of actual investment data, updated via a sync job. Before building a portfolio, define which investment attributes to track.

**Recommended setup order:**
1. Define the monitoring criteria (e.g., Cost, Status, ROI, Risk).
2. Register Portfolio Investment attributes (stock or custom) you want to display ג€” these are updated when the **Synchronize Portfolio Investments** job runs.

### Configure Views, Reports, and Workflows

Verify the product is configured to support your desired data:
- Detailed project cost data requires generated cost plans.
- Risk and issue surfacing requires project object configuration.
- Timesheet setup is required to track actual time.

### Set Up Investment and Resource Data

| Area | Setup Required |
|---|---|
| **Multi-currency** | Enable if managing investments across multiple currencies. |
| **Cost types** | Configure capital and operating cost types for cost breakdowns. |
| **Roles** | Define roles if planning resource capacity by role. |
| **Investments** | Create projects and assign resources before adding to a portfolio. |

---

## Create a Portfolio of Investments

### Verify the Prerequisites

1. Confirm you have these access rights:
- **Portfolio
- Create**
- **Portfolio
- Navigate**
2. Verify that active investments and ideas exist for the planning time period.
3. Create any child portfolios you want to associate with the parent portfolio.
4. Set up capital and operating cost types on investments.
5. Define project teams with allocation data to display role demand.
6. Set the following attributes on investments:
- **Risk** ג€” Set on the investment risk properties page.
- **Business Alignment** ג€” Set under **Properties > Business Alignment > Alignment Factors**.
- **Approved** ג€” Set via the **Status** attribute on general investment properties.
- **Goal** ג€” Set on the general investment properties page.

### Define the Portfolio General Properties

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Click **New**.
3. Complete the **General** section:
- **Managers** ג€” Portfolio owners (automatically assigned view and edit rights).
- **Stakeholders** ג€” Business stakeholders (automatically assigned view rights).
- **Start Date / Finish Date** ג€” Planning range. Investment data is clipped to this horizon.
- **Sync Schedule** ג€” How often to refresh portfolio data (appears after initial save).
4. Complete the **Targets** section:
- **Total Cost** ג€” Aggregate of capital and operating costs (read-only).
- **Capital Cost** ג€” Capital cost target for the planning horizon.
- **Operating Cost** ג€” Operating cost target for the planning horizon.
- **Currency** ג€” Portfolio currency for rolling up all investment costs and benefits.
- **Benefits** ג€” Total benefit target for the planning horizon.
- **Roles** ג€” Effort target (hours or FTE) for the planning horizon.
- **Capacity Unit Type** ג€” **FTE** (average across periods) or **Hours** (total for the horizon).
5. Save your changes.

### Define the Portfolio Page Layout

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio, click the **Properties** menu, and select **Settings**.
3. Select a dashboard view:
- **PMO-Portfolio Investment Dashboard** ג€” Available with the PMO Accelerator add-in.
- **Portfolio Default Layout** ג€” Default view without the add-in.
4. Save your changes.

### Define the Portfolio Sync Properties

The portfolio data snapshot is refreshed by the **Synchronize Portfolio Investments** job.

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click the **Manual** link next to **Sync Schedule**.
3. Select the recurrence:
- **Manual** ג€” Click **Sync Now** to refresh on demand.
- **Weekly** ג€” Select the days and months on which to sync.
- **Monthly** ג€” Select the days of the month and respective months.
4. Save your changes.

> [!TIP]
> Example: Mary the IT portfolio manager presents every Monday. She sets the sync to run every Sunday at 9:00 AM so the data is fresh for her weekly meeting.

### Build the Portfolio Content

> [!NOTE]
> Portfolio limits: maximum **700 attributes** and **75 roles**.

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Contents Editor**.
3. Select the investment types and click **Include**.

> [!TIP]
> Use the **Power Filter** to limit investments by type. Examples:
> - Active ideas only: `idea.is_active == 1`
> - Active non-template projects: `project.is_active == 1 && project.is_template == 0`
>
> To add individual investments without a filter, use the **Individual Investments** section.

4. Click **Sync Now** to copy investments and related data to the portfolio.
5. (Optional) Monitor job progress: **Home > Reports and Jobs > Jobs > Log** ג€” look for the **Synchronize Portfolio Investments** job.

### Define Detailed Planning Targets

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Targets**.
3. Complete **Cost: Portfolio Cost Totals**:
- **Target** ג€” Aggregated planned cost (capital + operating).
- **Distributed Target** ג€” Planned cost scaled over time within the horizon.
- **Variance** ג€” Difference between distributed and approved target amounts.
- **Distributed Target (Total)** ג€” Enter an amount to distribute uniformly across all periods.
4. Complete **Benefit: Portfolio Benefit Totals** (same fields as Cost).
5. Complete **Role: Portfolio Role Totals** (same fields as Cost).
6. Save your changes.

> [!NOTE]
> Edited cells are flagged with a red pending-edits indicator. Click **Save** to make edits permanent.

### Define Role Targets

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Targets**.
3. In the **Role: Portfolio Role Totals** section:
- Click **Add Roles** to filter or add roles.
- Select a role and click **Populate Capacity** to fill in existing resource capacity.
- Select a role and click **Scale Capacity** to align populated capacity with estimated resource time.
4. Save your changes.

> [!NOTE]
> After adding roles, click **Sync Now** to see the latest aggregated and individual role values on the Waterlines view.

### Review the Waterline View

After building content and defining targets, use the **Waterlines** view to see how planned targets align with investments.

## Default sort:
- Approved investments with the most recent finish dates sort to the top.
- Unapproved investments with later finish dates sort to the bottom.

The Waterlines view provides:
- Prioritized investment list with budget, resource, and benefit data.
- Portfolio target spread over the planning horizon.
- Approved vs. unapproved investment breakdown.
- Actual vs. target cost comparison by period.

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Waterlines**.
3. To change default time periods, click the **Options** icon and select **Gantt**.

### Define Overall Portfolio Health

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio, click the **Properties** menu, and select **Metrics**.
3. Select a color or score for each health factor and business measure:

| Color | Score Range |
|---|---|
| Red | 0ג€“34 |
| Yellow | 34ג€“68 |
| Green | 68ג€“100 |

- **Health factors**: Cost, Schedule, Resource
- **Business measures**: Goal Alignment, Innovation, Success, Risk

---

## Rationalize a Portfolio of Investments

Portfolio rationalization involves three overlapping activities:

- **Prioritization** ג€” Assign rankings to investments using ranking rules or manual drag-and-drop on the Waterlines view.
- **Evaluation** ג€” Associate investments with company values (cost, benefit, ROI) via what-if plans and review waterline views with stakeholders.
- **Rationalization** ג€” Finalize investment selections based on all information including stakeholder feedback, mandatory requirements, and budget constraints.

> [!TIP]
> **Example (Forward Inc.):** Raj the CIO creates a portfolio of IT investments with a $2,600,000 budget target.
Through iterative planning ג€” Plan 1 (prioritized by goal), Plan 2 (prioritized by capital cost), Plan 3 (final with mandatory flags) ג€” the team rationalizes the investment list so that funded investments fall above the waterline and the portfolio meets the funding cutoff.

---

## Explore Alternate Portfolio Plans

A portfolio plan is a subset of portfolio data used to explore alternatives in a what-if environment. You can create named plan versions, modify targets and investment priorities, and ultimately designate one as the **Plan of Record (POR)**.

### Create a Plan Within a Portfolio

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Plans**, then click **New**.
3. Complete the requested information:
- **Start / Finish Dates** ג€” A subset of the portfolio horizon.
- **Planning Targets** ג€” Cost, resource, and benefit targets for the plan period.

### Generate Versions of the Plan or Scenarios

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Plans**.
3. Select the plan and click **Copy**.
4. Rename the copied plan.
5. Edit plan properties based on new requirements.

### Designate the Plan of Record

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Plans**.
3. Select the desired plan and click **Set Plan of Record**.

---

## Configure the Waterlines View

### Configure Constraint Columns

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Waterlines**.
3. From the **Plan** drop-down, select the portfolio or a plan.
4. Click the **Options** icon and click **Configure**.
5. Move columns from **Available Columns** to **Selected Columns**.
6. Click **Save**.
7. (Optional) To widen a column: open the **List Column Section** menu > **Fields** > click the **Properties** icon for the column > increase **Column Width** > save.

> [!TIP]
> Drag the Gantt portion of the view to the right if new columns are not visible.

### Define and Apply Ranking Rules

Ranking rules determine investment order in the Waterlines view. Weighted attributes drive the ranking calculations.

**Steps:**
1. Open **Home**, and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Waterlines**.
3. From the **Plan** drop-down, select the portfolio or a plan.
4. Click **Ranking Rules**, then click **Define Ranking Rules**.
5. In the **Primary Constraint** field, select the investment attribute for the waterline (e.g., **Planned Cost**).
6. Click **Add** and select attributes to weight.
7. For each attribute:
- Select the ranking method.
- Enter a number in the **Attribute Weighting** field.
- For lookup attributes, click **Lookup Value Weighting** to assign weights per lookup value.
8. Click **Save and Return**.
9. Click **Ranking Rules**, then click **Run Ranking Rules**.
10. Click **Find Waterline** to scroll to the waterline in a long list.

> [!NOTE]
> Plans created for a portfolio inherit the portfolio's ranking rules. Copied plans also inherit ranking rules from the portfolio.

### Balance Portfolio Cost and Resource Constraints

For a selected constraint (e.g., **Planned Cost**), the aggregation rows show:
- **Above waterline** ג€” Totals for funded investments.
- **Below waterline** ג€” Totals for unfunded investments.
- **Distributed target** ג€” Target spread over the time period.
- **Variance** ג€” Difference between target and above-waterline amounts (negative variance shown in red).

Change the time scale (monthly, quarterly) to view breakdowns by different time slices.

---

## Related

- [[_MOC Classic PPM]]

%%Source: p2221-2249%%

