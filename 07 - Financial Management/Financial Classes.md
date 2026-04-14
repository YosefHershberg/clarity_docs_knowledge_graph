---
title: Set Up Financial Classes
tags:
  - admin
aliases:
  - Financial Classification
canonical: true
audience: finance, pm
domain: financials
---
# Set Up Financial Classes

> [!warning]
> When entering a value for any money field (including custom money fields), the product supports and is limited to up to 18 digits. Any value after the 18th digit changes to a zero.
Follow these steps:
1. Click Administration, Finance, Setup.
2. Click Foreign Exchange Rates.
3. Click New.
4. Complete the six required fields on this page:
a. From Currency: Select one of your active currencies. b. To Currency: Select another active currency for the conversion. If the currency you want does not appear in the
list, activate it. c. Conversion Rate: Enter a decimal number between 0 and 1, or a multiplier between 1 and 2. d. Rate Calculation Method: Specify whether the conversion uses multiplication or division to calculate the
exchange rate. e. Exchange Rate Type: Specify the stability period of the foreign exchange rate. As a general rule, specify Average.
Fixed and Spot rate types are optional. Financial portlets and stock financial reports such as the Budget Forecast Analysis use Average.

Transactions and the Billing View for cost plans use the type defined here on the Financial Settings page or in Financial default system settings for transactions. - Average:
A blended derived rate over a period of time, usually weekly or monthly. - Fixed: A fixed rate that does not change over a period of time. - Spot:
A variable rate that changes over the course of the day. f. Effective Date: Specify the first day when you want the system to apply this new foreign exchange rate. 5.
Click Save and Return.
Disable Currency Conversion
The program or project hierarchy can include child investments, services, or ideas that are associated with multiple currencies. To provide the financial rollup from multiple currencies, the product completes the following tasks:
- Converts the different currencies to the parent investment currency. - Aggregates the converted values and rolls up the values to the parent investment currency.
If there is a large amount of data that needs currency conversion, you can run into a performance issue.
(On-Premise only) As an administrator, you can disable the currency conversion feature by running the following SQL query.

Once you disable currency conversion, the product does not convert the child investment currencies to the parent currency before aggregating and rolling them up to the top level.
UPDATE CMN_OPTION_VALUES SET VALUE = '0' WHERE OPTION_ID= (SELECT ID FROM CMN_OPTIONS WHERE OPTION_CODE='CURRENCY_CONVERSION_REQUIRED')
To re-enable currency conversion after disabling it, run the following SQL query:
UPDATE CMN_OPTION_VALUES SET VALUE = '1' WHERE OPTION_ID= (SELECT ID FROM CMN_OPTIONS WHERE OPTION_CODE='CURRENCY_CONVERSION_REQUIRED')
> [!note]
> SaaS customers can create a support ticket to disable or enable currency conversion for their systems.
Set Up Financial Classes
Use financial classes to: categorize resources, companies, investments, and transactions, uniquely describe rules when processing chargeback-related transactions, and enable projects for financial processing.

- Resource Classes - Company Classes - Investment Classes - Work in Process Classes - Transaction Classes - Deactivate the Financial Attributes

## Resource Classes
Use resource classes to categorize financially enabled resources. Here are some examples:
- Organizational. Executive, management, or staff. - Geographical category. Local, offshore, or EMEA. - Skill Level. Principal, senior, or associate. - Equipment. Computer hardware, software, or office equipment. - Materials. Specifications, presentations, or user guides.
> [!note]
> You can associate a resource to only one resource class.
Company Classes
Company classes categorize clients, vertical markets, or lines of business within your financial organization and are required when financially enabling a company. Use company classes for the following reasons:
- Associating with a company. - Defining cost or rate matrices. - Reporting.
A company can belong to only one company class at a time. Here are some examples:
- Industry. Government, education, consumer, technology - Region. North America, South America, EMEA
> [!warning]
> Do not delete the company class if a company is associated with the company class. Deleting assigned company classes causes validation errors.
Investment Classes
Use investment classes to categorize work logically within an organization. For example, you can use investment classes to categorize investments.
Work in Process Classes
Use work-in-process (WIP) classes to categorize companies and investments. WIP is also used to indicate methods of revenue recognition.

You can use the WIP class to define the rates and costs for transactions, and to group transactions for posting to the general ledger.
For projects, you can use them to calculate recognized revenue.
> [!warning]
> If the WIP class is currently associated with a company, investment, or transaction, do not delete the WIP class.

## Transaction Classes

Every transaction is associated with a transaction class. This association is useful when applying costs to investments in an organization. Use transaction classes to categorize the type of work that resources record and to differentiate costs — for example, internal or contract labor.

## Deactivate Financial Attributes

You can deactivate the financial attributes of Resource, Company, Investment, Work in Process, and Transaction Classes when they are no longer needed.

> [!WARNING]
> Do not delete a financial class that is currently in use by a company, investment, resource, or transaction. Deleting assigned classes causes validation errors. Deactivate instead of deleting.

Follow these steps:

1. Click **Administration**, **Finance**, and **Setup** — the financial organizational structure appears
2. Click the relevant class link: **Resource / Company / Work in Progress / Investment / Transaction Classes**
3. In the **Active** column, select **No** to deactivate the attribute
4. Click **Save**

## Related
- [[Financial Entity Setup]]
- [[Cost Rate Matrix]]
- [[_MOC Financials]]

%%Source: p2168-2169%%

