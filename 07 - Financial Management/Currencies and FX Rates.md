---
title: Set Up Currencies and Exchange Rates
tags:
  - admin
aliases:
  - Multi-Currency
  - Exchange Rates
canonical: true
audience: finance, pm
domain: financials
---
# Set Up Currencies and Exchange Rates

5. Complete the fields on the page: - Freeze Date: Specifies the date on which you can edit the time periods for a plan. You cannot edit the time periods for a detailed financial plan earlier than the freeze date.
> [!note]
> You cannot manually edit the detailed financial plans for time periods before the freeze date.

However, if you auto-populate cost plans using Populate from Investment Team or Populate from Task Assignments, the time periods get updated irrespective of freeze date.
- Lock Plan Structure: Specifies whether to prevent managers from overriding the plan defaults when defining cost plans. - Grouping Attributes:
Specifies the categories for designing the cost plan and benefit plan line item detail structure. 6. Click Save.
Set Up Currencies and Foreign Exchange Rates
To perform currency conversions for financial transactions, set up conversion rates. The currency code that you select becomes the default system currency for all financial management pages. Once you set a system currency, you cannot change it.
You must set up the system currency before you can do any of these tasks: - Create entities and import them through the XML Open Gateway (XOG).

- Define financial properties and financial summaries for investments. - Change your system from single-currency to multicurrency.
If multicurrency is enabled, you can view the default system currency. Multicurrency is enabled when you install Classic PPM.
To determine whether Classic PPM is installed as a multicurrency system and the default system currency, review the Currency section in the financial management defaults.
- Activate Currencies - Set Up Conversion Rates - Disable Currency Conversion
Activate Currencies Before you can use a currency in a conversion rate, activate the currency. You can complete this step only when the product is set up as a multicurrency system.
1. Click Administration, Finance, Setup. The financial organizational structure appears.
2. Click Currency.
3. Select each currency that you want to activate, and click Activate.
> [!tip]
> The product supports the following 193 Currencies list
Set Up Conversion Rates To perform currency conversions, set up conversion rates in both directions.

For example, if you set up an exchange rate for INR to USD, you must also set up the reverse direction exchange rate from USD to INR.
If you do not set up the reverse exchange rate, an error appears when you try to process transactions after changing the currency type.
You can complete this step only when the product is set up as a multicurrency system.

## Related
- [[_MOC Financials]]

%%Source: p2167%%

