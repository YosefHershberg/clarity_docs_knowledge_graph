---
title: Cost Plus Codes (Classic PPM)
tags:
  - classic
  - howto
  - admin
source_pages: 2154-2155
---
# Enable Cost Plus Codes (Classic PPM)

The cost plus mechanism is used to apply mark-ups to actual or standard costs. A cost plus code is a set of cost plus rules that allow mark-up via multiplier (factor), burden, and overhead methods. Cost plus codes are used in existing cost/rate matrices.

## Create Cost Plus Codes

1. Open **Administration > Finance > Cost Plus Codes**
2. Click **New**
3. Complete the requested information:
   - **Applies To** — Defines the cost type for this code:
     - *Actual* — The actual amount paid for transactions
     - *Standard* — The blended or burdened rate
4. Save changes

> **Note:** If a cost plus code has been used in a transaction, you cannot delete it.

## Create Cost Plus Rules and Add to Cost Plus Codes

Cost plus rules specify the conditions and amounts for mark-ups. Define at least one rule for each code. You can define unlimited codes or rules.

**To delete rules:**
- To delete the last rule added, click **Delete Last Rule**
- To delete rules with a lower sequence number, first delete all rules with higher sequence numbers

**Steps:**
1. Open **Administration > Finance > Cost Plus Codes**
2. Click the cost plus code to add a rule
3. In the **Rules in effect** section, click **New**
4. Complete the fields:
   - **Units From** — Beginning value for which the rule is invoked
   - **Multiplier** — Mark-up type for actual or standard cost (Default: Percent)
   - **Burden** — Mark-up type for burden (Default: Percent)
   - **Overhead** — Mark-up variable for overhead (Default: Percent)
   - **Sequence** — Range of units to which the mark-up applies
   - **Applies To** — What the mark-up applies to (cost, rate, or actual)
   - **To** — End of the range for invoking the rule
   - **Multiplier Amount** — Percentage for multiplier mark-up (Default: 0)
   - **Burden Amount** — Percentage for burden mark-up: `burden = cost × burden amount` (Default: 0)
   - **Overhead Amount** — Percentage for overhead mark-up: `overhead = cost × overhead amount` (Default: 0)
5. Save changes

## Usage in Cost/Rate Matrices

Once a cost plus code is defined, assign it to a row in a cost/rate matrix:

- Navigate to **Administration > Finance > Manage Matrix**
- When adding or editing matrix rows, select the **Cost Plus Code** field
- The cost plus calculation applies whenever a transaction matches that matrix row

## Related Notes

- [[Detailed Financial Plans]] — Cost plans that use rate matrices
- [[Financial Processing Setup]] — Enable investments and resources for financial processing
- [[Overview]] — Financial management setup steps
- [[_MOC Classic PPM]]
