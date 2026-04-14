---
title: Financially Enable Projects (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2277
canonical: true
audience: everyone
domain: classic
---
# Financially Enable Projects (Classic PPM)

To process financial transactions against a project, define its financial properties — including the financial department, location, and associated cost/rate matrix. Financial enablement allows actual costs from posted transactions to appear on cost plans, reports, portfolios, and other areas.

## Prerequisites

Before defining the financial properties, verify you have set up:

- A financial entity associated with a department and a location OBS
- Financial locations for the entity
- Financial departments associated with locations
- A cost/rate matrix for determining cost and charge rates

> [!WARNING]
> Setting financial status to "Open" without completing the required financial setup causes error messages when processing actual transactions.

## Define the Financial Properties of a Project

The specific financial properties required depend on the columns configured in your cost/rate matrix.

1. Open **Home > Portfolio Management > Projects**
2. Open the project
3. Open **Properties** menu > **Settings**
4. In the **Financial** section, complete the required fields as described in [[Financial Processing Setup]]
5. In the **Labor / Material / Equipment / Expense Transaction Matrix** sections, set:
   - **Rate Source** — Matrix used for billing rates
   - **Cost Source** — Matrix used for cost calculation
   - **Exchange Rate Type** — Average, Fixed, or Spot (multicurrency only)
6. Save changes

## Key Financial Property Fields

| Field | Description |
|-------|-------------|
| **Department** | Used during chargeback processing and for cost/rate matrix matching |
| **Location** | Used for debit/credit rules and cost/rate matrix matching; falls back to entity location if unset |
| **Financial Status** | Open / Hold / Closed |
| **Type** | Standard (chargebacks) or Internal (no chargebacks — recommended unless using third-party billing) |
| **WIP Class** | Used to match with cost/rate matrices and for reporting |
| **Investment Class** | Used to match with cost/rate matrices and for reporting |
| **Cost Type** | Capital or Operating (Default: Operating); used for cost plan analysis |
| **Billing Currency** | Currency for chargebacks; **cannot be changed** after transactions or financial plans exist |

## Related Notes

- [[Financial Processing Setup]] — Full details on enabling investments and resources
- [[Detailed Financial Plans]] — Create cost plans for financially enabled projects
- [[Project Templates]] — Copy financial plans from templates
- [[_MOC Classic PPM]]
